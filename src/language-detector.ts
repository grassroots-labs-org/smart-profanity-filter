/**
 * Language Detector — hybrid ELD n-gram + script + vocabulary detection.
 *
 * Three detection layers:
 *   1. **ELD n-gram detection**: Corpus-trained n-gram model (Nito-ELD) provides
 *      per-word language scores and full-text Bayesian priors.
 *   2. **Script detection**: Unicode codepoint ranges map characters to
 *      language families instantly and deterministically.
 *   3. **Vocabulary detection**: Trie-based word matching against per-language
 *      dictionaries disambiguates languages sharing a script.
 *
 * High-signal suffixes/prefixes (accent-bearing, 0.3+ weight) provide additional
 * disambiguation for accented/diacritical text.
 *
 * Designed for use alongside the profanity filter to weight matches by detected
 * language context.
 */

// @ts-ignore — eld ships as JS with .d.ts but no proper ESM types
import { eld } from "eld/small";
import { languageTries, phraseSets } from "./language-dicts.ts";
import { detectRomanization } from "./romanization-detector.ts";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

/** ISO 639-1 language code — covers all 60 ELD-supported languages + our trie languages */
export type LanguageCode =
  // Languages with trie vocabulary (17)
  | "en" | "es" | "fr" | "de" | "it" | "pt" | "nl" | "tr"
  | "ru" | "ar" | "zh" | "ja" | "ko" | "hi" | "bn" | "ta" | "te"
  // Additional ELD-supported languages (no trie, ELD n-gram only)
  | "am" | "az" | "be" | "bg" | "ca" | "cs" | "da" | "el"
  | "et" | "eu" | "fa" | "fi" | "gu" | "he" | "hr" | "hu"
  | "hy" | "is" | "ka" | "kn" | "ku" | "lo" | "lt" | "lv"
  | "ml" | "mr" | "ms" | "no" | "or" | "pa" | "pl" | "ro"
  | "sk" | "sl" | "sq" | "sr" | "sv" | "th" | "tl" | "uk"
  | "ur" | "vi" | "yo";

/** Languages that have trie vocabulary dictionaries */
const TRIE_LANGUAGES = new Set<LanguageCode>([
  "en", "es", "fr", "de", "it", "pt", "nl", "tr",
  "ru", "ar", "zh", "ja", "ko", "hi", "bn", "ta", "te",
]);

export interface LanguageDetection {
  /** ISO 639-1 code */
  language: LanguageCode;
  /** Max likelihood that any single word belongs to this language (0–1).
   *  1.0 = at least one word unambiguously belongs to this language. */
  present: number;
  /** Proportion of text mass belonging to this language (0–1, based on word count) */
  proportion: number;
  /** Number of words attributed to this language */
  wordCount: number;
}

export interface DetectionResult {
  /** Detected languages sorted by proportion (highest first) */
  languages: LanguageDetection[];
  /** The original input text */
  text: string;
  /** Total words analyzed */
  totalWords: number;
}

export interface DetectionOptions {
  /** Minimum proportion to include a language (0–1). @default 0.05 */
  minConfidence?: number;
  /** Maximum number of languages to return. @default 5 */
  maxLanguages?: number;
  /** Seed the Bayesian prior with expected language probabilities.
   *  Keys are language codes, values are relative weights (will be normalized).
   *  Example: `{ en: 0.8, es: 0.2 }` — expect mostly English with some Spanish.
   *  This nudges ambiguous words toward the seeded languages. */
  priorWeights?: Partial<Record<LanguageCode, number>>;
}

// ---------------------------------------------------------------------------
// Unicode script ranges → language mapping
// ---------------------------------------------------------------------------

interface ScriptRange {
  start: number;
  end: number;
  languages: LanguageCode[];
}

/**
 * Unicode codepoint ranges mapped to the languages they indicate.
 * Ranges are checked in order; first match wins for each character.
 */
const SCRIPT_RANGES: ScriptRange[] = [
  // Cyrillic
  { start: 0x0400, end: 0x04FF, languages: ["ru"] },
  { start: 0x0500, end: 0x052F, languages: ["ru"] }, // Cyrillic Supplement

  // Arabic (includes Urdu, Farsi — we tag as "ar" for now)
  { start: 0x0600, end: 0x06FF, languages: ["ar"] },
  { start: 0x0750, end: 0x077F, languages: ["ar"] }, // Arabic Supplement
  { start: 0x08A0, end: 0x08FF, languages: ["ar"] }, // Arabic Extended-A
  { start: 0xFB50, end: 0xFDFF, languages: ["ar"] }, // Arabic Presentation Forms-A
  { start: 0xFE70, end: 0xFEFF, languages: ["ar"] }, // Arabic Presentation Forms-B

  // Devanagari (Hindi, Marathi, Sanskrit)
  { start: 0x0900, end: 0x097F, languages: ["hi"] },
  { start: 0xA8E0, end: 0xA8FF, languages: ["hi"] }, // Devanagari Extended

  // Bengali
  { start: 0x0980, end: 0x09FF, languages: ["bn"] },

  // Tamil
  { start: 0x0B80, end: 0x0BFF, languages: ["ta"] },

  // Telugu
  { start: 0x0C00, end: 0x0C7F, languages: ["te"] },

  // Hangul (Korean)
  { start: 0x1100, end: 0x11FF, languages: ["ko"] }, // Jamo
  { start: 0x3130, end: 0x318F, languages: ["ko"] }, // Compatibility Jamo
  { start: 0xAC00, end: 0xD7AF, languages: ["ko"] }, // Syllables
  { start: 0xD7B0, end: 0xD7FF, languages: ["ko"] }, // Jamo Extended-B

  // Japanese-specific kana
  { start: 0x3040, end: 0x309F, languages: ["ja"] }, // Hiragana
  { start: 0x30A0, end: 0x30FF, languages: ["ja"] }, // Katakana
  { start: 0x31F0, end: 0x31FF, languages: ["ja"] }, // Katakana Phonetic Extensions
  { start: 0xFF65, end: 0xFF9F, languages: ["ja"] }, // Half-width Katakana

  // CJK Unified Ideographs — shared by Chinese and Japanese
  // When we see CJK without any kana, it's more likely Chinese.
  // When kana is also present, the kana ranges already tag "ja".
  { start: 0x4E00, end: 0x9FFF, languages: ["zh", "ja"] }, // CJK Unified
  { start: 0x3400, end: 0x4DBF, languages: ["zh", "ja"] }, // CJK Extension A
  { start: 0x20000, end: 0x2A6DF, languages: ["zh", "ja"] }, // CJK Extension B
  { start: 0x2A700, end: 0x2B73F, languages: ["zh", "ja"] }, // CJK Extension C
  { start: 0x2B740, end: 0x2B81F, languages: ["zh", "ja"] }, // CJK Extension D
  { start: 0x3000, end: 0x303F, languages: ["zh", "ja"] }, // CJK Symbols & Punctuation

  // Latin Extended — covers accented chars used in European languages
  // We can't distinguish en/es/fr/de/it/pt from characters alone, but certain
  // diacritical marks are strong signals for specific languages.
  { start: 0x00C0, end: 0x00FF, languages: ["es", "fr", "de", "it", "pt", "en"] }, // Latin-1 Supplement
  { start: 0x0100, end: 0x017F, languages: ["es", "fr", "de", "it", "pt", "tr"] }, // Latin Extended-A
  { start: 0x0180, end: 0x024F, languages: ["es", "fr", "de", "it", "pt", "tr"] }, // Latin Extended-B

  // Turkish-specific characters
  // ğ (0x011F), ş (0x015F), ı (0x0131), İ (0x0130), ç (0x00E7 shared with FR/PT)
  // These are already covered by Latin Extended-A above, but we boost Turkish
  // via vocabulary detection when these are present.
];

/**
 * Specific diacritical characters that are strong signals for particular languages.
 * Maps codepoints to language boosts.
 */
const DIACRITICAL_SIGNALS: Map<number, LanguageCode[]> = new Map([
  // German-specific
  [0x00C4, ["de"]], // Ä
  [0x00D6, ["de"]], // Ö
  [0x00DC, ["de"]], // Ü
  [0x00E4, ["de"]], // ä
  [0x00F6, ["de"]], // ö
  [0x00FC, ["de"]], // ü
  [0x00DF, ["de"]], // ß

  // Spanish-specific
  [0x00D1, ["es"]], // Ñ
  [0x00F1, ["es"]], // ñ
  [0x00BF, ["es"]], // ¿
  [0x00A1, ["es"]], // ¡
  [0x00E1, ["es", "pt"]], // á (common in Spanish, also Portuguese)
  [0x00C1, ["es", "pt"]], // Á
  [0x00ED, ["es"]], // í
  [0x00CD, ["es"]], // Í
  [0x00F3, ["es", "pt", "it"]], // ó (Spanish, Portuguese, Italian)
  [0x00D3, ["es", "pt", "it"]], // Ó
  [0x00FA, ["es", "pt"]], // ú
  [0x00DA, ["es", "pt"]], // Ú

  // French-specific accents (shared with others, but weighted)
  [0x00E9, ["fr", "es"]], // é (very common in French, also Spanish)
  [0x00C9, ["fr", "es"]], // É
  [0x00E0, ["fr"]], // à
  [0x00C0, ["fr"]], // À
  [0x00E8, ["fr"]], // è
  [0x00C8, ["fr"]], // È
  [0x00EA, ["fr"]], // ê
  [0x00EB, ["fr"]], // ë
  [0x00EE, ["fr"]], // î
  [0x00EF, ["fr"]], // ï
  [0x00F4, ["fr"]], // ô
  [0x00F9, ["fr"]], // ù
  [0x00FB, ["fr"]], // û
  [0x0153, ["fr"]], // œ
  [0x00E7, ["fr", "pt", "tr"]], // ç

  // Portuguese-specific
  [0x00E3, ["pt"]], // ã
  [0x00F5, ["pt"]], // õ

  // Turkish-specific
  [0x011E, ["tr"]], // Ğ
  [0x011F, ["tr"]], // ğ
  [0x015E, ["tr"]], // Ş
  [0x015F, ["tr"]], // ş
  [0x0130, ["tr"]], // İ (capital I with dot)
  [0x0131, ["tr"]], // ı (dotless i)
]);


// ---------------------------------------------------------------------------
// Global Bayesian prior — distribution-weighted
// ---------------------------------------------------------------------------
// As words are processed left-to-right, each language accumulates a running
// proportion of the text. For each subsequent word, the raw score is nudged
// by (1 + PRIOR_ALPHA * cumulativeProportion). This means languages that have
// already accumulated evidence get a proportional boost on ambiguous words,
// without needing predefined family groupings. Mixed-language text naturally
// gives both languages a boost; noise languages stay suppressed.
//
// PRIOR_ALPHA controls the strength: 0.2 means a language with 100% of the
// running distribution gets a 20% score boost; one with 50% gets 10%.
const PRIOR_ALPHA = 0.2;

/**
 * Shannon entropy of the cumulative distribution (in bits).
 * Low entropy = 1-2 languages dominate → prior is confident, apply full alpha.
 * High entropy = many languages roughly equal → back off, let raw scores speak.
 * Returns a scaling factor 0..1 to multiply PRIOR_ALPHA by.
 */
function entropyGate(shares: Map<LanguageCode, number>, total: number): number {
  if (total === 0) return 0;
  let entropy = 0;
  for (const count of shares.values()) {
    const p = count / total;
    if (p > 0) entropy -= p * Math.log2(p);
  }
  // Max entropy for N languages = log2(N). With 17 languages, max ≈ 4.09 bits.
  // We want full alpha when entropy < 1.5 bits (1-2 dominant languages),
  // and zero alpha when entropy > 3.5 bits (many roughly equal).
  // Linear ramp between these thresholds.
  const LOW = 1.5;
  const HIGH = 3.5;
  if (entropy <= LOW) return 1.0;
  if (entropy >= HIGH) return 0.0;
  return (HIGH - entropy) / (HIGH - LOW);
}

// ---------------------------------------------------------------------------
// Detection implementation
// ---------------------------------------------------------------------------

/**
 * Classify a single character by Unicode script to one or more language codes.
 * Returns undefined for basic Latin (A-Z, 0-9) and common punctuation — those
 * are ambiguous and need vocabulary-based disambiguation.
 */
function classifyChar(codepoint: number): LanguageCode[] | undefined {
  // Check diacritical signals first (strong language indicators)
  const diacritical = DIACRITICAL_SIGNALS.get(codepoint);
  if (diacritical) return diacritical;

  // Check script ranges
  for (const range of SCRIPT_RANGES) {
    if (codepoint >= range.start && codepoint <= range.end) {
      return range.languages;
    }
  }

  return undefined;
}

/**
 * Script-based detection: count characters belonging to each language's script.
 * Returns raw character counts per language.
 */
function detectByScript(text: string): Map<LanguageCode, number> {
  const counts = new Map<LanguageCode, number>();

  for (const char of text) {
    const cp = char.codePointAt(0);
    if (cp === undefined) continue;

    const langs = classifyChar(cp);
    if (!langs) continue;

    for (const lang of langs) {
      counts.set(lang, (counts.get(lang) || 0) + 1);
    }
  }

  return counts;
}

/** Minimum match score to count a word as a hit for a language */
const MIN_MATCH_SCORE = 0.6;

/**
 * Trie-based vocabulary detection: split text into words, score each word
 * against every language trie, aggregate scores per language.
 *
 * Each input word is walked against each language's trie in O(word_len).
 * Partial matches produce fractional scores (e.g., "thre" vs "three" = 0.8).
 * Phrase matching is done separately for multi-word expressions.
 */
function detectByVocabulary(text: string): Map<LanguageCode, number> {
  const scores = new Map<LanguageCode, number>();
  const textLower = text.toLowerCase();

  // Split into words (Unicode-aware: includes accented Latin, apostrophes)
  const words = textLower.match(/[\p{L}\p{M}'-]+/gu) || [];

  // Score each word against each language trie
  for (const word of words) {
    if (word.length < 2) continue; // Skip single chars — too ambiguous

    for (const [lang, trie] of languageTries) {
      const score = trie.matchScore(word);
      if (score >= MIN_MATCH_SCORE) {
        scores.set(lang, (scores.get(lang) || 0) + score);
      }
    }
  }

  // Phrase matching — weighted higher (5× per phrase match)
  for (const [lang, phrases] of phraseSets) {
    for (const phrase of phrases) {
      if (textLower.includes(phrase)) {
        scores.set(lang, (scores.get(lang) || 0) + 5);
      }
    }
  }

  return scores;
}

// ---------------------------------------------------------------------------
// Shannon entropy utility
// ---------------------------------------------------------------------------

/**
 * Compute Shannon entropy (in bits) over a distribution of raw scores.
 * Normalizes internally so inputs don't need to sum to 1.
 * Filters out negligible entries (< 1% of total) before computing.
 *
 * Reference values for N equally likely outcomes: H = log2(N)
 *   - 2 langs: 1.00 bits
 *   - 3 langs: 1.58 bits
 *   - 4 langs: 2.00 bits
 *   - 8 langs: 3.00 bits
 */
export function shannonEntropy(values: number[]): number {
  const total = values.reduce((s, v) => s + v, 0);
  if (total <= 0) return 0;

  // Filter to significant entries and renormalize
  const significant = values.filter(v => v / total > 0.01);
  const sigTotal = significant.reduce((s, v) => s + v, 0);
  if (sigTotal <= 0) return 0;

  let entropy = 0;
  for (const v of significant) {
    const p = v / sigTotal;
    if (p > 0) entropy -= p * Math.log2(p);
  }
  return entropy;
}

// ---------------------------------------------------------------------------
// Scrappiness / SMS-style detection
// ---------------------------------------------------------------------------

export interface ScrappinessResult {
  /** Overall scrappiness score 0–1 (higher = more informal/SMS-like) */
  score: number;
  signals: string[];
}

/**
 * Compute how "scrappy" / SMS-like the text is.
 * Romanized text tends to be informal: short words, no punctuation, no caps,
 * abbreviations, repeated chars, number substitutions.
 *
 * ELD is trained on formal text, so high scrappiness = low ELD trust.
 */
export function computeScrappiness(text: string): ScrappinessResult {
  const signals: string[] = [];
  let score = 0;

  const words = text.split(/\s+/).filter(w => w.length > 0);
  if (words.length === 0) return { score: 0, signals: [] };

  // Average word length — romanized/SMS text has shorter words
  const avgWordLen = words.reduce((s, w) => s + w.length, 0) / words.length;
  if (avgWordLen < 3.5) {
    score += 0.20;
    signals.push(`short-words(${avgWordLen.toFixed(1)})`);
  } else if (avgWordLen < 4.5) {
    score += 0.10;
    signals.push(`medium-words(${avgWordLen.toFixed(1)})`);
  }

  // No punctuation — informal text often lacks periods, commas, etc.
  const punctuation = text.match(/[.,;:!?'"()[\]{}]/g);
  const punctDensity = (punctuation?.length ?? 0) / text.length;
  if (punctDensity < 0.005) {
    score += 0.15;
    signals.push("no-punctuation");
  }

  // No capitalization (or all lowercase) — SMS/chat style
  const alphaChars = text.match(/[a-zA-Z]/g) || [];
  const upperCount = alphaChars.filter(c => c >= "A" && c <= "Z").length;
  const upperRatio = alphaChars.length > 0 ? upperCount / alphaChars.length : 0;
  if (upperRatio === 0 && alphaChars.length > 10) {
    score += 0.15;
    signals.push("all-lowercase");
  } else if (upperRatio < 0.03 && alphaChars.length > 10) {
    score += 0.05;
    signals.push("mostly-lowercase");
  }

  // Number substitutions (common in chat: 3=e, 7=t, 0=o, 2=to, etc.)
  const numInWords = words.filter(w => /\d/.test(w) && /[a-zA-Z]/.test(w)).length;
  if (numInWords >= 2) {
    score += 0.15;
    signals.push(`num-substitution(${numInWords})`);
  }

  // Repeated characters (lol → loool, pleaaase)
  const repeats = text.match(/(.)\1{2,}/g);
  if (repeats && repeats.length >= 1) {
    score += 0.10;
    signals.push(`char-repeats(${repeats.length})`);
  }

  // High proportion of very short words (≤ 2 chars) — particle-heavy / SMS
  const shortWords = words.filter(w => w.replace(/[^a-zA-Z]/g, "").length <= 2).length;
  const shortRatio = shortWords / words.length;
  if (shortRatio >= 0.40) {
    score += 0.15;
    signals.push(`short-word-ratio(${(shortRatio * 100).toFixed(0)}%)`);
  } else if (shortRatio >= 0.25) {
    score += 0.05;
    signals.push(`moderate-short-words(${(shortRatio * 100).toFixed(0)}%)`);
  }

  return { score: Math.min(1.0, score), signals };
}

// ---------------------------------------------------------------------------
// ELD penalty factor — combines romanization + scrappiness + entropy into
// a single multiplier (0–1) that deflates ELD trust in language detection
// ---------------------------------------------------------------------------

export interface EldPenaltyResult {
  /** Multiplier for ELD scores: 1.0 = full trust, 0.0 = no trust */
  factor: number;
  /** Individual penalty components */
  penalties: string[];
}

/**
 * Compute how much to trust ELD's language detection.
 *
 * Returns a factor 0–1 that should multiply ELD contributions:
 *   - 1.0: ELD is fully trusted (formal English/European text)
 *   - 0.5: ELD is partially trusted (some romanization or scrappiness)
 *   - 0.0: ELD is not trusted at all (strong romanization + very scrappy)
 */
export function computeEldPenalty(text: string): EldPenaltyResult {
  const penalties: string[] = [];
  let penalty = 0;

  // Romanization penalty — if text looks romanized, ELD is unreliable
  const rom = detectRomanization(text);
  if (rom.tier === "high") {
    penalty += 0.50;
    penalties.push(`romanization-high(${rom.confidence.toFixed(2)})`);
  } else if (rom.tier === "mixed") {
    penalty += 0.30;
    penalties.push(`romanization-mixed(${rom.confidence.toFixed(2)})`);
  } else if (rom.confidence >= 0.15) {
    penalty += 0.10;
    penalties.push(`romanization-low(${rom.confidence.toFixed(2)})`);
  }

  // Scrappiness penalty — informal text degrades ELD accuracy
  const scrappy = computeScrappiness(text);
  if (scrappy.score >= 0.60) {
    penalty += 0.30;
    penalties.push(`scrappy-high(${scrappy.score.toFixed(2)})`);
  } else if (scrappy.score >= 0.35) {
    penalty += 0.15;
    penalties.push(`scrappy-moderate(${scrappy.score.toFixed(2)})`);
  } else if (scrappy.score >= 0.20) {
    penalty += 0.05;
    penalties.push(`scrappy-low(${scrappy.score.toFixed(2)})`);
  }

  // ELD entropy — when ELD spreads probability across many languages,
  // it's confused. Apply as multiplicative damping: 1/(1 + entropy).
  const eldResult = eld.detect(text);
  const eldScores = eldResult.getScores();
  const textEntropy = shannonEntropy(Object.values(eldScores) as number[]);
  const entropyDamping = 1 / (1 + textEntropy);
  if (textEntropy >= 1.3) {
    penalties.push(`eld-entropy(${textEntropy.toFixed(2)})`);
  }

  // Combine: additive penalties become a 0–1 factor, then multiply by entropy damping
  const factor = Math.max(0, (1.0 - penalty) * entropyDamping);
  return { factor, penalties };
}

// ---------------------------------------------------------------------------
// Main detection
// ---------------------------------------------------------------------------

/**
 * Detect languages present in the input text.
 *
 * Uses a two-layer approach:
 *   1. **Script detection** — Unicode character ranges identify non-Latin scripts
 *      with high certainty (Cyrillic → ru, Devanagari → hi, Hangul → ko, etc.)
 *   2. **Vocabulary detection** — common words and phrases disambiguate Latin-script
 *      languages (en vs es vs fr vs de vs it vs pt vs nl vs tr)
 *
 * Script detection is weighted 2× relative to vocabulary detection since it's
 * more deterministic.
 *
 * @param text - The text to analyze
 * @param options - Detection options
 * @returns Detection result with languages sorted by proportion
 *
 * @example
 * ```typescript
 * const result = detectLanguages("Bonjour, comment allez-vous?");
 * // → { languages: [{ language: "fr", proportion: 0.82, present: 1.0, wordCount: 3 }, ...], text: "..." }
 *
 * const result2 = detectLanguages("こんにちは世界");
 * // → { languages: [{ language: "ja", proportion: 0.85 }, { language: "zh", proportion: 0.15 }], text: "..." }
 * ```
 */
export function detectLanguages(text: string, options: DetectionOptions = {}): DetectionResult {
  const { minConfidence = 0.05, maxLanguages = 5, priorWeights } = options;

  if (!text || typeof text !== "string") {
    return { languages: [], text: text ?? "", totalWords: 0 };
  }

  // Split text into words (Unicode-aware)
  const words = text.match(/[\p{L}\p{M}'-]+/gu) || [];
  if (words.length === 0) {
    return { languages: [], text, totalWords: 0 };
  }

  // For each word, find which language it best belongs to (winner-take-all per word).
  // Track: word count per language, and max single-word score per language (presence signal).
  const langWordCounts = new Map<LanguageCode, number>();
  const langMaxScore = new Map<LanguageCode, number>();
  let scoredWords = 0;

  // Running cumulative word shares per language — global Bayesian prior.
  // As we process words left-to-right, the running distribution nudges ambiguous
  // words toward languages that already have evidence (e.g., if text is mostly
  // English, "con" leans English over Spanish). No family groupings needed.
  const cumulativeShares = new Map<LanguageCode, number>();
  let totalCumulativeShares = 0;

  // Compute ELD penalty once at the text level — romanized / scrappy text
  // should deflate our reliance on ELD n-gram scores everywhere.
  const eldPenalty = computeEldPenalty(text);

  // Seed the Bayesian prior from ELD full-text analysis.
  // ELD gives corpus-trained n-gram priors for the entire text,
  // which are then refined per-word by trie + script matching.
  // eldPenalty.factor already includes romanization + scrappiness + text-level entropy.
  const eldPriors = getEldTextPriors(text);
  for (const [lang, weight] of Object.entries(eldPriors) as [LanguageCode, number][]) {
    const penalized = weight * eldPenalty.factor;
    if (penalized > 0.01) { // Only seed languages with meaningful ELD signal
      cumulativeShares.set(lang, penalized);
      totalCumulativeShares += penalized;
    }
  }

  // Layer user-provided weights on top of ELD priors if given.
  if (priorWeights) {
    const weightSum = Object.values(priorWeights).reduce((s, w) => s + (w || 0), 0);
    if (weightSum > 0) {
      for (const [lang, w] of Object.entries(priorWeights) as [LanguageCode, number][]) {
        if (w > 0) {
          const normalized = w / weightSum;
          cumulativeShares.set(lang, (cumulativeShares.get(lang) || 0) + normalized);
          totalCumulativeShares += normalized;
        }
      }
    }
  }

  for (const word of words) {
    if (word.length < 2) continue; // Skip single chars
    const wordScores = scoreWord(word, eldPenalty.factor);
    const entries = Object.entries(wordScores) as [LanguageCode, number][];
    if (entries.length === 0) continue;

    scoredWords++;

    // Track max score per language (presence signal)
    for (const [lang, score] of entries) {
      langMaxScore.set(lang, Math.max(langMaxScore.get(lang) || 0, score));
    }

    // ── Tension-gated Bayesian prior ──
    // Only apply when the word is genuinely contested (runner-up >= 50% of leader).
    // Clear signals (Devanagari → Hindi, "the" → English) pass through unmodified.
    // Entropy-gated: backs off when the cumulative distribution is flat.
    const sorted = [...entries].sort((a, b) => b[1] - a[1]);
    const topScore = sorted[0]?.[1] || 0;
    const runnerUp = sorted[1]?.[1] || 0;
    const tension = topScore > 0 && runnerUp > 0 ? runnerUp / topScore : 0;
    const TENSION_THRESHOLD = 0.5;
    const hasTension = tension >= TENSION_THRESHOLD;

    let adjustedEntries: [LanguageCode, number][];

    if (hasTension && totalCumulativeShares > 0) {
      const gate = entropyGate(cumulativeShares, totalCumulativeShares);
      const effectiveAlpha = PRIOR_ALPHA * gate;
      adjustedEntries = entries.map(([lang, score]) => {
        if (effectiveAlpha === 0) return [lang, score];
        const cumProportion = (cumulativeShares.get(lang) || 0) / totalCumulativeShares;
        return [lang, score * (1 + effectiveAlpha * cumProportion)];
      });
    } else {
      // No tension or no prior context — pass through unmodified
      adjustedEntries = entries;
    }

    // ── Competitive cutoff: drop tail languages that aren't competitive ──
    // Only languages scoring >= 50% of the top scorer get any share.
    // This prevents noise (e.g., "allé" giving share to Arabic via bigrams)
    // from diluting the true language's proportion.
    const peakScore = adjustedEntries.reduce((mx, [, s]) => Math.max(mx, s), 0);
    const COMPETITIVE_RATIO = 0.4;
    const competitive = adjustedEntries.filter(([, s]) => s >= peakScore * COMPETITIVE_RATIO);

    // Boost exact matches: if a language scored 1.0 (perfect trie + script +
    // bigram), double its raw score so it captures the majority of this word's
    // budget even among other competitive languages.
    const boostedEntries: [LanguageCode, number][] = competitive.map(([lang, score]) => [
      lang,
      score >= 1.0 ? score * 2 : score,
    ]);

    const totalScore = boostedEntries.reduce((sum, [, s]) => sum + s, 0);
    if (totalScore > 0) {
      for (const [lang, score] of boostedEntries) {
        const share = score / totalScore; // Normalized share of this word
        langWordCounts.set(lang, (langWordCounts.get(lang) || 0) + share);
        // Update running cumulative for next word's prior
        cumulativeShares.set(lang, (cumulativeShares.get(lang) || 0) + share);
        totalCumulativeShares += share;
      }
    }
  }

  // Add phrase bonus as fractional word count (a matched phrase = +2 words for that language)
  const textLower = text.toLowerCase();
  for (const [lang, phrases] of phraseSets) {
    for (const phrase of phrases) {
      if (textLower.includes(phrase)) {
        langWordCounts.set(lang, (langWordCounts.get(lang) || 0) + 2);
        scoredWords += 2;
      }
    }
  }

  // If nothing matched, default to English for Latin text
  if (langWordCounts.size === 0) {
    if (/[a-zA-Z]/.test(text)) {
      langWordCounts.set("en", scoredWords || 1);
      if (scoredWords === 0) scoredWords = 1;
    } else {
      return { languages: [], text, totalWords: words.length };
    }
  }

  // Build results: proportion = wordCount / totalScoredWords
  // present = max single-word score for that language (1.0 = definitively present)
  let languages: LanguageDetection[] = Array.from(langWordCounts.entries())
    .map(([language, wc]) => {
      const proportion = Math.round((wc / scoredWords) * 1000) / 1000;
      const present = Math.round((langMaxScore.get(language) || 0) * 1000) / 1000;
      return {
        language,
        present,
        proportion,
        wordCount: Math.round(wc * 100) / 100,
      };
    })
    .filter((d) => d.proportion >= minConfidence || d.present >= 0.5)
    .sort((a, b) => {
      // Sort primarily by proportion, use present as tiebreaker
      if (Math.abs(a.proportion - b.proportion) > 0.05) {
        return b.proportion - a.proportion;
      }
      return b.present - a.present;
    })
    .slice(0, Math.max(maxLanguages, 10)); // Keep top 10 for re-normalization

  // Re-normalize proportions among the top N candidates so they sum to ~1.0.
  // Without this, Latin-family languages dilute each other (e.g., "de" the word
  // splits across French, Spanish, Portuguese, etc.) and even long monolingual
  // texts end up with the true language at only 0.3–0.4 proportion.
  const topNSum = languages.reduce((sum, d) => sum + d.proportion, 0);
  if (topNSum > 0) {
    for (const lang of languages) {
      lang.proportion = Math.round((lang.proportion / topNSum) * 1000) / 1000;
    }
  }

  // Final slice to requested maxLanguages after re-normalization
  languages = languages.slice(0, maxLanguages);

  return { languages, text, totalWords: words.length };
}

/**
 * Get the single best-matching language for the text.
 *
 * @param text - The text to analyze
 * @returns The top language detection, or a default English result if unknown
 *
 * @example
 * ```typescript
 * const best = detectBestLanguage("Hola, ¿cómo estás?");
 * // → { language: "es", present: 1.0, proportion: 0.91, wordCount: 3 }
 * ```
 */
export function detectBestLanguage(text: string): LanguageDetection {
  const result = detectLanguages(text, { maxLanguages: 1 });
  return result.languages[0] ?? {
    language: "en" as LanguageCode,
    present: 0,
    proportion: 0,
    wordCount: 0,
  };
}

/**
 * Detect the script/language of a single word based purely on its characters.
 * Useful for classifying individual profanity dictionary entries.
 *
 * @param word - A single word to classify
 * @returns Array of language codes the word's characters belong to, sorted by
 *          character count (most characters → first). Empty if purely basic Latin.
 *
 * @example
 * ```typescript
 * classifyWordScript("Scheiße")  // → ["de"]
 * classifyWordScript("くそ")      // → ["ja"]
 * classifyWordScript("fuck")     // → [] (basic Latin, ambiguous)
 * classifyWordScript("씨발")      // → ["ko"]
 * ```
 */
export function classifyWordScript(word: string): LanguageCode[] {
  const counts = detectByScript(word);
  if (counts.size === 0) return [];

  return Array.from(counts.entries())
    .sort((a, b) => b[1] - a[1])
    .map(([lang]) => lang);
}

// ---------------------------------------------------------------------------
// ELD n-gram helper — per-word language scores from corpus-trained model
// ---------------------------------------------------------------------------

/**
 * Get ELD n-gram scores for a single word, normalized to [0, 1].
 * Returns only scores above a minimum threshold.
 */
function getEldWordScores(word: string): Partial<Record<LanguageCode, number>> {
  const result = eld.detect(word);
  const scores = result.getScores();
  const out: Partial<Record<LanguageCode, number>> = {};
  for (const [lang, score] of Object.entries(scores)) {
    if (score > 0.1) {
      out[lang as LanguageCode] = score;
    }
  }
  return out;
}

/**
 * Get ELD n-gram scores for the full text, used as Bayesian priors.
 * Returns normalized scores (sum to ~1.0).
 */
function getEldTextPriors(text: string): Partial<Record<LanguageCode, number>> {
  const result = eld.detect(text);
  const scores = result.getScores();
  const out: Partial<Record<LanguageCode, number>> = {};
  const total = Object.values(scores).reduce((s, v) => s + v, 0);
  if (total <= 0) return out;
  for (const [lang, score] of Object.entries(scores)) {
    if (score > 0) {
      out[lang as LanguageCode] = score / total;
    }
  }
  return out;
}

// ---------------------------------------------------------------------------
// High-signal suffixes — only accent-bearing / highly distinctive (0.3+)
// ---------------------------------------------------------------------------
// These are patterns that practically guarantee a specific language.
// Plain Latin suffixes removed — ELD handles n-gram detection now.

interface WeightedAffix { pattern: string; weight: number }

const HIGH_SIGNAL_SUFFIXES: Partial<Record<LanguageCode, WeightedAffix[]>> = {
  es: [
    // ñ-bearing — guarantees Spanish
    { pattern: "ción", weight: 0.8 }, { pattern: "sión", weight: 0.8 },
    { pattern: "ñol", weight: 0.9 }, { pattern: "ñar", weight: 0.9 },
    { pattern: "imiento", weight: 0.8 }, { pattern: "miento", weight: 0.7 },
    { pattern: "ería", weight: 0.7 },
  ],
  fr: [
    // Accent-bearing — guarantees French
    { pattern: "amment", weight: 0.9 }, { pattern: "ément", weight: 0.9 },
    { pattern: "eaux", weight: 0.8 }, { pattern: "euse", weight: 0.7 },
    { pattern: "ière", weight: 0.7 }, { pattern: "eux", weight: 0.6 },
    { pattern: "ée", weight: 0.5 }, { pattern: "ées", weight: 0.6 },
    { pattern: "esque", weight: 0.5 },
  ],
  de: [
    // Umlaut/ß-bearing — guarantees German
    { pattern: "schaft", weight: 0.8 }, { pattern: "mäßig", weight: 0.9 },
    { pattern: "igkeit", weight: 0.8 }, { pattern: "ierung", weight: 0.8 },
    { pattern: "keit", weight: 0.8 }, { pattern: "heit", weight: 0.7 },
    { pattern: "lich", weight: 0.35 }, { pattern: "isch", weight: 0.3 },
    { pattern: "ung", weight: 0.35 }, { pattern: "ös", weight: 0.3 },
  ],
  pt: [
    // ã/õ/ç-bearing — guarantees Portuguese
    { pattern: "ção", weight: 0.9 }, { pattern: "ções", weight: 0.9 },
    { pattern: "ável", weight: 0.8 }, { pattern: "ível", weight: 0.8 },
    { pattern: "ância", weight: 0.8 }, { pattern: "ência", weight: 0.8 },
  ],
  tr: [
    // Turkish special chars — guarantees Turkish
    { pattern: "lık", weight: 0.8 }, { pattern: "lığ", weight: 0.9 },
    { pattern: "lük", weight: 0.8 }, { pattern: "lüğ", weight: 0.9 },
    { pattern: "sız", weight: 0.8 }, { pattern: "süz", weight: 0.8 },
    { pattern: "ınca", weight: 0.8 }, { pattern: "ünce", weight: 0.8 },
    { pattern: "dır", weight: 0.5 }, { pattern: "dür", weight: 0.5 },
    { pattern: "siz", weight: 0.4 }, { pattern: "suz", weight: 0.4 },
    { pattern: "çı", weight: 0.3 },
  ],
  ja: [
    // Unique romaji endings — guarantees Japanese
    { pattern: "mashita", weight: 0.9 }, { pattern: "masen", weight: 0.9 },
    { pattern: "masu", weight: 0.8 }, { pattern: "desu", weight: 0.8 },
  ],
  ko: [
    // Unique Korean romanization — guarantees Korean
    { pattern: "imnida", weight: 0.9 }, { pattern: "haseo", weight: 0.9 },
    { pattern: "hamni", weight: 0.8 }, { pattern: "eoyo", weight: 0.8 },
  ],
  ru: [
    // Unique Russian romanization — guarantees Russian
    { pattern: "ovich", weight: 0.9 }, { pattern: "evich", weight: 0.9 },
    { pattern: "ovna", weight: 0.9 }, { pattern: "evna", weight: 0.9 },
    { pattern: "stvo", weight: 0.8 }, { pattern: "nost", weight: 0.5 },
    { pattern: "skaya", weight: 0.3 }, { pattern: "skoye", weight: 0.3 },
  ],
  nl: [
    // Distinctive Dutch suffixes
    { pattern: "heid", weight: 0.3 }, { pattern: "schap", weight: 0.3 },
  ],
  ar: [
    // Distinctive Arabic romanization
    { pattern: "ullah", weight: 0.3 }, { pattern: "allah", weight: 0.3 },
  ],
};

// ---------------------------------------------------------------------------
// High-signal prefixes — only accent-bearing / highly distinctive (0.3+)
// ---------------------------------------------------------------------------

const HIGH_SIGNAL_PREFIXES: Partial<Record<LanguageCode, WeightedAffix[]>> = {
  de: [
    // Umlaut-bearing — practically guarantees German
    { pattern: "über", weight: 0.9 }, { pattern: "zurück", weight: 0.9 },
    { pattern: "wieder", weight: 0.5 }, { pattern: "unter", weight: 0.3 },
  ],
  fr: [
    // Accent-bearing — very distinctive French
    { pattern: "dé", weight: 0.35 }, { pattern: "ré", weight: 0.3 },
    { pattern: "pré", weight: 0.35 },
  ],
  tr: [
    // Accent-bearing — very distinctive Turkish
    { pattern: "karşı", weight: 0.9 }, { pattern: "üst", weight: 0.7 },
    { pattern: "geri", weight: 0.3 }, { pattern: "ön", weight: 0.3 },
  ],
};

// ---------------------------------------------------------------------------
// High-signal suffix/prefix matching helpers
// ---------------------------------------------------------------------------

function findHighSignalSuffixes(word: string): Map<LanguageCode, number> {
  const lower = word.toLowerCase();
  const matched = new Map<LanguageCode, number>();
  for (const [lang, affixes] of Object.entries(HIGH_SIGNAL_SUFFIXES) as [LanguageCode, WeightedAffix[]][]) {
    for (const { pattern, weight } of affixes) {
      if (lower.endsWith(pattern)) {
        const current = matched.get(lang) || 0;
        if (weight > current) matched.set(lang, weight);
      }
    }
  }
  return matched;
}

function findHighSignalPrefixes(word: string): Map<LanguageCode, number> {
  const lower = word.toLowerCase();
  const matched = new Map<LanguageCode, number>();
  for (const [lang, affixes] of Object.entries(HIGH_SIGNAL_PREFIXES) as [LanguageCode, WeightedAffix[]][]) {
    for (const { pattern, weight } of affixes) {
      if (lower.startsWith(pattern) && lower.length > pattern.length + 1) {
        const current = matched.get(lang) || 0;
        if (weight > current) matched.set(lang, weight);
      }
    }
  }
  return matched;
}

// ---------------------------------------------------------------------------
// Per-word language classification
// ---------------------------------------------------------------------------

/** Per-language score (0–1) for a single word */
export type WordLanguageScores = Partial<Record<LanguageCode, number>>;

/**
 * Score a single word against ALL languages (0–1 each).
 *
 * Combines four signals:
 *   1. **Script** (weight 1.0) — Unicode chars belonging to a language's script.
 *   2. **Trie** (weight 0.8) — vocabulary match via per-language tries.
 *   3. **ELD n-grams** (weight 0.6) — corpus-trained n-gram model per word.
 *   4. **High-signal suffix/prefix** — accent-bearing patterns (0.3+ weight).
 *
 * @param word - A single word to score
 * @param eldPenaltyFactor - Multiplier (0–1) to deflate ELD n-gram contributions.
 *   1.0 = full ELD trust (default), 0.0 = ignore ELD entirely.
 * @returns Map of language → score (only includes languages with score > 0)
 */
export function scoreWord(word: string, eldPenaltyFactor: number = 1.0): WordLanguageScores {
  const scores: WordLanguageScores = {};
  const charLen = [...word].length; // Unicode-safe length
  if (charLen === 0) return scores;

  // ── Detect unique language fingerprints → guaranteed 1.0 floor ──
  const scriptCounts = detectByScript(word);

  const uniqueLangChars = new Map<LanguageCode, number>();
  for (const char of word) {
    const cp = char.codePointAt(0);
    if (cp === undefined) continue;
    if (DIACRITICAL_SIGNALS.has(cp)) continue;
    for (const range of SCRIPT_RANGES) {
      if (cp >= range.start && cp <= range.end) {
        if (range.languages.length === 1) {
          const lang = range.languages[0];
          uniqueLangChars.set(lang, (uniqueLangChars.get(lang) || 0) + 1);
        }
        break;
      }
    }
  }

  const guaranteedLangs = new Set<LanguageCode>();

  // 2+ unique script chars → guaranteed 1.0
  for (const [lang, count] of uniqueLangChars) {
    if (count >= 2) {
      guaranteedLangs.add(lang);
    }
  }

  // Unique exact vocabulary match (len > 4, only 1 trie matches) → guaranteed 1.0
  if (charLen > 4) {
    const exactMatches: LanguageCode[] = [];
    for (const [lang, trie] of languageTries) {
      if (trie.matchScore(word) === 1.0) {
        exactMatches.push(lang);
      }
    }
    if (exactMatches.length === 1) {
      guaranteedLangs.add(exactMatches[0]);
    }
  }

  // ── Scoring weights ──
  const SCRIPT_WEIGHT = 1.0;
  const TRIE_WEIGHT = 0.8;
  const ELD_WEIGHT = 0.6;

  // Layer 1: Script detection
  if (charLen > 0) {
    for (const [lang, count] of scriptCounts) {
      const scriptScore = count / charLen;
      scores[lang] = (scores[lang] || 0) + scriptScore * SCRIPT_WEIGHT;
    }
  }

  // CJK disambiguation: pure CJK ideographs without kana → skew Chinese
  if (charLen >= 10 && scriptCounts.has("zh") && scriptCounts.has("ja")) {
    const hasKana = [...word].some((ch) => {
      const cp = ch.codePointAt(0)!;
      return (cp >= 0x3040 && cp <= 0x309f) || (cp >= 0x30a0 && cp <= 0x30ff) ||
             (cp >= 0x31f0 && cp <= 0x31ff) || (cp >= 0xff65 && cp <= 0xff9f);
    });
    if (!hasKana) {
      scores["zh"] = (scores["zh"] || 0) + 0.5;
      scores["ja"] = (scores["ja"] || 0) * 0.5;
    }
  }

  // Layer 2: Trie matching
  for (const [lang, trie] of languageTries) {
    const trieScore = trie.matchScore(word);
    if (trieScore > 0) {
      let effectiveScore: number;
      if (trieScore === 1.0) {
        effectiveScore = TRIE_WEIGHT;
      } else {
        const matchedChars = Math.round(trieScore * charLen);
        const charBonus = Math.pow(1.1, matchedChars);
        effectiveScore = trieScore * TRIE_WEIGHT * 0.1 * Math.min(charBonus, 3);
      }
      scores[lang] = (scores[lang] || 0) + effectiveScore;
    }
  }

  // Layer 3: ELD n-gram scores (corpus-trained, replaces hand-tuned bigrams/trigrams)
  // Two ELD penalties stack multiplicatively:
  //   1. eldPenaltyFactor — text-level penalty from romanization + scrappiness
  //   2. Per-word entropy — if ELD is confused about THIS word, dampen further
  if (charLen >= 3) {
    const eldScores = getEldWordScores(word);
    const eldValues = Object.values(eldScores) as number[];

    // Per-word entropy: high entropy = ELD can't decide → dampen its scores.
    // 1 bit = 2 equally likely langs (ok), 2+ bits = 4+ langs (confused).
    // Damping: 1.0 at 0 bits, ~0.5 at 2 bits, ~0.25 at 3 bits.
    const wordEntropy = shannonEntropy(eldValues);
    const entropyDamping = 1 / (1 + wordEntropy);

    const effectiveEldWeight = ELD_WEIGHT * eldPenaltyFactor * entropyDamping;
    if (effectiveEldWeight > 0.01) {
      for (const [lang, score] of Object.entries(eldScores) as [LanguageCode, number][]) {
        scores[lang] = (scores[lang] || 0) + score * effectiveEldWeight;
      }
    }
  }

  // Normalize: max possible is SCRIPT + TRIE + ELD
  const maxPossible = SCRIPT_WEIGHT + TRIE_WEIGHT + ELD_WEIGHT;
  for (const lang of Object.keys(scores) as LanguageCode[]) {
    scores[lang] = Math.min(1, scores[lang]! / maxPossible);
    if (scores[lang]! < 0.01) delete scores[lang];
  }

  // Layer 4: High-signal suffix matching (accent-bearing, 0.3+ weight only)
  const suffixMatches = findHighSignalSuffixes(word);
  for (const [lang, weight] of suffixMatches) {
    const base = scores[lang] || 0;
    if (base > 0) {
      scores[lang] = Math.min(1, base * 1.3 + weight);
    } else {
      scores[lang] = weight;
    }
  }

  // Layer 5: High-signal prefix matching (accent-bearing, 0.3+ weight only)
  const prefixMatches = findHighSignalPrefixes(word);
  for (const [lang, weight] of prefixMatches) {
    const base = scores[lang] || 0;
    if (base > 0) {
      scores[lang] = Math.min(1, base * 1.2 + weight);
    } else {
      scores[lang] = weight;
    }
  }

  // Apply guaranteed 1.0 floor for uniquely-fingerprinted languages
  for (const lang of guaranteedLangs) {
    scores[lang] = 1.0;
  }

  // Clip all scores to 3 decimal places
  for (const lang of Object.keys(scores) as LanguageCode[]) {
    scores[lang] = Math.round(scores[lang]! * 1000) / 1000;
  }

  return scores;
}

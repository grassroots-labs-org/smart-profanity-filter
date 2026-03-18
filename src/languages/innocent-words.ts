/**
 * Cross-language collision words — innocence map.
 *
 * Words that are profane in one language but innocent in another.
 * Used by post-match scoring to adjust certainty based on detected language context.
 *
 * dampeningFactor: 0-1
 *   0.9 = heavy adjustment (word is very commonly innocent in that language)
 *   0.1 = barely adjusts (word is almost always used as profanity even in that language context)
 *
 * partialDampeningFactor: 0-1 (optional)
 *   Used when the profane word is found EMBEDDED inside another word (substring match).
 *   If omitted, falls back to dampeningFactor.
 *   Example: "nigra" → standalone is a slur (dampeningFactor: 0), but embedded
 *   in "denigrate" is innocent (partialDampeningFactor: 0.95).
 */

export interface InnocentEntry {
  /** ISO 639-1 code of the language where this word is innocent */
  language: string;
  /** What the word means in the innocent language (documentation only) */
  meaning: string;
  /** How much to adjust certainty for standalone/whole-word matches: 0-1 */
  dampeningFactor: number;
  /**
   * How much to adjust certainty when the word appears as a SUBSTRING inside
   * another word. If omitted, falls back to dampeningFactor.
   * Use this when a word is profane standalone but innocent when embedded
   * (e.g. "nigra" in "denigrate", "conne" in "connect").
   */
  partialDampeningFactor?: number;
  /**
   * If specified, this innocence entry only applies when the profane word is
   * found embedded inside one of these specific host words (lowercase).
   * Use this for words where blanket language dampening is insufficient —
   * e.g. "rapist" is severity-5 and always flags, but is innocent when
   * embedded inside "therapist".
   */
  hostWords?: string[];
}

const innocentWords: Record<string, InnocentEntry[]> = {
  // ── English profanity → innocent in Scandinavian ──
  "slut":  [{ language: "sv", meaning: "end/finish", dampeningFactor: 0.9 },
            { language: "da", meaning: "end/finish", dampeningFactor: 0.9 }],
  "hell":  [{ language: "sv", meaning: "luck", dampeningFactor: 0.8 },
            { language: "no", meaning: "luck", dampeningFactor: 0.8 }],
  "prick": [{ language: "sv", meaning: "dot/point", dampeningFactor: 0.85 }],
  "fart":  [{ language: "sv", meaning: "speed", dampeningFactor: 0.9 },
            { language: "no", meaning: "speed", dampeningFactor: 0.9 },
            { language: "da", meaning: "speed", dampeningFactor: 0.9 }],
  "kock":  [{ language: "sv", meaning: "chef/cook", dampeningFactor: 0.9 }],
  "bra":   [{ language: "sv", meaning: "good", dampeningFactor: 0.85 }],
  "slag":  [{ language: "sv", meaning: "hit/type", dampeningFactor: 0.85 },
            { language: "no", meaning: "hit/type", dampeningFactor: 0.85 },
            { language: "nl", meaning: "hit/strike", dampeningFactor: 0.85 }],
  "fack":  [{ language: "sv", meaning: "compartment/union", dampeningFactor: 0.9 }],

  // ── English/Dutch profanity → innocent in Dutch/German/English ──
  "kant":  [{ language: "de", meaning: "edge", dampeningFactor: 0.85 },
            { language: "nl", meaning: "side", dampeningFactor: 0.85 }],
  "mist":  [{ language: "en", meaning: "fog/haze", dampeningFactor: 0.8 }],
  "lul":   [{ language: "en", meaning: "lull/pause", dampeningFactor: 0.85 }],
  "kut":   [{ language: "en", meaning: "cut", dampeningFactor: 0.8 }],

  // ── French profanity → innocent in English/Spanish ──
  "bite":  [{ language: "en", meaning: "to use teeth", dampeningFactor: 0.9 }],
  "con":   [{ language: "en", meaning: "prefix (against)", dampeningFactor: 0.85 },
            { language: "es", meaning: "with", dampeningFactor: 0.95 }],
  "pet":   [{ language: "en", meaning: "animal companion", dampeningFactor: 0.9 }],
  "pine":  [{ language: "en", meaning: "tree", dampeningFactor: 0.9 }],
  "sale":  [{ language: "en", meaning: "selling/discount", dampeningFactor: 0.9 }],
  "queue": [{ language: "en", meaning: "waiting line", dampeningFactor: 0.9 }],

  // ── Japanese romanisation → innocent in English ──
  // "shine" (死ね) = "die" in Japanese but appears in common English words
  // (sunshine, moonshine). High dampening: if ELD detects English,
  // this is almost certainly the English word.
  "shine": [{ language: "en", meaning: "to emit light", dampeningFactor: 0.95 }],

  // ── Turkish → innocent in English ──
  // "am" = vulgar Turkish slang but is an extremely common English word (verb
  // "to be", ante meridiem time marker). High dampening for English.
  "am": [{ language: "en", meaning: "first-person verb 'to be' / AM (ante meridiem)", dampeningFactor: 0.95 }],

  // ── French profanity → innocent substring in English ──
  // "nique" (fuck) and "niques" (you fuck) appear as suffixes in common English
  // words: technique, unique, boutique, etc.
  "nique":  [{ language: "en", meaning: "suffix in 'technique', 'unique', 'boutique'",
    dampeningFactor: 0.95,
    hostWords: ["technique", "techniques", "unique", "uniquely", "uniqueness",
                "boutique", "boutiques", "mystique", "antique", "antiques",
                "clique", "cliques", "oblique", "obliquely", "physique"] }],
  "niques": [{ language: "en", meaning: "suffix in 'techniques', 'boutiques'",
    dampeningFactor: 0.95,
    hostWords: ["techniques", "boutiques", "antiques", "cliques"] }],

  // ── High-severity English words → innocent when embedded in specific host words ──
  // dampeningFactor alone can't suppress severity-5 words; hostWords explicitly
  // bypasses the high-coverage embed check for known innocent compounds.
  "rapist": [{ language: "en", meaning: "embedded in medical 'therapist'",
    dampeningFactor: 1.0,
    hostWords: ["therapist", "therapists", "therapeutic", "therapeutics",
                "psychotherapist", "psychotherapists", "aromatherapist", "aromatherapists",
                "physiotherapist", "physiotherapists", "hydrotherapist", "hydrotherapists"] }],

  // ── Latin "cum" prefix → innocent in academic/scientific English compounds ──
  "cum": [{ language: "en", meaning: "Latin preposition (with, together with)",
    dampeningFactor: 0.95,
    hostWords: ["document", "documents", "documentary", "documentaries", "documentation",
                "accumulate", "accumulates", "accumulated", "accumulation",
                "cumulative", "cumulatively", "cumulus", "cumuli",
                "circumstance", "circumstances", "cucumber", "cucumbers"] }],

  // ── German → innocent in English ──
  "bitte": [{ language: "de", meaning: "please", dampeningFactor: 0.95 }],
  "kak":   [{ language: "en", meaning: "cake/cooking (context-dependent)", dampeningFactor: 0.7 }],

  // ── Words that are profane standalone but innocent when embedded ──
  // partialDampeningFactor controls the embedded/substring dampening
  "nigra": [{ language: "en", meaning: "racial slur standalone, but innocent in 'denigrate'",
    dampeningFactor: 0,              // standalone: still a slur, no dampening
    partialDampeningFactor: 0.95 }], // embedded: almost certainly innocent
  "nigras": [{ language: "en", meaning: "racial slur standalone, but innocent in 'denigrates'",
    dampeningFactor: 0,
    partialDampeningFactor: 0.95 }],
  "conne": [{ language: "en", meaning: "French profanity, but innocent in 'connect' etc.",
    dampeningFactor: 0,              // standalone: French profanity
    partialDampeningFactor: 0.95 }], // embedded: almost certainly innocent

  // ── English profanity → innocent in English (dual meaning) ──
  // Low dampeningFactor: these are almost always used as profanity
  "ass":      [{ language: "en", meaning: "donkey", dampeningFactor: 0.15 }],
  "cock":     [{ language: "en", meaning: "rooster", dampeningFactor: 0.1 }],
  "hoe":      [{ language: "en", meaning: "garden tool", dampeningFactor: 0.15 },
               { language: "nl", meaning: "how", dampeningFactor: 0.85 }],
  "booty":    [{ language: "en", meaning: "treasure/loot", dampeningFactor: 0.2 }],
  "hooters":  [{ language: "en", meaning: "owls/restaurant", dampeningFactor: 0.1 }],
  "knockers": [{ language: "en", meaning: "door knockers", dampeningFactor: 0.2 }],
  "beaver":   [{ language: "en", meaning: "animal", dampeningFactor: 0.2 }],
  "muff":     [{ language: "en", meaning: "hand warmer", dampeningFactor: 0.15 }],
};

export default innocentWords;

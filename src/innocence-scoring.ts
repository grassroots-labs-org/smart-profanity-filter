/**
 * Innocence Scoring — adjusts profanity certainty based on cross-language context.
 *
 * When a word is profane in one language but innocent in another (e.g., "slut"
 * is profane in English but means "end" in Swedish), this module adjusts the
 * certainty score based on detected language signals.
 *
 * - Dampens certainty when the innocent language dominates the text context
 * - Boosts certainty when the profane language dominates
 * - Applies the word's dampeningFactor to control adjustment magnitude
 */

import type { InnocentEntry } from "./languages/innocent-words.js";

// ---------------------------------------------------------------------------
// Language family groups — for disambiguation of closely related languages.
// The ELD n-gram model often confuses languages within the same family
// (e.g., Swedish ↔ German, Norwegian ↔ Danish). When checking innocent entries,
// we also consider signal from sibling languages in the same family.
// ---------------------------------------------------------------------------

const LANGUAGE_FAMILIES: Record<string, string[]> = {
  germanic_scandinavian: ["sv", "no", "da"],
  germanic_continental: ["de", "nl"],
};

/** Build a reverse lookup: language code → family members (including itself) */
const FAMILY_SIBLINGS: Record<string, string[]> = {};
for (const members of Object.values(LANGUAGE_FAMILIES)) {
  for (const lang of members) {
    FAMILY_SIBLINGS[lang] = members;
  }
}

// Cross-family confusion map: languages the detector often confuses with each other.
// Swedish/Norwegian/Danish are often classified as German by ELD n-gram.
const CONFUSION_MAP: Record<string, string[]> = {
  de: ["sv", "no", "da"],  // German signal may actually be Scandinavian
  sv: ["de", "no", "da"],
  no: ["de", "sv", "da"],
  da: ["de", "sv", "no"],
  nl: ["de"],              // Dutch sometimes classified as German
};

/**
 * Get the effective amplified signal for a language, including signal
 * from languages the detector commonly confuses it with.
 *
 * For example, if the innocent language is "sv" (Swedish) but the detector
 * classified the text as "de" (German), we add the German signal as a
 * partial boost to the Swedish signal, since it may actually be Swedish.
 */
function getEffectiveAmp(language: string, amplified: Record<string, number>): number {
  const directAmp = amplified[language] ?? 0;

  // Check if any confused languages have signal
  const confusedWith = CONFUSION_MAP[language];
  if (!confusedWith) return directAmp;

  let confusedAmp = 0;
  for (const confused of confusedWith) {
    const amp = amplified[confused] ?? 0;
    if (amp > confusedAmp) {
      confusedAmp = amp;
    }
  }

  // Use the higher of direct signal or confused signal (discounted by 0.8)
  // The discount prevents over-attribution: German text shouldn't fully
  // count as Swedish, but mostly-German signal in a Scandinavian context
  // should still trigger dampening.
  return Math.max(directAmp, confusedAmp * 0.8);
}

/**
 * Adjust a word's certainty score based on cross-language innocence data
 * and pre-computed amplified language signals.
 *
 * @param certainty     - Base certainty score (0-5)
 * @param profaneLanguage - ISO 639-1 code of the language where the word is profane
 * @param innocentEntries - Array of languages where the word is innocent
 * @param amplified     - Pre-computed weighted average of word + document language signals
 * @returns Adjusted certainty, clamped to [0, 5]
 */
export function adjustCertaintyForLanguage(
  certainty: number,
  profaneLanguage: string,
  innocentEntries: InnocentEntry[],
  amplified: Record<string, number>,
  isPartialMatch: boolean = false,
): number {
  // No innocent entries → no adjustment possible
  if (innocentEntries.length === 0) {
    return certainty;
  }

  const profaneAmp = amplified[profaneLanguage] ?? 0;

  // Find the strongest innocent signal among all innocent entries,
  // considering language family confusion
  let bestInnocentAmp = 0;
  let bestEntry: InnocentEntry | null = null;
  for (const entry of innocentEntries) {
    const effectiveAmp = getEffectiveAmp(entry.language, amplified);
    if (effectiveAmp > bestInnocentAmp) {
      bestInnocentAmp = effectiveAmp;
      bestEntry = entry;
    }
  }

  // Both signals below threshold → no meaningful signal to act on
  if (profaneAmp < 0.01 && bestInnocentAmp < 0.01) {
    return certainty;
  }

  let adjusted = certainty;

  if (bestInnocentAmp > profaneAmp && bestEntry) {
    // Innocent language dominates → dampen certainty
    // Use partialDampeningFactor when the word is embedded inside another word
    const df = isPartialMatch
      ? (bestEntry.partialDampeningFactor ?? bestEntry.dampeningFactor)
      : bestEntry.dampeningFactor;
    adjusted = certainty * (1 - df * bestInnocentAmp);
  } else if (profaneAmp > bestInnocentAmp && bestEntry) {
    // Profane language dominates → boost certainty
    const df = isPartialMatch
      ? (bestEntry.partialDampeningFactor ?? bestEntry.dampeningFactor)
      : bestEntry.dampeningFactor;
    adjusted = certainty * (1 + df * profaneAmp);
  }
  // Equal signals → no change

  // Clamp to [0, 5]
  return Math.max(0, Math.min(5, adjusted));
}

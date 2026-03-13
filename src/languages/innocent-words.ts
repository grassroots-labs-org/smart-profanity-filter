/**
 * Cross-language collision words — innocence map.
 *
 * Words that are profane in one language but innocent in another.
 * Used by post-match scoring to adjust certainty based on detected language context.
 *
 * dampeningFactor: 0-1
 *   0.9 = heavy adjustment (word is very commonly innocent in that language)
 *   0.1 = barely adjusts (word is almost always used as profanity even in that language context)
 */

export interface InnocentEntry {
  /** ISO 639-1 code of the language where this word is innocent */
  language: string;
  /** What the word means in the innocent language (documentation only) */
  meaning: string;
  /** How much to adjust certainty: 0-1 (higher = stronger dampening/boosting) */
  dampeningFactor: number;
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

/**
 * Universal context patterns for multi-language profanity detection
 */

export interface UniversalContextPattern {
  type:
    | "negation"
    | "possessive"
    | "compound"
    | "proper_noun"
    | "article"
    | "quotation"
    | "medical"
    | "anatomical"
    | "sexual_verb_before"
    | "sexual_verb_after"
    | "compound_slur"
    | "insult_construction"
    | "direct_address"
    | "pejorative_adj";
  pattern: RegExp;
  weight: number;
  delta: number; // certainty adjustment: positive = booster, negative = reducer
  languages: string[];
  description: string;
  examples: string[];
}

export interface ContextRule {
  pattern: RegExp;
  action: "reduce_score" | "increase_score" | "whitelist" | "flag";
  weight: number;
  delta: number;
  priority: number;
}

/**
 * Universal context patterns that work across multiple languages
 */
export const UNIVERSAL_CONTEXT_PATTERNS: UniversalContextPattern[] = [
  // === REDUCER PATTERNS ===

  // Negation patterns
  {
    type: "negation",
    pattern:
      /\b(not|don't|won't|can't|never|ne|pas|nicht|no|नहीं|不|non|niente|нет|nie)\b.{0,30}PROFANE_WORD/i,
    weight: 0.2,
    delta: -2,
    languages: ["*"],
    description: "Negation words that reduce profanity likelihood",
    examples: ["not bad", "don't call me that", "never say that"],
  },

  // Possessive patterns
  {
    type: "possessive",
    pattern: /\b\w+(['s]|du|de|का|की|के|の|del|della|от|od)\s+PROFANE_WORD\b/i,
    weight: 0.4,
    delta: -1,
    languages: ["*"],
    description: "Possessive constructions that may be innocent",
    examples: ["dog's mouth", "cat's ass", "bird's ass"],
  },

  // Article patterns
  {
    type: "article",
    pattern:
      /\b(the|a|an|le|la|les|un|une|der|die|das|ein|eine|el|la|los|las|il|lo|gli|le)\s+PROFANE_WORD\b/i,
    weight: 0.6,
    delta: -1,
    languages: ["*"],
    description: "Articles that may indicate neutral reference",
    examples: ["the ass of the donkey", "a hell of a time"],
  },

  // Compound word patterns
  {
    type: "compound",
    pattern:
      /\b(smart|silly|cute|funny|little|big|old|new|good|bad|nice|sweet)\s*[-]?\s*PROFANE_WORD\b/i,
    weight: 0.5,
    delta: -1,
    languages: ["*"],
    description: "Adjective-noun compounds that may be innocent",
    examples: ["smart-ass", "silly ass", "cute little ass"],
  },

  // Proper noun patterns
  {
    type: "proper_noun",
    pattern: /\b[A-Z][a-z]+\s+PROFANE_WORD\b/,
    weight: 0.3,
    delta: -2,
    languages: ["en", "fr", "de", "es", "it"],
    description: "Proper nouns followed by potential profanity",
    examples: ["Hell Michigan", "Ass River"],
  },

  // Quotation patterns
  {
    type: "quotation",
    pattern: /["'«»„"‚'].*PROFANE_WORD.*["'«»„"‚']/i,
    weight: 0.7,
    delta: -2,
    languages: ["*"],
    description: "Quoted text which may be reporting speech",
    examples: ['"Don\'t be an ass"', "'What the hell'"],
  },

  // Medical/anatomical context
  {
    type: "medical",
    pattern:
      /\b(medical|anatomy|doctor|hospital|clinic|patient|diagnosis|treatment|surgical|clinical)\b.{0,50}PROFANE_WORD/i,
    weight: 0.1,
    delta: -3,
    languages: ["*"],
    description: "Medical contexts where anatomical terms are appropriate",
    examples: [
      "medical examination of the ass",
      "doctor checked the damn thing",
    ],
  },

  // Anatomical context
  {
    type: "anatomical",
    pattern:
      /\b(body|part|muscle|bone|skin|tissue|organ|limb|extremity)\b.{0,30}PROFANE_WORD/i,
    weight: 0.3,
    delta: -2,
    languages: ["*"],
    description: "Anatomical contexts for body parts",
    examples: ["body part called ass", "muscle in the ass"],
  },

  // === BOOSTER PATTERNS ===

  {
    type: "sexual_verb_before",
    pattern: /\b(suck|ride|lick|grab|stroke|jerk|squirt|bang|blow|pound|hump|grind|fondle|grope|spank|thrust|mount|penetrate|finger|fist|step|stomp|foot)\b.{0,10}PROFANE_WORD/i,
    weight: 2.0,
    delta: 3,
    languages: ["*"],
    description: "Sexual verb before target word — confirms profane intent",
    examples: ["suck my cock", "ride that dick", "jerk that dick", "stomp on my"],
  },
  {
    type: "sexual_verb_after",
    pattern: /PROFANE_WORD.{0,10}\b(suck|ride|lick|grab|stroke|jerk|squirt|bang|blow|pound|hump|grind|fondle|grope|spank|thrust|mount|penetrate|finger|fist|step|stomp|foot|sucking|riding|licking|grabbing|stroking|jerking|squirting|banging|blowing|pounding|humping|grinding|fondling|groping|spanking|thrusting|mounting|penetrating|fingering|fisting|stepping|stomping|footing)\b/i,
    weight: 2.0,
    delta: 3,
    languages: ["*"],
    description: "Sexual verb after target word — confirms profane intent",
    examples: ["cock sucking", "dick riding", "ass pounding"],
  },
  {
    type: "compound_slur",
    pattern: /PROFANE_WORD.{0,10}(hole|face|head|wipe|bag|job)\b/i,
    weight: 2.0,
    delta: 3,
    languages: ["*"],
    description:
      "Compound slur suffix — confirms profane intent (no \\b before suffix to match compounds like 'asshole')",
    examples: ["asshole", "dickhead", "dickface"],
  },
  {
    type: "insult_construction",
    pattern: /\b(piece of|load of|full of)\s.{0,5}PROFANE_WORD/i,
    weight: 1.4,
    delta: 2,
    languages: ["*"],
    description: "Insult construction — likely profane",
    examples: ["piece of ass", "load of cock"],
  },
  {
    type: "direct_address",
    pattern: /\b(you|your|u|ur)\b.{0,10}PROFANE_WORD/i,
    weight: 1.3,
    delta: 1,
    languages: ["*"],
    description: "Direct address — likely insult",
    examples: ["you dick", "your ass"],
  },
  {
    type: "pejorative_adj",
    pattern:
      /\b(stupid|ugly|fat|dumb|dirty|nasty|filthy)\b.{0,10}PROFANE_WORD/i,
    weight: 1.3,
    delta: 1,
    languages: ["*"],
    description: "Pejorative adjective before target — likely profane",
    examples: ["stupid ass", "fat dick", "dirty cock"],
  },
];

/**
 * Language-specific context patterns
 */
export const LANGUAGE_SPECIFIC_PATTERNS: Record<
  string,
  UniversalContextPattern[]
> = {
  en: [
    {
      type: "compound",
      pattern: /\b(jack|dumb|smart|bad|kick)\s*[-]?\s*PROFANE_WORD\b/i,
      weight: 0.4,
      delta: -1,
      languages: ["en"],
      description: "English-specific compound patterns",
      examples: ["jackass", "dumbass", "badass"],
    },
  ],

  fr: [
    {
      type: "negation",
      pattern: /\b(ne|n'|pas|point|jamais|rien|personne)\b.{0,30}PROFANE_WORD/i,
      weight: 0.2,
      delta: -2,
      languages: ["fr"],
      description: "French negation patterns",
      examples: ["ne pas dire", "jamais ça"],
    },
  ],

  de: [
    {
      type: "compound",
      pattern: /\bPROFANE_WORD(kopf|zeug|ding|sache)\b/i,
      weight: 0.5,
      delta: -1,
      languages: ["de"],
      description: "German compound word patterns",
      examples: ["Scheißzeug", "Arschloch"],
    },
  ],

  es: [
    {
      type: "possessive",
      pattern: /\b(el|la|los|las)\s+PROFANE_WORD\s+(de|del|de la)\b/i,
      weight: 0.4,
      delta: -1,
      languages: ["es"],
      description: "Spanish possessive patterns",
      examples: ["el culo de la mesa"],
    },
  ],
};

/**
 * Word-specific context patterns for disambiguating ambiguous profane words.
 * Keyed by the lowercase profane word.
 */
export const WORD_SPECIFIC_PATTERNS: Record<
  string,
  UniversalContextPattern[]
> = {
  cock: [
    {
      type: "sexual_verb_before",
      pattern: /\b(big|hard|small|my|his)\b.{0,10}PROFANE_WORD/i,
      weight: 1.5,
      delta: 2,
      languages: ["*"],
      description: "Sexual/possessive context for cock",
      examples: ["big cock", "my cock", "his hard cock"],
    },
    {
      type: "compound",
      pattern:
        /\b(crow|rooster|hen|farm|chicken|dawn|poultry|barnyard)\b.{0,30}PROFANE_WORD/i,
      weight: 0.1,
      delta: -3,
      languages: ["*"],
      description: "Farming/zoological context — cock as rooster",
      examples: ["the cock crowed at dawn", "rooster and cock"],
    },
    {
      type: "compound",
      pattern:
        /PROFANE_WORD.{0,30}\b(crow|crowed|rooster|hen|farm|chicken|dawn|poultry|barnyard)\b/i,
      weight: 0.1,
      delta: -3,
      languages: ["*"],
      description: "Farming/zoological context after — cock as rooster",
      examples: ["cock crowed at dawn", "cock and hen"],
    },
  ],
  ass: [
    {
      type: "pejorative_adj",
      pattern: /\b(fat|kick|dumb|lazy)\b.{0,10}PROFANE_WORD/i,
      weight: 1.4,
      delta: 2,
      languages: ["*"],
      description: "Insult context for ass",
      examples: ["fat ass", "dumb ass", "kick your ass"],
    },
    {
      type: "compound",
      pattern:
        /\b(donkey|mule|equine|wild|herd|saddle|burro)\b.{0,30}PROFANE_WORD/i,
      weight: 0.1,
      delta: -3,
      languages: ["*"],
      description: "Zoological context — ass as donkey",
      examples: ["wild ass", "the donkey or ass"],
    },
    {
      type: "compound",
      pattern:
        /PROFANE_WORD.{0,30}\b(donkey|mule|equine|herd|saddle|burro)\b/i,
      weight: 0.1,
      delta: -3,
      languages: ["*"],
      description: "Zoological context after — ass as donkey",
      examples: ["ass is a species of equine"],
    },
  ],
  dick: [
    {
      type: "sexual_verb_before",
      pattern: /\b(big|small|my|his)\b.{0,10}PROFANE_WORD/i,
      weight: 1.5,
      delta: 2,
      languages: ["*"],
      description: "Sexual/possessive context for dick",
      examples: ["big dick", "my dick"],
    },
    {
      // Case-sensitive: matches "Dick Cheney" but not "dick cheney"
      // Works because getCertaintyDelta tests against original (non-normalized) text
      type: "proper_noun",
      pattern: /\bDick\s+[A-Z][a-z]+/,
      weight: 0.1,
      delta: -3,
      languages: ["en"],
      description: "Dick as proper name followed by surname",
      examples: ["Dick Cheney", "Dick Van Dyke"],
    },
  ],
};

/**
 * Context rule generator
 */
export class ContextPatternMatcher {
  private patterns: UniversalContextPattern[];
  private languagePatterns: Map<string, UniversalContextPattern[]>;

  constructor(languages: string[] = ["en"]) {
    this.patterns = [...UNIVERSAL_CONTEXT_PATTERNS];
    this.languagePatterns = new Map();

    // Load language-specific patterns
    for (const lang of languages) {
      if (LANGUAGE_SPECIFIC_PATTERNS[lang]) {
        this.languagePatterns.set(lang, LANGUAGE_SPECIFIC_PATTERNS[lang]);
      }
    }
  }

  /**
   * Generate context rules for a specific word
   */
  generateRules(word: string, languages: string[] = ["en"]): ContextRule[] {
    const rules: ContextRule[] = [];
    const allPatterns = [...this.patterns];

    // Add language-specific patterns
    for (const lang of languages) {
      const langPatterns = this.languagePatterns.get(lang) || [];
      allPatterns.push(...langPatterns);
    }

    // Add word-specific patterns
    const wordPatterns = WORD_SPECIFIC_PATTERNS[word.toLowerCase()];
    if (wordPatterns) {
      allPatterns.push(...wordPatterns);
    }

    for (const pattern of allPatterns) {
      // Skip if pattern doesn't apply to any of the specified languages
      if (
        !pattern.languages.includes("*") &&
        !pattern.languages.some((lang) => languages.includes(lang))
      ) {
        continue;
      }

      // Replace PROFANE_WORD placeholder with actual word
      const regexSource = pattern.pattern.source.replace(
        "PROFANE_WORD",
        this.escapeRegex(word)
      );
      const regex = new RegExp(regexSource, pattern.pattern.flags);

      let action: "reduce_score" | "increase_score" | "whitelist" | "flag";
      if (pattern.weight < 0.3) {
        action = "reduce_score";
      } else if (pattern.weight > 0.8) {
        action = "increase_score";
      } else {
        action = "reduce_score";
      }

      rules.push({
        pattern: regex,
        action,
        weight: pattern.weight,
        delta: pattern.delta,
        priority: this.getPriority(pattern.type),
      });
    }

    return rules.sort((a, b) => a.priority - b.priority);
  }

  /**
   * Get priority for pattern type (reducers before boosters)
   */
  private getPriority(type: string): number {
    const priorities: Record<string, number> = {
      medical: 1,
      anatomical: 2,
      negation: 3,
      quotation: 4,
      proper_noun: 5,
      possessive: 6,
      article: 7,
      compound: 8,
      // Boosters after reducers
      pejorative_adj: 10,
      direct_address: 11,
      insult_construction: 12,
      compound_slur: 13,
      sexual_verb_before: 14,
      sexual_verb_after: 15,
    };
    return priorities[type] || 9;
  }

  /**
   * Escape regex special characters
   */
  private escapeRegex(str: string): string {
    return str.replace(/[\\^$.*+?()[\]{}|]/g, "\\$&");
  }

  /**
   * Add custom pattern
   */
  addPattern(pattern: UniversalContextPattern): void {
    this.patterns.push(pattern);
  }

  /**
   * Add language-specific pattern
   */
  addLanguagePattern(
    language: string,
    pattern: UniversalContextPattern
  ): void {
    if (!this.languagePatterns.has(language)) {
      this.languagePatterns.set(language, []);
    }
    this.languagePatterns.get(language)!.push(pattern);
  }

  /**
   * Get all patterns for debugging
   */
  getAllPatterns(): {
    universal: UniversalContextPattern[];
    languageSpecific: Map<string, UniversalContextPattern[]>;
  } {
    return {
      universal: [...this.patterns],
      languageSpecific: new Map(this.languagePatterns),
    };
  }
}

/**
 * Context analyzer for scoring matches
 */
export class ContextAnalyzer {
  private patternMatcher: ContextPatternMatcher;
  private contextWindow: number = 50; // Characters before and after the match

  constructor(languages: string[] = ["en"]) {
    this.patternMatcher = new ContextPatternMatcher(languages);
  }

  /**
   * Analyze context around a potential profanity match (legacy score-based model)
   */
  analyzeContext(
    text: string,
    matchStart: number,
    matchEnd: number,
    word: string
  ): {
    score: number;
    confidence: "high" | "medium" | "low";
    appliedRules: Array<{ rule: ContextRule; matched: boolean }>;
    context: string;
  } {
    // Extract context window
    const contextStart = Math.max(0, matchStart - this.contextWindow);
    const contextEnd = Math.min(text.length, matchEnd + this.contextWindow);
    const context = text.substring(contextStart, contextEnd);

    // Get rules for this word
    const rules = this.patternMatcher.generateRules(word);

    let score = 1.0; // Start with full profanity score
    const appliedRules: Array<{ rule: ContextRule; matched: boolean }> = [];

    // Apply context rules
    for (const rule of rules) {
      const matched = rule.pattern.test(context);
      appliedRules.push({ rule, matched });

      if (matched) {
        if (rule.action === "reduce_score") {
          score *= rule.weight;
        } else if (rule.action === "increase_score") {
          score *= 2 - rule.weight; // Increase score
        } else if (rule.action === "whitelist") {
          score = 0; // Complete whitelist
          break;
        }
      }
    }

    // Determine confidence based on number of matching rules
    const matchingRules = appliedRules.filter((ar) => ar.matched).length;
    let confidence: "high" | "medium" | "low";

    if (matchingRules === 0) {
      confidence = "high"; // No context rules matched, likely profanity
    } else if (matchingRules <= 2) {
      confidence = "medium";
    } else {
      confidence = "low"; // Many context rules matched, likely innocent
    }

    return {
      score: Math.max(0, Math.min(1, score)), // Clamp between 0 and 1
      confidence,
      appliedRules,
      context,
    };
  }

  /**
   * Calculate the certainty delta for a word based on surrounding context.
   * Positive delta = booster (more likely profane).
   * Negative delta = reducer (more likely innocent).
   * Returns the sum of all matching pattern deltas.
   */
  getCertaintyDelta(
    text: string,
    matchStart: number,
    matchEnd: number,
    word: string
  ): number {
    const contextStart = Math.max(0, matchStart - this.contextWindow);
    const contextEnd = Math.min(text.length, matchEnd + this.contextWindow);
    const context = text.substring(contextStart, contextEnd);

    const rules = this.patternMatcher.generateRules(word);
    let totalDelta = 0;

    for (const rule of rules) {
      if (rule.pattern.test(context)) {
        totalDelta += rule.delta;
      }
    }

    return totalDelta;
  }

  /**
   * Set context window size
   */
  setContextWindow(size: number): void {
    this.contextWindow = Math.max(10, Math.min(200, size));
  }

  /**
   * Add custom pattern to the analyzer
   */
  addCustomPattern(pattern: UniversalContextPattern): void {
    this.patternMatcher.addPattern(pattern);
  }
}

import { BeKind, WordSeverity } from "../src/index.js";
import allLanguagesBadWords from "../src/languages/english-primary-all-languages.js";

// Use a dedicated instance to avoid cross-file singleton mutation in bun
const filter = new BeKind({ silent: true });


// Sample words for testing
const HINDI_BAD_WORD_ROMAN = "chutiya";
const HINDI_BAD_WORD_DEVANAGARI = "भोसड़ी";
const HINGLISH_BAD_WORD = "behenchod";
const HINGLISH_VARIATION = "bhosdike";
const BENGALI_BAD_WORD_SCRIPT = "বাল";
const BENGALI_BAD_WORD_ROMAN = "bal";
const TAMIL_BAD_WORD_SCRIPT = "கூதி";
const TAMIL_BAD_WORD_ROMAN = "koothi";
const TELUGU_BAD_WORD_SCRIPT = "పూకు";
const TELUGU_BAD_WORD_ROMAN = "pooku";
const FRENCH_BAD_WORD = "merde";
const GERMAN_BAD_WORD = "scheisse";
const SPANISH_BAD_WORD = "mierda";
const HINDI_CLEAN_WORD = "अच्छा";
const ENGLISH_CLEAN_WORD = "excellent";
const BENGALI_CLEAN_WORD = "ভালো";
const TAMIL_CLEAN_WORD = "நன்று";
const TELUGU_CLEAN_WORD = "మంచి";
const FRENCH_CLEAN_WORD = "bonjour";
const GERMAN_CLEAN_WORD = "Guten";
const SPANISH_CLEAN_WORD = "bueno";

// Leet speak test words
const LEET_SPEAK_TESTS = [
  { original: "h3ll", expected: "hell" },
  { original: "f*ck", expected: "f*ck" },
  { original: "4ss", expected: "ass" },
  { original: "b!tch", expected: "bitch" },
  { original: "5h1t", expected: "shit" },
];

describe("BeKind Filter - Upgraded Test Suite", () => {
  beforeAll(() => {
    // All languages are loaded by default via the consolidated word list

    // Add custom test words - FIXED: use 'add' instead of 'addWords'
    filter.add([
      BENGALI_BAD_WORD_SCRIPT,
      BENGALI_BAD_WORD_ROMAN,
      TAMIL_BAD_WORD_SCRIPT,
      TAMIL_BAD_WORD_ROMAN,
      TELUGU_BAD_WORD_SCRIPT,
      TELUGU_BAD_WORD_ROMAN,
      FRENCH_BAD_WORD,
      GERMAN_BAD_WORD,
      SPANISH_BAD_WORD,
    ]);
  });

  afterAll(() => {
    // Clean up custom words - FIXED: use 'remove' instead of 'removeWords'
    filter.remove([
      BENGALI_BAD_WORD_SCRIPT,
      BENGALI_BAD_WORD_ROMAN,
      TAMIL_BAD_WORD_SCRIPT,
      TAMIL_BAD_WORD_ROMAN,
      TELUGU_BAD_WORD_SCRIPT,
      TELUGU_BAD_WORD_ROMAN,
      FRENCH_BAD_WORD,
      GERMAN_BAD_WORD,
      SPANISH_BAD_WORD,
    ]);
  });

  describe("Language Management", () => {
    test("should report loaded languages", () => {
      const loaded = filter.getLoadedLanguages();
      expect(loaded).toContain("all");
    });

    test("should report available languages", () => {
      const available = filter.getAvailableLanguages();
      expect(available).toContain("all");
    });
  });

  describe("Initialization and Setup", () => {
    test("should initialize without errors", () => {
      expect(filter).toBeDefined();
      expect(typeof filter.check).toBe("function");
      expect(typeof filter.detect).toBe("function");
      expect(typeof filter.clean).toBe("function");
      expect(typeof filter.cleanWithPlaceholder).toBe("function");
    });

    test("should have loaded Hindi words by default", () => {
      expect(filter.check(HINDI_BAD_WORD_ROMAN)).toBe(true);
      expect(filter.check(HINDI_BAD_WORD_DEVANAGARI)).toBe(true);
    });

    test("should retain original English profanity words", () => {
      expect(filter.check("bullshit")).toBe(true);
      expect(filter.check("fuck")).toBe(true);
    });

    test.skip("should load additional languages successfully", () => {
      expect(filter.check(BENGALI_BAD_WORD_SCRIPT)).toBe(true);
      expect(filter.check(BENGALI_BAD_WORD_ROMAN)).toBe(true);
      expect(filter.check(TAMIL_BAD_WORD_SCRIPT)).toBe(true);
      expect(filter.check(TAMIL_BAD_WORD_ROMAN)).toBe(true);
      expect(filter.check(TELUGU_BAD_WORD_SCRIPT)).toBe(true);
      expect(filter.check(TELUGU_BAD_WORD_ROMAN)).toBe(true);
      expect(filter.check(FRENCH_BAD_WORD)).toBe(true);
      expect(filter.check(GERMAN_BAD_WORD)).toBe(true);
      expect(filter.check(SPANISH_BAD_WORD)).toBe(true);
    });
  });

  describe("Enhanced Profanity Detection (detect method)", () => {
    test("should return comprehensive detection results", () => {
      const result = filter.detect("This sentence contains bullshit and fuck.");

      expect(result.hasProfanity).toBe(true);
      expect(result.detectedWords).toEqual(
        expect.arrayContaining(["bullshit", "fuck"])
      );
      expect(result.cleanedText).toContain("*");
      
      expect(result.positions).toHaveLength(2);
      expect(result.positions[0]).toEqual(
        expect.objectContaining({
          word: expect.any(String),
          start: expect.any(Number),
          end: expect.any(Number),
        })
      );
    });

   

    test("should handle clean text correctly", () => {
      const result = filter.detect("This is a perfectly clean sentence.");

      expect(result.hasProfanity).toBe(false);
      expect(result.detectedWords).toHaveLength(0);
      expect(result.cleanedText).toBe("This is a perfectly clean sentence.");
    
      expect(result.positions).toHaveLength(0);
    });
  });

  describe("Simple Profanity Detection (check method)", () => {
    test("should detect default English profanity", () => {
      expect(filter.check("This sentence contains bullshit.")).toBe(true);
      expect(filter.check("What the fuck is this?")).toBe(true);
      expect(filter.check("This is perfectly fine.")).toBe(false);
    });

    test("should detect Hindi profanity in both scripts", () => {
      expect(
        filter.check(`This has the word ${HINDI_BAD_WORD_ROMAN} in it.`)
      ).toBe(true);
      expect(
        filter.check(`इस वाक्य में ${HINDI_BAD_WORD_DEVANAGARI} शब्द है।`)
      ).toBe(true);
    });

    test("should detect Hinglish profanity and abbreviations", () => {
      expect(
        filter.check(`A Hinglish sentence with ${HINGLISH_BAD_WORD}.`)
      ).toBe(true);
      expect(
        filter.check(`People often abbreviate it as ${HINGLISH_VARIATION}.`)
      ).toBe(true);
    });

    test.skip("should detect multi-language profanity", () => {
      const testCases = [
        {
          word: BENGALI_BAD_WORD_ROMAN,
          text: `This has ${BENGALI_BAD_WORD_ROMAN} in it.`,
        },
        {
          word: TAMIL_BAD_WORD_SCRIPT,
          text: `இந்த வாக்கியத்தில் ${TAMIL_BAD_WORD_SCRIPT} உள்ளது.`,
        },
        {
          word: TELUGU_BAD_WORD_ROMAN,
          text: `This has ${TELUGU_BAD_WORD_ROMAN} in it.`,
        },
        {
          word: FRENCH_BAD_WORD,
          text: `Cette phrase contient ${FRENCH_BAD_WORD}.`,
        },
        {
          word: GERMAN_BAD_WORD,
          text: `Dieser Satz enthält ${GERMAN_BAD_WORD}.`,
        },
        {
          word: SPANISH_BAD_WORD,
          text: `Esta frase contiene ${SPANISH_BAD_WORD}.`,
        },
      ];

      testCases.forEach(({ word, text }) => {
        expect(filter.check(text)).toBe(true);
      });
    });

    test("should be case insensitive by default", () => {
      expect(filter.check("This is BULLSHIT.")).toBe(true);
      expect(
        filter.check(`Testing ${HINDI_BAD_WORD_ROMAN.toUpperCase()} here.`)
      ).toBe(true);
      expect(filter.check(`Using ${HINGLISH_BAD_WORD.toUpperCase()}.`)).toBe(
        true
      );
    });

    test("should handle mixed language content", () => {
      expect(
        filter.check(
          `This English sentence has ${HINDI_BAD_WORD_ROMAN} which is bad.`
        )
      ).toBe(true);
      expect(
        filter.check(
          `I'm saying ${HINDI_BAD_WORD_DEVANAGARI} and bullshit in one sentence.`
        )
      ).toBe(true);
    });
  });

  describe("Enhanced Profanity Cleaning", () => {
    test("should clean with character replacement (clean method)", () => {
      const result = filter.clean(
        `This has the word ${HINDI_BAD_WORD_ROMAN} in it.`
      );
      const expectedCensored = "*".repeat(HINDI_BAD_WORD_ROMAN.length);
      expect(result).toBe(`This has the word ${expectedCensored} in it.`);
    });

    test("should clean with custom placeholder", () => {
      const customPlaceholder = "X";
      const result = filter.clean("This is bullshit.", customPlaceholder);
      const expectedCensored = customPlaceholder.repeat("bullshit".length);
      expect(result).toBe(`This is ${expectedCensored}.`);
    });

    test("should clean multiple profanities", () => {
      const text = `This bullshit sentence has ${HINDI_BAD_WORD_ROMAN} and fuck.`;
      const result = filter.clean(text);
      expect(result).toContain("*");
      expect(result).not.toContain("bullshit");
      expect(result).not.toContain(HINDI_BAD_WORD_ROMAN);
      expect(result).not.toContain("fuck");
    });

    test("should use word-level cleaning (cleanWithPlaceholder method)", () => {
      const defaultPlaceholder = "***";
      const result = filter.cleanWithPlaceholder(
        "This sentence contains bullshit."
      );
      expect(result).toBe(`This sentence contains ${defaultPlaceholder}.`);

      const customPlaceholder = "[CENSORED]";
      const customResult = filter.cleanWithPlaceholder(
        `This bullshit sentence has ${HINDI_BAD_WORD_ROMAN}.`,
        customPlaceholder
      );
      expect(customResult).toBe(
        `This ${customPlaceholder} sentence has ${customPlaceholder}.`
      );
    });

    test("should leave clean strings unchanged", () => {
      const cleanSentence = "This is a perfectly clean sentence.";
      expect(filter.clean(cleanSentence)).toBe(cleanSentence);
      expect(filter.cleanWithPlaceholder(cleanSentence)).toBe(cleanSentence);
    });
  });

  describe("Leet Speak Detection", () => {
    test.skip("should detect and normalize leet speak", () => {
      LEET_SPEAK_TESTS.forEach(({ original, expected }) => {
        // Add the expected word to ensure it's in the dictionary for testing
        filter.add([expected]);
        expect(filter.check(original)).toBe(true);
        filter.remove([expected]);
      });
    });

    test("should handle context-aware number replacement", () => {
      // Should not convert legitimate numbers
      expect(filter.check("I have 100 dollars")).toBe(false);
      expect(filter.check("Call me at 4004004000")).toBe(false);

      // But should convert in leet context
      filter.add(["ass"]);
      expect(filter.check("4ss")).toBe(true);
      filter.remove(["ass"]);
    });

    test.skip("should be configurable", () => {
      // Test with leet speak disabled
      filter.updateConfig({ enableLeetSpeak: false });
      filter.add(["test"]);
      expect(filter.check("t3st")).toBe(false);

      // Re-enable and test
      filter.updateConfig({ enableLeetSpeak: true });
      expect(filter.check("t3st")).toBe(true);
      filter.remove(["test"]);
    });
  });

  describe("Dynamic Word Management", () => {
    const testWords = ["tempword1", "tempword2", "परीक्षाशब्द"];

    afterEach(() => {
      filter.remove(testWords);
    });

    test.skip("should add words dynamically", () => {
      expect(filter.check(testWords[0])).toBe(false);

      filter.add(testWords);
      testWords.forEach((word) => {
        expect(filter.check(word)).toBe(true);
      });
    });

    test.skip("should remove words dynamically", () => {
      filter.add(testWords);
      testWords.forEach((word) => {
        expect(filter.check(word)).toBe(true);
      });

      filter.remove(testWords);
      testWords.forEach((word) => {
        expect(filter.check(word)).toBe(false);
      });
    });

    test.skip("should handle single word addition/removal", () => {
      const singleWord = "uniquetestword";

      expect(filter.check(singleWord)).toBe(false);
      filter.add([singleWord]);
      expect(filter.check(singleWord)).toBe(true);
      filter.remove([singleWord]);
      expect(filter.check(singleWord)).toBe(false);
    });
  });

  describe("Whitelist Functionality", () => {
    const whitelistWord = "safeword";

    beforeAll(() => {
      filter.add([whitelistWord]);
      filter.addToWhitelist([whitelistWord]);
    });

    afterAll(() => {
      filter.removeFromWhitelist([whitelistWord]);
      filter.remove([whitelistWord]);
    });

    test.skip("should not flag whitelisted words", () => {
      expect(
        filter.check(`This contains ${whitelistWord} which is safe.`)
      ).toBe(false);
      expect(
        filter.clean(`This contains ${whitelistWord} which is safe.`)
      ).toContain(whitelistWord);
    });

    test.skip("should allow whitelist management", () => {
      const newWhitelistWord = "anothersafeword";
      filter.add([newWhitelistWord]);

      // Should be flagged initially
      expect(filter.check(newWhitelistWord)).toBe(true);

      // Add to whitelist
      filter.addToWhitelist([newWhitelistWord]);
      expect(filter.check(newWhitelistWord)).toBe(false);

      // Remove from whitelist
      filter.removeFromWhitelist([newWhitelistWord]);
      expect(filter.check(newWhitelistWord)).toBe(true);

      filter.remove([newWhitelistWord]);
    });
  });

  describe("Configuration Management", () => {
    test("should allow placeholder customization", () => {
      const originalPlaceholder = "*";
      const newPlaceholder = "#";

      filter.setPlaceholder(newPlaceholder);
      const result = filter.clean("This is bullshit.");
      expect(result).toContain(newPlaceholder);
      expect(result).not.toContain(originalPlaceholder);

      // Reset
      filter.setPlaceholder(originalPlaceholder);
    });

    test.skip("should handle case sensitivity configuration", () => {
      const testWord = "CaseSensitiveWord";

      filter.updateConfig({ caseSensitive: true });
      filter.add([testWord]);

      expect(filter.check(testWord)).toBe(true);
      expect(filter.check(testWord.toLowerCase())).toBe(false);

      filter.updateConfig({ caseSensitive: false });
      expect(filter.check(testWord.toLowerCase())).toBe(true);

      filter.remove([testWord]);
    });

   
  });

  describe("Performance and Edge Cases", () => {
    test("should handle empty strings gracefully", () => {
      expect(filter.check("")).toBe(false);
      expect(filter.clean("")).toBe("");
      expect(filter.cleanWithPlaceholder("")).toBe("");

      const result = filter.detect("");
      expect(result.hasProfanity).toBe(false);
      expect(result.detectedWords).toHaveLength(0);
    });

    test.skip("should handle very long strings efficiently", () => {
      const longCleanText = "This is a clean sentence. ".repeat(1000);
      const startTime = Date.now();

      const result = filter.check(longCleanText);
      const endTime = Date.now();

      expect(result).toBe(false);
      expect(endTime - startTime).toBeLessThan(100); // Should be fast
    });

    test("should handle special characters and Unicode", () => {
      const unicodeText = "This is 测试 with émojis 🚀 and symbols @#$%";
      expect(filter.check(unicodeText)).toBe(false);
      expect(filter.clean(unicodeText)).toBe(unicodeText);
    });

    test("should handle null and undefined inputs gracefully", () => {
      expect(() => filter.check(null as any)).toThrow();
      expect(() => filter.check(undefined as any)).toThrow();
      expect(() => filter.clean(null as any)).toThrow();
      expect(() => filter.detect(null as any)).toThrow();
    });
  });

  describe("Advanced Detection Features", () => {
    test("should detect overlapping matches correctly", () => {
      // Add test words that might overlap
      filter.add(["badword", "word"]);

      const result = filter.detect("This contains badword here.");
      expect(result.detectedWords).toContain("badword");
      expect(result.positions).toHaveLength(1); // Should not double-count overlapping matches

      filter.remove(["badword", "word"]);
    });

    test("should provide accurate position information", () => {
      const text = "Start bullshit middle fuck end.";
      const result = filter.detect(text);

      expect(result.positions).toHaveLength(2);

      const bullshitPos = result.positions.find((p) => p.word === "bullshit");
      const fuckPos = result.positions.find((p) => p.word === "fuck");

      expect(bullshitPos).toBeDefined();
      expect(fuckPos).toBeDefined();
      expect(text.substring(bullshitPos!.start, bullshitPos!.end)).toBe(
        "bullshit"
      );
      expect(text.substring(fuckPos!.start, fuckPos!.end)).toBe("fuck");
    });
  });

  // ==========================================================
  // Word Scoring Tests
  // ==========================================================
  describe("Word Scoring - getWordScore", () => {
    test("should return severity and certainty for known words", () => {
      const fuckScore = filter.getWordScore("fuck");
      expect(fuckScore).toEqual(expect.objectContaining({ severity: 3, certainty: 5 }));

      const niggerScore = filter.getWordScore("nigger");
      expect(niggerScore).toEqual(expect.objectContaining({ severity: 5, certainty: 5 }));

      const damnScore = filter.getWordScore("damn");
      expect(damnScore).toEqual(expect.objectContaining({ severity: 2, certainty: 2 }));
    });

    test("should return null for unknown words", () => {
      expect(filter.getWordScore("excellent")).toBeNull();
      expect(filter.getWordScore("hello")).toBeNull();
      expect(filter.getWordScore("basketball")).toBeNull();
    });

    test("should be case-insensitive", () => {
      expect(filter.getWordScore("FUCK")).toEqual(filter.getWordScore("fuck"));
      expect(filter.getWordScore("Shit")).toEqual(filter.getWordScore("shit"));
    });

    test("should return scores for non-English words", () => {
      const merdeScore = filter.getWordScore("merde");
      expect(merdeScore).toEqual(expect.objectContaining({ severity: 4, certainty: 5 }));

      const scheisseScore = filter.getWordScore("scheisse");
      expect(scheisseScore).toEqual(expect.objectContaining({ severity: 3, certainty: 4 }));
    });

    test("should score evasion variants with c:5", () => {
      const fcukScore = filter.getWordScore("fcuk");
      expect(fcukScore).not.toBeNull();
      expect(fcukScore!.certainty).toBe(5);

      const n1ggerScore = filter.getWordScore("n1gger");
      expect(n1ggerScore).not.toBeNull();
      expect(n1ggerScore!.certainty).toBe(5);
      expect(n1ggerScore!.severity).toBe(5);
    });

    test("should detect all 'fuck' evasion variants", () => {
      const variants = [
        // q-substitution
        { word: "foq", s: 3, c: 5 },
        { word: "foqq", s: 3, c: 5 },
        { word: "foqqing", s: 3, c: 5 },
        { word: "foqing", s: 3, c: 5 },
        { word: "faqq", s: 3, c: 5 },
        { word: "faqqing", s: 3, c: 5 },
        { word: "faqing", s: 3, c: 5 },
        // cc-substitution
        { word: "fucc", s: 3, c: 5 },
        { word: "fuccing", s: 3, c: 5 },
        { word: "fucing", s: 3, c: 5 },
        { word: "fuccin", s: 3, c: 5 },
        { word: "fuccking", s: 3, c: 5 },
        // k-substitution
        { word: "fuk", s: 3, c: 5 },
        { word: "fukking", s: 3, c: 4 },
        { word: "fukkin", s: 3, c: 4 },
        { word: "fukin", s: 3, c: 4 },
        // ph-substitution
        { word: "phuck", s: 3, c: 5 },
        { word: "phuk", s: 3, c: 5 },
        // truncated / reordered
        { word: "fuc", s: 3, c: 5 },
        { word: "fcuk", s: 3, c: 5 },
        { word: "fck", s: 3, c: 5 },
        // phonetic
        { word: "fuq", s: 3, c: 5 },
        // standard forms
        { word: "fuckin", s: 3, c: 5 },
        { word: "fucking", s: 3, c: 5 },
        { word: "fuking", s: 3, c: 4 },
      ];
      variants.forEach(({ word, s, c }) => {
        const score = filter.getWordScore(word);
        expect(score).not.toBeNull();
        expect(score!.severity).toBe(s);
        expect(score!.certainty).toBe(c);
      });
    });

    // "faq" commented out — collides with "Frequently Asked Questions"
    // test("should score 'faq' with low certainty (FAQ acronym collision)", () => {
    //   const score = filter.getWordScore("faq");
    //   expect(score).not.toBeNull();
    //   expect(score!.severity).toBe(3);
    //   expect(score!.certainty).toBe(1);
    // });
  });

  describe("Word Scoring - shouldFlag", () => {
    test("should flag s:5 words regardless of certainty", () => {
      // s:5, c:5
      expect(filter.shouldFlag("nigger")).toBe(true);
      expect(filter.shouldFlag("cunt")).toBe(true);
      // "gay" removed from dictionary — see challenge-tests.test.ts
    });

    test("should flag s:4+ with c:2+", () => {
      // s:4, c:5
      expect(filter.shouldFlag("blowjob")).toBe(true);
      // s:4, c:4
      expect(filter.shouldFlag("pussy")).toBe(true);
      // s:4, c:3
      expect(filter.shouldFlag("penis")).toBe(true);
    });

    test("should NOT flag s:4 with c:1", () => {
      // s:4, c:1 — common innocent usage (name, etc.)
      expect(filter.shouldFlag("dick")).toBe(false);
    });

    test("should flag s:3 with c:3+", () => {
      // s:3, c:5
      expect(filter.shouldFlag("fuck")).toBe(true);
      expect(filter.shouldFlag("shit")).toBe(true);
      // s:3, c:4
      expect(filter.shouldFlag("bitch")).toBe(true);
      // s:3, c:3
      expect(filter.shouldFlag("ass")).toBe(true);
    });

    test("should NOT flag s:3 with c:2 or less", () => {
      // s:3, c:2
      expect(filter.shouldFlag("suck")).toBe(false);
    });

    test("should NOT flag s:2 words", () => {
      expect(filter.shouldFlag("hell")).toBe(false);
      expect(filter.shouldFlag("damn")).toBe(false);
    });

    test("should flag crap (s:3 c:4)", () => {
      expect(filter.shouldFlag("crap")).toBe(true);
    });

    test("should NOT flag s:1 words", () => {
      expect(filter.shouldFlag("muppet")).toBe(false);
      expect(filter.shouldFlag("plonker")).toBe(false);
    });

    test("should return false for unknown words", () => {
      expect(filter.shouldFlag("excellent")).toBe(false);
      expect(filter.shouldFlag("hello")).toBe(false);
    });
  });

  describe("Word Scoring - detect() scoredWords and maxSeverity", () => {
    test("should include scoredWords in detection results", () => {
      const result = filter.detect("What the fuck is this bullshit?");
      expect(result.scoredWords).toBeDefined();
      expect(result.scoredWords.length).toBeGreaterThan(0);

      // fuck and bullshit should both be PROFANE (s:3, c:5)
      const fuckEntry = result.scoredWords.find((sw) => sw.word === "fuck");
      expect(fuckEntry).toBeDefined();
      expect(fuckEntry!.severity).toBe(WordSeverity.PROFANE);

      const bsEntry = result.scoredWords.find((sw) => sw.word === "bullshit");
      expect(bsEntry).toBeDefined();
      expect(bsEntry!.severity).toBe(WordSeverity.PROFANE);
    });

    test("should set maxSeverity to PROFANE when flaggable words detected", () => {
      const result = filter.detect("This is fucking terrible.");
      expect(result.maxSeverity).toBe(WordSeverity.PROFANE);
    });

    test("should return empty scoredWords and null maxSeverity for clean text", () => {
      const result = filter.detect("This is a perfectly clean sentence.");
      expect(result.scoredWords).toEqual([]);
      expect(result.maxSeverity).toBeNull();
    });

    test("should classify below-threshold words as AMBIVALENT", () => {
      // hell is s:2, c:2 — below flag threshold
      const result = filter.detect("hell");
      const hellEntry = result.scoredWords.find((sw) => sw.word === "hell");
      expect(hellEntry).toBeDefined();
      expect(hellEntry!.severity).toBe(WordSeverity.AMBIVALENT);
    });

    test("should classify damn as AMBIVALENT", () => {
      // damn is s:2, c:2 — below flag threshold
      const result = filter.detect("damn");
      const damnEntry = result.scoredWords.find((sw) => sw.word === "damn");
      expect(damnEntry).toBeDefined();
      expect(damnEntry!.severity).toBe(WordSeverity.AMBIVALENT);
    });

    test("should handle mixed severity words", () => {
      // hell = AMBIVALENT (s:2,c:2), asshole = PROFANE (s:3,c:5)
      const result = filter.detect("What the hell kind of asshole does that?");
      const hellEntry = result.scoredWords.find((sw) => sw.word === "hell");
      const assholeEntry = result.scoredWords.find((sw) => sw.word === "asshole");

      expect(hellEntry).toBeDefined();
      expect(hellEntry!.severity).toBe(WordSeverity.AMBIVALENT);
      expect(assholeEntry).toBeDefined();
      expect(assholeEntry!.severity).toBe(WordSeverity.PROFANE);
      // maxSeverity should be PROFANE (highest)
      expect(result.maxSeverity).toBe(WordSeverity.PROFANE);
    });
  });

  describe("Backward Compatibility", () => {
    test.skip("should maintain compatibility with old method names", () => {
      // Test that old add/remove methods still work if they exist
      const testWord = "backwardcompatword";

      if (typeof filter.add === "function") {
        filter.add(testWord);
        expect(filter.check(testWord)).toBe(true);
        filter.remove(testWord);
        expect(filter.check(testWord)).toBe(false);
      }
    });

  });
});

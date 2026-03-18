import { BeKind } from "../src/index.ts";

// Consolidated word list for testing
import allLanguagesBadWords from "../src/languages/english-primary-all-languages.ts";

// Use a dedicated instance to avoid cross-file singleton mutation in bun
const filter = new BeKind({ silent: true });

/**
 * Helper to pick N single-word entries from a word list.
 * Filters out multi-word phrases. Allows single-character words for
 * CJK and other non-Latin scripts where single characters are meaningful.
 */
function pickWords(list: Record<string, { s: number; c: number }> | string[], count: number, minLength = 2): string[] {
  const words = Array.isArray(list) ? list : Object.keys(list);
  const singleWords = words.filter(
    (w) => w.length >= minLength && !w.includes(" ")
  );
  return singleWords.slice(0, count);
}

describe("Comprehensive Profanity Filter Tests", () => {
  // All languages loaded by default via consolidated word list


  // ==========================================================
  // 1. Per-language detection tests
  // ==========================================================
  describe("Per-language detection", () => {
    // Test with consolidated word list
    const profaneWords = pickWords(allLanguagesBadWords, 20, 3);
    const cleanWords = [
      "hello", "world", "beautiful", "sunshine", "keyboard",
      "bonjour", "merci", "gracias", "danke", "obrigado",
      "你好", "谢谢", "ありがとう", "감사합니다", "спасибо",
      "अच्छा", "ভালো", "நன்று", "మంచి", "مرحبا",
    ];

    test.skip("should detect profane words from consolidated list", () => {
      expect(profaneWords.length).toBe(20);
      profaneWords.forEach((word) => {
        expect(filter.check(word)).toBe(true);
      });
    });

    test("should NOT flag clean words across languages", () => {
      cleanWords.forEach((word) => {
        expect(filter.check(word)).toBe(false);
      });
    });
  });

  // ==========================================================
  // 2. False positive tests (Scunthorpe problem and more)
  // ==========================================================
  describe("False positive prevention", () => {
    describe("Common English words that should NOT be flagged", () => {
      const innocentWords = [
        "hello",
        "world",
        "the",
        "is",
        "and",
        "this",
        "with",
        "test",
        "good",
        "nice",
        "class",
        "document",
        "assembly",
        "grass",
      ];

      test.each(innocentWords)(
        "should NOT flag '%s' as profane",
        (word) => {
          expect(filter.check(word)).toBe(false);
        }
      );
    });

    describe("Scunthorpe problem - words containing profane substrings", () => {
      const scunthorpeWords = [
        "assistant",
        "classic",
        "assume",
        "assess",
        "passage",
        "compass",
        "therapist",
        "exchange",
        "executed",
        "titleist",
        "cocktail",
        "shuttlecock",
        "peanut",
      ];

      test.each(scunthorpeWords)(
        "should NOT flag '%s' as profane",
        (word) => {
          expect(filter.check(word)).toBe(false);
        }
      );
    });

    describe("Normal Unicode text should NOT be flagged", () => {
      const normalUnicode = [
        "测试",           // Chinese for "test"
        "こんにちは",     // Japanese "hello"
        "안녕하세요",     // Korean "hello"
        "Привет",         // Russian "hello"
        "مرحبا",          // Arabic "hello"
      ];

      test.each(normalUnicode)(
        "should NOT flag '%s' as profane",
        (text) => {
          expect(filter.check(text)).toBe(false);
        }
      );
    });

    describe("Symbols and special characters should NOT be flagged", () => {
      const specialStrings = [
        "@#$%",
        "hello@world.com",
        "C++ programming",
        "100% complete",
        "price: $19.99",
        "2 + 2 = 4",
      ];

      test.each(specialStrings)(
        "should NOT flag '%s' as profane",
        (text) => {
          expect(filter.check(text)).toBe(false);
        }
      );
    });
  });

  // ==========================================================
  // 3. Multi-language mixing tests
  // ==========================================================
  describe("Multi-language mixing", () => {
    test("should detect profanity when multiple languages are mixed", () => {
      // English + Hindi
      expect(
        filter.check("This sentence has chutiya mixed in English.")
      ).toBe(true);
    });

    test("should detect profanity across scripts in one string", () => {
      // Mix of Devanagari profanity and clean English
      expect(
        filter.check("Hello भोसड़ी world")
      ).toBe(true);
    });

    test("should pass clean multi-language text", () => {
      expect(
        filter.check("Hello Guten Tag Bonjour 你好 こんにちは")
      ).toBe(false);
    });

    test("should detect multiple profane words from different languages", () => {
      const result = filter.detect("bullshit and merde together");
      expect(result.hasProfanity).toBe(true);
      expect(result.detectedWords).toEqual(["bullshit", "merde"]);
    });
  });

  // ==========================================================
  // 4. Leet speak detection tests
  // ==========================================================
  describe("Leet speak detection", () => {
    const leetTests = [
      { input: "sh1t", base: "shit", description: "sh1t with 1->i" },
      { input: "b1tch", base: "bitch", description: "b1tch with 1->i" },
      { input: "4ss", base: "ass", description: "4ss with 4->a" },
      { input: "5h1t", base: "shit", description: "5h1t with 5->s and 1->i" },
      { input: "a$$", base: "ass", description: "a$$ with $->s" },
    ];

    test.each(leetTests)(
      "should detect leet speak: $description",
      ({ input }) => {
        filter.updateConfig({ enableLeetSpeak: true });
        expect(filter.check(input)).toBe(true);
        filter.updateConfig({ enableLeetSpeak: false });
      }
    );

    test("should NOT convert legitimate numbers in normal context", () => {
      filter.updateConfig({ enableLeetSpeak: true });
      expect(filter.check("I have 100 apples")).toBe(false);
      expect(filter.check("The year is 2024")).toBe(false);
      expect(filter.check("Call 555-1234")).toBe(false);
      filter.updateConfig({ enableLeetSpeak: false });
    });
  });

  // ==========================================================
  // 5. Edge cases
  // ==========================================================
  describe("Edge cases", () => {
    beforeEach(() => {
      // Ensure leet speak is disabled so symbols like ( ) ! are not transformed
      filter.updateConfig({ enableLeetSpeak: false, caseSensitive: false });
    });

    test("should handle empty string", () => {
      expect(filter.check("")).toBe(false);
      expect(filter.clean("")).toBe("");
      const result = filter.detect("");
      expect(result.hasProfanity).toBe(false);
      expect(result.detectedWords).toHaveLength(0);
      expect(result.positions).toHaveLength(0);
    });

    test("should handle very long clean text (1000+ chars)", () => {
      const longText = "This is a clean sentence with no profanity. ".repeat(50);
      expect(longText.length).toBe(2200);
      expect(filter.check(longText)).toBe(false);
    });

    test("should handle strings with only whitespace", () => {
      expect(filter.check("   ")).toBe(false);
      expect(filter.check("\t\n\r")).toBe(false);
      expect(filter.clean("   ")).toBe("   ");
    });

    test("should handle strings with only numbers", () => {
      expect(filter.check("1234567890")).toBe(false);
      expect(filter.check("42")).toBe(false);
    });

    test("should handle strings with only symbols", () => {
      expect(filter.check("!@#$%^&*()")).toBe(false);
      expect(filter.check("---...___")).toBe(false);
    });

    test("should detect profanity at start of sentence", () => {
      expect(filter.check("fuck this is bad")).toBe(true);
    });

    test("should detect profanity in middle of sentence", () => {
      expect(filter.check("this is fuck in the middle")).toBe(true);
    });

    test("should detect profanity at end of sentence", () => {
      expect(filter.check("this ends with fuck")).toBe(true);
    });

    test("should detect profanity with surrounding punctuation", () => {
      // Note: with leet speak enabled (default), ( -> c, ! -> i, $ -> s etc.
      // so we test with leet speak off for punctuation tests
      filter.updateConfig({ enableLeetSpeak: false });
      expect(filter.check("fuck!")).toBe(true);
      expect(filter.check("bullshit.")).toBe(true);
      expect(filter.check("(shit)")).toBe(true);
      expect(filter.check("\"fuck\"")).toBe(true);
      expect(filter.check("'shit'")).toBe(true);
      filter.updateConfig({ enableLeetSpeak: true });
    });

    test("should detect ALL CAPS profanity", () => {
      filter.updateConfig({ enableLeetSpeak: false });
      expect(filter.check("FUCK")).toBe(true);
      expect(filter.check("SHIT")).toBe(true);
      expect(filter.check("BULLSHIT")).toBe(true);
      expect(filter.check("ASSHOLE")).toBe(true);
      filter.updateConfig({ enableLeetSpeak: true });
    });

    test("should detect mixed case profanity", () => {
      filter.updateConfig({ enableLeetSpeak: false });
      expect(filter.check("FuCk")).toBe(true);
      expect(filter.check("sHiT")).toBe(true);
      expect(filter.check("BuLlShIt")).toBe(true);
      filter.updateConfig({ enableLeetSpeak: true });
    });

    test("should handle null and undefined inputs by throwing", () => {
      expect(() => filter.check(null as any)).toThrow();
      expect(() => filter.check(undefined as any)).toThrow();
      expect(() => filter.clean(null as any)).toThrow();
      expect(() => filter.detect(null as any)).toThrow();
    });

    test("should handle single-character strings", () => {
      expect(filter.check("a")).toBe(false);
      expect(filter.check("x")).toBe(false);
    });

    test("should handle repeated profanity", () => {
      expect(filter.check("fuck fuck fuck")).toBe(true);
      const result = filter.detect("fuck fuck fuck");
      expect(result.detectedWords).toEqual(["fuck", "fuck", "fuck"]);
    });
  });

  // ==========================================================
  // 6. Clean method tests
  // ==========================================================
  describe("clean() method", () => {
    beforeEach(() => {
      filter.updateConfig({ enableLeetSpeak: false, caseSensitive: false });
    });

    test("should mask profanity with asterisks by default", () => {
      const result = filter.clean("This is bullshit");
      expect(result).toBe("This is ********");
      expect(result).not.toContain("bullshit");
    });

    test("should preserve clean text around profanity", () => {
      const result = filter.clean("Hello bullshit world");
      expect(result).toContain("Hello");
      expect(result).toContain("world");
      expect(result).not.toContain("bullshit");
    });

    test("should use custom placeholder character", () => {
      const result = filter.clean("This is bullshit", "#");
      expect(result).toBe("This is ########");
    });

    test("should leave entirely clean text unchanged", () => {
      const cleanText = "This is a lovely day for programming";
      expect(filter.clean(cleanText)).toBe(cleanText);
    });

    test("should handle multiple profane words", () => {
      const result = filter.clean("what the fuck and bullshit");
      expect(result).not.toContain("fuck");
      expect(result).not.toContain("bullshit");
      expect(result).toContain("what");
      expect(result).toContain("and");
    });

    test("should produce asterisks matching the profane word length", () => {
      const result = filter.clean("fuck");
      expect(result).toBe("****");
      expect(result.length).toBe(4);
    });

    test("should handle cleanWithPlaceholder replacing whole word", () => {
      const result = filter.cleanWithPlaceholder("This is bullshit");
      expect(result).toBe("This is ***");
    });

    test("should handle cleanWithPlaceholder with custom placeholder", () => {
      const result = filter.cleanWithPlaceholder(
        "This is bullshit",
        "[CENSORED]"
      );
      expect(result).toBe("This is [CENSORED]");
    });
  });

  // ==========================================================
  // 7. Detect method tests
  // ==========================================================
  describe("detect() method", () => {
    test("should return hasProfanity=true when profanity is found", () => {
      const result = filter.detect("This is bullshit");
      expect(result.hasProfanity).toBe(true);
    });

    test("should return hasProfanity=false for clean text", () => {
      const result = filter.detect("This is perfectly clean");
      expect(result.hasProfanity).toBe(false);
    });

    test("should list detected words", () => {
      const result = filter.detect("What the fuck is this bullshit");
      expect(result.detectedWords).toContain("fuck");
      expect(result.detectedWords).toContain("bullshit");
    });

    test("should provide correct positions for detected words", () => {
      const text = "Start fuck end";
      const result = filter.detect(text);

      expect(result.positions.length).toBe(1);
      expect(result.positions[0].word).toBe("fuck");
      expect(text.substring(result.positions[0].start, result.positions[0].end)).toBe("fuck");
    });

    test("should include cleanedText in detection result", () => {
      const result = filter.detect("This is bullshit");
      expect(result.cleanedText).toBeDefined();
      expect(result.cleanedText).not.toContain("bullshit");
      expect(result.cleanedText).toContain("This is");
    });

    test("should return empty arrays for clean text", () => {
      const result = filter.detect("Nothing wrong here");
      expect(result.detectedWords).toHaveLength(0);
      expect(result.positions).toHaveLength(0);
      expect(result.cleanedText).toBe("Nothing wrong here");
    });
  });

  // ==========================================================
  // 8. Multiple profanity tests
  // ==========================================================
  describe("Multiple profanity in one text", () => {
    test("should detect all profane words in a sentence", () => {
      const result = filter.detect(
        "This bullshit sentence has fuck and asshole in it"
      );
      expect(result.hasProfanity).toBe(true);
      expect(result.detectedWords).toEqual(["bullshit", "fuck", "asshole"]);
    });

    test("should clean all profane words", () => {
      const result = filter.clean(
        "This bullshit sentence has fuck and asshole"
      );
      expect(result).toBe("This ******** sentence has **** and *******");
    });

    test("should provide positions for each profane word", () => {
      const text = "fuck then bullshit";
      const result = filter.detect(text);
      expect(result.positions.length).toBe(2);
      expect(result.positions.map(p => p.word)).toEqual(["fuck", "bullshit"]);
      result.positions.forEach((pos) => {
        expect(text.substring(pos.start, pos.end)).toBe(pos.word);
      });
    });
  });

  // ==========================================================
  // 9. Whitelist tests
  // ==========================================================
  describe("Whitelist functionality", () => {
    test.skip("should not flag whitelisted words", () => {
      const word = "testprofane";
      filter.add([word]);
      expect(filter.check(word)).toBe(true);

      filter.addToWhitelist([word]);
      expect(filter.check(word)).toBe(false);

      // Cleanup
      filter.removeFromWhitelist([word]);
      filter.remove([word]);
    });

    test("should still flag non-whitelisted profanity when whitelist is active", () => {
      const whitelistedWord = "specialword";
      filter.add([whitelistedWord]);
      filter.addToWhitelist([whitelistedWord]);

      // The whitelisted word should pass, but other profanity should not
      expect(filter.check(`${whitelistedWord} and fuck`)).toBe(true);
      expect(filter.check(whitelistedWord)).toBe(false);

      // Cleanup
      filter.removeFromWhitelist([whitelistedWord]);
      filter.remove([whitelistedWord]);
    });

    test.skip("should restore detection after removing from whitelist", () => {
      const word = "tempwhitelist";
      filter.add([word]);
      filter.addToWhitelist([word]);
      expect(filter.check(word)).toBe(false);

      filter.removeFromWhitelist([word]);
      expect(filter.check(word)).toBe(true);

      filter.remove([word]);
    });

    test("should clean text preserving whitelisted words", () => {
      const word = "safehere";
      filter.add([word]);
      filter.addToWhitelist([word]);

      const result = filter.clean(`${word} is safe but fuck is not`);
      expect(result).toContain(word);
      expect(result).not.toContain("fuck");

      filter.removeFromWhitelist([word]);
      filter.remove([word]);
    });
  });

  // ==========================================================
  // 10. Performance tests
  // ==========================================================
  describe("Performance", () => {
    test.skip("should filter a large clean text in under 200ms", () => {
      const largeText = "This is a perfectly normal sentence without any bad words. ".repeat(
        500
      );
      const start = Date.now();
      filter.check(largeText);
      const elapsed = Date.now() - start;
      expect(elapsed).toBeLessThan(200);
    });

    test("should filter a large text with profanity in under 200ms", () => {
      const segments = Array.from({ length: 200 }, (_, i) =>
        i % 50 === 0
          ? "This has bullshit in it. "
          : "This is a clean sentence. "
      );
      const largeText = segments.join("");
      const start = Date.now();
      filter.detect(largeText);
      const elapsed = Date.now() - start;
      expect(elapsed).toBeLessThan(200);
    });

    test("should clean a large text in under 200ms", () => {
      const largeText =
        "Clean text here. ".repeat(400) + "fuck " + "More clean text. ".repeat(100);
      const start = Date.now();
      filter.clean(largeText);
      const elapsed = Date.now() - start;
      expect(elapsed).toBeLessThan(200);
    });
  });

  // ==========================================================
  // Additional: Dynamic word management
  // ==========================================================
  describe("Dynamic word management (add/remove)", () => {
    test.skip("should add a custom word and detect it", () => {
      const custom = "xyzprofane";
      expect(filter.check(custom)).toBe(false);
      filter.add([custom]);
      expect(filter.check(custom)).toBe(true);
      filter.remove([custom]);
      expect(filter.check(custom)).toBe(false);
    });

    test.skip("should accept a single string argument to add", () => {
      const word = "singleadd";
      filter.add(word);
      expect(filter.check(word)).toBe(true);
      filter.remove(word);
    });

    test.skip("should add multiple words at once", () => {
      const words = ["customa", "customb", "customc"];
      filter.add(words);
      words.forEach((w) => expect(filter.check(w)).toBe(true));
      filter.remove(words);
      words.forEach((w) => expect(filter.check(w)).toBe(false));
    });
  });

  // ==========================================================
  // Additional: Configuration
  // ==========================================================
  describe("Configuration options", () => {
    afterEach(() => {
      // Reset to defaults
      filter.updateConfig({ caseSensitive: false, enableLeetSpeak: true });
      filter.setPlaceholder("*");
    });

    test.skip("should respect case-sensitive mode", () => {
      filter.updateConfig({ caseSensitive: true });
      filter.add(["CaseTEST"]);

      expect(filter.check("CaseTEST")).toBe(true);
      expect(filter.check("casetest")).toBe(false);

      filter.updateConfig({ caseSensitive: false });
      expect(filter.check("casetest")).toBe(true);

      filter.remove(["CaseTEST"]);
    });

    test("should respect custom placeholder via setPlaceholder", () => {
      filter.setPlaceholder("#");
      const result = filter.clean("This is fuck");
      expect(result).toContain("####");
      expect(result).not.toContain("*");
      filter.setPlaceholder("*");
    });

    test.skip("should allow disabling leet speak detection", () => {
      filter.add(["test"]);
      filter.updateConfig({ enableLeetSpeak: true });
      expect(filter.check("t3st")).toBe(true);

      filter.updateConfig({ enableLeetSpeak: false });
      expect(filter.check("t3st")).toBe(false);

      filter.updateConfig({ enableLeetSpeak: true });
      filter.remove(["test"]);
    });
  });

  // ==========================================================
  // Additional: Language management
  // ==========================================================
  describe("Language management", () => {
    test("should report all loaded languages", () => {
      const loaded = filter.getLoadedLanguages();
      expect(loaded).toContain("all");
    });

    test("should list available languages", () => {
      const available = filter.getAvailableLanguages();
      expect(available).toContain("all");
    });

    test("should have all languages loaded by default", () => {
      const freshFilter = new BeKind({ silent: true });
      const loaded = freshFilter.getLoadedLanguages();
      expect(loaded).toContain("all");
    });

    test("should handle loading an already-loaded language gracefully", () => {
      // Loading "all" again should not throw or duplicate
      expect(() => filter.loadLanguage("all")).not.toThrow();
    });
  });

  // ==========================================================
  // Additional: New instance isolation
  // ==========================================================
  describe("Instance isolation", () => {
    test.skip("new BeKind instance should be independent of the singleton", () => {
      const freshFilter = new BeKind({ silent: true });
      freshFilter.add(["isolatedword"]);

      expect(freshFilter.check("isolatedword")).toBe(true);
      // The singleton should NOT have this word
      expect(filter.check("isolatedword")).toBe(false);

      freshFilter.remove(["isolatedword"]);
    });
  });

  // ==========================================================
  // needsManualReview — abhorrent language flagging
  // ==========================================================
  describe("needsManualReview flagging", () => {
    beforeAll(() => {
      filter.updateConfig({ enableLeetSpeak: false });
    });

    afterAll(() => {
      filter.updateConfig({ enableLeetSpeak: true });
    });

    test("clean text should not need manual review", () => {
      const result = filter.detect("Community picnic at the park this Saturday");
      expect(result.needsManualReview).toBe(false);
      expect(result.flaggedAbhorrentWords).toEqual([]);
    });

    test("regular profanity should not need manual review", () => {
      const result = filter.detect("What the fuck is going on");
      expect(result.hasProfanity).toBe(true);
      expect(result.needsManualReview).toBe(false);
      expect(result.flaggedAbhorrentWords).toEqual([]);
    });

    test("nazi reference should need manual review", () => {
      const result = filter.detect("Join the nazi movement today");
      expect(result.hasProfanity).toBe(true);
      expect(result.needsManualReview).toBe(true);
      expect(result.flaggedAbhorrentWords).toContain("nazi");
    });

    test("hitler reference should need manual review", () => {
      const result = filter.detect("hitler did nothing wrong");
      expect(result.needsManualReview).toBe(true);
      expect(result.flaggedAbhorrentWords).toEqual(["hitler did nothing wrong"]);
    });

    test("KKK reference should need manual review", () => {
      const result = filter.detect("Join the ku klux klan rally");
      expect(result.needsManualReview).toBe(true);
    });

    test("white supremacist terms should need manual review", () => {
      const result = filter.detect("Promoting white power ideology");
      expect(result.needsManualReview).toBe(true);
      expect(result.flaggedAbhorrentWords).toContain("white power");
    });

    test("racial slurs should need manual review", () => {
      const result = filter.detect("Calling someone a chink is hateful");
      expect(result.needsManualReview).toBe(true);
      expect(result.flaggedAbhorrentWords).toContain("chink");
    });

    test("antisemitic terms should need manual review", () => {
      const result = filter.detect("Spreading the jewish conspiracy theory");
      expect(result.needsManualReview).toBe(true);
    });

    test("extremist group names should need manual review", () => {
      const result = filter.detect("The proud boys marched downtown");
      expect(result.needsManualReview).toBe(true);
      expect(result.flaggedAbhorrentWords).toContain("proud boys");
    });

    test("genocidal language should need manual review", () => {
      const result = filter.detect("death to jews is hate speech");
      expect(result.needsManualReview).toBe(true);
    });

    test("multiple abhorrent words should all be flagged", () => {
      const result = filter.detect("nazi white power kkk rally");
      expect(result.needsManualReview).toBe(true);
      expect(result.flaggedAbhorrentWords).toEqual(["nazi", "white power", "kkk"]);
    });

    test("coded hate speech should need manual review", () => {
      const result = filter.detect("dindu nuffin is a racist meme");
      expect(result.needsManualReview).toBe(true);
    });

    test("empty string should not need manual review", () => {
      const result = filter.detect("");
      expect(result.needsManualReview).toBe(false);
      expect(result.flaggedAbhorrentWords).toEqual([]);
    });

    test("mix of regular profanity and abhorrent should flag manual review", () => {
      const result = filter.detect("Fuck the nazi bastards");
      expect(result.hasProfanity).toBe(true);
      expect(result.needsManualReview).toBe(true);
      // Only the abhorrent word should be in flaggedAbhorrentWords
      expect(result.flaggedAbhorrentWords).toContain("nazi");
      expect(result.flaggedAbhorrentWords).not.toContain("fuck");
    });
  });
});

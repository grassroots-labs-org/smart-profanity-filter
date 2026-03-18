import { BeKind, WordSeverity } from "../src/index.js";

describe("Embedded Profanity Detection", () => {
  let filter: BeKind;

  beforeAll(() => {
    filter = new BeKind({
      embeddedProfanityDetection: true,
      enableLeetSpeak: false,
    });
  });

  describe("basic substring detection", () => {
    test("should detect 'bitch' in 'lbitch'", () => {
      const result = filter.detect("lbitch");
      expect(result.hasProfanity).toBe(true);
      expect(result.detectedWords.length).toBeGreaterThan(0);
    });

    test("should detect 'bitch' in 'cbitch'", () => {
      const result = filter.detect("cbitch");
      expect(result.hasProfanity).toBe(true);
    });

    test("should detect 'fuck' in 'xfuckx'", () => {
      const result = filter.detect("xfuckx");
      expect(result.hasProfanity).toBe(true);
    });
  });

  describe("certainty decay - should NOT flag", () => {
    test("should NOT flag 'sass' (ass is too short, high decay)", () => {
      const result = filter.detect("sass");
      // ass (s:3,c:3) in sass: decayed_c = 3 * 0.9^1 * (3/4) = 2.025 → c:2
      // s:3 needs c:3+ to flag
      const assMatch = result.scoredWords.find((sw) => sw.word === "ass" || sw.word === "sass");
      if (assMatch) {
        expect(assMatch.severity).toBe(WordSeverity.AMBIVALENT);
      }
    });

    test("should NOT flag 'class' (ass deeply embedded)", () => {
      const result = filter.detect("class");
      // ass (s:3,c:3) in class: decayed_c = 3 * 0.9^2 * (3/5) = 1.458 → c:1
      const flagged = result.scoredWords.filter((sw) => sw.severity === WordSeverity.PROFANE);
      expect(flagged.length).toBe(0);
    });

    test("should NOT flag 'assassin' (ass very deeply embedded)", () => {
      const result = filter.detect("assassin");
      const flagged = result.scoredWords.filter((sw) => sw.severity === WordSeverity.PROFANE);
      expect(flagged.length).toBe(0);
    });

    test("should NOT flag 'scunthorpe' (cunt deeply embedded in long word)", () => {
      const result = filter.detect("scunthorpe");
      // cunt (s:5,c:5) in scunthorpe: decayed_c = 5 * 0.9^7 * (4/11) = 0.87 → c:1
      const flagged = result.scoredWords.filter((sw) => sw.severity === WordSeverity.PROFANE);
      expect(flagged.length).toBe(0);
    });
  });

  describe("multi-profanity compound words", () => {
    test("should flag 'fuckbitchassnuggetcunt' strongly", () => {
      const result = filter.detect("fuckbitchassnuggetcunt");
      expect(result.hasProfanity).toBe(true);
      expect(result.detectedWords.length).toBeGreaterThan(0);
      // Multiple profane substrings = multi-profanity bonus
      const profane = result.scoredWords.filter((sw) => sw.severity === WordSeverity.PROFANE);
      expect(profane.length).toBeGreaterThan(0);
    });
  });

  describe("long word bonus", () => {
    test.skip("should boost certainty for unusually long words with profanity", () => {
      // 12+ chars with embedded profanity gets a bonus
      const result = filter.detect("superfuckmaster");
      expect(result.hasProfanity).toBe(true);
    });
  });

  describe("disabled by default", () => {
    test("should NOT detect embedded profanity when option is disabled", () => {
      const defaultFilter = new BeKind({ enableLeetSpeak: false });
      const result = defaultFilter.detect("lbitch");
      expect(result.hasProfanity).toBe(false);
    });
  });

  describe("does not interfere with normal detection", () => {
    test("normal word-boundary matches still work", () => {
      const result = filter.detect("What the fuck is this bullshit?");
      expect(result.hasProfanity).toBe(true);
      expect(result.detectedWords).toEqual(
        expect.arrayContaining(["fuck", "bullshit"])
      );
    });

    test("clean text remains clean", () => {
      const result = filter.detect("This is a perfectly clean sentence.");
      expect(result.hasProfanity).toBe(false);
    });
  });
});

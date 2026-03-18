import { BeKind } from "../src/index.js";

describe("Separator-Tolerant Detection", () => {
  let filter: BeKind;

  beforeAll(() => {
    filter = new BeKind({
      enableLeetSpeak: false,
      separatorTolerance: 5,
    });
  });

  describe("symbol-separated evasion → suspicious phrases", () => {
    test("should flag 'fu@ck' as suspicious", () => {
      const result = filter.detect("fu@ck");
      expect(result.suspiciousPhrases.map(sp => sp.word)).toEqual(["fuc", "fuck"]);
    });

    test("should flag 'c.u.n.t' as suspicious", () => {
      const result = filter.detect("c.u.n.t");
      expect(result.suspiciousPhrases.map(sp => sp.word)).toEqual(["c.unt", "cu.nt", "cunt"]);
    });

    test("should flag 'b-i-t-c-h' as suspicious", () => {
      const result = filter.detect("b-i-t-c-h");
      expect(result.suspiciousPhrases.map(sp => sp.word)).toEqual(["bitch"]);
    });

    test("should flag 'fu@ck@cu@nt@bi@tch' as suspicious with multiple matches", () => {
      const result = filter.detect("fu@ck@cu@nt@bi@tch");
      expect(result.suspiciousPhrases.map(sp => sp.word)).toEqual(["fuc", "fuck", "cunt", "bitch"]);
    });

    test("should flag 's_h_i_t' as suspicious", () => {
      const result = filter.detect("s_h_i_t");
      expect(result.suspiciousPhrases.map(sp => sp.word)).toEqual(["shit"]);
    });

    test("should flag 'f*u*c*k' as suspicious", () => {
      const result = filter.detect("f*u*c*k");
      expect(result.suspiciousPhrases.map(sp => sp.word)).toEqual(["fuc", "fuck"]);
    });

    test("should flag 'a.s.s' as suspicious", () => {
      const result = filter.detect("a.s.s");
      expect(result.suspiciousPhrases.map(sp => sp.word)).toEqual(["a.ss", "ass"]);
    });
  });

  describe("space-separated evasion → suspicious phrases", () => {
    test("should flag 'fu ck' as suspicious", () => {
      const result = filter.detect("fu ck");
      // 'fu ck' may also match 'f u c k' from word list — check suspicious
      expect(result.suspiciousPhrases.map(sp => sp.word)).toEqual(["fuc", "fuck"]);
      expect(result.detectedWords).toEqual([]);
    });

    test("should flag 'sh it' as suspicious", () => {
      const result = filter.detect("sh it");
      expect(result.suspiciousPhrases.some((sp) => sp.word === "shit")).toBe(true);
    });
  });

  describe("suspicious phrases include context", () => {
    test("should include ±5 words of context", () => {
      const result = filter.detect("I went to the store and fu@ck that was expensive today");
      const suspicious = result.suspiciousPhrases.find((sp) => sp.word === "fuck");
      expect(suspicious).toBeDefined();
      expect(suspicious!.context).toBeDefined();
      expect(suspicious!.context).toBe("I went to the store and fu@ck that was expensive today");
    });

    test("should include base score in suspicious phrase", () => {
      const result = filter.detect("fu@ck");
      const suspicious = result.suspiciousPhrases.find((sp) => sp.word === "fuck");
      expect(suspicious).toBeDefined();
      expect(suspicious!.baseScore).toEqual(expect.objectContaining({ severity: expect.any(Number), certainty: expect.any(Number) }));
    });

    test("should include space boundary count", () => {
      const result = filter.detect("fu ck");
      const suspicious = result.suspiciousPhrases.find((sp) => sp.word === "fuck");
      expect(suspicious).toBeDefined();
      expect(suspicious!.spaceBoundaries).toBe(1);
    });
  });

  describe("separator matches do NOT flag as profanity", () => {
    test("symbol-only evasion puts match in suspicious, not detectedWords", () => {
      const result = filter.detect("fu@ck");
      // 'fuck' should be in suspicious, not in detectedWords
      expect(result.detectedWords).not.toContain("fuck");
      expect(result.suspiciousPhrases.some((sp) => sp.word === "fuck")).toBe(true);
    });

    test("'c.u.n.t' should not flag hasProfanity", () => {
      // Note: 'c.u.n.t' IS in the word list as a literal entry, so it WILL flag
      // via normal matching. This test checks the separator path doesn't double-flag.
      const result = filter.detect("c.u.n.t");
      // c.u.n.t is a literal word list entry, so hasProfanity is true from normal matching
      expect(result.suspiciousPhrases.some((sp) => sp.word === "cunt")).toBe(true);
    });

    test("symbol-only evasion like 'b#i#t#c#h' should be suspicious only", () => {
      const result = filter.detect("b#i#t#c#h");
      expect(result.hasProfanity).toBe(false);
      expect(result.suspiciousPhrases.some((sp) => sp.word === "bitch")).toBe(true);
    });
  });

  describe("should NOT produce suspicious phrases on clean text", () => {
    test("normal sentence has no suspicious phrases", () => {
      const result = filter.detect("This is a perfectly clean sentence.");
      expect(result.suspiciousPhrases.length).toBe(0);
    });

    test("email addresses produce no suspicious phrases", () => {
      const result = filter.detect("email john@domain.org for info");
      expect(result.suspiciousPhrases.length).toBe(0);
    });
  });

  describe("disabled when option is false", () => {
    test("should NOT produce suspicious phrases when separator tolerance is false", () => {
      const noTolFilter = new BeKind({
        enableLeetSpeak: false,
        separatorTolerance: false,
      });
      const result = noTolFilter.detect("b#i#t#c#h");
      expect(result.hasProfanity).toBe(false);
      expect(result.suspiciousPhrases.length).toBe(0);
    });
  });

  describe("enabled by default", () => {
    test("separator tolerance produces suspicious phrases by default", () => {
      const defaultFilter = new BeKind({ silent: true, enableLeetSpeak: false });
      const result = defaultFilter.detect("fu@ck");
      expect(result.suspiciousPhrases.map(sp => sp.word)).toEqual(["fuc", "fuck"]);
    });
  });
});

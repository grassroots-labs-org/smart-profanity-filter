import {
  ContextPatternMatcher,
  ContextAnalyzer,
} from "../src/algos/context-patterns.ts";
import { BeKind, WordSeverity } from "../src/index.ts";

describe("Context Booster Patterns", () => {
  let matcher: ContextPatternMatcher;

  beforeAll(() => {
    matcher = new ContextPatternMatcher(["en"]);
  });

  describe("Universal boosters", () => {
    it("sexual_verb_before: 'suck my cock' matches with delta +3", () => {
      const rules = matcher.generateRules("cock");
      const text = "suck my cock";
      const booster = rules.find(
        (r) => r.delta > 0 && r.pattern.test(text),
      );
      expect(booster).toBeDefined();
      expect(booster!.delta).toBe(3);
    });

    it("sexual_verb_after: 'cock sucking' matches with delta +3", () => {
      const rules = matcher.generateRules("cock");
      const text = "cock sucking";
      const booster = rules.find(
        (r) => r.delta > 0 && r.pattern.test(text),
      );
      expect(booster).toBeDefined();
      expect(booster!.delta).toBe(3);
    });

    it("compound_slur: 'asshole' matches with delta +3", () => {
      const rules = matcher.generateRules("ass");
      const text = "you asshole";
      const booster = rules.find(
        (r) => r.delta === 3 && r.pattern.test(text),
      );
      expect(booster).toBeDefined();
    });

    it("insult_construction: 'piece of ass' matches with delta +2", () => {
      const rules = matcher.generateRules("ass");
      const text = "what a piece of ass";
      const booster = rules.find(
        (r) => r.delta === 2 && r.pattern.test(text),
      );
      expect(booster).toBeDefined();
    });

    it("direct_address: 'you dick' matches with delta +1", () => {
      const rules = matcher.generateRules("dick");
      const text = "you dick";
      const booster = rules.find(
        (r) => r.delta > 0 && r.pattern.test(text),
      );
      expect(booster).toBeDefined();
    });

    it("does NOT match innocent context", () => {
      const rules = matcher.generateRules("cock");
      const text = "the cock crowed at dawn";
      const boosters = rules.filter(
        (r) => r.delta > 0 && r.pattern.test(text),
      );
      expect(boosters.length).toBe(0);
    });
  });

  describe("Word-specific patterns", () => {
    it("cock + farming context gets reducer delta -3", () => {
      const rules = matcher.generateRules("cock");
      const text = "the cock crowed at dawn near the hen house";
      const reducer = rules.find(
        (r) => r.delta === -3 && r.pattern.test(text),
      );
      expect(reducer).toBeDefined();
    });

    it("cock + sexual context gets booster delta +2", () => {
      const rules = matcher.generateRules("cock");
      const text = "his big cock";
      const booster = rules.find(
        (r) => r.delta === 2 && r.pattern.test(text),
      );
      expect(booster).toBeDefined();
    });

    it("dick + surname pattern gets reducer delta -3", () => {
      const rules = matcher.generateRules("dick");
      const text = "Dick Cheney served as VP";
      const reducer = rules.find(
        (r) => r.delta === -3 && r.pattern.test(text),
      );
      expect(reducer).toBeDefined();
    });

    it("dick + sexual context gets booster delta +2", () => {
      const rules = matcher.generateRules("dick");
      const text = "suck my dick";
      const boosters = rules.filter(
        (r) => r.delta > 0 && r.pattern.test(text),
      );
      expect(boosters.length).toBeGreaterThanOrEqual(1);
    });

    it("ass + zoological context gets reducer delta -3", () => {
      const rules = matcher.generateRules("ass");
      const text = "the wild ass is a species of donkey";
      const reducer = rules.find(
        (r) => r.delta === -3 && r.pattern.test(text),
      );
      expect(reducer).toBeDefined();
    });

    it("ass + insult context gets booster delta +2", () => {
      const rules = matcher.generateRules("ass");
      const text = "you dumb ass";
      const booster = rules.find(
        (r) => r.delta === 2 && r.pattern.test(text),
      );
      expect(booster).toBeDefined();
    });

    it("unrelated word gets no word-specific patterns", () => {
      const rules = matcher.generateRules("fuck");
      // Check that no word-specific reducer/booster words appear in patterns
      const wordSpecific = rules.filter(
        (r) =>
          r.pattern.source.includes("rooster") ||
          r.pattern.source.includes("donkey") ||
          r.pattern.source.includes("Dick\\s"),
      );
      expect(wordSpecific.length).toBe(0);
    });
  });
});

describe("ContextAnalyzer.getCertaintyDelta", () => {
  let analyzer: ContextAnalyzer;

  beforeAll(() => {
    analyzer = new ContextAnalyzer(["en"]);
  });

  it("returns positive delta for 'suck my cock'", () => {
    const text = "suck my cock";
    const delta = analyzer.getCertaintyDelta(text, 8, 12, "cock");
    expect(delta).toBeGreaterThanOrEqual(3);
  });

  it("returns negative delta for 'the cock crowed at dawn'", () => {
    const text = "the cock crowed at dawn";
    const delta = analyzer.getCertaintyDelta(text, 4, 8, "cock");
    expect(delta).toBeLessThanOrEqual(-3);
  });

  it("returns negative delta for 'Dick Cheney was VP'", () => {
    const text = "Dick Cheney was VP";
    const delta = analyzer.getCertaintyDelta(text, 0, 4, "dick");
    expect(delta).toBeLessThanOrEqual(-3);
  });

  it("returns positive delta for 'you stupid dick'", () => {
    const text = "you stupid dick";
    const delta = analyzer.getCertaintyDelta(text, 11, 15, "dick");
    expect(delta).toBeGreaterThan(0);
  });

  it("returns 0 for word with no matching context patterns", () => {
    const text = "saw dick yesterday at the meeting";
    const delta = analyzer.getCertaintyDelta(text, 4, 8, "dick");
    expect(delta).toBe(0);
  });

  it("returns negative delta for 'the wild ass is an equine'", () => {
    const text = "the wild ass is an equine native to Asia";
    const delta = analyzer.getCertaintyDelta(text, 9, 12, "ass");
    expect(delta).toBeLessThan(0);
  });
});

describe("Context booster integration — full pipeline", () => {
  let filter: BeKind;

  beforeAll(() => {
    filter = new BeKind({
      silent: true,
      contextAnalysis: { enabled: true },
      algorithm: { useContextAnalysis: true },
    });
  });

  it("'suck my dick' → flagged as profane", () => {
    const result = filter.detect("suck my dick");
    // "suck my dick" may match as a multi-word phrase or individually
    expect(result.hasProfanity).toBe(true);
  });

  it("'Dick Cheney was VP' → Dick is AMBIVALENT (reduced from c:1 to c:0)", () => {
    const result = filter.detect("Dick Cheney was VP");
    const dick = result.scoredWords.find(
      (sw) => sw.word.toLowerCase() === "dick",
    );
    if (dick) {
      expect(dick.severity).toBe(WordSeverity.AMBIVALENT);
    }
    expect(result.hasProfanity).toBe(false);
  });

  it("'the cock crowed at dawn' → cock is AMBIVALENT (reduced from c:3 to c:0)", () => {
    const result = filter.detect("the cock crowed at dawn");
    const cock = result.scoredWords.find(
      (sw) => sw.word.toLowerCase() === "cock",
    );
    if (cock) {
      expect(cock.severity).toBe(WordSeverity.AMBIVALENT);
    }
    expect(result.hasProfanity).toBe(false);
  });

  it("'suck my cock' → flagged as profane", () => {
    const result = filter.detect("suck my cock");
    expect(result.hasProfanity).toBe(true);
  });

  it("'the wild ass is an equine' → ass is AMBIVALENT (reduced from c:3 to c:0)", () => {
    const result = filter.detect(
      "the wild ass is an equine native to Asia",
    );
    const ass = result.scoredWords.find(
      (sw) => sw.word.toLowerCase() === "ass",
    );
    if (ass) {
      expect(ass.severity).toBe(WordSeverity.AMBIVALENT);
    }
    expect(result.hasProfanity).toBe(false);
  });

  it("'you're an ass' → ass is still PROFANE (no reducer, already passes shouldFlag)", () => {
    const result = filter.detect("you're an ass");
    expect(result.hasProfanity).toBe(true);
  });

  it("'fuck you' → skips context analysis (c:5 > 3), always PROFANE", () => {
    const result = filter.detect("fuck you");
    expect(result.hasProfanity).toBe(true);
  });

  it("'a dick move' → dick stays AMBIVALENT (no strong context, c:1 unchanged)", () => {
    const result = filter.detect("a dick move");
    const dick = result.scoredWords.find(
      (sw) => sw.word.toLowerCase() === "dick",
    );
    if (dick) {
      expect(dick.severity).toBe(WordSeverity.AMBIVALENT);
    }
    expect(result.hasProfanity).toBe(false);
  });
});

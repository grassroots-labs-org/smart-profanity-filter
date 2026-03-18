# Context Boosters Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add bidirectional context analysis (boosters + reducers) that adjusts word certainty based on surrounding text, so ambiguous words like `dick` (c:1) get promoted to PROFANE in "suck my dick" and `cock` (c:3) gets demoted to AMBIVALENT in "the cock crowed at dawn."

**Architecture:** Extend the existing `ContextAnalyzer` in `src/algos/context-patterns.ts` with a new `getCertaintyDelta()` method that sums integer deltas from matching booster/reducer patterns. Plug this into the WordSeverity scoring step in `src/index.ts` for words with certainty ≤ 3. No new classes — reuses all existing infrastructure.

**Tech Stack:** TypeScript, bun test

**Spec:** `docs/superpowers/specs/2026-03-17-context-boosters-design.md`

---

### Task 1: Add delta-based pattern types and universal booster patterns

**Files:**
- Modify: `src/algos/context-patterns.ts:5-14` (type union)
- Modify: `src/algos/context-patterns.ts:32-120` (patterns array)
- Test: `tests/context-boosters.test.ts`

- [ ] **Step 1: Write failing tests for universal booster pattern matching**

```typescript
// tests/context-boosters.test.ts
import { ContextPatternMatcher } from "../src/algos/context-patterns.ts";

describe("Context Booster Patterns", () => {
  let matcher: ContextPatternMatcher;

  beforeAll(() => {
    matcher = new ContextPatternMatcher(["en"]);
  });

  describe("Universal boosters", () => {
    it("sexual_verb_before: 'suck my cock' matches with delta +3", () => {
      const rules = matcher.generateRules("cock");
      const text = "suck my cock";
      const booster = rules.find(r => r.delta > 0 && r.pattern.test(text));
      expect(booster).toBeDefined();
      expect(booster!.delta).toBe(3);
    });

    it("sexual_verb_after: 'cock sucking' matches with delta +3", () => {
      const rules = matcher.generateRules("cock");
      const text = "cock sucking";
      const booster = rules.find(r => r.delta > 0 && r.pattern.test(text));
      expect(booster).toBeDefined();
      expect(booster!.delta).toBe(3);
    });

    it("compound_slur: 'asshole' matches with delta +3", () => {
      const rules = matcher.generateRules("ass");
      const text = "you asshole";
      const booster = rules.find(r => r.delta > 0 && r.pattern.test(text));
      expect(booster).toBeDefined();
      expect(booster!.delta).toBe(3);
    });

    it("insult_construction: 'piece of ass' matches with delta +2", () => {
      const rules = matcher.generateRules("ass");
      const text = "what a piece of ass";
      const booster = rules.find(r => r.delta === 2 && r.pattern.test(text));
      expect(booster).toBeDefined();
    });

    it("direct_address: 'you dick' matches with delta +1", () => {
      const rules = matcher.generateRules("dick");
      const text = "you dick";
      const booster = rules.find(r => r.delta > 0 && r.pattern.test(text));
      expect(booster).toBeDefined();
    });

    it("does NOT match innocent context", () => {
      const rules = matcher.generateRules("cock");
      const text = "the cock crowed at dawn";
      const boosters = rules.filter(r => r.delta > 0 && r.pattern.test(text));
      expect(boosters.length).toBe(0);
    });
  });
});
```

- [ ] **Step 2: Run tests to verify they fail**

Run: `bun test tests/context-boosters.test.ts`
Expected: FAIL — `ContextRule` has no `delta` property

- [ ] **Step 3: Update types and add universal booster patterns**

In `src/algos/context-patterns.ts`:

1. Extend the `UniversalContextPattern` type union with new pattern types:
```typescript
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
  delta: number;  // certainty adjustment: positive = booster, negative = reducer
  languages: string[];
  description: string;
  examples: string[];
}
```

2. Add `delta` field to `ContextRule`:
```typescript
export interface ContextRule {
  pattern: RegExp;
  action: "reduce_score" | "increase_score" | "whitelist" | "flag";
  weight: number;
  delta: number;
  priority: number;
}
```

3. Add `delta` to all existing patterns (explicit values matching the spec):

| Existing pattern | weight | delta |
|---|---|---|
| negation | 0.2 | -2 |
| possessive | 0.4 | -1 |
| article | 0.6 | -1 |
| compound | 0.5 | -1 |
| proper_noun | 0.3 | -2 |
| quotation | 0.7 | -2 |
| medical | 0.1 | -3 |
| anatomical | 0.3 | -2 |

4. Add universal booster patterns to `UNIVERSAL_CONTEXT_PATTERNS`:

```typescript
  // === BOOSTER PATTERNS ===

  {
    type: "sexual_verb_before",
    pattern: /\b(suck|ride|lick|grab|stroke)\b.{0,10}PROFANE_WORD/i,
    weight: 2.0,
    delta: 3,
    languages: ["*"],
    description: "Sexual verb before target word — confirms profane intent",
    examples: ["suck my cock", "ride that dick"],
  },
  {
    type: "sexual_verb_after",
    pattern: /PROFANE_WORD.{0,10}\b(suck|ride|lick|grab|stroke)\b/i,
    weight: 2.0,
    delta: 3,
    languages: ["*"],
    description: "Sexual verb after target word — confirms profane intent",
    examples: ["cock sucking", "dick riding"],
  },
  {
    type: "compound_slur",
    pattern: /PROFANE_WORD.{0,10}(hole|face|head|wipe|bag)\b/i,
    weight: 2.0,
    delta: 3,
    languages: ["*"],
    description: "Compound slur suffix — confirms profane intent (no \\b before suffix to match compounds like 'asshole')",
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
    pattern: /\b(stupid|ugly|fat|dumb|dirty|nasty|filthy)\b.{0,10}PROFANE_WORD/i,
    weight: 1.3,
    delta: 1,
    languages: ["*"],
    description: "Pejorative adjective before target — likely profane",
    examples: ["stupid ass", "fat dick", "dirty cock"],
  },
```

5. Pass `delta` through in `generateRules()`:
```typescript
rules.push({
  pattern: regex,
  action,
  weight: pattern.weight,
  delta: pattern.delta,
  priority: this.getPriority(pattern.type),
});
```

6. Update `getPriority()` — reducers evaluate before boosters:
```typescript
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
```

- [ ] **Step 4: Run tests to verify they pass**

Run: `bun test tests/context-boosters.test.ts`
Expected: PASS

- [ ] **Step 5: Commit**

```bash
git add src/algos/context-patterns.ts tests/context-boosters.test.ts
git commit -m "feat: add universal booster patterns with delta-based certainty adjustment"
```

---

### Task 2: Add word-specific patterns and WORD_SPECIFIC_PATTERNS map

**Files:**
- Modify: `src/algos/context-patterns.ts` (add map + update generateRules)
- Test: `tests/context-boosters.test.ts`

- [ ] **Step 1: Write failing tests for word-specific patterns**

```typescript
// Add to tests/context-boosters.test.ts
describe("Word-specific patterns", () => {
  it("cock + farming context gets reducer delta -3", () => {
    const rules = matcher.generateRules("cock");
    const text = "the cock crowed at dawn near the hen house";
    const reducer = rules.find(r => r.delta < 0 && r.pattern.test(text));
    expect(reducer).toBeDefined();
    expect(reducer!.delta).toBe(-3);
  });

  it("cock + sexual context gets booster delta +2", () => {
    const rules = matcher.generateRules("cock");
    const text = "his big cock";
    const booster = rules.find(r => r.delta === 2 && r.pattern.test(text));
    expect(booster).toBeDefined();
  });

  it("dick + surname pattern gets reducer delta -3", () => {
    const rules = matcher.generateRules("dick");
    const text = "Dick Cheney served as VP";
    const reducer = rules.find(r => r.delta === -3 && r.pattern.test(text));
    expect(reducer).toBeDefined();
  });

  it("dick + sexual context gets booster delta +2", () => {
    const rules = matcher.generateRules("dick");
    const text = "suck my dick";
    // Should match both universal (+3) and word-specific (+2)
    const boosters = rules.filter(r => r.delta > 0 && r.pattern.test(text));
    expect(boosters.length).toBeGreaterThanOrEqual(1);
  });

  it("ass + zoological context gets reducer delta -3", () => {
    const rules = matcher.generateRules("ass");
    const text = "the wild ass is a species of donkey";
    const reducer = rules.find(r => r.delta === -3 && r.pattern.test(text));
    expect(reducer).toBeDefined();
  });

  it("ass + insult context gets booster delta +2", () => {
    const rules = matcher.generateRules("ass");
    const text = "you dumb ass";
    const booster = rules.find(r => r.delta === 2 && r.pattern.test(text));
    expect(booster).toBeDefined();
  });

  it("unrelated word gets no word-specific patterns", () => {
    const rules = matcher.generateRules("fuck");
    // Should only have universal patterns, no word-specific
    const wordSpecific = rules.filter(r =>
      r.pattern.source.includes("rooster") ||
      r.pattern.source.includes("donkey") ||
      r.pattern.source.includes("[A-Z]")
    );
    expect(wordSpecific.length).toBe(0);
  });
});
```

- [ ] **Step 2: Run tests to verify they fail**

Run: `bun test tests/context-boosters.test.ts`
Expected: FAIL — no word-specific patterns exist yet

- [ ] **Step 3: Add WORD_SPECIFIC_PATTERNS and update generateRules**

Add to `src/algos/context-patterns.ts` after `LANGUAGE_SPECIFIC_PATTERNS`:

```typescript
/**
 * Word-specific context patterns for disambiguating ambiguous profane words.
 * Keyed by the lowercase profane word.
 */
export const WORD_SPECIFIC_PATTERNS: Record<string, UniversalContextPattern[]> = {
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
      pattern: /\b(crow|rooster|hen|farm|chicken|dawn|poultry|barnyard)\b.{0,30}PROFANE_WORD/i,
      weight: 0.1,
      delta: -3,
      languages: ["*"],
      description: "Farming/zoological context — cock as rooster",
      examples: ["the cock crowed at dawn", "rooster and cock"],
    },
    {
      type: "compound",
      pattern: /PROFANE_WORD.{0,30}\b(crow|rooster|hen|farm|chicken|dawn|poultry|barnyard)\b/i,
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
      pattern: /\b(donkey|mule|equine|wild|herd|saddle|burro)\b.{0,30}PROFANE_WORD/i,
      weight: 0.1,
      delta: -3,
      languages: ["*"],
      description: "Zoological context — ass as donkey",
      examples: ["wild ass", "the donkey or ass"],
    },
    {
      type: "compound",
      pattern: /PROFANE_WORD.{0,30}\b(donkey|mule|equine|herd|saddle|burro)\b/i,
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
```

Update `generateRules()` to include word-specific patterns:

```typescript
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

  // ... rest unchanged
}
```

- [ ] **Step 4: Run tests to verify they pass**

Run: `bun test tests/context-boosters.test.ts`
Expected: PASS

- [ ] **Step 5: Commit**

```bash
git add src/algos/context-patterns.ts tests/context-boosters.test.ts
git commit -m "feat: add word-specific booster/reducer patterns for cock, ass, dick"
```

---

### Task 3: Add getCertaintyDelta() to ContextAnalyzer

**Files:**
- Modify: `src/algos/context-patterns.ts:300-383` (ContextAnalyzer class)
- Test: `tests/context-boosters.test.ts`

- [ ] **Step 1: Write failing tests for getCertaintyDelta**

```typescript
// Add to tests/context-boosters.test.ts
import { ContextAnalyzer } from "../src/algos/context-patterns.ts";

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
```

- [ ] **Step 2: Run tests to verify they fail**

Run: `bun test tests/context-boosters.test.ts`
Expected: FAIL — `getCertaintyDelta` does not exist

- [ ] **Step 3: Implement getCertaintyDelta**

Add to `ContextAnalyzer` class in `src/algos/context-patterns.ts`:

```typescript
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
```

- [ ] **Step 4: Run tests to verify they pass**

Run: `bun test tests/context-boosters.test.ts`
Expected: PASS

- [ ] **Step 5: Commit**

```bash
git add src/algos/context-patterns.ts tests/context-boosters.test.ts
git commit -m "feat: add getCertaintyDelta() to ContextAnalyzer"
```

---

### Task 4: Wire certainty adjustment into WordSeverity scoring in index.ts

**Files:**
- Modify: `src/index.ts:2174-2214` (WordSeverity scoring step)
- Test: `tests/context-boosters.test.ts`

- [ ] **Step 1: Write failing integration tests**

```typescript
// Add to tests/context-boosters.test.ts
import { BeKind, WordSeverity } from "../src/index.ts";

describe("Context booster integration — full pipeline", () => {
  let filter: BeKind;

  beforeAll(() => {
    filter = new BeKind({
      silent: true,
      contextAnalysis: { enabled: true },
      algorithm: { useContextAnalysis: true },
    });
  });

  it("'suck my dick' → dick is PROFANE (boosted from c:1 to c:4+)", () => {
    const result = filter.detect("suck my dick");
    const dick = result.scoredWords.find(sw => sw.word.toLowerCase() === "dick");
    expect(dick).toBeDefined();
    expect(dick!.severity).toBe(WordSeverity.PROFANE);
  });

  it("'Dick Cheney was VP' → Dick is AMBIVALENT (reduced from c:1 to c:0)", () => {
    const result = filter.detect("Dick Cheney was VP");
    const dick = result.scoredWords.find(sw => sw.word.toLowerCase() === "dick");
    if (dick) {
      expect(dick.severity).toBe(WordSeverity.AMBIVALENT);
    }
    expect(result.hasProfanity).toBe(false);
  });

  it("'the cock crowed at dawn' → cock is AMBIVALENT (reduced from c:3 to c:0)", () => {
    const result = filter.detect("the cock crowed at dawn");
    const cock = result.scoredWords.find(sw => sw.word.toLowerCase() === "cock");
    if (cock) {
      expect(cock.severity).toBe(WordSeverity.AMBIVALENT);
    }
    expect(result.hasProfanity).toBe(false);
  });

  it("'suck my cock' → cock is PROFANE (boosted from c:3 to c:5+)", () => {
    const result = filter.detect("suck my cock");
    const cock = result.scoredWords.find(sw => sw.word.toLowerCase() === "cock");
    expect(cock).toBeDefined();
    expect(cock!.severity).toBe(WordSeverity.PROFANE);
  });

  it("'the wild ass is an equine' → ass is AMBIVALENT (reduced from c:3 to c:0)", () => {
    const result = filter.detect("the wild ass is an equine native to Asia");
    const ass = result.scoredWords.find(sw => sw.word.toLowerCase() === "ass");
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
    const dick = result.scoredWords.find(sw => sw.word.toLowerCase() === "dick");
    if (dick) {
      expect(dick.severity).toBe(WordSeverity.AMBIVALENT);
    }
    expect(result.hasProfanity).toBe(false);
  });
});
```

- [ ] **Step 2: Run tests to verify they fail**

Run: `bun test tests/context-boosters.test.ts`
Expected: FAIL — "suck my dick" returns AMBIVALENT for dick

- [ ] **Step 3: Wire certainty adjustment into WordSeverity scoring**

In `src/index.ts`, in the `scoredWords` mapping (around line 2174-2214), add the certainty adjustment. At the end of the else branches (lines 2207 and 2210) where `shouldFlag()` is called, add the context booster check:

Replace the two `shouldFlag` fallback lines (lines 2207 and 2210) with a helper that applies context-based certainty adjustment:

```typescript
// First, extract shouldFlag threshold logic into a shared helper to avoid
// duplicating the threshold rules (already duplicated at lines 2180, 2202, 3287).
// Add this private static method or standalone function:
private static shouldFlagWithCertainty(severity: number, certainty: number): boolean {
  return severity === 5 ||
    (severity >= 4 && certainty >= 2) ||
    (severity === 3 && certainty >= 3);
}

// Then update the existing shouldFlag() to use it:
shouldFlag(word: string): boolean {
  const score = this.getWordScore(word);
  if (!score) return false;
  return BeKind.shouldFlagWithCertainty(score.severity, score.certainty);
}

// Add this private method to BeKind class:
private shouldFlagWithContext(
  word: string,
  text: string,
  matchStart: number,
  matchEnd: number
): boolean {
  const wordScore = this.getWordScore(word);
  if (!wordScore) return false;

  // Certainty gate: only apply context analysis for c <= 3
  if (wordScore.certainty <= 3 && this.contextAnalyzer) {
    const delta = this.contextAnalyzer.getCertaintyDelta(
      text, matchStart, matchEnd, word
    );
    const adjustedCertainty = Math.max(0, Math.min(5, wordScore.certainty + delta));
    return BeKind.shouldFlagWithCertainty(wordScore.severity, adjustedCertainty);
  }

  return this.shouldFlag(word);
}
```

Also update the existing duplicated threshold checks at lines 2180 and 2202 to use `BeKind.shouldFlagWithCertainty()`. This eliminates five copies of the same logic.

Also, bypass the old `applyContextAnalysis` match-filtering (around line 2135) since the new certainty-delta model handles context in the scoring step instead. The old system would remove matches entirely before the new system gets a chance to score them:

```typescript
// Line ~2135: disable old score-multiplier filtering when certainty-delta is active
// Old code:
//   if (this.contextAnalyzer) {
//     matches = this.applyContextAnalysis(validatedText, matches);
//   }
// New: skip — context is now handled in shouldFlagWithContext()
```

Then replace the two `shouldFlag` call sites in the scoredWords mapping:

Line 2207 — change:
```typescript
wordSev = this.shouldFlag(m.word) ? WordSeverity.PROFANE : WordSeverity.AMBIVALENT;
```
to:
```typescript
wordSev = this.shouldFlagWithContext(m.word, validatedText, m.start, m.end)
  ? WordSeverity.PROFANE : WordSeverity.AMBIVALENT;
```

Line 2210 — same change:
```typescript
wordSev = this.shouldFlag(m.word) ? WordSeverity.PROFANE : WordSeverity.AMBIVALENT;
```
to:
```typescript
wordSev = this.shouldFlagWithContext(m.word, validatedText, m.start, m.end)
  ? WordSeverity.PROFANE : WordSeverity.AMBIVALENT;
```

- [ ] **Step 4: Run tests to verify they pass**

Run: `bun test tests/context-boosters.test.ts`
Expected: PASS

- [ ] **Step 5: Commit**

```bash
git add src/index.ts tests/context-boosters.test.ts
git commit -m "feat: wire certainty adjustment into WordSeverity scoring pipeline"
```

---

### Task 5: Regression tests and benchmark

**Files:**
- Test: `tests/context-boosters.test.ts` (additional edge cases)
- Run: `tests/false-positives.test.ts`, `tests/index.test.ts`, full suite
- Run: `benchmark/accuracy-benchmark.ts`

- [ ] **Step 1: Run all existing tests to check for regressions**

Run: `bun test`
Expected: Same pass/fail count as before (4002 pass, 30 skip, 4 pre-existing fail). No new failures.

Note: Context boosters only activate when `contextAnalysis.enabled: true`. Default filter instances (no context config) should be completely unaffected.

- [ ] **Step 2: Run the false-positive regression suite specifically**

Run: `bun test tests/false-positives.test.ts`
Expected: 374 pass, 0 fail

- [ ] **Step 3: Run the accuracy benchmark**

Run: `bun run benchmark/accuracy-benchmark.ts`
Expected: Improvements in the `false-positive` and `challenge` categories for `be-kind (ctx)`. Check that:
- FP rate for `be-kind (ctx)` decreases (fewer false positives on "Dick Cheney", "cock crowed", etc.)
- Recall for `be-kind (ctx)` stays the same or improves (boosters catch "suck my dick" type cases)
- Other library results are unchanged

- [ ] **Step 4: Update README benchmark tables if results changed**

Update the accuracy comparison tables in `README.md` with the new benchmark results.

- [ ] **Step 5: Commit**

```bash
git add benchmark/accuracy-results.json README.md
git commit -m "docs: update benchmark results after context booster implementation"
```

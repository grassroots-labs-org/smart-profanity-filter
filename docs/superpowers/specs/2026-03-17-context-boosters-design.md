# Context Boosters: Bidirectional Context Analysis for Ambiguous Words

**Date:** 2026-03-17
**Status:** Approved (v2 — revised after spec review)
**Scope:** `src/algos/context-patterns.ts`, `src/index.ts`

## Problem

be-kind has high recall (88% in sensitive mode) but suffers from false positives on ambiguous words — `cock` (rooster vs slur), `ass` (donkey vs insult), `dick` (name vs slur). The existing context analysis system only has **reducers** (patterns that decrease profanity score in innocent contexts) but no **boosters** (patterns that increase confidence when surrounding words confirm profane intent).

More fundamentally, words like `dick` (s:4, c:1) already **fail `shouldFlag()`** and are scored AMBIVALENT — they never reach PROFANE regardless of context. Boosters need to promote these words to PROFANE when context confirms profane usage.

## Key insight: boosters adjust certainty, not an abstract score

The `shouldFlag()` threshold is:
- s:5 → flag at any certainty
- s:4+ → flag at c:2+
- s:3 → flag at c:3+

A word like `dick` (s:4, c:1) fails because c:1 < 2. The booster's job is to **raise the effective certainty** when profane context is detected: "suck my dick" → c:1 bumped to c:3 → now passes shouldFlag() → PROFANE.

Conversely, reducers **lower the effective certainty** for words that currently pass: `cock` (s:4, c:3) in "the cock crowed at dawn" → c:3 dropped to c:1 → fails shouldFlag() → AMBIVALENT.

This model works naturally with the existing scoring pipeline — no new threshold math, no score clamping issues.

## Design

### Certainty gate

Context analysis only fires for words with **certainty ≤ 3**. High-certainty words (c > 3) like `fuck` (c:5), `shit` (c:5) skip context analysis entirely.

### Certainty adjustment model

Context patterns produce a **certainty delta** (integer) rather than a score multiplier:

| Delta | Meaning | Example |
|---|---|---|
| +3 | Strong boost — unambiguously profane | "suck my cock" |
| +2 | Moderate boost — likely profane | "you stupid dick" |
| +1 | Mild boost — probably profane | "piece of ass" |
| -1 | Mild reduce — possibly innocent | article before word |
| -2 | Moderate reduce — likely innocent | quoted/metalinguistic use |
| -3 | Strong reduce — unambiguously innocent | "cock crowed at dawn" |

The effective certainty is `clamp(baseCertainty + totalDelta, 0, 5)`. Then `shouldFlag()` runs on the adjusted certainty.

**Implementation:** In the WordSeverity scoring step (where PROFANE vs AMBIVALENT is assigned in `src/index.ts`), for words with c ≤ 3:

```
for each match with certainty <= 3:
  delta = contextAnalyzer.getCertaintyDelta(text, match)
  adjustedCertainty = clamp(baseCertainty + delta, 0, 5)
  use adjustedCertainty in shouldFlag() check
```

### Universal booster patterns

Fire for any flagged word with c ≤ 3 when profane-context words appear nearby.

| Type | Pattern | Delta | Description |
|---|---|---|---|
| sexual_verb_before | `(suck\|ride\|lick\|grab\|stroke) .{0,10} PROFANE_WORD` | +3 | Sexual verb before target |
| sexual_verb_after | `PROFANE_WORD .{0,10} (suck\|ride\|lick\|grab\|stroke)` | +3 | Sexual verb after target |
| compound_slur | `PROFANE_WORD .{0,10} (hole\|face\|head\|wipe\|bag)` | +3 | Compound slur suffix |
| insult_construction | `(piece of\|load of\|full of) .{0,5} PROFANE_WORD` | +2 | Insult construction |
| direct_address | `(you\|your\|u\|ur) .{0,10} PROFANE_WORD` | +1 | Direct address — likely insult |
| pejorative_adj | `(stupid\|ugly\|fat\|dumb\|dirty\|nasty\|filthy) .{0,10} PROFANE_WORD` | +1 | Pejorative adjective |

### Universal reducer patterns (existing, updated to delta model)

| Type | Pattern | Delta | Description |
|---|---|---|---|
| medical | `(medical\|doctor\|hospital\|patient\|diagnosis) .{0,50} PROFANE_WORD` | -3 | Medical context |
| anatomical | `(body\|muscle\|bone\|tissue\|organ) .{0,30} PROFANE_WORD` | -2 | Anatomical context |
| negation | `(not\|don't\|won't\|never) .{0,30} PROFANE_WORD` | -2 | Negation |
| quotation | `["'«»] .* PROFANE_WORD .* ["'«»]` | -2 | Quoted text |
| proper_noun | `[A-Z][a-z]+ PROFANE_WORD` | -2 | Proper noun prefix |
| article | `(the\|a\|an) PROFANE_WORD` | -1 | Article before word |
| possessive | `\w+['s] PROFANE_WORD` | -1 | Possessive construction |
| compound_innocent | `(smart\|silly\|cute\|funny) .{0,5} PROFANE_WORD` | -1 | Innocent compound |

### Word-specific patterns

New `WORD_SPECIFIC_PATTERNS: Record<string, ContextPattern[]>` in `context-patterns.ts`, keyed by the profane word. `ContextPatternMatcher` checks this map and appends word-specific patterns when generating rules.

#### cock
| Context words | Delta | Rationale |
|---|---|---|
| `suck`, `big`, `hard`, `small`, `my`, `his` | +2 | Sexual context |
| `crow`, `rooster`, `hen`, `farm`, `chicken`, `dawn` | -3 | Farming/zoological — innocent |

#### ass
| Context words | Delta | Rationale |
|---|---|---|
| `fat`, `kick`, `my`, `your`, `dumb`, `lazy` | +2 | Insult context — confirms profane intent |
| `donkey`, `mule`, `equine`, `wild`, `herd`, `saddle` | -3 | Zoological — innocent |

Note: `ass` (s:3, c:3) already passes `shouldFlag()`, so boosters don't change the flag decision. However, a higher adjusted certainty signals stronger confidence in profane intent, which is useful for downstream consumers (e.g. LLM escalation — an unboosted `ass` at c:3 is worth a second opinion, a boosted one at c:5 is clearly profane).

#### dick
| Context words | Delta | Rationale |
|---|---|---|
| `suck`, `big`, `small`, `my`, `his` | +2 | Sexual context |
| Followed by capitalized word: `/\bdick\s+[A-Z][a-z]+/` | -3 | Proper name — "Dick Cheney" |

### Where this plugs into the pipeline

The certainty adjustment happens in the **WordSeverity scoring step** in `src/index.ts` (around line 2222), where `shouldFlag()` determines PROFANE vs AMBIVALENT. Currently:

```typescript
wordSev = this.shouldFlag(m.word) ? WordSeverity.PROFANE : WordSeverity.AMBIVALENT;
```

With context boosters:

```typescript
const wordScore = this.getWordScore(m.word);
if (wordScore && wordScore.certainty <= 3 && this.contextAnalyzer) {
  const delta = this.contextAnalyzer.getCertaintyDelta(text, m.start, m.end, m.word);
  const adjustedCertainty = Math.max(0, Math.min(5, wordScore.certainty + delta));
  const adjustedShouldFlag = wordScore.severity === 5 ||
    (wordScore.severity >= 4 && adjustedCertainty >= 2) ||
    (wordScore.severity === 3 && adjustedCertainty >= 3);
  wordSev = adjustedShouldFlag ? WordSeverity.PROFANE : WordSeverity.AMBIVALENT;
} else {
  wordSev = this.shouldFlag(m.word) ? WordSeverity.PROFANE : WordSeverity.AMBIVALENT;
}
```

### Context analysis remains opt-in

- Requires `contextAnalysis: { enabled: true }` (no change to default behavior)
- Without context analysis, `shouldFlag()` uses raw dictionary certainty as before
- The existing `applyContextAnalysis()` match-filtering can be deprecated or kept as a secondary layer

### Files changed

1. **`src/algos/context-patterns.ts`**
   - Add `ContextPattern` type with explicit `delta: number` field
   - Add universal booster patterns to `UNIVERSAL_CONTEXT_PATTERNS`
   - Add `WORD_SPECIFIC_PATTERNS: Record<string, ContextPattern[]>` map
   - Add `getCertaintyDelta()` method to `ContextAnalyzer` — sums deltas from all matching patterns
   - Update `UniversalContextPattern` type union with new pattern types
   - Update `getPriority()` with entries for new pattern types (reducers before boosters)

2. **`src/index.ts`**
   - Modify WordSeverity scoring step to use adjusted certainty when contextAnalyzer is enabled and word certainty ≤ 3

### Testing strategy

1. **Unit tests for patterns** — verify each booster/reducer pattern matches expected text
2. **Integration tests** — verify the full pipeline:
   - `dick` (s:4, c:1): "suck my dick" → c:1+3 = c:4 → passes shouldFlag → PROFANE
   - `dick` (s:4, c:1): "Dick Cheney was VP" → c:1-3 = c:0 → fails shouldFlag → AMBIVALENT
   - `dick` (s:4, c:1): "a dick move" → no strong context → c:1 → AMBIVALENT (borderline, acceptable)
   - `cock` (s:4, c:3): "the cock crowed" → c:3-3 = c:0 → AMBIVALENT
   - `cock` (s:4, c:3): "suck my cock" → c:3+3 = c:5 (clamped) → PROFANE
   - `ass` (s:3, c:3): "the wild ass is an equine" → c:3-3 = c:0 → AMBIVALENT
   - `ass` (s:3, c:3): "you're an ass" → no change → c:3 → PROFANE (already passes)
   - `fuck` (s:5, c:5): any context → skips analysis → always PROFANE
3. **Benchmark re-run** — measure impact on FP rate and recall, especially false-positive and challenge categories
4. **Regression** — all existing false-positive tests must still pass

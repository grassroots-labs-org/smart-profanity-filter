# Accuracy Benchmark Design

**Date:** 2026-03-17
**Status:** Approved

---

## Goal

Build a standalone accuracy benchmark that complements the existing speed benchmark (`benchmark/profanity-benchmark.ts`) and competitor speed comparison (`benchmark/competitor-benchmark.ts`). The accuracy benchmark runs a curated labeled dataset against all four libraries and reports TP rate, FP rate, and F1 per category per library.

---

## Labeled Dataset

### Structure

Each test case is a typed object:

```ts
enum Category {
  SINGLE_LANG    = 'single-language',
  MULTI_LANG     = 'multi-language',
  FALSE_POSITIVE = 'false-positive',
  ROMANIZATION   = 'romanization',
  SEMANTIC       = 'semantic-context',
}

enum Language {
  ENGLISH    = 'english',
  FRENCH     = 'french',
  GERMAN     = 'german',
  SPANISH    = 'spanish',
  HINDI      = 'hindi',
  HINGLISH   = 'hinglish',
  BENGALI    = 'bengali',
  TAMIL      = 'tamil',
  TELUGU     = 'telugu',
  JAPANESE   = 'japanese',
  MIXED      = 'mixed',
}

interface AccuracyCase {
  text: string;
  expected: boolean;       // true = profane, false = clean
  category: Category;
  language?: Language;
  note?: string;           // why this case is interesting/tricky
}
```

### Categories & Case Counts

| Category | Profane | Clean | Total | Notes |
|---|---|---|---|---|
| Single-language detection | ~40 | ~15 | ~55 | English, French, German, Spanish, Hindi (Devanagari) |
| Multi-language detection | ~20 | ~5 | ~25 | Mixed-language sentences, code-switching |
| False positives / innocent words | 0 | ~40 | ~40 | Scunthorpe words, foreign false-friends |
| Romanization | ~20 | ~10 | ~30 | Hinglish, Bengali, Tamil, Telugu, Japanese (Romaji) |
| Semantic context | ~10 | ~15 | ~25 | Negation, educational/medical context, sarcasm framing |
| **Total** | **~90** | **~85** | **~175** | |

### Category Details

**Single-language detection** — one language per case:
- English: direct profanity, multi-word phrases, severity variants
- French, German, Spanish: native-script profanity
- Hindi (Devanagari): native-script profanity
- Clean cases included so FP rate is measurable for this category

**Multi-language detection** — sentences that mix two or more languages:
- English + Hindi, English + French, English + Spanish
- Code-switching (mid-sentence language switch)
- A small set of clean mixed-language sentences to enable FP rate measurement

**False positives / innocent words** — clean inputs only (all `expected: false`):
- Scunthorpe-class words: "assassin", "classic", "scunthorpe", "cocktail", "kumquat"
- Medical/anatomical terms used in context
- Foreign false-friends in English text: "slut" (Swedish: end), "fart" (Norwegian: speed), "merde" discussed in English
- Proper nouns and place names containing embedded words
- F1 is reported as `—` for this category because there are no profane cases (precision and recall are undefined with zero positive ground-truth)

**Semantic context-aware detection** — cases where surface-level word presence is misleading:
- Negation: "this is not fucking bad at all" (contains profanity but negated intent)
- Educational/quotation context: "the word 'shit' is considered offensive"
- Medical/clinical use: "anal fissure treatment", "rectal examination"
- Empathetic/supportive framing: "fuck cancer", "damn this disease"
- False context: phrases that look innocent but contain embedded profanity in genuine use
- `expected: false` cases test whether the library over-fires on negation/education context
- `expected: true` cases test whether the library still catches clear profanity in framed context
- Only be-kind and glin (enhanced) are scored; other libraries have no context-awareness support

**Romanization** — Latin-script transliteration of non-Latin profanity:
- Hinglish: Hindi profanity in Roman characters
- Bengali: Bengali profanity in Roman characters
- Tamil and Telugu: key profanity in Roman transliteration
- Japanese: key profanity in Romaji transliteration
- Both profane and clean romanized cases to enable FP rate measurement

---

## be-kind Configuration

be-kind is tested with its **default configuration** (no options passed to constructor):
- Algorithm: Trie
- Leet-speak detection: enabled (default)
- Case-sensitive: false (default)
- Strict mode: off (default)
- All languages loaded (33K+ words, 18 languages)

This matches the "out of the box" experience and is consistent with the competitor speed benchmark.

**Exception — Semantic Context category:** be-kind's context-awareness features require explicit opt-in (`algorithm.useContextAnalysis: true`, `contextAnalysis.enabled: true`). For the Semantic Context category only, be-kind is tested with these flags enabled, and this is noted in the output. This is the fairest comparison since glin (enhanced) also enables its context features explicitly.

---

## Scoring

For each library × category combination:

- **TP rate (recall):** `correctly flagged profane cases / total profane cases in category`
- **FP rate:** `incorrectly flagged clean cases / total clean cases in category`
- **Precision:** `correctly flagged profane cases / total cases flagged as profane`
- **F1:** `2 × (precision × recall) / (precision + recall)`

**Edge cases:**
- If a category has **zero profane cases** (False Positives category): TP rate, Precision, and F1 are all reported as `—` (undefined). Only FP rate is reported.
- If a category has **zero clean cases**: FP rate is reported as `—`. F1 is still computable from precision and recall as long as there are profane cases.
- A library marked **N/A** for a category is excluded from that category's scoring entirely and from the overall summary for that category.

**EN-only library scoring:** leo-profanity, bad-words, and glin are scored against the English-language-tagged subset of the Single-language category only (not the full category). Their output row reports the English subset case count, not the full category count.

**Overall / summary F1:** macro-average across all categories where F1 is computable for that library (i.e. N/A categories and categories where F1 is `—` due to zero profane cases are both excluded from the denominator). The category count in the summary reflects only the categories included in the F1 average. Example: leo participates in Single-language (EN) and False Positives, but F1 is `—` for False Positives, so its summary reads `0.93 (1 category)`.

**Overall / summary FP rate:** simple mean of FP rates across all non-N/A categories for that library (including False Positives, which is the most FP-relevant category). Categories where FP rate is `—` (zero clean cases) are excluded from this average. The `avgFpRate` in the JSON schema matches this same rule.

---

## Libraries Tested

| Library | Single-lang (EN) | Single-lang (non-EN) | Multi-lang | False Positives | Romanization | Semantic Context |
|---|---|---|---|---|---|---|
| be-kind | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| leo-profanity | ✓ | N/A | N/A | ✓ | N/A | N/A |
| bad-words | ✓ | N/A | N/A | ✓ | N/A | N/A |
| glin (basic) | ✓ | N/A | N/A | ✓ | N/A | N/A |
| glin (enhanced) | ✓ | N/A | N/A | ✓ | N/A | ✓ |

Libraries are marked N/A for categories they structurally cannot handle (not a score of 0%).

---

## Output Format

Console output: one table per category, then a summary table.

```
=== Accuracy Benchmark ===
Timestamp: 2026-03-17T...

[ Single-language detection — 55 cases (40 profane, 15 clean) ]
Library            TP Rate    FP Rate    F1
be-kind            92%        7%         0.94
leo                88%        7%         0.93
bad-words          71%        0%         0.83
glin (basic)       80%        7%         0.88
glin (enhanced)    82%        7%         0.89

[ Multi-language detection — 25 cases (20 profane, 5 clean) ]
Library            TP Rate    FP Rate    F1
be-kind            75%        20%        0.83
leo                N/A        N/A        N/A
bad-words          N/A        N/A        N/A
glin (basic)       N/A        N/A        N/A
glin (enhanced)    N/A        N/A        N/A

[ False positives / innocent words — 40 cases (0 profane, 40 clean) ]
Library            TP Rate    FP Rate    F1
be-kind            —          10%        —
leo                —          5%         —
bad-words          —          2%         —
glin (basic)       —          5%         —
glin (enhanced)    —          5%         —

[ Romanization — 30 cases (20 profane, 10 clean) ]
Library            TP Rate    FP Rate    F1
be-kind            70%        10%        0.82
leo                N/A        N/A        N/A
bad-words          N/A        N/A        N/A
glin (basic)       N/A        N/A        N/A
glin (enhanced)    N/A        N/A        N/A

[ Semantic context — 25 cases (10 profane, 15 clean) ]
Library            TP Rate    FP Rate    F1
be-kind            80%        13%        0.84
leo                N/A        N/A        N/A
bad-words          N/A        N/A        N/A
glin (basic)       N/A        N/A        N/A
glin (enhanced)    70%        20%        0.78

[ Summary — macro-average F1 across F1-computable scored categories ]
Library            Overall F1           FP Rate (avg)
be-kind            0.86  (4 categories) 12%
leo                0.93  (1 category)    5%
bad-words          0.83  (1 category)    0%
glin (basic)       0.88  (1 category)    5%
glin (enhanced)    0.85  (2 categories)  7%
```

---

## Output JSON Schema

`benchmark/accuracy-results.json`:

```json
{
  "timestamp": "2026-03-17T21:00:00.000Z",
  "datasetVersion": 1,
  "totalCases": 175,
  "categories": [
    {
      "category": "single-language",
      "totalCases": 55,
      "profaneCases": 40,
      "cleanCases": 15,
      "results": [
        {
          "library": "be-kind",
          "tpRate": 0.92,
          "fpRate": 0.07,
          "precision": 0.93,
          "f1": 0.94,
          "truePositives": 37,
          "falseNegatives": 3,
          "falsePositives": 1,
          "trueNegatives": 14
        }
      ]
    }
  ],
  "summary": [
    {
      "library": "be-kind",
      "overallF1": 0.86,
      "categoriesScored": 4,
      "avgFpRate": 0.12
    }
  ]
}
```

`datasetVersion` is exported as a named constant from `accuracy-dataset.ts` and incremented manually when cases are added or changed, so stored results can be traced to the dataset that produced them.

---

## File Layout

```
benchmark/
  accuracy-dataset.ts      ← exported labeled cases (importable by Jest in future)
  accuracy-benchmark.ts    ← runner: loads dataset, scores all libraries, prints + saves
  accuracy-results.json    ← output (committed for README reference)
package.json               ← new script: "benchmark:accuracy": "bun run benchmark/accuracy-benchmark.ts"
README.md                  ← new Accuracy section alongside existing Competitor Comparison
```

The `benchmark:accuracy` script uses direct bun execution (same pattern as `benchmark:competitors`), with no build step required.

`accuracy-dataset.ts` is kept separate from the runner so it can be reused by Jest tests in future without executing the full benchmark.

---

## Out of Scope

- No performance measurement in this file (kept in existing speed benchmarks)
- No severity/scoring accuracy (binary profane/clean only)
- No new Jest tests (existing test suite unchanged)
- No CI integration (benchmark is a manual script like the others)

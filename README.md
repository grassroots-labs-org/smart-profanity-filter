# BeKind Profanity Filter

> Forked from [AllProfanity](https://github.com/ayush-jadaun/allprofanity) by Ayush Jadaun. Extended with **romanization profanity detection** (catches Hinglish, transliterated text), **language-aware innocence scoring** (ELD + trie-based detection prevents false positives for cross-language collisions like "slut" in Swedish), and additional language dictionaries. Licensed under MIT.

> ⚠️ **Early-stage package in progress.** Features available in the original AllProfanity are being actively deprecated, adjusted, or replaced. API surface may change without notice. Contributions and suggestions greatly appreciated.

> **Please be advised:** Due to the nature of its purpose, the be-kind repository contains explicit profanity, slurs, hate speech, and other offensive language across its source files, dictionaries, and test suites (sorry!). The inclusion of these words does not reflect the views of the authors or contributors.

A multi-language profanity filter with romanization detection, language-aware innocence scoring, leet-speak detection, and cross-language collision handling.

[![npm version](https://img.shields.io/npm/v/bekindprofanityfilter.svg)](https://www.npmjs.com/package/bekindprofanityfilter)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
![Languages](https://img.shields.io/badge/profanity_dicts-15_languages-blue)
![Detection Trie](https://img.shields.io/badge/detection_trie-18_languages-informational)

---

## What's New in v0.0.1

- **Aho-Corasick Algorithm:** 664% faster on large texts (1KB+) with O(n) multi-pattern matching
- **Bloom Filters:** Lightning-fast probabilistic lookups reduce unnecessary checks
- **Result Caching:** 123x speedup on repeated inputs (perfect for chat apps and forms)
- **Cross-Language Innocence Scoring:** Handles words like "slut" (Swedish: "end") and "fart" (Norwegian: "speed")
- **Word Boundary Detection:** Smart whole-word matching prevents flagging "assassin" or "assistance"
- **Flexible Configuration:** Choose algorithm and trade-offs based on your use case

---

## Features

### Performance & Speed

- **Multiple Algorithm Options:** Choose between Trie (default), Aho-Corasick, or Hybrid modes
- **664% Faster on Large Texts:** Aho-Corasick delivers O(n) multi-pattern matching
- **123x Speedup with Caching:** Result cache perfect for repeated checks (chat, forms, APIs)
- **~27K ops/sec:** Default Trie mode handles short texts incredibly fast
- **Single-Pass Scanning:** O(n) complexity regardless of dictionary size
- **Batch Processing Ready:** Optimized for high-throughput API endpoints

### Accuracy & Detection

- **Word Boundary Matching:** Smart whole-word detection prevents false positives like "assassin" or "assistance"
- **Advanced Leet-Speak:** Detects obfuscated profanities (`f#ck`, `a55hole`, `sh1t`, etc.)
- **Comprehensive Coverage:** Catches profanity while minimizing false flags
- **Configurable Strictness:** Tune detection sensitivity to your needs

### Multi-Language & Flexibility

- **Multi-Language Support:** Built-in profanity dictionaries for 16 languages: English, Hindi, French, German, Spanish, Italian, Brazilian Portuguese, Russian, Arabic, Chinese, Japanese, Korean, Bengali, Tamil, Telugu, Turkish
- **Multiple Scripts:** Latin/Roman (Hinglish) and native scripts (Devanagari, Tamil, Telugu, etc.)
- **Custom Dictionaries:** Add/remove words or entire language packs at runtime
- **Whitelisting:** Exclude safe words from detection
- **Severity Scoring:** Assess content offensiveness (`MILD`, `MODERATE`, `SEVERE`, `EXTREME`)

### Developer Experience

- **TypeScript Support:** Fully typed API with comprehensive documentation
- **Zero 3rd-Party Dependencies:** Only internal code and data
- **Configurable:** Tune performance vs accuracy for your use case
- **No Dictionary Exposure:** Secure by design - word lists never exposed
- **Universal:** Works in Node.js and browsers

---

> **Forked from [BeKind](https://github.com/ayush-jadaun/allprofanity)** by Ayush Jadaun. Extended with **romanization profanity detection** (catches Hinglish, transliterated text), **language-aware innocence scoring** (ELD + trie-based detection prevents false positives for cross-language collisions like "slut" in Swedish), and additional language dictionaries. Licensed under MIT.

## Installation

```bash
npm install bekindprofanityfilter
# or
yarn add bekindprofanityfilter
```

**Generate configuration file (optional):**

```bash
npx bekindprofanityfilter
# Creates bekindprofanityfilter.config.json and config.schema.json in your project
```

---

## Quick Start

```typescript
import profanity from 'bekindprofanityfilter';

// Simple check
profanity.check('This is a clean sentence.');        // false
profanity.check('What the f#ck is this?');           // true (leet-speak detected)
profanity.check('यह एक चूतिया परीक्षण है।');           // true (Hindi)
profanity.check('Ye ek chutiya test hai.');          // true (Hinglish Roman script)
```

---

## Algorithm Configuration

BeKind v2.2+ offers multiple algorithms optimized for different use cases. You can configure via **constructor options** or **config file**.

### Configuration Methods

#### Method 1: Constructor Options (Inline)

```typescript
import { BeKind } from 'bekindprofanityfilter';

const filter = new BeKind({
  algorithm: { matching: "hybrid" },
  performance: { enableCaching: true }
});
```

#### Method 2: Config File (Recommended)

```bash
# Generate config files in your project
npx bekindprofanityfilter

# This creates:
# - bekindprofanityfilter.config.json (main config)
# - config.schema.json (for IDE autocomplete)
```

```typescript
import { BeKind } from 'bekindprofanityfilter';
import config from './bekindprofanityfilter.config.json';

// Load from generated config file
const filter = BeKind.fromConfig(config);

// Or directly from object (no file needed)
const filter2 = BeKind.fromConfig({
  algorithm: { matching: "hybrid", useContextAnalysis: true },
  performance: { enableCaching: true, cacheSize: 1000 }
});
```

**Example Config File** (`bekindprofanityfilter.config.json`):

```json
{
  "algorithm": {
    "matching": "hybrid",
    "useAhoCorasick": true,
    "useBloomFilter": true
  },
  "profanityDetection": {
    "enableLeetSpeak": true,
    "caseSensitive": false,
    "strictMode": false
  },
  "performance": {
    "enableCaching": true,
    "cacheSize": 1000
  }
}
```

**Config File:** Run `npx bekindprofanityfilter` to generate config files in your project. The JSON schema provides IDE autocomplete and validation.

---

### Quick Configuration Examples

#### 1. Default (Best for General Use)

```typescript
import { BeKind } from 'bekindprofanityfilter';
const filter = new BeKind();
// Uses optimized Trie - fast and reliable (~27K ops/sec)
```

#### 2. Large Text Processing (Documents, Articles)

```typescript
const filter = new BeKind({
  algorithm: { matching: "aho-corasick" }
});
// 664% faster on 1KB+ texts
```

#### 3. Repeated Checks (Chat, Forms, APIs)

```typescript
const filter = new BeKind({
  performance: {
    enableCaching: true,
    cacheSize: 1000
  }
});
```

### Competitor Comparison

Benchmarked on a single CPU core (pinned via `taskset -c 0`). All numbers are **ops/second — higher is better**.

> **Honest context:** be-kind loads a ~34K-word dictionary across 18 languages by default. `leo + dict` injects be-kind's full 34K dictionary into [leo-profanity](https://github.com/jojoee/leo-profanity) (which ships with ~400 English words only) to test the matching engine with equivalent vocabulary. glin-profanity is benchmarked with all 24 supported languages loaded. `glin + dict` injects be-kind's full 34K dictionary into glin for the same reason.

| Library | Languages (out-of-the-box) | Leet-speak | Repeat compression | Context-aware |
|---------|--------------------------|-----------|-------------------|--------------|
| **be-kind** | 16 profanity dicts + 18-lang detection trie | ✅ | 🚧 planned | ✅ (certainty-delta) |
| **be-kind (ctx)** | same as be-kind | ✅ | 🚧 planned | ✅ (boosters + reducers) |
| [leo-profanity](https://github.com/jojoee/leo-profanity) + dict | 16 (via be-kind dict injection) | ❌ | ❌ | ❌ |
| [bad-words](https://github.com/web-mech/badwords) | 1 (English) | ❌ | ❌ | ❌ |
| [glin-profanity](https://www.glincker.com/tools/glin-profanity) | 24 | ✅ (3 levels) | ✅ | ✅ (heuristic) |

**Speed benchmark** — ops/second on a single CPU core (`taskset -c 0`), higher is better:

| Test | be-kind | be-kind (ctx) | leo | bad-words | glin (basic) | glin (enhanced) | glin + dict |
|------|--------:|--------------:|----:|----------:|-------------:|----------------:|------------:|
| check — clean (short) | 2,654 | 2,903 | 879,009 | 2,932 | 816 | 751 | 68 |
| check — profane (short) | 2,366 | 2,031 | 1,496,281 | 3,025 | 3,128 | 3,304 | 3,350 |
| check — leet-speak | 1,243 | 1,198 | 1,100,028 | 3,148 | 2,760 | 4,078 | 4,499 |
| clean — profane (short) | 2,398 | 2,011 | 298,713 | 243 | N/A | N/A | N/A |
| check — 500-char clean | 411 | 397 | 100,898 | 2,157 | 253 | 247 | 20 |
| check — 500-char profane | 348 | 277 | 216,204 | 2,155 | 789 | 720 | 762 |
| check — 2,500-char clean | 91 | 88 | 18,900 | 1,225 | 74 | 71 | 6 |
| check — 2,500-char profane | 82 | 62 | 50,454 | 1,084 | 196 | 185 | 186 |

**Library versions tested:** `leo-profanity@1.9.0`, `bad-words@4.0.0`, `glin-profanity@3.3.0`

**Notes:**
- **be-kind** and **be-kind (ctx)** both load a 34K-word dictionary across 18 languages. Despite this, be-kind is ~3x faster than glin on clean text because it uses a **trie** (O(input_length) matching), while glin uses **linear scanning** over its dictionary (`for (const word of this.words.keys())` — O(dict_size * input_length)). This architectural difference becomes dramatic at large dictionary sizes.
- `be-kind (ctx)` adds ~10-20% overhead over default be-kind — context analysis (certainty-delta pattern matching) is cheap.
- `leo-profanity` is the fastest but its ~400-word English-only dictionary explains most of the gap.
- `glin` with all 24 languages loaded is ~17x slower than English-only due to its linear-scan architecture scaling with dictionary size.
- `glin + dict` (glin enhanced + be-kind's 34K words injected) demonstrates the linear-scan bottleneck: 67 ops/s on clean short text vs 2,560 for be-kind with the same vocabulary. On profane text it short-circuits on first match, so performance is normal (3,335 ops/s).
- be-kind is the only library with cross-language innocence scoring, romanization support, and context-aware certainty adjustment.

Run the benchmark yourself:
```bash
taskset -c 0 bun run benchmark:competitors
```

### Accuracy Comparison

Measures TP rate (recall), FP rate, and F1 across eight test categories (225 labeled cases, dataset v6). All libraries are tested against all categories — no exemptions. **Higher F1 and lower FP rate are better.**

> **Bias disclaimer:** This dataset was created by the be-kind team. Non-English cases were likely drawn from or verified against be-kind's own dictionary, which advantages be-kind on those categories. To partially offset this, the dataset includes independent test cases from [glin-profanity's upstream test suite](https://github.com/GLINCKER/glin-profanity/tree/release/tests) and adversarial false-positive cases specifically chosen to expose known be-kind failures. We strongly recommend running this benchmark against your own dataset before drawing conclusions.

> **Note:** `be-kind (sensitive)` = `sensitiveMode: true` (flags AMBIVALENT words too). `be-kind (ctx)` = `contextAnalysis.enabled: true`. `glin (collapsed)` = glin (basic) with `collapseRepeatedCharacters()` pre-processing.

#### Single-language detection — 65 cases (English incl. leetspeak, French, German, Spanish, Hindi)

| Library | Recall | Precision | FP Rate | F1 |
|---|---|---|---|---|
| be-kind (sensitive) | 100% | 100% | 0% | **1.00** |
| leo + dict | 82% | 100% | 0% | 0.90 |
| be-kind | 80% | 100% | 0% | 0.89 |
| be-kind (ctx) | 80% | 100% | 0% | 0.89 |
| glin (enhanced) | 72% | 100% | 0% | 0.84 |
| glin (collapsed) | 72% | 100% | 0% | 0.84 |
| bad-words | 52% | 100% | 0% | 0.68 |

> All libraries tested against all 65 cases including French, German, Spanish, and Hindi. `leo + dict` benefits significantly from be-kind's multilingual dictionary, jumping from 34% to 82% recall. be-kind misses mild words (`damn`, `hell`) in default mode; `sensitiveMode: true` catches these. All libraries achieve 100% precision — when they flag something, it's always correct.

#### False positives / innocent words — 48 cases (clean only, lower FP rate is better)

Includes adversarial cases (`cum laude`, `Dick Van Dyke`, culinary `faggots`, Swedish `slut`). Recall and F1 are undefined (no profane cases).

| Library | FP Rate |
|---|---|
| glin (collapsed) | **19%** |
| glin (enhanced) | 21% |
| be-kind (ctx) | 21% |
| bad-words | 23% |
| leo + dict | 25% |
| be-kind | 27% |
| be-kind (sensitive) | 31% |

> be-kind's FP rate remains its most significant weakness — over-triggers on proper nouns, Latin phrases, and homographs. `sensitiveMode: true` worsens this. `be-kind (ctx)` with context analysis reduces FP rate from 27% to 21% by detecting innocent contexts (medical terms, proper nouns, quoted text). `leo + dict` at 25% shows that leo's simple substring matching creates more false positives when given a large dictionary.

#### Multi-language detection — 26 cases (Hinglish, French, German, Spanish, mixed)

| Library | Recall | Precision | FP Rate | F1 |
|---|---|---|---|---|
| be-kind | 100% | 100% | 0% | **1.00** |
| be-kind (sensitive) | 100% | 100% | 0% | **1.00** |
| leo + dict | 100% | 100% | 0% | **1.00** |
| be-kind (ctx) | 95% | 100% | 0% | 0.98 |
| glin (enhanced) | 95% | 100% | 0% | 0.98 |
| glin (collapsed) | 95% | 100% | 0% | 0.98 |
| bad-words | 62% | 100% | 0% | 0.76 |

> With be-kind's dictionary injected, leo + dict achieves 100% recall on multi-language cases — proving the dictionary is the key differentiator. be-kind (ctx) scores 95% — context analysis slightly reduces multi-language recall vs default be-kind.

#### Romanization — 30 cases (Hinglish, Bengali, Tamil, Telugu, Japanese)

| Library | Recall | Precision | FP Rate | F1 |
|---|---|---|---|---|
| leo + dict | 75% | 94% | 10% | **0.83** |
| be-kind | 80% | 84% | 30% | 0.82 |
| be-kind (sensitive) | 80% | 84% | 30% | 0.82 |
| be-kind (ctx) | 80% | 84% | 30% | 0.82 |
| glin (enhanced) | 15% | 100% | 0% | 0.26 |
| glin (collapsed) | 15% | 100% | 0% | 0.26 |
| bad-words | 0% | 0% | 10% | — |

> leo + dict edges out be-kind on F1 here (0.83 vs 0.82) thanks to a lower FP rate (10% vs 30%) despite slightly lower recall (75% vs 80%). be-kind's higher FP rate is a known limitation where clean romanized words collide with its dictionary. glin catches 15% with perfect precision but far less coverage.

#### Semantic context — 25 cases

| Library | Recall | Precision | FP Rate | F1 |
|---|---|---|---|---|
| be-kind (ctx) | 80% | 73% | 20% | **0.76** |
| leo + dict | 100% | 59% | 47% | 0.74 |
| glin (enhanced) | 90% | 53% | 53% | 0.67 |
| glin (collapsed) | 90% | 53% | 53% | 0.67 |
| be-kind (sensitive) | 100% | 48% | 73% | 0.65 |
| bad-words | 100% | 48% | 73% | 0.65 |
| be-kind | 80% | 47% | 60% | 0.59 |

> Semantic context is where all libraries struggle — precision drops below 50% for most. Cases include metalinguistic uses ("the word 'fuck' has uncertain origins"), negation ("she's not a bitch"), and medical context ("rectal cancer screening"). be-kind (ctx) achieves the best F1 (0.76) thanks to context-aware certainty adjustment — boosters confirm profane intent, reducers detect innocent contexts like quotation and negation. leo + dict achieves 100% recall but at the cost of a 47% FP rate.

#### Repeated character evasion — 5 cases (`fuuuuuuuuck`, `cunnnnnnttttt`, etc.)

No clean cases in this category — FP rate is undefined.

| Library | Recall | Precision |
|---|---|---|
| glin (enhanced) | **100%** | 100% |
| glin (collapsed) | 40% | 100% |
| be-kind | 0% | — |
| be-kind (sensitive) | 0% | — |
| be-kind (ctx) | 0% | — |
| leo + dict | 0% | — |
| bad-words | 0% | — |

#### Concatenated / no-space evasion — 7 cases (`urASSHOLEbro`, `youFUCKINGidiot`, etc.)

| Library | Recall | Precision | FP Rate | F1 |
|---|---|---|---|---|
| be-kind | 20% | 100% | 0% | 0.33 |
| be-kind (sensitive) | 20% | 100% | 0% | 0.33 |
| be-kind (ctx) | 20% | 100% | 0% | 0.33 |
| leo + dict | 0% | — | 0% | — |
| bad-words | 0% | — | 0% | — |
| glin (enhanced) | 0% | — | 0% | — |
| glin (collapsed) | 0% | — | 0% | — |

#### Challenge cases — 19 cases (semantic disambiguation, embedded substrings, separator evasion)

Hard problems: `cock` as rooster, `ass` as donkey, Swedish `slut` = "end", `puta` in etymological discussion, profanity in concatenated strings, and separator-spaced evasion (`f u c k`, `f_u*c k`, `a.s.s.h.o.l.e`).

| Library | Recall | Precision | FP Rate | F1 |
|---|---|---|---|---|
| be-kind (ctx) | 60% | 75% | 22% | **0.67** |
| be-kind | 60% | 60% | 44% | 0.60 |
| be-kind (sensitive) | 60% | 60% | 44% | 0.60 |
| glin (enhanced) | 30% | 43% | 44% | 0.35 |
| leo + dict | 20% | 50% | 22% | 0.29 |
| bad-words | 20% | 33% | 44% | 0.25 |
| glin (collapsed) | 0% | 0% | 44% | — |

> be-kind (ctx) halves the FP rate on challenge cases (44% → 22%) by recognizing innocent contexts like "cock crowed at dawn" and "wild ass is an equine." Separator-spaced evasion cases (`f u c k`, `f_u*c k`, mixed separators) test the separator tolerance feature. These cases still require semantic understanding that no dictionary-based filter can fully solve — the strongest argument for LLM-assisted moderation as a second pass.

#### Overall summary — micro-averaged across all 225 cases

| Library | Recall | Precision | FP Rate | F1 | TP | FN | FP | TN |
|---|---|---|---|---|---|---|---|---|
| be-kind (sensitive) | **86%** | 76% | 32% | 0.81 | 104 | 17 | 33 | 71 |
| be-kind (ctx) | 75% | **83%** | **17%** | **0.79** | 91 | 30 | 18 | 86 |
| be-kind | 76% | 76% | 28% | 0.76 | 92 | 29 | 29 | 75 |
| leo + dict | 74% | 80% | 21% | 0.76 | 89 | 32 | 22 | 82 |
| glin (enhanced) | 63% | 78% | 21% | 0.70 | 76 | 45 | 22 | 82 |
| glin (collapsed) | 58% | 77% | 20% | 0.66 | 70 | 51 | 21 | 83 |
| bad-words | 42% | 65% | 26% | 0.51 | 51 | 70 | 27 | 77 |

> Micro-averaged: all 225 cases (121 profane, 104 clean) aggregated into one confusion matrix per library, then recall/precision/F1 computed once. No category weighting artifacts. All glin variants use all 24 supported languages. `leo + dict` with be-kind's 34K dictionary achieves F1 parity with default be-kind (0.76) — proving the dictionary is the core differentiator. be-kind (ctx) achieves the best balance of precision (83%) and recall (75%) with the lowest FP rate (17%) among be-kind variants, thanks to context-aware certainty adjustment via booster and reducer patterns.

Run the accuracy benchmark yourself:
```bash
bun run benchmark:accuracy
```

---

## API Reference & Examples

### `check(text: string): boolean`

Returns `true` if the text contains any profanity.

```typescript
profanity.check('This is a clean sentence.');  // false
profanity.check('This is a bullshit sentence.'); // true
profanity.check('What the f#ck is this?'); // true (leet-speak)
profanity.check('यह एक चूतिया परीक्षण है।'); // true (Hindi)
```

---

### `detect(text: string): ProfanityDetectionResult`

Returns a detailed result:

- `hasProfanity: boolean`
- `detectedWords: string[]` (actual matched words)
- `cleanedText: string` (character-masked)
- `severity: ProfanitySeverity` (`MILD`, `MODERATE`, `SEVERE`, `EXTREME`)
- `positions: Array<{ word: string, start: number, end: number }>`

```typescript
const result = profanity.detect('This is fucking bullshit and chutiya.');
console.log(result.hasProfanity); // true
console.log(result.detectedWords); // ['fucking', 'bullshit', 'chutiya']
console.log(result.severity); // 3 (SEVERE)
console.log(result.cleanedText); // "This is ******* ******** and ******."
console.log(result.positions); // e.g. [{word: 'fucking', start: 8, end: 15}, ...]
```

---

### `clean(text: string, placeholder?: string): string`

Replace each character of profane words with a placeholder (default: `*`).

```typescript
profanity.clean('This contains bullshit.'); // "This contains ********."
profanity.clean('This contains bullshit.', '#'); // "This contains ########."
profanity.clean('यह एक चूतिया परीक्षण है।'); // e.g. "यह एक ***** परीक्षण है।"
```

---

### `cleanWithPlaceholder(text: string, placeholder?: string): string`

Replace each profane word with a single placeholder (default: `***`).  
(If the placeholder is omitted, uses `***`.)

```typescript
profanity.cleanWithPlaceholder('This contains bullshit.'); // "This contains ***."
profanity.cleanWithPlaceholder('This contains bullshit.', '[CENSORED]'); // "This contains [CENSORED]."
profanity.cleanWithPlaceholder('यह एक चूतिया परीक्षण है।', '####'); // e.g. "यह एक #### परीक्षण है।"
```

---

### `add(word: string | string[]): void`

Add a word or an array of words to the profanity filter.

```typescript
profanity.add('badword123');
profanity.check('This is badword123.'); // true

profanity.add(['mierda', 'puta']);
profanity.check('Esto es mierda.'); // true (Spanish)
profanity.check('Qué puta situación.'); // true
```

---

### `remove(word: string | string[]): void`

Remove a word or an array of words from the profanity filter.

```typescript
profanity.remove('bullshit');
profanity.check('This is bullshit.'); // false

profanity.remove(['mierda', 'puta']);
profanity.check('Esto es mierda.'); // false
```

---

### `addToWhitelist(words: string[]): void`

Whitelist words so they are never flagged as profane.

```typescript
profanity.addToWhitelist(['fuck', 'idiot','shit']);
profanity.check('He is an fucking idiot.'); // false
profanity.check('Fuck this shit.'); // false
// Remove from whitelist to restore detection
profanity.removeFromWhitelist(['fuck', 'idiot','shit']);
```

---

### `removeFromWhitelist(words: string[]): void`

Remove words from the whitelist so they can be detected again.

```typescript
profanity.removeFromWhitelist(['anal']);
```

---

### `setPlaceholder(placeholder: string): void`

Set the default placeholder character for `clean()`.

```typescript
profanity.setPlaceholder('#');
profanity.clean('This is bullshit.'); // "This is ########."
profanity.setPlaceholder('*'); // Reset to default
```

---

### `updateConfig(options: Partial<BeKindOptions>): void`

Change configuration at runtime.  
Options include: `enableLeetSpeak`, `caseSensitive`, `strictMode`, `detectPartialWords`, `defaultPlaceholder`, `languages`, `whitelistWords`.

```typescript
profanity.updateConfig({ caseSensitive: true, enableLeetSpeak: false });
profanity.check('FUCK'); // false (if caseSensitive)
profanity.updateConfig({ caseSensitive: false, enableLeetSpeak: true });
profanity.check('f#ck'); // true
```

---

### `loadLanguage(language: string): boolean`

Load a built-in language.

```typescript
profanity.loadLanguage('french');
profanity.check('Ce mot est merde.'); // true
```

---

### `loadLanguages(languages: string[]): number`

Load multiple built-in languages at once.

```typescript
profanity.loadLanguages(['english', 'french', 'german']);
profanity.check('Das ist scheiße.'); // true (German)
```

---

### `loadIndianLanguages(): number`

Convenience: Load all major Indian language packs.

```typescript
profanity.loadIndianLanguages();
profanity.check('यह एक बेंगाली गाली है।'); // true (Bengali)
profanity.check('This is a Tamil profanity: புண்டை'); // true
```

---

### `loadCustomDictionary(name: string, words: string[]): void`

Add your own dictionary as an additional language.

```typescript
profanity.loadCustomDictionary('swedish', ['fan', 'jävla', 'skit']);
profanity.loadLanguage('swedish');
profanity.check('Det här är skit.'); // true
```

---

### `getLoadedLanguages(): string[]`

Returns the names of all currently loaded language packs.

```typescript
console.log(profanity.getLoadedLanguages()); // ['english', 'hindi', ...]
```

---

### `getAvailableLanguages(): string[]`

Returns the names of all available built-in language packs.

```typescript
console.log(profanity.getAvailableLanguages());
// ['english', 'hindi', 'french', 'german', 'spanish', 'bengali', 'tamil', 'telugu', 'brazilian']
```

---

### `clearList(): void`

Remove all loaded languages and dynamic words (start with a clean filter).

```typescript
profanity.clearList();
profanity.check('fuck'); // false
profanity.loadLanguage('english');
profanity.check('fuck'); // true
```

---

### `getConfig(): Partial<BeKindOptions>`

Get the current configuration.

```typescript
console.log(profanity.getConfig());
/*
{
  defaultPlaceholder: '*',
  enableLeetSpeak: true,
  caseSensitive: false,
  strictMode: false,
  detectPartialWords: false,
  languages: [...],
  whitelistWords: [...]
}
*/
```

---

## Configuration File Structure

BeKind supports JSON-based configuration for easy setup and deployment. The config file structure supports all algorithm and detection options.

### Full Configuration Schema

```typescript
{
  "algorithm": {
    "matching": "trie" | "aho-corasick" | "hybrid",  // Algorithm selection
    "useAhoCorasick": boolean,                        // Enable Aho-Corasick
    "useBloomFilter": boolean                         // Enable Bloom Filter
  },
  "bloomFilter": {
    "enabled": boolean,                               // Enable/disable
    "expectedItems": number,                          // Expected dictionary size (default: 10000)
    "falsePositiveRate": number                       // Acceptable false positive rate (default: 0.01)
  },
  "ahoCorasick": {
    "enabled": boolean,                               // Enable/disable
    "prebuild": boolean                               // Prebuild automaton (default: true)
  },
  "profanityDetection": {
    "enableLeetSpeak": boolean,                       // Detect l33t speak (default: true)
    "caseSensitive": boolean,                         // Case sensitive matching (default: false)
    "strictMode": boolean,                            // Require word boundaries (default: false)
    "detectPartialWords": boolean,                    // Detect within words (default: false)
    "defaultPlaceholder": string                      // Default censoring character (default: "*")
  },
  "performance": {
    "enableCaching": boolean,                         // Enable result cache (default: false)
    "cacheSize": number                               // Cache size limit (default: 1000)
  }
}
```

### Pre-configured Templates

#### High Performance (Large Texts)

```json
{
  "algorithm": { "matching": "aho-corasick" },
  "ahoCorasick": { "enabled": true, "prebuild": true },
  "profanityDetection": { "enableLeetSpeak": true }
}
```

#### Balanced (Production)

```json
{
  "algorithm": {
    "matching": "hybrid",
    "useAhoCorasick": true,
    "useBloomFilter": true
  },
  "profanityDetection": { "enableLeetSpeak": true },
  "performance": { "enableCaching": true, "cacheSize": 1000 }
}
```

### Using Config Files

**Step 1: Generate Config Files**

```bash
# Run this in your project directory
npx bekindprofanityfilter

# Output:
# ✅ BeKind configuration files created!
#
# Created files:
#   📄 bekindprofanityfilter.config.json - Main configuration
#   📄 config.schema.json - JSON schema for IDE autocomplete
```

**Step 2: Load Config in Your Code**

```typescript
// ES Modules / TypeScript
import { BeKind } from 'bekindprofanityfilter';
import config from './bekindprofanityfilter.config.json';

const filter = BeKind.fromConfig(config);
```

```javascript
// CommonJS (Node.js)
const { BeKind } = require('bekindprofanityfilter');
const config = require('./bekindprofanityfilter.config.json');

const filter = BeKind.fromConfig(config);
```

**Step 3: Customize Config**

Edit `bekindprofanityfilter.config.json` to enable/disable features. Your IDE will provide autocomplete thanks to the JSON schema!

---

## Cross-Language Innocence Scoring

Many words are profane in one language but perfectly innocent in another. For example, "slut" means "end/finish" in Swedish, "fart" means "speed" in Scandinavian languages, and "bite" is a common English word that's vulgar in French. BeKind handles these cross-language collisions automatically using a multi-layer language detection and scoring system.

### Language Detection Architecture

BeKind uses a hybrid language detection system with three layers:

**1. ELD N-gram Detection** (`eld/small`)
We integrate [Nito-ELD](https://github.com/nitotm/efficient-language-detector), a corpus-trained byte-level n-gram language detector supporting 60+ languages. ELD analyzes character sequences (trigrams) and compares them against frequency profiles trained on massive corpora. It provides both per-word scores and full-text Bayesian priors.

*Limitation:* ELD works on UTF-8 byte patterns, so it struggles with accent-stripped text and frequently confuses closely related languages (Swedish ↔ German, Norwegian ↔ Danish). This is why we don't rely on ELD alone.

**2. Trie Vocabulary Detection** (18 languages)
Per-language tries built from ~200-350 common words each. When a word is looked up, the trie returns a match score (0-1) indicating how strongly the word belongs to that language. Supports accent-tolerant matching (e.g., "gurultu" matches Turkish "gürültü" with a small penalty).

**3. Script Detection**
Unicode codepoint ranges map characters directly to language families (e.g., Cyrillic → Russian, Devanagari → Hindi). This is deterministic and instant, providing strong signal for non-Latin scripts.

### The `scoreWord()` Function

For each word, `scoreWord()` combines all three layers into a single `Record<string, number>` mapping language codes to confidence scores:

```
scoreWord("slut") → { sv: 0.8, en: 0.6, de: 0.3, ... }
                       ↑ Swedish trie match (exact word in vocabulary)
                            ↑ English trie match (partial/common word)
                                 ↑ German ELD n-gram signal
```

Layer weights: Script (1.0) > Trie (0.8) > ELD (0.6) > Suffix (0.3+) > Prefix (0.3+)

### The `detectLanguages()` Function

For full text, `detectLanguages()` runs `scoreWord()` on every word and aggregates results into document-level proportions:

```typescript
detectLanguages("Programmet börjar klockan åtta och tar slut vid tio")
// → { languages: [{ language: "de", proportion: 0.6 }, { language: "sv", proportion: 0.3 }, ...] }
```

*Note:* ELD often classifies Swedish as German due to n-gram similarity. The confusion map (see below) compensates for this.

### Two-Layer Signal Combination

When a collision word is detected, we combine word-level and document-level signals using a **1.5:1 weighted average** favoring the document signal:

```
amplified[lang] = (scoreWord[lang] × 1.0 + docSignal[lang] × 1.5) / 2.5
```

The document signal is favored because it provides broader context — a single word's language score can be ambiguous, but the surrounding text usually makes the language clear.

### The Confusion Map

ELD's n-gram model frequently misclassifies Scandinavian languages as German (they share many character patterns). The confusion map treats German signal as partial evidence of Scandinavian:

```
effectiveAmp["sv"] = max(directAmp["sv"], confusedAmp["de"] × 0.8)
```

The 0.8 discount prevents over-attribution — German text shouldn't fully count as Swedish, but mostly-German signal in a Scandinavian context should still trigger dampening.

### Certainty Adjustment Formula

Once we have the amplified language signals, `adjustCertaintyForLanguage()` adjusts the word's certainty score:

```
If innocent language dominates (innocentAmp > profaneAmp):
  adjusted = certainty × (1 - dampeningFactor × innocentAmp)    ← reduces certainty

If profane language dominates (profaneAmp > innocentAmp):
  adjusted = certainty × (1 + dampeningFactor × profaneAmp)     ← increases certainty

Result clamped to [0, 5]
```

The `dampeningFactor` (0-1) controls how aggressively the adjustment works per collision word. Words that are genuinely innocent in another language (e.g., "slut" in Swedish, df=0.9) get heavy dampening, while dangerous dual-meaning words (e.g., "cock" as rooster, df=0.1) barely adjust.

### End-to-End Flow

```
Text: "Programmet börjar klockan åtta och tar slut vid tio"
                                          ^^^^
                                          "slut" detected (en: s:3 c:4)

  1. Collision word matched → check innocent-words map
     "slut" → innocent in Swedish (meaning: "end/finish", dampeningFactor: 0.9)

  2. Language detection triggered (lazy — only runs on collision matches)
     Document signal: detectLanguages() → { de: 0.7, en: 0.2, ... }
     Word signal:     scoreWord("slut")  → { sv: 0.8, en: 0.6, ... }

  3. Weighted average (1.5:1 doc:word ratio)
     amplified["sv"] = (0.8 × 1.0 + 0.0 × 1.5) / 2.5 = 0.32
     amplified["de"] = (0.0 × 1.0 + 0.7 × 1.5) / 2.5 = 0.42
     amplified["en"] = (0.6 × 1.0 + 0.2 × 1.5) / 2.5 = 0.36

  4. Confusion map: German signal → partial Swedish evidence
     effectiveAmp["sv"] = max(0.32, 0.42 × 0.8) = 0.336

  5. Innocent language (sv: 0.336) > Profane language (en: 0.36)?
     → Close, but Swedish trie words boost sv signal further
     → Certainty dampened: 4 × (1 - 0.9 × 0.336) = 2.79
     → Below flag threshold (s:3 needs c:3+) → NOT FLAGGED ✓
```

### Key Features

- **29 collision words** mapped across 7 languages (English, Swedish, Norwegian, Danish, German, Dutch, French, Spanish)
- **Per-word dampening factors** control adjustment strength:
  - `0.9` = heavy dampening (genuinely innocent cross-language, e.g., "slut" in Swedish)
  - `0.1` = barely dampens (almost always used as profanity, e.g., "cock" in English)
- **Lazy language detection** — `detectLanguages()` only runs when a collision word is matched (zero performance cost for non-collision text)
- **Confusion map** — handles ELD n-gram detector's known misclassifications (e.g., Swedish often classified as German)
- **Swedish trie vocabulary** — ~350 common words for reliable word-level Swedish detection

### Collision Words

| Word | Profane In | Innocent In | Meaning |
|------|-----------|-------------|---------|
| slut | English | Swedish, Danish | end/finish |
| fart | English | Swedish, Norwegian, Danish | speed |
| hell | English | Swedish, Norwegian | luck |
| prick | English | Swedish | dot/point |
| kock | English | Swedish | chef/cook |
| bra | English | Swedish | good |
| bite | French | English | to use teeth |
| con | French | English, Spanish | prefix/with |
| pet | French | English | animal companion |
| mist | Dutch/German | English | fog/haze |
| hoe | English | Dutch | how |
| kant | Dutch | German | edge |
| ass | English | English | donkey (df: 0.15) |
| cock | English | English | rooster (df: 0.1) |

*Full list in `src/languages/innocent-words.ts`*

### Same-Language Collisions

Words like "ass" (donkey) and "cock" (rooster) are both profane and innocent in English. Since the profane and innocent language signals are equal, the system cannot disambiguate — these always remain flagged. This is a known limitation that would require semantic context analysis to solve.

### Tested Scenarios

The challenge test suite (`tests/challenge-tests.test.ts`) validates 32 real-world scenarios:

| Category | Tests | Passing | Description |
|----------|-------|---------|-------------|
| Swedish text | 7 | 7 | News, recipes, driving, email, school contexts |
| Norwegian/Danish | 4 | 4 | Via confusion map cross-detection |
| Mixed-language | 5 | 4 | Code-switching, bilingual documents |
| Same-language (en→en) | 5 | 3 | Donkey/rooster/garden contexts |
| Threshold boundaries | 3 | 3 | Minimal context, short text |
| Adversarial inputs | 4 | 4 | Swedish padding attacks, Unicode tricks |
| Missing language pairs | 4 | 3 | Dutch, German, Italian, Portuguese |

**4 skipped tests** document unsolved challenges requiring semantic analysis or additional language support.

---

## Severity Levels

Severity reflects the number and variety of detected profanities:

| Level     | Enum Value | Description                             |
|-----------|------------|-----------------------------------------|
| MILD      | 1          | 1 unique/total word                     |
| MODERATE  | 2          | 2 unique or total words                 |
| SEVERE    | 3          | 3 unique/total words                    |
| EXTREME   | 4          | 4+ unique or 5+ total profane words     |

---

## Language Support

- **Profanity Dictionaries (15):** English, Hindi, French, German, Spanish, Italian, Brazilian Portuguese, Russian, Arabic, Chinese, Japanese, Korean, Bengali, Tamil, Telugu
- **Language Detection Trie (18):** All 15 above + Dutch, Turkish, Swedish (used for innocence scoring, not profanity detection)
- **Cross-Language Innocence Scoring:** English, Swedish, Norwegian, Danish, German, Dutch, French, Spanish
- **Scripts:** Latin/Roman, Devanagari, Tamil, Telugu, Bengali, Cyrillic, Arabic, CJK, etc.
- **Mixed Content:** Handles mixed-language and code-switched sentences with language-aware scoring.

```typescript
profanity.check('This is bullshit and चूतिया.'); // true (mixed English/Hindi)
profanity.check('Ce mot est merde and पागल.');   // true (French/Hindi)
profanity.check('Isso é uma merda.');             // true (Brazilian Portuguese)
```

---

## Use Exported Wordlists

For sample words in a language (for UIs, admin, etc):

```typescript
import { englishBadWords, hindiBadWords } from 'bekindprofanityfilter';
console.log(englishBadWords.slice(0, 5)); // ["fuck", "shit", ...]
```

---

## Security

- **No wordlist exposure:** There is no `.list()` function for security and encapsulation. Use exported word arrays for samples.
- **TRIE-based:** Scales easily to 50,000+ words.
- **Handles leet-speak:** Catches obfuscated variants like `f#ck`, `a55hole`.

---

## Full Example

```typescript
import profanity, { ProfanitySeverity } from 'bekindprofanityfilter';


// Multi-language detection
profanity.loadLanguages(['english', 'french', 'tamil']);
console.log(profanity.check('Ce mot est merde.')); // true

// Leet-speak detection
console.log(profanity.check('You a f#cking a55hole!')); // true

// Whitelisting
profanity.addToWhitelist(['anal', 'ass']);
console.log(profanity.check('He is an associate professor.')); // false

// Severity
const result = profanity.detect('This is fucking bullshit and chutiya.');
console.log(ProfanitySeverity[result.severity]); // "SEVERE"

// Custom dictionary
profanity.loadCustomDictionary('pirate', ['barnacle-head', 'landlubber']);
profanity.loadLanguage('pirate');
console.log(profanity.check('You barnacle-head!')); // true

// Placeholder configuration
profanity.setPlaceholder('#');
console.log(profanity.clean('This is bullshit.')); // "This is ########."
profanity.setPlaceholder('*'); // Reset
```

---

## FAQ

**Q: How do I see all loaded profanities?**  
A: For security, the internal word list is not exposed. Use `englishBadWords` etc. for samples.

**Q: How do I reset the filter?**  
A: Use `clearList()` and reload languages/dictionaries.

**Q: Is this safe for browser and Node.js?**  
A: Yes! BeKind is universal.

---

## Middleware Examples

**Looking for Express.js/Node.js middleware to use BeKind in your API or chat app?**  
**Check the [`examples/`](./examples/) folder for ready-to-copy middleware and integration samples.**

---

## Roadmap

- ✅ Cross-language innocence scoring (collision word disambiguation)
- ✅ Multi-language detection trie (18 languages)
- ✅ Language confusion map for Scandinavian/Germanic disambiguation
- ✅ Additional language packs (Arabic, Russian, Japanese, Korean, Chinese, Dutch)
- ✅ Romanization detection (Hinglish and other transliterated scripts)
- 🚧 Norwegian and Danish trie vocabularies (currently covered via confusion map)
- 🚧 Repeat character compression (normalize "fuuuuccckkkk" → "fuck" before matching, avoiding the need to enumerate elongations in the dictionary)
- 🚧 Phonetic matching (sounds-like detection)
- 🚧 Plugin system for custom detection algorithms

---

## License

MIT — See [LICENSE](https://github.com/grassroots-labs-org/be-kind-profanity-filter/blob/main/LICENSE)

This project is a fork of [BeKind](https://github.com/ayush-jadaun/allprofanity) by Ayush Jadaun, also licensed under MIT.

---

## Contributing

  We welcome contributions! Please see our [CONTRIBUTORS.md](./CONTRIBUTORS.md) for:

- How to add your name to our contributors list
- Guidelines for adding new languages
- Test requirements (must include passing test screenshots in PRs)
- Code of conduct and PR guidelines

# AllProfanity

> **PLEASE BE ADVISED:** This repository contains explicit profanity, slurs, hate speech, and other offensive language across its source files, dictionaries, and test suites. This content exists solely for the purpose of building and testing an effective profanity detection system. The inclusion of these words does not reflect the views of the authors or contributors. Please be aware before browsing the codebase, and sorry in advance on behalf of all of humanity. (WHY ARE THERE SO MANY NASTY WORDS ON THIS PLANET AND WHO NEEDED THEM ALL?!!!)

A blazing-fast, multi-language profanity filter for JavaScript/TypeScript with advanced algorithms (Aho-Corasick, Bloom Filters) delivering **664% faster performance** on large texts, intelligent leet-speak detection, and pattern-based context analysis.

[![CI](https://github.com/grassroots-labs-org/grassroots-profanity-filter/actions/workflows/ci.yml/badge.svg)](https://github.com/grassroots-labs-org/grassroots-profanity-filter/actions/workflows/ci.yml)
[![npm version](https://img.shields.io/npm/v/allprofanity.svg)](https://www.npmjs.com/package/allprofanity)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
![Languages](https://img.shields.io/badge/languages-18%20detected-blue)

[![Coverage](https://grassroots-labs-org.github.io/grassroots-profanity-filter/badges/coverage.svg)](https://github.com/grassroots-labs-org/grassroots-profanity-filter/actions)

---

## What's New in v2.2.0

- **Aho-Corasick Algorithm:** 664% faster on large texts (1KB+) with O(n) multi-pattern matching
- **Bloom Filters:** Lightning-fast probabilistic lookups reduce unnecessary checks
- **Result Caching:** 123x speedup on repeated inputs (perfect for chat apps and forms)
- **Pattern-Based Context Detection:** Reduces false positives in medical/negation contexts
- **Word Boundary Detection:** Smart whole-word matching prevents flagging "assassin" or "assistance"
- **Flexible Configuration:** Choose algorithm and trade-offs based on your use case

[Read the full Performance Analysis →](./docs/SPEED_VS_ACCURACY.md)

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
- **Pattern-Based Context Detection:** Recognizes medical terms ("anal region") and negation patterns ("not bad")
- **Advanced Leet-Speak:** Detects obfuscated profanities (`f#ck`, `a55hole`, `sh1t`, etc.)
- **Comprehensive Coverage:** Catches profanity while minimizing false flags
- **Configurable Strictness:** Tune detection sensitivity to your needs

### Multi-Language & Flexibility

- **Multi-Language Support:** Built-in dictionaries for English, Hindi, French, German, Spanish, Bengali, Tamil, Telugu, Brazilian Portuguese
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

## Installation

```bash
npm install allprofanity
# or
yarn add allprofanity
```

**Generate configuration file (optional):**

```bash
npx allprofanity
# Creates allprofanity.config.json and config.schema.json in your project
```

---

## Quick Start

```typescript
import profanity from 'allprofanity';

// Simple check
profanity.check('This is a clean sentence.');        // false
profanity.check('What the f#ck is this?');           // true (leet-speak detected)
profanity.check('यह एक चूतिया परीक्षण है।');           // true (Hindi)
profanity.check('Ye ek chutiya test hai.');          // true (Hinglish Roman script)
```

---

## Algorithm Configuration

AllProfanity v2.2+ offers multiple algorithms optimized for different use cases. You can configure via **constructor options** or **config file**.

### Configuration Methods

#### Method 1: Constructor Options (Inline)

```typescript
import { AllProfanity } from 'allprofanity';

const filter = new AllProfanity({
  algorithm: { matching: "hybrid" },
  performance: { enableCaching: true }
});
```

#### Method 2: Config File (Recommended)

```bash
# Generate config files in your project
npx allprofanity

# This creates:
# - allprofanity.config.json (main config)
# - config.schema.json (for IDE autocomplete)
```

```typescript
import { AllProfanity } from 'allprofanity';
import config from './allprofanity.config.json';

// Load from generated config file
const filter = AllProfanity.fromConfig(config);

// Or directly from object (no file needed)
const filter2 = AllProfanity.fromConfig({
  algorithm: { matching: "hybrid", useContextAnalysis: true },
  performance: { enableCaching: true, cacheSize: 1000 }
});
```

**Example Config File** (`allprofanity.config.json`):

```json
{
  "algorithm": {
    "matching": "hybrid",
    "useAhoCorasick": true,
    "useBloomFilter": true,
    "useContextAnalysis": true
  },
  "contextAnalysis": {
    "enabled": true,
    "contextWindow": 50,
    "languages": ["en"],
    "scoreThreshold": 0.5
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

**Config File:** Run `npx allprofanity` to generate config files in your project. The JSON schema provides IDE autocomplete and validation.

---

### Quick Configuration Examples

#### 1. Default (Best for General Use)

```typescript
import { AllProfanity } from 'allprofanity';
const filter = new AllProfanity();
// Uses optimized Trie - fast and reliable (~27K ops/sec)
```

#### 2. Large Text Processing (Documents, Articles)

```typescript
const filter = new AllProfanity({
  algorithm: { matching: "aho-corasick" }
});
// 664% faster on 1KB+ texts
```

#### 3. Reduced False Positives (Social Media, Content Moderation)

```typescript
const filter = new AllProfanity({
  algorithm: {
    matching: "hybrid",
    useBloomFilter: true,
    useAhoCorasick: true,
    useContextAnalysis: true
  },
  contextAnalysis: {
    enabled: true,
    contextWindow: 50,
    languages: ["en"],
    scoreThreshold: 0.5
  }
});
// Pattern-based context detection reduces medical/negation false positives
```

#### 4. Repeated Checks (Chat, Forms, APIs)

```typescript
const filter = new AllProfanity({
  performance: {
    enableCaching: true,
    cacheSize: 1000
  }
});
// 123x speedup on cache hits
```

#### 5. Medical/Professional Content

```typescript
const filter = new AllProfanity({
  algorithm: {
    matching: "hybrid",
    useContextAnalysis: true
  },
  contextAnalysis: {
    enabled: true,
    contextWindow: 100,
    scoreThreshold: 0.7  // Higher threshold = less sensitive
  }
});
// Reduces false positives from medical terms using keyword patterns
```

### Performance Characteristics

| Use Case | Algorithm | Speed | Detection | Best For |
|----------|-----------|-------|----------|----------|
| Short texts (<500 chars) | Trie (default) | ~27K ops/sec | Excellent | Chat, comments |
| Large texts (1KB+) | Aho-Corasick | ~9.6K ops/sec | Excellent | Documents, articles |
| Repeated patterns | Any + Caching | 123x faster | Excellent | Forms, validation |
| Content moderation | Hybrid + Context | Moderate | Good (fewer false positives) | Social media, UGC |
| Professional content | Hybrid + Context (strict) | Moderate | Reduced false flags | Medical, academic |

[See detailed benchmarks and comparisons →](./docs/SPEED_VS_ACCURACY.md)

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

### `updateConfig(options: Partial<AllProfanityOptions>): void`

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

### `getConfig(): Partial<AllProfanityOptions>`

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

AllProfanity supports JSON-based configuration for easy setup and deployment. The config file structure supports all algorithm and detection options.

### Full Configuration Schema

```typescript
{
  "algorithm": {
    "matching": "trie" | "aho-corasick" | "hybrid",  // Algorithm selection
    "useAhoCorasick": boolean,                        // Enable Aho-Corasick
    "useBloomFilter": boolean,                        // Enable Bloom Filter
    "useContextAnalysis": boolean                     // Enable context analysis
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
  "contextAnalysis": {
    "enabled": boolean,                               // Enable/disable pattern-based context detection
    "contextWindow": number,                          // Characters around match to check (default: 50)
    "languages": string[],                            // Languages for keyword patterns (default: ["en"])
    "scoreThreshold": number                          // Detection threshold 0-1 (default: 0.5)
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

#### Reduced False Positives (Content Moderation)

```json
{
  "algorithm": {
    "matching": "hybrid",
    "useContextAnalysis": true,
    "useBloomFilter": true
  },
  "contextAnalysis": {
    "enabled": true,
    "contextWindow": 50,
    "scoreThreshold": 0.5
  },
  "performance": { "enableCaching": true }
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
npx allprofanity

# Output:
# ✅ AllProfanity configuration files created!
#
# Created files:
#   📄 allprofanity.config.json - Main configuration
#   📄 config.schema.json - JSON schema for IDE autocomplete
```

**Step 2: Load Config in Your Code**

```typescript
// ES Modules / TypeScript
import { AllProfanity } from 'allprofanity';
import config from './allprofanity.config.json';

const filter = AllProfanity.fromConfig(config);
```

```javascript
// CommonJS (Node.js)
const { AllProfanity } = require('allprofanity');
const config = require('./allprofanity.config.json');

const filter = AllProfanity.fromConfig(config);
```

**Step 3: Customize Config**

Edit `allprofanity.config.json` to enable/disable features. Your IDE will provide autocomplete thanks to the JSON schema!

---

## Cross-Language Innocence Scoring

Many words are profane in one language but perfectly innocent in another. For example, "slut" means "end/finish" in Swedish, "fart" means "speed" in Scandinavian languages, and "bite" is a common English word that's vulgar in French. AllProfanity handles these cross-language collisions automatically using a multi-layer language detection and scoring system.

### Language Detection Architecture

AllProfanity uses a hybrid language detection system with three layers:

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

- **Built-in Profanity Dictionaries:** English, Hindi, French, German, Spanish, Bengali, Tamil, Telugu, Brazilian Portuguese, Dutch, Korean, Chinese, Japanese, Russian, Arabic
- **Language Detection Trie:** English, Spanish, French, German, Italian, Portuguese, Dutch, Turkish, Russian, Arabic, Chinese, Japanese, Korean, Hindi, Bengali, Tamil, Telugu, Swedish (18 languages)
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
import { englishBadWords, hindiBadWords } from 'allprofanity';
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
import profanity, { ProfanitySeverity } from 'allprofanity';

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
A: Yes! AllProfanity is universal.

---

## Middleware Examples

**Looking for Express.js/Node.js middleware to use AllProfanity in your API or chat app?**  
**Check the [`examples/`](./examples/) folder for ready-to-copy middleware and integration samples.**

---

## Roadmap

- ✅ Cross-language innocence scoring (collision word disambiguation)
- ✅ Multi-language detection trie (18 languages)
- ✅ Language confusion map for Scandinavian/Germanic disambiguation
- ✅ Additional language packs (Arabic, Russian, Japanese, Korean, Chinese, Dutch)
- 🚧 Norwegian and Danish trie vocabularies (currently covered via confusion map)
- 🚧 Semantic context analysis for same-language collisions (en→en)
- 🚧 Per-phrase language detection (for code-switched text)
- 🚧 Phonetic matching (sounds-like detection)
- 🚧 Plugin system for custom detection algorithms

---

## License

MIT — See [LICENSE](https://github.com/ayush-jadaun/allprofanity/blob/main/LICENSE)

---

## Contributing

  We welcome contributions! Please see our [CONTRIBUTORS.md](./CONTRIBUTORS.md) for:

- How to add your name to our contributors list
- Guidelines for adding new languages
- Test requirements (must include passing test screenshots in PRs)
- Code of conduct and PR guidelines

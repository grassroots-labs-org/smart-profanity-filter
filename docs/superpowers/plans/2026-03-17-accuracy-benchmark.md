# Accuracy Benchmark Implementation Plan

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a labeled-dataset accuracy benchmark that scores five profanity-filter libraries across five categories (single-language, multi-language, false positives, romanization, semantic context) and reports TP rate, FP rate, and F1 per category per library.

**Architecture:** `accuracy-dataset.ts` exports typed cases and a version constant; `accuracy-benchmark.ts` imports the dataset, wraps each library, runs scoring, and prints/saves results. No Jest tests; script runs via `bun run benchmark/accuracy-benchmark.ts`.

**Tech Stack:** TypeScript, Bun runtime, `leo-profanity@1.9.0`, `bad-words@4.0.0`, `glin-profanity@3.3.0`, `be-kind-profanity-filter` (local src)

---

## File Map

| File | Action | Responsibility |
|---|---|---|
| `benchmark/accuracy-dataset.ts` | Create | Enums, types, all labeled cases, `DATASET_VERSION` constant |
| `benchmark/accuracy-benchmark.ts` | Create | Library wrappers, scoring engine, output formatter, JSON writer |
| `package.json` | Modify | Add `benchmark:accuracy` script |
| `benchmark/accuracy-results.json` | Generated | Output — commit after first successful run |
| `README.md` | Modify | Add Accuracy section after Competitor Comparison |

---

## Task 1: Dataset skeleton — types, enums, and empty arrays

**Files:**
- Create: `benchmark/accuracy-dataset.ts`

- [ ] **Step 1: Create the file with enums, types, and empty category arrays**

```typescript
// benchmark/accuracy-dataset.ts

export const DATASET_VERSION = 1;

export enum Category {
  SINGLE_LANG    = 'single-language',
  MULTI_LANG     = 'multi-language',
  FALSE_POSITIVE = 'false-positive',
  ROMANIZATION   = 'romanization',
  SEMANTIC       = 'semantic-context',
}

export enum Language {
  ENGLISH  = 'english',
  FRENCH   = 'french',
  GERMAN   = 'german',
  SPANISH  = 'spanish',
  HINDI    = 'hindi',
  HINGLISH = 'hinglish',
  BENGALI  = 'bengali',
  TAMIL    = 'tamil',
  TELUGU   = 'telugu',
  JAPANESE = 'japanese',
  MIXED    = 'mixed',
}

export interface AccuracyCase {
  text: string;
  expected: boolean;
  category: Category;
  language?: Language;
  note?: string;
}

export const DATASET: AccuracyCase[] = [];
```

- [ ] **Step 2: Smoke-check it runs**

```bash
bun -e "import('./benchmark/accuracy-dataset.ts').then(m => console.log('cases:', m.DATASET.length, 'version:', m.DATASET_VERSION))"
```

Expected output: `cases: 0 version: 1`

- [ ] **Step 3: Commit**

```bash
git add benchmark/accuracy-dataset.ts
git commit -m "feat: add accuracy dataset skeleton with enums and types"
```

---

## Task 2: Single-language detection cases (~55 cases)

**Files:**
- Modify: `benchmark/accuracy-dataset.ts`

Replace `export const DATASET: AccuracyCase[] = [];` with the full populated array. Add all cases below using array spread. Replace the final export with:

- [ ] **Step 1: Add English profane cases (25)**

Add to DATASET:

```typescript
// ── Single-language: English (profane) ──────────────────────────────────────
{ text: "This is fucking bullshit.", expected: true, category: Category.SINGLE_LANG, language: Language.ENGLISH },
{ text: "What a piece of shit.", expected: true, category: Category.SINGLE_LANG, language: Language.ENGLISH },
{ text: "You stupid asshole.", expected: true, category: Category.SINGLE_LANG, language: Language.ENGLISH },
{ text: "That motherfucker ruined everything.", expected: true, category: Category.SINGLE_LANG, language: Language.ENGLISH },
{ text: "What the hell is wrong with you?", expected: true, category: Category.SINGLE_LANG, language: Language.ENGLISH },
{ text: "You're a goddamn idiot.", expected: true, category: Category.SINGLE_LANG, language: Language.ENGLISH },
{ text: "Shut the fuck up.", expected: true, category: Category.SINGLE_LANG, language: Language.ENGLISH },
{ text: "He's a complete bastard.", expected: true, category: Category.SINGLE_LANG, language: Language.ENGLISH },
{ text: "Holy shit, that was close.", expected: true, category: Category.SINGLE_LANG, language: Language.ENGLISH },
{ text: "She's such a bitch.", expected: true, category: Category.SINGLE_LANG, language: Language.ENGLISH },
{ text: "Go fuck yourself.", expected: true, category: Category.SINGLE_LANG, language: Language.ENGLISH },
{ text: "That's a load of bullshit.", expected: true, category: Category.SINGLE_LANG, language: Language.ENGLISH },
{ text: "What a dipshit.", expected: true, category: Category.SINGLE_LANG, language: Language.ENGLISH },
{ text: "You fucking moron.", expected: true, category: Category.SINGLE_LANG, language: Language.ENGLISH },
{ text: "Damn it to hell.", expected: true, category: Category.SINGLE_LANG, language: Language.ENGLISH },
{ text: "You worthless prick.", expected: true, category: Category.SINGLE_LANG, language: Language.ENGLISH },
{ text: "What a jackass.", expected: true, category: Category.SINGLE_LANG, language: Language.ENGLISH },
{ text: "This is fucking ridiculous.", expected: true, category: Category.SINGLE_LANG, language: Language.ENGLISH },
{ text: "Eat shit and die.", expected: true, category: Category.SINGLE_LANG, language: Language.ENGLISH },
{ text: "Shit, I missed the bus.", expected: true, category: Category.SINGLE_LANG, language: Language.ENGLISH },
{ text: "Fuck off.", expected: true, category: Category.SINGLE_LANG, language: Language.ENGLISH },
{ text: "You piece of shit liar.", expected: true, category: Category.SINGLE_LANG, language: Language.ENGLISH },
{ text: "This is a shitshow.", expected: true, category: Category.SINGLE_LANG, language: Language.ENGLISH },
{ text: "What a dumbass.", expected: true, category: Category.SINGLE_LANG, language: Language.ENGLISH },
{ text: "You clueless twat.", expected: true, category: Category.SINGLE_LANG, language: Language.ENGLISH },
```

- [ ] **Step 2: Add English clean cases (8) and non-English profane cases (20)**

```typescript
// ── Single-language: English (clean) ────────────────────────────────────────
{ text: "Hello, how are you today?", expected: false, category: Category.SINGLE_LANG, language: Language.ENGLISH },
{ text: "The weather is beautiful this morning.", expected: false, category: Category.SINGLE_LANG, language: Language.ENGLISH },
{ text: "I love spending time with my family.", expected: false, category: Category.SINGLE_LANG, language: Language.ENGLISH },
{ text: "The conference starts at nine o'clock.", expected: false, category: Category.SINGLE_LANG, language: Language.ENGLISH },
{ text: "Please pass the salt.", expected: false, category: Category.SINGLE_LANG, language: Language.ENGLISH },
{ text: "The project deadline is next Friday.", expected: false, category: Category.SINGLE_LANG, language: Language.ENGLISH },
{ text: "She graduated with honors last year.", expected: false, category: Category.SINGLE_LANG, language: Language.ENGLISH },
{ text: "The train arrives at platform three.", expected: false, category: Category.SINGLE_LANG, language: Language.ENGLISH },

// ── Single-language: French ──────────────────────────────────────────────────
{ text: "C'est de la merde.", expected: true, category: Category.SINGLE_LANG, language: Language.FRENCH, note: "merde = shit" },
{ text: "Va te faire foutre.", expected: true, category: Category.SINGLE_LANG, language: Language.FRENCH, note: "fuck off" },
{ text: "Quel connard.", expected: true, category: Category.SINGLE_LANG, language: Language.FRENCH, note: "asshole" },
{ text: "Ferme ta gueule.", expected: true, category: Category.SINGLE_LANG, language: Language.FRENCH, note: "shut your mouth" },
{ text: "Putain de merde.", expected: true, category: Category.SINGLE_LANG, language: Language.FRENCH, note: "fucking shit" },
{ text: "Bonjour, comment allez-vous?", expected: false, category: Category.SINGLE_LANG, language: Language.FRENCH },
{ text: "Le chat est sur la table.", expected: false, category: Category.SINGLE_LANG, language: Language.FRENCH },

// ── Single-language: German ──────────────────────────────────────────────────
{ text: "Das ist Scheiße.", expected: true, category: Category.SINGLE_LANG, language: Language.GERMAN, note: "shit" },
{ text: "Du Arschloch.", expected: true, category: Category.SINGLE_LANG, language: Language.GERMAN, note: "asshole" },
{ text: "Verpiss dich.", expected: true, category: Category.SINGLE_LANG, language: Language.GERMAN, note: "piss off" },
{ text: "Fick dich.", expected: true, category: Category.SINGLE_LANG, language: Language.GERMAN, note: "fuck you" },
{ text: "Du verdammte Scheiße.", expected: true, category: Category.SINGLE_LANG, language: Language.GERMAN },
{ text: "Guten Morgen, wie geht es Ihnen?", expected: false, category: Category.SINGLE_LANG, language: Language.GERMAN },
{ text: "Das Wetter ist heute sehr schön.", expected: false, category: Category.SINGLE_LANG, language: Language.GERMAN },

// ── Single-language: Spanish ─────────────────────────────────────────────────
{ text: "Esto es una mierda.", expected: true, category: Category.SINGLE_LANG, language: Language.SPANISH, note: "this is shit" },
{ text: "Hijo de puta.", expected: true, category: Category.SINGLE_LANG, language: Language.SPANISH, note: "son of a bitch" },
{ text: "Que te jodan.", expected: true, category: Category.SINGLE_LANG, language: Language.SPANISH, note: "fuck you" },
{ text: "Me cago en todo.", expected: true, category: Category.SINGLE_LANG, language: Language.SPANISH, note: "I shit on everything" },
{ text: "Eres un gilipollas.", expected: true, category: Category.SINGLE_LANG, language: Language.SPANISH, note: "you're an idiot/asshole" },
{ text: "Buenos días, ¿cómo está usted?", expected: false, category: Category.SINGLE_LANG, language: Language.SPANISH },
{ text: "La casa es muy bonita.", expected: false, category: Category.SINGLE_LANG, language: Language.SPANISH },

// ── Single-language: Hindi (Devanagari) ──────────────────────────────────────
{ text: "यह चूतिया है।", expected: true, category: Category.SINGLE_LANG, language: Language.HINDI, note: "strong slang" },
{ text: "मादरचोद।", expected: true, category: Category.SINGLE_LANG, language: Language.HINDI, note: "motherfucker" },
{ text: "साला कमीना।", expected: true, category: Category.SINGLE_LANG, language: Language.HINDI, note: "scoundrel/bastard" },
{ text: "भड़वा।", expected: true, category: Category.SINGLE_LANG, language: Language.HINDI, note: "pimp/profane" },
{ text: "हरामी कहीं का।", expected: true, category: Category.SINGLE_LANG, language: Language.HINDI, note: "bastard" },
{ text: "नमस्ते, आप कैसे हैं?", expected: false, category: Category.SINGLE_LANG, language: Language.HINDI },
```

- [ ] **Step 3: Verify count**

```bash
bun -e "import('./benchmark/accuracy-dataset.ts').then(m => { const c = m.DATASET.filter(x => x.category === m.Category.SINGLE_LANG); console.log('single-lang cases:', c.length, 'profane:', c.filter(x=>x.expected).length, 'clean:', c.filter(x=>!x.expected).length) })"
```

Expected: `single-lang cases: 60  profane: 45  clean: 15`
(Note: non-English cases have no clean counterparts for en-only libraries — that is intentional)

- [ ] **Step 4: Commit**

```bash
git add benchmark/accuracy-dataset.ts
git commit -m "feat: add single-language detection cases to accuracy dataset (59 cases)"
```

---

## Task 3: Multi-language cases (~25 cases)

**Files:**
- Modify: `benchmark/accuracy-dataset.ts`

- [ ] **Step 1: Add multi-language cases**

```typescript
// ── Multi-language (profane) ─────────────────────────────────────────────────
{ text: "This is such chutiya behavior.", expected: true, category: Category.MULTI_LANG, language: Language.MIXED, note: "English + Hinglish slang" },
{ text: "Kya yaar, such a bastard.", expected: true, category: Category.MULTI_LANG, language: Language.MIXED },
{ text: "What a sala harami you are.", expected: true, category: Category.MULTI_LANG, language: Language.MIXED },
{ text: "Ce film est really fucking bad.", expected: true, category: Category.MULTI_LANG, language: Language.MIXED, note: "French + English" },
{ text: "Esto es muy bullshit honestly.", expected: true, category: Category.MULTI_LANG, language: Language.MIXED, note: "Spanish + English" },
{ text: "Das ist so fucking Scheiße.", expected: true, category: Category.MULTI_LANG, language: Language.MIXED, note: "German + English" },
{ text: "This madarchod ruined the project.", expected: true, category: Category.MULTI_LANG, language: Language.MIXED, note: "English + Hinglish profanity" },
{ text: "Merde, this fucking day.", expected: true, category: Category.MULTI_LANG, language: Language.MIXED, note: "French + English" },
{ text: "Ugh, que mierda, I'm so done.", expected: true, category: Category.MULTI_LANG, language: Language.MIXED, note: "Spanish + English" },
{ text: "Saala yaar tu toh bastard hai.", expected: true, category: Category.MULTI_LANG, language: Language.MIXED },
{ text: "Yeh sab bakwaas aur bullshit hai.", expected: true, category: Category.MULTI_LANG, language: Language.MIXED },
{ text: "Mon dieu, what a shitty day.", expected: true, category: Category.MULTI_LANG, language: Language.MIXED },
{ text: "Behenchod bhai, this shit is crazy.", expected: true, category: Category.MULTI_LANG, language: Language.MIXED },
{ text: "Scheiße man, this is fucked up.", expected: true, category: Category.MULTI_LANG, language: Language.MIXED },
{ text: "Hijo de puta, I can't believe this.", expected: true, category: Category.MULTI_LANG, language: Language.MIXED },
{ text: "What the fuck, yaar this sucks.", expected: true, category: Category.MULTI_LANG, language: Language.MIXED },
{ text: "This project is total bakwaas aur shit.", expected: true, category: Category.MULTI_LANG, language: Language.MIXED },
{ text: "Por favor, this is such bullshit.", expected: true, category: Category.MULTI_LANG, language: Language.MIXED },
{ text: "Putain, that's fucking terrible.", expected: true, category: Category.MULTI_LANG, language: Language.MIXED },
{ text: "Ek dum chutiya move that was.", expected: true, category: Category.MULTI_LANG, language: Language.MIXED },

// ── Multi-language (clean) ───────────────────────────────────────────────────
{ text: "Bonjour tout le monde, hello everyone.", expected: false, category: Category.MULTI_LANG, language: Language.MIXED },
{ text: "Gracias for your help, thank you so much.", expected: false, category: Category.MULTI_LANG, language: Language.MIXED },
{ text: "Kya haal hai yaar, how are you doing?", expected: false, category: Category.MULTI_LANG, language: Language.MIXED },
{ text: "Das ist gut, this is really good work.", expected: false, category: Category.MULTI_LANG, language: Language.MIXED },
{ text: "Merci beaucoup, thanks a lot friend.", expected: false, category: Category.MULTI_LANG, language: Language.MIXED },
```

- [ ] **Step 2: Verify**

```bash
bun -e "import('./benchmark/accuracy-dataset.ts').then(m => { const c = m.DATASET.filter(x => x.category === m.Category.MULTI_LANG); console.log('multi-lang:', c.length, 'profane:', c.filter(x=>x.expected).length, 'clean:', c.filter(x=>!x.expected).length) })"
```

Expected: `multi-lang: 25  profane: 20  clean: 5`

- [ ] **Step 3: Commit**

```bash
git add benchmark/accuracy-dataset.ts
git commit -m "feat: add multi-language detection cases to accuracy dataset (25 cases)"
```

---

## Task 4: False positive cases (~40 clean only)

**Files:**
- Modify: `benchmark/accuracy-dataset.ts`

- [ ] **Step 1: Add false positive cases (all expected: false)**

```typescript
// ── False positives / innocent words (all clean) ─────────────────────────────
{ text: "The assassination of Archduke Franz Ferdinand started WWI.", expected: false, category: Category.FALSE_POSITIVE, language: Language.ENGLISH, note: "contains 'ass' via word boundary" },
{ text: "Scunthorpe United FC plays in the EFL.", expected: false, category: Category.FALSE_POSITIVE, language: Language.ENGLISH, note: "classic Scunthorpe problem" },
{ text: "Classic cocktail recipes from the 1920s.", expected: false, category: Category.FALSE_POSITIVE, language: Language.ENGLISH, note: "cock inside cocktail" },
{ text: "Peacock feathers are beautifully iridescent.", expected: false, category: Category.FALSE_POSITIVE, language: Language.ENGLISH, note: "cock inside peacock" },
{ text: "The bass guitar sounds incredible in this mix.", expected: false, category: Category.FALSE_POSITIVE, language: Language.ENGLISH },
{ text: "I will assume full responsibility for the error.", expected: false, category: Category.FALSE_POSITIVE, language: Language.ENGLISH, note: "ass inside assume" },
{ text: "The analyst noted several key assumptions.", expected: false, category: Category.FALSE_POSITIVE, language: Language.ENGLISH, note: "ass inside assumptions" },
{ text: "Cockney rhyming slang originated in East London.", expected: false, category: Category.FALSE_POSITIVE, language: Language.ENGLISH, note: "cock inside Cockney" },
{ text: "The patient underwent an anal fistula repair procedure.", expected: false, category: Category.FALSE_POSITIVE, language: Language.ENGLISH, note: "medical/anatomical" },
{ text: "Rectal examination is a standard diagnostic procedure.", expected: false, category: Category.FALSE_POSITIVE, language: Language.ENGLISH, note: "medical" },
{ text: "The word 'slut' in Swedish simply means 'end' or 'finish'.", expected: false, category: Category.FALSE_POSITIVE, language: Language.ENGLISH, note: "cross-language false friend" },
{ text: "In Norwegian, 'fart' means 'speed' or 'velocity'.", expected: false, category: Category.FALSE_POSITIVE, language: Language.ENGLISH, note: "cross-language false friend" },
{ text: "In French, 'merde' is a strong expletive — equivalent to the English f-word.", expected: false, category: Category.FALSE_POSITIVE, language: Language.ENGLISH, note: "educational metalinguistic use" },
{ text: "The therapist asked about the patient's sexual history as part of the intake form.", expected: false, category: Category.FALSE_POSITIVE, language: Language.ENGLISH, note: "clinical" },
{ text: "Masturbation is a normal part of human sexual development.", expected: false, category: Category.FALSE_POSITIVE, language: Language.ENGLISH, note: "clinical/educational" },
{ text: "Penistone is a market town and civil parish in South Yorkshire.", expected: false, category: Category.FALSE_POSITIVE, language: Language.ENGLISH, note: "proper noun" },
{ text: "Twatt is a village in the Orkney Islands of Scotland.", expected: false, category: Category.FALSE_POSITIVE, language: Language.ENGLISH, note: "proper noun" },
{ text: "Dick Cheney served as the 46th Vice President of the United States.", expected: false, category: Category.FALSE_POSITIVE, language: Language.ENGLISH, note: "proper noun (first name)" },
{ text: "The cummerbund is a broad waistband worn with formal attire.", expected: false, category: Category.FALSE_POSITIVE, language: Language.ENGLISH },
{ text: "The kumquat is a small citrus fruit native to South Asia.", expected: false, category: Category.FALSE_POSITIVE, language: Language.ENGLISH },
{ text: "Pussy willows are among the first plants to bloom in spring.", expected: false, category: Category.FALSE_POSITIVE, language: Language.ENGLISH, note: "botanical" },
{ text: "A cock is the adult male of the domestic chicken.", expected: false, category: Category.FALSE_POSITIVE, language: Language.ENGLISH, note: "cock as rooster, zoological" },
{ text: "The ballcock controls the water level in a toilet cistern.", expected: false, category: Category.FALSE_POSITIVE, language: Language.ENGLISH, note: "plumbing component" },
{ text: "The prick of the needle was barely felt during the injection.", expected: false, category: Category.FALSE_POSITIVE, language: Language.ENGLISH, note: "medical/physical" },
{ text: "She passed with distinction in the classical music examination.", expected: false, category: Category.FALSE_POSITIVE, language: Language.ENGLISH },
{ text: "The pianist gave a remarkable performance at Carnegie Hall.", expected: false, category: Category.FALSE_POSITIVE, language: Language.ENGLISH },
{ text: "Please disregard the previous email and await the corrected version.", expected: false, category: Category.FALSE_POSITIVE, language: Language.ENGLISH },
{ text: "The associate will manage your account going forward.", expected: false, category: Category.FALSE_POSITIVE, language: Language.ENGLISH },
{ text: "The company plans to penetrate the Southeast Asian market.", expected: false, category: Category.FALSE_POSITIVE, language: Language.ENGLISH, note: "business term" },
{ text: "Cox's orange pippin is a popular apple variety in England.", expected: false, category: Category.FALSE_POSITIVE, language: Language.ENGLISH, note: "proper noun" },
{ text: "The bastard file is a medium-cut metalworking file used in engineering.", expected: false, category: Category.FALSE_POSITIVE, language: Language.ENGLISH, note: "technical term in metalworking" },
{ text: "Helium, lithium, and boron are elements on the periodic table.", expected: false, category: Category.FALSE_POSITIVE, language: Language.ENGLISH },
{ text: "The clitoral nerve is an important structure in human anatomy.", expected: false, category: Category.FALSE_POSITIVE, language: Language.ENGLISH, note: "anatomical" },
{ text: "She kissed him gently on the cheek before leaving.", expected: false, category: Category.FALSE_POSITIVE, language: Language.ENGLISH },
{ text: "The contractor assessed the structural damage to the building.", expected: false, category: Category.FALSE_POSITIVE, language: Language.ENGLISH },
{ text: "His assistant coordinated all the travel arrangements.", expected: false, category: Category.FALSE_POSITIVE, language: Language.ENGLISH, note: "ass inside assistant" },
{ text: "The research examined attitudes toward sexual health education.", expected: false, category: Category.FALSE_POSITIVE, language: Language.ENGLISH, note: "academic framing" },
{ text: "Bitchfield is a small village and civil parish in Lincolnshire.", expected: false, category: Category.FALSE_POSITIVE, language: Language.ENGLISH, note: "proper noun" },
{ text: "The orchestra performed Beethoven's Ninth Symphony flawlessly.", expected: false, category: Category.FALSE_POSITIVE, language: Language.ENGLISH },
{ text: "The classy restaurant earned a Michelin star this year.", expected: false, category: Category.FALSE_POSITIVE, language: Language.ENGLISH, note: "class inside classy" },
```

- [ ] **Step 2: Verify**

```bash
bun -e "import('./benchmark/accuracy-dataset.ts').then(m => { const c = m.DATASET.filter(x => x.category === m.Category.FALSE_POSITIVE); console.log('false-positives:', c.length, 'all clean?', c.every(x=>!x.expected)) })"
```

Expected: `false-positives: 40  all clean? true`

- [ ] **Step 3: Commit**

```bash
git add benchmark/accuracy-dataset.ts
git commit -m "feat: add false positive / innocent words cases to accuracy dataset (40 cases)"
```

---

## Task 5: Romanization cases (~30 cases)

**Files:**
- Modify: `benchmark/accuracy-dataset.ts`

- [ ] **Step 1: Add romanization profane cases**

```typescript
// ── Romanization (profane) ───────────────────────────────────────────────────
// Hinglish
{ text: "madarchod sala kya kar raha hai.", expected: true, category: Category.ROMANIZATION, language: Language.HINGLISH, note: "motherfucker in Roman Hindi" },
{ text: "chutiya mat ban yaar.", expected: true, category: Category.ROMANIZATION, language: Language.HINGLISH, note: "don't be an idiot (profane Hindi)" },
{ text: "bhosdike kya problem hai teri.", expected: true, category: Category.ROMANIZATION, language: Language.HINGLISH, note: "Hindi profanity" },
{ text: "teri gaand maar.", expected: true, category: Category.ROMANIZATION, language: Language.HINGLISH, note: "profane Hindi" },
{ text: "haramzada kahin ka.", expected: true, category: Category.ROMANIZATION, language: Language.HINGLISH, note: "bastard in Roman Hindi" },
{ text: "behenchod yaar kya baat hai.", expected: true, category: Category.ROMANIZATION, language: Language.HINGLISH, note: "sister-fucker (Hindi profanity)" },
{ text: "saali randi hai woh.", expected: true, category: Category.ROMANIZATION, language: Language.HINGLISH, note: "bitch/prostitute slang" },
{ text: "kutiya ki tarah karti hai.", expected: true, category: Category.ROMANIZATION, language: Language.HINGLISH, note: "like a bitch" },

// Bengali
{ text: "shala magi boro jhamelay eso na.", expected: true, category: Category.ROMANIZATION, language: Language.BENGALI, note: "Bengali profanity" },
{ text: "banchot abar ashe.", expected: true, category: Category.ROMANIZATION, language: Language.BENGALI, note: "Bengali profanity" },
{ text: "mader chot ki bolcho.", expected: true, category: Category.ROMANIZATION, language: Language.BENGALI, note: "Bengali profanity" },

// Tamil
{ text: "otha punda thayoli.", expected: true, category: Category.ROMANIZATION, language: Language.TAMIL, note: "Tamil profanity" },
{ text: "thevidiya paiyan.", expected: true, category: Category.ROMANIZATION, language: Language.TAMIL, note: "Tamil — son of a prostitute" },
{ text: "punda mayiru.", expected: true, category: Category.ROMANIZATION, language: Language.TAMIL, note: "Tamil profanity" },

// Telugu
{ text: "lanjodaka poni.", expected: true, category: Category.ROMANIZATION, language: Language.TELUGU, note: "Telugu profanity" },
{ text: "dengu ra nuvvu.", expected: true, category: Category.ROMANIZATION, language: Language.TELUGU, note: "Telugu profanity" },
{ text: "naakodaka.", expected: true, category: Category.ROMANIZATION, language: Language.TELUGU, note: "Telugu profanity" },

// Japanese (Romaji)
{ text: "kichiku me.", expected: true, category: Category.ROMANIZATION, language: Language.JAPANESE, note: "brute/beast, Japanese profanity" },
{ text: "kono kuso yaro.", expected: true, category: Category.ROMANIZATION, language: Language.JAPANESE, note: "this shit bastard" },
{ text: "shine baka.", expected: true, category: Category.ROMANIZATION, language: Language.JAPANESE, note: "die idiot — strong Japanese insult" },
```

- [ ] **Step 2: Add romanization clean cases**

```typescript
// ── Romanization (clean) ─────────────────────────────────────────────────────
{ text: "chai peene chalo yaar bahut thandi hai aaj.", expected: false, category: Category.ROMANIZATION, language: Language.HINGLISH, note: "come have tea, it is cold today" },
{ text: "kya haal hai bhai sab theek hai na.", expected: false, category: Category.ROMANIZATION, language: Language.HINGLISH, note: "how are you brother, is everything okay" },
{ text: "aaj mausam bahut achha hai bahar chalte hain.", expected: false, category: Category.ROMANIZATION, language: Language.HINGLISH, note: "weather is nice, let's go out" },
{ text: "tumi kemon acho aaj ke ami bhalo achi dhonnobad.", expected: false, category: Category.ROMANIZATION, language: Language.BENGALI, note: "how are you, I am well, thank you" },
{ text: "ami dhaka theke eshechi apnar ki naam.", expected: false, category: Category.ROMANIZATION, language: Language.BENGALI, note: "I have come from Dhaka, what is your name" },
{ text: "watashi wa nihongo wo benkyou shite imasu.", expected: false, category: Category.ROMANIZATION, language: Language.JAPANESE, note: "I am studying Japanese" },
{ text: "kyou wa totemo ii tenki desu ne.", expected: false, category: Category.ROMANIZATION, language: Language.JAPANESE, note: "it is very nice weather today" },
{ text: "naan romba nalla irukken vandanam.", expected: false, category: Category.ROMANIZATION, language: Language.TAMIL, note: "I am very well, greetings" },
{ text: "meeru ela unnaru naaku chala santosham.", expected: false, category: Category.ROMANIZATION, language: Language.TELUGU, note: "how are you, I am very happy" },
{ text: "mujhe bahut accha laga yeh dekhkar ki tum aa gaye.", expected: false, category: Category.ROMANIZATION, language: Language.HINGLISH, note: "I was very happy to see you come" },
```

- [ ] **Step 3: Verify**

```bash
bun -e "import('./benchmark/accuracy-dataset.ts').then(m => { const c = m.DATASET.filter(x => x.category === m.Category.ROMANIZATION); console.log('romanization:', c.length, 'profane:', c.filter(x=>x.expected).length, 'clean:', c.filter(x=>!x.expected).length) })"
```

Expected: `romanization: 30  profane: 20  clean: 10`

- [ ] **Step 4: Commit**

```bash
git add benchmark/accuracy-dataset.ts
git commit -m "feat: add romanization cases to accuracy dataset (30 cases, 5 languages)"
```

---

## Task 6: Semantic context cases (~25 cases)

**Files:**
- Modify: `benchmark/accuracy-dataset.ts`

- [ ] **Step 1: Add semantic context profane cases (expected: true — should still be caught)**

These contain real profanity; a context-aware system should still flag them:

```typescript
// ── Semantic context (profane — should still be caught) ──────────────────────
{ text: "Fuck cancer, I'm so angry about this diagnosis.", expected: true, category: Category.SEMANTIC, language: Language.ENGLISH, note: "empathetic framing — still contains profanity" },
{ text: "Shit, I dropped my phone and the screen cracked.", expected: true, category: Category.SEMANTIC, language: Language.ENGLISH, note: "exclamation — still profanity" },
{ text: "That was a fucking brilliant performance tonight.", expected: true, category: Category.SEMANTIC, language: Language.ENGLISH, note: "positive emphasis — still profanity" },
{ text: "I'm so goddamn proud of what you've accomplished.", expected: true, category: Category.SEMANTIC, language: Language.ENGLISH, note: "positive — still profanity" },
{ text: "Holy shit, you actually pulled it off!", expected: true, category: Category.SEMANTIC, language: Language.ENGLISH, note: "positive exclamation" },
{ text: "That bastard finally got what he deserved.", expected: true, category: Category.SEMANTIC, language: Language.ENGLISH, note: "satisfying outcome — still profanity" },
{ text: "What the fuck, how did you even manage that?", expected: true, category: Category.SEMANTIC, language: Language.ENGLISH, note: "surprise/admiration — still profanity" },
{ text: "I'm fucking exhausted but so happy we finished.", expected: true, category: Category.SEMANTIC, language: Language.ENGLISH, note: "positive context — still profanity" },
{ text: "Get that piece of shit code out of the codebase.", expected: true, category: Category.SEMANTIC, language: Language.ENGLISH, note: "technical context — still profanity" },
{ text: "Damn, that sunset is absolutely breathtaking.", expected: true, category: Category.SEMANTIC, language: Language.ENGLISH, note: "positive exclamation" },
```

- [ ] **Step 2: Add semantic context clean cases (expected: false — should NOT be flagged)**

These contain dictionary words but the context makes them clearly non-profane:

```typescript
// ── Semantic context (clean — should NOT be flagged) ─────────────────────────
{ text: "The word 'fuck' has uncertain etymological origins.", expected: false, category: Category.SEMANTIC, language: Language.ENGLISH, note: "metalinguistic / educational" },
{ text: "In Swedish, the word 'slut' means 'end' and appears on road signs.", expected: false, category: Category.SEMANTIC, language: Language.ENGLISH, note: "cross-language educational" },
{ text: "The patient was diagnosed with an anal fissure and prescribed treatment.", expected: false, category: Category.SEMANTIC, language: Language.ENGLISH, note: "medical/clinical" },
{ text: "He quoted the Joan Jett lyric: 'I don't give a damn about my bad reputation.'", expected: false, category: Category.SEMANTIC, language: Language.ENGLISH, note: "quotation of song lyric" },
{ text: "Rectal cancer screening is recommended for adults over age 45.", expected: false, category: Category.SEMANTIC, language: Language.ENGLISH, note: "medical guideline" },
{ text: "Don't say the word 'shit' in front of the children, please.", expected: false, category: Category.SEMANTIC, language: Language.ENGLISH, note: "metalinguistic mention, not use" },
{ text: "The cock crowed three times before dawn on the farm.", expected: false, category: Category.SEMANTIC, language: Language.ENGLISH, note: "cock = rooster, agricultural" },
{ text: "Research shows that swearing can reduce pain perception in some individuals.", expected: false, category: Category.SEMANTIC, language: Language.ENGLISH, note: "academic framing, no profanity used" },
{ text: "Shakespeare's plays contain numerous references to 'damnation' and 'hell'.", expected: false, category: Category.SEMANTIC, language: Language.ENGLISH, note: "literary/historical analysis" },
{ text: "She's not a bitch at all — she's just very direct and assertive.", expected: false, category: Category.SEMANTIC, language: Language.ENGLISH, note: "negation + reframing" },
{ text: "I don't think that presentation was total shit, actually — it had some good points.", expected: false, category: Category.SEMANTIC, language: Language.ENGLISH, note: "negated, backhanded praise" },
{ text: "The prick of conscience he felt kept him awake all night.", expected: false, category: Category.SEMANTIC, language: Language.ENGLISH, note: "prick = sting of emotion, idiomatic" },
{ text: "The bastard sword is a type of late-medieval longsword.", expected: false, category: Category.SEMANTIC, language: Language.ENGLISH, note: "historical/weapons terminology" },
{ text: "The film's excessive use of profanity was noted by critics as gratuitous.", expected: false, category: Category.SEMANTIC, language: Language.ENGLISH, note: "meta-commentary, no direct profanity" },
{ text: "Therapy helped her find language for emotions she couldn't express before, including anger.", expected: false, category: Category.SEMANTIC, language: Language.ENGLISH, note: "clinical context, no profanity" },
```

- [ ] **Step 3: Verify**

```bash
bun -e "import('./benchmark/accuracy-dataset.ts').then(m => { const c = m.DATASET.filter(x => x.category === m.Category.SEMANTIC); console.log('semantic:', c.length, 'profane:', c.filter(x=>x.expected).length, 'clean:', c.filter(x=>!x.expected).length); console.log('total dataset:', m.DATASET.length) })"
```

Expected: `semantic: 25  profane: 10  clean: 15`
And: `total dataset: ~189` (actual number will be exact)

- [ ] **Step 4: Commit**

```bash
git add benchmark/accuracy-dataset.ts
git commit -m "feat: add semantic context cases to accuracy dataset (25 cases)"
```

---

## Task 7: Scoring engine and library wrappers

**Files:**
- Create: `benchmark/accuracy-benchmark.ts`

- [ ] **Step 1: Create the file with all imports and library wrappers**

```typescript
// benchmark/accuracy-benchmark.ts
import { performance } from "perf_hooks";
import * as fs from "fs/promises";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

import { BeKind } from "../src/index.js";
// @ts-ignore CJS interop
import leoProfanity from "leo-profanity";
import { Filter as BadWordsFilter } from "bad-words";
import { ProfanityFilter as GlinFilter } from "glin-profanity";

import {
  DATASET,
  DATASET_VERSION,
  Category,
  Language,
  type AccuracyCase,
} from "./accuracy-dataset.js";

// ── Library instances ────────────────────────────────────────────────────────

const bekind = new BeKind({ silent: true });

const bekindContext = new BeKind({
  silent: true,
  contextAnalysis: { enabled: true },
  algorithm: { useContextAnalysis: true },
});

const leo = leoProfanity as { check: (t: string) => boolean };

const badWords = new BadWordsFilter();

const glinBasic = new GlinFilter({
  detectLeetspeak: false,
  enableContextAware: false,
});

const glinEnhanced = new GlinFilter({
  detectLeetspeak: true,
  enableContextAware: true,
});

// ── Library checker type ─────────────────────────────────────────────────────

interface LibraryChecker {
  name: string;
  check: (text: string) => boolean;
  /** Categories this library supports. If undefined, it supports all. */
  supports?: Set<Category>;
  /** For SINGLE_LANG: which languages are supported. If undefined, all. */
  supportedLanguages?: Set<Language>;
}

const EN_LANGS = new Set([Language.ENGLISH]);

const LIBRARIES: LibraryChecker[] = [
  {
    name: "be-kind",
    check: (t) => bekind.check(t),
    supports: new Set([Category.SINGLE_LANG, Category.MULTI_LANG, Category.FALSE_POSITIVE, Category.ROMANIZATION]),
  },
  {
    name: "leo",
    check: (t) => leo.check(t),
    supports: new Set([Category.SINGLE_LANG, Category.FALSE_POSITIVE]),
    supportedLanguages: EN_LANGS,
  },
  {
    name: "bad-words",
    check: (t) => { try { return badWords.isProfane(t); } catch { return false; } },
    supports: new Set([Category.SINGLE_LANG, Category.FALSE_POSITIVE]),
    supportedLanguages: EN_LANGS,
  },
  {
    name: "glin (basic)",
    check: (t) => glinBasic.isProfane(t),
    supports: new Set([Category.SINGLE_LANG, Category.FALSE_POSITIVE]),
    supportedLanguages: EN_LANGS,
  },
  {
    name: "glin (enhanced)",
    check: (t) => glinEnhanced.isProfane(t),
    supports: new Set([Category.SINGLE_LANG, Category.FALSE_POSITIVE, Category.SEMANTIC]),
    supportedLanguages: EN_LANGS,
  },
  // be-kind with context analysis — only for SEMANTIC category
  {
    name: "be-kind (ctx)",
    check: (t) => bekindContext.check(t),
    supports: new Set([Category.SEMANTIC]),
  },
];
```

- [ ] **Step 2: Add scoring types and engine**

```typescript
// ── Types ────────────────────────────────────────────────────────────────────

interface CategoryResult {
  library: string;
  truePositives: number;
  falseNegatives: number;
  falsePositives: number;
  trueNegatives: number;
  tpRate: number | null;   // null = no profane cases
  fpRate: number | null;   // null = no clean cases
  precision: number | null;
  f1: number | null;
  casesScored: number;
  skipped: boolean;        // true = N/A
}

interface CategorySummary {
  category: Category;
  totalCases: number;
  profaneCases: number;
  cleanCases: number;
  results: CategoryResult[];
}

interface LibrarySummary {
  library: string;
  overallF1: number | null;
  categoriesScored: number;
  avgFpRate: number | null;
}

// ── Scoring engine ───────────────────────────────────────────────────────────

function scoreCases(
  cases: AccuracyCase[],
  checker: (text: string) => boolean
): Omit<CategoryResult, "library" | "skipped"> {
  let tp = 0, fn = 0, fp = 0, tn = 0;

  for (const c of cases) {
    const predicted = checker(c.text);
    if (c.expected && predicted)  tp++;
    if (c.expected && !predicted) fn++;
    if (!c.expected && predicted) fp++;
    if (!c.expected && !predicted) tn++;
  }

  const profane = tp + fn;
  const clean   = fp + tn;
  const flagged = tp + fp;

  const tpRate    = profane > 0 ? tp / profane : null;
  const fpRate    = clean   > 0 ? fp / clean   : null;
  const precision = flagged > 0 ? tp / flagged  : null;
  const f1 = (tpRate !== null && precision !== null && (tpRate + precision) > 0)
    ? (2 * precision * tpRate) / (precision + tpRate)
    : null;

  return {
    truePositives: tp,
    falseNegatives: fn,
    falsePositives: fp,
    trueNegatives: tn,
    tpRate,
    fpRate,
    precision,
    f1,
    casesScored: cases.length,
  };
}

function runCategory(
  category: Category,
  allCases: AccuracyCase[],
  libraries: LibraryChecker[]
): CategorySummary {
  const cases = allCases.filter(c => c.category === category);
  const profaneCases = cases.filter(c => c.expected).length;
  const cleanCases   = cases.filter(c => !c.expected).length;

  const results: CategoryResult[] = libraries.map(lib => {
    // Check if library supports this category
    if (lib.supports && !lib.supports.has(category)) {
      return {
        library: lib.name, skipped: true,
        truePositives: 0, falseNegatives: 0, falsePositives: 0, trueNegatives: 0,
        tpRate: null, fpRate: null, precision: null, f1: null, casesScored: 0,
      };
    }

    // Filter by language if needed
    let libCases = cases;
    if (lib.supportedLanguages && category === Category.SINGLE_LANG) {
      libCases = cases.filter(c =>
        !c.language || lib.supportedLanguages!.has(c.language)
      );
    }

    const scored = scoreCases(libCases, lib.check);
    return { library: lib.name, skipped: false, ...scored };
  });

  return { category, totalCases: cases.length, profaneCases, cleanCases, results };
}
```

- [ ] **Step 3: Verify scoring engine with a quick inline test**

```bash
bun -e "
import('./benchmark/accuracy-benchmark.ts').then(() => {
  console.log('imports OK — scoring engine loaded');
}).catch(e => console.error('error:', e.message))
"
```

Expected: `imports OK — scoring engine loaded`

- [ ] **Step 4: Commit**

```bash
git add benchmark/accuracy-benchmark.ts
git commit -m "feat: add accuracy benchmark scoring engine and library wrappers"
```

---

## Task 8: Output formatter, main runner, JSON writer

**Files:**
- Modify: `benchmark/accuracy-benchmark.ts`

- [ ] **Step 1: Add output formatter**

```typescript
// ── Output formatter ─────────────────────────────────────────────────────────

const pct = (v: number | null) => v === null ? "—" : `${Math.round(v * 100)}%`;
const f1fmt = (v: number | null) => v === null ? "—" : v.toFixed(2);

function printCategoryTable(summary: CategorySummary): void {
  const { category, totalCases, profaneCases, cleanCases, results } = summary;
  const header = `[ ${category} — ${totalCases} cases (${profaneCases} profane, ${cleanCases} clean) ]`;
  const col = 20;
  const label = 24;

  console.log(`\n${header}`);
  console.log("Library".padEnd(label) + "TP Rate".padStart(col) + "FP Rate".padStart(col) + "F1".padStart(col));
  console.log("-".repeat(label + col * 3));

  for (const r of results) {
    if (r.skipped) {
      console.log(r.library.padEnd(label) + "N/A".padStart(col) + "N/A".padStart(col) + "N/A".padStart(col));
    } else {
      const suffix = r.library.includes("(ctx)") ? " *" : "";
      console.log(
        (r.library + suffix).padEnd(label) +
        pct(r.tpRate).padStart(col) +
        pct(r.fpRate).padStart(col) +
        f1fmt(r.f1).padStart(col)
      );
    }
  }
}

function buildSummary(categorySummaries: CategorySummary[], libs: LibraryChecker[]): LibrarySummary[] {
  return libs.map(lib => {
    const f1s: number[] = [];
    const fpRates: number[] = [];

    for (const cat of categorySummaries) {
      const r = cat.results.find(x => x.library === lib.name);
      if (!r || r.skipped) continue;
      if (r.f1 !== null) f1s.push(r.f1);
      if (r.fpRate !== null) fpRates.push(r.fpRate);
    }

    return {
      library: lib.name,
      overallF1: f1s.length > 0 ? f1s.reduce((a, b) => a + b, 0) / f1s.length : null,
      categoriesScored: f1s.length,
      avgFpRate: fpRates.length > 0 ? fpRates.reduce((a, b) => a + b, 0) / fpRates.length : null,
    };
  });
}

function printSummaryTable(summaries: LibrarySummary[]): void {
  const col = 20;
  const label = 24;
  console.log("\n[ Summary — macro-average F1 across F1-computable scored categories ]");
  console.log("Library".padEnd(label) + "Overall F1".padStart(col) + "FP Rate (avg)".padStart(col));
  console.log("-".repeat(label + col * 2));
  for (const s of summaries) {
    const f1str = s.overallF1 !== null
      ? `${s.overallF1.toFixed(2)}  (${s.categoriesScored} cat)`
      : "—";
    const fpStr = s.avgFpRate !== null ? pct(s.avgFpRate) : "—";
    console.log(s.library.padEnd(label) + f1str.padStart(col) + fpStr.padStart(col));
  }
  console.log("\n* be-kind (ctx) = be-kind with contextAnalysis enabled (Semantic category only)");
}
```

- [ ] **Step 2: Add main runner**

```typescript
// ── Main ─────────────────────────────────────────────────────────────────────

const timestamp = new Date().toISOString();
console.log("\n=== Accuracy Benchmark ===");
console.log(`Timestamp: ${timestamp}`);
console.log(`Dataset version: ${DATASET_VERSION}  |  Total cases: ${DATASET.length}`);

const CATEGORIES = [
  Category.SINGLE_LANG,
  Category.MULTI_LANG,
  Category.FALSE_POSITIVE,
  Category.ROMANIZATION,
  Category.SEMANTIC,
];

const categorySummaries: CategorySummary[] = CATEGORIES.map(cat =>
  runCategory(cat, DATASET, LIBRARIES)
);

for (const summary of categorySummaries) {
  printCategoryTable(summary);
}

const libSummaries = buildSummary(categorySummaries, LIBRARIES);
printSummaryTable(libSummaries);

// ── JSON output ───────────────────────────────────────────────────────────────

const __filename = fileURLToPath(import.meta.url);
const __dirname  = dirname(__filename);

const jsonOut = {
  timestamp,
  datasetVersion: DATASET_VERSION,
  totalCases: DATASET.length,
  categories: categorySummaries.map(cat => ({
    category: cat.category,
    totalCases: cat.totalCases,
    profaneCases: cat.profaneCases,
    cleanCases: cat.cleanCases,
    results: cat.results.map(r => ({
      library: r.library,
      skipped: r.skipped,
      tpRate: r.tpRate,
      fpRate: r.fpRate,
      precision: r.precision,
      f1: r.f1,
      truePositives: r.truePositives,
      falseNegatives: r.falseNegatives,
      falsePositives: r.falsePositives,
      trueNegatives: r.trueNegatives,
      casesScored: r.casesScored,
    })),
  })),
  summary: libSummaries,
};

await fs.writeFile(
  join(__dirname, "accuracy-results.json"),
  JSON.stringify(jsonOut, null, 2)
);

console.log("\nResults saved → benchmark/accuracy-results.json\n");
```

- [ ] **Step 3: Commit**

```bash
git add benchmark/accuracy-benchmark.ts
git commit -m "feat: add accuracy benchmark output formatter, runner, and JSON writer"
```

---

## Task 9: Wire up package.json, run the benchmark, update README

**Files:**
- Modify: `package.json`
- Generate: `benchmark/accuracy-results.json`
- Modify: `README.md`

- [ ] **Step 1: Add script to package.json**

In `package.json`, add to the `scripts` block:

```json
"benchmark:accuracy": "bun run benchmark/accuracy-benchmark.ts",
```

- [ ] **Step 2: Run the benchmark**

```bash
bun run benchmark:accuracy
```

Confirm output shows all five category tables and a summary table. Note the actual numbers — you'll need them for the README.

- [ ] **Step 3: Commit the script and results**

```bash
git add package.json benchmark/accuracy-results.json
git commit -m "feat: add benchmark:accuracy script and initial accuracy results"
```

- [ ] **Step 4: Add Accuracy section to README**

In `README.md`, after the `### Competitor Comparison` section (which ends with the ` ```bash taskset -c 0 bun run benchmark:competitors ``` ` block), add a new section using the actual numbers from the benchmark output:

```markdown
### Accuracy Comparison

Measures TP rate (recall), FP rate, and F1 across five test categories. **Higher F1 and lower FP rate are better.**

> **Note:** Libraries marked N/A structurally cannot handle that category — not a score of 0%. `be-kind (ctx)` = be-kind with `contextAnalysis.enabled: true` (Semantic category only).

#### Single-language detection (~59 cases: English, French, German, Spanish, Hindi)

| Library | TP Rate | FP Rate | F1 |
|---|---|---|---|
| be-kind | XX% | XX% | X.XX |
| leo | XX% | XX% | X.XX |
| bad-words | XX% | XX% | X.XX |
| glin (basic) | XX% | XX% | X.XX |
| glin (enhanced) | XX% | XX% | X.XX |

*(Replace XX with actual numbers from benchmark output)*

#### False positives / innocent words (~40 cases, clean only)

| Library | FP Rate |
|---|---|
| be-kind | XX% |
| leo | XX% |
| bad-words | XX% |
| glin (basic) | XX% |
| glin (enhanced) | XX% |

#### Multi-language detection, Romanization, Semantic Context

| Category | be-kind TP | be-kind FP | be-kind F1 |
|---|---|---|---|
| Multi-language (~25 cases) | XX% | XX% | X.XX |
| Romanization (~30 cases) | XX% | XX% | X.XX |
| Semantic context (~25 cases) | XX% | XX% | X.XX |

*Only be-kind and glin (enhanced) are scored for Semantic Context. All other libraries are N/A for Multi-language and Romanization.*

Run the accuracy benchmark yourself:
```bash
bun run benchmark:accuracy
```
```

- [ ] **Step 5: Commit README**

```bash
git add README.md
git commit -m "docs: add accuracy comparison section to README with benchmark results"
```

---

## Done

Verify the full benchmark runs end-to-end cleanly:

```bash
bun run benchmark:accuracy
```

All five category tables should print, followed by the summary table. `benchmark/accuracy-results.json` should be updated with the new timestamp.

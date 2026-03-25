/**
 * Challenge Tests — unsolved edge cases that document known limitations.
 *
 * These tests define the behavior we WANT but can't achieve yet.
 * When you improve the system, unskip the relevant tests, verify they pass,
 * and move them into innocence-integration.test.ts.
 *
 * Current unsolved challenges:
 *   C5: English text discussing Swedish word "slut" (needs semantic/educational context)
 *   D1: "ass" meaning donkey in biology (needs semantic analysis, en→en collision)
 *   D2: "cock" meaning rooster in farming (needs semantic analysis, en→en collision)
 *   D3: "git" as British insult vs version control tool (needs context analysis)
 *   G2: "puta" in Spanish linguistic discussion (needs cross-Romance collision map)
 *   E1: Profanity embedded inside a single word with no spaces ("urASSHOLEbro")
 *       — default mode misses these because detectPartialWords is false.
 *       Solving this requires high-coverage embedded detection: when the profane
 *       substring covers a large fraction of the host word, flag it even in
 *       default mode (e.g., profane_len / host_len > 0.5 threshold).
 *   F1: Chinese "S B" (傻逼) with space — matches "s b" in English text (e.g., "its best").
 *       Currently commented out of dictionary because it false-positives on any "s b" bigram.
 *       Needs language-aware detection: only flag "S B" when surrounding text is Chinese.
 *   F2: Korean agglutination — "개새끼들아" contains "개새끼" (SOB) + suffix "들아"
 *       but word-boundary matching doesn't detect the root. Needs Korean morphological
 *       analysis or prefix-matching for CJK scripts.
 *   F3: Spanish "indio"/"india" — derogatory toward indigenous people in LatAm context,
 *       but "india" is overwhelmingly a country name and "indio" means "Indian" neutrally.
 *       Currently commented out because it false-positives on any mention of India.
 *       Needs language-aware detection: only flag when surrounding text is Spanish AND
 *       used as a direct address/insult (e.g., "pinche indio"), not as a geographic reference.
 */

import { BeKind, WordSeverity } from "../src/index.ts";
import type { ScoredWord } from "../src/index.ts";

function findWord(scoredWords: ScoredWord[], word: string): ScoredWord | undefined {
  return scoredWords.find(
    (sw) => sw.word.toLowerCase() === word.toLowerCase(),
  );
}

describe("Unsolved challenges — semantic analysis needed", () => {
  let filter: BeKind;

  beforeAll(() => {
    filter = new BeKind({ silent: true });
  });

  it.skip("C5: English article about Swedish culture mentioning 'slut' as translation — NEEDS CONTEXT DETECTION", () => {
    // English text ABOUT Swedish, explaining the word "slut"
    // Document signal is English → system BOOSTS profane signal.
    // But the word is being discussed in an educational context.
    // Solving this requires semantic/educational context understanding.
    const text =
      "In Swedish, the word 'slut' simply means 'end' or 'finish'. " +
      "You'll see it on signs at the end of roads: 'Slut på vägen'. " +
      "It's a perfectly innocent word in Scandinavian languages.";
    const result = filter.detect(text);
    const slutWord = findWord(result.scoredWords, "slut");
    if (slutWord) {
      expect(slutWord.severity).toBe(WordSeverity.AMBIVALENT);
    }
  });

  it.skip("D1: 'ass' meaning donkey in a biology context — NEEDS SEMANTIC ANALYSIS", () => {
    // Both profane and innocent language are "en" → signals cancel → stays PROFANE.
    // Solving this requires semantic context: animal words nearby = innocent usage.
    const text =
      "The wild ass, also known as the onager, is a species of equine " +
      "native to Asia. The African wild ass is the ancestor of the domestic donkey.";
    const result = filter.detect(text);
    const assWord = findWord(result.scoredWords, "ass");
    if (assWord) {
      expect(assWord.severity).toBe(WordSeverity.AMBIVALENT);
    }
  });

  it.skip("D2: 'cock' meaning rooster in a farming context — NEEDS SEMANTIC ANALYSIS", () => {
    // Same en→en collision problem as D1.
    // "cock" has df:0.1 (barely dampens), and same-language signals cancel.
    const text =
      "The cock crowed at dawn, waking the entire farmyard. The hens " +
      "followed the cock around the yard, pecking at grain.";
    const result = filter.detect(text);
    const cockWord = findWord(result.scoredWords, "cock");
    if (cockWord) {
      expect(cockWord.severity).toBe(WordSeverity.AMBIVALENT);
    }
  });

  it.skip("D3: 'git' as British insult vs version control tool — NEEDS CONTEXT ANALYSIS", () => {
    // "git" is a common British insult but collides with the version control tool.
    // Currently commented out of word lists to avoid false positives.
    // Solving this requires context analysis: tech/dev context = innocent, insult context = profane.
    const profaneText = "You're such a git, absolutely useless.";
    const innocentText = "Run git commit to save your changes to the repository.";
    const profaneResult = filter.detect(profaneText);
    const innocentResult = filter.detect(innocentText);
    expect(profaneResult.hasProfanity).toBe(true);
    expect(innocentResult.hasProfanity).toBe(false);
  });

  it.skip("E1: profanity buried inside a single concatenated word — NEEDS SAME-LANG EMBED SIGNAL", () => {
    // Both guards must pass: match ≥5 chars AND coverage ≥55%.
    expect(filter.check("urASSHOLEbro")).toBe(true);   // "asshole" 7 chars, 7/12 = 58% ✓
    expect(filter.check("ufucker")).toBe(true);          // "fucker"  6 chars, 6/7  = 86% ✓
    // Short profane words (<5 chars) are never flagged when embedded,
    // even at high coverage, because they appear in too many innocent words.
    expect(filter.check("canal")).toBe(false);           // "anal"    4 chars, 4/5  = 80% — too short
    expect(filter.check("shitman")).toBe(false);         // "shit"    4 chars, 4/7  = 57% — too short
    // Low coverage (<55%) is also safe regardless of match length.
    expect(filter.check("assassin")).toBe(false);        // "ass"     3 chars, 3/8  = 37%
    expect(filter.check("classical")).toBe(false);       // "ass"     3 chars, 3/9  = 33%
    expect(filter.check("thisisshitman")).toBe(false);   // "shit"    4 chars, 4/13 = 30%
  });

  it.skip("G2: Portuguese 'puta' vs Spanish context — NEEDS CROSS-ROMANCE COLLISION MAP", () => {
    // "puta" is profane in both Portuguese and Spanish.
    // Used in a linguistic discussion about word origins — should dampen.
    // Solving this requires educational/academic context detection.
    const text =
      "En la historia del idioma español, la palabra 'puta' tiene raíces " +
      "en el latín 'putus' que significaba podado o limpio.";
    const result = filter.detect(text);
    const putaWord = findWord(result.scoredWords, "puta");
    if (putaWord) {
      expect(putaWord.severity).toBe(WordSeverity.AMBIVALENT);
    }
  });
});

/**
 * Common words with dual meanings — commented out of dictionaries due to false positives.
 *
 * These words have legitimate, common innocent meanings that are far more frequent
 * than their profane/hateful usage. They are commented out in
 * english-primary-all-languages.ts to avoid flagging event descriptions on Grassroots.
 *
 * To re-enable: add context-aware detection that distinguishes innocent vs hateful usage,
 * unskip the relevant tests, verify both sides pass, and uncomment in the dictionary.
 */
describe("Common dual-meaning words — innocent usage should not flag", () => {
  let filter: BeKind;

  beforeAll(() => {
    filter = new BeKind({ silent: true });
  });

  const expectClean = (text: string) => {
    const result = filter.detect(text);
    const profane = result.scoredWords.filter(sw => sw.severity === WordSeverity.PROFANE);
    expect(profane).toEqual([]);
  };

  it.skip("tinker — should not flag crafting/maker context", () => {
    expectClean("Come tinker with electronics at our weekend maker space workshop.");
    expectClean("The tinkers repaired pots and pans in the village square.");
    expectClean("She loves to tinker with old radios and restore them.");
  });

  it.skip("edibles — should not flag food/cooking context", () => {
    expectClean("Join us for a class on foraging wild edibles in the Pacific Northwest.");
    expectClean("The edibles at the farmers market were incredible this week.");
    expectClean("Learn to identify edible mushrooms on this guided nature walk.");
  });

  it.skip("catfish — should not flag fishing/cooking context", () => {
    expectClean("Join us for catfish fishing on the river this Saturday morning.");
    expectClean("Southern fried catfish and hushpuppies at the community cookout.");
    expectClean("The catfish population in the lake has been thriving this year.");
  });

  it.skip("puttanesca — should not flag Italian cooking context", () => {
    expectClean("Tonight's special: spaghetti alla puttanesca with fresh olives and capers.");
    expectClean("Learn to make authentic puttanesca sauce in our Italian cooking class.");
  });

  it.skip("crime statistics — should not flag civic/policy context", () => {
    expectClean("The city council reviewed crime statistics from the past quarter.");
    expectClean("Join our community meeting to discuss local crime statistics and safety.");
  });

});

/**
 * Short common words (≤3 chars) — commented out of dictionaries due to false positives.
 *
 * These words are profane in their source language but collide with common English
 * words, names, or abbreviations. They need language-aware context detection before
 * they can be re-enabled without causing false positives on an English-dominant platform.
 *
 * To re-enable: add robust innocence entries with language detection, unskip the test,
 * verify it passes, and uncomment the word in its source dictionary.
 */
describe("Short common word collisions — need language-aware context detection", () => {
  let filter: BeKind;

  beforeAll(() => {
    filter = new BeKind({ silent: true, enableLeetSpeak: true, sensitiveMode: true });
  });

  // Helper: text should NOT be flagged as profane
  const expectClean = (text: string) => {
    const result = filter.detect(text);
    const profane = result.scoredWords.filter(sw => sw.severity === WordSeverity.PROFANE);
    expect(profane).toEqual([]);
  };

  it.skip("ken (fr: verlan for niquer) — should not flag English name Ken", () => {
    expectClean("Ken Burns is a legendary documentary filmmaker.");
    expectClean("Beyond my ken, the landscape stretched for miles.");
    expectClean("Ken Griffey Jr. hit another home run.");
  });

  it.skip("nom (ko: bastard) — should not flag English 'nom nom' or 'nominated'", () => {
    expectClean("Nom nom nom, this food is delicious!");
    expectClean("She was nominated for best actress.");
    expectClean("The nom de plume of the author was revealed.");
  });

  it.skip("gay (en/br: slur) — should not flag LGBTQ+ identity usage", () => {
    expectClean("Join us for the annual Gay Pride Parade this Saturday!");
    expectClean("The organization advocates for gay rights and equality.");
    expectClean("Gay marriage was legalized nationwide in 2015.");
  });

  it.skip("dom (bn: caste slur) — should not flag English DOM/domain", () => {
    expectClean("The DOM element was updated dynamically.");
    expectClean("Register your domain name today.");
    expectClean("Dom Pérignon is a famous champagne brand.");
  });

  it.skip("eta (ja: outcaste slur) — should not flag English ETA", () => {
    expectClean("ETA for the delivery is 3pm.");
    expectClean("What's your eta? We're waiting at the restaurant.");
    expectClean("The eta of the project completion is next Friday.");
  });

  it.skip("tat (hi: testicles) — should not flag English 'tit for tat'", () => {
    expectClean("It was a tit for tat exchange of accusations.");
    expectClean("She got a beautiful tat on her arm.");
    expectClean("The market was full of cheap tat and souvenirs.");
  });

  it.skip("goo (hi: dung) — should not flag English 'goo', 'gooey'", () => {
    expectClean("The slime was all gooey and green.");
    expectClean("What is this goo on my shoe?");
    expectClean("Goo Goo Dolls are playing tonight.");
  });

  it.skip("mut (hi/bn: urine) — should not flag English 'mutt'", () => {
    expectClean("Our mutt is the sweetest dog in the neighborhood.");
    expectClean("Don't mutter under your breath like that.");
    expectClean("The mut kept barking at the mailman.");
  });

  it.skip("bur (hi: vagina) — should not flag English 'burger', 'burn'", () => {
    expectClean("Let's grab a burger for lunch.");
    expectClean("Don't burn the toast again.");
    expectClean("The bur oak tree is native to North America.");
  });

  it.skip("ano (es: anus) — should not flag 'another', 'anon'", () => {
    expectClean("Ano nuevo, vida nueva — happy new year!");
    expectClean("Anonymous users posted the review.");
    expectClean("Another year, another opportunity to grow.");
  });

  it.skip("wea (es/Chile: bullshit) — should not flag 'we are'", () => {
    expectClean("We are all human beings living together on this earth.");
    expectClean("We are excited to announce the new program.");
    expectClean("Together we are stronger than ever.");
  });

  it.skip("mae (es/Costa Rica: derogatory) — should not flag name Mae", () => {
    expectClean("Mae Jemison was the first African American woman in space.");
    expectClean("Aunt Mae brought her famous apple pie.");
    expectClean("Mae West was known for her wit and charm.");
  });

  it.skip("pos (en: piece of s***) — should not flag POS terminal", () => {
    expectClean("The POS system crashed during the lunch rush.");
    expectClean("Install the new POS terminal at register 3.");
    expectClean("Our POS software needs an update.");
  });

  it.skip("hag (en: ugly old woman) — should not flag common usage", () => {
    expectClean("Haggis is a traditional Scottish dish.");
    expectClean("We went to The Hague for the conference.");
    expectClean("Hagar the Horrible is a classic comic strip.");
  });

  it.skip("div (en: stupid person) — should not flag HTML div or division", () => {
    expectClean("Wrap the content in a div element.");
    expectClean("The division between the two teams was clear.");
    expectClean("Use a div container for the layout.");
  });

  it.skip("bra (en: undergarment) — should not flag Swedish 'bra' (good)", () => {
    expectClean("Det var bra! (That was good in Swedish)");
    expectClean("Bra fitting appointments available this week.");
    expectClean("The cobra slithered through the grass.");
  });

  it.skip("bal (bn: pubic hair insult) — should not flag English 'ball', 'balance'", () => {
    expectClean("The ball game starts at 7pm.");
    expectClean("Maintaining work-life balance is important.");
    expectClean("The ballet performance was stunning.");
  });

  it.skip("gu (bn: feces) — should not flag common text", () => {
    expectClean("GU stands for geographically unique.");
    expectClean("Check the GU clinic for your appointment.");
  });
});

/**
 * Profane usage of the same short words — these SHOULD flag when re-enabled.
 *
 * When language-aware context detection is added and the words above are
 * uncommented, these tests verify that genuinely profane usage is still caught.
 * Both sides of the coin must pass before a word can be re-enabled.
 */
describe("Short common words — should flag when used as profanity", () => {
  let filter: BeKind;

  beforeAll(() => {
    filter = new BeKind({ silent: true, enableLeetSpeak: true, sensitiveMode: true });
  });

  // Helper: text SHOULD be flagged (word detected as PROFANE)
  const expectFlagged = (text: string, word: string) => {
    const result = filter.detect(text);
    const match = result.scoredWords.find(
      sw => sw.word.toLowerCase() === word.toLowerCase() && sw.severity === WordSeverity.PROFANE
    );
    expect(match).toBeDefined();
  };

  it.skip("ken (fr: verlan for niquer) — should flag in French profane context", () => {
    expectFlagged("Je vais te ken ce soir, tu vas voir.", "ken");
    expectFlagged("Il s'est fait ken par tout le monde.", "ken");
  });

  it.skip("nom (ko: bastard) — should flag in Korean profane context", () => {
    expectFlagged("이 nom 새끼가 또 왔어.", "nom");
    expectFlagged("geu nom jal mot haesseo.", "nom");
  });

  it.skip("gay (en/br: slur) — should flag when used as insult", () => {
    expectFlagged("That's so gay, what a loser.", "gay");
    expectFlagged("Stop being gay about it.", "gay");
  });

  it.skip("dom (bn: caste slur) — should flag in Bengali profane context", () => {
    expectFlagged("tui ekta dom, tor shathe kotha bolbo na.", "dom");
    expectFlagged("oi dom ta ke dhore maar.", "dom");
  });

  it.skip("eta (ja: outcaste slur) — should flag in Japanese discriminatory context", () => {
    expectFlagged("あいつはetaだから関わるな.", "eta");
    expectFlagged("eta no hito tachi wa kitanai.", "eta");
  });

  it.skip("tat (hi: testicles/shit) — should flag in Hindi profane context", () => {
    expectFlagged("tera tat pakad ke marunga.", "tat");
    expectFlagged("chal tat dhone ja.", "tat");
  });

  it.skip("goo (hi: dung/shit) — should flag in Hindi profane context", () => {
    expectFlagged("tu goo kha le saale.", "goo");
    expectFlagged("tera muh goo se bhara hai.", "goo");
  });

  it.skip("mut (hi/bn: urine) — should flag in Hindi/Bengali profane context", () => {
    expectFlagged("ja ke mut pi le.", "mut");
    expectFlagged("tor mut e snan korbo.", "mut");
  });

  it.skip("bur (hi: vagina) — should flag in Bhojpuri profane context", () => {
    expectFlagged("teri maa ka bur.", "bur");
    expectFlagged("bur mein daal de.", "bur");
  });

  it.skip("ano (es: anus) — should flag in Spanish profane context", () => {
    expectFlagged("te voy a meter por el ano.", "ano");
    expectFlagged("lameme el ano, pendejo.", "ano");
  });

  it.skip("wea (es/Chile: bullshit) — should flag in Chilean profane context", () => {
    expectFlagged("que wea mas estupida, culiao.", "wea");
    expectFlagged("deja de hablar wea, conchetumadre.", "wea");
  });

  it.skip("mae (es/Costa Rica: derogatory) — should flag in derogatory context", () => {
    expectFlagged("ese mae es un hijueputa.", "mae");
    expectFlagged("callate mae imbecil.", "mae");
  });

  it.skip("pos (en: piece of s***) — should flag as acronym insult", () => {
    expectFlagged("you're a total pos and everyone knows it.", "pos");
    expectFlagged("what a pos human being.", "pos");
  });

  it.skip("hag (en: ugly old woman) — should flag as insult", () => {
    expectFlagged("that old hag needs to shut up.", "hag");
    expectFlagged("she's such a hag, nobody can stand her.", "hag");
  });

  it.skip("div (en: stupid person) — should flag as British insult", () => {
    expectFlagged("you absolute div, what were you thinking.", "div");
    expectFlagged("don't be such a div about it.", "div");
  });

  it.skip("bal (bn: pubic hair insult) — should flag in Bengali profane context", () => {
    expectFlagged("tor bal chire felbo.", "bal");
    expectFlagged("oi bal ta ke dekh.", "bal");
  });

  it.skip("gu (bn: feces) — should flag in Bengali profane context", () => {
    expectFlagged("tor gu kha.", "gu");
    expectFlagged("oi gu ta ke saaf kor.", "gu");
  });
});

/**
 * All-digit leet-speak evasion — words spelled entirely with digits.
 *
 * Pure numeric+symbol tokens (no letters) are protected from leet-decode.
 * Tokens containing at least one letter get full leet-speak processing.
 *
 * Solved cases: tokens with letters ("6006s", "b006s", "4ss", "d1ld0")
 * are now caught. Pure-digit tokens ("6006", "60065") are correctly
 * left alone since they're ambiguous as numbers.
 *
 * Remaining challenges: tokens where digits form a bridge between
 * letter segments ("n066er") — the pure-digit "066" substring gets
 * protected because the token-level regex sees "n066er" but the
 * inner "066" isn't adjacent to the outer letters at the regex level.
 */
describe("Digit leet-speak evasion", () => {
  let filter: BeKind;

  beforeAll(() => {
    filter = new BeKind({ silent: true, enableLeetSpeak: true, sensitiveMode: true });
  });

  const expectCaught = (text: string) => {
    const result = filter.detect(text);
    expect(result.hasProfanity).toBe(true);
  };

  it("6006s — digit leet for 'boobs' with trailing letter", () => {
    expectCaught("6006s");
    expectCaught("nice 6006s");
  });

  it("b006s — mixed digit-letter leet for 'boobs'", () => {
    expectCaught("b006s");
  });

  it("4ss — digit-prefix leet for 'ass'", () => {
    expectCaught("4ss");
  });

  it("d1ld0 — mixed digit leet for 'dildo'", () => {
    expectCaught("d1ld0");
  });

});

describe("F1: Chinese 'S B' in English context — needs language-aware detection", () => {
  // "S B" (傻逼/sha bi) is a very common Chinese insult meaning "stupid cunt"
  // but "s b" appears constantly in English: "its best", "his bag", "this box", etc.
  // Currently commented out of dictionary to prevent false positives.
  // Proper fix: only match "S B" when document language signal includes Chinese.
  it.skip("should flag 'S B' in Chinese text", () => {
    const filter = new BeKind({ sensitiveMode: true, silent: true });
    expect(filter.check("你真是个S B")).toBe(true);
  });

  it("should NOT flag 'its best' in English text", () => {
    const filter = new BeKind({ sensitiveMode: true, silent: true });
    expect(filter.check("This is community at its best")).toBe(false);
  });
});

describe("F2: Korean agglutination — suffixed profanity not detected", () => {
  // Korean attaches particles/suffixes to word roots: 개새끼 + 들아 = 개새끼들아
  // Word-boundary matching can't find "개새끼" inside "개새끼들아" without
  // morphological analysis or prefix matching for Korean script.
  it.skip("should detect 개새끼 in suffixed form 개새끼들아", () => {
    const filter = new BeKind({ sensitiveMode: true, silent: true });
    expect(filter.check("콘서트 티켓 판매 시작. 개새끼들아 빨리 사라.")).toBe(true);
  });

  it("detects bare 개새끼 (no suffix)", () => {
    const filter = new BeKind({ sensitiveMode: true, silent: true });
    expect(filter.check("개새끼")).toBe(true);
  });
});

describe("F3: Spanish 'indio'/'india' — country name vs derogatory usage", () => {
  // "india" is a country name and "indio" means "Indian" neutrally.
  // In some LatAm Spanish contexts, calling someone "indio/india" is derogatory
  // toward indigenous people. Currently commented out because standalone usage
  // overwhelmingly refers to the country/nationality.
  // Proper fix: only flag in Spanish text when used as direct insult context.
  it.skip("should flag 'indio' as derogatory in Spanish insult context", () => {
    const filter = new BeKind({ sensitiveMode: true, silent: true });
    expect(filter.check("cállate indio ignorante")).toBe(true);
  });

  it("should NOT flag 'India' as a country name", () => {
    const filter = new BeKind({ sensitiveMode: true, silent: true });
    expect(filter.check("He joined the Ramakrishna Order at Advaita Ashrama, Kolkata, India, in 1988.")).toBe(false);
  });

  it("should NOT flag 'India' in event descriptions with multiple mentions", () => {
    const filter = new BeKind({ sensitiveMode: true, silent: true });
    const text = "Swamiji served at Advaita Ashrama in India. In 2014, he was appointed Head of Ramakrishna Mission Ashrama, Kanpur, India. He joined the Vedanta Society of Southern California in 2018.";
    expect(filter.check(text)).toBe(false);
  });

  it("compound forms like 'indio de mierda' should still flag", () => {
    const filter = new BeKind({ sensitiveMode: true, silent: true });
    expect(filter.check("indio de mierda")).toBe(true);
  });
});

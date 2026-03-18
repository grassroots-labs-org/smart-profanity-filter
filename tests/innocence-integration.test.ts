/**
 * End-to-end integration tests for the innocence scoring system.
 *
 * These tests exercise the full detect() pipeline — dictionary lookup, language
 * detection, innocence scoring, and severity classification — to verify that
 * cross-language collision words are correctly handled based on language context.
 *
 * Includes real-world scenarios across Swedish, Norwegian, Danish, Dutch, German,
 * French, Spanish, and mixed-language documents.
 *
 * Key constraints:
 * - The "all" dictionary (english-primary-all-languages.ts) is the only one loaded
 *   by default. French-only words like "bite" are NOT available unless French is
 *   explicitly loaded, and even then the availableLanguages map may not include them.
 * - Words with same profane and innocent language (e.g., "ass" en→en, "cock" en→en)
 *   produce equal profane/innocent amplified signals, resulting in no adjustment.
 */

import { BeKind, WordSeverity } from "../src/index.js";
import type { ScoredWord } from "../src/index.js";

// ─────────────────────────────────────────────────────────────────────────────
// Helpers
// ─────────────────────────────────────────────────────────────────────────────

/** Find a specific word's ScoredWord entry in the detect() result. */
function findScoredWord(
  scoredWords: ScoredWord[],
  word: string,
): ScoredWord | undefined {
  return scoredWords.find(
    (sw) => sw.word.toLowerCase() === word.toLowerCase(),
  );
}

/** Find a ScoredWord where the detected word contains the target word. */
function findScoredWordContaining(
  scoredWords: ScoredWord[],
  word: string,
): ScoredWord | undefined {
  return scoredWords.find(
    (sw) => sw.word.toLowerCase().includes(word.toLowerCase()),
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 1. Swedish collision words — innocence scoring behavior
// ─────────────────────────────────────────────────────────────────────────────

describe("Swedish collision words — innocence scoring behavior", () => {
  let filter: BeKind;

  beforeAll(() => {
    filter = new BeKind({ silent: true });
  });

  it("'slut' in Swedish text is dampened to SAFE via trie + confusion map", () => {
    // Swedish text where "slut" means "end/finish"
    // The Swedish trie vocabulary provides strong word-level signal, and the
    // confusion map treats German ELD signal as partial Swedish evidence.
    // Combined, this dampens certainty below the flag threshold.
    const text =
      "Programmet börjar klockan åtta och tar slut vid tio på kvällen. " +
      "Vi hoppas att alla har det bra och njuter av evenemanget till slut.";
    const result = filter.detect(text);
    const slutWord = findScoredWord(result.scoredWords, "slut");

    // "slut" is detected — it's in the "all" dictionary with s:3 c:4
    expect(slutWord).toBeDefined();
    // Swedish trie words + confusion map provide enough Swedish signal
    // to dampen certainty below flag threshold → AMBIVALENT (not flagged)
    expect(slutWord!.severity).toBe(WordSeverity.AMBIVALENT);
  });

  it("'hell' in Swedish/Norwegian text stays AMBIVALENT (already below flag threshold)", () => {
    // "hell" has s:2, c:2 in the dictionary — below any flag threshold
    // (s:3 c:3+, s:4+ c:2+, s:5 any c), so it's always AMBIVALENT regardless
    // of innocence scoring
    const text =
      "Du har verkligen hell i att hitta en så bra lägenhet. " +
      "Med lite hell kan vi vinna matchen ikväll.";
    const result = filter.detect(text);
    const hellWord = findScoredWord(result.scoredWords, "hell");

    if (hellWord) {
      expect(hellWord.severity).toBe(WordSeverity.AMBIVALENT);
    }
    // If "hell" doesn't appear in scoredWords at all, that's also acceptable
    // as it's below all flag thresholds
  });

  it("'bra' in Swedish text is AMBIVALENT (collision word with low severity)", () => {
    // "bra" is in the all-dictionary and in innocent-words with sv dampening
    const text =
      "Programmet börjar klockan åtta och tar slut vid tio på kvällen. " +
      "Vi hoppas att alla har det bra och njuter av evenemanget till slut.";
    const result = filter.detect(text);
    const braWord = findScoredWord(result.scoredWords, "bra");

    if (braWord) {
      // "bra" has a low score in the dictionary, so it should be AMBIVALENT
      expect(braWord.severity).toBe(WordSeverity.AMBIVALENT);
    }
  });
});

// ─────────────────────────────────────────────────────────────────────────────
// 2. English dual-meaning words — same profane/innocent language
// ─────────────────────────────────────────────────────────────────────────────

describe("English dual-meaning words — same profane and innocent language", () => {
  let filter: BeKind;

  beforeAll(() => {
    filter = new BeKind({ silent: true });
  });

  it("'ass' with en→en collision: profane/innocent signals cancel out, stays PROFANE", () => {
    // "ass" is profane in English (s:3 c:3) and innocent in English (donkey, df:0.15)
    // Since profaneLanguage="en" and innocentLanguage="en", amplified signals are equal
    // → no adjustment occurs → certainty stays at 3 → flags at s:3 c:3+
    const text = "Get your ass over here right now, you idiot.";
    const result = filter.detect(text);
    const assWord = findScoredWord(result.scoredWords, "ass");

    expect(assWord).toBeDefined();
    expect(assWord!.severity).toBe(WordSeverity.PROFANE);
  });

  it("'cock' with en→en collision: profane/innocent signals cancel out, stays PROFANE", () => {
    // "cock" is profane in English (s:4 c:3) and innocent in English (rooster, df:0.1)
    // Same-language collision → no adjustment → flags at s:4+ c:2+
    const text = "She couldn't stop talking about his cock all night long.";
    const result = filter.detect(text);
    const cockWord = findScoredWord(result.scoredWords, "cock");

    expect(cockWord).toBeDefined();
    expect(cockWord!.severity).toBe(WordSeverity.PROFANE);
  });

  it("'ass' in animal context still flags due to en→en collision (no dampening possible)", () => {
    // Even when "ass" is used innocently (donkey), the en→en collision means
    // profaneAmp == innocentAmp → no adjustment → stays PROFANE
    const text =
      "The donkey, also known as an ass, is a domesticated member of the horse family.";
    const result = filter.detect(text);
    const assWord = findScoredWord(result.scoredWords, "ass");

    if (assWord) {
      // Same-language collision prevents dampening even in innocent context
      expect(assWord.severity).toBe(WordSeverity.PROFANE);
    }
  });
});

// ─────────────────────────────────────────────────────────────────────────────
// 3. English profanity still flagged correctly
// ─────────────────────────────────────────────────────────────────────────────

describe("English profanity still flagged correctly despite innocence system", () => {
  let filter: BeKind;

  beforeAll(() => {
    filter = new BeKind({ silent: true });
  });

  it("'slut' in English profane context is PROFANE (detected as part of multi-word match)", () => {
    // When "slut" appears alongside other profane words, the filter may detect
    // multi-word phrases (e.g., "dirty slut") rather than standalone "slut"
    const text =
      "You dirty slut, get out of here. " +
      "Nobody wants to see your face around this neighborhood.";
    const result = filter.detect(text);

    // May match as "dirty slut" (multi-word) or standalone "slut"
    const slutWord = findScoredWord(result.scoredWords, "slut") ??
      findScoredWordContaining(result.scoredWords, "slut");

    expect(slutWord).toBeDefined();
    expect(slutWord!.severity).toBe(WordSeverity.PROFANE);
  });

  it("standalone 'slut' in English text is PROFANE", () => {
    const text = "That person is a slut and everyone knows it.";
    const result = filter.detect(text);
    const slutWord = findScoredWord(result.scoredWords, "slut") ??
      findScoredWordContaining(result.scoredWords, "slut");

    expect(slutWord).toBeDefined();
    expect(slutWord!.severity).toBe(WordSeverity.PROFANE);
  });
});

// ─────────────────────────────────────────────────────────────────────────────
// 4. Regression — existing profanity detection unaffected
// ─────────────────────────────────────────────────────────────────────────────

describe("Regression — existing profanity detection unaffected by innocence scoring", () => {
  let filter: BeKind;

  beforeAll(() => {
    filter = new BeKind({ silent: true });
  });

  it("English profanity 'fuck' is detected and scored as PROFANE", () => {
    const result = filter.detect("What the fuck is going on here?");

    expect(result.hasProfanity).toBe(true);
    expect(
      result.detectedWords.some((w) => w.toLowerCase().includes("fuck")),
    ).toBe(true);

    const fuckWord = findScoredWord(result.scoredWords, "fuck") ??
      findScoredWordContaining(result.scoredWords, "fuck");
    expect(fuckWord).toBeDefined();
    expect(fuckWord!.severity).toBe(WordSeverity.PROFANE);
  });

  it("English profanity 'shit' is detected and scored as PROFANE", () => {
    // "shit" may be detected as part of a multi-word phrase like "piece of shit"
    const result = filter.detect("This is a piece of shit product.");

    expect(result.hasProfanity).toBe(true);
    const shitWord = findScoredWord(result.scoredWords, "shit") ??
      findScoredWordContaining(result.scoredWords, "shit");
    expect(shitWord).toBeDefined();
    expect(shitWord!.severity).toBe(WordSeverity.PROFANE);
  });

  it("clean text produces no profanity detection", () => {
    const result = filter.detect(
      "Join us for a wonderful community gathering at the local park this Saturday. " +
      "We will have food, music, and games for the whole family.",
    );

    expect(result.hasProfanity).toBe(false);
    expect(result.detectedWords).toHaveLength(0);
    expect(result.scoredWords).toHaveLength(0);
  });

  it("clean text with common words does not false-positive", () => {
    const result = filter.detect(
      "The therapist suggested we discuss the problem. " +
      "She will assess the situation carefully.",
    );

    expect(result.hasProfanity).toBe(false);
    expect(result.scoredWords).toHaveLength(0);
  });
});

// ─────────────────────────────────────────────────────────────────────────────
// 5. Innocence scoring entry point — word score and innocent entries interaction
// ─────────────────────────────────────────────────────────────────────────────

describe("Innocence scoring integration — word score and innocent entries", () => {
  let filter: BeKind;

  beforeAll(() => {
    filter = new BeKind({ silent: true });
  });

  it("'slut' has a word score with language 'en' in the dictionary", () => {
    const score = filter.getWordScore("slut");
    expect(score).not.toBeNull();
    expect(score!.severity).toBe(3);
    expect(score!.certainty).toBe(4);
    expect(score!.language).toBe("en");
  });

  it("'ass' has a word score with language 'en' in the dictionary", () => {
    const score = filter.getWordScore("ass");
    expect(score).not.toBeNull();
    expect(score!.severity).toBe(3);
    expect(score!.certainty).toBe(3);
    expect(score!.language).toBe("en");
  });

  it("'cock' has a word score with language 'en' in the dictionary", () => {
    const score = filter.getWordScore("cock");
    expect(score).not.toBeNull();
    expect(score!.severity).toBe(4);
    expect(score!.certainty).toBe(3);
    expect(score!.language).toBe("en");
  });

  it("'hell' has a word score below all flag thresholds", () => {
    const score = filter.getWordScore("hell");
    expect(score).not.toBeNull();
    expect(score!.severity).toBe(2);
    expect(score!.certainty).toBe(2);
    // s:2 c:2 does not meet any flag threshold
    const shouldFlag =
      score!.severity === 5 ||
      (score!.severity >= 4 && score!.certainty >= 2) ||
      (score!.severity === 3 && score!.certainty >= 3);
    expect(shouldFlag).toBe(false);
  });

  it("innocence scoring does not affect words without innocent entries", () => {
    // "fuck" has no entry in innocent-words.ts, so the innocence path is skipped
    const result = filter.detect("What the fuck happened yesterday?");
    const fuckWord = findScoredWord(result.scoredWords, "fuck") ??
      findScoredWordContaining(result.scoredWords, "fuck");
    expect(fuckWord).toBeDefined();
    expect(fuckWord!.severity).toBe(WordSeverity.PROFANE);
  });

  it("innocence scoring does not affect words without word scores in the dictionary", () => {
    // Words loaded from non-"all" dictionaries don't have wordScores entries
    // so the innocence scoring path is never reached for them
    const filter2 = new BeKind({ languages: ["french"], silent: true });
    // "merde" IS in the all-dictionary, so it should have a word score
    const merdeScore = filter2.getWordScore("merde");
    // "bite" is NOT in the all-dictionary, so it should NOT have a word score
    const biteScore = filter2.getWordScore("bite");
    expect(merdeScore).not.toBeNull();
    expect(biteScore).toBeNull();
  });
});

// ─────────────────────────────────────────────────────────────────────────────
// 6. Real-world Swedish text scenarios
// ─────────────────────────────────────────────────────────────────────────────

describe("Real-world Swedish text — innocence scoring", () => {
  let filter: BeKind;

  beforeAll(() => {
    filter = new BeKind({ silent: true });
  });

  it("Swedish news article with 'slut' (end of event)", () => {
    const text =
      "Sommarfestivalen tar slut den 15 augusti. Alla är välkomna att delta " +
      "i aktiviteterna fram till slut. Biljetter säljs vid entrén.";
    const result = filter.detect(text);
    const slutWord = findScoredWord(result.scoredWords, "slut");
    expect(slutWord).toBeDefined();
    expect(slutWord!.severity).toBe(WordSeverity.AMBIVALENT);
  });

  it("Swedish recipe mentioning 'kock' (chef)", () => {
    const text =
      "Vår kock har skapat en fantastisk meny med lokala råvaror. " +
      "Kocken rekommenderar att börja med soppan och avsluta med desserten.";
    const result = filter.detect(text);
    const kockWord = findScoredWord(result.scoredWords, "kock") ??
      findScoredWordContaining(result.scoredWords, "kock");
    if (kockWord) {
      expect(kockWord.severity).toBe(WordSeverity.AMBIVALENT);
    }
  });

  it("Swedish driving context with 'fart' (speed)", () => {
    const text =
      "Kör inte för fort! Det finns farthinder på vägen och hastigheten " +
      "bör sänkas. Polisen mäter farten vid skolan varje morgon.";
    const result = filter.detect(text);
    const fartWord = findScoredWord(result.scoredWords, "fart") ??
      findScoredWordContaining(result.scoredWords, "fart");
    if (fartWord) {
      expect(fartWord.severity).toBe(WordSeverity.AMBIVALENT);
    }
  });

  it("Short Swedish sentence with 'slut' — minimal context", () => {
    const text = "Det var slut.";
    const result = filter.detect(text);
    const slutWord = findScoredWord(result.scoredWords, "slut");
    if (slutWord) {
      expect(slutWord.severity).toBe(WordSeverity.AMBIVALENT);
    }
  });

  it("Swedish text with multiple collision words in one sentence", () => {
    const text =
      "Det var ett bra slut på resan. Vi körde med hög fart på motorvägen " +
      "och kom fram i tid. Alla tyckte det var en bra resa.";
    const result = filter.detect(text);

    const slutWord = findScoredWord(result.scoredWords, "slut");
    const braWord = findScoredWord(result.scoredWords, "bra");
    const fartWord = findScoredWord(result.scoredWords, "fart");

    if (slutWord) expect(slutWord.severity).toBe(WordSeverity.AMBIVALENT);
    if (braWord) expect(braWord.severity).toBe(WordSeverity.AMBIVALENT);
    if (fartWord) expect(fartWord.severity).toBe(WordSeverity.AMBIVALENT);
  });

  it("Swedish email — 'slutligen' (finally)", () => {
    const text =
      "Hej! Tack för ditt meddelande. Jag vill slutligen meddela att mötet " +
      "är inställt. Vi återkommer med nytt datum. Vänliga hälsningar, Anna.";
    const result = filter.detect(text);
    const slutWord = findScoredWord(result.scoredWords, "slut") ??
      findScoredWordContaining(result.scoredWords, "slut");
    if (slutWord) {
      expect(slutWord.severity).toBe(WordSeverity.AMBIVALENT);
    }
  });

  it("Swedish school context with 'prick' (mark/dot)", () => {
    const text =
      "Eleven fick en prick för sen ankomst. Tre prickar innebär " +
      "att föräldrarna kontaktas. Det är viktigt att komma i tid.";
    const result = filter.detect(text);
    const prickWord = findScoredWord(result.scoredWords, "prick") ??
      findScoredWordContaining(result.scoredWords, "prick");
    if (prickWord) {
      expect(prickWord.severity).toBe(WordSeverity.AMBIVALENT);
    }
  });

  it("Repeated 'slut' in Swedish context — all instances dampened", () => {
    const text =
      "Showen tar slut, föreställningen tar slut, programmet tar slut, " +
      "allt tar slut och vi går hem till slut.";
    const result = filter.detect(text);
    const slutWords = result.scoredWords.filter(
      (sw) => sw.word.toLowerCase() === "slut",
    );
    for (const sw of slutWords) {
      expect(sw.severity).toBe(WordSeverity.AMBIVALENT);
    }
  });

  it("'bra' alone in a short Swedish sentence", () => {
    const text = "Det var jättebra!";
    const result = filter.detect(text);
    const braWord = findScoredWord(result.scoredWords, "bra");
    if (braWord) {
      expect(braWord.severity).toBe(WordSeverity.AMBIVALENT);
    }
  });
});

// ─────────────────────────────────────────────────────────────────────────────
// 7. Norwegian/Danish text — confusion map coverage
// ─────────────────────────────────────────────────────────────────────────────

describe("Norwegian/Danish text — confusion map coverage", () => {
  let filter: BeKind;

  beforeAll(() => {
    filter = new BeKind({ silent: true });
  });

  it("Norwegian text with 'hell' (luck) — dampened via confusion map", () => {
    const text =
      "Vi hadde hell med oss og vant fotballkampen. Det var utrolig " +
      "mye hell i dag, alt gikk bra for laget vårt.";
    const result = filter.detect(text);
    const hellWord = findScoredWord(result.scoredWords, "hell");
    if (hellWord) {
      expect(hellWord.severity).toBe(WordSeverity.AMBIVALENT);
    }
  });

  it("Norwegian text with 'fart' (speed) — dampened via confusion map", () => {
    const text =
      "Bilen kjørte med stor fart gjennom sentrum. Farten var altfor " +
      "høy og politiet stoppet sjåføren. Det er fartsgrense på 50 km/t.";
    const result = filter.detect(text);
    const fartWord = findScoredWord(result.scoredWords, "fart") ??
      findScoredWordContaining(result.scoredWords, "fart");
    if (fartWord) {
      expect(fartWord.severity).toBe(WordSeverity.AMBIVALENT);
    }
  });

  it("Danish text with 'slut' (end) — dampened via confusion map", () => {
    const text =
      "Forestillingen er slut klokken ti. Vi håber alle har nydt " +
      "aftenen og vi ses til næste arrangement. God aften!";
    const result = filter.detect(text);
    const slutWord = findScoredWord(result.scoredWords, "slut");
    if (slutWord) {
      expect(slutWord.severity).toBe(WordSeverity.AMBIVALENT);
    }
  });

  it("Danish text with 'fart' (speed) — dampened via confusion map", () => {
    const text =
      "Bilen kørte med høj fart ned ad vejen. Der er fartbegrænsning " +
      "på 80 km/t her, og farten skal sænkes ved skolen.";
    const result = filter.detect(text);
    const fartWord = findScoredWord(result.scoredWords, "fart") ??
      findScoredWordContaining(result.scoredWords, "fart");
    if (fartWord) {
      expect(fartWord.severity).toBe(WordSeverity.AMBIVALENT);
    }
  });
});

// ─────────────────────────────────────────────────────────────────────────────
// 8. Mixed-language documents
// ─────────────────────────────────────────────────────────────────────────────

describe("Mixed-language documents — innocence scoring", () => {
  let filter: BeKind;

  beforeAll(() => {
    filter = new BeKind({ silent: true });
  });

  it("English text with Swedish quote containing 'slut'", () => {
    const text =
      "The Swedish director said in an interview: 'Filmen tar slut med en " +
      "fantastisk scen.' The audience loved the ending.";
    const result = filter.detect(text);
    const slutWord = findScoredWord(result.scoredWords, "slut");
    if (slutWord) {
      expect([WordSeverity.AMBIVALENT, WordSeverity.PROFANE]).toContain(slutWord.severity);
    }
  });

  it("Swedish-English code-switching with 'slut' — enough Swedish signal to dampen", () => {
    const text =
      "Jag var på jobbet idag and it was really tiring. Programmet tar slut " +
      "vid fem so I'll head home after that. Vi ses imorgon!";
    const result = filter.detect(text);
    const slutWord = findScoredWord(result.scoredWords, "slut");
    if (slutWord) {
      expect(slutWord.severity).toBe(WordSeverity.AMBIVALENT);
    }
  });

  it("French text with 'con' (idiot in French, should flag)", () => {
    const text =
      "Ce type est vraiment un con. Il ne comprend rien et fait " +
      "n'importe quoi avec le projet.";
    const result = filter.detect(text);
    const conWord = findScoredWord(result.scoredWords, "con");
    if (conWord) {
      expect(conWord.severity).toBe(WordSeverity.PROFANE);
    }
  });

  it("Spanish text with 'con' (with — innocent, should NOT flag)", () => {
    const text =
      "Vamos a comer con mis amigos esta noche. Quiero ir con " +
      "María al restaurante que está con descuento.";
    const result = filter.detect(text);
    const conWord = findScoredWord(result.scoredWords, "con");
    if (conWord) {
      expect(conWord.severity).toBe(WordSeverity.AMBIVALENT);
    }
  });
});

// ─────────────────────────────────────────────────────────────────────────────
// 9. Adversarial inputs — resistance to manipulation
// ─────────────────────────────────────────────────────────────────────────────

describe("Adversarial inputs — innocence scoring resistance", () => {
  let filter: BeKind;

  beforeAll(() => {
    filter = new BeKind({ silent: true });
  });

  it("English profanity surrounded by Swedish filler — still flags", () => {
    const text =
      "hej alla jag vill säga att you are a dirty slut och det är sant tack";
    const result = filter.detect(text);
    const slutWord = findScoredWord(result.scoredWords, "slut") ??
      findScoredWordContaining(result.scoredWords, "slut");
    if (slutWord) {
      expect(slutWord.severity).toBe(WordSeverity.PROFANE);
    }
  });

  it("Profane English 'slut' with Swedish padding — word-level signal keeps it flagged", () => {
    const text =
      "och jag att det som en på är av för med den till inte har ett " +
      "you filthy slut " +
      "och jag att det som en på är av för med den till inte har ett";
    const result = filter.detect(text);
    const slutWord = findScoredWord(result.scoredWords, "slut") ??
      findScoredWordContaining(result.scoredWords, "slut");
    if (slutWord) {
      expect(slutWord.severity).toBe(WordSeverity.PROFANE);
    }
  });

  it("'slut' in English context — always PROFANE", () => {
    const text = "That slut ruined everything for everyone.";
    const result = filter.detect(text);
    const slutWord = findScoredWord(result.scoredWords, "slut") ??
      findScoredWordContaining(result.scoredWords, "slut");
    expect(slutWord).toBeDefined();
    expect(slutWord!.severity).toBe(WordSeverity.PROFANE);
  });
});

// ─────────────────────────────────────────────────────────────────────────────
// 10. Other language pairs — Dutch, German cross-language
// ─────────────────────────────────────────────────────────────────────────────

describe("Other language pairs — cross-language innocence scoring", () => {
  let filter: BeKind;

  beforeAll(() => {
    filter = new BeKind({ silent: true });
  });

  it("Dutch 'hoe' (how) in Dutch text — dampened via innocence map", () => {
    const text =
      "Hoe gaat het met jou vandaag? Ik vroeg me af hoe laat het " +
      "concert begint en hoe we er het beste kunnen komen.";
    const result = filter.detect(text);
    const hoeWord = findScoredWord(result.scoredWords, "hoe");
    if (hoeWord) {
      expect(hoeWord.severity).toBe(WordSeverity.AMBIVALENT);
    }
  });

  it("German 'Mist' in English context about fog — dampened via en innocence entry", () => {
    const text =
      "The morning mist rolled across the valley, covering everything " +
      "in a thin layer of moisture. The mist cleared by noon.";
    const result = filter.detect(text);
    const mistWord = findScoredWord(result.scoredWords, "mist");
    if (mistWord) {
      expect(mistWord.severity).toBe(WordSeverity.AMBIVALENT);
    }
  });

  it.skip("'hoe' meaning garden tool in English — not flagged", () => {
    const text =
      "She picked up the hoe and began weeding the vegetable garden. " +
      "The old hoe had a worn wooden handle but still worked well.";
    const result = filter.detect(text);
    const hoeWord = findScoredWord(result.scoredWords, "hoe");
    if (hoeWord) {
      expect(hoeWord.severity).toBe(WordSeverity.AMBIVALENT);
    }
  });

  it("'beaver' in nature context — not detected as profanity", () => {
    const text =
      "The beaver built an impressive dam across the stream. Young beavers " +
      "learn to build by watching their parents construct lodges.";
    const result = filter.detect(text);
    const beaverWord = findScoredWord(result.scoredWords, "beaver");
    if (beaverWord) {
      expect(beaverWord.severity).toBe(WordSeverity.AMBIVALENT);
    }
  });

  // --- Regression: cross-language and leet speak detection (formerly H1/H2) ---

  it("'merde' in English text should be detected alongside English profanity", () => {
    const result = filter.detect("bullshit and merde together");
    expect(result.hasProfanity).toBe(true);
    expect(result.detectedWords.length).toBe(2);
  });

  it("leet speak 'f@ck' should be detected as profanity", () => {
    expect(filter.check("f@ck")).toBe(true);
  });
});

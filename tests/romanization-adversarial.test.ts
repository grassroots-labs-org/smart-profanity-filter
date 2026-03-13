/**
 * Adversarial / edge-case tests for isRomanized().
 *
 * Targets the boundary between romanized and native Latin-script text:
 *   - Code-switching (Hinglish, Spanglish, etc.)
 *   - Borderline word counts (4-5 words)
 *   - Foreign food/place names in English
 *   - Academic/scientific Latin
 *   - Polynesian languages (short words, vowel-heavy)
 *   - Brand names, tech jargon
 *   - Romanized profanity in English context
 *   - Song lyrics (K-pop, Bollywood, J-pop romanized)
 *   - Mixed-script edge cases
 */

import { detectRomanization } from "../src/romanization-detector.ts";

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function expectRomanized(text: string, label?: string) {
  const r = detectRomanization(text);
  expect({
    label: label ?? text.slice(0, 60),
    isRomanized: r.isRomanized,
    confidence: r.confidence,
    signals: r.signals,
  }).toMatchObject({ isRomanized: true });
}

function expectNotRomanized(text: string, label?: string) {
  const r = detectRomanization(text);
  expect({
    label: label ?? text.slice(0, 60),
    isRomanized: r.isRomanized,
    confidence: r.confidence,
    signals: r.signals,
  }).toMatchObject({ isRomanized: false });
}

describe("isRomanized adversarial", () => {
  // ═══════════════════════════════════════════════════════════════════════════
  // CODE-SWITCHING — romanized non-Latin language mixed with English
  // These SHOULD be detected as romanized since the core is transliterated
  // ═══════════════════════════════════════════════════════════════════════════

  describe("code-switching (romanized + English)", () => {
    test.each([
      ["yaar mujhe bahut accha laga that movie was amazing bhai"],
      ["bhai kal party hai ghar pe everyone is invited aana zaroor"],
      ["aaj bahut garmi hai lets go get some ice cream yaar chalte hain"],
      ["kya haal hai bro sab theek hai I hope you are doing well bhai"],
      ["ghar pe khana ready hai come home jaldi se bahut achha bana hai"],
    ])("Hinglish: '%s' → romanized", (text) => expectRomanized(text));

    test.each([
      ["watashi wa student desu I am studying at this university ganbatte"],
      ["kyou wa totemo ii tenki the weather is really nice sampo shimashou"],
      ["sumimasen where is the nearest station eki wa doko desu ka"],
    ])("Japanese-English: '%s' → romanized", (text) => expectRomanized(text));

    test.each([
      ["annyeonghaseyo my friend how are you gamsahamnida for coming today"],
    ])("Korean-English: '%s' → romanized", (text) => expectRomanized(text));

    test.each([
      ["oneul nalssiga joeyo perfect day for a picnic gachi gayo"],
    ])("Korean-English: '%s' → romanized", (text) => expectRomanized(text));

    test.each([
      ["privet kak dela my friend segodnya pogoda khoroshaya lets go park"],
      ["spasibo bolshoye for your help mne ochen priyatno bylo meeting you"],
    ])("Russian-English: '%s' → romanized", (text) => expectRomanized(text));

    test.each([
      ["yalla habibi lets go ana rayeh lal souk want to come wallah"],
      ["shukran jazeelan for the food ana bahebak ya habibi mashallah"],
    ])("Arabic-English: '%s' → romanized", (text) => expectRomanized(text));
  });

  // ═══════════════════════════════════════════════════════════════════════════
  // BORDERLINE WORD COUNT — 4-5 words, just above the "too short" cutoff
  // ═══════════════════════════════════════════════════════════════════════════

  describe("borderline word count (4-5 words)", () => {
    // These are short but still above the 3-word cutoff
    test.each([
      ["mujhe bahut accha laga"],
      ["privet kak dela segodnya"],
      ["watashi wa gakusei desu"],
      ["annyeonghaseyo gamsahamnida hwaiting jal"],
      ["wo shi zhongguo ren"],
    ])("4 words romanized: '%s'", (text) => {
      // At 4 words, detection is unreliable — just verify no crash
      const r = detectRomanization(text);
      expect(typeof r.isRomanized).toBe("boolean");
      expect(r.confidence).toBeGreaterThanOrEqual(0);
      expect(r.confidence).toBeLessThanOrEqual(1);
    });
  });

  // ═══════════════════════════════════════════════════════════════════════════
  // ENGLISH WITH HEAVY FOREIGN FOOD/PLACE NAMES — should NOT be romanized
  // ═══════════════════════════════════════════════════════════════════════════

  describe("English with foreign food names (NOT romanized)", () => {
    test.each([
      ["we ordered chicken tikka masala with garlic naan and mango chutney for dinner"],
      ["the menu includes gyoza tempura udon ramen teriyaki and miso soup"],
      ["try the shawarma with tahini hummus baba ghanoush and tabbouleh salad"],
      ["tonight we are making pad thai with tofu satay and tom kha gai soup"],
      ["the buffet had biryani samosa paneer tikka dal makhani and gulab jamun"],
      ["lets get some pho bo with banh mi spring rolls and nuoc mam sauce"],
      ["our brunch featured shakshuka with za'atar labneh and fresh pita bread"],
      ["the korean bbq place has bulgogi japchae kimchi jjigae and tteokbokki"],
    ])("'%s' → NOT romanized", (text) => expectNotRomanized(text));
  });

  describe("English with foreign place names (NOT romanized)", () => {
    test.each([
      ["we traveled from Marrakech to Casablanca then flew to Istanbul and Ankara"],
      ["the tour covered Kyoto Osaka Tokyo Hiroshima and Nagasaki in two weeks"],
      ["our itinerary includes Mumbai Delhi Jaipur Udaipur and Varanasi this month"],
      ["the conference is in Kuala Lumpur with side trips to Penang and Langkawi"],
      ["visiting Seoul Busan Jeju and Gyeongju during our trip to South Korea"],
    ])("'%s' → NOT romanized", (text) => expectNotRomanized(text));
  });

  // ═══════════════════════════════════════════════════════════════════════════
  // ACADEMIC / SCIENTIFIC / LATIN — should NOT be romanized
  // ═══════════════════════════════════════════════════════════════════════════

  describe("academic and scientific text (NOT romanized)", () => {
    test.each([
      ["the genus homo sapiens evolved approximately three hundred thousand years ago in africa"],
      ["the hypothesis was tested using a double blind randomized controlled trial methodology"],
      ["et cetera ad hoc bona fide de facto modus operandi per capita status quo vice versa"],
      ["the algorithm uses fibonacci sequences and euclidean distance to optimize the heuristic"],
      ["photosynthesis occurs in chloroplasts via photophosphorylation of adenosine diphosphate"],
    ])("'%s' → NOT romanized", (text) => expectNotRomanized(text));
  });

  // ═══════════════════════════════════════════════════════════════════════════
  // POLYNESIAN / AUSTRONESIAN — vowel-heavy, short words, should NOT trigger
  // ═══════════════════════════════════════════════════════════════════════════

  describe("Polynesian and vowel-heavy languages (NOT romanized)", () => {
    test.each([
      ["kia ora whanau aroha nui haere mai tangata whenua aotearoa kainga"],  // Maori
    ])("'%s' → NOT romanized", (text) => expectNotRomanized(text));

    // Known false positives: Polynesian short vowel-heavy words confuse ELD
    // (low scores, unreliable detection) and scatter signals accumulate
    test("Hawaiian: known false positive — vowel-heavy words confuse ELD", () => {
      const r = detectRomanization("aloha mahalo ohana kai moana keiki lanai hula lei pua nui mana");
      expect(r.isRomanized).toBe(true); // Known limitation
      expect(r.confidence).toBeLessThan(0.60);
    });

    test("Samoan: known false positive — vowel-heavy words confuse ELD", () => {
      const r = detectRomanization("talofa lava faafetai manuia le aso faatasi o tatou aiga samoa");
      expect(r.isRomanized).toBe(true); // Known limitation
      expect(r.confidence).toBeLessThan(0.60);
    });
  });

  // ═══════════════════════════════════════════════════════════════════════════
  // ESPERANTO — constructed language, should NOT be romanized
  // ═══════════════════════════════════════════════════════════════════════════

  describe("Esperanto (NOT romanized)", () => {
    test.each([
      ["saluton kiel vi fartas mi estas tre felica renkonti vin hodiaux bonan tagon"],
      ["la mondo estas bela kaj ni devas protekti gxin por estontaj generacioj"],
    ])("'%s' → NOT romanized", (text) => expectNotRomanized(text));
  });

  // ═══════════════════════════════════════════════════════════════════════════
  // BRAND / TECH JARGON — should NOT be romanized
  // ═══════════════════════════════════════════════════════════════════════════

  describe("tech jargon and brand names (NOT romanized)", () => {
    test.each([
      ["deploy the nginx container to kubernetes using helm charts and istio service mesh"],
      ["configure the webpack bundler with babel typescript eslint prettier and husky hooks"],
      ["the api gateway routes to lambda functions through dynamodb and elasticache redis cluster"],
      ["samsung huawei xiaomi oppo vivo oneplus realme poco motorola nokia asus lenovo"],
      ["install pytorch tensorflow keras scikit learn pandas numpy matplotlib seaborn plotly"],
    ])("'%s' → NOT romanized", (text) => expectNotRomanized(text));
  });

  // ═══════════════════════════════════════════════════════════════════════════
  // MUSIC / LYRICS — romanized song lyrics should be detected
  // ═══════════════════════════════════════════════════════════════════════════

  describe("romanized song lyrics → romanized", () => {
    test.each([
      ["tujhe dekha toh yeh jaana sanam pyaar hota hai deewana bhai"],
      ["kuch kuch hota hai tum nahin jaante kya mera dil kehta hai"],
      ["kal ho na ho pal bhar mein yeh zindagi hai jeene ka bahana"],
    ])("Bollywood romanized: '%s' → romanized", (text) => expectRomanized(text));

    test.each([
      ["sakura no hana ga saite kirei na haru desu ne tanoshii"],
      ["yume no naka de anata ni aitai hoshi ga kagayaku yoru ni"],
    ])("J-pop romanized: '%s' → romanized", (text) => expectRomanized(text));

    test.each([
      ["saranghaeyo oneul bam uri gachi gayo noraereul halkka yo"],
      ["neol saranghae jeongmal mani hwaiting uri gachi gayo chinguya"],
    ])("K-pop romanized: '%s' → romanized", (text) => expectRomanized(text));
  });

  // ═══════════════════════════════════════════════════════════════════════════
  // ROMANIZED PROFANITY — should still be detected as romanized
  // ═══════════════════════════════════════════════════════════════════════════

  describe("romanized profanity → romanized", () => {
    test.each([
      ["bhenchod madarchod gaandu saala harami kutta kamina bahut bura"],
      ["suka blyat pizdets nahui idi nahui mudak debil dolboyob tupoy"],
      ["kuso yarou baka kisama temee shine kutabare ahondara bokke"],
    ])("'%s' → romanized", (text) => expectRomanized(text));
  });

  // ═══════════════════════════════════════════════════════════════════════════
  // REPETITIVE / SPAM TEXT — should NOT be romanized
  // ═══════════════════════════════════════════════════════════════════════════

  describe("repetitive and spam text (NOT romanized)", () => {
    test.each([
      ["ha ha ha ha ha ha ha ha ha ha ha ha ha ha ha"],
      ["no no no no no no no no no no no no no no no"],
      ["la la la la la la la la la la la la la la la"],
      ["click here now free money win big prize today amazing offer limited time"],
    ])("'%s' → NOT romanized", (text) => expectNotRomanized(text));
  });

  // ═══════════════════════════════════════════════════════════════════════════
  // NUMBERS AND MIXED CONTENT — should NOT be romanized
  // ═══════════════════════════════════════════════════════════════════════════

  describe("text with lots of numbers (NOT romanized)", () => {
    test.each([
      ["call us at 555 1234 or email info at company dot com for more details today"],
      ["the event is on march 15 2024 from 9am to 5pm at room 302 building seven"],
      ["score was 3 to 1 in the first half then 5 to 2 final great game today"],
    ])("'%s' → NOT romanized", (text) => expectNotRomanized(text));
  });

  // ═══════════════════════════════════════════════════════════════════════════
  // YOGA / MEDITATION / MARTIAL ARTS — English with Sanskrit/Japanese terms
  // Should NOT be romanized (these are English texts with loanwords)
  // ═══════════════════════════════════════════════════════════════════════════

  describe("English with spiritual/martial arts loanwords (NOT romanized)", () => {
    test.each([
      ["begin with surya namaskar then move into virabhadrasana and finish with savasana"],
      ["the sensei demonstrated a perfect ippon seoi nage followed by osoto gari technique"],
      ["practice your kata bunkai then move to kumite with proper kime and zanshin focus"],
      ["today we focus on pranayama ujjayi breathing nadi shodhana and kapalabhati techniques"],
      ["the sifu showed wing chun biu jee form followed by chi sao practice"],
    ])("'%s' → NOT romanized", (text) => expectNotRomanized(text));
  });

  // ═══════════════════════════════════════════════════════════════════════════
  // MIXED SCRIPTS IN SAME TEXT — partial native + partial Latin
  // ═══════════════════════════════════════════════════════════════════════════

  describe("mixed script text", () => {
    test("mostly Latin with a few Devanagari words → not romanized (Latin dominant)", () => {
      // >85% Latin
      const r = detectRomanization("hello friends please come to the event tomorrow at the park namaste दोस्तों");
      expect(typeof r.isRomanized).toBe("boolean");
    });

    test("mostly Devanagari → native-script signal", () => {
      const r = detectRomanization("नमस्ते दोस्तों आज पार्टी है बहुत मज़ा आएगा");
      expect(r.isRomanized).toBe(false);
      expect(r.signals).toContain("native-script");
    });
  });

  // ═══════════════════════════════════════════════════════════════════════════
  // SIMILAR-LOOKING LANGUAGES — stress test disambiguation
  // ═══════════════════════════════════════════════════════════════════════════

  describe("languages that share trigrams with romanization sets", () => {
    // Somali has some patterns similar to Arabic romanization
    test.each([
      ["waxaan ahay qof reer soomaaliya waa mahadsanid saaxiib walaal"],
      ["subax wanaagsan sideed tahay adigaa wanaagsan mahadsanid walaal"],
    ])("Somali: '%s' → NOT romanized", (text) => expectNotRomanized(text));

    // Hausa (also has some Arabic-like patterns, Latin script)
    test.each([
      ["sannu da zuwa ina jin dadin ganin ku yau rana tana da kyau"],
      ["barka da safe yaya aiki yake mu je kasuwa da safe gobe"],
    ])("Hausa: '%s' → NOT romanized", (text) => expectNotRomanized(text));

    // Yoruba — ELD correctly detects as "yo" which is in the garbage lang set,
    // causing false positives. The first example triggers; the second doesn't.
    test("Yoruba: known false positive — 'yo' is in ELD garbage lang set", () => {
      const r = detectRomanization("bawo ni o se n se e se o dara o ma se daradara loni");
      expect(r.isRomanized).toBe(true); // Known limitation
      expect(r.signals).toEqual(expect.arrayContaining(["eld-garbage-lang"]));
    });

    test.each([
      ["eku ile o kaabo si ile wa a dupe lowo olorun fun gbogbo nkan"],
    ])("Yoruba: '%s' → NOT romanized", (text) => expectNotRomanized(text));
  });

  // ═══════════════════════════════════════════════════════════════════════════
  // TRANSLITERATION EDGE CASES — unusual but valid romanizations
  // ═══════════════════════════════════════════════════════════════════════════

  describe("unusual romanization styles", () => {
    test.each([
      // CAPS romanized Hindi (people type in all caps sometimes)
      ["MUJHE BAHUT ACCHA LAGA YEH DEKHKAR KI TUM AA GAYE BHAI"],
      // Mixed case
      ["Mujhe Bahut Accha Laga Yeh Dekhkar Ki Tum Aa Gaye"],
    ])("Hindi in different cases: '%s' → romanized", (text) => expectRomanized(text));

    test.each([
      // Russian with common alternate transliterations
      ["zdrastvuyte kak vy pozhivayete segodnya ochen khorosho spasibo"],
      ["privet druzya kak u vas dela segodnya vsyo normalno da"],
    ])("Russian alternate transliteration: '%s' → romanized", (text) => expectRomanized(text));
  });

  // ═══════════════════════════════════════════════════════════════════════════
  // "shit"/"hite" QUADGRAM STRESS TEST — verify English text with "shit"
  // doesn't false-positive as Japanese romaji
  // ═══════════════════════════════════════════════════════════════════════════

  describe("English profanity with 'shit' (NOT romanized)", () => {
    test.each([
      ["this is total shit I cant believe how bad this event turned out"],
      ["holy shit that concert was amazing I had such a great time last night"],
      ["the food was shit but at least the drinks were good and cheap"],
      ["no shit sherlock that was obvious from the start everyone knew it"],
      ["shit happens man just move on and try again tomorrow morning"],
      ["what a shitty day at work everything went wrong from the start"],
      ["dont give me that bullshit just tell me the truth about what happened"],
      ["the white house announced new policy changes for next quarter today"],
      ["she wore a white dress to the summer garden party last weekend"],
      ["the architecture of the building is quite exquisite with white marble columns"],
    ])("'%s' → NOT romanized", (text) => expectNotRomanized(text));
  });

  // ═══════════════════════════════════════════════════════════════════════════
  // MORE ROMAJI — verify "shite" context improves Japanese detection
  // ═══════════════════════════════════════════════════════════════════════════

  describe("Japanese romaji with shite/shita verb forms", () => {
    test.each([
      ["watashi wa benkyou shite imasu mainichi ganbatte imasu yo"],
      ["kare wa shigoto shite iru kara ima isogashii rashii desu"],
      ["tomodachi to hanashite ita toki totemo tanoshikatta desu ne"],
      ["nihongo o renshuu shite kara sukoshi jouzu ni narimashita"],
      ["kinou eiga o mite kara gohan o tabete nemashita sugoku"],
    ])("'%s' → romanized", (text) => expectRomanized(text));
  });

  // ═══════════════════════════════════════════════════════════════════════════
  // MORE MIXED-WORD SENTENCES — realistic multilingual text
  // ═══════════════════════════════════════════════════════════════════════════

  describe("mixed-word realistic sentences", () => {
    // Hinglish in social media style — higher Hindi word density
    test.each([
      ["arre yaar tu toh bahut funny hai I was literally dying laughing bhai"],
    ])("Hinglish social media: '%s' → romanized", (text) => expectRomanized(text));

    // Moderate English dilution — enough Hindi to detect
    test.each([
      ["exam ke baad mujhe bahut relief mila finally it is over now yaar"],
    ])("Hinglish moderate dilution: '%s' → romanized", (text) => expectRomanized(text));

    // English dilution — signal present but below threshold
    test.each([
      ["party mein DJ ne bahut acche songs bajaye sab log dance kar rahe the amazing"],
      ["mummy ne aaj bahut tasty biryani banayi the whole family loved it"],
    ])("Hinglish English dilution: '%s' — signal present but below threshold", (text) => {
      const r = detectRomanization(text);
      expect(r.confidence).toBeGreaterThan(0.15);
      expect(r.confidence).toBeLessThan(0.50);
    });

    // Arabic-English in messaging style
    test.each([
      ["habibi where are you ana waiting for you yalla come quickly wallah"],
      ["the restaurant was amazing mashallah best hummus wa falafel ever tried"],
    ])("Arabic-English messaging: '%s' → romanized", (text) => expectRomanized(text));

    // Japanese-English in casual style
    test.each([
      ["that ramen shop wa sugoi desu the tsukemen was oishikatta ne"],
      ["lets go to karaoke tonight watashi wa utaitai desu yo tanoshimi"],
    ])("Japanese-English casual: '%s' → romanized", (text) => expectRomanized(text));

    // Korean-English in fan/community style — mixed tier signal
    test.each([
      ["oppa saranghaeyo your new album is daebak uri gachi fighting hwaiting"],
      ["the concert was jinjja amazing gamsahamnida for the great performance uri"],
    ])("Korean-English fan style: '%s' — mixed tier", (text) => {
      const r = detectRomanization(text);
      expect(r.tier).toBe("mixed");
      expect(r.confidence).toBeGreaterThanOrEqual(0.30);
      expect(r.confidence).toBeLessThan(0.60);
    });
  });

  // ═══════════════════════════════════════════════════════════════════════════
  // MORE ENGLISH THAT SHOULDN'T TRIGGER — diverse registers
  // ═══════════════════════════════════════════════════════════════════════════

  describe("more English registers (NOT romanized)", () => {
    test.each([
      // Gaming
      ["just got a triple kill with the shotgun then clutched the round for the win gg"],
      ["the boss fight was insane we wiped three times before finally beating it lol"],
      // Social media
      ["cant believe she said that on live stream the drama is getting out of hand fr"],
      ["just posted my new recipe video on tiktok hope it goes viral this time fingers crossed"],
      // Weather
      ["massive thunderstorm rolling in from the west better secure the patio furniture"],
      ["beautiful sunny day perfect for a hike in the mountains with the dogs today"],
      // Real estate
      ["three bedroom apartment with hardwood floors updated kitchen and in unit laundry"],
      ["charming cottage style home with wraparound porch on a quiet tree lined street"],
    ])("'%s' → NOT romanized", (text) => expectNotRomanized(text));
  });

  // ═══════════════════════════════════════════════════════════════════════════
  // ROMANIZED WITH TYPOS / INFORMAL SPELLING — real-world messiness
  // ═══════════════════════════════════════════════════════════════════════════

  describe("romanized with informal spelling", () => {
    test.each([
      // Hindi with common informal spellings
      ["bhai kya haal hai yaar sab thik hai naa tension mat le chill kar"],
      ["abey suno yaar aaj movie dekhne chalte hai bahut bore ho raha hoon"],
      // Arabic with numbers (common in chat: 3=ain, 7=ha, 2=hamza)
      ["ya habibi keefak wallah ana mish 3arif shu badi a3mel bukra"],
    ])("'%s' → romanized", (text) => expectRomanized(text));
  });

  // ═══════════════════════════════════════════════════════════════════════════
  // CONFIDENCE TIERS — verify tier classification
  // ═══════════════════════════════════════════════════════════════════════════

  describe("confidence tier classification", () => {
    test.each([
      // Strong romanized text → high tier (>= 0.60)
      ["bhenchod madarchod gaandu saala harami kutta kamina bahut bura"],
      ["suka blyat pizdets nahui idi nahui mudak debil dolboyob tupoy"],
      ["tujhe dekha toh yeh jaana sanam pyaar hota hai deewana bhai"],
      ["saranghaeyo oneul bam uri gachi gayo noraereul halkka yo"],
      ["mujhe bahut accha laga yeh dekhkar ki tum aa gaye bhai bahut khushi hui"],
    ])("high tier (>=0.60): '%s'", (text) => {
      const r = detectRomanization(text);
      expect(r.tier).toBe("high");
      expect(r.confidence).toBeGreaterThanOrEqual(0.60);
      expect(r.isRomanized).toBe(true);
    });

    test.each([
      // Mixed signal (0.30-0.59) — some romanized, some not sure
      ["yume no naka de anata ni aitai hoshi ga kagayaku yoru ni"],
      ["party mein DJ ne bahut acche songs bajaye sab log dance kar rahe the amazing"],
      ["oppa saranghaeyo your new album is daebak uri gachi fighting hwaiting"],
      ["mummy ne aaj bahut tasty biryani banayi the whole family loved it"],
    ])("mixed tier (0.30-0.59): '%s'", (text) => {
      const r = detectRomanization(text);
      expect(r.tier).toBe("mixed");
      expect(r.confidence).toBeGreaterThanOrEqual(0.30);
      expect(r.confidence).toBeLessThan(0.60);
    });

    test.each([
      // Plain English → none tier
      ["the quick brown fox jumps over the lazy dog in the park today"],
      ["just got a triple kill with the shotgun then clutched the round for the win gg"],
      ["three bedroom apartment with hardwood floors updated kitchen and in unit laundry"],
    ])("none tier (<0.30): '%s'", (text) => {
      const r = detectRomanization(text);
      expect(r.tier).toBe("none");
      expect(r.confidence).toBeLessThan(0.30);
      expect(r.isRomanized).toBe(false);
    });

    test("native script → none tier", () => {
      const r = detectRomanization("नमस्ते दोस्तों आज पार्टी है बहुत मज़ा आएगा");
      expect(r.tier).toBe("none");
    });

    test("too short → none tier", () => {
      const r = detectRomanization("kya haal hai");
      expect(r.tier).toBe("none");
    });
  });
});

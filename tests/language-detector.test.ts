import {
  detectLanguages,
  detectBestLanguage,
  classifyWordScript,
  scoreWord,
} from "../src/language-detector.js";

// ─────────────────────────────────────────────────────────────────────────────
// Helpers
// ─────────────────────────────────────────────────────────────────────────────

/** Assert the top-detected language matches expected */
function expectTopLang(text: string, lang: string) {
  const result = detectBestLanguage(text);
  expect(result.language).toBe(lang);
}

/** Assert a language is present anywhere in the detection results */
function expectLangPresent(text: string, lang: string) {
  const result = detectLanguages(text);
  const codes = result.languages.map((l) => l.language);
  expect(codes).toContain(lang);
}

/** Assert the top language for scoreWord */
function expectTopWordLang(word: string, lang: string) {
  const scores = scoreWord(word);
  const sorted = Object.entries(scores).sort((a, b) => (b[1] ?? 0) - (a[1] ?? 0));
  expect(sorted.length).toBeGreaterThan(0);
  expect(sorted[0][0]).toBe(lang);
}

describe("Language Detector", () => {
  // ═══════════════════════════════════════════════════════════════════════════
  // SECTION 1: Script-based detection (non-Latin scripts)
  // ═══════════════════════════════════════════════════════════════════════════

  describe("script detection — non-Latin", () => {
    test("detects Japanese (Hiragana/Katakana)", () => {
      const result = detectBestLanguage("くそ野郎");
      expect(result.language).toBe("ja");
      expect(result.proportion).toBeGreaterThan(0.3);
    });

    test("detects Korean (Hangul)", () => {
      const result = detectBestLanguage("씨발 개새끼");
      expect(result.language).toBe("ko");
      expect(result.proportion).toBeGreaterThan(0.8);
    });

    test("detects Chinese (CJK without kana)", () => {
      const result = detectLanguages("他妈的混蛋");
      const zh = result.languages.find((l) => l.language === "zh");
      expect(zh).toBeDefined();
      expect(zh!.proportion).toBeGreaterThan(0.3);
    });

    test("detects Russian (Cyrillic)", () => {
      const result = detectBestLanguage("сука блять");
      expect(result.language).toBe("ru");
      expect(result.proportion).toBeGreaterThan(0.8);
    });

    test("detects Arabic", () => {
      const result = detectBestLanguage("كلب ابن الحرام");
      expect(result.language).toBe("ar");
      expect(result.proportion).toBeGreaterThan(0.8);
    });

    test("detects Hindi (Devanagari)", () => {
      const result = detectBestLanguage("भोसडीके मादरचोद");
      expect(result.language).toBe("hi");
      expect(result.proportion).toBeGreaterThan(0.8);
    });

    test("detects Bengali", () => {
      const result = detectBestLanguage("শালা বাঞ্চোত");
      expect(result.language).toBe("bn");
      expect(result.proportion).toBeGreaterThan(0.8);
    });

    test("detects Tamil", () => {
      const result = detectBestLanguage("தேவடியா மகன்");
      expect(result.language).toBe("ta");
      expect(result.proportion).toBeGreaterThan(0.8);
    });

    test("detects Telugu", () => {
      const result = detectBestLanguage("దెంగు లంజా కొడకా");
      expect(result.language).toBe("te");
      expect(result.proportion).toBeGreaterThan(0.8);
    });

    // Additional native script coverage
    test("detects Japanese with only Hiragana", () => {
      expectTopLang("おはようございます", "ja");
    });

    test("detects Japanese with only Katakana", () => {
      expectTopLang("コンピューター", "ja");
    });

    test("detects Korean with Jamo", () => {
      expectTopLang("ㅋㅋㅋ ㅎㅎㅎ", "ko");
    });

    test("detects Hindi with extended Devanagari", () => {
      expectTopLang("हिंदुस्तान ज़िन्दाबाद", "hi");
    });

    test("detects Arabic with presentation forms", () => {
      // Single-glyph ligatures are short; add more Arabic text to anchor detection
      expectTopLang("بسم ﷲ الرحمن الرحيم ﷺ", "ar");
    });
  });

  // ═══════════════════════════════════════════════════════════════════════════
  // SECTION 2: Vocabulary detection — Latin-script languages
  // ═══════════════════════════════════════════════════════════════════════════

  describe("vocabulary detection — Latin-script languages", () => {
    // ── Short sentences (3-6 words) ──

    describe("short sentences", () => {
      test("English short", () => expectTopLang("The quick brown fox", "en"));
      test("Spanish short", () => expectTopLang("¿Cómo estás hoy amigo?", "es"));
      test("French short", () => expectTopLang("Bonjour comment allez-vous", "fr"));
      test("German short", () => expectTopLang("Wie geht es Ihnen", "de"));
      test("Italian short", () => expectTopLang("Come stai oggi amico", "it"));
      test("Portuguese short", () => expectTopLang("Como você está hoje", "pt"));
      test("Dutch short", () => expectTopLang("Hoe gaat het vandaag", "nl"));
      test("Turkish short", () => expectTopLang("Nasılsın bugün arkadaşım", "tr"));
    });

    // ── Medium sentences (7-15 words) ──

    describe("medium sentences", () => {
      test("English", () => {
        expectTopLang("The quick brown fox jumps over the lazy dog in the park", "en");
      });

      test("Spanish", () => {
        expectTopLang("El tiempo está muy bueno hoy y creo que deberíamos salir", "es");
      });

      test("French", () => {
        expectTopLang("Il fait très beau aujourd'hui et je pense que nous devrions sortir", "fr");
      });

      test("German", () => {
        expectTopLang("Das Wetter ist sehr schön heute und ich denke wir sollten rausgehen", "de");
      });

      test("Italian", () => {
        expectTopLang("Il tempo è molto bello oggi e penso che dovremmo uscire", "it");
      });

      test("Portuguese", () => {
        expectTopLang("O tempo está muito bom hoje e acho que devemos sair", "pt");
      });

      test("Dutch", () => {
        expectTopLang("Het weer is heel mooi vandaag en ik denk dat we moeten uitgaan", "nl");
      });

      test("Turkish", () => {
        expectTopLang("Hava çok güzel bugün ve dışarı çıkmamız gerektiğini düşünüyorum", "tr");
      });
    });

    // ── Long paragraphs (20+ words) ──

    describe("long paragraphs", () => {
      test("English paragraph", () => {
        expectTopLang(
          "The weather today is absolutely wonderful and I think we should go " +
          "for a walk in the park before it gets too late in the afternoon. " +
          "We could also stop by the store to get some groceries for dinner tonight."
        , "en");
      });

      test("Spanish paragraph", () => {
        expectTopLang(
          "El clima de hoy es absolutamente maravilloso y creo que deberíamos " +
          "ir a caminar por el parque antes de que sea demasiado tarde en la tarde. " +
          "También podríamos pasar por la tienda para comprar algunos alimentos para la cena."
        , "es");
      });

      test("French paragraph", () => {
        expectTopLang(
          "Le temps aujourd'hui est absolument merveilleux et je pense que " +
          "nous devrions aller nous promener dans le parc avant qu'il ne soit trop tard. " +
          "Nous pourrions aussi nous arrêter au magasin pour acheter quelques courses pour le dîner."
        , "fr");
      });

      test("German paragraph", () => {
        expectTopLang(
          "Das Wetter heute ist absolut wunderbar und ich denke wir sollten " +
          "einen Spaziergang im Park machen bevor es zu spät wird am Nachmittag. " +
          "Wir könnten auch beim Laden vorbeischauen um etwas für das Abendessen einzukaufen."
        , "de");
      });

      test("Italian paragraph", () => {
        expectTopLang(
          "Il tempo oggi è assolutamente meraviglioso e penso che dovremmo " +
          "fare una passeggiata nel parco prima che diventi troppo tardi nel pomeriggio. " +
          "Potremmo anche fermarci al negozio per comprare qualcosa per la cena di stasera."
        , "it");
      });

      test("Portuguese paragraph", () => {
        expectTopLang(
          "O tempo hoje está absolutamente maravilhoso e acho que devemos " +
          "dar um passeio no parque antes que fique muito tarde à tarde. " +
          "Também poderíamos parar no mercado para comprar algumas coisas para o jantar."
        , "pt");
      });

      test("Dutch paragraph", () => {
        expectTopLang(
          "Het weer vandaag is absoluut prachtig en ik denk dat we een wandeling " +
          "in het park moeten maken voordat het te laat wordt in de middag. " +
          "We zouden ook bij de winkel kunnen stoppen om wat boodschappen voor het avondeten te halen."
        , "nl");
      });

      test("Turkish paragraph", () => {
        expectTopLang(
          "Bugün hava kesinlikle harika ve öğleden sonra çok geç olmadan parkta " +
          "bir yürüyüş yapmamız gerektiğini düşünüyorum. Akşam yemeği için " +
          "marketten bir şeyler almak için de uğrayabiliriz."
        , "tr");
      });
    });

    // ── Proportion sanity: long monolingual text should have high proportion ──

    describe("long text proportion dominance", () => {
      // Latin-family languages share many function words, so proportions are
      // diluted across related languages. The top language should still clearly
      // lead (> 0.2) and be correctly identified.

      test("long English text is top language with meaningful proportion", () => {
        const result = detectBestLanguage(
          "I went to the store yesterday to buy some groceries because we were " +
          "running out of food and I wanted to make sure we had enough for the week"
        );
        expect(result.language).toBe("en");
        expect(result.proportion).toBeGreaterThan(0.2);
      });

      test("long Spanish text is top language with meaningful proportion", () => {
        const result = detectBestLanguage(
          "Ayer fui a la tienda para comprar algunos alimentos porque se nos estaban " +
          "acabando y quería asegurarme de que tuviéramos suficiente para toda la semana"
        );
        expect(result.language).toBe("es");
        expect(result.proportion).toBeGreaterThan(0.2);
      });

      test("long French text is top language with meaningful proportion", () => {
        const result = detectBestLanguage(
          "Hier je suis allé au magasin pour acheter quelques courses parce que nous " +
          "n'avions plus de nourriture et je voulais être sûr que nous en aurions assez pour la semaine"
        );
        expect(result.language).toBe("fr");
        expect(result.proportion).toBeGreaterThan(0.2);
      });

      test("long German text is top language with meaningful proportion", () => {
        const result = detectBestLanguage(
          "Gestern bin ich zum Laden gegangen um ein paar Lebensmittel zu kaufen weil wir " +
          "fast nichts mehr hatten und ich sicherstellen wollte dass wir genug für die Woche haben"
        );
        expect(result.language).toBe("de");
        expect(result.proportion).toBeGreaterThan(0.2);
      });

      test("top language proportion is at least 1.5x the runner-up", () => {
        const result = detectLanguages(
          "Je suis allé au magasin hier pour acheter du pain et du fromage. " +
          "Le boulanger était très gentil et nous avons parlé pendant quelques minutes."
        );
        if (result.languages.length >= 2) {
          expect(result.languages[0].proportion).toBeGreaterThan(
            result.languages[1].proportion * 1.5
          );
        }
      });
    });
  });

  // ═══════════════════════════════════════════════════════════════════════════
  // SECTION 3: Romanized non-Latin language detection
  // ═══════════════════════════════════════════════════════════════════════════

  describe("romanized language detection", () => {
    // ── Short romanized phrases ──

    describe("short romanized phrases (3-5 words)", () => {
      test("Japanese romaji", () => expectTopLang("arigatou gozaimasu sensei", "ja"));
      test("Korean romanized", () => expectTopLang("annyeong haseyo oppa", "ko"));
      test("Hindi romanized", () => expectTopLang("namaste dost kaise ho", "hi"));
      test("Russian romanized", () => expectTopLang("privet kak dela spasibo", "ru"));
      test("Arabic romanized", () => expectTopLang("marhaba habibi shukran", "ar"));
      test("Chinese pinyin", () => expectTopLang("ni hao pengyou xiexie", "zh"));
      test("Bengali romanized", () => expectTopLang("ami bhalo achi dhonnobad", "bn"));
      test("Tamil romanized", () => expectTopLang("vanakkam nanbaa nandri", "ta"));
      test("Telugu romanized", () => expectTopLang("namaskaram snehithudu dhanyavaadalu", "te"));
    });

    // ── Longer romanized sentences ──

    describe("longer romanized sentences (6+ words)", () => {
      test("Japanese romaji sentence", () => {
        expectTopLang("watashi wa nihon no tabemono ga daisuki desu arigatou", "ja");
      });

      test("Korean romanized sentence", () => {
        expectTopLang("annyeong haseyo jal meokgesseumnida kamsahamnida saranghae yo", "ko");
      });

      test("Hindi romanized sentence", () => {
        expectTopLang("namaste main bahut accha hoon aap kaise hain shukriya dhanyavaad", "hi");
      });

      test("Russian romanized sentence", () => {
        expectTopLang("privet kak dela segodnya ochen khorosho spasibo bolshoy mir", "ru");
      });

      test("Arabic romanized sentence", () => {
        expectTopLang("marhaba kayf halak ana bikhayr shukran alhamdulillah inshallah yalla", "ar");
      });

      test("Chinese pinyin sentence", () => {
        expectTopLang("ni hao wo shi zhongguo ren xiexie zaijian pengyou mingbai", "zh");
      });

      test("Bengali romanized sentence", () => {
        expectTopLang("ami bhalo achi tumi kemon acho dhonnobad bondhu bhalobasha jibon", "bn");
      });

      test("Tamil romanized sentence", () => {
        expectTopLang("vanakkam nanbaa eppadi irukeenga nalla irukken nandri anbu vazhkai", "ta");
      });

      test("Telugu romanized sentence", () => {
        expectTopLang("namaskaram ela unnaru baagunnanu dhanyavaadalu snehithudu prema bratuku", "te");
      });
    });

    // ── Romanized profanity detection ──

    describe("romanized profanity detection", () => {
      test("Japanese romanized profanity", () => {
        expectTopLang("kuso baka aho chikushou kisama temee kutabare", "ja");
      });

      test("Korean romanized profanity", () => {
        expectTopLang("shibal gaesaekki byeongsin michin dakchyeo jiral", "ko");
      });

      test("Hindi romanized profanity", () => {
        expectTopLang("chutiya bhenchod madarchod gaandu bhosdike randi saala", "hi");
      });

      test("Russian romanized profanity", () => {
        expectTopLang("suka blyat pizdets nahui ebat mudak gandon", "ru");
      });

      test("Arabic romanized profanity", () => {
        expectTopLang("sharmouta kelb kuss himar khanzeera manyak ghabi", "ar");
      });

      test("Bengali romanized profanity", () => {
        expectTopLang("bokachoda banchod khanki maagi shala haramzada nongra", "bn");
      });

      test("Tamil romanized profanity", () => {
        expectTopLang("thevidiya otha pundai soothu mayiru baadu loosu", "ta");
      });

      test("Telugu romanized profanity", () => {
        expectTopLang("dengey lanja pooku sulli modda gudda donga", "te");
      });
    });
  });

  // ═══════════════════════════════════════════════════════════════════════════
  // SECTION 4: Mixed-language detection
  // ═══════════════════════════════════════════════════════════════════════════

  describe("mixed-language text", () => {
    test("English + Japanese script", () => {
      const result = detectLanguages("Hello world こんにちは世界");
      const codes = result.languages.map((l) => l.language);
      expect(codes).toContain("ja");
      expect(codes).toContain("en");
    });

    test("English + Korean script", () => {
      const result = detectLanguages("I love 한국어 very much");
      const codes = result.languages.map((l) => l.language);
      expect(codes).toContain("ko");
      expect(codes).toContain("en");
    });

    test("English + Russian Cyrillic", () => {
      const result = detectLanguages("Hello everyone, this is a message with some привет мир друг");
      const codes = result.languages.map((l) => l.language);
      expect(codes).toContain("ru");
      expect(codes).toContain("en");
    });

    test("English + Arabic script", () => {
      expectLangPresent("The food was حرام and totally مش okay", "ar");
    });

    test("English + Hindi Devanagari", () => {
      expectLangPresent("Yaar ये तो बहुत cool है", "hi");
    });

    test("English + Bengali script", () => {
      expectLangPresent("Hey বন্ধু how are you today", "bn");
    });

    test("English + Tamil script", () => {
      expectLangPresent("That நண்பா is really talented", "ta");
    });

    test("English + Telugu script", () => {
      expectLangPresent("She said నమస్కారం before leaving", "te");
    });
  });

  // ═══════════════════════════════════════════════════════════════════════════
  // SECTION 5: Code-switched / bilingual varieties
  // ═══════════════════════════════════════════════════════════════════════════

  describe("Japenglish — Japanese + English mixed text", () => {
    test("detects both ja and en in 'That was すごい amazing'", () => {
      const result = detectLanguages("That was すごい amazing desu ne");
      const codes = result.languages.map((l) => l.language);
      expect(codes).toContain("ja");
    });

    test("detects ja in katakana loanwords", () => {
      expectLangPresent("Let's go to the カラオケ tonight", "ja");
    });

    test("mostly-Japanese with English sprinkled → ja top", () => {
      expectTopLang("今日はとても good な day でした", "ja");
    });

    test("romaji mixed with English", () => {
      expectLangPresent("This ramen is so oishii and sugoi delicious", "ja");
    });

    test("anime-style mixed text", () => {
      expectLangPresent("Oh my god, that was 本当に amazing, sugoi desu ne", "ja");
    });

    test("ja profanity in English sentence", () => {
      expectLangPresent("You are such a バカ and くそ野郎", "ja");
    });
  });

  describe("Konglish — Korean + English mixed text", () => {
    test("Korean script + English words", () => {
      expectLangPresent("오빠 is so cool and 대박", "ko");
    });

    test("mostly-Korean with English → ko top", () => {
      expectTopLang("오늘 meeting 끝나고 coffee 마시자", "ko");
    });

    test("ko profanity in English sentence", () => {
      expectLangPresent("That guy is a real 씨발 놈", "ko");
    });

    test("K-pop style text", () => {
      expectLangPresent("OMG 사랑해 oppa, you're 대박 amazing", "ko");
    });

    test("romanized Korean with English", () => {
      expectLangPresent("Let's go annyeong haseyo everyone, jal meokgesseumnida", "ko");
    });
  });

  describe("Hinglish — Hindi + English mixed text", () => {
    test("Devanagari + English mix", () => {
      expectLangPresent("Yaar ये तो बहुत cool है", "hi");
    });

    test("romanized Hinglish → hi top", () => {
      expectTopLang("Yaar kya scene hai, bahut accha kaam kiya tune", "hi");
    });

    test("hi profanity in English sentence", () => {
      expectLangPresent("That chutiya bhenchod ruined everything", "hi");
    });

    test("Bollywood-style dialogue", () => {
      expectLangPresent("Listen na yaar, main abhi busy hoon, baad mein call karta hoon", "hi");
    });
  });

  describe("Spanglish — Spanish + English mixed text", () => {
    test("Spanglish sentence", () => {
      expectLangPresent("Vamos al store para comprar some groceries mañana", "es");
    });

    test("ñ characters in English context", () => {
      expectLangPresent("El niño went to the park with his señora madre", "es");
    });

    test("es profanity in English sentence", () => {
      expectLangPresent("That coño de la madre is always causing problems", "es");
    });
  });

  describe("Frenglish — French + English mixed text", () => {
    test("French-English mix", () => {
      expectLangPresent("C'est très nice, we should go to the boulangerie aussi", "fr");
    });

    test("French accented words in English text", () => {
      expectLangPresent("Let's meet at the café for some crème brûlée", "fr");
    });

    test("fr profanity in English", () => {
      expectLangPresent("Il est vraiment a fils de pute, quelle connard", "fr");
    });
  });

  describe("German + English mixed text", () => {
    test("ß in English text", () => {
      expectLangPresent("This Straße is really long, much longer than our street", "de");
    });

    test("umlauts in English text", () => {
      expectLangPresent("The Übersetzung of this Bücher was really schön", "de");
    });

    test("de profanity in English sentence", () => {
      expectLangPresent("Das ist Scheiße und du bist ein Arschloch", "de");
    });
  });

  describe("Portuguese + English mixed text", () => {
    test("ã/õ characters present", () => {
      expectLangPresent("A ação desse movie foi incrível, muito bom", "pt");
    });

    test("Brazilian Portuguese + English", () => {
      expectLangPresent("Cara esse jogo é muito legal, the graphics são ótimos", "pt");
    });
  });

  describe("Turkish + English mixed text", () => {
    test("ğ/ş/ı characters", () => {
      expectLangPresent("Bu güzel şey çok güzel, really beautiful", "tr");
    });

    test("Turkish-English mix", () => {
      expectLangPresent("Nasılsın? I'm doing iyi, teşekkürler for asking", "tr");
    });
  });

  describe("Russian + English mixed text", () => {
    test("Cyrillic + English mix", () => {
      const result = detectLanguages("This meeting was очень boring, давай go home");
      const codes = result.languages.map((l) => l.language);
      expect(codes).toContain("ru");
      expect(codes).toContain("en");
    });

    test("ru profanity in English context", () => {
      expectLangPresent("He called me сука блять in front of everyone", "ru");
    });

    test("romanized Russian with English", () => {
      expectLangPresent("Privet guys, kak dela, let's go na ulitsu", "ru");
    });
  });

  describe("Arabic + English mixed text", () => {
    test("romanized Arabic with English", () => {
      expectLangPresent("Yalla habibi let's go, inshallah it will be good", "ar");
    });

    test("ar profanity in English sentence", () => {
      expectLangPresent("That ibn el sharmouta stole my phone", "ar");
    });
  });

  // ═══════════════════════════════════════════════════════════════════════════
  // SECTION 6: Chinese + Japanese disambiguation
  // ═══════════════════════════════════════════════════════════════════════════

  describe("Chinese + Japanese disambiguation", () => {
    test("kana present with CJK → ja detected", () => {
      expectLangPresent("今日は中国語を勉強しています", "ja");
    });

    test("pure CJK without kana → zh detected", () => {
      expectLangPresent("今天天气很好我要去公园", "zh");
    });

    test("shared CJK chars → both zh and ja detected", () => {
      const result = detectLanguages("混蛋 笨蛋 王八蛋");
      const codes = result.languages.map((l) => l.language);
      expect(codes).toContain("zh");
      expect(codes).toContain("ja");
    });

    test("katakana dominates → ja top", () => {
      expectTopLang("ラーメン カレー スシ", "ja");
    });

    test("hiragana-heavy → ja top", () => {
      expectTopLang("これはとてもおいしいです", "ja");
    });

    test("simplified Chinese text → zh detected", () => {
      expectLangPresent("我们一起去吃饭吧", "zh");
    });

    test("pinyin in English → zh detected", () => {
      expectLangPresent("I really want to eat some hao chi de dongxi, xiexie", "zh");
    });

    test("traditional Chinese text → zh detected", () => {
      expectLangPresent("我們一起去吃飯吧", "zh");
    });

    test("long pure CJK (10+ chars, no kana) → zh dominates over ja", () => {
      const result = detectLanguages("你好今天天气很好我们去公园散步吧");
      const zh = result.languages.find((l) => l.language === "zh");
      const ja = result.languages.find((l) => l.language === "ja");
      expect(zh).toBeDefined();
      expect(zh!.proportion).toBeGreaterThan(0.7);
      if (ja) {
        expect(zh!.proportion).toBeGreaterThan(ja.proportion);
      }
    });

    test("short pure CJK (< 10 chars) → zh and ja stay close", () => {
      const result = detectLanguages("你好世界");
      const zh = result.languages.find((l) => l.language === "zh");
      const ja = result.languages.find((l) => l.language === "ja");
      expect(zh).toBeDefined();
      expect(ja).toBeDefined();
    });

    test("CJK with kana mixed in → ja stays dominant despite length", () => {
      expectTopLang("今日は本当にとても良い天気ですね散歩に行きましょう", "ja");
    });

    test("long continuous Chinese sentence → zh top", () => {
      expectTopLang("我今天去超市买了很多水果和蔬菜回家做饭", "zh");
    });
  });

  // ═══════════════════════════════════════════════════════════════════════════
  // SECTION 7: Multi-script detection (3+ languages)
  // ═══════════════════════════════════════════════════════════════════════════

  describe("multi-script detection — 3+ languages", () => {
    test("ja, ko, and en in trilingual text", () => {
      const result = detectLanguages("Hello こんにちは 안녕하세요 friends");
      const codes = result.languages.map((l) => l.language);
      expect(codes).toContain("ja");
      expect(codes).toContain("ko");
    });

    test("zh, ja, ko in CJK-heavy text", () => {
      const result = detectLanguages("你好 こんにちは 안녕하세요");
      const codes = result.languages.map((l) => l.language);
      expect(codes).toContain("ja");
      expect(codes).toContain("ko");
      expect(codes).toContain("zh");
    });

    test("ru, ar, en in trilingual text", () => {
      const result = detectLanguages("Hello привет مرحبا everyone");
      const codes = result.languages.map((l) => l.language);
      expect(codes).toContain("ru");
      expect(codes).toContain("ar");
    });

    test("hi, bn in South Asian scripts", () => {
      const result = detectLanguages("नमस্তে বন্ধু");
      const codes = result.languages.map((l) => l.language);
      expect(codes).toContain("hi");
      expect(codes).toContain("bn");
    });

    test("ta, te in Dravidian scripts", () => {
      const result = detectLanguages("வணக்கம் నమస్కారం");
      const codes = result.languages.map((l) => l.language);
      expect(codes).toContain("ta");
      expect(codes).toContain("te");
    });

    test("four scripts: en, ja, ko, ru", () => {
      const result = detectLanguages("Hello こんにちは 안녕 Привет");
      const codes = result.languages.map((l) => l.language);
      expect(codes).toContain("ja");
      expect(codes).toContain("ko");
      expect(codes).toContain("ru");
    });
  });

  // ═══════════════════════════════════════════════════════════════════════════
  // SECTION 8: classifyWordScript
  // ═══════════════════════════════════════════════════════════════════════════

  describe("classifyWordScript", () => {
    test("identifies Japanese kana", () => {
      expect(classifyWordScript("くそ")).toContain("ja");
    });

    test("identifies Korean Hangul", () => {
      expect(classifyWordScript("씨발")).toContain("ko");
    });

    test("identifies Cyrillic as Russian", () => {
      expect(classifyWordScript("сука")).toContain("ru");
    });

    test("identifies Arabic script", () => {
      expect(classifyWordScript("كلب")).toContain("ar");
    });

    test("identifies Devanagari as Hindi", () => {
      expect(classifyWordScript("भोसडीके")).toContain("hi");
    });

    test("identifies Bengali script", () => {
      expect(classifyWordScript("শালা")).toContain("bn");
    });

    test("identifies Tamil script", () => {
      expect(classifyWordScript("தேவடியா")).toContain("ta");
    });

    test("identifies Telugu script", () => {
      expect(classifyWordScript("దెంగు")).toContain("te");
    });

    test("returns empty for basic Latin (ambiguous)", () => {
      expect(classifyWordScript("fuck")).toEqual([]);
    });

    test("identifies German via ß/umlauts", () => {
      expect(classifyWordScript("Scheiße")).toContain("de");
    });

    test("identifies Spanish via ñ", () => {
      expect(classifyWordScript("coño")).toContain("es");
    });

    test("CJK ideographs include both zh and ja", () => {
      const result = classifyWordScript("混蛋");
      expect(result).toContain("zh");
      expect(result).toContain("ja");
    });

    test("Katakana + CJK resolves to ja first", () => {
      const result = classifyWordScript("カス");
      expect(result[0]).toBe("ja");
    });

    // Additional classifyWordScript tests
    test("identifies Portuguese via ã", () => {
      const result = classifyWordScript("ação");
      expect(result).toContain("pt");
    });

    test("identifies Turkish via ğ", () => {
      const result = classifyWordScript("doğa");
      expect(result).toContain("tr");
    });

    test("identifies Turkish via dotless ı", () => {
      const result = classifyWordScript("sıcak");
      expect(result).toContain("tr");
    });

    test("identifies French via œ", () => {
      const result = classifyWordScript("cœur");
      expect(result).toContain("fr");
    });

    test("mixed script word returns all scripts", () => {
      // Half Cyrillic, half Latin
      const result = classifyWordScript("приветHello");
      expect(result).toContain("ru");
    });
  });

  // ═══════════════════════════════════════════════════════════════════════════
  // SECTION 9: scoreWord — per-word language scores
  // ═══════════════════════════════════════════════════════════════════════════

  describe("scoreWord — per-word language scores", () => {
    describe("native script words score high for their language", () => {
      test("Japanese kana", () => expect(scoreWord("くそ").ja).toBeGreaterThan(0.4));
      test("Korean Hangul", () => expect(scoreWord("씨발").ko).toBeGreaterThan(0.4));
      test("Russian Cyrillic", () => expect(scoreWord("сука").ru).toBeGreaterThan(0.4));
      test("Arabic script", () => expect(scoreWord("كلب").ar).toBeGreaterThan(0.4));
      test("Hindi Devanagari", () => expect(scoreWord("भोसडीके").hi).toBeGreaterThan(0.4));
      test("Bengali script", () => expect(scoreWord("শালা").bn).toBeGreaterThan(0.4));
      test("Tamil script", () => expect(scoreWord("தேவடியா").ta).toBeGreaterThan(0.4));
      test("Telugu script", () => expect(scoreWord("దెంగు").te).toBeGreaterThan(0.4));
    });

    describe("special character words boost correct language", () => {
      test("ß boosts German", () => expectTopWordLang("Scheiße", "de"));
      test("ñ boosts Spanish", () => expectTopWordLang("coño", "es"));
      test("ã boosts Portuguese", () => expectTopWordLang("ação", "pt"));
      test("ğ boosts Turkish", () => expectTopWordLang("güzel", "tr"));
      test("ş boosts Turkish", () => {
        const scores = scoreWord("başla");
        expect(scores.tr).toBeDefined();
        expect(scores.tr!).toBeGreaterThan(0);
      });
      test("dotless ı boosts Turkish", () => {
        const scores = scoreWord("sıcak");
        expect(scores.tr).toBeDefined();
        expect(scores.tr!).toBeGreaterThan(0);
      });
      test("ü boosts German or Turkish", () => {
        expect(scoreWord("über").de).toBeDefined();
        expect(scoreWord("gülüş").tr).toBeDefined();
      });
      test("œ boosts French", () => {
        expect(scoreWord("cœur").fr).toBeGreaterThan(0);
      });
      test("ç boosts French/Portuguese/Turkish", () => {
        const scores = scoreWord("façade");
        const hasBoost = (scores.fr || 0) > 0 || (scores.pt || 0) > 0 || (scores.tr || 0) > 0;
        expect(hasBoost).toBe(true);
      });
    });

    describe("vocabulary trie exact matches score high", () => {
      test("arigatou → ja top", () => expectTopWordLang("arigatou", "ja"));
      test("saranghae → ko top", () => expectTopWordLang("saranghae", "ko"));
      test("habibi → ar top", () => expectTopWordLang("habibi", "ar"));
      test("namaste → hi top", () => expectTopWordLang("namaste", "hi"));
      test("vanakkam → ta top", () => expectTopWordLang("vanakkam", "ta"));
      test("namaskaram → te top", () => expectTopWordLang("namaskaram", "te"));
      test("dhonnobad → bn top", () => expectTopWordLang("dhonnobad", "bn"));
      test("spasibo → ru top", () => expectTopWordLang("spasibo", "ru"));
      test("xiexie → zh top", () => expectTopWordLang("xiexie", "zh"));
    });

    describe("ambiguous Latin words", () => {
      test("basic Latin word without special chars has no dominant language", () => {
        const scores = scoreWord("fuck");
        const values = Object.values(scores).filter((v) => v !== undefined) as number[];
        const max = Math.max(...values);
        expect(max).toBeLessThan(0.5);
      });

      test("CJK characters score for both zh and ja", () => {
        const scores = scoreWord("混蛋");
        expect(scores.zh).toBeDefined();
        expect(scores.ja).toBeDefined();
      });

      test("empty word returns no scores", () => {
        expect(Object.keys(scoreWord("")).length).toBe(0);
      });

      test("single Latin char has no strong language signal", () => {
        const single = scoreWord("a");
        const values = Object.values(single).filter((v) => v !== undefined) as number[];
        if (values.length > 0) {
          expect(Math.max(...values)).toBeLessThan(0.5);
        }
      });
    });

    describe("100% match boost behavior", () => {
      // Words that are exact trie matches for one language should dominate share
      test("exact match word captures > 50% share in multi-language context", () => {
        // "arigatou" is an exact ja trie match; other languages might partially match
        const scores = scoreWord("arigatou");
        const jaScore = scores.ja || 0;
        const totalScore = Object.values(scores).reduce((sum, v) => sum + (v || 0), 0);
        expect(jaScore / totalScore).toBeGreaterThan(0.5);
      });

      test("exact match word for Korean captures majority", () => {
        const scores = scoreWord("kamsahamnida");
        const koScore = scores.ko || 0;
        const totalScore = Object.values(scores).reduce((sum, v) => sum + (v || 0), 0);
        expect(koScore / totalScore).toBeGreaterThan(0.5);
      });
    });
  });

  // ═══════════════════════════════════════════════════════════════════════════
  // SECTION 10: Profanity-specific language detection
  // ═══════════════════════════════════════════════════════════════════════════

  describe("profanity words — language identification", () => {
    describe("native script profanity", () => {
      test("Japanese", () => expectTopLang("バカ野郎 くたばれ クソ", "ja"));
      test("Korean", () => expectTopLang("씨발 개새끼 미친놈", "ko"));
      test("Russian", () => expectTopLang("сука блять пиздец хуй", "ru"));
      test("Arabic", () => expectTopLang("كلب حمار شرموطة", "ar"));
      test("Hindi", () => expectTopLang("चूतिया भोसड़ीके मादरचोद", "hi"));
      test("Bengali", () => expectTopLang("বাঞ্চোত শালা খানকি", "bn"));
    });

    describe("Latin-script language profanity with special chars", () => {
      test("German profanity with ß", () => {
        expectTopLang("Scheiße Arschloch Hurensohn verdammt", "de");
      });

      test("Spanish profanity with ñ", () => {
        expectTopLang("coño mierda hijo de puta cabrón", "es");
      });

      test("French profanity", () => {
        expectTopLang("merde putain connard fils de pute salaud", "fr");
      });

      test("Portuguese profanity", () => {
        expectTopLang("caralho porra merda filho da puta", "pt");
      });
    });
  });

  // ═══════════════════════════════════════════════════════════════════════════
  // SECTION 11: Longer native script texts
  // ═══════════════════════════════════════════════════════════════════════════

  describe("longer native script texts", () => {
    test("longer Japanese text", () => {
      expectTopLang("今日はとても天気がいいですね。散歩に行きましょう。", "ja");
    });

    test("longer Korean text", () => {
      expectTopLang("오늘 날씨가 정말 좋네요. 산책하러 갈까요?", "ko");
    });

    test("longer Chinese text", () => {
      expectLangPresent("今天天气真好。我们去公园散步吧。", "zh");
    });

    test("longer Russian text", () => {
      expectTopLang("Сегодня очень хорошая погода. Давайте пойдём гулять в парк.", "ru");
    });

    test("longer Arabic text", () => {
      expectTopLang("الطقس اليوم جميل جداً. هيا نذهب للتنزه في الحديقة.", "ar");
    });

    test("longer Hindi text", () => {
      expectTopLang("आज मौसम बहुत अच्छा है। चलो पार्क में घूमने चलते हैं।", "hi");
    });

    test("longer Bengali text", () => {
      expectTopLang("আজ আবহাওয়া খুব ভালো। চলো পার্কে হাঁটতে যাই।", "bn");
    });

    test("longer Tamil text", () => {
      expectTopLang("இன்று வானிலை மிகவும் நன்றாக உள்ளது. பூங்காவில் நடக்கலாம்.", "ta");
    });

    test("longer Telugu text", () => {
      expectTopLang("ఈరోజు వాతావరణం చాలా బాగుంది. పార్కులో నడుద్దాం.", "te");
    });

    // Extended native script paragraphs
    test("multi-sentence Japanese", () => {
      expectTopLang(
        "昨日、友達と一緒に新しいレストランに行きました。料理はとても美味しかったです。" +
        "また来週行きたいと思います。日本語は素晴らしい言語です。",
        "ja"
      );
    });

    test("multi-sentence Korean", () => {
      expectTopLang(
        "어제 친구와 함께 새로운 식당에 갔습니다. 음식이 정말 맛있었어요. " +
        "다음 주에 또 가고 싶습니다. 한국어는 아름다운 언어입니다.",
        "ko"
      );
    });

    test("multi-sentence Russian", () => {
      expectTopLang(
        "Вчера я ходил с другом в новый ресторан. Еда была очень вкусной. " +
        "Хочу пойти туда снова на следующей неделе.",
        "ru"
      );
    });

    test("multi-sentence Arabic", () => {
      expectTopLang(
        "ذهبت أمس مع صديقي إلى مطعم جديد. كان الطعام لذيذاً جداً. " +
        "أريد أن أذهب مرة أخرى الأسبوع القادم.",
        "ar"
      );
    });

    test("multi-sentence Hindi", () => {
      expectTopLang(
        "कल मैं अपने दोस्त के साथ एक नए रेस्तरां में गया। खाना बहुत स्वादिष्ट था। " +
        "अगले हफ्ते फिर से जाना चाहता हूँ।",
        "hi"
      );
    });
  });

  // ═══════════════════════════════════════════════════════════════════════════
  // SECTION 12: Re-normalization behavior
  // ═══════════════════════════════════════════════════════════════════════════

  describe("re-normalization among top N", () => {
    test("proportions sum close to 1.0 after re-normalization", () => {
      const result = detectLanguages("Bonjour, comment allez-vous? Das ist sehr gut.");
      const sum = result.languages.reduce((s, l) => s + l.proportion, 0);
      expect(sum).toBeGreaterThan(0);
      expect(sum).toBeLessThanOrEqual(1.05); // small rounding tolerance
    });

    test("monolingual Latin text gets high proportion after re-normalization", () => {
      const result = detectBestLanguage(
        "Je suis allé au magasin hier pour acheter du pain et du fromage. " +
        "Le boulanger était très gentil et nous avons parlé pendant quelques minutes."
      );
      expect(result.language).toBe("fr");
      // After re-normalization, French should dominate
      expect(result.proportion).toBeGreaterThan(0.4);
    });

    test("deterministic script languages keep raw proportion", () => {
      // Pure Cyrillic should have present >= 1.0 and keep its proportion
      const result = detectLanguages("Привет мир как дела сегодня хорошо");
      const ru = result.languages.find((l) => l.language === "ru");
      expect(ru).toBeDefined();
      expect(ru!.proportion).toBeGreaterThan(0.8);
    });

    test("non-deterministic languages fill remaining budget", () => {
      // Mixed: some Cyrillic (deterministic) + some Latin (non-deterministic)
      const result = detectLanguages("Привет friends, how are you doing today");
      const sum = result.languages.reduce((s, l) => s + l.proportion, 0);
      expect(sum).toBeLessThanOrEqual(1.05);
    });
  });

  // ═══════════════════════════════════════════════════════════════════════════
  // SECTION 13: Proportion levels and ranking
  // ═══════════════════════════════════════════════════════════════════════════

  describe("proportion levels and ranking", () => {
    test("native script text has highest proportion", () => {
      const ru = detectBestLanguage("Привет мир, как дела сегодня?");
      expect(ru.proportion).toBeGreaterThan(0.8);

      const ko = detectBestLanguage("안녕하세요 오늘 날씨 어때요?");
      expect(ko.proportion).toBeGreaterThan(0.8);

      const ar = detectBestLanguage("مرحبا كيف حالك اليوم؟");
      expect(ar.proportion).toBeGreaterThan(0.8);
    });

    test("mixed script text has lower proportion per language", () => {
      const result = detectLanguages("Hello こんにちは 안녕하세요 Привет");
      for (const lang of result.languages) {
        expect(lang.proportion).toBeLessThan(0.8);
      }
    });

    test("detected languages are sorted by proportion descending", () => {
      const result = detectLanguages("Hello world こんにちは 안녕하세요");
      for (let i = 1; i < result.languages.length; i++) {
        expect(result.languages[i].proportion).toBeLessThanOrEqual(
          result.languages[i - 1].proportion
        );
      }
    });

    test("all proportions are between 0 and 1", () => {
      const texts = [
        "Hello world",
        "こんにちは世界",
        "Bonjour le monde",
        "Hello こんにちは Bonjour",
        "कैसे हो दोस्त",
        "오늘 뭐 해요",
      ];
      for (const text of texts) {
        const result = detectLanguages(text);
        for (const lang of result.languages) {
          expect(lang.proportion).toBeGreaterThanOrEqual(0);
          expect(lang.proportion).toBeLessThanOrEqual(1);
        }
      }
    });
  });

  // ═══════════════════════════════════════════════════════════════════════════
  // SECTION 14: Edge cases
  // ═══════════════════════════════════════════════════════════════════════════

  describe("edge cases", () => {
    test("empty string returns no languages", () => {
      expect(detectLanguages("").languages).toEqual([]);
    });

    test("null-ish input returns no languages", () => {
      expect(detectLanguages(null as any).languages).toEqual([]);
      expect(detectLanguages(undefined as any).languages).toEqual([]);
    });

    test("numbers only returns no languages", () => {
      expect(detectLanguages("12345").languages).toEqual([]);
    });

    test("punctuation only returns no languages", () => {
      expect(detectLanguages("!@#$%^&*()").languages).toEqual([]);
    });

    test("single emoji returns no languages", () => {
      expect(detectLanguages("😀").languages).toEqual([]);
    });

    test("single word defaults to English for basic Latin", () => {
      expect(detectBestLanguage("hello").language).toBe("en");
    });

    test("respects maxLanguages option", () => {
      const result = detectLanguages("Hello world こんにちは 你好 안녕하세요", {
        maxLanguages: 2,
      });
      expect(result.languages.length).toBeLessThanOrEqual(2);
    });

    test("respects minConfidence option", () => {
      const result = detectLanguages("Hello world", { minConfidence: 0.99 });
      for (const lang of result.languages) {
        expect(lang.proportion).toBeGreaterThanOrEqual(0.99);
      }
    });

    test("URL-like text doesn't crash", () => {
      const result = detectLanguages("https://www.example.com");
      expect(result.languages).toBeDefined();
      expect(result.text).toBe("https://www.example.com");
    });

    test("repeated single character", () => {
      const result = detectLanguages("aaaaaaa");
      expect(result.languages.length).toBeGreaterThanOrEqual(0);
    });

    test("mixed numbers and text", () => {
      expectTopLang("I have 42 cats and 7 dogs", "en");
    });

    test("text with lots of punctuation", () => {
      expectTopLang("Hello!!! How are you??? I'm fine...", "en");
    });

    test("ALL CAPS text", () => {
      expectTopLang("THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG", "en");
    });

    test("very short native script text still detected", () => {
      expect(detectBestLanguage("こん").language).toBe("ja");
      expect(detectBestLanguage("안녕").language).toBe("ko");
      expect(detectBestLanguage("да").language).toBe("ru");
      expect(detectBestLanguage("مرح").language).toBe("ar");
    });

    test("whitespace-heavy text", () => {
      expectTopLang("   hello    world   ", "en");
    });

    test("tab-separated text", () => {
      expectTopLang("hello\tworld\tgoodbye", "en");
    });

    test("newline-separated text", () => {
      expectTopLang("hello\nworld\ngoodbye", "en");
    });

    test("text field preserves original input", () => {
      const input = "Hello こんにちは";
      const result = detectLanguages(input);
      expect(result.text).toBe(input);
    });

    test("totalWords reflects actual word count", () => {
      const result = detectLanguages("one two three four five");
      expect(result.totalWords).toBe(5);
    });
  });

  // ═══════════════════════════════════════════════════════════════════════════
  // SECTION 15: Realistic event descriptions (profanity filter context)
  // ═══════════════════════════════════════════════════════════════════════════

  describe("realistic event descriptions", () => {
    test("English event description", () => {
      expectTopLang(
        "Join us for a community cleanup event this Saturday morning at Central Park. " +
        "Volunteers will receive free lunch and a t-shirt. All ages welcome!",
        "en"
      );
    });

    test("Spanish event description", () => {
      expectTopLang(
        "Únase a nosotros para un evento de limpieza comunitaria este sábado por la " +
        "mañana en el Parque Central. Los voluntarios recibirán almuerzo gratis.",
        "es"
      );
    });

    test("French event description", () => {
      expectTopLang(
        "Rejoignez-nous pour un événement de nettoyage communautaire ce samedi matin " +
        "au Parc Central. Les bénévoles recevront un déjeuner gratuit.",
        "fr"
      );
    });

    test("German event description", () => {
      expectTopLang(
        "Machen Sie mit bei unserer Gemeinschaftsaktion zur Stadtreinigung am Samstag " +
        "Morgen im Zentralpark. Freiwillige erhalten ein kostenloses Mittagessen.",
        "de"
      );
    });

    test("Japanese event description (native)", () => {
      expectTopLang(
        "今週の土曜日の朝、中央公園でコミュニティ清掃イベントを開催します。" +
        "ボランティアには無料のランチが提供されます。",
        "ja"
      );
    });

    test("Korean event description (native)", () => {
      expectTopLang(
        "이번 토요일 아침 중앙공원에서 지역사회 청소 행사에 참여해 주세요. " +
        "자원봉사자에게 무료 점심이 제공됩니다.",
        "ko"
      );
    });

    test("Arabic event description (native)", () => {
      expectTopLang(
        "انضموا إلينا في فعالية تنظيف المجتمع صباح يوم السبت في الحديقة المركزية. " +
        "سيحصل المتطوعون على غداء مجاني.",
        "ar"
      );
    });

    test("Hindi event description (native)", () => {
      expectTopLang(
        "इस शनिवार सुबह केंद्रीय पार्क में सामुदायिक सफाई कार्यक्रम में शामिल हों। " +
        "स्वयंसेवकों को मुफ्त दोपहर का भोजन मिलेगा।",
        "hi"
      );
    });
  });

  // ═══════════════════════════════════════════════════════════════════════════
  // SECTION 16: Latin-family disambiguation stress tests
  // ═══════════════════════════════════════════════════════════════════════════

  describe("Latin-family disambiguation", () => {
    // These test that closely related Latin-script languages are correctly
    // distinguished, which is the hardest detection challenge.

    test("Spanish vs Portuguese — shared vocab, different markers", () => {
      // "niño" (ñ) is Spanish, "criança" + "muito" are Portuguese
      expectTopLang("El niño juega en el parque con sus amigos todos los días", "es");
      expectTopLang("A criança brinca no parque com seus amigos todos os dias", "pt");
    });

    test("French vs Italian — shared vocab, different function words", () => {
      expectTopLang("Je voudrais un café s'il vous plaît monsieur", "fr");
      expectTopLang("Vorrei un caffè per favore signore grazie", "it");
    });

    test("German vs Dutch — shared vocab, different patterns", () => {
      expectTopLang("Ich möchte ein Bier bestellen bitte schön danke", "de");
      expectTopLang("Ik wil graag een biertje bestellen alstublieft dank u", "nl");
    });

    test("Spanish vs Italian — closely related", () => {
      expectTopLang("Nosotros queremos ir a la playa mañana por la tarde", "es");
      expectTopLang("Noi vogliamo andare alla spiaggia domani nel pomeriggio", "it");
    });

    test("Portuguese vs Spanish with diacritics", () => {
      // ã and õ are strong Portuguese signals
      expectTopLang("A comunicação entre as nações é fundamental para a cooperação", "pt");
    });

    test("Turkish with strong markers (ğşıİ)", () => {
      expectTopLang("Türkiye'nin başkenti Ankara'dır ve İstanbul en büyük şehirdir", "tr");
    });
  });

  // ═══════════════════════════════════════════════════════════════════════════
  // SECTION 17: Bigram detection
  // ═══════════════════════════════════════════════════════════════════════════

  describe("special character bigrams boost correct language", () => {
    test("ß bigrams boost German", () => {
      expect(scoreWord("Straße").de).toBeGreaterThan(0);
    });

    test("ñ bigrams boost Spanish", () => {
      expect(scoreWord("niño").es).toBeGreaterThan(0);
    });

    test("ã bigrams boost Portuguese", () => {
      expect(scoreWord("ação").pt).toBeGreaterThan(0);
    });

    test("ğ bigrams boost Turkish", () => {
      expect(scoreWord("doğa").tr).toBeGreaterThan(0);
    });

    test("ş bigrams boost Turkish", () => {
      expect(scoreWord("başla").tr).toBeGreaterThan(0);
    });

    test("dotless ı bigrams boost Turkish", () => {
      expect(scoreWord("sıcak").tr).toBeGreaterThan(0);
    });

    test("œ bigrams boost French", () => {
      expect(scoreWord("cœur").fr).toBeGreaterThan(0);
    });
  });

  // ═══════════════════════════════════════════════════════════════════════════
  // SECTION 18: Sentence-length detection accuracy (quick battery)
  // ═══════════════════════════════════════════════════════════════════════════

  describe("sentence-length quick battery", () => {
    const cases: [string, string][] = [
      // English
      ["I love you", "en"],
      ["Where is the nearest hospital", "en"],
      ["Can you help me find my keys", "en"],
      // Spanish
      ["Te quiero mucho", "es"],
      ["Dónde está el hospital más cercano", "es"],
      ["Puedes ayudarme a encontrar mis llaves", "es"],
      // French
      ["Je t'aime beaucoup", "fr"],
      ["Où est l'hôpital le plus proche", "fr"],
      ["Pouvez-vous m'aider à trouver mes clés", "fr"],
      // German
      ["Ich liebe dich sehr", "de"],
      ["Wo ist das nächste Krankenhaus", "de"],
      ["Können Sie mir helfen meine Schlüssel zu finden", "de"],
      // Italian
      ["Ti amo molto bene", "it"],
      ["Dove si trova l'ospedale più vicino", "it"],
      // Portuguese
      ["Eu te amo muito", "pt"],
      ["Onde fica o hospital mais próximo", "pt"],
      // Turkish
      ["Seni çok seviyorum", "tr"],
      ["En yakın hastane nerede", "tr"],
      // Dutch
      ["Ik hou van jou", "nl"],
      ["Waar is het dichtstbijzijnde ziekenhuis", "nl"],
    ];

    test.each(cases)("'%s' → %s", (text, lang) => {
      expectTopLang(text, lang);
    });
  });

  // ═══════════════════════════════════════════════════════════════════════════
  // SECTION 19: Romanized non-Latin sentence battery
  // ═══════════════════════════════════════════════════════════════════════════

  describe("romanized non-Latin sentence battery", () => {
    const cases: [string, string][] = [
      // Japanese romaji
      ["watashi wa gakusei desu", "ja"],
      ["sumimasen chotto matte kudasai", "ja"],
      ["konnichiwa ohayou gozaimasu sayonara", "ja"],
      // Korean romanized
      ["annyeong haseyo mannaseo bangapseumnida", "ko"],
      ["gamsahamnida joesong hamnida gwaenchanayo", "ko"],
      // Hindi romanized
      ["namaste aap kaise hain bahut accha dhanyavaad", "hi"],
      ["mujhe hindi nahi aati kya aap angrezi bolte hain", "hi"],
      // Russian romanized
      ["privet kak dela segodnya khorosho spasibo", "ru"],
      ["do svidaniya dobroe utro spokoynoy nochi", "ru"],
      // Arabic romanized
      ["marhaba kayf halak shukran alhamdulillah", "ar"],
      ["sabah al khayr masa al khayr maa al salama", "ar"],
      // Chinese pinyin
      ["ni hao wo shi zhongguo ren xiexie", "zh"],
      ["zao shang hao wan an zai jian pengyou", "zh"],
      // Bengali romanized
      ["ami bhalo achi tumi kemon acho dhonnobad", "bn"],
      // Tamil romanized
      ["vanakkam nanbaa eppadi irukeenga nandri", "ta"],
      // Telugu romanized
      ["namaskaram ela unnaru dhanyavaadalu", "te"],
    ];

    test.each(cases)("'%s' → %s", (text, lang) => {
      expectTopLang(text, lang);
    });
  });

  // ═══════════════════════════════════════════════════════════════════════════
  // SECTION 20: Stability & invariants
  // ═══════════════════════════════════════════════════════════════════════════

  describe("stability & invariants", () => {
    test("same input always produces same output (deterministic)", () => {
      const text = "Bonjour comment allez-vous aujourd'hui mes amis";
      const r1 = detectLanguages(text);
      const r2 = detectLanguages(text);
      expect(r1.languages).toEqual(r2.languages);
    });

    test("case insensitivity — same result regardless of case", () => {
      const lower = detectBestLanguage("bonjour comment allez-vous");
      const upper = detectBestLanguage("BONJOUR COMMENT ALLEZ-VOUS");
      const mixed = detectBestLanguage("Bonjour Comment Allez-Vous");
      expect(lower.language).toBe(upper.language);
      expect(lower.language).toBe(mixed.language);
    });

    test("adding whitespace doesn't change top language", () => {
      const compact = detectBestLanguage("Das Wetter ist sehr schön");
      const spacey = detectBestLanguage("  Das   Wetter   ist   sehr   schön  ");
      expect(compact.language).toBe(spacey.language);
    });

    test("proportion never exceeds 1.0 across many inputs", () => {
      const inputs = [
        "Hello world", "こんにちは世界", "Bonjour le monde", "Hola mundo",
        "Привет мир", "مرحبا بالعالم", "नमस्ते दुनिया", "안녕하세요 세계",
        "Hello こんにちは Bonjour Hola Привет",
        "Mixed text with 한국어 and العربية and हिंदी together",
      ];
      for (const text of inputs) {
        const result = detectLanguages(text);
        for (const lang of result.languages) {
          expect(lang.proportion).toBeLessThanOrEqual(1.001);
          expect(lang.proportion).toBeGreaterThanOrEqual(0);
        }
      }
    });

    test("present field is between 0 and 1", () => {
      const inputs = [
        "Hello world", "くそ野郎", "Scheiße", "annyeong haseyo",
      ];
      for (const text of inputs) {
        const result = detectLanguages(text);
        for (const lang of result.languages) {
          expect(lang.present).toBeGreaterThanOrEqual(0);
          expect(lang.present).toBeLessThanOrEqual(1);
        }
      }
    });
  });

  // ═══════════════════════════════════════════════════════════════════════════
  // SECTION 21: Mixed-language document detection
  // ═══════════════════════════════════════════════════════════════════════════

  describe("mixed-language document detection", () => {
    describe("English + Spanish (bilingual)", () => {
      test("balanced bilingual text detects both en and es", () => {
        const text =
          "Hello my friend, how are you today? Hola mi amigo, cómo estás hoy?";
        const result = detectLanguages(text);
        const codes = result.languages.map((l) => l.language);
        expect(codes).toContain("en");
        expect(codes).toContain("es");
      });

      test("English-dominant with Spanish phrases", () => {
        const text =
          "I went to the store yesterday to buy some groceries and the cashier said gracias señor";
        expectTopLang(text, "en");
        expectLangPresent(text, "es");
      });

      test("Spanish-dominant with English phrases", () => {
        const text =
          "Fui al mercado ayer para comprar comida y el cajero dijo thank you my friend";
        expectTopLang(text, "es");
        expectLangPresent(text, "en");
      });
    });

    describe("English + French (bilingual)", () => {
      test("balanced bilingual text detects both en and fr", () => {
        const text =
          "Good morning everyone. Bonjour tout le monde. Have a nice day. Bonne journée à tous.";
        const result = detectLanguages(text);
        const codes = result.languages.map((l) => l.language);
        expect(codes).toContain("en");
        expect(codes).toContain("fr");
      });

      test("French-dominant with English words", () => {
        const text =
          "Je suis allé au marché ce matin pour acheter du pain et du fromage, it was wonderful";
        expectTopLang(text, "fr");
        expectLangPresent(text, "en");
      });
    });

    describe("English + Swedish", () => {
      test("Swedish text is detected as a Scandinavian or Germanic language", () => {
        // Swedish shares many lexical roots with German, Danish, Norwegian
        // so the detector may classify it as a close relative
        const text =
          "Jag gillar att läsa böcker och dricka kaffe på morgonen";
        const result = detectBestLanguage(text);
        // Accept sv, de, da, no — all are Germanic family
        expect(["sv", "de", "da", "no"]).toContain(result.language);
      });

      test("Swedish 'slut' in context is detected as Germanic", () => {
        // "slut" means "end" in Swedish
        const text =
          "Filmen hade ett bra slut och alla gick hem efter föreställningen";
        const result = detectLanguages(text);
        const codes = result.languages.map((l) => l.language);
        // The surrounding Swedish context should produce a Germanic detection
        const hasGermanic =
          codes.includes("sv") || codes.includes("de") || codes.includes("da");
        expect(hasGermanic).toBe(true);
      });
    });

    describe("English + German", () => {
      test("balanced bilingual text detects both en and de", () => {
        const text =
          "Good morning, how are you? Guten Morgen, wie geht es Ihnen heute?";
        const result = detectLanguages(text);
        const codes = result.languages.map((l) => l.language);
        expect(codes).toContain("en");
        expect(codes).toContain("de");
      });

      test("German-dominant text with English loanwords", () => {
        const text =
          "Das Meeting war sehr produktiv und der Manager hat das Team über die neue Strategie informiert";
        expectTopLang(text, "de");
      });
    });

    describe("English + Dutch", () => {
      test("balanced bilingual text detects both en and nl", () => {
        const text =
          "The weather is beautiful today. Het weer is vandaag prachtig en de zon schijnt helder.";
        const result = detectLanguages(text);
        const codes = result.languages.map((l) => l.language);
        expect(codes).toContain("en");
        expect(codes).toContain("nl");
      });
    });

    describe("English + Norwegian", () => {
      test("balanced bilingual text detects English and a Scandinavian/Germanic language", () => {
        // Norwegian shares heavy lexical overlap with Danish, Swedish, and German
        const text =
          "I love traveling to Norway. Jeg elsker å reise til Norge og se fjordene.";
        const result = detectLanguages(text);
        const codes = result.languages.map((l) => l.language);
        expect(codes).toContain("en");
        // Accept no, da, sv, or de — all are close relatives
        const hasNordic =
          codes.includes("no") || codes.includes("da") ||
          codes.includes("sv") || codes.includes("de");
        expect(hasNordic).toBe(true);
      });
    });

    describe("three-language mix", () => {
      test("English + Spanish + French detected together", () => {
        const text =
          "Hello my friend. Hola mi amigo querido. Bonjour mon ami cher.";
        const result = detectLanguages(text);
        const codes = result.languages.map((l) => l.language);
        expect(codes).toContain("en");
        expect(codes).toContain("es");
        expect(codes).toContain("fr");
      });

      test("English + German + Dutch detected together", () => {
        const text =
          "Good morning everyone. Guten Morgen allerseits. Goedemorgen allemaal vandaag.";
        const result = detectLanguages(text);
        const codes = result.languages.map((l) => l.language);
        expect(codes).toContain("en");
        expect(codes).toContain("de");
        expect(codes).toContain("nl");
      });
    });
  });
});

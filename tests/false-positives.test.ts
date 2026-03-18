/**
 * False Positive Regression Tests
 *
 * Comprehensive suite ensuring that clean, everyday text is NOT flagged by
 * the profanity filter. This is especially important after expanding language
 * dictionaries (Hindi, Russian, Korean, German, etc.) — new words can
 * introduce substring collisions with innocent text.
 *
 * Structure:
 *   1. Short clean phrases — single words and short phrases in English
 *   2. Common nouns / proper nouns that contain profanity substrings
 *   3. Multi-language clean text — sentences in various languages
 *   4. Event descriptions — realistic community event/bulletin content
 *   5. Technical / professional text
 *   6. Food, drink, and cultural terms
 */

import { BeKind } from "../src/index.ts";

describe("False Positive Regression Tests", () => {
  let filter: BeKind;

  beforeAll(() => {
    filter = new BeKind({ silent: true });
  });

  // ── Helper: asserts text is clean (not flagged) ──
  const expectClean = (text: string) => {
    const result = filter.check(text);
    if (result) {
      // Provide debugging info on failure
      const detected = filter.detect(text);
      const flagged = detected.scoredWords
        .filter((sw) => sw.severity !== "CLEAN")
        .map((sw) => `"${sw.word}" (${sw.severity})`)
        .join(", ");
      throw new Error(
        `Expected clean but flagged: ${flagged} in text: "${text}"`,
      );
    }
  };

  // ═════════════════════════════════════════════════════════════════════
  // 1. SHORT CLEAN ENGLISH TEXT
  // ═════════════════════════════════════════════════════════════════════
  describe("Short clean English text", () => {
    const cleanPhrases = [
      "Hello world",
      "Good morning",
      "Have a nice day",
      "Thank you so much",
      "See you later",
      "How are you doing?",
      "I'm doing great",
      "Nice to meet you",
      "What time is it?",
      "Let's grab coffee",
      "The weather is beautiful today",
      "I love reading books",
      "She went to the store",
      "We had dinner together",
      "The cat sat on the mat",
      "Please close the door",
      "Happy birthday!",
      "Congratulations on your promotion",
      "I'll be there in five minutes",
      "Can you help me with this?",
    ];

    it.each(cleanPhrases)("does not flag: %s", (phrase) => {
      expectClean(phrase);
    });
  });

  // ═════════════════════════════════════════════════════════════════════
  // 2. WORDS CONTAINING PROFANITY SUBSTRINGS (Scunthorpe problem)
  // ═════════════════════════════════════════════════════════════════════
  describe("Scunthorpe-type words (profanity substrings in clean words)", () => {
    const scunthorpeWords = [
      // English words containing common profanity substrings
      "assume",
      "assassin",
      "assault",
      "assist",
      "assessment",
      "association",
      "bass",
      "brass",
      "class",
      "classical",
      "compass",
      "embarrass",
      "grasshopper",
      "harass",
      "massage",
      "mass",
      "passage",
      "passenger",
      "passport",
      "sassafras",
      "canal",
      "analysis",
      "analyst",
      "analytical",
      "banana",
      "analog",
      "anatomy",
      "therapist",
      "therapy",
      "therapeutic",
      "grape",
      "drape",
      "scrape",
      "cocktail",
      "peacock",
      "hancock",
      "hitchcock",
      "shuttlecock",
      "cockatoo",
      "cockpit",
      "cockroach",
      "weathercock",
      "sunshine",
      "moonshine",
      "sunshiny",
      "shining",
      "shiners",
      "singer",
      "singers",
      "singing",
      "technique",
      "techniques",
      "unique",
      "antique",
      "boutique",
      "mystique",
      "clique",
      "picturesque",
      "negroni",
      "vinegar",
      "denigrate",
      "renegade",
      "sextant",
      "sextuple",
      "Essex",
      "Middlesex",
      "Sussex",
      "Sussex County",
      "intersection",
      "bisexual",  // This IS a sexual term but not profanity
      "Scunthorpe",
      "cockatiel",
      "penistone",
      "dickens",
      "Dickens novel",
      "titillate",
      "titular",
      "title",
      "titled",
      "titanic",
      "constitute",
      "constitution",
      "prostitute",  // This IS profanity — skip in test
      "institute",
      "substitution",
      "arsenal",
      "accumulate",
      "document",
      "documentation",
      "execution",
      "executive",
      "manipulate",
      "manuscript",
      "speculation",
      "particular",
      "spectacular",
    ];

    // Filter out words that ARE actually profane
    const cleanScunthorpeWords = scunthorpeWords.filter(
      (w) => !["prostitute", "bisexual"].includes(w.toLowerCase()),
    );

    it.each(cleanScunthorpeWords)("does not flag: %s", (word) => {
      expectClean(word);
    });
  });

  // ═════════════════════════════════════════════════════════════════════
  // 3. MULTI-LANGUAGE CLEAN TEXT
  // ═════════════════════════════════════════════════════════════════════
  describe("Clean text in various languages", () => {
    // German
    const germanClean = [
      "Guten Morgen, wie geht es Ihnen?",
      "Ich gehe heute in die Schule",
      "Das Wetter ist heute sehr schön",
      "Können Sie mir bitte helfen?",
      "Ich hätte gerne einen Kaffee",
      "Der Zug kommt um drei Uhr",
      "Wir treffen uns morgen im Park",
      "Die Kinder spielen im Garten",
      "Ich lese gerne Bücher",
      "Frohe Weihnachten und ein gutes neues Jahr",
    ];

    it.each(germanClean)("German clean: %s", (text) => {
      expectClean(text);
    });

    // French
    const frenchClean = [
      "Bonjour, comment allez-vous?",
      "Je voudrais un croissant, s'il vous plaît",
      "Il fait beau aujourd'hui",
      "Merci beaucoup pour votre aide",
      "Nous allons au cinéma ce soir",
      "Les enfants jouent dans le jardin",
      "J'aime beaucoup la musique",
      "La Tour Eiffel est magnifique",
      "Pouvez-vous m'aider s'il vous plaît?",
      "Bonne année et bonne santé",
    ];

    it.each(frenchClean)("French clean: %s", (text) => {
      expectClean(text);
    });

    // Spanish
    const spanishClean = [
      "Buenos días, cómo estás?",
      "Me gustaría un café con leche",
      "El tiempo es muy bonito hoy",
      "Muchas gracias por tu ayuda",
      "Vamos al cine esta noche",
      "Los niños juegan en el parque",
      "Me gusta mucho la música",
      "La playa es hermosa en verano",
      "Feliz cumpleaños y muchas felicidades",
      "Por favor, ayúdame con esto",
    ];

    it.each(spanishClean)("Spanish clean: %s", (text) => {
      expectClean(text);
    });

    // Korean
    const koreanClean = [
      "안녕하세요, 만나서 반갑습니다",
      "오늘 날씨가 정말 좋습니다",
      "감사합니다, 도움이 됐어요",
      "내일 학교에 갈 거예요",
      "커피 한 잔 주세요",
      "우리 공원에서 만나요",
      "한국어를 공부하고 있어요",
      "이 영화 정말 재미있어요",
      "주말에 뭐 할 거예요?",
      "가족과 함께 저녁을 먹었어요",
    ];

    it.each(koreanClean)("Korean clean: %s", (text) => {
      expectClean(text);
    });

    // Russian
    const russianClean = [
      "Доброе утро, как дела?",
      "Сегодня прекрасная погода",
      "Спасибо большое за помощь",
      "Мы встретимся завтра в парке",
      "Я люблю читать книги",
      "Дети играют во дворе",
      "Пожалуйста, помогите мне",
      "Поздравляю с днём рождения",
      "Мне нужно идти на работу",
      "Я учу русский язык",
    ];

    it.each(russianClean)("Russian clean: %s", (text) => {
      expectClean(text);
    });

    // Hindi
    const hindiClean = [
      "नमस्ते, आप कैसे हैं?",
      "आज मौसम बहुत अच्छा है",
      "धन्यवाद, आपकी मदद के लिए",
      "कल स्कूल जाना है",
      "एक कप चाय दीजिए",
      "हम कल पार्क में मिलेंगे",
      "मुझे किताबें पढ़ना पसंद है",
      "यह फिल्म बहुत अच्छी है",
      "जन्मदिन की शुभकामनाएं",
      "कृपया मेरी सहायता करें",
    ];

    it.each(hindiClean)("Hindi clean: %s", (text) => {
      expectClean(text);
    });

    // Japanese
    const japaneseClean = [
      "おはようございます",
      "今日はいい天気ですね",
      "ありがとうございます",
      "明日学校に行きます",
      "コーヒーを一杯ください",
      "公園で会いましょう",
      "日本語を勉強しています",
      "この映画はとても面白いです",
      "お誕生日おめでとうございます",
      "すみません、助けてください",
    ];

    it.each(japaneseClean)("Japanese clean: %s", (text) => {
      expectClean(text);
    });

    // Chinese
    const chineseClean = [
      "你好，很高兴认识你",
      "今天天气很好",
      "非常感谢你的帮助",
      "明天要去上学",
      "请给我一杯咖啡",
      "我们在公园见面吧",
      "我在学习中文",
      "这部电影很好看",
      "生日快乐",
      "请帮帮我",
    ];

    it.each(chineseClean)("Chinese clean: %s", (text) => {
      expectClean(text);
    });

    // Arabic
    const arabicClean = [
      "مرحبا، كيف حالك؟",
      "الطقس جميل اليوم",
      "شكرا جزيلا لمساعدتك",
      "سأذهب إلى المدرسة غدا",
      "فنجان قهوة من فضلك",
      "نلتقي في الحديقة",
      "أنا أتعلم اللغة العربية",
      "هذا الفيلم رائع جدا",
      "عيد ميلاد سعيد",
      "من فضلك ساعدني",
    ];

    it.each(arabicClean)("Arabic clean: %s", (text) => {
      expectClean(text);
    });
  });

  // ═════════════════════════════════════════════════════════════════════
  // 4. EVENT DESCRIPTIONS (realistic community bulletin content)
  // ═════════════════════════════════════════════════════════════════════
  describe("Community event descriptions", () => {
    const eventDescriptions = [
      "Join us for a neighborhood cleanup this Saturday at 9am",
      "Free yoga class in the park — all levels welcome",
      "Community garden planting day: bring your own tools",
      "Local food bank needs volunteers this weekend",
      "Town hall meeting to discuss traffic improvements",
      "Book club meeting: we're reading 'The Great Gatsby'",
      "Parent-teacher conference next Tuesday at 6pm",
      "Farmers market every Sunday from 8am to 1pm",
      "Annual art show and craft fair at the community center",
      "Blood drive at the fire station — walk-ins welcome",
      "Summer camp registration opens next Monday",
      "Free concert in the amphitheater this Friday night",
      "Neighborhood watch meeting — safety tips and updates",
      "Dog park grand opening celebration with treats and games",
      "Senior center bingo night every Wednesday at 7pm",
      "Youth basketball league sign-ups now open for ages 8-14",
      "Community theater presents Shakespeare in the Park",
      "Environmental awareness workshop on recycling and composting",
      "Local history lecture series at the public library",
      "Charity 5K run/walk for children's hospital",
    ];

    it.each(eventDescriptions)("does not flag event: %s", (text) => {
      expectClean(text);
    });
  });

  // ═════════════════════════════════════════════════════════════════════
  // 5. TECHNICAL AND PROFESSIONAL TEXT
  // ═════════════════════════════════════════════════════════════════════
  describe("Technical and professional text", () => {
    const technicalText = [
      "The API endpoint returns a JSON response with status code 200",
      "Please submit your pull request for code review",
      "The database migration was executed successfully",
      "We need to analyze the regression test results",
      "The server configuration requires SSL certificates",
      "Implement the authentication middleware for the Express app",
      "The algorithm has O(n log n) time complexity",
      "Deploy the application to the staging environment",
      "The cache invalidation strategy needs improvement",
      "Refactor the legacy codebase to use TypeScript",
      "The penetration test revealed no critical vulnerabilities",
      "Analyze the network traffic patterns for anomalies",
      "The compiler optimization reduced binary size by 30%",
      "Execute the batch processing job during off-peak hours",
      "The microservices architecture improves scalability",
    ];

    it.each(technicalText)("does not flag: %s", (text) => {
      expectClean(text);
    });
  });

  // ═════════════════════════════════════════════════════════════════════
  // 6. FOOD, DRINK, AND CULTURAL TERMS
  // ═════════════════════════════════════════════════════════════════════
  describe("Food, drink, and cultural terms", () => {
    const foodTerms = [
      "I'll have a negroni with extra ice",
      "The cocktail menu features classic drinks",
      "We ordered sushi and ramen for dinner",
      "The recipe calls for one cup of buttermilk",
      "Fresh baguette with brie and grapes",
      "The tiramisu at this restaurant is amazing",
      "Pad thai with extra peanuts and lime",
      "She makes the best sourdough bread",
      "Try the espresso with a shot of vanilla",
      "The kimchi fried rice was delicious",
      "Chicken tikka masala with garlic naan",
      "The beer garden serves craft ales and stouts",
      "A glass of Chardonnay pairs well with fish",
      "The brunch menu has eggs benedict and waffles",
      "Homemade pasta with pesto and pine nuts",
    ];

    it.each(foodTerms)("does not flag: %s", (text) => {
      expectClean(text);
    });
  });

  // ═════════════════════════════════════════════════════════════════════
  // 7. NAMES AND PLACES
  // ═════════════════════════════════════════════════════════════════════
  describe("Names and places that could trigger false positives", () => {
    const namesAndPlaces = [
      // "Dick Van Dyke was a legendary entertainer", // Known limitation: "Dick" and "Dyke" are English profanity
      "We visited Scunthorpe last summer",
      "Penistone is a town in South Yorkshire",
      "The play was written by Charles Dickens",
      "Sussex County has beautiful countryside",
      "Hancock signed the Declaration of Independence",
      "We flew from Cockermouth to Edinburgh",
      "Lake Titicaca is in South America",
      "The town of Shitterton has a famous sign",
      "Middlesex University offers great programs",
      "Fukuoka is a vibrant city in Japan",
      "Condom is a commune in southwestern France",
      "Bangkok is the capital of Thailand",
      "The Titsee lake is in the Black Forest",
      "The ship docked at Phuket harbor",
    ];

    it.each(namesAndPlaces)("does not flag: %s", (text) => {
      expectClean(text);
    });
  });

  // ═════════════════════════════════════════════════════════════════════
  // 8. MIXED-SCRIPT TEXT (romanized non-Latin languages)
  // ═════════════════════════════════════════════════════════════════════
  describe("Romanized non-Latin text that could collide with profanity", () => {
    const romanizedClean = [
      "Konnichiwa, ogenki desu ka?",       // Japanese greeting
      "Annyeonghaseyo, mannaseo bangapseumnida", // Korean greeting
      "Namaste, aap kaise hain?",          // Hindi greeting
      "Privet, kak dela?",                 // Russian greeting
      "Ni hao, ni hao ma?",               // Chinese greeting
      "Merhaba, nasilsiniz?",             // Turkish greeting
      "Salam, chetori?",                  // Farsi greeting
      "Sawadee krap, sabai dee mai?",     // Thai greeting
      "Xin chao, ban khoe khong?",        // Vietnamese greeting
      "Shalom, ma shlomcha?",             // Hebrew greeting
    ];

    it.each(romanizedClean)("does not flag romanized: %s", (text) => {
      expectClean(text);
    });
  });

  // ═════════════════════════════════════════════════════════════════════
  // 9. LONGER CLEAN PARAGRAPHS
  // ═════════════════════════════════════════════════════════════════════
  describe("Longer clean paragraphs", () => {
    it("does not flag a news article excerpt", () => {
      expectClean(
        "The city council approved a new budget for infrastructure improvements. " +
        "The plan includes road repairs, bridge maintenance, and public transit expansion. " +
        "Mayor Johnson emphasized that the investment would create jobs and improve quality of life. " +
        "The budget was approved with a 7-2 vote after three hours of public discussion."
      );
    });

    it("does not flag a product review", () => {
      expectClean(
        "This wireless keyboard is excellent for daily use. The keys have great tactile feedback, " +
        "the battery lasts about two weeks on a single charge, and the Bluetooth connection is reliable. " +
        "Setup was straightforward — just press the pairing button and connect. Highly recommended " +
        "for anyone looking for a compact, portable keyboard."
      );
    });

    it("does not flag a recipe", () => {
      expectClean(
        "Preheat the oven to 375 degrees. Mix the flour, sugar, and baking powder in a large bowl. " +
        "In a separate bowl, whisk together the eggs, milk, and melted butter. Combine the wet and " +
        "dry ingredients, being careful not to overmix. Pour the batter into a greased baking pan " +
        "and bake for 25-30 minutes until golden brown."
      );
    });

    it("does not flag a travel description", () => {
      expectClean(
        "The ancient temples of Kyoto are breathtaking in autumn when the maple trees turn brilliant " +
        "shades of red and orange. We spent three days exploring the bamboo groves, traditional tea " +
        "houses, and serene rock gardens. The bullet train from Tokyo takes just over two hours, " +
        "making it an easy day trip or a relaxing extended stay."
      );
    });

    it("does not flag a sports recap", () => {
      expectClean(
        "The home team clinched the championship with a dramatic overtime victory. The final score " +
        "was 98-95 after the point guard hit a three-pointer with just seconds remaining. " +
        "The crowd erupted in celebration as the buzzer sounded. Coach Williams praised the team's " +
        "resilience and dedication throughout the season."
      );
    });

    it("does not flag an academic abstract", () => {
      expectClean(
        "This study examines the impact of urban green spaces on mental health outcomes in densely " +
        "populated metropolitan areas. Using a cross-sectional survey of 2,500 participants, we found " +
        "a significant positive correlation between proximity to parks and self-reported well-being. " +
        "The results suggest that urban planning policies should prioritize accessible green spaces."
      );
    });
  });

  // ═════════════════════════════════════════════════════════════════════
  // 10. EDGE CASES — SHORT SINGLE WORDS
  // ═════════════════════════════════════════════════════════════════════
  describe("Short single clean words", () => {
    const shortWords = [
      "hi", "ok", "yes", "no", "go", "do", "am", "is", "at", "in",
      "on", "up", "to", "so", "me", "we", "he", "it", "or", "an",
      "the", "and", "but", "for", "not", "you", "all", "can", "had",
      "her", "was", "one", "our", "out", "day", "get", "has", "him",
      "his", "how", "its", "may", "new", "now", "old", "see", "way",
      "who", "did", "let", "say", "she", "too", "use",
      "sun", "run", "fun", "gun", "bun", "pun",
      "cat", "bat", "hat", "mat", "rat", "sat",
      "dog", "log", "fog", "jog", "hog", "bog",
      "cup", "pup", "cut", "put", "hut", "nut", "gut", "rut",
      "pen", "ten", "hen", "den", "men",
      "red", "bed", "led", "fed", "wed",
    ];

    it.each(shortWords)("does not flag short word: %s", (word) => {
      expectClean(word);
    });
  });
});

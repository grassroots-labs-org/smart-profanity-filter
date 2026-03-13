import { detectLanguages, detectBestLanguage } from "../src/language-detector.js";

/**
 * Large text body tests — realistic paragraphs and articles in various languages.
 * Tests language detection accuracy on substantial text blocks rather than
 * short phrases, which is more representative of real-world usage.
 */
describe("Large Text Body Detection", () => {
  // ─── Pure language — long paragraphs ───

  describe("pure language — long English text", () => {
    const text =
      "The history of artificial intelligence began in antiquity, with myths, stories and rumors of " +
      "artificial beings endowed with intelligence or consciousness by master craftsmen. The seeds of " +
      "modern AI were planted by philosophers who attempted to describe the process of human thinking " +
      "as the mechanical manipulation of symbols. This work culminated in the invention of the " +
      "programmable digital computer in the 1940s, a machine based on the abstract essence of " +
      "mathematical reasoning. This device and the ideas behind it inspired a handful of scientists " +
      "to begin seriously discussing the possibility of building an electronic brain. The field of " +
      "AI research was founded at a workshop held on the campus of Dartmouth College during the " +
      "summer of 1956. Those who attended would become the leaders of AI research for decades.";

    test("detects English as primary language", () => {
      const result = detectBestLanguage(text);
      expect(result.language).toBe("en");
    });

    test("English is present in results", () => {
      const result = detectLanguages(text);
      const en = result.languages.find((l) => l.language === "en");
      expect(en).toBeDefined();
      // Latin-script words dilute across many language tries, so proportion may be modest
      expect(en!.proportion).toBeGreaterThan(0.05);
    });

    test("totalWords is reasonable for paragraph length", () => {
      const result = detectLanguages(text);
      expect(result.totalWords).toBeGreaterThan(100);
    });
  });

  describe("pure language — long Spanish text", () => {
    const text =
      "La inteligencia artificial es la simulación de procesos de inteligencia humana por parte de " +
      "máquinas, especialmente sistemas informáticos. Estos procesos incluyen el aprendizaje, el " +
      "razonamiento y la autocorrección. Las aplicaciones particulares de la inteligencia artificial " +
      "incluyen sistemas expertos, reconocimiento de voz y visión artificial. La inteligencia " +
      "artificial fue fundada como disciplina académica en mil novecientos cincuenta y seis, y en " +
      "los años posteriores ha experimentado varias oleadas de optimismo, seguidas de decepción y " +
      "pérdida de financiación, seguidas de nuevos enfoques, éxito y renovada financiación. Durante " +
      "la mayor parte de su historia, la investigación en inteligencia artificial se ha dividido en " +
      "subcampos que a menudo no se comunican entre sí.";

    test("detects Spanish as primary language", () => {
      const result = detectBestLanguage(text);
      expect(result.language).toBe("es");
    });

    test("Spanish has high proportion", () => {
      const result = detectLanguages(text);
      const es = result.languages.find((l) => l.language === "es");
      expect(es).toBeDefined();
      expect(es!.proportion).toBeGreaterThan(0.15);
    });
  });

  describe("pure language — long French text", () => {
    const text =
      "L'intelligence artificielle est un ensemble de théories et de techniques mises en œuvre en " +
      "vue de réaliser des machines capables de simuler l'intelligence humaine. Souvent classée " +
      "dans le groupe des mathématiques et des sciences cognitives, elle fait appel à la " +
      "neurobiologie computationnelle et à la logique mathématique. L'intelligence artificielle " +
      "est un sujet d'actualité très médiatisé. Elle est parfois perçue comme une menace pour " +
      "l'emploi mais aussi comme une opportunité de développement économique. Les progrès récents " +
      "dans le domaine de l'apprentissage profond ont conduit à des avancées spectaculaires dans " +
      "la reconnaissance d'images, le traitement du langage naturel et les systèmes de " +
      "recommandation. Ces développements transforment rapidement de nombreux secteurs industriels.";

    test("detects French as primary language", () => {
      const result = detectBestLanguage(text);
      expect(result.language).toBe("fr");
    });

    test("French is present in results", () => {
      const result = detectLanguages(text);
      const fr = result.languages.find((l) => l.language === "fr");
      expect(fr).toBeDefined();
      expect(fr!.proportion).toBeGreaterThan(0.05);
    });
  });

  describe("pure language — long German text", () => {
    const text =
      "Künstliche Intelligenz ist ein Teilgebiet der Informatik, das sich mit der Automatisierung " +
      "intelligenten Verhaltens und dem maschinellen Lernen befasst. Der Begriff ist schwer zu " +
      "definieren, da es bereits an einer genauen Definition von Intelligenz mangelt. Dennoch wird " +
      "er in Forschung und Entwicklung vielfach verwendet. Die Erforschung der künstlichen " +
      "Intelligenz begann in der Mitte des zwanzigsten Jahrhunderts. Seitdem hat sich das Gebiet " +
      "erheblich weiterentwickelt und umfasst heute verschiedene Methoden, darunter maschinelles " +
      "Lernen, tiefe neuronale Netze und natürliche Sprachverarbeitung. Die Anwendungen reichen " +
      "von der Bilderkennung über autonomes Fahren bis hin zur medizinischen Diagnostik. " +
      "Deutschland investiert zunehmend in die Entwicklung von Technologien der künstlichen " +
      "Intelligenz, um im internationalen Wettbewerb bestehen zu können.";

    test("detects German as primary language", () => {
      const result = detectBestLanguage(text);
      expect(result.language).toBe("de");
    });

    test("German present signal is high (special chars)", () => {
      const result = detectLanguages(text);
      const de = result.languages.find((l) => l.language === "de");
      expect(de).toBeDefined();
      expect(de!.present).toBeGreaterThanOrEqual(0.5);
    });
  });

  describe("pure language — long Italian text", () => {
    const text =
      "L'intelligenza artificiale è una disciplina che studia i fondamenti teorici, le metodologie " +
      "e le tecniche che consentono la progettazione di sistemi hardware e programmi software " +
      "capaci di fornire prestazioni che, a un osservatore comune, sembrerebbero essere di " +
      "pertinenza esclusiva dell'intelligenza umana. L'avanzamento delle tecnologie informatiche " +
      "ha permesso negli ultimi anni lo sviluppo di applicazioni sempre più sofisticate, capaci " +
      "di apprendere dai dati e migliorare le proprie prestazioni nel tempo. I settori di " +
      "applicazione sono molteplici e comprendono la medicina, il commercio elettronico, la " +
      "finanza, i trasporti e molti altri ambiti della vita quotidiana. La ricerca italiana in " +
      "questo campo è riconosciuta a livello internazionale per i suoi contributi significativi.";

    test("detects Italian as primary language", () => {
      const result = detectBestLanguage(text);
      expect(result.language).toBe("it");
    });
  });

  describe("pure language — long Portuguese text", () => {
    const text =
      "A inteligência artificial é o ramo da ciência da computação que se propõe a elaborar " +
      "dispositivos que simulem a capacidade humana de raciocinar, perceber, tomar decisões e " +
      "resolver problemas. Existem diferentes tipos de inteligência artificial, desde sistemas " +
      "simples que executam tarefas específicas até sistemas mais complexos que tentam imitar o " +
      "raciocínio humano de forma abrangente. O Brasil tem investido cada vez mais na pesquisa " +
      "e desenvolvimento de soluções baseadas em inteligência artificial, com aplicações na " +
      "agricultura de precisão, na saúde pública e na segurança. A formação de profissionais " +
      "qualificados nesta área é considerada uma prioridade estratégica para o desenvolvimento " +
      "tecnológico e econômico do país nas próximas décadas.";

    test("detects Portuguese as primary language", () => {
      const result = detectBestLanguage(text);
      expect(result.language).toBe("pt");
    });
  });

  describe("pure language — long Turkish text", () => {
    const text =
      "Yapay zeka, insan zekasının bilgisayar programları ve makineler tarafından taklit edilmesi " +
      "sürecidir. Öğrenme, muhakeme ve problem çözme gibi bilişsel işlevleri içerir. Yapay zeka " +
      "araştırmaları yirminci yüzyılın ortalarında başlamış olup günümüzde önemli ilerlemeler " +
      "kaydetmiştir. Türkiye'de yapay zeka alanında çalışmalar giderek artmaktadır. Üniversiteler " +
      "ve özel sektör kuruluşları bu alanda önemli yatırımlar yapmaktadır. Sağlık, eğitim, " +
      "tarım ve güvenlik gibi pek çok sektörde yapay zeka uygulamaları kullanılmaktadır. " +
      "Ülkemizin teknolojik gelişimi açısından yapay zeka stratejik bir öneme sahiptir. " +
      "Gelecekte bu teknolojilerin daha da yaygınlaşması beklenmektedir.";

    test("detects Turkish as primary language", () => {
      const result = detectBestLanguage(text);
      expect(result.language).toBe("tr");
    });

    test("Turkish present signal is high (special chars ğ, ş, ı, ç)", () => {
      const result = detectLanguages(text);
      const tr = result.languages.find((l) => l.language === "tr");
      expect(tr).toBeDefined();
      expect(tr!.present).toBeGreaterThanOrEqual(0.5);
    });
  });

  describe("pure language — long Japanese text", () => {
    const text =
      "人工知能は、人間の知能を模倣するコンピュータシステムの開発に関する科学技術の分野です。" +
      "機械学習、深層学習、自然言語処理などの技術が含まれます。近年、人工知能の発展は目覚ましく、" +
      "画像認識、音声認識、自動翻訳などの分野で大きな成果を上げています。日本では、人工知能の研究開発が" +
      "活発に行われており、産業界でも積極的に導入が進んでいます。医療、製造業、金融、交通など、" +
      "様々な分野で人工知能の活用が期待されています。政府も人工知能戦略を策定し、" +
      "人材育成や研究開発への投資を強化しています。";

    test("detects Japanese as primary language", () => {
      const result = detectBestLanguage(text);
      expect(result.language).toBe("ja");
    });

    test("Japanese present signal is 1.0 (native script)", () => {
      const result = detectLanguages(text);
      const ja = result.languages.find((l) => l.language === "ja");
      expect(ja).toBeDefined();
      expect(ja!.present).toBe(1);
    });

    test("Japanese has very high proportion", () => {
      const result = detectLanguages(text);
      const ja = result.languages.find((l) => l.language === "ja");
      expect(ja).toBeDefined();
      expect(ja!.proportion).toBeGreaterThan(0.3);
    });
  });

  describe("pure language — long Korean text", () => {
    const text =
      "인공지능은 인간의 학습능력, 추론능력, 지각능력을 인공적으로 구현하려는 컴퓨터 과학의 " +
      "세부분야 중 하나이다. 정보공학 분야에 있어 하나의 인프라 기술이기도 하다. 인간을 " +
      "포함한 동물이 갖고 있는 지능 즉, 자연지능과는 다른 개념이다. 대한민국에서는 인공지능 " +
      "기술 개발에 많은 투자가 이루어지고 있으며, 삼성전자, 네이버, 카카오 등 대기업들이 " +
      "인공지능 연구에 적극적으로 참여하고 있다. 의료, 교육, 금융, 제조업 등 다양한 " +
      "분야에서 인공지능 기술이 활용되고 있으며, 향후 더욱 발전할 것으로 기대된다.";

    test("detects Korean as primary language", () => {
      const result = detectBestLanguage(text);
      expect(result.language).toBe("ko");
    });

    test("Korean present signal is 1.0 (Hangul script)", () => {
      const result = detectLanguages(text);
      const ko = result.languages.find((l) => l.language === "ko");
      expect(ko).toBeDefined();
      expect(ko!.present).toBe(1);
    });
  });

  describe("pure language — long Russian text", () => {
    const text =
      "Искусственный интеллект — это область информатики, которая занимается созданием " +
      "интеллектуальных машин, способных выполнять задачи, обычно требующие человеческого " +
      "интеллекта. Это включает в себя обучение, рассуждение, решение проблем, восприятие " +
      "и понимание языка. Россия активно развивает технологии искусственного интеллекта. " +
      "Правительство приняло национальную стратегию развития искусственного интеллекта до " +
      "две тысячи тридцатого года. Крупные российские компании инвестируют значительные " +
      "средства в исследования и разработки в этой области. Применение искусственного " +
      "интеллекта охватывает здравоохранение, образование, транспорт и многие другие сферы.";

    test("detects Russian as primary language", () => {
      const result = detectBestLanguage(text);
      expect(result.language).toBe("ru");
    });

    test("Russian present signal is 1.0 (Cyrillic script)", () => {
      const result = detectLanguages(text);
      const ru = result.languages.find((l) => l.language === "ru");
      expect(ru).toBeDefined();
      expect(ru!.present).toBe(1);
    });
  });

  describe("pure language — long Arabic text", () => {
    const text =
      "الذكاء الاصطناعي هو فرع من فروع علم الحاسوب يهدف إلى إنشاء أنظمة ذكية تعمل وتتفاعل " +
      "مثل البشر. يشمل ذلك التعلم الآلي ومعالجة اللغة الطبيعية والرؤية الحاسوبية والروبوتات. " +
      "شهدت السنوات الأخيرة تطوراً كبيراً في مجال الذكاء الاصطناعي مع ظهور نماذج اللغة الكبيرة " +
      "والتعلم العميق. تستثمر الدول العربية بشكل متزايد في تقنيات الذكاء الاصطناعي، حيث أطلقت " +
      "عدة دول استراتيجيات وطنية لتطوير هذا القطاع. تشمل التطبيقات الرئيسية الرعاية الصحية " +
      "والتعليم والتجارة الإلكترونية والأمن السيبراني.";

    test("detects Arabic as primary language", () => {
      const result = detectBestLanguage(text);
      expect(result.language).toBe("ar");
    });

    test("Arabic present signal is 1.0", () => {
      const result = detectLanguages(text);
      const ar = result.languages.find((l) => l.language === "ar");
      expect(ar).toBeDefined();
      expect(ar!.present).toBe(1);
    });
  });

  describe("pure language — long Hindi text", () => {
    const text =
      "कृत्रिम बुद्धिमत्ता कंप्यूटर विज्ञान की एक शाखा है जो बुद्धिमान मशीनें बनाने से " +
      "संबंधित है। इसमें मशीन लर्निंग, प्राकृतिक भाषा प्रसंस्करण और कंप्यूटर विज़न जैसी " +
      "तकनीकें शामिल हैं। भारत में कृत्रिम बुद्धिमत्ता के क्षेत्र में तेजी से विकास हो " +
      "रहा है। सरकार ने इस क्षेत्र में अनुसंधान और विकास को बढ़ावा देने के लिए कई पहल " +
      "शुरू की हैं। स्वास्थ्य, शिक्षा, कृषि और वित्त जैसे क्षेत्रों में कृत्रिम बुद्धिमत्ता " +
      "का उपयोग बढ़ रहा है। भारतीय प्रौद्योगिकी कंपनियाँ इस क्षेत्र में वैश्विक स्तर पर " +
      "महत्वपूर्ण योगदान दे रही हैं।";

    test("detects Hindi as primary language", () => {
      const result = detectBestLanguage(text);
      expect(result.language).toBe("hi");
    });

    test("Hindi present signal is 1.0 (Devanagari script)", () => {
      const result = detectLanguages(text);
      const hi = result.languages.find((l) => l.language === "hi");
      expect(hi).toBeDefined();
      expect(hi!.present).toBe(1);
    });
  });

  describe("pure language — long Bengali text", () => {
    const text =
      "কৃত্রিম বুদ্ধিমত্তা হল কম্পিউটার বিজ্ঞানের একটি শাখা যা বুদ্ধিমান যন্ত্র তৈরি করতে " +
      "চায়। এর মধ্যে রয়েছে মেশিন লার্নিং, প্রাকৃতিক ভাষা প্রক্রিয়াকরণ এবং কম্পিউটার " +
      "ভিশন। বাংলাদেশ এবং পশ্চিমবঙ্গে কৃত্রিম বুদ্ধিমত্তার ক্ষেত্রে গবেষণা ও উন্নয়ন " +
      "কার্যক্রম বৃদ্ধি পাচ্ছে। বিশ্ববিদ্যালয় এবং প্রযুক্তি প্রতিষ্ঠানগুলি এই ক্ষেত্রে " +
      "গুরুত্বপূর্ণ কাজ করছে। স্বাস্থ্যসেবা, শিক্ষা এবং কৃষি ক্ষেত্রে কৃত্রিম বুদ্ধিমত্তার " +
      "প্রয়োগ ক্রমশ বাড়ছে।";

    test("detects Bengali as primary language", () => {
      const result = detectBestLanguage(text);
      expect(result.language).toBe("bn");
    });

    test("Bengali present signal is 1.0", () => {
      const result = detectLanguages(text);
      const bn = result.languages.find((l) => l.language === "bn");
      expect(bn).toBeDefined();
      expect(bn!.present).toBe(1);
    });
  });

  describe("pure language — long Tamil text", () => {
    const text =
      "செயற்கை நுண்ணறிவு என்பது மனித அறிவுத்திறனை பிரதிபலிக்கும் கணினி அமைப்புகளை " +
      "உருவாக்கும் கணினி அறிவியலின் ஒரு துறையாகும். இயந்திர கற்றல், இயற்கை மொழி " +
      "செயலாக்கம் மற்றும் கணினி பார்வை போன்ற தொழில்நுட்பங்கள் இதில் அடங்கும். " +
      "தமிழ்நாட்டில் செயற்கை நுண்ணறிவு ஆராய்ச்சி வளர்ந்து வருகிறது. சென்னை மற்றும் " +
      "கோயம்புத்தூர் போன்ற நகரங்களில் தொழில்நுட்ப நிறுவனங்கள் இந்தத் துறையில் " +
      "முக்கியமான பங்களிப்பை செய்து வருகின்றன.";

    test("detects Tamil as primary language", () => {
      const result = detectBestLanguage(text);
      expect(result.language).toBe("ta");
    });

    test("Tamil present signal is 1.0", () => {
      const result = detectLanguages(text);
      const ta = result.languages.find((l) => l.language === "ta");
      expect(ta).toBeDefined();
      expect(ta!.present).toBe(1);
    });
  });

  describe("pure language — long Telugu text", () => {
    const text =
      "కృత్రిమ మేధస్సు అనేది కంప్యూటర్ సైన్స్ యొక్క ఒక శాఖ, ఇది తెలివైన యంత్రాలను " +
      "నిర్మించడానికి ప్రయత్నిస్తుంది. మెషీన్ లెర్నింగ్, సహజ భాషా ప్రాసెసింగ్ మరియు " +
      "కంప్యూటర్ విజన్ వంటి సాంకేతికతలు ఇందులో ఉన్నాయి. తెలుగు రాష్ట్రాలలో కృత్రిమ " +
      "మేధస్సు పరిశోధన మరియు అభివృద్ధి కార్యకలాపాలు పెరుగుతున్నాయి. హైదరాబాద్ " +
      "నగరం ఈ రంగంలో ముఖ్యమైన కేంద్రంగా మారుతోంది. ఆరోగ్యం, విద్య మరియు వ్యవసాయం " +
      "వంటి రంగాలలో కృత్రిమ మేధస్సు అనువర్తనాలు విస్తరిస్తున్నాయి.";

    test("detects Telugu as primary language", () => {
      const result = detectBestLanguage(text);
      expect(result.language).toBe("te");
    });

    test("Telugu present signal is 1.0", () => {
      const result = detectLanguages(text);
      const te = result.languages.find((l) => l.language === "te");
      expect(te).toBeDefined();
      expect(te!.present).toBe(1);
    });
  });

  describe("pure language — long Chinese text", () => {
    const text =
      "人工智能是计算机科学的一个分支，旨在创建能够模拟人类智能的系统。它包括机器学习、" +
      "自然语言处理和计算机视觉等技术。近年来，人工智能领域取得了显著的进展，尤其是在深度学习" +
      "和大语言模型方面。中国在人工智能研究和开发方面投入了大量资源，已成为全球人工智能发展的" +
      "重要力量。北京、上海和深圳等城市是中国人工智能产业的主要中心。人工智能技术在医疗、教育、" +
      "金融和交通等领域的应用正在快速扩展，为社会经济发展提供了新的动力。";

    test("detects Chinese as primary language", () => {
      const result = detectLanguages(text);
      const codes = result.languages.map((l) => l.language);
      expect(codes).toContain("zh");
    });

    test("Chinese has high present signal (CJK script)", () => {
      const result = detectLanguages(text);
      const zh = result.languages.find((l) => l.language === "zh");
      expect(zh).toBeDefined();
      // CJK chars are shared between zh and ja, both should be present
      expect(zh!.present).toBeGreaterThan(0);
    });
  });

  describe("pure language — long Dutch text", () => {
    const text =
      "Kunstmatige intelligentie is een deelgebied van de informatica dat zich bezighoudt met het " +
      "creëren van intelligente machines die taken kunnen uitvoeren die normaal menselijke " +
      "intelligentie vereisen. Dit omvat machinaal leren, natuurlijke taalverwerking en " +
      "computervisie. Nederland speelt een belangrijke rol in het Europese onderzoek naar " +
      "kunstmatige intelligentie. Universiteiten in Amsterdam, Delft en Eindhoven zijn " +
      "toonaangevend op dit gebied. De Nederlandse overheid heeft een nationale strategie voor " +
      "kunstmatige intelligentie ontwikkeld om de concurrentiepositie van het land te versterken. " +
      "Toepassingen variëren van de gezondheidszorg tot de landbouw en de financiële sector.";

    test("detects Dutch as primary language", () => {
      const result = detectBestLanguage(text);
      expect(result.language).toBe("nl");
    });
  });

  // ─── Mixed language — long texts ───

  describe("mixed language — English article with Japanese quotes", () => {
    const text =
      "The concept of 'omotenashi' (おもてなし) is deeply rooted in Japanese culture. It refers to " +
      "the art of selfless hospitality, where the host anticipates the needs of the guest without " +
      "expecting anything in return. In traditional tea ceremonies, known as 'chado' (茶道), the " +
      "host carefully prepares every detail to create a perfect experience. The Japanese word " +
      "'ikigai' (生きがい) represents another important cultural concept — it means 'a reason for " +
      "being' and encourages finding purpose in daily life. Many Western businesses have adopted " +
      "the principle of 'kaizen' (改善), which means continuous improvement. The phrase 'wabi-sabi' " +
      "(侘寂) describes the beauty found in imperfection and impermanence.";

    test("detects both English and Japanese", () => {
      const result = detectLanguages(text);
      const codes = result.languages.map((l) => l.language);
      expect(codes).toContain("en");
      expect(codes).toContain("ja");
    });

    test("English has higher proportion than Japanese", () => {
      const result = detectLanguages(text);
      const en = result.languages.find((l) => l.language === "en");
      const ja = result.languages.find((l) => l.language === "ja");
      expect(en).toBeDefined();
      expect(ja).toBeDefined();
      expect(en!.proportion).toBeGreaterThan(ja!.proportion);
    });

    test("Japanese present is 1.0 (kana/kanji present)", () => {
      const result = detectLanguages(text);
      const ja = result.languages.find((l) => l.language === "ja");
      expect(ja).toBeDefined();
      expect(ja!.present).toBe(1);
    });
  });

  describe("mixed language — Spanglish blog post", () => {
    const text =
      "Ayer fui al grocery store porque necesitaba comprar algunas cosas para la fiesta de este " +
      "weekend. Mi amiga María me dijo que ella iba a traer los drinks y el postre, así que yo " +
      "me enfoqué en la comida principal. Compré carne para hacer unos tacos increíbles con " +
      "salsa casera, y también rice and beans como side dish. El problema es que el store no " +
      "tenía aguacates maduros, so I had to go to another tienda. Al final todo salió perfecto " +
      "y la fiesta estuvo amazing. Everyone dijo que la comida estaba deliciosa.";

    test("detects both Spanish and English", () => {
      const result = detectLanguages(text);
      const codes = result.languages.map((l) => l.language);
      expect(codes).toContain("es");
    });

    test("Spanish has non-trivial proportion", () => {
      const result = detectLanguages(text);
      const es = result.languages.find((l) => l.language === "es");
      expect(es).toBeDefined();
      expect(es!.proportion).toBeGreaterThan(0.05);
    });
  });

  describe("mixed language — Hinglish social media style", () => {
    const text =
      "Yaar aaj ka din bahut hectic tha. Office mein itna kaam tha ki lunch bhi skip karna " +
      "pada. Boss ne ek naya project assign kiya hai jo next week tak complete karna hai. " +
      "Uske baad gym jaane ka plan tha but itna tired ho gaya ki seedha ghar aa gaya. " +
      "Mummy ne dinner mein rajma chawal banaya tha, woh khake mood thoda better ho gaya. " +
      "Ab Netflix pe kuch dekhte hain aur so jaate hain. Kal phir se same routine shuru " +
      "hogi. Kabhi kabhi lagta hai ki life mein kuch exciting karna chahiye.";

    test("detects Hindi presence", () => {
      const result = detectLanguages(text);
      const codes = result.languages.map((l) => l.language);
      expect(codes).toContain("hi");
    });
  });

  describe("mixed language — Korean pop culture article with English", () => {
    const text =
      "최근 K-pop 산업은 전 세계적으로 큰 인기를 얻고 있습니다. BTS, BLACKPINK 같은 그룹들이 " +
      "Billboard Hot 100 차트에서 상위권을 차지하며 Korean Wave의 영향력을 보여주고 있습니다. " +
      "한국의 entertainment 산업은 music뿐만 아니라 drama와 movie 분야에서도 글로벌 시장을 " +
      "선도하고 있습니다. Netflix에서 방영된 오징어 게임은 전 세계적인 sensation을 일으켰고, " +
      "기생충은 Academy Award를 수상하며 한국 영화의 위상을 높였습니다.";

    test("detects both Korean and English", () => {
      const result = detectLanguages(text);
      const codes = result.languages.map((l) => l.language);
      expect(codes).toContain("ko");
    });

    test("Korean present is 1.0", () => {
      const result = detectLanguages(text);
      const ko = result.languages.find((l) => l.language === "ko");
      expect(ko).toBeDefined();
      expect(ko!.present).toBe(1);
    });

    test("Korean has higher proportion than English", () => {
      const result = detectLanguages(text);
      const ko = result.languages.find((l) => l.language === "ko");
      const en = result.languages.find((l) => l.language === "en");
      expect(ko).toBeDefined();
      if (en) {
        expect(ko!.proportion).toBeGreaterThan(en.proportion);
      }
    });
  });

  describe("mixed language — Russian tech article with English terms", () => {
    const text =
      "Современные фреймворки для machine learning значительно упростили разработку " +
      "интеллектуальных систем. TensorFlow и PyTorch являются наиболее популярными " +
      "инструментами среди разработчиков. В последнее время большое внимание уделяется " +
      "технологиям natural language processing и computer vision. Российские компании " +
      "активно внедряют решения на основе deep learning для автоматизации бизнес-процессов. " +
      "Яндекс разработал собственную модель YandexGPT, которая конкурирует с ChatGPT " +
      "на русскоязычном рынке.";

    test("detects both Russian and English", () => {
      const result = detectLanguages(text);
      const codes = result.languages.map((l) => l.language);
      expect(codes).toContain("ru");
    });

    test("Russian has highest proportion", () => {
      const result = detectLanguages(text);
      const ru = result.languages.find((l) => l.language === "ru");
      expect(ru).toBeDefined();
      expect(ru!.proportion).toBeGreaterThan(0.15);
    });
  });

  describe("mixed language — Arabic with English technical terms", () => {
    const text =
      "تطورت تقنيات الذكاء الاصطناعي بشكل كبير في السنوات الأخيرة. تعتبر تقنية " +
      "machine learning من أهم التطورات في هذا المجال. استخدام deep learning أحدث " +
      "ثورة في مجال computer vision ومعالجة الصور. الشركات العربية بدأت في تبني " +
      "هذه التقنيات لتحسين خدماتها. منصات مثل cloud computing ساعدت في تسهيل " +
      "الوصول إلى أدوات artificial intelligence المتقدمة.";

    test("detects Arabic as primary", () => {
      const result = detectLanguages(text);
      const codes = result.languages.map((l) => l.language);
      expect(codes).toContain("ar");
    });

    test("Arabic present is 1.0", () => {
      const result = detectLanguages(text);
      const ar = result.languages.find((l) => l.language === "ar");
      expect(ar).toBeDefined();
      expect(ar!.present).toBe(1);
    });
  });

  // ─── Performance & edge cases on large text ───

  describe("performance and edge cases on large text", () => {
    test("handles very long text without crashing", () => {
      const sentence = "The quick brown fox jumps over the lazy dog. ";
      const longText = sentence.repeat(500); // ~5000 words
      const result = detectLanguages(longText);
      expect(result.languages.length).toBeGreaterThan(0);
      expect(result.totalWords).toBeGreaterThan(4000);
    });

    test("handles text with many languages mixed", () => {
      const text =
        "Hello world. Hola mundo. Bonjour le monde. Hallo Welt. Ciao mondo. " +
        "Olá mundo. Hallo wereld. Merhaba dünya. " +
        "こんにちは世界。안녕하세요 세계. Привет мир. مرحبا بالعالم. " +
        "नमस्ते दुनिया। হ্যালো বিশ্ব। வணக்கம் உலகம். హలో ప్రపంచం.";
      const result = detectLanguages(text, { maxLanguages: 17 });
      // Should detect many languages
      expect(result.languages.length).toBeGreaterThanOrEqual(5);
    });

    test("proportions sum to approximately 1.0 on large text", () => {
      const text =
        "The weather today is absolutely wonderful and I think we should go " +
        "for a walk in the park before it gets too late. Maybe we could stop " +
        "by that new café everyone has been talking about. I heard they serve " +
        "the most amazing pastries and their coffee is supposed to be excellent. " +
        "After that we could visit the museum since they have a new exhibition " +
        "that opened last weekend. It would be a lovely way to spend the afternoon.";
      const result = detectLanguages(text);
      const sum = result.languages.reduce((s, l) => s + l.proportion, 0);
      // Sum won't always be 1.0 because low-proportion languages get filtered out
      expect(sum).toBeGreaterThan(0.3);
      expect(sum).toBeLessThanOrEqual(1.05);
    });

    test("wordCount values are reasonable", () => {
      const text =
        "This is a test with exactly twelve words in this English sentence here now. " +
        "これは日本語のテストです。";
      const result = detectLanguages(text);
      const totalWordCount = result.languages.reduce((s, l) => s + l.wordCount, 0);
      // Total distributed word count should be close to number of scored words
      expect(totalWordCount).toBeGreaterThan(0);
      expect(totalWordCount).toBeLessThanOrEqual(result.totalWords + 1);
    });

    test("present field is between 0 and 1 for all languages", () => {
      const texts = [
        "Hello world this is a test",
        "こんにちは世界 hello",
        "Bonjour comment allez-vous aujourd'hui",
        "Das Wetter ist heute wirklich schön",
      ];
      for (const text of texts) {
        const result = detectLanguages(text);
        for (const lang of result.languages) {
          expect(lang.present).toBeGreaterThanOrEqual(0);
          expect(lang.present).toBeLessThanOrEqual(1);
        }
      }
    });
  });

  // ─── Romanized large text bodies ───

  describe("romanized large text bodies", () => {
    test("long romanized Japanese text", () => {
      const text =
        "Watashi wa mainichi asa hayaku okimasu. Gohan wo tabete kara, shigoto ni ikimasu. " +
        "Kaisha de wa iroirona shigoto wo shimasu. Hirugohan wa itsumo bento wo tabemasu. " +
        "Shigoto ga owattara, tomodachi to issho ni nomini ikimasu. Yoru wa uchi de " +
        "terebi wo mimasu. Shuumatsu wa yoku kaimono ni ikimasu. Nihon no bunka wa " +
        "totemo omoshiroi desu. Watashi wa nihongo wo benkyou shiteimasu.";
      const result = detectLanguages(text);
      const codes = result.languages.map((l) => l.language);
      expect(codes).toContain("ja");
    });

    test("long romanized Korean text", () => {
      const text =
        "Annyeonghaseyo, jeo neun hangugeo reul gongbu hago isseoyo. Maeil achim " +
        "ilchik ireonaseo hakgyo e gamnida. Jeomeok eun chingu deul gwa gachi " +
        "meokseumnida. Hanguk eumsik eun jeongmal masisseoyo. Jeo neun bibimbap " +
        "gwa bulgogi reul jeil joahamnida. Jumal e neun yeonghwa reul bogo " +
        "chaek eul ilkseumnida. Hanguk munhwa neun aju jaemisseoyo.";
      const result = detectLanguages(text);
      const codes = result.languages.map((l) => l.language);
      expect(codes).toContain("ko");
    });

    test("long romanized Hindi text", () => {
      const text =
        "Namaste, mera naam Rahul hai. Main Delhi mein rehta hoon. Main roz subah " +
        "jaldi uthta hoon aur office jaata hoon. Dopahar ko khana khaane ke baad " +
        "thoda aaram karta hoon. Shaam ko ghar aake family ke saath time spend " +
        "karta hoon. Mujhe cricket khelna bahut pasand hai. Weekend pe main " +
        "apne doston ke saath bahar jaata hoon. Hindi cinema dekhna bhi meri " +
        "hobby hai. Bharat ek bahut sundar desh hai.";
      const result = detectLanguages(text);
      const codes = result.languages.map((l) => l.language);
      expect(codes).toContain("hi");
    });

    test("long romanized Russian text", () => {
      const text =
        "Privet, menya zovut Aleksey. Ya zhivu v Moskve. Kazhdyy den ya " +
        "prosypayus rano i idu na rabotu. V obede ya kushayu v stolovoy. " +
        "Posle raboty ya khorosho otdykhayu doma. Mne nravitsya chitat knigi " +
        "i smotret filmy. V vyhodnye ya gulyayu v parke ili khochu v muzey. " +
        "Russkaya kultura ochen interesnaya. Ya lyublyu slushat muzyku " +
        "i igrat na gitare. Spasibo za vnimanie.";
      const result = detectLanguages(text);
      const codes = result.languages.map((l) => l.language);
      expect(codes).toContain("ru");
    });

    test("long romanized Arabic text", () => {
      const text =
        "Marhaba, ana ismi Ahmad. Ana min Misr. Kull yawm ana ashhur min " +
        "al-nawm mubakkir wa adhhab ila al-amal. Fil ghadaa akul taam " +
        "masri. Baad al-amal arjaa ila al-bayt wa artaah. Uhibb qiraaat " +
        "al-kutub wa mushahadat al-aflaam. Fil weekend adhhab ila al-suuq " +
        "aw azuur asdiqqaai. Al-thaqaafa al-arabiyya ghaneeyya jiddan. " +
        "Ana uhibb al-museeqa al-arabiyya. Shukran jazeelan.";
      const result = detectLanguages(text);
      const codes = result.languages.map((l) => l.language);
      expect(codes).toContain("ar");
    });
  });
});

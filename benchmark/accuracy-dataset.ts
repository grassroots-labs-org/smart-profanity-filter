// benchmark/accuracy-dataset.ts

export const DATASET_VERSION = 6;

export enum Category {
  SINGLE_LANG    = 'single-language',
  MULTI_LANG     = 'multi-language',
  FALSE_POSITIVE = 'false-positive',
  ROMANIZATION   = 'romanization',
  SEMANTIC       = 'semantic-context',
  REPEATED_CHARS = 'repeated-chars',
  CONCATENATED   = 'concatenated-words',
  CHALLENGE      = 'challenge',
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

export const DATASET: AccuracyCase[] = [
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

  // ── Adversarial false positives — real failures identified via probing ─────────
  // These were chosen specifically because they expose known be-kind weaknesses.
  // (sourced independently, not from be-kind's dictionary)
  { text: "He graduated cum laude from Harvard University.", expected: false, category: Category.FALSE_POSITIVE, language: Language.ENGLISH, note: "Latin academic honour — 'cum' triggers FP" },
  { text: "Dick Van Dyke is a legendary television comedian.", expected: false, category: Category.FALSE_POSITIVE, language: Language.ENGLISH, note: "proper name — 'Dick' triggers FP" },
  { text: "Faggots are a traditional British dish made from offal.", expected: false, category: Category.FALSE_POSITIVE, language: Language.ENGLISH, note: "culinary term — homograph FP" },
  { text: "Scunthorpe is a town in North Lincolnshire, England.", expected: false, category: Category.FALSE_POSITIVE, language: Language.ENGLISH, note: "classic Scunthorpe problem — proper noun" },
  { text: "The titmouse is a small passerine bird common in North America.", expected: false, category: Category.FALSE_POSITIVE, language: Language.ENGLISH, note: "ornithological term" },
  { text: "The wankel rotary engine was developed by Felix Wankel in the 1950s.", expected: false, category: Category.FALSE_POSITIVE, language: Language.ENGLISH, note: "engineering term — 'wank' prefix" },

  // ── Independent leetspeak / obfuscation cases ───────────────────────────────
  // Sourced independently to stress-test leet-speak detection across libraries.
  // Note: glin (enhanced) with detectLeetspeak:true catches sh1t and @ss but NOT d4mn or f4ck1ng.
  { text: "This is a clean message.", expected: false, category: Category.FALSE_POSITIVE, language: Language.ENGLISH, note: "baseline clean" },
  { text: "Hello world.", expected: false, category: Category.FALSE_POSITIVE, language: Language.ENGLISH, note: "baseline clean" },
  { text: "This is damn bad.", expected: true, category: Category.SINGLE_LANG, language: Language.ENGLISH, note: "mild profanity: 'damn'" },
  { text: "Hello damn world.", expected: true, category: Category.SINGLE_LANG, language: Language.ENGLISH, note: "'damn' mid-sentence" },
  { text: "This is d4mn bad.", expected: true, category: Category.SINGLE_LANG, language: Language.ENGLISH, note: "leetspeak: d4mn — not caught by glin even with detectLeetspeak:true" },
  { text: "This is f4ck1ng bad.", expected: true, category: Category.SINGLE_LANG, language: Language.ENGLISH, note: "leetspeak: f4ck1ng — not caught by glin even with detectLeetspeak:true" },
  { text: "sh1t happens.", expected: true, category: Category.SINGLE_LANG, language: Language.ENGLISH, note: "leetspeak: sh1t — caught by glin enhanced" },
  { text: "Hello mierda damn world.", expected: true, category: Category.MULTI_LANG, language: Language.MIXED, note: "Spanish+English mix" },

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

  // ── Repeated characters (evasion via character stretching) ───────────────────
  { text: "fuuuuuuuuck this is so annoying.", expected: true, category: Category.REPEATED_CHARS, language: Language.ENGLISH, note: "f-word with stretched vowel" },
  { text: "What a cunnnnnnttttt.", expected: true, category: Category.REPEATED_CHARS, language: Language.ENGLISH, note: "c-word with stretched consonants" },
  { text: "This is total bullllllshit.", expected: true, category: Category.REPEATED_CHARS, language: Language.ENGLISH, note: "bullshit with stretched middle" },
  { text: "You asssshole.", expected: true, category: Category.REPEATED_CHARS, language: Language.ENGLISH, note: "asshole with stretched s" },
  { text: "Shhhhiiiit, I missed the train.", expected: true, category: Category.REPEATED_CHARS, language: Language.ENGLISH, note: "shit with multi-char stretching" },

  // ── Concatenated / no-space evasion ──────────────────────────────────────────
  // Tests substring-matching capability: profanity embedded without spaces.
  // Most libraries rely on word-boundary tokenization and will miss these.
  { text: "urASSHOLEbro", expected: true, category: Category.CONCATENATED, language: Language.ENGLISH, note: "ASSHOLE embedded in concatenated string" },
  { text: "youFUCKINGidiot", expected: true, category: Category.CONCATENATED, language: Language.ENGLISH, note: "FUCKING embedded in concatenated string" },
  { text: "whatthef*ck", expected: true, category: Category.CONCATENATED, language: Language.ENGLISH, note: "f*ck leet-speak, no spaces" },
  { text: "stopbeingassholes", expected: true, category: Category.CONCATENATED, language: Language.ENGLISH, note: "asshole embedded lowercase" },
  { text: "totallyBSshitpost", expected: true, category: Category.CONCATENATED, language: Language.ENGLISH, note: "shit embedded mixed case" },
  // Clean: words that contain profanity-like substrings but should not be flagged
  { text: "urbenefactor", expected: false, category: Category.CONCATENATED, language: Language.ENGLISH, note: "no profanity, similar pattern" },
  { text: "classwork", expected: false, category: Category.CONCATENATED, language: Language.ENGLISH, note: "no profanity embedded" },

  // ── Challenge cases — known hard problems from challenge-tests.test.ts ─────
  // These test semantic disambiguation: words that ARE profane in isolation but
  // are used innocently in context. Ideal filter should mark these AMBIVALENT/CLEAN.

  // C5: Cross-language false friend in educational context
  { text: "In Swedish, the word 'slut' simply means 'end' or 'finish'. You'll see it on signs at the end of roads: 'Slut på vägen'. It's a perfectly innocent word in Scandinavian languages.", expected: false, category: Category.CHALLENGE, language: Language.ENGLISH, note: "C5: Swedish 'slut' = end, educational context" },

  // D1: "ass" meaning donkey in biology
  { text: "The wild ass, also known as the onager, is a species of equine native to Asia. The African wild ass is the ancestor of the domestic donkey.", expected: false, category: Category.CHALLENGE, language: Language.ENGLISH, note: "D1: ass = donkey, zoological context" },

  // D2: "cock" meaning rooster in farming
  { text: "The cock crowed at dawn, waking the entire farmyard. The hens followed the cock around the yard, pecking at grain.", expected: false, category: Category.CHALLENGE, language: Language.ENGLISH, note: "D2: cock = rooster, farming context" },

  // G2: "puta" in Spanish linguistic discussion
  { text: "En la historia del idioma español, la palabra 'puta' tiene raíces en el latín 'putus' que significaba podado o limpio.", expected: false, category: Category.CHALLENGE, language: Language.SPANISH, note: "G2: puta in linguistic/etymological discussion" },

  // E1: Profanity embedded in concatenated words (no spaces)
  { text: "urASSHOLEbro", expected: true, category: Category.CHALLENGE, language: Language.ENGLISH, note: "E1: ASSHOLE embedded, high coverage (58%)" },
  { text: "ufucker", expected: true, category: Category.CHALLENGE, language: Language.ENGLISH, note: "E1: fucker embedded, high coverage (86%)" },

  // E1: Clean words that should NOT be flagged despite containing profanity substrings
  { text: "canal", expected: false, category: Category.CHALLENGE, language: Language.ENGLISH, note: "E1: contains 'anal' but word too short (4 chars)" },
  { text: "assassin", expected: false, category: Category.CHALLENGE, language: Language.ENGLISH, note: "E1: contains 'ass' but low coverage (37%)" },
  { text: "classical", expected: false, category: Category.CHALLENGE, language: Language.ENGLISH, note: "E1: contains 'ass' but low coverage (33%)" },

  // ── Separator-spaced evasion — profanity with spaces/separators between chars ─
  { text: "f u c k this", expected: true, category: Category.CHALLENGE, language: Language.ENGLISH, note: "spaced-out fuck" },
  { text: "s h i t happens", expected: true, category: Category.CHALLENGE, language: Language.ENGLISH, note: "spaced-out shit" },
  { text: "a.s.s.h.o.l.e", expected: true, category: Category.CHALLENGE, language: Language.ENGLISH, note: "dot-separated asshole" },
  { text: "b-i-t-c-h", expected: true, category: Category.CHALLENGE, language: Language.ENGLISH, note: "dash-separated bitch" },
  { text: "f_u_c_k you", expected: true, category: Category.CHALLENGE, language: Language.ENGLISH, note: "underscore-separated fuck" },
  { text: "c  o  c  k", expected: true, category: Category.CHALLENGE, language: Language.ENGLISH, note: "double-space-separated cock" },
  // Mixed-separator evasion — different separator types within the same word
  { text: "f_u*c k this", expected: true, category: Category.CHALLENGE, language: Language.ENGLISH, note: "mixed-separator fuck (underscore, asterisk, space)" },
  { text: "s.h i-t", expected: true, category: Category.CHALLENGE, language: Language.ENGLISH, note: "mixed-separator shit (dot, space, dash)" },
  // Clean: spaced-out innocent words that should NOT be flagged
  { text: "h e l l o world", expected: false, category: Category.CHALLENGE, language: Language.ENGLISH, note: "spaced-out hello, not profane" },
  { text: "s.h.e.l.l", expected: false, category: Category.CHALLENGE, language: Language.ENGLISH, note: "dot-separated shell, not profane" },
];

// src/languages/telugu-words.ts

/**
 * Telugu profanity words list
 * Contains common profanities in both Telugu script and Roman transliteration
 * ⚠️ Warning: This file contains explicit language in Telugu
 */
const _d: Record<string, [number, number]> = {
  // ========================================
  // === Telugu Script Profanities ===
  // ========================================
  "పూకు": [3, 4], // Pooku (female genitalia)
  "దెంగు": [3, 4], // Dengu (f**k)
  "లంజ": [5, 4], // Lanja (prostitute)
  "మొడ్డ": [4, 4], // Modda (penis)
  "గుద్ద": [2, 4], // Gudda (buttocks)
  "సుల్లి": [4, 4], // Sulli (penis)
  "పీక": [1, 3], // Peeka (neck, used insultingly)
  "లవడా": [4, 4], // Lavada (penis)
  "బూతులు": [1, 3], // Boothulu (profanity)
  "దొంగ": [1, 3], // Donga (thief)
  "పిచ్చి": [3, 3], // Picchi (mad)
  "వెధవ": [2, 4], // Vedhava (widower, used as insult)
  "నీ అమ్మ": [3, 4], // Nee amma (your mother) - often start of insults
  "నీ అయ్య": [1, 4], // Nee ayya (your father) - often start of insults
  "నాకొడకా": [3, 4], // Nakodaka (my son, used as insult)
  "పుకు": [3, 5], // Alternate spelling of Pooku
  "దిమ్మ తిరిగే": [3, 4], // Dimma thirige (head-spinning insult)
  "రొట్ట": [1, 4], // Rotta (worthless person)
  "ఎర్రిపూకు": [1, 4], // Erri pooku (stupid)
  "దున్నపోతు": [1, 3], // Dunnapothu (buffalo, insulting)

  // ========================================
  // === Roman Script Transliterations ===
  // ========================================
  "pooku": [3, 5], // female genitalia
  "puku": [3, 5], // female genitalia (variant)
  "dengu": [3, 5], // f**k
  "dengey": [3, 5], // f**k off
  "lanja": [5, 5], // prostitute
  "modda": [4, 4], // penis
  "gudda": [2, 4], // buttocks
  "sulli": [3, 4], // penis
  "peeka": [1, 3], // neck (insult)
  "lavada": [4, 5], // penis
  "lavda": [4, 5], // penis (variant)
  "boothulu": [1, 3], // profanity/swear words
  "donga": [1, 3], // thief
  "picchi": [1, 3], // mad/crazy
  "vedhava": [2, 4], // widower (insult)
  "nee amma": [3, 5], // your mother (insult)
  "nee ayya": [1, 5], // your father (insult)
  "nakodaka": [3, 5], // my son (insult)
  "dimma thirige": [3, 5], // head-spinning (insult)
  "rotta": [1, 4], // worthless person
  "erri pooku": [1, 5], // stupid (vulgar)
  "dunnapothu": [1, 3], // buffalo (insult)

  // Common variations and combinations
  "pooku naakay": [3, 4], // Vulgar phrase
  "lanja kodaka": [5, 4], // Son of a prostitute
  "lanja koduku": [5, 4], // Son of a prostitute
  "lanja koodhu": [3, 4], // Similar to above
  "lanjakodaka": [5, 4], // son of a prostitute (compound)
  "modda gudu": [3, 4], // Vulgar phrase
  "dengina": [3, 4], // f**ked
  "doola": [4, 4], // penis (variant)
  "erri puku": [1, 4], // Stupid (vulgar)
  "erri pooka": [1, 4], // Stupid (vulgar)
  "erri vesi pooku": [1, 4], // stupid prostitute's genitalia
  "gajji puku": [3, 4], // Scabies (insulting)
  "gorre puku": [3, 4], // Sheep (insulting)
  "gudda debba": [3, 4], // Buttocks strike
  "howle": [1, 4], // Useless
  "modda gudishe": [3, 4], // Vulgar phrase
  "naa modda": [4, 4], // My penis
  "nee amma puku": [3, 4], // Your mother's (vulgar)
  "pichi puku": [3, 4], // Crazy (vulgar)
  "puklo na modda": [3, 4], // Vulgar phrase
  "sulli naaku": [3, 4], // Suck (vulgar)
  "sachinava": [5, 5], // Die

  // Common misspellings and variations
  "dengay": [3, 5], // f**k off (variant)
  "lanjodka": [5, 5], // son of a prostitute (variant)
  "lanjkodka": [5, 5], // son of a prostitute (variant)
  "pikandi": [4, 5], // penis (slang)
  "moddagudise": [3, 5], // vulgar compound
  "sullu": [4, 5], // penis (variant)
  "puuku": [3, 5], // female genitalia (variant)
  "gunda": [3, 5], // testicle (variant)
  "boothulu matalu": [3, 5], // Profane language
  "gadida": [1, 3], // Donkey (insult)
  "gadidapuk": [3, 5], // Combination insult
  "sanka": [1, 2], // Conch (used in "sanka naaku")
  "pukunakay": [4, 5], // pussy licker (compound)

  // Additional Telugu profanity
  "dengichukko": [3, 5], // Fuck yourself
  "nee amma dengu": [3, 5], // Fuck your mother
  "nee amma puku dengu": [3, 4], // Vulgar compound
  "lanja koduku batch": [5, 5], // Son of a whore batch
  "lanja munda": [5, 4], // Whore (variant)
  "lanjakodaka batch": [5, 5], // son of a whore batch (compound)
  "pooku dengu": [4, 5], // Fuck the pussy
  "modda nakku": [4, 4], // Suck the dick
  "gudda dengu": [3, 5], // Fuck the ass
  "sulli guddu": [4, 4], // Dick hit
  "naa sulli nakku": [4, 4], // Suck my dick
  "puku naaki": [4, 4], // Pussy licker
  "puku pulla": [4, 4], // Pussy worm
  "bhosdike": [3, 4], // Borrowed from Hindi
  "amma ni dengu": [3, 5], // Fuck your mother
  "ayya ni dengu": [1, 4], // Fuck your father
  "bokka": [4, 4], // Vagina (slang)
  "kukkala dengu": [3, 5], // Dog fucker
  "kukka": [2, 4], // Dog (insult)
  "veshya": [5, 5], // Prostitute
  "dhoola": [4, 4], // Dick (variant)
  "padda puku": [3, 4], // Vulgar compound

  // Telugu script additions
  "దెంగిచుక్కో": [3, 4], // Dengichukko (f**k yourself)
  "నీ అమ్మ దెంగు": [3, 4], // Nee amma dengu (f**k your mother)
  "లంజ ముండ": [5, 4], // Lanja munda (whore)
  "మొడ్డ నక్కు": [4, 4], // Modda nakku (suck the dick)
  "గుద్ద దెంగు": [3, 4], // Gudda dengu (f**k the ass)
  "నా సుల్లి నక్కు": [4, 4], // Naa sulli nakku (suck my dick)
  "కుక్క": [3, 4], // Kukka (dog insult)
  "వేశ్య": [5, 4], // Veshya (prostitute)
  "బొక్క": [4, 4], // Bokka (vagina slang)

  // More Telugu profanity - Roman script
  "aa puku dengu": [4, 5], // Fuck that pussy
  "andagadu": [1, 2], // Handsome (sarcastic insult)
  "atta puku": [4, 4], // Aunt's pussy
  "ayya gudda": [1, 4], // Father's ass
  "baadkow": [3, 4], // Scoundrel
  "banda": [4, 4], // Dick (slang)
  "bey lavada": [4, 4], // Hey dick
  "bey lanja": [5, 4], // Hey whore
  "bonda": [4, 4], // Testicle
  "bondalu": [4, 4], // Testicles
  "bonga": [1, 4], // Worthless
  "bottalu": [1, 3], // Ass cheeks
  "budda gudda": [3, 4], // Old ass
  "chakkinda": [5, 5], // Died
  "dagulbaji": [1, 3], // Cheat
  "dengi padu": [3, 5], // Get fucked and fall
  "dengipoddi": [3, 5], // Will fuck
  "denginchukko": [3, 5], // Get yourself fucked
  "donga lanja": [5, 4], // Thief whore
  "donga na kodaka": [3, 4], // Son of a thief
  "dunna modda": [4, 4], // Buffalo dick
  "erri lanja": [1, 4], // Stupid whore
  "erri modda": [1, 4], // Stupid dick
  "gadida gudda": [3, 4], // Donkey ass
  "gadida modda": [4, 4], // Donkey dick
  "gudda lo modda": [4, 4], // Dick in ass
  "gudda nakku": [3, 4], // Lick the ass
  "gudda puku": [4, 4], // Ass pussy
  "jutti": [1, 3], // Shoe (insult)
  "kukkala kodaka": [3, 4], // Dog's son
  "kukka lanja": [5, 4], // Dog whore
  "kukka puku": [4, 4], // Dog pussy
  "kuttha": [3, 4], // Dog (variant)
  "lanja batch": [5, 4], // Whore batch
  "lanja batta": [5, 4], // Whore child (variant)
  "lanja bavi": [5, 4], // Whore well (insult)
  "lanja puku": [5, 4], // Whore's pussy
  "lavada gadu": [4, 4], // Dick man
  "madda": [4, 4], // Dick (variant)
  "modda guddu": [4, 4], // Dick egg (insult)
  "modda meeda kurchundi": [4, 4], // Sat on the dick
  "moodu puku": [4, 4], // Close pussy (shut up)
  "moodu modda": [4, 4], // Close dick (shut up)
  "na puku": [4, 4], // My pussy
  "nakodaka dengey": [3, 5], // My son fuck off
  "nee amma gudda": [3, 4], // Your mother's ass
  "nee amma lanja": [5, 4], // Your mother the whore
  "nee amma modda": [4, 4], // Your mother's dick
  "nee ayya puku": [1, 4], // Your father's pussy
  "nee gudda dengu": [3, 5], // Fuck your ass
  "nee modda nakku": [4, 4], // Suck your dick
  "nee puku dengu": [4, 5], // Fuck your pussy
  "nee puku lo na modda": [4, 4], // My dick in your pussy
  "nee sulli chinchukko": [4, 4], // Tear your dick
  "noru muyyi": [2, 4], // Shut your mouth
  "padipoya": [3, 4], // Fell (insult)
  "pichi lanja": [5, 4], // Crazy whore
  "pichi puku gadu": [4, 4], // Crazy pussy man
  "pilli puku": [4, 4], // Cat pussy
  "podugu": [3, 4], // Worthless
  "pookulo modda": [4, 4], // Dick in pussy
  "puku gadu": [4, 4], // Pussy man
  "puku nakka": [4, 4], // Pussy licker
  "puku pandu": [4, 4], // Pussy fruit (insult)
  "ra lanja": [5, 4], // Come whore
  "sulli chinchukko": [4, 4], // Tear the dick
  "sulli nakki": [4, 4], // Dick licker
  "sanka naaluka": [3, 4], // Conch tongue (insult)
  "sanka naaku": [3, 4], // Lick the conch (vulgar)
  "vesi gudda": [5, 4], // Prostitute ass

  // More Telugu script additions
  "బండ": [4, 4], // Banda (dick slang)
  "బొండాలు": [4, 4], // Bondalu (testicles)
  "దెంగి పడు": [3, 4], // Dengi padu (get f**ked and fall)
  "దెంగించుక్కో": [3, 4], // Denginchukko (get yourself f**ked)
  "దొంగ లంజ": [5, 4], // Donga lanja (thief whore)
  "ఎర్రి లంజ": [1, 4], // Erri lanja (stupid whore)
  "గాడిద గుద్ద": [3, 4], // Gadida gudda (donkey ass)
  "గాడిద మొడ్డ": [4, 4], // Gadida modda (donkey dick)
  "గుద్ద లో మొడ్డ": [4, 4], // Gudda lo modda (dick in ass)
  "గుద్ద నక్కు": [3, 4], // Gudda nakku (lick the ass)
  "కుక్కల కొడక": [3, 4], // Kukkala kodaka (dog's son)
  "కుక్క లంజ": [5, 4], // Kukka lanja (dog whore)
  "లంజ పుకు": [5, 4], // Lanja puku (whore's pussy)
  "లవడ గాడు": [4, 4], // Lavada gadu (dick man)
  "మూడు పుకు": [4, 4], // Moodu puku (shut your pussy)
  "నీ అమ్మ గుద్ద": [3, 4], // Nee amma gudda (your mother's ass)
  "నీ అమ్మ లంజ": [5, 4], // Nee amma lanja (your mother the whore)
  "నీ గుద్ద దెంగు": [3, 4], // Nee gudda dengu (f**k your ass)
  "నీ పుకు దెంగు": [4, 4], // Nee puku dengu (f**k your pussy)
  "పిచ్చి లంజ": [5, 4], // Pichi lanja (crazy whore)
  "పూకులో మొడ్డ": [4, 4], // Pookulo modda (dick in pussy)
  "పుకు గాడు": [4, 4], // Puku gadu (pussy man)
  "వేశ్య గుద్ద": [5, 4], // Vesi gudda (prostitute's ass)
  "దగుల్బాజీ": [1, 3], // Dagulbaji (cheat)
  "బొత్తలు": [3, 4], // Bottalu (ass cheeks)

  // ========================================
  // === Extended Telugu Profanity (Roman) ===
  // ========================================
  "aa gudda dengu": [3, 5], // Fuck that ass
  "aa modda nakku": [4, 4], // Suck that dick
  "aa puku nakku": [4, 4], // Lick that pussy
  "amma gudda": [3, 4], // Mother's ass
  "amma lanja": [5, 4], // Mother whore
  "amma modda": [4, 4], // Mother's dick (absurd insult)
  "amma puku lo": [4, 4], // In mother's pussy
  "atta gudda dengu": [3, 5], // Aunt's ass fuck
  "atta modda": [4, 4], // Aunt's dick (absurd insult)
  "banda nakku": [4, 4], // Lick the dick
  "bey gudda": [3, 4], // Hey ass
  "bey modda": [4, 4], // Hey dick
  "bey puku": [4, 4], // Hey pussy
  "bonda guddu": [4, 4], // Testicle egg
  "bonda nakku": [4, 4], // Lick the testicle
  "bottala dengu": [3, 5], // Ass cheeks fuck
  "budda dengu": [3, 5], // Old fuck
  "budda lanja": [5, 4], // Old whore
  "budda puku": [4, 4], // Old pussy
  "chakkindi nee amma": [5, 5], // Your mother died
  "dani puku dengu": [4, 5], // Fuck her pussy
  "dengara": [3, 5], // Fucker (variant)
  "dengey donga": [3, 5], // Fuck off thief
  "dengey kukka": [3, 5], // Fuck off dog
  "dengey lanja": [5, 5], // Fuck off whore
  "dengey rotta": [3, 5], // Fuck off worthless
  "dengi dengi": [3, 5], // Fuck fuck (repeated emphasis)
  "dengichukuntav": [3, 5], // You'll get yourself fucked
  "denginchukuntav": [3, 5], // You'll get yourself fucked (variant)
  "dengipothav": [3, 5], // You'll get fucked
  "denguddi": [3, 5], // Will fuck
  "donga gudda": [3, 4], // Thief ass
  "donga modda": [4, 4], // Thief dick
  "donga puku": [4, 4], // Thief pussy
  "doola nakku": [4, 4], // Lick the dick (variant)
  "dunna gudda": [3, 4], // Buffalo ass
  "dunna lanja": [5, 4], // Buffalo whore
  "dunna puku": [4, 4], // Buffalo pussy
  "erri bokka": [1, 4], // Stupid hole
  "erri donga": [1, 4], // Stupid thief
  "erri gudda": [1, 4], // Stupid ass
  "erri kukka": [1, 4], // Stupid dog
  "erri modda gadu": [1, 4], // Stupid dick man
  "erri puku gadu": [1, 4], // Stupid pussy man
  "erri rotta": [1, 4], // Stupid worthless
  "erri vesi": [1, 4], // Stupid prostitute
  "gadida dengu": [3, 5], // Donkey fuck
  "gadida kukka": [3, 4], // Donkey dog
  "gadida lanja": [5, 4], // Donkey whore
  "gadida puku": [4, 4], // Donkey pussy
  "gorre gudda": [3, 4], // Sheep ass
  "gorre modda": [4, 4], // Sheep dick
  "gudda lo sulli": [4, 4], // Dick in ass
  "gudda meeda": [3, 4], // On the ass
  "gudda mukka": [3, 4], // Ass punch
  "gudda nalipey": [3, 4], // Press the ass
  "gudda pindi": [3, 4], // Ass mass (insult)
  "gudi dengu": [3, 5], // Temple fuck (extreme insult)
  "howle gadu": [3, 4], // Useless man
  "jutti lo dengu": [3, 5], // Fuck in the shoe
  "jutti meeda kurchundi": [3, 4], // Sat on the shoe
  "kukkala gudda": [3, 4], // Dog's ass
  "kukkala lanja": [5, 4], // Dog whore (variant)
  "kukkala modda": [4, 4], // Dog's dick
  "kukkala puku": [4, 4], // Dog's pussy
  "kukka batch": [3, 4], // Dog batch
  "kukka dengey": [3, 5], // Dog fuck off
  "kukka gudda": [3, 4], // Dog ass
  "kukka modda": [4, 4], // Dog dick
  "kukka puku dengey": [4, 5], // Dog pussy fuck off
  "kukka rotta": [3, 4], // Dog worthless
  "lamba modda": [4, 4], // Long dick
  "lamba sulli": [4, 4], // Long dick (variant)
  "lanja batch puku": [5, 4], // Whore batch pussy
  "lanja dengey": [5, 5], // Whore fuck off
  "lanja gudda": [5, 4], // Whore ass
  "lanja kodaka dengey": [5, 5], // Whore's son fuck off
  "lanja modda": [5, 4], // Whore's dick
  "lanja rotta": [5, 4], // Whore worthless
  "lavada batch": [4, 4], // Dick batch
  "lavada gudda": [4, 4], // Dick ass
  "lavada puku": [4, 4], // Dick pussy (compound)
  "madda gadu": [4, 4], // Dick man (variant)
  "modda batch": [4, 4], // Dick batch
  "modda kottey": [4, 4], // Dick hit
  "modda kurchundi": [4, 4], // Dick sat
  "modda meeda": [4, 4], // On the dick
  "modda mukka": [4, 4], // Dick punch
  "modda puku lo": [4, 4], // Dick in pussy
  "modda sulli": [4, 4], // Dick (compound)
  "na gudda dengu": [3, 5], // Fuck my ass (ironic)
  "na lanja": [5, 4], // My whore (possessive insult)
  "na modda meeda": [4, 4], // On my dick
  "na puku meeda": [4, 4], // On my pussy
  "na sulli meeda": [4, 4], // On my dick (variant)
  "nakodaka lanja": [5, 4], // My son whore (compound)
  "nee amma bokka": [3, 4], // Your mother's hole
  "nee amma dengey": [3, 5], // Fuck your mother off
  "nee amma puku nakku": [4, 4], // Lick your mother's pussy
  "nee amma sulli": [4, 4], // Your mother's dick
  "nee ayya dengey": [1, 4], // Fuck your father off
  "nee ayya gudda": [1, 4], // Your father's ass
  "nee ayya modda": [1, 4], // Your father's dick
  "nee ayya puku dengey": [1, 4], // Fuck your father's pussy
  "nee bokka dengu": [3, 5], // Fuck your hole
  "nee bonda": [4, 4], // Your testicle
  "nee bonda nakku": [4, 4], // Lick your testicle
  "nee gudda lo na modda": [4, 4], // My dick in your ass
  "nee gudda meeda": [3, 4], // On your ass
  "nee modda chinchey": [4, 4], // Tear your dick
  "nee puku lo na sulli": [4, 4], // My dick in your pussy
  "nee puku meeda": [4, 4], // On your pussy
  "nee sulli nakku": [4, 4], // Suck your dick
  "pichi gudda": [3, 4], // Crazy ass
  "pichi kukka": [3, 4], // Crazy dog
  "pichi modda": [4, 4], // Crazy dick
  "pichi rotta": [3, 4], // Crazy worthless
  "pichi vesi": [5, 4], // Crazy prostitute
  "pilli gudda": [3, 4], // Cat ass
  "pilli modda": [4, 4], // Cat dick (absurd insult)
  "pooku lo modda pettey": [4, 4], // Put dick in pussy
  "puku gudda": [4, 4], // Pussy ass
  "puku meeda": [4, 4], // On the pussy
  "puku modda": [4, 4], // Pussy dick (compound)
  "puku nakka gadu": [4, 4], // Pussy licker man
  "ra dengey": [3, 5], // Come and fuck off
  "ra kukka": [3, 4], // Come dog
  "ra lanja kodaka": [5, 4], // Come whore's son
  "ra modda": [4, 4], // Come dick
  "ra puku": [4, 4], // Come pussy
  "rotta gadu": [3, 4], // Worthless man
  "rotta lanja": [5, 4], // Worthless whore
  "rotta modda": [4, 4], // Worthless dick
  "rotta puku": [4, 4], // Worthless pussy
  "sachinav dengey": [5, 5], // Die and fuck off
  "sulli batch": [4, 4], // Dick batch
  "sulli guddu kottey": [4, 4], // Dick egg hit
  "sulli meeda": [4, 4], // On the dick
  "sulli puku": [4, 4], // Dick pussy
  "vesi batch": [5, 4], // Prostitute batch
  "vesi dengey": [5, 5], // Prostitute fuck off
  "vesi kukka": [5, 4], // Prostitute dog
  "vesi lanja": [5, 4], // Prostitute whore (redundant compound)
  "vesi modda": [5, 4], // Prostitute dick
  "vesi puku": [5, 4], // Prostitute pussy
  "vesi rotta": [5, 4], // Prostitute worthless

  // ========================================
  // === Hyderabadi Slang Profanity ===
  // ========================================
  "bey lavade": [4, 4], // Hey dick (Hyderabadi)
  "bey lanje": [5, 4], // Hey whore (Hyderabadi)
  "bol miya puku": [4, 4], // Say it pussy (Hyderabadi)
  "chal be dengey": [3, 5], // Go fuck off (Hyderabadi)
  "dengey chal": [3, 5], // Fuck off go (Hyderabadi)
  "haram ka pilla": [3, 4], // Illegitimate pup (Hyderabadi)
  "haramzada dengey": [3, 4], // Bastard fuck off (Hyderabadi)
  "janwar dengey": [3, 5], // Animal fuck off (Hyderabadi)
  "kameena dengey": [3, 5], // Scoundrel fuck off (Hyderabadi)
  "kya be lavade": [4, 4], // What dick (Hyderabadi)
  "kya be lanja": [5, 4], // What whore (Hyderabadi)
  "kya be puku": [4, 4], // What pussy (Hyderabadi)
  "miya gudda": [3, 4], // Muslim's ass (Hyderabadi slur)
  "nakhodha dengey": [3, 5], // My son fuck off (Hyderabadi variant)
  "nee abba puku": [1, 4], // Your father's pussy (Hyderabadi)
  "nee ammi puku": [4, 4], // Your mother's pussy (Hyderabadi)
  "nee ammi lanja": [5, 4], // Your mother whore (Hyderabadi)
  "oy lanja": [5, 4], // Hey whore (Hyderabadi)
  "oy puku": [4, 4], // Hey pussy (Hyderabadi)
  "poda lavade": [4, 4], // Get lost dick (Hyderabadi)
  "tera baap dengey": [1, 4], // Fuck your father (Hyderabadi)
  "tu lavada": [4, 4], // You dick (Hyderabadi)
  "tu lanja": [5, 4], // You whore (Hyderabadi)

  // ========================================
  // === Rayalaseema Dialect Profanity ===
  // ========================================
  "bayka dengu": [3, 5], // Wife fuck (Rayalaseema)
  "bayko puku": [4, 4], // Wife's pussy (Rayalaseema)
  "dengara saale": [3, 4], // Fucker bastard (Rayalaseema)
  "edava dengu": [3, 5], // Left fuck (Rayalaseema direction insult)
  "gadida na kodaka": [3, 4], // Donkey my son (Rayalaseema)
  "gudda poddu": [3, 4], // Ass poke (Rayalaseema)
  "lanjakodaka ra": [5, 4], // Come whore's son (Rayalaseema)
  "modda poddhu": [4, 4], // Dick poke (Rayalaseema)
  "na kodaka dengey": [3, 5], // My son fuck off (Rayalaseema)
  "nee talli dengu": [3, 5], // Fuck your mother (Rayalaseema)
  "nee talli puku": [4, 4], // Your mother's pussy (Rayalaseema)
  "noru pettuko": [3, 4], // Shut your mouth (Rayalaseema)
  "padha dengu": [3, 5], // Fart fuck (Rayalaseema)
  "puku poddhu": [4, 4], // Pussy poke (Rayalaseema)
  "rotta na kodaka": [3, 4], // Worthless my son (Rayalaseema)
  "sulli poddhu": [4, 4], // Dick poke (Rayalaseema variant)
  "talli dengey": [5, 5], // Mother fuck off (Rayalaseema)
  "talli modda": [4, 4], // Mother dick (Rayalaseema)

  // ========================================
  // === More Telugu Script Additions ===
  // ========================================
  "అమ్మ గుద్ద": [3, 4], // Amma gudda (mother's ass)
  "అమ్మ లంజ": [5, 4], // Amma lanja (mother whore)
  "అత్త గుద్ద దెంగు": [3, 5], // Atta gudda dengu (aunt's ass fuck)
  "బొండ నక్కు": [4, 4], // Bonda nakku (lick the testicle)
  "దాని పుకు దెంగు": [4, 5], // Dani puku dengu (fuck her pussy)
  "దెంగరా": [3, 5], // Dengara (fucker)
  "దెంగిపోత్తావ్": [3, 5], // Dengipothav (you'll get fucked)
  "దొంగ గుద్ద": [3, 4], // Donga gudda (thief ass)
  "దొంగ మొడ్డ": [4, 4], // Donga modda (thief dick)
  "దున్న గుద్ద": [3, 4], // Dunna gudda (buffalo ass)
  "దున్న లంజ": [5, 4], // Dunna lanja (buffalo whore)
  "ఎర్రి బొక్క": [1, 4], // Erri bokka (stupid hole)
  "ఎర్రి గుద్ద": [1, 4], // Erri gudda (stupid ass)
  "ఎర్రి కుక్క": [1, 4], // Erri kukka (stupid dog)
  "ఎర్రి మొడ్డ గాడు": [1, 4], // Erri modda gadu (stupid dick man)
  "ఎర్రి వేశ్య": [1, 4], // Erri vesi (stupid prostitute)
  "గాడిద దెంగు": [3, 5], // Gadida dengu (donkey fuck)
  "గాడిద లంజ": [5, 4], // Gadida lanja (donkey whore)
  "గాడిద పుకు": [4, 4], // Gadida puku (donkey pussy)
  "గొర్రె పుకు": [4, 4], // Gorre puku (sheep pussy)
  "గుద్ద ముక్క": [3, 4], // Gudda mukka (ass punch)
  "హౌలే గాడు": [3, 4], // Howle gadu (useless man)
  "కుక్క బ్యాచ్": [3, 4], // Kukka batch (dog batch)
  "కుక్క గుద్ద": [3, 4], // Kukka gudda (dog ass)
  "కుక్క మొడ్డ": [4, 4], // Kukka modda (dog dick)
  "కుక్క రొట్ట": [3, 4], // Kukka rotta (dog worthless)
  "లంబ మొడ్డ": [4, 4], // Lamba modda (long dick)
  "లంజ దెంగే": [5, 5], // Lanja dengey (whore fuck off)
  "లంజ గుద్ద": [5, 4], // Lanja gudda (whore ass)
  "లంజ మొడ్డ": [5, 4], // Lanja modda (whore's dick)
  "లంజ రొట్ట": [5, 4], // Lanja rotta (whore worthless)
  "లవడ బ్యాచ్": [4, 4], // Lavada batch (dick batch)
  "మద్ద గాడు": [4, 4], // Madda gadu (dick man)
  "మొడ్డ బ్యాచ్": [4, 4], // Modda batch (dick batch)
  "మొడ్డ కొట్టే": [4, 4], // Modda kottey (dick hit)
  "నా గుద్ద దెంగు": [3, 5], // Na gudda dengu (fuck my ass)
  "నా మొడ్డ మీద": [4, 4], // Na modda meeda (on my dick)
  "నీ అమ్మ బొక్క": [3, 4], // Nee amma bokka (your mother's hole)
  "నీ అమ్మ సుల్లి": [4, 4], // Nee amma sulli (your mother's dick)
  "నీ అయ్య గుద్ద": [1, 4], // Nee ayya gudda (your father's ass)
  "నీ అయ్య మొడ్డ": [1, 4], // Nee ayya modda (your father's dick)
  "నీ బొండ": [4, 4], // Nee bonda (your testicle)
  "నీ బొక్క దెంగు": [3, 5], // Nee bokka dengu (fuck your hole)
  "నీ గుద్ద మీద": [3, 4], // Nee gudda meeda (on your ass)
  "నీ పుకు మీద": [4, 4], // Nee puku meeda (on your pussy)
  "పిచ్చి గుద్ద": [3, 4], // Pichi gudda (crazy ass)
  "పిచ్చి కుక్క": [3, 4], // Pichi kukka (crazy dog)
  "పిచ్చి వేశ్య": [5, 4], // Pichi vesi (crazy prostitute)
  "పుకు గుద్ద": [4, 4], // Puku gudda (pussy ass)
  "పుకు నక్క గాడు": [4, 4], // Puku nakka gadu (pussy licker man)
  "రొట్ట గాడు": [3, 4], // Rotta gadu (worthless man)
  "రొట్ట లంజ": [5, 4], // Rotta lanja (worthless whore)
  "రొట్ట మొడ్డ": [4, 4], // Rotta modda (worthless dick)
  "సుల్లి బ్యాచ్": [4, 4], // Sulli batch (dick batch)
  "వేశ్య బ్యాచ్": [5, 4], // Vesi batch (prostitute batch)
  "వేశ్య కుక్క": [5, 4], // Vesi kukka (prostitute dog)
  "వేశ్య మొడ్డ": [5, 4], // Vesi modda (prostitute dick)
  "వేశ్య పుకు": [5, 4], // Vesi puku (prostitute pussy)
  "వేశ్య రొట్ట": [5, 4], // Vesi rotta (prostitute worthless)
  "నీ తల్లి దెంగు": [3, 5], // Nee talli dengu (fuck your mother - Rayalaseema)
  "నీ తల్లి పుకు": [4, 4], // Nee talli puku (your mother's pussy - Rayalaseema)
  "తల్లి దెంగే": [5, 5], // Talli dengey (mother fuck off - Rayalaseema)
  "తల్లి మొడ్డ": [4, 4], // Talli modda (mother dick - Rayalaseema)
  "నీ అమ్మి పుకు": [4, 4], // Nee ammi puku (your mother's pussy - Hyderabadi)
  "నీ అమ్మి లంజ": [5, 4], // Nee ammi lanja (your mother whore - Hyderabadi)
  "హరాం కా పిల్ల": [3, 4], // Haram ka pilla (illegitimate pup - Hyderabadi)

  // ========================================
  // === Telugu Internet Slang ===
  // ========================================
  "lkdk": [2, 3], // Lanja kodaka abbreviation
  "lk dengey": [2, 3], // Lanja kodaka dengey abbreviation
  "pkng": [2, 3], // Puku nakking abbreviation
  "mdda": [2, 3], // Modda abbreviation
  "gdda": [2, 3], // Gudda abbreviation
  "sllinku": [2, 3], // Sulli nakku abbreviation
  "dng": [2, 3], // Dengu abbreviation
  "erripku": [2, 3], // Erri puku abbreviation
  "lnja": [2, 3], // Lanja abbreviation
  "pku": [2, 3], // Puku abbreviation
  "dngchko": [2, 3], // Dengichukko abbreviation
  "nee amma dng": [2, 3], // Your mother dengu (texting)

  // ========================================
  // === More Romanized Telugu Profanity ===
  // ========================================
  "aa lanja dengu": [5, 5], // Fuck that whore
  "aa vesi puku": [5, 5], // That prostitute's pussy
  "akka puku dengu": [4, 5], // Sister's pussy fuck
  "akka gudda dengu": [3, 5], // Sister's ass fuck
  "akka modda": [4, 5], // Sister's dick (absurd insult)
  "akka lanja": [5, 5], // Sister whore
  "amma puku nakku": [4, 5], // Lick mother's pussy
  "atta lanja": [5, 5], // Aunt whore
  "atta dengu": [3, 5], // Aunt fuck
  "baadkow dengey": [3, 5], // Scoundrel fuck off
  "banda meeda kurchundi": [4, 5], // Sat on the dick (slang)
  "banda guddu": [4, 5], // Dick egg (insult variant)
  "banda nakki": [4, 5], // Dick licker
  "bey dengey ra": [3, 5], // Hey fuck off (variant)
  "bey puku gadi": [4, 5], // Hey pussy woman
  "bonda chinchey": [4, 5], // Tear the testicle
  "bonda guddu kottey": [4, 5], // Hit the testicle egg
  "bonda puku": [4, 5], // Testicle pussy (compound)
  "bottalu dengu": [3, 5], // Ass cheeks fuck (variant)
  "budda lanja dengey": [5, 5], // Old whore fuck off
  "chakkindi nee ayya": [1, 5], // Your father died
  "chinna modda gadu": [4, 5], // Small dick man
  "chinna puku gadu": [4, 5], // Small pussy man
  "dagulbaji dengey": [3, 5], // Cheat fuck off
  "dani gudda dengu": [3, 5], // Fuck her ass
  "dani modda nakku": [4, 5], // Lick her dick (absurd)
  "dani sulli": [4, 5], // Her dick (absurd insult)
  "dengara batch": [3, 5], // Fucker batch
  "dengara lanja": [5, 5], // Fucker whore
  "dengara rotta": [3, 5], // Fucker worthless
  "dengi dengi padey": [3, 5], // Fuck fuck and fall
  "dengi poddi batch": [3, 5], // Will fuck off batch
  "dengu dengu ra": [3, 5], // Fuck fuck come
  "donga lanja kodaka": [5, 5], // Thief whore's son
  "donga vesi": [5, 5], // Thief prostitute
  "doola batch": [4, 5], // Dick batch
  "doola guddu": [4, 5], // Dick egg
  "doola meeda": [4, 5], // On the dick (variant)
  "dunna modda gadu": [4, 5], // Buffalo dick man
  "dunna puku gadu": [4, 5], // Buffalo pussy man
  "erri lanja kodaka": [1, 5], // Stupid whore's son
  "erri puku batch": [1, 5], // Stupid pussy batch
  "erri sulli gadu": [1, 5], // Stupid dick man
  "gadida batch": [3, 5], // Donkey batch
  "gadida dengey batch": [3, 5], // Donkey fuck off batch
  "gadida lanja kodaka": [5, 5], // Donkey whore's son
  "gadida sulli": [4, 5], // Donkey dick
  "gorre dengu": [3, 5], // Sheep fuck
  "gorre lanja": [5, 5], // Sheep whore
  "gudda chinchey": [3, 5], // Tear the ass
  "gudda lo sulli pettey": [4, 5], // Put dick in ass
  "gudda nalipey ra": [3, 5], // Press the ass
  "gudda pindi batch": [3, 5], // Ass mass batch
  "gudi lo dengu": [3, 5], // Fuck in the temple
  "howle batch": [3, 5], // Useless batch
  "howle lanja": [5, 5], // Useless whore
  "jutti batch": [3, 5], // Shoe batch
  "kukkala batch dengey": [3, 5], // Dog batch fuck off
  "kukkala lanja dengey": [5, 5], // Dog whore fuck off
  "kukkala sulli": [4, 5], // Dog's dick
  "kukka puku batch": [4, 5], // Dog pussy batch
  "lamba sulli gadu": [4, 5], // Long dick man
  "lanja batta dengey": [5, 5], // Whore child fuck off
  "lanja batch dengey": [5, 5], // Whore batch fuck off
  "lanja puku dengey": [5, 5], // Whore's pussy fuck off
  "lavada batch dengey": [4, 5], // Dick batch fuck off
  "lavada dengey ra": [4, 5], // Dick fuck off
  "lavada gadu dengey": [4, 5], // Dick man fuck off
  "madda batch": [4, 5], // Dick batch (variant)
  "modda batch dengey": [4, 5], // Dick batch fuck off
  "modda gadu dengey": [4, 5], // Dick man fuck off
  "modda guddu batch": [4, 5], // Dick egg batch
  "modda meeda kurchundi batch": [4, 5], // Sat on dick batch
  "moodu gudda": [3, 5], // Close ass (shut up variant)
  "moodu modda ra": [4, 5], // Close dick (shut up)
  "na kodaka batch": [3, 5], // My son batch
  "na lanja batch": [5, 5], // My whore batch
  "nee amma lanja dengey": [5, 5], // Your mother whore fuck off
  "nee amma puku batch": [4, 5], // Your mother's pussy batch
  "nee amma puku lo na modda pettey": [4, 5], // Put my dick in your mother's pussy
  "nee amma sulli nakku ra": [4, 5], // Lick your mother's dick
  "nee ayya lanja": [1, 5], // Your father whore
  "nee ayya puku batch": [1, 5], // Your father's pussy batch
  "nee bokka batch": [3, 5], // Your hole batch
  "nee gudda lo na sulli pettey": [4, 5], // Put my dick in your ass
  "nee modda batch": [4, 5], // Your dick batch
  "nee puku batch": [4, 5], // Your pussy batch
  "nee sulli batch": [4, 5], // Your dick batch
  "pichi dengey": [3, 5], // Crazy fuck off
  "pichi lanja dengey": [5, 5], // Crazy whore fuck off
  "pichi modda batch": [4, 5], // Crazy dick batch
  "puku dengey ra": [4, 5], // Pussy fuck off
  "puku nakka batch": [4, 5], // Pussy licker batch
  "puku sulli batch": [4, 5], // Pussy dick batch
  "ra lanja batch": [5, 5], // Come whore batch
  "rotta batch dengey": [3, 5], // Worthless batch fuck off
  "sulli chinchukko batch": [4, 5], // Tear dick batch
  "vesi batch dengey": [5, 5], // Prostitute batch fuck off
  "vesi dengey ra": [5, 5], // Prostitute fuck off
  "vesi lanja batch": [5, 5], // Prostitute whore batch

  // ========================================
  // === Tenglish (Telugu-English Mix) Profanity ===
  // ========================================
  "fucking dengu": [3, 5], // Fucking fuck
  "bloody lanja": [5, 4], // Bloody whore
  "damn erri puku": [1, 4], // Damn stupid pussy
  "fucking modda": [4, 5], // Fucking dick
  "shit puku": [4, 5], // Shit pussy
  "asshole gudda": [3, 4], // Asshole ass (Tenglish)
  "bastard lanja kodaka": [3, 4], // Bastard whore's son
  "bitch lanja": [5, 4], // Bitch whore (Tenglish)
  "son of a lanja": [5, 5], // Son of a whore (Tenglish)
  "stupid erri puku": [1, 4], // Stupid stupid pussy (Tenglish)
  "shut up puku": [4, 4], // Shut up pussy (Tenglish)
  "fuck off dengey": [3, 5], // Fuck off fuck off (Tenglish)
  "die dengey": [5, 5], // Die fuck off (Tenglish)
  "ugly lanja": [1, 4], // Ugly whore (Tenglish)
  "cheap vesi": [5, 4], // Cheap prostitute (Tenglish)
  "dirty gudda": [3, 4], // Dirty ass (Tenglish)
  "loser rotta": [1, 4], // Loser worthless (Tenglish)
  "idiot erri puku gadu": [1, 4], // Idiot stupid pussy man (Tenglish)
  "useless rotta gadu": [3, 4], // Useless worthless man (Tenglish)
  "disgusting puku": [4, 4], // Disgusting pussy (Tenglish)
  "pathetic modda": [4, 4], // Pathetic dick (Tenglish)
  "bloody vesi": [5, 4], // Bloody prostitute (Tenglish)
  "fucking kukka": [3, 5], // Fucking dog (Tenglish)
  "go to hell dengey": [3, 5], // Go to hell fuck off (Tenglish)
  "mother fucker nee amma dengu": [5, 5], // Motherfucker (Tenglish)
  "bloody vedhava": [3, 4], // Bloody widower (Tenglish insult)
  "piece of shit rotta": [3, 5], // Piece of shit worthless (Tenglish)
  "dumbass erri puku": [1, 4], // Dumbass stupid pussy (Tenglish)
  "trash lanja": [5, 4], // Trash whore (Tenglish)

  // ========================================
  // === More Compound Insults ===
  // ========================================
  "lanja kodaka erri puku dengey": [1, 4], // Whore's son stupid pussy fuck off
  "kukka lanja kodaka dengey": [5, 5], // Dog whore's son fuck off
  "gadida lanja kodaka dengey": [5, 5], // Donkey whore's son fuck off
  "erri puku lanja kodaka batch": [1, 4], // Stupid pussy whore's son batch
  "nee amma puku dengu ra lanja kodaka": [5, 5], // Fuck your mother's pussy whore's son
  "nee gudda lo modda pettey lanja kodaka": [5, 4], // Put dick in your ass whore's son
  "kukka gudda batch dengey ra": [3, 5], // Dog ass batch fuck off
  "gadida modda gadu dengey ra": [4, 5], // Donkey dick man fuck off
  "pichi lanja kodaka dengey ra": [5, 5], // Crazy whore's son fuck off
  "rotta lanja kodaka batch": [5, 4], // Worthless whore's son batch
  "vesi kukka lanja batch dengey": [5, 5], // Prostitute dog whore batch fuck off
  "erri kukka gudda batch": [1, 4], // Stupid dog ass batch
  "nee amma nee ayya dengu batch": [1, 4], // Fuck your mother and father batch
  "sulli puku modda gudda batch": [4, 4], // Dick pussy all compound batch
  "dunna lanja kukka dengey": [5, 5], // Buffalo whore dog fuck off
  "nee talli puku dengu ra": [4, 5], // Fuck your mother's pussy (Rayalaseema intensified)

  // ========================================
  // === Coastal Andhra Dialect ===
  // ========================================
  "dengaraa batch": [3, 5], // Fucker batch (Coastal)
  "dengipoddi batch": [3, 5], // Will fuck batch (Coastal)
  "nee amma modda batch": [4, 4], // Your mother's dick batch (Coastal)
  "pooku gudishe batch": [4, 4], // Pussy mixing batch (Coastal)
  "sachinav batch": [5, 5], // Die batch (Coastal)
  "lanja dengey batch ra": [5, 5], // Whore fuck off batch (Coastal)
  "puku gadu batch ra": [4, 4], // Pussy man batch (Coastal)
  "nee amma puku gudishe": [4, 4], // Mix your mother's pussy (Coastal)
  "banda batch dengey ra": [4, 5], // Dick batch fuck off (Coastal)

  // ========================================
  // === Telangana Dialect ===
  // ========================================
  "nee amma dengu be": [3, 5], // Fuck your mother (Telangana)
  "lanjodka dengey be": [5, 5], // Whore's son fuck off (Telangana)
  "gudda lo modda be": [4, 4], // Dick in ass (Telangana)
  "puku nakku be": [4, 4], // Lick the pussy (Telangana)
  "erri puku gadu be": [1, 4], // Stupid pussy man (Telangana)
  "modda meeda be": [4, 4], // On the dick (Telangana)
  "dengey be rotta": [3, 5], // Fuck off worthless (Telangana)
  "kukka be dengey": [3, 5], // Dog fuck off (Telangana)
  "lanja be dengey": [5, 5], // Whore fuck off (Telangana)
  "dengara be batch": [3, 5], // Fucker batch (Telangana)

  // ========================================
  // === More Telugu Script Additions ===
  // ========================================
  "అక్క పుకు దెంగు": [4, 5], // Akka puku dengu (sister's pussy fuck)
  "అక్క లంజ": [5, 4], // Akka lanja (sister whore)
  "అత్త లంజ": [5, 4], // Atta lanja (aunt whore)
  "బండ నక్కి": [4, 4], // Banda nakki (dick licker)
  "బొండ చించే": [4, 4], // Bonda chinchey (tear testicle)
  "చిన్న మొడ్డ గాడు": [4, 4], // Chinna modda gadu (small dick man)
  "దాని గుద్ద దెంగు": [3, 5], // Dani gudda dengu (fuck her ass)
  "దెంగరా బ్యాచ్": [3, 5], // Dengara batch (fucker batch)
  "దెంగరా లంజ": [5, 5], // Dengara lanja (fucker whore)
  "దొంగ లంజ కొడక": [5, 4], // Donga lanja kodaka (thief whore's son)
  "ఎర్రి లంజ కొడక": [1, 4], // Erri lanja kodaka (stupid whore's son)
  "గాడిద బ్యాచ్": [3, 4], // Gadida batch (donkey batch)
  "గాడిద సుల్లి": [4, 4], // Gadida sulli (donkey dick)
  "గొర్రె దెంగు": [3, 5], // Gorre dengu (sheep fuck)
  "గుద్ద చించే": [3, 4], // Gudda chinchey (tear the ass)
  "హౌలే బ్యాచ్": [3, 4], // Howle batch (useless batch)
  "కుక్కల సుల్లి": [4, 4], // Kukkala sulli (dog's dick)
  "లంజ బ్యాచ్ దెంగే": [5, 5], // Lanja batch dengey (whore batch fuck off)
  "మూడు గుద్ద": [3, 4], // Moodu gudda (close ass)
  "నీ అమ్మ పుకు బ్యాచ్": [4, 4], // Nee amma puku batch (mother's pussy batch)
  "నీ బొక్క బ్యాచ్": [3, 4], // Nee bokka batch (your hole batch)
  "పిచ్చి దెంగే": [3, 5], // Pichi dengey (crazy fuck off)
  "పుకు దెంగే రా": [4, 5], // Puku dengey ra (pussy fuck off)
  "రొట్ట బ్యాచ్ దెంగే": [3, 5], // Rotta batch dengey (worthless batch fuck off)
  "సుల్లి చించుక్కో బ్యాచ్": [4, 4], // Sulli chinchukko batch (tear dick batch)
  "వేశ్య బ్యాచ్ దెంగే": [5, 5], // Vesi batch dengey (prostitute batch fuck off)
  "నీ అమ్మ నీ అయ్య దెంగు బ్యాచ్": [1, 4], // Nee amma nee ayya dengu batch (fuck mother and father)
  "దున్న లంజ కుక్క దెంగే": [5, 5], // Dunna lanja kukka dengey (buffalo whore dog fuck off)
  "నీ తల్లి పుకు దెంగు రా": [4, 5], // Nee talli puku dengu ra (fuck your mother's pussy)
  "దెంగరా బే బ్యాచ్": [3, 5], // Dengara be batch (fucker batch Telangana)
  "లంజోడ్క దెంగే బే": [5, 5], // Lanjodka dengey be (whore's son fuck off Telangana)
  "గుద్ద లో మొడ్డ బే": [4, 4], // Gudda lo modda be (dick in ass Telangana)
  "పుకు నక్కు బే": [4, 4], // Puku nakku be (lick pussy Telangana)

  // ========================================
  // === More Internet Slang ===
  // ========================================
  "lk batch dng": [2, 3], // Lanja kodaka batch dengey abbreviation
  "kk lk dng": [2, 3], // Kukka lanja kodaka dengey abbreviation
  "nee amma pk dng": [2, 3], // Nee amma puku dengu abbreviation
  "gdda dng ra": [2, 3], // Gudda dengu ra abbreviation
  "mdda btch": [2, 3], // Modda batch abbreviation
  "erripk btch": [2, 3], // Erri puku batch abbreviation
  "pk nk btch": [2, 3], // Puku nakka batch abbreviation
  "vsi dng ra": [2, 3], // Vesi dengey ra abbreviation
  "rttagdu": [2, 3], // Rotta gadu abbreviation
  "gdda nkku": [2, 3], // Gudda nakku abbreviation
  "pku gdu": [2, 3], // Puku gadu abbreviation
  "slli nkku": [2, 3], // Sulli nakku abbreviation
  "dng btch": [2, 3], // Dengu batch abbreviation
  "lnja btch dng": [2, 3], // Lanja batch dengey abbreviation

  // ========================================
  // === Extended Telugu Script Profanity ===
  // ========================================
  "పూకు నాకు రా": [4, 4], // Pooku naaku ra (lick pussy come)
  "మొడ్డ నాకు రా": [4, 4], // Modda naaku ra (lick dick come)
  "గుద్ద నాకు రా": [3, 4], // Gudda naaku ra (lick ass come)
  "సుల్లి నాకు రా": [4, 4], // Sulli naaku ra (lick dick come)
  "లంజ కొడక రా": [5, 4], // Lanja kodaka ra (whore's son come)
  "దెంగే రా కుక్క": [3, 5], // Dengey ra kukka (fuck off dog)
  "దెంగే రా లంజ కొడక": [5, 5], // Dengey ra lanja kodaka (fuck off whore's son)
  "నీ అమ్మ పూకు లో నా మొడ్డ": [4, 4], // Nee amma pooku lo na modda (my dick in mother's pussy)
  "నీ గుద్ద లో నా సుల్లి": [4, 4], // Nee gudda lo na sulli (my dick in your ass)
  "పూకు ఫాడతా": [4, 4], // Pooku faadata (I'll rip pussy)
  "గుద్ద ఫాడతా": [3, 4], // Gudda faadata (I'll rip ass)
  "మొడ్డ కొడతా": [4, 4], // Modda kodatha (I'll hit with dick)
  "సుల్లి కొడతా": [4, 4], // Sulli kodatha (I'll hit with dick variant)
  "తత్తలు తీస్తా": [4, 4], // Tattalu theestha (I'll pull balls)
  "బొండాలు తీస్తా": [4, 4], // Bondalu theestha (I'll pull testicles)
  "లంజ ముండ రా": [5, 4], // Lanja munda ra (whore come)
  "వేశ్య ముండ": [5, 4], // Veshya munda (prostitute whore)
  "దొంగ లంజ ముండ": [5, 4], // Donga lanja munda (thief whore)
  "ఎర్రి లంజ ముండ": [1, 4], // Erri lanja munda (stupid whore)
  "పిచ్చి లంజ ముండ": [5, 4], // Pichi lanja munda (crazy whore)
  "కుక్క లంజ ముండ": [5, 4], // Kukka lanja munda (dog whore)
  "గాడిద లంజ ముండ": [5, 4], // Gadida lanja munda (donkey whore)
  "దున్న లంజ ముండ": [5, 4], // Dunna lanja munda (buffalo whore)
  "గొర్రె లంజ ముండ": [5, 4], // Gorre lanja munda (sheep whore)
  "పిల్లి లంజ ముండ": [5, 4], // Pilli lanja munda (cat whore)
  "ఎద్దు పూకు": [4, 4], // Eddu pooku (ox pussy)
  "ఎద్దు గుద్ద": [3, 4], // Eddu gudda (ox ass)
  "ఎద్దు మొడ్డ": [4, 4], // Eddu modda (ox dick)
  "కోతి పూకు": [4, 4], // Kothi pooku (monkey pussy)
  "కోతి గుద్ద": [3, 4], // Kothi gudda (monkey ass)
  "కోతి మొడ్డ": [4, 4], // Kothi modda (monkey dick)
  "పాము పూకు": [4, 4], // Paamu pooku (snake pussy)
  "ఎలుక పూకు": [4, 4], // Eluka pooku (rat pussy)
  "ఎలుక గుద్ద": [3, 4], // Eluka gudda (rat ass)
  "కాకి పూకు": [4, 4], // Kaaki pooku (crow pussy)
  "పంది పూకు": [4, 4], // Pandi pooku (pig pussy)
  "పంది గుద్ద": [3, 4], // Pandi gudda (pig ass)
  "పంది మొడ్డ": [4, 4], // Pandi modda (pig dick)
  "గుడ్డ ముక్క": [3, 4], // Gudda mukka (ass piece)
  "పూకు ముక్క": [4, 4], // Pooku mukka (pussy piece)
  "మొడ్డ ముక్క": [4, 4], // Modda mukka (dick piece)
  "గాడిద పూకు గాడు": [4, 4], // Gadida pooku gadu (donkey pussy man)
  "దున్నపోతు పూకు": [4, 4], // Dunnapothu pooku (buffalo pussy)
  "నక్క పూకు": [4, 4], // Nakka pooku (fox pussy)
  "తోడేలు పూకు": [4, 4], // Thodelu pooku (wolf pussy)
  "నీ బొండాలు తీసేస్తా": [4, 4], // Nee bondalu theesestha (I'll rip your testicles)
  "నీ మొడ్డ కోస్తా": [4, 4], // Nee modda kostha (I'll cut your dick)
  "నీ పూకు కుడతా": [4, 4], // Nee pooku kudatha (I'll stitch your pussy)
  "నీ గుద్ద ఫాడతా": [3, 4], // Nee gudda faadata (I'll rip your ass)

  // ========================================
  // === Extended Romanized Telugu ===
  // ========================================
  "pooku naaku ra": [4, 5], // Lick pussy come
  "modda naaku ra": [4, 5], // Lick dick come
  "gudda naaku ra": [3, 5], // Lick ass come
  "sulli naaku ra": [4, 5], // Lick dick come variant
  "lanja kodaka ra dengey": [5, 5], // Whore's son come fuck off
  "dengey ra kukka lanja": [5, 5], // Fuck off dog whore
  "nee amma pooku lo na modda pettey": [4, 5], // My dick in your mother's pussy
  "pooku faadata": [4, 5], // I'll rip pussy
  "gudda faadata": [3, 5], // I'll rip ass
  "modda kodatha": [4, 5], // I'll hit with dick
  "sulli kodatha": [4, 5], // I'll hit with dick variant
  "tattalu theestha": [4, 5], // I'll pull balls
  "bondalu theestha": [4, 5], // I'll pull testicles
  "lanja munda ra": [5, 5], // Whore come
  "veshya munda": [5, 5], // Prostitute whore
  "donga lanja munda": [5, 5], // Thief whore
  "erri lanja munda": [1, 5], // Stupid whore
  "pichi lanja munda": [5, 5], // Crazy whore
  "kukka lanja munda": [5, 5], // Dog whore
  "gadida lanja munda": [5, 5], // Donkey whore
  "dunna lanja munda": [5, 5], // Buffalo whore
  "gorre lanja munda": [5, 5], // Sheep whore
  "pilli lanja munda": [5, 5], // Cat whore
  "eddu pooku": [4, 5], // Ox pussy
  "eddu gudda": [3, 5], // Ox ass
  "eddu modda": [4, 5], // Ox dick
  "kothi pooku": [4, 5], // Monkey pussy
  "kothi gudda": [3, 5], // Monkey ass
  "kothi modda": [4, 5], // Monkey dick
  "paamu pooku": [4, 5], // Snake pussy
  "eluka pooku": [4, 5], // Rat pussy
  "eluka gudda": [3, 5], // Rat ass
  "kaaki pooku": [4, 5], // Crow pussy
  "pandi pooku": [4, 5], // Pig pussy
  "pandi gudda": [3, 5], // Pig ass
  "pandi modda": [4, 5], // Pig dick
  "nakka pooku": [4, 5], // Fox pussy
  "thodelu pooku": [4, 5], // Wolf pussy
  "nee bondalu theesestha": [4, 5], // I'll rip your testicles
  "nee modda kostha": [4, 5], // I'll cut your dick
  "nee pooku kudatha": [4, 5], // I'll stitch your pussy
  "nee gudda faadata": [3, 5], // I'll rip your ass

  // ========================================
  // === Extended Hyderabadi Slang ===
  // ========================================
  "bey lavade chal": [4, 4], // Hey dick go (Hyderabadi)
  "bey lanje chal": [5, 4], // Hey whore go (Hyderabadi)
  "bol miya puku chal": [4, 4], // Say it pussy go (Hyderabadi)
  "chal be dengey lavade": [4, 5], // Go fuck off dick (Hyderabadi)
  "dengey chal lavade": [4, 5], // Fuck off go dick (Hyderabadi)
  "haram ka pilla dengey": [3, 5], // Illegitimate pup fuck off (Hyderabadi)
  "haramzada dengey chal": [3, 4], // Bastard fuck off go (Hyderabadi)
  "janwar dengey chal": [3, 5], // Animal fuck off go (Hyderabadi)
  "kameena dengey chal": [3, 5], // Scoundrel fuck off go (Hyderabadi)
  "kya be lavade chal": [4, 4], // What dick go (Hyderabadi)
  "kya be lanja chal": [5, 4], // What whore go (Hyderabadi)
  "kya be puku chal": [4, 4], // What pussy go (Hyderabadi)
  "miya gudda chal": [3, 4], // Muslim's ass go (Hyderabadi)
  "nakhodha dengey chal": [3, 5], // My son fuck off go (Hyderabadi)
  "nee abba puku dengey": [1, 4], // Your father's pussy fuck off (Hyderabadi)
  "nee ammi puku dengey": [4, 5], // Your mother's pussy fuck off (Hyderabadi)
  "nee ammi lanja dengey": [5, 5], // Your mother whore fuck off (Hyderabadi)
  "oy lanja dengey": [5, 5], // Hey whore fuck off (Hyderabadi)
  "oy puku dengey": [4, 5], // Hey pussy fuck off (Hyderabadi)
  "poda lavade chal": [4, 4], // Get lost dick go (Hyderabadi)
  "tera baap dengey chal": [1, 4], // Fuck your father go (Hyderabadi)
  "tu lavada dengey": [4, 5], // You dick fuck off (Hyderabadi)
  "tu lanja dengey": [5, 5], // You whore fuck off (Hyderabadi)
  "bey modda chal": [4, 4], // Hey dick go (Hyderabadi variant)
  "bey gudda chal": [3, 4], // Hey ass go (Hyderabadi)
  "oy modda chal": [4, 4], // Hey dick go (Hyderabadi variant)
  "kya be modda chal": [4, 4], // What dick go (Hyderabadi variant)
  "nakhodha gudda chal": [3, 4], // My son ass go (Hyderabadi)
  "haram ka pilla modda": [4, 4], // Illegitimate pup dick (Hyderabadi)
  "janwar modda": [4, 4], // Animal dick (Hyderabadi)
  "kameena modda": [4, 4], // Scoundrel dick (Hyderabadi)
  "haramzada modda": [3, 4], // Bastard dick (Hyderabadi)
  "teri maa dengey be": [3, 5], // Fuck your mother (Hyderabadi Hindi mix)
  "teri behen dengey be": [3, 5], // Fuck your sister (Hyderabadi Hindi mix)
  "tera baap lavada be": [1, 4], // Your father is a dick (Hyderabadi)
  "miya lanja be": [5, 4], // Muslim whore (Hyderabadi, offensive)
  "miya modda be": [4, 4], // Muslim dick (Hyderabadi)
  "biryani puku": [4, 4], // Biryani pussy (Hyderabadi cultural insult)
  "chai puku gadu": [4, 4], // Chai pussy man (Hyderabadi)
  "nakhodha lanja": [5, 4], // My son whore (Hyderabadi)

  // ========================================
  // === Extended Rayalaseema Dialect ===
  // ========================================
  "bayka dengu ra": [3, 5], // Wife fuck come (Rayalaseema)
  "bayko puku dengey": [4, 5], // Wife's pussy fuck off (Rayalaseema)
  "dengara saale dengey": [3, 4], // Fucker bastard fuck off (Rayalaseema)
  "gadida na kodaka dengey": [3, 5], // Donkey my son fuck off (Rayalaseema)
  "gudda poddu ra": [3, 4], // Ass poke come (Rayalaseema)
  "lanjakodaka ra dengey": [5, 5], // Come whore's son fuck off (Rayalaseema)
  "modda poddhu ra": [4, 4], // Dick poke come (Rayalaseema)
  "na kodaka dengey ra": [3, 5], // My son fuck off come (Rayalaseema)
  "nee talli dengu ra": [3, 5], // Fuck your mother come (Rayalaseema)
  "nee talli puku dengey": [4, 5], // Your mother's pussy fuck off (Rayalaseema)
  "noru pettuko dengey": [3, 5], // Shut mouth fuck off (Rayalaseema)
  "padha dengu ra": [3, 5], // Fart fuck come (Rayalaseema)
  "puku poddhu ra": [4, 4], // Pussy poke come (Rayalaseema)
  "rotta na kodaka dengey": [3, 5], // Worthless my son fuck off (Rayalaseema)
  "sulli poddhu ra": [4, 4], // Dick poke come (Rayalaseema)
  "talli dengey ra": [5, 5], // Mother fuck off come (Rayalaseema)
  "talli modda ra": [4, 4], // Mother dick come (Rayalaseema)
  "talli puku naaki dengey": [4, 5], // Lick mother's pussy fuck off (Rayalaseema)
  "nee talli gudda dengu": [3, 5], // Fuck your mother's ass (Rayalaseema)
  "nee talli lanja dengey": [5, 5], // Your mother whore fuck off (Rayalaseema)
  "nee talli modda nakku": [4, 4], // Lick your mother's dick (Rayalaseema)
  "akkada puku dengu": [4, 5], // Fuck that pussy (Rayalaseema)
  "ikkada gudda dengu": [3, 5], // Fuck this ass (Rayalaseema)
  "dengara rotta saale": [3, 4], // Fucker worthless bastard (Rayalaseema)

  // ========================================
  // === Extended Coastal Andhra Dialect ===
  // ========================================
  "dengaraa batch dengey": [3, 5], // Fucker batch fuck off (Coastal)
  "dengipoddi batch dengey": [3, 5], // Will fuck batch fuck off (Coastal)
  "nee amma modda batch dengey": [4, 5], // Your mother's dick batch fuck off (Coastal)
  "pooku gudishe batch dengey": [4, 5], // Pussy mixing batch fuck off (Coastal)
  "sachinav batch dengey ra": [5, 5], // Die batch fuck off come (Coastal)
  "lanja dengey batch ra dengey": [5, 5], // Whore fuck off batch come (Coastal)
  "puku gadu batch ra dengey": [4, 5], // Pussy man batch come fuck off (Coastal)
  "nee amma puku gudishe dengey": [4, 5], // Mix your mother's pussy fuck off (Coastal)
  "banda batch dengey ra dengey": [4, 5], // Dick batch fuck off (Coastal)
  "sulli puku batch dengey": [4, 5], // Dick pussy batch fuck off (Coastal)
  "gudda puku batch dengey": [4, 5], // Ass pussy batch fuck off (Coastal)
  "lamba modda gadu batch": [4, 4], // Long dick man batch (Coastal)
  "bonda batch dengey ra": [4, 5], // Testicle batch fuck off come (Coastal)
  "lavada batch dengey ra": [4, 5], // Dick batch fuck off come (Coastal)
  "doola batch dengey ra": [4, 5], // Dick batch fuck off come (Coastal variant)
  "kukka batch dengey ra": [3, 5], // Dog batch fuck off come (Coastal)
  "gadida batch dengey ra": [3, 5], // Donkey batch fuck off come (Coastal)
  "dunna batch dengey ra": [3, 5], // Buffalo batch fuck off come (Coastal)
  "gorre batch dengey ra": [3, 5], // Sheep batch fuck off come (Coastal)

  // ========================================
  // === Extended Telangana Dialect ===
  // ========================================
  "nee amma dengu be ra": [3, 5], // Fuck your mother (Telangana)
  "lanjodka dengey be ra": [5, 5], // Whore's son fuck off (Telangana)
  "gudda lo modda be ra": [4, 4], // Dick in ass (Telangana)
  "puku nakku be ra": [4, 4], // Lick the pussy (Telangana)
  "erri puku gadu be ra": [1, 4], // Stupid pussy man (Telangana)
  "modda meeda be ra": [4, 4], // On the dick (Telangana)
  "dengey be rotta ra": [3, 5], // Fuck off worthless (Telangana)
  "kukka be dengey ra": [3, 5], // Dog fuck off (Telangana)
  "lanja be dengey ra": [5, 5], // Whore fuck off (Telangana)
  "dengara be batch ra": [3, 5], // Fucker batch (Telangana)
  "gadida be dengey ra": [3, 5], // Donkey fuck off (Telangana)
  "dunna be dengey ra": [3, 5], // Buffalo fuck off (Telangana)
  "gorre be dengey ra": [3, 5], // Sheep fuck off (Telangana)
  "pichi be dengey ra": [3, 5], // Crazy fuck off (Telangana)
  "erri be dengey ra": [1, 4], // Stupid fuck off (Telangana)
  "rotta be dengey ra": [3, 5], // Worthless fuck off (Telangana)
  "nee amma lanja be ra": [5, 4], // Your mother whore (Telangana)
  "nee ayya puku be ra": [1, 4], // Your father's pussy (Telangana)
  "nee akka lanja be": [5, 4], // Your sister whore (Telangana)
  "nee talli lanja be": [5, 4], // Your mother whore (Telangana variant)
  "nee puku be ra dengey": [4, 5], // Your pussy fuck off (Telangana)
  "nee gudda be ra dengey": [3, 5], // Your ass fuck off (Telangana)
  "nee modda be ra dengey": [4, 5], // Your dick fuck off (Telangana)
  "nee sulli be ra dengey": [4, 5], // Your dick fuck off (Telangana variant)

  // ========================================
  // === Extended Tenglish Mix ===
  // ========================================
  "fucking dengu ra": [3, 5], // Fucking fuck come
  "bloody lanja dengey": [3, 4], // Bloody whore fuck off
  "damn erri puku dengey": [1, 4], // Damn stupid pussy fuck off
  "fucking modda dengey": [3, 5], // Fucking dick fuck off
  "shit puku dengey": [3, 5], // Shit pussy fuck off
  "asshole gudda dengey": [3, 4], // Asshole ass fuck off
  "bastard lanja kodaka dengey": [5, 4], // Bastard whore's son fuck off
  "bitch lanja dengey": [3, 4], // Bitch whore fuck off
  "son of a lanja dengey": [3, 4], // Son of a whore fuck off
  "stupid erri puku dengey": [1, 4], // Stupid stupid pussy fuck off
  "shut up puku dengey": [3, 4], // Shut up pussy fuck off
  "fuck off dengey ra": [3, 5], // Fuck off fuck off come
  "die dengey ra": [5, 5], // Die fuck off come
  "ugly lanja dengey": [3, 4], // Ugly whore fuck off
  "cheap vesi dengey": [3, 4], // Cheap prostitute fuck off
  "dirty gudda dengey": [3, 4], // Dirty ass fuck off
  "loser rotta dengey": [3, 4], // Loser worthless fuck off
  "trash lanja dengey": [3, 4], // Trash whore fuck off
  "garbage puku dengey": [3, 4], // Garbage pussy fuck off
  "noob erri puku dengey": [1, 4], // Noob stupid pussy fuck off (gaming)
  "toxic lanja kodaka": [3, 4], // Toxic whore's son (gaming)
  "cancer puku gadu": [3, 4], // Cancer pussy man (gaming)
  "feeder lanja kodaka": [3, 4], // Feeder whore's son (gaming)
  "bot erri puku": [1, 4], // Bot stupid pussy (gaming)
  "hacker dengey ra": [3, 4], // Hacker fuck off come (gaming)
  "camper erri puku": [1, 4], // Camper stupid pussy (gaming)
  "uninstall cheyyi dengey": [3, 4], // Uninstall do fuck off (gaming)
  "delete cheyyi dengey": [3, 4], // Delete do fuck off (gaming)
  "lag erri puku dengey": [1, 4], // Lag stupid pussy fuck off (gaming)
  "pro lanja kodaka": [3, 4], // Pro whore's son (gaming sarcastic)

  // ========================================
  // === Extended Threats (Telugu) ===
  // ========================================
  "nee pooku faadtha": [5, 5], // I'll rip your pussy
  "nee gudda faadtha": [5, 5], // I'll rip your ass
  "nee bondalu theestha": [5, 5], // I'll rip your testicles
  "nee tala pagiltha": [5, 5], // I'll crack your head
  "nee pallu raalta": [5, 5], // I'll break your teeth
  "nee elukalu visurtha": [5, 5], // I'll break your bones
  "kukkala ki vestha": [5, 5], // I'll throw to dogs
  "drain lo thostha": [5, 5], // I'll push in drain
  "gutter lo thostha": [5, 5], // I'll push in gutter
  "smaashaanaam lo vesthaa": [5, 5], // I'll leave you in cremation ground
  "brathikiundagane paathesthaa": [5, 5], // I'll bury alive
  "cheelchesthaa": [5, 5], // I'll rip apart
  "kolesthaa": [5, 5], // I'll kill
  "sachesthaa": [5, 5], // I'll make you die
  "chaavagodtha": [5, 5], // I'll beat to death
  "nee amma ni denguthaa": [5, 5], // I'll fuck your mother
  "nee akka ni denguthaa": [5, 5], // I'll fuck your sister
  "nee pellam ni denguthaa": [5, 5], // I'll fuck your wife
  "nee ayya ni denguthaa": [5, 5], // I'll fuck your father
  "nee vaamsham ni denguthaa": [5, 5], // I'll fuck your lineage

  // ========================================
  // === Telugu Threats - Script ===
  // ========================================
  "నీ పూకు ఫాడ్తా": [5, 5], // I'll rip your pussy
  "నీ గుద్ద ఫాడ్తా": [5, 5], // I'll rip your ass
  "నీ బొండాలు తీస్తా": [5, 5], // I'll rip your testicles
  "నీ తల పగిల్తా": [5, 5], // I'll crack your head
  "నీ పళ్ళు రాల్తా": [5, 5], // I'll break your teeth
  "నీ ఎలుకలు విసుర్తా": [5, 5], // I'll break your bones
  "కుక్కలకి వేస్తా": [5, 5], // I'll throw to dogs
  "డ్రెయిన్ లో తోస్తా": [5, 5], // I'll push in drain
  "కొలేస్తా": [5, 5], // I'll kill
  "చావగొడ్తా": [5, 5], // I'll beat to death
  "నీ అమ్మ ని దెంగుతా": [5, 5], // I'll fuck your mother
  "నీ అక్క ని దెంగుతా": [5, 5], // I'll fuck your sister
  "నీ పెళ్ళాం ని దెంగుతా": [5, 5], // I'll fuck your wife
  "నీ వంశం ని దెంగుతా": [5, 5], // I'll fuck your lineage

  // ========================================
  // === Extended Telugu Compound Insults ===
  // ========================================
  "lanja kodaka erri puku dengey ra batch": [1, 4], // Whore's son stupid pussy fuck off batch
  "kukka lanja kodaka dengey ra batch": [5, 5], // Dog whore's son fuck off batch
  "gadida lanja kodaka dengey ra batch": [5, 5], // Donkey whore's son fuck off batch
  "erri puku lanja kodaka batch dengey ra": [1, 4], // Stupid pussy whore's son batch fuck off
  "nee amma puku dengu ra lanja kodaka batch": [5, 5], // Fuck mother's pussy whore's son batch
  "nee gudda lo modda pettey ra lanja kodaka": [5, 4], // Put dick in ass whore's son
  "kukka gudda batch dengey ra lanja kodaka": [5, 5], // Dog ass batch fuck off whore's son
  "gadida modda gadu dengey ra batch": [4, 5], // Donkey dick man fuck off batch
  "pichi lanja kodaka dengey ra batch": [5, 5], // Crazy whore's son fuck off batch
  "rotta lanja kodaka batch dengey ra": [5, 5], // Worthless whore's son batch fuck off
  "vesi kukka lanja batch dengey ra": [5, 5], // Prostitute dog whore batch fuck off
  "erri kukka gudda batch dengey ra": [1, 4], // Stupid dog ass batch fuck off
  "dunna lanja kukka dengey ra batch": [5, 5], // Buffalo whore dog fuck off batch
  "nee talli puku dengu ra batch": [4, 5], // Fuck mother's pussy batch (Rayalaseema)
  "eddu modda gadu batch dengey": [4, 5], // Ox dick man batch fuck off
  "kothi puku gadu batch dengey": [4, 5], // Monkey pussy man batch fuck off
  "pandi modda gadu batch dengey": [4, 5], // Pig dick man batch fuck off
  "eluka gudda gadu batch dengey": [3, 5], // Rat ass man batch fuck off
  "kaaki puku gadu batch dengey": [4, 5], // Crow pussy man batch fuck off

  // ========================================
  // === Extended Telugu Scatological ===
  // ========================================
  "nee meedha ponguthaa": [3, 4], // I'll piss on you
  "nee moham meedha urutha": [3, 4], // I'll spit on your face
  "gu thinu ra": [3, 5], // Eat shit
  "gu lo dengu": [3, 5], // Fuck in shit
  "peethi thinu ra": [3, 4], // Eat feces
  "muthra thaagtaav": [3, 4], // You'll drink urine
  "gu kodaka": [3, 5], // Shit's son
  "peethi kodaka": [3, 4], // Feces' son
  "muthra kodaka": [3, 4], // Urine's son
  "padda pooku": [4, 4], // Fart pussy
  "padda gudda": [3, 4], // Fart ass
  "padda modda": [4, 4], // Fart dick
  "gu puku": [4, 5], // Shit pussy
  "gu gudda": [3, 5], // Shit ass
  "gu modda": [4, 5], // Shit dick
  "naali keeda": [3, 4], // Drain worm
  "gutter keeda": [3, 4], // Gutter worm
  "chetta puku": [4, 4], // Garbage pussy
  "chetta gudda": [3, 4], // Garbage ass
  "chetta modda": [4, 4], // Garbage dick
  "chetta lanja": [5, 4], // Garbage whore
  "chetta kodaka": [3, 4], // Garbage son
  "gu meedha dengey": [3, 5], // Fuck on shit
  "gu lo padey": [3, 5], // Fall in shit
  "gu lo sachipovey": [5, 5], // Die in shit

  // ========================================
  // === Extended Telugu Animal Insults ===
  // ========================================
  "eddu dengey": [3, 5], // Ox fuck off
  "eddu lanja": [5, 4], // Ox whore
  "eddu kodaka": [1, 4], // Ox's son
  "kothi dengey": [3, 5], // Monkey fuck off
  "kothi lanja": [5, 4], // Monkey whore
  "kothi kodaka": [1, 4], // Monkey's son
  "paamu dengey": [3, 5], // Snake fuck off
  "paamu lanja": [5, 4], // Snake whore
  "paamu kodaka": [1, 4], // Snake's son
  "eluka dengey": [3, 5], // Rat fuck off
  "eluka lanja": [5, 4], // Rat whore
  "eluka kodaka": [1, 4], // Rat's son
  "kaaki dengey": [3, 5], // Crow fuck off
  "kaaki lanja": [5, 4], // Crow whore
  "kaaki kodaka": [1, 4], // Crow's son
  "pandi dengey": [3, 5], // Pig fuck off
  "pandi lanja": [5, 4], // Pig whore
  "pandi kodaka": [1, 4], // Pig's son
  "nakka dengey": [3, 5], // Fox fuck off
  "nakka lanja": [5, 4], // Fox whore
  "nakka kodaka": [1, 4], // Fox's son
  "thodelu dengey": [3, 5], // Wolf fuck off
  "thodelu lanja": [5, 4], // Wolf whore
  "thodelu kodaka": [1, 4], // Wolf's son
  "pilli dengey": [3, 5], // Cat fuck off
  "pilli lanja": [5, 4], // Cat whore
  "pilli kodaka": [1, 4], // Cat's son
  "gorre kodaka": [1, 4], // Sheep's son
  "dunna kodaka": [1, 4], // Buffalo's son
  "gadida kodaka dengey": [3, 5], // Donkey's son fuck off
  "kukka kodaka dengey": [3, 5], // Dog's son fuck off
  "eddu batch dengey": [3, 5], // Ox batch fuck off
  "kothi batch dengey": [3, 5], // Monkey batch fuck off
  "pandi batch dengey": [3, 5], // Pig batch fuck off
  "paamu batch dengey": [3, 5], // Snake batch fuck off

  // ========================================
  // === Extended Telugu Evasion Spellings ===
  // ========================================
  "p00ku": [3, 5], // Pooku evasion
  "d3ngu": [3, 5], // Dengu evasion
  "l@nja": [3, 5], // Lanja evasion
  "m0dda": [3, 5], // Modda evasion
  "g0dda": [3, 5], // Gudda evasion
  "s0lli": [3, 5], // Sulli evasion
  "l@vada": [3, 5], // Lavada evasion
  "b0kka": [3, 5], // Bokka evasion
  "d3ngey": [3, 5], // Dengey evasion
  "v3si": [3, 5], // Vesi evasion
  "r0tta": [3, 5], // Rotta evasion
  "p1chi": [3, 5], // Pichi evasion
  "3rri": [3, 5], // Erri evasion
  "k0kka": [3, 5], // Kukka evasion
  "g@dida": [3, 5], // Gadida evasion
  "d0nna": [3, 5], // Dunna evasion
  "b@nda": [3, 5], // Banda evasion
  "b0nda": [3, 5], // Bonda evasion
  "lnjakodaka": [3, 5], // Lanja kodaka compound evasion
  "lnjamdda": [3, 5], // Lanja munda evasion
  "pkugadu": [3, 5], // Puku gadu compound evasion
  "mddagadu": [3, 5], // Modda gadu compound evasion
  "gddanakku": [3, 5], // Gudda nakku compound evasion
  "sllinakku": [3, 5], // Sulli nakku compound evasion

  // ========================================
  // === Extended Telugu Internet Slang ===
  // ========================================
  "lk btch dng ra": [2, 3], // Lanja kodaka batch dengey ra
  "kk lk dng ra": [2, 3], // Kukka lanja kodaka dengey ra
  "nee amma pk dng ra": [2, 3], // Nee amma puku dengu ra
  "gdda dng ra btch": [2, 3], // Gudda dengu ra batch
  "mdda btch dng ra": [2, 3], // Modda batch dengey ra
  "erripk btch dng ra": [2, 3], // Erri puku batch dengey ra
  "pk nk btch dng ra": [2, 3], // Puku nakka batch dengey ra
  "vsi dng ra btch": [2, 3], // Vesi dengey ra batch
  "rttagdu dng ra": [2, 3], // Rotta gadu dengey ra
  "gdda nkku ra btch": [2, 3], // Gudda nakku ra batch
  "pku gdu dng ra": [2, 3], // Puku gadu dengey ra
  "slli nkku ra btch": [2, 3], // Sulli nakku ra batch
  "dng btch ra": [2, 3], // Dengu batch ra
  "lnja btch dng ra": [2, 3], // Lanja batch dengey ra
  "lk mdda gdu btch": [2, 3], // Lanja kodaka modda gadu batch
  "kk gdda btch dng": [2, 3], // Kukka gudda batch dengey
  "gdda mdda btch ra": [2, 3], // Gadida modda batch ra
  "dnna pk btch dng": [2, 3], // Dunna puku batch dengey
  "grre lk btch dng": [2, 3], // Gorre lanja kodaka batch dengey
  "plli lk btch dng": [2, 3], // Pilli lanja kodaka batch dengey

  // ========================================
  // === Extended Telugu Caste/Religious Slurs ===
  // ========================================
  "maala": [5, 4], // Scheduled caste slur
  "madiga": [5, 4], // Scheduled caste slur
  "maala kodaka": [5, 4], // SC caste slur + son
  "madiga kodaka": [5, 4], // SC caste slur + son
  "maala lanja": [5, 4], // SC caste whore
  "madiga lanja": [5, 4], // SC caste whore
  "maala dengey": [5, 5], // SC caste fuck off
  "madiga dengey": [5, 5], // SC caste fuck off
  "erukala": [5, 4], // Nomadic caste slur
  "erukala kodaka": [5, 4], // Nomadic caste son
  "yanadi": [5, 4], // Tribal caste slur
  "yanadi kodaka": [5, 4], // Tribal caste son
  "chandala": [5, 4], // Outcast slur
  "chandala kodaka": [5, 4], // Outcast son
  "turka": [5, 4], // Muslim slur (Telugu)
  "turka kodaka": [5, 4], // Muslim slur son
  "turka dengey": [5, 5], // Muslim slur fuck off
  "turka lanja": [5, 4], // Muslim slur whore
  "vaadu maala": [5, 4], // He is SC (derogatory context)
  "vaadu madiga": [5, 4], // He is SC (derogatory context)
  "neech jathi": [5, 4], // Low caste
  "neech jathi kodaka": [5, 4], // Low caste son
  "neech jathi lanja": [5, 4], // Low caste whore
  "neech jathi dengey": [5, 5], // Low caste fuck off

  // ========================================
  // === More Extended Telugu Script ===
  // ========================================
  "మాల": [3, 4], // Maala (SC caste slur)
  "మాదిగ": [3, 4], // Madiga (SC caste slur)
  "మాల కొడక": [3, 4], // Maala kodaka (SC son)
  "మాదిగ కొడక": [3, 4], // Madiga kodaka (SC son)
  "మాల లంజ": [5, 4], // Maala lanja (SC whore)
  "మాదిగ లంజ": [5, 4], // Madiga lanja (SC whore)
  "తుర్క": [3, 4], // Turka (Muslim slur)
  "తుర్క కొడక": [3, 4], // Turka kodaka (Muslim slur son)
  "నీచ జాతి": [3, 4], // Neech jathi (low caste)
  "చండాల": [3, 4], // Chandala (outcast slur)
  "ఎద్దు దెంగే": [3, 5], // Eddu dengey (ox fuck off)
  "కోతి దెంగే": [3, 5], // Kothi dengey (monkey fuck off)
  "పంది దెంగే": [3, 5], // Pandi dengey (pig fuck off)
  "పాము దెంగే": [3, 5], // Paamu dengey (snake fuck off)
  "ఎలుక దెంగే": [3, 5], // Eluka dengey (rat fuck off)
  "నక్క దెంగే": [3, 5], // Nakka dengey (fox fuck off)
  "తోడేలు దెంగే": [3, 5], // Thodelu dengey (wolf fuck off)
  "పిల్లి దెంగే": [3, 5], // Pilli dengey (cat fuck off)
  "గు తిను రా": [3, 5], // Gu thinu ra (eat shit)
  "పీతి తిను రా": [3, 4], // Peethi thinu ra (eat feces)
  "ముత్ర తాగ్తావ్": [3, 4], // Muthra thaagtaav (drink urine)
  "నాలి కీడా": [3, 4], // Naali keeda (drain worm)
  "చెత్త పుకు": [4, 4], // Chetta puku (garbage pussy)
  "చెత్త గుద్ద": [3, 4], // Chetta gudda (garbage ass)
  "చెత్త మొడ్డ": [4, 4], // Chetta modda (garbage dick)
  "చెత్త లంజ": [5, 4], // Chetta lanja (garbage whore)
  "గు పుకు": [4, 5], // Gu puku (shit pussy)
  "గు గుద్ద": [3, 5], // Gu gudda (shit ass)
  "గు మొడ్డ": [4, 5], // Gu modda (shit dick)
  "గు కొడక": [3, 5], // Gu kodaka (shit's son)

  // ========================================
  // === Extended Telugu Body Part Combos ===
  // ========================================
  "pooku moham": [4, 3], // Pussy face
  "gudda moham": [4, 3], // Ass face
  "modda moham": [4, 3], // Dick face
  "sulli moham": [4, 3], // Dick face variant
  "pooku chettu": [4, 3], // Pussy tree (insult)
  "gudda chettu": [4, 3], // Ass tree (insult)
  "modda chettu": [4, 3], // Dick tree (insult)
  "pooku bandi": [4, 3], // Pussy cart (insult)
  "gudda bandi": [4, 3], // Ass cart (insult)
  "modda bandi": [4, 3], // Dick cart (insult)
  "pooku mudda": [4, 3], // Pussy lump
  "gudda mudda": [4, 3], // Ass lump
  "modda mudda": [4, 3], // Dick lump
  "pooku guddi": [4, 3], // Pussy egg
  "gudda guddi": [4, 3], // Ass egg
  "modda guddi": [4, 3], // Dick egg variant
  "pooku rotta": [4, 3], // Pussy worthless
  "modda rotta gadu dengey": [4, 5], // Dick worthless man fuck off
  "sulli rotta gadu dengey": [4, 5], // Dick worthless man fuck off variant
  "gudda rotta gadu dengey": [4, 5], // Ass worthless man fuck off
  "pooku rotta gadu dengey": [4, 5], // Pussy worthless man fuck off

  // ========================================
  // === More Extended Telugu Compounds ===
  // ========================================
  "nee amma ooru lanja": [5, 5], // Your mother is village whore
  "nee amma pacha vesi": [5, 5], // Your mother is total prostitute
  "nee akka ooru lanja": [5, 5], // Your sister is village whore
  "nee ayya puku gadu": [1, 4], // Your father is pussy man
  "nee vaamsam motham lanja kodakalu": [5, 5], // Your entire lineage whore's sons
  "nee kutumbam motham lanja mundalu": [5, 5], // Your entire family whore faces
  "nee amma ku modda naakudu theriyum": [4, 5], // Your mother only knows dick licking
  "nee akka ku gudda ivvudu theriyum": [3, 5], // Your sister only knows giving ass
  "nee amma ku kukka denguthadi": [3, 5], // Dogs fuck your mother
  "nee amma ku gadida denguthadi": [3, 5], // Donkeys fuck your mother
  "nee amma ku dunna denguthadi": [3, 5], // Buffaloes fuck your mother
  "nee amma ku gorre denguthadi": [3, 5], // Sheep fuck your mother
  "nee amma ku pandi denguthadi": [3, 5], // Pigs fuck your mother
  "nee amma ku kothi denguthadi": [3, 5], // Monkeys fuck your mother
  "nee amma ku eluka denguthadi": [3, 5], // Rats fuck your mother
  "nee amma ku paamu denguthadi": [3, 5], // Snakes fuck your mother
  "nee amma hijra": [3, 5], // Your mother is a eunuch
  "nee ayya hijra": [1, 4], // Your father is a eunuch
  "nee akka hijra": [3, 5], // Your sister is a eunuch
  "hijra lanja": [5, 5], // Eunuch whore
  "hijra puku": [4, 5], // Eunuch pussy
  "hijra modda": [4, 5], // Eunuch dick
  "hijra gudda": [3, 5], // Eunuch ass
  "napumsaka lanja": [5, 5], // Impotent whore
  "napumsaka dengey": [3, 5], // Impotent fuck off
  "napumsaka kodaka": [3, 5], // Impotent's son
  "kojja lanja": [5, 5], // Eunuch whore (slang)
  "kojja dengey": [3, 5], // Eunuch fuck off (slang)
  "kojja kodaka": [3, 5], // Eunuch's son (slang)
  "kojja puku": [4, 5], // Eunuch pussy (slang)
  "kojja modda": [4, 5], // Eunuch dick (slang)
  "kojja gudda": [3, 5], // Eunuch ass (slang)

  // ========================================
  // === More Extended Telugu Script ===
  // ========================================
  "నీ అమ్మ ఊరు లంజ": [5, 4], // Your mother village whore
  "నీ అమ్మ పచ్చ వేశ్య": [5, 4], // Your mother total prostitute
  "నీ అక్క ఊరు లంజ": [5, 4], // Your sister village whore
  "నీ వంశం మొత్తం లంజ కొడకలు": [5, 4], // Entire lineage whore's sons
  "నీ కుటుంబం మొత్తం లంజ ముండలు": [5, 4], // Entire family whore faces
  "నీ అమ్మ కు కుక్క దెంగుతది": [3, 5], // Dogs fuck your mother
  "నీ అమ్మ కు గాడిద దెంగుతది": [3, 5], // Donkeys fuck your mother
  "నీ అమ్మ కు దున్న దెంగుతది": [3, 5], // Buffaloes fuck your mother
  "నీ అమ్మ కు గొర్రె దెంగుతది": [3, 5], // Sheep fuck your mother
  "నీ అమ్మ కు పంది దెంగుతది": [3, 5], // Pigs fuck your mother
  "నీ అమ్మ కు కోతి దెంగుతది": [3, 5], // Monkeys fuck your mother
  "నీ అమ్మ హిజ్రా": [3, 4], // Your mother eunuch
  "నీ అయ్య హిజ్రా": [1, 4], // Your father eunuch
  "హిజ్రా లంజ": [5, 4], // Eunuch whore
  "హిజ్రా పుకు": [4, 4], // Eunuch pussy
  "హిజ్రా మొడ్డ": [4, 4], // Eunuch dick
  "హిజ్రా గుద్ద": [3, 4], // Eunuch ass
  "నపుంసక లంజ": [5, 4], // Impotent whore
  "నపుంసక దెంగే": [3, 5], // Impotent fuck off
  "కొజ్జ లంజ": [5, 4], // Eunuch whore (slang)
  "కొజ్జ దెంగే": [3, 5], // Eunuch fuck off (slang)
  "కొజ్జ కొడక": [3, 4], // Eunuch's son (slang)
  "కొజ్జ పుకు": [4, 4], // Eunuch pussy (slang)
  "కొజ్జ మొడ్డ": [4, 4], // Eunuch dick (slang)

  // ========================================
  // === More Extended Threat Compounds ===
  // ========================================
  "nee amma ni nee mundu denguthaa": [3, 5], // I'll fuck your mother in front of you
  "nee akka ni nee mundu denguthaa": [3, 5], // I'll fuck your sister in front of you
  "nee vaamsam azhinchisthaa": [3, 5], // I'll destroy your lineage
  "nee kutumbam azhinchisthaa": [3, 5], // I'll destroy your family
  "nee peru vini janalu tukkirtharu": [3, 5], // People will spit hearing your name
  "nee puku lo thee pettisthaa": [4, 5], // I'll set fire in your pussy
  "nee gudda lo thee pettisthaa": [3, 5], // I'll set fire in your ass
  "nee modda lo thee pettisthaa": [4, 5], // I'll set fire in your dick
  "nee puku lo mirchi pettisthaa": [4, 5], // I'll put chili in your pussy
  "nee gudda lo mirchi pettisthaa": [3, 5], // I'll put chili in your ass
  "nee modda ki rope katesthaa": [4, 5], // I'll tie rope to your dick
  "nee puku kududthaa": [4, 5], // I'll sew your pussy shut
  "nee gudda kududthaa": [3, 5], // I'll sew your ass shut
  "nee puku lo paamu vesthaa": [4, 5], // I'll put snake in your pussy
  "nee gudda lo paamu vesthaa": [3, 5], // I'll put snake in your ass
  "nee vaamsam thikkumuzhangu paduthundhi": [3, 5], // Your lineage will be humiliated
  "ninna kukkala ki vestha": [3, 5], // I'll feed you to dogs
  "ninna pandula ki vestha": [3, 5], // I'll feed you to pigs
  "ninna drain lo thostha": [3, 5], // I'll push you in drain
  "ninna gutter lo thostha": [3, 5], // I'll push you in gutter
  "ninna brathikiundaga paathestha": [3, 5], // I'll bury you alive
  "nee kutumbam motham denguthaa": [3, 5], // I'll fuck your entire family
  "nee vaamsam motham denguthaa": [3, 5], // I'll fuck your entire lineage
  "nee amma ni ooru motham denguthundhi": [3, 5], // The whole village fucks your mother
  "nee akka ni ooru motham denguthundhi": [3, 5], // The whole village fucks your sister
  "nee pellam ni ooru motham denguthundhi": [3, 5], // The whole village fucks your wife

  // ========================================
  // === More Extended Animal Compounds ===
  // ========================================
  "dunna lanja kodaka dengey ra batch": [5, 5], // Buffalo whore's son fuck off batch
  "gorre lanja kodaka dengey ra batch": [5, 5], // Sheep whore's son fuck off batch
  "pandi lanja kodaka dengey ra batch": [5, 5], // Pig whore's son fuck off batch
  "kothi lanja kodaka dengey ra batch": [5, 5], // Monkey whore's son fuck off batch
  "eluka lanja kodaka dengey ra batch": [5, 5], // Rat whore's son fuck off batch
  "paamu lanja kodaka dengey ra batch": [5, 5], // Snake whore's son fuck off batch
  "pilli lanja kodaka dengey ra batch": [5, 5], // Cat whore's son fuck off batch
  "eddu lanja kodaka dengey ra batch": [5, 5], // Ox whore's son fuck off batch
  "nakka lanja kodaka dengey ra batch": [5, 5], // Fox whore's son fuck off batch
  "kukka lanja munda dengey": [5, 5], // Dog whore face fuck off
  "gadida lanja munda dengey": [5, 5], // Donkey whore face fuck off
  "dunna lanja munda dengey": [5, 5], // Buffalo whore face fuck off
  "gorre lanja munda dengey": [5, 5], // Sheep whore face fuck off
  "pandi lanja munda dengey": [5, 5], // Pig whore face fuck off
  "kothi lanja munda dengey": [5, 5], // Monkey whore face fuck off
  "kukka vesi dengey ra": [5, 5], // Dog prostitute fuck off
  "gadida vesi dengey ra": [5, 5], // Donkey prostitute fuck off
  "dunna vesi dengey ra": [5, 5], // Buffalo prostitute fuck off
  "gorre vesi dengey ra": [5, 5], // Sheep prostitute fuck off
  "pandi vesi dengey ra": [5, 5], // Pig prostitute fuck off
  "kothi vesi dengey ra": [5, 5], // Monkey prostitute fuck off

  // ========================================
  // === More Extended Tenglish Gaming ===
  // ========================================
  "afk lanja kodaka": [3, 4], // AFK whore's son
  "report cheyyi lanja kodaka": [3, 4], // Report whore's son
  "mute cheyyi lanja kodaka": [3, 4], // Mute whore's son
  "feed chesthunnav lanja kodaka": [3, 4], // You're feeding whore's son
  "carry cheyyalev lanja kodaka": [3, 4], // Can't carry whore's son
  "int chesthunnav lanja kodaka": [3, 4], // You're inting whore's son
  "trash tier lanja kodaka": [3, 4], // Trash tier whore's son
  "bronze lanja kodaka": [3, 4], // Bronze whore's son (low rank)
  "iron lanja kodaka": [3, 4], // Iron whore's son (lowest rank)
  "hardstuck lanja kodaka": [3, 4], // Hardstuck whore's son
  "boosted lanja kodaka": [3, 4], // Boosted whore's son
  "smurf dengey ra": [3, 4], // Smurf fuck off
  "aim ledhu lanja kodaka": [3, 4], // No aim whore's son
  "game sense ledhu lanja kodaka": [3, 4], // No game sense whore's son
  "camping lanja kodaka dengey": [3, 4], // Camping whore's son fuck off
  "stream sniper dengey ra": [3, 4], // Stream sniper fuck off
  "gg lanja kodaka": [3, 4], // GG whore's son
  "ez lanja kodaka": [3, 4], // EZ whore's son
  "toxic erri puku": [1, 4], // Toxic stupid pussy
  "cancer erri puku": [1, 4], // Cancer stupid pussy
  "noob erri puku batch": [1, 4], // Noob stupid pussy batch
  "clutch cheyyi ra lanja kodaka": [3, 4], // Clutch it whore's son
  "uninstall cheyyi lanja kodaka": [3, 4], // Uninstall whore's son
  "delete cheyyi erri puku": [1, 4], // Delete stupid pussy

  // ========================================
  // === More Extended Compound Insults ===
  // ========================================
  "nee amma puku ooru lo motham teliyum": [1, 4], // Your mother's pussy is known in entire village
  "nee akka gudda ooru lo motham teliyum": [1, 4], // Your sister's ass is known in entire village
  "nee amma free dengu batch": [1, 4], // Your mother is a free fuck batch
  "nee akka free dengu batch": [1, 4], // Your sister is a free fuck batch
  "nee amma oka rupa ku denguthundhi": [1, 4], // Your mother fucks for one rupee
  "nee akka oka paisa ku denguthundhi": [1, 4], // Your sister fucks for one paisa
  "nee amma ku ekkada rate ledhu": [1, 4], // Your mother has no rate (worthless)
  "nee akka ku ekkada rate ledhu": [1, 4], // Your sister has no rate (worthless)
  "nee amma lanja profession": [1, 4], // Your mother's profession is whoring
  "nee akka modda naakudu profession": [1, 4], // Your sister's profession is dick licking
  "nee amma gudda ivvudu profession": [1, 4], // Your mother's profession is giving ass
  "nee vaamsam lo andaru lanjalu": [1, 4], // Everyone in your lineage are whores
  "nee kutumbam lo andaru lanja kodakalu": [1, 4], // Everyone in your family are whores' sons
  "nee amma ku naa modda nachindi": [1, 4], // Your mother liked my dick
  "nee akka ku naa sulli nachindi": [1, 4], // Your sister liked my dick
  "nee pellam ku naa banda nachindi": [1, 4], // Your wife liked my dick
  "nee amma naa daggariki vasthundhi": [1, 4], // Your mother comes to me
  "nee akka naa daggariki vasthundhi": [1, 4], // Your sister comes to me
  "nee pellam naa daggariki vasthundhi": [1, 4], // Your wife comes to me

  // ========================================
  // === Extended Telugu Script Insults ===
  // ========================================
  "నీ అమ్మ పూకు నాకుతాను": [4, 4], // I'll lick your mother's pussy
  "నీ అక్క పూకు నాకుతాను": [4, 4], // I'll lick your sister's pussy
  "నీ అమ్మ గుద్ద నాకుతాను": [3, 4], // I'll lick your mother's ass
  "నీ అక్క గుద్ద నాకుతాను": [3, 4], // I'll lick your sister's ass
  "నీ అమ్మ సొల్లు పిసుకుతాను": [4, 4], // I'll squeeze your mother's breasts
  "నీ అక్క సొల్లు పిసుకుతాను": [4, 4], // I'll squeeze your sister's breasts
  "నీ అమ్మ ని బోర్లా వేసి దెంగుతాను": [3, 5], // I'll fuck your mother face down
  "నీ అక్క ని బోర్లా వేసి దెంగుతాను": [3, 5], // I'll fuck your sister face down
  "నీ అమ్మ పూకులో చేయి పెడతాను": [4, 4], // I'll put my hand in your mother's pussy
  "నీ అమ్మ పూకులో కాలు పెడతాను": [4, 4], // I'll put my foot in your mother's pussy
  "నీ మొడ్డ కోస్తాను": [4, 4], // I'll cut your dick
  "నీ మొడ్డ విరుస్తాను": [4, 4], // I'll break your dick
  "నీ సుల్లి కోస్తాను": [4, 4], // I'll cut your dick (alt)
  "నీ సుల్లి విరుస్తాను": [4, 4], // I'll break your dick (alt)
  "నీ తట్టలు పిసుకుతాను": [4, 4], // I'll crush your balls
  "నీ తట్టలు కోస్తాను": [4, 4], // I'll cut your balls
  "నీ అమ్మ పూకు చీరుతాను": [4, 4], // I'll tear your mother's pussy
  "నీ అక్క పూకు చీరుతాను": [4, 4], // I'll tear your sister's pussy
  "నీ అమ్మ గుద్ద చీరుతాను": [3, 4], // I'll tear your mother's ass
  "నీ అక్క గుద్ద చీరుతాను": [3, 4], // I'll tear your sister's ass
  "లంజ కొడక నువ్వు": [5, 4], // Whore's son you are
  "లంజ కూతురు నువ్వు": [5, 4], // Whore's daughter you are
  "దొంగ లంజ కూతురు": [5, 4], // Thief whore's daughter
  "రంది కొడక నువ్వు": [5, 4], // Prostitute's son you are
  "బోగం కొడక నువ్వు": [5, 4], // Prostitute's son you are (alt)
  "వేశ్య కొడక నువ్వు": [5, 4], // Prostitute's son you are (formal)
  "నీ అమ్మ బజార్ లంజ": [5, 4], // Your mother is a market whore
  "నీ అక్క బజార్ లంజ": [5, 4], // Your sister is a market whore
  "నీ అమ్మ రోడ్ లంజ": [5, 4], // Your mother is a street whore
  "నీ అక్క రోడ్ లంజ": [5, 4], // Your sister is a street whore

  // ========================================
  // === Extended Romanized Telugu Insults ===
  // ========================================
  "nee amma puku naakuthaanu": [4, 5], // I'll lick your mother's pussy
  "nee akka puku naakuthaanu": [4, 5], // I'll lick your sister's pussy
  "nee amma gudda naakuthaanu": [3, 5], // I'll lick your mother's ass
  "nee akka gudda naakuthaanu": [3, 5], // I'll lick your sister's ass
  "nee amma sollu pisukuthaanu": [4, 5], // I'll squeeze your mother's breasts
  "nee akka sollu pisukuthaanu": [4, 5], // I'll squeeze your sister's breasts
  "nee amma ni borla vesi denguthaanu": [3, 5], // I'll fuck your mother face down
  "nee akka ni borla vesi denguthaanu": [3, 5], // I'll fuck your sister face down
  "nee amma pukulo cheyi pedathaanu": [4, 5], // I'll put hand in your mother's pussy
  "nee amma pukulo kaalu pedathaanu": [4, 5], // I'll put foot in your mother's pussy
  "nee modda kosthaanu": [4, 5], // I'll cut your dick
  "nee modda virusthaanu": [4, 5], // I'll break your dick
  "nee sulli kosthaanu": [4, 5], // I'll cut your dick (alt)
  "nee sulli virusthaanu": [4, 5], // I'll break your dick (alt)
  "nee tattalu pisukuthaanu": [4, 5], // I'll crush your balls
  "nee tattalu kosthaanu": [4, 5], // I'll cut your balls
  "nee amma puku cheeruthaanu": [4, 5], // I'll tear your mother's pussy
  "nee akka puku cheeruthaanu": [4, 5], // I'll tear your sister's pussy
  "nee amma gudda cheeruthaanu": [3, 5], // I'll tear your mother's ass
  "nee akka gudda cheeruthaanu": [3, 5], // I'll tear your sister's ass
  "lanja kodaka nuvvu": [5, 5], // Whore's son you are
  "lanja koothuru nuvvu": [5, 5], // Whore's daughter you are
  "donga lanja koothuru": [5, 5], // Thief whore's daughter
  "randi kodaka nuvvu": [5, 5], // Prostitute's son you are
  "bogam kodaka nuvvu": [5, 5], // Prostitute's son you are (alt)
  "veshya kodaka nuvvu": [5, 5], // Prostitute's son you are (formal)
  "nee amma bazaar lanja": [5, 5], // Your mother is a market whore
  "nee akka bazaar lanja": [5, 5], // Your sister is a market whore
  "nee amma road lanja": [5, 5], // Your mother is a street whore
  "nee akka road lanja": [5, 5], // Your sister is a street whore

  // ========================================
  // === Extended Hyderabadi Dialect ===
  // ========================================
  "tera maa ki chut re bhai": [4, 4], // Your mother's pussy dude (Hyderabadi)
  "tera baap ka lauda re": [1, 4], // Your father's dick dude (Hyderabadi)
  "nakko bol re lanja kodaka": [5, 4], // Don't talk whore's son (Hyderabadi)
  "chal be lanja kodaka": [5, 4], // Get lost whore's son (Hyderabadi)
  "kya re lanja kodaka": [5, 4], // What whore's son (Hyderabadi)
  "bol na re modda": [4, 4], // Talk dick (Hyderabadi)
  "ek number ka lanja kodaka": [5, 4], // Number one whore's son (Hyderabadi)
  "seedha kar nakko toh denguthaa": [3, 5], // Straighten up or I'll fuck you (Hyderabadi)
  "kyun re erri puku": [1, 4], // Why stupid pussy (Hyderabadi)
  "abbe lanja kodaka": [5, 4], // Hey whore's son (Hyderabadi)
  "abbe erri puku": [1, 4], // Hey stupid pussy (Hyderabadi)
  "abbe modda": [4, 4], // Hey dick (Hyderabadi)
  "abbe sulli": [4, 4], // Hey dick (Hyderabadi alt)
  "abbe gudda": [3, 4], // Hey ass (Hyderabadi)
  "ek dum lanja kodaka": [5, 4], // Absolute whore's son (Hyderabadi)
  "mast lanja kodaka": [5, 4], // Great whore's son (Hyderabadi)
  "kaminey lanja kodaka": [3, 4], // Bastard whore's son (Hyderabadi)
  "harami lanja kodaka": [3, 4], // Bastard whore's son (Hyderabadi alt)
  "jhatu lanja kodaka": [5, 4], // Pubic whore's son (Hyderabadi)
  "besharam lanja kodaka": [5, 4], // Shameless whore's son (Hyderabadi)

  // ========================================
  // === Extended Rayalaseema Dialect ===
  // ========================================
  "nee amma ni dengey ra": [3, 5], // Fuck your mother (Rayalaseema)
  "nee akka ni dengey ra": [3, 5], // Fuck your sister (Rayalaseema)
  "pooku naakara": [4, 4], // Lick pussy (Rayalaseema)
  "gudda dengara": [3, 5], // Fuck ass (Rayalaseema)
  "modda gutara": [4, 4], // Bite dick (Rayalaseema)
  "modda naakara": [4, 4], // Lick dick (Rayalaseema)
  "lanja mukham ra needi": [5, 4], // Your face is a whore's (Rayalaseema)
  "dengey pothunna ra": [3, 5], // I'm going to fuck (Rayalaseema)
  "dengey vastunna ra": [3, 5], // I'm coming to fuck (Rayalaseema)
  "puku nakki ra": [4, 4], // Lick pussy (Rayalaseema alt)
  "gudda nakki ra": [3, 4], // Lick ass (Rayalaseema alt)
  "sulli kottara": [4, 4], // Beat the dick (Rayalaseema)
  "banda kottara": [4, 4], // Beat the dick (Rayalaseema alt)
  "tattalu ottara": [4, 4], // Beat the balls (Rayalaseema)
  "nee amma pukulo na modda": [4, 4], // My dick in your mother's pussy (Rayalaseema)
  "nee akka pukulo na modda": [4, 4], // My dick in your sister's pussy (Rayalaseema)
  "nee amma guddalo na modda": [4, 4], // My dick in your mother's ass (Rayalaseema)
  "nee akka guddalo na modda": [4, 4], // My dick in your sister's ass (Rayalaseema)
  "pooku dengey ra": [3, 5], // Fuck off (Rayalaseema)
  "gudda dengey ra": [3, 5], // Fuck off (Rayalaseema alt)

  // ========================================
  // === Extended Coastal Andhra Dialect ===
  // ========================================
  "nee amma ni dengutha babu": [3, 5], // I'll fuck your mother (Coastal Andhra)
  "nee akka ni dengutha babu": [3, 5], // I'll fuck your sister (Coastal Andhra)
  "lanja kodaka vaadu": [5, 4], // He is whore's son (Coastal Andhra)
  "lanja mukham vaadu": [5, 4], // He has whore's face (Coastal Andhra)
  "erri puku vaadu": [1, 4], // He is stupid pussy (Coastal Andhra)
  "modda puku vaadu": [4, 4], // He is dick pussy (Coastal Andhra)
  "sulli naakayi vaadu": [4, 4], // He licked dick (Coastal Andhra)
  "gudda ichchinayi vaadu": [3, 4], // He gave his ass (Coastal Andhra)
  "puku ichchinayi vaadu": [4, 4], // He gave his pussy (Coastal Andhra)
  "lanja gadiki dengey": [5, 5], // Fuck to the whore (Coastal Andhra)
  "nee amma mee intlo andari ki denguthundhi": [5, 5], // Your mother fucks everyone in your house (Coastal Andhra)
  "nee akka mee intlo andari ki denguthundhi": [3, 5], // Your sister fucks everyone in your house (Coastal Andhra)
  "nee pellam mee intlo andari ki denguthundhi": [3, 5], // Your wife fucks everyone in your house (Coastal Andhra)
  "ooru lo andari modda nee amma naakindhi": [4, 4], // Your mother licked everyone's dick in village (Coastal Andhra)
  "ooru lo andari modda nee akka naakindhi": [4, 4], // Your sister licked everyone's dick in village (Coastal Andhra)
  "erri modda nuvvu": [1, 4], // Stupid dick you (Coastal Andhra)
  "erri gudda nuvvu": [1, 4], // Stupid ass you (Coastal Andhra)
  "erri sulli nuvvu": [1, 4], // Stupid dick you (Coastal Andhra alt)
  "erri lanja nuvvu": [1, 4], // Stupid whore you (Coastal Andhra)
  "erri donga nuvvu": [1, 4], // Stupid thief you (Coastal Andhra)

  // ========================================
  // === Extended Telangana Dialect ===
  // ========================================
  "nee amma ni denguthaa gani": [3, 5], // I'll fuck your mother (Telangana)
  "nee akka ni denguthaa gani": [3, 5], // I'll fuck your sister (Telangana)
  "lanja kodaka gani nuvvu": [5, 4], // Whore's son you (Telangana)
  "erri puku gani nuvvu": [1, 4], // Stupid pussy you (Telangana)
  "modda gani nuvvu": [4, 4], // Dick you (Telangana)
  "dengey gani": [3, 5], // Fuck off (Telangana)
  "puku gani nuvvu": [4, 4], // Pussy you (Telangana)
  "gudda gani nuvvu": [3, 4], // Ass you (Telangana)
  "nee amma ki denguthaa baiti": [3, 5], // I'll fuck your mother (Telangana female)
  "lanja baiti nuvvu": [5, 4], // Whore you (Telangana female)
  "puku baiti nuvvu": [4, 4], // Pussy you (Telangana female)
  "dengey baiti": [3, 5], // Fuck off (Telangana female)
  "erri puku baiti": [1, 4], // Stupid pussy (Telangana female)
  "modda naaku baiti": [4, 4], // Lick dick (Telangana female)
  "gudda ivvu baiti": [3, 4], // Give ass (Telangana female)

  // ========================================
  // === Extended Body Part Combos ===
  // ========================================
  "pedda puku vaadu": [4, 3], // Big pussy guy
  "chinna modda vaadu": [4, 3], // Small dick guy
  "pedda gudda vaadu": [4, 3], // Big ass guy
  "chinna sulli vaadu": [4, 3], // Small dick guy (alt)
  "vankara modda vaadu": [4, 3], // Crooked dick guy
  "potti modda vaadu": [4, 3], // Short dick guy
  "guddi modda vaadu": [4, 3], // Blind dick guy
  "mottam modda vaadu": [4, 3], // Bald dick guy
  "laaavu puku vaadi": [1, 4], // Fat pussy girl
  "chhinna puku vaadi": [4, 3], // Small pussy girl
  "veepu gudda vaadi": [4, 3], // Wide ass girl
  "pedda gudda vaadi": [4, 3], // Big ass girl
  "పెద్ద పూకు వాడు": [4, 3], // Big pussy guy (Telugu script)
  "చిన్న మొడ్డ వాడు": [4, 3], // Small dick guy (Telugu script)
  "పెద్ద గుద్ద వాడు": [4, 3], // Big ass guy (Telugu script)
  "చిన్న సుల్లి వాడు": [4, 3], // Small dick guy (Telugu script alt)
  "వంకర మొడ్డ వాడు": [4, 3], // Crooked dick guy (Telugu script)
  "పొట్టి మొడ్డ వాడు": [4, 3], // Short dick guy (Telugu script)

  // ========================================
  // === Extended Evasion Spellings ===
  // ========================================
  "l4nj4": [5, 5], // Whore (evasion)
  "m0dd4": [4, 5], // Dick (evasion)
  "gudd4": [3, 5], // Ass (evasion)
  "sull1": [4, 5], // Dick (evasion)
  "3rr1 puku": [1, 5], // Stupid pussy (evasion)
  "l4nj4 k0d4k4": [5, 5], // Whore's son (evasion)
  "p00ku d3ng3y": [4, 5], // Pussy fuck off (evasion)
  "m0dd4 n44ku": [4, 5], // Lick dick (evasion)
  "gudd4 1vvu": [3, 5], // Give ass (evasion)
  "m@dda": [4, 5], // Dick (evasion)
  "p@@ku": [4, 5], // Pussy (evasion)
  "gudd@": [3, 5], // Ass (evasion)
  "d€ngey": [3, 5], // Fuck off (evasion)
  "sull!": [4, 5], // Dick (evasion)
  "err! puku": [1, 5], // Stupid pussy (evasion)
  "l@nja k0daka": [5, 5], // Whore's son (evasion)

  // ========================================
  // === Extended Emasculation/Impotence Insults ===
  // ========================================
  "నీ మొడ్డ లేవదు": [4, 4], // Your dick can't get up
  "నీ మొడ్డ పని చేయదు": [4, 4], // Your dick doesn't work
  "నీ మొడ్డ చచ్చింది": [5, 5], // Your dick died
  "నువ్వు నపుంసకుడివి": [1, 4], // You are impotent
  "నువ్వు హిజ్రా వి": [1, 4], // You are a hijra
  "నీ మొడ్డ పురుగు లాంటిది": [4, 4], // Your dick is like a worm
  "నీ మొడ్డ వేలు లాంటిది": [4, 4], // Your dick is like a finger
  "నీ మొడ్డ పుల్ల లాంటిది": [4, 4], // Your dick is like a stick
  "nee modda levadhu": [4, 4], // Your dick can't get up
  "nee modda pani cheyadhu": [4, 4], // Your dick doesn't work
  "nee modda chachchindhi": [5, 5], // Your dick died
  "nuvvu napunsakudivi": [1, 4], // You are impotent
  "nuvvu hijra vi": [1, 4], // You are a hijra
  "nee modda purugu laantidhi": [4, 4], // Your dick is like a worm
  "nee modda velu laantidhi": [4, 4], // Your dick is like a finger
  "nee modda pulla laantidhi": [4, 4], // Your dick is like a stick

  // ========================================
  // === Extended Scatological (Telugu) ===
  // ========================================
  "nee moham lo poyyisthaa": [3, 5], // I'll shit on your face
  "nee moham lo uthuruthaa": [3, 4], // I'll piss on your face
  "nee thindi lo poyyisthaa": [3, 5], // I'll shit in your food
  "nee thindi lo uthuruthaa": [3, 4], // I'll piss in your food
  "nee amma moham lo poyyisthaa": [3, 5], // I'll shit on your mother's face
  "nee akka moham lo poyyisthaa": [3, 5], // I'll shit on your sister's face
  "aavu peda vaadu": [3, 4], // Cow dung person
  "kukka peda vaadu": [3, 5], // Dog shit person
  "pandi peda vaadu": [3, 5], // Pig shit person
  "nee moham ki poyyi": [3, 5], // Shit to your face
  "nee moham ki mootram": [3, 4], // Piss to your face
  "poyyi thiney vaadu": [3, 5], // Shit eater
  "mootram thaagey vaadu": [3, 4], // Piss drinker
  "peeda thinney vaadu": [3, 4], // Fart sniffer
  "నీ మొహంలో పొయ్యిస్తా": [3, 5], // I'll shit on your face (script)
  "నీ మొహంలో ఉతురుతా": [3, 4], // I'll piss on your face (script)
  "నీ తిండిలో పొయ్యిస్తా": [3, 5], // I'll shit in your food (script)
  "నీ తిండిలో ఉతురుతా": [3, 4], // I'll piss in your food (script)
  "పొయ్యి తినే వాడు": [3, 5], // Shit eater (script)
  "మూత్రం తాగే వాడు": [3, 4], // Piss drinker (script)

  // ========================================
  // === Extended Animal Insults (Telugu) ===
  // ========================================
  "kukka dengey vaadu": [3, 5], // Dog fucker
  "pandi dengey vaadu": [3, 5], // Pig fucker
  "gadidha dengey vaadu": [3, 5], // Donkey fucker
  "meka dengey vaadu": [3, 5], // Goat fucker
  "aavu dengey vaadu": [3, 5], // Cow fucker
  "gurram dengey vaadu": [3, 5], // Horse fucker
  "kothi dengey vaadu": [3, 5], // Monkey fucker
  "eluka dengey vaadu": [3, 5], // Rat fucker
  "paamu dengey vaadu": [3, 5], // Snake fucker
  "kukka lanja kodaka": [5, 4], // Dog whore's son
  "pandi lanja kodaka": [5, 4], // Pig whore's son
  "gadidha lanja kodaka": [5, 4], // Donkey whore's son
  "meka lanja kodaka": [5, 4], // Goat whore's son
  "kothi lanja kodaka": [5, 4], // Monkey whore's son
  "kukka bachcha": [1, 4], // Dog's child
  "pandi bachcha": [1, 4], // Pig's child
  "gadidha bachcha": [1, 4], // Donkey's child
  "paamu bachcha": [1, 4], // Snake's child
  "eluka bachcha": [1, 4], // Rat's child
  "కుక్క దెంగే వాడు": [3, 5], // Dog fucker (script)
  "పంది దెంగే వాడు": [3, 5], // Pig fucker (script)
  "గాడిద దెంగే వాడు": [3, 5], // Donkey fucker (script)
  "మేక దెంగే వాడు": [3, 5], // Goat fucker (script)
  "ఆవు దెంగే వాడు": [3, 5], // Cow fucker (script)
  "గుర్రం దెంగే వాడు": [3, 5], // Horse fucker (script)
  "కోతి దెంగే వాడు": [3, 5], // Monkey fucker (script)

  // ========================================
  // === Extended Abuse Phrases (Telugu) ===
  // ========================================
  "nee jeevithaniki viluva ledhu": [3, 4], // Your life has no value
  "nuvvu puttakunda unte bagundedhi": [3, 4], // It'd be better if you weren't born
  "nee amma nee nanna ni eragadhu": [1, 4], // Your mother doesn't know your father
  "nee nanna evaro evariki teliyadhu": [1, 4], // Nobody knows who your father is
  "nee amma nee ni dustbin lo vesinattu": [3, 4], // Your mother threw you in dustbin
  "nee amma nee ni road meeda vesinattu": [3, 4], // Your mother threw you on the road
  "ninnu evaru kavaalanu koru": [3, 4], // Nobody wants you
  "nee moham chuste manushulu thukuthaaru": [3, 4], // People spit seeing your face
  "nee peru vinte manushulu navvuthaaru": [3, 4], // People laugh hearing your name
  "nee family lo andaru lanjalu": [5, 4], // Everyone in your family are whores
  "nee family lo andaru lanja kodakalu": [5, 4], // Everyone in your family are whore's sons
  "nee vaamsam lo andaru dengulodu": [3, 5], // Everyone in your lineage are fuckers
  "నీ జీవితానికి విలువ లేదు": [3, 4], // Your life has no value (script)
  "నువ్వు పుట్టకుండా ఉంటే బాగుండేది": [3, 4], // Better if you weren't born (script)
  "నీ అమ్మ నీ నాన్న ని ఎరగదు": [1, 4], // Your mother doesn't know your father (script)
  "నిన్ను ఎవరూ కావాలని కోరు": [3, 4], // Nobody wants you (script)
  "నీ మొహం చూస్తే మనుషులు తుక్కుతారు": [3, 4], // People spit seeing your face (script)
  "నీ పేరు వింటే మనుషులు నవ్వుతారు": [3, 4], // People laugh hearing your name (script)
  "నీ ఫ్యామిలీ లో అందరూ లంజలు": [5, 4], // Everyone in your family are whores (script)
  "నీ వంశంలో అందరూ లంజ కొడకలు": [5, 4], // Everyone in your lineage are whore's sons (script)

  // ========================================
  // === Extended Caste-Based Slurs (Telugu) ===
  // ========================================
  "maala lanja kodaka": [5, 4], // Mala (caste) whore's son
  "madiga lanja kodaka": [5, 4], // Madiga (caste) whore's son
  "chakali lanja kodaka": [5, 4], // Washerman (caste) whore's son
  "mangali lanja kodaka": [5, 4], // Barber (caste) whore's son
  "kummari lanja kodaka": [5, 4], // Potter (caste) whore's son
  "eenadi lanja kodaka": [5, 4], // Low-caste whore's son
  "dasari lanja kodaka": [5, 4], // Dasari (caste) whore's son
  "maala erri puku": [1, 4], // Mala stupid pussy
  "madiga erri puku": [1, 4], // Madiga stupid pussy
  "chakali erri puku": [1, 4], // Washerman stupid pussy
  "mangali erri puku": [1, 4], // Barber stupid pussy
  "keencha jaathi vaadu": [5, 4], // Low caste person
  "neecha jaathi vaadu": [5, 4], // Low caste person (alt)
  "మాల లంజ కొడక": [5, 4], // Mala whore's son (script)
  "మాదిగ లంజ కొడక": [5, 4], // Madiga whore's son (script)
  "చాకలి లంజ కొడక": [5, 4], // Washerman whore's son (script)
  "మంగలి లంజ కొడక": [5, 4], // Barber whore's son (script)
  "కీంచ జాతి వాడు": [5, 4], // Low caste person (script)
  "నీచ జాతి వాడు": [5, 4], // Low caste person (script alt)

  // ========================================
  // === Extended Internet/Gaming Telugu ===
  // ========================================
  "nuvvu noob erri puku batch ra": [1, 4], // You noob stupid pussy batch
  "nuvvu hacker lanja kodaka ra": [5, 4], // You hacker whore's son
  "nuvvu camper erri puku ra": [1, 4], // You camper stupid pussy
  "nuvvu feeder lanja kodaka ra": [5, 4], // You feeder whore's son
  "nuvvu troll erri puku ra": [1, 4], // You troll stupid pussy
  "nuvvu toxic lanja kodaka ra": [5, 4], // You toxic whore's son
  "nuvvu griefing erri puku ra": [1, 4], // You griefing stupid pussy
  "nuvvu afk lanja kodaka ra": [5, 4], // You AFK whore's son
  "nuvvu stream sniper erri puku ra": [1, 4], // You stream sniper stupid pussy
  "game vaddu dengey lanja kodaka": [5, 4], // Leave game whore's son
  "uninstall cheyyi ra erri modda": [1, 4], // Uninstall stupid dick
  "delete cheyyi ra erri modda": [1, 4], // Delete stupid dick
  "lag ki dengey ra": [3, 5], // Fuck the lag
  "ping ki dengey ra": [3, 5], // Fuck the ping
  "server ki dengey ra": [3, 5], // Fuck the server
};
const teluguBadWords: Record<string, { s: number; c: number }> = {};
for (const [k, [s, c]] of Object.entries(_d)) {
    teluguBadWords[k] = { s, c };
}
export default teluguBadWords;

/**
 * Bengali profanity words list
 * Contains common profanities in both Bengali script and Roman transliteration
 * ⚠️ Warning: This file contains explicit language in Bengali
 */
const _d: Record<string, [number, number]> = {
  // ========================================
  // === Bengali Script Profanities ===
  // ========================================
  "বাল": [3, 4], // Bal (pubic hair, used as insult)
  "কুত্তার বাচ্চা": [3, 4], // Kuttar bachcha (son of a dog)
  "হারামজাদা": [3, 4], // Haramjada (bastard)
  "শালা": [3, 4], // Shala (brother-in-law, used as insult)
  "শালি": [2, 4], // Shali (female version)
  "মাগি": [5, 4], // Magi (prostitute)
  "বেশ্যা": [5, 4], // Beshya (prostitute)
  "খানকি": [5, 4], // Khanki (prostitute)
  "চোদা": [3, 4], // Choda (f**k)
  "চুদি": [3, 4], // Chudi (f**k)
  "চুদা": [3, 4], // Chuda (f**k)
  "মাদারচোদ": [5, 5], // Madarchod (motherf**ker)
  "মাগীর ছেলে": [5, 4], // Magir chele (son of a prostitute)
  "কুত্তা": [2, 4], // Kutta (dog)
  "হারামী": [2, 4], // Harami (bastard)
  "বোকাচোদা": [1, 4], // Bokachoda (stupid f**ker)
  "গাণ্ডু": [3, 4], // Gandu (arse)
  "ভোদাই": [1, 4], // Bhodai (idiot/fool)
  "ভোদা": [4, 4], // Bhoda (vagina, used as insult)
  "পাগল": [1, 3], // Pagol (mad, less severe)

  // ========================================
  // === Roman Script Transliterations ===
  // ========================================
  // "bal": [3, 4], // pubic hair (insult) — commented out: collides with English "ball", "balance"
  "kuttar bachcha": [3, 5], // son of a dog
  "kutar bacha": [3, 5], // son of a dog (variant)
  "haramjada": [2, 4], // bastard
  "shala": [2, 4], // brother-in-law (insult)
  "shali": [2, 4], // sister-in-law (insult)
  // "magi": [5, 5], // prostitute — false positive: "the three Magi", Magi noodles brand
  "beshya": [5, 5], // prostitute
  "khanki": [5, 5], // prostitute
  "choda": [3, 5], // f**k
  "chudi": [3, 5], // f**k
  "chuda": [3, 5], // f**k
  "madarchod": [5, 5], // motherf**ker
  "magir chele": [5, 5], // son of a prostitute
  "kutta": [2, 4], // dog (insult)
  "harami": [2, 4], // bastard
  "bokachoda": [1, 5], // stupid f**ker
  "gandu": [3, 4], // arse
  "bhodai": [1, 5], // idiot/fool
  "bhoda": [4, 5], // vagina (insult)
  "pagol": [1, 3], // mad/crazy

  // Common variations and combinations
  "shalabaj": [3, 4], // rascal
  "maderchod": [5, 5], // motherf**ker (variant)
  "madarchood": [5, 5], // motherf**ker (variant)
  "khankimagi": [5, 4], // prostitute (compound)
  "kuttar baccha": [3, 4], // son of a dog (variant)
  "shuorer baccha": [3, 4], // Son of a pig
  "shuor": [3, 4], // Pig
  "kamainna": [3, 4], // Bastard
  "hoga": [3, 4], // Anus (vulgar)
  "bessa": [5, 4], // prostitute (variant)
  "bessha": [5, 4], // prostitute (variant)
  "nongra": [1, 3], // Dirty (used as insult)
  "noshto": [1, 3], // Spoiled/corrupt
  "khankirpola": [5, 4], // Son of a prostitute
  "kuttachoda": [3, 4], // Dog f**ker

  // Common misspellings and variations
  "sala": [2, 4], // brother-in-law (insult variant)
  "salla": [2, 4], // brother-in-law (insult variant)
  "hoga mara": [3, 5], // f**k the arse
  "chudna": [3, 5], // to f**k
  "chudani": [3, 5], // female f**ker
  "chood": [3, 5], // f**k (variant)
  "chodon": [3, 5], // f**king
  "madarchodh": [3, 5], // motherf**ker (variant)

  // Additional Bengali profanity
  "baler baal": [3, 4], // Pubic hair insult
  "banchod": [3, 5], // Sister fucker
  "banchot": [3, 4], // Variant
  "beyadob": [1, 3], // Disrespectful (insult)
  "bichi": [4, 4], // Testicle
  "boga": [4, 4], // Dick (Sylheti dialect)
  "bonchod": [3, 4], // Variant of banchod
  "chudir bhai": [3, 5], // Brother of a fuck (insult)
  "dhonerbal": [3, 4], // Pubic hair (insult)
  "fatichuda": [3, 5], // Get fucked (vulgar)
  "gadha": [1, 3], // Donkey (insult)
  "guder bal": [3, 4], // Pubic hair (vulgar)
  "guder magi": [3, 4], // Vulgar compound
  "gudmarani": [3, 5], // Ass-fucker
  "heda": [3, 5], // Shit (dialectal)
  "khanki magi": [5, 4], // Prostitute (compound)
  "kutta ka bachcha": [3, 4], // Son of a dog
  "langta": [3, 4], // Naked / shameless
  "maagi": [3, 4], // Variant of magi
  "malaun": [3, 4], // Slur for non-Muslims (offensive)
  "michke": [3, 4], // Sly/sneaky (insult)
  "nangto": [3, 4], // Naked
  "poodmarani": [3, 5], // Ass fucker (variant)
  "shuar": [3, 4], // Pig (variant)
  "thor kheye mor": [5, 5], // Die eating a kick (insult)
  "tor mayer boda": [4, 4], // Your mother's pussy

  // Bengali script additions
  "বাঞ্চোদ": [3, 4], // Banchod (sister f**ker)
  "বিচি": [4, 4], // Bichi (testicle)
  "ধোনেরবাল": [3, 4], // Pubic hair
  "গুদমারানি": [3, 5], // Ass-fucker
  "খানকি মাগি": [5, 4], // Prostitute compound
  "তোর মায়ের বোদা": [4, 4], // Your mother's pussy
  "শূয়রের বাচ্চা": [3, 4], // Son of a pig
  "নাঙ্গতা": [3, 4], // Naked
  "গাধা": [1, 3], // Donkey
  "লাঙ্গটা": [3, 4], // Naked/shameless

  // More Bengali profanity - Roman script
  "baal choda": [3, 4], // pubic hair f**ker
  "baler putki": [3, 4], // pubic hair's arse
  "banchod sala": [3, 4], // sister f**ker rascal
  "boga chusbi": [4, 4], // will you suck the dick
  "boga kha": [4, 4], // eat the dick
  "bokachod": [1, 4], // stupid f**ker (variant)
  "boro magi": [5, 4], // big prostitute
  "chagol": [1, 3], // goat (insult)
  "chod khankir chele": [5, 4], // f**k the prostitute's son
  "chodna magi": [5, 4], // f**kable prostitute
  "chudir bap": [1, 4], // father of a f**k (insult)
  "chudir pola": [3, 4], // son of a f**k
  "dhon": [4, 4], // penis
  "faaltu": [1, 3], // worthless/useless
  "gaar marani": [3, 4], // arse f**ker
  "gud mara": [4, 4], // f**k the pussy
  "haramzadi": [3, 4], // female bastard
  "hoga marao": [3, 4], // get your arse f**ked
  "jhantu": [3, 4], // pubic hair (insult)
  "khankir pola": [5, 4], // son of a prostitute
  "khanki maal": [5, 4], // prostitute goods
  "kuttir bachcha": [3, 4], // son of a bitch
  "magir pola": [5, 4], // prostitute's son
  "magir gude": [5, 4], // prostitute's pussy
  "magi choda": [5, 4], // prostitute f**ker
  "mama choda": [3, 4], // uncle f**ker
  "matha kharap": [1, 3], // crazy/mental
  "nangta kutta": [3, 4], // naked dog
  "nirlojjo": [1, 3], // shameless
  "potita": [5, 4], // prostitute (formal)
  "putki": [3, 4], // arse
  "putki mara": [3, 4], // f**k the arse
  "putki marao": [3, 4], // get your arse f**ked
  "rakhail": [3, 5], // kept woman/mistress
  "shala badmash": [3, 4], // rascal scoundrel
  "shalar pola": [3, 4], // rascal's son
  "shuorer pola": [3, 4], // pig's son
  "thobra": [1, 4], // ugly face
  "tor baaper": [1, 4], // your father's (start of insult)
  "tor mayer gud": [4, 4], // your mother's pussy
  "tor putki marum": [3, 4], // I'll f**k your arse
  "baal chhire": [3, 4], // ripping pubic hair (insult)
  "chutia": [1, 5], // idiot/fool (vulgar)
  "chodanir beta": [3, 4], // son of a f**ker

  // Sylheti dialect
  "fua": [3, 4], // f**k (Sylheti)
  "fua de": [3, 4], // give a f**k (Sylheti)
  "fua kha": [3, 4], // eat a f**k (Sylheti)
  "boga khaise": [4, 4], // ate the dick (Sylheti)
  "futki": [3, 4], // arse (Sylheti)
  "futki mara": [3, 4], // f**k the arse (Sylheti)
  "xala": [3, 4], // brother-in-law insult (Sylheti variant)
  "mainka": [3, 4], // mother's (Sylheti insult)
  "khanki rand": [5, 4], // prostitute whore

  // More Bengali script
  "ধোন": [4, 4], // penis
  "পুটকি": [3, 4], // arse
  "পুটকি মারা": [3, 4], // f**k the arse
  "ছাগল": [1, 3], // goat (insult)
  "পতিতা": [5, 4], // prostitute (formal)
  "মাগির পোলা": [5, 4], // prostitute's son
  "মাগির গুদে": [5, 4], // prostitute's pussy
  "চোদনা মাগি": [5, 4], // f**kable prostitute
  "খানকির পোলা": [5, 4], // son of a prostitute
  "শালার পোলা": [3, 4], // rascal's son
  "তোর পুটকি মারুম": [3, 4], // I'll f**k your arse
  "তোর মায়ের গুদ": [4, 4], // your mother's pussy
  "নিরলজ্জ": [1, 3], // shameless
  "হারামজাদি": [3, 4], // female bastard
  "বোকাচোদ": [1, 4], // stupid f**ker
  "চুদির বাপ": [1, 4], // father of a f**k (insult)
  "বড় মাগি": [5, 4], // big prostitute
  "ফালতু": [1, 3], // worthless/useless
  "মাথা খারাপ": [1, 3], // crazy/mental
  "থোবড়া": [1, 4], // ugly face
  "রাখাল": [3, 4], // kept woman/mistress
  "চুদির পোলা": [3, 4], // son of a f**k
  "গুদ মারা": [4, 4], // f**k the pussy
  "নাঙ্গটা কুত্তা": [3, 4], // naked dog

  // ========================================
  // === Extended Bengali Profanity (Roman) ===
  // ========================================
  "baler bal": [3, 4], // Hair of pubic hair (extremely worthless)
  "baler chele": [3, 4], // Son of pubic hair
  "banchoder bachcha": [3, 5], // Sister fucker's child
  "bichi chipa": [4, 4], // Testicle squeeze
  "bichi mara": [4, 4], // Hit the testicles
  "bichi nosto": [4, 4], // Ruined testicles
  "boga chosha": [4, 4], // Dick sucker
  "boga chushbi": [4, 4], // Will you suck the dick
  "boga dhor": [4, 4], // Hold the dick
  "boga khabo": [4, 4], // I'll eat the dick
  "boga tana": [4, 4], // Pull the dick
  "bon choda": [3, 5], // Sister fucker (variant)
  "bonchoda sala": [3, 4], // Sister fucker bastard
  "bore dibo": [3, 4], // Will shove in
  "boro boga": [4, 4], // Big dick
  "boro gud": [4, 4], // Big pussy
  "boro putki": [3, 4], // Big ass
  "chal hoga mara": [3, 5], // Go fuck the ass
  "choda kha": [3, 5], // Eat fuck (insult)
  "chodani magi": [5, 5], // Fuckable prostitute (variant)
  "chodna sal": [3, 5], // Fucking rascal
  "chodon lag": [3, 5], // Start fucking
  "chudbo": [3, 5], // Will fuck
  "chudi tor maa": [3, 5], // Fuck your mother
  "chudir ma": [3, 5], // Mother of a fuck
  "dhar bichi": [4, 4], // Hold the testicle
  "dhon chaata": [4, 4], // Dick licker
  "dhon chosa": [4, 4], // Dick sucker (variant)
  "dhoner baal chele": [3, 4], // Son of a pubic hair (insult)
  "dhon khada": [4, 4], // Erect penis
  "dhon mara": [4, 4], // Dick hit
  "dhon tana": [4, 4], // Dick pull
  "fatichod": [3, 5], // Get-fucked (variant)
  "gabbu": [3, 4], // Stinky (insult)
  "gaar mara": [3, 5], // Fuck the ass (variant)
  "gaar marani sala": [3, 4], // Ass-fucker bastard
  "gorom gud": [4, 4], // Hot pussy (vulgar)
  "gude dhon dhukao": [4, 4], // Put dick in pussy
  "gud faata": [4, 4], // Pussy torn
  "guder bal chele": [4, 4], // Son of a pussy hair
  "guder ras": [4, 4], // Pussy juice (vulgar)
  "hoga boro": [3, 4], // Big anus
  "hoga choda": [3, 5], // Anus fucker
  "hoga dhon dhukao": [4, 4], // Put dick in anus
  "hoga faata": [3, 4], // Anus torn
  "hogay dhon": [4, 4], // Dick in anus
  "jaat magi": [5, 4], // Caste whore (insult)
  "jhantu sala": [3, 4], // Pubic-haired bastard
  "khanki randi": [5, 4], // Prostitute whore (compound)
  "khanki sali": [5, 4], // Prostitute sister-in-law
  "khanki tor maa": [5, 4], // Your mother the prostitute
  "kuttachod sala": [3, 4], // Dog-fucker bastard
  "kuttar bal": [3, 4], // Dog's hair (worthless)
  "langta magi": [5, 4], // Naked prostitute
  "maa baba choda": [3, 5], // Fuck the parents
  "maa choda": [5, 5], // Mother fucker
  "maa chudi": [5, 5], // Mother fucked
  "maa ke chod": [3, 5], // Fuck the mother
  "magir bal": [5, 4], // Prostitute's hair
  "magir chele hoga": [5, 4], // Prostitute's son's anus
  "magi sali": [5, 4], // Prostitute sister-in-law
  "mairi": [3, 4], // Oh hell (expletive)
  "nongra kutta": [3, 4], // Dirty dog
  "noshto magi": [5, 4], // Corrupt prostitute
  "ore sala": [3, 4], // Hey bastard
  "pandir chele": [3, 4], // Pimp's son
  "patni choda": [3, 5], // Wife fucker
  "poda": [3, 4], // Burn/get lost (insult)
  "poda sala": [3, 4], // Get lost bastard
  "shala badmaish": [3, 4], // Rascal hooligan (variant)
  "shala bichi": [4, 4], // Rascal testicle
  "shala chodna": [3, 5], // Rascal fuckable
  "shalapola": [3, 4], // Rascal's boy
  "shala tor maa": [3, 4], // Rascal your mother
  "shoitan": [1, 3], // Satan (insult)
  "shuor choda": [3, 5], // Pig fucker
  "shuorer bal": [3, 4], // Pig's hair (worthless)
  "shuorer bachcha sala": [3, 4], // Pig's son bastard
  "tor baap choda": [1, 4], // Your father's fucker
  "tor baaper bal": [1, 4], // Your father's hair
  "tor baaper bichi": [1, 4], // Your father's testicle
  "tor baaper dhon": [1, 4], // Your father's dick
  "tor baaper hoga": [1, 4], // Your father's anus
  "tor bon choda": [3, 5], // Your sister's fucker
  "tor bon magi": [5, 4], // Your sister the prostitute
  "tor maa chuda": [3, 5], // Your mother got fucked
  "tor maa ke chode": [3, 5], // Fuck your mother
  "tor maa magi": [5, 4], // Your mother is a prostitute
  "tor mayer bichi": [4, 4], // Your mother's testicle
  "tor mayer dhon": [4, 4], // Your mother's dick
  "tor mayer hoga": [3, 4], // Your mother's anus
  "tor putki fatar": [3, 4], // Your ass will tear

  // ========================================
  // === Sylheti Dialect Extended ===
  // ========================================
  "fuainna": [3, 5], // Fucking (Sylheti)
  "fua tor maa": [3, 5], // Fuck your mother (Sylheti)
  "fua khai laise": [3, 5], // Got fucked (Sylheti)
  "futki maira": [3, 5], // Ass fucker (Sylheti)
  "fua de maa": [3, 5], // Give a fuck mother (Sylheti)
  "xalar fua": [3, 5], // Rascal's fuck (Sylheti)
  "boga xusbi": [4, 4], // Will suck dick (Sylheti variant)
  "fuain": [3, 5], // Fucking (Sylheti variant)
  "haiga": [3, 4], // Anus (Sylheti)
  "haiga mara": [3, 5], // Fuck the anus (Sylheti)
  "huinnya": [3, 5], // Fucking (Sylheti variant)
  "khanki xala": [5, 4], // Prostitute rascal (Sylheti)
  "kutta xala": [3, 4], // Dog bastard (Sylheti)
  "mainka fua": [3, 5], // Mother's fuck (Sylheti)
  "mainka gut": [4, 4], // Mother's pussy (Sylheti)
  "mainka boga": [4, 4], // Mother's dick (Sylheti)
  "xalar pola": [3, 4], // Rascal's son (Sylheti)
  "xalar boga": [4, 4], // Rascal's dick (Sylheti)
  "tar mainka": [3, 4], // Your mother's (Sylheti insult)
  "futki nakki": [3, 4], // Ass licker (Sylheti)

  // ========================================
  // === Chittagonian Dialect ===
  // ========================================
  "foinya": [3, 5], // Fucker (Chittagonian)
  "foinya de": [3, 5], // Give a fuck (Chittagonian)
  "maayre foinya": [5, 5], // Mother fucker (Chittagonian)
  "gaand maira": [3, 5], // Ass fucker (Chittagonian)
  "boga foinya": [4, 5], // Dick fucker (Chittagonian)
  "futki foinya": [3, 5], // Ass fucker (Chittagonian variant)
  "kutta foinya": [3, 5], // Dog fucker (Chittagonian)
  "magi foinya": [5, 5], // Prostitute fucker (Chittagonian)
  "hazeer baizza": [3, 4], // Pig's son (Chittagonian)
  "hazeer foinya": [3, 5], // Pig fucker (Chittagonian)
  "tore maayre": [3, 4], // Your mother's (Chittagonian insult)
  "badaima": [3, 4], // Scoundrel (Chittagonian)
  "dangor boga": [4, 4], // Big dick (Chittagonian)
  "dangor futki": [3, 4], // Big ass (Chittagonian)
  "maagir foinya": [5, 5], // Prostitute fucker (Chittagonian)
  "shala foinya": [3, 5], // Rascal fucker (Chittagonian)
  "tor abba": [1, 4], // Your father (Chittagonian insult starter)
  "tor abbar boga": [1, 4], // Your father's dick (Chittagonian)
  "khanki foinya": [5, 5], // Prostitute fucker (Chittagonian)
  "nangta foinya": [3, 5], // Naked fucker (Chittagonian)

  // ========================================
  // === More Bengali Script Additions ===
  // ========================================
  "বালের বাল": [3, 4], // Baler bal (hair of pubic hair)
  "বালের ছেলে": [3, 4], // Baler chele (son of pubic hair)
  "বোগা চোষা": [4, 4], // Boga chosha (dick sucker)
  "বোগা ধর": [4, 4], // Boga dhor (hold the dick)
  "বোন চোদা": [3, 5], // Bon choda (sister fucker)
  "চোদ খা": [3, 5], // Chod kha (eat fuck)
  "চুদবো": [3, 5], // Chudbo (will fuck)
  "চুদি তোর মা": [3, 5], // Chudi tor maa (fuck your mother)
  "ধোন চাটা": [4, 4], // Dhon chaata (dick licker)
  "ধোন চোষা": [4, 4], // Dhon chosa (dick sucker)
  "ধোন খাড়া": [4, 4], // Dhon khada (erect penis)
  "গুদে ধোন ঢোকাও": [4, 4], // Gude dhon dhukao (put dick in pussy)
  "গুদ ফাটা": [4, 4], // Gud faata (pussy torn)
  "গুদের রস": [4, 4], // Guder ras (pussy juice)
  "হোগা চোদা": [3, 5], // Hoga choda (anus fucker)
  "খানকি রান্ডী": [5, 4], // Khanki randi (prostitute whore)
  "খানকি তোর মা": [5, 4], // Khanki tor maa (your mother prostitute)
  "মা চোদা": [5, 5], // Maa choda (mother fucker)
  "মা চুদি": [5, 5], // Maa chudi (mother fucked)
  "নোংরা কুত্তা": [3, 4], // Nongra kutta (dirty dog)
  "ওরে শালা": [3, 4], // Ore sala (hey bastard)
  "পোড়া": [3, 4], // Poda (burn/get lost)
  "পোড়া শালা": [3, 4], // Poda sala (get lost bastard)
  "শয়তান": [1, 3], // Shoitan (satan)
  "শূয়র চোদা": [3, 5], // Shuor choda (pig fucker)
  "তোর বাপ চোদা": [1, 4], // Tor baap choda (your father's fucker)
  "তোর বাপের বাল": [1, 4], // Tor baaper bal (your father's hair)
  "তোর বাপের ধোন": [1, 4], // Tor baaper dhon (your father's dick)
  "তোর বোন চোদা": [3, 5], // Tor bon choda (your sister's fucker)
  "তোর বোন মাগি": [5, 4], // Tor bon magi (your sister prostitute)
  "তোর মা চুদা": [3, 5], // Tor maa chuda (your mother got fucked)
  "তোর মা মাগি": [5, 4], // Tor maa magi (your mother is prostitute)
  "তোর মায়ের ধোন": [4, 4], // Tor mayer dhon (your mother's dick)
  "তোর পুটকি ফাটর": [1, 4], // Tor putki fatar (your ass will tear)
  "ফোইন্যা": [3, 5], // Foinya (fucker - Chittagonian)
  "হাজির বাইজ্যা": [3, 4], // Hazeer baizza (pig's son - Chittagonian)
  "বদাইমা": [3, 4], // Badaima (scoundrel - Chittagonian)
  "ফুয়াইন্না": [3, 5], // Fuainna (fucking - Sylheti)
  "হাইগা": [3, 4], // Haiga (anus - Sylheti)
  "হাইগা মারা": [3, 5], // Haiga mara (fuck anus - Sylheti)

  // ========================================
  // === Internet Slang (Bengali Speakers) ===
  // ========================================
  "magi sala": [5, 4], // Prostitute rascal (texting)
  "bkchd": [2, 3], // Abbreviation for bokachoda
  "mchd": [5, 5], // Abbreviation for madarchod
  "bnchd": [2, 3], // Abbreviation for banchod
  "khankir baccha": [5, 4], // Son of a prostitute (texting)
  "magir put": [5, 4], // Prostitute's son (texting)
  "bal fela": [2, 3], // Throw pubic hair (worthless)
  "guder chul": [4, 3], // Pussy hair (variant)
  "shala mc": [5, 5], // Rascal motherfucker
  "magi mc": [5, 5], // Prostitute motherfucker
  "bokachoda sala": [3, 4], // Stupid fucker bastard
  "chod toke": [3, 5], // Fuck you
  "amar boga kha": [4, 3], // Eat my dick
  "tor gude amar dhon": [4, 3], // My dick in your pussy
  "chup kor kuttar baccha": [2, 3], // Shut up son of a dog
  "tui ekta magi": [5, 4], // You are a prostitute
  "tui ekta kutta": [2, 3], // You are a dog
  "matha nosto": [2, 3], // Mind corrupt (crazy)
  "nirlojjo magi": [5, 4], // Shameless prostitute
  "nirlojjo kutta": [2, 3], // Shameless dog

  // ========================================
  // === More Romanized Bengali Profanity ===
  // ========================================
  "bal chushi": [3, 5], // Pubic hair sucker
  "baler chudi": [3, 5], // Pubic hair's fuck
  "bichi chushi": [4, 5], // Testicle sucker
  "boga dhukao": [4, 5], // Insert dick
  "boga khabi": [4, 5], // Will you eat dick
  "boga size": [4, 5], // Dick size (insult)
  "bon ke chod": [3, 5], // Fuck the sister
  "bonchod harami": [3, 5], // Sister fucker bastard
  "boro bichi": [4, 5], // Big testicle
  "chagol choda": [3, 5], // Goat fucker
  "choda tor baap": [1, 5], // Fuck your father
  "choder bachcha": [3, 5], // Fucker's child
  "chodi tor bon": [3, 5], // Fucked your sister
  "chudani sala magi": [5, 5], // Female fucker rascal prostitute
  "chudir ma ba": [1, 5], // Mother father of fuck
  "dhon chusha": [4, 5], // Dick sucked
  "dhon lamba": [4, 5], // Long dick (insult)
  "dhon mota": [1, 5], // Fat dick (insult)
  "dhoner aga": [4, 5], // Tip of dick
  "dhoner chosa": [4, 5], // Dick sucking
  "gabli": [1, 5], // Ugly (insult)
  "gaar chata": [3, 5], // Ass licker
  "gaar fata": [3, 5], // Ass torn
  "gaar mairbi": [3, 5], // Will fuck your ass
  "gorom boga": [4, 5], // Hot dick
  "gud chata": [4, 5], // Pussy licker
  "gud khabo": [4, 5], // Will eat pussy
  "gud theke baire aye": [4, 5], // Come out of the pussy (insult)
  "guder pani": [4, 5], // Pussy water
  "gudhkhana": [3, 5], // Ass place (vulgar)
  "heda kha": [3, 5], // Eat shit
  "hogay lathi": [3, 5], // Stick in anus
  "jaat khanki": [5, 5], // Caste prostitute
  "khanki sala bonchod": [5, 5], // Prostitute rascal sister fucker
  "khanki magi tor maa": [5, 5], // Your mother is a prostitute whore
  "kuttar gaar": [3, 5], // Dog's ass
  "kuttar boga": [4, 5], // Dog's dick
  "lathhi mar": [3, 5], // Beat with stick
  "maal sala": [3, 5], // Hot goods bastard (objectifying)
  "magi chodar bachcha": [5, 5], // Prostitute fucker's child
  "magir futki": [5, 5], // Prostitute's ass
  "nongra sala": [3, 5], // Dirty rascal
  "oshlil": [3, 5], // Obscene
  "pandir magi": [5, 5], // Pimp's prostitute
  "sala baal": [3, 5], // Rascal pubic hair
  "sala boga khor": [4, 5], // Rascal dick eater
  "sala khanki chod": [5, 5], // Rascal prostitute fucker
  "sala magi chod": [5, 5], // Rascal prostitute fucker (variant)
  "shoitan sala": [3, 5], // Satan rascal
  "shuorer gaar": [3, 5], // Pig's ass
  "shuorer boga": [4, 5], // Pig's dick
  "thukra magi": [5, 5], // Spittle prostitute (disgusting)
  "tor baaper gaar": [1, 5], // Your father's ass
  "tor baaper putki": [1, 5], // Your father's anus
  "tor bon khanki": [5, 5], // Your sister is a prostitute
  "tor bon maal": [3, 5], // Your sister is hot goods (objectifying)
  "tor gude boga": [4, 5], // Dick in your pussy
  "tor ma beshya": [5, 5], // Your mother is a prostitute
  "tor ma randi": [5, 5], // Your mother is a whore
  "tor maa ke chudum": [3, 5], // I'll fuck your mother
  "tor mayer futki": [3, 5], // Your mother's ass
  "tor mayer putki": [3, 5], // Your mother's anus
  "voda": [4, 5], // Vagina (variant)
  "vodai": [4, 5], // Vagina person (insult)

  // ========================================
  // === Banglish (Bengali-English Mix) ===
  // ========================================
  "fucking bokachoda": [1, 4], // Fucking stupid fucker
  "bloody shala": [3, 4], // Bloody rascal
  "damn khanki": [5, 4], // Damn prostitute
  "fucking magi": [5, 5], // Fucking prostitute
  "shit magi": [5, 5], // Shit prostitute
  "asshole gandu": [3, 4], // Asshole (Banglish)
  "bastard haramjada": [3, 4], // Bastard (Banglish)
  "bitch magi": [5, 4], // Bitch prostitute (Banglish)
  "son of a magi": [5, 4], // Son of a prostitute (Banglish)
  "stupid bokachoda": [1, 4], // Stupid fucker (Banglish)
  "shut up shala": [3, 4], // Shut up rascal (Banglish)
  "fuck off shala": [3, 5], // Fuck off rascal (Banglish)
  "die shala": [5, 5], // Die rascal (Banglish)
  "ugly magi": [1, 4], // Ugly prostitute (Banglish)
  "cheap khanki": [5, 4], // Cheap prostitute (Banglish)
  "dirty nongra kutta": [3, 4], // Dirty dirty dog (Banglish)
  "loser bokachoda": [1, 4], // Loser stupid fucker (Banglish)
  "idiot sala": [1, 4], // Idiot rascal (Banglish)
  "piece of shit shala": [3, 5], // Piece of shit rascal (Banglish)
  "useless faaltu": [3, 4], // Useless worthless (Banglish)
  "disgusting nongra": [3, 4], // Disgusting dirty (Banglish)
  "pathetic bokachoda": [1, 4], // Pathetic stupid fucker (Banglish)
  "bloody harami": [3, 4], // Bloody bastard (Banglish)
  "fucking haramjada": [3, 4], // Fucking bastard (Banglish)
  "go to hell shala": [3, 4], // Go to hell rascal (Banglish)

  // ========================================
  // === More Compound Insults ===
  // ========================================
  "bokachoda haramjada": [3, 4], // Stupid fucker bastard
  "khanki magi haramjada": [3, 4], // Prostitute bastard
  "kuttar bachcha haramjada": [3, 4], // Dog's son bastard
  "shuorer bachcha bokachoda": [1, 4], // Pig's son stupid fucker
  "magi sala bonchod": [5, 5], // Prostitute rascal sister fucker
  "haramjada kuttar bachcha": [3, 4], // Bastard dog's son
  "bokachoda magir chele": [1, 4], // Stupid fucker prostitute's son
  "khanki shuorer bachcha": [5, 4], // Prostitute pig's son
  "shala bokachoda haramjada": [3, 4], // Rascal stupid fucker bastard
  "tor maa khanki magi": [5, 4], // Your mother is a prostitute whore
  "tor baap pandir": [1, 4], // Your father is a pimp
  "tor bon boro magi": [5, 4], // Your sister is a big prostitute
  "sala kuttar bachcha bonchod": [3, 5], // Rascal dog's son sister fucker
  "bokachoda chuda tor maa": [1, 4], // Stupid fucker fuck your mother
  "haramjada shuorer bachcha sala": [3, 4], // Bastard pig's son rascal
  "khanki magir chele sala": [5, 4], // Prostitute's son rascal
  "chud tor ma ba dui jon": [3, 5], // Fuck both your parents
  "tor maa baap dui jon magi": [5, 4], // Both your parents are prostitutes
  "sala tor goshthi chudi": [3, 5], // Rascal your whole family fucked

  // ========================================
  // === More Bengali Script Additions ===
  // ========================================
  "বালের চুদি": [3, 5], // Baler chudi (pubic hair's fuck)
  "বিচি চুশি": [4, 4], // Bichi chushi (testicle sucker)
  "বোগা ঢোকাও": [4, 4], // Boga dhukao (insert dick)
  "ছাগল চোদা": [3, 5], // Chagol choda (goat fucker)
  "চোদের বাচ্চা": [3, 5], // Choder bachcha (fucker's child)
  "ধোনের চোষা": [4, 4], // Dhoner chosha (dick sucking)
  "গুদ চাটা": [4, 4], // Gud chata (pussy licker)
  "গুদের পানি": [4, 4], // Guder pani (pussy water)
  "হেদা খা": [3, 5], // Heda kha (eat shit)
  "জাত খানকি": [5, 4], // Jaat khanki (caste prostitute)
  "কুত্তার গার": [3, 4], // Kuttar gaar (dog's ass)
  "কুত্তার বোগা": [4, 4], // Kuttar boga (dog's dick)
  "মাগি চোদার বাচ্চা": [5, 5], // Magi chodar bachcha (prostitute fucker's child)
  "শূয়রের গার": [3, 4], // Shuorer gaar (pig's ass)
  "তোর বোনের পুটকি": [3, 4], // Tor boner putki (your sister's anus)
  "তোর বাপের পুটকি": [1, 4], // Tor baaper putki (your father's anus)
  "তোর মায়ের পুটকি": [3, 4], // Tor mayer putki (your mother's anus)
  "তোর বোন খানকি": [5, 4], // Tor bon khanki (your sister is a prostitute)
  "তোর মা বেশ্যা": [5, 4], // Tor ma beshya (your mother is a prostitute)
  "তোর মা রান্ডী": [5, 4], // Tor ma randi (your mother is a whore)
  "তোর গোষ্ঠী চুদি": [3, 5], // Tor goshthi chudi (your whole family fucked)
  "তোর মা বাপ দুই জন মাগি": [5, 4], // Tor maa baap dui jon magi (both parents prostitutes)
  "বোকাচোদা হারামজাদা": [3, 4], // Bokachoda haramjada (stupid fucker bastard)
  "খানকি শূয়রের বাচ্চা": [5, 4], // Khanki shuorer bachcha (prostitute pig's son)
  "ভোদা চাটা": [4, 4], // Bhoda chata (vagina licker)
  "ভোদাইর বাচ্চা": [1, 4], // Bhodair bachcha (idiot's child)
  "পাগলের বাচ্চা": [3, 4], // Pagoler bachcha (madman's child)
  "নোংরা কুত্তার বাচ্চা": [3, 4], // Nongra kuttar bachcha (dirty dog's child)
  "হারামির বাচ্চা": [3, 4], // Haramir bachcha (bastard's child)
  "মাদারচোদ শালা": [5, 5], // Madarchod shala (motherfucker rascal)
  "বোকাচোদ শালা": [1, 4], // Bokachod shala (stupid fucker rascal)
  "গাণ্ডু শালা": [3, 4], // Gandu shala (asshole rascal)
  "মাগি শালা": [5, 4], // Magi shala (prostitute rascal)
  "চুদির বাই": [3, 5], // Chudir bhai (brother of fuck)
  "তোর মায়ের বোগা খাবো": [4, 4], // Tor mayer boga khabo (I'll eat your mother's dick)
  "তোর মায়ের গুদ ফাটাবো": [1, 4], // Tor mayer gud fatabo (I'll tear your mother's pussy)
  "শালা মাদারচোদ বোকাচোদা": [1, 4], // Shala madarchod bokachoda (rascal motherfucker stupid fucker)

  // ========================================
  // === Noakhali Dialect ===
  // ========================================
  "fuainno": [3, 5], // Fucker (Noakhali)
  "fuainno re": [3, 5], // Hey fucker (Noakhali)
  "toor mayre fua": [3, 5], // Fuck your mother (Noakhali)
  "futgi maira": [3, 5], // Ass fucker (Noakhali)
  "toor boinno fua": [3, 5], // Fuck your sister (Noakhali)
  "haiga maira re": [3, 5], // Hey ass fucker (Noakhali)
  "magir fut fua": [5, 5], // Prostitute's ass fuck (Noakhali)

  // ========================================
  // === Rangpuri/Rajbangshi Dialect ===
  // ========================================
  "fukinni": [3, 5], // Fucker (Rangpuri)
  "mayre fukinni": [5, 5], // Mother fucker (Rangpuri)
  "sala fukinni": [3, 5], // Rascal fucker (Rangpuri)
  "kutar baicha": [3, 4], // Dog's son (Rangpuri)
  "magir baicha": [5, 4], // Prostitute's son (Rangpuri)
  "bongal choda": [3, 5], // Bengali fucker (Rangpuri insult)
  "gadhar baicha": [3, 4], // Donkey's son (Rangpuri)

  // ========================================
  // === Internet Slang Extended ===
  // ========================================
  "bkchodr bchcha": [2, 3], // Abbreviation for bokachoda bachcha
  "mc sala bkchd": [2, 3], // MC rascal BC (texting)
  "magir put mchd": [5, 4], // Prostitute's son MC (texting)
  "khkimagi": [2, 3], // Abbreviation for khanki magi
  "shlabnchl": [2, 3], // Abbreviation compound
  "brshla": [2, 3], // Bad rascal (texting)
  "tor maa mgi": [5, 4], // Your mother prostitute (texting)
  "amr bga kha": [4, 3], // Eat my dick (texting)
  "chdtoke": [3, 5], // Fuck you (texting)
  "shla bkchda": [1, 4], // Rascal stupid fucker (texting)
  "hrmjda": [2, 3], // Haramjada abbreviation
  "ktrbchcha": [2, 3], // Kuttar bachcha abbreviation
  "mgi chd": [2, 3], // Magi chod abbreviation
  "bnchdshla": [2, 3], // Bonchod shala abbreviation

  // ========================================
  // === More Sexual Terms ===
  // ========================================
  "dhon chosha de": [4, 4], // Give dick sucking
  "boga chosha magi": [5, 4], // Dick sucking prostitute
  "guder ras kha": [4, 4], // Eat pussy juice
  "tor putki fatabo": [4, 4], // I'll tear your ass
  "tor gude amar dhon dhukabo": [4, 4], // I'll put my dick in your pussy
  "dhon chaatni": [4, 4], // Dick licking woman
  "putki chaatni": [4, 4], // Ass licking woman
  "boga tana magi": [5, 4], // Dick pulling prostitute
  "gud kha sala": [4, 4], // Eat pussy rascal
  "bichi chaata": [4, 4], // Testicle licker
  "dhoner matha chosa": [4, 4], // Suck the head of the dick
  "gudmarani sala bonchod": [4, 5], // Ass fucker rascal sister fucker
  "hogay boga dhukai": [4, 4], // Dick inserted in anus
  "gudmarani bachcha": [4, 5], // Ass fucker's child
  "dhoner ras": [4, 4], // Dick juice (semen)
  "bicher pani": [4, 4], // Testicle water (vulgar)

  // ========================================
  // === More Evasion Spellings ===
  // ========================================
  "b0kachoda": [1, 5], // Stupid fucker (evasion)
  "kh@nki": [5, 5], // Prostitute (evasion)
  "m@gi": [5, 5], // Prostitute (evasion)
  "sh@la": [3, 5], // Rascal (evasion)
  "ch0da": [3, 5], // Fuck (evasion)
  "h@ramjada": [3, 5], // Bastard (evasion)
  "g@ndu": [3, 5], // Asshole (evasion)
  "b@l": [3, 5], // Pubic hair (evasion)
  "dh0n": [4, 5], // Penis (evasion)
  "putk1": [3, 5], // Arse (evasion)
  "b0ga": [4, 5], // Dick (evasion)
  "bnchdshala": [3, 5], // Bonchod shala compound

  // ========================================
  // === Barisal Dialect ===
  // ========================================
  "fuinna tor maa": [3, 5], // Fuck your mother (Barisal)
  "chodon tor bon": [3, 5], // Fuck your sister (Barisal)
  "sala magir gude": [5, 4], // Rascal prostitute's pussy (Barisal)
  "heda kha sala": [3, 5], // Eat shit rascal (Barisal)

  // ========================================
  // === Extended Bengali Script Profanity ===
  // ========================================
  "ভোদা খোর": [4, 4], // Bhoda khor (vagina eater)
  "বালের ছেড়া": [3, 4], // Baler chheda (torn pubic hair, worthless)
  "গুদমারানি মাগি": [5, 5], // Gudmarani magi (ass-fucker prostitute)
  "ধোনের আগা চোষা": [4, 4], // Dhoner aga chosha (tip of dick sucker)
  "পুটকি ফাটাবো": [1, 4], // Putki fatabo (I'll tear the ass)
  "গুদ ফাটাবো": [1, 4], // Gud fatabo (I'll tear the pussy)
  "বোগা কাটবো": [4, 4], // Boga katbo (I'll cut the dick)
  "বিচি মাসলাবো": [4, 4], // Bichi maslabo (I'll crush the testicles)
  "ধোনের পানি": [4, 4], // Dhoner pani (dick water, semen)
  "গুদের মধু": [4, 4], // Guder modhu (pussy honey)
  "পুটকির ফুটো": [3, 4], // Putkir futo (asshole)
  "বালের ঝাড়": [3, 4], // Baler jhar (pubic hair bush)
  "মাগির দুধ": [5, 4], // Magir dudh (prostitute's milk)
  "কুত্তার গুদ": [4, 4], // Kuttar gud (dog's pussy)
  "শূয়রের পুটকি": [3, 4], // Shuorer putki (pig's anus)
  "গাধার পুটকি": [3, 4], // Gadhar putki (donkey's anus)
  "ছাগলের বোগা": [4, 4], // Chagoler boga (goat's dick)
  "গরুর গুদ": [4, 4], // Gorur gud (cow's pussy)
  "ঘোড়ার বোগা": [4, 4], // Ghorar boga (horse's dick)
  "বানরের গুদ": [4, 4], // Banorer gud (monkey's pussy)
  "তোর মায়ের দুধ খাই": [3, 4], // Tor mayer dudh khai (I eat your mother's milk, insulting)
  "তোর মা কুকুরের মতো": [3, 4], // Tor maa kukurer moto (your mother is like a dog)
  "তোর বাপ ভিক্ষুক": [1, 4], // Tor baap bhikkhuk (your father is a beggar)
  "তোর বোন বাজারের মাগি": [5, 4], // Tor bon bajarer magi (your sister is a market prostitute)
  "চামার": [3, 4], // Chamar (caste slur)
  "মেথর": [3, 4], // Methor (sweeper caste slur)
  "ডোম": [3, 4], // Dom (funeral worker caste slur)
  "হেঁদা": [3, 4], // Heda (feces)
  "হাগু": [3, 4], // Hagu (feces, childish)
  "মুত": [3, 4], // Mut (urine)
  "পাদ": [3, 4], // Pad (fart)
  "পাদুরে": [3, 4], // Padure (one who farts)
  "গু": [3, 4], // Gu (feces, vulgar)
  "গু খা": [3, 4], // Gu kha (eat feces)
  "মুত খা": [3, 4], // Mut kha (drink urine)
  "পাদ শুঁকে মর": [5, 5], // Pad shunke mor (smell fart and die)
  "হেঁদার কীট": [3, 4], // Hedar keet (feces worm)
  "গুর পোকা": [3, 5], // Gur poka (shit bug)
  "নর্দমার কীট": [3, 4], // Nordomar keet (drain worm)
  "ড্রেনের ইঁদুর": [3, 4], // Drener indur (drain rat)
  "ময়লার পোকা": [3, 4], // Moylar poka (garbage bug)
  "ভাঁড়": [3, 4], // Bhand (clown, buffoon)
  "বেজন্মা": [3, 4], // Bejonma (ill-born)
  "অশ্লীল": [3, 4], // Oshlil (obscene)
  "বদমাশ": [3, 4], // Bodmash (crook)
  "লম্পট": [3, 4], // Lompot (lecherous)
  "ব্যভিচারী": [3, 4], // Byobhichari (adulterer)
  "ব্যভিচারিণী": [3, 4], // Byobhicharini (adulteress)
  "কুলটা": [3, 4], // Kulota (unchaste woman)
  "খারাপ মেয়ে": [3, 4], // Kharap meye (bad girl)
  "নষ্ট মেয়ে": [3, 4], // Noshto meye (spoiled girl)
  "চরিত্রহীন": [3, 4], // Choritrohin (characterless)
  "বেহায়া": [3, 4], // Behaya (shameless)
  "নির্লজ্জ": [3, 4], // Nirlojjo (shameless, formal)
  "পাজি": [3, 4], // Paji (rascal)
  "বজ্জাত": [3, 4], // Bojjat (naughty/evil)
  "গুণ্ডা": [3, 4], // Gunda (thug)
  "গুণ্ডামি": [3, 4], // Gundami (thuggery)
  "দালাল": [3, 4], // Dalal (broker/pimp)
  "টাউট": [3, 4], // Taut (tout/agent)
  "বাটপাড়": [3, 4], // Batpar (cheat)

  // ========================================
  // === Extended Romanized Bengali Profanity ===
  // ========================================
  "bhoda khor": [4, 5], // Vagina eater
  "baler chheda": [3, 5], // Torn pubic hair (worthless)
  "gudmarani magi": [5, 5], // Ass-fucker prostitute
  "dhoner aga chosha": [4, 5], // Tip of dick sucker
  "putki fatabo": [3, 5], // I'll tear the ass
  "gud fatabo": [4, 5], // I'll tear the pussy
  "boga katbo": [4, 5], // I'll cut the dick
  "bichi maslabo": [4, 5], // I'll crush testicles
  "dhoner pani": [4, 5], // Dick water (semen)
  "guder modhu": [4, 5], // Pussy honey
  "putkir futo": [3, 5], // Asshole
  "baler jhar": [3, 5], // Pubic hair bush
  "magir dudh": [5, 5], // Prostitute's milk
  "kuttar gud": [4, 5], // Dog's pussy
  "shuorer putki": [3, 5], // Pig's anus
  "gadhar putki": [3, 5], // Donkey's anus
  "chagoler boga": [4, 5], // Goat's dick
  "gorur gud": [4, 5], // Cow's pussy
  "ghorar boga": [4, 5], // Horse's dick
  "banorer gud": [4, 5], // Monkey's pussy
  "tor mayer dudh khai": [3, 5], // I eat your mother's milk
  "tor maa kukurer moto": [3, 5], // Your mother is like a dog
  "tor baap bhikkhuk": [1, 5], // Your father is a beggar
  "tor bon bajarer magi": [5, 5], // Your sister market prostitute
  "chamar": [3, 5], // Caste slur
  "methor": [3, 5], // Sweeper caste slur
  // "dom": [3, 5], // Funeral worker caste slur — commented out: collides with English "DOM" (web), "domain"
  "hagu": [3, 5], // Feces (childish)
  // "mut": [3, 4], // Urine — commented out: collides with English "mutt", "mutter"
  "padure": [3, 5], // One who farts
  // "gu": [3, 5], // Feces — commented out: too short, collides with common text
  "gu kha": [3, 5], // Eat feces
  "mut kha": [3, 5], // Drink urine
  "pad shunke mor": [5, 5], // Smell fart and die
  "hedar keet": [3, 5], // Feces worm
  "gur poka": [3, 5], // Shit bug
  "nordomar keet": [3, 5], // Drain worm
  "drener indur": [3, 5], // Drain rat
  "moylar poka": [3, 5], // Garbage bug
  "bhand": [1, 3], // Buffoon
  "bejonma": [3, 5], // Ill-born
  "bodmash": [3, 5], // Crook
  "lompot": [3, 5], // Lecherous
  "byobhichari": [3, 5], // Adulterer
  "byobhicharini": [3, 5], // Adulteress
  "kulota": [3, 5], // Unchaste woman
  "kharap meye": [3, 5], // Bad girl
  "noshto meye": [3, 5], // Spoiled girl
  "choritrohin": [3, 5], // Characterless
  "behaya": [1, 4], // Shameless
  "paji": [1, 4], // Rascal
  "bojjat": [3, 5], // Naughty/evil
  "gunda": [3, 5], // Thug
  "gundami": [3, 5], // Thuggery
  "dalal": [1, 4], // Broker/pimp
  // "taut": [3, 5], // Tout/agent — false positive: common English word ("taut rope")
  "batpar": [3, 5], // Cheat

  // ========================================
  // === Extended Compound Insults (Roman) ===
  // ========================================
  "bokachoda kuttar bachcha sala": [3, 4], // Stupid fucker dog's son bastard
  "magi tor maa tor bon": [5, 4], // Prostitute your mother your sister
  "khanki magi bokachoda haramjada sala": [3, 4], // Prostitute stupid fucker bastard rascal
  "tor goshthi ke chudi": [3, 5], // Fuck your entire clan
  "tor baaper baap choda": [1, 4], // Your grandfather's fucker
  "tor naani ke chodi": [3, 5], // Fucked your grandmother
  "tor dadu ke choda": [1, 4], // Fucked your grandfather
  "tor khandaan chuda": [3, 5], // Your dynasty is fucked
  "shala nongra kuttar bachcha magi": [5, 4], // Rascal dirty dog's child prostitute
  "khanki magi kuttar bachcha shuorer pola": [5, 4], // Prostitute dog's child pig's son
  "tor putki te boga dhukabo ar beriye anbo": [4, 4], // I'll insert and remove dick from your ass
  "tor gude amar dhon dhukiye chodon korbo": [4, 5], // I'll put my dick in your pussy and fuck
  "chup kor noyto boga katbo": [4, 4], // Shut up or I'll cut the dick
  "tui magi tor maa magi tor bon magi": [5, 4], // You prostitute your mother prostitute your sister prostitute
  "amra sob tore chudbo": [3, 5], // We'll all fuck you
  "tor shob kichhu shesh korbo": [5, 5], // I'll finish everything of yours (threat)
  "khanki magir put shuorer bachcha kuttar bachcha": [5, 4], // Prostitute's son pig's child dog's child
  "bokachoda haramjada maderchoder bachcha": [3, 4], // Stupid fucker bastard motherfucker's child
  "tor putki boro, boga dhukbe na": [4, 4], // Your ass is big, dick won't fit
  "tor gude bichi nai": [4, 4], // Your pussy has no balls (senseless insult)
  "ekta boro boga diye tor gude dhukabo": [4, 4], // I'll insert a big dick in your pussy
  "tor bon ke bazaar e bechbo": [1, 4], // I'll sell your sister in the market
  "tor maa ke bazaar e bechbo": [1, 4], // I'll sell your mother in the market
  "haramjada nongra choda kuttar bachcha magi": [3, 4], // Bastard dirty fucker dog's child prostitute
  "bokachoda sala banchod maderchod": [3, 4], // Stupid fucker bastard sisterfucker motherfucker

  // ========================================
  // === Extended Sylheti Dialect ===
  // ========================================
  "fuainno sala": [3, 4], // Fucker bastard (Sylheti)
  "fuainno kuttar baicha": [3, 5], // Fucker dog's child (Sylheti)
  "xalar xala fuainno": [3, 5], // Rascal's rascal fucker (Sylheti)
  "boga chuinna": [4, 4], // Dick sucking (Sylheti)
  "haiga fatainno": [3, 4], // Ass tearing (Sylheti)
  "gut fatainno": [4, 4], // Pussy tearing (Sylheti)
  "mainka gut te boga": [4, 4], // Dick in mother's pussy (Sylheti)
  "tar boinno fuainno": [3, 5], // His sister fucker (Sylheti)
  "tar bap fuainno": [1, 4], // His father fucker (Sylheti)
  "xalar gut khainno": [4, 4], // Rascal's pussy eater (Sylheti)
  "kutta xalar baicha": [3, 4], // Dog rascal's child (Sylheti)
  "hazir xala fuainno": [3, 5], // Pig rascal fucker (Sylheti)
  "mainka boga khainno": [4, 4], // Mother's dick eater (Sylheti)
  "tar abba fuainno": [1, 4], // His father fucker (Sylheti variant)
  "tar amma fuainno": [5, 5], // His mother fucker (Sylheti)
  "fuainno tar goshthi": [3, 5], // Fuck his clan (Sylheti)
  "boga tanna xala": [4, 4], // Dick pulling rascal (Sylheti)
  "gut mairra xala": [4, 5], // Pussy fucker rascal (Sylheti)
  "futki chattinna": [3, 4], // Ass licking (Sylheti)
  "haiga chattinna": [3, 4], // Anus licking (Sylheti)
  "boga chinna xala": [4, 4], // Dick cutting rascal (Sylheti)
  "mainka haiga fua": [3, 5], // Mother's anus fuck (Sylheti)
  "boinno gut fua": [4, 5], // Sister's pussy fuck (Sylheti)
  "xalar bap fua": [1, 4], // Rascal's father fuck (Sylheti)

  // ========================================
  // === Extended Chittagonian Dialect ===
  // ========================================
  "foinya sala banchod": [3, 5], // Fucker rascal sisterfucker (Chittagonian)
  "tore maayre foinya sala": [5, 5], // Your mother fucker rascal (Chittagonian)
  "maayre gudmara": [3, 5], // Mother's ass fucker (Chittagonian)
  "boinno foinya sala": [3, 5], // Sister fucker rascal (Chittagonian)
  "hazeer bach foinya": [3, 5], // Pig's child fucker (Chittagonian)
  "kuttar foinya sala": [3, 5], // Dog fucker rascal (Chittagonian)
  "dangor gudmare": [3, 5], // Big ass fucker (Chittagonian)
  "dangor boga kha": [4, 4], // Eat big dick (Chittagonian)
  "futki fattainne": [3, 4], // Ass tearing (Chittagonian)
  "tore abbar boga kha": [1, 4], // Eat your father's dick (Chittagonian)
  "maayre foinya kutta": [5, 5], // Mother fucker dog (Chittagonian)
  "maagi sala foinya": [5, 5], // Prostitute rascal fucker (Chittagonian)
  "tore maayre tore abba foinya": [1, 4], // Your mother your father fucker (Chittagonian)
  "khanki maagi foinya sala": [5, 5], // Prostitute fucker rascal (Chittagonian)
  "dangor gudde boga dhuga": [4, 4], // Big ass dick insert (Chittagonian)
  "tore boinno gudmare": [3, 5], // Your sister's ass fuck (Chittagonian)
  "sala foinya kuttar baizza": [3, 5], // Rascal fucker dog's son (Chittagonian)
  "hazeer foinya sala badaima": [3, 5], // Pig fucker rascal scoundrel (Chittagonian)

  // ========================================
  // === Extended Noakhali Dialect ===
  // ========================================
  "fuainno re sala": [3, 5], // Hey fucker rascal (Noakhali)
  "toor mayre futgi": [3, 4], // Your mother's ass (Noakhali)
  "toor boinno futgi": [3, 4], // Your sister's ass (Noakhali)
  "futgi maira sala": [3, 5], // Ass fucker rascal (Noakhali)
  "toor mayre gudmara": [4, 5], // Your mother's pussy fucker (Noakhali)
  "kutta fuainno sala": [3, 5], // Dog fucker rascal (Noakhali)
  "magir futgi fua sala": [5, 5], // Prostitute's ass fuck rascal (Noakhali)
  "toor abbar boga kha": [1, 4], // Eat your father's dick (Noakhali)
  "sala fuainno kuttar baccha": [3, 5], // Rascal fucker dog's child (Noakhali)
  "shuorer baccha fuainno": [3, 5], // Pig's child fucker (Noakhali)
  "haiga fuainno sala": [3, 5], // Anus fucker rascal (Noakhali)
  "toor goshthi fuainno": [3, 5], // Your clan fucker (Noakhali)
  "magir fut maira re": [5, 5], // Prostitute's ass fucker (Noakhali)
  "boga chattainno re": [4, 4], // Dick licker hey (Noakhali)
  "gudmara re sala fuainno": [4, 5], // Pussy fucker hey rascal fucker (Noakhali)

  // ========================================
  // === Extended Rangpuri Dialect ===
  // ========================================
  "fukinni sala kutta": [3, 5], // Fucker rascal dog (Rangpuri)
  "mayre fukinni kuttar baicha": [5, 5], // Mother fucker dog's child (Rangpuri)
  "gadhar baicha fukinni": [3, 5], // Donkey's child fucker (Rangpuri)
  "magir baicha fukinni sala": [5, 5], // Prostitute's child fucker rascal (Rangpuri)
  "bongal fukinni sala": [3, 5], // Bengali fucker rascal (Rangpuri)
  "shuorer baicha fukinni": [3, 5], // Pig's child fucker (Rangpuri)
  "kutta fukinni gadhar baicha": [3, 5], // Dog fucker donkey's child (Rangpuri)
  "tor may fukinni sala": [5, 5], // Your mother fucker rascal (Rangpuri)
  "tor bai fukinni": [3, 5], // Your sister fucker (Rangpuri)
  "tor bap fukinni": [1, 4], // Your father fucker (Rangpuri)
  "sala fukinni harami": [3, 4], // Rascal fucker bastard (Rangpuri)
  "magir fukinni sala banchod": [5, 5], // Prostitute fucker rascal sisterfucker (Rangpuri)

  // ========================================
  // === More Bengali Script Extended ===
  // ========================================
  "বোকাচোদা কুত্তার বাচ্চা শালা": [1, 4], // Stupid fucker dog's son rascal
  "মাগি তোর মা তোর বোন": [5, 4], // Prostitute your mother your sister
  "খানকি মাগি বোকাচোদা হারামজাদা শালা": [3, 4], // Prostitute stupid fucker bastard rascal
  "তোর গোষ্ঠী কে চুদি": [3, 5], // Fuck your entire clan
  "তোর বাপের বাপ চোদা": [1, 4], // Your grandfather's fucker
  "তোর নানী কে চোদি": [3, 5], // Fucked your grandmother
  "তোর দাদু কে চোদা": [1, 4], // Fucked your grandfather
  "তোর খান্দান চুদা": [3, 5], // Your dynasty is fucked
  "শালা নোংরা কুত্তার বাচ্চা মাগি": [5, 4], // Rascal dirty dog's child prostitute
  "খানকি মাগি কুত্তার বাচ্চা শূয়রের পোলা": [5, 4], // Prostitute dog's child pig's son
  "চুপ কর নয়তো বোগা কাটবো": [4, 4], // Shut up or I'll cut the dick
  "তুই মাগি তোর মা মাগি তোর বোন মাগি": [5, 4], // You prostitute your mother prostitute your sister prostitute
  "আমরা সব তোরে চুদবো": [3, 5], // We'll all fuck you
  "তোর সব কিছু শেষ করবো": [3, 4], // I'll finish everything of yours
  "বোকাচোদা হারামজাদা মাদারচোদের বাচ্চা": [3, 4], // Stupid fucker bastard motherfucker's child
  "একটা বড় বোগা দিয়ে তোর গুদে ঢোকাবো": [4, 4], // I'll insert a big dick in your pussy
  "তোর বোন কে বাজারে বেচবো": [3, 4], // I'll sell your sister in the market
  "তোর মা কে বাজারে বেচবো": [3, 4], // I'll sell your mother in the market
  "হারামজাদা নোংরা চোদা কুত্তার বাচ্চা মাগি": [3, 4], // Bastard dirty fucker dog's child prostitute
  "বোকাচোদা শালা বাঞ্চোদ মাদারচোদ": [1, 4], // Stupid fucker rascal sisterfucker motherfucker
  "ভোদাখোর": [4, 4], // Vagina eater

  // ========================================
  // === Extended Internet Slang ===
  // ========================================
  "bkchd shla bnchd": [2, 3], // Bokachoda shala banchod abbreviation
  "mchd kttrbchch": [5, 5], // Madarchod kuttar bachcha abbreviation
  "shla nngra mgi": [2, 3], // Shala nongra magi abbreviation
  "trmaa mgi": [2, 3], // Tor maa magi abbreviation
  "trbon mgi": [2, 3], // Tor bon magi abbreviation
  "trmaa chd": [2, 3], // Tor maa chod abbreviation
  "trbon chd": [2, 3], // Tor bon chod abbreviation
  "trbaap bhndchd": [2, 3], // Tor baap banchod abbreviation
  "trgoshthi chd": [2, 3], // Tor goshthi chod abbreviation
  "khki mgi rdi": [2, 3], // Khanki magi randi abbreviation
  "bkchd hrmjd shla kttrbchch": [2, 3], // Compound abbreviation
  "shlr pla bkchd": [2, 3], // Shalar pola bokachoda abbreviation
  "mgi chdr bchch shla": [2, 3], // Magi chodar bachcha shala abbreviation
  "nngra ktta shla bkchd": [2, 3], // Nongra kutta shala bokachoda abbreviation

  // ========================================
  // === Extended Banglish Mix ===
  // ========================================
  "fucking magi tor maa": [5, 5], // Fucking prostitute your mother
  "bloody khanki magi": [5, 4], // Bloody prostitute
  "shit bokachoda sala": [1, 4], // Shit stupid fucker rascal
  "asshole kuttar bachcha": [3, 4], // Asshole dog's child
  "bastard shuorer bachcha": [3, 4], // Bastard pig's child
  "bitch tor bon": [3, 4], // Bitch your sister
  "son of a khanki magi": [5, 4], // Son of a prostitute
  "mother fucker madarchod sala": [5, 5], // Motherfucker (redundant)
  "sister fucker banchod": [3, 5], // Sisterfucker (redundant)
  "go die sala bokachoda": [1, 4], // Go die rascal stupid fucker
  "kill yourself sala magi": [5, 5], // Kill yourself rascal prostitute
  "trash bokachoda": [1, 4], // Trash stupid fucker
  "garbage nongra kutta sala": [3, 4], // Garbage dirty dog rascal
  "worthless faaltu magi": [5, 4], // Worthless prostitute
  "pathetic bokachoda haramjada": [3, 4], // Pathetic stupid fucker bastard
  "disgusting nongra kuttar bachcha": [3, 4], // Disgusting dirty dog's child
  "useless faaltu bokachoda": [1, 4], // Useless stupid fucker
  "ugly thobra magi sala": [1, 4], // Ugly face prostitute rascal
  "stupid bokachoda sala harami": [3, 4], // Stupid fucker rascal bastard
  "dumbass bokachoda haramjada sala": [3, 4], // Dumbass stupid fucker bastard rascal

  // ========================================
  // === Extended Threats ===
  // ========================================
  "tor putki chirbo": [5, 5], // I'll rip your ass
  "tor gude boga dhukiye fatabo": [5, 5], // I'll insert dick and tear your pussy
  "tor boga katbo": [5, 5], // I'll cut your dick
  "tor bichi maslabo": [5, 5], // I'll crush your testicles
  "toke maira felbo": [5, 5], // I'll beat you dead
  "tor haddi bhangbo": [5, 5], // I'll break your bones
  "toke kutta diye khawaibo": [5, 5], // I'll feed you to dogs
  "tor mukh bhangbo": [5, 5], // I'll break your face
  "tor daat bhangbo": [5, 5], // I'll break your teeth
  "toke drain e felbo": [5, 5], // I'll throw you in the drain
  "toke gutter e felbo": [5, 5], // I'll throw you in the gutter
  "toke naali te felbo": [5, 5], // I'll throw you in the drain
  "tor jibonshesh korbo": [5, 5], // I'll end your life
  "toke chire felbo": [5, 5], // I'll rip you apart
  "toke pochiye dibo": [5, 5], // I'll rot you away
  "tor shob shesh": [5, 5], // Everything of yours is over

  // ========================================
  // === Extended Scatological (Roman) ===
  // ========================================
  "heda kha sala magi": [5, 5], // Eat shit rascal prostitute
  "gu kha kuttar bachcha": [3, 5], // Eat shit dog's child
  "mut kha shuorer pola": [3, 4], // Drink piss pig's son
  "tor mukhe heda": [3, 5], // Shit in your face
  "tor mukhe gu": [3, 4], // Feces in your face
  "tor mukhe mut": [3, 4], // Urine in your face
  "heda magir pola": [5, 5], // Shit prostitute's son
  "gu magir bachcha": [5, 4], // Feces prostitute's child
  "heda khor sala": [3, 5], // Shit eater rascal
  "gu khor magi": [5, 4], // Feces eater prostitute
  "mut khor kutta": [3, 4], // Urine eater dog
  "pad magir chele": [5, 4], // Fart prostitute's son
  "paad sungh sala": [3, 4], // Smell fart rascal
  "tatti kha bokachoda": [1, 4], // Eat feces stupid fucker
  "gobar kha haramjada": [3, 4], // Eat cow dung bastard
  "naali te gire mor": [5, 5], // Fall in drain and die
  "gutter te gire mor": [5, 5], // Fall in gutter and die
  "heda te doobe mor": [5, 5], // Drown in shit and die

  // ========================================
  // === Extended Evasion Spellings ===
  // ========================================
  "b0kach0da": [1, 5], // Stupid fucker evasion
  "kh@nk1": [5, 5], // Prostitute evasion
  "m@g1": [5, 5], // Prostitute evasion
  "sh@l@": [3, 5], // Rascal evasion
  "ch0d@": [3, 5], // Fuck evasion
  "h@r@mjad@": [3, 5], // Bastard evasion
  "g@nd00": [3, 5], // Asshole evasion
  "b@al": [3, 5], // Pubic hair evasion
  "b0g@": [4, 5], // Dick evasion
  "madarc4od": [5, 5], // Motherfucker evasion
  "b@nch0d": [3, 5], // Sisterfucker evasion
  "kutt@r b@cchha": [3, 5], // Dog's child evasion
  "shu0rer b@cchha": [3, 5], // Pig's child evasion
  "kh@nk1 m@g1": [5, 5], // Prostitute compound evasion
  "b0kach0da sh@l@": [1, 5], // Stupid fucker rascal evasion
  "h@r@m1": [3, 5], // Bastard evasion
  "n0ngr@": [3, 5], // Dirty evasion
  "f@@ltu": [3, 5], // Worthless evasion

  // ========================================
  // === Extended Compound Animal Insults ===
  // ========================================
  "kuttar jaat": [1, 4], // Dog breed (insult)
  "shuorer jaat": [1, 4], // Pig breed (insult)
  "gadhar jaat": [1, 4], // Donkey breed (insult)
  "chagoler jaat": [1, 4], // Goat breed (insult)
  "kukurer bachcha sala": [1, 4], // Dog's child rascal
  "birar bachcha": [1, 4], // Cat's child (insult)
  "chucher bachcha": [1, 4], // Rat's child (insult)
  "shaaper bachcha": [1, 4], // Snake's child (insult)
  "bichchur bachcha": [1, 4], // Scorpion's child (insult)
  "kuttar theke ghatiya": [1, 4], // Worse than a dog
  "shuorer theke nongra": [1, 4], // Dirtier than a pig
  "gadhar theke boka": [1, 4], // Stupider than a donkey
  "chagoler theke bokachoda": [1, 4], // Stupider than a goat
  "kukurer moto bhoke": [1, 4], // Barks like a dog
  "shuorer moto kha": [1, 4], // Eats like a pig
  "gadhar moto kutta": [1, 4], // Dog like a donkey
  "bandar theke kujjho": [1, 4], // Uglier than a monkey
  "baknar theke ghatiya": [1, 4], // Worse than a crane
  "shapla sala": [1, 4], // Lotus rascal (Sylheti insult)
  "hajir bachcha sala": [1, 4], // Pig's child rascal (Chittagonian variant)
  "kuththa sala": [1, 4], // Dog rascal
  "shuor sala": [1, 4], // Pig rascal
  "gadha sala": [1, 4], // Donkey rascal
  "chagol sala": [1, 4], // Goat rascal
  "bandar sala": [1, 4], // Monkey rascal
  "bichhur pola": [1, 4], // Scorpion's son
  "shaaper pola": [1, 4], // Snake's son
  "chucher pola": [1, 4], // Rat's son
  "birar pola": [1, 4], // Cat's son (insult)

  // ========================================
  // === Extended Bengali Script (Threats) ===
  // ========================================
  "তোর পুটকি চিরবো": [5, 5], // I'll rip your ass
  "তোর গুদে বোগা ঢোকিয়ে ফাটাবো": [5, 5], // I'll insert dick and tear pussy
  "তোর বোগা কাটবো": [5, 5], // I'll cut your dick
  "তোর বিচি মাসলাবো": [5, 5], // I'll crush your testicles
  "তোকে মাইরা ফেলবো": [5, 5], // I'll beat you dead
  "তোর হাড্ডি ভাংবো": [5, 5], // I'll break your bones
  "তোকে কুত্তা দিয়ে খাওয়াইবো": [5, 5], // I'll feed you to dogs
  "তোর মুখ ভাংবো": [5, 5], // I'll break your face
  "তোকে ড্রেনে ফেলবো": [5, 5], // I'll throw you in drain
  "তোকে নালীতে ফেলবো": [5, 5], // I'll throw you in drain
  "তোর জীবনশেষ করবো": [5, 5], // I'll end your life
  "তোকে চিরে ফেলবো": [5, 5], // I'll rip you apart
  "তোর দাঁত ভাংবো": [5, 5], // I'll break your teeth
  "তোকে পচিয়ে দিবো": [5, 5], // I'll rot you away

  // ========================================
  // === More Religious/Caste Slurs ===
  // ========================================
  "malaun sala": [5, 4], // Non-Muslim slur rascal
  "chamar sala": [5, 4], // Caste slur rascal
  "methor sala": [5, 4], // Sweeper caste rascal
  "dom sala": [5, 4], // Funeral worker rascal
  "neche jaater": [5, 4], // Low caste
  "jaat mara": [5, 4], // Caste beaten (insult)
  "jaat nai": [5, 4], // No caste (insult)
  "jaat chor": [5, 4], // Caste thief
  "jolahar pola": [5, 4], // Weaver's son (caste insult)
  "dhopar pola": [5, 4], // Washerman's son (caste insult)
  "naapiter pola": [5, 4], // Barber's son (caste insult)
  "muchir pola": [5, 4], // Cobbler's son (caste insult)
  "hadi sala": [5, 4], // Low caste rascal
  "haddi sala": [5, 4], // Low caste rascal (variant)

  // ========================================
  // === Extended Sexual Terms ===
  // ========================================
  "boga chushi de": [4, 4], // Give dick sucking
  "guder ras chushi de": [4, 4], // Suck the pussy juice
  "boga chushi magi": [5, 4], // Dick sucking prostitute
  "gudmarani randi": [5, 5], // Ass fucker whore
  "dhon chata magi": [5, 4], // Dick licker prostitute
  "putki chata sala": [4, 4], // Ass licker rascal
  "bichi chata magi": [5, 4], // Testicle licker prostitute
  "dhon dhukano magi": [5, 4], // Dick inserter prostitute
  "gud dhukano sala": [4, 4], // Pussy inserter rascal
  "putki dhukano magi": [5, 4], // Ass inserter prostitute
  "chosha magi": [5, 4], // Sucking prostitute
  "chata magi sala": [5, 4], // Licking prostitute rascal
  "dhon mota magi": [1, 4], // Fat dick prostitute
  "dhon lamba sala": [4, 4], // Long dick rascal
  "boga chhoto sala": [4, 4], // Small dick rascal
  "gud tight magi": [5, 4], // Tight pussy prostitute
  "putki tight sala": [4, 4], // Tight ass rascal
  "dhoner pani kha": [4, 4], // Eat dick water (semen)
  "guder pani chushi": [4, 4], // Suck pussy water
  "bichi masal magi": [5, 4], // Testicle crusher prostitute
  "dhon katani": [4, 4], // Dick cutter (female)
  "boga katani magi": [5, 4], // Dick cutter prostitute
  "gudmarani khanki magi": [5, 5], // Ass fucker prostitute whore
  "putki fatani magi": [5, 4], // Ass tearer prostitute
  "gud fatani sala": [4, 4], // Pussy tearer rascal

  // ========================================
  // === More Extended Bengali Compound Insults ===
  // ========================================
  "tor maa randi khanki magi": [5, 4], // Your mother is a whore prostitute
  "tor bon randi khanki magi": [5, 4], // Your sister is a whore prostitute
  "tor baap dalla sala": [1, 4], // Your father is a pimp rascal
  "tor dadu choda sala": [1, 4], // Your grandfather fucker rascal
  "tor naani magi": [5, 4], // Your grandmother is a prostitute
  "tor khandaan er sob magi": [5, 4], // Your entire dynasty are prostitutes
  "tor goshthi er sob bokachoda": [1, 4], // Your entire clan are stupid fuckers
  "tor maa ke dhon diye chudi": [4, 5], // Fucked your mother with dick
  "tor bon ke boga diye chudi": [4, 5], // Fucked your sister with dick
  "tor baap er putki fatai": [1, 4], // Tore your father's ass
  "tor mayer putki te boga dhukiye chudlam": [4, 5], // Inserted dick in mother's ass and fucked
  "tor boner gude amar dhon dhukiye chudlam": [4, 5], // Inserted dick in sister's pussy and fucked
  "tor maa ke bazaar er sob lok chude": [3, 5], // Everyone in market fucks your mother
  "tor bon ke sob lok chude": [3, 5], // Everyone fucks your sister
  "tor maa ke pagol kutta chode": [3, 5], // Mad dog fucks your mother
  "tor maa ke shuor chode": [3, 5], // Pig fucks your mother
  "tor maa ke gadha chode": [3, 5], // Donkey fucks your mother
  "tor mayer dhon ache": [4, 4], // Your mother has a dick (insult)
  "tor baaper gud ache": [1, 4], // Your father has a pussy (insult)
  "tor maa hijra": [1, 4], // Your mother is a eunuch
  "tor baap hijra": [1, 4], // Your father is a eunuch
  "tor bon hijra": [1, 4], // Your sister is a eunuch
  "hijra sala": [1, 4], // Eunuch rascal
  "hijra magi": [5, 4], // Eunuch prostitute
  "nangta hijra sala": [1, 4], // Naked eunuch rascal
  "bhodai hijra": [1, 4], // Idiot eunuch
  "pagol hijra sala": [1, 4], // Mad eunuch rascal
  "noshto hijra": [1, 4], // Corrupt eunuch
  "lompot sala": [1, 4], // Lecherous rascal
  "byobhichari sala": [1, 4], // Adulterer rascal
  "kulota magi sala": [5, 4], // Unchaste prostitute rascal
  "choritrohin magi": [5, 4], // Characterless prostitute
  "behaya magi sala": [5, 4], // Shameless prostitute rascal
  "paji sala magi": [5, 4], // Rascal rascal prostitute
  "bojjat sala bokachoda": [1, 4], // Evil rascal stupid fucker
  "gunda sala bokachoda": [1, 4], // Thug rascal stupid fucker
  "dalal sala khanki": [5, 4], // Pimp rascal prostitute
  "batpar sala harami": [3, 4], // Cheat rascal bastard
  "lompot harami sala": [3, 4], // Lecherous bastard rascal
  "byobhichari harami": [3, 4], // Adulterous bastard
  "noshto harami sala": [3, 4], // Corrupt bastard rascal

  // ========================================
  // === More Bengali Script Compound ===
  // ========================================
  "তোর মা রান্ডী খানকি মাগি": [5, 5], // Your mother is whore prostitute
  "তোর বোন রান্ডী খানকি মাগি": [5, 5], // Your sister is whore prostitute
  "তোর বাপ দাল্লা শালা": [1, 4], // Your father is pimp rascal
  "তোর দাদু চোদা শালা": [1, 4], // Your grandfather fucker rascal
  "তোর নানী মাগি": [5, 5], // Your grandmother is prostitute
  "তোর খান্দানের সব মাগি": [5, 5], // Your entire dynasty prostitutes
  "তোর গোষ্ঠীর সব বোকাচোদা": [1, 4], // Your entire clan stupid fuckers
  "তোর মা কে ধোন দিয়ে চুদি": [4, 5], // Fucked mother with dick
  "তোর বোন কে বোগা দিয়ে চুদি": [4, 5], // Fucked sister with dick
  "তোর বাপের পুটকি ফাটাই": [1, 4], // Tore father's ass
  "তোর মায়ের পুটকিতে বোগা ঢোকিয়ে চুদলাম": [4, 5], // Inserted dick in mother's ass
  "তোর বোনের গুদে আমার ধোন ঢোকিয়ে চুদলাম": [4, 5], // Inserted dick in sister's pussy
  "তোর মা কে বাজারের সব লোক চুদে": [3, 5], // Everyone fucks your mother
  "তোর মা কে পাগল কুত্তা চোদে": [3, 5], // Mad dog fucks your mother
  "তোর মা কে শূয়র চোদে": [3, 5], // Pig fucks your mother
  "তোর মা কে গাধা চোদে": [3, 5], // Donkey fucks your mother
  "তোর মায়ের ধোন আছে": [4, 5], // Your mother has a dick
  "তোর বাপের গুদ আছে": [1, 4], // Your father has a pussy
  "তোর মা হিজড়া": [3, 5], // Your mother is a eunuch
  "তোর বাপ হিজড়া": [1, 4], // Your father is a eunuch
  "হিজড়া শালা": [3, 5], // Eunuch rascal
  "হিজড়া মাগি": [5, 5], // Eunuch prostitute
  "নাঙ্গতা হিজড়া শালা": [3, 5], // Naked eunuch rascal
  "ভোদাই হিজড়া": [1, 4], // Idiot eunuch
  "পাগল হিজড়া শালা": [3, 5], // Mad eunuch rascal

  // ========================================
  // === More Extended Romanized Compounds ===
  // ========================================
  "sala boga khor magi khanki": [5, 5], // Rascal dick eater prostitute
  "tui shudhu magi r kichhu na": [5, 5], // You are nothing but a prostitute
  "tui ekta bokachoda kuttar bachcha haramjada": [3, 5], // You are a stupid fucker dog's child bastard
  "amader sob ar magi tui": [5, 5], // You are everyone's prostitute
  "tor shobkichhu baal": [3, 5], // Everything about you is pubic hair (worthless)
  "tor jibon baal": [3, 5], // Your life is pubic hair (worthless)
  "tor bap er naam baal": [1, 5], // Your father's name is pubic hair
  "tor maa er naam magi": [5, 5], // Your mother's name is prostitute
  "tor bon er naam khanki": [5, 5], // Your sister's name is prostitute
  "tui janmo theke magi": [5, 5], // You've been a prostitute since birth
  "tui janmo theke bokachoda": [1, 5], // You've been stupid since birth
  "tui janmo theke harami": [3, 5], // You've been a bastard since birth
  "tui janmo theke nongra": [3, 5], // You've been dirty since birth
  "tor baap janmo theke dalla": [1, 5], // Your father's been a pimp since birth
  "tor maa janmo theke magi": [5, 5], // Your mother's been a prostitute since birth
  "ekta bichi chhara tui kichhu na": [4, 5], // You're nothing except a testicle
  "ekta baal chhara tui kichhu na": [3, 5], // You're nothing except pubic hair
  "ekta heda chhara tui kichhu na": [3, 5], // You're nothing except shit
  "tor theke kutta bhalo": [3, 5], // A dog is better than you
  "tor theke shuor bhalo": [3, 5], // A pig is better than you
  "tor theke gadha bhalo": [3, 5], // A donkey is better than you
  "tor theke chagol bhalo": [3, 5], // A goat is better than you
  "tor theke chucha bhalo": [3, 5], // A rat is better than you
  "tor theke pokamakor bhalo": [3, 5], // Insects are better than you

  // ========================================
  // === More Extended Dialect Compounds ===
  // ========================================
  // Sylheti Extended
  "xalar bap fuainno kuttar baicha": [1, 4], // Rascal's father fucker dog's child (Sylheti)
  "tar mainka gut te tar abbar boga": [1, 4], // Mother's pussy father's dick (Sylheti)
  "fua tor goshthi ar bongshi": [3, 5], // Fuck your clan and lineage (Sylheti)
  "tar mainka gut fatainno xala": [4, 4], // Mother's pussy tearer rascal (Sylheti)
  "kutta xala fuainno hazir baicha": [3, 5], // Dog rascal fucker pig's child (Sylheti)
  "fuainno xalar bap fuainno tar maa": [1, 4], // Fucker rascal's father fucker his mother (Sylheti)
  "mainka boga tanna xala kutta": [4, 4], // Mother's dick pulling rascal dog (Sylheti)

  // Chittagonian Extended
  "maayre tore boinno foinya sala kutta": [3, 5], // Mother your sister fucker rascal dog (Chittagonian)
  "tore abbar futki foinya re sala": [1, 4], // Your father's ass fucker hey rascal (Chittagonian)
  "hazeer foinya kutta foinya sala": [3, 5], // Pig fucker dog fucker rascal (Chittagonian)
  "dangor gudde dangor boga foinya": [4, 5], // Big ass big dick fucker (Chittagonian)
  "tore maayre tore abba dui jonne foinya": [3, 5], // Fuck both your parents (Chittagonian)
  "maagi kuttar baizza foinya re": [5, 5], // Prostitute dog's son fucker hey (Chittagonian)
  "tore goshthi foinya re sala kuttar baizza": [3, 5], // Your clan fucker hey rascal dog's son (Chittagonian)

  // Noakhali Extended
  "toor mayre toor boinno futgi fua sala": [3, 5], // Your mother sister ass fuck rascal (Noakhali)
  "fuainno re sala kuttar baccha shuorer baccha": [3, 5], // Fucker rascal dog's child pig's child (Noakhali)
  "toor abbar futgi maira re haiga maira": [1, 4], // Your father's ass fucker anus fucker (Noakhali)
  "magir fut maira re sala fuainno kuttar baccha": [5, 5], // Prostitute's ass fucker rascal dog's child (Noakhali)
  "toor goshthi fuainno re magir baicha": [5, 5], // Your clan fucker prostitute's child (Noakhali)
  "toor mayre boga diye fuainno re": [4, 5], // Fucked mother with dick hey (Noakhali)
  "toor boinno futgi maira sala fuainno": [3, 5], // Your sister's ass fucker rascal fucker (Noakhali)

  // Rangpuri Extended
  "mayre fukinni kuttar baicha shuorer baicha": [5, 5], // Mother fucker dog's child pig's child (Rangpuri)
  "gadhar baicha fukinni magir baicha fukinni": [5, 5], // Donkey's child fucker prostitute's child fucker (Rangpuri)
  "tor may fukinni tor bai fukinni sala harami": [3, 4], // Your mother fucker your sister fucker rascal bastard (Rangpuri)
  "fukinni sala kutta gadhar baicha magir baicha": [5, 5], // Fucker rascal dog donkey's child prostitute's child (Rangpuri)
  "tor goshthi fukinni sala kutta shuor": [3, 5], // Your clan fucker rascal dog pig (Rangpuri)
  "tor bap fukinni tor may fukinni gadhar baicha": [1, 4], // Father fucker mother fucker donkey's child (Rangpuri)

  // ========================================
  // === More Extended Evasion Spellings ===
  // ========================================
  "bokachod@": [1, 5], // Stupid fucker evasion
  "kh4nki": [5, 5], // Prostitute evasion
  "m4gi": [5, 5], // Prostitute evasion
  "sh4la": [3, 5], // Rascal evasion
  "chod4": [3, 5], // Fuck evasion
  "h4ramjada": [3, 5], // Bastard evasion
  "g4ndu": [3, 5], // Asshole evasion
  "b4l": [3, 5], // Pubic hair evasion
  "dh0n chosa": [4, 5], // Penis sucker evasion
  "putk! mara": [3, 5], // Arse fucker evasion
  "bog@ kha": [4, 5], // Eat dick evasion
  "madarc#od": [5, 5], // Motherfucker evasion
  "b@nchd": [3, 5], // Sisterfucker evasion
  "kutt@r bacch@": [3, 5], // Dog's child evasion
  "shu0rer bacch@": [3, 5], // Pig's child evasion
  "bkchoda": [3, 5], // Bokachoda abbreviation variant
  "bkchd sl": [3, 5], // Bokachod sala abbreviation
  "mchd sl bkchd": [5, 5], // Madarchod sala bokachod abbreviation
  "trmaa mgi sl": [3, 5], // Tor maa magi sala abbreviation
  "trbon mgi khkimgi": [3, 5], // Tor bon magi khanki magi abbreviation
  "kttr bchch sl bkchd hrmi": [3, 5], // Kuttar bachcha sala bokachod harami abbreviation
  "shr bchch sl mchd bkchd": [5, 5], // Shuorer bachcha sala madarchod bokachod abbreviation

  // ========================================
  // === More Extended Bengali Script ===
  // ========================================
  "তুই শুধু মাগি আর কিছু না": [5, 4], // You are nothing but a prostitute
  "তুই একটা বোকাচোদা কুত্তার বাচ্চা হারামজাদা": [3, 4], // You are a stupid fucker dog's child bastard
  "আমাদের সবার মাগি তুই": [5, 4], // You are everyone's prostitute
  "তোর সবকিছু বাল": [3, 4], // Everything about you is pubic hair
  "তোর জীবন বাল": [3, 4], // Your life is pubic hair
  "তোর বাপের নাম বাল": [1, 4], // Your father's name is pubic hair
  "তোর মায়ের নাম মাগি": [5, 4], // Your mother's name is prostitute
  "তোর বোনের নাম খানকি": [5, 4], // Your sister's name is prostitute
  "তুই জন্ম থেকে মাগি": [5, 4], // You've been a prostitute since birth
  "তুই জন্ম থেকে বোকাচোদা": [1, 4], // You've been stupid since birth
  "তুই জন্ম থেকে হারামি": [3, 4], // You've been a bastard since birth
  "তোর থেকে কুত্তা ভালো": [3, 4], // A dog is better than you
  "তোর থেকে শূয়র ভালো": [3, 4], // A pig is better than you
  "তোর থেকে গাধা ভালো": [3, 4], // A donkey is better than you
  "তোর থেকে ছাগল ভালো": [3, 4], // A goat is better than you
  "একটা বাল ছাড়া তুই কিছু না": [3, 4], // You're nothing except pubic hair
  "একটা হেঁদা ছাড়া তুই কিছু না": [3, 5], // You're nothing except shit
  "তোর গোষ্ঠী শেষ করবো": [3, 4], // I'll end your clan
  "তোর বংশ শেষ করবো": [3, 4], // I'll end your lineage
  "তোর নাম মুছে দিবো": [3, 4], // I'll erase your name
  "তুই মরলেও কেউ কাঁদবে না": [5, 5], // No one will cry if you die
  "তুই বেঁচে থেকে কোনো কাজ নেই": [3, 4], // There's no use in you being alive
  "তুই পৃথিবীর সবচেয়ে নোংরা": [3, 4], // You are the dirtiest on earth
  "তুই পৃথিবীর সবচেয়ে গু": [3, 5], // You are the most shit on earth

  // ========================================
  // === More Extended Threat Phrases ===
  // ========================================
  "toke jibonto gorom pani diye pochabo": [5, 5], // I'll burn you alive with hot water
  "tor shob friends der shamne toke chudbo": [5, 5], // I'll fuck you in front of all your friends
  "tor maa ke tore shamne chudbo": [5, 5], // I'll fuck your mother in front of you
  "tor bon ke bazaare bechbo": [5, 5], // I'll sell your sister in the market
  "tor putki te agun debo": [5, 5], // I'll set your ass on fire
  "tor boga jol diye pochabo": [5, 5], // I'll burn your dick with water
  "tor gude mirchi debo": [5, 5], // I'll put chili in your pussy
  "tor putki te mirchi debo": [5, 5], // I'll put chili in your ass
  "tor boga te loha bandha debo": [5, 5], // I'll tie iron to your dick
  "tor mayer shobkichhu fatabo": [5, 5], // I'll tear everything of your mother
  "tor boner shobkichhu fatabo": [5, 5], // I'll tear everything of your sister
  "tor baaper shobkichhu fatabo": [1, 4], // I'll tear everything of your father
  "tor khandaan ke sob chude debo": [5, 5], // I'll fuck your entire dynasty
  "tor goshthi ke sob maira debo": [5, 5], // I'll kill your entire clan
  "toke drain e fele diye pani bhorbo": [5, 5], // I'll throw you in drain and fill water
  "toke gutter e fele diye maati debo": [5, 5], // I'll throw you in gutter and cover with dirt
  "toke jibonto pachar neeche fele debo": [5, 5], // I'll throw you alive under a stone
  "toke jibonto kborer moddhe rakhbo": [5, 5], // I'll put you alive in a grave
  "toke shesh kore debo": [5, 5], // I'll finish you off
  "tor naam shune manush thukbe": [5, 5], // People will spit hearing your name

  // ========================================
  // === Extended Sexual Insults (Bengali Script) ===
  // ========================================
  "তোর মাকে চোদার সময় তোর মা চিৎকার করে": [3, 5], // Your mother screams when fucked
  "তোর বোনকে সবাই চোদে": [3, 5], // Everyone fucks your sister
  "তোর মায়ের গুদে সবাই ঢুকে": [4, 4], // Everyone enters your mother's pussy
  "তোর বাপের বাড়া খাজা": [1, 4], // Your father's dick is useless
  "তোর মায়ের দুধ চুষবো": [4, 4], // I'll suck your mother's breasts
  "তোর বোনের দুধ চুষবো": [4, 4], // I'll suck your sister's breasts
  "তোর মায়ের পাছায় চুদবো": [3, 5], // I'll fuck your mother's ass
  "তোর বোনের পাছায় চুদবো": [3, 5], // I'll fuck your sister's ass
  "তোর মাকে উলটে চোদবো": [3, 5], // I'll fuck your mother upside down
  "তোর বোনকে উলটে চোদবো": [3, 5], // I'll fuck your sister upside down
  "তোর বোনের গুদ ফাটাবো": [4, 4], // I'll rip your sister's pussy
  "তোর মায়ের পুটকি ফাটাবো": [3, 4], // I'll rip your mother's asshole
  "তোর বাড়া কাটবো": [4, 4], // I'll cut your dick
  "তোর ধন কাটবো": [4, 4], // I'll cut your dick
  "তোর বাড়ায় কামড় দেবো": [4, 4], // I'll bite your dick
  "চোদনার বাচ্চা তুই": [3, 5], // You child of fucking
  "রান্ডির বাচ্চা শালা": [3, 4], // Whore's child bastard
  "তোর মায়ের ভোদায় লাঠি": [4, 4], // Stick in your mother's pussy
  "তোর মায়ের ভোদায় বাঁশ": [4, 4], // Bamboo in your mother's pussy
  "তোর পুটকিতে বাঁশ": [3, 4], // Bamboo in your asshole
  "তোর গুদে বাঁশ": [4, 4], // Bamboo in your pussy
  "তোর মায়ের ভোদা চুষি": [4, 4], // I suck your mother's pussy
  "তোর বোনের ভোদা চুষি": [4, 4], // I suck your sister's pussy
  "তোর মায়ের ভোদায় আঙুল": [4, 4], // Finger in your mother's pussy
  "তোর মায়ের ভোদায় হাত": [4, 4], // Hand in your mother's pussy
  "তোর মায়ের ভোদায় পা": [4, 4], // Foot in your mother's pussy
  "মালটা ছোড়ার মুখে": [3, 4], // Cum on the bastard's face
  "তোর মুখে মাল ফেলবো": [1, 4], // I'll cum on your face
  "তোর মায়ের মুখে মাল": [1, 4], // Cum on your mother's face
  "বেশ্যার ভোদা": [5, 4], // Prostitute's pussy
  "রান্ডির পুটকি": [5, 4], // Whore's asshole
  "খানকির পুটকি": [5, 4], // Whore's asshole (var)
  "শালী চোদ": [3, 5], // Fuck sister-in-law
  "ভাবী চোদ": [3, 5], // Fuck sister-in-law (married)
  "মামী চোদ": [3, 5], // Fuck aunt
  "কাকী চোদ": [3, 5], // Fuck aunt (paternal)
  "জেঠী চোদ": [3, 5], // Fuck aunt (elder paternal)
  "পিসী চোদ": [1, 4], // Fuck aunt (father's sister)
  "মাসী চোদ": [3, 5], // Fuck aunt (mother's sister)

  // ========================================
  // === Extended Romanized Sexual Insults ===
  // ========================================
  "tor make chodar shomoy tor maa chitkar kore": [3, 5], // Your mother screams when fucked
  "tor bonke shobai chode": [3, 5], // Everyone fucks your sister
  "tor mayer gude shobai dhuke": [4, 5], // Everyone enters your mother's pussy
  "tor baaper bara khaja": [1, 5], // Your father's dick is useless
  "tor mayer dudh chushbo": [4, 5], // I'll suck your mother's breasts
  "tor boner dudh chushbo": [4, 5], // I'll suck your sister's breasts
  "tor mayer pachay chudbo": [3, 5], // I'll fuck your mother's ass
  "tor boner pachay chudbo": [3, 5], // I'll fuck your sister's ass
  "tor make ulte chodbo": [3, 5], // I'll fuck your mother upside down
  "tor bonke ulte chodbo": [3, 5], // I'll fuck your sister upside down
  "tor mayer gud fatabo": [4, 5], // I'll rip your mother's pussy
  "tor boner gud fatabo": [4, 5], // I'll rip your sister's pussy
  "tor mayer putki fatabo": [3, 5], // I'll rip your mother's asshole
  "tor bara katbo": [4, 5], // I'll cut your dick
  "tor dhon katbo": [4, 5], // I'll cut your dick
  "tor baray kamor debo": [4, 5], // I'll bite your dick
  "chodnar bachcha tui": [3, 5], // You child of fucking
  "randir bachcha shala": [3, 5], // Whore's child bastard
  "tor mayer voday lathi": [4, 5], // Stick in your mother's pussy
  "tor mayer voday bash": [4, 5], // Bamboo in your mother's pussy
  "tor putkite bash": [3, 5], // Bamboo in your asshole
  "tor gude bash": [4, 5], // Bamboo in your pussy
  "tor mayer voda chushi": [4, 5], // I suck your mother's pussy
  "tor boner voda chushi": [4, 5], // I suck your sister's pussy
  "tor mayer voday angul": [4, 5], // Finger in your mother's pussy
  "tor mayer voday hat": [4, 5], // Hand in your mother's pussy
  "tor mayer voday pa": [4, 5], // Foot in your mother's pussy
  "malta chhorar mukhe": [3, 5], // Cum on the bastard's face
  "tor mukhe mal felbo": [1, 5], // I'll cum on your face
  "tor mayer mukhe mal": [1, 5], // Cum on your mother's face
  "beshyar voda": [5, 5], // Prostitute's pussy
  "randir putki": [5, 5], // Whore's asshole
  "khankir putki": [5, 5], // Whore's asshole (var)
  "shali chod": [3, 5], // Fuck sister-in-law
  "bhabi chod": [3, 5], // Fuck sister-in-law (married)
  "mami chod": [3, 5], // Fuck aunt
  "kaki chod": [3, 5], // Fuck aunt (paternal)
  "jethi chod": [3, 5], // Fuck aunt (elder paternal)
  "pisi chod": [1, 5], // Fuck aunt (father's sister)
  "mashi chod": [3, 5], // Fuck aunt (mother's sister)

  // ========================================
  // === Extended Body Part Insults (Bengali) ===
  // ========================================
  "বড় পুটকির মাগী": [4, 3], // Big asshole woman
  "ছোট বাড়ার ছেলে": [4, 3], // Small dick boy
  "ঢিলা গুদের মাগী": [4, 3], // Loose pussy woman
  "বড় গুদের মাগী": [4, 3], // Big pussy woman
  "ছোট ধনের ছেলে": [4, 3], // Small dick boy (alt)
  "ঢোলা পুটকির ছেলে": [4, 3], // Loose asshole boy
  "মোটা বাড়ার ছেলে": [1, 4], // Fat dick boy
  "চ্যাপ্টা পুটকির মাগী": [4, 3], // Flat asshole woman
  "লম্বা বাড়ার ছেলে": [4, 3], // Long dick boy
  "বাঁকা বাড়ার ছেলে": [4, 3], // Crooked dick boy
  "boro putkir magi": [4, 3], // Big asshole woman
  "chhoto barar chhele": [4, 3], // Small dick boy
  "dhila guder magi": [4, 3], // Loose pussy woman
  "boro guder magi": [4, 3], // Big pussy woman
  "chhoto dhoner chhele": [4, 3], // Small dick boy (alt)
  "dhola putkir chhele": [4, 3], // Loose asshole boy
  "mota barar chhele": [1, 4], // Fat dick boy
  "chyapta putkir magi": [4, 3], // Flat asshole woman
  "lomba barar chhele": [4, 3], // Long dick boy
  "baka barar chhele": [4, 3], // Crooked dick boy

  // ========================================
  // === Extended Profession-Based Insults ===
  // ========================================
  "তোর মা রাস্তায় দাঁড়ায়": [1, 4], // Your mother stands on the street
  "তোর বোন রাস্তায় দাঁড়ায়": [1, 4], // Your sister stands on the street
  "তোর মা ট্রাক ড্রাইভারদের চোদায়": [5, 5], // Your mother fucks truck drivers
  "তোর মা রিকশাওয়ালাদের চোদায়": [5, 5], // Your mother fucks rickshaw drivers
  "তোর মা মাতালদের চোদায়": [1, 3], // Your mother fucks drunkards
  "তোর মা ভিখারিদের চোদায়": [5, 5], // Your mother fucks beggars
  "তোর মা কুকুরদের সাথে শোয়": [1, 4], // Your mother sleeps with dogs
  "তোর বোন শুয়োরদের সাথে শোয়": [1, 4], // Your sister sleeps with pigs
  "tor maa rastay daray": [1, 4], // Your mother stands on the street
  "tor bon rastay daray": [1, 4], // Your sister stands on the street
  "tor maa truck driverdeer choday": [5, 5], // Your mother fucks truck drivers
  "tor maa rikshawalaader choday": [5, 5], // Your mother fucks rickshaw drivers
  "tor maa mataldeer choday": [1, 3], // Your mother fucks drunkards
  "tor maa bhikharideer choday": [5, 5], // Your mother fucks beggars
  "tor maa kukurdeer shathe shoy": [1, 4], // Your mother sleeps with dogs
  "tor bon shuorder shathe shoy": [1, 4], // Your sister sleeps with pigs

  // ========================================
  // === Extended Chittagonian/Noakhali Dialect ===
  // ========================================
  "tuain gor choira jait parosh": [3, 5], // You can go fuck yourself (Chittagonian)
  "tuainor mai gudi": [4, 4], // Your mother's pussy (Chittagonian)
  "tuainor bain gudi": [4, 4], // Your sister's pussy (Chittagonian)
  "tuain gudi mara": [4, 5], // You pussy fucker (Chittagonian)
  "tuainor bafor bura": [1, 4], // Your father's dick (Chittagonian)
  "khanki tuain": [5, 4], // Whore you (Chittagonian)
  "haramjadi tuain": [3, 4], // Bastard you (Chittagonian)
  "boinchot tuain": [3, 5], // Sister fucker you (Chittagonian)
  "maichot tuain": [5, 5], // Mother fucker you (Chittagonian)
  "tuainor putoh mairya dilam": [3, 4], // I'll beat your ass (Chittagonian)
  "tuain chudir bhai": [3, 5], // You fucker's brother (Chittagonian)
  "tuain haguir putoh": [3, 5], // You shit's ass (Chittagonian)
  "tuainor muh e hagu": [3, 5], // Shit in your face (Chittagonian)
  "tuainor maye beshsha": [5, 4], // Your mother is a whore (Chittagonian)
  "gor gudane tuain": [3, 5], // Ass fucker you (Chittagonian)
  "fatfoti tuain": [3, 4], // Worthless you (Noakhali)
  "geda tuain": [1, 4], // Stupid you (Noakhali)
  "heda tuain": [1, 4], // Idiot you (Noakhali)
  "bokachoda tuain": [1, 4], // Stupid fucker you (Noakhali)
  "gadhar bachcha tuain": [3, 4], // Donkey's child you (Noakhali)
  "shuar bachcha tuain": [3, 4], // Pig's child you (Noakhali)
  "kuttar bachcha tuain": [3, 4], // Dog's child you (Noakhali)
  "baler bachcha tuain": [3, 4], // Pubic hair's child you (Noakhali)
  "nar gutire chudi": [4, 5], // Fuck the male's balls (Noakhali)
  "mayer gutire chudi": [4, 5], // Fuck the mother's balls (Noakhali)

  // ========================================
  // === Extended Sylheti Dialect ===
  // ========================================
  "tumar ammar gou": [4, 4], // Your mother's pussy (Sylheti)
  "tumar bainar gou": [4, 4], // Your sister's pussy (Sylheti)
  "tumar furer bura": [1, 4], // Your father's dick (Sylheti)
  "tumar ammar futki": [3, 4], // Your mother's ass (Sylheti)
  "xala xuda": [3, 4], // Bastard fucker (Sylheti)
  "xendir fut": [5, 4], // Whore's son (Sylheti)
  "bali xuda": [3, 5], // Pubic hair fucker (Sylheti)
  "goure dhor": [4, 4], // Hold the pussy (Sylheti)
  "buray dhor": [4, 4], // Hold the dick (Sylheti)
  "futkire dhor": [3, 4], // Hold the ass (Sylheti)
  "tumar amma xendir foi": [5, 4], // Your mother is a whore (Sylheti)
  "tumar bain xendir foi": [5, 4], // Your sister is a whore (Sylheti)
  "xala harami": [3, 4], // Bastard (Sylheti)
  "bonor xuda": [3, 5], // Monkey fucker (Sylheti)
  "gadhar xuda": [3, 5], // Donkey fucker (Sylheti)
  "gurar xuda": [3, 5], // Horse fucker (Sylheti)
  "gorur xuda": [3, 5], // Cow fucker (Sylheti)
  "tumar amma footpathr bexxa": [5, 4], // Your mother is street whore (Sylheti)
  "tumar amma bazaarr bexxa": [5, 4], // Your mother is market whore (Sylheti)
  "tumar amma xorbor bexxa": [5, 4], // Your mother is everyone's whore (Sylheti)

  // ========================================
  // === Extended Rangpuri/North Bengal Dialect ===
  // ========================================
  "tohr mai ke chodim": [3, 5], // I'll fuck your mother (Rangpuri)
  "tohr boin ke chodim": [3, 5], // I'll fuck your sister (Rangpuri)
  "tohr bap ke chodim": [1, 4], // I'll fuck your father (Rangpuri)
  "tohr mayer bhoda": [4, 4], // Your mother's pussy (Rangpuri)
  "harami kutta": [3, 4], // Bastard dog (Rangpuri)
  "boinchod harami": [3, 4], // Sister fucker bastard (Rangpuri)
  "maichod harami": [3, 4], // Mother fucker bastard (Rangpuri)
  "randi tohr mai": [5, 4], // Whore is your mother (Rangpuri)
  "chhinar tohr boin": [3, 4], // Slut is your sister (Rangpuri)
  "tohr baper bara nosto": [1, 4], // Your father's dick is useless (Rangpuri)
  "tohr mayer gud e poka": [4, 4], // Worms in your mother's pussy (Rangpuri)
  "tohr baper bara e poka": [1, 4], // Worms on your father's dick (Rangpuri)
  "bhoda marani": [4, 5], // Pussy fucker (Rangpuri)
  "gud marani": [4, 4], // Pussy beater (Rangpuri)
  "bara kharani": [4, 4], // Dick eater (Rangpuri)
  "mal kharani": [3, 4], // Cum eater (Rangpuri)
  "chhi kharani": [3, 5], // Shit eater (Rangpuri)
  "moot kharani": [3, 4], // Piss eater (Rangpuri)
  "tohr pichone deim": [3, 4], // I'll give it from behind (Rangpuri)
  "tohr samne deim": [3, 4], // I'll give it from front (Rangpuri)

  // ========================================
  // === Extended Internet/Gaming Bengali ===
  // ========================================
  "mc sala noob": [5, 5], // Motherfucker noob
  "bc sala noob": [3, 5], // Sisterfucker noob
  "chodu gamer": [3, 5], // Fucker gamer
  "noob er bachcha": [2, 3], // Noob's child
  "noob sala chodu": [3, 4], // Noob bastard fucker
  "camper chodu sala": [3, 4], // Camper fucker bastard
  "hacker chodu sala": [3, 4], // Hacker fucker bastard
  "lag er maa chudi": [3, 5], // Fuck lag's mother
  "ping er maa chudi": [3, 5], // Fuck ping's mother
  "gg boga kha": [4, 3], // GG eat dick
  "ez boga kha": [4, 3], // EZ eat dick
  "gg putki mara": [3, 5], // GG get ass fucked
  "ez putki mara": [3, 5], // EZ get ass fucked
  "report kore tor maa chudbo": [3, 5], // I'll report and fuck your mother
  "tor pc te virus diye tor maa chudbo": [3, 5], // I'll virus your PC and fuck your mother
  "uninstall kor chodu": [3, 5], // Uninstall fucker
  "delete kor chodu": [3, 5], // Delete fucker
  "game chhad chodu": [3, 5], // Leave game fucker
  "afk chodu sala": [3, 4], // AFK fucker bastard
  "feeder chodu sala": [3, 4], // Feeder fucker bastard
  "troll chodu sala": [3, 4], // Troll fucker bastard
  "toxic chodu sala": [3, 4], // Toxic fucker bastard
  "griefing chodu": [3, 5], // Griefing fucker
  "stream snipe chodu": [3, 5], // Stream snipe fucker
  "aim bot chodu": [3, 5], // Aim bot fucker

  // ========================================
  // === Extended Scatological (Bengali Script) ===
  // ========================================
  "তোর মুখে গু": [3, 5], // Shit in your face
  "তোর মুখে হাগবো": [3, 5], // I'll shit in your face
  "তোর মুখে মুতবো": [3, 4], // I'll piss in your face
  "তোর খাবারে গু দেবো": [3, 5], // I'll put shit in your food
  "তোর খাবারে মুত দেবো": [3, 4], // I'll put piss in your food
  "তোর মায়ের মুখে গু": [3, 5], // Shit in your mother's face
  "তোর বোনের মুখে গু": [3, 5], // Shit in your sister's face
  "গু খোর তুই": [3, 5], // You shit eater
  "মুত খোর তুই": [3, 4], // You piss drinker
  "হাগু চোদা": [3, 5], // Shit fucker
  "মুতু চোদা": [3, 5], // Piss fucker
  "গু মাখা তুই": [3, 5], // You shit smeared
  "পাদ খোর তুই": [3, 4], // You fart sniffer
  "গু মুখ তুই": [3, 5], // You shit face
  "মুত মুখ তুই": [3, 4], // You piss face
  "tor mukhe hagbo": [3, 5], // I'll shit in your face
  "tor mukhe mutbo": [3, 4], // I'll piss in your face
  "tor khabare gu debo": [3, 5], // I'll put shit in your food
  "tor khabare mut debo": [3, 4], // I'll put piss in your food
  "tor mayer mukhe gu": [3, 5], // Shit in your mother's face
  "tor boner mukhe gu": [3, 5], // Shit in your sister's face
  "gu khor tui": [3, 5], // You shit eater
  "mut khor tui": [3, 4], // You piss drinker
  "hagu choda": [3, 5], // Shit fucker
  "mutu choda": [3, 5], // Piss fucker
  "gu makha tui": [3, 5], // You shit smeared
  "pad khor tui": [3, 4], // You fart sniffer
  "gu mukh tui": [3, 5], // You shit face
  "mut mukh tui": [3, 4], // You piss face

  // ========================================
  // === Extended Animal Compound Insults ===
  // ========================================
  "কুত্তার বাচ্চা রান্ডি": [5, 4], // Dog's child whore
  "শুয়োরের বাচ্চা রান্ডি": [5, 4], // Pig's child whore
  "গাধার বাচ্চা রান্ডি": [5, 4], // Donkey's child whore
  "বানরের বাচ্চা চোদা": [3, 5], // Monkey's child fucker
  "ছাগলের বাচ্চা চোদা": [3, 5], // Goat's child fucker
  "গরুর বাচ্চা চোদা": [3, 5], // Cow's child fucker
  "ঘোড়ার বাচ্চা চোদা": [3, 5], // Horse's child fucker
  "কুত্তা চোদা": [3, 5], // Dog fucker
  "শুয়োর চোদা": [3, 5], // Pig fucker
  "গাধা চোদা": [3, 5], // Donkey fucker
  "বানর চোদা": [3, 5], // Monkey fucker
  "গরু চোদা": [3, 5], // Cow fucker
  "ঘোড়া চোদা": [3, 5], // Horse fucker
  "ইঁদুর চোদা": [3, 5], // Rat fucker
  "সাপ চোদা": [3, 5], // Snake fucker
  "kuttar bachcha randi": [5, 4], // Dog's child whore
  "shuorer bachcha randi": [5, 4], // Pig's child whore
  "gadhar bachcha randi": [5, 4], // Donkey's child whore
  "banorer bachcha choda": [3, 5], // Monkey's child fucker
  "chhagoler bachcha choda": [3, 5], // Goat's child fucker
  "gorur bachcha choda": [3, 5], // Cow's child fucker
  "ghorar bachcha choda": [3, 5], // Horse's child fucker
  "kutta choda": [3, 5], // Dog fucker
  "gadha choda": [3, 5], // Donkey fucker
  "banor choda": [3, 5], // Monkey fucker
  "chhagol choda": [3, 5], // Goat fucker
  "goru choda": [3, 5], // Cow fucker
  "ghora choda": [3, 5], // Horse fucker
  "indur choda": [3, 5], // Rat fucker
  "shap choda": [3, 5], // Snake fucker

  // ========================================
  // === Extended Emasculation Insults ===
  // ========================================
  "তোর বাড়া নেই": [4, 4], // You have no dick
  "তোর বাড়া ছোট": [4, 4], // Your dick is small
  "তোর বাড়া কাজ করে না": [4, 4], // Your dick doesn't work
  "তোর বাড়া মরা": [4, 4], // Your dick is dead
  "তুই হিজড়া": [1, 4], // You are a hijra/eunuch
  "তুই নপুংসক": [1, 4], // You are impotent
  "তুই মেয়েমানুষ": [1, 4], // You are a woman (emasculating)
  "তোর ধন দাঁড়ায় না": [4, 4], // Your dick can't get up
  "তোর বাড়া দুধের মতো নরম": [4, 4], // Your dick is soft like milk
  "tor bara nei": [4, 4], // You have no dick
  "tor bara chhoto": [4, 4], // Your dick is small
  "tor bara kaj kore na": [4, 4], // Your dick doesn't work
  "tor bara mora": [4, 4], // Your dick is dead
  "tui hijra": [1, 4], // You are a hijra/eunuch
  "tui nopungsok": [1, 4], // You are impotent
  "tui meyemanush": [1, 4], // You are a woman (emasculating)
  "tor dhon daray na": [4, 4], // Your dick can't get up
  "tor bara dudher moto norom": [4, 4], // Your dick is soft like milk

  // ========================================
  // === Extended Evasion Spellings (Bengali Romanized) ===
  // ========================================
  "ch0di": [3, 5], // Fuck (evasion)
  "m4g1": [5, 5], // Woman/prostitute (evasion)
  "b0g4": [4, 5], // Dick (evasion)
  "kh4nk1": [5, 5], // Whore (evasion)
  "r4nd1": [5, 5], // Whore (evasion)
  "gu6": [4, 5], // Pussy (evasion)
  "pu7ki": [3, 5], // Ass (evasion)
  "b4r4": [4, 5], // Dick (evasion)
  "ch00d": [3, 5], // Fuck (evasion)
  "b@ra": [4, 5], // Dick (evasion)
  "gu@d": [4, 5], // Pussy (evasion)
  "put@ki": [3, 5], // Ass (evasion)
  "r@ndi": [5, 5], // Whore (evasion)
  "h@rami": [3, 5], // Bastard (evasion)
  "b0kachod@": [1, 5], // Stupid fucker (evasion)
  "m@@rchod": [5, 5], // Motherfucker (evasion)
  "b0nchod": [3, 5], // Sisterfucker (evasion)
  "m@@ch0d": [5, 5], // Motherfucker (evasion)
  "b0nch0d": [3, 5], // Sisterfucker (evasion)
  "h@r@mz@d@": [3, 5], // Bastard (evasion)
  "ch0d@r b@cch@": [3, 5], // Fucker's child (evasion)
  "kh@nkir b@cch@": [5, 5], // Whore's child (evasion)
  "b3shya": [5, 5], // Prostitute (evasion)
  "ch0dn4": [3, 5], // To fuck (evasion)
  "m4l": [3, 5], // Cum (evasion)

  // ========================================
  // === Extended Insult Combinations ===
  // ========================================
  "নষ্ট মাগীর বাচ্চা": [1, 4], // Ruined woman's child
  "পতিতার বাচ্চা": [5, 4], // Prostitute's child
  "ডোম মাগীর বাচ্চা": [1, 4], // Low-caste woman's child
  "মেথর মাগীর বাচ্চা": [1, 4], // Sweeper woman's child
  "চামারের বাচ্চা": [1, 4], // Leather-worker's child (caste slur)
  "ভাঙারির বাচ্চা": [1, 4], // Junk dealer's child
  "চোরের বাচ্চা": [1, 4], // Thief's child
  "ডাকাতের বাচ্চা": [1, 4], // Robber's child
  "খুনির বাচ্চা": [5, 5], // Murderer's child
  "ফাঁসির আসামী": [5, 5], // Death row convict
  "nosto magir bachcha": [1, 4], // Ruined woman's child
  "potitar bachcha": [5, 4], // Prostitute's child
  "dom magir bachcha": [1, 4], // Low-caste woman's child
  "methor magir bachcha": [1, 4], // Sweeper woman's child
  "chamarer bachcha": [1, 4], // Leather-worker's child (caste slur)
  "bhangarir bachcha": [1, 4], // Junk dealer's child
  "chorer bachcha": [1, 4], // Thief's child
  "dakater bachcha": [1, 4], // Robber's child
  "khunir bachcha": [5, 5], // Murderer's child
  "fashir ashami": [5, 5], // Death row convict

  // ========================================
  // === Extended Abuse Phrases ===
  // ========================================
  "tor jiboner kono dam nei": [3, 4], // Your life has no value
  "tor jonmo howa uchit hoyni": [3, 4], // You shouldn't have been born
  "tor maa tor bap ke chene na": [1, 4], // Your mother doesn't know your father
  "tor bap ke kheuje pawa jayna": [1, 4], // Your father can't be found
  "tor bap kon shala seta keu jane na": [1, 4], // Nobody knows who your father is
  "tor maa rastay khunje peyeche toke": [3, 4], // Your mother found you on the street
  "tor maa dustbine fele diyechilo toke": [3, 4], // Your mother threw you in dustbin
  "toke keu chayna ei duniyay": [3, 4], // Nobody wants you in this world
  "tor mukh dekhle manush thuke": [3, 4], // People spit seeing your face
  "tor nam shune manush hase": [3, 4], // People laugh hearing your name
  "tor bari te keu ashena lojjay": [3, 4], // Nobody comes to your house from shame
  "tor shathe keu kotha bole na lojjay": [3, 4], // Nobody talks to you from shame
  "tor family te shob harami": [3, 4], // Everyone in your family is bastard
  "tor family te shob randi": [5, 4], // Everyone in your family is whore
  "tor bongsho te shob chodu": [3, 5], // Everyone in your lineage is fucker
  "tor bongsho te shob magi": [5, 4], // Everyone in your lineage is whore
  "তোর জীবনের কোনো দাম নেই": [3, 4], // Your life has no value
  "তোর জন্ম হওয়া উচিত হয়নি": [3, 4], // You shouldn't have been born
  "তোর মা তোর বাপকে চেনে না": [1, 4], // Your mother doesn't know your father
  "তোর বাপকে খুঁজে পাওয়া যায় না": [1, 4], // Your father can't be found
  "তোকে কেউ চায় না এই দুনিয়ায়": [3, 4], // Nobody wants you in this world
  "তোর মুখ দেখলে মানুষ থুকে": [3, 4], // People spit seeing your face
  "তোর নাম শুনে মানুষ হাসে": [3, 4], // People laugh hearing your name
  "তোর পরিবারে সব হারামি": [3, 4], // Everyone in your family is bastard
  "তোর পরিবারে সব রান্ডি": [5, 4], // Everyone in your family is whore
  "তোর বংশে সব চোদু": [3, 5], // Everyone in your lineage is fucker
};
const bengaliBadWords: Record<string, { s: number; c: number }> = {};
for (const [k, [s, c]] of Object.entries(_d)) {
    bengaliBadWords[k] = { s, c };
}
export default bengaliBadWords;

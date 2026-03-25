// src/languages/tamil-words.ts

/**
 * Tamil profanity words list
 * Contains common profanities in both Tamil script and Roman transliteration
 * ⚠️ Warning: This file contains explicit language in Tamil
 */
const _d: Record<string, [number, number]> = {
  // ========================================
  // === Tamil Script Profanities ===
  // ========================================
  "ஓத்தா": [3, 4], // Otha (f**k off)
  "தேவடியா": [5, 4], // Thevidiya (prostitute)
  "கூதி": [3, 4], // Koothi (female genitalia)
  "புண்ட": [3, 4], // Punda (female genitalia)
  "புண்டை": [3, 4], // Pundai (female genitalia)
  "பொட்டை": [3, 4], // Pottai (eunuch/transgender slur)
  "மயிரு": [3, 4], // Mayiru (pubic hair)
  "சுன்னி": [4, 4], // Sunni (penis)
  "தாயோளி": [3, 4], // Thayoli (motherf**ker)
  "நாய்": [2, 4], // Naai (dog)
  "புள்ள": [3, 4], // Pulla (worm/kid, used as insult)
  "முட்டாள்": [1, 3], // Muttaal (fool)
  "பொறுக்கி": [3, 4], // Porukki (scoundrel/pimp)
  "கோமியம்": [1, 3], // Gomiyam (cow dung)
  "கும்மு": [1, 3], // Kummu (punch/hit)
  "அயிர்": [4, 4], // Ayir (testicles)
  "பால்": [1, 2], // Paal (milk, euphemism for semen)
  "வெட்ட": [3, 4], // Vetta (cut/kill)
  "ஊம்பு": [3, 4], // Oombu (suck)
  "மாட்டு": [1, 3], // Maatu (cattle, used as insult)
  "ஐயா கூதி": [5, 5], // Aiyaa koothi (sir's cunt)

  // ========================================
  // === Roman Script Transliterations ===
  // ========================================
  "otha": [3, 5], // f**k off
  "thevidiya": [5, 5], // prostitute
  "koothi": [3, 5], // female genitalia
  "punda": [3, 5], // female genitalia
  "pundai": [3, 5], // female genitalia
  "pottai": [3, 5], // eunuch/transgender slur
  "mayiru": [3, 5], // pubic hair
  // "sunni": [4, 5], // penis — false positive: Sunni Islam (~1.8 billion people)
  "thayoli": [3, 5], // motherf**ker
  "naai": [2, 4], // dog (insult)
  "pulla": [3, 5], // worm/kid (insult)
  "muttaal": [1, 3], // fool
  "porukki": [3, 5], // scoundrel/pimp
  "gomiyam": [1, 3], // cow dung
  "kummu": [1, 3], // punch/hit
  "ayir": [4, 5], // testicles
  "paal": [1, 2], // milk (euphemism for semen)
  "vetta": [3, 5], // cut/kill
  "oombu": [3, 5], // suck
  "maatu": [1, 3], // cattle (insult)
  "aiyaa koothi": [5, 5], // sir's cunt

  // Common variations and combinations
  "thevidiya paiyan": [5, 4], // Son of a prostitute
  "thevidiya payale": [3, 4], // Vocative form
  "otha pundai": [5, 5], // f**k off cunt
  "baadu": [3, 4], // Derogatory term
  "loosu": [1, 4], // Crazy/fool
  "enna da mayiru": [3, 4], // What the hell
  "graandi": [3, 4], // Derogatory term
  "kandaaala": [3, 4], // Derogatory term
  "dai pundai": [5, 5], // hey cunt
  "kena punda": [1, 4], // Stupid
  "mutta punda": [1, 4], // Stupid
  "narakoothi": [3, 4], // Dog + female genitalia
  "akkul thukki": [3, 4], // lifted the armpit (vulgar gesture)
  "pacha thevudiya": [5, 4], // Total prostitute
  "thevadiya paiya": [5, 4], // Son of a prostitute
  "myra": [3, 4], // Romanized short form of mayiru
  "pundamavaney": [4, 4], // Born of a vagina
  "sunni oombu": [3, 4], // Vulgar phrase

  // Common misspellings and variations
  "oththaa": [3, 5], // f**k off (variant)
  "ottha": [3, 5], // f**k off (variant)
  "thayli": [3, 5], // motherf**ker (variant)
  "thailee": [3, 5], // motherf**ker (variant)
  "koothee": [3, 5], // female genitalia (variant)
  "kooti": [3, 5], // female genitalia (variant)
  "pundek": [3, 5], // female genitalia (variant)
  "pundaik": [3, 5], // female genitalia (variant)
  "illa pundek": [5, 5], // no cunt (insult)
  "thevdiya": [5, 5], // prostitute (variant)
  "poriki": [3, 5], // scoundrel (variant)
  "kuthi": [3, 5], // female genitalia (variant)
  "soothu": [3, 5], // Anus
  "lavadey": [4, 5], // Penis
  "lavda": [4, 5], // penis (variant)
  "sappi": [3, 5], // Sucker

  // Additional Tamil profanity
  "oombu da": [3, 4], // Suck it
  "pundai mavanae": [4, 4], // Pussy-born
  "koothi payale": [3, 4], // Vulgar insult
  "thevudiya mavan": [5, 4], // Son of a prostitute
  "okka": [3, 5], // Fuck (variant)
  "okkala": [3, 5], // Fucking
  "soothu nakki": [3, 4], // Ass licker
  "poolu": [4, 4], // Dick (variant)
  "poolai oombuda": [4, 4], // Suck the dick
  "kena pundai": [1, 4], // Stupid cunt
  "akka koothi": [4, 4], // Sister's pussy
  "amma koothi": [4, 4], // Mother's pussy
  "thayoli paiyan": [5, 5], // Motherfucker's son
  "kevalama": [1, 3], // Shameful
  "olai pottan": [3, 4], // Broken eunuch (insult)
  "katukutty": [3, 4], // Vulgar term
  "ammayandi": [3, 4], // Derogatory term
  "koodhi magane": [5, 5], // Son of a cunt

  // Tamil script additions
  "ஊம்பு டா": [3, 4], // Oombu da
  "புண்டை மாவனே": [3, 4], // Pundai mavanae
  "கூத்தி பயலே": [3, 4], // Koothi payale
  "தேவுடிய மாவன்": [3, 4], // Thevudiya mavan
  "சூத்து நக்கி": [3, 4], // Soothu nakki
  "பூலு": [3, 4], // Poolu
  "அக்கா கூதி": [3, 4], // Akka koothi
  "அம்மா கூதி": [3, 4], // Amma koothi
  "கூதி மகனே": [3, 4], // Koodhi magane

  // More Tamil profanity - Roman script
  "aambala koothi": [5, 5], // Male's cunt
  "ammadi pundai": [5, 5], // Mother's cunt
  "anga soothu": [3, 4], // There ass (insult)
  "baadu punda": [5, 5], // Bitch cunt
  "dei kena": [1, 4], // Hey stupid
  "dei punda": [5, 5], // Hey cunt
  "ennada punda": [5, 5], // What the cunt
  "gommala": [4, 4], // Balls (insult)
  "kaai": [4, 4], // Dick (slang)
  "kandaarai": [3, 5], // Shit
  "kazhudhai": [1, 3], // Donkey (insult)
  "keezhadi": [3, 4], // Low person
  "kena payale": [1, 4], // Stupid fellow
  "ki adi": [3, 4], // Eat a kick
  "koothichi": [3, 4], // Slut
  "koodhi munda": [5, 5], // Cunt face
  "kudikaran": [1, 3], // Drunkard (insult)
  "kusu": [1, 3], // Fart
  "kuthimagane": [5, 5], // Son of a cunt
  "lavadai": [4, 4], // Dick (variant)
  "lenda": [4, 4], // Dick (slang)
  "maadu": [1, 3], // Cattle (insult)
  "mairu pudungi": [3, 4], // Pubic hair plucker
  "mayira pudunguda": [3, 4], // Pluck the pubic hair
  "mayiru poodai": [5, 5], // Pubic hair cunt
  "molai": [4, 4], // Breast (vulgar context)
  "moodevi": [3, 4], // Goddess of misfortune (insult)
  "mooku oombura": [3, 4], // Nose sucker (insult)
  "myiru": [3, 4], // Pubic hair variant
  "na koothi": [5, 5], // Dog cunt
  "naai koodhi": [5, 5], // Dog cunt variant
  "naaye": [3, 4], // Dog (vocative)
  "narakoodhi": [5, 5], // Dog cunt
  "okkali": [3, 5], // Fucking
  "olmaari": [3, 4], // Pervert
  "ommala": [3, 4], // Your mother (start of insult)
  "ommala koothi": [5, 5], // Your mother's cunt
  "oor koothi": [3, 4], // Village slut
  "oor otha": [3, 5], // Village fucker
  "paal kudi": [3, 4], // Milk drinker (childish insult)
  "pacha koothi": [5, 5], // Raw cunt
  "pachakoothi": [3, 4], // Variant
  "pandi": [2, 4], // Pig (slang insult)
  "panni": [2, 4], // Pig
  "panni punda": [5, 5], // Pig cunt
  "podei": [3, 4], // Beat (vulgar)
  "poolu sappi": [4, 4], // Dick sucker
  "pottachi": [3, 4], // Female eunuch
  "potta koothi": [5, 5], // Eunuch cunt
  "pullu": [4, 4], // Dick (variant)
  "pundai payale": [5, 5], // Cunt fellow
  "pundamavan": [5, 5], // Cunt born
  "saathaan": [1, 3], // Satan (insult)
  "sevuru": [3, 4], // Corpse (insult)
  "sootha moodi": [3, 4], // Shut your ass
  "soothu kolutha": [3, 4], // Light the ass on fire
  "soothu oombura": [3, 4], // Ass sucker
  "sunni koodhi": [5, 5], // Dick cunt
  "sunni sappi": [4, 4], // Dick sucker
  "thayir sappaan": [3, 4], // Curd sucker (insult)
  "thevadiya payale": [5, 4], // Son of a prostitute (vocative)
  "thevadiya pasanga": [5, 4], // Children of a prostitute
  "thodai": [3, 4], // Thigh (vulgar context)
  "thoombu": [3, 4], // Trunk (insult)
  "thottal": [3, 4], // Untouchable (very offensive)
  "ukkaru": [3, 4], // Sit (vulgar command)
  "venna punda": [5, 5], // Butter cunt (useless)
  "vesi": [5, 4], // Prostitute
  "vesipaya": [5, 4], // Prostitute's son
  "vesikoothi": [5, 5], // Prostitute cunt

  // More Tamil script additions
  "ஆம்பள கூதி": [3, 4], // Aambala koothi
  "கழுதை": [1, 3], // Kazhudhai (donkey)
  "கூத்தி முண்ட": [3, 4], // Koodhi munda
  "கூத்திச்சி": [3, 4], // Koothichi (slut)
  "பச்ச கூதி": [3, 4], // Pacha koothi
  "பன்னி": [3, 4], // Panni (pig)
  "பூலு சப்பி": [3, 4], // Poolu sappi
  "சூத்து மூடு": [3, 4], // Sootha moodi
  "சூத்து ஊம்பு": [3, 4], // Soothu oombura
  "சுன்னி சப்பி": [3, 4], // Sunni sappi
  "தேவடியா பசங்க": [3, 4], // Thevadiya pasanga
  "வேசி": [5, 4], // Vesi (prostitute)
  "வேசிபய": [3, 4], // Vesipaya
  "ஓக்கலி": [3, 4], // Okkali
  "ஊர் கூத்தி": [3, 4], // Oor koothi
  "ஒம்மால கூத்தி": [3, 4], // Ommala koothi
  "நாய்க்கூதி": [3, 4], // Naaikoodhi
  "மயிரு புடுங்குடா": [3, 4], // Mayira pudunguda
  "மூடேவி": [3, 4], // Moodevi

  // ========================================
  // === Extended Tamil Profanity (Roman) ===
  // ========================================
  "aambala soothu": [3, 4], // Male's ass
  "adi otha": [3, 5], // Beat and fuck
  "akka pundai": [5, 5], // Sister's cunt
  "akka soothu": [3, 4], // Sister's ass
  "ammadi soothu": [3, 4], // Mother's ass
  "amma oombu": [3, 4], // Mother suck (insult)
  "amma pundai otha": [5, 5], // Fuck mother's cunt
  "anga pundai": [5, 5], // There cunt
  "anna koothi": [5, 5], // Brother's cunt (insult)
  "asingam": [1, 4], // Shameful/ugly
  "avala otha": [3, 5], // Fuck her
  "baadu koothi": [5, 5], // Bitch cunt
  "baadu soothu": [3, 4], // Bitch ass
  "baadu sunni": [4, 4], // Bitch dick (compound)
  "chee koothi": [5, 5], // Disgusting cunt
  "chinna punda": [5, 5], // Small cunt
  "chinna sunni": [4, 4], // Small dick
  "dei koothi": [5, 5], // Hey cunt
  "dei soothu": [3, 4], // Hey ass
  "enna koothi": [5, 5], // What cunt
  "enna soothu": [3, 4], // What ass
  "gommala udai": [4, 4], // Break the balls
  "irumbu sunni": [4, 4], // Iron dick
  "kai adi": [4, 4], // Masturbation (hand hit)
  "kari koothi": [5, 5], // Dark cunt (racial vulgar)
  "kari sunni": [4, 4], // Dark dick (racial vulgar)
  "kazhudhai punda": [5, 5], // Donkey cunt
  "kazhudhai soothu": [3, 4], // Donkey ass
  "keezhtharam": [3, 4], // Low-class person
  "konju punda": [5, 5], // Shrimp cunt (small/useless)
  "koothimagal": [5, 5], // Daughter of a cunt
  "koothi mairu": [5, 5], // Cunt's pubic hair
  "koothi munda sappi": [5, 5], // Cunt face sucker
  "koothi nakki": [5, 5], // Cunt licker
  "koothi odanji": [5, 5], // Cunt breaker
  "koothi sappi": [5, 5], // Cunt sucker
  "kudimagan": [1, 3], // Son of a drunkard
  "kunju sunni": [4, 4], // Little dick
  "kuppai koothi": [5, 5], // Garbage cunt
  "kuppai punda": [5, 5], // Garbage cunt (variant)
  "lavadai sappi": [4, 4], // Dick sucker (variant)
  "mairu punda": [5, 5], // Pubic hair cunt
  "mairu soothu": [3, 4], // Pubic hair ass
  "mama punda": [5, 5], // Uncle's cunt
  "mamanar soothu": [1, 4], // Father-in-law's ass
  "mandi koothi": [5, 5], // Cattle cunt
  "mandi soothu": [3, 4], // Cattle ass
  "mayiru koothi": [5, 5], // Pubic hair cunt
  "mayiru sappi": [3, 4], // Pubic hair sucker
  "modha koothi": [1, 4], // Stupid cunt
  "molai paal": [4, 4], // Breast milk (vulgar)
  "molai sappi": [4, 4], // Breast sucker
  "motta punda": [5, 5], // Bald cunt
  "motta soothu": [3, 4], // Bald ass
  "muttaa punda": [1, 4], // Stupid cunt
  "muttaal koothi": [1, 4], // Fool cunt
  "myre": [3, 4], // Pubic hair (texting short form)
  "na punda": [5, 5], // Dog cunt
  "na soothu": [3, 4], // Dog ass
  "naai oombu": [3, 4], // Dog suck
  "naai punda": [5, 5], // Dog cunt (variant)
  "naai soothu": [3, 4], // Dog ass (variant)
  "naai sunni": [4, 4], // Dog dick
  "naaye poda": [3, 4], // Get lost dog
  "okkali sunni": [4, 5], // Fucking dick
  "ommala pundai": [5, 5], // Your mother's cunt (variant)
  "ommala soothu": [3, 4], // Your mother's ass
  "oor baadu": [3, 4], // Village bitch
  "oor punda": [5, 5], // Village cunt
  "oor vesi": [5, 4], // Village prostitute
  "oor vesikoothi": [5, 5], // Village prostitute cunt
  "otha da": [3, 5], // Fuck off (male)
  "otha di": [3, 5], // Fuck off (female)
  "otha koothi": [5, 5], // Fuck off cunt
  "otha loosu": [3, 5], // Fuck off crazy
  "otha myre": [3, 5], // Fuck off pubic hair
  "otha poda": [3, 5], // Fuck off get lost
  "otha soothu": [3, 5], // Fuck off ass
  "oththa": [3, 5], // Fuck off (variant)
  "oththa punda": [5, 5], // Fuck off cunt (variant)
  "pacha punda": [5, 5], // Raw cunt
  "pacha soothu": [3, 4], // Raw ass
  "pacha vesi": [5, 4], // Total prostitute
  "pandi punda": [5, 5], // Pig cunt
  "pandi soothu": [3, 4], // Pig ass
  "panni oombu": [3, 4], // Pig suck
  "pathu koothi": [5, 5], // Ten cunts
  "pathu sunni": [4, 4], // Ten dicks
  "pee koothi": [5, 5], // Shit cunt
  "periya koothi": [5, 5], // Big cunt
  "periya punda": [5, 5], // Big cunt (variant)
  "periya soothu": [3, 4], // Big ass
  "periya sunni": [4, 4], // Big dick
  "podei da": [3, 4], // Beat it (insult)
  "podei di": [3, 4], // Beat it (female)
  "poolu oombu": [4, 4], // Suck the dick
  "poolu thattu": [4, 4], // Dick hit
  "poolu udai": [4, 4], // Dick break
  "pudungu sunni": [4, 4], // Pluck the dick
  "pullu oombu": [4, 4], // Dick suck (variant)
  "pullu sappi": [4, 4], // Dick suck (variant)
  "puluthee": [3, 4], // Worm (insult)
  "pundai adi": [5, 5], // Cunt hit
  "pundai koothi": [5, 5], // Cunt (redundant compound insult)
  "pundai mairu": [5, 5], // Cunt's pubic hair
  "pundai nakki": [5, 5], // Cunt licker (variant)
  "pundai odai": [5, 5], // Cunt break
  "pundai thattu": [5, 5], // Cunt hit
  "sappi da": [3, 4], // Suck it (male)
  "sappi di": [3, 4], // Suck it (female)
  "semma koothi": [5, 5], // Super cunt
  "semma punda": [5, 5], // Super cunt (variant)
  "sevaru koothi": [5, 5], // Corpse cunt
  "sinna punda": [5, 5], // Small cunt (variant)
  "soothu adi": [3, 4], // Ass hit
  "soothu koothi": [5, 5], // Ass cunt
  "soothu mairu": [3, 4], // Ass pubic hair
  "soothu mara": [3, 4], // Ass tree (insult)
  "soothu sappi": [3, 4], // Ass sucker
  "soothu thattu": [3, 4], // Ass hit (variant)
  "sunni adi": [4, 4], // Dick hit
  "sunni koothi mavan": [5, 5], // Dick cunt born
  "sunni mavan": [4, 4], // Dick born
  "sunni poolu": [4, 4], // Dick (compound)
  "sunni thattu": [4, 4], // Dick slap
  "sunni udai": [4, 4], // Dick break
  "thaayoli paiyan": [5, 5], // Motherfucker's son (variant)
  "thanni koothi": [5, 5], // Water cunt (loose)
  "thanni punda": [5, 5], // Water cunt (loose, variant)
  "thayoli batch": [5, 5], // Motherfucker batch
  "thayoli koothi": [5, 5], // Motherfucker cunt
  "thayoli punda": [5, 5], // Motherfucker cunt (variant)
  "thevadiya batch": [5, 4], // Prostitute batch
  "thevadiya koothi": [5, 5], // Prostitute cunt
  "thevadiya punda": [5, 5], // Prostitute cunt (variant)
  "thevadiya soothu": [5, 4], // Prostitute ass
  "thevadiya sunni": [5, 4], // Prostitute dick
  "thoo koothi": [5, 5], // Spit cunt
  "thookku sunni": [4, 4], // Hanging dick
  "venna koothi": [5, 5], // Butter cunt (useless, variant)
  "vesi batch": [5, 4], // Prostitute batch
  "vesi koothi": [5, 5], // Prostitute cunt (variant)
  "vesi mavan": [5, 4], // Prostitute's son
  "vesi punda": [5, 5], // Prostitute cunt
  "vesi soothu": [5, 4], // Prostitute ass

  // ========================================
  // === Madras Bashai (Slang) ===
  // ========================================
  "figure otha": [3, 5], // Figure fuck (objectifying)
  "galeej": [3, 4], // Dirty/vulgar (from Hindi)
  "galatta punda": [5, 5], // Trouble cunt
  "goiyala": [4, 4], // Balls (slang)
  "gumbal koothi": [5, 5], // Gang cunt
  "item koothi": [5, 5], // Item cunt (objectifying)
  "jollu viduradhu": [3, 4], // Drooling (being pervy)
  "kattapunda": [5, 5], // Cut cunt
  "kettavan": [3, 4], // Bad man
  "kettava": [3, 4], // Bad woman
  "kodumai koothi": [5, 5], // Torture cunt
  "kuppam punda": [5, 5], // Slum cunt
  "loosu koothi": [5, 5], // Crazy cunt
  "loosu punda": [5, 5], // Crazy cunt (variant)
  "mokka punda": [5, 5], // Boring cunt
  "naatukoothi": [5, 5], // Country cunt
  "olu podra": [3, 4], // Leak/useless
  "settai koothi": [5, 5], // Mischief cunt
  "somberi koothi": [5, 5], // Lazy cunt
  "thara local koothi": [5, 5], // Very local cunt (classist)
  "waste koothi": [5, 5], // Waste cunt

  // ========================================
  // === Sri Lankan Tamil Profanity ===
  // ========================================
  "hutti punda": [1, 4], // Idiot cunt (SL Tamil)
  "kundi": [3, 4], // Ass (SL Tamil)
  "kundi adi": [3, 4], // Ass hit (SL Tamil)
  "modda": [4, 4], // Dick (SL Tamil, borrowed)
  "moddai oombu": [4, 4], // Suck the dick (SL Tamil)
  "ponnaya": [3, 4], // Effeminate man (SL Tamil derogatory)
  "pundai vettu": [5, 5], // Cut the cunt (SL Tamil)
  "salli vesi": [5, 4], // Cheap prostitute (SL Tamil)
  "sunni vetti": [4, 4], // Dick cutting (SL Tamil insult)
  "thambiya punda": [5, 5], // Little brother cunt (SL Tamil)
  "umbala kundi": [3, 4], // Your ass (SL Tamil)

  // ========================================
  // === Malaysian Tamil Profanity ===
  // ========================================
  "bodoh punda": [1, 4], // Stupid cunt (MY Tamil, Malay mix)
  "dei pundek": [5, 5], // Hey cunt (Malaysian variant)
  "keling koothi": [5, 5], // Racial slur + cunt (MY Tamil)
  "machan punda": [5, 5], // Friend's cunt (MY Tamil)
  "mabuk koothi": [1, 3], // Drunk cunt (MY Tamil, Malay mix)
  "pukimak": [5, 5], // Mother's cunt (MY Tamil/Malay)
  "pundek amma": [5, 5], // Cunt mother (MY Tamil)
  "sial pundek": [5, 5], // Damn cunt (MY Tamil, Malay mix)
  "thayoli pundek": [5, 5], // Motherfucker cunt (MY Tamil)
  "thambi pundek": [5, 5], // Brother cunt (MY Tamil)

  // ========================================
  // === More Tamil Script Additions ===
  // ========================================
  "ஆம்பள சூத்து": [3, 4], // Aambala soothu
  "அக்கா புண்டை": [3, 4], // Akka pundai
  "அக்கா சூத்து": [3, 4], // Akka soothu
  "அம்மா ஊம்பு": [3, 4], // Amma oombu
  "அவள ஓத்தா": [3, 4], // Avala otha
  "சின்ன புண்ட": [3, 4], // Chinna punda
  "சின்ன சுன்னி": [3, 4], // Chinna sunni
  "என்ன கூத்தி": [3, 4], // Enna koothi
  "கழுதை புண்ட": [3, 4], // Kazhudhai punda
  "கூத்தி மகள்": [3, 4], // Koothimagal
  "கூத்தி மயிரு": [3, 4], // Koothi mairu
  "கூத்தி நக்கி": [3, 4], // Koothi nakki
  "கூத்தி சப்பி": [3, 4], // Koothi sappi
  "குப்பை கூத்தி": [3, 4], // Kuppai koothi
  "மயிரு கூத்தி": [3, 4], // Mayiru koothi
  "மொலை சப்பி": [3, 4], // Molai sappi
  "முட்டா புண்ட": [3, 4], // Muttaa punda
  "நாய் புண்ட": [3, 4], // Naai punda
  "நாய் சூத்து": [3, 4], // Naai soothu
  "நாய் சுன்னி": [3, 4], // Naai sunni
  "ஒத்தா டா": [3, 4], // Otha da
  "ஒத்தா டி": [3, 4], // Otha di
  "பச்ச வேசி": [3, 4], // Pacha vesi
  "பன்னி புண்ட": [3, 4], // Pandi punda
  "பெரிய கூத்தி": [3, 4], // Periya koothi
  "பெரிய சுன்னி": [3, 4], // Periya sunni
  "பூலு ஊம்பு": [3, 4], // Poolu oombu
  "புண்டை அடி": [3, 4], // Pundai adi
  "புண்டை நக்கி": [3, 4], // Pundai nakki
  "சப்பி டா": [3, 4], // Sappi da
  "செம்ம கூத்தி": [3, 4], // Semma koothi
  "சூத்து அடி": [3, 4], // Soothu adi
  "சூத்து சப்பி": [3, 4], // Soothu sappi
  "சுன்னி அடி": [3, 4], // Sunni adi
  "சுன்னி மாவன்": [3, 4], // Sunni mavan
  "தாயோளி பண்ட": [3, 4], // Thayoli punda
  "தேவடியா சூத்து": [3, 4], // Thevadiya soothu
  "வேசி பண்ட": [3, 4], // Vesi punda
  "வேசி சூத்து": [3, 4], // Vesi soothu
  "வேசி மாவன்": [3, 4], // Vesi mavan
  "போன்னாய": [3, 4], // Ponnaya (SL Tamil)
  "குண்டி": [3, 4], // Kundi (SL Tamil)

  // ========================================
  // === Tamil Internet Slang ===
  // ========================================
  "otha myr": [3, 5], // Fuck off pubic hair (texting)
  "koodhi mgne": [5, 5], // Son of a cunt (texting)
  "tvdya": [2, 3], // Thevidiya abbreviation
  "thyoli": [2, 3], // Thayoli abbreviation
  "othmyr": [2, 3], // Compound (texting)
  "myru": [2, 3], // Pubic hair (texting variant)
  "pnda": [2, 3], // Punda abbreviation
  "snni": [2, 3], // Sunni abbreviation
  "sthu": [2, 3], // Soothu abbreviation
  "kthi": [2, 3], // Koothi abbreviation
  "dei othmyr": [3, 5], // Hey fuck-pubic-hair (texting)
  "aama kthi": [5, 5], // Mother cunt (texting)

  // ========================================
  // === More Romanized Tamil Profanity ===
  // ========================================
  "aambala pundai": [5, 5], // Male's cunt
  "akka sunni": [4, 5], // Sister's dick (absurd insult)
  "amma poolai oombu": [4, 5], // Suck mother's dick
  "amma soothu otha": [3, 5], // Fuck mother's ass
  "anga sunni": [4, 5], // There dick
  "anna punda": [5, 5], // Brother's cunt (insult)
  "anna soothu": [3, 5], // Brother's ass
  "appan koothi": [1, 5], // Father's cunt
  "appan soothu": [1, 5], // Father's ass
  "avana otha": [3, 5], // Fuck him
  "avanuku sunni illa": [4, 5], // He has no dick
  "avaluku pudikum sunni": [4, 5], // She likes dick
  "baadu mayiru": [3, 5], // Bitch pubic hair
  "chee mayiru": [3, 5], // Disgusting pubic hair
  "chinna mayiru": [3, 5], // Small pubic hair
  "dei kena baadu": [1, 5], // Hey stupid bitch
  "dei poolai oombu": [4, 5], // Hey suck the dick
  "dei venna sunni": [4, 5], // Hey butter dick (useless)
  "ennada soothu": [3, 5], // What the ass
  "galeej koothi": [5, 5], // Dirty cunt
  "irumbu koothi": [5, 5], // Iron cunt (hard)
  "kaai udai": [4, 5], // Dick break
  "kaai oombu": [4, 5], // Suck dick (slang)
  "kai adippa": [4, 5], // Masturbator
  "kandaarai koothi": [5, 5], // Shit cunt
  "kari baadu": [3, 5], // Dark bitch (racial)
  "kari mayiru": [3, 5], // Dark pubic hair (racial)
  "kattai koothi": [5, 5], // Wooden cunt
  "keezh taram koothi": [5, 5], // Low class cunt
  "kena koothi": [1, 5], // Stupid cunt (variant)
  "kena mayiru": [1, 5], // Stupid pubic hair
  "kena soothu": [1, 5], // Stupid ass
  "kodumai soothu": [3, 5], // Torture ass
  "koothi mooku": [5, 5], // Cunt nose
  "koothi vaai": [5, 5], // Cunt mouth
  "koothi vesam": [5, 5], // Cunt disguise
  "kuppai mayiru": [3, 5], // Garbage pubic hair
  "kuppai soothu": [3, 5], // Garbage ass
  "kuppai sunni": [4, 5], // Garbage dick
  "loosu mayiru": [3, 5], // Crazy pubic hair
  "loosu soothu": [3, 5], // Crazy ass
  "loosu sunni": [4, 5], // Crazy dick
  "maadu koothi": [5, 5], // Cattle cunt
  "maadu soothu": [3, 5], // Cattle ass
  "maadu sunni": [4, 5], // Cattle dick
  "mairu odanji": [3, 5], // Pubic hair breaker
  "mairu veri": [3, 5], // Pubic hair madness (insult)
  "mama koothi": [5, 5], // Uncle's cunt
  "mama soothu": [3, 5], // Uncle's ass
  "mandi punda": [5, 5], // Cattle cunt (variant)
  "mandi sunni": [4, 5], // Cattle dick
  "mayiru koothi vesi": [5, 5], // Pubic hair cunt prostitute
  "modha punda": [1, 5], // Stupid cunt (variant)
  "modha soothu": [1, 5], // Stupid ass (variant)
  "modha sunni": [1, 5], // Stupid dick
  "molai oombu": [4, 5], // Breast suck (vulgar)
  "motta koothi": [5, 5], // Bald cunt
  "motta mayiru": [1, 5], // Bald pubic hair (oxymoron insult)
  "mottai koothi": [5, 5], // Bald cunt (variant)
  "motta sunni": [4, 5], // Bald dick
  "mooku koothi": [5, 5], // Nose cunt (insult)
  "muttaa soothu": [1, 5], // Stupid ass
  "muttaa sunni": [1, 5], // Stupid dick
  "naai koothi": [5, 5], // Dog cunt
  "naai mayiru": [3, 5], // Dog pubic hair
  "naaiye oombu da": [3, 5], // Dog suck it
  "naai koothi magane": [5, 5], // Dog cunt's son
  "oor mayiru": [3, 5], // Village pubic hair
  "oor soothu": [3, 5], // Village ass
  "oor sunni": [4, 5], // Village dick
  "oru koothi kooda kidaiyathu": [5, 5], // Not even one cunt available (pathetic)
  "otha poolai": [4, 5], // Fuck the dick
  "otha sunni": [4, 5], // Fuck the dick
  "oththa koothi": [5, 5], // Fuck cunt (variant)
  "othmyr koothi": [5, 5], // Fuck pubic hair cunt
  "pacha mayiru": [3, 5], // Raw pubic hair
  "pacha sunni": [4, 5], // Raw dick
  "pandi koothi": [5, 5], // Pig cunt
  "pandi mayiru": [3, 5], // Pig pubic hair
  "pandi sunni": [4, 5], // Pig dick
  "panni koothi": [5, 5], // Pig cunt (variant)
  "panni mayiru": [3, 5], // Pig pubic hair
  "panni sunni": [4, 5], // Pig dick
  "panni soothu": [3, 5], // Pig ass
  "pee soothu": [3, 5], // Shit ass
  "pee sunni": [4, 5], // Shit dick
  "periya mayiru": [3, 5], // Big pubic hair
  "poolu koothi": [5, 5], // Dick cunt
  "poolu mayiru": [4, 5], // Dick pubic hair
  "poolu soothu": [4, 5], // Dick ass
  "pottai koothi": [5, 5], // Eunuch cunt
  "pottai sunni": [4, 5], // Eunuch dick
  "pundai oombu": [5, 5], // Cunt suck
  "pundai sappi": [5, 5], // Cunt sucker
  "pundai vedikkai": [5, 5], // Cunt comedy (insult)
  "sappi sappi": [3, 5], // Suck suck (repeated emphasis)

  // ========================================
  // === Tanglish (Tamil-English Mix) Profanity ===
  // ========================================
  "fucking otha": [3, 5], // Fucking fuck off
  "bloody koothi": [5, 5], // Bloody cunt
  "damn thevidiya": [5, 4], // Damn prostitute
  "fucking punda": [5, 5], // Fucking cunt
  "shit mayiru": [3, 5], // Shit pubic hair
  "asshole soothu": [3, 4], // Asshole ass (Tanglish)
  "bastard thevidiya paiyan": [3, 4], // Bastard son of prostitute
  "bitch koothi": [5, 5], // Bitch cunt (Tanglish)
  "son of a thevidiya": [5, 4], // Son of a prostitute (Tanglish)
  "stupid muttaal": [1, 4], // Stupid fool (Tanglish)
  "shut up koothi": [5, 5], // Shut up cunt (Tanglish)
  "fuck off otha": [3, 5], // Fuck off (Tanglish redundant)
  "die da koothi": [5, 5], // Die cunt (Tanglish)
  "ugly koothi": [1, 4], // Ugly cunt (Tanglish)
  "cheap vesi": [5, 4], // Cheap prostitute (Tanglish)
  "dirty soothu": [3, 4], // Dirty ass (Tanglish)
  "loser punda": [1, 4], // Loser cunt (Tanglish)
  "idiot muttaal": [1, 4], // Idiot fool (Tanglish)
  "useless waste": [3, 4], // Useless waste (Tanglish)
  "disgusting punda": [5, 5], // Disgusting cunt (Tanglish)
  "pathetic mayiru": [3, 4], // Pathetic pubic hair (Tanglish)
  "bloody vesi": [5, 4], // Bloody prostitute (Tanglish)
  "fucking sunni": [4, 5], // Fucking dick (Tanglish)
  "go to hell otha": [3, 5], // Go to hell fuck off (Tanglish)
  "mother fucker thayoli": [5, 5], // Motherfucker (Tanglish)
  "bloody thayoli": [5, 5], // Bloody motherfucker (Tanglish)
  "shut your koothi mouth": [5, 5], // Shut your cunt mouth (Tanglish)
  "piece of shit punda": [5, 5], // Piece of shit cunt (Tanglish)

  // ========================================
  // === More Compound Insults ===
  // ========================================
  "thevidiya paiyan otha": [5, 5], // Son of prostitute fuck off
  "koothi magane otha": [5, 5], // Son of cunt fuck off
  "thayoli paiyan koothi": [5, 5], // Motherfucker's son cunt
  "otha punda koothi": [5, 5], // Fuck off cunt (compound)
  "naai koothi thevidiya": [5, 5], // Dog cunt prostitute
  "panni punda otha": [5, 5], // Pig cunt fuck off
  "vesi koothi mayiru": [5, 5], // Prostitute cunt pubic hair
  "thevidiya soothu koothi": [5, 5], // Prostitute ass cunt
  "otha da thevidiya paiyan": [5, 5], // Fuck off son of prostitute
  "oombu da sunni koothi": [5, 5], // Suck it dick cunt
  "sappi da koothi mayiru": [5, 5], // Suck it cunt pubic hair
  "naai koothi vesi punda": [5, 5], // Dog cunt prostitute
  "panni sunni koothi otha": [5, 5], // Pig dick cunt fuck off
  "otha loosu koothi mayiru": [5, 5], // Fuck off crazy cunt pubic hair
  "thayoli batch koothi": [5, 5], // Motherfucker batch cunt
  "thevidiya koothi mayiru otha": [5, 5], // Prostitute cunt pubic hair fuck off
  "akka pundai otha": [5, 5], // Sister's cunt fuck off
  "amma koothi otha da": [5, 5], // Mother's cunt fuck off
  "ommala koothi mayiru otha": [5, 5], // Your mother's cunt pubic hair fuck off
  "oor koothi vesi punda": [5, 5], // Village cunt prostitute

  // ========================================
  // === More Tamil Script Additions ===
  // ========================================
  "அப்பன் கூத்தி": [1, 4], // Appan koothi (father's cunt)
  "அப்பன் சூத்து": [1, 4], // Appan soothu (father's ass)
  "அவன ஓத்தா": [3, 5], // Avana otha (fuck him)
  "கை அடிப்ப": [4, 4], // Kai adippa (masturbator)
  "கணக்காரி கூத்தி": [5, 5], // Kanakari koothi (accountant cunt insult)
  "கரி பாடு": [3, 4], // Kari baadu (dark bitch)
  "கூத்தி வாய்": [5, 5], // Koothi vaai (cunt mouth)
  "கூத்தி மூக்கு": [5, 5], // Koothi mooku (cunt nose)
  "குப்பை சுன்னி": [4, 4], // Kuppai sunni (garbage dick)
  "லூசு சுன்னி": [4, 4], // Loosu sunni (crazy dick)
  "மாடு கூத்தி": [5, 5], // Maadu koothi (cattle cunt)
  "மாமா கூத்தி": [5, 5], // Mama koothi (uncle's cunt)
  "மொட்ட கூத்தி": [5, 5], // Motta koothi (bald cunt)
  "நாய் மயிரு": [3, 4], // Naai mayiru (dog pubic hair)
  "ஊர் மயிரு": [3, 4], // Oor mayiru (village pubic hair)
  "பச்ச சுன்னி": [4, 4], // Pacha sunni (raw dick)
  "பன்னி கூத்தி": [5, 5], // Panni koothi (pig cunt)
  "பன்னி மயிரு": [3, 4], // Panni mayiru (pig pubic hair)
  "பன்னி சுன்னி": [4, 4], // Panni sunni (pig dick)
  "பூ சூத்து": [3, 5], // Pee soothu (shit ass)
  "பெரிய மயிரு": [3, 4], // Periya mayiru (big pubic hair)
  "பூலு கூத்தி": [5, 5], // Poolu koothi (dick cunt)
  "பொட்டை சுன்னி": [4, 4], // Pottai sunni (eunuch dick)
  "புண்டை வெடிக்கை": [5, 5], // Pundai vedikkai (cunt comedy)
  "தேவடியா சுன்னி": [5, 4], // Thevidiya sunni (prostitute's dick)
  "வேசி மயிரு": [5, 4], // Vesi mayiru (prostitute pubic hair)
  "நாய் கூத்தி மகனே": [5, 5], // Naai koothi magane (dog cunt's son)
  "தாயோளி பிண்ட கூத்தி": [5, 5], // Thayoli punda koothi (motherfucker cunt)
  "ஒத்தா டா தேவடியா பையன்": [5, 5], // Otha da thevidiya paiyan (fuck off prostitute's son)
  "ஊம்பு டா சுன்னி கூத்தி": [5, 5], // Oombu da sunni koothi (suck it dick cunt)
  "நாய் கூத்தி வேசி புண்ட": [5, 5], // Naai koothi vesi punda (dog cunt prostitute)
  "பன்னி சுன்னி கூத்தி ஓத்தா": [5, 5], // Panni sunni koothi otha (pig dick cunt fuck off)
  "ஊர் கூத்தி வேசி புண்ட": [5, 5], // Oor koothi vesi punda (village cunt prostitute)
  "அக்கா புண்டை ஓத்தா": [5, 5], // Akka pundai otha (sister's cunt fuck off)

  // ========================================
  // === Kongu Tamil Dialect ===
  // ========================================
  "koothadi": [5, 5], // Cunt-hitter (Kongu)
  "punda vazhinjirukku": [5, 5], // Cunt is slippery (Kongu)
  "sunni thattu da": [4, 4], // Dick slap (Kongu)
  "oombu di soothu": [3, 4], // Suck it ass (Kongu, female)
  "okkara myre": [3, 4], // Sitting pubic hair (Kongu)
  "poola oombura": [4, 4], // Dick sucking (Kongu)
  "koothi vaari": [5, 5], // Cunt collected (Kongu)
  "punda kalaichi": [5, 5], // Cunt mixed (Kongu)
  "soothu vedichi": [3, 4], // Ass exploded (Kongu)

  // ========================================
  // === Madurai Dialect ===
  // ========================================
  "koothi na": [5, 5], // Cunt dog (Madurai)
  "punda polappa": [5, 5], // Cunt disaster (Madurai)
  "mayiru da polappa": [3, 4], // Pubic hair disaster (Madurai)
  "sunni koothi polappa": [5, 5], // Dick cunt disaster (Madurai)
  "otha polappa": [3, 5], // Fuck off disaster (Madurai)
  "soothu polappa": [3, 4], // Ass disaster (Madurai)
  "dei punda polappa": [5, 5], // Hey cunt disaster (Madurai)
  "thevidiya polappa": [5, 4], // Prostitute disaster (Madurai)
  "naaye polappa": [3, 4], // Dog disaster (Madurai)

  // ========================================
  // === Singapore Tamil Profanity ===
  // ========================================
  "kaneh pundai": [1, 4], // Stupid cunt (SG Tamil)
  "machan koothi": [5, 5], // Friend's cunt (SG Tamil)
  "thambi sunni": [4, 4], // Brother's dick (SG Tamil)
  "bodoh otha": [1, 4], // Stupid fuck off (SG Tamil, Malay mix)
  "sial otha": [3, 5], // Damn fuck off (SG Tamil, Malay mix)
  "knn pundek": [5, 5], // KNN cunt (SG Tamil)
  "pundek neh": [5, 5], // Cunt there (SG Tamil)
  "mayiru neh": [3, 4], // Pubic hair there (SG Tamil)

  // ========================================
  // === More Internet/Texting Abbreviations ===
  // ========================================
  "otha myr da": [3, 5], // Fuck off pubic hair (texting)
  "tvdya pyn": [2, 3], // Thevidiya paiyan abbreviation
  "kthimgn": [2, 3], // Koothi magane abbreviation
  "snni ombu": [2, 3], // Sunni oombu abbreviation
  "sthu nkki": [2, 3], // Soothu nakki abbreviation
  "pndai nkki": [2, 3], // Pundai nakki abbreviation
  "otha kth myr": [2, 3], // Otha koothi mayiru abbreviation
  "dei othmyr kth": [2, 3], // Dei otha mayiru koothi abbreviation
  "tvdya sthu": [2, 3], // Thevidiya soothu abbreviation
  "vsi kth": [2, 3], // Vesi koothi abbreviation
  "pnni kth": [2, 3], // Panni koothi abbreviation
  "otha lsu": [2, 3], // Otha loosu abbreviation
  "nai pnda": [2, 3], // Naai punda abbreviation

  // ========================================
  // === Extended Tamil Script Profanity ===
  // ========================================
  "சுன்னி ஊம்பு டா": [4, 4], // Sunni oombu da (suck the dick)
  "தேவடியா மகனே": [5, 4], // Thevidiya magane (son of a prostitute)
  "புண்டை ஓத்தா": [5, 5], // Pundai otha (fuck the cunt)
  "சூத்து ஓத்தா": [3, 5], // Soothu otha (fuck the ass)
  "மயிரு பிடுங்கு": [3, 4], // Mayiru pudungu (pluck the pubic hair)
  "கூத்தி அடிச்சி": [5, 5], // Koothi adichchi (cunt-hitter)
  "ஊம்பு வேசி": [5, 4], // Oombu vesi (suck prostitute)
  "கழுதை சூத்து": [3, 4], // Kazhudhai soothu (donkey ass)
  "பன்னி சூத்து": [3, 4], // Panni soothu (pig ass)
  "ஆடு புண்டை": [5, 5], // Aadu pundai (goat cunt)
  "மாடு சுன்னி": [4, 4], // Maadu sunni (cattle dick)
  "கரடி கூத்தி": [5, 5], // Karadi koothi (bear cunt)
  "குரங்கு புண்டை": [5, 5], // Kurangu pundai (monkey cunt)
  "எலி சூத்து": [3, 4], // Eli soothu (rat ass)
  "பாம்பு சுன்னி": [4, 4], // Paambu sunni (snake dick)
  "காக்கா கூத்தி": [5, 5], // Kaakka koothi (crow cunt)
  "நரி கூத்தி": [5, 5], // Nari koothi (fox cunt)
  "ஓநாய் புண்டை": [5, 5], // Onaai pundai (wolf cunt)
  "எருமை கூத்தி": [5, 5], // Erumai koothi (buffalo cunt)
  "எருமை மாடு": [3, 4], // Erumai maadu (buffalo cattle insult)
  "கோழை": [1, 4], // Kozhai (coward)
  "கோழை நாய்": [1, 4], // Kozhai naai (coward dog)
  "பேடி": [1, 4], // Pedi (coward/eunuch)
  "பேடிப்பயல்": [1, 4], // Pedippayal (cowardly fellow)
  "தாயோளி மகனே": [5, 5], // Thayoli magane (motherfucker's son)
  "கூத்தி அடி": [5, 5], // Koothi adi (cunt hit)
  "புண்டை வெட்டு": [5, 5], // Pundai vettu (cunt cut)
  "சுன்னி வெட்டு": [4, 4], // Sunni vettu (dick cut)
  "சூத்து வெடி": [3, 4], // Soothu vedi (ass explosion)
  "மயிரு கொட்டு": [3, 4], // Mayiru kottu (pubic hair shed)
  "கூத்தி வழிய": [5, 5], // Koothi vazhiya (cunt dripping)
  "சுன்னி நிக்குது": [4, 4], // Sunni nikkudhu (dick standing)
  "சூத்து எரியுது": [3, 4], // Soothu eriyudhu (ass burning)
  "கூத்தி நாறுது": [5, 5], // Koothi naarudhu (cunt stinking)
  "சுன்னி கம்பு": [4, 4], // Sunni kambu (dick pole)
  "கூத்தி குழி": [5, 5], // Koothi kuzhi (cunt hole)
  "சூத்து குழி": [3, 4], // Soothu kuzhi (ass hole)
  "மயிரு காடு": [3, 4], // Mayiru kaadu (pubic hair forest)
  "பூனை கூத்தி": [5, 5], // Poonai koothi (cat cunt)
  "பூனை சூத்து": [3, 4], // Poonai soothu (cat ass)

  // ========================================
  // === Extended Romanized Tamil ===
  // ========================================
  "sunni oombu da": [4, 5], // Suck the dick
  "thevidiya magane": [5, 5], // Son of a prostitute
  "pundai otha": [5, 5], // Fuck the cunt
  "soothu otha": [3, 5], // Fuck the ass
  "mayiru pudungu": [3, 5], // Pluck the pubic hair
  "koothi adichchi": [5, 5], // Cunt-hitter
  "oombu vesi": [5, 5], // Suck prostitute
  "aadu pundai": [5, 5], // Goat cunt
  "karadi koothi": [5, 5], // Bear cunt
  "kurangu pundai": [5, 5], // Monkey cunt
  "eli soothu": [3, 5], // Rat ass
  "paambu sunni": [4, 5], // Snake dick
  "kaakka koothi": [5, 5], // Crow cunt
  "nari koothi": [5, 5], // Fox cunt
  "onaai pundai": [5, 5], // Wolf cunt
  "erumai koothi": [5, 5], // Buffalo cunt
  "erumai maadu": [3, 5], // Buffalo cattle (insult)
  "kozhai": [1, 5], // Coward
  "kozhai naai": [1, 5], // Coward dog
  "pedi": [1, 5], // Coward/eunuch
  "pedippayal": [1, 5], // Cowardly fellow
  "thayoli magane": [5, 5], // Motherfucker's son
  "koothi adi da": [5, 5], // Hit the cunt (male)
  "pundai vettu da": [5, 5], // Cut the cunt (male)
  "sunni vettu da": [4, 5], // Cut the dick (male)
  "soothu vedi": [3, 5], // Ass explosion
  "mayiru kottu": [3, 5], // Pubic hair shed
  "koothi vazhiya": [5, 5], // Cunt dripping
  "sunni nikkudhu": [4, 5], // Dick standing
  "soothu eriyudhu": [3, 5], // Ass burning
  "koothi naarudhu": [5, 5], // Cunt stinking
  "sunni kambu": [4, 5], // Dick pole
  "koothi kuzhi": [5, 5], // Cunt hole
  "soothu kuzhi": [3, 5], // Ass hole
  "mayiru kaadu": [3, 5], // Pubic hair forest
  "poonai koothi": [5, 5], // Cat cunt
  "poonai soothu": [3, 5], // Cat ass

  // ========================================
  // === Extended Madras Bashai ===
  // ========================================
  "area koothi": [5, 5], // Area cunt (local)
  "area punda": [5, 5], // Area cunt (local variant)
  "auto koothi": [5, 5], // Auto-rickshaw cunt
  "bajji punda": [5, 5], // Fritter cunt (worthless)
  "beedi koothi": [5, 5], // Cigarette cunt
  "chappal koothi": [5, 5], // Slipper cunt (cheap)
  "chappal sunni": [4, 4], // Slipper dick (cheap)
  "dabba koothi": [5, 5], // Box cunt (worthless)
  "dabba sunni": [4, 4], // Box dick (worthless)
  "dosai koothi": [5, 5], // Dosa cunt (common)
  "figure koothi": [5, 5], // Figure cunt (objectifying)
  "galeej punda": [5, 5], // Dirty cunt
  "galeej soothu": [3, 4], // Dirty ass
  "galeej sunni": [4, 4], // Dirty dick
  "goiyala koothi": [5, 5], // Ball cunt
  "item punda": [5, 5], // Item cunt (objectifying variant)
  "item soothu": [3, 4], // Item ass (objectifying)
  "jollu punda": [5, 5], // Drool cunt (pervy)
  "kattai punda": [5, 5], // Wooden cunt (hard)
  "kattai soothu": [3, 4], // Wooden ass (hard)
  "kettavan koothi": [5, 5], // Bad man cunt
  "kettava soothu": [3, 4], // Bad woman ass
  "kodumai punda": [5, 5], // Torture cunt
  "kodumai sunni": [4, 4], // Torture dick
  "kuppam koothi": [5, 5], // Slum cunt
  "kuppam punda otha": [5, 5], // Slum cunt fuck off
  "local koothi": [5, 5], // Local cunt
  "local punda": [5, 5], // Local cunt variant
  "loosu mayiru punda": [5, 5], // Crazy pubic hair cunt
  "mass koothi": [5, 5], // Mass cunt (classist)
  "mokka soothu": [3, 4], // Boring ass
  "mokka sunni": [4, 4], // Boring dick
  "naatukoothi otha": [5, 5], // Country cunt fuck off
  "olu koothi": [5, 5], // Leaking cunt
  "oru pisa illa koothi": [5, 5], // Not worth a penny cunt
  "paavi koothi": [5, 5], // Sinful cunt
  "paavi punda": [5, 5], // Sinful cunt variant
  "rowdy koothi": [5, 5], // Rowdy cunt
  "semma waste koothi": [5, 5], // Super waste cunt
  "settai punda": [5, 5], // Mischief cunt
  "settai soothu": [3, 4], // Mischief ass
  "somberi punda": [5, 5], // Lazy cunt
  "somberi soothu": [3, 4], // Lazy ass
  "thara local punda": [5, 5], // Very local cunt (classist)
  "thara local soothu": [3, 4], // Very local ass (classist)
  "theri koothi": [5, 5], // Street cunt
  "theri punda": [5, 5], // Street cunt variant
  "waste punda": [5, 5], // Waste cunt
  "waste soothu": [3, 4], // Waste ass
  "waste sunni": [4, 4], // Waste dick

  // ========================================
  // === Extended Sri Lankan Tamil ===
  // ========================================
  "hutti punda otha": [1, 4], // Idiot cunt fuck off (SL)
  "kundi adi da": [3, 4], // Ass hit (SL)
  "kundi sappi": [3, 4], // Ass sucker (SL)
  "kundi nakki": [3, 4], // Ass licker (SL)
  "modda oombu da": [4, 4], // Suck the dick (SL)
  "modda sappi": [4, 4], // Dick sucker (SL)
  "ponnaya koothi": [5, 5], // Effeminate man cunt (SL)
  "ponnaya punda": [5, 5], // Effeminate man cunt (SL variant)
  "ponnaya sunni": [4, 4], // Effeminate man dick (SL)
  "salli vesi koothi": [5, 5], // Cheap prostitute cunt (SL)
  "salli vesi punda": [5, 5], // Cheap prostitute cunt (SL)
  "sunni vetti da": [4, 4], // Dick cutting (SL)
  "thambiya punda otha": [5, 5], // Brother cunt fuck off (SL)
  "umbala kundi sappi": [3, 4], // Your ass sucker (SL)
  "umbala kundi otha": [3, 5], // Your ass fuck off (SL)
  "kundi otha da": [3, 5], // Ass fuck off (SL)
  "umbala amma kundi": [3, 4], // Your mother's ass (SL)
  "umbala thathi kundi": [1, 4], // Your father's ass (SL)
  "umbala akka kundi": [3, 4], // Your sister's ass (SL)
  "rathu kundi": [3, 4], // Red ass (SL insult)
  "modda illatha": [4, 4], // Without a dick (SL impotent insult)
  "hutti kundi": [1, 4], // Idiot ass (SL)
  "maaraadi kundi": [1, 4], // Stupid ass (SL)
  "gon punda": [1, 4], // Stupid cunt (SL)
  "gon soothu": [1, 4], // Stupid ass (SL)
  "gon sunni": [1, 4], // Stupid dick (SL)
  "yakko kundi": [3, 4], // Friend's ass (SL)
  "yakko punda": [5, 5], // Friend's cunt (SL)

  // ========================================
  // === Extended Malaysian Tamil ===
  // ========================================
  "bodoh punda koothi": [1, 4], // Stupid cunt (MY)
  "dei pundek sial": [5, 5], // Hey cunt damn (MY)
  "keling koothi otha": [5, 5], // Racial slur cunt fuck off (MY)
  "machan punda otha": [5, 5], // Friend's cunt fuck off (MY)
  "mabuk koothi otha": [1, 3], // Drunk cunt fuck off (MY)
  "pukimak koothi": [5, 5], // Mother's cunt (MY compound)
  "pundek amma otha": [5, 5], // Cunt mother fuck off (MY)
  "sial pundek otha": [5, 5], // Damn cunt fuck off (MY)
  "thayoli pundek otha": [5, 5], // Motherfucker cunt fuck off (MY)
  "thambi pundek otha": [5, 5], // Brother cunt fuck off (MY)
  "bodoh sunni": [1, 4], // Stupid dick (MY)
  "bodoh soothu": [1, 4], // Stupid ass (MY)
  "sial sunni": [4, 4], // Damn dick (MY)
  "sial soothu": [3, 4], // Damn ass (MY)
  "keling sunni": [5, 4], // Racial slur dick (MY)
  "pukimak sunni": [5, 5], // Mother's cunt dick (MY)
  "mangkuk punda": [1, 4], // Bowl cunt (MY idiom for stupid)
  "babi punda": [5, 5], // Pig cunt (MY Malay mix)
  "babi koothi": [5, 5], // Pig cunt (MY variant)
  "babi soothu": [3, 4], // Pig ass (MY)
  "babi sunni": [4, 4], // Pig dick (MY)
  "haram punda": [5, 5], // Forbidden cunt (MY)
  "haram koothi": [5, 5], // Forbidden cunt (MY variant)
  "lancau punda": [5, 5], // Dick cunt (MY Malay)
  "pantat koothi": [5, 5], // Ass cunt (MY Malay)
  "sundal koothi": [5, 5], // Prostitute cunt (MY)
  "sundal punda": [5, 5], // Prostitute cunt (MY)

  // ========================================
  // === Extended Singapore Tamil ===
  // ========================================
  "kaneh pundai otha": [1, 4], // Stupid cunt fuck off (SG)
  "machan koothi otha": [5, 5], // Friend's cunt fuck off (SG)
  "thambi sunni otha": [4, 5], // Brother dick fuck off (SG)
  "bodoh otha da": [1, 4], // Stupid fuck off (SG)
  "sial otha da": [3, 5], // Damn fuck off (SG)
  "knn pundek otha": [5, 5], // KNN cunt fuck off (SG)
  "pundek neh otha": [5, 5], // Cunt there fuck off (SG)
  "mayiru neh otha": [3, 5], // Pubic hair there fuck off (SG)
  "kaneh soothu": [1, 4], // Stupid ass (SG)
  "kaneh sunni": [1, 4], // Stupid dick (SG)
  "machan soothu": [3, 4], // Friend's ass (SG)
  "machan sunni": [4, 4], // Friend's dick (SG)
  "thambi koothi": [5, 5], // Brother's cunt (SG)
  "thambi soothu": [3, 4], // Brother's ass (SG)
  "abang punda": [5, 5], // Brother cunt (SG Malay)
  "abang koothi": [5, 5], // Brother cunt (SG variant)
  "keling bodoh": [1, 4], // Racial slur stupid (SG)

  // ========================================
  // === Extended Kongu Tamil ===
  // ========================================
  "koothadi da": [5, 5], // Cunt-hitter (Kongu male)
  "koothadi di": [5, 5], // Cunt-hitter (Kongu female)
  "punda vazhinjirukku da": [5, 5], // Cunt is slippery (Kongu male)
  "sunni thattu otha": [4, 5], // Dick slap fuck off (Kongu)
  "okkara myre da": [3, 4], // Sitting pubic hair (Kongu male)
  "poola oombura di": [4, 4], // Dick sucking (Kongu female)
  "koothi vaari da": [5, 5], // Cunt collected (Kongu male)
  "punda kalaichi da": [5, 5], // Cunt mixed (Kongu male)
  "soothu vedichi da": [3, 4], // Ass exploded (Kongu male)

  // ========================================
  // === Extended Madurai Tamil ===
  // ========================================
  "koothi na polappa": [5, 5], // Cunt dog disaster (Madurai variant)
  "punda polappa da": [5, 5], // Cunt disaster (Madurai male)
  "mayiru da polappa otha": [3, 5], // Pubic hair disaster fuck off (Madurai)
  "sunni koothi polappa da": [5, 5], // Dick cunt disaster (Madurai male)
  "otha polappa da": [3, 5], // Fuck off disaster (Madurai male)
  "soothu polappa da": [3, 4], // Ass disaster (Madurai male)
  "dei punda polappa otha": [5, 5], // Hey cunt disaster fuck off (Madurai)
  "thevidiya polappa otha": [5, 5], // Prostitute disaster fuck off (Madurai)
  "naaye polappa otha": [3, 5], // Dog disaster fuck off (Madurai)
  "thayoli polappa": [5, 5], // Motherfucker disaster (Madurai)
  "vesi polappa": [5, 4], // Prostitute disaster (Madurai)
  "kazhudhai polappa": [3, 4], // Donkey disaster (Madurai)
  "panni polappa": [3, 4], // Pig disaster (Madurai)
  "erumai polappa": [3, 4], // Buffalo disaster (Madurai)

  // ========================================
  // === Extended Compound Tamil Insults ===
  // ========================================
  "thevidiya paiyan otha punda koothi": [5, 4], // Son of prostitute compound
  "koothi magane otha punda naai": [5, 5], // Son of cunt compound
  "thayoli paiyan koothi sunni otha": [5, 5], // Motherfucker's son compound
  "otha punda koothi mayiru sunni": [5, 5], // Fuck off cunt compound
  "naai koothi thevidiya punda soothu": [5, 5], // Dog cunt prostitute compound
  "panni punda otha koothi sunni": [5, 5], // Pig cunt compound
  "vesi koothi mayiru punda soothu": [5, 5], // Prostitute cunt compound
  "thevidiya soothu koothi sunni otha": [5, 4], // Prostitute ass compound
  "otha da thevidiya paiyan koothi": [5, 5], // Fuck off son of prostitute
  "oombu da sunni koothi punda": [5, 5], // Suck it dick cunt compound
  "sappi da koothi mayiru punda": [5, 5], // Suck it cunt compound
  "naai koothi vesi punda otha": [5, 5], // Dog cunt prostitute fuck off
  "panni sunni koothi otha da": [5, 5], // Pig dick cunt fuck off
  "otha loosu koothi mayiru punda": [5, 5], // Fuck off crazy cunt compound
  "thayoli batch koothi punda": [5, 5], // Motherfucker batch cunt
  "ommala koothi mayiru otha punda": [5, 5], // Mother's cunt compound
  "oor koothi vesi punda otha da": [5, 5], // Village cunt prostitute

  // ========================================
  // === Caste-Based Slurs (Tamil) ===
  // ========================================
  "paraiyan": [5, 4], // Dalit caste slur
  "paraichi": [5, 4], // Female Dalit slur
  "chakkiliya": [5, 4], // Leather-worker caste slur
  "pallan": [5, 4], // Agricultural caste slur
  "pallaichi": [5, 4], // Female form
  "vannan": [5, 4], // Washerman caste (derogatory)
  "vannaathi": [5, 4], // Female washerman (derogatory)
  "thotti": [5, 4], // Sweeper caste (derogatory)
  "thottichi": [5, 4], // Female sweeper (derogatory)
  "paarpan": [5, 4], // Brahmin (derogatory)
  "paarpathi": [5, 4], // Female Brahmin (derogatory)
  "kulam kettavan": [5, 4], // One of ruined caste
  "jathi thaazhndha": [5, 4], // Of low caste
  "keezh jathi": [5, 4], // Low caste
  "thazhntha jathi": [5, 4], // Lowered caste
  "kulam keduthavan": [5, 4], // One who ruined caste
  "keezh jaathi koothi": [5, 5], // Low caste cunt
  "keezh jaathi punda": [5, 5], // Low caste cunt variant
  "paraiyan koothi": [5, 5], // Dalit caste cunt
  "paraiyan punda": [5, 5], // Dalit caste cunt variant
  "chakkiliya koothi": [5, 5], // Leather-worker caste cunt
  "thotti koothi": [5, 5], // Sweeper caste cunt

  // ========================================
  // === Tamil Caste Slurs - Script ===
  // ========================================
  "பறையன்": [5, 4], // Paraiyan (Dalit caste slur)
  "பறைச்சி": [5, 4], // Paraichi (female Dalit slur)
  "சக்கிலிய": [5, 4], // Chakkiliya (leather-worker caste)
  "பள்ளன்": [5, 4], // Pallan (agricultural caste slur)
  "பள்ளச்சி": [5, 4], // Pallaichi (female form)
  "வண்ணான்": [5, 4], // Vannan (washerman derogatory)
  "தோட்டி": [5, 4], // Thotti (sweeper derogatory)
  "பாப்பான்": [5, 4], // Paarpan (Brahmin derogatory)
  "குலம் கெட்டவன்": [5, 4], // Kulam kettavan (ruined caste)
  "கீழ் ஜாதி": [5, 4], // Keezh jaathi (low caste)

  // ========================================
  // === Extended Tanglish Mix ===
  // ========================================
  "fucking otha da": [3, 5], // Fucking fuck off (Tanglish male)
  "bloody koothi di": [5, 5], // Bloody cunt (Tanglish female)
  "damn thevidiya otha": [5, 5], // Damn prostitute fuck off
  "fucking punda otha": [5, 5], // Fucking cunt fuck off
  "shit mayiru otha": [3, 5], // Shit pubic hair fuck off
  "asshole soothu otha": [3, 5], // Asshole ass fuck off
  "bastard thevidiya paiyan otha": [3, 4], // Bastard prostitute's son fuck off
  "bitch koothi otha": [5, 5], // Bitch cunt fuck off
  "son of a thevidiya otha": [5, 5], // Son of a prostitute fuck off
  "stupid muttaal otha": [1, 4], // Stupid fool fuck off
  "shut up koothi otha": [5, 5], // Shut up cunt fuck off
  "fuck off otha da punda": [5, 5], // Fuck off cunt compound
  "die da koothi otha": [5, 5], // Die cunt fuck off
  "ugly koothi vesi": [1, 4], // Ugly cunt prostitute
  "cheap vesi koothi otha": [5, 5], // Cheap prostitute cunt fuck off
  "dirty soothu otha": [3, 5], // Dirty ass fuck off
  "loser punda otha": [1, 4], // Loser cunt fuck off
  "trash koothi otha": [5, 5], // Trash cunt fuck off
  "garbage punda otha": [5, 5], // Garbage cunt fuck off
  "noob koothi otha": [5, 5], // Noob cunt fuck off (gaming)
  "toxic punda otha": [5, 5], // Toxic cunt fuck off (gaming)
  "cancer koothi": [5, 5], // Cancer cunt (gaming)
  "feeder punda": [5, 5], // Feeder cunt (gaming)
  "bot koothi": [5, 5], // Bot cunt (gaming)
  "hacker otha": [3, 5], // Hacker fuck off (gaming)
  "camper punda": [5, 5], // Camper cunt (gaming)
  "uninstall pannu da koothi": [5, 5], // Uninstall cunt (gaming)
  "delete pannu da punda": [5, 5], // Delete cunt (gaming)

  // ========================================
  // === Extended Threats (Tamil) ===
  // ========================================
  "un soothu poduven": [5, 5], // I'll beat your ass
  "un pundai kedhuppen": [5, 5], // I'll rip your cunt
  "un sunni odaippen": [5, 5], // I'll break your dick
  "un goiyala madippen": [5, 5], // I'll crush your balls
  "soothu la sunni vaippen": [5, 5], // I'll put dick in ass
  "un koothi keduppen": [5, 5], // I'll ruin your cunt
  "un thala odaippen": [5, 5], // I'll break your head
  "un pal udaippen": [5, 5], // I'll break your teeth
  "un elumbu odaippen": [5, 5], // I'll break your bones
  "kaalai odaippen": [5, 5], // I'll break your legs
  "kaiyai odaippen": [5, 5], // I'll break your arms
  "naai ku theenam pottruven": [5, 5], // I'll feed you to dogs
  "drain la thallruven": [5, 5], // I'll push you in drain
  "gutter la thallruven": [5, 5], // I'll push you in gutter
  "uyiroda puthaippen": [5, 5], // I'll bury you alive
  "thol urichen": [5, 5], // I'll skin you
  "keezhi kizhippen": [5, 5], // I'll tear you apart
  "adichippen": [5, 5], // I'll beat you
  "kolluven": [5, 5], // I'll kill you
  "saaga adichippen": [5, 5], // I'll beat you to death

  // ========================================
  // === Tamil Threats - Script ===
  // ========================================
  "உன் சூத்து போடுவேன்": [5, 5], // I'll beat your ass
  "உன் புண்டை கெடுப்பேன்": [5, 5], // I'll rip your cunt
  "உன் சுன்னி ஒடைப்பேன்": [5, 5], // I'll break your dick
  "உன் கூத்தி கெடுப்பேன்": [5, 5], // I'll ruin your cunt
  "உன் தலை ஒடைப்பேன்": [5, 5], // I'll break your head
  "உன் பல் உடைப்பேன்": [5, 5], // I'll break your teeth
  "உன் எலும்பு ஒடைப்பேன்": [5, 5], // I'll break your bones
  "நாய்க்கு தீனம் போட்டுருவேன்": [5, 5], // I'll feed you to dogs
  "உயிரோட புதைப்பேன்": [5, 5], // I'll bury you alive
  "கொல்லுவேன்": [5, 5], // I'll kill you
  "சாக அடிச்சிப்பேன்": [5, 5], // I'll beat to death

  // ========================================
  // === Extended Tamil Body Part Insults ===
  // ========================================
  "soothu mudichu": [4, 3], // Ass knot (insult)
  "pundai mudichu": [5, 5], // Cunt knot (insult)
  "sunni mudichu": [4, 3], // Dick knot (insult)
  "koothi thuni": [5, 5], // Cunt cloth (insult)
  "soothu thuni": [4, 3], // Ass cloth (insult)
  "sunni thuni": [4, 3], // Dick cloth (insult)
  "pundai thol": [5, 5], // Cunt skin (insult)
  "soothu thol": [4, 3], // Ass skin (insult)
  "sunni thol": [4, 3], // Dick skin (insult)
  "koothi kaadhu": [5, 5], // Cunt ear (insult)
  "koothi kan": [5, 5], // Cunt eye (insult)
  "soothu kan": [4, 3], // Ass eye (asshole)
  "sunni kan": [4, 3], // Dick eye (insult)
  "pundai mooku": [5, 5], // Cunt nose (insult)
  "soothu mooku": [4, 3], // Ass nose (insult)
  "sunni mooku": [4, 3], // Dick nose (insult)

  // ========================================
  // === Extended Scatological Tamil ===
  // ========================================
  "theeni koothi": [5, 5], // Shit cunt
  "theeni punda": [5, 5], // Shit cunt variant
  "theeni sunni": [4, 5], // Shit dick
  "theeni soothu": [3, 5], // Shit ass
  "moothram kudi da": [3, 4], // Drink urine
  "moothram koothi": [5, 5], // Urine cunt
  "moothram sunni": [4, 4], // Urine dick
  "kusu koothi": [5, 5], // Fart cunt
  "kusu punda": [5, 5], // Fart cunt variant
  "kusu sunni": [4, 4], // Fart dick
  "kusu soothu": [3, 4], // Fart ass
  "theeni thinnu da": [3, 5], // Eat shit (variant)
  "moothram kudi koothi": [5, 5], // Drink urine cunt
  "drainage koothi": [5, 5], // Drainage cunt
  "drainage punda": [5, 5], // Drainage cunt variant
  "drainage sunni": [4, 4], // Drainage dick
  "sewage koothi": [5, 5], // Sewage cunt
  "sewage punda": [5, 5], // Sewage cunt variant
  "kuppai thotti koothi": [5, 5], // Garbage bin cunt
  "kuppai thotti punda": [5, 5], // Garbage bin cunt variant
  "kuppai thotti sunni": [4, 4], // Garbage bin dick

  // ========================================
  // === Extended Evasion Spellings (Tamil) ===
  // ========================================
  "0tha": [3, 5], // Otha evasion
  "th3vidiya": [3, 5], // Thevidiya evasion
  "k00thi": [3, 5], // Koothi evasion
  "p0nda": [3, 5], // Punda evasion
  "p0ndai": [3, 5], // Pundai evasion
  "s00thu": [3, 5], // Soothu evasion
  "s0nni": [3, 5], // Sunni evasion
  "m@yiru": [3, 5], // Mayiru evasion
  "th@yoli": [3, 5], // Thayoli evasion
  "v3si": [3, 5], // Vesi evasion
  "p0olu": [3, 5], // Poolu evasion
  "0mbu": [3, 5], // Oombu evasion
  "s@ppi": [3, 5], // Sappi evasion
  "n@ai": [3, 5], // Naai evasion
  "p@nni": [3, 5], // Panni evasion
  "k@zhudhai": [3, 5], // Kazhudhai evasion

  // ========================================
  // === More Internet Abbreviations ===
  // ========================================
  "oth myr pnda": [2, 3], // Otha mayiru punda abbreviation
  "tvdya pyn kth": [2, 3], // Thevidiya paiyan koothi abbreviation
  "kth mgne oth pnd": [2, 3], // Koothi magane otha punda abbreviation
  "snni mbu da": [2, 3], // Sunni oombu da abbreviation
  "sthu nkki oth": [2, 3], // Soothu nakki otha abbreviation
  "pndai nkki oth": [2, 3], // Pundai nakki otha abbreviation
  "oth kth myr pnd": [2, 3], // Otha koothi mayiru punda abbreviation
  "dei othmyr kth pnd": [2, 3], // Dei otha mayiru koothi punda abbreviation
  "tvdya sthu kth": [2, 3], // Thevidiya soothu koothi abbreviation
  "vsi kth pnd": [2, 3], // Vesi koothi punda abbreviation
  "pnni kth myr": [2, 3], // Panni koothi mayiru abbreviation
  "oth lsu kth myr": [2, 3], // Otha loosu koothi mayiru abbreviation
  "nai pnda oth": [2, 3], // Naai punda otha abbreviation
  "thyoli pnd kth": [2, 3], // Thayoli punda koothi abbreviation
  "kth vsi myr oth": [2, 3], // Koothi vesi mayiru otha abbreviation

  // ========================================
  // === Extended Animal Insults (Tamil) ===
  // ========================================
  "erumai koothi otha": [5, 5], // Buffalo cunt fuck off
  "erumai punda otha": [5, 5], // Buffalo cunt fuck off variant
  "erumai soothu otha": [3, 5], // Buffalo ass fuck off
  "erumai sunni otha": [4, 5], // Buffalo dick fuck off
  "kurangu koothi otha": [5, 5], // Monkey cunt fuck off
  "kurangu punda otha": [5, 5], // Monkey cunt fuck off variant
  "kurangu soothu otha": [3, 5], // Monkey ass fuck off
  "kurangu sunni otha": [4, 5], // Monkey dick fuck off
  "eli koothi otha": [5, 5], // Rat cunt fuck off
  "eli punda otha": [5, 5], // Rat cunt fuck off variant
  "paambu koothi otha": [5, 5], // Snake cunt fuck off
  "paambu punda otha": [5, 5], // Snake cunt fuck off variant
  "aadu koothi otha": [5, 5], // Goat cunt fuck off
  "aadu soothu otha": [3, 5], // Goat ass fuck off
  "aadu sunni otha": [4, 5], // Goat dick fuck off
  "karadi punda otha": [5, 5], // Bear cunt fuck off
  "karadi soothu otha": [3, 5], // Bear ass fuck off
  "nari punda otha": [5, 5], // Fox cunt fuck off
  "nari soothu otha": [3, 5], // Fox ass fuck off
  "onaai koothi otha": [5, 5], // Wolf cunt fuck off
  "onaai soothu otha": [3, 5], // Wolf ass fuck off
  "kaakka punda otha": [5, 5], // Crow cunt fuck off
  "poonai punda otha": [5, 5], // Cat cunt fuck off
  "poonai sunni otha": [4, 5], // Cat dick fuck off

  // ========================================
  // === Extended Tamil Religious Insults ===
  // ========================================
  "kovil koothi": [5, 5], // Temple cunt (sacrilegious)
  "kovil punda": [5, 5], // Temple cunt variant
  "kovil sunni": [4, 3], // Temple dick (sacrilegious)
  "sami koothi": [5, 5], // God cunt (sacrilegious)
  "sami punda": [5, 5], // God cunt variant
  "sami sunni": [4, 3], // God dick (sacrilegious)
  "pujari koothi": [5, 5], // Priest cunt
  "pujari punda": [5, 5], // Priest cunt variant
  "pujari sunni": [4, 3], // Priest dick
  "maulvi koothi": [5, 5], // Maulvi cunt
  "maulvi punda": [5, 5], // Maulvi cunt variant
  "church koothi": [5, 5], // Church cunt
  "church punda": [5, 5], // Church cunt variant
  "mosque koothi": [5, 5], // Mosque cunt
  "mosque punda": [5, 5], // Mosque cunt variant

  // ========================================
  // === Extended Tamil Script Body Part ===
  // ========================================
  "சூத்து முடிச்சு": [4, 3], // Soothu mudichu (ass knot)
  "புண்டை முடிச்சு": [5, 5], // Pundai mudichu (cunt knot)
  "சுன்னி முடிச்சு": [4, 3], // Sunni mudichu (dick knot)
  "கூத்தி துணி": [5, 5], // Koothi thuni (cunt cloth)
  "சூத்து துணி": [4, 3], // Soothu thuni (ass cloth)
  "சுன்னி துணி": [4, 3], // Sunni thuni (dick cloth)
  "கூத்தி காது": [5, 5], // Koothi kaadhu (cunt ear)
  "கூத்தி கண்": [5, 5], // Koothi kan (cunt eye)
  "சூத்து கண்": [4, 3], // Soothu kan (ass eye)
  "சுன்னி கண்": [4, 3], // Sunni kan (dick eye)
  "புண்டை மூக்கு": [5, 5], // Pundai mooku (cunt nose)
  "சூத்து மூக்கு": [4, 3], // Soothu mooku (ass nose)
  "சுன்னி மூக்கு": [4, 3], // Sunni mooku (dick nose)
  "எருமை கூத்தி ஓத்தா": [5, 5], // Erumai koothi otha (buffalo cunt fuck off)
  "குரங்கு கூத்தி ஓத்தா": [5, 5], // Kurangu koothi otha (monkey cunt fuck off)
  "பூனை புண்ட ஓத்தா": [5, 5], // Poonai punda otha (cat cunt fuck off)
  "ஆடு புண்டை ஓத்தா": [5, 5], // Aadu pundai otha (goat cunt fuck off)
  "நரி கூத்தி ஓத்தா": [5, 5], // Nari koothi otha (fox cunt fuck off)

  // ========================================
  // === Extended Tamil Scatological Script ===
  // ========================================
  "தீனி கூத்தி": [5, 5], // Theeni koothi (shit cunt)
  "தீனி புண்ட": [5, 5], // Theeni punda (shit cunt variant)
  "தீனி சுன்னி": [4, 5], // Theeni sunni (shit dick)
  "தீனி சூத்து": [3, 5], // Theeni soothu (shit ass)
  "மூத்திரம் குடி டா": [3, 4], // Moothram kudi da (drink urine)
  "குசு கூத்தி": [5, 5], // Kusu koothi (fart cunt)
  "குசு புண்ட": [5, 5], // Kusu punda (fart cunt variant)
  "குசு சுன்னி": [4, 4], // Kusu sunni (fart dick)
  "குசு சூத்து": [3, 4], // Kusu soothu (fart ass)
  "குப்பை தொட்டி கூத்தி": [5, 5], // Kuppai thotti koothi (garbage bin cunt)
  "டிரெய்னேஜ் கூத்தி": [5, 5], // Drainage koothi (drainage cunt)
  "சீவேஜ் கூத்தி": [5, 5], // Sewage koothi (sewage cunt)

  // ========================================
  // === More Extended Tamil Compounds ===
  // ========================================
  "un amma oor koothi": [3, 5], // Your mother is a village slut
  "un amma pacha vesi": [5, 5], // Your mother is a total prostitute
  "un akka oor vesi": [5, 5], // Your sister is a village prostitute
  "un appa koothi payale": [1, 4], // Your father is a cunt fellow
  "un kudumbam muzhusum koothi": [5, 5], // Your entire family is cunts
  "un vaamsam muzhusum vesi": [5, 5], // Your entire lineage is prostitutes
  "un amma ku sunni oombu tha theriyum": [4, 5], // Your mother only knows dick sucking
  "un akka ku koothi okkura tha theriyum": [5, 5], // Your sister only knows cunt fucking
  "un amma oor naai koothi": [5, 5], // Your mother is a village dog cunt
  "un amma panni koothi vesi": [5, 5], // Your mother is a pig cunt prostitute
  "un akka naai punda vesi": [5, 5], // Your sister is a dog cunt prostitute
  "un amma kazhudhai koothi": [5, 5], // Your mother is a donkey cunt
  "un akka erumai koothi": [5, 5], // Your sister is a buffalo cunt
  "un appa naai sunni": [1, 4], // Your father is a dog dick
  "un amma sunni oomburadhu paathurukken": [4, 5], // I've seen your mother suck dick
  "un akka soothu thara paathurukken": [3, 5], // I've seen your sister give ass
  "un amma ku naai okkum": [3, 5], // Dogs fuck your mother
  "un amma ku panni okkum": [3, 5], // Pigs fuck your mother
  "un amma ku kazhudhai okkum": [3, 5], // Donkeys fuck your mother
  "un amma ku erumai okkum": [3, 5], // Buffaloes fuck your mother
  "un amma ku aadu okkum": [3, 5], // Goats fuck your mother
  "un amma ku kurangu okkum": [3, 5], // Monkeys fuck your mother
  "un amma ku eli okkum": [3, 5], // Rats fuck your mother
  "un amma ku paambu okkum": [3, 5], // Snakes fuck your mother
  "un amma hijra": [3, 5], // Your mother is a eunuch
  "un appa hijra": [1, 4], // Your father is a eunuch
  "un akka hijra": [3, 5], // Your sister is a eunuch
  "hijra koothi": [5, 5], // Eunuch cunt
  "hijra punda": [5, 5], // Eunuch cunt variant
  "hijra sunni": [4, 5], // Eunuch dick
  "hijra soothu": [3, 5], // Eunuch ass
  "pottai vesi": [5, 5], // Eunuch prostitute
  "pottai koothi vesi": [5, 5], // Eunuch cunt prostitute
  "aravani koothi": [5, 5], // Third-gender cunt (derogatory)
  "thirunangai koothi": [5, 5], // Trans woman cunt (derogatory use)
  "number 9 koothi": [5, 5], // Number 9 cunt (slang for eunuch)
  "pottal koothi": [5, 5], // Eunuch cunt variant
  "pottal sunni": [4, 5], // Eunuch dick variant

  // ========================================
  // === More Extended Tamil Script ===
  // ========================================
  "உன் அம்மா ஊர் கூத்தி": [3, 4], // Your mother village slut
  "உன் அம்மா பச்ச வேசி": [5, 4], // Your mother total prostitute
  "உன் அக்கா ஊர் வேசி": [5, 4], // Your sister village prostitute
  "உன் குடும்பம் முழுசும் கூத்தி": [5, 5], // Entire family cunts
  "உன் வம்சம் முழுசும் வேசி": [5, 4], // Entire lineage prostitutes
  "உன் அம்மா கழுதை கூத்தி": [5, 5], // Your mother donkey cunt
  "உன் அக்கா எருமை கூத்தி": [5, 5], // Your sister buffalo cunt
  "உன் அம்மாக்கு நாய் ஒக்கும்": [3, 5], // Dogs fuck your mother
  "உன் அம்மாக்கு பன்னி ஒக்கும்": [3, 5], // Pigs fuck your mother
  "உன் அம்மாக்கு கழுதை ஒக்கும்": [3, 5], // Donkeys fuck your mother
  "உன் அம்மா ஹிஜ்ரா": [3, 4], // Your mother eunuch
  "உன் அப்பா ஹிஜ்ரா": [1, 4], // Your father eunuch
  "ஹிஜ்ரா கூத்தி": [5, 5], // Eunuch cunt
  "பொட்டை வேசி": [5, 4], // Eunuch prostitute
  "அரவாணி கூத்தி": [5, 5], // Third-gender cunt (derogatory)

  // ========================================
  // === More Extended Animal Compounds ===
  // ========================================
  "naai otha punda koothi": [5, 5], // Dog fuck off cunt
  "panni otha punda koothi": [5, 5], // Pig fuck off cunt
  "kazhudhai otha punda koothi": [5, 5], // Donkey fuck off cunt
  "erumai otha punda koothi": [5, 5], // Buffalo fuck off cunt
  "aadu otha punda koothi": [5, 5], // Goat fuck off cunt
  "kurangu otha punda koothi": [5, 5], // Monkey fuck off cunt
  "poonai otha punda koothi": [5, 5], // Cat fuck off cunt
  "eli otha punda koothi": [5, 5], // Rat fuck off cunt
  "paambu otha punda koothi": [5, 5], // Snake fuck off cunt
  "naai vesi thevidiya koothi": [5, 5], // Dog prostitute cunt
  "panni vesi thevidiya koothi": [5, 5], // Pig prostitute cunt
  "kazhudhai vesi thevidiya koothi": [5, 5], // Donkey prostitute cunt
  "erumai vesi thevidiya koothi": [5, 5], // Buffalo prostitute cunt
  "naai sunni oombu": [4, 5], // Suck dog's dick
  "panni sunni oombu": [4, 5], // Suck pig's dick
  "kazhudhai sunni oombu": [4, 5], // Suck donkey's dick
  "erumai sunni oombu": [4, 5], // Suck buffalo's dick
  "kurangu sunni oombu": [4, 5], // Suck monkey's dick
  "aadu sunni oombu": [4, 5], // Suck goat's dick
  "naai soothu nakki": [3, 5], // Lick dog's ass
  "panni soothu nakki": [3, 5], // Lick pig's ass
  "kazhudhai soothu nakki": [3, 5], // Lick donkey's ass
  "erumai soothu nakki": [3, 5], // Lick buffalo's ass
  "naai thayoli": [5, 5], // Dog motherfucker
  "panni thayoli": [5, 5], // Pig motherfucker
  "kazhudhai thayoli": [5, 5], // Donkey motherfucker
  "erumai thayoli": [5, 5], // Buffalo motherfucker
  "kurangu thayoli": [5, 5], // Monkey motherfucker
  "aadu thayoli": [5, 5], // Goat motherfucker
  "poonai thayoli": [5, 5], // Cat motherfucker
  "eli thayoli": [5, 5], // Rat motherfucker

  // ========================================
  // === More Extended Threats (Tamil) ===
  // ========================================
  "un amma munnadiye okkuven": [5, 5], // I'll fuck your mother in front (of you)
  "un akka munnadiye okkuven": [5, 5], // I'll fuck your sister in front (of you)
  "un vamsam azhikkuven": [5, 5], // I'll destroy your lineage
  "un kudumbam azhikkuven": [5, 5], // I'll destroy your family
  "un peyar keli kettiduvaan": [5, 5], // Your name will be defamed
  "un pundai la thee vaippen": [5, 5], // I'll set your cunt on fire
  "un soothu la thee vaippen": [5, 5], // I'll set your ass on fire
  "un sunni la thee vaippen": [5, 5], // I'll set your dick on fire
  "un koothi la milagai podhuven": [5, 5], // I'll put chili in your cunt
  "un soothu la milagai podhuven": [5, 5], // I'll put chili in your ass
  "un pundai la irumbu sunni dhukuven": [5, 5], // I'll insert iron dick in your cunt
  "un soothu la irumbu sunni dhukuven": [5, 5], // I'll insert iron dick in your ass
  "un sunni la rope kattuven": [5, 5], // I'll tie rope to your dick
  "un koothi thaichikuven": [5, 5], // I'll sew your cunt shut
  "un soothu thaichikuven": [5, 5], // I'll sew your ass shut
  "un pundai la paambu viduven": [5, 5], // I'll put snake in your cunt
  "un soothu la paambu viduven": [5, 5], // I'll put snake in your ass
  "un vamsam thikku muzhangu paduvaan": [5, 5], // Your lineage will be humiliated
  "unna naai ku pottruven": [5, 5], // I'll feed you to dogs
  "unna panni ku pottruven": [5, 5], // I'll feed you to pigs
  "unna drain la podhuven": [5, 5], // I'll put you in drain
  "unna gutter la podhuven": [5, 5], // I'll put you in gutter
  "unna uyiroda puthaippen": [5, 5], // I'll bury you alive

  // ========================================
  // === More Extended Tamil Script Threats ===
  // ========================================
  "உன் அம்மா முன்னாடியே ஒக்குவேன்": [5, 5], // I'll fuck mother in front
  "உன் அக்கா முன்னாடியே ஒக்குவேன்": [5, 5], // I'll fuck sister in front
  "உன் வம்சம் அழிக்குவேன்": [5, 5], // I'll destroy lineage
  "உன் குடும்பம் அழிக்குவேன்": [5, 5], // I'll destroy family
  "உன் புண்டையில தீ வைப்பேன்": [5, 5], // Set cunt on fire
  "உன் சூத்தில தீ வைப்பேன்": [5, 5], // Set ass on fire
  "உன் கூத்தியில மிளகாய் போடுவேன்": [5, 5], // Put chili in cunt
  "உன் சூத்தில மிளகாய் போடுவேன்": [5, 5], // Put chili in ass
  "உன் புண்டையில பாம்பு விடுவேன்": [5, 5], // Put snake in cunt
  "உன் சூத்தில பாம்பு விடுவேன்": [5, 5], // Put snake in ass
  "உன்னை நாய்க்கு போட்டுருவேன்": [5, 5], // Feed you to dogs
  "உன்னை பன்னிக்கு போட்டுருவேன்": [5, 5], // Feed you to pigs

  // ========================================
  // === More Extended Tanglish Gaming ===
  // ========================================
  "afk koothi otha": [5, 5], // AFK cunt fuck off
  "report pannu da koothi": [5, 5], // Report cunt
  "mute pannu da punda": [5, 5], // Mute cunt
  "feed panda koothi": [5, 5], // Fed cunt
  "carry pannura koothi": [5, 5], // Carrying cunt
  "int panda koothi": [5, 5], // Feeding intentionally cunt
  "trash tier koothi": [5, 5], // Trash tier cunt
  "bronze koothi": [5, 5], // Bronze cunt (low rank)
  "iron koothi": [5, 5], // Iron cunt (lowest rank)
  "hardstuck koothi": [5, 5], // Hardstuck cunt (can't rank up)
  "boosted koothi": [5, 5], // Boosted cunt (fake rank)
  "elo hell koothi": [5, 5], // Elo hell cunt
  "smurf otha": [3, 5], // Smurf fuck off
  "aim illa koothi": [5, 5], // No aim cunt
  "game sense illa koothi": [5, 5], // No game sense cunt
  "camping koothi otha": [5, 5], // Camping cunt fuck off
  "stream sniper otha": [3, 5], // Stream sniper fuck off
  "gg koothi otha": [5, 5], // GG cunt fuck off
  "ez koothi otha": [5, 5], // EZ cunt fuck off

  // ========================================
  // === More Extended Caste Slurs ===
  // ========================================
  "paraiyan koothi otha": [5, 5], // Dalit caste cunt fuck off
  "paraiyan punda otha": [5, 5], // Dalit caste cunt fuck off variant
  "paraichi koothi otha": [5, 5], // Female Dalit cunt fuck off
  "chakkiliya punda otha": [5, 5], // Leather-worker cunt fuck off
  "pallan koothi otha": [5, 5], // Agricultural caste cunt fuck off
  "pallaichi punda otha": [5, 5], // Female form cunt fuck off
  "thotti koothi otha": [5, 5], // Sweeper cunt fuck off
  "thottichi punda otha": [5, 5], // Female sweeper cunt fuck off
  "paarpan koothi otha": [5, 5], // Brahmin cunt fuck off
  "keezh jaathi otha da": [5, 5], // Low caste fuck off
  "kulam kettavan otha": [5, 5], // Ruined caste fuck off
  "jathi illa otha": [5, 5], // No caste fuck off
  "paraiyan thevidiya": [5, 4], // Dalit prostitute
  "chakkiliya thevidiya": [5, 4], // Leather-worker prostitute
  "pallan thevidiya": [5, 4], // Agricultural caste prostitute
  "thotti thevidiya": [5, 4], // Sweeper prostitute
  "keezh jaathi thevidiya": [5, 4], // Low caste prostitute
  "keezh jaathi thayoli": [5, 5], // Low caste motherfucker
  "keezh jaathi sunni oombu": [5, 4], // Low caste suck dick
  "keezh jaathi vesi": [5, 4], // Low caste prostitute variant

  // ========================================
  // === More Extended Tamil Script Caste ===
  // ========================================
  "பறையன் கூத்தி ஓத்தா": [5, 4], // Paraiyan koothi otha
  "பறைச்சி கூத்தி ஓத்தா": [5, 4], // Paraichi koothi otha
  "சக்கிலிய புண்ட ஓத்தா": [5, 4], // Chakkiliya punda otha
  "பள்ளன் கூத்தி ஓத்தா": [5, 4], // Pallan koothi otha
  "தோட்டி கூத்தி ஓத்தா": [5, 4], // Thotti koothi otha
  "பாப்பான் கூத்தி ஓத்தா": [5, 4], // Paarpan koothi otha
  "கீழ் ஜாதி ஓத்தா டா": [5, 4], // Keezh jaathi otha da
  "கீழ் ஜாதி தேவடியா": [5, 4], // Keezh jaathi thevidiya
  "கீழ் ஜாதி தாயோளி": [5, 4], // Keezh jaathi thayoli
  "கீழ் ஜாதி வேசி": [5, 4], // Keezh jaathi vesi

  // ========================================
  // === More Tamil Romanized Compounds ===
  // ========================================
  "un amma thevidiya batch": [5, 5], // Your mother is prostitute batch
  "un akka vesi batch": [5, 5], // Your sister is prostitute batch
  "un appa punda batch": [1, 5], // Your father is cunt batch
  "un kudumbam koothi batch": [5, 5], // Your family is cunt batch
  "un vaamsam vesi batch": [5, 5], // Your lineage is prostitute batch
  "oor la ellaarum un amma ku okkum": [3, 5], // Everyone in town fucks your mother
  "oor la ellaarum un akka ku okkum": [3, 5], // Everyone in town fucks your sister
  "area la ellaarum un amma ku okkum": [3, 5], // Everyone in area fucks your mother
  "bazaar la ellaarum un amma ku okkum": [3, 5], // Everyone in bazaar fucks your mother
  "naai kuda un amma ku okkum": [3, 5], // Even dogs fuck your mother
  "panni kuda un amma ku okkum": [3, 5], // Even pigs fuck your mother
  "kazhudhai kuda un amma ku okkum": [3, 5], // Even donkeys fuck your mother
  "un amma sunni oomburadhu profession": [4, 5], // Your mother's profession is dick sucking
  "un akka soothu tharuradhu profession": [3, 5], // Your sister's profession is giving ass
  "un amma free la okkum": [5, 5], // Your mother fucks for free
  "un akka free la okkum": [3, 5], // Your sister fucks for free
  "un amma oru ruba ku okkum": [5, 5], // Your mother fucks for one rupee
  "un amma oru paisa ku okkum": [5, 5], // Your mother fucks for one paisa
  "un amma ku price illa": [3, 5], // Your mother has no price (worthless)
  "un akka ku price illa": [3, 5], // Your sister has no price (worthless)

  // ========================================
  // === Extended Tamil Script Sexual Insults ===
  // ========================================
  "உன் அம்மா புண்ட நக்குவேன்": [4, 4], // I'll lick your mother's pussy
  "உன் அக்கா புண்ட நக்குவேன்": [4, 4], // I'll lick your sister's pussy
  "உன் அம்மா சூத்து நக்குவேன்": [3, 4], // I'll lick your mother's ass
  "உன் அக்கா சூத்து நக்குவேன்": [3, 4], // I'll lick your sister's ass
  "உன் அம்மா முலை பிடிப்பேன்": [4, 4], // I'll squeeze your mother's breasts
  "உன் அக்கா முலை பிடிப்பேன்": [4, 4], // I'll squeeze your sister's breasts
  "உன் அம்மா புண்டையில கை வைப்பேன்": [4, 4], // I'll put hand in your mother's pussy
  "உன் அம்மா புண்டையில கால் வைப்பேன்": [4, 4], // I'll put foot in your mother's pussy
  "உன் சுன்னி வெட்டுவேன்": [4, 4], // I'll cut your dick
  "உன் சுன்னி ஒடிப்பேன்": [4, 4], // I'll break your dick
  "உன் கொட்டை பிடிப்பேன்": [4, 4], // I'll squeeze your balls
  "உன் கொட்டை வெட்டுவேன்": [4, 4], // I'll cut your balls
  "உன் அம்மா புண்ட கிழிப்பேன்": [4, 4], // I'll tear your mother's pussy
  "உன் அக்கா புண்ட கிழிப்பேன்": [4, 4], // I'll tear your sister's pussy
  "உன் அம்மா சூத்து கிழிப்பேன்": [3, 4], // I'll tear your mother's ass
  "உன் அக்கா சூத்து கிழிப்பேன்": [3, 4], // I'll tear your sister's ass
  "வேசி மகனே நீ": [5, 4], // Prostitute's son you (formal)
  "விபச்சாரி மகனே நீ": [5, 4], // Prostitute's son you (alt)
  "தேவிடியா மகனே நீ": [5, 4], // Prostitute's son you
  "தேவிடியா மகளே நீ": [5, 4], // Prostitute's daughter you
  "கூத்தி மகனே நீ": [5, 4], // Whore's son you
  "கூத்தி மகளே நீ": [5, 4], // Whore's daughter you
  "உன் அம்மா சந்தை வேசி": [5, 4], // Your mother is market whore
  "உன் அக்கா சந்தை வேசி": [5, 4], // Your sister is market whore
  "உன் அம்மா ரோட்டு வேசி": [5, 4], // Your mother is street whore
  "உன் அக்கா ரோட்டு வேசி": [5, 4], // Your sister is street whore
  "உன் அம்மா ஊர் வேசி": [5, 4], // Your mother is town whore

  // ========================================
  // === Extended Romanized Tamil Sexual ===
  // ========================================
  "un amma punda nakkuven": [4, 5], // I'll lick your mother's pussy
  "un akka punda nakkuven": [4, 5], // I'll lick your sister's pussy
  "un amma soothu nakkuven": [3, 5], // I'll lick your mother's ass
  "un akka soothu nakkuven": [3, 5], // I'll lick your sister's ass
  "un amma mulai pidipppen": [4, 5], // I'll squeeze your mother's breasts
  "un akka mulai pidippen": [4, 5], // I'll squeeze your sister's breasts
  "un amma pundaiyila kai vaipppen": [4, 5], // I'll put hand in your mother's pussy
  "un amma pundaiyila kaal vaipppen": [4, 5], // I'll put foot in your mother's pussy
  "un sunni vettuven": [4, 5], // I'll cut your dick
  "un sunni odippen": [4, 5], // I'll break your dick
  "un kottai pidippen": [4, 5], // I'll squeeze your balls
  "un kottai vettuven": [4, 5], // I'll cut your balls
  "un amma punda kizhippen": [4, 5], // I'll tear your mother's pussy
  "un akka punda kizhippen": [4, 5], // I'll tear your sister's pussy
  "un amma soothu kizhippen": [3, 5], // I'll tear your mother's ass
  "un akka soothu kizhippen": [3, 5], // I'll tear your sister's ass
  "vesi magane nee": [5, 5], // Prostitute's son you (formal)
  "vibachchaari magane nee": [5, 5], // Prostitute's son you (alt)
  "thevidiya magane nee": [5, 5], // Prostitute's son you
  "thevidiya magale nee": [5, 5], // Prostitute's daughter you
  "koothi magane nee": [5, 5], // Whore's son you
  "koothi magale nee": [5, 5], // Whore's daughter you
  "un amma sandai vesi": [5, 5], // Your mother is market whore
  "un akka sandai vesi": [5, 5], // Your sister is market whore
  "un amma rottu vesi": [5, 5], // Your mother is street whore
  "un akka rottu vesi": [5, 5], // Your sister is street whore
  "un amma ooru vesi": [5, 5], // Your mother is town whore
  "un akka ooru vesi": [5, 5], // Your sister is town whore

  // ========================================
  // === Extended Madurai/Kongu Dialect ===
  // ========================================
  "unga amma ku okkuven da": [3, 5], // I'll fuck your mother (Madurai)
  "unga akka ku okkuven da": [3, 5], // I'll fuck your sister (Madurai)
  "thevidiya paiyan da nee": [5, 4], // Prostitute's son you (Madurai)
  "koothi paiyan da nee": [5, 4], // Whore's son you (Madurai)
  "punda paiyan da nee": [5, 5], // Cunt's son you (Madurai)
  "otha da saani": [3, 5], // Fuck you eunuch (Madurai)
  "okkala da saani": [3, 5], // Get fucked eunuch (Madurai)
  "punda mavane": [5, 5], // Cunt son-in-law (Kongu)
  "koothi mavane": [5, 4], // Whore son-in-law (Kongu)
  "soothu mavane": [3, 4], // Ass son-in-law (Kongu)
  "sunni mavane": [4, 4], // Dick son-in-law (Kongu)
  "okkala mavane": [3, 5], // Get fucked son-in-law (Kongu)
  "poda koothi payale": [5, 4], // Go whore's son (Kongu)
  "poda punda payale": [5, 5], // Go cunt's son (Kongu)
  "poda soothu payale": [3, 4], // Go ass's son (Kongu)
  "unga veettula ellaarum vesi": [5, 4], // Everyone in your house is whore (Madurai)
  "unga veettula ellaarum thevidiya": [5, 4], // Everyone in your house is prostitute (Madurai)
  "unga kula ellaarum vesi": [5, 4], // Everyone in your clan is whore (Madurai)
  "unga kula ellaarum koothi": [5, 4], // Everyone in your clan is whore (Madurai alt)
  "ooru la un amma ku okkuvaanga": [3, 5], // Village people fuck your mother (Madurai)

  // ========================================
  // === Extended Sri Lankan Tamil ===
  // ========================================
  "umba amma pundai okkuvan": [4, 5], // I'll fuck your mother's pussy (SL Tamil)
  "umba akka pundai okkuvan": [4, 5], // I'll fuck your sister's pussy (SL Tamil)
  "umba thathi modda": [1, 4], // Your father's dick (SL Tamil)
  "umba amma vesiyaa": [5, 4], // Your mother is a whore (SL Tamil)
  "umba akka vesiyaa": [5, 4], // Your sister is a whore (SL Tamil)
  "pundai okkara paiyan": [4, 5], // Pussy fucker boy (SL Tamil)
  "soothu okkara paiyan": [3, 5], // Ass fucker boy (SL Tamil)
  "sunni oomba paiyan": [4, 4], // Dick sucker boy (SL Tamil)
  "vesiyoda mahan": [5, 4], // Whore's son (SL Tamil formal)
  "kooththiyoda mahan": [5, 4], // Whore's son (SL Tamil)
  "umba amma roadla nikkindra": [3, 4], // Your mother stands on the road (SL Tamil)
  "umba akka roadla nikkindra": [3, 4], // Your sister stands on the road (SL Tamil)
  "umba amma lorry driverlukku okkum": [5, 5], // Your mother fucks lorry drivers (SL Tamil)
  "umba amma soldierslukku okkum": [5, 5], // Your mother fucks soldiers (SL Tamil)
  "umba amma bazaarlaa okkum": [5, 5], // Your mother fucks in the bazaar (SL Tamil)

  // ========================================
  // === Extended Malaysian/Singapore Tamil ===
  // ========================================
  "pundek maa": [4, 4], // Pussy mother (MY Tamil)
  "pundek ayah": [1, 4], // Pussy father (MY Tamil)
  "pundek lu": [4, 4], // Pussy you (MY Tamil)
  "keling pundek": [4, 4], // Indian pussy (MY Tamil slur)
  "anna pundek": [4, 4], // Brother pussy (MY Tamil elder)
  "machan pundek": [4, 4], // Dude pussy (MY Tamil)
  "pundek kia": [4, 4], // Pussy child (MY Tamil)
  "okkala pundek": [4, 5], // Get fucked pussy (MY Tamil)
  "pundek bodoh": [1, 4], // Pussy stupid (MY Tamil-Malay mix)
  "sundel lu": [5, 4], // Whore you (MY Tamil-Malay mix)
  "palat lu pundek": [4, 4], // Go back pussy (MY Tamil)
  "mabuk pundek": [1, 3], // Drunk pussy (MY Tamil-Malay mix)
  "celaka pundek": [4, 4], // Damn pussy (MY Tamil-Malay mix)

  // ========================================
  // === Extended Body Part Combos (Tamil) ===
  // ========================================
  "பெரிய புண்ட வாடா": [4, 3], // Big pussy guy
  "சின்ன சுன்னி வாடா": [4, 3], // Small dick guy
  "பெரிய சூத்து வாடா": [4, 3], // Big ass guy
  "சின்ன கொட்டை வாடா": [4, 3], // Small balls guy
  "வளைந்த சுன்னி வாடா": [4, 3], // Bent dick guy
  "குட்டை சுன்னி வாடா": [4, 3], // Short dick guy
  "தொங்கு முலை": [4, 3], // Saggy breasts
  "தொங்கு சுன்னி": [4, 3], // Saggy dick
  "periya punda vaada": [4, 3], // Big pussy guy
  "chinna sunni vaada": [4, 3], // Small dick guy
  "periya soothu vaada": [4, 3], // Big ass guy
  "chinna kottai vaada": [4, 3], // Small balls guy
  "valaindha sunni vaada": [4, 3], // Bent dick guy
  "kuttai sunni vaada": [4, 3], // Short dick guy
  "thongu mulai": [4, 3], // Saggy breasts
  "thongu sunni": [4, 3], // Saggy dick
  "ஊளை சுன்னி": [4, 3], // Rotten dick
  "ஊளை புண்ட": [4, 3], // Rotten pussy
  "oolai sunni": [4, 3], // Rotten dick
  "oolai punda": [4, 3], // Rotten pussy

  // ========================================
  // === Extended Emasculation Insults (Tamil) ===
  // ========================================
  "உன் சுன்னி எழும்பாது": [4, 4], // Your dick can't get up
  "உன் சுன்னி வேலை செய்யாது": [4, 4], // Your dick doesn't work
  "உன் சுன்னி செத்துப்போச்சு": [5, 5], // Your dick died
  "நீ ஆண்மை இல்லாதவன்": [1, 4], // You are impotent
  "நீ அலி": [1, 4], // You are a eunuch
  "நீ ஒன்பது": [1, 3], // You are a nine (eunuch slang)
  "உன் சுன்னி புழு மாதிரி": [4, 4], // Your dick is like a worm
  "உன் சுன்னி விரல் மாதிரி": [4, 4], // Your dick is like a finger
  "un sunni ezhumbadhu": [4, 4], // Your dick can't get up
  "un sunni velai seyyaadhu": [4, 4], // Your dick doesn't work
  "un sunni sethupochu": [5, 5], // Your dick died
  "nee aanmai illaathavan": [1, 4], // You are impotent
  "nee ali": [1, 4], // You are a eunuch
  "nee ombudhu": [1, 3], // You are a nine (eunuch slang)
  "un sunni puzhu maathiri": [4, 4], // Your dick is like a worm
  "un sunni viral maathiri": [4, 4], // Your dick is like a finger

  // ========================================
  // === Extended Scatological (Tamil) ===
  // ========================================
  "உன் முகத்தில் மலம் தீற்றுவேன்": [3, 5], // I'll smear shit on your face
  "உன் முகத்தில் சிறுநீர் ஊற்றுவேன்": [3, 4], // I'll pour piss on your face
  "உன் சாப்பாட்டில் மலம் போடுவேன்": [3, 5], // I'll put shit in your food
  "உன் சாப்பாட்டில் சிறுநீர் போடுவேன்": [3, 4], // I'll put piss in your food
  "மலம் தின்னும் நாய்": [3, 5], // Shit eating dog
  "சிறுநீர் குடிக்கும் நாய்": [3, 4], // Piss drinking dog
  "குண்டி காற்று மோப்பான்": [3, 4], // Fart sniffer
  "un mugathtula malam theetruven": [3, 5], // I'll smear shit on your face
  "un mugathtula siruneer ootruven": [3, 4], // I'll pour piss on your face
  "un saappaattula malam poduven": [3, 5], // I'll put shit in your food
  "un saappaattula siruneer poduven": [3, 4], // I'll put piss in your food
  "malam thinnum naai": [3, 5], // Shit eating dog
  "siruneer kudikkum naai": [3, 4], // Piss drinking dog
  "kundi kaatru moppaan": [3, 4], // Fart sniffer
  "un amma mugathtula malam": [3, 5], // Shit on your mother's face
  "un akka mugathtula malam": [3, 5], // Shit on your sister's face
  "un amma mugathtula moothiram": [3, 4], // Piss on your mother's face
  "un akka mugathtula moothiram": [3, 4], // Piss on your sister's face

  // ========================================
  // === Extended Evasion Spellings (Tamil) ===
  // ========================================
  "0thaa": [3, 5], // Fuck (evasion alt)
  "p00nda": [4, 5], // Pussy (evasion)
  "sunn1": [4, 5], // Dick (evasion)
  "0kkala": [3, 5], // Get fucked (evasion)
  "p00ndai": [4, 5], // Pussy (evasion alt)
  "th3v1d1ya": [5, 5], // Prostitute (evasion alt)
  "k@@thi": [5, 5], // Whore (evasion)
  "p@@nda": [4, 5], // Pussy (evasion)
  "s@@thu": [3, 5], // Ass (evasion)
  "0mb0": [3, 5], // Suck (evasion)
  "sunn!": [4, 5], // Dick (evasion)
  "m00lai": [4, 5], // Breasts (evasion)
  "k0tt@i": [4, 5], // Balls (evasion)
  "th@y0li": [5, 5], // Motherfucker (evasion alt)

  // ========================================
  // === Extended Abuse Phrases (Tamil) ===
  // ========================================
  "un vazhkaikku vilai illa": [3, 4], // Your life has no price
  "nee porakkaamal irunthaa nallaa irukum": [3, 4], // Better if you weren't born
  "un amma un appaa yaarunu theriyaadhu": [1, 4], // Your mother doesn't know your father
  "un appaa yaaru yaarukkum theriyaadhu": [1, 4], // Nobody knows who your father is
  "un amma unnai dustbin la pottu vittaa": [3, 4], // Your mother threw you in dustbin
  "un amma unnai road la pottu vittaa": [3, 4], // Your mother threw you on the road
  "unnai yaarukum vendaam": [3, 4], // Nobody wants you
  "un mugam paarthaa aalu thupum": [3, 4], // People spit seeing your face
  "un peru ketta aalu sirikum": [3, 4], // People laugh hearing your name
  "un family la ellaarum vesi": [5, 4], // Everyone in your family is whore
  "un family la ellaarum thevidiya": [5, 4], // Everyone in your family is prostitute
  "un kulam la ellaarum koothi": [5, 4], // Everyone in your clan is whore
  "un kulam la ellaarum okkalaigal": [3, 5], // Everyone in your clan are fuckers
  "உன் வாழ்க்கைக்கு விலை இல்லை": [3, 4], // Your life has no price (script)
  "நீ பொறக்காமல் இருந்தா நல்லா இருக்கும்": [3, 4], // Better if you weren't born (script)
  "உன் அம்மா உன் அப்பா யாருன்னு தெரியாது": [1, 4], // Your mother doesn't know your father (script)
  "உன்னை யாருக்கும் வேண்டாம்": [3, 4], // Nobody wants you (script)
  "உன் முகம் பார்த்தா ஆளு துப்பும்": [3, 4], // People spit seeing your face (script)
  "உன் பேரு கேட்டா ஆளு சிரிக்கும்": [3, 4], // People laugh hearing your name (script)
  "உன் ஃபேமிலி ல எல்லாரும் வேசி": [5, 4], // Everyone in your family is whore (script)

  // ========================================
  // === Extended Caste-Based (Tamil) ===
  // ========================================
  "pallan punda otha": [5, 5], // Pallan caste cunt fucker
  "chakkiliyar punda otha": [5, 5], // Chakkiliyar caste cunt fucker
  "vannan punda otha": [5, 5], // Washerman caste cunt fucker
  "ambaththan punda otha": [5, 5], // Barber caste cunt fucker
  "keezh jaathi naai": [5, 4], // Low caste dog
  "keezh jaathi panni": [5, 4], // Low caste pig
  "keezh jaathi thevidiya magan": [5, 4], // Low caste prostitute's son
  "keezh jaathi koothi magan": [5, 4], // Low caste whore's son
  "கீழ் ஜாதி நாய்": [5, 4], // Low caste dog (script)
  "கீழ் ஜாதி பன்னி": [5, 4], // Low caste pig (script)
  "கீழ் ஜாதி தேவடியா மகன்": [5, 4], // Low caste prostitute's son (script)
  "கீழ் ஜாதி கூத்தி மகன்": [5, 4], // Low caste whore's son (script)
  "பள்ளன் புண்ட": [5, 5], // Pallan caste cunt (script)
  "பறையன் புண்ட": [5, 5], // Paraiyan caste cunt (script)

  // ========================================
  // === Extended Internet/Gaming Tamil ===
  // ========================================
  "nee noob punda da": [5, 5], // You noob cunt
  "nee hacker thevidiya magan da": [5, 4], // You hacker prostitute's son
  "nee camper koothi paiyan da": [5, 4], // You camper whore's son
  "nee feeder punda da": [5, 5], // You feeder cunt
  "nee troll thevidiya magan da": [5, 4], // You troll prostitute's son
  "nee toxic koothi paiyan da": [5, 4], // You toxic whore's son
  "nee griefing punda da": [5, 5], // You griefing cunt
  "nee afk thevidiya magan da": [5, 4], // You AFK prostitute's son
  "nee stream sniper punda da": [5, 5], // You stream sniper cunt
  "game vidu da koothi paiyan": [5, 4], // Leave game whore's son
  "uninstall pannu da punda": [5, 5], // Uninstall cunt
  "lag ku otha da": [3, 5], // Fuck the lag
  "ping ku otha da": [3, 5], // Fuck the ping
  "server ku otha da": [3, 5], // Fuck the server
  "gg punda": [5, 5], // GG cunt
  "ez punda": [5, 5], // EZ cunt
  "gg sunni oombu": [4, 3], // GG suck dick
  "ez sunni oombu": [4, 3], // EZ suck dick
  "report pannu punda": [5, 5], // Report cunt
};
const tamilBadWords: Record<string, { s: number; c: number }> = {};
for (const [k, [s, c]] of Object.entries(_d)) {
    tamilBadWords[k] = { s, c };
}
export default tamilBadWords;

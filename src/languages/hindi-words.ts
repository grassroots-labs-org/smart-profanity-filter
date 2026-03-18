// src/hindi-words.ts

/**
 * Hindi/Hinglish profanity words list
 * Contains common profanities in both Devanagari and Roman scripts
 * ⚠️ Warning: This file contains explicit language in Hindi
 */
const hindiBadWords: Record<string, { s: number; c: number }> = {
  "bc": { s: 3, c: 4 }, // Abbreviation for behenchod
  "mc": { s: 5, c: 5 }, // Abbreviation for madarchod
  // ========================================
  // === Original Seed Words ===
  // ========================================
  // Roman script Hindi/Hinglish profanities
  "behen chod": { s: 3, c: 5 }, // Sister fucker
  "behenchod": { s: 3, c: 5 }, // Sister fucker
  "bhenchod": { s: 5, c: 5 }, // Sister fucker
  "bakchod": { s: 3, c: 5 }, // Bullshitter
  "chutiya": { s: 3, c: 4 }, // Idiot / Fool (vulgar)
  "chutiyapa": { s: 1, c: 4 }, // Idiocy / Foolishness (vulgar)
  "gandu": { s: 3, c: 4 }, // Asshole
  "gaandu": { s: 3, c: 4 }, // Asshole
  "harami": { s: 3, c: 4 }, // Bastard
  "haramzada": { s: 3, c: 4 }, // Bastard (born of sin)
  "kutta": { s: 3, c: 4 }, // Dog (insult)
  "kutte": { s: 3, c: 4 }, // Dogs (insult)
  "kamina": { s: 3, c: 4 }, // Scoundrel
  "lund": { s: 4, c: 4 }, // Penis (vulgar)
  "lauda": { s: 4, c: 4 }, // Penis (vulgar)
  "loda": { s: 4, c: 4 }, // Penis (vulgar)
  "randi": { s: 3, c: 4 }, // Prostitute
  "saala": { s: 3, c: 4 }, // Brother-in-law (used as insult: bastard)
  "madarchod": { s: 5, c: 5 }, // Motherfucker
  "chod": { s: 3, c: 5 }, // Fuck
  "chodu": { s: 3, c: 4 }, // Fucker / Idiot

  // Devanagari script profanities
  "भड़वा": { s: 3, c: 4 }, // Pimp
  "भोसड़ी": { s: 4, c: 4 }, // Vagina (extremely vulgar)
  "बहन चोद": { s: 3, c: 5 }, // Sister fucker
  "भेन चोद": { s: 3, c: 5 }, // Sister fucker
  "चूतिया": { s: 1, c: 4 }, // Idiot / Fool (vulgar)
  "हरामी": { s: 3, c: 4 }, // Bastard
  "हरामज़ादा": { s: 3, c: 4 }, // Bastard (born of sin)
  "कमीना": { s: 3, c: 4 }, // Scoundrel
  "लंड": { s: 4, c: 4 }, // Penis (vulgar)
  "लौड़ा": { s: 4, c: 4 }, // Penis (vulgar)
  "रंडी": { s: 5, c: 4 }, // Prostitute
  "साला": { s: 3, c: 4 }, // Brother-in-law (used as insult)
  "मादरचोद": { s: 5, c: 5 }, // Motherfucker

  // Common misspellings and variations (Original)
  "bhnchd": { s: 3, c: 5 }, // Abbreviation/Variation of behenchod
  "behanchod": { s: 3, c: 5 }, // Sister fucker (variant)
  "bhanchod": { s: 3, c: 5 }, // Sister fucker (variant)
  "bhen chod": { s: 3, c: 5 }, // Sister fucker (variant)
  "chutia": { s: 1, c: 5 }, // Idiot (variant spelling)
  "rendi": { s: 5, c: 5 }, // Prostitute (variant)
  "maderchod": { s: 5, c: 5 }, // Motherfucker (variant)
  "madarchood": { s: 5, c: 5 }, // Motherfucker (variant)
  "madarjaat": { s: 5, c: 5 }, // Motherfucker's kind
  "gandoo": { s: 3, c: 5 }, // Asshole (variant)

  // ========================================
  // === Expanded List (Roman Script) ===
  // ========================================

  // --- Variations of 'Behenchod' ---
  "behanchood": { s: 3, c: 5 }, // Sister fucker (variant)
  "behenchood": { s: 3, c: 5 }, // Sister fucker (variant)
  "bhenchood": { s: 3, c: 5 }, // Sister fucker (variant)
  "bhainchod": { s: 3, c: 5 }, // Sister fucker (variant)
  "bhain chood": { s: 3, c: 5 }, // Sister fucker (variant)
  "bahenchod": { s: 3, c: 5 }, // Sister fucker (variant)
  "behnchod": { s: 3, c: 5 }, // Sister fucker (variant)
  "behncod": { s: 3, c: 5 }, // Sister fucker (variant)
  "behn chod": { s: 3, c: 5 }, // Sister fucker (variant)
  "bhen cod": { s: 3, c: 5 }, // Sister fucker (variant)
  "bhen chood": { s: 3, c: 5 }, // Sister fucker (variant)
  "bahanchod": { s: 3, c: 5 }, // Sister fucker (variant)
  "bhenco": { s: 3, c: 5 }, // Sister fucker (shortened)
  "bhencho": { s: 3, c: 5 }, // Sister fucker (shortened)
  "b c": { s: 3, c: 4 }, // Abbreviation for behenchod
  "be si": { s: 3, c: 5 }, // Phonetic abbreviation for BC
  "bee see": { s: 3, c: 5 }, // Phonetic abbreviation for BC
  "behenkechodo": { s: 3, c: 5 }, // Compound: sister fuckers
  "bhenkelode": { s: 4, c: 4 }, // Compound: sister's dicks
  "bkl": { s: 3, c: 4 }, // Abbreviation for Behen ke Lode
  "bahan chod": { s: 3, c: 5 }, // Sister fucker (variant)
  "bahan ke": { s: 3, c: 4 }, // Sister's... (start of insult)

  // --- Variations of 'Madarchod' ---
  "madar chod": { s: 5, c: 5 }, // Motherfucker (variant)
  "madarchodd": { s: 5, c: 5 }, // Motherfucker (variant)
  "madarchoddd": { s: 5, c: 5 }, // Motherfucker (variant)
  "madar chood": { s: 5, c: 5 }, // Motherfucker (variant)
  "madrchod": { s: 5, c: 5 }, // Motherfucker (variant)
  "madarchud": { s: 5, c: 5 }, // Motherfucker (variant)
  "mader chod": { s: 5, c: 5 }, // Motherfucker (variant)
  "maderchood": { s: 5, c: 5 }, // Motherfucker (variant)
  "modarchod": { s: 5, c: 5 }, // Motherfucker (variant)
  "mother chod": { s: 5, c: 5 }, // Motherfucker (Hinglish)
  "motherchodd": { s: 5, c: 5 }, // Motherfucker (Hinglish variant)
  "mother fucker": { s: 3, c: 5 }, // English, but used in Hinglish context
  "maachod": { s: 5, c: 5 }, // Motherfucker (shortened)
  "maa chod": { s: 5, c: 5 }, // Motherfucker (shortened)
  "ma chod": { s: 5, c: 5 }, // Motherfucker (shortened)
  "maa chood": { s: 5, c: 5 }, // Motherfucker (variant)
  "m c": { s: 5, c: 5 }, // Abbreviation for madarchod
  "em cee": { s: 3, c: 5 }, // Phonetic abbreviation for MC
  "em see": { s: 3, c: 5 }, // Phonetic abbreviation for MC
  "madarjaad": { s: 5, c: 5 }, // Motherfucker's kind (variant)
  "madarzaat": { s: 5, c: 5 }, // Motherfucker's kind (variant)
  "madarjatt": { s: 5, c: 5 }, // Motherfucker's kind (variant)
  "madarchom": { s: 5, c: 5 }, // Slang/Typo for madarchod
  "teri maa chod": { s: 3, c: 5 }, // Compound: fuck your mother
  "teri ma ki chut": { s: 4, c: 4 }, // Compound: your mother's vagina

  // --- Variations of 'Chutiya' ---
  "chutiyaa": { s: 1, c: 4 }, // Idiot (variant)
  "chutiye": { s: 1, c: 4 }, // Idiot (vocative)
  "chuthiya": { s: 1, c: 4 }, // Idiot (variant)
  "chutya": { s: 1, c: 4 }, // Idiot (variant)
  "chutiyaap": { s: 3, c: 4 }, // Idiocy (variant)
  "chutiyap": { s: 3, c: 4 }, // Idiocy (variant)
  "chutyapa": { s: 3, c: 4 }, // Idiocy (variant)
  "chutiyapaa": { s: 3, c: 4 }, // Idiocy (variant)
  "chutiyapanti": { s: 1, c: 4 }, // Idiocy / Foolish behavior
  "chutiyapnatee": { s: 3, c: 4 }, // Idiocy (variant)
  "chootiya": { s: 1, c: 4 }, // Idiot (variant)
  "chootya": { s: 1, c: 4 }, // Idiot (variant)
  "chootiye": { s: 1, c: 4 }, // Idiot (vocative variant)
  "chootiyapa": { s: 3, c: 4 }, // Idiocy (variant)
  "chut": { s: 4, c: 4 }, // Vagina (extremely vulgar)
  "choot": { s: 4, c: 4 }, // Vagina (variant)
  "chuchiya": { s: 3, c: 4 }, // Mishearing/variation of chutiya
  "chodu ram": { s: 3, c: 5 }, // Mocking name (fucker)
  "chutmarike": { s: 4, c: 4 }, // Vulgar insult, lit. born of vagina
  "chut ke": { s: 4, c: 4 }, // Your vagina's... (implying offspring)
  "maha chutiya": { s: 1, c: 4 }, // Great idiot
  "ek number ka chutiya": { s: 1, c: 4 }, // Number one idiot
  "asli chutiya": { s: 1, c: 4 }, // Real idiot

  // --- Variations of 'Gandu' / 'Gaand' ---
  "gandu lal": { s: 3, c: 4 }, // Mocking name (asshole)
  "gandul": { s: 3, c: 4 }, // Asshole (variant)
  "ganduu": { s: 3, c: 4 }, // Asshole (variant)
  "gand": { s: 3, c: 4 }, // Ass (vulgar)
  "gaand": { s: 3, c: 4 }, // Ass (vulgar)
  "g@ndu": { s: 3, c: 5 }, // Asshole (leetspeak variant)
  "g@nd": { s: 3, c: 5 }, // Ass (leetspeak variant)
  "gaandfat": { s: 3, c: 4 }, // Scared (lit. ass ripped)
  "gandfattu": { s: 1, c: 4 }, // Coward (lit. ass-ripper)
  "gaand mara": { s: 3, c: 4 }, // Get your ass f***ed
  "gaand marwa": { s: 3, c: 4 }, // Get your ass f***ed
  "gaandmasti": { s: 1, c: 4 }, // Fooling around (can be offensive)
  "gandu giri": { s: 3, c: 4 }, // Asshole behavior
  "gaandu giri": { s: 3, c: 4 }, // Asshole behavior (variant)
  "gandu augmentation": { s: 3, c: 4 }, // Nonsense phrase sometimes used humorously/insultingly
  "gandfaad": { s: 3, c: 4 }, // Ass-ripping (intense action/insult)
  "gandu bachcha": { s: 3, c: 4 }, // Asshole kid
  "teri gaand mein": { s: 3, c: 4 }, // In your ass... (common start to insults)

  // --- Variations of 'Lund' / 'Lauda' ---
  "laund": { s: 4, c: 4 }, // Penis (variant)
  "lawda": { s: 4, c: 4 }, // Penis (variant)
  "lora": { s: 4, c: 4 }, // Penis (variant)
  "laura": { s: 3, c: 4 }, // Penis (variant)
  "lulla": { s: 4, c: 4 }, // Slang/childish for penis
  "lund choos": { s: 4, c: 4 }, // Dick sucker
  "lund fakir": { s: 4, c: 4 }, // Useless person (lit. dick beggar)
  "lund hilana": { s: 4, c: 4 }, // Masturbate
  "lund ka baal": { s: 3, c: 4 }, // Pubic hair (implying worthless)
  "lundtopi": { s: 4, c: 4 }, // Glans penis (used insultingly)
  "laude": { s: 3, c: 4 }, // Vocative form of lauda
  "laude lag gaye": { s: 3, c: 4 }, // Things got f***ed up
  "lauda lasan": { s: 3, c: 4 }, // Nonsense rhyming insult
  "mere lund se": { s: 4, c: 4 }, // From my dick (expressing indifference/contempt)

  // --- Variations of 'Bhosda' / 'Bhosdike' ---
  "bhosda": { s: 4, c: 4 }, // Vagina (extremely vulgar)
  "bhosada": { s: 4, c: 4 }, // Vagina (variant)
  "bhosra": { s: 4, c: 4 }, // Vagina (variant)
  "bhosrika": { s: 4, c: 4 }, // Vagina (variant)
  "bhosarike": { s: 4, c: 4 }, // Born of a vagina (insult)
  "bhosdike": { s: 3, c: 4 }, // Born of a vagina (extremely vulgar insult)
  "bhoshdike": { s: 4, c: 4 }, // Born of a vagina (variant)
  "bhosdi ke": { s: 4, c: 4 }, // Born of a vagina (variant)
  "bhosdiwala": { s: 4, c: 4 }, // Vagina person (insult)
  "bhosdiwale": { s: 4, c: 4 }, // Vagina people (insult)
  "bhosdiwaale": { s: 4, c: 4 }, // Vagina people (variant)
  "bhosadchod": { s: 4, c: 4 }, // Vagina f***er
  "bhosad": { s: 3, c: 4 }, // Shortened form of bhosda
  "teri maa ka bhosda": { s: 4, c: 4 }, // Your mother's vagina (extreme insult)

  // --- Variations of 'Randi' ---
  "randvi": { s: 3, c: 4 }, // Male equivalent (insulting)
  "randwe": { s: 3, c: 4 }, // Male equivalent (insulting)
  "randibaaz": { s: 3, c: 4 }, // Womanizer / Brothel-goer
  "randibaazi": { s: 3, c: 4 }, // Womanizing / Brothel-going
  "randibaj": { s: 3, c: 4 }, // Womanizer (variant)
  "randi ka": { s: 5, c: 4 }, // Implying son of a prostitute
  "randi ki aulad": { s: 5, c: 4 }, // Offspring of a prostitute
  "randi khana": { s: 3, c: 4 }, // Brothel (used insultingly)
  "chakke": { s: 3, c: 4 }, // Eunuch/trans (often used with randi)
  "gashti": { s: 5, c: 4 }, // Prostitute (Urdu/Punjabi influence)
  "patur": { s: 5, c: 4 }, // Prostitute (regional)
  "beswa": { s: 5, c: 4 }, // Prostitute

  // --- Variations of 'Harami' / 'Haramzada' ---
  "haraami": { s: 3, c: 4 }, // Bastard (variant)
  "harami pilla": { s: 3, c: 4 }, // Bastard puppy
  "haramipana": { s: 3, c: 4 }, // Act of being a harami
  "haramzade": { s: 3, c: 4 }, // Bastards (plural)
  "haramzadeh": { s: 3, c: 4 }, // Bastard (variant)
  "haram zaada": { s: 3, c: 5 }, // Bastard (spaced variant)
  "haramjada": { s: 3, c: 4 }, // Bastard (variant)
  "haramjaade": { s: 3, c: 4 }, // Bastards (variant)
  "haramkhor": { s: 3, c: 4 }, // One who eats forbidden things (freeloader)
  "haraamkhor": { s: 3, c: 4 }, // Freeloader (variant)
  "haram ka": { s: 3, c: 4 }, // Illegitimate / forbidden
  "haram ka pilla": { s: 3, c: 4 }, // Illegitimate puppy

  // --- Variations of 'Kamina' ---
  "kameena": { s: 3, c: 4 }, // Scoundrel (variant)
  "kaminay": { s: 3, c: 4 }, // Scoundrels (variant)
  "kaminey": { s: 3, c: 4 }, // Scoundrels (variant)
  "kaminapan": { s: 3, c: 4 }, // Scoundrel behavior
  "kaminpana": { s: 3, c: 4 }, // Scoundrel behavior (variant)
  "kamini": { s: 3, c: 4 }, // Female scoundrel

  // --- Variations of 'Kutta' ---
  "kutte kamine": { s: 3, c: 4 }, // Compound insult: dogs and scoundrels
  "kutti": { s: 3, c: 4 }, // Bitch (derogatory female)
  "kutiya": { s: 3, c: 4 }, // Bitch (derogatory female)
  "kutya": { s: 3, c: 4 }, // Bitch (variant)
  "kuttiya": { s: 3, c: 4 }, // Bitch (variant)
  "kutri": { s: 3, c: 4 }, // Bitch (regional variant)
  "kutte ki maut": { s: 5, c: 5 }, // Dog's death (miserable death)
  "kutte ka pilla": { s: 3, c: 4 }, // Puppy (insult)
  "gali ka kutta": { s: 3, c: 4 }, // Street dog (worthless)
  "kutte ki aulad": { s: 3, c: 4 }, // Offspring of a dog

  // --- Variations of 'Saala' ---
  "saale": { s: 3, c: 4 }, // Brother-in-law (insult variant)
  "saaley": { s: 3, c: 4 }, // Brother-in-law (insult variant)
  "sala kutta": { s: 3, c: 4 }, // Bastard dog (compound)
  "sala harami": { s: 3, c: 4 }, // Bastard (compound)
  "saale chutiye": { s: 3, c: 4 }, // Bastard idiot (compound)

  // --- Variations of 'Chod' / 'Chodu' ---
  "chodd": { s: 3, c: 5 }, // Fuck (variant)
  "chhod": { s: 3, c: 4 }, // Sometimes used for 'leave', but context is key
  "chodumal": { s: 3, c: 5 }, // Mocking name (fucker)
  "choduram": { s: 3, c: 5 }, // Mocking name (fucker)
  "chhodu": { s: 3, c: 5 }, // Fucker (variant)
  "chud": { s: 3, c: 4 }, // Act of f***ing / getting f***ed
  "chudai": { s: 3, c: 4 }, // The act of f***ing
  "chudwa": { s: 3, c: 4 }, // Get f***ed
  "chudakkad": { s: 3, c: 4 }, // Someone obsessed with sex
  "chudasi": { s: 3, c: 4 }, // Horny (female - vulgar)
  "chudasa": { s: 3, c: 4 }, // Horny (male - vulgar)
  "chudwana": { s: 3, c: 4 }, // Get someone f***ed
  "chudwaana": { s: 3, c: 4 }, // Get someone f***ed (variant)
  "chudwaya": { s: 3, c: 4 }, // Got someone f***ed
  "chodne": { s: 3, c: 4 }, // To f***

  // --- Variations of 'Bakchod' / 'Bakchodi' ---
  "bakchodd": { s: 3, c: 5 }, // Bullshitter (variant)
  "bakchodi": { s: 3, c: 5 }, // Bullshitting
  "bakchodiya": { s: 3, c: 5 }, // Bullshitter (variant)
  "bakchodhi": { s: 3, c: 5 }, // Bullshitting (variant)
  "bakchodi pelna": { s: 3, c: 5 }, // To bullshit
  "bakait": { s: 3, c: 5 }, // Braggart/Bullshitter
  "bakwaas": { s: 3, c: 4 }, // Nonsense (less profane but used insultingly)

  // --- Bodily Functions / Parts (Vulgar) ---
  "jhaant": { s: 3, c: 4 }, // Pubic hair
  "jhaat": { s: 3, c: 4 }, // Pubic hair
  "jhant": { s: 3, c: 4 }, // Pubic hair (variant)
  "jhantu": { s: 3, c: 4 }, // Pubic-haired (insult)
  "jhatu": { s: 3, c: 4 }, // Pubic-haired (insult)
  "jantoo": { s: 3, c: 4 }, // Pubic-haired (variant)
  "jhaat barabar": { s: 3, c: 4 }, // Worthless as pubic hair
  "jhaat ka baal": { s: 3, c: 4 }, // Pubic hair
  "tatte": { s: 4, c: 4 }, // Testicles
  "tatta": { s: 4, c: 4 }, // Testicle
  "tatti": { s: 3, c: 5 }, // Shit / Feces
  "tati": { s: 3, c: 5 }, // Shit (variant)
  "tat": { s: 4, c: 5 }, // Testicles/Shit (shortened)
  "tatti khana": { s: 3, c: 5 }, // Eat shit
  "tatti surat": { s: 3, c: 5 }, // Shitty face
  "goo": { s: 3, c: 5 }, // Dung/shit
  "goobar": { s: 3, c: 5 }, // Dung/shit (variant of gobar)
  "mut": { s: 3, c: 4 }, // Piss/Urine
  "moot": { s: 3, c: 4 }, // Piss/Urine (variant)
  "mutra": { s: 3, c: 4 }, // Urine (formal)
  "mutna": { s: 3, c: 4 }, // To piss
  "peshab": { s: 3, c: 4 }, // Urine (less vulgar but can be used insultingly)
  "muth": { s: 4, c: 4 }, // Masturbation
  "mutthi": { s: 4, c: 4 }, // Fist / Masturbation
  "muthal": { s: 4, c: 4 }, // Someone who masturbates (insult)
  "hastmaithun": { s: 4, c: 4 }, // Masturbation (formal, rarely used as insult)

  // --- Slurs & Related Insults ---
  "hijra": { s: 5, c: 4 }, // Transgender/Eunuch (derogatory)
  "hijda": { s: 5, c: 4 }, // Transgender/Eunuch (derogatory variant)
  "hijraa": { s: 5, c: 4 }, // Transgender/Eunuch (derogatory variant)
  "hizra": { s: 5, c: 4 }, // Transgender/Eunuch (derogatory variant)
  "hijjra": { s: 5, c: 4 }, // Transgender/Eunuch (derogatory variant)
  "chakka": { s: 5, c: 4 }, // Transgender/Eunuch (derogatory)
  "chhakka": { s: 5, c: 4 }, // Transgender/Eunuch (derogatory variant)
  "chaka": { s: 5, c: 4 }, // Transgender/Eunuch (derogatory variant)
  "namard": { s: 5, c: 4 }, // Impotent / Unmanly
  "naamard": { s: 5, c: 4 }, // Impotent (variant)
  "namardangi": { s: 5, c: 4 }, // Impotence
  "napunsak": { s: 5, c: 4 }, // Impotent (formal)
  "napunsakta": { s: 5, c: 4 }, // Impotence
  "khusra": { s: 5, c: 4 }, // Eunuch/Transgender (derogatory)
  "khassi": { s: 5, c: 4 }, // Castrated (animal, used insultingly for humans)
  "launda": { s: 5, c: 4 }, // Boy (can be used derogatorily, implying effeminate or young lover)
  "laundiya": { s: 5, c: 4 }, // Girl (can be used derogatorily)
  "laundebaaz": { s: 5, c: 4 }, // Sodomite / Boy-lover (offensive)

  // --- General Insults & Offensive Terms ---
  "bhadwa": { s: 1, c: 4 }, // Pimp (highly offensive)
  "bhadwe": { s: 1, c: 4 }, // Pimp (plural/vocative)
  "bharwa": { s: 1, c: 4 }, // Pimp (variant)
  "bhadua": { s: 1, c: 4 }, // Pimp (variant)
  "bhadva": { s: 1, c: 4 }, // Pimp (variant)
  "dalal": { s: 1, c: 4 }, // Broker, pimp (insult)
  "dalla": { s: 1, c: 4 }, // Pimp (variant)
  "dalaal": { s: 1, c: 4 }, // Pimp (variant)
  "besharam": { s: 1, c: 4 }, // Shameless
  "besharm": { s: 1, c: 4 }, // Shameless (variant)
  "besaram": { s: 1, c: 4 }, // Shameless (variant)
  "besharmi": { s: 1, c: 4 }, // Shamelessness
  "behaya": { s: 1, c: 4 }, // Shameless
  "behayaa": { s: 1, c: 4 }, // Shameless (variant)
  "behayaai": { s: 1, c: 4 }, // Shamelessness
  "neech": { s: 1, c: 4 }, // Low-life, despicable person
  "nich": { s: 1, c: 4 }, // Low-life (variant)
  "neech admi": { s: 1, c: 4 }, // Low-life person
  "paaji": { s: 1, c: 4 }, // Mean, low (Punjabi influence)
  "paji": { s: 1, c: 4 }, // Mean, low (variant)
  "pajji": { s: 1, c: 4 }, // Mean, low (variant)
  "badmaash": { s: 1, c: 4 }, // Bad character, hooligan
  "badmash": { s: 1, c: 4 }, // Hooligan (variant)
  "badmashi": { s: 1, c: 4 }, // Hooliganism
  "luchha": { s: 1, c: 4 }, // Lewd, debauched person
  "lucha": { s: 1, c: 4 }, // Lewd person (variant)
  "luchchai": { s: 1, c: 4 }, // Lewdness
  "lafanga": { s: 1, c: 4 }, // Loafer, rogue
  "lafange": { s: 1, c: 4 }, // Loafers, rogues (plural)
  "lafangey": { s: 1, c: 4 }, // Loafers, rogues (variant)
  "lafantar": { s: 1, c: 4 }, // Loafer (variant)
  "awaara": { s: 1, c: 4 }, // Vagrant, loafer
  "gadha": { s: 1, c: 4 }, // Donkey (insult for stupid)
  "gadhe": { s: 1, c: 4 }, // Donkeys (plural insult)
  "gadhi": { s: 1, c: 4 }, // Female donkey (insult)
  "ullu": { s: 1, c: 4 }, // Owl (stupid)
  "ullu ka pattha": { s: 1, c: 4 }, // Son of an owl (insult for stupid)
  "ullu ki patthi": { s: 1, c: 4 }, // Daughter of an owl
  "bandar": { s: 1, c: 4 }, // Monkey
  "suar": { s: 1, c: 4 }, // Pig (insult)
  "suwar": { s: 1, c: 4 }, // Pig (variant)
  "soar": { s: 1, c: 4 }, // Pig (variant)
  "suar ki aulad": { s: 1, c: 4 }, // Offspring of a pig
  "janwar": { s: 5, c: 5 }, // Animal (dehumanizing)
  "shaitan": { s: 1, c: 4 }, // Devil
  "rakshas": { s: 1, c: 4 }, // Demon
  "chichora": { s: 1, c: 4 }, // Petty, shallow
  "charsi": { s: 1, c: 4 }, // Drug addict (hashish)
  "ganjedi": { s: 1, c: 4 }, // Drug addict (marijuana)
  "bewakoof": { s: 1, c: 4 }, // Idiot (common, less profane)
  "bevakoof": { s: 1, c: 4 }, // Idiot (variant)
  "bewaqoof": { s: 1, c: 4 }, // Idiot (variant)
  "murkh": { s: 1, c: 4 }, // Fool (formal)
  "paagal": { s: 1, c: 4 }, // Mad, crazy
  "pagal": { s: 1, c: 4 }, // Mad, crazy (variant)
  "pagla": { s: 1, c: 4 }, // Mad person (male)
  "pagli": { s: 1, c: 4 }, // Mad person (female)
  "dekh lunga": { s: 5, c: 5 }, // I'll see you / I'll deal with you (threat)
  "aukat": { s: 3, c: 4 }, // Status / standing (used in challenges: "teri aukat kya hai?")
  "aukaat": { s: 1, c: 4 }, // Status (variant spelling)
  "chapri": { s: 3, c: 4 }, // Low-class, tacky (modern slang insult)
  "nibba": { s: 1, c: 3 }, // Immature online person (modern slang)
  "nibbi": { s: 1, c: 3 }, // Immature online person, female (modern slang)
  "dhakkan": { s: 1, c: 4 }, // Lid (stupid)
  "paltu": { s: 1, c: 4 }, // Turncoat
  "chamcha": { s: 1, c: 4 }, // Sycophant
  "bhikari": { s: 1, c: 4 }, // Beggar
  "kanjoos": { s: 1, c: 4 }, // Miser
  "makhi choos": { s: 1, c: 4 }, // Extreme miser (lit. sucks flies)
  "phattu": { s: 1, c: 4 }, // Scaredy-cat
  "darpok": { s: 1, c: 4 }, // Coward
  "kayar": { s: 1, c: 4 }, // Coward
  "ghatiya": { s: 1, c: 4 }, // Low quality, despicable
  "khota": { s: 1, c: 4 }, // Donkey / Fake (coin)
  "haram ka khana": { s: 1, c: 4 }, // Eating illegitimate earnings
  "muh kala karna": { s: 1, c: 4 }, // Blacken face (bring shame)
  "izzat lutna": { s: 5, c: 5 }, // Rob honor (rape/molestation)
  "phitte muh": { s: 1, c: 4 }, // Shame on you (Punjabi)
  "dur fitte muh": { s: 1, c: 4 }, // Stronger version of above
  "mar ja": { s: 5, c: 5 }, // Go die
  "khudkushi kar le": { s: 5, c: 5 }, // Commit suicide (extremely harsh)
  "joota maru": { s: 1, c: 4 }, // I'll hit you with a shoe
  "joota": { s: 1, c: 4 }, // Shoe (implying worthlessness)
  "nalayak": { s: 1, c: 4 }, // Worthless, undeserving
  "nikamma": { s: 1, c: 4 }, // Useless
  "kamchor": { s: 1, c: 4 }, // Shirker
  "gawar": { s: 1, c: 4 }, // Rustic, uncivilized
  "jungli": { s: 1, c: 4 }, // Wild, uncivilized

  // --- Compound Insults & Phrases ---
  "madarchod gandu": { s: 5, c: 5 }, // Motherfucker asshole
  "gandu madarchod": { s: 5, c: 5 }, // Asshole motherfucker
  "behenchod chutiya": { s: 1, c: 4 }, // Sister fucker idiot
  "chutiya behenchod": { s: 1, c: 4 }, // Idiot sister fucker
  "saala kutta kamina": { s: 3, c: 4 }, // Bastard dog scoundrel
  "harami kutta": { s: 3, c: 4 }, // Bastard dog
  "kaminey suar": { s: 1, c: 4 }, // Scoundrel pig
  "randi ki beti": { s: 5, c: 4 }, // Daughter of a prostitute
  "bhadwe ki aulad": { s: 1, c: 4 }, // Offspring of a pimp
  "bhosdi ke kutte": { s: 4, c: 4 }, // Dog born of a vagina
  "lund fakir chutiya": { s: 1, c: 4 }, // Dick beggar idiot
  "chutiya sala": { s: 3, c: 4 }, // Idiot bastard
  "gandu sala": { s: 3, c: 4 }, // Asshole bastard
  "abe saale": { s: 3, c: 4 }, // Hey bastard
  "oye harami": { s: 3, c: 4 }, // Hey bastard
  "chal be chutiye": { s: 1, c: 4 }, // Get moving, idiot
  "nikal laude": { s: 4, c: 4 }, // Get lost, dick
  "teri maa ka yaar": { s: 1, c: 4 }, // Your mother's lover
  "teri behen ka yaar": { s: 1, c: 4 }, // Your sister's lover
  "baap ka maal": { s: 1, c: 4 }, // Father's property (objectifying women)
  "gandi naali ke keede": { s: 1, c: 4 }, // Worm from a dirty drain
  "tere baap ka naukar": { s: 1, c: 4 }, // Your father's servant? (challenging)
  "khandan pe mat ja": { s: 1, c: 4 }, // Don't involve my family
  "behen ke lode": { s: 4, c: 4 }, // Sister's dick (highly offensive)
  "teri maa ki": { s: 4, c: 4 }, // Your mother's... (start of a common insult, often implies '...vagina')

  // --- More Obscure/Regional/Figurative ---
  "chutiya sala gandu": { s: 3, c: 4 }, // Triple combo: idiot bastard asshole
  "bhen ke takke": { s: 3, c: 4 }, // Sister's ... (similar to lode, very offensive)
  "khatey": { s: 4, c: 4 }, // Testicles (regional slang)
  "pataka": { s: 3, c: 4 }, // Firecracker (sometimes used for attractive woman, can be objectifying/vulgar)
  "maal": { s: 3, c: 4 }, // Goods/Stuff (objectifying term for women)
  "item": { s: 3, c: 4 }, // Item (objectifying term for women)
  "topibaaz": { s: 3, c: 4 }, // Deceiver, trickster (lit. hat-wearer)
  "dhongi": { s: 3, c: 4 }, // Hypocrite, imposter
  "pakhandi": { s: 3, c: 4 }, // Hypocrite
  "ghoos khor": { s: 3, c: 4 }, // Bribe taker
  "char sau bees": { s: 3, c: 4 }, // 420 (IPC section for cheating, used for cheater)
  "dedh shana": { s: 3, c: 4 }, // Over-smart (lit. one and a half clever)
  "bitodi": { s: 3, c: 4 }, // Woman (derogatory, regional)
  "chidimar": { s: 3, c: 4 }, // Bird catcher (implying low status/predatory)
  "natak karna": { s: 3, c: 5 }, // To act/pretend (used like 'stop bullshitting')
  "raand": { s: 3, c: 4 }, // Widow (can be used extremely derogatorily, similar to Randi in some contexts)


  // ========================================
  // === Expanded List (Devanagari Script) ===
  // ========================================
  "बहनचोद": { s: 3, c: 5 }, // Sister fucker
  "भैनचोद": { s: 3, c: 5 }, // Sister fucker (variant)
  "भेनचोड": { s: 3, c: 5 }, // Sister fucker (variant)
  "बहेनचोद": { s: 3, c: 5 }, // Sister fucker (variant)
  "बी सी": { s: 3, c: 4 }, // BC (abbreviation for behenchod)
  "बकलोल": { s: 3, c: 4 }, // Related insult sometimes abbreviated as BKL
  "मादर चोद": { s: 5, c: 5 }, // Motherfucker (spaced)
  "मादरचूड": { s: 5, c: 5 }, // Motherfucker (variant)
  "मदरचोद": { s: 5, c: 5 }, // Motherfucker (variant)
  "माचोद": { s: 5, c: 5 }, // Motherfucker (shortened)
  "मादरजात": { s: 5, c: 5 }, // Motherfucker's kind
  "तेरी माँ चोद": { s: 3, c: 5 }, // Fuck your mother
  "तेरी माँ की चूत": { s: 4, c: 4 }, // Your mother's vagina
  "एम् सी": { s: 5, c: 5 }, // MC (phonetic abbreviation for madarchod)
  "चूतिये": { s: 1, c: 4 }, // Idiot (vocative)
  "चूतियापा": { s: 3, c: 4 }, // Idiocy
  "चूतियापंती": { s: 1, c: 4 }, // Foolish behavior
  "चूत": { s: 4, c: 4 }, // Vagina (extremely vulgar)
  "चूचीया": { s: 1, c: 4 }, // Idiot (mishearing variant)
  "चूतड़": { s: 1, c: 4 }, // Buttocks, sometimes used like idiot
  "चूतर": { s: 3, c: 4 }, // Buttocks
  "चूत मारीके": { s: 4, c: 4 }, // Born of a vagina (insult)
  "महा चूतिया": { s: 1, c: 4 }, // Great idiot
  "असली चूतिया": { s: 1, c: 4 }, // Real idiot
  "गांड": { s: 3, c: 4 }, // Ass (vulgar)
  "गांद": { s: 3, c: 4 }, // Ass (variant)
  "गंड": { s: 3, c: 4 }, // Ass (variant)
  "गांडफत": { s: 3, c: 4 }, // Scared (lit. ass ripped)
  "गांडू गिरी": { s: 3, c: 4 }, // Asshole behavior
  "गांड मरा": { s: 3, c: 5 }, // Get your ass fucked
  "गांड मरवा": { s: 3, c: 5 }, // Get your ass fucked
  "तेरी गांड में": { s: 3, c: 4 }, // In your ass
  "लोड़ा": { s: 4, c: 4 }, // Penis (variant)
  "लवड़ा": { s: 4, c: 4 }, // Penis (variant)
  "लंड चूस": { s: 4, c: 4 }, // Dick sucker
  "लंड का बाल": { s: 3, c: 4 }, // Pubic hair (implying worthless)
  "लौड़े": { s: 4, c: 4 }, // Dicks (vocative)
  "मेरे लंड से": { s: 4, c: 4 }, // From my dick (expressing contempt)
  "भोसड़ा": { s: 4, c: 4 }, // Vagina (extremely vulgar)
  "भोसड़ीके": { s: 4, c: 4 }, // Born of a vagina (extreme insult)
  "भोसडीके": { s: 4, c: 4 }, // Born of a vagina (variant)
  "भोस्डिके": { s: 4, c: 4 }, // Born of a vagina (variant)
  "भोसड़ी वाला": { s: 4, c: 4 }, // Vagina person (insult)
  "भोसड़ी वाले": { s: 4, c: 4 }, // Vagina people (insult)
  "तेरी माँ का भोसड़ा": { s: 4, c: 4 }, // Your mother's vagina (extreme insult)
  "रंडीबाज़": { s: 3, c: 4 }, // Womanizer
  "रंडी की औलाद": { s: 5, c: 4 }, // Offspring of a prostitute
  "रंडीखाना": { s: 3, c: 4 }, // Brothel
  "गश्ती": { s: 5, c: 4 }, // Prostitute (Urdu/Punjabi)
  "बेसवा": { s: 5, c: 4 }, // Prostitute
  "हरामीपना": { s: 3, c: 4 }, // Act of being a bastard
  "हरामज़ादे": { s: 3, c: 4 }, // Bastards (plural)
  "हरामखोर": { s: 3, c: 4 }, // Freeloader (eats forbidden things)
  "हराम का": { s: 3, c: 4 }, // Illegitimate / Forbidden
  "कमीने": { s: 3, c: 4 }, // Scoundrels (plural)
  "कमीनी": { s: 3, c: 4 }, // Female scoundrel
  "कमीनापन": { s: 3, c: 4 }, // Scoundrel behavior
  "कुत्ती": { s: 3, c: 4 }, // Bitch
  "कुतिया": { s: 3, c: 4 }, // Bitch (variant)
  "कुत्ते की मौत": { s: 5, c: 5 }, // Dog's death (miserable death)
  "कुत्ते का पिल्ला": { s: 3, c: 4 }, // Puppy (insult)
  "गली का कुत्ता": { s: 3, c: 4 }, // Street dog (worthless)
  "कुत्ते की औलाद": { s: 3, c: 4 }, // Offspring of a dog
  "साले": { s: 3, c: 4 }, // Bastards (plural insult)
  "साले कुत्ते": { s: 3, c: 4 }, // Bastard dogs (compound)
  "छोड़": { s: 3, c: 5 }, // Leave / Fuck (context-dependent)
  "चोदू": { s: 1, c: 4 }, // Fucker / Idiot
  "चुदक्कड़": { s: 3, c: 4 }, // Sex-obsessed person
  "चुदाई": { s: 3, c: 5 }, // The act of fucking
  "चुदवाना": { s: 3, c: 5 }, // Get someone fucked
  "चोदने": { s: 3, c: 5 }, // To fuck
  "बकचोदी": { s: 3, c: 5 }, // Bullshitting
  "बकैत": { s: 3, c: 5 }, // Braggart / Bullshitter
  "बकवास": { s: 3, c: 4 }, // Nonsense
  "झांट": { s: 3, c: 4 }, // Pubic hair
  "झाँट": { s: 3, c: 4 }, // Pubic hair (variant)
  "झाटू": { s: 3, c: 4 }, // Pubic-haired (insult)
  "झाँटू": { s: 3, c: 4 }, // Pubic-haired (variant)
  "टट्टे": { s: 4, c: 4 }, // Testicles
  "टट्टी": { s: 3, c: 5 }, // Shit / Feces
  "गू": { s: 3, c: 5 }, // Shit / Dung
  "गोबर": { s: 3, c: 5 }, // Cow dung / Shit
  "मूत": { s: 3, c: 4 }, // Piss / Urine
  "मूत्र": { s: 3, c: 4 }, // Urine (formal)
  "पेशाब": { s: 3, c: 4 }, // Urine
  "मूठ": { s: 4, c: 4 }, // Masturbation
  "मुठ्ठी": { s: 4, c: 4 }, // Fist / Masturbation
  "मुठल": { s: 4, c: 4 }, // Masturbator (insult)
  "हस्तमैथुन": { s: 4, c: 4 }, // Masturbation (formal)
  "हिजड़ा": { s: 3, c: 4 }, // Transgender/Eunuch (derogatory)
  "छक्का": { s: 3, c: 4 }, // Transgender/Eunuch (derogatory)
  "नामर्द": { s: 3, c: 4 }, // Impotent / Unmanly
  "नपुंसक": { s: 3, c: 4 }, // Impotent (formal)
  "खुसरा": { s: 3, c: 4 }, // Eunuch/Transgender (derogatory)
  "खस्सी": { s: 3, c: 4 }, // Castrated (derogatory)
  "लौंडा": { s: 3, c: 4 }, // Boy (derogatory, implying effeminate)
  "लौंडिया": { s: 3, c: 4 }, // Girl (derogatory)
  "लौंडेबाज़": { s: 3, c: 4 }, // Sodomite / Boy-lover (offensive)
  "भरवा": { s: 3, c: 4 }, // Pimp (variant)
  "दलाल": { s: 3, c: 4 }, // Pimp / Broker (insult)
  "दल्ला": { s: 3, c: 4 }, // Pimp (variant)
  "बेशर्म": { s: 3, c: 4 }, // Shameless
  "बेशर्मी": { s: 3, c: 4 }, // Shamelessness
  "बेहया": { s: 3, c: 4 }, // Shameless
  "नीच": { s: 3, c: 4 }, // Low-life, despicable
  "पाजी": { s: 3, c: 4 }, // Mean, low (Punjabi)
  "बदमाश": { s: 3, c: 4 }, // Hooligan
  "बदमाशी": { s: 3, c: 4 }, // Hooliganism
  "लुच्चा": { s: 3, c: 4 }, // Lewd, debauched person
  "लफंगा": { s: 3, c: 4 }, // Loafer, rogue
  "आवारा": { s: 3, c: 4 }, // Vagrant, loafer
  "गधा": { s: 1, c: 4 }, // Donkey (stupid)
  "गधी": { s: 1, c: 4 }, // Female donkey (stupid)
  "उल्लू": { s: 1, c: 4 }, // Owl (stupid)
  "उल्लू का पट्ठा": { s: 1, c: 4 }, // Son of an owl (stupid)
  "बंदर": { s: 3, c: 4 }, // Monkey
  "सूअर": { s: 3, c: 4 }, // Pig (insult)
  "सुअर": { s: 3, c: 4 }, // Pig (variant)
  "सूअर की औलाद": { s: 3, c: 4 }, // Offspring of a pig
  "जानवर": { s: 5, c: 5 }, // Animal (dehumanizing)
  "शैतान": { s: 3, c: 4 }, // Devil
  "राक्षस": { s: 3, c: 4 }, // Demon
  "चिचोरा": { s: 3, c: 4 }, // Petty, shallow
  "चर्सी": { s: 3, c: 4 }, // Drug addict (hashish)
  "गंजेड़ी": { s: 3, c: 4 }, // Drug addict (marijuana)
  "बेवकूफ": { s: 1, c: 4 }, // Idiot
  "मूर्ख": { s: 1, c: 4 }, // Fool (formal)
  "पागल": { s: 3, c: 4 }, // Mad, crazy
  "पगला": { s: 3, c: 4 }, // Mad person (male)
  "पगली": { s: 3, c: 4 }, // Mad person (female)
  "देख लूँगा": { s: 5, c: 5 }, // I'll deal with you (threat)
  "औकात": { s: 3, c: 4 }, // Status (used in challenges)
  "ढक्कन": { s: 1, c: 4 }, // Lid (stupid)
  "पलटू": { s: 3, c: 4 }, // Turncoat
  "चमचा": { s: 3, c: 4 }, // Sycophant
  "भिखारी": { s: 3, c: 4 }, // Beggar
  "कंजूस": { s: 3, c: 4 }, // Miser
  "मक्खीचूस": { s: 3, c: 4 }, // Extreme miser (lit. fly-sucker)
  "फट्टू": { s: 3, c: 4 }, // Scaredy-cat
  "डरपोक": { s: 1, c: 4 }, // Coward
  "कायर": { s: 1, c: 4 }, // Coward
  "घटिया": { s: 3, c: 4 }, // Low quality, despicable
  "खोटा": { s: 3, c: 4 }, // Fake / Donkey
  "नालायक": { s: 3, c: 4 }, // Worthless, undeserving
  "निकम्मा": { s: 3, c: 4 }, // Useless
  "कामचोर": { s: 3, c: 4 }, // Shirker
  "गंवार": { s: 3, c: 4 }, // Rustic, uncivilized
  "जंगली": { s: 3, c: 4 }, // Wild, uncivilized
  "फिट्टे मुह": { s: 3, c: 4 }, // Shame on you (Punjabi)
  "मर जा": { s: 5, c: 5 }, // Go die
  "जूता मारूं": { s: 3, c: 4 }, // I'll hit you with a shoe
  "मादरचोद गांडू": { s: 5, c: 5 }, // Motherfucker asshole
  "बहनचोद चूतिया": { s: 1, c: 4 }, // Sister fucker idiot
  "साला कुत्ता कमीना": { s: 3, c: 4 }, // Bastard dog scoundrel
  "हरामी कुत्ता": { s: 3, c: 4 }, // Bastard dog
  "कमीने सूअर": { s: 3, c: 4 }, // Scoundrel pig
  "रंडी की बेटी": { s: 5, c: 4 }, // Daughter of a prostitute
  "भड़वे की औलाद": { s: 3, c: 4 }, // Offspring of a pimp
  "भोसड़ी के कुत्ते": { s: 4, c: 4 }, // Dog born of a vagina
  "चूतिया साला": { s: 3, c: 4 }, // Idiot bastard
  "अबे साले": { s: 3, c: 4 }, // Hey bastard
  "निकल लौड़े": { s: 4, c: 4 }, // Get lost, dick
  "तेरी माँ का यार": { s: 3, c: 4 }, // Your mother's lover
  "तेरी बहन का यार": { s: 3, c: 4 }, // Your sister's lover
  "गंदी नाली के कीड़े": { s: 3, c: 4 }, // Worm from a dirty drain
  "तेरे बाप का नौकर": { s: 1, c: 4 }, // Your father's servant? (challenging)
  "बहन के टके": { s: 3, c: 4 }, // Bhen ke takke (sister's... very offensive)
  "खाते": { s: 4, c: 4 }, // Khatey (Testicles - regional)
  "पटाका": { s: 3, c: 4 }, // Pataka (firecracker / attractive woman - objectifying)
  "माल": { s: 3, c: 4 }, // Maal (goods - objectifying term for women)
  "आइटम": { s: 3, c: 4 }, // Item (objectifying term for women)
  "टोपीबाज़": { s: 3, c: 4 }, // Topibaaz (deceiver, trickster)
  "ढोंगी": { s: 3, c: 4 }, // Dhongi (hypocrite, imposter)
  "पाखंडी": { s: 3, c: 4 }, // Pakhandi (hypocrite)
  "घूसखोर": { s: 3, c: 4 }, // Ghooskhor (bribe taker)
  "चार सौ बीस": { s: 3, c: 4 }, // Char sau bees (420 - cheater)
  "डेढ़ शाणा": { s: 3, c: 4 }, // Dedh shana (over-smart)
  "रांड": { s: 3, c: 4 }, // Raand (Widow - derogatory use)
  "तेरी माँ की": { s: 3, c: 4 }, // Teri maa ki... (start of insult)
  "बहन के लोड़े": { s: 4, c: 4 }, // Behen ke lode (Sister's dick - offensive)

  // Additional Hindi profanity
  "bhosdika": { s: 3, c: 4 }, // Variant of bhosdike
  "bsdk": { s: 3, c: 4 }, // Abbreviation: bhosdike
  "chinal": { s: 3, c: 4 }, // Promiscuous woman
  "chinaal": { s: 3, c: 4 }, // Promiscuous woman (variant)
  "chut ka dhakkan": { s: 4, c: 4 }, // Vagina's lid (useless)
  "fuddi": { s: 4, c: 4 }, // Pussy (Punjabi-Hindi)
  "gand fad dunga": { s: 3, c: 4 }, // I'll rip your ass
  "gaand mein danda": { s: 3, c: 4 }, // Stick in your ass
  "jhand": { s: 3, c: 4 }, // Screwed
  "jhandu": { s: 3, c: 4 }, // Pubic-haired (insult)
  "lodu": { s: 4, c: 4 }, // Dick (insult)
  "lodha": { s: 3, c: 4 }, // Variant of lauda
  "mc bc": { s: 3, c: 4 }, // Compound abbreviation
  "rand": { s: 3, c: 4 }, // Variant of randi
  "randi rona": { s: 5, c: 4 }, // Whore crying (whining)
  "tharki": { s: 3, c: 4 }, // Pervert
  "tharak": { s: 3, c: 4 }, // Lust (derogatory)
  "bhad mein ja": { s: 3, c: 4 }, // Go to hell
  "chutad": { s: 3, c: 4 }, // Buttocks (vulgar)
  "ganwar sala": { s: 3, c: 4 }, // Uncivilized bastard
  "lulli": { s: 4, c: 4 }, // Small penis (childish/insulting)
  "teri maa ki chut": { s: 4, c: 4 }, // Your mother's vagina
  "tere muh mein": { s: 3, c: 4 }, // In your mouth (vulgar implied)

  // Devanagari additions
  "बीएसडीके": { s: 3, c: 4 }, // BSDK (abbreviation for bhosdike)
  "छिनाल": { s: 3, c: 4 }, // Chinal (promiscuous woman)
  "फुद्दी": { s: 4, c: 4 }, // Fuddi (pussy - Punjabi-Hindi)
  "झंडू": { s: 3, c: 4 }, // Jhandu (pubic-haired insult)
  "लोडू": { s: 4, c: 4 }, // Lodu (dick insult)
  "एमसी बीसी": { s: 3, c: 4 }, // MC BC (compound abbreviation)
  "ठरकी": { s: 3, c: 4 }, // Tharki (pervert)
  "लुल्ली": { s: 4, c: 4 }, // Lulli (small penis)

  // More Urdu crossover profanity
  "haramzaadi": { s: 3, c: 4 }, // Female bastard
  "kameeni": { s: 3, c: 4 }, // Female scoundrel
  "kameenipana": { s: 3, c: 4 }, // Scoundrel behavior (female)
  "sali randi": { s: 5, c: 4 }, // Damn prostitute
  "sali kutti": { s: 3, c: 4 }, // Damn bitch
  "haram ki paidaish": { s: 3, c: 4 }, // Illegitimate birth
  "lanati": { s: 3, c: 4 }, // Cursed one
  "laanati": { s: 3, c: 4 }, // Cursed one (variant)
  "zaalim": { s: 3, c: 4 }, // Cruel/oppressor
  "haiwan": { s: 5, c: 5 }, // Beast (dehumanizing)
  "haiwaan": { s: 3, c: 4 }, // Beast (variant)
  "khotey da puttar": { s: 3, c: 4 }, // Son of a donkey (Punjabi-Urdu)
  "kanjar": { s: 3, c: 4 }, // Low caste insult (very offensive)
  "kanjari": { s: 3, c: 4 }, // Female variant of kanjar
  "kanjarkhana": { s: 3, c: 4 }, // Brothel (extremely vulgar)
  "sulli": { s: 3, c: 4 }, // Derogatory slur
  "mulli": { s: 3, c: 4 }, // Derogatory slur
  "katua": { s: 3, c: 4 }, // Derogatory slur (circumcised)
  "katwe": { s: 3, c: 4 }, // Plural variant of katua

  // Punjabi-Hindi crossover
  "penchod": { s: 3, c: 5 }, // Sister fucker (Punjabi)
  "painchod": { s: 3, c: 5 }, // Sister fucker (Punjabi variant)
  "benchod": { s: 3, c: 4 }, // Sister fucker (Punjabi variant)
  "bhen di phuddi": { s: 4, c: 4 }, // Sister's pussy
  "teri pen di": { s: 3, c: 4 }, // Your sister's... (Punjabi)
  "phuddu": { s: 1, c: 4 }, // Pussy/coward (Punjabi)
  "phuddi chod": { s: 4, c: 5 }, // Pussy fucker
  "gandasi": { s: 5, c: 5 }, // Axe (threatening)
  "kutte de bachche": { s: 3, c: 4 }, // Puppy (Punjabi insult)
  "tere pyo da": { s: 1, c: 4 }, // Your father's (Punjabi)

  // Bhojpuri crossover
  "bhosdhari": { s: 3, c: 4 }, // Variant of bhosdi
  "chodua": { s: 3, c: 5 }, // Fucker (Bhojpuri)
  "chodni": { s: 3, c: 5 }, // Fuckable (Bhojpuri vulgar)
  "harua": { s: 3, c: 4 }, // Bastard (Bhojpuri)
  "maichod": { s: 5, c: 5 }, // Motherfucker (Bhojpuri)
  "bur": { s: 4, c: 4 }, // Vagina (Bhojpuri)
  "burwa": { s: 4, c: 4 }, // Vagina (Bhojpuri variant)

  // More internet abbreviations
  "bsdk gandu": { s: 2, c: 3 }, // Compound abbreviation insult
  "mkb": { s: 2, c: 3 }, // Abbreviation: maa ki bhosda
  "mkc": { s: 2, c: 3 }, // Abbreviation: maa ki chut
  "tkc": { s: 2, c: 3 }, // Abbreviation: teri ki chut
  "gnd": { s: 2, c: 3 }, // Abbreviation: gaand
  "bhn k lode": { s: 4, c: 3 }, // Abbreviated compound: sister's dicks
  "tmkb": { s: 2, c: 3 }, // Abbreviation: teri maa ka bhosda
  "tmkc": { s: 2, c: 3 }, // Abbreviation: teri maa ki chut
  "lkb": { s: 2, c: 3 }, // Abbreviation: lund ka baal

  // More transliterations and variants
  "choothiya": { s: 1, c: 5 }, // Idiot (variant)
  "gandmasti": { s: 1, c: 5 }, // Fooling around
  "gaandphad": { s: 3, c: 5 }, // Ass-ripping
  "laudu": { s: 4, c: 5 }, // Dick (variant of lodu)
  "laudey": { s: 4, c: 5 }, // Dicks (variant)
  "bhosadpappu": { s: 4, c: 5 }, // Vagina person (insult)
  "raandwa": { s: 5, c: 5 }, // Male prostitute
  "randikhor": { s: 5, c: 5 }, // Prostitute-eater (womanizer)
  "tharkey": { s: 3, c: 5 }, // Pervert (variant)
  "jhaat ke baal": { s: 3, c: 5 }, // Pubic hair (worthless)
  "mutthi maar": { s: 4, c: 5 }, // Masturbate (fist hit)
  "chutiyagiri": { s: 1, c: 5 }, // Acting like an idiot
  "gandugiri": { s: 3, c: 5 }, // Acting like an asshole
  "teri aukat mein": { s: 3, c: 5 }, // Within your status (challenging)
  "muh mein le": { s: 3, c: 5 }, // Take it in your mouth
  "lund choosna": { s: 4, c: 5 }, // Dick sucking
  "gaand chatna": { s: 3, c: 5 }, // Ass licking
  "chut chatna": { s: 4, c: 5 }, // Pussy licking
  "lund pe chadh": { s: 4, c: 5 }, // Climb on the dick

  // More Devanagari additions
  "हरामज़ादी": { s: 3, c: 4 }, // Haramzaadi (female bastard)
  "लानती": { s: 3, c: 4 }, // Laanati (cursed one)
  "हैवान": { s: 5, c: 5 }, // Haiwan (beast - dehumanizing)
  "कंजर": { s: 3, c: 4 }, // Kanjar (low caste insult)
  "कंजरी": { s: 3, c: 4 }, // Kanjari (female variant)
  "कंजरखाना": { s: 3, c: 4 }, // Kanjarkhana (brothel)
  "पेनचोद": { s: 3, c: 5 }, // Penchod (sister fucker - Punjabi)
  "फुद्दू": { s: 1, c: 4 }, // Phuddu (pussy/coward)
  "भोसधरी": { s: 3, c: 4 }, // Bhosdhari (variant of bhosdi)
  "चोदुआ": { s: 3, c: 5 }, // Chodua (fucker - Bhojpuri)
  "मईचोद": { s: 5, c: 5 }, // Maichod (motherfucker - Bhojpuri)
  "बुर": { s: 4, c: 4 }, // Bur (vagina - Bhojpuri)
  "टीएमकेबी": { s: 3, c: 4 }, // TMKB (teri maa ka bhosda)
  "टीएमकेसी": { s: 3, c: 4 }, // TMKC (teri maa ki chut)
  "एमकेबी": { s: 3, c: 4 }, // MKB (maa ki bhosda)
  "रांडवा": { s: 5, c: 4 }, // Raandwa (male prostitute)
  "चूतियागिरी": { s: 1, c: 4 }, // Chutiyagiri (acting like an idiot)
  "गांडूगिरी": { s: 3, c: 4 }, // Gandugiri (acting like an asshole)
  "मुँह में ले": { s: 3, c: 4 }, // Muh mein le (take it in your mouth)
  "लंड चूसना": { s: 4, c: 4 }, // Lund choosna (dick sucking)
  "गांड चाटना": { s: 3, c: 4 }, // Gaand chatna (ass licking)
  "चूत चाटना": { s: 4, c: 4 }, // Chut chatna (pussy licking)

  // ========================================
  // === Marathi Crossover Profanity ===
  // ========================================
  "zavnya": { s: 3, c: 5 }, // Fucker (Marathi)
  "madvya": { s: 1, c: 4 }, // Idiot/fucker (Marathi)
  "bhadvya": { s: 3, c: 4 }, // Son of a pimp (Marathi)
  "ghanta": { s: 4, c: 4 }, // Dick/nothing (Marathi slang)
  "aaichi gand": { s: 3, c: 4 }, // Mother's ass (Marathi)
  "aaicha gho": { s: 3, c: 4 }, // Mother's... (Marathi insult)
  "aaila": { s: 3, c: 4 }, // Mother (Marathi expletive)
  "aai zavadya": { s: 5, c: 5 }, // Motherfucker (Marathi)
  "aaicha zhavla": { s: 3, c: 5 }, // Fucked your mother (Marathi)
  "aaichya gavat": { s: 3, c: 4 }, // In your mother's village (Marathi insult)
  "aaichi chut": { s: 4, c: 4 }, // Mother's vagina (Marathi)
  "chutnya": { s: 1, c: 4 }, // Idiot (Marathi)
  "randichya": { s: 5, c: 4 }, // Son of a prostitute (Marathi)
  "bokya": { s: 3, c: 4 }, // Nonsense talker (Marathi)
  "zhavnya": { s: 3, c: 5 }, // Fucker (Marathi variant)
  "zhavadya": { s: 3, c: 5 }, // Fucker (Marathi variant)
  "tuzha aaicha": { s: 3, c: 4 }, // Your mother's (Marathi insult)
  "tuzi aai": { s: 3, c: 4 }, // Your mother (Marathi start of insult)
  "halkat": { s: 3, c: 4 }, // Wretched (Marathi)
  "gandya": { s: 3, c: 4 }, // Asshole (Marathi)
  "lundya": { s: 4, c: 4 }, // Dick (Marathi)
  "chhinaal": { s: 3, c: 4 }, // Promiscuous woman (Marathi)
  "fataka": { s: 5, c: 5 }, // Slap (Marathi threatening)
  "lavsya": { s: 4, c: 4 }, // Dickhead (Marathi)
  "zhav": { s: 3, c: 5 }, // Fuck (Marathi)
  "chiknya": { s: 3, c: 4 }, // Pretty boy (Marathi derogatory)
  "tuzha bapacha": { s: 1, c: 4 }, // Your father's (Marathi insult)
  "gavthi": { s: 3, c: 4 }, // Rustic/uncouth (Marathi insult)
  "popat": { s: 1, c: 3 }, // Parrot/fooled (Marathi slang)
  "supari": { s: 3, c: 4 }, // Betel nut/contract kill (Marathi slang)

  // Marathi Devanagari
  "झवण्या": { s: 3, c: 5 }, // Zavnya (fucker)
  "मद्व्या": { s: 1, c: 4 }, // Madvya (idiot)
  "भाड्व्या": { s: 3, c: 4 }, // Bhadvya (pimp's son)
  "घंटा": { s: 4, c: 4 }, // Ghanta (dick/nothing)
  "आईची गांड": { s: 3, c: 4 }, // Aaichi gand (mother's ass)
  "आईचा घो": { s: 3, c: 4 }, // Aaicha gho (mother's...)
  "आईला": { s: 3, c: 4 }, // Aaila (mother - expletive)
  "आई झवाड्या": { s: 5, c: 5 }, // Aai zavadya (motherfucker)
  "रांडीच्या": { s: 5, c: 4 }, // Randichya (son of prostitute)
  "हलकट": { s: 3, c: 4 }, // Halkat (wretched)
  "गांड्या": { s: 3, c: 4 }, // Gandya (asshole)
  "लवड्या": { s: 4, c: 4 }, // Lavdya (dickhead)
  "झव": { s: 3, c: 5 }, // Zhav (fuck)

  // ========================================
  // === Gujarati Crossover Profanity ===
  // ========================================
  "gando": { s: 3, c: 4 }, // Mad/crazy (Gujarati)
  "gandi": { s: 3, c: 4 }, // Mad (female, Gujarati)
  "bhosdo": { s: 4, c: 4 }, // Vagina-born (Gujarati)
  "chodyu": { s: 3, c: 5 }, // Fucked (Gujarati)
  "ghelu": { s: 3, c: 4 }, // Mad/crazy (Gujarati)
  "ghelchhodyu": { s: 3, c: 5 }, // Mad fucker (Gujarati)
  "lodo": { s: 4, c: 4 }, // Dick (Gujarati)
  "randva": { s: 5, c: 4 }, // Male prostitute (Gujarati)
  "fattu": { s: 1, c: 4 }, // Coward (Gujarati)
  "bhungro": { s: 3, c: 4 }, // Asshole (Gujarati)
  "chutyo": { s: 1, c: 4 }, // Idiot (Gujarati)
  "tari maa ne": { s: 3, c: 4 }, // Your mother's (Gujarati insult)
  "tari ben ne": { s: 3, c: 4 }, // Your sister's (Gujarati insult)
  "sala gando": { s: 3, c: 4 }, // Crazy bastard (Gujarati)
  "gandhyu": { s: 3, c: 4 }, // Smelly (Gujarati insult)
  "bhadvo": { s: 3, c: 4 }, // Pimp (Gujarati)
  "randno": { s: 5, c: 4 }, // Prostitute's (Gujarati)
  "lukhhu": { s: 3, c: 4 }, // Lewd (Gujarati)
  "bakho": { s: 1, c: 4 }, // Idiot (Gujarati)
  "maa no bhosdo": { s: 4, c: 4 }, // Mother's vagina (Gujarati)
  "gand maravi": { s: 3, c: 5 }, // Get your ass fucked (Gujarati)

  // ========================================
  // === Bhojpuri/Bihari Expanded ===
  // ========================================
  "bur chod": { s: 4, c: 5 }, // Vagina fucker (Bhojpuri)
  "burchod": { s: 4, c: 5 }, // Vagina fucker (Bhojpuri compound)
  "bhosarwa": { s: 4, c: 4 }, // Vagina-born (Bhojpuri)
  "chodwa": { s: 3, c: 5 }, // Fucker (Bhojpuri variant)
  "randi ke baccha": { s: 5, c: 4 }, // Son of a prostitute (Bhojpuri)
  "harua sala": { s: 3, c: 4 }, // Bastard (Bhojpuri compound)
  "maichodi": { s: 5, c: 5 }, // Motherfucker (Bhojpuri variant)
  "chodar": { s: 3, c: 5 }, // Fucker (Bhojpuri)
  "bur ke baal": { s: 3, c: 4 }, // Pubic hair (Bhojpuri vulgar)
  "gand faad": { s: 3, c: 4 }, // Ass ripper (Bhojpuri)
  "lund hilao": { s: 4, c: 4 }, // Jerk off (Bhojpuri)
  "lota": { s: 4, c: 4 }, // Vessel/penis (Bhojpuri slang)
  "bur mein": { s: 4, c: 4 }, // In the vagina (Bhojpuri vulgar)
  "tatte choos": { s: 4, c: 4 }, // Suck testicles (Bhojpuri)
  "aaba ka lund": { s: 1, c: 4 }, // Father's dick (Bhojpuri)
  "maai chod": { s: 5, c: 5 }, // Motherfucker (Bhojpuri variant)
  "gaand ke keede": { s: 3, c: 4 }, // Worms from ass (Bhojpuri insult)
  "bhokwa": { s: 3, c: 4 }, // Nonsense talker (Bhojpuri)
  "chuttar": { s: 3, c: 4 }, // Buttocks (Bhojpuri vulgar)

  // ========================================
  // === Rajasthani Dialect Profanity ===
  // ========================================
  "bhand": { s: 1, c: 3 }, // Drunk/jester (Rajasthani insult)
  "bhanda": { s: 1, c: 3 }, // Drunkard (Rajasthani)
  "gotiya": { s: 4, c: 4 }, // Testicles (Rajasthani)
  "randka": { s: 5, c: 4 }, // Prostitute's (Rajasthani)
  "chod diyo": { s: 3, c: 5 }, // Fucked (Rajasthani past tense)
  "lund ka pakoda": { s: 4, c: 4 }, // Dick fritter (Rajasthani vulgar insult)
  "ghani gandi": { s: 3, c: 4 }, // Very dirty (Rajasthani)
  "bawli gaand": { s: 3, c: 4 }, // Crazy ass (Rajasthani)
  "charba": { s: 1, c: 4 }, // Fat/greasy (Rajasthani insult)
  "dhila": { s: 3, c: 4 }, // Loose/useless (Rajasthani)
  "khasam": { s: 3, c: 4 }, // Husband/pimp (Rajasthani derogatory)
  "lugaai": { s: 3, c: 4 }, // Woman (Rajasthani derogatory)
  "chod de re": { s: 3, c: 5 }, // Fuck it (Rajasthani)
  "gaand ghis": { s: 3, c: 4 }, // Ass grinder (Rajasthani sycophant)
  "jhaal": { s: 3, c: 4 }, // Irritating/spicy (Rajasthani insult)

  // ========================================
  // === Haryanvi Dialect Profanity ===
  // ========================================
  "tau ke tatte": { s: 4, c: 4 }, // Uncle's testicles (Haryanvi)
  "teri bhen ka bhosda": { s: 4, c: 4 }, // Your sister's vagina (Haryanvi)
  "ghooghat mein lund": { s: 4, c: 4 }, // Dick under veil (Haryanvi vulgar)
  "chod de be": { s: 3, c: 5 }, // Fuck it (Haryanvi)
  "tere baap ki gaand": { s: 1, c: 4 }, // Your father's ass (Haryanvi)
  "teri taai ka": { s: 3, c: 4 }, // Your aunt's (Haryanvi insult)
  "gaand tod dunga": { s: 5, c: 5 }, // I'll break your ass (Haryanvi threat)
  "bhadak": { s: 5, c: 5 }, // Anger/threatening (Haryanvi)
  "chod ke rakh dunga": { s: 3, c: 5 }, // I'll fuck you up (Haryanvi)
  "ghochhi": { s: 4, c: 4 }, // Vagina (Haryanvi vulgar)
  "lund pe dhokla": { s: 4, c: 4 }, // Dick cake (Haryanvi absurd insult)
  "hadd harami": { s: 3, c: 4 }, // Ultimate bastard (Haryanvi)
  "chhinar": { s: 3, c: 4 }, // Promiscuous woman (Haryanvi)
  "bhains ki aankh": { s: 3, c: 4 }, // Buffalo's eye (Haryanvi expletive)
  "tatti kha le": { s: 3, c: 5 }, // Eat shit (Haryanvi)
  "kutte ki jaat": { s: 3, c: 4 }, // Dog's caste (Haryanvi insult)
  "lathait": { s: 3, c: 4 }, // Violent thug (Haryanvi)
  "bawla": { s: 3, c: 4 }, // Crazy (Haryanvi)
  "ghaasguss": { s: 3, c: 4 }, // Worthless (Haryanvi)

  // ========================================
  // === Remaining Devanagari for Romanized ===
  // ========================================
  "बखोड़": { s: 3, c: 5 }, // Bakchod variant
  "बकलौड़ा": { s: 3, c: 5 }, // Baklauda (bullshitter)
  "चिनाल": { s: 3, c: 5 }, // Chinal (promiscuous)
  "चूत का ढक्कन": { s: 4, c: 5 }, // Chut ka dhakkan (vagina's lid)
  "गांड फाड़ दूंगा": { s: 3, c: 5 }, // Gand fad dunga (I'll rip your ass)
  "गांड में डंडा": { s: 3, c: 5 }, // Gaand mein danda (stick in your ass)
  "झंड": { s: 3, c: 5 }, // Jhand (screwed)
  "रंडीरोना": { s: 3, c: 5 }, // Randi rona (whining)
  "भड़ में जा": { s: 3, c: 5 }, // Bhad mein ja (go to hell)
  "गंवार साला": { s: 3, c: 5 }, // Ganwar sala (uncivilized bastard)
  "तेरे मुँह में": { s: 3, c: 5 }, // Tere muh mein (in your mouth)
  "सुल्ली": { s: 3, c: 5 }, // Sulli (derogatory slur)
  "मुल्ली": { s: 3, c: 5 }, // Mulli (derogatory slur)
  "कटुआ": { s: 3, c: 5 }, // Katua (derogatory slur)
  "जालिम": { s: 3, c: 5 }, // Zaalim (cruel)
  "खोटे दा पुत्तर": { s: 3, c: 5 }, // Khotey da puttar (son of donkey)
  "पेनचोड": { s: 3, c: 5 }, // Penchod (Punjabi sister fucker)
  "तेरे प्यो दा": { s: 1, c: 5 }, // Tere pyo da (your father's)
  "बुरवा": { s: 4, c: 5 }, // Burwa (vagina - Bhojpuri)
  "चोदनी": { s: 3, c: 5 }, // Chodni (fuckable - Bhojpuri)
  "हरुआ": { s: 3, c: 5 }, // Harua (bastard - Bhojpuri)
  "गांडू बच्चा": { s: 3, c: 5 }, // Gandu bachcha (asshole kid)
  "लंड हिलाना": { s: 4, c: 5 }, // Lund hilana (masturbate)
  "तेरी औकात में": { s: 3, c: 5 }, // Teri aukat mein (within your status)
  "लंड पे चढ़": { s: 4, c: 5 }, // Lund pe chadh (climb on dick)
  "रंडीखोर": { s: 3, c: 5 }, // Randikhor (womanizer)
  "भोसडपपू": { s: 4, c: 5 }, // Bhosadpappu (vagina person)

  // ========================================
  // === Internet/Texting Hindi Slang ===
  // ========================================
  "bc sale": { s: 2, c: 3 }, // BC + sale compound
  "mc sala": { s: 2, c: 3 }, // MC + sala compound
  "bsdk saale": { s: 2, c: 3 }, // BSDK + saale compound
  "gandmein": { s: 3, c: 3 }, // In the ass (texting)
  "chutiyape": { s: 2, c: 3 }, // Idiocy (texting variant)
  "gandu log": { s: 3, c: 3 }, // Asshole people
  "chutiye log": { s: 1, c: 4 }, // Idiot people
  "bkchod": { s: 2, c: 3 }, // Abbreviation for bakchod
  "bkchdi": { s: 2, c: 3 }, // Abbreviation for bakchodi
  "lndbr": { s: 2, c: 3 }, // Abbreviation for lundbaz
  "chtya": { s: 2, c: 3 }, // Abbreviation for chutiya
  "gndu": { s: 2, c: 3 }, // Abbreviation for gandu
  "bhsdka": { s: 2, c: 3 }, // Abbreviation variant for bhosdika
  "mkbsdk": { s: 2, c: 3 }, // Compound: maa ka bhosda + bhosdike
  "lnd": { s: 2, c: 3 }, // Abbreviation for lund
  "chdai": { s: 2, c: 3 }, // Abbreviation for chudai
  "ttharak": { s: 2, c: 3 }, // Tharak variant

  // ========================================
  // === More Compound Insults ===
  // ========================================
  "chutiya madarchod": { s: 1, c: 4 }, // Idiot motherfucker
  "gandu bhosdi ke": { s: 4, c: 4 }, // Asshole vagina-born
  "behenchod harami": { s: 3, c: 4 }, // Sister fucker bastard
  "madarchod kutta": { s: 5, c: 5 }, // Motherfucker dog
  "randi ka beta": { s: 5, c: 4 }, // Son of a prostitute
  "bhadwe ka bachcha": { s: 1, c: 4 }, // Pimp's child
  "jhaat ka baal sala": { s: 3, c: 4 }, // Pubic hair bastard
  "tatti khane wala": { s: 3, c: 5 }, // Shit eater
  "gaand ke baal": { s: 3, c: 4 }, // Ass hair
  "lund ke tope": { s: 4, c: 4 }, // Glans penis (insult)
  "bhosda faad": { s: 4, c: 4 }, // Rip the vagina
  "gaand mein lund": { s: 4, c: 4 }, // Dick in ass
  "chut mein ungli": { s: 4, c: 4 }, // Finger in vagina
  "tere muh mein mera lund": { s: 4, c: 4 }, // My dick in your mouth
  "teri maa ko chodu": { s: 3, c: 5 }, // I'll fuck your mother
  "teri behen ko chodu": { s: 3, c: 5 }, // I'll fuck your sister
  "sala bewda": { s: 1, c: 3 }, // Damn drunkard
  "chodu bhagat": { s: 1, c: 4 }, // Idiot devotee (ironic insult)
  "lund khajoor": { s: 4, c: 4 }, // Dick date-palm (worthless)
  "gaand ka andha": { s: 1, c: 4 }, // Ass-blind (oblivious idiot)
  "chut ka chamcha": { s: 4, c: 4 }, // Vagina's sycophant
  "tatte ka saudagar": { s: 4, c: 4 }, // Testicle merchant
  "maa kasam chutiya": { s: 1, c: 4 }, // Swear on mother - idiot
  "chut mein bambu": { s: 4, c: 4 }, // Bamboo in vagina (extreme insult)
  "harami ki nasal": { s: 3, c: 4 }, // Bastard's breed
  "suar ki nasal": { s: 1, c: 4 }, // Pig's breed
  "gandmein ghus ja": { s: 3, c: 4 }, // Go into the ass
  "lund pe rakh": { s: 4, c: 4 }, // Keep it on the dick (indifference)

  // ========================================
  // === Leetspeak / Evasion Spellings ===
  // ========================================
  "bh3nchod": { s: 3, c: 5 }, // Sister fucker (evasion)
  "m@darchod": { s: 5, c: 5 }, // Motherfucker (evasion)
  "chut!ya": { s: 1, c: 5 }, // Idiot (evasion)
  "l@uda": { s: 4, c: 5 }, // Penis (evasion)
  "bh0sdike": { s: 4, c: 5 }, // Born of vagina (evasion)
  "r@ndi": { s: 5, c: 5 }, // Prostitute (evasion)
  "ch0d": { s: 3, c: 5 }, // Fuck (evasion)
  "ch00tiya": { s: 1, c: 5 }, // Idiot (evasion)
  "lun0": { s: 4, c: 5 }, // Penis (evasion)
  "g4ndu": { s: 3, c: 5 }, // Asshole (evasion)
  "m4darchod": { s: 5, c: 5 }, // Motherfucker (evasion)
  "beh3nchod": { s: 3, c: 5 }, // Sister fucker (evasion)
  "bhench0d": { s: 3, c: 5 }, // Sister fucker (evasion)
  "madarc#od": { s: 5, c: 5 }, // Motherfucker (evasion)
  "ch*tiya": { s: 1, c: 5 }, // Idiot (evasion)
  "bh*sdike": { s: 4, c: 5 }, // Born of vagina (evasion)
  "g*ndu": { s: 3, c: 5 }, // Asshole (evasion)
  "l*nd": { s: 4, c: 5 }, // Penis (evasion)
  "r*ndi": { s: 5, c: 5 }, // Prostitute (evasion)
  "chut1ya": { s: 1, c: 5 }, // Idiot (evasion)
  "madar$hod": { s: 5, c: 5 }, // Motherfucker (evasion)
  "behen$hod": { s: 3, c: 5 }, // Sister fucker (evasion)
  "bhenchd": { s: 3, c: 5 }, // Sister fucker (evasion shorthand)
  "madarchd": { s: 5, c: 5 }, // Motherfucker (evasion shorthand)
  "gaandfaad": { s: 3, c: 5 }, // Ass-ripper (evasion)
  "bh0sda": { s: 4, c: 5 }, // Vagina (evasion)
  "ch00t": { s: 4, c: 5 }, // Vagina (evasion)
  "l@und": { s: 4, c: 5 }, // Penis (evasion)
  "r@nd1": { s: 5, c: 5 }, // Prostitute (evasion)
  "ch0du": { s: 3, c: 5 }, // Fucker (evasion)
  "chuut": { s: 4, c: 5 }, // Vagina (evasion)
  "lundd": { s: 4, c: 5 }, // Penis (evasion)
  "laudaa": { s: 4, c: 5 }, // Penis (evasion)
  "bhosadike": { s: 4, c: 5 }, // Born of vagina (evasion)
  "chutiyee": { s: 1, c: 5 }, // Idiot (evasion)
  "randii": { s: 5, c: 5 }, // Prostitute (evasion)
  "bh3nch0d": { s: 3, c: 5 }, // Sister fucker (double evasion)
  "m@d@rchod": { s: 5, c: 5 }, // Motherfucker (double evasion)

  // ========================================
  // === Hinglish (Hindi-English Mix) Profanity ===
  // ========================================
  "bloody benchod": { s: 3, c: 5 }, // Bloody sister fucker
  "fucking chutiya": { s: 1, c: 4 }, // Fucking idiot
  "bloody madarchod": { s: 5, c: 5 }, // Bloody motherfucker
  "fucking gandu": { s: 3, c: 5 }, // Fucking asshole
  "damn harami": { s: 3, c: 4 }, // Damn bastard
  "bloody randi": { s: 5, c: 4 }, // Bloody prostitute
  "bloody kamina": { s: 3, c: 4 }, // Bloody scoundrel
  "bloody saala": { s: 3, c: 4 }, // Bloody bastard
  "fucking bhosdi ke": { s: 4, c: 5 }, // Fucking vagina-born
  "shut up chutiye": { s: 1, c: 4 }, // Shut up idiot
  "fuck off behenchod": { s: 3, c: 5 }, // Fuck off sister fucker
  "asshole gandu": { s: 3, c: 4 }, // Asshole asshole (Hinglish)
  "bloody kutta": { s: 3, c: 4 }, // Bloody dog
  "mother chod sala": { s: 3, c: 4 }, // Motherfucker bastard (Hinglish)
  "bastard harami": { s: 3, c: 4 }, // Bastard bastard (Hinglish)
  "bitch kutti": { s: 3, c: 4 }, // Bitch bitch (Hinglish)
  "fucking lauda": { s: 4, c: 5 }, // Fucking penis
  "bloody bhosdike": { s: 4, c: 4 }, // Bloody vagina-born
  "damn chutiyapa": { s: 3, c: 4 }, // Damn idiocy
  "go to hell behenchod": { s: 3, c: 5 }, // Go to hell sister fucker
  "son of a randi": { s: 5, c: 4 }, // Son of a prostitute (Hinglish)
  "bloody hijda": { s: 3, c: 4 }, // Bloody eunuch (Hinglish)
  "shut the fuck up chutiye": { s: 1, c: 4 }, // Shut up idiot (Hinglish)
  "die madarchod": { s: 5, c: 5 }, // Die motherfucker (Hinglish)
  "piece of shit chutiya": { s: 1, c: 4 }, // Piece of shit idiot (Hinglish)
  "stupid chutiya": { s: 1, c: 4 }, // Stupid idiot (Hinglish)
  "idiot gandu": { s: 1, c: 4 }, // Idiot asshole (Hinglish)
  "loser chutiya": { s: 1, c: 4 }, // Loser idiot (Hinglish)
  "useless gandu": { s: 3, c: 4 }, // Useless asshole (Hinglish)
  "dumbass chutiye": { s: 1, c: 4 }, // Dumbass idiot (Hinglish)
  "nonsense bakchodi": { s: 3, c: 5 }, // Nonsense bullshitting (Hinglish)
  "pathetic chutiya": { s: 1, c: 4 }, // Pathetic idiot (Hinglish)
  "disgusting tharki": { s: 3, c: 4 }, // Disgusting pervert (Hinglish)
  "ugly randi": { s: 1, c: 4 }, // Ugly prostitute (Hinglish)
  "cheap randi": { s: 5, c: 4 }, // Cheap prostitute (Hinglish)
  "dirty gandu": { s: 3, c: 4 }, // Dirty asshole (Hinglish)
  "bloody suar": { s: 3, c: 4 }, // Bloody pig (Hinglish)
  "fucking gadha": { s: 3, c: 5 }, // Fucking donkey (Hinglish)
  "bitch randve ki": { s: 3, c: 4 }, // Bitch from a womanizer (Hinglish)

  // ========================================
  // === More Regional Dialect Crossover ===
  // ========================================
  // Awadhi dialect
  "choda ke aulad": { s: 3, c: 5 }, // Offspring of a fucker (Awadhi)
  "bur chato": { s: 4, c: 4 }, // Vagina licker (Awadhi)
  "gaand ghusao": { s: 3, c: 4 }, // Shove in the ass (Awadhi)
  "launda chod": { s: 3, c: 5 }, // Boy fucker (Awadhi)
  "randi ka baccha": { s: 5, c: 4 }, // Son of a prostitute (Awadhi variant)
  "maai ke bhosra": { s: 4, c: 4 }, // Mother's vagina (Awadhi)
  "jhantu sala awadhi": { s: 3, c: 4 }, // Pubic-haired bastard (Awadhi)

  // Chhattisgarhi dialect
  "chod diye re": { s: 3, c: 5 }, // Fucked it (Chhattisgarhi)
  "bhokwa sala": { s: 3, c: 4 }, // Nonsense-talker bastard (Chhattisgarhi)
  "chuttar maaro": { s: 3, c: 4 }, // Hit the buttocks (Chhattisgarhi)
  "gand ke keera": { s: 3, c: 4 }, // Worm of the ass (Chhattisgarhi)
  "bura mein ghus": { s: 4, c: 4 }, // Get into the vagina (Chhattisgarhi)
  "launda bada harami": { s: 3, c: 4 }, // Boy is a big bastard (Chhattisgarhi)

  // Maithili dialect
  "chhodh de be": { s: 3, c: 5 }, // Leave it / fuck it (Maithili)
  "kaniya chod": { s: 3, c: 5 }, // Wife fucker (Maithili)
  "gaand mein laat": { s: 3, c: 4 }, // Kick in the ass (Maithili)
  "bur chat": { s: 4, c: 4 }, // Vagina lick (Maithili)
  "chodhan": { s: 3, c: 5 }, // Fucking (Maithili)
  "haramai ka beta": { s: 3, c: 4 }, // Son of a bastard (Maithili)
  "randi ka poot": { s: 5, c: 4 }, // Son of a prostitute (Maithili)

  // Dogri/Kashmiri crossover
  "chodd de yaar": { s: 3, c: 5 }, // Fuck it friend (Dogri)
  "gaand fad dunga teri": { s: 3, c: 4 }, // I'll rip your ass (Dogri)
  "tatti khana tu": { s: 3, c: 5 }, // You eat shit (Dogri)
  "kutta kamina sala": { s: 3, c: 4 }, // Dog scoundrel bastard (Dogri)
  "lund di topi": { s: 4, c: 4 }, // Glans penis (Dogri)
  "phuddi chod saale": { s: 3, c: 4 }, // Pussy fucker bastard (Dogri)

  // Konkani crossover
  "ghand": { s: 3, c: 4 }, // Ass (Konkani)
  "ghand mharo": { s: 3, c: 4 }, // Hit the ass (Konkani)
  "yede": { s: 1, c: 4 }, // Idiot (Konkani)
  "cheddya": { s: 3, c: 4 }, // Boy (derogatory, Konkani)
  "rand che pooth": { s: 5, c: 5 }, // Son of a whore (Konkani)
  "soor": { s: 3, c: 4 }, // Pig (Konkani insult)

  // Sindhi crossover
  "bhenchoro": { s: 3, c: 5 }, // Sister fucker (Sindhi)
  "madarchoro": { s: 5, c: 5 }, // Motherfucker (Sindhi)
  "haram jo bachho": { s: 3, c: 4 }, // Bastard child (Sindhi)
  "kuttey jo bachho": { s: 3, c: 4 }, // Son of a dog (Sindhi)
  "randi jo putar": { s: 5, c: 4 }, // Son of a prostitute (Sindhi)
  "gadha kameena": { s: 3, c: 4 }, // Donkey scoundrel (Sindhi)
  "choru": { s: 3, c: 5 }, // Fucker (Sindhi)

  // ========================================
  // === More Compound Insults Extended ===
  // ========================================
  "chutiya number one": { s: 1, c: 4 }, // Number one idiot
  "gandu number one": { s: 3, c: 4 }, // Number one asshole
  "bhosdi ke chutiye": { s: 1, c: 4 }, // Vagina-born idiot
  "madarchod bhosdi ke": { s: 5, c: 5 }, // Motherfucker vagina-born
  "teri maa ka bhosda faad dunga": { s: 4, c: 4 }, // I'll rip your mother's vagina
  "teri behen ka bhosda": { s: 4, c: 4 }, // Your sister's vagina
  "tere baap ki gaand faad dunga": { s: 1, c: 4 }, // I'll rip your father's ass
  "teri maa ko randi banaunga": { s: 5, c: 4 }, // I'll make your mother a prostitute
  "tere muh mein mera tatta": { s: 4, c: 4 }, // My testicle in your mouth
  "tere baap ka lund": { s: 1, c: 4 }, // Your father's dick
  "teri maa ki gaand": { s: 3, c: 4 }, // Your mother's ass
  "teri behen ki chut faad dunga": { s: 4, c: 4 }, // I'll rip your sister's vagina
  "gaand mein baans dal dunga": { s: 3, c: 4 }, // I'll shove bamboo in your ass
  "tatte tod dunga tere": { s: 4, c: 4 }, // I'll break your testicles
  "teri maa ka choosna": { s: 1, c: 4 }, // Suck your mother's
  "lund choosi ka": { s: 4, c: 4 }, // Dick sucker
  "gaand mein ghusa ja": { s: 3, c: 4 }, // Go into the ass
  "tere muh mein mera lauda": { s: 4, c: 4 }, // My penis in your mouth
  "chut ka chamcha sala": { s: 3, c: 4 }, // Vagina's sycophant bastard
  "lund pe baitha": { s: 4, c: 4 }, // Sit on the dick
  "gaand ka keeda sala": { s: 3, c: 4 }, // Worm of the ass bastard
  "jhaat ke baal bhi nahi": { s: 1, c: 4 }, // Not even a pubic hair (worthless)
  "kutte ki maut marega": { s: 5, c: 5 }, // You'll die a dog's death
  "suar ke muh wala": { s: 1, c: 4 }, // Pig-faced one
  "chutiya sala madarchod gandu": { s: 3, c: 4 }, // Idiot bastard motherfucker asshole
  "bhosdi ke randi ke bachche": { s: 5, c: 4 }, // Vagina-born son of a prostitute
  "haramzada kutta kamina gandu": { s: 3, c: 4 }, // Bastard dog scoundrel asshole
  "teri maa ki chut mein danda": { s: 4, c: 4 }, // Stick in your mother's vagina
  "gaand se dum nikal": { s: 3, c: 4 }, // Pull tail from ass (useless)
  "jhaat barabar bhi nahi": { s: 1, c: 4 }, // Not even worth a pubic hair
  "tatti ka tukda": { s: 3, c: 5 }, // Piece of shit
  "gobar ka keeda": { s: 1, c: 4 }, // Worm of cow dung
  "suar ki tatti": { s: 3, c: 5 }, // Pig's shit

  // ========================================
  // === More Devanagari Extended ===
  // ========================================
  "ब्लडी बहनचोद": { s: 3, c: 4 }, // Bloody behenchod (Hinglish)
  "फकिंग चूतिया": { s: 3, c: 5 }, // Fucking chutiya (Hinglish)
  "ब्लडी मादरचोद": { s: 5, c: 5 }, // Bloody madarchod (Hinglish)
  "फकिंग गांडू": { s: 3, c: 5 }, // Fucking gandu (Hinglish)
  "तेरी माँ को रंडी बनाऊंगा": { s: 5, c: 4 }, // I'll make your mother a prostitute
  "तेरी माँ का भोसड़ा फाड़ दूंगा": { s: 4, c: 4 }, // I'll rip your mother's vagina
  "तेरी बहन का भोसड़ा": { s: 4, c: 4 }, // Your sister's vagina
  "तेरे बाप की गांड फाड़ दूंगा": { s: 1, c: 4 }, // I'll rip your father's ass
  "तेरे बाप का लंड": { s: 1, c: 4 }, // Your father's dick
  "तेरी माँ की गांड": { s: 3, c: 4 }, // Your mother's ass
  "गांड में बांस डाल दूंगा": { s: 3, c: 4 }, // I'll shove bamboo in your ass
  "टट्टे तोड़ दूंगा तेरे": { s: 4, c: 4 }, // I'll break your testicles
  "लंड चूसी का": { s: 4, c: 4 }, // Dick sucker
  "गांड में घुस जा": { s: 3, c: 4 }, // Go into the ass
  "गांड का कीड़ा": { s: 3, c: 4 }, // Worm of the ass
  "झाँट के बाल भी नहीं": { s: 3, c: 4 }, // Not even a pubic hair (worthless)
  "कुत्ते की मौत मरेगा": { s: 5, c: 5 }, // You'll die a dog's death
  "सूअर के मुँह वाला": { s: 3, c: 4 }, // Pig-faced one
  "टट्टी का टुकड़ा": { s: 3, c: 5 }, // Piece of shit
  "गोबर का कीड़ा": { s: 3, c: 4 }, // Worm of cow dung
  "सूअर की टट्टी": { s: 3, c: 5 }, // Pig's shit
  "चूत में बम्बू": { s: 4, c: 4 }, // Bamboo in vagina
  "गांड फाटू गांडू": { s: 3, c: 4 }, // Ass-ripped asshole
  "भड़वे का नौकर": { s: 3, c: 4 }, // Pimp's servant
  "रंडी बाज़ार": { s: 5, c: 4 }, // Prostitute market
  "लौड़े का बाल": { s: 4, c: 4 }, // Dick's hair (worthless)
  "चूत की पैदाइश": { s: 4, c: 4 }, // Birth of a vagina
  "गांड का अंधा": { s: 3, c: 4 }, // Ass-blind (totally oblivious)

  // ========================================
  // === More Internet/Gaming Slang ===
  // ========================================
  "mc bc lodu": { s: 2, c: 3 }, // MC BC Lodu compound
  "bsdk chutiye nikal": { s: 1, c: 4 }, // BSDK idiot get out
  "gandu sala mc": { s: 3, c: 4 }, // Asshole bastard MC
  "tmkc bsdk": { s: 2, c: 3 }, // TMKC BSDK compound
  "bc mc tmkc tmkb": { s: 2, c: 3 }, // All abbreviations compound
  "nikal lavde pehli fursat mein": { s: 4, c: 3 }, // Get out dick at first opportunity (meme)
  "aukad mein reh chutiye": { s: 1, c: 4 }, // Stay in your place idiot
  "apni maa chuda": { s: 5, c: 5 }, // Get your mother fucked
  "teri maa ka chutiya": { s: 1, c: 4 }, // Your mother's idiot
  "teri maa randi hai": { s: 5, c: 4 }, // Your mother is a prostitute

  // ========================================
  // === Assamese Crossover Profanity ===
  // ========================================
  "kenekoi": { s: 3, c: 4 }, // How (used dismissively, Assamese)
  "bor soor": { s: 3, c: 4 }, // Big pig (Assamese)
  "puti mara": { s: 3, c: 5 }, // Ass fucker (Assamese)
  "bhot gandu": { s: 3, c: 4 }, // Very asshole (Assamese-Hindi mix)
  "betichod": { s: 3, c: 5 }, // Daughter fucker (Assamese crossover)
  "huila": { s: 3, c: 4 }, // Crazy (Assamese derogatory)
  "dangor soor": { s: 3, c: 4 }, // Big pig (Assamese variant)
  "boga puti": { s: 3, c: 4 }, // White ass (Assamese vulgar)
  "bhondami": { s: 3, c: 5 }, // Nonsense/bullshit (Assamese)
  "bondor soor": { s: 3, c: 4 }, // Monkey pig (Assamese compound)
  "sali besya": { s: 5, c: 4 }, // Damn prostitute (Assamese)
  "maa sudi": { s: 5, c: 5 }, // Motherfucker (Assamese variant)

  // ========================================
  // === More Evasion Variants ===
  // ========================================
  "bhnchd gandu": { s: 3, c: 5 }, // Abbreviation compound
  "behen ch0d": { s: 3, c: 5 }, // Sister fucker evasion
  "ch00t1ya": { s: 1, c: 5 }, // Idiot evasion
  "maad@rchod": { s: 5, c: 5 }, // Motherfucker evasion
  "bhos@dike": { s: 4, c: 5 }, // Born of vagina evasion
  "l@ude": { s: 4, c: 5 }, // Dicks evasion

  // ========================================
  // === Extended Gaali - Devanagari Script ===
  // ========================================
  "भोसड़ीवाला": { s: 4, c: 4 }, // One with a loose vagina
  "भोसड़ीवाली": { s: 3, c: 4 }, // Female form of above
  "लौड़ी": { s: 3, c: 4 }, // Female genitalia (vulgar)
  "लंडूरा": { s: 4, c: 4 }, // Dick-like person
  "गांड का ढक्कन": { s: 1, c: 4 }, // Ass's lid (idiot)
  "रंडवा": { s: 5, c: 4 }, // Male prostitute
  "छिनार": { s: 3, c: 4 }, // Adulteress
  "गांडू मल": { s: 3, c: 4 }, // Asshole filth
  "तवायफ़": { s: 5, c: 4 }, // Courtesan/prostitute
  "वेश्या": { s: 5, c: 4 }, // Prostitute (formal)
  "रखैल": { s: 3, c: 4 }, // Kept woman/mistress
  "दल्ली": { s: 3, c: 4 }, // Pimp (female)
  "लफंगी": { s: 3, c: 4 }, // Female loafer/rogue
  "लुच्ची": { s: 3, c: 4 }, // Lecherous (female)
  "चालू": { s: 3, c: 4 }, // Cunning/promiscuous
  "नटखट": { s: 3, c: 4 }, // Naughty (used derogatorily)
  "बदतमीज़": { s: 3, c: 4 }, // Ill-mannered
  "बेग़ैरत": { s: 3, c: 4 }, // Shameless (Urdu influence)
  "निर्लज्ज": { s: 3, c: 4 }, // Shameless (formal)
  "निकम्मी": { s: 3, c: 4 }, // Useless (female)
  "कमज़ात": { s: 3, c: 4 }, // Low-born
  "नीचे की पैदाइश": { s: 3, c: 4 }, // Born of lowly origin
  "बदज़ात": { s: 3, c: 4 }, // Evil-natured
  "चमार": { s: 3, c: 4 }, // Caste-based slur (leatherworker)
  "भंगी": { s: 3, c: 4 }, // Caste-based slur (sweeper)
  "चूहड़ा": { s: 3, c: 4 }, // Caste-based slur (sweeper)
  "डोम": { s: 3, c: 4 }, // Caste-based slur (funeral workers)
  "धोबी": { s: 3, c: 4 }, // Caste-based slur (washerman, used derogatorily)
  "चूड़ीवाला": { s: 3, c: 4 }, // Bangle-seller (effeminate insult)
  "हिजड़ापन": { s: 3, c: 4 }, // Transgenderism (used as insult)
  "गधे": { s: 3, c: 4 }, // Donkeys (insult)
  "उल्लू के पट्ठे": { s: 3, c: 4 }, // Owl's offspring (plural)
  "भैंस": { s: 3, c: 4 }, // Buffalo (insult, usually at women)
  "भैंसा": { s: 3, c: 4 }, // Male buffalo (insult)
  "सूअरनी": { s: 3, c: 4 }, // Female pig (insult)
  "बिल्ला": { s: 3, c: 4 }, // Tom cat (sneaky person)
  "बंदरिया": { s: 3, c: 4 }, // Female monkey
  "लोभी": { s: 3, c: 4 }, // Greedy
  "ठग": { s: 3, c: 4 }, // Cheat/thief
  "लुटेरा": { s: 3, c: 4 }, // Robber
  "डाकू": { s: 3, c: 4 }, // Bandit
  "गुंडा": { s: 3, c: 4 }, // Thug
  "गुंडागर्दी": { s: 3, c: 4 }, // Thuggery
  "टपोरी": { s: 3, c: 4 }, // Street ruffian
  "लुच्चड़": { s: 3, c: 4 }, // Lecherous (variant)
  "अंडबाज़": { s: 4, c: 4 }, // Testicle player (vulgar)
  "टट्टू": { s: 3, c: 4 }, // Pony (weak person)
  "रांड की": { s: 5, c: 4 }, // Of a prostitute
  "बेवड़ा": { s: 1, c: 3 }, // Drunkard
  "बेवड़ी": { s: 1, c: 3 }, // Female drunkard
  "नशेड़ी": { s: 3, c: 4 }, // Drug addict
  "चरसी": { s: 3, c: 4 }, // Hash smoker
  "गांजेड़ी": { s: 3, c: 4 }, // Marijuana addict
  "अफ़ीमची": { s: 3, c: 4 }, // Opium addict
  "भड़वाग़ीरी": { s: 3, c: 4 }, // Pimping
  "चमगादड़": { s: 3, c: 4 }, // Bat (insult)
  "सांड": { s: 3, c: 4 }, // Bull (uncontrolled person)
  "गूदड़": { s: 3, c: 4 }, // Rag (worthless)
  "पागलखाने का": { s: 3, c: 4 }, // From the madhouse
  "पागल कुत्ता": { s: 3, c: 4 }, // Mad dog
  "चुटिया कटा": { s: 1, c: 4 }, // Circumcised idiot (offensive)
  "मुल्ला": { s: 3, c: 4 }, // Muslim cleric (used as slur)
  "पंडित": { s: 3, c: 4 }, // Brahmin (used sarcastically)
  "बामन": { s: 3, c: 4 }, // Brahmin (derogatory form)
  "ठाकुर साला": { s: 3, c: 4 }, // Thakur bastard (caste insult)
  "बनिया": { s: 3, c: 4 }, // Merchant caste (used derogatorily)
  "चमारी": { s: 3, c: 4 }, // Female caste slur
  "झाँट के बाल": { s: 3, c: 4 }, // Pubic hair strands
  "लंड के बाल": { s: 4, c: 4 }, // Dick hair (worthless)
  "चूत के बाल": { s: 4, c: 4 }, // Vaginal hair (insult)
  "मूत पी": { s: 3, c: 4 }, // Drink piss
  "मूतने जा": { s: 3, c: 4 }, // Go urinate (dismissive)
  "हगने जा": { s: 3, c: 4 }, // Go defecate (dismissive)
  "पाद": { s: 3, c: 4 }, // Fart
  "पादू": { s: 3, c: 4 }, // One who farts
  "गोबर गणेश": { s: 1, c: 4 }, // Cow dung Ganesh (stupid person)
  "चूहा": { s: 1, c: 4 }, // Rat (coward)
  "बिच्छू": { s: 3, c: 4 }, // Scorpion (treacherous)
  "साँप": { s: 3, c: 4 }, // Snake (treacherous)
  "केंचुआ": { s: 3, c: 4 }, // Earthworm (spineless)
  "जोंक": { s: 3, c: 4 }, // Leech (parasite)
  "गिद्ध": { s: 3, c: 4 }, // Vulture (opportunistic)
  "कौआ": { s: 1, c: 4 }, // Crow (bad omen/ugly)

  // ========================================
  // === Extended Romanized Hindi Gaali ===
  // ========================================
  "bhosdiwali": { s: 3, c: 5 }, // Female form
  "laudi": { s: 3, c: 5 }, // Female genitalia (vulgar)
  "landura": { s: 4, c: 5 }, // Dick-like person
  "laude ka baal": { s: 4, c: 5 }, // Dick's pubic hair (worthless)
  "gaand ka dhakkan": { s: 1, c: 5 }, // Ass's lid (idiot)
  "randwa": { s: 5, c: 5 }, // Male prostitute
  "chhinal": { s: 3, c: 5 }, // Adulteress (variant)
  "tawaif": { s: 5, c: 5 }, // Courtesan/prostitute
  "veshya": { s: 5, c: 5 }, // Prostitute (formal)
  "rakhail": { s: 3, c: 5 }, // Kept woman
  "dalli": { s: 3, c: 5 }, // Pimp (female)
  "lafangi": { s: 3, c: 5 }, // Female loafer/rogue
  "luchcha": { s: 3, c: 5 }, // Lecherous
  "luchchi": { s: 3, c: 5 }, // Lecherous (female)
  "badtameez": { s: 3, c: 5 }, // Ill-mannered
  "begairat": { s: 3, c: 5 }, // Shameless
  "nirlajj": { s: 3, c: 5 }, // Shameless (formal)
  "nikammi": { s: 3, c: 5 }, // Useless (female)
  "kamzaat": { s: 3, c: 5 }, // Low-born
  "neech ki paidaish": { s: 3, c: 5 }, // Born of lowly origin
  "badzaat": { s: 3, c: 5 }, // Evil-natured
  "ullu ke patthe": { s: 3, c: 5 }, // Owl's offspring (plural)
  "bhains": { s: 3, c: 5 }, // Buffalo
  "bhainsa": { s: 3, c: 5 }, // Male buffalo
  "suarni": { s: 3, c: 5 }, // Female pig
  "makkhi choos": { s: 3, c: 5 }, // Fly-sucker (miser)
  "lobhi": { s: 3, c: 5 }, // Greedy
  "thug": { s: 3, c: 5 }, // Cheat
  "lutera": { s: 3, c: 5 }, // Robber
  "daku": { s: 3, c: 5 }, // Bandit
  "gunda": { s: 3, c: 5 }, // Thug
  "gundagardi": { s: 3, c: 5 }, // Thuggery
  "tapori": { s: 3, c: 5 }, // Street ruffian
  "luchchar": { s: 3, c: 5 }, // Lecherous (variant)
  "andbaaz": { s: 4, c: 5 }, // Testicle player
  "tattu": { s: 3, c: 5 }, // Pony (weak person)
  "paakhandi": { s: 3, c: 5 }, // Hypocrite (variant)
  "raand ki": { s: 5, c: 5 }, // Of a prostitute
  "bewda": { s: 1, c: 5 }, // Drunkard (male)
  "bewdi": { s: 1, c: 5 }, // Drunkard (female)
  "nashedi": { s: 3, c: 5 }, // Drug addict
  "gaanjedi": { s: 3, c: 5 }, // Marijuana addict
  "afimchi": { s: 3, c: 5 }, // Opium addict
  "bhadwagiri": { s: 3, c: 5 }, // Pimping
  "saand": { s: 3, c: 5 }, // Bull (uncontrolled)
  "pagal kutta": { s: 3, c: 5 }, // Mad dog
  "mulla": { s: 3, c: 5 }, // Muslim cleric (slur)
  "baman": { s: 3, c: 5 }, // Brahmin (derogatory)
  "jhaant ke baal": { s: 3, c: 5 }, // Pubic hair strands
  "land ke baal": { s: 4, c: 5 }, // Dick hair (worthless)
  "chut ke baal": { s: 4, c: 5 }, // Vaginal hair
  "moot pi": { s: 3, c: 5 }, // Drink piss
  "hagney ja": { s: 3, c: 5 }, // Go defecate
  "paad": { s: 3, c: 5 }, // Fart
  "paadu": { s: 3, c: 5 }, // Farter
  "gobar": { s: 3, c: 5 }, // Cow dung
  "gobar ganesh": { s: 1, c: 5 }, // Cow dung Ganesh (stupid)
  "chuha": { s: 1, c: 5 }, // Rat (coward)
  "bichhu": { s: 3, c: 5 }, // Scorpion
  "saanp": { s: 3, c: 5 }, // Snake
  "kenchua": { s: 3, c: 5 }, // Earthworm (spineless)
  "jonk": { s: 3, c: 5 }, // Leech
  "giddh": { s: 3, c: 5 }, // Vulture

  // ========================================
  // === Extended Compound Insults (Romanized) ===
  // ========================================
  "madarchod kamina": { s: 5, c: 5 }, // Motherfucker scoundrel
  "chutiya kamina": { s: 1, c: 5 }, // Idiot scoundrel
  "gandu harami": { s: 3, c: 5 }, // Asshole bastard
  "bhosdi ke gandu": { s: 4, c: 5 }, // Vagina-born asshole
  "laude ke baal chutiye": { s: 1, c: 5 }, // Dick-hair idiot
  "madarchod bhosdike": { s: 5, c: 5 }, // Motherfucker vagina-born
  "behenchod bhosdike": { s: 4, c: 5 }, // Sisterfucker vagina-born
  "randi ka baccha chutiya": { s: 1, c: 5 }, // Prostitute's child idiot
  "haramzadi randi": { s: 3, c: 5 }, // Bastard prostitute (female)
  "kamina kutta": { s: 1, c: 5 }, // Scoundrel dog
  "gandu lauda": { s: 4, c: 5 }, // Asshole dick
  "chutiya sala harami": { s: 3, c: 5 }, // Idiot bastard (compound)
  "madarchod gandu kamina": { s: 5, c: 5 }, // Motherfucker asshole scoundrel
  "behenchod laude": { s: 4, c: 5 }, // Sisterfucker dicks
  "teri maa ki chut mein keeda": { s: 4, c: 5 }, // Worm in your mother's vagina
  "teri behen ki gaand mein": { s: 3, c: 5 }, // In your sister's ass
  "baap ka lauda choos": { s: 1, c: 5 }, // Suck your father's dick
  "maa ko bech de randi": { s: 5, c: 5 }, // Sell your mother prostitute
  "behen ko randi bana": { s: 5, c: 5 }, // Make your sister a prostitute
  "teri aukat chutiye": { s: 1, c: 5 }, // Your status idiot
  "aukaat mein reh": { s: 1, c: 5 }, // Stay in your place
  "teri maa ka bharosa": { s: 1, c: 5 }, // Your mother's trust (ironic insult)
  "teri maa gaand marae": { s: 3, c: 5 }, // Your mother gets ass-fucked
  "lund pe charh ja": { s: 4, c: 5 }, // Climb on the dick
  "gaand marwa le": { s: 3, c: 5 }, // Get your ass fucked
  "chut marwa le": { s: 4, c: 5 }, // Get your vagina fucked
  "lund chooste reh": { s: 4, c: 5 }, // Keep sucking dick
  "gaand mein ungli": { s: 3, c: 5 }, // Finger in ass
  "chut mein lund": { s: 4, c: 5 }, // Dick in vagina
  "tatte masle": { s: 4, c: 5 }, // Crush the testicles
  "tatte tod de": { s: 4, c: 5 }, // Break the testicles
  "lund kaat dunga": { s: 4, c: 5 }, // I'll cut your dick
  "chut faad dunga": { s: 4, c: 5 }, // I'll rip your vagina
  "gaand faad dunga": { s: 3, c: 5 }, // I'll rip your ass
  "maa chod dunga": { s: 3, c: 5 }, // I'll fuck your mother
  "behen chod dunga": { s: 3, c: 5 }, // I'll fuck your sister
  "biwi chod dunga": { s: 3, c: 5 }, // I'll fuck your wife
  "baap chod dunga": { s: 1, c: 5 }, // I'll fuck your father
  "khandaan chod dunga": { s: 3, c: 5 }, // I'll fuck your lineage
  "khandan ki izzat le lunga": { s: 1, c: 5 }, // I'll take your family's honor
  "teri maa ka bharwa": { s: 1, c: 5 }, // Your mother's pimp
  "teri behen ka dalla": { s: 1, c: 5 }, // Your sister's pimp
  "teri maa mujhe randi lagti hai": { s: 5, c: 5 }, // Your mother seems like a prostitute to me
  "sab ki randi": { s: 5, c: 5 }, // Everyone's prostitute
  "naukrani ki tarah": { s: 1, c: 5 }, // Like a servant (demeaning)
  "bazaaru aurat": { s: 5, c: 5 }, // Market woman (prostitute)
  "sadak chaap": { s: 1, c: 5 }, // Street-level (worthless)
  "naali ka keeda": { s: 1, c: 5 }, // Gutter worm
  "gutter mein pad": { s: 1, c: 5 }, // Fall in the gutter

  // ========================================
  // === Bhojpuri Crossover Profanity ===
  // ========================================
  "भोकवा": { s: 1, c: 4 }, // Idiot (Bhojpuri)
  "bokwa": { s: 1, c: 4 }, // Idiot (Bhojpuri romanized)
  "छौड़ी": { s: 3, c: 4 }, // Girl (derogatory, Bhojpuri)
  "chhaudi": { s: 3, c: 4 }, // Girl (derogatory, Bhojpuri romanized)
  "रंडी रोना": { s: 5, c: 4 }, // Prostitute crying (Bhojpuri)
  "छिनरा": { s: 3, c: 4 }, // Male adulteress (Bhojpuri)
  "chhinra": { s: 3, c: 4 }, // Male adulteress (Bhojpuri, romanized)
  "भड़वागिरी": { s: 3, c: 4 }, // Pimping (Bhojpuri)
  "हरामज़दगी": { s: 3, c: 4 }, // Bastardry (Bhojpuri)
  "haramzadgi": { s: 3, c: 4 }, // Bastardry (Bhojpuri romanized)
  "baklol": { s: 1, c: 4 }, // Talkative idiot (Bhojpuri romanized)
  "ढोसू": { s: 1, c: 4 }, // Stupid (Bhojpuri)
  "dhosu": { s: 1, c: 4 }, // Stupid (Bhojpuri romanized)
  "पगहा": { s: 3, c: 4 }, // Rope for tying cattle (Bhojpuri insult)
  "pagha": { s: 3, c: 4 }, // Rope insult (Bhojpuri romanized)
  "बेकूफ़": { s: 1, c: 4 }, // Stupid (Bhojpuri)
  "bekoof": { s: 1, c: 4 }, // Stupid (Bhojpuri romanized)
  "लतखोर": { s: 1, c: 3 }, // Drunkard (Bhojpuri)
  "latkhor": { s: 1, c: 3 }, // Drunkard (Bhojpuri romanized)
  "भँउव़ा": { s: 1, c: 4 }, // Idiot (Bhojpuri)
  "bhauwa": { s: 1, c: 4 }, // Idiot (Bhojpuri romanized)
  "गमार": { s: 3, c: 4 }, // Bumpkin (Bhojpuri)
  "gamaar": { s: 3, c: 4 }, // Bumpkin (Bhojpuri romanized)
  "भुक्कड़": { s: 3, c: 4 }, // Glutton (Bhojpuri)
  "bhukkad": { s: 3, c: 4 }, // Glutton (Bhojpuri romanized)
  "चोदवा": { s: 3, c: 5 }, // Fucker (Bhojpuri)
  "फदियल": { s: 1, c: 3 }, // Drunkard/useless (Bhojpuri)
  "fadiyal": { s: 1, c: 3 }, // Drunkard/useless (Bhojpuri romanized)
  "मटरू": { s: 3, c: 4 }, // Simpleton (Bhojpuri)
  "matru": { s: 3, c: 4 }, // Simpleton (Bhojpuri romanized)
  "लोटा": { s: 3, c: 4 }, // Pot (worthless, Bhojpuri)
  "ठरकीपन": { s: 3, c: 4 }, // Lustfulness
  "tharkipan": { s: 3, c: 4 }, // Lustfulness (romanized)
  "चिरकुट": { s: 3, c: 4 }, // Worthless/small-time
  "chirkut": { s: 3, c: 4 }, // Worthless/small-time (romanized)
  "चपरी": { s: 3, c: 4 }, // Low-class person
  "छपरी": { s: 3, c: 4 }, // Low-class person (variant)
  "chhapri": { s: 3, c: 4 }, // Low-class person (romanized variant)
  "गवार": { s: 3, c: 4 }, // Bumpkin/uncivilized
  "gawaar": { s: 3, c: 4 }, // Bumpkin/uncivilized (romanized)

  // ========================================
  // === Marathi Crossover Profanity ===
  // ========================================
  "झवाड्या": { s: 3, c: 5 }, // Fucker (Marathi)
  "भाड्या": { s: 3, c: 5 }, // Pimp/fucker (Marathi)
  "bhadya": { s: 3, c: 5 }, // Pimp/fucker (Marathi romanized)
  "आईझवाड्या": { s: 5, c: 5 }, // Motherfucker (Marathi)
  "aaizhavadya": { s: 5, c: 5 }, // Motherfucker (Marathi romanized)
  "बहिणीचोद": { s: 3, c: 5 }, // Sisterfucker (Marathi)
  "bahinichod": { s: 3, c: 5 }, // Sisterfucker (Marathi romanized)
  "गांडीत घे": { s: 3, c: 4 }, // Take it in the ass (Marathi)
  "gandit ghe": { s: 3, c: 4 }, // Take it in the ass (Marathi romanized)
  "चुत्या": { s: 1, c: 4 }, // Idiot (Marathi)
  "बोकड": { s: 3, c: 4 }, // Goat (Marathi insult)
  "bokad": { s: 3, c: 4 }, // Goat (Marathi insult romanized)
  "रांडेचा": { s: 5, c: 4 }, // Son of a prostitute (Marathi)
  "randecha": { s: 5, c: 4 }, // Son of a prostitute (Marathi romanized)
  "मावशीच्या": { s: 3, c: 4 }, // Aunt's (Marathi, start of insult)
  "mavshichya": { s: 3, c: 4 }, // Aunt's (Marathi romanized)
  "तुझ्या आईला": { s: 3, c: 4 }, // To your mother (Marathi insult)
  "tujhya aaila": { s: 3, c: 4 }, // To your mother (Marathi romanized)
  "तुझी आई गं": { s: 3, c: 4 }, // Your mother oh (Marathi insult)
  "tujhi aai ga": { s: 3, c: 4 }, // Your mother (Marathi romanized)
  "बायकोला झव": { s: 3, c: 5 }, // Fuck the wife (Marathi)
  "baykola zhav": { s: 3, c: 5 }, // Fuck the wife (Marathi romanized)
  "चावट": { s: 3, c: 4 }, // Lustful/pervert (Marathi)
  "chavat": { s: 3, c: 4 }, // Lustful/pervert (Marathi romanized)
  "पोरकट": { s: 3, c: 4 }, // Childish/immature (Marathi insult)
  "porkat": { s: 3, c: 4 }, // Childish (Marathi romanized)
  "पोरगट": { s: 3, c: 4 }, // Childish (Marathi variant)
  "porgat": { s: 3, c: 4 }, // Childish (Marathi romanized)
  "हलकट कमीना": { s: 3, c: 4 }, // Scoundrel scoundrel (Marathi compound)
  "halkat kamina": { s: 3, c: 4 }, // Scoundrel (Marathi romanized)
  "तेरी गांड झव": { s: 3, c: 5 }, // Fuck your ass (Marathi-Hindi mix)
  "teri gaand zhav": { s: 3, c: 5 }, // Fuck your ass (Marathi-Hindi romanized)

  // ========================================
  // === Gujarati Crossover Profanity ===
  // ========================================
  "ઘાંટી ચોદ": { s: 3, c: 5 }, // Throat fucker (Gujarati)
  "ghanti chod": { s: 3, c: 5 }, // Throat fucker (Gujarati romanized)
  "ભોસ": { s: 4, c: 4 }, // Vagina (Gujarati)
  "bhos": { s: 4, c: 4 }, // Vagina (Gujarati romanized)
  "ચુતિયો": { s: 1, c: 4 }, // Idiot (Gujarati)
  "chutiyo": { s: 1, c: 4 }, // Idiot (Gujarati romanized)
  "ગાંડમારો": { s: 3, c: 5 }, // Ass fucker (Gujarati)
  "gaandmaro": { s: 3, c: 5 }, // Ass fucker (Gujarati romanized)
  "ગાંડિયો": { s: 3, c: 4 }, // Asshole (Gujarati)
  "gaandiyo": { s: 3, c: 4 }, // Asshole (Gujarati romanized)
  "લોડો": { s: 4, c: 4 }, // Dick (Gujarati)
  "ફૂદી": { s: 4, c: 4 }, // Vagina (Gujarati)
  "foodi": { s: 4, c: 4 }, // Vagina (Gujarati romanized)
  "ફૂદીમારી": { s: 4, c: 5 }, // Vagina fucker (Gujarati)
  "foodimari": { s: 4, c: 5 }, // Vagina fucker (Gujarati romanized)
  "ભેંશ": { s: 3, c: 4 }, // Buffalo (Gujarati insult)
  "bhensh": { s: 3, c: 4 }, // Buffalo (Gujarati romanized)
  "ઢીલો": { s: 3, c: 4 }, // Loose/weak (Gujarati insult)
  "dhilo": { s: 3, c: 4 }, // Loose/weak (Gujarati romanized)
  "ભાભીચોદ": { s: 3, c: 5 }, // Aunt fucker (Gujarati)
  "bhabhichod": { s: 3, c: 5 }, // Aunt fucker (Gujarati romanized)
  "છોકરીચોદ": { s: 3, c: 5 }, // Girl fucker (Gujarati)
  "chhokrichod": { s: 3, c: 5 }, // Girl fucker (Gujarati romanized)
  "રાંડ": { s: 5, c: 4 }, // Prostitute (Gujarati)
  "ટટ્ટો": { s: 1, c: 4 }, // Pony/weakling (Gujarati)
  "tatto": { s: 1, c: 4 }, // Pony/weakling (Gujarati romanized)
  "ગમાર": { s: 3, c: 4 }, // Bumpkin (Gujarati)
  "gamaar guj": { s: 3, c: 4 }, // Bumpkin (Gujarati variant)
  "ભવાડો": { s: 3, c: 4 }, // Pimp (Gujarati)
  "bhavado": { s: 3, c: 4 }, // Pimp (Gujarati romanized)

  // ========================================
  // === Rajasthani Crossover Profanity ===
  // ========================================
  "साली छोरी": { s: 3, c: 4 }, // Damn girl (Rajasthani)
  "saali chhori": { s: 3, c: 4 }, // Damn girl (Rajasthani romanized)
  "कमीनी छोरी": { s: 3, c: 4 }, // Scoundrel girl (Rajasthani)
  "kamini chhori": { s: 3, c: 4 }, // Scoundrel girl (Rajasthani romanized)
  "बायसा की": { s: 3, c: 4 }, // Lady's (Rajasthani insult start)
  "baysa ki": { s: 3, c: 4 }, // Lady's (Rajasthani romanized)
  "ढेड बुद्धि": { s: 3, c: 4 }, // Half-brained (Rajasthani)
  "dhed buddhi": { s: 3, c: 4 }, // Half-brained (Rajasthani romanized)
  "गधेड़ा": { s: 3, c: 4 }, // Donkey (Rajasthani)
  "gadheda": { s: 3, c: 4 }, // Donkey (Rajasthani romanized)
  "भुंड": { s: 1, c: 4 }, // Ugly/pig (Rajasthani)
  "bhund": { s: 1, c: 4 }, // Ugly/pig (Rajasthani romanized)
  "लबार": { s: 3, c: 4 }, // Liar (Rajasthani)
  "labar": { s: 3, c: 4 }, // Liar (Rajasthani romanized)
  "बावलो": { s: 3, c: 4 }, // Mad (Rajasthani)
  "bawlo": { s: 3, c: 4 }, // Mad (Rajasthani romanized)
  "बावली": { s: 3, c: 4 }, // Mad (female, Rajasthani)
  "bawli": { s: 3, c: 4 }, // Mad (female, Rajasthani romanized)
  "खूसट": { s: 1, c: 4 }, // Miser/old fool (Rajasthani)
  "khoosad": { s: 1, c: 4 }, // Miser/old fool (Rajasthani romanized)
  "छोरा हरामी": { s: 3, c: 4 }, // Bastard boy (Rajasthani)
  "chhora harami": { s: 3, c: 4 }, // Bastard boy (Rajasthani romanized)
  "लुगाई चोद": { s: 3, c: 5 }, // Wife fucker (Rajasthani)
  "lugai chod": { s: 3, c: 5 }, // Wife fucker (Rajasthani romanized)
  "टोबा ली": { s: 3, c: 4 }, // Shame on you (Rajasthani)
  "toba li": { s: 3, c: 4 }, // Shame on you (Rajasthani romanized)

  // ========================================
  // === Haryanvi Crossover Profanity ===
  // ========================================
  "ताऊ की गांड": { s: 3, c: 4 }, // Uncle's ass (Haryanvi)
  "tau ki gaand": { s: 3, c: 4 }, // Uncle's ass (Haryanvi romanized)
  "भैंस की गांड": { s: 3, c: 4 }, // Buffalo's ass (Haryanvi)
  "bhains ki gaand": { s: 3, c: 4 }, // Buffalo's ass (Haryanvi romanized)
  "छोरे तेरी मां की": { s: 3, c: 4 }, // Boy your mother's (Haryanvi insult)
  "chhore teri maa ki": { s: 3, c: 4 }, // Boy your mother's (Haryanvi romanized)
  "हरामी छोरा": { s: 3, c: 4 }, // Bastard boy (Haryanvi)
  "harami chhora": { s: 3, c: 4 }, // Bastard boy (Haryanvi romanized)
  "कमीने छोरा": { s: 3, c: 4 }, // Scoundrel boy (Haryanvi)
  "kamine chhora": { s: 3, c: 4 }, // Scoundrel boy (Haryanvi romanized)
  "तेरी ताई की": { s: 3, c: 4 }, // Your aunt's (Haryanvi insult)
  "teri tai ki": { s: 3, c: 4 }, // Your aunt's (Haryanvi romanized)
  "गांड मारने वाला": { s: 3, c: 5 }, // One who fucks asses (Haryanvi)
  "gaand marne wala": { s: 3, c: 5 }, // One who fucks asses (Haryanvi romanized)
  "गांड फट गई": { s: 3, c: 4 }, // Ass got ripped (scared, Haryanvi)
  "gaand fat gayi": { s: 3, c: 4 }, // Ass got ripped (Haryanvi romanized)
  "मां चुदा": { s: 5, c: 5 }, // Get your mother fucked (Haryanvi)
  "maa chuda": { s: 5, c: 5 }, // Get your mother fucked (Haryanvi romanized)
  "बहन चुदा": { s: 3, c: 5 }, // Get your sister fucked (Haryanvi)
  "behen chuda": { s: 3, c: 5 }, // Get your sister fucked (Haryanvi romanized)
  "लंड बहादुर": { s: 4, c: 4 }, // Dick hero (sarcastic, Haryanvi)
  "land bahadur": { s: 4, c: 4 }, // Dick hero (Haryanvi romanized)
  "चूत फाड़ दूँगा": { s: 4, c: 4 }, // I'll rip your vagina (Haryanvi)
  "chut fad dunga": { s: 4, c: 4 }, // I'll rip vagina (Haryanvi romanized)
  "छोरे की गांड मार": { s: 3, c: 5 }, // Fuck the boy's ass (Haryanvi)
  "chhore ki gaand maar": { s: 3, c: 5 }, // Fuck boy's ass (Haryanvi romanized)
  "तू छक्का है": { s: 3, c: 4 }, // You're a eunuch (Haryanvi)
  "tu chakka hai": { s: 3, c: 4 }, // You're a eunuch (Haryanvi romanized)
  "ताऊ चोद": { s: 3, c: 5 }, // Uncle fucker (Haryanvi)
  "tau chod": { s: 3, c: 5 }, // Uncle fucker (Haryanvi romanized)
  "भैंस चोद": { s: 3, c: 5 }, // Buffalo fucker (Haryanvi)
  "bhains chod": { s: 3, c: 5 }, // Buffalo fucker (Haryanvi romanized)

  // ========================================
  // === Punjabi Crossover Profanity ===
  // ========================================
  "ਪੈਂਚੋ": { s: 3, c: 4 }, // Short for behenchod (Punjabi)
  "paincho": { s: 3, c: 4 }, // Short for behenchod (Punjabi romanized)
  "ਕੁੱਤੇ ਦਾ ਪੁੱਤ": { s: 3, c: 4 }, // Dog's son (Punjabi)
  "kutte da putt": { s: 3, c: 4 }, // Dog's son (Punjabi romanized)
  "ਕੰਜਰ": { s: 3, c: 4 }, // Pimp (Punjabi)
  "ਕੰਜਰੀ": { s: 3, c: 4 }, // Pimp's woman (Punjabi)
  "kanjri": { s: 3, c: 4 }, // Pimp's woman (Punjabi romanized)
  "ਤੱਤੀ ਲੱਸੀ": { s: 3, c: 4 }, // Hot lassi (Punjabi derogatory)
  "tatti lassi": { s: 3, c: 4 }, // Hot lassi (Punjabi romanized)
  "ਛਡ ਯਾਰ ਮੱਚੋ": { s: 3, c: 4 }, // Leave it MC (Punjabi)
  "chhad yaar macho": { s: 3, c: 4 }, // Leave it MC (Punjabi romanized)
  "ਫੁੱਦੂ": { s: 4, c: 4 }, // Vagina (Punjabi)
  "fuddu": { s: 4, c: 4 }, // Vagina (Punjabi romanized)
  "ਫੁੱਦੀ": { s: 4, c: 4 }, // Vagina (Punjabi variant)
  "ਲੂਣ ਹਰਾਮ": { s: 3, c: 4 }, // Salt traitor (Punjabi)
  "loon haram": { s: 3, c: 4 }, // Salt traitor (Punjabi romanized)
  "ਤੇਰੀ ਮਾਂ ਦੀ": { s: 3, c: 4 }, // Your mother's (Punjabi insult)
  "teri maan di": { s: 3, c: 4 }, // Your mother's (Punjabi romanized)
  "ਤੇਰੀ ਪੈਂ ਦੀ": { s: 3, c: 4 }, // Your sister's (Punjabi insult)
  "teri pain di": { s: 3, c: 4 }, // Your sister's (Punjabi romanized)
  "ਚੂਤੜ": { s: 3, c: 4 }, // Buttocks (Punjabi vulgar)
  "chootar": { s: 3, c: 4 }, // Buttocks (Punjabi romanized)
  "ਪੁੱਠ": { s: 3, c: 4 }, // Ass (Punjabi)
  "putth": { s: 3, c: 4 }, // Ass (Punjabi romanized)
  "ਤੱਤੇ": { s: 4, c: 4 }, // Testicles (Punjabi)
  "teri phen di fuddi": { s: 4, c: 4 }, // Your sister's vagina (Punjabi romanized)
  "teri maa di fuddi": { s: 4, c: 4 }, // Your mother's vagina (Punjabi romanized)
  "kanjar da putt": { s: 3, c: 4 }, // Pimp's son (Punjabi romanized)
  "kanjri di": { s: 3, c: 4 }, // Pimp woman's (Punjabi romanized)
  "khotey da putt": { s: 3, c: 4 }, // Donkey's son (Punjabi romanized)
  "khotey di gaand": { s: 3, c: 4 }, // Donkey's ass (Punjabi romanized)
  "soor da putt": { s: 3, c: 4 }, // Pig's son (Punjabi romanized)
  "haramda": { s: 3, c: 4 }, // Bastard (Punjabi romanized)
  "haramdi": { s: 3, c: 4 }, // Bastard female (Punjabi romanized)
  "ullu da putt": { s: 3, c: 4 }, // Owl's son (Punjabi romanized)
  "laun": { s: 4, c: 4 }, // Dick (Punjabi romanized)
  "laun da baal": { s: 4, c: 4 }, // Dick hair (Punjabi romanized)
  "kutte di aulad": { s: 3, c: 4 }, // Dog's offspring (Punjabi romanized)

  // ========================================
  // === More Compound Madarchod Variations ===
  // ========================================
  "maadarchod": { s: 5, c: 5 }, // Motherfucker (variant)
  "maaderchood": { s: 5, c: 5 }, // Motherfucker (variant)
  "maader chod": { s: 5, c: 5 }, // Motherfucker (spaced)
  "maadar chod": { s: 5, c: 5 }, // Motherfucker (variant spaced)
  "madar ch0d": { s: 5, c: 5 }, // Motherfucker (evasion)
  "m@dar chod": { s: 5, c: 5 }, // Motherfucker (evasion)
  "mc bc bsdk": { s: 3, c: 5 }, // MC BC BSDK compound
  "emcee": { s: 3, c: 5 }, // MC phonetic
  "emcee beecee": { s: 3, c: 5 }, // MC BC phonetic

  // ========================================
  // === More Compound Behenchod Variations ===
  // ========================================
  "bhnchod": { s: 3, c: 5 }, // Sisterfucker (abbreviation)
  "behench0d": { s: 3, c: 5 }, // Sisterfucker (evasion)
  "b3henchod": { s: 3, c: 5 }, // Sisterfucker (evasion)
  "bahinchod": { s: 3, c: 5 }, // Sisterfucker (variant)
  "boginchod": { s: 3, c: 5 }, // Sisterfucker (dialectal)
  "bc sala": { s: 3, c: 4 }, // BC bastard
  "beecee": { s: 3, c: 5 }, // BC phonetic

  // ========================================
  // === More Body Part Insult Combinations ===
  // ========================================
  "chut ka bhoot": { s: 1, c: 4 }, // Vagina's ghost (idiot)
  "gaand ka bhoot": { s: 1, c: 4 }, // Ass's ghost (idiot)
  "gaand ka pakoda": { s: 4, c: 3 }, // Ass's fritter (useless)
  "lund ki topi": { s: 4, c: 3 }, // Dick's cap (foreskin insult)
  "chut ki dhool": { s: 4, c: 3 }, // Vagina's dust (worthless)
  "gaand ki dhool": { s: 4, c: 3 }, // Ass's dust (worthless)
  "lund ka kira": { s: 4, c: 3 }, // Dick's worm (worthless)
  "chut ka kira": { s: 4, c: 3 }, // Vagina's worm (worthless)
  "gaand ka kira": { s: 4, c: 3 }, // Ass's worm (annoying)
  "tatte ka paseena": { s: 4, c: 3 }, // Testicle sweat (disgusting)
  "lund ka makkhi": { s: 4, c: 3 }, // Dick's fly (worthless)
  "chut ka jhaag": { s: 4, c: 3 }, // Vagina's foam (worthless)
  "gaand ka maal": { s: 4, c: 5 }, // Ass's product (shit)
  "lund ka raita": { s: 4, c: 3 }, // Dick's raita (mess)
  "chut ka raita": { s: 4, c: 3 }, // Vagina's raita (mess)
  "gaand ka raita": { s: 4, c: 3 }, // Ass's raita (mess)
  "tatte ka halwa": { s: 4, c: 3 }, // Testicle halwa (mess)
  "lund ki safai": { s: 4, c: 3 }, // Dick's cleaning (degrading)
  "chut ki safai": { s: 4, c: 3 }, // Vagina's cleaning (degrading)
  "gaand ki safai": { s: 4, c: 3 }, // Ass's cleaning (degrading)
  "lund ka sipahi": { s: 5, c: 5 }, // Dick's soldier (sycophant)
  "chut ka naukri": { s: 4, c: 3 }, // Vagina's servant (degrading)
  "gaand ka chamcha": { s: 4, c: 3 }, // Ass's spoon (bootlicker)
  "lund ka chaata": { s: 4, c: 3 }, // Dick's licker (degrading)
  "chut ka chaata": { s: 4, c: 3 }, // Vagina's licker (degrading)
  "gaand ka chaata": { s: 4, c: 3 }, // Ass's licker (bootlicker)

  // ========================================
  // === Hinglish Internet Slang Extended ===
  // ========================================
  "bsdk nikal": { s: 2, c: 3 }, // BSDK get out
  "mc ki aulaad": { s: 2, c: 3 }, // MC's offspring
  "bc ki aulaad": { s: 2, c: 3 }, // BC's offspring
  "chutiye madarjaat": { s: 1, c: 4 }, // Idiot motherfucker
  "randi ki dukan": { s: 5, c: 4 }, // Prostitute's shop
  "lund pe baith": { s: 4, c: 3 }, // Sit on the dick
  "gaand mara bsdk": { s: 3, c: 5 }, // Fuck off BSDK
  "teri gaand tod dunga": { s: 3, c: 3 }, // I'll break your ass
  "teri chut mein bamboo": { s: 4, c: 3 }, // Bamboo in your vagina
  "tere muh mein lund": { s: 4, c: 3 }, // Dick in your mouth
  "lund choosle": { s: 4, c: 3 }, // Suck the dick (texting)
  "gaand marale": { s: 3, c: 5 }, // Get your ass fucked (texting)
  "chut dikha randi": { s: 5, c: 4 }, // Show vagina prostitute
  "lund se khel": { s: 4, c: 3 }, // Play with dick
  "gaand se nikal": { s: 3, c: 3 }, // Come out of the ass
  "chut mein ghus": { s: 4, c: 3 }, // Go into the vagina
  "gaand mein dum nahi": { s: 3, c: 3 }, // No courage (no strength in ass)
  "lund hilake soja": { s: 4, c: 4 }, // Shake dick and sleep (masturbate)
  "gaand phati padi hai": { s: 3, c: 3 }, // Ass is ripped (scared)
  "chut ka champion": { s: 4, c: 3 }, // Champion of vagina
  "gaand ka king": { s: 3, c: 3 }, // King of ass (sarcastic)
  "lund ka raja": { s: 4, c: 3 }, // King of dick (sarcastic)
  "tatte ke sardaar": { s: 4, c: 3 }, // Chief of testicles (sarcastic)
  "mc ki property": { s: 2, c: 3 }, // MC's property (insult)
  "bc ki dukaan": { s: 2, c: 3 }, // BC's shop (insult)
  "bsdk ki factory": { s: 2, c: 3 }, // BSDK's factory (insult)
  "tmkc ka member": { s: 2, c: 3 }, // TMKC's member
  "chutiye ka sara": { s: 1, c: 4 }, // Village of idiots
  "gandu ka baap": { s: 1, c: 4 }, // Father of assholes
  "randi ka mahol": { s: 5, c: 4 }, // Prostitute atmosphere
  "harami ka khandaan": { s: 3, c: 4 }, // Bastard's family
  "kamina ka baap": { s: 1, c: 4 }, // Father of scoundrels
  "laude ka fayda": { s: 4, c: 3 }, // Dick's benefit (useless)
  "chut ka fayda": { s: 4, c: 3 }, // Vagina's benefit (useless)
  "gaand ka fayda": { s: 3, c: 3 }, // Ass's benefit (useless)
  "mc ka beta": { s: 2, c: 3 }, // MC's son
  "bc ka beta": { s: 2, c: 3 }, // BC's son
  "mc ki beti": { s: 2, c: 3 }, // MC's daughter
  "bc ki beti": { s: 2, c: 3 }, // BC's daughter

  // ========================================
  // === Religious Insults (Hindi) ===
  // ========================================
  "मुल्ले": { s: 2, c: 3 }, // Muslims (derogatory plural)
  "mulle": { s: 2, c: 3 }, // Muslims (derogatory, romanized)
  "काफ़िर": { s: 2, c: 3 }, // Infidel (used as slur)
  "kafir": { s: 2, c: 3 }, // Infidel (romanized)
  "पंडू": { s: 2, c: 3 }, // Brahmin (derogatory)
  "pandu": { s: 2, c: 3 }, // Brahmin (derogatory, romanized)
  "तुल्ला": { s: 2, c: 3 }, // Slur for Muslims
  "tulla": { s: 2, c: 3 }, // Slur for Muslims (romanized)
  "मल्लू": { s: 2, c: 3 }, // Slur for South Indians
  "mallu": { s: 2, c: 3 }, // Slur for South Indians (romanized)
  "गोमांसी": { s: 2, c: 3 }, // Beef-eater (anti-Muslim)
  "gomansi": { s: 2, c: 3 }, // Beef-eater (romanized)
  "जिहादी": { s: 2, c: 3 }, // Jihadist (used as slur)
  "jihadi": { s: 2, c: 3 }, // Jihadist (romanized)
  "धर्मध्वजी": { s: 2, c: 3 }, // False religious person
  "dharmdhwaji": { s: 2, c: 3 }, // False religious (romanized)
  "ढोंगी बाबा": { s: 2, c: 3 }, // Fake holy man
  "dhongi baba": { s: 2, c: 3 }, // Fake holy man (romanized)
  "पोंगा पंडित": { s: 2, c: 3 }, // Hollow priest
  "ponga pandit": { s: 2, c: 3 }, // Hollow priest (romanized)
  "चमड़चोर": { s: 2, c: 3 }, // Skin thief (caste slur)
  "chamadchor": { s: 2, c: 3 }, // Skin thief (romanized)
  "भाटिया": { s: 2, c: 3 }, // Caste slur variant
  "bhatiya": { s: 2, c: 3 }, // Caste slur variant (romanized)

  // ========================================
  // === More Devanagari Compound Insults ===
  // ========================================
  "तेरी माँ की गांड में कुत्ता": { s: 3, c: 4 }, // Dog in your mother's ass
  "तेरे बाप की गांड में लंड": { s: 1, c: 4 }, // Dick in your father's ass
  "तेरी बहन की चूत में बम": { s: 4, c: 4 }, // Bomb in your sister's vagina
  "तेरी बीवी रंडी": { s: 5, c: 4 }, // Your wife is a prostitute
  "तेरा बाप भड़वा": { s: 1, c: 4 }, // Your father is a pimp
  "तेरी माँ छिनार": { s: 1, c: 4 }, // Your mother is an adulteress
  "तेरे खानदान की रंडी": { s: 5, c: 4 }, // Your lineage's prostitute
  "सारा खानदान हरामी": { s: 3, c: 4 }, // Entire lineage bastard
  "तेरी औकात कुत्ते की": { s: 1, c: 4 }, // Your status is of a dog
  "चूत में बांस": { s: 4, c: 4 }, // Bamboo in vagina
  "गांड में लट्ठ": { s: 3, c: 4 }, // Club in ass
  "लंड पे मूत": { s: 4, c: 4 }, // Piss on dick
  "चूत में उंगली": { s: 4, c: 4 }, // Finger in vagina
  "तेरी नानी की गांड": { s: 3, c: 4 }, // Your grandmother's ass
  "तेरे दादा की गांड": { s: 1, c: 4 }, // Your grandfather's ass
  "तेरी चाची की चूत": { s: 4, c: 4 }, // Your aunt's vagina
  "तेरे चाचा का लंड": { s: 4, c: 4 }, // Your uncle's dick
  "तेरी भाभी रंडी": { s: 5, c: 4 }, // Your sister-in-law prostitute
  "तेरा जीजा गांडू": { s: 3, c: 4 }, // Your brother-in-law asshole
  "मेरा लंड ले तेरे मुँह में": { s: 4, c: 4 }, // My dick in your mouth
  "तेरी गांड में मेरा लंड": { s: 4, c: 4 }, // My dick in your ass
  "तेरी चूत में मेरा लंड": { s: 4, c: 4 }, // My dick in your vagina
  "लंड काटके मुँह में डालूंगा": { s: 4, c: 4 }, // I'll cut your dick and put it in your mouth
  "गांड तोड़ के हाथ में दूंगा": { s: 3, c: 4 }, // I'll break your ass and hand it to you
  "चूत सिलवा दूंगा": { s: 4, c: 4 }, // I'll sew up your vagina

  // ========================================
  // === More Romanized Extended Insults ===
  // ========================================
  "teri maa ki gaand mein kutta": { s: 3, c: 5 }, // Dog in your mother's ass
  "tere baap ki gaand mein lund": { s: 1, c: 5 }, // Dick in your father's ass
  "teri behen ki chut mein bomb": { s: 4, c: 5 }, // Bomb in your sister's vagina
  "teri biwi randi": { s: 5, c: 5 }, // Your wife is a prostitute
  "tera baap bhadwa": { s: 1, c: 5 }, // Your father is a pimp
  "teri maa chhinar": { s: 1, c: 5 }, // Your mother is an adulteress
  "tere khandaan ki randi": { s: 5, c: 5 }, // Your lineage's prostitute
  "saara khandaan harami": { s: 3, c: 5 }, // Entire lineage bastard
  "teri aukaat kutte ki": { s: 1, c: 5 }, // Your status is of a dog
  "chut mein baans": { s: 4, c: 5 }, // Bamboo in vagina
  "gaand mein latth": { s: 3, c: 5 }, // Club in ass
  "lund pe moot": { s: 4, c: 5 }, // Piss on dick
  "teri naani ki gaand": { s: 3, c: 5 }, // Your grandmother's ass
  "tere daada ki gaand": { s: 1, c: 5 }, // Your grandfather's ass
  "teri chaachi ki chut": { s: 4, c: 5 }, // Your aunt's vagina
  "tere chaacha ka lund": { s: 4, c: 5 }, // Your uncle's dick
  "teri bhabhi randi": { s: 5, c: 5 }, // Your sister-in-law prostitute
  "tera jija gandu": { s: 3, c: 5 }, // Your brother-in-law asshole
  "mera lund le tere muh mein": { s: 4, c: 5 }, // My dick in your mouth
  "teri gaand mein mera lund": { s: 4, c: 5 }, // My dick in your ass
  "teri chut mein mera lund": { s: 4, c: 5 }, // My dick in your vagina
  "lund kaatke muh mein dalunga": { s: 4, c: 5 }, // Cut dick put in mouth
  "gaand todke haath mein dunga": { s: 3, c: 5 }, // Break ass hand it over
  "chut silwa dunga": { s: 4, c: 5 }, // Sew up vagina

  // ========================================
  // === More Evasion Spellings Extended ===
  // ========================================
  "m@darch0d": { s: 5, c: 5 }, // Motherfucker evasion
  "bhens ch0d": { s: 3, c: 5 }, // Sisterfucker evasion
  "choot1ya": { s: 1, c: 5 }, // Idiot evasion
  "h@rami": { s: 3, c: 5 }, // Bastard evasion
  "har@mi": { s: 3, c: 5 }, // Bastard evasion
  "r4ndi": { s: 5, c: 5 }, // Prostitute evasion
  "l0da": { s: 4, c: 5 }, // Dick evasion
  "bh0sd1ke": { s: 4, c: 5 }, // Vagina-born evasion
  "jh@nt": { s: 3, c: 5 }, // Pubic hair evasion
  "t@tti": { s: 3, c: 5 }, // Feces evasion
  "g@@nd": { s: 3, c: 5 }, // Ass evasion
  "l#nd": { s: 4, c: 5 }, // Dick evasion
  "bh@dwa": { s: 3, c: 5 }, // Pimp evasion
  "k@mina": { s: 3, c: 5 }, // Scoundrel evasion
  "k4mina": { s: 3, c: 5 }, // Scoundrel evasion
  "h1jra": { s: 3, c: 5 }, // Transgender evasion
  "ch@kka": { s: 3, c: 5 }, // Eunuch evasion
  "s@la": { s: 3, c: 5 }, // Bastard evasion
  "s@@la": { s: 3, c: 5 }, // Bastard evasion

  // ========================================
  // === Abbreviations & Internet Codes ===
  // ========================================
  "tmkgf": { s: 2, c: 3 }, // Teri maa ki gaand faad
  "tgkgm": { s: 2, c: 3 }, // Teri gaand ki gaand maar
  "ckd": { s: 2, c: 3 }, // Chut ka dhakkan
  "gkd": { s: 2, c: 3 }, // Gaand ka dhakkan
  "mkl": { s: 5, c: 5 }, // Madarchod ke laude
  "mc bc bkl": { s: 2, c: 3 }, // Triple abbreviation compound
  "lmdc": { s: 2, c: 3 }, // Lund mein dal chutiye
  "gmd": { s: 2, c: 3 }, // Gaand mein daal
  "cmb": { s: 2, c: 3 }, // Chut mein bamboo
  "gmb": { s: 2, c: 3 }, // Gaand mein bamboo
  "rkb": { s: 2, c: 3 }, // Randi ka bachcha
  "hkb": { s: 2, c: 3 }, // Harami ka bachcha
  "kkb": { s: 2, c: 3 }, // Kutte ka bachcha
  "skb": { s: 2, c: 3 }, // Suar ka bachcha
  "bkb": { s: 2, c: 3 }, // Bhosdi ka bachcha

  // ========================================
  // === Scatological Insults ===
  // ========================================
  "tatti khaa": { s: 3, c: 4 }, // Eat feces
  "goo khaa": { s: 3, c: 5 }, // Eat shit
  "moot pi le": { s: 3, c: 4 }, // Drink urine
  "paad sungh": { s: 3, c: 4 }, // Smell the fart
  "tatti ka keeda": { s: 3, c: 4 }, // Feces worm
  "goo ka keeda": { s: 3, c: 5 }, // Shit worm
  "tatti mein muh": { s: 3, c: 4 }, // Face in feces
  "goo mein lund": { s: 4, c: 5 }, // Dick in shit
  "hagna band kar": { s: 3, c: 5 }, // Stop shitting
  "mootna band kar": { s: 3, c: 4 }, // Stop pissing
  "paadna band kar": { s: 3, c: 4 }, // Stop farting
  "tatti se bhi ganda": { s: 3, c: 4 }, // Dirtier than feces
  "goo se bhi ghatiya": { s: 3, c: 5 }, // Worse than shit
  "nalli ka keeda": { s: 3, c: 4 }, // Drain worm
  "gutter ka keeda": { s: 3, c: 4 }, // Gutter worm
  "naali ka goo": { s: 3, c: 4 }, // Drain's feces
  "sewer ka chuha": { s: 3, c: 4 }, // Sewer's rat
  "kachra": { s: 3, c: 4 }, // Garbage
  "kachra ka dabba": { s: 3, c: 4 }, // Garbage bin
  "kachre ka keeda": { s: 3, c: 4 }, // Garbage worm
  "goo ka tukda": { s: 3, c: 4 }, // Piece of feces
  "moot ki dhaar": { s: 3, c: 4 }, // Stream of urine
  "paad ki badboo": { s: 3, c: 4 }, // Fart's stench

  // ========================================
  // === More Hinglish Gaming/Internet ===
  // ========================================
  "noob chutiya": { s: 1, c: 4 }, // Noob idiot
  "noob gandu": { s: 3, c: 3 }, // Noob asshole
  "noob mc": { s: 2, c: 3 }, // Noob MC
  "noob bc": { s: 2, c: 3 }, // Noob BC
  "gg chutiye": { s: 1, c: 4 }, // GG idiot
  "bloody gandu": { s: 3, c: 3 }, // Bloody asshole (Hinglish)
  "damn kamina": { s: 2, c: 3 }, // Damn scoundrel (Hinglish)
  "shit harami": { s: 3, c: 4 }, // Shit bastard (Hinglish)
  "fuck off bhosdike": { s: 4, c: 5 }, // Fuck off vagina-born (Hinglish)
  "get lost madarchod": { s: 5, c: 5 }, // Get lost motherfucker (Hinglish)
  "die bsdk": { s: 5, c: 5 }, // Die BSDK (Hinglish)
  "trash chutiya": { s: 1, c: 4 }, // Trash idiot (Hinglish gaming)
  "bot gandu": { s: 3, c: 3 }, // Bot asshole (Hinglish gaming)
  "hacker mc": { s: 2, c: 3 }, // Hacker MC (Hinglish gaming)
  "camper bsdk": { s: 2, c: 3 }, // Camper BSDK (Hinglish gaming)
  "lag se mara chutiya": { s: 1, c: 4 }, // Died from lag idiot (gaming)
  "uninstall kar bsdk": { s: 2, c: 3 }, // Uninstall BSDK (gaming)
  "delete kar chutiye": { s: 1, c: 4 }, // Delete it idiot (gaming)
  "aim kaha hai mc": { s: 2, c: 3 }, // Where's your aim MC (gaming)
  "carry nahi ho raha bc": { s: 2, c: 3 }, // Can't carry BC (gaming)
  "feeder mc": { s: 2, c: 3 }, // Feeder MC (gaming)
  "inter mc": { s: 2, c: 3 }, // Inter MC (gaming)
  "toxic gandu": { s: 3, c: 3 }, // Toxic asshole (gaming)
  "report kar bsdk": { s: 2, c: 3 }, // Report BSDK (gaming)
  "mute kar chutiye": { s: 1, c: 4 }, // Mute it idiot (gaming)
  "abandon kar mc": { s: 2, c: 3 }, // Abandon MC (gaming)
  "afk gandu": { s: 3, c: 3 }, // AFK asshole (gaming)

  // ========================================
  // === Extended Chutiya Variations ===
  // ========================================
  "chutiyapa kar raha": { s: 3, c: 4 }, // Doing idiocy
  "chutiya number 1": { s: 1, c: 5 }, // Idiot number 1
  "chutiya saala": { s: 3, c: 4 }, // Idiot bastard
  "chutiya bana raha": { s: 1, c: 4 }, // Making an idiot (of someone)
  "chutiya banana": { s: 1, c: 4 }, // To make an idiot
  "chutiya samjha hai": { s: 1, c: 4 }, // Think I'm an idiot?
  "chutiya samajh rakha hai": { s: 1, c: 4 }, // Have been taken for an idiot
  "chutiye ki tarah": { s: 1, c: 4 }, // Like an idiot
  "chutiye jaisa": { s: 1, c: 4 }, // Like an idiot (variant)
  "chutiye ka bhai": { s: 1, c: 4 }, // Idiot's brother
  "chutiye ka baap": { s: 1, c: 4 }, // Idiot's father
  "chutiye ka baccha": { s: 1, c: 4 }, // Idiot's child
  "chutiye ki maa": { s: 1, c: 4 }, // Idiot's mother
  "chutiye ki behen": { s: 1, c: 4 }, // Idiot's sister
  "puri chutiyagiri": { s: 3, c: 4 }, // Full idiocy
  "ekdum chutiya": { s: 1, c: 4 }, // Complete idiot
  "number ek chutiya": { s: 1, c: 4 }, // Number one idiot
  "pakka chutiya": { s: 1, c: 4 }, // Confirmed idiot

  // ========================================
  // === Extended Gandu Variations ===
  // ========================================
  "gandupanti": { s: 3, c: 4 }, // Asshole behavior
  "gandu saala": { s: 3, c: 4 }, // Asshole bastard
  "gandu number 1": { s: 3, c: 5 }, // Asshole number 1
  "gandu ki tarah": { s: 3, c: 4 }, // Like an asshole
  "gandu jaisa": { s: 3, c: 4 }, // Like an asshole (variant)
  "gandu ka bhai": { s: 3, c: 4 }, // Asshole's brother
  "gandu ka baccha": { s: 3, c: 4 }, // Asshole's child
  "gandu ki maa": { s: 3, c: 4 }, // Asshole's mother
  "pura gandu": { s: 3, c: 4 }, // Complete asshole
  "ekdum gandu": { s: 3, c: 4 }, // Complete asshole (variant)
  "pakka gandu": { s: 3, c: 4 }, // Confirmed asshole
  "gandu pan": { s: 3, c: 4 }, // Asshole-ness

  // ========================================
  // === Extended Bakchod Variations ===
  // ========================================
  "bakchodi pel raha": { s: 3, c: 5 }, // Doing bullshitting
  "bakchodi band kar": { s: 3, c: 5 }, // Stop bullshitting
  "bakchod sala": { s: 3, c: 4 }, // Bullshitter bastard
  "bakchodi mat kar": { s: 3, c: 5 }, // Don't bullshit
  "bakchod number 1": { s: 3, c: 5 }, // Bullshitter number 1
  "bakchod ki aulaad": { s: 3, c: 5 }, // Bullshitter's offspring
  "bakchodi mein expert": { s: 3, c: 5 }, // Expert in bullshitting
  "bakchodi ka king": { s: 3, c: 5 }, // King of bullshitting
  "bakchodi ka baap": { s: 1, c: 4 }, // Father of bullshitting
  "bakwas": { s: 3, c: 4 }, // Nonsense
  "bakwas band kar": { s: 3, c: 4 }, // Stop the nonsense
  "bakwas mat kar": { s: 3, c: 4 }, // Don't talk nonsense
  "bakwas ki dukaan": { s: 3, c: 4 }, // Shop of nonsense
  "bewakoofi": { s: 1, c: 4 }, // Foolishness
  "bewakoof banaya": { s: 1, c: 4 }, // Made a fool
  "bevda saala": { s: 1, c: 3 }, // Drunkard bastard
  "bhikarin": { s: 3, c: 4 }, // Female beggar (insult)

  // ========================================
  // === More Phonetic/Evasion Variants ===
  // ========================================
  "bee ess dee kay": { s: 3, c: 5 }, // BSDK phonetic
  "tee em kay see": { s: 3, c: 5 }, // TMKC phonetic
  "chootia": { s: 3, c: 5 }, // Chutiya phonetic variant
  "haarami": { s: 3, c: 5 }, // Harami phonetic variant
  "bhadvaa": { s: 3, c: 5 }, // Bhadwa phonetic variant
  "randee": { s: 3, c: 5 }, // Randi phonetic variant
  "bhosdikay": { s: 3, c: 5 }, // Bhosdike phonetic variant
  "saalaa": { s: 3, c: 5 }, // Saala phonetic variant
  "saalee": { s: 3, c: 5 }, // Saali phonetic variant
  "haramjaada": { s: 3, c: 5 }, // Haramzada phonetic variant
  "haramjaadi": { s: 3, c: 5 }, // Haramzadi phonetic variant
  "chaatna": { s: 3, c: 5 }, // To lick (vulgar context)
  "choosna": { s: 3, c: 5 }, // To suck (vulgar context)
  "chodna": { s: 3, c: 5 }, // To fuck
  "gaand maarna": { s: 3, c: 5 }, // To fuck ass
  "chut maarna": { s: 4, c: 5 }, // To fuck vagina
  "muth maarna": { s: 4, c: 5 }, // To masturbate
  "muth marle": { s: 4, c: 5 }, // Masturbate (imperative)
  "muth maar ke soja": { s: 4, c: 5 }, // Masturbate and sleep
  "hilake soja": { s: 4, c: 5 }, // Shake (masturbate) and sleep
  "jhadna": { s: 3, c: 5 }, // To ejaculate
  "jhad diya": { s: 3, c: 5 }, // Ejaculated

  // ========================================
  // === Threat-Based Insults ===
  // ========================================
  "teri gaand maar dunga": { s: 3, c: 5 }, // I'll fuck your ass
  "teri chut faad dunga": { s: 4, c: 4 }, // I'll rip your vagina
  "tera lund tod dunga": { s: 4, c: 4 }, // I'll break your dick
  "tere tatte masal dunga": { s: 4, c: 4 }, // I'll crush your testicles
  "teri maa ke saath": { s: 5, c: 5 }, // With your mother (threat)
  "teri behen ke saath": { s: 5, c: 5 }, // With your sister (threat)
  "teri biwi ke saath": { s: 5, c: 5 }, // With your wife (threat)
  "khandaan bhool jayega": { s: 1, c: 4 }, // Your lineage will be forgotten
  "neech ki maut marega": { s: 5, c: 5 }, // You'll die a lowly death
  "suar ki maut": { s: 5, c: 5 }, // Pig's death
  "naali mein girke marega": { s: 5, c: 5 }, // You'll die falling in a drain
  "gutter mein phenk dunga": { s: 1, c: 4 }, // I'll throw you in the gutter
  "kachre mein daal dunga": { s: 1, c: 4 }, // I'll put you in garbage
  "zinda gaad dunga": { s: 1, c: 4 }, // I'll bury you alive
  "haddi tod dunga": { s: 1, c: 4 }, // I'll break your bones
  "khaal udhed dunga": { s: 1, c: 4 }, // I'll skin you alive
  "cheer dunga": { s: 1, c: 4 }, // I'll rip you apart
  "phod dunga": { s: 1, c: 4 }, // I'll crack you
  "peet dunga": { s: 1, c: 4 }, // I'll beat you
  "maar dunga": { s: 1, c: 4 }, // I'll kill/beat you
  "jaan se maar dunga": { s: 1, c: 4 }, // I'll kill you
  "kaat ke phenk dunga": { s: 1, c: 4 }, // I'll cut and throw you

  // ========================================
  // === Extended Devanagari Sexual Insults ===
  // ========================================
  "तेरी माँ की चूत चाटूँगा": { s: 4, c: 4 }, // I'll lick your mother's pussy
  "तेरी बहन की चूत चाटूँगा": { s: 4, c: 4 }, // I'll lick your sister's pussy
  "तेरी माँ की गांड चाटूँगा": { s: 3, c: 4 }, // I'll lick your mother's ass
  "तेरी बहन की गांड चाटूँगा": { s: 3, c: 4 }, // I'll lick your sister's ass
  "तेरी माँ के मुम्मे दबाऊँगा": { s: 4, c: 4 }, // I'll squeeze your mother's breasts
  "तेरी बहन के मुम्मे दबाऊँगा": { s: 4, c: 4 }, // I'll squeeze your sister's breasts
  "तेरी माँ को उल्टा चोदूँगा": { s: 3, c: 5 }, // I'll fuck your mother upside down
  "तेरी बहन को उल्टा चोदूँगा": { s: 3, c: 5 }, // I'll fuck your sister upside down
  "तेरी माँ की चूत में हाथ डालूँगा": { s: 4, c: 4 }, // I'll put hand in your mother's pussy
  "तेरी माँ की चूत में पैर डालूँगा": { s: 4, c: 4 }, // I'll put foot in your mother's pussy
  "तेरा लंड काटूँगा": { s: 4, c: 4 }, // I'll cut your dick
  "तेरा लंड तोड़ दूँगा": { s: 4, c: 4 }, // I'll break your dick
  "तेरे तत्ते काटूँगा": { s: 4, c: 4 }, // I'll cut your balls
  "तेरे तत्ते मसल दूँगा": { s: 4, c: 4 }, // I'll crush your balls
  "तेरी माँ की चूत फाड़ दूँगा": { s: 4, c: 4 }, // I'll rip your mother's pussy
  "तेरी बहन की चूत फाड़ दूँगा": { s: 4, c: 4 }, // I'll rip your sister's pussy
  "तेरी माँ की गांड फाड़ दूँगा": { s: 3, c: 4 }, // I'll rip your mother's ass
  "तेरी बहन की गांड फाड़ दूँगा": { s: 3, c: 4 }, // I'll rip your sister's ass
  "रंडी का बच्चा तू": { s: 5, c: 4 }, // You whore's child
  "वेश्या का बच्चा तू": { s: 5, c: 4 }, // You prostitute's child
  "छिनाल का बच्चा तू": { s: 1, c: 4 }, // You slut's child
  "तेरी माँ बाज़ार की रंडी": { s: 5, c: 4 }, // Your mother is market whore
  "तेरी बहन बाज़ार की रंडी": { s: 5, c: 4 }, // Your sister is market whore
  "तेरी माँ सड़क की रंडी": { s: 5, c: 4 }, // Your mother is street whore
  "तेरी बहन सड़क की रंडी": { s: 5, c: 4 }, // Your sister is street whore
  "तेरी माँ गली की रंडी": { s: 5, c: 4 }, // Your mother is alley whore
  "तेरी माँ मोहल्ले की रंडी": { s: 5, c: 4 }, // Your mother is neighborhood whore
  "तेरी माँ शहर की रंडी": { s: 5, c: 4 }, // Your mother is city whore
  "तेरी माँ देश की रंडी": { s: 5, c: 4 }, // Your mother is country whore

  // ========================================
  // === Extended Romanized Sexual Insults ===
  // ========================================
  "teri maa ki chut chatunga": { s: 4, c: 5 }, // I'll lick your mother's pussy
  "teri behen ki chut chatunga": { s: 4, c: 5 }, // I'll lick your sister's pussy
  "teri maa ki gaand chatunga": { s: 3, c: 5 }, // I'll lick your mother's ass
  "teri behen ki gaand chatunga": { s: 3, c: 5 }, // I'll lick your sister's ass
  "teri maa ke mumme dabaunga": { s: 4, c: 5 }, // I'll squeeze your mother's breasts
  "teri behen ke mumme dabaunga": { s: 4, c: 5 }, // I'll squeeze your sister's breasts
  "teri maa ko ulta chodunga": { s: 3, c: 5 }, // I'll fuck your mother upside down
  "teri behen ko ulta chodunga": { s: 3, c: 5 }, // I'll fuck your sister upside down
  "teri maa ki chut mein haath dalunga": { s: 4, c: 5 }, // I'll put hand in your mother's pussy
  "teri maa ki chut mein pair dalunga": { s: 4, c: 5 }, // I'll put foot in your mother's pussy
  "tera lund katunga": { s: 4, c: 5 }, // I'll cut your dick
  "tere tatte katunga": { s: 4, c: 5 }, // I'll cut your balls
  "teri maa ki chut phaad dunga": { s: 4, c: 5 }, // I'll rip your mother's pussy
  "teri behen ki chut phaad dunga": { s: 4, c: 5 }, // I'll rip your sister's pussy
  "teri maa ki gaand phaad dunga": { s: 3, c: 5 }, // I'll rip your mother's ass
  "teri behen ki gaand phaad dunga": { s: 3, c: 5 }, // I'll rip your sister's ass
  "randi ka bachcha tu": { s: 5, c: 5 }, // You whore's child
  "veshya ka bachcha tu": { s: 5, c: 5 }, // You prostitute's child
  "chhinal ka bachcha tu": { s: 1, c: 5 }, // You slut's child
  "teri maa bazaar ki randi": { s: 5, c: 5 }, // Your mother is market whore
  "teri behen bazaar ki randi": { s: 5, c: 5 }, // Your sister is market whore
  "teri maa sadak ki randi": { s: 5, c: 5 }, // Your mother is street whore
  "teri behen sadak ki randi": { s: 5, c: 5 }, // Your sister is street whore
  "teri maa gali ki randi": { s: 5, c: 5 }, // Your mother is alley whore
  "teri maa mohalle ki randi": { s: 5, c: 5 }, // Your mother is neighborhood whore
  "teri maa shehar ki randi": { s: 5, c: 5 }, // Your mother is city whore
  "teri maa desh ki randi": { s: 5, c: 5 }, // Your mother is country whore

  // ========================================
  // === Extended Bhojpuri/Magahi/Maithili ===
  // ========================================
  "tohar maai ke chodi": { s: 3, c: 5 }, // I'll fuck your mother (Bhojpuri)
  "tohar bahini ke chodi": { s: 3, c: 5 }, // I'll fuck your sister (Bhojpuri)
  "tohar maai randi ba": { s: 5, c: 4 }, // Your mother is a whore (Bhojpuri)
  "tohar bahini randi ba": { s: 5, c: 4 }, // Your sister is a whore (Bhojpuri)
  "tohar maai ke bur me danda": { s: 4, c: 4 }, // Stick in your mother's pussy (Bhojpuri)
  "tohar maai ke bur me baans": { s: 4, c: 4 }, // Bamboo in your mother's pussy (Bhojpuri)
  "tohar bur me baans": { s: 4, c: 4 }, // Bamboo in your pussy (Bhojpuri)
  "tohar gaand me baans": { s: 3, c: 4 }, // Bamboo in your ass (Bhojpuri)
  "chodua kahin ke": { s: 3, c: 5 }, // Fucker (Bhojpuri)
  "burchod kahin ke": { s: 4, c: 5 }, // Pussy fucker (Bhojpuri)
  "gaandchod kahin ke": { s: 3, c: 5 }, // Ass fucker (Bhojpuri)
  "tohar maai ke bhosda": { s: 4, c: 4 }, // Your mother's pussy (Bhojpuri)
  "tohar maai ke land khai": { s: 4, c: 4 }, // Your mother eats dick (Bhojpuri)
  "tohar bahini ke land khai": { s: 4, c: 4 }, // Your sister eats dick (Bhojpuri)
  "harami ke baccha re": { s: 3, c: 4 }, // Bastard's child (Bhojpuri)
  "raand ke baccha re": { s: 5, c: 4 }, // Whore's child (Bhojpuri)
  "tohar maai ke chodi dhalaan me": { s: 3, c: 5 }, // I'll fuck your mother on the porch (Bhojpuri)
  "tohar maai sabke chode": { s: 5, c: 5 }, // Your mother fucks everyone (Bhojpuri)
  "tohar bahini sabke chode": { s: 3, c: 5 }, // Your sister fucks everyone (Bhojpuri)
  "tor mai ke chodi": { s: 3, c: 5 }, // I'll fuck your mother (Magahi)
  "tor mai randi he": { s: 5, c: 4 }, // Your mother is whore (Magahi)
  "tor bahin ke chodi": { s: 3, c: 5 }, // I'll fuck your sister (Magahi)
  "tor mai ke bur": { s: 4, c: 4 }, // Your mother's pussy (Magahi)
  "tor baap ke lauda": { s: 1, c: 4 }, // Your father's dick (Magahi)
  "tor mai ke gaand me danda": { s: 3, c: 4 }, // Stick in your mother's ass (Magahi)
  "tohar maay ke chodi": { s: 3, c: 5 }, // I'll fuck your mother (Maithili)
  "tohar maay randi chhi": { s: 5, c: 4 }, // Your mother is whore (Maithili)
  "tohar maay ke yoni": { s: 4, c: 4 }, // Your mother's pussy (Maithili)
  "tohar baap ke ling": { s: 1, c: 4 }, // Your father's dick (Maithili)

  // ========================================
  // === Extended Haryanvi/Rajasthani ===
  // ========================================
  "teri maa ki phuddi": { s: 4, c: 4 }, // Your mother's pussy (Haryanvi)
  "teri behen ki phuddi": { s: 4, c: 4 }, // Your sister's pussy (Haryanvi)
  "teri maa ki phuddi mein keel": { s: 4, c: 4 }, // Nail in your mother's pussy (Haryanvi)
  "teri maa ki phuddi mein danda": { s: 4, c: 4 }, // Stick in your mother's pussy (Haryanvi)
  "chhodya tera": { s: 3, c: 5 }, // Fucker (Haryanvi)
  "phuddi ka": { s: 4, c: 4 }, // Of pussy (Haryanvi)
  "teri maa ko chhodunga": { s: 3, c: 5 }, // I'll fuck your mother (Haryanvi)
  "teri behen ko chhodunga": { s: 3, c: 5 }, // I'll fuck your sister (Haryanvi)
  "randi ki bachchi": { s: 5, c: 4 }, // Whore's daughter (Haryanvi)
  "chhinal ki bachchi": { s: 3, c: 4 }, // Slut's daughter (Haryanvi)
  "thaari maa ri chut": { s: 4, c: 4 }, // Your mother's pussy (Rajasthani)
  "thaari behen ri chut": { s: 4, c: 4 }, // Your sister's pussy (Rajasthani)
  "thaari maa ro bhosda": { s: 4, c: 4 }, // Your mother's pussy (Rajasthani)
  "thaari maa ne chodu": { s: 3, c: 5 }, // I'll fuck your mother (Rajasthani)
  "thaari behen ne chodu": { s: 3, c: 5 }, // I'll fuck your sister (Rajasthani)
  "randi ko bachcho": { s: 5, c: 4 }, // Whore's child (Rajasthani)
  "chhinal ko bachcho": { s: 3, c: 4 }, // Slut's child (Rajasthani)
  "thaari maa bazaar ri randi": { s: 5, c: 4 }, // Your mother is market whore (Rajasthani)
  "thaari maa gali ri randi": { s: 5, c: 4 }, // Your mother is alley whore (Rajasthani)
  "thaari maa gaon ri randi": { s: 5, c: 4 }, // Your mother is village whore (Rajasthani)

  // ========================================
  // === Extended Gujarati Crossover ===
  // ========================================
  "tari maa ni chut": { s: 4, c: 4 }, // Your mother's pussy (Gujarati)
  "tari behen ni chut": { s: 4, c: 4 }, // Your sister's pussy (Gujarati)
  "tari maa no bhosdo": { s: 4, c: 4 }, // Your mother's pussy (Gujarati)
  "tari maa ne chodiyo": { s: 3, c: 5 }, // Fucked your mother (Gujarati)
  "tari behen ne chodiyo": { s: 3, c: 5 }, // Fucked your sister (Gujarati)
  "chodyo tari maa ne": { s: 3, c: 5 }, // Fucked your mother (Gujarati alt)
  "randi no chhokro": { s: 5, c: 4 }, // Whore's boy (Gujarati)
  "randi ni chhokri": { s: 5, c: 4 }, // Whore's girl (Gujarati)
  "veshya no chhokro": { s: 5, c: 4 }, // Prostitute's boy (Gujarati)
  "tari maa randi chhe": { s: 5, c: 4 }, // Your mother is whore (Gujarati)
  "tari behen randi chhe": { s: 5, c: 4 }, // Your sister is whore (Gujarati)
  "taro baap gaandu chhe": { s: 1, c: 4 }, // Your father is a faggot (Gujarati)
  "bhenchod gujarati": { s: 3, c: 5 }, // Sister fucker Gujarati
  "madarchod gujarati": { s: 5, c: 5 }, // Mother fucker Gujarati
  "gheli chut": { s: 4, c: 4 }, // Crazy pussy (Gujarati)
  "gando lodo": { s: 4, c: 4 }, // Crazy dick (Gujarati)
  "tari maa ni gaand": { s: 3, c: 4 }, // Your mother's ass (Gujarati)
  "tari behen ni gaand": { s: 3, c: 4 }, // Your sister's ass (Gujarati)
  "gaandio tu": { s: 3, c: 4 }, // Faggot you (Gujarati)
  "chakko tu": { s: 3, c: 4 }, // Eunuch you (Gujarati)

  // ========================================
  // === Extended Punjabi Crossover ===
  // ========================================
  "teri maa di phuddi": { s: 4, c: 4 }, // Your mother's pussy (Punjabi)
  "teri bhain di phuddi": { s: 4, c: 4 }, // Your sister's pussy (Punjabi)
  "teri maa da bhosda": { s: 4, c: 4 }, // Your mother's pussy (Punjabi)
  "teri maa nu chodaan": { s: 3, c: 5 }, // I'll fuck your mother (Punjabi)
  "teri bhain nu chodaan": { s: 3, c: 5 }, // I'll fuck your sister (Punjabi)
  "randi da puttar": { s: 5, c: 4 }, // Whore's son (Punjabi)
  "randi di dhee": { s: 5, c: 4 }, // Whore's daughter (Punjabi)
  "kanjri da puttar": { s: 5, c: 4 }, // Whore's son (Punjabi alt)
  "kanjri di dhee": { s: 5, c: 4 }, // Whore's daughter (Punjabi alt)
  "teri maa randi aa": { s: 5, c: 4 }, // Your mother is whore (Punjabi)
  "teri bhain randi aa": { s: 5, c: 4 }, // Your sister is whore (Punjabi)
  "penchod tu": { s: 3, c: 5 }, // Sister fucker you (Punjabi)
  "maachod tu": { s: 5, c: 5 }, // Mother fucker you (Punjabi)
  "lann da tu": { s: 4, c: 4 }, // Of dick you (Punjabi)
  "phuddu tu": { s: 4, c: 4 }, // Pussy you (Punjabi)
  "teri maa di gaand": { s: 3, c: 4 }, // Your mother's ass (Punjabi)
  "teri bhain di gaand": { s: 3, c: 4 }, // Your sister's ass (Punjabi)
  "gaandu oye": { s: 3, c: 4 }, // Faggot hey (Punjabi)
  "chakke oye": { s: 3, c: 4 }, // Eunuch hey (Punjabi)
  "teri maa nu kutta chodda": { s: 3, c: 5 }, // Dog fucks your mother (Punjabi)

  // ========================================
  // === Extended Emasculation Insults (Hindi) ===
  // ========================================
  "तेरा लंड नहीं खड़ा होता": { s: 4, c: 4 }, // Your dick can't get up
  "तेरा लंड काम नहीं करता": { s: 4, c: 4 }, // Your dick doesn't work
  "तेरा लंड मर गया": { s: 5, c: 5 }, // Your dick died
  "तू नपुंसक है": { s: 1, c: 4 }, // You are impotent
  "तू हिजड़ा है": { s: 1, c: 4 }, // You are a hijra
  "तेरा लंड कीड़े जैसा": { s: 4, c: 4 }, // Your dick is like a worm
  "तेरा लंड उंगली जैसा": { s: 4, c: 4 }, // Your dick is like a finger
  "तेरा लंड माचिस जैसा": { s: 4, c: 4 }, // Your dick is like a matchstick
  "tera lund nahi khada hota": { s: 4, c: 4 }, // Your dick can't get up
  "tera lund kaam nahi karta": { s: 4, c: 4 }, // Your dick doesn't work
  "tera lund mar gaya": { s: 5, c: 5 }, // Your dick died
  "tu napunsak hai": { s: 1, c: 4 }, // You are impotent
  "tu hijra hai": { s: 1, c: 4 }, // You are a hijra
  "tu chhakka hai": { s: 1, c: 4 }, // You are a eunuch
  "tera lund keede jaisa": { s: 4, c: 4 }, // Your dick is like a worm
  "tera lund ungli jaisa": { s: 4, c: 4 }, // Your dick is like a finger
  "tera lund maachis jaisa": { s: 4, c: 4 }, // Your dick is like a matchstick

  // ========================================
  // === Extended Body Part Combos (Hindi) ===
  // ========================================
  "बड़ी चूत की औरत": { s: 4, c: 3 }, // Big pussy woman
  "छोटे लंड का आदमी": { s: 4, c: 3 }, // Small dick man
  "बड़ी गांड का आदमी": { s: 4, c: 3 }, // Big ass man
  "छोटे तत्ते का आदमी": { s: 4, c: 3 }, // Small balls man
  "टेढ़े लंड का आदमी": { s: 4, c: 3 }, // Crooked dick man
  "ढीली चूत की औरत": { s: 4, c: 3 }, // Loose pussy woman
  "लटकी हुई चूचियाँ": { s: 4, c: 3 }, // Saggy breasts
  "लटका हुआ लंड": { s: 4, c: 3 }, // Saggy dick
  "badi chut ki aurat": { s: 4, c: 3 }, // Big pussy woman
  "chhote lund ka aadmi": { s: 4, c: 3 }, // Small dick man
  "badi gaand ka aadmi": { s: 4, c: 3 }, // Big ass man
  "chhote tatte ka aadmi": { s: 4, c: 3 }, // Small balls man
  "tedhe lund ka aadmi": { s: 4, c: 3 }, // Crooked dick man
  "dheeli chut ki aurat": { s: 4, c: 3 }, // Loose pussy woman
  "latki hui chuchiya": { s: 4, c: 3 }, // Saggy breasts
  "latka hua lund": { s: 4, c: 3 }, // Saggy dick

  // ========================================
  // === Extended Scatological (Hindi) ===
  // ========================================
  "तेरे मुँह में गू डालूँगा": { s: 3, c: 5 }, // I'll put shit in your mouth
  "तेरे मुँह में मूतूँगा": { s: 3, c: 4 }, // I'll piss in your mouth
  "तेरे खाने में गू डालूँगा": { s: 3, c: 5 }, // I'll put shit in your food
  "तेरे खाने में मूत डालूँगा": { s: 3, c: 4 }, // I'll put piss in your food
  "तेरी माँ के मुँह में गू": { s: 3, c: 5 }, // Shit in your mother's mouth
  "तेरी बहन के मुँह में गू": { s: 3, c: 5 }, // Shit in your sister's mouth
  "गू खोर तू": { s: 3, c: 5 }, // You shit eater
  "मूत खोर तू": { s: 3, c: 4 }, // You piss drinker
  "हगू चूतिया": { s: 1, c: 4 }, // Shit idiot
  "मूतू चूतिया": { s: 1, c: 4 }, // Piss idiot
  "पाद खोर तू": { s: 3, c: 4 }, // You fart sniffer
  "tere munh mein gu dalunga": { s: 3, c: 5 }, // I'll put shit in your mouth
  "tere munh mein mutunga": { s: 3, c: 4 }, // I'll piss in your mouth
  "tere khane mein gu dalunga": { s: 3, c: 5 }, // I'll put shit in your food
  "tere khane mein mut dalunga": { s: 3, c: 4 }, // I'll put piss in your food
  "teri maa ke munh mein gu": { s: 3, c: 5 }, // Shit in your mother's mouth
  "teri behen ke munh mein gu": { s: 3, c: 5 }, // Shit in your sister's mouth
  "gu khor tu": { s: 3, c: 5 }, // You shit eater
  "mut khor tu": { s: 3, c: 4 }, // You piss drinker
  "hagu chutiya": { s: 1, c: 4 }, // Shit idiot
  "mutu chutiya": { s: 1, c: 4 }, // Piss idiot
  "paad khor tu": { s: 3, c: 4 }, // You fart sniffer

  // ========================================
  // === Extended Abuse Phrases (Hindi) ===
  // ========================================
  "teri zindagi ki koi keemat nahi": { s: 3, c: 4 }, // Your life has no value
  "tu paida hi na hota toh achha hota": { s: 3, c: 4 }, // Better if you weren't born
  "teri maa tere baap ko nahi jaanti": { s: 1, c: 4 }, // Your mother doesn't know your father
  "tera baap kaun hai koi nahi jaanta": { s: 1, c: 4 }, // Nobody knows who your father is
  "teri maa ne tujhe kachra mein phenka tha": { s: 3, c: 4 }, // Your mother threw you in garbage
  "tujhe koi nahi chahta": { s: 3, c: 4 }, // Nobody wants you
  "tera munh dekh ke log thukte hain": { s: 3, c: 4 }, // People spit seeing your face
  "tera naam sunke log haste hain": { s: 3, c: 4 }, // People laugh hearing your name
  "teri family mein sab randi": { s: 5, c: 4 }, // Everyone in your family is whore
  "teri family mein sab harami": { s: 3, c: 4 }, // Everyone in your family is bastard
  "teri khandaan mein sab chodu": { s: 3, c: 5 }, // Everyone in your lineage is fucker
  "तेरी ज़िन्दगी की कोई कीमत नहीं": { s: 3, c: 4 }, // Your life has no value
  "तू पैदा ही ना होता तो अच्छा होता": { s: 3, c: 4 }, // Better if you weren't born
  "तेरी माँ तेरे बाप को नहीं जानती": { s: 1, c: 4 }, // Your mother doesn't know your father
  "तेरा बाप कौन है कोई नहीं जानता": { s: 1, c: 4 }, // Nobody knows who your father is
  "तुझे कोई नहीं चाहता": { s: 3, c: 4 }, // Nobody wants you
  "तेरा मुँह देखके लोग थूकते हैं": { s: 3, c: 4 }, // People spit seeing your face
  "तेरा नाम सुनके लोग हँसते हैं": { s: 3, c: 4 }, // People laugh hearing your name
  "तेरी फैमिली में सब रंडी": { s: 5, c: 4 }, // Everyone in your family is whore
  "तेरी फैमिली में सब हरामी": { s: 3, c: 4 }, // Everyone in your family is bastard
  "तेरी खानदान में सब चोदू": { s: 3, c: 5 }, // Everyone in your lineage is fucker

  // ========================================
  // === Extended Internet/Gaming Hindi ===
  // ========================================
  "noob saala madarchod": { s: 5, c: 5 }, // Noob motherfucker
  "noob saala bhenchod": { s: 3, c: 5 }, // Noob sisterfucker
  "noob saala chutiya": { s: 1, c: 4 }, // Noob idiot
  "camper madarchod": { s: 5, c: 5 }, // Camper motherfucker
  "camper bhenchod": { s: 3, c: 5 }, // Camper sisterfucker
  "hacker madarchod": { s: 5, c: 5 }, // Hacker motherfucker
  "hacker bhenchod": { s: 3, c: 5 }, // Hacker sisterfucker
  "feeder madarchod": { s: 5, c: 5 }, // Feeder motherfucker
  "feeder bhenchod": { s: 3, c: 5 }, // Feeder sisterfucker
  "troll madarchod": { s: 5, c: 5 }, // Troll motherfucker
  "toxic madarchod": { s: 5, c: 5 }, // Toxic motherfucker
  "afk madarchod": { s: 5, c: 5 }, // AFK motherfucker
  "gg madarchod": { s: 5, c: 5 }, // GG motherfucker
  "ez madarchod": { s: 5, c: 5 }, // EZ motherfucker
  "gg lund choos": { s: 4, c: 3 }, // GG suck dick
  "ez lund choos": { s: 4, c: 3 }, // EZ suck dick
  "game chhod madarchod": { s: 5, c: 5 }, // Leave game motherfucker
  "uninstall kar madarchod": { s: 5, c: 5 }, // Uninstall motherfucker
  "delete kar bhenchod": { s: 3, c: 5 }, // Delete sisterfucker
  "lag ki maa ki chut": { s: 3, c: 5 }, // Fuck lag's mother
  "ping ki maa ki chut": { s: 3, c: 5 }, // Fuck ping's mother
  "server ki maa ki chut": { s: 3, c: 5 }, // Fuck server's mother
  "report karunga madarchod": { s: 5, c: 5 }, // I'll report motherfucker
  "stream sniper madarchod": { s: 5, c: 5 }, // Stream sniper motherfucker

  // ========================================
  // === Extended Animal Insults (Hindi) ===
  // ========================================
  "कुत्ते की माँ का": { s: 1, c: 4 }, // Dog's mother's
  "सुअर की माँ का": { s: 1, c: 4 }, // Pig's mother's
  "गधे की माँ का": { s: 1, c: 4 }, // Donkey's mother's
  "बंदर की माँ का": { s: 1, c: 4 }, // Monkey's mother's
  "बकरी चोद": { s: 3, c: 5 }, // Goat fucker
  "गाय चोद": { s: 3, c: 5 }, // Cow fucker
  "घोड़ी चोद": { s: 3, c: 5 }, // Mare fucker
  "कुतिया की औलाद": { s: 1, c: 4 }, // Bitch's offspring
  "सुअरनी की औलाद": { s: 1, c: 4 }, // Sow's offspring
  "kutte ki maa ka": { s: 1, c: 4 }, // Dog's mother's
  "suar ki maa ka": { s: 1, c: 4 }, // Pig's mother's
  "gadhe ki maa ka": { s: 1, c: 4 }, // Donkey's mother's
  "bandar ki maa ka": { s: 1, c: 4 }, // Monkey's mother's
  "bakri chod": { s: 3, c: 5 }, // Goat fucker
  "gaay chod": { s: 3, c: 5 }, // Cow fucker
  "ghodi chod": { s: 3, c: 5 }, // Mare fucker
  "kutiya ki aulad": { s: 1, c: 4 }, // Bitch's offspring
  "suarni ki aulad": { s: 1, c: 4 }, // Sow's offspring
  // ========================================
  // === Extended Hindi/Hinglish Words ===
  // ========================================
  "aand": { s: 3, c: 4 }, // Testicles
  "aandu": { s: 3, c: 4 }, // Testicle (slang)
  "balatkar": { s: 5, c: 5 }, // Rape
  "beti chod": { s: 5, c: 5 }, // Daughter fucker
  "bhadve": { s: 3, c: 4 }, // Pimp / prostitute (variant)
  "bhandve": { s: 3, c: 4 }, // Pimp / prostitute (variant)
  "bhootni ke": { s: 3, c: 4 }, // Ghost's offspring (insult)
  "bhosadi ke": { s: 5, c: 5 }, // Vagina (insult, variant)
  "boobe": { s: 3, c: 3 }, // Breasts (slang)
  "chinki": { s: 4, c: 4 }, // Racial slur against East Asians
  "chooche": { s: 3, c: 3 }, // Breasts (slang)
  "choochi": { s: 3, c: 3 }, // Breasts (slang)
  "choot ke baal": { s: 3, c: 4 }, // Pubic hair (vulgar)
  "chuche": { s: 3, c: 3 }, // Breasts (slang)
  "chuchi": { s: 3, c: 3 }, // Breasts (slang)
  "chudai khanaa": { s: 3, c: 5 }, // Brothel (vulgar)
  "chudan chudai": { s: 3, c: 5 }, // Sexual intercourse (vulgar)
  "chut ke dhakkan": { s: 3, c: 4 }, // Vagina lid (insult)
  "chut maarli": { s: 3, c: 5 }, // Vagina fuck (vulgar)
  "chutadd": { s: 3, c: 4 }, // Buttocks (vulgar, variant)
  "chutan": { s: 3, c: 4 }, // Vagina (vulgar, variant)
  "gaandufad": { s: 3, c: 4 }, // Anus tear (vulgar)
  "gasti": { s: 3, c: 4 }, // Prostitute (variant)
  "ghassa": { s: 3, c: 4 }, // Slut (vulgar)
  "ghasti": { s: 3, c: 4 }, // Prostitute (variant)
  "hawas": { s: 2, c: 3 }, // Lust / greed
  "hawas ke pujari": { s: 2, c: 3 }, // Worshipper of lust
  "jhant chaatu": { s: 3, c: 4 }, // Pubic hair licker (vulgar)
  "jhant ke baal": { s: 3, c: 4 }, // Pubic hair (vulgar)
  "kamine": { s: 2, c: 3 }, // Scoundrel / vile person
  "kutta kamina": { s: 2, c: 3 }, // Dog scoundrel (insult)
  "kutte ki jat": { s: 2, c: 3 }, // Dog caste (insult)
  "lundure": { s: 3, c: 4 }, // Penis (vulgar, variant)
  "maa ki chut": { s: 5, c: 5 }, // Mother's vagina (insult)
  "mooh mein le": { s: 3, c: 5 }, // Take it in your mouth (vulgar)
  "mutth": { s: 3, c: 4 }, // Masturbation (vulgar)
  "najayaz": { s: 2, c: 3 }, // Illegitimate
  "najayaz aulaad": { s: 2, c: 3 }, // Illegitimate offspring
  "najayaz paidaish": { s: 2, c: 3 }, // Illegitimate birth
  "paki": { s: 5, c: 5 }, // Racial slur against South Asians
  "patakha": { s: 1, c: 2 }, // Firecracker (used as sexualised compliment)
  "saala kutta": { s: 2, c: 3 }, // Brother-in-law dog (insult)
  "saali kutti": { s: 2, c: 3 }, // Sister-in-law bitch (insult)
  "saali randi": { s: 3, c: 4 }, // Sister-in-law whore (insult)
  "teri maa ka bhosada": { s: 5, c: 5 }, // Your mother's vagina (insult)
  "teri maa ka boba chusu": { s: 5, c: 5 }, // Suck your mother's breast (insult)
};


export default hindiBadWords;

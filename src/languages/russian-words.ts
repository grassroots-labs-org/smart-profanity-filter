/**
 * Russian profanity words list
 * Contains common profanities, insults, and offensive terms. Includes variations.
 * ⚠️ Warning: This file contains explicit language in Russian
 */
const _d: Record<string, [number, number]> = {
  // Core мат (mat) - strongest Russian profanity
  "хуй": [4, 4], // Dick
  "нахуй": [3, 5], // Fuck off / to hell
  "пошёл нахуй": [3, 5], // Go fuck yourself
  "иди нахуй": [3, 5], // Go fuck yourself
  "хуёвый": [3, 5], // Shitty / crappy
  "хуйня": [3, 5], // Bullshit / nonsense
  "охуеть": [3, 5], // To be stunned / holy fuck
  "пизда": [5, 5], // Cunt
  "пиздец": [3, 5], // Fucking disaster / the end
  "пиздёж": [3, 5], // Bullshit / lies
  "пиздатый": [3, 5], // Fucking awesome
  "блядь": [5, 5], // Whore / fuck (exclamation)
  "блять": [3, 5], // Fuck (exclamation, variant spelling)
  "ебать": [3, 5], // To fuck
  "ебаный": [3, 5], // Fucking (adj)
  "ёбаный": [3, 5], // Fucking (adj, with ё)
  "ёб твою мать": [3, 5], // Fuck your mother
  "заебал": [3, 5], // Fed up / annoyed the fuck out of
  "заебись": [3, 5], // Fucking great
  "выблядок": [3, 4], // Bastard child

  // Strong insults
  "сука": [1, 4], // Bitch
  "сукин сын": [1, 4], // Son of a bitch
  "сучка": [1, 4], // Little bitch
  "мудак": [4, 4], // Asshole / dickhead
  "ублюдок": [3, 4], // Bastard
  "ублюдки": [3, 4], // Bastards (plural)
  "говнюк": [3, 5], // Shithead
  "говнюки": [3, 5], // Shitheads (plural)
  "засранец": [3, 5], // Little shit
  "дерьмо": [3, 5], // Shit
  "дерьмовый": [3, 5], // Shitty
  "гребаный": [3, 5], // Fucking / damned
  "долбаный": [3, 5], // Fucking / damned
  "козел": [3, 4], // Goat / asshole
  "мразь": [1, 4], // Scum
  "тварь": [1, 4], // Creature / scumbag
  "пидор": [5, 4], // Faggot (homophobic slur)
  "пидорас": [5, 4], // Faggot (homophobic slur, variant)
  "гондон": [1, 4], // Condom / scumbag

  // Slurs
  "негр": [5, 4], // Negro (offensive)
  "нигга": [5, 4], // N-word (transliteration)
  "ниггер": [5, 4], // N-word (transliteration)
  "ниггеры": [5, 4], // N-word plural (transliteration)
  "педик": [5, 4], // Fag (homophobic slur)
  "педики": [5, 4], // Fags (homophobic slur, plural)

  // Sexual / anatomical
  "член": [4, 4], // Penis / member
  "залупа": [4, 4], // Glans / dickhead
  "манда": [5, 5], // Cunt (vulgar)
  "жопа": [3, 4], // Ass
  "сиська": [4, 4], // Tit
  "сиськи": [4, 4], // Tits
  "влагалище": [4, 4], // Vagina
  "вульва": [4, 4], // Vulva
  "мошонка": [4, 4], // Scrotum
  "анальный": [3, 4], // Anal
  "минет": [4, 5], // Blowjob
  "кумшот": [3, 4], // Cumshot
  "оргазм": [3, 4], // Orgasm
  "сперма": [3, 4], // Sperm / cum
  "эякулировать": [3, 4], // To ejaculate
  "эякуляция": [3, 4], // Ejaculation
  "мастурбировать": [4, 4], // To masturbate
  "дрочить": [4, 4], // To jerk off
  "фаллоимитатор": [3, 4], // Dildo

  // Other insults / vulgar
  "шлюха": [5, 4], // Slut / whore
  "шлюхи": [5, 4], // Sluts / whores (plural)
  "шалава": [1, 4], // Slut
  "потаскуха": [1, 4], // Harlot / slut
  "стерва": [1, 4], // Bitch / shrew
  "стервы": [1, 4], // Bitches (plural)
  "сутенер": [1, 4], // Pimp
  "киска": [4, 4], // Pussy (slang)
  "трахаться": [3, 5], // To fuck (reflexive)
  "проклятый": [1, 4], // Damned / cursed
  "садист": [1, 4], // Sadist
  "порно": [1, 4], // Porn
  "порнография": [1, 4], // Pornography
  "черт возьми": [1, 4], // Damn it
  "кибер-трах": [3, 5], // Cyberfuck

  // Bodily functions
  "срать": [2, 5], // To shit
  "ссать": [2, 4], // To piss
  "моча": [1, 3], // Urine / piss
  "какашка": [1, 4], // Poop

  // Additional Russian мат and vulgar expressions
  "блядина": [5, 4], // Whore (augmentative)
  "блядство": [5, 4], // Whoredom
  "блядовать": [5, 4], // To whore around
  "выёбываться": [3, 4], // To show off / act tough
  "говно": [3, 5], // Shit
  "говноед": [3, 5], // Shit eater
  "давалка": [3, 4], // Easy woman (vulgar)
  "долбоёб": [1, 4], // Dumbfuck
  "дрочила": [3, 4], // Wanker
  "ёбанат": [3, 5], // Crazy fucker
  "ёбаный в рот": [3, 5], // Fucked in the mouth
  "ёб твою": [3, 5], // Fuck your (truncated)
  "ёбарь": [3, 5], // Fucker
  "ёбнутый": [3, 5], // Crazy / fucked up
  "залупаться": [4, 4], // To be a dick about things
  "захуярить": [3, 4], // To do something intensely
  "мандавошка": [3, 4], // Pubic louse (insult)
  "мудила": [1, 4], // Dumbass
  "мудозвон": [4, 4], // Dickhead (lit. ball-ringer)
  "нахер": [3, 5], // To hell / fuck off (euphemistic)
  "обосраться": [3, 5], // To shit oneself
  "отъебись": [3, 5], // Fuck off
  "пердеть": [1, 4], // To fart
  "пердун": [1, 4], // Farter / old fart
  "пиздабол": [3, 4], // Liar (vulgar)
  "пиздануть": [3, 4], // To hit / to say something crazy
  "пиздолиз": [4, 4], // Pussy licker / ass-kisser
  "пиздюк": [3, 5], // Little shit
  "подонок": [3, 4], // Scum
  "придурок": [1, 4], // Idiot
  "распиздяй": [3, 4], // Irresponsible person (vulgar)
  "сосать": [3, 4], // To suck
  "сраный": [3, 5], // Shitty
  "сучий": [3, 4], // Bitchy
  "трахать": [3, 5], // To fuck
  "уёбище": [1, 4], // Ugly freak (vulgar)
  "уёбок": [3, 5], // Freak / piece of shit
  "хер": [4, 4], // Dick (milder than хуй)
  "хуесос": [4, 4], // Cocksucker
  "хуила": [4, 4], // Big dick / asshole
  "хуёво": [3, 5], // Shitty (adverb)
  "целка": [3, 4], // Virgin (vulgar)
  "чмо": [1, 4], // Loser / freak
  "чмошник": [1, 4], // Loser
  "шваль": [3, 4], // Riff-raff
  "шлёндра": [3, 4], // Slut

  // хуй derivatives
  "похуй": [3, 5], // Don't give a fuck
  "похуизм": [4, 5], // Not-giving-a-fuck attitude
  "похуист": [3, 5], // One who doesn't give a fuck
  "нахуярить": [3, 4], // To do something intensely
  "отхуярить": [3, 4], // To beat up badly
  "прихуеть": [3, 4], // To be stunned (vulgar)
  "хуячить": [3, 4], // To do something hard/fast
  "хуяк": [3, 4], // Bam! (vulgar exclamation)
  "хуярить": [3, 4], // To hit / work hard
  "однохуйственно": [3, 4], // Makes no difference (vulgar)
  "хуеплёт": [3, 5], // Bullshitter
  "хуёвина": [3, 5], // Shitty thing
  "хуеглот": [4, 4], // Cockswallower
  "хуище": [4, 4], // Big dick (augmentative)
  "хуйло": [4, 4], // Dickhead
  "нихуя": [3, 4], // Nothing (vulgar) / No way
  "охуительный": [3, 5], // Fucking amazing
  "охуевший": [3, 4], // Stunned / insolent
  "подхуйник": [3, 4], // Underhanded person
  "расхуячить": [3, 4], // To smash to pieces
  "перехуярить": [3, 4], // To redo / to hit hard
  "прихуярить": [3, 4], // To attach / hit
  "отхуячить": [3, 4], // To beat severely
  "захуйня": [3, 4], // Nonsense
  "хуеватый": [3, 5], // Shitty (adj)
  "хуемразь": [4, 4], // Dick-scum

  // пизда derivatives
  "пиздануться": [3, 4], // To go crazy / to fall
  "припиздеть": [3, 5], // To bullshit a little
  "пиздострадатель": [4, 4], // Pussy-sufferer (simp)
  "опиздениться": [3, 4], // To go crazy
  "пиздёныш": [3, 5], // Little shit (from пизда)
  "подпиздывать": [3, 5], // To subtly bullshit
  "пиздатейший": [3, 5], // Fucking awesome (superlative)
  "пиздопрометчина": [3, 4], // Crazy mess
  "пиздюли": [3, 4], // Beating
  "отпиздить": [3, 4], // To beat up
  "пиздобол": [3, 4], // Liar (variant spelling)
  "пиздоглазый": [5, 5], // Cunt-eyed
  "пиздопляска": [3, 5], // Fucked-up situation
  "пиздорванка": [5, 5], // Torn-cunt (insult for woman)
  "спиздить": [3, 4], // To steal
  "напиздеть": [3, 4], // To lie a lot
  "пропиздеть": [3, 5], // To chat shit
  "запиздеть": [3, 5], // To start bullshitting

  // ебать derivatives
  "ёбнуть": [3, 4], // To hit / to drink
  "поебать": [3, 5], // To fuck a bit / don't care
  "выебать": [3, 5], // To fuck (perfective)
  "наебать": [3, 4], // To deceive
  "наебнуться": [3, 4], // To fall / crash
  "проебать": [3, 4], // To miss / lose
  "уебать": [3, 4], // To hit hard
  "приебаться": [3, 4], // To pester
  "доебаться": [3, 4], // To harass / pester
  "заебать": [3, 5], // To annoy the fuck out of
  "заёбанный": [3, 4], // Exhausted / fed up
  "поебень": [3, 4], // Nonsense / junk
  "ебанашка": [3, 4], // Crazy person
  "ебанько": [1, 4], // Idiot
  "ебля": [3, 5], // Fucking (noun)
  "ебальник": [3, 4], // Face (vulgar)
  "ёбтвоюмать": [3, 5], // Fuck your mother (one word)
  "ёбаный стыд": [3, 5], // Fucking shame
  "ебал в рот": [3, 5], // Fucked in the mouth
  "еблан": [1, 4], // Idiot / dumbfuck
  "ебанутый": [3, 4], // Crazy
  "объебать": [3, 4], // To cheat / swindle
  "переебать": [3, 5], // To fuck again / hit hard
  "разъебать": [3, 4], // To smash / destroy
  "съебаться": [3, 5], // To get the fuck out
  "уёбывать": [3, 4], // To flee / get out
  "ёбкий": [3, 5], // Fuckable / tricky
  "ёбнутьсяголовой": [3, 4], // To bang one's head

  // блядь derivatives
  "блядский": [3, 4], // Whorish
  "заблядовать": [3, 4], // To start whoring
  "блядешник": [5, 4], // Whorehouse
  "блядки": [3, 4], // Whoring around
  "блядунья": [5, 4], // Whore (fem)
  "блядослов": [3, 4], // Foul-mouthed person
  "приблядить": [5, 4], // To attract like a whore

  // говно derivatives
  "говнище": [3, 5], // Big/terrible shit
  "говняный": [3, 5], // Shitty
  "обговнять": [3, 5], // To shit on / smear
  "говнарь": [3, 5], // Shitty person
  "говнистый": [3, 5], // Shitty (adj)
  "говножуй": [3, 5], // Shit-chewer
  "говноляд": [3, 5], // Shitty situation
  "наговнять": [3, 4], // To make a mess of

  // Compound мат phrases
  "пизды дать": [3, 5], // To beat up
  "хуй соси": [4, 5], // Suck a dick
  "на хуй пошёл": [3, 5], // Go fuck yourself
  "ебал я": [3, 5], // I don't give a fuck
  "ебал я это": [3, 5], // Fuck this
  "ни хуя себе": [3, 5], // Holy fuck
  "ёб твою в душу мать": [3, 5], // Elaborate mother insult
  "пошла на хуй": [3, 5], // Go fuck yourself (fem)
  "ёперный театр": [3, 5], // Fucking hell (euphemistic)
  "хуй знает": [3, 5], // Who the fuck knows
  "хуй забей": [3, 5], // Fuck it / forget it
  "ёбаный рот": [3, 5], // Fucking mouth (exclamation)
  "пизда рулю": [3, 5], // Shit's fucked
  "ёб твою за ногу": [3, 5], // Fuck your (euphemistic)
  "ёбаная карусель": [3, 5], // Fucking carousel (exclamation)

  // More insults
  "лох": [1, 4], // Sucker / loser
  "лошара": [1, 4], // Bigger loser
  "лохушка": [1, 4], // Female loser
  "дебил": [1, 4], // Imbecile
  "кретин": [1, 4], // Cretin
  "даун": [1, 4], // Down (offensive use)
  "олигофрен": [1, 4], // Oligophrenic (slur)
  "недоумок": [1, 4], // Simpleton
  "ишак": [1, 4], // Donkey (insult)
  "баран": [1, 4], // Ram / idiot
  "козёл вонючий": [1, 4], // Stinking goat
  "тупица": [1, 4], // Stupid person
  "тупорылый": [1, 4], // Blunt-snouted / stupid
  "остолоп": [1, 4], // Blockhead
  "обалдуй": [1, 4], // Dimwit
  "оболтус": [1, 4], // Good-for-nothing
  "болван": [1, 4], // Blockhead
  "дурак": [1, 4], // Fool
  "дура": [1, 4], // Fool (fem)
  "идиот": [1, 4], // Idiot
  "идиотка": [1, 4], // Idiot (fem)
  "уродка": [1, 4], // Ugly woman
  "урод": [1, 4], // Ugly / freak
  "чучело": [1, 4], // Scarecrow / freak
  "чудовище": [1, 4], // Monster
  "скотина": [3, 4], // Beast / bastard
  "свинья": [1, 4], // Pig
  "свиноматка": [1, 4], // Sow (insult)
  "быдло": [1, 4], // Cattle / redneck
  "отморозок": [1, 4], // Frostbitten / thug
  "подлец": [1, 4], // Scoundrel
  "мерзавец": [1, 4], // Scoundrel
  "мерзавка": [1, 4], // Scoundrel (fem)
  "негодяй": [1, 4], // Villain
  "негодяйка": [1, 4], // Villain (fem)
  "ничтожество": [2, 4], // Nonentity
  "паскуда": [1, 4], // Scumbag
  "паскудник": [1, 4], // Scoundrel
  "гад": [3, 4], // Reptile / bastard
  "гадина": [1, 4], // Vile creature
  "гнида": [1, 4], // Nit / scumbag
  "падла": [3, 4], // Bastard (prison slang)
  "падаль": [1, 4], // Carrion / scum
  "пёс": [1, 4], // Dog (insult)
  "сволочь": [3, 4], // Bastard
  "сволочи": [3, 4], // Bastards (plural)
  "выродок": [1, 4], // Degenerate
  "дегенерат": [1, 4], // Degenerate
  "извращенец": [1, 4], // Pervert
  "педофил": [5, 5], // Pedophile
  "насильник": [5, 5], // Rapist
  "маньяк": [1, 4], // Maniac

  // Slurs / offensive
  "чурка": [5, 4], // Slur for Central Asians
  "хач": [5, 4], // Slur for Caucasians
  "чернож*пый": [5, 5], // Racial slur
  "черножопый": [5, 4], // Racial slur (unmasked)
  "жид": [5, 4], // Antisemitic slur
  "жидовка": [5, 4], // Antisemitic slur (fem)
  "жидовский": [5, 4], // Antisemitic (adj)
  "жидяра": [5, 4], // Antisemitic slur (augmentative)
  "пидрила": [5, 4], // Homophobic slur
  "петух": [5, 4], // Rooster / prison slur
  "опущенный": [5, 4], // Lowered / prison caste slur
  "хохол": [5, 4], // Slur for Ukrainians
  "хохлушка": [5, 4], // Slur for Ukrainian women
  "москаль": [5, 4], // Slur for Russians (from Ukrainian)
  "кацап": [5, 4], // Slur for Russians
  "чурбан": [5, 4], // Slur for Central Asians
  "чукча": [5, 4], // Ethnic slur
  "узкоглазый": [5, 4], // Slant-eyed (slur)
  "косоглазый": [5, 4], // Cross-eyed / slur for Asians
  "обезьяна": [5, 4], // Monkey (racial insult)
  "азер": [5, 4], // Slur for Azerbaijanis
  "даг": [5, 4], // Slur for Dagestanis
  "жидёныш": [5, 4], // Young Jew (slur)

  // Vulgar body parts
  "очко": [4, 3], // Asshole (lit. bullseye)
  "сракотан": [4, 3], // Big-assed person
  "елда": [4, 4], // Dick (archaic vulgar)
  "шишка": [2, 3], // Knob / dick (slang)
  "мохнатка": [4, 4], // Hairy one (vulgar for vagina)
  "булки": [2, 3], // Butt cheeks (slang)
  "жопень": [4, 3], // Ass (augmentative)
  "жопник": [4, 3], // Ass-person
  "жополиз": [4, 3], // Ass-licker
  "подзалупный": [4, 3], // Under the foreskin (adj)
  "промежность": [4, 4], // Perineum (vulgar context)
  "мудя": [4, 4], // Balls (vulgar)
  "муде": [4, 4], // Balls (archaic vulgar)
  "писька": [1, 4], // Wee-wee (childish vulgar)
  "письки": [1, 3], // Wee-wees (plural)
  "хрен": [2, 3], // Horseradish / dick (euphemism)

  // Internet slang / euphemisms
  "сука блять": [3, 5], // Bitch fuck (combo)
  "ёпт": [2, 3], // Euphemism for ёб
  "ёперный": [2, 3], // Euphemism for ёбаный
  "ёклмн": [2, 3], // Euphemistic expletive
  "ёпрст": [2, 3], // Euphemistic expletive
  "нахрен": [2, 3], // To hell (euphemism for нахуй)
  "пипец": [2, 3], // Euphemism for пиздец
  "офигеть": [2, 3], // Euphemism for охуеть
  "нафиг": [2, 3], // Euphemism for нахуй
  "фигня": [2, 3], // Euphemism for хуйня
  "блин": [2, 3], // Euphemism for блядь (borderline)
  "бляха муха": [2, 3], // Euphemism for блядь
  "ёшкин кот": [2, 3], // Euphemistic expletive
  "ядрёна вошь": [2, 3], // Euphemistic expletive
  "ядрёна кочерыжка": [2, 3], // Euphemistic expletive
  "пиздабратия": [2, 3], // Vulgar brotherhood
  "заебца": [2, 3], // Variant of заебись (great)
  "сукаблять": [2, 3], // Combined expletive (one word)
  "ёбаныйврот": [2, 3], // Combined expletive (one word)
  "хуйнуть": [1, 4], // To do something stupid

  // More vulgar / criminal slang
  "шмара": [3, 4], // Slut (criminal slang)
  "маруха": [3, 4], // Woman (criminal slang, derogatory)
  "фраер": [3, 4], // Outsider / sucker (criminal slang)
  "лоханка": [3, 4], // Female sucker
  "шняга": [3, 4], // Crap / junk
  "херня": [2, 3], // Crap (euphemism for хуйня)
  "хренов": [3, 4], // Crappy
  "хреновый": [3, 4], // Crappy
  "хреново": [3, 4], // Crappily
  "жопошник": [3, 4], // Assman (vulgar)
  "жёпа": [3, 4], // Ass (variant spelling)
  "задница": [3, 4], // Butt / ass
  "задрот": [3, 4], // Nerd / wanker (gaming slang)
  "гавнюк": [3, 5], // Shithead (variant spelling)
  "конча": [3, 4], // Cum (vulgar)
  "кончить": [3, 4], // To cum / to finish
  "сосатель": [3, 4], // Sucker (vulgar)
  "дрочер": [3, 4], // Wanker
  "подстилка": [3, 4], // Doormat / slut
  "курва": [5, 4], // Whore (from Polish/Ukrainian)
  "блядища": [5, 4], // Big whore (augmentative)
  "ёбанина": [3, 5], // Fucking mess
  "ебатория": [3, 5], // Fuckery
  "мудоёб": [3, 5], // Ball-fucker
  "мудошлёп": [3, 4], // Ball-slapper
  "пиздёнка": [5, 5], // Little cunt
  "елдак": [4, 4], // Dick (augmentative)
  "хуеман": [4, 4], // Dick-obsessed person

  // === EXPANSION: хуй derivatives ===
  "расхуярить": [3, 4], // To smash apart
  "нахуйник": [3, 4], // Annoying person (vulgar)
  "хуеплётство": [3, 5], // Bullshitting (noun)
  "хуеносец": [4, 4], // Dick-bearer (insult)
  "хуеватенько": [3, 5], // Kinda shitty
  "хуепутало": [4, 4], // Dick-scarecrow (insult)
  "хуесборник": [4, 4], // Dick-collector
  "хуетень": [3, 5], // Bullshit / nonsense
  "захуячить": [3, 4], // To hurl / do intensely
  "выхуяривать": [3, 4], // To extract forcefully
  "обхуярить": [3, 4], // To cheat / beat
  "подхуячить": [3, 4], // To sneak-attach
  "хуякнуть": [3, 4], // To slam / hit suddenly
  "хуевертить": [3, 5], // To do shit
  "хуеверт": [3, 5], // Nonsense / carousel of shit
  "охуевать": [3, 4], // To be continuously stunned
  "охуенно": [3, 5], // Fucking awesome (adverb)
  "похуйчик": [3, 5], // Don't-give-a-fuck (diminutive)
  "нахуячиться": [3, 4], // To get wasted
  "захуяченный": [3, 4], // Thrown / done intensely
  "хуйнёй страдать": [3, 5], // To waste time on bullshit
  "хуеватость": [3, 5], // Shittiness
  "хуеблядский": [5, 4], // Whore-dick (compound adj)
  "хуепромышленник": [4, 4], // Dick-industrialist (insult)
  "хуемудрый": [4, 4], // Dick-wise (sarcastic)
  "хуедрыга": [4, 4], // Dick-shaker

  // === EXPANSION: пизда derivatives ===
  "пиздатенько": [3, 5], // Fucking nicely (diminutive)
  "пиздюлина": [3, 4], // A beating / hit
  "пиздохать": [5, 5], // To die / kick the bucket
  "пиздобратство": [3, 4], // Vulgar brotherhood
  "пиздоватый": [5, 5], // Cunt-ish
  "пиздострадание": [4, 4], // Pussy-suffering (simping)
  "пиздопроёб": [5, 5], // Cunt-fuckup
  "пиздохвост": [5, 5], // Cunt-tail
  "пиздюган": [3, 5], // Big shit (augmentative)
  "пиздюшка": [5, 5], // Little cunt (diminutive)
  "пиздоглот": [5, 5], // Cunt-swallower
  "пиздохранилище": [5, 5], // Cunt-storage (insult)
  "пиздопромёт": [5, 5], // Cunt-thrower
  "впиздячить": [3, 4], // To slam into
  "пиздовать": [3, 4], // To go / march (vulgar)
  "пиздецовый": [3, 4], // Disastrous (adj)
  "пиздецома": [3, 4], // Total disaster
  "запиздячить": [3, 4], // To throw in / start doing hard
  "отпиздячить": [3, 4], // To beat severely
  "пиздюля": [3, 4], // A slap / punch
  "пропиздон": [3, 5], // Total fuckup
  "пиздоблядство": [5, 5], // Cunt-whoring
  "пиздюнчик": [3, 5], // Little shit (affectionate vulgar)
  "пиздоглазие": [5, 5], // Cunt-eyedness

  // === EXPANSION: ебать derivatives ===
  "заебашить": [3, 4], // To smash / do something hard
  "ебашить": [3, 4], // To work hard / hit
  "отъебать": [3, 5], // To fuck off / beat up
  "поёбывать": [3, 5], // To fuck occasionally
  "подъебать": [3, 4], // To make fun of
  "подъёбка": [3, 4], // A subtle mockery
  "подъебнуть": [3, 4], // To subtly mock
  "наёбка": [3, 4], // A scam / deception
  "наёбщик": [3, 4], // A scammer
  "проёб": [3, 5], // A fuckup / miss
  "заёб": [3, 4], // Annoyance
  "разъёб": [3, 4], // Destruction
  "въебать": [3, 4], // To hit / slam
  "въёбывать": [3, 4], // To work hard
  "уебан": [1, 4], // Dumbfuck
  "уёбищный": [1, 4], // Ugly / freakish
  "ебанутость": [3, 4], // Craziness
  "ебанариум": [3, 4], // Place of crazy people
  "ебанаврот": [3, 5], // Fuck in the mouth (exclamation)
  "ебанарот": [3, 5], // Fuck in the mouth (variant)
  "ебланство": [3, 4], // Idiocy
  "еблище": [3, 4], // Face (vulgar augmentative)
  "ёбаный насос": [3, 5], // Fucking pump (exclamation)
  "ёбаная сила": [3, 5], // Fucking power (exclamation)
  "разъебай": [3, 4], // Irresponsible person
  "разъебайство": [3, 4], // Irresponsibility
  "ёбнуться": [3, 4], // To go crazy / fall hard
  "заёбистый": [3, 4], // Tiring / annoying
  "перезаебать": [3, 4], // To annoy again
  "объёбывать": [3, 4], // To cheat continuously
  "недоёбанный": [3, 5], // Underfucked

  // === EXPANSION: говно derivatives ===
  "говнюшка": [3, 5], // Little shit (diminutive)
  "говнодав": [3, 5], // Shit-stomper
  "говнотёк": [3, 5], // Shit-flow
  "говнокод": [3, 5], // Shit code (IT slang)
  "говномес": [3, 5], // Shit-mixer
  "говноляп": [3, 5], // Shit-stainer
  "говнолаз": [3, 5], // Shit-climber (plumber insult)
  "говнотечь": [3, 5], // Shit-leak
  "говнохлёб": [3, 5], // Shit-slurper
  "говновоз": [3, 5], // Shit-hauler
  "говнища": [3, 5], // Lots of shit (augmentative)
  "говнистость": [3, 5], // Shittiness
  "приговнять": [3, 5], // To add shit to
  "выговнять": [3, 5], // To shit out
  "подговнить": [3, 5], // To sneak shit
  "обговняться": [3, 5], // To cover oneself in shit
  "говнюшник": [3, 5], // Shit-house / shit person

  // === EXPANSION: блядь derivatives ===
  "блядюга": [5, 4], // Big whore (augmentative)
  "блядовитый": [3, 4], // Whorish (adj)
  "блядоход": [5, 4], // Whore-goer
  "блядиада": [3, 4], // Whoring event / olympics
  "блядогон": [5, 4], // Whore-chaser
  "блядовство": [3, 4], // Whorish behavior
  "блядюшка": [5, 4], // Little whore (diminutive)
  "заблядить": [3, 4], // To start whoring
  "проблядиться": [5, 4], // To whore away
  "приблядывать": [3, 4], // To act whorish
  "блядский рот": [3, 4], // Whorish mouth (exclamation)
  "блядина ёбаная": [5, 5], // Fucking whore

  // === EXPANSION: More insults ===
  "имбецил": [1, 4], // Imbecile
  "дебилка": [1, 4], // Imbecile (fem)
  "кретинка": [1, 4], // Cretin (fem)
  "тупица безмозглая": [1, 4], // Brainless fool
  "безмозглый": [1, 4], // Brainless
  "пустоголовый": [1, 4], // Empty-headed
  "тупоголовый": [1, 4], // Blunt-headed / stupid
  "туполобый": [1, 4], // Thick-browed / stupid
  "баранина": [1, 4], // Mutton / stupid person
  "тупой как пробка": [1, 4], // Dumb as a cork
  "козлина": [1, 4], // Goat (augmentative insult)
  "козлиха": [1, 4], // She-goat (insult)
  "козлодой": [1, 4], // Goat-milker (insult)
  "скотобаза": [3, 5], // Cattle base / shithole
  "свинтус": [1, 4], // Pig (playful insult)
  "свинёныш": [1, 4], // Little pig (insult)
  "уродина": [1, 4], // Ugly person (augmentative)
  "уродец": [1, 4], // Little freak
  "выродочка": [1, 4], // Degenerate (diminutive fem)
  "моральный урод": [1, 4], // Moral freak
  "мразота": [1, 4], // Scum (augmentative)
  "мразотень": [1, 4], // Scum (variant)
  "мразёныш": [1, 4], // Little scum
  "тварюга": [1, 4], // Big creature / scum
  "тварина": [1, 4], // Creature (augmentative)
  "гадёныш": [1, 4], // Little vile creature
  "гадёнышка": [1, 4], // Little vile creature (fem)
  "гадство": [1, 4], // Vileness
  "гнидоёб": [3, 5], // Nit-fucker (compound insult)
  "бестолочь": [1, 4], // Blockhead / useless person
  "шваброид": [1, 4], // Mop-oid (insult)
  "рожа": [1, 4], // Mug / ugly face
  "морда": [1, 4], // Snout / face (vulgar)
  "харя": [1, 4], // Ugly mug
  "мордоворот": [1, 4], // Face-turner (ugly person)
  "рукожоп": [3, 4], // Ass-handed / clumsy person
  "криворукий": [1, 4], // Crooked-handed / incompetent
  "слабоумный": [1, 4], // Feeble-minded
  "придурочный": [1, 4], // Idiotic
  "полоумный": [1, 4], // Half-witted
  "шизанутый": [1, 3], // Schizo (slang insult)
  "шизик": [1, 4], // Schizo (diminutive)
  "психопат": [1, 4], // Psychopath
  "психованный": [1, 4], // Psycho (adj)
  "ненормальный": [1, 4], // Abnormal / crazy
  "бесноватый": [1, 4], // Possessed / frenzied
  "чертила": [1, 4], // Devil-person
  "шпана": [1, 4], // Riff-raff / punk
  "гопник": [1, 4], // Gopnik / thug
  "гопота": [1, 4], // Gopnik collective
  "быдлота": [1, 4], // Cattle-people
  "быдлятина": [1, 4], // Cattle-person
  "бомжара": [1, 4], // Bum (augmentative)
  "бомжатник": [1, 4], // Bum-house
  "алкаш": [1, 3], // Drunkard
  "алкашня": [1, 3], // Drunkards (collective)
  "алкоголик": [1, 4], // Alcoholic
  "наркоман": [1, 4], // Drug addict
  "наркоша": [1, 3], // Drug addict (slang)
  "нарик": [1, 3], // Drug addict (short slang)
  "торчок": [1, 4], // Junkie

  // === EXPANSION: Criminal / prison slang ===
  "опущенец": [3, 4], // Lowered one (prison caste)
  "петушня": [3, 4], // Roosters / prison bottoms
  "петушить": [3, 4], // To humiliate (prison)
  "петушиный": [3, 4], // Rooster-like / humiliated
  "козлить": [3, 4], // To rat / betray (prison)
  "стукач": [3, 4], // Snitch
  "крысятник": [3, 4], // Rat-hole / place of thieves
  "крыса": [3, 4], // Rat / thief from own people
  "баклан": [3, 4], // Hooligan (prison slang)
  "бакланить": [3, 4], // To act like a hooligan
  "шестёрка": [3, 4], // Errand boy (prison hierarchy)
  "барыга": [3, 4], // Dealer / speculator
  "мусор": [3, 4], // Cop (criminal slang, derogatory)
  "мент": [3, 4], // Cop (derogatory)
  "ментяра": [3, 4], // Cop (augmentative derogatory)
  "мусорня": [3, 4], // Cops (collective, derogatory)
  "легавый": [3, 4], // Cop (derogatory, lit. hound)
  "борзый": [3, 4], // Impudent / brash
  "беспредел": [3, 4], // Lawlessness / chaos
  "беспредельщик": [3, 4], // Lawless person
  "наехать": [3, 4], // To threaten / harass
  "кидала": [3, 4], // Scammer
  "кидалово": [3, 4], // Scam
  "лохотрон": [3, 4], // Scam scheme
  "чмырить": [3, 4], // To humiliate
  "чмырь": [1, 4], // Humiliated loser
  "зашквар": [3, 4], // Disgrace / shame (prison-origin)
  "зашкварный": [3, 4], // Disgraced (adj)
  "зашквариться": [3, 4], // To disgrace oneself
  "опустить": [3, 4], // To humiliate / lower rank
  "ссученный": [3, 4], // Bitched-out / traitor
  "ссучиться": [3, 4], // To become a traitor
  "козёл отпущения": [3, 4], // Scapegoat
  "шконка": [3, 4], // Prison bunk (used as insult context)
  "параша": [3, 5], // Prison toilet / shit
  "шлак": [3, 4], // Slag / trash person
  "шлакоблок": [3, 4], // Slag-block (insult)
  "фуфло": [3, 5], // Fake / bullshit (prison)
  "фуфлыжник": [3, 4], // Faker / debt-dodger
  "фраерок": [3, 4], // Little sucker
  "терпила": [3, 4], // Victim / pushover

  // === EXPANSION: More slurs ===
  "пидорок": [5, 4], // Little faggot (diminutive)
  "пидорня": [5, 4], // Faggots (collective)
  "пидарас": [5, 4], // Faggot (variant spelling)
  "пидораска": [5, 4], // Faggot (fem-ized insult)
  "гомосек": [5, 4], // Homosexual (derogatory)
  "гомосятина": [5, 4], // Gay stuff (derogatory)
  "лесбиянка": [3, 3], // Lesbian (can be derogatory in context)
  "лезбуха": [5, 4], // Dyke (slang)
  "трансуха": [5, 4], // Trans person (derogatory)
  "голубой": [3, 3], // Gay (lit. light blue, derogatory)
  "мужеложец": [5, 4], // Sodomite (archaic slur)
  "хачик": [5, 4], // Slur for Caucasians (diminutive)
  "чурбанина": [5, 4], // Block / slur for Central Asians
  "чурек": [5, 4], // Slur for Caucasians
  "чуркестан": [5, 4], // Slur-land for Central Asians
  "чёрный": [5, 4], // Black (used as racial slur)
  "чернильница": [5, 4], // Inkwell (slur for woman with Black partners)
  "жидовня": [5, 4], // Jews (collective slur)
  "жидовствовать": [5, 4], // To act Jewish (antisemitic)
  "жидовморда": [5, 4], // Jew-face (slur)
  "москалька": [5, 4], // Slur for Russian woman (from Ukrainian)
  "хохляндия": [5, 4], // Ukraine (derogatory)
  "хохлятина": [5, 4], // Ukrainian stuff (derogatory)
  "кацапня": [5, 4], // Russians (collective, derog from Ukr.)
  "чечен": [5, 4], // Chechen (derogatory usage)
  "чеченина": [5, 4], // Chechen stuff (derogatory)
  "армяшка": [5, 4], // Armenian (derogatory diminutive)
  "грузинёнок": [5, 4], // Young Georgian (derogatory)
  "таджичка": [5, 4], // Tajik woman (derogatory usage)

  // === EXPANSION: More sexual / body part terms ===
  "клитор": [4, 3], // Clitoris
  "анус": [4, 3], // Anus
  "промежуток": [1, 1], // Crotch area
  "титька": [4, 4], // Tit (vulgar)
  "титьки": [4, 4], // Tits (vulgar)
  "жопка": [4, 3], // Little ass (diminutive)
  "жопища": [4, 3], // Big ass (augmentative)
  "сракотанище": [4, 3], // Big-assed (augmentative)
  "мудень": [4, 3], // Ballsack person
  "яйца": [2, 2], // Balls (lit. eggs)
  "яички": [2, 2], // Little balls / testicles
  "подмахивать": [4, 3], // To thrust from below
  "отсосать": [4, 3], // To suck off
  "отсос": [4, 5], // Blowjob
  "куни": [4, 4], // Cunnilingus (slang)
  "куннилингус": [2, 3], // Cunnilingus
  "анилингус": [2, 3], // Analingus
  "фелляция": [2, 3], // Fellatio
  "дрочка": [3, 3], // Jerking off (noun)
  "подрочить": [4, 4], // To jerk off (a bit)
  "надрочить": [4, 4], // To jerk off (a lot)
  "передёрнуть": [4, 4], // To jerk off (euphemism)
  "кончина": [2, 2], // Orgasm / death (vulgar pun)
  "обкончать": [4, 3], // To cum all over
  "шлюховатый": [4, 3], // Slutty (adj)
  "шлюшка": [4, 3], // Little slut
  "потаскушка": [4, 3], // Little harlot
  "потрахаться": [4, 5], // To fuck (a bit)
  "перепихнуться": [4, 3], // To have a quickie
  "перепих": [4, 3], // A quickie
  "перепихон": [4, 3], // A quickie (variant)
  "залупоглазый": [4, 3], // Glans-eyed (insult)
  "залупистый": [4, 3], // Dickish (adj)
  "елдовый": [4, 3], // Dick-related (adj)
  "пенис": [4, 3], // Penis
  "вагина": [4, 3], // Vagina

  // === EXPANSION: Compound phrases ===
  "пошёл в жопу": [3, 5], // Go to hell / fuck off
  "отсоси": [3, 5], // Suck it
  "ебал твою мать": [3, 5], // Fucked your mother
  "иди в жопу": [3, 5], // Go to hell
  "иди в пизду": [5, 5], // Go to a cunt
  "в пизду": [5, 5], // To a cunt / fuck it
  "пошёл в пизду": [5, 5], // Go to a cunt
  "ни хуя не понимаю": [3, 5], // Don't understand a fucking thing
  "да пошёл ты": [3, 5], // Fuck off (mild)
  "ёбаный ты в рот компот": [3, 5], // Fucking compote (elaborate excl.)
  "ёб твоя медь": [3, 5], // Fuck your copper (euphemistic)
  "мать твою": [3, 5], // Your mother (implied insult)
  "мать твою за ногу": [3, 5], // Your mother by the leg
  "ебись оно конём": [3, 5], // Let it fuck a horse
  "ёбаный в сраку": [3, 5], // Fucked in the ass
  "пиздуй отсюда": [3, 5], // Get the fuck out of here
  "хуй тебе": [4, 5], // Dick to you / no way
  "хуй тебе в зубы": [4, 5], // Dick in your teeth
  "жопой чую": [3, 5], // I feel with my ass (intuition)
  "жри говно": [3, 5], // Eat shit
  "сосёшь": [3, 5], // You suck
  "сасай лалку": [3, 5], // Suck it (internet meme)
  "уёбывай": [3, 5], // Get the fuck out
  "катись нахуй": [3, 5], // Roll the fuck away
  "закрой ебало": [3, 5], // Shut your fucking mouth
  "закрой хлебало": [3, 5], // Shut your bread-hole
  "язви тебя": [3, 5], // Damn you (archaic vulgar)
  "язви твою мать": [3, 5], // Damn your mother (archaic)
  "ёбаный бог": [3, 5], // Fucking god
  "сука ёбаная": [3, 5], // Fucking bitch
  "блять ёбаная": [5, 5], // Fucking whore

  // === EXPANSION: Internet / modern slang ===
  "хейтер": [2, 3], // Hater (transliteration)
  "сукаблядь": [5, 4], // Bitch-whore (one word)
  "ебанавшё": [3, 5], // Fuck everything (slang)
  "пиздёшь": [2, 3], // You're lying (internet)
  "ёбушки-воробушки": [2, 3], // Euphemistic exclamation
  "ёпта": [2, 3], // Euphemism for ёб (internet)
  "писос": [2, 3], // Pizdec (coded internet)
  "пздц": [2, 3], // Pizdec (abbreviation)
  "бля": [2, 3], // Blyat (shortened)
  "ёмаё": [2, 3], // Euphemistic exclamation
  "ебучий": [3, 5], // Fucking (adj)
  "ебучка": [3, 5], // Fucking thing
  "сучара": [2, 3], // Big bitch (augmentative)
  "сучёныш": [2, 3], // Son of a bitch (lit.)
  "потрахушки": [3, 5], // Fuck-games (diminutive)
  "ёбаное оно": [3, 5], // Fucking it
  "хуйлан": [4, 3], // Dick-person (insult)
  "хуйланить": [4, 3], // To act like a dick
  "блядовня": [5, 4], // Whorehouse / mess
  "пиздострадалец": [4, 3], // Pussy-sufferer (variant)
  "мудопрыг": [2, 3], // Ball-jumper (insult)
  "мудосос": [2, 3], // Ball-sucker
  "ёбырь": [3, 5], // Fucker (colloquial)
  "залупень": [4, 3], // Dick-head (from залупа)
  "залупенция": [4, 3], // Dick-headedness
  "разъебон": [2, 3], // Smash-up
  "пиздец подкрался": [2, 3], // Disaster crept up
  "жизнь говно": [3, 5], // Life is shit
  "всё хуйня": [3, 5], // Everything is bullshit
  "ёбаный крот": [3, 5], // Fucking mole (exclamation)
  "ёбаный ёж": [3, 5], // Fucking hedgehog (exclamation)
  "ёбаный лось": [3, 5], // Fucking moose (exclamation)
  "мудозвонить": [4, 3], // To ring balls / talk nonsense
  "мудохать": [2, 3], // To beat up
  "мудохаться": [2, 3], // To fight / toil

  // === EXPANSION: Transliterated Russian profanity (Latin letters) ===
  "suka": [3, 4], // Bitch (transliterated)
  "blyad": [5, 5], // Whore (transliterated)
  "blyat": [3, 4], // Fuck exclamation (transliterated)
  "blyadt": [5, 5], // Whore variant (transliterated)
  "blya": [3, 5], // Fuck short (transliterated)
  "pizda": [5, 5], // Cunt (transliterated)
  "pizdec": [3, 4], // Fucking disaster (transliterated)
  "pizdets": [3, 5], // Fucking disaster variant (transliterated)
  // "hui": [3, 4], // Dick (transliterated) — false positive: common Chinese/Vietnamese name
  // "huy": [4, 5], // Dick variant (transliterated) — false positive: Vietnamese name (Huy Nguyen)
  "khuy": [4, 5], // Dick variant (transliterated)
  "nahui": [3, 4], // Fuck off (transliterated)
  "nahuy": [3, 5], // Fuck off variant (transliterated)
  "nakhui": [3, 5], // Fuck off variant (transliterated)
  "nakhuy": [3, 5], // Fuck off variant (transliterated)
  "ebat": [3, 4], // To fuck (transliterated)
  "ebal": [3, 5], // Fucked (transliterated)
  "yebat": [3, 5], // To fuck variant (transliterated)
  "yobaniy": [3, 5], // Fucking adj (transliterated)
  "yobany": [3, 5], // Fucking adj variant (transliterated)
  "ebaniy": [3, 5], // Fucking adj variant (transliterated)
  "ebany": [3, 5], // Fucking adj variant (transliterated)
  "mudak": [3, 4], // Asshole (transliterated)
  "mudilo": [1, 5], // Dumbass (transliterated)
  "pidor": [5, 4], // Faggot (transliterated)
  "pidoras": [5, 4], // Faggot variant (transliterated)
  "pidaras": [5, 4], // Faggot variant (transliterated)
  "gandon": [3, 5], // Condom/scumbag (transliterated)
  "gondon": [3, 5], // Condom/scumbag variant (transliterated)
  "gavno": [3, 4], // Shit (transliterated)
  "govno": [3, 5], // Shit variant (transliterated)
  // "dermo": [3, 5], // Shit variant (transliterated) — false positive: medical prefix (dermatology)
  "zalupa": [4, 5], // Glans/dickhead (transliterated)
  "zhopa": [3, 5], // Ass (transliterated)
  // "manda": [5, 5], // Cunt (transliterated) — false positive: common English female name
  "huynya": [3, 5], // Bullshit (transliterated)
  "khuynya": [3, 5], // Bullshit variant (transliterated)
  "huinya": [3, 5], // Bullshit variant (transliterated)
  "pizdezh": [3, 5], // Bullshit/lies (transliterated)
  "dolboyob": [1, 5], // Dumbfuck (transliterated)
  "dolboeb": [1, 5], // Dumbfuck variant (transliterated)
  "yobaniy v rot": [3, 5], // Fucked in the mouth (transliterated)
  "ebaniy v rot": [3, 5], // Fucked in the mouth variant (transliterated)
  "idi nahui": [3, 5], // Go fuck yourself (transliterated)
  "idi nakhuy": [3, 5], // Go fuck yourself variant (transliterated)
  "poshyol nahui": [3, 5], // Go fuck yourself (transliterated)
  "poshel nahui": [3, 5], // Go fuck yourself variant (transliterated)
  "poshol nahuy": [3, 5], // Go fuck yourself variant (transliterated)
  "suchka": [3, 5], // Little bitch (transliterated)
  "ublyudok": [3, 5], // Bastard (transliterated)
  "blyadina": [5, 5], // Whore augmentative (transliterated)
  "huesos": [4, 5], // Cocksucker (transliterated)
  "khuyesos": [4, 5], // Cocksucker variant (transliterated)
  "ebanashka": [3, 5], // Crazy person (transliterated)
  "ebanko": [1, 5], // Idiot (transliterated)
  "eblan": [1, 5], // Idiot (transliterated)
  "ueban": [1, 5], // Dumbfuck (transliterated)
  "uyoban": [1, 5], // Dumbfuck variant (transliterated)
  "chmo": [1, 5], // Loser (transliterated)
  "tvar": [3, 5], // Scumbag (transliterated)
  "mraz": [3, 5], // Scum (transliterated)
  "padla": [3, 5], // Bastard (transliterated)
  "loh": [3, 5], // Sucker (transliterated)
  "loshara": [1, 5], // Loser (transliterated)
  "debil": [3, 5], // Imbecile (transliterated)
  "urod": [1, 5], // Ugly/freak (transliterated)
  "huilo": [4, 5], // Dickhead (transliterated)
  "khuylo": [4, 5], // Dickhead variant (transliterated)
  "pizdabol": [3, 5], // Liar (transliterated)
  "pizdabolshik": [3, 5], // Liar variant (transliterated)
  "svoloch": [3, 5], // Bastard (transliterated)
  "govnyuk": [3, 5], // Shithead (transliterated)
  "zasranec": [3, 5], // Little shit (transliterated)
  "der'mo": [3, 5], // Shit (transliterated with apostrophe)
  "pohuy": [3, 5], // Don't give a fuck (transliterated)
  "pokhuy": [3, 5], // Don't give a fuck variant (transliterated)
  "zaebis": [3, 5], // Fucking great (transliterated)
  "zayebis": [3, 5], // Fucking great variant (transliterated)
  "ohuet": [3, 5], // Holy fuck (transliterated)
  "okhuyet": [3, 5], // Holy fuck variant (transliterated)
  "ebalo": [3, 5], // Face vulgar (transliterated)
  "ebalnik": [3, 5], // Face vulgar (transliterated)
  "drochit": [4, 5], // To jerk off (transliterated)
  "drochat": [4, 5], // To jerk off variant (transliterated)
  "trahnut": [3, 5], // To fuck (transliterated)
  "trahat": [3, 5], // To fuck variant (transliterated)
  "shlyuha": [3, 5], // Slut (transliterated)
  "shalava": [3, 5], // Slut (transliterated)
  "kurva": [5, 5], // Whore (transliterated)
  "bydlo": [1, 4], // Cattle/redneck (transliterated)
  "gopnik": [1, 4], // Gopnik (transliterated)
  "churka": [5, 4], // Central Asian slur (transliterated)
  "khach": [5, 4], // Caucasian slur (transliterated)
  "pizduk": [3, 5], // Little shit (transliterated)
  "nahren": [2, 5], // To hell euphemism (transliterated)
  "nafig": [2, 5], // To hell euphemism (transliterated)
  "yopt": [3, 5], // Euphemism for fuck (transliterated)
  "yopta": [3, 5], // Euphemism for fuck (transliterated)
  "ssat": [3, 5], // To piss (transliterated)
  "srat": [3, 5], // To shit (transliterated)
  "perdun": [3, 5], // Old fart (transliterated)
  "ochko": [3, 5], // Asshole (transliterated)
  // "elda": [4, 5], // Dick archaic (transliterated) — false positive: common English female name
  "hren": [4, 5], // Dick euphemism (transliterated)

  // === EXPANSION: More мат compound phrases ===
  "пошёл ты": [3, 5], // Fuck off
  "да пошла ты": [3, 5], // Fuck off (to a woman)
  "иди ты в жопу": [3, 5], // Go to hell / shove it
  "сосать мой хуй": [4, 5], // Suck my dick
  "соси мой хуй": [4, 5], // Suck my dick (imperative)
  "ебал я твою мать": [3, 5], // I fucked your mother
  "ебал твоего отца": [1, 4], // I fucked your father
  "я тебя ебал": [3, 5], // I fucked you
  "твою мать ебал": [3, 5], // Fucked your mother
  "мать твою ебал": [3, 5], // Fucked your mother (reordered)
  "ебал в рот твою мать": [3, 5], // Fucked your mother in the mouth
  "ёб твою бабушку": [3, 5], // Fuck your grandmother
  "хуй тебе в глотку": [4, 5], // Dick down your throat
  "хуй на рыло": [4, 5], // Dick to the snout
  "хуй в зубы": [4, 5], // Dick in the teeth
  "хуй моржовый": [4, 5], // Walrus dick (exclamation)
  "ебись в глаз": [3, 5], // Fuck yourself in the eye
  "ебись конём": [3, 5], // Fuck yourself with a horse
  "ебись в рот": [3, 5], // Fuck yourself in the mouth
  "жри хуй": [4, 5], // Eat a dick
  "пизда тебе": [3, 5], // You're fucked
  "в рот ебать": [3, 5], // To fuck in the mouth
  "в жопу ебать": [3, 5], // To fuck in the ass
  "ебать тебя в ухо": [3, 5], // Fuck you in the ear
  "ебать тебя конём": [3, 5], // Fuck you with a horse
  "ебись ты конём": [3, 5], // Fuck yourself with a horse
  "пошёл ты на хер": [2, 3], // Go to hell (mild)
  "катись на хуй": [4, 5], // Roll to a dick
  "катись в жопу": [3, 5], // Roll into an ass
  "пиздуй нахуй": [3, 5], // Get the fuck out
  "пиздуй отсюда нахуй": [3, 5], // Get the fuck away from here
  "сука ты ёбаная блять": [5, 5], // Fucking bitch whore
  "ебать-колотить": [3, 5], // Fuck-bang (exclamation)
  "ёбаный в душу": [3, 5], // Fucked in the soul
  "ебать мои глаза": [3, 5], // Fuck my eyes
  "ёбаный в рот крокодил": [3, 5], // Fucking crocodile in the mouth
  "ёбаный стос": [3, 5], // Fucking hundred (exclamation)
  "в жопу ёбаный": [3, 5], // Fucked in the ass
  "хуй ли": [3, 5], // What the fuck (question)
  "какого хуя": [3, 5], // What the fuck
  "за каким хуем": [3, 5], // For what the fuck
  "хуем груши околачивать": [4, 5], // Knocking pears with a dick (wasting time)
  "ебать как здорово": [3, 5], // Fuck how great
  "ни ебёт ни колышет": [3, 5], // Doesn't fuck or sway (doesn't care)
  "ебу как хочу": [3, 5], // I fuck as I want
  "ебало завали": [3, 5], // Shut your fucking face
  "пизда тебе рыжая": [5, 5], // The redheaded cunt is coming for you
  "ёбаный хуй в рот": [4, 5], // Fucking dick in the mouth
  "хуй пойми": [3, 5], // Impossible to understand

  // === EXPANSION: More slang insults ===
  "лошпед": [1, 3], // Loser (slang distortion)
  "лузер": [1, 4], // Loser (transliteration)
  "неудачник": [1, 4], // Loser
  "неудачница": [1, 4], // Loser (fem)
  "тупень": [1, 4], // Thicko
  "тупняк": [1, 4], // Stupidity / daze
  "дуболом": [1, 4], // Oaf (lit. oak-breaker)
  "дубина": [1, 4], // Club / blockhead
  "дундук": [1, 4], // Blockhead
  "балда": [1, 4], // Blockhead
  "олух": [1, 4], // Oaf
  "олух царя небесного": [1, 4], // Oaf of the heavenly king
  "лапоть": [1, 4], // Bast shoe / yokel
  "валенок": [1, 4], // Felt boot / simpleton
  "деревенщина": [1, 4], // Peasant (insult)
  "колхозник": [1, 4], // Collective farmer (insult)
  "колхозница": [1, 4], // Collective farmer fem (insult)
  "жлоб": [1, 4], // Cheapskate / boor
  "жлобяра": [1, 4], // Big cheapskate
  "жмот": [1, 4], // Miser
  "скупердяй": [1, 4], // Skinflint
  "хам": [1, 4], // Boor / rude person
  "хамло": [1, 4], // Rude person (augmentative)
  "хамка": [1, 4], // Rude woman
  "наглец": [1, 4], // Impudent person
  "наглая морда": [1, 4], // Impudent snout
  "борзота": [1, 4], // Impudence collective
  "ёбко": [1, 4], // Sharply (vulgar adv)
  "фуфел": [1, 4], // Fake / loser
  "лопух": [1, 4], // Burdock / sucker
  "растяпа": [1, 4], // Butterfingers
  "размазня": [1, 4], // Wimp / weakling
  "слюнтяй": [1, 4], // Sniveler
  "нюня": [1, 4], // Crybaby
  "сопляк": [1, 4], // Snot-nosed kid
  "сопли жевать": [1, 4], // To chew snot (to be indecisive)
  "молокосос": [1, 4], // Milksop
  "сморчок": [1, 4], // Morel / old wrinkled person
  "шкура": [1, 4], // Skin / gold-digger
  "шкурница": [1, 4], // Gold-digger (fem)
  "содержанка": [1, 4], // Kept woman
  "подстилка блядская": [1, 4], // Whorish doormat
  "подзаборная шлюха": [5, 4], // Under-the-fence whore
  "вертихвостка": [1, 4], // Tail-wagger / flirt
  "потаскун": [1, 4], // Male slut
  "развратник": [1, 4], // Debaucher
  "развратница": [1, 4], // Debaucher (fem)
  "распутник": [1, 4], // Libertine
  "распутница": [1, 4], // Libertine (fem)
  "бабник": [1, 4], // Womanizer
  "кобель": [1, 4], // Male dog / womanizer
  "кобелина": [1, 4], // Big womanizer
  "самец": [1, 4], // Male / stud (derogatory)
  "самка": [1, 4], // Female / bitch (derogatory)
  "животное": [1, 4], // Animal (insult)
  "скот": [1, 4], // Cattle (insult)
  "грязная свинья": [1, 4], // Dirty pig
  "жирная корова": [1, 4], // Fat cow
  "жирный боров": [1, 4], // Fat boar
  "жирдяй": [1, 4], // Fatso
  "жиртрест": [1, 4], // Fat trust / fatso
  "толстожопый": [1, 4], // Fat-assed
  "толстожопая": [1, 4], // Fat-assed (fem)

  // === EXPANSION: More criminal/prison argot ===
  "козлятник": [3, 4], // Goat pen / informers' area
  "козлиная порода": [3, 4], // Goat breed (insult)
  "козёл вонючий ёбаный": [3, 5], // Stinking fucking goat
  "петушиный угол": [3, 4], // Rooster corner (prison bottom area)
  "петушок": [3, 4], // Little rooster / prison bottom
  "петушара": [3, 4], // Prison bottom (augmentative)
  "обиженный": [3, 4], // Offended / prison outcast
  "обиженка": [3, 4], // Female outcast
  "опущенка": [3, 4], // Lowered one (fem)
  "вафлёр": [4, 4], // Cocksucker (prison slang)
  "вафлить": [4, 5], // To give blowjob (prison slang)
  "вафля": [4, 5], // Blowjob (prison slang)
  "отпетый": [3, 4], // Incorrigible / hardened criminal
  "рецидивист": [3, 4], // Repeat offender
  "урка": [3, 4], // Criminal (slang)
  "уркаган": [3, 4], // Criminal (augmentative)
  "блатной": [3, 4], // Criminal class member
  "блатняк": [3, 4], // Criminal slang/culture
  "авторитет": [3, 4], // Authority (criminal boss)
  "вор в законе": [3, 4], // Thief in law (crime boss)
  "мокрушник": [3, 4], // Killer (criminal slang)
  "мочить": [3, 4], // To wet / to kill (slang)
  "замочить": [3, 4], // To kill (slang)
  "завалить": [3, 4], // To bring down / kill (slang)
  "грохнуть": [3, 4], // To bang / kill (slang)

  "шмаль": [3, 4], // Weed / hashish (slang)
  "дурь": [1, 3], // Stupidity / drugs (slang)
  "ширяться": [3, 4], // To inject drugs
  "ширка": [3, 4], // Drug injection
  "обдолбанный": [3, 4], // Stoned / wasted
  "обдолбыш": [3, 4], // Stoned person
  "укуренный": [3, 4], // Stoned (from smoking)
  "нарколыга": [3, 4], // Drug addict (derogatory)
  "кумарить": [3, 4], // To be high / tripping
  "торчать": [3, 4], // To be high / addicted
  "закладка": [3, 4], // Drug stash / dead drop
  "барыжить": [3, 4], // To deal (drugs/goods)
  "фуфлогон": [3, 5], // Faker / bullshitter (prison)
  "фуфлогонить": [3, 5], // To fake / bullshit (prison)
  "косяк": [3, 5], // Joint / fuckup
  "косячить": [3, 5], // To fuck up
  "лажа": [3, 4], // Crap / fake
  "лажовый": [3, 4], // Crappy / fake
  "залажать": [3, 5], // To fuck up
  "обсосок": [3, 4], // Sucked-on / worthless person
  "огрызок": [3, 4], // Stub / pathetic person
  "отброс": [3, 4], // Reject / waste
  "отбросы общества": [3, 4], // Dregs of society
  "шваль подзаборная": [3, 4], // Under-the-fence riff-raff
  "пропитый": [1, 3], // Drunk through / alcoholic
  "пропойца": [1, 3], // Drunkard
  "алкашка": [1, 3], // Female drunkard
  "синяк": [1, 3], // Blue / drunkard
  "синячка": [1, 3], // Female drunkard
  "забулдыга": [1, 3], // Drunkard / bum
  "скурвиться": [5, 4], // To become a whore / traitor

  // === EXPANSION: More homophobic slurs ===
  "пидорок ёбаный": [5, 5], // Fucking little faggot
  "пидор гнойный": [5, 4], // Pus-filled faggot
  "гомик": [5, 4], // Gay (derogatory diminutive)
  "гомосятник": [5, 4], // Gay hangout (derogatory)
  "задницелюб": [5, 4], // Ass-lover (derogatory)
  "жопник ёбаный": [5, 5], // Fucking ass-person
  "педрила": [5, 4], // Faggot (variant)
  "педераст": [5, 4], // Pederast
  "педерастия": [5, 4], // Pederasty
  "содомит": [5, 4], // Sodomite
  "содомия": [5, 4], // Sodomy
  "петух гамбургский": [5, 4], // Hamburg rooster (elaborate prison slur)
  "гребень": [5, 4], // Crest / prison bottom marker
  "пидорнутый": [5, 4], // Faggotized
  "опидорасить": [5, 4], // To make into a faggot
  "опидораситься": [5, 4], // To become a faggot
  "пидорство": [5, 4], // Faggotry
  "лесбиянка ёбаная": [5, 5], // Fucking lesbian
  "лесбуха грёбаная": [5, 5], // Fucking dyke
  "транс": [3, 3], // Trans (derogatory usage)
  "трансвестит": [5, 4], // Transvestite (derogatory)

  // === EXPANSION: More ethnic/racial slurs ===
  "чурбанина ёбаная": [5, 5], // Fucking block/Central Asian
  "чурка немытая": [5, 4], // Unwashed churka
  "черномазый": [5, 4], // Black-faced (racial slur)
  "черномазая": [5, 4], // Black-faced fem (racial slur)
  "чёрнож*пые": [5, 5], // Black-assed plural (racial slur)
  "жидяра пархатый": [5, 4], // Mangy Jew (slur)
  "жидёнок пейсатый": [5, 4], // Payot-wearing young Jew (slur)
  "жидовская морда": [5, 4], // Jewish face (slur)
  "пархатый": [5, 4], // Mangy / antisemitic slur
  "пейсатый": [5, 4], // Payot-wearing (antisemitic)
  "абрек": [5, 4], // Caucasian warrior / slur
  "хачик ёбаный": [5, 5], // Fucking Caucasian (slur)
  "ара": [5, 4], // Hey (Caucasian, used as slur)
  "даг ёбаный": [5, 5], // Fucking Dagestani (slur)
  "чечня ёбаная": [5, 5], // Fucking Chechnya (slur)
  "хохлы ёбаные": [5, 5], // Fucking Ukrainians (slur)
  "москальская рожа": [5, 4], // Muscovite mug (slur)
  "кацапня ёбаная": [5, 5], // Fucking Russians (from Ukrainian)
  "узкоглазая морда": [5, 4], // Slant-eyed face (slur)
  "чукотка": [5, 4], // Chukotka (used as insult)
  "чинарик": [5, 4], // Cigarette butt / Asian slur
  "цыган": [5, 4], // Gypsy (derogatory)
  "цыганка": [5, 4], // Gypsy woman (derogatory)
  "цыганьё": [5, 4], // Gypsies collective (derogatory)
  "цыганва": [5, 4], // Gypsies collective (vulgar)
  "нехристь": [5, 4], // Non-Christian / heathen (insult)
  "басурман": [5, 4], // Infidel (archaic slur)
  "мигрант ёбаный": [5, 5], // Fucking migrant
  "гастарбайтер": [5, 4], // Guest worker (derogatory usage)
  "понаехали": [5, 4], // They've all come here (xenophobic)
  "понаехавший": [5, 4], // One who came here (xenophobic)

  // === EXPANSION: More sexual terms ===
  "ебать в жопу": [4, 5], // To fuck in the ass
  "ебать в рот": [4, 5], // To fuck in the mouth
  "совокупляться": [2, 3], // To copulate (vulgar context)
  "совокупление": [2, 3], // Copulation
  "траханье": [4, 5], // Fucking (noun)
  "сношение": [2, 3], // Intercourse
  "половой акт": [2, 3], // Sexual act
  "групповуха": [4, 4], // Group sex
  "тройничок": [4, 4], // Threesome (diminutive)
  "свингер": [4, 4], // Swinger
  "свингерство": [4, 4], // Swinging
  "секс-рабыня": [4, 4], // Sex slave
  "секс-раб": [4, 4], // Sex slave (masc)
  "изнасилование": [5, 5], // Rape
  "изнасиловать": [5, 5], // To rape
  "растление": [4, 4], // Corruption / molestation
  "растлитель": [4, 4], // Molester
  "совратить": [4, 4], // To seduce / corrupt
  "совратитель": [4, 4], // Seducer / corrupter
  "педофилия": [5, 5], // Pedophilia
  "инцест": [5, 5], // Incest
  "некрофилия": [4, 4], // Necrophilia
  "зоофилия": [4, 4], // Zoophilia
  "скотоложство": [5, 5], // Bestiality
  "скотоложец": [5, 5], // Person practicing bestiality

  "проститутка": [5, 4], // Prostitute
  "проститутка ёбаная": [5, 5], // Fucking prostitute
  "путана": [5, 4], // Prostitute (from Italian)
  "блядей ебать": [5, 5], // To fuck whores
  "ёбарь-террорист": [4, 5], // Fucker-terrorist (insult)
  "ебарь конченый": [4, 5], // Finished fucker
  "кончить на лицо": [4, 4], // To cum on face
  "кончить в рот": [4, 4], // To cum in mouth
  "сосать хуй": [4, 4], // To suck dick
  "лизать пизду": [4, 4], // To lick pussy
  "лизать жопу": [4, 4], // To lick ass
  "лизоблюд": [4, 4], // Ass-licker / sycophant
  "анальный секс": [4, 4], // Anal sex
  "вагинальный секс": [4, 4], // Vaginal sex
  "оральный секс": [4, 5], // Oral sex
  "глубокий минет": [4, 5], // Deep blowjob
  "глотать сперму": [4, 4], // To swallow cum
  "дрочить хуй": [4, 4], // To jerk a dick
  "фистинг": [4, 4], // Fisting
  "золотой дождь": [4, 4], // Golden shower
  "копрофилия": [4, 4], // Coprophilia

  // === EXPANSION: More vulgar body parts ===
  "жопище": [4, 3], // Big ass (augmentative variant)
  "срака": [4, 4], // Ass (vulgar)
  "сракотанина": [4, 3], // Ass-person (augmentative)
  "мудасос": [4, 3], // Ball-sucker
  "яйцевёрт": [4, 3], // Ball-turner
  "яйцелом": [4, 3], // Ball-breaker
  "мохнорылый": [4, 3], // Hairy-snouted
  "волосатая пизда": [5, 5], // Hairy cunt
  "дырка": [4, 4], // Hole (vulgar for vagina/ass)
  "щель": [4, 4], // Slit (vulgar)
  "щёлка": [4, 4], // Little slit (vulgar)
  "пилотка": [4, 4], // Garrison cap / vulgar for vagina
  "манда рваная": [5, 5], // Torn cunt
  "пизда драная": [5, 5], // Torn cunt (variant)
  "жопа волосатая": [4, 3], // Hairy ass
  "пиздищe": [5, 5], // Big cunt (augmentative)
  "хуйчик": [4, 3], // Little dick (diminutive)
  "хуишко": [4, 3], // Pathetic dick
  "членище": [4, 3], // Big dick (augmentative)
  "членистоногий": [4, 3], // Arthropod / dick-legged (pun insult)
  "клиторишко": [4, 3], // Pathetic clitoris

  // === EXPANSION: Regional Ukrainian-Russian crossover ===
  "сука бляд": [5, 4], // Bitch whore (crossover)
  "йобаний": [3, 5], // Fucking (Ukrainian spelling in Russian)
  "йобана мати": [3, 5], // Fucking mother (Ukrainian crossover)
  "курва ёбаная": [5, 5], // Fucking whore (Polish/Ukrainian crossover)
  "курвяще": [3, 4], // Whoring (Ukrainian crossover)
  "пішов нахуй": [3, 5], // Go fuck yourself (Ukrainian)
  "гандон штопаный": [3, 4], // Darned condom
  "гондон рваный": [3, 4], // Torn condom
  "сучья потроха": [3, 4], // Bitch's innards
  "ёб твою суку мать": [3, 5], // Fuck your bitch mother
  "пиздюк малолетний": [3, 5], // Underage little shit
  "пиздюшка мелкая": [5, 5], // Tiny little cunt
  "ёбаный пидор": [3, 5], // Fucking faggot
  "мудак конченый": [3, 4], // Finished asshole
  "мудак штопаный": [3, 4], // Darned asshole
  "ёбаный мудила": [1, 4], // Fucking dumbass
  "хуй собачий": [4, 4], // Dog's dick
  "хуй лошадиный": [4, 4], // Horse's dick
  "ебанарот ёбаный": [3, 5], // Fucking fucked-in-mouth
  "пиздабол хренов": [3, 4], // Crappy liar

  // === EXPANSION: Internet meme-based profanity ===
  "сасай": [2, 3], // Suck (internet distortion)
  "сасай нижний": [2, 3], // Suck from below (internet meme)
  "рот ебал": [3, 5], // Mouth fucked (internet)
  "иди лесом": [2, 3], // Go through the forest (go away)
  "пнх": [3, 5], // Go fuck yourself (abbreviation)
  "нах": [3, 5], // Fuck (abbreviation)
  "бля буду": [2, 3], // I swear (vulgar)
  "ёбанаврот": [3, 5], // Fucked in mouth (one word internet)
  "хуяссе": [3, 5], // Holy fuck (internet spelling)
  "нихуясебе": [3, 5], // Holy fuck (one word)
  "ёпт блять": [3, 5], // Fuck damn (combined)
  "ёпта мать": [3, 5], // Fuck mother (internet)
  "хуита": [3, 5], // Bullshit (internet slang)
  "хуитка": [3, 5], // Little bullshit (internet)
  "залупаться на ровном месте": [4, 3], // To be a dick for no reason
  "ебанутая хуйня": [3, 5], // Crazy bullshit
  "пиздёшь как дышишь": [2, 3], // You lie like you breathe
  "ты чё ебанутый": [3, 5], // Are you fucking crazy
  "совсем ёбнулся": [2, 3], // Completely lost it
  "охуел в край": [2, 3], // Gone completely insane
  "ахуеть дайте два": [3, 5], // Holy fuck give me two (meme)
  "пиздец котёнку": [2, 3], // Disaster for the kitten (meme)
  "жопа мира": [3, 3], // Ass of the world (middle of nowhere)
  "ёбаный стыд блять": [3, 5], // Fucking shame damn
  "дно ёбаное": [3, 5], // Fucking bottom (worst of worst)
  "хуйня на постном масле": [3, 5], // Bullshit on lean oil (nonsense)
  "жизнь-боль": [2, 3], // Life is pain
  "шлюха подзаборная ёбаная": [5, 5], // Fucking under-the-fence whore
  "кусок говна": [3, 5], // Piece of shit
  "мешок с говном": [3, 5], // Bag of shit
  "бочка с говном": [3, 5], // Barrel of shit
  "выблядок ёбаный": [3, 4], // Fucking bastard child
  "ебанашка конченая": [2, 3], // Finished crazy person
  "дебил ёбаный": [3, 5], // Fucking imbecile
  "дебилоид": [2, 3], // Debiloid (internet insult)
  "имбецилоид": [2, 3], // Imbeciloid (internet insult)
  "даунито": [2, 3], // Down-person (internet insult)
  "аутист": [2, 3], // Autist (internet insult)
  "шизоид": [2, 3], // Schizoid (internet insult)
  "кукухой поехал": [2, 3], // Lost the cuckoo (went crazy)
  "крышей поехал": [2, 3], // Lost the roof (went crazy)
  "крыша поехала": [2, 3], // The roof went (went crazy)

  // === EXPANSION: More vulgar expressions ===
  "ёбаный насрать": [3, 5], // Fucking shit
  "насрать": [3, 5], // To shit / don't care
  "насрал": [3, 4], // Shat (past tense)
  "обоссать": [3, 4], // To piss on
  "обоссанный": [3, 4], // Pissed on
  "обосрать": [3, 5], // To shit on (someone)
  "обосранный": [3, 4], // Shat on
  "зассать": [3, 4], // To piss / be scared
  "зассанец": [1, 4], // Pissy coward
  "зассанка": [1, 4], // Pissy coward (fem)
  "нассать": [3, 4], // To piss (on)
  "вонючий": [3, 4], // Stinky
  "вонючка": [3, 4], // Stinky person
  "смердить": [3, 4], // To reek
  "вонища": [3, 4], // Big stink
  "блевать": [3, 4], // To puke
  "блевотина": [3, 4], // Vomit / disgusting thing
  "тошнотворный": [3, 4], // Nauseating
  "дристать": [3, 4], // To have diarrhea
  "дристун": [3, 4], // Diarrhea-haver
  "понос": [3, 4], // Diarrhea
  "поносник": [3, 4], // Diarrhea person
  "рыгать": [3, 4], // To belch
  "отрыжка": [3, 4], // Belch / disgusting person
  "ссыкун": [1, 4], // Pisser / coward
  "ссыкуха": [1, 4], // Pisser / coward (fem)
  "ссыкло": [1, 4], // Pisser collective / coward
  "зассыха": [3, 4], // Scared pisser (fem)
  "обоссышка": [3, 4], // Piss-pants
  "обоссанка": [3, 4], // Piss-pants (fem)

  // === EXPANSION: More elaborate insults ===
  "ёбаный ты в рот через жопу": [3, 5], // Fucked in the mouth through the ass
  "хуй на воротник": [4, 4], // Dick on the collar
  "пизда на палочке": [5, 5], // Cunt on a stick
  "блять ебучая": [5, 5], // Fucking whore
  "мразь подзаборная": [1, 4], // Under-the-fence scum
  "тварь ёбаная": [3, 5], // Fucking creature
  "скотина тупая": [1, 4], // Dumb beast
  "мразота бесконечная": [1, 4], // Infinite scum
  "гнида ёбаная": [3, 5], // Fucking nit
  "гнида вшивая": [1, 4], // Lousy nit
  "падла ёбаная": [3, 4], // Fucking bastard
  "сука рваная": [1, 4], // Torn bitch
  "сука драная": [1, 4], // Ragged bitch
  "сучара ёбаная": [3, 5], // Fucking big bitch
  "козлина вонючая": [1, 4], // Stinking goat
  "тупорылая свинья": [1, 4], // Blunt-snouted pig
  "ебанатик": [1, 4], // Crazy person (diminutive)
  "ебанат конченый": [3, 5], // Finished crazy fucker
  "долбоёб конченый": [1, 4], // Finished dumbfuck
  "долбоёбина": [1, 4], // Big dumbfuck
  "дурак набитый": [1, 4], // Stuffed fool
  "дура набитая": [1, 4], // Stuffed fool (fem)
  "полный пиздец": [1, 4], // Complete disaster
  "полная жопа": [3, 4], // Complete ass (in trouble)
  "полный пиздос": [1, 4], // Complete disaster (variant)
  "попадос": [1, 3], // Gotcha / in trouble (slang)
  "кирдык": [1, 4], // The end / kaput
  "звиздец": [2, 3], // Disaster (euphemistic variant)
  "капец": [2, 3], // The end (euphemistic)
  "трындец": [2, 3], // The end (euphemistic)
  "амбец": [2, 3], // The end (euphemistic)
  "абзац": [2, 3], // Paragraph / the end (euphemistic)
  "бздеть": [1, 4], // To fart silently / to be scared
  "набздеть": [3, 5], // To fart / to talk shit
  "вонь": [1, 4], // Stench
  "пердёж": [1, 4], // Farting
  "пердильник": [1, 4], // Fart-maker
  "пердунья": [1, 4], // Female farter
  "старый пердун": [1, 4], // Old fart
  "старая карга": [1, 4], // Old hag
  "кошёлка": [1, 4], // Old bag (insult for old woman)
  "каракатица": [1, 4], // Cuttlefish / ugly old woman
  "жаба": [1, 4], // Toad / ugly woman
  "крокодил": [1, 4], // Crocodile / ugly person
  "крокодилица": [1, 4], // Female crocodile / ugly woman
  "страшилище": [1, 4], // Fright / very ugly person
  "чмошница": [1, 4], // Female loser
  "позорище": [3, 4], // Disgrace / embarrassment
  "позор": [1, 4], // Shame / disgrace
  "ничтожка": [4, 4], // Nonentity (fem diminutive)
  "шелупонь": [1, 4], // Small fry / riff-raff
  "шушера": [1, 4], // Riff-raff
  "отребье": [1, 4], // Dregs / scum
  "шайка": [1, 4], // Gang (derogatory)
  "шарлатан": [1, 4], // Charlatan
  "проходимец": [1, 4], // Scoundrel / con artist
  "аферист": [1, 4], // Swindler
  "мошенник": [1, 4], // Fraudster
  "жулик": [1, 4], // Crook
  "жульё": [1, 4], // Crooks collective
  "ворьё": [1, 4], // Thieves collective
  "уголовник": [1, 4], // Criminal
  "уголовщина": [1, 4], // Criminal activity
  "отморозок ёбаный": [3, 5], // Fucking thug
  "скользкий тип": [1, 4], // Slippery type
  "мутный тип": [1, 4], // Murky type / shady person
  "стрёмный": [1, 4], // Sketchy / scary
  "стрёмно": [1, 4], // Sketchy (adverb)
  "стремак": [1, 4], // Fear / sketchy situation
  "западло": [1, 4], // Below one's dignity / low blow
  "впадлу": [1, 4], // Can't be bothered / too low
  "канать": [1, 3], // To go / act (criminal slang)
  "тусить": [1, 3], // To hang out (slang)
  "бухать": [1, 4], // To drink heavily
  "бухло": [1, 4], // Booze
  "бухой": [1, 3], // Drunk
  "бухарик": [1, 3], // Drunkard (slang)
  "нажраться": [1, 4], // To get wasted
  "нажратый": [1, 4], // Wasted
  "упитый": [1, 3], // Dead drunk
  "упиться": [1, 4], // To drink oneself dead
  "ужратый": [1, 4], // Totally wasted
  "ужраться": [1, 4], // To get completely wasted
  "наклюкаться": [1, 3], // To get tipsy/drunk
  "нализаться": [1, 3], // To get drunk (lit. lick oneself)
  "гнойный": [1, 4], // Pus-filled / disgusting
  "гнойник": [1, 4], // Abscess / disgusting person
  "гнида подколодная": [1, 4], // Under-the-log nit
  "змея подколодная": [1, 4], // Under-the-log snake
  "ехидна": [1, 4], // Echidna / venomous person
  "гадюка": [1, 4], // Viper / vile woman
  "кобра": [1, 4], // Cobra / vile woman
  "плесень": [1, 4], // Mold / pathetic person
  "грибок": [1, 4], // Fungus / pest
  "вошь": [1, 4], // Louse
  "клоп": [1, 4], // Bedbug
  "таракан": [4, 4], // Cockroach
  "клоп вонючий": [1, 4], // Stinking bedbug
  "муха навозная": [1, 4], // Dung fly
  "глист": [1, 4], // Tapeworm / skinny person
  "амёба": [1, 4], // Amoeba / spineless person
  "инфузория": [1, 4], // Infusorian / pathetic creature
  "одноклеточный": [1, 4], // Single-celled (insult for stupid)
  "питекантроп": [1, 4], // Pithecanthropus / caveman insult
  "неандерталец": [1, 4], // Neanderthal (insult)
  "примат": [1, 4], // Primate (insult)

  // ========================================
  // === EXPANSION: Exhaustive хуй derivatives ===
  // ========================================
  "хуйня полная": [3, 4], // Complete nonsense
  "хуйнюшка": [3, 4], // Little nonsense (diminutive)
  "хуёк": [4, 4], // Little dick (diminutive)
  "хуёчек": [4, 4], // Tiny dick (double diminutive)
  "хуёвенький": [3, 4], // Crappy (diminutive adj)
  "хуёвенько": [3, 4], // Crappily (adverb diminutive)
  "хуевато": [3, 4], // Somewhat crappily
  "хуесоска": [4, 4], // Dick sucker (fem)
  "хуемоё": [4, 4], // Dick mine (exclamation)
  "хуев": [4, 4], // Dick's (genitive)
  "хуева": [4, 4], // Dick's (fem genitive)
  "хуевы": [4, 4], // Dick's (plural genitive)
  "хуевой": [4, 4], // Dick-like (adjective)
  "хуевая": [4, 4], // Dick-like (fem adj)
  "хуевое": [4, 4], // Dick-like (neuter adj)
  "хуевые": [4, 4], // Dick-like (plural adj)
  "захуяривать": [3, 4], // To keep doing forcefully (imperfective)
  "захуячил": [3, 4], // Did forcefully (past masc)
  "захуячила": [3, 4], // Did forcefully (past fem)
  "захуячили": [3, 4], // Did forcefully (past plural)
  "отхуячил": [3, 4], // Beat up (past masc)
  "отхуячила": [3, 4], // Beat up (past fem)
  "отхуячили": [3, 4], // Beat up (past plural)
  "прихуячить": [3, 4], // To attach forcefully
  "прихуячил": [3, 4], // Attached forcefully (past masc)
  "исхуячить": [3, 4], // To beat thoroughly
  "исхуярить": [3, 4], // To beat thoroughly (variant)
  "расхуячил": [3, 4], // Smashed (past masc)
  "расхуячила": [3, 4], // Smashed (past fem)
  "перехуячить": [3, 4], // To redo / to hit across
  "нахуячился": [3, 4], // Got wasted (past masc)
  "нахуячилась": [3, 4], // Got wasted (past fem)
  "нахуячились": [3, 4], // Got wasted (past plural)
  "похуистка": [3, 5], // Person who doesn't give a fuck (fem)
  "похуисты": [3, 5], // People who don't give a fuck (plural)
  "похуистический": [3, 5], // Related to not giving a fuck
  "нихуяшеньки": [3, 5], // Not a single fucking thing (emphatic)
  "нехуй": [3, 4], // No need / nothing to
  "нехуёвый": [3, 4], // Not bad / impressive
  "нехуёво": [3, 4], // Not badly / impressively
  "охуеваю": [3, 4], // I'm stunned (1st person)
  "охуеваешь": [3, 4], // You're stunned (2nd person)
  "охуевает": [3, 4], // He's stunned (3rd person)
  "охуеваем": [3, 4], // We're stunned (1st plural)
  "охуеваете": [3, 4], // You're stunned (2nd plural)
  "охуевают": [3, 4], // They're stunned (3rd plural)
  "охуевшая": [3, 4], // Stunned (fem participle)
  "охуевшие": [3, 4], // Stunned (plural participle)
  "охуевшему": [3, 4], // To the stunned one (dative)
  "охуенный": [3, 5], // Fucking awesome
  "охуенная": [3, 5], // Fucking awesome (fem)
  "охуенное": [3, 5], // Fucking awesome (neuter)
  "охуенные": [3, 5], // Fucking awesome (plural)
  "охуительная": [3, 5], // Fucking amazing (fem)
  "охуительно": [3, 5], // Fucking amazingly
  "охуел": [3, 4], // Went crazy / stunned (past masc)
  "охуела": [3, 4], // Went crazy (past fem)
  "охуели": [3, 4], // Went crazy (past plural)
  "охуение": [3, 4], // Stunning / going crazy (noun)
  "выхуячить": [3, 4], // To throw out forcefully
  "вхуячить": [3, 4], // To shove in forcefully
  "вхуячил": [3, 4], // Shoved in (past masc)
  "ухуячить": [3, 4], // To leave quickly / to hit
  "ухуячил": [3, 4], // Left quickly / hit (past masc)
  "ухуячила": [3, 4], // Left quickly (past fem)
  "хуяришь": [3, 4], // You do intensively (2nd person)
  "хуячишь": [3, 4], // You do intensively (variant)
  "хуярим": [3, 4], // We do intensively (1st plural)
  "хуячим": [3, 4], // We do intensively (variant)
  "хуярят": [3, 4], // They do intensively (3rd plural)
  "хуячат": [3, 4], // They do intensively (variant)
  "хуйнул": [3, 4], // Did suddenly (past masc)
  "хуйнула": [3, 4], // Did suddenly (past fem)
  "хуйнули": [3, 4], // Did suddenly (past plural)
  "хуёвость": [3, 5], // Shittiness (noun)
  "хуйня собачья": [3, 5], // Canine bullshit

  // ========================================
  // === EXPANSION: Exhaustive пизда derivatives ===
  // ========================================
  "пиздюлька": [5, 5], // Little cunt thing
  "пиздёночка": [5, 5], // Tiny cunt (double diminutive)
  "пиздища": [5, 5], // Huge cunt (augmentative)
  "пиздоглазая": [5, 5], // Cunt-eyed (fem)
  "пиздоболить": [5, 5], // To talk cunt / to lie
  "пиздоболка": [5, 5], // Cunt-talker (fem)
  "пиздолизка": [5, 5], // Cunt-licker (fem)
  "пиздопромышленник": [5, 5], // Cunt industrialist (elaborate insult)
  "пиздатенький": [3, 4], // Kind of awesome (diminutive adj)
  "пиздато": [3, 5], // Fucking awesome (adverb)
  "пиздецки": [3, 4], // Disastrously (adverb)
  "пиздецовая": [3, 4], // Disastrous (fem adj)
  "пиздецовое": [3, 4], // Disastrous (neuter adj)
  "пиздецовые": [3, 4], // Disastrous (plural adj)
  "пиздюлей": [3, 4], // Beatings (genitive plural)
  "пиздюлину": [5, 5], // A beating / cunt-thing (accusative)
  "пизданутый": [3, 4], // Crazy / hit (participle)
  "пизданутая": [3, 4], // Crazy (fem participle)
  "пизданутые": [3, 4], // Crazy (plural)
  "спиздил": [3, 4], // Stole / lied (past masc)
  "спиздила": [3, 4], // Stole / lied (past fem)
  "спиздили": [3, 4], // Stole / lied (past plural)
  "распиздяйка": [3, 4], // Slacker (fem)
  "распиздяйство": [3, 4], // Slacking / carelessness
  "распиздяйски": [3, 4], // In a slacking manner
  "пропиздел": [3, 4], // Missed (past masc)
  "пропиздела": [3, 4], // Missed (past fem)
  "допиздеться": [3, 4], // To talk oneself into trouble
  "допизделся": [3, 4], // Talked into trouble (past masc)
  "отпиздил": [3, 4], // Beat up (past masc)
  "отпиздила": [3, 4], // Beat up (past fem)
  "отпиздили": [3, 4], // Beat up (past plural)
  "напиздел": [3, 4], // Lied a lot (past masc)
  "напиздела": [3, 4], // Lied a lot (past fem)
  "пиздеть": [3, 4], // To lie / to talk nonsense
  "пиздишь": [3, 4], // You're lying (2nd person)
  "пиздит": [3, 4], // He's lying (3rd person)
  "пиздим": [3, 4], // We're lying (1st plural)
  "пиздите": [3, 4], // You're lying (2nd plural)
  "пиздят": [3, 4], // They're lying (3rd plural)
  "пиздел": [3, 4], // Was lying (past masc)
  "пиздела": [3, 4], // Was lying (past fem)
  "пиздели": [3, 4], // Were lying (past plural)
  "упизднуть": [3, 4], // To leave quickly
  "упизднул": [3, 4], // Left quickly (past masc)
  "пиздюлей надавать": [3, 4], // To give beatings
  "пиздец нахуй блять": [3, 5], // Disaster to hell fuck (compound)

  // ========================================
  // === EXPANSION: Exhaustive блядь derivatives ===
  // ========================================
  "блядую": [5, 4], // I whore around (1st person)
  "блядуешь": [5, 4], // You whore around (2nd person)
  "блядует": [5, 4], // He/she whores around (3rd person)
  "блядуем": [5, 4], // We whore around (1st plural)
  "блядуете": [5, 4], // You whore around (2nd plural)
  "блядуют": [5, 4], // They whore around (3rd plural)
  "блядовал": [5, 4], // Whored around (past masc)
  "блядовала": [5, 4], // Whored around (past fem)
  "блядовали": [5, 4], // Whored around (past plural)
  "блядская": [3, 4], // Whorish (adj fem)
  "блядское": [3, 4], // Whorish (adj neuter)
  "блядские": [3, 4], // Whorish (adj plural)
  "блядски": [3, 4], // In a whorish manner (adverb)
  "бляденыш": [5, 4], // Whore's offspring
  "блядёнок": [5, 4], // Little whore's child
  "блядуга": [1, 4], // Big ugly whore (pejorative)
  "блядёха": [5, 4], // Whore (variant)
  "блядень": [3, 4], // Whorish person
  "разблядовать": [5, 4], // To whore out excessively

  // ========================================
  // === EXPANSION: Exhaustive ебать derivatives ===
  // ========================================
  "ебу": [3, 5], // I fuck (1st person)
  "ебёшь": [3, 5], // You fuck (2nd person)
  "ебёт": [3, 5], // He/she fucks (3rd person)
  "ебём": [3, 5], // We fuck (1st plural)
  "ебёте": [3, 5], // You fuck (2nd plural)
  "ебут": [3, 5], // They fuck (3rd plural)
  "ебал": [3, 5], // Fucked (past masc)
  "ебала": [3, 5], // Fucked (past fem)
  "ебали": [3, 5], // Fucked (past plural)
  "ебаться": [3, 5], // To fuck (reflexive)
  "ебётся": [3, 5], // He/she fucks (3rd person refl)
  "ебутся": [3, 5], // They fuck (3rd plural refl)
  "ебался": [3, 5], // Was fucking (past masc refl)
  "ебалась": [3, 5], // Was fucking (past fem refl)
  "ебались": [3, 5], // Were fucking (past plural refl)
  "ёбаная": [3, 5], // Fucking (fem adj)
  "ёбаное": [3, 5], // Fucking (neuter adj)
  "ёбаные": [3, 5], // Fucking (plural adj)
  "ебарь": [3, 5], // Fucker (variant without ё)
  "ёбаришка": [3, 5], // Little fucker (diminutive)
  "ебнуть": [3, 5], // To hit / to fuck suddenly
  "ебнул": [3, 5], // Hit / fucked suddenly (past masc)
  "ебнула": [3, 4], // Hit suddenly (past fem)
  "ебнули": [3, 4], // Hit suddenly (past plural)
  "ебнуться": [3, 4], // To go crazy / to fall
  "ебнулся": [3, 4], // Went crazy (past masc)
  "ебнулась": [3, 4], // Went crazy (past fem)
  "ебнулись": [3, 4], // Went crazy (past plural)
  "ебашу": [3, 4], // I'm doing intensively (1st person)
  "ебашишь": [3, 4], // You're doing intensively (2nd person)
  "ебашит": [3, 4], // He's doing intensively (3rd person)
  "ебашим": [3, 4], // We're doing intensively (1st plural)
  "ебашат": [3, 4], // They're doing intensively (3rd plural)
  "ебашил": [3, 4], // Was doing intensively (past masc)
  "ебашила": [3, 4], // Was doing intensively (past fem)
  "ебашили": [3, 4], // Were doing intensively (past plural)
  "наебал": [3, 4], // Deceived (past masc)
  "наебала": [3, 4], // Deceived (past fem)
  "наебали": [3, 4], // Deceived (past plural)
  "наебаться": [1, 3], // To get fed up / drunk
  "наебался": [3, 4], // Got fed up (past masc)
  "наебалась": [3, 4], // Got fed up (past fem)
  "наебались": [3, 4], // Got fed up (past plural)
  "наебалово": [3, 4], // Deception / scam
  "наёбщица": [3, 4], // Deceiver (fem)
  "заебала": [3, 4], // Annoyed (past fem)
  "заебали": [3, 4], // Annoyed (past plural)
  "заебательски": [3, 5], // Fucking awesomely
  "заебательский": [3, 5], // Fucking awesome (adj)
  "заёбы": [3, 4], // Annoyances (plural)
  "отъебись от меня": [3, 5], // Fuck off from me
  "отъебаться": [3, 5], // To fuck off (reflexive)
  "отъебался": [3, 5], // Fucked off (past masc)
  "отъебалась": [3, 5], // Fucked off (past fem)
  "отъебались": [3, 5], // Fucked off (past plural)
  "выебал": [3, 5], // Fucked / showed off (past masc)
  "выебала": [3, 5], // Fucked (past fem)
  "выебали": [3, 5], // Fucked (past plural)
  "выёбывается": [3, 4], // Is showing off (3rd person)
  "выёбываешься": [3, 4], // You're showing off (2nd person)
  "выёбываются": [3, 4], // They're showing off (3rd plural)
  "проебал": [3, 4], // Lost / missed (past masc)
  "проебала": [3, 4], // Lost (past fem)
  "проебали": [3, 4], // Lost (past plural)
  "уебал": [3, 4], // Hit hard (past masc)
  "уебок": [3, 4], // Fucker / bastard
  "уёбки": [3, 5], // Fuckers (plural)
  "приебался": [3, 4], // Pestered (past masc)
  "приебалась": [3, 4], // Pestered (past fem)
  "доебался": [3, 4], // Pestered to the end (past masc)
  "съебать": [3, 4], // To leave quickly
  "съебал": [3, 4], // Left quickly (past masc)
  "съебала": [3, 4], // Left quickly (past fem)
  "съебались": [3, 4], // Left quickly (past plural refl)
  "ебучая": [3, 5], // Fucking (fem adj)
  "ебучее": [3, 5], // Fucking (neuter adj)
  "ебучие": [3, 5], // Fucking (plural adj)
  "ебланка": [1, 4], // Female idiot
  "ебланище": [1, 4], // Big idiot
  "ебло": [1, 4], // Face (vulgar) / ugly mug
  "в ебло": [3, 4], // In the face (vulgar)
  "по еблу": [3, 4], // Across the face (vulgar)
  "заткни ебальник": [3, 4], // Shut your face (vulgar)

  // ========================================
  // === EXPANSION: Exhaustive сука derivatives ===
  // ========================================
  "сучья": [3, 4], // Bitch-like (adj fem)
  "сучье": [3, 4], // Bitch-like (adj neuter)
  "сучьи": [3, 4], // Bitch-like (adj plural)
  "сученыш": [3, 4], // Bitch's offspring
  "сучий потрох": [3, 4], // Bitch's innards
  "сучонок": [3, 4], // Little bitch's child
  "сучище": [3, 4], // Huge bitch (augmentative)
  "сучня": [3, 4], // Bitch-dom
  "сукин кот": [3, 4], // Bitch's cat
  "сукина дочь": [3, 4], // Bitch's daughter
  "сукины дети": [3, 4], // Bitch's children

  // ========================================
  // === EXPANSION: Criminal/prison slang (феня) ===
  // ========================================
  "мусора": [3, 4], // Cops (plural)
  "менты": [3, 4], // Cops (plural)
  "ментовка": [3, 4], // Police station
  "легаш": [3, 4], // Cop (slang variant)
  "фараон": [3, 4], // Cop (criminal slang)
  "лоха": [3, 4], // Sucker (fem)
  "лохануться": [3, 4], // To get suckered
  "лоханулся": [3, 4], // Got suckered (past masc)
  "лоханулась": [3, 4], // Got suckered (past fem)
  "кинуть": [3, 4], // To throw / to scam
  "кинул": [3, 4], // Scammed (past masc)
  "зона": [3, 4], // Prison camp / zone
  "зек": [3, 4], // Prisoner
  "зечка": [3, 4], // Female prisoner
  "зэк": [3, 4], // Prisoner (variant)
  "тюряга": [3, 4], // Prison (slang)
  "кича": [3, 4], // Prison (slang)
  "малява": [3, 4], // Secret letter in prison
  "шестерить": [3, 4], // To be a lackey
  "стукачка": [3, 4], // Snitch (fem)
  "стукачество": [3, 4], // Snitching
  "стучать": [3, 4], // To snitch
  "настучать": [3, 4], // To snitch (perfective)
  "крысить": [3, 4], // To steal from own
  "крысятничать": [3, 4], // To steal from own (imperfective)
  "козлятина": [3, 4], // Goat meat / scum
  "пахан": [3, 4], // Boss (criminal)
  "братва": [3, 4], // Brotherhood / gangsters
  "бычить": [3, 4], // To act tough / to bully
  "бык": [3, 4], // Bull / enforcer
  "бычара": [3, 4], // Big bull / big enforcer
  "замочил": [3, 4], // Killed (past masc)
  "грохнул": [3, 4], // Killed (past masc)
  "вальнуть": [3, 4], // To kill (slang)
  "вальнул": [3, 4], // Killed (past masc)
  "торчки": [3, 4], // Drug addicts (plural)
  "торчиха": [3, 4], // Female drug addict
  "наркоманка": [3, 4], // Female drug addict
  "наркота": [3, 4], // Drugs (slang)
  "гоп-стоп": [3, 4], // Mugging
  "гопница": [3, 4], // Female gopnik
  "шпанёнок": [3, 4], // Little hoodlum
  "босяк": [3, 4], // Tramp / lowlife
  "босячка": [3, 4], // Female tramp

  // ========================================
  // === EXPANSION: Ethnic slurs used in Russian ===
  // ========================================
  "хачи": [5, 4], // Caucasians (slur plural)
  "чучмек": [5, 4], // Asian person (slur)
  "чурки": [5, 4], // Central Asians (slur plural)
  "узкоглазая": [5, 4], // Narrow-eyed (fem racist slur)
  "косоглазая": [5, 4], // Slant-eyed (fem racist slur)
  "жидёнок": [5, 4], // Little kike (antisemitic)
  "жиды": [5, 4], // Kikes (plural antisemitic)
  "жидовская": [5, 4], // Kike-like (fem adj)
  "жидовщина": [5, 4], // Kike-ness (antisemitic)
  "хохлы": [5, 4], // Ukrainians (slur plural)
  "хохляцкий": [5, 4], // Ukrainian (adj slur)
  "москали": [5, 4], // Muscovites (slur plural)
  "пшек": [5, 4], // Pole (slur)
  "пшеки": [5, 4], // Poles (slur plural)
  "чухонец": [5, 4], // Finn (slur)
  "чухонка": [5, 4], // Finn (fem slur)
  "азеры": [5, 4], // Azerbaijanis (slur plural)

  // ========================================
  // === EXPANSION: Transliterated/Romanized versions ===
  // ========================================
  "blyat'": [3, 5], // Fuck (romanized variant)
  "blyadstvo": [5, 5], // Whoredom (romanized)
  "suchara": [3, 5], // Big bitch (romanized)
  "mudila": [3, 5], // Asshole (romanized variant)
  "pidar": [3, 5], // Faggot (romanized)
  "huylo": [4, 5], // Dickhead (romanized variant)
  "idi nahuy": [3, 5], // Go fuck yourself (romanized variant)
  "pizdyuk": [3, 5], // Brat (romanized)
  "pizdato": [3, 5], // Awesome (romanized)
  "ohuyel": [3, 5], // Went crazy (romanized)
  "ohuyenno": [3, 5], // Fucking awesome (romanized)
  "ohuyet": [3, 5], // Holy fuck (romanized)
  "ebat'": [3, 5], // To fuck (romanized variant)
  "yebat'": [3, 5], // To fuck (romanized variant)
  "yob tvoyu mat": [3, 5], // Fuck your mother (romanized)
  "eb tvoyu mat": [3, 5], // Fuck your mother (romanized)
  "zaebal": [3, 5], // Fed up (romanized)
  "zaebali": [3, 5], // Fed up (romanized plural)
  "vyblyadok": [3, 5], // Bastard (romanized)
  "zasranets": [3, 5], // Little shit (romanized)
  "kozel": [3, 5], // Goat / asshole (romanized)
  "tupoy": [1, 5], // Stupid (romanized)
  "cyka": [3, 4], // Bitch (romanized internet spelling)
  "cyka blyat": [3, 4], // Bitch fuck (romanized, famous gaming phrase)
  "suka blyat": [3, 5], // Bitch fuck (romanized variant)
  "pizdec nahui blyat": [3, 5], // Disaster to hell fuck (romanized)
  "sosi hui": [4, 5], // Suck dick (romanized)
  "sosi huy": [4, 5], // Suck dick (romanized variant)

  // ========================================
  // === EXPANSION: Internet slang (падонки language / олбанский) ===
  // ========================================
  "аффтар": [2, 3], // Author (paddonki spelling)
  "аффтар жжот": [2, 3], // Author burns (paddonki, meaning great content)
  "жжош": [2, 3], // You burn (paddonki, meaning great)
  "выпей йаду": [2, 3], // Drink poison (paddonki spelling)
  "убей себя ап стену": [5, 5], // Kill yourself against the wall (paddonki)
  "фтопку": [2, 3], // Into the fire / to hell (paddonki)
  "пиздос": [2, 3], // Disaster (variant of пиздец)
  "жопочка": [3, 3], // Cute little ass (double diminutive)
  "жопастая": [3, 3], // Big-assed (fem)
  "жопастый": [3, 3], // Big-assed (masc)
  "жополизка": [3, 3], // Ass-licker (fem)
  "жопорез": [3, 3], // Ass-cutter (insult)
  "в жопу": [3, 3], // In the ass
  "в жопу пьяный": [1, 3], // Drunk to the ass / very drunk
  "ржунимагу": [2, 3], // Rolling on floor laughing (paddonki)
  "пацтолом": [2, 3], // Under the table laughing (paddonki)
  "зачот": [3, 3], // Passing grade / excellent (paddonki)
  "незачот": [2, 3], // Failing grade / terrible (paddonki)
  "кг/ам": [5, 5], // Kill yourself (abbreviation, paddonki)
  "ниасилил": [2, 3], // Couldn't handle (paddonki)
  "многа букф": [2, 3], // Too many letters (paddonki)
  "йа криветко": [2, 3], // I'm a shrimp (paddonki, meaning shocked)
  "аццкий сотона": [2, 3], // Hellish Satan (paddonki)
  "жывотное": [2, 3], // Animal (paddonki spelling)
  "превед": [2, 3], // Hi (paddonki, from internet meme)
  "медвед": [2, 3], // Bear (paddonki, from internet meme)
  "быдляк": [2, 3], // One of the riff-raff
  "быдлячий": [2, 3], // Cattle-like / riff-raff-like
  "нуб": [2, 3], // Noob (transliterated)
  "нубас": [2, 3], // Noob (slang)
  "задрочка": [2, 3], // Female nerd (derogatory)
  "днарь": [2, 3], // Bottom feeder / bad player (gaming)
  "дно": [2, 3], // Bottom / worst (slang)
  "дно общества": [2, 3], // Bottom of society

  // ========================================
  // === EXPANSION: Euphemistic substitutions ===
  // ========================================
  "блинский": [2, 3], // Pancake-like (euphemism for блядский)
  "ёлки-палки": [2, 3], // Fir-sticks (euphemism for ёб)
  "ёлки-моталки": [2, 3], // Fir-winders (euphemism for ёб)
  "ёшкин крот": [2, 3], // Yoshkin mole (euphemism for ёб)
  "ёж твою мать": [2, 3], // Hedgehog your mother (euphemism)
  "ядрёна мать": [2, 3], // Core mother (euphemism for ёб)
  "ядрён батон": [2, 3], // Core baton (euphemism)
  "фиг": [2, 3], // Fig (euphemism for хуй)
  "фигово": [2, 3], // Figgishly (euphemism for хуёво)
  "фиговый": [2, 3], // Figgish (euphemism for хуёвый)
  "фигачить": [2, 3], // To fig-do (euphemism for хуячить)
  "пофиг": [2, 3], // Don't care (euphemism for похуй)
  "пофигу": [2, 3], // Don't care (variant euphemism)
  "пофигизм": [2, 3], // Don't-care-ism (euphemism for похуизм)
  "пофигист": [2, 3], // Don't-care person (euphemism)
  "пофигистка": [2, 3], // Don't-care person fem (euphemism)
  "до фига": [2, 3], // A lot of figs (euphemism for дохуя)
  "офигел": [2, 3], // Was figged (past, euphemism)
  "офигела": [2, 3], // Was figged (past fem, euphemism)
  "офигели": [2, 3], // Were figged (past plural, euphemism)
  "офигенный": [2, 3], // Fig-amazing (euphemism for охуенный)
  "офигенно": [2, 3], // Fig-amazingly (euphemism)
  "офигительный": [2, 3], // Fig-incredible (euphemism)
  "офигительно": [2, 3], // Fig-incredibly (euphemism)
  "хренотень": [2, 3], // Horseradish nonsense (euphemism)
  "хрень": [2, 3], // Horseradish thing (euphemism for хуйня)
  "до хрена": [2, 3], // A lot of horseradish (euphemism)
  "охренеть": [2, 3], // To horseradish (euphemism for охуеть)
  "охренел": [2, 3], // Was horseradished (past, euphemism)
  "охренела": [3, 4], // Was horseradished (past fem)
  "охренели": [3, 4], // Were horseradished (past plural)
  "звездец": [2, 3], // Stardec (euphemism for пиздец)
  "жесть": [2, 3], // Tin / harsh (euphemism for пиздец)
  "жестко": [2, 3], // Harshly (euphemism variant)
  "ё-моё": [2, 3], // Oh-mine (euphemism exclamation)
  "мля": [2, 3], // Mlya (euphemism for блять)
  "млять": [2, 3], // Mlyat' (euphemism for блять)
  "бляха-муха": [2, 3], // Buckle-fly (euphemism for блядь)
  "бляха": [2, 3], // Buckle (euphemism for блядь)

  // ========================================
  // === EXPANSION: Compound insult phrases ===
  // ========================================
  "пошла нахуй": [3, 5], // Go fuck yourself (fem)
  "пошли нахуй": [3, 5], // Go fuck yourselves (plural)
  "пошли все нахуй": [3, 5], // Everyone go fuck yourselves
  "да пошли вы": [3, 5], // Go fuck yourselves
  "соси хуй": [4, 4], // Suck dick
  "лижи жопу": [3, 4], // Lick ass
  "лижи мне жопу": [3, 4], // Lick my ass
  "я ебал": [3, 5], // I fucked / I don't care
  "я ебал тебя": [3, 5], // I fucked you
  "я ебал твою мать": [3, 5], // I fucked your mother
  "ебать тебя в рот": [3, 5], // Fuck you in the mouth
  "ебать тебя в жопу": [3, 5], // Fuck you in the ass
  "ебать колотить": [3, 5], // Fuck-knock (exclamation)
  "ебёна мать": [3, 5], // Fucked mother (exclamation)
  "мать вашу": [1, 4], // Your mother (plural)
  "убью нахуй": [3, 5], // I'll kill, fuck
  "убью сука": [1, 4], // I'll kill you, bitch
  "сдохни": [5, 5], // Die / croak
  "сдохни тварь": [5, 5], // Die, creature
  "сдохни мразь": [5, 5], // Die, scum
  "сдохни сука": [5, 5], // Die, bitch
  "чтоб ты сдох": [1, 4], // May you croak
  "чтоб ты сдохла": [1, 4], // May you croak (fem)
  "чтоб тебе пусто было": [1, 4], // May emptiness be upon you
  "горите в аду": [1, 4], // Burn in hell
  "гори в аду": [1, 4], // Burn in hell (singular)
  "отвали": [1, 4], // Bug off
  "отвали от меня": [1, 4], // Bug off from me
  "отвяжись": [1, 4], // Detach yourself / leave me alone
  "отсоси у тракториста": [1, 4], // Suck a tractor driver's (famous expression)
  "закрой пасть": [1, 4], // Shut your maw
  "заткнись": [1, 4], // Shut up
  "заткнись нахуй": [3, 5], // Shut the fuck up
  "заткни пасть": [1, 4], // Shut your maw
  "заткни хлебало": [1, 4], // Shut your food hole
  "заткни хавало": [1, 4], // Shut your food hole (variant)
  "в ахуе": [1, 4], // In a state of shock (vulgar)
  "ахуеть": [1, 4], // To be shocked (variant of охуеть)
  "ахуенно": [3, 5], // Fucking awesome (variant)
  "ахуенный": [3, 5], // Fucking awesome (adj variant)
  "хуйню несёшь": [3, 5], // You're spouting bullshit
  "хуйню городишь": [3, 5], // You're building bullshit
  "не пизди": [1, 4], // Don't lie
  "не ебёт": [3, 5], // Doesn't matter / doesn't fuck
  "меня не ебёт": [3, 5], // I don't give a fuck
  "ебись оно всё конём": [3, 5], // Let it all fuck itself with a horse
  "ни хуя": [3, 5], // Nothing / not a fucking thing
  "ни хера": [2, 3], // Nothing (euphemism for ни хуя)
  "ни хрена": [2, 3], // Nothing (lighter euphemism)
  "до хуя": [3, 5], // A lot / a fuck-ton
  "дохуя": [1, 4], // A lot (one word)
  "дохуя и больше": [1, 4], // A lot and more
  "дохуища": [1, 4], // A huge lot (augmentative)
  "хуй его знает": [4, 4], // Dick knows him / who the hell knows
  "хуй с ним": [4, 4], // Dick with him / forget about it
  "с какого хуя": [4, 5], // From what dick / why the fuck
  "нахуя": [3, 5], // Why the fuck
  "на кой хуй": [4, 5], // For what dick / why the fuck
  "хуёвый день": [3, 5], // Shitty day
  "хуёвое настроение": [3, 5], // Shitty mood
  "хуёвая погода": [3, 5], // Shitty weather
  "хуёвая жизнь": [3, 5], // Shitty life
  "ебать ты дурак": [1, 4], // Fuck you're a fool
  "ебать ты тупой": [1, 4], // Fuck you're stupid

  // ========================================
  // === EXPANSION: More general insults and vulgarisms ===
  // ========================================
  "рожа кирпича просит": [1, 4], // Face begs for a brick
  "рыло": [1, 4], // Snout / ugly face
  "мурло": [1, 4], // Mug / ugly face
  "ёбаная рожа": [3, 5], // Fucking mug
  "тупорылая": [1, 4], // Blunt-snouted (fem)
  "тупоголовая": [1, 4], // Dull-headed (fem)
  "тупая скотина": [1, 4], // Dumb beast
  "дубина стоеросовая": [1, 4], // Oak-growth club (elaborate insult)
  "пень": [1, 4], // Stump / blockhead
  "пень с глазами": [1, 4], // Stump with eyes
  "бревно": [1, 4], // Log / blockhead
  "чурбан неотёсанный": [1, 4], // Uncut block
  "балбес": [1, 4], // Idiot
  "балбесина": [1, 4], // Big idiot
  "осёл": [1, 4], // Donkey
  "ослица": [1, 4], // Female donkey
  "овца": [1, 4], // Sheep / female idiot
  "свинья свиньёй": [1, 4], // Pig being a pig
  "грязнуля": [1, 3], // Dirty person (informal)
  "неряха": [1, 4], // Slob
  "чморить": [1, 4], // To humiliate (variant)
  "замухрышка": [1, 4], // Ugly unkempt person
  "пугало": [1, 4], // Scarecrow / ugly person
  "пугало огородное": [1, 4], // Garden scarecrow
  "уродище": [1, 4], // Very ugly person (augmentative)
  "уродский": [1, 4], // Ugly / freakish (adj)
  "жирный": [1, 4], // Fat (masc)
  "жирная": [1, 4], // Fat (fem)
  "жирдяйка": [1, 4], // Fatty (fem)
  "жирюга": [1, 4], // Big fatty
  "сало ходячее": [1, 4], // Walking lard
  "бочка": [1, 4], // Barrel / very fat person
  "корова": [1, 4], // Cow / fat woman
  "бегемот": [1, 4], // Hippo / fat person
  "скелет": [1, 4], // Skeleton / very thin person
  "дрищ": [1, 4], // Skinny runt
  "дрищавый": [1, 4], // Skinny-runt-like
  "ничтожный": [1, 4], // Worthless (adj)
  "бесполезный": [1, 4], // Useless (masc)
  "бесполезная": [1, 4], // Useless (fem)
  "никчёмный": [1, 4], // Worthless (masc)
  "никчёмная": [1, 4], // Worthless (fem)
  "недоносок": [1, 4], // Premature baby (used as insult)
  "выродки": [1, 4], // Degenerates (plural)
  "отбросы": [1, 4], // Rejects / dregs
  "конченый": [1, 4], // Finished / hopeless
  "конченая": [1, 4], // Finished (fem)
  "конченый человек": [1, 4], // Finished person
  "конченая тварь": [1, 4], // Finished creature
  "падлюка": [3, 4], // Bastard (variant)
  "стервоза": [1, 4], // Bitchy
  "стервозная": [1, 4], // Bitchy (adj fem)
  "шлюхища": [1, 4], // Huge slut (augmentative)
  "профурсетка": [1, 4], // Slutty woman
  "залупа конская": [4, 4], // Horse dickhead
  "мудачьё": [3, 4], // Assholes (collective)
  "мудачина": [3, 4], // Big asshole
  "мудацкий": [3, 4], // Asshole-like (adj)
  "мудацкая": [3, 4], // Asshole-like (fem adj)
  "минетчица": [4, 5], // Woman who gives blowjobs
  "минетчик": [4, 5], // Man who gives blowjobs
  "ёбаная жизнь": [3, 5], // Fucking life
  "ёбаная работа": [3, 5], // Fucking job
  "блядь сука": [5, 4], // Whore bitch (compound)
  "сука блядь": [5, 4], // Bitch whore (compound)
  "пиздец блядь": [5, 4], // Disaster whore (compound)

  // ========================================
  // === EXPANSION: More homophobic slurs ===
  // ========================================
  "пидрило": [5, 4], // Faggot (variant)
  "пидорасина": [5, 4], // Big faggot (augmentative)
  "пидорасище": [5, 4], // Huge faggot (augmentative)
  "пидорский": [5, 4], // Faggot-like (adj)
  "пидорасня": [5, 4], // Faggot collective
  "педерасня": [5, 4], // Pederasty collective
  "педрило": [5, 4], // Faggot (variant of пидрило)
  "гомосеки": [5, 4], // Homosexuals (derogatory plural)
  "голубая": [2, 3], // Blue / lesbian (euphemistic slur fem)
  "голубые": [2, 3], // Blues / gays (euphemistic slur plural)
  "лесба": [5, 4], // Lesbo (derogatory)
  "лесбуха": [5, 4], // Lesbian (derogatory)

  // ========================================
  // === EXPANSION: Scatological vocabulary ===
  // ========================================
  "говнецо": [3, 5], // Little shit (diminutive)
  "говнюха": [3, 5], // Shithead (fem)
  "говнолиз": [3, 5], // Shit-licker
  "говняная": [3, 5], // Shitty (fem adj)
  "засрать": [3, 5], // To shit up / to ruin
  "засрал": [3, 4], // Shat up (past masc)
  "засрала": [3, 4], // Shat up (past fem)
  "засранный": [3, 5], // Shitted upon (adj)
  "обосрал": [3, 4], // Shat on (past masc)
  "обосрался": [3, 4], // Shat oneself (past masc)
  "обосралась": [3, 4], // Shat oneself (past fem)
  "насрать на тебя": [3, 5], // Shit on you / don't care about you
  "мне насрать": [3, 5], // I don't give a shit
  "сру": [3, 5], // I'm shitting (1st person)
  "высрать": [3, 5], // To shit out
  "просрать": [3, 5], // To shit away / to waste
  "просрал": [3, 4], // Shat away (past masc)
  "просрали": [3, 4], // Shat away (past plural)
  "зассал": [3, 4], // Was piss-scared (past masc)
  "пернуть": [3, 4], // To fart (perfective)
  "пукать": [3, 4], // To fart (lighter)
  "пукнуть": [3, 4], // To fart (perfective lighter)

  // ========================================
  // === EXPANSION: More degrading comparisons and curses ===
  // ========================================
  "шакал": [3, 4], // Jackal / opportunist
  "гиена": [3, 4], // Hyena / nasty person
  "крыса канализационная": [3, 4], // Sewer rat
  "вонючая": [3, 4], // Stinky (fem)
  "гнилой": [3, 4], // Rotten / corrupt
  "гнилая": [3, 4], // Rotten (fem)
  "гнильё": [3, 4], // Rot / rotten things collective
  "чёрт": [3, 4], // Devil
  "чёрт возьми": [3, 4], // Devil take it / damn
  "чёрт побери": [3, 4], // Devil take it / damn
  "чёрт тебя дери": [3, 4], // Devil tear you
  "чёрт бы тебя побрал": [3, 4], // Devil take you
  "какого чёрта": [3, 4], // What the devil / what the hell
  "к чертям": [3, 4], // To the devils / to hell
  "к чертям собачьим": [3, 4], // To the dog devils
  "к чёртовой матери": [3, 4], // To the devil's mother
  "к чёртовой бабушке": [3, 4], // To the devil's grandmother
  "к ёбаной матери": [3, 5], // To the fucking mother
  "к хуям": [4, 4], // To the dicks / to hell
  "к хуям собачьим": [4, 4], // To the dog dicks
  "дьявол": [3, 4], // Devil
  "нечисть": [3, 4], // Evil spirits / scum
  "адское отродье": [3, 4], // Hellish spawn
  "отродье": [3, 4], // Spawn / offspring (derogatory)
  "исчадие ада": [3, 4], // Hellspawn

  // ========================================
  // === EXPANSION: Additional compound phrases ===
  // ========================================
  "ёбаный ты сукин сын": [3, 5], // Fucking son of a bitch
  "ёбаная ты сука": [3, 5], // Fucking bitch you are
  "хуярь отсюда": [4, 5], // Dick away from here
  "валите все нахуй": [3, 5], // Everyone get the fuck out
  "вали отсюда": [3, 5], // Get out of here
  "вали нахуй": [3, 5], // Get the fuck out
  "проваливай": [3, 5], // Get lost
  "проваливайте": [3, 5], // Get lost (plural)
  "катись": [3, 5], // Roll away
  "катись к чёрту": [3, 5], // Roll to the devil
  "пиздой накрыться": [5, 5], // To be covered by a cunt / to fail
  "пиздой накрылось": [5, 5], // Was covered by a cunt / failed
  "хуй тебе а не": [4, 5], // Dick to you and not (denial)
  "на хуй мне это надо": [3, 5], // Why the fuck do I need this
  "какого хера": [4, 3], // What the dick (euphemism variant)
  "какого хрена": [2, 3], // What the horseradish (euphemism)
  "какого фига": [2, 3], // What the fig (lighter euphemism)
  "куда нахуй": [3, 5], // Where the fuck
  "откуда нахуй": [3, 5], // From where the fuck
  "когда нахуй": [3, 5], // When the fuck
  "зачем нахуй": [3, 5], // Why the fuck
  "ёбаный рот этого казино": [3, 5], // Fucking mouth of this casino (famous phrase)
  "ёбаный стыд и позор": [3, 5], // Fucking shame and disgrace
  "сраная": [3, 5], // Shitty (adj fem)
  "сраное": [3, 5], // Shitty (adj neuter)
  "сраные": [3, 5], // Shitty (adj plural)
  "сранина": [3, 5], // Shitty thing
  "сраньё": [3, 5], // Shitty stuff (collective)
  "гондон штопаный": [3, 5], // Darned condom
  "гондоны": [3, 5], // Condoms / scumbags (plural)
  "презерватив": [3, 5], // Condom (used as insult)
  "презик": [3, 5], // Condom (slang, used as insult)
  "пузырь": [1, 4], // Bubble / fat person / balloon
  "чучело гороховое": [3, 5], // Pea scarecrow
  "пустое место": [3, 5], // Empty space / nobody
  "ноль без палочки": [4, 5], // Zero without a stick / nonentity
  "никто и звать никак": [3, 5], // Nobody named nobody
  "мелочь пузатая": [3, 5], // Pot-bellied small fry
  "соплячка": [3, 5], // Snot-nose (fem)
  "щенок": [3, 5], // Puppy / young punk
  "сосунок": [3, 5], // Suckling / young punk
  "салага": [3, 5], // Greenhorn (military slang)
  "салажонок": [3, 5], // Little greenhorn
  "головёнка": [3, 5], // Little head / insignificant person
  "кобыла": [3, 5], // Mare / big clumsy woman
  "кобылица": [3, 5], // Mare (literary)
  "кляча": [1, 4], // Nag / old horse / ugly old woman
  "лядь": [3, 5], // Adulteress (archaic, root of блядь)
  "шкурка": [3, 5], // Little hide / loose woman (diminutive)
  "шкуродёр": [3, 5], // Hide-tearer / exploiter
  "крыса тыловая": [3, 5], // Rear rat / shirker
  "прошмандовка": [3, 5], // Loose woman (slang)
  "хабалка": [3, 5], // Loud vulgar woman
  "хамьё": [3, 5], // Rude people (collective)
  "наглая рожа": [3, 5], // Impudent face
  "бесстыдник": [3, 5], // Shameless person
  "бесстыдница": [3, 5], // Shameless person (fem)
  "бесстыжий": [3, 5], // Shameless (adj)
  "бесстыжая": [3, 5], // Shameless (fem adj)
  "срамота": [3, 5], // Shameful thing
  "срамотища": [3, 5], // Very shameful thing
  "разъебайка": [3, 5], // Slacker (fem)
  "расп*здяй": [3, 5], // Slacker (partial censoring)
  "мудозвонство": [3, 5], // Ball-ringing / bullshitting
  "пиздоболие": [5, 5], // Cunt-talking / lying
  "пиздобратия": [5, 5], // Cunt-brotherhood / useless group
  "срань господня": [3, 5], // Lord's shit
  "срань": [3, 5], // Shit / crap
  "ссанина": [3, 5], // Piss
  "ссака": [3, 5], // Piss / pisser
  "мочить в сортире": [3, 5], // To kill in the toilet (Putin's phrase)
  "мордой в дерьмо": [3, 5], // Face in the shit
  "мордой об стол": [3, 5], // Face against the table
  "ёбаный в рот через жопу": [3, 5], // Fucked in the mouth through the ass (already listed variant)
  "пиздатая жизнь": [3, 5], // Awesome life (vulgar ironic)
  "заебись жизнь": [3, 5], // Great fucking life (vulgar ironic)
  // ========================================
  // === Extended Russian Words ===
  // ========================================
  "bychara": [2, 3], // Bully / thug
  "byk": [2, 3], // Bull (aggressive person)
  "chernozhopyi": [5, 5], // Racial slur (Black person)
  "dolboy'eb": [3, 4], // Idiot / fuckwit
  "ebalom sch'elkat": [3, 4], // Stand there gaping (vulgar)
  "gol": [1, 2], // Naked / bare
  "mudack": [3, 4], // Asshole / idiot
  "opizdenet": [3, 4], // To go crazy (vulgar)
  "osto'eblo": [3, 4], // Fed up (vulgar)
  "ostokhuitel'no": [3, 4], // Incredibly (vulgar)
  "ot'ebis": [3, 4], // Fuck off
  "otmudohat": [3, 4], // To beat up (vulgar)
  "otpizdit": [3, 5], // To beat up (vulgar)
  "otsosi": [3, 5], // Suck it (vulgar)
  "padlo": [3, 4], // Scoundrel / bastard
  "pedik": [4, 5], // Homophobic slur
  "perdet": [2, 3], // To fart
  "petuh": [4, 5], // Prison slur (passive homosexual)
  "pidar gnoinyj": [5, 5], // Homophobic slur (rotten faggot)
  "pizdatyi": [3, 4], // Awesome (vulgar)
  "piz'det": [3, 4], // To lie / bullshit
  "pizdetc": [3, 4], // That's fucked / finished (vulgar)
  "pizdoi nakryt'sja": [3, 5], // To be ruined / fucked up
  "pizd'uk": [3, 4], // Little shit (vulgar)
  "piz`dyulina": [3, 4], // Piece of junk (vulgar)
  "podi ku'evo": [2, 3], // Probably shitty (vulgar)
  "poeben": [3, 4], // Fucked up
  "po'imat' na konchik": [3, 5], // To catch on the tip (vulgar)
  "po'iti posrat": [3, 4], // To go take a shit
  "po khuy": [3, 4], // Don't give a fuck
  "poluchit pizdy": [3, 5], // To get beaten up (vulgar)
  "pososi moyu konfetku": [3, 5], // Suck my candy (vulgar)
  "prissat": [3, 3], // To piss / urinate
  "proebat": [3, 4], // To fuck up / lose
  "promudobl'adsksya pizdopro'ebina": [5, 5], // Extreme compound insult
  "propezdoloch": [3, 4], // Total fuckup
  "prosrat": [3, 4], // To shit away / lose (vulgar)
  "raspeezdeyi": [3, 4], // Scatter/spread (vulgar)
  "raspizdatyi": [3, 4], // Awesome (vulgar, variant)
  "raz'yebuy": [3, 4], // Smash it (vulgar)
  "raz'yoba": [3, 4], // Slacker / lazy ass
  "s'ebat'sya": [3, 4], // To fuck off / escape
  "styervo": [3, 4], // Bitch / carrion
  "sukin syn": [3, 4], // Son of a bitch
  "svodit posrat": [2, 3], // To take to the toilet (vulgar)
  "trakhat'sya": [3, 5], // To fuck (vulgar)
  "trimandoblydskiy pizdoproyob": [5, 5], // Extreme compound insult
  "ubl'yudok": [4, 5], // Bastard / mongrel
  "uboy": [2, 3], // Ugly / disastrous
  "u'ebitsche": [4, 5], // Freak / monstrosity (vulgar)
  "vafl'a": [3, 4], // Waffle (slur for passive homosexual)
  "vafli lovit": [3, 4], // Catch waffles (vulgar slur)
  "v pizdu": [3, 5], // Into the pussy / fuck it
  "vyperdysh": [3, 4], // Fart cloud / useless person
  "vzdrochennyi": [3, 4], // Aroused / jerked off
  "yeb vas": [3, 5], // Fuck you (plural)
  "za'ebat": [3, 4], // To piss off / exhaust
  "zalupat": [3, 4], // To foreskin / insult (vulgar)
  "zasranetc": [3, 4], // Shithead
  "zassat": [3, 4], // To piss oneself / chicken out
  "zlo'ebuchy": [3, 4], // Angrily fucking (vulgar intensifier)
  "бардак": [1, 2], // Mess / brothel
  "бздёнок": [3, 3], // Little fart / coward
  "бугор": [1, 2], // Boss / hump
  "во пизду": [3, 5], // Into the pussy / fuck it (Cyrillic)
  "встать раком": [3, 5], // Get on all fours (vulgar)
  "гандон": [3, 4], // Condom / asshole
  "голый": [1, 2], // Naked
  "дать пизды": [3, 5], // To beat up (vulgar)
  "другой дразнится": [1, 2], // Someone else is teasing
  "ебать-копать": [3, 4], // Fuck me (exclamation)
  "играть на кожаной флейте": [3, 5], // Play the skin flute (vulgar for fellatio)
  "измудохать": [3, 4], // To beat to a pulp (vulgar)
  "каждый дрочит как он хочет": [2, 3], // Everyone jerks off how they like (vulgar expression)
  "какая разница": [1, 1], // What's the difference (mild)
  "как два пальца обоссать": [3, 4], // Easy as pissing on two fingers (vulgar)
  "курите мою трубку": [3, 4], // Smoke my pipe (vulgar)
  "лысого в кулаке гонять": [3, 4], // Masturbate (vulgar idiom)
  "малофя": [3, 4], // Semen (vulgar)
  "муда": [3, 4], // Testicles (vulgar)
  "мудило": [3, 4], // Idiot / asshole
  "мудозмон": [3, 4], // Testicle monster (insult)
  "наебениться": [3, 4], // To get wasted / fall over (vulgar)
  "на фиг": [1, 2], // To hell with it (mild)
  "на хуй": [3, 5], // Fuck off / on the dick (vulgar)
  "на хую вертеть": [3, 5], // To spin on the dick / not care (vulgar)
  "на хуя": [3, 4], // What the fuck for (vulgar)
  "невебенный": [3, 4], // Incredible (vulgar)
  "не ебет": [3, 4], // Don't give a fuck
  "ни за хуй собачу": [3, 5], // For nothing / dog's dick (vulgar)
  "обнаженный": [1, 2], // Naked / bare
  "обоссаться можно": [3, 4], // Could piss yourself (from laughing/fear)
  "один ебётся": [3, 4], // One person gets fucked (alone)
  "опесдол": [3, 4], // Idiot (vulgar)
  "охуйтельно": [3, 4], // Fucking amazing (vulgar)
  "половое сношение": [3, 4], // Sexual intercourse (clinical/vulgar)
  "секс": [1, 2], // Sex
  "сиски": [2, 3], // Tits (slang)
  "траxать": [3, 5], // To fuck (Cyrillic, mixed)
  "ты мне ваньку не валяй": [1, 2], // Don't play dumb (idiomatic)
  "фига": [1, 2], // Fig sign (mild insult gesture)
  "хапать": [1, 2], // To grab / steal
  "хер с ней": [2, 3], // To hell with her
  "хер с ним": [2, 3], // To hell with him
  "хуеплет": [3, 4], // Dick-weaver (insult)
  "хуило": [4, 5], // Dick (political insult, Kremlin slur)
  "хуиней страдать": [3, 4], // To waste time on nonsense (vulgar)
  "хуиня": [3, 4], // Bullshit / nonsense (vulgar)
  "хуй пинать": [3, 4], // To kick a dick / waste time (vulgar)
};
const russianBadWords: Record<string, { s: number; c: number }> = {};
for (const [k, [s, c]] of Object.entries(_d)) {
    russianBadWords[k] = { s, c };
}
export default russianBadWords;

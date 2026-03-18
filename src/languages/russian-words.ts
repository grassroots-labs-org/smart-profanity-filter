/**
 * Russian profanity words list
 * Contains common profanities, insults, and offensive terms. Includes variations.
 * ⚠️ Warning: This file contains explicit language in Russian
 */
const russianBadWords: Record<string, { s: number; c: number }> = {
  // Core мат (mat) - strongest Russian profanity
  "хуй": { s: 4, c: 4 }, // Dick
  "нахуй": { s: 3, c: 5 }, // Fuck off / to hell
  "пошёл нахуй": { s: 3, c: 5 }, // Go fuck yourself
  "иди нахуй": { s: 3, c: 5 }, // Go fuck yourself
  "хуёвый": { s: 3, c: 5 }, // Shitty / crappy
  "хуйня": { s: 3, c: 5 }, // Bullshit / nonsense
  "охуеть": { s: 3, c: 5 }, // To be stunned / holy fuck
  "пизда": { s: 5, c: 5 }, // Cunt
  "пиздец": { s: 3, c: 5 }, // Fucking disaster / the end
  "пиздёж": { s: 3, c: 5 }, // Bullshit / lies
  "пиздатый": { s: 3, c: 5 }, // Fucking awesome
  "блядь": { s: 5, c: 5 }, // Whore / fuck (exclamation)
  "блять": { s: 3, c: 5 }, // Fuck (exclamation, variant spelling)
  "ебать": { s: 3, c: 5 }, // To fuck
  "ебаный": { s: 3, c: 5 }, // Fucking (adj)
  "ёбаный": { s: 3, c: 5 }, // Fucking (adj, with ё)
  "ёб твою мать": { s: 3, c: 5 }, // Fuck your mother
  "заебал": { s: 3, c: 5 }, // Fed up / annoyed the fuck out of
  "заебись": { s: 3, c: 5 }, // Fucking great
  "выблядок": { s: 3, c: 4 }, // Bastard child

  // Strong insults
  "сука": { s: 1, c: 4 }, // Bitch
  "сукин сын": { s: 1, c: 4 }, // Son of a bitch
  "сучка": { s: 1, c: 4 }, // Little bitch
  "мудак": { s: 4, c: 4 }, // Asshole / dickhead
  "ублюдок": { s: 3, c: 4 }, // Bastard
  "ублюдки": { s: 3, c: 4 }, // Bastards (plural)
  "говнюк": { s: 3, c: 5 }, // Shithead
  "говнюки": { s: 3, c: 5 }, // Shitheads (plural)
  "засранец": { s: 3, c: 5 }, // Little shit
  "дерьмо": { s: 3, c: 5 }, // Shit
  "дерьмовый": { s: 3, c: 5 }, // Shitty
  "гребаный": { s: 3, c: 5 }, // Fucking / damned
  "долбаный": { s: 3, c: 5 }, // Fucking / damned
  "козел": { s: 3, c: 4 }, // Goat / asshole
  "мразь": { s: 1, c: 4 }, // Scum
  "тварь": { s: 1, c: 4 }, // Creature / scumbag
  "пидор": { s: 5, c: 4 }, // Faggot (homophobic slur)
  "пидорас": { s: 5, c: 4 }, // Faggot (homophobic slur, variant)
  "гондон": { s: 1, c: 4 }, // Condom / scumbag

  // Slurs
  "негр": { s: 5, c: 4 }, // Negro (offensive)
  "нигга": { s: 5, c: 4 }, // N-word (transliteration)
  "ниггер": { s: 5, c: 4 }, // N-word (transliteration)
  "ниггеры": { s: 5, c: 4 }, // N-word plural (transliteration)
  "педик": { s: 5, c: 4 }, // Fag (homophobic slur)
  "педики": { s: 5, c: 4 }, // Fags (homophobic slur, plural)

  // Sexual / anatomical
  "член": { s: 4, c: 4 }, // Penis / member
  "залупа": { s: 4, c: 4 }, // Glans / dickhead
  "манда": { s: 5, c: 5 }, // Cunt (vulgar)
  "жопа": { s: 3, c: 4 }, // Ass
  "сиська": { s: 4, c: 4 }, // Tit
  "сиськи": { s: 4, c: 4 }, // Tits
  "влагалище": { s: 4, c: 4 }, // Vagina
  "вульва": { s: 4, c: 4 }, // Vulva
  "мошонка": { s: 4, c: 4 }, // Scrotum
  "анальный": { s: 3, c: 4 }, // Anal
  "минет": { s: 4, c: 5 }, // Blowjob
  "кумшот": { s: 3, c: 4 }, // Cumshot
  "оргазм": { s: 3, c: 4 }, // Orgasm
  "сперма": { s: 3, c: 4 }, // Sperm / cum
  "эякулировать": { s: 3, c: 4 }, // To ejaculate
  "эякуляция": { s: 3, c: 4 }, // Ejaculation
  "мастурбировать": { s: 4, c: 4 }, // To masturbate
  "дрочить": { s: 4, c: 4 }, // To jerk off
  "фаллоимитатор": { s: 3, c: 4 }, // Dildo

  // Other insults / vulgar
  "шлюха": { s: 5, c: 4 }, // Slut / whore
  "шлюхи": { s: 5, c: 4 }, // Sluts / whores (plural)
  "шалава": { s: 1, c: 4 }, // Slut
  "потаскуха": { s: 1, c: 4 }, // Harlot / slut
  "стерва": { s: 1, c: 4 }, // Bitch / shrew
  "стервы": { s: 1, c: 4 }, // Bitches (plural)
  "сутенер": { s: 1, c: 4 }, // Pimp
  "киска": { s: 4, c: 4 }, // Pussy (slang)
  "трахаться": { s: 3, c: 5 }, // To fuck (reflexive)
  "проклятый": { s: 1, c: 4 }, // Damned / cursed
  "садист": { s: 1, c: 4 }, // Sadist
  "порно": { s: 1, c: 4 }, // Porn
  "порнография": { s: 1, c: 4 }, // Pornography
  "черт возьми": { s: 1, c: 4 }, // Damn it
  "кибер-трах": { s: 3, c: 5 }, // Cyberfuck

  // Bodily functions
  "срать": { s: 3, c: 5 }, // To shit
  "ссать": { s: 3, c: 4 }, // To piss
  "моча": { s: 3, c: 4 }, // Urine / piss
  "какашка": { s: 3, c: 4 }, // Poop

  // Additional Russian мат and vulgar expressions
  "блядина": { s: 5, c: 4 }, // Whore (augmentative)
  "блядство": { s: 5, c: 4 }, // Whoredom
  "блядовать": { s: 5, c: 4 }, // To whore around
  "выёбываться": { s: 3, c: 4 }, // To show off / act tough
  "говно": { s: 3, c: 5 }, // Shit
  "говноед": { s: 3, c: 5 }, // Shit eater
  "давалка": { s: 3, c: 4 }, // Easy woman (vulgar)
  "долбоёб": { s: 1, c: 4 }, // Dumbfuck
  "дрочила": { s: 3, c: 4 }, // Wanker
  "ёбанат": { s: 3, c: 5 }, // Crazy fucker
  "ёбаный в рот": { s: 3, c: 5 }, // Fucked in the mouth
  "ёб твою": { s: 3, c: 5 }, // Fuck your (truncated)
  "ёбарь": { s: 3, c: 5 }, // Fucker
  "ёбнутый": { s: 3, c: 5 }, // Crazy / fucked up
  "залупаться": { s: 4, c: 4 }, // To be a dick about things
  "захуярить": { s: 3, c: 4 }, // To do something intensely
  "мандавошка": { s: 3, c: 4 }, // Pubic louse (insult)
  "мудила": { s: 1, c: 4 }, // Dumbass
  "мудозвон": { s: 4, c: 4 }, // Dickhead (lit. ball-ringer)
  "нахер": { s: 3, c: 5 }, // To hell / fuck off (euphemistic)
  "обосраться": { s: 3, c: 5 }, // To shit oneself
  "отъебись": { s: 3, c: 5 }, // Fuck off
  "пердеть": { s: 3, c: 4 }, // To fart
  "пердун": { s: 3, c: 4 }, // Farter / old fart
  "пиздабол": { s: 3, c: 4 }, // Liar (vulgar)
  "пиздануть": { s: 3, c: 4 }, // To hit / to say something crazy
  "пиздолиз": { s: 4, c: 4 }, // Pussy licker / ass-kisser
  "пиздюк": { s: 3, c: 5 }, // Little shit
  "подонок": { s: 3, c: 4 }, // Scum
  "придурок": { s: 1, c: 4 }, // Idiot
  "распиздяй": { s: 3, c: 4 }, // Irresponsible person (vulgar)
  "сосать": { s: 3, c: 4 }, // To suck
  "сраный": { s: 3, c: 5 }, // Shitty
  "сучий": { s: 3, c: 4 }, // Bitchy
  "трахать": { s: 3, c: 5 }, // To fuck
  "уёбище": { s: 1, c: 4 }, // Ugly freak (vulgar)
  "уёбок": { s: 3, c: 5 }, // Freak / piece of shit
  "хер": { s: 4, c: 4 }, // Dick (milder than хуй)
  "хуесос": { s: 4, c: 4 }, // Cocksucker
  "хуила": { s: 4, c: 4 }, // Big dick / asshole
  "хуёво": { s: 3, c: 5 }, // Shitty (adverb)
  "целка": { s: 3, c: 4 }, // Virgin (vulgar)
  "чмо": { s: 1, c: 4 }, // Loser / freak
  "чмошник": { s: 1, c: 4 }, // Loser
  "шваль": { s: 3, c: 4 }, // Riff-raff
  "шлёндра": { s: 3, c: 4 }, // Slut

  // хуй derivatives
  "похуй": { s: 3, c: 5 }, // Don't give a fuck
  "похуизм": { s: 4, c: 5 }, // Not-giving-a-fuck attitude
  "похуист": { s: 3, c: 5 }, // One who doesn't give a fuck
  "нахуярить": { s: 3, c: 4 }, // To do something intensely
  "отхуярить": { s: 3, c: 4 }, // To beat up badly
  "прихуеть": { s: 3, c: 4 }, // To be stunned (vulgar)
  "хуячить": { s: 3, c: 4 }, // To do something hard/fast
  "хуяк": { s: 3, c: 4 }, // Bam! (vulgar exclamation)
  "хуярить": { s: 3, c: 4 }, // To hit / work hard
  "однохуйственно": { s: 3, c: 4 }, // Makes no difference (vulgar)
  "хуеплёт": { s: 3, c: 5 }, // Bullshitter
  "хуёвина": { s: 3, c: 5 }, // Shitty thing
  "хуеглот": { s: 4, c: 4 }, // Cockswallower
  "хуище": { s: 4, c: 4 }, // Big dick (augmentative)
  "хуйло": { s: 4, c: 4 }, // Dickhead
  "нихуя": { s: 3, c: 4 }, // Nothing (vulgar) / No way
  "охуительный": { s: 3, c: 5 }, // Fucking amazing
  "охуевший": { s: 3, c: 4 }, // Stunned / insolent
  "подхуйник": { s: 3, c: 4 }, // Underhanded person
  "расхуячить": { s: 3, c: 4 }, // To smash to pieces
  "перехуярить": { s: 3, c: 4 }, // To redo / to hit hard
  "прихуярить": { s: 3, c: 4 }, // To attach / hit
  "отхуячить": { s: 3, c: 4 }, // To beat severely
  "захуйня": { s: 3, c: 4 }, // Nonsense
  "хуеватый": { s: 3, c: 5 }, // Shitty (adj)
  "хуемразь": { s: 4, c: 4 }, // Dick-scum

  // пизда derivatives
  "пиздануться": { s: 3, c: 4 }, // To go crazy / to fall
  "припиздеть": { s: 3, c: 5 }, // To bullshit a little
  "пиздострадатель": { s: 4, c: 4 }, // Pussy-sufferer (simp)
  "опиздениться": { s: 3, c: 4 }, // To go crazy
  "пиздёныш": { s: 3, c: 5 }, // Little shit (from пизда)
  "подпиздывать": { s: 3, c: 5 }, // To subtly bullshit
  "пиздатейший": { s: 3, c: 5 }, // Fucking awesome (superlative)
  "пиздопрометчина": { s: 3, c: 4 }, // Crazy mess
  "пиздюли": { s: 3, c: 4 }, // Beating
  "отпиздить": { s: 3, c: 4 }, // To beat up
  "пиздобол": { s: 3, c: 4 }, // Liar (variant spelling)
  "пиздоглазый": { s: 5, c: 5 }, // Cunt-eyed
  "пиздопляска": { s: 3, c: 5 }, // Fucked-up situation
  "пиздорванка": { s: 5, c: 5 }, // Torn-cunt (insult for woman)
  "спиздить": { s: 3, c: 4 }, // To steal
  "напиздеть": { s: 3, c: 4 }, // To lie a lot
  "пропиздеть": { s: 3, c: 5 }, // To chat shit
  "запиздеть": { s: 3, c: 5 }, // To start bullshitting

  // ебать derivatives
  "ёбнуть": { s: 3, c: 4 }, // To hit / to drink
  "поебать": { s: 3, c: 5 }, // To fuck a bit / don't care
  "выебать": { s: 3, c: 5 }, // To fuck (perfective)
  "наебать": { s: 3, c: 4 }, // To deceive
  "наебнуться": { s: 3, c: 4 }, // To fall / crash
  "проебать": { s: 3, c: 4 }, // To miss / lose
  "уебать": { s: 3, c: 4 }, // To hit hard
  "приебаться": { s: 3, c: 4 }, // To pester
  "доебаться": { s: 3, c: 4 }, // To harass / pester
  "заебать": { s: 3, c: 5 }, // To annoy the fuck out of
  "заёбанный": { s: 3, c: 4 }, // Exhausted / fed up
  "поебень": { s: 3, c: 4 }, // Nonsense / junk
  "ебанашка": { s: 3, c: 4 }, // Crazy person
  "ебанько": { s: 1, c: 4 }, // Idiot
  "ебля": { s: 3, c: 5 }, // Fucking (noun)
  "ебальник": { s: 3, c: 4 }, // Face (vulgar)
  "ёбтвоюмать": { s: 3, c: 5 }, // Fuck your mother (one word)
  "ёбаный стыд": { s: 3, c: 5 }, // Fucking shame
  "ебал в рот": { s: 3, c: 5 }, // Fucked in the mouth
  "еблан": { s: 1, c: 4 }, // Idiot / dumbfuck
  "ебанутый": { s: 3, c: 4 }, // Crazy
  "объебать": { s: 3, c: 4 }, // To cheat / swindle
  "переебать": { s: 3, c: 5 }, // To fuck again / hit hard
  "разъебать": { s: 3, c: 4 }, // To smash / destroy
  "съебаться": { s: 3, c: 5 }, // To get the fuck out
  "уёбывать": { s: 3, c: 4 }, // To flee / get out
  "ёбкий": { s: 3, c: 5 }, // Fuckable / tricky
  "ёбнутьсяголовой": { s: 3, c: 4 }, // To bang one's head

  // блядь derivatives
  "блядский": { s: 3, c: 4 }, // Whorish
  "заблядовать": { s: 3, c: 4 }, // To start whoring
  "блядешник": { s: 5, c: 4 }, // Whorehouse
  "блядки": { s: 3, c: 4 }, // Whoring around
  "блядунья": { s: 5, c: 4 }, // Whore (fem)
  "блядослов": { s: 3, c: 4 }, // Foul-mouthed person
  "приблядить": { s: 5, c: 4 }, // To attract like a whore

  // говно derivatives
  "говнище": { s: 3, c: 5 }, // Big/terrible shit
  "говняный": { s: 3, c: 5 }, // Shitty
  "обговнять": { s: 3, c: 5 }, // To shit on / smear
  "говнарь": { s: 3, c: 5 }, // Shitty person
  "говнистый": { s: 3, c: 5 }, // Shitty (adj)
  "говножуй": { s: 3, c: 5 }, // Shit-chewer
  "говноляд": { s: 3, c: 5 }, // Shitty situation
  "наговнять": { s: 3, c: 4 }, // To make a mess of

  // Compound мат phrases
  "пизды дать": { s: 3, c: 5 }, // To beat up
  "хуй соси": { s: 4, c: 5 }, // Suck a dick
  "на хуй пошёл": { s: 3, c: 5 }, // Go fuck yourself
  "ебал я": { s: 3, c: 5 }, // I don't give a fuck
  "ебал я это": { s: 3, c: 5 }, // Fuck this
  "ни хуя себе": { s: 3, c: 5 }, // Holy fuck
  "ёб твою в душу мать": { s: 3, c: 5 }, // Elaborate mother insult
  "пошла на хуй": { s: 3, c: 5 }, // Go fuck yourself (fem)
  "ёперный театр": { s: 3, c: 5 }, // Fucking hell (euphemistic)
  "хуй знает": { s: 3, c: 5 }, // Who the fuck knows
  "хуй забей": { s: 3, c: 5 }, // Fuck it / forget it
  "ёбаный рот": { s: 3, c: 5 }, // Fucking mouth (exclamation)
  "пизда рулю": { s: 3, c: 5 }, // Shit's fucked
  "ёб твою за ногу": { s: 3, c: 5 }, // Fuck your (euphemistic)
  "ёбаная карусель": { s: 3, c: 5 }, // Fucking carousel (exclamation)

  // More insults
  "лох": { s: 1, c: 4 }, // Sucker / loser
  "лошара": { s: 1, c: 4 }, // Bigger loser
  "лохушка": { s: 1, c: 4 }, // Female loser
  "дебил": { s: 1, c: 4 }, // Imbecile
  "кретин": { s: 1, c: 4 }, // Cretin
  "даун": { s: 1, c: 4 }, // Down (offensive use)
  "олигофрен": { s: 1, c: 4 }, // Oligophrenic (slur)
  "недоумок": { s: 1, c: 4 }, // Simpleton
  "ишак": { s: 1, c: 4 }, // Donkey (insult)
  "баран": { s: 1, c: 4 }, // Ram / idiot
  "козёл вонючий": { s: 1, c: 4 }, // Stinking goat
  "тупица": { s: 1, c: 4 }, // Stupid person
  "тупорылый": { s: 1, c: 4 }, // Blunt-snouted / stupid
  "остолоп": { s: 1, c: 4 }, // Blockhead
  "обалдуй": { s: 1, c: 4 }, // Dimwit
  "оболтус": { s: 1, c: 4 }, // Good-for-nothing
  "болван": { s: 1, c: 4 }, // Blockhead
  "дурак": { s: 1, c: 4 }, // Fool
  "дура": { s: 1, c: 4 }, // Fool (fem)
  "идиот": { s: 1, c: 4 }, // Idiot
  "идиотка": { s: 1, c: 4 }, // Idiot (fem)
  "уродка": { s: 1, c: 4 }, // Ugly woman
  "урод": { s: 1, c: 4 }, // Ugly / freak
  "чучело": { s: 1, c: 4 }, // Scarecrow / freak
  "чудовище": { s: 1, c: 4 }, // Monster
  "скотина": { s: 3, c: 4 }, // Beast / bastard
  "свинья": { s: 1, c: 4 }, // Pig
  "свиноматка": { s: 1, c: 4 }, // Sow (insult)
  "быдло": { s: 1, c: 4 }, // Cattle / redneck
  "отморозок": { s: 1, c: 4 }, // Frostbitten / thug
  "подлец": { s: 1, c: 4 }, // Scoundrel
  "мерзавец": { s: 1, c: 4 }, // Scoundrel
  "мерзавка": { s: 1, c: 4 }, // Scoundrel (fem)
  "негодяй": { s: 1, c: 4 }, // Villain
  "негодяйка": { s: 1, c: 4 }, // Villain (fem)
  "ничтожество": { s: 4, c: 4 }, // Nonentity
  "паскуда": { s: 1, c: 4 }, // Scumbag
  "паскудник": { s: 1, c: 4 }, // Scoundrel
  "гад": { s: 3, c: 4 }, // Reptile / bastard
  "гадина": { s: 1, c: 4 }, // Vile creature
  "гнида": { s: 1, c: 4 }, // Nit / scumbag
  "падла": { s: 3, c: 4 }, // Bastard (prison slang)
  "падаль": { s: 1, c: 4 }, // Carrion / scum
  "пёс": { s: 1, c: 4 }, // Dog (insult)
  "сволочь": { s: 3, c: 4 }, // Bastard
  "сволочи": { s: 3, c: 4 }, // Bastards (plural)
  "выродок": { s: 1, c: 4 }, // Degenerate
  "дегенерат": { s: 1, c: 4 }, // Degenerate
  "извращенец": { s: 1, c: 4 }, // Pervert
  "педофил": { s: 5, c: 5 }, // Pedophile
  "насильник": { s: 5, c: 5 }, // Rapist
  "маньяк": { s: 1, c: 4 }, // Maniac

  // Slurs / offensive
  "чурка": { s: 5, c: 4 }, // Slur for Central Asians
  "хач": { s: 5, c: 4 }, // Slur for Caucasians
  "чернож*пый": { s: 5, c: 5 }, // Racial slur
  "черножопый": { s: 5, c: 4 }, // Racial slur (unmasked)
  "жид": { s: 5, c: 4 }, // Antisemitic slur
  "жидовка": { s: 5, c: 4 }, // Antisemitic slur (fem)
  "жидовский": { s: 5, c: 4 }, // Antisemitic (adj)
  "жидяра": { s: 5, c: 4 }, // Antisemitic slur (augmentative)
  "пидрила": { s: 5, c: 4 }, // Homophobic slur
  "петух": { s: 5, c: 4 }, // Rooster / prison slur
  "опущенный": { s: 5, c: 4 }, // Lowered / prison caste slur
  "хохол": { s: 5, c: 4 }, // Slur for Ukrainians
  "хохлушка": { s: 5, c: 4 }, // Slur for Ukrainian women
  "москаль": { s: 5, c: 4 }, // Slur for Russians (from Ukrainian)
  "кацап": { s: 5, c: 4 }, // Slur for Russians
  "чурбан": { s: 5, c: 4 }, // Slur for Central Asians
  "чукча": { s: 5, c: 4 }, // Ethnic slur
  "узкоглазый": { s: 5, c: 4 }, // Slant-eyed (slur)
  "косоглазый": { s: 5, c: 4 }, // Cross-eyed / slur for Asians
  "обезьяна": { s: 5, c: 4 }, // Monkey (racial insult)
  "азер": { s: 5, c: 4 }, // Slur for Azerbaijanis
  "даг": { s: 5, c: 4 }, // Slur for Dagestanis
  "жидёныш": { s: 5, c: 4 }, // Young Jew (slur)

  // Vulgar body parts
  "очко": { s: 4, c: 3 }, // Asshole (lit. bullseye)
  "сракотан": { s: 4, c: 3 }, // Big-assed person
  "елда": { s: 4, c: 4 }, // Dick (archaic vulgar)
  "шишка": { s: 4, c: 4 }, // Knob / dick (slang)
  "мохнатка": { s: 4, c: 4 }, // Hairy one (vulgar for vagina)
  "булки": { s: 4, c: 4 }, // Butt cheeks (slang)
  "жопень": { s: 4, c: 3 }, // Ass (augmentative)
  "жопник": { s: 4, c: 3 }, // Ass-person
  "жополиз": { s: 4, c: 3 }, // Ass-licker
  "подзалупный": { s: 4, c: 3 }, // Under the foreskin (adj)
  "промежность": { s: 4, c: 4 }, // Perineum (vulgar context)
  "мудя": { s: 4, c: 4 }, // Balls (vulgar)
  "муде": { s: 4, c: 4 }, // Balls (archaic vulgar)
  "писька": { s: 4, c: 4 }, // Wee-wee (childish vulgar)
  "письки": { s: 4, c: 3 }, // Wee-wees (plural)
  "хрен": { s: 4, c: 3 }, // Horseradish / dick (euphemism)

  // Internet slang / euphemisms
  "сука блять": { s: 3, c: 5 }, // Bitch fuck (combo)
  "ёпт": { s: 2, c: 3 }, // Euphemism for ёб
  "ёперный": { s: 2, c: 3 }, // Euphemism for ёбаный
  "ёклмн": { s: 2, c: 3 }, // Euphemistic expletive
  "ёпрст": { s: 2, c: 3 }, // Euphemistic expletive
  "нахрен": { s: 2, c: 3 }, // To hell (euphemism for нахуй)
  "пипец": { s: 2, c: 3 }, // Euphemism for пиздец
  "офигеть": { s: 2, c: 3 }, // Euphemism for охуеть
  "нафиг": { s: 2, c: 3 }, // Euphemism for нахуй
  "фигня": { s: 2, c: 3 }, // Euphemism for хуйня
  "блин": { s: 2, c: 3 }, // Euphemism for блядь (borderline)
  "бляха муха": { s: 2, c: 3 }, // Euphemism for блядь
  "ёшкин кот": { s: 2, c: 3 }, // Euphemistic expletive
  "ядрёна вошь": { s: 2, c: 3 }, // Euphemistic expletive
  "ядрёна кочерыжка": { s: 2, c: 3 }, // Euphemistic expletive
  "пиздабратия": { s: 2, c: 3 }, // Vulgar brotherhood
  "заебца": { s: 2, c: 3 }, // Variant of заебись (great)
  "сукаблять": { s: 2, c: 3 }, // Combined expletive (one word)
  "ёбаныйврот": { s: 2, c: 3 }, // Combined expletive (one word)
  "хуйнуть": { s: 1, c: 4 }, // To do something stupid

  // More vulgar / criminal slang
  "шмара": { s: 3, c: 4 }, // Slut (criminal slang)
  "маруха": { s: 3, c: 4 }, // Woman (criminal slang, derogatory)
  "фраер": { s: 3, c: 4 }, // Outsider / sucker (criminal slang)
  "лоханка": { s: 3, c: 4 }, // Female sucker
  "шняга": { s: 3, c: 4 }, // Crap / junk
  "херня": { s: 2, c: 3 }, // Crap (euphemism for хуйня)
  "хренов": { s: 3, c: 4 }, // Crappy
  "хреновый": { s: 3, c: 4 }, // Crappy
  "хреново": { s: 3, c: 4 }, // Crappily
  "жопошник": { s: 3, c: 4 }, // Assman (vulgar)
  "жёпа": { s: 3, c: 4 }, // Ass (variant spelling)
  "задница": { s: 3, c: 4 }, // Butt / ass
  "задрот": { s: 3, c: 4 }, // Nerd / wanker (gaming slang)
  "гавнюк": { s: 3, c: 5 }, // Shithead (variant spelling)
  "конча": { s: 3, c: 4 }, // Cum (vulgar)
  "кончить": { s: 3, c: 4 }, // To cum / to finish
  "сосатель": { s: 3, c: 4 }, // Sucker (vulgar)
  "дрочер": { s: 3, c: 4 }, // Wanker
  "подстилка": { s: 3, c: 4 }, // Doormat / slut
  "курва": { s: 5, c: 4 }, // Whore (from Polish/Ukrainian)
  "блядища": { s: 5, c: 4 }, // Big whore (augmentative)
  "ёбанина": { s: 3, c: 5 }, // Fucking mess
  "ебатория": { s: 3, c: 5 }, // Fuckery
  "мудоёб": { s: 3, c: 5 }, // Ball-fucker
  "мудошлёп": { s: 3, c: 4 }, // Ball-slapper
  "пиздёнка": { s: 5, c: 5 }, // Little cunt
  "елдак": { s: 4, c: 4 }, // Dick (augmentative)
  "хуеман": { s: 4, c: 4 }, // Dick-obsessed person

  // === EXPANSION: хуй derivatives ===
  "расхуярить": { s: 3, c: 4 }, // To smash apart
  "нахуйник": { s: 3, c: 4 }, // Annoying person (vulgar)
  "хуеплётство": { s: 3, c: 5 }, // Bullshitting (noun)
  "хуеносец": { s: 4, c: 4 }, // Dick-bearer (insult)
  "хуеватенько": { s: 3, c: 5 }, // Kinda shitty
  "хуепутало": { s: 4, c: 4 }, // Dick-scarecrow (insult)
  "хуесборник": { s: 4, c: 4 }, // Dick-collector
  "хуетень": { s: 3, c: 5 }, // Bullshit / nonsense
  "захуячить": { s: 3, c: 4 }, // To hurl / do intensely
  "выхуяривать": { s: 3, c: 4 }, // To extract forcefully
  "обхуярить": { s: 3, c: 4 }, // To cheat / beat
  "подхуячить": { s: 3, c: 4 }, // To sneak-attach
  "хуякнуть": { s: 3, c: 4 }, // To slam / hit suddenly
  "хуевертить": { s: 3, c: 5 }, // To do shit
  "хуеверт": { s: 3, c: 5 }, // Nonsense / carousel of shit
  "охуевать": { s: 3, c: 4 }, // To be continuously stunned
  "охуенно": { s: 3, c: 5 }, // Fucking awesome (adverb)
  "похуйчик": { s: 3, c: 5 }, // Don't-give-a-fuck (diminutive)
  "нахуячиться": { s: 3, c: 4 }, // To get wasted
  "захуяченный": { s: 3, c: 4 }, // Thrown / done intensely
  "хуйнёй страдать": { s: 3, c: 5 }, // To waste time on bullshit
  "хуеватость": { s: 3, c: 5 }, // Shittiness
  "хуеблядский": { s: 5, c: 4 }, // Whore-dick (compound adj)
  "хуепромышленник": { s: 4, c: 4 }, // Dick-industrialist (insult)
  "хуемудрый": { s: 4, c: 4 }, // Dick-wise (sarcastic)
  "хуедрыга": { s: 4, c: 4 }, // Dick-shaker

  // === EXPANSION: пизда derivatives ===
  "пиздатенько": { s: 3, c: 5 }, // Fucking nicely (diminutive)
  "пиздюлина": { s: 3, c: 4 }, // A beating / hit
  "пиздохать": { s: 5, c: 5 }, // To die / kick the bucket
  "пиздобратство": { s: 3, c: 4 }, // Vulgar brotherhood
  "пиздоватый": { s: 5, c: 5 }, // Cunt-ish
  "пиздострадание": { s: 4, c: 4 }, // Pussy-suffering (simping)
  "пиздопроёб": { s: 5, c: 5 }, // Cunt-fuckup
  "пиздохвост": { s: 5, c: 5 }, // Cunt-tail
  "пиздюган": { s: 3, c: 5 }, // Big shit (augmentative)
  "пиздюшка": { s: 5, c: 5 }, // Little cunt (diminutive)
  "пиздоглот": { s: 5, c: 5 }, // Cunt-swallower
  "пиздохранилище": { s: 5, c: 5 }, // Cunt-storage (insult)
  "пиздопромёт": { s: 5, c: 5 }, // Cunt-thrower
  "впиздячить": { s: 3, c: 4 }, // To slam into
  "пиздовать": { s: 3, c: 4 }, // To go / march (vulgar)
  "пиздецовый": { s: 3, c: 4 }, // Disastrous (adj)
  "пиздецома": { s: 3, c: 4 }, // Total disaster
  "запиздячить": { s: 3, c: 4 }, // To throw in / start doing hard
  "отпиздячить": { s: 3, c: 4 }, // To beat severely
  "пиздюля": { s: 3, c: 4 }, // A slap / punch
  "пропиздон": { s: 3, c: 5 }, // Total fuckup
  "пиздоблядство": { s: 5, c: 5 }, // Cunt-whoring
  "пиздюнчик": { s: 3, c: 5 }, // Little shit (affectionate vulgar)
  "пиздоглазие": { s: 5, c: 5 }, // Cunt-eyedness

  // === EXPANSION: ебать derivatives ===
  "заебашить": { s: 3, c: 4 }, // To smash / do something hard
  "ебашить": { s: 3, c: 4 }, // To work hard / hit
  "отъебать": { s: 3, c: 5 }, // To fuck off / beat up
  "поёбывать": { s: 3, c: 5 }, // To fuck occasionally
  "подъебать": { s: 3, c: 4 }, // To make fun of
  "подъёбка": { s: 3, c: 4 }, // A subtle mockery
  "подъебнуть": { s: 3, c: 4 }, // To subtly mock
  "наёбка": { s: 3, c: 4 }, // A scam / deception
  "наёбщик": { s: 3, c: 4 }, // A scammer
  "проёб": { s: 3, c: 5 }, // A fuckup / miss
  "заёб": { s: 3, c: 4 }, // Annoyance
  "разъёб": { s: 3, c: 4 }, // Destruction
  "въебать": { s: 3, c: 4 }, // To hit / slam
  "въёбывать": { s: 3, c: 4 }, // To work hard
  "уебан": { s: 1, c: 4 }, // Dumbfuck
  "уёбищный": { s: 1, c: 4 }, // Ugly / freakish
  "ебанутость": { s: 3, c: 4 }, // Craziness
  "ебанариум": { s: 3, c: 4 }, // Place of crazy people
  "ебанаврот": { s: 3, c: 5 }, // Fuck in the mouth (exclamation)
  "ебанарот": { s: 3, c: 5 }, // Fuck in the mouth (variant)
  "ебланство": { s: 3, c: 4 }, // Idiocy
  "еблище": { s: 3, c: 4 }, // Face (vulgar augmentative)
  "ёбаный насос": { s: 3, c: 5 }, // Fucking pump (exclamation)
  "ёбаная сила": { s: 3, c: 5 }, // Fucking power (exclamation)
  "разъебай": { s: 3, c: 4 }, // Irresponsible person
  "разъебайство": { s: 3, c: 4 }, // Irresponsibility
  "ёбнуться": { s: 3, c: 4 }, // To go crazy / fall hard
  "заёбистый": { s: 3, c: 4 }, // Tiring / annoying
  "перезаебать": { s: 3, c: 4 }, // To annoy again
  "объёбывать": { s: 3, c: 4 }, // To cheat continuously
  "недоёбанный": { s: 3, c: 5 }, // Underfucked

  // === EXPANSION: говно derivatives ===
  "говнюшка": { s: 3, c: 5 }, // Little shit (diminutive)
  "говнодав": { s: 3, c: 5 }, // Shit-stomper
  "говнотёк": { s: 3, c: 5 }, // Shit-flow
  "говнокод": { s: 3, c: 5 }, // Shit code (IT slang)
  "говномес": { s: 3, c: 5 }, // Shit-mixer
  "говноляп": { s: 3, c: 5 }, // Shit-stainer
  "говнолаз": { s: 3, c: 5 }, // Shit-climber (plumber insult)
  "говнотечь": { s: 3, c: 5 }, // Shit-leak
  "говнохлёб": { s: 3, c: 5 }, // Shit-slurper
  "говновоз": { s: 3, c: 5 }, // Shit-hauler
  "говнища": { s: 3, c: 5 }, // Lots of shit (augmentative)
  "говнистость": { s: 3, c: 5 }, // Shittiness
  "приговнять": { s: 3, c: 5 }, // To add shit to
  "выговнять": { s: 3, c: 5 }, // To shit out
  "подговнить": { s: 3, c: 5 }, // To sneak shit
  "обговняться": { s: 3, c: 5 }, // To cover oneself in shit
  "говнюшник": { s: 3, c: 5 }, // Shit-house / shit person

  // === EXPANSION: блядь derivatives ===
  "блядюга": { s: 5, c: 4 }, // Big whore (augmentative)
  "блядовитый": { s: 3, c: 4 }, // Whorish (adj)
  "блядоход": { s: 5, c: 4 }, // Whore-goer
  "блядиада": { s: 3, c: 4 }, // Whoring event / olympics
  "блядогон": { s: 5, c: 4 }, // Whore-chaser
  "блядовство": { s: 3, c: 4 }, // Whorish behavior
  "блядюшка": { s: 5, c: 4 }, // Little whore (diminutive)
  "заблядить": { s: 3, c: 4 }, // To start whoring
  "проблядиться": { s: 5, c: 4 }, // To whore away
  "приблядывать": { s: 3, c: 4 }, // To act whorish
  "блядский рот": { s: 3, c: 4 }, // Whorish mouth (exclamation)
  "блядина ёбаная": { s: 5, c: 5 }, // Fucking whore

  // === EXPANSION: More insults ===
  "имбецил": { s: 1, c: 4 }, // Imbecile
  "дебилка": { s: 1, c: 4 }, // Imbecile (fem)
  "кретинка": { s: 1, c: 4 }, // Cretin (fem)
  "тупица безмозглая": { s: 1, c: 4 }, // Brainless fool
  "безмозглый": { s: 1, c: 4 }, // Brainless
  "пустоголовый": { s: 1, c: 4 }, // Empty-headed
  "тупоголовый": { s: 1, c: 4 }, // Blunt-headed / stupid
  "туполобый": { s: 1, c: 4 }, // Thick-browed / stupid
  "баранина": { s: 1, c: 4 }, // Mutton / stupid person
  "тупой как пробка": { s: 1, c: 4 }, // Dumb as a cork
  "козлина": { s: 1, c: 4 }, // Goat (augmentative insult)
  "козлиха": { s: 1, c: 4 }, // She-goat (insult)
  "козлодой": { s: 1, c: 4 }, // Goat-milker (insult)
  "скотобаза": { s: 3, c: 5 }, // Cattle base / shithole
  "свинтус": { s: 1, c: 4 }, // Pig (playful insult)
  "свинёныш": { s: 1, c: 4 }, // Little pig (insult)
  "уродина": { s: 1, c: 4 }, // Ugly person (augmentative)
  "уродец": { s: 1, c: 4 }, // Little freak
  "выродочка": { s: 1, c: 4 }, // Degenerate (diminutive fem)
  "моральный урод": { s: 1, c: 4 }, // Moral freak
  "мразота": { s: 1, c: 4 }, // Scum (augmentative)
  "мразотень": { s: 1, c: 4 }, // Scum (variant)
  "мразёныш": { s: 1, c: 4 }, // Little scum
  "тварюга": { s: 1, c: 4 }, // Big creature / scum
  "тварина": { s: 1, c: 4 }, // Creature (augmentative)
  "гадёныш": { s: 1, c: 4 }, // Little vile creature
  "гадёнышка": { s: 1, c: 4 }, // Little vile creature (fem)
  "гадство": { s: 1, c: 4 }, // Vileness
  "гнидоёб": { s: 3, c: 5 }, // Nit-fucker (compound insult)
  "бестолочь": { s: 1, c: 4 }, // Blockhead / useless person
  "шваброид": { s: 1, c: 4 }, // Mop-oid (insult)
  "рожа": { s: 1, c: 4 }, // Mug / ugly face
  "морда": { s: 1, c: 4 }, // Snout / face (vulgar)
  "харя": { s: 1, c: 4 }, // Ugly mug
  "мордоворот": { s: 1, c: 4 }, // Face-turner (ugly person)
  "рукожоп": { s: 3, c: 4 }, // Ass-handed / clumsy person
  "криворукий": { s: 1, c: 4 }, // Crooked-handed / incompetent
  "слабоумный": { s: 1, c: 4 }, // Feeble-minded
  "придурочный": { s: 1, c: 4 }, // Idiotic
  "полоумный": { s: 1, c: 4 }, // Half-witted
  "шизанутый": { s: 1, c: 3 }, // Schizo (slang insult)
  "шизик": { s: 1, c: 4 }, // Schizo (diminutive)
  "психопат": { s: 1, c: 4 }, // Psychopath
  "психованный": { s: 1, c: 4 }, // Psycho (adj)
  "ненормальный": { s: 1, c: 4 }, // Abnormal / crazy
  "бесноватый": { s: 1, c: 4 }, // Possessed / frenzied
  "чертила": { s: 1, c: 4 }, // Devil-person
  "шпана": { s: 1, c: 4 }, // Riff-raff / punk
  "гопник": { s: 1, c: 4 }, // Gopnik / thug
  "гопота": { s: 1, c: 4 }, // Gopnik collective
  "быдлота": { s: 1, c: 4 }, // Cattle-people
  "быдлятина": { s: 1, c: 4 }, // Cattle-person
  "бомжара": { s: 1, c: 4 }, // Bum (augmentative)
  "бомжатник": { s: 1, c: 4 }, // Bum-house
  "алкаш": { s: 1, c: 3 }, // Drunkard
  "алкашня": { s: 1, c: 3 }, // Drunkards (collective)
  "алкоголик": { s: 1, c: 4 }, // Alcoholic
  "наркоман": { s: 1, c: 4 }, // Drug addict
  "наркоша": { s: 1, c: 3 }, // Drug addict (slang)
  "нарик": { s: 1, c: 3 }, // Drug addict (short slang)
  "торчок": { s: 1, c: 4 }, // Junkie

  // === EXPANSION: Criminal / prison slang ===
  "опущенец": { s: 3, c: 4 }, // Lowered one (prison caste)
  "петушня": { s: 3, c: 4 }, // Roosters / prison bottoms
  "петушить": { s: 3, c: 4 }, // To humiliate (prison)
  "петушиный": { s: 3, c: 4 }, // Rooster-like / humiliated
  "козлить": { s: 3, c: 4 }, // To rat / betray (prison)
  "стукач": { s: 3, c: 4 }, // Snitch
  "крысятник": { s: 3, c: 4 }, // Rat-hole / place of thieves
  "крыса": { s: 3, c: 4 }, // Rat / thief from own people
  "баклан": { s: 3, c: 4 }, // Hooligan (prison slang)
  "бакланить": { s: 3, c: 4 }, // To act like a hooligan
  "шестёрка": { s: 3, c: 4 }, // Errand boy (prison hierarchy)
  "барыга": { s: 3, c: 4 }, // Dealer / speculator
  "мусор": { s: 3, c: 4 }, // Cop (criminal slang, derogatory)
  "мент": { s: 3, c: 4 }, // Cop (derogatory)
  "ментяра": { s: 3, c: 4 }, // Cop (augmentative derogatory)
  "мусорня": { s: 3, c: 4 }, // Cops (collective, derogatory)
  "легавый": { s: 3, c: 4 }, // Cop (derogatory, lit. hound)
  "борзый": { s: 3, c: 4 }, // Impudent / brash
  "беспредел": { s: 3, c: 4 }, // Lawlessness / chaos
  "беспредельщик": { s: 3, c: 4 }, // Lawless person
  "наехать": { s: 5, c: 5 }, // To threaten / harass
  "кидала": { s: 3, c: 4 }, // Scammer
  "кидалово": { s: 3, c: 4 }, // Scam
  "лохотрон": { s: 3, c: 4 }, // Scam scheme
  "чмырить": { s: 3, c: 4 }, // To humiliate
  "чмырь": { s: 1, c: 4 }, // Humiliated loser
  "зашквар": { s: 3, c: 4 }, // Disgrace / shame (prison-origin)
  "зашкварный": { s: 3, c: 4 }, // Disgraced (adj)
  "зашквариться": { s: 3, c: 4 }, // To disgrace oneself
  "опустить": { s: 3, c: 4 }, // To humiliate / lower rank
  "ссученный": { s: 3, c: 4 }, // Bitched-out / traitor
  "ссучиться": { s: 3, c: 4 }, // To become a traitor
  "козёл отпущения": { s: 3, c: 4 }, // Scapegoat
  "шконка": { s: 3, c: 4 }, // Prison bunk (used as insult context)
  "параша": { s: 3, c: 5 }, // Prison toilet / shit
  "шлак": { s: 3, c: 4 }, // Slag / trash person
  "шлакоблок": { s: 3, c: 4 }, // Slag-block (insult)
  "фуфло": { s: 3, c: 5 }, // Fake / bullshit (prison)
  "фуфлыжник": { s: 3, c: 4 }, // Faker / debt-dodger
  "фраерок": { s: 3, c: 4 }, // Little sucker
  "терпила": { s: 3, c: 4 }, // Victim / pushover

  // === EXPANSION: More slurs ===
  "пидорок": { s: 5, c: 4 }, // Little faggot (diminutive)
  "пидорня": { s: 5, c: 4 }, // Faggots (collective)
  "пидарас": { s: 5, c: 4 }, // Faggot (variant spelling)
  "пидораска": { s: 5, c: 4 }, // Faggot (fem-ized insult)
  "гомосек": { s: 5, c: 4 }, // Homosexual (derogatory)
  "гомосятина": { s: 5, c: 4 }, // Gay stuff (derogatory)
  "лесбиянка": { s: 5, c: 4 }, // Lesbian (can be derogatory in context)
  "лезбуха": { s: 5, c: 4 }, // Dyke (slang)
  "трансуха": { s: 5, c: 4 }, // Trans person (derogatory)
  "голубой": { s: 5, c: 4 }, // Gay (lit. light blue, derogatory)
  "мужеложец": { s: 5, c: 4 }, // Sodomite (archaic slur)
  "хачик": { s: 5, c: 4 }, // Slur for Caucasians (diminutive)
  "чурбанина": { s: 5, c: 4 }, // Block / slur for Central Asians
  "чурек": { s: 5, c: 4 }, // Slur for Caucasians
  "чуркестан": { s: 5, c: 4 }, // Slur-land for Central Asians
  "чёрный": { s: 5, c: 4 }, // Black (used as racial slur)
  "чернильница": { s: 5, c: 4 }, // Inkwell (slur for woman with Black partners)
  "жидовня": { s: 5, c: 4 }, // Jews (collective slur)
  "жидовствовать": { s: 5, c: 4 }, // To act Jewish (antisemitic)
  "жидовморда": { s: 5, c: 4 }, // Jew-face (slur)
  "москалька": { s: 5, c: 4 }, // Slur for Russian woman (from Ukrainian)
  "хохляндия": { s: 5, c: 4 }, // Ukraine (derogatory)
  "хохлятина": { s: 5, c: 4 }, // Ukrainian stuff (derogatory)
  "кацапня": { s: 5, c: 4 }, // Russians (collective, derog from Ukr.)
  "чечен": { s: 5, c: 4 }, // Chechen (derogatory usage)
  "чеченина": { s: 5, c: 4 }, // Chechen stuff (derogatory)
  "армяшка": { s: 5, c: 4 }, // Armenian (derogatory diminutive)
  "грузинёнок": { s: 5, c: 4 }, // Young Georgian (derogatory)
  "таджичка": { s: 5, c: 4 }, // Tajik woman (derogatory usage)

  // === EXPANSION: More sexual / body part terms ===
  "клитор": { s: 4, c: 3 }, // Clitoris
  "анус": { s: 4, c: 3 }, // Anus
  "промежуток": { s: 4, c: 3 }, // Crotch area
  "титька": { s: 4, c: 4 }, // Tit (vulgar)
  "титьки": { s: 4, c: 4 }, // Tits (vulgar)
  "жопка": { s: 4, c: 3 }, // Little ass (diminutive)
  "жопища": { s: 4, c: 3 }, // Big ass (augmentative)
  "сракотанище": { s: 4, c: 3 }, // Big-assed (augmentative)
  "мудень": { s: 4, c: 3 }, // Ballsack person
  "яйца": { s: 4, c: 3 }, // Balls (lit. eggs)
  "яички": { s: 4, c: 3 }, // Little balls / testicles
  "подмахивать": { s: 4, c: 3 }, // To thrust from below
  "отсосать": { s: 4, c: 3 }, // To suck off
  "отсос": { s: 4, c: 5 }, // Blowjob
  "куни": { s: 4, c: 4 }, // Cunnilingus (slang)
  "куннилингус": { s: 4, c: 3 }, // Cunnilingus
  "анилингус": { s: 4, c: 3 }, // Analingus
  "фелляция": { s: 4, c: 5 }, // Fellatio
  "дрочка": { s: 4, c: 3 }, // Jerking off (noun)
  "подрочить": { s: 4, c: 4 }, // To jerk off (a bit)
  "надрочить": { s: 4, c: 4 }, // To jerk off (a lot)
  "передёрнуть": { s: 4, c: 4 }, // To jerk off (euphemism)
  "кончина": { s: 5, c: 5 }, // Orgasm / death (vulgar pun)
  "обкончать": { s: 4, c: 3 }, // To cum all over
  "шлюховатый": { s: 4, c: 3 }, // Slutty (adj)
  "шлюшка": { s: 4, c: 3 }, // Little slut
  "потаскушка": { s: 4, c: 3 }, // Little harlot
  "потрахаться": { s: 4, c: 5 }, // To fuck (a bit)
  "перепихнуться": { s: 4, c: 3 }, // To have a quickie
  "перепих": { s: 4, c: 3 }, // A quickie
  "перепихон": { s: 4, c: 3 }, // A quickie (variant)
  "залупоглазый": { s: 4, c: 3 }, // Glans-eyed (insult)
  "залупистый": { s: 4, c: 3 }, // Dickish (adj)
  "елдовый": { s: 4, c: 3 }, // Dick-related (adj)
  "пенис": { s: 4, c: 3 }, // Penis
  "вагина": { s: 4, c: 3 }, // Vagina

  // === EXPANSION: Compound phrases ===
  "пошёл в жопу": { s: 3, c: 5 }, // Go to hell / fuck off
  "отсоси": { s: 3, c: 5 }, // Suck it
  "ебал твою мать": { s: 3, c: 5 }, // Fucked your mother
  "иди в жопу": { s: 3, c: 5 }, // Go to hell
  "иди в пизду": { s: 5, c: 5 }, // Go to a cunt
  "в пизду": { s: 5, c: 5 }, // To a cunt / fuck it
  "пошёл в пизду": { s: 5, c: 5 }, // Go to a cunt
  "ни хуя не понимаю": { s: 3, c: 5 }, // Don't understand a fucking thing
  "да пошёл ты": { s: 3, c: 5 }, // Fuck off (mild)
  "ёбаный ты в рот компот": { s: 3, c: 5 }, // Fucking compote (elaborate excl.)
  "ёб твоя медь": { s: 3, c: 5 }, // Fuck your copper (euphemistic)
  "мать твою": { s: 3, c: 5 }, // Your mother (implied insult)
  "мать твою за ногу": { s: 3, c: 5 }, // Your mother by the leg
  "ебись оно конём": { s: 3, c: 5 }, // Let it fuck a horse
  "ёбаный в сраку": { s: 3, c: 5 }, // Fucked in the ass
  "пиздуй отсюда": { s: 3, c: 5 }, // Get the fuck out of here
  "хуй тебе": { s: 4, c: 5 }, // Dick to you / no way
  "хуй тебе в зубы": { s: 4, c: 5 }, // Dick in your teeth
  "жопой чую": { s: 3, c: 5 }, // I feel with my ass (intuition)
  "жри говно": { s: 3, c: 5 }, // Eat shit
  "сосёшь": { s: 3, c: 5 }, // You suck
  "сасай лалку": { s: 3, c: 5 }, // Suck it (internet meme)
  "уёбывай": { s: 3, c: 5 }, // Get the fuck out
  "катись нахуй": { s: 3, c: 5 }, // Roll the fuck away
  "закрой ебало": { s: 3, c: 5 }, // Shut your fucking mouth
  "закрой хлебало": { s: 3, c: 5 }, // Shut your bread-hole
  "язви тебя": { s: 3, c: 5 }, // Damn you (archaic vulgar)
  "язви твою мать": { s: 3, c: 5 }, // Damn your mother (archaic)
  "ёбаный бог": { s: 3, c: 5 }, // Fucking god
  "сука ёбаная": { s: 3, c: 5 }, // Fucking bitch
  "блять ёбаная": { s: 5, c: 5 }, // Fucking whore

  // === EXPANSION: Internet / modern slang ===
  "хейтер": { s: 2, c: 3 }, // Hater (transliteration)
  "сукаблядь": { s: 5, c: 4 }, // Bitch-whore (one word)
  "ебанавшё": { s: 3, c: 5 }, // Fuck everything (slang)
  "пиздёшь": { s: 2, c: 3 }, // You're lying (internet)
  "ёбушки-воробушки": { s: 2, c: 3 }, // Euphemistic exclamation
  "ёпта": { s: 2, c: 3 }, // Euphemism for ёб (internet)
  "писос": { s: 2, c: 3 }, // Pizdec (coded internet)
  "пздц": { s: 2, c: 3 }, // Pizdec (abbreviation)
  "бля": { s: 2, c: 3 }, // Blyat (shortened)
  "ёмаё": { s: 2, c: 3 }, // Euphemistic exclamation
  "ебучий": { s: 3, c: 5 }, // Fucking (adj)
  "ебучка": { s: 3, c: 5 }, // Fucking thing
  "сучара": { s: 2, c: 3 }, // Big bitch (augmentative)
  "сучёныш": { s: 2, c: 3 }, // Son of a bitch (lit.)
  "потрахушки": { s: 3, c: 5 }, // Fuck-games (diminutive)
  "ёбаное оно": { s: 3, c: 5 }, // Fucking it
  "хуйлан": { s: 4, c: 3 }, // Dick-person (insult)
  "хуйланить": { s: 4, c: 3 }, // To act like a dick
  "блядовня": { s: 5, c: 4 }, // Whorehouse / mess
  "пиздострадалец": { s: 4, c: 3 }, // Pussy-sufferer (variant)
  "мудопрыг": { s: 2, c: 3 }, // Ball-jumper (insult)
  "мудосос": { s: 2, c: 3 }, // Ball-sucker
  "ёбырь": { s: 3, c: 5 }, // Fucker (colloquial)
  "залупень": { s: 4, c: 3 }, // Dick-head (from залупа)
  "залупенция": { s: 4, c: 3 }, // Dick-headedness
  "разъебон": { s: 2, c: 3 }, // Smash-up
  "пиздец подкрался": { s: 2, c: 3 }, // Disaster crept up
  "жизнь говно": { s: 3, c: 5 }, // Life is shit
  "всё хуйня": { s: 3, c: 5 }, // Everything is bullshit
  "ёбаный крот": { s: 3, c: 5 }, // Fucking mole (exclamation)
  "ёбаный ёж": { s: 3, c: 5 }, // Fucking hedgehog (exclamation)
  "ёбаный лось": { s: 3, c: 5 }, // Fucking moose (exclamation)
  "мудозвонить": { s: 4, c: 3 }, // To ring balls / talk nonsense
  "мудохать": { s: 2, c: 3 }, // To beat up
  "мудохаться": { s: 2, c: 3 }, // To fight / toil

  // === EXPANSION: Transliterated Russian profanity (Latin letters) ===
  "suka": { s: 3, c: 4 }, // Bitch (transliterated)
  "blyad": { s: 5, c: 5 }, // Whore (transliterated)
  "blyat": { s: 3, c: 4 }, // Fuck exclamation (transliterated)
  "blyadt": { s: 5, c: 5 }, // Whore variant (transliterated)
  "blya": { s: 3, c: 5 }, // Fuck short (transliterated)
  "pizda": { s: 5, c: 5 }, // Cunt (transliterated)
  "pizdec": { s: 3, c: 4 }, // Fucking disaster (transliterated)
  "pizdets": { s: 3, c: 5 }, // Fucking disaster variant (transliterated)
  "hui": { s: 3, c: 4 }, // Dick (transliterated)
  "huy": { s: 4, c: 5 }, // Dick variant (transliterated)
  "khuy": { s: 4, c: 5 }, // Dick variant (transliterated)
  "nahui": { s: 3, c: 4 }, // Fuck off (transliterated)
  "nahuy": { s: 3, c: 5 }, // Fuck off variant (transliterated)
  "nakhui": { s: 3, c: 5 }, // Fuck off variant (transliterated)
  "nakhuy": { s: 3, c: 5 }, // Fuck off variant (transliterated)
  "ebat": { s: 3, c: 4 }, // To fuck (transliterated)
  "ebal": { s: 3, c: 5 }, // Fucked (transliterated)
  "yebat": { s: 3, c: 5 }, // To fuck variant (transliterated)
  "yobaniy": { s: 3, c: 5 }, // Fucking adj (transliterated)
  "yobany": { s: 3, c: 5 }, // Fucking adj variant (transliterated)
  "ebaniy": { s: 3, c: 5 }, // Fucking adj variant (transliterated)
  "ebany": { s: 3, c: 5 }, // Fucking adj variant (transliterated)
  "mudak": { s: 3, c: 4 }, // Asshole (transliterated)
  "mudilo": { s: 1, c: 5 }, // Dumbass (transliterated)
  "pidor": { s: 3, c: 5 }, // Faggot (transliterated)
  "pidoras": { s: 3, c: 5 }, // Faggot variant (transliterated)
  "pidaras": { s: 3, c: 5 }, // Faggot variant (transliterated)
  "gandon": { s: 3, c: 5 }, // Condom/scumbag (transliterated)
  "gondon": { s: 3, c: 5 }, // Condom/scumbag variant (transliterated)
  "gavno": { s: 3, c: 4 }, // Shit (transliterated)
  "govno": { s: 3, c: 5 }, // Shit variant (transliterated)
  "dermo": { s: 3, c: 5 }, // Shit variant (transliterated)
  "zalupa": { s: 4, c: 5 }, // Glans/dickhead (transliterated)
  "zhopa": { s: 3, c: 5 }, // Ass (transliterated)
  "manda": { s: 5, c: 5 }, // Cunt (transliterated)
  "huynya": { s: 3, c: 5 }, // Bullshit (transliterated)
  "khuynya": { s: 3, c: 5 }, // Bullshit variant (transliterated)
  "huinya": { s: 3, c: 5 }, // Bullshit variant (transliterated)
  "pizdezh": { s: 3, c: 5 }, // Bullshit/lies (transliterated)
  "dolboyob": { s: 1, c: 5 }, // Dumbfuck (transliterated)
  "dolboeb": { s: 1, c: 5 }, // Dumbfuck variant (transliterated)
  "yobaniy v rot": { s: 3, c: 5 }, // Fucked in the mouth (transliterated)
  "ebaniy v rot": { s: 3, c: 5 }, // Fucked in the mouth variant (transliterated)
  "idi nahui": { s: 3, c: 5 }, // Go fuck yourself (transliterated)
  "idi nakhuy": { s: 3, c: 5 }, // Go fuck yourself variant (transliterated)
  "poshyol nahui": { s: 3, c: 5 }, // Go fuck yourself (transliterated)
  "poshel nahui": { s: 3, c: 5 }, // Go fuck yourself variant (transliterated)
  "poshol nahuy": { s: 3, c: 5 }, // Go fuck yourself variant (transliterated)
  "suchka": { s: 3, c: 5 }, // Little bitch (transliterated)
  "ublyudok": { s: 3, c: 5 }, // Bastard (transliterated)
  "blyadina": { s: 5, c: 5 }, // Whore augmentative (transliterated)
  "huesos": { s: 4, c: 5 }, // Cocksucker (transliterated)
  "khuyesos": { s: 4, c: 5 }, // Cocksucker variant (transliterated)
  "ebanashka": { s: 3, c: 5 }, // Crazy person (transliterated)
  "ebanko": { s: 1, c: 5 }, // Idiot (transliterated)
  "eblan": { s: 1, c: 5 }, // Idiot (transliterated)
  "ueban": { s: 1, c: 5 }, // Dumbfuck (transliterated)
  "uyoban": { s: 1, c: 5 }, // Dumbfuck variant (transliterated)
  "chmo": { s: 1, c: 5 }, // Loser (transliterated)
  "tvar": { s: 3, c: 5 }, // Scumbag (transliterated)
  "mraz": { s: 3, c: 5 }, // Scum (transliterated)
  "padla": { s: 3, c: 5 }, // Bastard (transliterated)
  "loh": { s: 3, c: 5 }, // Sucker (transliterated)
  "loshara": { s: 1, c: 5 }, // Loser (transliterated)
  "debil": { s: 3, c: 5 }, // Imbecile (transliterated)
  "urod": { s: 1, c: 5 }, // Ugly/freak (transliterated)
  "huilo": { s: 4, c: 5 }, // Dickhead (transliterated)
  "khuylo": { s: 4, c: 5 }, // Dickhead variant (transliterated)
  "pizdabol": { s: 3, c: 5 }, // Liar (transliterated)
  "pizdabolshik": { s: 3, c: 5 }, // Liar variant (transliterated)
  "svoloch": { s: 3, c: 5 }, // Bastard (transliterated)
  "govnyuk": { s: 3, c: 5 }, // Shithead (transliterated)
  "zasranec": { s: 3, c: 5 }, // Little shit (transliterated)
  "der'mo": { s: 3, c: 5 }, // Shit (transliterated with apostrophe)
  "pohuy": { s: 3, c: 5 }, // Don't give a fuck (transliterated)
  "pokhuy": { s: 3, c: 5 }, // Don't give a fuck variant (transliterated)
  "zaebis": { s: 3, c: 5 }, // Fucking great (transliterated)
  "zayebis": { s: 3, c: 5 }, // Fucking great variant (transliterated)
  "ohuet": { s: 3, c: 5 }, // Holy fuck (transliterated)
  "okhuyet": { s: 3, c: 5 }, // Holy fuck variant (transliterated)
  "ebalo": { s: 3, c: 5 }, // Face vulgar (transliterated)
  "ebalnik": { s: 3, c: 5 }, // Face vulgar (transliterated)
  "drochit": { s: 4, c: 5 }, // To jerk off (transliterated)
  "drochat": { s: 4, c: 5 }, // To jerk off variant (transliterated)
  "trahnut": { s: 3, c: 5 }, // To fuck (transliterated)
  "trahat": { s: 3, c: 5 }, // To fuck variant (transliterated)
  "shlyuha": { s: 3, c: 5 }, // Slut (transliterated)
  "shalava": { s: 3, c: 5 }, // Slut (transliterated)
  "kurva": { s: 5, c: 5 }, // Whore (transliterated)
  "bydlo": { s: 3, c: 5 }, // Cattle/redneck (transliterated)
  "gopnik": { s: 3, c: 5 }, // Gopnik (transliterated)
  "churka": { s: 3, c: 5 }, // Central Asian slur (transliterated)
  "khach": { s: 3, c: 5 }, // Caucasian slur (transliterated)
  "pizduk": { s: 3, c: 5 }, // Little shit (transliterated)
  "nahren": { s: 2, c: 5 }, // To hell euphemism (transliterated)
  "nafig": { s: 2, c: 5 }, // To hell euphemism (transliterated)
  "yopt": { s: 3, c: 5 }, // Euphemism for fuck (transliterated)
  "yopta": { s: 3, c: 5 }, // Euphemism for fuck (transliterated)
  "ssat": { s: 3, c: 5 }, // To piss (transliterated)
  "srat": { s: 3, c: 5 }, // To shit (transliterated)
  "perdun": { s: 3, c: 5 }, // Old fart (transliterated)
  "ochko": { s: 3, c: 5 }, // Asshole (transliterated)
  "elda": { s: 4, c: 5 }, // Dick archaic (transliterated)
  "hren": { s: 4, c: 5 }, // Dick euphemism (transliterated)

  // === EXPANSION: More мат compound phrases ===
  "пошёл ты": { s: 3, c: 5 }, // Fuck off
  "да пошла ты": { s: 3, c: 5 }, // Fuck off (to a woman)
  "иди ты в жопу": { s: 3, c: 5 }, // Go to hell / shove it
  "сосать мой хуй": { s: 4, c: 5 }, // Suck my dick
  "соси мой хуй": { s: 4, c: 5 }, // Suck my dick (imperative)
  "ебал я твою мать": { s: 3, c: 5 }, // I fucked your mother
  "ебал твоего отца": { s: 1, c: 4 }, // I fucked your father
  "я тебя ебал": { s: 3, c: 5 }, // I fucked you
  "твою мать ебал": { s: 3, c: 5 }, // Fucked your mother
  "мать твою ебал": { s: 3, c: 5 }, // Fucked your mother (reordered)
  "ебал в рот твою мать": { s: 3, c: 5 }, // Fucked your mother in the mouth
  "ёб твою бабушку": { s: 3, c: 5 }, // Fuck your grandmother
  "хуй тебе в глотку": { s: 4, c: 5 }, // Dick down your throat
  "хуй на рыло": { s: 4, c: 5 }, // Dick to the snout
  "хуй в зубы": { s: 4, c: 5 }, // Dick in the teeth
  "хуй моржовый": { s: 4, c: 5 }, // Walrus dick (exclamation)
  "ебись в глаз": { s: 3, c: 5 }, // Fuck yourself in the eye
  "ебись конём": { s: 3, c: 5 }, // Fuck yourself with a horse
  "ебись в рот": { s: 3, c: 5 }, // Fuck yourself in the mouth
  "жри хуй": { s: 4, c: 5 }, // Eat a dick
  "пизда тебе": { s: 3, c: 5 }, // You're fucked
  "в рот ебать": { s: 3, c: 5 }, // To fuck in the mouth
  "в жопу ебать": { s: 3, c: 5 }, // To fuck in the ass
  "ебать тебя в ухо": { s: 3, c: 5 }, // Fuck you in the ear
  "ебать тебя конём": { s: 3, c: 5 }, // Fuck you with a horse
  "ебись ты конём": { s: 3, c: 5 }, // Fuck yourself with a horse
  "пошёл ты на хер": { s: 2, c: 3 }, // Go to hell (mild)
  "катись на хуй": { s: 4, c: 5 }, // Roll to a dick
  "катись в жопу": { s: 3, c: 5 }, // Roll into an ass
  "пиздуй нахуй": { s: 3, c: 5 }, // Get the fuck out
  "пиздуй отсюда нахуй": { s: 3, c: 5 }, // Get the fuck away from here
  "сука ты ёбаная блять": { s: 5, c: 5 }, // Fucking bitch whore
  "ебать-колотить": { s: 3, c: 5 }, // Fuck-bang (exclamation)
  "ёбаный в душу": { s: 3, c: 5 }, // Fucked in the soul
  "ебать мои глаза": { s: 3, c: 5 }, // Fuck my eyes
  "ёбаный в рот крокодил": { s: 3, c: 5 }, // Fucking crocodile in the mouth
  "ёбаный стос": { s: 3, c: 5 }, // Fucking hundred (exclamation)
  "в жопу ёбаный": { s: 3, c: 5 }, // Fucked in the ass
  "хуй ли": { s: 3, c: 5 }, // What the fuck (question)
  "какого хуя": { s: 3, c: 5 }, // What the fuck
  "за каким хуем": { s: 3, c: 5 }, // For what the fuck
  "хуем груши околачивать": { s: 4, c: 5 }, // Knocking pears with a dick (wasting time)
  "ебать как здорово": { s: 3, c: 5 }, // Fuck how great
  "ни ебёт ни колышет": { s: 3, c: 5 }, // Doesn't fuck or sway (doesn't care)
  "ебу как хочу": { s: 3, c: 5 }, // I fuck as I want
  "ебало завали": { s: 3, c: 5 }, // Shut your fucking face
  "пизда тебе рыжая": { s: 5, c: 5 }, // The redheaded cunt is coming for you
  "ёбаный хуй в рот": { s: 4, c: 5 }, // Fucking dick in the mouth
  "хуй пойми": { s: 3, c: 5 }, // Impossible to understand

  // === EXPANSION: More slang insults ===
  "лошпед": { s: 1, c: 3 }, // Loser (slang distortion)
  "лузер": { s: 1, c: 4 }, // Loser (transliteration)
  "неудачник": { s: 1, c: 4 }, // Loser
  "неудачница": { s: 1, c: 4 }, // Loser (fem)
  "тупень": { s: 1, c: 4 }, // Thicko
  "тупняк": { s: 1, c: 4 }, // Stupidity / daze
  "дуболом": { s: 1, c: 4 }, // Oaf (lit. oak-breaker)
  "дубина": { s: 1, c: 4 }, // Club / blockhead
  "дундук": { s: 1, c: 4 }, // Blockhead
  "балда": { s: 1, c: 4 }, // Blockhead
  "олух": { s: 1, c: 4 }, // Oaf
  "олух царя небесного": { s: 1, c: 4 }, // Oaf of the heavenly king
  "лапоть": { s: 1, c: 4 }, // Bast shoe / yokel
  "валенок": { s: 1, c: 4 }, // Felt boot / simpleton
  "деревенщина": { s: 1, c: 4 }, // Peasant (insult)
  "колхозник": { s: 1, c: 4 }, // Collective farmer (insult)
  "колхозница": { s: 1, c: 4 }, // Collective farmer fem (insult)
  "жлоб": { s: 1, c: 4 }, // Cheapskate / boor
  "жлобяра": { s: 1, c: 4 }, // Big cheapskate
  "жмот": { s: 1, c: 4 }, // Miser
  "скупердяй": { s: 1, c: 4 }, // Skinflint
  "хам": { s: 1, c: 4 }, // Boor / rude person
  "хамло": { s: 1, c: 4 }, // Rude person (augmentative)
  "хамка": { s: 1, c: 4 }, // Rude woman
  "наглец": { s: 1, c: 4 }, // Impudent person
  "наглая морда": { s: 1, c: 4 }, // Impudent snout
  "борзота": { s: 1, c: 4 }, // Impudence collective
  "ёбко": { s: 1, c: 4 }, // Sharply (vulgar adv)
  "фуфел": { s: 1, c: 4 }, // Fake / loser
  "лопух": { s: 1, c: 4 }, // Burdock / sucker
  "растяпа": { s: 3, c: 4 }, // Butterfingers
  "размазня": { s: 1, c: 4 }, // Wimp / weakling
  "слюнтяй": { s: 1, c: 4 }, // Sniveler
  "нюня": { s: 1, c: 4 }, // Crybaby
  "сопляк": { s: 1, c: 4 }, // Snot-nosed kid
  "сопли жевать": { s: 1, c: 4 }, // To chew snot (to be indecisive)
  "молокосос": { s: 1, c: 4 }, // Milksop
  "сморчок": { s: 1, c: 4 }, // Morel / old wrinkled person
  "шкура": { s: 1, c: 4 }, // Skin / gold-digger
  "шкурница": { s: 1, c: 4 }, // Gold-digger (fem)
  "содержанка": { s: 1, c: 4 }, // Kept woman
  "подстилка блядская": { s: 1, c: 4 }, // Whorish doormat
  "подзаборная шлюха": { s: 5, c: 4 }, // Under-the-fence whore
  "вертихвостка": { s: 1, c: 4 }, // Tail-wagger / flirt
  "потаскун": { s: 1, c: 4 }, // Male slut
  "развратник": { s: 1, c: 4 }, // Debaucher
  "развратница": { s: 1, c: 4 }, // Debaucher (fem)
  "распутник": { s: 1, c: 4 }, // Libertine
  "распутница": { s: 1, c: 4 }, // Libertine (fem)
  "бабник": { s: 1, c: 4 }, // Womanizer
  "кобель": { s: 1, c: 4 }, // Male dog / womanizer
  "кобелина": { s: 1, c: 4 }, // Big womanizer
  "самец": { s: 1, c: 4 }, // Male / stud (derogatory)
  "самка": { s: 1, c: 4 }, // Female / bitch (derogatory)
  "животное": { s: 1, c: 4 }, // Animal (insult)
  "скот": { s: 1, c: 4 }, // Cattle (insult)
  "грязная свинья": { s: 1, c: 4 }, // Dirty pig
  "жирная корова": { s: 1, c: 4 }, // Fat cow
  "жирный боров": { s: 1, c: 4 }, // Fat boar
  "жирдяй": { s: 1, c: 4 }, // Fatso
  "жиртрест": { s: 1, c: 4 }, // Fat trust / fatso
  "толстожопый": { s: 1, c: 4 }, // Fat-assed
  "толстожопая": { s: 1, c: 4 }, // Fat-assed (fem)

  // === EXPANSION: More criminal/prison argot ===
  "козлятник": { s: 3, c: 4 }, // Goat pen / informers' area
  "козлиная порода": { s: 3, c: 4 }, // Goat breed (insult)
  "козёл вонючий ёбаный": { s: 3, c: 5 }, // Stinking fucking goat
  "петушиный угол": { s: 3, c: 4 }, // Rooster corner (prison bottom area)
  "петушок": { s: 3, c: 4 }, // Little rooster / prison bottom
  "петушара": { s: 3, c: 4 }, // Prison bottom (augmentative)
  "обиженный": { s: 3, c: 4 }, // Offended / prison outcast
  "обиженка": { s: 3, c: 4 }, // Female outcast
  "опущенка": { s: 3, c: 4 }, // Lowered one (fem)
  "вафлёр": { s: 4, c: 4 }, // Cocksucker (prison slang)
  "вафлить": { s: 4, c: 5 }, // To give blowjob (prison slang)
  "вафля": { s: 4, c: 5 }, // Blowjob (prison slang)
  "отпетый": { s: 3, c: 4 }, // Incorrigible / hardened criminal
  "рецидивист": { s: 3, c: 4 }, // Repeat offender
  "урка": { s: 3, c: 4 }, // Criminal (slang)
  "уркаган": { s: 3, c: 4 }, // Criminal (augmentative)
  "блатной": { s: 3, c: 4 }, // Criminal class member
  "блатняк": { s: 3, c: 4 }, // Criminal slang/culture
  "авторитет": { s: 3, c: 4 }, // Authority (criminal boss)
  "вор в законе": { s: 3, c: 4 }, // Thief in law (crime boss)
  "мокрушник": { s: 3, c: 4 }, // Killer (criminal slang)
  "мочить": { s: 3, c: 4 }, // To wet / to kill (slang)
  "замочить": { s: 3, c: 4 }, // To kill (slang)
  "завалить": { s: 3, c: 4 }, // To bring down / kill (slang)
  "грохнуть": { s: 3, c: 4 }, // To bang / kill (slang)

  "шмаль": { s: 3, c: 4 }, // Weed / hashish (slang)
  "дурь": { s: 1, c: 3 }, // Stupidity / drugs (slang)
  "ширяться": { s: 3, c: 4 }, // To inject drugs
  "ширка": { s: 3, c: 4 }, // Drug injection
  "обдолбанный": { s: 3, c: 4 }, // Stoned / wasted
  "обдолбыш": { s: 3, c: 4 }, // Stoned person
  "укуренный": { s: 3, c: 4 }, // Stoned (from smoking)
  "нарколыга": { s: 3, c: 4 }, // Drug addict (derogatory)
  "кумарить": { s: 3, c: 4 }, // To be high / tripping
  "торчать": { s: 3, c: 4 }, // To be high / addicted
  "закладка": { s: 3, c: 4 }, // Drug stash / dead drop
  "барыжить": { s: 3, c: 4 }, // To deal (drugs/goods)
  "фуфлогон": { s: 3, c: 5 }, // Faker / bullshitter (prison)
  "фуфлогонить": { s: 3, c: 5 }, // To fake / bullshit (prison)
  "косяк": { s: 3, c: 5 }, // Joint / fuckup
  "косячить": { s: 3, c: 5 }, // To fuck up
  "лажа": { s: 3, c: 4 }, // Crap / fake
  "лажовый": { s: 3, c: 4 }, // Crappy / fake
  "залажать": { s: 3, c: 5 }, // To fuck up
  "обсосок": { s: 3, c: 4 }, // Sucked-on / worthless person
  "огрызок": { s: 3, c: 4 }, // Stub / pathetic person
  "отброс": { s: 3, c: 4 }, // Reject / waste
  "отбросы общества": { s: 3, c: 4 }, // Dregs of society
  "шваль подзаборная": { s: 3, c: 4 }, // Under-the-fence riff-raff
  "пропитый": { s: 1, c: 3 }, // Drunk through / alcoholic
  "пропойца": { s: 1, c: 3 }, // Drunkard
  "алкашка": { s: 1, c: 3 }, // Female drunkard
  "синяк": { s: 1, c: 3 }, // Blue / drunkard
  "синячка": { s: 1, c: 3 }, // Female drunkard
  "забулдыга": { s: 1, c: 3 }, // Drunkard / bum
  "скурвиться": { s: 5, c: 4 }, // To become a whore / traitor

  // === EXPANSION: More homophobic slurs ===
  "пидорок ёбаный": { s: 5, c: 5 }, // Fucking little faggot
  "пидор гнойный": { s: 5, c: 4 }, // Pus-filled faggot
  "гомик": { s: 5, c: 4 }, // Gay (derogatory diminutive)
  "гомосятник": { s: 5, c: 4 }, // Gay hangout (derogatory)
  "задницелюб": { s: 5, c: 4 }, // Ass-lover (derogatory)
  "жопник ёбаный": { s: 5, c: 5 }, // Fucking ass-person
  "педрила": { s: 5, c: 4 }, // Faggot (variant)
  "педераст": { s: 5, c: 4 }, // Pederast
  "педерастия": { s: 5, c: 4 }, // Pederasty
  "содомит": { s: 5, c: 4 }, // Sodomite
  "содомия": { s: 5, c: 4 }, // Sodomy
  "петух гамбургский": { s: 5, c: 4 }, // Hamburg rooster (elaborate prison slur)
  "гребень": { s: 5, c: 4 }, // Crest / prison bottom marker
  "пидорнутый": { s: 5, c: 4 }, // Faggotized
  "опидорасить": { s: 5, c: 4 }, // To make into a faggot
  "опидораситься": { s: 5, c: 4 }, // To become a faggot
  "пидорство": { s: 5, c: 4 }, // Faggotry
  "лесбиянка ёбаная": { s: 5, c: 5 }, // Fucking lesbian
  "лесбуха грёбаная": { s: 5, c: 5 }, // Fucking dyke
  "транс": { s: 5, c: 4 }, // Trans (derogatory usage)
  "трансвестит": { s: 5, c: 4 }, // Transvestite (derogatory)

  // === EXPANSION: More ethnic/racial slurs ===
  "чурбанина ёбаная": { s: 5, c: 5 }, // Fucking block/Central Asian
  "чурка немытая": { s: 5, c: 4 }, // Unwashed churka
  "черномазый": { s: 5, c: 4 }, // Black-faced (racial slur)
  "черномазая": { s: 5, c: 4 }, // Black-faced fem (racial slur)
  "чёрнож*пые": { s: 5, c: 5 }, // Black-assed plural (racial slur)
  "жидяра пархатый": { s: 5, c: 4 }, // Mangy Jew (slur)
  "жидёнок пейсатый": { s: 5, c: 4 }, // Payot-wearing young Jew (slur)
  "жидовская морда": { s: 5, c: 4 }, // Jewish face (slur)
  "пархатый": { s: 5, c: 4 }, // Mangy / antisemitic slur
  "пейсатый": { s: 5, c: 4 }, // Payot-wearing (antisemitic)
  "абрек": { s: 5, c: 4 }, // Caucasian warrior / slur
  "хачик ёбаный": { s: 5, c: 5 }, // Fucking Caucasian (slur)
  "ара": { s: 5, c: 4 }, // Hey (Caucasian, used as slur)
  "даг ёбаный": { s: 5, c: 5 }, // Fucking Dagestani (slur)
  "чечня ёбаная": { s: 5, c: 5 }, // Fucking Chechnya (slur)
  "хохлы ёбаные": { s: 5, c: 5 }, // Fucking Ukrainians (slur)
  "москальская рожа": { s: 5, c: 4 }, // Muscovite mug (slur)
  "кацапня ёбаная": { s: 5, c: 5 }, // Fucking Russians (from Ukrainian)
  "узкоглазая морда": { s: 5, c: 4 }, // Slant-eyed face (slur)
  "чукотка": { s: 5, c: 4 }, // Chukotka (used as insult)
  "чинарик": { s: 5, c: 4 }, // Cigarette butt / Asian slur
  "цыган": { s: 5, c: 4 }, // Gypsy (derogatory)
  "цыганка": { s: 5, c: 4 }, // Gypsy woman (derogatory)
  "цыганьё": { s: 5, c: 4 }, // Gypsies collective (derogatory)
  "цыганва": { s: 5, c: 4 }, // Gypsies collective (vulgar)
  "нехристь": { s: 5, c: 4 }, // Non-Christian / heathen (insult)
  "басурман": { s: 5, c: 4 }, // Infidel (archaic slur)
  "мигрант ёбаный": { s: 5, c: 5 }, // Fucking migrant
  "гастарбайтер": { s: 5, c: 4 }, // Guest worker (derogatory usage)
  "понаехали": { s: 5, c: 4 }, // They've all come here (xenophobic)
  "понаехавший": { s: 5, c: 4 }, // One who came here (xenophobic)

  // === EXPANSION: More sexual terms ===
  "ебать в жопу": { s: 4, c: 5 }, // To fuck in the ass
  "ебать в рот": { s: 4, c: 5 }, // To fuck in the mouth
  "совокупляться": { s: 4, c: 4 }, // To copulate (vulgar context)
  "совокупление": { s: 4, c: 4 }, // Copulation
  "траханье": { s: 4, c: 5 }, // Fucking (noun)
  "сношение": { s: 4, c: 4 }, // Intercourse
  "половой акт": { s: 4, c: 4 }, // Sexual act
  "групповуха": { s: 4, c: 4 }, // Group sex
  "тройничок": { s: 4, c: 4 }, // Threesome (diminutive)
  "свингер": { s: 4, c: 4 }, // Swinger
  "свингерство": { s: 4, c: 4 }, // Swinging
  "секс-рабыня": { s: 4, c: 4 }, // Sex slave
  "секс-раб": { s: 4, c: 4 }, // Sex slave (masc)
  "изнасилование": { s: 5, c: 5 }, // Rape
  "изнасиловать": { s: 5, c: 5 }, // To rape
  "растление": { s: 4, c: 4 }, // Corruption / molestation
  "растлитель": { s: 4, c: 4 }, // Molester
  "совратить": { s: 4, c: 4 }, // To seduce / corrupt
  "совратитель": { s: 4, c: 4 }, // Seducer / corrupter
  "педофилия": { s: 5, c: 5 }, // Pedophilia
  "инцест": { s: 5, c: 5 }, // Incest
  "некрофилия": { s: 4, c: 4 }, // Necrophilia
  "зоофилия": { s: 4, c: 4 }, // Zoophilia
  "скотоложство": { s: 5, c: 5 }, // Bestiality
  "скотоложец": { s: 5, c: 5 }, // Person practicing bestiality

  "проститутка": { s: 5, c: 4 }, // Prostitute
  "проститутка ёбаная": { s: 5, c: 5 }, // Fucking prostitute
  "путана": { s: 5, c: 4 }, // Prostitute (from Italian)
  "блядей ебать": { s: 5, c: 5 }, // To fuck whores
  "ёбарь-террорист": { s: 4, c: 5 }, // Fucker-terrorist (insult)
  "ебарь конченый": { s: 4, c: 5 }, // Finished fucker
  "кончить на лицо": { s: 4, c: 4 }, // To cum on face
  "кончить в рот": { s: 4, c: 4 }, // To cum in mouth
  "сосать хуй": { s: 4, c: 4 }, // To suck dick
  "лизать пизду": { s: 4, c: 4 }, // To lick pussy
  "лизать жопу": { s: 4, c: 4 }, // To lick ass
  "лизоблюд": { s: 4, c: 4 }, // Ass-licker / sycophant
  "анальный секс": { s: 4, c: 4 }, // Anal sex
  "вагинальный секс": { s: 4, c: 4 }, // Vaginal sex
  "оральный секс": { s: 4, c: 5 }, // Oral sex
  "глубокий минет": { s: 4, c: 5 }, // Deep blowjob
  "глотать сперму": { s: 4, c: 4 }, // To swallow cum
  "дрочить хуй": { s: 4, c: 4 }, // To jerk a dick
  "фистинг": { s: 4, c: 4 }, // Fisting
  "золотой дождь": { s: 4, c: 4 }, // Golden shower
  "копрофилия": { s: 4, c: 4 }, // Coprophilia

  // === EXPANSION: More vulgar body parts ===
  "жопище": { s: 4, c: 3 }, // Big ass (augmentative variant)
  "срака": { s: 4, c: 4 }, // Ass (vulgar)
  "сракотанина": { s: 4, c: 3 }, // Ass-person (augmentative)
  "мудасос": { s: 4, c: 3 }, // Ball-sucker
  "яйцевёрт": { s: 4, c: 3 }, // Ball-turner
  "яйцелом": { s: 4, c: 3 }, // Ball-breaker
  "мохнорылый": { s: 4, c: 3 }, // Hairy-snouted
  "волосатая пизда": { s: 5, c: 5 }, // Hairy cunt
  "дырка": { s: 4, c: 4 }, // Hole (vulgar for vagina/ass)
  "щель": { s: 4, c: 4 }, // Slit (vulgar)
  "щёлка": { s: 4, c: 4 }, // Little slit (vulgar)
  "пилотка": { s: 4, c: 4 }, // Garrison cap / vulgar for vagina
  "манда рваная": { s: 5, c: 5 }, // Torn cunt
  "пизда драная": { s: 5, c: 5 }, // Torn cunt (variant)
  "жопа волосатая": { s: 4, c: 3 }, // Hairy ass
  "пиздищe": { s: 5, c: 5 }, // Big cunt (augmentative)
  "хуйчик": { s: 4, c: 3 }, // Little dick (diminutive)
  "хуишко": { s: 4, c: 3 }, // Pathetic dick
  "членище": { s: 4, c: 3 }, // Big dick (augmentative)
  "членистоногий": { s: 4, c: 3 }, // Arthropod / dick-legged (pun insult)
  "клиторишко": { s: 4, c: 3 }, // Pathetic clitoris

  // === EXPANSION: Regional Ukrainian-Russian crossover ===
  "сука бляд": { s: 5, c: 4 }, // Bitch whore (crossover)
  "йобаний": { s: 3, c: 5 }, // Fucking (Ukrainian spelling in Russian)
  "йобана мати": { s: 3, c: 5 }, // Fucking mother (Ukrainian crossover)
  "курва ёбаная": { s: 5, c: 5 }, // Fucking whore (Polish/Ukrainian crossover)
  "курвяще": { s: 3, c: 4 }, // Whoring (Ukrainian crossover)
  "пішов нахуй": { s: 3, c: 5 }, // Go fuck yourself (Ukrainian)
  "гандон штопаный": { s: 3, c: 4 }, // Darned condom
  "гондон рваный": { s: 3, c: 4 }, // Torn condom
  "сучья потроха": { s: 3, c: 4 }, // Bitch's innards
  "ёб твою суку мать": { s: 3, c: 5 }, // Fuck your bitch mother
  "пиздюк малолетний": { s: 3, c: 5 }, // Underage little shit
  "пиздюшка мелкая": { s: 5, c: 5 }, // Tiny little cunt
  "ёбаный пидор": { s: 3, c: 5 }, // Fucking faggot
  "мудак конченый": { s: 3, c: 4 }, // Finished asshole
  "мудак штопаный": { s: 3, c: 4 }, // Darned asshole
  "ёбаный мудила": { s: 1, c: 4 }, // Fucking dumbass
  "хуй собачий": { s: 4, c: 4 }, // Dog's dick
  "хуй лошадиный": { s: 4, c: 4 }, // Horse's dick
  "ебанарот ёбаный": { s: 3, c: 5 }, // Fucking fucked-in-mouth
  "пиздабол хренов": { s: 3, c: 4 }, // Crappy liar

  // === EXPANSION: Internet meme-based profanity ===
  "сасай": { s: 2, c: 3 }, // Suck (internet distortion)
  "сасай нижний": { s: 2, c: 3 }, // Suck from below (internet meme)
  "рот ебал": { s: 3, c: 5 }, // Mouth fucked (internet)
  "иди лесом": { s: 2, c: 3 }, // Go through the forest (go away)
  "пнх": { s: 3, c: 5 }, // Go fuck yourself (abbreviation)
  "нах": { s: 3, c: 5 }, // Fuck (abbreviation)
  "бля буду": { s: 2, c: 3 }, // I swear (vulgar)
  "ёбанаврот": { s: 3, c: 5 }, // Fucked in mouth (one word internet)
  "хуяссе": { s: 3, c: 5 }, // Holy fuck (internet spelling)
  "нихуясебе": { s: 3, c: 5 }, // Holy fuck (one word)
  "ёпт блять": { s: 3, c: 5 }, // Fuck damn (combined)
  "ёпта мать": { s: 3, c: 5 }, // Fuck mother (internet)
  "хуита": { s: 3, c: 5 }, // Bullshit (internet slang)
  "хуитка": { s: 3, c: 5 }, // Little bullshit (internet)
  "залупаться на ровном месте": { s: 4, c: 3 }, // To be a dick for no reason
  "ебанутая хуйня": { s: 3, c: 5 }, // Crazy bullshit
  "пиздёшь как дышишь": { s: 2, c: 3 }, // You lie like you breathe
  "ты чё ебанутый": { s: 3, c: 5 }, // Are you fucking crazy
  "совсем ёбнулся": { s: 2, c: 3 }, // Completely lost it
  "охуел в край": { s: 2, c: 3 }, // Gone completely insane
  "ахуеть дайте два": { s: 3, c: 5 }, // Holy fuck give me two (meme)
  "пиздец котёнку": { s: 2, c: 3 }, // Disaster for the kitten (meme)
  "жопа мира": { s: 3, c: 3 }, // Ass of the world (middle of nowhere)
  "ёбаный стыд блять": { s: 3, c: 5 }, // Fucking shame damn
  "дно ёбаное": { s: 3, c: 5 }, // Fucking bottom (worst of worst)
  "хуйня на постном масле": { s: 3, c: 5 }, // Bullshit on lean oil (nonsense)
  "жизнь-боль": { s: 2, c: 3 }, // Life is pain
  "шлюха подзаборная ёбаная": { s: 5, c: 5 }, // Fucking under-the-fence whore
  "кусок говна": { s: 3, c: 5 }, // Piece of shit
  "мешок с говном": { s: 3, c: 5 }, // Bag of shit
  "бочка с говном": { s: 3, c: 5 }, // Barrel of shit
  "выблядок ёбаный": { s: 3, c: 4 }, // Fucking bastard child
  "ебанашка конченая": { s: 2, c: 3 }, // Finished crazy person
  "дебил ёбаный": { s: 3, c: 5 }, // Fucking imbecile
  "дебилоид": { s: 2, c: 3 }, // Debiloid (internet insult)
  "имбецилоид": { s: 2, c: 3 }, // Imbeciloid (internet insult)
  "даунито": { s: 2, c: 3 }, // Down-person (internet insult)
  "аутист": { s: 2, c: 3 }, // Autist (internet insult)
  "шизоид": { s: 2, c: 3 }, // Schizoid (internet insult)
  "кукухой поехал": { s: 2, c: 3 }, // Lost the cuckoo (went crazy)
  "крышей поехал": { s: 2, c: 3 }, // Lost the roof (went crazy)
  "крыша поехала": { s: 2, c: 3 }, // The roof went (went crazy)

  // === EXPANSION: More vulgar expressions ===
  "ёбаный насрать": { s: 3, c: 5 }, // Fucking shit
  "насрать": { s: 3, c: 5 }, // To shit / don't care
  "насрал": { s: 3, c: 4 }, // Shat (past tense)
  "обоссать": { s: 3, c: 4 }, // To piss on
  "обоссанный": { s: 3, c: 4 }, // Pissed on
  "обосрать": { s: 3, c: 5 }, // To shit on (someone)
  "обосранный": { s: 3, c: 4 }, // Shat on
  "зассать": { s: 3, c: 4 }, // To piss / be scared
  "зассанец": { s: 1, c: 4 }, // Pissy coward
  "зассанка": { s: 1, c: 4 }, // Pissy coward (fem)
  "нассать": { s: 3, c: 4 }, // To piss (on)
  "вонючий": { s: 3, c: 4 }, // Stinky
  "вонючка": { s: 3, c: 4 }, // Stinky person
  "смердить": { s: 3, c: 4 }, // To reek
  "вонища": { s: 3, c: 4 }, // Big stink
  "блевать": { s: 3, c: 4 }, // To puke
  "блевотина": { s: 3, c: 4 }, // Vomit / disgusting thing
  "тошнотворный": { s: 3, c: 4 }, // Nauseating
  "дристать": { s: 3, c: 4 }, // To have diarrhea
  "дристун": { s: 3, c: 4 }, // Diarrhea-haver
  "понос": { s: 3, c: 4 }, // Diarrhea
  "поносник": { s: 3, c: 4 }, // Diarrhea person
  "рыгать": { s: 3, c: 4 }, // To belch
  "отрыжка": { s: 3, c: 4 }, // Belch / disgusting person
  "ссыкун": { s: 1, c: 4 }, // Pisser / coward
  "ссыкуха": { s: 1, c: 4 }, // Pisser / coward (fem)
  "ссыкло": { s: 1, c: 4 }, // Pisser collective / coward
  "зассыха": { s: 3, c: 4 }, // Scared pisser (fem)
  "обоссышка": { s: 3, c: 4 }, // Piss-pants
  "обоссанка": { s: 3, c: 4 }, // Piss-pants (fem)

  // === EXPANSION: More elaborate insults ===
  "ёбаный ты в рот через жопу": { s: 3, c: 5 }, // Fucked in the mouth through the ass
  "хуй на воротник": { s: 4, c: 4 }, // Dick on the collar
  "пизда на палочке": { s: 5, c: 5 }, // Cunt on a stick
  "блять ебучая": { s: 5, c: 5 }, // Fucking whore
  "мразь подзаборная": { s: 1, c: 4 }, // Under-the-fence scum
  "тварь ёбаная": { s: 3, c: 5 }, // Fucking creature
  "скотина тупая": { s: 1, c: 4 }, // Dumb beast
  "мразота бесконечная": { s: 1, c: 4 }, // Infinite scum
  "гнида ёбаная": { s: 3, c: 5 }, // Fucking nit
  "гнида вшивая": { s: 1, c: 4 }, // Lousy nit
  "падла ёбаная": { s: 3, c: 4 }, // Fucking bastard
  "сука рваная": { s: 1, c: 4 }, // Torn bitch
  "сука драная": { s: 1, c: 4 }, // Ragged bitch
  "сучара ёбаная": { s: 3, c: 5 }, // Fucking big bitch
  "козлина вонючая": { s: 1, c: 4 }, // Stinking goat
  "тупорылая свинья": { s: 1, c: 4 }, // Blunt-snouted pig
  "ебанатик": { s: 1, c: 4 }, // Crazy person (diminutive)
  "ебанат конченый": { s: 3, c: 5 }, // Finished crazy fucker
  "долбоёб конченый": { s: 1, c: 4 }, // Finished dumbfuck
  "долбоёбина": { s: 1, c: 4 }, // Big dumbfuck
  "дурак набитый": { s: 1, c: 4 }, // Stuffed fool
  "дура набитая": { s: 1, c: 4 }, // Stuffed fool (fem)
  "полный пиздец": { s: 1, c: 4 }, // Complete disaster
  "полная жопа": { s: 3, c: 4 }, // Complete ass (in trouble)
  "полный пиздос": { s: 1, c: 4 }, // Complete disaster (variant)
  "попадос": { s: 1, c: 3 }, // Gotcha / in trouble (slang)
  "кирдык": { s: 1, c: 4 }, // The end / kaput
  "звиздец": { s: 2, c: 3 }, // Disaster (euphemistic variant)
  "капец": { s: 2, c: 3 }, // The end (euphemistic)
  "трындец": { s: 2, c: 3 }, // The end (euphemistic)
  "амбец": { s: 2, c: 3 }, // The end (euphemistic)
  "абзац": { s: 2, c: 3 }, // Paragraph / the end (euphemistic)
  "бздеть": { s: 1, c: 4 }, // To fart silently / to be scared
  "набздеть": { s: 3, c: 5 }, // To fart / to talk shit
  "вонь": { s: 1, c: 4 }, // Stench
  "пердёж": { s: 1, c: 4 }, // Farting
  "пердильник": { s: 1, c: 4 }, // Fart-maker
  "пердунья": { s: 1, c: 4 }, // Female farter
  "старый пердун": { s: 1, c: 4 }, // Old fart
  "старая карга": { s: 1, c: 4 }, // Old hag
  "кошёлка": { s: 1, c: 4 }, // Old bag (insult for old woman)
  "каракатица": { s: 1, c: 4 }, // Cuttlefish / ugly old woman
  "жаба": { s: 1, c: 4 }, // Toad / ugly woman
  "крокодил": { s: 1, c: 4 }, // Crocodile / ugly person
  "крокодилица": { s: 1, c: 4 }, // Female crocodile / ugly woman
  "страшилище": { s: 1, c: 4 }, // Fright / very ugly person
  "чмошница": { s: 1, c: 4 }, // Female loser
  "позорище": { s: 3, c: 4 }, // Disgrace / embarrassment
  "позор": { s: 1, c: 4 }, // Shame / disgrace
  "ничтожка": { s: 4, c: 4 }, // Nonentity (fem diminutive)
  "шелупонь": { s: 1, c: 4 }, // Small fry / riff-raff
  "шушера": { s: 1, c: 4 }, // Riff-raff
  "отребье": { s: 1, c: 4 }, // Dregs / scum
  "шайка": { s: 1, c: 4 }, // Gang (derogatory)
  "шарлатан": { s: 1, c: 4 }, // Charlatan
  "проходимец": { s: 1, c: 4 }, // Scoundrel / con artist
  "аферист": { s: 1, c: 4 }, // Swindler
  "мошенник": { s: 1, c: 4 }, // Fraudster
  "жулик": { s: 1, c: 4 }, // Crook
  "жульё": { s: 1, c: 4 }, // Crooks collective
  "ворьё": { s: 1, c: 4 }, // Thieves collective
  "уголовник": { s: 1, c: 4 }, // Criminal
  "уголовщина": { s: 1, c: 4 }, // Criminal activity
  "отморозок ёбаный": { s: 3, c: 5 }, // Fucking thug
  "скользкий тип": { s: 1, c: 4 }, // Slippery type
  "мутный тип": { s: 1, c: 4 }, // Murky type / shady person
  "стрёмный": { s: 1, c: 4 }, // Sketchy / scary
  "стрёмно": { s: 1, c: 4 }, // Sketchy (adverb)
  "стремак": { s: 1, c: 4 }, // Fear / sketchy situation
  "западло": { s: 1, c: 4 }, // Below one's dignity / low blow
  "впадлу": { s: 1, c: 4 }, // Can't be bothered / too low
  "канать": { s: 1, c: 3 }, // To go / act (criminal slang)
  "тусить": { s: 1, c: 3 }, // To hang out (slang)
  "бухать": { s: 1, c: 4 }, // To drink heavily
  "бухло": { s: 1, c: 4 }, // Booze
  "бухой": { s: 1, c: 3 }, // Drunk
  "бухарик": { s: 1, c: 3 }, // Drunkard (slang)
  "нажраться": { s: 1, c: 4 }, // To get wasted
  "нажратый": { s: 1, c: 4 }, // Wasted
  "упитый": { s: 1, c: 3 }, // Dead drunk
  "упиться": { s: 1, c: 4 }, // To drink oneself dead
  "ужратый": { s: 1, c: 4 }, // Totally wasted
  "ужраться": { s: 1, c: 4 }, // To get completely wasted
  "наклюкаться": { s: 1, c: 3 }, // To get tipsy/drunk
  "нализаться": { s: 1, c: 3 }, // To get drunk (lit. lick oneself)
  "гнойный": { s: 1, c: 4 }, // Pus-filled / disgusting
  "гнойник": { s: 1, c: 4 }, // Abscess / disgusting person
  "гнида подколодная": { s: 1, c: 4 }, // Under-the-log nit
  "змея подколодная": { s: 1, c: 4 }, // Under-the-log snake
  "ехидна": { s: 1, c: 4 }, // Echidna / venomous person
  "гадюка": { s: 1, c: 4 }, // Viper / vile woman
  "кобра": { s: 1, c: 4 }, // Cobra / vile woman
  "плесень": { s: 1, c: 4 }, // Mold / pathetic person
  "грибок": { s: 1, c: 4 }, // Fungus / pest
  "вошь": { s: 1, c: 4 }, // Louse
  "клоп": { s: 1, c: 4 }, // Bedbug
  "таракан": { s: 4, c: 4 }, // Cockroach
  "клоп вонючий": { s: 1, c: 4 }, // Stinking bedbug
  "муха навозная": { s: 1, c: 4 }, // Dung fly
  "глист": { s: 1, c: 4 }, // Tapeworm / skinny person
  "амёба": { s: 1, c: 4 }, // Amoeba / spineless person
  "инфузория": { s: 1, c: 4 }, // Infusorian / pathetic creature
  "одноклеточный": { s: 1, c: 4 }, // Single-celled (insult for stupid)
  "питекантроп": { s: 1, c: 4 }, // Pithecanthropus / caveman insult
  "неандерталец": { s: 1, c: 4 }, // Neanderthal (insult)
  "примат": { s: 1, c: 4 }, // Primate (insult)

  // ========================================
  // === EXPANSION: Exhaustive хуй derivatives ===
  // ========================================
  "хуйня полная": { s: 3, c: 4 }, // Complete nonsense
  "хуйнюшка": { s: 3, c: 4 }, // Little nonsense (diminutive)
  "хуёк": { s: 4, c: 4 }, // Little dick (diminutive)
  "хуёчек": { s: 4, c: 4 }, // Tiny dick (double diminutive)
  "хуёвенький": { s: 3, c: 4 }, // Crappy (diminutive adj)
  "хуёвенько": { s: 3, c: 4 }, // Crappily (adverb diminutive)
  "хуевато": { s: 3, c: 4 }, // Somewhat crappily
  "хуесоска": { s: 4, c: 4 }, // Dick sucker (fem)
  "хуемоё": { s: 4, c: 4 }, // Dick mine (exclamation)
  "хуев": { s: 4, c: 4 }, // Dick's (genitive)
  "хуева": { s: 4, c: 4 }, // Dick's (fem genitive)
  "хуевы": { s: 4, c: 4 }, // Dick's (plural genitive)
  "хуевой": { s: 4, c: 4 }, // Dick-like (adjective)
  "хуевая": { s: 4, c: 4 }, // Dick-like (fem adj)
  "хуевое": { s: 4, c: 4 }, // Dick-like (neuter adj)
  "хуевые": { s: 4, c: 4 }, // Dick-like (plural adj)
  "захуяривать": { s: 3, c: 4 }, // To keep doing forcefully (imperfective)
  "захуячил": { s: 3, c: 4 }, // Did forcefully (past masc)
  "захуячила": { s: 3, c: 4 }, // Did forcefully (past fem)
  "захуячили": { s: 3, c: 4 }, // Did forcefully (past plural)
  "отхуячил": { s: 3, c: 4 }, // Beat up (past masc)
  "отхуячила": { s: 3, c: 4 }, // Beat up (past fem)
  "отхуячили": { s: 3, c: 4 }, // Beat up (past plural)
  "прихуячить": { s: 3, c: 4 }, // To attach forcefully
  "прихуячил": { s: 3, c: 4 }, // Attached forcefully (past masc)
  "исхуячить": { s: 3, c: 4 }, // To beat thoroughly
  "исхуярить": { s: 3, c: 4 }, // To beat thoroughly (variant)
  "расхуячил": { s: 3, c: 4 }, // Smashed (past masc)
  "расхуячила": { s: 3, c: 4 }, // Smashed (past fem)
  "перехуячить": { s: 3, c: 4 }, // To redo / to hit across
  "нахуячился": { s: 3, c: 4 }, // Got wasted (past masc)
  "нахуячилась": { s: 3, c: 4 }, // Got wasted (past fem)
  "нахуячились": { s: 3, c: 4 }, // Got wasted (past plural)
  "похуистка": { s: 3, c: 5 }, // Person who doesn't give a fuck (fem)
  "похуисты": { s: 3, c: 5 }, // People who don't give a fuck (plural)
  "похуистический": { s: 3, c: 5 }, // Related to not giving a fuck
  "нихуяшеньки": { s: 3, c: 5 }, // Not a single fucking thing (emphatic)
  "нехуй": { s: 3, c: 4 }, // No need / nothing to
  "нехуёвый": { s: 3, c: 4 }, // Not bad / impressive
  "нехуёво": { s: 3, c: 4 }, // Not badly / impressively
  "охуеваю": { s: 3, c: 4 }, // I'm stunned (1st person)
  "охуеваешь": { s: 3, c: 4 }, // You're stunned (2nd person)
  "охуевает": { s: 3, c: 4 }, // He's stunned (3rd person)
  "охуеваем": { s: 3, c: 4 }, // We're stunned (1st plural)
  "охуеваете": { s: 3, c: 4 }, // You're stunned (2nd plural)
  "охуевают": { s: 3, c: 4 }, // They're stunned (3rd plural)
  "охуевшая": { s: 3, c: 4 }, // Stunned (fem participle)
  "охуевшие": { s: 3, c: 4 }, // Stunned (plural participle)
  "охуевшему": { s: 3, c: 4 }, // To the stunned one (dative)
  "охуенный": { s: 3, c: 5 }, // Fucking awesome
  "охуенная": { s: 3, c: 5 }, // Fucking awesome (fem)
  "охуенное": { s: 3, c: 5 }, // Fucking awesome (neuter)
  "охуенные": { s: 3, c: 5 }, // Fucking awesome (plural)
  "охуительная": { s: 3, c: 5 }, // Fucking amazing (fem)
  "охуительно": { s: 3, c: 5 }, // Fucking amazingly
  "охуел": { s: 3, c: 4 }, // Went crazy / stunned (past masc)
  "охуела": { s: 3, c: 4 }, // Went crazy (past fem)
  "охуели": { s: 3, c: 4 }, // Went crazy (past plural)
  "охуение": { s: 3, c: 4 }, // Stunning / going crazy (noun)
  "выхуячить": { s: 3, c: 4 }, // To throw out forcefully
  "вхуячить": { s: 3, c: 4 }, // To shove in forcefully
  "вхуячил": { s: 3, c: 4 }, // Shoved in (past masc)
  "ухуячить": { s: 3, c: 4 }, // To leave quickly / to hit
  "ухуячил": { s: 3, c: 4 }, // Left quickly / hit (past masc)
  "ухуячила": { s: 3, c: 4 }, // Left quickly (past fem)
  "хуяришь": { s: 3, c: 4 }, // You do intensively (2nd person)
  "хуячишь": { s: 3, c: 4 }, // You do intensively (variant)
  "хуярим": { s: 3, c: 4 }, // We do intensively (1st plural)
  "хуячим": { s: 3, c: 4 }, // We do intensively (variant)
  "хуярят": { s: 3, c: 4 }, // They do intensively (3rd plural)
  "хуячат": { s: 3, c: 4 }, // They do intensively (variant)
  "хуйнул": { s: 3, c: 4 }, // Did suddenly (past masc)
  "хуйнула": { s: 3, c: 4 }, // Did suddenly (past fem)
  "хуйнули": { s: 3, c: 4 }, // Did suddenly (past plural)
  "хуёвость": { s: 3, c: 5 }, // Shittiness (noun)
  "хуйня собачья": { s: 3, c: 5 }, // Canine bullshit

  // ========================================
  // === EXPANSION: Exhaustive пизда derivatives ===
  // ========================================
  "пиздюлька": { s: 5, c: 5 }, // Little cunt thing
  "пиздёночка": { s: 5, c: 5 }, // Tiny cunt (double diminutive)
  "пиздища": { s: 5, c: 5 }, // Huge cunt (augmentative)
  "пиздоглазая": { s: 5, c: 5 }, // Cunt-eyed (fem)
  "пиздоболить": { s: 5, c: 5 }, // To talk cunt / to lie
  "пиздоболка": { s: 5, c: 5 }, // Cunt-talker (fem)
  "пиздолизка": { s: 5, c: 5 }, // Cunt-licker (fem)
  "пиздопромышленник": { s: 5, c: 5 }, // Cunt industrialist (elaborate insult)
  "пиздатенький": { s: 3, c: 4 }, // Kind of awesome (diminutive adj)
  "пиздато": { s: 3, c: 5 }, // Fucking awesome (adverb)
  "пиздецки": { s: 3, c: 4 }, // Disastrously (adverb)
  "пиздецовая": { s: 3, c: 4 }, // Disastrous (fem adj)
  "пиздецовое": { s: 3, c: 4 }, // Disastrous (neuter adj)
  "пиздецовые": { s: 3, c: 4 }, // Disastrous (plural adj)
  "пиздюлей": { s: 3, c: 4 }, // Beatings (genitive plural)
  "пиздюлину": { s: 5, c: 5 }, // A beating / cunt-thing (accusative)
  "пизданутый": { s: 3, c: 4 }, // Crazy / hit (participle)
  "пизданутая": { s: 3, c: 4 }, // Crazy (fem participle)
  "пизданутые": { s: 3, c: 4 }, // Crazy (plural)
  "спиздил": { s: 3, c: 4 }, // Stole / lied (past masc)
  "спиздила": { s: 3, c: 4 }, // Stole / lied (past fem)
  "спиздили": { s: 3, c: 4 }, // Stole / lied (past plural)
  "распиздяйка": { s: 3, c: 4 }, // Slacker (fem)
  "распиздяйство": { s: 3, c: 4 }, // Slacking / carelessness
  "распиздяйски": { s: 3, c: 4 }, // In a slacking manner
  "пропиздел": { s: 3, c: 4 }, // Missed (past masc)
  "пропиздела": { s: 3, c: 4 }, // Missed (past fem)
  "допиздеться": { s: 3, c: 4 }, // To talk oneself into trouble
  "допизделся": { s: 3, c: 4 }, // Talked into trouble (past masc)
  "отпиздил": { s: 3, c: 4 }, // Beat up (past masc)
  "отпиздила": { s: 3, c: 4 }, // Beat up (past fem)
  "отпиздили": { s: 3, c: 4 }, // Beat up (past plural)
  "напиздел": { s: 3, c: 4 }, // Lied a lot (past masc)
  "напиздела": { s: 3, c: 4 }, // Lied a lot (past fem)
  "пиздеть": { s: 3, c: 4 }, // To lie / to talk nonsense
  "пиздишь": { s: 3, c: 4 }, // You're lying (2nd person)
  "пиздит": { s: 3, c: 4 }, // He's lying (3rd person)
  "пиздим": { s: 3, c: 4 }, // We're lying (1st plural)
  "пиздите": { s: 3, c: 4 }, // You're lying (2nd plural)
  "пиздят": { s: 3, c: 4 }, // They're lying (3rd plural)
  "пиздел": { s: 3, c: 4 }, // Was lying (past masc)
  "пиздела": { s: 3, c: 4 }, // Was lying (past fem)
  "пиздели": { s: 3, c: 4 }, // Were lying (past plural)
  "упизднуть": { s: 3, c: 4 }, // To leave quickly
  "упизднул": { s: 3, c: 4 }, // Left quickly (past masc)
  "пиздюлей надавать": { s: 3, c: 4 }, // To give beatings
  "пиздец нахуй блять": { s: 3, c: 5 }, // Disaster to hell fuck (compound)

  // ========================================
  // === EXPANSION: Exhaustive блядь derivatives ===
  // ========================================
  "блядую": { s: 5, c: 4 }, // I whore around (1st person)
  "блядуешь": { s: 5, c: 4 }, // You whore around (2nd person)
  "блядует": { s: 5, c: 4 }, // He/she whores around (3rd person)
  "блядуем": { s: 5, c: 4 }, // We whore around (1st plural)
  "блядуете": { s: 5, c: 4 }, // You whore around (2nd plural)
  "блядуют": { s: 5, c: 4 }, // They whore around (3rd plural)
  "блядовал": { s: 5, c: 4 }, // Whored around (past masc)
  "блядовала": { s: 5, c: 4 }, // Whored around (past fem)
  "блядовали": { s: 5, c: 4 }, // Whored around (past plural)
  "блядская": { s: 3, c: 4 }, // Whorish (adj fem)
  "блядское": { s: 3, c: 4 }, // Whorish (adj neuter)
  "блядские": { s: 3, c: 4 }, // Whorish (adj plural)
  "блядски": { s: 3, c: 4 }, // In a whorish manner (adverb)
  "бляденыш": { s: 5, c: 4 }, // Whore's offspring
  "блядёнок": { s: 5, c: 4 }, // Little whore's child
  "блядуга": { s: 1, c: 4 }, // Big ugly whore (pejorative)
  "блядёха": { s: 5, c: 4 }, // Whore (variant)
  "блядень": { s: 3, c: 4 }, // Whorish person
  "разблядовать": { s: 5, c: 4 }, // To whore out excessively

  // ========================================
  // === EXPANSION: Exhaustive ебать derivatives ===
  // ========================================
  "ебу": { s: 3, c: 5 }, // I fuck (1st person)
  "ебёшь": { s: 3, c: 5 }, // You fuck (2nd person)
  "ебёт": { s: 3, c: 5 }, // He/she fucks (3rd person)
  "ебём": { s: 3, c: 5 }, // We fuck (1st plural)
  "ебёте": { s: 3, c: 5 }, // You fuck (2nd plural)
  "ебут": { s: 3, c: 5 }, // They fuck (3rd plural)
  "ебал": { s: 3, c: 5 }, // Fucked (past masc)
  "ебала": { s: 3, c: 5 }, // Fucked (past fem)
  "ебали": { s: 3, c: 5 }, // Fucked (past plural)
  "ебаться": { s: 3, c: 5 }, // To fuck (reflexive)
  "ебётся": { s: 3, c: 5 }, // He/she fucks (3rd person refl)
  "ебутся": { s: 3, c: 5 }, // They fuck (3rd plural refl)
  "ебался": { s: 3, c: 5 }, // Was fucking (past masc refl)
  "ебалась": { s: 3, c: 5 }, // Was fucking (past fem refl)
  "ебались": { s: 3, c: 5 }, // Were fucking (past plural refl)
  "ёбаная": { s: 3, c: 5 }, // Fucking (fem adj)
  "ёбаное": { s: 3, c: 5 }, // Fucking (neuter adj)
  "ёбаные": { s: 3, c: 5 }, // Fucking (plural adj)
  "ебарь": { s: 3, c: 5 }, // Fucker (variant without ё)
  "ёбаришка": { s: 3, c: 5 }, // Little fucker (diminutive)
  "ебнуть": { s: 3, c: 5 }, // To hit / to fuck suddenly
  "ебнул": { s: 3, c: 5 }, // Hit / fucked suddenly (past masc)
  "ебнула": { s: 3, c: 4 }, // Hit suddenly (past fem)
  "ебнули": { s: 3, c: 4 }, // Hit suddenly (past plural)
  "ебнуться": { s: 3, c: 4 }, // To go crazy / to fall
  "ебнулся": { s: 3, c: 4 }, // Went crazy (past masc)
  "ебнулась": { s: 3, c: 4 }, // Went crazy (past fem)
  "ебнулись": { s: 3, c: 4 }, // Went crazy (past plural)
  "ебашу": { s: 3, c: 4 }, // I'm doing intensively (1st person)
  "ебашишь": { s: 3, c: 4 }, // You're doing intensively (2nd person)
  "ебашит": { s: 3, c: 4 }, // He's doing intensively (3rd person)
  "ебашим": { s: 3, c: 4 }, // We're doing intensively (1st plural)
  "ебашат": { s: 3, c: 4 }, // They're doing intensively (3rd plural)
  "ебашил": { s: 3, c: 4 }, // Was doing intensively (past masc)
  "ебашила": { s: 3, c: 4 }, // Was doing intensively (past fem)
  "ебашили": { s: 3, c: 4 }, // Were doing intensively (past plural)
  "наебал": { s: 3, c: 4 }, // Deceived (past masc)
  "наебала": { s: 3, c: 4 }, // Deceived (past fem)
  "наебали": { s: 3, c: 4 }, // Deceived (past plural)
  "наебаться": { s: 1, c: 3 }, // To get fed up / drunk
  "наебался": { s: 3, c: 4 }, // Got fed up (past masc)
  "наебалась": { s: 3, c: 4 }, // Got fed up (past fem)
  "наебались": { s: 3, c: 4 }, // Got fed up (past plural)
  "наебалово": { s: 3, c: 4 }, // Deception / scam
  "наёбщица": { s: 3, c: 4 }, // Deceiver (fem)
  "заебала": { s: 3, c: 4 }, // Annoyed (past fem)
  "заебали": { s: 3, c: 4 }, // Annoyed (past plural)
  "заебательски": { s: 3, c: 5 }, // Fucking awesomely
  "заебательский": { s: 3, c: 5 }, // Fucking awesome (adj)
  "заёбы": { s: 3, c: 4 }, // Annoyances (plural)
  "отъебись от меня": { s: 3, c: 5 }, // Fuck off from me
  "отъебаться": { s: 3, c: 5 }, // To fuck off (reflexive)
  "отъебался": { s: 3, c: 5 }, // Fucked off (past masc)
  "отъебалась": { s: 3, c: 5 }, // Fucked off (past fem)
  "отъебались": { s: 3, c: 5 }, // Fucked off (past plural)
  "выебал": { s: 3, c: 5 }, // Fucked / showed off (past masc)
  "выебала": { s: 3, c: 5 }, // Fucked (past fem)
  "выебали": { s: 3, c: 5 }, // Fucked (past plural)
  "выёбывается": { s: 3, c: 4 }, // Is showing off (3rd person)
  "выёбываешься": { s: 3, c: 4 }, // You're showing off (2nd person)
  "выёбываются": { s: 3, c: 4 }, // They're showing off (3rd plural)
  "проебал": { s: 3, c: 4 }, // Lost / missed (past masc)
  "проебала": { s: 3, c: 4 }, // Lost (past fem)
  "проебали": { s: 3, c: 4 }, // Lost (past plural)
  "уебал": { s: 3, c: 4 }, // Hit hard (past masc)
  "уебок": { s: 3, c: 4 }, // Fucker / bastard
  "уёбки": { s: 3, c: 5 }, // Fuckers (plural)
  "приебался": { s: 3, c: 4 }, // Pestered (past masc)
  "приебалась": { s: 3, c: 4 }, // Pestered (past fem)
  "доебался": { s: 3, c: 4 }, // Pestered to the end (past masc)
  "съебать": { s: 3, c: 4 }, // To leave quickly
  "съебал": { s: 3, c: 4 }, // Left quickly (past masc)
  "съебала": { s: 3, c: 4 }, // Left quickly (past fem)
  "съебались": { s: 3, c: 4 }, // Left quickly (past plural refl)
  "ебучая": { s: 3, c: 5 }, // Fucking (fem adj)
  "ебучее": { s: 3, c: 5 }, // Fucking (neuter adj)
  "ебучие": { s: 3, c: 5 }, // Fucking (plural adj)
  "ебланка": { s: 1, c: 4 }, // Female idiot
  "ебланище": { s: 1, c: 4 }, // Big idiot
  "ебло": { s: 1, c: 4 }, // Face (vulgar) / ugly mug
  "в ебло": { s: 3, c: 4 }, // In the face (vulgar)
  "по еблу": { s: 3, c: 4 }, // Across the face (vulgar)
  "заткни ебальник": { s: 3, c: 4 }, // Shut your face (vulgar)

  // ========================================
  // === EXPANSION: Exhaustive сука derivatives ===
  // ========================================
  "сучья": { s: 3, c: 4 }, // Bitch-like (adj fem)
  "сучье": { s: 3, c: 4 }, // Bitch-like (adj neuter)
  "сучьи": { s: 3, c: 4 }, // Bitch-like (adj plural)
  "сученыш": { s: 3, c: 4 }, // Bitch's offspring
  "сучий потрох": { s: 3, c: 4 }, // Bitch's innards
  "сучонок": { s: 3, c: 4 }, // Little bitch's child
  "сучище": { s: 3, c: 4 }, // Huge bitch (augmentative)
  "сучня": { s: 3, c: 4 }, // Bitch-dom
  "сукин кот": { s: 3, c: 4 }, // Bitch's cat
  "сукина дочь": { s: 3, c: 4 }, // Bitch's daughter
  "сукины дети": { s: 3, c: 4 }, // Bitch's children

  // ========================================
  // === EXPANSION: Criminal/prison slang (феня) ===
  // ========================================
  "мусора": { s: 3, c: 4 }, // Cops (plural)
  "менты": { s: 3, c: 4 }, // Cops (plural)
  "ментовка": { s: 3, c: 4 }, // Police station
  "легаш": { s: 3, c: 4 }, // Cop (slang variant)
  "фараон": { s: 3, c: 4 }, // Cop (criminal slang)
  "лоха": { s: 3, c: 4 }, // Sucker (fem)
  "лохануться": { s: 3, c: 4 }, // To get suckered
  "лоханулся": { s: 3, c: 4 }, // Got suckered (past masc)
  "лоханулась": { s: 3, c: 4 }, // Got suckered (past fem)
  "кинуть": { s: 3, c: 4 }, // To throw / to scam
  "кинул": { s: 3, c: 4 }, // Scammed (past masc)
  "зона": { s: 3, c: 4 }, // Prison camp / zone
  "зек": { s: 3, c: 4 }, // Prisoner
  "зечка": { s: 3, c: 4 }, // Female prisoner
  "зэк": { s: 3, c: 4 }, // Prisoner (variant)
  "тюряга": { s: 3, c: 4 }, // Prison (slang)
  "кича": { s: 3, c: 4 }, // Prison (slang)
  "малява": { s: 3, c: 4 }, // Secret letter in prison
  "шестерить": { s: 3, c: 4 }, // To be a lackey
  "стукачка": { s: 3, c: 4 }, // Snitch (fem)
  "стукачество": { s: 3, c: 4 }, // Snitching
  "стучать": { s: 3, c: 4 }, // To snitch
  "настучать": { s: 3, c: 4 }, // To snitch (perfective)
  "крысить": { s: 3, c: 4 }, // To steal from own
  "крысятничать": { s: 3, c: 4 }, // To steal from own (imperfective)
  "козлятина": { s: 3, c: 4 }, // Goat meat / scum
  "пахан": { s: 3, c: 4 }, // Boss (criminal)
  "братва": { s: 3, c: 4 }, // Brotherhood / gangsters
  "бычить": { s: 3, c: 4 }, // To act tough / to bully
  "бык": { s: 3, c: 4 }, // Bull / enforcer
  "бычара": { s: 3, c: 4 }, // Big bull / big enforcer
  "замочил": { s: 3, c: 4 }, // Killed (past masc)
  "грохнул": { s: 3, c: 4 }, // Killed (past masc)
  "вальнуть": { s: 3, c: 4 }, // To kill (slang)
  "вальнул": { s: 3, c: 4 }, // Killed (past masc)
  "торчки": { s: 3, c: 4 }, // Drug addicts (plural)
  "торчиха": { s: 3, c: 4 }, // Female drug addict
  "наркоманка": { s: 3, c: 4 }, // Female drug addict
  "наркота": { s: 3, c: 4 }, // Drugs (slang)
  "гоп-стоп": { s: 3, c: 4 }, // Mugging
  "гопница": { s: 3, c: 4 }, // Female gopnik
  "шпанёнок": { s: 3, c: 4 }, // Little hoodlum
  "босяк": { s: 3, c: 4 }, // Tramp / lowlife
  "босячка": { s: 3, c: 4 }, // Female tramp

  // ========================================
  // === EXPANSION: Ethnic slurs used in Russian ===
  // ========================================
  "хачи": { s: 5, c: 4 }, // Caucasians (slur plural)
  "чучмек": { s: 5, c: 4 }, // Asian person (slur)
  "чурки": { s: 5, c: 4 }, // Central Asians (slur plural)
  "узкоглазая": { s: 5, c: 4 }, // Narrow-eyed (fem racist slur)
  "косоглазая": { s: 5, c: 4 }, // Slant-eyed (fem racist slur)
  "жидёнок": { s: 5, c: 4 }, // Little kike (antisemitic)
  "жиды": { s: 5, c: 4 }, // Kikes (plural antisemitic)
  "жидовская": { s: 5, c: 4 }, // Kike-like (fem adj)
  "жидовщина": { s: 5, c: 4 }, // Kike-ness (antisemitic)
  "хохлы": { s: 5, c: 4 }, // Ukrainians (slur plural)
  "хохляцкий": { s: 5, c: 4 }, // Ukrainian (adj slur)
  "москали": { s: 5, c: 4 }, // Muscovites (slur plural)
  "пшек": { s: 5, c: 4 }, // Pole (slur)
  "пшеки": { s: 5, c: 4 }, // Poles (slur plural)
  "чухонец": { s: 5, c: 4 }, // Finn (slur)
  "чухонка": { s: 5, c: 4 }, // Finn (fem slur)
  "азеры": { s: 5, c: 4 }, // Azerbaijanis (slur plural)

  // ========================================
  // === EXPANSION: Transliterated/Romanized versions ===
  // ========================================
  "blyat'": { s: 3, c: 5 }, // Fuck (romanized variant)
  "blyadstvo": { s: 5, c: 5 }, // Whoredom (romanized)
  "suchara": { s: 3, c: 5 }, // Big bitch (romanized)
  "mudila": { s: 3, c: 5 }, // Asshole (romanized variant)
  "pidar": { s: 3, c: 5 }, // Faggot (romanized)
  "huylo": { s: 4, c: 5 }, // Dickhead (romanized variant)
  "idi nahuy": { s: 3, c: 5 }, // Go fuck yourself (romanized variant)
  "pizdyuk": { s: 3, c: 5 }, // Brat (romanized)
  "pizdato": { s: 3, c: 5 }, // Awesome (romanized)
  "ohuyel": { s: 3, c: 5 }, // Went crazy (romanized)
  "ohuyenno": { s: 3, c: 5 }, // Fucking awesome (romanized)
  "ohuyet": { s: 3, c: 5 }, // Holy fuck (romanized)
  "ebat'": { s: 3, c: 5 }, // To fuck (romanized variant)
  "yebat'": { s: 3, c: 5 }, // To fuck (romanized variant)
  "yob tvoyu mat": { s: 3, c: 5 }, // Fuck your mother (romanized)
  "eb tvoyu mat": { s: 3, c: 5 }, // Fuck your mother (romanized)
  "zaebal": { s: 3, c: 5 }, // Fed up (romanized)
  "zaebali": { s: 3, c: 5 }, // Fed up (romanized plural)
  "vyblyadok": { s: 3, c: 5 }, // Bastard (romanized)
  "zasranets": { s: 3, c: 5 }, // Little shit (romanized)
  "kozel": { s: 3, c: 5 }, // Goat / asshole (romanized)
  "tupoy": { s: 1, c: 5 }, // Stupid (romanized)
  "cyka": { s: 3, c: 4 }, // Bitch (romanized internet spelling)
  "cyka blyat": { s: 3, c: 4 }, // Bitch fuck (romanized, famous gaming phrase)
  "suka blyat": { s: 3, c: 5 }, // Bitch fuck (romanized variant)
  "pizdec nahui blyat": { s: 3, c: 5 }, // Disaster to hell fuck (romanized)
  "sosi hui": { s: 4, c: 5 }, // Suck dick (romanized)
  "sosi huy": { s: 4, c: 5 }, // Suck dick (romanized variant)

  // ========================================
  // === EXPANSION: Internet slang (падонки language / олбанский) ===
  // ========================================
  "аффтар": { s: 2, c: 3 }, // Author (paddonki spelling)
  "аффтар жжот": { s: 2, c: 3 }, // Author burns (paddonki, meaning great content)
  "жжош": { s: 2, c: 3 }, // You burn (paddonki, meaning great)
  "выпей йаду": { s: 2, c: 3 }, // Drink poison (paddonki spelling)
  "убей себя ап стену": { s: 5, c: 5 }, // Kill yourself against the wall (paddonki)
  "фтопку": { s: 2, c: 3 }, // Into the fire / to hell (paddonki)
  "пиздос": { s: 2, c: 3 }, // Disaster (variant of пиздец)
  "жопочка": { s: 3, c: 3 }, // Cute little ass (double diminutive)
  "жопастая": { s: 3, c: 3 }, // Big-assed (fem)
  "жопастый": { s: 3, c: 3 }, // Big-assed (masc)
  "жополизка": { s: 3, c: 3 }, // Ass-licker (fem)
  "жопорез": { s: 3, c: 3 }, // Ass-cutter (insult)
  "в жопу": { s: 3, c: 3 }, // In the ass
  "в жопу пьяный": { s: 1, c: 3 }, // Drunk to the ass / very drunk
  "ржунимагу": { s: 2, c: 3 }, // Rolling on floor laughing (paddonki)
  "пацтолом": { s: 2, c: 3 }, // Under the table laughing (paddonki)
  "зачот": { s: 3, c: 3 }, // Passing grade / excellent (paddonki)
  "незачот": { s: 2, c: 3 }, // Failing grade / terrible (paddonki)
  "кг/ам": { s: 5, c: 5 }, // Kill yourself (abbreviation, paddonki)
  "ниасилил": { s: 2, c: 3 }, // Couldn't handle (paddonki)
  "многа букф": { s: 2, c: 3 }, // Too many letters (paddonki)
  "йа криветко": { s: 2, c: 3 }, // I'm a shrimp (paddonki, meaning shocked)
  "аццкий сотона": { s: 2, c: 3 }, // Hellish Satan (paddonki)
  "жывотное": { s: 2, c: 3 }, // Animal (paddonki spelling)
  "превед": { s: 2, c: 3 }, // Hi (paddonki, from internet meme)
  "медвед": { s: 2, c: 3 }, // Bear (paddonki, from internet meme)
  "быдляк": { s: 2, c: 3 }, // One of the riff-raff
  "быдлячий": { s: 2, c: 3 }, // Cattle-like / riff-raff-like
  "нуб": { s: 2, c: 3 }, // Noob (transliterated)
  "нубас": { s: 2, c: 3 }, // Noob (slang)
  "задрочка": { s: 2, c: 3 }, // Female nerd (derogatory)
  "днарь": { s: 2, c: 3 }, // Bottom feeder / bad player (gaming)
  "дно": { s: 2, c: 3 }, // Bottom / worst (slang)
  "дно общества": { s: 2, c: 3 }, // Bottom of society

  // ========================================
  // === EXPANSION: Euphemistic substitutions ===
  // ========================================
  "блинский": { s: 2, c: 3 }, // Pancake-like (euphemism for блядский)
  "ёлки-палки": { s: 2, c: 3 }, // Fir-sticks (euphemism for ёб)
  "ёлки-моталки": { s: 2, c: 3 }, // Fir-winders (euphemism for ёб)
  "ёшкин крот": { s: 2, c: 3 }, // Yoshkin mole (euphemism for ёб)
  "ёж твою мать": { s: 2, c: 3 }, // Hedgehog your mother (euphemism)
  "ядрёна мать": { s: 2, c: 3 }, // Core mother (euphemism for ёб)
  "ядрён батон": { s: 2, c: 3 }, // Core baton (euphemism)
  "фиг": { s: 2, c: 3 }, // Fig (euphemism for хуй)
  "фигово": { s: 2, c: 3 }, // Figgishly (euphemism for хуёво)
  "фиговый": { s: 2, c: 3 }, // Figgish (euphemism for хуёвый)
  "фигачить": { s: 2, c: 3 }, // To fig-do (euphemism for хуячить)
  "пофиг": { s: 2, c: 3 }, // Don't care (euphemism for похуй)
  "пофигу": { s: 2, c: 3 }, // Don't care (variant euphemism)
  "пофигизм": { s: 2, c: 3 }, // Don't-care-ism (euphemism for похуизм)
  "пофигист": { s: 2, c: 3 }, // Don't-care person (euphemism)
  "пофигистка": { s: 2, c: 3 }, // Don't-care person fem (euphemism)
  "до фига": { s: 2, c: 3 }, // A lot of figs (euphemism for дохуя)
  "офигел": { s: 2, c: 3 }, // Was figged (past, euphemism)
  "офигела": { s: 2, c: 3 }, // Was figged (past fem, euphemism)
  "офигели": { s: 2, c: 3 }, // Were figged (past plural, euphemism)
  "офигенный": { s: 2, c: 3 }, // Fig-amazing (euphemism for охуенный)
  "офигенно": { s: 2, c: 3 }, // Fig-amazingly (euphemism)
  "офигительный": { s: 2, c: 3 }, // Fig-incredible (euphemism)
  "офигительно": { s: 2, c: 3 }, // Fig-incredibly (euphemism)
  "хренотень": { s: 2, c: 3 }, // Horseradish nonsense (euphemism)
  "хрень": { s: 2, c: 3 }, // Horseradish thing (euphemism for хуйня)
  "до хрена": { s: 2, c: 3 }, // A lot of horseradish (euphemism)
  "охренеть": { s: 2, c: 3 }, // To horseradish (euphemism for охуеть)
  "охренел": { s: 2, c: 3 }, // Was horseradished (past, euphemism)
  "охренела": { s: 3, c: 4 }, // Was horseradished (past fem)
  "охренели": { s: 3, c: 4 }, // Were horseradished (past plural)
  "звездец": { s: 2, c: 3 }, // Stardec (euphemism for пиздец)
  "жесть": { s: 2, c: 3 }, // Tin / harsh (euphemism for пиздец)
  "жестко": { s: 2, c: 3 }, // Harshly (euphemism variant)
  "ё-моё": { s: 2, c: 3 }, // Oh-mine (euphemism exclamation)
  "мля": { s: 2, c: 3 }, // Mlya (euphemism for блять)
  "млять": { s: 2, c: 3 }, // Mlyat' (euphemism for блять)
  "бляха-муха": { s: 2, c: 3 }, // Buckle-fly (euphemism for блядь)
  "бляха": { s: 2, c: 3 }, // Buckle (euphemism for блядь)

  // ========================================
  // === EXPANSION: Compound insult phrases ===
  // ========================================
  "пошла нахуй": { s: 3, c: 5 }, // Go fuck yourself (fem)
  "пошли нахуй": { s: 3, c: 5 }, // Go fuck yourselves (plural)
  "пошли все нахуй": { s: 3, c: 5 }, // Everyone go fuck yourselves
  "да пошли вы": { s: 3, c: 5 }, // Go fuck yourselves
  "соси хуй": { s: 4, c: 4 }, // Suck dick
  "лижи жопу": { s: 3, c: 4 }, // Lick ass
  "лижи мне жопу": { s: 3, c: 4 }, // Lick my ass
  "я ебал": { s: 3, c: 5 }, // I fucked / I don't care
  "я ебал тебя": { s: 3, c: 5 }, // I fucked you
  "я ебал твою мать": { s: 3, c: 5 }, // I fucked your mother
  "ебать тебя в рот": { s: 3, c: 5 }, // Fuck you in the mouth
  "ебать тебя в жопу": { s: 3, c: 5 }, // Fuck you in the ass
  "ебать колотить": { s: 3, c: 5 }, // Fuck-knock (exclamation)
  "ебёна мать": { s: 3, c: 5 }, // Fucked mother (exclamation)
  "мать вашу": { s: 1, c: 4 }, // Your mother (plural)
  "убью нахуй": { s: 3, c: 5 }, // I'll kill, fuck
  "убью сука": { s: 1, c: 4 }, // I'll kill you, bitch
  "сдохни": { s: 5, c: 5 }, // Die / croak
  "сдохни тварь": { s: 5, c: 5 }, // Die, creature
  "сдохни мразь": { s: 5, c: 5 }, // Die, scum
  "сдохни сука": { s: 5, c: 5 }, // Die, bitch
  "чтоб ты сдох": { s: 1, c: 4 }, // May you croak
  "чтоб ты сдохла": { s: 1, c: 4 }, // May you croak (fem)
  "чтоб тебе пусто было": { s: 1, c: 4 }, // May emptiness be upon you
  "горите в аду": { s: 1, c: 4 }, // Burn in hell
  "гори в аду": { s: 1, c: 4 }, // Burn in hell (singular)
  "отвали": { s: 1, c: 4 }, // Bug off
  "отвали от меня": { s: 1, c: 4 }, // Bug off from me
  "отвяжись": { s: 1, c: 4 }, // Detach yourself / leave me alone
  "отсоси у тракториста": { s: 1, c: 4 }, // Suck a tractor driver's (famous expression)
  "закрой пасть": { s: 1, c: 4 }, // Shut your maw
  "заткнись": { s: 1, c: 4 }, // Shut up
  "заткнись нахуй": { s: 3, c: 5 }, // Shut the fuck up
  "заткни пасть": { s: 1, c: 4 }, // Shut your maw
  "заткни хлебало": { s: 1, c: 4 }, // Shut your food hole
  "заткни хавало": { s: 1, c: 4 }, // Shut your food hole (variant)
  "в ахуе": { s: 1, c: 4 }, // In a state of shock (vulgar)
  "ахуеть": { s: 1, c: 4 }, // To be shocked (variant of охуеть)
  "ахуенно": { s: 3, c: 5 }, // Fucking awesome (variant)
  "ахуенный": { s: 3, c: 5 }, // Fucking awesome (adj variant)
  "хуйню несёшь": { s: 3, c: 5 }, // You're spouting bullshit
  "хуйню городишь": { s: 3, c: 5 }, // You're building bullshit
  "не пизди": { s: 1, c: 4 }, // Don't lie
  "не ебёт": { s: 3, c: 5 }, // Doesn't matter / doesn't fuck
  "меня не ебёт": { s: 3, c: 5 }, // I don't give a fuck
  "ебись оно всё конём": { s: 3, c: 5 }, // Let it all fuck itself with a horse
  "ни хуя": { s: 3, c: 5 }, // Nothing / not a fucking thing
  "ни хера": { s: 2, c: 3 }, // Nothing (euphemism for ни хуя)
  "ни хрена": { s: 2, c: 3 }, // Nothing (lighter euphemism)
  "до хуя": { s: 3, c: 5 }, // A lot / a fuck-ton
  "дохуя": { s: 1, c: 4 }, // A lot (one word)
  "дохуя и больше": { s: 1, c: 4 }, // A lot and more
  "дохуища": { s: 1, c: 4 }, // A huge lot (augmentative)
  "хуй его знает": { s: 4, c: 4 }, // Dick knows him / who the hell knows
  "хуй с ним": { s: 4, c: 4 }, // Dick with him / forget about it
  "с какого хуя": { s: 4, c: 5 }, // From what dick / why the fuck
  "нахуя": { s: 3, c: 5 }, // Why the fuck
  "на кой хуй": { s: 4, c: 5 }, // For what dick / why the fuck
  "хуёвый день": { s: 3, c: 5 }, // Shitty day
  "хуёвое настроение": { s: 3, c: 5 }, // Shitty mood
  "хуёвая погода": { s: 3, c: 5 }, // Shitty weather
  "хуёвая жизнь": { s: 3, c: 5 }, // Shitty life
  "ебать ты дурак": { s: 1, c: 4 }, // Fuck you're a fool
  "ебать ты тупой": { s: 1, c: 4 }, // Fuck you're stupid

  // ========================================
  // === EXPANSION: More general insults and vulgarisms ===
  // ========================================
  "рожа кирпича просит": { s: 1, c: 4 }, // Face begs for a brick
  "рыло": { s: 1, c: 4 }, // Snout / ugly face
  "мурло": { s: 1, c: 4 }, // Mug / ugly face
  "ёбаная рожа": { s: 3, c: 5 }, // Fucking mug
  "тупорылая": { s: 1, c: 4 }, // Blunt-snouted (fem)
  "тупоголовая": { s: 1, c: 4 }, // Dull-headed (fem)
  "тупая скотина": { s: 1, c: 4 }, // Dumb beast
  "дубина стоеросовая": { s: 1, c: 4 }, // Oak-growth club (elaborate insult)
  "пень": { s: 1, c: 4 }, // Stump / blockhead
  "пень с глазами": { s: 1, c: 4 }, // Stump with eyes
  "бревно": { s: 1, c: 4 }, // Log / blockhead
  "чурбан неотёсанный": { s: 1, c: 4 }, // Uncut block
  "балбес": { s: 1, c: 4 }, // Idiot
  "балбесина": { s: 1, c: 4 }, // Big idiot
  "осёл": { s: 1, c: 4 }, // Donkey
  "ослица": { s: 1, c: 4 }, // Female donkey
  "овца": { s: 1, c: 4 }, // Sheep / female idiot
  "свинья свиньёй": { s: 1, c: 4 }, // Pig being a pig
  "грязнуля": { s: 1, c: 3 }, // Dirty person (informal)
  "неряха": { s: 1, c: 4 }, // Slob
  "чморить": { s: 1, c: 4 }, // To humiliate (variant)
  "замухрышка": { s: 1, c: 4 }, // Ugly unkempt person
  "пугало": { s: 1, c: 4 }, // Scarecrow / ugly person
  "пугало огородное": { s: 1, c: 4 }, // Garden scarecrow
  "уродище": { s: 1, c: 4 }, // Very ugly person (augmentative)
  "уродский": { s: 1, c: 4 }, // Ugly / freakish (adj)
  "жирный": { s: 1, c: 4 }, // Fat (masc)
  "жирная": { s: 1, c: 4 }, // Fat (fem)
  "жирдяйка": { s: 1, c: 4 }, // Fatty (fem)
  "жирюга": { s: 1, c: 4 }, // Big fatty
  "сало ходячее": { s: 1, c: 4 }, // Walking lard
  "бочка": { s: 1, c: 4 }, // Barrel / very fat person
  "корова": { s: 1, c: 4 }, // Cow / fat woman
  "бегемот": { s: 1, c: 4 }, // Hippo / fat person
  "скелет": { s: 1, c: 4 }, // Skeleton / very thin person
  "дрищ": { s: 1, c: 4 }, // Skinny runt
  "дрищавый": { s: 1, c: 4 }, // Skinny-runt-like
  "ничтожный": { s: 1, c: 4 }, // Worthless (adj)
  "бесполезный": { s: 1, c: 4 }, // Useless (masc)
  "бесполезная": { s: 1, c: 4 }, // Useless (fem)
  "никчёмный": { s: 1, c: 4 }, // Worthless (masc)
  "никчёмная": { s: 1, c: 4 }, // Worthless (fem)
  "недоносок": { s: 1, c: 4 }, // Premature baby (used as insult)
  "выродки": { s: 1, c: 4 }, // Degenerates (plural)
  "отбросы": { s: 1, c: 4 }, // Rejects / dregs
  "конченый": { s: 1, c: 4 }, // Finished / hopeless
  "конченая": { s: 1, c: 4 }, // Finished (fem)
  "конченый человек": { s: 1, c: 4 }, // Finished person
  "конченая тварь": { s: 1, c: 4 }, // Finished creature
  "падлюка": { s: 3, c: 4 }, // Bastard (variant)
  "стервоза": { s: 1, c: 4 }, // Bitchy
  "стервозная": { s: 1, c: 4 }, // Bitchy (adj fem)
  "шлюхища": { s: 1, c: 4 }, // Huge slut (augmentative)
  "профурсетка": { s: 1, c: 4 }, // Slutty woman
  "залупа конская": { s: 4, c: 4 }, // Horse dickhead
  "мудачьё": { s: 3, c: 4 }, // Assholes (collective)
  "мудачина": { s: 3, c: 4 }, // Big asshole
  "мудацкий": { s: 3, c: 4 }, // Asshole-like (adj)
  "мудацкая": { s: 3, c: 4 }, // Asshole-like (fem adj)
  "минетчица": { s: 4, c: 5 }, // Woman who gives blowjobs
  "минетчик": { s: 4, c: 5 }, // Man who gives blowjobs
  "ёбаная жизнь": { s: 3, c: 5 }, // Fucking life
  "ёбаная работа": { s: 3, c: 5 }, // Fucking job
  "блядь сука": { s: 5, c: 4 }, // Whore bitch (compound)
  "сука блядь": { s: 5, c: 4 }, // Bitch whore (compound)
  "пиздец блядь": { s: 5, c: 4 }, // Disaster whore (compound)

  // ========================================
  // === EXPANSION: More homophobic slurs ===
  // ========================================
  "пидрило": { s: 5, c: 4 }, // Faggot (variant)
  "пидорасина": { s: 5, c: 4 }, // Big faggot (augmentative)
  "пидорасище": { s: 5, c: 4 }, // Huge faggot (augmentative)
  "пидорский": { s: 5, c: 4 }, // Faggot-like (adj)
  "пидорасня": { s: 5, c: 4 }, // Faggot collective
  "педерасня": { s: 5, c: 4 }, // Pederasty collective
  "педрило": { s: 5, c: 4 }, // Faggot (variant of пидрило)
  "гомосеки": { s: 5, c: 4 }, // Homosexuals (derogatory plural)
  "голубая": { s: 2, c: 3 }, // Blue / lesbian (euphemistic slur fem)
  "голубые": { s: 2, c: 3 }, // Blues / gays (euphemistic slur plural)
  "лесба": { s: 5, c: 4 }, // Lesbo (derogatory)
  "лесбуха": { s: 5, c: 4 }, // Lesbian (derogatory)

  // ========================================
  // === EXPANSION: Scatological vocabulary ===
  // ========================================
  "говнецо": { s: 3, c: 5 }, // Little shit (diminutive)
  "говнюха": { s: 3, c: 5 }, // Shithead (fem)
  "говнолиз": { s: 3, c: 5 }, // Shit-licker
  "говняная": { s: 3, c: 5 }, // Shitty (fem adj)
  "засрать": { s: 3, c: 5 }, // To shit up / to ruin
  "засрал": { s: 3, c: 4 }, // Shat up (past masc)
  "засрала": { s: 3, c: 4 }, // Shat up (past fem)
  "засранный": { s: 3, c: 5 }, // Shitted upon (adj)
  "обосрал": { s: 3, c: 4 }, // Shat on (past masc)
  "обосрался": { s: 3, c: 4 }, // Shat oneself (past masc)
  "обосралась": { s: 3, c: 4 }, // Shat oneself (past fem)
  "насрать на тебя": { s: 3, c: 5 }, // Shit on you / don't care about you
  "мне насрать": { s: 3, c: 5 }, // I don't give a shit
  "сру": { s: 3, c: 5 }, // I'm shitting (1st person)
  "высрать": { s: 3, c: 5 }, // To shit out
  "просрать": { s: 3, c: 5 }, // To shit away / to waste
  "просрал": { s: 3, c: 4 }, // Shat away (past masc)
  "просрали": { s: 3, c: 4 }, // Shat away (past plural)
  "зассал": { s: 3, c: 4 }, // Was piss-scared (past masc)
  "пернуть": { s: 3, c: 4 }, // To fart (perfective)
  "пукать": { s: 3, c: 4 }, // To fart (lighter)
  "пукнуть": { s: 3, c: 4 }, // To fart (perfective lighter)

  // ========================================
  // === EXPANSION: More degrading comparisons and curses ===
  // ========================================
  "шакал": { s: 3, c: 4 }, // Jackal / opportunist
  "гиена": { s: 3, c: 4 }, // Hyena / nasty person
  "крыса канализационная": { s: 3, c: 4 }, // Sewer rat
  "вонючая": { s: 3, c: 4 }, // Stinky (fem)
  "гнилой": { s: 3, c: 4 }, // Rotten / corrupt
  "гнилая": { s: 3, c: 4 }, // Rotten (fem)
  "гнильё": { s: 3, c: 4 }, // Rot / rotten things collective
  "чёрт": { s: 3, c: 4 }, // Devil
  "чёрт возьми": { s: 3, c: 4 }, // Devil take it / damn
  "чёрт побери": { s: 3, c: 4 }, // Devil take it / damn
  "чёрт тебя дери": { s: 3, c: 4 }, // Devil tear you
  "чёрт бы тебя побрал": { s: 3, c: 4 }, // Devil take you
  "какого чёрта": { s: 3, c: 4 }, // What the devil / what the hell
  "к чертям": { s: 3, c: 4 }, // To the devils / to hell
  "к чертям собачьим": { s: 3, c: 4 }, // To the dog devils
  "к чёртовой матери": { s: 3, c: 4 }, // To the devil's mother
  "к чёртовой бабушке": { s: 3, c: 4 }, // To the devil's grandmother
  "к ёбаной матери": { s: 3, c: 5 }, // To the fucking mother
  "к хуям": { s: 4, c: 4 }, // To the dicks / to hell
  "к хуям собачьим": { s: 4, c: 4 }, // To the dog dicks
  "дьявол": { s: 3, c: 4 }, // Devil
  "нечисть": { s: 3, c: 4 }, // Evil spirits / scum
  "адское отродье": { s: 3, c: 4 }, // Hellish spawn
  "отродье": { s: 3, c: 4 }, // Spawn / offspring (derogatory)
  "исчадие ада": { s: 3, c: 4 }, // Hellspawn

  // ========================================
  // === EXPANSION: Additional compound phrases ===
  // ========================================
  "ёбаный ты сукин сын": { s: 3, c: 5 }, // Fucking son of a bitch
  "ёбаная ты сука": { s: 3, c: 5 }, // Fucking bitch you are
  "хуярь отсюда": { s: 4, c: 5 }, // Dick away from here
  "валите все нахуй": { s: 3, c: 5 }, // Everyone get the fuck out
  "вали отсюда": { s: 3, c: 5 }, // Get out of here
  "вали нахуй": { s: 3, c: 5 }, // Get the fuck out
  "проваливай": { s: 3, c: 5 }, // Get lost
  "проваливайте": { s: 3, c: 5 }, // Get lost (plural)
  "катись": { s: 3, c: 5 }, // Roll away
  "катись к чёрту": { s: 3, c: 5 }, // Roll to the devil
  "пиздой накрыться": { s: 5, c: 5 }, // To be covered by a cunt / to fail
  "пиздой накрылось": { s: 5, c: 5 }, // Was covered by a cunt / failed
  "хуй тебе а не": { s: 4, c: 5 }, // Dick to you and not (denial)
  "на хуй мне это надо": { s: 3, c: 5 }, // Why the fuck do I need this
  "какого хера": { s: 4, c: 3 }, // What the dick (euphemism variant)
  "какого хрена": { s: 2, c: 3 }, // What the horseradish (euphemism)
  "какого фига": { s: 2, c: 3 }, // What the fig (lighter euphemism)
  "куда нахуй": { s: 3, c: 5 }, // Where the fuck
  "откуда нахуй": { s: 3, c: 5 }, // From where the fuck
  "когда нахуй": { s: 3, c: 5 }, // When the fuck
  "зачем нахуй": { s: 3, c: 5 }, // Why the fuck
  "ёбаный рот этого казино": { s: 3, c: 5 }, // Fucking mouth of this casino (famous phrase)
  "ёбаный стыд и позор": { s: 3, c: 5 }, // Fucking shame and disgrace
  "сраная": { s: 3, c: 5 }, // Shitty (adj fem)
  "сраное": { s: 3, c: 5 }, // Shitty (adj neuter)
  "сраные": { s: 3, c: 5 }, // Shitty (adj plural)
  "сранина": { s: 3, c: 5 }, // Shitty thing
  "сраньё": { s: 3, c: 5 }, // Shitty stuff (collective)
  "гондон штопаный": { s: 3, c: 5 }, // Darned condom
  "гондоны": { s: 3, c: 5 }, // Condoms / scumbags (plural)
  "презерватив": { s: 3, c: 5 }, // Condom (used as insult)
  "презик": { s: 3, c: 5 }, // Condom (slang, used as insult)
  "пузырь": { s: 1, c: 4 }, // Bubble / fat person / balloon
  "чучело гороховое": { s: 3, c: 5 }, // Pea scarecrow
  "пустое место": { s: 3, c: 5 }, // Empty space / nobody
  "ноль без палочки": { s: 4, c: 5 }, // Zero without a stick / nonentity
  "никто и звать никак": { s: 3, c: 5 }, // Nobody named nobody
  "мелочь пузатая": { s: 3, c: 5 }, // Pot-bellied small fry
  "соплячка": { s: 3, c: 5 }, // Snot-nose (fem)
  "щенок": { s: 3, c: 5 }, // Puppy / young punk
  "сосунок": { s: 3, c: 5 }, // Suckling / young punk
  "салага": { s: 3, c: 5 }, // Greenhorn (military slang)
  "салажонок": { s: 3, c: 5 }, // Little greenhorn
  "головёнка": { s: 3, c: 5 }, // Little head / insignificant person
  "кобыла": { s: 3, c: 5 }, // Mare / big clumsy woman
  "кобылица": { s: 3, c: 5 }, // Mare (literary)
  "кляча": { s: 1, c: 4 }, // Nag / old horse / ugly old woman
  "лядь": { s: 3, c: 5 }, // Adulteress (archaic, root of блядь)
  "шкурка": { s: 3, c: 5 }, // Little hide / loose woman (diminutive)
  "шкуродёр": { s: 3, c: 5 }, // Hide-tearer / exploiter
  "крыса тыловая": { s: 3, c: 5 }, // Rear rat / shirker
  "прошмандовка": { s: 3, c: 5 }, // Loose woman (slang)
  "хабалка": { s: 3, c: 5 }, // Loud vulgar woman
  "хамьё": { s: 3, c: 5 }, // Rude people (collective)
  "наглая рожа": { s: 3, c: 5 }, // Impudent face
  "бесстыдник": { s: 3, c: 5 }, // Shameless person
  "бесстыдница": { s: 3, c: 5 }, // Shameless person (fem)
  "бесстыжий": { s: 3, c: 5 }, // Shameless (adj)
  "бесстыжая": { s: 3, c: 5 }, // Shameless (fem adj)
  "срамота": { s: 3, c: 5 }, // Shameful thing
  "срамотища": { s: 3, c: 5 }, // Very shameful thing
  "разъебайка": { s: 3, c: 5 }, // Slacker (fem)
  "расп*здяй": { s: 3, c: 5 }, // Slacker (partial censoring)
  "мудозвонство": { s: 3, c: 5 }, // Ball-ringing / bullshitting
  "пиздоболие": { s: 5, c: 5 }, // Cunt-talking / lying
  "пиздобратия": { s: 5, c: 5 }, // Cunt-brotherhood / useless group
  "срань господня": { s: 3, c: 5 }, // Lord's shit
  "срань": { s: 3, c: 5 }, // Shit / crap
  "ссанина": { s: 3, c: 5 }, // Piss
  "ссака": { s: 3, c: 5 }, // Piss / pisser
  "мочить в сортире": { s: 3, c: 5 }, // To kill in the toilet (Putin's phrase)
  "мордой в дерьмо": { s: 3, c: 5 }, // Face in the shit
  "мордой об стол": { s: 3, c: 5 }, // Face against the table
  "ёбаный в рот через жопу": { s: 3, c: 5 }, // Fucked in the mouth through the ass (already listed variant)
  "пиздатая жизнь": { s: 3, c: 5 }, // Awesome life (vulgar ironic)
  "заебись жизнь": { s: 3, c: 5 }, // Great fucking life (vulgar ironic)
  // ========================================
  // === Extended Russian Words ===
  // ========================================
  "bychara": { s: 2, c: 3 }, // Bully / thug
  "byk": { s: 2, c: 3 }, // Bull (aggressive person)
  "chernozhopyi": { s: 5, c: 5 }, // Racial slur (Black person)
  "dolboy'eb": { s: 3, c: 4 }, // Idiot / fuckwit
  "ebalom sch'elkat": { s: 3, c: 4 }, // Stand there gaping (vulgar)
  "gol": { s: 1, c: 2 }, // Naked / bare
  "mudack": { s: 3, c: 4 }, // Asshole / idiot
  "opizdenet": { s: 3, c: 4 }, // To go crazy (vulgar)
  "osto'eblo": { s: 3, c: 4 }, // Fed up (vulgar)
  "ostokhuitel'no": { s: 3, c: 4 }, // Incredibly (vulgar)
  "ot'ebis": { s: 3, c: 4 }, // Fuck off
  "otmudohat": { s: 3, c: 4 }, // To beat up (vulgar)
  "otpizdit": { s: 3, c: 5 }, // To beat up (vulgar)
  "otsosi": { s: 3, c: 5 }, // Suck it (vulgar)
  "padlo": { s: 3, c: 4 }, // Scoundrel / bastard
  "pedik": { s: 4, c: 5 }, // Homophobic slur
  "perdet": { s: 2, c: 3 }, // To fart
  "petuh": { s: 4, c: 5 }, // Prison slur (passive homosexual)
  "pidar gnoinyj": { s: 5, c: 5 }, // Homophobic slur (rotten faggot)
  "pizdatyi": { s: 3, c: 4 }, // Awesome (vulgar)
  "piz'det": { s: 3, c: 4 }, // To lie / bullshit
  "pizdetc": { s: 3, c: 4 }, // That's fucked / finished (vulgar)
  "pizdoi nakryt'sja": { s: 3, c: 5 }, // To be ruined / fucked up
  "pizd'uk": { s: 3, c: 4 }, // Little shit (vulgar)
  "piz`dyulina": { s: 3, c: 4 }, // Piece of junk (vulgar)
  "podi ku'evo": { s: 2, c: 3 }, // Probably shitty (vulgar)
  "poeben": { s: 3, c: 4 }, // Fucked up
  "po'imat' na konchik": { s: 3, c: 5 }, // To catch on the tip (vulgar)
  "po'iti posrat": { s: 3, c: 4 }, // To go take a shit
  "po khuy": { s: 3, c: 4 }, // Don't give a fuck
  "poluchit pizdy": { s: 3, c: 5 }, // To get beaten up (vulgar)
  "pososi moyu konfetku": { s: 3, c: 5 }, // Suck my candy (vulgar)
  "prissat": { s: 3, c: 3 }, // To piss / urinate
  "proebat": { s: 3, c: 4 }, // To fuck up / lose
  "promudobl'adsksya pizdopro'ebina": { s: 5, c: 5 }, // Extreme compound insult
  "propezdoloch": { s: 3, c: 4 }, // Total fuckup
  "prosrat": { s: 3, c: 4 }, // To shit away / lose (vulgar)
  "raspeezdeyi": { s: 3, c: 4 }, // Scatter/spread (vulgar)
  "raspizdatyi": { s: 3, c: 4 }, // Awesome (vulgar, variant)
  "raz'yebuy": { s: 3, c: 4 }, // Smash it (vulgar)
  "raz'yoba": { s: 3, c: 4 }, // Slacker / lazy ass
  "s'ebat'sya": { s: 3, c: 4 }, // To fuck off / escape
  "styervo": { s: 3, c: 4 }, // Bitch / carrion
  "sukin syn": { s: 3, c: 4 }, // Son of a bitch
  "svodit posrat": { s: 2, c: 3 }, // To take to the toilet (vulgar)
  "trakhat'sya": { s: 3, c: 5 }, // To fuck (vulgar)
  "trimandoblydskiy pizdoproyob": { s: 5, c: 5 }, // Extreme compound insult
  "ubl'yudok": { s: 4, c: 5 }, // Bastard / mongrel
  "uboy": { s: 2, c: 3 }, // Ugly / disastrous
  "u'ebitsche": { s: 4, c: 5 }, // Freak / monstrosity (vulgar)
  "vafl'a": { s: 3, c: 4 }, // Waffle (slur for passive homosexual)
  "vafli lovit": { s: 3, c: 4 }, // Catch waffles (vulgar slur)
  "v pizdu": { s: 3, c: 5 }, // Into the pussy / fuck it
  "vyperdysh": { s: 3, c: 4 }, // Fart cloud / useless person
  "vzdrochennyi": { s: 3, c: 4 }, // Aroused / jerked off
  "yeb vas": { s: 3, c: 5 }, // Fuck you (plural)
  "za'ebat": { s: 3, c: 4 }, // To piss off / exhaust
  "zalupat": { s: 3, c: 4 }, // To foreskin / insult (vulgar)
  "zasranetc": { s: 3, c: 4 }, // Shithead
  "zassat": { s: 3, c: 4 }, // To piss oneself / chicken out
  "zlo'ebuchy": { s: 3, c: 4 }, // Angrily fucking (vulgar intensifier)
  "бардак": { s: 1, c: 2 }, // Mess / brothel
  "бздёнок": { s: 3, c: 3 }, // Little fart / coward
  "бугор": { s: 1, c: 2 }, // Boss / hump
  "во пизду": { s: 3, c: 5 }, // Into the pussy / fuck it (Cyrillic)
  "встать раком": { s: 3, c: 5 }, // Get on all fours (vulgar)
  "гандон": { s: 3, c: 4 }, // Condom / asshole
  "голый": { s: 1, c: 2 }, // Naked
  "дать пизды": { s: 3, c: 5 }, // To beat up (vulgar)
  "другой дразнится": { s: 1, c: 2 }, // Someone else is teasing
  "ебать-копать": { s: 3, c: 4 }, // Fuck me (exclamation)
  "играть на кожаной флейте": { s: 3, c: 5 }, // Play the skin flute (vulgar for fellatio)
  "измудохать": { s: 3, c: 4 }, // To beat to a pulp (vulgar)
  "каждый дрочит как он хочет": { s: 2, c: 3 }, // Everyone jerks off how they like (vulgar expression)
  "какая разница": { s: 1, c: 1 }, // What's the difference (mild)
  "как два пальца обоссать": { s: 3, c: 4 }, // Easy as pissing on two fingers (vulgar)
  "курите мою трубку": { s: 3, c: 4 }, // Smoke my pipe (vulgar)
  "лысого в кулаке гонять": { s: 3, c: 4 }, // Masturbate (vulgar idiom)
  "малофя": { s: 3, c: 4 }, // Semen (vulgar)
  "муда": { s: 3, c: 4 }, // Testicles (vulgar)
  "мудило": { s: 3, c: 4 }, // Idiot / asshole
  "мудозмон": { s: 3, c: 4 }, // Testicle monster (insult)
  "наебениться": { s: 3, c: 4 }, // To get wasted / fall over (vulgar)
  "на фиг": { s: 1, c: 2 }, // To hell with it (mild)
  "на хуй": { s: 3, c: 5 }, // Fuck off / on the dick (vulgar)
  "на хую вертеть": { s: 3, c: 5 }, // To spin on the dick / not care (vulgar)
  "на хуя": { s: 3, c: 4 }, // What the fuck for (vulgar)
  "невебенный": { s: 3, c: 4 }, // Incredible (vulgar)
  "не ебет": { s: 3, c: 4 }, // Don't give a fuck
  "ни за хуй собачу": { s: 3, c: 5 }, // For nothing / dog's dick (vulgar)
  "обнаженный": { s: 1, c: 2 }, // Naked / bare
  "обоссаться можно": { s: 3, c: 4 }, // Could piss yourself (from laughing/fear)
  "один ебётся": { s: 3, c: 4 }, // One person gets fucked (alone)
  "опесдол": { s: 3, c: 4 }, // Idiot (vulgar)
  "охуйтельно": { s: 3, c: 4 }, // Fucking amazing (vulgar)
  "половое сношение": { s: 3, c: 4 }, // Sexual intercourse (clinical/vulgar)
  "секс": { s: 1, c: 2 }, // Sex
  "сиски": { s: 2, c: 3 }, // Tits (slang)
  "траxать": { s: 3, c: 5 }, // To fuck (Cyrillic, mixed)
  "ты мне ваньку не валяй": { s: 1, c: 2 }, // Don't play dumb (idiomatic)
  "фига": { s: 1, c: 2 }, // Fig sign (mild insult gesture)
  "хапать": { s: 1, c: 2 }, // To grab / steal
  "хер с ней": { s: 2, c: 3 }, // To hell with her
  "хер с ним": { s: 2, c: 3 }, // To hell with him
  "хуеплет": { s: 3, c: 4 }, // Dick-weaver (insult)
  "хуило": { s: 4, c: 5 }, // Dick (political insult, Kremlin slur)
  "хуиней страдать": { s: 3, c: 4 }, // To waste time on nonsense (vulgar)
  "хуиня": { s: 3, c: 4 }, // Bullshit / nonsense (vulgar)
  "хуй пинать": { s: 3, c: 4 }, // To kick a dick / waste time (vulgar)
};

export default russianBadWords;

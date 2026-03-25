/**
 * Brazilian profanity words list
 * Contains common profanities, insults, and offensive terms. Includes variations.
 * ⚠️ Warning: This file contains explicit language in Brazilian
 */
const _d: Record<string, [number, number]> = {
  "abusador": [3, 4], // Abuser
  "arrombado": [3, 4], // Broken open (vulgar insult)
  "babaca": [1, 4], // Asshole / idiot
  "baitola": [3, 4], // Faggot (regional, offensive)
  "besta": [1, 4], // Stupid / fool
  "boçal": [2, 4], // Boor / ignorant
  "boquete": [4, 5], // Blowjob
  "brocha": [3, 4], // Impotent (variant)
  "buceta": [4, 4], // Pussy (vulgar)
  "burro": [1, 4], // Donkey / stupid
  "cacete": [4, 4], // Dick / damn
  "cagando": [3, 5], // Shitting
  "canalha": [2, 4], // Scoundrel
  "cara de cu": [3, 4], // Ass-face
  "carai": [3, 4], // Damn (variant of caralho)
  "caralho": [4, 4], // Dick (strong expletive)
  "caramba": [1, 4], // Damn (mild)
  "checheca": [4, 4], // Pussy (slang)
  "clitoris": [4, 3], // Clitoris
  "clitóris": [3, 4], // Clitoris (accented)
  "cocaina": [2, 3], // Cocaine
  "corno": [3, 4], // Cuckold
  "cretino": [1, 4], // Cretin
  "cu": [3, 4], // Ass / asshole
  "cuzao": [3, 4], // Big asshole
  "debiloide": [1, 4], // Moron
  "demente": [2, 4], // Demented / insane
  "demonio": [1, 4], // Demon
  "demônio": [3, 4], // Demon (accented)
  "desgraça": [3, 4], // Disgrace / damn
  "desgraçado": [3, 4], // Bastard / wretch
  "diabo": [1, 4], // Devil
  "droga": [1, 3], // Drug / damn
  "drogado": [2, 4], // Drugged / junkie
  "escroto": [4, 4], // Scrotum / scummy
  "estupido": [1, 4], // Stupid
  "estúpido": [1, 4], // Stupid (accented)
  "estupro": [5, 5], // Rape
  "fdp": [3, 4], // Filho da puta (son of a bitch)
  "filha da puta": [3, 4], // Daughter of a bitch
  "filho de uma eguá": [3, 4], // Son of a mare
  "foda": [3, 5], // Fuck
  "foda-se": [3, 5], // Fuck it
  "fodido": [3, 5], // Fucked
  "fudendo": [3, 5], // Fucking (variant)
  "fuder": [3, 5], // To fuck (variant)
  "fudido": [3, 5], // Fucked (variant)
  // "gay": [5, 2], // Commented out: standard identity term, too many false positives on LGBTQ+ event descriptions
  "gorda": [1, 4], // Fat (female)
  "gordo": [1, 4], // Fat (male)
  "grelinho": [3, 4], // Little clitoris (slang)
  "grelo": [3, 4], // Clitoris (slang)
  "idiota": [1, 4], // Idiot
  "inutil": [1, 3], // Useless
  "inútil": [1, 3], // Useless (accented)
  "karalho": [4, 4], // Dick (internet spelling)
  "krl": [4, 4], // Dick (abbreviation of caralho)
  "leproso": [2, 4], // Leper (insult)
  "lesado": [1, 4], // Dazed / stupid
  "macaca": [5, 4], // Female monkey (racial slur)
  "marginal": [2, 3], // Criminal / thug
  "marica": [5, 4], // Sissy / faggot
  "masoquista": [1, 3], // Masochist
  "merda": [3, 5], // Shit
  "miseravel": [3, 4], // Miserable / wretch
  "miserável": [3, 4], // Miserable / wretch (accented)
  "mulata": [3, 4], // Mulatto (racial term)
  "nao presta": [3, 4], // Good for nothing
  "nazi": [5, 4], // Nazi
  "nazista": [5, 5], // Nazi (adjective)
  "necrofilo": [3, 4], // Necrophiliac
  "necrófilo": [3, 4], // Necrophiliac (accented)
  "nem fodendo": [3, 5], // No fucking way
  "ninfeta": [3, 4], // Nymphet / underage girl (sexualized)
  "otario": [1, 4], // Sucker / fool
  "otário": [1, 4], // Sucker / fool (accented)
  "pariu": [3, 4], // Gave birth (as in "puta que pariu")
  "pau": [4, 4], // Dick / stick
  "pau no cu": [4, 4], // Dick in the ass
  "pedofilo": [5, 5], // Pedophile
  "pedófilo": [5, 5], // Pedophile (accented)
  "peido": [1, 4], // Fart
  "pemba": [4, 4], // Bad luck charm / penis (slang)
  "penis": [4, 3], // Penis
  "pênis": [4, 4], // Penis (accented)
  "pentelha": [3, 4], // Pubic hair (female, insult)
  "pentelho": [3, 4], // Pubic hair (male, insult)
  "perereca": [4, 4], // Pussy (slang)
  // "peru": [3, 4], // Penis (slang) — false positive: country name Peru
  "perú": [4, 4], // Penis (slang, accented)
  // "pica": [3, 4], // Dick (slang) — false positive: English typographic unit
  "picao": [4, 4], // Big dick
  "picão": [4, 4], // Big dick (accented)
  // "pinto": [3, 4], // Dick (slang) — false positive: common English surname, "pinto beans"
  // "piranha": [3, 4], // Piranha / slut — false positive: the fish
  "piroca": [4, 4], // Dick (slang)
  "piru": [4, 4], // Dick (childish slang)
  "pnc": [4, 4], // Pau no cu (dick in the ass)
  "porno": [3, 4], // Porn
  "porra": [3, 5], // Cum / fuck (expletive)
  "pqp": [3, 5], // Puta que pariu (holy shit)
  "prega": [3, 4], // Fold / insult (regional)
  "prostibulo": [3, 4], // Brothel
  "prostituta": [3, 4], // Prostitute (female)
  "prostituto": [3, 4], // Prostitute (male)
  "punheta": [4, 4], // Handjob / masturbation
  "punhetao": [3, 4], // Big wank
  "punhetão": [3, 4], // Big wank (accented)
  "punheteiro": [3, 4], // Wanker
  "puta": [3, 4], // Whore
  "puta merda": [3, 5], // Holy shit
  "puta que pariu": [3, 4], // Son of a bitch (lit. whore that gave birth)
  "puto": [3, 4], // Angry / male whore
  "que porra é essa": [3, 5], // What the fuck is this
  "rabao": [3, 4], // Big ass
  "rabão": [3, 4], // Big ass (accented)
  "rabo": [3, 4], // Ass / tail
  "rabuda": [3, 4], // Big-assed (female)
  "rabudao": [3, 4], // Big-assed (augmentative)
  "rabudão": [3, 4], // Big-assed (augmentative, accented)
  "rabudo": [3, 4], // Big-assed (male)
  "rabudona": [3, 4], // Big-assed woman
  "rachada": [4, 4], // Split / pussy (vulgar)
  "rachadao": [3, 4], // Big split (vulgar)
  "rachadinha": [3, 4], // Little split (vulgar)
  "rachadinho": [3, 4], // Little split (vulgar, male)
  "retardada": [3, 4], // Retarded (female)
  "retardado": [3, 4], // Retarded (male)
  "ridicula": [1, 4], // Ridiculous (female)
  "ridícula": [1, 4], // Ridiculous (female, accented)
  "ridiculo": [1, 4], // Ridiculous (male)
  "rola": [4, 4], // Dick (slang)
  "rolinha": [4, 4], // Little dick
  "rosca": [3, 4], // Asshole (slang)
  "sacanagem": [4, 4], // Dirty trick / sexual act
  "safada": [3, 4], // Pervert / slut (female)
  "safadeza": [3, 4], // Perversion / dirty behavior
  "safado": [3, 4], // Pervert (male)
  "safados": [3, 4], // Perverts (plural)
  "sapatao": [3, 4], // Dyke (offensive)
  "sapatão": [3, 4], // Dyke (offensive, accented)
  "sapatona": [3, 4], // Dyke (augmentative)
  "seu verme": [3, 4], // You worm
  "sexo": [1, 3], // Sex
  "sifilis": [1, 3], // Syphilis
  "siririca": [4, 4], // Female masturbation
  "sua cachorra": [3, 4], // You bitch (lit. your female dog)
  "tarada": [1, 4], // Pervert (female)
  "tarado": [1, 4], // Pervert (male)
  "testuda": [3, 4], // Big forehead (insult, female)
  "tezao": [3, 4], // Horny / arousal
  "tezão": [3, 4], // Horny / arousal (accented)
  "tezuda": [3, 4], // Horny (female)
  "tezudo": [3, 4], // Horny (male)
  "tnc": [3, 4], // Toma no cu (take it in the ass)
  "toma no cu": [3, 4], // Take it in the ass
  "tomar no cu": [3, 4], // Take it in the ass (infinitive)
  "tomar no cứ": [3, 4], // Take it in the ass (variant)
  "tonto": [1, 4], // Dumb / dizzy
  "transar": [3, 4], // To have sex
  "traveco": [3, 4], // Tranny (offensive)
  "trepar": [3, 5], // To fuck / to climb
  "trocha": [1, 4], // Fool (variant)
  "trolha": [1, 4], // Fool / trowel (insult)
  "troucha": [1, 4], // Fool (variant)
  "trouchas": [1, 4], // Fools (variant, plural)
  "trouxa": [1, 4], // Fool / sucker
  "trouxas": [1, 4], // Fools / suckers (plural)
  "troxa": [1, 4], // Fool (variant)
  "troxas": [1, 4], // Fools (variant, plural)
  "vaca": [1, 4], // Cow (insult for women)
  "vacilão": [3, 4], // Unreliable person / jerk
  "vadio": [3, 4], // Vagrant / bum
  "vagabunda": [3, 4], // Slut / bum (female)
  "vagabundo": [3, 4], // Bum / lowlife (male)
  "vagabundos": [3, 4], // Bums / lowlifes (plural)
  "vagagundos": [3, 5], // Bums (misspelling variant)
  "vagina": [4, 3], // Vagina
  "vai se foder": [3, 5], // Go fuck yourself
  "veada": [3, 4], // Doe / faggot (variant, female)
  "veadao": [3, 4], // Big fag (variant)
  "viada": [3, 4], // Faggot (female variant)
  "viadao": [3, 4], // Big fag
  "viadão": [3, 4], // Big fag (accented)
  "viado": [3, 4], // Faggot (offensive)
  "viados": [3, 4], // Faggots (plural)
  "vntc": [3, 4], // Vai no toma no cu (abbreviation)
  "xana": [4, 4], // Pussy (slang)
  "xaninha": [4, 4], // Little pussy (slang)
  "xavasca": [4, 4], // Pussy (regional slang)
  "xbiu": [4, 4], // Pussy (variant)
  "xereca": [4, 4], // Pussy (slang)
  "xerereca": [4, 4], // Pussy (variant)
  "xexecə": [4, 4], // Pussy (variant)
  "xibu": [4, 4], // Pussy (variant)
  "xota": [4, 4], // Pussy (slang)
  "xoxota": [4, 4], // Pussy (slang)
  "bunda": [3, 4], // Butt / ass
  "bundas": [3, 4], // Butts / asses (plural)
  "bolas": [4, 3], // Balls (testicles)
  // "broche": [4, 5], // Blowjob (Portuguese variant) — false positive: English brooch/decorative pin
  "broches": [4, 5], // Blowjobs (plural)
  "cabrão": [3, 4], // Bastard (Portuguese)
  "cabrões": [3, 4], // Bastards (plural)
  "cadelas": [3, 4], // Bitches (lit. female dogs)
  "cona": [5, 5], // Cunt (Portuguese)
  "conas": [5, 5], // Cunts (plural, Portuguese)
  "ejaculação": [2, 3], // Ejaculation
  "excitado": [3, 4], // Aroused / horny
  "filho da puta": [3, 4], // Son of a bitch
  "filhos da puta": [3, 4], // Sons of bitches
  "filho da mãe": [2, 3], // Son of a mother (euphemism for son of a bitch)
  "fode-se": [3, 5], // Fuck it (Portuguese variant)
  "fodas": [3, 5], // Fucks (plural)
  "fodendo": [3, 5], // Fucking
  "fodida": [3, 5], // Fucked (female)
  "idiotas": [1, 4], // Idiots (plural)
  // "mamas": [4, 4], // Breasts — false positive: English plural of mama
  "masturbar-se": [4, 4], // To masturbate
  "merdas": [3, 5], // Shits (plural)
  "mijando": [3, 4], // Pissing
  "orgasmo": [2, 3], // Orgasm
  "peitos": [4, 4], // Breasts / chest
  "pornô": [3, 4], // Porn (accented)
  "pornografia": [3, 4], // Pornography
  "putas": [5, 4], // Whores (plural)
  "que merda": [3, 5], // What shit
  "que se lixe": [3, 4], // Screw it (Portuguese)
  "sacana": [3, 4], // Rascal / pervert
  "sémen": [3, 4], // Semen
  "tetas": [4, 3], // Tits
  "bosta": [3, 4], // Crap / cow dung
  "arrombada": [3, 4], // Broken open (female, vulgar insult)
  "rapariga": [3, 3], // Prostitute (Brazilian) / girl (Portuguese)
  "putaria": [3, 4], // Debauchery / slutty behavior
  "pilantra": [3, 4], // Crook / scammer
  "chupa rola": [4, 4], // Suck dick
  "chupa meu pau": [4, 4], // Suck my dick
  "vai tomar no cu": [3, 4], // Go take it in the ass
  "puta que te pariu": [5, 4], // The whore that bore you
  "pau no seu cu": [4, 4], // Dick in your ass
  "enrabado": [3, 4], // Sodomized (insult)
  "cuzuda": [3, 4], // Big-assed (female, vulgar)
  "cornudo": [3, 4], // Cuckold (variant)
  "boceta": [4, 4], // Pussy (variant spelling)
  "desgraçada": [3, 4], // Wretch / bastard (female)
  "porra caralho": [3, 5], // Fuck damn (compound expletive)

  // Additional Brazilian Portuguese profanity
  "bicha": [3, 4], // Faggot (very offensive in Brazil)
  "bichona": [3, 4], // Augmentative of bicha
  "broxa": [4, 4], // Impotent / limp dick
  "bucetuda": [4, 4], // Big pussy (vulgar)
  "caceta": [3, 4], // Variant of cacete
  "caralha": [3, 4], // Fem variant of caralho
  "caguei": [3, 4], // I shat / I don't care
  "cornão": [3, 4], // Big cuckold
  "cu de burro": [3, 4], // Donkey's ass
  "desgraçado de merda": [3, 4], // Fucking bastard
  "embucetado": [3, 4], // Pissed off (vulgar)
  "encoxar": [3, 4], // To grope
  "enfiado no cu": [3, 4], // Shoved up the ass
  "enrabada": [3, 4], // Fem of enrabado
  "feder": [1, 4], // To stink
  "filha de uma égua": [3, 4], // Daughter of a mare
  "foda pra caralho": [3, 5], // Fucking a lot
  "fudeu": [3, 5], // It's fucked
  "gringo de merda": [3, 5], // Fucking foreigner
  "lazarento": [3, 4], // Leper (insult)
  "mete o pau": [4, 4], // Stick the dick in / Criticize harshly
  "não enche o saco": [4, 4], // Don't bust my balls
  "otária": [3, 4], // Fem of otário
  "pau no cu da sua mãe": [4, 4], // Dick in your mother's ass
  "piranhão": [3, 4], // Big slut
  "porra louca": [3, 5], // Crazy fucker
  "safadão": [3, 4], // Big pervert
  "saco de merda": [3, 5], // Bag of shit
  "sem vergonha": [1, 4], // Shameless
  "sua puta": [5, 4], // You whore
  "tapado": [1, 4], // Stupid / blocked
  "vai se fuder": [3, 5], // Go fuck yourself
  "vtnc": [3, 4], // Abbreviation: vai tomar no cu

  // More compound insults and phrases
  "vai tomar no olho do cu": [3, 5], // Go get fucked in the eye of the ass
  "enfia no cu": [3, 4], // Shove it up your ass
  "mete no cu": [3, 4], // Stick it in the ass
  "mete a rola": [4, 4], // Stick the dick
  "enfiar no rabo": [3, 4], // Shove up the ass
  "cu arrombado": [3, 4], // Busted ass
  "cuzão de merda": [3, 5], // Shitty asshole
  "filho da puta de merda": [3, 5], // Son of a bitch of shit
  "desgraça de merda": [3, 5], // Fucking disgrace
  "porra nenhuma": [3, 5], // No fucking thing
  "vai pro caralho": [4, 4], // Go to the dick (go to hell)
  "vai pro inferno": [1, 4], // Go to hell
  "que porra": [3, 5], // What the fuck
  "puta da tua mãe": [5, 4], // Your mother the whore
  "tua mãe é uma puta": [5, 4], // Your mother is a whore
  "mama minha rola": [4, 4], // Suck my dick
  "chupa minha pica": [4, 4], // Suck my dick (variant)
  "caralho de merda": [4, 5], // Shitty dick
  "vai chupar rola": [4, 4], // Go suck dick
  "goza na cara": [1, 4], // Cum on face
  "me chupa": [1, 4], // Suck me

  // More insults
  "cabaço": [1, 4], // Virgin (male, insulting)
  "cabaça": [1, 4], // Virgin (female, insulting)
  "corna": [1, 4], // Female cuckold
  "fresco": [1, 4], // Effeminate (derogatory)
  "frescão": [1, 4], // Augmentative of fresco
  "galinha": [1, 4], // Chicken (slut)
  "galinhão": [2, 4], // Man-whore
  "filho de uma puta": [1, 4], // Son of a bitch
  "jumento": [1, 4], // Jackass
  "jumenta": [1, 4], // Female jackass
  "borra": [1, 4], // Scum
  "imbecil": [1, 4], // Imbecile
  "babacão": [1, 4], // Augmentative of babaca
  "lambe cu": [3, 4], // Ass licker
  "lambe saco": [1, 4], // Ball licker
  "chupador": [1, 4], // Sucker
  "cuzeta": [3, 4], // Small asshole
  "filha de uma puta": [1, 4], // Daughter of a bitch
  "mongol": [1, 4], // Mongoloid (offensive)
  "mongolão": [1, 4], // Augmentative
  "merdão": [3, 5], // Big shit
  "merdosa": [3, 5], // Shitty (female)
  "merdoso": [3, 5], // Shitty (male)
  "pau mole": [4, 4], // Limp dick
  "pau pequeno": [4, 4], // Small dick
  "pau torto": [4, 4], // Bent dick
  "pirocudo": [4, 4], // Big-dicked
  "porra toda": [3, 5], // All shit
  "putão": [5, 4], // Big whore (male)
  "putona": [3, 4], // Big whore (female)
  "rabudas": [1, 4], // Plural of rabuda
  "saco de bosta": [1, 4], // Bag of crap
  "sem cu": [3, 4], // Without ass
  "viado nojento": [1, 4], // Disgusting fag
  "puteiro": [3, 4], // Whorehouse
  "cafetina": [1, 4], // Madam (brothel)
  "cafetão": [1, 4], // Pimp
  "chifre": [1, 4], // Horn (cuckold reference)
  "chifrado": [1, 4], // Cuckolded
  "chifrada": [1, 4], // Cuckolded (female)
  "arregaçada": [1, 4], // Stretched out (vulgar)
  "arregaçado": [1, 4], // Stretched out (vulgar, male)

  // Internet/text slang
  "vsf": [2, 3], // Vai se fuder
  "kct": [2, 3], // Cacete
  "caraio": [2, 3], // Caralho variant
  "kraal": [2, 3], // Caralho variant
  "poha": [2, 3], // Porra variant
  "sfd": [2, 3], // Se fuder
  "plmds": [2, 3], // Pelo amor de deus (frustration)
  "nmrl": [2, 3], // Na moral (slang)
  "lixo humano": [2, 3], // Human garbage
  "verme": [2, 3], // Worm
  "nojento": [2, 3], // Disgusting (male)
  "nojenta": [2, 3], // Disgusting (female)
  "asqueroso": [2, 4], // Disgusting
  "asquerosa": [2, 4], // Disgusting (female)

  // Regional variations
  "porco": [1, 4], // Pig (insult)
  "porca": [1, 4], // Pig (female insult)
  "jegue": [1, 4], // Donkey (northeastern)
  "baitolão": [3, 4], // Augmentative of baitola
  "trouxão": [1, 4], // Big fool
  "cagueta": [1, 4], // Snitch
  "dedo duro": [1, 4], // Snitch
  "fominha": [1, 4], // Greedy
  "mão de vaca": [1, 3], // Cheapskate
  "pão duro": [1, 3], // Cheapskate
  "sem vergonhice": [1, 4], // Shamelessness
  "metido": [1, 4], // Full of oneself
  "metida": [1, 4], // Full of oneself (female)
  "filho de chocadeira": [3, 4], // Son of an incubator
  "desgraçados": [3, 4], // Plural
  "biscate": [3, 4], // Slut (regional)
  "quenga": [5, 4], // Prostitute (northeastern)
  "raparigueiro": [3, 4], // Womanizer (northeastern)
  "mulambo": [3, 4], // Rag (insult)
  "mulambento": [3, 4], // Ragged (insult)
  "pau mandado": [3, 4], // Puppet
  "comedor de merda": [3, 5], // Shit eater

  // ========================================
  // === Northeastern Brazilian Slang ===
  // ========================================
  "arretado de besta": [1, 4], // Extremely stupid (NE)
  "arengueira": [3, 4], // Troublemaker woman (NE)
  "arengueiro": [3, 4], // Troublemaker man (NE)
  "besta quadrada": [1, 4], // Squared beast (very stupid, NE)
  "bizonho": [1, 4], // Ugly/weird (NE)
  "brocado": [3, 4], // Horny (NE)
  "cabra safado": [3, 4], // Dirty dude (NE)
  "cabra desgraçado": [3, 4], // Wretched dude (NE)
  "comer a mãe": [3, 5], // Fuck the mother (NE)
  "cu de boi": [3, 4], // Ox's ass (NE insult)
  "cu de jegue": [3, 4], // Donkey's ass (NE)
  "desconjuntado": [3, 4], // Disjointed (NE insult)
  "egua": [3, 4], // Mare (NE expletive)
  "égua": [3, 4], // Mare (NE expletive, accented)
  "égua puta": [5, 4], // Mare whore (NE compound)
  "eita porra": [3, 5], // Damn fuck (NE expletive)
  "filho de rapariga": [3, 4], // Son of a slut (NE)
  "fresco do cu": [3, 4], // Ass fresh (NE effeminate insult)
  "mala sem alça": [3, 4], // Suitcase without handle (annoying person, NE)
  "marmota": [1, 4], // Fool (NE)
  "mofino": [3, 4], // Stingy/pathetic (NE)
  "mocreia": [1, 4], // Ugly woman (NE)
  "peba": [3, 4], // Pathetic person (NE)
  "pivete de merda": [3, 5], // Shitty kid (NE)
  "quenga de merda": [5, 5], // Shitty prostitute (NE)
  "rapariga de merda": [3, 5], // Shitty slut (NE)
  "tabacudo": [3, 4], // Big-lipped (NE insult)
  "tchola": [3, 4], // Gay (NE offensive)
  "toxico": [3, 4], // Drug addict (NE slang)

  // ========================================
  // === Southern Brazilian (Gaúcho) ===
  // ========================================
  "barbaridade porra": [3, 4], // Damn (Gaúcho compound)
  "bah porra": [3, 4], // Gaúcho expletive compound
  "butiá descascado": [1, 4], // Peeled butiá (ugly, RS)
  "cusco safado": [3, 4], // Dirty mutt (RS)
  "cusco de merda": [3, 5], // Shitty mutt (RS)
  "gringo filho da puta": [3, 4], // Foreigner son of a bitch (RS)
  "guria puta": [5, 4], // Whore girl (RS)
  "guri safado": [3, 4], // Dirty boy (RS)
  "tchê porra": [3, 5], // Gaúcho fuck expletive
  "tri arrombado": [3, 4], // Very broken open (RS intensifier)
  "tri cuzão": [3, 4], // Very asshole (RS)
  "tri fdp": [3, 4], // Very son of a bitch (RS)
  "tri otário": [1, 4], // Very fool (RS)

  // ========================================
  // === Rio de Janeiro/Carioca Slang ===
  // ========================================
  "caralho mermão": [4, 4], // Dick bro (carioca)
  "é o caralho": [4, 4], // It's the dick (carioca dismissal)
  "foda-se mermão": [3, 5], // Fuck it bro (carioca)
  "maluco do caralho": [3, 5], // Crazy fucker (carioca)
  "mané do caralho": [1, 4], // Stupid fucker (carioca)
  "mermão do caralho": [3, 5], // Fucking bro (carioca)
  "neguinho safado": [3, 4], // Dirty dude (carioca, can be racial)
  "porra mané": [1, 4], // Fuck stupid (carioca)
  "porra mermão": [3, 5], // Fuck bro (carioca)
  "vai se fuder mané": [1, 4], // Go fuck yourself stupid (carioca)
  "vagabundo do caralho": [3, 5], // Fucking bum (carioca)
  "menor safado": [3, 4], // Dirty kid (carioca slang)
  "alemão safado": [3, 4], // Dirty german (carioca slang for enemy)
  "cria do diabo": [3, 4], // Devil's spawn (carioca)

  // ========================================
  // === São Paulo/Paulista Profanity ===
  // ========================================
  "mano do caralho": [3, 5], // Fucking bro (SP)
  "mano otário": [1, 4], // Fool bro (SP)
  "mina vadia": [3, 4], // Slutty girl (SP)
  "mlk fdp": [3, 4], // Kid son of a bitch (SP texting)
  "nóia do caralho": [3, 5], // Fucking junkie (SP)
  "porra mano": [3, 5], // Fuck bro (SP)
  "truta fdp": [3, 4], // Homie son of a bitch (SP)
  "vai se fuder mano": [3, 5], // Go fuck yourself bro (SP)
  "véio safado": [3, 4], // Dirty old man (SP)
  "véia safada": [3, 4], // Dirty old woman (SP)
  "zé buceta": [4, 4], // Joe pussy (SP worthless man)
  "zé ruela": [3, 4], // Joe asshole (SP)
  "zé mané": [1, 4], // Joe stupid (SP)

  // ========================================
  // === Internet/Gaming Slang ===
  // ========================================
  "arrombado do krl": [3, 5], // Broken open fucker (texting)
  "bct": [2, 3], // Buceta abbreviation
  "boludo": [1, 3], // Ball-like (borrowed from Argentine, fool)
  "canceroso": [2, 3], // Cancerous (gaming insult)
  "crlh": [2, 3], // Caralho abbreviation
  "cu de ferro": [3, 3], // Iron ass (stubborn, gaming)
  "desinstalou o jogo": [2, 3], // Uninstall the game (gaming taunt)
  "fdp do krl": [3, 5], // Son of a bitch fucker (texting)
  "fds": [2, 3], // Foda-se abbreviation
  "filhodaputa": [2, 3], // Son of a bitch (compound)
  "flw fdp": [2, 3], // Bye son of a bitch (texting)
  "gg fdp": [2, 3], // Good game son of a bitch (gaming)
  "kd o cu": [3, 3], // Where's the ass (texting)
  "kid burro": [1, 4], // Stupid kid (gaming)
  "lixão": [2, 3], // Big garbage (gaming insult)
  "lixo do caralho": [3, 5], // Fucking garbage (gaming)
  "mrd": [2, 3], // Merda abbreviation
  "noob fdp": [2, 3], // Noob son of a bitch (gaming)
  "pqp mano": [3, 5], // Holy shit bro (texting)
  "puta q pariu": [2, 3], // Son of a bitch (texting variant)
  "retardado do krl": [3, 5], // Fucking retard (texting)
  "tmj fdp": [2, 3], // Together son of a bitch (texting)
  "vai cagar": [3, 5], // Go shit
  "vai pro krl": [4, 3], // Go to the dick (texting)
  "vtnc mano": [3, 3], // Take it in the ass bro (texting)

  // ========================================
  // === More Compound Insults ===
  // ========================================
  "arrombado de merda": [3, 5], // Shitty broken open
  "babaca do caralho": [1, 4], // Fucking idiot
  "besta de merda": [1, 4], // Shitty fool
  "bicha nojenta": [1, 4], // Disgusting fag
  "bosta de gente": [3, 5], // Shit of a person
  "broxa de merda": [3, 5], // Shitty impotent
  "buceta fedida": [4, 4], // Stinky pussy
  "burro de merda": [3, 5], // Shitty donkey
  "burro do caralho": [3, 5], // Fucking donkey
  "cachorra de merda": [3, 5], // Shitty bitch
  "caralho a quatro": [4, 4], // Four-way dick (extreme expletive)
  "cona de merda": [5, 5], // Shitty cunt
  "cornão de merda": [3, 5], // Shitty big cuckold
  "corno manso": [1, 4], // Tame cuckold (accepting cuckold)
  "cu de cavalo": [3, 4], // Horse's ass
  "cu fedido": [3, 4], // Stinky ass
  "cu sujo": [3, 4], // Dirty ass
  "cuzão do caralho": [3, 5], // Fucking asshole
  "desgraçado do caralho": [3, 4], // Fucking bastard
  "imbecil do caralho": [3, 5], // Fucking imbecile
  "jumento de merda": [3, 5], // Shitty jackass
  "lixo de gente": [1, 4], // Garbage of a person
  "merda de pessoa": [3, 5], // Shit of a person
  "nojento de merda": [3, 5], // Shitty disgusting
  "otário do caralho": [3, 5], // Fucking sucker
  "pau de merda": [4, 5], // Shitty dick
  "piranha de merda": [3, 5], // Shitty slut
  "piranha do caralho": [3, 5], // Fucking slut
  "porco de merda": [3, 5], // Shitty pig
  "porra de merda": [3, 5], // Shitty cum
  "puta barata": [5, 5], // Cheap whore
  "puta de merda": [5, 5], // Shitty whore
  "puta do caralho": [5, 5], // Fucking whore
  "rola de merda": [4, 5], // Shitty dick
  "safado de merda": [3, 5], // Shitty pervert
  "safado do caralho": [3, 5], // Fucking pervert
  "trouxa do caralho": [1, 4], // Fucking fool
  "vaca de merda": [3, 5], // Shitty cow
  "vagabunda de merda": [3, 5], // Shitty slut
  "vagabundo de merda": [3, 5], // Shitty bum
  "verme de merda": [3, 5], // Shitty worm
  "verme do caralho": [3, 5], // Fucking worm
  "viado de merda": [3, 5], // Shitty fag

  // ========================================
  // === Portuguese from Portugal ===
  // ========================================
  "atirar ao boneco": [4, 4], // Masturbate (PT)
  "badalhoca": [3, 4], // Filthy woman (PT)
  "badalhoco": [3, 4], // Filthy man (PT)
  "branleur": [1, 4], // Wanker (PT borrowed)
  "burra do caralho": [1, 4], // Fucking stupid (female, PT)
  "cabrão do caralho": [3, 4], // Fucking bastard (PT)
  "caralhada": [4, 4], // Dick move (PT)
  "caralhudo": [4, 4], // Big-dicked (PT)
  "chulo": [4, 4], // Pimp (PT)
  "chula": [1, 4], // Pimp's woman (PT)
  "coiro": [1, 3], // Leather/hide (PT slang for ugly person)
  "conas de sabão": [5, 5], // Soap cunts (PT worthless)
  "esporra": [3, 4], // Cum (PT)
  "esporrada": [3, 4], // Ejaculation (PT)
  "foda-se caralho": [3, 5], // Fuck damn (PT compound)
  "fodasse": [3, 5], // Fuck (PT compound variant)
  "foder a mãe": [3, 5], // Fuck the mother (PT)
  "foder o cu": [3, 5], // Fuck the ass (PT)
  "foder-se": [3, 5], // Fuck oneself (PT)
  "fufa": [3, 4], // Dyke (PT offensive)
  "granda cabrão": [3, 4], // Big bastard (PT)
  "granda cona": [5, 5], // Big cunt (PT)
  "granda puta": [5, 4], // Big whore (PT)
  "ir para o caralho": [4, 4], // Go to the dick (PT go to hell)
  "lamparina": [3, 3], // Lamp (PT euphemism for ass)
  "levar no cu": [3, 4], // Take it in the ass (PT)
  "mama na piça": [4, 4], // Suck the dick (PT)
  "manda-te foder": [3, 5], // Go get fucked (PT)
  "maricas": [3, 4], // Faggot (PT)
  "mija": [3, 4], // Piss (PT)
  "mija-me todo": [3, 4], // Piss me all (PT)
  "paneleiro": [3, 4], // Faggot (PT offensive)
  "paneleira": [3, 4], // Dyke (PT offensive)
  "piça": [4, 4], // Dick (PT)
  "pissa": [3, 4], // Piss (PT variant)
  "putedo": [3, 4], // Brothel (PT)
  "putéfio": [3, 4], // Brothel (PT variant)
  "rabo de fora": [3, 4], // Ass out (PT)
  "rata": [1, 4], // Pussy (PT slang)
  "ratinha": [4, 4], // Little pussy (PT)
  "tomates": [4, 4], // Tomatoes/balls (PT slang for testicles)
  "vai levar no cu": [3, 4], // Go take it in the ass (PT)
  "vai para o caralho": [4, 4], // Go to the dick (PT)
  "vai para o cu da tua mãe": [3, 4], // Go to your mother's ass (PT)

  // ========================================
  // === Body Part Vulgarities ===
  // ========================================
  "anus": [3, 4], // Anus
  "ânus": [4, 3], // Anus (accented)
  "bico do peito": [4, 3], // Nipple
  "bocetinha": [4, 3], // Little pussy
  "boquinha": [4, 3], // Little mouth (sexual innuendo)
  "bundinha": [4, 3], // Little ass
  "cacetão": [4, 3], // Big dick
  "cacetinho": [4, 3], // Little dick
  "culhão": [4, 3], // Big ball/testicle
  "culhões": [4, 3], // Big balls/testicles
  "cu peludo": [4, 3], // Hairy ass
  "cu raspado": [4, 3], // Shaved ass
  "mamilo": [4, 3], // Nipple
  "pentelhuda": [4, 3], // Hairy-pubed (female)
  "pentelhudo": [4, 3], // Hairy-pubed (male)
  "periquita": [4, 3], // Little pussy (variant)
  "picona": [4, 3], // Big-dicked (female form, as insult)
  "rabo peludo": [4, 3], // Hairy ass
  "saco de bola": [4, 3], // Ball sack (variant)
  "teta grande": [4, 3], // Big tit
  "tetona": [4, 3], // Big-titted
  "tetuda": [4, 3], // Big-titted (variant)

  // ========================================
  // === Favela/Street Slang ===
  // ========================================
  "boca de fumo": [3, 4], // Drug selling point
  "bonde do caralho": [3, 5], // Fucking gang
  "caguetou": [3, 4], // Snitched (past tense)
  "cheirador": [3, 4], // Coke snorter
  "chupar o pau do diabo": [4, 4], // Suck the devil's dick
  "cuzinheiro": [3, 4], // Ass man (vulgar)
  "desce a ladeira": [3, 4], // Go down the hill (dismissive)
  "engomadinho": [3, 4], // Preppy (insult)
  "favelado de merda": [3, 5], // Shitty favela dweller
  "gambé": [3, 4], // Cop (slang, derogatory)
  "gambé fdp": [3, 4], // Cop son of a bitch
  "laranja podre": [3, 4], // Rotten orange (snitch)
  "maloqueiro fdp": [3, 4], // Thug son of a bitch
  "merdinha": [3, 5], // Little shit
  "moleque de merda": [3, 5], // Shitty kid
  "noia": [3, 4], // Junkie (street slang)
  "noiado": [3, 4], // High/junky
  "noiada": [3, 4], // High/junky (female)
  "patrãozinho de merda": [3, 5], // Shitty little boss
  "playboy de merda": [3, 5], // Shitty rich kid
  "safadinho": [3, 4], // Little pervert
  "safadinha": [3, 4], // Little pervert (female)
  "traficante de merda": [3, 5], // Shitty drug dealer
  "trombadinha": [3, 4], // Pickpocket kid
  "vacilou": [3, 4], // Slipped up (used insultingly)
  "vida loka": [3, 4], // Crazy life (street slang)
  "X9 do caralho": [3, 5], // Fucking snitch

  // ========================================
  // === Sexual Terms ===
  // ========================================
  "boqueteira": [4, 5], // Blowjob giver (female)
  "boqueteiro": [4, 5], // Blowjob giver (male)
  "brochar": [4, 4], // To go limp
  "chupeta de rola": [4, 4], // Dick pacifier
  "comer o cu": [4, 5], // Eat the ass (fuck the ass)
  "comer o rabo": [4, 4], // Eat the ass (variant)
  "comeu gostoso": [4, 5], // Ate/fucked good
  "dar a buceta": [4, 4], // Give the pussy
  "dar o cu": [4, 4], // Give the ass
  "dar o rabo": [4, 4], // Give the ass (variant)
  "enrabar": [4, 4], // To sodomize
  "fio terra": [4, 4], // Ground wire (anal play slang)
  "gozar na boca": [4, 4], // Cum in the mouth
  "gozar na cara": [4, 4], // Cum in the face
  "leite de rola": [4, 4], // Dick milk (cum)
  "mamar o pau": [4, 4], // Suck the dick (variant)
  "meter a pica": [4, 4], // Insert the dick
  "meter gostoso": [4, 5], // Fuck good
  "meter o pau": [4, 4], // Insert the dick (variant)
  "pica na buceta": [4, 4], // Dick in pussy
  "rola dura": [4, 4], // Hard dick
  "sentar na pica": [4, 4], // Sit on the dick
  "sentar na rola": [4, 4], // Sit on the dick (variant)
  "trepada": [4, 5], // Fuck (noun)
  "xerecão": [4, 4], // Big pussy
  "xerequinha": [4, 4], // Little pussy

  // ========================================
  // === Evasion Spellings ===
  // ========================================
  "c4ralho": [4, 5], // Dick (evasion)
  "buc3ta": [4, 5], // Pussy (evasion)
  "fod4": [3, 5], // Fuck (evasion)
  "p0rra": [3, 5], // Cum/fuck (evasion)
  "m3rda": [3, 5], // Shit (evasion)
  "put4": [4, 5], // Whore (evasion)
  "c@ralho": [4, 5], // Dick (evasion)
  "buc#ta": [4, 5], // Pussy (evasion)
  "f0da": [3, 5], // Fuck (evasion)
  "p*rra": [3, 5], // Cum/fuck (evasion)
  "m*rda": [3, 5], // Shit (evasion)
  "put@": [3, 5], // Whore (evasion)
  "c*ralho": [4, 5], // Dick (evasion)
  "b*ceta": [4, 5], // Pussy (evasion)
  "f*da": [3, 5], // Fuck (evasion)
  "v1ado": [3, 5], // Faggot (evasion)
  "v!ado": [3, 5], // Faggot (evasion)
  "arr0mbado": [3, 5], // Broken open (evasion)
  "cuz4o": [3, 5], // Asshole (evasion)
  "p1ranha": [3, 5], // Slut (evasion)
  "r0la": [4, 5], // Dick (evasion)
  "p1ca": [4, 5], // Dick (evasion)
  "pir0ca": [4, 5], // Dick (evasion)
  "b0sta": [3, 5], // Crap (evasion)
  "p@u": [4, 5], // Dick (evasion)
  "c0rno": [3, 5], // Cuckold (evasion)
  "crlho": [3, 5], // Caralho shorthand
  "bct4": [3, 5], // Buceta evasion
  "fdp!": [3, 5], // Son of a bitch evasion
  "ptqp": [3, 5], // Puta que pariu evasion
  "carr4lho": [4, 5], // Dick evasion variant
  "buçeta": [4, 5], // Pussy (accent evasion)
  "karaio": [4, 5], // Dick (k evasion variant)
  "pohha": [3, 5], // Porra variant
  "pohá": [3, 5], // Porra variant
  "mierda": [3, 4], // Shit (Spanish-influenced evasion)
  "arronbado": [3, 5], // Broken open (misspelling evasion)
  "cuza0": [3, 5], // Asshole (zero evasion)

  // ========================================
  // === More Compound Phrases ===
  // ========================================
  "vai tomar no meio do cu": [3, 5], // Go take it in the middle of the ass
  "vai chupar o cu da mãe": [3, 5], // Go suck your mother's ass
  "enfia essa porra no cu": [3, 5], // Shove this shit up your ass
  "mete essa rola no cu": [4, 5], // Stick this dick up your ass
  "enfiar a rola no cu": [4, 5], // Shove the dick up the ass
  "mama minha pica": [4, 5], // Suck my dick (variant)
  "chupa meu saco": [4, 5], // Suck my balls
  "lambe meu cu": [3, 5], // Lick my ass
  "lambe minha buceta": [4, 5], // Lick my pussy
  "senta nessa pica": [4, 5], // Sit on this dick
  "vai dar o cu": [3, 5], // Go give your ass
  "vai chupar uma rola": [4, 5], // Go suck a dick
  "vai mamar": [3, 5], // Go suck (vulgar)
  "vai dar a buceta": [4, 5], // Go give your pussy
  "toma no rabo": [3, 5], // Take it in the ass (variant)
  "toma nesse cu": [3, 5], // Take it in this ass
  "mete no rabo": [3, 5], // Stick it in the ass (variant)
  "enfiar no cu e rodar": [3, 5], // Shove up the ass and spin
  "chupa até o talo": [3, 5], // Suck it to the base
  "pau na tua boca": [4, 5], // Dick in your mouth
  "rola na tua cara": [4, 5], // Dick in your face
  "porra na tua cara": [3, 5], // Cum in your face
  "goza nessa cara de puta": [5, 5], // Cum on this whore face
  "mama essa pica suja": [4, 5], // Suck this dirty dick
  "carne de porco fedida": [3, 5], // Stinky pork (compound insult)
  "saco de merda ambulante": [3, 5], // Walking bag of shit
  "monte de bosta": [3, 5], // Pile of crap
  "pedaço de merda": [3, 5], // Piece of shit
  "cara de merda": [3, 5], // Shit face
  "cara de buceta": [4, 5], // Pussy face
  "boca de buceta": [4, 5], // Pussy mouth
  "nariz de pau": [4, 5], // Dick nose
  "olho do cu": [3, 5], // Eye of the ass (asshole)
  "cu de gato": [3, 5], // Cat's ass
  "cu de porco": [3, 5], // Pig's ass
  "rabo de vaca": [3, 5], // Cow's ass
  "cu de macaco": [3, 5], // Monkey's ass
  "merda de gente": [3, 5], // Shit person (variant)

  // ========================================
  // === Regional Variations (All States) ===
  // ========================================
  // Minas Gerais
  "uai porra": [3, 4], // MG expletive
  "trem do caralho": [3, 5], // Fucking thing (MG)
  "trem arrombado": [3, 4], // Broken thing (MG)
  "nó tio que porra": [3, 5], // Damn uncle what fuck (MG)
  "vai tomar no cu sô": [3, 5], // Go get fucked buddy (MG)
  "cê é besta demais": [1, 4], // You're too stupid (MG)
  "sô do caralho": [3, 5], // Fucking buddy (MG)
  "cabra da peste fdp": [3, 4], // Stubborn bastard son of bitch (MG)
  "cê é burro pra caralho": [1, 4], // You're fucking stupid (MG)

  // Bahia
  "mah ôxe porra": [3, 4], // Bahia expletive
  "ave maria porra": [3, 5], // Holy Mary fuck (Bahia)
  "ôxe do caralho": [3, 5], // Fucking damn (Bahia)
  "piranha oxente": [3, 4], // Bahia slut
  "corno da porra": [3, 4], // Damn cuckold (Bahia)
  "vei safado do caralho": [3, 5], // Fucking dirty old man (Bahia)
  "cabra safado da porra": [3, 4], // Damn dirty dude (Bahia)
  "bicha do caralho": [3, 5], // Fucking fag (Bahia)

  // Pará / Northern
  "égua do caralho": [3, 5], // Fucking mare (Pará)
  "curumim safado": [3, 4], // Dirty kid (Pará)
  "caboclo fdp": [3, 4], // Mixed-race son of bitch (Pará, offensive)
  "porra egua": [3, 4], // Damn mare (Pará)
  "égua da puta": [5, 4], // Whore mare (Pará)
  "caralho bicho": [4, 4], // Dick dude (Pará)
  "bicho fdp": [3, 4], // Dude son of bitch (Pará)

  // Pernambuco
  "aff porra": [3, 4], // Pernambuco expletive
  "quenga arrombada": [5, 4], // Broken open prostitute (PE)
  "cabra da peste desgraçado": [3, 4], // Stubborn bastard (PE)
  "eita porra do caralho": [3, 5], // Damn fuck (PE compound)
  "besta porra": [1, 4], // Stupid fuck (PE)
  "arrombado da peste": [3, 4], // Stubborn broken open (PE)
  "porra recife": [3, 5], // Recife fuck (PE expletive)
  "vixe porra": [3, 5], // Holy shit (PE)

  // Maranhão
  "égua porra maranhão": [3, 5], // Mare fuck (MA)
  "cabra fdp do caralho": [3, 5], // Dude son of bitch fucker (MA)
  "porra moleque": [3, 5], // Fuck kid (MA)

  // Ceará
  "rapaz do caralho": [3, 5], // Fucking boy (CE)
  "abestado do caralho": [1, 4], // Fucking fool (CE)
  "cabra macho fdp": [3, 4], // Tough dude son of bitch (CE)
  "mermão porra": [3, 5], // Bro fuck (CE)
  "rapaz desgraçado": [3, 4], // Wretched boy (CE)

  // Goiás / Centro-Oeste
  "uai do caralho": [3, 5], // Fucking damn (GO)
  "trem fdp": [3, 5], // Fucking thing (GO, MG influence)
  "cê é trouxa demais": [1, 4], // You're too foolish (GO)
  "porra sertanejo": [3, 5], // Fuck (GO expletive)

  // ========================================
  // === Portuguese Internet Slang Evasions ===
  // ========================================
  "krl mano": [2, 5], // Caralho mano evasion
  "pfv fdp": [2, 5], // Please son of bitch (ironic)
  "tmj krl": [4, 5], // Together dick (texting)
  "kkk fdp": [2, 5], // Laughing son of bitch
  "slc krl": [4, 5], // Damn dick (texting)
  "mds fdp": [2, 5], // My God son of bitch
  "pqp krl": [4, 5], // Holy shit dick
  "vsf krl": [4, 5], // Go fuck yourself dick
  "vtnc krl": [4, 5], // Take it in the ass dick
  "mn do krl": [3, 5], // Bro fucker
  "mlk fdp krl": [4, 5], // Kid son of bitch dick
  "ss fdp": [2, 5], // Yes son of bitch
  "n fdp": [2, 5], // No son of bitch
  "glr fdp": [2, 5], // Guys son of bitch (group)
  "ta de sacanagem": [2, 5], // You're kidding (vulgar)
  "na moralzinha": [2, 5], // On the down low (sarcastic)
  "papo reto fdp": [2, 5], // Straight talk son of bitch
  "caraleo": [2, 5], // Caralho evasion variant
  "karamba": [2, 5], // Caramba evasion
  "pohha carai": [2, 5], // Porra caralho evasion
  "mds porr": [2, 5], // My God porra evasion

  // ========================================
  // === Portunhol (Portuguese-Spanish Mix Border Slang) ===
  // ========================================
  "hijo de puta": [5, 5], // Son of a bitch (Spanish in Brazil border)
  "la concha de tu madre": [5, 5], // Your mother's pussy (Argentine-border)
  "boludo de merda": [1, 4], // Shitty fool (Argentine-border)
  "pelotudo fdp": [3, 4], // Big-balled son of bitch (border)
  "la puta que te parió": [5, 4], // The whore that bore you (border)
  "anda a la mierda": [3, 5], // Go to shit (border)
  "anda cagar": [3, 5], // Go shit (border mix)
  "conchudo": [5, 5], // Brazen (border)
  "conchuda": [5, 5], // Brazen (female, border)
  "pendejo do caralho": [1, 4], // Fucking idiot (border)
  "boludo arrombado": [1, 4], // Fool broken open (border)
  "la puta madre": [5, 4], // The whore mother (border)
  "carajo de merda": [4, 5], // Shitty dick (border)
  "chinga tu madre": [3, 4], // Fuck your mother (Mexican-border)
  "verga del caralho": [4, 4], // Dick of the dick (border compound)
  "culero fdp": [3, 4], // Asshole son of bitch (border)
  "mierda de poronga": [4, 5], // Shit of a dick (border)
  "poronga de merda": [4, 5], // Shitty dick (border variant)
  "pija do caralho": [4, 5], // Fucking dick (border)
  "la re puta madre": [5, 4], // The re-whore mother (border intensified)
  "choto do caralho": [3, 5], // Fucking worthless (border)
  "forro de merda": [3, 5], // Shitty condom (border insult)

  // ========================================
  // === More Sexual Terms ===
  // ========================================
  "boquetão": [4, 5], // Big blowjob
  "chupar a xota": [4, 4], // Suck the pussy
  "comer a xereca": [4, 4], // Eat the pussy
  "dar a xota": [4, 4], // Give the pussy
  "enfiar a pica": [4, 4], // Insert the dick
  "foder a buceta": [4, 5], // Fuck the pussy
  "foder o rabo": [4, 5], // Fuck the ass
  "gozar dentro": [4, 4], // Cum inside
  "gozar fora": [4, 4], // Cum outside
  "lamber a buceta": [4, 4], // Lick the pussy
  "lamber a xota": [4, 4], // Lick the pussy (variant)
  "lamber o cu": [4, 4], // Lick the ass
  "mamar a pica": [4, 4], // Suck the dick (variant)
  "mamar a piroca": [4, 4], // Suck the dick (variant)
  "meter a rola": [4, 4], // Insert the dick (variant)
  "meter forte": [4, 5], // Fuck hard
  "meter fundo": [4, 5], // Fuck deep
  "pica dura": [4, 4], // Hard dick
  "pica grande": [4, 4], // Big dick
  "pica grossa": [4, 4], // Thick dick
  "pica mole": [4, 4], // Limp dick
  "piroca dura": [4, 4], // Hard dick (variant)
  "rola grande": [4, 4], // Big dick (variant)
  "rola grossa": [4, 4], // Thick dick (variant)
  "sentar gostoso": [4, 4], // Sit nice (sexual)
  "sentar no pau": [4, 4], // Sit on the dick
  "trepada gostosa": [4, 5], // Nice fuck
  "xereca molhada": [4, 4], // Wet pussy
  "xota gostosa": [4, 4], // Nice pussy
  "buceta apertada": [4, 4], // Tight pussy
  "buceta larga": [4, 4], // Loose pussy
  "cu apertado": [4, 4], // Tight ass
  "cu largo": [4, 4], // Loose ass
  "gozar na boca dela": [4, 4], // Cum in her mouth
  "gozar no rabo": [4, 4], // Cum in the ass
  "leite na cara": [4, 4], // Milk in the face (cum)
  "meter até o saco": [4, 5], // Fuck until the balls
  "pau gostoso": [4, 4], // Nice dick
  "sentar até o talo": [4, 4], // Sit until the base
  "chupar o grelo": [4, 4], // Suck the clitoris
  "dedo no cu": [4, 4], // Finger in the ass
  "punheta gostosa": [4, 4], // Nice handjob
  "siririca gostosa": [4, 4], // Nice female masturbation
  "chupada no pau": [4, 5], // Blowjob on the dick
  "chupada na buceta": [4, 4], // Oral on the pussy
  "foda violenta": [4, 5], // Violent fuck
  "comida de rabo": [4, 4], // Ass eating

  // ========================================
  // === More Insults and Slurs ===
  // ========================================
  "abobado": [1, 4], // Dazed/dumb
  "abobalhado": [1, 4], // Dazed/stupid
  "animal do caralho": [3, 5], // Fucking animal
  "babaovo": [1, 4], // Sycophant / bootlicker
  "bagaceira": [2, 4], // Trashy woman
  "bagaceiro": [2, 4], // Trashy man
  "barrigudo": [1, 4], // Big-bellied (insult)
  "bisonho": [1, 4], // Ugly/weird
  "bruxa": [1, 3], // Witch (insult)
  "burra": [1, 4], // Stupid (female)
  "caloteiro": [1, 4], // Deadbeat
  "caloteira": [1, 4], // Deadbeat (female)
  "canalha de merda": [3, 5], // Shitty scoundrel
  "capeta": [1, 4], // Devil/demon
  "chato do caralho": [3, 5], // Fucking annoying
  "cobra": [1, 3], // Snake (treacherous)
  "cretino de merda": [3, 5], // Shitty cretin
  "descarada": [1, 4], // Shameless (female)
  "descarado": [1, 4], // Shameless (male)
  "energúmeno": [1, 4], // Energumen/violent idiot
  "escória": [2, 4], // Scum/dregs
  "escrota": [3, 4], // Scummy (female)
  "estorvo": [1, 4], // Nuisance
  "fedorento": [1, 4], // Stinky (male)
  "fedorenta": [1, 4], // Stinky (female)
  "feia": [1, 4], // Ugly (female)
  "feio": [1, 4], // Ugly (male)
  "fracassado": [1, 4], // Failure/loser
  "fracassada": [1, 4], // Failure/loser (female)
  "franguinha": [1, 4], // Little chicken (coward, effeminate)
  "ignorante": [1, 4], // Ignorant
  "imundo": [2, 4], // Filthy (male)
  "imunda": [2, 4], // Filthy (female)
  "infeliz": [1, 4], // Unhappy/wretched person
  "maldito": [1, 4], // Damn/cursed (male)
  "maldita": [1, 4], // Damn/cursed (female)
  "maluco": [1, 4], // Crazy (male)
  "maluca": [1, 4], // Crazy (female)
  "mandrião": [1, 4], // Lazy bum
  "miserável do caralho": [3, 5], // Fucking wretch
  "monstra": [1, 3], // Monster (female insult)
  "monstro": [1, 3], // Monster (male insult)
  "morto de fome": [1, 4], // Starving (cheapskate insult)
  "mula": [1, 4], // Mule (stupid)
  "narigudo": [1, 4], // Big-nosed
  "orelhudo": [1, 4], // Big-eared
  "parasita": [1, 3], // Parasite
  "pé rapado": [1, 4], // Bare-footed (poor, insult)
  "picareta": [2, 4], // Scammer
  "porco imundo": [2, 4], // Filthy pig
  "preguiçoso": [1, 4], // Lazy (male)
  "preguiçosa": [1, 4], // Lazy (female)
  "pústula": [1, 4], // Pustule (insult)
  "ranhoso": [1, 4], // Snotty (male)
  "ranhosa": [1, 4], // Snotty (female)
  "resto de aborto": [5, 5], // Abortion leftovers (extreme insult)
  "seboso": [1, 4], // Greasy/gross (male)
  "sebosa": [1, 4], // Greasy/gross (female)
  "sujo": [1, 3], // Dirty (male)
  "suja": [1, 3], // Dirty (female)
  "toupeira": [1, 4], // Mole (blind/stupid)
  "vagal": [2, 4], // Vagrant (variant)
  "velho broxa": [2, 4], // Old impotent man
  "verme nojento": [3, 4], // Disgusting worm
  "aborto mal feito": [5, 5], // Badly done abortion (extreme insult)
  "catinga": [1, 4], // Body odor (insult)
  "catingoso": [1, 4], // Stinky person
  "chinelão": [1, 4], // Big flip-flop (cheap person)
  "crackudo": [2, 4], // Crack addict
  "drogadinho": [2, 4], // Little drug addict
  "escória humana": [3, 4], // Human scum
  "lixo ambulante": [2, 4], // Walking garbage
  "pedaço de bosta": [3, 4], // Piece of crap
  "podre por dentro": [2, 4], // Rotten inside
  "rato de esgoto": [2, 4], // Sewer rat
  "sanguessuga": [1, 3], // Leech (parasite)
  "trambiquer": [2, 4], // Scammer (variant)
  "traste": [1, 4], // Piece of junk (insult)
  "vadiagem": [2, 4], // Vagrancy/slutty behavior
  "vergonha da família": [2, 4], // Family shame

  // ========================================
  // === Extended Brazilian Profanity ===
  // ========================================
  "arrombado de merda do caralho": [3, 5], // Fucking shitty broken open
  "babaca de merda do caralho": [1, 4], // Fucking shitty idiot
  "besta de merda do caralho": [1, 4], // Fucking shitty fool
  "burro de merda do caralho": [3, 5], // Fucking shitty donkey
  "corno de merda do caralho": [3, 5], // Fucking shitty cuckold
  "cuzão de merda do caralho": [3, 5], // Fucking shitty asshole
  "desgraçado de merda do caralho": [3, 4], // Fucking shitty bastard
  "imbecil de merda do caralho": [3, 5], // Fucking shitty imbecile
  "otário de merda do caralho": [3, 5], // Fucking shitty sucker
  "piranha de merda do caralho": [3, 5], // Fucking shitty slut
  "puta de merda do caralho": [5, 5], // Fucking shitty whore
  "retardado de merda do caralho": [3, 5], // Fucking shitty retard
  "safado de merda do caralho": [3, 5], // Fucking shitty pervert
  "trouxa de merda do caralho": [1, 4], // Fucking shitty fool
  "vaca de merda do caralho": [3, 5], // Fucking shitty cow
  "vagabunda de merda do caralho": [3, 5], // Fucking shitty slut
  "vagabundo de merda do caralho": [3, 5], // Fucking shitty bum
  "viado de merda do caralho": [3, 5], // Fucking shitty fag
  "verme de merda do caralho": [3, 5], // Fucking shitty worm

  // ========================================
  // === Angola Portuguese Profanity ===
  // ========================================
  "cabrão da merda": [3, 4], // Bastard of shit (Angola)
  "cornudo de merda": [3, 5], // Shitty cuckold (Angola)
  "foder a mãe toda": [3, 5], // Fuck the whole mother (Angola)
  "grande puta": [5, 4], // Big whore (Angola)
  "ir pro caralho todo": [4, 4], // Go completely to dick (Angola)
  "mambo de merda": [3, 5], // Shitty matter (Angola slang)
  "monangamba de merda": [3, 5], // Shitty slave (Angola offensive)
  "mulato de merda": [3, 5], // Shitty mixed-race (Angola offensive)
  "pila": [4, 4], // Dick (Angola/PT)
  "pila grande": [4, 4], // Big dick (Angola)
  "pila pequena": [4, 4], // Small dick (Angola)
  "pilantra de merda": [3, 5], // Shitty crook (Angola)
  "pontapé no cu": [3, 4], // Kick in the ass (Angola)
  "quimbunda": [5, 4], // Insult (Angola ethnic slur)
  "vai para a pila": [4, 4], // Go to the dick (Angola)
  "vai para o raio que te parta": [3, 4], // Go to the lightning (Angola curse)

  // ========================================
  // === Mozambique Portuguese Profanity ===
  // ========================================
  "chamar nomes": [3, 4], // Call names (Mozambique insult)
  "dar porrada": [3, 4], // Give beatings (Mozambique)
  "foda-se mano": [3, 5], // Fuck it bro (Mozambique)
  "grande cabrão do caralho": [3, 4], // Fucking big bastard (Mozambique)
  "ir mamar": [3, 4], // Go suck (Mozambique)
  "machimbombo de merda": [3, 5], // Shitty bus (Mozambique insult)
  "mana puta": [5, 4], // Sister whore (Mozambique)
  "pila no cu": [4, 4], // Dick in the ass (Mozambique)
  "vai para a cona": [5, 5], // Go to the cunt (Mozambique)
  "vai levar porrada": [3, 4], // Go take beatings (Mozambique)

  // ========================================
  // === Cape Verde Portuguese Profanity ===
  // ========================================
  "badiu de merda": [3, 5], // Shitty islander (CV offensive)
  "ca bu mãe": [3, 4], // Your mother (CV Creole insult)
  "cona da tua mãe": [5, 5], // Your mother's cunt (CV)
  "filho de cadela": [3, 4], // Son of a bitch (CV)
  "filha de cadela": [3, 4], // Daughter of a bitch (CV)
  "grande porca": [3, 4], // Big pig (female, CV)
  "grande porco": [3, 4], // Big pig (male, CV)
  "mama piça": [4, 4], // Suck the dick (CV)
  "piça de burro": [4, 4], // Donkey's dick (CV)
  "vai mamar piça": [4, 4], // Go suck dick (CV)

  // ========================================
  // === Extended Portugal Portuguese ===
  // ========================================
  "atirar à cona": [5, 5], // Throw to the cunt (PT vulgar)
  "badalhoca do caralho": [3, 5], // Fucking filthy woman (PT)
  "bêbedo do caralho": [1, 3], // Fucking drunk (PT)
  "brochista": [3, 4], // Impotent (PT variant)
  "burra da merda": [1, 4], // Stupid shit (female, PT)
  "cabrão da tua mãe": [3, 4], // Your mother's bastard (PT)
  "cabrão filho da puta": [3, 4], // Bastard son of a bitch (PT)
  "caralhada grande": [4, 4], // Big dick move (PT)
  "caralhudo do caralho": [4, 5], // Big-dicked fucker (PT)
  "coiro do caralho": [1, 4], // Fucking ugly person (PT)
  "conas de merda": [5, 5], // Shitty cunts (PT)
  "cornudo do caralho": [3, 5], // Fucking cuckold (PT)
  "cu aberto": [3, 4], // Open ass (PT insult)
  "cona aberta": [5, 5], // Open cunt (PT insult)
  "cona molhada": [5, 5], // Wet cunt (PT)
  "cona seca": [5, 5], // Dry cunt (PT)
  "esporro todo": [3, 4], // Full cum (PT)
  "esporrada na cara": [3, 4], // Ejaculation on face (PT)
  "foda-se caralho porra": [3, 5], // Fuck damn cum (PT triple expletive)
  "foder a cona toda": [5, 5], // Fuck the whole cunt (PT)
  "foder o cu todo": [3, 5], // Fuck the whole ass (PT)
  "foder-se todo": [3, 5], // Fuck oneself completely (PT)
  "fufa do caralho": [3, 5], // Fucking dyke (PT)
  "ir para o caralho mais velho": [4, 4], // Go to the oldest dick (PT)
  "ir para o cu da tua mãe": [3, 4], // Go to your mother's ass (PT variant)
  "levar no cu todo": [3, 4], // Take it all in the ass (PT)
  "mama na piça do teu pai": [1, 4], // Suck your father's dick (PT)
  "maricas do caralho": [3, 5], // Fucking faggot (PT)
  "paneleiro do caralho": [3, 5], // Fucking faggot (PT variant)
  "paneleira do caralho": [3, 5], // Fucking dyke (PT)
  "piça de merda": [4, 5], // Shitty dick (PT)
  "piça grande": [4, 4], // Big dick (PT)
  "piça pequena": [4, 4], // Small dick (PT)
  "piça torta": [4, 4], // Bent dick (PT)
  "putedo de merda": [3, 5], // Shitty brothel (PT)
  "rata da merda": [4, 5], // Shitty pussy (PT)
  "rata molhada": [4, 4], // Wet pussy (PT)
  "tomar na cona": [5, 5], // Take it in the cunt (PT)
  "vai levar na cona": [5, 5], // Go take it in the cunt (PT)
  "vai para a cona da tua mãe": [5, 5], // Go to your mother's cunt (PT)
  "vai para o cu da tua avó": [3, 4], // Go to your grandmother's ass (PT)

  // ========================================
  // === Extended Northeastern Brazilian ===
  // ========================================
  "arretado de porra": [3, 5], // Damn fuck (NE)
  "arretado de merda": [3, 5], // Damn shit (NE)
  "besta do caralho": [1, 4], // Fucking fool (NE)
  "bizonho de merda": [1, 4], // Shitty ugly (NE)
  "brocado de merda": [3, 5], // Shitty horny (NE)
  "cabra safado de merda": [3, 5], // Shitty dirty dude (NE)
  "cabra desgraçado de merda": [3, 5], // Shitty wretched dude (NE)
  "cabra safado do caralho": [3, 5], // Fucking dirty dude (NE)
  "comer a mãe e a irmã": [3, 5], // Fuck the mother and sister (NE)
  "cu de boi de merda": [3, 5], // Shitty ox's ass (NE)
  "cu de jegue de merda": [3, 5], // Shitty donkey's ass (NE)
  "desconjuntado de merda": [3, 5], // Shitty disjointed (NE)
  "égua do caralho de merda": [3, 5], // Fucking shitty mare (NE)
  "égua puta de merda": [5, 5], // Shitty mare whore (NE)
  "filho de rapariga de merda": [3, 5], // Shitty son of a slut (NE)
  "fresco do cu de merda": [3, 5], // Shitty ass fresh (NE)
  "mala sem alça de merda": [3, 5], // Shitty annoying person (NE)
  "marmota de merda": [1, 4], // Shitty fool (NE)
  "mocreia de merda": [1, 4], // Shitty ugly woman (NE)
  "peba de merda": [3, 5], // Shitty pathetic person (NE)
  "pivete de merda do caralho": [3, 5], // Fucking shitty kid (NE)
  "quenga arrombada de merda": [5, 5], // Shitty broken prostitute (NE)
  "rapariga arrombada": [3, 4], // Broken slut (NE)
  "rapariga de merda do caralho": [3, 5], // Fucking shitty slut (NE)
  "tabacudo de merda": [3, 5], // Shitty big-lipped (NE)
  "tchola de merda": [3, 5], // Shitty gay (NE)

  // ========================================
  // === Extended Southern Brazilian ===
  // ========================================
  "barbaridade do caralho": [3, 5], // Fucking damn (RS)
  "bah porra do caralho": [3, 4], // Gaúcho triple expletive
  "butiá descascado de merda": [1, 4], // Shitty ugly (RS)
  "cusco safado de merda": [3, 5], // Shitty dirty mutt (RS)
  "gringo filho da puta de merda": [3, 5], // Shitty foreigner SOB (RS)
  "guria puta de merda": [5, 5], // Shitty whore girl (RS)
  "guri safado de merda": [3, 5], // Shitty dirty boy (RS)
  "tchê porra do caralho": [3, 4], // Gaúcho triple expletive
  "tri arrombado de merda": [3, 5], // Very broken shitty (RS)
  "tri cuzão de merda": [3, 5], // Very shitty asshole (RS)
  "tri fdp de merda": [3, 5], // Very shitty SOB (RS)
  "tri otário de merda": [1, 4], // Very shitty fool (RS)
  "bah tri merda": [3, 5], // Very shit (RS)
  "tri safado de merda": [3, 5], // Very shitty pervert (RS)
  "tri vagabundo de merda": [3, 5], // Very shitty bum (RS)
  "piá safado de merda": [3, 5], // Shitty dirty kid (RS)
  "piá fdp do caralho": [3, 5], // Fucking SOB kid (RS)
  "guria safada do caralho": [3, 5], // Fucking dirty girl (RS)

  // ========================================
  // === Extended Rio de Janeiro Slang ===
  // ========================================
  "caralho mermão do caralho": [4, 5], // Dick bro fucker (carioca)
  "é o caralho de merda": [4, 5], // It's the shitty dick (carioca)
  "foda-se mermão do caralho": [3, 5], // Fuck it bro fucker (carioca)
  "maluco do caralho de merda": [3, 5], // Fucking shitty crazy (carioca)
  "mané do caralho de merda": [1, 4], // Fucking shitty stupid (carioca)
  "mermão do caralho de merda": [3, 5], // Fucking shitty bro (carioca)
  "porra mané do caralho": [1, 4], // Fuck stupid fucker (carioca)
  "porra mermão do caralho": [3, 5], // Fuck bro fucker (carioca)
  "vagabundo do caralho de merda": [3, 5], // Fucking shitty bum (carioca)
  "menor safado de merda": [3, 5], // Shitty dirty kid (carioca)
  "alemão safado de merda": [3, 5], // Shitty dirty enemy (carioca)
  "cria do diabo de merda": [3, 5], // Shitty devil's spawn (carioca)
  "sangue bom fdp": [3, 4], // Good blood SOB (carioca ironic)
  "irmão fdp do caralho": [3, 5], // Fucking SOB brother (carioca)
  "parceiro fdp": [3, 4], // SOB partner (carioca)
  "chapa fdp do caralho": [3, 5], // Fucking SOB buddy (carioca)

  // ========================================
  // === Extended São Paulo Slang ===
  // ========================================
  "mano do caralho de merda": [3, 5], // Fucking shitty bro (SP)
  "mano otário de merda": [1, 4], // Shitty fool bro (SP)
  "mina vadia de merda": [3, 5], // Shitty slutty girl (SP)
  "mlk fdp de merda": [3, 5], // Shitty SOB kid (SP)
  "nóia do caralho de merda": [3, 5], // Fucking shitty junkie (SP)
  "porra mano do caralho": [3, 5], // Fuck bro fucker (SP)
  "truta fdp de merda": [3, 5], // Shitty SOB homie (SP)
  "véio safado de merda": [3, 5], // Shitty dirty old man (SP)
  "véia safada de merda": [3, 5], // Shitty dirty old woman (SP)
  "zé buceta de merda": [4, 5], // Shitty Joe pussy (SP)
  "zé ruela de merda": [3, 5], // Shitty Joe asshole (SP)
  "zé mané de merda": [1, 4], // Shitty Joe stupid (SP)
  "moleque fdp de merda": [3, 5], // Shitty SOB kid (SP variant)
  "mina fdp do caralho": [3, 5], // Fucking SOB girl (SP)
  "brother fdp de merda": [3, 5], // Shitty SOB brother (SP)
  "parça fdp do caralho": [3, 5], // Fucking SOB pal (SP)
  "véio broxa de merda": [3, 5], // Shitty old impotent (SP)

  // ========================================
  // === Extended Minas Gerais Slang ===
  // ========================================
  "uai porra do caralho": [3, 4], // MG triple expletive
  "trem do caralho de merda": [3, 5], // Fucking shitty thing (MG)
  "trem arrombado de merda": [3, 5], // Shitty broken thing (MG)
  "nó tio que porra é essa": [3, 4], // Damn uncle WTF (MG)
  "vai tomar no cu sô de merda": [3, 5], // Go get fucked shitty buddy (MG)
  "cê é besta demais do caralho": [1, 4], // You're too fucking stupid (MG)
  "sô do caralho de merda": [3, 5], // Fucking shitty buddy (MG)
  "cê é burro pra caralho de merda": [1, 4], // You're fucking shitty stupid (MG)
  "uai trem de merda": [3, 5], // Damn shitty thing (MG)
  "trem porco de merda": [3, 5], // Shitty dirty thing (MG)
  "cê é um trem de merda": [3, 5], // You're a shitty thing (MG)
  "trem nojento de merda": [3, 5], // Shitty disgusting thing (MG)
  "sô arrombado do caralho": [3, 5], // Fucking broken buddy (MG)
  "sô safado do caralho": [3, 5], // Fucking dirty buddy (MG)
  "sô otário do caralho": [1, 4], // Fucking fool buddy (MG)

  // ========================================
  // === Extended Bahia Slang ===
  // ========================================
  "mah ôxe porra do caralho": [3, 4], // Bahia triple expletive
  "ave maria porra do caralho": [3, 5], // Holy Mary fuck (Bahia triple)
  "ôxe do caralho de merda": [3, 5], // Fucking shitty damn (Bahia)
  "piranha oxente de merda": [3, 5], // Shitty damn slut (Bahia)
  "corno da porra de merda": [3, 5], // Shitty damn cuckold (Bahia)
  "vei safado do caralho de merda": [3, 5], // Fucking shitty dirty old man (Bahia)
  "cabra safado da porra de merda": [3, 5], // Shitty damn dirty dude (Bahia)
  "bicha do caralho de merda": [3, 5], // Fucking shitty fag (Bahia)
  "ôxe velho safado": [3, 4], // Damn dirty old man (Bahia)
  "ôxe piranha arrombada": [3, 4], // Damn broken slut (Bahia)
  "ôxe corno manso": [3, 4], // Damn tame cuckold (Bahia)
  "oxente fdp do caralho": [3, 5], // Damn fucking SOB (Bahia)

  // ========================================
  // === Extended Internet/Gaming Slang ===
  // ========================================
  "arrombado do krl de merda": [3, 5], // Broken open fucker shitty (texting)
  "bct de merda": [4, 5], // Shitty pussy (texting)
  "canceroso de merda": [3, 5], // Shitty cancerous (gaming)
  "canceroso do krl": [3, 5], // Cancerous fucker (gaming)
  "crlh de merda": [4, 5], // Shitty dick (texting)
  "cu de ferro de merda": [3, 5], // Shitty iron ass (gaming)
  "fdp do krl de merda": [3, 5], // Shitty SOB fucker (texting)
  "fds de merda": [3, 5], // Shitty fuck it (texting)
  "filhodaputa de merda": [3, 5], // Shitty SOB (texting)
  "flw fdp de merda": [3, 5], // Bye shitty SOB (texting)
  "gg fdp de merda": [3, 5], // GG shitty SOB (gaming)
  "kid burro de merda": [1, 4], // Shitty stupid kid (gaming)
  "lixão de merda": [3, 5], // Shitty big garbage (gaming)
  "lixo do caralho de merda": [3, 5], // Fucking shitty garbage (gaming)
  "noob fdp de merda": [3, 5], // Shitty noob SOB (gaming)
  "retardado do krl de merda": [3, 5], // Fucking shitty retard (texting)
  "vai cagar de merda": [3, 5], // Go shit shitty (redundant intensifier)
  "vai pro krl de merda": [4, 5], // Go to shitty dick (texting)
  "vtnc mano de merda": [3, 5], // Take it shitty bro (texting)
  "hacker fdp": [2, 3], // Hacker SOB (gaming)
  "cheater fdp": [2, 3], // Cheater SOB (gaming)
  "tryhard fdp": [2, 3], // Tryhard SOB (gaming)
  "camper fdp": [2, 3], // Camper SOB (gaming)
  "feeder fdp": [2, 3], // Feeder SOB (gaming)
  "toxic fdp": [2, 3], // Toxic SOB (gaming)
  "bot de merda": [3, 5], // Shitty bot (gaming)
  "bot do caralho": [3, 5], // Fucking bot (gaming)
  "aimbot fdp": [2, 3], // Aimbot SOB (gaming)
  "wallhack fdp": [2, 3], // Wallhack SOB (gaming)
  "rage quit fdp": [2, 3], // Rage quit SOB (gaming)
  "lag fdp": [2, 3], // Lag SOB (gaming)
  "desinstala fdp": [2, 3], // Uninstall SOB (gaming)
  "deleta o jogo fdp": [2, 3], // Delete game SOB (gaming)

  // ========================================
  // === Extended Sexual Terms ===
  // ========================================
  "boquetão de merda": [4, 5], // Shitty big blowjob
  "chupar a xota de merda": [4, 5], // Suck the shitty pussy
  "comer a xereca de merda": [4, 5], // Eat the shitty pussy
  "dar a xota de merda": [4, 5], // Give the shitty pussy
  "enfiar a pica de merda": [4, 5], // Insert the shitty dick
  "foder a buceta toda": [4, 5], // Fuck the whole pussy
  "foder o rabo todo": [4, 5], // Fuck the whole ass
  "gozar dentro de merda": [4, 5], // Cum inside shitty
  "lamber a buceta toda": [4, 4], // Lick the whole pussy
  "lamber a xota toda": [4, 4], // Lick the whole pussy variant
  "lamber o cu todo": [4, 4], // Lick the whole ass
  "mamar a pica toda": [4, 4], // Suck the whole dick
  "meter a rola toda": [4, 4], // Insert the whole dick
  "meter forte de merda": [4, 5], // Fuck hard shitty
  "meter fundo de merda": [4, 5], // Fuck deep shitty
  "pica dura de merda": [4, 5], // Shitty hard dick
  "rola grande de merda": [4, 5], // Shitty big dick
  "sentar na pica toda": [4, 4], // Sit on the whole dick
  "trepada de merda": [4, 5], // Shitty fuck
  "xerecão de merda": [4, 5], // Shitty big pussy
  "buceta apertada de merda": [4, 5], // Shitty tight pussy
  "cu largo de merda": [4, 5], // Shitty loose ass
  "pau duro no cu": [4, 4], // Hard dick in ass
  "pau mole de merda": [4, 5], // Shitty limp dick
  "pirocão no cu": [4, 4], // Big dick in the ass
  "rola na buceta": [4, 4], // Dick in pussy
  "rola no cu": [4, 4], // Dick in ass
  "pica na boca": [4, 4], // Dick in mouth
  "gozada na cara": [4, 4], // Cum shot on face
  "leitada na boca": [4, 4], // Milk shot in mouth
  "leitada na cara": [4, 4], // Milk shot on face
  "leitada no cu": [4, 4], // Milk shot in ass
  "chupar até secar": [4, 4], // Suck until dry
  "meter até gozar": [4, 5], // Fuck until cum
  "foder até cansar": [4, 5], // Fuck until tired
  "comer o cu e a buceta": [4, 4], // Eat the ass and pussy
  "meter no cu e na boca": [4, 4], // Insert in ass and mouth
  "chupar a rola toda": [4, 4], // Suck the whole dick
  "sentar no pau todo": [4, 4], // Sit on the whole dick
  "meter gostoso no cu": [4, 5], // Fuck the ass nicely
  "dar o cu gostoso": [4, 4], // Give the ass nicely
  "comer a buceta toda": [4, 4], // Eat the whole pussy
  "lamber o cu inteiro": [4, 4], // Lick the whole ass

  // ========================================
  // === Extended Evasion Spellings ===
  // ========================================
  "c4r4lho": [4, 5], // Dick evasion
  "buc3t4": [4, 5], // Pussy evasion
  "f0d4-se": [3, 5], // Fuck it evasion
  "p0rr4": [3, 5], // Cum evasion
  "m3rd4": [3, 5], // Shit evasion
  "put4 que p4riu": [3, 5], // SOB evasion
  "c@r@lho": [4, 5], // Dick evasion
  "buc#t@": [4, 5], // Pussy evasion
  "f*da-se": [3, 5], // Fuck it evasion
  "p*rr@": [3, 5], // Cum evasion
  "m*rd@": [3, 5], // Shit evasion
  "put@ que p@riu": [3, 5], // SOB evasion
  "v!@do": [3, 5], // Faggot evasion
  "arr0mb@do": [3, 5], // Broken evasion
  "cuz@0": [3, 5], // Asshole evasion
  "p1r@nha": [3, 5], // Slut evasion
  "r0l@": [4, 5], // Dick evasion
  "p1c@": [4, 5], // Dick evasion
  "p1r0c@": [4, 5], // Dick evasion
  "b0st@": [3, 5], // Crap evasion
  "c0rn0": [3, 5], // Cuckold evasion
  "karalh0": [4, 5], // Dick evasion
  "karai0": [4, 5], // Dick evasion
  "p0hha": [3, 5], // Cum evasion
  "busc3ta": [4, 5], // Pussy evasion
  "bucet@": [4, 5], // Pussy evasion
  "f0dase": [3, 5], // Fuck it evasion
  "c4cete": [4, 5], // Dick evasion
  "b4baca": [1, 5], // Idiot evasion
  "cr3tino": [3, 5], // Cretin evasion
  "1diota": [1, 5], // Idiot evasion
  "1mbecil": [3, 5], // Imbecile evasion
  "tr0uxa": [1, 5], // Fool evasion
  "v@gabunda": [3, 5], // Slut evasion
  "v@gabundo": [3, 5], // Bum evasion
  "des gr@çado": [3, 5], // Bastard evasion
  "arr0nbado": [3, 5], // Broken evasion variant
  "f1lho da put@": [3, 5], // SOB evasion
  "v@i se f0der": [3, 5], // Go fuck yourself evasion
  "v@i tom@r no cu": [3, 5], // Go take it evasion

  // ========================================
  // === Extended Compound Phrases ===
  // ========================================
  "vai tomar no meio do olho do cu": [3, 5], // Take it in the middle of asshole
  "vai chupar o cu da mãe e do pai": [3, 5], // Suck parents' asses
  "enfia essa porra no cu e roda": [3, 5], // Shove and spin
  "mete essa rola no cu e gira": [3, 5], // Stick and spin
  "enfiar a rola no cu e girar": [3, 5], // Shove and spin variant
  "mama minha pica e engole": [4, 5], // Suck my dick and swallow
  "chupa meu saco e engole": [4, 5], // Suck my balls and swallow
  "lambe meu cu e engole": [3, 5], // Lick my ass and swallow
  "senta nessa pica e goza": [4, 5], // Sit on dick and cum
  "vai dar o cu pro diabo": [3, 5], // Go give ass to devil
  "vai chupar uma rola de cavalo": [4, 5], // Go suck a horse's dick
  "vai mamar uma piroca de burro": [4, 5], // Go suck a donkey's dick
  "vai dar a buceta pro cachorro": [4, 5], // Go give pussy to dog
  "toma no rabo e no cu": [3, 5], // Take in both asses
  "mete no rabo e na boca": [3, 5], // Stick in ass and mouth
  "enfiar no cu e na boca": [3, 5], // Shove in ass and mouth
  "chupa até sair sangue": [3, 5], // Suck until bleed
  "pau na tua boca até engasgar": [4, 5], // Dick in mouth until gag
  "rola na tua cara até cegar": [4, 5], // Dick on face until blind
  "porra na tua cara até afogar": [3, 5], // Cum on face until drown
  "saco de merda ambulante fedido": [3, 5], // Walking stinky bag of shit
  "monte de bosta fedida": [3, 5], // Pile of stinky crap
  "pedaço de merda podre": [3, 5], // Piece of rotten shit
  "cara de merda fedida": [3, 5], // Stinky shit face
  "boca de buceta fedida": [4, 5], // Stinky pussy mouth
  "olho do cu cabeludo": [3, 5], // Hairy asshole
  "cu de porco fedido": [3, 5], // Stinky pig's ass
  "rabo de vaca fedido": [3, 5], // Stinky cow's ass
  "cu de macaco fedido": [3, 5], // Stinky monkey's ass
  "merda de gente fedida": [3, 5], // Stinky shit person

  // ========================================
  // === Extended Body Part Vulgarities ===
  // ========================================
  "bocetona": [4, 3], // Big pussy (augmentative)
  "bocetuda grande": [4, 3], // Big big-pussy
  "boquinha de merda": [4, 5], // Shitty little mouth
  "bundona": [4, 3], // Big butt
  "bunduda grande": [4, 3], // Big big-butted
  "cacetada": [4, 3], // Dick hit
  "cacetudo": [4, 3], // Big-dicked
  "caralho grande": [4, 3], // Big dick
  "caralho grosso": [4, 3], // Thick dick
  "caralho mole": [4, 3], // Limp dick
  "caralho torto": [4, 3], // Bent dick
  "clitoris grande": [4, 3], // Big clitoris
  "cu cabeludo": [4, 3], // Hairy ass
  "cu de fora": [4, 3], // Ass out
  "cu gordo": [1, 4], // Fat ass
  "cu grande": [4, 3], // Big ass
  "cu magro": [4, 3], // Skinny ass
  "cu peludo grande": [4, 3], // Big hairy ass
  "culhão grande": [4, 3], // Big testicle
  "grelo grande": [4, 3], // Big clitoris
  "grelo inchado": [4, 3], // Swollen clitoris
  "mama grande": [4, 3], // Big breast
  "mamilo grande": [4, 3], // Big nipple
  "peitão": [4, 3], // Big breast
  "peituda grande": [4, 3], // Big big-breasted
  "pentelhona": [4, 3], // Very hairy-pubed (female)
  "pentelhudo grande": [4, 3], // Very hairy-pubed (male)
  "periquita grande": [4, 3], // Big pussy variant
  "pica grossa de merda": [4, 5], // Shitty thick dick
  "picudo": [4, 3], // Pointy/big-dicked
  "piroca grande": [4, 3], // Big dick
  "piroca grossa": [4, 3], // Thick dick
  "piroca mole": [4, 3], // Limp dick
  "piroca torta": [4, 3], // Bent dick
  "rabo gordo": [1, 4], // Fat ass
  "rabo grande": [4, 3], // Big ass
  "rola fina": [4, 3], // Thin dick
  "saco grande": [4, 3], // Big ball sack
  "saco peludo": [4, 3], // Hairy ball sack
  "teta enorme": [4, 3], // Enormous tit
  "tetona grande": [4, 3], // Big titted large
  "tetuda enorme": [4, 3], // Enormous titted
  "xota grande": [4, 3], // Big pussy
  "xota larga": [4, 3], // Wide pussy
  "xereca grande": [4, 3], // Big pussy
  "xereca larga": [4, 3], // Wide pussy

  // ========================================
  // === Extended Favela/Street Slang ===
  // ========================================
  "boca de fumo de merda": [3, 5], // Shitty drug point
  "bonde do caralho de merda": [3, 5], // Fucking shitty gang
  "caguetou de merda": [3, 5], // Shitty snitched
  "cheirador de merda": [3, 5], // Shitty coke snorter
  "cuzinheiro de merda": [3, 5], // Shitty ass man
  "favelado de merda do caralho": [3, 5], // Fucking shitty slum dweller
  "gambé fdp de merda": [3, 5], // Shitty cop SOB
  "maloqueiro fdp de merda": [3, 5], // Shitty thug SOB
  "merdinha do caralho": [3, 5], // Fucking little shit
  "moleque de merda do caralho": [3, 5], // Fucking shitty kid
  "noia do caralho de merda": [3, 5], // Fucking shitty junkie
  "noiado de merda": [3, 5], // Shitty high
  "playboy de merda do caralho": [3, 5], // Fucking shitty rich kid
  "traficante de merda do caralho": [3, 5], // Fucking shitty dealer
  "trombadinha de merda": [3, 5], // Shitty pickpocket kid
  "vida loka de merda": [3, 5], // Shitty crazy life
  "X9 do caralho de merda": [3, 5], // Fucking shitty snitch
  "cria de merda": [3, 5], // Shitty spawn
  "menor infrator fdp": [3, 4], // Juvenile offender SOB
  "pivete arrombado": [3, 4], // Broken kid
  "maconheiro fdp": [3, 4], // Pothead SOB
  "crackeiro de merda": [3, 5], // Shitty crack addict
  "noiado do caralho": [3, 5], // Fucking junkie
  "cheirado de merda": [3, 5], // Shitty snorted
  "brisado de merda": [3, 5], // Shitty high
  "chapado fdp": [3, 4], // Stoned SOB
  "doidão fdp": [3, 4], // Crazy SOB
  "maluco beleza fdp": [3, 4], // Crazy good SOB (ironic)

  // ========================================
  // === Extended Portunhol Border Slang ===
  // ========================================
  "hijo de puta de merda": [3, 5], // Shitty SOB (border)
  "la concha de tu madre porra": [4, 4], // Your mother's pussy cum (border)
  "boludo de merda do caralho": [1, 4], // Fucking shitty fool (border)
  "pelotudo fdp de merda": [3, 5], // Shitty big-balled SOB (border)
  "anda a la mierda do caralho": [3, 5], // Go to fucking shit (border)
  "anda cagar do caralho": [3, 5], // Go fucking shit (border)
  "conchudo de merda do caralho": [3, 5], // Fucking shitty brazen (border)
  "pendejo do caralho de merda": [1, 4], // Fucking shitty idiot (border)
  "boludo arrombado de merda": [1, 4], // Shitty broken fool (border)
  "carajo de merda do caralho": [4, 5], // Fucking shitty dick (border)
  "chinga tu madre do caralho": [3, 5], // Fucking fuck your mother (border)
  "poronga de merda do caralho": [4, 5], // Fucking shitty dick (border)
  "forro de merda do caralho": [3, 5], // Fucking shitty condom (border)
  "pelotudo arrombado": [3, 4], // Big-balled broken (border)
  "boludo cornudo": [1, 4], // Foolish cuckold (border)
  "conchudo arrombado": [3, 4], // Brazen broken (border)

  // ========================================
  // === Extended Pará/Northern Slang ===
  // ========================================
  "curumim safado de merda": [3, 5], // Shitty dirty kid (Pará)
  "caboclo fdp de merda": [3, 5], // Shitty mixed-race SOB (Pará)
  "porra egua de merda": [3, 5], // Shitty damn mare (Pará)
  "égua da puta de merda": [5, 5], // Shitty whore mare (Pará)
  "caralho bicho de merda": [4, 5], // Shitty dick dude (Pará)
  "bicho fdp de merda": [3, 5], // Shitty dude SOB (Pará)
  "maninho fdp do caralho": [3, 5], // Fucking SOB buddy (Pará)
  "primo fdp do caralho": [3, 5], // Fucking SOB cousin (Pará)
  "égua primo do caralho": [3, 5], // Damn fucking cousin (Pará)

  // ========================================
  // === Extended Pernambuco Slang ===
  // ========================================
  "aff porra do caralho": [4, 5], // Damn dick fuck (PE)
  "cabra da peste desgraçado de merda": [3, 4], // Shitty stubborn bastard (PE)
  "eita porra do caralho de merda": [3, 5], // Fucking shitty damn (PE)
  "besta porra de merda": [1, 4], // Shitty stupid fuck (PE)
  "arrombado da peste de merda": [3, 5], // Shitty stubborn broken (PE)
  "vixe porra do caralho": [3, 5], // Holy shit (PE triple)
  "mainha fdp de merda": [3, 5], // Shitty mom SOB (PE ironic)
  "quenga do caralho": [5, 5], // Fucking prostitute (PE)

  // ========================================
  // === Extended Ceará Slang ===
  // ========================================
  "rapaz do caralho de merda": [3, 5], // Fucking shitty boy (CE)
  "abestado do caralho de merda": [1, 4], // Fucking shitty fool (CE)
  "cabra macho fdp de merda": [3, 5], // Shitty tough SOB (CE)
  "mermão porra de merda": [3, 5], // Shitty bro fuck (CE)
  "rapaz desgraçado de merda": [3, 5], // Shitty wretched boy (CE)
  "abestalhado do caralho": [1, 4], // Fucking dumbfounded (CE)
  "doido do caralho": [3, 5], // Fucking crazy (CE)
  "macho fdp do caralho": [3, 5], // Fucking SOB tough guy (CE)

  // ========================================
  // === Extended Goiás/Centro-Oeste ===
  // ========================================
  "uai do caralho de merda": [3, 5], // Fucking shitty damn (GO)
  "trem fdp de merda": [3, 5], // Shitty fucking thing (GO)
  "cê é trouxa demais de merda": [1, 4], // You're too shitty foolish (GO)
  "porra sertanejo de merda": [3, 5], // Shitty country fuck (GO)
  "trem goiano fdp": [3, 4], // Goiás thing SOB (GO)
  "uai sô fdp": [3, 4], // Damn buddy SOB (GO)
  "cê é um trem fdp": [3, 4], // You're a thing SOB (GO)

  // ========================================
  // === Extended Internet Evasions ===
  // ========================================
  "krl mano de merda": [4, 5], // Dick shitty bro
  "pfv fdp de merda": [3, 5], // Please shitty SOB
  "tmj krl de merda": [4, 5], // Together shitty dick
  "kkk fdp de merda": [3, 5], // Laughing shitty SOB
  "slc krl de merda": [4, 5], // Damn shitty dick
  "mds fdp de merda": [3, 5], // My God shitty SOB
  "pqp krl de merda": [4, 5], // Holy shit dick shitty
  "vsf krl de merda": [4, 5], // Go fuck yourself shitty dick
  "vtnc krl de merda": [4, 5], // Take it shitty dick
  "mn do krl de merda": [3, 5], // Shitty bro fucker
  "mlk fdp krl de merda": [4, 5], // Shitty kid SOB dick
  "glr fdp de merda": [3, 5], // Shitty guys SOB
  "poh fdp krl": [2, 5], // Porra fdp caralho compound
  "krllll": [2, 5], // Caralho extended
  "fdpppp": [2, 5], // FDP extended
  "vsffff": [2, 5], // VSF extended
  "vtnccc": [2, 5], // VTNC extended
  "pqpppp": [2, 5], // PQP extended
  "mdsss": [2, 5], // MDS extended
  "slccc": [2, 5], // SLC extended
  "ksksks fdp": [2, 5], // Laughing SOB
  "hauahuaha fdp": [2, 5], // Laughing SOB variant
  "kkkk fdp krl": [4, 5], // Laughing SOB dick
  "poha mano krl": [2, 5], // Porra mano caralho (evasion compound)
  "krll poha vsf": [2, 5], // Caralho porra VSF compound
  "mdsss poha krl": [2, 5], // MDS porra caralho compound

  // ========================================
  // === Extended Racial/Ethnic Slurs ===
  // ========================================
  "macaco de merda": [5, 5], // Shitty monkey (racial)
  "macaca de merda": [5, 5], // Shitty monkey (female, racial)
  "negro de merda": [5, 5], // Shitty black (racial)
  "negra de merda": [5, 5], // Shitty black (female, racial)
  "preto de merda": [5, 5], // Shitty black (racial variant)
  "preta de merda": [5, 5], // Shitty black (female, racial)
  "crioulo de merda": [5, 5], // Shitty creole (racial)
  "crioula de merda": [5, 5], // Shitty creole (female, racial)
  "mulata de merda": [5, 5], // Shitty mixed-race (female, racial)
  "caboclo de merda": [5, 5], // Shitty mixed indigenous (racial)
  "cabocla de merda": [5, 5], // Shitty mixed indigenous (female, racial)
  "índio de merda": [5, 5], // Shitty indigenous (racial)
  "índia de merda": [5, 5], // Shitty indigenous (female, racial)
  "japa de merda": [5, 5], // Shitty Japanese (racial)
  "china de merda": [5, 5], // Shitty Chinese (racial)
  "gringo de merda fdp": [5, 5], // Shitty foreigner SOB
  "baiano de merda": [5, 5], // Shitty Bahian (regional prejudice)
  "paraíba de merda": [5, 5], // Shitty Paraíba (regional prejudice)
  "nordestino de merda": [5, 5], // Shitty northeasterner (regional)
  "sulista de merda": [5, 5], // Shitty southerner (regional)
  "paulista de merda": [5, 5], // Shitty São Paulo person (regional)
  "carioca de merda": [5, 5], // Shitty Rio person (regional)
  "mineiro de merda": [5, 5], // Shitty Minas person (regional)
  "gaúcho de merda": [5, 5], // Shitty Gaúcho (regional)

  // ========================================
  // === Extended Insult Nouns/Adjectives ===
  // ========================================
  "aberração": [1, 4], // Aberration
  "abominação": [1, 4], // Abomination
  "acéfalo": [1, 4], // Brainless
  "aloprado": [1, 4], // Crazy/reckless
  "aloprada": [1, 4], // Crazy/reckless (female)
  "borra botas": [1, 4], // Boot dirtier (PT useless)
  "cabeça de bagre": [1, 4], // Catfish head (stupid)
  "cabeça de vento": [1, 4], // Wind head (airheaded)
  "cabeçudo": [1, 4], // Big-headed (stubborn)
  "cagão": [1, 4], // Coward / big shitter
  "cagona": [1, 4], // Coward (female)
  "cara de pau": [1, 4], // Wooden face (shameless)
  "cara de mamão": [1, 4], // Papaya face (dumb looking)
  "cérebro de amendoim": [1, 4], // Peanut brain
  "charlatão": [1, 4], // Charlatan
  "covarde de merda": [1, 4], // Shitty coward
  "delinquente": [1, 4], // Delinquent
  "desmiolado": [1, 4], // Brainless
  "estúpida": [1, 4], // Stupid (female)
  "feia de doer": [1, 4], // Ugly enough to hurt
  "feio de doer": [1, 4], // Ugly enough to hurt (male)
  "frouxo": [1, 4], // Limp / coward
  "frouxona": [1, 4], // Limp / coward (female)
  "gaguejo de merda": [3, 5], // Shitty stutterer
  "gentinha": [1, 4], // Little people (contemptuous)
  "gorducho": [1, 4], // Chubby (insult)
  "gorducha": [1, 4], // Chubby (female insult)
  "lazarenta": [1, 4], // Leprous (female insult)
  "lerdo": [1, 4], // Slow/dumb (male)
  "lerda": [1, 4], // Slow/dumb (female)
  "língua de trapo": [1, 4], // Rag tongue (gossiper)
  "maria vai com as outras": [1, 4], // Mary goes with others (follower)
  "molenga": [1, 4], // Limp/lazy
  "oca": [1, 4], // Hollow (brainless female)
  "oco": [1, 4], // Hollow (brainless male)
  "panaca": [1, 4], // Fool (PT)
  "pateta": [1, 4], // Silly
  "palerma": [1, 4], // Fool (PT)
  "pestilento": [1, 4], // Pestilent (male)
  "pestilenta": [1, 4], // Pestilent (female)
  "relaxado": [1, 4], // Sloppy (male)
  "relaxada": [1, 4], // Sloppy (female)
  "repugnante": [1, 4], // Repugnant
  "sebento": [1, 4], // Greasy (male variant)
  "sebenta": [1, 4], // Greasy (female variant)
  "sem noção": [1, 4], // Clueless
  "sem sal": [1, 4], // Saltless (bland/boring)
  "tapada": [1, 4], // Stupid (female variant)
  "tramoia": [1, 4], // Scheme (insult)
  "troglodita": [1, 4], // Troglodyte
  "urso de merda": [3, 5], // Shitty bear (clumsy)
  "vagal de merda": [3, 5], // Shitty vagrant
  "zé ninguém": [1, 4], // Joe nobody
  "zé povinho": [1, 4], // Joe common people (conformist)

  // ========================================
  // === More Extended Compound Insults ===
  // ========================================
  "sua mãe é uma puta barata": [5, 4], // Your mother is a cheap whore
  "sua mãe dá pra todo mundo": [1, 4], // Your mother gives to everyone
  "sua irmã é a puta do bairro": [5, 4], // Your sister is the neighborhood whore
  "seu pai é um corno manso de merda": [1, 4], // Your father is a shitty tame cuckold
  "sua família inteira é de merda": [3, 5], // Your entire family is shit
  "sua linhagem é toda de puta": [5, 4], // Your entire lineage is whores
  "a puta que pariu tua raça": [5, 4], // The whore that bore your race
  "tua mãe dá de graça": [1, 4], // Your mother gives for free
  "tua irmã dá de graça": [1, 4], // Your sister gives for free
  "tua mãe cobra um real": [1, 4], // Your mother charges one real
  "tua mãe nem de graça presta": [1, 4], // Your mother isn't worth it even for free
  "tua mãe chupa rola na esquina": [4, 4], // Your mother sucks dick on the corner
  "tua mãe dá o cu na esquina": [3, 4], // Your mother gives ass on the corner
  "tua irmã mama rola no beco": [4, 4], // Your sister sucks dick in the alley
  "tua mãe é conhecida no puteiro": [1, 4], // Your mother is known at the brothel
  "tua mãe é a atração do puteiro": [1, 4], // Your mother is the brothel attraction
  "a cachorra da tua mãe": [1, 4], // The bitch of your mother
  "a vaca da tua mãe": [1, 4], // The cow of your mother
  "a piranha da tua irmã": [1, 4], // The slut of your sister
  "o corno do teu pai": [1, 4], // The cuckold of your father
  "o cafetão do teu pai": [1, 4], // Your father the pimp
  "o viado do teu pai": [1, 4], // The fag of your father
  "o broxa do teu pai": [1, 4], // The impotent of your father
  "o pau mole do teu pai": [1, 4], // Your father's limp dick
  "teu avô é um corno": [1, 4], // Your grandfather is a cuckold
  "tua avó é uma puta": [5, 4], // Your grandmother is a whore
  "teu tio é um viado": [1, 4], // Your uncle is a fag
  "tua tia é uma piranha": [1, 4], // Your aunt is a slut
  "a família toda é de puta e corno": [5, 4], // The whole family is whores and cuckolds
  "nasceu da buceta da puta": [5, 4], // Born from the whore's pussy
  "nasceu do cu da puta": [5, 4], // Born from the whore's ass
  "nasceu da merda": [3, 5], // Born from shit
  "fruto de aborto mal feito": [1, 4], // Fruit of a botched abortion
  "sobra de aborto": [1, 4], // Leftover of abortion
  "refugo de esperma": [1, 4], // Sperm reject
  "acidente de camisinha furada": [1, 4], // Broken condom accident
  "erro da natureza": [1, 4], // Nature's mistake
  "desperdício de oxigênio": [1, 4], // Oxygen waste
  "desperdício de esperma": [1, 4], // Sperm waste
  "desperdício de vida": [1, 4], // Life waste
  "estorvo da humanidade": [1, 4], // Humanity's nuisance
  "esgoto humano": [1, 4], // Human sewage
  "lixo da sociedade": [1, 4], // Society's garbage
  "cancro da sociedade": [1, 4], // Society's cancer
  "praga humana": [1, 4], // Human plague
  "doença ambulante": [1, 4], // Walking disease
  "chorume humano": [1, 4], // Human slurry
  "escória da Terra": [1, 4], // Earth's scum
  "resíduo tóxico humano": [1, 4], // Human toxic waste
  "cocô de cachorro": [1, 4], // Dog poop
  "bosta de cavalo": [1, 4], // Horse crap
  "bosta de vaca": [1, 4], // Cow crap
  "bosta de porco": [1, 4], // Pig crap
  "cu de galinha": [3, 4], // Chicken's ass
  "cu de cachorro": [3, 4], // Dog's ass
  "cu de jumento": [3, 4], // Jackass's ass
  "cu de cobra": [3, 4], // Snake's ass
  "rabo de burro": [3, 4], // Donkey's ass
  "focinho de porco": [1, 4], // Pig's snout
  "cara de macaco": [1, 4], // Monkey face
  "cara de bunda": [3, 4], // Butt face
  "cara de buceta usada": [4, 4], // Used pussy face
  "cara de rola murcha": [4, 4], // Wilted dick face
  "cara de cu suado": [3, 4], // Sweaty ass face
  "cara de bosta seca": [1, 4], // Dry crap face
  "cheiro de cu": [3, 4], // Ass smell
  "cheiro de buceta podre": [4, 4], // Rotten pussy smell
  "cheiro de merda": [3, 5], // Shit smell
  "fede a cu": [3, 4], // Smells like ass
  "fede a merda": [3, 5], // Smells like shit
  "fede a porra": [1, 4], // Smells like cum

  // ========================================
  // === More Portuguese from Portugal ===
  // ========================================
  "atirar à parede": [3, 4], // Throw against wall (PT vulgar)
  "badalhoca fedorenta": [3, 4], // Stinky filthy woman (PT)
  "brochar todo": [3, 4], // Go completely limp (PT)
  "cabra do caralho": [3, 4], // Fucking goat/bastard (PT)
  "cagalhão": [3, 4], // Big turd (PT)
  "cagalhoto": [3, 4], // Little turd (PT)
  "chular": [3, 4], // To pimp (PT)
  "coiro velho": [1, 4], // Old hide (PT ugly person)
  "cona podre": [5, 5], // Rotten cunt (PT)
  "cornudo velho": [3, 4], // Old cuckold (PT)
  "cu podre": [3, 4], // Rotten ass (PT)
  "esporrada no focinho": [3, 4], // Ejaculation on face (PT)
  "foda forte": [3, 5], // Strong fuck (PT)
  "foder bem": [3, 5], // Fuck well (PT)
  "foder com força": [3, 5], // Fuck with force (PT)
  "granda cabrão de merda": [3, 4], // Big shitty bastard (PT)
  "granda cona de merda": [5, 5], // Big shitty cunt (PT)
  "granda puta de merda": [5, 5], // Big shitty whore (PT)
  "ir para o cu que te foda": [3, 5], // Go to the ass that fucks you (PT)
  "levar no cu com força": [3, 4], // Take it in the ass with force (PT)
  "mama na piça toda": [4, 4], // Suck the whole dick (PT)
  "manda-te foder todo": [3, 5], // Go get completely fucked (PT)
  "paneleiro nojento": [3, 4], // Disgusting faggot (PT)
  "piça podre": [4, 4], // Rotten dick (PT)
  "piça de merda velha": [4, 5], // Old shitty dick (PT)
  "rata nojenta": [4, 4], // Disgusting pussy (PT)
  "vai para o caralho todo": [4, 4], // Go completely to the dick (PT)
  "vai para o cu de quem te ouve": [3, 4], // Go to the ass of who listens (PT)
  "vai para o raio": [3, 4], // Go to the lightning (PT curse)

  // ========================================
  // === More Extended Angola/Mozambique ===
  // ========================================
  "cabrão da terra": [3, 4], // Bastard of the land (Angola)
  "filho de cão": [3, 4], // Son of a dog (Angola)
  "filha de cão": [3, 4], // Daughter of a dog (Angola)
  "grande cabrão da terra": [3, 4], // Big bastard of the land (Angola)
  "ir para a terra": [3, 4], // Go to the ground (Angola dismissal)
  "meu irmão cabrão": [3, 4], // My brother bastard (Mozambique)
  "pila no rabo": [4, 4], // Dick in the ass (Mozambique)
  "vai mamar na cona": [5, 5], // Go suck the cunt (Mozambique)
  "vai mamar na pila toda": [4, 4], // Go suck the whole dick (Mozambique)
  "grande puta angolana": [5, 4], // Big Angolan whore
  "grande cabrão angolano": [3, 4], // Big Angolan bastard
  "grande puta moçambicana": [5, 4], // Big Mozambican whore
  "grande cabrão moçambicano": [3, 4], // Big Mozambican bastard

  // ========================================
  // === More Extended Evasion Spellings ===
  // ========================================
  "kara1ho": [4, 5], // Dick evasion
  "bu$eta": [4, 5], // Pussy evasion
  "f0d@-se": [3, 5], // Fuck it evasion
  "p0rr@": [3, 5], // Cum evasion
  "m3rd@": [3, 5], // Shit evasion
  "pu+a": [4, 5], // Whore evasion
  "c*u": [3, 5], // Ass evasion
  "p*u": [4, 5], // Dick evasion
  "r*la": [4, 5], // Dick evasion
  "p*ca": [4, 5], // Dick evasion
  "b*sta": [3, 5], // Crap evasion
  "f*der": [3, 5], // To fuck evasion
  "tr*nsar": [3, 5], // To have sex evasion
  "v*ado": [3, 5], // Fag evasion
  "b*cha": [3, 5], // Fag evasion
  "s@fado": [3, 5], // Pervert evasion
  "s@fada": [3, 5], // Pervert evasion (female)
  "puut@": [5, 5], // Whore evasion
  "puuuta": [3, 5], // Whore evasion (extended)
  "carrralho": [4, 5], // Dick evasion (extended)
  "foooda-se": [3, 5], // Fuck it evasion (extended)
  "meeerda": [3, 5], // Shit evasion (extended)
  "pooorrrra": [3, 5], // Cum evasion (extended)
  "cuzzão": [3, 5], // Asshole evasion
  "v i a d o": [3, 5], // Fag evasion (spaced)
  "p u t a": [3, 5], // Whore evasion (spaced)
  "c a r a l h o": [4, 5], // Dick evasion (spaced)
  "m e r d a": [3, 5], // Shit evasion (spaced)
  "b u c e t a": [4, 5], // Pussy evasion (spaced)
  "f o d a": [3, 5], // Fuck evasion (spaced)

  // ========================================
  // === More Extended Internet Slang ===
  // ========================================
  "pqp mds krl": [2, 3], // Triple internet expletive
  "vsf vtnc krl": [2, 3], // Triple internet expletive
  "fdp fdp fdp": [2, 3], // Repeated SOB
  "krl krl krl": [4, 3], // Repeated dick
  "pqp pqp pqp": [3, 5], // Repeated holy shit
  "vsf vsf vsf": [3, 5], // Repeated go fuck yourself
  "mrd mrd mrd": [3, 5], // Repeated shit
  "tmj na buceta": [4, 3], // Together in the pussy
  "tmj no cu": [3, 3], // Together in the ass
  "chupa essa krl": [4, 3], // Suck this dick (internet)
  "mama essa krl": [4, 3], // Suck this dick (internet variant)
  "senta nessa krl": [4, 3], // Sit on this dick (internet)
  "toma essa krl": [4, 3], // Take this dick (internet)
  "come essa krl": [4, 3], // Eat this dick (internet)
  "enfia essa krl": [4, 3], // Shove this dick (internet)
  "mete essa krl": [4, 3], // Insert this dick (internet)
  "leva essa krl": [4, 3], // Take this dick (internet)
  "krl na sua boca": [4, 3], // Dick in your mouth (internet)
  "krl na sua cara": [4, 3], // Dick in your face (internet)
  "krl no seu cu": [4, 3], // Dick in your ass (internet)
  "poha no seu cu": [3, 3], // Cum in your ass (internet)
  "poha na sua boca": [2, 3], // Cum in your mouth (internet)
  "poha na sua cara": [2, 3], // Cum in your face (internet)

  // ========================================
  // === More Extended Threats ===
  // ========================================
  "vou te arrebentar": [5, 5], // I'll smash you
  "vou te arrebentar o cu": [5, 5], // I'll smash your ass
  "vou te arrebentar a cara": [5, 5], // I'll smash your face
  "vou te matar fdp": [5, 5], // I'll kill you SOB
  "vou te meter porrada": [5, 5], // I'll beat you up
  "vou te meter um soco": [5, 5], // I'll punch you
  "vou te encher de porrada": [5, 5], // I'll fill you with beatings
  "vou te dar uma surra": [5, 5], // I'll give you a beating
  "vou quebrar tua cara": [5, 5], // I'll break your face
  "vou quebrar teus dentes": [5, 5], // I'll break your teeth
  "vou quebrar teus ossos": [5, 5], // I'll break your bones
  "vou te jogar no lixo": [5, 5], // I'll throw you in garbage
  "vou te jogar no esgoto": [5, 5], // I'll throw you in sewer
  "vou te enterrar vivo": [5, 5], // I'll bury you alive
  "vou te esfolar": [5, 5], // I'll skin you
  "vou te despedaçar": [5, 5], // I'll tear you apart
  "vou foder tua mãe": [5, 5], // I'll fuck your mother
  "vou foder tua irmã": [5, 5], // I'll fuck your sister
  "vou foder tua mulher": [5, 5], // I'll fuck your wife
  "vou foder tua família toda": [5, 5], // I'll fuck your whole family
  "vou acabar com tua raça": [5, 5], // I'll end your lineage
  "vou acabar contigo fdp": [5, 5], // I'll end you SOB
  "vai apanhar até morrer": [5, 5], // You'll be beaten until death
  "vai sofrer fdp": [5, 5], // You'll suffer SOB
  "vou te fazer sofrer": [5, 5], // I'll make you suffer

  // ========================================
  // === Extended Brazilian Sexual Terms ===
  // ========================================
  "vou chupar a buceta da tua mãe": [4, 4], // I'll eat your mother's pussy
  "vou chupar a buceta da tua irmã": [4, 4], // I'll eat your sister's pussy
  "vou chupar o cu da tua mãe": [4, 4], // I'll eat your mother's ass
  "vou chupar o cu da tua irmã": [4, 4], // I'll eat your sister's ass
  "vou apertar os peitos da tua mãe": [4, 4], // I'll squeeze your mother's tits
  "vou apertar os peitos da tua irmã": [4, 4], // I'll squeeze your sister's tits
  "vou foder tua mãe de quatro": [4, 5], // I'll fuck your mother doggy style
  "vou foder tua irmã de quatro": [4, 5], // I'll fuck your sister doggy style
  "vou enfiar a mão na buceta da tua mãe": [4, 4], // I'll fist your mother's pussy
  "vou enfiar o pé na buceta da tua mãe": [4, 4], // I'll put foot in your mother's pussy
  "vou cortar teu pau": [4, 4], // I'll cut your dick
  "vou quebrar teu pau": [4, 4], // I'll break your dick
  "vou esmagar teus ovos": [4, 4], // I'll crush your balls
  "vou cortar teus ovos": [4, 4], // I'll cut your balls
  "vou rasgar a buceta da tua mãe": [4, 4], // I'll tear your mother's pussy
  "vou rasgar a buceta da tua irmã": [4, 4], // I'll tear your sister's pussy
  "vou rasgar o cu da tua mãe": [4, 4], // I'll tear your mother's ass
  "vou rasgar o cu da tua irmã": [4, 4], // I'll tear your sister's ass
  "filho de puta nojento": [4, 4], // Disgusting SOB
  "filha de puta nojenta": [4, 4], // Disgusting SOB (female)
  "filha de rapariga": [4, 4], // Daughter of a slut
  "tua mãe é puta de rua": [5, 4], // Your mother is a street whore
  "tua irmã é puta de rua": [5, 4], // Your sister is a street whore
  "tua mãe é piranha de esquina": [5, 4], // Your mother is a corner whore
  "tua irmã é piranha de esquina": [5, 4], // Your sister is a corner whore
  "tua mãe é vadia de bairro": [4, 4], // Your mother is a neighborhood slut
  "tua mãe é putona do bairro": [5, 4], // Your mother is the neighborhood's big whore
  "tua mãe é galinha do bairro": [4, 4], // Your mother is the neighborhood's slut

  // ========================================
  // === Extended Portugal Portuguese ===
  // ========================================
  "caralho do teu pai": [1, 4], // Your father's dick (Portugal)
  "cona da tua irmã": [4, 4], // Your sister's pussy (Portugal)
  "foda-se ó caralho": [4, 5], // Fuck off dick (Portugal)
  "vai para o caralho que te foda": [4, 5], // Go to the dick that fucks you (Portugal)
  "paneleiro de merda": [3, 5], // Faggot of shit (Portugal)
  "maricas de merda": [3, 5], // Faggot of shit (Portugal alt)
  "chupa-me o caralho": [4, 4], // Suck my dick (Portugal)
  "chupa-me os colhões": [4, 4], // Suck my balls (Portugal)
  "lambe-me o cu": [3, 4], // Lick my ass (Portugal)
  "lambe-me a cona": [4, 4], // Lick my pussy (Portugal)
  "fode-te a ti e à tua mãe": [3, 5], // Fuck you and your mother (Portugal)
  "meto-te o caralho na cona": [4, 4], // I'll put my dick in your pussy (Portugal)
  "meto-te o caralho no cu": [4, 4], // I'll put my dick in your ass (Portugal)
  "sua puta rasca": [5, 4], // You cheap whore (Portugal)
  "sua cabra de merda": [5, 5], // You shit goat/whore (Portugal)
  "sua vaca de merda": [5, 5], // You shit cow/whore (Portugal)
  "és uma cona de sabão": [1, 4], // You're a soap pussy/coward (Portugal)
  "és um otário do caralho": [1, 4], // You're a dick sucker/fool (Portugal)
  "és um merda do caralho": [4, 5], // You're a shit of dick (Portugal)

  // ========================================
  // === Extended Angola/Mozambique Portuguese ===
  // ========================================
  "kamba de merda": [3, 5], // Friend of shit (Angola)
  "kiamba sujo": [3, 4], // Dirty bastard (Angola)
  "vai pro kamba da tua mãe": [3, 4], // Go to your mother's friend (Angola)
  "cabrunco sujo": [3, 4], // Dirty bastard (Angola)
  "ximbicar a tua mãe": [3, 5], // Fuck your mother (Angola)
  "kuia da tua mãe": [4, 4], // Your mother's pussy (Angola)
  "baza daqui seu merda": [3, 5], // Get out you shit (Angola)
  "gasosa da tua mãe": [4, 4], // Your mother's pussy (Angola slang)
  "cagão de merda": [1, 4], // Coward of shit (Mozambique)
  "pangar de merda": [3, 5], // Asshole of shit (Mozambique)
  "bazuca da tua mãe": [4, 4], // Your mother's big pussy (Mozambique)
  "xingondo de merda": [1, 4], // Ugly of shit (Mozambique)
  "machimbombo na tua mãe": [3, 4], // Bus in your mother (Mozambique insult)
  "sua tchuna nojenta": [5, 4], // You disgusting whore (Mozambique)
  "vai tomar na tchuna": [4, 4], // Go take it in the pussy (Mozambique)

  // ========================================
  // === Extended NE Brazil Regional ===
  // ========================================
  "rapariga desgraçada": [3, 4], // Disgraced slut (NE Brazil)
  "rapariga safada": [3, 4], // Dirty slut (NE Brazil)
  "rapariga vagabunda": [3, 4], // Bum slut (NE Brazil)
  "cabra filho da puta": [3, 4], // Dude son of a bitch (NE Brazil)
  "oxe seu arrombado": [3, 4], // Damn you broken ass (NE Brazil)
  "oxe sua rapariga": [3, 4], // Damn you slut (NE Brazil)
  "oxe seu viado": [3, 4], // Damn you faggot (NE Brazil)
  "visse seu arrombado": [3, 4], // See you broken ass (PE Brazil)
  "visse seu fdp": [3, 4], // See you SOB (PE Brazil)
  "mainha é puta": [5, 4], // Your mommy is whore (NE Brazil)
  "painho é corno": [3, 4], // Your daddy is cuckold (NE Brazil)
  "aff seu merda": [3, 5], // Ugh you shit (NE Brazil)
  "eita porra seu fdp": [3, 4], // Damn your SOB (NE Brazil)

  // ========================================
  // === Extended South Brazil Regional ===
  // ========================================
  "tchê seu merda": [3, 5], // Hey you shit (South Brazil)
  "bah seu arrombado": [3, 4], // Damn you broken ass (South Brazil)
  "bah teu cu": [3, 4], // Damn your ass (South Brazil)
  "tri vagabundo": [3, 4], // Very bum (South Brazil)
  "tri puta": [5, 4], // Very whore (South Brazil)
  "guri fdp": [3, 4], // Boy SOB (South Brazil)
  "guria vadia": [3, 4], // Girl slut (South Brazil)
  "guri arrombado": [3, 4], // Boy broken ass (South Brazil)
  "piá fdp": [3, 4], // Kid SOB (South Brazil)
  "piá arrombado": [3, 4], // Kid broken ass (South Brazil)
  "bagual fdp": [3, 4], // Horse SOB (South Brazil)
  "bagual arrombado": [3, 4], // Horse broken ass (South Brazil)
  "cusco fdp": [3, 4], // Dog SOB (South Brazil)

  // ========================================
  // === Extended SP/Rio Slang ===
  // ========================================
  "mano seu fdp": [3, 4], // Dude you SOB (SP)
  "mano seu arrombado": [3, 4], // Dude you broken ass (SP)
  "maluco fdp": [3, 4], // Crazy SOB (SP)
  "maluco arrombado": [3, 4], // Crazy broken ass (SP)
  "irmão fdp": [3, 4], // Brother SOB (Rio)
  "mermão fdp": [3, 4], // Brother SOB (Rio slang)
  "menor fdp": [3, 4], // Kid SOB (Rio)
  "menor arrombado": [3, 4], // Kid broken ass (Rio)
  "cria fdp": [3, 4], // Kid SOB (Rio favela)
  "cria arrombado": [3, 4], // Kid broken ass (Rio favela)
  "playboy fdp": [3, 4], // Rich boy SOB (Rio)
  "playboy arrombado": [3, 4], // Rich boy broken ass (Rio)
  "noia fdp": [3, 4], // Druggie SOB (SP)

  // ========================================
  // === Extended Body Part Vulgarities ===
  // ========================================
  "bucetona grande": [4, 3], // Big pussy
  "pintinho pequeno": [4, 3], // Small dick (diminutive)
  "rabo enorme": [4, 3], // Huge ass
  "ovo pequeno": [4, 3], // Small balls
  "peito caído": [4, 3], // Saggy tits
  "pau murcho": [4, 3], // Limp dick
  "pau fedido": [4, 3], // Smelly dick
  "saco murcho": [4, 3], // Saggy balls
  "boceta peluda": [4, 3], // Hairy pussy
  "pau peludo": [4, 3], // Hairy dick
  "teta murcha": [4, 3], // Saggy tit
  "boceta podre": [4, 3], // Rotten pussy
  "pau podre": [4, 3], // Rotten dick

  // ========================================
  // === Extended Emasculation Insults ===
  // ========================================
  "teu pau não levanta": [4, 4], // Your dick can't get up
  "teu pau não funciona": [4, 4], // Your dick doesn't work
  "teu pau morreu": [5, 5], // Your dick died
  "tu é impotente": [1, 4], // You are impotent
  "tu é viado": [1, 4], // You are a faggot
  "tu é bicha": [1, 4], // You are a faggot (alt)
  "tu é traveco": [1, 4], // You are a tranny
  "teu pau é um palito": [4, 4], // Your dick is a toothpick
  "teu pau é um fósforo": [4, 4], // Your dick is a matchstick
  "teu pau é uma minhoca": [4, 4], // Your dick is a worm
  "teu pau é um dedinho": [4, 4], // Your dick is a little finger
  "corno assumido": [1, 4], // Admitted cuckold
  "corno feliz": [1, 4], // Happy cuckold
  "chifrudo nojento": [1, 4], // Disgusting cuckold
  "galhudo de merda": [3, 5], // Antlered of shit (cuckold)
  "manso de merda": [3, 5], // Tame of shit (cuckold)
  "frouxo de merda": [3, 5], // Limp of shit

  // ========================================
  // === Extended Scatological (Brazilian) ===
  // ========================================
  "vou cagar na tua cara": [3, 5], // I'll shit on your face
  "vou mijar na tua cara": [3, 4], // I'll piss on your face
  "vou cagar na tua comida": [3, 5], // I'll shit in your food
  "vou mijar na tua comida": [3, 4], // I'll piss in your food
  "vou cagar na cara da tua mãe": [3, 5], // I'll shit on your mother's face
  "vou cagar na cara da tua irmã": [3, 5], // I'll shit on your sister's face
  "come merda": [3, 5], // Eat shit
  "bebe mijo": [3, 4], // Drink piss
  "cheira peido": [3, 4], // Smell fart
  "cara de bosta": [3, 5], // Cow shit face
  "cara de cocô": [3, 4], // Poop face
  "boca de merda": [3, 5], // Shit mouth
  "boca de bosta": [3, 5], // Cow shit mouth
  "peida na cara": [3, 4], // Fart in the face
  "cagão nojento": [3, 5], // Disgusting shitter
  "mijão nojento": [3, 4], // Disgusting pisser
  "bosta ambulante": [3, 5], // Walking shit
  "merda ambulante": [3, 5], // Walking shit (alt)

  // ========================================
  // === Extended Abuse Phrases (Brazilian) ===
  // ========================================
  "tua vida não vale nada": [3, 4], // Your life is worth nothing
  "melhor se tu não tivesse nascido": [3, 4], // Better if you weren't born
  "tua mãe não sabe quem é teu pai": [1, 4], // Your mother doesn't know your father
  "ninguém sabe quem é teu pai": [1, 4], // Nobody knows who your father is
  "tua mãe te jogou no lixo": [3, 4], // Your mother threw you in garbage
  "ninguém te quer": [3, 4], // Nobody wants you
  "as pessoas cospem quando te veem": [3, 4], // People spit when they see you
  "as pessoas riem do teu nome": [3, 4], // People laugh at your name
  "tua família toda é puta": [5, 4], // Your whole family is whore
  "tua família toda é fdp": [3, 4], // Your whole family is SOB
  "tua linhagem toda é vagabunda": [3, 4], // Your whole lineage is slut
  "tu é um lixo de pessoa": [3, 4], // You are a garbage person
  "tu é um verme nojento": [3, 4], // You are a disgusting worm
  "tu é um cocô ambulante": [3, 4], // You are a walking poop
  "tu devia ter sido abortado": [3, 4], // You should have been aborted

  // ========================================
  // === Extended Internet/Gaming Brazilian ===
  // ========================================
  "noob fdp do caralho": [4, 3], // Noob SOB of dick
  "noob arrombado do caralho": [4, 3], // Noob broken ass of dick
  "camper fdp do caralho": [4, 3], // Camper SOB of dick
  "hacker fdp do caralho": [4, 3], // Hacker SOB of dick
  "feeder fdp do caralho": [4, 3], // Feeder SOB of dick
  "troll fdp do caralho": [4, 3], // Troll SOB of dick
  "toxic fdp do caralho": [4, 3], // Toxic SOB of dick
  "afk fdp do caralho": [4, 3], // AFK SOB of dick
  "gg fdp chupa": [2, 3], // GG SOB suck
  "ez fdp chupa": [2, 3], // EZ SOB suck
  "gg chupa meu pau": [4, 3], // GG suck my dick
  "ez chupa meu pau": [4, 3], // EZ suck my dick
  "sai do jogo fdp": [2, 3], // Leave game SOB
  "deleta fdp": [2, 3], // Delete SOB
  "lag fdp do caralho": [4, 3], // Lag SOB of dick
  "ping fdp do caralho": [4, 3], // Ping SOB of dick
  "server fdp do caralho": [4, 3], // Server SOB of dick
  "report fdp": [2, 3], // Report SOB
  "stream sniper fdp": [2, 3], // Stream sniper SOB

  // ========================================
  // === Extended Racial/Ethnic Slurs (Brazilian) ===
  // ========================================
  "macaco nojento": [5, 4], // Disgusting monkey (racist)
  "macaco fdp": [5, 4], // Monkey SOB (racist)
  "preto nojento": [5, 4], // Disgusting black (racist)
  "preto fdp": [5, 4], // Black SOB (racist)
  "crioulo nojento": [5, 4], // Disgusting black (racist alt)
  "crioulo fdp": [5, 4], // Black SOB (racist alt)
  "neguinho nojento": [5, 4], // Disgusting little black (racist)
  "baiano burro": [1, 4], // Stupid Bahian (regionalist)
  "nordestino burro": [1, 4], // Stupid Northeasterner (regionalist)
  "paraíba burro": [1, 4], // Stupid Paraíba person (regionalist)
  "índio burro": [1, 4], // Stupid Indian (racist)
  "japa fdp": [5, 4], // Japanese SOB (racist)
  "china fdp": [5, 4], // Chinese SOB (racist)
  "boludo fdp": [5, 4], // Argentine SOB (xenophobic)
  "gringo fdp": [5, 4], // Foreigner SOB (xenophobic)

  // ========================================
  // === Extended Evasion Spellings (Brazilian) ===
  // ========================================
  "f1lho d4 put4": [3, 5], // Son of a bitch (evasion)
  "v4d14": [3, 5], // Slut (evasion)
  "put4 qu3 p4r1u": [3, 5], // Bitch that gave birth (evasion)
  "4rr0mb4d0": [3, 5], // Broken ass (evasion)
  "c4r4lh0": [4, 5], // Dick (evasion)
  "p4u n0 c*": [4, 5], // Dick in ass (evasion)
  "f0d4-s3": [3, 5], // Fuck off (evasion)
  "v14d0": [3, 5], // Faggot (evasion)
  "b1ch4": [3, 5], // Faggot (evasion alt)
  "p1r4nh4": [5, 5], // Whore (evasion)
  "v4g4bund4": [3, 5], // Slut (evasion)
  "b0st4": [3, 5], // Cow shit (evasion)
  "buc€ta": [4, 5], // Pussy (evasion)
  "f0da-se": [3, 5], // Fuck off (evasion)
  "p@u no cu": [4, 5], // Dick in ass (evasion)
  "arr0mbad0": [3, 5], // Broken ass (evasion)

  // ========================================
  // === Extended Animal Insults (Brazilian) ===
  // ========================================
  "cachorro fdp": [1, 4], // Dog SOB
  "porco nojento": [1, 4], // Disgusting pig
  "jumento fdp": [1, 4], // Donkey SOB
  "cavalo fdp": [1, 4], // Horse SOB
  "cobra nojenta": [1, 4], // Disgusting snake
  "rato nojento": [1, 4], // Disgusting rat
  "barata nojenta": [4, 4], // Disgusting cockroach
  "parasita nojento": [1, 4], // Disgusting parasite
  "cadela fdp": [1, 4], // Bitch SOB
  "porca nojenta": [1, 4], // Disgusting sow
  "jumenta fdp": [1, 4], // She-donkey SOB
  "égua fdp": [1, 4], // Mare SOB
  "galinha fdp": [1, 4], // Chicken/slut SOB
};
const brazilianBadWords: Record<string, { s: number; c: number }> = {};
for (const [k, [s, c]] of Object.entries(_d)) {
    brazilianBadWords[k] = { s, c };
}
export default brazilianBadWords;

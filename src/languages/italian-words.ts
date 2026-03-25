/**
 * Italian profanity words list
 * Contains common profanities, insults, and offensive terms. Includes variations and dialects.
 * ⚠️ Warning: This file contains explicit language in Italian
 */
const _d: Record<string, [number, number]> = {
  "allupato": [3, 4], // Horny / sex-crazed
  "ammucchiata": [3, 4], // Orgy
  "anale": [2, 2], // Anal
  "arrapato": [3, 4], // Horny / aroused
  "arrusa": [3, 4], // Horny (Sicilian, fem)
  "arruso": [3, 4], // Horny (Sicilian, masc)
  "bagascia": [5, 4], // Whore (dialectal)
  "bagassa": [5, 4], // Whore (dialectal variant)
  "baldracca": [5, 4], // Whore / slut
  "balle": [4, 4], // Balls / nonsense
  "battona": [5, 4], // Streetwalker / prostitute
  "belino": [4, 4], // Penis (Ligurian dialect)
  "bocchinara": [4, 5], // Woman who gives blowjobs
  "bocchino": [4, 5], // Blowjob
  "bordello": [2, 3], // Brothel
  "bucaiolo": [5, 4], // Gay man (derogatory, Tuscan)
  "busone": [5, 4], // Gay man (derogatory)
  "cagare": [3, 5], // To shit
  "cagata": [3, 5], // Shitty thing / crap
  "cagna": [3, 4], // Bitch (lit. female dog)
  "cazzata": [3, 4], // Bullshit / stupid thing
  "cazzimma": [3, 4], // Nastiness / malice (Neapolitan)
  "cazzo": [4, 5], // Dick / fuck
  "cazzone": [1, 4], // Big dick / idiot
  "cesso": [1, 4], // Toilet / ugly person
  "checca": [4, 4], // Effeminate gay man (derogatory)
  "chiappa": [3, 4], // Butt cheek
  "chiavare": [3, 5], // To fuck
  "chiavata": [3, 5], // A fuck (noun)
  "ciucciami il cazzo": [4, 4], // Suck my dick
  "coglione": [3, 4], // Testicle / idiot
  "coglioni": [1, 4], // Testicles / idiots
  "cornuto": [2, 3], // Cuckold
  "culattina": [5, 4], // Gay man (derogatory, diminutive)
  "culattone": [5, 4], // Gay man (derogatory)
  "culo": [3, 4], // Ass
  "ditalino": [3, 4], // Fingering
  // "fava": [4, 4], // Dick (lit. broad bean) — false positive: English "fava beans"
  "fica": [4, 4], // Pussy / vagina
  "figa": [4, 4], // Pussy / vagina (variant)
  "figlio di buona donna": [2, 3], // Son of a good woman (euphemism for son of a bitch)
  "figlio di puttana": [5, 5], // Son of a whore
  "figone": [3, 4], // Very hot person
  "finocchio": [3, 4], // Gay man (derogatory, lit. fennel)
  "fottere": [3, 5], // To fuck
  "fottersi": [3, 5], // To fuck oneself / not to care
  "fracicone": [3, 4], // Filthy person
  "fregna": [4, 4], // Pussy / vagina (Roman)
  "frocio": [5, 4], // Faggot (derogatory)
  "froscio": [5, 4], // Faggot (derogatory, variant)
  "goldone": [2, 3], // Condom (slang)
  "guardone": [3, 4], // Peeping Tom / voyeur
  "imbecille": [1, 4], // Imbecile / idiot
  "incazzarsi": [3, 4], // To get pissed off
  "incoglionirsi": [1, 4], // To become stupid / dazed
  "ingoio": [3, 4], // I swallow (sexual)
  "leccaculo": [2, 3], // Ass-licker / sycophant
  "lecchino": [1, 3], // Bootlicker / sycophant
  "mannaggia": [2, 3], // Damn it
  "merda": [3, 5], // Shit
  "merdata": [3, 5], // Shitty act / mess
  "merdoso": [3, 5], // Shitty
  "mignotta": [5, 4], // Whore (Roman)
  "minchia": [4, 4], // Dick (Sicilian)
  "minchione": [1, 4], // Idiot (Sicilian, lit. big dick)
  "mona": [1, 4], // Pussy / idiot (Venetian)
  "nerchia": [4, 4], // Dick (vulgar)
  "palle": [4, 4], // Balls / nonsense
  "palloso": [3, 4], // Boring / ball-busting
  "patonza": [4, 4], // Pussy (slang)
  "pecorina": [3, 4], // Doggy style (lit. like a sheep)
  "picio": [4, 4], // Penis (dialectal)
  "pincare": [3, 5], // To fuck (dialectal)
  // "pippa": [3, 4], // Handjob / wank — false positive: common English name (Pippa Middleton)
  "pippone": [3, 4], // Long boring speech / big wank
  "pirla": [1, 4], // Idiot (Milanese, lit. spinning top)
  "pisciare": [3, 4], // To piss
  "piscio": [3, 4], // Piss
  "pisello": [2, 2], // Penis (lit. pea)
  "pompa": [4, 5], // Blowjob (slang)
  "pompino": [4, 5], // Blowjob
  "porca": [3, 4], // Pig (fem) / slut
  "porca madonna": [3, 4], // Pig Madonna (blasphemy)
  "porca miseria": [2, 3], // Damn it (lit. pig misery)
  "porca puttana": [5, 5], // Fucking whore (blasphemy)
  "porco": [3, 4], // Pig / dirty person
  "porco due": [2, 3], // Pig two (euphemistic blasphemy)
  "porco zio": [2, 3], // Pig uncle (euphemistic blasphemy)
  "potta": [4, 4], // Pussy (archaic/dialectal)
  "puppami": [3, 4], // Suck me
  "puttana": [5, 4], // Whore / prostitute
  "recchione": [5, 4], // Faggot (Neapolitan, derogatory)
  "rincoglionire": [1, 4], // To become senile / stupid
  "rompiballe": [3, 4], // Ball-breaker / annoying person
  "rompipalle": [3, 4], // Ball-breaker / annoying person (variant)
  "ruffiano": [1, 3], // Pimp / brown-noser
  "sbattere": [3, 5], // To bang / to fuck
  "sbattersi": [3, 5], // To bother / to fuck oneself
  "sborra": [3, 4], // Cum / semen
  "sborrata": [3, 4], // Cumshot
  "sborrone": [3, 4], // Big cummer / premature ejaculator
  "scopare": [3, 5], // To fuck (lit. to sweep)
  "scopata": [3, 5], // A fuck (noun)
  // "sega": [3, 4], // Wank / handjob (lit. saw) — false positive: SEGA gaming company
  "smandrappata": [3, 4], // Slut / slovenly woman
  "socmel": [3, 4], // Suck it (Lombard dialect)
  "sorca": [4, 4], // Pussy (Roman, lit. mouse)
  "spagnola": [2, 1], // Titjob (lit. Spanish)
  "spompinare": [4, 5], // To give a blowjob
  "sticchio": [4, 4], // Pussy (Sicilian)
  "stronza": [3, 4], // Bitch / turd (fem)
  "stronzata": [1, 4], // Bullshit / stupid thing
  "stronzo": [3, 4], // Asshole / turd
  "succhiami": [3, 4], // Suck me
  "succhione": [3, 4], // Hickey / sucker
  "sveltina": [3, 4], // Quickie
  "sverginare": [3, 4], // To deflower / take virginity
  "terrone": [4, 4], // Slur for Southern Italians
  "testa di cazzo": [4, 4], // Dickhead
  "tette": [4, 4], // Tits
  "topa": [4, 4], // Pussy (slang, lit. mouse)
  // "troia": [5, 4], // Whore / slut — false positive: English city of Troy
  "trombare": [3, 5], // To fuck (slang)
  "vacca": [2, 3], // Cow / slut
  "vaffanculo": [3, 4], // Fuck off / go fuck yourself
  "zinne": [4, 4], // Tits (slang)
  "zoccola": [3, 4], // Slut (lit. sewer rat)
  "porcodio": [3, 4], // Pig God (blasphemy)
  "dio cane": [3, 4], // God dog (blasphemy)
  "dio porco": [3, 4], // God pig (blasphemy)
  "dio bestia": [3, 4], // God beast (blasphemy)
  "madonna puttana": [5, 4], // Madonna whore (blasphemy)
  "porca troia": [5, 5], // Fucking whore (blasphemy)
  "che cazzo": [3, 5], // What the fuck
  "del cazzo": [4, 5], // Of the dick / shitty
  "figlio di troia": [5, 5], // Son of a whore
  "affanculo": [3, 5], // Fuck off (shortened)
  "incazzato": [3, 4], // Pissed off
  "cazzaro": [3, 5], // Bullshitter / braggart
  "merdaccia": [3, 5], // Nasty shit
  "puttaniere": [5, 4], // Whoremonger
  "troione": [5, 4], // Big whore
  "segaiolo": [3, 4], // Wanker
  "rompicoglioni": [3, 4], // Ball-breaker (vulgar)
  "testa di minchia": [4, 4], // Dickhead (Sicilian)

  // Additional Italian profanity & bestemmie
  "bestia di dio": [3, 4], // God's beast (blasphemy)
  "cristo cane": [3, 4], // Christ dog (blasphemy)
  "dio boia": [3, 4], // God executioner (blasphemy)
  "dio cristo": [3, 4], // God Christ (blasphemy)
  "dio ladro": [3, 4], // God thief (blasphemy)
  "dio maiale": [3, 4], // God pig (blasphemy)
  "dio merda": [3, 5], // God shit (blasphemy)
  "madonna maiala": [3, 4], // Madonna pig (blasphemy)
  "madonna troia": [5, 4], // Madonna whore (blasphemy)
  "porco dio": [3, 4], // Already listed variant
  "porco gesù": [3, 4], // Pig Jesus (blasphemy)
  "porca eva": [3, 4], // Pig Eve (blasphemy)
  "ostia": [4, 5], // Host (blasphemy)
  "cazzetto": [4, 4], // Small dick
  "cazzi tuoi": [3, 4], // Your own business (vulgar)
  "col cazzo": [4, 4], // No way (lit. with the dick)
  "cornuta": [2, 3], // Fem cuckold
  "culone": [3, 4], // Big ass
  "figa di legno": [4, 4], // Wooden pussy (frigid)
  "figlio di mignotta": [5, 5], // Son of a whore
  "fottiti": [3, 5], // Fuck yourself
  "fottuto": [3, 5], // Fucked
  "incazzato nero": [3, 4], // Extremely pissed off
  "leccami": [3, 4], // Lick me
  "madonnina": [3, 4], // Little madonna (blasphemy)
  "merda secca": [3, 5], // Dried shit
  "mortacci tua": [3, 4], // Your dead relatives (Roman, very offensive)
  "mortacci": [3, 4], // Dead relatives (Roman insult)
  "pezzo di merda": [3, 5], // Piece of shit
  "porco giuda": [3, 4], // Pig Judas (blasphemy)
  "rompicazzo": [4, 4], // Dick breaker
  "scemo del villaggio": [1, 4], // Village idiot
  "scemo": [1, 4], // Idiot
  "stronza di merda": [3, 5], // Shit bitch
  "troia di merda": [5, 5], // Shit whore
  "vattene affanculo": [3, 5], // Go fuck yourself
  "zoccola di merda": [3, 5], // Shit slut

  // More bestemmie (blasphemies)
  "dio santo porco": [3, 4], // Holy pig God
  "madonna boia": [3, 4], // Madonna executioner
  "madonna zoccolona": [3, 4], // Madonna big slut
  "porco il signore": [3, 4], // Pig the Lord
  "porco l'iddio": [3, 4], // Pig God (archaic form)
  "dio schifoso": [3, 4], // Disgusting God
  "dio stronzo": [3, 4], // God asshole
  "dio bastardo": [3, 4], // God bastard
  "dio impestato": [3, 4], // God plague-ridden
  "dio infame": [3, 4], // God infamous
  "dio lurido": [3, 4], // God filthy
  "porco madonna": [3, 4], // Pig Madonna
  "cristo porco": [3, 4], // Christ pig
  "cristo merda": [3, 5], // Christ shit
  "gesù cristo cane": [3, 4], // Jesus Christ dog
  "madonna vacca": [3, 4], // Madonna cow
  "madonna lurida": [3, 4], // Madonna filthy
  "madonna schifosa": [3, 4], // Madonna disgusting
  "porca la madonna": [3, 4], // Pig the Madonna
  "porca maria": [3, 4], // Pig Mary
  "porco iddio": [3, 4], // Pig God (variant)
  "porco giuda ladro": [3, 4], // Pig Judas thief
  "madonna serpente": [3, 4], // Madonna snake
  "dio merdone": [3, 5], // God big shit
  "dio fetente": [3, 4], // God stinking
  "dio cagna": [3, 4], // God bitch

  // More compound insults
  "faccia di cazzo": [4, 4], // Dick face
  "faccia di culo": [3, 4], // Ass face
  "faccia di merda": [3, 5], // Shit face
  "pezzo di stronzo": [1, 4], // Piece of turd
  "pezzo di cazzo": [4, 4], // Piece of dick
  "brutto stronzo": [1, 4], // Ugly turd
  "brutta stronza": [1, 4], // Ugly turd (fem)
  "brutto bastardo": [1, 4], // Ugly bastard
  "brutta troia": [1, 4], // Ugly whore
  "figlio di nessuno": [1, 4], // Son of nobody
  "gran bastardo": [3, 4], // Great bastard
  "gran figlio di puttana": [5, 5], // Great son of a whore
  "maledetto stronzo": [1, 4], // Damned turd
  "sacco di merda": [3, 5], // Bag of shit
  "cane bastardo": [3, 4], // Bastard dog
  "faccia da culo": [3, 4], // Ass-looking face
  "testa di merda": [3, 5], // Shit head

  // More sexual terms
  "chiavica": [1, 4], // Sewer / ugly person
  "scopamici": [4, 4], // Friends with benefits
  "trombamici": [4, 4], // Friends with benefits (variant)
  "inculare": [4, 4], // To sodomize
  "sodomizzare": [4, 4], // To sodomize (formal)
  "sodomita": [3, 4], // Sodomite
  "masturbazione": [4, 4], // Masturbation
  "masturbarsi": [4, 4], // To masturbate
  "orgasmo": [4, 4], // Orgasm
  "pompinara": [4, 5], // Woman who gives blowjobs
  "puttanata": [3, 4], // Bullshit / whore-like act
  "puttanella": [5, 4], // Little whore
  "puttanone": [5, 4], // Big whore
  "scopone": [4, 5], // Big fuck
  "trombata": [4, 5], // Fuck (noun)
  "segone": [4, 4], // Big wank
  "incularsi": [4, 4], // To get sodomized
  "farsi una sega": [4, 4], // To jerk off
  "farsi una pippa": [4, 4], // To jerk off (variant)
  "squillo": [4, 4], // Call girl
  "meretricio": [3, 4], // Prostitution
  "meretrice": [3, 4], // Prostitute (formal)
  "lenone": [4, 4], // Pimp (formal)
  "magnaccia": [4, 4], // Pimp
  "pappone": [4, 4], // Pimp (colloquial)
  "mignottone": [5, 4], // Big whore

  // More dialectal / diminutives
  "cazzola": [4, 4], // Small dick / trowel
  "cazzuccio": [4, 4], // Tiny dick
  "stronzetto": [1, 4], // Little turd
  "stronzetta": [1, 4], // Little turd (fem)
  "troncone": [3, 4], // Big stump (phallic)
  "coglionazzo": [1, 4], // Big idiot
  "merdina": [3, 5], // Little shit
  "merdone": [3, 5], // Big shit
  "fottutissimo": [3, 5], // Very much fucked
  "cazzone doppio": [4, 4], // Double dick (insult)
  "stronzone": [3, 4], // Big turd
  "cazzaccio": [1, 4], // Ugly dick
  "merdoso di merda": [3, 5], // Shitty of shit

  // Neapolitan
  "guappo": [3, 4], // Thug / bully
  "mammalucco": [1, 4], // Fool / oaf
  "scassacazzo": [4, 4], // Dick-breaker / annoying person
  "sfaccimma": [3, 4], // Sperm (Neapolitan, strong insult)
  "sfaccimm": [3, 4], // Sperm (variant)
  "cacaglio": [3, 4], // Stammerer (offensive)
  "fetente": [3, 4], // Stinking person
  "fetentone": [3, 4], // Big stinking person
  "vattenne": [3, 4], // Get out (Neapolitan)
  "zoccola napoletana": [3, 4], // Neapolitan slut
  "curnutone": [3, 4], // Big cuckold (Neapolitan)
  "strunz": [3, 4], // Turd (Neapolitan)
  // "puttanesca": [3, 4], // commented out — common innocent meaning (pasta alla puttanesca)
  "chiattona": [1, 4], // Fat woman (Neapolitan)
  "cafonata": [1, 3], // Boorish act
  "cafone": [1, 3], // Boor / peasant (insult)

  // Sicilian
  "bedda matri": [1, 2], // Oh mother! (Sicilian exclamation)
  "cornuto contento": [3, 4], // Happy cuckold
  "babbasone": [1, 4], // Big idiot (Sicilian)
  "babbo": [1, 4], // Idiot (Tuscan/Sicilian)
  "minchiolina": [4, 4], // Little dick (Sicilian)
  "mischino": [1, 3], // Wretched (Sicilian, can be offensive)
  "vastaso": [3, 4], // Vulgar person (Sicilian)
  "scassamarroni": [3, 4], // Ball-breaker (Sicilian)
  "cornuto e mazziato": [3, 4], // Cuckolded and beaten

  // Roman dialect
  "li mortacci": [3, 4], // Your dead ancestors (Roman)
  "li mortacci tua": [3, 4], // Your dead ancestors (full)
  "ammazza": [1, 2], // Damn / wow (Roman)
  "daje": [1, 1], // Come on (Roman, can be vulgar)
  "burino": [1, 3], // Peasant / hick (Roman insult)
  "coatto": [1, 3], // Trashy person (Roman)
  "zozzone": [3, 4], // Dirty person (Roman)
  "zozzona": [3, 4], // Dirty person (Roman, fem)
  "caciottaro": [1, 3], // Cheese-maker (Roman insult)
  "buzzicone": [1, 3], // Lazy person (Roman)
  "roscio": [1, 3], // Redhead (Roman, pejorative)

  // More general slang
  "cazzeggiare": [4, 4], // To dick around
  "coglioneria": [1, 4], // Foolishness / bullshit
  "merdaio": [3, 5], // Shit-heap / messy place
  "stronzaggine": [3, 4], // Turd-like behavior
  "stronzeria": [3, 4], // Assholery
  "coglionata": [1, 4], // Stupid thing / bullshit
  "incazzatura": [3, 4], // State of being pissed off
  "scazzato": [3, 4], // Annoyed / pissed off
  "scazzare": [3, 4], // To annoy / piss off
  "smerdare": [3, 5], // To shit on / to expose
  "sminchiare": [3, 4], // To break (Sicilian-derived)
  "sminchiato": [3, 4], // Broken / crazy
  "cagacazzo": [4, 4], // Annoying dick (vulgar)
  "rompiscatole": [1, 3], // Box-breaker / annoying person
  "cagacazzi": [4, 4], // Annoying dicks
  "sbroccare": [3, 4], // To lose it / freak out
  "sbrocco": [3, 4], // Freakout
  "incazzatura nera": [3, 4], // Deep rage
  "cazzimma napoletana": [3, 4], // Neapolitan nastiness

  // Offensive terms a content filter should catch
  "negro": [5, 3], // N-word (Italian)
  "negra": [5, 4], // N-word (fem)
  "polentone": [4, 4], // Slur for Northern Italians
  "terronaccio": [4, 4], // Augmentative of terrone
  "terrona": [4, 4], // Female terrone (slur)
  "marocchino": [4, 3], // Moroccan (used as slur)
  "extracomunitario": [4, 3], // Non-EU (used as slur)
  "vu cumprà": [5, 4], // Offensive term for street vendors
  "zingaro": [4, 4], // Gypsy (slur)
  "zingara": [4, 4], // Gypsy (fem, slur)
  "zingaraccio": [5, 4], // Dirty gypsy (slur)
  "frocetto": [5, 4], // Little faggot
  "frocione": [5, 4], // Big faggot
  "ricchione": [5, 4], // Faggot (Neapolitan variant)
  "busona": [5, 4], // Lesbian (derogatory)
  "lesbicona": [4, 4], // Big lesbian (derogatory)
  "ritardato": [4, 4], // Retard
  "ritardata": [4, 4], // Retard (fem)
  "mongoloide": [5, 4], // Mongoloid (slur)
  "handicappato": [4, 4], // Handicapped (used as slur)
  "ciccione": [1, 4], // Fatso
  "cicciona": [1, 4], // Fatso (fem)
  "nano": [1, 1], // Dwarf (insult)
  "nana": [1, 1], // Dwarf (fem, insult)

  // === EXPANSION: More bestemmie (blasphemies) ===
  "porco mondo": [3, 4], // Pig world (blasphemy)
  "dio cristo santo": [3, 4], // God Christ holy (blasphemy)
  "dio madonna": [3, 4], // God Madonna (blasphemy)
  "dio can": [3, 4], // God dog (Venetian blasphemy)
  "dio bon": [3, 4], // God good (Venetian blasphemy/excl)
  "dio santo cane": [3, 4], // Holy God dog (blasphemy)
  "dio santo porco cane": [3, 4], // Elaborate blasphemy chain
  "porco il clero": [3, 4], // Pig the clergy (blasphemy)
  "porco il mondo": [3, 4], // Pig the world
  "porco satana": [3, 4], // Pig Satan (blasphemy)
  "dio mio cane": [3, 4], // My God dog
  "dio serpente": [3, 4], // God snake (blasphemy)
  "dio animale": [3, 4], // God animal (blasphemy)
  "dio buono": [2, 3], // God good (euphemistic blasphemy)
  "dio lercio": [3, 4], // God filthy (blasphemy)
  "dio maialino": [3, 4], // God little pig (blasphemy)
  "dio mangiato": [3, 4], // God eaten (blasphemy)
  "dio impiccato": [3, 4], // God hanged (blasphemy)
  "dio inchiodato": [3, 4], // God nailed (blasphemy)
  "dio sbattuto": [3, 4], // God slammed (blasphemy)
  "madonna cagna": [3, 4], // Madonna bitch (blasphemy)
  "madonna bestia": [3, 4], // Madonna beast (blasphemy)
  "madonna impestata": [3, 4], // Madonna plague-ridden
  "madonna indemoniata": [3, 4], // Madonna possessed
  "madonna infame": [3, 4], // Madonna infamous
  "madonna merda": [3, 5], // Madonna shit
  "madonna mia puttana": [5, 4], // My Madonna whore
  "madonna porchetta": [3, 4], // Madonna piglet
  "madonna suina": [3, 4], // Madonna swine
  "madonna zoccola": [3, 4], // Madonna slut
  "cristo bastardo": [3, 4], // Christ bastard
  "cristo boia": [3, 4], // Christ executioner
  "cristo ladro": [3, 4], // Christ thief
  "cristo maiale": [3, 4], // Christ pig
  "gesù cane": [3, 4], // Jesus dog
  "gesù porco": [3, 4], // Jesus pig
  "gesù merda": [3, 5], // Jesus shit
  "porca l'oca": [2, 3], // Pig the goose (euphemistic)
  "porca paletta": [2, 3], // Pig palette (euphemistic)
  "porca pupazza": [2, 3], // Pig puppet (euphemistic)
  "mannaggia la madonna": [3, 4], // Damn the Madonna
  "mannaggia cristo": [3, 4], // Damn Christ
  "mannaggia dio": [3, 4], // Damn God
  "santo iddio porco": [3, 4], // Holy God pig
  "ostia benedetta": [3, 4], // Blessed host (blasphemy)
  "ostia puttana": [5, 4], // Host whore (blasphemy)
  "sacramento": [1, 1], // Sacrament (blasphemy exclamation)
  "sacramentare": [3, 4], // To blaspheme

  // === EXPANSION: cazzo derivatives ===
  "cazzatona": [3, 5], // Big bullshit
  "cazzatella": [3, 5], // Little bullshit
  "cazzettino": [4, 4], // Tiny little dick
  "cazzeggio": [4, 4], // Dicking around (noun)
  "cazzimmare": [3, 4], // To be nasty (Neapolitan verb)
  "cazzotto": [4, 4], // Punch (lit. dick-hit)
  "cazzottata": [3, 4], // Fistfight
  "cazzutissimo": [4, 4], // Very ballsy (superlative)
  "cazzuto": [4, 4], // Ballsy / tough
  "scazzottata": [3, 4], // Brawl
  "scazzottare": [3, 4], // To brawl
  "incazzarsi nero": [3, 4], // To get furiously pissed
  "incazzatissimo": [3, 4], // Extremely pissed off
  "incazzoso": [3, 4], // Easily angered
  "cazzo duro": [4, 4], // Hard dick
  "cazzo molle": [4, 4], // Soft dick / wimp
  "testa di cazzo pelato": [4, 4], // Bald dickhead
  "cazzi amari": [4, 5], // Bitter dicks / tough shit
  "cazzata colossale": [3, 5], // Colossal bullshit
  "cazzimma a palate": [3, 4], // Nastiness by the shovelful
  "che cazzo vuoi": [3, 5], // What the fuck do you want
  "non me ne frega un cazzo": [3, 5], // I don't give a fuck
  "fatti i cazzi tuoi": [3, 5], // Mind your own fucking business
  "un cazzo": [4, 4], // Nothing / no way (lit. a dick)
  "mannagg al cazzo": [4, 4], // Damn the dick (Neapolitan)

  // === EXPANSION: merda derivatives ===
  "merdacciolo": [3, 5], // Little shit
  "merdaio grande": [3, 5], // Big shit-heap
  "merdazza": [1, 4], // Ugly shit
  "merdella": [3, 5], // Little shit (Neapolitan)
  "merdosissimo": [3, 5], // Extremely shitty
  "merdissima": [3, 5], // Ultimate shit
  "immerdare": [3, 5], // To cover in shit
  "smerdamento": [3, 5], // Shitting on / exposing
  "smerdato": [3, 4], // Exposed / shamed
  "ammerdare": [3, 5], // To shit up
  "mangia merda": [3, 5], // Eat shit
  "merda calda": [3, 5], // Hot shit
  "merda di cane": [3, 5], // Dog shit
  "merda fumante": [3, 5], // Steaming shit
  "nella merda": [3, 5], // In the shit
  "di merda": [3, 5], // Of shit / shitty

  // === EXPANSION: stronzo derivatives ===
  "stronzissimo": [3, 4], // Ultimate asshole
  "stronzate a raffica": [3, 5], // Rapid-fire bullshit
  "stronzo di prima categoria": [3, 4], // First-class asshole
  "stronzino": [3, 4], // Little turd (diminutive)
  "stronzacchione": [1, 4], // Big idiotic turd
  "stronzata pazzesca": [3, 5], // Crazy bullshit
  "stronza pazza": [3, 4], // Crazy bitch

  // === EXPANSION: Neapolitan profanity ===
  "chillo strunz": [3, 4], // That turd (Neapolitan)
  "capa di cazzo": [4, 4], // Dickhead (Neapolitan)
  "sfaccimma e mammeta": [3, 4], // Your mother's cum (Neapolitan)
  "o cazz ro viecchio": [4, 4], // The old man's dick (Neapolitan)
  "puozz sculà": [3, 4], // May you drip (Neapolitan curse)
  "puozze morì": [5, 5], // May you die (Neapolitan curse)
  "fesso": [1, 4], // Idiot / pussy (Neapolitan)
  "fessa": [1, 4], // Idiot / pussy (Neapolitan, fem)
  "fessacchiotto": [1, 4], // Big fool (Neapolitan)
  "scimuniato": [1, 4], // Dumb (Neapolitan)
  "scemunito": [3, 4], // Dimwit (Neapolitan variant)
  "appicceco": [3, 4], // Sticky / annoying (Neapolitan)
  "cazzariello": [1, 4], // Little dick / fool (Neapolitan)
  "chiattillo": [1, 4], // Little fatty (Neapolitan)
  "ciuccio": [1, 4], // Donkey / idiot (Neapolitan)
  "curnuto": [3, 4], // Cuckold (Neapolitan)
  "jettatore": [3, 4], // Jinx-bringer (Neapolitan, offensive)
  "pucchiacca": [4, 4], // Pussy (Neapolitan)
  "purpo": [3, 4], // Octopus / groper (Neapolitan insult)
  "scorfano": [1, 4], // Scorpionfish / ugly person
  "tamarro": [1, 3], // Trashy person (Southern)
  "tamarra": [1, 3], // Trashy woman (Southern)
  "vaiassa": [3, 4], // Vulgar woman (Neapolitan)
  "vrenzola": [3, 4], // Dirty woman (Neapolitan)
  "mappina": [3, 4], // Rag / useless person (Neapolitan)
  "capa e' pezza": [1, 4], // Cloth-head / idiot (Neapolitan)
  "sfaccimma int' a vocca": [3, 4], // Cum in the mouth (Neapolitan)
  "piezzo e merda": [3, 5], // Piece of shit (Neapolitan)

  // === EXPANSION: Sicilian profanity ===
  "babbu": [1, 4], // Idiot (Sicilian)
  "babbasunazzu": [1, 4], // Enormous idiot (Sicilian)
  "buttana": [5, 4], // Whore (Sicilian)
  "buttana di to ma": [5, 4], // Your mother's a whore (Sicilian)
  "buttanazzu": [5, 4], // Big whore (Sicilian)
  "caddozzu": [4, 4], // Dickish (Sicilian)
  "calaculu": [1, 4], // Coward (Sicilian, lit. drop-ass)
  "camurrista": [3, 4], // Annoying person (Sicilian)
  "chiavaturi": [3, 5], // Fucker (Sicilian)
  "cornuto fetente": [3, 4], // Stinking cuckold (Sicilian)
  "curnuto e scannatu": [3, 4], // Cuckolded and slaughtered (Sicilian)
  "minchia di merda": [4, 5], // Shit dick (Sicilian)
  "minchiata": [3, 5], // Bullshit (Sicilian)
  "minnulinu": [4, 4], // Small-dicked (Sicilian)
  "sticchiu puzzolente": [4, 4], // Stinking pussy (Sicilian)
  "vastasata": [3, 4], // Vulgar act (Sicilian)
  "figghiu di buttana": [5, 5], // Son of a whore (Sicilian)
  "ammazzatillu": [3, 4], // Kill that one (Sicilian)
  "futtitinni": [3, 5], // Fuck off / don't care (Sicilian)
  "camurria": [3, 4], // Nuisance / annoying thing (Sicilian)
  "jancu": [1, 4], // Stupid (Sicilian)

  // === EXPANSION: Venetian profanity ===
  "monada": [1, 4], // Foolishness / cute thing (Venetian)
  "mona de to mare": [4, 4], // Your mother's pussy (Venetian)
  "mona de un can": [4, 4], // Pussy of a dog (Venetian)
  "sboro": [3, 4], // Cum / exclamation (Venetian)
  "sborón": [3, 4], // Big ejaculator (Venetian)
  "andemo in mona": [3, 4], // Let's go to hell (Venetian)
  "va in mona": [3, 4], // Go to hell (Venetian)
  "va in mona de to mare": [4, 4], // Go to your mother's pussy (Venetian)
  "ciapa": [3, 4], // Take this / catch (Venetian vulgar)
  "desgrasiato": [3, 4], // Wretched (Venetian)
  "cogión": [1, 4], // Idiot (Venetian from coglione)
  "bòcia": [1, 4], // Kid / fool (Venetian)
  "toso de merda": [3, 5], // Shit kid (Venetian)
  "porco bòia": [3, 4], // Pig executioner (Venetian blasphemy)
  "ostrega": [1, 2], // Oyster / damn (Venetian exclamation)
  "sacramegnon": [3, 4], // Sacrament (Venetian blasphemy)
  "can de dio": [3, 4], // Dog of God (Venetian blasphemy)
  "porco can": [3, 4], // Pig dog (Venetian blasphemy)

  // === EXPANSION: Tuscan/Florentine profanity ===
  "bischero": [1, 4], // Idiot / dick (Florentine)
  "bischera": [1, 4], // Idiot (Florentine, fem)
  "bischerata": [1, 4], // Stupid thing (Florentine)
  "bischerone": [1, 4], // Big idiot (Florentine)
  "grullo": [1, 4], // Stupid (Florentine)
  "grulla": [1, 4], // Stupid (Florentine, fem)
  "grullone": [1, 4], // Big stupid (Florentine)
  "coglioncel": [1, 4], // Little idiot (Tuscan archaic)
  "minchionare": [3, 4], // To make fun of (Tuscan)
  "minchionatura": [3, 4], // Mockery (Tuscan)
  "bucaiola": [3, 4], // Gay woman (derogatory, Tuscan)

  // === EXPANSION: Sardinian profanity ===
  "arriga": [3, 4], // Annoying (Sardinian)
  "malasorte": [3, 4], // Bad luck / cursed (Sardinian)
  "connoscentzia": [3, 4], // Derogatory for know-it-all (Sardinian)
  "fottidu": [3, 5], // Fucked (Sardinian)
  "porcheddu": [3, 4], // Little pig (Sardinian insult)
  "porcanu": [3, 4], // Pig-like (Sardinian)
  "maccu": [1, 4], // Fool (Sardinian)
  "asinu": [1, 4], // Donkey / fool (Sardinian)
  "molente": [1, 4], // Donkey / idiot (Sardinian)
  "fegu": [1, 4], // Liver / coward (Sardinian)

  // === EXPANSION: Roman/Romanesco profanity ===
  "ammazzete": [3, 4], // Damn / wow (Roman)
  "ammazza che": [3, 4], // Damn what (Roman exclamation)
  "fijo de mignotta": [5, 5], // Son of a whore (Roman)
  "fijo de na mignotta": [5, 5], // Son of a whore (Roman full)
  "sorca de tu madre": [4, 4], // Your mother's pussy (Roman)
  "corvaccio": [1, 4], // Ugly crow / bad omen (Roman)
  "straccione": [3, 4], // Raggedy / bum (Roman)
  "stracciona": [3, 4], // Raggedy woman (Roman)
  "pezzente": [1, 4], // Beggar / loser (Roman/Southern)
  "poveraccio": [3, 4], // Wretch / poor bastard
  "caciara": [3, 4], // Mess / racket (Roman)
  "monnezza": [3, 4], // Garbage (Roman)
  "monnezzaro": [3, 4], // Garbage dump / garbage person (Roman)
  "roscetta": [3, 4], // Little redhead (Roman, pejorative fem)
  "chiodo": [1, 4], // Nail / ugly person (Roman)
  "buzzurro": [3, 4], // Barbarian / rude person (Roman)
  "pizzardone": [3, 4], // Traffic cop (Roman, derogatory)
  "er cazzo": [4, 4], // The dick (Roman)
  "va a morì ammazzato": [5, 5], // Go die killed (Roman curse)
  "va a morì accoppato": [5, 5], // Go die murdered (Roman curse)
  "ma vatte a fa benedì": [2, 3], // Go get blessed (Roman euphemism)
  "daje ar cazzo": [4, 4], // Come on with the dick (Roman)

  // === EXPANSION: More sexual terms ===
  "ammucchiarsi": [4, 4], // To pile up / orgy
  "bondage": [2, 3], // Bondage
  "sadomaso": [2, 3], // S&M
  "dominatrice": [4, 4], // Dominatrix
  "feticista": [4, 4], // Fetishist
  "voyeurismo": [4, 4], // Voyeurism
  "esibizionista": [4, 4], // Exhibitionist
  "molestare": [4, 4], // To molest
  "stupro": [5, 5], // Rape
  "stuprare": [5, 5], // To rape
  "stupratore": [5, 5], // Rapist
  "pedofilo": [5, 5], // Pedophile
  "pedofilia": [5, 5], // Pedophilia
  "incestuoso": [5, 5], // Incestuous
  "incesto": [5, 5], // Incest
  "necrofilia": [4, 4], // Necrophilia
  "zoofilia": [4, 4], // Zoophilia
  "coprofagia": [4, 4], // Coprophagia
  "coprofilia": [4, 4], // Coprophilia
  "porno": [2, 3], // Porn
  "pornazzo": [4, 4], // Bad porn / sleazy porn
  "pornografico": [4, 4], // Pornographic
  "maniaco sessuale": [4, 4], // Sexual maniac
  "depravato": [4, 4], // Depraved
  "depravata": [4, 4], // Depraved (fem)
  "pervertito": [4, 4], // Pervert
  "pervertita": [4, 4], // Pervert (fem)
  "satiro": [4, 4], // Satyr / lecher
  "ninfomane": [4, 4], // Nymphomaniac
  "trombata epica": [4, 5], // Epic fuck
  "chiavata leggendaria": [4, 5], // Legendary fuck
  "ammucchiata selvaggia": [4, 4], // Wild orgy
  "orgia": [4, 4], // Orgy
  "sesso anale": [4, 4], // Anal sex
  "sesso orale": [4, 5], // Oral sex
  "gangbang": [3, 5], // Gangbang
  "doppia penetrazione": [4, 4], // Double penetration
  "fellatio": [4, 3], // Fellatio
  "cunnilingus": [4, 3], // Cunnilingus
  "anilingus": [4, 5], // Anilingus
  "eiaculazione": [4, 4], // Ejaculation
  "eiaculare": [4, 4], // To ejaculate
  "eiaculazione facciale": [4, 4], // Facial ejaculation
  "venire": [1, 1], // To cum (lit. to come)
  "godere": [2, 2], // To enjoy / to orgasm
  "sborrarsi": [4, 4], // To cum (reflexive)
  "incularti": [4, 4], // To sodomize you

  // === EXPANSION: Body part vulgarities ===
  "tettona": [4, 3], // Big-titted woman
  "tettone": [4, 3], // Big tits
  "chiappe": [4, 3], // Butt cheeks
  "natica": [4, 3], // Buttock
  "natiche": [4, 3], // Buttocks
  "culetto": [4, 3], // Little ass
  "culo grosso": [1, 4], // Fat ass
  "culo flaccido": [4, 3], // Flabby ass
  "buco del culo": [4, 3], // Asshole (lit. hole of ass)
  "sfintere": [4, 3], // Sphincter
  "prepuzio": [4, 3], // Foreskin
  "glande": [4, 4], // Glans
  "scroto": [4, 3], // Scrotum
  "clitoride": [4, 3], // Clitoris
  "pube": [4, 3], // Pubis
  "cappella": [1, 1], // Glans (lit. chapel)
  "cazzata di cappella": [3, 5], // Glans bullshit

  // === EXPANSION: More homophobic slurs across dialects ===
  "froscetto": [5, 4], // Little fag (diminutive)
  "culattinone": [5, 4], // Big gay man (derog augmentative)
  "checchina": [5, 4], // Effeminate man (derogatory dim)
  "finocchione": [5, 4], // Big faggot (Tuscan)
  "invertito": [5, 4], // Inverted / gay (archaic derog)
  "invertita": [5, 4], // Inverted (fem, archaic derog)
  "bardassa": [5, 4], // Catamite / passive gay (archaic)
  "leccaculi": [5, 4], // Ass-licker (plural)
  "frociarolo": [5, 4], // Faggot-frequenter
  "omosessualaccio": [1, 4], // Ugly homosexual (augmentative)

  // === EXPANSION: More ethnic slurs ===
  "terroncello": [5, 4], // Little terrone (diminutive slur)
  "polentaro": [5, 4], // Polenta-eater (slur variant)
  "merdionale": [5, 5], // Shit-southerner (compound slur)
  "crucco": [5, 4], // Slur for Germans
  "crucca": [5, 4], // Slur for German women
  "muso giallo": [5, 4], // Yellow face (anti-Asian slur)
  "viso giallo": [5, 4], // Yellow face (variant)
  "mangia spaghetti": [5, 4], // Spaghetti-eater (anti-Italian, ironic internal)
  "vu lavà": [5, 4], // You wash (offensive for immigrants)
  "clandestino": [2, 2], // Illegal (used as slur)
  "clandestina": [2, 2], // Illegal (fem, used as slur)
  "marocchina": [5, 4], // Moroccan (fem, used as slur)
  "albanese di merda": [5, 5], // Shit Albanian (compound slur)
  "rumeno di merda": [5, 5], // Shit Romanian (compound slur)
  "sporco negro": [5, 4], // Dirty black (compound slur)
  "sporca negra": [5, 4], // Dirty black (fem compound slur)
  "zingarata": [5, 4], // Gypsy trick (offensive)
  "zingaccia": [5, 4], // Dirty gypsy (augmentative fem)
  "ebreo di merda": [5, 5], // Shit Jew (compound slur)

  // === EXPANSION: Internet slang / modern ===
  "minchia bella": [4, 3], // Beautiful dick (Sicilian excl.)
  "minchia che": [4, 3], // Dick what (Sicilian excl.)
  "porcoddio": [2, 3], // PorcoDio variant (no space)
  "dioporco": [2, 3], // DioPorco variant (reversed)
  "diocane": [2, 3], // DioCane variant (no space)
  "cazzomerda": [4, 5], // Dick-shit (compound)
  "merdacane": [3, 5], // Shit-dog (compound)
  "vaffancazzo": [4, 5], // Go fuck a dick (variant)
  "vaffammoc": [3, 5], // Fuck off (Neapolitan internet)
  "vaffammocc": [3, 5], // Fuck off (Neapolitan variant)
  "fancazzista": [4, 3], // Lazy person (lit. doing-dicks)
  "fancazzismo": [4, 3], // Laziness (lit. doing-dicks-ism)
  "scassapalle": [2, 3], // Ball-breaker
  "scassaminchia": [4, 3], // Dick-breaker (Sicilian)
  "spacca il cazzo": [4, 3], // Breaks the dick / annoying
  "che due coglioni": [4, 3], // What two balls / how annoying
  "che due palle": [4, 3], // What two balls / how boring
  "che palle": [4, 3], // What balls / how boring
  "ma che cazzo dici": [3, 5], // What the fuck are you saying
  "ma vaffanculo va": [3, 5], // Go fuck off already
  "ma vai a cagare": [3, 5], // Go take a shit
  "vai a farti fottere": [3, 5], // Go get yourself fucked
  "vai a cagare": [3, 5], // Go shit yourself
  "vai a dare via il culo": [3, 3], // Go give away your ass
  "vai a pisciare": [2, 3], // Go piss yourself

  // === EXPANSION: More general insults ===
  "cretino": [1, 4], // Cretin
  "cretina": [1, 4], // Cretin (fem)
  "deficiente": [2, 3], // Deficient / idiot
  "scimunito": [1, 4], // Dimwit
  "scimunita": [1, 4], // Dimwit (fem)
  "idiota": [1, 4], // Idiot
  "imbranato": [1, 4], // Clumsy / incompetent
  "imbranata": [1, 4], // Clumsy (fem)
  "incapace": [1, 4], // Incapable
  "buono a nulla": [1, 4], // Good for nothing
  "buona a nulla": [1, 4], // Good for nothing (fem)
  "fallito": [1, 4], // Failure / loser
  "fallita": [1, 4], // Failure (fem)
  "sfigato": [1, 4], // Loser / unlucky
  "sfigata": [1, 4], // Loser (fem)
  "sfiga": [1, 4], // Bad luck
  "sfiga nera": [1, 4], // Black bad luck
  "coglione di merda": [1, 4], // Shit idiot
  "stronzo figlio di puttana": [5, 5], // Turd son of a whore
  "cagacazzi infernale": [4, 4], // Infernal dick-annoyer
  "teste di cazzo ambulante": [4, 4], // Walking dickhead
  "parassite": [1, 4], // Parasite
  "verme": [2, 3], // Worm
  "vermiciattolo": [1, 4], // Little worm
  "schifoso": [1, 4], // Disgusting
  "schifosa": [1, 4], // Disgusting (fem)
  "lurido": [1, 4], // Filthy
  "lurida": [1, 4], // Filthy (fem)
  "viscido": [1, 4], // Slimy
  "viscida": [1, 4], // Slimy (fem)
  "porco schifoso": [1, 4], // Disgusting pig
  "maiale": [1, 4], // Pig
  "maiala": [1, 4], // Pig (fem)
  "maialona": [1, 4], // Big pig (fem)
  "maialotto": [1, 4], // Little pig
  "bastardo": [3, 4], // Bastard
  "bastarda": [3, 4], // Bastard (fem)
  "bastardone": [3, 4], // Big bastard
  "miserabile": [1, 4], // Miserable wretch
  "meschino": [1, 4], // Petty / wretched
  "infame": [1, 4], // Infamous / traitor
  "infamone": [1, 4], // Big traitor
  "infamata": [1, 4], // Infamous act
  "vigliacco": [1, 4], // Coward
  "vigliacca": [1, 4], // Coward (fem)
  "codardo": [1, 4], // Coward
  "codarda": [1, 4], // Coward (fem)
  "pusillanime": [1, 4], // Pusillanimous
  "ratto": [1, 4], // Rat
  "ratto di fogna": [1, 4], // Sewer rat
  "scarafaggio": [1, 2], // Cockroach
  "blatta": [1, 2], // Cockroach
  "pidocchioso": [1, 4], // Lousy
  "pidocchiosa": [1, 4], // Lousy (fem)
  "cagone": [1, 4], // Coward / shitter
  "cagona": [1, 4], // Coward (fem)
  "cagasotto": [1, 4], // Pants-shitter / coward
  "cacasotto": [3, 5], // Pants-shitter variant
  "merdaiolo": [3, 5], // Shit-worker

  // === EXPANSION: More bestemmie combinations ===
  "porco dio in croce": [3, 4], // Pig God on the cross
  "porco dio e la madonna": [3, 4], // Pig God and the Madonna
  "porco dio santo": [3, 4], // Pig holy God
  "porco dio ladro": [3, 4], // Pig God thief
  "porco dio maledetto": [3, 4], // Pig God cursed
  "porco dio infame": [3, 4], // Pig God infamous
  "porco dio bastardo": [3, 4], // Pig God bastard
  "porco dio demonio": [3, 4], // Pig God demon
  "porco dio stronzo": [3, 4], // Pig God asshole
  "porco dio merda": [3, 5], // Pig God shit
  "dio maledetto": [3, 4], // God cursed
  "dio vigliacco": [1, 4], // God coward
  "dio farabutto": [3, 4], // God scoundrel
  "dio verme": [3, 4], // God worm
  "dio traditore": [3, 4], // God traitor
  "dio cornuto": [3, 4], // God cuckold
  "dio zoccolo": [3, 4], // God clog/slut
  "dio puttaniere": [5, 4], // God whoremonger
  "dio crepa": [3, 4], // God drop dead
  "dio di merda": [3, 5], // God of shit
  "cristo di merda": [3, 5], // Christ of shit
  "cristo infame": [3, 4], // Christ infamous
  "cristo cornuto": [3, 4], // Christ cuckold
  "cristo maledetto": [3, 4], // Christ cursed
  "cristo traditore": [3, 4], // Christ traitor
  "cristo vigliacco": [1, 4], // Christ coward
  "gesù bastardo": [3, 4], // Jesus bastard
  "gesù di merda": [3, 5], // Jesus of shit
  "gesù maledetto": [3, 4], // Jesus cursed
  "madonna di merda": [3, 5], // Madonna of shit
  "madonna maledetta": [3, 4], // Madonna cursed
  "madonna bastarda": [3, 4], // Madonna bastard (fem)
  "madonna cornuta": [3, 4], // Madonna cuckold (fem)
  "madonna ladra": [3, 4], // Madonna thief (fem)
  "madonna sporca": [3, 4], // Madonna dirty
  "madonna fottuta": [3, 5], // Madonna fucked
  "madonna stronza": [3, 4], // Madonna bitch
  "porca madonna ladra": [3, 4], // Pig Madonna thief
  "porca madonna zoccola": [3, 4], // Pig Madonna slut
  "porca madonna maiala": [3, 4], // Pig Madonna pig
  "santo cazzo": [4, 4], // Holy dick
  "santo culo": [3, 4], // Holy ass
  "porco il papa": [3, 4], // Pig the Pope
  "porco il vaticano": [3, 4], // Pig the Vatican
  "mannaggia a dio": [3, 4], // Damn God (Southern)
  "mannaggia alla madonna": [3, 4], // Damn the Madonna
  "mannaggia a cristo": [3, 4], // Damn Christ
  "mannaggia ai santi": [3, 4], // Damn the saints
  "mannaggia all'ostia": [3, 4], // Damn the host
  "madonna bubbolona": [2, 3], // Madonna bubble (euphemistic)
  "dio bono": [2, 3], // God good (Tuscan euphemistic)
  "dio birillo": [2, 3], // God pin (euphemistic)
  "ostia maledetta": [3, 4], // Cursed host
  "sacramento del cazzo": [4, 4], // Sacrament of the dick
  "santiddio porco": [3, 4], // Holy God pig
  "dio merdoso": [3, 5], // God shitty
  "dio coglione": [1, 4], // God idiot
  "madonna cogliona": [1, 4], // Madonna idiot (fem)
  "porco giuda bastardo": [3, 4], // Pig Judas bastard
  "diavolo porco": [3, 4], // Pig devil

  // === EXPANSION: Calabrese profanity ===
  "minchia di to patri": [1, 4], // Your father's dick (Calabrese)
  "cornuto di merda": [3, 5], // Shit cuckold (Calabrese)
  "cazzo e mammata": [4, 4], // Your mom's dick (Calabrese)
  "porca di to ma": [3, 4], // Your mother's a pig (Calabrese)
  "scimunitu": [1, 4], // Idiot (Calabrese)
  "zoccola schifosa": [3, 4], // Disgusting slut (Calabrese)
  "guappu": [3, 4], // Thug (Calabrese variant)
  "sdirruto": [3, 4], // Skinny/wretched (Calabrese)
  "cafonaccio": [3, 4], // Big boor (Calabrese)
  "scassacazzi": [4, 4], // Dick-breaker (Calabrese)
  "fracicu": [3, 4], // Rotten (Calabrese)
  "piattola": [3, 4], // Crab louse / annoying person (Calabrese)
  "chiattona schifosa": [1, 4], // Disgusting fat woman (Calabrese)
  "mbriacone": [1, 3], // Big drunk (Calabrese)
  "cornuto maledetto": [3, 4], // Cursed cuckold (Calabrese)
  "faccia di stronzo": [3, 4], // Turd face (Southern)

  // === EXPANSION: Pugliese profanity ===
  "cazzone di merda": [4, 5], // Shit big dick (Pugliese)
  "strunz fetent": [3, 4], // Stinking turd (Pugliese)
  "fessa come na scarpa": [1, 4], // Dumb as a shoe (Pugliese)
  "capa di cazz": [4, 4], // Dickhead (Pugliese)
  "puttanun": [5, 4], // Big whore (Pugliese)
  "curnut": [3, 4], // Cuckold (Pugliese)
  "cazzimmuso": [3, 4], // Nasty-faced (Pugliese/Neapolitan)
  "sfaccimm a mammeta": [3, 4], // Your mother's cum (Pugliese)
  "lurdacchione": [3, 4], // Very dirty person (Pugliese)

  // === EXPANSION: Emiliano-Romagnolo profanity ===
  "ciulare": [3, 5], // To fuck (Emiliano)
  "ciulata": [3, 5], // A fuck (Emiliano)
  "pirla del cazzo": [4, 4], // Dick pirla (compound)
  "burdel": [3, 4], // Mess / brothel (Emiliano)
  "putana": [5, 4], // Whore (Emiliano variant)
  "s-ciapa": [4, 4], // Slap / pussy (Emiliano)
  "s-ciapona": [4, 4], // Big pussy / slut (Emiliano)
  "incasinato": [3, 5], // In a mess / fucked up
  "incasinata": [3, 5], // In a mess / fucked up (fem)

  // === EXPANSION: Lombard profanity ===
  "pirla di merda": [1, 4], // Shit idiot (Lombard)
  "pirlata": [1, 4], // Stupid thing (Lombard)
  "pirlone": [1, 4], // Big idiot (Lombard)
  "ciula": [1, 4], // Idiot / ass (Lombard)
  "ciulón": [1, 4], // Big idiot (Lombard)
  "balengone": [1, 4], // Big idiot (Piemontese/Lombard)
  "balengo": [1, 4], // Idiot (Piemontese/Lombard)
  "barlafùs": [3, 4], // Weird / crazy (Lombard)
  "cùi": [3, 4], // Ass (Lombard dialect)
  "fiòcca": [4, 4], // Pussy (Lombard dialect)
  "minga de cazzo": [4, 4], // Nothing of a dick (Lombard)
  "va a ciapà i ratt": [3, 5], // Go catch rats (Lombard, fuck off)
  "testa di pirla": [3, 4], // Pirla head (Lombard)

  // === EXPANSION: Piemontese profanity ===
  "bogia nen": [3, 4], // Don't move / stubborn (Piemontese)
  "cojone": [1, 4], // Idiot (Piemontese from coglione)
  "nèn capissi un cazzo": [4, 4], // Not understanding a dick (Piemontese)
  "fòla": [3, 5], // Lies / bullshit (Piemontese)
  "ciucca": [1, 3], // Drunkard (Piemontese fem)
  "ciuccone": [1, 3], // Big drunkard (Piemontese)
  "fabiòcc": [1, 4], // Idiot (Piemontese)
  "babeo": [1, 4], // Idiot (Piemontese)

  // === EXPANSION: Ligurian profanity ===
  "belinata": [1, 4], // Stupid thing (Ligurian)
  "belinone": [1, 4], // Big dick / big idiot (Ligurian)
  "belino de merda": [4, 5], // Shit dick (Ligurian)
  "scialla": [1, 2], // Relaxed / don't care (Ligurian/slang)
  "figlio di belinone": [4, 4], // Son of a big dick (Ligurian)
  "facciadaculo": [3, 4], // Ass-face (Ligurian compound)
  "brutto belinone": [1, 4], // Ugly big dick (Ligurian)

  // === EXPANSION: Friulian profanity ===
  "cjoc": [1, 3], // Drunk (Friulian)
  "scjassecoglions": [3, 4], // Ball-breaker (Friulian)
  "madone purcje": [3, 4], // Pig Madonna (Friulian blasphemy)
  "diu cjan": [3, 4], // God dog (Friulian blasphemy)
  "diu purcit": [3, 4], // God piglet (Friulian blasphemy)
  "mone": [1, 4], // Pussy / idiot (Friulian)
  "purcje": [3, 4], // Pig (Friulian insult)

  // === EXPANSION: More minchia derivatives ===
  "minchiarola": [1, 4], // Foolish (Sicilian)
  "minchiatona": [3, 5], // Big bullshit (Sicilian)
  "minchiata colossale": [3, 5], // Colossal bullshit (Sicilian)
  "minchia di cartone": [4, 4], // Cardboard dick (Sicilian insult)
  "ammhinca": [2, 3], // Damn (minchia euphemism)
  "santa minchia": [4, 4], // Holy dick (Sicilian excl.)
  "per la minchia": [4, 4], // By the dick (Sicilian)
  "staminchia": [4, 4], // This dick (Sicilian contraction)
  "sticchio di to ma": [4, 4], // Your mother's pussy (Sicilian)
  "figlio di minchia": [4, 4], // Son of a dick (Sicilian)

  // === EXPANSION: More compound phrases ===
  "va a fanculo": [3, 5], // Go fuck yourself (variant)
  "va' a farti fottere": [3, 5], // Go get yourself fucked
  "va a fare in culo": [3, 5], // Go get it in the ass
  "va in culo a tua madre": [3, 5], // Go up your mother's ass
  "ma va a cagare va": [3, 5], // Go take a shit already
  "va a morire": [5, 5], // Go die
  "va' a morire ammazzato": [5, 5], // Go die murdered
  "vai a fare in culo": [3, 5], // Go get it in the ass
  "vai a dar via il culo": [3, 5], // Already listed variant
  "fottiti stronzo": [3, 5], // Fuck yourself asshole
  "fottiti troia": [5, 5], // Fuck yourself whore
  "ficcatelo nel culo": [3, 5], // Stick it up your ass
  "ficcatelo in culo": [3, 5], // Stick it in your ass
  "mettitelo nel culo": [3, 5], // Put it in your ass
  "mettitelo in culo": [3, 5], // Put it up your ass
  "succhiami il cazzo": [4, 5], // Suck my dick
  "leccami il culo": [3, 5], // Lick my ass
  "baciami il culo": [3, 5], // Kiss my ass
  "vai a puttane": [5, 5], // Go to whores
  "tua madre è una puttana": [5, 5], // Your mother is a whore
  "tua madre fa la troia": [5, 5], // Your mother acts like a whore
  "tuo padre è un cornuto": [1, 4], // Your father is a cuckold
  "figlio di una cagna": [3, 5], // Son of a female dog
  "figlio di una vacca": [3, 5], // Son of a cow
  "figlio di una zoccola": [3, 5], // Son of a slut
  "rompimi il cazzo": [4, 5], // Break my dick / annoy me
  "non rompere il cazzo": [4, 5], // Don't break the dick / stop annoying
  "non rompere i coglioni": [4, 5], // Don't break the balls
  "non rompere le palle": [4, 5], // Don't break the balls
  "mi hai rotto il cazzo": [4, 5], // You broke my dick / annoyed me
  "mi hai rotto i coglioni": [4, 5], // You broke my balls
  "che figlio di puttana": [5, 5], // What a son of a whore
  "ma sei scemo": [1, 4], // But are you stupid
  "ma sei coglione": [1, 4], // But are you an idiot
  "sei un cazzo di niente": [4, 5], // You're a dick of nothing
  "sei una merda": [3, 5], // You're shit
  "sei un pezzo di merda": [3, 5], // You're a piece of shit
  "sei uno stronzo di merda": [3, 5], // You're a shit asshole
  "ma che cazzo fai": [3, 5], // What the fuck are you doing
  "ma che minchia vuoi": [4, 5], // What the dick do you want (Sicilian)
  "levati dal cazzo": [4, 5], // Get out of the dick / move
  "levati dai coglioni": [4, 5], // Get out of the balls / move
  "fuori dalle palle": [4, 5], // Out of the balls / move
  "togliti dai coglioni": [4, 5], // Remove yourself from balls / move

  // === EXPANSION: More sexual terms ===
  "sesso di gruppo": [4, 4], // Group sex
  "ammucchiatona": [4, 4], // Big orgy
  "orgia sfrenata": [4, 4], // Unbridled orgy
  "porcheria sessuale": [4, 4], // Sexual filthiness
  "scoparsi": [4, 5], // To fuck oneself / each other
  "farsi scopare": [4, 5], // To get fucked
  "farsi chiavare": [4, 5], // To get fucked (variant)
  "farsi trombare": [4, 5], // To get fucked (variant)
  "farsi inculare": [4, 4], // To get sodomized
  "dare il culo": [4, 4], // To give ass / be submissive
  "prendere nel culo": [4, 4], // To take it in the ass
  "prenderlo in culo": [4, 4], // To take it in the ass (variant)
  "preso per il culo": [4, 4], // Taken for the ass / mocked
  "culare": [4, 4], // To sodomize (slang)
  "sverginata": [4, 4], // Deflowering (noun)
  "spompinata": [4, 5], // Blowjob (noun)
  "pompino di merda": [4, 5], // Shit blowjob
  "succhiacazzi": [4, 4], // Cock-sucker
  "succhiapiselli": [4, 4], // Pea-sucker (dick-sucker)
  "mangiamerda": [4, 5], // Shit-eater
  "mangiacazzi": [4, 4], // Dick-eater
  "leccafiga": [4, 4], // Pussy-licker
  "ditata": [4, 4], // Fingering (noun)
  "scopata selvaggia": [4, 5], // Wild fuck
  "chiavata bestiale": [4, 5], // Bestial fuck
  "trombata da dio": [4, 5], // Godly fuck
  "venire come un treno": [4, 4], // To cum like a train
  "schizzare": [4, 4], // To squirt
  "schizzata": [4, 4], // Squirt (noun)
  "sborrata in faccia": [4, 4], // Cumshot to the face
  "sborrare addosso": [4, 4], // To cum on someone
  "puttanone di strada": [5, 4], // Big street whore
  "accompagnatrice": [1, 1], // Escort (euphemistic)
  "gigolò": [4, 4], // Gigolo / male escort
  "marchettaro": [5, 4], // Male prostitute
  "marchetta": [5, 4], // Trick / prostitution act
  "battere il marciapiede": [5, 4], // To walk the sidewalk (prostitution)
  "battere": [2, 1], // To prostitute (slang)
  "battitrice": [5, 4], // Female who prostitutes
  "donna di strada": [4, 4], // Street woman
  "donna di malaffare": [4, 4], // Woman of ill repute

  // === EXPANSION: More homophobic slurs across dialects ===
  "culo rotto": [5, 4], // Broken ass (homophobic)
  "buco di culo": [5, 4], // Already listed variant
  "ricchioncello": [5, 4], // Little faggot (Neapolitan dim)
  "frocione di merda": [5, 5], // Shit big faggot
  "frocio del cazzo": [5, 4], // Dick faggot
  "culattone di merda": [5, 5], // Shit gay man
  "finocchio di merda": [5, 5], // Shit faggot
  "checchetta": [5, 4], // Little effeminate man (derog dim)
  "schecquiato": [5, 4], // Effeminate (derogatory)
  "busone di merda": [5, 5], // Shit gay man
  "arruso fetente": [5, 4], // Stinking gay (Sicilian)
  "bucaiolo di merda": [5, 5], // Shit gay (Tuscan)
  "bardassone": [5, 4], // Big catamite (archaic)
  "femminiello": [5, 4], // Effeminate man (Neapolitan, derog)
  "femminuccia": [5, 4], // Little woman / sissy (derog)
  "donnicciola": [5, 4], // Little woman / sissy (derog)
  "mezzo uomo": [5, 4], // Half a man
  "non è uomo": [5, 4], // Not a man
  "maschiaccio": [5, 4], // Tomboy (sometimes derogatory)

  // === EXPANSION: More ethnic slurs ===
  "terroni di merda": [5, 5], // Shit southerners (plural slur)
  "polentoni di merda": [5, 5], // Shit northerners (plural slur)
  "mangia banane": [5, 4], // Banana-eater (anti-Black slur)
  "negro di merda": [5, 5], // Shit n-word
  "negra di merda": [5, 5], // Shit n-word (fem)
  "sporco zingaro": [5, 4], // Dirty gypsy
  "sporca zingara": [5, 4], // Dirty gypsy (fem)
  "zingaro di merda": [5, 5], // Shit gypsy
  "cinese di merda": [5, 5], // Shit Chinese
  "muso giallo di merda": [5, 5], // Shit yellow-face
  "sporco arabo": [5, 4], // Dirty Arab
  "arabo di merda": [5, 5], // Shit Arab
  "islamico di merda": [5, 5], // Shit Islamic
  "musulmano di merda": [5, 5], // Shit Muslim
  "ebreo sporco": [5, 4], // Dirty Jew
  "giudeo": [5, 4], // Jew (derogatory usage)
  "giudeo di merda": [5, 5], // Shit Jew
  "crucco di merda": [5, 5], // Shit German
  "albanese": [1, 1], // Albanian (used as slur)
  "rumeno": [1, 1], // Romanian (used as slur)
  "romeno di merda": [5, 5], // Shit Romanian
  "filippino di merda": [5, 5], // Shit Filipino
  "straniero di merda": [5, 5], // Shit foreigner
  "fuori dal mio paese": [5, 4], // Out of my country
  "torna al tuo paese": [5, 4], // Go back to your country
  "mangiagatti": [5, 4], // Cat-eater (anti-Chinese slur)
  "mangia cammelli": [5, 4], // Camel-eater (anti-Arab slur)

  // === EXPANSION: Internet slang and abbreviations ===
  "vfnc": [2, 3], // Vaffanculo (abbreviation)
  "stocazzo": [4, 3], // This dick (internet slang)
  "sto cazzo": [4, 3], // This dick
  "e sti cazzi": [4, 3], // And these dicks / so what
  "ammazza oh": [2, 3], // Damn oh (Roman internet)
  "ammazza che stronzo": [3, 3], // Damn what an asshole
  "minkia": [2, 3], // Minchia variant spelling
  "madó": [2, 3], // Madonna shortened
  "maronn": [2, 3], // Madonna (Neapolitan shortened)
  "maronna": [2, 3], // Madonna (Neapolitan variant)
  "maronna mia": [2, 3], // My Madonna (Neapolitan)
  "diofa": [2, 3], // DioPorco euphemism
  "diosanto": [2, 3], // God holy (borderline)
  "porkatroia": [2, 3], // PorcaTroia variant
  "porkodio": [2, 3], // PorcoDio variant
  "porkamadonna": [2, 3], // PorcaMadonna variant
  "c4zzo": [2, 5], // Cazzo evasion
  "c@zzo": [2, 5], // Cazzo evasion
  "cazz0": [2, 5], // Cazzo evasion
  "str0nzo": [2, 5], // Stronzo evasion
  "str0nz0": [2, 5], // Stronzo evasion
  "m3rda": [3, 5], // Merda evasion
  "m€rda": [2, 5], // Merda evasion
  "p0rco": [2, 5], // Porco evasion
  "putt4na": [2, 5], // Puttana evasion
  "putt@na": [2, 5], // Puttana evasion
  "c0glione": [2, 5], // Coglione evasion
  "f1ga": [2, 5], // Figa evasion
  "f1ca": [2, 5], // Fica evasion
  "fr0cio": [2, 5], // Frocio evasion
  "vaffancul0": [2, 5], // Vaffanculo evasion
  "cul0": [3, 5], // Culo evasion
  "tr0ia": [2, 5], // Troia evasion
  "z0ccola": [2, 5], // Zoccola evasion
  "minch1a": [2, 5], // Minchia evasion
  "p1rla": [2, 5], // Pirla evasion
  "sb0rra": [2, 5], // Sborra evasion
  "sc0pare": [2, 5], // Scopare evasion
  "f0ttere": [2, 5], // Fottere evasion
  "p0mpino": [2, 5], // Pompino evasion
  "b0cchino": [2, 5], // Bocchino evasion

  // === EXPANSION: More general insults ===
  "animale": [1, 4], // Animal (insult)
  "bestia": [1, 4], // Beast (insult)
  "porco animale": [1, 4], // Pig animal
  "bestiaccia": [1, 4], // Ugly beast
  "cane rognoso": [1, 4], // Mangy dog
  "cagna in calore": [1, 4], // Bitch in heat
  "vacca grassa": [1, 4], // Fat cow
  "vacca di merda": [3, 5], // Shit cow
  "troia schifosa": [5, 4], // Disgusting whore
  "puttana schifosa": [5, 4], // Disgusting whore
  "lurido bastardo": [3, 4], // Filthy bastard
  "lurida stronza": [1, 4], // Filthy bitch
  "schifoso di merda": [3, 5], // Disgusting shit
  "viscido verme": [1, 4], // Slimy worm
  "parassitta": [1, 4], // Parasite (variant)
  "parassito": [1, 4], // Parasite (masc)
  "sanguisuga": [1, 4], // Leech / bloodsucker
  "sciacallo": [1, 4], // Jackal / scavenger
  "avvoltoio": [1, 4], // Vulture
  "serpente": [1, 4], // Snake
  "vipera": [1, 4], // Viper (fem insult)
  "serpe": [1, 4], // Snake (variant)
  "topo di fogna": [1, 4], // Sewer rat
  "scarafone": [1, 3], // Big cockroach (Southern)
  "zecca": [1, 4], // Tick / parasite
  "pidocchio": [1, 4], // Louse
  "malandato": [1, 4], // Rundown / sickly
  "disgraziato": [1, 4], // Disgraced / wretch
  "disgraziata": [1, 4], // Disgraced (fem)
  "svergognato": [1, 4], // Shameless
  "svergognata": [1, 4], // Shameless (fem)
  "faccia tosta": [1, 4], // Brazen face
  "faccia come il culo": [3, 4], // Face like an ass
  "brutto come la fame": [1, 4], // Ugly as hunger
  "brutta come la morte": [1, 4], // Ugly as death
  "brutto cesso": [1, 4], // Ugly toilet
  "cesso ambulante": [1, 4], // Walking toilet
  "racchia": [1, 3], // Ugly woman (slang)
  "racchiona": [1, 4], // Very ugly woman
  "rospo": [1, 4], // Toad / ugly person
  "mostro": [1, 4], // Monster / ugly person
  "obbrobrio": [1, 4], // Abomination
  "aborto": [1, 4], // Abortion / ugly person
  "aborto della natura": [1, 4], // Abortion of nature
  "errore della natura": [1, 4], // Error of nature
  "scherzo della natura": [1, 4], // Joke of nature
  "pezzente di merda": [3, 5], // Shit beggar
  "straccione di merda": [3, 5], // Shit ragamuffin
  "barbonaccio": [1, 4], // Big bum / hobo
  "barbone": [1, 4], // Bum / hobo
  "barbona": [1, 4], // Bum / hobo (fem)
  "accattone": [1, 4], // Beggar
  "fannullone": [1, 4], // Good-for-nothing
  "fannullona": [1, 4], // Good-for-nothing (fem)
  "lavativo": [1, 4], // Lazy person
  "lavatrice": [1, 3], // Washing machine / lazy person (fem slang)
  "scansafatiche": [1, 4], // Work-dodger
  "perdigiorno": [1, 4], // Waster of days
  "nullafacente": [1, 4], // Do-nothing
  "buono a niente": [1, 4], // Good for nothing
  "buona a niente": [1, 4], // Good for nothing (fem)
  "capra": [1, 4], // Goat / stupid person
  "caprone": [1, 4], // Big goat / stupid man
  "asino": [1, 4], // Donkey / stupid
  "asina": [1, 4], // Donkey (fem) / stupid
  "somaro": [1, 4], // Donkey / stupid person
  "somara": [1, 4], // Donkey (fem) / stupid
  "babbeo": [1, 4], // Fool
  "babbea": [1, 4], // Fool (fem)
  "babbione": [1, 4], // Big fool
  "tonto": [1, 4], // Dull / slow
  "tontolone": [1, 4], // Big dummy
  "sciocco": [1, 4], // Silly
  "sciocca": [1, 4], // Silly (fem)
  "scioccone": [1, 4], // Big silly
  "allocco": [1, 4], // Owl / dimwit
  "allocchetta": [1, 4], // Little dimwit (fem)
  "bietolone": [1, 4], // Big beet / simpleton
  "citrullo": [1, 4], // Idiot (Southern)
  "citrulla": [1, 4], // Idiot (fem, Southern)
  "gonzo": [1, 4], // Simpleton
  "minchiarola di merda": [1, 4], // Shit fool (Sicilian)
  "cretinata": [1, 4], // Stupid thing
  "cretinismo": [1, 4], // Cretinism (as insult)
  "idiozia": [1, 4], // Idiocy
  "imbecillità": [1, 4], // Imbecility
  "stupidaggine": [1, 4], // Stupidity
  "stronzaggine infinita": [3, 4], // Infinite assholery
  "porcata": [1, 4], // Dirty trick / piggish act
  "porcheria": [1, 4], // Filthiness / disgusting thing
  "schifezza": [1, 4], // Disgusting thing
  "schifo": [1, 4], // Disgust / disgusting
  "che schifo": [1, 4], // How disgusting
  "fa schifo": [1, 4], // It's disgusting
  "mi fai schifo": [1, 4], // You disgust me
  "fai pietà": [1, 4], // You're pitiful
  "fai pena": [1, 4], // You're pitiful
  "faccia di bronzo": [1, 4], // Bronze face / brazen
  "faccia da schiaffi": [1, 4], // Slap-worthy face
  "muso duro": [1, 4], // Hard snout / stubborn
  "testa dura": [1, 4], // Hard head / stubborn
  "testa vuota": [1, 4], // Empty head
  "testa di cavolo": [1, 4], // Cabbage head
  "testa di rapa": [1, 4], // Turnip head
  "testa di legno": [1, 4], // Wooden head
  "testaccia": [1, 4], // Bad/ugly head
  "testardo come un mulo": [1, 4], // Stubborn as a mule
  "cornuto e contento": [1, 4], // Cuckold and happy
  "ubriacone": [1, 3], // Big drunkard
  "ubriacona": [1, 3], // Big drunkard (fem)
  "sbronzone": [1, 3], // Big drunk
  "sbronza": [1, 3], // Drunkard (fem) / drinking spree
  "tossico": [1, 4], // Toxic / drug addict
  "tossica": [1, 4], // Toxic (fem) / drug addict
  "drogato": [1, 4], // Drugged / drug addict
  "drogata": [1, 4], // Drugged (fem)
  "tossicodipendente": [1, 4], // Drug dependent
  "fattone": [1, 4], // Stoner
  "fattona": [1, 4], // Stoner (fem)
  "fumato": [1, 4], // Smoked / stoned
  "fumata": [1, 4], // Smoked (fem) / stoned
  "sballato": [1, 4], // High / off balance
  "sballata": [1, 4], // High (fem)

  // === EXPANSION: Sardinian expanded profanity ===
  "cunnu": [5, 5], // Cunt (Sardinian)
  "cunnedda": [5, 5], // Little cunt (Sardinian)
  "frigangiu": [1, 4], // Ugly / disgusting (Sardinian)
  "arza": [5, 4], // Whore (Sardinian)
  "arratzarisi": [3, 4], // Horny (Sardinian reflexive)
  "balatru": [3, 4], // Rude person (Sardinian)
  "bellifregu": [3, 4], // Beautiful freak (Sardinian ironic)
  "beccu": [3, 4], // Goat / cuckold (Sardinian)
  "cornutu": [3, 4], // Cuckold (Sardinian)
  "mammarossa": [3, 4], // Lazy person (Sardinian)
  "maialittu": [3, 4], // Cursed (Sardinian)
  "figa de tziu": [4, 4], // Uncle's pussy (Sardinian)

  // === EXPANSION: More Venetian profanity ===
  "s-ciavo": [3, 4], // Slave / wretch (Venetian)
  "putanon": [5, 4], // Big whore (Venetian)
  "recia de cogion": [1, 4], // Ear of an idiot (Venetian)
  "mona rotta": [4, 4], // Broken pussy (Venetian)
  "bruto porco": [1, 4], // Ugly pig (Venetian)
  "dio bòn de un can": [3, 4], // God good of a dog (Venetian blasphemy)
  "ostia porca": [3, 4], // Pig host (Venetian blasphemy)
  "sacramento porco": [3, 4], // Pig sacrament (Venetian blasphemy)
  "casso": [4, 4], // Dick (Venetian)
  "sboro de can": [3, 4], // Dog cum (Venetian)
  "toso del casso": [4, 4], // Dick kid (Venetian)
  "va a far in culo": [3, 4], // Go get it in the ass (Venetian)
  "fiol de na vaca": [3, 4], // Son of a cow (Venetian)
  "fiol de putana": [5, 5], // Son of a whore (Venetian)

  // === EXPANSION: More Tuscan/Florentine profanity ===
  "bischerate": [1, 4], // Stupid things (Florentine plural)
  "bischero di merda": [1, 4], // Shit idiot (Florentine)
  "grullo come una zucca": [1, 4], // Stupid as a pumpkin (Tuscan)
  "una sega": [3, 4], // Not a damn thing (Tuscan lit. a saw)
  "segaccia": [1, 4], // Ugly saw / bad wank (Tuscan)
  "bischero del cazzo": [4, 4], // Dick bischero (Tuscan compound)
  "becero": [3, 4], // Vulgar / uncouth (Tuscan)
  "becera": [3, 4], // Vulgar (fem, Tuscan)
  "cialtrone": [3, 4], // Slob / scoundrel (Tuscan)
  "cialtrona": [3, 4], // Slob (fem, Tuscan)
  "buzzurra": [3, 4], // Barbarian (fem, Tuscan/Roman)
  "peracottaio": [3, 4], // Stewed-pear seller / worthless (Tuscan)

  // === EXPANSION: More compound insults ===
  "figlio di cane": [1, 4], // Son of a dog
  "figlio di un cane": [1, 4], // Son of a dog (variant)
  "figlio di zoccola": [1, 4], // Son of a slut
  "figlio di troia maledetta": [5, 4], // Son of a cursed whore
  "puttana della madonna": [5, 4], // Whore of the Madonna
  "coglione della minchia": [4, 4], // Ball of the dick (Sicilian compound)
  "stronzo del cazzo": [4, 4], // Dick turd
  "merda della merda": [3, 5], // Shit of shit
  "pezzo di idiota": [1, 4], // Piece of idiot
  "pezzo di cretino": [1, 4], // Piece of cretin
  "pezzo di deficiente": [1, 4], // Piece of deficient
  "razza di cretini": [1, 4], // Race of cretins
  "branco di stronzi": [3, 4], // Pack of assholes
  "branco di coglioni": [1, 4], // Pack of idiots
  "manica di stronzi": [3, 4], // Bunch of assholes
  "covo di merde": [3, 5], // Den of shits
  "fogna di merda": [3, 5], // Sewer of shit
  "pozzo di merda": [3, 5], // Well of shit
  "fiume di merda": [3, 5], // River of shit
  "mare di merda": [3, 5], // Sea of shit
  "montagna di merda": [3, 5], // Mountain of shit
  "mondo di merda": [3, 5], // World of shit
  "vita di merda": [3, 5], // Life of shit
  "giornata di merda": [3, 5], // Day of shit
  "lavoro di merda": [3, 5], // Shit job
  "culo del mondo": [3, 4], // Ass of the world (middle of nowhere)
  "culo di gallina": [1, 4], // Chicken ass / coward
  "cagata pazzesca": [1, 4], // Crazy crap
  "cagata immensa": [1, 4], // Immense crap
  "figata": [1, 4], // Cool thing (from figa, can be vulgar)
  "sfigatura": [1, 4], // Loser-ness / bad luck
  "porca puttana eva": [5, 4], // Pig whore Eve
  "porca puttana la miseria": [5, 4], // Pig whore misery
  "zoccola fetida": [1, 4], // Fetid slut
  "troia fetida": [5, 4], // Fetid whore
  "puttana fetida": [5, 4], // Fetid whore
  "faccia di pirla": [1, 4], // Pirla face (Lombard)
  "faccia di bischero": [1, 4], // Bischero face (Tuscan)
  "faccia di minchia": [4, 4], // Dick face (Sicilian)
  "musone": [1, 4], // Big snout / grumpy person
  "musona": [1, 4], // Big snout (fem) / grumpy
  "grufolone": [1, 4], // Big trotter / greedy pig
  "zozzeria": [1, 4], // Filthiness
  "zozzume": [1, 4], // Filth
  "sudiciume": [1, 4], // Filth / grime
  "laidume": [1, 4], // Ugliness / filth
  "lordura": [1, 4], // Filth
  "sporcizia": [1, 4], // Dirtiness
  "porchidio": [1, 4], // PorcoDio variant (no space)
  "cristoporco": [1, 4], // CristoPorco variant (no space)
  "madonnacagna": [1, 4], // MadonnaCagna variant (no space)
  "diobestiacane": [1, 4], // DioBestiaCane compound
  "diocristo porco": [1, 4], // God Christ pig compound

  // ========================================
  // === EXPANSION: Exhaustive Bestemmie (Blasphemy) - Dio combinations ===
  // ========================================
  "dio dannato": [3, 4], // God damned (blasphemy variant)
  "dio vaccaro": [3, 4], // God cowherd (blasphemy)
  "dio zoppo": [3, 4], // God lame (blasphemy)
  "dio cieco": [3, 4], // God blind (blasphemy)
  "dio scemo": [1, 4], // God stupid (blasphemy)
  "dio miserabile": [3, 4], // God miserable (blasphemy)
  "dio puzzolente": [3, 4], // God smelly (blasphemy)
  "dio sporco": [3, 4], // God dirty (blasphemy)
  "dio sudicio": [3, 4], // God dirty (blasphemy variant)
  "dio lurido porco": [3, 4], // God filthy pig (blasphemy compound)
  "dio cane maiale": [3, 4], // God dog pig (blasphemy compound)
  "dio porco cane": [3, 4], // God pig dog (blasphemy compound)
  "dio bestia maledetta": [3, 4], // God cursed beast (blasphemy compound)
  "dio cane della madonna": [3, 4], // God dog of the Madonna (blasphemy compound)
  "dio cane porco": [3, 4], // God dog pig (blasphemy compound)
  "dio cane bastardo": [3, 4], // God bastard dog (blasphemy compound)
  "dio madonna porco": [3, 4], // God Madonna pig (blasphemy compound)
  "dio vacca": [3, 4], // God cow (blasphemy)
  "dio troia": [5, 4], // God whore (blasphemy)
  "dio puttana": [5, 4], // God whore (blasphemy)
  "dio zoccola": [3, 4], // God slut (blasphemy)
  "dio idiota": [1, 4], // God idiot (blasphemy)
  "dio imbecille": [3, 4], // God imbecile (blasphemy)
  "dio deficiente": [1, 4], // God moron (blasphemy)
  "dio cretino": [3, 4], // God cretin (blasphemy)
  "dio stupido": [1, 4], // God stupid (blasphemy)
  "dio fesso": [1, 4], // God fool (blasphemy)
  "dio pirla": [1, 4], // God dick/fool (blasphemy)
  "dio minchia": [4, 4], // God dick (blasphemy with Sicilian)
  "dio cazzo": [4, 4], // God dick (blasphemy)
  "dio assassino": [5, 5], // God murderer (blasphemy)
  "dio criminale": [3, 4], // God criminal (blasphemy)
  "dio mostro": [3, 4], // God monster (blasphemy)
  "dio demonio": [3, 4], // God demon (blasphemy)
  "dio diavolo": [3, 4], // God devil (blasphemy)
  "dio satana": [3, 4], // God Satan (blasphemy)
  "dio giuda": [3, 4], // God Judas (blasphemy)
  "dio bugiardo": [3, 4], // God liar (blasphemy)
  "dio falso": [3, 4], // God false (blasphemy)
  "dio marcio": [3, 4], // God rotten (blasphemy)
  "dio putrido": [3, 4], // God putrid (blasphemy)
  "dio rognoso": [3, 4], // God mangy (blasphemy)
  "dio pidocchioso": [3, 4], // God lousy (blasphemy)
  "dio bavoso": [3, 4], // God drooling (blasphemy)
  "dio viscido": [3, 4], // God slimy (blasphemy)
  "dio rivoltante": [3, 4], // God revolting (blasphemy)
  "dio ripugnante": [3, 4], // God repugnant (blasphemy)
  "dio osceno": [3, 4], // God obscene (blasphemy)
  "dio volgare": [3, 4], // God vulgar (blasphemy)
  "dio triviale": [3, 4], // God trivial/vulgar (blasphemy)
  "dio sbagliato": [3, 4], // God wrong (blasphemy)
  "dio fallito": [3, 4], // God failed (blasphemy)
  "dio impotente": [3, 4], // God impotent (blasphemy)
  "dio pezzente": [3, 4], // God beggar (blasphemy)
  "dio straccione": [3, 4], // God ragamuffin (blasphemy)
  "dio barbone": [3, 4], // God hobo (blasphemy)
  "dio stupro": [5, 5], // God rape (blasphemy)
  "dio disgraziato": [3, 4], // God disgraced (blasphemy)
  "dio porco maledetto": [3, 4], // God damned pig (blasphemy compound)
  "dio cane maledetto": [3, 4], // God damned dog (blasphemy compound)

  // === Bestemmie - Madonna combinations ===
  "madonna porca": [3, 4], // Madonna pig (blasphemy)
  "madonna lercia": [3, 4], // Madonna grimy (blasphemy)
  "madonna sudicia": [3, 4], // Madonna dirty (blasphemy)
  "madonna merdosa": [3, 5], // Madonna shitty (blasphemy)
  "madonna fetente": [3, 4], // Madonna stinking (blasphemy)
  "madonna puzzolente": [3, 4], // Madonna smelly (blasphemy)
  "madonna deficiente": [1, 4], // Madonna moron (blasphemy)
  "madonna imbecille": [3, 4], // Madonna imbecile (blasphemy)
  "madonna cretina": [3, 4], // Madonna cretin (blasphemy)
  "madonna stupida": [1, 4], // Madonna stupid (blasphemy)
  "madonna ignorante": [3, 4], // Madonna ignorant (blasphemy)
  "madonna dannata": [3, 4], // Madonna damned (blasphemy)
  "madonna lebbrosa": [3, 4], // Madonna leprous (blasphemy)
  "madonna bucaiola": [3, 4], // Madonna faggot (blasphemy, Tuscan)
  "madonna assassina": [5, 5], // Madonna murderer (blasphemy)
  "madonna lupa": [3, 4], // Madonna she-wolf (blasphemy)
  "madonna bagascia": [5, 4], // Madonna whore (blasphemy, dialectal)
  "madonna baldracca": [3, 4], // Madonna harlot (blasphemy)
  "madonna battona": [3, 4], // Madonna streetwalker (blasphemy)
  "madonna mignotta": [5, 4], // Madonna whore (blasphemy, Roman)
  "madonna bocchinara": [4, 4], // Madonna cocksucker (blasphemy)

  // === Bestemmie - Cristo combinations ===
  "cristo bestia": [3, 4], // Christ beast (blasphemy)
  "cristo lurido": [3, 4], // Christ filthy (blasphemy)
  "cristo schifoso": [3, 4], // Christ disgusting (blasphemy)
  "cristo stronzo": [3, 4], // Christ asshole (blasphemy)
  "cristo dannato": [3, 4], // Christ damned (blasphemy variant)
  "cristo merdoso": [3, 5], // Christ shitty (blasphemy)
  "cristo fetente": [3, 4], // Christ stinking (blasphemy)
  "cristo sporco": [3, 4], // Christ dirty (blasphemy)
  "cristo vacca": [3, 4], // Christ cow (blasphemy)
  "cristo troia": [5, 4], // Christ whore (blasphemy)
  "cristo puttana": [5, 4], // Christ whore (blasphemy variant)
  "cristo zoccola": [3, 4], // Christ slut (blasphemy)
  "cristo serpente": [3, 4], // Christ snake (blasphemy)
  "cristo verme": [3, 4], // Christ worm (blasphemy)
  "cristo farabutto": [3, 4], // Christ scoundrel (blasphemy)
  "cristo bugiardo": [3, 4], // Christ liar (blasphemy)
  "cristo marcio": [3, 4], // Christ rotten (blasphemy)
  "cristo putrido": [3, 4], // Christ putrid (blasphemy)
  "cristo viscido": [3, 4], // Christ slimy (blasphemy)

  // === Bestemmie - Saints/other holy combinations ===
  "san pietro porco": [3, 4], // Saint Peter pig (blasphemy)
  "gesù bestia": [3, 4], // Jesus beast (blasphemy)
  "gesù puttana": [5, 4], // Jesus whore (blasphemy)
  "gesù ladro": [3, 4], // Jesus thief (blasphemy)
  "santo porco": [3, 4], // Holy pig (blasphemy)
  "sant'iddio porco": [3, 4], // Holy God pig (blasphemy)
  "sacramento di merda": [3, 5], // Shit sacrament (blasphemy)
  "sacramento cane": [3, 4], // Dog sacrament (blasphemy)
  "sacramento bastardo": [3, 4], // Bastard sacrament (blasphemy)
  "sacramento maledetto": [3, 4], // Cursed sacrament (blasphemy)
  "ostia di merda": [3, 5], // Shit host (blasphemy)
  "ostia porchissima": [3, 4], // Most piggish host (blasphemy)
  "mannaggia i santi": [3, 4], // Damn the saints (blasphemy)
  "mannaggia la miseria": [3, 4], // Damn the misery (blasphemy lite)
  "mannaggia a te": [3, 4], // Damn you (Neapolitan style)
  "porco santo": [3, 4], // Pig saint (blasphemy)
  "porco sacramento": [3, 4], // Pig sacrament (blasphemy)
  "porco papa": [3, 4], // Pig pope (blasphemy)
  "porca vacca": [3, 4], // Pig cow (blasphemy variant)
  "porca zozza": [3, 4], // Pig filthy (blasphemy)
  "puttana madonna": [5, 4], // Whore Madonna (blasphemy)
  "troia madonna": [5, 4], // Whore Madonna (blasphemy)
  "zoccola madonna": [3, 4], // Slut Madonna (blasphemy)

  // ========================================
  // === EXPANSION: Neapolitan dialect profanity ===
  // ========================================
  "chiavicone": [3, 4], // Big sewer / very worthless (Neapolitan)
  "spaccamaroni": [3, 4], // Chestnut breaker / ball breaker (Neapolitan)
  "sfaccimme": [3, 4], // Cum (Neapolitan plural)
  "guaglione 'e mierda": [3, 5], // Shit kid (Neapolitan)
  "puozze sculà": [3, 4], // May you be drained (Neapolitan curse)
  "puozze murì": [5, 5], // May you die (Neapolitan curse)
  "puozze schiattà": [3, 4], // May you explode (Neapolitan curse)
  "puozze accidere": [3, 4], // May you be killed (Neapolitan curse)
  "puozze appizzà": [3, 4], // May you be hanged (Neapolitan curse)
  "puozze 'e mierda": [3, 5], // May you shit (Neapolitan curse)
  "puozze abbruciato": [3, 4], // May you be burned (Neapolitan curse)
  "mannaggia 'a maronna": [3, 4], // Damn the Madonna (Neapolitan)
  "mannaggia a chi t'è muorto": [3, 4], // Damn your dead ones (Neapolitan)
  "mannaggia 'a miseria": [3, 4], // Damn the misery (Neapolitan)
  "mannaggia 'o sangue": [3, 4], // Damn the blood (Neapolitan)
  "mannaggia 'a morte": [5, 5], // Damn death (Neapolitan)
  "mannaggia 'o cazzo": [4, 4], // Damn the dick (Neapolitan)
  "mannaggia 'a puttana": [5, 4], // Damn the whore (Neapolitan)
  "vaffanculo a mammeta": [3, 5], // Fuck off your mother (Neapolitan)
  "vafammòcca": [4, 5], // Go to blowjobs (Neapolitan)
  "'a fessa 'e mammeta": [4, 4], // Your mother's pussy (Neapolitan)
  "chillo strunzo": [3, 4], // That turd (Neapolitan)
  "strunzo 'e mierda": [3, 5], // Shit turd (Neapolitan)
  "curnutella": [3, 4], // Little cuckold (Neapolitan diminutive)
  "zoccola 'e mierda": [3, 5], // Shit slut (Neapolitan)
  "puttana 'e mierda": [5, 5], // Shit whore (Neapolitan)
  "figlio 'e puttana": [5, 5], // Son of a whore (Neapolitan)
  "figlio 'e 'na puttana": [5, 5], // Son of a whore (Neapolitan variant)
  "ciucciamm 'o cazzo": [4, 4], // Suck my dick (Neapolitan)
  "vattenne affanculo": [3, 5], // Go fuck off (Neapolitan)
  "vattenn' a ffanculo": [3, 5], // Go fuck off (Neapolitan variant)
  "sciaquato": [3, 4], // Washed out / worthless (Neapolitan)
  "scostumato": [3, 4], // Ill-mannered (Neapolitan)
  "fetente 'e mierda": [3, 5], // Stinking shit (Neapolitan)
  "ricchion'": [3, 4], // Gay man (Neapolitan slur shortened)
  "ricchiona": [3, 4], // Gay/lesbian (Neapolitan slur fem)
  "frociàrse": [3, 4], // To act gay (Neapolitan derogatory)
  "femminella": [3, 4], // Effeminate man (Neapolitan slur)
  "guappo 'e cartone": [3, 4], // Cardboard tough guy (Neapolitan)
  "scugnizzo 'e mierda": [3, 5], // Shit street urchin (Neapolitan)
  "mariuolo": [3, 4], // Scoundrel / thief (Neapolitan)
  "mariuola": [3, 4], // Scoundrel (fem, Neapolitan)
  "cagacarte": [3, 5], // Paper shitter / bureaucrat (Neapolitan)
  "sciupafemmine": [3, 4], // Womanizer (Neapolitan/standard)
  "lazzarone": [3, 4], // Lazzarone / idle scoundrel (Neapolitan)
  "lazzarona": [3, 4], // Lazy scoundrel (fem, Neapolitan)

  // ========================================
  // === EXPANSION: Sicilian dialect profanity ===
  // ========================================
  "minchiateddi": [1, 4], // Little stupid things (Sicilian dim. plural)
  "ammazzati": [3, 4], // Get killed (Sicilian)
  "ammazzati la": [5, 5], // Go kill yourself (Sicilian)
  "babbiàri": [1, 4], // To joke / be foolish (Sicilian)
  "buttanedda": [5, 4], // Little whore (Sicilian diminutive)
  "buttaneddra": [5, 4], // Little whore (Sicilian variant)
  "buttana di to matri": [5, 4], // Whore of your mother (Sicilian)
  "buttana di to soru": [5, 4], // Whore of your sister (Sicilian)
  "buttana matri": [5, 4], // Whore mother (Sicilian)
  "curnutu fituso": [3, 4], // Stinking cuckold (Sicilian)
  "curnutu di merda": [3, 5], // Shit cuckold (Sicilian variant)
  "curnutazzu": [3, 4], // Big cuckold (Sicilian augmentative)
  "cugghiùni": [1, 4], // Balls / idiot (Sicilian)
  "cugghiunazzu": [1, 4], // Big balls / big idiot (Sicilian)
  "cabasisi": [4, 4], // Balls (Sicilian)
  "cacasotto e muzzicapane": [3, 4], // Scaredy cat and bread biter (Sicilian)
  "figghiu 'i buttana": [5, 5], // Son of a whore (Sicilian)
  "figghiu 'i cane": [3, 4], // Son of a dog (Sicilian)
  "figghiu 'i puttana": [5, 5], // Son of a whore (Sicilian variant)
  "figghiu 'i 'na buttana": [5, 5], // Son of a whore (Sicilian with article)
  "figghiu 'i zoccola": [3, 4], // Son of a slut (Sicilian)
  "futtiri": [3, 5], // To fuck (Sicilian)
  "liscio": [3, 4], // Smooth / gay (Sicilian slur)
  "masculazzu": [3, 4], // Tomboy / masculine woman (Sicilian)
  "minnaccia": [4, 4], // Big breast / tit (Sicilian)
  "mussu fituso": [3, 4], // Stinking face (Sicilian)
  "pirtuso": [3, 4], // Hole / anus (Sicilian)
  "pisciazzu": [3, 4], // Big piss (Sicilian)
  "quaquaraquà": [3, 4], // Useless person (Sicilian, from the crow)
  "suca": [3, 4], // Suck it (Sicilian)
  "sucaminchia": [4, 4], // Suck my dick (Sicilian)
  "sucaminchione": [4, 4], // Big dick sucker (Sicilian)
  "tamarrazza": [3, 4], // Big redneck (Sicilian fem augmentative)
  "turco": [1, 4], // Turk / idiot (Sicilian insult)
  "vattinni fanculo": [3, 5], // Fuck off (Sicilian)
  "vastasuna": [3, 4], // Vulgar person (fem, Sicilian)
  "zoccola fitusa": [3, 4], // Stinking slut (Sicilian)
  "catafero": [1, 4], // Corpse / ugly person (Sicilian)

  // ========================================
  // === EXPANSION: Roman dialect profanity ===
  // ========================================
  "mignottona": [5, 4], // Big whore (Roman augmentative)
  "mignottella": [5, 4], // Little whore (Roman diminutive)
  "mignottaro": [5, 4], // Whoremonger (Roman)
  "mignotta de tu madre": [5, 4], // Your mother's a whore (Roman)
  "stronza de merda": [3, 5], // Shit bitch (Roman)
  "stronzo de merda": [3, 5], // Shit asshole (Roman)
  "li mortacci tui": [1, 4], // Your ugly dead relatives (Roman variant)
  "li mortacci de tu madre": [3, 4], // Your mother's dead relatives (Roman)
  "li mortacci de tu padre": [1, 4], // Your father's dead relatives (Roman)
  "li mortacci de chi t'ha partorito": [3, 4], // Dead relatives of who birthed you (Roman)
  "li mortacci de chi t'è morto": [3, 4], // Dead relatives of your dead (Roman)
  "li mortacci vostra": [1, 4], // Your ugly dead relatives (Roman plural)
  "ammazzate": [3, 4], // Get killed (Roman)
  "annamo bene": [3, 4], // Here we go (Roman sarcastic)
  "'nnamo a fanculo": [3, 5], // Let's go fuck off (Roman)
  "a' mignotta": [5, 4], // The whore (Roman)
  "a' puttana": [5, 4], // The whore (Roman)
  "te possino ammazzà": [3, 4], // May they kill you (Roman curse)
  "te possino": [3, 4], // May they (Roman curse beginning)
  "daje de culo": [3, 4], // Give it from the ass (Roman)
  "pija per culo": [3, 4], // To mock / take from the ass (Roman)
  "fijo de 'na mignotta": [5, 5], // Son of a whore (Roman)
  "fijo de puttana": [5, 5], // Son of a whore (Roman)
  "fijo de 'na zoccola": [3, 4], // Son of a slut (Roman)
  "fijo de buona donna": [3, 4], // Son of a good woman (Roman ironic)
  "sta zitto stronzo": [3, 4], // Shut up asshole (Roman)
  "che cazzo voi": [4, 4], // What the dick do you want (Roman)
  "levate dar cazzo": [4, 4], // Get off the dick / go away (Roman)
  "che te frega": [3, 4], // What do you care (Roman dismissive)
  "burina": [3, 4], // Redneck (fem, Roman)
  "coatta": [3, 4], // Boor (fem, Roman)
  "zozzarella": [3, 4], // Little dirty person (fem, Roman)
  "borgata de merda": [3, 5], // Shit slum (Roman)
  "borgataro": [3, 4], // Slum dweller (Roman derogatory)
  "borgatara": [3, 4], // Slum dweller (fem, Roman)

  // ========================================
  // === EXPANSION: Milanese/Lombard dialect profanity ===
  // ========================================
  "pirlotta": [1, 4], // Fool (fem, Milanese)
  "pirlacchione": [1, 4], // Big fool (Milanese augmentative)
  "baloss": [3, 4], // Rascal / thief (Milanese)
  "balòss": [3, 4], // Rascal (Milanese variant)
  "balosso": [3, 4], // Rascal (Milanese italianized)
  "barbone de merda": [3, 5], // Shit hobo (Milanese/standard)
  "ciulàt": [3, 5], // Fucked / stolen (Lombard)
  "pirla de merda": [1, 4], // Shit fool (Milanese)
  "testa de ciula": [4, 4], // Dick head (Lombard)
  "va a dà via el cuu": [3, 4], // Go give away the ass (Milanese)
  "va a cagà": [3, 5], // Go shit (Milanese)
  "va a ramengo": [3, 4], // Go to ruin (Milanese)
  "va a morì ammazzà": [5, 5], // Go die killed (Milanese/Roman crossover)
  "faccia de tolla": [3, 4], // Tin face / shameless (Milanese)
  "porca la madòna": [3, 4], // Pig Madonna (Milanese blasphemy)
  "porco el domìni": [3, 4], // Pig the Lord (Milanese blasphemy)
  "cristo de un can": [3, 4], // Christ of a dog (Milanese blasphemy)
  "dio de la madona": [3, 4], // God of the Madonna (Milanese blasphemy)
  "ostia de un can": [3, 4], // Host of a dog (Milanese blasphemy)
  "sanguanazzo": [3, 4], // Bloody person (Lombard)
  "lofio": [1, 4], // Ugly / disgusting (Lombard)
  "lofia": [1, 4], // Ugly (fem, Lombard)

  // ========================================
  // === EXPANSION: Venetian dialect profanity (expanded) ===
  // ========================================
  "el mona": [1, 4], // The idiot (Venetian masc)
  "la mona": [4, 4], // The pussy (Venetian fem)
  "dio can de un porco": [3, 4], // God dog of a pig (Venetian)
  "dio can de la madona": [3, 4], // God dog of the Madonna (Venetian)
  "dio bòn": [3, 4], // God good (Venetian blasphemy)
  "dio bòia": [3, 4], // God executioner (Venetian blasphemy)
  "dio s-cian": [3, 4], // God dog (Venetian variant)
  "dioschèi": [3, 4], // God money (Venetian blasphemy)
  "porco dio de un can": [3, 4], // Pig God of a dog (Venetian compound)
  "madonna bòia": [3, 4], // Madonna executioner (Venetian blasphemy)
  "madonna can": [3, 4], // Madonna dog (Venetian blasphemy)
  "sborone": [3, 4], // Big cum / show-off (Venetian)
  "sboron": [3, 4], // Show-off (Venetian)
  "va' a cagar": [3, 5], // Go shit (Venetian)
  "va a far in mona": [4, 4], // Go do it in pussy (Venetian)
  "fiol de puttana": [5, 5], // Son of a whore (Venetian)
  "casso de mona": [4, 4], // Dick of pussy (Venetian)
  "testa de mona": [4, 4], // Pussy head (Venetian)
  "brutto mona": [1, 4], // Ugly idiot (Venetian)
  "in mona de to mare": [4, 4], // In your mother's pussy (Venetian)
  "tosa del casso": [4, 4], // Dick girl (Venetian)
  "porco el signor": [3, 4], // Pig the Lord (Venetian blasphemy)
  "porco san marco": [3, 4], // Pig Saint Mark (Venetian blasphemy)

  // ========================================
  // === EXPANSION: Piemontese/Piedmontese dialect profanity ===
  // ========================================
  "cojón": [1, 4], // Balls / idiot (Piedmontese)
  "cojonada": [1, 4], // Stupid thing (Piedmontese)
  "bogianen": [3, 4], // Don't move / lazy (Piedmontese)
  "sacranon": [3, 4], // Damn (Piedmontese)
  "va a caghé": [3, 5], // Go shit (Piedmontese)
  "va a fé 'n cul": [3, 4], // Go get it in the ass (Piedmontese)
  "lassa stè": [3, 4], // Leave it alone / piss off (Piedmontese)
  "fòl": [3, 4], // Crazy (Piedmontese)
  "cucù": [3, 4], // Cuckoo / crazy (Piedmontese)
  "ciucco": [1, 3], // Drunk (masc, Piedmontese)
  "ciuccarsi": [1, 3], // To get drunk (Piedmontese)
  "bèstia d'un can": [3, 4], // Beast of a dog (Piedmontese)
  "porco d'un giuda": [3, 4], // Pig of a Judas (Piedmontese)
  "cristo d'un can": [3, 4], // Christ of a dog (Piedmontese)
  "madona d'na troia": [5, 4], // Madonna of a whore (Piedmontese)
  "figurassa": [3, 4], // Bad figure / shameful (Piedmontese)

  // ========================================
  // === EXPANSION: Ligurian dialect profanity ===
  // ========================================
  "belìn": [4, 4], // Dick (Ligurian)
  "belin de merda": [4, 5], // Shit dick (Ligurian)
  "a belina": [4, 4], // The pussy (Ligurian)
  "figgio de puttana": [5, 5], // Son of a whore (Ligurian)
  "vattene in belìn": [4, 4], // Go to dick (Ligurian)
  "cornuto de merda": [3, 5], // Shit cuckold (Ligurian)
  "bagascione": [5, 4], // Big whore (Ligurian augmentative)
  "bagascetta": [5, 4], // Little whore (Ligurian diminutive)
  "scorbuto": [1, 4], // Scurvy / ugly person (Ligurian insult)
  "belin che sei": [4, 4], // What a dick you are (Ligurian)
  "faccia de belin": [4, 4], // Dick face (Ligurian)

  // ========================================
  // === EXPANSION: Friulian dialect profanity ===
  // ========================================
  "cjocje": [1, 3], // Drunk (fem, Friulian)
  "cjocjât": [3, 4], // Wasted (Friulian)
  "mòni": [1, 4], // Idiot (Friulian)
  "mònic": [1, 4], // Stupid (Friulian)
  "tòc di mòni": [1, 4], // Piece of idiot (Friulian)
  "cul di vacje": [3, 4], // Cow's ass (Friulian)
  "scjassâ": [3, 4], // To break / annoy (Friulian)
  "purcjegne": [3, 4], // Piggishness (Friulian)
  "va a cjapâ tal cûl": [3, 4], // Go take it in the ass (Friulian)
  "va a fâ in cûl": [3, 4], // Go do it in the ass (Friulian)
  "ostie": [3, 4], // Host (Friulian blasphemy)
  "diu can": [3, 4], // God dog (Friulian blasphemy)
  "diu puarc": [3, 4], // God pig (Friulian blasphemy)
  "diu lòtri": [3, 4], // God dirty (Friulian blasphemy)

  // ========================================
  // === EXPANSION: Abruzzese/Marchigiano dialect profanity ===
  // ========================================
  "cacchiotto": [4, 4], // Little dick (Abruzzese)
  "cacchione": [1, 4], // Big dick / stupid (Abruzzese)
  "cazzarola": [2, 3], // Damn / saucepan (Abruzzese euphemism)
  "caccamo": [1, 4], // Cauldron / idiot (Abruzzese)
  "ciaffo": [3, 4], // Slap (Abruzzese)
  "ciaffare": [3, 4], // To slap (Abruzzese)
  "strunzo 'e merd": [3, 5], // Shit turd (Abruzzese)
  "figlio de 'na puttana": [5, 5], // Son of a whore (Abruzzese)
  "che cazzo vuo'": [4, 4], // What the dick do you want (Abruzzese)
  "vattenn' a ffa 'n culo": [3, 4], // Go get it in the ass (Abruzzese)
  "cojona": [1, 4], // Idiot (fem, Abruzzese)
  "zì puttana": [5, 4], // Aunt whore (Abruzzese)
  "chi t'ha morto": [5, 5], // Who died on you (Abruzzese curse)

  // ========================================
  // === EXPANSION: Calabrese dialect profanity ===
  // ========================================
  "minchiune": [1, 4], // Big idiot (Calabrese)
  "guappune": [3, 4], // Tough guy (Calabrese derogatory)
  "cornuto figlio 'e cornuto": [3, 4], // Cuckold son of cuckold (Calabrese)
  "curnutu fitusu": [3, 4], // Stinking cuckold (Calabrese)
  "buttanazza": [5, 4], // Big whore (Calabrese)
  "figlio 'i puttana": [5, 5], // Son of a whore (Calabrese)
  "vaffanculo a mamita": [3, 5], // Fuck off your mom (Calabrese)
  "ammazzatinu": [3, 4], // Go get killed (Calabrese)
  "cretinu 'e merda": [3, 5], // Shit cretin (Calabrese)
  "scassaminchia di merda": [4, 5], // Shit dick breaker (Calabrese)
  "cafone 'e merda": [3, 5], // Shit peasant (Calabrese)
  "garbino": [3, 4], // Jerk (Calabrese)
  "cammurria": [3, 4], // Annoyance / pest (Calabrese)
  "cammurrioso": [3, 4], // Annoying (Calabrese)
  "sangue di giuda": [3, 4], // Blood of Judas (Calabrese blasphemy)

  // ========================================
  // === EXPANSION: Pugliese/Apulian dialect profanity ===
  // ========================================
  "cazz 'e mammt": [4, 4], // Your mother's dick (Pugliese)
  "fangu te mamm't": [3, 4], // Your mother's mud (Pugliese)
  "strunz 'e merd": [3, 5], // Shit turd (Pugliese)
  "figghie de puttana": [5, 5], // Son of a whore (Pugliese)
  "uè strunzone": [3, 4], // Hey big turd (Pugliese)
  "mò te caccio": [3, 4], // Now I'll kick you out (Pugliese)
  "minchia ca si brutto": [1, 4], // Dick you're ugly (Pugliese)
  "vattenne a fà 'n culo": [3, 4], // Go get it in the ass (Pugliese)
  "cesso di merda": [3, 5], // Shit toilet (Pugliese)
  "scemmone": [1, 4], // Big idiot (Pugliese)
  "scemmunito": [1, 4], // Made stupid (Pugliese)
  "pacchione": [3, 4], // Big belly / glutton (Pugliese)
  "puzzolentu": [3, 4], // Smelly (Pugliese)
  "ciucciu": [3, 4], // Donkey (Pugliese)

  // ========================================
  // === EXPANSION: Emiliano-Romagnolo dialect profanity ===
  // ========================================
  "bòia d'un mònd": [3, 4], // Executioner of a world (Emiliano blasphemy)
  "pòrca la bèstia": [3, 4], // Pig the beast (Emiliano blasphemy)
  "pòrca la madòna": [3, 4], // Pig the Madonna (Emiliano blasphemy)
  "pòrco dìo": [3, 4], // Pig God (Emiliano blasphemy)
  "va a cagàr": [3, 5], // Go shit (Emiliano)
  "va a fà in cùl": [3, 4], // Go get it in the ass (Emiliano)
  "testa de minchia": [4, 4], // Dick head (Emiliano/standard)
  "cojòn": [1, 4], // Balls / idiot (Emiliano)
  "cojònada": [1, 4], // Stupid thing (Emiliano)
  "pùtana 'dla madòna": [5, 4], // Whore of the Madonna (Emiliano)
  "stronz'd mérda": [3, 5], // Shit turd (Emiliano)
  "figurón de mérda": [3, 5], // Shit spectacle (Emiliano)
  "burdèl": [3, 4], // Bordello / mess (Romagnolo)
  "burdlòn": [3, 4], // Big mess maker (Romagnolo)

  // ========================================
  // === EXPANSION: Trentino-Alto Adige dialect profanity ===
  // ========================================
  "porca putana": [5, 4], // Pig whore (Trentino)
  "porca madona": [3, 4], // Pig Madonna (Trentino)
  "va a farte fòter": [3, 5], // Go get fucked (Trentino)
  "el mona de to pare": [1, 4], // Your father's idiot (Trentino/Venetian)
  "dio bestia de un can": [3, 4], // God beast of a dog (Trentino)
  "porco giuda de un can": [3, 4], // Pig Judas of a dog (Trentino)
  "ostia de un can ladro": [3, 4], // Host of a thief dog (Trentino)

  // ========================================
  // === EXPANSION: Sexual terms with conjugations ===
  // ========================================
  "chiavo": [4, 5], // I fuck (1st person)
  "chiavi": [4, 5], // You fuck (2nd person)
  "chiava": [4, 5], // He/she fucks (3rd person)
  "chiaviamo": [4, 5], // We fuck (1st plural)
  "chiavate": [4, 5], // You fuck (2nd plural)
  "chiavano": [4, 5], // They fuck (3rd plural)
  "chiavavo": [4, 5], // I used to fuck (imperfect 1st)
  "chiavavi": [4, 5], // You used to fuck (imperfect 2nd)
  "chiavavamo": [4, 5], // We used to fuck (imperfect 1st plural)
  "chiavai": [4, 5], // I fucked (past 1st)
  "chiavò": [4, 5], // He/she fucked (past 3rd)
  "chiaverò": [4, 5], // I will fuck (future 1st)
  "chiaverai": [4, 5], // You will fuck (future 2nd)
  "chiaverà": [4, 5], // He/she will fuck (future 3rd)
  "chiaveremo": [4, 5], // We will fuck (future 1st plural)
  "chiaveranno": [4, 5], // They will fuck (future 3rd plural)
  "chiaverei": [4, 5], // I would fuck (conditional 1st)
  "chiaveresti": [4, 5], // You would fuck (conditional 2nd)
  "chiaverebbe": [4, 5], // He/she would fuck (conditional 3rd)
  "chiaveremmo": [4, 5], // We would fuck (conditional 1st plural)
  "chiaverebbero": [4, 5], // They would fuck (conditional 3rd plural)
  "scopo": [4, 5], // I fuck
  "scopi": [4, 5], // You fuck
  "scopa": [4, 5], // He/she fucks
  "scopiamo": [4, 5], // We fuck
  "scopate": [4, 5], // You all fuck
  "scopano": [4, 5], // They fuck
  "scopavo": [4, 5], // I used to fuck
  "scopai": [4, 5], // I fucked (past)
  "scopò": [4, 5], // He/she fucked (past)
  "scoperò": [4, 5], // I will fuck (future)
  "scoperai": [4, 5], // You will fuck (future)
  "scoperà": [4, 5], // He/she will fuck (future)
  "scoperei": [4, 5], // I would fuck (conditional)
  "scopato": [4, 5], // Fucked (past part. masc)
  "scopatina": [4, 5], // Quick fuck (diminutive)
  "scopatona": [4, 5], // Big fuck (fem augmentative)
  "trombo": [4, 5], // I fuck (slang)
  "trombi": [4, 5], // You fuck (slang)
  "tromba": [4, 5], // He/she fucks (slang)
  "trombiamo": [4, 5], // We fuck (slang)
  "trombate": [4, 5], // You all fuck (slang)
  "trombano": [4, 5], // They fuck (slang)
  "trombatona": [4, 5], // Big fuck (slang augmentative)
  "trombato": [4, 5], // Fucked (slang past part.)
  "fotto": [4, 5], // I fuck (literary)
  "fotti": [4, 5], // You fuck (literary)
  "fotte": [4, 5], // He/she fucks (literary)
  "fottiamo": [4, 5], // We fuck (literary)
  "fottete": [4, 5], // You all fuck (literary)
  "fottono": [4, 5], // They fuck (literary)
  "fottuta": [4, 5], // Fucked (fem, literary)
  "inculo": [4, 5], // I ass-fuck
  "inculi": [4, 5], // You ass-fuck
  "incula": [4, 5], // He/she ass-fucks
  "inculato": [4, 5], // Ass-fucked (past part.)
  "inculata": [4, 5], // Ass-fucked (fem) / an ass-fucking
  "inculatona": [4, 5], // Big ass-fucking (augmentative)
  "pompinaro": [4, 5], // Man who gives blowjobs
  "pomparsi": [4, 4], // To jerk off (reflexive)
  "segare": [4, 4], // To jerk off / to saw
  "segaiola": [4, 4], // Wanker (fem)
  "segamento": [4, 4], // Wanking (action)
  "autoerotismo": [4, 4], // Masturbation (formal)
  "sborrare": [4, 4], // To cum
  "sborro": [4, 4], // I cum / cum (noun)
  "orgasmare": [4, 4], // To orgasm

  // ========================================
  // === EXPANSION: Compound insults - figlio di ===
  // ========================================
  "figlio di troie": [5, 5], // Son of whores
  "figlio di merdaccia": [3, 5], // Son of big shit
  "figlio di un porco": [1, 4], // Son of a pig
  "figlio di una scrofa": [1, 4], // Son of a sow
  "figlio di buona mamma": [2, 3], // Son of a good mother (euphemism)
  "figlio di papa": [1, 4], // Daddy's boy / spoiled
  "figlio di troia marcio": [5, 4], // Son of a rotten whore
  "figlio di puttana maledetta": [5, 4], // Son of a damned whore
  "figlio di zoccola fetida": [1, 4], // Son of a fetid slut
  "figlio di merda": [3, 5], // Son of shit
  "figlio di un cornuto": [1, 4], // Son of a cuckold
  "figlio di un bastardo": [3, 4], // Son of a bastard
  "figlio di un verme": [1, 4], // Son of a worm
  "figlio del demonio": [1, 4], // Son of the demon
  "figlio del diavolo": [1, 4], // Son of the devil
  "figlio di satana": [1, 4], // Son of Satan
  "figlio di giuda": [1, 4], // Son of Judas

  // === Compound insults - testa di ===
  "testa di pietra": [1, 4], // Stone head / stubborn idiot
  "testa di ferro": [1, 4], // Iron head / stubborn
  "testa di asino": [1, 4], // Donkey head
  "testa di porco": [1, 4], // Pig head
  "testa di maiale": [1, 4], // Pig head (variant)
  "testa di cane": [1, 4], // Dog head
  "testa di mulo": [1, 4], // Mule head / stubborn
  "testa di gallina": [1, 4], // Chicken head / stupid
  "testa di cappero": [1, 4], // Caper head / idiot
  "testa di belìn": [4, 4], // Dick head (Ligurian)
  "testa quadra": [1, 4], // Square head / stubborn

  // === Compound insults - faccia di ===
  "faccia di tolla": [1, 4], // Tin face / shameless
  "faccia da cane": [1, 4], // Dog face
  "faccia da porco": [1, 4], // Pig face
  "faccia da scimmia": [1, 4], // Monkey face
  "faccia da galera": [1, 4], // Prison face / criminal-looking
  "faccia da morto": [1, 4], // Dead face
  "faccia da deficiente": [1, 4], // Moron face
  "faccia da idiota": [1, 4], // Idiot face
  "faccia da stronzo": [1, 4], // Turd face (variant)

  // === Compound insults - pezzo di ===
  "pezzo di coglione": [1, 4], // Piece of idiot
  "pezzo di cornuto": [1, 4], // Piece of cuckold
  "pezzo di bastardo": [3, 4], // Piece of bastard
  "pezzo di animale": [1, 4], // Piece of animal
  "pezzo di porco": [1, 4], // Piece of pig
  "pezzo di ignorante": [1, 4], // Piece of ignorant
  "pezzo di farabutto": [1, 4], // Piece of scoundrel
  "pezzo di delinquente": [1, 4], // Piece of delinquent
  "pezzo di vigliacco": [1, 4], // Piece of coward
  "pezzo di immondizia": [1, 4], // Piece of garbage
  "pezzo di spazzatura": [1, 4], // Piece of trash

  // ========================================
  // === EXPANSION: Evasion spellings ===
  // ========================================
  "c.a.z.z.o": [3, 5], // Cazzo dotted
  "c-a-z-z-o": [3, 5], // Cazzo dashed
  "c a z z o": [3, 5], // Cazzo spaced
  "cazzzo": [3, 5], // Cazzo triple z
  "caaazzo": [3, 5], // Cazzo stretched a
  "cazzoooo": [3, 5], // Cazzo stretched o
  "m1nchia": [3, 5], // Minchia with 1
  "m!nchia": [3, 5], // Minchia with !
  "m.i.n.c.h.i.a": [3, 5], // Minchia dotted
  "f!ca": [3, 5], // Fica with !
  "f!ga": [3, 5], // Figa with !
  "f.i.g.a": [3, 5], // Figa dotted
  "f-i-g-a": [3, 5], // Figa dashed
  "s.t.r.o.n.z.o": [3, 5], // Stronzo dotted
  "m.e.r.d.a": [3, 5], // Merda dotted
  "m-e-r-d-a": [3, 5], // Merda dashed
  "merrd4": [3, 5], // Merda variant
  "p0rco dio": [3, 5], // Porco dio with 0
  "p0rc0 di0": [3, 5], // Porco dio with 0s
  "d!o porco": [3, 5], // Dio porco with !
  "di0 porco": [3, 5], // Dio porco with 0
  "di0 c4ne": [3, 5], // Dio cane with numbers
  "vaff4nculo": [3, 5], // Vaffanculo with 4
  "v4ffanculo": [3, 5], // Vaffanculo with 4
  "v.a.f.f.a.n.c.u.l.o": [3, 5], // Vaffanculo dotted
  "c0gli0ne": [3, 5], // Coglione with 0s
  "c.o.g.l.i.o.n.e": [3, 5], // Coglione dotted
  "puttan4": [3, 5], // Puttana with 4
  "p.u.t.t.a.n.a": [3, 5], // Puttana dotted
  "tr0i4": [3, 5], // Troia with 0 and 4
  "t.r.o.i.a": [3, 5], // Troia dotted
  "z0cc0la": [3, 5], // Zoccola with 0s
  "sc0pata": [3, 5], // Scopata with 0
  "b0cchin0": [3, 5], // Bocchino with 0s
  "p0mpin0": [3, 5], // Pompino with 0s
  "c.u.l.o": [3, 5], // Culo dotted
  "fr0ci0": [3, 5], // Frocio with 0s
  "f.r.o.c.i.o": [3, 5], // Frocio dotted
  "neg*o": [3, 5], // Negro with star
  "negr0": [3, 5], // Negro with 0
  "n3gro": [3, 5], // Negro with 3
  "dioc4ne": [3, 5], // Diocane with 4
  "di0cane": [3, 5], // Diocane with 0
  "diop0rco": [3, 5], // Dioporco with 0
  "di0p0rc0": [3, 5], // Dioporco with 0s
  "madonn4": [3, 5], // Madonna with 4
  "m4donna": [3, 5], // Madonna with 4
  "cr1sto": [3, 5], // Cristo with 1
  "crist0": [3, 5], // Cristo with 0
  "sbor4ta": [3, 5], // Sborata with 4
  "sborr4ta": [3, 5], // Sborrata with 4

  // ========================================
  // === EXPANSION: More compound insults and phrases ===
  // ========================================
  "vai a farti benedire": [3, 5], // Go get blessed (euphemism for fuck off)
  "vai a quel paese": [3, 5], // Go to that place (euphemism for fuck off)
  "levati dalle palle": [4, 4], // Get off the balls / go away
  "non scassare la minchia": [4, 4], // Don't break the dick (Sicilian)
  "sta cazzo": [4, 4], // Dick (emphatic)
  "sticazzi": [4, 4], // Who gives a dick (Roman)
  "daje co sto cazzo": [4, 4], // Come on with this dick (Roman)
  "ma va' al diavolo": [1, 4], // Go to the devil
  "ma va' all'inferno": [1, 4], // Go to hell
  "ma vattela a pigliare": [2, 3], // Go take it (euphemism)
  "ma che cazzo vuoi": [4, 4], // What the dick do you want
  "ma vaffanculo va'": [3, 5], // Go fuck off already
  "che coglioni": [4, 4], // What balls / how annoying
  "che minchia": [4, 4], // What the dick (Sicilian)
  "che merda": [3, 5], // What shit
  "che schifo di merda": [3, 5], // What disgusting shit
  "ma va a cagare": [3, 5], // Go shit (dismissive)
  "ma va a morire": [5, 5], // Go die
  "ma va a morire ammazzato": [5, 5], // Go die killed
  "ma va a morire ammazzata": [5, 5], // Go die killed (fem)
  "crepa": [5, 5], // Die / croak
  "crepacce": [5, 5], // Die (vulgar)
  "crepa brutto stronzo": [1, 4], // Die ugly asshole
  "muori male": [5, 5], // Die badly
  "ti ammazzo": [1, 4], // I'll kill you
  "ti spezzo in due": [1, 4], // I'll break you in two
  "ti apro in due": [1, 4], // I'll split you in two
  "ti faccio un culo così": [3, 4], // I'll make your ass this big
  "ti sfascio": [1, 4], // I'll smash you
  "ti sfondo": [1, 4], // I'll break through you
  "ti distruggo": [1, 4], // I'll destroy you
  "ti massacro": [3, 4], // I'll massacre you
  "porco di un mondo ladro": [1, 4], // Pig of a thief world
  "porca miseria ladra": [1, 4], // Pig thief misery
  "porcaccia la miseria": [1, 4], // Piggish the misery
  "porcaccia": [1, 4], // Piggish (emphatic)
  "porcaccione": [1, 4], // Big pig (emphatic augmentative)
  "porcacciona": [1, 4], // Big pig (fem emphatic)
  "porcherie": [4, 4], // Disgusting things (plural)
  "schifezze": [1, 4], // Disgusting things (plural)
  "roba di merda": [3, 5], // Shit stuff
  "roba da matti": [1, 4], // Crazy stuff
  "roba schifosa": [1, 4], // Disgusting stuff
  "tutto di merda": [3, 5], // Everything is shit
  "tutto una merda": [3, 5], // Everything's a shit
  "merdacce": [3, 5], // Big shits (plural)
  "merdosa": [3, 5], // Shitty (fem)
  "merdosi": [3, 5], // Shitty (masc plural)
  "merdose": [3, 5], // Shitty (fem plural)
  "cacca": [1, 4], // Poop (childish)
  "caccola": [3, 5], // Booger / little shit
  "incazzata": [1, 4], // Pissed off (fem)
  "incazzatissima": [1, 4], // Very pissed off (superlative fem)
  "scazzata": [1, 4], // Annoyed (fem)
  "scazzo": [1, 4], // Annoyance / boredom
  "rincoglionito": [1, 4], // Made stupid / senile
  "rincoglionita": [1, 4], // Made stupid (fem)
  "rincoglionirsi": [1, 4], // To become stupid
  "rincoglionimento": [1, 4], // Stupefaction / senility
  "scoglionato": [1, 4], // Fed up / annoyed
  "scoglionata": [1, 4], // Fed up (fem)
  "sbroccato": [1, 4], // Snapped / gone crazy
  "sbroccata": [1, 4], // Snapped (fem)
  "sclerare": [1, 4], // To flip out
  "sclerato": [1, 4], // Flipped out (masc)
  "sclerata": [1, 4], // Flipped out (fem)
  "sclerosi": [1, 4], // Sclerosis / going crazy
  "dare di matto": [1, 4], // To go crazy
  "fuori di testa": [1, 4], // Out of one's mind
  "fuori come un balcone": [1, 4], // Out like a balcony / crazy
  "matto come un cavallo": [1, 4], // Crazy as a horse
  "pazzo furioso": [1, 4], // Furiously crazy
  "pazza furiosa": [1, 4], // Furiously crazy (fem)
  "deficiente totale": [1, 4], // Total moron
  "imbecille patentato": [1, 4], // Licensed imbecile
  "cretino patentato": [1, 4], // Licensed cretin
  "idiota patentato": [1, 4], // Licensed idiot
  "stupido come una capra": [1, 4], // Stupid as a goat
  "ignorante come una capra": [1, 4], // Ignorant as a goat
  "asino di natura": [1, 4], // Donkey by nature
  "ciuccio come un somaro": [1, 4], // Dumb as a donkey
  "zuccone": [1, 4], // Big pumpkin / blockhead
  "zuccona": [1, 4], // Blockhead (fem)
  "testone": [1, 4], // Big head / stubborn
  "testona": [1, 4], // Big head (fem) / stubborn
  "testadicazzo": [4, 4], // Dickhead (one word)
  "testadirapa": [1, 4], // Turnip head (one word)
  "testadimulo": [1, 4], // Mule head (one word)

  // ========================================
  // === EXPANSION: More insults and slurs ===
  // ========================================
  "terroni": [5, 4], // Southerners (derogatory plural)
  "terrone di merda": [5, 5], // Shit southerner (derogatory)
  "polentona": [5, 4], // Northerner (fem, derogatory)
  "polentoni": [5, 4], // Northerners (derogatory plural)
  "polentone di merda": [5, 5], // Shit northerner (derogatory)
  "marocchino di merda": [5, 5], // Shit Moroccan (racist)
  "sporco straniero": [5, 4], // Dirty foreigner (xenophobic)
  "extracomunitario di merda": [5, 5], // Shit non-EU immigrant (xenophobic)
  "zingari di merda": [5, 5], // Shit gypsies (racist)
  "frocio di merda": [5, 5], // Shit faggot (homophobic)
  "sporco frocio": [5, 4], // Dirty faggot (homophobic)
  "checca isterica": [5, 4], // Hysterical queen (homophobic)
  "lesbicaccia": [5, 4], // Big lesbian (derogatory augmentative)
  "lesbica di merda": [5, 5], // Shit lesbian (homophobic)
  "trans di merda": [5, 5], // Shit trans (transphobic)
  "travestito di merda": [5, 5], // Shit crossdresser (transphobic)
  "handicappato di merda": [5, 5], // Shit handicapped (ableist)
  "ritardato di merda": [5, 5], // Shit retard (ableist)
  "mongolo di merda": [5, 5], // Shit mongoloid (ableist)
  "spastico di merda": [5, 5], // Shit spastic (ableist)
  "cerebroleso": [5, 4], // Brain damaged (ableist)

  // ========================================
  // === EXPANSION: Euphemistic and evasive terms ===
  // ========================================
  "accidenti": [2, 3], // Damn (euphemism)
  "accipicchia": [2, 3], // Darn (euphemism for cazzo)
  "cavolo": [2, 3], // Cabbage (euphemism for cazzo)
  "cavoli": [2, 3], // Cabbages (euphemism for cazzi)
  "caspita": [2, 3], // Gosh (euphemism for cazzo)
  "capperi": [2, 3], // Capers (euphemism for cazzo)
  "cacchio": [2, 3], // Shoot (euphemism for cazzo)
  "acciderba": [3, 3], // Damn grass (euphemism)
  "acciderboli": [2, 3], // Multi-damn (euphemism)
  "porca pupattola": [2, 3], // Pig doll (euphemistic blasphemy)
  "porca puzzola": [2, 3], // Pig skunk (euphemistic blasphemy)
  "porca trota": [2, 3], // Pig trout (euphemistic blasphemy)
  "diamine": [2, 3], // Damn (euphemism for dio)
  "diavolo": [2, 3], // Devil (euphemism)
  "diavolaccio": [2, 3], // Big devil (euphemism)
  "cribbio": [2, 3], // Gee (euphemism for Cristo)
  "cristiddio": [3, 4], // Christ God (variant)
  "zucchina": [4, 3], // Zucchini (euphemism for penis)
  "banana": [3, 4], // Banana (euphemism for penis)
  "salame": [4, 3], // Salami (euphemism for penis)
  "uccello": [4, 3], // Bird / penis (euphemism)
  "bernarda": [4, 3], // Bertha (euphemism for penis)
  "patata": [4, 3], // Potato (euphemism for vagina)
  "passera": [4, 3], // Sparrow (euphemism for vagina)
  "passerina": [4, 3], // Little sparrow (euphemism for vagina)
  "farfallina": [4, 3], // Little butterfly (euphemism for vagina)
  "topina": [4, 3], // Little mouse (euphemism for vagina)
  "sedere": [3, 4], // Buttocks / sit
  "deretano": [3, 4], // Rear end
  "fondoschiena": [3, 4], // Bottom of the back
  "lato b": [3, 3], // B side (euphemism for ass)
  "posteriore": [3, 4], // Posterior

  // ========================================
  // === EXPANSION: Internet/SMS evasion spellings ===
  // ========================================
  "kazzo": [2, 5], // Cazzo with k
  "kazzata": [2, 5], // Cazzata with k
  "kazzone": [2, 5], // Cazzone with k
  "kulo": [3, 5], // Culo with k
  "fika": [2, 5], // Fica with k
  "fikka": [2, 5], // Fica with kk
  "troija": [2, 5], // Troia with j
  "putt4n4": [2, 5], // Puttana with 4s
  "vakka": [2, 5], // Vacca with k
  "vakkaccia": [2, 5], // Vaccaccia with k
  "porko": [2, 5], // Porco with k
  "porko dio": [2, 5], // Porco Dio with k
  "porka madonna": [2, 5], // Porca Madonna with k
  "djo porko": [2, 5], // Dio porco with k and j
  "djo bestia": [2, 5], // Dio bestia with j
  "djo kane": [2, 5], // Dio cane with j and k
  "mertha": [2, 5], // Merda with th
  "caxo": [2, 5], // Cazzo with x
  "caxzo": [2, 5], // Cazzo with x variant
  "stroonzo": [2, 5], // Stronzo stretched
  "coione": [2, 5], // Coglione simplified
  "cojoni": [2, 5], // Coglioni simplified
  "koioni": [2, 5], // Coglioni with k
  "vaffa": [2, 5], // Vaffanculo abbreviated
  "vaffa'": [2, 5], // Vaffanculo abbreviated with apostrophe
  "vaffan": [2, 5], // Vaffanculo abbreviated
  "vaff": [2, 5], // Vaffanculo very abbreviated
  "fanculo": [2, 5], // Vaffanculo shortened
  "fancul0": [2, 5], // Fanculo with 0
  "f4nculo": [2, 5], // Fanculo with 4
  "f@nculo": [2, 5], // Fanculo with @
  "a'fanculo": [2, 5], // To hell (apostrophe variant)
  "minxia": [2, 5], // Minchia with x
  "minkya": [2, 5], // Minchia with k and y
  "str0nza": [2, 5], // Stronza with 0
  "str0nz4": [2, 5], // Stronza with 0 and 4
  "z0ccol4": [2, 5], // Zoccola with 0 and 4
  "b4stardo": [3, 5], // Bastardo with 4
  "b4st4rdo": [3, 5], // Bastardo with 4s

  // ========================================
  // === EXPANSION: Augmentatives, diminutives, and variations ===
  // ========================================
  "cazzona": [4, 4], // Big dick (fem, augmentative)
  "cazzacci": [1, 4], // Ugly dicks (pejorative plural)
  "stronzettino": [3, 4], // Tiny turd (double diminutive)
  "stronzate": [1, 4], // Stupid things (plural)
  "stronzitudine": [3, 4], // Turd-ness (ironic formation)
  "coglionate": [1, 4], // Stupid things (plural)
  "coglionaccio": [1, 4], // Big idiot (augmentative pejorative)
  "puttanate": [5, 4], // Whore-ish things / nonsense (plural)
  "puttanaccia": [1, 4], // Big ugly whore (pejorative)
  "troiata": [5, 4], // Whore-ish act / nonsense
  "troiate": [5, 4], // Whore-ish acts (plural)
  "troiaccia": [1, 4], // Big ugly whore (pejorative)
  "troietta": [5, 4], // Little whore (diminutive)
  "zoccolone": [3, 4], // Big slut (augmentative)
  "zoccolata": [3, 4], // Slutty act
  "zoccoletta": [3, 4], // Little slut (diminutive)
  "bastardello": [3, 4], // Little bastard (diminutive)
  "bastardaccio": [1, 4], // Ugly bastard (pejorative)
  "bastardaggine": [3, 4], // Bastardy
  "cornutone": [3, 4], // Big cuckold (augmentative)
  "cornutello": [3, 4], // Little cuckold (diminutive)
  "cornutaccio": [1, 4], // Ugly cuckold (pejorative)
  "cornutazza": [1, 4], // Ugly cuckold (fem pejorative)
  "figliadiputtana": [5, 4], // Daughter of a whore (one word)
  "figliodiputtana": [5, 5], // Son of a whore (one word)
  "figlidiputtana": [5, 4], // Sons of whores (one word)
  "porcomadonna": [3, 4], // PorcoMadonna (one word)
  "porcamadonna": [3, 4], // PorcaMadonna (one word)
  "diobestia": [3, 4], // DioBestia (one word)
  "diomaiale": [3, 4], // DioMaiale (one word)
  "dioboia": [3, 4], // DioBoia (one word)
  "dioladro": [3, 4], // DioLadro (one word)
  "diomerda": [3, 4], // DioMerda (one word)
  "cristobestia": [3, 4], // CristoBestia (one word)
  "cristocane": [3, 4], // CristoCane (one word)
  "madonnaporco": [3, 4], // MadonnaPorco (one word)
  "madonnaputtana": [3, 4], // MadonnaPuttana (one word)
  "madonnatroia": [3, 4], // MadonnaTrioa (one word)
  "madonnazoccola": [3, 4], // MadonnaZoccola (one word)
  "madonnaladra": [3, 4], // MadonnaLadra (one word)

  // ========================================
  // === EXPANSION: Additional vulgar expressions ===
  // ========================================
  "succhiamelo": [3, 4], // Suck it for me
  "leccapalle": [3, 4], // Ball licker / sycophant
  "leccapiedi": [3, 4], // Foot licker / sycophant
  "baciapile": [3, 4], // Battery kisser / religious hypocrite
  "ruffiana": [3, 4], // Brown-noser (fem)
  "paraculo": [3, 4], // Ass-coverer / opportunist
  "paracul0": [3, 5], // Paraculo with 0
  "paracula": [3, 4], // Opportunist (fem)
  "lecchini": [3, 4], // Lickers / sycophants (plural)
  "lecchina": [3, 4], // Licker (fem) / sycophant
  "mangia cazzi": [4, 4], // Dick eater
  "cacca merda": [3, 5], // Poop shit (childish compound)
  "scoreggia": [3, 4], // Fart
  "scoreggiare": [3, 4], // To fart
  "scoreggione": [3, 4], // Big farter
  "scoreggiare come un mulo": [3, 4], // To fart like a mule
  "puzzare come un maiale": [3, 4], // To stink like a pig
  "puzzare come una fogna": [3, 4], // To stink like a sewer
  "puzzare di merda": [3, 5], // To stink of shit
  "puzzone": [3, 4], // Big stinker
  "puzzolente di merda": [3, 5], // Stinking shit (compound)
  "fetente lurido": [3, 4], // Filthy stinking
  "fetente schifoso": [3, 4], // Disgusting stinking
  "lurido porco": [3, 4], // Filthy pig
  "lurido verme": [3, 4], // Filthy worm
  "sporco bastardo": [3, 4], // Dirty bastard
  "sporco infame": [3, 4], // Dirty infamous
  "schifosa lurida": [3, 4], // Filthy disgusting (fem)
  "viscido porco": [3, 4], // Slimy pig
  "brutta come la fame": [1, 4], // Ugly as hunger
  "brutto come la morte": [1, 4], // Ugly as death
  "brutto come il peccato": [1, 4], // Ugly as sin
  "brutto come un rospo": [1, 4], // Ugly as a toad
  "cesso con le gambe": [3, 4], // Toilet with legs
  "vomitevole": [3, 4], // Vomit-worthy
  "rivoltante come la merda": [3, 5], // Revolting as shit
  "fottitevi": [3, 5], // Fuck yourselves
  "fottitelo": [3, 5], // Fuck it yourself
  "ti fotto": [3, 5], // I'll fuck you
  "vi fotto": [3, 5], // I'll fuck you all
  "vi fotto tutti": [3, 5], // I'll fuck all of you
  "ti scopo viva": [3, 5], // I'll fuck you alive (fem)
  "ti scopo morta": [3, 5], // I'll fuck you dead (fem)
  "ti monto": [3, 4], // I'll mount you
  "ti sbatto": [3, 4], // I'll bang you
  "ti chiavo": [3, 5], // I'll fuck you (variant)
  "ti trombo": [3, 5], // I'll fuck you (slang)
  "ti prendo a calci in culo": [3, 4], // I'll kick your ass
  "ti prendo a pugni": [3, 4], // I'll punch you
  "ti spacco la faccia": [3, 4], // I'll smash your face
  "ti spacco il culo": [3, 4], // I'll smash your ass
  "ti faccio nero": [3, 4], // I'll beat you black
  "ti faccio a pezzi": [3, 4], // I'll tear you apart
  "ti faccio un culo a strisce": [3, 4], // I'll make your ass striped
  "ti faccio il culo a cappello": [3, 4], // I'll make your ass into a hat
  "ti faccio il culo come una O": [3, 4], // I'll make your ass like an O
  "ti mangio vivo": [3, 4], // I'll eat you alive
  "ti strozzo": [3, 4], // I'll strangle you
  "ti strangolo": [3, 4], // I'll strangle you (variant)
  "ti smonto": [3, 4], // I'll disassemble you
  "ti faccio secco": [3, 4], // I'll make you dry / kill you

  // ========================================
  // === EXPANSION: Umbrian dialect profanity ===
  // ========================================
  "cacadubbi": [3, 5], // Doubt shitter / indecisive (Umbrian)
  "fijo de 'na gran puttana": [5, 4], // Son of a great whore (Umbrian)
  "porco d'un dio": [3, 4], // Pig of a God (Umbrian blasphemy)
  "dio de un porco": [3, 4], // God of a pig (Umbrian blasphemy)

  // ========================================
  // === EXPANSION: More derogatory terms ===
  // ========================================
  "sottospecie": [3, 4], // Sub-species
  "sottospecie di merda": [3, 5], // Sub-species of shit
  "sottospecie di uomo": [3, 4], // Sub-species of man
  "sottospecie di donna": [3, 4], // Sub-species of woman
  "rifiuto umano": [3, 4], // Human refuse
  "rifiuto della società": [3, 4], // Society's refuse
  "feccia della società": [3, 4], // Dregs of society
  "feccia": [3, 4], // Dregs
  "scarto": [3, 4], // Reject / waste
  "scarto umano": [3, 4], // Human waste
  "verme schifoso": [3, 4], // Disgusting worm
  "vermicello": [3, 4], // Little worm
  "verminoso": [3, 4], // Worm-infested
  "scarafaggio umano": [4, 4], // Human cockroach
  "parassita": [3, 4], // Parasite
  "parassita della società": [3, 4], // Society's parasite
  "sanguisuga schifosa": [3, 4], // Disgusting leech
  "serpente velenoso": [3, 4], // Poisonous snake
  "jena": [3, 4], // Hyena
  "maiale schifoso": [3, 4], // Disgusting pig
  "maiale lurido": [3, 4], // Filthy pig
  "bestione": [3, 4], // Big beast
  "ignorantone": [3, 4], // Big ignorant
  "ignorantona": [3, 4], // Big ignorant (fem)
  "cafona": [3, 4], // Boor (fem)
  "zoticone": [3, 4], // Big boor
  "zoticona": [3, 4], // Big boor (fem)
  "buzzurrata": [3, 4], // Barbaric act
  "tanghero": [3, 4], // Boor / lout
  "bifolco": [3, 4], // Yokel
  "villano": [3, 4], // Peasant / rude person
  "villana": [3, 4], // Peasant (fem) / rude
  "villanaccio": [3, 4], // Big rude peasant
  "cafone di merda": [3, 5], // Shit boor
  "bifolco di merda": [3, 5], // Shit yokel
  "villano di merda": [3, 5], // Shit peasant
  "contadino di merda": [3, 5], // Shit farmer (derogatory)
  "montanaro di merda": [3, 5], // Shit mountain dweller (derogatory)
  "provincialotto": [3, 4], // Provincial / narrow-minded
  "paesano di merda": [3, 5], // Shit villager (derogatory)

  // ========================================
  // === EXPANSION: More Sardinian expanded profanity ===
  // ========================================
  "a funtana de su diaulu": [3, 4], // The devil's fountain (Sardinian curse)
  "arroganteddu": [3, 4], // Little arrogant (Sardinian)
  "babbu mannu": [1, 4], // Big idiot (Sardinian)
  "brutta bestia": [1, 4], // Ugly beast (Sardinian)
  "chi t'at fatu": [3, 4], // Who made you (Sardinian insult)
  "culu de pedra": [3, 4], // Stone ass (Sardinian)
  "figiu de bagassa": [5, 5], // Son of a whore (Sardinian)
  "is corrus de babbu tuu": [1, 4], // The horns of your father (Sardinian)
  "merda de bacca": [3, 5], // Cow shit (Sardinian)
  "porcandria": [3, 4], // Piggishness (Sardinian)
  "pudda": [1, 4], // Chicken / coward (Sardinian)
  "puddu": [3, 4], // Chicken (masc, Sardinian)
  "puttanazza": [5, 4], // Big whore (Sardinian variant)
  "scimpru": [1, 4], // Idiot (Sardinian)
  "tontu": [1, 4], // Stupid (Sardinian)
  "tonta": [1, 4], // Stupid (fem, Sardinian)
};
const italianBadWords: Record<string, { s: number; c: number }> = {};
for (const [k, [s, c]] of Object.entries(_d)) {
    italianBadWords[k] = { s, c };
}
export default italianBadWords;

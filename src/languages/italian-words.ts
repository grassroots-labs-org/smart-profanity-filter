/**
 * Italian profanity words list
 * Contains common profanities, insults, and offensive terms. Includes variations and dialects.
 * ⚠️ Warning: This file contains explicit language in Italian
 */
const italianBadWords: Record<string, { s: number; c: number }> = {
  "allupato": { s: 3, c: 4 }, // Horny / sex-crazed
  "ammucchiata": { s: 3, c: 4 }, // Orgy
  "anale": { s: 3, c: 4 }, // Anal
  "arrapato": { s: 3, c: 4 }, // Horny / aroused
  "arrusa": { s: 3, c: 4 }, // Horny (Sicilian, fem)
  "arruso": { s: 3, c: 4 }, // Horny (Sicilian, masc)
  "bagascia": { s: 5, c: 4 }, // Whore (dialectal)
  "bagassa": { s: 5, c: 4 }, // Whore (dialectal variant)
  "baldracca": { s: 5, c: 4 }, // Whore / slut
  "balle": { s: 4, c: 4 }, // Balls / nonsense
  "battona": { s: 5, c: 4 }, // Streetwalker / prostitute
  "belino": { s: 4, c: 4 }, // Penis (Ligurian dialect)
  "bocchinara": { s: 4, c: 5 }, // Woman who gives blowjobs
  "bocchino": { s: 4, c: 5 }, // Blowjob
  "bordello": { s: 3, c: 4 }, // Brothel
  "bucaiolo": { s: 3, c: 4 }, // Gay man (derogatory, Tuscan)
  "busone": { s: 3, c: 4 }, // Gay man (derogatory)
  "cagare": { s: 3, c: 5 }, // To shit
  "cagata": { s: 3, c: 5 }, // Shitty thing / crap
  "cagna": { s: 3, c: 4 }, // Bitch (lit. female dog)
  "cazzata": { s: 3, c: 4 }, // Bullshit / stupid thing
  "cazzimma": { s: 3, c: 4 }, // Nastiness / malice (Neapolitan)
  "cazzo": { s: 4, c: 5 }, // Dick / fuck
  "cazzone": { s: 1, c: 4 }, // Big dick / idiot
  "cesso": { s: 1, c: 4 }, // Toilet / ugly person
  "checca": { s: 3, c: 4 }, // Effeminate gay man (derogatory)
  "chiappa": { s: 3, c: 4 }, // Butt cheek
  "chiavare": { s: 3, c: 5 }, // To fuck
  "chiavata": { s: 3, c: 5 }, // A fuck (noun)
  "ciucciami il cazzo": { s: 4, c: 4 }, // Suck my dick
  "coglione": { s: 3, c: 4 }, // Testicle / idiot
  "coglioni": { s: 1, c: 4 }, // Testicles / idiots
  "cornuto": { s: 3, c: 4 }, // Cuckold
  "culattina": { s: 3, c: 4 }, // Gay man (derogatory, diminutive)
  "culattone": { s: 3, c: 4 }, // Gay man (derogatory)
  "culo": { s: 3, c: 4 }, // Ass
  "ditalino": { s: 3, c: 4 }, // Fingering
  "fava": { s: 4, c: 4 }, // Dick (lit. broad bean)
  "fica": { s: 4, c: 4 }, // Pussy / vagina
  "figa": { s: 4, c: 4 }, // Pussy / vagina (variant)
  "figlio di buona donna": { s: 2, c: 3 }, // Son of a good woman (euphemism for son of a bitch)
  "figlio di puttana": { s: 5, c: 5 }, // Son of a whore
  "figone": { s: 3, c: 4 }, // Very hot person
  "finocchio": { s: 3, c: 4 }, // Gay man (derogatory, lit. fennel)
  "fottere": { s: 3, c: 5 }, // To fuck
  "fottersi": { s: 3, c: 5 }, // To fuck oneself / not to care
  "fracicone": { s: 3, c: 4 }, // Filthy person
  "fregna": { s: 4, c: 4 }, // Pussy / vagina (Roman)
  "frocio": { s: 3, c: 4 }, // Faggot (derogatory)
  "froscio": { s: 3, c: 4 }, // Faggot (derogatory, variant)
  "goldone": { s: 3, c: 4 }, // Condom (slang)
  "guardone": { s: 3, c: 4 }, // Peeping Tom / voyeur
  "imbecille": { s: 1, c: 4 }, // Imbecile / idiot
  "incazzarsi": { s: 3, c: 4 }, // To get pissed off
  "incoglionirsi": { s: 1, c: 4 }, // To become stupid / dazed
  "ingoio": { s: 3, c: 4 }, // I swallow (sexual)
  "leccaculo": { s: 3, c: 4 }, // Ass-licker / sycophant
  "lecchino": { s: 3, c: 4 }, // Bootlicker / sycophant
  "mannaggia": { s: 3, c: 4 }, // Damn it
  "merda": { s: 3, c: 5 }, // Shit
  "merdata": { s: 3, c: 5 }, // Shitty act / mess
  "merdoso": { s: 3, c: 5 }, // Shitty
  "mignotta": { s: 5, c: 4 }, // Whore (Roman)
  "minchia": { s: 4, c: 4 }, // Dick (Sicilian)
  "minchione": { s: 1, c: 4 }, // Idiot (Sicilian, lit. big dick)
  "mona": { s: 1, c: 4 }, // Pussy / idiot (Venetian)
  "nerchia": { s: 4, c: 4 }, // Dick (vulgar)
  "palle": { s: 4, c: 4 }, // Balls / nonsense
  "palloso": { s: 3, c: 4 }, // Boring / ball-busting
  "patonza": { s: 4, c: 4 }, // Pussy (slang)
  "pecorina": { s: 3, c: 4 }, // Doggy style (lit. like a sheep)
  "picio": { s: 4, c: 4 }, // Penis (dialectal)
  "pincare": { s: 3, c: 5 }, // To fuck (dialectal)
  "pippa": { s: 3, c: 4 }, // Handjob / wank
  "pippone": { s: 3, c: 4 }, // Long boring speech / big wank
  "pirla": { s: 1, c: 4 }, // Idiot (Milanese, lit. spinning top)
  "pisciare": { s: 3, c: 4 }, // To piss
  "piscio": { s: 3, c: 4 }, // Piss
  "pisello": { s: 4, c: 4 }, // Penis (lit. pea)
  "pompa": { s: 4, c: 5 }, // Blowjob (slang)
  "pompino": { s: 4, c: 5 }, // Blowjob
  "porca": { s: 3, c: 4 }, // Pig (fem) / slut
  "porca madonna": { s: 3, c: 4 }, // Pig Madonna (blasphemy)
  "porca miseria": { s: 3, c: 4 }, // Damn it (lit. pig misery)
  "porca puttana": { s: 5, c: 5 }, // Fucking whore (blasphemy)
  "porco": { s: 3, c: 4 }, // Pig / dirty person
  "porco due": { s: 2, c: 3 }, // Pig two (euphemistic blasphemy)
  "porco zio": { s: 2, c: 3 }, // Pig uncle (euphemistic blasphemy)
  "potta": { s: 4, c: 4 }, // Pussy (archaic/dialectal)
  "puppami": { s: 3, c: 4 }, // Suck me
  "puttana": { s: 5, c: 4 }, // Whore / prostitute
  "recchione": { s: 3, c: 4 }, // Faggot (Neapolitan, derogatory)
  "rincoglionire": { s: 1, c: 4 }, // To become senile / stupid
  "rompiballe": { s: 3, c: 4 }, // Ball-breaker / annoying person
  "rompipalle": { s: 3, c: 4 }, // Ball-breaker / annoying person (variant)
  "ruffiano": { s: 3, c: 4 }, // Pimp / brown-noser
  "sbattere": { s: 3, c: 5 }, // To bang / to fuck
  "sbattersi": { s: 3, c: 5 }, // To bother / to fuck oneself
  "sborra": { s: 3, c: 4 }, // Cum / semen
  "sborrata": { s: 3, c: 4 }, // Cumshot
  "sborrone": { s: 3, c: 4 }, // Big cummer / premature ejaculator
  "scopare": { s: 3, c: 5 }, // To fuck (lit. to sweep)
  "scopata": { s: 3, c: 5 }, // A fuck (noun)
  "sega": { s: 3, c: 4 }, // Wank / handjob (lit. saw)
  "smandrappata": { s: 3, c: 4 }, // Slut / slovenly woman
  "socmel": { s: 3, c: 4 }, // Suck it (Lombard dialect)
  "sorca": { s: 4, c: 4 }, // Pussy (Roman, lit. mouse)
  "spagnola": { s: 4, c: 4 }, // Titjob (lit. Spanish)
  "spompinare": { s: 4, c: 5 }, // To give a blowjob
  "sticchio": { s: 4, c: 4 }, // Pussy (Sicilian)
  "stronza": { s: 3, c: 4 }, // Bitch / turd (fem)
  "stronzata": { s: 1, c: 4 }, // Bullshit / stupid thing
  "stronzo": { s: 3, c: 4 }, // Asshole / turd
  "succhiami": { s: 3, c: 4 }, // Suck me
  "succhione": { s: 3, c: 4 }, // Hickey / sucker
  "sveltina": { s: 3, c: 4 }, // Quickie
  "sverginare": { s: 3, c: 4 }, // To deflower / take virginity
  "terrone": { s: 3, c: 4 }, // Slur for Southern Italians
  "testa di cazzo": { s: 4, c: 4 }, // Dickhead
  "tette": { s: 4, c: 4 }, // Tits
  "topa": { s: 4, c: 4 }, // Pussy (slang, lit. mouse)
  "troia": { s: 5, c: 4 }, // Whore / slut
  "trombare": { s: 3, c: 5 }, // To fuck (slang)
  "vacca": { s: 3, c: 4 }, // Cow / slut
  "vaffanculo": { s: 3, c: 4 }, // Fuck off / go fuck yourself
  "zinne": { s: 4, c: 4 }, // Tits (slang)
  "zoccola": { s: 3, c: 4 }, // Slut (lit. sewer rat)
  "porcodio": { s: 3, c: 4 }, // Pig God (blasphemy)
  "dio cane": { s: 3, c: 4 }, // God dog (blasphemy)
  "dio porco": { s: 3, c: 4 }, // God pig (blasphemy)
  "dio bestia": { s: 3, c: 4 }, // God beast (blasphemy)
  "madonna puttana": { s: 5, c: 4 }, // Madonna whore (blasphemy)
  "porca troia": { s: 5, c: 5 }, // Fucking whore (blasphemy)
  "che cazzo": { s: 3, c: 5 }, // What the fuck
  "del cazzo": { s: 4, c: 5 }, // Of the dick / shitty
  "figlio di troia": { s: 5, c: 5 }, // Son of a whore
  "affanculo": { s: 3, c: 5 }, // Fuck off (shortened)
  "incazzato": { s: 3, c: 4 }, // Pissed off
  "cazzaro": { s: 3, c: 5 }, // Bullshitter / braggart
  "merdaccia": { s: 3, c: 5 }, // Nasty shit
  "puttaniere": { s: 5, c: 4 }, // Whoremonger
  "troione": { s: 5, c: 4 }, // Big whore
  "segaiolo": { s: 3, c: 4 }, // Wanker
  "rompicoglioni": { s: 3, c: 4 }, // Ball-breaker (vulgar)
  "testa di minchia": { s: 4, c: 4 }, // Dickhead (Sicilian)

  // Additional Italian profanity & bestemmie
  "bestia di dio": { s: 3, c: 4 }, // God's beast (blasphemy)
  "cristo cane": { s: 3, c: 4 }, // Christ dog (blasphemy)
  "dio boia": { s: 3, c: 4 }, // God executioner (blasphemy)
  "dio cristo": { s: 3, c: 4 }, // God Christ (blasphemy)
  "dio ladro": { s: 3, c: 4 }, // God thief (blasphemy)
  "dio maiale": { s: 3, c: 4 }, // God pig (blasphemy)
  "dio merda": { s: 3, c: 5 }, // God shit (blasphemy)
  "madonna maiala": { s: 3, c: 4 }, // Madonna pig (blasphemy)
  "madonna troia": { s: 5, c: 4 }, // Madonna whore (blasphemy)
  "porco dio": { s: 3, c: 4 }, // Already listed variant
  "porco gesù": { s: 3, c: 4 }, // Pig Jesus (blasphemy)
  "porca eva": { s: 3, c: 4 }, // Pig Eve (blasphemy)
  "ostia": { s: 4, c: 5 }, // Host (blasphemy)
  "cazzetto": { s: 4, c: 4 }, // Small dick
  "cazzi tuoi": { s: 3, c: 4 }, // Your own business (vulgar)
  "col cazzo": { s: 4, c: 4 }, // No way (lit. with the dick)
  "cornuta": { s: 3, c: 4 }, // Fem cuckold
  "culone": { s: 3, c: 4 }, // Big ass
  "figa di legno": { s: 4, c: 4 }, // Wooden pussy (frigid)
  "figlio di mignotta": { s: 5, c: 5 }, // Son of a whore
  "fottiti": { s: 3, c: 5 }, // Fuck yourself
  "fottuto": { s: 3, c: 5 }, // Fucked
  "incazzato nero": { s: 3, c: 4 }, // Extremely pissed off
  "leccami": { s: 3, c: 4 }, // Lick me
  "madonnina": { s: 3, c: 4 }, // Little madonna (blasphemy)
  "merda secca": { s: 3, c: 5 }, // Dried shit
  "mortacci tua": { s: 3, c: 4 }, // Your dead relatives (Roman, very offensive)
  "mortacci": { s: 3, c: 4 }, // Dead relatives (Roman insult)
  "pezzo di merda": { s: 3, c: 5 }, // Piece of shit
  "porco giuda": { s: 3, c: 4 }, // Pig Judas (blasphemy)
  "rompicazzo": { s: 4, c: 4 }, // Dick breaker
  "scemo del villaggio": { s: 1, c: 4 }, // Village idiot
  "scemo": { s: 1, c: 4 }, // Idiot
  "stronza di merda": { s: 3, c: 5 }, // Shit bitch
  "troia di merda": { s: 5, c: 5 }, // Shit whore
  "vattene affanculo": { s: 3, c: 5 }, // Go fuck yourself
  "zoccola di merda": { s: 3, c: 5 }, // Shit slut

  // More bestemmie (blasphemies)
  "dio santo porco": { s: 3, c: 4 }, // Holy pig God
  "madonna boia": { s: 3, c: 4 }, // Madonna executioner
  "madonna zoccolona": { s: 3, c: 4 }, // Madonna big slut
  "porco il signore": { s: 3, c: 4 }, // Pig the Lord
  "porco l'iddio": { s: 3, c: 4 }, // Pig God (archaic form)
  "dio schifoso": { s: 3, c: 4 }, // Disgusting God
  "dio stronzo": { s: 3, c: 4 }, // God asshole
  "dio bastardo": { s: 3, c: 4 }, // God bastard
  "dio impestato": { s: 3, c: 4 }, // God plague-ridden
  "dio infame": { s: 3, c: 4 }, // God infamous
  "dio lurido": { s: 3, c: 4 }, // God filthy
  "porco madonna": { s: 3, c: 4 }, // Pig Madonna
  "cristo porco": { s: 3, c: 4 }, // Christ pig
  "cristo merda": { s: 3, c: 5 }, // Christ shit
  "gesù cristo cane": { s: 3, c: 4 }, // Jesus Christ dog
  "madonna vacca": { s: 3, c: 4 }, // Madonna cow
  "madonna lurida": { s: 3, c: 4 }, // Madonna filthy
  "madonna schifosa": { s: 3, c: 4 }, // Madonna disgusting
  "porca la madonna": { s: 3, c: 4 }, // Pig the Madonna
  "porca maria": { s: 3, c: 4 }, // Pig Mary
  "porco iddio": { s: 3, c: 4 }, // Pig God (variant)
  "porco giuda ladro": { s: 3, c: 4 }, // Pig Judas thief
  "madonna serpente": { s: 3, c: 4 }, // Madonna snake
  "dio merdone": { s: 3, c: 5 }, // God big shit
  "dio fetente": { s: 3, c: 4 }, // God stinking
  "dio cagna": { s: 3, c: 4 }, // God bitch

  // More compound insults
  "faccia di cazzo": { s: 4, c: 4 }, // Dick face
  "faccia di culo": { s: 3, c: 4 }, // Ass face
  "faccia di merda": { s: 3, c: 5 }, // Shit face
  "pezzo di stronzo": { s: 1, c: 4 }, // Piece of turd
  "pezzo di cazzo": { s: 4, c: 4 }, // Piece of dick
  "brutto stronzo": { s: 1, c: 4 }, // Ugly turd
  "brutta stronza": { s: 1, c: 4 }, // Ugly turd (fem)
  "brutto bastardo": { s: 1, c: 4 }, // Ugly bastard
  "brutta troia": { s: 1, c: 4 }, // Ugly whore
  "figlio di nessuno": { s: 1, c: 4 }, // Son of nobody
  "gran bastardo": { s: 3, c: 4 }, // Great bastard
  "gran figlio di puttana": { s: 5, c: 5 }, // Great son of a whore
  "maledetto stronzo": { s: 1, c: 4 }, // Damned turd
  "sacco di merda": { s: 3, c: 5 }, // Bag of shit
  "cane bastardo": { s: 3, c: 4 }, // Bastard dog
  "faccia da culo": { s: 3, c: 4 }, // Ass-looking face
  "testa di merda": { s: 3, c: 5 }, // Shit head

  // More sexual terms
  "chiavica": { s: 1, c: 4 }, // Sewer / ugly person
  "scopamici": { s: 4, c: 4 }, // Friends with benefits
  "trombamici": { s: 4, c: 4 }, // Friends with benefits (variant)
  "inculare": { s: 4, c: 4 }, // To sodomize
  "sodomizzare": { s: 4, c: 4 }, // To sodomize (formal)
  "sodomita": { s: 5, c: 4 }, // Sodomite
  "masturbazione": { s: 4, c: 4 }, // Masturbation
  "masturbarsi": { s: 4, c: 4 }, // To masturbate
  "orgasmo": { s: 4, c: 4 }, // Orgasm
  "pompinara": { s: 4, c: 5 }, // Woman who gives blowjobs
  "puttanata": { s: 5, c: 5 }, // Bullshit / whore-like act
  "puttanella": { s: 5, c: 4 }, // Little whore
  "puttanone": { s: 5, c: 4 }, // Big whore
  "scopone": { s: 4, c: 5 }, // Big fuck
  "trombata": { s: 4, c: 5 }, // Fuck (noun)
  "segone": { s: 4, c: 4 }, // Big wank
  "incularsi": { s: 4, c: 4 }, // To get sodomized
  "farsi una sega": { s: 4, c: 4 }, // To jerk off
  "farsi una pippa": { s: 4, c: 4 }, // To jerk off (variant)
  "squillo": { s: 4, c: 4 }, // Call girl
  "meretricio": { s: 5, c: 4 }, // Prostitution
  "meretrice": { s: 5, c: 4 }, // Prostitute (formal)
  "lenone": { s: 4, c: 4 }, // Pimp (formal)
  "magnaccia": { s: 4, c: 4 }, // Pimp
  "pappone": { s: 4, c: 4 }, // Pimp (colloquial)
  "mignottone": { s: 5, c: 4 }, // Big whore

  // More dialectal / diminutives
  "cazzola": { s: 4, c: 4 }, // Small dick / trowel
  "cazzuccio": { s: 4, c: 4 }, // Tiny dick
  "stronzetto": { s: 3, c: 4 }, // Little turd
  "stronzetta": { s: 3, c: 4 }, // Little turd (fem)
  "troncone": { s: 3, c: 4 }, // Big stump (phallic)
  "coglionazzo": { s: 1, c: 4 }, // Big idiot
  "merdina": { s: 3, c: 5 }, // Little shit
  "merdone": { s: 3, c: 5 }, // Big shit
  "fottutissimo": { s: 3, c: 5 }, // Very much fucked
  "cazzone doppio": { s: 4, c: 4 }, // Double dick (insult)
  "stronzone": { s: 3, c: 4 }, // Big turd
  "cazzaccio": { s: 1, c: 4 }, // Ugly dick
  "merdoso di merda": { s: 3, c: 5 }, // Shitty of shit

  // Neapolitan
  "guappo": { s: 3, c: 4 }, // Thug / bully
  "mammalucco": { s: 1, c: 4 }, // Fool / oaf
  "scassacazzo": { s: 4, c: 4 }, // Dick-breaker / annoying person
  "sfaccimma": { s: 3, c: 4 }, // Sperm (Neapolitan, strong insult)
  "sfaccimm": { s: 3, c: 4 }, // Sperm (variant)
  "cacaglio": { s: 3, c: 4 }, // Stammerer (offensive)
  "fetente": { s: 3, c: 4 }, // Stinking person
  "fetentone": { s: 3, c: 4 }, // Big stinking person
  "vattenne": { s: 3, c: 4 }, // Get out (Neapolitan)
  "zoccola napoletana": { s: 3, c: 4 }, // Neapolitan slut
  "curnutone": { s: 3, c: 4 }, // Big cuckold (Neapolitan)
  "strunz": { s: 3, c: 4 }, // Turd (Neapolitan)
  "puttanesca": { s: 3, c: 4 }, // Whorish (also pasta sauce)
  "chiattona": { s: 1, c: 4 }, // Fat woman (Neapolitan)
  "cafonata": { s: 3, c: 4 }, // Boorish act
  "cafone": { s: 3, c: 4 }, // Boor / peasant (insult)

  // Sicilian
  "bedda matri": { s: 3, c: 4 }, // Oh mother! (Sicilian exclamation)
  "cornuto contento": { s: 3, c: 4 }, // Happy cuckold
  "babbasone": { s: 1, c: 4 }, // Big idiot (Sicilian)
  "babbo": { s: 1, c: 4 }, // Idiot (Tuscan/Sicilian)
  "minchiolina": { s: 4, c: 4 }, // Little dick (Sicilian)
  "mischino": { s: 3, c: 4 }, // Wretched (Sicilian, can be offensive)
  "vastaso": { s: 3, c: 4 }, // Vulgar person (Sicilian)
  "scassamarroni": { s: 3, c: 4 }, // Ball-breaker (Sicilian)
  "cornuto e mazziato": { s: 3, c: 4 }, // Cuckolded and beaten

  // Roman dialect
  "li mortacci": { s: 3, c: 4 }, // Your dead ancestors (Roman)
  "li mortacci tua": { s: 3, c: 4 }, // Your dead ancestors (full)
  "ammazza": { s: 3, c: 4 }, // Damn / wow (Roman)
  "daje": { s: 3, c: 4 }, // Come on (Roman, can be vulgar)
  "burino": { s: 3, c: 4 }, // Peasant / hick (Roman insult)
  "coatto": { s: 3, c: 4 }, // Trashy person (Roman)
  "zozzone": { s: 3, c: 4 }, // Dirty person (Roman)
  "zozzona": { s: 3, c: 4 }, // Dirty person (Roman, fem)
  "caciottaro": { s: 3, c: 4 }, // Cheese-maker (Roman insult)
  "buzzicone": { s: 3, c: 4 }, // Lazy person (Roman)
  "roscio": { s: 3, c: 4 }, // Redhead (Roman, pejorative)

  // More general slang
  "cazzeggiare": { s: 4, c: 4 }, // To dick around
  "coglioneria": { s: 1, c: 4 }, // Foolishness / bullshit
  "merdaio": { s: 3, c: 5 }, // Shit-heap / messy place
  "stronzaggine": { s: 3, c: 4 }, // Turd-like behavior
  "stronzeria": { s: 3, c: 4 }, // Assholery
  "coglionata": { s: 1, c: 4 }, // Stupid thing / bullshit
  "incazzatura": { s: 3, c: 4 }, // State of being pissed off
  "scazzato": { s: 3, c: 4 }, // Annoyed / pissed off
  "scazzare": { s: 3, c: 4 }, // To annoy / piss off
  "smerdare": { s: 3, c: 5 }, // To shit on / to expose
  "sminchiare": { s: 3, c: 4 }, // To break (Sicilian-derived)
  "sminchiato": { s: 3, c: 4 }, // Broken / crazy
  "cagacazzo": { s: 4, c: 4 }, // Annoying dick (vulgar)
  "rompiscatole": { s: 3, c: 4 }, // Box-breaker / annoying person
  "cagacazzi": { s: 4, c: 4 }, // Annoying dicks
  "sbroccare": { s: 3, c: 4 }, // To lose it / freak out
  "sbrocco": { s: 3, c: 4 }, // Freakout
  "incazzatura nera": { s: 3, c: 4 }, // Deep rage
  "cazzimma napoletana": { s: 3, c: 4 }, // Neapolitan nastiness

  // Offensive terms a content filter should catch
  "negro": { s: 4, c: 1 }, // N-word (Italian)
  "negra": { s: 5, c: 4 }, // N-word (fem)
  "polentone": { s: 3, c: 4 }, // Slur for Northern Italians
  "terronaccio": { s: 3, c: 4 }, // Augmentative of terrone
  "terrona": { s: 3, c: 4 }, // Female terrone (slur)
  "marocchino": { s: 3, c: 4 }, // Moroccan (used as slur)
  "extracomunitario": { s: 3, c: 4 }, // Non-EU (used as slur)
  "vu cumprà": { s: 3, c: 4 }, // Offensive term for street vendors
  "zingaro": { s: 3, c: 4 }, // Gypsy (slur)
  "zingara": { s: 3, c: 4 }, // Gypsy (fem, slur)
  "zingaraccio": { s: 3, c: 4 }, // Dirty gypsy (slur)
  "frocetto": { s: 3, c: 4 }, // Little faggot
  "frocione": { s: 3, c: 4 }, // Big faggot
  "ricchione": { s: 3, c: 4 }, // Faggot (Neapolitan variant)
  "busona": { s: 3, c: 4 }, // Lesbian (derogatory)
  "lesbicona": { s: 3, c: 4 }, // Big lesbian (derogatory)
  "ritardato": { s: 3, c: 4 }, // Retard
  "ritardata": { s: 3, c: 4 }, // Retard (fem)
  "mongoloide": { s: 3, c: 4 }, // Mongoloid (slur)
  "handicappato": { s: 3, c: 4 }, // Handicapped (used as slur)
  "ciccione": { s: 1, c: 4 }, // Fatso
  "cicciona": { s: 1, c: 4 }, // Fatso (fem)
  "nano": { s: 3, c: 4 }, // Dwarf (insult)
  "nana": { s: 3, c: 4 }, // Dwarf (fem, insult)

  // === EXPANSION: More bestemmie (blasphemies) ===
  "porco mondo": { s: 3, c: 4 }, // Pig world (blasphemy)
  "dio cristo santo": { s: 3, c: 4 }, // God Christ holy (blasphemy)
  "dio madonna": { s: 3, c: 4 }, // God Madonna (blasphemy)
  "dio can": { s: 3, c: 4 }, // God dog (Venetian blasphemy)
  "dio bon": { s: 3, c: 4 }, // God good (Venetian blasphemy/excl)
  "dio santo cane": { s: 3, c: 4 }, // Holy God dog (blasphemy)
  "dio santo porco cane": { s: 3, c: 4 }, // Elaborate blasphemy chain
  "porco il clero": { s: 3, c: 4 }, // Pig the clergy (blasphemy)
  "porco il mondo": { s: 3, c: 4 }, // Pig the world
  "porco satana": { s: 3, c: 4 }, // Pig Satan (blasphemy)
  "dio mio cane": { s: 3, c: 4 }, // My God dog
  "dio serpente": { s: 3, c: 4 }, // God snake (blasphemy)
  "dio animale": { s: 3, c: 4 }, // God animal (blasphemy)
  "dio buono": { s: 2, c: 3 }, // God good (euphemistic blasphemy)
  "dio lercio": { s: 3, c: 4 }, // God filthy (blasphemy)
  "dio maialino": { s: 3, c: 4 }, // God little pig (blasphemy)
  "dio mangiato": { s: 3, c: 4 }, // God eaten (blasphemy)
  "dio impiccato": { s: 3, c: 4 }, // God hanged (blasphemy)
  "dio inchiodato": { s: 3, c: 4 }, // God nailed (blasphemy)
  "dio sbattuto": { s: 3, c: 4 }, // God slammed (blasphemy)
  "madonna cagna": { s: 3, c: 4 }, // Madonna bitch (blasphemy)
  "madonna bestia": { s: 3, c: 4 }, // Madonna beast (blasphemy)
  "madonna impestata": { s: 3, c: 4 }, // Madonna plague-ridden
  "madonna indemoniata": { s: 3, c: 4 }, // Madonna possessed
  "madonna infame": { s: 3, c: 4 }, // Madonna infamous
  "madonna merda": { s: 3, c: 5 }, // Madonna shit
  "madonna mia puttana": { s: 5, c: 4 }, // My Madonna whore
  "madonna porchetta": { s: 3, c: 4 }, // Madonna piglet
  "madonna suina": { s: 3, c: 4 }, // Madonna swine
  "madonna zoccola": { s: 3, c: 4 }, // Madonna slut
  "cristo bastardo": { s: 3, c: 4 }, // Christ bastard
  "cristo boia": { s: 3, c: 4 }, // Christ executioner
  "cristo ladro": { s: 3, c: 4 }, // Christ thief
  "cristo maiale": { s: 3, c: 4 }, // Christ pig
  "gesù cane": { s: 3, c: 4 }, // Jesus dog
  "gesù porco": { s: 3, c: 4 }, // Jesus pig
  "gesù merda": { s: 3, c: 5 }, // Jesus shit
  "porca l'oca": { s: 2, c: 3 }, // Pig the goose (euphemistic)
  "porca paletta": { s: 2, c: 3 }, // Pig palette (euphemistic)
  "porca pupazza": { s: 2, c: 3 }, // Pig puppet (euphemistic)
  "mannaggia la madonna": { s: 3, c: 4 }, // Damn the Madonna
  "mannaggia cristo": { s: 3, c: 4 }, // Damn Christ
  "mannaggia dio": { s: 3, c: 4 }, // Damn God
  "santo iddio porco": { s: 3, c: 4 }, // Holy God pig
  "ostia benedetta": { s: 3, c: 4 }, // Blessed host (blasphemy)
  "ostia puttana": { s: 5, c: 4 }, // Host whore (blasphemy)
  "sacramento": { s: 3, c: 4 }, // Sacrament (blasphemy exclamation)
  "sacramentare": { s: 3, c: 4 }, // To blaspheme

  // === EXPANSION: cazzo derivatives ===
  "cazzatona": { s: 3, c: 5 }, // Big bullshit
  "cazzatella": { s: 3, c: 5 }, // Little bullshit
  "cazzettino": { s: 4, c: 4 }, // Tiny little dick
  "cazzeggio": { s: 4, c: 4 }, // Dicking around (noun)
  "cazzimmare": { s: 3, c: 4 }, // To be nasty (Neapolitan verb)
  "cazzotto": { s: 4, c: 4 }, // Punch (lit. dick-hit)
  "cazzottata": { s: 3, c: 4 }, // Fistfight
  "cazzutissimo": { s: 4, c: 4 }, // Very ballsy (superlative)
  "cazzuto": { s: 4, c: 4 }, // Ballsy / tough
  "scazzottata": { s: 3, c: 4 }, // Brawl
  "scazzottare": { s: 3, c: 4 }, // To brawl
  "incazzarsi nero": { s: 3, c: 4 }, // To get furiously pissed
  "incazzatissimo": { s: 3, c: 4 }, // Extremely pissed off
  "incazzoso": { s: 3, c: 4 }, // Easily angered
  "cazzo duro": { s: 4, c: 4 }, // Hard dick
  "cazzo molle": { s: 4, c: 4 }, // Soft dick / wimp
  "testa di cazzo pelato": { s: 4, c: 4 }, // Bald dickhead
  "cazzi amari": { s: 4, c: 5 }, // Bitter dicks / tough shit
  "cazzata colossale": { s: 3, c: 5 }, // Colossal bullshit
  "cazzimma a palate": { s: 3, c: 4 }, // Nastiness by the shovelful
  "che cazzo vuoi": { s: 3, c: 5 }, // What the fuck do you want
  "non me ne frega un cazzo": { s: 3, c: 5 }, // I don't give a fuck
  "fatti i cazzi tuoi": { s: 3, c: 5 }, // Mind your own fucking business
  "un cazzo": { s: 4, c: 4 }, // Nothing / no way (lit. a dick)
  "mannagg al cazzo": { s: 4, c: 4 }, // Damn the dick (Neapolitan)

  // === EXPANSION: merda derivatives ===
  "merdacciolo": { s: 3, c: 5 }, // Little shit
  "merdaio grande": { s: 3, c: 5 }, // Big shit-heap
  "merdazza": { s: 1, c: 4 }, // Ugly shit
  "merdella": { s: 3, c: 5 }, // Little shit (Neapolitan)
  "merdosissimo": { s: 3, c: 5 }, // Extremely shitty
  "merdissima": { s: 3, c: 5 }, // Ultimate shit
  "immerdare": { s: 3, c: 5 }, // To cover in shit
  "smerdamento": { s: 3, c: 5 }, // Shitting on / exposing
  "smerdato": { s: 3, c: 4 }, // Exposed / shamed
  "ammerdare": { s: 3, c: 5 }, // To shit up
  "mangia merda": { s: 3, c: 5 }, // Eat shit
  "merda calda": { s: 3, c: 5 }, // Hot shit
  "merda di cane": { s: 3, c: 5 }, // Dog shit
  "merda fumante": { s: 3, c: 5 }, // Steaming shit
  "nella merda": { s: 3, c: 5 }, // In the shit
  "di merda": { s: 3, c: 5 }, // Of shit / shitty

  // === EXPANSION: stronzo derivatives ===
  "stronzissimo": { s: 3, c: 4 }, // Ultimate asshole
  "stronzate a raffica": { s: 3, c: 5 }, // Rapid-fire bullshit
  "stronzo di prima categoria": { s: 3, c: 4 }, // First-class asshole
  "stronzino": { s: 3, c: 4 }, // Little turd (diminutive)
  "stronzacchione": { s: 1, c: 4 }, // Big idiotic turd
  "stronzata pazzesca": { s: 3, c: 5 }, // Crazy bullshit
  "stronza pazza": { s: 3, c: 4 }, // Crazy bitch

  // === EXPANSION: Neapolitan profanity ===
  "chillo strunz": { s: 3, c: 4 }, // That turd (Neapolitan)
  "capa di cazzo": { s: 4, c: 4 }, // Dickhead (Neapolitan)
  "sfaccimma e mammeta": { s: 3, c: 4 }, // Your mother's cum (Neapolitan)
  "o cazz ro viecchio": { s: 4, c: 4 }, // The old man's dick (Neapolitan)
  "puozz sculà": { s: 3, c: 4 }, // May you drip (Neapolitan curse)
  "puozze morì": { s: 5, c: 5 }, // May you die (Neapolitan curse)
  "fesso": { s: 1, c: 4 }, // Idiot / pussy (Neapolitan)
  "fessa": { s: 1, c: 4 }, // Idiot / pussy (Neapolitan, fem)
  "fessacchiotto": { s: 1, c: 4 }, // Big fool (Neapolitan)
  "scimuniato": { s: 1, c: 4 }, // Dumb (Neapolitan)
  "scemunito": { s: 3, c: 4 }, // Dimwit (Neapolitan variant)
  "appicceco": { s: 3, c: 4 }, // Sticky / annoying (Neapolitan)
  "cazzariello": { s: 1, c: 4 }, // Little dick / fool (Neapolitan)
  "chiattillo": { s: 1, c: 4 }, // Little fatty (Neapolitan)
  "ciuccio": { s: 1, c: 4 }, // Donkey / idiot (Neapolitan)
  "curnuto": { s: 3, c: 4 }, // Cuckold (Neapolitan)
  "jettatore": { s: 3, c: 4 }, // Jinx-bringer (Neapolitan, offensive)
  "pucchiacca": { s: 4, c: 4 }, // Pussy (Neapolitan)
  "purpo": { s: 3, c: 4 }, // Octopus / groper (Neapolitan insult)
  "scorfano": { s: 1, c: 4 }, // Scorpionfish / ugly person
  "tamarro": { s: 3, c: 4 }, // Trashy person (Southern)
  "tamarra": { s: 3, c: 4 }, // Trashy woman (Southern)
  "vaiassa": { s: 3, c: 4 }, // Vulgar woman (Neapolitan)
  "vrenzola": { s: 3, c: 4 }, // Dirty woman (Neapolitan)
  "mappina": { s: 3, c: 4 }, // Rag / useless person (Neapolitan)
  "capa e' pezza": { s: 1, c: 4 }, // Cloth-head / idiot (Neapolitan)
  "sfaccimma int' a vocca": { s: 3, c: 4 }, // Cum in the mouth (Neapolitan)
  "piezzo e merda": { s: 3, c: 5 }, // Piece of shit (Neapolitan)

  // === EXPANSION: Sicilian profanity ===
  "babbu": { s: 1, c: 4 }, // Idiot (Sicilian)
  "babbasunazzu": { s: 1, c: 4 }, // Enormous idiot (Sicilian)
  "buttana": { s: 5, c: 4 }, // Whore (Sicilian)
  "buttana di to ma": { s: 5, c: 4 }, // Your mother's a whore (Sicilian)
  "buttanazzu": { s: 5, c: 4 }, // Big whore (Sicilian)
  "caddozzu": { s: 4, c: 4 }, // Dickish (Sicilian)
  "calaculu": { s: 1, c: 4 }, // Coward (Sicilian, lit. drop-ass)
  "camurrista": { s: 3, c: 4 }, // Annoying person (Sicilian)
  "chiavaturi": { s: 3, c: 5 }, // Fucker (Sicilian)
  "cornuto fetente": { s: 3, c: 4 }, // Stinking cuckold (Sicilian)
  "curnuto e scannatu": { s: 3, c: 4 }, // Cuckolded and slaughtered (Sicilian)
  "minchia di merda": { s: 4, c: 5 }, // Shit dick (Sicilian)
  "minchiata": { s: 3, c: 5 }, // Bullshit (Sicilian)
  "minnulinu": { s: 4, c: 4 }, // Small-dicked (Sicilian)
  "sticchiu puzzolente": { s: 4, c: 4 }, // Stinking pussy (Sicilian)
  "vastasata": { s: 3, c: 4 }, // Vulgar act (Sicilian)
  "figghiu di buttana": { s: 5, c: 5 }, // Son of a whore (Sicilian)
  "ammazzatillu": { s: 3, c: 4 }, // Kill that one (Sicilian)
  "futtitinni": { s: 3, c: 5 }, // Fuck off / don't care (Sicilian)
  "camurria": { s: 3, c: 4 }, // Nuisance / annoying thing (Sicilian)
  "jancu": { s: 1, c: 4 }, // Stupid (Sicilian)

  // === EXPANSION: Venetian profanity ===
  "monada": { s: 1, c: 4 }, // Foolishness / cute thing (Venetian)
  "mona de to mare": { s: 4, c: 4 }, // Your mother's pussy (Venetian)
  "mona de un can": { s: 4, c: 4 }, // Pussy of a dog (Venetian)
  "sboro": { s: 3, c: 4 }, // Cum / exclamation (Venetian)
  "sborón": { s: 3, c: 4 }, // Big ejaculator (Venetian)
  "andemo in mona": { s: 3, c: 4 }, // Let's go to hell (Venetian)
  "va in mona": { s: 3, c: 4 }, // Go to hell (Venetian)
  "va in mona de to mare": { s: 4, c: 4 }, // Go to your mother's pussy (Venetian)
  "ciapa": { s: 3, c: 4 }, // Take this / catch (Venetian vulgar)
  "desgrasiato": { s: 3, c: 4 }, // Wretched (Venetian)
  "cogión": { s: 1, c: 4 }, // Idiot (Venetian from coglione)
  "bòcia": { s: 1, c: 4 }, // Kid / fool (Venetian)
  "toso de merda": { s: 3, c: 5 }, // Shit kid (Venetian)
  "porco bòia": { s: 3, c: 4 }, // Pig executioner (Venetian blasphemy)
  "ostrega": { s: 3, c: 4 }, // Oyster / damn (Venetian exclamation)
  "sacramegnon": { s: 3, c: 4 }, // Sacrament (Venetian blasphemy)
  "can de dio": { s: 3, c: 4 }, // Dog of God (Venetian blasphemy)
  "porco can": { s: 3, c: 4 }, // Pig dog (Venetian blasphemy)

  // === EXPANSION: Tuscan/Florentine profanity ===
  "bischero": { s: 1, c: 4 }, // Idiot / dick (Florentine)
  "bischera": { s: 1, c: 4 }, // Idiot (Florentine, fem)
  "bischerata": { s: 1, c: 4 }, // Stupid thing (Florentine)
  "bischerone": { s: 1, c: 4 }, // Big idiot (Florentine)
  "grullo": { s: 1, c: 4 }, // Stupid (Florentine)
  "grulla": { s: 1, c: 4 }, // Stupid (Florentine, fem)
  "grullone": { s: 1, c: 4 }, // Big stupid (Florentine)
  "coglioncel": { s: 1, c: 4 }, // Little idiot (Tuscan archaic)
  "minchionare": { s: 3, c: 4 }, // To make fun of (Tuscan)
  "minchionatura": { s: 3, c: 4 }, // Mockery (Tuscan)
  "bucaiola": { s: 3, c: 4 }, // Gay woman (derogatory, Tuscan)

  // === EXPANSION: Sardinian profanity ===
  "arriga": { s: 3, c: 4 }, // Annoying (Sardinian)
  "malasorte": { s: 3, c: 4 }, // Bad luck / cursed (Sardinian)
  "connoscentzia": { s: 3, c: 4 }, // Derogatory for know-it-all (Sardinian)
  "fottidu": { s: 3, c: 5 }, // Fucked (Sardinian)
  "porcheddu": { s: 3, c: 4 }, // Little pig (Sardinian insult)
  "porcanu": { s: 3, c: 4 }, // Pig-like (Sardinian)
  "maccu": { s: 1, c: 4 }, // Fool (Sardinian)
  "asinu": { s: 1, c: 4 }, // Donkey / fool (Sardinian)
  "molente": { s: 1, c: 4 }, // Donkey / idiot (Sardinian)
  "fegu": { s: 1, c: 4 }, // Liver / coward (Sardinian)

  // === EXPANSION: Roman/Romanesco profanity ===
  "ammazzete": { s: 3, c: 4 }, // Damn / wow (Roman)
  "ammazza che": { s: 3, c: 4 }, // Damn what (Roman exclamation)
  "fijo de mignotta": { s: 5, c: 5 }, // Son of a whore (Roman)
  "fijo de na mignotta": { s: 5, c: 5 }, // Son of a whore (Roman full)
  "sorca de tu madre": { s: 4, c: 4 }, // Your mother's pussy (Roman)
  "corvaccio": { s: 1, c: 4 }, // Ugly crow / bad omen (Roman)
  "straccione": { s: 3, c: 4 }, // Raggedy / bum (Roman)
  "stracciona": { s: 3, c: 4 }, // Raggedy woman (Roman)
  "pezzente": { s: 1, c: 4 }, // Beggar / loser (Roman/Southern)
  "poveraccio": { s: 3, c: 4 }, // Wretch / poor bastard
  "caciara": { s: 3, c: 4 }, // Mess / racket (Roman)
  "monnezza": { s: 3, c: 4 }, // Garbage (Roman)
  "monnezzaro": { s: 3, c: 4 }, // Garbage dump / garbage person (Roman)
  "roscetta": { s: 3, c: 4 }, // Little redhead (Roman, pejorative fem)
  "chiodo": { s: 1, c: 4 }, // Nail / ugly person (Roman)
  "buzzurro": { s: 3, c: 4 }, // Barbarian / rude person (Roman)
  "pizzardone": { s: 3, c: 4 }, // Traffic cop (Roman, derogatory)
  "er cazzo": { s: 4, c: 4 }, // The dick (Roman)
  "va a morì ammazzato": { s: 5, c: 5 }, // Go die killed (Roman curse)
  "va a morì accoppato": { s: 5, c: 5 }, // Go die murdered (Roman curse)
  "ma vatte a fa benedì": { s: 2, c: 3 }, // Go get blessed (Roman euphemism)
  "daje ar cazzo": { s: 4, c: 4 }, // Come on with the dick (Roman)

  // === EXPANSION: More sexual terms ===
  "ammucchiarsi": { s: 4, c: 4 }, // To pile up / orgy
  "bondage": { s: 3, c: 4 }, // Bondage
  "sadomaso": { s: 3, c: 4 }, // S&M
  "dominatrice": { s: 4, c: 4 }, // Dominatrix
  "feticista": { s: 4, c: 4 }, // Fetishist
  "voyeurismo": { s: 4, c: 4 }, // Voyeurism
  "esibizionista": { s: 4, c: 4 }, // Exhibitionist
  "molestare": { s: 4, c: 4 }, // To molest
  "stupro": { s: 5, c: 5 }, // Rape
  "stuprare": { s: 5, c: 5 }, // To rape
  "stupratore": { s: 5, c: 5 }, // Rapist
  "pedofilo": { s: 5, c: 5 }, // Pedophile
  "pedofilia": { s: 5, c: 5 }, // Pedophilia
  "incestuoso": { s: 5, c: 5 }, // Incestuous
  "incesto": { s: 5, c: 5 }, // Incest
  "necrofilia": { s: 4, c: 4 }, // Necrophilia
  "zoofilia": { s: 4, c: 4 }, // Zoophilia
  "coprofagia": { s: 4, c: 4 }, // Coprophagia
  "coprofilia": { s: 4, c: 4 }, // Coprophilia
  "porno": { s: 3, c: 4 }, // Porn
  "pornazzo": { s: 4, c: 4 }, // Bad porn / sleazy porn
  "pornografico": { s: 4, c: 4 }, // Pornographic
  "maniaco sessuale": { s: 4, c: 4 }, // Sexual maniac
  "depravato": { s: 4, c: 4 }, // Depraved
  "depravata": { s: 4, c: 4 }, // Depraved (fem)
  "pervertito": { s: 4, c: 4 }, // Pervert
  "pervertita": { s: 4, c: 4 }, // Pervert (fem)
  "satiro": { s: 4, c: 4 }, // Satyr / lecher
  "ninfomane": { s: 4, c: 4 }, // Nymphomaniac
  "trombata epica": { s: 4, c: 5 }, // Epic fuck
  "chiavata leggendaria": { s: 4, c: 5 }, // Legendary fuck
  "ammucchiata selvaggia": { s: 4, c: 4 }, // Wild orgy
  "orgia": { s: 4, c: 4 }, // Orgy
  "sesso anale": { s: 4, c: 4 }, // Anal sex
  "sesso orale": { s: 4, c: 5 }, // Oral sex
  "gangbang": { s: 3, c: 5 }, // Gangbang
  "doppia penetrazione": { s: 4, c: 4 }, // Double penetration
  "fellatio": { s: 4, c: 3 }, // Fellatio
  "cunnilingus": { s: 4, c: 3 }, // Cunnilingus
  "anilingus": { s: 4, c: 5 }, // Anilingus
  "eiaculazione": { s: 4, c: 4 }, // Ejaculation
  "eiaculare": { s: 4, c: 4 }, // To ejaculate
  "eiaculazione facciale": { s: 4, c: 4 }, // Facial ejaculation
  "venire": { s: 4, c: 4 }, // To cum (lit. to come)
  "godere": { s: 4, c: 4 }, // To enjoy / to orgasm
  "sborrarsi": { s: 4, c: 4 }, // To cum (reflexive)
  "incularti": { s: 4, c: 4 }, // To sodomize you

  // === EXPANSION: Body part vulgarities ===
  "tettona": { s: 4, c: 3 }, // Big-titted woman
  "tettone": { s: 4, c: 3 }, // Big tits
  "chiappe": { s: 4, c: 3 }, // Butt cheeks
  "natica": { s: 4, c: 3 }, // Buttock
  "natiche": { s: 4, c: 3 }, // Buttocks
  "culetto": { s: 4, c: 3 }, // Little ass
  "culo grosso": { s: 1, c: 4 }, // Fat ass
  "culo flaccido": { s: 4, c: 3 }, // Flabby ass
  "buco del culo": { s: 4, c: 3 }, // Asshole (lit. hole of ass)
  "sfintere": { s: 4, c: 3 }, // Sphincter
  "prepuzio": { s: 4, c: 3 }, // Foreskin
  "glande": { s: 4, c: 4 }, // Glans
  "scroto": { s: 4, c: 3 }, // Scrotum
  "clitoride": { s: 4, c: 3 }, // Clitoris
  "pube": { s: 4, c: 3 }, // Pubis
  "cappella": { s: 3, c: 4 }, // Glans (lit. chapel)
  "cazzata di cappella": { s: 3, c: 5 }, // Glans bullshit

  // === EXPANSION: More homophobic slurs across dialects ===
  "froscetto": { s: 5, c: 4 }, // Little fag (diminutive)
  "culattinone": { s: 5, c: 4 }, // Big gay man (derog augmentative)
  "checchina": { s: 5, c: 4 }, // Effeminate man (derogatory dim)
  "finocchione": { s: 5, c: 4 }, // Big faggot (Tuscan)
  "invertito": { s: 5, c: 4 }, // Inverted / gay (archaic derog)
  "invertita": { s: 5, c: 4 }, // Inverted (fem, archaic derog)
  "bardassa": { s: 5, c: 4 }, // Catamite / passive gay (archaic)
  "leccaculi": { s: 5, c: 4 }, // Ass-licker (plural)
  "frociarolo": { s: 5, c: 4 }, // Faggot-frequenter
  "omosessualaccio": { s: 1, c: 4 }, // Ugly homosexual (augmentative)

  // === EXPANSION: More ethnic slurs ===
  "terroncello": { s: 5, c: 4 }, // Little terrone (diminutive slur)
  "polentaro": { s: 5, c: 4 }, // Polenta-eater (slur variant)
  "merdionale": { s: 5, c: 5 }, // Shit-southerner (compound slur)
  "crucco": { s: 5, c: 4 }, // Slur for Germans
  "crucca": { s: 5, c: 4 }, // Slur for German women
  "muso giallo": { s: 5, c: 4 }, // Yellow face (anti-Asian slur)
  "viso giallo": { s: 5, c: 4 }, // Yellow face (variant)
  "mangia spaghetti": { s: 5, c: 4 }, // Spaghetti-eater (anti-Italian, ironic internal)
  "vu lavà": { s: 5, c: 4 }, // You wash (offensive for immigrants)
  "clandestino": { s: 5, c: 4 }, // Illegal (used as slur)
  "clandestina": { s: 5, c: 4 }, // Illegal (fem, used as slur)
  "marocchina": { s: 5, c: 4 }, // Moroccan (fem, used as slur)
  "albanese di merda": { s: 5, c: 5 }, // Shit Albanian (compound slur)
  "rumeno di merda": { s: 5, c: 5 }, // Shit Romanian (compound slur)
  "sporco negro": { s: 5, c: 4 }, // Dirty black (compound slur)
  "sporca negra": { s: 5, c: 4 }, // Dirty black (fem compound slur)
  "zingarata": { s: 5, c: 4 }, // Gypsy trick (offensive)
  "zingaccia": { s: 5, c: 4 }, // Dirty gypsy (augmentative fem)
  "ebreo di merda": { s: 5, c: 5 }, // Shit Jew (compound slur)

  // === EXPANSION: Internet slang / modern ===
  "minchia bella": { s: 4, c: 3 }, // Beautiful dick (Sicilian excl.)
  "minchia che": { s: 4, c: 3 }, // Dick what (Sicilian excl.)
  "porcoddio": { s: 2, c: 3 }, // PorcoDio variant (no space)
  "dioporco": { s: 2, c: 3 }, // DioPorco variant (reversed)
  "diocane": { s: 2, c: 3 }, // DioCane variant (no space)
  "cazzomerda": { s: 4, c: 5 }, // Dick-shit (compound)
  "merdacane": { s: 3, c: 5 }, // Shit-dog (compound)
  "vaffancazzo": { s: 4, c: 5 }, // Go fuck a dick (variant)
  "vaffammoc": { s: 3, c: 5 }, // Fuck off (Neapolitan internet)
  "vaffammocc": { s: 3, c: 5 }, // Fuck off (Neapolitan variant)
  "fancazzista": { s: 4, c: 3 }, // Lazy person (lit. doing-dicks)
  "fancazzismo": { s: 4, c: 3 }, // Laziness (lit. doing-dicks-ism)
  "scassapalle": { s: 2, c: 3 }, // Ball-breaker
  "scassaminchia": { s: 4, c: 3 }, // Dick-breaker (Sicilian)
  "spacca il cazzo": { s: 4, c: 3 }, // Breaks the dick / annoying
  "che due coglioni": { s: 4, c: 3 }, // What two balls / how annoying
  "che due palle": { s: 4, c: 3 }, // What two balls / how boring
  "che palle": { s: 4, c: 3 }, // What balls / how boring
  "ma che cazzo dici": { s: 3, c: 5 }, // What the fuck are you saying
  "ma vaffanculo va": { s: 3, c: 5 }, // Go fuck off already
  "ma vai a cagare": { s: 3, c: 5 }, // Go take a shit
  "vai a farti fottere": { s: 3, c: 5 }, // Go get yourself fucked
  "vai a cagare": { s: 3, c: 5 }, // Go shit yourself
  "vai a dare via il culo": { s: 3, c: 3 }, // Go give away your ass
  "vai a pisciare": { s: 2, c: 3 }, // Go piss yourself

  // === EXPANSION: More general insults ===
  "cretino": { s: 1, c: 4 }, // Cretin
  "cretina": { s: 1, c: 4 }, // Cretin (fem)
  "deficiente": { s: 5, c: 4 }, // Deficient / idiot
  "scimunito": { s: 1, c: 4 }, // Dimwit
  "scimunita": { s: 1, c: 4 }, // Dimwit (fem)
  "idiota": { s: 1, c: 4 }, // Idiot
  "imbranato": { s: 1, c: 4 }, // Clumsy / incompetent
  "imbranata": { s: 1, c: 4 }, // Clumsy (fem)
  "incapace": { s: 1, c: 4 }, // Incapable
  "buono a nulla": { s: 1, c: 4 }, // Good for nothing
  "buona a nulla": { s: 1, c: 4 }, // Good for nothing (fem)
  "fallito": { s: 1, c: 4 }, // Failure / loser
  "fallita": { s: 1, c: 4 }, // Failure (fem)
  "sfigato": { s: 1, c: 4 }, // Loser / unlucky
  "sfigata": { s: 1, c: 4 }, // Loser (fem)
  "sfiga": { s: 1, c: 4 }, // Bad luck
  "sfiga nera": { s: 1, c: 4 }, // Black bad luck
  "coglione di merda": { s: 1, c: 4 }, // Shit idiot
  "stronzo figlio di puttana": { s: 5, c: 5 }, // Turd son of a whore
  "cagacazzi infernale": { s: 4, c: 4 }, // Infernal dick-annoyer
  "teste di cazzo ambulante": { s: 4, c: 4 }, // Walking dickhead
  "parassite": { s: 1, c: 4 }, // Parasite
  "verme": { s: 2, c: 3 }, // Worm
  "vermiciattolo": { s: 1, c: 4 }, // Little worm
  "schifoso": { s: 1, c: 4 }, // Disgusting
  "schifosa": { s: 1, c: 4 }, // Disgusting (fem)
  "lurido": { s: 1, c: 4 }, // Filthy
  "lurida": { s: 1, c: 4 }, // Filthy (fem)
  "viscido": { s: 1, c: 4 }, // Slimy
  "viscida": { s: 1, c: 4 }, // Slimy (fem)
  "porco schifoso": { s: 1, c: 4 }, // Disgusting pig
  "maiale": { s: 1, c: 4 }, // Pig
  "maiala": { s: 1, c: 4 }, // Pig (fem)
  "maialona": { s: 1, c: 4 }, // Big pig (fem)
  "maialotto": { s: 1, c: 4 }, // Little pig
  "bastardo": { s: 5, c: 4 }, // Bastard
  "bastarda": { s: 3, c: 4 }, // Bastard (fem)
  "bastardone": { s: 3, c: 4 }, // Big bastard
  "miserabile": { s: 1, c: 4 }, // Miserable wretch
  "meschino": { s: 1, c: 4 }, // Petty / wretched
  "infame": { s: 1, c: 4 }, // Infamous / traitor
  "infamone": { s: 1, c: 4 }, // Big traitor
  "infamata": { s: 1, c: 4 }, // Infamous act
  "vigliacco": { s: 1, c: 4 }, // Coward
  "vigliacca": { s: 1, c: 4 }, // Coward (fem)
  "codardo": { s: 1, c: 4 }, // Coward
  "codarda": { s: 1, c: 4 }, // Coward (fem)
  "pusillanime": { s: 1, c: 4 }, // Pusillanimous
  "ratto": { s: 1, c: 4 }, // Rat
  "ratto di fogna": { s: 1, c: 4 }, // Sewer rat
  "scarafaggio": { s: 4, c: 4 }, // Cockroach
  "blatta": { s: 4, c: 4 }, // Cockroach
  "pidocchioso": { s: 1, c: 4 }, // Lousy
  "pidocchiosa": { s: 1, c: 4 }, // Lousy (fem)
  "cagone": { s: 1, c: 4 }, // Coward / shitter
  "cagona": { s: 1, c: 4 }, // Coward (fem)
  "cagasotto": { s: 1, c: 4 }, // Pants-shitter / coward
  "cacasotto": { s: 3, c: 5 }, // Pants-shitter variant
  "merdaiolo": { s: 3, c: 5 }, // Shit-worker

  // === EXPANSION: More bestemmie combinations ===
  "porco dio in croce": { s: 3, c: 4 }, // Pig God on the cross
  "porco dio e la madonna": { s: 3, c: 4 }, // Pig God and the Madonna
  "porco dio santo": { s: 3, c: 4 }, // Pig holy God
  "porco dio ladro": { s: 3, c: 4 }, // Pig God thief
  "porco dio maledetto": { s: 3, c: 4 }, // Pig God cursed
  "porco dio infame": { s: 3, c: 4 }, // Pig God infamous
  "porco dio bastardo": { s: 3, c: 4 }, // Pig God bastard
  "porco dio demonio": { s: 3, c: 4 }, // Pig God demon
  "porco dio stronzo": { s: 3, c: 4 }, // Pig God asshole
  "porco dio merda": { s: 3, c: 5 }, // Pig God shit
  "dio maledetto": { s: 3, c: 4 }, // God cursed
  "dio vigliacco": { s: 1, c: 4 }, // God coward
  "dio farabutto": { s: 3, c: 4 }, // God scoundrel
  "dio verme": { s: 3, c: 4 }, // God worm
  "dio traditore": { s: 3, c: 4 }, // God traitor
  "dio cornuto": { s: 3, c: 4 }, // God cuckold
  "dio zoccolo": { s: 3, c: 4 }, // God clog/slut
  "dio puttaniere": { s: 5, c: 4 }, // God whoremonger
  "dio crepa": { s: 3, c: 4 }, // God drop dead
  "dio di merda": { s: 3, c: 5 }, // God of shit
  "cristo di merda": { s: 3, c: 5 }, // Christ of shit
  "cristo infame": { s: 3, c: 4 }, // Christ infamous
  "cristo cornuto": { s: 3, c: 4 }, // Christ cuckold
  "cristo maledetto": { s: 3, c: 4 }, // Christ cursed
  "cristo traditore": { s: 3, c: 4 }, // Christ traitor
  "cristo vigliacco": { s: 1, c: 4 }, // Christ coward
  "gesù bastardo": { s: 3, c: 4 }, // Jesus bastard
  "gesù di merda": { s: 3, c: 5 }, // Jesus of shit
  "gesù maledetto": { s: 3, c: 4 }, // Jesus cursed
  "madonna di merda": { s: 3, c: 5 }, // Madonna of shit
  "madonna maledetta": { s: 3, c: 4 }, // Madonna cursed
  "madonna bastarda": { s: 3, c: 4 }, // Madonna bastard (fem)
  "madonna cornuta": { s: 3, c: 4 }, // Madonna cuckold (fem)
  "madonna ladra": { s: 3, c: 4 }, // Madonna thief (fem)
  "madonna sporca": { s: 3, c: 4 }, // Madonna dirty
  "madonna fottuta": { s: 3, c: 5 }, // Madonna fucked
  "madonna stronza": { s: 3, c: 4 }, // Madonna bitch
  "porca madonna ladra": { s: 3, c: 4 }, // Pig Madonna thief
  "porca madonna zoccola": { s: 3, c: 4 }, // Pig Madonna slut
  "porca madonna maiala": { s: 3, c: 4 }, // Pig Madonna pig
  "santo cazzo": { s: 4, c: 4 }, // Holy dick
  "santo culo": { s: 3, c: 4 }, // Holy ass
  "porco il papa": { s: 3, c: 4 }, // Pig the Pope
  "porco il vaticano": { s: 3, c: 4 }, // Pig the Vatican
  "mannaggia a dio": { s: 3, c: 4 }, // Damn God (Southern)
  "mannaggia alla madonna": { s: 3, c: 4 }, // Damn the Madonna
  "mannaggia a cristo": { s: 3, c: 4 }, // Damn Christ
  "mannaggia ai santi": { s: 3, c: 4 }, // Damn the saints
  "mannaggia all'ostia": { s: 3, c: 4 }, // Damn the host
  "madonna bubbolona": { s: 2, c: 3 }, // Madonna bubble (euphemistic)
  "dio bono": { s: 2, c: 3 }, // God good (Tuscan euphemistic)
  "dio birillo": { s: 2, c: 3 }, // God pin (euphemistic)
  "ostia maledetta": { s: 3, c: 4 }, // Cursed host
  "sacramento del cazzo": { s: 4, c: 4 }, // Sacrament of the dick
  "santiddio porco": { s: 3, c: 4 }, // Holy God pig
  "dio merdoso": { s: 3, c: 5 }, // God shitty
  "dio coglione": { s: 1, c: 4 }, // God idiot
  "madonna cogliona": { s: 1, c: 4 }, // Madonna idiot (fem)
  "porco giuda bastardo": { s: 3, c: 4 }, // Pig Judas bastard
  "diavolo porco": { s: 3, c: 4 }, // Pig devil

  // === EXPANSION: Calabrese profanity ===
  "minchia di to patri": { s: 1, c: 4 }, // Your father's dick (Calabrese)
  "cornuto di merda": { s: 3, c: 5 }, // Shit cuckold (Calabrese)
  "cazzo e mammata": { s: 4, c: 4 }, // Your mom's dick (Calabrese)
  "porca di to ma": { s: 3, c: 4 }, // Your mother's a pig (Calabrese)
  "scimunitu": { s: 1, c: 4 }, // Idiot (Calabrese)
  "zoccola schifosa": { s: 3, c: 4 }, // Disgusting slut (Calabrese)
  "guappu": { s: 3, c: 4 }, // Thug (Calabrese variant)
  "sdirruto": { s: 3, c: 4 }, // Skinny/wretched (Calabrese)
  "cafonaccio": { s: 3, c: 4 }, // Big boor (Calabrese)
  "scassacazzi": { s: 4, c: 4 }, // Dick-breaker (Calabrese)
  "fracicu": { s: 3, c: 4 }, // Rotten (Calabrese)
  "piattola": { s: 3, c: 4 }, // Crab louse / annoying person (Calabrese)
  "chiattona schifosa": { s: 1, c: 4 }, // Disgusting fat woman (Calabrese)
  "mbriacone": { s: 1, c: 3 }, // Big drunk (Calabrese)
  "cornuto maledetto": { s: 3, c: 4 }, // Cursed cuckold (Calabrese)
  "faccia di stronzo": { s: 3, c: 4 }, // Turd face (Southern)

  // === EXPANSION: Pugliese profanity ===
  "cazzone di merda": { s: 4, c: 5 }, // Shit big dick (Pugliese)
  "strunz fetent": { s: 3, c: 4 }, // Stinking turd (Pugliese)
  "fessa come na scarpa": { s: 1, c: 4 }, // Dumb as a shoe (Pugliese)
  "capa di cazz": { s: 4, c: 4 }, // Dickhead (Pugliese)
  "puttanun": { s: 5, c: 4 }, // Big whore (Pugliese)
  "curnut": { s: 3, c: 4 }, // Cuckold (Pugliese)
  "cazzimmuso": { s: 3, c: 4 }, // Nasty-faced (Pugliese/Neapolitan)
  "sfaccimm a mammeta": { s: 3, c: 4 }, // Your mother's cum (Pugliese)
  "lurdacchione": { s: 3, c: 4 }, // Very dirty person (Pugliese)

  // === EXPANSION: Emiliano-Romagnolo profanity ===
  "ciulare": { s: 3, c: 5 }, // To fuck (Emiliano)
  "ciulata": { s: 3, c: 5 }, // A fuck (Emiliano)
  "pirla del cazzo": { s: 4, c: 4 }, // Dick pirla (compound)
  "burdel": { s: 3, c: 4 }, // Mess / brothel (Emiliano)
  "putana": { s: 5, c: 4 }, // Whore (Emiliano variant)
  "s-ciapa": { s: 4, c: 4 }, // Slap / pussy (Emiliano)
  "s-ciapona": { s: 4, c: 4 }, // Big pussy / slut (Emiliano)
  "incasinato": { s: 3, c: 5 }, // In a mess / fucked up
  "incasinata": { s: 3, c: 5 }, // In a mess / fucked up (fem)

  // === EXPANSION: Lombard profanity ===
  "pirla di merda": { s: 1, c: 4 }, // Shit idiot (Lombard)
  "pirlata": { s: 1, c: 4 }, // Stupid thing (Lombard)
  "pirlone": { s: 1, c: 4 }, // Big idiot (Lombard)
  "ciula": { s: 1, c: 4 }, // Idiot / ass (Lombard)
  "ciulón": { s: 1, c: 4 }, // Big idiot (Lombard)
  "balengone": { s: 1, c: 4 }, // Big idiot (Piemontese/Lombard)
  "balengo": { s: 1, c: 4 }, // Idiot (Piemontese/Lombard)
  "barlafùs": { s: 3, c: 4 }, // Weird / crazy (Lombard)
  "cùi": { s: 3, c: 4 }, // Ass (Lombard dialect)
  "fiòcca": { s: 4, c: 4 }, // Pussy (Lombard dialect)
  "minga de cazzo": { s: 4, c: 4 }, // Nothing of a dick (Lombard)
  "va a ciapà i ratt": { s: 3, c: 5 }, // Go catch rats (Lombard, fuck off)
  "testa di pirla": { s: 3, c: 4 }, // Pirla head (Lombard)

  // === EXPANSION: Piemontese profanity ===
  "bogia nen": { s: 3, c: 4 }, // Don't move / stubborn (Piemontese)
  "cojone": { s: 1, c: 4 }, // Idiot (Piemontese from coglione)
  "nèn capissi un cazzo": { s: 4, c: 4 }, // Not understanding a dick (Piemontese)
  "fòla": { s: 3, c: 5 }, // Lies / bullshit (Piemontese)
  "ciucca": { s: 1, c: 3 }, // Drunkard (Piemontese fem)
  "ciuccone": { s: 1, c: 3 }, // Big drunkard (Piemontese)
  "fabiòcc": { s: 1, c: 4 }, // Idiot (Piemontese)
  "babeo": { s: 1, c: 4 }, // Idiot (Piemontese)

  // === EXPANSION: Ligurian profanity ===
  "belinata": { s: 1, c: 4 }, // Stupid thing (Ligurian)
  "belinone": { s: 1, c: 4 }, // Big dick / big idiot (Ligurian)
  "belino de merda": { s: 4, c: 5 }, // Shit dick (Ligurian)
  "scialla": { s: 3, c: 4 }, // Relaxed / don't care (Ligurian/slang)
  "figlio di belinone": { s: 4, c: 4 }, // Son of a big dick (Ligurian)
  "facciadaculo": { s: 3, c: 4 }, // Ass-face (Ligurian compound)
  "brutto belinone": { s: 1, c: 4 }, // Ugly big dick (Ligurian)

  // === EXPANSION: Friulian profanity ===
  "cjoc": { s: 1, c: 3 }, // Drunk (Friulian)
  "scjassecoglions": { s: 3, c: 4 }, // Ball-breaker (Friulian)
  "madone purcje": { s: 3, c: 4 }, // Pig Madonna (Friulian blasphemy)
  "diu cjan": { s: 3, c: 4 }, // God dog (Friulian blasphemy)
  "diu purcit": { s: 3, c: 4 }, // God piglet (Friulian blasphemy)
  "mone": { s: 1, c: 4 }, // Pussy / idiot (Friulian)
  "purcje": { s: 3, c: 4 }, // Pig (Friulian insult)

  // === EXPANSION: More minchia derivatives ===
  "minchiarola": { s: 1, c: 4 }, // Foolish (Sicilian)
  "minchiatona": { s: 3, c: 5 }, // Big bullshit (Sicilian)
  "minchiata colossale": { s: 3, c: 5 }, // Colossal bullshit (Sicilian)
  "minchia di cartone": { s: 4, c: 4 }, // Cardboard dick (Sicilian insult)
  "ammhinca": { s: 2, c: 3 }, // Damn (minchia euphemism)
  "santa minchia": { s: 4, c: 4 }, // Holy dick (Sicilian excl.)
  "per la minchia": { s: 4, c: 4 }, // By the dick (Sicilian)
  "staminchia": { s: 4, c: 4 }, // This dick (Sicilian contraction)
  "sticchio di to ma": { s: 4, c: 4 }, // Your mother's pussy (Sicilian)
  "figlio di minchia": { s: 4, c: 4 }, // Son of a dick (Sicilian)

  // === EXPANSION: More compound phrases ===
  "va a fanculo": { s: 3, c: 5 }, // Go fuck yourself (variant)
  "va' a farti fottere": { s: 3, c: 5 }, // Go get yourself fucked
  "va a fare in culo": { s: 3, c: 5 }, // Go get it in the ass
  "va in culo a tua madre": { s: 3, c: 5 }, // Go up your mother's ass
  "ma va a cagare va": { s: 3, c: 5 }, // Go take a shit already
  "va a morire": { s: 5, c: 5 }, // Go die
  "va' a morire ammazzato": { s: 5, c: 5 }, // Go die murdered
  "vai a fare in culo": { s: 3, c: 5 }, // Go get it in the ass
  "vai a dar via il culo": { s: 3, c: 5 }, // Already listed variant
  "fottiti stronzo": { s: 3, c: 5 }, // Fuck yourself asshole
  "fottiti troia": { s: 5, c: 5 }, // Fuck yourself whore
  "ficcatelo nel culo": { s: 3, c: 5 }, // Stick it up your ass
  "ficcatelo in culo": { s: 3, c: 5 }, // Stick it in your ass
  "mettitelo nel culo": { s: 3, c: 5 }, // Put it in your ass
  "mettitelo in culo": { s: 3, c: 5 }, // Put it up your ass
  "succhiami il cazzo": { s: 4, c: 5 }, // Suck my dick
  "leccami il culo": { s: 3, c: 5 }, // Lick my ass
  "baciami il culo": { s: 3, c: 5 }, // Kiss my ass
  "vai a puttane": { s: 5, c: 5 }, // Go to whores
  "tua madre è una puttana": { s: 5, c: 5 }, // Your mother is a whore
  "tua madre fa la troia": { s: 5, c: 5 }, // Your mother acts like a whore
  "tuo padre è un cornuto": { s: 1, c: 4 }, // Your father is a cuckold
  "figlio di una cagna": { s: 3, c: 5 }, // Son of a female dog
  "figlio di una vacca": { s: 3, c: 5 }, // Son of a cow
  "figlio di una zoccola": { s: 3, c: 5 }, // Son of a slut
  "rompimi il cazzo": { s: 4, c: 5 }, // Break my dick / annoy me
  "non rompere il cazzo": { s: 4, c: 5 }, // Don't break the dick / stop annoying
  "non rompere i coglioni": { s: 4, c: 5 }, // Don't break the balls
  "non rompere le palle": { s: 4, c: 5 }, // Don't break the balls
  "mi hai rotto il cazzo": { s: 4, c: 5 }, // You broke my dick / annoyed me
  "mi hai rotto i coglioni": { s: 4, c: 5 }, // You broke my balls
  "che figlio di puttana": { s: 5, c: 5 }, // What a son of a whore
  "ma sei scemo": { s: 1, c: 4 }, // But are you stupid
  "ma sei coglione": { s: 1, c: 4 }, // But are you an idiot
  "sei un cazzo di niente": { s: 4, c: 5 }, // You're a dick of nothing
  "sei una merda": { s: 3, c: 5 }, // You're shit
  "sei un pezzo di merda": { s: 3, c: 5 }, // You're a piece of shit
  "sei uno stronzo di merda": { s: 3, c: 5 }, // You're a shit asshole
  "ma che cazzo fai": { s: 3, c: 5 }, // What the fuck are you doing
  "ma che minchia vuoi": { s: 4, c: 5 }, // What the dick do you want (Sicilian)
  "levati dal cazzo": { s: 4, c: 5 }, // Get out of the dick / move
  "levati dai coglioni": { s: 4, c: 5 }, // Get out of the balls / move
  "fuori dalle palle": { s: 4, c: 5 }, // Out of the balls / move
  "togliti dai coglioni": { s: 4, c: 5 }, // Remove yourself from balls / move

  // === EXPANSION: More sexual terms ===
  "sesso di gruppo": { s: 4, c: 4 }, // Group sex
  "ammucchiatona": { s: 4, c: 4 }, // Big orgy
  "orgia sfrenata": { s: 4, c: 4 }, // Unbridled orgy
  "porcheria sessuale": { s: 4, c: 4 }, // Sexual filthiness
  "scoparsi": { s: 4, c: 5 }, // To fuck oneself / each other
  "farsi scopare": { s: 4, c: 5 }, // To get fucked
  "farsi chiavare": { s: 4, c: 5 }, // To get fucked (variant)
  "farsi trombare": { s: 4, c: 5 }, // To get fucked (variant)
  "farsi inculare": { s: 4, c: 4 }, // To get sodomized
  "dare il culo": { s: 4, c: 4 }, // To give ass / be submissive
  "prendere nel culo": { s: 4, c: 4 }, // To take it in the ass
  "prenderlo in culo": { s: 4, c: 4 }, // To take it in the ass (variant)
  "preso per il culo": { s: 4, c: 4 }, // Taken for the ass / mocked
  "culare": { s: 4, c: 4 }, // To sodomize (slang)
  "sverginata": { s: 4, c: 4 }, // Deflowering (noun)
  "spompinata": { s: 4, c: 5 }, // Blowjob (noun)
  "pompino di merda": { s: 4, c: 5 }, // Shit blowjob
  "succhiacazzi": { s: 4, c: 4 }, // Cock-sucker
  "succhiapiselli": { s: 4, c: 4 }, // Pea-sucker (dick-sucker)
  "mangiamerda": { s: 4, c: 5 }, // Shit-eater
  "mangiacazzi": { s: 4, c: 4 }, // Dick-eater
  "leccafiga": { s: 4, c: 4 }, // Pussy-licker
  "ditata": { s: 4, c: 4 }, // Fingering (noun)
  "scopata selvaggia": { s: 4, c: 5 }, // Wild fuck
  "chiavata bestiale": { s: 4, c: 5 }, // Bestial fuck
  "trombata da dio": { s: 4, c: 5 }, // Godly fuck
  "venire come un treno": { s: 4, c: 4 }, // To cum like a train
  "schizzare": { s: 4, c: 4 }, // To squirt
  "schizzata": { s: 4, c: 4 }, // Squirt (noun)
  "sborrata in faccia": { s: 4, c: 4 }, // Cumshot to the face
  "sborrare addosso": { s: 4, c: 4 }, // To cum on someone
  "puttanone di strada": { s: 5, c: 4 }, // Big street whore
  "accompagnatrice": { s: 2, c: 3 }, // Escort (euphemistic)
  "gigolò": { s: 4, c: 4 }, // Gigolo / male escort
  "marchettaro": { s: 5, c: 4 }, // Male prostitute
  "marchetta": { s: 5, c: 4 }, // Trick / prostitution act
  "battere il marciapiede": { s: 5, c: 4 }, // To walk the sidewalk (prostitution)
  "battere": { s: 5, c: 4 }, // To prostitute (slang)
  "battitrice": { s: 5, c: 4 }, // Female who prostitutes
  "donna di strada": { s: 4, c: 4 }, // Street woman
  "donna di malaffare": { s: 4, c: 4 }, // Woman of ill repute

  // === EXPANSION: More homophobic slurs across dialects ===
  "culo rotto": { s: 5, c: 4 }, // Broken ass (homophobic)
  "buco di culo": { s: 5, c: 4 }, // Already listed variant
  "ricchioncello": { s: 5, c: 4 }, // Little faggot (Neapolitan dim)
  "frocione di merda": { s: 5, c: 5 }, // Shit big faggot
  "frocio del cazzo": { s: 5, c: 4 }, // Dick faggot
  "culattone di merda": { s: 5, c: 5 }, // Shit gay man
  "finocchio di merda": { s: 5, c: 5 }, // Shit faggot
  "checchetta": { s: 5, c: 4 }, // Little effeminate man (derog dim)
  "schecquiato": { s: 5, c: 4 }, // Effeminate (derogatory)
  "busone di merda": { s: 5, c: 5 }, // Shit gay man
  "arruso fetente": { s: 5, c: 4 }, // Stinking gay (Sicilian)
  "bucaiolo di merda": { s: 5, c: 5 }, // Shit gay (Tuscan)
  "bardassone": { s: 5, c: 4 }, // Big catamite (archaic)
  "femminiello": { s: 5, c: 4 }, // Effeminate man (Neapolitan, derog)
  "femminuccia": { s: 5, c: 4 }, // Little woman / sissy (derog)
  "donnicciola": { s: 5, c: 4 }, // Little woman / sissy (derog)
  "mezzo uomo": { s: 5, c: 4 }, // Half a man
  "non è uomo": { s: 5, c: 4 }, // Not a man
  "maschiaccio": { s: 5, c: 4 }, // Tomboy (sometimes derogatory)

  // === EXPANSION: More ethnic slurs ===
  "terroni di merda": { s: 5, c: 5 }, // Shit southerners (plural slur)
  "polentoni di merda": { s: 5, c: 5 }, // Shit northerners (plural slur)
  "mangia banane": { s: 5, c: 4 }, // Banana-eater (anti-Black slur)
  "negro di merda": { s: 5, c: 5 }, // Shit n-word
  "negra di merda": { s: 5, c: 5 }, // Shit n-word (fem)
  "sporco zingaro": { s: 5, c: 4 }, // Dirty gypsy
  "sporca zingara": { s: 5, c: 4 }, // Dirty gypsy (fem)
  "zingaro di merda": { s: 5, c: 5 }, // Shit gypsy
  "cinese di merda": { s: 5, c: 5 }, // Shit Chinese
  "muso giallo di merda": { s: 5, c: 5 }, // Shit yellow-face
  "sporco arabo": { s: 5, c: 4 }, // Dirty Arab
  "arabo di merda": { s: 5, c: 5 }, // Shit Arab
  "islamico di merda": { s: 5, c: 5 }, // Shit Islamic
  "musulmano di merda": { s: 5, c: 5 }, // Shit Muslim
  "ebreo sporco": { s: 5, c: 4 }, // Dirty Jew
  "giudeo": { s: 5, c: 4 }, // Jew (derogatory usage)
  "giudeo di merda": { s: 5, c: 5 }, // Shit Jew
  "crucco di merda": { s: 5, c: 5 }, // Shit German
  "albanese": { s: 5, c: 4 }, // Albanian (used as slur)
  "rumeno": { s: 5, c: 4 }, // Romanian (used as slur)
  "romeno di merda": { s: 5, c: 5 }, // Shit Romanian
  "filippino di merda": { s: 5, c: 5 }, // Shit Filipino
  "straniero di merda": { s: 5, c: 5 }, // Shit foreigner
  "fuori dal mio paese": { s: 5, c: 4 }, // Out of my country
  "torna al tuo paese": { s: 5, c: 4 }, // Go back to your country
  "mangiagatti": { s: 5, c: 4 }, // Cat-eater (anti-Chinese slur)
  "mangia cammelli": { s: 5, c: 4 }, // Camel-eater (anti-Arab slur)

  // === EXPANSION: Internet slang and abbreviations ===
  "vfnc": { s: 2, c: 3 }, // Vaffanculo (abbreviation)
  "stocazzo": { s: 4, c: 3 }, // This dick (internet slang)
  "sto cazzo": { s: 4, c: 3 }, // This dick
  "e sti cazzi": { s: 4, c: 3 }, // And these dicks / so what
  "ammazza oh": { s: 2, c: 3 }, // Damn oh (Roman internet)
  "ammazza che stronzo": { s: 3, c: 3 }, // Damn what an asshole
  "minkia": { s: 2, c: 3 }, // Minchia variant spelling
  "madó": { s: 2, c: 3 }, // Madonna shortened
  "maronn": { s: 2, c: 3 }, // Madonna (Neapolitan shortened)
  "maronna": { s: 2, c: 3 }, // Madonna (Neapolitan variant)
  "maronna mia": { s: 2, c: 3 }, // My Madonna (Neapolitan)
  "diofa": { s: 2, c: 3 }, // DioPorco euphemism
  "diosanto": { s: 2, c: 3 }, // God holy (borderline)
  "porkatroia": { s: 2, c: 3 }, // PorcaTroia variant
  "porkodio": { s: 2, c: 3 }, // PorcoDio variant
  "porkamadonna": { s: 2, c: 3 }, // PorcaMadonna variant
  "c4zzo": { s: 2, c: 5 }, // Cazzo evasion
  "c@zzo": { s: 2, c: 5 }, // Cazzo evasion
  "cazz0": { s: 2, c: 5 }, // Cazzo evasion
  "str0nzo": { s: 2, c: 5 }, // Stronzo evasion
  "str0nz0": { s: 2, c: 5 }, // Stronzo evasion
  "m3rda": { s: 3, c: 5 }, // Merda evasion
  "m€rda": { s: 2, c: 5 }, // Merda evasion
  "p0rco": { s: 2, c: 5 }, // Porco evasion
  "putt4na": { s: 2, c: 5 }, // Puttana evasion
  "putt@na": { s: 2, c: 5 }, // Puttana evasion
  "c0glione": { s: 2, c: 5 }, // Coglione evasion
  "f1ga": { s: 2, c: 5 }, // Figa evasion
  "f1ca": { s: 2, c: 5 }, // Fica evasion
  "fr0cio": { s: 2, c: 5 }, // Frocio evasion
  "vaffancul0": { s: 2, c: 5 }, // Vaffanculo evasion
  "cul0": { s: 3, c: 5 }, // Culo evasion
  "tr0ia": { s: 2, c: 5 }, // Troia evasion
  "z0ccola": { s: 2, c: 5 }, // Zoccola evasion
  "minch1a": { s: 2, c: 5 }, // Minchia evasion
  "p1rla": { s: 2, c: 5 }, // Pirla evasion
  "sb0rra": { s: 2, c: 5 }, // Sborra evasion
  "sc0pare": { s: 2, c: 5 }, // Scopare evasion
  "f0ttere": { s: 2, c: 5 }, // Fottere evasion
  "p0mpino": { s: 2, c: 5 }, // Pompino evasion
  "b0cchino": { s: 2, c: 5 }, // Bocchino evasion

  // === EXPANSION: More general insults ===
  "animale": { s: 1, c: 4 }, // Animal (insult)
  "bestia": { s: 1, c: 4 }, // Beast (insult)
  "porco animale": { s: 1, c: 4 }, // Pig animal
  "bestiaccia": { s: 1, c: 4 }, // Ugly beast
  "cane rognoso": { s: 1, c: 4 }, // Mangy dog
  "cagna in calore": { s: 1, c: 4 }, // Bitch in heat
  "vacca grassa": { s: 1, c: 4 }, // Fat cow
  "vacca di merda": { s: 3, c: 5 }, // Shit cow
  "troia schifosa": { s: 5, c: 4 }, // Disgusting whore
  "puttana schifosa": { s: 5, c: 4 }, // Disgusting whore
  "lurido bastardo": { s: 3, c: 4 }, // Filthy bastard
  "lurida stronza": { s: 1, c: 4 }, // Filthy bitch
  "schifoso di merda": { s: 3, c: 5 }, // Disgusting shit
  "viscido verme": { s: 1, c: 4 }, // Slimy worm
  "parassitta": { s: 1, c: 4 }, // Parasite (variant)
  "parassito": { s: 1, c: 4 }, // Parasite (masc)
  "sanguisuga": { s: 1, c: 4 }, // Leech / bloodsucker
  "sciacallo": { s: 1, c: 4 }, // Jackal / scavenger
  "avvoltoio": { s: 1, c: 4 }, // Vulture
  "serpente": { s: 1, c: 4 }, // Snake
  "vipera": { s: 1, c: 4 }, // Viper (fem insult)
  "serpe": { s: 1, c: 4 }, // Snake (variant)
  "topo di fogna": { s: 1, c: 4 }, // Sewer rat
  "scarafone": { s: 4, c: 4 }, // Big cockroach (Southern)
  "zecca": { s: 1, c: 4 }, // Tick / parasite
  "pidocchio": { s: 1, c: 4 }, // Louse
  "malandato": { s: 1, c: 4 }, // Rundown / sickly
  "disgraziato": { s: 1, c: 4 }, // Disgraced / wretch
  "disgraziata": { s: 1, c: 4 }, // Disgraced (fem)
  "svergognato": { s: 1, c: 4 }, // Shameless
  "svergognata": { s: 1, c: 4 }, // Shameless (fem)
  "faccia tosta": { s: 1, c: 4 }, // Brazen face
  "faccia come il culo": { s: 3, c: 4 }, // Face like an ass
  "brutto come la fame": { s: 1, c: 4 }, // Ugly as hunger
  "brutta come la morte": { s: 1, c: 4 }, // Ugly as death
  "brutto cesso": { s: 1, c: 4 }, // Ugly toilet
  "cesso ambulante": { s: 1, c: 4 }, // Walking toilet
  "racchia": { s: 1, c: 3 }, // Ugly woman (slang)
  "racchiona": { s: 1, c: 4 }, // Very ugly woman
  "rospo": { s: 1, c: 4 }, // Toad / ugly person
  "mostro": { s: 1, c: 4 }, // Monster / ugly person
  "obbrobrio": { s: 1, c: 4 }, // Abomination
  "aborto": { s: 1, c: 4 }, // Abortion / ugly person
  "aborto della natura": { s: 1, c: 4 }, // Abortion of nature
  "errore della natura": { s: 1, c: 4 }, // Error of nature
  "scherzo della natura": { s: 1, c: 4 }, // Joke of nature
  "pezzente di merda": { s: 3, c: 5 }, // Shit beggar
  "straccione di merda": { s: 3, c: 5 }, // Shit ragamuffin
  "barbonaccio": { s: 1, c: 4 }, // Big bum / hobo
  "barbone": { s: 1, c: 4 }, // Bum / hobo
  "barbona": { s: 1, c: 4 }, // Bum / hobo (fem)
  "accattone": { s: 1, c: 4 }, // Beggar
  "fannullone": { s: 1, c: 4 }, // Good-for-nothing
  "fannullona": { s: 1, c: 4 }, // Good-for-nothing (fem)
  "lavativo": { s: 1, c: 4 }, // Lazy person
  "lavatrice": { s: 1, c: 3 }, // Washing machine / lazy person (fem slang)
  "scansafatiche": { s: 1, c: 4 }, // Work-dodger
  "perdigiorno": { s: 1, c: 4 }, // Waster of days
  "nullafacente": { s: 1, c: 4 }, // Do-nothing
  "buono a niente": { s: 1, c: 4 }, // Good for nothing
  "buona a niente": { s: 1, c: 4 }, // Good for nothing (fem)
  "capra": { s: 1, c: 4 }, // Goat / stupid person
  "caprone": { s: 1, c: 4 }, // Big goat / stupid man
  "asino": { s: 1, c: 4 }, // Donkey / stupid
  "asina": { s: 1, c: 4 }, // Donkey (fem) / stupid
  "somaro": { s: 1, c: 4 }, // Donkey / stupid person
  "somara": { s: 1, c: 4 }, // Donkey (fem) / stupid
  "babbeo": { s: 1, c: 4 }, // Fool
  "babbea": { s: 1, c: 4 }, // Fool (fem)
  "babbione": { s: 1, c: 4 }, // Big fool
  "tonto": { s: 1, c: 4 }, // Dull / slow
  "tontolone": { s: 1, c: 4 }, // Big dummy
  "sciocco": { s: 1, c: 4 }, // Silly
  "sciocca": { s: 1, c: 4 }, // Silly (fem)
  "scioccone": { s: 1, c: 4 }, // Big silly
  "allocco": { s: 1, c: 4 }, // Owl / dimwit
  "allocchetta": { s: 1, c: 4 }, // Little dimwit (fem)
  "bietolone": { s: 1, c: 4 }, // Big beet / simpleton
  "citrullo": { s: 1, c: 4 }, // Idiot (Southern)
  "citrulla": { s: 1, c: 4 }, // Idiot (fem, Southern)
  "gonzo": { s: 1, c: 4 }, // Simpleton
  "minchiarola di merda": { s: 1, c: 4 }, // Shit fool (Sicilian)
  "cretinata": { s: 1, c: 4 }, // Stupid thing
  "cretinismo": { s: 1, c: 4 }, // Cretinism (as insult)
  "idiozia": { s: 1, c: 4 }, // Idiocy
  "imbecillità": { s: 1, c: 4 }, // Imbecility
  "stupidaggine": { s: 1, c: 4 }, // Stupidity
  "stronzaggine infinita": { s: 3, c: 4 }, // Infinite assholery
  "porcata": { s: 1, c: 4 }, // Dirty trick / piggish act
  "porcheria": { s: 1, c: 4 }, // Filthiness / disgusting thing
  "schifezza": { s: 1, c: 4 }, // Disgusting thing
  "schifo": { s: 1, c: 4 }, // Disgust / disgusting
  "che schifo": { s: 1, c: 4 }, // How disgusting
  "fa schifo": { s: 1, c: 4 }, // It's disgusting
  "mi fai schifo": { s: 1, c: 4 }, // You disgust me
  "fai pietà": { s: 1, c: 4 }, // You're pitiful
  "fai pena": { s: 1, c: 4 }, // You're pitiful
  "faccia di bronzo": { s: 1, c: 4 }, // Bronze face / brazen
  "faccia da schiaffi": { s: 1, c: 4 }, // Slap-worthy face
  "muso duro": { s: 1, c: 4 }, // Hard snout / stubborn
  "testa dura": { s: 1, c: 4 }, // Hard head / stubborn
  "testa vuota": { s: 1, c: 4 }, // Empty head
  "testa di cavolo": { s: 1, c: 4 }, // Cabbage head
  "testa di rapa": { s: 1, c: 4 }, // Turnip head
  "testa di legno": { s: 1, c: 4 }, // Wooden head
  "testaccia": { s: 1, c: 4 }, // Bad/ugly head
  "testardo come un mulo": { s: 1, c: 4 }, // Stubborn as a mule
  "cornuto e contento": { s: 1, c: 4 }, // Cuckold and happy
  "ubriacone": { s: 1, c: 3 }, // Big drunkard
  "ubriacona": { s: 1, c: 3 }, // Big drunkard (fem)
  "sbronzone": { s: 1, c: 3 }, // Big drunk
  "sbronza": { s: 1, c: 3 }, // Drunkard (fem) / drinking spree
  "tossico": { s: 1, c: 4 }, // Toxic / drug addict
  "tossica": { s: 1, c: 4 }, // Toxic (fem) / drug addict
  "drogato": { s: 1, c: 4 }, // Drugged / drug addict
  "drogata": { s: 1, c: 4 }, // Drugged (fem)
  "tossicodipendente": { s: 1, c: 4 }, // Drug dependent
  "fattone": { s: 1, c: 4 }, // Stoner
  "fattona": { s: 1, c: 4 }, // Stoner (fem)
  "fumato": { s: 1, c: 4 }, // Smoked / stoned
  "fumata": { s: 1, c: 4 }, // Smoked (fem) / stoned
  "sballato": { s: 1, c: 4 }, // High / off balance
  "sballata": { s: 1, c: 4 }, // High (fem)

  // === EXPANSION: Sardinian expanded profanity ===
  "cunnu": { s: 5, c: 5 }, // Cunt (Sardinian)
  "cunnedda": { s: 5, c: 5 }, // Little cunt (Sardinian)
  "frigangiu": { s: 1, c: 4 }, // Ugly / disgusting (Sardinian)
  "arza": { s: 5, c: 4 }, // Whore (Sardinian)
  "arratzarisi": { s: 3, c: 4 }, // Horny (Sardinian reflexive)
  "balatru": { s: 3, c: 4 }, // Rude person (Sardinian)
  "bellifregu": { s: 3, c: 4 }, // Beautiful freak (Sardinian ironic)
  "beccu": { s: 3, c: 4 }, // Goat / cuckold (Sardinian)
  "cornutu": { s: 3, c: 4 }, // Cuckold (Sardinian)
  "mammarossa": { s: 3, c: 4 }, // Lazy person (Sardinian)
  "maialittu": { s: 3, c: 4 }, // Cursed (Sardinian)
  "figa de tziu": { s: 4, c: 4 }, // Uncle's pussy (Sardinian)

  // === EXPANSION: More Venetian profanity ===
  "s-ciavo": { s: 3, c: 4 }, // Slave / wretch (Venetian)
  "putanon": { s: 5, c: 4 }, // Big whore (Venetian)
  "recia de cogion": { s: 1, c: 4 }, // Ear of an idiot (Venetian)
  "mona rotta": { s: 4, c: 4 }, // Broken pussy (Venetian)
  "bruto porco": { s: 1, c: 4 }, // Ugly pig (Venetian)
  "dio bòn de un can": { s: 3, c: 4 }, // God good of a dog (Venetian blasphemy)
  "ostia porca": { s: 3, c: 4 }, // Pig host (Venetian blasphemy)
  "sacramento porco": { s: 3, c: 4 }, // Pig sacrament (Venetian blasphemy)
  "casso": { s: 4, c: 4 }, // Dick (Venetian)
  "sboro de can": { s: 3, c: 4 }, // Dog cum (Venetian)
  "toso del casso": { s: 4, c: 4 }, // Dick kid (Venetian)
  "va a far in culo": { s: 3, c: 4 }, // Go get it in the ass (Venetian)
  "fiol de na vaca": { s: 3, c: 4 }, // Son of a cow (Venetian)
  "fiol de putana": { s: 5, c: 5 }, // Son of a whore (Venetian)

  // === EXPANSION: More Tuscan/Florentine profanity ===
  "bischerate": { s: 1, c: 4 }, // Stupid things (Florentine plural)
  "bischero di merda": { s: 1, c: 4 }, // Shit idiot (Florentine)
  "grullo come una zucca": { s: 1, c: 4 }, // Stupid as a pumpkin (Tuscan)
  "una sega": { s: 3, c: 4 }, // Not a damn thing (Tuscan lit. a saw)
  "segaccia": { s: 1, c: 4 }, // Ugly saw / bad wank (Tuscan)
  "bischero del cazzo": { s: 4, c: 4 }, // Dick bischero (Tuscan compound)
  "becero": { s: 3, c: 4 }, // Vulgar / uncouth (Tuscan)
  "becera": { s: 3, c: 4 }, // Vulgar (fem, Tuscan)
  "cialtrone": { s: 3, c: 4 }, // Slob / scoundrel (Tuscan)
  "cialtrona": { s: 3, c: 4 }, // Slob (fem, Tuscan)
  "buzzurra": { s: 3, c: 4 }, // Barbarian (fem, Tuscan/Roman)
  "peracottaio": { s: 3, c: 4 }, // Stewed-pear seller / worthless (Tuscan)

  // === EXPANSION: More compound insults ===
  "figlio di cane": { s: 1, c: 4 }, // Son of a dog
  "figlio di un cane": { s: 1, c: 4 }, // Son of a dog (variant)
  "figlio di zoccola": { s: 1, c: 4 }, // Son of a slut
  "figlio di troia maledetta": { s: 5, c: 4 }, // Son of a cursed whore
  "puttana della madonna": { s: 5, c: 4 }, // Whore of the Madonna
  "coglione della minchia": { s: 4, c: 4 }, // Ball of the dick (Sicilian compound)
  "stronzo del cazzo": { s: 4, c: 4 }, // Dick turd
  "merda della merda": { s: 3, c: 5 }, // Shit of shit
  "pezzo di idiota": { s: 1, c: 4 }, // Piece of idiot
  "pezzo di cretino": { s: 1, c: 4 }, // Piece of cretin
  "pezzo di deficiente": { s: 1, c: 4 }, // Piece of deficient
  "razza di cretini": { s: 1, c: 4 }, // Race of cretins
  "branco di stronzi": { s: 3, c: 4 }, // Pack of assholes
  "branco di coglioni": { s: 1, c: 4 }, // Pack of idiots
  "manica di stronzi": { s: 3, c: 4 }, // Bunch of assholes
  "covo di merde": { s: 3, c: 5 }, // Den of shits
  "fogna di merda": { s: 3, c: 5 }, // Sewer of shit
  "pozzo di merda": { s: 3, c: 5 }, // Well of shit
  "fiume di merda": { s: 3, c: 5 }, // River of shit
  "mare di merda": { s: 3, c: 5 }, // Sea of shit
  "montagna di merda": { s: 3, c: 5 }, // Mountain of shit
  "mondo di merda": { s: 3, c: 5 }, // World of shit
  "vita di merda": { s: 3, c: 5 }, // Life of shit
  "giornata di merda": { s: 3, c: 5 }, // Day of shit
  "lavoro di merda": { s: 3, c: 5 }, // Shit job
  "culo del mondo": { s: 3, c: 4 }, // Ass of the world (middle of nowhere)
  "culo di gallina": { s: 1, c: 4 }, // Chicken ass / coward
  "cagata pazzesca": { s: 1, c: 4 }, // Crazy crap
  "cagata immensa": { s: 1, c: 4 }, // Immense crap
  "figata": { s: 1, c: 4 }, // Cool thing (from figa, can be vulgar)
  "sfigatura": { s: 1, c: 4 }, // Loser-ness / bad luck
  "porca puttana eva": { s: 5, c: 4 }, // Pig whore Eve
  "porca puttana la miseria": { s: 5, c: 4 }, // Pig whore misery
  "zoccola fetida": { s: 1, c: 4 }, // Fetid slut
  "troia fetida": { s: 5, c: 4 }, // Fetid whore
  "puttana fetida": { s: 5, c: 4 }, // Fetid whore
  "faccia di pirla": { s: 1, c: 4 }, // Pirla face (Lombard)
  "faccia di bischero": { s: 1, c: 4 }, // Bischero face (Tuscan)
  "faccia di minchia": { s: 4, c: 4 }, // Dick face (Sicilian)
  "musone": { s: 1, c: 4 }, // Big snout / grumpy person
  "musona": { s: 1, c: 4 }, // Big snout (fem) / grumpy
  "grufolone": { s: 1, c: 4 }, // Big trotter / greedy pig
  "zozzeria": { s: 1, c: 4 }, // Filthiness
  "zozzume": { s: 1, c: 4 }, // Filth
  "sudiciume": { s: 1, c: 4 }, // Filth / grime
  "laidume": { s: 1, c: 4 }, // Ugliness / filth
  "lordura": { s: 1, c: 4 }, // Filth
  "sporcizia": { s: 1, c: 4 }, // Dirtiness
  "porchidio": { s: 1, c: 4 }, // PorcoDio variant (no space)
  "cristoporco": { s: 1, c: 4 }, // CristoPorco variant (no space)
  "madonnacagna": { s: 1, c: 4 }, // MadonnaCagna variant (no space)
  "diobestiacane": { s: 1, c: 4 }, // DioBestiaCane compound
  "diocristo porco": { s: 1, c: 4 }, // God Christ pig compound

  // ========================================
  // === EXPANSION: Exhaustive Bestemmie (Blasphemy) - Dio combinations ===
  // ========================================
  "dio dannato": { s: 3, c: 4 }, // God damned (blasphemy variant)
  "dio vaccaro": { s: 3, c: 4 }, // God cowherd (blasphemy)
  "dio zoppo": { s: 3, c: 4 }, // God lame (blasphemy)
  "dio cieco": { s: 3, c: 4 }, // God blind (blasphemy)
  "dio scemo": { s: 1, c: 4 }, // God stupid (blasphemy)
  "dio miserabile": { s: 3, c: 4 }, // God miserable (blasphemy)
  "dio puzzolente": { s: 3, c: 4 }, // God smelly (blasphemy)
  "dio sporco": { s: 3, c: 4 }, // God dirty (blasphemy)
  "dio sudicio": { s: 3, c: 4 }, // God dirty (blasphemy variant)
  "dio lurido porco": { s: 3, c: 4 }, // God filthy pig (blasphemy compound)
  "dio cane maiale": { s: 3, c: 4 }, // God dog pig (blasphemy compound)
  "dio porco cane": { s: 3, c: 4 }, // God pig dog (blasphemy compound)
  "dio bestia maledetta": { s: 3, c: 4 }, // God cursed beast (blasphemy compound)
  "dio cane della madonna": { s: 3, c: 4 }, // God dog of the Madonna (blasphemy compound)
  "dio cane porco": { s: 3, c: 4 }, // God dog pig (blasphemy compound)
  "dio cane bastardo": { s: 3, c: 4 }, // God bastard dog (blasphemy compound)
  "dio madonna porco": { s: 3, c: 4 }, // God Madonna pig (blasphemy compound)
  "dio vacca": { s: 3, c: 4 }, // God cow (blasphemy)
  "dio troia": { s: 5, c: 4 }, // God whore (blasphemy)
  "dio puttana": { s: 5, c: 4 }, // God whore (blasphemy)
  "dio zoccola": { s: 3, c: 4 }, // God slut (blasphemy)
  "dio idiota": { s: 1, c: 4 }, // God idiot (blasphemy)
  "dio imbecille": { s: 3, c: 4 }, // God imbecile (blasphemy)
  "dio deficiente": { s: 1, c: 4 }, // God moron (blasphemy)
  "dio cretino": { s: 3, c: 4 }, // God cretin (blasphemy)
  "dio stupido": { s: 1, c: 4 }, // God stupid (blasphemy)
  "dio fesso": { s: 1, c: 4 }, // God fool (blasphemy)
  "dio pirla": { s: 1, c: 4 }, // God dick/fool (blasphemy)
  "dio minchia": { s: 4, c: 4 }, // God dick (blasphemy with Sicilian)
  "dio cazzo": { s: 4, c: 4 }, // God dick (blasphemy)
  "dio assassino": { s: 5, c: 5 }, // God murderer (blasphemy)
  "dio criminale": { s: 3, c: 4 }, // God criminal (blasphemy)
  "dio mostro": { s: 3, c: 4 }, // God monster (blasphemy)
  "dio demonio": { s: 3, c: 4 }, // God demon (blasphemy)
  "dio diavolo": { s: 3, c: 4 }, // God devil (blasphemy)
  "dio satana": { s: 3, c: 4 }, // God Satan (blasphemy)
  "dio giuda": { s: 3, c: 4 }, // God Judas (blasphemy)
  "dio bugiardo": { s: 3, c: 4 }, // God liar (blasphemy)
  "dio falso": { s: 3, c: 4 }, // God false (blasphemy)
  "dio marcio": { s: 3, c: 4 }, // God rotten (blasphemy)
  "dio putrido": { s: 3, c: 4 }, // God putrid (blasphemy)
  "dio rognoso": { s: 3, c: 4 }, // God mangy (blasphemy)
  "dio pidocchioso": { s: 3, c: 4 }, // God lousy (blasphemy)
  "dio bavoso": { s: 3, c: 4 }, // God drooling (blasphemy)
  "dio viscido": { s: 3, c: 4 }, // God slimy (blasphemy)
  "dio rivoltante": { s: 3, c: 4 }, // God revolting (blasphemy)
  "dio ripugnante": { s: 3, c: 4 }, // God repugnant (blasphemy)
  "dio osceno": { s: 3, c: 4 }, // God obscene (blasphemy)
  "dio volgare": { s: 3, c: 4 }, // God vulgar (blasphemy)
  "dio triviale": { s: 3, c: 4 }, // God trivial/vulgar (blasphemy)
  "dio sbagliato": { s: 3, c: 4 }, // God wrong (blasphemy)
  "dio fallito": { s: 3, c: 4 }, // God failed (blasphemy)
  "dio impotente": { s: 3, c: 4 }, // God impotent (blasphemy)
  "dio pezzente": { s: 3, c: 4 }, // God beggar (blasphemy)
  "dio straccione": { s: 3, c: 4 }, // God ragamuffin (blasphemy)
  "dio barbone": { s: 3, c: 4 }, // God hobo (blasphemy)
  "dio stupro": { s: 5, c: 5 }, // God rape (blasphemy)
  "dio disgraziato": { s: 3, c: 4 }, // God disgraced (blasphemy)
  "dio porco maledetto": { s: 3, c: 4 }, // God damned pig (blasphemy compound)
  "dio cane maledetto": { s: 3, c: 4 }, // God damned dog (blasphemy compound)

  // === Bestemmie - Madonna combinations ===
  "madonna porca": { s: 3, c: 4 }, // Madonna pig (blasphemy)
  "madonna lercia": { s: 3, c: 4 }, // Madonna grimy (blasphemy)
  "madonna sudicia": { s: 3, c: 4 }, // Madonna dirty (blasphemy)
  "madonna merdosa": { s: 3, c: 5 }, // Madonna shitty (blasphemy)
  "madonna fetente": { s: 3, c: 4 }, // Madonna stinking (blasphemy)
  "madonna puzzolente": { s: 3, c: 4 }, // Madonna smelly (blasphemy)
  "madonna deficiente": { s: 1, c: 4 }, // Madonna moron (blasphemy)
  "madonna imbecille": { s: 3, c: 4 }, // Madonna imbecile (blasphemy)
  "madonna cretina": { s: 3, c: 4 }, // Madonna cretin (blasphemy)
  "madonna stupida": { s: 1, c: 4 }, // Madonna stupid (blasphemy)
  "madonna ignorante": { s: 3, c: 4 }, // Madonna ignorant (blasphemy)
  "madonna dannata": { s: 3, c: 4 }, // Madonna damned (blasphemy)
  "madonna lebbrosa": { s: 3, c: 4 }, // Madonna leprous (blasphemy)
  "madonna bucaiola": { s: 3, c: 4 }, // Madonna faggot (blasphemy, Tuscan)
  "madonna assassina": { s: 5, c: 5 }, // Madonna murderer (blasphemy)
  "madonna lupa": { s: 3, c: 4 }, // Madonna she-wolf (blasphemy)
  "madonna bagascia": { s: 5, c: 4 }, // Madonna whore (blasphemy, dialectal)
  "madonna baldracca": { s: 3, c: 4 }, // Madonna harlot (blasphemy)
  "madonna battona": { s: 3, c: 4 }, // Madonna streetwalker (blasphemy)
  "madonna mignotta": { s: 5, c: 4 }, // Madonna whore (blasphemy, Roman)
  "madonna bocchinara": { s: 4, c: 4 }, // Madonna cocksucker (blasphemy)

  // === Bestemmie - Cristo combinations ===
  "cristo bestia": { s: 3, c: 4 }, // Christ beast (blasphemy)
  "cristo lurido": { s: 3, c: 4 }, // Christ filthy (blasphemy)
  "cristo schifoso": { s: 3, c: 4 }, // Christ disgusting (blasphemy)
  "cristo stronzo": { s: 3, c: 4 }, // Christ asshole (blasphemy)
  "cristo dannato": { s: 3, c: 4 }, // Christ damned (blasphemy variant)
  "cristo merdoso": { s: 3, c: 5 }, // Christ shitty (blasphemy)
  "cristo fetente": { s: 3, c: 4 }, // Christ stinking (blasphemy)
  "cristo sporco": { s: 3, c: 4 }, // Christ dirty (blasphemy)
  "cristo vacca": { s: 3, c: 4 }, // Christ cow (blasphemy)
  "cristo troia": { s: 5, c: 4 }, // Christ whore (blasphemy)
  "cristo puttana": { s: 5, c: 4 }, // Christ whore (blasphemy variant)
  "cristo zoccola": { s: 3, c: 4 }, // Christ slut (blasphemy)
  "cristo serpente": { s: 3, c: 4 }, // Christ snake (blasphemy)
  "cristo verme": { s: 3, c: 4 }, // Christ worm (blasphemy)
  "cristo farabutto": { s: 3, c: 4 }, // Christ scoundrel (blasphemy)
  "cristo bugiardo": { s: 3, c: 4 }, // Christ liar (blasphemy)
  "cristo marcio": { s: 3, c: 4 }, // Christ rotten (blasphemy)
  "cristo putrido": { s: 3, c: 4 }, // Christ putrid (blasphemy)
  "cristo viscido": { s: 3, c: 4 }, // Christ slimy (blasphemy)

  // === Bestemmie - Saints/other holy combinations ===
  "san pietro porco": { s: 3, c: 4 }, // Saint Peter pig (blasphemy)
  "gesù bestia": { s: 3, c: 4 }, // Jesus beast (blasphemy)
  "gesù puttana": { s: 5, c: 4 }, // Jesus whore (blasphemy)
  "gesù ladro": { s: 3, c: 4 }, // Jesus thief (blasphemy)
  "santo porco": { s: 3, c: 4 }, // Holy pig (blasphemy)
  "sant'iddio porco": { s: 3, c: 4 }, // Holy God pig (blasphemy)
  "sacramento di merda": { s: 3, c: 5 }, // Shit sacrament (blasphemy)
  "sacramento cane": { s: 3, c: 4 }, // Dog sacrament (blasphemy)
  "sacramento bastardo": { s: 3, c: 4 }, // Bastard sacrament (blasphemy)
  "sacramento maledetto": { s: 3, c: 4 }, // Cursed sacrament (blasphemy)
  "ostia di merda": { s: 3, c: 5 }, // Shit host (blasphemy)
  "ostia porchissima": { s: 3, c: 4 }, // Most piggish host (blasphemy)
  "mannaggia i santi": { s: 3, c: 4 }, // Damn the saints (blasphemy)
  "mannaggia la miseria": { s: 3, c: 4 }, // Damn the misery (blasphemy lite)
  "mannaggia a te": { s: 3, c: 4 }, // Damn you (Neapolitan style)
  "porco santo": { s: 3, c: 4 }, // Pig saint (blasphemy)
  "porco sacramento": { s: 3, c: 4 }, // Pig sacrament (blasphemy)
  "porco papa": { s: 3, c: 4 }, // Pig pope (blasphemy)
  "porca vacca": { s: 3, c: 4 }, // Pig cow (blasphemy variant)
  "porca zozza": { s: 3, c: 4 }, // Pig filthy (blasphemy)
  "puttana madonna": { s: 5, c: 4 }, // Whore Madonna (blasphemy)
  "troia madonna": { s: 5, c: 4 }, // Whore Madonna (blasphemy)
  "zoccola madonna": { s: 3, c: 4 }, // Slut Madonna (blasphemy)

  // ========================================
  // === EXPANSION: Neapolitan dialect profanity ===
  // ========================================
  "chiavicone": { s: 3, c: 4 }, // Big sewer / very worthless (Neapolitan)
  "spaccamaroni": { s: 3, c: 4 }, // Chestnut breaker / ball breaker (Neapolitan)
  "sfaccimme": { s: 3, c: 4 }, // Cum (Neapolitan plural)
  "guaglione 'e mierda": { s: 3, c: 5 }, // Shit kid (Neapolitan)
  "puozze sculà": { s: 3, c: 4 }, // May you be drained (Neapolitan curse)
  "puozze murì": { s: 5, c: 5 }, // May you die (Neapolitan curse)
  "puozze schiattà": { s: 3, c: 4 }, // May you explode (Neapolitan curse)
  "puozze accidere": { s: 3, c: 4 }, // May you be killed (Neapolitan curse)
  "puozze appizzà": { s: 3, c: 4 }, // May you be hanged (Neapolitan curse)
  "puozze 'e mierda": { s: 3, c: 5 }, // May you shit (Neapolitan curse)
  "puozze abbruciato": { s: 3, c: 4 }, // May you be burned (Neapolitan curse)
  "mannaggia 'a maronna": { s: 3, c: 4 }, // Damn the Madonna (Neapolitan)
  "mannaggia a chi t'è muorto": { s: 3, c: 4 }, // Damn your dead ones (Neapolitan)
  "mannaggia 'a miseria": { s: 3, c: 4 }, // Damn the misery (Neapolitan)
  "mannaggia 'o sangue": { s: 3, c: 4 }, // Damn the blood (Neapolitan)
  "mannaggia 'a morte": { s: 5, c: 5 }, // Damn death (Neapolitan)
  "mannaggia 'o cazzo": { s: 4, c: 4 }, // Damn the dick (Neapolitan)
  "mannaggia 'a puttana": { s: 5, c: 4 }, // Damn the whore (Neapolitan)
  "vaffanculo a mammeta": { s: 3, c: 5 }, // Fuck off your mother (Neapolitan)
  "vafammòcca": { s: 4, c: 5 }, // Go to blowjobs (Neapolitan)
  "'a fessa 'e mammeta": { s: 4, c: 4 }, // Your mother's pussy (Neapolitan)
  "chillo strunzo": { s: 3, c: 4 }, // That turd (Neapolitan)
  "strunzo 'e mierda": { s: 3, c: 5 }, // Shit turd (Neapolitan)
  "curnutella": { s: 3, c: 4 }, // Little cuckold (Neapolitan diminutive)
  "zoccola 'e mierda": { s: 3, c: 5 }, // Shit slut (Neapolitan)
  "puttana 'e mierda": { s: 5, c: 5 }, // Shit whore (Neapolitan)
  "figlio 'e puttana": { s: 5, c: 5 }, // Son of a whore (Neapolitan)
  "figlio 'e 'na puttana": { s: 5, c: 5 }, // Son of a whore (Neapolitan variant)
  "ciucciamm 'o cazzo": { s: 4, c: 4 }, // Suck my dick (Neapolitan)
  "vattenne affanculo": { s: 3, c: 5 }, // Go fuck off (Neapolitan)
  "vattenn' a ffanculo": { s: 3, c: 5 }, // Go fuck off (Neapolitan variant)
  "sciaquato": { s: 3, c: 4 }, // Washed out / worthless (Neapolitan)
  "scostumato": { s: 3, c: 4 }, // Ill-mannered (Neapolitan)
  "fetente 'e mierda": { s: 3, c: 5 }, // Stinking shit (Neapolitan)
  "ricchion'": { s: 3, c: 4 }, // Gay man (Neapolitan slur shortened)
  "ricchiona": { s: 3, c: 4 }, // Gay/lesbian (Neapolitan slur fem)
  "frociàrse": { s: 3, c: 4 }, // To act gay (Neapolitan derogatory)
  "femminella": { s: 3, c: 4 }, // Effeminate man (Neapolitan slur)
  "guappo 'e cartone": { s: 3, c: 4 }, // Cardboard tough guy (Neapolitan)
  "scugnizzo 'e mierda": { s: 3, c: 5 }, // Shit street urchin (Neapolitan)
  "mariuolo": { s: 3, c: 4 }, // Scoundrel / thief (Neapolitan)
  "mariuola": { s: 3, c: 4 }, // Scoundrel (fem, Neapolitan)
  "cagacarte": { s: 3, c: 5 }, // Paper shitter / bureaucrat (Neapolitan)
  "sciupafemmine": { s: 3, c: 4 }, // Womanizer (Neapolitan/standard)
  "lazzarone": { s: 3, c: 4 }, // Lazzarone / idle scoundrel (Neapolitan)
  "lazzarona": { s: 3, c: 4 }, // Lazy scoundrel (fem, Neapolitan)

  // ========================================
  // === EXPANSION: Sicilian dialect profanity ===
  // ========================================
  "minchiateddi": { s: 1, c: 4 }, // Little stupid things (Sicilian dim. plural)
  "ammazzati": { s: 3, c: 4 }, // Get killed (Sicilian)
  "ammazzati la": { s: 5, c: 5 }, // Go kill yourself (Sicilian)
  "babbiàri": { s: 1, c: 4 }, // To joke / be foolish (Sicilian)
  "buttanedda": { s: 5, c: 4 }, // Little whore (Sicilian diminutive)
  "buttaneddra": { s: 5, c: 4 }, // Little whore (Sicilian variant)
  "buttana di to matri": { s: 5, c: 4 }, // Whore of your mother (Sicilian)
  "buttana di to soru": { s: 5, c: 4 }, // Whore of your sister (Sicilian)
  "buttana matri": { s: 5, c: 4 }, // Whore mother (Sicilian)
  "curnutu fituso": { s: 3, c: 4 }, // Stinking cuckold (Sicilian)
  "curnutu di merda": { s: 3, c: 5 }, // Shit cuckold (Sicilian variant)
  "curnutazzu": { s: 3, c: 4 }, // Big cuckold (Sicilian augmentative)
  "cugghiùni": { s: 1, c: 4 }, // Balls / idiot (Sicilian)
  "cugghiunazzu": { s: 1, c: 4 }, // Big balls / big idiot (Sicilian)
  "cabasisi": { s: 4, c: 4 }, // Balls (Sicilian)
  "cacasotto e muzzicapane": { s: 3, c: 4 }, // Scaredy cat and bread biter (Sicilian)
  "figghiu 'i buttana": { s: 5, c: 5 }, // Son of a whore (Sicilian)
  "figghiu 'i cane": { s: 3, c: 4 }, // Son of a dog (Sicilian)
  "figghiu 'i puttana": { s: 5, c: 5 }, // Son of a whore (Sicilian variant)
  "figghiu 'i 'na buttana": { s: 5, c: 5 }, // Son of a whore (Sicilian with article)
  "figghiu 'i zoccola": { s: 3, c: 4 }, // Son of a slut (Sicilian)
  "futtiri": { s: 3, c: 5 }, // To fuck (Sicilian)
  "liscio": { s: 3, c: 4 }, // Smooth / gay (Sicilian slur)
  "masculazzu": { s: 3, c: 4 }, // Tomboy / masculine woman (Sicilian)
  "minnaccia": { s: 4, c: 4 }, // Big breast / tit (Sicilian)
  "mussu fituso": { s: 3, c: 4 }, // Stinking face (Sicilian)
  "pirtuso": { s: 3, c: 4 }, // Hole / anus (Sicilian)
  "pisciazzu": { s: 3, c: 4 }, // Big piss (Sicilian)
  "quaquaraquà": { s: 3, c: 4 }, // Useless person (Sicilian, from the crow)
  "suca": { s: 3, c: 4 }, // Suck it (Sicilian)
  "sucaminchia": { s: 4, c: 4 }, // Suck my dick (Sicilian)
  "sucaminchione": { s: 4, c: 4 }, // Big dick sucker (Sicilian)
  "tamarrazza": { s: 3, c: 4 }, // Big redneck (Sicilian fem augmentative)
  "turco": { s: 1, c: 4 }, // Turk / idiot (Sicilian insult)
  "vattinni fanculo": { s: 3, c: 5 }, // Fuck off (Sicilian)
  "vastasuna": { s: 3, c: 4 }, // Vulgar person (fem, Sicilian)
  "zoccola fitusa": { s: 3, c: 4 }, // Stinking slut (Sicilian)
  "catafero": { s: 1, c: 4 }, // Corpse / ugly person (Sicilian)

  // ========================================
  // === EXPANSION: Roman dialect profanity ===
  // ========================================
  "mignottona": { s: 5, c: 4 }, // Big whore (Roman augmentative)
  "mignottella": { s: 5, c: 4 }, // Little whore (Roman diminutive)
  "mignottaro": { s: 5, c: 4 }, // Whoremonger (Roman)
  "mignotta de tu madre": { s: 5, c: 4 }, // Your mother's a whore (Roman)
  "stronza de merda": { s: 3, c: 5 }, // Shit bitch (Roman)
  "stronzo de merda": { s: 3, c: 5 }, // Shit asshole (Roman)
  "li mortacci tui": { s: 1, c: 4 }, // Your ugly dead relatives (Roman variant)
  "li mortacci de tu madre": { s: 3, c: 4 }, // Your mother's dead relatives (Roman)
  "li mortacci de tu padre": { s: 1, c: 4 }, // Your father's dead relatives (Roman)
  "li mortacci de chi t'ha partorito": { s: 3, c: 4 }, // Dead relatives of who birthed you (Roman)
  "li mortacci de chi t'è morto": { s: 3, c: 4 }, // Dead relatives of your dead (Roman)
  "li mortacci vostra": { s: 1, c: 4 }, // Your ugly dead relatives (Roman plural)
  "ammazzate": { s: 3, c: 4 }, // Get killed (Roman)
  "annamo bene": { s: 3, c: 4 }, // Here we go (Roman sarcastic)
  "'nnamo a fanculo": { s: 3, c: 5 }, // Let's go fuck off (Roman)
  "a' mignotta": { s: 5, c: 4 }, // The whore (Roman)
  "a' puttana": { s: 5, c: 4 }, // The whore (Roman)
  "te possino ammazzà": { s: 3, c: 4 }, // May they kill you (Roman curse)
  "te possino": { s: 3, c: 4 }, // May they (Roman curse beginning)
  "daje de culo": { s: 3, c: 4 }, // Give it from the ass (Roman)
  "pija per culo": { s: 3, c: 4 }, // To mock / take from the ass (Roman)
  "fijo de 'na mignotta": { s: 5, c: 5 }, // Son of a whore (Roman)
  "fijo de puttana": { s: 5, c: 5 }, // Son of a whore (Roman)
  "fijo de 'na zoccola": { s: 3, c: 4 }, // Son of a slut (Roman)
  "fijo de buona donna": { s: 3, c: 4 }, // Son of a good woman (Roman ironic)
  "sta zitto stronzo": { s: 3, c: 4 }, // Shut up asshole (Roman)
  "che cazzo voi": { s: 4, c: 4 }, // What the dick do you want (Roman)
  "levate dar cazzo": { s: 4, c: 4 }, // Get off the dick / go away (Roman)
  "che te frega": { s: 3, c: 4 }, // What do you care (Roman dismissive)
  "burina": { s: 3, c: 4 }, // Redneck (fem, Roman)
  "coatta": { s: 3, c: 4 }, // Boor (fem, Roman)
  "zozzarella": { s: 3, c: 4 }, // Little dirty person (fem, Roman)
  "borgata de merda": { s: 3, c: 5 }, // Shit slum (Roman)
  "borgataro": { s: 3, c: 4 }, // Slum dweller (Roman derogatory)
  "borgatara": { s: 3, c: 4 }, // Slum dweller (fem, Roman)

  // ========================================
  // === EXPANSION: Milanese/Lombard dialect profanity ===
  // ========================================
  "pirlotta": { s: 1, c: 4 }, // Fool (fem, Milanese)
  "pirlacchione": { s: 1, c: 4 }, // Big fool (Milanese augmentative)
  "baloss": { s: 3, c: 4 }, // Rascal / thief (Milanese)
  "balòss": { s: 3, c: 4 }, // Rascal (Milanese variant)
  "balosso": { s: 3, c: 4 }, // Rascal (Milanese italianized)
  "barbone de merda": { s: 3, c: 5 }, // Shit hobo (Milanese/standard)
  "ciulàt": { s: 3, c: 5 }, // Fucked / stolen (Lombard)
  "pirla de merda": { s: 1, c: 4 }, // Shit fool (Milanese)
  "testa de ciula": { s: 4, c: 4 }, // Dick head (Lombard)
  "va a dà via el cuu": { s: 3, c: 4 }, // Go give away the ass (Milanese)
  "va a cagà": { s: 3, c: 5 }, // Go shit (Milanese)
  "va a ramengo": { s: 3, c: 4 }, // Go to ruin (Milanese)
  "va a morì ammazzà": { s: 5, c: 5 }, // Go die killed (Milanese/Roman crossover)
  "faccia de tolla": { s: 3, c: 4 }, // Tin face / shameless (Milanese)
  "porca la madòna": { s: 3, c: 4 }, // Pig Madonna (Milanese blasphemy)
  "porco el domìni": { s: 3, c: 4 }, // Pig the Lord (Milanese blasphemy)
  "cristo de un can": { s: 3, c: 4 }, // Christ of a dog (Milanese blasphemy)
  "dio de la madona": { s: 3, c: 4 }, // God of the Madonna (Milanese blasphemy)
  "ostia de un can": { s: 3, c: 4 }, // Host of a dog (Milanese blasphemy)
  "sanguanazzo": { s: 3, c: 4 }, // Bloody person (Lombard)
  "lofio": { s: 1, c: 4 }, // Ugly / disgusting (Lombard)
  "lofia": { s: 1, c: 4 }, // Ugly (fem, Lombard)

  // ========================================
  // === EXPANSION: Venetian dialect profanity (expanded) ===
  // ========================================
  "el mona": { s: 1, c: 4 }, // The idiot (Venetian masc)
  "la mona": { s: 4, c: 4 }, // The pussy (Venetian fem)
  "dio can de un porco": { s: 3, c: 4 }, // God dog of a pig (Venetian)
  "dio can de la madona": { s: 3, c: 4 }, // God dog of the Madonna (Venetian)
  "dio bòn": { s: 3, c: 4 }, // God good (Venetian blasphemy)
  "dio bòia": { s: 3, c: 4 }, // God executioner (Venetian blasphemy)
  "dio s-cian": { s: 3, c: 4 }, // God dog (Venetian variant)
  "dioschèi": { s: 3, c: 4 }, // God money (Venetian blasphemy)
  "porco dio de un can": { s: 3, c: 4 }, // Pig God of a dog (Venetian compound)
  "madonna bòia": { s: 3, c: 4 }, // Madonna executioner (Venetian blasphemy)
  "madonna can": { s: 3, c: 4 }, // Madonna dog (Venetian blasphemy)
  "sborone": { s: 3, c: 4 }, // Big cum / show-off (Venetian)
  "sboron": { s: 3, c: 4 }, // Show-off (Venetian)
  "va' a cagar": { s: 3, c: 5 }, // Go shit (Venetian)
  "va a far in mona": { s: 4, c: 4 }, // Go do it in pussy (Venetian)
  "fiol de puttana": { s: 5, c: 5 }, // Son of a whore (Venetian)
  "casso de mona": { s: 4, c: 4 }, // Dick of pussy (Venetian)
  "testa de mona": { s: 4, c: 4 }, // Pussy head (Venetian)
  "brutto mona": { s: 1, c: 4 }, // Ugly idiot (Venetian)
  "in mona de to mare": { s: 4, c: 4 }, // In your mother's pussy (Venetian)
  "tosa del casso": { s: 4, c: 4 }, // Dick girl (Venetian)
  "porco el signor": { s: 3, c: 4 }, // Pig the Lord (Venetian blasphemy)
  "porco san marco": { s: 3, c: 4 }, // Pig Saint Mark (Venetian blasphemy)

  // ========================================
  // === EXPANSION: Piemontese/Piedmontese dialect profanity ===
  // ========================================
  "cojón": { s: 1, c: 4 }, // Balls / idiot (Piedmontese)
  "cojonada": { s: 1, c: 4 }, // Stupid thing (Piedmontese)
  "bogianen": { s: 3, c: 4 }, // Don't move / lazy (Piedmontese)
  "sacranon": { s: 3, c: 4 }, // Damn (Piedmontese)
  "va a caghé": { s: 3, c: 5 }, // Go shit (Piedmontese)
  "va a fé 'n cul": { s: 3, c: 4 }, // Go get it in the ass (Piedmontese)
  "lassa stè": { s: 3, c: 4 }, // Leave it alone / piss off (Piedmontese)
  "fòl": { s: 3, c: 4 }, // Crazy (Piedmontese)
  "cucù": { s: 3, c: 4 }, // Cuckoo / crazy (Piedmontese)
  "ciucco": { s: 1, c: 3 }, // Drunk (masc, Piedmontese)
  "ciuccarsi": { s: 1, c: 3 }, // To get drunk (Piedmontese)
  "bèstia d'un can": { s: 3, c: 4 }, // Beast of a dog (Piedmontese)
  "porco d'un giuda": { s: 3, c: 4 }, // Pig of a Judas (Piedmontese)
  "cristo d'un can": { s: 3, c: 4 }, // Christ of a dog (Piedmontese)
  "madona d'na troia": { s: 5, c: 4 }, // Madonna of a whore (Piedmontese)
  "figurassa": { s: 3, c: 4 }, // Bad figure / shameful (Piedmontese)

  // ========================================
  // === EXPANSION: Ligurian dialect profanity ===
  // ========================================
  "belìn": { s: 4, c: 4 }, // Dick (Ligurian)
  "belin de merda": { s: 4, c: 5 }, // Shit dick (Ligurian)
  "a belina": { s: 4, c: 4 }, // The pussy (Ligurian)
  "figgio de puttana": { s: 5, c: 5 }, // Son of a whore (Ligurian)
  "vattene in belìn": { s: 4, c: 4 }, // Go to dick (Ligurian)
  "cornuto de merda": { s: 3, c: 5 }, // Shit cuckold (Ligurian)
  "bagascione": { s: 5, c: 4 }, // Big whore (Ligurian augmentative)
  "bagascetta": { s: 5, c: 4 }, // Little whore (Ligurian diminutive)
  "scorbuto": { s: 1, c: 4 }, // Scurvy / ugly person (Ligurian insult)
  "belin che sei": { s: 4, c: 4 }, // What a dick you are (Ligurian)
  "faccia de belin": { s: 4, c: 4 }, // Dick face (Ligurian)

  // ========================================
  // === EXPANSION: Friulian dialect profanity ===
  // ========================================
  "cjocje": { s: 1, c: 3 }, // Drunk (fem, Friulian)
  "cjocjât": { s: 3, c: 4 }, // Wasted (Friulian)
  "mòni": { s: 1, c: 4 }, // Idiot (Friulian)
  "mònic": { s: 1, c: 4 }, // Stupid (Friulian)
  "tòc di mòni": { s: 1, c: 4 }, // Piece of idiot (Friulian)
  "cul di vacje": { s: 3, c: 4 }, // Cow's ass (Friulian)
  "scjassâ": { s: 3, c: 4 }, // To break / annoy (Friulian)
  "purcjegne": { s: 3, c: 4 }, // Piggishness (Friulian)
  "va a cjapâ tal cûl": { s: 3, c: 4 }, // Go take it in the ass (Friulian)
  "va a fâ in cûl": { s: 3, c: 4 }, // Go do it in the ass (Friulian)
  "ostie": { s: 3, c: 4 }, // Host (Friulian blasphemy)
  "diu can": { s: 3, c: 4 }, // God dog (Friulian blasphemy)
  "diu puarc": { s: 3, c: 4 }, // God pig (Friulian blasphemy)
  "diu lòtri": { s: 3, c: 4 }, // God dirty (Friulian blasphemy)

  // ========================================
  // === EXPANSION: Abruzzese/Marchigiano dialect profanity ===
  // ========================================
  "cacchiotto": { s: 4, c: 4 }, // Little dick (Abruzzese)
  "cacchione": { s: 1, c: 4 }, // Big dick / stupid (Abruzzese)
  "cazzarola": { s: 2, c: 3 }, // Damn / saucepan (Abruzzese euphemism)
  "caccamo": { s: 1, c: 4 }, // Cauldron / idiot (Abruzzese)
  "ciaffo": { s: 3, c: 4 }, // Slap (Abruzzese)
  "ciaffare": { s: 3, c: 4 }, // To slap (Abruzzese)
  "strunzo 'e merd": { s: 3, c: 5 }, // Shit turd (Abruzzese)
  "figlio de 'na puttana": { s: 5, c: 5 }, // Son of a whore (Abruzzese)
  "che cazzo vuo'": { s: 4, c: 4 }, // What the dick do you want (Abruzzese)
  "vattenn' a ffa 'n culo": { s: 3, c: 4 }, // Go get it in the ass (Abruzzese)
  "cojona": { s: 1, c: 4 }, // Idiot (fem, Abruzzese)
  "zì puttana": { s: 5, c: 4 }, // Aunt whore (Abruzzese)
  "chi t'ha morto": { s: 5, c: 5 }, // Who died on you (Abruzzese curse)

  // ========================================
  // === EXPANSION: Calabrese dialect profanity ===
  // ========================================
  "minchiune": { s: 1, c: 4 }, // Big idiot (Calabrese)
  "guappune": { s: 3, c: 4 }, // Tough guy (Calabrese derogatory)
  "cornuto figlio 'e cornuto": { s: 3, c: 4 }, // Cuckold son of cuckold (Calabrese)
  "curnutu fitusu": { s: 3, c: 4 }, // Stinking cuckold (Calabrese)
  "buttanazza": { s: 5, c: 4 }, // Big whore (Calabrese)
  "figlio 'i puttana": { s: 5, c: 5 }, // Son of a whore (Calabrese)
  "vaffanculo a mamita": { s: 3, c: 5 }, // Fuck off your mom (Calabrese)
  "ammazzatinu": { s: 3, c: 4 }, // Go get killed (Calabrese)
  "cretinu 'e merda": { s: 3, c: 5 }, // Shit cretin (Calabrese)
  "scassaminchia di merda": { s: 4, c: 5 }, // Shit dick breaker (Calabrese)
  "cafone 'e merda": { s: 3, c: 5 }, // Shit peasant (Calabrese)
  "garbino": { s: 3, c: 4 }, // Jerk (Calabrese)
  "cammurria": { s: 3, c: 4 }, // Annoyance / pest (Calabrese)
  "cammurrioso": { s: 3, c: 4 }, // Annoying (Calabrese)
  "sangue di giuda": { s: 3, c: 4 }, // Blood of Judas (Calabrese blasphemy)

  // ========================================
  // === EXPANSION: Pugliese/Apulian dialect profanity ===
  // ========================================
  "cazz 'e mammt": { s: 4, c: 4 }, // Your mother's dick (Pugliese)
  "fangu te mamm't": { s: 3, c: 4 }, // Your mother's mud (Pugliese)
  "strunz 'e merd": { s: 3, c: 5 }, // Shit turd (Pugliese)
  "figghie de puttana": { s: 5, c: 5 }, // Son of a whore (Pugliese)
  "uè strunzone": { s: 3, c: 4 }, // Hey big turd (Pugliese)
  "mò te caccio": { s: 3, c: 4 }, // Now I'll kick you out (Pugliese)
  "minchia ca si brutto": { s: 1, c: 4 }, // Dick you're ugly (Pugliese)
  "vattenne a fà 'n culo": { s: 3, c: 4 }, // Go get it in the ass (Pugliese)
  "cesso di merda": { s: 3, c: 5 }, // Shit toilet (Pugliese)
  "scemmone": { s: 1, c: 4 }, // Big idiot (Pugliese)
  "scemmunito": { s: 1, c: 4 }, // Made stupid (Pugliese)
  "pacchione": { s: 3, c: 4 }, // Big belly / glutton (Pugliese)
  "puzzolentu": { s: 3, c: 4 }, // Smelly (Pugliese)
  "ciucciu": { s: 3, c: 4 }, // Donkey (Pugliese)

  // ========================================
  // === EXPANSION: Emiliano-Romagnolo dialect profanity ===
  // ========================================
  "bòia d'un mònd": { s: 3, c: 4 }, // Executioner of a world (Emiliano blasphemy)
  "pòrca la bèstia": { s: 3, c: 4 }, // Pig the beast (Emiliano blasphemy)
  "pòrca la madòna": { s: 3, c: 4 }, // Pig the Madonna (Emiliano blasphemy)
  "pòrco dìo": { s: 3, c: 4 }, // Pig God (Emiliano blasphemy)
  "va a cagàr": { s: 3, c: 5 }, // Go shit (Emiliano)
  "va a fà in cùl": { s: 3, c: 4 }, // Go get it in the ass (Emiliano)
  "testa de minchia": { s: 4, c: 4 }, // Dick head (Emiliano/standard)
  "cojòn": { s: 1, c: 4 }, // Balls / idiot (Emiliano)
  "cojònada": { s: 1, c: 4 }, // Stupid thing (Emiliano)
  "pùtana 'dla madòna": { s: 5, c: 4 }, // Whore of the Madonna (Emiliano)
  "stronz'd mérda": { s: 3, c: 5 }, // Shit turd (Emiliano)
  "figurón de mérda": { s: 3, c: 5 }, // Shit spectacle (Emiliano)
  "burdèl": { s: 3, c: 4 }, // Bordello / mess (Romagnolo)
  "burdlòn": { s: 3, c: 4 }, // Big mess maker (Romagnolo)

  // ========================================
  // === EXPANSION: Trentino-Alto Adige dialect profanity ===
  // ========================================
  "porca putana": { s: 5, c: 4 }, // Pig whore (Trentino)
  "porca madona": { s: 3, c: 4 }, // Pig Madonna (Trentino)
  "va a farte fòter": { s: 3, c: 5 }, // Go get fucked (Trentino)
  "el mona de to pare": { s: 1, c: 4 }, // Your father's idiot (Trentino/Venetian)
  "dio bestia de un can": { s: 3, c: 4 }, // God beast of a dog (Trentino)
  "porco giuda de un can": { s: 3, c: 4 }, // Pig Judas of a dog (Trentino)
  "ostia de un can ladro": { s: 3, c: 4 }, // Host of a thief dog (Trentino)

  // ========================================
  // === EXPANSION: Sexual terms with conjugations ===
  // ========================================
  "chiavo": { s: 4, c: 5 }, // I fuck (1st person)
  "chiavi": { s: 4, c: 5 }, // You fuck (2nd person)
  "chiava": { s: 4, c: 5 }, // He/she fucks (3rd person)
  "chiaviamo": { s: 4, c: 5 }, // We fuck (1st plural)
  "chiavate": { s: 4, c: 5 }, // You fuck (2nd plural)
  "chiavano": { s: 4, c: 5 }, // They fuck (3rd plural)
  "chiavavo": { s: 4, c: 5 }, // I used to fuck (imperfect 1st)
  "chiavavi": { s: 4, c: 5 }, // You used to fuck (imperfect 2nd)
  "chiavavamo": { s: 4, c: 5 }, // We used to fuck (imperfect 1st plural)
  "chiavai": { s: 4, c: 5 }, // I fucked (past 1st)
  "chiavò": { s: 4, c: 5 }, // He/she fucked (past 3rd)
  "chiaverò": { s: 4, c: 5 }, // I will fuck (future 1st)
  "chiaverai": { s: 4, c: 5 }, // You will fuck (future 2nd)
  "chiaverà": { s: 4, c: 5 }, // He/she will fuck (future 3rd)
  "chiaveremo": { s: 4, c: 5 }, // We will fuck (future 1st plural)
  "chiaveranno": { s: 4, c: 5 }, // They will fuck (future 3rd plural)
  "chiaverei": { s: 4, c: 5 }, // I would fuck (conditional 1st)
  "chiaveresti": { s: 4, c: 5 }, // You would fuck (conditional 2nd)
  "chiaverebbe": { s: 4, c: 5 }, // He/she would fuck (conditional 3rd)
  "chiaveremmo": { s: 4, c: 5 }, // We would fuck (conditional 1st plural)
  "chiaverebbero": { s: 4, c: 5 }, // They would fuck (conditional 3rd plural)
  "scopo": { s: 4, c: 5 }, // I fuck
  "scopi": { s: 4, c: 5 }, // You fuck
  "scopa": { s: 4, c: 5 }, // He/she fucks
  "scopiamo": { s: 4, c: 5 }, // We fuck
  "scopate": { s: 4, c: 5 }, // You all fuck
  "scopano": { s: 4, c: 5 }, // They fuck
  "scopavo": { s: 4, c: 5 }, // I used to fuck
  "scopai": { s: 4, c: 5 }, // I fucked (past)
  "scopò": { s: 4, c: 5 }, // He/she fucked (past)
  "scoperò": { s: 4, c: 5 }, // I will fuck (future)
  "scoperai": { s: 4, c: 5 }, // You will fuck (future)
  "scoperà": { s: 4, c: 5 }, // He/she will fuck (future)
  "scoperei": { s: 4, c: 5 }, // I would fuck (conditional)
  "scopato": { s: 4, c: 5 }, // Fucked (past part. masc)
  "scopatina": { s: 4, c: 5 }, // Quick fuck (diminutive)
  "scopatona": { s: 4, c: 5 }, // Big fuck (fem augmentative)
  "trombo": { s: 4, c: 5 }, // I fuck (slang)
  "trombi": { s: 4, c: 5 }, // You fuck (slang)
  "tromba": { s: 4, c: 5 }, // He/she fucks (slang)
  "trombiamo": { s: 4, c: 5 }, // We fuck (slang)
  "trombate": { s: 4, c: 5 }, // You all fuck (slang)
  "trombano": { s: 4, c: 5 }, // They fuck (slang)
  "trombatona": { s: 4, c: 5 }, // Big fuck (slang augmentative)
  "trombato": { s: 4, c: 5 }, // Fucked (slang past part.)
  "fotto": { s: 4, c: 5 }, // I fuck (literary)
  "fotti": { s: 4, c: 5 }, // You fuck (literary)
  "fotte": { s: 4, c: 5 }, // He/she fucks (literary)
  "fottiamo": { s: 4, c: 5 }, // We fuck (literary)
  "fottete": { s: 4, c: 5 }, // You all fuck (literary)
  "fottono": { s: 4, c: 5 }, // They fuck (literary)
  "fottuta": { s: 4, c: 5 }, // Fucked (fem, literary)
  "inculo": { s: 4, c: 5 }, // I ass-fuck
  "inculi": { s: 4, c: 5 }, // You ass-fuck
  "incula": { s: 4, c: 5 }, // He/she ass-fucks
  "inculato": { s: 4, c: 5 }, // Ass-fucked (past part.)
  "inculata": { s: 4, c: 5 }, // Ass-fucked (fem) / an ass-fucking
  "inculatona": { s: 4, c: 5 }, // Big ass-fucking (augmentative)
  "pompinaro": { s: 4, c: 5 }, // Man who gives blowjobs
  "pomparsi": { s: 4, c: 4 }, // To jerk off (reflexive)
  "segare": { s: 4, c: 4 }, // To jerk off / to saw
  "segaiola": { s: 4, c: 4 }, // Wanker (fem)
  "segamento": { s: 4, c: 4 }, // Wanking (action)
  "autoerotismo": { s: 4, c: 4 }, // Masturbation (formal)
  "sborrare": { s: 4, c: 4 }, // To cum
  "sborro": { s: 4, c: 4 }, // I cum / cum (noun)
  "orgasmare": { s: 4, c: 4 }, // To orgasm

  // ========================================
  // === EXPANSION: Compound insults - figlio di ===
  // ========================================
  "figlio di troie": { s: 5, c: 5 }, // Son of whores
  "figlio di merdaccia": { s: 3, c: 5 }, // Son of big shit
  "figlio di un porco": { s: 1, c: 4 }, // Son of a pig
  "figlio di una scrofa": { s: 1, c: 4 }, // Son of a sow
  "figlio di buona mamma": { s: 2, c: 3 }, // Son of a good mother (euphemism)
  "figlio di papa": { s: 1, c: 4 }, // Daddy's boy / spoiled
  "figlio di troia marcio": { s: 5, c: 4 }, // Son of a rotten whore
  "figlio di puttana maledetta": { s: 5, c: 4 }, // Son of a damned whore
  "figlio di zoccola fetida": { s: 1, c: 4 }, // Son of a fetid slut
  "figlio di merda": { s: 3, c: 5 }, // Son of shit
  "figlio di un cornuto": { s: 1, c: 4 }, // Son of a cuckold
  "figlio di un bastardo": { s: 3, c: 4 }, // Son of a bastard
  "figlio di un verme": { s: 1, c: 4 }, // Son of a worm
  "figlio del demonio": { s: 1, c: 4 }, // Son of the demon
  "figlio del diavolo": { s: 1, c: 4 }, // Son of the devil
  "figlio di satana": { s: 1, c: 4 }, // Son of Satan
  "figlio di giuda": { s: 1, c: 4 }, // Son of Judas

  // === Compound insults - testa di ===
  "testa di pietra": { s: 1, c: 4 }, // Stone head / stubborn idiot
  "testa di ferro": { s: 1, c: 4 }, // Iron head / stubborn
  "testa di asino": { s: 1, c: 4 }, // Donkey head
  "testa di porco": { s: 1, c: 4 }, // Pig head
  "testa di maiale": { s: 1, c: 4 }, // Pig head (variant)
  "testa di cane": { s: 1, c: 4 }, // Dog head
  "testa di mulo": { s: 1, c: 4 }, // Mule head / stubborn
  "testa di gallina": { s: 1, c: 4 }, // Chicken head / stupid
  "testa di cappero": { s: 1, c: 4 }, // Caper head / idiot
  "testa di belìn": { s: 4, c: 4 }, // Dick head (Ligurian)
  "testa quadra": { s: 1, c: 4 }, // Square head / stubborn

  // === Compound insults - faccia di ===
  "faccia di tolla": { s: 1, c: 4 }, // Tin face / shameless
  "faccia da cane": { s: 1, c: 4 }, // Dog face
  "faccia da porco": { s: 1, c: 4 }, // Pig face
  "faccia da scimmia": { s: 1, c: 4 }, // Monkey face
  "faccia da galera": { s: 1, c: 4 }, // Prison face / criminal-looking
  "faccia da morto": { s: 1, c: 4 }, // Dead face
  "faccia da deficiente": { s: 1, c: 4 }, // Moron face
  "faccia da idiota": { s: 1, c: 4 }, // Idiot face
  "faccia da stronzo": { s: 1, c: 4 }, // Turd face (variant)

  // === Compound insults - pezzo di ===
  "pezzo di coglione": { s: 1, c: 4 }, // Piece of idiot
  "pezzo di cornuto": { s: 1, c: 4 }, // Piece of cuckold
  "pezzo di bastardo": { s: 3, c: 4 }, // Piece of bastard
  "pezzo di animale": { s: 1, c: 4 }, // Piece of animal
  "pezzo di porco": { s: 1, c: 4 }, // Piece of pig
  "pezzo di ignorante": { s: 1, c: 4 }, // Piece of ignorant
  "pezzo di farabutto": { s: 1, c: 4 }, // Piece of scoundrel
  "pezzo di delinquente": { s: 1, c: 4 }, // Piece of delinquent
  "pezzo di vigliacco": { s: 1, c: 4 }, // Piece of coward
  "pezzo di immondizia": { s: 1, c: 4 }, // Piece of garbage
  "pezzo di spazzatura": { s: 1, c: 4 }, // Piece of trash

  // ========================================
  // === EXPANSION: Evasion spellings ===
  // ========================================
  "c.a.z.z.o": { s: 3, c: 5 }, // Cazzo dotted
  "c-a-z-z-o": { s: 3, c: 5 }, // Cazzo dashed
  "c a z z o": { s: 3, c: 5 }, // Cazzo spaced
  "cazzzo": { s: 3, c: 5 }, // Cazzo triple z
  "caaazzo": { s: 3, c: 5 }, // Cazzo stretched a
  "cazzoooo": { s: 3, c: 5 }, // Cazzo stretched o
  "m1nchia": { s: 3, c: 5 }, // Minchia with 1
  "m!nchia": { s: 3, c: 5 }, // Minchia with !
  "m.i.n.c.h.i.a": { s: 3, c: 5 }, // Minchia dotted
  "f!ca": { s: 3, c: 5 }, // Fica with !
  "f!ga": { s: 3, c: 5 }, // Figa with !
  "f.i.g.a": { s: 3, c: 5 }, // Figa dotted
  "f-i-g-a": { s: 3, c: 5 }, // Figa dashed
  "s.t.r.o.n.z.o": { s: 3, c: 5 }, // Stronzo dotted
  "m.e.r.d.a": { s: 3, c: 5 }, // Merda dotted
  "m-e-r-d-a": { s: 3, c: 5 }, // Merda dashed
  "merrd4": { s: 3, c: 5 }, // Merda variant
  "p0rco dio": { s: 3, c: 5 }, // Porco dio with 0
  "p0rc0 di0": { s: 3, c: 5 }, // Porco dio with 0s
  "d!o porco": { s: 3, c: 5 }, // Dio porco with !
  "di0 porco": { s: 3, c: 5 }, // Dio porco with 0
  "di0 c4ne": { s: 3, c: 5 }, // Dio cane with numbers
  "vaff4nculo": { s: 3, c: 5 }, // Vaffanculo with 4
  "v4ffanculo": { s: 3, c: 5 }, // Vaffanculo with 4
  "v.a.f.f.a.n.c.u.l.o": { s: 3, c: 5 }, // Vaffanculo dotted
  "c0gli0ne": { s: 3, c: 5 }, // Coglione with 0s
  "c.o.g.l.i.o.n.e": { s: 3, c: 5 }, // Coglione dotted
  "puttan4": { s: 3, c: 5 }, // Puttana with 4
  "p.u.t.t.a.n.a": { s: 3, c: 5 }, // Puttana dotted
  "tr0i4": { s: 3, c: 5 }, // Troia with 0 and 4
  "t.r.o.i.a": { s: 3, c: 5 }, // Troia dotted
  "z0cc0la": { s: 3, c: 5 }, // Zoccola with 0s
  "sc0pata": { s: 3, c: 5 }, // Scopata with 0
  "b0cchin0": { s: 3, c: 5 }, // Bocchino with 0s
  "p0mpin0": { s: 3, c: 5 }, // Pompino with 0s
  "c.u.l.o": { s: 3, c: 5 }, // Culo dotted
  "fr0ci0": { s: 3, c: 5 }, // Frocio with 0s
  "f.r.o.c.i.o": { s: 3, c: 5 }, // Frocio dotted
  "neg*o": { s: 3, c: 5 }, // Negro with star
  "negr0": { s: 3, c: 5 }, // Negro with 0
  "n3gro": { s: 3, c: 5 }, // Negro with 3
  "dioc4ne": { s: 3, c: 5 }, // Diocane with 4
  "di0cane": { s: 3, c: 5 }, // Diocane with 0
  "diop0rco": { s: 3, c: 5 }, // Dioporco with 0
  "di0p0rc0": { s: 3, c: 5 }, // Dioporco with 0s
  "madonn4": { s: 3, c: 5 }, // Madonna with 4
  "m4donna": { s: 3, c: 5 }, // Madonna with 4
  "cr1sto": { s: 3, c: 5 }, // Cristo with 1
  "crist0": { s: 3, c: 5 }, // Cristo with 0
  "sbor4ta": { s: 3, c: 5 }, // Sborata with 4
  "sborr4ta": { s: 3, c: 5 }, // Sborrata with 4

  // ========================================
  // === EXPANSION: More compound insults and phrases ===
  // ========================================
  "vai a farti benedire": { s: 3, c: 5 }, // Go get blessed (euphemism for fuck off)
  "vai a quel paese": { s: 3, c: 5 }, // Go to that place (euphemism for fuck off)
  "levati dalle palle": { s: 4, c: 4 }, // Get off the balls / go away
  "non scassare la minchia": { s: 4, c: 4 }, // Don't break the dick (Sicilian)
  "sta cazzo": { s: 4, c: 4 }, // Dick (emphatic)
  "sticazzi": { s: 4, c: 4 }, // Who gives a dick (Roman)
  "daje co sto cazzo": { s: 4, c: 4 }, // Come on with this dick (Roman)
  "ma va' al diavolo": { s: 1, c: 4 }, // Go to the devil
  "ma va' all'inferno": { s: 1, c: 4 }, // Go to hell
  "ma vattela a pigliare": { s: 2, c: 3 }, // Go take it (euphemism)
  "ma che cazzo vuoi": { s: 4, c: 4 }, // What the dick do you want
  "ma vaffanculo va'": { s: 3, c: 5 }, // Go fuck off already
  "che coglioni": { s: 4, c: 4 }, // What balls / how annoying
  "che minchia": { s: 4, c: 4 }, // What the dick (Sicilian)
  "che merda": { s: 3, c: 5 }, // What shit
  "che schifo di merda": { s: 3, c: 5 }, // What disgusting shit
  "ma va a cagare": { s: 3, c: 5 }, // Go shit (dismissive)
  "ma va a morire": { s: 5, c: 5 }, // Go die
  "ma va a morire ammazzato": { s: 5, c: 5 }, // Go die killed
  "ma va a morire ammazzata": { s: 5, c: 5 }, // Go die killed (fem)
  "crepa": { s: 5, c: 5 }, // Die / croak
  "crepacce": { s: 5, c: 5 }, // Die (vulgar)
  "crepa brutto stronzo": { s: 1, c: 4 }, // Die ugly asshole
  "muori male": { s: 5, c: 5 }, // Die badly
  "ti ammazzo": { s: 1, c: 4 }, // I'll kill you
  "ti spezzo in due": { s: 1, c: 4 }, // I'll break you in two
  "ti apro in due": { s: 1, c: 4 }, // I'll split you in two
  "ti faccio un culo così": { s: 3, c: 4 }, // I'll make your ass this big
  "ti sfascio": { s: 1, c: 4 }, // I'll smash you
  "ti sfondo": { s: 1, c: 4 }, // I'll break through you
  "ti distruggo": { s: 1, c: 4 }, // I'll destroy you
  "ti massacro": { s: 3, c: 4 }, // I'll massacre you
  "porco di un mondo ladro": { s: 1, c: 4 }, // Pig of a thief world
  "porca miseria ladra": { s: 1, c: 4 }, // Pig thief misery
  "porcaccia la miseria": { s: 1, c: 4 }, // Piggish the misery
  "porcaccia": { s: 1, c: 4 }, // Piggish (emphatic)
  "porcaccione": { s: 1, c: 4 }, // Big pig (emphatic augmentative)
  "porcacciona": { s: 1, c: 4 }, // Big pig (fem emphatic)
  "porcherie": { s: 4, c: 4 }, // Disgusting things (plural)
  "schifezze": { s: 1, c: 4 }, // Disgusting things (plural)
  "roba di merda": { s: 3, c: 5 }, // Shit stuff
  "roba da matti": { s: 1, c: 4 }, // Crazy stuff
  "roba schifosa": { s: 1, c: 4 }, // Disgusting stuff
  "tutto di merda": { s: 3, c: 5 }, // Everything is shit
  "tutto una merda": { s: 3, c: 5 }, // Everything's a shit
  "merdacce": { s: 3, c: 5 }, // Big shits (plural)
  "merdosa": { s: 3, c: 5 }, // Shitty (fem)
  "merdosi": { s: 3, c: 5 }, // Shitty (masc plural)
  "merdose": { s: 3, c: 5 }, // Shitty (fem plural)
  "cacca": { s: 1, c: 4 }, // Poop (childish)
  "caccola": { s: 3, c: 5 }, // Booger / little shit
  "incazzata": { s: 1, c: 4 }, // Pissed off (fem)
  "incazzatissima": { s: 1, c: 4 }, // Very pissed off (superlative fem)
  "scazzata": { s: 1, c: 4 }, // Annoyed (fem)
  "scazzo": { s: 1, c: 4 }, // Annoyance / boredom
  "rincoglionito": { s: 1, c: 4 }, // Made stupid / senile
  "rincoglionita": { s: 1, c: 4 }, // Made stupid (fem)
  "rincoglionirsi": { s: 1, c: 4 }, // To become stupid
  "rincoglionimento": { s: 1, c: 4 }, // Stupefaction / senility
  "scoglionato": { s: 1, c: 4 }, // Fed up / annoyed
  "scoglionata": { s: 1, c: 4 }, // Fed up (fem)
  "sbroccato": { s: 1, c: 4 }, // Snapped / gone crazy
  "sbroccata": { s: 1, c: 4 }, // Snapped (fem)
  "sclerare": { s: 1, c: 4 }, // To flip out
  "sclerato": { s: 1, c: 4 }, // Flipped out (masc)
  "sclerata": { s: 1, c: 4 }, // Flipped out (fem)
  "sclerosi": { s: 1, c: 4 }, // Sclerosis / going crazy
  "dare di matto": { s: 1, c: 4 }, // To go crazy
  "fuori di testa": { s: 1, c: 4 }, // Out of one's mind
  "fuori come un balcone": { s: 1, c: 4 }, // Out like a balcony / crazy
  "matto come un cavallo": { s: 1, c: 4 }, // Crazy as a horse
  "pazzo furioso": { s: 1, c: 4 }, // Furiously crazy
  "pazza furiosa": { s: 1, c: 4 }, // Furiously crazy (fem)
  "deficiente totale": { s: 1, c: 4 }, // Total moron
  "imbecille patentato": { s: 1, c: 4 }, // Licensed imbecile
  "cretino patentato": { s: 1, c: 4 }, // Licensed cretin
  "idiota patentato": { s: 1, c: 4 }, // Licensed idiot
  "stupido come una capra": { s: 1, c: 4 }, // Stupid as a goat
  "ignorante come una capra": { s: 1, c: 4 }, // Ignorant as a goat
  "asino di natura": { s: 1, c: 4 }, // Donkey by nature
  "ciuccio come un somaro": { s: 1, c: 4 }, // Dumb as a donkey
  "zuccone": { s: 1, c: 4 }, // Big pumpkin / blockhead
  "zuccona": { s: 1, c: 4 }, // Blockhead (fem)
  "testone": { s: 1, c: 4 }, // Big head / stubborn
  "testona": { s: 1, c: 4 }, // Big head (fem) / stubborn
  "testadicazzo": { s: 4, c: 4 }, // Dickhead (one word)
  "testadirapa": { s: 1, c: 4 }, // Turnip head (one word)
  "testadimulo": { s: 1, c: 4 }, // Mule head (one word)

  // ========================================
  // === EXPANSION: More insults and slurs ===
  // ========================================
  "terroni": { s: 5, c: 4 }, // Southerners (derogatory plural)
  "terrone di merda": { s: 5, c: 5 }, // Shit southerner (derogatory)
  "polentona": { s: 5, c: 4 }, // Northerner (fem, derogatory)
  "polentoni": { s: 5, c: 4 }, // Northerners (derogatory plural)
  "polentone di merda": { s: 5, c: 5 }, // Shit northerner (derogatory)
  "marocchino di merda": { s: 5, c: 5 }, // Shit Moroccan (racist)
  "sporco straniero": { s: 5, c: 4 }, // Dirty foreigner (xenophobic)
  "extracomunitario di merda": { s: 5, c: 5 }, // Shit non-EU immigrant (xenophobic)
  "zingari di merda": { s: 5, c: 5 }, // Shit gypsies (racist)
  "frocio di merda": { s: 5, c: 5 }, // Shit faggot (homophobic)
  "sporco frocio": { s: 5, c: 4 }, // Dirty faggot (homophobic)
  "checca isterica": { s: 5, c: 4 }, // Hysterical queen (homophobic)
  "lesbicaccia": { s: 5, c: 4 }, // Big lesbian (derogatory augmentative)
  "lesbica di merda": { s: 5, c: 5 }, // Shit lesbian (homophobic)
  "trans di merda": { s: 5, c: 5 }, // Shit trans (transphobic)
  "travestito di merda": { s: 5, c: 5 }, // Shit crossdresser (transphobic)
  "handicappato di merda": { s: 5, c: 5 }, // Shit handicapped (ableist)
  "ritardato di merda": { s: 5, c: 5 }, // Shit retard (ableist)
  "mongolo di merda": { s: 5, c: 5 }, // Shit mongoloid (ableist)
  "spastico di merda": { s: 5, c: 5 }, // Shit spastic (ableist)
  "cerebroleso": { s: 5, c: 4 }, // Brain damaged (ableist)

  // ========================================
  // === EXPANSION: Euphemistic and evasive terms ===
  // ========================================
  "accidenti": { s: 2, c: 3 }, // Damn (euphemism)
  "accipicchia": { s: 2, c: 3 }, // Darn (euphemism for cazzo)
  "cavolo": { s: 2, c: 3 }, // Cabbage (euphemism for cazzo)
  "cavoli": { s: 2, c: 3 }, // Cabbages (euphemism for cazzi)
  "caspita": { s: 2, c: 3 }, // Gosh (euphemism for cazzo)
  "capperi": { s: 2, c: 3 }, // Capers (euphemism for cazzo)
  "cacchio": { s: 2, c: 3 }, // Shoot (euphemism for cazzo)
  "acciderba": { s: 3, c: 3 }, // Damn grass (euphemism)
  "acciderboli": { s: 2, c: 3 }, // Multi-damn (euphemism)
  "porca pupattola": { s: 2, c: 3 }, // Pig doll (euphemistic blasphemy)
  "porca puzzola": { s: 2, c: 3 }, // Pig skunk (euphemistic blasphemy)
  "porca trota": { s: 2, c: 3 }, // Pig trout (euphemistic blasphemy)
  "diamine": { s: 2, c: 3 }, // Damn (euphemism for dio)
  "diavolo": { s: 2, c: 3 }, // Devil (euphemism)
  "diavolaccio": { s: 2, c: 3 }, // Big devil (euphemism)
  "cribbio": { s: 2, c: 3 }, // Gee (euphemism for Cristo)
  "cristiddio": { s: 3, c: 4 }, // Christ God (variant)
  "zucchina": { s: 4, c: 3 }, // Zucchini (euphemism for penis)
  "banana": { s: 3, c: 4 }, // Banana (euphemism for penis)
  "salame": { s: 4, c: 3 }, // Salami (euphemism for penis)
  "uccello": { s: 4, c: 3 }, // Bird / penis (euphemism)
  "bernarda": { s: 4, c: 3 }, // Bertha (euphemism for penis)
  "patata": { s: 4, c: 3 }, // Potato (euphemism for vagina)
  "passera": { s: 4, c: 3 }, // Sparrow (euphemism for vagina)
  "passerina": { s: 4, c: 3 }, // Little sparrow (euphemism for vagina)
  "farfallina": { s: 4, c: 3 }, // Little butterfly (euphemism for vagina)
  "topina": { s: 4, c: 3 }, // Little mouse (euphemism for vagina)
  "sedere": { s: 3, c: 4 }, // Buttocks / sit
  "deretano": { s: 3, c: 4 }, // Rear end
  "fondoschiena": { s: 3, c: 4 }, // Bottom of the back
  "lato b": { s: 3, c: 3 }, // B side (euphemism for ass)
  "posteriore": { s: 3, c: 4 }, // Posterior

  // ========================================
  // === EXPANSION: Internet/SMS evasion spellings ===
  // ========================================
  "kazzo": { s: 2, c: 5 }, // Cazzo with k
  "kazzata": { s: 2, c: 5 }, // Cazzata with k
  "kazzone": { s: 2, c: 5 }, // Cazzone with k
  "kulo": { s: 3, c: 5 }, // Culo with k
  "fika": { s: 2, c: 5 }, // Fica with k
  "fikka": { s: 2, c: 5 }, // Fica with kk
  "troija": { s: 2, c: 5 }, // Troia with j
  "putt4n4": { s: 2, c: 5 }, // Puttana with 4s
  "vakka": { s: 2, c: 5 }, // Vacca with k
  "vakkaccia": { s: 2, c: 5 }, // Vaccaccia with k
  "porko": { s: 2, c: 5 }, // Porco with k
  "porko dio": { s: 2, c: 5 }, // Porco Dio with k
  "porka madonna": { s: 2, c: 5 }, // Porca Madonna with k
  "djo porko": { s: 2, c: 5 }, // Dio porco with k and j
  "djo bestia": { s: 2, c: 5 }, // Dio bestia with j
  "djo kane": { s: 2, c: 5 }, // Dio cane with j and k
  "mertha": { s: 2, c: 5 }, // Merda with th
  "caxo": { s: 2, c: 5 }, // Cazzo with x
  "caxzo": { s: 2, c: 5 }, // Cazzo with x variant
  "stroonzo": { s: 2, c: 5 }, // Stronzo stretched
  "coione": { s: 2, c: 5 }, // Coglione simplified
  "cojoni": { s: 2, c: 5 }, // Coglioni simplified
  "koioni": { s: 2, c: 5 }, // Coglioni with k
  "vaffa": { s: 2, c: 5 }, // Vaffanculo abbreviated
  "vaffa'": { s: 2, c: 5 }, // Vaffanculo abbreviated with apostrophe
  "vaffan": { s: 2, c: 5 }, // Vaffanculo abbreviated
  "vaff": { s: 2, c: 5 }, // Vaffanculo very abbreviated
  "fanculo": { s: 2, c: 5 }, // Vaffanculo shortened
  "fancul0": { s: 2, c: 5 }, // Fanculo with 0
  "f4nculo": { s: 2, c: 5 }, // Fanculo with 4
  "f@nculo": { s: 2, c: 5 }, // Fanculo with @
  "a'fanculo": { s: 2, c: 5 }, // To hell (apostrophe variant)
  "minxia": { s: 2, c: 5 }, // Minchia with x
  "minkya": { s: 2, c: 5 }, // Minchia with k and y
  "str0nza": { s: 2, c: 5 }, // Stronza with 0
  "str0nz4": { s: 2, c: 5 }, // Stronza with 0 and 4
  "z0ccol4": { s: 2, c: 5 }, // Zoccola with 0 and 4
  "b4stardo": { s: 3, c: 5 }, // Bastardo with 4
  "b4st4rdo": { s: 3, c: 5 }, // Bastardo with 4s

  // ========================================
  // === EXPANSION: Augmentatives, diminutives, and variations ===
  // ========================================
  "cazzona": { s: 4, c: 4 }, // Big dick (fem, augmentative)
  "cazzacci": { s: 1, c: 4 }, // Ugly dicks (pejorative plural)
  "stronzettino": { s: 3, c: 4 }, // Tiny turd (double diminutive)
  "stronzate": { s: 1, c: 4 }, // Stupid things (plural)
  "stronzitudine": { s: 3, c: 4 }, // Turd-ness (ironic formation)
  "coglionate": { s: 1, c: 4 }, // Stupid things (plural)
  "coglionaccio": { s: 1, c: 4 }, // Big idiot (augmentative pejorative)
  "puttanate": { s: 5, c: 4 }, // Whore-ish things / nonsense (plural)
  "puttanaccia": { s: 1, c: 4 }, // Big ugly whore (pejorative)
  "troiata": { s: 5, c: 4 }, // Whore-ish act / nonsense
  "troiate": { s: 5, c: 4 }, // Whore-ish acts (plural)
  "troiaccia": { s: 1, c: 4 }, // Big ugly whore (pejorative)
  "troietta": { s: 5, c: 4 }, // Little whore (diminutive)
  "zoccolone": { s: 3, c: 4 }, // Big slut (augmentative)
  "zoccolata": { s: 3, c: 4 }, // Slutty act
  "zoccoletta": { s: 3, c: 4 }, // Little slut (diminutive)
  "bastardello": { s: 3, c: 4 }, // Little bastard (diminutive)
  "bastardaccio": { s: 1, c: 4 }, // Ugly bastard (pejorative)
  "bastardaggine": { s: 3, c: 4 }, // Bastardy
  "cornutone": { s: 3, c: 4 }, // Big cuckold (augmentative)
  "cornutello": { s: 3, c: 4 }, // Little cuckold (diminutive)
  "cornutaccio": { s: 1, c: 4 }, // Ugly cuckold (pejorative)
  "cornutazza": { s: 1, c: 4 }, // Ugly cuckold (fem pejorative)
  "figliadiputtana": { s: 5, c: 4 }, // Daughter of a whore (one word)
  "figliodiputtana": { s: 5, c: 5 }, // Son of a whore (one word)
  "figlidiputtana": { s: 5, c: 4 }, // Sons of whores (one word)
  "porcomadonna": { s: 3, c: 4 }, // PorcoMadonna (one word)
  "porcamadonna": { s: 3, c: 4 }, // PorcaMadonna (one word)
  "diobestia": { s: 3, c: 4 }, // DioBestia (one word)
  "diomaiale": { s: 3, c: 4 }, // DioMaiale (one word)
  "dioboia": { s: 3, c: 4 }, // DioBoia (one word)
  "dioladro": { s: 3, c: 4 }, // DioLadro (one word)
  "diomerda": { s: 3, c: 4 }, // DioMerda (one word)
  "cristobestia": { s: 3, c: 4 }, // CristoBestia (one word)
  "cristocane": { s: 3, c: 4 }, // CristoCane (one word)
  "madonnaporco": { s: 3, c: 4 }, // MadonnaPorco (one word)
  "madonnaputtana": { s: 3, c: 4 }, // MadonnaPuttana (one word)
  "madonnatroia": { s: 3, c: 4 }, // MadonnaTrioa (one word)
  "madonnazoccola": { s: 3, c: 4 }, // MadonnaZoccola (one word)
  "madonnaladra": { s: 3, c: 4 }, // MadonnaLadra (one word)

  // ========================================
  // === EXPANSION: Additional vulgar expressions ===
  // ========================================
  "succhiamelo": { s: 3, c: 4 }, // Suck it for me
  "leccapalle": { s: 3, c: 4 }, // Ball licker / sycophant
  "leccapiedi": { s: 3, c: 4 }, // Foot licker / sycophant
  "baciapile": { s: 3, c: 4 }, // Battery kisser / religious hypocrite
  "ruffiana": { s: 3, c: 4 }, // Brown-noser (fem)
  "paraculo": { s: 3, c: 4 }, // Ass-coverer / opportunist
  "paracul0": { s: 3, c: 5 }, // Paraculo with 0
  "paracula": { s: 3, c: 4 }, // Opportunist (fem)
  "lecchini": { s: 3, c: 4 }, // Lickers / sycophants (plural)
  "lecchina": { s: 3, c: 4 }, // Licker (fem) / sycophant
  "mangia cazzi": { s: 4, c: 4 }, // Dick eater
  "cacca merda": { s: 3, c: 5 }, // Poop shit (childish compound)
  "scoreggia": { s: 3, c: 4 }, // Fart
  "scoreggiare": { s: 3, c: 4 }, // To fart
  "scoreggione": { s: 3, c: 4 }, // Big farter
  "scoreggiare come un mulo": { s: 3, c: 4 }, // To fart like a mule
  "puzzare come un maiale": { s: 3, c: 4 }, // To stink like a pig
  "puzzare come una fogna": { s: 3, c: 4 }, // To stink like a sewer
  "puzzare di merda": { s: 3, c: 5 }, // To stink of shit
  "puzzone": { s: 3, c: 4 }, // Big stinker
  "puzzolente di merda": { s: 3, c: 5 }, // Stinking shit (compound)
  "fetente lurido": { s: 3, c: 4 }, // Filthy stinking
  "fetente schifoso": { s: 3, c: 4 }, // Disgusting stinking
  "lurido porco": { s: 3, c: 4 }, // Filthy pig
  "lurido verme": { s: 3, c: 4 }, // Filthy worm
  "sporco bastardo": { s: 3, c: 4 }, // Dirty bastard
  "sporco infame": { s: 3, c: 4 }, // Dirty infamous
  "schifosa lurida": { s: 3, c: 4 }, // Filthy disgusting (fem)
  "viscido porco": { s: 3, c: 4 }, // Slimy pig
  "brutta come la fame": { s: 1, c: 4 }, // Ugly as hunger
  "brutto come la morte": { s: 1, c: 4 }, // Ugly as death
  "brutto come il peccato": { s: 1, c: 4 }, // Ugly as sin
  "brutto come un rospo": { s: 1, c: 4 }, // Ugly as a toad
  "cesso con le gambe": { s: 3, c: 4 }, // Toilet with legs
  "vomitevole": { s: 3, c: 4 }, // Vomit-worthy
  "rivoltante come la merda": { s: 3, c: 5 }, // Revolting as shit
  "fottitevi": { s: 3, c: 5 }, // Fuck yourselves
  "fottitelo": { s: 3, c: 5 }, // Fuck it yourself
  "ti fotto": { s: 3, c: 5 }, // I'll fuck you
  "vi fotto": { s: 3, c: 5 }, // I'll fuck you all
  "vi fotto tutti": { s: 3, c: 5 }, // I'll fuck all of you
  "ti scopo viva": { s: 3, c: 5 }, // I'll fuck you alive (fem)
  "ti scopo morta": { s: 3, c: 5 }, // I'll fuck you dead (fem)
  "ti monto": { s: 3, c: 4 }, // I'll mount you
  "ti sbatto": { s: 3, c: 4 }, // I'll bang you
  "ti chiavo": { s: 3, c: 5 }, // I'll fuck you (variant)
  "ti trombo": { s: 3, c: 5 }, // I'll fuck you (slang)
  "ti prendo a calci in culo": { s: 3, c: 4 }, // I'll kick your ass
  "ti prendo a pugni": { s: 3, c: 4 }, // I'll punch you
  "ti spacco la faccia": { s: 3, c: 4 }, // I'll smash your face
  "ti spacco il culo": { s: 3, c: 4 }, // I'll smash your ass
  "ti faccio nero": { s: 3, c: 4 }, // I'll beat you black
  "ti faccio a pezzi": { s: 3, c: 4 }, // I'll tear you apart
  "ti faccio un culo a strisce": { s: 3, c: 4 }, // I'll make your ass striped
  "ti faccio il culo a cappello": { s: 3, c: 4 }, // I'll make your ass into a hat
  "ti faccio il culo come una O": { s: 3, c: 4 }, // I'll make your ass like an O
  "ti mangio vivo": { s: 3, c: 4 }, // I'll eat you alive
  "ti strozzo": { s: 3, c: 4 }, // I'll strangle you
  "ti strangolo": { s: 3, c: 4 }, // I'll strangle you (variant)
  "ti smonto": { s: 3, c: 4 }, // I'll disassemble you
  "ti faccio secco": { s: 3, c: 4 }, // I'll make you dry / kill you

  // ========================================
  // === EXPANSION: Umbrian dialect profanity ===
  // ========================================
  "cacadubbi": { s: 3, c: 5 }, // Doubt shitter / indecisive (Umbrian)
  "fijo de 'na gran puttana": { s: 5, c: 4 }, // Son of a great whore (Umbrian)
  "porco d'un dio": { s: 3, c: 4 }, // Pig of a God (Umbrian blasphemy)
  "dio de un porco": { s: 3, c: 4 }, // God of a pig (Umbrian blasphemy)

  // ========================================
  // === EXPANSION: More derogatory terms ===
  // ========================================
  "sottospecie": { s: 3, c: 4 }, // Sub-species
  "sottospecie di merda": { s: 3, c: 5 }, // Sub-species of shit
  "sottospecie di uomo": { s: 3, c: 4 }, // Sub-species of man
  "sottospecie di donna": { s: 3, c: 4 }, // Sub-species of woman
  "rifiuto umano": { s: 3, c: 4 }, // Human refuse
  "rifiuto della società": { s: 3, c: 4 }, // Society's refuse
  "feccia della società": { s: 3, c: 4 }, // Dregs of society
  "feccia": { s: 3, c: 4 }, // Dregs
  "scarto": { s: 3, c: 4 }, // Reject / waste
  "scarto umano": { s: 3, c: 4 }, // Human waste
  "verme schifoso": { s: 3, c: 4 }, // Disgusting worm
  "vermicello": { s: 3, c: 4 }, // Little worm
  "verminoso": { s: 3, c: 4 }, // Worm-infested
  "scarafaggio umano": { s: 4, c: 4 }, // Human cockroach
  "parassita": { s: 3, c: 4 }, // Parasite
  "parassita della società": { s: 3, c: 4 }, // Society's parasite
  "sanguisuga schifosa": { s: 3, c: 4 }, // Disgusting leech
  "serpente velenoso": { s: 3, c: 4 }, // Poisonous snake
  "jena": { s: 3, c: 4 }, // Hyena
  "maiale schifoso": { s: 3, c: 4 }, // Disgusting pig
  "maiale lurido": { s: 3, c: 4 }, // Filthy pig
  "bestione": { s: 3, c: 4 }, // Big beast
  "ignorantone": { s: 3, c: 4 }, // Big ignorant
  "ignorantona": { s: 3, c: 4 }, // Big ignorant (fem)
  "cafona": { s: 3, c: 4 }, // Boor (fem)
  "zoticone": { s: 3, c: 4 }, // Big boor
  "zoticona": { s: 3, c: 4 }, // Big boor (fem)
  "buzzurrata": { s: 3, c: 4 }, // Barbaric act
  "tanghero": { s: 3, c: 4 }, // Boor / lout
  "bifolco": { s: 3, c: 4 }, // Yokel
  "villano": { s: 3, c: 4 }, // Peasant / rude person
  "villana": { s: 3, c: 4 }, // Peasant (fem) / rude
  "villanaccio": { s: 3, c: 4 }, // Big rude peasant
  "cafone di merda": { s: 3, c: 5 }, // Shit boor
  "bifolco di merda": { s: 3, c: 5 }, // Shit yokel
  "villano di merda": { s: 3, c: 5 }, // Shit peasant
  "contadino di merda": { s: 3, c: 5 }, // Shit farmer (derogatory)
  "montanaro di merda": { s: 3, c: 5 }, // Shit mountain dweller (derogatory)
  "provincialotto": { s: 3, c: 4 }, // Provincial / narrow-minded
  "paesano di merda": { s: 3, c: 5 }, // Shit villager (derogatory)

  // ========================================
  // === EXPANSION: More Sardinian expanded profanity ===
  // ========================================
  "a funtana de su diaulu": { s: 3, c: 4 }, // The devil's fountain (Sardinian curse)
  "arroganteddu": { s: 3, c: 4 }, // Little arrogant (Sardinian)
  "babbu mannu": { s: 1, c: 4 }, // Big idiot (Sardinian)
  "brutta bestia": { s: 1, c: 4 }, // Ugly beast (Sardinian)
  "chi t'at fatu": { s: 3, c: 4 }, // Who made you (Sardinian insult)
  "culu de pedra": { s: 3, c: 4 }, // Stone ass (Sardinian)
  "figiu de bagassa": { s: 5, c: 5 }, // Son of a whore (Sardinian)
  "is corrus de babbu tuu": { s: 1, c: 4 }, // The horns of your father (Sardinian)
  "merda de bacca": { s: 3, c: 5 }, // Cow shit (Sardinian)
  "porcandria": { s: 3, c: 4 }, // Piggishness (Sardinian)
  "pudda": { s: 1, c: 4 }, // Chicken / coward (Sardinian)
  "puddu": { s: 3, c: 4 }, // Chicken (masc, Sardinian)
  "puttanazza": { s: 5, c: 4 }, // Big whore (Sardinian variant)
  "scimpru": { s: 1, c: 4 }, // Idiot (Sardinian)
  "tontu": { s: 1, c: 4 }, // Stupid (Sardinian)
  "tonta": { s: 1, c: 4 }, // Stupid (fem, Sardinian)
};

export default italianBadWords;

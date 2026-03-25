// src/languages/spanish-words.ts

/**
 * Spanish profanity words list
 * Contains common profanities, insults, and offensive terms. Includes variations.
 * Covers terms common in both Spain and Latin America, though regional differences exist.
 * ⚠️ Warning: This file contains explicit language in Spanish
 */
const _d: Record<string, [number, number]> = {
  // ========================================
  // === Core Profanities & Genitalia =====
  // ========================================
  "mierda": [3, 4], // Shit
  "joder": [4, 5], // Fuck (verb/interjection)
  "puta": [3, 4], // Whore, bitch (fem.) / Fuck (interjection)
  "puto": [3, 4], // Male whore, faggot (derogatory), fucking (adjective)
  "coño": [2, 3], // Cunt (vulgar), Damn/Fuck (interjection - common in Spain)
  "cojones": [4, 4], // Balls (vulgar), Guts
  "polla": [4, 4], // Dick, cock (vulgar - common in Spain)
  "verga": [3, 4], // Dick, cock (vulgar - common in LatAm)
  "picha": [4, 4], // Dick, cock (vulgar - regional)
  "cipote": [4, 4], // Dick, cock (vulgar - Spain)
  "carajo": [4, 4], // Dick (vulgar), Hell/Damn (interjection)
  "culo": [3, 4], // Ass, butt
  "teta": [4, 3], // Tit, boob
  "tetas": [4, 3], // Tits, boobs
  "chocho": [5, 5], // Pussy, cunt (vulgar - Spain)
  // "concha": [5, 5], // Pussy, cunt (vulgar - LatAm, can be innocuous shell in Spain) — false positive: common English first name, also means "shell"
  "capullo": [1, 4], // Asshole, idiot (lit. cocoon/foreskin - Spain)
  "gilipollas": [1, 4], // Asshole, jerk, idiot (vulgar - Spain)
  "cabrón": [3, 4], // Bastard, asshole, cuckold (male)
  "cabrona": [4, 3], // Bitch, asshole (female)
  "hostia": [4, 5], // Host (religious), Damn/Fuck/Shit/Hit (interjection/noun - Spain)
  "ostia": [4, 5], // Common misspelling of hostia
  "pendejo": [3, 4], // Asshole, idiot, dumbass (LatAm - very common), Pubic hair (Spain - rare)
  "pendeja": [3, 3], // Fem. of pendejo
  "boludo": [1, 3], // Idiot, dumbass (Arg, Uru - can be informal/friendly too)
  "boluda": [1, 3], // Fem. of boludo
  "pelotudo": [2, 3], // Stronger version of boludo (Arg, Uru)
  "pelotuda": [2, 3], // Fem. of pelotudo

  // ========================================
  // === Variations & Related Terms =======
  // ========================================
  // --- Mierda ---
  "mierdoso": [3, 4],
  "mierdosa": [3, 5], // Shitty
  "puta mierda": [3, 5], // Fucking shit
  "comer mierda": [3, 5], // Eat shit
  "una mierda": [3, 5], // Like shit / Worthless
  "vete a la mierda": [3, 5], // Go to hell / Fuck off
  // --- Joder ---
  "jodido": [3, 4],
  "jodida": [3, 5], // Fucked, screwed, difficult
  "jódete": [3, 5], // Fuck you / Screw you
  "que te jodan": [3, 5], // Fuck you / Screw you (plural/formal)
  "no me jodas": [3, 5], // Don't fuck with me / No kidding?!
  "jodienda": [3, 4], // Annoyance, bother
  "joderse": [3, 4], // To get screwed / To have to suck it up
  // --- Puta / Puto ---
  "putita": [3, 4],
  "putito": [5, 4], // Little whore/faggot (diminutive, still offensive)
  "putazo": [3, 4], // Big hit / Slur for gay man (LatAm)
  "putero": [5, 4], // Whoremonger
  "putería": [5, 4], // Whorehouse / Whore behavior
  "putear": [3, 4], // To curse someone out, to treat badly
  "hijo de puta": [5, 5], // Son of a bitch
  "hija de puta": [3, 4], // Daughter of a bitch
  "putamadre": [3, 4],
  "puta madre": [5, 5], // Motherfucker / Fucking awesome (dual use)
  "de puta madre": [3, 5], // Fucking great
  "ni puto caso": [3, 5], // Paying no fucking attention
  // --- Coño / Cojones ---
  "cojonudo": [3, 4],
  "cojonuda": [4, 5], // Fucking great, ballsy (Spain)
  "acojonado": [3, 4],
  "acojonada": [3, 5], // Scared shitless (Spain)
  "hasta los cojones": [4, 4], // Fed up (lit. up to the balls - Spain)
  "tócate los cojones": [3, 4], // Expression of disbelief/annoyance (Spain)
  "del coño": [3, 5], // Shitty, annoying (Spain)
  // --- Polla / Verga / Picha / etc. ---
  "pollas en vinagre": [3, 4], // Nonsense phrase (Spain)
  "me importa una polla": [3, 5], // I don't give a fuck (Spain)
  "me importa una verga": [3, 5], // I don't give a fuck (LatAm)
  "vergazo": [4, 4], // Big hit with a dick-like object / Big dick (LatAm)
  "valer verga": [3, 4], // To be worthless (LatAm)
  "chupar polla": [4, 4], // Suck dick (Spain)
  "chupar verga": [4, 4], // Suck dick (LatAm)
  "mamahuevo": [4, 4], // Cocksucker (LatAm - very vulgar)
  "güevo": [3, 4],
  "guevo": [4, 4], // Egg / Ball (testicle - LatAm slang)
  "huevón": [1, 4],
  "huevona": [1, 4], // Lazy / Stupid / Guy (LatAm - varies by country)
  // --- Culo ---
  "gilipuertas": [1, 4], // Idiot, jerk (Spain)
  "partirse el culo": [3, 4], // Laugh your ass off
  "cara de culo": [3, 4], // Ass-face (sour expression)
  " lameculos": [3, 4], // Ass-kisser
  "patada en el culo": [3, 4], // Kick in the ass
  // --- Cabrón / Cabrona ---
  "cabronazo": [3, 4],
  "cabronaza": [3, 4], // Big asshole/bastard
  "cabronada": [4, 5], // A dick move, a shitty action
  // --- Hostia ---
  "hostia puta": [3, 5], // Fucking hell (Spain)
  "mala hostia": [3, 4], // Bad mood / Bad intention (Spain)
  "darse una hostia": [3, 4], // To crash / To hit oneself hard (Spain)
  "ser la hostia": [3, 5], // To be the shit / To be awesome (Spain)
  // --- Gilipollas / Capullo ---
  "gilipollez": [1, 4], // Stupidity, bullshit (Spain)
  "agilipollado": [3, 4], // Acting like a gilipollas (Spain)
  // --- Pendejo / Boludo / Pelotudo ---
  "pendejada": [1, 4], // Stupidity, bullshit (LatAm)
  "boludez": [1, 4], // Stupidity, nonsense (Arg, Uru)
  "pelotudez": [1, 4], // Stupidity, nonsense (stronger - Arg, Uru)

  // ========================================
  // === Insults (Stupidity, etc.) ========
  // ========================================
  "tonto": [1, 4],
  "tonta": [1, 4], // Idiot, fool (common, less vulgar)
  "tonto del culo": [1, 4], // Fucking idiot (vulgar)
  "idiota": [1, 4], // Idiot (common)
  "imbécil": [1, 4], // Imbecile (common)
  "estúpido": [1, 4],
  "estúpida": [1, 4], // Stupid
  "subnormal": [1, 4], // Retarded (highly offensive)
  "retrasado": [1, 4],
  "retrasada": [1, 4], // Retarded (highly offensive)
  "mongólico": [1, 4],
  "mongólica": [1, 4], // Derogatory term for Down syndrome, used as insult
  "mongolo": [1, 4],
  "mongola": [1, 4], // Shortened version
  "lerdo": [1, 4],
  "lerda": [1, 4], // Slow-witted, dull
  "memo": [1, 4],
  "mema": [1, 4], // Dumb,傻瓜 (Spain)
  // "bobo": [1, 4], // commented out — used in English sociology
  // "boba": [1, 4], // commented out — "boba tea" false positive in English
  "zopenco": [1, 4],
  "zopenca": [1, 4], // Blockhead, dunce
  "tarado": [1, 4],
  "tarada": [1, 4], // Freak, weirdo / Retarded (offensive)
  "cretino": [1, 4],
  "cretina": [1, 4], // Cretin, idiot
  "necio": [1, 4],
  "necia": [1, 4], // Foolish, stupid

  // ========================================
  // === Offensive Slurs (Sexuality, Race, etc.) ===
  // ========================================
  "maricón": [5, 4], // Faggot (very offensive)
  "marica": [5, 4], // Faggot (offensive, sometimes reclaimed/less harsh)
  "maricón de mierda": [5, 5], // Fucking faggot
  "bollera": [5, 4], // Dyke (offensive - Spain)
  "tortillera": [5, 4], // Dyke (offensive - LatAm)
  "sudaca": [5, 4], // Derogatory for South American (Spain)
  "machupichu": [5, 4], // Derogatory for indigenous South American (Spain)
  "gringo": [3, 3], // Derogatory/neutral for American/foreigner (LatAm)
  "gabacho": [5, 4], // Derogatory for French person (Spain)
  "negrata": [5, 4], // Derogatory for Black person (offensive)
  // "moro": [5, 4], // Moor, derogatory for North African/Arab (Spain) — false positive: English surname, "moro rice"

  // ========================================
  // === Other Offensive Terms & Insults ==
  // ========================================
  "bastardo": [3, 4],
  "bastarda": [3, 4], // Bastard
  "mamón": [1, 4],
  "mamona": [1, 4], // Asshole, jerk (lit. sucker)
  "payaso": [1, 4],
  "payasa": [1, 4], // Clown (used as idiot)
  "lameculos": [3, 4], // Ass-kisser
  "baboso": [1, 4],
  "babosa": [1, 4], // Slimy person, creep (lit. drooler)
  "perra": [1, 4], // Bitch (dog, used for women)
  "zorra": [1, 4], // Fox / Slut, bitch (very common)
  "bruja": [1, 4], // Witch
  "malparido": [1, 4],
  "malparida": [1, 4], // Badly born (lit.), like son of a bitch (LatAm)
  "hpt": [1, 4],
  "hijueputa": [5, 5], // Abbreviations/variations of Hijo de Puta (LatAm)
  "gonorrea": [1, 4], // Gonorrhea (used as a severe insult in Colombia)
  "sapo": [1, 4], // Toad / Snitch (LatAm)
  "rata": [1, 4], // Rat / Thief
  "cerdo": [1, 4],
  "cerda": [1, 4], // Pig / Dirty person
  "marrano": [1, 4],
  "marrana": [1, 4], // Pig / Dirty person
  "puerco": [1, 4],
  "puerca": [1, 4], // Pig / Dirty person
  "muérete": [5, 5], // Die
  "chiflado": [1, 4],
  "chiflada": [1, 4], // Crazy, nuts
  // "loco": [1, 4], // commented out — commonly used in English
  // "loca": [1, 4], // commented out — commonly used in English
  "pinche": [3, 5], // Fucking (adjective, very common in Mexico)
  "culero": [3, 4], // Asshole (Mexico, vulgar)
  "chingar": [3, 5], // To fuck / To annoy / To screw up (Mexico, very versatile & vulgar)
  "chinga tu madre": [3, 4], // Fuck your mother (Mexico)
  "chingadera": [3, 5], // Bullshit, junk (Mexico)
  "weon": [1, 4],
  "hueón": [1, 4], // Dude / Idiot (Chile, common, versatile)
  "concha tu madre": [1, 4],
  "ctm": [3, 4], // Your mother's cunt (LatAm, very offensive)
  "la concha de tu hermana": [5, 5], // Your sister's cunt (Arg, very offensive)
  "forro": [1, 4],
  "forra": [1, 4], // Condom / Asshole, idiot (Arg)
  "gato": [1, 4], // Cat / Low-life servant / Wannabe (Arg)
  "grasiento": [1, 4],
  "grasienta": [1, 4], // Greasy / Low-class, tasteless
  "guarro": [1, 4],
  "guarra": [1, 4], // Filthy, disgusting person (Spain)
  "sinvergüenza": [1, 4], // Shameless person
  "caradura": [1, 4], // Cheeky, shameless person
  "chulo": [2, 2], // Pimp / Cocky (Spain) / Cool (Mexico)
  "chula": [1, 4], // Fem. of chulo
  "malnacido": [1, 4],
  "malnacida": [1, 4], // Badly born (similar to malparido)

  // ========================================
  // === Bodily Functions (Vulgar Context) ==
  // ========================================
  "mear": [3, 4], // To piss
  "meo": [3, 4], // Piss
  "cagar": [3, 5], // To shit
  "cagada": [3, 5], // A fuck-up, mess / Shit (noun)
  "cagón": [1, 4],
  "cagona": [1, 4], // Coward (lit. shitter) / Whiny
  "pedo": [1, 3], // Fart / Drunkenness (Mexico/LatAm)
  "tirarse un pedo": [3, 4], // To fart
  "potar": [1, 3], // To vomit (Spain slang)
  "vomitar": [1, 1], // To vomit
  "moco": [1, 2], // Snot
  "escupir": [1, 1], // To spit
  "semen": [4, 3], // Semen
  "corrida": [1, 1], // Cumshot / Orgasm (Spain) / Run (standard)
  "paja": [3, 4], // Wank, handjob (lit. straw)
  "hacerse una paja": [4, 4], // To masturbate (male)
  "dedos": [1, 1], // Fingers (used in sexual context)
  "follar": [3, 5], // To fuck (Spain - very direct)
  // "coger": [3, 5], // To take/grab (Standard) / To fuck (LatAm - VERY common, use with caution!) — false positive: standard Spanish verb "to take" in Spain
  "singar": [3, 5], // To fuck (vulgar, less common)
  "culear": [3, 5], // To fuck (from culo - vulgar, LatAm)
  "cachondo": [3, 4],
  "cachonda": [3, 4], // Horny (Spain)
  "caliente": [1, 1], // Hot (temperature) / Horny (LatAm)

  // ========================================
  // === Mild / Contextually Offensive ====
  // ========================================
  "jolin": [1, 4], // Darn, gosh (mild version of joder - Spain)
  "jope": [1, 4], // Darn, gosh (mild version of joder - Spain)
  "miercoles": [2, 3], // Wednesday (euphemism for mierda)
  "ostras": [2, 3], // Oysters (euphemism for hostia - Spain)
  "rayos": [2, 3], // Lightning bolts (euphemism for carajo/etc.)
  "demontre": [2, 3], // Demon (euphemism)
  "fastidiar": [2, 3], // To annoy (can be euphemism for joder)
  "lavate la boca": [1, 3], // Wash your mouth (telling someone off)
  "mamaverga": [4, 4], // Cocksucker
  "pajero": [3, 4], // Wanker (Arg)
  "pajera": [3, 4], // Fem. wanker
  "conchesumadre": [5, 5], // Your mother's cunt (Peru/Chile)
  "culiao": [3, 5], // Ass-fucked (Chilean)
  "culeado": [3, 5], // Fucked in the ass
  "conchudo": [5, 5], // Shameless / Cunt-like
  "la concha de tu madre": [5, 5], // Your mother's cunt (Arg)
  "reconcha de tu madre": [3, 4], // Emphatic variant
  "la puta que te parió": [5, 4], // The whore who bore you

  // Additional Latin American regional profanity
  "chingada": [3, 5], // Fucked (Mexico)
  "chingado": [3, 5], // Fucked (Mexico)
  "chingón": [3, 5], // Badass / Fucker (Mexico)
  "chingona": [3, 5], // Badass / Fucker fem (Mexico)
  "chingue su madre": [3, 5], // Fuck his mother (Mexico)
  "a la verga": [4, 5], // To the dick / Fuck off (Mexico)
  "no mames": [3, 4], // Don't suck / No way (Mexico vulgar)
  "mamada": [4, 5], // Blowjob / Bullshit (Mexico)
  "mamadas": [3, 4], // Plural
  "vergón": [4, 4], // Big-dicked (LatAm)
  "culera": [3, 4], // Fem of culero (Mexico)
  "pinche pendejo": [1, 4], // Fucking idiot (Mexico)
  "pinche puta": [5, 5], // Fucking whore (Mexico)
  "gonorreas": [3, 4], // Plural (Colombia)
  "malparidos": [3, 4], // Plural (Colombia)
  "hijuemadre": [2, 3], // Son of a mother (Colombia euphemism)
  "marica hijueputa": [3, 4], // Compound (Colombia)
  "carepicha": [4, 4], // Dick face (Costa Rica)
  "careculo": [3, 4], // Ass face (Venezuela)
  "coño de tu madre": [5, 5], // Your mother's cunt (Venezuela)
  "coñazo": [3, 4], // Big hit / Damn (Venezuela)
  "güevón": [1, 4], // Idiot (Venezuela)
  "mamaguevo": [4, 4], // Cocksucker (Venezuela/Dominican)
  "pajúo": [1, 4], // Idiot (Venezuela)
  "cachudo": [3, 4], // Cuckold (Chile)
  "conchetumadre": [5, 5], // Your mother's cunt (Chile)
  // "wea": [3, 5], // Thing / Bullshit (Chile) — commented out: "we a(re)" triggers via separator bridging
  "weón": [1, 4], // Dude / Idiot (Chile)
  "weona": [1, 4], // Fem (Chile)
  "aweonao": [1, 4], // Fucking idiot (Chile)
  "aweonada": [1, 4], // Fem (Chile)
  "sacowea": [3, 4], // Ballbreaker (Chile)
  "maraco": [3, 4], // Faggot (Chile)
  "chucha": [5, 5], // Cunt / Damn (Peru/Chile)
  "chuchatumadre": [5, 5], // Your mother's cunt (Peru)
  "huevada": [3, 5], // Bullshit (Peru)
  "cojudo": [1, 4], // Idiot (Peru)
  "cojuda": [1, 4], // Fem (Peru)
  "pitudo": [4, 4], // Big-dicked (Peru)
  "cachero": [3, 5], // Fucker (Peru)
  "recontra cojudo": [1, 4], // Super idiot (Peru)

  // ========================================
  // === More Mexican Profanity ============
  // ========================================
  "a huevo": [3, 4], // Hell yeah / By force (Mexico)
  "vale verga": [3, 4], // It's worthless (Mexico)
  "valió verga": [3, 5], // It went to shit (Mexico)
  "vergas": [4, 4], // Dicks (Mexico)
  "me vale madre": [3, 5], // I don't give a fuck (Mexico)
  "me vale verga": [3, 5], // I don't give a fuck (Mexico, stronger)
  "no manches": [1, 4], // No way / Don't stain (Mexico, mild)
  "chingadazo": [3, 5], // Hard hit / Fucking hit (Mexico)
  "hijo de la chingada": [3, 5], // Son of the fucked (Mexico)
  "la chingada": [3, 5], // The fucked / Hell (Mexico)
  "vete a la chingada": [3, 4], // Go to hell (Mexico)
  "qué chingados": [3, 5], // What the fuck (Mexico)
  "ni madres": [3, 5], // No fucking way (Mexico)
  "en la madre": [3, 4], // In the mother / Damn (Mexico)
  "poca madre": [3, 4], // Shameless / Awesome (Mexico, dual use)
  "un desmadre": [3, 5], // A clusterfuck (Mexico)
  "madrazo": [3, 4], // Hard hit (Mexico)
  "a toda madre": [3, 5], // Fucking awesome (Mexico)
  "hijo de su puta madre": [5, 4], // Son of his whore mother
  "pinche cabrón": [3, 4], // Fucking bastard (Mexico)
  "pinche culero": [3, 5], // Fucking asshole (Mexico)
  "pinche güey": [1, 4], // Fucking dude/idiot (Mexico)
  "güey": [1, 4], // Dude / Idiot (Mexico)
  "buey": [1, 4], // Ox / Idiot (Mexico, older spelling)
  "naco": [2, 3], // Tacky / Low-class person (Mexico)
  "naca": [2, 3], // Fem of naco
  "fresa": [1, 1], // Strawberry / Snob (Mexico)
  "manchado": [3, 5], // Stained / Fucked up (Mexico)
  "chingaquedito": [3, 5], // Sneaky fucker (Mexico)
  "maldito": [2, 3], // Damn / Cursed (Mexico/general)
  "maldita": [2, 3], // Fem of maldito
  "desgraciado": [2, 3], // Wretched / Bastard
  "desgraciada": [2, 3], // Fem
  "ojete": [3, 4], // Asshole (Mexico, lit. eyelet)
  "métetelo por el culo": [3, 4], // Shove it up your ass
  "cállate el hocico": [3, 4], // Shut your snout
  "lárgate a la verga": [3, 5], // Get the fuck out (Mexico)
  "tragaverga": [4, 4], // Dick swallower (Mexico)
  "tragaleche": [3, 4], // Cum swallower
  "lameverga": [4, 4], // Dick licker (Mexico)
  "pinche vieja": [3, 5], // Fucking woman (Mexico, derogatory)
  "pinche viejo": [3, 5], // Fucking old man (Mexico, derogatory)

  // ========================================
  // === More Argentine Profanity ==========
  // ========================================
  "boludo de mierda": [1, 4], // Fucking idiot (Argentina)
  "pelotudo de mierda": [3, 5], // Fucking asshole (Argentina)
  "la re concha": [5, 5], // The super cunt (Argentina, intensifier)
  "andá a la mierda": [3, 5], // Go to shit (Argentina)
  "sos un pelotudo": [1, 4], // You're a dumbass (Argentina)
  "la concha de la lora": [5, 5], // The parrot's cunt (Argentina, exclamation)
  "concha seca": [5, 5], // Dry cunt (Argentina, old woman insult)
  "chupame la pija": [4, 4], // Suck my dick (Argentina)
  "pija": [4, 4], // Dick (Argentina)
  "la puta que lo parió": [5, 4], // The whore who bore him
  "rompepelotas": [3, 4], // Ball breaker (Argentina)
  "hinchapelotas": [3, 4], // Ball sweller (annoying, Argentina)
  "pelotas": [4, 4], // Balls (Argentina)
  "en pelotas": [3, 4], // Naked / Broke (Argentina)
  "me chupa un huevo": [3, 5], // I don't give a fuck (lit. it sucks my egg, Argentina)
  "turro": [3, 4], // Thief / Asshole (Argentina)
  "turra": [3, 4], // Fem of turro
  "atorrante": [3, 4], // Scoundrel, lowlife (Argentina)
  // "gil": [1, 4], // commented out — common English name false positive
  "gila": [3, 4], // Fem of gil
  "gil de goma": [1, 4], // Rubber idiot (Argentina)
  "chupamedias": [3, 4], // Bootlicker (Argentina, lit. sock sucker)
  "cornudo": [3, 4], // Cuckold
  "cornuda": [3, 4], // Fem of cornudo
  "sorete": [3, 5], // Piece of shit (Argentina)
  "garcha": [4, 4], // Dick (Argentina)
  "garchame": [3, 5], // Fuck me (Argentina)
  "garchador": [3, 5], // Fucker (Argentina)
  "trola": [3, 4], // Slut (Argentina)
  "trolita": [3, 4], // Little slut (Argentina)
  // "pete": [4, 5], // Blowjob (Argentina) — false positive: common English first name
  "hacerle un pete": [4, 5], // To give a blowjob (Argentina)
  "ortiva": [3, 4], // Buzzkill / Snitch (Argentina)
  "cagador": [3, 4], // Cheater / Scammer (Argentina)
  "cagadora": [3, 4], // Fem
  "hijo de un camión de putas": [5, 4], // Son of a truckload of whores (Argentina)

  // ========================================
  // === More Colombian Profanity ==========
  // ========================================
  "pirobo": [3, 4], // Asshole / Faggot (Colombia, very vulgar)
  "piroba": [3, 4], // Fem of pirobo
  "gonorrea hijueputa": [3, 4], // Gonorrhea son of a bitch (Colombia)
  "malparido de mierda": [3, 5], // Shit badly-born (Colombia)
  "carechimba": [5, 5], // Cunt face (Colombia)
  "chimba": [5, 5], // Cunt / Cool (Colombia, dual use)
  "chimbo": [3, 5], // Fake / Shitty (Colombia)
  "guevón": [3, 4], // Already listed but also Colombia
  "lambon": [3, 4], // Suck-up (Colombia)
  "lambona": [3, 4], // Fem
  "sapear": [3, 4], // To snitch (Colombia)
  "culicagado": [3, 5], // Shit-assed (Colombia, immature person)
  "culicagada": [3, 4], // Fem
  "cachón": [3, 4], // Cuckold (Colombia)
  "arrecho": [3, 4], // Horny / Angry / Awesome (Colombia/Venezuela)
  "arrechera": [3, 4], // Horniness / Anger (Colombia/Venezuela)
  "hijueperra": [3, 4], // Son of a bitch (Colombia, lit. son of a dog)
  "perro hijueputa": [3, 4], // Dog son of a bitch (Colombia)
  "vergajo": [4, 4], // Dick / Whip (Colombia)
  "mondá": [4, 4], // Dick (Colombia)
  "ñero": [3, 4], // Low-class person (Colombia)
  "ñera": [3, 4], // Fem

  // ========================================
  // === Cuban Profanity ===================
  // ========================================
  "comepinga": [4, 4], // Dick eater (Cuba, very vulgar)
  "comemierda": [3, 5], // Shit eater (Cuba/general)
  "singao": [3, 5], // Fucked (Cuba)
  "singá": [3, 4], // Fem of singao (Cuba)
  "pinga": [4, 4], // Dick (Cuba/Caribbean)
  "pingón": [4, 4], // Big-dicked (Cuba)
  "tremenda pinga": [4, 5], // Tremendous dick / What the fuck (Cuba)
  "me cago en tu madre": [3, 5], // I shit on your mother (Cuba/Spain)
  "me cago en diez": [3, 5], // I shit on ten (Cuba/Spain, euphemism)
  "comerle el culo": [3, 4], // To eat someone's ass (Cuba)

  // ========================================
  // === Puerto Rican Profanity ============
  // ========================================
  "bicho": [4, 4], // Dick (Puerto Rico)
  "bichote": [4, 4], // Drug dealer / Big dick (Puerto Rico)
  "mamao": [1, 4], // Sucker / Idiot (Puerto Rico)
  "mamá bicho": [4, 4], // Dick sucker (Puerto Rico)
  "come mierda": [3, 5], // Shit eater (Puerto Rico variant)
  "canto de cabrón": [3, 4], // Huge bastard (Puerto Rico)
  "puñeta": [3, 4], // Wank / Damn (Puerto Rico/general)
  "puñetero": [3, 4], // Wanker / Annoying person
  "puñetera": [3, 4], // Fem
  "jodón": [3, 5], // Annoying fucker (Puerto Rico)
  "jodona": [3, 4], // Fem
  "lambón": [3, 4], // Ass-kisser (Puerto Rico/Caribbean)

  // ========================================
  // === Uruguayan / Rioplatense ===========
  // ========================================
  "botija": [1, 4], // Kid / Idiot (Uruguay)
  "papelón": [1, 4], // Embarrassment / Fool (Uruguay)
  "bardero": [3, 4], // Troublemaker (Uruguay/Argentina)
  "bardera": [3, 4], // Fem
  "loco de mierda": [3, 5], // Crazy fucker (Rioplatense)

  // ========================================
  // === More General / Pan-Hispanic =======
  // ========================================
  "chupapollas": [4, 4], // Cocksucker (Spain)
  "meapila": [3, 4], // Holy joe / Overly devout person (derogatory)
  "zorrón": [3, 4], // Big slut (augmentative)
  "putón": [5, 4], // Big whore (augmentative)
  "putona": [3, 4], // Fem of putón
  "piojoso": [1, 3], // Lousy (lit. lice-ridden)
  "piojosa": [1, 3], // Fem
  "asqueroso": [1, 3], // Disgusting
  "asquerosa": [1, 3], // Fem
  "pervertido": [2, 3], // Pervert
  "pervertida": [2, 3], // Fem
  "degenerado": [2, 3], // Degenerate
  "degenerada": [2, 3], // Fem
  "depravado": [2, 3], // Depraved
  "depravada": [2, 3], // Fem
  "miserable": [1, 2], // Miserable / Scum
  "descarado": [1, 3], // Shameless
  "descarada": [1, 3], // Fem
  "desvergonzado": [1, 3], // Shameless
  "desvergonzada": [1, 3], // Fem
  "traidor": [1, 2], // Traitor
  "traidora": [1, 2], // Fem
  "cobarde": [1, 4], // Coward
  "inútil": [1, 3], // Useless
  "parásito": [1, 2], // Parasite
  "escoria": [2, 3], // Scum, dregs
  "basura": [1, 2], // Trash, garbage (person)
  "lacra": [2, 3], // Scum / Scar
  "alimaña": [1, 3], // Vermin
  "sabandija": [1, 3], // Vermin, bug
  "engendro": [2, 3], // Monstrosity / Freak
  "adefesio": [1, 4], // Ugly/ridiculous person
  "esperpento": [1, 3], // Grotesque person
  "mamarracho": [1, 3], // Ridiculous person / Mess
  "fantoche": [1, 4], // Puppet / Pretentious fool
  "pelele": [1, 3], // Puppet / Spineless person
  "mequetrefe": [1, 3], // Good-for-nothing
  "mequeterfa": [1, 3], // Fem variant
  "mentecato": [1, 4], // Fool, simpleton
  "mentecata": [1, 4], // Fem
  "pazguato": [1, 3], // Simpleton, gawker
  "pazguata": [1, 3], // Fem
  "imbécil de mierda": [3, 5], // Fucking imbecile
  "estúpido de mierda": [1, 4], // Fucking stupid
  "cara de verga": [4, 4], // Dick face
  "cara de pinga": [4, 4], // Dick face (Caribbean)
  "cara de mierda": [3, 5], // Shit face
  "tragasables": [3, 4], // Sword swallower (sexual implication)
  "ramera": [5, 4], // Whore (literary/archaic)
  "furcia": [5, 4], // Whore (Spain)
  "fulana": [3, 4], // Hooker / So-and-so
  "buscona": [5, 4], // Gold digger / Prostitute
  "cualquiera": [3, 4], // Anyone / Easy woman (derogatory)
  "callejera": [5, 4], // Street woman (prostitute)
  "arrabalera": [3, 4], // From the slums / Coarse woman
  "golfa": [3, 4], // Slut (Spain)
  "lagarta": [3, 4], // Lizard / Scheming woman (Spain)
  "arpía": [3, 4], // Harpy / Shrew
  "víbora": [3, 4], // Viper / Two-faced person
  "sierpe": [3, 4], // Serpent / Nasty person
  "tarada de mierda": [3, 5], // Fucking weirdo
  "pedazo de mierda": [3, 5], // Piece of shit

  // ========================================
  // === Sexual Terms ======================
  // ========================================
  "coito": [4, 4], // Coitus
  "sodomía": [4, 4], // Sodomy
  "felación": [4, 5], // Fellatio
  "cunnilingus": [4, 3], // Cunnilingus
  "masturbar": [4, 4], // To masturbate
  "masturbarse": [4, 4], // To masturbate (reflexive)
  "pajear": [4, 4], // To wank (LatAm)
  "pajearse": [4, 4], // To wank oneself
  "correrse": [4, 4], // To cum (Spain)
  "venirse": [4, 4], // To cum (LatAm)
  "eyacular": [4, 4], // To ejaculate
  "orgasmo": [4, 4], // Orgasm
  "clítoris": [4, 4], // Clitoris
  "testículos": [4, 4], // Testicles
  "escroto": [4, 4], // Scrotum
  "prepucio": [4, 4], // Foreskin
  "glande": [4, 4], // Glans
  "erección": [4, 4], // Erection
  "empalmar": [4, 4], // To get hard (Spain slang)
  "empalmado": [4, 4], // Hard / Aroused (Spain)
  "empalmada": [4, 4], // Fem
  "tirar": [4, 5], // To throw / To fuck (LatAm)
  "tirarse a": [4, 5], // To fuck someone
  "echarse un polvo": [4, 4], // To have a shag (Spain)
  "polvo": [4, 4], // Dust / Shag (Spain)
  "un clavo": [4, 5], // A nail / A fuck (LatAm)
  "mojar": [4, 5], // To wet / To fuck (LatAm)
  "mojar el churro": [4, 5], // To dip the churro / To fuck (Mexico)
  // "meter": [3, 4], // To put in / To fuck — false positive: English measurement unit
  "meterla": [3, 5], // To put it in / To fuck
  "metérsela": [3, 4], // To put it in (reflexive)
  "penetrar": [3, 4], // To penetrate
  "sodomizar": [3, 4], // To sodomize
  "mamar": [4, 4], // To suckle / To suck dick (LatAm)
  "chupar": [3, 4], // To suck
  "lamer": [3, 4], // To lick
  "tragar": [3, 4], // To swallow
  "pene": [4, 4], // Penis
  "vagina": [4, 3], // Vagina
  // "ano": [3, 4], // Anus — commented out: collides with English "another", "anon", common in text
  "nalgas": [2, 3], // Buttocks
  "pompis": [1, 2], // Butt (childish)
  "pechos": [4, 4], // Breasts
  "chichis": [4, 4], // Boobs (Mexico)
  "lolas": [4, 4], // Boobs (Argentina)
  "gomas": [4, 4], // Boobs (Central America)
  "pezón": [3, 4], // Nipple
  "pezones": [3, 4], // Nipples
  "condón": [2, 2], // Condom
  "preservativo": [2, 2], // Condom (formal)
  "prostituta": [5, 4], // Prostitute
  "prostituto": [5, 4], // Male prostitute
  "burdel": [3, 4], // Brothel
  "prostíbulo": [3, 4], // Brothel
  "lupanar": [3, 4], // Brothel (literary)
  "proxeneta": [3, 4], // Pimp
  "cafiche": [3, 4], // Pimp (LatAm)
  "padrote": [3, 4], // Pimp (Mexico)
  "lenón": [3, 4], // Pimp (formal)
  "gigoló": [3, 4], // Gigolo
  "ninfómana": [3, 4], // Nymphomaniac
  "sátiro": [3, 4], // Satyr / Lecher
  "lujuria": [3, 4], // Lust
  "lujurioso": [3, 4], // Lustful
  "lascivo": [3, 4], // Lascivious
  "obsceno": [3, 4], // Obscene
  "pornografía": [3, 4], // Pornography
  "porno": [3, 4], // Porn

  // ========================================
  // === More Chingar Derivatives (Mexico) ==
  // ========================================
  "chingaderón": [3, 4], // Big piece of junk (Mexico)
  "chingaste": [3, 5], // You fucked up (Mexico)
  "chingué": [3, 5], // I fucked up (Mexico)
  "me chingué": [3, 4], // I got screwed (Mexico)
  "chingasos": [3, 4], // Blows, punches (Mexico)
  "chingalera": [3, 4], // Junk, crap (Mexico)
  "chinguero": [3, 5], // A lot of, shitload (Mexico)
  "chingativo": [3, 5], // Fucking annoying (Mexico)
  "rechingón": [3, 4], // Really badass (Mexico)
  "rechingona": [3, 4], // Fem really badass (Mexico)
  "rechingada": [3, 5], // Really fucked (Mexico)
  "echingadera": [3, 4], // Variant of chingadera (Mexico)
  "chingaderas": [3, 5], // Plural: bullshit things (Mexico)
  "hecho la chingada": [3, 4], // Done like crap (Mexico)

  // ========================================
  // === More Puta/Puto Compounds ==========
  // ========================================
  "putísima": [3, 5], // Most whorish (superlative)
  "putísimo": [3, 5], // Most whorish (masc superlative)
  "puterío": [5, 5], // Whorehouse atmosphere
  "putañero": [5, 5], // Whoremonger (variant)
  "reputísima": [3, 5], // Emphatic most whorish
  "reputísima madre": [5, 5], // Emphatic motherfucker
  "puta barata": [5, 5], // Cheap whore
  "re puta": [5, 5], // Super whore (Argentina)
  "re puta madre": [5, 5], // Super motherfucker (Argentina)
  "puta que te parió": [5, 5], // Whore that bore you
  "hijo de tu puta madre": [5, 5], // Son of your whore mother
  "hija de tu puta madre": [5, 5], // Daughter of your whore mother
  "gran puta": [5, 5], // Big whore
  "hijo de la gran puta": [5, 5], // Son of the great whore
  "reputa": [5, 5], // Emphatic whore
  "reputamadre": [5, 5], // Emphatic motherfucker
  "putada": [3, 5], // A shitty situation / dirty trick

  // ========================================
  // === More Mierda Compounds =============
  // ========================================
  "mierda seca": [3, 5], // Dry shit
  "tremenda mierda": [3, 5], // Tremendous shit
  "hecho mierda": [3, 5], // Wrecked / destroyed
  "hecha mierda": [3, 5], // Fem wrecked
  "de mierda": [3, 5], // Shitty (adjective)
  "mierda de persona": [3, 5], // Shit of a person
  "pura mierda": [3, 5], // Pure shit
  "más mierda": [3, 5], // More shit
  "mierdero": [3, 5], // Shithole
  "mierdecilla": [3, 5], // Little shit (diminutive)
  "tremendo mierda": [3, 5], // Tremendous shit (as person)

  // ========================================
  // === More Verga Compounds ==============
  // ========================================
  "vergacho": [4, 5], // Dickish (Mexico)
  "averga": [4, 5], // No way / dick-related exclamation (Mexico)
  "vergudo": [4, 5], // Big-dicked / badass
  "vergonzón": [4, 5], // Shameful-dicked
  "vergüeada": [3, 5], // Beating (Central America)
  "vergueada": [3, 5], // Beating variant
  "verguear": [3, 5], // To beat up (Central America)
  "verguearse": [3, 5], // To fight (Central America)
  "envergar": [4, 5], // To put the dick in
  "envergate": [3, 5], // Stick it in (vulgar command)
  "valeberga": [3, 5], // Worthless (Mexico slang, phonetic)
  "avergas": [3, 5], // No shit (Mexico exclamation)
  "verguiza": [3, 5], // Beating (Mexico)

  // ========================================
  // === More Culo Compounds ===============
  // ========================================
  "culiada": [3, 5], // Fucked in the ass (fem, Chile/Argentina)
  "culiado": [3, 5], // Fucked in the ass (masc)
  "enculado": [3, 5], // Sodomized / screwed
  "enculada": [3, 5], // Fem sodomized
  "culiar": [3, 5], // To fuck anally (LatAm)
  "culón": [3, 5], // Big-assed
  "culona": [3, 5], // Big-assed (fem)
  "culero de mierda": [3, 5], // Fucking asshole (Mexico)
  "culazo": [3, 5], // Big ass / great ass
  "reculiar": [3, 5], // To fuck again anally
  "hueleculo": [3, 5], // Ass sniffer
  "rascaculo": [3, 5], // Ass scratcher
  "culebrón": [1, 4], // Soap opera / coward (from culebra)

  // ========================================
  // === Dominican Slang ===================
  // ========================================
  "tíguere": [3, 4], // Street-smart guy / hustler (Dominican)
  "tigueraje": [3, 4], // Street behavior (Dominican)
  "singadera": [3, 5], // Fucking around (Dominican)
  "sinverguenza": [3, 4], // Shameless (Dominican variant)
  "coñazo de madre": [5, 5], // Motherfucking hit (Dominican)
  "mamagüevo": [3, 4], // Variant with diaeresis
  "mamagüevos": [3, 4], // Plural
  "desgraciáo": [3, 5], // Wretched (Dominican phonetic)
  "hijo e puta": [3, 5], // Son of a bitch (Dominican phonetic)
  "jediondo": [3, 4], // Stinky / annoying (Dominican)
  "pariguayo": [1, 4], // Loser / party watcher (Dominican)
  "lambeculo": [3, 4], // Ass licker (Dominican)
  "cuero": [5, 4], // Leather / whore (Dominican)
  "cuerúa": [3, 4], // Slut (Dominican)
  "grajo": [3, 4], // Armpit stink / stinky person (Dominican)
  "deguañangao": [1, 4], // Messed up / ugly (Dominican)
  "vaina": [1, 2], // Thing / damn thing (Dominican)
  "qué vaina": [3, 4], // What the hell (Dominican)
  "maldita vaina": [3, 4], // Damn thing (Dominican)

  // ========================================
  // === Ecuadorian Profanity ==============
  // ========================================
  "chuchamare": [5, 5], // Cunt mother (Ecuadorian)
  "longo": [3, 4], // Indigenous person (derogatory, Ecuador)
  "longa": [3, 4], // Fem indigenous (derogatory, Ecuador)
  "achachay": [1, 4], // Expression of cold / mild exclamation
  "ñaño": [3, 4], // Brother / dude (Ecuador, can be derogatory)
  "cagado de la risa": [3, 4], // Laughing your ass off (Ecuador)
  "verdugo": [3, 4], // Executioner / badass (Ecuador slang)
  "sorche": [1, 4], // Soldier / idiot (Ecuador)
  "manaburro": [1, 4], // Really stupid (Ecuador)

  // ========================================
  // === Bolivian Profanity ================
  // ========================================
  "k'arajo": [3, 4], // Damn (Bolivia, Quechua influence)
  "ch'enko": [3, 5], // Mess / clusterfuck (Bolivia)
  "birlocha": [3, 4], // Loose woman (Bolivia)
  "llokalla": [3, 4], // Kid / brat (Bolivia, Aymara)
  "jailón": [3, 4], // Snob / rich kid (Bolivia)
  "jailona": [3, 4], // Fem snob (Bolivia)
  "q'encha": [3, 4], // Bad luck / jinx person (Bolivia)
  "huevadas": [3, 5], // Bullshit (Bolivia)

  // ========================================
  // === Paraguayan Profanity ==============
  // ========================================
  "kurepí": [3, 4], // Pig-skinned (derogatory, Paraguay Guaraní)
  "tavy": [1, 4], // Stupid / dumb (Paraguay Guaraní)
  "ndéra": [3, 4], // Damn (Paraguay Guaraní expression)
  "nde rakore": [3, 4], // Your mother (Guaraní insult, Paraguay)
  "nde rakaré": [3, 4], // You're shameless (Guaraní, Paraguay)
  "mba'e piko nde": [3, 4], // What the hell are you (Guaraní, Paraguay)
  "cachicué": [1, 4], // Idiot / fool (Paraguay)
  "mitã'i": [3, 4], // Brat (Paraguay Guaraní)

  // ========================================
  // === Central American Profanity ========
  // ========================================
  "cerote": [3, 5], // Piece of shit (Guatemala, El Salvador)
  "chucho": [3, 4], // Dog / mutt (Central America)
  "pichazo": [4, 4], // Dick hit (Costa Rica)
  // "mae": [3, 4], // Dude (Costa Rica, can be derogatory) — commented out: collides with English name "Mae"
  "playo": [3, 4], // Faggot (Honduras, derogatory)
  // "playa": [3, 4], // Fem faggot (Honduras, derogatory) — false positive: English word for beach, "Playa Vista"
  "culero hijueputa": [3, 5], // Fucking asshole (Central America)
  "gran cerote": [3, 5], // Big piece of shit (Guatemala)
  "maje": [1, 4], // Dude / idiot (Honduras, Nicaragua)
  "bayunco": [3, 4], // Redneck / hick (Guatemala)
  "shumo": [3, 4], // Low-class (El Salvador)
  "shuco": [3, 4], // Dirty / filthy (Central America)
  "pijazo": [4, 4], // Dick hit (Honduras)
  "turca": [1, 3], // Drunk (Central America)
  "pisado": [3, 4], // Whipped / cuckold (Guatemala)
  "hueco": [3, 4], // Hollow / faggot (Central America, derogatory)
  "hueca": [3, 4], // Fem hollow / lesbian (derogatory)
  "chele": [3, 4], // White person (Central America, can be derogatory)

  // ========================================
  // === Canary Islands Profanity ==========
  // ========================================
  "baifo": [1, 4], // Goat kid / idiot (Canary Islands)
  "magado": [1, 4], // Gutless / coward (Canary Islands)
  "engañifla": [3, 5], // Deception / bullshit (Canary Islands)
  "leche": [1, 1], // Milk / hit / luck (Canary Islands)
  "lechero": [1, 1], // Lucky / annoying (Canary Islands)
  "me cago en la leche": [3, 5], // I shit in the milk (Canary/Spain)
  "me cago en tus muertos": [3, 5], // I shit on your dead (Spain/Canary)

  // ========================================
  // === Galician Profanity ================
  // ========================================
  "foder": [3, 5], // To fuck (Galician)
  "fodido": [3, 5], // Fucked (Galician)
  "fodida": [3, 5], // Fem fucked (Galician)
  "carallo": [4, 4], // Dick / damn (Galician)
  "collón": [1, 4], // Coward / big balls (Galician)
  "collona": [1, 4], // Fem coward (Galician)
  "me cago na hostia": [3, 5], // I shit on the host (Galician)
  "cona": [5, 5], // Cunt (Galician)
  "fillodaputa": [3, 4], // Son of a bitch (Galician)

  // ========================================
  // === Internet Abbreviations ============
  // ========================================
  "hdp": [5, 5], // Hijo de puta
  "hdspm": [2, 3], // Hijo de su puta madre
  "csm": [2, 3], // Concha su madre
  "ptm": [2, 3], // Puta madre
  "lcdtm": [2, 3], // La concha de tu madre
  "lcdll": [2, 3], // La concha de la lora
  "lpm": [2, 3], // La puta madre
  "qlia": [2, 3], // Culiada (Chile abbreviation)
  "qliao": [2, 3], // Culiao (Chile abbreviation)
  "ctmr": [2, 3], // Concha tu madre (Peru abbreviation)
  "tmr": [2, 3], // Tu madre (abbreviation)
  "mrda": [2, 3], // Mierda (abbreviation)
  "hdlv": [2, 3], // Hijo de la verga
  "plp": [2, 3], // Picha loca pana (Venezuela abbreviation)
  "mmgv": [2, 3], // Mamaguevo (abbreviation)
  "hdlch": [2, 3], // Hijo de la chingada
  "nmms": [2, 3], // No mames (Mexico abbreviation)
  "alv": [2, 3], // A la verga (Mexico abbreviation)
  "stpm": [2, 3], // Su puta madre
  "pta": [3, 4], // Puta (abbreviation)
  "jdp": [2, 3], // Joder puta
  "pqd": [2, 3], // Porque da (euphemistic abbreviation)
  "qlq": [2, 3], // Que lo que (Dominican abbreviation)

  // ========================================
  // === Animal + Profanity Insults ========
  // ========================================
  "hijo de perra": [1, 4], // Son of a bitch (literal dog)
  "perra maldita": [1, 4], // Damn bitch
  "zorra de mierda": [3, 5], // Shitty slut
  "burro pendejo": [1, 4], // Stupid donkey-ass
  "burra pendeja": [1, 4], // Fem stupid donkey-ass
  "cerdo asqueroso": [1, 4], // Disgusting pig
  "rata de mierda": [3, 5], // Shitty rat
  "cucaracha": [1, 2], // Cockroach (insult)
  "piojo": [1, 4], // Louse (insult)
  "víbora ponzoñosa": [1, 4], // Venomous viper
  "animal de mierda": [3, 5], // Shitty animal
  "bestia": [1, 4], // Beast / brute
  "bestia de mierda": [3, 5], // Shitty beast
  "perro maldito": [1, 4], // Damn dog
  "perra hijueputa": [5, 5], // Bitch son of a whore
  // "mono": [1, 4], // commented out — common English prefix/word
  // "mona": [1, 4], // commented out — common English name
  "gorila": [1, 4], // Gorilla (derogatory)
  "asno": [1, 2], // Donkey / jackass
  "cabra loca": [1, 4], // Crazy goat
  "hijo de la perra": [1, 4], // Son of the bitch
  "gusano": [1, 4], // Worm (Cuba: political traitor)
  "larva": [1, 4], // Larva / worthless person
  "piojoso de mierda": [3, 5], // Shitty louse-ridden person
  "garrapata": [1, 4], // Tick / parasite person

  // ========================================
  // === More Sexual Terms =================
  // ========================================
  "gangbang": [3, 5], // Gangbang
  "trío": [4, 4], // Threesome
  "orgía": [4, 4], // Orgy
  "zoofilia": [4, 4], // Zoophilia
  "bestialismo": [5, 5], // Bestiality
  "necrofilia": [4, 4], // Necrophilia
  "pedofilia": [5, 5], // Pedophilia
  "pedófilo": [5, 5], // Pedophile
  "pedófila": [5, 5], // Fem pedophile
  "violador": [5, 5], // Rapist
  "violadora": [5, 5], // Fem rapist
  "violación": [5, 5], // Rape
  "violar": [5, 5], // To rape
  "abuso sexual": [4, 4], // Sexual abuse
  "acoso sexual": [4, 4], // Sexual harassment
  "incesto": [5, 5], // Incest
  "bukkake": [4, 5], // Bukkake
  "creampie": [4, 5], // Creampie
  "facial": [1, 1], // Facial (sexual)
  "fetiche": [4, 4], // Fetish
  "dominatriz": [4, 4], // Dominatrix
  "sumiso": [4, 4], // Submissive
  "sumisa": [4, 4], // Fem submissive
  "sadomasoquismo": [4, 4], // Sadomasochism
  "bondage": [2, 3], // Bondage
  "squirt": [4, 4], // Squirt
  "dildo": [3, 4], // Dildo
  "vibrador": [4, 4], // Vibrator
  "consolador": [4, 4], // Dildo (consoler)
  "cogida": [4, 5], // Fuck session (LatAm)
  "encamarse": [2, 3], // To get into bed with (euphemism)
  "revolcón": [4, 4], // Roll in the hay / quickie
  "encamada": [4, 4], // Bedding session
  "nalguear": [4, 4], // To spank buttocks
  "nalgueada": [4, 4], // Spanking
  "dar por el culo": [4, 4], // To give it in the ass
  "meter por el culo": [4, 4], // To put it in the ass
  "sexo oral": [4, 5], // Oral sex
  "sexo anal": [4, 4], // Anal sex

  // ========================================
  // === Homophobic Slurs (All Dialects) ===
  // ========================================
  "mariconcito": [5, 4], // Little faggot (diminutive)
  "mariconazo": [5, 4], // Big faggot (augmentative)
  "mariconada": [5, 5], // Gay act / bullshit
  "amariconado": [5, 4], // Effeminate (derogatory)
  "amariconada": [5, 4], // Fem effeminate
  "afeminado": [5, 4], // Effeminate (derogatory)
  "afeminada": [5, 4], // Fem
  "joto": [5, 4], // Faggot (Mexico)
  "jota": [5, 4], // Fem faggot (Mexico)
  "jotería": [5, 4], // Gay stuff (Mexico, derogatory)
  "jotito": [5, 4], // Little faggot (Mexico)
  "jotón": [5, 4], // Big faggot (Mexico)
  "volteado": [5, 4], // Turned / gay (Mexico, derogatory)
  "invertido": [5, 4], // Inverted / gay (archaic derogatory)
  "invertida": [5, 4], // Fem inverted
  "sodomita": [5, 4], // Sodomite
  "sarasa": [5, 4], // Gay (Argentina, derogatory)
  "trolo": [5, 4], // Gay (Argentina, derogatory)
  // "cola": [5, 4], // Tail / gay (Colombia, derogatory) — false positive: English "Coca-Cola", cola drinks
  "cacorro": [5, 4], // Gay (Colombia, derogatory)
  "fleto": [5, 4], // Gay (Chile, derogatory)
  "colipato": [5, 4], // Gay (Chile, derogatory)
  "rosquete": [5, 4], // Gay (Peru, derogatory)
  "cabro": [5, 4], // Gay / young man (Chile, derogatory)
  "pájaro": [5, 4], // Bird / gay (Caribbean, derogatory)
  "machorra": [5, 4], // Butch lesbian (derogatory)
  "machona": [5, 4], // Butch lesbian (derogatory)
  "manflora": [5, 4], // Lesbian (derogatory, LatAm)
  "manfloro": [5, 4], // Gay man (derogatory, variant)
  "marimacho": [5, 4], // Tomboy / butch (derogatory)
  "marimacha": [5, 4], // Butch (derogatory)
  "bujarrón": [5, 4], // Top in gay sex (derogatory, Caribbean)
  "bugarrón": [5, 4], // Variant of bujarrón

  // ========================================
  // === Body Part Vulgarities =============
  // ========================================
  // "raja": [4, 4], // Crack / vagina (vulgar) — false positive: English Indian name/title
  "rajada": [4, 4], // Split / vagina (vulgar)
  // "pepa": [4, 3], // Pill / vagina (LatAm) — false positive: English "Peppa Pig"
  "papaya": [1, 1], // Papaya / vagina (Caribbean)
  // "toto": [4, 3], // Vagina (Dominican) — false positive: English band name, common name
  "totona": [4, 3], // Big vagina (Dominican)
  "cuca": [4, 3], // Vagina (Colombia)
  "papo": [4, 3], // Vagina (Venezuela)
  "conejo": [1, 1], // Rabbit / vagina (LatAm)
  "empanada": [1, 1], // Pastry / vagina (slang)
  "arepa": [1, 1], // Corn cake / lesbian sex (Venezuela/Colombia)
  "paloma": [1, 1], // Pigeon / penis (Mexico)
  "pájara": [4, 3], // Bird / penis / gay (regional)
  "riata": [4, 3], // Lasso / penis (Mexico)
  "chile": [1, 1], // Chili / penis (Mexico)
  "camote": [1, 1], // Sweet potato / penis (Mexico)
  "plátano": [1, 1], // Banana / penis
  "chorizo": [1, 1], // Sausage / penis
  "salchicha": [1, 1], // Sausage / penis
  "longaniza": [1, 1], // Long sausage / penis
  "morcilla": [1, 1], // Blood sausage / penis
  "huevos": [2, 2], // Eggs / balls
  "bolas": [1, 1], // Balls / testicles
  "tanates": [4, 3], // Balls (Mexico)
  "turmas": [4, 3], // Testicles (archaic)
  "sobaco": [1, 1], // Armpit (used pejoratively)
  "nalgón": [4, 3], // Big-assed (masc)
  "nalgona": [4, 3], // Big-assed (fem)
  "tetona": [4, 3], // Big-titted
  "tetón": [4, 3], // Big-titted (masc, mockingly)
  "chichona": [4, 3], // Big-boobed (Mexico)
  "culote": [4, 3], // Big ass

  // ========================================
  // === More Compound Insults =============
  // ========================================
  "idiota de mierda": [1, 4], // Fucking idiot
  "pendejo de mierda": [3, 5], // Shitty asshole
  "cabrón de mierda": [3, 4], // Shitty bastard
  "cerdo de mierda": [3, 5], // Shitty pig
  "malnacido de mierda": [3, 4], // Shitty bastard
  "perro de mierda": [3, 5], // Shitty dog
  "hijo de mil putas": [5, 4], // Son of a thousand whores
  "hijo de la gran verga": [4, 4], // Son of the great dick
  "vete al carajo": [1, 4], // Go to hell
  "vete al diablo": [1, 4], // Go to the devil
  "vete a freír espárragos": [1, 4], // Go fry asparagus / get lost
  "a la mierda con todo": [3, 5], // To shit with everything
  "que te den por culo": [3, 4], // Get it in the ass
  "me cago en todo": [3, 5], // I shit on everything
  "me cago en dios": [3, 5], // I shit on god (Spain, very offensive)
  "me cago en la virgen": [3, 5], // I shit on the virgin (Spain)
  "me cago en la puta": [5, 5], // I shit on the whore
  "la madre que te parió": [1, 4], // The mother that bore you
  "maldita sea": [1, 4], // Damn it
  "maldita sea tu estampa": [1, 4], // Damn your image
  "hijo de tu pinche madre": [3, 5], // Son of your fucking mother (Mexico)
  "pendejo culero": [1, 4], // Asshole idiot (Mexico)
  "pinche mamón": [3, 5], // Fucking jerk (Mexico)
  "pinche idiota": [1, 4], // Fucking idiot (Mexico)
  "pinche mierda": [3, 5], // Fucking shit (Mexico)
  "pinche basura": [3, 5], // Fucking trash (Mexico)
  "pedazo de imbécil": [1, 4], // Piece of imbecile
  "pedazo de basura": [1, 4], // Piece of trash
  "pedazo de idiota": [1, 4], // Piece of idiot
  "pedazo de animal": [1, 4], // Piece of animal
  "maldito hijo de puta": [1, 4], // Damn son of a bitch
  "maldito cabrón": [3, 4], // Damn bastard
  "maldita perra": [1, 4], // Damn bitch
  "grandísimo pendejo": [3, 4], // Enormous asshole
  "grandísima puta": [5, 4], // Enormous whore
  "grandísimo cabrón": [3, 4], // Enormous bastard
  "grandísimo idiota": [1, 4], // Enormous idiot
  "tremendo pendejo": [3, 4], // Tremendous asshole
  "tremendo cabrón": [3, 4], // Tremendous bastard
  "asqueroso de mierda": [3, 5], // Disgusting shit
  "sucio de mierda": [3, 5], // Dirty shit
  "mugroso": [1, 4], // Filthy
  "mugrosa": [1, 4], // Fem filthy
  "roñoso": [1, 4], // Scabby / stingy
  "roñosa": [1, 4], // Fem scabby
  "cochinada": [1, 4], // Filthy act / piggish behavior
  "porquería": [1, 4], // Filth / crap / garbage
  "chusma": [1, 4], // Riffraff / mob
  "gentuza": [1, 4], // Riffraff / scum
  "escuincle": [1, 4], // Brat (Mexico, Nahuatl origin)
  "escuincla": [1, 4], // Fem brat (Mexico)
  "chamaco": [1, 4], // Kid / brat (Mexico)
  "chamaca": [1, 4], // Fem kid/brat (Mexico)
  "mocoso": [1, 4], // Snotty brat
  "mocosa": [1, 4], // Fem snotty brat
  "canalla": [1, 4], // Scoundrel / rogue
  "rufián": [1, 4], // Ruffian / pimp
  "cretino de mierda": [3, 5], // Shitty cretin
  "subnormal de mierda": [3, 5], // Shitty retard
  "retrasado mental": [1, 4], // Mentally retarded (offensive)
  "retrasada mental": [1, 4], // Fem mentally retarded

  // ========================================
  // === Spelling Evasions: Puta ==========
  // ========================================
  "put4": [4, 5], // Puta - number substitution
  "pvta": [3, 5], // Puta - v for u
  "pvt4": [4, 5], // Puta - double substitution
  "p.u.t.a": [3, 5], // Puta - dotted evasion (concatenated to avoid lint)
  "pu7a": [3, 5], // Puta - 7 for t
  "pu+a": [4, 5], // Puta - symbol substitution
  "putaa": [3, 5], // Puta - elongated
  "putaaa": [3, 5], // Puta - elongated more
  "puuuta": [3, 5], // Puta - elongated u
  "puuta": [3, 5], // Puta - elongated u
  "pputa": [3, 5], // Puta - doubled p
  "putah": [3, 5], // Puta - trailing h evasion
  "put@": [3, 5], // Puta - @ for a
  "put@a": [3, 5], // Puta - @ insertion
  "pu†a": [3, 5], // Puta - dagger for t
  "пuta": [3, 5], // Puta - Cyrillic п for p
  "púta": [3, 5], // Puta - accented u
  "pùta": [3, 5], // Puta - grave u
  "pütá": [3, 5], // Puta - umlaut/accent evasion
  "p u t a": [3, 5], // Puta - spaced out
  "p-u-t-a": [3, 5], // Puta - hyphenated

  // ========================================
  // === Spelling Evasions: Mierda ========
  // ========================================
  "m1erda": [3, 5], // Mierda - 1 for i
  "m!erda": [3, 5], // Mierda - ! for i
  "mi3rda": [3, 5], // Mierda - 3 for e
  "mierd4": [3, 5], // Mierda - 4 for a
  "m13rda": [4, 5], // Mierda - double substitution
  "m!3rda": [4, 5], // Mierda - double substitution
  "mierdaa": [3, 5], // Mierda - elongated
  "mierdaaa": [3, 5], // Mierda - elongated more
  "miiierda": [3, 5], // Mierda - elongated i
  "mierrda": [3, 5], // Mierda - doubled r
  "mierdah": [3, 5], // Mierda - trailing h
  "mierda!": [3, 5], // Mierda - trailing exclamation
  "m.i.e.r.d.a": [3, 5], // Mierda - dotted
  "m-i-e-r-d-a": [3, 5], // Mierda - hyphenated
  "m i e r d a": [3, 5], // Mierda - spaced
  "mierda5": [3, 5], // Mierda - trailing number
  "mierd@": [3, 5], // Mierda - @ for a
  "mi€rda": [3, 5], // Mierda - euro for e

  // ========================================
  // === Spelling Evasions: Verga =========
  // ========================================
  "v3rga": [3, 5], // Verga - 3 for e
  "verg4": [3, 5], // Verga - 4 for a
  "v3rg4": [4, 5], // Verga - double substitution
  "vergaa": [3, 5], // Verga - elongated
  "vergaaa": [3, 5], // Verga - elongated more
  "veerga": [3, 5], // Verga - elongated e
  "verrga": [3, 5], // Verga - doubled r
  "berg4": [3, 5], // Verga - b for v
  "berga": [3, 5], // Verga - b for v
  "beerga": [3, 5], // Verga - b for v elongated
  "v.e.r.g.a": [3, 5], // Verga - dotted
  "v-e-r-g-a": [3, 5], // Verga - hyphenated
  "v e r g a": [3, 5], // Verga - spaced
  "verg@": [3, 5], // Verga - @ for a

  // ========================================
  // === Spelling Evasions: Coño ==========
  // ========================================
  "c0ño": [3, 5], // Coño - 0 for o
  "coñ0": [3, 5], // Coño - 0 for second o
  "c0ñ0": [3, 5], // Coño - double 0
  "conio": [3, 5], // Coño - no tilde
  "c0nio": [3, 5], // Coño - no tilde, 0 for o
  "conyo": [3, 5], // Coño - y for ñ
  "c0ny0": [3, 5], // Coño - y for ñ, 0s
  "coñoo": [3, 5], // Coño - elongated
  "coñooo": [3, 5], // Coño - elongated more
  "koño": [3, 5], // Coño - k for c
  "c.o.ñ.o": [3, 5], // Coño - dotted
  "coñ@": [3, 5], // Coño - @ evasion

  // ========================================
  // === Spelling Evasions: Culo ==========
  // ========================================
  "cul0": [3, 5], // Culo - 0 for o
  "cvlo": [3, 5], // Culo - v for u
  "cvl0": [4, 5], // Culo - double substitution
  "kulo": [3, 5], // Culo - k for c
  "kul0": [3, 5], // Culo - k for c, 0 for o
  "culoo": [3, 5], // Culo - elongated
  "culooo": [3, 5], // Culo - elongated more
  "qulo": [3, 5], // Culo - q for c
  "c.u.l.o": [3, 5], // Culo - dotted
  "c-u-l-o": [3, 5], // Culo - hyphenated
  "c u l o": [3, 5], // Culo - spaced

  // ========================================
  // === Spelling Evasions: Polla =========
  // ========================================
  "p0lla": [3, 5], // Polla - 0 for o
  "poll4": [3, 5], // Polla - 4 for a
  "p0ll4": [4, 5], // Polla - double substitution
  "poya": [3, 5], // Polla - y for ll
  "p0ya": [3, 5], // Polla - y for ll, 0 for o
  "pollaa": [3, 5], // Polla - elongated
  "p.o.l.l.a": [3, 5], // Polla - dotted

  // ========================================
  // === Spelling Evasions: Joder =========
  // ========================================
  "j0der": [3, 5], // Joder - 0 for o
  "jod3r": [3, 5], // Joder - 3 for e
  "j0d3r": [4, 5], // Joder - double substitution
  "joderr": [3, 5], // Joder - doubled r
  "joderrr": [3, 5], // Joder - tripled r
  "j.o.d.e.r": [3, 5], // Joder - dotted
  "hoder": [3, 5], // Joder - h for j evasion

  // ========================================
  // === Spelling Evasions: Puto ==========
  // ========================================
  "put0": [3, 5], // Puto - 0 for o
  "pvto": [3, 5], // Puto - v for u
  "pvt0": [4, 5], // Puto - double substitution
  "pu7o": [3, 5], // Puto - 7 for t
  "putoo": [3, 5], // Puto - elongated
  "p-u-t-o": [3, 5], // Puto - hyphenated
  "p u t o": [3, 5], // Puto - spaced
  "put@o": [3, 5], // Puto - @ insertion

  // ========================================
  // === Spelling Evasions: Cabrón ========
  // ========================================
  "cabr0n": [3, 5], // Cabrón - 0 for o
  "kabron": [3, 5], // Cabrón - k for c
  "kabr0n": [4, 5], // Cabrón - k+0 substitution
  "cabronn": [3, 5], // Cabrón - doubled n
  "c4bron": [3, 5], // Cabrón - 4 for a
  "cabroooon": [3, 5], // Cabrón - elongated
  "c.a.b.r.o.n": [3, 5], // Cabrón - dotted

  // ========================================
  // === Spelling Evasions: Pendejo =======
  // ========================================
  "pend3jo": [3, 5], // Pendejo - 3 for e
  "pendej0": [3, 5], // Pendejo - 0 for o
  "p3ndejo": [3, 5], // Pendejo - 3 for first e
  "p3nd3jo": [3, 5], // Pendejo - double 3
  "pendejoo": [3, 5], // Pendejo - elongated
  "pndejo": [3, 5], // Pendejo - missing e
  "pendjo": [3, 5], // Pendejo - missing e
  "pen dejo": [3, 5], // Pendejo - spaced

  // ========================================
  // === Spelling Evasions: Chingar =======
  // ========================================
  "ch1ngar": [3, 5], // Chingar - 1 for i
  "ch!ngar": [3, 5], // Chingar - ! for i
  "ching4r": [3, 5], // Chingar - 4 for a
  "ch1ng4r": [4, 5], // Chingar - double substitution
  "chingarr": [3, 5], // Chingar - doubled r
  "xingar": [3, 5], // Chingar - x for ch
  "chingarle": [3, 5], // Chingar variant

  // ========================================
  // === Spelling Evasions: Hijo de puta ==
  // ========================================
  "hijodeputa": [3, 5], // No spaces
  "hijo d puta": [3, 5], // Missing e
  "ijo de puta": [3, 5], // Missing h
  "hijoeputa": [3, 5], // Colombian phonetic
  "ijueputa": [3, 5], // Short form
  "jueputa": [3, 5], // Very short form
  "juepuerca": [2, 5], // Euphemistic variant
  "hpd": [3, 5], // Hijo puta abbreviation
  "hputa": [3, 5], // H + puta
  "hijoputamadre": [3, 5], // Compound

  // ========================================
  // === Spelling Evasions: Maricón =======
  // ========================================
  "mar1con": [3, 5], // Maricón - 1 for i
  "mar1c0n": [4, 5], // Maricón - double substitution
  "marik0n": [4, 5], // Maricón - k+0 substitution
  "marikon": [3, 5], // Maricón - k for c
  "marikón": [3, 5], // Maricón - k for c, tilde
  "maric0n": [3, 5], // Maricón - 0 for o
  "maricon": [3, 5], // Maricón - no tilde
  "mariconn": [3, 5], // Maricón - doubled n
  "m4ricon": [3, 5], // Maricón - 4 for a

  // ========================================
  // === Spelling Evasions: Follar ========
  // ========================================
  "f0llar": [3, 5], // Follar - 0 for o
  "foll4r": [3, 5], // Follar - 4 for a
  "foyar": [3, 5], // Follar - y for ll
  "follaar": [3, 5], // Follar - elongated
  "foiar": [3, 5], // Follar - i for ll

  // ========================================
  // === Spelling Evasions: Concha ========
  // ========================================
  "c0ncha": [3, 5], // Concha - 0 for o
  "conch4": [3, 5], // Concha - 4 for a
  "c0nch4": [4, 5], // Concha - double substitution
  "koncha": [3, 5], // Concha - k for c
  "conxa": [3, 5], // Concha - x for ch

  // ========================================
  // === Spelling Evasions: Gilipollas ====
  // ========================================
  "gilip0llas": [3, 5], // Gilipollas - 0 for o
  "gilipoll4s": [3, 5], // Gilipollas - 4 for a
  "jilipollas": [3, 5], // Gilipollas - j for g evasion
  "gilipoyyas": [3, 5], // Gilipollas - y for ll

  // ========================================
  // === Spelling Evasions: Pinga =========
  // ========================================
  "p1nga": [3, 5], // Pinga - 1 for i
  "ping4": [3, 5], // Pinga - 4 for a
  "p!nga": [3, 5], // Pinga - ! for i
  "pinnga": [3, 5], // Pinga - doubled n

  // ========================================
  // === Spelling Evasions: CTM / HDPs ====
  // ========================================
  "c.t.m": [3, 5], // CTM dotted
  "h.d.p": [3, 5], // HDP dotted
  "h d p": [3, 5], // HDP spaced
  "c t m": [3, 5], // CTM spaced
  "hijos de puta": [3, 5], // Plural sons of bitches
  "hijas de puta": [3, 5], // Plural daughters of bitches

  // ========================================
  // === Compound Phrases: Me cago en... ==
  // ========================================
  "me cago en tu puta madre": [5, 5], // I shit on your whore mother
  "me cago en la hostia": [3, 5], // I shit on the host
  "me cago en la puta madre que te parió": [5, 5], // I shit on the whore mother who bore you
  "me cago en tu padre": [1, 4], // I shit on your father
  "me cago en tu puta vida": [5, 5], // I shit on your whore life
  "me cago en tus muelas": [3, 5], // I shit on your teeth (euphemism)
  "me cago en la mar": [3, 5], // I shit on the sea (euphemism)
  "me cago en la leche que mamaste": [3, 5], // I shit on the milk you suckled
  "me cago en todo lo que se menea": [3, 5], // I shit on everything that moves
  "me cago en la ostia": [3, 5], // Variant spelling
  "me cago en su puta madre": [5, 5], // I shit on his/her whore mother

  // ========================================
  // === Compound Phrases: Vete a... ======
  // ========================================
  "vete a la verga": [4, 5], // Go to the dick (Mexico)
  "vete a tomar por culo": [3, 5], // Go take it up the ass (Spain)
  "vete a cagar": [3, 5], // Go take a shit
  "vete a la puta mierda": [3, 5], // Go to the fucking shit
  "vete a la puta calle": [3, 5], // Go to the fucking street
  "vete al coño de tu madre": [5, 5], // Go to your mother's cunt
  "vete a mamar": [4, 5], // Go suck dick
  "vete a la concha de tu madre": [5, 5], // Go to your mother's cunt (Argentina)
  "ándate a la mierda": [3, 5], // Go to shit (Argentina)
  "ándate a la concha de tu madre": [5, 5], // Go to your mother's cunt (Argentina)
  "ándate a cagar": [3, 5], // Go shit yourself (Argentina)
  "iros a la mierda": [3, 5], // Go to shit (plural, Spain)
  "iros a tomar por culo": [3, 5], // Go get fucked (plural, Spain)

  // ========================================
  // === Compound Phrases: Chupa... =======
  // ========================================
  "chúpame la pija": [4, 5], // Suck my dick (Argentina, with accent)
  "chúpame la verga": [4, 5], // Suck my dick (Mexico)
  "chúpame el culo": [3, 5], // Suck my ass
  "chúpamela": [3, 5], // Suck it (for me)
  "chupala": [3, 5], // Suck it
  "chupa mi polla": [4, 5], // Suck my cock (Spain)
  "chupa mi verga": [4, 5], // Suck my dick (LatAm)
  "chupa mi pija": [4, 5], // Suck my dick (Argentina)
  "chupa mi pinga": [4, 5], // Suck my dick (Caribbean)
  "chupapija": [4, 5], // Dick sucker (Argentina)
  "chupapinga": [4, 5], // Dick sucker (Caribbean)

  // ========================================
  // === Compound Phrases: Métete... ======
  // ========================================
  "métete la verga por el culo": [4, 5], // Stick the dick up your ass
  "métete un dedo": [3, 5], // Stick a finger in yourself
  "métete la polla": [4, 5], // Stick the dick in yourself
  "mételo por el culo": [3, 5], // Stick it up the ass
  "métete la mierda": [3, 5], // Stick the shit in yourself
  "metételo por donde te quepa": [3, 5], // Stick it wherever it fits

  // ========================================
  // === Compound Phrases: Que te... ======
  // ========================================
  "que te follen": [3, 5], // Go get fucked (Spain)
  "que te den": [3, 5], // May they give it to you
  "que te la metan": [3, 5], // May they stick it in you
  "que te la chupen": [3, 5], // May they suck it for you
  "que se joda": [3, 5], // Fuck it / let it be screwed
  "que se jodan": [3, 5], // Fuck them
  "que te parta un rayo": [3, 5], // May lightning split you
  "que te folle un pez": [3, 5], // May a fish fuck you (Spain)

  // ========================================
  // === Compound Phrases: Additional =====
  // ========================================
  "te voy a partir la madre": [3, 5], // I'm going to break your mother (Mexico)
  "te voy a romper la madre": [3, 5], // I'm going to break your mother
  "te voy a chingar": [3, 5], // I'm going to fuck you up (Mexico)
  "te voy a verguear": [3, 5], // I'm going to beat you up (Central America)
  "te voy a dar en la madre": [3, 5], // I'm going to hit you hard (Mexico)
  "te voy a dar una verguiza": [3, 5], // I'm going to give you a beating (Mexico)
  "te voy a meter una hostia": [3, 5], // I'm going to slap you (Spain)
  "te parto la cara": [3, 5], // I'll break your face
  "te reviento": [3, 5], // I'll bust you open
  "te mato": [3, 5], // I'll kill you
  "ojalá te mueras": [5, 5], // I hope you die
  "ojalá te pudras": [3, 5], // I hope you rot
  "púdrete": [3, 5], // Rot
  "que te pudras": [3, 5], // May you rot
  "vete a morir": [5, 5], // Go die
  "mátate": [5, 5], // Kill yourself

  // ========================================
  // === More Internet Abbreviations ======
  // ========================================
  "lptm": [2, 3], // La puta madre
  "lctm": [2, 3], // La concha tu madre
  "cdtm": [2, 3], // Concha de tu madre
  "dlv": [2, 3], // De la verga (Mexico)
  "qlp": [2, 3], // Que le pasa / Culpa
  "wtf": [2, 2], // What the fuck (used in Spanish internet)
  "stfu": [3, 5], // Shut the fuck up (used in Spanish internet)
  "plm": [2, 3], // Por la madre
  "pqtp": [2, 3], // Porque te pario
  "htpm": [2, 3], // Hijo de tu puta madre
  "lpmqtp": [2, 3], // La puta madre que te parió
  "lrpm": [2, 3], // La re puta madre (Argentina)
  "lrctm": [2, 3], // La re concha de tu madre (Argentina)
  "lqlp": [2, 3], // La que lo parió
  "mcetm": [2, 3], // Me cago en tu madre
  "lptqtp": [2, 3], // La puta que te parió
  "lpqmp": [2, 3], // La puta que me parió
  "csmare": [2, 3], // Concha su madre (Peru)
  "ctmare": [2, 3], // Conchetumadre (Chile)
  "weon ql": [2, 3], // Weón culiao (Chile)
  "wn ql": [2, 3], // Weón culiao abbreviated (Chile)
  "qlo": [2, 3], // Culiao abbreviated variant
  "pndjo": [2, 3], // Pendejo abbreviated
  "vrga": [2, 3], // Verga abbreviated
  "hdsptm": [2, 3], // Hijo de su puta madre
  "lcdlch": [2, 3], // La concha de la chingada
  "csmr": [2, 3], // Concha su madre (Peru variant)
  "csmdre": [2, 3], // Concha su madre variant
  "tqp": [2, 3], // Te quiero putear
  "nmmn": [2, 3], // No mames / No manches
  "nmn": [2, 3], // No mames no

  // ========================================
  // === Venezuelan Profanity =============
  // ========================================
  "coño e la madre": [5, 5], // Cunt of the mother (Venezuela)
  "vergación": [4, 4], // Dick thing / amazing thing (Venezuela)
  "vergantín": [4, 4], // Big-dicked (Venezuela)
  "guevonada": [1, 4], // Idiotic thing (Venezuela)
  "güevonada": [1, 4], // Idiotic thing with diaeresis
  "jalabola": [3, 4], // Ball-puller / sycophant (Venezuela)
  "jalabolas": [3, 4], // Plural sycophant (Venezuela)
  "pajúa": [1, 4], // Fem idiot (Venezuela)
  "pajúos": [1, 4], // Plural idiot (Venezuela)
  "arrechísimo": [3, 4], // Super horny/angry (Venezuela)
  "arrechísima": [3, 4], // Fem super horny/angry
  "mmgvo": [3, 4], // Mamaguevo abbreviated (Venezuela)
  "maldito coño": [5, 5], // Damn cunt (Venezuela)
  "ladilla": [3, 4], // Crab louse / annoying person (Venezuela)
  "ladillado": [3, 4], // Annoyed (Venezuela)
  "ladillada": [3, 4], // Fem annoyed (Venezuela)
  "vergacielo": [4, 4], // Dick heaven / exclamation (Venezuela)
  "coroto": [3, 4], // Thing / can be pejorative (Venezuela)
  "catire de mierda": [3, 5], // Shitty blonde (Venezuela)
  "sifrino": [3, 4], // Snob (Venezuela)
  "sifrina": [3, 4], // Fem snob (Venezuela)
  "tierrúo": [3, 4], // Country bumpkin (Venezuela)
  "tierrúa": [3, 4], // Fem country bumpkin (Venezuela)
  "mamagüevada": [4, 4], // Dicksucker behavior (Venezuela)

  // ========================================
  // === Chilean Profanity ================
  // ========================================
  "conchetumare": [5, 5], // Your mother's cunt (Chile variant)
  "conchetumaire": [2, 3], // Euphemistic variant (Chile)
  "conchesumare": [5, 5], // His mother's cunt (Chile)
  "culiao de mierda": [3, 5], // Shitty ass-fucker (Chile)
  "wea de mierda": [3, 5], // Shitty thing (Chile)
  "weá": [3, 5], // Thing/bullshit with accent (Chile)
  "weveo": [3, 5], // Joking around / bullshit (Chile)
  "webeo": [3, 5], // Joking around / bullshit (Chile variant)
  "webear": [3, 4], // To joke/bother (Chile)
  "wevear": [3, 4], // To joke/bother (Chile variant)
  "sacoewea": [3, 4], // Variant of sacowea (Chile)
  "pelotuó": [1, 4], // Idiot (Chile)
  "aweona": [1, 4], // Fem fucking idiot (Chile)
  "aweoná": [3, 4], // Fem with accent (Chile)
  "conchatumare": [3, 4], // Variant (Chile)
  "la wea": [3, 5], // The thing / the bullshit (Chile)
  "esa wea": [3, 5], // That thing/bullshit (Chile)
  "qué wea": [3, 4], // What the hell (Chile)
  "puta la wea": [3, 5], // Fuck the thing (Chile)
  "weta": [1, 4], // Idiot (Chile variant)
  "fleta": [3, 4], // Fem faggot (Chile)
  "maraca": [3, 4], // Slut (Chile)
  "maracón": [3, 4], // Gay (Chile, derogatory)
  "penca": [3, 5], // Lame / shitty (Chile)
  "rajar": [3, 5], // To slash / to talk shit (Chile)
  "roto": [3, 4], // Broken / low-class (Chile)
  "rota": [3, 4], // Fem low-class (Chile)
  "flaite": [3, 4], // Low-class / trashy (Chile)
  "cuático": [3, 4], // Intense / crazy (Chile)
  "gueón": [1, 5], // Dude/idiot (Chile, alternate spelling)
  "gueona": [1, 4], // Fem (Chile)
  "hueá": [3, 5], // Thing/bullshit (Chile variant)
  "wevón": [3, 4], // Variant of weón (Chile)
  "wevona": [3, 4], // Fem variant (Chile)

  // ========================================
  // === Peruvian Profanity ===============
  // ========================================
  "conchasumadre": [3, 4], // Variant (Peru)
  "recontra mierda": [3, 5], // Super shit (Peru)
  "ayayay cojudo": [1, 4], // Oh idiot (Peru exclamation)
  "asu mare": [2, 3], // His mother / Oh wow (Peru, euphemism)
  "asumare": [3, 4], // Compound variant (Peru)
  "reconchesumadre": [3, 4], // Emphatic variant (Peru)
  "huevón de mierda": [1, 4], // Shitty idiot (Peru)
  "cojudo de mierda": [1, 4], // Shitty idiot (Peru)
  "carajo de mierda": [3, 5], // Shitty damn (Peru)
  "cholo de mierda": [5, 5], // Shitty indigenous person (Peru, racist)
  "chola de mierda": [5, 5], // Fem shitty indigenous person (Peru, racist)
  "serrano de mierda": [5, 5], // Shitty highland person (Peru, racist)
  "serrana de mierda": [5, 4], // Fem (Peru, racist)
  "cholo": [3, 4], // Indigenous/mixed race (Peru, can be derogatory)
  "chola": [3, 4], // Fem indigenous/mixed race (Peru, can be derogatory)
  "serrano": [3, 4], // Highland person (Peru, can be derogatory)
  "serrana": [3, 4], // Fem highland person
  "selvático": [3, 4], // Jungle person (Peru, derogatory)
  "selvática": [3, 4], // Fem jungle person (Peru, derogatory)
  "pituca": [3, 4], // Snob (Peru)
  "pituco": [3, 4], // Masc snob (Peru)
  "achorado": [3, 4], // Aggressive/brash (Peru)
  "achorada": [3, 4], // Fem aggressive (Peru)
  "maldita conchesumadre": [5, 5], // Damn cunt mother (Peru)

  // ========================================
  // === More Colombian Profanity ==========
  // ========================================
  "hijuemichica": [2, 3], // Euphemistic hijueputa (Colombia)
  "gonorrea malparida": [3, 4], // Compound insult (Colombia)
  "pirobo hijueputa": [3, 4], // Compound insult (Colombia)
  "piroba malparida": [3, 4], // Compound insult (Colombia)
  "casposo": [3, 4], // Dandruff-y / lowlife (Colombia)
  "casposa": [3, 4], // Fem dandruff-y (Colombia)
  "zarrapastroso": [3, 4], // Ragged / unkempt (Colombia)
  "zarrapastrosa": [3, 4], // Fem ragged (Colombia)
  "desechable": [3, 4], // Disposable / homeless person (Colombia, very derogatory)
  "ñero hijueputa": [3, 4], // Low-class son of a bitch (Colombia)
  "gamín": [3, 4], // Street kid (Colombia, derogatory)
  "gamina": [3, 4], // Fem street kid (Colombia)
  "guache": [3, 4], // Crude / vulgar person (Colombia)
  "ñorzo": [3, 5], // Turd / piece of shit (Colombia)
  "mondongo": [3, 4], // Tripe / guts (Colombia, used pejoratively)
  "caremondá": [4, 4], // Dick face (Colombia variant)
  "carechimbo": [3, 4], // Masc variant of carechimba (Colombia)
  "caremierda": [3, 5], // Shit face (Colombia)
  "carehijueputa": [3, 4], // Son of a bitch face (Colombia)
  "caremalparido": [3, 4], // Badly-born face (Colombia)

  // ========================================
  // === More Cuban Profanity =============
  // ========================================
  "comepinga de mierda": [4, 5], // Shitty dick eater (Cuba)
  "comepingaje": [4, 4], // Dick eating behavior (Cuba)
  "comemierdería": [3, 5], // Shit eating behavior (Cuba)
  "singación": [3, 5], // Fucking session (Cuba)
  "singadero": [3, 5], // Fucking place (Cuba)
  "descarao": [3, 5], // Shameless (Cuba phonetic)
  "descará": [3, 4], // Fem shameless (Cuba)
  "mariconcería": [3, 4], // Faggotry (Cuba)
  "pingazo": [4, 4], // Dick hit (Cuba)
  "yuma de mierda": [3, 5], // Shitty foreigner (Cuba)
  "asere": [3, 4], // Dude (Cuba, can be derogatory)
  "monina": [1, 4], // Monkey / ugly (Cuba derogatory)
  "templa": [3, 5], // Fuck / sex (Cuba)
  "templeta": [3, 5], // Quick fuck (Cuba)
  "templú": [3, 4], // Horny person (Cuba)

  // ========================================
  // === More Puerto Rican Profanity ======
  // ========================================
  "bicho de mierda": [4, 5], // Shitty dick (Puerto Rico)
  "come bicho": [4, 4], // Dick eater (Puerto Rico)
  "puñetazo": [3, 4], // Punch / damn hit (Puerto Rico)
  "cabronísimo": [3, 4], // Super bastard (Puerto Rico)
  "cabrón hijo de puta": [3, 4], // Bastard son of a bitch (Puerto Rico)
  "mamao de mierda": [3, 5], // Shitty sucker (Puerto Rico)
  "tecato": [3, 4], // Drug addict / junkie (Puerto Rico)
  "tecata": [3, 4], // Fem drug addict (Puerto Rico)
  "tiraera": [3, 4], // Dis track / attack (Puerto Rico)
  "maldito bicho": [4, 4], // Damn dick (Puerto Rico)
  "canto e bicho": [3, 4], // Big dick / big bastard (Puerto Rico)
  "pichón": [1, 4], // Pigeon / fool (Puerto Rico)
  "pendejo e mierda": [3, 5], // Shitty asshole (Puerto Rico phonetic)

  // ========================================
  // === More Central American Profanity ==
  // ========================================
  "vergo": [3, 4], // A lot / big (Guatemala)
  "mula": [3, 4], // Mule / clumsy (Guatemala)
  "canche": [3, 4], // Blonde (Guatemala, can be derogatory)
  "cholero": [3, 4], // Low-class (Guatemala)
  "cholera": [3, 4], // Fem low-class (Guatemala)
  "pizote": [1, 4], // Coati / idiot (Costa Rica)
  "carepicha de mierda": [4, 5], // Shitty dickface (Costa Rica)
  "playo de mierda": [3, 5], // Shitty faggot (Honduras)
  "culero maje": [3, 4], // Asshole dude (Honduras)
  "cerote hijueputa": [3, 5], // Shitty son of a bitch (Guatemala/El Salvador)
  "gran cerote de mierda": [3, 5], // Big shitty turd (Guatemala)
  "bicho raro": [3, 4], // Weirdo (Central America)
  "picha floja": [4, 4], // Limp dick (Costa Rica)
  "picha corta": [4, 4], // Short dick (Costa Rica)
  "maje hijueputa": [3, 4], // Dude son of a bitch (Honduras/Nicaragua)
  "idiay": [1, 2], // What the hell (Costa Rica)
  "puñal": [3, 4], // Dagger / faggot (Honduras, derogatory)
  "culiolo": [3, 4], // Faggot (El Salvador, derogatory)
  "chero": [1, 2], // Friend / dude (El Salvador, can be derogatory)
  "bolado": [1, 2], // Thing / situation (El Salvador)
  "vergón hijueputa": [4, 4], // Big-dicked son of a bitch (Central America)
  "yuca": [4, 4], // Cassava / difficult / penis (Central America)
  "babosada": [1, 4], // Stupid thing / drool act (Central America)
  "babosadas": [1, 4], // Plural stupid things
  "tontería": [1, 4], // Stupidity
  "tonterías": [1, 4], // Plural stupidities
  "estupidez": [1, 4], // Stupidity
  "estupideces": [1, 4], // Plural stupidities
  "pajada": [3, 4], // Wanky thing / nonsense (Central America)

  // ========================================
  // === Equatorial Guinea Spanish ========
  // ========================================
  "bubi de mierda": [5, 4], // Ethnic slur (Equatorial Guinea)
  "fang de mierda": [5, 4], // Ethnic slur (Equatorial Guinea)
  "mangina": [4, 3], // Coward / effeminate (Eq. Guinea)
  "macho de mierda": [3, 5], // Shitty macho (Eq. Guinea)

  // ========================================
  // === Transphobic Slurs ================
  // ========================================
  "travelo": [5, 4], // Derogatory for trans person (Spain)
  "travesti": [5, 4], // Transvestite (can be derogatory)
  "travestido": [5, 4], // Transvestite (derogatory usage)
  "travestida": [5, 4], // Fem transvestite
  "transformista": [5, 4], // Drag queen (can be derogatory)
  "transexual de mierda": [5, 5], // Shitty transsexual
  "maricón travesti": [5, 4], // Faggot transvestite
  "tranny": [5, 5], // English loan, used in Spanish
  "hombre con falda": [5, 4], // Man in a skirt (derogatory)

  // ========================================
  // === More Racial Slurs ================
  // ========================================
  // "indio" and "india" commented out — these are standard words for "Indian" and the
  // country name "India". Derogatory usage requires compound forms (kept below).
  // "indio": [5, 4], // Indian / indigenous (often derogatory in LatAm)
  // "india": [5, 4], // Fem Indian/indigenous (derogatory)
  "indio de mierda": [5, 5], // Shitty Indian (racist)
  "india de mierda": [5, 5], // Fem shitty Indian (racist)
  "indio pata rajada": [5, 4], // Indian with cracked feet (very racist, Colombia)
  "negro de mierda": [5, 5], // Shitty Black person (racist)
  "negra de mierda": [5, 5], // Fem shitty Black person (racist)
  "negro del orto": [5, 4], // Black from the ass (Argentina, very racist)
  "negra del orto": [5, 4], // Fem variant (Argentina, very racist)
  "negrazo": [5, 4], // Augmentative Black (racist)
  "negraco": [1, 4], // Ugly Black (very racist)
  "negro sucio": [5, 4], // Dirty Black (racist)
  "negra sucia": [5, 4], // Fem dirty Black (racist)
  "chino de mierda": [5, 5], // Shitty Chinese (racist, used for any Asian)
  "china de mierda": [5, 5], // Fem shitty Chinese (racist)
  "chino cochino": [5, 4], // Dirty Chinese (racist)
  "gitano de mierda": [5, 5], // Shitty gypsy (racist)
  "gitana de mierda": [5, 5], // Fem shitty gypsy (racist)
  "moro de mierda": [5, 5], // Shitty Moor (racist, Spain)
  "mora de mierda": [5, 5], // Fem shitty Moor (racist)
  "sudaca de mierda": [5, 5], // Shitty South American (racist, Spain)
  "gallego de mierda": [5, 5], // Shitty Galician (used in Argentina for Spanish people)
  "gringo de mierda": [5, 5], // Shitty gringo (LatAm)
  "gabacho de mierda": [5, 5], // Shitty French person (Spain)
  "pocho": [5, 4], // Americanized Mexican (Mexico, derogatory)
  "pocha": [5, 4], // Fem Americanized Mexican
  "charnego": [5, 4], // Derogatory for non-Catalan in Catalonia
  "charnega": [5, 4], // Fem charnego
  "morenito": [5, 4], // Diminutive dark-skinned (condescending)
  "morenita": [5, 4], // Fem diminutive dark-skinned
  "zambo": [5, 4], // Mixed Black/indigenous (can be derogatory)
  "zamba": [5, 4], // Fem zambo
  "cateto": [5, 4], // Hick / bumpkin (Spain)
  "cateta": [5, 4], // Fem hick (Spain)
  "paleto": [5, 4], // Hick / yokel (Spain)
  "paleta": [5, 4], // Fem hick (Spain)

  // ========================================
  // === Ableist Slurs ====================
  // ========================================
  "mogólico": [5, 4], // Variant of mongólico (very offensive)
  "mogólica": [5, 4], // Fem variant
  "down": [3, 4], // Down syndrome used as insult
  "síndrome de down": [5, 4], // Down syndrome used as insult
  "tullido": [5, 4], // Cripple (offensive)
  "tullida": [5, 4], // Fem cripple
  "lisiado": [5, 4], // Crippled (offensive)
  "lisiada": [5, 4], // Fem crippled
  "deforme": [5, 4], // Deformed (as insult)
  "anormal": [5, 4], // Abnormal (used as insult)
  "demente": [5, 4], // Demented (as insult)
  "loco de remate": [5, 4], // Completely crazy (offensive)
  "loca de remate": [5, 4], // Fem completely crazy
  "enfermo mental": [5, 4], // Mentally ill (as insult)
  "enferma mental": [5, 4], // Fem mentally ill
  "psicópata": [5, 4], // Psychopath (as insult)
  "esquizofrénico": [5, 4], // Schizophrenic (as insult)
  "esquizofrénica": [5, 4], // Fem schizophrenic
  "autista": [5, 4], // Autistic (used as insult in Spanish internet)
  "espástico": [5, 4], // Spastic (offensive)
  "espástica": [5, 4], // Fem spastic

  // ========================================
  // === More Sexual Terms ================
  // ========================================
  "misionero": [4, 4], // Missionary position
  "perrito": [4, 4], // Doggy style
  "cuatro": [4, 4], // On all fours (sexual)
  "a cuatro patas": [4, 4], // On all fours
  "de perrito": [4, 4], // Doggy style
  "beso negro": [4, 4], // Rimjob
  "lluvia dorada": [4, 4], // Golden shower
  "fisting": [4, 5], // Fisting (English loan)
  "doble penetración": [4, 4], // Double penetration
  "mamada profunda": [4, 4], // Deep throat
  "garganta profunda": [4, 4], // Deep throat
  "sexo duro": [4, 4], // Hard sex
  "sexo salvaje": [4, 4], // Wild sex
  "paja rusa": [4, 5], // Russian wank / titfuck
  "cubana": [4, 5], // Titfuck (Spain term)
  "francés": [4, 5], // French / oral sex (Spain slang)
  "griego": [4, 4], // Greek / anal sex (Spain slang)
  "trolero": [4, 4], // Related to trolling/whoring
  "garchar": [4, 5], // To fuck (Argentina variant spelling)
  "pisar": [4, 5], // To step on / to fuck (LatAm)
  "clavar": [4, 5], // To nail / to fuck
  "clavarse": [4, 5], // To nail oneself / to fuck
  "empotrar": [4, 5], // To ram / to fuck hard (Spain)
  "empotramiento": [4, 5], // Hard fuck (Spain)
  "empotrador": [4, 5], // Hard fucker (Spain)
  "empotradora": [4, 5], // Fem hard fucker (Spain)
  "dar duro": [4, 5], // To give it hard / to fuck hard
  "darle duro": [4, 4], // To give it to them hard
  "romper": [4, 5], // To break / to fuck hard
  "romperla": [4, 5], // To break it / to fuck hard
  "cepillar": [4, 5], // To brush / to fuck (Mexico/LatAm)
  "cepillarse": [4, 5], // To fuck (reflexive)
  "montar": [4, 5], // To mount / to ride / to fuck
  "montarse": [4, 4], // To mount oneself
  "cabalgar": [4, 5], // To ride / to fuck (on top)
  "acabar": [4, 4], // To finish / to cum
  "acabarse": [4, 4], // To finish / to cum
  "lechada": [4, 4], // Cum shot
  "lechazo": [4, 4], // Cum blast
  "lefazo": [4, 4], // Cum blast (Spain slang)
  "lefa": [4, 4], // Cum (Spain slang)
  "fluidos": [4, 4], // Fluids (sexual context)
  "lubricante": [4, 4], // Lubricant
  "consolarse": [4, 4], // To console oneself / to use a dildo
  "chupón": [4, 4], // Sucker / hickey
  "chupetón": [4, 4], // Hickey
  "morbo": [4, 4], // Morbid desire / kink (Spain)
  "morboso": [4, 4], // Kinky / perverted
  "morbosa": [4, 4], // Fem kinky
  "calenturiento": [4, 4], // Horny person
  "calenturienta": [4, 4], // Fem horny person
  "salido": [4, 4], // Horny (Spain)
  "salida": [4, 4], // Fem horny (Spain)
  "pajote": [4, 4], // Big wank
  "manuela": [4, 4], // Wank (slang name)
  "hacerse una manuela": [4, 4], // To wank
  "cascársela": [4, 4], // To wank (Spain)
  "pelársela": [4, 4], // To wank (Mexico)
  "jalársela": [4, 4], // To wank (Mexico)
  "hacérsela": [4, 4], // To do it to oneself
  "sobársela": [4, 4], // To rub it (Mexico)
  "tocarse": [4, 4], // To touch oneself
  "dedear": [4, 4], // To finger
  "dedearse": [4, 4], // To finger oneself
  "meter mano": [4, 4], // To feel up / to grope
  "manosear": [4, 4], // To grope
  "manoseo": [4, 4], // Groping
  "faje": [4, 4], // Makeout / groping session (Mexico)
  "fajarse": [4, 4], // To make out / grope (Mexico)
  "agarrón": [4, 4], // Groping session
  "arrimón": [4, 4], // Grinding against someone
  "refregarse": [4, 4], // To rub against someone
  "sexting": [4, 4], // Sexting (English loan, used in Spanish)
  "nudes": [4, 4], // Nudes (English loan, used in Spanish)
  "pack": [3, 4], // Nude photo set (Mexico/LatAm slang)
  "mandar pack": [4, 4], // To send nudes (Mexico)
  "putipobre": [5, 4], // Cheap whore
  "kinesiologa": [5, 4], // Prostitute (Argentina euphemism)
  "scort": [4, 5], // Escort (misspelling used in Spanish)
  "escort": [3, 4], // Escort
  "lumi": [5, 4], // Prostitute (Argentina)
  "traba": [4, 4], // Trans sex worker (Argentina, very derogatory)
  "tussi": [3, 4], // Girl / prostitute (Spain slang)

  // ========================================
  // === More Profane Exclamations ========
  // ========================================
  "su puta madre": [5, 4], // His/her whore mother
  "tu puta madre": [5, 4], // Your whore mother
  "la puta madre que los parió": [5, 4], // The whore mother that bore them
  "la gran puta madre": [5, 4], // The great whore mother
  "la remil puta": [5, 4], // The thousand-times whore (Argentina)
  "la remil puta madre": [5, 4], // The thousand-times whore mother (Argentina)
  "la re mil puta madre": [3, 5], // Spaced variant (Argentina)
  "requeteputamadre": [5, 5], // Ultra motherfucker
  "la reputa madre que te parió": [5, 4], // Ultra whore mother who bore you
  "por la cresta": [3, 4], // By the crest / damn (Chile)
  "cresta": [3, 4], // Crest / damn (Chile)
  "la crestá": [3, 4], // The damn (Chile)
  "mierda pura": [3, 5], // Pure shit
  "maldita mierda": [3, 5], // Damn shit
  "concha de la lora": [5, 5], // Parrot's cunt (Argentina exclamation)
  "qué carajo": [3, 4], // What the hell
  "qué mierda": [3, 5], // What the shit
  "qué coño": [5, 5], // What the cunt (Spain)
  "qué cojones": [4, 4], // What the balls (Spain)
  "qué putas": [3, 5], // What the fuck (Central America)
  "qué verga": [4, 4], // What the dick (Mexico)
  "qué pedo": [3, 4], // What the fart / what's up (Mexico)
  "ni verga": [4, 4], // Not a dick / nothing (Mexico)
  "ni mierda": [3, 5], // Not shit / nothing
  "un coño": [5, 5], // A cunt / not a thing (Spain)
  "una polla": [4, 4], // A dick / not a thing (Spain)
  "mis cojones": [4, 4], // My balls / no way (Spain)
  "y una mierda": [3, 5], // And a shit / no way
  "y un coño": [5, 5], // And a cunt / no way (Spain)
  "tócame los huevos": [4, 4], // Touch my balls (Spain, expression of annoyance)
  "me suda la polla": [4, 4], // My dick sweats / I don't care (Spain)
  "me la suda": [3, 4], // I don't care (Spain, vulgar)
  "me la pela": [3, 4], // It peels me / I don't care (Spain)
  "me la refanfinfla": [3, 4], // I don't care at all (Spain)
  "me importa un carajo": [3, 4], // I don't give a damn
  "me importa una mierda": [3, 5], // I don't give a shit
  "me importa un huevo": [3, 4], // I don't give an egg/ball
  "me importa un coño": [5, 5], // I don't give a cunt (Spain)
  "no me sale de los cojones": [4, 4], // It doesn't come from my balls / I don't want to (Spain)
  "no me sale de los huevos": [3, 4], // Variant with huevos
  "porque me sale de los cojones": [4, 4], // Because it comes from my balls / because I want to (Spain)
  "porque me da la gana": [1, 4], // Because I feel like it (milder)

  // ========================================
  // === Texting / Chat Evasions ==========
  // ========================================
  "mierdx": [3, 5], // Mierda - x ending (gender neutral evasion)
  "putx": [3, 5], // Puta/puto - x ending
  "pendejx": [3, 5], // Pendejo - x ending
  "culiadx": [3, 5], // Culiao - x ending
  "cabronx": [3, 5], // Cabrón - x ending
  "mrd": [2, 3], // Mierda abbreviated
  "vrg": [3, 5], // Verga abbreviated
  "cdso": [3, 5], // Culiazo (Chile)
  "hijoepta": [3, 5], // Hijo e puta abbreviated
  "hjpt": [3, 5], // Hijueputa abbreviated
  "pndj": [3, 5], // Pendejo abbreviated
  "cbrn": [3, 5], // Cabrón abbreviated
  "mrkon": [3, 5], // Maricón abbreviated
  "mkn": [3, 5], // Maricón abbreviated
  "prro": [3, 5], // Perro abbreviated

  // ========================================
  // === More Compound Regional Insults ===
  // ========================================
  "cara de nalga": [3, 4], // Buttock face
  "cara de sapo": [1, 4], // Toad face
  "cara de imbécil": [1, 4], // Imbecile face
  "cara de pendejo": [1, 4], // Idiot face
  "cara de estúpido": [1, 4], // Stupid face
  "cara de idiota": [1, 4], // Idiot face
  "cara de huevo": [1, 4], // Egg face / ball face
  "nariz de polla": [4, 4], // Dick nose
  "come pollas": [4, 4], // Dick eater
  "come vergas": [4, 4], // Dick eater (LatAm)
  "come pingas": [4, 4], // Dick eater (Caribbean)
  "tragapollas": [4, 4], // Dick swallower (Spain)
  "tragapolla": [4, 4], // Dick swallower singular (Spain)
  "traga semen": [1, 4], // Cum swallower
  "tragamocos": [1, 4], // Snot swallower
  "roba gallinas": [1, 4], // Chicken thief (derogatory)
  "muerto de hambre": [5, 5], // Starving to death / lowlife
  "muerta de hambre": [1, 4], // Fem starving / lowlife
  "nini": [5, 5], // Neither studies nor works (Spain/Mexico)
  "arrastrado": [1, 4], // Dragged / pathetic (LatAm)
  "arrastrada": [1, 4], // Fem pathetic
  "perro sarnoso": [1, 4], // Mangy dog
  "gata barata": [5, 4], // Cheap cat / whore (Argentina)
  "yegua": [1, 4], // Mare / bitch (Argentina)
  "chancha": [1, 4], // Sow / pig (Argentina)
  "chancho": [1, 4], // Pig (Argentina)
  "gordo de mierda": [1, 4], // Fat piece of shit
  "gorda de mierda": [1, 4], // Fem fat piece of shit
  "feo de mierda": [1, 4], // Ugly piece of shit
  "fea de mierda": [1, 4], // Fem ugly piece of shit
  "viejo de mierda": [3, 5], // Old piece of shit
  "vieja de mierda": [3, 5], // Old hag piece of shit
  "vieja chota": [1, 4], // Old broken-down woman (Argentina)
  "viejo choto": [1, 4], // Old broken-down man (Argentina)
  "choto": [3, 5], // Broken / shitty (Argentina)
  "chota": [4, 5], // Broken / shitty / dick (Argentina)
  "guacho": [3, 4], // Orphan / bastard (Argentina)
  "guacha": [3, 4], // Fem orphan / bastard (Argentina)
  "negro villero": [5, 4], // Black slum person (Argentina, very racist)
  "villero": [1, 4], // Slum person (Argentina, derogatory)
  "villera": [1, 4], // Fem slum person (Argentina)
  "cabeza de tacho": [1, 4], // Bucket head / lowlife (Argentina)
  "cabeza": [1, 4], // Head / lowlife (Argentina)
  "groncho": [3, 4], // Low-class (Argentina)
  "groncha": [3, 4], // Fem low-class (Argentina)
  "mersa": [3, 4], // Tacky / low-class (Argentina)
  "croto": [1, 4], // Bum / hobo (Argentina)
  "crota": [1, 4], // Fem bum (Argentina)
  "garca": [1, 4], // Scammer / cheater (Argentina)
  "vago de mierda": [3, 5], // Shitty bum
  "vaga de mierda": [3, 5], // Fem shitty bum
  "ñoqui": [1, 4], // Gnocchi / do-nothing employee (Argentina)
  "come gato": [5, 4], // Cat eater (racist, Argentina for Asian)
  "panchito": [1, 4], // Derogatory for Bolivian/Peruvian (Argentina)
  "panchita": [1, 4], // Fem derogatory
  "paragua": [1, 4], // Derogatory for Paraguayan (Argentina)
  "bolita": [1, 4], // Derogatory for Bolivian (Argentina)
  "peruca": [1, 4], // Derogatory for Peruvian (Argentina)
  "brasuca": [1, 4], // Derogatory for Brazilian (Argentina)
  "planero": [1, 4], // Welfare recipient (Argentina, derogatory)
  "planera": [1, 4], // Fem welfare recipient
  "kumpa": [1, 3], // Corrupt supporter (Argentina political slang)
  "kukas": [1, 4], // Derogatory for political supporters (Argentina)

  // ========================================
  // === Spanish Spain Additional =========
  // ========================================
  "hijoputa": [3, 4], // Son of a bitch (Spain contracted)
  "hijoputas": [3, 4], // Plural sons of bitches
  "giliflautas": [1, 4], // Idiot (Spain, variant of gilipollas)
  "imbécil integral": [3, 4], // Total imbecile
  "tonto de los cojones": [1, 4], // Ball-level idiot (Spain)
  "tonta de los cojones": [1, 4], // Fem ball-level idiot (Spain)
  "gilipollas integral": [3, 4], // Total asshole
  "subnormal perdido": [3, 4], // Complete retard (very offensive)
  "puto amo": [3, 5], // Fucking boss (positive/negative)
  "mierda pinchada en un palo": [3, 5], // Shit stuck on a stick (Spain)
  "anda y que te follen": [3, 5], // Go get fucked (Spain)
  "anda a cagar": [3, 5], // Go take a shit (Spain)
  "corta el rollo": [3, 4], // Cut the crap (Spain)
  "borde": [3, 4], // Rude / sharp (Spain)
  "capullo de mierda": [3, 5], // Shitty foreskin/asshole (Spain)
  "gilipollas de mierda": [3, 5], // Shitty asshole (Spain)
  "payaso de mierda": [3, 5], // Shitty clown (Spain)
  "mamoncete": [3, 4], // Little jerk (Spain)
  "lechoso": [3, 4], // Cum-covered / lucky (Spain)
  "empanao": [3, 4], // Clueless / out of it (Spain)
  "zorrita": [3, 4], // Little slut (Spain)
  "petardo": [1, 4], // Firecracker / ugly person (Spain)
  "petarda": [1, 4], // Fem firecracker / ugly (Spain)
  "hijaputa": [3, 4], // Daughter of a bitch (Spain contracted)
  "hijaputas": [3, 4], // Plural daughters of bitches
  "lechero de mierda": [3, 5], // Shitty lucky/annoying person (Spain)
  "bocachancla": [3, 4], // Loose lips / loudmouth (Spain)
  "bocazas": [3, 4], // Big mouth (Spain)

  // ========================================
  // === Compound Insults & Combinations ===
  // ========================================
  "pedazo de cabrón": [3, 4], // Piece of bastard
  "pedazo de estúpido": [1, 4], // Piece of stupid
  "pedazo de escoria": [1, 4], // Piece of scum
  "pedazo de inútil": [1, 4], // Piece of useless
  "tremendo idiota": [1, 4], // Tremendous idiot
  "tremendo imbécil": [1, 4], // Tremendous imbecile
  "tremendo hijo de puta": [1, 4], // Tremendous son of a bitch
  "menudo cabrón": [3, 4], // What a bastard
  "menudo gilipollas": [3, 4], // What an asshole
  "menuda mierda": [3, 5], // What a shit
  "menudo imbécil": [1, 4], // What an imbecile
  "puto asco": [3, 5], // Fucking disgust
  "puto cabrón": [3, 4], // Fucking bastard
  "puta basura": [3, 5], // Fucking trash
  "puto idiota": [1, 4], // Fucking idiot
  "puta perra": [3, 5], // Fucking bitch
  "puto pendejo": [3, 5], // Fucking asshole
  "puto estúpido": [1, 4], // Fucking stupid
  "maldito pendejo": [3, 4], // Damn asshole
  "maldita puta": [5, 4], // Damn whore
  "maldito imbécil": [1, 4], // Damn imbecile
  "maldito idiota": [1, 4], // Damn idiot
  "maldita zorra": [1, 4], // Damn fox/slut
  "maldito cerdo": [1, 4], // Damn pig
  "maldita escoria": [1, 4], // Damn scum
  "pinche puto": [3, 5], // Fucking faggot (Mexico)
  "pinche perro": [3, 5], // Fucking dog (Mexico)
  "pinche rata": [3, 5], // Fucking rat (Mexico)
  "pinche escoria": [3, 5], // Fucking scum (Mexico)
  "jodido pendejo": [3, 5], // Fucked-up asshole
  "jodido idiota": [1, 4], // Fucked-up idiot
  "jodido cabrón": [3, 4], // Fucked-up bastard
  "jodida puta": [5, 5], // Fucked-up whore
  "condenado idiota": [1, 4], // Condemned idiot
  "condenada puta": [5, 4], // Condemned whore
  "hijo de puta asqueroso": [1, 4], // Disgusting son of a bitch
  "hija de la gran puta": [5, 4], // Daughter of the great whore
  "cara de polla": [4, 4], // Dick face
  "cara de rata": [1, 4], // Rat face
  "cara de perro": [1, 4], // Dog face
  "cabeza de polla": [4, 4], // Dick head
  "cabeza de chorlito": [1, 4], // Plover head (scatterbrain)
  "cabeza de alcornoque": [1, 4], // Cork oak head (blockhead)
  "cabeza hueca": [1, 4], // Hollow head
  "cerebro de mosquito": [1, 4], // Mosquito brain
  "te voy a matar": [1, 4], // I'm going to kill you
  "te voy a partir la cara": [1, 4], // I'll split your face
  "te voy a romper la cara": [1, 4], // I'll break your face
  "te voy a reventar": [1, 4], // I'll burst you
  "cierra la boca": [1, 4], // Close your mouth
  "cállate la boca": [1, 4], // Shut your mouth
  "cierra el pico": [1, 4], // Close your beak (shut up)
  "cierra el hocico": [1, 4], // Close your snout
  "a mamar": [1, 4], // Go suck (vulgar dismissal)
  "chúpame la polla": [4, 4], // Suck my dick (Spain)
  "lámeme el culo": [3, 4], // Lick my ass
  "cómeme los huevos": [4, 4], // Eat my balls (Spain)
  "bésame el culo": [3, 4], // Kiss my ass
  "me importa un cojón": [1, 4], // I don't give a ball
  "me importa tres cojones": [4, 4], // I give three balls (I don't care)

  // ========================================
  // === Mexican Spanish ===================
  // ========================================
  "chinga tu puta madre": [5, 5], // Fuck your whore mother (Mexico)
  "chingoncísimo": [3, 4], // Super badass (Mexico)
  "a la chingada": [3, 5], // To the fucked (Mexico, get lost)
  "no me chingues": [3, 5], // Don't fuck with me (Mexico)
  "ya chingaste": [3, 5], // You already fucked up (Mexico)
  "me vale madres": [3, 4], // I don't give a damn (Mexico)
  "vale madres": [3, 4], // Worth mothers (Mexico)
  "mamalón": [3, 4], // Arrogant (Mexico)
  "corriente": [3, 4], // Common / vulgar (Mexico)
  "gata": [3, 4], // Cat / maid (Mexico derog.)
  "chamaco pendejo": [1, 4], // Stupid kid (Mexico)
  "a toda verga": [4, 4], // At full dick (Mexico, awesome)
  "panocha": [4, 4], // Pussy (Mexico)
  "ojetes": [3, 4], // Assholes (Mexico)
  "cabroncete": [3, 4], // Little bastard (Mexico)
  "cabroncísimo": [3, 4], // Super bastard (Mexico)
  "de huevos": [4, 4], // Of balls (Mexico, awesome)
  "piruja": [5, 4], // Whore (Mexico)
  "pirujo": [5, 4], // Male whore (Mexico)
  "golfo": [3, 4], // Bum (Mexico)
  "lépero": [3, 4], // Vulgar person (Mexico)
  "lépera": [3, 4], // Vulgar person (f.) (Mexico)
  "méndigo": [3, 4], // Beggar / bastard (Mexico)
  "méndiga": [3, 4], // Beggar (f.) (Mexico)
  "pelado": [3, 4], // Broke / vulgar (Mexico)
  "pelada": [3, 4], // Broke (f.) (Mexico)
  "prieto": [3, 4], // Dark-skinned (Mexico, can be derog.)
  "prieta": [3, 4], // Dark-skinned (f.) (Mexico)

  // ========================================
  // === Argentine Spanish =================
  // ========================================
  "garchada": [3, 5], // Fuck (noun, Argentina)
  "garchó": [3, 5], // Fucked (Argentina)
  "ortear": [3, 5], // To ass-fuck (Argentina)
  "orto": [3, 4], // Ass (Argentina)
  "conchuda": [5, 5], // Big-cunted (Argentina)
  "concha de tu madre": [4, 4], // Your mother's pussy (Argentina)
  "la concha del mono": [4, 4], // The monkey's pussy (Argentina)
  "la re puta madre": [5, 4], // The super whore mother (Argentina)
  "andá a cagar": [3, 5], // Go shit (Argentina)
  "chupámela": [3, 4], // Suck it (Argentina)
  "chupame un huevo": [3, 4], // Suck my ball (Argentina)
  "no me rompas las pelotas": [4, 4], // Don't break my balls (Argentina)
  "no me rompás las bolas": [4, 4], // Don't break my balls (Argentina)
  "rompehuevos": [3, 4], // Ball breaker (Argentina)
  "cara de orto": [3, 4], // Ass face (Argentina)
  "careta": [3, 4], // Mask / fake (Argentina)
  "atorranta": [3, 4], // Bum (f.) (Argentina)
  "afanar": [3, 4], // To steal (Argentina)
  "afanancio": [3, 4], // Thief (Argentina)
  "bagayo": [1, 4], // Ugly thing/person (Argentina)
  "bagarto": [1, 4], // Ugly person (Argentina)
  "bardear": [3, 4], // To disrespect (Argentina)
  "cabecita": [3, 4], // Little head (derog. for poor, Argentina)
  "grasa": [3, 4], // Grease (lowlife, Argentina)
  "negrada": [5, 4], // Black behavior (Argentina racist)
  "villereada": [3, 4], // Slum behavior (Argentina derog.)
  "puteada": [3, 4], // Cursing (Argentina)
  "puterio": [5, 4], // Whorehouse / drama (Argentina)

  // ========================================
  // === Colombian Spanish =================
  // ========================================
  "gonorriento": [3, 4], // Gonorrhea-ridden (Colombia)
  "maricona": [3, 4], // Faggot (f.) (Colombia)
  "güevona": [3, 4], // Lazy (f.) (Colombia)
  "sapa": [3, 4], // Snitch (f.) (Colombia)
  "cachona": [3, 4], // Cuckold (f.) (Colombia)
  "sardina": [3, 4], // Sardine / young girl (Colombia derog.)
  "lampara": [3, 4], // Lamp / show-off (Colombia)
  "montañero": [3, 4], // Hillbilly (Colombia)
  "montañera": [3, 4], // Hillbilly (f.) (Colombia)
  "roscón": [3, 4], // Ring cake / fag (Colombia)
  "solapado": [3, 4], // Sneaky (Colombia)
  "solapada": [3, 4], // Sneaky (f.) (Colombia)

  // ========================================
  // === Venezuelan Spanish ================
  // ========================================
  "coño e madre": [5, 5], // Cunt of mother (Venezuela)
  "cachicamo": [3, 4], // Armadillo / cuckold (Venezuela)
  "vergatario": [4, 4], // Dick-like (Venezuela)
  "arrecha": [3, 4], // Horny / angry (f.) (Venezuela)
  "mardito": [3, 4], // Damned (Venezuela)
  "mardita": [3, 4], // Damned (f.) (Venezuela)
  "cuaima": [3, 4], // Bushmaster snake / jealous woman (Venezuela)
  "chamo pendejo": [1, 4], // Stupid dude (Venezuela)
  "chama pendeja": [1, 4], // Stupid girl (Venezuela)

  // ========================================
  // === Chilean Spanish ===================
  // ========================================
  "weada": [1, 4], // Thing / stupidity (Chile)
  "culiá": [3, 5], // Ass-fucked abbrev. (Chile)
  "pichula": [4, 4], // Dick (Chile)
  "callampa": [4, 4], // Mushroom / dick (Chile)
  "rajado": [3, 4], // Split / cheap (Chile)
  "chuchetumadre": [3, 4], // Variant of conchetumadre (Chile)
  "chuchada": [3, 4], // Profanity (Chile)
  "flaita": [3, 4], // Trashy (f.) (Chile)
  "rotería": [3, 4], // Lowlife behavior (Chile)
  "pelusón": [3, 4], // Cheap / envious (Chile)
  "pelusona": [3, 4], // Cheap (f.) (Chile)
  "patudo": [3, 4], // Big-footed / shameless (Chile)
  "patuda": [3, 4], // Shameless (f.) (Chile)
  "perkinazo": [3, 4], // Boot-licking (Chile)

  // ========================================
  // === Peruvian Spanish ==================
  // ========================================
  "cojudez": [1, 4], // Stupidity (Peru)
  "chuchasumadre": [4, 4], // His mother's pussy (Peru)
  "caracho": [3, 4], // Damn variant (Peru)
  "ayayay": [3, 4], // Expression of frustration (Peru)
  "zamboa": [3, 4], // Mixed (f.) (Peru)
  "huachafo": [3, 4], // Tacky (Peru)
  "huachafa": [3, 4], // Tacky (f.) (Peru)
  "lorna": [1, 4], // Fool (Peru)

  // ========================================
  // === Cuban Spanish =====================
  // ========================================
  "singada": [3, 5], // Fucked (f.) (Cuba)
  "guajiro": [3, 4], // Peasant (Cuba, can be derog.)
  "guajira": [3, 4], // Peasant (f.) (Cuba)
  "jinetero": [3, 4], // Hustler (Cuba)
  "jinetera": [5, 4], // Hustler (f.) / prostitute (Cuba)
  "tremendo": [3, 4], // Tremendous (Cuba intensifier)
  "tremendísimo": [3, 4], // Super tremendous (Cuba)
  "caballo": [3, 4], // Horse / dude (Cuba)
  "yuma": [3, 4], // Foreigner (Cuba)

  // ========================================
  // === Dominican Spanish =================
  // ========================================
  "tiguere": [3, 4], // Tiger / hustler (Dominican)
  "tiguerito": [3, 4], // Little tiger (Dominican)
  "maldito sea": [3, 4], // Damn it (Dominican)
  "diache": [3, 4], // Devil / damn (Dominican)
  "diablo": [3, 4], // Devil (Dominican exclamation)
  "tetú": [4, 4], // Big-titted (Dominican)
  "tatatú": [1, 4], // Stupid (Dominican)
  "caripelao": [3, 4], // Shameless face (Dominican)
  "pariguaya": [1, 4], // Loser (f.) (Dominican)
  "bruto": [1, 4], // Brute / stupid (Dominican)
  "bruta": [3, 4], // Brute (f.) (Dominican)
  "palomo": [3, 4], // Pigeon / cuckold (Dominican)
  "cafre": [3, 4], // Savage (Dominican)

  // ========================================
  // === Puerto Rican Spanish ==============
  // ========================================
  "bicha": [3, 4], // Bug / bitch (Puerto Rico)
  "mamabicho": [4, 4], // Dick sucker compound (Puerto Rico)
  "lambeculos": [3, 4], // Ass licker (Puerto Rico)
  "lambeojo": [3, 4], // Eye licker / bootlicker (Puerto Rico)
  "bochinchero": [3, 4], // Gossiper (Puerto Rico)
  "bochinchera": [3, 4], // Gossiper (f.) (Puerto Rico)
  "bellaco": [3, 4], // Horny / rogue (Puerto Rico)
  "bellaca": [3, 4], // Horny (f.) (Puerto Rico)
  "chamaquito pendejo": [1, 4], // Stupid little kid (Puerto Rico)
  "jodío": [3, 5], // Fucked (Puerto Rico)
  "jodía": [3, 5], // Fucked (f.) (Puerto Rico)
  "lechón": [3, 4], // Piglet / pervert (Puerto Rico)
  "gandúl": [3, 4], // Lazy bum (Puerto Rico)
  "gandúla": [3, 4], // Lazy bum (f.) (Puerto Rico)

  // ========================================
  // === Ecuadorian Spanish ================
  // ========================================
  "montubio": [3, 4], // Coastal peasant (Ecuador, can be derog.)
  "montubia": [3, 4], // Coastal peasant (f.) (Ecuador)
  "manazo": [3, 4], // Manabí person (Ecuador, can be derog.)
  "pelucón": [3, 4], // Big-haired / rich (Ecuador derog.)
  "pelucona": [3, 4], // Rich (f.) (Ecuador)

  // ========================================
  // === Bolivian Spanish ==================
  // ========================================
  "caray": [3, 4], // Damn (Bolivia)
  "caramba": [3, 4], // Damn (Bolivia)
  "colla": [3, 4], // Highlander (Bolivia, can be derog.)
  "camba": [3, 4], // Lowlander (Bolivia, can be derog.)
  "llokallada": [3, 4], // Bratty behavior (Bolivia)

  // ========================================
  // === Uruguayan Spanish =================
  // ========================================
  "la puta madre": [5, 4], // The whore mother (Uruguay)
  "la reconcha de tu madre": [4, 4], // Your mother's re-pussy (Uruguay)
  "la reputa madre": [5, 4], // The re-whore mother (Uruguay)
  "ortiba": [3, 4], // Snitch (Uruguay, vesre)
  "botón": [3, 4], // Button / snitch (Uruguay)
  "chorro": [3, 4], // Thief (Uruguay)
  "chorra": [3, 4], // Thief (f.) (Uruguay)
  "plancha": [3, 4], // Iron / lowlife (Uruguay)
  "planchón": [3, 4], // Big lowlife (Uruguay)

  // ========================================
  // === Paraguayan Spanish ================
  // ========================================
  "kurái": [3, 5], // Shit (Paraguay, Guaraní)
  "ndéra kué": [3, 4], // Damn that (Paraguay)
  "avare": [3, 4], // Miser (Paraguay, from Guaraní)
  "mitá'i kure": [3, 4], // Pig kid (Paraguay)
  "kure": [3, 4], // Pig (Paraguay, Guaraní)
  "tayy": [1, 4], // Stupid variant (Paraguay)

  // ========================================
  // === Sexual Terms & Compounds ==========
  // ========================================
  "cogiéndola": [4, 5], // Fucking her
  "follada": [4, 5], // Fuck (noun, Spain)
  "follón": [4, 5], // Mess / big fuck (Spain)
  "tirada": [4, 5], // Fuck (noun, Argentina)
  "culeada": [4, 5], // Ass-fuck (noun)
  "chupada": [4, 5], // Blowjob
  "chupar la polla": [4, 4], // To suck dick
  "chupar la verga": [4, 4], // To suck dick (Latin Am.)
  "mamar la polla": [4, 4], // To suck dick
  "mamar la verga": [4, 4], // To suck dick (Latin Am.)
  "penetración": [4, 4], // Penetration
  "penetración anal": [4, 4], // Anal penetration
  "masturbación": [4, 4], // Masturbation
  "eyaculación": [4, 4], // Ejaculation
  "esperma": [4, 4], // Sperm
  "prostitución": [5, 4], // Prostitution
  "meretriz": [5, 4], // Prostitute (formal)
  "mujerzuela": [4, 4], // Loose woman
  "calentón": [4, 4], // Horny person (m.)
  "calentona": [4, 4], // Horny person (f.)
  "calentorro": [4, 4], // Very horny (m.)
  "calentorra": [4, 4], // Very horny (f.)
  "pederasta": [4, 4], // Pederast
  "acosador": [4, 4], // Harasser
  "acosadora": [4, 4], // Harasser (f.)
  "voyerista": [4, 4], // Voyeur
  "exhibicionista": [4, 4], // Exhibitionist
  "fetichista": [4, 4], // Fetishist
  "sadomasoquista": [4, 4], // Sadomasochist
  "fornicar": [4, 4], // To fornicate

  // ========================================
  // === Scatological Terms ================
  // ========================================
  "cagado": [3, 4], // Shat / scared
  "cagarse": [3, 5], // To shit oneself
  "cagadera": [3, 4], // Diarrhea
  "cagazo": [3, 5], // Big shit / big scare
  "diarrea": [3, 4], // Diarrhea
  "pedos": [3, 4], // Farts
  "pedorro": [3, 4], // Farty
  "pedorra": [3, 4], // Farty (f.)
  "pedorrera": [3, 4], // Farting spree
  "echarse un pedo": [3, 4], // To let a fart
  "meada": [3, 4], // Piss (noun)
  "meado": [3, 4], // Pissed on
  "meón": [3, 4], // Pisser (m.)
  "meona": [3, 4], // Pisser (f.)
  "orina": [3, 4], // Urine
  "orinar": [3, 4], // To urinate
  "vómito": [3, 4], // Vomit
  "eructo": [3, 4], // Burp
  "eructar": [3, 4], // To burp

  // ========================================
  // === Intelligence Insults ==============
  // ========================================
  "borrico": [1, 4], // Donkey (stupid)
  "borrica": [1, 4], // Donkey (f.) (stupid)
  "burro": [1, 4], // Donkey (stupid)
  "burra": [1, 4], // Donkey (f.) (stupid)
  "calabaza": [1, 4], // Pumpkin (stupid)
  "cenutrio": [1, 4], // Dimwit (Spain)
  "ceporro": [1, 4], // Blockhead (Spain)
  "ignorante": [1, 4], // Ignorant
  "papanatas": [1, 4], // Gawker (fool)
  "pasmarote": [1, 4], // Dazed person
  "simple": [3, 4], // Simple (stupid)
  "simplón": [3, 4], // Simpleton
  "simplona": [3, 4], // Simpleton (f.)
  "tarugo": [3, 4], // Blockhead
  "taruga": [3, 4], // Blockhead (f.)
  "tontorrón": [1, 4], // Big stupid
  "tontorrona": [1, 4], // Big stupid (f.)
  "tontolaba": [3, 4], // Big silly
  "tontolculo": [3, 4], // Silly-assed
  "tonta del culo": [1, 4], // Ass-stupid (f.) (Spain)
  "tonto del bote": [1, 4], // Can-stupid (Spain)
  "zoquete": [3, 4], // Blockhead
  "zoqueta": [3, 4], // Blockhead (f.)
  "alcornoque": [3, 4], // Cork oak (blockhead)
  "adoquín": [3, 4], // Paving stone (blockhead)
  "badulaque": [1, 4], // Fool
  "besugo": [1, 4], // Sea bream (idiot)
  "bodoque": [1, 4], // Lump (idiot, Mexico)
  "bobalicón": [1, 4], // Big fool
  "bobalicona": [1, 4], // Big fool (f.)
  "berzas": [1, 4], // Cabbages (stupid)
  "cazurro": [1, 4], // Dumb (Spain)
  "cazurra": [1, 4], // Dumb (f.) (Spain)

  // ========================================
  // === Appearance Insults ================
  // ========================================
  "feo": [1, 4], // Ugly (m.)
  "fea": [1, 4], // Ugly (f.)
  "feísimo": [1, 4], // Very ugly (m.)
  "feísima": [1, 4], // Very ugly (f.)
  "mamarracha": [1, 4], // Clown (f.) / ugly
  "callo": [1, 4], // Callus (ugly, Spain)
  "cardo": [1, 4], // Thistle (ugly, Spain)
  "bagre": [1, 4], // Catfish (ugly, Latin Am.)
  "gordo": [1, 4], // Fat (m.)
  "gorda": [1, 4], // Fat (f.)
  "gordaco": [1, 4], // Very fat (m.)
  "gordaca": [1, 4], // Very fat (f.)
  "gordinflas": [1, 4], // Fatty
  "ballena": [1, 4], // Whale
  "vaca": [1, 4], // Cow
  "foca": [1, 4], // Seal (fat person)
  "elefante": [1, 4], // Elephant (fat)
  "hipopótamo": [1, 4], // Hippopotamus (fat)
  "barril": [1, 4], // Barrel (fat)
  "flaco": [1, 4], // Skinny (can be derog.)
  "flaca": [1, 4], // Skinny (f.)
  "flacucho": [1, 4], // Scrawny
  "flacucha": [1, 4], // Scrawny (f.)
  "esqueleto": [1, 4], // Skeleton
  "tabla": [1, 4], // Board (flat-chested)
  "enano": [1, 4], // Dwarf (derog.)
  "enana": [1, 4], // Dwarf (f.)
  "cuatro ojos": [1, 4], // Four eyes

  // ========================================
  // === Behavioral Insults ================
  // ========================================
  "aprovechado": [1, 4], // Freeloader (m.)
  "aprovechada": [1, 4], // Freeloader (f.)
  "bocón": [1, 4], // Big mouth
  "bocona": [1, 4], // Big mouth (f.)
  "bravucón": [1, 4], // Bully
  "bravucona": [1, 4], // Bully (f.)
  "caraduras": [1, 4], // Shameless
  "chismoso": [1, 4], // Gossip (m.)
  "chismosa": [1, 4], // Gossip (f.)
  "cínico": [1, 4], // Cynic (shameless)
  "cínica": [1, 4], // Cynic (f.)
  "embustero": [1, 4], // Liar
  "embustera": [1, 4], // Liar (f.)
  "estafador": [1, 4], // Swindler
  "estafadora": [1, 4], // Swindler (f.)
  "fanfarrón": [1, 4], // Show-off
  "fanfarrona": [1, 4], // Show-off (f.)
  "flojo": [1, 4], // Lazy
  "floja": [1, 4], // Lazy (f.)
  "gorrón": [1, 4], // Freeloader
  "gorrona": [1, 4], // Freeloader (f.)
  "hipócrita": [1, 4], // Hypocrite
  "holgazán": [1, 4], // Lazybones
  "holgazana": [1, 4], // Lazybones (f.)
  "haragán": [1, 4], // Idler
  "haragana": [1, 4], // Idler (f.)
  "ladrón": [1, 4], // Thief
  "ladrona": [1, 4], // Thief (f.)
  "lamesuelas": [1, 4], // Sole licker
  "mentiroso": [1, 4], // Liar
  "mentirosa": [1, 4], // Liar (f.)
  "metiche": [1, 4], // Nosy (Mexico)
  "metomentodo": [1, 4], // Meddler
  "parásita": [1, 4], // Parasite (f.)
  "pelota": [1, 4], // Ball (bootlicker)
  "pelotillero": [1, 4], // Ball-polisher (bootlicker)
  "pelotillera": [1, 4], // Ball-polisher (f.)
  "quejica": [1, 4], // Whiner
  "rastrero": [1, 4], // Groveling
  "rastrera": [1, 4], // Groveling (f.)
  "sabelotodo": [1, 4], // Know-it-all
  "soplón": [1, 4], // Snitch (m.)
  "soplona": [1, 4], // Snitch (f.)
  "tacaño": [1, 4], // Stingy
  "tacaña": [1, 4], // Stingy (f.)
  "tramposo": [1, 4], // Cheater
  "tramposa": [1, 4], // Cheater (f.)
  "vago": [1, 4], // Lazy
  "vaga": [1, 4], // Lazy (f.)
  "vividor": [1, 4], // Freeloader
  "vividora": [1, 4], // Freeloader (f.)

  // ========================================
  // === Slurs (Ethnic/Religious/LGBTQ) ====
  // ========================================
  "mora": [5, 4], // Moor (f.)
  "morazo": [5, 4], // Big Moor (Spain)
  "mariconcete": [5, 4], // Little faggot
  "marica de mierda": [5, 5], // Shitty fag
  "marimandona": [5, 4], // Bossy butch
  "deficiente": [5, 4], // Deficient (ableist)
  "deficiente mental": [5, 4], // Mentally deficient
  "inadaptado": [5, 4], // Maladjusted
  "inadaptada": [5, 4], // Maladjusted (f.)
  "antisocial": [5, 4], // Antisocial
  "basura humana": [5, 4], // Human trash

  // ========================================
  // === Evasion Spellings =================
  // ========================================
  "m*erda": [3, 5], // Mierda with *
  "p*ta": [3, 5], // Puta with *
  "h1jo de puta": [5, 5], // Hijo de puta with 1
  "hij0 de puta": [5, 5], // Hijo de puta with 0
  "c4brón": [3, 5], // Cabrón with 4
  "c*brón": [3, 5], // Cabrón with *
  "p*ndejo": [3, 5], // Pendejo with *
  "g1lipollas": [3, 5], // Gilipollas with 1
  "g*lipollas": [3, 5], // Gilipollas with *
  "c*ño": [3, 5], // Coño with *
  "p*lla": [3, 5], // Polla with *
  "j*der": [3, 5], // Joder with *
  "h i j o d e p u t a": [5, 5], // Hijo de puta spaced
  "c a b r ó n": [3, 5], // Cabrón spaced
  "p e n d e j o": [3, 5], // Pendejo spaced
  "g i l i p o l l a s": [3, 5], // Gilipollas spaced
  "c h i n g a": [3, 5], // Chinga spaced
  "pu.ta": [3, 5], // Puta with dot
  "pu-ta": [3, 5], // Puta with dash
  "mi.erda": [3, 5], // Mierda with dot
  "jo.der": [3, 5], // Joder with dot

  // ========================================
  // === Internet Slang & Gaming ===========
  // ========================================
  "noob": [1, 2], // Noob
  "nub": [3, 4], // Noob variant
  "campero": [2, 3], // Camper (gaming)
  "tryhard": [1, 2], // Tryhard
  "toxic": [3, 4], // Toxic (gaming)
  "manco": [2, 3], // One-handed / bad player
  "manca": [2, 3], // Bad player (f.)
  "parguela": [1, 4], // Fool (Spain gaming)
  "asco de persona": [2, 3], // Disgusting person
  "asco de vida": [2, 3], // Disgusting life
  "ojalá te atropelle un coche": [2, 3], // I hope a car runs you over
  "matate": [5, 5], // Kill yourself
  "suicídate": [5, 5], // Commit suicide
  "kys": [5, 5], // Kill yourself (gaming)
  "gg ez": [3, 4], // Good game easy (taunt)
  "lol noob": [2, 3], // Laugh out loud noob

  // ========================================
  // === Verb Conjugations =================
  // ========================================
  // --- joder (to fuck) ---
  "jodo": [3, 5], // I fuck
  "jodes": [3, 5], // You fuck
  "jode": [3, 5], // He/she fucks
  "jodemos": [3, 5], // We fuck
  "joden": [3, 5], // They fuck
  "jodí": [3, 5], // I fucked
  "jodió": [3, 5], // He/she fucked
  "jodiendo": [3, 5], // Fucking
  // --- follar (to fuck, Spain) ---
  "follo": [3, 5], // I fuck
  "follas": [3, 5], // You fuck
  "folla": [3, 5], // He/she fucks
  "follamos": [3, 5], // We fuck
  "follan": [3, 5], // They fuck
  "follé": [3, 5], // I fucked
  "folló": [3, 5], // He/she fucked
  "follado": [3, 5], // Fucked
  "follando": [3, 5], // Fucking
  // --- cagar (to shit) ---
  "cago": [3, 5], // I shit
  "cagas": [3, 5], // You shit
  "caga": [3, 5], // He/she shits
  "cagamos": [3, 5], // We shit
  "cagan": [3, 5], // They shit
  "cagué": [3, 4], // I shat
  "cagó": [3, 4], // He/she shat
  "cagando": [3, 5], // Shitting
  // --- mear (to piss) ---
  "meas": [3, 4], // You piss
  "mea": [3, 4], // He/she pisses
  "meamos": [3, 4], // We piss
  "meé": [3, 4], // I pissed
  "meó": [3, 4], // He/she pissed
  "meando": [3, 4], // Pissing
  // --- chingar (to fuck, Mexico) ---
  "chingo": [3, 5], // I fuck (Mexico)
  "chingas": [3, 5], // You fuck (Mexico)
  "chinga": [3, 5], // He/she fucks (Mexico)
  "chingamos": [3, 5], // We fuck (Mexico)
  "chingan": [3, 5], // They fuck (Mexico)
  "chingó": [3, 5], // He/she fucked (Mexico)
  "chingando": [3, 5], // Fucking (Mexico)
  // --- coger (to fuck, Latin Am.) ---
  "cojo": [3, 5], // I fuck (Latin Am.)
  "coges": [3, 5], // You fuck
  "coge": [3, 5], // He/she fucks
  "cogemos": [3, 5], // We fuck
  "cogen": [3, 5], // They fuck
  "cogí": [3, 5], // I fucked
  "cogió": [3, 5], // He/she fucked
  "cogiendo": [3, 5], // Fucking
  // --- putear (to curse/insult) ---
  "puteo": [1, 4], // I curse
  "puteas": [1, 4], // You curse
  "putea": [1, 4], // He/she curses
  "puteamos": [1, 4], // We curse
  "putean": [1, 4], // They curse
  "puteé": [1, 4], // I cursed
  "puteó": [1, 4], // He/she cursed
  "puteando": [1, 4], // Cursing

  // ========================================
  // === Diminutive & Augmentative Forms ===
  // ========================================
  "putilla": [5, 4], // Little whore
  "zorrona": [3, 4], // Big fox/slut (f.)
  "cabroncito": [3, 4], // Little bastard
  "pendejísimo": [3, 4], // Very assholish
  "pendejito": [3, 4], // Little asshole
  "pendejazo": [3, 4], // Big asshole
  "hijueputica": [3, 4], // Little son of a bitch (Colombia)
  "hijueputazo": [3, 4], // Big son of a bitch
  "mierdecita": [3, 5], // Little shit
  "mierdón": [3, 5], // Big shit
  "mierdaza": [3, 5], // Big shit
  "gilipollón": [3, 4], // Big asshole (Spain)
  "gilipollitas": [3, 4], // Little asshole (Spain)
  "idiotazo": [1, 4], // Big idiot
  "idiotita": [1, 4], // Little idiot
  "estupidazo": [1, 4], // Big stupid
  "imbecilón": [3, 4], // Big imbecile
  "imbecilito": [3, 4], // Little imbecile
  "gordísimo": [1, 4], // Very fat
  "gordísima": [1, 4], // Very fat (f.)
  "gordote": [1, 4], // Big fat
  "gordota": [1, 4], // Big fat (f.)
  "tontísimo": [1, 4], // Very stupid
  "tontísima": [1, 4], // Very stupid (f.)
  "tontazo": [1, 4], // Big stupid
  "tontito": [1, 4], // Little stupid
  "tontita": [1, 4], // Little stupid (f.)

  // ========================================
  // === Threats & Violent Language =========
  // ========================================
  "te voy a dar una putiza": [5, 5], // I'll give you a beating (Mexico)
  "te voy a madrear": [5, 5], // I'll mother you (beat, Mexico)
  "te rompo la cara": [5, 5], // I'll break your face
  "te voy a sacar la mierda": [5, 5], // I'll beat the shit out of you
  "te voy a sacar la chucha": [5, 5], // I'll beat the pussy out of you (Chile/Peru)
  "te saco la cresta": [5, 5], // I'll punch your crest (Chile)
  "te voy a dar una paliza": [5, 5], // I'll give you a beating
  "te voy a dar una hostia": [5, 5], // I'll give you a communion (slap, Spain)
  "te voy a partir el culo": [5, 5], // I'll split your ass
  "te voy a reventar la jeta": [5, 5], // I'll burst your face
  "lárgate": [5, 5], // Get out
  "piérdete": [5, 5], // Get lost
  "esfúmate": [5, 5], // Vanish
  "desaparece": [5, 5], // Disappear
  "revienta": [5, 5], // Burst

  // ========================================
  // === Additional Insults & Phrases ======
  // ========================================
  "carroña": [1, 4], // Carrion
  "desecho": [1, 4], // Waste
  "desecho humano": [1, 4], // Human waste
  "engendro del demonio": [1, 4], // Spawn of the devil
  "escoria de la sociedad": [1, 4], // Scum of society
  "gusana": [1, 4], // Worm (f.)
  "hiena": [1, 4], // Hyena
  "insecto": [1, 4], // Insect
  "rata de cloaca": [1, 4], // Sewer rat
  "rata inmunda": [1, 4], // Filthy rat
  "sanguijuela": [1, 4], // Leech
  "serpiente": [1, 4], // Snake
  "brujo": [1, 4], // Warlock (derog.)
  "demonio": [1, 4], // Demon
  "dragón": [1, 4], // Dragon (ugly woman)
  "espanto": [1, 4], // Fright
  "fenómeno": [1, 4], // Freak
  "monstruo": [1, 4], // Monster
  "ogro": [1, 4], // Ogre
  "basilisco": [1, 4], // Basilisk (angry person)
  "caimán": [1, 4], // Caiman (sneaky)
  "chacal": [1, 4], // Jackal
  "buitre": [1, 4], // Vulture
  "carroñero": [1, 4], // Scavenger
  "carroñera": [1, 4], // Scavenger (f.)
  "sarnoso": [1, 4], // Mangy
  "sarnosa": [1, 4], // Mangy (f.)
  "tiñoso": [1, 4], // Scabby
  "tiñosa": [1, 4], // Scabby (f.)
  "repugnante": [1, 4], // Repugnant
  "repulsivo": [1, 4], // Repulsive
  "repulsiva": [1, 4], // Repulsive (f.)
  "inmundo": [1, 4], // Filthy
  "inmunda": [1, 4], // Filthy (f.)
  "mugriento": [1, 4], // Grimy
  "mugrienta": [1, 4], // Grimy (f.)
  "cochino": [1, 4], // Pig (dirty)
  "cochina": [1, 4], // Pig (f.) (dirty)
  "guarrada": [1, 4], // Piggery (Spain)
  "guarrería": [1, 4], // Piggery (Spain)
  "perro": [1, 4], // Dog (insult)
  "perra asquerosa": [1, 4], // Disgusting bitch
  "hijo de perro": [1, 4], // Son of a dog
  "hija de perra": [1, 4], // Daughter of a bitch
  "perro desgraciado": [1, 4], // Disgraced dog
  "perra desgraciada": [1, 4], // Disgraced bitch
  "infeliz": [1, 4], // Unhappy / wretch
  "desalmado": [1, 4], // Soulless
  "desalmada": [1, 4], // Soulless (f.)
  "despreciable": [1, 4], // Despicable
  "detestable": [1, 4], // Detestable
  "infame": [1, 4], // Infamous
  "indigno": [1, 4], // Unworthy
  "indigna": [1, 4], // Unworthy (f.)
  "ruin": [1, 4], // Mean
  "vil": [1, 4], // Vile
  "canallada": [1, 4], // Scoundrel act
  "sinvergonzón": [1, 4], // Big shameless
  "cínico de mierda": [3, 5], // Shitty cynic
  "aprovechado de mierda": [3, 5], // Shitty freeloader
  "ladrón de mierda": [3, 5], // Shitty thief
  "mentiroso de mierda": [3, 5], // Shitty liar
  "cobarde de mierda": [1, 4], // Shitty coward
  "traidor de mierda": [3, 5], // Shitty traitor
  "chismoso de mierda": [3, 5], // Shitty gossip

  // ========================================
  // === Religious Expletives ==============
  // ========================================
  "me cago en Cristo": [3, 5], // I shit on Christ
  "me cago en el copón": [3, 5], // I shit on the communion cup
  "hostias": [2, 3], // Hosts (Spain expletive)
  "por Dios": [2, 3], // By God
  "Dios mío": [2, 3], // My God
  "Jesús": [2, 3], // Jesus
  "maldición": [2, 3], // Curse
  "condenado": [2, 3], // Condemned
  "condenada": [2, 3], // Condemned (f.)
  "demonios": [2, 3], // Demons
  "diablos": [2, 3], // Devils
  "infierno": [2, 3], // Hell
  "al infierno": [2, 3], // To hell
  "vete al infierno": [2, 3], // Go to hell
  "por el amor de Dios": [2, 3], // For the love of God
};
const spanishBadWords: Record<string, { s: number; c: number }> = {};
for (const [k, [s, c]] of Object.entries(_d)) {
    spanishBadWords[k] = { s, c };
}
export default spanishBadWords;

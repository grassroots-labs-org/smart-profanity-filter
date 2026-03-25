// src/languages/french-words.ts

/**
 * French profanity words list
 * Contains common profanities, insults, and offensive terms. Includes variations.
 * ⚠️ Warning: This file contains explicit language in French
 */
const _d: Record<string, [number, number]> = {
  // ========================================
  // === Core Profanities & Genitalia =====
  // ========================================
  "merde": [3, 5], // Shit — no innocent usage
  "putain": [3, 5], // Whore / Fuck! (very common interjection) — no innocent usage
  // Commented out: false positive on English word "con" (ComicCon, con artist)
  // "con": [3, 4], // Idiot/asshole (vulgar)
  "conne": [1, 4], // Idiot, asshole, cunt (fem./masc.)
  "connard": [3, 4],
  "connasse": [3, 4], // Bigger asshole/bitch (masc./fem.)
  "cul": [4, 3], // Ass
  // Commented out: false positive on English word "bite" (food, insects)
  // "bite": [3, 4], // Dick, cock (vulgar)
  "chatte": [5, 5], // Pussy, cunt (vulgar)
  "couilles": [4, 4], // Balls (vulgar)
  "enculé": [4, 3],
  "enculée": [4, 4], // Motherfucker, asshole (lit. fucked in the ass) (masc./fem.)
  "salope": [3, 4], // Bitch, slut
  "salaud": [3, 4], // Bastard, swine (male)
  "bordel": [3, 4], // Brothel / Mess / Fuck!, Damn! (interjection)
  "foutre": [4, 5], // Sperm, cum / To do / To fuck / Nothing (je m'en fous - I don't give a fuck)
  "niquer": [4, 5], // To fuck (verlan slang, very common & vulgar)
  "baise": [4, 3],
  "baiser": [4, 5], // Kiss (standard) / Fuck (verb/noun - vulgar)
  "chier": [4, 5], // To shit
  "pisser": [2, 3], // To piss
  "gueule": [2, 2], // Animal mouth / Shut up! (ta gueule!)

  // ========================================
  // === Variations & Related Terms =======
  // ========================================
  // --- Merde ---
  "merdeux": [3, 4],
  "merdeuse": [3, 5], // Shitty kid, brat
  "merdique": [3, 5], // Shitty, crappy
  "emmerder": [3, 4], // To piss off, to annoy
  "emmerdeur": [3, 4],
  "emmerdeuse": [3, 4], // Annoying person
  "démerder": [3, 4],
  "se démerder": [3, 4], // To manage, to sort things out (informal)
  "putain de merde": [3, 5], // Fucking shit
  "sac à merde": [3, 5], // Piece of shit (lit. bag of shit)
  // --- Putain ---
  "putain de": [3, 5], // Fucking (adjective modifier, e.g., putain de voiture - fucking car)
  "fils de pute": [3, 4], // Son of a bitch
  "fille de pute": [3, 4], // Daughter of a bitch
  "putasserie": [3, 4], // Bitchy behavior / Whore stuff
  "pute": [5, 4], // Short for putain, whore
  // --- Con / Connard ---
  "connerie": [1, 4], // Stupidity, bullshit
  "déconner": [3, 4], // To talk nonsense, to screw up
  "à la con": [1, 4], // Shitty, stupid (adjectival phrase)
  "pauvre con": [1, 4], // Poor idiot / Pathetic asshole
  "roi des cons": [1, 4], // King of idiots
  // --- Cul ---
  "trou du cul": [3, 4],
  "trouduc": [3, 4], // Asshole (lit. ass hole)
  "lèche-cul": [3, 4], // Ass-kisser
  "botter le cul": [3, 4], // Kick someone's ass
  "avoir le cul bordé de nouilles": [3, 4], // To be very lucky (vulgar)
  "se casser le cul": [3, 4], // Bust one's ass (work hard)
  "faux-cul": [3, 4], // Hypocrite
  // --- Bite / Chatte / Couilles ---
  "casse-couilles": [3, 4], // Annoying person (lit. ball-breaker)
  "avoir des couilles": [4, 4], // To have guts/balls
  "petite bite": [4, 4], // Small dick (insult)
  "lécher la chatte": [4, 4], // Lick pussy
  "sucer la bite": [4, 4], // Suck dick
  // --- Enculé / Salope / Salaud ---
  "enculage": [3, 4], // Act of sodomy / Getting screwed over
  "enculer (qqn)": [3, 5], // To fuck someone (in the ass) / To screw someone over
  "va te faire enculer": [3, 5], // Go fuck yourself
  "espèce de salope": [3, 4], // You bitch
  "grosse salope": [1, 4], // Fat bitch/slut
  "vieux salaud": [3, 4], // Old bastard
  // --- Bordel ---
  "quel bordel!": [3, 5], // What a mess! / What the fuck!
  "foutre le bordel": [3, 4], // To make a mess, to cause chaos
  // --- Foutre / Niquer / Baiser ---
  "va te faire foutre": [3, 5], // Go fuck yourself
  "rien à foutre": [3, 5], // Don't give a fuck
  "s'en foutre": [3, 5], // Not to give a fuck
  "je m'en fous": [3, 5], // I don't give a fuck
  "foutu": [3, 4],
  "foutue": [3, 4], // Screwed, broken, damned
  "nique ta mère": [3, 5], // Fuck your mother (very offensive)
  "nique sa mère": [3, 5], // Fuck his/her mother / Expression of anger/frustration
  "va te faire niquer": [3, 5], // Go get fucked
  "baisable": [3, 5], // Fuckable
  "baiseur": [3, 4],
  "baiseuse": [3, 5], // Fucker (one who fucks)
  // --- Chier / Pisser ---
  "fait chier": [3, 4], // It's annoying / Pisses me off
  "casse les pieds": [1, 4], // Annoying (milder than fait chier)
  "va chier": [3, 5], // Go take a shit / Fuck off
  "pipi": [1, 3], // Pee (childish, but used)
  // --- Gueule ---
  "ta gueule!": [3, 5], // Shut up! (very common, aggressive)
  "ferme ta gueule": [3, 4], // Shut your mouth! (stronger)
  "gueuler": [3, 4], // To shout, to yell
  "engueuler": [3, 4], // To tell someone off, to scold
  "gueule de bois": [1, 3], // Hangover
  "sale gueule": [1, 4], // Ugly face / Untrustworthy look

  // ========================================
  // === Insults (Stupidity, etc.) ========
  // ========================================
  "idiot": [1, 4],
  "idiote": [1, 4], // Idiot
  "imbécile": [1, 4], // Imbecile
  "stupide": [1, 4], // Stupid
  "débile": [1, 4], // Moron, retarded (offensive)
  "crétin": [1, 4],
  "crétine": [1, 4], // Cretin
  "abruti": [1, 4],
  "abrutie": [1, 4], // Dimwit, numbskull
  "andouille": [1, 4], // Idiot (lit. sausage)
  "bouffon": [1, 4],
  "bouffonne": [1, 4], // Buffoon, clown
  "nul": [1, 4],
  "nulle": [1, 4], // Useless, sucks
  "minable": [1, 4], // Pathetic, lousy
  "taré": [1, 4],
  "tarée": [1, 4], // Crazy, nuts (offensive)
  "cinglé": [1, 4],
  "cinglée": [1, 4], // Crazy, nuts
  "fou": [1, 4],
  "folle": [1, 4], // Mad, crazy
  "niais": [1, 4],
  "niaise": [1, 4], // Simpleton, naive

  // ========================================
  // === Offensive Slurs (Sexuality, Race, etc.) ===
  // ========================================
  "pédé": [5, 4], // Faggot (very offensive slang for homosexual)
  "gouine": [5, 4], // Dyke (very offensive slang for lesbian)
  "travelo": [5, 4], // Tranny (offensive for transvestite/transgender)
  "nègre": [5, 4],
  "négresse": [5, 5], // Negro (extremely offensive racial slur)
  "bougnoule": [5, 4], // Very offensive slur for North Africans/Arabs
  "chinetoque": [5, 4], // Very offensive slur for Chinese/East Asian people
  "rital": [5, 4], // Offensive slur for Italian people
  "polack": [4, 4], // Offensive slur for Polish people
  "yid": [5, 4], // Offensive slur for Jewish people (from Yiddish)
  "youpin": [5, 4],
  "youpine": [5, 4], // Offensive slur for Jewish people

  // ========================================
  // === Other Offensive Terms & Insults ==
  // ========================================
  "bâtard": [1, 4],
  "bâtarde": [1, 4], // Bastard
  "ordure": [1, 4], // Scum, filth (person)
  "pourriture": [1, 4], // Rot, decay / Scum, rotten person
  "raclure": [1, 4], // Scum (lit. scrapings)
  "fumier": [3, 4], // Manure / Bastard, swine
  "chien": [1, 4],
  "chienne": [1, 4], // Dog / Bitch
  "porc": [1, 4], // Pig / Dirty person
  "cochon": [1, 4],
  "cochonne": [1, 4], // Pig / Dirty person / Kinky
  "vache": [1, 4], // Cow / Bitch! (interjection)
  "chameau": [1, 4], // Camel / Mean person (fem.)
  "morue": [3, 4], // Codfish / Whore, bitch
  "thune": [1, 3], // Money (slang, can be used dismissively)
  "pognon": [1, 3], // Money (slang, dough)
  "fric": [1, 3], // Money (slang, cash)
  "crevard": [1, 4],
  "crevarde": [1, 4], // Selfish freeloader, scumbag
  "clochard": [1, 4],
  "clocharde": [1, 4], // Bum, tramp
  "moche": [1, 4], // Ugly
  "laid": [1, 2],
  "laide": [1, 4], // Ugly
  "dégueulasse": [1, 4], // Disgusting, gross
  "puant": [1, 4],
  "puante": [1, 4], // Stinking / Obnoxious person
  "plouc": [1, 4], // Hick, country bumpkin
  "pécor": [1, 4], // Hick, peasant (derogatory)
  "blaireau": [1, 4], // Badger / Idiot, loser
  "gland": [3, 4], // Acorn / Idiot, dickhead
  "branleur": [1, 4],
  "branleuse": [1, 4], // Wanker (lit. one who wanks)
  "branler": [4, 4], // To wank, masturbate / To do nothing
  "se branler": [4, 4], // To masturbate
  "ne rien branler": [3, 5], // To do fuck all
  "poufiasse": [1, 4], // Vulgar term for woman (bimbo, slutty - very offensive)

  // ========================================
  // === Mild / Contextually Offensive ====
  // ========================================
  "mince": [1, 2], // Thin / Damn!, Shoot! (mild euphemism for merde)
  "zut": [1, 4], // Darn!, Shoot! (mild)
  "flûte": [1, 4], // Flute / Darn! (mild)
  "saperlipopette": [1, 3], // Good grief! (old-fashioned, humorous)
  "purée": [1, 1], // Mashed potatoes / Euphemism for putain
  "punaise": [1, 1], // Thumb tack / Euphemism for putain
  "sacré bleu": [1, 2], // Good heavens! (stereotypical, old)
  "la vache!": [1, 3], // The cow! / Wow!, Holy cow! (expression of surprise)
  "dégage!": [2, 3], // Get lost!, Beat it!
  "fiche le camp!": [2, 3], // Get lost!, Piss off! (stronger than dégage)
  "tais-toi!": [1, 2], // Be quiet! (can be rude depending on tone)
  "enculé de ta race": [3, 5], // Fuck your race (very offensive)
  "ta race": [3, 4], // Your race (offensive)
  "pet": [1, 2], // Fart
  "sale": [1, 1], // Dirty/filthy
  "couillon": [1, 4], // Idiot / Balls (regional)
  "branlette": [3, 4], // Handjob
  "tantouse": [3, 4], // Gay (derogatory)
  "pédéraste": [3, 4], // Pederast
  "nique": [3, 5], // Fuck (verb)
  "jean-foutre": [3, 4], // Good-for-nothing

  // Additional French profanity & verlan
  "baisé": [3, 5], // Fucked
  "bâtard de merde": [3, 4], // Shit bastard
  "bolosse": [1, 3], // Loser (modern slang)
  "casse-toi": [3, 4], // Piss off
  "chiasse": [1, 4], // Diarrhea / Coward
  "chieurchieuse": [3, 4], // Pain in the ass
  "couille molle": [3, 4], // Soft ball / wimp
  "crève": [3, 4], // Die / Drop dead
  "enc": [3, 4], // Abbreviation of enculé
  "enfoiréenfoirée": [3, 4], // Bastard / Scumbag
  "fdp": [3, 4], // Abbreviation: fils de pute
  "fiotte": [3, 4], // Faggot (offensive)
  "grognasse": [1, 4], // Ugly/nasty woman
  "keh": [3, 4], // Verlan for chier (internet slang)
  // "ken": [3, 5], // Verlan for niquer (to fuck) — commented out: collides with English name "Ken"
  "keuf": [1, 3], // Verlan for flic (cop, derogatory)
  "meuf": [1, 2], // Verlan for femme (can be neutral but used pejoratively)
  "nique sa race": [3, 5], // Fuck his/her race (very offensive)
  "niquer sa mère": [3, 5], // Fuck his mother
  "ntm": [3, 4], // Abbreviation: nique ta mère
  "pétasse": [3, 4], // Bimbo / Slut
  "péteuxpéteuse": [1, 4], // Coward / Scaredy-cat
  "putain de bordel": [3, 5], // Fucking hell
  "putain de sa mère": [3, 5], // Fucking hell
  "roubignoles": [4, 4], // Balls (testicles)
  "salopard": [3, 4], // Bastard (male)
  "saloperie": [3, 4], // Filthy thing / Crap
  "schnock": [1, 4], // Old fool
  "ta mère": [3, 4], // Your mother (often truncated insult)
  "ta mère la pute": [5, 4], // Your mother the whore
  "trou de balle": [3, 4], // Asshole (lit. bullet hole)
  "trouillardtrouillarde": [1, 4], // Coward
  "va te faire mettre": [3, 5], // Go get fucked
  "va niquer ta mère": [3, 5], // Go fuck your mother

  // ========================================
  // === Compound Insults ==================
  // ========================================
  "espèce de connard": [3, 4], // You bastard (lit. species of asshole)
  "espèce de con": [1, 4], // You idiot
  "espèce de merde": [3, 5], // You piece of shit
  "sale con": [1, 4], // Dirty idiot
  "sale pute": [5, 4], // Dirty whore
  "grosse pute": [1, 4], // Fat whore
  "gros porc": [1, 4], // Fat pig
  "gros con": [1, 4], // Big idiot
  "grosse conne": [1, 4], // Big idiot (fem)
  "gros dégueulasse": [1, 4], // Big slob
  "sale bâtard": [3, 4], // Dirty bastard
  "sale chien": [1, 4], // Dirty dog
  "sale merde": [3, 5], // Dirty shit
  "sale enculé": [3, 5], // Dirty assfucker
  "espèce de salaud": [3, 4], // You bastard
  "espèce de raclure": [1, 4], // You scum
  "espèce de fumier": [3, 4], // You manure/bastard
  "espèce d'enfoiré": [1, 4], // You scumbag
  "sac à foutre": [1, 4], // Cum bag
  "tas de merde": [3, 5], // Pile of shit
  "face de cul": [3, 4], // Ass face
  "tête de noeud": [4, 4], // Dickhead (lit. knot head)
  "tête de con": [4, 4], // Dickhead
  "tête de bite": [4, 4], // Dickhead
  "tête de merde": [3, 5], // Shithead
  "gueule de con": [1, 4], // Idiot face
  "sombre con": [1, 4], // Dark/utter idiot
  "sombre merde": [3, 5], // Utter shit
  "triple buse": [1, 4], // Triple buzzard (utter idiot)
  "triple andouille": [1, 4], // Triple sausage (utter fool)
  "sale race": [1, 4], // Dirty race (very offensive)
  "sous-merde": [5, 5], // Sub-shit (subhuman insult)
  "moins que rien": [1, 4], // Less than nothing
  "bonne à rien": [1, 4], // Good for nothing (fem)
  "bon à rien": [1, 4], // Good for nothing (masc)

  // ========================================
  // === More Vulgar Phrases ===============
  // ========================================
  "chier dans la colle": [3, 5], // To shit in the glue (to cause problems)
  "se faire mettre": [3, 5], // To get fucked
  "se faire enculer": [3, 5], // To get ass-fucked
  "se faire baiser": [3, 5], // To get fucked (over)
  "se faire niquer": [3, 5], // To get fucked
  "aller se faire foutre": [3, 5], // To go fuck oneself
  "nique ta race": [3, 5], // Fuck your race (very offensive)
  "mange tes morts": [3, 4], // Eat your dead (very offensive, especially to Arabs)
  "je t'encule": [3, 5], // I fuck you in the ass
  "je te baise": [3, 5], // I fuck you
  "je te nique": [3, 5], // I fuck you
  "nique la police": [3, 5], // Fuck the police
  "on t'a pas sonné": [3, 4], // Nobody asked you (rude)
  "va te faire voir": [3, 5], // Go get seen / Fuck off (mild)
  "va crever": [5, 5], // Go die
  "crève la gueule ouverte": [5, 5], // Die with your mouth open
  "je t'emmerde": [3, 5], // I shit on you / Fuck you
  "je te chie dessus": [3, 5], // I shit on you
  "je te pisse dessus": [3, 4], // I piss on you
  "ferme ta putain de gueule": [3, 5], // Shut your fucking mouth
  "bouffe ma bite": [4, 4], // Eat my dick
  "suce ma bite": [4, 4], // Suck my dick
  "lèche-moi le cul": [3, 4], // Lick my ass
  "tu pues de la gueule": [3, 4], // Your mouth stinks
  "tu pues du cul": [3, 4], // Your ass stinks

  // ========================================
  // === Quebec French (Joual) =============
  // ========================================
  "tabernac": [3, 4], // Tabernacle (Quebec swear)
  "tabarnak": [3, 4], // Tabernacle (common spelling)
  "câlice": [3, 4], // Chalice (Quebec swear)
  "calice": [3, 4], // Chalice (without accent)
  "crisse": [3, 4], // Christ (Quebec swear)
  "ostie": [3, 4], // Host/wafer (Quebec swear)
  "osti": [3, 4], // Variant spelling
  // Commented out: false positive on English word "sacrament" (religious events)
  // "sacrement": [3, 4], // Sacrament (Quebec swear)
  "ciboire": [3, 4], // Ciborium (Quebec swear)
  "viarge": [3, 4], // Virgin (Quebec swear)
  "baptême": [3, 4], // Baptism (Quebec swear)
  "maudit": [3, 4], // Cursed / Damn (Quebec)
  "maudite": [3, 4], // Fem of maudit
  "câlisse de crisse": [3, 4], // Compound Quebec swear
  "ostie de tabarnak": [3, 4], // Compound Quebec swear
  "crisse de câlice": [3, 4], // Compound Quebec swear
  "sacramant": [3, 4], // Variant of sacrement
  "simonac": [1, 4], // Simony (Quebec swear, milder)
  "coliss": [3, 4], // Variant of câlice
  "décâlisser": [3, 4], // To destroy / To beat up (Quebec)
  "décrisser": [3, 4], // To destroy / To leave (Quebec)
  "encâlisser": [3, 4], // To piss off (Quebec)
  "tabarnouche": [1, 4], // Mild form of tabarnak
  "câline": [1, 4], // Mild form of câlice
  "crime": [1, 2], // Mild form of crisse
  "mosus": [1, 4], // Mild form of maudit
  "enfant de chienne": [3, 4], // Son of a bitch (Quebec)
  "trou de cul": [3, 4], // Already listed but also Quebec
  "plotte": [5, 5], // Pussy/cunt (Quebec)
  "fourrer": [3, 5], // To fuck (Quebec)
  "crosseur": [3, 4], // Wanker / Cheater (Quebec)
  "crosseuse": [3, 4], // Fem
  "niaiser": [1, 4], // To fool around / Waste time (Quebec)
  "niaiseux": [1, 4], // Idiot (Quebec)
  "niaiseuse": [1, 4], // Fem
  // Commented out: false positive on English word "colon" (anatomy, punctuation mark)
  // "colon": [3, 4], // Settler / Hick (Quebec, derogatory)
  "épais": [1, 4], // Thick / Stupid (Quebec)
  "épaisse": [1, 4], // Fem
  "cave": [1, 4], // Cellar / Idiot (Quebec)
  "sans dessein": [3, 4], // Brainless (Quebec)
  "mongol": [1, 4], // Mongoloid / Idiot (Quebec, offensive)
  "attardé": [3, 4], // Retarded (Quebec, offensive)
  "attardée": [3, 4], // Fem
  "fif": [3, 4], // Faggot (Quebec)
  "tapette": [3, 4], // Faggot / Fly swatter (Quebec/France)
  "moumoune": [3, 4], // Sissy / Faggot (Quebec)
  "guidoune": [5, 4], // Slut / Prostitute (Quebec)
  "agace": [4, 4], // Cock tease (Quebec)
  "agace-pissette": [4, 4], // Cock tease (Quebec, stronger)
  "pissou": [1, 4], // Coward (Quebec)
  "chieux": [1, 4], // Coward / Shitter (Quebec)
  "licheux": [3, 4], // Ass-kisser (Quebec)
  "téteux": [3, 4], // Suck-up (Quebec)
  "téteuse": [3, 4], // Fem

  // ========================================
  // === Belgian French ====================
  // ========================================
  "dikkenek": [1, 4], // Fat neck / Show-off (Belgian French)
  "sansen": [1, 4], // Idiot (Belgian)
  "poepzak": [3, 4], // Fart bag (Belgian, from Flemish influence)
  "stoull": [1, 4], // Fool (Belgian)
  "bachi-bouzouk": [3, 4], // Insult (originally Turkish, used in Belgian/French comics)

  // ========================================
  // === Verlan (Reversed Slang) ===========
  // ========================================
  "tepu": [5, 4], // Pute backwards (whore)
  "relou": [1, 3], // Lourd backwards (annoying)
  "chelou": [1, 3], // Louche backwards (sketchy, weird)
  "péta": [3, 4], // Taper backwards (to hit, in context)
  "téma": [3, 4], // Mater backwards (to look at)
  "zarbi": [3, 4], // Bizarre backwards (weird)
  "renoi": [4, 3], // Noir backwards (Black person, can be offensive)
  "rebeu": [3, 4], // Beur backwards (Arab person, can be offensive)
  "feuj": [4, 3], // Juif backwards (Jewish person, can be offensive)
  "caillera": [3, 4], // Racaille backwards (thug)
  "racaille": [3, 4], // Thug, scum
  "keum": [1, 3], // Mec backwards (dude)
  "ouf": [1, 2], // Fou backwards (crazy)
  "vénère": [1, 3], // Énervé backwards (pissed off)
  "chanmé": [1, 3], // Méchant backwards (mean/awesome)
  "iench": [3, 4], // Chien backwards (dog, derogatory)
  "keupon": [3, 4], // Punk backwards (punk)
  "beur": [2, 2], // Arabe backwards (Arab, can be offensive)
  "reubeu": [3, 4], // Variant of rebeu

  // ========================================
  // === Internet / Youth Slang ============
  // ========================================
  "tmtc": [2, 3], // Toi-même tu connais (you know it)
  "ptdr": [2, 3], // Pété de rire (dying of laughter, used in vulgar contexts)
  "niktamère": [3, 5], // Contracted nique ta mère
  "wesh": [1, 2], // Hey / What's up (banlieue slang)
  "wallah": [1, 2], // I swear (Arabic-French slang)
  "starfoullah": [2, 3], // I swear to God (Arabic-French slang)
  "zebi": [4, 3], // Dick (Arabic-French slang)
  "zob": [4, 3], // Dick (Arabic-French slang, from Arabic)
  "zobi": [4, 3], // My dick (Arabic-French slang)
  "kahba": [3, 4], // Whore (Arabic-French slang)
  "hmar": [1, 3], // Donkey / Idiot (Arabic-French slang)
  "miskine": [2, 3], // Poor thing (Arabic-French, can be condescending)
  "miskin": [2, 3], // Variant
  "baltringue": [1, 3], // Loser / Weakling (slang)
  "tocard": [1, 4], // Loser, idiot
  "tocarde": [2, 3], // Fem
  "boloss": [1, 4], // Loser (variant of bolosse)
  "cassos": [2, 3], // Welfare case (derogatory)
  "crevure": [3, 4], // Scum (stronger than crevard)
  "raclure de bidet": [2, 3], // Bidet scrapings (insult)
  "sous-race": [5, 4], // Sub-race (very offensive)
  "fils de chien": [2, 3], // Son of a dog
  "bâtard de race": [3, 4], // Race bastard (very offensive)

  // ========================================
  // === Sexual Terms ======================
  // ========================================
  "sodomie": [4, 4], // Sodomy
  "fellation": [4, 5], // Fellatio
  "cunnilingus": [4, 3], // Cunnilingus
  "masturber": [4, 4], // To masturbate
  "se masturber": [4, 4], // To masturbate (reflexive)
  "jouir": [4, 4], // To cum / To orgasm
  "jouissance": [4, 4], // Orgasm / Pleasure
  "orgasme": [4, 4], // Orgasm
  "éjaculer": [4, 4], // To ejaculate
  "éjaculation": [4, 4], // Ejaculation
  "bander": [4, 4], // To get hard (erection)
  "bandant": [4, 4], // Arousing / Hot
  "bandante": [4, 4], // Fem
  "débander": [4, 4], // To go soft / To lose courage
  "pénis": [4, 4], // Penis
  "vagin": [4, 4], // Vagina
  "clitoris": [4, 3], // Clitoris
  "testicule": [4, 4], // Testicle
  "testicules": [4, 4], // Testicles
  "scrotum": [3, 4], // Scrotum
  "prépuce": [4, 4], // Foreskin
  "anus": [3, 4], // Anus
  "téton": [4, 4], // Nipple
  "seins": [4, 4], // Breasts
  "nichons": [4, 4], // Tits (vulgar)
  "nibards": [4, 4], // Tits (vulgar)
  "nénés": [4, 4], // Boobies (childish/vulgar)
  "roberts": [4, 4], // Tits (old slang)
  "loches": [4, 4], // Tits (vulgar)
  "miches": [4, 4], // Ass cheeks / Bread rolls
  "fesses": [4, 4], // Buttocks
  "pétard": [4, 4], // Firecracker / Nice ass (slang)
  "moule": [4, 4], // Mussel / Pussy (slang)
  "cramouille": [4, 4], // Pussy (very vulgar, old slang)
  "foufoune": [4, 4], // Pussy (childish)
  "foufounette": [4, 4], // Pussy (diminutive)
  // Commented out: false positive on English name "Minette" (also a cat breed)
  // "minette": [4, 4], // Pussy (cute/vulgar) / Cunnilingus
  "minou": [4, 4], // Kitty / Pussy
  "chagatte": [4, 4], // Pussy (vulgar compound)
  // Commented out: false positive on English word "pine" (pine trees, Pine Street)
  // "pine": [3, 4], // Dick (archaic/vulgar)
  // Commented out: false positive on English word "queue" (British English for line)
  // "queue": [4, 4], // Tail / Dick (vulgar)
  "quéquette": [4, 4], // Willy (childish)
  "zizi": [4, 4], // Willy (childish)
  "zgeg": [4, 4], // Dick (banlieue slang)
  "teub": [4, 4], // Bite backwards (verlan for dick)
  "noeud": [4, 4], // Knot / Dickhead
  "chibre": [4, 4], // Dick (vulgar)
  // Commented out: false positive on English surname "Dard"
  // "dard": [4, 4], // Dart / Dick (slang)
  // Commented out: false positive on English word "Gaul" (historical region/people)
  // "gaule": [4, 4], // Pole / Erection (slang)
  "trique": [4, 4], // Stick / Erection (slang)
  "avoir la trique": [4, 4], // To have a hard-on
  "sucer": [4, 4], // To suck
  "pomper": [4, 4], // To pump / To give head
  "tailler une pipe": [4, 5], // To give a blowjob (lit. carve a pipe)
  // Commented out: false positive on English word "pipe" (bagpipe, pipe organ)
  // "pipe": [4, 5], // Blowjob (slang)
  "turlute": [4, 5], // Blowjob (Quebec/old slang)
  "gâterie": [2, 3], // Treat / Sexual favor (euphemism)
  "doigter": [4, 4], // To finger
  "sodomiser": [4, 4], // To sodomize
  "pénétrer": [4, 4], // To penetrate
  "enfiler": [4, 5], // To thread / To fuck
  "tringler": [4, 5], // To fuck (vulgar)
  "tirer un coup": [4, 4], // To have a shag
  "coup de bite": [4, 4], // Dick thrust
  "partie de jambes en l'air": [4, 4], // Sex session (lit. legs in the air party)
  "coït": [4, 4], // Coitus
  "copuler": [4, 4], // To copulate
  "fornication": [4, 4], // Fornication
  "forniquer": [4, 4], // To fornicate
  "prostituée": [5, 4], // Prostitute
  "prostitué": [5, 4], // Male prostitute
  "maison close": [4, 4], // Brothel (lit. closed house)
  "proxénète": [4, 4], // Pimp
  "maquereau": [4, 4], // Pimp (lit. mackerel)
  "maquerelle": [4, 4], // Madam (brothel)
  "micheton": [5, 4], // John (prostitution client)
  "michetonneuse": [5, 4], // Sugar baby / Prostitute (slang)
  "péripatéticienne": [5, 4], // Prostitute (euphemism)
  "catin": [5, 4], // Hussy / Prostitute (old)
  "garce": [4, 4], // Bitch (old/literary)
  "gourgandine": [4, 4], // Hussy (old)
  "traînée": [4, 4], // Slut (lit. dragged)
  "dévergondée": [4, 4], // Shameless woman
  "nymphomane": [4, 4], // Nymphomaniac
  "obsédé": [4, 4], // Pervert / Obsessed (masc)
  "obsédée": [4, 4], // Fem
  "pervers": [4, 4], // Pervert
  // Commented out: false positive on English word "perverse" (perverse incentives)
  // "perverse": [3, 4], // Fem
  "voyeur": [2, 3], // Voyeur
  "voyeuse": [4, 4], // Fem
  "exhibitionniste": [4, 4], // Exhibitionist
  "fétichiste": [4, 4], // Fetishist
  "vicieux": [4, 4], // Perverted / Kinky
  "vicieuse": [4, 4], // Fem
  "lubrique": [4, 4], // Lecherous
  "libidineux": [4, 4], // Libidinous
  "salace": [4, 4], // Salacious
  "cochonnerie": [4, 4], // Filth / Smut
  "pornographie": [4, 4], // Pornography
  "porno": [2, 3], // Porn

  // ========================================
  // === More General Insults ==============
  // ========================================
  "larve": [1, 4], // Larva / Worthless person
  "limace": [1, 4], // Slug / Slow/worthless person
  "cancrelat": [1, 3], // Cockroach
  "cafard": [1, 1], // Cockroach / Snitch
  "mouchard": [1, 4], // Snitch
  "moucharde": [1, 4], // Fem
  "balance": [1, 1], // Snitch
  "donneur": [1, 4], // Snitch (lit. giver)
  "donneuse": [1, 4], // Fem
  "crapule": [1, 4], // Scoundrel
  "fripouille": [1, 4], // Scoundrel
  "canaille": [1, 4], // Scoundrel, rascal
  "gredin": [1, 4], // Scoundrel (literary)
  "vaurien": [1, 4], // Good-for-nothing
  "vaurienne": [1, 4], // Fem
  "voyou": [1, 4], // Thug, hooligan
  "gouape": [1, 3], // Thug (old slang)
  "marlou": [1, 4], // Pimp / Thug (old)
  "arsouille": [1, 3], // Drunkard / Thug
  "poivrot": [1, 3], // Drunkard
  "poivrote": [1, 4], // Fem
  "soûlard": [1, 3], // Drunkard
  "soûlarde": [1, 4], // Fem
  "alcoolo": [1, 3], // Alcoholic (slang)
  "pochetron": [1, 3], // Drunkard
  "pochetronne": [1, 4], // Fem
  "ivrogne": [1, 3], // Drunkard
  "charogne": [1, 4], // Carrion / Vile person
  "carne": [1, 4], // Tough meat / Nasty person
  "rosse": [1, 4], // Nag (horse) / Mean person
  "peste": [1, 4], // Plague / Little pest
  "teigne": [1, 4], // Ringworm / Nasty person
  "chipie": [1, 4], // Shrew, nag
  "mégère": [1, 4], // Shrew, harridan
  "harpie": [1, 4], // Harpy
  "sorcière": [1, 4], // Witch
  "morveux": [1, 4], // Snotty (brat)
  "morveuse": [1, 4], // Fem
  "gamin de merde": [3, 5], // Shit kid
  "petite merde": [3, 5], // Little shit
  "gros lard": [1, 4], // Fat lard
  "grosse vache": [1, 4], // Fat cow
  "gros tas": [1, 4], // Big pile (fat person)
  "grosse truie": [1, 4], // Fat sow
  "boudin": [1, 4], // Blood sausage / Ugly woman
  "thon": [1, 2], // Tuna / Ugly woman
  "laideron": [1, 4], // Ugly woman
  "mocheté": [1, 4], // Ugly person

  // ========================================
  // === More Quebec Sacres & Compounds ====
  // ========================================
  "tabarnak de câlice": [3, 5], // Tabernacle of chalice (compound sacre)
  "câlice de tabarnak": [3, 5], // Chalice of tabernacle (compound sacre)
  "osti de crisse": [3, 5], // Host of Christ (compound sacre)
  "crisse de tabarnak": [3, 5], // Christ of tabernacle (compound sacre)
  "ostie de câlice": [3, 5], // Host of chalice (compound sacre)
  "câlice de ciboire": [3, 5], // Chalice of ciborium (compound sacre)
  "tabarnak de ciboire": [3, 5], // Tabernacle of ciborium (compound sacre)
  "osti de câlice de tabarnak": [3, 5], // Triple compound sacre
  "crisse de câlice de tabarnak": [3, 5], // Triple compound sacre
  "sacrement de câlice": [3, 5], // Sacrament of chalice
  "sacrement de tabarnak": [3, 5], // Sacrament of tabernacle
  "baptême de tabarnak": [3, 5], // Baptism of tabernacle
  "viarge de tabarnak": [3, 5], // Virgin of tabernacle
  "maudit câlice": [3, 5], // Damn chalice
  "maudit tabarnak": [3, 5], // Damn tabernacle
  "maudit crisse": [3, 5], // Damn Christ
  "maudite ostie": [3, 5], // Damn host
  "ciboire de câlice": [3, 5], // Ciborium of chalice
  "tabarnouche de câline": [1, 5], // Mild compound sacre
  "câliboire": [1, 5], // Compound mild sacre
  "tabarslac": [1, 5], // Mild variant of tabarnak
  "câlisse": [3, 5], // Variant spelling of câlice
  "crissement": [3, 5], // Adverb from crisse (Quebec)
  "en tabarnak": [3, 5], // In tabernacle (extremely)
  "en câlice": [3, 5], // In chalice (extremely)
  "en crisse": [3, 5], // In Christ (extremely)
  "en osti": [3, 5], // In host (extremely)
  "se décâlisser": [3, 5], // To fall apart (Quebec)
  "se décrisser": [3, 5], // To not give a fuck (Quebec)
  "encâlissé": [3, 5], // Pissed off (Quebec)
  "encâlissée": [3, 5], // Fem pissed off (Quebec)
  "décrissé": [3, 5], // Destroyed (Quebec)
  "décrissée": [3, 5], // Fem destroyed (Quebec)
  "sacrament": [3, 5], // Variant sacrament sacre
  "bout de crisse": [3, 5], // Piece of Christ (Quebec)
  "bout de viarge": [3, 5], // Piece of virgin (Quebec)
  "charrue": [1, 4], // Snowplow / ugly woman (Quebec)
  "mangeux de marde": [3, 5], // Shit eater (Quebec)
  "marde": [3, 5], // Shit (Quebec variant of merde)
  "plein de marde": [3, 5], // Full of shit (Quebec)
  "tête carrée": [3, 5], // Square head (Quebec slur for anglophones)
  // Commented out: false positive on English word "bloke" (common British English word)
  // "bloke": [3, 5], // Anglophone person (Quebec, derogatory)
  "caltor": [1, 4], // Ugly/dirty person (Quebec)
  "chaudasse": [3, 5], // Hot chick / slutty (Quebec)
  "débile mental": [3, 5], // Mental retard (Quebec)
  "lâche": [1, 4], // Coward / let go (Quebec)
  "licheux de cul": [3, 5], // Ass licker (Quebec)
  "moron": [1, 4], // Moron (Quebec, English loan)
  "ostination": [3, 5], // Stubbornness / arguing (Quebec)
  "ostiner": [1, 4], // To argue stupidly (Quebec)
  "pissette": [4, 5], // Small penis (Quebec)
  "pogner le cul": [3, 5], // To grab ass (Quebec)
  "sacreur": [3, 5], // One who sacres (Quebec)
  "sacrures": [3, 5], // Swear words (Quebec)
  "slaquer": [1, 2], // To slack / fire (Quebec)
  "smatte": [1, 3], // Smart-ass (Quebec, from English)
  "twit": [1, 2], // Twit / idiot (Quebec, English loan)

  // ========================================
  // === More Putain Compounds =============
  // ========================================
  "putain de bordel de merde": [3, 5], // Fucking brothel of shit
  "putain de ta mère": [3, 5], // Fucking your mother
  "putain de sa race": [3, 5], // Fucking his race
  "putain de chiotte": [3, 5], // Fucking toilet
  "oh putain": [3, 5], // Oh fuck
  "putain de connard": [3, 4], // Fucking bastard
  "putain de connasse": [3, 5], // Fucking bitch
  "putain de saloperie": [3, 5], // Fucking crap
  "putain de fait chier": [3, 5], // Fucking pisses me off
  "nom de putain": [5, 5], // In the name of the whore
  "sacré putain": [5, 5], // Holy whore

  // ========================================
  // === More Merde Compounds ==============
  // ========================================
  "emmerdement": [3, 5], // Annoyance / hassle
  "démerdard": [3, 5], // Resourceful person (vulgar)
  "démerdarde": [3, 5], // Fem resourceful
  "merdouille": [3, 5], // Little shit / mishap
  "merdouiller": [3, 5], // To mess up
  "merdier": [3, 5], // Shitstorm / mess
  "emmerdant": [3, 5], // Annoying (as hell)
  "emmerdante": [3, 5], // Fem annoying
  "dans la merde": [3, 5], // In the shit / in trouble
  "jusqu'au cou dans la merde": [3, 5], // Neck deep in shit
  "remuer la merde": [3, 5], // To stir up shit
  "brasser la merde": [3, 5], // To stir shit (variant)
  "bouffer de la merde": [3, 5], // To eat shit
  "putain de merde de bordel": [3, 5], // Fucking shit brothel
  "bordel de merde": [3, 5], // Brothel of shit / fucking shit
  "merde alors": [3, 5], // Shit then / well shit
  "oh merde": [3, 5], // Oh shit
  "sacré merde": [3, 5], // Holy shit

  // ========================================
  // === More Con Compounds ================
  // ========================================
  "connard de merde": [3, 4], // Shitty bastard
  "connasse de merde": [3, 5], // Shitty bitch
  "petit con": [3, 5], // Little asshole
  "petite conne": [3, 5], // Little bitch
  "sale connard": [3, 4], // Dirty bastard
  "sale connasse": [3, 5], // Dirty bitch
  "bande de cons": [1, 4], // Bunch of idiots
  "putain de con": [1, 4], // Fucking idiot
  "quel con": [1, 4], // What an idiot
  "quelle conne": [1, 4], // What an idiot (fem)
  "sacré con": [1, 4], // Holy idiot
  "sacrée conne": [1, 4], // Holy idiot (fem)
  "vieux con": [1, 4], // Old fool
  "vieille conne": [1, 4], // Old fool (fem)
  "con comme la lune": [1, 4], // Dumb as the moon
  "con comme un balai": [1, 4], // Dumb as a broom
  "con comme ses pieds": [1, 4], // Dumb as his feet
  "tête de con de merde": [4, 5], // Shit dickhead

  // ========================================
  // === African French Profanity ==========
  // ========================================
  // --- Senegalese French ---
  "niaw": [1, 4], // Idiot (Senegal Wolof-French)
  "dof": [1, 4], // Crazy / idiot (Senegal Wolof-French)
  "niak": [3, 4], // Derogatory (Senegal)
  "gadjé": [3, 4], // Non-African (derogatory, Senegal)
  "toubab": [3, 4], // White person (can be derogatory, West Africa)
  "nègre de merde": [3, 5], // Shit negro (very offensive, used in Africa too)
  // --- Congolese French ---
  "zoba": [1, 4], // Idiot / penis (Congo)
  "pombé": [1, 3], // Drunkard (Congo)
  "matiti": [3, 4], // Crazy / weed (Congo)
  "nyama": [3, 4], // Animal / brute (Congo/Central Africa)
  "libulu": [1, 4], // Idiot (Congo)
  "mwana nyama": [3, 4], // Child of an animal (Congo)
  // --- Ivorian French ---
  "gbê": [5, 5], // Die / fuck off (Ivory Coast)
  "dêh": [3, 4], // Expression of frustration (Ivory Coast)
  "gawa": [3, 4], // Country bumpkin (Ivory Coast)
  "groto": [3, 4], // Redneck / yokel (Ivory Coast)
  "boucantier": [3, 4], // Loudmouth / troublemaker (Ivory Coast)
  "djandjou": [1, 3], // Idiot (Ivory Coast nouchi slang)
  "gnamoukoudji": [3, 4], // Scumbag (Ivory Coast nouchi)
  "tchoin": [3, 4], // Slut / easy girl (Ivory Coast/African French)
  "sapologie": [3, 4], // Fashion obsession (can be derogatory, Congo)
  "bordelier": [3, 4], // Troublemaker (West African French)
  "va te coucher": [3, 5], // Go to bed / fuck off (African French)

  // ========================================
  // === More Belgian French ===============
  // ========================================
  "fieu": [1, 4], // Guy / idiot (Belgian)
  "brol": [1, 3], // Junk / mess (Belgian)
  "schieve": [3, 4], // Crazy (Belgian, from Flemish)
  "zievereir": [3, 5], // Bullshitter (Belgian, from Flemish)
  "kansen": [3, 4], // Asshole (Belgian)
  "klansen": [1, 4], // Idiot (Belgian)
  "stoefer": [3, 4], // Show-off (Belgian)
  "snull": [1, 4], // Wimp / loser (Belgian)
  "snulle": [3, 4], // Fem wimp (Belgian)
  "mansen": [1, 4], // Loser (Belgian)
  "potje": [3, 4], // Little asshole (Belgian)

  // ========================================
  // === Swiss French Profanity ============
  // ========================================
  "bobet": [1, 4], // Idiot (Swiss French)
  "bobette": [1, 4], // Fem idiot (Swiss French)
  "cornichon": [1, 4], // Pickle / idiot (Swiss French)
  "cucul": [1, 4], // Silly / dumb (Swiss French)
  "gnôle": [1, 3], // Booze / moonshine (Swiss)
  "pouet": [1, 4], // Wimp / loser (Swiss French)
  "poutze": [3, 4], // Cleaning / mess (Swiss, from German Putzen)
  "schlingue": [1, 3], // To stink (Swiss French, from German)
  "schlingueur": [3, 4], // Stinker (Swiss French)
  "tacot": [1, 4], // Old banger / ugly thing (Swiss)
  "tartouille": [1, 4], // Ugly woman (Swiss French)
  "tourte": [1, 4], // Pie / idiot (Swiss French)
  "vadrouille": [1, 1], // Mop / wandering sloppily (Swiss)
  "gognand": [1, 4], // Clumsy fool (Swiss French)
  "gognande": [1, 4], // Fem clumsy fool (Swiss)

  // ========================================
  // === More Verlan =======================
  // ========================================
  "keufs": [1, 3], // Plural cops (verlan)
  "meufter": [1, 3], // To check out women (verlan-derived)
  "pécho": [1, 3], // To hook up / catch (verlan of choper)
  "barjot": [1, 3], // Crazy (verlan of jobard)
  "laisse béton": [1, 2], // Let it go (verlan of laisse tomber)
  "véner": [1, 3], // Angry (verlan of énervé, variant of vénère)
  "genrou": [1, 2], // Red-haired (verlan of rouquin)
  "ienchli": [3, 4], // Dog (verlan variant of chien)
  "keubla": [3, 4], // Black (verlan of Black, offensive)
  "kainri": [3, 4], // American (verlan of Ricain)
  "beuré": [3, 4], // Arab (verlan variant, offensive)
  "céfran": [3, 4], // French (verlan of français)
  "zonmé": [1, 2], // House (verlan of maison)
  "teupu": [5, 4], // Whore (verlan of pute, variant)
  "teushi": [3, 5], // Hashish (verlan of shit/haschisch)
  "relou de merde": [3, 5], // Annoying piece of shit
  "chelou de ouf": [3, 4], // Crazy sketchy

  // ========================================
  // === More Sexual Terms =================
  // ========================================
  "partouze": [4, 4], // Orgy
  "partouzard": [4, 4], // Orgy participant
  "partouzarde": [4, 4], // Fem orgy participant
  "gang bang": [4, 4], // Gang bang
  "plan cul": [4, 4], // Booty call / hookup
  "plan à trois": [4, 4], // Threesome
  "soixante-neuf": [4, 4], // Sixty-nine (sexual position)
  "levrette": [4, 4], // Doggy style
  "missionnaire": [4, 4], // Missionary (position)
  "anulingus": [4, 4], // Anulingus
  "branlette espagnole": [4, 4], // Spanish wank (titjob)
  "doigtage": [4, 4], // Fingering
  "enculade": [4, 5], // Ass-fucking session
  "godemiché": [4, 4], // Dildo (archaic)
  "gode": [4, 4], // Dildo (modern)
  "éponger": [4, 4], // To mop up / To soak up (sexual slang)
  "mouiller": [4, 4], // To get wet (sexually)
  "mouillée": [4, 4], // Wet (sexually aroused, fem)
  "giclée": [4, 4], // Spurt / squirt
  "gicler": [4, 4], // To squirt / to spurt
  "décharger": [4, 4], // To discharge / To cum
  "juter": [4, 4], // To juice / To cum
  "foutre en l'air": [4, 5], // To fuck up / To cum
  "bouffer la chatte": [4, 4], // To eat pussy
  "brouter le gazon": [4, 4], // To mow the lawn (cunnilingus)
  "brouter la moquette": [4, 4], // To chew the carpet (lesbian sex slang)
  "se doigter": [4, 4], // To finger oneself
  "se goder": [4, 4], // To dildo oneself
  "se toucher": [4, 4], // To touch oneself
  "se tripoter": [4, 4], // To grope oneself
  "tripoter": [4, 4], // To grope
  "peloter": [4, 4], // To fondle / grope
  "pelotage": [4, 4], // Fondling / groping
  "attouchement": [4, 4], // Inappropriate touching
  "viol": [5, 5], // Rape
  "violer": [5, 5], // To rape
  "violeur": [5, 5], // Rapist
  "violeuse": [5, 5], // Fem rapist
  "pédophile": [5, 5], // Pedophile
  "inceste": [5, 5], // Incest
  "zoophile": [4, 4], // Zoophile
  "zoophilie": [4, 4], // Zoophilia
  "nécrophile": [4, 4], // Necrophile
  "sado-maso": [4, 4], // Sadomasochist
  "dominatrice": [4, 4], // Dominatrix
  "soumise": [4, 4], // Submissive (fem)
  "soumis": [4, 4], // Submissive (masc)
  "fist-fucking": [4, 5], // Fist-fucking
  "fisting": [4, 5], // Fisting
  "bukkake": [4, 5], // Bukkake
  "creampie": [4, 5], // Creampie
  "éjac faciale": [4, 4], // Facial ejaculation
  "gorge profonde": [4, 4], // Deep throat
  "pompe à bite": [4, 4], // Cock pump / cocksucker
  "avaler": [4, 4], // To swallow
  "cracher": [4, 4], // To spit
  "salope en chaleur": [4, 4], // Bitch in heat
  "chienne en chaleur": [4, 4], // Dog bitch in heat

  // ========================================
  // === More Homophobic Slurs =============
  // ========================================
  "pédé de merde": [5, 5], // Shitty faggot
  "sale pédé": [5, 4], // Dirty faggot
  "gros pédé": [1, 4], // Fat faggot
  "pédale": [5, 4], // Faggot (derogatory)
  "grande folle": [5, 4], // Big queen (derogatory)
  "tarlouze": [5, 4], // Faggot (very offensive)
  "tarlouse": [5, 4], // Variant spelling
  "tafiole": [5, 4], // Faggot (offensive)
  "lopette": [5, 4], // Sissy / faggot
  "lopètte": [5, 4], // Variant with accent
  "tantouze": [5, 4], // Variant of tantouse
  "tante": [2, 2], // Aunt / gay man (derogatory)
  "tata": [1, 1], // Auntie / gay man (derogatory)
  "enculé de pédé": [5, 5], // Ass-fucked faggot
  "suceuse de bite": [5, 4], // Cock sucker (used for gay men)
  "tapette à mouches": [5, 4], // Fly swatter / faggot
  "inverti": [5, 4], // Inverted / gay (archaic derogatory)
  "invertie": [5, 4], // Fem
  "sodomite": [5, 4], // Sodomite
  "sale gouine": [5, 4], // Dirty dyke
  "grosse gouine": [1, 4], // Fat dyke
  "gouinasse": [5, 4], // Dyke (augmentative, very offensive)
  "broute-minou": [5, 4], // Pussy eater (lesbian slur)
  "camionneuse": [5, 4], // Trucker / butch lesbian (derogatory)

  // ========================================
  // === More Internet Slang ===============
  // ========================================
  "nktm": [2, 3], // Variant: nique ta mère
  "ftg": [2, 3], // Ferme ta gueule
  "vtff": [2, 3], // Va te faire foutre
  "vtfe": [2, 3], // Va te faire enculer
  "jsp": [2, 3], // Je sais pas (I don't know, used dismissively)
  "osef": [3, 5], // On s'en fout (we don't give a fuck)
  "oklm": [2, 3], // Au calme (chill, can be dismissive)
  "slt": [2, 3], // Salut / salope (context-dependent)
  "ptn": [2, 3], // Putain (abbreviated)
  "mrd": [2, 3], // Merde (abbreviated)
  "enk": [2, 3], // Enculé (abbreviated)
  "bsf": [2, 3], // Best friend / baise (context-dependent)
  "niqta": [2, 3], // Nique ta (abbreviated)
  "stp ferme ta gueule": [3, 5], // Please shut the fuck up
  "wsh": [2, 3], // Variant of wesh
  "cheh": [2, 3], // Serves you right (Arabic-French slang)
  "la honte": [1, 2], // The shame / how embarrassing (derogatory)
  "cramé": [2, 3], // Burned / busted / wasted
  "cramée": [2, 3], // Fem burned

  // ========================================
  // === More Compound Phrases =============
  // ========================================
  "putain de bordel de merde de sa race": [3, 5], // Extreme compound
  "bordel de putain de merde": [3, 5], // Extreme compound variant
  "nique tout": [3, 5], // Fuck everything
  "nique le monde": [3, 5], // Fuck the world
  "enculé de sa race": [3, 5], // Ass-fucked of his race
  "bâtard de sa mère": [3, 4], // Bastard of his mother
  "fils de pute de merde": [3, 5], // Shit son of a bitch
  "sale fils de pute": [3, 5], // Dirty son of a bitch
  "gros fils de pute": [1, 4], // Fat son of a bitch
  "espèce de fils de pute": [3, 5], // You son of a bitch
  "espèce de pourriture": [3, 5], // You piece of rot
  "espèce de déchet": [3, 5], // You piece of trash
  "déchet humain": [3, 5], // Human waste
  "poubelle humaine": [3, 5], // Human trash can
  "sous-homme": [5, 5], // Subhuman (very offensive)
  "sous-femme": [3, 5], // Subwoman (very offensive)
  "erreur de la nature": [3, 5], // Mistake of nature
  "accident de capote": [3, 5], // Condom accident (unwanted child)
  "fils de personne": [3, 5], // Son of nobody
  "sale gros porc": [1, 4], // Dirty fat pig
  "sale grosse truie": [1, 4], // Dirty fat sow
  "sale petite merde": [3, 5], // Dirty little shit
  "sale petite pute": [5, 5], // Dirty little whore
  "espèce de grosse merde": [3, 5], // You big piece of shit
  "putain de ta mère la pute": [5, 5], // Fucking your whore mother
  "nique ta mère la pute": [5, 5], // Fuck your whore mother
  "va crever dans un fossé": [5, 5], // Go die in a ditch
  "je te baise ta mère": [3, 5], // I fuck your mother
  "nique tes morts": [3, 5], // Fuck your dead (very offensive)
  "ta mère en string": [3, 5], // Your mother in a thong
  "ta mère la grosse": [1, 4], // Your fat mother
  "ta mère en slip": [3, 5], // Your mother in underwear
  "ton père le chauve": [1, 4], // Your bald father (dismissive)

  // ========================================
  // === More General Vulgar Terms =========
  // ========================================
  "péter un câble": [2, 3], // To blow a fuse / lose it
  "péter les plombs": [2, 3], // To blow a fuse / go crazy
  "péter un boulon": [2, 3], // To lose a bolt / go crazy
  "se faire chier": [3, 4], // To be bored to death
  "chiant": [3, 5], // Boring / annoying as fuck
  "chiante": [3, 4], // Fem boring/annoying
  "chier une pendule": [3, 5], // To shit a clock (overreact)
  "casse-pieds": [2, 3], // Pain in the ass (lit. foot-breaker)
  "casse-bonbon": [2, 3], // Pain in the ass (lit. candy-breaker)
  "casse-burne": [3, 4], // Ball-breaker
  "casse-burnes": [3, 4], // Ball-breaker (plural)
  "pète-sec": [1, 3], // Dry farter / authoritarian
  "gratte-cul": [3, 4], // Rosehip / ass scratcher
  "mange-merde": [3, 5], // Shit eater
  "baise-en-ville": [3, 5], // Overnight bag (lit. fuck-in-town)
  "brûle-gueule": [3, 4], // Short pipe / smelly breath
  "lèche-bottes": [1, 3], // Boot licker
  "lèche-vitrine": [1, 1], // Window shopping (lit. window licker)
  "pisse-froid": [1, 3], // Cold pisser / killjoy
  "pisse-vinaigre": [1, 3], // Vinegar pisser / miser
  "tire-au-cul": [3, 4], // Shirker / lazy ass
  "tire-au-flanc": [3, 4], // Shirker (military origin)
  "torche-cul": [3, 4], // Ass wipe / toilet paper
  "foutriquet": [3, 4], // Little runt / good-for-nothing
  "foutraque": [3, 4], // Crazy / scatterbrained
  "emmerdeur de première": [3, 4], // First-class annoying person
  "chieur de première": [3, 4], // First-class pain in the ass
  "saligaud": [3, 4], // Dirty person / scumbag
  "saligaude": [3, 4], // Fem dirty person
  "souillon": [3, 4], // Slob / dirty person
  "salopiaud": [3, 4], // Little scumbag (diminutive of salaud)
  "enfant de putain": [5, 4], // Child of a whore
  "bougre": [3, 4], // Fellow / bugger
  "bougresse": [3, 4], // Fem of bougre
  "sacré bougre": [3, 4], // Holy bugger
  "sacré nom de dieu": [3, 4], // Holy name of God
  "nom de dieu de bordel de merde": [3, 5], // Name of God of shit brothel
  "bon dieu de merde": [3, 5], // Good God of shit
  "sacré nom d'une pipe": [3, 4], // Holy name of a pipe
  "p'tain": [3, 4], // Contracted putain
  "sa mère la pute": [5, 4], // His/her mother the whore
  "sa race": [3, 4], // His/her race (offensive dismissal)
  "la putain de sa mère": [5, 4], // The whore of his mother
  "sa mère": [3, 4], // His mother (truncated insult)
  "la mort": [1, 1], // Death (as insult/threat)
  "va mourir": [5, 5], // Go die
  "crève sale chien": [5, 5], // Die dirty dog

  // ========================================
  // === Spelling Evasions / Leet Speak ====
  // ========================================
  // --- Putain evasions ---
  "puta1n": [3, 5], // Putain leet
  "put@in": [3, 5], // Putain at-sign
  "pvtain": [3, 5], // Putain v-swap
  "pu7ain": [3, 5], // Putain 7-swap
  "put4in": [3, 5], // Putain 4-swap
  "putaiin": [3, 5], // Putain double i
  "puttain": [3, 5], // Putain double t
  "puutain": [3, 5], // Putain double u
  "putein": [3, 5], // Putain misspelling
  "ptain": [3, 5], // Putain truncated
  "ptin": [3, 5], // Putain abbreviated
  "putaaain": [3, 5], // Putain elongated
  "pu-tain": [3, 5], // Putain hyphenated
  "pu.tain": [3, 5], // Putain dotted
  "put1": [3, 5], // Putain abbreviated leet
  "put@1n": [3, 5], // Putain double leet
  "puteuh": [3, 5], // Putain phonetic variant
  // --- Merde evasions ---
  "m3rde": [3, 5], // Merde leet
  "m*rde": [3, 5], // Merde star
  "m€rde": [3, 5], // Merde euro sign
  "merd3": [3, 5], // Merde leet end
  "merrde": [3, 5], // Merde double r
  "mairde": [3, 5], // Merde phonetic
  "mrde": [3, 5], // Merde vowel drop
  "mèrde": [3, 5], // Merde accent variant
  "me.rde": [3, 5], // Merde dotted
  "mer-de": [3, 5], // Merde hyphenated
  "merdum": [3, 5], // Merde Latin mock
  "meeerde": [3, 5], // Merde elongated
  // --- Connard evasions ---
  "c0nnard": [3, 5], // Connard zero-o
  "c0nnasse": [3, 5], // Connasse zero-o
  "conna rd": [3, 5], // Connard spaced
  "connar": [3, 5], // Connard truncated
  "konar": [3, 5], // Connard phonetic
  "konard": [3, 5], // Connard k-swap
  "konnard": [3, 5], // Connard k-swap double n
  "konasse": [3, 5], // Connasse k-swap
  "konnasse": [3, 5], // Connasse k-swap double n
  // --- Enculé evasions ---
  "3nculé": [3, 5], // Enculé leet
  "enkulé": [3, 5], // Enculé k-swap
  "ankule": [3, 5], // Enculé phonetic
  "enculay": [3, 5], // Enculé phonetic
  "encul3": [3, 5], // Enculé leet end
  "enc.ulé": [3, 5], // Enculé dotted
  "en-culé": [3, 5], // Enculé hyphenated
  "nculé": [3, 5], // Enculé truncated
  "anculé": [3, 5], // Enculé misspelling
  // --- Salope evasions ---
  "sal0pe": [3, 5], // Salope zero-o
  "s@lope": [3, 5], // Salope at-sign
  "sallope": [3, 5], // Salope double l
  "salop": [3, 5], // Salope truncated
  "saloppe": [3, 5], // Salope double p
  "sal0p": [3, 5], // Salope zero-o truncated
  "salôpe": [3, 5], // Salope accent
  "sa.lope": [3, 5], // Salope dotted
  // --- Bite evasions ---
  "b1te": [3, 5], // Bite leet
  "b!te": [3, 5], // Bite exclamation
  "bîte": [3, 5], // Bite accent
  // Commented out: false positive on German word "bitte" (please)
  // "bitte": [3, 5], // Bite double t
  "bi.te": [3, 5], // Bite dotted
  "biite": [3, 5], // Bite double i
  // --- Nique evasions ---
  "n1que": [3, 5], // Nique leet
  "n!que": [3, 5], // Nique exclamation
  "niqu3": [3, 5], // Nique leet end
  "nikk": [3, 5], // Nique doubled
  // Commented out: false positive on English name/nickname "Nik"
  // "nik": [3, 5], // Nique abbreviated
  "niker": [3, 5], // Niquer simplified
  "nikker": [3, 5], // Nique doubled k
  "niké": [3, 5], // Nique phonetic
  "nik ta mère": [3, 5], // Nique ta mère simplified
  "nik sa mère": [3, 5], // Nique sa mère simplified
  "nik ta race": [3, 5], // Nique ta race simplified
  // --- Pute evasions ---
  "put3": [3, 5], // Pute leet
  "pvte": [3, 5], // Pute v-swap
  "pu-te": [3, 5], // Pute hyphenated
  "putte": [3, 5], // Pute double t
  "puut3": [3, 5], // Pute double u leet
  // --- Fils de pute evasions ---
  "fildepute": [3, 5], // Fils de pute contracted
  "filsdpute": [3, 5], // Fils de pute contracted
  "f1ls de pute": [3, 5], // Fils de pute leet
  "fils 2 pute": [3, 5], // Fils de pute number swap
  "fils d pute": [3, 5], // Fils de pute truncated
  "fi de pu": [3, 5], // Fils de pute very abbreviated
  // --- Pédé evasions ---
  "p3dé": [3, 5], // Pédé leet
  "péd3": [3, 5], // Pédé leet end
  "ped3": [3, 5], // Pédé no accent leet
  "pedé": [3, 5], // Pédé no accent
  "pede": [3, 5], // Pédé fully stripped
  // --- Ta gueule evasions ---
  "ta gueul": [3, 5], // Ta gueule truncated
  "tagueule": [3, 5], // Ta gueule contracted
  "ta g": [3, 5], // Ta gueule very abbreviated
  "tagel": [3, 5], // Ta gueule phonetic
  "taggle": [3, 5], // Ta gueule internet variant
  // --- General leet evasions ---
  "c0n": [3, 5], // Con leet
  "cøn": [3, 5], // Con Scandinavian o
  "b0rdel": [3, 5], // Bordel leet
  "f0utre": [3, 5], // Foutre leet
  "ch1er": [3, 5], // Chier leet
  "p1sser": [3, 5], // Pisser leet
  "br@nler": [3, 5], // Branler leet
  "s4laud": [3, 5], // Salaud leet
  "b@tard": [3, 5], // Bâtard leet
  "m0ngol": [3, 5], // Mongol leet
  "d3bile": [3, 5], // Débile leet

  // ========================================
  // === Additional Compound Phrases =======
  // ========================================
  "nique ton père": [1, 4], // Fuck your father
  "mange ta mère": [3, 5], // Eat your mother
  "mange la merde": [3, 5], // Eat shit
  "bouffe la merde": [3, 5], // Eat shit (variant)
  "casse-toi pauvre con": [1, 4], // Piss off you poor idiot (Sarkozy quote)
  "casse-toi sale con": [1, 4], // Piss off dirty idiot
  "ferme ta sale gueule": [3, 5], // Shut your dirty mouth
  "ferme ta grande gueule": [3, 5], // Shut your big mouth
  "ta gueule sale pute": [5, 5], // Shut up dirty whore
  "ta gueule connard": [3, 5], // Shut up asshole
  "ta gueule enculé": [3, 5], // Shut up ass-fucker
  "dégage de là": [3, 5], // Get out of here
  "dégage sale merde": [3, 5], // Get lost dirty shit
  "je t'encule ta mère": [3, 5], // I ass-fuck your mother
  "je m'en bats les couilles": [4, 5], // I beat my balls with it (don't care)
  "je m'en bats la race": [3, 5], // I don't give a fuck about it
  "j'en ai rien à foutre": [3, 5], // I don't give a fuck
  "j'en ai rien à battre": [3, 5], // I don't give a damn
  "j'en ai rien à branler": [3, 5], // I don't give a wank
  "j'en ai plein le cul": [3, 5], // I've had it up to my ass
  "tu fais chier le monde": [3, 5], // You annoy the whole world
  "tu me fais chier": [3, 5], // You piss me off
  "tu me gonfles": [3, 5], // You inflate me / you annoy me
  "tu me les brises": [4, 5], // You break them (my balls)
  "tu me les casses": [4, 5], // You break them (my balls)
  "tu me les pèles": [4, 5], // You peel them (my balls)
  "tu me soûles": [1, 3], // You're making me drunk / annoying me
  "va te pendre": [5, 5], // Go hang yourself
  "va te noyer": [3, 5], // Go drown yourself
  "va en enfer": [3, 5], // Go to hell
  "crève en enfer": [5, 5], // Die in hell
  "pourriture de merde": [3, 5], // Shitty rot
  "fumier de merde": [3, 5], // Shitty manure
  "ordure de merde": [3, 5], // Shitty trash
  "charogne de merde": [3, 5], // Shitty carrion
  "espèce de pourriture de merde": [3, 5], // You shitty piece of rot
  "va niquer ta race": [3, 5], // Go fuck your race
  "je nique ta race": [3, 5], // I fuck your race
  "nique ta famille": [3, 5], // Fuck your family
  "nique ton père ta mère": [1, 4], // Fuck your father and mother
  "nique tes grands-morts": [3, 5], // Fuck your great dead (very offensive)
  "sur la tête de ta mère": [3, 5], // On your mother's head (offensive oath)
  "ta mère la chienne": [3, 5], // Your mother the bitch
  "ta mère suce des bites": [4, 5], // Your mother sucks dicks
  "ton père suce des bites": [1, 4], // Your father sucks dicks
  "ta mère en short": [3, 5], // Your mother in shorts
  "ta mère en maillot": [3, 5], // Your mother in swimsuit
  "mange tes grands-morts": [3, 5], // Eat your great dead
  "je chie sur ta mère": [3, 5], // I shit on your mother
  "je chie sur ta race": [3, 5], // I shit on your race
  "je pisse sur ta tombe": [3, 5], // I piss on your grave
  "sale merde de chien": [3, 5], // Dirty dog shit
  "va bouffer tes morts": [3, 5], // Go eat your dead
  "ta daronne": [3, 5], // Your mother (slang, disrespectful)
  "nique ta daronne": [3, 5], // Fuck your mother (slang)
  "ta daronne la pute": [5, 5], // Your mother the whore (slang)

  // ========================================
  // === Quebec Sacre Combinations =========
  // ========================================
  // --- Additional compound sacres ---
  "tabarnak de câlice de crisse": [3, 5], // Triple sacre
  "ostie de câlice de crisse": [3, 5], // Triple sacre variant
  "câlice de crisse de tabarnak": [3, 5], // Triple sacre variant
  "crisse d'ostie de tabarnak": [3, 5], // Triple sacre variant
  "tabarnak d'ostie de câlice": [3, 5], // Triple sacre variant
  "sacrement d'ostie": [3, 5], // Sacrament of host
  "sacrement de crisse": [3, 5], // Sacrament of Christ
  "baptême de câlice": [3, 5], // Baptism of chalice
  "baptême de crisse": [3, 5], // Baptism of Christ
  "baptême d'ostie": [3, 5], // Baptism of host
  "viarge de câlice": [3, 5], // Virgin of chalice
  "viarge de crisse": [3, 5], // Virgin of Christ
  "viarge d'ostie": [3, 5], // Virgin of host
  "ciboire de tabarnak": [3, 5], // Ciborium of tabernacle
  "ciboire de crisse": [3, 5], // Ciborium of Christ
  "ciboire d'ostie": [3, 5], // Ciborium of host
  "maudit ciboire": [3, 5], // Damn ciborium
  "maudite câlice": [3, 5], // Damn chalice (fem)
  "maudit sacrement": [3, 5], // Damn sacrament
  "maudit baptême": [3, 5], // Damn baptism
  "maudite viarge": [3, 5], // Damn virgin
  "ostie de marde": [3, 5], // Host of shit
  "câlice de marde": [3, 5], // Chalice of shit
  "tabarnak de marde": [3, 5], // Tabernacle of shit
  "crisse de marde": [3, 5], // Christ of shit
  "ostie de con": [1, 4], // Host of idiot
  "câlice de con": [1, 4], // Chalice of idiot
  "tabarnak de con": [1, 4], // Tabernacle of idiot
  "crisse de con": [1, 4], // Christ of idiot
  "ostie d'épais": [3, 5], // Host of thick one
  "câlice d'épais": [3, 5], // Chalice of thick one
  "crisse d'épais": [3, 5], // Christ of thick one
  "tabarnak d'épais": [3, 5], // Tabernacle of thick one
  "ostie de cave": [1, 4], // Host of idiot
  "câlice de cave": [1, 4], // Chalice of idiot
  "tabarnak de cave": [1, 4], // Tabernacle of idiot
  "crisse de cave": [1, 4], // Christ of idiot
  "ostie de niaiseux": [1, 4], // Host of moron
  "câlice de niaiseux": [1, 4], // Chalice of moron
  "tabarnak de niaiseux": [1, 4], // Tabernacle of moron
  "maudit niaiseux": [1, 4], // Damn moron
  "maudite niaiseuse": [1, 4], // Damn moron (fem)
  "ostie de mongol": [3, 5], // Host of retard
  "câlice de mongol": [3, 5], // Chalice of retard
  "en tabarnak de câlice": [3, 5], // In tabernacle of chalice (intensifier)
  "en câlice de crisse": [3, 5], // In chalice of Christ (intensifier)
  "en ostie de tabarnak": [3, 5], // In host of tabernacle (intensifier)
  // --- Quebec sacre derivatives ---
  "tabarnaquer": [3, 4], // To waste / destroy (from tabarnak)
  "tabarnaqué": [3, 4], // Destroyed (from tabarnak)
  "tabarnaquée": [3, 4], // Destroyed fem (from tabarnak)
  "câlicer": [3, 4], // To throw / destroy (from câlice)
  "câlicé": [3, 4], // Thrown / destroyed (from câlice)
  "câlicée": [3, 4], // Thrown fem (from câlice)
  "crisser": [3, 4], // To throw / to leave (from crisse)
  "crissé": [3, 4], // Thrown / left (from crisse)
  "crissée": [3, 4], // Thrown fem (from crisse)
  "ostiné": [3, 4], // Argued (from ostie)
  "ostinée": [3, 4], // Argued fem
  "sacrer": [3, 4], // To swear (Quebec)
  "sacré": [3, 4], // Swore / damn (Quebec)
  "sacrée": [3, 4], // Fem (Quebec)
  "décâlisser la gueule": [3, 4], // To smash the face (Quebec)
  "décrisser le camp": [3, 4], // To get the hell out (Quebec)
  // --- Additional Quebec mild variants ---
  "tabarouette": [1, 4], // Mild tabarnak
  "tabarnane": [1, 4], // Mild tabarnak
  "câline de bine": [1, 4], // Mild câlice compound
  "câliboire de tabarouette": [1, 4], // Mild compound
  "crime pof": [1, 4], // Mild crisse
  "bout de ciarge": [1, 4], // Mild ciboire variant
  "sacrament de viarge": [3, 4], // Sacrament of virgin
  "mosus de mosus": [1, 4], // Double mild (Quebec)
  "mautadit": [3, 4], // Variant of maudit
  "mautadine": [3, 4], // Fem variant of maudit

  // ========================================
  // === African French (Expanded) =========
  // ========================================
  // --- Ivorian (Nouchi) ---
  "gaou": [1, 4], // Fool / sucker (Ivory Coast)
  "s'enjailler": [3, 4], // To show off wildly (can be derogatory)
  "daba": [1, 4], // Hoe / stupid person (Ivory Coast)
  "gnaga": [1, 4], // Ugly woman (Ivory Coast nouchi)
  "blo": [1, 4], // Stupid / idiot (Ivory Coast nouchi)
  "dogba": [3, 4], // Strong / bully (Ivory Coast nouchi)
  "kpakpato": [3, 4], // Gossip / blabbermouth (Ivory Coast)
  "yêrê": [3, 4], // Arrogant person (Ivory Coast nouchi)
  "gnata": [3, 4], // Nasty / mean (Ivory Coast nouchi)
  "wôyô": [3, 4], // Expression of frustration (Ivory Coast)
  "coco": [1, 4], // Stupid / sucker (Ivory Coast)
  "koutou": [3, 4], // Buttocks (Ivory Coast nouchi)
  "flôsseur": [3, 4], // Show-off (Ivory Coast nouchi)
  "brouteur": [3, 4], // Internet scammer (Ivory Coast/West Africa)
  "brouteuse": [3, 4], // Fem internet scammer / gold digger
  "môgô": [3, 4], // Man / dude (can be derogatory, Ivory Coast)
  "go de nuit": [5, 4], // Night girl / prostitute (Ivory Coast)
  "faire le garba": [3, 4], // To be vulgar / crude (Ivory Coast)
  "djôsseur": [3, 4], // Arrogant person (Ivory Coast nouchi)
  "bangala": [4, 4], // Penis (Central/West African French)
  "kokodjambou": [1, 4], // Idiot (Ivory Coast nouchi)
  "gbêssé": [1, 4], // Ugly (Ivory Coast nouchi)
  // --- Camerounais ---
  "mange-mille": [3, 4], // Bribe taker (Cameroon)
  "asso": [1, 4], // Buddy / fool (context-dependent, Cameroon)
  "nkukuma": [1, 4], // Idiot (Cameroon)
  "nyanga": [3, 4], // Show-off / arrogant (Cameroon)
  "kongossa": [3, 4], // Gossip (Cameroon)
  "tchatcher": [3, 4], // To blabber / hit on (Cameroon French)
  "tara": [1, 4], // Friend / idiot (context, Cameroon)
  "ndamba": [5, 4], // Whore (Cameroon slang)
  "mbenguiste": [3, 4], // Diaspora African (can be derogatory, Cameroon)
  "sans-papiers de merde": [3, 5], // Shitty undocumented person (very offensive)
  "mboutman": [3, 5], // Man about town / fuckboy (Cameroon)
  // --- Senegalese ---
  "tëgg": [3, 4], // Insult (Wolof-French)
  "soow": [3, 4], // Crazy (Wolof-French)
  "niak sa mère": [3, 5], // Fuck his mother (Senegalese French)
  "deug": [3, 4], // Crazy (Wolof-French)
  "gaïndé": [3, 4], // Lion / rough person (Senegal)
  "baadoola": [1, 4], // Idiot (Senegal)
  "tangana": [3, 4], // Nasty person (Senegal)
  // --- Congolais (expanded) ---
  "moyibi": [3, 4], // Thief (Congo)
  "moloki": [3, 4], // Crazy person (Congo)
  "lokuta": [3, 4], // Liar (Congo Lingala-French)
  "biso": [3, 4], // Derogatory term (Congo)
  "makango": [3, 4], // Scammer (Congo)
  "mwana pute": [5, 4], // Child of whore (Congo French)
  "pombé de merde": [1, 3], // Shitty drunkard (Congo)
  "ye!": [3, 5], // Expression of contempt (Congo)
  // --- Malian French ---
  "doni doni": [1, 4], // Idiot (Mali)
  "fama": [3, 4], // Chief / bossy person (derogatory, Mali)
  "wahala": [3, 4], // Trouble / drama (West African French)
  "kounafoni": [1, 4], // Coward (Mali)
  // --- Maghreb French (Arabic-French) ---
  "nta": [3, 4], // You (derogatory, Maghreb)
  "zamel": [3, 4], // Faggot (Maghreb Arabic-French, very offensive)
  "zamelat": [3, 4], // Faggots (plural, Maghreb)
  "teho": [5, 4], // Whore (Maghreb Arabic-French)
  "hashouma": [3, 4], // Shame on you (Maghreb)
  "achkoun nta": [3, 4], // Who do you think you are (Maghreb dismissive)
  "kelb": [3, 4], // Dog (Maghreb Arabic-French insult)
  "kelbek": [3, 4], // Your dog (Maghreb)
  "hmara": [1, 4], // Female donkey / stupid woman (Maghreb)
  "khanzir": [3, 4], // Pig (Maghreb Arabic-French insult)
  "weld el kahba": [5, 5], // Son of a whore (Maghreb)
  "bent el kahba": [5, 4], // Daughter of a whore (Maghreb)
  "yehdi": [1, 4], // Idiot (Maghreb)
  "nik ommok": [3, 5], // Fuck your mother (Maghreb)
  "nik ta mère bâtard": [3, 4], // Compound Maghreb-French insult
  "hashoumtek": [3, 4], // Shame on you (Maghreb variant)
  "naâl": [3, 4], // Curse (Maghreb)
  "naâl din ommok": [3, 4], // Curse your mother's religion (Maghreb)
  "tfouh": [3, 4], // Spit (expression of contempt, Maghreb)
  "sir tnik ommok": [3, 5], // Go fuck your mother (Maghreb)
  "tboun ommok": [4, 4], // Your mother's pussy (Maghreb, very offensive)
  "lmanyouk": [3, 4], // Faggot (Maghreb variant)
  "qahba": [5, 4], // Whore (Maghreb Arabic variant of kahba)
  "khoroto": [3, 5], // Bullshit (Maghreb)
  "khra": [3, 5], // Shit (Maghreb Arabic-French)
  "wahd el khra": [3, 5], // Piece of shit (Maghreb)
  "wahd el hmar": [3, 4], // A donkey (Maghreb insult)
  "sale arabe": [5, 4], // Dirty Arab (very offensive)
  "sale rebeu": [5, 4], // Dirty Arab (verlan, offensive)
  "sale noir": [5, 4], // Dirty Black person (very offensive)
  "sale blanc": [4, 4], // Dirty White person (offensive)
  "sale juif": [5, 4], // Dirty Jew (very offensive)

  // ========================================
  // === Racial / Ethnic Slurs (Expanded) ==
  // ========================================
  "bicot": [5, 4], // Offensive slur for North Africans
  "bougnoul": [5, 4], // Variant of bougnoule
  "crouille": [5, 4], // Very offensive slur for Arabs
  "melon": [5, 4], // Offensive slur for North Africans
  "raton": [5, 4], // Offensive slur for North Africans (lit. small rat)
  "noraf": [5, 4], // North African (derogatory slang)
  "fatma": [5, 4], // Stereotypical name used for Arab women (derogatory)
  "bamboula": [5, 4], // Very offensive racial slur for Black people
  "macaque": [5, 4], // Monkey / racist slur
  "singe": [5, 4], // Monkey / racist slur when directed at people
  "boucaque": [5, 4], // Offensive slur for Black people
  "négro": [5, 4], // Negro (offensive)
  "négrillon": [5, 4], // Little negro (very offensive)
  "négrillonne": [5, 4], // Fem little negro (very offensive)
  "sale nègre": [5, 4], // Dirty negro
  "gwer": [5, 4], // White person (derogatory, from Wolof)
  "niakoué": [5, 4], // Very offensive slur for Vietnamese/Asian people
  "bridé": [5, 4], // Slit-eyed (racist slur for Asians)
  "bridée": [5, 4], // Fem slit-eyed
  "face de citron": [5, 4], // Lemon face (racist slur for Asians)
  "jaune": [5, 4], // Yellow (racist term for Asians)
  "chintok": [5, 4], // Variant of chinetoque
  "chinetoc": [5, 4], // Variant of chinetoque
  "ching chong": [3, 4], // Racist mock-Chinese
  "sale chinois": [5, 4], // Dirty Chinese
  "gitan": [5, 4], // Gypsy (derogatory)
  "gitane": [5, 4], // Fem gypsy (derogatory)
  "manouche": [5, 4], // Gypsy / Romani (can be derogatory)
  "romanichel": [5, 4], // Romani (derogatory)
  "romanichelle": [5, 4], // Fem Romani (derogatory)
  "voleur de poules": [5, 4], // Chicken thief (anti-Romani stereotype)
  "sale rom": [5, 4], // Dirty Roma
  "sale gitan": [5, 4], // Dirty gypsy
  "roumain de merde": [5, 5], // Shitty Romanian (xenophobic)
  "sale polak": [5, 4], // Dirty Polack
  "sale rital": [5, 4], // Dirty Italian
  "espingouin": [5, 4], // Offensive slur for Spanish people
  "espingoin": [5, 4], // Variant spelling
  "amerloque": [5, 4], // Derogatory for Americans
  "amerlock": [5, 4], // Variant of amerloque
  "rosbeef": [5, 4], // Roast beef (derogatory for British)
  "rosbif": [5, 4], // Variant spelling
  "boche": [5, 4], // Offensive slur for Germans
  "fridolin": [5, 4], // Offensive for Germans (old)
  "schleu": [5, 4], // Offensive for Germans
  "youtre": [5, 4], // Variant offensive term for Jewish people

  // ========================================
  // === Transphobic Slurs (Expanded) ======
  // ========================================
  "travesti de merde": [5, 5], // Shitty cross-dresser
  "sale travelo": [5, 4], // Dirty tranny
  "gros travelo": [1, 4], // Fat tranny
  "shemale": [5, 5], // Shemale (offensive English loan)
  "trans de merde": [5, 5], // Shitty trans (offensive)
  "homme-femme": [5, 4], // Man-woman (derogatory for trans)
  "femme-homme": [5, 4], // Woman-man (derogatory for trans)
  "transe": [3, 4], // Trans (derogatory, as slang)

  // ========================================
  // === Ableist Slurs (Expanded) ==========
  // ========================================
  "mongol de merde": [5, 5], // Shitty retard
  "sale mongol": [5, 4], // Dirty retard
  "gros mongol": [1, 4], // Fat retard
  "mongoloïde": [5, 4], // Mongoloid (very offensive)
  "demeuré": [5, 4], // Retarded / slow
  "demeurée": [5, 4], // Fem retarded
  "arriéré": [5, 4], // Backward / retarded
  "arriérée": [5, 4], // Fem backward
  "handicapé de merde": [5, 5], // Shitty disabled person (offensive)
  "infirme de merde": [5, 5], // Shitty cripple (offensive)
  "gogol": [5, 4], // Retard (French slang from Mongol)
  "gogole": [5, 4], // Fem retard
  "débile profond": [5, 4], // Profoundly retarded (very offensive)
  "attardé mental": [5, 4], // Mentally retarded
  "retardé": [5, 4], // Retarded (English loan, offensive)
  "autiste de merde": [5, 5], // Shitty autistic person (offensive)
  "spaz": [5, 4], // Spastic (English loan, offensive)
  "trisomique de merde": [5, 5], // Shitty person with Down syndrome (very offensive)
  "sale gogol": [5, 4], // Dirty retard

  // ========================================
  // === Internet Abbreviations (Expanded) =
  // ========================================
  "jtm pas": [2, 3], // Je t'aime pas (I don't love you, dismissive)
  "jm'en bats": [2, 3], // Je m'en bats (I don't care, vulgar)
  "jm'en fous": [3, 5], // Je m'en fous (I don't give a fuck)
  "jm'en branle": [2, 3], // Je m'en branle (I don't give a wank)
  "stfu": [3, 5], // English but used in French internet
  "mdp": [2, 3], // Mot de putain (variant, putain emphasis)
  "nkl": [2, 3], // Nikkel / no worries (but can be dismissive)
  "tmm": [3, 5], // Ta mère la merde (your mother the shit)
  "ntm sa mère": [2, 3], // Nique ta mère sa mère (compound)
  "fdpc": [2, 3], // Fils de pute connard
  "pgm": [2, 3], // Pro gamer move (sarcastic dismissal)
  "azy": [2, 3], // Allez / go on (dismissive/aggressive)
  "azzy": [2, 3], // Variant of azy
  "wllh": [2, 3], // Wallah abbreviated
  "sfll": [2, 3], // Starfoullah abbreviated
  "tgl": [2, 3], // Ta gueule (variant abbreviation)
  "ftg connard": [2, 3], // Ferme ta gueule connard
  "ntm fdp": [2, 3], // Nique ta mère fils de pute
  "ptdr ta mère": [2, 3], // Dying of laughter your mother (mocking)
  "lmao ta race": [2, 3], // Laughing at your race (offensive)

  // ========================================
  // === More Verlan (Expanded) ============
  // ========================================
  "teupu de merde": [5, 5], // Whore of shit (verlan)
  "ssalope": [3, 4], // Salope variant
  "deumer": [3, 4], // Merde backwards (verlan)
  "demer": [3, 4], // Short verlan of merde
  "leucu": [3, 4], // Cul backwards (ass, verlan)
  "gueudin": [3, 4], // Dingue backwards (crazy, verlan)
  "golmon": [3, 4], // Mongol backwards (retard, verlan)
  "keussa": [3, 4], // Sac backwards (verlan, dismissive)
  "rebou": [1, 3], // Bourré backwards (drunk, verlan)
  "teboi": [3, 4], // Boîte backwards (club, verlan)
  "genar": [3, 4], // Garnement backwards (brat, verlan)
  "bétar": [3, 4], // Bâtard backwards (verlan)
  "zemar": [3, 4], // Miser (verlan)
  "zicmu": [3, 4], // Musique backwards (verlan)
  "laissebé": [3, 4], // Laisse béton variant (let it go)
  "teucha": [4, 4], // Chatte backwards (pussy, verlan)
  "narvalo": [3, 4], // Crazy person (Romani-derived verlan)
  "foncedé": [3, 4], // Défoncé backwards (wasted, verlan)
  "tiéquar": [3, 4], // Quartier backwards (hood, verlan)
  "ziva": [3, 4], // Vas-y backwards (go on, aggressive)

  // ========================================
  // === More Sexual / Body Slang ==========
  // ========================================
  "burne": [4, 4], // Ball (testicle, vulgar)
  "burnes": [4, 4], // Balls (vulgar)
  "roupettes": [4, 4], // Balls (slang)
  "valseuses": [4, 4], // Balls (lit. waltzing ones)
  "bijoux de famille": [4, 4], // Family jewels (testicles)
  "service trois pièces": [4, 4], // Three-piece service (cock and balls)
  "braquemart": [4, 4], // Sword / dick (archaic vulgar)
  "biroute": [4, 4], // Dick (slang)
  "bitoune": [4, 4], // Dick (slang)
  "quéquettard": [4, 4], // Little dick man
  "engin": [4, 4], // Machine / dick (slang)
  "outil": [4, 4], // Tool / dick (slang)
  "manche": [4, 4], // Handle / dick (slang)
  "poireau": [4, 4], // Leek / dick (slang)
  "asperge": [4, 4], // Asparagus / dick (slang)
  "saucisse": [4, 4], // Sausage / dick (slang)
  "saucisson": [4, 4], // Big sausage / dick (slang)
  "sifflet": [4, 4], // Whistle / dick (slang)
  "fifille": [4, 4], // Pussy (childish/vulgar)
  "frifri": [4, 4], // Pussy (childish/vulgar)
  "touffe": [3, 4], // Bush / pubic hair
  "abricot": [4, 4], // Apricot / pussy (slang)
  "berlingot": [3, 4], // Candy / clitoris (slang)
  "bouton de rose": [3, 4], // Rosebud / clitoris (slang)
  "con comme la bite à jules": [1, 4], // Dumb as Jules' dick (compound)
  "couille de loup": [3, 4], // Wolf's ball (exclamation)
  "en avoir dans le froc": [3, 4], // To have something in the pants (be brave/scared)
  "se vider les couilles": [4, 4], // To empty one's balls
  "tirer son coup": [3, 4], // To get one's rocks off
  "tremper le biscuit": [3, 4], // To dip the biscuit (have sex)
  "mettre la saucisse dans le potage": [3, 4], // Put sausage in the soup (sex)
  "s'envoyer en l'air": [3, 4], // To send oneself in the air (have sex)
  "sauter": [3, 5], // To jump / to fuck
  "grimper": [3, 5], // To climb / to fuck
  "chevaucher": [3, 5], // To ride / to fuck
  "ken de ouf": [3, 5], // Crazy fuck (verlan compound)
  "se taper": [3, 5], // To do / to fuck
  "se farcir": [3, 5], // To stuff / to fuck
  "culbuter": [3, 5], // To topple / to fuck
  "ramoner": [3, 5], // To sweep the chimney / to fuck
  "défourrailler": [3, 5], // To unholster / to fuck hard
  "défoncer": [3, 5], // To smash in / to fuck hard
  "poutrer": [3, 5], // To beam / to fuck hard
  "pilonner": [3, 5], // To pound / to fuck hard
  "démonter": [3, 5], // To dismantle / to fuck hard
  "dérouiller": [3, 5], // To take a beating / to fuck hard
  "se faire défoncer": [3, 5], // To get smashed / to get fucked hard
  "se faire pilonner": [3, 4], // To get pounded
  "se faire démonter": [3, 5], // To get dismantled / to get fucked hard
  "se faire ramoner": [3, 5], // To get chimney swept / to get fucked
  "échangisme": [2, 3], // Swinging
  "échangiste": [2, 3], // Swinger
  "coquin": [1, 2], // Naughty / kinky
  "coquine": [1, 2], // Fem naughty / kinky
  "cul de sac à foutre": [3, 4], // Cum bag dead end (compound insult)
  "salope de merde": [3, 5], // Shitty slut
  "pute à nègre": [5, 4], // Negro's whore (extremely offensive)
  "pute à soldat": [5, 5], // Soldier's whore
  "pute de luxe": [5, 4], // Luxury whore
  "pute de rue": [5, 4], // Street whore
  "cougar de merde": [3, 5], // Shitty cougar

  // ========================================
  // === Religious Profanity (France) ======
  // ========================================
  "nom de dieu": [2, 3], // Name of God (profanity)
  "bon dieu": [2, 3], // Good God (profanity)
  "sacré nom de dieu de merde": [3, 5], // Holy name of God of shit
  "nom de dieu de putain": [5, 4], // Name of God of whore
  "jésus christ de merde": [3, 5], // Jesus Christ of shit
  "par le christ": [2, 3], // By Christ (profanity)
  "sacré christ": [2, 3], // Holy Christ
  "dieu de merde": [3, 5], // God of shit
  "sacré dieu": [2, 3], // Holy God
  "nom d'un chien": [2, 3], // Name of a dog (mild euphemism)
  "nom d'une pipe": [2, 3], // Name of a pipe (mild euphemism)
  "palsambleu": [2, 3], // By God's blood (archaic)
  "morbleu": [1, 2], // By God's death (archaic)
  "sacrebleu": [2, 3], // Sacred blue (archaic euphemism)
  "ventrebleu": [2, 3], // God's belly (archaic)
  "corbleu": [2, 3], // God's body (archaic)
  "jarnicoton": [2, 3], // Old profanity variant
  "par le sang dieu": [2, 3], // By God's blood

  // ========================================
  // === Threats & Violence ================
  // ========================================
  "je vais te tuer": [5, 5], // I'm going to kill you
  "je vais te défoncer": [5, 5], // I'm going to smash you
  "je vais te casser la gueule": [5, 5], // I'm going to break your face
  "je vais te péter la gueule": [5, 5], // I'm going to bust your face
  "je vais te niquer ta mère": [5, 5], // I'm going to fuck your mother
  "je vais t'éclater": [5, 5], // I'm going to destroy you
  "je vais t'exploser": [5, 5], // I'm going to explode you
  "je vais te crever": [5, 5], // I'm going to kill you (informal)
  "je vais te buter": [5, 5], // I'm going to kill you (slang)
  "je vais te fumer": [5, 5], // I'm going to smoke you (kill)
  "je vais te déchirer": [5, 5], // I'm going to tear you apart
  "je vais te démonter la gueule": [5, 5], // I'm going to dismantle your face
  "je vais te refaire le portrait": [5, 5], // I'm going to redo your portrait (beat up)
  "je vais t'arracher la tête": [5, 5], // I'm going to rip your head off
  "je vais te mettre une balle": [5, 5], // I'm going to put a bullet in you
  "tu vas morfler": [5, 5], // You're going to get it
  "tu vas prendre cher": [5, 5], // You're going to get it bad
  "tu vas déguster": [5, 5], // You're going to taste it (get beaten)
  "tu vas douiller": [5, 5], // You're going to suffer
  "je te défonce ta race": [5, 5], // I smash your race
  "casse-toi avant que je t'explose": [5, 5], // Piss off before I explode you
  "nique ta mère je vais te tuer": [5, 5], // Fuck your mother I'll kill you

  // ========================================
  // === Scatological (Expanded) ===========
  // ========================================
  "étron": [3, 4], // Turd
  "bouse": [3, 4], // Cow pat
  "bouse de vache": [3, 5], // Cow shit
  "crotte": [1, 4], // Poop (mild)
  "caca": [3, 4], // Poo (childish)
  "chiotte": [3, 4], // Toilet / crap
  "chiottes": [3, 4], // Toilets (vulgar)
  "dans les chiottes": [3, 5], // In the toilets (fucked)
  "aux chiottes": [3, 4], // To the toilets (dismissal)
  "chiure": [3, 5], // Fly shit / worthless thing
  "chiure de mouche": [3, 4], // Fly droppings / insignificant thing
  "pissat": [3, 4], // Piss (liquid)
  "pisseux": [3, 4], // Pissy / bed-wetter
  "pisseuse": [3, 4], // Fem pissy
  "pissotière": [3, 4], // Urinal (vulgar)
  "vessie": [3, 4], // Bladder (in vulgar context)
  "pet foireux": [3, 4], // Leaky fart
  "péteux de merde": [1, 4], // Shitty coward
  "chier des bulles": [3, 5], // To shit bubbles (to be terrified)
  "chier dans son froc": [3, 5], // To shit one's pants
  "couler un bronze": [3, 4], // To lay a turd (lit. cast a bronze)
  "poser une pêche": [3, 5], // To drop a peach (take a shit)
  "tartine de merde": [3, 5], // Slice of shit
  "mouler un cake": [3, 5], // To mold a cake (take a shit)
  "gerber": [3, 4], // To puke / disgusting
  "dégueuler": [3, 4], // To puke
  "dégueulasser": [3, 4], // To make disgusting
  "vomi": [3, 4], // Vomit
  "vomir": [3, 4], // To vomit
  "gerbe de merde": [3, 5], // Shit puke

  // ========================================
  // === Dismissive / Condescending ========
  // ========================================
  "ferme-la": [3, 4], // Shut it
  "la ferme": [3, 4], // Shut up
  "boucle-la": [3, 4], // Shut it (lit. buckle it)
  "écrase": [3, 4], // Shut up (lit. crush)
  "ras le bol": [3, 4], // Fed up
  "ras le cul": [3, 4], // Fed up (vulgar, lit. ass level)
  "j'en ai marre": [3, 4], // I'm fed up
  "j'en ai ma claque": [3, 4], // I've had enough
  "tu me saoules": [3, 4], // You're boring/annoying me
  "lâche-moi la grappe": [3, 4], // Let go of my bunch (leave me alone, vulgar)
  "lâche-moi les baskets": [3, 4], // Let go of my sneakers (leave me alone)
  "fous-moi la paix": [3, 5], // Leave me the fuck alone
  "fiche-moi la paix": [3, 4], // Leave me alone
  "va voir ailleurs si j'y suis": [3, 4], // Go see elsewhere if I'm there (get lost)
  "tu me casses les pieds": [3, 4], // You break my feet (annoy me)
  "tu me gaves": [3, 4], // You force-feed me (annoy me)
  "tu me prends la tête": [3, 4], // You take my head (annoy me)
  "casse les couilles": [4, 4], // Break the balls (annoying)
  "pète les couilles": [4, 4], // Burst the balls (annoying)
  "tu es nul à chier": [3, 5], // You're shit useless
  "tu es con comme un manche": [1, 4], // You're dumb as a handle
  "tu as la capacité d'une huître": [3, 4], // You have the capacity of an oyster
  "tu es aussi utile qu'un cendrier sur une moto": [3, 4], // You're as useful as an ashtray on a motorcycle

  // ========================================
  // === Misc Vulgar & Slang ===============
  // ========================================
  "salaud de merde": [3, 4], // Shitty bastard
  "enfoiré de merde": [3, 5], // Shitty scumbag
  "fumier de la pire espèce": [3, 4], // Manure of the worst kind
  "pourriture ambulante": [3, 4], // Walking rot
  "déchet de la société": [3, 4], // Waste of society
  "raté": [3, 4], // Failure
  "ratée": [3, 4], // Fem failure
  "looseur": [1, 4], // Loser (French spelling of English)
  "looseuse": [1, 4], // Fem loser
  "looser": [1, 4], // Loser (English spelling used in French)
  "naze": [3, 5], // Useless / broken / shitty
  "nazes": [3, 4], // Plural useless
  "niquer la vie": [3, 5], // To fuck up life
  "balek": [3, 4], // I don't care (from Arabic, vulgar)
  "wallak": [3, 4], // Variant of balek
  "on s'en bat les couilles": [4, 4], // We beat our balls with it (don't care)
  "osef de ta vie": [3, 5], // We don't give a fuck about your life
  "ta vie c'est de la merde": [3, 5], // Your life is shit
  "ta vie de merde": [3, 5], // Your shit life
  "va te faire voir chez les grecs": [3, 5], // Go get seen at the Greeks (fuck off)
  "aller se faire cuire un oeuf": [3, 4], // Go cook an egg (get lost)
  "tu peux te brosser": [3, 4], // You can brush yourself (dream on)
  "dans ton cul": [3, 4], // In your ass
  "je te le mets": [3, 4], // I'll put it in you
  "je te la mets": [3, 4], // I'll put it in you (fem object)
  "profonde": [3, 4], // Deep (sexual context)
  "à sec": [3, 4], // Dry (sexually or violently)
  "bourrer": [3, 5], // To stuff / to fuck
  "se bourrer la gueule": [3, 5], // To get shitfaced
  "se déchirer la gueule": [3, 4], // To get wasted
  "se mettre une mine": [1, 3], // To get obliterated (drunk)
  "se prendre une branlée": [3, 4], // To get a beating / thrashing
  "branlée": [3, 4], // Beating / thrashing
  "raclée": [3, 4], // Beating / spanking
  "rouste": [3, 4], // Beating / spanking
  "peignée": [3, 4], // Beating (old slang)
  "trempe": [3, 4], // Soaking / beating
  "tannée": [3, 4], // Beating (old slang)
  "dérouillée": [3, 4], // Beating (slang)
  "biture": [3, 4], // Drinking binge
  "cuite": [1, 3], // Getting drunk
  "se cuiter": [1, 3], // To get drunk
  "se torcher": [3, 4], // To get wasted
  "torché": [3, 4], // Wasted / wiped
  "pété": [3, 4], // Wasted / broken / farted
  "pétée": [3, 4], // Fem wasted
  "défoncé": [3, 4], // Wasted / stoned
  "défoncée": [3, 4], // Fem wasted
  "arraché": [3, 4], // Wasted (very)
  "arrachée": [3, 4], // Fem wasted (very)
  "niqué": [3, 5], // Fucked / broken
  "niquée": [3, 5], // Fem fucked / broken
  "baisé de merde": [3, 5], // Shit-fucked
  "foutu de merde": [3, 5], // Shit-screwed
  "pute borgne": [5, 4], // One-eyed whore (compound insult)
  "face de rat": [3, 4], // Rat face
  "face de pet": [3, 4], // Fart face
  "gueule de raie": [3, 4], // Crack face
  "tronche de cake": [1, 4], // Cake face / ugly mug
  "tronche de cul": [3, 4], // Ass face
  "tronche de merde": [3, 5], // Shit face
  "sale tronche": [3, 4], // Dirty face
  "sale face": [3, 4], // Dirty face
  "sale gueule de con": [1, 4], // Dirty idiot face
  "pauvre type": [3, 4], // Pathetic guy
  "pauvre fille": [3, 4], // Pathetic girl
  "pauvre merde": [3, 5], // Pathetic shit
  "pauvre tache": [3, 4], // Pathetic stain
  "tache": [1, 4], // Stain / loser
  "tocsin": [3, 4], // Alarm bell / annoying person
  "relou de première": [3, 4], // First-class annoying
  "je t'encule profond": [3, 5], // I fuck you deep in the ass
  "nique tout le monde": [3, 5], // Fuck everyone
  "nique la vie": [3, 5], // Fuck life
  "nique le système": [3, 5], // Fuck the system
  "bande de bâtards": [3, 4], // Bunch of bastards
  "bande de fils de pute": [3, 4], // Bunch of sons of bitches
  "bande de connards": [3, 4], // Bunch of assholes
  "bande d'enculés": [3, 5], // Bunch of ass-fuckers
  "bande de merdes": [3, 5], // Bunch of shits
  "tous des cons": [1, 4], // All idiots
  "tous des enculés": [3, 5], // All ass-fuckers
  "tous des putes": [5, 4], // All whores
  "rien à battre": [3, 4], // Don't give a damn
  "rien à carrer": [3, 5], // Don't give a fuck (verlan-ish)
  "on s'en tape": [3, 4], // We don't care (slang)
  "on s'en branle": [3, 4], // We don't give a wank
  "on s'en carre": [3, 5], // We don't give a fuck
  "grosse merde": [3, 5], // Big shit
  "petit merdeux": [3, 5], // Little shithead
  "petite merdeuse": [3, 5], // Fem little shithead
  "enflure": [3, 4], // Swelling / scumbag
  "sac à merde ambulant": [3, 5], // Walking shit bag
  "triple connard": [3, 4], // Triple asshole
  "triple enculé": [3, 5], // Triple ass-fucker
  "ultra-con": [1, 4], // Ultra-idiot
  "méga-con": [1, 4], // Mega-idiot
  "super connard": [3, 4], // Super asshole
  "sale enfoiré de merde": [3, 5], // Dirty shitty scumbag
  "putain d'enfoiré": [3, 5], // Fucking scumbag
  "putain d'enculé": [3, 5], // Fucking ass-fucker
  "putain de fils de pute": [3, 5], // Fucking son of a bitch
  "putain de bâtard": [3, 4], // Fucking bastard
  "putain de merde de sa race": [3, 5], // Fucking shit of his race
  "bordel de putain": [5, 4], // Brothel of whore
  "quel enculé": [3, 5], // What an ass-fucker
  "quelle pute": [5, 4], // What a whore
  "quel bâtard": [3, 4], // What a bastard
  "quel fils de pute": [3, 4], // What a son of a bitch
  "espèce d'ordure": [3, 4], // You piece of trash
  "espèce de charogne": [3, 4], // You carrion
  "espèce de vermine": [3, 4], // You vermin
  "espèce de cancrelat": [4, 4], // You cockroach
  "espèce de larve": [3, 4], // You larva
  "espèce de sous-merde": [3, 5], // You sub-shit
  "vermine de merde": [3, 5], // Shitty vermin
  "vermine": [3, 4], // Vermin
  "ramassis de merde": [3, 5], // Heap of shit
  "amas de merde": [3, 5], // Mass of shit
  "je te crache dessus": [3, 4], // I spit on you
  "je te chie dans la bouche": [3, 5], // I shit in your mouth

  // ========================================
  // === Compound Insults & Combinations ===
  // ========================================
  "sale putain": [5, 4], // Dirty whore
  "sale enfoiré": [3, 4], // Dirty bastard
  "sale chienne": [1, 4], // Dirty bitch (f.)
  "sale type": [1, 4], // Dirty dude
  "sale porc": [1, 4], // Dirty pig
  "sale pouffiasse": [1, 4], // Dirty slut
  "sale clochard": [1, 4], // Dirty bum
  "sale ordure": [1, 4], // Dirty filth
  "sale vermine": [1, 4], // Dirty vermin
  "sale enflure": [1, 4], // Dirty swelling (insult)
  "sale raclure": [1, 4], // Dirty scraping
  "sale merdeux": [3, 5], // Dirty shitty (person)
  "petit connard": [3, 4], // Little bastard
  "petite pute": [5, 4], // Little whore
  "petit enculé": [3, 5], // Little ass-fucked
  "gros connard": [3, 4], // Big bastard
  "grosse connasse": [1, 4], // Big bitch
  "gros enculé": [3, 5], // Big ass-fucked
  "gros bâtard": [3, 4], // Big bastard
  "gros tas de merde": [3, 5], // Big pile of shit
  "grosse baleine": [1, 4], // Big whale
  "gros plein de merde": [3, 5], // Big full of shit
  "gros naze": [1, 4], // Big loser
  "gros bouffon": [1, 4], // Big buffoon
  "gros débile": [1, 4], // Big moron
  "putain de ta race": [5, 4], // Whore of your race
  "bordel de cul": [3, 4], // Brothel of ass
  "bordel à cul": [3, 4], // Ass brothel
  "nom de dieu de merde": [3, 5], // Name of God of shit
  "nom de dieu de bordel": [1, 4], // Name of God of brothel
  "foutu connard": [3, 4], // Damned bastard
  "foutu enculé": [3, 5], // Damned ass-fucked
  "foutu merdeux": [3, 5], // Damned shitty one
  "foutue salope": [1, 4], // Damned slut
  "foutue pute": [5, 4], // Damned whore
  "sacrée merde": [3, 5], // Sacred shit (damn)
  "sacré connard": [3, 4], // Sacred bastard
  "sacrée connasse": [1, 4], // Sacred bitch
  "sacrée putain": [5, 4], // Sacred whore
  "satanée merde": [3, 5], // Satanic shit
  "fichu connard": [3, 4], // Damned bastard
  "fichue salope": [1, 4], // Damned slut
  "p'tit con": [1, 4], // Lil idiot
  "p'tite pute": [5, 4], // Lil whore
  "p'tit enculé": [3, 5], // Lil ass-fucked
  "pauvre connard": [3, 4], // Poor bastard
  "pauvre connasse": [1, 4], // Poor bitch
  "pauvre mec": [1, 4], // Poor dude (pathetic)
  "pauvre naze": [1, 4], // Poor loser
  "triple con": [1, 4], // Triple idiot
  "double buse": [1, 4], // Double buzzard (idiot)
  "espèce d'enculé": [3, 5], // Species of ass-fucked
  "espèce de connasse": [1, 4], // Species of bitch
  "espèce de pute": [5, 4], // Species of whore
  "espèce d'abruti": [1, 4], // Species of dimwit
  "espèce de crétin": [1, 4], // Species of cretin
  "espèce de débile": [1, 4], // Species of moron
  "espèce d'imbécile": [1, 4], // Species of imbecile
  "espèce d'idiot": [1, 4], // Species of idiot
  "enculé de ta mère": [3, 5], // Ass-fucked of your mother
  "nique ta grand-mère": [3, 5], // Fuck your grandmother
  "nique ta sœur": [3, 5], // Fuck your sister
  "va te branler": [4, 4], // Go jerk off
  "va sucer": [1, 4], // Go suck
  "va bouffer de la merde": [3, 5], // Go eat shit
  "je te crache à la gueule": [1, 4], // I spit in your face
  "je vais te niquer": [3, 5], // I'll fuck you
  "je vais te démonter": [1, 4], // I'll dismantle you
  "je vais te baiser": [3, 5], // I'll fuck you
  "ta gueule": [1, 4], // Shut your face
  "ferme ton clapet": [1, 4], // Shut your flap
  "ta bouche": [1, 4], // Your mouth (shut up)

  // ========================================
  // === Quebec French =====================
  // ========================================
  "criss": [3, 4], // Christ short
  "tabarnac": [3, 4], // Tabernacle variant
  "taboire": [3, 4], // Tabernacle variant
  "estie": [3, 4], // Host variant
  "esti": [3, 4], // Host variant
  "hostie": [3, 4], // Host formal
  "cibolac": [3, 4], // Ciborium variant
  "sacre": [3, 4], // Sacred (swear base)
  "batêche": [3, 4], // Baptism variant
  "mauditement": [3, 4], // Damnedly (Quebec)
  "vierge": [3, 4], // Virgin swear
  "saint-ciboire": [3, 4], // Saint ciborium
  "saint-sacrament": [3, 4], // Saint sacrament
  "câlice de crisse": [3, 4], // Chalice of Christ
  "esti de câlice": [3, 4], // Host of chalice
  "câlice de merde": [3, 5], // Chalice of shit
  "tabarnak de merde": [3, 5], // Tabernacle of shit
  "ostie de merde": [3, 5], // Host of shit
  "décâlissé": [3, 4], // Chaliced-out (destroyed)
  "plottes": [5, 5], // Cunts (Quebec)
  "se crosser": [4, 4], // To jerk off (Quebec)
  "chieuse": [3, 5], // Shitter (f.) (Quebec)
  "habitant": [3, 4], // Inhabitant / hick (Quebec)
  "taouin": [1, 4], // Idiot (Quebec)
  "tarla": [1, 4], // Idiot (Quebec)
  "tarlais": [1, 4], // Idiot variant (Quebec)
  "sans-dessein": [3, 4], // Without purpose (useless, Quebec)
  "guidounne": [3, 4], // Slut variant (Quebec)
  "pitoune": [3, 4], // Bimbo (Quebec)
  "mange de la marde": [3, 5], // Eat shit (Quebec)
  "baveux": [3, 4], // Drooler / arrogant (Quebec)
  "baveuse": [3, 4], // Drooler (f.) (Quebec)
  "frais chié": [3, 4], // Freshly shat (arrogant, Quebec)
  "fraîche chiée": [3, 4], // Freshly shat (f.) (Quebec)
  "enfant de nanane": [3, 4], // Child of candy (Quebec euphem.)
  "mon ostie": [5, 5], // My host (Quebec threat)
  "mon câlice": [5, 5], // My chalice (Quebec threat)
  "mon tabarnak": [5, 5], // My tabernacle (Quebec threat)
  "mon crisse": [5, 5], // My Christ (Quebec threat)
  "toé mon ostie": [5, 5], // You my host (Quebec threat)
  "mange d'la marde": [3, 5], // Eat shit (Quebec colloquial)
  "décâlisse": [3, 5], // Get the fuck out (Quebec)
  "décrisse": [3, 5], // Get the fuck out (Quebec)

  // ========================================
  // === Belgian French ====================
  // ========================================
  "une fois connard": [3, 4], // Once bastard (Belgian emphasis)
  "snotneus": [3, 4], // Snot nose (Belgian)
  "klootzak": [3, 4], // Ball sack (Belgian, from Dutch)
  "zot": [3, 4], // Crazy (Belgian)
  "zotteke": [3, 4], // Little crazy (Belgian)
  "stront": [3, 5], // Shit (Belgian, from Dutch)
  "smeerkaas": [3, 4], // Spread cheese (annoying, Belgian)
  "stommerik": [1, 4], // Stupid one (Belgian)
  "uilskuiken": [1, 4], // Owl chick / fool (Belgian)

  // ========================================
  // === Swiss French ======================
  // ========================================
  "banane": [3, 4], // Banana (idiot, Swiss)
  "couillon de merde": [1, 4], // Shitty fool (Swiss)
  "sapristi": [2, 3], // Sacredness (Swiss mild swear)
  "vingt dieux": [3, 4], // Twenty gods (Swiss swear)
  "cré nom de Dieu": [3, 4], // Created name of God (Swiss)
  "bon sang de bois": [3, 4], // Good blood of wood (Swiss)

  // ========================================
  // === African French ====================
  // ========================================
  "bordel de Dieu": [3, 4], // Brothel of God (West African)
  "gueule de singe": [3, 4], // Monkey face (offensive)
  "bounty": [3, 4], // Bounty (Black outside white inside)
  "blédard": [3, 4], // Person from the bled (countryside, derog.)
  "gaouri": [3, 4], // Non-Muslim (African French derog.)

  // ========================================
  // === Antillean/Caribbean French ========
  // ========================================
  "coucoune": [4, 4], // Vagina (Antillean)
  "couloune": [4, 4], // Vagina variant (Antillean)
  "makrel": [3, 4], // Gossiper / slut (Antillean)
  "vyé manman": [1, 4], // Ugly/bad mama (Antillean insult)
  "manman ou": [3, 4], // Your mother (Antillean insult)
  "lanmè manman ou": [3, 4], // Your mother's sea (Antillean)
  "kaka": [3, 5], // Shit (Antillean Creole)
  "malpropre": [3, 4], // Dirty person (Antillean)
  "fènéyan": [3, 4], // Lazy person (Antillean)
  "vakabò": [3, 4], // Vagabond (Antillean Creole)

  // ========================================
  // === Reunion French ====================
  // ========================================
  "bordel de la mare": [3, 4], // Brothel of the pond (Reunion)
  "casse couille": [3, 4], // Ball breaker (Reunion)
  "couilles molles": [4, 4], // Soft balls (Reunion wimp)
  "tête de nœud": [4, 4], // Knot head / dick head (Reunion)

  // ========================================
  // === Sexual Terms & Compounds ==========
  // ========================================
  "faire une pipe": [4, 5], // To give a blowjob
  "suceur": [4, 4], // Sucker (m.)
  "suceuse": [4, 4], // Sucker (f.)
  "pompeuse": [4, 4], // Pumper (f.)
  "pompier": [4, 5], // Fireman / blowjob
  "enculer": [3, 4], // To ass-fuck
  "enculeur": [4, 5], // Ass-fucker
  "partouzeur": [4, 4], // Orgy participant (m.)
  "partouzeuse": [4, 4], // Orgy participant (f.)
  "triolisme": [4, 4], // Threesome
  "bondage": [3, 4], // Bondage
  "fétichisme": [4, 4], // Fetishism
  "voyeurisme": [4, 4], // Voyeurism
  "perversion": [4, 4], // Perversion
  "obsédé sexuel": [4, 4], // Sexual obsessive
  "escort": [3, 4], // Escort
  "call-girl": [4, 4], // Call girl
  "gigolo": [4, 4], // Gigolo
  "salaude": [3, 4], // Bastard (f.)
  "dépravé": [4, 4], // Depraved
  "dépravée": [4, 4], // Depraved (f.)
  "lascif": [4, 4], // Lascivious
  "lascive": [4, 4], // Lascivious (f.)
  "libidineuse": [4, 4], // Libidinous (f.)
  "cochonner": [4, 4], // To pig around
  "porcherie": [4, 4], // Pigsty
  "trousseur de jupons": [4, 4], // Skirt chaser
  "coureur de jupons": [4, 4], // Skirt runner (womanizer)
  "coureuse": [4, 4], // Easy woman
  "fion": [4, 4], // Asshole
  "rondelle": [4, 4], // Ring / asshole
  "troufion": [4, 4], // Asshole / private (military)
  "raie du cul": [4, 4], // Ass crack
  "verge": [4, 4], // Penis (formal)

  // ========================================
  // === Scatological Terms ================
  // ========================================
  "crotte de nez": [3, 4], // Booger
  "colombin": [3, 4], // Turd
  "fiente": [3, 4], // Droppings
  "pisseur": [3, 4], // Pisser (m.)
  "pisse": [3, 4], // Piss
  "péter": [3, 4], // To fart
  "prout": [3, 4], // Toot
  "prouter": [3, 4], // To toot
  "vesser": [3, 4], // To fart silently
  "vesse": [3, 4], // Silent fart
  "morve": [3, 4], // Snot
  "glaviot": [3, 4], // Loogie
  "glavioter": [3, 4], // To spit loogies
  "molard": [3, 4], // Loogie
  "gerbe": [3, 4], // Puke
  "vomissure": [3, 4], // Vomit
  "dégobiller": [3, 4], // To puke

  // ========================================
  // === Intelligence Insults ==============
  // ========================================
  "âne": [1, 4], // Donkey (stupid)
  "ballot": [1, 4], // Bale (fool)
  "benêt": [1, 4], // Simpleton
  "bêta": [1, 4], // Fool
  "bêtasse": [1, 4], // Stupid (f.)
  "bête": [1, 4], // Stupid / beast
  "bête à manger du foin": [1, 4], // Stupid enough to eat hay
  "bourrique": [1, 4], // Donkey (stubborn/stupid)
  "buse": [1, 4], // Buzzard (stupid)
  "cloche": [1, 4], // Bell (stupid person)
  "couillonne": [1, 4], // Fool (f.)
  "courge": [1, 4], // Squash (stupid)
  "cruche": [1, 4], // Jug (stupid)
  "dadais": [1, 4], // Gawk
  "dinde": [1, 4], // Turkey (stupid woman)
  "dindon": [1, 4], // Turkey (stupid man)
  "empoté": [1, 4], // Clumsy
  "empotée": [1, 4], // Clumsy (f.)
  "flemmard": [1, 4], // Lazybones
  "flemmarde": [1, 4], // Lazybones (f.)
  "ganache": [1, 4], // Jaw / fool
  "glandeur": [1, 4], // Slacker
  "glandeuse": [1, 4], // Slacker (f.)
  "glander": [1, 4], // To slack off
  "gogo": [3, 4], // Gullible person
  "gourde": [1, 4], // Gourd (stupid woman)
  "imbécile heureux": [1, 4], // Happy imbecile
  "inculte": [1, 4], // Uncultured
  "jobard": [1, 4], // Gullible fool
  "loser": [1, 3], // Loser
  "mollasson": [1, 4], // Sluggish
  "mollassonne": [1, 4], // Sluggish (f.)
  "navet": [1, 4], // Turnip (flop)
  "neuneu": [1, 4], // Dummy
  "nigaud": [1, 4], // Simpleton
  "nigaude": [1, 4], // Simpleton (f.)
  "noix": [1, 4], // Nut (stupid)
  "nul à chier": [3, 5], // Shit useless
  "nullard": [1, 4], // Loser
  "nullarde": [1, 4], // Loser (f.)
  "patate": [1, 4], // Potato (stupid)
  "péquenaud": [1, 4], // Hick
  "péquenaude": [1, 4], // Hick (f.)
  "pignouf": [1, 4], // Boor
  "pigeon": [1, 4], // Pigeon (sucker)
  "poire": [1, 4], // Pear (sucker)
  "pomme": [1, 4], // Apple (sucker)
  "sot": [1, 4], // Fool
  "sotte": [1, 4], // Fool (f.)
  "tanche": [1, 4], // Tench (fish / stupid)
  "tête de linotte": [1, 4], // Linnet head (scatterbrain)
  "tête de mule": [1, 4], // Mule head (stubborn)
  "tête de pioche": [1, 4], // Pickaxe head (stubborn)
  "truffe": [1, 4], // Truffle (stupid)
  "zigoto": [1, 4], // Weirdo

  // ========================================
  // === Appearance Insults ================
  // ========================================
  "boudine": [1, 4], // Stuffed sausage (fat, f.)
  "boudinée": [1, 4], // Stuffed into clothes
  "cageot": [1, 4], // Crate (ugly)
  "baleine": [1, 4], // Whale (fat)
  "hippopotame": [1, 4], // Hippopotamus (fat)
  "tonneau": [1, 4], // Barrel (fat)
  "tas de graisse": [1, 4], // Pile of grease
  "squelette": [1, 4], // Skeleton (too thin)
  "planche à pain": [1, 4], // Breadboard (flat-chested)
  "tête de cul": [3, 4], // Ass head
  "tête à claques": [1, 4], // Face begging for slaps
  "gueule cassée": [1, 4], // Broken face
  "nain de jardin": [1, 4], // Garden gnome

  // ========================================
  // === Behavioral Insults ================
  // ========================================
  "arriviste": [1, 4], // Social climber
  "cafardeur": [1, 4], // Snitch
  "cafardeuse": [1, 4], // Snitch (f.)
  "cafteur": [1, 4], // Snitch
  "cafteuse": [1, 4], // Snitch (f.)
  "commère": [1, 4], // Gossip
  "dégonflé": [1, 4], // Deflated (coward)
  "dégonflée": [1, 4], // Deflated (f.)
  "enquiquineur": [1, 4], // Annoying person (m.)
  "enquiquineuse": [1, 4], // Annoying person (f.)
  "escroc": [1, 4], // Crook
  "fainéant": [1, 4], // Lazy
  "fainéante": [1, 4], // Lazy (f.)
  "faux-jeton": [1, 4], // False token (hypocrite)
  "fouille-merde": [3, 5], // Shit digger (gossip)
  "fouteur de merde": [3, 5], // Shit stirrer
  "fouteuse de merde": [3, 5], // Shit stirrer (f.)
  "froussard": [1, 4], // Coward
  "froussarde": [1, 4], // Coward (f.)
  "geignard": [1, 4], // Whiner
  "geignarde": [1, 4], // Whiner (f.)
  "grigou": [1, 4], // Miser
  "grognon": [1, 4], // Grumbler
  "grognonne": [1, 4], // Grumbler (f.)
  "magouilleur": [1, 4], // Schemer
  "magouilleuse": [1, 4], // Schemer (f.)
  "manipulateur": [1, 4], // Manipulator
  "manipulatrice": [1, 4], // Manipulator (f.)
  "menteur": [1, 4], // Liar
  "menteuse": [1, 4], // Liar (f.)
  "parasite": [1, 4], // Parasite
  "pique-assiette": [1, 4], // Plate-pricker (freeloader)
  "pleurnichard": [1, 4], // Crybaby (m.)
  "pleurnicharde": [1, 4], // Crybaby (f.)
  "profiteur": [1, 4], // Profiteer
  "profiteuse": [1, 4], // Profiteer (f.)
  "radin": [1, 4], // Cheapskate
  "radine": [1, 4], // Cheapskate (f.)
  "trouillarde": [1, 4], // Coward (f.)
  "vendu": [1, 4], // Sold out (traitor)
  "voleur": [1, 4], // Thief
  "voleuse": [1, 4], // Thief (f.)

  // ========================================
  // === Slurs (Ethnic/Religious/LGBTQ) ====
  // ========================================
  "arabe de merde": [5, 5], // Shitty Arab
  "beurette": [5, 4], // Arab girl (can be derog.)
  "mongole": [5, 4], // Mongoloid (f.)
  "trisomique": [5, 4], // Down syndrome (as insult)
  "autiste": [5, 4], // Autistic (as insult)
  "péquenot": [5, 4], // Peasant (derog.)
  "bouseux": [5, 4], // Cow-pat covered (hick)
  "bouseuse": [5, 4], // Cow-pat covered (f.)
  "cul-terreux": [5, 4], // Muddy-assed (farmer)
  "prolo": [5, 4], // Prole
  "babtou": [5, 4], // White person (verlan)
  "babtou fragile": [5, 4], // Fragile white person
  "franchouillard": [5, 4], // French (derog.)
  "franchouillarde": [5, 4], // French (f. derog.)
  "facho": [5, 5], // Fascist
  "gauchiasse": [5, 4], // Leftist (very derog.)

  // ========================================
  // === Evasion Spellings =================
  // ========================================
  "p*tain": [3, 5], // Putain with *
  "c*nnard": [3, 5], // Connard with *
  "c*nnasse": [3, 5], // Connasse with *
  "enc*lé": [3, 5], // Enculé with *
  "encu1é": [3, 5], // Enculé with 1
  "s4lope": [3, 5], // Salope with 4
  "b@iser": [3, 5], // Baiser with @
  "b*iser": [3, 5], // Baiser with *
  "p*te": [3, 5], // Pute with *
  "ntr": [3, 5], // Nique ta race abbreviation
  "p é d é": [3, 5], // Pédé spaced
  "m.e.r.d.e": [3, 5], // Merde dotted
  "c o n n a r d": [3, 5], // Connard spaced
  "s a l o p e": [3, 5], // Salope spaced
  "n i q u e": [3, 5], // Nique spaced
  "p u t a i n": [3, 5], // Putain spaced
  "e n c u l é": [3, 5], // Enculé spaced

  // ========================================
  // === Internet Slang & Gaming ===========
  // ========================================
  "boulet": [1, 4], // Cannonball (burden/idiot)
  "enfoirée": [3, 4], // Bastard (f.)
  "fragile": [2, 3], // Fragile (wimp)
  "mytho": [2, 3], // Liar (mythomaniac)
  "seum": [2, 3], // Anger/frustration (Arabic origin)
  "teubé": [1, 4], // Bête (verlan, stupid)

  // ========================================
  // === Verb Conjugations =================
  // ========================================
  // --- niquer (to fuck) ---
  "niques": [3, 5], // You fuck
  "niquent": [3, 5], // They fuck
  "niquons": [3, 5], // We fuck
  "niquais": [3, 5], // I was fucking
  "niquait": [3, 5], // He/she was fucking
  "niquerai": [3, 5], // I will fuck
  "niqueras": [3, 5], // You will fuck
  "niquerait": [3, 5], // Would fuck
  // --- baiser (to fuck) ---
  "baises": [3, 5], // You fuck
  "baisée": [3, 5], // Fucked (f.)
  "baisent": [3, 5], // They fuck
  "baisons": [3, 5], // We fuck
  "baisais": [3, 5], // I was fucking
  "baisait": [3, 5], // He/she was fucking
  "baiserai": [3, 5], // I will fuck
  // --- enculer (to ass-fuck) ---
  "encule": [3, 5], // Ass-fuck (present)
  "encules": [3, 5], // You ass-fuck
  "enculés": [3, 5], // Ass-fucked (pl.)
  "enculées": [3, 5], // Ass-fucked (f. pl.)
  "enculant": [3, 5], // Ass-fucking
  "enculais": [3, 5], // Was ass-fucking
  // --- emmerder (to shit-bother) ---
  "emmerde": [3, 5], // Shit-bother
  "emmerdes": [3, 5], // You shit-bother
  "emmerdé": [3, 5], // Shit-bothered
  "emmerdée": [3, 5], // Shit-bothered (f.)
  // --- branler (to jerk off) ---
  "branle": [4, 4], // Jerk off
  "branles": [4, 4], // You jerk off
  "branlé": [3, 4], // Jerked off
  // --- chier (to shit) ---
  "chie": [3, 5], // Shit (present)
  "chies": [3, 5], // You shit
  "chié": [3, 4], // Shat
  "chiée": [3, 4], // Shat (f.) / lots of
  "chions": [3, 5], // We shit
  // --- foutre (to fuck/put) ---
  "fous": [3, 5], // Fuck/put (present)
  "fout": [3, 5], // He/she fucks
  "foutent": [3, 5], // They fuck
  "foutais": [3, 5], // Was fucking
  "foutaise": [3, 5], // Bullshit
  "foutaises": [3, 5], // Bullshit (pl.)
  // --- dégueulasser (to make disgusting) ---
  "dégueulasses": [3, 4], // Disgusting (pl.)
  "dégueulassé": [3, 4], // Made disgusting

  // ========================================
  // === Diminutive & Augmentative =========
  // ========================================
  "putassier": [3, 4], // Whorish (m.)
  "putassière": [3, 4], // Whorish (f.)
  "saloperies": [3, 4], // Filths / trash (pl.)
  "merdiques": [3, 5], // Shitty (pl.)
  "merdasse": [3, 5], // Big shit
  "connardise": [3, 4], // Bastardry
  "conneries": [1, 4], // Stupidities
  "foirade": [3, 5], // Shit-out (failure)

  // ========================================
  // === Threats & Violent Language =========
  // ========================================
  "je vais t'égorger": [5, 5], // I'll slit your throat
  "je vais te planter": [5, 5], // I'll stab you
  "je vais te latter": [5, 5], // I'll kick you
  "je vais te défoncer la gueule": [5, 5], // I'll smash your face
  "je vais te fracasser": [5, 5], // I'll shatter you
  "je vais te démolir": [5, 5], // I'll demolish you
  "je vais te massacrer": [5, 5], // I'll massacre you
  "je vais te casser les dents": [5, 5], // I'll break your teeth
  "je vais te péter la tronche": [5, 5], // I'll smash your face
  "dégage": [5, 5], // Get out
  "dégage connard": [3, 4], // Get out bastard
  "crève la bouche ouverte": [5, 5], // Die with mouth open
  "meurs": [5, 5], // Die (imperative)
  "je t'éclate": [5, 5], // I'll burst you
  "je te défonce": [5, 5], // I'll smash you
  "on va te niquer": [5, 5], // We'll fuck you up
  "on va te défoncer": [5, 5], // We'll smash you

  // ========================================
  // === Additional Insults & Phrases ======
  // ========================================
  "avorton": [1, 4], // Runt
  "brute": [1, 4], // Brute
  "déchet": [1, 4], // Waste
  "goujat": [1, 4], // Boor
  "gredine": [1, 4], // Scoundrel (f.)
  "gueux": [1, 4], // Beggar / wretch
  "gueuse": [1, 4], // Beggar (f.) / hussy
  "halunke": [3, 4], // Scoundrel
  "malfrat": [1, 4], // Criminal
  "malotru": [1, 4], // Boor
  "malotrue": [1, 4], // Boor (f.)
  "minus": [1, 4], // Runt
  "misérable": [1, 4], // Miserable wretch
  "rebut": [1, 4], // Reject / waste
  "rebut de la société": [1, 4], // Reject of society
  "résidu de capote": [1, 4], // Condom residue
  "résidu de fausse couche": [1, 4], // Miscarriage residue
  "serpent": [1, 4], // Snake
  "traître": [1, 4], // Traitor
  "traîtresse": [1, 4], // Traitor (f.)
  "truand": [1, 4], // Crook
  "truande": [1, 4], // Crook (f.)
  "vautour": [1, 4], // Vulture
  "vipère": [1, 4], // Viper

  // ========================================
  // === Verlan (Reversed Slang) ===========
  // ========================================
  "reuf": [3, 4], // Frère (verlan, brother)
  "reum": [3, 4], // Mère (verlan, mother)
  "reup": [1, 4], // Père (verlan, father)
  "téci": [3, 4], // Cité (verlan, projects)
  "zyva": [3, 4], // Vas-y (verlan, go on)
  "belek": [3, 4], // Be careful (street)

  // ========================================
  // === Religious Expletives ==============
  // ========================================
  "parbleu": [2, 3], // By God
  "jésus-christ de merde": [3, 5], // Jesus Christ of shit
  "sacré bordel de dieu": [2, 3], // Sacred brothel of God

  // ========================================
  // === Additional Crude Compounds ========
  // ========================================
  "trou à bites": [4, 5], // Dick hole
  "chie-en-lit": [3, 5], // Shit in bed (messy)
  "cul-de-sac": [3, 5], // Ass of sack (dead end)
  "brise-couilles": [3, 5], // Ball breaker
  "va-nu-pieds": [3, 5], // Goes barefoot (bum)
  "crache-sang": [3, 5], // Blood spitter
  "gratte-papier": [3, 5], // Paper scratcher (bureaucrat)
  "rond-de-cuir": [3, 5], // Leather circle (desk jockey)
  "planche à repasser": [3, 5], // Ironing board (flat woman)
  "sac d'os": [3, 5], // Bag of bones
  "tête de mort": [5, 5], // Death head
  "tête de gland": [3, 5], // Glans head
  "tête de chibre": [4, 5], // Dick head
  "gros cul": [3, 5], // Big ass
  "gros nichons": [4, 5], // Big tits
  "grosse pétasse": [3, 5], // Big bimbo
  "pétasses": [3, 5], // Bimbos (pl.)
  "pouffiasse": [3, 5], // Slut
  "pouf": [3, 5], // Slut (short)
  "pouffe": [3, 5], // Slut variant
  "roulure": [3, 5], // Hussy
  "marie-couche-toi-là": [3, 5], // Mary lie-down-there (slut)
  "marie-salope": [3, 5], // Dirty Mary (slut)
  "fille de joie": [5, 5], // Girl of joy (prostitute)
  "fille des rues": [3, 5], // Girl of the streets
  "ribaude": [3, 5], // Wench (archaic)
  "goton": [3, 5], // Slut (archaic)
  "raccrocheuse": [3, 5], // Street hooker
  "michto": [3, 5], // Gold digger
  "suceuse de bites": [4, 5], // Dick sucker (f.)
  "bouffeuse de bites": [4, 5], // Dick eater (f.)
  "avaleuse de sabres": [3, 5], // Sword swallower (f.)
  "avaleuse de foutre": [3, 5], // Cum swallower (f.)
  "branleur professionnel": [3, 5], // Professional wanker
  "chieur professionnel": [3, 5], // Professional shitter
  "emmerdeur professionnel": [3, 5], // Professional shit-stirrer
  "brouteur de minou": [4, 5], // Pussy eater
  "lécheur de cul": [3, 5], // Ass licker
  "lécheur de bottes": [3, 5], // Boot licker
  "lécheur de chiotte": [3, 5], // Toilet licker
  "bouffeur de merde": [3, 5], // Shit eater
  "racleur de fond": [5, 5], // Bottom scraper
  "fond de bidet": [3, 5], // Bottom of bidet (lowlife)
  "fond de poubelle": [3, 5], // Bottom of trash can
  "lie de la société": [3, 5], // Dregs of society
  "rebut de l'humanité": [3, 5], // Reject of humanity
  "raté de la vie": [3, 5], // Life failure
  "ratée de la vie": [3, 5], // Life failure (f.)
  "zéro pointé": [3, 5], // Zero with a point
  "bolos": [3, 5], // Sucker
  "flaque de pisse": [3, 5], // Puddle of piss
  "morceau de merde": [3, 5], // Piece of shit
  "paquet de merde": [3, 5], // Package of shit
  "seau de merde": [3, 5], // Bucket of shit
  "crotte de bique": [3, 5], // Goat turd
  "fiente de pigeon": [3, 5], // Pigeon shit
  "trou duc": [3, 5], // Ass (phonetic spelling of trou du cul)
};
const frenchBadWords: Record<string, { s: number; c: number }> = {};
for (const [k, [s, c]] of Object.entries(_d)) {
    frenchBadWords[k] = { s, c };
}
export default frenchBadWords;

const englishBadWords: Record<string, { s: number; c: number }> = {
    "2g1c": { s: 3, c: 5 },
    "acrotomophilia": { s: 3, c: 4 },
    "anal": { s: 4, c: 3 },
    "anilingus": { s: 4, c: 5 },
    "anus": { s: 3, c: 4 },
    "apeshit": { s: 3, c: 5 },
    "arsehole": { s: 3, c: 4 },
    "ass": { s: 3, c: 3 },
    "asshole": { s: 3, c: 5 },
    "suck": { s: 3, c: 2 },
    "assmunch": { s: 3, c: 4 },
    "autoerotic": { s: 3, c: 4 },
    "babeland": { s: 3, c: 4 },
    "bangbros": { s: 3, c: 4 },
    "bareback": { s: 3, c: 4 },
    "barenaked": { s: 3, c: 4 },
    "bastard": { s: 3, c: 4 },
    "bastardo": { s: 5, c: 4 },
    "bastinado": { s: 3, c: 4 },
    "bbw": { s: 3, c: 4 },
    "bdsm": { s: 3, c: 4 },
    "beaner": { s: 4, c: 4 },
    "beaners": { s: 4, c: 4 },
    "bestiality": { s: 3, c: 4 },
    "bimbos": { s: 3, c: 4 },
    "birdlock": { s: 3, c: 4 },
    "bitch": { s: 3, c: 4 },
    "bitches": { s: 3, c: 4 },
    "blowjob": { s: 4, c: 5 },
    "blumpkin": { s: 3, c: 4 },
    "bollocks": { s: 3, c: 4 },
    "bondage": { s: 3, c: 4 },
    "boner": { s: 3, c: 4 },
    "boob": { s: 3, c: 4 },
    "boobs": { s: 4, c: 4 },
    "bra": { s: 2, c: 2 },
    "bukkake": { s: 4, c: 5 },
    "bulldyke": { s: 5, c: 5 },
    "bullshit": { s: 3, c: 5 },
    "bunghole": { s: 3, c: 4 },
    "busty": { s: 3, c: 4 },
    "butt": { s: 3, c: 4 },
    "buttcheeks": { s: 3, c: 4 },
    "butthole": { s: 3, c: 4 },
    "camgirl": { s: 4, c: 5 },
    "camslut": { s: 3, c: 4 },
    "camwhore": { s: 5, c: 4 },
    "carpetmuncher": { s: 3, c: 4 },
    "circlejerk": { s: 3, c: 4 },
    "clit": { s: 3, c: 4 },
    "clitoris": { s: 4, c: 3 },
    "clusterfuck": { s: 3, c: 5 },
    "cock": { s: 4, c: 3 },
    "cocks": { s: 4, c: 4 },
    "coprolagnia": { s: 3, c: 4 },
    "coprophilia": { s: 3, c: 4 },
    "cornhole": { s: 3, c: 4 },
    "coon": { s: 5, c: 4 },
    "coons": { s: 5, c: 5 },
    "creampie": { s: 4, c: 5 },
    "cum": { s: 4, c: 5 },
    "cumming": { s: 4, c: 5 },
    "cunnilingus": { s: 4, c: 3 },
    "cunt": { s: 5, c: 5 },
    "darkie": { s: 3, c: 4 },
    "daterape": { s: 5, c: 5 },
    "deepthroat": { s: 4, c: 5 },
    "dendrophilia": { s: 3, c: 4 },
    "dick": { s: 4, c: 1 },
    "dildo": { s: 5, c: 5 },
    "dingleberry": { s: 3, c: 4 },
    "dingleberries": { s: 3, c: 4 },
    "doggiestyle": { s: 3, c: 4 },
    "doggystyle": { s: 3, c: 4 },
    "dolcett": { s: 3, c: 4 },
    "domination": { s: 3, c: 4 },
    "dominatrix": { s: 3, c: 4 },
    "dommes": { s: 3, c: 4 },
    "dvda": { s: 3, c: 4 },
    "ecchi": { s: 3, c: 4 },
    "ejaculation": { s: 3, c: 4 },
    "erotic": { s: 3, c: 4 },
    "erotism": { s: 3, c: 4 },
    "escort": { s: 3, c: 4 },
    "eunuch": { s: 3, c: 4 },
    "faggot": { s: 5, c: 4 },
    "fecal": { s: 3, c: 4 },
    "felch": { s: 3, c: 4 },
    "fellatio": { s: 4, c: 3 },
    "fack": { s: 3, c: 3 },
    "feltch": { s: 3, c: 4 },
    "femdom": { s: 3, c: 4 },
    "figging": { s: 3, c: 4 },
    "fingerbang": { s: 3, c: 4 },
    "fingering": { s: 3, c: 4 },
    "fisting": { s: 4, c: 5 },
    "footjob": { s: 4, c: 5 },
    "frotting": { s: 3, c: 4 },
    "fuck": { s: 3, c: 5 },
    "fuckin": { s: 3, c: 5 },
    "fucking": { s: 3, c: 5 },
    "fucktards": { s: 3, c: 5 },
    "fudgepacker": { s: 3, c: 4 },
    "futanari": { s: 3, c: 4 },
    "genitals": { s: 3, c: 4 },
    "goatcx": { s: 3, c: 4 },
    "goatse": { s: 3, c: 4 },
    "gokkun": { s: 3, c: 4 },
    "goodpoop": { s: 3, c: 4 },
    "goregasm": { s: 3, c: 4 },
    "grope": { s: 3, c: 4 },
    "g-spot": { s: 3, c: 4 },
    "guro": { s: 3, c: 4 },
    "handjob": { s: 4, c: 5 },
    "hardcore": { s: 3, c: 4 },
    "hentai": { s: 3, c: 4 },
    "homoerotic": { s: 3, c: 4 },
    "honkey": { s: 3, c: 4 },
    "hooker": { s: 3, c: 4 },
    "humping": { s: 3, c: 4 },
    "incest": { s: 3, c: 4 },
    "intercourse": { s: 3, c: 4 },
    "jailbait": { s: 5, c: 5 },
    "jigaboo": { s: 3, c: 4 },
    "jiggaboo": { s: 3, c: 4 },
    "jiggerboo": { s: 3, c: 4 },
    "jizz": { s: 4, c: 5 },
    "juggs": { s: 3, c: 4 },
    "kike": { s: 5, c: 5 },
    "kinbaku": { s: 3, c: 4 },
    "kinkster": { s: 3, c: 4 },
    "kinky": { s: 3, c: 4 },
    "knobbing": { s: 3, c: 4 },
    "knockers": { s: 2, c: 2 },
    "lingerie": { s: 2, c: 2 },
    "lolita": { s: 3, c: 4 },
    "lovemaking": { s: 3, c: 4 },
    "masturbate": { s: 4, c: 4 },
    "milf": { s: 5, c: 5 },
    "muff": { s: 2, c: 2 },
    "motherfucker": { s: 5, c: 5 },
    "muffdiving": { s: 3, c: 4 },
    "nambla": { s: 3, c: 4 },
    "nawashi": { s: 3, c: 4 },
    "neonazi": { s: 5, c: 5 },
    "nigga": { s: 5, c: 5 },
    "nigger": { s: 5, c: 5 },
    "nimphomania": { s: 3, c: 4 },
    "nipple": { s: 4, c: 4 },
    "nipples": { s: 4, c: 4 },
    "nude": { s: 3, c: 4 },
    "nudity": { s: 3, c: 4 },
    "nympho": { s: 3, c: 4 },
    "nymphomania": { s: 3, c: 4 },
    "octopussy": { s: 4, c: 4 },
    "omorashi": { s: 3, c: 4 },
    "orgasm": { s: 4, c: 3 },
    "orgy": { s: 3, c: 5 },
    "paedophile": { s: 3, c: 4 },
    "paki": { s: 3, c: 4 },
    "panties": { s: 3, c: 4 },
    "panty": { s: 3, c: 4 },
    "pedobear": { s: 3, c: 4 },
    "pedophile": { s: 5, c: 5 },
    "pegging": { s: 4, c: 4 },
    "penis": { s: 4, c: 3 },
    "pissing": { s: 3, c: 4 },
    "pisspig": { s: 3, c: 4 },
    "playboy": { s: 3, c: 4 },
    "ponyplay": { s: 3, c: 4 },
    "poof": { s: 5, c: 4 },
    "poofs": { s: 5, c: 4 },
    "poofter": { s: 5, c: 4 },
    "poofters": { s: 5, c: 4 },
    "poon": { s: 3, c: 4 },
    "poontang": { s: 3, c: 4 },
    "punany": { s: 3, c: 4 },
    "poopchute": { s: 3, c: 4 },
    "porn": { s: 3, c: 4 },
    "porno": { s: 3, c: 4 },
    "pornography": { s: 3, c: 4 },
    "pthc": { s: 3, c: 4 },
    "pubes": { s: 3, c: 4 },
    "pussy": { s: 4, c: 4 },
    "queaf": { s: 3, c: 4 },
    "queef": { s: 4, c: 5 },
    "quim": { s: 3, c: 4 },
    "raghead": { s: 5, c: 5 },
    "rape": { s: 3, c: 4 },
    "raping": { s: 3, c: 4 },
    "rapist": { s: 5, c: 5 },
    "rectum": { s: 3, c: 4 },
    "rimjob": { s: 4, c: 5 },
    "rimming": { s: 3, c: 4 },
    "sadism": { s: 3, c: 4 },
    "santorum": { s: 3, c: 4 },
    "scat": { s: 3, c: 4 },
    "schlong": { s: 3, c: 4 },
    "scissoring": { s: 3, c: 4 },
    "semen": { s: 4, c: 3 },
    "sex": { s: 3, c: 3 },
    "sexo": { s: 3, c: 4 },
    "sexy": { s: 3, c: 4 },
    "shemale": { s: 5, c: 5 },
    "shibari": { s: 3, c: 4 },
    "shit": { s: 3, c: 5 },
    "shitblimp": { s: 3, c: 5 },
    "shitty": { s: 3, c: 4 },
    "shota": { s: 3, c: 4 },
    "shrimping": { s: 3, c: 4 },
    "skeet": { s: 3, c: 4 },
    "slanteye": { s: 3, c: 4 },
    "slut": { s: 3, c: 4 },
    "s&m": { s: 3, c: 4 },
    "smut": { s: 3, c: 4 },
    "snatch": { s: 3, c: 4 },
    "snowballing": { s: 3, c: 4 },
    "sodomize": { s: 3, c: 4 },
    "sodomy": { s: 3, c: 4 },
    "spic": { s: 5, c: 4 },
    "splooge": { s: 3, c: 4 },
    "spooge": { s: 3, c: 4 },
    "spunk": { s: 3, c: 4 },
    "strapon": { s: 4, c: 4 },
    "strappado": { s: 3, c: 4 },
    "sucks": { s: 3, c: 4 },
    "swastika": { s: 5, c: 5 },
    "swinger": { s: 3, c: 4 },
    "thong": { s: 2, c: 2 },
    "threesome": { s: 3, c: 4 },
    "throating": { s: 3, c: 4 },
    "tit": { s: 3, c: 4 },
    "tits": { s: 4, c: 4 },
    "titties": { s: 4, c: 5 },
    "titty": { s: 4, c: 4 },
    "topless": { s: 3, c: 4 },
    "tosser": { s: 1, c: 2 },
    "towelhead": { s: 5, c: 5 },
    "tranny": { s: 5, c: 5 },
    "tribadism": { s: 3, c: 4 },
    "tubgirl": { s: 3, c: 4 },
    "tushy": { s: 3, c: 4 },
    "twat": { s: 3, c: 4 },
    "twink": { s: 3, c: 4 },
    "twinkie": { s: 3, c: 4 },
    "undressing": { s: 3, c: 4 },
    "upskirt": { s: 3, c: 4 },
    "urophilia": { s: 3, c: 4 },
    "vagina": { s: 4, c: 3 },
    "vibrator": { s: 3, c: 4 },
    "vorarephilia": { s: 3, c: 4 },
    "voyeur": { s: 3, c: 4 },
    "vulva": { s: 4, c: 3 },
    "wank": { s: 3, c: 4 },
    "wetback": { s: 3, c: 4 },
    "xxx": { s: 3, c: 4 },
    "yaoi": { s: 3, c: 4 },
    "yiffy": { s: 3, c: 4 },
    "zoophilia": { s: 3, c: 4 },

    // Additional high-signal profanity
    "asswipe": { s: 3, c: 4 },
    "ballsack": { s: 4, c: 5 },
    "bastards": { s: 5, c: 4 },
    "bitchass": { s: 3, c: 5 },
    "cockhead": { s: 4, c: 4 },
    "cocksucker": { s: 5, c: 5 },
    "cocksucking": { s: 4, c: 4 },
    "cumshot": { s: 4, c: 5 },
    "cumslut": { s: 3, c: 4 },
    "cuntface": { s: 5, c: 5 },
    "dago": { s: 3, c: 4 },
    "dagos": { s: 3, c: 4 },
    "dickhead": { s: 4, c: 4 },
    "dickweed": { s: 4, c: 4 },
    "dilf": { s: 5, c: 5 },
    "dipshit": { s: 3, c: 5 },
    "douchebag": { s: 3, c: 4 },
    "douche": { s: 3, c: 4 },
    "dumbass": { s: 3, c: 4 },
    "dumbfuck": { s: 3, c: 5 },
    "fag": { s: 5, c: 4 },
    "fags": { s: 5, c: 4 },
    "fatass": { s: 3, c: 4 },
    "fuckboy": { s: 3, c: 5 },
    "fuckface": { s: 5, c: 5 },
    "fuckhead": { s: 3, c: 5 },
    "fuckoff": { s: 3, c: 5 },
    "fuckwit": { s: 3, c: 5 },
    "gay": { s: 5, c: 2 },
    "goddamn": { s: 2, c: 3 },
    "goddamnit": { s: 3, c: 4 },
    "gook": { s: 3, c: 4 },
    "gooks": { s: 3, c: 4 },
    "gtfo": { s: 3, c: 5 },
    "horseshit": { s: 3, c: 5 },
    "jackass": { s: 3, c: 4 },
    "jackoff": { s: 3, c: 4 },
    "jerkoff": { s: 3, c: 4 },
    "knobhead": { s: 3, c: 4 },
    "minge": { s: 3, c: 4 },
    "motherfucking": { s: 3, c: 5 },
    "muthafucka": { s: 3, c: 5 },
    "numbnuts": { s: 3, c: 4 },
    "peckerhead": { s: 3, c: 4 },
    "piss": { s: 3, c: 3 },
    "pissoff": { s: 3, c: 4 },
    "retard": { s: 5, c: 4 },
    "retarded": { s: 5, c: 4 },
    "shitass": { s: 3, c: 5 },
    "shitface": { s: 3, c: 5 },
    "shitfaced": { s: 3, c: 5 },
    "shithead": { s: 3, c: 5 },
    "shitstain": { s: 3, c: 5 },
    "skank": { s: 3, c: 4 },
    "slutbag": { s: 3, c: 4 },
    "spick": { s: 5, c: 4 },
    "stfu": { s: 3, c: 5 },
    "wanker": { s: 3, c: 4 },
    "whore": { s: 5, c: 4 },
    "wtf": { s: 2, c: 2 },

    // Compound insults
    "assclown": { s: 3, c: 4 },
    "asshat": { s: 3, c: 4 },
    "asslicker": { s: 3, c: 4 },
    "assbag": { s: 3, c: 4 },
    "arsewipe": { s: 1, c: 4 },
    "ballbuster": { s: 1, c: 4 },
    "ballsdeep": { s: 1, c: 4 },
    "bastardized": { s: 5, c: 4 },
    "bitchface": { s: 3, c: 4 },
    "bitchtits": { s: 3, c: 4 },
    "cockbite": { s: 4, c: 4 },
    "cockface": { s: 4, c: 4 },
    "cockgobbler": { s: 4, c: 4 },
    "cocklicker": { s: 4, c: 4 },
    "cockmonger": { s: 4, c: 4 },
    "cockjockey": { s: 4, c: 4 },
    "cocknose": { s: 4, c: 4 },
    "cockring": { s: 4, c: 4 },
    "cocksmith": { s: 4, c: 4 },
    "cocksmoker": { s: 4, c: 4 },
    "cockwomble": { s: 4, c: 4 },
    "crapbag": { s: 2, c: 4 },
    "crapface": { s: 2, c: 4 },
    "cumbubble": { s: 4, c: 5 },
    "cumdumpster": { s: 4, c: 5 },
    "cumguzzler": { s: 5, c: 5 },
    "cumrag": { s: 4, c: 5 },
    "cumstain": { s: 4, c: 5 },
    "cuntbag": { s: 5, c: 5 },
    "cunting": { s: 5, c: 5 },
    "cuntrag": { s: 5, c: 5 },
    "dickbag": { s: 4, c: 4 },
    "dickbreath": { s: 4, c: 4 },
    "dickface": { s: 4, c: 4 },
    "dickless": { s: 4, c: 4 },
    "dicklicker": { s: 4, c: 4 },
    "dicknose": { s: 4, c: 4 },
    "dicksneeze": { s: 4, c: 4 },
    "dicksplash": { s: 4, c: 4 },
    "dicktease": { s: 4, c: 4 },
    "fuckass": { s: 3, c: 5 },
    "fuckbag": { s: 3, c: 5 },
    "fuckball": { s: 3, c: 5 },
    "fuckbrains": { s: 3, c: 5 },
    "fucker": { s: 3, c: 5 },
    "fuckers": { s: 3, c: 5 },
    "fuckhole": { s: 3, c: 5 },
    "fuckknuckle": { s: 3, c: 5 },
    "fucknugget": { s: 3, c: 5 },
    "fuckstain": { s: 3, c: 5 },
    "fuckstick": { s: 3, c: 5 },
    "fucktard": { s: 3, c: 5 },
    "fucktoy": { s: 3, c: 5 },
    "fucktrumpet": { s: 3, c: 5 },
    "fuckup": { s: 3, c: 5 },
    "fuckwad": { s: 3, c: 5 },
    "jackhole": { s: 1, c: 4 },
    "jizzface": { s: 4, c: 5 },
    "jizzmopper": { s: 4, c: 5 },
    "jizzrag": { s: 4, c: 5 },
    "jizzstain": { s: 4, c: 5 },
    "knobend": { s: 3, c: 4 },
    "knobgobbler": { s: 3, c: 4 },
    "knobber": { s: 3, c: 4 },
    "nutsack": { s: 1, c: 4 },
    "pissbaby": { s: 3, c: 4 },
    "pissflaps": { s: 3, c: 4 },
    "pisshead": { s: 3, c: 4 },
    "shitstick": { s: 3, c: 5 },
    "shitbird": { s: 3, c: 5 },
    "shitbag": { s: 3, c: 5 },
    "shitbox": { s: 3, c: 5 },
    "shitbreath": { s: 3, c: 5 },
    "shitbrains": { s: 3, c: 5 },
    "shitcanned": { s: 3, c: 5 },
    "shitcunt": { s: 5, c: 5 },
    "shitdick": { s: 3, c: 5 },
    "shiteater": { s: 3, c: 5 },
    "shitfuck": { s: 3, c: 5 },
    "shitgibbon": { s: 3, c: 5 },
    "shithole": { s: 3, c: 5 },
    "shithouse": { s: 3, c: 5 },
    "shitlord": { s: 3, c: 5 },
    "shitstorm": { s: 3, c: 5 },
    "slutbucket": { s: 3, c: 4 },
    "slutface": { s: 3, c: 4 },
    "smartass": { s: 3, c: 4 },
    "thundercunt": { s: 5, c: 5 },
    "twatface": { s: 4, c: 4 },
    "twatwaffle": { s: 4, c: 4 },
    "wankstain": { s: 3, c: 4 },

    // British slang
    "arse": { s: 3, c: 4 },
    "arsed": { s: 3, c: 4 },
    "arseface": { s: 3, c: 4 },
    "bellend": { s: 3, c: 4 },
    "berk": { s: 1, c: 2 },
    "blighter": { s: 3, c: 4 },
    "bloodyell": { s: 3, c: 4 },
    "bloody hell": { s: 2, c: 4 },
    "bugger": { s: 2, c: 3 },
    "buggered": { s: 3, c: 4 },
    "buggery": { s: 3, c: 4 },
    "chav": { s: 3, c: 4 },
    "gobshite": { s: 3, c: 5 },
    "knacker": { s: 3, c: 4 },
    "knackers": { s: 3, c: 4 },
    "minger": { s: 3, c: 4 },
    "mingin": { s: 3, c: 4 },
    "muppet": { s: 1, c: 2 },
    "nobhead": { s: 3, c: 4 },
    "nonce": { s: 5, c: 4 },
    "pillock": { s: 1, c: 2 },
    "plonker": { s: 1, c: 2 },
    "scrubber": { s: 3, c: 4 },
    "shag": { s: 3, c: 4 },
    "shagged": { s: 3, c: 4 },
    "shagging": { s: 3, c: 4 },
    "shite": { s: 3, c: 5 },
    "slag": { s: 3, c: 4 },
    "slagheap": { s: 3, c: 4 },
    "slapper": { s: 3, c: 4 },
    "sod off": { s: 3, c: 5 },
    "sodding": { s: 3, c: 4 },
    "tart": { s: 3, c: 4 },
    "twit": { s: 1, c: 2 },
    "wankbadger": { s: 3, c: 4 },
    "wazzock": { s: 1, c: 2 },

    // Australian slang
    "bogan": { s: 1, c: 2 },
    "drongo": { s: 1, c: 2 },

    // Internet abbreviations & modern slang
    "fml": { s: 2, c: 2 },
    "gilf": { s: 2, c: 3 },
    "gdilf": { s: 2, c: 3 },
    "lmao": { s: 2, c: 2 },
    "lmfao": { s: 2, c: 3 },
    "stfd": { s: 2, c: 3 },
    "thot": { s: 3, c: 4 },

    // Slurs (content filter)
    "chink": { s: 5, c: 3 },
    "chinks": { s: 5, c: 4 },
    "cracker": { s: 4, c: 1 },
    "crackers": { s: 3, c: 4 },
    "dyke": { s: 5, c: 4 },
    "dykes": { s: 5, c: 4 },
    "fgt": { s: 5, c: 4 },
    "gringo": { s: 5, c: 4 },
    "guido": { s: 5, c: 4 },
    "gyp": { s: 5, c: 4 },
    "gypped": { s: 5, c: 4 },
    "heeb": { s: 5, c: 4 },
    "homo": { s: 5, c: 4 },
    "injun": { s: 5, c: 4 },
    "jap": { s: 5, c: 4 },
    "japs": { s: 5, c: 4 },
    "kaffir": { s: 5, c: 4 },
    "kraut": { s: 5, c: 4 },
    "lesbo": { s: 5, c: 4 },
    "mick": { s: 5, c: 4 },
    "mong": { s: 5, c: 4 },
    "nig": { s: 5, c: 4 },
    "niggaz": { s: 5, c: 5 },
    "niggers": { s: 5, c: 5 },
    "porch monkey": { s: 5, c: 5 },
    "redneck": { s: 5, c: 4 },
    "redskin": { s: 5, c: 4 },
    "sambo": { s: 5, c: 4 },
    "spaz": { s: 5, c: 4 },
    "spazz": { s: 5, c: 4 },
    "spazzes": { s: 5, c: 4 },
    "sperg": { s: 5, c: 4 },
    "spook": { s: 5, c: 4 },
    "tar baby": { s: 5, c: 5 },
    "wankers": { s: 5, c: 4 },
    "wetbacks": { s: 5, c: 4 },
    "white trash": { s: 5, c: 5 },
    "whitey": { s: 5, c: 4 },
    "wog": { s: 5, c: 4 },
    "wop": { s: 5, c: 4 },
    "wops": { s: 5, c: 4 },
    "zipperhead": { s: 5, c: 5 },

    // Compound phrases
    "batshit": { s: 3, c: 5 },
    "blow me": { s: 3, c: 5 },
    "blowjobs": { s: 4, c: 5 },
    "bull shit": { s: 3, c: 5 },
    "eat a dick": { s: 4, c: 5 },
    "eat shit": { s: 3, c: 5 },
    "f u": { s: 3, c: 5 },
    "foff": { s: 3, c: 5 },
    "fuck off": { s: 3, c: 5 },
    "fuck you": { s: 3, c: 5 },
    "fuckyou": { s: 3, c: 5 },
    "gangbang": { s: 3, c: 5 },
    "gangbanged": { s: 3, c: 5 },
    "gangbanging": { s: 3, c: 5 },
    "get fucked": { s: 3, c: 5 },
    "go fuck yourself": { s: 3, c: 5 },
    "go to hell": { s: 3, c: 5 },
    "gfy": { s: 3, c: 5 },
    "goddammit": { s: 2, c: 3 },
    "horse shit": { s: 3, c: 5 },
    "jack off": { s: 3, c: 5 },
    "jerking off": { s: 3, c: 5 },
    "kiss my ass": { s: 3, c: 5 },
    "motherfuckers": { s: 5, c: 5 },
    "mothafuckin": { s: 3, c: 5 },
    "motherfuckin": { s: 3, c: 5 },
    "motherfuckingcocksucking": { s: 3, c: 5 },
    "piss off": { s: 3, c: 5 },
    "pissed off": { s: 3, c: 4 },
    "piece of shit": { s: 3, c: 5 },
    "pos": { s: 3, c: 5 },
    "suck my dick": { s: 4, c: 5 },
    "suck it": { s: 3, c: 5 },
    "son of a bitch": { s: 3, c: 5 },
    "son of a whore": { s: 5, c: 5 },

    // More sexual terms
    "anal beads": { s: 4, c: 5 },
    "ballgag": { s: 4, c: 4 },
    "bondaged": { s: 4, c: 4 },
    "cameltoe": { s: 4, c: 4 },
    "clitoral": { s: 4, c: 4 },
    "cumface": { s: 4, c: 5 },
    "cunts": { s: 5, c: 5 },
    "dildos": { s: 5, c: 5 },
    "donkeypunch": { s: 4, c: 4 },
    "doublepenetration": { s: 4, c: 4 },
    "facial": { s: 4, c: 4 },
    "felching": { s: 4, c: 4 },
    "fleshlight": { s: 4, c: 5 },
    "gangbangs": { s: 4, c: 4 },
    "gooch": { s: 4, c: 4 },
    "grool": { s: 4, c: 5 },
    "handjobs": { s: 4, c: 5 },
    "hogtied": { s: 4, c: 4 },
    "hookers": { s: 4, c: 4 },
    "horny": { s: 3, c: 4 },
    "masturbating": { s: 4, c: 4 },
    "masturbation": { s: 4, c: 4 },
    "milfs": { s: 5, c: 5 },
    "nudes": { s: 4, c: 4 },
    "pecker": { s: 4, c: 4 },
    "pornhub": { s: 4, c: 4 },
    "pornstar": { s: 4, c: 4 },
    "prostitution": { s: 4, c: 4 },
    "pussies": { s: 4, c: 4 },
    "queafing": { s: 4, c: 4 },
    "quickie": { s: 4, c: 4 },
    "shibaried": { s: 4, c: 4 },
    "slutty": { s: 3, c: 4 },
    "smegma": { s: 4, c: 4 },
    "twerk": { s: 4, c: 4 },
    "twerking": { s: 4, c: 4 },
    "vaginal": { s: 4, c: 4 },
    "vibrators": { s: 4, c: 4 },
    "whorehouse": { s: 5, c: 4 },
    "whoring": { s: 4, c: 4 },

    // More general insults
    "assbandit": { s: 3, c: 4 },
    "dirtbag": { s: 1, c: 4 },
    "dirtysanchez": { s: 1, c: 4 },
    "doubledonger": { s: 1, c: 4 },
    "douchecanoe": { s: 3, c: 4 },
    "douchenozzle": { s: 3, c: 4 },
    "dumbbitch": { s: 3, c: 4 },
    "dumbshit": { s: 3, c: 5 },
    "fatfuck": { s: 3, c: 5 },
    "fubar": { s: 1, c: 4 },
    "halfwit": { s: 1, c: 4 },
    "numbskull": { s: 1, c: 4 },
    "peckerwood": { s: 1, c: 4 },
    "scumbag": { s: 3, c: 4 },
    "sleazebag": { s: 3, c: 4 },
    "taint": { s: 1, c: 4 },
    "tramp": { s: 1, c: 4 },
    "trash": { s: 1, c: 4 },
    "twathead": { s: 4, c: 4 },
    "twatknacker": { s: 4, c: 4 },

    // Fuck spelling variations
    "fuk": { s: 3, c: 5 }, // alternate spelling
    "fuc": { s: 3, c: 5 }, // truncated
    "fuq": { s: 3, c: 5 }, // phonetic
    "fux": { s: 3, c: 5 }, // alternate spelling
    "phuck": { s: 3, c: 5 }, // ph substitution
    "phuk": { s: 3, c: 5 }, // ph substitution
    "phuc": { s: 3, c: 5 }, // ph substitution
    "fxck": { s: 3, c: 4 }, // vowel swap
    "fck": { s: 3, c: 5 }, // consonants only
    "fk": { s: 3, c: 5 }, // minimal evasion
    "fcuk": { s: 3, c: 5 }, // transposition
    "fcking": { s: 3, c: 4 }, // vowel removed
    "fking": { s: 3, c: 5 }, // truncated
    "fuking": { s: 3, c: 4 }, // single consonant
    "fukking": { s: 3, c: 4 }, // alternate
    "fukkin": { s: 3, c: 4 }, // alternate
    "fukin": { s: 3, c: 4 }, // alternate
    "phucking": { s: 3, c: 5 }, // ph substitution
    "focked": { s: 3, c: 5 }, // phonetic
    "fokking": { s: 3, c: 4 }, // Afrikaans-style
    "fugged": { s: 2, c: 3 }, // euphemism
    "fuggin": { s: 2, c: 3 }, // euphemism
    "effing": { s: 2, c: 2 }, // euphemism
    "eff": { s: 2, c: 3 }, // euphemism
    "effoff": { s: 2, c: 3 }, // euphemism
    "effyou": { s: 2, c: 3 }, // euphemism
    "feck": { s: 3, c: 4 }, // Irish variant
    "fecking": { s: 3, c: 4 }, // Irish variant
    "fecker": { s: 3, c: 4 }, // Irish variant
    "frigging": { s: 2, c: 2 }, // euphemism
    "frickin": { s: 2, c: 3 }, // euphemism
    "fricken": { s: 2, c: 3 }, // euphemism
    "frikkin": { s: 2, c: 3 }, // euphemism
    "freaking": { s: 2, c: 2 }, // euphemism
    "fricking": { s: 2, c: 3 }, // euphemism
    "fugly": { s: 3, c: 4 }, // fucking ugly

    // Fuck compounds (additions)
    "fuckboi": { s: 3, c: 5 }, // alternate spelling
    "fuckbuddy": { s: 3, c: 5 }, // sexual partner
    "fucknut": { s: 3, c: 5 }, // compound insult
    "fuckwipe": { s: 3, c: 5 }, // compound insult
    "fuckrag": { s: 3, c: 5 }, // compound insult
    "fuckweasel": { s: 3, c: 5 }, // compound insult
    "fuckmuppet": { s: 3, c: 5 }, // compound insult
    "fuckmonkey": { s: 3, c: 5 }, // compound insult
    "fucktwat": { s: 3, c: 5 }, // compound insult
    "fuckpig": { s: 3, c: 5 }, // compound insult
    "fucktwit": { s: 3, c: 5 }, // compound insult
    "fuckwagon": { s: 3, c: 5 }, // compound insult
    "fuckwaffle": { s: 3, c: 5 }, // compound insult
    "brainfuck": { s: 3, c: 5 }, // compound
    "mindfuck": { s: 3, c: 5 }, // compound
    "ratfuck": { s: 3, c: 5 }, // compound
    "ratfucker": { s: 3, c: 5 }, // compound
    "skullfuck": { s: 3, c: 5 }, // violent sexual
    "skullfucked": { s: 3, c: 5 }, // violent sexual
    "starfucker": { s: 3, c: 5 }, // groupie insult
    "titfuck": { s: 3, c: 5 }, // sexual act
    "unfuckable": { s: 3, c: 5 }, // insult
    "whatthefuck": { s: 3, c: 5 }, // compound phrase
    "clusterf": { s: 3, c: 5 }, // truncated clusterfuck
    "clusterfucker": { s: 3, c: 5 }, // compound
    "mothafucka": { s: 3, c: 5 }, // alternate spelling
    "mothafucker": { s: 3, c: 5 }, // alternate spelling
    "mothafuckers": { s: 3, c: 5 }, // alternate spelling
    "motherfuck": { s: 3, c: 5 }, // truncated
    "motherfuckaz": { s: 3, c: 5 }, // alternate spelling
    "mutha": { s: 3, c: 5 }, // truncated
    "muthafuck": { s: 3, c: 5 }, // alternate spelling
    "muthafucker": { s: 3, c: 5 }, // alternate spelling
    "muthafucking": { s: 3, c: 5 }, // alternate spelling
    "mutherfucker": { s: 3, c: 5 }, // alternate spelling

    // Shit spelling variations
    "sht": { s: 3, c: 5 }, // consonants only
    "shyt": { s: 3, c: 5 }, // alternate spelling
    "sh1t": { s: 3, c: 5 }, // leet speak
    "shiit": { s: 3, c: 5 }, // elongated
    "shiet": { s: 3, c: 5 }, // alternate spelling
    "shiz": { s: 3, c: 4 }, // truncated
    "shizzle": { s: 3, c: 4 }, // slang variant

    // Shit compounds (additions)
    "shitshow": { s: 3, c: 5 }, // compound
    "bullshitter": { s: 3, c: 5 }, // compound
    "bullshitting": { s: 3, c: 5 }, // compound
    "chickenshit": { s: 3, c: 5 }, // compound
    "dipshits": { s: 3, c: 5 }, // plural
    "dogshit": { s: 3, c: 5 }, // compound
    "ratshit": { s: 3, c: 5 }, // compound
    "shitrag": { s: 3, c: 5 }, // compound insult
    "shitpile": { s: 3, c: 5 }, // compound
    "shitpot": { s: 3, c: 5 }, // compound
    "shitwad": { s: 3, c: 5 }, // compound insult
    "shitweasel": { s: 3, c: 5 }, // compound insult
    "shitwit": { s: 3, c: 5 }, // compound insult
    "shitlips": { s: 3, c: 5 }, // compound insult
    "shitlist": { s: 3, c: 5 }, // compound
    "shitsack": { s: 3, c: 5 }, // compound insult
    "shitsipper": { s: 3, c: 5 }, // compound insult
    "shitspitter": { s: 3, c: 5 }, // compound insult
    "shittier": { s: 3, c: 5 }, // comparative
    "shittiest": { s: 3, c: 5 }, // superlative
    "shitting": { s: 3, c: 5 }, // gerund
    "shitforbrains": { s: 3, c: 5 }, // compound insult
    "craphead": { s: 3, c: 5 }, // compound
    "crapass": { s: 3, c: 5 }, // compound
    "craphole": { s: 3, c: 5 }, // compound
    "craptastic": { s: 3, c: 5 }, // sarcastic compound
    "crappy": { s: 3, c: 5 }, // adjective

    // Ass spelling variations and compounds (additions)
    "a$$": { s: 3, c: 5 }, // symbol substitution
    "azz": { s: 3, c: 5 }, // alternate spelling
    "arsehat": { s: 3, c: 5 }, // British compound
    "arselicker": { s: 3, c: 5 }, // British compound
    "arsebandit": { s: 3, c: 5 }, // British compound
    "asscrack": { s: 3, c: 5 }, // body part
    "assfuck": { s: 3, c: 5 }, // compound
    "assfucker": { s: 3, c: 5 }, // compound
    "assgoblin": { s: 3, c: 5 }, // compound insult
    "assholes": { s: 3, c: 5 }, // plural
    "assjacker": { s: 3, c: 5 }, // compound insult
    "asslick": { s: 3, c: 5 }, // compound
    "assmuncher": { s: 3, c: 5 }, // compound insult
    "assnugget": { s: 3, c: 5 }, // compound insult
    "asspacker": { s: 3, c: 5 }, // compound insult
    "asspirate": { s: 3, c: 5 }, // pun compound
    "asswad": { s: 3, c: 5 }, // compound insult
    "badass": { s: 3, c: 5 }, // compound
    "candyass": { s: 3, c: 5 }, // compound insult
    "hardass": { s: 3, c: 5 }, // compound
    "kickass": { s: 3, c: 5 }, // compound
    "lameass": { s: 3, c: 5 }, // compound insult
    "lardass": { s: 3, c: 5 }, // compound insult
    "lazyass": { s: 3, c: 5 }, // compound insult
    "sorryass": { s: 3, c: 5 }, // compound insult
    "stupidass": { s: 3, c: 5 }, // compound insult
    "uglyass": { s: 3, c: 5 }, // compound insult
    "wiseass": { s: 3, c: 5 }, // compound insult

    // Dick spelling variations and compounds (additions)
    "dik": { s: 3, c: 5 }, // alternate spelling
    "dck": { s: 3, c: 5 }, // vowel removed
    "d1ck": { s: 4, c: 5 }, // leet speak
    "dikhead": { s: 3, c: 5 }, // alternate spelling
    "dickbrain": { s: 4, c: 5 }, // compound insult
    "dickfor": { s: 4, c: 5 }, // compound insult
    "dickfuck": { s: 3, c: 5 }, // compound insult
    "dickmunch": { s: 4, c: 5 }, // compound insult
    "dickmonger": { s: 4, c: 5 }, // compound insult
    "dickrot": { s: 4, c: 5 }, // compound insult
    "dickslap": { s: 4, c: 5 }, // compound
    "dicksmack": { s: 4, c: 5 }, // compound
    "dicksucker": { s: 5, c: 5 }, // compound insult
    "dicksucking": { s: 4, c: 5 }, // compound
    "dicktip": { s: 4, c: 5 }, // compound
    "dickwad": { s: 4, c: 5 }, // compound insult
    "dickwhistle": { s: 4, c: 5 }, // compound insult
    "dickworm": { s: 4, c: 5 }, // compound insult
    "dickhole": { s: 4, c: 5 }, // compound insult

    // Bitch spelling variations and compounds (additions)
    "b1tch": { s: 3, c: 5 }, // leet speak
    "biatch": { s: 3, c: 5 }, // phonetic variant
    "beyotch": { s: 3, c: 5 }, // phonetic variant
    "beeyotch": { s: 3, c: 5 }, // phonetic variant
    "biotch": { s: 3, c: 5 }, // phonetic variant
    "bish": { s: 3, c: 5 }, // truncated
    "bitchboy": { s: 3, c: 5 }, // compound insult
    "bitchcakes": { s: 3, c: 5 }, // compound insult
    "bitched": { s: 3, c: 5 }, // past tense
    "bitchiest": { s: 3, c: 5 }, // superlative
    "bitchin": { s: 3, c: 5 }, // adjective
    "bitching": { s: 3, c: 5 }, // gerund
    "bitchmode": { s: 3, c: 5 }, // compound
    "bitchslap": { s: 3, c: 5 }, // compound
    "bitchy": { s: 3, c: 4 }, // adjective
    "sonofabitch": { s: 3, c: 5 }, // compound phrase
    "sunuvabitch": { s: 3, c: 5 }, // phonetic variant
    "sumbitch": { s: 3, c: 5 }, // truncated

    // Cock spelling variations and compounds (additions)
    "c0ck": { s: 4, c: 5 }, // leet speak
    "cawk": { s: 3, c: 5 }, // phonetic
    "cockcheese": { s: 4, c: 5 }, // compound insult
    "cockend": { s: 4, c: 5 }, // compound insult
    "cockholster": { s: 4, c: 5 }, // compound insult
    "cockmuncher": { s: 4, c: 5 }, // compound insult
    "cockup": { s: 4, c: 5 }, // compound
    "cockwash": { s: 4, c: 5 }, // compound insult

    // Cunt variations and compounds (additions)
    "c0nt": { s: 5, c: 5 }, // leet speak
    "cuntbucket": { s: 5, c: 5 }, // compound insult
    "cuntfaced": { s: 5, c: 5 }, // compound insult
    "cuntflap": { s: 5, c: 5 }, // body part vulgar
    "cuntflaps": { s: 5, c: 5 }, // body part vulgar
    "cunthair": { s: 5, c: 5 }, // compound
    "cunthole": { s: 5, c: 5 }, // compound
    "cuntkicker": { s: 5, c: 5 }, // compound insult
    "cuntlicker": { s: 5, c: 5 }, // compound insult
    "cuntlips": { s: 5, c: 5 }, // compound
    "cuntpunt": { s: 5, c: 5 }, // compound
    "cuntsucker": { s: 5, c: 5 }, // compound insult
    "cuntwipe": { s: 5, c: 5 }, // compound insult

    // Racial/ethnic slurs (additions)
    "abbo": { s: 5, c: 4 }, // anti-Aboriginal
    "abo": { s: 5, c: 4 }, // anti-Aboriginal
    "blackie": { s: 5, c: 4 }, // racial slur
    "bluegum": { s: 5, c: 4 }, // racial slur
    "boong": { s: 5, c: 4 }, // anti-Aboriginal
    "burrhead": { s: 5, c: 4 }, // racial slur
    "camel jockey": { s: 5, c: 5 }, // anti-Arab
    "chinaman": { s: 5, c: 4 }, // anti-Chinese
    "chinky": { s: 5, c: 4 }, // anti-Asian
    "coconut": { s: 3, c: 4 }, // racial slur
    "coolie": { s: 5, c: 4 }, // anti-Asian labor slur
    "coonass": { s: 5, c: 4 }, // regional slur
    "curry muncher": { s: 5, c: 5 }, // anti-South Asian
    "darkies": { s: 5, c: 4 }, // racial slur plural
    "darky": { s: 5, c: 4 }, // racial slur
    "dothead": { s: 5, c: 4 }, // anti-South Asian
    "gator bait": { s: 5, c: 4 }, // racial slur
    "golliwog": { s: 5, c: 4 }, // racial caricature
    "gollywog": { s: 5, c: 4 }, // racial caricature
    "greaseball": { s: 5, c: 4 }, // ethnic slur
    "greaser": { s: 5, c: 4 }, // ethnic slur
    "guinea": { s: 5, c: 4 }, // anti-Italian
    "hajji": { s: 5, c: 4 }, // anti-Arab
    "haji": { s: 5, c: 4 }, // anti-Arab
    "halfbreed": { s: 5, c: 4 }, // mixed race slur
    "half-breed": { s: 5, c: 4 }, // mixed race slur
    "honky": { s: 5, c: 4 }, // anti-white slur
    "hunky": { s: 5, c: 4 }, // ethnic slur
    "jungle bunny": { s: 5, c: 5 }, // racial slur
    "kikes": { s: 5, c: 5 }, // plural anti-Semitic
    "limey": { s: 5, c: 4 }, // anti-British
    "mulatto": { s: 5, c: 4 }, // mixed race slur
    "nagger": { s: 5, c: 5 }, // near-homophone evasion
    "naggers": { s: 5, c: 5 }, // near-homophone evasion
    "negroid": { s: 5, c: 4 }, // racial slur
    "negra": { s: 5, c: 4 }, // racial slur
    "negras": { s: 5, c: 4 }, // racial slur
    "negroes": { s: 5, c: 4 }, // racial slur
    "nigar": { s: 5, c: 5 }, // alternate spelling
    "niggah": { s: 5, c: 5 }, // alternate spelling
    "niggas": { s: 5, c: 5 }, // alternate spelling
    "nigguh": { s: 5, c: 5 }, // alternate spelling
    "niggahs": { s: 5, c: 5 }, // alternate spelling
    "niggor": { s: 5, c: 5 }, // alternate spelling
    "nigor": { s: 5, c: 5 }, // alternate spelling
    "niglet": { s: 5, c: 4 }, // racial slur diminutive
    "niglets": { s: 5, c: 4 }, // racial slur diminutive
    "nigra": { s: 5, c: 4 }, // racial slur
    "nigras": { s: 5, c: 4 }, // racial slur
    "pakis": { s: 5, c: 4 }, // plural anti-Pakistani
    "picaninny": { s: 5, c: 4 }, // racial slur
    "pickaninny": { s: 5, c: 4 }, // racial slur
    "pikey": { s: 5, c: 4 }, // anti-Traveler slur
    "porchmonkey": { s: 5, c: 4 }, // racial slur compound
    "ragheads": { s: 5, c: 5 }, // plural anti-Arab
    "sandnigger": { s: 5, c: 5 }, // compound racial slur
    "sandnigga": { s: 5, c: 5 }, // compound racial slur
    "shitskin": { s: 5, c: 5 }, // racial slur
    "slant": { s: 5, c: 4 }, // anti-Asian
    "slanteyes": { s: 5, c: 4 }, // anti-Asian
    "slopes": { s: 5, c: 4 }, // anti-Asian
    "spearchucker": { s: 5, c: 5 }, // racial slur
    "spics": { s: 5, c: 5 }, // plural anti-Latino
    "spicks": { s: 5, c: 5 }, // alternate spelling
    "squaw": { s: 5, c: 4 }, // anti-Native American
    "tar-baby": { s: 5, c: 4 }, // racial slur
    "tarbaby": { s: 5, c: 4 }, // racial slur
    "towelheads": { s: 5, c: 5 }, // plural anti-Arab
    "uncle tom": { s: 5, c: 4 }, // racial slur
    "wigger": { s: 5, c: 4 }, // racial mockery
    "wigga": { s: 5, c: 4 }, // racial mockery
    "woggy": { s: 5, c: 4 }, // racial slur
    "yellowbone": { s: 5, c: 4 }, // colorist slur
    "zipperheads": { s: 5, c: 5 }, // plural anti-Asian

    // Homophobic slurs (additions)
    "bumboy": { s: 5, c: 4 }, // homophobic
    "bum boy": { s: 5, c: 4 }, // homophobic
    "bumbandit": { s: 5, c: 4 }, // homophobic
    "buttboy": { s: 5, c: 4 }, // homophobic
    "cocksuckers": { s: 5, c: 5 }, // plural
    "faggots": { s: 5, c: 5 }, // plural
    "faggotry": { s: 5, c: 4 }, // noun form
    "faggy": { s: 5, c: 4 }, // adjective
    "fagot": { s: 5, c: 5 }, // alternate spelling
    "fagots": { s: 5, c: 5 }, // alternate spelling plural
    "fairy": { s: 3, c: 4 }, // homophobic
    "flamer": { s: 5, c: 4 }, // homophobic
    "flamers": { s: 5, c: 4 }, // homophobic
    "fruity": { s: 5, c: 4 }, // homophobic
    "gayass": { s: 3, c: 4 }, // compound
    "gaylord": { s: 3, c: 4 }, // compound insult
    "gaywad": { s: 3, c: 4 }, // compound insult
    "lesbos": { s: 3, c: 4 }, // plural
    "lezzo": { s: 3, c: 4 }, // slang
    "lezzy": { s: 3, c: 4 }, // slang
    "moffie": { s: 5, c: 4 }, // South African homophobic
    "nancyboy": { s: 5, c: 4 }, // homophobic
    "pansy": { s: 5, c: 4 }, // homophobic
    "pansies": { s: 5, c: 4 }, // homophobic plural
    "pillow biter": { s: 5, c: 4 }, // homophobic
    "pillowbiter": { s: 5, c: 4 }, // homophobic
    "pooftah": { s: 5, c: 4 }, // homophobic
    "ponce": { s: 5, c: 4 }, // homophobic
    "queerbait": { s: 5, c: 4 }, // homophobic
    "queerboy": { s: 5, c: 4 }, // homophobic
    "queers": { s: 3, c: 4 }, // plural
    "rug muncher": { s: 5, c: 4 }, // homophobic
    "rugmuncher": { s: 5, c: 4 }, // homophobic
    "shirtlifter": { s: 5, c: 4 }, // homophobic
    "shirt lifter": { s: 5, c: 4 }, // homophobic
    "sissy": { s: 5, c: 4 }, // homophobic
    "sodomite": { s: 5, c: 4 }, // homophobic
    "sodomites": { s: 5, c: 4 }, // homophobic plural

    // Sexist/misogynistic (additions)
    "bimbo": { s: 3, c: 4 }, // sexist insult
    "floozy": { s: 3, c: 4 }, // sexist insult
    "frump": { s: 3, c: 4 }, // sexist insult
    "harridan": { s: 3, c: 4 }, // sexist insult
    "hooters": { s: 3, c: 4 }, // vulgar body reference
    "hussy": { s: 3, c: 4 }, // sexist insult
    "jezebel": { s: 3, c: 4 }, // sexist insult
    "piece of ass": { s: 3, c: 4 }, // objectifying
    "sket": { s: 3, c: 4 }, // British sexist slang
    "skankbag": { s: 3, c: 4 }, // compound insult
    "skankface": { s: 3, c: 4 }, // compound insult
    "skanky": { s: 3, c: 4 }, // adjective
    "slags": { s: 3, c: 4 }, // plural
    "slutshame": { s: 3, c: 4 }, // compound
    "slutshaming": { s: 3, c: 4 }, // compound
    "sluts": { s: 3, c: 4 }, // plural
    "trollop": { s: 3, c: 4 }, // sexist insult
    "trollops": { s: 3, c: 4 }, // plural
    "wench": { s: 3, c: 4 }, // sexist insult
    "whorebag": { s: 5, c: 4 }, // compound insult
    "whores": { s: 5, c: 5 }, // plural
    "whorey": { s: 5, c: 4 }, // adjective
    "whorish": { s: 3, c: 4 }, // adjective

    // British slang (additions)
    "git": { s: 1, c: 2 }, // British insult
    "gits": { s: 3, c: 4 }, // plural
    "manky": { s: 3, c: 4 }, // British dirty/bad
    "naff off": { s: 3, c: 4 }, // British go away
    "pisstake": { s: 3, c: 4 }, // British mockery
    "scrote": { s: 3, c: 4 }, // British insult
    "shagger": { s: 3, c: 4 }, // British sexual
    "slaggy": { s: 3, c: 4 }, // British adjective
    "sodoff": { s: 3, c: 4 }, // compound
    "toerag": { s: 3, c: 4 }, // British insult
    "tosspot": { s: 3, c: 4 }, // British insult
    "twatbadger": { s: 4, c: 4 }, // compound insult
    "twonk": { s: 3, c: 4 }, // British insult
    "pleb": { s: 1, c: 2 }, // British classist insult

    // Australian slang (additions)
    "rooting": { s: 3, c: 4 }, // Australian sexual
    "root rat": { s: 3, c: 4 }, // Australian sexual
    "rootrat": { s: 3, c: 4 }, // Australian sexual
    "seppo": { s: 3, c: 4 }, // Australian anti-American

    // Internet abbreviations & modern slang (additions)
    "dafuq": { s: 2, c: 3 }, // what the fuck
    "deez nuts": { s: 2, c: 3 }, // vulgar meme
    "deeznutz": { s: 2, c: 3 }, // vulgar meme
    "diaf": { s: 5, c: 5 }, // die in a fire
    "dilligaf": { s: 2, c: 3 }, // acronym vulgar
    "esad": { s: 5, c: 5 }, // eat shit and die
    "ffs": { s: 3, c: 5 }, // for fuck's sake
    "foad": { s: 5, c: 5 }, // fuck off and die
    "gfys": { s: 2, c: 3 }, // go fuck yourself
    "gyat": { s: 2, c: 3 }, // sexualized exclamation
    "gyatt": { s: 2, c: 3 }, // sexualized exclamation
    "idgaf": { s: 2, c: 3 }, // I don't give a fuck
    "incel": { s: 2, c: 3 }, // involuntary celibate insult
    "jfc": { s: 2, c: 3 }, // Jesus fucking Christ
    "kms": { s: 2, c: 3 }, // kill myself
    "kys": { s: 5, c: 5 }, // kill yourself
    "ligma": { s: 2, c: 3 }, // vulgar meme
    "ligmaballs": { s: 2, c: 3 }, // vulgar meme
    "mofo": { s: 2, c: 3 }, // motherfucker variant
    "ngr": { s: 2, c: 3 }, // abbreviated slur
    "omfg": { s: 2, c: 3 }, // oh my fucking god
    "smfh": { s: 2, c: 3 }, // shaking my fucking head
    "smh": { s: 2, c: 2 }, // shaking my head
    "sugma": { s: 2, c: 3 }, // vulgar meme
    "sugmaballs": { s: 2, c: 3 }, // vulgar meme
    "yomama": { s: 2, c: 3 }, // your mama insult
    "yo mama": { s: 2, c: 3 }, // your mama insult

    // Euphemistic spellings / filter evasion (additions)
    "a hole": { s: 3, c: 5 }, // spaced a-hole
    "a-hole": { s: 3, c: 5 }, // hyphenated
    "ahole": { s: 3, c: 5 }, // compound
    "a55": { s: 3, c: 5 }, // leet speak
    "a55hole": { s: 3, c: 5 }, // leet speak
    "azzhole": { s: 3, c: 5 }, // alternate spelling
    "b!tch": { s: 3, c: 5 }, // symbol substitution
    "b00bs": { s: 3, c: 5 }, // leet speak
    "b1atch": { s: 3, c: 5 }, // leet speak
    "beotch": { s: 3, c: 5 }, // phonetic variant
    "bi+ch": { s: 3, c: 5 }, // symbol substitution
    "cnt": { s: 5, c: 5 }, // consonants only
    "c0cks": { s: 3, c: 5 }, // leet speak
    "d!ck": { s: 3, c: 5 }, // symbol substitution
    "d!k": { s: 3, c: 5 }, // symbol substitution
    "f ck": { s: 3, c: 5 }, // spaced
    "f u c k": { s: 3, c: 5 }, // fully spaced
    "f-ck": { s: 3, c: 5 }, // hyphenated
    "f_ck": { s: 3, c: 5 }, // underscored
    "fawk": { s: 3, c: 5 }, // phonetic
    "fawking": { s: 3, c: 5 }, // phonetic
    "fkn": { s: 3, c: 5 }, // abbreviated
    "fku": { s: 3, c: 5 }, // abbreviated fuck you
    "fooking": { s: 3, c: 5 }, // dialectal
    "fookin": { s: 3, c: 5 }, // dialectal
    "friggin": { s: 2, c: 5 }, // euphemism
    "frkin": { s: 3, c: 5 }, // abbreviated
    "fudge": { s: 2, c: 5 }, // euphemism for fuck
    "fudger": { s: 2, c: 5 }, // euphemism
    "fvck": { s: 3, c: 5 }, // vowel swap
    "fvcking": { s: 3, c: 5 }, // vowel swap
    "h0e": { s: 5, c: 5 }, // leet speak
    "h0r": { s: 3, c: 5 }, // leet speak
    "ho3": { s: 3, c: 5 }, // leet speak
    "horsesh1t": { s: 3, c: 5 }, // leet speak
    "mfer": { s: 3, c: 5 }, // abbreviation
    "mfr": { s: 3, c: 5 }, // abbreviation
    "motha": { s: 3, c: 5 }, // truncated
    "mothaf": { s: 3, c: 5 }, // truncated
    "n1gga": { s: 3, c: 5 }, // leet speak
    "n1gger": { s: 5, c: 5 }, // leet speak
    "niqqer": { s: 3, c: 5 }, // character swap
    "niqqa": { s: 5, c: 5 }, // character swap
    "p0rn": { s: 3, c: 5 }, // leet speak
    "p1ss": { s: 3, c: 5 }, // leet speak
    "pr0n": { s: 3, c: 5 }, // leet speak for porn
    "pr1ck": { s: 3, c: 5 }, // leet speak
    "prik": { s: 3, c: 5 }, // alternate spelling
    "pu55y": { s: 3, c: 5 }, // leet speak
    "pussay": { s: 3, c: 5 }, // phonetic
    "puzzy": { s: 3, c: 5 }, // alternate spelling
    "pvssy": { s: 3, c: 5 }, // character swap
    "s h i t": { s: 3, c: 5 }, // fully spaced
    "sh!t": { s: 3, c: 5 }, // symbol substitution
    "sh!thead": { s: 3, c: 5 }, // symbol substitution
    "sk4nk": { s: 3, c: 5 }, // leet speak
    "sl00t": { s: 3, c: 5 }, // leet speak
    "sl0t": { s: 3, c: 5 }, // leet speak
    "slvt": { s: 3, c: 5 }, // character swap
    "tw4t": { s: 3, c: 5 }, // leet speak
    "w4nk": { s: 3, c: 5 }, // leet speak
    "wh0re": { s: 5, c: 5 }, // leet speak
    "wh0r": { s: 3, c: 5 }, // leet speak

    // Drug-related vulgar terms
    "crackhead": { s: 2, c: 3 }, // drug user insult
    "crackheads": { s: 2, c: 3 }, // plural
    "crackwhore": { s: 5, c: 4 }, // compound insult
    "methhead": { s: 2, c: 3 }, // drug user insult
    "methheads": { s: 2, c: 3 }, // plural
    "pothead": { s: 2, c: 3 }, // drug user insult
    "potheads": { s: 2, c: 3 }, // plural
    "stoner": { s: 2, c: 3 }, // drug user
    "stoners": { s: 2, c: 3 }, // plural
    "tweaker": { s: 2, c: 3 }, // drug user insult
    "tweakers": { s: 2, c: 3 }, // plural
    "junkie": { s: 2, c: 3 }, // drug user insult
    "junkies": { s: 2, c: 3 }, // plural
    "dopehead": { s: 2, c: 3 }, // drug user insult
    "dopeheads": { s: 2, c: 3 }, // plural
    "pillhead": { s: 2, c: 3 }, // drug user insult
    "acidhead": { s: 2, c: 3 }, // drug user insult
    "basehead": { s: 2, c: 3 }, // drug user insult
    "baseheads": { s: 2, c: 3 }, // plural
    "cokewhore": { s: 5, c: 4 }, // compound insult
    "cokehead": { s: 2, c: 3 }, // drug user insult
    "cokeheads": { s: 2, c: 3 }, // plural
    "druggie": { s: 2, c: 3 }, // drug user insult
    "druggies": { s: 2, c: 3 }, // plural

    // Violent/threatening terms
    "go die": { s: 5, c: 5 }, // threat
    "kill yourself": { s: 5, c: 5 }, // threat
    "killyourself": { s: 5, c: 5 }, // compound threat
    "killurself": { s: 5, c: 5 }, // abbreviated threat
    "neck yourself": { s: 5, c: 5 }, // threat
    "eat a bullet": { s: 5, c: 5 }, // violent threat
    "drink bleach": { s: 5, c: 5 }, // violent threat
    "drinkbleach": { s: 5, c: 5 }, // compound threat
    "hang yourself": { s: 5, c: 5 }, // violent threat
    "slit your wrists": { s: 5, c: 5 }, // violent threat
    "jump off a bridge": { s: 5, c: 5 }, // violent threat
    "end yourself": { s: 5, c: 5 }, // threat
    "off yourself": { s: 5, c: 5 }, // threat
    "unalive": { s: 2, c: 3 }, // euphemism for kill
    "unalive yourself": { s: 5, c: 5 }, // euphemism threat

    // Body part vulgarities and variations (additions)
    "ballsac": { s: 4, c: 5 }, // alternate spelling
    "balls": { s: 3, c: 4 }, // vulgar body reference
    "bawsack": { s: 4, c: 3 }, // dialectal
    "bigtits": { s: 4, c: 4 }, // compound
    "bollock": { s: 4, c: 3 }, // singular
    "bollox": { s: 4, c: 5 }, // alternate spelling
    "buttfuck": { s: 4, c: 5 }, // compound
    "buttfucker": { s: 4, c: 5 }, // compound
    "buttplug": { s: 4, c: 4 }, // sexual object
    "chesticles": { s: 4, c: 4 }, // slang portmanteau
    "choade": { s: 4, c: 5 }, // alternate spelling
    "chode": { s: 4, c: 4 }, // vulgar body reference
    "clunge": { s: 4, c: 4 }, // British vulgar
    "coochie": { s: 4, c: 4 }, // vulgar slang
    "coochy": { s: 4, c: 4 }, // vulgar slang
    "cooter": { s: 4, c: 4 }, // vulgar slang
    "gash": { s: 4, c: 4 }, // vulgar body reference
    "gonads": { s: 4, c: 4 }, // vulgar body reference
    "mooseknuckle": { s: 4, c: 4 }, // vulgar body reference
    "nadgers": { s: 4, c: 4 }, // British slang
    "nads": { s: 4, c: 4 }, // slang for gonads
    "nards": { s: 4, c: 4 }, // slang for gonads
    "phallus": { s: 4, c: 3 }, // penis reference
    "poonani": { s: 4, c: 4 }, // vulgar slang
    "pootang": { s: 4, c: 4 }, // vulgar slang
    "pube": { s: 4, c: 3 }, // singular
    "pudenda": { s: 4, c: 4 }, // vulgar body reference
    "teabag": { s: 4, c: 3 }, // sexual act
    "teabagging": { s: 4, c: 3 }, // sexual act
    "wang": { s: 4, c: 1 }, // vulgar body reference
    "weiner": { s: 4, c: 5 }, // alternate spelling
    "willy": { s: 4, c: 4 }, // British slang
    "wiener": { s: 4, c: 4 }, // vulgar body reference

    // Additional compound insults and vulgarity
    "arsetard": { s: 5, c: 4 }, // compound insult
    "assbrain": { s: 3, c: 4 }, // compound insult
    "assbreath": { s: 3, c: 4 }, // compound insult
    "asscheek": { s: 3, c: 4 }, // body reference
    "asscheeks": { s: 3, c: 4 }, // body reference
    "assface": { s: 3, c: 4 }, // compound insult
    "asshammer": { s: 3, c: 4 }, // compound insult
    "asshead": { s: 3, c: 4 }, // compound insult
    "asshopper": { s: 3, c: 4 }, // compound insult
    "assjockey": { s: 3, c: 4 }, // compound insult
    "asskisser": { s: 3, c: 4 }, // compound insult
    "assmonkey": { s: 3, c: 4 }, // compound insult
    "bitchwhore": { s: 3, c: 4 }, // compound insult
    "bollocking": { s: 3, c: 4 }, // British gerund
    "bumblefuck": { s: 3, c: 5 }, // compound
    "buttcrack": { s: 1, c: 4 }, // body reference
    "buttface": { s: 1, c: 4 }, // compound insult
    "butthead": { s: 1, c: 4 }, // compound insult
    "buttlicker": { s: 1, c: 4 }, // compound insult
    "buttmunch": { s: 1, c: 4 }, // compound insult
    "buttmuncher": { s: 1, c: 4 }, // compound insult
    "buttwipe": { s: 1, c: 4 }, // compound insult
    "choad": { s: 1, c: 4 }, // vulgar body reference
    "choadsmoker": { s: 1, c: 4 }, // compound insult
    "cockblock": { s: 4, c: 4 }, // compound
    "cockbreath": { s: 4, c: 4 }, // compound insult
    "cumsock": { s: 4, c: 5 }, // compound
    "cumwad": { s: 4, c: 5 }, // compound
    "cuntlapper": { s: 5, c: 5 }, // compound insult
    "cuntpuncher": { s: 5, c: 5 }, // compound insult
    "cuntwaffle": { s: 5, c: 5 }, // compound insult
    "damnit": { s: 2, c: 3 }, // mild profanity
    "dickbutt": { s: 4, c: 4 }, // compound insult
    "dickcheese": { s: 4, c: 4 }, // compound insult
    "dickjuice": { s: 4, c: 4 }, // compound
    "dicklick": { s: 4, c: 4 }, // compound
    "dickpull": { s: 4, c: 4 }, // compound
    "dicksnot": { s: 4, c: 4 }, // compound insult
    "dicksuck": { s: 4, c: 4 }, // compound
    "dillweed": { s: 1, c: 4 }, // insult
    "dongface": { s: 1, c: 4 }, // compound insult
    "douchelord": { s: 3, c: 4 }, // compound insult
    "douchewad": { s: 3, c: 4 }, // compound insult
    "felcher": { s: 1, c: 4 }, // sexual act reference
    "fucked": { s: 3, c: 5 }, // past tense
    "fuckheads": { s: 3, c: 5 }, // plural
    "fuckpile": { s: 3, c: 5 }, // compound insult
    "fucksicle": { s: 3, c: 5 }, // compound insult
    "gayfuck": { s: 3, c: 5 }, // compound insult
    "gayshit": { s: 3, c: 5 }, // compound insult
    "goddamned": { s: 1, c: 4 }, // profanity
    "hellhole": { s: 1, c: 4 }, // compound
    "hoebag": { s: 1, c: 4 }, // compound insult
    "horsefucker": { s: 3, c: 5 }, // compound insult
    "jagoff": { s: 1, c: 4 }, // regional insult
    "jizzball": { s: 4, c: 5 }, // compound insult
    "jizzbag": { s: 4, c: 5 }, // compound insult
    "jizzbreath": { s: 4, c: 5 }, // compound insult
    "jizzjar": { s: 4, c: 5 }, // compound insult
    "knobchops": { s: 3, c: 4 }, // compound insult
    "knobgoblin": { s: 3, c: 4 }, // compound insult
    "knobjockey": { s: 3, c: 4 }, // compound insult
    "knobrash": { s: 3, c: 4 }, // compound insult
    "manwhore": { s: 5, c: 4 }, // compound insult
    "meatflap": { s: 1, c: 4 }, // vulgar body reference
    "munter": { s: 1, c: 4 }, // British insult
    "nutjob": { s: 1, c: 4 }, // insult
    "peckerbrain": { s: 1, c: 4 }, // compound insult
    "peckerface": { s: 1, c: 4 }, // compound insult
    "penisbreath": { s: 1, c: 4 }, // compound insult
    "penisface": { s: 1, c: 4 }, // compound insult
    "penishead": { s: 1, c: 4 }, // compound insult
    "peniswrinkle": { s: 1, c: 4 }, // compound insult
    "pigfucker": { s: 3, c: 5 }, // compound insult
    "polesmoker": { s: 1, c: 4 }, // compound insult
    "poonhound": { s: 1, c: 4 }, // compound insult
    "prick": { s: 1, c: 4 }, // vulgar insult
    "pricks": { s: 1, c: 4 }, // plural
    "pricklick": { s: 1, c: 4 }, // compound insult
    "prickteaser": { s: 1, c: 4 }, // compound insult
    "prickweed": { s: 1, c: 4 }, // compound insult
    "scroat": { s: 1, c: 5 }, // alternate spelling
    "shitfucker": { s: 3, c: 5 }, // compound insult
    "shitgobbler": { s: 3, c: 5 }, // compound insult
    "shitlicker": { s: 3, c: 5 }, // compound insult
    "shitmuncher": { s: 3, c: 5 }, // compound insult
    "shitsucker": { s: 3, c: 5 }, // compound insult
    "slutmonger": { s: 3, c: 4 }, // compound insult
    "slutwhore": { s: 5, c: 4 }, // compound insult
    "snatchface": { s: 1, c: 4 }, // compound insult
    "sonnofabitch": { s: 3, c: 5 }, // alternate spelling
    "spunkbubble": { s: 1, c: 4 }, // compound insult
    "spunkface": { s: 1, c: 4 }, // compound insult
    "spunkmonkey": { s: 1, c: 4 }, // compound insult
    "spunkrat": { s: 1, c: 4 }, // compound insult
    "titfucker": { s: 3, c: 5 }, // compound insult
    "titlicker": { s: 4, c: 4 }, // compound insult
    "titsucker": { s: 4, c: 4 }, // compound insult
    "turdburgler": { s: 1, c: 4 }, // compound insult
    "turdburglar": { s: 1, c: 4 }, // compound insult
    "turdface": { s: 1, c: 4 }, // compound insult
    "twatburger": { s: 4, c: 4 }, // compound insult
    "twatgoblin": { s: 4, c: 4 }, // compound insult
    "twatlips": { s: 4, c: 4 }, // compound insult
    "twatmonger": { s: 4, c: 4 }, // compound insult
    "twatmuffin": { s: 4, c: 4 }, // compound insult
    "twatpuddle": { s: 4, c: 4 }, // compound insult
    "twatsicle": { s: 4, c: 4 }, // compound insult
    "twatsplat": { s: 4, c: 4 }, // compound insult
    "wankface": { s: 3, c: 4 }, // compound insult
    "wankpheasant": { s: 3, c: 4 }, // compound insult
    "wankpuffin": { s: 3, c: 4 }, // compound insult
    "wankshaft": { s: 3, c: 4 }, // compound insult
    "wanksock": { s: 3, c: 4 }, // compound insult
    "wankspot": { s: 3, c: 4 }, // compound insult
    "wanking": { s: 3, c: 4 }, // gerund

    // Ableist slurs
    "cripple": { s: 5, c: 4 }, // ableist slur
    "crippled": { s: 5, c: 4 }, // ableist slur
    "gimp": { s: 5, c: 4 }, // ableist slur
    "gimpy": { s: 5, c: 4 }, // ableist slur
    "moron": { s: 1, c: 4 }, // ableist insult
    "imbecile": { s: 5, c: 4 }, // ableist insult
    "retards": { s: 5, c: 5 }, // plural
    "retardation": { s: 5, c: 4 }, // ableist
    "spastic": { s: 5, c: 3 }, // ableist slur
    "spastics": { s: 5, c: 4 }, // plural
    "spazzy": { s: 5, c: 4 }, // ableist slur
    "tard": { s: 5, c: 4 }, // truncated slur
    "tards": { s: 5, c: 4 }, // plural
    "windowlicker": { s: 5, c: 4 }, // ableist slur
    "window licker": { s: 5, c: 5 }, // ableist slur

    // Religious/blasphemous
    "christfucker": { s: 3, c: 5 }, // blasphemous compound
    "goddam": { s: 2, c: 3 }, // blasphemous
    "jesusfuck": { s: 3, c: 5 }, // blasphemous compound
    "jesushchrist": { s: 2, c: 3 }, // blasphemous

    // Miscellaneous profanity
    "ballbreaker": { s: 3, c: 4 }, // compound insult
    "ballcrusher": { s: 3, c: 4 }, // compound insult
    "barfbag": { s: 3, c: 4 }, // insult
    "bastardface": { s: 5, c: 4 }, // compound insult
    "bumfuck": { s: 3, c: 5 }, // compound
    "bumfucker": { s: 3, c: 5 }, // compound
    "buttbandit": { s: 3, c: 4 }, // compound insult
    "buttbreath": { s: 3, c: 4 }, // compound insult
    "buttfucking": { s: 3, c: 5 }, // gerund
    "cocksplat": { s: 4, c: 4 }, // compound insult
    "cornholer": { s: 3, c: 4 }, // compound insult
    "crapfest": { s: 3, c: 4 }, // compound
    "crapola": { s: 3, c: 4 }, // slang
    "dicksplat": { s: 4, c: 4 }, // compound insult
    "dipwad": { s: 3, c: 4 }, // insult
    "dobber": { s: 3, c: 4 }, // Scottish/British insult
    "fartface": { s: 3, c: 4 }, // compound insult
    "fartknacker": { s: 3, c: 4 }, // compound insult
    "fartblossom": { s: 3, c: 4 }, // compound insult
    "gutter slut": { s: 3, c: 4 }, // compound insult
    "gutterslut": { s: 3, c: 4 }, // compound insult
    "jackwagon": { s: 3, c: 4 }, // compound insult
    "jizzgobbler": { s: 4, c: 5 }, // compound insult
    "knobnose": { s: 3, c: 4 }, // compound insult
    "knobrot": { s: 3, c: 4 }, // compound insult
    "knobshine": { s: 3, c: 4 }, // compound insult
    "pissant": { s: 3, c: 4 }, // compound insult
    "pissbucket": { s: 3, c: 4 }, // compound insult
    "pisser": { s: 3, c: 4 }, // insult
    "pissface": { s: 3, c: 4 }, // compound insult
    "pisspot": { s: 3, c: 4 }, // compound insult
    "putz": { s: 3, c: 4 }, // Yiddish insult
    "ratbag": { s: 3, c: 4 }, // insult
    "scrotum": { s: 3, c: 4 }, // vulgar body reference
    "shit stain": { s: 3, c: 5 }, // spaced variant
    "shitestain": { s: 3, c: 5 }, // compound insult
    "shitheel": { s: 3, c: 5 }, // compound insult
    "shitkicker": { s: 3, c: 5 }, // compound insult
    "shitpants": { s: 3, c: 5 }, // compound insult
    "skaghead": { s: 3, c: 4 }, // drug-related insult
    "slagbag": { s: 3, c: 4 }, // compound insult
    "snotface": { s: 3, c: 4 }, // compound insult
    "snotnose": { s: 3, c: 4 }, // compound insult
    "spunkjockey": { s: 3, c: 4 }, // compound insult
    "tossbag": { s: 3, c: 4 }, // compound insult
    "turdhead": { s: 3, c: 4 }, // compound insult
    "turdpile": { s: 3, c: 4 }, // compound
    "turds": { s: 3, c: 4 }, // plural
    "twattery": { s: 4, c: 4 }, // noun form
    "twatting": { s: 4, c: 4 }, // gerund
    "wankbucket": { s: 3, c: 4 }, // compound insult

    // ===== LEETSPEAK & CHARACTER SUBSTITUTION EVASIONS =====

    // Fuck - leetspeak and symbol substitutions
    "f*ck": { s: 3, c: 5 }, // asterisk substitution
    "f**k": { s: 3, c: 5 }, // double asterisk
    "fu*k": { s: 3, c: 5 }, // asterisk in middle
    "f.u.c.k": { s: 3, c: 5 }, // dotted
    "f-u-c-k": { s: 3, c: 5 }, // hyphenated
    "f_u_c_k": { s: 3, c: 5 }, // underscored
    "f*u*c*k": { s: 3, c: 5 }, // asterisk separated
    "f.uck": { s: 3, c: 5 }, // partial dot
    "fu.ck": { s: 3, c: 5 }, // partial dot
    "fuc.k": { s: 3, c: 5 }, // partial dot
    "f-uck": { s: 3, c: 5 }, // partial hyphen
    "fu-ck": { s: 3, c: 5 }, // partial hyphen
    "fuc-k": { s: 3, c: 5 }, // partial hyphen
    "f_uck": { s: 3, c: 5 }, // partial underscore
    "fu_ck": { s: 3, c: 5 }, // partial underscore
    "fuc_k": { s: 3, c: 5 }, // partial underscore
    "fucc": { s: 3, c: 5 }, // double c evasion
    "fukk": { s: 3, c: 5 }, // double k evasion
    "fukkk": { s: 3, c: 5 }, // triple k evasion
    "phukk": { s: 3, c: 5 }, // ph + double k
    "phucc": { s: 3, c: 5 }, // ph + double c
    "phuq": { s: 3, c: 5 }, // ph + q evasion
    "phk": { s: 3, c: 5 }, // abbreviated ph
    "frick": { s: 2, c: 5 }, // euphemistic evasion
    "frig": { s: 2, c: 5 }, // euphemistic evasion
    "fak": { s: 3, c: 5 }, // phonetic evasion
    "fak3": { s: 3, c: 5 }, // phonetic + leet
    "fukc": { s: 3, c: 5 }, // transposed
    "fuqq": { s: 3, c: 5 }, // double q evasion
    "f0ck": { s: 3, c: 5 }, // zero substitution
    "fvk": { s: 3, c: 5 }, // vowel swap abbreviated
    "fuhk": { s: 3, c: 5 }, // phonetic spelling
    "fahk": { s: 3, c: 5 }, // phonetic spelling
    "fux0r": { s: 3, c: 5 }, // leet speak variant
    "f4ck": { s: 3, c: 5 }, // number substitution
    "fu(k": { s: 3, c: 5 }, // parenthesis evasion
    "fü ck": { s: 3, c: 5 }, // umlaut + space
    "fück": { s: 3, c: 5 }, // umlaut evasion
    "fùck": { s: 3, c: 5 }, // grave accent evasion
    "fûck": { s: 3, c: 5 }, // circumflex evasion
    "fúck": { s: 3, c: 5 }, // acute accent evasion
    "fụck": { s: 3, c: 5 }, // underdot evasion
    "fưck": { s: 3, c: 5 }, // horn accent evasion

    // Shit - leetspeak and symbol substitutions
    "sh*t": { s: 3, c: 5 }, // asterisk substitution
    "s.h.i.t": { s: 3, c: 5 }, // dotted
    "s-h-i-t": { s: 3, c: 5 }, // hyphenated
    "s_h_i_t": { s: 3, c: 5 }, // underscored
    "s*h*i*t": { s: 3, c: 5 }, // asterisk separated
    "$hit": { s: 3, c: 5 }, // dollar sign substitution
    "$h!t": { s: 3, c: 5 }, // dollar + exclamation
    "$h1t": { s: 3, c: 5 }, // dollar + number
    "shi+": { s: 3, c: 5 }, // plus sign substitution
    "sh17": { s: 3, c: 5 }, // full leet
    "5hit": { s: 3, c: 5 }, // number substitution
    "5h1t": { s: 3, c: 5 }, // full number substitution
    "5h!t": { s: 3, c: 5 }, // number + symbol
    "sh1te": { s: 3, c: 5 }, // leet variant
    "shyt3": { s: 3, c: 5 }, // alternate + leet
    "shiit3": { s: 3, c: 5 }, // elongated + leet
    "sh!tty": { s: 3, c: 5 }, // symbol + adjective
    "sh!tstain": { s: 3, c: 5 }, // symbol in compound
    "sh!thole": { s: 3, c: 5 }, // symbol in compound
    "sh!tface": { s: 3, c: 5 }, // symbol in compound
    "$hitty": { s: 3, c: 5 }, // dollar in adjective
    "$hithole": { s: 3, c: 5 }, // dollar in compound
    "$hithead": { s: 3, c: 5 }, // dollar in compound
    "$hitface": { s: 3, c: 5 }, // dollar in compound
    "$hitstain": { s: 3, c: 5 }, // dollar in compound
    "s.hit": { s: 3, c: 5 }, // partial dot
    "sh.it": { s: 3, c: 5 }, // partial dot
    "shi.t": { s: 3, c: 5 }, // partial dot

    // Bitch - leetspeak and symbol substitutions
    "b*tch": { s: 3, c: 5 }, // asterisk substitution
    "b.i.t.c.h": { s: 3, c: 5 }, // dotted
    "b-i-t-c-h": { s: 3, c: 5 }, // hyphenated
    "b_i_t_c_h": { s: 3, c: 5 }, // underscored
    "b!+ch": { s: 3, c: 5 }, // symbol substitution
    "b17ch": { s: 3, c: 5 }, // leet speak
    "b1+ch": { s: 3, c: 5 }, // leet + symbol
    "bytch": { s: 3, c: 5 }, // y substitution
    "bych": { s: 3, c: 5 }, // abbreviated
    "bich": { s: 3, c: 5 }, // abbreviated
    "bltch": { s: 3, c: 5 }, // l substitution
    "b!tches": { s: 3, c: 5 }, // symbol + plural
    "b1tches": { s: 3, c: 5 }, // leet + plural

    // Cunt - leetspeak and symbol substitutions
    "c*nt": { s: 3, c: 5 }, // asterisk substitution
    "c.u.n.t": { s: 3, c: 5 }, // dotted
    "c-u-n-t": { s: 3, c: 5 }, // hyphenated
    "c_u_n_t": { s: 3, c: 5 }, // underscored
    "cvnt": { s: 3, c: 5 }, // v substitution
    "kunt": { s: 5, c: 5 }, // k substitution
    "kunts": { s: 3, c: 5 }, // k substitution plural
    "kunte": { s: 3, c: 5 }, // k substitution variant
    "cnut": { s: 3, c: 5 }, // transposed
    "c*nts": { s: 3, c: 5 }, // asterisk + plural
    "cvnts": { s: 3, c: 5 }, // v substitution + plural
    "cuntz": { s: 5, c: 5 }, // z substitution
    "cun+": { s: 3, c: 5 }, // plus substitution

    // Ass - leetspeak and symbol substitutions
    "@ss": { s: 3, c: 5 }, // at sign substitution
    "@$$": { s: 3, c: 5 }, // at + dollar signs
    "a$s": { s: 3, c: 5 }, // partial dollar sign
    "@s$": { s: 3, c: 5 }, // mixed symbols
    "@$s": { s: 3, c: 5 }, // mixed symbols
    "a.s.s": { s: 3, c: 5 }, // dotted
    "a-s-s": { s: 3, c: 5 }, // hyphenated
    "a_s_s": { s: 3, c: 5 }, // underscored
    "@sshole": { s: 3, c: 5 }, // at sign compound
    "@$$hole": { s: 3, c: 5 }, // at + dollar compound
    "a$$hole": { s: 3, c: 5 }, // dollar compound
    "@sswipe": { s: 3, c: 5 }, // at sign compound
    "a$$wipe": { s: 3, c: 5 }, // dollar compound

    // Nigger - leetspeak and symbol substitutions
    "n*gger": { s: 3, c: 5 }, // asterisk substitution
    "n*gga": { s: 3, c: 5 }, // asterisk substitution
    "n!gger": { s: 3, c: 5 }, // exclamation substitution
    "n!gga": { s: 3, c: 5 }, // exclamation substitution
    "nigg3r": { s: 5, c: 5 }, // leet speak
    "n1gg3r": { s: 3, c: 5 }, // full leet
    "n!gg3r": { s: 3, c: 5 }, // symbol + leet
    "n.i.g.g.e.r": { s: 3, c: 5 }, // dotted
    "n-i-g-g-e-r": { s: 3, c: 5 }, // hyphenated
    "n_i_g_g_e_r": { s: 3, c: 5 }, // underscored
    "n1g": { s: 3, c: 5 }, // abbreviated leet
    "n!g": { s: 3, c: 5 }, // abbreviated symbol
    "nigg": { s: 3, c: 5 }, // truncated
    "nigz": { s: 3, c: 5 }, // z substitution
    "niggz": { s: 3, c: 5 }, // z substitution
    "n1ggaz": { s: 3, c: 5 }, // leet variant
    "nigg4": { s: 3, c: 5 }, // leet variant
    "nigg4h": { s: 3, c: 5 }, // leet variant
    "nigg4z": { s: 3, c: 5 }, // leet variant
    "n1664": { s: 3, c: 5 }, // full number substitution
    "nlgger": { s: 3, c: 5 }, // l substitution
    "nlgga": { s: 3, c: 5 }, // l substitution
    "n*ggers": { s: 3, c: 5 }, // asterisk + plural
    "n1ggers": { s: 3, c: 5 }, // leet + plural
    "n!ggers": { s: 3, c: 5 }, // symbol + plural
    "nigg3rs": { s: 3, c: 5 }, // leet + plural

    // Cock - leetspeak and symbol substitutions
    "c*ck": { s: 3, c: 5 }, // asterisk substitution
    "c.o.c.k": { s: 3, c: 5 }, // dotted
    "c-o-c-k": { s: 3, c: 5 }, // hyphenated
    "c_o_c_k": { s: 3, c: 5 }, // underscored
    "c0cksucker": { s: 3, c: 5 }, // leet compound
    "c*cksucker": { s: 3, c: 5 }, // asterisk compound
    "cocc": { s: 3, c: 5 }, // double c evasion
    "kocc": { s: 3, c: 5 }, // k + double c
    "kok": { s: 3, c: 5 }, // phonetic
    "kock": { s: 3, c: 5 }, // k substitution
    "k0ck": { s: 3, c: 5 }, // k + zero

    // Dick - leetspeak and symbol substitutions
    "d*ck": { s: 3, c: 5 }, // asterisk substitution
    "d.i.c.k": { s: 3, c: 5 }, // dotted
    "d-i-c-k": { s: 3, c: 5 }, // hyphenated
    "d_i_c_k": { s: 3, c: 5 }, // underscored
    "d!ckhead": { s: 3, c: 5 }, // symbol compound
    "d1ckhead": { s: 3, c: 5 }, // leet compound
    "d!cksucker": { s: 3, c: 5 }, // symbol compound
    "d1cksucker": { s: 3, c: 5 }, // leet compound
    "dicc": { s: 3, c: 5 }, // double c evasion
    "dikk": { s: 3, c: 5 }, // double k evasion
    "diq": { s: 3, c: 5 }, // q substitution
    "diqq": { s: 3, c: 5 }, // double q

    // Pussy - leetspeak and symbol substitutions
    "p*ssy": { s: 3, c: 5 }, // asterisk substitution
    "pu$$y": { s: 3, c: 5 }, // dollar substitution - already exists context
    "pu5sy": { s: 3, c: 5 }, // number substitution
    "pus$y": { s: 3, c: 5 }, // partial dollar
    "pu$$ies": { s: 3, c: 5 }, // dollar + plural
    "pu$$": { s: 3, c: 5 }, // truncated dollar
    "p.u.s.s.y": { s: 3, c: 5 }, // dotted
    "p-u-s-s-y": { s: 3, c: 5 }, // hyphenated
    "p_u_s_s_y": { s: 3, c: 5 }, // underscored
    "pvssi": { s: 3, c: 5 }, // v + i substitution
    "pvss1": { s: 3, c: 5 }, // v + number
    "pu22y": { s: 3, c: 5 }, // number substitution
    "puzz1": { s: 3, c: 5 }, // z + number

    // Whore - leetspeak and symbol substitutions
    "wh*re": { s: 3, c: 5 }, // asterisk substitution
    "wh0r3": { s: 3, c: 5 }, // full leet
    "w.h.o.r.e": { s: 3, c: 5 }, // dotted
    "w-h-o-r-e": { s: 3, c: 5 }, // hyphenated
    "w_h_o_r_e": { s: 3, c: 5 }, // underscored
    "wh0res": { s: 3, c: 5 }, // leet plural
    "whor3": { s: 3, c: 5 }, // partial leet
    "wh*res": { s: 3, c: 5 }, // asterisk plural
    "whoar": { s: 3, c: 5 }, // phonetic
    "hoar": { s: 3, c: 5 }, // archaic/phonetic
    "wore": { s: 3, c: 5 }, // deliberate misspelling

    // Slut - leetspeak and symbol substitutions
    "s1ut": { s: 3, c: 5 }, // leet
    "$lut": { s: 3, c: 5 }, // dollar substitution
    "$l00t": { s: 3, c: 5 }, // dollar + leet
    "s.l.u.t": { s: 3, c: 5 }, // dotted
    "s-l-u-t": { s: 3, c: 5 }, // hyphenated
    "s_l_u_t": { s: 3, c: 5 }, // underscored
    "$lutty": { s: 3, c: 5 }, // dollar + adjective
    "sl*t": { s: 3, c: 5 }, // asterisk substitution
    "slvts": { s: 3, c: 5 }, // v + plural

    // Faggot - leetspeak and symbol substitutions
    "f*ggot": { s: 3, c: 5 }, // asterisk substitution
    "f4ggot": { s: 3, c: 5 }, // number substitution
    "f4g": { s: 3, c: 5 }, // number substitution
    "f@g": { s: 3, c: 5 }, // at sign substitution
    "f@ggot": { s: 3, c: 5 }, // at sign substitution
    "f@gs": { s: 3, c: 5 }, // at sign + plural
    "f.a.g": { s: 3, c: 5 }, // dotted
    "f-a-g": { s: 3, c: 5 }, // hyphenated
    "f4gg0t": { s: 3, c: 5 }, // full leet
    "fagg0t": { s: 5, c: 5 }, // partial leet
    "f@gg0t": { s: 3, c: 5 }, // symbol + leet
    "phaggot": { s: 3, c: 5 }, // ph substitution
    "phag": { s: 3, c: 5 }, // ph substitution
    "faget": { s: 5, c: 5 }, // misspelling
    "fagit": { s: 5, c: 5 }, // misspelling
    "faggit": { s: 5, c: 5 }, // misspelling
    "fagget": { s: 5, c: 5 }, // misspelling
    "faqqot": { s: 3, c: 5 }, // q substitution

    // ===== HOMOGLYPH / UNICODE EVASIONS =====
    // Cyrillic and Greek lookalike substitutions

    // Fuck with Cyrillic/Greek chars
    "fuсk": { s: 3, c: 4 }, // Cyrillic с (es) for c
    "fuϲk": { s: 3, c: 4 }, // Greek small lunate sigma for c
    "fυck": { s: 3, c: 4 }, // Greek upsilon for u
    "fμck": { s: 3, c: 4 }, // Greek mu for u
    "fuсks": { s: 3, c: 4 }, // Cyrillic с + plural
    "fuсking": { s: 3, c: 4 }, // Cyrillic с + gerund
    "fuckіng": { s: 3, c: 5 }, // Cyrillic і for i

    // Shit with Cyrillic/Greek chars
    "shіt": { s: 3, c: 4 }, // Cyrillic і for i
    "shіts": { s: 3, c: 4 }, // Cyrillic і + plural
    "shіtty": { s: 3, c: 4 }, // Cyrillic і + adjective
    "ѕhit": { s: 3, c: 4 }, // Cyrillic ѕ for s
    "shіthead": { s: 3, c: 4 }, // Cyrillic і + compound

    // Bitch with Cyrillic/Greek chars
    "bіtch": { s: 3, c: 4 }, // Cyrillic і for i
    "bіtches": { s: 3, c: 4 }, // Cyrillic і + plural
    "bitсh": { s: 3, c: 4 }, // Cyrillic с for c

    // Ass with Cyrillic/Greek chars
    "аss": { s: 3, c: 4 }, // Cyrillic а for a
    "аsshole": { s: 3, c: 4 }, // Cyrillic а + compound
    "аsswipe": { s: 3, c: 4 }, // Cyrillic а + compound

    // Nigger with Cyrillic/Greek chars
    "nіgger": { s: 3, c: 4 }, // Cyrillic і for i
    "nіgga": { s: 3, c: 4 }, // Cyrillic і for i
    "niggеr": { s: 3, c: 4 }, // Cyrillic е for e
    "nіggеr": { s: 3, c: 4 }, // Cyrillic і + е

    // Cunt with Cyrillic/Greek chars
    "сunt": { s: 3, c: 4 }, // Cyrillic с for c
    "сunts": { s: 3, c: 4 }, // Cyrillic с + plural

    // Cock with Cyrillic/Greek chars
    "сock": { s: 3, c: 4 }, // Cyrillic с for c
    "соck": { s: 3, c: 4 }, // Cyrillic с + о
    "сосk": { s: 3, c: 4 }, // full Cyrillic с and о

    // Dick with Cyrillic/Greek chars
    "dіck": { s: 3, c: 4 }, // Cyrillic і for i
    "dісk": { s: 3, c: 4 }, // Cyrillic і + с

    // Pussy with Cyrillic/Greek chars
    "рussy": { s: 3, c: 4 }, // Cyrillic р for p
    "рussу": { s: 3, c: 4 }, // Cyrillic р + у

    // Whore with Cyrillic/Greek chars
    "whоre": { s: 3, c: 4 }, // Cyrillic о for o
    "whоres": { s: 3, c: 4 }, // Cyrillic о + plural

    // ===== SPACING / SEPARATOR EVASIONS =====

    // Already have "f u c k", adding remaining major words
    "b i t c h": { s: 3, c: 5 }, // fully spaced
    "c u n t": { s: 3, c: 5 }, // fully spaced
    "a s s": { s: 3, c: 5 }, // fully spaced
    "d i c k": { s: 3, c: 5 }, // fully spaced
    "c o c k": { s: 3, c: 5 }, // fully spaced
    "p u s s y": { s: 3, c: 5 }, // fully spaced
    "w h o r e": { s: 3, c: 5 }, // fully spaced
    "n i g g e r": { s: 3, c: 5 }, // fully spaced
    "n i g g a": { s: 3, c: 5 }, // fully spaced
    "f a g": { s: 3, c: 5 }, // fully spaced
    "f a g g o t": { s: 3, c: 5 }, // fully spaced
    "s l u t": { s: 3, c: 5 }, // fully spaced

    // ===== COMMON INTENTIONAL MISSPELLINGS =====

    // Fuck misspellings
    "fawkin": { s: 3, c: 5 }, // phonetic gerund
    "fyck": { s: 3, c: 5 }, // vowel swap
    "feck off": { s: 3, c: 5 }, // Irish compound
    "fook": { s: 3, c: 5 }, // dialectal
    "foook": { s: 3, c: 5 }, // elongated
    "fuuuck": { s: 3, c: 5 }, // elongated
    "fuuuuck": { s: 3, c: 5 }, // elongated
    "fffuck": { s: 3, c: 5 }, // repeated consonant
    "fuhck": { s: 3, c: 5 }, // inserted h
    "phux": { s: 3, c: 5 }, // ph + x
    "phux0r": { s: 3, c: 5 }, // leet ph variant
    "fux0red": { s: 3, c: 5 }, // leet past tense
    "fuckkkk": { s: 3, c: 5 }, // elongated k
    "fuuuuk": { s: 3, c: 5 }, // elongated u + k
    "f00k": { s: 3, c: 5 }, // zero substitution
    "fuq off": { s: 3, c: 5 }, // phonetic compound
    "fuqoff": { s: 3, c: 5 }, // phonetic compound
    "fuqyou": { s: 3, c: 5 }, // phonetic compound
    "phuckoff": { s: 3, c: 5 }, // ph compound
    "phuckyou": { s: 3, c: 5 }, // ph compound

    // Shit misspellings
    "shyte": { s: 3, c: 5 }, // y substitution
    "shiite": { s: 3, c: 5 }, // elongated i
    "sheit": { s: 3, c: 5 }, // German-influenced
    "chit": { s: 3, c: 5 }, // deliberate
    "sheeit": { s: 3, c: 5 }, // elongated
    "sheeeit": { s: 3, c: 5 }, // elongated
    "shiznit": { s: 3, c: 5 }, // slang variant
    "shiznitz": { s: 3, c: 5 }, // slang variant
    "shizz": { s: 3, c: 5 }, // slang variant
    "shat": { s: 3, c: 5 }, // past tense
    "chitty": { s: 3, c: 5 }, // deliberate misspelling

    // Bitch misspellings
    "beatch": { s: 3, c: 5 }, // phonetic
    "biach": { s: 3, c: 5 }, // phonetic
    "beeyatch": { s: 3, c: 5 }, // phonetic elongated
    "beeatch": { s: 3, c: 5 }, // phonetic elongated
    "bioch": { s: 3, c: 5 }, // phonetic
    "byatch": { s: 3, c: 5 }, // y substitution
    "biznatch": { s: 3, c: 5 }, // slang variant
    "biznitch": { s: 3, c: 5 }, // slang variant
    "beyatch": { s: 3, c: 5 }, // phonetic
    "biatches": { s: 3, c: 5 }, // phonetic plural
    "bitchez": { s: 3, c: 5 }, // z substitution
    "bitchz": { s: 3, c: 5 }, // z ending
    "bixch": { s: 3, c: 5 }, // x substitution

    // Ass misspellings
    "azs": { s: 3, c: 5 }, // z substitution
    "ase": { s: 3, c: 5 }, // misspelling
    "aarse": { s: 3, c: 5 }, // elongated
    "aaass": { s: 3, c: 5 }, // elongated
    "a5s": { s: 3, c: 5 }, // number substitution
    "as5": { s: 3, c: 5 }, // number substitution

    // Cunt misspellings
    "cuht": { s: 3, c: 5 }, // phonetic
    "kuntz": { s: 3, c: 5 }, // k + z
    "koont": { s: 3, c: 5 }, // phonetic
    "kuhnt": { s: 3, c: 5 }, // phonetic

    // Dick misspellings
    "deek": { s: 3, c: 5 }, // phonetic
    "dyck": { s: 3, c: 5 }, // y substitution
    "dyk": { s: 3, c: 5 }, // y substitution short

    // ===== MORE COMPOUND WORDS AND PHRASES =====

    // Fuck phrases
    "fuckthis": { s: 3, c: 5 }, // compound phrase
    "fuckthat": { s: 3, c: 5 }, // compound phrase
    "fuckall": { s: 3, c: 5 }, // compound phrase
    "fuckit": { s: 3, c: 5 }, // compound phrase
    "fuckme": { s: 3, c: 5 }, // compound phrase
    "fuckher": { s: 3, c: 5 }, // compound phrase
    "fuckhim": { s: 3, c: 5 }, // compound phrase
    "fuckem": { s: 3, c: 5 }, // compound phrase
    "fuckthem": { s: 3, c: 5 }, // compound phrase
    "fuckeverything": { s: 3, c: 5 }, // compound phrase
    "fucklife": { s: 3, c: 5 }, // compound phrase
    "fuckyourself": { s: 3, c: 5 }, // compound phrase
    "gofuckyourself": { s: 3, c: 5 }, // compound phrase
    "shutthefuckup": { s: 3, c: 5 }, // compound phrase
    "whatthef": { s: 3, c: 4 }, // truncated compound
    "holy fuck": { s: 3, c: 5 }, // exclamatory phrase
    "holyfuck": { s: 3, c: 5 }, // compound exclamatory
    "fuckno": { s: 3, c: 5 }, // compound phrase
    "fuckyes": { s: 3, c: 5 }, // compound phrase
    "fuck this": { s: 3, c: 5 }, // spaced phrase
    "fuck that": { s: 3, c: 5 }, // spaced phrase
    "fuck it": { s: 3, c: 5 }, // spaced phrase
    "fuck me": { s: 3, c: 5 }, // spaced phrase
    "fuck him": { s: 3, c: 5 }, // spaced phrase
    "fuck her": { s: 3, c: 5 }, // spaced phrase
    "fuck em": { s: 3, c: 5 }, // spaced phrase
    "fuck them": { s: 3, c: 5 }, // spaced phrase
    "fuck everything": { s: 3, c: 5 }, // spaced phrase
    "fuck life": { s: 3, c: 5 }, // spaced phrase
    "fuck yourself": { s: 3, c: 5 }, // spaced phrase
    "shut the fuck up": { s: 3, c: 5 }, // spaced phrase

    // Shit phrases
    "holyshit": { s: 3, c: 5 }, // compound phrase
    "holy shit": { s: 3, c: 5 }, // spaced phrase
    "ohshit": { s: 3, c: 5 }, // compound phrase
    "oh shit": { s: 3, c: 5 }, // spaced phrase
    "noshit": { s: 3, c: 5 }, // compound phrase
    "no shit": { s: 3, c: 5 }, // spaced phrase
    "fullofshit": { s: 3, c: 5 }, // compound phrase
    "full of shit": { s: 3, c: 5 }, // spaced phrase
    "eatshit": { s: 3, c: 5 }, // compound phrase
    "shittalker": { s: 3, c: 5 }, // compound
    "shittalking": { s: 3, c: 5 }, // compound
    "shit talker": { s: 3, c: 5 }, // spaced
    "shit talking": { s: 3, c: 5 }, // spaced
    "apeshit crazy": { s: 3, c: 5 }, // compound phrase
    "batshit crazy": { s: 3, c: 5 }, // compound phrase

    // Bitch phrases
    "dumb bitch": { s: 3, c: 5 }, // spaced
    "stupidbitch": { s: 3, c: 4 }, // compound
    "stupid bitch": { s: 3, c: 5 }, // spaced
    "crazybitch": { s: 3, c: 4 }, // compound
    "crazy bitch": { s: 3, c: 5 }, // spaced
    "littlebitch": { s: 3, c: 4 }, // compound
    "little bitch": { s: 3, c: 5 }, // spaced
    "bitchplease": { s: 3, c: 4 }, // compound
    "bitch please": { s: 3, c: 5 }, // spaced
    "bitch ass": { s: 3, c: 5 }, // spaced

    // Ass phrases
    "eatmyass": { s: 3, c: 4 }, // compound phrase
    "eat my ass": { s: 3, c: 5 }, // spaced phrase
    "kissmyass": { s: 3, c: 4 }, // compound phrase
    "lickmyass": { s: 3, c: 4 }, // compound phrase
    "lick my ass": { s: 3, c: 5 }, // spaced phrase
    "up your ass": { s: 3, c: 5 }, // spaced phrase
    "upyourass": { s: 3, c: 4 }, // compound phrase
    "shove it up your ass": { s: 3, c: 4 }, // full phrase
    "stick it up your ass": { s: 3, c: 4 }, // full phrase

    // Dick phrases
    "suckmydick": { s: 4, c: 4 }, // compound phrase
    "suck my cock": { s: 4, c: 5 }, // spaced phrase
    "suckmycock": { s: 4, c: 4 }, // compound phrase
    "eatadick": { s: 4, c: 4 }, // compound phrase
    "suckadick": { s: 4, c: 4 }, // compound phrase
    "suck a dick": { s: 4, c: 5 }, // spaced phrase

    // Mixed vulgar phrases
    "bite me": { s: 3, c: 4 }, // aggressive phrase
    "biteme": { s: 3, c: 4 }, // compound
    "blowme": { s: 3, c: 4 }, // compound
    "screw you": { s: 3, c: 4 }, // aggressive phrase
    "screwyou": { s: 3, c: 4 }, // compound
    "screw off": { s: 3, c: 4 }, // aggressive phrase
    "screwoff": { s: 3, c: 4 }, // compound
    "piss on you": { s: 3, c: 4 }, // aggressive phrase
    "pissonyou": { s: 3, c: 4 }, // compound
    "youreacunt": { s: 5, c: 5 }, // compound phrase
    "youre a cunt": { s: 5, c: 5 }, // spaced phrase
    "youre a bitch": { s: 3, c: 5 }, // spaced phrase
    "youreabitch": { s: 3, c: 4 }, // compound phrase
    "die in a fire": { s: 3, c: 4 }, // aggressive phrase
    "dieinafire": { s: 3, c: 4 }, // compound
    "eat dirt": { s: 3, c: 4 }, // aggressive phrase
    "get bent": { s: 3, c: 4 }, // aggressive phrase
    "getbent": { s: 3, c: 4 }, // compound
    "up yours": { s: 3, c: 4 }, // aggressive phrase
    "upyours": { s: 3, c: 4 }, // compound
    "go screw yourself": { s: 3, c: 4 }, // aggressive phrase
    "sod you": { s: 3, c: 4 }, // British aggressive
    "bugger off": { s: 3, c: 4 }, // British aggressive
    "buggeroff": { s: 3, c: 4 }, // compound
    "bollocks to you": { s: 3, c: 4 }, // British aggressive

    // ===== ADDITIONAL SLUR VARIATIONS =====

    // N-word extended variations
    "n1g nog": { s: 3, c: 5 }, // leet slur
    "nig nog": { s: 3, c: 4 }, // slur compound
    "nignог": { s: 3, c: 4 }, // Cyrillic о variant
    "niggardly": { s: 5, c: 5 }, // near-homophone (controversial)
    "nigglet": { s: 3, c: 4 }, // diminutive slur
    "jiggaboos": { s: 3, c: 4 }, // plural
    "nignog": { s: 3, c: 4 }, // compound slur

    // Homophobic extended variations
    "battyboy": { s: 5, c: 4 }, // homophobic
    "batty boy": { s: 5, c: 5 }, // homophobic spaced
    "battyman": { s: 5, c: 4 }, // homophobic
    "batty man": { s: 5, c: 5 }, // homophobic spaced
    "chi chi man": { s: 5, c: 4 }, // homophobic
    "chichiman": { s: 5, c: 4 }, // homophobic compound
    "fudge packer": { s: 5, c: 5 }, // spaced
    "fudgepackers": { s: 5, c: 4 }, // plural
    "uphill gardener": { s: 2, c: 3 }, // homophobic euphemism
    "uphillgardener": { s: 5, c: 4 }, // compound
    "bender": { s: 5, c: 4 }, // British homophobic
    "benders": { s: 5, c: 4 }, // plural
    "bent": { s: 5, c: 4 }, // British homophobic
    "buftie": { s: 5, c: 4 }, // Scottish homophobic
    "bufty": { s: 5, c: 4 }, // Scottish homophobic
    "woofter": { s: 5, c: 4 }, // British homophobic
    "wooftah": { s: 5, c: 4 }, // British homophobic

    // Racial slur extended variations
    "ch1nk": { s: 5, c: 5 }, // leet
    "ch!nk": { s: 5, c: 5 }, // symbol
    "ch!nks": { s: 5, c: 5 }, // symbol plural
    "g00k": { s: 5, c: 5 }, // leet
    "g0ok": { s: 5, c: 5 }, // partial leet
    "k!ke": { s: 5, c: 5 }, // symbol
    "k1ke": { s: 5, c: 5 }, // leet
    "k1kes": { s: 5, c: 5 }, // leet plural
    "sp!c": { s: 5, c: 5 }, // symbol
    "sp!ck": { s: 5, c: 5 }, // symbol
    "sp1c": { s: 5, c: 5 }, // leet
    "w3tback": { s: 5, c: 5 }, // leet
    "w3tbacks": { s: 5, c: 5 }, // leet plural
    "b3aner": { s: 5, c: 5 }, // leet
    "b3aners": { s: 5, c: 5 }, // leet plural
    "crakka": { s: 5, c: 5 }, // alternate spelling
    "cracka": { s: 5, c: 5 }, // alternate spelling
    "cr@cker": { s: 5, c: 5 }, // symbol
    "p@ki": { s: 5, c: 5 }, // symbol
    "p@kis": { s: 5, c: 5 }, // symbol plural
    "p4ki": { s: 5, c: 5 }, // leet
    "p4kis": { s: 5, c: 5 }, // leet plural
    "r3dskin": { s: 5, c: 5 }, // leet
    "t0welhead": { s: 5, c: 5 }, // leet
    "r4ghead": { s: 5, c: 5 }, // leet
    "c00n": { s: 5, c: 5 }, // leet
    "c0on": { s: 5, c: 5 }, // partial leet
    "c00ns": { s: 5, c: 5 }, // leet plural
    "j!gaboo": { s: 5, c: 5 }, // symbol
    "j1gaboo": { s: 5, c: 5 }, // leet

    // Transphobic slurs
    "trannies": { s: 5, c: 5 }, // plural
    "heshe": { s: 5, c: 5 }, // transphobic compound
    "he-she": { s: 5, c: 5 }, // transphobic hyphenated
    "shemales": { s: 5, c: 4 }, // plural
    "ladyboy": { s: 5, c: 5 }, // derogatory
    "ladyboys": { s: 5, c: 5 }, // plural

    // ===== ADDITIONAL FILTER EVASION PATTERNS =====

    // Words with repeating characters (elongation evasion)
    "fuuuuuck": { s: 3, c: 5 }, // extra elongated
    "shiiit": { s: 3, c: 5 }, // elongated i
    "shiiiiit": { s: 3, c: 5 }, // extra elongated
    "biiiitch": { s: 3, c: 5 }, // elongated i
    "assssss": { s: 3, c: 5 }, // elongated s
    "diiick": { s: 3, c: 5 }, // elongated i
    "cuuunt": { s: 3, c: 5 }, // elongated u
    "niggger": { s: 3, c: 5 }, // elongated g
    "faaag": { s: 3, c: 5 }, // elongated a
    "sluuut": { s: 3, c: 5 }, // elongated u
    "coooock": { s: 3, c: 5 }, // elongated o

    // Words with inserted characters (padding evasion)
    "b.itch": { s: 3, c: 5 }, // inserted dot
    "bi.tch": { s: 3, c: 5 }, // inserted dot
    "c.unt": { s: 3, c: 5 }, // inserted dot
    "cu.nt": { s: 3, c: 5 }, // inserted dot
    "a.ss": { s: 3, c: 5 }, // inserted dot
    "d.ick": { s: 3, c: 5 }, // inserted dot
    "di.ck": { s: 3, c: 5 }, // inserted dot
    "c.ock": { s: 3, c: 5 }, // inserted dot
    "co.ck": { s: 3, c: 5 }, // inserted dot
    "n.igger": { s: 3, c: 5 }, // inserted dot
    "ni.gger": { s: 3, c: 5 }, // inserted dot
    "nig.ger": { s: 3, c: 5 }, // inserted dot
    "nigg.er": { s: 3, c: 5 }, // inserted dot
    "f/uck": { s: 3, c: 5 }, // inserted slash
    "s/hit": { s: 3, c: 5 }, // inserted slash
    "b/itch": { s: 3, c: 5 }, // inserted slash
    "c/unt": { s: 3, c: 5 }, // inserted slash
    "d/ick": { s: 3, c: 5 }, // inserted slash
    "c/ock": { s: 3, c: 5 }, // inserted slash

    // Mixed case common evasions (for case-insensitive matching reference)
    "cOcK": { s: 4, c: 3 }, // mixed case evasion for cock

    // Reversed/scrambled (common deliberate ones)
    "kcuf": { s: 3, c: 4 }, // reversed fuck
    "tihs": { s: 3, c: 4 }, // reversed shit

    // ===== ABBREVIATION AND ACRONYM EVASIONS =====
    "wthf": { s: 3, c: 5 }, // rearranged wtf
    "rtfm": { s: 3, c: 5 }, // read the fucking manual
    "snafu": { s: 3, c: 5 }, // situation normal all fucked up
    "bohica": { s: 3, c: 5 }, // bend over here it comes again
    "lmfaooo": { s: 3, c: 5 }, // elongated
    "lmaoo": { s: 3, c: 5 }, // elongated
    "roflmfao": { s: 3, c: 5 }, // compound acronym
    "pmsl": { s: 3, c: 5 }, // pissing myself laughing
    "ctfu": { s: 3, c: 5 }, // cracking the fuck up
    "btfo": { s: 3, c: 5 }, // blown the fuck out
    "dtf": { s: 3, c: 5 }, // down to fuck
    "nsfW": { s: 3, c: 5 }, // not safe for work
    "smfd": { s: 3, c: 5 }, // suck my fucking dick
    "kmsl": { s: 3, c: 5 }, // killing myself laughing
    "smd": { s: 3, c: 5 }, // suck my dick
    "bfd": { s: 3, c: 5 }, // big fucking deal
    "mfing": { s: 3, c: 5 }, // motherfucking abbreviated
    "mfker": { s: 3, c: 5 }, // motherfucker abbreviated

    // ===== ADDITIONAL SEXUAL TERM EVASIONS =====
    "p0rno": { s: 4, c: 5 }, // leet
    "p0rnography": { s: 4, c: 5 }, // leet
    "pr0nz": { s: 4, c: 5 }, // leet plural
    "pr0no": { s: 4, c: 5 }, // leet
    "b00b": { s: 4, c: 5 }, // leet
    "b00bies": { s: 4, c: 5 }, // leet
    "b00bz": { s: 4, c: 5 }, // leet
    "b0obs": { s: 4, c: 5 }, // leet
    "bewbs": { s: 4, c: 5 }, // phonetic
    "bewbz": { s: 4, c: 5 }, // phonetic
    "t1ts": { s: 4, c: 5 }, // leet
    "t1tties": { s: 4, c: 5 }, // leet
    "t!ts": { s: 4, c: 5 }, // symbol
    "t!tties": { s: 4, c: 5 }, // symbol
    "d1ldo": { s: 4, c: 5 }, // leet
    "d!ldo": { s: 4, c: 5 }, // symbol
    "v1brator": { s: 4, c: 5 }, // leet
    "vag1na": { s: 4, c: 5 }, // leet
    "p3nis": { s: 4, c: 5 }, // leet
    "p3n1s": { s: 4, c: 5 }, // full leet
    "pen1s": { s: 4, c: 5 }, // partial leet
    "pen!s": { s: 4, c: 5 }, // symbol
    "cl1t": { s: 4, c: 5 }, // leet
    "cl!t": { s: 4, c: 5 }, // symbol
    "cl1toris": { s: 4, c: 5 }, // leet
    "an4l": { s: 4, c: 5 }, // leet
    "an@l": { s: 4, c: 5 }, // symbol
    "0rgasm": { s: 4, c: 5 }, // leet
    "0rgy": { s: 4, c: 5 }, // leet
    "r4pe": { s: 4, c: 5 }, // leet
    "r@pe": { s: 4, c: 5 }, // symbol
    "r4pist": { s: 4, c: 5 }, // leet
    "r@pist": { s: 4, c: 5 }, // symbol
    "h0rny": { s: 4, c: 5 }, // leet
    "h0rney": { s: 4, c: 5 }, // leet misspelling
    "j1zz": { s: 4, c: 5 }, // leet
    "j!zz": { s: 4, c: 5 }, // symbol
    "cum shot": { s: 4, c: 5 }, // spaced
    "creamp1e": { s: 4, c: 5 }, // leet
    "bl0wjob": { s: 4, c: 5 }, // leet
    "bl0wj0b": { s: 4, c: 5 }, // full leet
    "handjb": { s: 4, c: 5 }, // abbreviated
    "h4ndjob": { s: 4, c: 5 }, // leet
    "rimj0b": { s: 4, c: 5 }, // leet
    "b0ner": { s: 4, c: 5 }, // leet
    "b0ners": { s: 4, c: 5 }, // leet plural
    "er3ction": { s: 4, c: 5 }, // leet
    "erect1on": { s: 4, c: 5 }, // leet
    "m4sturbate": { s: 4, c: 5 }, // leet
    "m@sturbate": { s: 4, c: 5 }, // symbol
    "masturb8": { s: 4, c: 5 }, // number substitution

    // ===== ADDITIONAL INSULT EVASION SPELLINGS =====
    "r3tard": { s: 5, c: 5 }, // leet
    "r3tarded": { s: 5, c: 5 }, // leet
    "r3t4rd": { s: 1, c: 5 }, // full leet
    "ret4rd": { s: 1, c: 5 }, // partial leet
    "re+ard": { s: 1, c: 5 }, // symbol
    "r*tard": { s: 5, c: 5 }, // asterisk
    "r*tarded": { s: 5, c: 5 }, // asterisk
    "cr1pple": { s: 1, c: 5 }, // leet
    "sp4stic": { s: 1, c: 5 }, // leet
    "sp@stic": { s: 1, c: 5 }, // symbol
    "sp4z": { s: 1, c: 5 }, // leet
    "sp@z": { s: 1, c: 5 }, // symbol
    "m0r0n": { s: 1, c: 5 }, // leet
    "1mb3cile": { s: 1, c: 5 }, // leet
    "1mbecile": { s: 1, c: 5 }, // partial leet

    // ===== ADDITIONAL COMPOUND PHRASES =====
    "burn in hell": { s: 3, c: 5 }, // aggressive phrase
    "burninhell": { s: 3, c: 5 }, // compound
    "rot in hell": { s: 3, c: 5 }, // aggressive phrase
    "rotinhell": { s: 3, c: 5 }, // compound
    "damn you": { s: 1, c: 5 }, // mild aggressive
    "damnyou": { s: 3, c: 5 }, // compound
    "screw this": { s: 3, c: 5 }, // aggressive
    "screwthis": { s: 3, c: 5 }, // compound
    "frigoff": { s: 2, c: 3 }, // euphemistic compound
    "frig off": { s: 2, c: 5 }, // euphemistic spaced
    "eff off": { s: 2, c: 5 }, // euphemistic spaced
    "eff you": { s: 2, c: 5 }, // euphemistic spaced
    "f.u.": { s: 3, c: 5 }, // dotted abbreviation
    "f-u": { s: 3, c: 5 }, // hyphenated
    "s t f u": { s: 3, c: 5 }, // spaced
    "g t f o": { s: 3, c: 5 }, // spaced
    "w t f": { s: 3, c: 5 }, // spaced
    "k y s": { s: 5, c: 5 }, // spaced (kill yourself)
    "k.y.s": { s: 3, c: 5 }, // dotted
    "k-y-s": { s: 3, c: 5 }, // hyphenated

    // ===== PHONETIC SPELLING EVASIONS =====
    "eff u see kay": { s: 3, c: 5 }, // spelled out fuck
    "see you next tuesday": { s: 3, c: 5 }, // spelled out cunt
    "ess aych eye tee": { s: 3, c: 5 }, // spelled out shit
    "ay ess ess": { s: 3, c: 5 }, // spelled out ass
    "bee eye tee see aych": { s: 3, c: 5 }, // spelled out bitch

    // ===== ADDITIONAL DRUG-RELATED INSULTS =====
    "crack whore": { s: 5, c: 5 }, // spaced variant
    "meth whore": { s: 5, c: 4 }, // compound
    "methwhore": { s: 5, c: 4 }, // compound
    "smackhead": { s: 2, c: 3 }, // drug user insult
    "smackheads": { s: 2, c: 3 }, // plural
    "crackho": { s: 2, c: 3 }, // compound
    "dope fiend": { s: 2, c: 3 }, // drug user insult
    "dopefiend": { s: 2, c: 3 }, // compound

    // ===== ADDITIONAL VIOLENT/THREATENING =====
    "curb stomp": { s: 5, c: 5 }, // violent act
    "curbstomp": { s: 5, c: 5 }, // compound
    "curbstomping": { s: 5, c: 5 }, // gerund
    "die slow": { s: 5, c: 5 }, // threat
    "dieslow": { s: 5, c: 5 }, // compound
    "choke on it": { s: 5, c: 5 }, // aggressive
    "i hope you die": { s: 5, c: 5 }, // threat
    "ihopeyoudie": { s: 5, c: 5 }, // compound
    "hope you die": { s: 5, c: 5 }, // threat
    "hopeyoudie": { s: 5, c: 5 }, // compound
    "get cancer": { s: 5, c: 5 }, // aggressive
    "getcancer": { s: 5, c: 5 }, // compound

    // ===== SYMBOL-HEAVY EVASIONS =====
    "f#ck": { s: 3, c: 5 }, // hash substitution
    "f#cking": { s: 3, c: 5 }, // hash compound
    "f#cker": { s: 3, c: 5 }, // hash compound
    "sh#t": { s: 3, c: 5 }, // hash substitution
    "b#tch": { s: 3, c: 5 }, // hash substitution
    "d#ck": { s: 3, c: 5 }, // hash substitution
    "c#ck": { s: 3, c: 5 }, // hash substitution
    "c#nt": { s: 3, c: 5 }, // hash substitution
    "n#gger": { s: 3, c: 5 }, // hash substitution
    "n#gga": { s: 3, c: 5 }, // hash substitution
    "a##": { s: 3, c: 5 }, // hash substitution
    "wh#re": { s: 3, c: 5 }, // hash substitution
    "sl#t": { s: 3, c: 5 }, // hash substitution
    "f@ck": { s: 3, c: 5 }, // at substitution
    "f@cking": { s: 3, c: 5 }, // at compound
    "f@cker": { s: 3, c: 5 }, // at compound
    "@sshat": { s: 3, c: 5 }, // at compound
    "@ssclown": { s: 3, c: 5 }, // at compound
    "@ssface": { s: 3, c: 5 }, // at compound
    "$h!tty": { s: 3, c: 5 }, // dollar + symbol
    "$h!tstain": { s: 3, c: 5 }, // dollar + symbol compound
    "$h!thead": { s: 3, c: 5 }, // dollar + symbol compound
    "$h!thole": { s: 3, c: 5 }, // dollar + symbol compound
    "$h!tface": { s: 3, c: 5 }, // dollar + symbol compound
    "$kank": { s: 3, c: 5 }, // dollar substitution
    "$luts": { s: 3, c: 5 }, // dollar plural

    // ===== ADDITIONAL MODERN SLANG / INTERNET =====
    "degenerate": { s: 2, c: 3 }, // internet insult
    "neckbeard": { s: 2, c: 3 }, // internet insult
    "simp": { s: 2, c: 3 }, // modern insult
    "simping": { s: 2, c: 3 }, // modern insult gerund
    "cuck": { s: 2, c: 3 }, // modern insult
    "cucks": { s: 2, c: 3 }, // plural
    "cuckold": { s: 2, c: 3 }, // sexual insult
    "cucked": { s: 2, c: 3 }, // past tense
    "cucking": { s: 2, c: 3 }, // gerund
    "cuckboy": { s: 2, c: 3 }, // compound
    "beta male": { s: 2, c: 3 }, // modern insult
    "betamale": { s: 2, c: 3 }, // compound
    "soyboy": { s: 2, c: 3 }, // modern insult
    "triggered": { s: 2, c: 3 }, // mocking term
    "landwhale": { s: 2, c: 3 }, // body-shaming
    "land whale": { s: 2, c: 5 }, // body-shaming spaced
    "femoid": { s: 2, c: 3 }, // incel terminology
    "foid": { s: 2, c: 3 }, // incel terminology
    "roastie": { s: 2, c: 3 }, // incel terminology
    "manlet": { s: 2, c: 3 }, // body-shaming
    "dicklet": { s: 4, c: 3 }, // body-shaming
    "coomer": { s: 2, c: 3 }, // internet insult
    "coomers": { s: 2, c: 3 }, // plural
    "cooming": { s: 2, c: 3 }, // gerund
    "gooner": { s: 2, c: 3 }, // internet insult
    "gooning": { s: 2, c: 3 }, // gerund
    "based retard": { s: 5, c: 4 }, // compound internet insult
    "cope": { s: 2, c: 3 }, // dismissive internet term
    "seethe": { s: 2, c: 3 }, // dismissive internet term
    "copium": { s: 2, c: 3 }, // internet mocking
    "dilate": { s: 5, c: 3 }, // transphobic internet slang
    "an hero": { s: 5, c: 5 }, // suicide reference meme
    "anhero": { s: 5, c: 5 }, // suicide reference compound
    "rope yourself": { s: 5, c: 5 }, // suicide reference
    "ropeyourself": { s: 2, c: 3 }, // compound

    // ===== WORD BOUNDARY EVASION (no spaces) =====
    "pissbrain": { s: 3, c: 5 }, // compound insult
    "pissdrinker": { s: 3, c: 5 }, // compound insult
    "bellendface": { s: 3, c: 5 }, // compound insult
    "twatfaced": { s: 4, c: 5 }, // compound
    "arsefaced": { s: 3, c: 5 }, // compound
    "pissbreath": { s: 3, c: 5 }, // compound insult
    "shitbreathed": { s: 3, c: 5 }, // compound
    "dickbreathed": { s: 4, c: 5 }, // compound
    "cumbreath": { s: 4, c: 5 }, // compound insult
    "cuntbreath": { s: 5, c: 5 }, // compound insult

    // ===== EMOJI DESCRIPTION EVASIONS (text versions) =====
    "middle finger": { s: 3, c: 5 }, // gesture
    "flip the bird": { s: 3, c: 5 }, // gesture phrase
    "flipthebird": { s: 3, c: 5 }, // compound
    "the finger": { s: 3, c: 5 }, // gesture

    // ===== ADDITIONAL MISSED COMMON WORDS =====
    "wankered": { s: 3, c: 4 }, // British drunk/insult
    "bollixed": { s: 3, c: 4 }, // British ruined
    "knackered": { s: 1, c: 4 }, // British exhausted (mild)
    "bloody": { s: 1, c: 4 }, // British mild profanity
    "dammit": { s: 1, c: 4 }, // mild profanity
    "crapstain": { s: 3, c: 4 }, // compound insult
    "crapweasel": { s: 3, c: 4 }, // compound insult
    "scumbucket": { s: 4, c: 5 }, // compound insult
    "sleazeball": { s: 3, c: 4 }, // compound insult
    "buttpirate": { s: 3, c: 4 }, // compound insult
    "butt pirate": { s: 3, c: 5 }, // spaced
    "turd": { s: 1, c: 4 }, // mild profanity
    "turdbrain": { s: 3, c: 4 }, // compound insult
    "turdmuncher": { s: 3, c: 4 }, // compound insult
    "turdwhistle": { s: 3, c: 4 }, // compound insult
    "douchewaffle": { s: 3, c: 4 }, // compound insult
    "douchefart": { s: 3, c: 4 }, // compound insult
    "assbucket": { s: 3, c: 4 }, // compound insult
    "asscandle": { s: 3, c: 4 }, // compound insult
    "assmaggot": { s: 3, c: 4 }, // compound insult
    "dickmaggot": { s: 4, c: 4 }, // compound insult
    "shitmaggot": { s: 3, c: 5 }, // compound insult
    "cumwipe": { s: 4, c: 5 }, // compound insult
    "jizzwipe": { s: 4, c: 5 }, // compound insult
    "slutpuppy": { s: 3, c: 4 }, // compound insult
    "whorefaced": { s: 5, c: 4 }, // compound insult
    "pisstaker": { s: 3, c: 4 }, // British compound
    "pisstaking": { s: 3, c: 4 }, // British compound

    // ===== ADDITIONAL LEET SPEAK COMBINATIONS =====
    "4ss": { s: 3, c: 5 }, // full leet a
    "4ssh0le": { s: 3, c: 5 }, // full leet
    "4$$h0l3": { s: 3, c: 5 }, // full leet + symbols
    "b!7ch": { s: 3, c: 5 }, // symbol + leet
    "c0c|<": { s: 3, c: 5 }, // pipe + angle bracket
    "d1c|<": { s: 3, c: 5 }, // pipe + angle bracket
    "n1qq4": { s: 3, c: 5 }, // leet + q substitution
    "n1qq3r": { s: 3, c: 5 }, // leet + q substitution
    "ph4g": { s: 3, c: 5 }, // leet ph
    "ph4gg07": { s: 3, c: 5 }, // full leet ph
    "pu$$1": { s: 3, c: 5 }, // dollar + leet
    "pu$$13s": { s: 3, c: 5 }, // dollar + leet plural
    "r3+ard": { s: 3, c: 5 }, // leet + symbol
    "r3+4rd": { s: 3, c: 5 }, // full leet + symbol
    "sh!+": { s: 3, c: 5 }, // symbol substitution
    "sh!7": { s: 3, c: 5 }, // symbol + leet
    "$h!7": { s: 3, c: 5 }, // dollar + symbol + leet
    "w4nk3r": { s: 3, c: 5 }, // full leet
    "wh0r3s": { s: 3, c: 5 }, // leet plural
    "a$sh0le": { s: 3, c: 5 }, // mixed symbols
    "@$$h0l3": { s: 3, c: 5 }, // full symbol + leet
    "b00bj0b": { s: 3, c: 5 }, // leet compound
    "bl0wj0bs": { s: 3, c: 5 }, // leet plural
    "c0cksuck3r": { s: 3, c: 5 }, // leet compound
    "d1ckh3ad": { s: 3, c: 5 }, // leet compound
    "f4gg07s": { s: 3, c: 5 }, // leet plural
    "m07h3rfuck3r": { s: 3, c: 5 }, // leet compound
    "n1gg3rs": { s: 3, c: 5 }, // leet plural

    // Wikipedia profanity list - additional entries
    "chicken shit": { s: 3, c: 5 }, // cowardly (compound)
    "ching chong": { s: 3, c: 4 }, // anti-Asian slur
    "chingchong": { s: 3, c: 4 }, // anti-Asian slur
    "crap": { s: 2, c: 4 }, // mild expletive
    "damn": { s: 2, c: 2 },
    "damnation": { s: 3, c: 4 }, // religious curse
    "enshittification": { s: 3, c: 5 }, // degradation of platforms
    "healslut": { s: 3, c: 4 }, // gaming sexual slur
    "hell": { s: 2, c: 2 },
    "hori": { s: 3, c: 4 }, // anti-Polynesian slur (NZ)
    "jesus fucking christ": { s: 3, c: 5 }, // blasphemous compound
    "niggerhead": { s: 5, c: 5 }, // racial slur compound
    "pajeet": { s: 3, c: 4 }, // anti-Indian slur
    "polaco": { s: 5, c: 4 }, // ethnic slur (against Poles/Brazilians)
    "ratfucking": { s: 3, c: 5 }, // political sabotage slur
    "taking the piss": { s: 3, c: 4 }, // British vulgar idiom
    "take the piss": { s: 3, c: 4 }, // British vulgar idiom
    "unclefucker": { s: 3, c: 5 }, // compound insult
    "uncle fucker": { s: 3, c: 5 }, // compound insult spaced
    "shitposting": { s: 3, c: 5 }, // internet vulgar term
    "shitpost": { s: 3, c: 5 }, // internet vulgar term
    "shitposter": { s: 3, c: 5 }, // internet vulgar term
    "serving cunt": { s: 5, c: 5 }, // vulgar slang
    "russian warship go fuck yourself": { s: 3, c: 5 }, // wartime phrase

    // Racial/ethnic slurs - comprehensive coverage
    // (excluding words with common innocent meanings: slope, frog, nip, banana, coconut, oreo, kebab, septic, taffy, jock, tinker, mongrel, mammy, hun, jerry, paddy, yank, hunky, knacker)
    "slopehead": { s: 3, c: 4 }, // anti-Asian slur compound
    "sand nigger": { s: 5, c: 5 }, // anti-Arab slur
    "sand niggers": { s: 5, c: 5 }, // anti-Arab slur plural
    "sandniggers": { s: 5, c: 5 }, // anti-Arab slur compound plural
    "yid": { s: 3, c: 4 }, // anti-Jewish slur
    "yids": { s: 3, c: 4 }, // anti-Jewish slur plural
    "hymie": { s: 3, c: 4 }, // anti-Jewish slur
    "hymies": { s: 3, c: 4 }, // anti-Jewish slur plural
    "hymietown": { s: 3, c: 4 }, // anti-Jewish slur compound
    "shylock": { s: 3, c: 4 }, // anti-Jewish slur
    "shylocks": { s: 3, c: 4 }, // anti-Jewish slur plural
    "gyppo": { s: 3, c: 4 }, // anti-Romani slur
    "gyppos": { s: 3, c: 4 }, // anti-Romani slur plural
    "gypo": { s: 3, c: 4 }, // anti-Romani slur variant
    "cholo": { s: 3, c: 4 }, // anti-Mexican slur
    "cholos": { s: 3, c: 4 }, // anti-Mexican slur plural
    "chola": { s: 3, c: 4 }, // anti-Mexican slur feminine
    "eurotrash": { s: 3, c: 4 }, // anti-European slur
    "camel jockeys": { s: 5, c: 5 }, // anti-Arab slur plural
    "prairie nigger": { s: 5, c: 5 }, // anti-Native American slur
    "timber nigger": { s: 5, c: 5 }, // anti-Native American slur
    "jungle bunnies": { s: 5, c: 5 }, // anti-Black slur plural
    "porch monkeys": { s: 5, c: 5 }, // anti-Black slur plural
    "moon cricket": { s: 3, c: 4 }, // anti-Black slur
    "mudshark": { s: 5, c: 4 }, // interracial slur
    "race traitor": { s: 3, c: 4 }, // white supremacist slur
    "subhuman": { s: 5, c: 5 }, // dehumanizing slur
    "subhumans": { s: 5, c: 5 }, // dehumanizing slur plural
    "untermensch": { s: 5, c: 5 }, // Nazi dehumanizing slur
    "untermenschen": { s: 5, c: 5 }, // Nazi dehumanizing slur plural
    "shitskins": { s: 5, c: 5 }, // racist slur plural
    "house nigger": { s: 5, c: 5 }, // anti-Black slur
    "field nigger": { s: 5, c: 5 }, // anti-Black slur
    "spear chucker": { s: 3, c: 4 }, // anti-Black slur
    "pickaninnies": { s: 3, c: 4 }, // anti-Black slur plural
    "quadroon": { s: 5, c: 4 }, // racist term
    "octoroon": { s: 5, c: 4 }, // racist term
    "half caste": { s: 3, c: 4 }, // anti-mixed-race slur
    "halfcaste": { s: 3, c: 4 }, // anti-mixed-race slur
    "currymuncher": { s: 3, c: 4 }, // anti-South Asian slur
    "goatfucker": { s: 5, c: 5 }, // anti-Middle Eastern slur
    "goat fucker": { s: 3, c: 5 }, // anti-Middle Eastern slur
    "remove kebab": { s: 3, c: 4 }, // anti-Muslim/anti-Balkan hate phrase
    "dune coon": { s: 5, c: 4 }, // anti-Arab slur
    "dunecoon": { s: 5, c: 4 }, // anti-Arab slur compound
    "border hopper": { s: 3, c: 4 }, // anti-Mexican slur
    "fenian": { s: 3, c: 4 }, // anti-Irish Catholic slur
    "fenians": { s: 3, c: 4 }, // anti-Irish Catholic slur plural
    "proddy": { s: 3, c: 4 }, // anti-Protestant slur
    "pikeys": { s: 3, c: 4 }, // anti-Traveller/Romani slur plural
    "didicoy": { s: 3, c: 4 }, // anti-Romani slur
    "gippo": { s: 3, c: 4 }, // anti-Romani slur
    "bohunk": { s: 3, c: 4 }, // anti-Eastern European slur
    "polack": { s: 3, c: 4 }, // anti-Polish slur
    "polacks": { s: 3, c: 4 }, // anti-Polish slur plural
    "russki": { s: 3, c: 4 }, // anti-Russian slur
    "russkies": { s: 3, c: 4 }, // anti-Russian slur plural
    "trailer trash": { s: 3, c: 4 }, // classist slur
    "knuckle dragger": { s: 5, c: 4 }, // racist slur
    "coal burner": { s: 5, c: 4 }, // interracial slur
    "mud people": { s: 3, c: 4 }, // white supremacist slur
    "anchor baby": { s: 3, c: 4 }, // anti-immigrant slur
    "fence jumper": { s: 3, c: 4 }, // anti-Mexican slur
    "border bunny": { s: 3, c: 4 }, // anti-Mexican slur
    "half breed": { s: 3, c: 4 }, // anti-mixed-race slur
    "dot head": { s: 3, c: 4 }, // anti-Indian slur
    "orangeman": { s: 3, c: 4 }, // sectarian slur
    "commie": { s: 3, c: 4 }, // political slur
    "commies": { s: 3, c: 4 }, // political slur plural
    "pinko": { s: 3, c: 4 }, // political slur
    "pinkos": { s: 3, c: 4 }, // political slur plural
    "cheese eating surrender monkey": { s: 3, c: 4 }, // anti-French slur

    // ===== COMPOUND INSULTS (adjective+noun) =====
    "stupid fuck": { s: 3, c: 5 },
    "stupidfuck": { s: 3, c: 5 },
    "stupid cunt": { s: 5, c: 5 },
    "stupidcunt": { s: 5, c: 5 },
    "stupid whore": { s: 5, c: 4 },
    "stupidwhore": { s: 5, c: 4 },
    "stupid slut": { s: 3, c: 4 },
    "stupidslut": { s: 3, c: 4 },
    "stupid dick": { s: 4, c: 4 },
    "stupiddick": { s: 4, c: 4 },
    "stupid prick": { s: 1, c: 4 },
    "stupidprick": { s: 1, c: 4 },
    "stupid twat": { s: 4, c: 4 },
    "stupidtwat": { s: 4, c: 4 },
    "stupid cow": { s: 1, c: 4 },
    "stupidcow": { s: 1, c: 4 },
    "stupid pig": { s: 1, c: 4 },
    "stupidpig": { s: 1, c: 4 },
    "stupid turd": { s: 1, c: 4 },
    "stupidturd": { s: 1, c: 4 },
    "stupid wanker": { s: 3, c: 4 },
    "stupidwanker": { s: 3, c: 4 },
    "ugly fuck": { s: 3, c: 5 },
    "uglyfuck": { s: 3, c: 5 },
    "ugly cunt": { s: 5, c: 5 },
    "uglycunt": { s: 5, c: 5 },
    "ugly whore": { s: 5, c: 4 },
    "uglywhore": { s: 5, c: 4 },
    "ugly slut": { s: 3, c: 4 },
    "uglyslut": { s: 3, c: 4 },
    "ugly bitch": { s: 3, c: 4 },
    "uglybitch": { s: 3, c: 4 },
    "ugly cow": { s: 1, c: 4 },
    "uglycow": { s: 1, c: 4 },
    "ugly twat": { s: 4, c: 4 },
    "uglytwat": { s: 4, c: 4 },
    "ugly pig": { s: 1, c: 4 },
    "uglypig": { s: 1, c: 4 },
    "ugly bastard": { s: 5, c: 4 },
    "uglybastard": { s: 5, c: 4 },
    "fat fuck": { s: 3, c: 5 },
    "fatfucker": { s: 3, c: 5 },
    "fat cunt": { s: 5, c: 5 },
    "fatcunt": { s: 5, c: 5 },
    "fat bitch": { s: 3, c: 4 },
    "fatbitch": { s: 3, c: 4 },
    "fat whore": { s: 5, c: 4 },
    "fatwhore": { s: 5, c: 4 },
    "fat slut": { s: 3, c: 4 },
    "fatslut": { s: 3, c: 4 },
    "fat cow": { s: 1, c: 4 },
    "fatcow": { s: 1, c: 4 },
    "fat pig": { s: 1, c: 4 },
    "fatpig": { s: 1, c: 4 },
    "fat twat": { s: 4, c: 4 },
    "fattwat": { s: 4, c: 4 },
    "fat prick": { s: 1, c: 4 },
    "fatprick": { s: 1, c: 4 },
    "fat turd": { s: 1, c: 4 },
    "fatturd": { s: 1, c: 4 },
    "fat bastard": { s: 5, c: 4 },
    "fatbastard": { s: 5, c: 4 },
    "dumb cunt": { s: 5, c: 5 },
    "dumbcunt": { s: 5, c: 5 },
    "dumb whore": { s: 5, c: 4 },
    "dumbwhore": { s: 5, c: 4 },
    "dumb slut": { s: 3, c: 4 },
    "dumbslut": { s: 3, c: 4 },
    "dumb twat": { s: 4, c: 4 },
    "dumbtwat": { s: 4, c: 4 },
    "dumb prick": { s: 1, c: 4 },
    "dumbprick": { s: 1, c: 4 },
    "dumb cow": { s: 1, c: 4 },
    "dumbcow": { s: 1, c: 4 },
    "dumb pig": { s: 1, c: 4 },
    "dumbpig": { s: 1, c: 4 },
    "dumb turd": { s: 1, c: 4 },
    "dumbturd": { s: 1, c: 4 },
    "dumb bastard": { s: 5, c: 4 },
    "dumbbastard": { s: 5, c: 4 },
    "dirty fuck": { s: 3, c: 5 },
    "dirtyfuck": { s: 3, c: 5 },
    "dirty cunt": { s: 5, c: 5 },
    "dirtycunt": { s: 5, c: 5 },
    "dirty whore": { s: 5, c: 4 },
    "dirtywhore": { s: 5, c: 4 },
    "dirty slut": { s: 3, c: 4 },
    "dirtyslut": { s: 3, c: 4 },
    "dirty bitch": { s: 3, c: 4 },
    "dirtybitch": { s: 3, c: 4 },
    "dirty bastard": { s: 5, c: 4 },
    "dirtybastard": { s: 5, c: 4 },
    "dirty skank": { s: 1, c: 4 },
    "dirtyskank": { s: 1, c: 4 },
    "dirty pig": { s: 1, c: 4 },
    "dirtypig": { s: 1, c: 4 },
    "dirty tramp": { s: 1, c: 4 },
    "dirtytramp": { s: 1, c: 4 },
    "dirty hoe": { s: 1, c: 4 },
    "dirtyhoe": { s: 1, c: 4 },
    "nasty bitch": { s: 3, c: 4 },
    "nastybitch": { s: 3, c: 4 },
    "nasty whore": { s: 5, c: 4 },
    "nastywhore": { s: 5, c: 4 },
    "nasty slut": { s: 3, c: 4 },
    "nastyslut": { s: 3, c: 4 },
    "nasty cunt": { s: 5, c: 5 },
    "nastycunt": { s: 5, c: 5 },
    "nasty fuck": { s: 3, c: 5 },
    "nastyfuck": { s: 3, c: 5 },
    "nasty skank": { s: 1, c: 4 },
    "nastyskank": { s: 1, c: 4 },
    "nasty pig": { s: 1, c: 4 },
    "nastypig": { s: 1, c: 4 },
    "nasty bastard": { s: 5, c: 4 },
    "nastybastard": { s: 5, c: 4 },
    "nasty hoe": { s: 1, c: 4 },
    "nastyhoe": { s: 1, c: 4 },
    "filthy fuck": { s: 3, c: 5 },
    "filthyfuck": { s: 3, c: 5 },
    "filthy cunt": { s: 5, c: 5 },
    "filthycunt": { s: 5, c: 5 },
    "filthy whore": { s: 5, c: 4 },
    "filthywhore": { s: 5, c: 4 },
    "filthy slut": { s: 3, c: 4 },
    "filthyslut": { s: 3, c: 4 },
    "filthy bitch": { s: 3, c: 4 },
    "filthybitch": { s: 3, c: 4 },
    "filthy bastard": { s: 5, c: 4 },
    "filthybastard": { s: 5, c: 4 },
    "filthy pig": { s: 1, c: 4 },
    "filthypig": { s: 1, c: 4 },
    "filthy skank": { s: 1, c: 4 },
    "filthyskank": { s: 1, c: 4 },
    "filthy animal": { s: 1, c: 4 },
    "filthyanimal": { s: 1, c: 4 },
    "filthy hoe": { s: 1, c: 4 },
    "filthyhoe": { s: 1, c: 4 },
    "lazy fuck": { s: 3, c: 5 },
    "lazyfuck": { s: 3, c: 5 },
    "lazy cunt": { s: 5, c: 5 },
    "lazycunt": { s: 5, c: 5 },
    "lazy bitch": { s: 3, c: 4 },
    "lazybitch": { s: 3, c: 4 },
    "lazy bastard": { s: 5, c: 4 },
    "lazybastard": { s: 5, c: 4 },
    "lazy prick": { s: 1, c: 4 },
    "lazyprick": { s: 1, c: 4 },
    "lazy twat": { s: 4, c: 4 },
    "lazytwat": { s: 4, c: 4 },
    "lazy slob": { s: 1, c: 4 },
    "lazyslob": { s: 1, c: 4 },
    "cheap whore": { s: 5, c: 4 },
    "cheapwhore": { s: 5, c: 4 },
    "cheap slut": { s: 3, c: 4 },
    "cheapslut": { s: 3, c: 4 },
    "cheap skank": { s: 1, c: 4 },
    "cheapskank": { s: 1, c: 4 },
    "crazy fuck": { s: 3, c: 5 },
    "crazyfuck": { s: 3, c: 5 },
    "crazy cunt": { s: 5, c: 5 },
    "crazycunt": { s: 5, c: 5 },
    "crazy bastard": { s: 5, c: 4 },
    "crazybastard": { s: 5, c: 4 },
    "sick fuck": { s: 3, c: 5 },
    "sickfuck": { s: 3, c: 5 },
    "sick bastard": { s: 5, c: 4 },
    "sickbastard": { s: 5, c: 4 },
    "sick cunt": { s: 5, c: 5 },
    "sickcunt": { s: 5, c: 5 },
    "sick pervert": { s: 1, c: 4 },
    "sickpervert": { s: 1, c: 4 },
    "worthless fuck": { s: 3, c: 5 },
    "worthlessfuck": { s: 3, c: 5 },
    "worthless cunt": { s: 5, c: 5 },
    "worthlesscunt": { s: 5, c: 5 },
    "worthless bitch": { s: 3, c: 4 },
    "worthlessbitch": { s: 3, c: 4 },
    "worthless whore": { s: 5, c: 4 },
    "worthlesswhore": { s: 5, c: 4 },
    "worthless piece of shit": { s: 3, c: 5 },
    "worthless turd": { s: 1, c: 4 },
    "worthlessturd": { s: 1, c: 4 },
    "worthless bastard": { s: 5, c: 4 },
    "worthlessbastard": { s: 5, c: 4 },
    "pathetic fuck": { s: 3, c: 5 },
    "patheticfuck": { s: 3, c: 5 },
    "pathetic cunt": { s: 5, c: 5 },
    "patheticcunt": { s: 5, c: 5 },
    "pathetic loser": { s: 1, c: 4 },
    "patheticloser": { s: 1, c: 4 },
    "pathetic bitch": { s: 3, c: 4 },
    "patheticbitch": { s: 3, c: 4 },
    "pathetic bastard": { s: 5, c: 4 },
    "patheticbastard": { s: 5, c: 4 },
    "useless fuck": { s: 3, c: 5 },
    "uselessfuck": { s: 3, c: 5 },
    "useless cunt": { s: 5, c: 5 },
    "uselesscunt": { s: 5, c: 5 },
    "useless bitch": { s: 3, c: 4 },
    "uselessbitch": { s: 3, c: 4 },
    "useless twat": { s: 4, c: 4 },
    "uselesstwat": { s: 4, c: 4 },
    "useless prick": { s: 1, c: 4 },
    "uselessprick": { s: 1, c: 4 },
    "useless bastard": { s: 5, c: 4 },
    "uselessbastard": { s: 5, c: 4 },
    "little fuck": { s: 3, c: 5 },
    "littlefuck": { s: 3, c: 5 },
    "little shit": { s: 3, c: 5 },
    "littleshit": { s: 3, c: 5 },
    "little prick": { s: 1, c: 4 },
    "littleprick": { s: 1, c: 4 },
    "little dick": { s: 4, c: 4 },
    "littledick": { s: 4, c: 4 },
    "little cunt": { s: 5, c: 5 },
    "littlecunt": { s: 5, c: 5 },
    "little twat": { s: 4, c: 4 },
    "littletwat": { s: 4, c: 4 },
    "little wanker": { s: 3, c: 4 },
    "littlewanker": { s: 3, c: 4 },
    "bloody idiot": { s: 1, c: 4 },
    "bloodyidiot": { s: 1, c: 4 },
    "bloody fool": { s: 1, c: 4 },
    "bloodyfool": { s: 1, c: 4 },
    "bloody wanker": { s: 3, c: 4 },
    "bloodywanker": { s: 3, c: 4 },
    "bloody tosser": { s: 1, c: 4 },
    "bloodytosser": { s: 1, c: 4 },
    "bloody bastard": { s: 5, c: 4 },
    "bloodybastard": { s: 5, c: 4 },
    "bloody muppet": { s: 1, c: 4 },
    "bloodymuppet": { s: 1, c: 4 },
    "absolute cunt": { s: 5, c: 5 },
    "absolutecunt": { s: 5, c: 5 },
    "absolute twat": { s: 4, c: 4 },
    "absolutetwat": { s: 4, c: 4 },
    "absolute wanker": { s: 3, c: 4 },
    "absolutewanker": { s: 3, c: 4 },
    "absolute bellend": { s: 1, c: 4 },
    "absolutebellend": { s: 1, c: 4 },
    "total dickhead": { s: 4, c: 4 },
    "totaldickhead": { s: 4, c: 4 },
    "total prick": { s: 1, c: 4 },
    "totalprick": { s: 1, c: 4 },
    "total cunt": { s: 5, c: 5 },
    "totalcunt": { s: 5, c: 5 },
    "total wanker": { s: 3, c: 4 },
    "totalwanker": { s: 3, c: 4 },
    "total twat": { s: 4, c: 4 },
    "totaltwat": { s: 4, c: 4 },
    "complete twat": { s: 4, c: 4 },
    "completetwat": { s: 4, c: 4 },
    "complete cunt": { s: 5, c: 5 },
    "completecunt": { s: 5, c: 5 },
    "complete wanker": { s: 3, c: 4 },
    "completewanker": { s: 3, c: 4 },
    "utter cunt": { s: 5, c: 5 },
    "uttercunt": { s: 5, c: 5 },
    "utter twat": { s: 4, c: 4 },
    "uttertwat": { s: 4, c: 4 },
    "utter bellend": { s: 1, c: 4 },
    "utterbellend": { s: 1, c: 4 },
    "massive cunt": { s: 5, c: 5 },
    "massivecunt": { s: 5, c: 5 },
    "massive twat": { s: 3, c: 4 },
    "massivetwat": { s: 3, c: 4 },
    "massive dickhead": { s: 4, c: 4 },
    "massivedickhead": { s: 4, c: 4 },
    "right cunt": { s: 5, c: 5 },
    "rightcunt": { s: 5, c: 5 },
    "right twat": { s: 4, c: 4 },
    "righttwat": { s: 4, c: 4 },
    "right bellend": { s: 1, c: 4 },
    "rightbellend": { s: 1, c: 4 },
    "proper cunt": { s: 5, c: 5 },
    "propercunt": { s: 5, c: 5 },
    "proper twat": { s: 4, c: 4 },
    "propertwat": { s: 4, c: 4 },
    "proper bellend": { s: 1, c: 4 },
    "properbellend": { s: 1, c: 4 },
    "fucking idiot": { s: 3, c: 5 },
    "fuckingidiot": { s: 3, c: 5 },
    "fucking moron": { s: 3, c: 5 },
    "fuckingmoron": { s: 3, c: 5 },
    "fucking loser": { s: 3, c: 5 },
    "fuckingloser": { s: 3, c: 5 },
    "fucking retard": { s: 3, c: 5 },
    "fuckingretard": { s: 3, c: 5 },
    "fucking bitch": { s: 3, c: 5 },
    "fuckingbitch": { s: 3, c: 5 },
    "fucking cunt": { s: 3, c: 5 },
    "fuckingcunt": { s: 3, c: 5 },
    "fucking whore": { s: 3, c: 5 },
    "fuckingwhore": { s: 3, c: 5 },
    "fucking slut": { s: 3, c: 5 },
    "fuckingslut": { s: 3, c: 5 },
    "fucking pig": { s: 3, c: 5 },
    "fuckingpig": { s: 3, c: 5 },
    "fucking bastard": { s: 3, c: 5 },
    "fuckingbastard": { s: 3, c: 5 },
    "fucking twat": { s: 3, c: 5 },
    "fuckingtwat": { s: 3, c: 5 },
    "fucking prick": { s: 3, c: 5 },
    "fuckingprick": { s: 3, c: 5 },
    "fucking dickhead": { s: 3, c: 5 },
    "fuckingdickhead": { s: 3, c: 5 },
    "fucking wanker": { s: 3, c: 5 },
    "fuckingwanker": { s: 3, c: 5 },
    "fucking tosser": { s: 3, c: 5 },
    "fuckingtosser": { s: 3, c: 5 },
    "fucking bellend": { s: 3, c: 5 },
    "fuckingbellend": { s: 3, c: 5 },
    "fucking clown": { s: 3, c: 5 },
    "fuckingclown": { s: 3, c: 5 },
    "fucking donkey": { s: 3, c: 5 },
    "fuckingdonkey": { s: 3, c: 5 },
    "fucking waste": { s: 3, c: 5 },
    "fuckingwaste": { s: 3, c: 5 },
    "fucking scum": { s: 3, c: 5 },
    "fuckingscum": { s: 3, c: 5 },
    "goddamn idiot": { s: 1, c: 4 },
    "goddamnidiot": { s: 1, c: 4 },
    "goddamn fool": { s: 1, c: 4 },
    "goddamnfool": { s: 1, c: 4 },
    "goddamn bastard": { s: 5, c: 4 },
    "goddamnbastard": { s: 5, c: 4 },
    // ===== YOUR MOM/DAD VARIANTS =====
    "your mom": { s: 5, c: 5 },
    "your mum": { s: 5, c: 5 },
    "your mama": { s: 5, c: 5 },
    "your mother": { s: 5, c: 5 },
    "yourmom": { s: 5, c: 5 },
    "yourmum": { s: 5, c: 5 },
    "yourmama": { s: 5, c: 5 },
    "yourmother": { s: 5, c: 5 },
    "ur mom": { s: 5, c: 5 },
    "ur mum": { s: 5, c: 5 },
    "ur mama": { s: 5, c: 5 },
    "urmom": { s: 5, c: 5 },
    "urmum": { s: 5, c: 5 },
    "urmama": { s: 5, c: 5 },
    "ya mom": { s: 5, c: 5 },
    "ya mum": { s: 5, c: 5 },
    "yamom": { s: 5, c: 5 },
    "yamum": { s: 5, c: 5 },
    "yo momma": { s: 5, c: 5 },
    "yomomma": { s: 5, c: 5 },
    "your mom is a whore": { s: 5, c: 5 },
    "your mom is a slut": { s: 5, c: 5 },
    "your mum is a slag": { s: 5, c: 5 },
    "your mom sucks": { s: 5, c: 5 },
    "your mum sucks": { s: 5, c: 5 },
    "your dad": { s: 5, c: 5 },
    "your father": { s: 5, c: 5 },
    "yourdad": { s: 5, c: 5 },
    "ur dad": { s: 5, c: 5 },
    "urdad": { s: 5, c: 5 },
    "ya dad": { s: 5, c: 5 },
    "your momma so fat": { s: 5, c: 5 },
    "your mama so ugly": { s: 5, c: 5 },
    "yo mama so stupid": { s: 5, c: 5 },
    "your moms a hoe": { s: 5, c: 5 },
    "your mums a hoe": { s: 5, c: 5 },
    "your mum is a hoe": { s: 5, c: 5 },
    "your mom is a hoe": { s: 5, c: 5 },
    "motherlover": { s: 5, c: 5 },
    "motherhumper": { s: 5, c: 5 },
    "mothersucker": { s: 5, c: 5 },
    "motherflicker": { s: 5, c: 5 },
    "mothertrucker": { s: 5, c: 5 },
    // ===== BODY PART VULGARITIES =====
    "assflap": { s: 4, c: 3 },
    "assflaps": { s: 4, c: 3 },
    "assgape": { s: 4, c: 3 },
    "assring": { s: 4, c: 3 },
    "ballhair": { s: 4, c: 3 },
    "beefcurtains": { s: 4, c: 3 },
    "beef curtains": { s: 4, c: 3 },
    "bellendcheese": { s: 4, c: 3 },
    "bungholio": { s: 4, c: 3 },
    "buttflap": { s: 4, c: 3 },
    "buttflaps": { s: 4, c: 3 },
    "cameltoeing": { s: 4, c: 3 },
    "cockvein": { s: 4, c: 3 },
    "cockwart": { s: 4, c: 3 },
    "cuntjuice": { s: 5, c: 5 },
    "cuntlip": { s: 5, c: 5 },
    "cuntwart": { s: 5, c: 5 },
    "dickskin": { s: 4, c: 3 },
    "dicksweat": { s: 4, c: 3 },
    "dickvein": { s: 4, c: 3 },
    "fanny": { s: 4, c: 3 },
    "fannies": { s: 4, c: 3 },
    "fannyflap": { s: 4, c: 3 },
    "fannyflaps": { s: 4, c: 3 },
    "foreskin": { s: 4, c: 3 },
    "grundle": { s: 4, c: 3 },
    "knobcheese": { s: 4, c: 3 },
    "ladybits": { s: 4, c: 3 },
    "mangina": { s: 4, c: 3 },
    "mansausage": { s: 4, c: 3 },
    "meatcurtains": { s: 4, c: 3 },
    "meat curtains": { s: 4, c: 3 },
    "nutsac": { s: 4, c: 3 },
    "perineum": { s: 4, c: 3 },
    "shlong": { s: 4, c: 3 },
    "stiffy": { s: 4, c: 3 },
    "stiffie": { s: 4, c: 3 },
    "teats": { s: 4, c: 3 },
    "todger": { s: 4, c: 3 },
    "trouser snake": { s: 4, c: 3 },
    "trousersnake": { s: 4, c: 3 },
    "vajayjay": { s: 4, c: 3 },
    "vajazzle": { s: 4, c: 3 },
    "vagene": { s: 4, c: 3 },
    "vag": { s: 4, c: 5 },
    "wanger": { s: 4, c: 3 },
    "weenie": { s: 4, c: 3 },
    "winky": { s: 4, c: 3 },
    "winkle": { s: 4, c: 3 },
    // ===== SEXUAL ACT DESCRIPTIONS =====
    "analplay": { s: 4, c: 4 },
    "anal play": { s: 4, c: 4 },
    "analsex": { s: 4, c: 4 },
    "anal sex": { s: 4, c: 4 },
    "analfuck": { s: 4, c: 5 },
    "anal fuck": { s: 4, c: 5 },
    "analfucking": { s: 4, c: 5 },
    "anal fucking": { s: 4, c: 5 },
    "assfucking": { s: 4, c: 5 },
    "ass fucking": { s: 4, c: 5 },
    "asslicking": { s: 4, c: 4 },
    "ass licking": { s: 4, c: 4 },
    "ass to mouth": { s: 4, c: 4 },
    "asstomouth": { s: 4, c: 4 },
    "ballbusting": { s: 4, c: 4 },
    "ball busting": { s: 4, c: 4 },
    "ballgagged": { s: 4, c: 4 },
    "ball gagged": { s: 4, c: 4 },
    "booty call": { s: 4, c: 4 },
    "bootycall": { s: 4, c: 4 },
    "brownshower": { s: 4, c: 4 },
    "brown shower": { s: 4, c: 4 },
    "bukakke": { s: 4, c: 4 },
    "bumfucking": { s: 4, c: 5 },
    "bum fucking": { s: 4, c: 5 },
    "camming": { s: 4, c: 4 },
    "choking the chicken": { s: 4, c: 4 },
    "circle jerk": { s: 4, c: 4 },
    "circlejerking": { s: 4, c: 4 },
    "cockgobbling": { s: 4, c: 4 },
    "cock gobbling": { s: 4, c: 4 },
    "cockriding": { s: 4, c: 4 },
    "cock riding": { s: 4, c: 4 },
    "cockslapping": { s: 4, c: 4 },
    "cock slapping": { s: 4, c: 4 },
    "cockstroking": { s: 4, c: 4 },
    "cock stroking": { s: 4, c: 4 },
    "cock sucking": { s: 4, c: 4 },
    "cuminmyface": { s: 4, c: 5 },
    "cum in my face": { s: 4, c: 5 },
    "cumonme": { s: 4, c: 5 },
    "cum on me": { s: 4, c: 5 },
    "cumswap": { s: 4, c: 5 },
    "cum swap": { s: 4, c: 5 },
    "cumswapping": { s: 4, c: 5 },
    "cum swapping": { s: 4, c: 5 },
    "deep throating": { s: 4, c: 4 },
    "donkey punch": { s: 4, c: 4 },
    "double penetration": { s: 4, c: 4 },
    "dry hump": { s: 4, c: 4 },
    "dryhump": { s: 4, c: 4 },
    "dry humping": { s: 4, c: 4 },
    "dryhumping": { s: 4, c: 4 },
    "eatbox": { s: 4, c: 4 },
    "eat box": { s: 4, c: 4 },
    "eating out": { s: 4, c: 4 },
    "eatingout": { s: 4, c: 4 },
    "erection": { s: 4, c: 3 },
    "facefuck": { s: 4, c: 5 },
    "face fuck": { s: 4, c: 5 },
    "facefucking": { s: 4, c: 5 },
    "face fucking": { s: 4, c: 5 },
    "facesit": { s: 4, c: 4 },
    "face sit": { s: 4, c: 4 },
    "facesitting": { s: 4, c: 4 },
    "face sitting": { s: 4, c: 4 },
    "facial cumshot": { s: 4, c: 5 },
    "feltching": { s: 4, c: 4 },
    "fingerbanging": { s: 4, c: 4 },
    "finger banging": { s: 4, c: 4 },
    "foursome": { s: 4, c: 4 },
    "gang banging": { s: 4, c: 4 },
    "getting head": { s: 4, c: 4 },
    "gettinghead": { s: 4, c: 4 },
    "giving head": { s: 4, c: 4 },
    "givinghead": { s: 4, c: 4 },
    "glory hole": { s: 4, c: 4 },
    "gloryhole": { s: 4, c: 4 },
    "golden shower": { s: 4, c: 4 },
    "goldenshow": { s: 4, c: 4 },
    "goldenshower": { s: 4, c: 4 },
    "group sex": { s: 4, c: 4 },
    "groupsex": { s: 4, c: 4 },
    "hand job": { s: 4, c: 4 },
    "happyending": { s: 4, c: 4 },
    "happy ending": { s: 4, c: 4 },
    "hump": { s: 3, c: 3 },
    "humped": { s: 4, c: 4 },
    "jilling off": { s: 4, c: 4 },
    "jillingoff": { s: 4, c: 4 },
    "lapdance": { s: 4, c: 4 },
    "lap dance": { s: 4, c: 4 },
    "meatspin": { s: 4, c: 4 },
    "meatspins": { s: 4, c: 4 },
    "mouthfuck": { s: 4, c: 5 },
    "mouth fuck": { s: 4, c: 5 },
    "mouthfucking": { s: 4, c: 5 },
    "muffdive": { s: 4, c: 4 },
    "muff dive": { s: 4, c: 4 },
    "muffdiver": { s: 4, c: 4 },
    "muff diver": { s: 4, c: 4 },
    "pearl necklace": { s: 4, c: 4 },
    "pearlnecklace": { s: 4, c: 4 },
    "piledriver": { s: 4, c: 4 },
    "rawdog": { s: 4, c: 4 },
    "raw dog": { s: 4, c: 4 },
    "rawdogging": { s: 4, c: 4 },
    "raw dogging": { s: 4, c: 4 },
    "reach around": { s: 4, c: 4 },
    "reacharound": { s: 4, c: 4 },
    "rim job": { s: 4, c: 4 },
    "sexting": { s: 4, c: 4 },
    "skullfucking": { s: 4, c: 5 },
    "skull fucking": { s: 4, c: 5 },
    "soggy biscuit": { s: 4, c: 4 },
    "soggybiscuit": { s: 4, c: 4 },
    "spitroast": { s: 4, c: 4 },
    "spit roast": { s: 4, c: 4 },
    "spitroasting": { s: 4, c: 4 },
    "squirting": { s: 4, c: 4 },
    "suckoff": { s: 4, c: 4 },
    "suck off": { s: 4, c: 4 },
    "teabagged": { s: 4, c: 4 },
    "teabags": { s: 4, c: 4 },
    "tittyfuck": { s: 4, c: 5 },
    "titty fuck": { s: 4, c: 5 },
    "tittyfucking": { s: 4, c: 5 },
    "threeway": { s: 4, c: 4 },
    "three way": { s: 4, c: 4 },
    "throatfuck": { s: 4, c: 5 },
    "throat fuck": { s: 4, c: 5 },
    "throatfucking": { s: 4, c: 5 },
    "tossing salad": { s: 4, c: 4 },
    "tossingsalad": { s: 4, c: 4 },
    "watersports": { s: 4, c: 4 },
    "water sports": { s: 4, c: 4 },
    "wanked": { s: 4, c: 4 },
    "wankfest": { s: 4, c: 4 },
    // ===== HOMOPHOBIC/TRANSPHOBIC COMPOUNDS =====
    "gaybash": { s: 5, c: 4 },
    "gay bash": { s: 5, c: 4 },
    "gaybashing": { s: 5, c: 4 },
    "gay bashing": { s: 5, c: 4 },
    "gayboy": { s: 5, c: 4 },
    "gay boy": { s: 5, c: 4 },
    "gaytard": { s: 5, c: 4 },
    "gayfag": { s: 5, c: 4 },
    "fag lover": { s: 5, c: 4 },
    "faglover": { s: 5, c: 4 },
    "fag hag": { s: 5, c: 4 },
    "faghag": { s: 5, c: 4 },
    "faggotface": { s: 5, c: 4 },
    "faggotass": { s: 5, c: 4 },
    "dyke lover": { s: 5, c: 4 },
    "dykelover": { s: 5, c: 4 },
    "homoboy": { s: 5, c: 4 },
    "homo lover": { s: 5, c: 4 },
    "homolover": { s: 5, c: 4 },
    "pansyass": { s: 5, c: 4 },
    "sissyboy": { s: 5, c: 4 },
    "sissy boy": { s: 5, c: 4 },
    "rump ranger": { s: 5, c: 4 },
    "rumpranger": { s: 5, c: 4 },
    "turd burglar": { s: 5, c: 4 },
    "chutney ferret": { s: 5, c: 4 },
    "chutneyferret": { s: 5, c: 4 },
    "sausage jockey": { s: 5, c: 4 },
    "sausagejockey": { s: 5, c: 4 },
    "knob jockey": { s: 5, c: 4 },
    "arse bandit": { s: 5, c: 4 },
    "bum bandit": { s: 5, c: 4 },
    "trouser lifter": { s: 5, c: 4 },
    "trouserlifter": { s: 5, c: 4 },
    "she-males": { s: 5, c: 4 },
    "trannys": { s: 5, c: 5 },
    "trannie": { s: 5, c: 5 },
    "dickgirl": { s: 5, c: 4 },
    "dick girl": { s: 5, c: 4 },
    "shim": { s: 5, c: 4 },
    "gender bender": { s: 5, c: 4 },
    "genderbender": { s: 5, c: 4 },
    "hesheit": { s: 5, c: 4 },
    // ===== MISOGYNISTIC TERMS =====
    "cumsponge": { s: 4, c: 5 },
    "cum sponge": { s: 4, c: 5 },
    "cumtarget": { s: 4, c: 5 },
    "cum target": { s: 4, c: 5 },
    "cocktease": { s: 4, c: 4 },
    "cock tease": { s: 4, c: 4 },
    "cockteaser": { s: 4, c: 4 },
    "cock teaser": { s: 4, c: 4 },
    "prick teaser": { s: 3, c: 4 },
    "easy lay": { s: 3, c: 4 },
    "easylay": { s: 3, c: 4 },
    "town bike": { s: 3, c: 4 },
    "townbike": { s: 3, c: 4 },
    "village bicycle": { s: 3, c: 4 },
    "villagebicycle": { s: 3, c: 4 },
    "mattressback": { s: 3, c: 4 },
    "mattress back": { s: 3, c: 4 },
    "maneater": { s: 3, c: 4 },
    "man eater": { s: 3, c: 4 },
    "gold digger": { s: 3, c: 4 },
    "golddigger": { s: 3, c: 4 },
    "feminazi": { s: 3, c: 4 },
    "feminazis": { s: 3, c: 4 },
    "attention whore": { s: 5, c: 4 },
    "attentionwhore": { s: 5, c: 4 },
    "thot patrol": { s: 3, c: 4 },
    "thotpatrol": { s: 3, c: 4 },
    "thots": { s: 3, c: 4 },
    "thotty": { s: 3, c: 4 },
    "basic bitch": { s: 3, c: 4 },
    "basicbitch": { s: 3, c: 4 },
    "ditzy bitch": { s: 3, c: 4 },
    "ditzybitch": { s: 3, c: 4 },
    "bitchmade": { s: 3, c: 4 },
    "bitch made": { s: 3, c: 4 },
    "slutshamer": { s: 3, c: 4 },
    "slut shamer": { s: 3, c: 4 },
    "whoreface": { s: 5, c: 4 },
    "whore face": { s: 5, c: 4 },
    "whoremouth": { s: 5, c: 4 },
    "whore mouth": { s: 5, c: 4 },
    "whoremonger": { s: 5, c: 4 },
    "whore monger": { s: 5, c: 4 },
    "whoreson": { s: 5, c: 4 },
    "hag": { s: 3, c: 4 },
    "old hag": { s: 3, c: 4 },
    "oldhag": { s: 3, c: 4 },
    "old bat": { s: 3, c: 4 },
    "battleaxe": { s: 3, c: 4 },
    "fishwife": { s: 3, c: 4 },
    "ball buster": { s: 3, c: 4 },
    "shrew": { s: 3, c: 4 },
    "harpy": { s: 3, c: 4 },
    "succubus": { s: 3, c: 4 },
    "strumpet": { s: 3, c: 4 },
    // ===== DISABILITY SLURS EXPANDED =====
    "crip": { s: 5, c: 4 },
    "gimp suit": { s: 5, c: 4 },
    "gimpsuit": { s: 5, c: 4 },
    "gimped": { s: 5, c: 4 },
    "gimping": { s: 5, c: 4 },
    "lunatic": { s: 5, c: 4 },
    "lunatics": { s: 5, c: 4 },
    "mental case": { s: 5, c: 4 },
    "mentalcase": { s: 5, c: 4 },
    "mentalist": { s: 5, c: 4 },
    "mong face": { s: 5, c: 4 },
    "mongface": { s: 5, c: 4 },
    "mongoloid": { s: 5, c: 4 },
    "mongoloids": { s: 5, c: 4 },
    "psycho": { s: 5, c: 4 },
    "psychos": { s: 5, c: 4 },
    "nutcase": { s: 5, c: 4 },
    "nutcases": { s: 5, c: 4 },
    "nutjobs": { s: 5, c: 4 },
    "nutter": { s: 5, c: 4 },
    "nutters": { s: 5, c: 4 },
    "freakshow": { s: 5, c: 4 },
    "freak show": { s: 5, c: 4 },
    "dimwit": { s: 5, c: 4 },
    "dimwits": { s: 5, c: 4 },
    "nitwit": { s: 5, c: 4 },
    "nitwits": { s: 5, c: 4 },
    "numbskulls": { s: 5, c: 4 },
    "braindead": { s: 5, c: 4 },
    "brain dead": { s: 5, c: 4 },
    "brainless": { s: 5, c: 4 },
    "idiot": { s: 1, c: 4 },
    "idiots": { s: 5, c: 4 },
    "idiotic": { s: 5, c: 4 },
    "moronic": { s: 5, c: 4 },
    "spaz attack": { s: 5, c: 4 },
    "spazattack": { s: 5, c: 4 },
    "spaz out": { s: 5, c: 4 },
    "spazout": { s: 5, c: 4 },
    "spazzed": { s: 5, c: 4 },
    "spazzed out": { s: 5, c: 4 },
    "spazzing": { s: 5, c: 4 },
    "spazzing out": { s: 5, c: 4 },
    "riding the short bus": { s: 5, c: 4 },
    "short bus": { s: 5, c: 4 },
    "shortbus": { s: 5, c: 4 },
    "drooling idiot": { s: 5, c: 4 },
    "droolingidiot": { s: 5, c: 4 },
    "window licking": { s: 5, c: 4 },
    "windowlicking": { s: 5, c: 4 },
    // ===== RELIGIOUS PROFANITY =====
    "god damn": { s: 2, c: 3 },
    "god dammit": { s: 2, c: 3 },
    "god damn it": { s: 2, c: 3 },
    "godforsaken": { s: 2, c: 3 },
    "jesus christ": { s: 2, c: 3 },
    "jesuschrist": { s: 2, c: 3 },
    "jesus h christ": { s: 2, c: 3 },
    "jesusfuckingchrist": { s: 3, c: 5 },
    "christ on a bike": { s: 2, c: 3 },
    "christonabike": { s: 2, c: 3 },
    "christ on a cracker": { s: 2, c: 3 },
    "christonacracker": { s: 2, c: 3 },
    "holycrap": { s: 2, c: 4 },
    "holy crap": { s: 2, c: 4 },
    "holy hell": { s: 2, c: 3 },
    "holyhell": { s: 2, c: 3 },
    "for christ sake": { s: 2, c: 3 },
    "for gods sake": { s: 2, c: 3 },
    "godless": { s: 2, c: 3 },
    "heathen": { s: 2, c: 3 },
    "heathens": { s: 2, c: 3 },
    "infidel": { s: 2, c: 3 },
    "infidels": { s: 2, c: 3 },
    "blasphemer": { s: 2, c: 3 },
    "blasphemers": { s: 2, c: 3 },
    "heretic": { s: 2, c: 3 },
    "heretics": { s: 2, c: 3 },
    "christkiller": { s: 2, c: 3 },
    "christ killer": { s: 2, c: 3 },
    "christkillers": { s: 2, c: 3 },
    // ===== SCATOLOGICAL TERMS =====
    "anal leakage": { s: 3, c: 4 },
    "analleakage": { s: 3, c: 4 },
    "ass gravy": { s: 3, c: 4 },
    "assgravy": { s: 3, c: 4 },
    "ass juice": { s: 3, c: 4 },
    "assjuice": { s: 3, c: 4 },
    "ass paste": { s: 3, c: 4 },
    "asspaste": { s: 3, c: 4 },
    "ass wipe": { s: 3, c: 4 },
    "brown eye": { s: 3, c: 4 },
    "browneye": { s: 3, c: 4 },
    "bumgravy": { s: 3, c: 4 },
    "bum gravy": { s: 3, c: 4 },
    "butt gravy": { s: 3, c: 4 },
    "buttgravy": { s: 3, c: 4 },
    "butt juice": { s: 3, c: 4 },
    "buttjuice": { s: 3, c: 4 },
    "butt paste": { s: 3, c: 4 },
    "buttpaste": { s: 3, c: 4 },
    "butt nugget": { s: 3, c: 4 },
    "buttnugget": { s: 3, c: 4 },
    "cornlog": { s: 3, c: 4 },
    "corn log": { s: 3, c: 4 },
    "crapfactory": { s: 3, c: 4 },
    "crap factory": { s: 3, c: 4 },
    "crapper": { s: 3, c: 4 },
    "crappers": { s: 3, c: 4 },
    "crapping": { s: 3, c: 4 },
    "crappola": { s: 3, c: 4 },
    "dookie": { s: 3, c: 4 },
    "doody": { s: 3, c: 4 },
    "doodoo": { s: 3, c: 4 },
    "doo doo": { s: 3, c: 4 },
    "fart": { s: 3, c: 4 },
    "farts": { s: 3, c: 4 },
    "farted": { s: 3, c: 4 },
    "farting": { s: 3, c: 4 },
    "fartbag": { s: 3, c: 4 },
    "fartbox": { s: 3, c: 4 },
    "fartbreath": { s: 3, c: 4 },
    "farthead": { s: 3, c: 4 },
    "fartknocker": { s: 3, c: 4 },
    "fartsniffer": { s: 3, c: 4 },
    "fart sniffer": { s: 3, c: 4 },
    "loaf pincher": { s: 3, c: 4 },
    "loafpincher": { s: 3, c: 4 },
    "mudbutt": { s: 3, c: 4 },
    "mud butt": { s: 3, c: 4 },
    "pee pee": { s: 3, c: 4 },
    "peepee": { s: 3, c: 4 },
    "piss artist": { s: 3, c: 4 },
    "pissartist": { s: 3, c: 4 },
    "pissy": { s: 3, c: 4 },
    "poo": { s: 3, c: 4 },
    "pooh": { s: 3, c: 4 },
    "poo poo": { s: 3, c: 4 },
    "poopoo": { s: 3, c: 4 },
    "poop": { s: 3, c: 4 },
    "pooper": { s: 3, c: 4 },
    "pooping": { s: 3, c: 4 },
    "poopy": { s: 3, c: 4 },
    "poop chute": { s: 3, c: 4 },
    "poophead": { s: 3, c: 4 },
    "poop head": { s: 3, c: 4 },
    "poopface": { s: 3, c: 4 },
    "poop face": { s: 3, c: 4 },
    "poopstain": { s: 3, c: 4 },
    "poop stain": { s: 3, c: 4 },
    "prairie dogging": { s: 3, c: 4 },
    "prairiedogging": { s: 3, c: 4 },
    "scat play": { s: 3, c: 4 },
    "scatplay": { s: 3, c: 4 },
    "sharted": { s: 3, c: 4 },
    "sharting": { s: 3, c: 4 },
    "shart": { s: 3, c: 4 },
    "sharts": { s: 3, c: 4 },
    "skidmark": { s: 3, c: 4 },
    "skid mark": { s: 3, c: 4 },
    "skidmarks": { s: 3, c: 4 },
    "skid marks": { s: 3, c: 4 },
    "sphincter": { s: 3, c: 4 },
    "splashback": { s: 3, c: 4 },
    "splash back": { s: 3, c: 4 },
    "stinker": { s: 3, c: 4 },
    "stinkfinger": { s: 3, c: 4 },
    "stink finger": { s: 3, c: 4 },
    "turdcutter": { s: 3, c: 4 },
    "turd cutter": { s: 3, c: 4 },
    "turdhole": { s: 3, c: 4 },
    "turd hole": { s: 3, c: 4 },
    "turdlicker": { s: 3, c: 4 },
    "turd licker": { s: 3, c: 4 },
    "turdsandwich": { s: 3, c: 4 },
    "turd sandwich": { s: 3, c: 4 },
    "wee wee": { s: 3, c: 4 },
    "weewee": { s: 3, c: 4 },
    // ===== DRUG-RELATED INSULTS =====
    "blunt head": { s: 2, c: 3 },
    "blunthead": { s: 2, c: 3 },
    "bonghead": { s: 2, c: 3 },
    "bong head": { s: 2, c: 3 },
    "burnout": { s: 3, c: 4 },
    "crack baby": { s: 3, c: 4 },
    "crackbaby": { s: 3, c: 4 },
    "crack fiend": { s: 3, c: 4 },
    "crackfiend": { s: 3, c: 4 },
    "crack pipe": { s: 3, c: 4 },
    "crackpipe": { s: 3, c: 4 },
    "druggo": { s: 3, c: 4 },
    "druggos": { s: 3, c: 4 },
    "fried brain": { s: 3, c: 4 },
    "friedbrain": { s: 3, c: 4 },
    "meth face": { s: 3, c: 4 },
    "methface": { s: 3, c: 4 },
    "methmouth": { s: 3, c: 4 },
    "meth mouth": { s: 3, c: 4 },
    "needle junkie": { s: 3, c: 4 },
    "needlejunkie": { s: 3, c: 4 },
    "pillpopper": { s: 3, c: 4 },
    "pill popper": { s: 3, c: 4 },
    "reefer head": { s: 3, c: 4 },
    "reeferhead": { s: 3, c: 4 },
    "roach head": { s: 3, c: 4 },
    "roachhead": { s: 3, c: 4 },
    "speed freak": { s: 3, c: 4 },
    "speedfreak": { s: 3, c: 4 },
    "stoner bum": { s: 3, c: 4 },
    "stonerbum": { s: 3, c: 4 },
    "weedhead": { s: 3, c: 4 },
    "weed head": { s: 3, c: 4 },
    // ===== VIOLENT THREATS =====
    "beat the shit out of you": { s: 5, c: 5 },
    "beat your ass": { s: 5, c: 5 },
    "beatyourass": { s: 5, c: 5 },
    "blow your brains out": { s: 5, c: 5 },
    "blowyourbrainsout": { s: 5, c: 5 },
    "break your neck": { s: 5, c: 5 },
    "breakyourneck": { s: 5, c: 5 },
    "bust your face": { s: 5, c: 5 },
    "bustyourface": { s: 5, c: 5 },
    "catch these hands": { s: 5, c: 5 },
    "catchthesehands": { s: 5, c: 5 },
    "choke you": { s: 5, c: 5 },
    "chokeyou": { s: 5, c: 5 },
    "curb stomp you": { s: 5, c: 5 },
    "curbstompyou": { s: 5, c: 5 },
    "cut you": { s: 5, c: 5 },
    "cutyou": { s: 5, c: 5 },
    "cut your throat": { s: 5, c: 5 },
    "cutyourthroat": { s: 5, c: 5 },
    "die in a hole": { s: 5, c: 5 },
    "dieinahole": { s: 5, c: 5 },
    "drop dead": { s: 5, c: 5 },
    "dropdead": { s: 5, c: 5 },
    "eat glass": { s: 5, c: 5 },
    "eatglass": { s: 5, c: 5 },
    "end your life": { s: 5, c: 5 },
    "endyourlife": { s: 5, c: 5 },
    "get shot": { s: 5, c: 5 },
    "getshot": { s: 5, c: 5 },
    "get stabbed": { s: 5, c: 5 },
    "getstabbed": { s: 5, c: 5 },
    "gonna kill you": { s: 5, c: 5 },
    "gonnakill": { s: 5, c: 5 },
    "gut you": { s: 5, c: 5 },
    "gutyou": { s: 5, c: 5 },
    "i will kill you": { s: 5, c: 5 },
    "iwillkillyou": { s: 5, c: 5 },
    "ill kill you": { s: 5, c: 5 },
    "illkillyou": { s: 5, c: 5 },
    "kneecap you": { s: 5, c: 5 },
    "kneecapyou": { s: 5, c: 5 },
    "shoot you": { s: 5, c: 5 },
    "shootyou": { s: 5, c: 5 },
    "skin you alive": { s: 5, c: 5 },
    "skinyoualive": { s: 5, c: 5 },
    "slash your throat": { s: 5, c: 5 },
    "slashyourthroat": { s: 5, c: 5 },
    "smash your face": { s: 5, c: 5 },
    "smashyourface": { s: 5, c: 5 },
    "snap your neck": { s: 5, c: 5 },
    "snapyourneck": { s: 5, c: 5 },
    "stab you": { s: 5, c: 5 },
    "stabyou": { s: 5, c: 5 },
    "stomp your face": { s: 5, c: 5 },
    "stompyourface": { s: 5, c: 5 },
    "strangle you": { s: 5, c: 5 },
    "strangleyou": { s: 5, c: 5 },
    "watch you die": { s: 5, c: 5 },
    "watchyoudie": { s: 5, c: 5 },
    "you deserve to die": { s: 5, c: 5 },
    "youdeservetodie": { s: 5, c: 5 },
    "you should die": { s: 5, c: 5 },
    "youshoulddie": { s: 5, c: 5 },
    "bash your head in": { s: 5, c: 5 },
    "bashyourheadin": { s: 5, c: 5 },
    "beat your face in": { s: 5, c: 5 },
    "beatyourfacein": { s: 5, c: 5 },
    "bite the curb": { s: 5, c: 5 },
    "bitethecurb": { s: 5, c: 5 },
    "blow your head off": { s: 5, c: 5 },
    "blowyourheadoff": { s: 5, c: 5 },
    "break your face": { s: 5, c: 5 },
    "breakyourface": { s: 5, c: 5 },
    "break your legs": { s: 5, c: 5 },
    "breakyourlegs": { s: 5, c: 5 },
    "bury you": { s: 5, c: 5 },
    "buryyou": { s: 5, c: 5 },
    "cap your ass": { s: 5, c: 5 },
    "capyourass": { s: 5, c: 5 },
    "cave your head in": { s: 5, c: 5 },
    "caveyourheadin": { s: 5, c: 5 },
    "crush your skull": { s: 5, c: 5 },
    "crushyourskull": { s: 5, c: 5 },
    "die already": { s: 5, c: 5 },
    "diealready": { s: 5, c: 5 },
    "die bitch": { s: 5, c: 5 },
    "diebitch": { s: 5, c: 5 },
    "dismember you": { s: 5, c: 5 },
    "dismemberyou": { s: 5, c: 5 },
    "drown yourself": { s: 5, c: 5 },
    "drownyourself": { s: 5, c: 5 },
    "eat lead": { s: 5, c: 5 },
    "eatlead": { s: 5, c: 5 },
    "glass you": { s: 5, c: 5 },
    "glassyou": { s: 5, c: 5 },
    "gonna beat you": { s: 5, c: 5 },
    "gonnabeatyou": { s: 5, c: 5 },
    "gonna cut you": { s: 5, c: 5 },
    "gonnacutyou": { s: 5, c: 5 },
    "gonna stab you": { s: 5, c: 5 },
    "gonnastabyou": { s: 5, c: 5 },
    "hope you choke": { s: 5, c: 5 },
    "hopeyouchoke": { s: 5, c: 5 },
    "hope you get cancer": { s: 5, c: 5 },
    "hopeyougetcancer": { s: 5, c: 5 },
    "hope you suffer": { s: 5, c: 5 },
    "hopeyousuffer": { s: 5, c: 5 },
    "hunt you down": { s: 5, c: 5 },
    "huntyoudown": { s: 5, c: 5 },
    "i will find you": { s: 5, c: 5 },
    "iwillfindyou": { s: 5, c: 5 },
    "jump off a cliff": { s: 5, c: 5 },
    "jumpoffacliff": { s: 5, c: 5 },
    "kick your teeth in": { s: 5, c: 5 },
    "kickyourteethin": { s: 5, c: 5 },
    "murder you": { s: 5, c: 5 },
    "murderyou": { s: 5, c: 5 },
    "rip your head off": { s: 5, c: 5 },
    "ripyourheadoff": { s: 5, c: 5 },
    "run you over": { s: 5, c: 5 },
    "runyouover": { s: 5, c: 5 },
    "set you on fire": { s: 5, c: 5 },
    "setyouonfire": { s: 5, c: 5 },
    "shank you": { s: 5, c: 5 },
    "shankyou": { s: 5, c: 5 },
    "six feet under": { s: 5, c: 5 },
    "sixfeetunder": { s: 5, c: 5 },
    "slash you": { s: 5, c: 5 },
    "slashyou": { s: 5, c: 5 },
    "smack you": { s: 5, c: 5 },
    "smackyou": { s: 5, c: 5 },
    "stomp you out": { s: 5, c: 5 },
    "stompyouout": { s: 5, c: 5 },
    "throw hands": { s: 5, c: 5 },
    "throwhands": { s: 5, c: 5 },
    "waste you": { s: 5, c: 5 },
    "wasteyou": { s: 5, c: 5 },
    "wreck you": { s: 5, c: 5 },
    "wreckyou": { s: 5, c: 5 },
    "youre dead": { s: 5, c: 5 },
    "youredead": { s: 5, c: 5 },
    "youre dead meat": { s: 5, c: 5 },
    "youredeadmeat": { s: 5, c: 5 },
    // ===== INTERNET/GAMING TOXICITY =====
    "bot diff": { s: 2, c: 3 },
    "botdiff": { s: 2, c: 3 },
    "braindead player": { s: 2, c: 3 },
    "braindeadplayer": { s: 2, c: 3 },
    "clapped": { s: 2, c: 3 },
    "cringe lord": { s: 2, c: 3 },
    "cringelord": { s: 2, c: 3 },
    "cry more": { s: 2, c: 3 },
    "crymore": { s: 2, c: 3 },
    "cry about it": { s: 2, c: 3 },
    "cryaboutit": { s: 4, c: 4 },
    "delete the game": { s: 2, c: 3 },
    "deletethegame": { s: 2, c: 3 },
    "dog water": { s: 2, c: 3 },
    "dogwater": { s: 2, c: 3 },
    "dumpster fire": { s: 2, c: 3 },
    "dumpsterfire": { s: 2, c: 3 },
    "ez clap": { s: 2, c: 3 },
    "ezclap": { s: 2, c: 3 },
    "ez game": { s: 2, c: 3 },
    "ezgame": { s: 2, c: 3 },
    "ez pz": { s: 2, c: 3 },
    "ezpz": { s: 2, c: 3 },
    "feeder": { s: 2, c: 3 },
    "feeding": { s: 3, c: 4 },
    "free kill": { s: 3, c: 4 },
    "freekill": { s: 3, c: 4 },
    "gamer word": { s: 3, c: 4 },
    "gamerword": { s: 3, c: 4 },
    "garbage player": { s: 3, c: 4 },
    "garbageplayer": { s: 3, c: 4 },
    "gg ez": { s: 3, c: 4 },
    "ggez": { s: 3, c: 4 },
    "get clapped": { s: 3, c: 4 },
    "getclapped": { s: 3, c: 4 },
    "get destroyed": { s: 3, c: 4 },
    "getdestroyed": { s: 3, c: 4 },
    "get good": { s: 3, c: 4 },
    "getgood": { s: 3, c: 4 },
    "get owned": { s: 3, c: 4 },
    "getowned": { s: 3, c: 4 },
    "get rekt": { s: 3, c: 4 },
    "getrekt": { s: 3, c: 4 },
    "get wrecked": { s: 3, c: 4 },
    "getwrecked": { s: 3, c: 4 },
    "git gud": { s: 3, c: 4 },
    "gitgud": { s: 3, c: 4 },
    "go cry": { s: 3, c: 4 },
    "gocry": { s: 3, c: 4 },
    "griefer": { s: 3, c: 4 },
    "griefing": { s: 3, c: 4 },
    "hardstuck": { s: 3, c: 4 },
    "hard stuck": { s: 3, c: 4 },
    "inting": { s: 3, c: 4 },
    "jg diff": { s: 3, c: 4 },
    "jgdiff": { s: 3, c: 4 },
    "kill stealer": { s: 3, c: 4 },
    "killstealer": { s: 3, c: 4 },
    "l bozo": { s: 3, c: 4 },
    "lbozo": { s: 3, c: 4 },
    "l ratio": { s: 3, c: 4 },
    "lratio": { s: 3, c: 4 },
    "low elo": { s: 3, c: 4 },
    "lowelo": { s: 3, c: 4 },
    "lulz": { s: 3, c: 4 },
    "mad cuz bad": { s: 3, c: 4 },
    "madcuzbad": { s: 3, c: 4 },
    "malding": { s: 3, c: 4 },
    "mid diff": { s: 3, c: 4 },
    "middiff": { s: 3, c: 4 },
    "no skill": { s: 3, c: 4 },
    "noskill": { s: 3, c: 4 },
    "noob": { s: 1, c: 2 },
    "noobs": { s: 3, c: 4 },
    "noobie": { s: 3, c: 4 },
    "newb": { s: 3, c: 4 },
    "newbie": { s: 3, c: 4 },
    "owned": { s: 3, c: 4 },
    "powned": { s: 3, c: 4 },
    "pwned": { s: 3, c: 4 },
    "pwn3d": { s: 3, c: 5 },
    "pwnage": { s: 3, c: 4 },
    "ownage": { s: 3, c: 4 },
    "rage quit": { s: 3, c: 4 },
    "ragequit": { s: 3, c: 4 },
    "ragequitter": { s: 3, c: 4 },
    "ratio": { s: 3, c: 4 },
    "ratioed": { s: 3, c: 4 },
    "rekt": { s: 3, c: 4 },
    "rent free": { s: 3, c: 4 },
    "rentfree": { s: 3, c: 4 },
    "skill issue": { s: 3, c: 4 },
    "skillissue": { s: 3, c: 4 },
    "stay mad": { s: 3, c: 4 },
    "staymad": { s: 3, c: 4 },
    "stay pressed": { s: 3, c: 4 },
    "staypressed": { s: 3, c: 4 },
    "sweatlord": { s: 3, c: 4 },
    "sweat lord": { s: 3, c: 4 },
    "sweaty": { s: 3, c: 4 },
    "tilted": { s: 3, c: 4 },
    "top diff": { s: 3, c: 4 },
    "topdiff": { s: 3, c: 4 },
    "touch grass": { s: 3, c: 4 },
    "touchgrass": { s: 3, c: 4 },
    "trash player": { s: 3, c: 4 },
    "trashplayer": { s: 3, c: 4 },
    "trash talk": { s: 3, c: 4 },
    "trashtalk": { s: 3, c: 4 },
    "trashtalker": { s: 3, c: 4 },
    "trashtalking": { s: 3, c: 4 },
    "trolled": { s: 3, c: 4 },
    "trolling": { s: 3, c: 4 },
    "tryhard": { s: 1, c: 2 },
    "try hard": { s: 3, c: 4 },
    "uninstall": { s: 3, c: 4 },
    "washed up": { s: 3, c: 4 },
    "washedup": { s: 3, c: 4 },
    "you suck": { s: 3, c: 4 },
    "yousuck": { s: 3, c: 4 },
    "youre bad": { s: 3, c: 4 },
    "yourebad": { s: 3, c: 4 },
    "youre trash": { s: 3, c: 4 },
    "youretrash": { s: 3, c: 4 },
    "you stink": { s: 3, c: 4 },
    "youstink": { s: 3, c: 4 },
    "zero skill": { s: 3, c: 4 },
    "zeroskill": { s: 3, c: 4 },
    // ===== BRITISH SLANG EXPANDED =====
    "bawbag": { s: 3, c: 4 },
    "bampot": { s: 3, c: 4 },
    "barmpot": { s: 3, c: 4 },
    "bell whiff": { s: 3, c: 4 },
    "bellwhiff": { s: 3, c: 4 },
    "bogoff": { s: 3, c: 4 },
    "bog off": { s: 3, c: 4 },
    "bugger all": { s: 3, c: 4 },
    "buggerall": { s: 3, c: 4 },
    "cheeky git": { s: 3, c: 4 },
    "cheekygit": { s: 3, c: 4 },
    "cheeky sod": { s: 3, c: 4 },
    "cheekysod": { s: 3, c: 4 },
    "codswallop": { s: 3, c: 4 },
    "daft cow": { s: 3, c: 4 },
    "daftcow": { s: 3, c: 4 },
    "daft git": { s: 3, c: 4 },
    "daftgit": { s: 3, c: 4 },
    "daft twat": { s: 4, c: 4 },
    "dafttwat": { s: 4, c: 4 },
    "div": { s: 3, c: 4 },
    "divvy": { s: 3, c: 4 },
    "eejit": { s: 3, c: 4 },
    "fanny about": { s: 3, c: 4 },
    "fannyabout": { s: 3, c: 4 },
    "get knotted": { s: 3, c: 4 },
    "getknotted": { s: 3, c: 4 },
    "get stuffed": { s: 3, c: 4 },
    "getstuffed": { s: 3, c: 4 },
    "gobshites": { s: 3, c: 5 },
    "jammy git": { s: 3, c: 4 },
    "jammygit": { s: 3, c: 4 },
    "jammy bastard": { s: 5, c: 4 },
    "jammybastard": { s: 5, c: 4 },
    // FP: "jessie" — common name
    // "jessie": { s: 3, c: 4 },
    // FP: "jobbie" — triggers on "job" via separator-tolerant matching
    // "jobbie": { s: 3, c: 4 },
    "knob cheese": { s: 3, c: 4 },
    "mangy git": { s: 3, c: 4 },
    "mangygit": { s: 3, c: 4 },
    "meff": { s: 3, c: 4 },
    "midden": { s: 3, c: 4 },
    "ming": { s: 3, c: 4 },
    "minging": { s: 3, c: 4 },
    "numpty": { s: 1, c: 2 },
    "numptie": { s: 3, c: 4 },
    "numpties": { s: 3, c: 4 },
    "old fart": { s: 3, c: 4 },
    "oldfart": { s: 3, c: 4 },
    "pilchard": { s: 3, c: 4 },
    "plank": { s: 3, c: 4 },
    "ponce about": { s: 3, c: 4 },
    "ponceabout": { s: 3, c: 4 },
    "prat": { s: 1, c: 2 },
    "prats": { s: 3, c: 4 },
    "pratt": { s: 3, c: 4 },
    "ratarsed": { s: 3, c: 4 },
    "rat arsed": { s: 3, c: 4 },
    "scally": { s: 3, c: 4 },
    "scallywag": { s: 3, c: 4 },
    "scrotes": { s: 3, c: 4 },
    "slappers": { s: 3, c: 4 },
    "slag off": { s: 3, c: 4 },
    "slagoff": { s: 3, c: 4 },
    "slagging": { s: 3, c: 4 },
    "smarmy git": { s: 3, c: 4 },
    "smarmygit": { s: 3, c: 4 },
    "swine": { s: 3, c: 4 },
    "tit head": { s: 4, c: 4 },
    "tithead": { s: 4, c: 4 },
    "toerags": { s: 3, c: 4 },
    "tossers": { s: 3, c: 4 },
    "tossing": { s: 3, c: 4 },
    "toss off": { s: 3, c: 4 },
    "tossoff": { s: 3, c: 4 },
    "twits": { s: 3, c: 4 },
    "wally": { s: 3, c: 4 },
    "wallies": { s: 3, c: 4 },
    "wazzocks": { s: 3, c: 4 },
    "whinger": { s: 3, c: 4 },
    "wingnut": { s: 3, c: 4 },
    // FP: "yob" — leet speak j→y turns "job" into "yob"
    // "yob": { s: 3, c: 4 },
    // "yobbo": { s: 3, c: 4 },
    // "yobbos": { s: 3, c: 4 },
    // ===== AUSTRALIAN SLANG EXPANDED =====
    "bludger": { s: 3, c: 4 },
    "bludgers": { s: 3, c: 4 },
    "boofhead": { s: 3, c: 4 },
    "boofheads": { s: 3, c: 4 },
    "bush pig": { s: 3, c: 4 },
    "bushpig": { s: 3, c: 4 },
    "deadset drongo": { s: 3, c: 4 },
    "deadsetdrongo": { s: 3, c: 4 },
    "dipstick": { s: 3, c: 4 },
    "dipsticks": { s: 3, c: 4 },
    "dero": { s: 3, c: 4 },
    "deros": { s: 3, c: 4 },
    "dickwit": { s: 4, c: 4 },
    "dickwits": { s: 4, c: 4 },
    "dingbat": { s: 3, c: 4 },
    "dingbats": { s: 3, c: 4 },
    "dropkick": { s: 3, c: 4 },
    "dropkicks": { s: 3, c: 4 },
    "festy": { s: 3, c: 4 },
    "flamin galah": { s: 3, c: 4 },
    "flamingalah": { s: 3, c: 4 },
    "galah": { s: 3, c: 4 },
    "galahs": { s: 3, c: 4 },
    "hoon": { s: 3, c: 4 },
    "hoons": { s: 3, c: 4 },
    "mongrel": { s: 3, c: 4 },
    "mongrels": { s: 3, c: 4 },
    "no hoper": { s: 3, c: 4 },
    "nohoper": { s: 3, c: 4 },
    "piss weak": { s: 3, c: 4 },
    "pissweak": { s: 3, c: 4 },
    "ratbags": { s: 3, c: 4 },
    "shit stirrer": { s: 3, c: 5 },
    "shitstirrer": { s: 3, c: 5 },
    "show pony": { s: 3, c: 4 },
    "showpony": { s: 3, c: 4 },
    "silly bugger": { s: 3, c: 4 },
    "sillybugger": { s: 3, c: 4 },
    "sook": { s: 3, c: 4 },
    "sooks": { s: 3, c: 4 },
    "wowser": { s: 3, c: 4 },
    "wowsers": { s: 3, c: 4 },
    // ===== LEETSPEAK VARIANTS EXPANDED =====
    "4$$": { s: 3, c: 5 },
    "4ssh0l3": { s: 3, c: 5 },
    "b!tch3s": { s: 3, c: 5 },
    "b1tch3s": { s: 3, c: 5 },
    "b4st4rd": { s: 3, c: 5 },
    "b4stard": { s: 5, c: 5 },
    "ba5tard": { s: 5, c: 5 },
    "c0cksuck4": { s: 3, c: 5 },
    "c0nts": { s: 3, c: 5 },
    "cum5hot": { s: 4, c: 5 },
    "d!ckh34d": { s: 3, c: 5 },
    "d1ckh34d": { s: 3, c: 5 },
    "d1ckw33d": { s: 3, c: 5 },
    "d1ldos": { s: 3, c: 5 },
    "f@gg0ts": { s: 3, c: 5 },
    "f4gg0ts": { s: 3, c: 5 },
    "fck3r": { s: 3, c: 5 },
    "fcuk3r": { s: 3, c: 5 },
    "fuk3r": { s: 3, c: 5 },
    "fukk3r": { s: 3, c: 5 },
    "h00k3r": { s: 3, c: 5 },
    "h0m0": { s: 3, c: 5 },
    "k1ll y0urs3lf": { s: 3, c: 5 },
    "m0th3rfuck3r": { s: 3, c: 5 },
    "m0th4fuck4": { s: 3, c: 5 },
    "n!gg@": { s: 3, c: 5 },
    "n!gg@s": { s: 3, c: 5 },
    "n1664z": { s: 3, c: 5 },
    "n1gg@": { s: 3, c: 5 },
    "n1gg@z": { s: 3, c: 5 },
    "p3d0": { s: 3, c: 5 },
    "p3d0ph1l3": { s: 3, c: 5 },
    "p3rv": { s: 3, c: 5 },
    "pr0st1tut3": { s: 3, c: 5 },
    "r4c1st": { s: 3, c: 5 },
    "r4p3": { s: 3, c: 5 },
    "r4p3d": { s: 3, c: 5 },
    "r4p1st": { s: 3, c: 5 },
    "s3x": { s: 3, c: 5 },
    "s3xy": { s: 3, c: 5 },
    "sh!tb4g": { s: 3, c: 5 },
    "sh!th34d": { s: 3, c: 5 },
    "sh1tb4g": { s: 3, c: 5 },
    "sh1th34d": { s: 3, c: 5 },
    "sk4nky": { s: 3, c: 5 },
    "sl4g": { s: 3, c: 5 },
    "sl4gs": { s: 3, c: 5 },
    "w4nk3rs": { s: 3, c: 5 },
    // ===== UNICODE HOMOGLYPHS EXPANDED =====
    "bіtсh": { s: 3, c: 5 },
    "сoсk": { s: 3, c: 5 },
    "сum": { s: 3, c: 5 },
    "dіск": { s: 3, c: 5 },
    "fuск": { s: 3, c: 5 },
    "nіggа": { s: 3, c: 5 },
    "рuѕѕу": { s: 3, c: 5 },
    "ѕlut": { s: 3, c: 5 },
    "whоrе": { s: 3, c: 5 },
    "fаggоt": { s: 3, c: 5 },
    "rеtаrd": { s: 3, c: 5 },
    "bаstаrd": { s: 3, c: 5 },
    "wаnkеr": { s: 3, c: 5 },
    "tоssеr": { s: 3, c: 5 },
    // ===== SPACING/PUNCTUATION EVASIONS =====
    "a.s.s.h.o.l.e": { s: 3, c: 5 },
    "a-s-s-h-o-l-e": { s: 3, c: 5 },
    "a_s_s_h_o_l_e": { s: 3, c: 5 },
    "c.o.c.k.s.u.c.k.e.r": { s: 3, c: 5 },
    "c-o-c-k-s-u-c-k-e-r": { s: 3, c: 5 },
    "d.i.c.k.h.e.a.d": { s: 3, c: 5 },
    "d-i-c-k-h-e-a-d": { s: 3, c: 5 },
    "f-a-g-g-o-t": { s: 3, c: 5 },
    "m.o.t.h.e.r.f.u.c.k.e.r": { s: 3, c: 5 },
    "r.e.t.a.r.d": { s: 3, c: 5 },
    "r-e-t-a-r-d": { s: 3, c: 5 },
    "s.h.i.t.h.e.a.d": { s: 3, c: 5 },
    "w.a.n.k.e.r": { s: 3, c: 5 },
    "w-a-n-k-e-r": { s: 3, c: 5 },
    "f u c k e r": { s: 3, c: 5 },
    "c o c k s u c k e r": { s: 3, c: 5 },
    "d i c k h e a d": { s: 3, c: 5 },
    "m o t h e r f u c k e r": { s: 3, c: 5 },
    "s h i t h e a d": { s: 3, c: 5 },
    "w a n k e r": { s: 3, c: 5 },
    "r e t a r d": { s: 3, c: 5 },
    "a s s h o l e": { s: 3, c: 5 },
    // ===== ABBREVIATION PROFANITY =====
    "bamf": { s: 3, c: 4 },
    "dgaf": { s: 3, c: 4 },
    "fbgm": { s: 3, c: 4 },
    "fwb": { s: 3, c: 4 },
    "gtfoh": { s: 3, c: 4 },
    "kma": { s: 3, c: 4 },
    "kmfa": { s: 3, c: 4 },
    "nfw": { s: 3, c: 4 },
    "roflmao": { s: 3, c: 4 },
    "sfu": { s: 3, c: 4 },
    "stfa": { s: 3, c: 4 },
    "syfm": { s: 3, c: 4 },
    "tfu": { s: 3, c: 4 },
    "wgaf": { s: 3, c: 4 },
    "wtaf": { s: 3, c: 4 },
    "mfg": { s: 3, c: 4 },
    // ===== PHONETIC SPELLINGS EXPANDED =====
    "dee eye see kay": { s: 3, c: 4 },
    "double you aitch oh are ee": { s: 3, c: 4 },
    "eff ay gee": { s: 3, c: 4 },
    "en eye gee gee ee are": { s: 3, c: 4 },
    "see oh see kay": { s: 3, c: 4 },
    "pee you ess ess why": { s: 3, c: 4 },
    "ess ell you tee": { s: 3, c: 4 },
    "are ee tee ay are dee": { s: 3, c: 4 },
    "fyoo see kay": { s: 3, c: 4 },
    "sheet": { s: 3, c: 4 },
    "coq": { s: 3, c: 4 },
    "kawk": { s: 3, c: 4 },
    "hoor": { s: 3, c: 4 },
    "whoor": { s: 3, c: 4 },
    "hoer": { s: 3, c: 4 },
    "shlut": { s: 3, c: 4 },
    "fark": { s: 3, c: 4 },
    "farking": { s: 3, c: 4 },
    "farked": { s: 3, c: 4 },
    "fahking": { s: 3, c: 4 },
    "fouck": { s: 3, c: 4 },
    "btch": { s: 3, c: 4 },
    "whr": { s: 3, c: 4 },
    "hrny": { s: 3, c: 4 },
    "prn": { s: 3, c: 4 },
    // ===== ADDITIONAL COMPOUND INSULTS =====
    "arse licker": { s: 1, c: 4 },
    "arsemonger": { s: 1, c: 4 },
    "arse monger": { s: 1, c: 4 },
    "assbandito": { s: 3, c: 4 },
    "assblaster": { s: 3, c: 4 },
    "ass blaster": { s: 3, c: 4 },
    "assburglar": { s: 3, c: 4 },
    "ass burglar": { s: 3, c: 4 },
    "asscracker": { s: 3, c: 4 },
    "ass cracker": { s: 3, c: 4 },
    "assgrinder": { s: 3, c: 4 },
    "ass grinder": { s: 3, c: 4 },
    "assmaster": { s: 3, c: 4 },
    "ass master": { s: 3, c: 4 },
    "asspumper": { s: 3, c: 4 },
    "ass pumper": { s: 3, c: 4 },
    "assrammer": { s: 3, c: 4 },
    "ass rammer": { s: 3, c: 4 },
    "assreamer": { s: 3, c: 4 },
    "ass reamer": { s: 3, c: 4 },
    "asssmeller": { s: 3, c: 4 },
    "ass smeller": { s: 3, c: 4 },
    "bitch tits": { s: 3, c: 4 },
    "bitchwork": { s: 3, c: 4 },
    "bitch work": { s: 3, c: 4 },
    "cock breath": { s: 4, c: 4 },
    "cock juggler": { s: 4, c: 4 },
    "cockjuggler": { s: 4, c: 4 },
    "cock knocker": { s: 4, c: 4 },
    "cockknocker": { s: 4, c: 4 },
    "cock monster": { s: 4, c: 4 },
    "cockmonster": { s: 4, c: 4 },
    "cock wallet": { s: 4, c: 4 },
    "cockwallet": { s: 4, c: 4 },
    "cum bucket": { s: 4, c: 5 },
    "cumbucket": { s: 4, c: 5 },
    "cum gargler": { s: 4, c: 5 },
    "cumgargler": { s: 4, c: 5 },
    "cum gobbler": { s: 4, c: 5 },
    "cumgobbler": { s: 4, c: 5 },
    "cum junkie": { s: 4, c: 5 },
    "cumjunkie": { s: 4, c: 5 },
    "cum queen": { s: 4, c: 5 },
    "cumqueen": { s: 4, c: 5 },
    "cunt bubble": { s: 5, c: 5 },
    "cuntbubble": { s: 5, c: 5 },
    "cunt cake": { s: 5, c: 5 },
    "cuntcake": { s: 5, c: 5 },
    "cunt muscle": { s: 5, c: 5 },
    "cuntmuscle": { s: 5, c: 5 },
    "cunt nugget": { s: 5, c: 5 },
    "cuntnugget": { s: 5, c: 5 },
    "cunt stain": { s: 5, c: 5 },
    "cuntstain": { s: 5, c: 5 },
    "dick biscuit": { s: 4, c: 4 },
    "dickbiscuit": { s: 4, c: 4 },
    "dick fingers": { s: 4, c: 4 },
    "dickfingers": { s: 4, c: 4 },
    "dick gobbler": { s: 4, c: 4 },
    "dickgobbler": { s: 4, c: 4 },
    "dick lips": { s: 4, c: 4 },
    "dicklips": { s: 4, c: 4 },
    "dick stain": { s: 4, c: 4 },
    "dickstain": { s: 4, c: 4 },
    "dick weasel": { s: 4, c: 4 },
    "dickweasel": { s: 4, c: 4 },
    "douche monkey": { s: 3, c: 4 },
    "douchemonkey": { s: 3, c: 4 },
    "douche rocket": { s: 3, c: 4 },
    "doucherocket": { s: 3, c: 4 },
    "fuck bucket": { s: 3, c: 5 },
    "fuckbucket": { s: 3, c: 5 },
    "fuck chop": { s: 3, c: 5 },
    "fuckchop": { s: 3, c: 5 },
    "fuck hat": { s: 3, c: 5 },
    "fuckhat": { s: 3, c: 5 },
    "fuck knocker": { s: 3, c: 5 },
    "fuckknocker": { s: 3, c: 5 },
    "fuck muffin": { s: 3, c: 5 },
    "fuckmuffin": { s: 3, c: 5 },
    "fuck noodle": { s: 3, c: 5 },
    "fucknoodle": { s: 3, c: 5 },
    "fuck puppet": { s: 3, c: 5 },
    "fuckpuppet": { s: 3, c: 5 },
    "fuck sack": { s: 3, c: 5 },
    "fucksack": { s: 3, c: 5 },
    "fuck trophy": { s: 3, c: 5 },
    "fucktrophy": { s: 3, c: 5 },
    "jizz bucket": { s: 4, c: 5 },
    "jizzbucket": { s: 4, c: 5 },
    "jizz monkey": { s: 4, c: 5 },
    "jizzmonkey": { s: 4, c: 5 },
    "piss bag": { s: 3, c: 4 },
    "pissbag": { s: 3, c: 4 },
    "shit hawk": { s: 3, c: 5 },
    "shithawk": { s: 3, c: 5 },
    "slut muffin": { s: 3, c: 4 },
    "slutmuffin": { s: 3, c: 4 },
    "turd blossom": { s: 1, c: 4 },
    "turdblossom": { s: 1, c: 4 },
    "turd bucket": { s: 1, c: 4 },
    "turdbucket": { s: 1, c: 4 },
    "turd waffle": { s: 1, c: 4 },
    "turdwaffle": { s: 1, c: 4 },
    "twat rocket": { s: 4, c: 4 },
    "twatrocket": { s: 4, c: 4 },
    // ===== ADDITIONAL EVASION PATTERNS =====
    "a$$clown": { s: 3, c: 5 },
    "a$$face": { s: 3, c: 5 },
    "a$$hat": { s: 3, c: 5 },
    "a$$licker": { s: 3, c: 5 },
    "a$$munch": { s: 3, c: 5 },
    "b!tch3z": { s: 3, c: 5 },
    "c0cksuk4": { s: 3, c: 5 },
    "c0cksuk3r": { s: 3, c: 5 },
    "c*m": { s: 3, c: 5 },
    "c*mshot": { s: 3, c: 5 },
    "c*mslut": { s: 3, c: 5 },
    "d!ckwad": { s: 3, c: 5 },
    "d!ckface": { s: 3, c: 5 },
    "d*ckhead": { s: 3, c: 5 },
    "f*ckface": { s: 3, c: 5 },
    "f*ckhead": { s: 3, c: 5 },
    "f*ckwit": { s: 3, c: 5 },
    "h*e": { s: 3, c: 5 },
    "m*therfucker": { s: 3, c: 5 },
    "m*therf*cker": { s: 3, c: 5 },
    "p*rn": { s: 3, c: 5 },
    "r*pe": { s: 3, c: 5 },
    "r*pist": { s: 3, c: 5 },
    "s*ck my d*ck": { s: 3, c: 5 },
    "s*ut": { s: 3, c: 5 },
    "sh*thead": { s: 3, c: 5 },
    "sh*thole": { s: 3, c: 5 },
    "sk*nk": { s: 3, c: 5 },
    "t*ts": { s: 3, c: 5 },
    "tw*t": { s: 3, c: 5 },
    "w*nk": { s: 3, c: 5 },
    "w*nker": { s: 3, c: 5 },
    // ===== ADDITIONAL VULGAR PHRASES =====
    "bend over": { s: 3, c: 4 },
    "bendover": { s: 3, c: 4 },
    "blow your load": { s: 3, c: 4 },
    "blowyourload": { s: 3, c: 4 },
    "bust a nut": { s: 3, c: 4 },
    "bustanut": { s: 3, c: 4 },
    "choke on a dick": { s: 4, c: 4 },
    "chokeonadick": { s: 4, c: 4 },
    "cum in me": { s: 4, c: 5 },
    "cuminme": { s: 4, c: 5 },
    "cum inside": { s: 4, c: 5 },
    "cuminside": { s: 4, c: 5 },
    "eat me out": { s: 3, c: 4 },
    "eatmeout": { s: 3, c: 4 },
    "eat my cock": { s: 4, c: 4 },
    "eatmycock": { s: 4, c: 4 },
    "eat my pussy": { s: 4, c: 4 },
    "eatmypussy": { s: 4, c: 4 },
    "finger me": { s: 3, c: 4 },
    "fingerme": { s: 3, c: 4 },
    "fist me": { s: 3, c: 4 },
    "fistme": { s: 3, c: 4 },
    "get on your knees": { s: 3, c: 4 },
    "getonyourknees": { s: 3, c: 4 },
    "lick my balls": { s: 3, c: 4 },
    "lickmyballs": { s: 3, c: 4 },
    "lick my clit": { s: 3, c: 4 },
    "lickmyclit": { s: 3, c: 4 },
    "lick my dick": { s: 4, c: 4 },
    "lickmydick": { s: 4, c: 4 },
    "lick my pussy": { s: 4, c: 4 },
    "lickmypussy": { s: 4, c: 4 },
    "pound my ass": { s: 3, c: 4 },
    "poundmyass": { s: 3, c: 4 },
    "ride my dick": { s: 4, c: 4 },
    "ridemydick": { s: 4, c: 4 },
    "ride my face": { s: 3, c: 4 },
    "ridemyface": { s: 3, c: 4 },
    "sit on my face": { s: 3, c: 4 },
    "sitonmyface": { s: 3, c: 4 },
    "spread your legs": { s: 3, c: 4 },
    "spreadyourlegs": { s: 3, c: 4 },
    "suck my balls": { s: 3, c: 4 },
    "suckmyballs": { s: 3, c: 4 },
    "suck my clit": { s: 3, c: 4 },
    "suckmyclit": { s: 3, c: 4 },
    "suck my tits": { s: 4, c: 4 },
    "suckmytits": { s: 4, c: 4 },
    "take it up the ass": { s: 3, c: 4 },
    "takeituptheass": { s: 3, c: 4 },
    "up the ass": { s: 3, c: 4 },
    "uptheass": { s: 3, c: 4 },
    // ===== MODERN INTERNET SLANG =====
    "autist": { s: 2, c: 3 },
    "autists": { s: 2, c: 3 },
    "autistic screeching": { s: 2, c: 3 },
    "basement dweller": { s: 2, c: 3 },
    "basementdweller": { s: 2, c: 3 },
    "brainlet": { s: 2, c: 3 },
    "brainlets": { s: 2, c: 3 },
    "butthurt": { s: 2, c: 3 },
    "butt hurt": { s: 2, c: 3 },
    "clout chaser": { s: 2, c: 3 },
    "cloutchaser": { s: 2, c: 3 },
    "coomer brain": { s: 2, c: 3 },
    "coomerbrain": { s: 2, c: 3 },
    "cum brain": { s: 4, c: 5 },
    "cumbrain": { s: 4, c: 5 },
    "degen": { s: 2, c: 3 },
    "degens": { s: 2, c: 3 },
    "doxxed": { s: 2, c: 3 },
    "doxxing": { s: 2, c: 3 },
    "e-thot": { s: 2, c: 3 },
    "ethot": { s: 2, c: 3 },
    "e-whore": { s: 5, c: 4 },
    "ewhore": { s: 5, c: 4 },
    "fake and gay": { s: 2, c: 3 },
    "fakeandgay": { s: 2, c: 3 },
    "fat neckbeard": { s: 2, c: 3 },
    "fatneckbeard": { s: 2, c: 3 },
    "femcel": { s: 2, c: 3 },
    "gammon": { s: 2, c: 3 },
    "inbred": { s: 2, c: 3 },
    "keyboard warrior": { s: 2, c: 3 },
    "keyboardwarrior": { s: 2, c: 3 },
    "kek": { s: 2, c: 3 },
    "kekw": { s: 2, c: 3 },
    "libtard": { s: 5, c: 4 },
    "libtards": { s: 5, c: 4 },
    "lolcow": { s: 2, c: 3 },
    "lolcows": { s: 2, c: 3 },
    "mald": { s: 2, c: 3 },
    "man child": { s: 2, c: 3 },
    "manchild": { s: 2, c: 3 },
    "man children": { s: 2, c: 3 },
    "manchildren": { s: 2, c: 3 },
    "mouth breather": { s: 2, c: 3 },
    "mouthbreather": { s: 2, c: 3 },
    "neckbeards": { s: 2, c: 3 },
    "normie": { s: 2, c: 3 },
    "normies": { s: 2, c: 3 },
    "ok boomer": { s: 2, c: 3 },
    "okboomer": { s: 2, c: 3 },
    "pick me": { s: 2, c: 3 },
    "pickme": { s: 2, c: 3 },
    "pick me girl": { s: 2, c: 3 },
    "pickmegirl": { s: 2, c: 3 },
    "plebbit": { s: 2, c: 3 },
    "plebs": { s: 2, c: 3 },
    "reddit moment": { s: 2, c: 3 },
    "redditmoment": { s: 2, c: 3 },
    "schizo": { s: 2, c: 3 },
    "schizos": { s: 2, c: 3 },
    "schizopost": { s: 2, c: 3 },
    "seething": { s: 2, c: 3 },
    "snowflake": { s: 2, c: 3 },
    "snowflakes": { s: 2, c: 3 },
    "soyjak": { s: 2, c: 3 },
    "soy boy": { s: 2, c: 3 },
    "streamer simp": { s: 2, c: 3 },
    "streamersimp": { s: 2, c: 3 },
    "terminally online": { s: 2, c: 3 },
    "terminallyonline": { s: 2, c: 3 },
    "touch grass loser": { s: 3, c: 3 },
    "touchgrassloser": { s: 3, c: 3 },
    "troglodyte": { s: 2, c: 3 },
    "troglodytes": { s: 2, c: 3 },
    "twitch thot": { s: 2, c: 3 },
    "twitchthot": { s: 2, c: 3 },
    "virgin loser": { s: 2, c: 3 },
    "virginloser": { s: 2, c: 3 },
    "waste of air": { s: 2, c: 3 },
    "wasteofair": { s: 2, c: 3 },
    "waste of oxygen": { s: 2, c: 3 },
    "wasteofoxygen": { s: 2, c: 3 },
    "waste of skin": { s: 2, c: 3 },
    "wasteofskin": { s: 2, c: 3 },
    "waste of space": { s: 2, c: 3 },
    "wasteofspace": { s: 2, c: 3 },
    "white knight": { s: 2, c: 3 },
    "whiteknight": { s: 2, c: 3 },
    "white knighting": { s: 2, c: 3 },
    "whiteknighting": { s: 2, c: 3 },
    // ===== FOREIGN LANGUAGE PROFANITY (commonly used in English) =====
    "chutiya": { s: 3, c: 4 },
    "madarchod": { s: 5, c: 5 },
    "benchod": { s: 3, c: 4 },
    "bhenchod": { s: 5, c: 5 },
    "bhosdike": { s: 3, c: 4 },
    "gaand": { s: 3, c: 4 },
    "chodu": { s: 3, c: 4 },
    "randi": { s: 3, c: 4 },
    "hijo de puta": { s: 5, c: 5 },
    "puta": { s: 3, c: 4 },
    "puto": { s: 3, c: 4 },
    "mierda": { s: 3, c: 4 },
    "cabron": { s: 3, c: 4 },
    "pendejo": { s: 3, c: 4 },
    "verga": { s: 3, c: 4 },
    "culo": { s: 3, c: 4 },
    "coglione": { s: 3, c: 4 },
    "stronzo": { s: 3, c: 4 },
    "vaffanculo": { s: 3, c: 4 },
    "putain": { s: 3, c: 4 },
    "merde": { s: 3, c: 4 },
    "connard": { s: 3, c: 4 },
    "connasse": { s: 3, c: 4 },
    "salope": { s: 3, c: 4 },
    "enculer": { s: 3, c: 4 },
    "scheisse": { s: 3, c: 4 },
    "arschloch": { s: 3, c: 4 },
    "hurensohn": { s: 5, c: 5 },
    "fotze": { s: 3, c: 4 },
    "wichser": { s: 3, c: 4 },
    "kurwa": { s: 3, c: 4 },
    "blyat": { s: 3, c: 4 },
    "suka": { s: 3, c: 4 },
    "cyka": { s: 3, c: 4 },
    "cyka blyat": { s: 3, c: 4 },
    "cykablyat": { s: 3, c: 4 },
    "nahui": { s: 3, c: 4 },
    "pizdec": { s: 3, c: 4 },
    "mudak": { s: 3, c: 4 },
    "gavno": { s: 3, c: 4 },
    "ebat": { s: 3, c: 4 },
    "chinga tu madre": { s: 3, c: 4 },
    "chingatumadre": { s: 3, c: 4 },
    "kutje": { s: 3, c: 4 },
    "poes": { s: 3, c: 4 },
    "naai": { s: 3, c: 4 },
    "voetsek": { s: 3, c: 4 },
    "doos": { s: 3, c: 4 },
    "kak": { s: 3, c: 4 },
    // ===== COMBINED LEET EVASION =====
    "azzhol3": { s: 3, c: 5 },
    "b1tchass": { s: 3, c: 5 },
    "b1tchb0y": { s: 3, c: 5 },
    "c0ckface": { s: 3, c: 5 },
    "c0ckgobbler": { s: 3, c: 5 },
    "c0cklicker": { s: 3, c: 5 },
    "c0ckmonger": { s: 3, c: 5 },
    "c0cksm0ker": { s: 3, c: 5 },
    "c0cksuck": { s: 3, c: 5 },
    "d!ckbr41n": { s: 3, c: 5 },
    "d!ckl3ss": { s: 3, c: 5 },
    "d!cksuck3r": { s: 3, c: 5 },
    "d1ckbr41n": { s: 3, c: 5 },
    "d1ckf4c3": { s: 3, c: 5 },
    "d1ckl3ss": { s: 3, c: 5 },
    "d1cksuck3r": { s: 3, c: 5 },
    "f@ckf4c3": { s: 3, c: 5 },
    "f@ckh34d": { s: 3, c: 5 },
    "f@ckw1t": { s: 3, c: 5 },
    "f4ckf4c3": { s: 3, c: 5 },
    "f4ckh34d": { s: 3, c: 5 },
    "fuckf4c3": { s: 3, c: 5 },
    "n!gg3rz": { s: 3, c: 5 },
    "n1g n0g": { s: 3, c: 5 },
    "n1gn0g": { s: 3, c: 5 },
    "sh!tb1rd": { s: 3, c: 5 },
    "sh!tf4c3": { s: 3, c: 5 },
    "sh!th0l3": { s: 3, c: 5 },
    "sh!tl0rd": { s: 3, c: 5 },
    "sh1tb1rd": { s: 3, c: 5 },
    "sh1tf4c3": { s: 3, c: 5 },
    "sh1th0l3": { s: 3, c: 5 },
    "sh1tl0rd": { s: 3, c: 5 },
    // ===== ADDITIONAL THREAT PHRASES =====
    "beat the crap out of you": { s: 5, c: 5 },
    "beat the living shit": { s: 5, c: 5 },
    "brain you": { s: 5, c: 5 },
    "brainyou": { s: 5, c: 5 },
    "carve you up": { s: 5, c: 5 },
    "carveyouup": { s: 5, c: 5 },
    "come at me": { s: 5, c: 5 },
    "comeatme": { s: 5, c: 5 },
    "die please": { s: 5, c: 5 },
    "eviscerate you": { s: 5, c: 5 },
    "eviscerateyou": { s: 5, c: 5 },
    "gonna kill": { s: 5, c: 5 },
    "i hope you get raped": { s: 5, c: 5 },
    "put a bullet in you": { s: 5, c: 5 },
    "smother you": { s: 5, c: 5 },
    "smotheryou": { s: 5, c: 5 },
    // ===== ADDITIONAL MISC COMPOUNDS =====
    "assgasket": { s: 3, c: 5 },
    "assking": { s: 3, c: 5 },
    "assmunger": { s: 3, c: 5 },
    "ass munger": { s: 3, c: 5 },
    "asscavity": { s: 3, c: 5 },
    "assflapper": { s: 3, c: 5 },
    "bellsniff": { s: 3, c: 5 },
    "bell sniff": { s: 3, c: 5 },
    "asstard": { s: 3, c: 5 },
    "ass tard": { s: 3, c: 5 },
    "cock block": { s: 4, c: 5 },
    "cockblocked": { s: 4, c: 5 },
    "cock blocked": { s: 4, c: 5 },
    "cockblocking": { s: 4, c: 5 },
    "cock blocking": { s: 4, c: 5 },
    "cockblocker": { s: 4, c: 5 },
    "cock blocker": { s: 4, c: 5 },
    "cumonyourface": { s: 4, c: 5 },
    "cum on your face": { s: 4, c: 5 },
    "shit lips": { s: 3, c: 5 },
    "shit sipper": { s: 3, c: 5 },
    "shit spitter": { s: 3, c: 5 },
    "slut whore": { s: 5, c: 5 },
    "spunk jockey": { s: 3, c: 5 },
    "spunk bubble": { s: 3, c: 5 },
    "spunk face": { s: 3, c: 5 },
    "spunk monkey": { s: 3, c: 5 },
    "spunk rat": { s: 3, c: 5 },
    "wank bucket": { s: 3, c: 5 },
    "dick for": { s: 4, c: 5 },
    "dick rot": { s: 4, c: 5 },
    "dick worm": { s: 4, c: 5 },
    "dick pull": { s: 4, c: 5 },
    "dong face": { s: 3, c: 5 },
    "douche lord": { s: 3, c: 5 },
    "douche wad": { s: 3, c: 5 },
    "fuck pile": { s: 3, c: 5 },
    "fuck sicle": { s: 3, c: 5 },
    "gay fuck": { s: 3, c: 5 },
    "gay shit": { s: 3, c: 5 },
    "hoe bag": { s: 3, c: 5 },
    "horse fucker": { s: 3, c: 5 },
    "jizz ball": { s: 4, c: 5 },
    "jizz bag": { s: 4, c: 5 },
    "jizz breath": { s: 4, c: 5 },
    "jizz jar": { s: 4, c: 5 },
    "knob chops": { s: 3, c: 5 },
    "knob goblin": { s: 3, c: 5 },
    "knob rash": { s: 3, c: 5 },
    "knob shine": { s: 3, c: 5 },
    "meat flap": { s: 3, c: 5 },
    "pecker brain": { s: 3, c: 5 },
    "pecker face": { s: 3, c: 5 },
    "penis breath": { s: 3, c: 5 },
    "penis face": { s: 3, c: 5 },
    "penis head": { s: 3, c: 5 },
    "penis wrinkle": { s: 3, c: 5 },
    "pig fucker": { s: 3, c: 5 },
    "pole smoker": { s: 3, c: 5 },
    "poon hound": { s: 3, c: 5 },
    "prick lick": { s: 3, c: 5 },
    "prick weed": { s: 3, c: 5 },
    "shit fucker": { s: 3, c: 5 },
    "shit gobbler": { s: 3, c: 5 },
    "shit licker": { s: 3, c: 5 },
    "shit muncher": { s: 3, c: 5 },
    "shit sucker": { s: 3, c: 5 },
    "slut monger": { s: 3, c: 5 },
    "snatch face": { s: 3, c: 5 },
    "tit fucker": { s: 3, c: 5 },
    "tit licker": { s: 4, c: 5 },
    "tit sucker": { s: 4, c: 5 },

    // ===== BATCH 28: MORE ADJECTIVE+NOUN COMPOUNDS =====
    "retarded fuck": { s: 3, c: 5 },
    "retardedfuck": { s: 3, c: 5 },
    "retarded cunt": { s: 5, c: 5 },
    "retardedcunt": { s: 5, c: 5 },
    "retarded bitch": { s: 3, c: 5 },
    "retardedbitch": { s: 3, c: 5 },
    "retarded twat": { s: 4, c: 5 },
    "retardedtwat": { s: 4, c: 5 },
    "retarded prick": { s: 5, c: 5 },
    "retardedprick": { s: 5, c: 5 },
    "retarded bastard": { s: 5, c: 5 },
    "retardedbastard": { s: 5, c: 5 },
    "wretched cunt": { s: 5, c: 5 },
    "wretchedcunt": { s: 5, c: 5 },
    "wretched bitch": { s: 3, c: 5 },
    "wretchedbitch": { s: 3, c: 5 },
    "stinking cunt": { s: 5, c: 5 },
    "stinkingcunt": { s: 5, c: 5 },
    "stinking bitch": { s: 3, c: 5 },
    "stinkingbitch": { s: 3, c: 5 },
    "stinking whore": { s: 5, c: 5 },
    "stinkingwhore": { s: 5, c: 5 },
    "lousy fuck": { s: 3, c: 5 },
    "lousyfuck": { s: 3, c: 5 },
    "lousy cunt": { s: 5, c: 5 },
    "lousycunt": { s: 5, c: 5 },
    "lousy bitch": { s: 3, c: 5 },
    "lousybitch": { s: 3, c: 5 },
    "lousy bastard": { s: 5, c: 5 },
    "lousybastard": { s: 5, c: 5 },
    "pathetic twat": { s: 4, c: 5 },
    "pathetictwat": { s: 4, c: 5 },
    "pathetic prick": { s: 3, c: 5 },
    "patheticprick": { s: 3, c: 5 },
    "pathetic wanker": { s: 3, c: 5 },
    "patheticwanker": { s: 3, c: 5 },
    "miserable fuck": { s: 3, c: 5 },
    "miserablefuck": { s: 3, c: 5 },
    "miserable cunt": { s: 5, c: 5 },
    "miserablecunt": { s: 5, c: 5 },
    "miserable bitch": { s: 3, c: 5 },
    "miserablebitch": { s: 3, c: 5 },
    "miserable bastard": { s: 5, c: 5 },
    "miserablebastard": { s: 5, c: 5 },
    "ignorant fuck": { s: 3, c: 5 },
    "ignorantfuck": { s: 3, c: 5 },
    "ignorant cunt": { s: 5, c: 5 },
    "ignorantcunt": { s: 5, c: 5 },
    "ignorant bitch": { s: 3, c: 5 },
    "ignorantbitch": { s: 3, c: 5 },
    "ignorant bastard": { s: 5, c: 5 },
    "ignorantbastard": { s: 5, c: 5 },
    "brainless fuck": { s: 3, c: 5 },
    "brainlessfuck": { s: 3, c: 5 },
    "brainless cunt": { s: 5, c: 5 },
    "brainlesscunt": { s: 5, c: 5 },
    "brainless twat": { s: 4, c: 5 },
    "brainlesstwat": { s: 4, c: 5 },
    "brainless bitch": { s: 3, c: 5 },
    "brainlessbitch": { s: 3, c: 5 },
    "crusty cunt": { s: 5, c: 5 },
    "crustycunt": { s: 5, c: 5 },
    "crusty bitch": { s: 3, c: 5 },
    "crustybitch": { s: 3, c: 5 },
    "crusty whore": { s: 5, c: 5 },
    "crustywhore": { s: 5, c: 5 },
    "slimy cunt": { s: 5, c: 5 },
    "slimycunt": { s: 5, c: 5 },
    "slimy bastard": { s: 5, c: 5 },
    "slimybastard": { s: 5, c: 5 },
    "slimy prick": { s: 3, c: 5 },
    "slimyprick": { s: 3, c: 5 },
    "rotten cunt": { s: 5, c: 5 },
    "rottencunt": { s: 5, c: 5 },
    "rotten bastard": { s: 5, c: 5 },
    "rottenbastard": { s: 5, c: 5 },
    "rotten bitch": { s: 3, c: 5 },
    "rottenbitch": { s: 3, c: 5 },
    "vile cunt": { s: 5, c: 5 },
    "vilecunt": { s: 5, c: 5 },
    "vile bitch": { s: 3, c: 5 },
    "vilebitch": { s: 3, c: 5 },
    "vile bastard": { s: 5, c: 5 },
    "vilebastard": { s: 5, c: 5 },
    "disgusting fuck": { s: 3, c: 5 },
    "disgustingfuck": { s: 3, c: 5 },
    "disgusting cunt": { s: 5, c: 5 },
    "disgustingcunt": { s: 5, c: 5 },
    "disgusting bitch": { s: 3, c: 5 },
    "disgustingbitch": { s: 3, c: 5 },
    "disgusting pig": { s: 3, c: 5 },
    "disgustingpig": { s: 3, c: 5 },
    "disgusting whore": { s: 5, c: 5 },
    "disgustingwhore": { s: 5, c: 5 },
    "sorry cunt": { s: 5, c: 5 },
    "sorrycunt": { s: 5, c: 5 },
    "sorry bastard": { s: 5, c: 5 },
    "sorrybastard": { s: 5, c: 5 },
    "sorry bitch": { s: 3, c: 5 },
    "sorrybitch": { s: 3, c: 5 },
    "sorry prick": { s: 3, c: 5 },
    "sorryprick": { s: 3, c: 5 },
    "pitiful fuck": { s: 3, c: 5 },
    "pitifulfuck": { s: 3, c: 5 },
    "pitiful cunt": { s: 5, c: 5 },
    "pitifulcunt": { s: 5, c: 5 },
    "pitiful bitch": { s: 3, c: 5 },
    "pitifulbitch": { s: 3, c: 5 },
    "hideous cunt": { s: 5, c: 5 },
    "hideouscunt": { s: 5, c: 5 },
    "hideous bitch": { s: 3, c: 5 },
    "hideousbitch": { s: 3, c: 5 },
    "gross fuck": { s: 3, c: 5 },
    "grossfuck": { s: 3, c: 5 },
    "gross cunt": { s: 5, c: 5 },
    "grosscunt": { s: 5, c: 5 },
    "gross bitch": { s: 3, c: 5 },
    "grossbitch": { s: 3, c: 5 },
    "gross whore": { s: 5, c: 5 },
    "grosswhore": { s: 5, c: 5 },
    "gross pig": { s: 3, c: 5 },
    "grosspig": { s: 3, c: 5 },
    "pathetic piece of shit": { s: 3, c: 5 },
    "useless piece of shit": { s: 3, c: 5 },
    "worthless piece of crap": { s: 3, c: 5 },
    "complete piece of shit": { s: 3, c: 5 },
    "total piece of shit": { s: 3, c: 5 },
    "absolute piece of shit": { s: 3, c: 5 },
    "utter piece of shit": { s: 3, c: 5 },
    "fucking piece of shit": { s: 3, c: 5 },
    "stupid piece of shit": { s: 3, c: 5 },
    "dumb piece of shit": { s: 3, c: 5 },
    // ===== BATCH 29: MORE SEXUAL TERMS =====
    "bj": { s: 4, c: 4 },
    "blowie": { s: 4, c: 4 },
    "blowies": { s: 4, c: 4 },
    "boned": { s: 4, c: 4 },
    "boner pill": { s: 4, c: 4 },
    "bonerpill": { s: 4, c: 4 },
    "boob job": { s: 4, c: 4 },
    "boobjob": { s: 4, c: 4 },
    "booby": { s: 4, c: 4 },
    "boobies": { s: 4, c: 4 },
    "booty": { s: 4, c: 1 },
    "clam slam": { s: 4, c: 4 },
    "clamslam": { s: 4, c: 4 },
    "cock ring": { s: 4, c: 4 },
    "coitus": { s: 4, c: 4 },
    "cream pie": { s: 4, c: 4 },
    "cum rag": { s: 4, c: 5 },
    "cum sock": { s: 4, c: 5 },
    "cum wad": { s: 4, c: 5 },
    "cunt punt": { s: 5, c: 5 },
    "cybersex": { s: 4, c: 4 },
    "cyber sex": { s: 4, c: 4 },
    "deep throat": { s: 4, c: 4 },
    "dick pic": { s: 4, c: 4 },
    "dickpic": { s: 4, c: 4 },
    "dick pics": { s: 4, c: 4 },
    "dickpics": { s: 4, c: 4 },
    "dirty talk": { s: 4, c: 4 },
    "dirtytalk": { s: 4, c: 4 },
    "dong": { s: 4, c: 4 },
    "dongs": { s: 4, c: 4 },
    "double dong": { s: 4, c: 4 },
    "doubledong": { s: 4, c: 4 },
    "eating ass": { s: 4, c: 4 },
    "eatingass": { s: 4, c: 4 },
    "eat ass": { s: 4, c: 4 },
    "eatass": { s: 4, c: 4 },
    "edging": { s: 4, c: 4 },
    "exhibitionist": { s: 4, c: 4 },
    "fellatrix": { s: 4, c: 4 },
    "fingerfuck": { s: 4, c: 5 },
    "finger fuck": { s: 4, c: 5 },
    "fingerfucking": { s: 4, c: 5 },
    "finger fucking": { s: 4, c: 5 },
    "foot fetish": { s: 4, c: 4 },
    "footfetish": { s: 4, c: 4 },
    "foreplay": { s: 4, c: 4 },
    "frottage": { s: 4, c: 4 },
    "gang rape": { s: 5, c: 5 },
    "gangrape": { s: 5, c: 5 },
    "getting laid": { s: 4, c: 4 },
    "gettinglaid": { s: 4, c: 4 },
    "hand relief": { s: 4, c: 4 },
    "handrelief": { s: 4, c: 4 },
    "hookup": { s: 4, c: 4 },
    "hook up": { s: 4, c: 4 },
    "hooking up": { s: 4, c: 4 },
    "hookingup": { s: 4, c: 4 },
    "jacking off": { s: 4, c: 4 },
    "jackingoff": { s: 4, c: 4 },
    "jerking it": { s: 4, c: 4 },
    "jerkingit": { s: 4, c: 4 },
    "knob job": { s: 4, c: 4 },
    "knobjob": { s: 4, c: 4 },
    "money shot": { s: 4, c: 4 },
    "moneyshot": { s: 4, c: 4 },
    "nookie": { s: 4, c: 4 },
    "nooky": { s: 4, c: 4 },
    "nude pic": { s: 4, c: 4 },
    "nudepic": { s: 4, c: 4 },
    "nude pics": { s: 4, c: 4 },
    "nudepics": { s: 4, c: 4 },
    "one night stand": { s: 4, c: 4 },
    "onenightstand": { s: 4, c: 4 },
    "oral sex": { s: 4, c: 4 },
    "oralsex": { s: 4, c: 4 },
    "orgasming": { s: 4, c: 4 },
    "orgasms": { s: 4, c: 4 },
    "panty sniffer": { s: 4, c: 4 },
    "pantysniffer": { s: 4, c: 4 },
    "peep show": { s: 4, c: 4 },
    "peepshow": { s: 4, c: 4 },
    "phone sex": { s: 4, c: 4 },
    "phonesex": { s: 4, c: 4 },
    "play with yourself": { s: 4, c: 4 },
    "playwithyourself": { s: 4, c: 4 },
    "pound town": { s: 4, c: 4 },
    "poundtown": { s: 4, c: 4 },
    "pussy fart": { s: 4, c: 4 },
    "pussyfart": { s: 4, c: 4 },
    "pussy juice": { s: 4, c: 4 },
    "pussyjuice": { s: 4, c: 4 },
    "pussy lips": { s: 4, c: 4 },
    "pussylips": { s: 4, c: 4 },
    "red light district": { s: 4, c: 4 },
    "redlightdistrict": { s: 4, c: 4 },
    "reverse cowgirl": { s: 4, c: 4 },
    "reversecowgirl": { s: 4, c: 4 },
    "rub one out": { s: 4, c: 4 },
    "ruboneout": { s: 4, c: 4 },
    "rusty trombone": { s: 4, c: 4 },
    "rustytrombone": { s: 4, c: 4 },
    "sex slave": { s: 4, c: 4 },
    "sexslave": { s: 4, c: 4 },
    "sex toy": { s: 4, c: 4 },
    "sextoy": { s: 4, c: 4 },
    "sex toys": { s: 4, c: 4 },
    "sextoys": { s: 4, c: 4 },
    "skin flute": { s: 4, c: 4 },
    "skinflute": { s: 4, c: 4 },
    "sleep around": { s: 4, c: 4 },
    "sleeparound": { s: 4, c: 4 },
    "snuff film": { s: 4, c: 4 },
    "snufffilm": { s: 4, c: 4 },
    "spanked": { s: 4, c: 4 },
    "spanking": { s: 4, c: 4 },
    "strip club": { s: 4, c: 4 },
    "stripclub": { s: 4, c: 4 },
    "stripper": { s: 4, c: 4 },
    "strippers": { s: 4, c: 4 },
    "strip tease": { s: 4, c: 4 },
    "striptease": { s: 4, c: 4 },
    "swingers": { s: 4, c: 4 },
    "two girls one cup": { s: 4, c: 4 },
    "twogirlsonecup": { s: 4, c: 4 },
    "voyeurism": { s: 4, c: 4 },
    "wet dream": { s: 4, c: 4 },
    "wetdream": { s: 4, c: 4 },
    "wife swap": { s: 4, c: 4 },
    "wifeswap": { s: 4, c: 4 },
    "wife swapping": { s: 4, c: 4 },
    "wifeswapping": { s: 4, c: 4 },
    "xxxx": { s: 4, c: 4 },
    "xxxxx": { s: 4, c: 4 },
    // ===== BATCH 30: MORE EVASION MISSPELLINGS =====
    "ashole": { s: 3, c: 5 },
    "assho": { s: 3, c: 5 },
    "asshle": { s: 3, c: 5 },
    "bassturd": { s: 3, c: 5 },
    "basturd": { s: 3, c: 5 },
    "bastid": { s: 3, c: 5 },
    "bullcrap": { s: 3, c: 5 },
    "bull crap": { s: 3, c: 5 },
    "cack": { s: 3, c: 5 },
    "cock womble": { s: 4, c: 5 },
    "coochee": { s: 3, c: 5 },
    "coksucker": { s: 3, c: 5 },
    "coksuker": { s: 3, c: 5 },
    "cumm": { s: 4, c: 5 },
    "cummer": { s: 4, c: 5 },
    "cummin": { s: 4, c: 5 },
    "cuntt": { s: 5, c: 5 },
    "damm": { s: 3, c: 5 },
    "dammn": { s: 3, c: 5 },
    "dayum": { s: 3, c: 5 },
    "deeck": { s: 3, c: 5 },
    "deeq": { s: 3, c: 5 },
    "diik": { s: 3, c: 5 },
    "dique": { s: 3, c: 5 },
    "doosh": { s: 3, c: 5 },
    "dooshbag": { s: 3, c: 5 },
    "douch": { s: 3, c: 5 },
    "douchbag": { s: 3, c: 5 },
    "douchetard": { s: 3, c: 5 },
    "f u k": { s: 3, c: 5 },
    "faaack": { s: 3, c: 5 },
    "faaak": { s: 3, c: 5 },
    "faack": { s: 3, c: 5 },
    "faak": { s: 3, c: 5 },
    "faaq": { s: 3, c: 5 },
    "fakk": { s: 3, c: 5 },
    "farg": { s: 3, c: 5 },
    "fauck": { s: 3, c: 5 },
    "fcuker": { s: 3, c: 5 },
    "fker": { s: 3, c: 5 },
    "fluck": { s: 3, c: 5 },
    "fokk": { s: 3, c: 5 },
    "frigg": { s: 3, c: 5 },
    "frigger": { s: 3, c: 5 },
    "fruck": { s: 3, c: 5 },
    "fuark": { s: 3, c: 5 },
    "fuarking": { s: 3, c: 5 },
    "fucca": { s: 3, c: 5 },
    "fuchen": { s: 3, c: 5 },
    "fuching": { s: 3, c: 5 },
    "fudging": { s: 3, c: 5 },
    "fuken": { s: 3, c: 5 },
    "fuqqing": { s: 3, c: 5 },
    "horsecrap": { s: 3, c: 5 },
    "horse crap": { s: 3, c: 5 },
    "jackarse": { s: 3, c: 5 },
    "jack arse": { s: 3, c: 5 },
    "jizm": { s: 3, c: 5 },
    "jizzm": { s: 4, c: 5 },
    "knobbers": { s: 3, c: 5 },
    "knobjocky": { s: 3, c: 5 },
    "knobjokey": { s: 3, c: 5 },
    "kooch": { s: 3, c: 5 },
    "kootch": { s: 3, c: 5 },
    "kootchie": { s: 3, c: 5 },
    "kuunt": { s: 3, c: 5 },
    "kwunt": { s: 3, c: 5 },
    "lmaooo": { s: 3, c: 5 },
    "m0f0": { s: 3, c: 5 },
    "mof0": { s: 3, c: 5 },
    "mofocker": { s: 3, c: 5 },
    "mofucker": { s: 3, c: 5 },
    "mofucking": { s: 3, c: 5 },
    "muddafucka": { s: 3, c: 5 },
    "muddafucker": { s: 3, c: 5 },
    "muthafuckaz": { s: 3, c: 5 },
    "muthafuckin": { s: 3, c: 5 },
    "muther": { s: 3, c: 5 },
    "mutherfucka": { s: 3, c: 5 },
    "mutherfucking": { s: 3, c: 5 },
    "niqqah": { s: 3, c: 5 },
    "niqqas": { s: 3, c: 5 },
    "nobjokey": { s: 3, c: 5 },
    "nobjocky": { s: 3, c: 5 },
    "nutto": { s: 3, c: 5 },
    "orafis": { s: 3, c: 5 },
    "orgasim": { s: 3, c: 5 },
    "orgasims": { s: 3, c: 5 },
    "orgasum": { s: 3, c: 5 },
    "orgasums": { s: 3, c: 5 },
    "penus": { s: 3, c: 5 },
    "phallick": { s: 3, c: 5 },
    "phuker": { s: 3, c: 5 },
    "phukked": { s: 3, c: 5 },
    "phukker": { s: 3, c: 5 },
    "phukkin": { s: 3, c: 5 },
    "phukking": { s: 3, c: 5 },
    "phuks": { s: 3, c: 5 },
    "phuqed": { s: 3, c: 5 },
    "phuqer": { s: 3, c: 5 },
    "phuqing": { s: 3, c: 5 },
    "piky": { s: 3, c: 5 },
    "pissers": { s: 3, c: 5 },
    "pissess": { s: 3, c: 5 },
    "porn0": { s: 3, c: 5 },
    "pornn": { s: 3, c: 5 },
    "pussee": { s: 3, c: 5 },
    "pussie": { s: 3, c: 5 },
    "pussi": { s: 3, c: 5 },
    "pusy": { s: 3, c: 5 },
    "rimjaw": { s: 3, c: 5 },
    "rim jaw": { s: 3, c: 5 },
    "s.o.b": { s: 3, c: 5 },
    "s.o.b.": { s: 3, c: 5 },
    "scrotie": { s: 3, c: 5 },
    "skeeted": { s: 3, c: 5 },
    "skeeting": { s: 3, c: 5 },
    "skeezy": { s: 3, c: 5 },
    "slutz": { s: 3, c: 5 },
    "snatches": { s: 3, c: 5 },
    "snatchy": { s: 3, c: 5 },
    "spunked": { s: 3, c: 5 },
    "spunking": { s: 3, c: 5 },
    "spunky": { s: 3, c: 5 },
    "titt": { s: 4, c: 5 },
    "tittie": { s: 4, c: 5 },
    "tittiefucker": { s: 3, c: 5 },
    "tittyfucked": { s: 3, c: 5 },
    "twatt": { s: 4, c: 5 },
    "twatted": { s: 4, c: 5 },
    "v1agra": { s: 3, c: 5 },
    "vjayjay": { s: 3, c: 5 },
    "w00se": { s: 3, c: 5 },
    "w0g": { s: 3, c: 5 },
    "w0gs": { s: 3, c: 5 },
    "whoars": { s: 3, c: 5 },
    "willies": { s: 3, c: 5 },
    "wuss": { s: 3, c: 5 },
    "wussy": { s: 3, c: 5 },
    // ===== BATCH 31: MORE GAMING TERMS =====
    "aim bot": { s: 3, c: 4 },
    "aimbot": { s: 3, c: 4 },
    "b00sted": { s: 3, c: 5 },
    "boosted": { s: 3, c: 4 },
    "boosted animal": { s: 3, c: 4 },
    "boostedanimal": { s: 3, c: 4 },
    "camp3r": { s: 3, c: 5 },
    "camper": { s: 1, c: 2 },
    "campers": { s: 3, c: 4 },
    "carried trash": { s: 3, c: 4 },
    "carriedtrash": { s: 3, c: 4 },
    "cheater": { s: 3, c: 4 },
    "cheaters": { s: 3, c: 4 },
    "d3stroyed": { s: 3, c: 5 },
    "deranked": { s: 3, c: 4 },
    "easy mode": { s: 3, c: 4 },
    "easymode": { s: 3, c: 4 },
    "fragile ego": { s: 3, c: 4 },
    "fragileego": { s: 3, c: 4 },
    "garbage can": { s: 3, c: 4 },
    "garbagecan": { s: 3, c: 4 },
    "garbage tier": { s: 3, c: 4 },
    "garbagetier": { s: 3, c: 4 },
    "get bodied": { s: 3, c: 4 },
    "getbodied": { s: 3, c: 4 },
    "get dunked on": { s: 3, c: 4 },
    "getdunkedon": { s: 3, c: 4 },
    "get fragged": { s: 3, c: 4 },
    "getfragged": { s: 3, c: 4 },
    "get rolled": { s: 3, c: 4 },
    "getrolled": { s: 3, c: 4 },
    "get shit on": { s: 3, c: 5 },
    "getshiton": { s: 3, c: 5 },
    "go uninstall": { s: 3, c: 4 },
    "gouninstall": { s: 3, c: 4 },
    "griefers": { s: 3, c: 4 },
    "hacker": { s: 3, c: 4 },
    "hackers": { s: 3, c: 4 },
    "hardscoper": { s: 3, c: 4 },
    "hardscoping": { s: 3, c: 4 },
    "jg gap": { s: 3, c: 4 },
    "jggap": { s: 3, c: 4 },
    "mad because bad": { s: 3, c: 4 },
    "madbecausebad": { s: 3, c: 4 },
    "mid gap": { s: 3, c: 4 },
    "midgap": { s: 3, c: 4 },
    "n00b": { s: 3, c: 5 },
    "n0ob": { s: 3, c: 5 },
    "noob bait": { s: 3, c: 4 },
    "noobbait": { s: 3, c: 4 },
    "noob tube": { s: 3, c: 4 },
    "noobtube": { s: 3, c: 4 },
    "one trick pony": { s: 3, c: 4 },
    "onetrickpony": { s: 3, c: 4 },
    "outplayed": { s: 3, c: 4 },
    "outskilled": { s: 3, c: 4 },
    "rage": { s: 3, c: 4 },
    "rager": { s: 3, c: 4 },
    "ragers": { s: 3, c: 4 },
    "raging": { s: 3, c: 4 },
    "rank diff": { s: 3, c: 4 },
    "rankdiff": { s: 3, c: 4 },
    "reported": { s: 3, c: 4 },
    "scrub": { s: 1, c: 2 },
    "scrubs": { s: 3, c: 4 },
    "shit tier": { s: 3, c: 5 },
    "skill gap": { s: 3, c: 4 },
    "skillgap": { s: 3, c: 4 },
    "smurfing": { s: 3, c: 4 },
    "smurf": { s: 1, c: 2 },
    "smurfs": { s: 3, c: 4 },
    "spammer": { s: 3, c: 4 },
    "spammers": { s: 3, c: 4 },
    "spamming": { s: 3, c: 4 },
    "stream sniper": { s: 3, c: 4 },
    "streamsniper": { s: 3, c: 4 },
    "stream sniping": { s: 3, c: 4 },
    "streamsniping": { s: 3, c: 4 },
    "support diff": { s: 3, c: 4 },
    "supportdiff": { s: 3, c: 4 },
    "thrower": { s: 3, c: 4 },
    "throwers": { s: 3, c: 4 },
    "throwing": { s: 3, c: 4 },
    "top gap": { s: 3, c: 4 },
    "topgap": { s: 3, c: 4 },
    "trash can": { s: 3, c: 4 },
    "trashcan": { s: 3, c: 4 },
    "trash tier": { s: 3, c: 4 },
    "trashtier": { s: 3, c: 4 },
    "troll pick": { s: 3, c: 4 },
    "trollpick": { s: 3, c: 4 },
    "u mad": { s: 3, c: 4 },
    "umad": { s: 3, c: 4 },
    "u mad bro": { s: 3, c: 4 },
    "umadbro": { s: 3, c: 4 },
    "uninstall the game": { s: 3, c: 4 },
    "uninstallthegame": { s: 3, c: 4 },
    "you are bad": { s: 3, c: 4 },
    "youarebad": { s: 3, c: 4 },
    "you are garbage": { s: 3, c: 4 },
    "youaregarbage": { s: 3, c: 4 },
    "you are shit": { s: 3, c: 5 },
    "youareshit": { s: 3, c: 5 },
    "you are terrible": { s: 3, c: 4 },
    "youareterrible": { s: 3, c: 4 },
    "you are trash": { s: 3, c: 4 },
    "youaretrash": { s: 3, c: 4 },
    "you suck at this": { s: 3, c: 4 },
    "yousuckatthis": { s: 3, c: 4 },
    "zero damage": { s: 3, c: 4 },
    "zerodamage": { s: 3, c: 4 },
    // ===== BATCH 32: MORE COMPOUND NOUNS =====
    "assbanger": { s: 3, c: 5 },
    "ass banger": { s: 3, c: 5 },
    "assbite": { s: 3, c: 5 },
    "ass bite": { s: 3, c: 5 },
    "assboil": { s: 3, c: 5 },
    "ass boil": { s: 3, c: 5 },
    "asscrawler": { s: 3, c: 5 },
    "ass crawler": { s: 3, c: 5 },
    "assdouche": { s: 3, c: 5 },
    "ass douche": { s: 3, c: 5 },
    "asseater": { s: 3, c: 5 },
    "ass eater": { s: 3, c: 5 },
    "assflower": { s: 3, c: 5 },
    "ass flower": { s: 3, c: 5 },
    "assgrabber": { s: 3, c: 5 },
    "ass grabber": { s: 3, c: 5 },
    "buttchug": { s: 3, c: 5 },
    "butt chug": { s: 3, c: 5 },
    "buttchugging": { s: 3, c: 5 },
    "butt chugging": { s: 3, c: 5 },
    "buttkisser": { s: 3, c: 5 },
    "butt kisser": { s: 3, c: 5 },
    "buttsniffer": { s: 3, c: 5 },
    "butt sniffer": { s: 3, c: 5 },
    "buttstuffer": { s: 3, c: 5 },
    "butt stuffer": { s: 3, c: 5 },
    "clitlicker": { s: 3, c: 5 },
    "clit licker": { s: 3, c: 5 },
    "cumchugger": { s: 4, c: 5 },
    "cum chugger": { s: 4, c: 5 },
    "cumeater": { s: 4, c: 5 },
    "cum eater": { s: 4, c: 5 },
    "cumlicker": { s: 4, c: 5 },
    "cum licker": { s: 4, c: 5 },
    "cumsucker": { s: 4, c: 5 },
    "cum sucker": { s: 4, c: 5 },
    "cumswallower": { s: 4, c: 5 },
    "cum swallower": { s: 4, c: 5 },
    "cuntbuster": { s: 5, c: 5 },
    "cunt buster": { s: 5, c: 5 },
    "cuntfucker": { s: 3, c: 5 },
    "cunt fucker": { s: 3, c: 5 },
    "cunthammer": { s: 5, c: 5 },
    "cunt hammer": { s: 5, c: 5 },
    "cuntmonger": { s: 5, c: 5 },
    "cunt monger": { s: 5, c: 5 },
    "dickbiter": { s: 4, c: 5 },
    "dick biter": { s: 4, c: 5 },
    "fuck monkey": { s: 3, c: 5 },
    "fuck muppet": { s: 3, c: 5 },
    "fuck pig": { s: 3, c: 5 },
    "fuck twit": { s: 3, c: 5 },
    "fuck wagon": { s: 3, c: 5 },
    "shitbucket": { s: 3, c: 5 },
    "shit bucket": { s: 3, c: 5 },
    "shitsniffer": { s: 3, c: 5 },
    "shit sniffer": { s: 3, c: 5 },
    "shittongue": { s: 3, c: 5 },
    "shit tongue": { s: 3, c: 5 },
    "skankass": { s: 3, c: 5 },
    "skank ass": { s: 3, c: 5 },
    "skankyass": { s: 3, c: 5 },
    "skanky ass": { s: 3, c: 5 },
    "slimeball": { s: 3, c: 5 },
    "slime ball": { s: 3, c: 5 },
    "slutty bitch": { s: 3, c: 5 },
    "sluttybitch": { s: 3, c: 5 },
    "slutty whore": { s: 5, c: 5 },
    "sluttywhore": { s: 5, c: 5 },
    "turdgobbler": { s: 3, c: 5 },
    "turd gobbler": { s: 3, c: 5 },
    "turdmonger": { s: 3, c: 5 },
    "turd monger": { s: 3, c: 5 },
    "turdsniffer": { s: 3, c: 5 },
    "turd sniffer": { s: 3, c: 5 },
    // ===== BATCH 33: REGIONAL SLURS =====
    "alligator bait": { s: 5, c: 4 },
    "alligatorbait": { s: 5, c: 4 },
    "bootlip": { s: 5, c: 4 },
    "bootlips": { s: 5, c: 4 },
    "brownskin": { s: 5, c: 4 },
    "brown skin": { s: 5, c: 4 },
    "buckwheat": { s: 5, c: 4 },
    "cabbage eater": { s: 5, c: 4 },
    "cabbageeater": { s: 5, c: 4 },
    "chinless wonder": { s: 5, c: 4 },
    "chinlesswonder": { s: 5, c: 4 },
    "clogwog": { s: 5, c: 4 },
    "eight ball": { s: 5, c: 4 },
    "eightball": { s: 5, c: 4 },
    "gin jockey": { s: 5, c: 4 },
    "ginjockey": { s: 5, c: 4 },
    "gweilo": { s: 5, c: 4 },
    "gwilo": { s: 5, c: 4 },
    "hairyback": { s: 5, c: 4 },
    "hairy back": { s: 5, c: 4 },
    "haole": { s: 5, c: 4 },
    "heebs": { s: 5, c: 4 },
    "honkie": { s: 5, c: 4 },
    "honkies": { s: 5, c: 4 },
    "jim crow": { s: 5, c: 4 },
    "jimcrow": { s: 5, c: 4 },
    "krauthead": { s: 5, c: 4 },
    "kraut head": { s: 5, c: 4 },
    "lubra": { s: 5, c: 4 },
    "macaca": { s: 5, c: 4 },
    "mayate": { s: 5, c: 4 },
    "mocky": { s: 5, c: 4 },
    "mooncricket": { s: 5, c: 4 },
    "mosshead": { s: 5, c: 4 },
    "moss head": { s: 5, c: 4 },
    "mudskin": { s: 5, c: 4 },
    "mud skin": { s: 5, c: 4 },
    "pancake face": { s: 5, c: 4 },
    "pancakeface": { s: 5, c: 4 },
    "peckerwoods": { s: 5, c: 4 },
    "redbone": { s: 5, c: 4 },
    "river rat": { s: 5, c: 4 },
    "riverrat": { s: 5, c: 4 },
    "round eye": { s: 5, c: 4 },
    "roundeye": { s: 5, c: 4 },
    "sand flea": { s: 5, c: 4 },
    "sandflea": { s: 5, c: 4 },
    "sand rat": { s: 5, c: 4 },
    "sandrat": { s: 5, c: 4 },
    "sheepshagger": { s: 5, c: 4 },
    "sheep shagger": { s: 5, c: 4 },
    "sheepfucker": { s: 5, c: 5 },
    "sheep fucker": { s: 5, c: 5 },
    "spade": { s: 5, c: 4 },
    "spades": { s: 5, c: 4 },
    "swamp donkey": { s: 5, c: 4 },
    "swampdonkey": { s: 5, c: 4 },
    "toesucker": { s: 5, c: 4 },
    "toe sucker": { s: 5, c: 4 },
    "tree jumper": { s: 5, c: 4 },
    "treejumper": { s: 5, c: 4 },
    "wagon burner": { s: 5, c: 4 },
    "wagonburner": { s: 5, c: 4 },
    "welfare queen": { s: 5, c: 4 },
    "welfarequeen": { s: 5, c: 4 },
    "wood ape": { s: 5, c: 4 },
    "woodape": { s: 5, c: 4 },
    "wool head": { s: 5, c: 4 },
    "woolhead": { s: 5, c: 4 },
    // ===== BATCH 34: ABBREVIATIONS =====
    "cfnm": { s: 3, c: 4 },
    "csb": { s: 3, c: 4 },
    "ctm": { s: 3, c: 4 },
    "dfo": { s: 3, c: 4 },
    "dvp": { s: 3, c: 4 },
    "fobr": { s: 3, c: 4 },
    "fyfi": { s: 3, c: 4 },
    "fym": { s: 3, c: 4 },
    "gdf": { s: 3, c: 4 },
    "gfu": { s: 3, c: 4 },
    "gfym": { s: 3, c: 4 },
    "gky": { s: 3, c: 4 },
    "grf": { s: 3, c: 4 },
    "hmfic": { s: 3, c: 4 },
    "iaf": { s: 3, c: 4 },
    "ibtl": { s: 3, c: 4 },
    "jfgi": { s: 3, c: 4 },
    "jsyk": { s: 3, c: 4 },
    "lamf": { s: 3, c: 4 },
    "lma0": { s: 3, c: 5 },
    "mfao": { s: 3, c: 4 },
    "mfl": { s: 3, c: 4 },
    "nfg": { s: 3, c: 4 },
    "ngaf": { s: 3, c: 4 },
    "nmfp": { s: 3, c: 4 },
    "nsfl": { s: 3, c: 4 },
    "sf": { s: 3, c: 4 },
    "sof": { s: 3, c: 4 },
    "stfuattdlagg": { s: 3, c: 4 },
    "susfu": { s: 3, c: 4 },
    "tarfu": { s: 3, c: 4 },
    "wtmf": { s: 3, c: 4 },
    "wttf": { s: 3, c: 4 },
    "ygtbfkm": { s: 3, c: 4 },
    "ygtbkm": { s: 3, c: 4 },
    // ===== BATCH 35: MORE LEET COMBOS =====
    "4n4l": { s: 3, c: 5 },
    "4nal": { s: 3, c: 5 },
    "4ss crack": { s: 3, c: 5 },
    "4sscrack": { s: 3, c: 5 },
    "4ssfuck": { s: 3, c: 5 },
    "4sshole": { s: 3, c: 5 },
    "4sswipe": { s: 3, c: 5 },
    "b!0tch": { s: 3, c: 5 },
    "b!otch": { s: 3, c: 5 },
    "b4ll sack": { s: 3, c: 5 },
    "b4llsack": { s: 3, c: 5 },
    "blowj0b": { s: 3, c: 5 },
    "cl!toris": { s: 3, c: 5 },
    "cum$h0t": { s: 4, c: 5 },
    "cumsh0t": { s: 4, c: 5 },
    "d!ckl1ck3r": { s: 3, c: 5 },
    "d!ckn0s3": { s: 3, c: 5 },
    "d!cksn33z3": { s: 3, c: 5 },
    "d!ckt1p": { s: 3, c: 5 },
    "d!ckw4d": { s: 3, c: 5 },
    "d!ldos": { s: 3, c: 5 },
    "d1ld0": { s: 3, c: 5 },
    "f@ggotry": { s: 3, c: 5 },
    "f@ggy": { s: 3, c: 5 },
    "f@gg0try": { s: 3, c: 5 },
    "f4ggy": { s: 3, c: 5 },
    "f4gg0try": { s: 3, c: 5 },
    "fuck3d": { s: 3, c: 5 },
    "fuck3rs": { s: 3, c: 5 },
    "fvck3d": { s: 3, c: 5 },
    "fvck3r": { s: 3, c: 5 },
    "g0ddam": { s: 3, c: 5 },
    "g0ddamn": { s: 3, c: 5 },
    "h0m0phobe": { s: 3, c: 5 },
    "h0mos3xual": { s: 3, c: 5 },
    "h4ndjobs": { s: 3, c: 5 },
    "h4ndj0bs": { s: 3, c: 5 },
    "j1zzface": { s: 3, c: 5 },
    "j1zzm0pp3r": { s: 3, c: 5 },
    "j1zzrag": { s: 3, c: 5 },
    "j1zzst41n": { s: 3, c: 5 },
    "l3sbo": { s: 3, c: 5 },
    "l3zbos": { s: 3, c: 5 },
    "m0l3st": { s: 3, c: 5 },
    "m0l3st3r": { s: 3, c: 5 },
    "m0th3rfuck": { s: 3, c: 5 },
    "m4sturb4t3": { s: 3, c: 5 },
    "m4sturb4t1ng": { s: 3, c: 5 },
    "n1gl3t": { s: 3, c: 5 },
    "n1gg4h": { s: 3, c: 5 },
    "p0rn0": { s: 3, c: 5 },
    "p0rnhub": { s: 3, c: 5 },
    "p0rnst4r": { s: 3, c: 5 },
    "p1ssed": { s: 3, c: 5 },
    "p1ssfl4ps": { s: 3, c: 5 },
    "p1ssh34d": { s: 3, c: 5 },
    "pu55i3s": { s: 3, c: 5 },
    "r4p1ng": { s: 3, c: 5 },
    "s3m3n": { s: 3, c: 5 },
    "sh!tb0x": { s: 3, c: 5 },
    "sh!tbr41n": { s: 3, c: 5 },
    "sh!tc4nn3d": { s: 3, c: 5 },
    "sh!td1ck": { s: 3, c: 5 },
    "sh!te4t3r": { s: 3, c: 5 },
    "sh!tfuck": { s: 3, c: 5 },
    "sh!tg1bb0n": { s: 3, c: 5 },
    "sh!tk1ck3r": { s: 3, c: 5 },
    "sl4pp3r": { s: 3, c: 5 },
    "sl4pp3rs": { s: 3, c: 5 },
    "sp4st1c": { s: 3, c: 5 },
    "sp4st1cs": { s: 3, c: 5 },
    "tw4tf4c3": { s: 3, c: 5 },
    "tw4tw4ffl3": { s: 3, c: 5 },
    "w4nkf4c3": { s: 3, c: 5 },
    "w4nkst41n": { s: 3, c: 5 },
    "wh0r3b4g": { s: 3, c: 5 },
    "wh0r3f4c3": { s: 3, c: 5 },
    // ===== BATCH 36: ADDITIONAL HATE SPEECH =====
    "borderbunny": { s: 3, c: 4 },
    "borderhopper": { s: 3, c: 4 },
    "coalburner": { s: 3, c: 4 },
    "fencejumper": { s: 3, c: 4 },
    "mudpeople": { s: 3, c: 4 },
    "racetraitor": { s: 3, c: 4 },
    "white power": { s: 5, c: 5 },
    "whitepower": { s: 3, c: 4 },
    "white pride": { s: 3, c: 4 },
    "whitepride": { s: 3, c: 4 },
    "white supremacy": { s: 3, c: 4 },
    "whitesupremacy": { s: 3, c: 4 },
    "white supremacist": { s: 3, c: 4 },
    "whitesupremacist": { s: 3, c: 4 },
    "ethnic cleansing": { s: 3, c: 4 },
    "ethniccleansing": { s: 3, c: 4 },
    "final solution": { s: 3, c: 4 },
    "finalsolution": { s: 3, c: 4 },
    "gas the jews": { s: 3, c: 4 },
    "gasthejews": { s: 3, c: 4 },
    "heil hitler": { s: 3, c: 4 },
    "heilhitler": { s: 3, c: 4 },
    "hitler did nothing wrong": { s: 3, c: 4 },
    "holocaust denier": { s: 3, c: 4 },
    "holocaustdenier": { s: 3, c: 4 },
    "master race": { s: 3, c: 4 },
    "masterrace": { s: 3, c: 4 },
    "neo nazi": { s: 3, c: 4 },
    "neo-nazi": { s: 3, c: 4 },
    "racial purity": { s: 3, c: 4 },
    "racialpurity": { s: 3, c: 4 },
    "sieg heil": { s: 5, c: 5 },
    "siegheil": { s: 3, c: 4 },
    "blood and soil": { s: 3, c: 4 },
    "bloodandsoil": { s: 3, c: 4 },
    "fourteen words": { s: 3, c: 4 },
    "fourteenwords": { s: 3, c: 4 },
    "1488": { s: 3, c: 4 },
    "14 88": { s: 3, c: 4 },
    "rahowa": { s: 3, c: 4 },
    "day of the rope": { s: 3, c: 4 },
    "dayoftherope": { s: 3, c: 4 },
    "great replacement": { s: 3, c: 4 },
    "greatreplacement": { s: 3, c: 4 },
    "ku klux klan": { s: 3, c: 4 },
    "kukluxklan": { s: 3, c: 4 },
    "kkk": { s: 3, c: 4 },
    "lynching": { s: 3, c: 4 },
    "lynch mob": { s: 3, c: 4 },
    "lynchmob": { s: 3, c: 4 },
    "race war": { s: 3, c: 4 },
    "racewar": { s: 3, c: 4 },
    "race mixing": { s: 3, c: 4 },
    "racemixing": { s: 3, c: 4 },
    // ===== BATCH 37: MORE MISC PROFANITY =====
    "anal bead": { s: 3, c: 4 },
    "analbead": { s: 3, c: 4 },
    "ball gag": { s: 3, c: 4 },
    "ball licker": { s: 3, c: 4 },
    "balllicker": { s: 3, c: 4 },
    "ball sack": { s: 3, c: 4 },
    "ball sucker": { s: 3, c: 4 },
    "ballsucker": { s: 3, c: 4 },
    "bastardization": { s: 5, c: 4 },
    "bastardize": { s: 5, c: 4 },
    "bitch face": { s: 3, c: 4 },
    "blow job": { s: 3, c: 4 },
    "blue waffle": { s: 3, c: 4 },
    "bluewaffle": { s: 3, c: 4 },
    "boners": { s: 3, c: 4 },
    "butt plug": { s: 3, c: 4 },
    "cock and balls": { s: 4, c: 4 },
    "cockandballs": { s: 4, c: 4 },
    "cock sucker": { s: 4, c: 4 },
    "cum dumpster": { s: 4, c: 5 },
    "dick head": { s: 4, c: 4 },
    "dick sucker": { s: 4, c: 4 },
    "dog fucker": { s: 3, c: 5 },
    "dogfucker": { s: 3, c: 5 },
    "donkey fucker": { s: 3, c: 5 },
    "donkeyfucker": { s: 3, c: 5 },
    "double fisting": { s: 3, c: 4 },
    "doublefisting": { s: 3, c: 4 },
    "dry fuck": { s: 3, c: 5 },
    "dryfuck": { s: 3, c: 5 },
    "fuck face": { s: 3, c: 5 },
    "fuck wad": { s: 3, c: 5 },
    "jack ass": { s: 3, c: 4 },
    "jerk off": { s: 3, c: 4 },
    "jizz face": { s: 4, c: 5 },
    "knob end": { s: 3, c: 4 },
    "knob head": { s: 3, c: 4 },
    "mother fucker": { s: 3, c: 5 },
    "nut sack": { s: 3, c: 4 },
    "nut job": { s: 3, c: 4 },
    "penis pump": { s: 3, c: 4 },
    "penispump": { s: 3, c: 4 },
    "shit bag": { s: 3, c: 5 },
    "shit face": { s: 3, c: 5 },
    "shit head": { s: 3, c: 5 },
    "shit hole": { s: 3, c: 5 },
    "skull fuck": { s: 3, c: 5 },
    "tit fuck": { s: 3, c: 5 },
    "twat face": { s: 4, c: 4 },
    "wank stain": { s: 3, c: 4 },
    "whore bag": { s: 5, c: 4 },

    // ===== BATCH 38: FINAL ADDITIONS =====
    "anal bleaching": { s: 3, c: 4 },
    "analbleaching": { s: 3, c: 4 },
    "anal fissure": { s: 3, c: 4 },
    "analfissure": { s: 3, c: 4 },
    "anal probe": { s: 3, c: 4 },
    "analprobe": { s: 3, c: 4 },
    "arse crack": { s: 3, c: 4 },
    "arsecrack": { s: 3, c: 4 },
    "arse lick": { s: 3, c: 4 },
    "arselick": { s: 3, c: 4 },
    "ass backward": { s: 3, c: 4 },
    "assbackward": { s: 3, c: 4 },
    "ass backwards": { s: 3, c: 4 },
    "assbackwards": { s: 3, c: 4 },
    "ass breath": { s: 3, c: 4 },
    "ass clap": { s: 3, c: 4 },
    "assclap": { s: 3, c: 4 },
    "ass fuck": { s: 3, c: 5 },
    "ass fucker": { s: 3, c: 5 },
    "ass goblin": { s: 3, c: 4 },
    "ass hole": { s: 3, c: 4 },
    "ass jacker": { s: 3, c: 4 },
    "ass licker": { s: 3, c: 4 },
    "ass monkey": { s: 3, c: 4 },
    "ball bag": { s: 3, c: 4 },
    "ballbag": { s: 3, c: 4 },
    "ball breaker": { s: 3, c: 4 },
    "ball crusher": { s: 3, c: 4 },
    "ball hair": { s: 3, c: 4 },
    "ball licking": { s: 3, c: 4 },
    "balllicking": { s: 3, c: 4 },
    "ball sac": { s: 3, c: 4 },
    "ball torture": { s: 3, c: 4 },
    "balltorture": { s: 3, c: 4 },
    "bastard face": { s: 5, c: 4 },
    "beaver": { s: 3, c: 4 },
    "bellend cheese": { s: 3, c: 4 },
    "bint": { s: 3, c: 4 },
    "bints": { s: 3, c: 4 },
    "bitchlet": { s: 3, c: 4 },
    "bitch let": { s: 3, c: 4 },
    "bitchslapped": { s: 3, c: 4 },
    "bitch slapped": { s: 3, c: 4 },
    "boob squeeze": { s: 3, c: 4 },
    "boobsqueeze": { s: 3, c: 4 },
    "brown nose": { s: 3, c: 4 },
    "brownnose": { s: 3, c: 4 },
    "brown noser": { s: 3, c: 4 },
    "brownnoser": { s: 3, c: 4 },
    "buggering": { s: 3, c: 4 },
    "bum fuck": { s: 3, c: 5 },
    "bum hole": { s: 3, c: 4 },
    "bumhole": { s: 3, c: 4 },
    "butt fuck": { s: 3, c: 5 },
    "butt fucker": { s: 3, c: 5 },
    "butt fucking": { s: 3, c: 5 },
    "butt licker": { s: 3, c: 4 },
    "butt munch": { s: 3, c: 4 },
    "camel toe": { s: 3, c: 4 },
    "carpet muncher": { s: 3, c: 4 },
    "chesticle": { s: 3, c: 4 },
    "clit face": { s: 3, c: 4 },
    "clitface": { s: 3, c: 4 },
    "cock face": { s: 4, c: 4 },
    "cock gobbler": { s: 4, c: 4 },
    "cock head": { s: 4, c: 4 },
    "cock holster": { s: 4, c: 4 },
    "cock jockey": { s: 4, c: 4 },
    "cock licker": { s: 4, c: 4 },
    "cock nose": { s: 4, c: 4 },
    "cock smith": { s: 4, c: 4 },
    "cock up": { s: 4, c: 4 },
    "corn hole": { s: 3, c: 4 },
    "cum bubble": { s: 4, c: 5 },
    "cum face": { s: 4, c: 5 },
    "cum guzzler": { s: 4, c: 5 },
    "cum stain": { s: 4, c: 5 },
    "cunt bag": { s: 5, c: 5 },
    "cunt face": { s: 5, c: 5 },
    "cunt flap": { s: 5, c: 5 },
    "cunt flaps": { s: 5, c: 5 },
    "cunt hair": { s: 5, c: 5 },
    "cunt hole": { s: 5, c: 5 },
    "cunt wipe": { s: 5, c: 5 },
    "dick brain": { s: 4, c: 4 },
    "dick fuck": { s: 3, c: 5 },
    "dirty sanchez": { s: 3, c: 4 },
    "fanny flap": { s: 3, c: 4 },
    "fanny flaps": { s: 3, c: 4 },
    "fart face": { s: 3, c: 4 },
    "fart knocker": { s: 3, c: 4 },
    "finger bang": { s: 3, c: 4 },
    "foot job": { s: 3, c: 4 },
    "fuck bag": { s: 3, c: 5 },
    "fuck ball": { s: 3, c: 5 },
    "fuck boy": { s: 3, c: 5 },
    "fuck buddy": { s: 3, c: 5 },
    "fuck er": { s: 3, c: 5 },
    "fuck ers": { s: 3, c: 5 },
    "fuck hole": { s: 3, c: 5 },
    "fuck stick": { s: 3, c: 5 },
    "fuck up": { s: 3, c: 5 },
    "horn dog": { s: 3, c: 4 },
    "horndog": { s: 3, c: 4 },
    "horny bastard": { s: 5, c: 4 },
    "hornybastard": { s: 5, c: 4 },
    "hot carl": { s: 3, c: 4 },
    "hotcarl": { s: 3, c: 4 },
    "jack hole": { s: 3, c: 4 },
    "jizz mopper": { s: 4, c: 5 },
    "jizz rag": { s: 4, c: 5 },
    "jizz stain": { s: 4, c: 5 },
    "knob gobbler": { s: 3, c: 4 },
    "man whore": { s: 5, c: 4 },
    "meat curtain": { s: 3, c: 4 },
    "meatcurtain": { s: 3, c: 4 },
    "muff diving": { s: 3, c: 4 },
    "nut buster": { s: 3, c: 4 },
    "nutbuster": { s: 3, c: 4 },
    "piss baby": { s: 3, c: 4 },
    "piss flap": { s: 3, c: 4 },
    "pissflap": { s: 3, c: 4 },
    "shit bird": { s: 3, c: 5 },
    "shit box": { s: 3, c: 5 },
    "shit brain": { s: 3, c: 5 },
    "shitbrain": { s: 3, c: 5 },
    "shit breath": { s: 3, c: 5 },
    "shit dick": { s: 3, c: 5 },
    "shit eater": { s: 3, c: 5 },
    "shit fuck": { s: 3, c: 5 },
    "shit gibbon": { s: 3, c: 5 },
    "shit house": { s: 3, c: 5 },
    "shit kicker": { s: 3, c: 5 },
    "shit lord": { s: 3, c: 5 },
    "shit show": { s: 3, c: 5 },
    "shit stick": { s: 3, c: 5 },
    "shit storm": { s: 3, c: 5 },
    "shit wad": { s: 3, c: 5 },
    "shit weasel": { s: 3, c: 5 },
    "slut bag": { s: 3, c: 4 },
    "slut bucket": { s: 3, c: 4 },
    "slut face": { s: 3, c: 4 },
    "smart ass": { s: 3, c: 4 },
    "snot face": { s: 3, c: 4 },
    "snot nose": { s: 3, c: 4 },
    "thunder cunt": { s: 5, c: 5 },
    "turd brain": { s: 3, c: 4 },
    "turd face": { s: 3, c: 4 },
    "turd muncher": { s: 3, c: 4 },
    "turd whistle": { s: 3, c: 4 },
    "twat badger": { s: 4, c: 4 },
    "twat monger": { s: 4, c: 4 },
    "twat muffin": { s: 4, c: 4 },
    "twat waffle": { s: 4, c: 4 },
    "wank badger": { s: 3, c: 4 },
    "wank pheasant": { s: 3, c: 4 },
    "wank puffin": { s: 3, c: 4 },
    "wank shaft": { s: 3, c: 4 },
    "wank sock": { s: 3, c: 4 },

};

export default englishBadWords;

// src/languages/german-words.ts

/**
 * German profanity words list
 * Contains common profanities, insults, and offensive terms. Includes variations.
 * ⚠️ Warning: This file contains explicit language in German
 */
const _d: Record<string, [number, number]> = {
  // ========================================
  // === Core Profanities & Genitalia =====
  // ========================================
  "Scheiße": [4, 3],
  "Scheisse": [3, 4], // Shit
  "Arschloch": [3, 4], // Asshole
  "Fotze": [3, 4], // Cunt (very vulgar)
  "Fick": [4, 3],
  "Ficken": [4, 5], // Fuck (noun / verb)
  "Wichser": [3, 4],
  "Wichserin": [4, 3], // Wanker, jerk (masc./fem.)
  "Hure": [5, 4], // Whore
  "Schlampe": [4, 3], // Slut, bitch
  "Mist": [3, 4], // Manure, crap, damn
  "mist": [1, 3], // Crap/manure (mild)
  "Verdammt": [4, 3], // Damn, damned
  "Arsch": [4, 3], // Ass
  "Schwanz": [4, 4], // Tail / Dick, cock (vulgar)
  "Pimmel": [4, 4], // Dick, cock (childish/vulgar)
  "Muschi": [4, 4], // Pussy (vulgar)
  "Titten": [4, 4], // Tits (vulgar)
  "Busen": [4, 4], // Bosom, breasts (less vulgar than Titten)
  "Eier": [4, 4], // Eggs / Balls (testicles - vulgar)
  "Sack": [3, 4], // Sack / Scrotum / Asshole (regional)

  // ========================================
  // === Variations & Related Terms =======
  // ========================================
  // --- Scheiße ---
  "scheißegal": [3, 5], // Don't give a shit (adj.)
  "scheißkerl": [3, 4], // Shitty guy, bastard
  "scheißladen": [3, 5], // Shitty place/shop
  "bescheuert": [1, 4], // Stupid, daft (related to Scheiße)
  "beschissen": [3, 5], // Shitty, crappy
  "verscheißern": [3, 4], // To kid, to pull someone's leg
  "ankacken": [3, 5], // To shit on / To tell someone off aggressively
  "Kacke": [3, 4], // Poo, crap (slightly less vulgar than Scheiße)
  "Kackbratze": [3, 5], // Shitty brat
  // --- Arschloch / Arsch ---
  "Arschgeige": [1, 4], // Ass violin (absurd insult for idiot/asshole)
  "Arschkriecher": [3, 4], // Ass-kisser
  "Leck mich am Arsch": [3, 4], // Kiss my ass (LMAA abbreviation)
  "verarschen": [1, 4], // To fool, to take the piss out of someone
  "arschlecken": [3, 4], // Ass-licking
  "arschig": [3, 4], // Nasty, mean
  "zum Kotzen": [3, 4], // Makes one puke / Disgusting
  // --- Fotze ---
  "Fotzenlecker": [5, 5], // Cunt licker (extremely vulgar)
  // --- Ficken / Wichser ---
  "verfickt": [3, 5], // Fucking (adjective), fucked up
  "Fickfehler": [3, 5], // Fucking mistake (offspring insult)
  "Fick dich!": [3, 5], // Fuck you!
  "Wichse": [3, 4], // Cum, jizz
  "wichsen": [4, 4], // To wank, masturbate
  "Rumwichsen": [3, 4], // Wanking around, messing about
  // --- Hure / Schlampe ---
  "Hurensohn": [5, 5], // Son of a bitch/whore (very offensive)
  "Hurentochter": [5, 4], // Daughter of a bitch/whore (very offensive)
  "Hurenkind": [5, 4], // Child of a whore
  "Verhurrt": [3, 4], // Whorish
  "Schlampig": [3, 4], // Sloppy, messy (can be unrelated to profanity)
  // --- Mist / Verdammt ---
  "Mistkerl": [3, 4], // Bastard, scoundrel
  "Miststück": [3, 4], // Nasty piece of work (often female)
  "Verdammte Scheiße": [3, 5], // Damn shit!
  "So ein Mist!": [3, 5], // Such crap! Damn it!
  // --- Schwanz / Pimmel / Muschi / Titten / Eier / Sack ---
  "Schwanzlutscher": [4, 4], // Cocksucker
  "Pissnelke": [3, 4], // Prude / Annoying woman (lit. piss carnation)
  "Muschilecker": [4, 4], // Pussy licker
  "Tittenficker": [4, 5], // Tit fucker (highly vulgar)
  "Sackgesicht": [4, 4], // Scrotum face (insult)
  "Sackratte": [4, 4], // Scrotum rat (absurd insult)
  "Geh mir nicht auf den Sack!": [4, 5], // Don't get on my nerves! (lit. don't step on my scrotum)
  "Weichei": [3, 4], // Wimp (lit. soft egg)

  // ========================================
  // === Insults (Stupidity, etc.) ========
  // ========================================
  "Idiot": [1, 4],
  "Idiotin": [1, 4], // Idiot (masc./fem.)
  "Trottel": [1, 4], // Idiot, fool
  "Depp": [1, 4], // Idiot, moron (Southern Germany/Austria)
  "Vollidiot": [1, 4], // Complete idiot
  "Vollpfosten": [1, 4], // Complete idiot (lit. full post)
  "Dummkopf": [1, 4], // Dumb head, stupid person
  "Blödmann": [1, 4], // Stupid man, fool
  "Blödian": [1, 4], // Fool
  "dumm": [1, 4], // Dumb, stupid
  "blöd": [1, 4],
  "blöde": [1, 4], // Stupid, silly
  "doof": [1, 4], // Stupid, dumb (colloquial)
  "bekloppt": [1, 4], // Crazy, nuts
  "hirnlos": [1, 4], // Brainless
  "Schwachkopf": [1, 4], // Weak head, simpleton
  "Schwachmat": [1, 4], // Simpleton, weakling
  "Narr": [1, 4],
  "Närrin": [1, 4], // Fool (masc./fem.)
  "Pfeife": [1, 4], // Pipe / Idiot, loser
  "Versager": [1, 4], // Failure, loser
  "Lappen": [1, 4], // Cloth / Wimp
  "Spasti": [5, 4], // Spastic (highly offensive disability slur used as general insult)
  "Mongo": [5, 4], // Mongoloid (highly offensive disability slur used as general insult)
  "behindert": [1, 4], // Disabled / Retarded (used as insult, very offensive)
  "Missgeburt": [1, 4], // Misbirth, monstrosity (very offensive)

  // ========================================
  // === Offensive Slurs (Sexuality, Race, etc.) ===
  // ========================================
  "Schwuchtel": [5, 4], // Faggot (very offensive)
  "Schwuler": [5, 4], // Gay man (can be neutral, but often used offensively)
  "Lesbe": [5, 4], // Lesbian (can be neutral, but often used offensively)
  "Kampflesbe": [5, 4], // Butch lesbian (offensive)
  "Transe": [5, 4], // Tranny (offensive)
  "Neger": [5, 5], // Negro (extremely offensive racial slur)
  "Kanake": [5, 4], // Very offensive slur, originally for Turks, now often for Southern Europeans, Middle Easterners
  "Itaker": [5, 4], // Offensive slur for Italians
  "Polacke": [5, 4], // Offensive slur for Polish people
  "Russe": [5, 4], // Russian (can be used neutrally or derogatorily)
  "Ami": [5, 4], // Yank, American (often derogatory)
  "Ösi": [5, 4], // Derogatory for Austrian
  "Saupreiß": [5, 4], // Derogatory Bavarian term for Prussians/North Germans
  "Kümmeltürke": [5, 4], // Offensive term for Turkish people
  "Schlitzauge": [5, 4], // Slit-eye (offensive for East Asians)

  // ========================================
  // === Other Offensive Terms & Insults ==
  // ========================================
  "Bastard": [3, 4], // Bastard
  "Sau": [1, 4], // Sow (female pig) / Bitch, messy person
  "Drecksau": [3, 4], // Filthy pig / Dirty bastard
  "Schwein": [1, 4], // Pig / Swine
  "Schweinehund": [3, 4], // Pig-dog / Bastard (innerer Schweinehund = inner laziness/weakness)
  "Mistvieh": [1, 4], // Vile creature
  "Aas": [1, 4], // Carrion / Scumbag
  "Luder": [1, 4], // Hussy, minx (can be playful or offensive)
  "Göre": [1, 4], // Brat (female child)
  "Bengel": [1, 4], // Rascal (male child)
  "Frechdachs": [1, 4], // Cheeky badger (impudent person)
  "Heuchler": [1, 4], // Hypocrite
  "Lügner": [1, 4], // Liar
  "Betrüger": [1, 4], // Cheat, fraudster
  "Penner": [1, 4], // Bum, tramp
  "Gesindel": [1, 4], // Riff-raff, mob
  "Pack": [3, 4], // Rabble, scum
  "Abschaum": [1, 4], // Scum
  "Ungeziefer": [1, 4], // Vermin
  "Parasit": [1, 4], // Parasite
  "Widerlich": [1, 4], // Disgusting, repulsive
  "Ekelhaft": [1, 4], // Disgusting
  "Kotzbrocken": [1, 4], // Person who makes you want to puke, repulsive person
  "Speichellecker": [1, 4], // Sycophant (lit. spit-licker)
  "Warmduscher": [1, 4], // Wimp (lit. warm-showerer)
  "Schattenparker": [1, 4], // Wimp (lit. shadow-parker)
  "Zicke": [1, 4], // Goat / Bitchy woman
  "mies": [1, 4], // Lousy, mean
  "gemein": [1, 4], // Mean, nasty
  "hässlich": [1, 4], // Ugly

  // ========================================
  // === Bodily Functions (Vulgar Context) ==
  // ========================================
  "pissen": [3, 4], // To piss (vulgar)
  "pinkeln": [3, 4], // To pee (more common, less vulgar)
  "scheißen": [3, 5], // To shit (vulgar)
  "kacken": [3, 4], // To poo (less vulgar)
  "kotzen": [3, 4], // To vomit, puke (common, vulgar)
  "furzen": [3, 4], // To fart
  "pupsen": [3, 4], // To poot (less vulgar)
  "Rotz": [3, 4], // Snot
  "Spucke": [3, 4], // Spit
  "Sperma": [3, 4], // Sperm
  "Sabber": [3, 4], // Drool

  // ========================================
  // === Mild / Contextually Offensive ====
  // ========================================
  "Verflixt": [1, 4], // Darn it! (mild version of verflucht/verdammt)
  "Donnerwetter": [3, 4], // Good heavens! Wow! (lit. thunderstorm)
  "Himmel": [3, 4], // Heaven / Gosh!
  "Teufel": [3, 4], // Devil
  "zum Teufel": [3, 4], // To hell with it / What the hell
  "Quatsch": [3, 4], // Nonsense, rubbish
  "Blödsinn": [1, 4], // Nonsense, foolishness
  "Hau ab!": [3, 5], // Get lost! Buzz off!
  "Verschwinde!": [3, 5], // Disappear! Get lost!
  "Halt die Klappe!": [3, 5], // Shut up! (lit. hold the trap)
  "Halt's Maul!": [3, 5], // Shut your mouth! (more vulgar)
  "Schnauze!": [3, 5], // Snout / Shut up! (vulgar)
  "Fickfresse": [3, 5], // Fuckface
  "Hackfresse": [1, 4], // Ugly face (very offensive)
  "Dreckschwein": [3, 4], // Dirty pig
  "Drecksfotze": [5, 5], // Dirty cunt
  "Arschficker": [3, 5], // Assfucker
  "Arschfotze": [5, 5], // Ass-cunt
  "Vollarsch": [3, 4], // Complete ass
  "Scheißdreck": [3, 5], // Shit-dirt
  "Hurenbock": [5, 4], // Whoremonger
  "Dreckskerl": [3, 4], // Dirty bastard
  "Wichskopf": [3, 4], // Wankhead

  // Additional German profanity
  "Arschbacke": [3, 4], // Ass cheek
  "Arschlecker": [3, 4], // Ass licker
  "Drecksack": [3, 4], // Dirty bag / scumbag
  "Dreckstück": [3, 4], // Dirty piece (insult)
  "Dumme Kuh": [1, 4], // Stupid cow
  "Fettsack": [1, 4], // Fat sack
  "Fickschnitzel": [3, 5], // Fucking schnitzel (absurd compound)
  "Flachwichser": [1, 4], // Flat wanker (loser)
  "Giftzwerg": [3, 4], // Poison dwarf (nasty small person)
  "Hodengesicht": [4, 4], // Testicle face
  "Hurenbengel": [5, 4], // Whore's brat
  "Kackvogel": [3, 5], // Shit bird
  "Leck mich": [3, 4], // Lick me (abbreviated LMAA)
  "LMAA": [3, 4], // Abbreviation: Leck mich am Arsch
  "Mutterficker": [5, 5], // Motherfucker
  "Pisser": [3, 4], // Pisser
  "Pissgesicht": [3, 4], // Piss face
  "Saftsack": [1, 4], // Juice sack (idiot)
  "Scheißhaus": [3, 5], // Shithouse
  "Schlappschwanz": [4, 4], // Limp dick
  "Spacken": [1, 4], // Idiot (Northern German)
  "Trottelbacke": [1, 4], // Fool face
  "Vollhorst": [1, 4], // Complete idiot
  "Wichsgriffel": [3, 4], // Wank handle (hand, insult)
  "Ziegenficker": [3, 5], // Goat fucker
  "Oaschloch": [3, 4], // Asshole (Austrian)
  "Gscherti": [1, 4], // Idiot (Austrian)
  "Trottl": [1, 4], // Idiot (Austrian)
  "Huankind": [5, 4], // Whore child (Austrian)
  "Gopfertami": [3, 4], // God damn (Swiss German)
  "Siech": [3, 4], // Plague/bastard (Swiss German)
  "Sauhuund": [3, 4], // Pig dog (Swiss German)
  "Arschgeburt": [3, 4], // Ass birth
  "Kackwurst": [3, 5], // Shit sausage

  // ========================================
  // === Compound Insults ==================
  // ========================================
  "Affengesicht": [1, 4], // Monkey face
  "Bananenbieger": [1, 4], // Banana bender (idiot)
  "Dummschwätzer": [1, 4], // Dumb talker
  "Evolutionsbremse": [1, 4], // Evolution brake (so dumb they slow evolution)
  "Gesichtsgrätsche": [1, 4], // Face tackle (ugly face)
  "Brechmittel": [1, 4], // Emetic (nauseating person)
  "Dumpfbacke": [1, 4], // Dense cheek (dull person)
  "Knalltüte": [1, 4], // Bang bag (idiot)
  "Saftladen": [1, 4], // Juice shop (badly run place)
  "Schandmaul": [1, 4], // Shame mouth (loudmouth)
  "Trantüte": [1, 4], // Slow bag (slow person)
  "Blindgänger": [1, 4], // Dud (useless person)
  "Dünnbrettbohrer": [1, 4], // Thin board driller (person who takes shortcuts)
  "Flachzange": [1, 4], // Flat pliers (boring/dumb person)
  "Gehirnverweigerer": [1, 4], // Brain refuser
  "Intelligenzverweigerer": [1, 4], // Intelligence refuser
  "Lötkolben": [1, 4], // Soldering iron (idiot)
  "Luftpumpe": [1, 4], // Air pump (windbag/weakling)
  "Nullnummer": [1, 4], // Zero number (complete failure)
  "Rohrkrepierer": [1, 4], // Barrel burst (dud/failure)
  "Schmalspurganove": [1, 4], // Narrow gauge crook
  "Taugenichts": [1, 4], // Good-for-nothing
  "Trampeltier": [1, 4], // Bactrian camel (clumsy person)
  "Tranfunzel": [1, 4], // Oil lamp (slow-witted person)
  "Blödhammel": [1, 4], // Stupid ram
  "Hornochse": [1, 4], // Horn ox (stupid person)
  "Zimtzicke": [1, 4], // Cinnamon goat (bitchy woman)
  "Meckerziege": [1, 4], // Nagging goat
  "Labertasche": [1, 4], // Blabber bag (chatterbox)
  "Quatschkopf": [1, 4], // Nonsense head
  "Heulsuse": [1, 4], // Cry baby (female)
  "Jammerlappen": [1, 4], // Whining cloth (crybaby)
  "Hosenscheißer": [1, 4], // Pants shitter (coward/baby)
  "Angsthaase": [1, 4], // Scaredy rabbit (coward)
  "Korinthenkacker": [3, 5], // Currant shitter (nitpicker)
  "Erbsenzähler": [1, 4], // Pea counter (nitpicker)
  "Sesselfurzer": [1, 4], // Seat farter (lazy bureaucrat)
  "Paragraphenreiter": [1, 4], // Paragraph rider (bureaucratic stickler)
  "Schnarchzapfen": [1, 4], // Snore drip (boring person)
  "Langweiler": [1, 4], // Bore
  "Nervensäge": [1, 4], // Nerve saw (annoying person)
  "Plagegeist": [1, 4], // Plague spirit (pest)
  "Quälgeist": [1, 4], // Torment spirit (pest)
  "Stinkstiefel": [1, 4], // Stink boot (grump)
  "Griesgram": [1, 4], // Grouch
  "Brummbär": [1, 4], // Grumble bear (grouch)
  "Meckerfritze": [1, 4], // Nag Fritz (complainer)
  "Nörgler": [1, 4], // Nagger
  "Klugscheißer": [3, 5], // Smart shitter (know-it-all)
  "Besserwisser": [1, 4], // Better knower (know-it-all)
  "Wichtigtuer": [1, 4], // Important doer (self-important person)
  "Großkotz": [1, 4], // Big vomit (show-off)
  "Angeber": [1, 4], // Show-off
  "Prahlhans": [1, 4], // Boastful Jack (braggart)
  "Aufschneider": [1, 4], // Cutter (braggart)
  "Blender": [1, 4], // Dazzler (fraud)
  "Hochstapler": [1, 4], // Con artist
  "Gauner": [1, 4], // Crook
  "Halunke": [1, 4], // Rogue, scoundrel
  "Tunichtgut": [1, 4], // Do-no-good
  "Schurke": [1, 4], // Villain
  "Schuft": [1, 4], // Scoundrel
  "Strolch": [1, 4], // Tramp, rogue
  "Ganove": [1, 4], // Crook
  "Schnösel": [1, 4], // Snob, snotty person
  "Lackaffe": [1, 4], // Paint ape (vain person)
  "Snob": [1, 4], // Snob
  "Prolet": [1, 4], // Prole
  "Proleten": [1, 4], // Proles (plural)

  // ========================================
  // === Vulgar Compounds ==================
  // ========================================
  "Fotzengesicht": [5, 5], // Cunt face
  "Schwanzgesicht": [4, 5], // Dick face
  "Arschgesicht": [3, 5], // Ass face
  "Pissfotze": [5, 5], // Piss cunt
  "Dreckschwanz": [4, 5], // Dirty dick
  "Kackfotze": [5, 5], // Shit cunt
  "Drecksschlampe": [3, 5], // Dirty slut
  "Scheißfotze": [5, 5], // Shit cunt
  "Scheißhure": [5, 5], // Shit whore
  "Wichsfotze": [5, 5], // Wank cunt
  "Fickfotze": [5, 5], // Fuck cunt
  "Hurenfotze": [5, 5], // Whore cunt
  "Hundesohn": [3, 5], // Dog son
  "Dreckshure": [5, 5], // Dirty whore
  "Drecksficker": [3, 5], // Dirty fucker
  "Scheißwichser": [3, 5], // Shit wanker
  "Fickgesicht": [3, 5], // Fuck face
  "Kackgesicht": [3, 5], // Shit face
  "Arschbackengesicht": [3, 5], // Ass cheek face
  "Vollwichser": [3, 5], // Complete wanker
  "Dummsau": [1, 4], // Dumb sow
  "Stinkfotze": [5, 5], // Stinking cunt
  "Kackspast": [3, 5], // Shit spastic (highly offensive)
  "Dreckspenner": [3, 5], // Dirty bum

  // ========================================
  // === Austrian Dialect ===================
  // ========================================
  "Wappler": [1, 4], // Idiot (Austrian)
  "Dodl": [1, 4], // Idiot (Austrian)
  "Koffer": [1, 4], // Suitcase / Idiot (Austrian)
  "Beidl": [4, 4], // Dick (Austrian)
  "Gspusi": [3, 4], // Affair/fling (Austrian)
  "Oarschgesicht": [3, 4], // Ass face (Austrian dialect)
  "Piefke": [3, 4], // Derogatory for German (Austrian)
  "Sandler": [3, 4], // Bum, vagrant (Austrian)
  "Gfrast": [3, 4], // Brat, pest (Austrian)
  "Krüppel": [3, 4], // Cripple (Austrian/offensive)
  "Tschusch": [3, 4], // Derogatory for foreigner (Austrian)
  "Heisl": [1, 4], // Toilet / Idiot (Austrian)
  "Haberer": [3, 4], // Buddy / Lover (Austrian)
  "Zniachtl": [3, 4], // Runt (Austrian)
  "Oaschlecker": [3, 4], // Ass licker (Austrian)
  "Saubartel": [3, 4], // Dirty old man (Austrian)
  "Brunzkachel": [3, 4], // Piss tile / Someone who pisses themselves (Austrian)
  "Gscherter": [1, 4], // Idiot, buffoon (Austrian)
  "Zipfl": [4, 4], // Tip / Dick (Austrian)
  "Zipfelklatscher": [4, 4], // Dick slapper (Austrian insult)
  "Pülcher": [3, 4], // Rascal, crook (Austrian)
  "Hundskrüppel": [3, 4], // Dog cripple (Austrian insult)
  "Grindkopf": [3, 4], // Scab head (Austrian)

  // ========================================
  // === Swiss German Dialect ===============
  // ========================================
  "Cheib": [3, 4], // Bastard, carcass (Swiss German)
  "Löli": [1, 4], // Idiot (Swiss German)
  "Tubel": [1, 4], // Idiot, fool (Swiss German)
  "Sauniggel": [3, 4], // Dirty pig (Swiss German)
  "Glansen": [1, 4], // Idiot (Swiss German)
  "Schnudergoof": [3, 4], // Snotty kid (Swiss German)
  "Soupansen": [3, 4], // Dirty belly (Swiss German)
  "Souhuere": [3, 5], // Fucking (Swiss intensifier)
  "Huere": [5, 5], // Fucking / Whore (Swiss German)
  "Hueresiech": [3, 4], // Whore bastard (Swiss German)
  "Huerebock": [5, 4], // Whoremonger (Swiss German)
  "Schisser": [1, 4], // Coward / Shitter (Swiss German)
  "Chrüppel": [3, 4], // Cripple (Swiss German)
  "Blöde Chue": [1, 4], // Stupid cow (Swiss German)
  "Gopferteli": [2, 3], // God damn (Swiss German, mild)
  "Gopferdammi": [3, 4], // God damn (Swiss German)
  "Himmelherrgott": [3, 4], // Heaven lord god (Swiss exclamation)
  "Verfluechti": [3, 4], // Cursed (Swiss German)
  "Sauhund": [3, 4], // Pig dog (Swiss/Bavarian)
  "Gigu": [1, 4], // Idiot (Swiss German, Bern)

  // ========================================
  // === Internet / Youth Slang ============
  // ========================================
  "Ehrenlose": [2, 3], // Dishonorable (youth slang insult)
  "Ehrenloser": [2, 3], // Dishonorable man (youth slang)
  "Almansen": [2, 3], // Derogatory for Germans (youth slang)
  "Alman": [2, 3], // Derogatory for stereotypical German (youth slang)
  "Opfer": [1, 3], // Victim / Loser (youth slang)
  "Drecksopfer": [1, 4], // Dirty victim/loser
  "Kek": [2, 3], // Loser (internet slang)
  "Spast": [2, 3], // Spastic (youth slang, offensive)
  "Digga": [2, 3], // Dude (can be used offensively)
  "Huan": [5, 4], // Whore (Turkish-German youth slang)
  "Lan": [3, 4], // Dude (Turkish-German slang, can be offensive)
  "Amk": [3, 4], // Abbreviation: Amına koyayım (Turkish vulgar, used in German youth slang)
  "Huso": [5, 5], // Abbreviation: Hurensohn
  "Spastiko": [3, 4], // Spastic (youth slang, offensive)
  "Bastardkind": [3, 4], // Bastard child
  "Pissnase": [3, 4], // Piss nose (annoying person)

  // ========================================
  // === Vulgar Verbs ======================
  // ========================================
  "bumsen": [3, 5], // To fuck (colloquial)
  "vögeln": [3, 5], // To fuck (lit. to bird)
  "nageln": [3, 5], // To nail / To fuck
  "rammeln": [3, 5], // To mate / To fuck
  "poppen": [3, 5], // To fuck
  "knattern": [3, 5], // To rattle / To fuck
  "flachlegen": [3, 4], // To lay flat / To get someone into bed
  "besteigen": [3, 5], // To mount / To fuck
  "vernaschen": [3, 4], // To devour / To have sex with
  "durchnehmen": [3, 5], // To go through / To fuck hard
  "reinorgeln": [3, 5], // To organ in / To fuck
  "draufsteigen": [3, 5], // To climb on / To fuck
  "bimsen": [3, 5], // To study hard / To fuck
  "pimpern": [3, 5], // To fuck (colloquial)
  "schnackseln": [3, 5], // To fuck (Bavarian/Austrian)
  "rammeldansen": [3, 5], // To mate-dance / To fuck
  "begatten": [3, 4], // To copulate (formal/crude)
  "beschlafen": [3, 4], // To sleep with (archaic/crude)
  "besamen": [3, 4], // To inseminate
  "blasen": [3, 4], // To blow (sexual)
  "einen blasen": [4, 5], // To give a blowjob
  "lecken": [3, 4], // To lick (sexual context)
  "fingern": [3, 4], // To finger (sexual)
  "einen runterholen": [4, 4], // To jerk off
  "sich einen runterholen": [3, 4], // To jerk oneself off
  "abspritzen": [3, 4], // To ejaculate
  "kommen": [3, 4], // To come (orgasm)
  "einen reiten": [3, 4], // To ride one (sexual)
  "entjungfern": [3, 4], // To deflower

  // ========================================
  // === Sexual / Anatomical Terms =========
  // ========================================
  "Orgasmus": [3, 4], // Orgasm
  "Masturbation": [4, 4], // Masturbation
  "Vagina": [4, 3], // Vagina
  "Klitoris": [3, 4], // Clitoris
  "Hodensack": [4, 4], // Scrotum
  "Hoden": [4, 4], // Testicles
  "Vorhaut": [3, 4], // Foreskin
  "Eichel": [3, 4], // Glans
  "Erektion": [3, 4], // Erection
  "Ständer": [3, 4], // Boner (lit. stand)
  "Latte": [3, 4], // Boner (lit. slat)
  "Morgenlatte": [3, 4], // Morning wood
  "Steifen": [3, 4], // Boner
  "Analverkehr": [4, 4], // Anal intercourse
  "Oralverkehr": [4, 4], // Oral intercourse
  "Blowjob": [4, 5], // Blowjob
  "Gangbang": [3, 5], // Gangbang
  "Dreier": [3, 4], // Threesome
  "Nutte": [5, 4], // Hooker, prostitute
  "Prostituierte": [5, 4], // Prostitute
  "Freier": [5, 4], // John (prostitution client)
  "Stricher": [5, 4], // Male prostitute
  "Callboy": [3, 4], // Male escort
  "Callgirl": [3, 4], // Female escort
  "Domina": [3, 4], // Dominatrix
  "Dildo": [5, 5], // Dildo
  "Vibrator": [3, 4], // Vibrator
  "Geilheit": [3, 4], // Horniness
  "geil": [3, 4], // Horny / Awesome (youth slang)
  "notgeil": [3, 4], // Desperately horny
  "spitz": [3, 4], // Horny (lit. pointy)
  "rattig": [3, 4], // Horny (from Ratte - rat)
  "feucht": [3, 4], // Wet (sexual context)
  "Wollust": [3, 4], // Lust
  "Lüstling": [3, 4], // Lecher
  "Lustmolch": [3, 4], // Lust newt (lecher)
  "Spanner": [3, 4], // Peeping Tom
  "Voyeur": [3, 4], // Voyeur
  "Exhibitionist": [4, 4], // Exhibitionist
  "Fetischist": [3, 4], // Fetishist
  "Sadomaso": [3, 4], // Sadomasochism
  "Ficksau": [3, 5], // Fuck pig (sexually promiscuous person)
  "Betthäschen": [3, 4], // Bed bunny (sexually available)
  "Flittchen": [3, 4], // Floozy
  "Schickse": [3, 4], // Shiksa (derogatory for non-Jewish woman)
  "Dorfmatratze": [3, 4], // Village mattress (promiscuous woman)
  "Bordsteinschwalbe": [5, 4], // Curbside swallow (prostitute)
  "Nymphomanin": [3, 4], // Nymphomaniac

  // ========================================
  // === More Insults ======================
  // ========================================
  "Armleuchter": [2, 3], // Chandelier / Euphemistic insult (sounds like Arschloch)
  "Hirnamputierter": [1, 4], // Brain amputee
  "Intelligenzallergiker": [1, 4], // Intelligence allergic person
  "Pfosten": [1, 4], // Post / Idiot
  "Spatzenhirn": [1, 4], // Sparrow brain
  "Hohlkopf": [1, 4], // Hollow head
  "Hohlbirne": [1, 4], // Hollow pear (empty head)
  "Birne": [1, 4], // Pear / Head (derogatory)
  "Holzkopf": [1, 4], // Woodhead
  "Strohkopf": [1, 4], // Straw head
  "Betonkopf": [1, 4], // Concrete head (stubborn idiot)
  "Dickschädel": [1, 4], // Thick skull
  "Dickkopf": [1, 4], // Fat head (stubborn)
  "Blödkopf": [1, 4], // Stupid head
  "Nichtskönner": [1, 4], // Can-do-nothing
  "Nichtsnutz": [1, 4], // Good-for-nothing
  "Tollpatsch": [1, 4], // Clumsy person
  "Trampel": [1, 4], // Stomper (clumsy person)
  "Einfaltspinsel": [1, 4], // Simpleton paintbrush
  "Schlafmütze": [1, 4], // Sleepy cap (lazy/inattentive person)
  "Traumtänzer": [1, 4], // Dream dancer (unrealistic person)
  "Spinner": [1, 4], // Crazy person / Weirdo
  "Spinnerin": [1, 4], // Crazy woman
  "Verrückter": [1, 4], // Crazy man
  "Verrückte": [1, 4], // Crazy woman
  "Geisteskranker": [1, 4], // Mentally ill (offensive)
  "Psychopath": [1, 4], // Psychopath
  "Irrer": [1, 4], // Madman
  "Wahnsinniger": [1, 4], // Insane person
  "Schmarotzer": [1, 4], // Freeloader, parasite
  "Schnorrer": [1, 4], // Moocher
  "Geizhals": [1, 4], // Miser (lit. stingy neck)
  "Geizkragen": [1, 4], // Tightwad (lit. stingy collar)
  "Pfennigfuchser": [1, 4], // Penny pincher
  "Knauserer": [1, 4], // Cheapskate
  "Drückeberger": [1, 4], // Slacker, shirker
  "Faulpelz": [1, 4], // Lazybones
  "Faulenzer": [1, 4], // Slacker
  "Missgestalt": [1, 4], // Misshapen person (offensive)
  "Zwerg": [1, 4], // Dwarf (can be offensive)
  "Fettwanst": [1, 4], // Fat belly
  "Fettkloß": [1, 4], // Fat dumpling
  "Dickerchen": [1, 4], // Fatty (diminutive)
  "Bohnenstange": [1, 4], // Beanpole (too thin)
  "Spargeltarzan": [1, 4], // Asparagus Tarzan (skinny person)
  "Milchgesicht": [1, 4], // Milk face (baby face, immature)
  "Rotznase": [1, 4], // Snot nose (brat)
  "Dreckspatz": [1, 4], // Dirty sparrow (messy child)
  "Lausbub": [1, 4], // Rascal
  "Rotzlöffel": [1, 4], // Snot spoon (brat)
  "Satansbraten": [1, 4], // Satan's roast (devil child)
  "Balg": [1, 4], // Brat
  "Bankert": [3, 4], // Bastard child (archaic)
  "Wechselbalg": [1, 4], // Changeling (unwanted child)
  "Hinterwäldler": [1, 4], // Backwoodsman
  "Bauerntrampel": [1, 4], // Farm stomper (unsophisticated)
  "Landei": [1, 4], // Country egg (hick)
  "Dorftrottel": [1, 4], // Village idiot
  "Stadtaffe": [1, 4], // City ape
  "Saubär": [1, 4], // Dirty bear
  "Drecksvieh": [1, 4], // Dirty beast
  "Mistfink": [1, 4], // Manure finch (dirty person)
  "Stinktier": [1, 4], // Skunk
  "Dreckfink": [1, 4], // Dirt finch (messy person)
  "Schmutzfink": [1, 4], // Dirty finch (messy person)
  "Ferkel": [1, 4], // Piglet (dirty/naughty person)
  "Schweinepriester": [1, 4], // Pig priest (expletive)
  "Saukerl": [1, 4], // Dirty fellow
  "Saumensch": [1, 4], // Dirty person (Bavarian)

  // ========================================
  // === Scheiß- Compounds =================
  // ========================================
  "Scheißwetter": [3, 5], // Shitty weather
  "Scheißtag": [3, 5], // Shitty day
  "Scheißtyp": [3, 5], // Shitty guy
  "Scheißleben": [3, 5], // Shitty life
  "Scheißspiel": [3, 5], // Shitty game
  "Scheißarbeit": [3, 5], // Shitty work
  "Scheißland": [3, 5], // Shitty country
  "Scheißfilm": [3, 5], // Shitty movie
  "Scheißmusik": [3, 5], // Shitty music
  "Scheißidee": [3, 5], // Shitty idea
  "Scheißnacht": [3, 5], // Shitty night
  "Scheißgefühl": [3, 5], // Shitty feeling
  "Scheißverein": [3, 5], // Shitty club
  "Scheißmannschaft": [3, 5], // Shitty team
  "Scheißding": [3, 5], // Shitty thing
  "Scheißauto": [3, 5], // Shitty car
  "Scheißjob": [3, 5], // Shitty job
  "Scheißfrage": [3, 5], // Shitty question
  "Scheißgeld": [3, 5], // Shitty money (no money)
  "Scheißnase": [3, 5], // Shit nose (annoying person)
  "Scheißkopf": [3, 5], // Shit head
  "Scheißhaufen": [3, 5], // Shit pile
  "Scheißangst": [3, 5], // Shit-scared
  "Scheißlaune": [3, 5], // Shitty mood
  "Scheißsituation": [3, 5], // Shitty situation
  "Scheißwitz": [3, 5], // Shitty joke
  "Scheißzustand": [3, 5], // Shitty condition

  // ========================================
  // === Arsch- Compounds ==================
  // ========================================
  "Arschkrampe": [1, 4], // Ass cramp (annoying idiot)
  "Arschpauker": [3, 5], // Ass beater (strict teacher)
  "Arschtritt": [3, 5], // Ass kick
  "Arschkarte": [3, 5], // Ass card (bad luck)
  "Arschnase": [3, 5], // Ass nose
  "Arschwasser": [3, 5], // Ass water (butt sweat)
  "Arschklar": [3, 5], // Ass clear (obviously)
  "Arschbombe": [3, 5], // Ass bomb (cannonball jump)
  "Arschfalte": [3, 5], // Ass crack
  "Arschlochhausen": [3, 5], // Asshole town
  "Arschkäfer": [3, 5], // Ass beetle (annoying person)
  "Arschmade": [3, 5], // Ass maggot
  "Arschpfeife": [1, 4], // Ass whistle (idiot)
  "Arschschweiß": [3, 5], // Ass sweat
  "Arschkacker": [3, 5], // Ass shitter
  "Arschkeks": [3, 5], // Ass cookie (annoying person)
  "Arschrakete": [3, 5], // Ass rocket (insult)

  // ========================================
  // === Fick- Compounds ===================
  // ========================================
  "Fickschlampe": [3, 5], // Fuck slut
  "Fickstück": [3, 5], // Fuck piece
  "Fickmaschine": [3, 5], // Fuck machine
  "Fickhure": [5, 5], // Fuck whore
  "Fickschwein": [3, 5], // Fuck pig
  "Fickdreck": [3, 5], // Fuck dirt
  "Ficker": [3, 5], // Fucker
  "Rumficken": [3, 5], // Fucking around
  "Durchficken": [3, 5], // Fuck through
  "Abficken": [3, 5], // Fuck off / Fuck hard
  "Gefickt": [3, 5], // Fucked
  "Zugefickt": [3, 5], // Fucked up
  "Angefickt": [3, 5], // Pissed off (lit. fucked at)

  // ========================================
  // === Wichs- Compounds ==================
  // ========================================
  "Wichsvorlage": [3, 5], // Wank template (something to wank to)
  "Wichsstube": [3, 5], // Wank room
  "Wichsfleck": [3, 5], // Wank stain
  "Wichslappen": [3, 5], // Wank cloth
  "Wichssocke": [3, 5], // Wank sock
  "Wichsnudel": [3, 5], // Wank noodle (insult)
  "Wichsbirne": [4, 5], // Wank pear (dickhead)
  "Rumwichser": [3, 5], // Wanker around

  // ========================================
  // === Hurensohn Variations ==============
  // ========================================
  "Hurensöhne": [5, 4], // Sons of whores (plural)
  "Hurensprössling": [5, 4], // Whore's offspring
  "Hurenbastard": [3, 4], // Whore bastard
  "Hurendreck": [5, 4], // Whore dirt
  "Hurenpack": [5, 4], // Whore pack
  "Hurenvolk": [5, 4], // Whore folk
  "Hurentreiber": [5, 4], // Whore driver (pimp)
  "Hurerei": [3, 4], // Whoring

  // ========================================
  // === Fotze Compounds ===================
  // ========================================
  "Fotzenkopf": [5, 5], // Cunt head
  "Fotzenschleim": [5, 5], // Cunt slime
  "Fotzenknecht": [5, 5], // Cunt servant (simp)
  "Fotzengeburt": [5, 5], // Cunt birth
  "Dumme Fotze": [1, 4], // Dumb cunt
  "Alte Fotze": [5, 5], // Old cunt
  "Blöde Fotze": [1, 4], // Stupid cunt
  "Fotzenbacke": [5, 5], // Cunt cheek

  // ========================================
  // === Kack- Compounds ===================
  // ========================================
  "Kacknoob": [3, 5], // Shit noob
  "Kackstelze": [1, 4], // Shit stilt (idiot)
  "Kackfresse": [3, 5], // Shit face
  "Kacknase": [3, 5], // Shit nose
  "Kackboon": [3, 5], // Shit noob (gaming slang)
  "Kackpfosten": [1, 4], // Shit post (idiot)
  "Kacklappen": [3, 5], // Shit cloth
  "Kackblag": [3, 5], // Shit brat
  "Kackvieh": [3, 5], // Shit beast
  "Kackstiefel": [3, 5], // Shit boot

  // ========================================
  // === Drecks- Compounds =================
  // ========================================
  "Drecksloch": [3, 5], // Dirty hole (terrible place)
  "Drecksladen": [3, 5], // Dirty shop (terrible place)
  "Drecksvolk": [3, 5], // Dirty people
  "Drecksarbeit": [3, 5], // Dirty work
  "Dreckswetter": [3, 5], // Dirty weather
  "Drecksfresse": [3, 5], // Dirty face
  "Drecksbande": [3, 5], // Dirty gang
  "Drecksnest": [3, 5], // Dirty nest (terrible place)
  "Drecksbalg": [3, 5], // Dirty brat
  "Drecksnase": [3, 5], // Dirty nose (annoying person)
  "Dreckstier": [3, 5], // Dirty beast
  "Drecksding": [3, 5], // Dirty thing
  "Drecksweib": [3, 5], // Dirty woman
  "Drecksjob": [3, 5], // Dirty job

  // ========================================
  // === Piss- Compounds ===================
  // ========================================
  "Pissbude": [3, 5], // Piss booth (terrible place)
  "Pisskopf": [3, 5], // Piss head
  "Pisswetter": [3, 5], // Piss weather
  "Pisstrinker": [3, 5], // Piss drinker
  "Pissflitsche": [3, 5], // Piss slingshot (insult)
  "Pissbacke": [3, 5], // Piss cheek

  // ========================================
  // === Austrian Dialect (Extended) =======
  // ========================================
  "Oida": [3, 4], // Dude / Old man (Austrian exclamation, can be offensive)
  "Geh scheißn": [3, 5], // Go shit yourself (Austrian)
  "Schleich di": [3, 4], // Get lost (Austrian)
  "Schleich dich": [3, 4], // Get lost (Austrian, formal spelling)
  "Gschissener": [3, 5], // Shitty person (Austrian)
  "Gschissene": [3, 5], // Shitty person, female (Austrian)
  "Hawara": [3, 4], // Buddy (Austrian, can be derogatory)
  "Grauslich": [3, 4], // Disgusting (Austrian)
  "Gruaslig": [3, 4], // Disgusting (Austrian dialect)
  "Beidlpracker": [4, 4], // Dick beater (Austrian)
  "Giftler": [3, 4], // Angry person / Drug addict (Austrian)
  "Gifthäusl": [3, 4], // Poison house (angry person, Austrian)
  "Rotzbua": [3, 4], // Snot boy (Austrian)
  "Rotzpipn": [3, 4], // Snot chick (Austrian)
  "Ungustl": [3, 4], // Unpleasant person (Austrian)
  "Wuchtel": [3, 4], // Dumpling / Chubby person (Austrian)
  "Gfrieß": [1, 4], // Ugly face (Austrian)
  "Schirch": [1, 4], // Ugly (Austrian)
  "Schiaß": [1, 4], // Ugly (Austrian variant)
  "Krowod": [3, 4], // Derogatory for Croatian (Austrian)
  "Reibn": [3, 4], // Woman (derogatory, Austrian)
  "Brunzer": [3, 4], // Pisser (Austrian)
  "Scheißhäusl": [3, 4], // Outhouse (Austrian)
  "Bladl": [1, 4], // Stupid person (Austrian)
  "Nudlaug": [1, 4], // Noodle eye / Idiot (Austrian)
  "Gsindel": [3, 4], // Riff-raff (Austrian dialect)
  "Gstinkerter": [3, 4], // Stinky person (Austrian)
  "Grattler": [3, 4], // Scruff, lowlife (Bavarian/Austrian)
  "Gschaftlhuber": [3, 4], // Busybody (Bavarian/Austrian)
  "Zipfiklatscha": [4, 4], // Dick slapper (Austrian/Bavarian dialect)
  "Fotznspangler": [3, 4], // Face slapper (Bavarian/Austrian)
  "Obandler": [1, 4], // Loser/dropout (Austrian)
  "Tramhappert": [3, 4], // Clumsy oaf (Austrian)
  "Gimpel": [1, 4], // Fool (Austrian)
  "Saubua": [3, 4], // Dirty boy (Austrian)
  "Saumagen": [3, 4], // Pig stomach (insult, Austrian)
  "Grausbirne": [3, 4], // Disgusting pear/head (Austrian)
  "Stinkadel": [3, 4], // Stinking nobility (Austrian sarcasm)
  "Wickel": [3, 4], // Trouble / Fight (Austrian)
  "Bock": [3, 4], // Billy goat / Horny man (Austrian)
  "Fetzenschädl": [1, 3], // Rag skull (drunk, Austrian)
  "Gfrastsackl": [3, 4], // Pest bag (Austrian)

  // ========================================
  // === Swiss German (Extended) ===========
  // ========================================
  "Gopfriedstutz": [2, 3], // God damn (Swiss German, mild euphemism)
  "Gopferdelli": [3, 4], // God damn (Swiss German variant)
  "Gopferdeckel": [2, 3], // God damn (Swiss German, mild)
  "Härdöpfel": [1, 4], // Potato / Idiot (Swiss German)
  "Chnull": [1, 4], // Zero / Idiot (Swiss German)
  "Chnuschti": [1, 4], // Idiot (Swiss German)
  "Saucheib": [3, 4], // Dirty bastard (Swiss German)
  "Souglansen": [1, 4], // Fucking idiot (Swiss German)
  "Souniggel": [3, 4], // Filthy pig (Swiss German variant)
  "Soucheib": [3, 4], // Dirty bastard (Swiss German variant)
  "Souluder": [3, 4], // Dirty hussy (Swiss German)
  "Soukerl": [3, 4], // Dirty fellow (Swiss German)
  "Hueredull": [1, 4], // Fucking stupid (Swiss German)
  "Hueretubel": [1, 4], // Fucking idiot (Swiss German)
  "Huerelansen": [1, 4], // Fucking fool (Swiss German)
  "Huerecheib": [3, 4], // Fucking bastard (Swiss German)
  "Huerelöli": [1, 4], // Fucking idiot (Swiss German)
  "Mischtchäfer": [3, 4], // Dung beetle (Swiss German)
  "Dubel": [1, 4], // Idiot (Swiss German variant)
  "Lappi": [3, 4], // Wimp (Swiss German)
  "Lööli": [1, 4], // Idiot (Swiss German variant spelling)
  "Gschmöis": [3, 4], // Vermin (Swiss German)
  "Chlapf": [1, 4], // Slap / Idiot (Swiss German)
  "Gaggi": [3, 4], // Poo (Swiss German, childish)
  "Fuudi": [3, 4], // Ass (Swiss German)
  "Arschgeigeli": [3, 4], // Little ass violin (Swiss German diminutive)
  "Figgscheissdreck": [3, 5], // Fuck-shit-dirt (Swiss German triple compound)
  "Seich": [3, 4], // Piss / Nonsense (Swiss German)
  "Seichbüetel": [3, 4], // Piss bag (Swiss German)
  "Stürmi": [3, 4], // Crazy person (Swiss German)
  "Blödi Chue": [1, 4], // Stupid cow (Swiss German variant)
  "Choge": [1, 4], // Dirty/ugly (Swiss German, Bern)
  "Häfeli": [1, 4], // Pot / Toilet / Idiot (Swiss German)

  // ========================================
  // === Bavarian Dialect (Extended) =======
  // ========================================
  "Deifi": [3, 4], // Devil (Bavarian)
  "Deifei": [3, 4], // Devil (Bavarian variant)
  "Kruzifixhalleluja": [3, 4], // Crucifix hallelujah (Bavarian exclamation)
  "Kruzifix": [3, 4], // Crucifix (Bavarian swear)
  "Kruzitürken": [3, 4], // Crucifix Turks (Bavarian exclamation)
  "Sakrament": [3, 4], // Sacrament (Bavarian swear)
  "Sakra": [3, 4], // Damn (Bavarian abbreviation)
  "Himmiherrgottsakrament": [3, 4], // Heaven lord god sacrament (Bavarian)
  "Zefix": [3, 4], // Damn (Bavarian, from Kruzifix)
  "Himmiarschundzwirn": [3, 4], // Heaven ass and thread (Bavarian)
  "Saubazi": [3, 4], // Dirty rascal (Bavarian)
  "Saudepp": [1, 4], // Dirty idiot (Bavarian)
  "Saudumm": [1, 4], // Pig-stupid (Bavarian)
  "Saugfrast": [3, 4], // Dirty pest (Bavarian)
  "Saugut": [3, 4], // Pig-good (intensifier, Bavarian)
  "Bazi": [3, 4], // Rascal (Bavarian)
  "Lausbua": [3, 4], // Rascal boy (Bavarian)
  "Biestige Krot": [3, 4], // Nasty toad (Bavarian)
  "Grantler": [3, 4], // Grumpy person (Bavarian)
  "Griabiger Hund": [3, 4], // Grubby dog (Bavarian)
  "Wadlbeißer": [3, 4], // Calf biter (Bavarian, annoying person)
  "Schnepfe": [3, 4], // Snipe / Stuck-up woman (Bavarian)
  "Zwutschgerl": [3, 4], // Little twerp (Bavarian)
  "Drecksgsicht": [3, 4], // Dirty face (Bavarian)
  "Brunzkübel": [3, 4], // Piss bucket (Bavarian)
  "Hund": [3, 4], // Dog (used as insult in Bavarian)
  "Luasch": [3, 4], // Slob (Bavarian)
  "Rotzglockn": [3, 4], // Snot bell (Bavarian)
  "Rotzleffl": [3, 4], // Snot spoon (Bavarian)
  "Bisgurke": [3, 4], // Bite cucumber / Nasty person (Bavarian)
  "Damischer Hund": [1, 4], // Dazed/stupid dog (Bavarian)
  "Gschwollschädl": [3, 4], // Swollen skull (Bavarian)
  "Bloßfüßiger": [3, 4], // Barefooted one / Bumpkin (Bavarian)

  // ========================================
  // === Northern German / Plattdeutsch ====
  // ========================================
  "Dull": [3, 4], // Crazy (Plattdeutsch)
  "Dullkopp": [3, 4], // Crazy head (Plattdeutsch)
  "Tull": [1, 4], // Fool (Plattdeutsch)
  "Dösbaddel": [1, 4], // Dozy idiot (Northern German)
  "Döskopp": [3, 4], // Dozey head (Northern German)
  "Labskansen": [3, 4], // Labskaus people (Northern German)
  "Klootbüdel": [4, 4], // Ball bag (Plattdeutsch, testicle insult)
  "Klootzak": [3, 4], // Ball sack (Plattdeutsch)
  "Lansen": [1, 4], // Fool (Plattdeutsch)
  "Nocken": [1, 4], // Idiot (Plattdeutsch)
  "Bangbüx": [3, 4], // Scaredy pants (Plattdeutsch)
  "Sabbeltansen": [3, 4], // Dribble chick (Plattdeutsch)
  "Schieter": [3, 5], // Shitter (Plattdeutsch)
  "Schietbüdel": [3, 5], // Shit bag (Plattdeutsch)
  "Lüttje Schiet": [3, 5], // Little shit (Plattdeutsch)
  "Kladderadatsch": [3, 4], // Mess / Crash (Northern German)
  "Mors": [3, 4], // Ass (Plattdeutsch)
  "Morsakrobat": [3, 4], // Ass acrobat (Plattdeutsch)
  "Söten": [3, 4], // Sweet / Sarcastic insult (Plattdeutsch)
  "Dussel": [3, 4], // Dozy person (Northern German)
  "Dusselig": [3, 4], // Dozy (Northern German)
  "Döspaddel": [3, 4], // Dozy paddle (Northern German variant)
  "Torfkopp": [3, 4], // Peat head (Northern German)
  "Pansen": [1, 4], // Paunch / Fat person (Northern German)

  // ========================================
  // === Homophobic / Transphobic Slurs ====
  // ========================================
  "Tunte": [5, 4], // Fairy, queen (derogatory for gay/effeminate man)
  "Warme": [5, 4], // Warm one (derogatory for gay man)
  "Warmer Bruder": [5, 4], // Warm brother (derogatory for gay man)
  "Hinterlader": [5, 4], // Rear-loader (derogatory for gay man)
  "Schwuppe": [5, 4], // Derogatory for gay man
  "Homo": [5, 4], // Homo (used derogatorily)
  "Kampfschwuchtel": [5, 4], // Battle faggot
  "Schublade": [5, 4], // Drawer / Closet case (derogatory)
  "Zwitter": [5, 4], // Hermaphrodite (used derogatorily for intersex/trans)
  "Mannweib": [5, 4], // Man-woman (derogatory for masculine woman)
  "Weibmann": [5, 4], // Woman-man (derogatory for feminine man)
  "Kesser Vater": [5, 4], // Butch lesbian (derogatory)
  "Flunder": [5, 4], // Flounder / Flat-chested woman (derogatory)

  // ========================================
  // === Ethnic / Racial Slurs =============
  // ========================================
  "Kanakenpack": [5, 4], // Slur for foreigners (pack)
  "Zigeuner": [5, 4], // Gypsy (offensive for Roma/Sinti)
  "Zigeunerbande": [5, 4], // Gypsy gang (very offensive)
  "Zigeunerpack": [5, 4], // Gypsy pack (very offensive)
  "Zigeunergesindel": [5, 4], // Gypsy riff-raff (very offensive)
  "Bimbo": [3, 4], // Derogatory for Black person (German usage)
  "Mohr": [5, 4], // Moor (outdated, offensive for Black person)
  "Schwarzkopf": [5, 4], // Blackhead (derogatory for dark-haired foreigners)
  "Kameltreiber": [5, 4], // Camel driver (offensive for Arabs)
  "Kümmelfresser": [5, 4], // Cumin eater (offensive for Turks)
  "Knoblauchfresser": [5, 4], // Garlic eater (offensive for Southern Europeans)
  "Froschfresser": [5, 4], // Frog eater (offensive for French)
  "Inselaffe": [5, 4], // Island ape (offensive for British)
  "Kartoffelfresser": [5, 4], // Potato eater (offensive for Germans, used by foreigners)
  "Reisfresser": [5, 4], // Rice eater (offensive for East Asians)
  "Spaghettifresser": [5, 4], // Spaghetti eater (offensive for Italians)
  "Spaghettiträger": [5, 4], // Spaghetti carrier (offensive for Italians)
  "Russenschwein": [5, 4], // Russian pig
  "Polenschwein": [5, 4], // Polish pig
  "Judenschwein": [5, 5], // Jew pig (extremely offensive)
  "Judensau": [5, 5], // Jew sow (extremely offensive, historical)
  "Moslem": [5, 4], // Muslim (can be used derogatorily in context)
  "Musel": [5, 4], // Derogatory for Muslim
  "Muselmane": [5, 4], // Derogatory for Muslim (archaic)
  "Hottentotte": [5, 5], // Hottentot (extremely offensive for Black Africans)
  "Fidschi": [5, 4], // Derogatory for Vietnamese/East Asian (East German)
  "Ching Chang Chong": [5, 4], // Mocking East Asian languages
  "Nafri": [5, 4], // Derogatory for North African
  "Untermensch": [5, 5], // Subhuman (Nazi terminology, extremely offensive)
  "Rassenschande": [5, 5], // Race shame (Nazi terminology)
  "Volksverräter": [5, 4], // Traitor of the people (far-right slur)

  // ========================================
  // === Internet / Youth Slang (Extended) =
  // ========================================
  "HSO": [5, 5], // Abbreviation: Hurensohn (internet)
  "WTF": [2, 2], // Already used in German internet culture
  "Ehrenlos": [2, 3], // Dishonorable (youth slang)
  "Hartzer": [2, 3], // Welfare recipient (derogatory, from Hartz IV)
  // "Asi": [2, 3], // Short for Asozial (antisocial/trashy) — commented out: too many English false positives ("a simple", "a single", etc.)
  "Assi": [2, 3], // Short for Asozial variant
  "Asoziale": [2, 3], // Antisocial person (derogatory)
  "Asozialer": [2, 3], // Antisocial person, male (derogatory)
  "Asiate": [2, 3], // Asian (can be derogatory in context)
  "Babo": [2, 3], // Boss (youth slang, can be offensive)
  "Habibi": [2, 3], // My love (Arabic, used mockingly in German)
  "Hayvan": [2, 3], // Animal (Turkish, used in German youth slang as insult)
  "Moruk": [2, 3], // Old man (Turkish, used in German youth slang)
  "Kahba": [5, 4], // Whore (Arabic, used in German youth slang)
  "Sharmuta": [5, 4], // Whore (Arabic, used in German youth slang)
  "Kelb": [2, 3], // Dog (Arabic insult, used in German youth slang)
  "Ya Kelb": [2, 3], // You dog (Arabic insult in German)
  "Ibn el Sharmouta": [5, 5], // Son of a whore (Arabic, used in German)
  "Wallah": [2, 3], // I swear (Arabic, used mockingly)
  "Harakiri": [5, 5], // Suicide (used as insult for recklessness)
  "Noob": [1, 2], // Newbie/idiot (gaming slang)
  "Tryhard": [1, 2], // Try-hard (gaming insult)
  "Abgefuckt": [3, 5], // Fucked up (youth slang)
  "Abgefickt": [3, 5], // Fucked up variant
  "Pimmelnase": [4, 3], // Dick nose
  "Pimmelkopf": [4, 3], // Dickhead
  "Pimmelgesicht": [4, 3], // Dick face
  "Dreckslauch": [1, 3], // Dirty leek (skinny loser, youth slang)
  "Lauch": [1, 3], // Leek (skinny loser, youth slang)
  "Ehrenmann": [2, 3], // Honor man (sarcastic, can be offensive)
  "Kackbratzen": [3, 5], // Shit mugs (plural)
  "Otto": [1, 3], // Idiot (youth slang)
  "Gerda": [2, 3], // Basic/boring person (youth slang)

  // ========================================
  // === More Vulgar Verbs =================
  // ========================================
  "anpissen": [3, 4], // To piss on / To annoy
  "vollpissen": [3, 4], // To piss all over
  "zuscheißen": [3, 5], // To shit on / close
  "vollkotzen": [3, 4], // To vomit all over
  "ankotzen": [3, 4], // To make someone nauseous / To annoy
  "anschwulen": [3, 4], // To act gay towards (offensive)
  "anbaggern": [3, 4], // To hit on (aggressively)
  "aufreißen": [3, 4], // To pick up (sexually)
  "ablecken": [3, 4], // To lick off (sexual)
  "runterholen": [4, 4], // To jerk off
  "abwichsen": [3, 4], // To wank off
  "abblasen": [3, 4], // To blow off (sexual)
  "ranmachen": [3, 4], // To come on to
  "zuballern": [3, 4], // To get wasted
  "volllaufen": [3, 4], // To get hammered
  "saufen": [3, 4], // To drink heavily
  "besoffen": [1, 3], // Drunk (vulgar)
  "vollgesoffen": [1, 3], // Completely drunk
  "zugedröhnt": [3, 4], // Stoned out
  "zugeknallt": [3, 4], // Wasted
  "dichtmachen": [3, 4], // To get wasted

  // ========================================
  // === More Sexual Terms =================
  // ========================================
  "Gruppensex": [4, 4], // Group sex
  "Analsex": [4, 4], // Anal sex
  "Oralsex": [4, 4], // Oral sex
  "Fisten": [4, 4], // Fisting
  "Deepthroat": [4, 5], // Deep throat
  "Creampie": [4, 5], // Creampie
  "Facesitting": [4, 4], // Face sitting
  "Rimming": [3, 4], // Rimming
  "Bukkake": [4, 5], // Bukkake
  "Cumshot": [4, 5], // Cumshot
  "Samenerguss": [4, 4], // Ejaculation
  "Schwanzreiten": [4, 4], // Dick riding
  "Arschfick": [4, 5], // Ass fuck
  "Mundverkehr": [4, 5], // Oral sex (lit. mouth traffic)
  "Natursekt": [4, 4], // Golden shower (lit. natural champagne)
  "Kaviar": [4, 4], // Scat (lit. caviar)
  "Quickie": [4, 4], // Quickie
  "Steifer": [4, 4], // Hard-on
  "Bumsladen": [4, 5], // Fuck shop (brothel)
  "Puff": [4, 4], // Brothel (colloquial)
  "Bordell": [4, 4], // Brothel
  "Lusthaus": [4, 4], // Pleasure house (brothel)
  "Freudenmädchen": [5, 4], // Joy girl (prostitute)
  "Strichjunge": [4, 4], // Rent boy
  "Lustsklave": [4, 4], // Sex slave

  // ========================================
  // === Body Part Vulgarities =============
  // ========================================
  "Arschritze": [4, 3], // Ass crack
  "Arschkerbe": [4, 3], // Ass notch
  "Schamlippen": [4, 4], // Labia (vulgar in context)
  "Brustwarze": [4, 4], // Nipple (vulgar in context)
  "Möse": [4, 4], // Pussy (vulgar)
  "Mösenlecker": [4, 3], // Pussy licker
  "Mösengesicht": [4, 3], // Pussy face
  "Klöten": [4, 4], // Balls (Northern German vulgar)
  "Nille": [4, 4], // Dick (slang)
  "Schwengel": [4, 3], // Dick (lit. clapper)
  "Riemen": [4, 3], // Dick (lit. strap)
  "Rohr": [4, 3], // Dick (lit. pipe)
  "Prengel": [4, 4], // Dick (slang)
  "Gurke": [4, 4], // Cucumber / Dick (slang)
  "Lümmel": [4, 4], // Lout / Dick (slang)
  "Lümmelkäse": [4, 3], // Dick cheese (smegma)
  "Smegma": [4, 4], // Smegma
  "Hintern": [4, 3], // Behind / Butt
  "Gesäß": [4, 3], // Buttocks (formal but crude in context)
  "Pobacke": [4, 3], // Butt cheek
  "Popo": [4, 3], // Butt (childish)
  "Titte": [4, 3], // Tit (singular)
  "Nippel": [4, 4], // Nipple (vulgar)
  "Rosette": [4, 4], // Rosette / Anus (slang)

  // ========================================
  // === Du dumme... Compound Insults ======
  // ========================================
  "Du dumme Sau": [1, 4], // You dumb sow
  "Blöde Kuh": [1, 4], // Stupid cow
  "Dumme Schlampe": [1, 4], // Dumb slut
  "Du Arsch": [3, 4], // You ass
  "Du Wichser": [1, 4], // You wanker
  "Du Hurensohn": [5, 5], // You son of a whore
  "Du Missgeburt": [1, 4], // You miscarriage (very offensive)
  "Du Spast": [1, 4], // You spastic
  "Du Penner": [1, 4], // You bum
  "Du Vollidiot": [1, 4], // You complete idiot
  "Du Opfer": [1, 4], // You victim/loser
  "Du Fickfehler": [3, 5], // You fucking mistake
  "Du Arschgeburt": [3, 4], // You ass birth
  "Du Sohn einer Hure": [5, 5], // You son of a whore
  "Dreckige Hure": [5, 4], // Dirty whore
  "Blöde Schlampe": [1, 4], // Stupid slut
  "Alte Schlampe": [1, 4], // Old slut
  "Billige Nutte": [1, 4], // Cheap hooker
  "Fette Sau": [1, 4], // Fat sow
  "Fetter Sack": [1, 4], // Fat sack
  "Hässliche Kuh": [1, 4], // Ugly cow

  // ========================================
  // === Sau- Compounds ====================
  // ========================================
  "Saublöd": [1, 4], // Pig-stupid
  "Saukalt": [3, 5], // Pig-cold (very cold)
  "Saufrech": [3, 5], // Pig-cheeky (very rude)
  "Saudoof": [1, 4], // Pig-dumb
  "Saugeil": [3, 5], // Pig-horny/awesome
  "Sauwetter": [3, 5], // Pig weather (bad weather)
  "Sauerei": [3, 5], // Piggery (outrage/mess)
  "Schweinerei": [3, 5], // Piggery (outrage)
  "Sauladen": [3, 5], // Pig shop (badly run place)
  "Saufkumpan": [3, 5], // Drinking buddy (derogatory)
  "Säufer": [1, 3], // Drunkard
  "Säuferin": [1, 3], // Drunkard (female)
  "Suffkopp": [3, 5], // Booze head
  "Suffnase": [3, 5], // Booze nose

  // ========================================
  // === Stink- Compounds ==================
  // ========================================
  "Stinker": [3, 4], // Stinker
  "Stinkefinger": [3, 5], // Middle finger (lit. stink finger)
  "Stinksack": [3, 5], // Stink bag
  "Stinkmorchel": [3, 5], // Stinkhorn (disgusting person)
  "Stinkwanze": [3, 5], // Stink bug (annoying person)
  "Stinknase": [3, 5], // Stink nose

  // ========================================
  // === Voll- Compounds ===================
  // ========================================
  "Volltrottel": [1, 4], // Complete fool
  "Volldepp": [1, 4], // Complete moron
  "Vollspacken": [1, 4], // Complete idiot (Northern German)
  "Vollspast": [3, 5], // Complete spastic (offensive)
  "Vollasis": [3, 5], // Complete anti-socials
  "Vollaffe": [3, 5], // Complete ape
  "Vollpimmel": [4, 5], // Complete dick

  // ========================================
  // === Schimpfwörter (Misc Swear Words) ==
  // ========================================
  "Drecksaffe": [3, 4], // Dirty ape
  "Drecksschwein": [3, 4], // Dirty pig
  "Ratte": [3, 4], // Rat (insult)
  "Kakerlake": [4, 4], // Cockroach (insult)
  "Rattenfänger": [3, 4], // Rat catcher (demagogue)
  "Ochse": [1, 4], // Ox (stupid person)
  "Hammel": [1, 4], // Ram (stupid person)
  "Esel": [1, 4], // Donkey (stupid person)
  "Kamel": [1, 4], // Camel (stupid person)
  "Affe": [1, 4], // Ape (stupid person)
  "Halbmensch": [3, 4], // Half-person (derogatory)
  "Kretin": [3, 4], // Cretin
  "Kretine": [3, 4], // Cretin (female)
  "Degenerierer": [3, 4], // Degenerate
  "Schädling": [5, 5], // Pest (dehumanizing insult)
  "Gesocks": [3, 4], // Scum, riff-raff
  "Kroppzeug": [3, 4], // Rubbish people
  "Plebs": [2, 3], // Plebs
  "Pöbel": [3, 4], // Mob, rabble
  "Abfall": [3, 4], // Garbage (as insult)
  "Müll": [3, 4], // Trash (as insult)
  "Drecksmensch": [3, 4], // Dirty human
  "Unmensch": [3, 4], // Inhuman person
  "Scheusal": [3, 4], // Monster, wretch
  "Widerling": [3, 4], // Repulsive person
  "Ekel": [3, 4], // Disgust / Disgusting person
  "Grind": [3, 4], // Scab (insult, Austrian/Swiss)
  "Grindiger": [3, 4], // Scabby person
  "Schmutziger Hund": [3, 4], // Dirty dog
  "Fauler Sack": [3, 4], // Lazy sack
  "Blöder Hund": [1, 4], // Stupid dog
  "Alter Sack": [3, 4], // Old sack (old fart)
  "Sackgfrieß": [3, 4], // Sack face (Austrian)
  "Giftspritzer": [3, 4], // Poison sprayer (nasty person)
  "Giftnatter": [3, 4], // Poison adder (nasty woman)
  "Giftschlange": [3, 4], // Poison snake (nasty woman)
  "Hexe": [3, 4], // Witch (insult)
  "Xanthippe": [3, 4], // Xanthippe (nagging woman)
  "Drachen": [3, 4], // Dragon (nagging woman)
  "Schreckschraube": [1, 4], // Fright screw (ugly/annoying woman)
  "Nachtschaden": [1, 4], // Night damage (ugly person)
  "Vogelscheuche": [1, 4], // Scarecrow (ugly person)
  "Mondgesicht": [3, 4], // Moon face (round-faced insult)
  "Froschgesicht": [3, 4], // Frog face
  "Rattengesicht": [3, 4], // Rat face
  "Schweinegesicht": [3, 4], // Pig face
  "Hundegesicht": [3, 4], // Dog face
  "Fratze": [1, 4], // Mug, grimace (ugly face)
  "Hackfratze": [1, 4], // Mug face (very ugly)
  "Visage": [3, 4], // Mug (derogatory for face)
  "Drecksvisage": [3, 4], // Dirty mug

  // ========================================
  // === Spelling Evasions / Leetspeak =====
  // ========================================
  // --- Scheiße evasions ---
  "Sch3iße": [3, 5], // Shit (leetspeak)
  "Sche1sse": [3, 5], // Shit (leetspeak)
  "Sch3isse": [3, 5], // Shit (leetspeak)
  "Sch*iße": [3, 5], // Shit (censored)
  "Sch*isse": [3, 5], // Shit (censored)
  "Scheize": [3, 5], // Shit (misspelling evasion)
  "Schaise": [3, 5], // Shit (phonetic evasion)
  "Schaisse": [3, 5], // Shit (phonetic evasion)
  "Scheiβe": [4, 5], // Shit (Greek beta substitution)
  "Sch3iss3": [3, 5], // Shit (leetspeak)
  "Scheiss": [3, 5], // Shit (truncated)
  "Scheis": [3, 5], // Shit (truncated)
  "Scheissdreck": [3, 5], // Shit-dirt (ss variant)
  // --- Fick evasions ---
  "f1ck": [3, 5], // Fuck (leetspeak)
  "f!ck": [3, 5], // Fuck (censored)
  "f1cken": [3, 5], // Fuck (leetspeak)
  "f!cken": [3, 5], // Fuck (censored)
  "fick3n": [3, 5], // Fuck (leetspeak)
  "F*ck": [3, 5], // Fuck (censored)
  "F*cken": [3, 5], // Fuck (censored)
  "Fickn": [3, 5], // Fuck (truncated)
  "Phick": [4, 5], // Fuck (ph substitution)
  "Phicken": [4, 5], // Fuck (ph substitution)
  // --- Arschloch evasions ---
  "4rschloch": [3, 5], // Asshole (leetspeak)
  "Arschl0ch": [3, 5], // Asshole (leetspeak)
  "4rschl0ch": [3, 5], // Asshole (leetspeak)
  "A*schloch": [3, 5], // Asshole (censored)
  "Arschl*ch": [3, 5], // Asshole (censored)
  "Arsch1och": [3, 5], // Asshole (leetspeak)
  // --- Fotze evasions ---
  "F0tze": [5, 5], // Cunt (leetspeak)
  "Fo7ze": [5, 5], // Cunt (leetspeak)
  "F*tze": [5, 5], // Cunt (censored)
  "Fotz3": [5, 5], // Cunt (leetspeak)
  "F0tz3": [5, 5], // Cunt (leetspeak)
  "Fotse": [5, 5], // Cunt (misspelling evasion)
  // --- Hurensohn evasions ---
  "Hur3nsohn": [5, 5], // Son of a whore (leetspeak)
  "Hur3ns0hn": [5, 5], // Son of a whore (leetspeak)
  "Hurens0hn": [5, 5], // Son of a whore (leetspeak)
  "H*rensohn": [5, 5], // Son of a whore (censored)
  "Hurensон": [5, 5], // Son of a whore (cyrillic substitution)
  "Hurrensohn": [5, 5], // Son of a whore (doubled letter)
  // --- Wichser evasions ---
  "W1chser": [3, 5], // Wanker (leetspeak)
  "W!chser": [3, 5], // Wanker (censored)
  "Wichsr": [3, 5], // Wanker (truncated)
  "W*chser": [3, 5], // Wanker (censored)
  // --- Missgeburt evasions ---
  "M1ssgeburt": [3, 5], // Miscarriage (leetspeak)
  "Missgebuhrt": [3, 5], // Miscarriage (phonetic evasion)
  "Miß geburt": [3, 5], // Miscarriage (old spelling with space)
  // --- Schwuchtel evasions ---
  "Schwucht3l": [3, 5], // Faggot (leetspeak)
  "Schw*chtel": [3, 5], // Faggot (censored)
  // --- Other evasions ---
  "Sp4st": [3, 5], // Spastic (leetspeak)
  "Sp@st": [3, 5], // Spastic (leetspeak)
  "H*re": [5, 5], // Whore (censored)
  "Schl*mpe": [3, 5], // Slut (censored)
  "N*ger": [3, 5], // Negro (censored slur)
  "K*nake": [3, 5], // Slur (censored)

  // ========================================
  // === Scheiß- Compounds (Extended) ======
  // ========================================
  "Scheißhund": [3, 5], // Shit dog
  "Scheißbude": [3, 5], // Shit booth (terrible place)
  "Scheißloch": [3, 5], // Shithole
  "Scheißer": [3, 5], // Shitter
  "Scheißerle": [3, 5], // Little shitter (Swabian)
  "Scheißeimer": [3, 5], // Shit bucket
  "Scheißstück": [3, 5], // Shit piece
  "Scheißpack": [3, 5], // Shit pack (terrible people)
  "Scheißvolk": [3, 5], // Shit people
  "Scheißgesicht": [3, 5], // Shit face
  "Scheißficker": [3, 5], // Shit fucker
  "Scheißnudel": [3, 5], // Shit noodle
  "Scheißbirne": [1, 4], // Shit pear (stupid head)
  "Scheißbratze": [3, 5], // Shit mug
  "Scheißpfosten": [1, 4], // Shit post (idiot)
  "Scheißspieler": [3, 5], // Shit player
  "Scheißschule": [3, 5], // Shit school
  "Scheißstadt": [3, 5], // Shit city
  "Scheißfamilie": [3, 5], // Shit family
  "Scheißfreund": [3, 5], // Shit friend
  "Scheißkarre": [3, 5], // Shit car
  "Scheißhandy": [3, 5], // Shit phone
  "Scheißcomputer": [3, 5], // Shit computer
  "Scheißpartei": [3, 5], // Shit party (political)
  "Scheißregierung": [3, 5], // Shit government
  "Scheißpolizei": [3, 5], // Shit police
  "Scheißbullen": [3, 5], // Shit cops

  // ========================================
  // === Arsch- Compounds (Extended) =======
  // ========================================
  "Arschlochdorf": [3, 5], // Asshole village
  "Arschkrampen": [3, 5], // Ass cramps (plural)
  "Arschlochfreund": [3, 5], // Asshole friend
  "Arschlochmove": [3, 5], // Asshole move
  "Arschkind": [3, 5], // Ass child
  "Arschgeboren": [3, 5], // Ass-born
  "Arschwurst": [3, 5], // Ass sausage
  "Arschzapfen": [3, 5], // Ass plug
  "Arschlochverein": [3, 5], // Asshole club
  "Arschclown": [3, 5], // Ass clown
  "Arschtrompete": [3, 5], // Ass trumpet (farter)
  "Arschschlecker": [3, 5], // Ass licker (variant)
  "Arschbackenbrot": [3, 5], // Ass cheek bread (gross image)

  // ========================================
  // === Fick- Compounds (Extended) ========
  // ========================================
  "Fickfratze": [3, 5], // Fuck mug
  "Fickfinger": [3, 5], // Fuck finger
  "Ficknudel": [3, 5], // Fuck noodle
  "Fickbirne": [3, 5], // Fuck head (lit. pear)
  "Ficknase": [3, 5], // Fuck nose
  "Ficklaune": [3, 5], // Fucking mood
  "Fickwurst": [3, 5], // Fuck sausage
  "Fickbolzen": [3, 5], // Fuck bolt
  "Fickpaddel": [3, 5], // Fuck paddle
  "Ficklappen": [3, 5], // Fuck cloth
  "Fickscheibe": [3, 5], // Fuck disc (insult)
  "Fick dich ins Knie": [3, 5], // Fuck yourself in the knee

  // ========================================
  // === Wichs- Compounds (Extended) =======
  // ========================================
  "Wichsbeutel": [3, 5], // Wank bag
  "Wichsgesicht": [3, 5], // Wank face
  "Wichsgrafik": [3, 5], // Wank graphic (porn)
  "Wichsstange": [3, 5], // Wank rod
  "Wichser-Gesicht": [3, 5], // Wanker face (hyphenated)
  "Runterwichsen": [3, 5], // To wank off

  // ========================================
  // === Kack- Compounds (Extended) ========
  // ========================================
  "Kackdreck": [3, 5], // Shit dirt
  "Kackscheibe": [3, 5], // Shit disc
  "Kackhaufen": [3, 5], // Shit pile
  "Kackwichser": [3, 5], // Shit wanker
  "Kacksack": [3, 5], // Shit sack
  "Kackaffe": [3, 5], // Shit ape
  "Kackpenner": [3, 5], // Shit bum
  "Kackmongo": [3, 5], // Shit mongoloid (highly offensive)
  "Kackspinner": [3, 5], // Shit weirdo
  "Kackratte": [3, 5], // Shit rat
  "Kackeier": [3, 5], // Shit eggs

  // ========================================
  // === Drecks- Compounds (Extended) ======
  // ========================================
  "Dreckstrottel": [1, 4], // Dirty fool
  "Drecksdepp": [1, 4], // Dirty moron
  "Drecksgesindel": [3, 5], // Dirty riff-raff
  "Drecksproll": [3, 5], // Dirty prole
  "Dreckspack": [3, 5], // Dirty pack (scum)
  "Dreckslümmel": [3, 5], // Dirty lout
  "Drecksmongo": [3, 5], // Dirty mongoloid (highly offensive)
  "Drecksbulle": [3, 5], // Dirty cop
  "Drecksidiot": [1, 4], // Dirty idiot
  "Dreckslustig": [3, 5], // Dirty funny (sarcastically)
  "Dreckstyp": [3, 5], // Dirty dude
  "Drecksgöre": [3, 5], // Dirty brat (female)
  "Dreckskind": [3, 5], // Dirty child
  "Drecksheini": [3, 5], // Dirty fellow
  "Drecksniete": [3, 5], // Dirty dud
  "Dreckswichser": [3, 5], // Dirty wanker
  "Drecksfotzengesicht": [5, 5], // Dirty cunt face
  "Drecksmaul": [3, 5], // Dirty mouth

  // ========================================
  // === Piss- Compounds (Extended) ========
  // ========================================
  "Pissfresse": [3, 5], // Piss face
  "Pissnudel": [3, 5], // Piss noodle (insult)
  "Pissbirne": [1, 4], // Piss pear (stupid head)
  "Pissfleck": [3, 5], // Piss stain
  "Pisskröte": [3, 5], // Piss toad (annoying child)
  "Pisssack": [3, 5], // Piss sack
  "Pisspott": [3, 5], // Piss pot
  "Pisswarze": [3, 5], // Piss wart
  "Pisskind": [3, 5], // Piss kid
  "Pissarsch": [3, 5], // Piss ass

  // ========================================
  // === Sau- Compounds (Extended) =========
  // ========================================
  "Saudreck": [3, 5], // Pig dirt
  "Saufotze": [5, 5], // Pig cunt
  "Saupack": [3, 5], // Pig pack
  "Sauvieh": [3, 5], // Pig beast
  "Sauglatt": [3, 5], // Pig smooth (very slippery)
  "Saukopf": [3, 5], // Pig head
  "Saugesicht": [3, 5], // Pig face
  "Sauweib": [3, 5], // Pig woman
  "Saufraß": [3, 5], // Pig feed (terrible food)
  "Sauhaufen": [3, 5], // Pig pile (disorderly group)
  "Saustall": [3, 5], // Pigsty (messy place)
  "Saumist": [3, 5], // Pig manure
  "Sauarsch": [3, 5], // Pig ass
  "Saupfote": [3, 5], // Pig paw (messy handwriting)
  "Saumaul": [3, 5], // Pig mouth (foul-mouthed)
  "Sauschwein": [3, 5], // Pig pig (double intensifier)
  "Sauhure": [5, 5], // Pig whore
  "Sauluder": [3, 5], // Pig hussy
  "Saumäßig": [3, 5], // Pig-like (terrible)
  "Saunickel": [3, 5], // Dirty rascal

  // ========================================
  // === Vulgar Phrases (Extended) =========
  // ========================================
  "Geh ficken": [3, 5], // Go fuck
  "Verpiss dich": [3, 4], // Piss off
  "Verzieh dich": [3, 4], // Get lost
  "Fahr zur Hölle": [3, 4], // Go to hell
  "Du kannst mich mal": [3, 4], // You can (kiss my ass - implied)
  "Halt die Fresse": [3, 5], // Shut the fuck up
  "Halt dein Maul": [3, 4], // Shut your mouth (vulgar)
  "Leck mich doch": [3, 4], // Lick me (dismissive)
  "Lutsch meinen Schwanz": [4, 4], // Suck my dick
  "Blas mir einen": [3, 4], // Blow me one
  "Du Stück Scheiße": [3, 5], // You piece of shit
  "Du dreckiges Stück": [3, 4], // You dirty piece
  "Geh sterben": [5, 5], // Go die
  "Friss Scheiße": [3, 5], // Eat shit
  "Scheiß auf dich": [3, 5], // Shit on you
  "Du kannst mich am Arsch lecken": [3, 4], // You can lick my ass
  "In den Arsch ficken": [3, 5], // Fuck in the ass
  "Ich scheiß auf dich": [3, 5], // I shit on you
  "Fick deine Mutter": [3, 5], // Fuck your mother
  "Deine Mutter": [3, 4], // Your mother (implied insult)
  "Deine Mudda": [3, 4], // Your mom (youth slang)
  "Deine Mutter ist eine Hure": [5, 4], // Your mother is a whore
  "Du bist so dumm": [1, 4], // You are so stupid
  "Halt die Schnauze": [3, 4], // Shut your snout
  "Schnauze halten": [3, 4], // Keep your snout shut
  "Fresse halten": [3, 4], // Keep your face shut
  "Maul halten": [3, 4], // Keep your mouth shut
  "Leck mich kreuzweise": [3, 4], // Lick me crosswise
  "Scher dich zum Teufel": [3, 4], // Get to the devil
  "Hol dich der Teufel": [3, 4], // May the devil get you
  "Geh zum Teufel": [3, 4], // Go to the devil
  "Zieh Leine": [3, 4], // Pull rope (get lost)
  "Hau dich in die Pfanne": [3, 4], // Fry yourself
  "Rutsch mir den Buckel runter": [3, 4], // Slide down my hump
  "Leck mich fett": [1, 4], // Lick me fat (expression of shock)
  "Du Stück Dreck": [3, 4], // You piece of dirt
  "Mach dich vom Acker": [3, 4], // Get off the field (get lost)
  "Verrecke": [3, 4], // Drop dead (very harsh)
  "Krepier": [3, 4], // Croak (drop dead)
  "Du Affe": [3, 4], // You ape
  "Du Schwein": [3, 4], // You pig
  "Du Dreckschwein": [3, 4], // You dirty pig
  "Du Hund": [3, 4], // You dog
  "Du Ratte": [3, 4], // You rat
  "Du Made": [3, 4], // You maggot
  "Du Wurm": [3, 4], // You worm

  // ========================================
  // === Austrian Dialect (Extended 2) =====
  // ========================================
  // --- Geh... phrases ---
  "Geh in Oasch": [3, 4], // Go into the ass (Austrian)
  "Geh bitte": [3, 4], // Oh please / Expression of disbelief (Austrian)
  "Geh Scheißn geh": [3, 5], // Go take a shit (Austrian)
  "Geh ma weg": [3, 4], // Get away from me (Austrian)
  "Geh di scheißn": [3, 5], // Go shit yourself (Austrian variant)
  "Geh di pickn": [3, 4], // Go get stuck (Austrian)
  "Geh ma net am Oasch": [3, 4], // Don't bother my ass (Austrian)
  // --- More Viennese ---
  "Beidlschluderer": [4, 4], // Dick shaker (Viennese)
  "Beidlkraxler": [4, 4], // Dick climber (Viennese)
  "Gschupfter Fansen": [3, 4], // Pushed wench (Viennese)
  "Gstopfter": [3, 4], // Stuffed one / Rich snob (Viennese)
  "Gschwollna": [3, 4], // Swollen one / Arrogant person (Viennese)
  "Gscher": [3, 4], // Fuss / Nuisance (Viennese)
  "Grasdackel": [1, 4], // Grass dachshund / Clumsy idiot (Austrian)
  "Hirsch": [1, 3], // Deer / Idiot (Austrian slang)
  "Lackl": [3, 4], // Big oaf (Austrian)
  "Löd": [3, 4], // Terrible / Lazy (Austrian)
  "Oarschgeign": [3, 4], // Ass violin (Austrian dialect)
  "Oarschkriacha": [3, 4], // Ass creeper (Austrian dialect)
  "Oarschlecha": [3, 4], // Ass licker (Austrian dialect)
  "Pfrnak": [3, 4], // Fiddler / Weirdo (Austrian)
  "Protz": [3, 4], // Show-off (Austrian)
  "Pracker": [1, 4], // Beater / Loser (Austrian)
  "Schas": [3, 4], // Fart (Austrian)
  "Schasaugat": [3, 4], // Fart-eyed / blind (Austrian)
  "Scheiblkratzer": [3, 4], // Disc scratcher / Stingy person (Austrian)
  "Schnaxln": [3, 5], // To fuck (Austrian)
  "Tussi": [3, 4], // Bimbo (Austrian/German)
  "Weh": [3, 4], // Wimp (Austrian)
  "Gfraster": [3, 4], // Pest variant (Austrian)
  "Zaundürrer": [3, 4], // Fence-thin person (Austrian)
  "Deppata": [1, 4], // Stupid one (Austrian dialect)
  "Blunzn": [3, 4], // Blood sausage / Unattractive woman (Austrian)
  "Gfickte Sau": [3, 5], // Fucked sow (Austrian)
  "Schleich dich du Oaschloch": [3, 4], // Get lost you asshole (Austrian)
  // --- Carinthian ---
  "Toifi": [3, 4], // Devil (Carinthian)
  "Sauloter": [3, 4], // Pig slob (Carinthian)
  "Pflonz": [3, 5], // Liar / Bullshitter (Carinthian)
  "Noigschmeckter": [3, 4], // Newcomer (derogatory, Carinthian)
  // --- Tyrolean ---
  "Lattl": [1, 4], // Idiot (Tyrolean)
  "Luig": [3, 4], // Liar (Tyrolean)
  "Schepas": [1, 4], // Fool (Tyrolean)
  "Topfn": [3, 4], // Curd / Nonsense (Tyrolean)
  "Nudlaugat": [3, 4], // Noodle eyed / Dimwit (Tyrolean)
  // --- Styrian ---
  "Graml": [3, 4], // Grumpy person (Styrian)
  "Stiaga": [3, 4], // Annoying person (Styrian)
  "Stingata": [3, 4], // Stinky person (Styrian)
  "Dalkert": [1, 4], // Stupid (Styrian/Austrian)

  // ========================================
  // === Swiss German (Extended 2) =========
  // ========================================
  // --- Gopf- compounds ---
  "Gopferteckel": [3, 5], // God damn (Swiss German)
  "Gopfertori": [3, 5], // God damn (Swiss German)
  "Gopferdinggel": [3, 5], // God damn (Swiss German)
  "Gopfernochmal": [3, 5], // God damn again (Swiss German)
  "Gopfertamisiech": [3, 4], // God damn bastard (Swiss German)
  "Gopferdammisiech": [3, 4], // God damn bastard (Swiss German variant)
  // --- More Swiss compounds ---
  "Souchog": [3, 5], // Pig dirty (Swiss German, Bern)
  "Sousaich": [3, 5], // Pig mess (Swiss German)
  "Soutubel": [1, 4], // Pig idiot (Swiss German)
  "Soulappi": [3, 5], // Pig wimp (Swiss German)
  "Soulansen": [1, 4], // Pig fool (Swiss German)
  "Soudepp": [1, 4], // Pig moron (Swiss German)
  "Souhund": [3, 5], // Pig dog (Swiss German variant)
  "Soubock": [3, 5], // Pig buck (Swiss German)
  "Souscheiss": [3, 5], // Pig shit (Swiss German)
  "Hueresohn": [5, 5], // Whore's son (Swiss German)
  "Huerefotze": [5, 5], // Whore cunt (Swiss German)
  "Huereguet": [3, 5], // Fucking good (Swiss German intensifier)
  "Huereschlächt": [3, 5], // Fucking bad (Swiss German)
  "Hueremischt": [5, 5], // Whore manure (Swiss German)
  "Huerewieche": [3, 5], // Fucking soft (Swiss German)
  "Hueresaich": [5, 5], // Whore mess (Swiss German)
  "Hueretrottel": [1, 4], // Fucking fool (Swiss German)
  "Huerescheiss": [5, 5], // Whore shit (Swiss German)
  // --- Zurich dialect ---
  "Sieche": [3, 4], // Bastard (Zurich dialect)
  "Cheibsgoofe": [3, 4], // Bastard kids (Zurich)
  "Cheibssiech": [3, 4], // Bastard plague (Zurich)
  "Chaib": [3, 4], // Bastard (Zurich variant)
  "Schaafseckel": [4, 4], // Sheep scrotum (Zurich insult)
  "Seckel": [1, 4], // Scrotum / Idiot (Zurich)
  "Seckl": [4, 4], // Scrotum (Zurich variant)
  "Scheisssiech": [3, 4], // Shit bastard (Zurich)
  // --- Bern dialect ---
  "Gigusohn": [1, 4], // Idiot's son (Bernese)
  "Luusbueb": [3, 4], // Rascal boy (Bernese)
  "Souchoger": [3, 4], // Dirty one (Bernese)
  // --- Basel dialect ---
  "Schnuddergoof": [3, 4], // Snotty kid (Basel)
  "Dabisch": [1, 4], // Stupid (Basel)
  // --- Luzern dialect ---
  "Löu": [1, 4], // Idiot (Luzern)
  "Tschumpel": [1, 4], // Fool (Luzern)

  // ========================================
  // === Bavarian / Southern German (Ext) ==
  // ========================================
  "Saupreiss": [3, 4], // Dirty Prussian (Bavarian variant)
  "Saugrantiger": [3, 4], // Pig grumpy person (Bavarian)
  "Sauglump": [3, 4], // Pig scoundrel (Bavarian)
  "Saudackel": [1, 4], // Pig dachshund (Bavarian idiot)
  "Sauhautn": [3, 4], // Pig skin (Bavarian, worthless)
  "Sauzustand": [3, 4], // Pig condition (Bavarian, terrible state)
  "Sauereiverein": [3, 4], // Piggery club (Bavarian)
  "Kreuzfix": [3, 4], // Crucifix (Bavarian exclamation variant)
  "Herrgottsakra": [3, 4], // Lord god damn (Bavarian)
  "Leckts mi": [3, 4], // Lick me (Bavarian dialect)
  "Leckts mi am Oasch": [3, 4], // Lick my ass (Bavarian dialect)
  "Jessas": [3, 4], // Jesus (Bavarian exclamation)
  "Jessas Maria": [3, 4], // Jesus Mary (Bavarian exclamation)
  "Kruzefünferl": [2, 3], // Crucifix fiver (Bavarian mild swear)
  "Fixlaudn": [3, 4], // Damn (Bavarian exclamation)
  "Himmelsakra": [3, 4], // Heaven damn (Bavarian)
  "Himmiherrgott": [3, 4], // Heaven lord god (Bavarian variant)
  "Bisgurn": [3, 4], // Nasty woman (Bavarian)
  "Dreckhammel": [3, 4], // Dirty ram (Bavarian)
  "Dreckhirsch": [3, 4], // Dirty deer (Bavarian)
  "Saubergl": [3, 4], // Pig mountain (Bavarian)
  "Oachkatzlschwoaf": [1, 4], // Squirrel tail (Bavarian tongue twister, mild insult)
  "Hodalump": [4, 4], // Testicle ragamuffin (Bavarian)
  "Gfrieswarzerl": [3, 4], // Face wart (Bavarian)
  "Misthammel": [3, 4], // Manure ram (Bavarian)
  "Dutzlbimpfl": [3, 4], // Little doofus (Bavarian)
  "Gschaftlhuaberin": [3, 4], // Busybody woman (Bavarian)
  "Oaschgsicht": [3, 4], // Ass face (Bavarian)
  "Glotzn": [3, 4], // Staring eyes / TV (Bavarian)
  "Hundslump": [3, 4], // Dog ragamuffin (Bavarian)
  "Lumpengsindl": [3, 4], // Rag riff-raff (Bavarian)
  "Gschwanzl": [3, 4], // Little tail (Bavarian)
  "Sackzement": [3, 4], // Sack cement (Bavarian exclamation)
  "Sapperment": [3, 4], // Sacrament (Bavarian exclamation variant)
  "Potztausend": [3, 4], // God thousand (Bavarian exclamation)

  // ========================================
  // === Sexual Terms (Extended) ===========
  // ========================================
  "Analperle": [4, 4], // Anal bead
  "Analpflaume": [4, 4], // Anal plum (hemorrhoid)
  "Arschgefickt": [4, 5], // Ass-fucked
  "Arschgefickter": [4, 5], // Ass-fucked person
  "Bückstück": [4, 4], // Bend-piece (sexually submissive person, derogatory)
  "Doppelpenetration": [4, 4], // Double penetration
  "Flotter Dreier": [4, 4], // Quick threesome
  "Fremdgehen": [4, 4], // Cheating (sexual)
  "Fremdvögeln": [4, 4], // Foreign-birding (cheating)
  "Geile Sau": [4, 4], // Horny sow
  "Geiler Bock": [4, 4], // Horny buck
  "Gummipuppe": [4, 4], // Rubber doll (sex doll)
  "Hodenlecker": [4, 4], // Testicle licker
  "Kitzler": [4, 4], // Clitoris (slang)
  "Lustgrotte": [4, 4], // Pleasure grotto (vagina slang)
  "Lustspalte": [4, 4], // Pleasure slit (vagina slang)
  "Mösenfurz": [4, 4], // Pussy fart (queef)
  "Nuttensohn": [4, 4], // Hooker's son
  "Pornostar": [4, 4], // Porn star
  "Pornosau": [4, 4], // Porn pig
  "Sadomasochist": [4, 4], // Sadomasochist
  "Schlampenstecher": [4, 5], // Slut fucker
  "Schwanzlecker": [4, 4], // Dick licker
  "Schwanzlurch": [4, 4], // Dick newt (insult)
  "Spermafleck": [4, 4], // Cum stain
  "Spermafresse": [4, 4], // Cum face
  "Spermaschlucker": [4, 4], // Cum swallower
  "Stiernacken": [4, 4], // Bull neck (can be derogatory)
  "Stripperin": [4, 4], // Stripper (female)
  "Stripper": [4, 4], // Stripper (male)
  "Tiefbläserin": [4, 4], // Deep blower (female)
  "Analratte": [4, 4], // Anal rat

  // ========================================
  // === Homophobic / Transphobic (Ext) ====
  // ========================================
  "Schwulette": [5, 4], // Gay-ette (derogatory for gay man)
  "Schwuli": [5, 4], // Gay (diminutive, derogatory)
  "Arschbaron": [5, 4], // Ass baron (derogatory for gay man)
  "Rosettenlecker": [5, 4], // Rosette licker (derogatory, homophobic)
  "Hinterladerer": [5, 4], // Rear-loader variant (derogatory for gay man)
  "Stehpinkler": [5, 4], // Stand pisser (derogatory for male)
  "Sitzpinkler": [5, 4], // Sit pisser (derogatory for unmasculine man)
  "Puppe": [5, 4], // Doll (derogatory for effeminate man)
  "Tucke": [5, 4], // Fairy (derogatory for gay/effeminate man)
  "Schwulenpack": [5, 4], // Gay pack (derogatory)
  "Schwulenpest": [5, 4], // Gay plague (derogatory)
  "Transenpack": [5, 4], // Tranny pack (derogatory)
  "Drag": [3, 4], // Drag (used derogatorily)
  "Warmer": [3, 4], // Warm one (derogatory, shortform)
  "Lederarsch": [3, 4], // Leather ass (derogatory for gay man)
  "Regenbogenarsch": [3, 4], // Rainbow ass (derogatory for gay)
  "Perverser": [3, 4], // Pervert
  "Perverse": [3, 4], // Pervert (female)

  // ========================================
  // === Ethnic / Racial Slurs (Extended) ==
  // ========================================
  "Bohnenfresser": [5, 4], // Bean eater (derogatory for Turks)
  "Dönerfresser": [5, 4], // Kebab eater (derogatory for Turks)
  "Kopftuchbrigade": [5, 4], // Headscarf brigade (derogatory for Muslim women)
  "Tschuschenbande": [5, 4], // Foreigner gang (Austrian slur)
  "Tschuschenpack": [5, 4], // Foreigner pack (Austrian slur)
  "Negerpack": [5, 5], // Negro pack (extremely offensive)
  "Negerkuss": [5, 4], // Negro kiss (outdated offensive term)
  "Negerlein": [5, 4], // Little Negro (condescending, offensive)
  "Judenratte": [5, 5], // Jew rat (extremely offensive)
  "Judenscheiße": [5, 5], // Jew shit (extremely offensive)
  "Türkensau": [5, 5], // Turk sow (extremely offensive)
  "Asylant": [5, 4], // Asylum seeker (used derogatorily)
  "Asylantenschwein": [5, 5], // Asylum seeker pig (extremely offensive)
  "Asylantenpack": [5, 5], // Asylum seeker pack (extremely offensive)
  "Scheinasylant": [5, 4], // Fake asylum seeker (derogatory)
  "Wirtschaftsflüchtling": [5, 4], // Economic refugee (used derogatorily)
  "Ausländerschwein": [5, 4], // Foreigner pig (derogatory)
  "Kümmelspalter": [5, 4], // Cumin splitter (derogatory for Turks)
  "Zigeunerabschaum": [5, 5], // Gypsy scum (extremely offensive)
  "Schlitzaugen": [5, 4], // Slit-eyes plural (offensive for East Asians)
  "Schluchtenscheißer": [5, 5], // Gorge shitter (derogatory for Austrians)
  "Schwabenhass": [5, 4], // Swabian hate (regional prejudice)
  "Preißn": [5, 4], // Prussians (derogatory, Bavarian spelling)
  "Ossi": [5, 4], // Derogatory for East German
  "Wessi": [5, 4], // Derogatory for West German
  "Zoni": [5, 4], // Derogatory for East German (from Zone)
  "Kuffar": [5, 4], // Infidel (Arabic, used in German context)
  "Kanakenbrut": [5, 5], // Foreigner brood (extremely offensive)
  "Negerbrut": [5, 5], // Negro brood (extremely offensive)
  "Zigeunergfrast": [5, 5], // Gypsy pest (extremely offensive, Austrian)

  // ========================================
  // === Internet / Youth Slang (Ext 2) ====
  // ========================================
  "Amina koyim": [2, 3], // Full Turkish vulgar phrase used in German
  "Orospu": [5, 4], // Turkish: whore (used in German youth slang)
  "Orospu çocuğu": [5, 5], // Turkish: son of a whore (used in German)
  "Eşek": [2, 3], // Turkish: donkey (used as insult in German)
  "Sikerim": [3, 5], // Turkish: I'll fuck (used in German youth slang)
  "Siktir": [3, 5], // Turkish: fuck off (used in German youth slang)
  "Siktir git": [3, 5], // Turkish: fuck off go (used in German)
  "Ibne": [2, 3], // Turkish: faggot (used in German youth slang)
  "Oç": [5, 5], // Turkish abbreviation for son of a whore (used in German)
  "Ya siktir": [3, 5], // Turkish: oh fuck off (used in German)
  "Lan Amk": [3, 5], // Dude fuck (Turkish-German slang)
  "Cüs": [2, 3], // Exclamation (Turkish-German slang, can be offensive)
  "Kanacke": [2, 3], // Slur variant spelling
  "Schabracke": [2, 3], // Old nag (derogatory for women)
  "Pissgurke": [2, 3], // Piss cucumber (pathetic person)
  "Pissgeburt": [2, 3], // Piss birth (offensive)
  "Drecksjude": [2, 3], // Dirty Jew (extremely offensive)
  "Dreckskanake": [2, 3], // Dirty foreigner slur (extremely offensive)
  "Drecksassi": [2, 3], // Dirty trashy person
  "Dreckshartzer": [2, 3], // Dirty welfare recipient (derogatory)
  "Hurensohnverein": [5, 5], // Son of a whore club (insult for sports teams)
  "Cringe": [2, 3], // Cringe (used in German youth slang as insult)
  "Lost": [2, 3], // Lost (used in German youth slang as insult)
  "Toxic": [2, 3], // Toxic (used in German youth slang)
  "Bratan": [2, 3], // Brother (Russian-German slang, can be offensive)
  "Blyat": [3, 4], // Bitch (Russian, used in German youth slang)
  "Suka": [3, 4], // Bitch (Russian, used in German youth slang)
  "Cyka Blyat": [3, 4], // Russian obscenity used in German gaming
  "Ehre genommen": [2, 3], // Honor taken (youth slang for humiliated)
  "Müllkind": [2, 3], // Trash child
  "Abfallmensch": [2, 3], // Garbage human
  "Fickjunge": [3, 5], // Fuck boy
  "Fickboy": [3, 5], // Fuck boy (English hybrid)
  "Bitch": [3, 4], // Bitch (English, used in German)
  "Motherfucker": [5, 5], // Motherfucker (English, used in German)
  "Son of a bitch": [3, 5], // (English, used in German)
  "Nullchecker": [2, 3], // Zero checker (clueless person)
  "Aldi-Kind": [2, 3], // Aldi child (cheap/poor person)
  "Hartz-IV-Empfänger": [2, 3], // Welfare recipient (used as insult)
  "Sozialschmarotzer": [2, 3], // Social parasite
  "Sozialparasit": [2, 3], // Social parasite variant
  "1 Pansen": [2, 5], // One paunch (youth meme insult)

  // ========================================
  // === Miscellaneous Compounds ===========
  // ========================================
  "Klobrille": [3, 5], // Toilet seat (insult)
  "Klobürste": [3, 5], // Toilet brush (insult)
  "Pissbecken": [3, 5], // Piss basin (insult)
  "Toilettenbürste": [3, 5], // Toilet brush (insult)
  "Kackhaus": [3, 5], // Shit house
  "Mistbiene": [3, 5], // Manure bee (annoying person)
  "Mistkäfer": [3, 5], // Dung beetle (insult)
  "Mistbock": [3, 5], // Manure buck (scoundrel)
  "Mistgeburt": [3, 5], // Manure birth (variant of Missgeburt)
  "Mistsack": [3, 5], // Manure sack (scumbag)
  "Mistkarren": [3, 5], // Manure cart (terrible vehicle/situation)
  "Schandfleck": [3, 5], // Shame stain (disgrace)
  "Schandtat": [3, 5], // Shameful deed
  "Schändlich": [3, 5], // Shameful
  "Dummbacke": [1, 4], // Dumb cheek (fool)
  "Dummfick": [1, 4], // Dumb fuck
  "Dummficker": [1, 4], // Dumb fucker
  "Dummfotze": [1, 4], // Dumb cunt
  "Hirnfick": [3, 5], // Brain fuck
  "Kopffick": [3, 5], // Head fuck
  "Mindfuck": [3, 5], // Mindfuck (English, used in German)
  "Holzkopp": [3, 5], // Wooden head (Plattdeutsch)
  "Holzfresse": [3, 5], // Wooden face (insult)
  "Lullibumm": [4, 5], // Penis boom (silly person)
  "Pimmelberger": [4, 5], // Dick mountain (silly insult)
  "Sacknase": [4, 5], // Scrotum nose
  "Sackbieber": [4, 5], // Scrotum beaver
  "Sackklammer": [4, 5], // Scrotum clamp
  "Schwanzbirne": [4, 5], // Dick pear
  "Schwanzkopf": [4, 5], // Dick head
  "Tittenarsch": [4, 5], // Tit-ass
  "Titten raus": [4, 5], // Tits out
  "Mösenknecht": [4, 5], // Pussy servant (simp)
  "Mösenmeister": [4, 5], // Pussy master (vulgar brag)
  "Muschigesicht": [4, 5], // Pussy face
  "Muschifurz": [4, 5], // Pussy fart
  "Muschilappen": [4, 5], // Pussy cloth
  "Eiergesicht": [4, 5], // Egg face (testicle face)
  "Eierkopf": [3, 5], // Egg head (intellectual, derogatory)
  "Eierlecker": [4, 5], // Egg/testicle licker
  "Eierschaukler": [3, 5], // Egg swinger (lazy person, Austrian)
  "Samenschleuder": [3, 5], // Sperm slingshot (promiscuous man)
  "Samenspender": [1, 4], // Sperm donor (derogatory for father)
  "Gebärkuh": [3, 5], // Birth cow (derogatory for mother)
  "Gebärmaschine": [3, 5], // Birth machine (derogatory for mother)
  "Abmelkstation": [3, 5], // Milking station (derogatory for woman)
  "Sexsklavin": [3, 5], // Sex slave (female)
  "Sexobjekt": [3, 5], // Sex object
  "Brüste": [4, 5], // Breasts (vulgar in context)
  "Ständerfotze": [5, 5], // Boner cunt
  "Lümmellutscher": [4, 5], // Lout sucker (cocksucker variant)
  "Pimmellutscher": [4, 5], // Dick sucker
  "Nutten": [3, 5], // Hookers (plural)
  "Nutte vom Bahnhof": [3, 5], // Station hooker
  "Bahnhofsnutte": [3, 5], // Station hooker (compound)
  "Straßennutte": [3, 5], // Street hooker
  "Billignutte": [3, 5], // Cheap hooker

  // ========================================
  // === Compound Insults & Combinations ===
  // ========================================
  "Drecksarsch": [3, 4], // Dirty ass
  "Drecksspast": [1, 4], // Dirty spaz
  "Mistkröte": [1, 4], // Crap toad (insult)
  "Mistsau": [1, 4], // Manure sow
  "Mistweib": [1, 4], // Crap woman
  "Vollhonk": [1, 4], // Complete honk (idiot)
  "Vollspacko": [1, 4], // Complete weirdo
  "Vollnull": [1, 4], // Complete zero
  "Obertrottel": [1, 4], // Supreme fool
  "Oberarsch": [3, 4], // Supreme ass
  "Oberdepp": [1, 4], // Supreme moron
  "Oberdummkopf": [1, 4], // Supreme dumbhead
  "Oberidiot": [1, 4], // Supreme idiot
  "Oberloser": [1, 4], // Supreme loser
  "Oberpenner": [1, 4], // Supreme bum
  "Oberspast": [1, 4], // Supreme spaz
  "Schwanzfresse": [4, 4], // Cock face (vulgar)
  "Schwanznase": [4, 4], // Cock nose
  "Arschtreter": [3, 4], // Ass kicker
  "Arschwarze": [3, 4], // Ass wart
  "Kackscheißer": [3, 5], // Shit shitter
  "Kotzgesicht": [1, 4], // Vomit face
  "Kotzbeutel": [1, 4], // Vomit bag
  "Kotzfresse": [1, 4], // Vomit face (vulgar)
  "Fickfrosch": [3, 5], // Fuck frog
  "Fickvieh": [3, 5], // Fuck beast
  "Fickscheißer": [3, 5], // Fuck shitter
  "Scheiß drauf": [3, 5], // Shit on it
  "Scheißerei": [3, 5], // Diarrhea / shit storm
  "Scheißfresse": [3, 5], // Shit face
  "Scheißkram": [3, 5], // Shitty stuff
  "Scheißteil": [3, 5], // Shitty part
  "Hurenbande": [5, 4], // Whore gang
  "Nutzlose Drecksau": [1, 4], // Useless dirty sow
  "Dumme Sau": [1, 4], // Stupid sow
  "Dummer Wichser": [1, 4], // Stupid wanker
  "Blöde Sau": [1, 4], // Stupid sow
  "Blöder Sack": [1, 4], // Stupid sack
  "Blöder Affe": [1, 4], // Stupid monkey
  "Fettes Schwein": [1, 4], // Fat pig
  "Fette Kuh": [1, 4], // Fat cow
  "Fetter Wichser": [1, 4], // Fat wanker
  "Fette Schlampe": [1, 4], // Fat slut
  "Fetter Arsch": [1, 4], // Fat ass
  "Fetter Idiot": [1, 4], // Fat idiot
  "Altes Weib": [1, 4], // Old woman (derog.)
  "Alte Schachtel": [1, 4], // Old box (old hag)
  "Alte Hexe": [1, 4], // Old witch
  "Alte Schabracke": [1, 4], // Old nag
  "Alter Bock": [1, 4], // Old buck (old goat)
  "Kleiner Wichser": [1, 4], // Little wanker
  "Kleiner Pisser": [1, 4], // Little pisser
  "Kleines Arschloch": [3, 4], // Little asshole

  // ========================================
  // === Austrian Dialect ==================
  // ========================================
  "Oasch": [3, 4], // Ass (Austrian)
  "Gscherte": [3, 4], // Uncouth person (Austrian)
  "Zipflklatscher": [4, 4], // Dick slapper (Austrian insult)
  "Lulu": [4, 4], // Pee/penis (Austrian childish)
  "Kiberer": [3, 4], // Cop (Austrian derog.)
  "Oarschleckah": [3, 4], // Ass licker (Austrian)
  "Schnaxler": [3, 5], // Fucker (Austrian)
  "Hoschoh": [3, 4], // Weirdo (Austrian)
  "Plutzer": [3, 4], // Pumpkin / head (Austrian)
  "Leck mi": [3, 4], // Lick me (Austrian)
  "Leck mi am Oasch": [3, 4], // Kiss my ass (Austrian)
  "Granatenscheißer": [3, 5], // Grenade shitter (Austrian insult)
  "Bsuff": [1, 3], // Drunk (Austrian)
  "Bsuffener": [1, 3], // Drunkard (Austrian)
  "Saubeutel": [3, 4], // Pig bag (Austrian insult)
  "Saufratze": [3, 4], // Sow face (Austrian)

  // ========================================
  // === Swiss German Dialect ==============
  // ========================================
  "Schiisdräck": [3, 5], // Shit dirt (Swiss)
  "Gopferdami": [3, 4], // God damn it (Swiss)
  "Huäresiech": [5, 4], // Whore sick (Swiss profanity)
  "Cheibs": [3, 4], // Damned (Swiss)
  "Cheibdreck": [3, 4], // Damned dirt (Swiss)
  "Saugoof": [3, 4], // Pig brat (Swiss)
  "Huerä": [3, 5], // Fucking / damned (Swiss intensifier)
  "Schnure": [3, 4], // Mouth / shut up (Swiss derog.)
  "Fötzel": [3, 4], // Scoundrel (Swiss)
  "Chalb": [1, 4], // Calf / idiot (Swiss)
  "Schiisser": [1, 4], // Shitter / coward (Swiss)
  "Grindchopf": [3, 4], // Headhead / stubborn (Swiss)
  "Hodesack": [3, 4], // Ball sack (Swiss)
  "Futschigoof": [4, 4], // Vagina brat (Swiss)

  // ========================================
  // === Bavarian Dialect ==================
  // ========================================
  "Preiß": [3, 4], // Prussian (Bavarian pejorative)
  "Deppat": [1, 4], // Stupid (Bavarian)
  "Gschaftlhuaber": [3, 4], // Busybody (Bavarian)
  "Kreizbirnbaum": [3, 4], // Cross pear tree (Bavarian swear)
  "Kruzifünferl": [2, 3], // Cross fiver (Bavarian mild swear)
  "Hundling": [3, 4], // Little dog (Bavarian insult)
  "Hundsgrippl": [3, 4], // Dog cripple (Bavarian)
  "Haderlump": [3, 4], // Rag rogue (Bavarian)
  "Luader": [3, 4], // Hussy (Bavarian variant)
  "Deifelsbrut": [3, 4], // Devil's brood (Bavarian)
  "Dampfplauderer": [3, 4], // Steam chatterer (Bavarian blowhard)
  "Depperte": [1, 4], // Stupid one female (Bavarian)
  "Depperter": [1, 4], // Stupid one male (Bavarian)
  "Hallodri": [3, 4], // Rascal (Bavarian)
  "Schoaßdrumml": [3, 4], // Fart drum (Bavarian)
  "Sauguat": [3, 4], // Pig good / damn good (Bavarian)
  "Saubledsinnig": [1, 4], // Pig stupid (Bavarian)
  "Zwiderwurzn": [3, 4], // Contrary root (grumpy person, Bavarian)
  "Ratschkathl": [3, 4], // Gossip woman (Bavarian)

  // ========================================
  // === Swabian Dialect ===================
  // ========================================
  "Sauluadr": [3, 4], // Pig hussy (Swabian)
  "Schofseckel": [4, 4], // Sheep scrotum (Swabian insult)
  "Seggl": [1, 4], // Scrotum / idiot (Swabian)
  "Saubladr": [3, 4], // Pig bladder (Swabian insult)
  "Schlitzohr": [3, 4], // Slit ear / cunning person (Swabian)
  "Graddler": [3, 4], // Scruffy (Swabian)
  "Luschd": [3, 4], // Lazy/sloppy (Swabian)
  "Lombaseggl": [4, 4], // Rag scrotum (Swabian insult)
  "Dreggsbeidl": [3, 4], // Dirty bag (Swabian)
  "Brunzdeggl": [3, 4], // Piss lid (Swabian)
  "Maulheld": [3, 4], // Mouth hero (Swabian blowhard)
  "Schlotzer": [3, 4], // Slobberer (Swabian)
  "Siachkropf": [3, 4], // Sick crop (Swabian insult)
  "Suppaschwob": [3, 4], // Soup Swabian (insult)

  // ========================================
  // === Saxon Dialect =====================
  // ========================================
  "Dähämull": [1, 4], // Dumbmouth (Saxon)
  "Glootzn": [3, 4], // Staring eyes (Saxon derog.)
  "Gorsche": [3, 4], // Big mouth (Saxon)
  "Widerborschd": [3, 4], // Contrary bristle / stubborn (Saxon)
  "Drecksach": [3, 4], // Dirt thing (Saxon)
  "Nischel": [3, 4], // Head / noggin (Saxon derog.)
  "Scheese": [3, 4], // Jalopy / bad thing (Saxon)
  "Hämfull": [3, 4], // Mouthful (Saxon insult)
  "Dämlicher Sachse": [1, 4], // Stupid Saxon (self-deprecating)
  "Bleedmann": [1, 4], // Stupid man (Saxon)

  // ========================================
  // === Berlin Dialect ====================
  // ========================================
  "Flitzpiepe": [3, 4], // Speedy pipe (Berlin insult)
  "Jansen": [3, 4], // Nobody (Berlin derog.)
  "Knallkopp": [1, 4], // Bang head (Berlin idiot)
  "Laberbacke": [3, 4], // Blabber cheek (Berlin)
  "Piesepampel": [3, 4], // Fussy person (Berlin)
  "Pappnase": [3, 4], // Cardboard nose (Berlin clown)
  "Schnauze": [3, 4], // Snout / shut up (Berlin)
  "Ick fick dir": [3, 5], // I fuck you (Berlin dialect)
  "Ick mach dir platt": [3, 4], // I'll flatten you (Berlin)
  "Jibs keene Fresse": [3, 4], // Shut your face (Berlin)
  "Deef": [1, 4], // Stupid (Berlin)
  "Kackstelzen": [3, 5], // Shit stilts (Berlin)
  "Nulpe": [3, 4], // Zero / nobody (Berlin)

  // ========================================
  // === Ruhrpott Dialect ==================
  // ========================================
  "Kohlenpansen": [3, 4], // Coal belly (Ruhr insult)
  "Lusche": [3, 4], // Wimp (Ruhr)
  "Luschi": [3, 4], // Wimpy (Ruhr)
  "Pummelchen": [3, 4], // Chubby one (Ruhr derog.)
  "Hömma": [3, 4], // Listen here (Ruhr, can be aggressive)

  // ========================================
  // === Plattdeutsch (Low German) =========
  // ========================================
  "Drögbansen": [3, 4], // Dry belly (Low German insult)
  "Klookschieter": [3, 5], // Smart shitter (Low German know-it-all)
  "Lüttje Schietkeerl": [3, 5], // Little shit guy (Low German)
  "Schietkram": [3, 5], // Shit stuff (Low German)
  "Snieder": [3, 4], // Snot (Low German)
  "Slickscheeter": [3, 5], // Slick shitter (Low German)
  "Kansen": [3, 4], // Trash (Low German)
  "Swienegel": [3, 4], // Pig hedgehog (Low German)
  "Swien": [3, 4], // Pig (Low German)

  // ========================================
  // === Franconian Dialect ================
  // ========================================
  "Dabbschädl": [3, 4], // Clumsy skull (Franconian)
  "Grischberla": [3, 4], // Little groaner (Franconian)
  "Graaddaggl": [1, 4], // Straight dachshund (Franconian idiot)
  "Hadderlump": [3, 4], // Rag rogue (Franconian)
  "Lulasch": [3, 4], // Gangly person (Franconian)
  "Schelm": [3, 4], // Rogue (Franconian)
  "Seidla": [1, 3], // Beer mug / drunkard (Franconian)

  // ========================================
  // === Sexual Terms & Compounds ==========
  // ========================================
  "Analfick": [4, 5], // Anal fuck
  "Analgeburt": [4, 4], // Anal birth (insult)
  "Doggy": [3, 4], // Doggy style
  "Kehlenfick": [3, 5], // Throat fuck
  "Lustsklavin": [3, 4], // Pleasure slave (f.)
  "Lustobjekt": [3, 4], // Lust object
  "Masturbieren": [4, 4], // To masturbate
  "Mösenlikör": [4, 4], // Pussy liquor (very vulgar)
  "Mösenlutscher": [4, 4], // Pussy sucker
  "Nuttenficker": [5, 5], // Whore fucker
  "Onanieren": [4, 4], // To masturbate (formal)
  "Pornoschlampe": [3, 4], // Porn slut
  "Pornofotze": [5, 5], // Porn cunt
  "Rammler": [3, 5], // Someone who fucks a lot
  "Reiten": [3, 4], // To ride (sexual)
  "Reindrücken": [3, 4], // To push in (sexual)
  "Spermaschluckerin": [3, 4], // Sperm swallower (f.)
  "Spritzen": [3, 4], // To squirt / ejaculate
  "Stöhnen": [3, 4], // To moan (sexual)
  "Tierficker": [3, 5], // Animal fucker
  "Tittenfick": [4, 5], // Tit fuck
  "Tittenlutscher": [4, 4], // Tit sucker
  "Triebhaft": [3, 4], // Driven by urges
  "Triebtäter": [3, 4], // Sex offender
  "Wichsgriffell": [4, 4], // Wank pen (dick)
  "Einlochen": [3, 4], // To hole (sexual)
  "Fummeln": [3, 4], // To grope
  "Fummelei": [3, 4], // Groping
  "Geschlechtskrankheit": [3, 4], // STD
  "Nympho": [3, 4], // Nympho
  "Porno": [3, 4], // Porn
  "Pornografie": [3, 4], // Pornography
  "Puffbesuch": [3, 4], // Brothel visit
  "Puffgänger": [3, 4], // Brothel goer
  "Puffmutter": [3, 4], // Brothel mother (madam)
  "Stricherin": [5, 4], // Female prostitute (streetwalker)
  "Tripper": [3, 4], // Gonorrhea
  "Syphilis": [3, 4], // Syphilis
  "Cockring": [4, 4], // Cock ring
  "Fesselspiel": [3, 4], // Bondage play
  "Fetisch": [3, 4], // Fetish
  "Pädophiler": [5, 5], // Pedophile
  "Kinderschänder": [3, 4], // Child molester
  "Vergewaltiger": [5, 5], // Rapist
  "Vergewaltigung": [5, 5], // Rape
  "Orgienmeister": [3, 4], // Orgy master

  // ========================================
  // === Scatological Terms ================
  // ========================================
  "Dünnschiss": [3, 5], // Diarrhea (thin shit)
  "Durchfall": [3, 4], // Diarrhea
  "Furz": [3, 4], // Fart
  "Fürze": [3, 4], // Farts (plural)
  "Furzgesicht": [3, 4], // Fart face
  "Furzknoten": [3, 4], // Fart knot
  "Furztrocken": [3, 4], // Fart dry (very dry)
  "Kacker": [3, 5], // Shitter
  "Kackstift": [3, 5], // Shit pen (annoying child)
  "Klolektüre": [3, 4], // Toilet reading
  "Kloschlüssel": [1, 4], // Toilet key (idiot)
  "Pinkel": [3, 4], // Pee/pisser
  "Pinkler": [3, 4], // Pisser
  "Pisskrüppel": [3, 4], // Piss cripple
  "Pipi": [3, 4], // Pee pee
  "Pupser": [3, 4], // Tooter (farter)
  "Rotze": [3, 4], // Snot
  "Rotzfahne": [3, 4], // Snot flag (hanky)
  "Rotzlappen": [3, 4], // Snot rag
  "Schiss": [3, 5], // Shit / fear
  "Schisskram": [3, 5], // Shit stuff
  "Stuhlgang": [3, 4], // Bowel movement

  // ========================================
  // === Intelligence Insults ==============
  // ========================================
  "Backpfeifengesicht": [1, 4], // Face in need of a slap
  "Banane": [1, 4], // Banana (idiot)
  "Blockflöte": [1, 4], // Recorder (useless person)
  "Bratapfel": [1, 4], // Baked apple (red-faced idiot)
  "Dampfnudel": [1, 4], // Steam noodle (chubby idiot)
  "Doofkopp": [1, 4], // Dumb head
  "Doofmann": [1, 4], // Dumb man
  "Dösbirne": [1, 4], // Drowsy pear (dim person)
  "Evolutionsversager": [1, 4], // Evolution failure
  "Fachidiot": [1, 4], // Subject idiot (one-track mind)
  "Fettnäpfchen": [1, 4], // Fat bowl (social blunder)
  "Flasche": [1, 4], // Bottle / loser
  "Gehirnakrobat": [1, 4], // Brain acrobat (sarcastic)
  "Gehirnamputation": [1, 4], // Brain amputation
  "Geistesgestörter": [1, 4], // Mentally disturbed
  "Geisteszwerg": [1, 4], // Spirit dwarf
  "Grenzdebil": [1, 4], // Borderline moronic
  "Grips": [1, 4], // Brains (lack thereof)
  "Grützhirn": [1, 4], // Grits brain
  "Gurkentruppe": [1, 4], // Cucumber troop (useless group)
  "Hirnamputiert": [1, 4], // Brain amputated
  "Hirnrissig": [1, 4], // Brain-cracked (crazy)
  "Hirnverbrannt": [1, 4], // Brain-burned
  "Hirnverbranntheit": [1, 4], // Brain-burnedness
  "Hirnwindung": [1, 4], // Brain convolution (sarcastic: having only one)
  "Honk": [1, 4], // Idiot
  "Idiotenverein": [1, 4], // Idiots club
  "Intelligenzbestie": [1, 4], // Intelligence beast (sarcastic)
  "Intelligenzbolzen": [1, 4], // Intelligence bolt (sarcastic)
  "Knallbirne": [1, 4], // Bang pear (idiot)
  "Knallcharge": [1, 4], // Bang extra (useless person)
  "Knallerbse": [1, 4], // Bang pea (idiot)
  "Kohlkopf": [1, 4], // Cabbage head
  "Lackel": [1, 4], // Clumsy lout
  "Leuchte": [1, 4], // Light (sarcastic for dim person)
  "Minderbemittelter": [1, 4], // Under-endowed (mentally)
  "Mondkalb": [1, 4], // Moon calf (dreamer)
  "Nappel": [1, 4], // Dimwit
  "Nassauer": [1, 4], // Freeloader / parasite
  "Niete": [1, 4], // Dud / failure
  "Pantoffelheld": [1, 4], // Slipper hero (henpecked)
  "Pflaume": [1, 4], // Plum (useless person)
  "Pfeifenheini": [1, 4], // Pipe Heini (useless person)
  "Rindvieh": [1, 4], // Cattle (stupid person)
  "Schafskopf": [1, 4], // Sheep head (stupid)
  "Schnarchnase": [1, 4], // Snoring nose (sleepy person)
  "Schnarchsack": [1, 4], // Snoring sack (sleepy person)
  "Stumpfsinn": [1, 4], // Blunt sense (dullness)
  "Tölpel": [1, 4], // Oaf
  "Trottelgesicht": [1, 4], // Dunce face
  "Unterbelichteter": [1, 4], // Underexposed (dim person)
  "Vollkoffer": [1, 4], // Full suitcase (idiot, Austrian)
  "Witzfigur": [1, 4], // Joke figure
  "Witzkanone": [1, 4], // Joke cannon (sarcastic)
  "Zipfeklatscher": [1, 4], // Dick slapper (idiot)

  // ========================================
  // === Appearance Insults ================
  // ========================================
  "Brillenschlange": [3, 4], // Glasses snake
  "Fettarsch": [1, 4], // Fat ass
  "Hängetitten": [4, 4], // Saggy tits
  "Hässliche Fratze": [1, 4], // Ugly mug
  "Pickelgesicht": [1, 4], // Pimple face
  "Rüsseltier": [1, 4], // Trunk animal (big nose)
  "Schiefmaul": [1, 4], // Crooked mouth
  "Segelohren": [1, 4], // Sail ears (big ears)
  "Walross": [1, 4], // Walrus (fat person)
  "Watschenbaam": [1, 4], // Slap tree (slappable face, Bavarian)
  "Zahnlückenfresse": [1, 4], // Gap-toothed face

  // ========================================
  // === Behavioral Insults ================
  // ========================================
  "Angeberin": [1, 4], // Show-off (f.)
  "Doppelzüngler": [1, 4], // Double-tonguer (liar)
  "Feigling": [1, 4], // Coward
  "Großmaul": [1, 4], // Big mouth
  "Heulerin": [1, 4], // Crier (f.)
  "Knauser": [1, 4], // Miser
  "Krämerseele": [1, 4], // Shopkeeper soul (petty)
  "Langfinger": [1, 4], // Long finger (thief)
  "Lästerschwester": [1, 4], // Gossip sister
  "Lügenbeutel": [1, 4], // Lie bag (liar)
  "Lügenbaron": [1, 4], // Lie baron
  "Lügenmaul": [1, 4], // Lie mouth
  "Maulfaul": [1, 4], // Mouth lazy (uncommunicative)
  "Nervtöter": [1, 4], // Nerve killer
  "Petze": [1, 4], // Snitch
  "Quasselstrippe": [1, 4], // Chatter strip (chatterbox)
  "Radfahrer": [1, 4], // Cyclist (sucks up, kicks down)
  "Saufkopf": [1, 3], // Drunkard head
  "Schleimer": [1, 4], // Slimer (sycophant)
  "Schleimsack": [1, 4], // Slime sack
  "Schummler": [1, 4], // Cheater
  "Schwarzfahrer": [1, 4], // Fare dodger
  "Schwätzer": [1, 4], // Blabberer
  "Stalker": [1, 4], // Stalker
  "Stänkerer": [1, 4], // Troublemaker
  "Störenfried": [1, 4], // Disturber of peace
  "Tratschtante": [1, 4], // Gossip aunt
  "Trittbrettfahrer": [1, 4], // Running board rider (freeloader)
  "Unruhestifter": [1, 4], // Troublemaker
  "Windbeutel": [1, 4], // Cream puff (unreliable person)
  "Witzbold": [1, 4], // Joker (derog.)

  // ========================================
  // === Slurs (Ethnic/Religious/LGBTQ) ====
  // ========================================
  "Russki": [3, 4], // Slur for Russians
  "Zigeunerbrut": [5, 4], // Roma brood (slur)
  "Zecke": [5, 4], // Tick (slur for leftists)
  "Kartoffel": [5, 4], // Potato (reverse slur for Germans)
  "Schwul": [5, 4], // Gay (derog. usage)
  "Schwule Sau": [5, 4], // Gay pig
  "Ladyboy": [5, 5], // Ladyboy (derog.)
  "Spastiker": [5, 4], // Spastic (ableist)
  "Mongoloid": [5, 4], // Mongoloid (slur)
  "Behinderter": [5, 4], // Disabled person (as insult)
  "Retardiert": [5, 4], // Retarded
  "Judenpack": [5, 4], // Jew pack (antisemitic)
  "Jude": [5, 4], // Jew (when used as insult)
  "Islamist": [5, 4], // Islamist (as slur)
  "Terroristenpack": [5, 4], // Terrorist pack
  "Ausländer raus": [5, 4], // Foreigners out
  "Asylschmarotzer": [5, 4], // Asylum parasite
  "Asozial": [5, 4], // Anti-social
  "Prollet": [5, 4], // Prole
  "Proll": [5, 4], // Prole (short)
  "Bonze": [1, 4], // Fat cat (rich person insult)
  "Spießer": [5, 4], // Philistine / square

  // ========================================
  // === Evasion Spellings =================
  // ========================================
  "Sche1ße": [3, 5], // Scheiße variant
  "H.ure": [3, 5], // Hure split
  "Hu.re": [3, 5], // Hure with dot
  "Sch1ampe": [3, 5], // Schlampe with 1
  "4rsch": [3, 5], // Arsch with 4
  "Fo+ze": [3, 5], // Fotze with +
  "Schw4nz": [3, 5], // Schwanz with 4
  "P1mmel": [3, 5], // Pimmel with 1
  "H0densack": [3, 5], // Hodensack with 0
  "Schl4mpe": [3, 5], // Schlampe with 4
  "Hu r e": [3, 5], // Hure spaced
  "F i c k e n": [3, 5], // Ficken spaced
  "A r s c h": [3, 5], // Arsch spaced
  "F o t z e": [3, 5], // Fotze spaced
  "W i c h s e r": [3, 5], // Wichser spaced
  "Sch.eiße": [3, 5], // With dot
  "S.cheiße": [3, 5], // With dot
  "Ar$ch": [3, 5], // Arsch with $
  "Ar$chloch": [3, 5], // Arschloch with $
  "F1ckd1ch": [3, 5], // Fick dich with 1s
  "Hu*e": [3, 5], // Hure with star
  "Spaßt1": [3, 5], // Spasti with 1
  "Sp@sti": [3, 5], // Spasti with @
  "Sp4sti": [3, 5], // Spasti with 4
  "Hür3nsohn": [5, 5], // Hurensohn with 3
  "Hürënsohn": [5, 5], // Hurensohn with accents
  "M1stgeburt": [3, 5], // Mistgeburt with 1
  "M!stgeburt": [3, 5], // Mistgeburt with !
  "Missgebvrt": [3, 5], // Missgeburt with v
  "Mi$$geburt": [3, 5], // Missgeburt with $$
  "Behindert3r": [3, 5], // Behinderter with 3
  "B3hinderter": [3, 5], // Behinderter with 3

  // ========================================
  // === Internet Slang & Gaming ===========
  // ========================================
  "MfG Fick dich": [3, 5], // Regards, fuck you
  "Spacko": [2, 3], // Weirdo
  "Nub": [2, 3], // Noob variant
  "Boon": [2, 3], // Noob variant
  "Lachnummer": [2, 3], // Laughing number (joke person)
  "Alda": [2, 3], // Dude (aggressive usage)
  "Hdf": [5, 5], // Halt die Fresse (shut your face)
  "Hau ab": [2, 3], // Piss off
  "Fick dich": [3, 5], // Fuck you
  "Krebs": [5, 5], // Cancer (death wish)
  "Kys": [5, 5], // Kill yourself (gaming)
  "Rekt": [3, 4], // Wrecked (gaming)
  "Trashtalker": [3, 4], // Trash talker
  "Salty": [2, 3], // Salty (mad)
  "Camper": [1, 2], // Camper (gaming insult)
  "Hacker": [3, 4], // Hacker/cheater (gaming)
  "Cheater": [3, 4], // Cheater (gaming)

  // ========================================
  // === Verb Conjugations =================
  // ========================================
  // --- ficken (to fuck) ---
  "ficke": [3, 5], // I fuck
  "fickst": [3, 5], // You fuck
  "fickt": [3, 5], // He/she fucks
  "fickten": [3, 5], // They fucked
  "fickend": [3, 5], // Fucking (adj.)
  "durchgefickt": [3, 5], // Fucked through
  "zerficken": [3, 5], // To fuck up
  "zerfickt": [3, 5], // Fucked up
  "anficken": [3, 5], // To start fucking
  "ausficken": [3, 5], // To fuck out
  "hinficken": [3, 5], // To fuck over
  "wegficken": [3, 5], // To fuck away
  // --- wichsen (to wank) ---
  "wichst": [3, 4], // You/he wanks
  "wichste": [3, 4], // Wanked
  "gewichst": [3, 4], // Wanked (past)
  "wichsend": [3, 4], // Wanking
  // --- kacken (to shit) ---
  "kackst": [3, 5], // You shit
  "kackt": [3, 5], // He/she shits
  "kackten": [3, 4], // They shat
  "gekackt": [3, 4], // Shat
  "abkacken": [3, 4], // To croak / fail
  "vollkacken": [3, 5], // To shit full
  "reinkacken": [3, 5], // To shit into
  "draufkacken": [3, 5], // To shit on top
  // --- pissen (to piss) ---
  "pisse": [3, 4], // I piss
  "pisst": [3, 4], // You/he pisses
  "gepisst": [3, 4], // Pissed
  // --- kotzen (to puke) ---
  "kotze": [3, 4], // I puke
  "kotzt": [3, 4], // You/he pukes
  "gekotzt": [3, 4], // Puked
  // --- scheißen (to shit) ---
  "scheißt": [3, 5], // You/he shits
  "geschissen": [3, 4], // Shat
  "bescheißen": [3, 5], // To cheat (lit. shit on)
  "anscheißen": [3, 5], // To shit on / to rat out
  "reinscheißen": [3, 5], // To shit into
  "draufscheißen": [3, 5], // To shit on (not care)
  "zusammenscheißen": [3, 5], // To shit together / berate
  "zugeschissen": [3, 5], // Shit closed
  // --- vögeln (to fuck, lit. to bird) ---
  "vögle": [3, 5], // I fuck (vögeln)
  "vögelst": [3, 5], // You fuck
  "vögelt": [3, 5], // He/she fucks
  "gevögelt": [3, 5], // Fucked
  "rumvögeln": [3, 5], // To fuck around
  "durchvögeln": [3, 5], // To fuck through
  // --- bumsen (to bang) ---
  "bumse": [3, 4], // I bang
  "bumst": [3, 4], // You/he bangs
  "gebumst": [3, 4], // Banged

  // ========================================
  // === Diminutive & Augmentative Forms ===
  // ========================================
  "Arschlöchlein": [3, 4], // Little asshole
  "Arschlöchchen": [3, 4], // Tiny asshole
  "Hürchen": [5, 4], // Little whore
  "Schlampchen": [3, 4], // Little slut
  "Fotzchen": [5, 5], // Little cunt
  "Pimmelchen": [4, 4], // Little dick
  "Schwänzchen": [4, 4], // Little tail/dick
  "Wichserchen": [3, 4], // Little wanker
  "Tittchen": [4, 4], // Little tits
  "Möslein": [4, 4], // Little pussy
  "Idiotlein": [1, 4], // Little idiot
  "Trottellein": [3, 4], // Little dunce
  "Scheißerchen": [3, 5], // Little shitter
  "Spastilein": [3, 4], // Little spaz
  "Riesenpimmel": [4, 4], // Giant dick
  "Riesenarsch": [3, 4], // Giant ass
  "Riesenfotze": [5, 5], // Giant cunt
  "Riesenschlampe": [3, 4], // Giant slut
  "Riesenidiot": [1, 4], // Giant idiot
  "Riesendepp": [1, 4], // Giant moron
  "Riesentrottel": [3, 4], // Giant dunce
  "Riesenwichser": [3, 4], // Giant wanker
  "Megafotze": [5, 5], // Mega cunt
  "Megaarsch": [3, 4], // Mega ass
  "Megadepp": [1, 4], // Mega moron
  "Megaidiot": [1, 4], // Mega idiot
  "Superarsch": [3, 4], // Super ass
  "Superschlampe": [3, 4], // Super slut
  "Superspast": [3, 4], // Super spaz
  "Superidiot": [1, 4], // Super idiot
  "Ultradepp": [1, 4], // Ultra moron
  "Ultrawichser": [3, 4], // Ultra wanker

  // ========================================
  // === Rhyming & Wordplay ================
  // ========================================
  "Sackhüpfer": [3, 4], // Sack hopper
  "Bratfresse": [3, 4], // Fry face
  "Käsefuß": [3, 4], // Cheese foot
  "Käsefresse": [3, 4], // Cheese face
  "Käsemaden": [3, 4], // Cheese maggots
  "Hosenpinkler": [3, 4], // Pants pisser
  "Bettnässer": [3, 4], // Bed wetter
  "Bettpisser": [3, 4], // Bed pisser
  "Arschgeiger": [3, 4], // Ass violinist
  "Sackkratzer": [3, 4], // Sack scratcher
  "Eierkocher": [3, 4], // Ball boiler
  "Eiertanz": [3, 4], // Egg dance (delicate situation)
  "Pimmelnasen": [4, 4], // Dick nose
  "Stinksau": [3, 4], // Stink sow
  "Dummtrottel": [1, 4], // Dumb dunce
  "Dummbeutel": [1, 4], // Dumb bag
  "Dummfresse": [1, 4], // Dumb face
  "Dummbirne": [1, 4], // Dumb pear
  "Dummgesicht": [1, 4], // Dumb face

  // ========================================
  // === Additional Compounds ==============
  // ========================================
  "Affenhirn": [3, 5], // Monkey brain
  "Affenschande": [3, 5], // Monkey shame
  "Affengeil": [3, 5], // Monkey horny (extremely cool/horny)
  "Afterlecker": [3, 5], // Anus licker
  "Aftergeburt": [3, 5], // Afterbirth (insult)
  "Arschbackenpfleger": [3, 5], // Ass cheek caretaker
  "Aasgeier": [3, 5], // Carrion vulture (greedy person)
  "Bauernlümmel": [3, 5], // Peasant lout
  "Bettler": [3, 5], // Beggar (derog.)
  "Blindschleiche": [3, 5], // Slow worm (blind person insult)
  "Ekelpaket": [3, 5], // Disgust package
  "Ekelhafte Ratte": [3, 5], // Disgusting rat
  "Fressmaschine": [3, 5], // Eating machine (glutton)
  "Grinsebacke": [3, 5], // Grinning cheek (annoying smiler)
  "Großkotzbrocken": [3, 5], // Big vomit chunk
  "Hundsfott": [5, 5], // Dog cunt (archaic insult)
  "Hundsfötter": [5, 5], // Dog cunter (archaic)
  "Jammertasche": [3, 5], // Whining bag
  "Jammersack": [3, 5], // Whining sack
  "Kackbonze": [1, 4], // Shit fat cat
  "Kinderficker": [5, 5], // Child fucker (pedophile)
  "Klofrau": [3, 5], // Toilet lady (derog.)
  "Koksnutte": [5, 5], // Coke whore
  "Kotzbratze": [3, 5], // Vomit brat
  "Kröte": [1, 4], // Toad (ugly person)
  "Lachaffe": [3, 5], // Laughing monkey
  "Leichenfledderer": [3, 5], // Corpse looter
  "Lümmeltüte": [3, 5], // Lout bag (condom)
  "Madenschlecker": [3, 5], // Maggot licker
  "Matschbirne": [1, 4], // Mud pear (stupid)
  "Maulhure": [4, 5], // Mouth whore (blowjob giver)
  "Memme": [1, 4], // Coward / sissy
  "Milchbubi": [3, 5], // Milk boy (mama's boy)
  "Muttersöhnchen": [3, 5], // Mama's boy
  "Papasöhnchen": [3, 5], // Daddy's boy
  "Pferdeschlampe": [3, 5], // Horse slut
  "Pisswurst": [3, 5], // Piss sausage
  "Popelfresser": [3, 5], // Booger eater
  "Riesenspast": [3, 5], // Giant spaz
  "Rotzgöre": [3, 5], // Snot brat (f.)
  "Rotzjunge": [3, 5], // Snot boy
  "Samenräuber": [3, 5], // Sperm robber
  "Saubarsch": [3, 5], // Pig buttocks
  "Saufgelage": [3, 5], // Drinking binge
  "Scharfmacher": [3, 5], // Agitator / arouser
  "Schleimbeutel": [3, 5], // Slime bag (sycophant)
  "Schleimscheißer": [3, 5], // Slime shitter (sycophant)
  "Schluckspecht": [1, 3], // Swallow woodpecker (drunkard)
  "Schnapsleiche": [1, 3], // Booze corpse (passed out drunk)
  "Schnapsidee": [1, 4], // Booze idea (stupid idea)
  "Schnapsnase": [3, 5], // Booze nose
  "Schnapsdrossel": [1, 3], // Booze thrush (drunkard)
  "Schwachsinn": [3, 5], // Imbecility / nonsense
  "Schwachsinniger": [3, 5], // Imbecile
  "Sittenstrolch": [3, 5], // Morals vagrant (sex offender)
  "Teufelsbrut": [3, 5], // Devil's brood
  "Totgeburt": [3, 5], // Stillbirth (insult)
  "Versagerin": [3, 5], // Failure (f.)
  "Waschweiber": [3, 5], // Washerwomen (gossipers)
  "Weiberheld": [3, 5], // Womanizer
  "Widerlingin": [3, 5], // Repulsive person (f.)
  "Würstchen": [3, 5], // Little sausage (wimp)
  "Zickenalarm": [3, 5], // Bitch alarm
  "Zirkusaffe": [3, 5], // Circus monkey

  // ========================================
  // === Additional Evasion Patterns =======
  // ========================================
  "Scheysse": [3, 5], // Scheiße phonetic misspelling
  "Sheisse": [3, 5], // Scheiße English-style
  "Fiken": [3, 5], // Ficken misspelling
  "Fikken": [3, 5], // Ficken misspelling
  "Figgn": [3, 5], // Ficken dialect shortening
  "Arsh": [3, 5], // Arsch misspelling
  "Arshloch": [3, 5], // Arschloch misspelling
  "Scwanz": [3, 5], // Schwanz misspelling
  "Schwantz": [3, 5], // Schwanz misspelling
  "Vigeln": [3, 5], // Vögeln misspelling
  "Voegeln": [3, 5], // Vögeln without umlaut
  "Huhrensohn": [5, 5], // Hurensohn misspelling
  "Huuhrensohn": [5, 5], // Hurensohn elongated
  "Wixxxer": [3, 5], // Wichser extended x
  "Wixer": [3, 5], // Wichser simplified
  "Wixxa": [3, 5], // Wichser slang
  "Klappe halten": [3, 5], // Hold your flap
  "Halts Maul": [3, 5], // Shut your trap
  "Klappe zu": [3, 5], // Flap shut

  // ========================================
  // === More Compound Phrases =============
  // ========================================
  "Lutsch mich": [3, 5], // Suck me
  "Geh scheißen": [3, 5], // Go shit
  "Geh kacken": [3, 5], // Go take a shit
  "Hau rein": [3, 5], // Hit in (piss off)
  "Werd nicht frech": [3, 5], // Don't get cheeky
  "Halt die Klappe": [3, 5], // Shut the flap
  "Verzieh dich Wichser": [3, 5], // Beat it wanker
  "Du Spacko": [3, 5], // You weirdo
  "Du Arschloch": [3, 5], // You asshole
  "Du Fotze": [5, 5], // You cunt
  "Du fette Sau": [1, 4], // You fat sow
  "Du kleiner Wichser": [3, 5], // You little wanker
  "Ich fick dich": [3, 5], // I fuck you
  "Ich fick deine Mutter": [3, 5], // I fuck your mother
  "Ich fick deine Schwester": [3, 5], // I fuck your sister
  "Ich piss dir ins Gesicht": [3, 5], // I piss in your face
  "Ich schlag dir die Fresse ein": [3, 5], // I'll bash your face in
  "Ich mach dich fertig": [3, 5], // I'll finish you
  "Ich mach dich platt": [3, 5], // I'll flatten you
  "Deine Mudder": [3, 5], // Your mother (slang)
  "Deine Alte": [3, 5], // Your old lady (derog.)
  "Dein Vater": [1, 4], // Your father (insult)

  // ========================================
  // === More Regional Terms ===============
  // ========================================
  "Schlaffi": [3, 4], // Sleepy (wimp)
  "Pimpf": [5, 5], // Little fellow (Hitler Youth term)
  "Rowdy": [3, 4], // Rowdy
  "Rüpel": [3, 4], // Ruffian
  "Rabauke": [3, 4], // Ruffian
  "Rotzpippe": [3, 4], // Snot pipe
  "Duftmarke": [2, 3], // Scent mark (fart euphemism)
  "Pups": [3, 4], // Toot (fart)
  "Pupsi": [3, 4], // Little toot
  "Schißer": [3, 5], // Shitter (old spelling)
  "Dreckiger Hund": [3, 4], // Dirty dog
  "Dreckiger Bastard": [3, 4], // Dirty bastard
  "Elender Bastard": [3, 4], // Miserable bastard
  "Elende Ratte": [3, 4], // Miserable rat
  "Elende Kakerlake": [4, 4], // Miserable cockroach
  "Erbärmlicher Wurm": [3, 4], // Pathetic worm
  "Erbärmliche Kreatur": [3, 4], // Pathetic creature
  "Jämmerlicher Wicht": [3, 4], // Pathetic wretch
  "Armselig": [3, 4], // Pitiful
  "Armseliger Tropf": [3, 4], // Pitiful drip
  "Erbärmlicher Versager": [3, 4], // Pathetic failure
  "Kläglicher Haufen": [3, 4], // Pitiful pile
  "Lächerliche Figur": [3, 4], // Ridiculous figure
  "Jämmerliche Gestalt": [3, 4], // Pathetic figure
  "Miese Ratte": [3, 4], // Mean rat
  "Mieser Typ": [3, 4], // Mean dude
  "Miese Type": [3, 4], // Mean type
  "Mieses Schwein": [3, 4], // Mean pig
  "Miese Sau": [3, 4], // Mean sow
  "Mieses Stück": [3, 4], // Mean piece
  "Abgefuckter Typ": [3, 5], // Fucked up dude
  "Abgefucktes Arschloch": [3, 5], // Fucked up asshole
  "Asoziales Stück Scheiße": [3, 5], // Anti-social piece of shit
  "Beschissener Wichser": [3, 5], // Shitty wanker
  "Verdammter Idiot": [1, 4], // Damn idiot
  "Verdammter Wichser": [3, 4], // Damn wanker
  "Verdammtes Arschloch": [3, 4], // Damn asshole
  "Gottverdammt": [3, 4], // Goddamn
  "Gottverdammter Idiot": [1, 4], // Goddamn idiot
  "Gottverdammte Scheiße": [3, 5], // Goddamn shit
  "Himmelarschundzwirn": [3, 4], // Heaven ass and thread (expletive)
  "Herrgottnochmal": [3, 4], // Lord God again (expletive)
  "Kreuzundquer": [1, 4], // Crossways (mild expletive)
  "Potzblitz": [1, 4], // Gadzooks (archaic mild)
  "Sapperlot": [1, 4], // By thunder (archaic mild)
  "Heiliger Strohsack": [3, 4], // Holy straw sack
  "Heilige Scheiße": [3, 5], // Holy shit
  "Was zum Teufel": [3, 4], // What the devil
  "Was zum Fick": [3, 5], // What the fuck
  "Zur Hölle": [3, 4], // To hell
  "Höllenbrut": [3, 4], // Hell brood
  "Höllenhund": [3, 4], // Hellhound
  "Teufelskerl": [3, 4], // Devil's fellow
  "Satansbratze": [3, 4], // Satan's brat
  "Luzifers Sohn": [3, 4], // Lucifer's son
  "Dämonsbrut": [3, 4], // Demon's brood

  // ========================================
  // === Youth/Street Slang ================
  // ========================================
  "Chabo": [3, 4], // Dude (street slang)
  "Habibi fick dich": [3, 5], // Habibi fuck you (street)
  "Wallah Hurensohn": [5, 5], // I swear son of a whore
  "Yallah verpiss dich": [3, 4], // Hurry up piss off
  "Azzlack": [3, 4], // Tough guy (street)
  "Brudi": [3, 4], // Bro
  "Kanackis": [3, 4], // Foreigners (street slur)
  "Ehrenmann nicht": [3, 4], // Not an honorable man
  "Absoluter Müll": [3, 4], // Absolute garbage
  "Übermensch": [5, 5], // Superhuman (Nazi term, sarcastic)
  "Vaterlandsverräter": [1, 4], // Traitor of the fatherland
  "Nestbeschmutzer": [3, 4], // Nest dirtier (traitor)
  "Jammertante": [3, 4], // Whining aunt
  "Jammerossi": [3, 4], // Whining East German
  "Kevin": [1, 4], // Kevin (stereotype for stupid person)
  "Chantal": [3, 4], // Chantal (stereotype for trashy woman)
  "Jacqueline": [3, 4], // Jacqueline (stereotype trashy)
  "Tussie": [3, 4], // Bimbo variant
  "Tusse": [3, 4], // Bimbo variant
  "Schnalle": [3, 4], // Buckle / easy girl
  "Braut": [3, 4], // Bride / chick (derog.)
  "Alte": [3, 4], // Old one / girlfriend (derog.)
  "Olle": [3, 4], // Old one (derog.)
  "Perle": [3, 4], // Pearl / girlfriend (can be derog.)
  "Fuck": [3, 5], // Fuck (used in German)
  "Shit": [3, 5], // Shit (used in German)
  "Asshole": [3, 5], // Asshole (used in German)
  "Wanker": [3, 4], // Wanker (used in German)
  "Loser": [1, 4], // Loser (used in German)
  "Sucker": [3, 4], // Sucker (used in German)
  "Creep": [3, 4], // Creep (used in German)
  "Psycho": [5, 4], // Psycho (used in German)
  "Freak": [3, 4], // Freak (used in German)
  "Geek": [3, 4], // Geek (derog. usage)
  "Nerd": [3, 4], // Nerd (derog. usage)
  "Otaku": [3, 4], // Otaku (derog.)
  "Weeb": [3, 4], // Weeaboo (derog.)
  "Simp": [2, 3], // Simp (derog.)
  "Cuck": [2, 3], // Cuck (derog.)
  "Incel": [2, 3], // Incel (derog.)
  "Karen": [4, 4], // Karen (entitled woman)
  "Boomer": [3, 4], // Boomer (derog.)
  "Sus": [3, 4], // Suspicious (gaming)

  // ========================================
  // === Religious Expletives ==============
  // ========================================
  "Herrgottsakrament": [2, 3], // Lord God Sacrament
  "Herrgottzack": [2, 3], // Lord God damn
  "Kreuzsakrament": [2, 3], // Cross Sacrament
  "Sakrament nochmal": [2, 3], // Sacrament again
  "Kruzifix nochmal": [2, 3], // Crucifix again
  "Himmel Arsch und Wolkenbruch": [3, 3], // Heaven ass and cloudburst
  "Himmelherrgottsdonnerwetter": [2, 3], // Heaven Lord God thunderstorm
  "Jessas Maria und Josef": [2, 3], // Jesus Mary and Joseph (Bavarian)
  "Herrschaftszeiten": [1, 3], // Lord's times (mild)
  "Menschenskind": [1, 3], // Human's child (mild)
  "Menschenskinder": [1, 3], // Humans' children (mild)

  // ========================================
  // === Threats & Violent Language =========
  // ========================================
  "Ich stech dich ab": [5, 5], // I'll stab you
  "Ich mach dich kalt": [5, 5], // I'll make you cold (kill)
  "Ich bring dich um": [5, 5], // I'll kill you
  "Ich box dir eine": [5, 5], // I'll punch you
  "Ich hau dir eine rein": [5, 5], // I'll smack you one
  "Ich tret dir in die Eier": [5, 5], // I'll kick you in the balls
  "Ich reiß dir den Kopf ab": [5, 5], // I'll rip your head off
  "Ich brech dir die Knochen": [5, 5], // I'll break your bones
  "Fresse polieren": [5, 5], // Polish face (punch)
  "Fresse einhauen": [5, 5], // Bash face
  "Fresse zertrümmern": [5, 5], // Smash face
  "Auf die Fresse kriegen": [5, 5], // Get it in the face
  "Aufs Maul kriegen": [5, 5], // Get it on the mouth
  "Maul zerreißen": [5, 5], // Tear mouth
  "Nase brechen": [5, 5], // Break nose
  "Zähne einschlagen": [5, 5], // Knock teeth in
  "Abstechen": [5, 5], // To stab
  "Abknallen": [5, 5], // To shoot down
  "Abmurksen": [5, 5], // To bump off
  "Kaltmachen": [5, 5], // To make cold (kill)
  "Umlegen": [5, 5], // To bump off
  "Plattmachen": [5, 5], // To flatten
  "Zusammenschlagen": [5, 5], // To beat up
  "Krankenhausreif schlagen": [5, 5], // Beat hospital-ready
  "Windeln wechseln": [5, 5], // Change diapers (threat to beat)

  // ========================================
  // === Additional Misc Profanity =========
  // ========================================
  "Aasfresser": [3, 4], // Carrion eater
  "Ausgeburt": [3, 4], // Spawn (negative)
  "Ausgeburt der Hölle": [3, 4], // Spawn of hell
  "Billigheimer": [3, 4], // Cheapskate
  "Blag": [3, 4], // Brat
  "Blage": [3, 4], // Brat (variant)
  "Bruchpilot": [3, 4], // Crash pilot (failure)
  "Dödel": [4, 4], // Dimwit / penis
  "Dödelkopf": [3, 4], // Dimwit head
  "Drecksling": [3, 4], // Dirty person
  "Drecksvogel": [3, 4], // Dirty bird
  "Dreckwühler": [3, 4], // Dirt digger (muckraker)
  "Ekelbrocken": [3, 4], // Disgust chunk
  "Ekelfresse": [3, 4], // Disgust face
  "Ferkelei": [3, 4], // Piggery (dirty behavior)
  "Flachwitz": [3, 4], // Flat joke (bad humor person)
  "Fledermaus": [1, 3], // Bat (ugly person, slang)
  "Galgenstrick": [3, 4], // Gallows rope (scoundrel)
  "Galgenvogel": [3, 4], // Gallows bird
  "Gaunerin": [3, 4], // Swindler (f.)
  "Geier": [3, 4], // Vulture
  "Gelichter": [3, 4], // Riffraff
  "Gossenjunge": [3, 4], // Gutter boy
  "Gossenmädchen": [3, 4], // Gutter girl
  "Grabräuber": [3, 4], // Grave robber
  "Heini": [1, 4], // Heini (insult for fool)
  "Horst": [1, 4], // Horst (stereotype for fool)
  "Hundedreck": [3, 4], // Dog dirt
  "Hundefresse": [3, 4], // Dog face
  "Irrenhäusler": [3, 4], // Asylum inmate
  "Jammerbock": [3, 4], // Whining buck
  "Jungfrau": [3, 4], // Virgin (derog. usage)
  "Kannibale": [3, 4], // Cannibal
  "Kindskopf": [3, 4], // Child's head (immature person)
  "Klotzkopf": [3, 4], // Block head
  "Knacker": [3, 4], // Old geezer
  "Knacki": [3, 4], // Con (criminal)
  "Knilch": [3, 4], // Fellow (derog.)
  "Knödel": [1, 4], // Dumpling (stupid)
  "Kopfnuss": [3, 4], // Head nut (headbutt)
  "Krethi und Plethi": [4, 4], // Tom Dick and Harry (riffraff)
  "Küchenschabe": [4, 4], // Cockroach
  "Langweilige Socke": [3, 4], // Boring sock
  "Lausebengel": [3, 4], // Louse boy
  "Lump": [3, 4], // Scoundrel
  "Lumpenpack": [3, 4], // Scoundrel pack
  "Mistfliege": [3, 5], // Shit fly
  "Pestkranker": [3, 4], // Plague sufferer (insult)
  "Pestbeule": [3, 4], // Plague boil
  "Rabenvieh": [3, 4], // Raven cattle (bad person)
  "Rabenvater": [1, 4], // Raven father (bad father)
  "Rabenmutter": [3, 4], // Raven mother (bad mother)
  "Racker": [3, 4], // Rascal
  "Randale": [3, 4], // Riot/ruckus
  "Randalierer": [3, 4], // Rioter
  "Räuber": [3, 4], // Robber
  "Räuberbande": [3, 4], // Robber gang
  "Saubande": [3, 4], // Pig gang
  "Schmutzfinke": [3, 4], // Dirt finch (f.)
  "Schufterei": [3, 4], // Drudgery
  "Schurkenbande": [3, 4], // Villain gang
  "Schweinebacke": [3, 4], // Pig cheek
  "Schweinigel": [3, 4], // Pig hedgehog (dirty person)
  "Speikübel": [3, 4], // Vomit bucket
  "Subjekt": [3, 4], // Subject (derog. for person)
  "Tagedieb": [3, 4], // Day thief (lazybones)
  "Vieh": [3, 4], // Beast
  "Viehzeug": [3, 4], // Beast stuff
  "Vogelschiss": [3, 5], // Bird shit
  "Waschweib": [3, 4], // Washwoman (gossiper)
  "Wüstling": [3, 4], // Debauchee
  "Zuhälter": [3, 4], // Pimp
  "Zuhälterin": [3, 4], // Pimp (f.)

  // === Extended German Words ===
  "analritter": [4, 5], // Anal rider (derogatory slur for gay man)
  "bratze": [3, 4], // Ugly brat / ugly woman (insult)
  "ische": [2, 3], // Girlfriend / chick (slang, mildly objectifying)
  "kimme": [3, 4], // Butt crack (vulgar)
  "MILF": [3, 4], // Mother I'd Like to Fuck (sexual objectification)
  "möpse": [3, 4], // Tits (slang, lit. pugs)
  "mufti": [2, 4], // Can be used as ethnic/religious slur
  "nackt": [1, 3], // Naked (mild, but contextually offensive)
  "nigger": [5, 5], // Racial slur (English loanword used in German contexts)
  "popel": [1, 3], // Booger (mild insult)
  "reudig": [3, 4], // Mangy / scabby (insult)
  "scheisser": [3, 4], // Shitter (variant spelling)
  "schiesser": [3, 4], // Shitter (Austrian variant spelling)
  "schnackeln": [4, 5], // To fuck (Austrian/Bavarian slang)
};
const germanBadWords: Record<string, { s: number; c: number }> = {};
for (const [k, [s, c]] of Object.entries(_d)) {
    germanBadWords[k] = { s, c };
}
export default germanBadWords;

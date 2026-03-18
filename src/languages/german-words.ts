// src/languages/german-words.ts

/**
 * German profanity words list
 * Contains common profanities, insults, and offensive terms. Includes variations.
 * ⚠️ Warning: This file contains explicit language in German
 */
const germanBadWords: Record<string, { s: number; c: number }> = {
  // ========================================
  // === Core Profanities & Genitalia =====
  // ========================================
  "Scheiße": { s: 4, c: 3 },
  "Scheisse": { s: 3, c: 4 }, // Shit
  "Arschloch": { s: 3, c: 4 }, // Asshole
  "Fotze": { s: 3, c: 4 }, // Cunt (very vulgar)
  "Fick": { s: 4, c: 3 },
  "Ficken": { s: 4, c: 5 }, // Fuck (noun / verb)
  "Wichser": { s: 3, c: 4 },
  "Wichserin": { s: 4, c: 3 }, // Wanker, jerk (masc./fem.)
  "Hure": { s: 5, c: 4 }, // Whore
  "Schlampe": { s: 4, c: 3 }, // Slut, bitch
  "Mist": { s: 3, c: 4 }, // Manure, crap, damn
  "mist": { s: 1, c: 3 }, // Crap/manure (mild)
  "Verdammt": { s: 4, c: 3 }, // Damn, damned
  "Arsch": { s: 4, c: 3 }, // Ass
  "Schwanz": { s: 4, c: 4 }, // Tail / Dick, cock (vulgar)
  "Pimmel": { s: 4, c: 4 }, // Dick, cock (childish/vulgar)
  "Muschi": { s: 4, c: 4 }, // Pussy (vulgar)
  "Titten": { s: 4, c: 4 }, // Tits (vulgar)
  "Busen": { s: 4, c: 4 }, // Bosom, breasts (less vulgar than Titten)
  "Eier": { s: 4, c: 4 }, // Eggs / Balls (testicles - vulgar)
  "Sack": { s: 3, c: 4 }, // Sack / Scrotum / Asshole (regional)

  // ========================================
  // === Variations & Related Terms =======
  // ========================================
  // --- Scheiße ---
  "scheißegal": { s: 3, c: 5 }, // Don't give a shit (adj.)
  "scheißkerl": { s: 3, c: 4 }, // Shitty guy, bastard
  "scheißladen": { s: 3, c: 5 }, // Shitty place/shop
  "bescheuert": { s: 1, c: 4 }, // Stupid, daft (related to Scheiße)
  "beschissen": { s: 3, c: 5 }, // Shitty, crappy
  "verscheißern": { s: 3, c: 4 }, // To kid, to pull someone's leg
  "ankacken": { s: 3, c: 5 }, // To shit on / To tell someone off aggressively
  "Kacke": { s: 3, c: 4 }, // Poo, crap (slightly less vulgar than Scheiße)
  "Kackbratze": { s: 3, c: 5 }, // Shitty brat
  // --- Arschloch / Arsch ---
  "Arschgeige": { s: 1, c: 4 }, // Ass violin (absurd insult for idiot/asshole)
  "Arschkriecher": { s: 3, c: 4 }, // Ass-kisser
  "Leck mich am Arsch": { s: 3, c: 4 }, // Kiss my ass (LMAA abbreviation)
  "verarschen": { s: 1, c: 4 }, // To fool, to take the piss out of someone
  "arschlecken": { s: 3, c: 4 }, // Ass-licking
  "arschig": { s: 3, c: 4 }, // Nasty, mean
  "zum Kotzen": { s: 3, c: 4 }, // Makes one puke / Disgusting
  // --- Fotze ---
  "Fotzenlecker": { s: 5, c: 5 }, // Cunt licker (extremely vulgar)
  // --- Ficken / Wichser ---
  "verfickt": { s: 3, c: 5 }, // Fucking (adjective), fucked up
  "Fickfehler": { s: 3, c: 5 }, // Fucking mistake (offspring insult)
  "Fick dich!": { s: 3, c: 5 }, // Fuck you!
  "Wichse": { s: 3, c: 4 }, // Cum, jizz
  "wichsen": { s: 4, c: 4 }, // To wank, masturbate
  "Rumwichsen": { s: 3, c: 4 }, // Wanking around, messing about
  // --- Hure / Schlampe ---
  "Hurensohn": { s: 5, c: 5 }, // Son of a bitch/whore (very offensive)
  "Hurentochter": { s: 5, c: 4 }, // Daughter of a bitch/whore (very offensive)
  "Hurenkind": { s: 5, c: 4 }, // Child of a whore
  "Verhurrt": { s: 3, c: 4 }, // Whorish
  "Schlampig": { s: 3, c: 4 }, // Sloppy, messy (can be unrelated to profanity)
  // --- Mist / Verdammt ---
  "Mistkerl": { s: 3, c: 4 }, // Bastard, scoundrel
  "Miststück": { s: 3, c: 4 }, // Nasty piece of work (often female)
  "Verdammte Scheiße": { s: 3, c: 5 }, // Damn shit!
  "So ein Mist!": { s: 3, c: 5 }, // Such crap! Damn it!
  // --- Schwanz / Pimmel / Muschi / Titten / Eier / Sack ---
  "Schwanzlutscher": { s: 4, c: 4 }, // Cocksucker
  "Pissnelke": { s: 3, c: 4 }, // Prude / Annoying woman (lit. piss carnation)
  "Muschilecker": { s: 4, c: 4 }, // Pussy licker
  "Tittenficker": { s: 4, c: 5 }, // Tit fucker (highly vulgar)
  "Sackgesicht": { s: 4, c: 4 }, // Scrotum face (insult)
  "Sackratte": { s: 4, c: 4 }, // Scrotum rat (absurd insult)
  "Geh mir nicht auf den Sack!": { s: 4, c: 5 }, // Don't get on my nerves! (lit. don't step on my scrotum)
  "Weichei": { s: 3, c: 4 }, // Wimp (lit. soft egg)

  // ========================================
  // === Insults (Stupidity, etc.) ========
  // ========================================
  "Idiot": { s: 1, c: 4 },
  "Idiotin": { s: 1, c: 4 }, // Idiot (masc./fem.)
  "Trottel": { s: 1, c: 4 }, // Idiot, fool
  "Depp": { s: 1, c: 4 }, // Idiot, moron (Southern Germany/Austria)
  "Vollidiot": { s: 1, c: 4 }, // Complete idiot
  "Vollpfosten": { s: 1, c: 4 }, // Complete idiot (lit. full post)
  "Dummkopf": { s: 1, c: 4 }, // Dumb head, stupid person
  "Blödmann": { s: 1, c: 4 }, // Stupid man, fool
  "Blödian": { s: 1, c: 4 }, // Fool
  "dumm": { s: 1, c: 4 }, // Dumb, stupid
  "blöd": { s: 1, c: 4 },
  "blöde": { s: 1, c: 4 }, // Stupid, silly
  "doof": { s: 1, c: 4 }, // Stupid, dumb (colloquial)
  "bekloppt": { s: 1, c: 4 }, // Crazy, nuts
  "hirnlos": { s: 1, c: 4 }, // Brainless
  "Schwachkopf": { s: 1, c: 4 }, // Weak head, simpleton
  "Schwachmat": { s: 1, c: 4 }, // Simpleton, weakling
  "Narr": { s: 1, c: 4 },
  "Närrin": { s: 1, c: 4 }, // Fool (masc./fem.)
  "Pfeife": { s: 1, c: 4 }, // Pipe / Idiot, loser
  "Versager": { s: 1, c: 4 }, // Failure, loser
  "Lappen": { s: 1, c: 4 }, // Cloth / Wimp
  "Spasti": { s: 5, c: 4 }, // Spastic (highly offensive disability slur used as general insult)
  "Mongo": { s: 5, c: 4 }, // Mongoloid (highly offensive disability slur used as general insult)
  "behindert": { s: 1, c: 4 }, // Disabled / Retarded (used as insult, very offensive)
  "Missgeburt": { s: 1, c: 4 }, // Misbirth, monstrosity (very offensive)

  // ========================================
  // === Offensive Slurs (Sexuality, Race, etc.) ===
  // ========================================
  "Schwuchtel": { s: 5, c: 4 }, // Faggot (very offensive)
  "Schwuler": { s: 5, c: 4 }, // Gay man (can be neutral, but often used offensively)
  "Lesbe": { s: 5, c: 4 }, // Lesbian (can be neutral, but often used offensively)
  "Kampflesbe": { s: 5, c: 4 }, // Butch lesbian (offensive)
  "Transe": { s: 5, c: 4 }, // Tranny (offensive)
  "Neger": { s: 5, c: 5 }, // Negro (extremely offensive racial slur)
  "Kanake": { s: 5, c: 4 }, // Very offensive slur, originally for Turks, now often for Southern Europeans, Middle Easterners
  "Itaker": { s: 5, c: 4 }, // Offensive slur for Italians
  "Polacke": { s: 5, c: 4 }, // Offensive slur for Polish people
  "Russe": { s: 5, c: 4 }, // Russian (can be used neutrally or derogatorily)
  "Ami": { s: 5, c: 4 }, // Yank, American (often derogatory)
  "Ösi": { s: 5, c: 4 }, // Derogatory for Austrian
  "Saupreiß": { s: 5, c: 4 }, // Derogatory Bavarian term for Prussians/North Germans
  "Kümmeltürke": { s: 5, c: 4 }, // Offensive term for Turkish people
  "Schlitzauge": { s: 5, c: 4 }, // Slit-eye (offensive for East Asians)

  // ========================================
  // === Other Offensive Terms & Insults ==
  // ========================================
  "Bastard": { s: 3, c: 4 }, // Bastard
  "Sau": { s: 1, c: 4 }, // Sow (female pig) / Bitch, messy person
  "Drecksau": { s: 3, c: 4 }, // Filthy pig / Dirty bastard
  "Schwein": { s: 1, c: 4 }, // Pig / Swine
  "Schweinehund": { s: 3, c: 4 }, // Pig-dog / Bastard (innerer Schweinehund = inner laziness/weakness)
  "Mistvieh": { s: 1, c: 4 }, // Vile creature
  "Aas": { s: 1, c: 4 }, // Carrion / Scumbag
  "Luder": { s: 1, c: 4 }, // Hussy, minx (can be playful or offensive)
  "Göre": { s: 1, c: 4 }, // Brat (female child)
  "Bengel": { s: 1, c: 4 }, // Rascal (male child)
  "Frechdachs": { s: 1, c: 4 }, // Cheeky badger (impudent person)
  "Heuchler": { s: 1, c: 4 }, // Hypocrite
  "Lügner": { s: 1, c: 4 }, // Liar
  "Betrüger": { s: 1, c: 4 }, // Cheat, fraudster
  "Penner": { s: 1, c: 4 }, // Bum, tramp
  "Gesindel": { s: 1, c: 4 }, // Riff-raff, mob
  "Pack": { s: 3, c: 4 }, // Rabble, scum
  "Abschaum": { s: 1, c: 4 }, // Scum
  "Ungeziefer": { s: 1, c: 4 }, // Vermin
  "Parasit": { s: 1, c: 4 }, // Parasite
  "Widerlich": { s: 1, c: 4 }, // Disgusting, repulsive
  "Ekelhaft": { s: 1, c: 4 }, // Disgusting
  "Kotzbrocken": { s: 1, c: 4 }, // Person who makes you want to puke, repulsive person
  "Speichellecker": { s: 1, c: 4 }, // Sycophant (lit. spit-licker)
  "Warmduscher": { s: 1, c: 4 }, // Wimp (lit. warm-showerer)
  "Schattenparker": { s: 1, c: 4 }, // Wimp (lit. shadow-parker)
  "Zicke": { s: 1, c: 4 }, // Goat / Bitchy woman
  "mies": { s: 1, c: 4 }, // Lousy, mean
  "gemein": { s: 1, c: 4 }, // Mean, nasty
  "hässlich": { s: 1, c: 4 }, // Ugly

  // ========================================
  // === Bodily Functions (Vulgar Context) ==
  // ========================================
  "pissen": { s: 3, c: 4 }, // To piss (vulgar)
  "pinkeln": { s: 3, c: 4 }, // To pee (more common, less vulgar)
  "scheißen": { s: 3, c: 5 }, // To shit (vulgar)
  "kacken": { s: 3, c: 4 }, // To poo (less vulgar)
  "kotzen": { s: 3, c: 4 }, // To vomit, puke (common, vulgar)
  "furzen": { s: 3, c: 4 }, // To fart
  "pupsen": { s: 3, c: 4 }, // To poot (less vulgar)
  "Rotz": { s: 3, c: 4 }, // Snot
  "Spucke": { s: 3, c: 4 }, // Spit
  "Sperma": { s: 3, c: 4 }, // Sperm
  "Sabber": { s: 3, c: 4 }, // Drool

  // ========================================
  // === Mild / Contextually Offensive ====
  // ========================================
  "Verflixt": { s: 1, c: 4 }, // Darn it! (mild version of verflucht/verdammt)
  "Donnerwetter": { s: 3, c: 4 }, // Good heavens! Wow! (lit. thunderstorm)
  "Himmel": { s: 3, c: 4 }, // Heaven / Gosh!
  "Teufel": { s: 3, c: 4 }, // Devil
  "zum Teufel": { s: 3, c: 4 }, // To hell with it / What the hell
  "Quatsch": { s: 3, c: 4 }, // Nonsense, rubbish
  "Blödsinn": { s: 1, c: 4 }, // Nonsense, foolishness
  "Hau ab!": { s: 3, c: 5 }, // Get lost! Buzz off!
  "Verschwinde!": { s: 3, c: 5 }, // Disappear! Get lost!
  "Halt die Klappe!": { s: 3, c: 5 }, // Shut up! (lit. hold the trap)
  "Halt's Maul!": { s: 3, c: 5 }, // Shut your mouth! (more vulgar)
  "Schnauze!": { s: 3, c: 5 }, // Snout / Shut up! (vulgar)
  "Fickfresse": { s: 3, c: 5 }, // Fuckface
  "Hackfresse": { s: 1, c: 4 }, // Ugly face (very offensive)
  "Dreckschwein": { s: 3, c: 4 }, // Dirty pig
  "Drecksfotze": { s: 5, c: 5 }, // Dirty cunt
  "Arschficker": { s: 3, c: 5 }, // Assfucker
  "Arschfotze": { s: 5, c: 5 }, // Ass-cunt
  "Vollarsch": { s: 3, c: 4 }, // Complete ass
  "Scheißdreck": { s: 3, c: 5 }, // Shit-dirt
  "Hurenbock": { s: 5, c: 4 }, // Whoremonger
  "Dreckskerl": { s: 3, c: 4 }, // Dirty bastard
  "Wichskopf": { s: 3, c: 4 }, // Wankhead

  // Additional German profanity
  "Arschbacke": { s: 3, c: 4 }, // Ass cheek
  "Arschlecker": { s: 3, c: 4 }, // Ass licker
  "Drecksack": { s: 3, c: 4 }, // Dirty bag / scumbag
  "Dreckstück": { s: 3, c: 4 }, // Dirty piece (insult)
  "Dumme Kuh": { s: 1, c: 4 }, // Stupid cow
  "Fettsack": { s: 1, c: 4 }, // Fat sack
  "Fickschnitzel": { s: 3, c: 5 }, // Fucking schnitzel (absurd compound)
  "Flachwichser": { s: 1, c: 4 }, // Flat wanker (loser)
  "Giftzwerg": { s: 3, c: 4 }, // Poison dwarf (nasty small person)
  "Hodengesicht": { s: 4, c: 4 }, // Testicle face
  "Hurenbengel": { s: 5, c: 4 }, // Whore's brat
  "Kackvogel": { s: 3, c: 5 }, // Shit bird
  "Leck mich": { s: 3, c: 4 }, // Lick me (abbreviated LMAA)
  "LMAA": { s: 3, c: 4 }, // Abbreviation: Leck mich am Arsch
  "Mutterficker": { s: 5, c: 5 }, // Motherfucker
  "Pisser": { s: 3, c: 4 }, // Pisser
  "Pissgesicht": { s: 3, c: 4 }, // Piss face
  "Saftsack": { s: 1, c: 4 }, // Juice sack (idiot)
  "Scheißhaus": { s: 3, c: 5 }, // Shithouse
  "Schlappschwanz": { s: 4, c: 4 }, // Limp dick
  "Spacken": { s: 1, c: 4 }, // Idiot (Northern German)
  "Trottelbacke": { s: 1, c: 4 }, // Fool face
  "Vollhorst": { s: 1, c: 4 }, // Complete idiot
  "Wichsgriffel": { s: 3, c: 4 }, // Wank handle (hand, insult)
  "Ziegenficker": { s: 3, c: 5 }, // Goat fucker
  "Oaschloch": { s: 3, c: 4 }, // Asshole (Austrian)
  "Gscherti": { s: 1, c: 4 }, // Idiot (Austrian)
  "Trottl": { s: 1, c: 4 }, // Idiot (Austrian)
  "Huankind": { s: 5, c: 4 }, // Whore child (Austrian)
  "Gopfertami": { s: 3, c: 4 }, // God damn (Swiss German)
  "Siech": { s: 3, c: 4 }, // Plague/bastard (Swiss German)
  "Sauhuund": { s: 3, c: 4 }, // Pig dog (Swiss German)
  "Arschgeburt": { s: 3, c: 4 }, // Ass birth
  "Kackwurst": { s: 3, c: 5 }, // Shit sausage

  // ========================================
  // === Compound Insults ==================
  // ========================================
  "Affengesicht": { s: 1, c: 4 }, // Monkey face
  "Bananenbieger": { s: 1, c: 4 }, // Banana bender (idiot)
  "Dummschwätzer": { s: 1, c: 4 }, // Dumb talker
  "Evolutionsbremse": { s: 1, c: 4 }, // Evolution brake (so dumb they slow evolution)
  "Gesichtsgrätsche": { s: 1, c: 4 }, // Face tackle (ugly face)
  "Brechmittel": { s: 1, c: 4 }, // Emetic (nauseating person)
  "Dumpfbacke": { s: 1, c: 4 }, // Dense cheek (dull person)
  "Knalltüte": { s: 1, c: 4 }, // Bang bag (idiot)
  "Saftladen": { s: 1, c: 4 }, // Juice shop (badly run place)
  "Schandmaul": { s: 1, c: 4 }, // Shame mouth (loudmouth)
  "Trantüte": { s: 1, c: 4 }, // Slow bag (slow person)
  "Blindgänger": { s: 1, c: 4 }, // Dud (useless person)
  "Dünnbrettbohrer": { s: 1, c: 4 }, // Thin board driller (person who takes shortcuts)
  "Flachzange": { s: 1, c: 4 }, // Flat pliers (boring/dumb person)
  "Gehirnverweigerer": { s: 1, c: 4 }, // Brain refuser
  "Intelligenzverweigerer": { s: 1, c: 4 }, // Intelligence refuser
  "Lötkolben": { s: 1, c: 4 }, // Soldering iron (idiot)
  "Luftpumpe": { s: 1, c: 4 }, // Air pump (windbag/weakling)
  "Nullnummer": { s: 1, c: 4 }, // Zero number (complete failure)
  "Rohrkrepierer": { s: 1, c: 4 }, // Barrel burst (dud/failure)
  "Schmalspurganove": { s: 1, c: 4 }, // Narrow gauge crook
  "Taugenichts": { s: 1, c: 4 }, // Good-for-nothing
  "Trampeltier": { s: 1, c: 4 }, // Bactrian camel (clumsy person)
  "Tranfunzel": { s: 1, c: 4 }, // Oil lamp (slow-witted person)
  "Blödhammel": { s: 1, c: 4 }, // Stupid ram
  "Hornochse": { s: 1, c: 4 }, // Horn ox (stupid person)
  "Zimtzicke": { s: 1, c: 4 }, // Cinnamon goat (bitchy woman)
  "Meckerziege": { s: 1, c: 4 }, // Nagging goat
  "Labertasche": { s: 1, c: 4 }, // Blabber bag (chatterbox)
  "Quatschkopf": { s: 1, c: 4 }, // Nonsense head
  "Heulsuse": { s: 1, c: 4 }, // Cry baby (female)
  "Jammerlappen": { s: 1, c: 4 }, // Whining cloth (crybaby)
  "Hosenscheißer": { s: 1, c: 4 }, // Pants shitter (coward/baby)
  "Angsthaase": { s: 1, c: 4 }, // Scaredy rabbit (coward)
  "Korinthenkacker": { s: 3, c: 5 }, // Currant shitter (nitpicker)
  "Erbsenzähler": { s: 1, c: 4 }, // Pea counter (nitpicker)
  "Sesselfurzer": { s: 1, c: 4 }, // Seat farter (lazy bureaucrat)
  "Paragraphenreiter": { s: 1, c: 4 }, // Paragraph rider (bureaucratic stickler)
  "Schnarchzapfen": { s: 1, c: 4 }, // Snore drip (boring person)
  "Langweiler": { s: 1, c: 4 }, // Bore
  "Nervensäge": { s: 1, c: 4 }, // Nerve saw (annoying person)
  "Plagegeist": { s: 1, c: 4 }, // Plague spirit (pest)
  "Quälgeist": { s: 1, c: 4 }, // Torment spirit (pest)
  "Stinkstiefel": { s: 1, c: 4 }, // Stink boot (grump)
  "Griesgram": { s: 1, c: 4 }, // Grouch
  "Brummbär": { s: 1, c: 4 }, // Grumble bear (grouch)
  "Meckerfritze": { s: 1, c: 4 }, // Nag Fritz (complainer)
  "Nörgler": { s: 1, c: 4 }, // Nagger
  "Klugscheißer": { s: 3, c: 5 }, // Smart shitter (know-it-all)
  "Besserwisser": { s: 1, c: 4 }, // Better knower (know-it-all)
  "Wichtigtuer": { s: 1, c: 4 }, // Important doer (self-important person)
  "Großkotz": { s: 1, c: 4 }, // Big vomit (show-off)
  "Angeber": { s: 1, c: 4 }, // Show-off
  "Prahlhans": { s: 1, c: 4 }, // Boastful Jack (braggart)
  "Aufschneider": { s: 1, c: 4 }, // Cutter (braggart)
  "Blender": { s: 1, c: 4 }, // Dazzler (fraud)
  "Hochstapler": { s: 1, c: 4 }, // Con artist
  "Gauner": { s: 1, c: 4 }, // Crook
  "Halunke": { s: 1, c: 4 }, // Rogue, scoundrel
  "Tunichtgut": { s: 1, c: 4 }, // Do-no-good
  "Schurke": { s: 1, c: 4 }, // Villain
  "Schuft": { s: 1, c: 4 }, // Scoundrel
  "Strolch": { s: 1, c: 4 }, // Tramp, rogue
  "Ganove": { s: 1, c: 4 }, // Crook
  "Schnösel": { s: 1, c: 4 }, // Snob, snotty person
  "Lackaffe": { s: 1, c: 4 }, // Paint ape (vain person)
  "Snob": { s: 1, c: 4 }, // Snob
  "Prolet": { s: 1, c: 4 }, // Prole
  "Proleten": { s: 1, c: 4 }, // Proles (plural)

  // ========================================
  // === Vulgar Compounds ==================
  // ========================================
  "Fotzengesicht": { s: 5, c: 5 }, // Cunt face
  "Schwanzgesicht": { s: 4, c: 5 }, // Dick face
  "Arschgesicht": { s: 3, c: 5 }, // Ass face
  "Pissfotze": { s: 5, c: 5 }, // Piss cunt
  "Dreckschwanz": { s: 4, c: 5 }, // Dirty dick
  "Kackfotze": { s: 5, c: 5 }, // Shit cunt
  "Drecksschlampe": { s: 3, c: 5 }, // Dirty slut
  "Scheißfotze": { s: 5, c: 5 }, // Shit cunt
  "Scheißhure": { s: 5, c: 5 }, // Shit whore
  "Wichsfotze": { s: 5, c: 5 }, // Wank cunt
  "Fickfotze": { s: 5, c: 5 }, // Fuck cunt
  "Hurenfotze": { s: 5, c: 5 }, // Whore cunt
  "Hundesohn": { s: 3, c: 5 }, // Dog son
  "Dreckshure": { s: 5, c: 5 }, // Dirty whore
  "Drecksficker": { s: 3, c: 5 }, // Dirty fucker
  "Scheißwichser": { s: 3, c: 5 }, // Shit wanker
  "Fickgesicht": { s: 3, c: 5 }, // Fuck face
  "Kackgesicht": { s: 3, c: 5 }, // Shit face
  "Arschbackengesicht": { s: 3, c: 5 }, // Ass cheek face
  "Vollwichser": { s: 3, c: 5 }, // Complete wanker
  "Dummsau": { s: 1, c: 4 }, // Dumb sow
  "Stinkfotze": { s: 5, c: 5 }, // Stinking cunt
  "Kackspast": { s: 3, c: 5 }, // Shit spastic (highly offensive)
  "Dreckspenner": { s: 3, c: 5 }, // Dirty bum

  // ========================================
  // === Austrian Dialect ===================
  // ========================================
  "Wappler": { s: 1, c: 4 }, // Idiot (Austrian)
  "Dodl": { s: 1, c: 4 }, // Idiot (Austrian)
  "Koffer": { s: 1, c: 4 }, // Suitcase / Idiot (Austrian)
  "Beidl": { s: 4, c: 4 }, // Dick (Austrian)
  "Gspusi": { s: 3, c: 4 }, // Affair/fling (Austrian)
  "Oarschgesicht": { s: 3, c: 4 }, // Ass face (Austrian dialect)
  "Piefke": { s: 3, c: 4 }, // Derogatory for German (Austrian)
  "Sandler": { s: 3, c: 4 }, // Bum, vagrant (Austrian)
  "Gfrast": { s: 3, c: 4 }, // Brat, pest (Austrian)
  "Krüppel": { s: 3, c: 4 }, // Cripple (Austrian/offensive)
  "Tschusch": { s: 3, c: 4 }, // Derogatory for foreigner (Austrian)
  "Heisl": { s: 1, c: 4 }, // Toilet / Idiot (Austrian)
  "Haberer": { s: 3, c: 4 }, // Buddy / Lover (Austrian)
  "Zniachtl": { s: 3, c: 4 }, // Runt (Austrian)
  "Oaschlecker": { s: 3, c: 4 }, // Ass licker (Austrian)
  "Saubartel": { s: 3, c: 4 }, // Dirty old man (Austrian)
  "Brunzkachel": { s: 3, c: 4 }, // Piss tile / Someone who pisses themselves (Austrian)
  "Gscherter": { s: 1, c: 4 }, // Idiot, buffoon (Austrian)
  "Zipfl": { s: 4, c: 4 }, // Tip / Dick (Austrian)
  "Zipfelklatscher": { s: 4, c: 4 }, // Dick slapper (Austrian insult)
  "Pülcher": { s: 3, c: 4 }, // Rascal, crook (Austrian)
  "Hundskrüppel": { s: 3, c: 4 }, // Dog cripple (Austrian insult)
  "Grindkopf": { s: 3, c: 4 }, // Scab head (Austrian)

  // ========================================
  // === Swiss German Dialect ===============
  // ========================================
  "Cheib": { s: 3, c: 4 }, // Bastard, carcass (Swiss German)
  "Löli": { s: 1, c: 4 }, // Idiot (Swiss German)
  "Tubel": { s: 1, c: 4 }, // Idiot, fool (Swiss German)
  "Sauniggel": { s: 3, c: 4 }, // Dirty pig (Swiss German)
  "Glansen": { s: 1, c: 4 }, // Idiot (Swiss German)
  "Schnudergoof": { s: 3, c: 4 }, // Snotty kid (Swiss German)
  "Soupansen": { s: 3, c: 4 }, // Dirty belly (Swiss German)
  "Souhuere": { s: 3, c: 5 }, // Fucking (Swiss intensifier)
  "Huere": { s: 5, c: 5 }, // Fucking / Whore (Swiss German)
  "Hueresiech": { s: 3, c: 4 }, // Whore bastard (Swiss German)
  "Huerebock": { s: 5, c: 4 }, // Whoremonger (Swiss German)
  "Schisser": { s: 1, c: 4 }, // Coward / Shitter (Swiss German)
  "Chrüppel": { s: 3, c: 4 }, // Cripple (Swiss German)
  "Blöde Chue": { s: 1, c: 4 }, // Stupid cow (Swiss German)
  "Gopferteli": { s: 2, c: 3 }, // God damn (Swiss German, mild)
  "Gopferdammi": { s: 3, c: 4 }, // God damn (Swiss German)
  "Himmelherrgott": { s: 3, c: 4 }, // Heaven lord god (Swiss exclamation)
  "Verfluechti": { s: 3, c: 4 }, // Cursed (Swiss German)
  "Sauhund": { s: 3, c: 4 }, // Pig dog (Swiss/Bavarian)
  "Gigu": { s: 1, c: 4 }, // Idiot (Swiss German, Bern)

  // ========================================
  // === Internet / Youth Slang ============
  // ========================================
  "Ehrenlose": { s: 2, c: 3 }, // Dishonorable (youth slang insult)
  "Ehrenloser": { s: 2, c: 3 }, // Dishonorable man (youth slang)
  "Almansen": { s: 2, c: 3 }, // Derogatory for Germans (youth slang)
  "Alman": { s: 2, c: 3 }, // Derogatory for stereotypical German (youth slang)
  "Opfer": { s: 1, c: 3 }, // Victim / Loser (youth slang)
  "Drecksopfer": { s: 1, c: 4 }, // Dirty victim/loser
  "Kek": { s: 2, c: 3 }, // Loser (internet slang)
  "Spast": { s: 2, c: 3 }, // Spastic (youth slang, offensive)
  "Digga": { s: 2, c: 3 }, // Dude (can be used offensively)
  "Huan": { s: 5, c: 4 }, // Whore (Turkish-German youth slang)
  "Lan": { s: 3, c: 4 }, // Dude (Turkish-German slang, can be offensive)
  "Amk": { s: 3, c: 4 }, // Abbreviation: Amına koyayım (Turkish vulgar, used in German youth slang)
  "Huso": { s: 5, c: 5 }, // Abbreviation: Hurensohn
  "Spastiko": { s: 3, c: 4 }, // Spastic (youth slang, offensive)
  "Bastardkind": { s: 3, c: 4 }, // Bastard child
  "Pissnase": { s: 3, c: 4 }, // Piss nose (annoying person)

  // ========================================
  // === Vulgar Verbs ======================
  // ========================================
  "bumsen": { s: 3, c: 5 }, // To fuck (colloquial)
  "vögeln": { s: 3, c: 5 }, // To fuck (lit. to bird)
  "nageln": { s: 3, c: 5 }, // To nail / To fuck
  "rammeln": { s: 3, c: 5 }, // To mate / To fuck
  "poppen": { s: 3, c: 5 }, // To fuck
  "knattern": { s: 3, c: 5 }, // To rattle / To fuck
  "flachlegen": { s: 3, c: 4 }, // To lay flat / To get someone into bed
  "besteigen": { s: 3, c: 5 }, // To mount / To fuck
  "vernaschen": { s: 3, c: 4 }, // To devour / To have sex with
  "durchnehmen": { s: 3, c: 5 }, // To go through / To fuck hard
  "reinorgeln": { s: 3, c: 5 }, // To organ in / To fuck
  "draufsteigen": { s: 3, c: 5 }, // To climb on / To fuck
  "bimsen": { s: 3, c: 5 }, // To study hard / To fuck
  "pimpern": { s: 3, c: 5 }, // To fuck (colloquial)
  "schnackseln": { s: 3, c: 5 }, // To fuck (Bavarian/Austrian)
  "rammeldansen": { s: 3, c: 5 }, // To mate-dance / To fuck
  "begatten": { s: 3, c: 4 }, // To copulate (formal/crude)
  "beschlafen": { s: 3, c: 4 }, // To sleep with (archaic/crude)
  "besamen": { s: 3, c: 4 }, // To inseminate
  "blasen": { s: 3, c: 4 }, // To blow (sexual)
  "einen blasen": { s: 4, c: 5 }, // To give a blowjob
  "lecken": { s: 3, c: 4 }, // To lick (sexual context)
  "fingern": { s: 3, c: 4 }, // To finger (sexual)
  "einen runterholen": { s: 4, c: 4 }, // To jerk off
  "sich einen runterholen": { s: 3, c: 4 }, // To jerk oneself off
  "abspritzen": { s: 3, c: 4 }, // To ejaculate
  "kommen": { s: 3, c: 4 }, // To come (orgasm)
  "einen reiten": { s: 3, c: 4 }, // To ride one (sexual)
  "entjungfern": { s: 3, c: 4 }, // To deflower

  // ========================================
  // === Sexual / Anatomical Terms =========
  // ========================================
  "Orgasmus": { s: 3, c: 4 }, // Orgasm
  "Masturbation": { s: 4, c: 4 }, // Masturbation
  "Vagina": { s: 4, c: 3 }, // Vagina
  "Klitoris": { s: 3, c: 4 }, // Clitoris
  "Hodensack": { s: 4, c: 4 }, // Scrotum
  "Hoden": { s: 4, c: 4 }, // Testicles
  "Vorhaut": { s: 3, c: 4 }, // Foreskin
  "Eichel": { s: 3, c: 4 }, // Glans
  "Erektion": { s: 3, c: 4 }, // Erection
  "Ständer": { s: 3, c: 4 }, // Boner (lit. stand)
  "Latte": { s: 3, c: 4 }, // Boner (lit. slat)
  "Morgenlatte": { s: 3, c: 4 }, // Morning wood
  "Steifen": { s: 3, c: 4 }, // Boner
  "Analverkehr": { s: 4, c: 4 }, // Anal intercourse
  "Oralverkehr": { s: 4, c: 4 }, // Oral intercourse
  "Blowjob": { s: 4, c: 5 }, // Blowjob
  "Gangbang": { s: 3, c: 5 }, // Gangbang
  "Dreier": { s: 3, c: 4 }, // Threesome
  "Nutte": { s: 5, c: 4 }, // Hooker, prostitute
  "Prostituierte": { s: 5, c: 4 }, // Prostitute
  "Freier": { s: 5, c: 4 }, // John (prostitution client)
  "Stricher": { s: 5, c: 4 }, // Male prostitute
  "Callboy": { s: 3, c: 4 }, // Male escort
  "Callgirl": { s: 3, c: 4 }, // Female escort
  "Domina": { s: 3, c: 4 }, // Dominatrix
  "Dildo": { s: 5, c: 5 }, // Dildo
  "Vibrator": { s: 3, c: 4 }, // Vibrator
  "Geilheit": { s: 3, c: 4 }, // Horniness
  "geil": { s: 3, c: 4 }, // Horny / Awesome (youth slang)
  "notgeil": { s: 3, c: 4 }, // Desperately horny
  "spitz": { s: 3, c: 4 }, // Horny (lit. pointy)
  "rattig": { s: 3, c: 4 }, // Horny (from Ratte - rat)
  "feucht": { s: 3, c: 4 }, // Wet (sexual context)
  "Wollust": { s: 3, c: 4 }, // Lust
  "Lüstling": { s: 3, c: 4 }, // Lecher
  "Lustmolch": { s: 3, c: 4 }, // Lust newt (lecher)
  "Spanner": { s: 3, c: 4 }, // Peeping Tom
  "Voyeur": { s: 3, c: 4 }, // Voyeur
  "Exhibitionist": { s: 4, c: 4 }, // Exhibitionist
  "Fetischist": { s: 3, c: 4 }, // Fetishist
  "Sadomaso": { s: 3, c: 4 }, // Sadomasochism
  "Ficksau": { s: 3, c: 5 }, // Fuck pig (sexually promiscuous person)
  "Betthäschen": { s: 3, c: 4 }, // Bed bunny (sexually available)
  "Flittchen": { s: 3, c: 4 }, // Floozy
  "Schickse": { s: 3, c: 4 }, // Shiksa (derogatory for non-Jewish woman)
  "Dorfmatratze": { s: 3, c: 4 }, // Village mattress (promiscuous woman)
  "Bordsteinschwalbe": { s: 5, c: 4 }, // Curbside swallow (prostitute)
  "Nymphomanin": { s: 3, c: 4 }, // Nymphomaniac

  // ========================================
  // === More Insults ======================
  // ========================================
  "Armleuchter": { s: 2, c: 3 }, // Chandelier / Euphemistic insult (sounds like Arschloch)
  "Hirnamputierter": { s: 1, c: 4 }, // Brain amputee
  "Intelligenzallergiker": { s: 1, c: 4 }, // Intelligence allergic person
  "Pfosten": { s: 1, c: 4 }, // Post / Idiot
  "Spatzenhirn": { s: 1, c: 4 }, // Sparrow brain
  "Hohlkopf": { s: 1, c: 4 }, // Hollow head
  "Hohlbirne": { s: 1, c: 4 }, // Hollow pear (empty head)
  "Birne": { s: 1, c: 4 }, // Pear / Head (derogatory)
  "Holzkopf": { s: 1, c: 4 }, // Woodhead
  "Strohkopf": { s: 1, c: 4 }, // Straw head
  "Betonkopf": { s: 1, c: 4 }, // Concrete head (stubborn idiot)
  "Dickschädel": { s: 1, c: 4 }, // Thick skull
  "Dickkopf": { s: 1, c: 4 }, // Fat head (stubborn)
  "Blödkopf": { s: 1, c: 4 }, // Stupid head
  "Nichtskönner": { s: 1, c: 4 }, // Can-do-nothing
  "Nichtsnutz": { s: 1, c: 4 }, // Good-for-nothing
  "Tollpatsch": { s: 1, c: 4 }, // Clumsy person
  "Trampel": { s: 1, c: 4 }, // Stomper (clumsy person)
  "Einfaltspinsel": { s: 1, c: 4 }, // Simpleton paintbrush
  "Schlafmütze": { s: 1, c: 4 }, // Sleepy cap (lazy/inattentive person)
  "Traumtänzer": { s: 1, c: 4 }, // Dream dancer (unrealistic person)
  "Spinner": { s: 1, c: 4 }, // Crazy person / Weirdo
  "Spinnerin": { s: 1, c: 4 }, // Crazy woman
  "Verrückter": { s: 1, c: 4 }, // Crazy man
  "Verrückte": { s: 1, c: 4 }, // Crazy woman
  "Geisteskranker": { s: 1, c: 4 }, // Mentally ill (offensive)
  "Psychopath": { s: 1, c: 4 }, // Psychopath
  "Irrer": { s: 1, c: 4 }, // Madman
  "Wahnsinniger": { s: 1, c: 4 }, // Insane person
  "Schmarotzer": { s: 1, c: 4 }, // Freeloader, parasite
  "Schnorrer": { s: 1, c: 4 }, // Moocher
  "Geizhals": { s: 1, c: 4 }, // Miser (lit. stingy neck)
  "Geizkragen": { s: 1, c: 4 }, // Tightwad (lit. stingy collar)
  "Pfennigfuchser": { s: 1, c: 4 }, // Penny pincher
  "Knauserer": { s: 1, c: 4 }, // Cheapskate
  "Drückeberger": { s: 1, c: 4 }, // Slacker, shirker
  "Faulpelz": { s: 1, c: 4 }, // Lazybones
  "Faulenzer": { s: 1, c: 4 }, // Slacker
  "Missgestalt": { s: 1, c: 4 }, // Misshapen person (offensive)
  "Zwerg": { s: 1, c: 4 }, // Dwarf (can be offensive)
  "Fettwanst": { s: 1, c: 4 }, // Fat belly
  "Fettkloß": { s: 1, c: 4 }, // Fat dumpling
  "Dickerchen": { s: 1, c: 4 }, // Fatty (diminutive)
  "Bohnenstange": { s: 1, c: 4 }, // Beanpole (too thin)
  "Spargeltarzan": { s: 1, c: 4 }, // Asparagus Tarzan (skinny person)
  "Milchgesicht": { s: 1, c: 4 }, // Milk face (baby face, immature)
  "Rotznase": { s: 1, c: 4 }, // Snot nose (brat)
  "Dreckspatz": { s: 1, c: 4 }, // Dirty sparrow (messy child)
  "Lausbub": { s: 1, c: 4 }, // Rascal
  "Rotzlöffel": { s: 1, c: 4 }, // Snot spoon (brat)
  "Satansbraten": { s: 1, c: 4 }, // Satan's roast (devil child)
  "Balg": { s: 1, c: 4 }, // Brat
  "Bankert": { s: 3, c: 4 }, // Bastard child (archaic)
  "Wechselbalg": { s: 1, c: 4 }, // Changeling (unwanted child)
  "Hinterwäldler": { s: 1, c: 4 }, // Backwoodsman
  "Bauerntrampel": { s: 1, c: 4 }, // Farm stomper (unsophisticated)
  "Landei": { s: 1, c: 4 }, // Country egg (hick)
  "Dorftrottel": { s: 1, c: 4 }, // Village idiot
  "Stadtaffe": { s: 1, c: 4 }, // City ape
  "Saubär": { s: 1, c: 4 }, // Dirty bear
  "Drecksvieh": { s: 1, c: 4 }, // Dirty beast
  "Mistfink": { s: 1, c: 4 }, // Manure finch (dirty person)
  "Stinktier": { s: 1, c: 4 }, // Skunk
  "Dreckfink": { s: 1, c: 4 }, // Dirt finch (messy person)
  "Schmutzfink": { s: 1, c: 4 }, // Dirty finch (messy person)
  "Ferkel": { s: 1, c: 4 }, // Piglet (dirty/naughty person)
  "Schweinepriester": { s: 1, c: 4 }, // Pig priest (expletive)
  "Saukerl": { s: 1, c: 4 }, // Dirty fellow
  "Saumensch": { s: 1, c: 4 }, // Dirty person (Bavarian)

  // ========================================
  // === Scheiß- Compounds =================
  // ========================================
  "Scheißwetter": { s: 3, c: 5 }, // Shitty weather
  "Scheißtag": { s: 3, c: 5 }, // Shitty day
  "Scheißtyp": { s: 3, c: 5 }, // Shitty guy
  "Scheißleben": { s: 3, c: 5 }, // Shitty life
  "Scheißspiel": { s: 3, c: 5 }, // Shitty game
  "Scheißarbeit": { s: 3, c: 5 }, // Shitty work
  "Scheißland": { s: 3, c: 5 }, // Shitty country
  "Scheißfilm": { s: 3, c: 5 }, // Shitty movie
  "Scheißmusik": { s: 3, c: 5 }, // Shitty music
  "Scheißidee": { s: 3, c: 5 }, // Shitty idea
  "Scheißnacht": { s: 3, c: 5 }, // Shitty night
  "Scheißgefühl": { s: 3, c: 5 }, // Shitty feeling
  "Scheißverein": { s: 3, c: 5 }, // Shitty club
  "Scheißmannschaft": { s: 3, c: 5 }, // Shitty team
  "Scheißding": { s: 3, c: 5 }, // Shitty thing
  "Scheißauto": { s: 3, c: 5 }, // Shitty car
  "Scheißjob": { s: 3, c: 5 }, // Shitty job
  "Scheißfrage": { s: 3, c: 5 }, // Shitty question
  "Scheißgeld": { s: 3, c: 5 }, // Shitty money (no money)
  "Scheißnase": { s: 3, c: 5 }, // Shit nose (annoying person)
  "Scheißkopf": { s: 3, c: 5 }, // Shit head
  "Scheißhaufen": { s: 3, c: 5 }, // Shit pile
  "Scheißangst": { s: 3, c: 5 }, // Shit-scared
  "Scheißlaune": { s: 3, c: 5 }, // Shitty mood
  "Scheißsituation": { s: 3, c: 5 }, // Shitty situation
  "Scheißwitz": { s: 3, c: 5 }, // Shitty joke
  "Scheißzustand": { s: 3, c: 5 }, // Shitty condition

  // ========================================
  // === Arsch- Compounds ==================
  // ========================================
  "Arschkrampe": { s: 1, c: 4 }, // Ass cramp (annoying idiot)
  "Arschpauker": { s: 3, c: 5 }, // Ass beater (strict teacher)
  "Arschtritt": { s: 3, c: 5 }, // Ass kick
  "Arschkarte": { s: 3, c: 5 }, // Ass card (bad luck)
  "Arschnase": { s: 3, c: 5 }, // Ass nose
  "Arschwasser": { s: 3, c: 5 }, // Ass water (butt sweat)
  "Arschklar": { s: 3, c: 5 }, // Ass clear (obviously)
  "Arschbombe": { s: 3, c: 5 }, // Ass bomb (cannonball jump)
  "Arschfalte": { s: 3, c: 5 }, // Ass crack
  "Arschlochhausen": { s: 3, c: 5 }, // Asshole town
  "Arschkäfer": { s: 3, c: 5 }, // Ass beetle (annoying person)
  "Arschmade": { s: 3, c: 5 }, // Ass maggot
  "Arschpfeife": { s: 1, c: 4 }, // Ass whistle (idiot)
  "Arschschweiß": { s: 3, c: 5 }, // Ass sweat
  "Arschkacker": { s: 3, c: 5 }, // Ass shitter
  "Arschkeks": { s: 3, c: 5 }, // Ass cookie (annoying person)
  "Arschrakete": { s: 3, c: 5 }, // Ass rocket (insult)

  // ========================================
  // === Fick- Compounds ===================
  // ========================================
  "Fickschlampe": { s: 3, c: 5 }, // Fuck slut
  "Fickstück": { s: 3, c: 5 }, // Fuck piece
  "Fickmaschine": { s: 3, c: 5 }, // Fuck machine
  "Fickhure": { s: 5, c: 5 }, // Fuck whore
  "Fickschwein": { s: 3, c: 5 }, // Fuck pig
  "Fickdreck": { s: 3, c: 5 }, // Fuck dirt
  "Ficker": { s: 3, c: 5 }, // Fucker
  "Rumficken": { s: 3, c: 5 }, // Fucking around
  "Durchficken": { s: 3, c: 5 }, // Fuck through
  "Abficken": { s: 3, c: 5 }, // Fuck off / Fuck hard
  "Gefickt": { s: 3, c: 5 }, // Fucked
  "Zugefickt": { s: 3, c: 5 }, // Fucked up
  "Angefickt": { s: 3, c: 5 }, // Pissed off (lit. fucked at)

  // ========================================
  // === Wichs- Compounds ==================
  // ========================================
  "Wichsvorlage": { s: 3, c: 5 }, // Wank template (something to wank to)
  "Wichsstube": { s: 3, c: 5 }, // Wank room
  "Wichsfleck": { s: 3, c: 5 }, // Wank stain
  "Wichslappen": { s: 3, c: 5 }, // Wank cloth
  "Wichssocke": { s: 3, c: 5 }, // Wank sock
  "Wichsnudel": { s: 3, c: 5 }, // Wank noodle (insult)
  "Wichsbirne": { s: 4, c: 5 }, // Wank pear (dickhead)
  "Rumwichser": { s: 3, c: 5 }, // Wanker around

  // ========================================
  // === Hurensohn Variations ==============
  // ========================================
  "Hurensöhne": { s: 5, c: 4 }, // Sons of whores (plural)
  "Hurensprössling": { s: 5, c: 4 }, // Whore's offspring
  "Hurenbastard": { s: 3, c: 4 }, // Whore bastard
  "Hurendreck": { s: 5, c: 4 }, // Whore dirt
  "Hurenpack": { s: 5, c: 4 }, // Whore pack
  "Hurenvolk": { s: 5, c: 4 }, // Whore folk
  "Hurentreiber": { s: 5, c: 4 }, // Whore driver (pimp)
  "Hurerei": { s: 3, c: 4 }, // Whoring

  // ========================================
  // === Fotze Compounds ===================
  // ========================================
  "Fotzenkopf": { s: 5, c: 5 }, // Cunt head
  "Fotzenschleim": { s: 5, c: 5 }, // Cunt slime
  "Fotzenknecht": { s: 5, c: 5 }, // Cunt servant (simp)
  "Fotzengeburt": { s: 5, c: 5 }, // Cunt birth
  "Dumme Fotze": { s: 1, c: 4 }, // Dumb cunt
  "Alte Fotze": { s: 5, c: 5 }, // Old cunt
  "Blöde Fotze": { s: 1, c: 4 }, // Stupid cunt
  "Fotzenbacke": { s: 5, c: 5 }, // Cunt cheek

  // ========================================
  // === Kack- Compounds ===================
  // ========================================
  "Kacknoob": { s: 3, c: 5 }, // Shit noob
  "Kackstelze": { s: 1, c: 4 }, // Shit stilt (idiot)
  "Kackfresse": { s: 3, c: 5 }, // Shit face
  "Kacknase": { s: 3, c: 5 }, // Shit nose
  "Kackboon": { s: 3, c: 5 }, // Shit noob (gaming slang)
  "Kackpfosten": { s: 1, c: 4 }, // Shit post (idiot)
  "Kacklappen": { s: 3, c: 5 }, // Shit cloth
  "Kackblag": { s: 3, c: 5 }, // Shit brat
  "Kackvieh": { s: 3, c: 5 }, // Shit beast
  "Kackstiefel": { s: 3, c: 5 }, // Shit boot

  // ========================================
  // === Drecks- Compounds =================
  // ========================================
  "Drecksloch": { s: 3, c: 5 }, // Dirty hole (terrible place)
  "Drecksladen": { s: 3, c: 5 }, // Dirty shop (terrible place)
  "Drecksvolk": { s: 3, c: 5 }, // Dirty people
  "Drecksarbeit": { s: 3, c: 5 }, // Dirty work
  "Dreckswetter": { s: 3, c: 5 }, // Dirty weather
  "Drecksfresse": { s: 3, c: 5 }, // Dirty face
  "Drecksbande": { s: 3, c: 5 }, // Dirty gang
  "Drecksnest": { s: 3, c: 5 }, // Dirty nest (terrible place)
  "Drecksbalg": { s: 3, c: 5 }, // Dirty brat
  "Drecksnase": { s: 3, c: 5 }, // Dirty nose (annoying person)
  "Dreckstier": { s: 3, c: 5 }, // Dirty beast
  "Drecksding": { s: 3, c: 5 }, // Dirty thing
  "Drecksweib": { s: 3, c: 5 }, // Dirty woman
  "Drecksjob": { s: 3, c: 5 }, // Dirty job

  // ========================================
  // === Piss- Compounds ===================
  // ========================================
  "Pissbude": { s: 3, c: 5 }, // Piss booth (terrible place)
  "Pisskopf": { s: 3, c: 5 }, // Piss head
  "Pisswetter": { s: 3, c: 5 }, // Piss weather
  "Pisstrinker": { s: 3, c: 5 }, // Piss drinker
  "Pissflitsche": { s: 3, c: 5 }, // Piss slingshot (insult)
  "Pissbacke": { s: 3, c: 5 }, // Piss cheek

  // ========================================
  // === Austrian Dialect (Extended) =======
  // ========================================
  "Oida": { s: 3, c: 4 }, // Dude / Old man (Austrian exclamation, can be offensive)
  "Geh scheißn": { s: 3, c: 5 }, // Go shit yourself (Austrian)
  "Schleich di": { s: 3, c: 4 }, // Get lost (Austrian)
  "Schleich dich": { s: 3, c: 4 }, // Get lost (Austrian, formal spelling)
  "Gschissener": { s: 3, c: 5 }, // Shitty person (Austrian)
  "Gschissene": { s: 3, c: 5 }, // Shitty person, female (Austrian)
  "Hawara": { s: 3, c: 4 }, // Buddy (Austrian, can be derogatory)
  "Grauslich": { s: 3, c: 4 }, // Disgusting (Austrian)
  "Gruaslig": { s: 3, c: 4 }, // Disgusting (Austrian dialect)
  "Beidlpracker": { s: 4, c: 4 }, // Dick beater (Austrian)
  "Giftler": { s: 3, c: 4 }, // Angry person / Drug addict (Austrian)
  "Gifthäusl": { s: 3, c: 4 }, // Poison house (angry person, Austrian)
  "Rotzbua": { s: 3, c: 4 }, // Snot boy (Austrian)
  "Rotzpipn": { s: 3, c: 4 }, // Snot chick (Austrian)
  "Ungustl": { s: 3, c: 4 }, // Unpleasant person (Austrian)
  "Wuchtel": { s: 3, c: 4 }, // Dumpling / Chubby person (Austrian)
  "Gfrieß": { s: 1, c: 4 }, // Ugly face (Austrian)
  "Schirch": { s: 1, c: 4 }, // Ugly (Austrian)
  "Schiaß": { s: 1, c: 4 }, // Ugly (Austrian variant)
  "Krowod": { s: 3, c: 4 }, // Derogatory for Croatian (Austrian)
  "Reibn": { s: 3, c: 4 }, // Woman (derogatory, Austrian)
  "Brunzer": { s: 3, c: 4 }, // Pisser (Austrian)
  "Scheißhäusl": { s: 3, c: 4 }, // Outhouse (Austrian)
  "Bladl": { s: 1, c: 4 }, // Stupid person (Austrian)
  "Nudlaug": { s: 1, c: 4 }, // Noodle eye / Idiot (Austrian)
  "Gsindel": { s: 3, c: 4 }, // Riff-raff (Austrian dialect)
  "Gstinkerter": { s: 3, c: 4 }, // Stinky person (Austrian)
  "Grattler": { s: 3, c: 4 }, // Scruff, lowlife (Bavarian/Austrian)
  "Gschaftlhuber": { s: 3, c: 4 }, // Busybody (Bavarian/Austrian)
  "Zipfiklatscha": { s: 4, c: 4 }, // Dick slapper (Austrian/Bavarian dialect)
  "Fotznspangler": { s: 3, c: 4 }, // Face slapper (Bavarian/Austrian)
  "Obandler": { s: 1, c: 4 }, // Loser/dropout (Austrian)
  "Tramhappert": { s: 3, c: 4 }, // Clumsy oaf (Austrian)
  "Gimpel": { s: 1, c: 4 }, // Fool (Austrian)
  "Saubua": { s: 3, c: 4 }, // Dirty boy (Austrian)
  "Saumagen": { s: 3, c: 4 }, // Pig stomach (insult, Austrian)
  "Grausbirne": { s: 3, c: 4 }, // Disgusting pear/head (Austrian)
  "Stinkadel": { s: 3, c: 4 }, // Stinking nobility (Austrian sarcasm)
  "Wickel": { s: 3, c: 4 }, // Trouble / Fight (Austrian)
  "Bock": { s: 3, c: 4 }, // Billy goat / Horny man (Austrian)
  "Fetzenschädl": { s: 1, c: 3 }, // Rag skull (drunk, Austrian)
  "Gfrastsackl": { s: 3, c: 4 }, // Pest bag (Austrian)

  // ========================================
  // === Swiss German (Extended) ===========
  // ========================================
  "Gopfriedstutz": { s: 2, c: 3 }, // God damn (Swiss German, mild euphemism)
  "Gopferdelli": { s: 3, c: 4 }, // God damn (Swiss German variant)
  "Gopferdeckel": { s: 2, c: 3 }, // God damn (Swiss German, mild)
  "Härdöpfel": { s: 1, c: 4 }, // Potato / Idiot (Swiss German)
  "Chnull": { s: 1, c: 4 }, // Zero / Idiot (Swiss German)
  "Chnuschti": { s: 1, c: 4 }, // Idiot (Swiss German)
  "Saucheib": { s: 3, c: 4 }, // Dirty bastard (Swiss German)
  "Souglansen": { s: 1, c: 4 }, // Fucking idiot (Swiss German)
  "Souniggel": { s: 3, c: 4 }, // Filthy pig (Swiss German variant)
  "Soucheib": { s: 3, c: 4 }, // Dirty bastard (Swiss German variant)
  "Souluder": { s: 3, c: 4 }, // Dirty hussy (Swiss German)
  "Soukerl": { s: 3, c: 4 }, // Dirty fellow (Swiss German)
  "Hueredull": { s: 1, c: 4 }, // Fucking stupid (Swiss German)
  "Hueretubel": { s: 1, c: 4 }, // Fucking idiot (Swiss German)
  "Huerelansen": { s: 1, c: 4 }, // Fucking fool (Swiss German)
  "Huerecheib": { s: 3, c: 4 }, // Fucking bastard (Swiss German)
  "Huerelöli": { s: 1, c: 4 }, // Fucking idiot (Swiss German)
  "Mischtchäfer": { s: 3, c: 4 }, // Dung beetle (Swiss German)
  "Dubel": { s: 1, c: 4 }, // Idiot (Swiss German variant)
  "Lappi": { s: 3, c: 4 }, // Wimp (Swiss German)
  "Lööli": { s: 1, c: 4 }, // Idiot (Swiss German variant spelling)
  "Gschmöis": { s: 3, c: 4 }, // Vermin (Swiss German)
  "Chlapf": { s: 1, c: 4 }, // Slap / Idiot (Swiss German)
  "Gaggi": { s: 3, c: 4 }, // Poo (Swiss German, childish)
  "Fuudi": { s: 3, c: 4 }, // Ass (Swiss German)
  "Arschgeigeli": { s: 3, c: 4 }, // Little ass violin (Swiss German diminutive)
  "Figgscheissdreck": { s: 3, c: 5 }, // Fuck-shit-dirt (Swiss German triple compound)
  "Seich": { s: 3, c: 4 }, // Piss / Nonsense (Swiss German)
  "Seichbüetel": { s: 3, c: 4 }, // Piss bag (Swiss German)
  "Stürmi": { s: 3, c: 4 }, // Crazy person (Swiss German)
  "Blödi Chue": { s: 1, c: 4 }, // Stupid cow (Swiss German variant)
  "Choge": { s: 1, c: 4 }, // Dirty/ugly (Swiss German, Bern)
  "Häfeli": { s: 1, c: 4 }, // Pot / Toilet / Idiot (Swiss German)

  // ========================================
  // === Bavarian Dialect (Extended) =======
  // ========================================
  "Deifi": { s: 3, c: 4 }, // Devil (Bavarian)
  "Deifei": { s: 3, c: 4 }, // Devil (Bavarian variant)
  "Kruzifixhalleluja": { s: 3, c: 4 }, // Crucifix hallelujah (Bavarian exclamation)
  "Kruzifix": { s: 3, c: 4 }, // Crucifix (Bavarian swear)
  "Kruzitürken": { s: 3, c: 4 }, // Crucifix Turks (Bavarian exclamation)
  "Sakrament": { s: 3, c: 4 }, // Sacrament (Bavarian swear)
  "Sakra": { s: 3, c: 4 }, // Damn (Bavarian abbreviation)
  "Himmiherrgottsakrament": { s: 3, c: 4 }, // Heaven lord god sacrament (Bavarian)
  "Zefix": { s: 3, c: 4 }, // Damn (Bavarian, from Kruzifix)
  "Himmiarschundzwirn": { s: 3, c: 4 }, // Heaven ass and thread (Bavarian)
  "Saubazi": { s: 3, c: 4 }, // Dirty rascal (Bavarian)
  "Saudepp": { s: 1, c: 4 }, // Dirty idiot (Bavarian)
  "Saudumm": { s: 1, c: 4 }, // Pig-stupid (Bavarian)
  "Saugfrast": { s: 3, c: 4 }, // Dirty pest (Bavarian)
  "Saugut": { s: 3, c: 4 }, // Pig-good (intensifier, Bavarian)
  "Bazi": { s: 3, c: 4 }, // Rascal (Bavarian)
  "Lausbua": { s: 3, c: 4 }, // Rascal boy (Bavarian)
  "Biestige Krot": { s: 3, c: 4 }, // Nasty toad (Bavarian)
  "Grantler": { s: 3, c: 4 }, // Grumpy person (Bavarian)
  "Griabiger Hund": { s: 3, c: 4 }, // Grubby dog (Bavarian)
  "Wadlbeißer": { s: 3, c: 4 }, // Calf biter (Bavarian, annoying person)
  "Schnepfe": { s: 3, c: 4 }, // Snipe / Stuck-up woman (Bavarian)
  "Zwutschgerl": { s: 3, c: 4 }, // Little twerp (Bavarian)
  "Drecksgsicht": { s: 3, c: 4 }, // Dirty face (Bavarian)
  "Brunzkübel": { s: 3, c: 4 }, // Piss bucket (Bavarian)
  "Hund": { s: 3, c: 4 }, // Dog (used as insult in Bavarian)
  "Luasch": { s: 3, c: 4 }, // Slob (Bavarian)
  "Rotzglockn": { s: 3, c: 4 }, // Snot bell (Bavarian)
  "Rotzleffl": { s: 3, c: 4 }, // Snot spoon (Bavarian)
  "Bisgurke": { s: 3, c: 4 }, // Bite cucumber / Nasty person (Bavarian)
  "Damischer Hund": { s: 1, c: 4 }, // Dazed/stupid dog (Bavarian)
  "Gschwollschädl": { s: 3, c: 4 }, // Swollen skull (Bavarian)
  "Bloßfüßiger": { s: 3, c: 4 }, // Barefooted one / Bumpkin (Bavarian)

  // ========================================
  // === Northern German / Plattdeutsch ====
  // ========================================
  "Dull": { s: 3, c: 4 }, // Crazy (Plattdeutsch)
  "Dullkopp": { s: 3, c: 4 }, // Crazy head (Plattdeutsch)
  "Tull": { s: 1, c: 4 }, // Fool (Plattdeutsch)
  "Dösbaddel": { s: 1, c: 4 }, // Dozy idiot (Northern German)
  "Döskopp": { s: 3, c: 4 }, // Dozey head (Northern German)
  "Labskansen": { s: 3, c: 4 }, // Labskaus people (Northern German)
  "Klootbüdel": { s: 4, c: 4 }, // Ball bag (Plattdeutsch, testicle insult)
  "Klootzak": { s: 3, c: 4 }, // Ball sack (Plattdeutsch)
  "Lansen": { s: 1, c: 4 }, // Fool (Plattdeutsch)
  "Nocken": { s: 1, c: 4 }, // Idiot (Plattdeutsch)
  "Bangbüx": { s: 3, c: 4 }, // Scaredy pants (Plattdeutsch)
  "Sabbeltansen": { s: 3, c: 4 }, // Dribble chick (Plattdeutsch)
  "Schieter": { s: 3, c: 5 }, // Shitter (Plattdeutsch)
  "Schietbüdel": { s: 3, c: 5 }, // Shit bag (Plattdeutsch)
  "Lüttje Schiet": { s: 3, c: 5 }, // Little shit (Plattdeutsch)
  "Kladderadatsch": { s: 3, c: 4 }, // Mess / Crash (Northern German)
  "Mors": { s: 3, c: 4 }, // Ass (Plattdeutsch)
  "Morsakrobat": { s: 3, c: 4 }, // Ass acrobat (Plattdeutsch)
  "Söten": { s: 3, c: 4 }, // Sweet / Sarcastic insult (Plattdeutsch)
  "Dussel": { s: 3, c: 4 }, // Dozy person (Northern German)
  "Dusselig": { s: 3, c: 4 }, // Dozy (Northern German)
  "Döspaddel": { s: 3, c: 4 }, // Dozy paddle (Northern German variant)
  "Torfkopp": { s: 3, c: 4 }, // Peat head (Northern German)
  "Pansen": { s: 1, c: 4 }, // Paunch / Fat person (Northern German)

  // ========================================
  // === Homophobic / Transphobic Slurs ====
  // ========================================
  "Tunte": { s: 5, c: 4 }, // Fairy, queen (derogatory for gay/effeminate man)
  "Warme": { s: 5, c: 4 }, // Warm one (derogatory for gay man)
  "Warmer Bruder": { s: 5, c: 4 }, // Warm brother (derogatory for gay man)
  "Hinterlader": { s: 5, c: 4 }, // Rear-loader (derogatory for gay man)
  "Schwuppe": { s: 5, c: 4 }, // Derogatory for gay man
  "Homo": { s: 5, c: 4 }, // Homo (used derogatorily)
  "Kampfschwuchtel": { s: 5, c: 4 }, // Battle faggot
  "Schublade": { s: 5, c: 4 }, // Drawer / Closet case (derogatory)
  "Zwitter": { s: 5, c: 4 }, // Hermaphrodite (used derogatorily for intersex/trans)
  "Mannweib": { s: 5, c: 4 }, // Man-woman (derogatory for masculine woman)
  "Weibmann": { s: 5, c: 4 }, // Woman-man (derogatory for feminine man)
  "Kesser Vater": { s: 5, c: 4 }, // Butch lesbian (derogatory)
  "Flunder": { s: 5, c: 4 }, // Flounder / Flat-chested woman (derogatory)

  // ========================================
  // === Ethnic / Racial Slurs =============
  // ========================================
  "Kanakenpack": { s: 5, c: 4 }, // Slur for foreigners (pack)
  "Zigeuner": { s: 5, c: 4 }, // Gypsy (offensive for Roma/Sinti)
  "Zigeunerbande": { s: 5, c: 4 }, // Gypsy gang (very offensive)
  "Zigeunerpack": { s: 5, c: 4 }, // Gypsy pack (very offensive)
  "Zigeunergesindel": { s: 5, c: 4 }, // Gypsy riff-raff (very offensive)
  "Bimbo": { s: 3, c: 4 }, // Derogatory for Black person (German usage)
  "Mohr": { s: 5, c: 4 }, // Moor (outdated, offensive for Black person)
  "Schwarzkopf": { s: 5, c: 4 }, // Blackhead (derogatory for dark-haired foreigners)
  "Kameltreiber": { s: 5, c: 4 }, // Camel driver (offensive for Arabs)
  "Kümmelfresser": { s: 5, c: 4 }, // Cumin eater (offensive for Turks)
  "Knoblauchfresser": { s: 5, c: 4 }, // Garlic eater (offensive for Southern Europeans)
  "Froschfresser": { s: 5, c: 4 }, // Frog eater (offensive for French)
  "Inselaffe": { s: 5, c: 4 }, // Island ape (offensive for British)
  "Kartoffelfresser": { s: 5, c: 4 }, // Potato eater (offensive for Germans, used by foreigners)
  "Reisfresser": { s: 5, c: 4 }, // Rice eater (offensive for East Asians)
  "Spaghettifresser": { s: 5, c: 4 }, // Spaghetti eater (offensive for Italians)
  "Spaghettiträger": { s: 5, c: 4 }, // Spaghetti carrier (offensive for Italians)
  "Russenschwein": { s: 5, c: 4 }, // Russian pig
  "Polenschwein": { s: 5, c: 4 }, // Polish pig
  "Judenschwein": { s: 5, c: 5 }, // Jew pig (extremely offensive)
  "Judensau": { s: 5, c: 5 }, // Jew sow (extremely offensive, historical)
  "Moslem": { s: 5, c: 4 }, // Muslim (can be used derogatorily in context)
  "Musel": { s: 5, c: 4 }, // Derogatory for Muslim
  "Muselmane": { s: 5, c: 4 }, // Derogatory for Muslim (archaic)
  "Hottentotte": { s: 5, c: 5 }, // Hottentot (extremely offensive for Black Africans)
  "Fidschi": { s: 5, c: 4 }, // Derogatory for Vietnamese/East Asian (East German)
  "Ching Chang Chong": { s: 5, c: 4 }, // Mocking East Asian languages
  "Nafri": { s: 5, c: 4 }, // Derogatory for North African
  "Untermensch": { s: 5, c: 5 }, // Subhuman (Nazi terminology, extremely offensive)
  "Rassenschande": { s: 5, c: 5 }, // Race shame (Nazi terminology)
  "Volksverräter": { s: 5, c: 4 }, // Traitor of the people (far-right slur)

  // ========================================
  // === Internet / Youth Slang (Extended) =
  // ========================================
  "HSO": { s: 5, c: 5 }, // Abbreviation: Hurensohn (internet)
  "WTF": { s: 2, c: 2 }, // Already used in German internet culture
  "Ehrenlos": { s: 2, c: 3 }, // Dishonorable (youth slang)
  "Hartzer": { s: 2, c: 3 }, // Welfare recipient (derogatory, from Hartz IV)
  "Asi": { s: 2, c: 3 }, // Short for Asozial (antisocial/trashy)
  "Assi": { s: 2, c: 3 }, // Short for Asozial variant
  "Asoziale": { s: 2, c: 3 }, // Antisocial person (derogatory)
  "Asozialer": { s: 2, c: 3 }, // Antisocial person, male (derogatory)
  "Asiate": { s: 2, c: 3 }, // Asian (can be derogatory in context)
  "Babo": { s: 2, c: 3 }, // Boss (youth slang, can be offensive)
  "Habibi": { s: 2, c: 3 }, // My love (Arabic, used mockingly in German)
  "Hayvan": { s: 2, c: 3 }, // Animal (Turkish, used in German youth slang as insult)
  "Moruk": { s: 2, c: 3 }, // Old man (Turkish, used in German youth slang)
  "Kahba": { s: 5, c: 4 }, // Whore (Arabic, used in German youth slang)
  "Sharmuta": { s: 5, c: 4 }, // Whore (Arabic, used in German youth slang)
  "Kelb": { s: 2, c: 3 }, // Dog (Arabic insult, used in German youth slang)
  "Ya Kelb": { s: 2, c: 3 }, // You dog (Arabic insult in German)
  "Ibn el Sharmouta": { s: 5, c: 5 }, // Son of a whore (Arabic, used in German)
  "Wallah": { s: 2, c: 3 }, // I swear (Arabic, used mockingly)
  "Harakiri": { s: 5, c: 5 }, // Suicide (used as insult for recklessness)
  "Noob": { s: 1, c: 2 }, // Newbie/idiot (gaming slang)
  "Tryhard": { s: 1, c: 2 }, // Try-hard (gaming insult)
  "Abgefuckt": { s: 3, c: 5 }, // Fucked up (youth slang)
  "Abgefickt": { s: 3, c: 5 }, // Fucked up variant
  "Pimmelnase": { s: 4, c: 3 }, // Dick nose
  "Pimmelkopf": { s: 4, c: 3 }, // Dickhead
  "Pimmelgesicht": { s: 4, c: 3 }, // Dick face
  "Dreckslauch": { s: 1, c: 3 }, // Dirty leek (skinny loser, youth slang)
  "Lauch": { s: 1, c: 3 }, // Leek (skinny loser, youth slang)
  "Ehrenmann": { s: 2, c: 3 }, // Honor man (sarcastic, can be offensive)
  "Kackbratzen": { s: 3, c: 5 }, // Shit mugs (plural)
  "Otto": { s: 1, c: 3 }, // Idiot (youth slang)
  "Gerda": { s: 2, c: 3 }, // Basic/boring person (youth slang)

  // ========================================
  // === More Vulgar Verbs =================
  // ========================================
  "anpissen": { s: 3, c: 4 }, // To piss on / To annoy
  "vollpissen": { s: 3, c: 4 }, // To piss all over
  "zuscheißen": { s: 3, c: 5 }, // To shit on / close
  "vollkotzen": { s: 3, c: 4 }, // To vomit all over
  "ankotzen": { s: 3, c: 4 }, // To make someone nauseous / To annoy
  "anschwulen": { s: 3, c: 4 }, // To act gay towards (offensive)
  "anbaggern": { s: 3, c: 4 }, // To hit on (aggressively)
  "aufreißen": { s: 3, c: 4 }, // To pick up (sexually)
  "ablecken": { s: 3, c: 4 }, // To lick off (sexual)
  "runterholen": { s: 4, c: 4 }, // To jerk off
  "abwichsen": { s: 3, c: 4 }, // To wank off
  "abblasen": { s: 3, c: 4 }, // To blow off (sexual)
  "ranmachen": { s: 3, c: 4 }, // To come on to
  "zuballern": { s: 3, c: 4 }, // To get wasted
  "volllaufen": { s: 3, c: 4 }, // To get hammered
  "saufen": { s: 3, c: 4 }, // To drink heavily
  "besoffen": { s: 1, c: 3 }, // Drunk (vulgar)
  "vollgesoffen": { s: 1, c: 3 }, // Completely drunk
  "zugedröhnt": { s: 3, c: 4 }, // Stoned out
  "zugeknallt": { s: 3, c: 4 }, // Wasted
  "dichtmachen": { s: 3, c: 4 }, // To get wasted

  // ========================================
  // === More Sexual Terms =================
  // ========================================
  "Gruppensex": { s: 4, c: 4 }, // Group sex
  "Analsex": { s: 4, c: 4 }, // Anal sex
  "Oralsex": { s: 4, c: 4 }, // Oral sex
  "Fisten": { s: 4, c: 4 }, // Fisting
  "Deepthroat": { s: 4, c: 5 }, // Deep throat
  "Creampie": { s: 4, c: 5 }, // Creampie
  "Facesitting": { s: 4, c: 4 }, // Face sitting
  "Rimming": { s: 3, c: 4 }, // Rimming
  "Bukkake": { s: 4, c: 5 }, // Bukkake
  "Cumshot": { s: 4, c: 5 }, // Cumshot
  "Samenerguss": { s: 4, c: 4 }, // Ejaculation
  "Schwanzreiten": { s: 4, c: 4 }, // Dick riding
  "Arschfick": { s: 4, c: 5 }, // Ass fuck
  "Mundverkehr": { s: 4, c: 5 }, // Oral sex (lit. mouth traffic)
  "Natursekt": { s: 4, c: 4 }, // Golden shower (lit. natural champagne)
  "Kaviar": { s: 4, c: 4 }, // Scat (lit. caviar)
  "Quickie": { s: 4, c: 4 }, // Quickie
  "Steifer": { s: 4, c: 4 }, // Hard-on
  "Bumsladen": { s: 4, c: 5 }, // Fuck shop (brothel)
  "Puff": { s: 4, c: 4 }, // Brothel (colloquial)
  "Bordell": { s: 4, c: 4 }, // Brothel
  "Lusthaus": { s: 4, c: 4 }, // Pleasure house (brothel)
  "Freudenmädchen": { s: 5, c: 4 }, // Joy girl (prostitute)
  "Strichjunge": { s: 4, c: 4 }, // Rent boy
  "Lustsklave": { s: 4, c: 4 }, // Sex slave

  // ========================================
  // === Body Part Vulgarities =============
  // ========================================
  "Arschritze": { s: 4, c: 3 }, // Ass crack
  "Arschkerbe": { s: 4, c: 3 }, // Ass notch
  "Schamlippen": { s: 4, c: 4 }, // Labia (vulgar in context)
  "Brustwarze": { s: 4, c: 4 }, // Nipple (vulgar in context)
  "Möse": { s: 4, c: 4 }, // Pussy (vulgar)
  "Mösenlecker": { s: 4, c: 3 }, // Pussy licker
  "Mösengesicht": { s: 4, c: 3 }, // Pussy face
  "Klöten": { s: 4, c: 4 }, // Balls (Northern German vulgar)
  "Nille": { s: 4, c: 4 }, // Dick (slang)
  "Schwengel": { s: 4, c: 3 }, // Dick (lit. clapper)
  "Riemen": { s: 4, c: 3 }, // Dick (lit. strap)
  "Rohr": { s: 4, c: 3 }, // Dick (lit. pipe)
  "Prengel": { s: 4, c: 4 }, // Dick (slang)
  "Gurke": { s: 4, c: 4 }, // Cucumber / Dick (slang)
  "Lümmel": { s: 4, c: 4 }, // Lout / Dick (slang)
  "Lümmelkäse": { s: 4, c: 3 }, // Dick cheese (smegma)
  "Smegma": { s: 4, c: 4 }, // Smegma
  "Hintern": { s: 4, c: 3 }, // Behind / Butt
  "Gesäß": { s: 4, c: 3 }, // Buttocks (formal but crude in context)
  "Pobacke": { s: 4, c: 3 }, // Butt cheek
  "Popo": { s: 4, c: 3 }, // Butt (childish)
  "Titte": { s: 4, c: 3 }, // Tit (singular)
  "Nippel": { s: 4, c: 4 }, // Nipple (vulgar)
  "Rosette": { s: 4, c: 4 }, // Rosette / Anus (slang)

  // ========================================
  // === Du dumme... Compound Insults ======
  // ========================================
  "Du dumme Sau": { s: 1, c: 4 }, // You dumb sow
  "Blöde Kuh": { s: 1, c: 4 }, // Stupid cow
  "Dumme Schlampe": { s: 1, c: 4 }, // Dumb slut
  "Du Arsch": { s: 3, c: 4 }, // You ass
  "Du Wichser": { s: 1, c: 4 }, // You wanker
  "Du Hurensohn": { s: 5, c: 5 }, // You son of a whore
  "Du Missgeburt": { s: 1, c: 4 }, // You miscarriage (very offensive)
  "Du Spast": { s: 1, c: 4 }, // You spastic
  "Du Penner": { s: 1, c: 4 }, // You bum
  "Du Vollidiot": { s: 1, c: 4 }, // You complete idiot
  "Du Opfer": { s: 1, c: 4 }, // You victim/loser
  "Du Fickfehler": { s: 3, c: 5 }, // You fucking mistake
  "Du Arschgeburt": { s: 3, c: 4 }, // You ass birth
  "Du Sohn einer Hure": { s: 5, c: 5 }, // You son of a whore
  "Dreckige Hure": { s: 5, c: 4 }, // Dirty whore
  "Blöde Schlampe": { s: 1, c: 4 }, // Stupid slut
  "Alte Schlampe": { s: 1, c: 4 }, // Old slut
  "Billige Nutte": { s: 1, c: 4 }, // Cheap hooker
  "Fette Sau": { s: 1, c: 4 }, // Fat sow
  "Fetter Sack": { s: 1, c: 4 }, // Fat sack
  "Hässliche Kuh": { s: 1, c: 4 }, // Ugly cow

  // ========================================
  // === Sau- Compounds ====================
  // ========================================
  "Saublöd": { s: 1, c: 4 }, // Pig-stupid
  "Saukalt": { s: 3, c: 5 }, // Pig-cold (very cold)
  "Saufrech": { s: 3, c: 5 }, // Pig-cheeky (very rude)
  "Saudoof": { s: 1, c: 4 }, // Pig-dumb
  "Saugeil": { s: 3, c: 5 }, // Pig-horny/awesome
  "Sauwetter": { s: 3, c: 5 }, // Pig weather (bad weather)
  "Sauerei": { s: 3, c: 5 }, // Piggery (outrage/mess)
  "Schweinerei": { s: 3, c: 5 }, // Piggery (outrage)
  "Sauladen": { s: 3, c: 5 }, // Pig shop (badly run place)
  "Saufkumpan": { s: 3, c: 5 }, // Drinking buddy (derogatory)
  "Säufer": { s: 1, c: 3 }, // Drunkard
  "Säuferin": { s: 1, c: 3 }, // Drunkard (female)
  "Suffkopp": { s: 3, c: 5 }, // Booze head
  "Suffnase": { s: 3, c: 5 }, // Booze nose

  // ========================================
  // === Stink- Compounds ==================
  // ========================================
  "Stinker": { s: 3, c: 4 }, // Stinker
  "Stinkefinger": { s: 3, c: 5 }, // Middle finger (lit. stink finger)
  "Stinksack": { s: 3, c: 5 }, // Stink bag
  "Stinkmorchel": { s: 3, c: 5 }, // Stinkhorn (disgusting person)
  "Stinkwanze": { s: 3, c: 5 }, // Stink bug (annoying person)
  "Stinknase": { s: 3, c: 5 }, // Stink nose

  // ========================================
  // === Voll- Compounds ===================
  // ========================================
  "Volltrottel": { s: 1, c: 4 }, // Complete fool
  "Volldepp": { s: 1, c: 4 }, // Complete moron
  "Vollspacken": { s: 1, c: 4 }, // Complete idiot (Northern German)
  "Vollspast": { s: 3, c: 5 }, // Complete spastic (offensive)
  "Vollasis": { s: 3, c: 5 }, // Complete anti-socials
  "Vollaffe": { s: 3, c: 5 }, // Complete ape
  "Vollpimmel": { s: 4, c: 5 }, // Complete dick

  // ========================================
  // === Schimpfwörter (Misc Swear Words) ==
  // ========================================
  "Drecksaffe": { s: 3, c: 4 }, // Dirty ape
  "Drecksschwein": { s: 3, c: 4 }, // Dirty pig
  "Ratte": { s: 3, c: 4 }, // Rat (insult)
  "Kakerlake": { s: 4, c: 4 }, // Cockroach (insult)
  "Rattenfänger": { s: 3, c: 4 }, // Rat catcher (demagogue)
  "Ochse": { s: 1, c: 4 }, // Ox (stupid person)
  "Hammel": { s: 1, c: 4 }, // Ram (stupid person)
  "Esel": { s: 1, c: 4 }, // Donkey (stupid person)
  "Kamel": { s: 1, c: 4 }, // Camel (stupid person)
  "Affe": { s: 1, c: 4 }, // Ape (stupid person)
  "Halbmensch": { s: 3, c: 4 }, // Half-person (derogatory)
  "Kretin": { s: 3, c: 4 }, // Cretin
  "Kretine": { s: 3, c: 4 }, // Cretin (female)
  "Degenerierer": { s: 3, c: 4 }, // Degenerate
  "Schädling": { s: 5, c: 5 }, // Pest (dehumanizing insult)
  "Gesocks": { s: 3, c: 4 }, // Scum, riff-raff
  "Kroppzeug": { s: 3, c: 4 }, // Rubbish people
  "Plebs": { s: 2, c: 3 }, // Plebs
  "Pöbel": { s: 3, c: 4 }, // Mob, rabble
  "Abfall": { s: 3, c: 4 }, // Garbage (as insult)
  "Müll": { s: 3, c: 4 }, // Trash (as insult)
  "Drecksmensch": { s: 3, c: 4 }, // Dirty human
  "Unmensch": { s: 3, c: 4 }, // Inhuman person
  "Scheusal": { s: 3, c: 4 }, // Monster, wretch
  "Widerling": { s: 3, c: 4 }, // Repulsive person
  "Ekel": { s: 3, c: 4 }, // Disgust / Disgusting person
  "Grind": { s: 3, c: 4 }, // Scab (insult, Austrian/Swiss)
  "Grindiger": { s: 3, c: 4 }, // Scabby person
  "Schmutziger Hund": { s: 3, c: 4 }, // Dirty dog
  "Fauler Sack": { s: 3, c: 4 }, // Lazy sack
  "Blöder Hund": { s: 1, c: 4 }, // Stupid dog
  "Alter Sack": { s: 3, c: 4 }, // Old sack (old fart)
  "Sackgfrieß": { s: 3, c: 4 }, // Sack face (Austrian)
  "Giftspritzer": { s: 3, c: 4 }, // Poison sprayer (nasty person)
  "Giftnatter": { s: 3, c: 4 }, // Poison adder (nasty woman)
  "Giftschlange": { s: 3, c: 4 }, // Poison snake (nasty woman)
  "Hexe": { s: 3, c: 4 }, // Witch (insult)
  "Xanthippe": { s: 3, c: 4 }, // Xanthippe (nagging woman)
  "Drachen": { s: 3, c: 4 }, // Dragon (nagging woman)
  "Schreckschraube": { s: 1, c: 4 }, // Fright screw (ugly/annoying woman)
  "Nachtschaden": { s: 1, c: 4 }, // Night damage (ugly person)
  "Vogelscheuche": { s: 1, c: 4 }, // Scarecrow (ugly person)
  "Mondgesicht": { s: 3, c: 4 }, // Moon face (round-faced insult)
  "Froschgesicht": { s: 3, c: 4 }, // Frog face
  "Rattengesicht": { s: 3, c: 4 }, // Rat face
  "Schweinegesicht": { s: 3, c: 4 }, // Pig face
  "Hundegesicht": { s: 3, c: 4 }, // Dog face
  "Fratze": { s: 1, c: 4 }, // Mug, grimace (ugly face)
  "Hackfratze": { s: 1, c: 4 }, // Mug face (very ugly)
  "Visage": { s: 3, c: 4 }, // Mug (derogatory for face)
  "Drecksvisage": { s: 3, c: 4 }, // Dirty mug

  // ========================================
  // === Spelling Evasions / Leetspeak =====
  // ========================================
  // --- Scheiße evasions ---
  "Sch3iße": { s: 3, c: 5 }, // Shit (leetspeak)
  "Sche1sse": { s: 3, c: 5 }, // Shit (leetspeak)
  "Sch3isse": { s: 3, c: 5 }, // Shit (leetspeak)
  "Sch*iße": { s: 3, c: 5 }, // Shit (censored)
  "Sch*isse": { s: 3, c: 5 }, // Shit (censored)
  "Scheize": { s: 3, c: 5 }, // Shit (misspelling evasion)
  "Schaise": { s: 3, c: 5 }, // Shit (phonetic evasion)
  "Schaisse": { s: 3, c: 5 }, // Shit (phonetic evasion)
  "Scheiβe": { s: 4, c: 5 }, // Shit (Greek beta substitution)
  "Sch3iss3": { s: 3, c: 5 }, // Shit (leetspeak)
  "Scheiss": { s: 3, c: 5 }, // Shit (truncated)
  "Scheis": { s: 3, c: 5 }, // Shit (truncated)
  "Scheissdreck": { s: 3, c: 5 }, // Shit-dirt (ss variant)
  // --- Fick evasions ---
  "f1ck": { s: 3, c: 5 }, // Fuck (leetspeak)
  "f!ck": { s: 3, c: 5 }, // Fuck (censored)
  "f1cken": { s: 3, c: 5 }, // Fuck (leetspeak)
  "f!cken": { s: 3, c: 5 }, // Fuck (censored)
  "fick3n": { s: 3, c: 5 }, // Fuck (leetspeak)
  "F*ck": { s: 3, c: 5 }, // Fuck (censored)
  "F*cken": { s: 3, c: 5 }, // Fuck (censored)
  "Fickn": { s: 3, c: 5 }, // Fuck (truncated)
  "Phick": { s: 4, c: 5 }, // Fuck (ph substitution)
  "Phicken": { s: 4, c: 5 }, // Fuck (ph substitution)
  // --- Arschloch evasions ---
  "4rschloch": { s: 3, c: 5 }, // Asshole (leetspeak)
  "Arschl0ch": { s: 3, c: 5 }, // Asshole (leetspeak)
  "4rschl0ch": { s: 3, c: 5 }, // Asshole (leetspeak)
  "A*schloch": { s: 3, c: 5 }, // Asshole (censored)
  "Arschl*ch": { s: 3, c: 5 }, // Asshole (censored)
  "Arsch1och": { s: 3, c: 5 }, // Asshole (leetspeak)
  // --- Fotze evasions ---
  "F0tze": { s: 5, c: 5 }, // Cunt (leetspeak)
  "Fo7ze": { s: 5, c: 5 }, // Cunt (leetspeak)
  "F*tze": { s: 5, c: 5 }, // Cunt (censored)
  "Fotz3": { s: 5, c: 5 }, // Cunt (leetspeak)
  "F0tz3": { s: 5, c: 5 }, // Cunt (leetspeak)
  "Fotse": { s: 5, c: 5 }, // Cunt (misspelling evasion)
  // --- Hurensohn evasions ---
  "Hur3nsohn": { s: 5, c: 5 }, // Son of a whore (leetspeak)
  "Hur3ns0hn": { s: 5, c: 5 }, // Son of a whore (leetspeak)
  "Hurens0hn": { s: 5, c: 5 }, // Son of a whore (leetspeak)
  "H*rensohn": { s: 5, c: 5 }, // Son of a whore (censored)
  "Hurensон": { s: 5, c: 5 }, // Son of a whore (cyrillic substitution)
  "Hurrensohn": { s: 5, c: 5 }, // Son of a whore (doubled letter)
  // --- Wichser evasions ---
  "W1chser": { s: 3, c: 5 }, // Wanker (leetspeak)
  "W!chser": { s: 3, c: 5 }, // Wanker (censored)
  "Wichsr": { s: 3, c: 5 }, // Wanker (truncated)
  "W*chser": { s: 3, c: 5 }, // Wanker (censored)
  // --- Missgeburt evasions ---
  "M1ssgeburt": { s: 3, c: 5 }, // Miscarriage (leetspeak)
  "Missgebuhrt": { s: 3, c: 5 }, // Miscarriage (phonetic evasion)
  "Miß geburt": { s: 3, c: 5 }, // Miscarriage (old spelling with space)
  // --- Schwuchtel evasions ---
  "Schwucht3l": { s: 3, c: 5 }, // Faggot (leetspeak)
  "Schw*chtel": { s: 3, c: 5 }, // Faggot (censored)
  // --- Other evasions ---
  "Sp4st": { s: 3, c: 5 }, // Spastic (leetspeak)
  "Sp@st": { s: 3, c: 5 }, // Spastic (leetspeak)
  "H*re": { s: 5, c: 5 }, // Whore (censored)
  "Schl*mpe": { s: 3, c: 5 }, // Slut (censored)
  "N*ger": { s: 3, c: 5 }, // Negro (censored slur)
  "K*nake": { s: 3, c: 5 }, // Slur (censored)

  // ========================================
  // === Scheiß- Compounds (Extended) ======
  // ========================================
  "Scheißhund": { s: 3, c: 5 }, // Shit dog
  "Scheißbude": { s: 3, c: 5 }, // Shit booth (terrible place)
  "Scheißloch": { s: 3, c: 5 }, // Shithole
  "Scheißer": { s: 3, c: 5 }, // Shitter
  "Scheißerle": { s: 3, c: 5 }, // Little shitter (Swabian)
  "Scheißeimer": { s: 3, c: 5 }, // Shit bucket
  "Scheißstück": { s: 3, c: 5 }, // Shit piece
  "Scheißpack": { s: 3, c: 5 }, // Shit pack (terrible people)
  "Scheißvolk": { s: 3, c: 5 }, // Shit people
  "Scheißgesicht": { s: 3, c: 5 }, // Shit face
  "Scheißficker": { s: 3, c: 5 }, // Shit fucker
  "Scheißnudel": { s: 3, c: 5 }, // Shit noodle
  "Scheißbirne": { s: 1, c: 4 }, // Shit pear (stupid head)
  "Scheißbratze": { s: 3, c: 5 }, // Shit mug
  "Scheißpfosten": { s: 1, c: 4 }, // Shit post (idiot)
  "Scheißspieler": { s: 3, c: 5 }, // Shit player
  "Scheißschule": { s: 3, c: 5 }, // Shit school
  "Scheißstadt": { s: 3, c: 5 }, // Shit city
  "Scheißfamilie": { s: 3, c: 5 }, // Shit family
  "Scheißfreund": { s: 3, c: 5 }, // Shit friend
  "Scheißkarre": { s: 3, c: 5 }, // Shit car
  "Scheißhandy": { s: 3, c: 5 }, // Shit phone
  "Scheißcomputer": { s: 3, c: 5 }, // Shit computer
  "Scheißpartei": { s: 3, c: 5 }, // Shit party (political)
  "Scheißregierung": { s: 3, c: 5 }, // Shit government
  "Scheißpolizei": { s: 3, c: 5 }, // Shit police
  "Scheißbullen": { s: 3, c: 5 }, // Shit cops

  // ========================================
  // === Arsch- Compounds (Extended) =======
  // ========================================
  "Arschlochdorf": { s: 3, c: 5 }, // Asshole village
  "Arschkrampen": { s: 3, c: 5 }, // Ass cramps (plural)
  "Arschlochfreund": { s: 3, c: 5 }, // Asshole friend
  "Arschlochmove": { s: 3, c: 5 }, // Asshole move
  "Arschkind": { s: 3, c: 5 }, // Ass child
  "Arschgeboren": { s: 3, c: 5 }, // Ass-born
  "Arschwurst": { s: 3, c: 5 }, // Ass sausage
  "Arschzapfen": { s: 3, c: 5 }, // Ass plug
  "Arschlochverein": { s: 3, c: 5 }, // Asshole club
  "Arschclown": { s: 3, c: 5 }, // Ass clown
  "Arschtrompete": { s: 3, c: 5 }, // Ass trumpet (farter)
  "Arschschlecker": { s: 3, c: 5 }, // Ass licker (variant)
  "Arschbackenbrot": { s: 3, c: 5 }, // Ass cheek bread (gross image)

  // ========================================
  // === Fick- Compounds (Extended) ========
  // ========================================
  "Fickfratze": { s: 3, c: 5 }, // Fuck mug
  "Fickfinger": { s: 3, c: 5 }, // Fuck finger
  "Ficknudel": { s: 3, c: 5 }, // Fuck noodle
  "Fickbirne": { s: 3, c: 5 }, // Fuck head (lit. pear)
  "Ficknase": { s: 3, c: 5 }, // Fuck nose
  "Ficklaune": { s: 3, c: 5 }, // Fucking mood
  "Fickwurst": { s: 3, c: 5 }, // Fuck sausage
  "Fickbolzen": { s: 3, c: 5 }, // Fuck bolt
  "Fickpaddel": { s: 3, c: 5 }, // Fuck paddle
  "Ficklappen": { s: 3, c: 5 }, // Fuck cloth
  "Fickscheibe": { s: 3, c: 5 }, // Fuck disc (insult)
  "Fick dich ins Knie": { s: 3, c: 5 }, // Fuck yourself in the knee

  // ========================================
  // === Wichs- Compounds (Extended) =======
  // ========================================
  "Wichsbeutel": { s: 3, c: 5 }, // Wank bag
  "Wichsgesicht": { s: 3, c: 5 }, // Wank face
  "Wichsgrafik": { s: 3, c: 5 }, // Wank graphic (porn)
  "Wichsstange": { s: 3, c: 5 }, // Wank rod
  "Wichser-Gesicht": { s: 3, c: 5 }, // Wanker face (hyphenated)
  "Runterwichsen": { s: 3, c: 5 }, // To wank off

  // ========================================
  // === Kack- Compounds (Extended) ========
  // ========================================
  "Kackdreck": { s: 3, c: 5 }, // Shit dirt
  "Kackscheibe": { s: 3, c: 5 }, // Shit disc
  "Kackhaufen": { s: 3, c: 5 }, // Shit pile
  "Kackwichser": { s: 3, c: 5 }, // Shit wanker
  "Kacksack": { s: 3, c: 5 }, // Shit sack
  "Kackaffe": { s: 3, c: 5 }, // Shit ape
  "Kackpenner": { s: 3, c: 5 }, // Shit bum
  "Kackmongo": { s: 3, c: 5 }, // Shit mongoloid (highly offensive)
  "Kackspinner": { s: 3, c: 5 }, // Shit weirdo
  "Kackratte": { s: 3, c: 5 }, // Shit rat
  "Kackeier": { s: 3, c: 5 }, // Shit eggs

  // ========================================
  // === Drecks- Compounds (Extended) ======
  // ========================================
  "Dreckstrottel": { s: 1, c: 4 }, // Dirty fool
  "Drecksdepp": { s: 1, c: 4 }, // Dirty moron
  "Drecksgesindel": { s: 3, c: 5 }, // Dirty riff-raff
  "Drecksproll": { s: 3, c: 5 }, // Dirty prole
  "Dreckspack": { s: 3, c: 5 }, // Dirty pack (scum)
  "Dreckslümmel": { s: 3, c: 5 }, // Dirty lout
  "Drecksmongo": { s: 3, c: 5 }, // Dirty mongoloid (highly offensive)
  "Drecksbulle": { s: 3, c: 5 }, // Dirty cop
  "Drecksidiot": { s: 1, c: 4 }, // Dirty idiot
  "Dreckslustig": { s: 3, c: 5 }, // Dirty funny (sarcastically)
  "Dreckstyp": { s: 3, c: 5 }, // Dirty dude
  "Drecksgöre": { s: 3, c: 5 }, // Dirty brat (female)
  "Dreckskind": { s: 3, c: 5 }, // Dirty child
  "Drecksheini": { s: 3, c: 5 }, // Dirty fellow
  "Drecksniete": { s: 3, c: 5 }, // Dirty dud
  "Dreckswichser": { s: 3, c: 5 }, // Dirty wanker
  "Drecksfotzengesicht": { s: 5, c: 5 }, // Dirty cunt face
  "Drecksmaul": { s: 3, c: 5 }, // Dirty mouth

  // ========================================
  // === Piss- Compounds (Extended) ========
  // ========================================
  "Pissfresse": { s: 3, c: 5 }, // Piss face
  "Pissnudel": { s: 3, c: 5 }, // Piss noodle (insult)
  "Pissbirne": { s: 1, c: 4 }, // Piss pear (stupid head)
  "Pissfleck": { s: 3, c: 5 }, // Piss stain
  "Pisskröte": { s: 3, c: 5 }, // Piss toad (annoying child)
  "Pisssack": { s: 3, c: 5 }, // Piss sack
  "Pisspott": { s: 3, c: 5 }, // Piss pot
  "Pisswarze": { s: 3, c: 5 }, // Piss wart
  "Pisskind": { s: 3, c: 5 }, // Piss kid
  "Pissarsch": { s: 3, c: 5 }, // Piss ass

  // ========================================
  // === Sau- Compounds (Extended) =========
  // ========================================
  "Saudreck": { s: 3, c: 5 }, // Pig dirt
  "Saufotze": { s: 5, c: 5 }, // Pig cunt
  "Saupack": { s: 3, c: 5 }, // Pig pack
  "Sauvieh": { s: 3, c: 5 }, // Pig beast
  "Sauglatt": { s: 3, c: 5 }, // Pig smooth (very slippery)
  "Saukopf": { s: 3, c: 5 }, // Pig head
  "Saugesicht": { s: 3, c: 5 }, // Pig face
  "Sauweib": { s: 3, c: 5 }, // Pig woman
  "Saufraß": { s: 3, c: 5 }, // Pig feed (terrible food)
  "Sauhaufen": { s: 3, c: 5 }, // Pig pile (disorderly group)
  "Saustall": { s: 3, c: 5 }, // Pigsty (messy place)
  "Saumist": { s: 3, c: 5 }, // Pig manure
  "Sauarsch": { s: 3, c: 5 }, // Pig ass
  "Saupfote": { s: 3, c: 5 }, // Pig paw (messy handwriting)
  "Saumaul": { s: 3, c: 5 }, // Pig mouth (foul-mouthed)
  "Sauschwein": { s: 3, c: 5 }, // Pig pig (double intensifier)
  "Sauhure": { s: 5, c: 5 }, // Pig whore
  "Sauluder": { s: 3, c: 5 }, // Pig hussy
  "Saumäßig": { s: 3, c: 5 }, // Pig-like (terrible)
  "Saunickel": { s: 3, c: 5 }, // Dirty rascal

  // ========================================
  // === Vulgar Phrases (Extended) =========
  // ========================================
  "Geh ficken": { s: 3, c: 5 }, // Go fuck
  "Verpiss dich": { s: 3, c: 4 }, // Piss off
  "Verzieh dich": { s: 3, c: 4 }, // Get lost
  "Fahr zur Hölle": { s: 3, c: 4 }, // Go to hell
  "Du kannst mich mal": { s: 3, c: 4 }, // You can (kiss my ass - implied)
  "Halt die Fresse": { s: 3, c: 5 }, // Shut the fuck up
  "Halt dein Maul": { s: 3, c: 4 }, // Shut your mouth (vulgar)
  "Leck mich doch": { s: 3, c: 4 }, // Lick me (dismissive)
  "Lutsch meinen Schwanz": { s: 4, c: 4 }, // Suck my dick
  "Blas mir einen": { s: 3, c: 4 }, // Blow me one
  "Du Stück Scheiße": { s: 3, c: 5 }, // You piece of shit
  "Du dreckiges Stück": { s: 3, c: 4 }, // You dirty piece
  "Geh sterben": { s: 5, c: 5 }, // Go die
  "Friss Scheiße": { s: 3, c: 5 }, // Eat shit
  "Scheiß auf dich": { s: 3, c: 5 }, // Shit on you
  "Du kannst mich am Arsch lecken": { s: 3, c: 4 }, // You can lick my ass
  "In den Arsch ficken": { s: 3, c: 5 }, // Fuck in the ass
  "Ich scheiß auf dich": { s: 3, c: 5 }, // I shit on you
  "Fick deine Mutter": { s: 3, c: 5 }, // Fuck your mother
  "Deine Mutter": { s: 3, c: 4 }, // Your mother (implied insult)
  "Deine Mudda": { s: 3, c: 4 }, // Your mom (youth slang)
  "Deine Mutter ist eine Hure": { s: 5, c: 4 }, // Your mother is a whore
  "Du bist so dumm": { s: 1, c: 4 }, // You are so stupid
  "Halt die Schnauze": { s: 3, c: 4 }, // Shut your snout
  "Schnauze halten": { s: 3, c: 4 }, // Keep your snout shut
  "Fresse halten": { s: 3, c: 4 }, // Keep your face shut
  "Maul halten": { s: 3, c: 4 }, // Keep your mouth shut
  "Leck mich kreuzweise": { s: 3, c: 4 }, // Lick me crosswise
  "Scher dich zum Teufel": { s: 3, c: 4 }, // Get to the devil
  "Hol dich der Teufel": { s: 3, c: 4 }, // May the devil get you
  "Geh zum Teufel": { s: 3, c: 4 }, // Go to the devil
  "Zieh Leine": { s: 3, c: 4 }, // Pull rope (get lost)
  "Hau dich in die Pfanne": { s: 3, c: 4 }, // Fry yourself
  "Rutsch mir den Buckel runter": { s: 3, c: 4 }, // Slide down my hump
  "Leck mich fett": { s: 1, c: 4 }, // Lick me fat (expression of shock)
  "Du Stück Dreck": { s: 3, c: 4 }, // You piece of dirt
  "Mach dich vom Acker": { s: 3, c: 4 }, // Get off the field (get lost)
  "Verrecke": { s: 3, c: 4 }, // Drop dead (very harsh)
  "Krepier": { s: 3, c: 4 }, // Croak (drop dead)
  "Du Affe": { s: 3, c: 4 }, // You ape
  "Du Schwein": { s: 3, c: 4 }, // You pig
  "Du Dreckschwein": { s: 3, c: 4 }, // You dirty pig
  "Du Hund": { s: 3, c: 4 }, // You dog
  "Du Ratte": { s: 3, c: 4 }, // You rat
  "Du Made": { s: 3, c: 4 }, // You maggot
  "Du Wurm": { s: 3, c: 4 }, // You worm

  // ========================================
  // === Austrian Dialect (Extended 2) =====
  // ========================================
  // --- Geh... phrases ---
  "Geh in Oasch": { s: 3, c: 4 }, // Go into the ass (Austrian)
  "Geh bitte": { s: 3, c: 4 }, // Oh please / Expression of disbelief (Austrian)
  "Geh Scheißn geh": { s: 3, c: 5 }, // Go take a shit (Austrian)
  "Geh ma weg": { s: 3, c: 4 }, // Get away from me (Austrian)
  "Geh di scheißn": { s: 3, c: 5 }, // Go shit yourself (Austrian variant)
  "Geh di pickn": { s: 3, c: 4 }, // Go get stuck (Austrian)
  "Geh ma net am Oasch": { s: 3, c: 4 }, // Don't bother my ass (Austrian)
  // --- More Viennese ---
  "Beidlschluderer": { s: 4, c: 4 }, // Dick shaker (Viennese)
  "Beidlkraxler": { s: 4, c: 4 }, // Dick climber (Viennese)
  "Gschupfter Fansen": { s: 3, c: 4 }, // Pushed wench (Viennese)
  "Gstopfter": { s: 3, c: 4 }, // Stuffed one / Rich snob (Viennese)
  "Gschwollna": { s: 3, c: 4 }, // Swollen one / Arrogant person (Viennese)
  "Gscher": { s: 3, c: 4 }, // Fuss / Nuisance (Viennese)
  "Grasdackel": { s: 1, c: 4 }, // Grass dachshund / Clumsy idiot (Austrian)
  "Hirsch": { s: 1, c: 3 }, // Deer / Idiot (Austrian slang)
  "Lackl": { s: 3, c: 4 }, // Big oaf (Austrian)
  "Löd": { s: 3, c: 4 }, // Terrible / Lazy (Austrian)
  "Oarschgeign": { s: 3, c: 4 }, // Ass violin (Austrian dialect)
  "Oarschkriacha": { s: 3, c: 4 }, // Ass creeper (Austrian dialect)
  "Oarschlecha": { s: 3, c: 4 }, // Ass licker (Austrian dialect)
  "Pfrnak": { s: 3, c: 4 }, // Fiddler / Weirdo (Austrian)
  "Protz": { s: 3, c: 4 }, // Show-off (Austrian)
  "Pracker": { s: 1, c: 4 }, // Beater / Loser (Austrian)
  "Schas": { s: 3, c: 4 }, // Fart (Austrian)
  "Schasaugat": { s: 3, c: 4 }, // Fart-eyed / blind (Austrian)
  "Scheiblkratzer": { s: 3, c: 4 }, // Disc scratcher / Stingy person (Austrian)
  "Schnaxln": { s: 3, c: 5 }, // To fuck (Austrian)
  "Tussi": { s: 3, c: 4 }, // Bimbo (Austrian/German)
  "Weh": { s: 3, c: 4 }, // Wimp (Austrian)
  "Gfraster": { s: 3, c: 4 }, // Pest variant (Austrian)
  "Zaundürrer": { s: 3, c: 4 }, // Fence-thin person (Austrian)
  "Deppata": { s: 1, c: 4 }, // Stupid one (Austrian dialect)
  "Blunzn": { s: 3, c: 4 }, // Blood sausage / Unattractive woman (Austrian)
  "Gfickte Sau": { s: 3, c: 5 }, // Fucked sow (Austrian)
  "Schleich dich du Oaschloch": { s: 3, c: 4 }, // Get lost you asshole (Austrian)
  // --- Carinthian ---
  "Toifi": { s: 3, c: 4 }, // Devil (Carinthian)
  "Sauloter": { s: 3, c: 4 }, // Pig slob (Carinthian)
  "Pflonz": { s: 3, c: 5 }, // Liar / Bullshitter (Carinthian)
  "Noigschmeckter": { s: 3, c: 4 }, // Newcomer (derogatory, Carinthian)
  // --- Tyrolean ---
  "Lattl": { s: 1, c: 4 }, // Idiot (Tyrolean)
  "Luig": { s: 3, c: 4 }, // Liar (Tyrolean)
  "Schepas": { s: 1, c: 4 }, // Fool (Tyrolean)
  "Topfn": { s: 3, c: 4 }, // Curd / Nonsense (Tyrolean)
  "Nudlaugat": { s: 3, c: 4 }, // Noodle eyed / Dimwit (Tyrolean)
  // --- Styrian ---
  "Graml": { s: 3, c: 4 }, // Grumpy person (Styrian)
  "Stiaga": { s: 3, c: 4 }, // Annoying person (Styrian)
  "Stingata": { s: 3, c: 4 }, // Stinky person (Styrian)
  "Dalkert": { s: 1, c: 4 }, // Stupid (Styrian/Austrian)

  // ========================================
  // === Swiss German (Extended 2) =========
  // ========================================
  // --- Gopf- compounds ---
  "Gopferteckel": { s: 3, c: 5 }, // God damn (Swiss German)
  "Gopfertori": { s: 3, c: 5 }, // God damn (Swiss German)
  "Gopferdinggel": { s: 3, c: 5 }, // God damn (Swiss German)
  "Gopfernochmal": { s: 3, c: 5 }, // God damn again (Swiss German)
  "Gopfertamisiech": { s: 3, c: 4 }, // God damn bastard (Swiss German)
  "Gopferdammisiech": { s: 3, c: 4 }, // God damn bastard (Swiss German variant)
  // --- More Swiss compounds ---
  "Souchog": { s: 3, c: 5 }, // Pig dirty (Swiss German, Bern)
  "Sousaich": { s: 3, c: 5 }, // Pig mess (Swiss German)
  "Soutubel": { s: 1, c: 4 }, // Pig idiot (Swiss German)
  "Soulappi": { s: 3, c: 5 }, // Pig wimp (Swiss German)
  "Soulansen": { s: 1, c: 4 }, // Pig fool (Swiss German)
  "Soudepp": { s: 1, c: 4 }, // Pig moron (Swiss German)
  "Souhund": { s: 3, c: 5 }, // Pig dog (Swiss German variant)
  "Soubock": { s: 3, c: 5 }, // Pig buck (Swiss German)
  "Souscheiss": { s: 3, c: 5 }, // Pig shit (Swiss German)
  "Hueresohn": { s: 5, c: 5 }, // Whore's son (Swiss German)
  "Huerefotze": { s: 5, c: 5 }, // Whore cunt (Swiss German)
  "Huereguet": { s: 3, c: 5 }, // Fucking good (Swiss German intensifier)
  "Huereschlächt": { s: 3, c: 5 }, // Fucking bad (Swiss German)
  "Hueremischt": { s: 5, c: 5 }, // Whore manure (Swiss German)
  "Huerewieche": { s: 3, c: 5 }, // Fucking soft (Swiss German)
  "Hueresaich": { s: 5, c: 5 }, // Whore mess (Swiss German)
  "Hueretrottel": { s: 1, c: 4 }, // Fucking fool (Swiss German)
  "Huerescheiss": { s: 5, c: 5 }, // Whore shit (Swiss German)
  // --- Zurich dialect ---
  "Sieche": { s: 3, c: 4 }, // Bastard (Zurich dialect)
  "Cheibsgoofe": { s: 3, c: 4 }, // Bastard kids (Zurich)
  "Cheibssiech": { s: 3, c: 4 }, // Bastard plague (Zurich)
  "Chaib": { s: 3, c: 4 }, // Bastard (Zurich variant)
  "Schaafseckel": { s: 4, c: 4 }, // Sheep scrotum (Zurich insult)
  "Seckel": { s: 1, c: 4 }, // Scrotum / Idiot (Zurich)
  "Seckl": { s: 4, c: 4 }, // Scrotum (Zurich variant)
  "Scheisssiech": { s: 3, c: 4 }, // Shit bastard (Zurich)
  // --- Bern dialect ---
  "Gigusohn": { s: 1, c: 4 }, // Idiot's son (Bernese)
  "Luusbueb": { s: 3, c: 4 }, // Rascal boy (Bernese)
  "Souchoger": { s: 3, c: 4 }, // Dirty one (Bernese)
  // --- Basel dialect ---
  "Schnuddergoof": { s: 3, c: 4 }, // Snotty kid (Basel)
  "Dabisch": { s: 1, c: 4 }, // Stupid (Basel)
  // --- Luzern dialect ---
  "Löu": { s: 1, c: 4 }, // Idiot (Luzern)
  "Tschumpel": { s: 1, c: 4 }, // Fool (Luzern)

  // ========================================
  // === Bavarian / Southern German (Ext) ==
  // ========================================
  "Saupreiss": { s: 3, c: 4 }, // Dirty Prussian (Bavarian variant)
  "Saugrantiger": { s: 3, c: 4 }, // Pig grumpy person (Bavarian)
  "Sauglump": { s: 3, c: 4 }, // Pig scoundrel (Bavarian)
  "Saudackel": { s: 1, c: 4 }, // Pig dachshund (Bavarian idiot)
  "Sauhautn": { s: 3, c: 4 }, // Pig skin (Bavarian, worthless)
  "Sauzustand": { s: 3, c: 4 }, // Pig condition (Bavarian, terrible state)
  "Sauereiverein": { s: 3, c: 4 }, // Piggery club (Bavarian)
  "Kreuzfix": { s: 3, c: 4 }, // Crucifix (Bavarian exclamation variant)
  "Herrgottsakra": { s: 3, c: 4 }, // Lord god damn (Bavarian)
  "Leckts mi": { s: 3, c: 4 }, // Lick me (Bavarian dialect)
  "Leckts mi am Oasch": { s: 3, c: 4 }, // Lick my ass (Bavarian dialect)
  "Jessas": { s: 3, c: 4 }, // Jesus (Bavarian exclamation)
  "Jessas Maria": { s: 3, c: 4 }, // Jesus Mary (Bavarian exclamation)
  "Kruzefünferl": { s: 2, c: 3 }, // Crucifix fiver (Bavarian mild swear)
  "Fixlaudn": { s: 3, c: 4 }, // Damn (Bavarian exclamation)
  "Himmelsakra": { s: 3, c: 4 }, // Heaven damn (Bavarian)
  "Himmiherrgott": { s: 3, c: 4 }, // Heaven lord god (Bavarian variant)
  "Bisgurn": { s: 3, c: 4 }, // Nasty woman (Bavarian)
  "Dreckhammel": { s: 3, c: 4 }, // Dirty ram (Bavarian)
  "Dreckhirsch": { s: 3, c: 4 }, // Dirty deer (Bavarian)
  "Saubergl": { s: 3, c: 4 }, // Pig mountain (Bavarian)
  "Oachkatzlschwoaf": { s: 1, c: 4 }, // Squirrel tail (Bavarian tongue twister, mild insult)
  "Hodalump": { s: 4, c: 4 }, // Testicle ragamuffin (Bavarian)
  "Gfrieswarzerl": { s: 3, c: 4 }, // Face wart (Bavarian)
  "Misthammel": { s: 3, c: 4 }, // Manure ram (Bavarian)
  "Dutzlbimpfl": { s: 3, c: 4 }, // Little doofus (Bavarian)
  "Gschaftlhuaberin": { s: 3, c: 4 }, // Busybody woman (Bavarian)
  "Oaschgsicht": { s: 3, c: 4 }, // Ass face (Bavarian)
  "Glotzn": { s: 3, c: 4 }, // Staring eyes / TV (Bavarian)
  "Hundslump": { s: 3, c: 4 }, // Dog ragamuffin (Bavarian)
  "Lumpengsindl": { s: 3, c: 4 }, // Rag riff-raff (Bavarian)
  "Gschwanzl": { s: 3, c: 4 }, // Little tail (Bavarian)
  "Sackzement": { s: 3, c: 4 }, // Sack cement (Bavarian exclamation)
  "Sapperment": { s: 3, c: 4 }, // Sacrament (Bavarian exclamation variant)
  "Potztausend": { s: 3, c: 4 }, // God thousand (Bavarian exclamation)

  // ========================================
  // === Sexual Terms (Extended) ===========
  // ========================================
  "Analperle": { s: 4, c: 4 }, // Anal bead
  "Analpflaume": { s: 4, c: 4 }, // Anal plum (hemorrhoid)
  "Arschgefickt": { s: 4, c: 5 }, // Ass-fucked
  "Arschgefickter": { s: 4, c: 5 }, // Ass-fucked person
  "Bückstück": { s: 4, c: 4 }, // Bend-piece (sexually submissive person, derogatory)
  "Doppelpenetration": { s: 4, c: 4 }, // Double penetration
  "Flotter Dreier": { s: 4, c: 4 }, // Quick threesome
  "Fremdgehen": { s: 4, c: 4 }, // Cheating (sexual)
  "Fremdvögeln": { s: 4, c: 4 }, // Foreign-birding (cheating)
  "Geile Sau": { s: 4, c: 4 }, // Horny sow
  "Geiler Bock": { s: 4, c: 4 }, // Horny buck
  "Gummipuppe": { s: 4, c: 4 }, // Rubber doll (sex doll)
  "Hodenlecker": { s: 4, c: 4 }, // Testicle licker
  "Kitzler": { s: 4, c: 4 }, // Clitoris (slang)
  "Lustgrotte": { s: 4, c: 4 }, // Pleasure grotto (vagina slang)
  "Lustspalte": { s: 4, c: 4 }, // Pleasure slit (vagina slang)
  "Mösenfurz": { s: 4, c: 4 }, // Pussy fart (queef)
  "Nuttensohn": { s: 4, c: 4 }, // Hooker's son
  "Pornostar": { s: 4, c: 4 }, // Porn star
  "Pornosau": { s: 4, c: 4 }, // Porn pig
  "Sadomasochist": { s: 4, c: 4 }, // Sadomasochist
  "Schlampenstecher": { s: 4, c: 5 }, // Slut fucker
  "Schwanzlecker": { s: 4, c: 4 }, // Dick licker
  "Schwanzlurch": { s: 4, c: 4 }, // Dick newt (insult)
  "Spermafleck": { s: 4, c: 4 }, // Cum stain
  "Spermafresse": { s: 4, c: 4 }, // Cum face
  "Spermaschlucker": { s: 4, c: 4 }, // Cum swallower
  "Stiernacken": { s: 4, c: 4 }, // Bull neck (can be derogatory)
  "Stripperin": { s: 4, c: 4 }, // Stripper (female)
  "Stripper": { s: 4, c: 4 }, // Stripper (male)
  "Tiefbläserin": { s: 4, c: 4 }, // Deep blower (female)
  "Analratte": { s: 4, c: 4 }, // Anal rat

  // ========================================
  // === Homophobic / Transphobic (Ext) ====
  // ========================================
  "Schwulette": { s: 5, c: 4 }, // Gay-ette (derogatory for gay man)
  "Schwuli": { s: 5, c: 4 }, // Gay (diminutive, derogatory)
  "Arschbaron": { s: 5, c: 4 }, // Ass baron (derogatory for gay man)
  "Rosettenlecker": { s: 5, c: 4 }, // Rosette licker (derogatory, homophobic)
  "Hinterladerer": { s: 5, c: 4 }, // Rear-loader variant (derogatory for gay man)
  "Stehpinkler": { s: 5, c: 4 }, // Stand pisser (derogatory for male)
  "Sitzpinkler": { s: 5, c: 4 }, // Sit pisser (derogatory for unmasculine man)
  "Puppe": { s: 5, c: 4 }, // Doll (derogatory for effeminate man)
  "Tucke": { s: 5, c: 4 }, // Fairy (derogatory for gay/effeminate man)
  "Schwulenpack": { s: 5, c: 4 }, // Gay pack (derogatory)
  "Schwulenpest": { s: 5, c: 4 }, // Gay plague (derogatory)
  "Transenpack": { s: 5, c: 4 }, // Tranny pack (derogatory)
  "Drag": { s: 3, c: 4 }, // Drag (used derogatorily)
  "Warmer": { s: 3, c: 4 }, // Warm one (derogatory, shortform)
  "Lederarsch": { s: 3, c: 4 }, // Leather ass (derogatory for gay man)
  "Regenbogenarsch": { s: 3, c: 4 }, // Rainbow ass (derogatory for gay)
  "Perverser": { s: 3, c: 4 }, // Pervert
  "Perverse": { s: 3, c: 4 }, // Pervert (female)

  // ========================================
  // === Ethnic / Racial Slurs (Extended) ==
  // ========================================
  "Bohnenfresser": { s: 5, c: 4 }, // Bean eater (derogatory for Turks)
  "Dönerfresser": { s: 5, c: 4 }, // Kebab eater (derogatory for Turks)
  "Kopftuchbrigade": { s: 5, c: 4 }, // Headscarf brigade (derogatory for Muslim women)
  "Tschuschenbande": { s: 5, c: 4 }, // Foreigner gang (Austrian slur)
  "Tschuschenpack": { s: 5, c: 4 }, // Foreigner pack (Austrian slur)
  "Negerpack": { s: 5, c: 5 }, // Negro pack (extremely offensive)
  "Negerkuss": { s: 5, c: 4 }, // Negro kiss (outdated offensive term)
  "Negerlein": { s: 5, c: 4 }, // Little Negro (condescending, offensive)
  "Judenratte": { s: 5, c: 5 }, // Jew rat (extremely offensive)
  "Judenscheiße": { s: 5, c: 5 }, // Jew shit (extremely offensive)
  "Türkensau": { s: 5, c: 5 }, // Turk sow (extremely offensive)
  "Asylant": { s: 5, c: 4 }, // Asylum seeker (used derogatorily)
  "Asylantenschwein": { s: 5, c: 5 }, // Asylum seeker pig (extremely offensive)
  "Asylantenpack": { s: 5, c: 5 }, // Asylum seeker pack (extremely offensive)
  "Scheinasylant": { s: 5, c: 4 }, // Fake asylum seeker (derogatory)
  "Wirtschaftsflüchtling": { s: 5, c: 4 }, // Economic refugee (used derogatorily)
  "Ausländerschwein": { s: 5, c: 4 }, // Foreigner pig (derogatory)
  "Kümmelspalter": { s: 5, c: 4 }, // Cumin splitter (derogatory for Turks)
  "Zigeunerabschaum": { s: 5, c: 5 }, // Gypsy scum (extremely offensive)
  "Schlitzaugen": { s: 5, c: 4 }, // Slit-eyes plural (offensive for East Asians)
  "Schluchtenscheißer": { s: 5, c: 5 }, // Gorge shitter (derogatory for Austrians)
  "Schwabenhass": { s: 5, c: 4 }, // Swabian hate (regional prejudice)
  "Preißn": { s: 5, c: 4 }, // Prussians (derogatory, Bavarian spelling)
  "Ossi": { s: 5, c: 4 }, // Derogatory for East German
  "Wessi": { s: 5, c: 4 }, // Derogatory for West German
  "Zoni": { s: 5, c: 4 }, // Derogatory for East German (from Zone)
  "Kuffar": { s: 5, c: 4 }, // Infidel (Arabic, used in German context)
  "Kanakenbrut": { s: 5, c: 5 }, // Foreigner brood (extremely offensive)
  "Negerbrut": { s: 5, c: 5 }, // Negro brood (extremely offensive)
  "Zigeunergfrast": { s: 5, c: 5 }, // Gypsy pest (extremely offensive, Austrian)

  // ========================================
  // === Internet / Youth Slang (Ext 2) ====
  // ========================================
  "Amina koyim": { s: 2, c: 3 }, // Full Turkish vulgar phrase used in German
  "Orospu": { s: 5, c: 4 }, // Turkish: whore (used in German youth slang)
  "Orospu çocuğu": { s: 5, c: 5 }, // Turkish: son of a whore (used in German)
  "Eşek": { s: 2, c: 3 }, // Turkish: donkey (used as insult in German)
  "Sikerim": { s: 3, c: 5 }, // Turkish: I'll fuck (used in German youth slang)
  "Siktir": { s: 3, c: 5 }, // Turkish: fuck off (used in German youth slang)
  "Siktir git": { s: 3, c: 5 }, // Turkish: fuck off go (used in German)
  "Ibne": { s: 2, c: 3 }, // Turkish: faggot (used in German youth slang)
  "Oç": { s: 5, c: 5 }, // Turkish abbreviation for son of a whore (used in German)
  "Ya siktir": { s: 3, c: 5 }, // Turkish: oh fuck off (used in German)
  "Lan Amk": { s: 3, c: 5 }, // Dude fuck (Turkish-German slang)
  "Cüs": { s: 2, c: 3 }, // Exclamation (Turkish-German slang, can be offensive)
  "Kanacke": { s: 2, c: 3 }, // Slur variant spelling
  "Schabracke": { s: 2, c: 3 }, // Old nag (derogatory for women)
  "Pissgurke": { s: 2, c: 3 }, // Piss cucumber (pathetic person)
  "Pissgeburt": { s: 2, c: 3 }, // Piss birth (offensive)
  "Drecksjude": { s: 2, c: 3 }, // Dirty Jew (extremely offensive)
  "Dreckskanake": { s: 2, c: 3 }, // Dirty foreigner slur (extremely offensive)
  "Drecksassi": { s: 2, c: 3 }, // Dirty trashy person
  "Dreckshartzer": { s: 2, c: 3 }, // Dirty welfare recipient (derogatory)
  "Hurensohnverein": { s: 5, c: 5 }, // Son of a whore club (insult for sports teams)
  "Cringe": { s: 2, c: 3 }, // Cringe (used in German youth slang as insult)
  "Lost": { s: 2, c: 3 }, // Lost (used in German youth slang as insult)
  "Toxic": { s: 2, c: 3 }, // Toxic (used in German youth slang)
  "Bratan": { s: 2, c: 3 }, // Brother (Russian-German slang, can be offensive)
  "Blyat": { s: 3, c: 4 }, // Bitch (Russian, used in German youth slang)
  "Suka": { s: 3, c: 4 }, // Bitch (Russian, used in German youth slang)
  "Cyka Blyat": { s: 3, c: 4 }, // Russian obscenity used in German gaming
  "Ehre genommen": { s: 2, c: 3 }, // Honor taken (youth slang for humiliated)
  "Müllkind": { s: 2, c: 3 }, // Trash child
  "Abfallmensch": { s: 2, c: 3 }, // Garbage human
  "Fickjunge": { s: 3, c: 5 }, // Fuck boy
  "Fickboy": { s: 3, c: 5 }, // Fuck boy (English hybrid)
  "Bitch": { s: 3, c: 4 }, // Bitch (English, used in German)
  "Motherfucker": { s: 5, c: 5 }, // Motherfucker (English, used in German)
  "Son of a bitch": { s: 3, c: 5 }, // (English, used in German)
  "Nullchecker": { s: 2, c: 3 }, // Zero checker (clueless person)
  "Aldi-Kind": { s: 2, c: 3 }, // Aldi child (cheap/poor person)
  "Hartz-IV-Empfänger": { s: 2, c: 3 }, // Welfare recipient (used as insult)
  "Sozialschmarotzer": { s: 2, c: 3 }, // Social parasite
  "Sozialparasit": { s: 2, c: 3 }, // Social parasite variant
  "1 Pansen": { s: 2, c: 5 }, // One paunch (youth meme insult)

  // ========================================
  // === Miscellaneous Compounds ===========
  // ========================================
  "Klobrille": { s: 3, c: 5 }, // Toilet seat (insult)
  "Klobürste": { s: 3, c: 5 }, // Toilet brush (insult)
  "Pissbecken": { s: 3, c: 5 }, // Piss basin (insult)
  "Toilettenbürste": { s: 3, c: 5 }, // Toilet brush (insult)
  "Kackhaus": { s: 3, c: 5 }, // Shit house
  "Mistbiene": { s: 3, c: 5 }, // Manure bee (annoying person)
  "Mistkäfer": { s: 3, c: 5 }, // Dung beetle (insult)
  "Mistbock": { s: 3, c: 5 }, // Manure buck (scoundrel)
  "Mistgeburt": { s: 3, c: 5 }, // Manure birth (variant of Missgeburt)
  "Mistsack": { s: 3, c: 5 }, // Manure sack (scumbag)
  "Mistkarren": { s: 3, c: 5 }, // Manure cart (terrible vehicle/situation)
  "Schandfleck": { s: 3, c: 5 }, // Shame stain (disgrace)
  "Schandtat": { s: 3, c: 5 }, // Shameful deed
  "Schändlich": { s: 3, c: 5 }, // Shameful
  "Dummbacke": { s: 1, c: 4 }, // Dumb cheek (fool)
  "Dummfick": { s: 1, c: 4 }, // Dumb fuck
  "Dummficker": { s: 1, c: 4 }, // Dumb fucker
  "Dummfotze": { s: 1, c: 4 }, // Dumb cunt
  "Hirnfick": { s: 3, c: 5 }, // Brain fuck
  "Kopffick": { s: 3, c: 5 }, // Head fuck
  "Mindfuck": { s: 3, c: 5 }, // Mindfuck (English, used in German)
  "Holzkopp": { s: 3, c: 5 }, // Wooden head (Plattdeutsch)
  "Holzfresse": { s: 3, c: 5 }, // Wooden face (insult)
  "Lullibumm": { s: 4, c: 5 }, // Penis boom (silly person)
  "Pimmelberger": { s: 4, c: 5 }, // Dick mountain (silly insult)
  "Sacknase": { s: 4, c: 5 }, // Scrotum nose
  "Sackbieber": { s: 4, c: 5 }, // Scrotum beaver
  "Sackklammer": { s: 4, c: 5 }, // Scrotum clamp
  "Schwanzbirne": { s: 4, c: 5 }, // Dick pear
  "Schwanzkopf": { s: 4, c: 5 }, // Dick head
  "Tittenarsch": { s: 4, c: 5 }, // Tit-ass
  "Titten raus": { s: 4, c: 5 }, // Tits out
  "Mösenknecht": { s: 4, c: 5 }, // Pussy servant (simp)
  "Mösenmeister": { s: 4, c: 5 }, // Pussy master (vulgar brag)
  "Muschigesicht": { s: 4, c: 5 }, // Pussy face
  "Muschifurz": { s: 4, c: 5 }, // Pussy fart
  "Muschilappen": { s: 4, c: 5 }, // Pussy cloth
  "Eiergesicht": { s: 4, c: 5 }, // Egg face (testicle face)
  "Eierkopf": { s: 3, c: 5 }, // Egg head (intellectual, derogatory)
  "Eierlecker": { s: 4, c: 5 }, // Egg/testicle licker
  "Eierschaukler": { s: 3, c: 5 }, // Egg swinger (lazy person, Austrian)
  "Samenschleuder": { s: 3, c: 5 }, // Sperm slingshot (promiscuous man)
  "Samenspender": { s: 1, c: 4 }, // Sperm donor (derogatory for father)
  "Gebärkuh": { s: 3, c: 5 }, // Birth cow (derogatory for mother)
  "Gebärmaschine": { s: 3, c: 5 }, // Birth machine (derogatory for mother)
  "Abmelkstation": { s: 3, c: 5 }, // Milking station (derogatory for woman)
  "Sexsklavin": { s: 3, c: 5 }, // Sex slave (female)
  "Sexobjekt": { s: 3, c: 5 }, // Sex object
  "Brüste": { s: 4, c: 5 }, // Breasts (vulgar in context)
  "Ständerfotze": { s: 5, c: 5 }, // Boner cunt
  "Lümmellutscher": { s: 4, c: 5 }, // Lout sucker (cocksucker variant)
  "Pimmellutscher": { s: 4, c: 5 }, // Dick sucker
  "Nutten": { s: 3, c: 5 }, // Hookers (plural)
  "Nutte vom Bahnhof": { s: 3, c: 5 }, // Station hooker
  "Bahnhofsnutte": { s: 3, c: 5 }, // Station hooker (compound)
  "Straßennutte": { s: 3, c: 5 }, // Street hooker
  "Billignutte": { s: 3, c: 5 }, // Cheap hooker

  // ========================================
  // === Compound Insults & Combinations ===
  // ========================================
  "Drecksarsch": { s: 3, c: 4 }, // Dirty ass
  "Drecksspast": { s: 1, c: 4 }, // Dirty spaz
  "Mistkröte": { s: 1, c: 4 }, // Crap toad (insult)
  "Mistsau": { s: 1, c: 4 }, // Manure sow
  "Mistweib": { s: 1, c: 4 }, // Crap woman
  "Vollhonk": { s: 1, c: 4 }, // Complete honk (idiot)
  "Vollspacko": { s: 1, c: 4 }, // Complete weirdo
  "Vollnull": { s: 1, c: 4 }, // Complete zero
  "Obertrottel": { s: 1, c: 4 }, // Supreme fool
  "Oberarsch": { s: 3, c: 4 }, // Supreme ass
  "Oberdepp": { s: 1, c: 4 }, // Supreme moron
  "Oberdummkopf": { s: 1, c: 4 }, // Supreme dumbhead
  "Oberidiot": { s: 1, c: 4 }, // Supreme idiot
  "Oberloser": { s: 1, c: 4 }, // Supreme loser
  "Oberpenner": { s: 1, c: 4 }, // Supreme bum
  "Oberspast": { s: 1, c: 4 }, // Supreme spaz
  "Schwanzfresse": { s: 4, c: 4 }, // Cock face (vulgar)
  "Schwanznase": { s: 4, c: 4 }, // Cock nose
  "Arschtreter": { s: 3, c: 4 }, // Ass kicker
  "Arschwarze": { s: 3, c: 4 }, // Ass wart
  "Kackscheißer": { s: 3, c: 5 }, // Shit shitter
  "Kotzgesicht": { s: 1, c: 4 }, // Vomit face
  "Kotzbeutel": { s: 1, c: 4 }, // Vomit bag
  "Kotzfresse": { s: 1, c: 4 }, // Vomit face (vulgar)
  "Fickfrosch": { s: 3, c: 5 }, // Fuck frog
  "Fickvieh": { s: 3, c: 5 }, // Fuck beast
  "Fickscheißer": { s: 3, c: 5 }, // Fuck shitter
  "Scheiß drauf": { s: 3, c: 5 }, // Shit on it
  "Scheißerei": { s: 3, c: 5 }, // Diarrhea / shit storm
  "Scheißfresse": { s: 3, c: 5 }, // Shit face
  "Scheißkram": { s: 3, c: 5 }, // Shitty stuff
  "Scheißteil": { s: 3, c: 5 }, // Shitty part
  "Hurenbande": { s: 5, c: 4 }, // Whore gang
  "Nutzlose Drecksau": { s: 1, c: 4 }, // Useless dirty sow
  "Dumme Sau": { s: 1, c: 4 }, // Stupid sow
  "Dummer Wichser": { s: 1, c: 4 }, // Stupid wanker
  "Blöde Sau": { s: 1, c: 4 }, // Stupid sow
  "Blöder Sack": { s: 1, c: 4 }, // Stupid sack
  "Blöder Affe": { s: 1, c: 4 }, // Stupid monkey
  "Fettes Schwein": { s: 1, c: 4 }, // Fat pig
  "Fette Kuh": { s: 1, c: 4 }, // Fat cow
  "Fetter Wichser": { s: 1, c: 4 }, // Fat wanker
  "Fette Schlampe": { s: 1, c: 4 }, // Fat slut
  "Fetter Arsch": { s: 1, c: 4 }, // Fat ass
  "Fetter Idiot": { s: 1, c: 4 }, // Fat idiot
  "Altes Weib": { s: 1, c: 4 }, // Old woman (derog.)
  "Alte Schachtel": { s: 1, c: 4 }, // Old box (old hag)
  "Alte Hexe": { s: 1, c: 4 }, // Old witch
  "Alte Schabracke": { s: 1, c: 4 }, // Old nag
  "Alter Bock": { s: 1, c: 4 }, // Old buck (old goat)
  "Kleiner Wichser": { s: 1, c: 4 }, // Little wanker
  "Kleiner Pisser": { s: 1, c: 4 }, // Little pisser
  "Kleines Arschloch": { s: 3, c: 4 }, // Little asshole

  // ========================================
  // === Austrian Dialect ==================
  // ========================================
  "Oasch": { s: 3, c: 4 }, // Ass (Austrian)
  "Gscherte": { s: 3, c: 4 }, // Uncouth person (Austrian)
  "Zipflklatscher": { s: 4, c: 4 }, // Dick slapper (Austrian insult)
  "Lulu": { s: 4, c: 4 }, // Pee/penis (Austrian childish)
  "Kiberer": { s: 3, c: 4 }, // Cop (Austrian derog.)
  "Oarschleckah": { s: 3, c: 4 }, // Ass licker (Austrian)
  "Schnaxler": { s: 3, c: 5 }, // Fucker (Austrian)
  "Hoschoh": { s: 3, c: 4 }, // Weirdo (Austrian)
  "Plutzer": { s: 3, c: 4 }, // Pumpkin / head (Austrian)
  "Leck mi": { s: 3, c: 4 }, // Lick me (Austrian)
  "Leck mi am Oasch": { s: 3, c: 4 }, // Kiss my ass (Austrian)
  "Granatenscheißer": { s: 3, c: 5 }, // Grenade shitter (Austrian insult)
  "Bsuff": { s: 1, c: 3 }, // Drunk (Austrian)
  "Bsuffener": { s: 1, c: 3 }, // Drunkard (Austrian)
  "Saubeutel": { s: 3, c: 4 }, // Pig bag (Austrian insult)
  "Saufratze": { s: 3, c: 4 }, // Sow face (Austrian)

  // ========================================
  // === Swiss German Dialect ==============
  // ========================================
  "Schiisdräck": { s: 3, c: 5 }, // Shit dirt (Swiss)
  "Gopferdami": { s: 3, c: 4 }, // God damn it (Swiss)
  "Huäresiech": { s: 5, c: 4 }, // Whore sick (Swiss profanity)
  "Cheibs": { s: 3, c: 4 }, // Damned (Swiss)
  "Cheibdreck": { s: 3, c: 4 }, // Damned dirt (Swiss)
  "Saugoof": { s: 3, c: 4 }, // Pig brat (Swiss)
  "Huerä": { s: 3, c: 5 }, // Fucking / damned (Swiss intensifier)
  "Schnure": { s: 3, c: 4 }, // Mouth / shut up (Swiss derog.)
  "Fötzel": { s: 3, c: 4 }, // Scoundrel (Swiss)
  "Chalb": { s: 1, c: 4 }, // Calf / idiot (Swiss)
  "Schiisser": { s: 1, c: 4 }, // Shitter / coward (Swiss)
  "Grindchopf": { s: 3, c: 4 }, // Headhead / stubborn (Swiss)
  "Hodesack": { s: 3, c: 4 }, // Ball sack (Swiss)
  "Futschigoof": { s: 4, c: 4 }, // Vagina brat (Swiss)

  // ========================================
  // === Bavarian Dialect ==================
  // ========================================
  "Preiß": { s: 3, c: 4 }, // Prussian (Bavarian pejorative)
  "Deppat": { s: 1, c: 4 }, // Stupid (Bavarian)
  "Gschaftlhuaber": { s: 3, c: 4 }, // Busybody (Bavarian)
  "Kreizbirnbaum": { s: 3, c: 4 }, // Cross pear tree (Bavarian swear)
  "Kruzifünferl": { s: 2, c: 3 }, // Cross fiver (Bavarian mild swear)
  "Hundling": { s: 3, c: 4 }, // Little dog (Bavarian insult)
  "Hundsgrippl": { s: 3, c: 4 }, // Dog cripple (Bavarian)
  "Haderlump": { s: 3, c: 4 }, // Rag rogue (Bavarian)
  "Luader": { s: 3, c: 4 }, // Hussy (Bavarian variant)
  "Deifelsbrut": { s: 3, c: 4 }, // Devil's brood (Bavarian)
  "Dampfplauderer": { s: 3, c: 4 }, // Steam chatterer (Bavarian blowhard)
  "Depperte": { s: 1, c: 4 }, // Stupid one female (Bavarian)
  "Depperter": { s: 1, c: 4 }, // Stupid one male (Bavarian)
  "Hallodri": { s: 3, c: 4 }, // Rascal (Bavarian)
  "Schoaßdrumml": { s: 3, c: 4 }, // Fart drum (Bavarian)
  "Sauguat": { s: 3, c: 4 }, // Pig good / damn good (Bavarian)
  "Saubledsinnig": { s: 1, c: 4 }, // Pig stupid (Bavarian)
  "Zwiderwurzn": { s: 3, c: 4 }, // Contrary root (grumpy person, Bavarian)
  "Ratschkathl": { s: 3, c: 4 }, // Gossip woman (Bavarian)

  // ========================================
  // === Swabian Dialect ===================
  // ========================================
  "Sauluadr": { s: 3, c: 4 }, // Pig hussy (Swabian)
  "Schofseckel": { s: 4, c: 4 }, // Sheep scrotum (Swabian insult)
  "Seggl": { s: 1, c: 4 }, // Scrotum / idiot (Swabian)
  "Saubladr": { s: 3, c: 4 }, // Pig bladder (Swabian insult)
  "Schlitzohr": { s: 3, c: 4 }, // Slit ear / cunning person (Swabian)
  "Graddler": { s: 3, c: 4 }, // Scruffy (Swabian)
  "Luschd": { s: 3, c: 4 }, // Lazy/sloppy (Swabian)
  "Lombaseggl": { s: 4, c: 4 }, // Rag scrotum (Swabian insult)
  "Dreggsbeidl": { s: 3, c: 4 }, // Dirty bag (Swabian)
  "Brunzdeggl": { s: 3, c: 4 }, // Piss lid (Swabian)
  "Maulheld": { s: 3, c: 4 }, // Mouth hero (Swabian blowhard)
  "Schlotzer": { s: 3, c: 4 }, // Slobberer (Swabian)
  "Siachkropf": { s: 3, c: 4 }, // Sick crop (Swabian insult)
  "Suppaschwob": { s: 3, c: 4 }, // Soup Swabian (insult)

  // ========================================
  // === Saxon Dialect =====================
  // ========================================
  "Dähämull": { s: 1, c: 4 }, // Dumbmouth (Saxon)
  "Glootzn": { s: 3, c: 4 }, // Staring eyes (Saxon derog.)
  "Gorsche": { s: 3, c: 4 }, // Big mouth (Saxon)
  "Widerborschd": { s: 3, c: 4 }, // Contrary bristle / stubborn (Saxon)
  "Drecksach": { s: 3, c: 4 }, // Dirt thing (Saxon)
  "Nischel": { s: 3, c: 4 }, // Head / noggin (Saxon derog.)
  "Scheese": { s: 3, c: 4 }, // Jalopy / bad thing (Saxon)
  "Hämfull": { s: 3, c: 4 }, // Mouthful (Saxon insult)
  "Dämlicher Sachse": { s: 1, c: 4 }, // Stupid Saxon (self-deprecating)
  "Bleedmann": { s: 1, c: 4 }, // Stupid man (Saxon)

  // ========================================
  // === Berlin Dialect ====================
  // ========================================
  "Flitzpiepe": { s: 3, c: 4 }, // Speedy pipe (Berlin insult)
  "Jansen": { s: 3, c: 4 }, // Nobody (Berlin derog.)
  "Knallkopp": { s: 1, c: 4 }, // Bang head (Berlin idiot)
  "Laberbacke": { s: 3, c: 4 }, // Blabber cheek (Berlin)
  "Piesepampel": { s: 3, c: 4 }, // Fussy person (Berlin)
  "Pappnase": { s: 3, c: 4 }, // Cardboard nose (Berlin clown)
  "Schnauze": { s: 3, c: 4 }, // Snout / shut up (Berlin)
  "Ick fick dir": { s: 3, c: 5 }, // I fuck you (Berlin dialect)
  "Ick mach dir platt": { s: 3, c: 4 }, // I'll flatten you (Berlin)
  "Jibs keene Fresse": { s: 3, c: 4 }, // Shut your face (Berlin)
  "Deef": { s: 1, c: 4 }, // Stupid (Berlin)
  "Kackstelzen": { s: 3, c: 5 }, // Shit stilts (Berlin)
  "Nulpe": { s: 3, c: 4 }, // Zero / nobody (Berlin)

  // ========================================
  // === Ruhrpott Dialect ==================
  // ========================================
  "Kohlenpansen": { s: 3, c: 4 }, // Coal belly (Ruhr insult)
  "Lusche": { s: 3, c: 4 }, // Wimp (Ruhr)
  "Luschi": { s: 3, c: 4 }, // Wimpy (Ruhr)
  "Pummelchen": { s: 3, c: 4 }, // Chubby one (Ruhr derog.)
  "Hömma": { s: 3, c: 4 }, // Listen here (Ruhr, can be aggressive)

  // ========================================
  // === Plattdeutsch (Low German) =========
  // ========================================
  "Drögbansen": { s: 3, c: 4 }, // Dry belly (Low German insult)
  "Klookschieter": { s: 3, c: 5 }, // Smart shitter (Low German know-it-all)
  "Lüttje Schietkeerl": { s: 3, c: 5 }, // Little shit guy (Low German)
  "Schietkram": { s: 3, c: 5 }, // Shit stuff (Low German)
  "Snieder": { s: 3, c: 4 }, // Snot (Low German)
  "Slickscheeter": { s: 3, c: 5 }, // Slick shitter (Low German)
  "Kansen": { s: 3, c: 4 }, // Trash (Low German)
  "Swienegel": { s: 3, c: 4 }, // Pig hedgehog (Low German)
  "Swien": { s: 3, c: 4 }, // Pig (Low German)

  // ========================================
  // === Franconian Dialect ================
  // ========================================
  "Dabbschädl": { s: 3, c: 4 }, // Clumsy skull (Franconian)
  "Grischberla": { s: 3, c: 4 }, // Little groaner (Franconian)
  "Graaddaggl": { s: 1, c: 4 }, // Straight dachshund (Franconian idiot)
  "Hadderlump": { s: 3, c: 4 }, // Rag rogue (Franconian)
  "Lulasch": { s: 3, c: 4 }, // Gangly person (Franconian)
  "Schelm": { s: 3, c: 4 }, // Rogue (Franconian)
  "Seidla": { s: 1, c: 3 }, // Beer mug / drunkard (Franconian)

  // ========================================
  // === Sexual Terms & Compounds ==========
  // ========================================
  "Analfick": { s: 4, c: 5 }, // Anal fuck
  "Analgeburt": { s: 4, c: 4 }, // Anal birth (insult)
  "Doggy": { s: 3, c: 4 }, // Doggy style
  "Kehlenfick": { s: 3, c: 5 }, // Throat fuck
  "Lustsklavin": { s: 3, c: 4 }, // Pleasure slave (f.)
  "Lustobjekt": { s: 3, c: 4 }, // Lust object
  "Masturbieren": { s: 4, c: 4 }, // To masturbate
  "Mösenlikör": { s: 4, c: 4 }, // Pussy liquor (very vulgar)
  "Mösenlutscher": { s: 4, c: 4 }, // Pussy sucker
  "Nuttenficker": { s: 5, c: 5 }, // Whore fucker
  "Onanieren": { s: 4, c: 4 }, // To masturbate (formal)
  "Pornoschlampe": { s: 3, c: 4 }, // Porn slut
  "Pornofotze": { s: 5, c: 5 }, // Porn cunt
  "Rammler": { s: 3, c: 5 }, // Someone who fucks a lot
  "Reiten": { s: 3, c: 4 }, // To ride (sexual)
  "Reindrücken": { s: 3, c: 4 }, // To push in (sexual)
  "Spermaschluckerin": { s: 3, c: 4 }, // Sperm swallower (f.)
  "Spritzen": { s: 3, c: 4 }, // To squirt / ejaculate
  "Stöhnen": { s: 3, c: 4 }, // To moan (sexual)
  "Tierficker": { s: 3, c: 5 }, // Animal fucker
  "Tittenfick": { s: 4, c: 5 }, // Tit fuck
  "Tittenlutscher": { s: 4, c: 4 }, // Tit sucker
  "Triebhaft": { s: 3, c: 4 }, // Driven by urges
  "Triebtäter": { s: 3, c: 4 }, // Sex offender
  "Wichsgriffell": { s: 4, c: 4 }, // Wank pen (dick)
  "Einlochen": { s: 3, c: 4 }, // To hole (sexual)
  "Fummeln": { s: 3, c: 4 }, // To grope
  "Fummelei": { s: 3, c: 4 }, // Groping
  "Geschlechtskrankheit": { s: 3, c: 4 }, // STD
  "Nympho": { s: 3, c: 4 }, // Nympho
  "Porno": { s: 3, c: 4 }, // Porn
  "Pornografie": { s: 3, c: 4 }, // Pornography
  "Puffbesuch": { s: 3, c: 4 }, // Brothel visit
  "Puffgänger": { s: 3, c: 4 }, // Brothel goer
  "Puffmutter": { s: 3, c: 4 }, // Brothel mother (madam)
  "Stricherin": { s: 5, c: 4 }, // Female prostitute (streetwalker)
  "Tripper": { s: 3, c: 4 }, // Gonorrhea
  "Syphilis": { s: 3, c: 4 }, // Syphilis
  "Cockring": { s: 4, c: 4 }, // Cock ring
  "Fesselspiel": { s: 3, c: 4 }, // Bondage play
  "Fetisch": { s: 3, c: 4 }, // Fetish
  "Pädophiler": { s: 5, c: 5 }, // Pedophile
  "Kinderschänder": { s: 3, c: 4 }, // Child molester
  "Vergewaltiger": { s: 5, c: 5 }, // Rapist
  "Vergewaltigung": { s: 5, c: 5 }, // Rape
  "Orgienmeister": { s: 3, c: 4 }, // Orgy master

  // ========================================
  // === Scatological Terms ================
  // ========================================
  "Dünnschiss": { s: 3, c: 5 }, // Diarrhea (thin shit)
  "Durchfall": { s: 3, c: 4 }, // Diarrhea
  "Furz": { s: 3, c: 4 }, // Fart
  "Fürze": { s: 3, c: 4 }, // Farts (plural)
  "Furzgesicht": { s: 3, c: 4 }, // Fart face
  "Furzknoten": { s: 3, c: 4 }, // Fart knot
  "Furztrocken": { s: 3, c: 4 }, // Fart dry (very dry)
  "Kacker": { s: 3, c: 5 }, // Shitter
  "Kackstift": { s: 3, c: 5 }, // Shit pen (annoying child)
  "Klolektüre": { s: 3, c: 4 }, // Toilet reading
  "Kloschlüssel": { s: 1, c: 4 }, // Toilet key (idiot)
  "Pinkel": { s: 3, c: 4 }, // Pee/pisser
  "Pinkler": { s: 3, c: 4 }, // Pisser
  "Pisskrüppel": { s: 3, c: 4 }, // Piss cripple
  "Pipi": { s: 3, c: 4 }, // Pee pee
  "Pupser": { s: 3, c: 4 }, // Tooter (farter)
  "Rotze": { s: 3, c: 4 }, // Snot
  "Rotzfahne": { s: 3, c: 4 }, // Snot flag (hanky)
  "Rotzlappen": { s: 3, c: 4 }, // Snot rag
  "Schiss": { s: 3, c: 5 }, // Shit / fear
  "Schisskram": { s: 3, c: 5 }, // Shit stuff
  "Stuhlgang": { s: 3, c: 4 }, // Bowel movement

  // ========================================
  // === Intelligence Insults ==============
  // ========================================
  "Backpfeifengesicht": { s: 1, c: 4 }, // Face in need of a slap
  "Banane": { s: 1, c: 4 }, // Banana (idiot)
  "Blockflöte": { s: 1, c: 4 }, // Recorder (useless person)
  "Bratapfel": { s: 1, c: 4 }, // Baked apple (red-faced idiot)
  "Dampfnudel": { s: 1, c: 4 }, // Steam noodle (chubby idiot)
  "Doofkopp": { s: 1, c: 4 }, // Dumb head
  "Doofmann": { s: 1, c: 4 }, // Dumb man
  "Dösbirne": { s: 1, c: 4 }, // Drowsy pear (dim person)
  "Evolutionsversager": { s: 1, c: 4 }, // Evolution failure
  "Fachidiot": { s: 1, c: 4 }, // Subject idiot (one-track mind)
  "Fettnäpfchen": { s: 1, c: 4 }, // Fat bowl (social blunder)
  "Flasche": { s: 1, c: 4 }, // Bottle / loser
  "Gehirnakrobat": { s: 1, c: 4 }, // Brain acrobat (sarcastic)
  "Gehirnamputation": { s: 1, c: 4 }, // Brain amputation
  "Geistesgestörter": { s: 1, c: 4 }, // Mentally disturbed
  "Geisteszwerg": { s: 1, c: 4 }, // Spirit dwarf
  "Grenzdebil": { s: 1, c: 4 }, // Borderline moronic
  "Grips": { s: 1, c: 4 }, // Brains (lack thereof)
  "Grützhirn": { s: 1, c: 4 }, // Grits brain
  "Gurkentruppe": { s: 1, c: 4 }, // Cucumber troop (useless group)
  "Hirnamputiert": { s: 1, c: 4 }, // Brain amputated
  "Hirnrissig": { s: 1, c: 4 }, // Brain-cracked (crazy)
  "Hirnverbrannt": { s: 1, c: 4 }, // Brain-burned
  "Hirnverbranntheit": { s: 1, c: 4 }, // Brain-burnedness
  "Hirnwindung": { s: 1, c: 4 }, // Brain convolution (sarcastic: having only one)
  "Honk": { s: 1, c: 4 }, // Idiot
  "Idiotenverein": { s: 1, c: 4 }, // Idiots club
  "Intelligenzbestie": { s: 1, c: 4 }, // Intelligence beast (sarcastic)
  "Intelligenzbolzen": { s: 1, c: 4 }, // Intelligence bolt (sarcastic)
  "Knallbirne": { s: 1, c: 4 }, // Bang pear (idiot)
  "Knallcharge": { s: 1, c: 4 }, // Bang extra (useless person)
  "Knallerbse": { s: 1, c: 4 }, // Bang pea (idiot)
  "Kohlkopf": { s: 1, c: 4 }, // Cabbage head
  "Lackel": { s: 1, c: 4 }, // Clumsy lout
  "Leuchte": { s: 1, c: 4 }, // Light (sarcastic for dim person)
  "Minderbemittelter": { s: 1, c: 4 }, // Under-endowed (mentally)
  "Mondkalb": { s: 1, c: 4 }, // Moon calf (dreamer)
  "Nappel": { s: 1, c: 4 }, // Dimwit
  "Nassauer": { s: 1, c: 4 }, // Freeloader / parasite
  "Niete": { s: 1, c: 4 }, // Dud / failure
  "Pantoffelheld": { s: 1, c: 4 }, // Slipper hero (henpecked)
  "Pflaume": { s: 1, c: 4 }, // Plum (useless person)
  "Pfeifenheini": { s: 1, c: 4 }, // Pipe Heini (useless person)
  "Rindvieh": { s: 1, c: 4 }, // Cattle (stupid person)
  "Schafskopf": { s: 1, c: 4 }, // Sheep head (stupid)
  "Schnarchnase": { s: 1, c: 4 }, // Snoring nose (sleepy person)
  "Schnarchsack": { s: 1, c: 4 }, // Snoring sack (sleepy person)
  "Stumpfsinn": { s: 1, c: 4 }, // Blunt sense (dullness)
  "Tölpel": { s: 1, c: 4 }, // Oaf
  "Trottelgesicht": { s: 1, c: 4 }, // Dunce face
  "Unterbelichteter": { s: 1, c: 4 }, // Underexposed (dim person)
  "Vollkoffer": { s: 1, c: 4 }, // Full suitcase (idiot, Austrian)
  "Witzfigur": { s: 1, c: 4 }, // Joke figure
  "Witzkanone": { s: 1, c: 4 }, // Joke cannon (sarcastic)
  "Zipfeklatscher": { s: 1, c: 4 }, // Dick slapper (idiot)

  // ========================================
  // === Appearance Insults ================
  // ========================================
  "Brillenschlange": { s: 3, c: 4 }, // Glasses snake
  "Fettarsch": { s: 1, c: 4 }, // Fat ass
  "Hängetitten": { s: 4, c: 4 }, // Saggy tits
  "Hässliche Fratze": { s: 1, c: 4 }, // Ugly mug
  "Pickelgesicht": { s: 1, c: 4 }, // Pimple face
  "Rüsseltier": { s: 1, c: 4 }, // Trunk animal (big nose)
  "Schiefmaul": { s: 1, c: 4 }, // Crooked mouth
  "Segelohren": { s: 1, c: 4 }, // Sail ears (big ears)
  "Walross": { s: 1, c: 4 }, // Walrus (fat person)
  "Watschenbaam": { s: 1, c: 4 }, // Slap tree (slappable face, Bavarian)
  "Zahnlückenfresse": { s: 1, c: 4 }, // Gap-toothed face

  // ========================================
  // === Behavioral Insults ================
  // ========================================
  "Angeberin": { s: 1, c: 4 }, // Show-off (f.)
  "Doppelzüngler": { s: 1, c: 4 }, // Double-tonguer (liar)
  "Feigling": { s: 1, c: 4 }, // Coward
  "Großmaul": { s: 1, c: 4 }, // Big mouth
  "Heulerin": { s: 1, c: 4 }, // Crier (f.)
  "Knauser": { s: 1, c: 4 }, // Miser
  "Krämerseele": { s: 1, c: 4 }, // Shopkeeper soul (petty)
  "Langfinger": { s: 1, c: 4 }, // Long finger (thief)
  "Lästerschwester": { s: 1, c: 4 }, // Gossip sister
  "Lügenbeutel": { s: 1, c: 4 }, // Lie bag (liar)
  "Lügenbaron": { s: 1, c: 4 }, // Lie baron
  "Lügenmaul": { s: 1, c: 4 }, // Lie mouth
  "Maulfaul": { s: 1, c: 4 }, // Mouth lazy (uncommunicative)
  "Nervtöter": { s: 1, c: 4 }, // Nerve killer
  "Petze": { s: 1, c: 4 }, // Snitch
  "Quasselstrippe": { s: 1, c: 4 }, // Chatter strip (chatterbox)
  "Radfahrer": { s: 1, c: 4 }, // Cyclist (sucks up, kicks down)
  "Saufkopf": { s: 1, c: 3 }, // Drunkard head
  "Schleimer": { s: 1, c: 4 }, // Slimer (sycophant)
  "Schleimsack": { s: 1, c: 4 }, // Slime sack
  "Schummler": { s: 1, c: 4 }, // Cheater
  "Schwarzfahrer": { s: 1, c: 4 }, // Fare dodger
  "Schwätzer": { s: 1, c: 4 }, // Blabberer
  "Stalker": { s: 1, c: 4 }, // Stalker
  "Stänkerer": { s: 1, c: 4 }, // Troublemaker
  "Störenfried": { s: 1, c: 4 }, // Disturber of peace
  "Tratschtante": { s: 1, c: 4 }, // Gossip aunt
  "Trittbrettfahrer": { s: 1, c: 4 }, // Running board rider (freeloader)
  "Unruhestifter": { s: 1, c: 4 }, // Troublemaker
  "Windbeutel": { s: 1, c: 4 }, // Cream puff (unreliable person)
  "Witzbold": { s: 1, c: 4 }, // Joker (derog.)

  // ========================================
  // === Slurs (Ethnic/Religious/LGBTQ) ====
  // ========================================
  "Russki": { s: 3, c: 4 }, // Slur for Russians
  "Zigeunerbrut": { s: 5, c: 4 }, // Roma brood (slur)
  "Zecke": { s: 5, c: 4 }, // Tick (slur for leftists)
  "Kartoffel": { s: 5, c: 4 }, // Potato (reverse slur for Germans)
  "Schwul": { s: 5, c: 4 }, // Gay (derog. usage)
  "Schwule Sau": { s: 5, c: 4 }, // Gay pig
  "Ladyboy": { s: 5, c: 5 }, // Ladyboy (derog.)
  "Spastiker": { s: 5, c: 4 }, // Spastic (ableist)
  "Mongoloid": { s: 5, c: 4 }, // Mongoloid (slur)
  "Behinderter": { s: 5, c: 4 }, // Disabled person (as insult)
  "Retardiert": { s: 5, c: 4 }, // Retarded
  "Judenpack": { s: 5, c: 4 }, // Jew pack (antisemitic)
  "Jude": { s: 5, c: 4 }, // Jew (when used as insult)
  "Islamist": { s: 5, c: 4 }, // Islamist (as slur)
  "Terroristenpack": { s: 5, c: 4 }, // Terrorist pack
  "Ausländer raus": { s: 5, c: 4 }, // Foreigners out
  "Asylschmarotzer": { s: 5, c: 4 }, // Asylum parasite
  "Asozial": { s: 5, c: 4 }, // Anti-social
  "Prollet": { s: 5, c: 4 }, // Prole
  "Proll": { s: 5, c: 4 }, // Prole (short)
  "Bonze": { s: 1, c: 4 }, // Fat cat (rich person insult)
  "Spießer": { s: 5, c: 4 }, // Philistine / square

  // ========================================
  // === Evasion Spellings =================
  // ========================================
  "Sche1ße": { s: 3, c: 5 }, // Scheiße variant
  "H.ure": { s: 3, c: 5 }, // Hure split
  "Hu.re": { s: 3, c: 5 }, // Hure with dot
  "Sch1ampe": { s: 3, c: 5 }, // Schlampe with 1
  "4rsch": { s: 3, c: 5 }, // Arsch with 4
  "Fo+ze": { s: 3, c: 5 }, // Fotze with +
  "Schw4nz": { s: 3, c: 5 }, // Schwanz with 4
  "P1mmel": { s: 3, c: 5 }, // Pimmel with 1
  "H0densack": { s: 3, c: 5 }, // Hodensack with 0
  "Schl4mpe": { s: 3, c: 5 }, // Schlampe with 4
  "Hu r e": { s: 3, c: 5 }, // Hure spaced
  "F i c k e n": { s: 3, c: 5 }, // Ficken spaced
  "A r s c h": { s: 3, c: 5 }, // Arsch spaced
  "F o t z e": { s: 3, c: 5 }, // Fotze spaced
  "W i c h s e r": { s: 3, c: 5 }, // Wichser spaced
  "Sch.eiße": { s: 3, c: 5 }, // With dot
  "S.cheiße": { s: 3, c: 5 }, // With dot
  "Ar$ch": { s: 3, c: 5 }, // Arsch with $
  "Ar$chloch": { s: 3, c: 5 }, // Arschloch with $
  "F1ckd1ch": { s: 3, c: 5 }, // Fick dich with 1s
  "Hu*e": { s: 3, c: 5 }, // Hure with star
  "Spaßt1": { s: 3, c: 5 }, // Spasti with 1
  "Sp@sti": { s: 3, c: 5 }, // Spasti with @
  "Sp4sti": { s: 3, c: 5 }, // Spasti with 4
  "Hür3nsohn": { s: 5, c: 5 }, // Hurensohn with 3
  "Hürënsohn": { s: 5, c: 5 }, // Hurensohn with accents
  "M1stgeburt": { s: 3, c: 5 }, // Mistgeburt with 1
  "M!stgeburt": { s: 3, c: 5 }, // Mistgeburt with !
  "Missgebvrt": { s: 3, c: 5 }, // Missgeburt with v
  "Mi$$geburt": { s: 3, c: 5 }, // Missgeburt with $$
  "Behindert3r": { s: 3, c: 5 }, // Behinderter with 3
  "B3hinderter": { s: 3, c: 5 }, // Behinderter with 3

  // ========================================
  // === Internet Slang & Gaming ===========
  // ========================================
  "MfG Fick dich": { s: 3, c: 5 }, // Regards, fuck you
  "Spacko": { s: 2, c: 3 }, // Weirdo
  "Nub": { s: 2, c: 3 }, // Noob variant
  "Boon": { s: 2, c: 3 }, // Noob variant
  "Lachnummer": { s: 2, c: 3 }, // Laughing number (joke person)
  "Alda": { s: 2, c: 3 }, // Dude (aggressive usage)
  "Hdf": { s: 5, c: 5 }, // Halt die Fresse (shut your face)
  "Hau ab": { s: 2, c: 3 }, // Piss off
  "Fick dich": { s: 3, c: 5 }, // Fuck you
  "Krebs": { s: 5, c: 5 }, // Cancer (death wish)
  "Kys": { s: 5, c: 5 }, // Kill yourself (gaming)
  "Rekt": { s: 3, c: 4 }, // Wrecked (gaming)
  "Trashtalker": { s: 3, c: 4 }, // Trash talker
  "Salty": { s: 2, c: 3 }, // Salty (mad)
  "Camper": { s: 1, c: 2 }, // Camper (gaming insult)
  "Hacker": { s: 3, c: 4 }, // Hacker/cheater (gaming)
  "Cheater": { s: 3, c: 4 }, // Cheater (gaming)

  // ========================================
  // === Verb Conjugations =================
  // ========================================
  // --- ficken (to fuck) ---
  "ficke": { s: 3, c: 5 }, // I fuck
  "fickst": { s: 3, c: 5 }, // You fuck
  "fickt": { s: 3, c: 5 }, // He/she fucks
  "fickten": { s: 3, c: 5 }, // They fucked
  "fickend": { s: 3, c: 5 }, // Fucking (adj.)
  "durchgefickt": { s: 3, c: 5 }, // Fucked through
  "zerficken": { s: 3, c: 5 }, // To fuck up
  "zerfickt": { s: 3, c: 5 }, // Fucked up
  "anficken": { s: 3, c: 5 }, // To start fucking
  "ausficken": { s: 3, c: 5 }, // To fuck out
  "hinficken": { s: 3, c: 5 }, // To fuck over
  "wegficken": { s: 3, c: 5 }, // To fuck away
  // --- wichsen (to wank) ---
  "wichst": { s: 3, c: 4 }, // You/he wanks
  "wichste": { s: 3, c: 4 }, // Wanked
  "gewichst": { s: 3, c: 4 }, // Wanked (past)
  "wichsend": { s: 3, c: 4 }, // Wanking
  // --- kacken (to shit) ---
  "kackst": { s: 3, c: 5 }, // You shit
  "kackt": { s: 3, c: 5 }, // He/she shits
  "kackten": { s: 3, c: 4 }, // They shat
  "gekackt": { s: 3, c: 4 }, // Shat
  "abkacken": { s: 3, c: 4 }, // To croak / fail
  "vollkacken": { s: 3, c: 5 }, // To shit full
  "reinkacken": { s: 3, c: 5 }, // To shit into
  "draufkacken": { s: 3, c: 5 }, // To shit on top
  // --- pissen (to piss) ---
  "pisse": { s: 3, c: 4 }, // I piss
  "pisst": { s: 3, c: 4 }, // You/he pisses
  "gepisst": { s: 3, c: 4 }, // Pissed
  // --- kotzen (to puke) ---
  "kotze": { s: 3, c: 4 }, // I puke
  "kotzt": { s: 3, c: 4 }, // You/he pukes
  "gekotzt": { s: 3, c: 4 }, // Puked
  // --- scheißen (to shit) ---
  "scheißt": { s: 3, c: 5 }, // You/he shits
  "geschissen": { s: 3, c: 4 }, // Shat
  "bescheißen": { s: 3, c: 5 }, // To cheat (lit. shit on)
  "anscheißen": { s: 3, c: 5 }, // To shit on / to rat out
  "reinscheißen": { s: 3, c: 5 }, // To shit into
  "draufscheißen": { s: 3, c: 5 }, // To shit on (not care)
  "zusammenscheißen": { s: 3, c: 5 }, // To shit together / berate
  "zugeschissen": { s: 3, c: 5 }, // Shit closed
  // --- vögeln (to fuck, lit. to bird) ---
  "vögle": { s: 3, c: 5 }, // I fuck (vögeln)
  "vögelst": { s: 3, c: 5 }, // You fuck
  "vögelt": { s: 3, c: 5 }, // He/she fucks
  "gevögelt": { s: 3, c: 5 }, // Fucked
  "rumvögeln": { s: 3, c: 5 }, // To fuck around
  "durchvögeln": { s: 3, c: 5 }, // To fuck through
  // --- bumsen (to bang) ---
  "bumse": { s: 3, c: 4 }, // I bang
  "bumst": { s: 3, c: 4 }, // You/he bangs
  "gebumst": { s: 3, c: 4 }, // Banged

  // ========================================
  // === Diminutive & Augmentative Forms ===
  // ========================================
  "Arschlöchlein": { s: 3, c: 4 }, // Little asshole
  "Arschlöchchen": { s: 3, c: 4 }, // Tiny asshole
  "Hürchen": { s: 5, c: 4 }, // Little whore
  "Schlampchen": { s: 3, c: 4 }, // Little slut
  "Fotzchen": { s: 5, c: 5 }, // Little cunt
  "Pimmelchen": { s: 4, c: 4 }, // Little dick
  "Schwänzchen": { s: 4, c: 4 }, // Little tail/dick
  "Wichserchen": { s: 3, c: 4 }, // Little wanker
  "Tittchen": { s: 4, c: 4 }, // Little tits
  "Möslein": { s: 4, c: 4 }, // Little pussy
  "Idiotlein": { s: 1, c: 4 }, // Little idiot
  "Trottellein": { s: 3, c: 4 }, // Little dunce
  "Scheißerchen": { s: 3, c: 5 }, // Little shitter
  "Spastilein": { s: 3, c: 4 }, // Little spaz
  "Riesenpimmel": { s: 4, c: 4 }, // Giant dick
  "Riesenarsch": { s: 3, c: 4 }, // Giant ass
  "Riesenfotze": { s: 5, c: 5 }, // Giant cunt
  "Riesenschlampe": { s: 3, c: 4 }, // Giant slut
  "Riesenidiot": { s: 1, c: 4 }, // Giant idiot
  "Riesendepp": { s: 1, c: 4 }, // Giant moron
  "Riesentrottel": { s: 3, c: 4 }, // Giant dunce
  "Riesenwichser": { s: 3, c: 4 }, // Giant wanker
  "Megafotze": { s: 5, c: 5 }, // Mega cunt
  "Megaarsch": { s: 3, c: 4 }, // Mega ass
  "Megadepp": { s: 1, c: 4 }, // Mega moron
  "Megaidiot": { s: 1, c: 4 }, // Mega idiot
  "Superarsch": { s: 3, c: 4 }, // Super ass
  "Superschlampe": { s: 3, c: 4 }, // Super slut
  "Superspast": { s: 3, c: 4 }, // Super spaz
  "Superidiot": { s: 1, c: 4 }, // Super idiot
  "Ultradepp": { s: 1, c: 4 }, // Ultra moron
  "Ultrawichser": { s: 3, c: 4 }, // Ultra wanker

  // ========================================
  // === Rhyming & Wordplay ================
  // ========================================
  "Sackhüpfer": { s: 3, c: 4 }, // Sack hopper
  "Bratfresse": { s: 3, c: 4 }, // Fry face
  "Käsefuß": { s: 3, c: 4 }, // Cheese foot
  "Käsefresse": { s: 3, c: 4 }, // Cheese face
  "Käsemaden": { s: 3, c: 4 }, // Cheese maggots
  "Hosenpinkler": { s: 3, c: 4 }, // Pants pisser
  "Bettnässer": { s: 3, c: 4 }, // Bed wetter
  "Bettpisser": { s: 3, c: 4 }, // Bed pisser
  "Arschgeiger": { s: 3, c: 4 }, // Ass violinist
  "Sackkratzer": { s: 3, c: 4 }, // Sack scratcher
  "Eierkocher": { s: 3, c: 4 }, // Ball boiler
  "Eiertanz": { s: 3, c: 4 }, // Egg dance (delicate situation)
  "Pimmelnasen": { s: 4, c: 4 }, // Dick nose
  "Stinksau": { s: 3, c: 4 }, // Stink sow
  "Dummtrottel": { s: 1, c: 4 }, // Dumb dunce
  "Dummbeutel": { s: 1, c: 4 }, // Dumb bag
  "Dummfresse": { s: 1, c: 4 }, // Dumb face
  "Dummbirne": { s: 1, c: 4 }, // Dumb pear
  "Dummgesicht": { s: 1, c: 4 }, // Dumb face

  // ========================================
  // === Additional Compounds ==============
  // ========================================
  "Affenhirn": { s: 3, c: 5 }, // Monkey brain
  "Affenschande": { s: 3, c: 5 }, // Monkey shame
  "Affengeil": { s: 3, c: 5 }, // Monkey horny (extremely cool/horny)
  "Afterlecker": { s: 3, c: 5 }, // Anus licker
  "Aftergeburt": { s: 3, c: 5 }, // Afterbirth (insult)
  "Arschbackenpfleger": { s: 3, c: 5 }, // Ass cheek caretaker
  "Aasgeier": { s: 3, c: 5 }, // Carrion vulture (greedy person)
  "Bauernlümmel": { s: 3, c: 5 }, // Peasant lout
  "Bettler": { s: 3, c: 5 }, // Beggar (derog.)
  "Blindschleiche": { s: 3, c: 5 }, // Slow worm (blind person insult)
  "Ekelpaket": { s: 3, c: 5 }, // Disgust package
  "Ekelhafte Ratte": { s: 3, c: 5 }, // Disgusting rat
  "Fressmaschine": { s: 3, c: 5 }, // Eating machine (glutton)
  "Grinsebacke": { s: 3, c: 5 }, // Grinning cheek (annoying smiler)
  "Großkotzbrocken": { s: 3, c: 5 }, // Big vomit chunk
  "Hundsfott": { s: 5, c: 5 }, // Dog cunt (archaic insult)
  "Hundsfötter": { s: 5, c: 5 }, // Dog cunter (archaic)
  "Jammertasche": { s: 3, c: 5 }, // Whining bag
  "Jammersack": { s: 3, c: 5 }, // Whining sack
  "Kackbonze": { s: 1, c: 4 }, // Shit fat cat
  "Kinderficker": { s: 5, c: 5 }, // Child fucker (pedophile)
  "Klofrau": { s: 3, c: 5 }, // Toilet lady (derog.)
  "Koksnutte": { s: 5, c: 5 }, // Coke whore
  "Kotzbratze": { s: 3, c: 5 }, // Vomit brat
  "Kröte": { s: 1, c: 4 }, // Toad (ugly person)
  "Lachaffe": { s: 3, c: 5 }, // Laughing monkey
  "Leichenfledderer": { s: 3, c: 5 }, // Corpse looter
  "Lümmeltüte": { s: 3, c: 5 }, // Lout bag (condom)
  "Madenschlecker": { s: 3, c: 5 }, // Maggot licker
  "Matschbirne": { s: 1, c: 4 }, // Mud pear (stupid)
  "Maulhure": { s: 4, c: 5 }, // Mouth whore (blowjob giver)
  "Memme": { s: 1, c: 4 }, // Coward / sissy
  "Milchbubi": { s: 3, c: 5 }, // Milk boy (mama's boy)
  "Muttersöhnchen": { s: 3, c: 5 }, // Mama's boy
  "Papasöhnchen": { s: 3, c: 5 }, // Daddy's boy
  "Pferdeschlampe": { s: 3, c: 5 }, // Horse slut
  "Pisswurst": { s: 3, c: 5 }, // Piss sausage
  "Popelfresser": { s: 3, c: 5 }, // Booger eater
  "Riesenspast": { s: 3, c: 5 }, // Giant spaz
  "Rotzgöre": { s: 3, c: 5 }, // Snot brat (f.)
  "Rotzjunge": { s: 3, c: 5 }, // Snot boy
  "Samenräuber": { s: 3, c: 5 }, // Sperm robber
  "Saubarsch": { s: 3, c: 5 }, // Pig buttocks
  "Saufgelage": { s: 3, c: 5 }, // Drinking binge
  "Scharfmacher": { s: 3, c: 5 }, // Agitator / arouser
  "Schleimbeutel": { s: 3, c: 5 }, // Slime bag (sycophant)
  "Schleimscheißer": { s: 3, c: 5 }, // Slime shitter (sycophant)
  "Schluckspecht": { s: 1, c: 3 }, // Swallow woodpecker (drunkard)
  "Schnapsleiche": { s: 1, c: 3 }, // Booze corpse (passed out drunk)
  "Schnapsidee": { s: 1, c: 4 }, // Booze idea (stupid idea)
  "Schnapsnase": { s: 3, c: 5 }, // Booze nose
  "Schnapsdrossel": { s: 1, c: 3 }, // Booze thrush (drunkard)
  "Schwachsinn": { s: 3, c: 5 }, // Imbecility / nonsense
  "Schwachsinniger": { s: 3, c: 5 }, // Imbecile
  "Sittenstrolch": { s: 3, c: 5 }, // Morals vagrant (sex offender)
  "Teufelsbrut": { s: 3, c: 5 }, // Devil's brood
  "Totgeburt": { s: 3, c: 5 }, // Stillbirth (insult)
  "Versagerin": { s: 3, c: 5 }, // Failure (f.)
  "Waschweiber": { s: 3, c: 5 }, // Washerwomen (gossipers)
  "Weiberheld": { s: 3, c: 5 }, // Womanizer
  "Widerlingin": { s: 3, c: 5 }, // Repulsive person (f.)
  "Würstchen": { s: 3, c: 5 }, // Little sausage (wimp)
  "Zickenalarm": { s: 3, c: 5 }, // Bitch alarm
  "Zirkusaffe": { s: 3, c: 5 }, // Circus monkey

  // ========================================
  // === Additional Evasion Patterns =======
  // ========================================
  "Scheysse": { s: 3, c: 5 }, // Scheiße phonetic misspelling
  "Sheisse": { s: 3, c: 5 }, // Scheiße English-style
  "Fiken": { s: 3, c: 5 }, // Ficken misspelling
  "Fikken": { s: 3, c: 5 }, // Ficken misspelling
  "Figgn": { s: 3, c: 5 }, // Ficken dialect shortening
  "Arsh": { s: 3, c: 5 }, // Arsch misspelling
  "Arshloch": { s: 3, c: 5 }, // Arschloch misspelling
  "Scwanz": { s: 3, c: 5 }, // Schwanz misspelling
  "Schwantz": { s: 3, c: 5 }, // Schwanz misspelling
  "Vigeln": { s: 3, c: 5 }, // Vögeln misspelling
  "Voegeln": { s: 3, c: 5 }, // Vögeln without umlaut
  "Huhrensohn": { s: 5, c: 5 }, // Hurensohn misspelling
  "Huuhrensohn": { s: 5, c: 5 }, // Hurensohn elongated
  "Wixxxer": { s: 3, c: 5 }, // Wichser extended x
  "Wixer": { s: 3, c: 5 }, // Wichser simplified
  "Wixxa": { s: 3, c: 5 }, // Wichser slang
  "Klappe halten": { s: 3, c: 5 }, // Hold your flap
  "Halts Maul": { s: 3, c: 5 }, // Shut your trap
  "Klappe zu": { s: 3, c: 5 }, // Flap shut

  // ========================================
  // === More Compound Phrases =============
  // ========================================
  "Lutsch mich": { s: 3, c: 5 }, // Suck me
  "Geh scheißen": { s: 3, c: 5 }, // Go shit
  "Geh kacken": { s: 3, c: 5 }, // Go take a shit
  "Hau rein": { s: 3, c: 5 }, // Hit in (piss off)
  "Werd nicht frech": { s: 3, c: 5 }, // Don't get cheeky
  "Halt die Klappe": { s: 3, c: 5 }, // Shut the flap
  "Verzieh dich Wichser": { s: 3, c: 5 }, // Beat it wanker
  "Du Spacko": { s: 3, c: 5 }, // You weirdo
  "Du Arschloch": { s: 3, c: 5 }, // You asshole
  "Du Fotze": { s: 5, c: 5 }, // You cunt
  "Du fette Sau": { s: 1, c: 4 }, // You fat sow
  "Du kleiner Wichser": { s: 3, c: 5 }, // You little wanker
  "Ich fick dich": { s: 3, c: 5 }, // I fuck you
  "Ich fick deine Mutter": { s: 3, c: 5 }, // I fuck your mother
  "Ich fick deine Schwester": { s: 3, c: 5 }, // I fuck your sister
  "Ich piss dir ins Gesicht": { s: 3, c: 5 }, // I piss in your face
  "Ich schlag dir die Fresse ein": { s: 3, c: 5 }, // I'll bash your face in
  "Ich mach dich fertig": { s: 3, c: 5 }, // I'll finish you
  "Ich mach dich platt": { s: 3, c: 5 }, // I'll flatten you
  "Deine Mudder": { s: 3, c: 5 }, // Your mother (slang)
  "Deine Alte": { s: 3, c: 5 }, // Your old lady (derog.)
  "Dein Vater": { s: 1, c: 4 }, // Your father (insult)

  // ========================================
  // === More Regional Terms ===============
  // ========================================
  "Schlaffi": { s: 3, c: 4 }, // Sleepy (wimp)
  "Pimpf": { s: 5, c: 5 }, // Little fellow (Hitler Youth term)
  "Rowdy": { s: 3, c: 4 }, // Rowdy
  "Rüpel": { s: 3, c: 4 }, // Ruffian
  "Rabauke": { s: 3, c: 4 }, // Ruffian
  "Rotzpippe": { s: 3, c: 4 }, // Snot pipe
  "Duftmarke": { s: 2, c: 3 }, // Scent mark (fart euphemism)
  "Pups": { s: 3, c: 4 }, // Toot (fart)
  "Pupsi": { s: 3, c: 4 }, // Little toot
  "Schißer": { s: 3, c: 5 }, // Shitter (old spelling)
  "Dreckiger Hund": { s: 3, c: 4 }, // Dirty dog
  "Dreckiger Bastard": { s: 3, c: 4 }, // Dirty bastard
  "Elender Bastard": { s: 3, c: 4 }, // Miserable bastard
  "Elende Ratte": { s: 3, c: 4 }, // Miserable rat
  "Elende Kakerlake": { s: 4, c: 4 }, // Miserable cockroach
  "Erbärmlicher Wurm": { s: 3, c: 4 }, // Pathetic worm
  "Erbärmliche Kreatur": { s: 3, c: 4 }, // Pathetic creature
  "Jämmerlicher Wicht": { s: 3, c: 4 }, // Pathetic wretch
  "Armselig": { s: 3, c: 4 }, // Pitiful
  "Armseliger Tropf": { s: 3, c: 4 }, // Pitiful drip
  "Erbärmlicher Versager": { s: 3, c: 4 }, // Pathetic failure
  "Kläglicher Haufen": { s: 3, c: 4 }, // Pitiful pile
  "Lächerliche Figur": { s: 3, c: 4 }, // Ridiculous figure
  "Jämmerliche Gestalt": { s: 3, c: 4 }, // Pathetic figure
  "Miese Ratte": { s: 3, c: 4 }, // Mean rat
  "Mieser Typ": { s: 3, c: 4 }, // Mean dude
  "Miese Type": { s: 3, c: 4 }, // Mean type
  "Mieses Schwein": { s: 3, c: 4 }, // Mean pig
  "Miese Sau": { s: 3, c: 4 }, // Mean sow
  "Mieses Stück": { s: 3, c: 4 }, // Mean piece
  "Abgefuckter Typ": { s: 3, c: 5 }, // Fucked up dude
  "Abgefucktes Arschloch": { s: 3, c: 5 }, // Fucked up asshole
  "Asoziales Stück Scheiße": { s: 3, c: 5 }, // Anti-social piece of shit
  "Beschissener Wichser": { s: 3, c: 5 }, // Shitty wanker
  "Verdammter Idiot": { s: 1, c: 4 }, // Damn idiot
  "Verdammter Wichser": { s: 3, c: 4 }, // Damn wanker
  "Verdammtes Arschloch": { s: 3, c: 4 }, // Damn asshole
  "Gottverdammt": { s: 3, c: 4 }, // Goddamn
  "Gottverdammter Idiot": { s: 1, c: 4 }, // Goddamn idiot
  "Gottverdammte Scheiße": { s: 3, c: 5 }, // Goddamn shit
  "Himmelarschundzwirn": { s: 3, c: 4 }, // Heaven ass and thread (expletive)
  "Herrgottnochmal": { s: 3, c: 4 }, // Lord God again (expletive)
  "Kreuzundquer": { s: 1, c: 4 }, // Crossways (mild expletive)
  "Potzblitz": { s: 1, c: 4 }, // Gadzooks (archaic mild)
  "Sapperlot": { s: 1, c: 4 }, // By thunder (archaic mild)
  "Heiliger Strohsack": { s: 3, c: 4 }, // Holy straw sack
  "Heilige Scheiße": { s: 3, c: 5 }, // Holy shit
  "Was zum Teufel": { s: 3, c: 4 }, // What the devil
  "Was zum Fick": { s: 3, c: 5 }, // What the fuck
  "Zur Hölle": { s: 3, c: 4 }, // To hell
  "Höllenbrut": { s: 3, c: 4 }, // Hell brood
  "Höllenhund": { s: 3, c: 4 }, // Hellhound
  "Teufelskerl": { s: 3, c: 4 }, // Devil's fellow
  "Satansbratze": { s: 3, c: 4 }, // Satan's brat
  "Luzifers Sohn": { s: 3, c: 4 }, // Lucifer's son
  "Dämonsbrut": { s: 3, c: 4 }, // Demon's brood

  // ========================================
  // === Youth/Street Slang ================
  // ========================================
  "Chabo": { s: 3, c: 4 }, // Dude (street slang)
  "Habibi fick dich": { s: 3, c: 5 }, // Habibi fuck you (street)
  "Wallah Hurensohn": { s: 5, c: 5 }, // I swear son of a whore
  "Yallah verpiss dich": { s: 3, c: 4 }, // Hurry up piss off
  "Azzlack": { s: 3, c: 4 }, // Tough guy (street)
  "Brudi": { s: 3, c: 4 }, // Bro
  "Kanackis": { s: 3, c: 4 }, // Foreigners (street slur)
  "Ehrenmann nicht": { s: 3, c: 4 }, // Not an honorable man
  "Absoluter Müll": { s: 3, c: 4 }, // Absolute garbage
  "Übermensch": { s: 5, c: 5 }, // Superhuman (Nazi term, sarcastic)
  "Vaterlandsverräter": { s: 1, c: 4 }, // Traitor of the fatherland
  "Nestbeschmutzer": { s: 3, c: 4 }, // Nest dirtier (traitor)
  "Jammertante": { s: 3, c: 4 }, // Whining aunt
  "Jammerossi": { s: 3, c: 4 }, // Whining East German
  "Kevin": { s: 1, c: 4 }, // Kevin (stereotype for stupid person)
  "Chantal": { s: 3, c: 4 }, // Chantal (stereotype for trashy woman)
  "Jacqueline": { s: 3, c: 4 }, // Jacqueline (stereotype trashy)
  "Tussie": { s: 3, c: 4 }, // Bimbo variant
  "Tusse": { s: 3, c: 4 }, // Bimbo variant
  "Schnalle": { s: 3, c: 4 }, // Buckle / easy girl
  "Braut": { s: 3, c: 4 }, // Bride / chick (derog.)
  "Alte": { s: 3, c: 4 }, // Old one / girlfriend (derog.)
  "Olle": { s: 3, c: 4 }, // Old one (derog.)
  "Perle": { s: 3, c: 4 }, // Pearl / girlfriend (can be derog.)
  "Fuck": { s: 3, c: 5 }, // Fuck (used in German)
  "Shit": { s: 3, c: 5 }, // Shit (used in German)
  "Asshole": { s: 3, c: 5 }, // Asshole (used in German)
  "Wanker": { s: 3, c: 4 }, // Wanker (used in German)
  "Loser": { s: 1, c: 4 }, // Loser (used in German)
  "Sucker": { s: 3, c: 4 }, // Sucker (used in German)
  "Creep": { s: 3, c: 4 }, // Creep (used in German)
  "Psycho": { s: 5, c: 4 }, // Psycho (used in German)
  "Freak": { s: 3, c: 4 }, // Freak (used in German)
  "Geek": { s: 3, c: 4 }, // Geek (derog. usage)
  "Nerd": { s: 3, c: 4 }, // Nerd (derog. usage)
  "Otaku": { s: 3, c: 4 }, // Otaku (derog.)
  "Weeb": { s: 3, c: 4 }, // Weeaboo (derog.)
  "Simp": { s: 2, c: 3 }, // Simp (derog.)
  "Cuck": { s: 2, c: 3 }, // Cuck (derog.)
  "Incel": { s: 2, c: 3 }, // Incel (derog.)
  "Karen": { s: 4, c: 4 }, // Karen (entitled woman)
  "Boomer": { s: 3, c: 4 }, // Boomer (derog.)
  "Sus": { s: 3, c: 4 }, // Suspicious (gaming)

  // ========================================
  // === Religious Expletives ==============
  // ========================================
  "Herrgottsakrament": { s: 2, c: 3 }, // Lord God Sacrament
  "Herrgottzack": { s: 2, c: 3 }, // Lord God damn
  "Kreuzsakrament": { s: 2, c: 3 }, // Cross Sacrament
  "Sakrament nochmal": { s: 2, c: 3 }, // Sacrament again
  "Kruzifix nochmal": { s: 2, c: 3 }, // Crucifix again
  "Himmel Arsch und Wolkenbruch": { s: 3, c: 3 }, // Heaven ass and cloudburst
  "Himmelherrgottsdonnerwetter": { s: 2, c: 3 }, // Heaven Lord God thunderstorm
  "Jessas Maria und Josef": { s: 2, c: 3 }, // Jesus Mary and Joseph (Bavarian)
  "Herrschaftszeiten": { s: 1, c: 3 }, // Lord's times (mild)
  "Menschenskind": { s: 1, c: 3 }, // Human's child (mild)
  "Menschenskinder": { s: 1, c: 3 }, // Humans' children (mild)

  // ========================================
  // === Threats & Violent Language =========
  // ========================================
  "Ich stech dich ab": { s: 5, c: 5 }, // I'll stab you
  "Ich mach dich kalt": { s: 5, c: 5 }, // I'll make you cold (kill)
  "Ich bring dich um": { s: 5, c: 5 }, // I'll kill you
  "Ich box dir eine": { s: 5, c: 5 }, // I'll punch you
  "Ich hau dir eine rein": { s: 5, c: 5 }, // I'll smack you one
  "Ich tret dir in die Eier": { s: 5, c: 5 }, // I'll kick you in the balls
  "Ich reiß dir den Kopf ab": { s: 5, c: 5 }, // I'll rip your head off
  "Ich brech dir die Knochen": { s: 5, c: 5 }, // I'll break your bones
  "Fresse polieren": { s: 5, c: 5 }, // Polish face (punch)
  "Fresse einhauen": { s: 5, c: 5 }, // Bash face
  "Fresse zertrümmern": { s: 5, c: 5 }, // Smash face
  "Auf die Fresse kriegen": { s: 5, c: 5 }, // Get it in the face
  "Aufs Maul kriegen": { s: 5, c: 5 }, // Get it on the mouth
  "Maul zerreißen": { s: 5, c: 5 }, // Tear mouth
  "Nase brechen": { s: 5, c: 5 }, // Break nose
  "Zähne einschlagen": { s: 5, c: 5 }, // Knock teeth in
  "Abstechen": { s: 5, c: 5 }, // To stab
  "Abknallen": { s: 5, c: 5 }, // To shoot down
  "Abmurksen": { s: 5, c: 5 }, // To bump off
  "Kaltmachen": { s: 5, c: 5 }, // To make cold (kill)
  "Umlegen": { s: 5, c: 5 }, // To bump off
  "Plattmachen": { s: 5, c: 5 }, // To flatten
  "Zusammenschlagen": { s: 5, c: 5 }, // To beat up
  "Krankenhausreif schlagen": { s: 5, c: 5 }, // Beat hospital-ready
  "Windeln wechseln": { s: 5, c: 5 }, // Change diapers (threat to beat)

  // ========================================
  // === Additional Misc Profanity =========
  // ========================================
  "Aasfresser": { s: 3, c: 4 }, // Carrion eater
  "Ausgeburt": { s: 3, c: 4 }, // Spawn (negative)
  "Ausgeburt der Hölle": { s: 3, c: 4 }, // Spawn of hell
  "Billigheimer": { s: 3, c: 4 }, // Cheapskate
  "Blag": { s: 3, c: 4 }, // Brat
  "Blage": { s: 3, c: 4 }, // Brat (variant)
  "Bruchpilot": { s: 3, c: 4 }, // Crash pilot (failure)
  "Dödel": { s: 4, c: 4 }, // Dimwit / penis
  "Dödelkopf": { s: 3, c: 4 }, // Dimwit head
  "Drecksling": { s: 3, c: 4 }, // Dirty person
  "Drecksvogel": { s: 3, c: 4 }, // Dirty bird
  "Dreckwühler": { s: 3, c: 4 }, // Dirt digger (muckraker)
  "Ekelbrocken": { s: 3, c: 4 }, // Disgust chunk
  "Ekelfresse": { s: 3, c: 4 }, // Disgust face
  "Ferkelei": { s: 3, c: 4 }, // Piggery (dirty behavior)
  "Flachwitz": { s: 3, c: 4 }, // Flat joke (bad humor person)
  "Fledermaus": { s: 1, c: 3 }, // Bat (ugly person, slang)
  "Galgenstrick": { s: 3, c: 4 }, // Gallows rope (scoundrel)
  "Galgenvogel": { s: 3, c: 4 }, // Gallows bird
  "Gaunerin": { s: 3, c: 4 }, // Swindler (f.)
  "Geier": { s: 3, c: 4 }, // Vulture
  "Gelichter": { s: 3, c: 4 }, // Riffraff
  "Gossenjunge": { s: 3, c: 4 }, // Gutter boy
  "Gossenmädchen": { s: 3, c: 4 }, // Gutter girl
  "Grabräuber": { s: 3, c: 4 }, // Grave robber
  "Heini": { s: 1, c: 4 }, // Heini (insult for fool)
  "Horst": { s: 1, c: 4 }, // Horst (stereotype for fool)
  "Hundedreck": { s: 3, c: 4 }, // Dog dirt
  "Hundefresse": { s: 3, c: 4 }, // Dog face
  "Irrenhäusler": { s: 3, c: 4 }, // Asylum inmate
  "Jammerbock": { s: 3, c: 4 }, // Whining buck
  "Jungfrau": { s: 3, c: 4 }, // Virgin (derog. usage)
  "Kannibale": { s: 3, c: 4 }, // Cannibal
  "Kindskopf": { s: 3, c: 4 }, // Child's head (immature person)
  "Klotzkopf": { s: 3, c: 4 }, // Block head
  "Knacker": { s: 3, c: 4 }, // Old geezer
  "Knacki": { s: 3, c: 4 }, // Con (criminal)
  "Knilch": { s: 3, c: 4 }, // Fellow (derog.)
  "Knödel": { s: 1, c: 4 }, // Dumpling (stupid)
  "Kopfnuss": { s: 3, c: 4 }, // Head nut (headbutt)
  "Krethi und Plethi": { s: 4, c: 4 }, // Tom Dick and Harry (riffraff)
  "Küchenschabe": { s: 4, c: 4 }, // Cockroach
  "Langweilige Socke": { s: 3, c: 4 }, // Boring sock
  "Lausebengel": { s: 3, c: 4 }, // Louse boy
  "Lump": { s: 3, c: 4 }, // Scoundrel
  "Lumpenpack": { s: 3, c: 4 }, // Scoundrel pack
  "Mistfliege": { s: 3, c: 5 }, // Shit fly
  "Pestkranker": { s: 3, c: 4 }, // Plague sufferer (insult)
  "Pestbeule": { s: 3, c: 4 }, // Plague boil
  "Rabenvieh": { s: 3, c: 4 }, // Raven cattle (bad person)
  "Rabenvater": { s: 1, c: 4 }, // Raven father (bad father)
  "Rabenmutter": { s: 3, c: 4 }, // Raven mother (bad mother)
  "Racker": { s: 3, c: 4 }, // Rascal
  "Randale": { s: 3, c: 4 }, // Riot/ruckus
  "Randalierer": { s: 3, c: 4 }, // Rioter
  "Räuber": { s: 3, c: 4 }, // Robber
  "Räuberbande": { s: 3, c: 4 }, // Robber gang
  "Saubande": { s: 3, c: 4 }, // Pig gang
  "Schmutzfinke": { s: 3, c: 4 }, // Dirt finch (f.)
  "Schufterei": { s: 3, c: 4 }, // Drudgery
  "Schurkenbande": { s: 3, c: 4 }, // Villain gang
  "Schweinebacke": { s: 3, c: 4 }, // Pig cheek
  "Schweinigel": { s: 3, c: 4 }, // Pig hedgehog (dirty person)
  "Speikübel": { s: 3, c: 4 }, // Vomit bucket
  "Subjekt": { s: 3, c: 4 }, // Subject (derog. for person)
  "Tagedieb": { s: 3, c: 4 }, // Day thief (lazybones)
  "Vieh": { s: 3, c: 4 }, // Beast
  "Viehzeug": { s: 3, c: 4 }, // Beast stuff
  "Vogelschiss": { s: 3, c: 5 }, // Bird shit
  "Waschweib": { s: 3, c: 4 }, // Washwoman (gossiper)
  "Wüstling": { s: 3, c: 4 }, // Debauchee
  "Zuhälter": { s: 3, c: 4 }, // Pimp
  "Zuhälterin": { s: 3, c: 4 }, // Pimp (f.)

  // === Extended German Words ===
  "analritter": { s: 4, c: 5 }, // Anal rider (derogatory slur for gay man)
  "bratze": { s: 3, c: 4 }, // Ugly brat / ugly woman (insult)
  "ische": { s: 2, c: 3 }, // Girlfriend / chick (slang, mildly objectifying)
  "kimme": { s: 3, c: 4 }, // Butt crack (vulgar)
  "MILF": { s: 3, c: 4 }, // Mother I'd Like to Fuck (sexual objectification)
  "möpse": { s: 3, c: 4 }, // Tits (slang, lit. pugs)
  "mufti": { s: 2, c: 4 }, // Can be used as ethnic/religious slur
  "nackt": { s: 1, c: 3 }, // Naked (mild, but contextually offensive)
  "nigger": { s: 5, c: 5 }, // Racial slur (English loanword used in German contexts)
  "popel": { s: 1, c: 3 }, // Booger (mild insult)
  "reudig": { s: 3, c: 4 }, // Mangy / scabby (insult)
  "scheisser": { s: 3, c: 4 }, // Shitter (variant spelling)
  "schiesser": { s: 3, c: 4 }, // Shitter (Austrian variant spelling)
  "schnackeln": { s: 4, c: 5 }, // To fuck (Austrian/Bavarian slang)
};

export default germanBadWords;

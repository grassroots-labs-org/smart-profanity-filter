/**
 * Romanization Detector — identifies Latin-script transliterations of
 * non-Latin-script languages (Hindi romaji, Pinyin, etc.).
 *
 * Uses three layers:
 *   1. ELD n-gram language detection + cluster analysis
 *   2. Per-language romanization n-gram fingerprinting (trigrams + quadgrams)
 *   3. Heuristic signals (scatter, ELD confidence, reliability)
 */

// @ts-ignore — eld ships as JS with .d.ts but no proper ESM types
import { eld } from "eld/small";

// ---------------------------------------------------------------------------
// Language family mapping
// ---------------------------------------------------------------------------

export const LANGUAGE_FAMILIES: Record<string, string[]> = {
  romance:      ["fr", "ca", "it", "pt", "es", "ro", "gl", "oc"],
  germanic:     ["de", "nl", "da", "no", "sv", "af", "is", "lb", "en"],
  slavic:       ["ru", "uk", "bg", "pl", "cs", "sk", "hr", "sr", "sl", "bs", "mk"],
  uralic:       ["fi", "hu", "et"],
  turkic:       ["tr", "az", "uz", "kk", "ky", "tk"],
  celtic:       ["cy", "ga", "gd", "br"],
  baltic:       ["lt", "lv"],
  semitic:      ["ar", "he", "mt"],
  indic:        ["hi", "bn", "mr", "gu", "pa", "ne", "si", "ur"],
  dravidian:    ["ta", "te", "kn", "ml"],
  sinitic:      ["zh"],
  japonic:      ["ja"],
  koreanic:     ["ko"],
  austronesian: ["tl", "ms", "id", "mg", "ceb", "jv", "su"],
  tai:          ["th", "lo"],
};

const LANG_TO_FAMILY: Record<string, string> = {};
for (const [family, langs] of Object.entries(LANGUAGE_FAMILIES)) {
  for (const lang of langs) LANG_TO_FAMILY[lang] = family;
}

// ---------------------------------------------------------------------------
// Cluster analysis
// ---------------------------------------------------------------------------

export interface ClusterResult {
  uniqueFamilies: number;
  dominantFamilyCount: number;
  isCoherent: boolean;
  isScattered: boolean;
}

export function analyzeCluster(scores: Record<string, number>): ClusterResult {
  const sorted = Object.entries(scores).sort(([, a], [, b]) => b - a);
  const top5families = sorted.slice(0, 5).map(([l]) => LANG_TO_FAMILY[l] || "unknown");
  const familyCounts: Record<string, number> = {};
  for (const f of top5families) familyCounts[f] = (familyCounts[f] || 0) + 1;
  const uniqueFamilies = Object.keys(familyCounts).length;
  const dominantFamilyCount = Math.max(0, ...Object.values(familyCounts));
  return {
    uniqueFamilies,
    dominantFamilyCount,
    isCoherent: dominantFamilyCount >= 3,
    isScattered: uniqueFamilies >= 4,
  };
}

// ---------------------------------------------------------------------------
// Per-language romanization n-gram sets
// ---------------------------------------------------------------------------

// weakParticles: space-padded 2-letter words that are common across languages
// — scored at 0.5 instead of 1.0/1.5 to avoid false positives
export const ROMANIZATION_NGRAMS: Record<string, { trigrams: Set<string>; quadgrams: Set<string>; weakParticles?: Set<string> }> = {
  // Hindi/Urdu/Bengali/Nepali — aspirated clusters, retroflex, nasal combos
  indic: {
    trigrams: new Set([
      "bha", "bhe", "bhi", "bho", "bhu",
      "dha", "dhe", "dhi", "dho", "dhu",
      "gha", "ghe", "ghi", "gho", "ghu",
      "kha", "khe", "khi", "kho", "khu",
      "pha", "phe", "phi", "pho", "phu",
      "chh", "cch",
      "aal", "aam", "aan", "aap", "aar", "aas", "aat",
      "jhe", "jha", "jhi",
      "muj", "tuj", "yeh", "hai", "haa", "nah", "kya",
      "waa", "jaa", "bah", "saa", "tta",
      "ekh", "dek", "akh",
      "eek", "aaj", "aur",
      "ush", "shk", "hki",
      // Bengali-specific
      "cho", "ach", "oth", "pni", "mar",
      "kem", "oba", "bad",
      "she", "chi", "hec",
      // Telugu-specific
      "aru", "nna", "agu", "elu",
      "ava", "ulu",
      "ast", "sto",
      // Nepali-specific
      "hun", "hha",
      // Gujarati-specific
      "avn", "amy", "gam",
    ]),
    quadgrams: new Set([
      "bhai", "bhar", "bhut", "bhaa", "bhen",
      "dhar", "dhak", "dhoo", "dhan",
      "ghar", "ghoo", "ghum",
      "khan", "khaa", "khub", "khat", "khar",
      "thee", "thod", "thek",
      "chho", "chha", "chhe",
      "haal", "hain", "hame", "hama",
      "kaam", "jaan", "yaar", "raha", "rahe",
      "mush", "shki", "achh", "achc", "bahu",
      "chod", "saal", "kutt", "kami", "gaan", "baad", "baat", "naam", "mujh", "tujh",
      // Space-padded 2-letter particles (padded "xx" → " xx " = 4 chars = quadgram)
      " ke ", " ka ", " ki ", " ko ", " se ", " na ", " pe ", " ho ",
      " ab ", " jo ", " ye ", " wo ", " tu ",
      // Space-padded 3-letter particles (padded "xxx" → " xxx " → quadgrams " xxx" and "xxx ")
      " sab", " yeh", " veh", " voh", " hai", " hum", " tum", " aur",
      " mat", " kab", " koi",
      "pahr", "parh",
      "sund", "unda", "ndar",
      "padh", "dhai",
      "insh", "nsha", "shal",
      "baar", "aari",
      "sadk",
      "bana", "anan",
      "seek", "eekh",
      "zaro", "aroo",
      // Bengali quadgrams
      "bhal", "halo",
      "koth", "otha", "thay",
      "jacc", "acch", "cche", "chen",
      "apni", "toma", "omar",
      "dhon", "honn", "nnob", "noba",
      "kemo", "emon",
      "eshe", "shec", "hech",
      "boud", "oudi",
      "dada",
      "gelo",
      "bair", "aire",
      "ghur", "hure",
      "lage", "agch", "gche",
      // Telugu quadgrams
      "unn", "nnar", "naru",
      "baag", "aagu", "gunn", "unna",
      "dhan", "hany", "anya", "nyav", "yava",
      "vast", "asta", "star",
      "velt", "eltu", "ltun", "tunn",
      "sant", "anto", "ntos", "tosh",
      "eppu", "ppud",
      // Nepali quadgrams
      "nama", "amas", "mast",
      "hunu", "unuh", "nuhu", "uhun",
      "dhan", "hany", "nyab", "yaba", "abaa",
      // Gujarati quadgrams
      "malv", "alva", "lvan", "vanu",
      "gamy",
    ]),
    // Weak particles: common across languages, scored at 0.5
    weakParticles: new Set([" na ", " to "]),
  },

  // Mandarin Pinyin
  pinyin: {
    trigrams: new Set([
      "zho", "zha", "zhe", "zhi", "zhu",
      "qia", "qie", "qin", "qiu",
      "xia", "xie", "xin", "xiu", "xue",
      "iao", "iou", "uai", "uei",
      "guo", "duo", "huo", "suo", "zuo",
      "jin", "jia", "jie", "jiu",
      "ngg", "ngr", "ngy",
      "gao", "hao", "bao", "dao", "lao",
    ]),
    quadgrams: new Set([
      "zhon", "hong", "nggu", "gguo",
      "zhen", "zhao", "zhua", "zhan",
      "qian", "qing", "qixi",
      "xian", "xing", "xiao", "xiex",
      "jint", "inti", "ntia",
      "tian", "huan", "yuan",
      "gong", "dong", "peng",
      "ming", "ting", "bing", "ling",
      "gaox", "aoxi", "oxin",
      "bang", "duos", "uosh", "shao",
      "guan", "dian", "nian",
      "pengy", "ngyo",
      "zaij", "aiji", "ijia",
      "piao", "iaol", "aoli", "olia",
      "xihu", "ihuan",
      "feng", "engj", "ngji", "gjin",
      "difa", "ifan", "fang",
      "chif", "ifan",
      "wans", "ansh", "nsha", "shan",
      "shen", "henm",
    ]),
    // Weak particles: de (的), le (了), bu (不) — common but shared with other languages
    weakParticles: new Set([" de ", " le ", " bu "]),
  },

  // Japanese Romaji — polite, casual, literary, and slang forms
  romaji: {
    trigrams: new Set([
      // Polite verb endings
      "asu", "esu", "osu",
      "mas", "des",
      // Unique consonant clusters
      "tsu",
      "sho", "shi", "chi",
      // Common fragments
      "ata", "ima",
      // Gemination (doubled consonants)
      "tte", "tta", "kke", "ssa", "kka",
      // Compound consonants
      "nky", "nbe", "nbu", "nde", "nda",
      // Long vowel patterns (-ou, -uu, -ei common in romaji)
      "kou", "mou", "tou", "dou", "sou", "rou",
      "iku", "oku", "uku", "aku", "eku",
      // Polite/keigo fragments
      "sai", "goz", "aim",
      // Common literary/poetic — only distinctive combos
      "omo", "iro",
      "yum", "ume",
      "osh", "yor",
      "ait", "tai",
      "hik",
      "sak",
      "hosh",
      "kai", "sei",
      // Common particles as trigram context
      "wat", "nih",
      "mpo", "amp",
      // Profanity/slang fragments
      "kus", "uso", "aho",
      "kut", "tab",
      "tem", "mee",
    ]),
    quadgrams: new Set([
      // Space-padded 2-letter particles (avoid "no", "de" — English; "wa", "ni" — Swahili)
      " ga ", " wo ", " mo ", " ne ", " yo ",
      // Space-padded 3-letter particles
      " eki", " ima", " ano", " ore", " iku", " aru", " nai", " mae",
      // Polite forms
      "masu", "desu", "desh", "imas",
      "shim", "mash", "ashi",
      "kuda", "udas", "dasa",
      "goza", "ozai", "zaim",
      // Common words
      "wata", "atas",
      "niho", "ihon",
      "benk", "enky", "nkyo",
      "ganb", "anba", "nbat", "batt",
      "tomo", "omod", "moda", "odac",
      "omoi", "moir", "oiro",
      "tote", "otem",
      "sumi", "umim", "mima",
      "tano", "anos", "nosh",
      // Poetic/literary
      "yume", "naka", "anat", "nata",
      "aitai", "hosh", "oshi",
      "kaga", "agay", "gaya", "ayak", "yaku", "yaki",
      "shit", "hite",  // shite/shita (doing/did) — common romaji verb form
      "yoru", "saku", "akur", "kura",
      "kire", "irei",
      "hana", "haru", "kami",
      "tsuk", "suki",
      // Casual/informal
      "naru", "shir", "iren", "rena",
      "owar", "wari",
      "haji", "ajim", "jime",
      "yaro", "arou",
      // Profanity/slang
      "kuso", "kutar", "utab", "taba", "abar", "bare",
      "ahou", "hond", "onda", "ndar",
      "kisa", "isam", "sama",
      "teme", "emee",
      "bokk", "okke",
    ]),
    // Weak particles: shared with Swahili/English, scored at 0.5
    // Excluded: " wa ", " ni " — too common in Swahili
    weakParticles: new Set([" no ", " de ", " ka ", " to "]),
  },

  // Korean Romanization — formal, casual, and slang forms
  korean: {
    trigrams: new Set([
      // Polite endings
      "eyo", "ayo",
      // Particles
      "sey", "eun", "eul", "reul",
      // Verb stems
      "hag", "seo", "geo",
      "ham", "gam", "kam",
      // -nida formal ending
      "nid", "ida",
      // Tense markers
      "eos", "iss", "sse",
      // annyeong fragments
      "nye", "ngh", "ngs",
      // Common vowel combos
      "yeo", "ung", "eon",
      // Compound vowels
      "hae", "hoe", "hwa",
      // Common words
      "jal", "joh", "gbu",
      "lkk", "eok", "eog",
      "ase", "oyo",
      "sip", "ipe",
      "nge", "ngb",
      // Casual/informal — only distinctive patterns
      "eul", "gat",
      "gae", "rae", "jae",
      "dul", "iga",
      "ssi",
      "bap", "meo", "eok",
      "gac",
      "jeo",
      "peo",
      "oeg",
      "alk",
      // Particles
      "gwa", "eseo",
    ]),
    quadgrams: new Set([
      // Space-padded 3-letter particles
      " eun", " eul", " jal", " nae", " uri", " geu", " jeo",
      // Polite forms
      "hase", "aseyo", "seyo",
      "isseo", "sseo", "seoyo",
      "gamsa", "amsa", "msah",
      "hamni", "amni", "mnid", "nida",
      // annyeong
      "annyeo", "nnyeo", "nyeon",
      // Common words
      "gongb", "ongbu",
      "hwai", "wait", "aiti",
      "haeb", "aebo", "bose",
      "meok", "eokgo",
      "sipeo", "ipeo", "peoyo",
      "nalss", "alss", "lssi",
      // Casual/conversational
      "oneul", "neul",
      "gachi", "achi", "gach",
      "aeba", "ebak", "oppa",
      "sanch", "anche", "nchek",
      "joey", "oeyo",
      "nals", "alss", "lssi", "ssig",
      "gayo",
      "chingu", "ingu",
      "haru",
      "dosi", "osir", "sirak",
      "sajin",
      "jeony", "eonye", "nyeo", "yeog",
      "jaem", "aemi", "emii",
      "bang", "angap", "ngap",
      "mann", "anna", "nnas", "nase",
    ]),
    // Weak particles: e (에), do (도), i (이) — common but shared
    weakParticles: new Set([" do ", " na ", " je "]),
  },

  // Arabic romanization — MSA and dialectal (Levantine, Egyptian, Gulf)
  arabic: {
    trigrams: new Set([
      // Core patterns
      "hab", "abi", "bib",
      "all", "lla", "lah",
      "shk", "shu", "shm",
      "akh", "ukh", "khr",
      "eef", "eek", "eel",
      "ahm", "hmd",
      "bik", "bil",
      "jaz", "aze", "zee",
      "yaw", "awm",
      "ana", "ant", "nta",
      "ahl", "hla", "sah",
      "kha", "las", "yal",
      "ukr", "kra",
      // Dialectal fragments
      "bid", "idd",           // biddi (I want)
      "ray", "aye", "yeh",   // rayeh (going)
      "ked", "eer",           // kteir (a lot)
      "kti", "tir",
      "hel", "elw",           // helw (beautiful)
      "shi", "way",           // shway (a little)
      "mni", "nit",           // mnitruk, mnitsalla
      "nti", "tik",           // anti (you fem.)
      "akhi", "khi",          // ya akhi
      "zal", "ala", "lam",    // zalameh
      "bah", "ahe",           // bahebak
      "sad", "ade", "dee",    // sadeeqi
      "umm",                  // ummi
    ]),
    quadgrams: new Set([
      // Space-padded 2-letter particles (only distinctive ones — avoid "an", "la", "ma" which are common English)
      " ya ", " wa ", " fi ", " bi ",
      // Space-padded 3-letter particles
      " ana", " min", " lil", " ila", " ala", " law", " shu",
      // Core
      "habi", "abib", "bibi",
      "alla", "llah",
      "insh", "nsha", "shal",
      "mash", "asha",
      "shuk", "hukr", "ukra", "kran",
      "jaze", "azee", "zeel",
      "keef", "eefa", "efak",
      "ahla", "hlan",
      "sahl",
      "khal", "hala",
      "yall",
      "wall",
      "alha", "lham", "hamd",
      // Dialectal
      "bidd",                  // biddi
      "raye", "ayeh",          // rayeh
      "helw",                  // helw
      "shwa", "hway",          // shway
      "akhi",                  // ya akhi
      "baha", "aheb", "heba",  // bahebak
      "sade", "adee", "deeq",  // sadeeqi
      "zala", "alam", "lame",  // zalameh
      "tihk",                  // tihki
      "mish", "fahim",         // mish fahim
    ]),
    // Weak particles: la (لا), ma (ما), an (أن) — common but shared with English/Spanish
    weakParticles: new Set([" la ", " ma ", " an "]),
  },

  // Russian/Slavic transliteration — formal, casual, and slang
  russian: {
    trigrams: new Set([
      // Standard transliteration clusters
      "kho", "khr", "kha",
      "zho", "zhe", "zhi",
      "shc", "hch",
      "tsy", "tsa",
      "vst", "dra",
      "pri", "iye",
      "vsy",
      "ych", "yat", "oya",
      "oho", "ros", "osh",
      "seg", "ego", "odn",
      "its",
      "poy", "oyt", "yti",
      "ozh",
      "gul", "uly",
      "khl", "hle", "leb",
      "mol", "olo", "lok",
      // Slang/profanity fragments
      "bly", "lya", "yat",
      "piz", "izd", "zde",
      "nah", "ahu",
      "mud", "uda", "dak",
      "deb", "ebi",
      "dol", "olb", "lbo",
      "suk", "uka",
      "tup", "upo",
      // Casual/informal
      "chy", "zna", "poz",
      "kru", "tol",
      "dav", "ava",
      "poe", "oek", "ekh",
    ]),
    quadgrams: new Set([
      // Space-padded 3-letter particles
      " kak", " eto", " ves", " mne", " vot", " uzh", " tam",
      // Standard transliteration
      "khor", "horo", "oros", "rosh",
      "zhno", "mozh",
      "priv", "rive", "ivet",
      "sego", "egod", "godn", "odny",
      "vsyo",
      "nrav", "ravi", "avit", "vits",
      "poyt", "oyti",
      "guly", "ulya", "lyat",
      "khleb", "hleb",
      "molo", "olok", "loko",
      "spas", "pasi", "asib", "sibo",
      "bols", "olsh", "lsho", "shoy",
      "pomo", "omos", "mosh", "oshc",
      "priy", "riya", "iyat",
      "inte", "nter", "tere", "eres",
      "zdra", "drav",
      "drug", "ruzy", "uzya", "zyam",
      "posh", "shli",
      "poto", "otom", "tomu",
      "chto",
      "vzya", "zyal", "yali",
      "sobo", "oboi",
      "igra", "gral",
      "vrem", "remy", "emya",
      "prov", "rove", "ovel",
      "vech", "eche", "cher", "hero",
      "domo", "omoi",
      "usta", "stav", "tavs",
      "scha", "chas", "hast", "astl",
      "zame", "amec", "mech", "chat",
      "piko", "ikni",
      "futb", "utbo",
      // Slang/profanity
      "blya", "lyat",
      "pizd", "izde", "zdet",
      "nahu",
      "muda", "udak",
      "debi",
      "dolb", "olbo", "lboy", "boyo",
      "suka",
      "tupo", "upoy",
      // Casual patterns
      "dava", "avai",
      "poka",
      "tolk", "olko",
    ]),
    // Weak particles: ya (я), ne (не), on (он), no (но), vy (вы) — excluded "da" (too common: Hausa, English)
    weakParticles: new Set([" ya ", " ne ", " no ", " vy ", " on "]),
  },

  // Thai romanization
  thai: {
    trigrams: new Set([
      "kra", "rap", "kha",
      "sab", "aba", "bai",
      "saw", "awa", "wad", "ade",
      "kho", "hob", "obu",
      "khu", "hun",
      "pho", "hom",
      "rai", "ara", "nee",
      "pai", "nai",
      "dee", "mai", "cha",
      "anu", "nuk", "san",
    ]),
    quadgrams: new Set([
      "krap", "sawa", "awad", "wade", "adee",
      "saba", "abai",
      "khob", "khun", "phom",
      "arai",
      "sanu", "anuk",
    ]),
    // Weak particles: na (นะ), di (ดี), ja (จ๊ะ), ka (ค่ะ/ครับ shorthand)
    weakParticles: new Set([" na ", " di ", " ja ", " ka "]),
  },

  // Tamil romanization
  tamil: {
    trigrams: new Set([
      "kka", "kki",
      "nga", "ngi",
      "ppa", "adi",
      "iru", "ruk", "ukk",
      "nak", "akk",
      "ndr", "dri",
      "enn", "nna",
      "inn", "nni", "nik",
      "ela", "aik",
      "ree", "eng",
    ]),
    quadgrams: new Set([
      "vana", "anak", "nakk", "akka", "kkam",
      "iruk", "rukk", "ukki", "kkin", "king",
      "eppa", "ppad", "padi",
      "nand", "andr", "ndri",
      "inni", "nnik", "nikk", "ikku",
      "vela", "elai", "laik", "aikk",
      "panr", "anre", "nree", "reeng",
    ]),
    // Weak particles: la (லா), na (னா) — excluded "da" (too common cross-language)
    weakParticles: new Set([" la ", " na "]),
  },

  // Persian/Farsi romanization
  persian: {
    trigrams: new Set([
      "sal", "ala", "lam",
      "che", "het", "eto", "tor",
      "ale", "let",
      "khe", "hei", "eil",
      "khu", "hub", "ube",
      "doo", "oos", "ost",
      "iru", "run",
      "rim",
      "gha", "haz", "aza",
      "bok", "okh",
      "emr", "mru", "ruz",
    ]),
    quadgrams: new Set([
      "sala", "alam",
      "chet", "heto", "etor", "tori",
      "khei", "heil", "eili",
      "khub", "hube",
      "doos", "oost",
      "biru", "irun",
      "beri", "erim",
      "ghaz", "haza",
      "bokh", "okho", "khor",
      "emru", "mruz",
      "mikha", "ikha",
      "laze", "azem",
    ]),
    // Weak particles: ra (را), az (از), be (به), ke (که)
    weakParticles: new Set([" ra ", " az ", " be ", " ke "]),
  },

  // Vietnamese without diacritics
  vietnamese: {
    trigrams: new Set([
      "uoc", "uoi", "uon", "uot",
      "ngu", "ngh", "nho", "nha",
      "tro", "anh", "inh",
      "hom", "nay", "dep", "qua",
      "vui", "duc", "gap", "ban",
      "rat", "toi", "hay", "roi",
      "xin", "cam", "gia", "dia",
      "chu", "dun", "hoc",
      "lam", "mot", "cho",
      "phu",
      "uye", "yen",
    ]),
    quadgrams: new Set([
      "nguo", "guoi",
      "nghi", "truo", "ruon", "uong",
      "duoc",
      "chun", "hung",
      "tron", "rong",
      "khon", "hong",
      "nhun",
      "hoan", "oanh",
    ]),
    // Weak particles: la (là), va (và), co (có)
    weakParticles: new Set([" la ", " va ", " co "]),
  },
};

// ---------------------------------------------------------------------------
// Trigram fingerprinting
// ---------------------------------------------------------------------------

export interface TrigramFingerprintResult {
  bestFamily: string;
  bestHitRate: number;
  perFamilyRates: Record<string, number>;
  totalTrigrams: number;
  decayedScore: number;
  triggered: boolean;
}

export function trigramFingerprint(text: string): TrigramFingerprintResult {
  const words = text.toLowerCase().split(/\s+/).filter(w => w.length > 0);

  const textTrigrams: string[] = [];
  const textQuadgrams: string[] = [];
  const particleQuadgrams: string[] = [];
  for (const word of words) {
    const clean = word.replace(/[^a-z]/g, "");
    if (clean.length === 0) continue;

    // Standard per-word n-gram extraction (words >= 3 chars — counted in denominator)
    if (clean.length >= 3) {
      for (let i = 0; i <= clean.length - 3; i++) {
        textTrigrams.push(clean.slice(i, i + 3));
      }
      for (let i = 0; i <= clean.length - 4; i++) {
        textQuadgrams.push(clean.slice(i, i + 4));
      }
    }
    // Short words (≤ 3 chars): also pad with spaces for particle quadgrams (bonus only)
    if (clean.length <= 3) {
      // Short words (≤ 3 chars): pad with spaces → quadgrams as bonus signal (not in denominator)
      // e.g. "ke" → " ke " → quadgram " ke "; "hai" → " hai " → quadgrams " hai", "hai "
      const padded = " " + clean + " ";
      for (let i = 0; i <= padded.length - 4; i++) {
        particleQuadgrams.push(padded.slice(i, i + 4));
      }
    }
  }

  // Denominator only counts per-word n-grams; particles are bonus signal
  const totalNgrams = textTrigrams.length + textQuadgrams.length;
  if (totalNgrams < 10) {
    return { bestFamily: "", bestHitRate: 0, perFamilyRates: {}, totalTrigrams: totalNgrams, decayedScore: 0, triggered: false };
  }

  const diacriticChars = text.match(/[À-ÿĀ-žƠ-ơƯ-ưẠ-ỹ]/g);
  const latinChars = text.match(/[a-zA-ZÀ-ÿĀ-žƠ-ơƯ-ưẠ-ỹ]/g);
  const diacriticDensity = (diacriticChars?.length ?? 0) / (latinChars?.length ?? 1);

  const perFamilyHits: Record<string, number> = {};
  for (const [family, entry] of Object.entries(ROMANIZATION_NGRAMS)) {
    if (family === "vietnamese" && diacriticDensity > 0.05) continue;
    const { trigrams: trigramSet, quadgrams: quadgramSet, weakParticles: weakSet } = entry;

    let hits = 0;
    // Standard n-gram matching
    for (const tri of textTrigrams) {
      if (trigramSet.has(tri)) hits++;
    }
    for (const quad of textQuadgrams) {
      if (quadgramSet.has(quad)) hits += 1.5;
    }
    // Particle quadgram matches — bonus hits (not in denominator)
    // 2-letter particles (" ke " — 2 spaces) score 1.5, 3-letter (" hai" — 1 space) score 0.25
    for (const quad of particleQuadgrams) {
      if (quadgramSet.has(quad)) {
        const spaces = (quad.match(/ /g) || []).length;
        hits += spaces >= 2 ? 1.5 : 0.25;
      }
    }
    // Weak particle matches — cross-language particles scored at 0.5
    if (weakSet) {
      for (const quad of particleQuadgrams) {
        if (weakSet.has(quad)) hits += 0.5;
      }
    }
    if (hits > 0) perFamilyHits[family] = hits;
  }

  const perFamilyRates: Record<string, number> = {};
  for (const [family, hits] of Object.entries(perFamilyHits)) {
    perFamilyRates[family] = Math.min(1.0, hits / totalNgrams);
  }

  const sorted = Object.entries(perFamilyRates).sort(([, a], [, b]) => b - a);
  const bestFamily = sorted[0]?.[0] ?? "";
  const bestHitRate = sorted[0]?.[1] ?? 0;

  let decayedScore = 0;
  if (bestHitRate >= 0.18) {
    decayedScore = 1.0;
  } else if (bestHitRate >= 0.10) {
    decayedScore = 0.5;
    for (let i = 1; i < sorted.length; i++) {
      const decayFactor = Math.pow(0.5, i);
      decayedScore += sorted[i]![1]! * decayFactor * 5;
    }
  } else {
    for (let i = 0; i < sorted.length; i++) {
      const decayFactor = Math.pow(0.5, i);
      decayedScore += sorted[i]![1]! * decayFactor;
    }
  }

  return {
    bestFamily,
    bestHitRate,
    perFamilyRates,
    totalTrigrams: textTrigrams.length,
    decayedScore,
    triggered: bestHitRate >= 0.18,
  };
}

// ---------------------------------------------------------------------------
// isRomanized — main entry point
// ---------------------------------------------------------------------------

export type RomanizationTier = "high" | "mixed" | "none";

export interface RomanizationResult {
  isRomanized: boolean;
  confidence: number;
  tier: RomanizationTier;
  signals: string[];
}

const ELD_GARBAGE_LANGS = new Set(["yo", "hmn"]);

export function isRomanized(
  text: string,
  eldLang: string,
  eldTopScore: number,
  eldReliable: boolean,
  cluster: { isScattered: boolean; isCoherent: boolean; uniqueFamilies: number },
): RomanizationResult {
  const signals: string[] = [];
  let score = 0;

  const words = text.split(/\s+/).filter(w => w.length > 0);
  const alphaText = text.replace(/[^a-zA-ZÀ-ÿ\u0100-\u024F\u0370-\uFFFF]/g, "");
  const latinText = text.replace(/[^a-zA-ZÀ-ÿ\u0100-\u024F]/g, "");
  const isLatinScript = alphaText.length > 0 ? latinText.length / alphaText.length > 0.85 : true;

  if (!isLatinScript) return { isRomanized: false, confidence: 0, tier: "none", signals: ["native-script"] };
  if (words.length <= 3) return { isRomanized: false, confidence: 0, tier: "none", signals: ["too-short"] };

  // Graduated family scatter
  if (cluster.uniqueFamilies >= 5) {
    score += 0.20;
    signals.push("family-scatter-5");
  } else if (cluster.uniqueFamilies >= 4) {
    score += 0.15;
    signals.push("family-scatter-4");
  } else if (cluster.uniqueFamilies >= 3 && !cluster.isCoherent) {
    score += 0.10;
    signals.push("family-incoherent-3");
  }

  if (ELD_GARBAGE_LANGS.has(eldLang)) {
    score += 0.20;
    signals.push("eld-garbage-lang");
  }

  if (eldTopScore < 0.45) {
    score += 0.15;
    signals.push("very-low-eld");
  } else if (eldTopScore < 0.60) {
    score += 0.08;
    signals.push("low-eld");
  }

  if (!eldReliable) {
    score += 0.08;
    signals.push("eld-unreliable");
  }

  // Per-language romanization n-gram fingerprinting
  const fp = trigramFingerprint(text);
  if (fp.triggered) {
    score += 0.40;
    signals.push(`trigram-${fp.bestFamily}(${(fp.bestHitRate * 100).toFixed(0)}%)`);
  } else if (fp.bestHitRate >= 0.10) {
    score += 0.20;
    signals.push(`trigram-moderate-${fp.bestFamily}(${(fp.bestHitRate * 100).toFixed(0)}%,decay=${fp.decayedScore.toFixed(2)})`);
  } else if (fp.decayedScore >= 0.10) {
    score += 0.05;
    signals.push(`trigram-noise(${(fp.decayedScore * 100).toFixed(0)}%)`);
  }

  const confidence = Math.min(1.0, score);
  const tier: RomanizationTier = confidence >= 0.60 ? "high" : confidence >= 0.30 ? "mixed" : "none";
  return { isRomanized: confidence >= 0.40, confidence, tier, signals };
}

// ---------------------------------------------------------------------------
// Convenience wrapper — runs ELD + cluster + isRomanized in one call
// ---------------------------------------------------------------------------

export interface DetectRomanizationResult extends RomanizationResult {
  eldLanguage: string;
  eldTopScore: number;
  eldReliable: boolean;
  cluster: ClusterResult;
}

export function detectRomanization(text: string): DetectRomanizationResult {
  const result = eld.detect(text);
  const scores = result.getScores();
  const cluster = analyzeCluster(scores);
  const sortedScores = Object.values(scores).sort((a: number, b: number) => b - a);
  const eldTopScore = (sortedScores[0] ?? 0) as number;
  const r = isRomanized(text, result.language, eldTopScore, result.isReliable(), cluster);

  return {
    ...r,
    eldLanguage: result.language,
    eldTopScore,
    eldReliable: result.isReliable(),
    cluster,
  };
}

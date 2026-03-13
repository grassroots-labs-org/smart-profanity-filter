/**
 * Language dictionary data and trie structures for vocabulary-based language detection.
 *
 * Extracted from language-detector.ts to keep the large vocabulary database
 * separate from the detection logic.
 */

import type { LanguageCode } from "./language-detector.ts";

// ---------------------------------------------------------------------------
// Vocabulary database — common words for Latin-script disambiguation
// ---------------------------------------------------------------------------

export interface VocabEntry {
  words: string[];
  phrases: string[];
}

export const VOCABULARY: Partial<Record<LanguageCode, VocabEntry>> = {
  en: {
    words: [
      // Function words & pronouns
      "the", "be", "to", "of", "and", "a", "in", "that", "have", "it",
      "for", "not", "on", "with", "he", "as", "you", "do", "at", "this",
      "but", "his", "by", "from", "they", "we", "say", "her", "she", "or",
      "an", "will", "my", "one", "all", "would", "there", "their", "what",
      "so", "up", "out", "if", "about", "who", "get", "which", "go", "me",
      "when", "can", "like", "just", "him", "know", "take", "people",
      "into", "year", "your", "good", "some", "could", "them", "than",
      "other", "very", "after", "also", "did", "many", "before", "must",
      "hello", "goodbye", "please", "sorry", "thanks", "yes", "no",
      "okay", "really", "right", "every", "much", "world",
      "each", "thing", "things", "been", "done", "these", "those",
      "only", "well", "back", "over", "where", "here", "still", "now",
      "myself", "yourself", "himself", "herself", "itself", "ourselves",
      "themselves", "anybody", "anyone", "anything", "everybody", "everyone",
      "everything", "nobody", "nothing", "somebody", "someone", "something",
      // Common verbs
      "think", "make", "want", "give", "use", "find", "tell", "ask",
      "work", "seem", "feel", "try", "leave", "call", "keep", "let",
      "begin", "show", "hear", "play", "run", "move", "live", "believe",
      "bring", "happen", "write", "provide", "sit", "stand", "lose",
      "pay", "meet", "include", "continue", "set", "learn", "change",
      "lead", "understand", "watch", "follow", "stop", "create", "speak",
      "read", "allow", "add", "spend", "grow", "open", "walk", "win",
      "offer", "remember", "love", "consider", "appear", "buy", "wait",
      "serve", "die", "send", "expect", "build", "stay", "fall", "cut",
      "reach", "kill", "remain", "suggest", "raise", "pass", "sell",
      "eat", "drink", "sleep", "drive", "shop", "cook", "clean", "swim",
      "sing", "dance", "draw", "teach", "study", "travel", "visit",
      "wear", "carry", "pull", "push", "throw", "catch", "pick", "drop",
      "climb", "jump", "kick", "hit", "break", "fix", "choose", "fight",
      "forget", "guess", "hate", "hope", "hurry", "laugh", "listen",
      "miss", "need", "notice", "order", "plan", "promise", "refuse",
      "relax", "reply", "save", "search", "smile", "stare", "suppose",
      "taste", "touch", "trust", "wake", "warn", "wish", "worry",
      "agree", "argue", "arrive", "belong", "borrow", "breathe",
      "celebrate", "compare", "complain", "deliver", "describe", "destroy",
      "discover", "discuss", "divide", "doubt", "earn", "enjoy", "enter",
      "escape", "examine", "exchange", "exist", "explain", "explore",
      "express", "fail", "feed", "finish", "fly", "fold", "gather",
      "handle", "hang", "hide", "hold", "hunt", "hurry", "imagine",
      "improve", "invent", "invite", "join", "lend", "lift", "lock",
      "measure", "mention", "mind", "multiply", "obey", "owe",
      "pack", "paint", "perform", "permit", "pour", "pray", "prefer",
      "prepare", "press", "prevent", "print", "produce", "protect",
      "prove", "punish", "receive", "recognize", "recommend", "record",
      "reduce", "reflect", "refuse", "relate", "release", "repair",
      "repeat", "replace", "report", "represent", "request", "require",
      "respect", "retire", "return", "reveal", "ride", "ring", "roll",
      "rush", "satisfy", "scare", "scream", "separate", "settle",
      "shake", "share", "shout", "shut", "slip", "smoke", "sneeze",
      "solve", "sort", "spread", "squeeze", "steal", "stick", "stretch",
      "strike", "struggle", "succeed", "suffer", "supply", "support",
      "surprise", "surround", "survive", "suspect", "swear", "sweep",
      "swing", "switch", "tear", "tend", "threaten", "tidy", "tie",
      "translate", "trap", "treat", "trick", "trouble", "turn", "twist",
      "unite", "upset", "vote", "wander", "waste", "wave", "weigh",
      "welcome", "whisper", "wonder", "wrap", "yell",
      // Common nouns
      "time", "way", "day", "man", "woman", "child", "world", "life",
      "hand", "part", "place", "case", "week", "company", "system",
      "program", "question", "government", "number", "night", "point",
      "home", "water", "room", "mother", "area", "money", "story",
      "fact", "month", "lot", "right", "study", "book", "eye", "job",
      "word", "business", "issue", "side", "kind", "head", "house",
      "service", "friend", "father", "power", "hour", "game", "line",
      "end", "member", "law", "car", "city", "community", "name",
      "president", "team", "minute", "idea", "body", "information",
      "back", "parent", "face", "others", "level", "office", "door",
      "health", "person", "art", "war", "history", "party", "result",
      "morning", "reason", "research", "girl", "guy", "moment", "air",
      "teacher", "force", "education", "food", "school", "church",
      // Technology
      "computer", "phone", "internet", "email", "website", "software",
      "keyboard", "screen", "battery", "download", "upload", "password",
      "username", "browser", "laptop", "desktop", "tablet", "bluetooth",
      "wifi", "streaming", "podcast", "app", "database", "algorithm",
      // Food & drink
      "breakfast", "lunch", "dinner", "coffee", "chicken", "bread",
      "cheese", "butter", "sugar", "salt", "pepper", "soup", "salad",
      "sandwich", "steak", "bacon", "sausage", "pie", "cake", "cookie",
      "chocolate", "candy", "juice", "milk", "tea", "beer", "wine",
      "beef", "pork", "lamb", "turkey", "shrimp", "lobster", "tuna",
      "potato", "tomato", "onion", "garlic", "mushroom", "lettuce",
      "corn", "bean", "rice", "noodle", "flour", "dough", "gravy",
      "ketchup", "mustard", "vinegar", "honey", "jam", "cereal",
      "pancake", "waffle", "muffin", "donut", "bagel", "pretzel",
      // Time & calendar
      "today", "tomorrow", "yesterday", "monday", "tuesday", "wednesday",
      "thursday", "friday", "saturday", "sunday", "january", "february",
      "march", "april", "may", "june", "july", "august", "september",
      "october", "november", "december", "spring", "summer", "autumn",
      "winter", "midnight", "noon", "afternoon", "evening", "weekend",
      "tonight", "daily", "weekly", "monthly", "yearly", "forever",
      // Numbers
      "zero", "one", "two", "three", "four", "five", "six", "seven",
      "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen",
      "fifteen", "sixteen", "seventeen", "eighteen", "nineteen", "twenty",
      "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety",
      "hundred", "thousand", "million", "billion", "dozen", "half",
      "quarter", "third", "twice", "once",
      // Relationships & people
      "boyfriend", "girlfriend", "husband", "wife", "brother", "sister",
      "daughter", "son", "uncle", "aunt", "cousin", "nephew", "niece",
      "grandfather", "grandmother", "grandparent", "stepfather", "stepmother",
      "neighbor", "stranger", "colleague", "boss", "employee", "customer",
      "patient", "passenger", "audience", "crowd", "citizen", "volunteer",
      // Places & buildings
      "airport", "hospital", "restaurant", "hotel", "library", "museum",
      "stadium", "theater", "cinema", "mall", "supermarket", "pharmacy",
      "bakery", "bank", "factory", "warehouse", "garage", "basement",
      "apartment", "building", "bridge", "highway", "sidewalk", "parking",
      "bedroom", "bathroom", "kitchen", "garden", "backyard", "rooftop",
      "classroom", "playground", "gymnasium", "cafeteria", "hallway",
      // Transport
      "bus", "train", "bicycle", "motorcycle", "truck", "subway",
      "ferry", "helicopter", "airplane", "taxi", "traffic", "commute",
      // Clothing & accessories
      "shirt", "pants", "dress", "skirt", "jacket", "coat", "sweater",
      "boots", "sneakers", "sandals", "hat", "scarf", "gloves", "belt",
      "pocket", "zipper", "button", "collar", "sleeve", "helmet",
      // Body parts
      "finger", "thumb", "wrist", "elbow", "shoulder", "knee", "ankle",
      "toe", "heel", "chest", "stomach", "throat", "tongue", "teeth",
      "lip", "cheek", "chin", "forehead", "eyebrow", "eyelash", "brain",
      "heart", "lung", "muscle", "bone", "skin", "blood", "nail",
      // Nature & weather
      "rain", "snow", "wind", "cloud", "sunshine", "storm", "thunder",
      "lightning", "rainbow", "flood", "drought", "earthquake", "volcano",
      "river", "lake", "ocean", "beach", "mountain", "valley", "forest",
      "desert", "island", "cliff", "waterfall", "meadow", "swamp",
      "tree", "flower", "grass", "leaf", "branch", "root", "seed",
      // Animals
      "dog", "cat", "bird", "fish", "horse", "cow", "sheep", "pig",
      "chicken", "duck", "rabbit", "mouse", "deer", "bear", "wolf",
      "fox", "snake", "frog", "turtle", "whale", "dolphin", "shark",
      "eagle", "owl", "penguin", "butterfly", "spider", "bee", "ant",
      // Emotions & states
      "happy", "sad", "angry", "scared", "tired", "bored", "excited",
      "nervous", "confused", "surprised", "proud", "jealous", "lonely",
      "guilty", "ashamed", "grateful", "curious", "anxious", "calm",
      "comfortable", "disappointed", "embarrassed", "frustrated", "hopeful",
      // Everyday objects
      "table", "chair", "bed", "lamp", "mirror", "clock", "window",
      "pillow", "blanket", "towel", "soap", "toothbrush", "comb",
      "umbrella", "wallet", "purse", "backpack", "suitcase", "basket",
      "bottle", "cup", "plate", "bowl", "spoon", "fork", "knife",
      "scissors", "needle", "thread", "tape", "glue", "rope", "chain",
      "key", "lock", "bell", "candle", "match", "lighter", "battery",
      // Entertainment & hobbies
      "movie", "music", "song", "dance", "painting", "drawing",
      "photograph", "guitar", "piano", "drum", "violin", "concert",
      "festival", "carnival", "circus", "puzzle", "chess", "camping",
      "hiking", "fishing", "gardening", "cooking", "sewing", "knitting",
      // Sports
      "baseball", "basketball", "football", "soccer", "tennis", "golf",
      "volleyball", "hockey", "boxing", "wrestling", "swimming", "running",
      "cycling", "skiing", "skateboard", "surfing", "bowling", "archery",
      // Abstract & misc
      "truth", "freedom", "justice", "peace", "danger", "safety",
      "success", "failure", "chance", "choice", "trouble", "secret",
      "mistake", "lesson", "experience", "knowledge", "wisdom", "skill",
      "talent", "effort", "progress", "growth", "dream", "goal",
      "purpose", "value", "worth", "meaning", "beauty", "strength",
      "courage", "patience", "kindness", "honesty", "loyalty", "respect",
      "pride", "shame", "anger", "fear", "joy", "grief", "pain",
      "pleasure", "comfort", "relief", "burden", "struggle", "victory",
      "defeat", "reward", "punishment", "blame", "praise", "criticism",
      // Common adjectives (expanded)
      "new", "old", "great", "big", "small", "long", "high", "little",
      "own", "young", "important", "few", "public", "bad", "same",
      "able", "last", "large", "social", "sure", "early", "real",
      "clear", "different", "whole", "possible", "full", "special",
      "free", "strong", "human", "local", "best", "better", "true",
      "hard", "white", "black", "close", "common", "short", "natural",
      "cool", "awesome", "amazing", "nice", "pretty", "funny", "weird",
      "crazy", "stupid", "smart", "clever", "brilliant", "gorgeous",
      "ugly", "tiny", "huge", "thick", "thin", "narrow", "wide",
      "deep", "shallow", "rough", "smooth", "sharp", "dull", "loud",
      "quiet", "bright", "dark", "warm", "cold", "hot", "fresh",
      "stale", "wet", "dry", "clean", "dirty", "empty", "crowded",
      "cheap", "expensive", "rich", "poor", "busy", "lazy", "strict",
      "gentle", "fierce", "mild", "severe", "obvious", "subtle",
      "ordinary", "strange", "familiar", "foreign", "ancient", "modern",
      "previous", "current", "recent", "sudden", "gradual", "steady",
      "rapid", "slow", "quick", "fast", "heavy", "light", "soft",
      "tough", "loose", "tight", "straight", "crooked", "flat", "steep",
      "hollow", "solid", "raw", "ripe", "rotten", "bitter", "sweet",
      "sour", "spicy", "salty", "delicious", "disgusting", "awful",
      "wonderful", "terrible", "fantastic", "incredible", "ridiculous",
      "jealous", "selfish", "generous", "greedy", "humble", "arrogant",
      // Common adverbs & connectors
      "then", "too", "really", "already", "always", "never", "often",
      "still", "even", "here", "enough", "well", "actually", "probably",
      "maybe", "perhaps", "however", "although", "because", "since",
      "while", "though", "whether", "between", "without", "through",
      "during", "under", "around", "among", "until", "toward",
      "together", "sometimes", "usually", "certainly", "especially",
      "barely", "hardly", "merely", "nearly", "quite", "rather",
      "somewhat", "entire", "complete", "absolute", "definite",
      "obvious", "apparent", "basic", "essential", "literal",
      "serious", "honest", "frank", "hopeful", "fortunate",
      "unfortunate", "meanwhile", "nevertheless",
      "furthermore", "moreover", "otherwise", "therefore",
      "regardless", "besides", "instead", "anyway", "somehow", "somewhere",
      "nowhere", "everywhere", "anywhere", "whenever", "wherever",
      "whatever", "whoever", "whichever",
      // International words (shared across many languages — also present in respective language vocabs)
      "bar", "film", "sport", "metro", "tram", "motor", "boot", "brief",
      "park", "bank", "album", "radar", "yoga", "safari", "guru",
      "cycle", "lorry", "launch", "jacket", "belt", "auto",
      "rail", "coat", "sandal", "pant", "sweater",
    ],
    phrases: [
      "how are you", "thank you", "good morning", "what is this",
      "where is it", "how much", "what time", "where are you from",
      "can you help", "nice to meet you", "good evening", "good night",
      "see you later", "i don't know", "i think so", "of course",
      "no problem", "excuse me", "i'm sorry", "what do you mean",
      "how do you", "let me know", "take care", "by the way",
      "as soon as", "in order to", "a lot of", "kind of",
      "sort of", "used to", "going to", "have to", "want to",
      "need to", "supposed to", "looking for", "waiting for",
      "talking about", "thinking about", "right now", "so far",
      "at least", "at first", "on the other hand", "for example",
    ],
  },
  es: {
    words: [
      // Articles, prepositions, conjunctions
      "el", "la", "los", "las", "de", "que", "y", "en", "un", "una",
      "por", "con", "para", "como", "está", "más", "pero", "su", "se",
      "ha", "es", "lo", "ya", "todo", "al", "del", "le", "les", "nos",
      "sin", "sobre", "entre", "hasta", "desde", "hacia", "según",
      "durante", "mediante", "contra", "ante", "tras",
      "aunque", "porque", "sino", "mientras", "cuando", "donde",
      "pues", "luego", "ni", "ambos", "cualquier", "demás",
      // Pronouns
      "yo", "tú", "él", "ella", "nosotros", "vosotros", "ellos", "ellas",
      "usted", "ustedes", "me", "te", "nos", "os", "mío", "tuyo", "suyo",
      "nuestro", "vuestro", "este", "ese", "aquel", "esto", "eso", "aquello",
      "alguien", "nadie", "algo", "nada", "cada", "ambas", "cuyo", "cuya",
      // Common verbs (infinitives)
      "ser", "estar", "tener", "hacer", "poder", "decir", "ir", "ver",
      "dar", "saber", "querer", "llegar", "pasar", "deber", "poner",
      "parecer", "quedar", "creer", "hablar", "llevar", "dejar", "seguir",
      "encontrar", "llamar", "venir", "pensar", "salir", "volver",
      "tomar", "conocer", "vivir", "sentir", "tratar", "mirar",
      "contar", "empezar", "esperar", "buscar", "existir", "entrar",
      "trabajar", "escribir", "perder", "producir", "ocurrir", "entender",
      "pedir", "recibir", "recordar", "terminar", "permitir", "aparecer",
      "conseguir", "comenzar", "servir", "sacar", "necesitar", "mantener",
      "tiene", "puede", "hace", "soy", "fue", "sido", "siendo",
      "comer", "beber", "dormir", "correr", "nadar", "bailar", "cantar",
      "cocinar", "limpiar", "comprar", "vender", "pagar", "ganar",
      "jugar", "estudiar", "enseñar", "aprender", "leer", "abrir",
      "cerrar", "subir", "bajar", "caer", "tirar", "empujar", "romper",
      "construir", "dibujar", "pintar", "conducir", "manejar", "viajar",
      "caminar", "gritar", "llorar", "reír", "sonreír", "soñar",
      "despertar", "acostar", "vestir", "elegir", "ofrecer", "cumplir",
      "olvidar", "imaginar", "intentar", "lograr", "mejorar", "cambiar",
      "crecer", "morir", "nacer", "sufrir", "disfrutar", "celebrar",
      "explicar", "preguntar", "responder", "agradecer", "disculpar",
      "prometer", "confiar", "mentir", "robar", "escapar", "proteger",
      "destruir", "luchar", "gastar", "ahorrar", "invertir", "mover",
      // Common nouns
      "vida", "tiempo", "mundo", "casa", "trabajo", "amigo", "familia",
      "comida", "agua", "dinero", "día", "noche", "mañana", "tarde",
      "semana", "mes", "año", "hombre", "mujer", "niño", "niña",
      "ciudad", "país", "pueblo", "calle", "lugar", "parte", "gobierno",
      "empresa", "escuela", "grupo", "problema", "punto", "momento",
      "persona", "forma", "ejemplo", "historia", "cosa", "manera",
      "derecho", "estado", "guerra", "razón", "verdad", "fuerza",
      "tierra", "hijo", "padre", "madre", "hermano", "hermana",
      "corazón", "puerta", "cuerpo", "cabeza", "mano", "ojo",
      "libro", "palabra", "camino", "iglesia", "nombre", "muerte",
      // Family & people
      "abuelo", "abuela", "tío", "tía", "primo", "prima", "sobrino",
      "sobrina", "esposo", "esposa", "novio", "novia", "vecino", "vecina",
      // Food & drink
      "desayuno", "almuerzo", "cena", "pan", "leche", "queso", "huevo",
      "arroz", "carne", "pollo", "pescado", "fruta", "verdura", "sopa",
      "ensalada", "postre", "helado", "galleta", "cerveza", "vino",
      "aceite", "sal", "azúcar", "pimienta", "ajo", "cebolla", "tomate",
      "manzana", "naranja", "plátano", "fresa", "uva", "limón",
      // Days, months, seasons
      "lunes", "martes", "miércoles", "jueves", "viernes", "sábado",
      "domingo", "enero", "febrero", "marzo", "abril", "mayo", "junio",
      "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre",
      "primavera", "verano", "otoño", "invierno",
      // Numbers
      "cero", "uno", "dos", "tres", "cuatro", "cinco", "seis", "siete",
      "ocho", "nueve", "diez", "once", "doce", "veinte", "treinta",
      "cuarenta", "cincuenta", "cien", "mil", "millón",
      // Body parts
      "brazo", "pierna", "pie", "rodilla", "hombro", "dedo", "espalda",
      "estómago", "pecho", "cuello", "nariz", "oreja", "boca", "diente",
      "labio", "mejilla", "frente", "pelo", "piel", "hueso", "sangre",
      // Nature & weather
      "lluvia", "nieve", "viento", "nube", "sol", "tormenta", "trueno",
      "relámpago", "río", "lago", "mar", "playa", "montaña", "bosque",
      "desierto", "isla", "árbol", "flor", "hierba", "hoja", "piedra",
      // Animals
      "perro", "gato", "pájaro", "pez", "caballo", "vaca", "oveja",
      "cerdo", "conejo", "ratón", "oso", "lobo", "serpiente", "rana",
      "tortuga", "ballena", "tiburón", "águila", "mariposa", "hormiga",
      // Places
      "aeropuerto", "hospital", "restaurante", "biblioteca", "museo",
      "estación", "mercado", "tienda", "farmacia", "panadería", "banco",
      "cocina", "habitación", "jardín", "terraza", "balcón", "escalera",
      // Clothing
      "camisa", "pantalón", "vestido", "falda", "chaqueta", "abrigo",
      "zapato", "bota", "sombrero", "bufanda", "guante", "cinturón",
      // Abstract
      "libertad", "justicia", "paz", "peligro", "seguridad", "éxito",
      "fracaso", "sueño", "esperanza", "miedo", "alegría", "tristeza",
      "amor", "odio", "culpa", "orgullo", "vergüenza", "paciencia",
      "confianza", "respeto", "valor", "belleza", "fuerza", "salud",
      // Common adjectives
      "bueno", "malo", "grande", "pequeño", "nuevo", "viejo", "mejor",
      "peor", "primero", "último", "mismo", "largo", "joven", "alto",
      "bajo", "bonito", "importante", "diferente", "posible", "cierto",
      "claro", "fuerte", "libre", "lleno", "solo", "propio", "siguiente",
      "hermoso", "feo", "gordo", "flaco", "delgado", "ancho", "estrecho",
      "profundo", "caliente", "frío", "tibio", "seco", "húmedo",
      "limpio", "sucio", "vacío", "lleno", "barato", "caro", "rico",
      "pobre", "rápido", "lento", "suave", "duro", "blando", "amargo",
      "dulce", "salado", "picante", "sabroso", "asqueroso", "maravilloso",
      "terrible", "fantástico", "increíble", "ridículo", "gracioso",
      "aburrido", "emocionante", "tranquilo", "nervioso", "orgulloso",
      "celoso", "generoso", "amable", "grosero", "tonto", "inteligente",
      // Colors
      "rojo", "azul", "verde", "amarillo", "negro", "blanco", "gris",
      "marrón", "rosa", "morado", "naranja", "dorado", "plateado",
      // Common adverbs
      "también", "siempre", "nunca", "ahora", "después", "antes",
      "aquí", "allí", "muy", "bien", "mal", "bastante", "todavía",
      "casi", "menos", "además", "quizás", "tampoco", "apenas",
      "incluso", "sólo", "solamente", "realmente", "normalmente",
      "rápido", "lento", "fácil", "difícil",
      "completo", "exacto", "probable", "seguro",
      "final", "general", "especial", "principal",
    ],
    phrases: [
      "cómo estás", "buenos días", "qué es esto", "dónde está",
      "cuánto cuesta", "qué hora es", "de dónde eres",
      "puedes ayudarme", "mucho gusto", "buenas tardes", "buenas noches",
      "hasta luego", "nos vemos", "con permiso", "lo siento",
      "no sé", "creo que", "por favor", "por supuesto", "claro que sí",
      "qué tal", "qué pasa", "no hay problema", "está bien",
      "me llamo", "tengo que", "hay que", "a veces", "en seguida",
      "sin embargo", "por ejemplo", "al menos", "en realidad",
      "cada vez", "tal vez", "sobre todo", "de acuerdo", "a menudo",
      "al final", "más o menos", "poco a poco", "en cambio",
    ],
  },
  fr: {
    words: [
      // Articles, prepositions, conjunctions
      "le", "la", "les", "de", "un", "une", "des", "et", "en", "que",
      "est", "pour", "dans", "par", "avec", "plus", "son", "ou", "mais",
      "ce", "qui", "il", "elle", "on", "nous", "vous", "ils", "elles",
      "au", "aux", "du", "entre", "vers", "chez", "sans", "sous", "sur",
      "depuis", "pendant", "avant", "après", "contre", "selon",
      // Pronouns
      "je", "tu", "moi", "toi", "lui", "eux", "soi", "ceux", "celles",
      "mon", "ton", "notre", "votre", "leur", "tout", "celui", "celle",
      "rien", "personne", "quelqu'un", "chacun", "chaque", "aucun",
      "ceci", "cela", "lequel", "laquelle", "lesquels", "lesquelles",
      // Common verbs
      "être", "avoir", "faire", "dire", "aller", "voir", "savoir",
      "pouvoir", "falloir", "vouloir", "venir", "prendre", "trouver",
      "donner", "parler", "mettre", "devoir", "passer", "regarder",
      "aimer", "croire", "demander", "rester", "répondre", "entendre",
      "penser", "arriver", "connaître", "devenir", "sentir", "sembler",
      "tenir", "comprendre", "rendre", "attendre", "sortir", "vivre",
      "chercher", "porter", "revenir", "mourir", "écrire", "ouvrir",
      "appeler", "perdre", "permettre", "commencer", "suivre", "montrer",
      "servir", "recevoir", "finir", "lire", "tomber", "manger",
      "boire", "dormir", "courir", "nager", "danser", "chanter",
      "cuisiner", "nettoyer", "acheter", "vendre", "payer", "gagner",
      "jouer", "étudier", "enseigner", "apprendre", "conduire",
      "voyager", "marcher", "crier", "pleurer", "rire", "sourire",
      "rêver", "réveiller", "habiller", "choisir", "offrir", "oublier",
      "imaginer", "essayer", "réussir", "améliorer", "grandir",
      "naître", "souffrir", "profiter", "célébrer", "expliquer",
      "remercier", "excuser", "promettre", "mentir", "voler",
      "protéger", "détruire", "lutter", "dépenser", "économiser",
      "construire", "dessiner", "peindre", "coudre", "jardiner",
      "embrasser", "caresser", "emménager", "déménager", "réfléchir",
      "partager", "préparer", "ranger", "réparer", "découvrir",
      // Common nouns
      "homme", "femme", "enfant", "jour", "temps", "monde", "vie",
      "chose", "main", "maison", "pays", "moment", "heure", "place",
      "travail", "tête", "yeux", "voix", "porte", "cas", "eau",
      "corps", "ville", "nom", "terre", "ami", "droit", "état",
      "problème", "exemple", "groupe", "raison", "guerre", "force",
      "mot", "livre", "histoire", "école", "famille", "gouvernement",
      "père", "mère", "frère", "sœur", "fils", "fille", "cœur",
      "rue", "nuit", "matin", "soir", "semaine", "mois", "année",
      // Family
      "oncle", "tante", "neveu", "nièce", "cousin", "cousine",
      "grand-père", "grand-mère", "époux", "épouse", "copain", "copine",
      "voisin", "voisine", "bébé", "adolescent",
      // Food & drink
      "petit-déjeuner", "déjeuner", "dîner", "pain", "lait", "fromage",
      "beurre", "œuf", "riz", "viande", "poulet", "poisson", "fruit",
      "légume", "soupe", "salade", "dessert", "glace", "gâteau",
      "biscuit", "bière", "vin", "café", "thé", "sucre", "sel",
      "poivre", "huile", "ail", "oignon", "pomme", "orange", "fraise",
      "croissant", "baguette", "crêpe", "quiche", "confiture",
      // Days, months, seasons
      "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi",
      "dimanche", "janvier", "février", "mars", "avril", "mai", "juin",
      "juillet", "août", "septembre", "octobre", "novembre", "décembre",
      "printemps", "été", "automne", "hiver",
      // Numbers
      "zéro", "deux", "trois", "quatre", "cinq", "six", "sept",
      "huit", "neuf", "dix", "onze", "douze", "treize", "quatorze",
      "quinze", "seize", "vingt", "trente", "quarante", "cinquante",
      "soixante", "cent", "mille", "million",
      // Body parts
      "bras", "jambe", "pied", "genou", "épaule", "doigt", "dos",
      "ventre", "poitrine", "cou", "nez", "oreille", "bouche", "dent",
      "lèvre", "joue", "front", "cheveux", "peau", "sang",
      // Nature & weather
      "pluie", "neige", "vent", "nuage", "soleil", "tempête", "tonnerre",
      "éclair", "rivière", "lac", "mer", "plage", "montagne", "forêt",
      "désert", "île", "arbre", "fleur", "herbe", "feuille", "pierre",
      "ciel", "étoile", "lune",
      // Animals
      "chien", "chat", "oiseau", "cheval", "vache", "mouton", "cochon",
      "lapin", "souris", "ours", "loup", "serpent", "grenouille",
      "tortue", "baleine", "requin", "aigle", "papillon", "fourmi",
      // Places
      "aéroport", "hôpital", "restaurant", "bibliothèque", "musée",
      "gare", "marché", "magasin", "pharmacie", "boulangerie", "banque",
      "cuisine", "chambre", "jardin", "terrasse", "escalier", "bureau",
      // Clothing
      "chemise", "pantalon", "robe", "jupe", "veste", "manteau",
      "chaussure", "botte", "chapeau", "écharpe", "ceinture",
      // Abstract
      "liberté", "justice", "paix", "danger", "sécurité", "succès",
      "échec", "rêve", "espoir", "peur", "joie", "tristesse",
      "amour", "haine", "bonheur", "malheur", "courage", "patience",
      "confiance", "respect", "beauté", "vérité", "sagesse",
      // Common adjectives
      "bien", "mal", "grand", "petit", "bon", "mauvais", "beau",
      "jeune", "vieux", "nouveau", "ancien", "premier", "dernier",
      "autre", "même", "aussi", "très", "ici", "donc", "puis",
      "quand", "comme", "long", "haut", "bas", "gros", "seul",
      "fort", "plein", "vrai", "faux", "meilleur", "pire", "libre",
      "important", "différent", "possible", "certain", "clair",
      "beau", "laid", "mince", "épais", "chaud", "froid", "tiède",
      "sec", "humide", "propre", "sale", "vide", "plein", "doux",
      "dur", "mou", "amer", "sucré", "salé", "épicé", "délicieux",
      "merveilleux", "terrible", "fantastique", "incroyable", "drôle",
      "ennuyeux", "passionnant", "tranquille", "nerveux", "fier",
      "jaloux", "généreux", "gentil", "méchant", "intelligent",
      // Colors
      "rouge", "bleu", "vert", "jaune", "noir", "blanc", "gris",
      "marron", "rose", "violet", "orange", "doré", "argenté",
      // Common adverbs
      "toujours", "jamais", "souvent", "parfois", "maintenant",
      "encore", "déjà", "bientôt", "ensemble", "vraiment", "surtout",
      "assez", "trop", "peu", "beaucoup", "autant", "presque",
      "ailleurs", "autrement", "cependant", "pourtant", "néanmoins",
      "davantage", "seulement", "évidemment", "absolument",
      "rapide", "lent", "facile", "difficile",
      "complet", "exact", "probable", "final", "général", "spécial",
      "principal", "simple", "double", "triple", "seul",
    ],
    phrases: [
      "comment allez-vous", "bonjour", "où est", "combien ça coûte",
      "quelle heure", "pouvez-vous", "enchanté", "je suis", "il y a",
      "bonne nuit", "bonsoir", "au revoir", "à bientôt", "s'il vous plaît",
      "merci beaucoup", "de rien", "je ne sais pas", "je pense que",
      "bien sûr", "pas de problème", "comment ça va", "ça va bien",
      "qu'est-ce que", "est-ce que", "il faut", "en fait", "par exemple",
      "tout à fait", "c'est-à-dire", "en train de", "à cause de",
      "grâce à", "au lieu de", "de temps en temps", "peu à peu",
      "de plus en plus", "tout de suite", "en même temps",
      "peut-être", "n'est-ce pas", "quand même", "je voudrais",
    ],
  },
  de: {
    words: [
      // Articles, prepositions, conjunctions
      "der", "die", "das", "und", "in", "den", "von", "zu", "mit",
      "sich", "des", "auf", "für", "ist", "im", "dem", "nicht", "ein",
      "eine", "als", "auch", "es", "an", "werden", "aus", "er", "hat",
      "dass", "sie", "nach", "bei", "um", "am", "noch", "wie", "über",
      "so", "nur", "oder", "aber", "vor", "bis", "durch", "gegen",
      "ohne", "seit", "während", "wegen", "trotz", "ich", "wir",
      "unter", "zwischen", "neben", "hinter", "außer", "statt",
      // Pronouns
      "mein", "dein", "sein", "ihr", "unser", "euer", "dieser", "jener",
      "welcher", "jeder", "alle", "manche", "einige", "kein", "niemand",
      "jemand", "etwas", "nichts", "man", "selbst", "mir", "dir", "ihm",
      // Common verbs
      "haben", "sein", "werden", "können", "müssen", "sollen", "wollen",
      "dürfen", "mögen", "machen", "gehen", "kommen", "sehen", "geben",
      "nehmen", "finden", "denken", "sagen", "sprechen", "stehen",
      "lassen", "halten", "bringen", "leben", "fahren", "meinen",
      "fragen", "kennen", "gelten", "stellen", "spielen", "arbeiten",
      "brauchen", "folgen", "lernen", "bestehen", "verstehen", "setzen",
      "bekommen", "beginnen", "erzählen", "versuchen", "schreiben",
      "laufen", "erklären", "entsprechen", "sitzen", "ziehen", "scheinen",
      "fallen", "gehören", "entstehen", "erhalten", "treffen", "suchen",
      "legen", "vorstellen", "handeln", "erreichen", "tragen", "schaffen",
      "lesen", "verlieren", "darstellen", "erkennen", "entwickeln",
      "essen", "trinken", "schlafen", "schwimmen", "tanzen", "singen",
      "kochen", "putzen", "kaufen", "verkaufen", "bezahlen", "gewinnen",
      "studieren", "unterrichten", "öffnen", "schließen",
      "steigen", "fallen", "werfen", "fangen", "brechen", "bauen",
      "zeichnen", "malen", "reisen", "wandern", "schreien", "weinen",
      "lachen", "lächeln", "träumen", "aufwachen", "anziehen",
      "wählen", "vergessen", "verbessern", "wachsen", "sterben",
      "leiden", "genießen", "feiern", "versprechen", "lügen",
      "stehlen", "schützen", "zerstören", "kämpfen", "sparen",
      "fliegen", "rennen", "springen", "klettern", "reparieren",
      // Common nouns (lowercased for trie matching)
      "zeit", "jahr", "mensch", "tag", "welt", "haus", "kind", "frau",
      "mann", "teil", "arbeit", "land", "stadt", "frage", "geld",
      "hand", "leben", "seite", "wasser", "kopf", "auge", "wort",
      "buch", "schule", "familie", "freund", "name", "straße", "kirche",
      "nacht", "morgen", "abend", "woche", "monat", "stunde", "minute",
      "mutter", "vater", "bruder", "schwester", "sohn", "tochter",
      "herz", "tür", "körper", "regierung", "geschichte", "gruppe",
      "beispiel", "problem", "grund", "recht", "krieg", "kraft",
      // Family
      "onkel", "tante", "neffe", "nichte", "großvater", "großmutter",
      "ehemann", "ehefrau", "freundin", "nachbar", "nachbarin",
      // Food & drink
      "frühstück", "mittagessen", "abendessen", "brot", "milch", "käse",
      "butter", "ei", "reis", "fleisch", "hähnchen", "fisch", "obst",
      "gemüse", "suppe", "salat", "kuchen", "keks", "bier", "wein",
      "kaffee", "tee", "zucker", "salz", "pfeffer", "kartoffel",
      "zwiebel", "knoblauch", "apfel", "birne", "erdbeere", "traube",
      "brötchen", "wurst", "schinken", "marmelade", "honig",
      // Days, months, seasons
      "montag", "dienstag", "mittwoch", "donnerstag", "freitag",
      "samstag", "sonntag", "januar", "februar", "märz", "april",
      "mai", "juni", "juli", "august", "september", "oktober",
      "november", "dezember", "frühling", "sommer", "herbst", "winter",
      // Numbers
      "null", "eins", "zwei", "drei", "vier", "fünf", "sechs", "sieben",
      "acht", "neun", "zehn", "elf", "zwölf", "zwanzig", "dreißig",
      "vierzig", "fünfzig", "hundert", "tausend",
      // Body parts
      "arm", "bein", "fuß", "knie", "schulter", "finger", "rücken",
      "bauch", "brust", "hals", "nase", "ohr", "mund", "zahn",
      "lippe", "stirn", "haar", "haut", "knochen", "blut", "gehirn",
      // Nature & weather
      "regen", "schnee", "wind", "wolke", "sonne", "sturm", "donner",
      "blitz", "fluss", "see", "meer", "strand", "berg", "wald",
      "wüste", "insel", "baum", "blume", "gras", "blatt", "stein",
      "himmel", "stern", "mond",
      // Animals
      "hund", "katze", "vogel", "pferd", "kuh", "schaf", "schwein",
      "kaninchen", "maus", "bär", "wolf", "schlange", "frosch",
      "schildkröte", "wal", "adler", "schmetterling", "ameise",
      // Places
      "flughafen", "krankenhaus", "bibliothek", "bahnhof", "markt",
      "laden", "apotheke", "bäckerei", "küche", "schlafzimmer",
      "badezimmer", "garten", "balkon", "treppe", "büro", "fabrik",
      // Clothing
      "hemd", "hose", "kleid", "rock", "jacke", "mantel", "schuh",
      "stiefel", "hut", "schal", "handschuh", "gürtel", "tasche",
      // Abstract
      "freiheit", "gerechtigkeit", "frieden", "gefahr", "sicherheit",
      "erfolg", "traum", "hoffnung", "angst", "freude", "traurigkeit",
      "liebe", "hass", "glück", "unglück", "mut", "geduld",
      "vertrauen", "respekt", "schönheit", "wahrheit", "weisheit",
      // Words with ä, ö, ü, ß (strong discriminators)
      "ärger", "überraschung", "öffentlich", "müdigkeit", "gemütlich",
      "größe", "fähigkeit", "regelmäßig", "fußball", "süßigkeit",
      "glücklich", "hübsch", "nützlich", "gewöhnlich", "natürlich",
      "höflich", "ärztlich", "üblich", "tüchtig", "plötzlich",
      "vergnügen", "prüfung", "übung", "lösung", "erklärung",
      "veränderung", "enttäuschung", "entschädigung", "beförderung",
      "beschäftigung", "verfügung", "verpflichtung", "gründlich",
      // Common adjectives
      "gut", "schlecht", "groß", "klein", "neu", "alt", "lang", "kurz",
      "hoch", "niedrig", "stark", "schwach", "schnell", "langsam",
      "schön", "wichtig", "richtig", "falsch", "frei", "voll", "leer",
      "möglich", "nötig", "sicher", "klar", "einfach", "schwer",
      "verschieden", "besonder", "eigen", "ganz", "halb", "einzig",
      "dunkel", "hell", "warm", "kalt", "heiß", "nass", "trocken",
      "sauber", "schmutzig", "billig", "teuer", "reich", "arm",
      "dick", "dünn", "breit", "eng", "tief", "flach", "glatt",
      "rau", "weich", "hart", "bitter", "süß", "sauer", "scharf",
      "lecker", "wunderbar", "schrecklich", "fantastisch", "lustig",
      "langweilig", "aufregend", "ruhig", "nervös", "stolz",
      "eifersüchtig", "großzügig", "freundlich", "dumm", "klug",
      // Colors
      "rot", "blau", "grün", "gelb", "schwarz", "weiß", "grau",
      "braun", "rosa", "lila", "orange", "golden", "silbern",
      // Common adverbs
      "schon", "immer", "wieder", "sehr", "hier", "da", "dort",
      "jetzt", "heute", "gestern", "morgen", "dann", "vielleicht",
      "genau", "wirklich", "natürlich", "eigentlich", "überhaupt",
      "besonders", "allerdings", "außerdem", "trotzdem", "deshalb",
      "deswegen", "zuerst", "zunächst", "schließlich", "endlich",
      "wahrscheinlich", "tatsächlich", "offenbar", "anscheinend",
      "sofort", "manchmal", "niemals", "oben", "unten", "links",
      "rechts", "draußen", "drinnen", "irgendwo", "überall", "nirgends",
      // Discourse particles (strong German markers)
      "doch", "halt", "eben", "mal", "wohl", "ja", "nein",
      "bitte", "danke", "stimmt", "genau", "ach", "na",
    ],
    phrases: [
      "wie geht es", "guten morgen", "was ist das", "wo ist",
      "wie viel kostet", "wie spät", "woher kommen", "können sie",
      "freut mich", "ich bin", "guten tag", "guten abend", "gute nacht",
      "auf wiedersehen", "bis bald", "tut mir leid", "entschuldigung",
      "bitte schön", "danke schön", "ich weiß nicht", "ich glaube",
      "natürlich", "kein problem", "zum beispiel", "es gibt",
      "ich möchte", "ich hätte gern", "das heißt", "auf jeden fall",
      "im gegenteil", "vor allem", "nach und nach", "so bald wie möglich",
      "meiner meinung nach", "was für ein", "wie bitte",
      "ich verstehe", "es tut mir leid", "um so besser",
    ],
  },
  it: {
    words: [
      // Articles, prepositions, conjunctions
      "il", "lo", "la", "gli", "le", "di", "che", "non", "un", "una",
      "per", "con", "da", "su", "del", "della", "dei", "delle", "dello",
      "degli", "nel", "nella", "nei", "nelle", "nello", "negli",
      "al", "alla", "ai", "alle", "allo", "agli", "tra", "fra",
      "come", "più", "ma", "anche", "ancora",
      // Pronouns
      "io", "tu", "lui", "lei", "noi", "voi", "loro", "questo", "quello",
      "quella", "chi", "cosa", "quando", "dove", "perché", "quanto",
      "quale", "mio", "tuo", "suo", "nostro", "vostro", "ogni",
      "qualcuno", "nessuno", "qualcosa", "niente", "nulla", "ciascuno",
      "stesso", "altro", "tutto", "poco", "molto", "tanto", "troppo",
      // Common verbs
      "essere", "avere", "fare", "dire", "andare", "vedere", "dare",
      "sapere", "potere", "volere", "venire", "dovere", "stare",
      "prendere", "trovare", "parlare", "mettere", "pensare", "credere",
      "portare", "passare", "guardare", "lasciare", "seguire",
      "restare", "chiamare", "sentire", "tenere", "capire", "vivere",
      "aprire", "scrivere", "leggere", "perdere", "conoscere",
      "cominciare", "finire", "mangiare", "bere", "dormire", "correre",
      "tornare", "morire", "uscire", "entrare", "ricordare", "sembrare",
      "cambiare", "lavorare", "giocare", "aiutare", "aspettare",
      // Common nouns
      "uomo", "donna", "bambino", "tempo", "anno", "giorno", "mondo",
      "vita", "volta", "casa", "parte", "mano", "occhio", "testa",
      "acqua", "lavoro", "sera", "notte", "mattina", "settimana",
      "mese", "padre", "madre", "figlio", "figlia", "fratello", "sorella",
      "amico", "nome", "città", "paese", "strada", "porta", "corpo",
      "cuore", "parola", "libro", "storia", "scuola", "famiglia",
      "governo", "esempio", "problema", "ragione", "guerra", "forza",
      "chiesa", "terra", "stato", "diritto", "gruppo",
      // Common adjectives
      "buono", "cattivo", "grande", "piccolo", "nuovo", "vecchio",
      "bello", "brutto", "alto", "basso", "lungo", "corto", "forte",
      "debole", "giovane", "importante", "diverso", "possibile",
      "vero", "falso", "libero", "pieno", "vuoto", "solo", "primo",
      "ultimo", "migliore", "peggiore", "certo", "chiaro", "semplice",
      // Common adverbs
      "bene", "male", "sempre", "mai", "spesso", "già", "poi",
      "così", "ora", "dopo", "prima", "qui", "ancora", "anche",
      "molto", "poco", "troppo", "abbastanza", "subito", "insieme",
      "davvero", "forse", "comunque", "tuttavia", "inoltre", "soprattutto",
      "certamente", "probabilmente", "praticamente", "veramente",
      // Food
      "pasta", "pizza", "risotto", "gelato", "pane", "formaggio", "prosciutto",
      "olio", "aceto", "aglio", "cipolla", "pomodoro", "basilico", "pepe",
      "sale", "zucchero", "burro", "latte", "uovo", "riso", "farina",
      "carne", "pesce", "pollo", "maiale", "manzo", "vitello", "agnello",
      "insalata", "minestra", "zuppa", "frutta", "mela", "arancia", "limone",
      "fragola", "uva", "pesca", "ciliegia", "melone", "banana", "pera",
      "vino", "birra", "caffè", "cappuccino", "espresso", "grappa",
      "focaccia", "bruschetta", "lasagna", "ravioli", "gnocchi", "polenta",
      "tiramisu", "panna", "biscotto", "torta", "cornetto", "brioche",
      // Body
      "braccio", "gamba", "piede", "ginocchio", "spalla", "dito",
      "schiena", "pancia", "petto", "collo", "naso", "orecchio",
      "bocca", "labbro", "faccia", "fronte", "capelli", "pelle",
      "osso", "sangue", "cervello", "muscolo", "stomaco",
      // Family
      "nonno", "nonna", "zio", "zia", "cugino", "cugina", "nipote",
      "suocero", "suocera", "cognato", "cognata", "genero", "nuora",
      "fidanzato", "fidanzata", "marito", "moglie", "sposo", "sposa",
      // Animals
      "cane", "gatto", "cavallo", "mucca", "pecora", "maiale", "coniglio",
      "topo", "orso", "lupo", "serpente", "rana", "tartaruga",
      "balena", "squalo", "aquila", "farfalla", "formica", "ape",
      "leone", "tigre", "elefante", "scimmia", "cervo", "volpe",
      "gallina", "uccello", "pesce", "delfino", "cinghiale",
      // Nature
      "pioggia", "neve", "vento", "nuvola", "sole", "tempesta", "tuono",
      "fulmine", "arcobaleno", "fiume", "lago", "mare", "spiaggia",
      "montagna", "collina", "foresta", "bosco", "deserto", "isola",
      "albero", "fiore", "erba", "foglia", "radice", "seme",
      "pietra", "sabbia", "cielo", "stella", "luna",
      // Colors
      "rosso", "blu", "verde", "giallo", "nero", "bianco", "grigio",
      "marrone", "rosa", "viola", "arancione", "oro", "argento",
      // Places
      "ospedale", "parco", "negozio", "ristorante", "bar", "albergo",
      "stazione", "aeroporto", "biblioteca", "museo", "teatro", "cinema",
      "farmacia", "banca", "ufficio", "fabbrica", "mercato", "piazza",
      "cucina", "camera", "bagno", "giardino", "balcone", "terrazzo",
      // Numbers
      "zero", "uno", "due", "tre", "quattro", "cinque", "sei",
      "sette", "otto", "nove", "dieci", "cento", "mille", "milione",
      // Days/Time
      "lunedì", "martedì", "mercoledì", "giovedì", "venerdì",
      "sabato", "domenica", "gennaio", "febbraio", "marzo", "aprile",
      "maggio", "giugno", "luglio", "agosto", "settembre", "ottobre",
      "novembre", "dicembre", "primavera", "estate", "autunno", "inverno",
      "ieri", "oggi", "domani", "adesso", "presto", "tardi",
      // Clothing
      "camicia", "pantaloni", "gonna", "giacca", "scarpe", "cappello",
      "sciarpa", "guanti", "cintura", "calze", "vestito", "maglietta",
      "maglione", "cappotto", "stivali", "sandali", "borsa", "ombrello",
      // Emotions
      "felice", "triste", "arrabbiato", "spaventato", "stanco", "annoiato",
      "nervoso", "confuso", "sorpreso", "orgoglioso", "geloso", "ansioso",
      "preoccupato", "emozionato", "calmo", "contento", "deluso",
      // Transport
      "macchina", "treno", "autobus", "bicicletta", "aereo", "nave",
      "moto", "taxi", "metro", "tram", "traghetto", "camion",
      // Abstract
      "libertà", "giustizia", "pace", "pericolo", "sicurezza",
      "successo", "fallimento", "sogno", "speranza", "paura",
      "felicità", "tristezza", "amore", "odio", "coraggio", "pazienza",
      "fiducia", "rispetto", "bellezza", "verità", "saggezza",
      // Common verbs (extended)
      "pagare", "comprare", "vendere", "cucinare", "pulire", "lavare",
      "guidare", "viaggiare", "nuotare", "cantare", "ballare", "disegnare",
      "insegnare", "imparare", "decidere", "scegliere", "provare",
      "rompere", "riparare", "costruire", "distruggere", "promettere",
      "soffrire", "ridere", "piangere", "gridare", "sussurrare",
      "dormire", "svegliarsi", "vestirsi", "pregare", "sognare",
      "raccogliere", "lanciare", "cadere", "salire", "scendere",
      // Common nouns (extended)
      "cielo", "fuoco", "luce", "ombra", "voce", "silenzio", "rumore",
      "musica", "canzone", "film", "gioco", "sport", "calcio", "squadra",
      "idea", "sogno", "segreto", "regalo", "lettera", "messaggio",
      "telefono", "tavolo", "sedia", "letto", "finestra", "specchio",
      "chiave", "orologio", "bottiglia", "bicchiere", "piatto", "coltello",
      "forchetta", "cucchiaio", "tazza", "pentola", "padella",
      // Slang & informal
      "boh", "mamma", "ciao", "ragazzi", "amici", "figurati",
      "magari", "basta", "bravo", "prego", "ecco", "allora",
      "dunque", "insomma", "appunto", "uffa", "accidenti",
      // Common profanity
      "cazzo", "stronzo", "minchia", "merda", "vaffanculo", "porca",
      "madonna", "troia", "puttana", "bastardo", "coglione", "figa",
    ],
    phrases: [
      "come stai", "buongiorno", "quanto costa", "che ora",
      "da dove vieni", "puoi aiutarmi", "piacere", "mi chiamo",
      "buona sera", "buona notte", "arrivederci", "a presto",
      "mi dispiace", "scusa", "per favore", "grazie mille",
      "di niente", "non lo so", "penso che", "certo che sì",
      "nessun problema", "per esempio", "in realtà", "a volte",
      "poco a poco", "prima o poi", "in ogni caso", "tutto sommato",
      "d'altra parte", "allo stesso tempo", "come si dice",
      "vorrei sapere", "che cosa", "non importa",
    ],
  },
  pt: {
    words: [
      // Articles, prepositions, conjunctions
      "os", "as", "de", "que", "em", "um", "uma", "para", "com",
      "por", "como", "mais", "ou", "mas", "seu", "sua", "seus", "suas",
      "no", "na", "nos", "nas", "do", "da", "dos", "das", "ao", "aos",
      "pelo", "pela", "pelos", "pelas", "entre", "sobre", "até", "sem",
      "desde", "contra", "durante", "mediante", "perante", "segundo",
      // Pronouns
      "eu", "tu", "ele", "ela", "nós", "vós", "eles", "elas", "você",
      "vocês", "meu", "minha", "meus", "minhas", "teu", "tua", "nosso",
      "nossa", "deles", "delas", "este", "esta", "esse", "essa", "aquele",
      "aquela", "isto", "aquilo", "quem", "qual", "cujo", "cuja",
      "alguém", "ninguém", "algo", "nada", "cada", "todo", "tudo",
      // Common verbs
      "ser", "estar", "ter", "haver", "fazer", "poder", "dizer", "dar",
      "ir", "ver", "saber", "querer", "ficar", "dever", "pôr", "parecer",
      "passar", "deixar", "chegar", "levar", "encontrar", "chamar",
      "vir", "pensar", "sair", "voltar", "tomar", "conhecer", "viver",
      "sentir", "olhar", "contar", "começar", "esperar", "buscar",
      "trabalhar", "escrever", "perder", "entender", "pedir", "receber",
      "lembrar", "acabar", "conseguir", "servir", "precisar", "manter",
      "abrir", "ler", "comer", "beber", "dormir", "correr", "morrer",
      "andar", "ouvir", "falar", "gostar", "ajudar", "mudar", "jogar",
      // Common nouns
      "vida", "tempo", "mundo", "casa", "trabalho", "homem", "mulher",
      "dia", "noite", "manhã", "tarde", "semana", "mês", "ano",
      "cidade", "país", "rua", "lugar", "parte", "governo", "escola",
      "grupo", "problema", "momento", "pessoa", "forma", "exemplo",
      "história", "coisa", "maneira", "direito", "estado", "guerra",
      "razão", "verdade", "força", "terra", "filho", "filha",
      "pai", "mãe", "irmão", "irmã", "amigo", "nome", "porta",
      "corpo", "cabeça", "mão", "olho", "coração", "água", "livro",
      "palavra", "caminho", "igreja", "família", "dinheiro",
      // Common adjectives
      "bom", "mau", "grande", "pequeno", "novo", "velho", "melhor",
      "pior", "primeiro", "último", "mesmo", "longo", "jovem", "alto",
      "baixo", "bonito", "importante", "diferente", "possível", "certo",
      "claro", "forte", "livre", "cheio", "vazio", "próprio",
      // Common adverbs
      "muito", "também", "ainda", "agora", "depois", "antes",
      "onde", "quando", "como", "porque", "então", "sempre", "nunca",
      "bem", "mal", "aqui", "ali", "já", "quase", "talvez",
      "realmente", "certamente", "provavelmente", "principalmente",
      "normalmente", "geralmente", "especialmente", "simplesmente",
      // Food
      "arroz", "feijão", "pão", "queijo", "carne", "frango", "peixe",
      "leite", "ovo", "sal", "açúcar", "manteiga", "azeite", "vinagre",
      "alho", "cebola", "tomate", "batata", "cenoura", "alface",
      "maçã", "laranja", "limão", "morango", "uva", "banana", "manga",
      "café", "chá", "cerveja", "vinho", "suco", "sorvete", "bolo",
      "pastel", "coxinha", "farofa", "feijoada", "churrasco", "brigadeiro",
      "tapioca", "açaí", "paçoca", "pudim", "caipirinha", "guaraná",
      // Body
      "braço", "perna", "joelho", "ombro", "dedo", "costas",
      "barriga", "peito", "pescoço", "nariz", "orelha", "boca",
      "lábio", "rosto", "testa", "cabelo", "pele", "osso",
      "sangue", "cérebro", "músculo", "estômago", "pulmão",
      // Family
      "avô", "avó", "tio", "tia", "primo", "prima", "sobrinho",
      "sogro", "sogra", "cunhado", "cunhada", "genro", "nora",
      "noivo", "noiva", "marido", "esposa", "namorado", "namorada",
      // Animals
      "cachorro", "gato", "cavalo", "vaca", "ovelha", "porco", "coelho",
      "rato", "urso", "lobo", "cobra", "sapo", "tartaruga",
      "baleia", "tubarão", "águia", "borboleta", "formiga", "abelha",
      "leão", "tigre", "elefante", "macaco", "veado", "raposa",
      "galinha", "pássaro", "golfinho", "jacaré", "papagaio",
      // Nature
      "chuva", "neve", "vento", "nuvem", "sol", "tempestade", "trovão",
      "relâmpago", "arco-íris", "rio", "lago", "praia", "montanha",
      "colina", "floresta", "selva", "deserto", "ilha", "vale",
      "árvore", "flor", "grama", "folha", "raiz", "semente",
      "pedra", "areia", "céu", "estrela", "lua", "mar",
      // Colors
      "vermelho", "azul", "verde", "amarelo", "preto", "branco", "cinza",
      "marrom", "rosa", "roxo", "laranja", "dourado", "prateado",
      // Places
      "hospital", "parque", "loja", "restaurante", "hotel", "estação",
      "aeroporto", "biblioteca", "museu", "teatro", "cinema", "farmácia",
      "banco", "escritório", "fábrica", "mercado", "praça", "prédio",
      "cozinha", "quarto", "banheiro", "jardim", "varanda", "garagem",
      // Numbers
      "zero", "dois", "três", "quatro", "cinco", "seis", "sete",
      "oito", "nove", "dez", "cem", "mil", "milhão",
      // Days/Time
      "segunda", "terça", "quarta", "quinta", "sexta", "sábado",
      "domingo", "janeiro", "fevereiro", "março", "abril", "maio",
      "junho", "julho", "agosto", "setembro", "outubro", "novembro",
      "dezembro", "primavera", "verão", "outono", "inverno",
      "ontem", "hoje", "amanhã", "cedo", "tarde",
      // Clothing
      "camisa", "calça", "saia", "jaqueta", "sapato", "chapéu",
      "cachecol", "luva", "cinto", "meia", "vestido", "camiseta",
      "casaco", "bota", "sandália", "bolsa", "guarda-chuva",
      // Emotions
      "feliz", "triste", "bravo", "assustado", "cansado", "entediado",
      "nervoso", "confuso", "surpreso", "orgulhoso", "ansioso",
      "preocupado", "animado", "calmo", "contente", "decepcionado",
      // Transport
      "carro", "trem", "ônibus", "bicicleta", "avião", "navio",
      "moto", "táxi", "metrô", "caminhão", "barco", "helicóptero",
      // Abstract
      "liberdade", "justiça", "paz", "perigo", "segurança",
      "sucesso", "fracasso", "sonho", "esperança", "medo",
      "felicidade", "tristeza", "amor", "ódio", "coragem", "paciência",
      "confiança", "respeito", "beleza", "sabedoria",
      // Common verbs (extended)
      "pagar", "comprar", "vender", "cozinhar", "limpar", "lavar",
      "dirigir", "viajar", "nadar", "cantar", "dançar", "desenhar",
      "ensinar", "aprender", "decidir", "escolher", "tentar",
      "quebrar", "consertar", "construir", "destruir", "prometer",
      "sofrer", "rir", "chorar", "gritar", "sussurrar",
      "acordar", "vestir", "rezar", "sonhar", "subir", "descer",
      // Common nouns (extended)
      "fogo", "luz", "sombra", "voz", "silêncio", "barulho",
      "música", "filme", "jogo", "futebol", "time", "ideia",
      "segredo", "presente", "carta", "mensagem", "telefone",
      "mesa", "cadeira", "cama", "janela", "espelho", "chave",
      "relógio", "garrafa", "copo", "prato", "faca", "garfo",
      "colher", "xícara", "panela", "frigideira",
      // Slang & informal
      "cara", "gente", "beleza", "valeu", "massa",
      "bacana", "maneiro", "pô", "mano", "mina", "tá", "né",
      "opa", "eita", "nossa", "caramba", "puxa", "olha",
      // Common profanity
      "porra", "caralho", "merda", "foda", "buceta", "puta",
      "viado", "cuzão", "piranha", "desgraça", "filho da puta",
    ],
    phrases: [
      "como você está", "obrigado", "bom dia", "o que é isso",
      "onde está", "quanto custa", "que horas são", "de onde você é",
      "pode me ajudar", "prazer", "boa tarde", "boa noite",
      "até logo", "até mais", "com licença", "desculpa",
      "por favor", "muito obrigado", "de nada", "eu não sei",
      "eu acho que", "claro que sim", "sem problema", "por exemplo",
      "na verdade", "às vezes", "pouco a pouco", "de vez em quando",
      "ao mesmo tempo", "em todo caso", "cada vez mais",
      "mais ou menos", "pelo menos", "além disso", "no entanto",
      "apesar de", "por causa de", "em relação a", "tudo bem",
    ],
  },
  nl: {
    words: [
      // Articles, prepositions, conjunctions
      "de", "het", "en", "van", "dat", "die", "een", "voor", "met",
      "zijn", "op", "aan", "bij", "ook", "als", "er", "maar", "om",
      "ze", "zich", "deze", "dit", "uit", "tot", "naar", "door",
      "over", "onder", "tussen", "achter", "naast", "tegen", "langs",
      "zonder", "tijdens", "sinds", "ondanks", "behalve", "wegens",
      // Pronouns
      "ik", "jij", "hij", "zij", "wij", "jullie", "hen", "hun",
      "wie", "wat", "waar", "wanneer", "waarom", "hoe", "welk",
      "mijn", "jouw", "haar", "ons", "iedereen", "niemand", "iets",
      "niets", "alles", "zelf", "elkaar", "elke", "sommige", "beide",
      // Common verbs
      "hebben", "zijn", "worden", "kunnen", "moeten", "zullen",
      "willen", "mogen", "maken", "gaan", "komen", "zien", "geven",
      "nemen", "vinden", "denken", "zeggen", "spreken", "staan",
      "laten", "houden", "brengen", "leven", "rijden", "menen",
      "vragen", "kennen", "gelden", "stellen", "spelen", "werken",
      "nodig", "volgen", "leren", "bestaan", "begrijpen", "zetten",
      "krijgen", "beginnen", "vertellen", "proberen", "schrijven",
      "lopen", "zitten", "trekken", "schijnen", "vallen", "behoren",
      "zoeken", "leggen", "bereiken", "dragen", "lezen", "verliezen",
      // Common nouns
      "tijd", "jaar", "mens", "dag", "wereld", "huis", "kind", "vrouw",
      "deel", "werk", "land", "stad", "vraag", "hand",
      "leven", "kant", "water", "hoofd", "oog", "woord", "boek",
      "school", "familie", "vriend", "naam", "straat", "kerk",
      "nacht", "ochtend", "avond", "week", "maand", "uur", "minuut",
      "moeder", "vader", "broer", "zus", "zoon", "dochter",
      "hart", "deur", "lichaam", "regering", "geschiedenis", "groep",
      "voorbeeld", "probleem", "reden", "recht", "oorlog", "kracht",
      // Common adjectives
      "goed", "slecht", "groot", "klein", "nieuw", "oud", "lang",
      "kort", "hoog", "laag", "sterk", "zwak", "snel", "langzaam",
      "mooi", "lelijk", "jong", "belangrijk", "juist", "vrij", "vol",
      "leeg", "mogelijk", "zeker", "duidelijk", "eenvoudig", "moeilijk",
      "verscheiden", "bijzonder", "eigen", "heel", "veel", "weinig",
      // Common adverbs
      "niet", "wel", "nog", "dan", "al", "toch", "altijd", "nooit",
      "vaak", "soms", "nu", "hier", "daar", "misschien", "precies",
      "echt", "natuurlijk", "eigenlijk", "helemaal", "vooral",
      "overigens", "trouwens", "desondanks", "daarom", "daarnaast",
      "bovendien", "tenslotte", "uiteindelijk", "waarschijnlijk",
      // Food
      "brood", "kaas", "boter", "melk", "vlees", "kip", "vis",
      "ei", "rijst", "aardappel", "wortel", "tomaat", "ui", "knoflook",
      "zout", "suiker", "peper", "olie", "azijn", "sla", "soep",
      "appel", "peer", "aardbei", "druif", "citroen", "sinaasappel",
      "banaan", "kers", "pruim", "bier", "wijn", "koffie", "thee",
      "sap", "taart", "koek", "ijs", "chocolade", "pannenkoek",
      "stamppot", "hutspot", "kroket", "frikandel", "stroopwafel",
      "hagelslag", "drop", "haring", "poffertjes", "bitterballen",
      // Body
      "arm", "been", "voet", "knie", "schouder", "vinger",
      "rug", "buik", "borst", "nek", "neus", "oor",
      "mond", "lip", "gezicht", "voorhoofd", "haar", "huid",
      "bot", "bloed", "hersenen", "spier", "maag", "long",
      // Family
      "opa", "oma", "oom", "tante", "neef", "nicht", "kleinzoon",
      "schoonvader", "schoonmoeder", "zwager", "schoonzus",
      "verloofde", "echtgenoot", "echtgenote", "vriend", "vriendin",
      // Animals
      "hond", "kat", "paard", "koe", "schaap", "varken", "konijn",
      "muis", "beer", "wolf", "slang", "kikker", "schildpad",
      "walvis", "haai", "adelaar", "vlinder", "mier", "bij",
      "leeuw", "tijger", "olifant", "aap", "hert", "vos",
      "kip", "vogel", "dolfijn", "eend", "zwaan", "uil",
      // Nature
      "regen", "sneeuw", "wind", "wolk", "zon", "storm", "donder",
      "bliksem", "regenboog", "rivier", "meer", "zee", "strand",
      "berg", "heuvel", "bos", "woestijn", "eiland", "dal",
      "boom", "bloem", "gras", "blad", "wortel", "zaad",
      "steen", "zand", "hemel", "ster", "maan", "vuur",
      // Colors
      "rood", "blauw", "groen", "geel", "zwart", "wit", "grijs",
      "bruin", "roze", "paars", "oranje", "goud", "zilver",
      // Places
      "ziekenhuis", "winkel", "restaurant", "hotel", "station",
      "luchthaven", "bibliotheek", "museum", "theater", "bioscoop",
      "apotheek", "kantoor", "fabriek", "markt", "plein",
      "keuken", "slaapkamer", "badkamer", "tuin", "balkon", "garage",
      // Numbers
      "nul", "twee", "drie", "vier", "vijf", "zes", "zeven",
      "acht", "negen", "tien", "honderd", "duizend", "miljoen",
      // Days/Time
      "maandag", "dinsdag", "woensdag", "donderdag", "vrijdag",
      "zaterdag", "zondag", "januari", "februari", "maart", "april",
      "mei", "juni", "juli", "augustus", "september", "oktober",
      "november", "december", "lente", "zomer", "herfst", "winter",
      "gisteren", "vandaag", "morgen", "vroeg", "laat",
      // Clothing
      "hemd", "broek", "rok", "jas", "schoen", "hoed",
      "sjaal", "handschoen", "riem", "sok", "jurk", "trui",
      "laars", "sandaal", "tas", "paraplu",
      // Emotions
      "blij", "verdrietig", "boos", "bang", "moe", "verveeld",
      "zenuwachtig", "verward", "verrast", "trots", "jaloers",
      "bezorgd", "opgewonden", "rustig", "tevreden", "teleurgesteld",
      // Transport
      "auto", "trein", "bus", "fiets", "vliegtuig", "schip",
      "motor", "vrachtwagen", "tram", "veerboot", "boot",
      // Abstract
      "vrijheid", "gerechtigheid", "vrede", "gevaar", "veiligheid",
      "succes", "mislukking", "droom", "hoop", "angst",
      "geluk", "verdriet", "liefde", "haat", "moed", "geduld",
      "vertrouwen", "respect", "schoonheid", "waarheid", "wijsheid",
      // Common verbs (extended)
      "betalen", "kopen", "verkopen", "koken", "schoonmaken", "wassen",
      "rijden", "reizen", "zwemmen", "zingen", "dansen", "tekenen",
      "beslissen", "kiezen", "breken", "repareren", "bouwen",
      "beloven", "lijden", "lachen", "huilen", "schreeuwen", "fluisteren",
      "dromen", "bidden", "klimmen", "springen", "gooien", "vangen",
      // Common nouns (extended)
      "licht", "schaduw", "stem", "stilte", "geluid", "muziek",
      "lied", "spel", "voetbal", "idee", "geheim", "cadeau",
      "brief", "bericht", "tafel", "stoel", "bed", "raam",
      "spiegel", "sleutel", "klok", "fles", "glas", "bord",
      "mes", "vork", "lepel", "kopje", "pan",
      // Slang & informal
      "lekker", "gezellig", "gaaf", "tof", "hartstikke", "vet",
      "geinig", "gek", "leuk", "joh", "hè", "zeg", "hoor",
      "nou", "goh", "oké", "doei", "mazzel", "eikel",
      // Common profanity
      "godverdomme", "kut", "lul", "klootzak", "hoer", "teef",
      "tering", "kanker", "tyfus", "mierenneuker", "kutwijf",
    ],
    phrases: [
      "hoe gaat het", "dank je", "goedemorgen", "wat is dit",
      "waar is het", "hoeveel kost", "hoe laat", "waar kom je vandaan",
      "kun je me helpen", "aangenaam", "goedemiddag", "goedenavond",
      "goede nacht", "tot ziens", "tot straks", "het spijt me",
      "alstublieft", "dank u wel", "geen probleem", "ik weet het niet",
      "ik denk dat", "natuurlijk", "bijvoorbeeld", "in feite",
      "af en toe", "in ieder geval", "over het algemeen",
      "op dit moment", "aan de andere kant", "zo snel mogelijk",
    ],
  },
  tr: {
    words: [
      // Conjunctions, postpositions, particles
      "ve", "bir", "bu", "ile", "için", "olan", "ama", "daha", "gibi",
      "çok", "da", "de", "mi", "mı", "mu", "mü", "ki", "hem",
      "ya", "eğer", "ancak", "fakat", "lakin", "hatta", "üstelik",
      "ayrıca", "oysa", "yoksa", "zira", "çünkü", "dolayısıyla",
      // Pronouns
      "ben", "sen", "biz", "siz", "onlar", "ne", "nasıl",
      "nerede", "neden", "kim", "hangi", "kaç", "kimin", "kime",
      "benim", "senin", "onun", "bizim", "sizin", "onların",
      "bana", "sana", "ona", "bize", "size", "bunlar", "şunlar",
      "kendim", "kendin", "kendisi", "herkes", "hiçbir", "bazı",
      // Common verbs
      "olmak", "etmek", "yapmak", "gelmek", "gitmek", "vermek",
      "almak", "görmek", "bilmek", "istemek", "söylemek", "demek",
      "bakmak", "bulmak", "düşünmek", "kalmak", "geçmek", "başlamak",
      "çalışmak", "konuşmak", "tutmak", "yaşamak", "açmak", "okumak",
      "yazmak", "anlamak", "beklemek", "durmak", "oturmak", "kalkmak",
      "koymak", "taşımak", "sevmek", "hatırlamak", "unutmak",
      "yardım", "değişmek", "öğrenmek", "öğretmek", "kullanmak",
      // Common nouns
      "var", "yok", "değil", "zaman", "gün", "yıl", "ay", "hafta",
      "saat", "dakika", "adam", "kadın", "çocuk", "insan", "dünya",
      "hayat", "iş", "ev", "yer", "yol", "şehir", "ülke", "devlet",
      "okul", "aile", "arkadaş", "isim", "kapı", "göz", "baş",
      "el", "kalp", "vücut", "su", "para", "kitap", "söz",
      "tarih", "savaş", "güç", "hak", "grup", "örnek", "sorun",
      "gece", "sabah", "akşam", "anne", "baba", "kardeş", "oğul", "kız",
      // Common adjectives
      "iyi", "kötü", "büyük", "küçük", "yeni", "eski", "uzun",
      "kısa", "yüksek", "alçak", "güçlü", "zayıf", "hızlı", "yavaş",
      "güzel", "çirkin", "genç", "yaşlı", "önemli", "doğru", "yanlış",
      "özgür", "dolu", "boş", "basit", "zor", "kolay", "farklı",
      // Common adverbs
      "olarak", "sonra", "önce", "şimdi", "artık", "bile", "sadece",
      "evet", "hayır", "belki", "lütfen", "tamam", "başka", "her",
      "hiç", "hep", "bazen", "genellikle", "gerçekten", "kesinlikle",
      "tabii", "aslında", "özellikle", "muhtemelen", "neredeyse",
      // Food
      "ekmek", "peynir", "tereyağı", "süt", "yumurta", "pirinç",
      "makarna", "çorba", "salata", "domates", "biber", "soğan",
      "sarımsak", "tuz", "şeker", "bal", "zeytinyağı", "sirke",
      "elma", "portakal", "limon", "çilek", "üzüm", "karpuz", "muz",
      "kiraz", "armut", "erik", "kayısı", "şeftali", "incir", "nar",
      "kebap", "döner", "lahmacun", "pide", "börek", "dolma", "pilav",
      "köfte", "baklava", "lokum", "simit", "ayran", "rakı", "çay",
      "kahve", "tavuk", "kuzu", "balık", "dana",
      // Body
      "kol", "bacak", "ayak", "diz", "omuz", "parmak",
      "sırt", "karın", "göğüs", "boyun", "burun", "kulak",
      "ağız", "dudak", "yüz", "alın", "saç", "deri",
      "kemik", "kan", "beyin", "kas", "mide", "akciğer",
      // Family
      "dede", "nine", "amca", "hala", "dayı", "teyze", "kuzen",
      "kayınpeder", "kaynana", "enişte", "yenge", "damat", "gelin",
      "nişanlı", "koca", "karı", "eş", "çift", "torun",
      // Animals
      "köpek", "kedi", "at", "inek", "koyun", "keçi", "tavşan",
      "fare", "ayı", "kurt", "yılan", "kurbağa", "kaplumbağa",
      "balina", "köpekbalığı", "kartal", "kelebek", "karınca", "arı",
      "aslan", "kaplan", "fil", "maymun", "geyik", "tilki",
      "tavuk", "kuş", "yunus", "eşek", "deve", "domuz",
      // Nature
      "yağmur", "kar", "rüzgar", "bulut", "güneş", "fırtına", "gök",
      "yıldırım", "gökkuşağı", "nehir", "göl", "deniz", "kumsal",
      "dağ", "tepe", "orman", "çöl", "ada", "vadi",
      "ağaç", "çiçek", "çimen", "yaprak", "kök", "tohum",
      "taş", "kum", "toprak", "yıldız", "ay",
      // Colors
      "kırmızı", "mavi", "yeşil", "sarı", "siyah", "beyaz", "gri",
      "kahverengi", "pembe", "mor", "turuncu", "altın", "gümüş",
      // Places
      "hastane", "bahçe", "dükkan", "restoran", "otel", "istasyon",
      "havaalanı", "kütüphane", "müze", "tiyatro", "sinema", "eczane",
      "banka", "ofis", "fabrika", "pazar", "meydan", "cami", "kilise",
      "mutfak", "yatak", "banyo", "salon", "balkon", "garaj",
      // Numbers
      "sıfır", "iki", "üç", "dört", "beş", "altı", "yedi",
      "sekiz", "dokuz", "on", "yüz", "bin", "milyon",
      // Days/Time
      "pazartesi", "salı", "çarşamba", "perşembe", "cuma",
      "cumartesi", "pazar", "ocak", "şubat", "mart", "nisan",
      "mayıs", "haziran", "temmuz", "ağustos", "eylül", "ekim",
      "kasım", "aralık", "ilkbahar", "yaz", "sonbahar", "kış",
      "dün", "bugün", "yarın", "erken", "geç",
      // Clothing
      "gömlek", "pantolon", "etek", "ceket", "ayakkabı", "şapka",
      "atkı", "eldiven", "kemer", "çorap", "elbise", "kazak",
      "mont", "çizme", "çanta", "şemsiye",
      // Emotions
      "mutlu", "üzgün", "kızgın", "korkmuş", "yorgun", "sıkılmış",
      "gergin", "şaşkın", "gururlu", "kıskanç", "endişeli",
      "heyecanlı", "sakin", "memnun", "hayal", "kırık",
      // Transport
      "araba", "tren", "otobüs", "bisiklet", "uçak", "gemi",
      "motosiklet", "taksi", "tramvay", "kamyon", "tekne",
      // Abstract
      "özgürlük", "adalet", "barış", "tehlike", "güvenlik",
      "başarı", "başarısızlık", "rüya", "umut", "korku",
      "mutluluk", "üzüntü", "sevgi", "nefret", "cesaret", "sabır",
      "güven", "saygı", "güzellik", "gerçek", "bilgelik",
      // Common verbs (extended)
      "ödemek", "satın", "satmak", "pişirmek", "temizlemek", "yıkamak",
      "sürmek", "yüzmek", "şarkı", "dans", "çizmek", "resim",
      "karar", "seçmek", "kırmak", "tamir", "inşa", "yıkmak",
      "söz", "acı", "gülmek", "ağlamak", "bağırmak", "fısıldamak",
      "uyanmak", "giymek", "dua", "tırmanmak", "atlamak", "fırlatmak",
      // Common nouns (extended)
      "ateş", "ışık", "gölge", "ses", "sessizlik", "gürültü",
      "müzik", "şarkı", "oyun", "futbol", "takım", "fikir",
      "sır", "hediye", "mektup", "mesaj", "telefon",
      "masa", "sandalye", "yatak", "pencere", "ayna", "anahtar",
      "saat", "şişe", "bardak", "tabak", "bıçak", "çatal",
      "kaşık", "fincan", "tencere", "tava",
      // Slang & informal
      "abi", "abla", "lan", "kanka", "moruk", "hadi",
      "yav", "ulan", "valla", "eyvah", "hay", "tabi",
      "canım", "koçum", "birader", "hemşerim",
      // Common profanity
      "amk", "orospu", "sik", "yarrak", "göt", "piç",
      "pezevenk", "ibne", "puşt", "hıyar", "gerizekalı",
    ],
    phrases: [
      "nasılsın", "günaydın", "bu nedir", "ne kadar",
      "saat kaç", "nerelisin", "yardım edebilir misin",
      "memnun oldum", "teşekkürler", "iyi akşamlar", "iyi geceler",
      "hoşça kal", "görüşürüz", "özür dilerim", "bir şey değil",
      "bilmiyorum", "bence", "tabii ki", "sorun değil",
      "lütfen", "çok teşekkürler", "nasıl gidiyor", "ne yapıyorsun",
      "bir dakika", "ne demek", "yani", "mesela", "her zaman",
      "bir şekilde", "aynı zamanda", "en azından", "her halükarda",
    ],
  },
  // ── Romanized non-Latin languages ──
  // These catch text written in Latin characters that is clearly not English.
  // Common words, particles, and romanized forms that signal the language.
  ru: {
    words: [
      // Common romanized Russian (transliteration) — basic words
      "da", "net", "khorosho", "spasibo", "pozhaluysta", "privet", "poka",
      "kak", "dela", "zdes", "tam", "ochen", "bolshoy", "malenkiy",
      "chelovek", "zhenshchina", "muzhchina", "rebyonok", "dom", "rabota",
      "vremya", "den", "noch", "segodnya", "zavtra", "vchera",
      "pochemu", "kogda", "gde", "kto", "chto", "skolko",
      // Pronouns & particles
      "ya", "ty", "on", "ona", "my", "vy", "oni", "eto", "tot", "eta",
      "moy", "tvoy", "nash", "vash", "svoy", "ves", "vsyo", "kazhdyy",
      "nikto", "nichto", "kto-to", "chto-to",
      // Common verbs (romanized)
      "byt", "imet", "delat", "govorit", "idti", "videt", "davat",
      "znat", "mozhno", "khotet", "prikhodit", "brat", "nayti",
      "dumat", "skazat", "stoyat", "ostavlyat", "derzhat", "zhit",
      "pisat", "chitat", "rabotat", "igrat", "lyubit", "pomogat",
      "spat", "est", "pit", "begat", "umirat", "otkryvat",
      "zakryvat", "slyshat", "govorit", "smotret", "zhdat",
      // Common nouns (romanized)
      "lyudi", "mir", "strana", "gorod", "ulitsa", "dom", "shkola",
      "semya", "drug", "imya", "dver", "glaz", "golova", "ruka",
      "serdtse", "telo", "voda", "dengi", "kniga", "slovo",
      "istoriya", "voyna", "sila", "pravo", "gruppa", "primer",
      "problema", "noch", "utro", "vecher", "nedelya", "mesyats",
      "chas", "minuta", "mat", "otets", "brat", "sestra", "syn", "doch",
      // Common adjectives (romanized)
      "khoroshiy", "plokhoy", "bolshoy", "malenkiy", "novyy", "staryy",
      "dlinnyy", "korotkiy", "vysokiy", "nizkiy", "silnyy", "slabyy",
      "bystryy", "medlennyy", "krasivyy", "molodoy", "vazhnyy",
      "pravilnyy", "nepravilnyy", "svobodnyy",
      // Common adverbs (romanized)
      "vsegda", "nikogda", "chasto", "inogda", "seychas", "potom",
      "pered", "zdes", "tam", "mozhet", "konechno", "naprimer",
      "na samom dele", "uzhe", "yeshchyo",
      // Food (romanized)
      "khleb", "maslo", "moloko", "syr", "myaso", "kuritsa", "ryba",
      "yaytso", "ris", "kartoshka", "morkov", "pomidor", "luk", "chesnok",
      "sol", "sakhar", "myod", "uксус", "salat", "sup", "kascha",
      "yabloko", "apelsin", "limon", "klubnika", "vinograd", "arbuz",
      "banan", "grusha", "vishnya", "persik", "malina", "smetana",
      "tvorog", "kefir", "kompot", "borsht", "pelmeni", "bliny",
      "pirog", "vareniki", "shashlik", "solyanka", "okroshka",
      "vodka", "chay", "kofe", "kvas", "sok",
      // Body (romanized)
      "ruka", "noga", "stopa", "koleno", "plecho", "palets",
      "spina", "zhivot", "grud", "sheya", "nos", "ukho",
      "rot", "guba", "litso", "lob", "volosy", "kozha",
      "kost", "krov", "mozg", "myshtsa", "zheludok", "lyogkoe",
      // Family (romanized)
      "dedushka", "babushka", "dyadya", "tyotya", "dvoyurodniy",
      "svyokor", "svekrov", "zayats", "nevesta", "zhenikh",
      "muzh", "zhena", "vnuk", "vnuchka", "plemyannik",
      // Animals (romanized)
      "sobaka", "koshka", "loshad", "korova", "ovtsa", "svinya", "krolik",
      "mysh", "medved", "volk", "zmeya", "lyagushka", "cherepakha",
      "kit", "akula", "oryol", "babochka", "muravey", "pchela",
      "lev", "tigr", "slon", "obezyana", "olen", "lisa",
      "kuritsa", "ptitsa", "delfin", "osyol", "verblyud",
      // Nature (romanized)
      "dozhd", "sneg", "veter", "oblako", "solntse", "burya", "grom",
      "molniya", "raduga", "reka", "ozero", "more", "plyazh",
      "gora", "kholm", "les", "pustynya", "ostrov", "dolina",
      "derevo", "tsvetok", "trava", "list", "koren", "semya",
      "kamen", "pesok", "nebo", "zvezda", "luna", "ogon",
      // Colors (romanized)
      "krasnyy", "siniy", "zelonyy", "zholtyy", "chornyy", "belyy", "seryy",
      "korichnevyy", "rozovyy", "fioletovyy", "oranzhevyy", "zolotoy", "serebristyy",
      // Places (romanized)
      "bolnitsa", "sad", "magazin", "restoran", "gostinitsa", "vokzal",
      "aeroport", "biblioteka", "muzey", "teatr", "kino", "apteka",
      "ofis", "fabrika", "rynok", "ploshchad", "tserkov", "mechet",
      "kukhnya", "spalnya", "vannaya", "balkon", "garazh",
      // Numbers (romanized)
      "nol", "odin", "dva", "tri", "chetyre", "pyat", "shest",
      "sem", "vosem", "devyat", "desyat", "sto", "tysyacha", "million",
      // Days/Time (romanized)
      "ponedelnik", "vtornik", "sreda", "chetverg", "pyatnitsa",
      "subbota", "voskresenie", "yanvar", "fevral", "mart", "aprel",
      "may", "iyun", "iyul", "avgust", "sentyabr", "oktyabr",
      "noyabr", "dekabr", "vesna", "leto", "osen", "zima",
      "vchera", "segodnya", "zavtra", "rano", "pozdno",
      // Clothing (romanized)
      "rubashka", "shtany", "yubka", "kurtka", "botinki", "shapka",
      "sharf", "perchatki", "remen", "noski", "platye", "sviter",
      "palto", "sapogi", "sumka", "zontik",
      // Emotions (romanized)
      "schastlivyy", "grustnyy", "zlyy", "ispugannyy", "ustaliy",
      "nervnyy", "smushennyy", "udivlyonnyy", "gordyy", "revnivyy",
      "vzvolnovannyy", "spokoynyy", "dovolnyy", "razocharovannyy",
      // Transport (romanized)
      "mashina", "poyezd", "avtobus", "velosiped", "samolot", "korabl",
      "motosikl", "taksi", "tramvay", "gruzоvik", "lodka",
      // Abstract (romanized)
      "svoboda", "spravedlivost", "mir", "opasnost", "bezopasnost",
      "uspekh", "neudacha", "mechta", "nadezhda", "strakh",
      "schaste", "pechal", "lyubov", "nenavist", "hrabrost", "terpenie",
      "doverie", "uvazheniye", "krasota", "pravda", "mudrost",
      // Common verbs (extended romanized)
      "platit", "pokupat", "prodavat", "gotovit", "chistit", "myt",
      "vodit", "puteshestvovat", "plavat", "pet", "tantsevat", "risovat",
      "reshat", "vybirat", "lomat", "chint", "stroit", "razrushat",
      "obeshchat", "stradat", "smeyatsya", "plakat", "krichat", "sheptat",
      "prosypatsya", "odevatsya", "molitsya", "mechtat", "lazit", "prygat",
      // Common nouns (extended romanized)
      "svet", "ten", "golos", "tishina", "shum", "muzyka",
      "pesnya", "igra", "futbol", "komanda", "ideya", "sekret",
      "podarok", "pismo", "soobshchenie", "telefon",
      "stol", "stul", "krovat", "okno", "zerkalo", "klyuch",
      "chasy", "butylka", "stakan", "tarelka", "nozh", "vilka",
      "lozhka", "chashka", "kastrulya", "skovoroda",
      // Slang & informal (romanized)
      "patsany", "devchonki", "bro", "chelik", "blin", "blyа",
      "zdarova", "normas", "krutoy", "zaebis", "bazara", "nicho",
      "ladno", "davay", "poyekhali", "klass", "zhest", "ohuenno",
      // Common romanized profanity/slang
      "suka", "blyat", "blyad", "pizdets", "khuy", "yobany", "mudak",
      "gandon", "debil", "durak", "nahui", "ebat", "pizda",
    ],
    phrases: [
      "kak dela", "kak tebya zovut", "ya ne ponimayu",
      "idi nahui", "yob tvoyu mat", "dobroe utro", "dobryy den",
      "dobryy vecher", "spokoynoy nochi", "do svidaniya",
      "izvinite", "prostite", "ya dumayu", "konechno",
      "net problemy", "kak pozhivayete", "ochen priyatno",
      "ya khochu", "mne nuzhno", "ya lyublyu tebya",
      "ya ne znayu", "chto eto", "gde eto", "skolko stoit",
      "kotoryy chas", "otkuda vy", "vy mozhete pomoch",
    ],
  },
  ar: {
    words: [
      // Common romanized Arabic — greetings & basics
      "shukran", "marhaba", "ahlan", "naam", "laa", "inshallah",
      "mashallah", "alhamdulillah", "wallah", "yalla", "habibi",
      "habibti", "khalas", "sabah", "masa", "afwan",
      // Prepositions & particles
      "min", "ila", "fi", "ala", "hatha", "hadha", "hunaka",
      "kayfa", "limadha", "mata", "ayna", "kam", "man", "madha",
      "wa", "aw", "lakinna", "hatta", "bayna", "tahta", "fawqa",
      "amama", "waraa", "qabl", "baad", "mundhu", "khilal",
      // Pronouns
      "ana", "anta", "anti", "huwa", "hiya", "nahnu", "antum",
      "hum", "hunna", "hatha", "hadhihi", "dhalika", "tilka",
      "alladhi", "allati", "kullu", "baadhuhum", "la ahad",
      // Common verbs (romanized)
      "yakun", "yamlik", "yafal", "yaqul", "yadhhab", "yara",
      "yuati", "yarif", "yurid", "yaji", "yakhudh", "yajid",
      "yufakkir", "yaqif", "yatruk", "yumsik", "yaish", "yaktub",
      "yaqra", "yamal", "yalab", "yuhibb", "yusaid", "yanam",
      "yakul", "yashrab", "yarkud", "yamut", "yaftah", "yughlik",
      "yasma", "yatakallam", "yanzur", "yantazir",
      // Common nouns (romanized)
      "nas", "alam", "balad", "madinah", "sharia", "bayt", "madrasa",
      "usra", "sadiq", "ism", "bab", "ayn", "ras", "yad",
      "qalb", "jism", "maa", "mal", "kitab", "kalima",
      "tarikh", "harb", "quwwa", "haqq", "majmua", "mithal",
      "mushkila", "layl", "subh", "masaa", "usbua", "shahr",
      "sana", "saa", "daqiqa", "umm", "ab", "akh", "ukht", "ibn", "bint",
      "rajul", "imraa", "tifl", "waqt", "yawm", "hayat", "dunya",
      // Common adjectives (romanized)
      "jayyid", "sayyi", "kabir", "saghir", "jadid", "qadim",
      "tawil", "qasir", "ali", "munkhafiд", "qawi", "daif",
      "sari", "bati", "jamil", "muhim", "mukhtalif", "mumkin",
      "sahih", "khata", "hurr", "kamil", "basit", "saab",
      // Food (romanized)
      "khubz", "zubda", "halib", "jibna", "lahm", "dajaj", "samak",
      "bayd", "ruz", "batata", "jazar", "basal", "thum",
      "milh", "sukkar", "asal", "zayt", "khall", "salata", "shurba",
      "tuffah", "burtuqal", "laymun", "farawla", "inab", "battikh",
      "mawz", "kummathra", "karaz", "mango", "tamr", "tin",
      "falafel", "hummus", "shawarma", "tabouleh", "fattoush",
      "kibbeh", "mansaf", "kunafa", "baklawa", "tahini",
      "qahwa", "shay", "laban", "asir", "ayran",
      // Body (romanized)
      "dhiraa", "rijl", "qadam", "rukba", "katf", "isba",
      "dhahr", "batn", "sadr", "unq", "anf", "udhn",
      "famm", "shafa", "wajh", "jabha", "shar", "jild",
      "adhm", "damm", "dimagh", "adala", "mida",
      // Family (romanized)
      "jadd", "jadda", "amm", "amma", "khal", "khala",
      "ibn amm", "bint amm", "ham", "hama", "aris", "arusa",
      "zawj", "zawja", "hafid", "hafida", "qarib",
      // Animals (romanized)
      "kalb", "qitta", "hisan", "baqara", "kharuf", "khanzir", "arnab",
      "far", "dubb", "dhib", "afaa", "difda", "sulahfa",
      "hut", "qirsh", "nasr", "farasha", "namla", "nahla",
      "asad", "nimr", "fil", "qird", "ghazal", "thalab",
      "dajaja", "tayr", "dulfin", "jamal", "hamam",
      // Nature (romanized)
      "matar", "thalj", "riyah", "sahab", "shams", "asifa", "raad",
      "barq", "qaws quzah", "nahr", "buhayra", "bahr", "shati",
      "jabal", "tall", "ghaba", "sahra", "jazira", "wadi",
      "shajara", "zahra", "ushb", "waraqa", "jidr", "badhra",
      "hajar", "raml", "sama", "najm", "qamar", "nar",
      // Colors (romanized)
      "ahmar", "azraq", "akhdar", "asfar", "aswad", "abyad", "ramadi",
      "bunni", "zahri", "banafsaji", "burtuqali", "dhahabi", "fiddi",
      // Places (romanized)
      "mustashfa", "hadiqa", "dukkan", "matam", "funduq", "mahatta",
      "matar", "maktaba", "mathaf", "masrah", "sinima", "saydaliyya",
      "maktab", "masna", "suq", "maydan", "masjid", "kanisa",
      "matbakh", "ghurfa", "hammam", "shurfa",
      // Numbers (romanized)
      "sifr", "wahid", "ithnan", "thalatha", "arbaa", "khamsa", "sitta",
      "sabaa", "thamaniya", "tisa", "ashara", "mia", "alf", "malyun",
      // Days/Time (romanized)
      "ithnayn", "thulatha", "arbiaa", "khamis", "jumaa",
      "sabt", "ahad", "yanayir", "fibrayir", "maris", "abril",
      "mayu", "yunyu", "yulyu", "aghustus", "sibtambir", "uktubar",
      "nufambir", "disambir", "rabi", "sayf", "kharif", "shita",
      "ams", "alyawm", "ghadan", "bakir", "mutaakhir",
      // Clothing (romanized)
      "qamis", "sirwal", "tannura", "jakit", "hitha", "qubba",
      "wisha", "quffaz", "hizam", "jawrab", "thawb", "abaya",
      "hijab", "jilbab", "sandal", "haqiba", "mizalla",
      // Emotions (romanized)
      "said", "hazin", "ghadib", "khaif", "taaban", "malul",
      "qaliq", "mutafaji", "fakhur", "ghayur", "mutahamis",
      "hadi", "radi", "mukhayab",
      // Transport (romanized)
      "sayyara", "qitar", "hafila", "darraja", "tayara", "safina",
      "darraja", "taksi", "shahina", "qarib",
      // Abstract (romanized)
      "hurriya", "adala", "salam", "khatar", "aman",
      "najah", "fashal", "hulm", "amal", "khawf",
      "saada", "huzn", "hubb", "karahiya", "shujaa", "sabr",
      "thiqa", "ihtiram", "jamal", "haqiqa", "hikma",
      // Common verbs (extended romanized)
      "yadfa", "yashtari", "yabi", "yatbukh", "yunazzif", "yaghsil",
      "yasug", "yusafir", "yasbah", "yughanni", "yarqus", "yarsum",
      "yuqarrir", "yakhtar", "yaksir", "yuslih", "yabni", "yahdim",
      "yaad", "yualim", "yadhak", "yabki", "yasrukh", "yahmus",
      "yastayqiz", "yalbas", "yusalli", "yahlum", "yatasallaq", "yaqfiz",
      // Common nouns (extended romanized)
      "daw", "zill", "sawt", "sukut", "dajij", "musiqa",
      "ughniya", "luba", "kura", "fariq", "fikra", "sirr",
      "hadiyya", "risala", "hatif", "tawila", "kursi",
      "sarir", "nafidha", "miraya", "miftah", "saa",
      "zujaja", "kaas", "sahn", "sikkin", "shawka",
      "milaqa", "finjan", "qidr", "miqlat",
      // Slang & informal (romanized)
      "yabni", "yamma", "akh", "akhoya", "sahbi", "rafiqi",
      "mesh", "mish", "tab", "ashta", "akeed", "wallahi",
      "tamaam", "maashi", "aywа", "bass", "kida", "ezayak",
      // Common romanized profanity
      "kuss", "sharmouta", "sharmuta", "kos", "omak",
      "kelb", "himar", "hayawan", "ahbal", "ghabi", "wiskha",
      "khanzeera", "manyak", "zalameh",
    ],
    phrases: [
      "yalla habibi", "inshallah", "alhamdulillah",
      "kuss ummak", "ibn el sharmouta",
      "sabah al khayr", "sabah al noor", "masa al khayr",
      "masa al noor", "maa al salama", "ila al liqaa",
      "ana asif", "la ashkur", "min fadlak", "min fadlik",
      "kayf halak", "kayf halik", "ana bikhayr",
      "la arif", "ana afakir", "taban", "mafi mushkila",
      "mathalan", "fi al haqiqa", "ahyanan", "daiman",
      "abadan", "al aan", "baad dhalik", "qabl dhalik",
      "ala al aqall", "bi al idafa ila", "bi sabab",
    ],
  },
  zh: {
    words: [
      // Common Pinyin romanization (Mandarin Chinese) — basics
      "ni", "hao", "wo", "shi", "bu", "hen", "dui", "zhe", "na",
      "shenme", "weishenme", "zenme", "nar", "shei", "duoshao",
      "xiexie", "zaijian", "duibuqi", "meiguanxi", "keyi",
      "xiang", "yao", "zhidao", "mingbai", "renshi", "xihuan",
      "chi", "kan", "qu", "lai", "gei", "shuo", "ting",
      "pengyou", "jia", "gongzuo", "xuexiao", "yisheng",
      // Pronouns & particles
      "ta", "tamen", "women", "nimen", "zhege", "nage",
      "nali", "zheli", "shui", "zenmeyang", "duome", "jige",
      "mei", "meiyou", "dou", "ye", "jiu", "cai", "hai",
      "zai", "le", "guo", "de", "ba", "ma", "ne", "bei",
      // Common verbs (pinyin)
      "zuo", "you", "hui", "neng", "rang", "zhao", "dai",
      "na", "fang", "xie", "du", "gongzuo", "wan", "kai",
      "guan", "mai", "wen", "da", "jiao", "xue", "jian",
      "song", "deng", "zhu", "pao", "zou", "fei", "diao",
      "si", "sheng", "bian", "cheng", "yong", "bang", "ai",
      "hen", "xi", "pa", "shui", "he", "chuan", "dai",
      "zhan", "zuо", "tang", "tiao", "chang", "hua", "xiao",
      "ku", "sheng", "ting", "dong", "jie", "ji", "bie",
      // Common nouns (pinyin)
      "ren", "shijie", "guojia", "chengshi", "jie", "fangzi",
      "xuexiao", "jiating", "pengyou", "mingzi", "men", "yanjing",
      "tou", "shou", "xin", "shenti", "shui", "qian", "shu",
      "zi", "lishi", "zhanzheng", "liliang", "quanli", "zu",
      "lizi", "wenti", "ye", "zaoshang", "wanshang", "xingqi",
      "yue", "nian", "xiaoshi", "fenzhong", "mama", "baba",
      "gege", "jiejie", "didi", "meimei", "erzi", "nuer",
      "nanren", "nuren", "haizi", "shijian", "tian", "shenghuo",
      // Common adjectives (pinyin)
      "hao", "huai", "da", "xiao", "xin", "jiu", "chang",
      "duan", "gao", "di", "qiang", "ruo", "kuai", "man",
      "piaoliang", "nianqing", "zhongyao", "butong", "keneng",
      "zhengque", "cuowu", "ziyou", "man", "jiandan", "nan",
      // Common adverbs (pinyin)
      "zongshi", "congbu", "jingchang", "youshihou", "xianzai",
      "ranhou", "yiqian", "zher", "nar", "keneng", "dangran",
      "biru", "qishi", "yijing", "haishi",
      // Food (pinyin)
      "fan", "mian", "baozi", "jiaozi", "chaofan", "huoguo",
      "mapo", "doufu", "mantou", "bing", "tang", "cu", "jiang",
      "cong", "suan", "la", "xian", "tian", "ku", "suan",
      "cha", "kafei", "pijiu", "niunai", "guozhi", "suannai",
      "dangao", "bingqilin", "mianbao", "niurou", "zhurou",
      "yangrou", "ji", "ya", "yu", "xia", "tudou", "xihongshi",
      "huanggua", "bocai", "pingguo", "xiangjiao", "caomei",
      "xigua", "putao", "juzi", "lizhi", "manguo",
      "zongzi", "tanghulu", "yuanxiao", "yuebing", "guobaorou",
      // Places (pinyin)
      "yiyuan", "gongyuan", "shangdian", "fandian", "jiuba",
      "cesuo", "chezhan", "jichang", "tushuguan", "bowuguan",
      "gongchang", "bangongshi", "chufang", "woshi", "keting",
      "weishengjian", "yangtai", "louti", "dianying", "chaoshi",
      // Animals (pinyin)
      "gou", "mao", "niao", "ma", "niu", "zhu", "tu",
      "laoshu", "xiong", "lang", "she", "qingwa", "wugui",
      "jingyu", "shayu", "laoying", "hudie", "mayi", "houzi",
      "daxiang", "laohu", "longxia", "pangxie",
      // Nature (pinyin)
      "yu", "xue", "feng", "yun", "taiyang", "baofeng", "lei",
      "shandian", "caihong", "he", "hu", "hai", "shatan",
      "shan", "senlin", "shamo", "dao", "shu", "hua",
      "cao", "ye", "gen", "zhongzi", "shi", "tu",
      "tian", "xing", "yueliang",
      // Colors (pinyin)
      "hong", "lan", "lü", "huang", "hei", "bai", "hui",
      "zong", "fen", "zi", "cheng", "jin", "yin",
      // Body (pinyin)
      "gebo", "tui", "jiao", "xigai", "jianbang", "shouzhi",
      "bei", "duzi", "xiong", "bozi", "bizi", "erduo",
      "zuiba", "zuichun", "lian", "etou", "toufa", "pifu",
      "gutou", "xue", "nao",
      // Numbers (pinyin)
      "ling", "yi", "er", "san", "si", "wu", "liu", "qi",
      "ba", "jiu", "shi", "bai", "qian", "wan", "yi",
      // Days/Time (pinyin)
      "xingqiyi", "xingqier", "xingqisan", "xingqisi",
      "xingqiwu", "xingqiliu", "xingqitian",
      "yiyue", "eryue", "sanyue", "siyue", "wuyue", "liuyue",
      "qiyue", "bayue", "jiuyue", "shiyue", "shiyiyue", "shieryue",
      "chuntian", "xiatian", "qiutian", "dongtian",
      // Emotions (pinyin)
      "gaoxing", "shangxin", "shengqi", "haipa", "lei", "wuliao",
      "xingfen", "jinzhang", "kunhuo", "jingya", "jiaoao",
      "gudu", "danyou", "fanao", "kaixin", "tongku",
      // Clothing (pinyin)
      "chenshan", "kuzi", "qunzi", "waitao", "xiezi", "maozi",
      "weibi", "shoutao", "pidai", "wazi", "neiyi",
      // Abstract (pinyin)
      "ziyou", "zhengyi", "heping", "weixian", "anquan",
      "chenggong", "shibai", "meng", "xiwang", "kongju",
      "kuaile", "beishang", "ai", "hen", "yongqi", "naixin",
      "xinren", "zunzhong", "meili", "zhenli", "zhihui",
      // Transport (pinyin)
      "qiche", "huoche", "gonggongqiche", "zixingche", "feiji", "chuan",
      "motuo", "chuzuche", "ditie", "kache",
      // Common verbs (extended pinyin)
      "fu", "mairu", "maichu", "zuofan", "dasao", "xizao",
      "kaiche", "lvyou", "youyong", "changge", "tiaowu", "huahua",
      "jueding", "xuanze", "dapo", "xiuli", "jianzao", "pohuai",
      "chеngnuо", "shouku", "xiao", "ku", "jiaо", "erduo",
      "xing", "chuanyi", "qidao", "zuomeng", "pan", "tiao",
      // Common nouns (extended pinyin)
      "guang", "yinying", "shengyin", "jingmo", "zaоyin", "yinyue",
      "ge", "dianying", "youxi", "duiwu", "xiangfa", "mimi",
      "liwu", "xin", "xinxi", "dianhua",
      "zhuozi", "yizi", "chuang", "chuanghu", "jingzi", "yaoshi",
      "zhong", "pingzi", "beizi", "panzi", "daozi", "chazi",
      "shaozi", "chabei", "guo", "chaoguо",
      // Counters & measure words (pinyin)
      "ge", "zhi", "tiao", "zhang", "ben", "bei", "ping",
      "jian", "shuang", "kuai", "ci", "bian", "dun",
      // Family (extended pinyin)
      "yeye", "nainai", "waigong", "waipo", "shushu", "ayi",
      "gugu", "jiujiu", "biaoer", "tangdi", "zhangfu", "qizi",
      "sunzi", "sunnv", "qinqi",
      // Clothing (pinyin)
      "chenyi", "kuzi", "qunzi", "jiake", "xie", "maozi",
      "weijin", "shoutao", "pidai", "wazi", "yifu", "maoyi",
      "dayi", "xuezi", "bao", "yusan",
      // Slang & internet (pinyin)
      "lihai", "niubi", "geili", "kengdie", "diaosi",
      "baifumei", "gaofushuai", "tuhao", "jiayou", "maimeng",
      "buhao", "keai", "shuai", "chou", "bang", "zha",
      "laoshi", "tongxue", "pengyou", "tongzhi", "laobao",
      // Common romanized profanity
      "tmd", "cao", "caonima", "shabi", "bichi", "tamade",
      "gundan", "wocao", "niubi", "laji", "hundan", "wangbadan",
    ],
    phrases: [
      "ni hao", "xie xie", "dui bu qi", "mei guan xi",
      "wo ai ni", "cao ni ma", "ta ma de",
      "zao shang hao", "wan shang hao", "wan an", "zai jian",
      "dui bu qi", "bu ke qi", "mei wen ti", "wo bu zhi dao",
      "wo jue de", "dang ran", "bi ru shuo", "shi shi shang",
      "you shi hou", "yi zhi", "cong lai bu", "xian zai",
      "ran hou", "yi qian", "zhi shao", "ling wai",
      "tong shi", "jin kuai", "yue lai yue", "yi dian dian",
      "zen me le", "shen me shi", "duo shao qian", "ji dian le",
      "ni shi na li ren", "ni neng bang wo ma",
    ],
  },
  ja: {
    words: [
      // Common Romaji romanization (Japanese) — basics
      "watashi", "anata", "kare", "kanojo", "kore", "sore", "are",
      "nani", "naze", "doko", "itsu", "dare", "ikura", "dou",
      "hai", "iie", "arigatou", "sumimasen", "gomen", "onegai",
      "ohayou", "konnichiwa", "konbanwa", "sayonara", "mata",
      "taberu", "nomu", "miru", "iku", "kuru", "suru", "aru",
      "kawaii", "sugoi", "yabai", "maji", "chotto", "dame",
      "sensei", "senpai", "desu", "masu", "kudasai", "shimasu", "arimasu",
      // Pronouns & particles (romaji)
      "boku", "ore", "atashi", "kimi", "omae", "karera", "kanojotachi",
      "watashitachi", "bokutachi", "oretachi", "dore", "docchi",
      "koko", "soko", "asoko", "kou", "sou", "aa", "dono",
      "ga", "wo", "ni", "he", "de", "to", "ka", "mo", "ya",
      "kara", "made", "yori", "nado", "dake", "shika", "bakari",
      // Common verbs (romaji)
      "iru", "iru", "naru", "yaru", "morau", "ageru", "kureru",
      "iku", "kaeru", "tsukau", "tsukuru", "kaku", "yomu", "hanasu",
      "kiku", "matsu", "okiru", "neru", "aruku", "hashiru", "tobu",
      "oyogu", "utau", "odoru", "warau", "naku", "okoru", "shinu",
      "umareru", "hajimeru", "owaru", "tomaru", "ugoku", "kangaeru",
      "omou", "shiru", "wasureru", "oboeru", "narau", "oshieru",
      "asobu", "hataraku", "yasumu", "kau", "uru", "harau",
      "akeru", "shimeru", "tsukeru", "kesu", "otosu", "hirou",
      "erabu", "kimeru", "tasukeru", "tetsudau",
      // Common nouns (romaji)
      "hito", "sekai", "kuni", "machi", "michi", "uchi", "gakkou",
      "kazoku", "tomodachi", "namae", "tobira", "me", "atama", "te",
      "kokoro", "karada", "mizu", "okane", "hon", "kotoba",
      "rekishi", "sensou", "chikara", "kenri", "mondai",
      "yoru", "asa", "yoru", "shuumatsu", "tsuki", "toshi",
      "jikan", "fun", "okaasan", "otousan", "oniisan", "oneesan",
      "otouto", "imouto", "musuko", "musume", "otoko", "onna",
      "kodomo", "jikan", "hi", "seikatsu", "shigoto",
      // Common adjectives (romaji)
      "ii", "warui", "ookii", "chiisai", "atarashii", "furui",
      "nagai", "mijikai", "takai", "hikui", "tsuyoi", "yowai",
      "hayai", "osoi", "utsukushii", "wakai", "taisetsu",
      "chigau", "tadashii", "machigai", "kantan", "muzukashii",
      "tanoshii", "kanashii", "ureshii", "kowai", "oishii",
      "mazui", "atsui", "samui", "tsumetai", "atatakai",
      // Common adverbs (romaji)
      "itsumo", "zenzen", "yoku", "tokidoki", "ima", "sorekara",
      "mae", "koko", "soko", "tabun", "mochiron", "tatoeba",
      "jitsu", "mou", "mada", "totemo", "amari", "sukoshi",
      // Food (romaji)
      "gohan", "miso", "natto", "soba", "udon", "tempura", "yakitori",
      "takoyaki", "onigiri", "bento", "wasabi", "shoyu", "mochi",
      "tofu", "sakana", "niku", "yasai", "tamago", "ramen",
      "sashimi", "gyudon", "katsu", "okonomiyaki", "tamagoyaki",
      "edamame", "daikon", "nori", "sake", "matcha", "dango",
      // Places (romaji)
      "eki", "mise", "uchi", "heya", "machi", "kawa", "yama",
      "umi", "sora", "hashi", "kouen", "byouin", "ginkou",
      "toshokan", "resutoran", "konbini", "depato", "ofuro",
      // Animals (romaji)
      "inu", "neko", "tori", "sakana", "uma", "ushi", "hitsuji",
      "buta", "usagi", "nezumi", "kuma", "okami", "hebi",
      "kaeru", "kame", "kujira", "same", "washi", "chou",
      // Nature (romaji)
      "ame", "yuki", "kaze", "kumo", "taiyou", "arashi", "kaminari",
      "niji", "kawa", "mizuumi", "sora", "hana", "kusa", "ha",
      "ki", "ishi", "tsuchi", "hoshi", "tsuki",
      // Colors (romaji)
      "aka", "ao", "midori", "kiiro", "kuro", "shiro", "hai",
      "chairo", "pinku", "murasaki", "orenji", "kin", "gin",
      // Body (romaji)
      "ude", "ashi", "hiza", "kata", "yubi", "senaka",
      "onaka", "mune", "kubi", "hana", "mimi", "kuchi",
      "kuchibiru", "hoho", "hitai", "kami", "hone", "chi",
      // Slang & informal (romaji)
      "yabai", "maji", "sugoi", "kawaii", "kakkoii", "dasai",
      "mendokusai", "tsumannai", "mikka", "warota", "kusa",
      "natsukashii", "otsukare", "ganbatte", "shoganai",
      "mottainai", "itadakimasu", "gochisousama",
      // Numbers (romaji)
      "ichi", "ni", "san", "yon", "go", "roku", "nana", "hachi",
      "kyuu", "juu", "hyaku", "sen", "man",
      // Days/Time (romaji)
      "getsuyoubi", "kayoubi", "suiyoubi", "mokuyoubi", "kinyoubi",
      "doyoubi", "nichiyoubi", "ichigatsu", "nigatsu", "sangatsu",
      "shigatsu", "gogatsu", "rokugatsu", "shichigatsu", "hachigatsu",
      "kugatsu", "juugatsu", "juuichigatsu", "juunigatsu",
      "haru", "natsu", "aki", "fuyu",
      "kinou", "kyou", "ashita", "hayai", "osoi",
      // Clothing (romaji)
      "shatsu", "zubon", "sukato", "uwagi", "kutsu", "boushi",
      "mafura", "tebukuro", "beruto", "kutsushita", "fuku", "seta",
      "kooto", "buutsu", "kaban", "kasa",
      // Emotions (romaji)
      "ureshii", "kanashii", "okoru", "kowai", "tsukareta", "taikutsu",
      "shinpai", "odoroku", "hokori", "shitto", "koufun",
      "ochitsuku", "manzoku", "gakkari", "shiawase", "kurushii",
      // Transport (romaji)
      "kuruma", "densha", "basu", "jitensha", "hikouki", "fune",
      "baiku", "takushi", "torakku", "chikatetsu",
      // Abstract (romaji)
      "jiyuu", "seigi", "heiwa", "kiken", "anzen",
      "seikou", "shippai", "yume", "kibou", "kyoufu",
      "koufuku", "kanashimi", "ai", "nikushimi", "yuuki", "nintai",
      "shinrai", "sonkei", "utsukushisa", "shinjitsu", "chie",
      // Common verbs (extended romaji)
      "harau", "kau", "uru", "ryouri", "souji", "arau",
      "unten", "ryokou", "oyogu", "utau", "odoru", "egaku",
      "kimeru", "erabu", "kowasu", "naosu", "tateru", "kowareru",
      "yakusoku", "kurushimu", "warau", "naku", "sakebu", "sasayaku",
      "okiru", "kiru", "inoru", "noboru", "tobu", "nageru",
      // Common nouns (extended romaji)
      "hikari", "kage", "koe", "shizukesa", "oto", "ongaku",
      "kyoku", "eiga", "supootsu", "chiimu", "aidea", "himitsu",
      "okurimono", "tegami", "messeeji", "denwa",
      "tsukue", "isu", "beddo", "mado", "kagami", "kagi",
      "tokei", "bin", "koppu", "sara", "naifu", "fooku",
      "supuun", "kappu", "nabe", "furaipan",
      // Counters & misc (romaji)
      "hitotsu", "futatsu", "mittsu", "yottsu", "itsutsu",
      "ikutsu", "takusan", "sukoshi", "zenbu", "hanbun",
      "saki", "ato", "sugu", "yukkuri", "hayaku",
      "hitori", "futari", "minna", "dareka", "nanika",
      // Common romanized profanity/slang
      "kuso", "baka", "aho", "chikushou", "kisama", "temee",
      "shine", "fuzakeru", "kutabare", "manko", "chinko", "unko",
      "yariman", "kimoi", "uzai", "busu",
    ],
    phrases: [
      "ohayou gozaimasu", "arigatou gozaimasu", "sumimasen",
      "itadakimasu", "gochisousama", "nani kore",
      "uso deshou", "maji de", "oyasumi nasai", "konbanwa",
      "mata ne", "ki wo tsukete", "gomen nasai", "daijoubu",
      "onegai shimasu", "hajimemashite", "yoroshiku onegai shimasu",
      "omedeto gozaimasu", "dou itashimashite", "ogenki desu ka",
      "wakarimasen", "wakarimashita", "sou desu ne", "sou desu ka",
      "chotto matte", "nan desu ka", "dou shita no",
      "ikura desu ka", "nanji desu ka", "doko kara",
      "nihongo ga wakarimasen", "eigo ga hanasemasu ka",
      "tasukete kudasai", "toire wa doko desu ka",
    ],
  },
  ko: {
    words: [
      // Common romanized Korean — basics
      "annyeong", "gamsa", "ne", "aniyo", "jal", "juseyo",
      "haseyo", "kamsahamnida", "mianhae", "saranghae", "oppa",
      "unni", "noona", "hyung", "eonni", "ahjussi", "ahjumma",
      "mwo", "wae", "eodi", "eonje", "nugu", "eolma",
      "meokda", "masida", "boda", "gada", "oda", "hada",
      "joa", "silheo", "gwaenchana", "daebak", "aigoo", "omo",
      // Pronouns & particles (romanized)
      "na", "neo", "geu", "geunyeo", "uri", "neohui", "geudeul",
      "igeo", "geugeo", "jeogeo", "yeogi", "geogi", "jeogi",
      "eotteon", "myeot", "nuguui", "museun", "eotteke",
      "ga", "eul", "reul", "e", "eseo", "ro", "wa", "gwa",
      "do", "man", "buteo", "kkaji", "bakke", "cheoreom",
      // Common verbs (romanized)
      "ida", "itda", "eopda", "doeda", "gada", "oda", "boda",
      "meokda", "masida", "hada", "malda", "alda", "moruda",
      "sarangda", "johda", "silda", "juda", "batda", "chajda",
      "saengakda", "deudda", "malhada", "sseuda", "ilkda",
      "ilhada", "nolda", "jada", "ireonda", "geolda", "dallida",
      "nalda", "jukda", "salda", "yeolda", "datda", "dukhada",
      "gidarida", "mannada", "baeuda", "gaereuchida", "dopda",
      "butakhada", "daeumhada", "sijakada", "ggeutnada",
      // Common nouns (romanized)
      "saram", "sesang", "nara", "dosi", "gil", "jip", "hakgyo",
      "gajok", "chingu", "ireum", "mun", "nun", "meori", "son",
      "maeum", "mom", "mul", "don", "chaek", "mal",
      "yeoksa", "jeonjaeng", "him", "gwonri", "munje",
      "bam", "achim", "jenyeok", "jumal", "dal", "hae",
      "sigan", "bun", "eomma", "appa", "oppa", "eonni",
      "hyeong", "nuna", "adeul", "ttal", "namja", "yeoja",
      "ai", "sigan", "nal", "saenghwal", "il",
      // Common adjectives (romanized)
      "jota", "nappeuda", "keuda", "jakda", "saeroun", "oraedoen",
      "gilda", "jjalda", "nopda", "najda", "ganghan", "yakhan",
      "ppareuda", "neurida", "yeppeuda", "jeolmeun", "jungyohan",
      "dareun", "olbareun", "geureom", "swipda", "eoryeopda",
      "jeulgeopda", "seulpeuda", "gippeuda", "museopda", "masissda",
      "deopda", "chupda", "ttatteutada",
      // Common adverbs (romanized)
      "hangsang", "jeoldae", "jaju", "gakkeum", "jigeum", "geurigo",
      "jeon", "yeogi", "geogi", "amado", "mullon", "yereul deulmyeon",
      "sasil", "imi", "ajik", "maeu", "byeollo", "jogeum",
      // Food (romanized)
      "bap", "gimbap", "tteokbokki", "bibimbap", "jjigae", "samgyeopsal",
      "bulgogi", "japchae", "ramyeon", "mandu", "pajeon", "dakgalbi",
      "kimchi", "sundae", "naengmyeon", "galbi", "jeon", "ssam",
      "doenjang", "gochujang", "soju", "makgeolli", "sikhye",
      "tteok", "hotteok", "bungeoppang", "yakgwa", "patbingsu",
      // Places (romanized)
      "byeongwon", "gongwon", "sijangs", "noraebang", "jimjilbang",
      "pyeonuijeom", "sikdang", "hagwon", "gonghangs", "yeok",
      "bang", "bueoek", "geosil", "hwajangsil", "okssang",
      // Animals (romanized)
      "gae", "goyangi", "sae", "mal", "so", "yang", "dwaeji",
      "tokki", "jwi", "gom", "neukdae", "baem", "gaeguri",
      "gorae", "sangeo", "nabi", "gaemi",
      // Nature (romanized)
      "bi", "nun", "baram", "gureum", "hae", "pokpung",
      "gang", "hosu", "bada", "san", "sup", "haneul",
      "byeol", "kkot", "pul", "namu", "dolg",
      // Colors (romanized)
      "ppalgan", "parang", "chorong", "norang", "kkaman", "hayan",
      "hoesaek", "galsaek", "bunjong", "bora",
      // Body (romanized)
      "pal", "dari", "bal", "mureup", "eogae", "songarak",
      "deung", "bae", "gaseum", "mok", "ko", "gwi", "ip",
      "ipssul", "bolg", "ima", "meori", "pi", "ppyeo",
      // Slang & informal
      "jinjja", "heol", "jjang", "hwaiting", "ottoke", "arasso",
      "mollayo", "wanjeon", "jeongmal", "chincha", "kkul",
      "sogaeting", "sseurekgi", "beoddeok", "jjam", "meotjida",
      "jjokpalida", "kkondae", "danji", "meolkki",
      // Numbers (romanized)
      "hana", "dul", "set", "net", "daseot", "yeoseot", "ilgop",
      "yeodeol", "ahop", "yeol", "baek", "cheon", "man",
      "il", "i", "sam", "sa", "o", "yuk", "chil", "pal", "gu", "sip",
      // Days/Time (romanized)
      "woryoil", "hwayoil", "suyoil", "mogyoil", "geumyoil",
      "toyoil", "iryoil", "irwol", "iwol", "samwol", "sawol",
      "owol", "yuwol", "chirwol", "palwol", "guwol", "siwol",
      "sibirwol", "sibiwol", "bom", "yeoreum", "gaeul", "gyeoul",
      "eoje", "oneul", "naeil", "iljjik", "neutge",
      // Clothing (romanized)
      "syeocheu", "baji", "chima", "jakit", "gudu", "moja",
      "mogdori", "janggap", "heoriddi", "yangmal", "ot",
      "kotu", "buchu", "gabang", "usan",
      // Emotions (romanized)
      "haengbokhan", "seulpeun", "hwanan", "museoun", "pigonhan",
      "jiruhaean", "geokjeong", "nollan", "jarangseureoun", "jiltuha",
      "heungbundoen", "pyeonganhan", "manjokhan", "silmanghan",
      // Transport (romanized)
      "jadongcha", "gicha", "beosu", "jajeongeo", "bihaenggi", "bae",
      "moteo", "taeksi", "jeonchеol", "teureok",
      // Abstract (romanized)
      "jayu", "jeongui", "pyeonghwa", "wiheom", "anjeon",
      "seonggong", "silpae", "kkum", "huimang", "gongpo",
      "haengbok", "seulpeum", "sarang", "mieum", "yonggi", "inyeo",
      "sinroe", "jongyeong", "arumdaum", "jinsil", "jihye",
      // Common verbs (extended romanized)
      "naeda", "sada", "palda", "yorihada", "cheongsohada", "ssitda",
      "unjeonhada", "yeohaenghada", "suyeonghada", "noraehada",
      "chumchuda", "geurida", "gyeoljeunghada", "goreuda",
      "kkaeturida", "gochida", "jitda", "busuda",
      "yaksokada", "goerobda", "utda", "ulda", "sorichida", "soksagida",
      "ireonada", "ibda", "gidohada", "oreuda", "ttwida", "deonjida",
      // Common nouns (extended romanized)
      "bich", "geurimja", "moksori", "goyo", "soreum", "eumak",
      "norae", "yeonghwa", "undong", "tim", "saenggak", "bimil",
      "seonmul", "pyeonji", "mesiji", "jeonhwa",
      "chaeksang", "uija", "chimdae", "changmun", "georeu", "yeolsoe",
      "sigye", "byeong", "keop", "jeopsi", "kal", "pokeu",
      "sukkarak", "keop", "naembi", "peuraipaen",
      // Counters & misc (romanized)
      "myeongui", "gaui", "geonui", "jangui", "gwonui",
      "mani", "jogeum", "jeonbu", "ban",
      "meolri", "gakkai", "ppalli", "cheoncheonhi",
      // Common romanized profanity
      "shibal", "ssibal", "gaesaekki", "jiral", "byeongsin",
      "michin", "nom", "nyeon", "kkeojieo", "dakchyeo",
      "jot", "boji", "jaji",
    ],
    phrases: [
      "annyeong haseyo", "kamsahamnida", "mianhamnida",
      "saranghae yo", "jal meokgesseumnida",
      "annyeonghi gaseyo", "annyeonghi jumuseyo", "jal ga",
      "jal ja", "gamsahamnida", "joesong hamnida", "gwaenchanayo",
      "ne arayo", "mollayo", "saenggak hamnida", "dangnyeonhaji",
      "munje eopseo", "eotteke jinaeseyo", "mannaseo bangapseumnida",
      "hana do", "igeo mwoyeyo", "eolma yeyo", "myeotsi yeyo",
      "eodieseo wasyeoyo", "dowa juseyo",
      "hangugeo mothaeyo", "yeongeo hal su isseoyo",
      "hwajangshil eodiyeyo", "jal moreugesseoyo",
    ],
  },
  hi: {
    words: [
      // Common romanized Hindi/Hinglish — basics
      "aap", "tum", "main", "hum", "yeh", "woh", "kya", "kab",
      "kahan", "kaun", "kyun", "kaise", "kitna", "bahut", "accha",
      "bura", "namaste", "dhanyavaad", "shukriya", "haan", "nahi",
      "theek", "chalo", "aaja", "jao", "karo", "bolo", "dekho",
      "khana", "paani", "ghar", "kaam", "dost", "pyar", "zindagi",
      "acha", "bilkul", "zaroor", "lekin", "aur",
      // Pronouns & particles
      "mujhe", "tujhe", "unhe", "inhe", "isko", "usko", "kisko",
      "mera", "tera", "uska", "iska", "hamara", "tumhara", "apna",
      "yahan", "wahan", "kahin", "idhar", "udhar", "ab", "tab",
      "jab", "kabhi", "koi", "kuch", "sab", "sirf", "par",
      "se", "ko", "ka", "ki", "ke", "mein", "pe",
      // Common verbs (romanized)
      "hona", "karna", "jana", "aana", "dekhna", "bolna", "sunna",
      "likhna", "padhna", "khana", "peena", "sona", "uthna",
      "baithna", "chalna", "daurna", "khelnа", "gaana", "nachna",
      "rona", "hasna", "marna", "jeena", "kholna", "band",
      "dena", "lena", "rakhna", "bhejnа", "milna", "samajhna",
      "jaanna", "bhoolna", "yaad", "sikhna", "sikhaana",
      "maangna", "maarna", "rokna", "dhundhna", "sochna",
      "chahna", "lagana", "puchna", "batana", "dikhana",
      // Common nouns (romanized)
      "log", "duniya", "desh", "shahar", "sadak", "ghar", "vidyalaya",
      "parivaar", "dost", "naam", "darwaza", "aankh", "sir", "haath",
      "dil", "shareer", "paani", "paisa", "kitab", "shabd",
      "itihas", "jung", "taakat", "adhikar", "samasya",
      "raat", "subah", "shaam", "hafta", "mahina", "saal",
      "ghanta", "maa", "baap", "bhai", "behen",
      "beta", "beti", "aadmi", "aurat", "baccha",
      "samay", "din", "zindagi", "kaam",
      // Common adjectives (romanized)
      "acha", "bura", "bada", "chhota", "naya", "purana",
      "lamba", "chhota", "uncha", "neecha", "mazboot", "kamzor",
      "tez", "dheema", "sundar", "jawaan", "zaroori",
      "alag", "sahi", "galat", "azad", "aasan", "mushkil",
      "khushi", "dukhi", "dara", "swadisht",
      "garam", "thanda",
      // Extended Hinglish vocabulary — common everyday words
      "bohot", "bohut", "yaar", "arre", "arrey", "oye", "abey",
      "achha", "theekhai", "pakka", "sacchi", "jhooth", "sach",
      "pagal", "paagal", "mast", "bakwas", "faltu", "bekar",
      "shaandaar", "zabardast", "kamaal", "lajawab", "shandar",
      "bindass", "dhamaal", "ekdum", "bilkul", "seedha", "ulta",
      // Family (romanized)
      "chacha", "chachi", "mama", "mami", "nana", "nani",
      "dada", "dadi", "bhabhi", "jija", "devar", "nanad",
      "sasur", "saas", "bahu", "damad", "rishtedaar",
      // Food (romanized)
      "roti", "dal", "daal", "chawal", "sabzi", "sabji",
      "chai", "doodh", "dudh", "ghee", "atta", "namak",
      "mirch", "masala", "achar", "raita", "paratha", "puri",
      "samosa", "pakora", "chaat", "lassi", "paneer",
      "biryani", "pulao", "halwa", "laddu", "barfi", "mithai",
      "nashta", "kheer", "chutney", "pappad", "idli", "dosa",
      // Body (romanized)
      "haath", "pair", "sar", "pet", "aankh", "kaan",
      "naak", "muh", "dant", "jibh", "gala", "seena",
      "kamar", "ghutna", "ungali", "nakhun", "peeth",
      // Emotions & states (romanized)
      "khush", "udas", "gussa", "dar", "thak", "bore",
      "pareshan", "hairaan", "sharminda", "majboor", "bechain",
      // Nature (romanized)
      "baarish", "dhoop", "hawa", "badal", "tufaan", "bijli",
      "nadi", "jheel", "samundar", "pahad", "jungle", "ped",
      "phool", "ghass", "patta", "mitti", "aasmaan", "tara",
      "chaand", "suraj", "dharti",
      // Animals (romanized)
      "kutta", "billi", "ghoda", "gaay", "bakri", "murgi",
      "machhli", "saanp", "mendhak", "bandar", "hathi", "sher",
      "chidiya", "titli", "makdi", "cheenti", "chuha",
      // Places (romanized)
      "mandir", "masjid", "gurudwara", "bazaar", "dukaan",
      "dawakhana", "aspatal", "sthan", "maidan", "chowk",
      "mohalla", "gali", "nukkad", "haveli", "qila",
      // Time (romanized)
      "aaj", "kal", "parso", "abhi", "baad", "pehle",
      "subah", "dopahar", "shaam", "raat", "saal", "mahina",
      "hafta", "ghanta", "savaari",
      // Numbers (romanized)
      "ek", "do", "teen", "chaar", "paanch", "chhe",
      "saat", "aath", "nau", "das", "gyarah", "baarah",
      "bees", "tees", "chaalees", "pachaas", "sau", "hazaar", "lakh",
      // Days (romanized)
      "somvaar", "mangalvaar", "budhvaar", "guruvaar",
      "shukravaar", "shanivaar", "ravivaar",
      // Clothing (romanized)
      "kapda", "kurta", "pajama", "sari", "saree", "dupatta",
      "chunni", "dhoti", "lungi", "chapppal", "juta", "topi",
      // Colors (romanized)
      "laal", "neela", "hara", "peela", "kaala", "safed",
      "gulabi", "narangi", "bhoora",
      // Common adverbs (romanized)
      "hamesha", "aksar", "abhi", "phir", "shayad",
      "sachmuch", "wakai", "filhaal", "warna", "isliye",
      "akhir", "pehle", "zyada", "kam", "thoda", "kaafi",
      // Slang & informal Hinglish
      "jhakaas", "pataka", "chamak",
      "jugaad", "fundа", "timepass",
      // Common romanized profanity
      "chutiya", "bhenchod", "madarchod", "gaandu", "bhosdike",
      "randi", "saala", "harami", "kamina", "bewakoof", "gadha",
      "ullu", "bakchod", "lodu", "jhatu", "tatti",
    ],
    phrases: [
      "kya haal hai", "kaise ho", "theek hai", "chalo chalte hain",
      "teri maa ki", "bhenchod sala",
      "suprabhat", "shubh raatri", "alvida", "phir milenge",
      "maaf kijiye", "kripaya", "bahut dhanyavaad", "koi baat nahi",
      "mujhe nahi pata", "mujhe lagta hai", "bilkul",
      "koi samasya nahi", "udaharan ke liye", "asal mein",
      "kabhi kabhi", "hamesha", "kabhi nahi", "abhi",
      "phir", "pehle", "kam se kam", "iske alawa",
      "ek minute", "kya matlab", "yaani", "aap kahan se hain",
      "kya aap meri madad kar sakte hain",
      "mujhe hindi nahi aati", "kya aap angrezi bolte hain",
    ],
  },
  bn: {
    words: [
      // Common romanized Bengali — basics
      "ami", "tumi", "apni", "she", "eta", "ota", "ki", "keno",
      "kothay", "kokhon", "ke", "koto", "bhalo", "kharap",
      "dhonnobad", "haan", "na", "thik", "ache", "koro", "jao",
      "eso", "dekho", "bolo", "khao", "basha", "bari", "kaj",
      "bondhu", "bhalobasha", "jibon",
      // Pronouns & particles
      "amake", "tomake", "apnake", "take", "tar", "amar", "tomar",
      "apnar", "oder", "ekhane", "okhane", "kothao", "ekhon", "tokhon",
      "keu", "kichu", "sob", "shudhu", "theke", "te", "ke", "r",
      "er", "e", "o", "ar", "ba", "tai",
      // Common verbs (romanized)
      "howa", "kora", "jaowa", "asha", "dekha", "bola", "shona",
      "lekha", "pora", "khawa", "paan", "ghumano", "otha",
      "bosha", "hata", "doura", "khela", "gaan", "naach",
      "kanda", "hasha", "mora", "bacha", "khola", "bondho",
      "deowa", "neowa", "rakha", "pathano", "pawa", "bujha",
      "jaana", "bhola", "mone", "shekha", "shekhano",
      "chaowa", "maara", "thama", "khuja", "bhaba",
      // Common nouns (romanized)
      "manush", "prithibi", "desh", "shohor", "rasta", "ghor", "biddaloy",
      "poribar", "bondhu", "naam", "dorja", "chokh", "matha", "haat",
      "mon", "shorir", "jol", "taka", "boi", "kotha",
      "itihas", "juddho", "shakti", "odhikar", "shomoshya",
      "raat", "shokal", "bikel", "soptaho", "maash", "bochor",
      "ghonta", "maa", "baba", "bhai", "bon",
      "chhele", "meye", "purush", "mohila", "shishu",
      "shomoy", "din", "jibon", "kaaj",
      // Common adjectives (romanized)
      "bhalo", "kharap", "boro", "chhoto", "notun", "purano",
      "lomba", "bete", "unchu", "nichu", "shokto", "durbol",
      "druto", "dhire", "shundor", "jubok", "guruttopurno",
      "alag", "thik", "bhul", "shadhin", "shohoz", "kothin",
      "shukhi", "dukhi", "bhoy", "shuad",
      "gorom", "thanda",
      // Food (romanized)
      "ruti", "bhaat", "daal", "torkari", "machh", "murgi", "dim",
      "chaal", "aloo", "begun", "pyaj", "roshun", "lau", "shim",
      "narikel", "aam", "kathal", "lichu", "kola", "peyara", "taal",
      "shondesh", "roshogolla", "mishti", "doi", "payesh", "luchi",
      "porota", "singara", "jhalmuri", "phuchka", "chop", "nimki",
      "gur", "lobon", "ghee", "tel", "holud", "morich",
      "cha", "dudh", "jol", "sherbet", "lassi",
      // Body (romanized)
      "haat", "pa", "goda", "haatu", "kadh", "angul",
      "peeth", "pet", "buk", "gola", "naak", "kaan",
      "mukh", "thot", "chokh", "kapaal", "chul", "chamra",
      "haar", "rokto", "moghoj", "peshi", "paakstoli",
      // Family (romanized)
      "thakurda", "thakurma", "kaka", "kakima", "mama", "mami",
      "dadu", "dida", "boudi", "jamai", "pishi", "mesho",
      "shashuri", "shaashuri", "jamaibabu", "bou", "nati", "natni",
      // Animals (romanized)
      "kukur", "biral", "ghora", "goru", "chhagol", "shukоr", "khorgosh",
      "indur", "bhalluk", "nеkre", "shaap", "byag", "kachim",
      "timi", "hangor", "cheel", "projapoti", "pipra", "moumachhi",
      "singho", "bagh", "hathi", "banor", "horin", "sheal",
      "murgi", "pakhi", "gadha",
      // Nature (romanized)
      "brishti", "borf", "batash", "megh", "surjo", "jhor", "bajro",
      "bijli", "dhonuk", "nodi", "jheel", "sagar", "saikat",
      "pahar", "tila", "bon", "morubhumi", "dwip", "upotoka",
      "gaach", "phul", "ghash", "pata", "mul", "bij",
      "pathor", "baali", "akash", "tara", "chaand", "agun",
      // Colors (romanized)
      "laal", "nil", "shobuj", "holud", "kaalo", "shada", "dhusor",
      "khoiri", "golapi", "beguni", "komla", "sona", "rupa",
      // Places (romanized)
      "hashpatal", "uddhan", "dokan", "reshtura",
      "bimanbondor", "granthagar", "jadughor", "natyoshala",
      "oshudhghor", "opish", "karkhana", "bajaar", "moydan",
      "masjid", "mondir", "girja", "rashtaghor", "ghor",
      "rannaghor", "ghоr", "shnanghor", "baranda",
      // Numbers (romanized)
      "shunno", "ek", "dui", "tin", "char", "panch", "chhoy",
      "shaat", "aat", "noy", "dosh", "shо", "hajar", "lakh",
      // Days/Time (romanized)
      "shombar", "mongolbar", "budhbar", "brihoshpotibar", "shukrobar",
      "shonibar", "robibar", "jaanuari", "phebruari",
      "sheptember", "boshonto", "grishmo", "borsha",
      "shorot", "hemonto", "sheet",
      "poush", "magh", "phalgun", "choitro", "boishakh", "jyoishto",
      "ashar", "srabon", "bhadro", "ashwin", "kartik", "ogrohayon",
      "gotokal", "aaj", "aagamikal", "shokal", "dupur", "bikal",
      // Clothing (romanized)
      "jaama", "shari", "juta", "topi",
      "moflar", "dastana", "moja", "poshak",
      "koti", "chata",
      // Emotions (romanized)
      "shukhi", "dukhi", "raag", "bhoy", "klanto", "biroktо",
      "chintito", "bismito", "gorbioto", "hingsha", "utshahi",
      "shanto", "tushto", "nirash", "anondo", "bedona",
      // Transport (romanized)
      "gari", "biman", "jahaj",
      "riksha", "nouka", "thellagari", "palki",
      // Abstract (romanized)
      "shadhinota", "bichar", "shanti", "bipod", "nirapotta",
      "shopholota", "byartho", "shopno", "asha", "bhoy",
      "shukh", "dukh", "bhalobasha", "ghrina", "shahosh", "dhorjo",
      "bishshash", "shomman", "shundorjo", "shotto", "prodna",
      // Common verbs (extended romanized)
      "kena", "bikri", "ranna", "parishkar", "dhoa",
      "cholano", "bhromon", "shatar", "gaan", "naach", "aka",
      "siddhanto", "chuna", "bhanga", "jora", "gora", "dhangsha",
      "protiggya", "koshto", "hasha", "kanna", "chitkar", "fisfish",
      "jagа", "poshak", "prarthona", "shopno", "ora", "laph",
      // Common nouns (extended romanized)
      "aalo", "chhaya", "shobdo", "nirobota", "kolahol", "shongeet",
      "gaan", "khela", "phutbol", "dol", "dharna", "gupto",
      "upohar", "chithi", "khobor", "tebil", "chowki",
      "bichhana", "janala", "ayna", "chabi", "ghori",
      "botol", "glash", "thala", "chhuri", "kata",
      "chamoch", "patil", "korai",
      // Slang & informal (romanized)
      "dada", "didi", "bondhura", "ki rе", "arre", "orey",
      "joss", "fatafati", "darun", "bhishon", "maarattok", "durdanto",
      "ashchhorjo", "baaje", "gyachho", "bakwaash", "paka", "aabol",
      // Common romanized profanity
      "chuda", "banchod", "maagi", "shala", "haramzada",
      "bokachoda", "khanki", "nongra", "gadha", "chagol",
    ],
    phrases: [
      "kemon acho", "bhalo achi", "ki holo",
      "shuprovat", "shubho ratri", "abar dekha hobe",
      "maaf korben", "doya kore", "onek dhonnobad", "kichu na",
      "ami jani na", "ami mone kori", "obosshoi",
      "kono shomoshya nei", "udahoron shworup", "ashore",
      "moddhe moddhe", "shob shomoy", "kokhono na", "ekhon",
      "tar por", "age", "kom pokkhey", "tachara",
      "ek minute", "ki mane", "mane", "apni kothai theke",
      "apni ki amake shahajjo korte parben",
    ],
  },
  ta: {
    words: [
      // Common romanized Tamil — basics
      "naan", "nee", "avar", "ival", "enna", "yenna", "yen",
      "enga", "yeppadi", "evvalavu", "yaaru", "eppothu",
      "nandri", "vanakkam", "aam", "illai", "sari",
      "saapidu", "paar", "poo", "vaa", "sollu",
      "veedu", "velai", "nanbaa", "anbu", "vazhkai",
      // Pronouns & particles
      "enakku", "unakku", "avarukku", "ivalukku", "avan", "aval",
      "avanga", "idu", "adu", "inga", "anga", "yaaravadhu",
      "edhaavadhu", "ellaam", "mattum", "irundhu", "ku", "il",
      "udaiya", "oda", "um", "aa", "oh", "pola",
      // Common verbs (romanized)
      "irukka", "seyya", "poga", "vara", "paarkka", "solla", "ketkka",
      "ezhudha", "padikka", "saapida", "kudikka", "thoonga", "ezhundha",
      "ukkaara", "nadakka", "oda", "vilayaada", "paada", "aada",
      "azhа", "sirikka", "saaga", "vaazha", "thora", "mooda",
      "kodukka", "vaanga", "vaikka", "anuppa", "kidaikka", "puriya",
      "theriya", "marakka", "nyaabagam", "katrukkol", "katrukodukka",
      "virumbu", "adi", "niruthu", "thedа", "yoasi",
      // Common nouns (romanized)
      "manidhan", "ulagam", "naadu", "nagar", "sadhai", "veedu", "palli",
      "kudumbam", "nanban", "peyar", "kadhavu", "kann", "thalai", "kai",
      "manam", "udambu", "thanni", "panam", "puttagam", "vaarthai",
      "varalaru", "poar", "valimai", "urimai", "pirachani",
      "iravu", "kaalai", "maalai", "vaaram", "maatham", "varudam",
      "mani", "nimisham", "amma", "appa", "annan", "akka",
      "thambi", "thangai", "magan", "magal", "aan", "pen",
      "kuzhanthai", "neram", "naal", "vazhkai", "velai",
      // Common adjectives (romanized)
      "nalla", "kettа", "periya", "sinna", "pudhu", "pazhaya",
      "neenda", "kutta", "uyara", "thazha", "valimaiyana", "palaminana",
      "vegamana", "medhuva", "azhagana", "ilamayana", "mukkiyamana",
      "verupatta", "sariyaana", "thavaru", "sudhandhiramana",
      "sulabam", "kadinam", "sandhosham", "thukkam", "bayam",
      "suvai", "soodu", "kulir",
      // Food (romanized)
      "saadham", "sambar", "rasam", "koozhambu", "poriyal", "thosai",
      "idli", "vadai", "appam", "pongal", "uppuma", "biryani",
      "parotta", "kothu", "murukku", "laddu", "payasam", "halwa",
      "puttu", "avial", "pachadi", "thayir", "ney", "thengai",
      "pal", "theneer", "kaapi", "chaaya", "mor", "panneer",
      "meen", "kozhi", "mutton", "aattu", "eral", "nandu",
      "arisi", "kadalai", "paruppu", "vengaayam", "thakkali", "poondu",
      "milagu", "manjal", "uppu", "sakkarai", "elumichai",
      "vazhaipazham", "maadhulai", "manga", "palaa",
      // Body (romanized)
      "kai", "kaal", "paadham", "muzhankai", "thol", "viral",
      "muthu", "vayiru", "maarbu", "kazhthu", "mooku", "kaadhu",
      "vaai", "udhadhu", "mugam", "netri", "mudhi", "thol",
      "elumbu", "ratham", "moolai", "thasai", "vayiru",
      // Family (romanized)
      "thatha", "paatti", "periappa", "periamma", "chitappa", "chithhi",
      "mama", "maami", "athaan", "atthai", "maamanaar", "mamaiyaar",
      "mapillai", "marumgal", "paiyan", "ponnu", "kuzhanthai",
      "kanaavan", "manaivi", "nishayathaarar",
      // Animals (romanized)
      "naai", "poonai", "kuthirai", "maadu", "aadu", "panni", "muyal",
      "eli", "karadi", "onaan", "paambu", "thavulai", "aamai",
      "thimichangkalam", "sura", "parundhu", "vannathu", "erumbu", "thenu",
      "singam", "puli", "yaanai", "kurangu", "maan", "nari",
      "kozhi", "paravai",
      // Nature (romanized)
      "mazhai", "pani", "kaatru", "mugil", "suriyan", "puyal", "idhi",
      "minnalrai", "vaanvillu", "aaru", "eri", "kadal", "kadarkkarai",
      "malai", "kunru", "kaadu", "paalaivnam", "theevu", "pallathaakku",
      "maram", "poo", "pul", "ilai", "ver", "vidhai",
      "kal", "manal", "vaanam", "natchathiram", "nilavau", "neruppu",
      // Colors (romanized)
      "sivappu", "neelam", "pachai", "manjal", "karuppu", "vellai",
      "saamai", "kaapi", "ilaneer", "oodha", "orange", "thangam", "velli",
      // Places (romanized)
      "marundhagam", "poonga", "kadai", "unavagam", "vidhudhi",
      "nilaiyam", "vimaana", "noolakam", "arangam", "naadakam",
      "marundhukadai", "vangi", "aluvalakam", "thozhirsaalai",
      "sandhai", "maidaanam", "koyil", "pallivasal", "sarchchi",
      "samayalarai", "padukkai", "kuliyal", "thottam",
      // Numbers (romanized)
      "poojiyam", "onru", "irandu", "moondru", "naangu", "ainthu",
      "aaru", "ezhu", "ettu", "onbadhu", "paththu", "nooru", "aayiram", "latcham",
      // Days/Time (romanized)
      "thingal", "chevvaai", "pudhan", "viyaazhan", "velli",
      "sani", "nyaayiru", "thai", "maasi", "panguni", "chithirai",
      "vaigaasi", "aani", "aadi", "aavani", "purattaasi",
      "aippasi", "kaarthigai", "maargazhi",
      "netru", "indru", "naalai", "kaalaiyil", "mathiyam", "maalai",
      // Clothing (romanized)
      "sattai", "pavadai", "chappal", "thoppi",
      "thundu", "udai", "pai", "kudai",
      // Emotions (romanized)
      "makizhchi", "varudham", "koapam", "bayam", "aayavu", "adippu",
      "padhattam", "viyappu", "perumai", "poramai", "aarvam",
      "amaidhi", "nirai", "ayarchi", "kavalai", "kashtam",
      // Transport (romanized)
      "vandi", "mithivandi", "vimanam", "kappal",
      "padagu", "vandy", "rikshaw",
      // Abstract (romanized)
      "sudhanthiram", "needhi", "amaidhi", "aabathu", "paadhugappu",
      "vetri", "tholvi", "kanavu", "nambikkai", "achham",
      "magizhchi", "thukkam", "kaadhal", "veruppu", "dhairyam", "porumai",
      "nambikkai", "mariyaadhai", "azhagu", "unmai", "gnanam",
      // Common verbs (extended romanized)
      "vaangu", "vilai", "samaikka", "sutham", "kazhuvu",
      "otu", "payanam", "neentha", "paadu", "aadu", "varai",
      "mudivau", "thervu", "udai", "pazhudhu", "kattapodu", "azhikka",
      "vaakku", "thunbam", "siri", "azhu", "koochu", "kisumusu",
      "vizhippu", "uduthu", "vanagu", "kanavu", "yeru", "kuthippu",
      // Common nouns (extended romanized)
      "oli", "nizhal", "kural", "amaidhi", "sathham", "isai",
      "paadal", "vilayaattu", "panthu", "ani", "yoosanai", "ragasiyam",
      "parisau", "kaditham", "seydhi", "tholaipaesi",
      "maesai", "naarkkaali", "kattil", "jannal", "kannadi", "saavi",
      "manikoodam", "pudial", "tumbler", "thattu", "kathi",
      "karandi", "kinnaam", "paanai", "vaanali",
      // Slang & informal (romanized)
      "machaan", "macchi", "nanba", "thalaivaa", "dei", "di",
      "poda", "podi", "seri", "sappa", "mass", "kalaakkal",
      "semma", "theriyadhu", "romba", "kastam", "mokka", "scene",
      // Common romanized profanity
      "thevdiya", "thevidiya", "otha", "pundai", "punda",
      "soothu", "mayiru", "baadu", "loosu", "mokka",
      "kena", "pottai",
    ],
    phrases: [
      "eppadi irukeenga", "nalla irukken", "enna achu",
      "kaalai vanakkam", "iravu vanakkam", "meedum sandippom",
      "mannikkavum", "thayavu seidhu", "romba nandri", "paravaillai",
      "enakku theriyaadhu", "naan nenaikkireen", "nishchayamaga",
      "onnum pirachani illai", "udaaranamaga", "unmaiyil",
      "sila samayam", "eppothum", "eppothum illai", "ippo",
      "appuram", "munnaadi", "kuraindhapatcham", "thavira",
      "oru nimisham", "enna artham", "adhaavathu",
      "nee enga irundhu varee", "enakku tamizh theriyaadhu",
      "ungalukku english theriyuma",
    ],
  },
  te: {
    words: [
      // Common romanized Telugu — basics
      "nenu", "nuvvu", "meeru", "adi", "idi", "enti", "enduku",
      "ekkada", "eppudu", "evaru", "entha", "manchidi", "chedda",
      "dhanyavaadalu", "namaskaram", "avunu", "ledu", "sare",
      "tinu", "choodandi", "vellu", "raa", "cheppu",
      "illu", "pani", "snehithudu", "prema", "bratuku",
      // Pronouns & particles
      "naaku", "neeku", "ataniki", "aameki", "atanu", "aame",
      "vaallam", "idi", "adi", "ikkada", "akkada", "evaraina",
      "edaina", "antha", "matrame", "nundi", "ki", "lo",
      "yokka", "tho", "kuda", "aa", "ee", "laga",
      // Common verbs (romanized)
      "undи", "cheyyi", "vellu", "raa", "choodu", "cheppu", "vinu",
      "raayи", "chaduvи", "tinu", "taagu", "nidrapо", "lechu",
      "kurchо", "naduchи", "parugettи", "aadu", "paadu", "aaду",
      "yedu", "navvu", "chanipoyu", "bratuku", "teruvu", "muyyu",
      "ivvu", "teesukoniu", "pettu", "pampu", "doruku", "artham",
      "telusu", "marchipо", "gurtundi", "nerchukoniu", "nerpinchu",
      "ishtapadи", "koddu", "aapu", "vetuku", "aalochinchu",
      // Common nouns (romanized)
      "manishi", "prapancham", "desham", "nagaram", "daari", "illu",
      "badi", "kutumbam", "snehithudu", "peru", "talupu", "kannu",
      "tala", "chettu", "manasu", "shareeram", "neellu", "dabbu",
      "pustakam", "padham", "charitra", "yuddham", "balam",
      "hakku", "samasya", "raatri", "udayam", "sayantram",
      "vaaram", "nelа", "samvatsaram", "ganta", "nimisham",
      "amma", "nanna", "anna", "akka", "tammudu", "chelli",
      "koduku", "kooturu", "purushуdu", "aadadi", "pillalu",
      "samayam", "roju", "bratuku", "pani",
      // Common adjectives (romanized)
      "manchidi", "chedda", "pedda", "chinna", "kotta", "paata",
      "podu", "pottiga", "ekkuva", "takkuva", "balam", "balavantam",
      "vegam", "mellaga", "andamaina", "yuvakudu", "mukhyam",
      "verupаtta", "saraina", "tappu", "sweccha", "sulabham",
      "kashtam", "santosham", "baadha", "bhayam", "ruchi",
      "vedi", "challagа",
      // Food (romanized)
      "annam", "pappu", "pulusu", "kura", "perugu", "upma",
      "pesarattu", "garelu", "boorelu", "pootharekulu", "pulihora",
      "gongura", "avakaya", "pachadi", "gutti", "neyyi", "kobbari",
      "paalu", "neellu", "kaaram", "uppu", "bellam", "nimmakaya",
      "aratipandu", "mamidipandu", "draksha", "puchakaya",
      "kodiguddu", "mamsam", "chepalu", "royalu", "pitta",
      "biyyam", "sanagalu", "ulligadda", "vellulli",
      "miriyalu", "pasupu", "jeelakarra", "aavalu",
      // Body (romanized)
      "cheyyi", "kaalu", "paadham", "mokalu", "bhujam", "velu",
      "veepu", "pottа", "rathe", "meda", "mukku", "chevi",
      "noru", "pedavi", "moham", "nethi", "juttu", "charma",
      "yemuka", "raktham", "medadu", "kanda", "kalеju",
      // Family (romanized)
      "thaatha", "ammamma", "babai", "pinni", "mamayya", "aththa",
      "alludu", "kodalu", "abbayi", "ammayi", "bidda",
      "bharthа", "bhaarya", "pellam", "mogudu",
      // Animals (romanized)
      "kukka", "pilli", "gurrаm", "aavu", "meeka", "pandi", "kundelu",
      "yeluka", "yalugu", "thodеlu", "paamu", "kappa", "taaboelu",
      "thimingalam", "sura", "gadda", "seethakoka", "cheema", "thenеtiga",
      "simham", "puli", "yeenugu", "kothe", "ledi", "nakka",
      "kodi", "pitta",
      // Nature (romanized)
      "varsham", "manci", "gaali", "megham", "suriyudu", "tufaan",
      "urupulu", "merupu", "indradhanus", "yeru", "cheruvu", "samudram",
      "kondalа", "guttа", "adavi", "yеdari", "dweepam", "loya",
      "chettu", "puvvu", "gaddi", "aaku", "veru", "vittanam",
      "raayi", "isuka", "aakasham", "nakshathram", "chandrudu", "nippu",
      // Colors (romanized)
      "yеrra", "neelam", "aakupaccha", "pasupu", "nalla", "thella",
      "boodida", "kaapi", "gulabi", "oodha", "narangi", "bangаru", "vendi",
      // Places (romanized)
      "aaspathri", "udyaanavanam", "kadai", "bhojanam", "satram",
      "railnilayam", "vimaanam", "granthalayam", "vasthupradarsana",
      "naatakam", "chitrаm", "mаndula", "karyaalayam",
      "karmagaram", "santhа", "maidanam", "gudi", "masjid",
      "vantillu", "padakagadi", "snaanam", "thota",
      // Numbers (romanized)
      "sunna", "okati", "rendu", "moodu", "naalugu", "aidu",
      "aaru", "yedu", "yеnimidi", "thommidi", "padhi", "vandа", "veyyi", "laksham",
      // Days/Time (romanized)
      "somavаram", "mangalavаram", "budhavаram", "guruvаram", "sukravаram",
      "sanivаram", "aadivаram",
      "niinna", "eeroju", "rеpu", "poddhunnа", "madhyaahnam", "saayаntram",
      // Clothing (romanized)
      "chokka", "pаntlaam", "lаnga", "chеtlu", "toppi",
      "kandhuvaa", "чaddaar", "duppata", "voni",
      // Emotions (romanized)
      "santoosham", "baadha", "kоpam", "bhаyam", "аlаsyam",
      "visuugu", "аandolana", "aashcharyam", "garvam", "irsha",
      "uthsaaham", "shаanthi", "thrupti", "niraasha",
      // Transport (romanized)
      "bandi", "railu", "bussu", "vimaanam", "оdа",
      "rikshaa", "pаdаvu",
      // Abstract (romanized)
      "swеcchа", "nyаayam", "shаanthi", "prаmaadam", "rаksha",
      "vijayam", "aparajayam", "kаlа", "аashа", "bhаyam",
      "aanаndam", "dukhаm", "prеma", "dwеsham", "dhаiryam", "opsikа",
      "nаmmikа", "gаurаvam", "аndаm", "sаtyam", "viveekаm",
      // Common verbs (extended romanized)
      "kondu", "ammаkam", "vаndа", "shubhram", "kаdugu",
      "nаdаpu", "prаyааnam", "ееtа", "paаtа", "аatа", "bоmmа",
      "nirdааrinchu", "yеnchukо", "viruvu", "bааgu", "nirminchu",
      "vaаgdааnam", "bааdhа", "nаvvu", "yеdvu", "аruvu", "gusа",
      "lеchu", "dhаrinchu", "prаrthinchu", "kаlаlu", "yеkku", "duuku",
      // Common nouns (extended romanized)
      "vеlugu", "needa", "kаntham", "nishshаbdаm", "dhvаni", "sаngeetam",
      "pааtа", "ааtа", "bааlu", "jаttu", "аalochаnа", "rаhаsyam",
      "bаhumааnam", "uttаrаm", "sаndеsham", "phоnu",
      "bаllа", "kurchi", "mаnchаm", "kitiki", "аddаm", "tааlu",
      "gаdiуааram", "seesа", "glааsu", "plааtu", "kаthi",
      "chаmchа", "kаppu", "ginnе",
      // Slang & informal (romanized)
      "rаа", "rааndі", "bааbu", "аnnа", "аkkа", "chааlа",
      "еnthа", "аrе", "оrеy", "оrеy", "bhаyуа", "mаchаa",
      "supеr", "bааgа", "аdіri", "pаdаk", "jоru", "gаttіgа",
      // Common romanized profanity
      "dengey", "lanja", "pooku", "sulli", "modda",
      "gudda", "donga", "vennakka", "erri", "puka",
    ],
    phrases: [
      "ela unnaru", "baagunnanu", "emi ayyindi",
      "subhodayam", "shubha raatri", "malli kaluddaam",
      "kshaminchaandi", "dayachesi", "chala dhanyavaadalu",
      "parledu", "naaku teliyadu", "nenu anukuntunnanu",
      "tappakunda", "emi samasya ledu", "udaaharanaku", "nijaaniki",
      "konni saarlu", "eppudu", "eppudu kaadu", "ippudu",
      "tarvata", "mundhu", "kaaneesam", "adhe kaakunda",
      "oka nimisham", "artham enti", "anagaa",
      "meeru ekkada nundi", "meeru naaku sahayam cheyagalara",
    ],
  },
};

// ---------------------------------------------------------------------------
// Language Trie — per-language vocabulary trie with partial match scoring
// ---------------------------------------------------------------------------

export class LangTrieNode {
  children: Map<string, LangTrieNode> = new Map();
  isEndOfWord = false;
  /** Number of accents stripped if this end-of-word is a stripped variant (0 = original) */
  strippedAccentCount = 0;
  /** Length of the shortest complete word reachable from this node (including self) */
  minWordLen = Infinity;
}

/** Strip all accents/diacritics from a string, returning the ASCII form.
 *  e.g. 'gürültü' → 'gurultu', 'straße' → 'strasse' */
export function stripAccents(s: string): string {
  let result = "";
  for (const ch of s) {
    const normalized = ch.normalize("NFD");
    const base = normalized.replace(/[\u0300-\u036f]/g, "");
    if (base !== ch && base.length >= 1) {
      result += base;
    } else {
      // Special chars not covered by NFD
      const special: Record<string, string> = {
        "ß": "ss", "ø": "o", "æ": "ae", "œ": "oe",
        "đ": "d", "ł": "l", "ħ": "h",
      };
      result += special[ch] || ch;
    }
  }
  return result;
}

/** Count how many characters in a word have accents that would be stripped. */
export function countStrippedAccents(word: string): number {
  let count = 0;
  for (const ch of word) {
    const stripped = stripAccents(ch);
    if (stripped !== ch) count++;
  }
  return count;
}

/** Per-accent-stripped-char penalty. Compounds: 2 accents = 0.9025, 3 = 0.857, etc. */
export const ACCENT_PENALTY_PER_CHAR = 0.95;

/**
 * Per-language trie for efficient vocabulary matching with partial match scoring.
 *
 * Supports:
 * - Exact match → score 1.0
 * - Input is prefix of a trie word → score = inputLen / trieWordLen
 * - Trie word is prefix of input → score = trieWordLen / inputLen
 * - Input falls off partway → matchedChars / inputLen
 * - Accent-tolerant matching: for words with len > 3, both the original and
 *   accent-stripped version are inserted. Stripped versions carry a compounding
 *   penalty (0.95^numStrippedChars). "gurultu" matches the stripped variant of
 *   "gürültü" with penalty 0.95^3 ≈ 0.857.
 */
export class LanguageTrie {
  private root = new LangTrieNode();

  /** Insert a word into the trie. If it contains accents and len > 3,
   *  also insert the accent-stripped version with penalty based on number stripped. */
  addWord(word: string): void {
    const lower = word.toLowerCase();
    this._insert(lower, 0);

    // For words longer than 3 chars, also insert accent-stripped variant
    if (lower.length > 3) {
      const stripped = stripAccents(lower);
      if (stripped !== lower) {
        // Count how many characters actually changed
        const accentCount = countStrippedAccents(lower);
        this._insert(stripped, accentCount);
      }
    }
  }

  private _insert(lower: string, accentCount: number): void {
    let node = this.root;
    for (const ch of lower) {
      if (!node.children.has(ch)) {
        node.children.set(ch, new LangTrieNode());
      }
      node = node.children.get(ch)!;
      node.minWordLen = Math.min(node.minWordLen, lower.length);
    }
    // Don't overwrite a real (non-stripped) entry with a stripped variant
    if (node.isEndOfWord && node.strippedAccentCount === 0 && accentCount > 0) {
      // Already have an exact entry, skip
    } else {
      node.isEndOfWord = true;
      node.strippedAccentCount = accentCount;
    }
    node.minWordLen = lower.length;
  }

  /**
   * Score a word against this trie (0–1).
   *
   * Walk the word through the trie character by character:
   * - Exact match → 1.0 (or 1.0 × penalty if matched a stripped variant)
   * - Input is prefix of trie word → inputLen / shortestReachableWordLen
   * - Trie word is prefix of input → matchedWordLen / inputLen
   * - Fell off partway → matchedChars / inputLen
   */
  matchScore(word: string): number {
    const lower = word.toLowerCase();
    const len = lower.length;
    if (len === 0) return 0;

    let node = this.root;
    let depth = 0;
    let bestScore = 0;

    for (const ch of lower) {
      const next = node.children.get(ch);
      if (!next) break;
      node = next;
      depth++;

      if (node.isEndOfWord) {
        let score = depth / len;
        if (node.strippedAccentCount > 0) {
          score *= Math.pow(ACCENT_PENALTY_PER_CHAR, node.strippedAccentCount);
        }
        bestScore = Math.max(bestScore, score);
      }
    }

    if (depth === len) {
      if (node.isEndOfWord) {
        let score = 1.0;
        if (node.strippedAccentCount > 0) {
          score *= Math.pow(ACCENT_PENALTY_PER_CHAR, node.strippedAccentCount);
        }
        return score;
      }
      if (node.minWordLen < Infinity) {
        bestScore = Math.max(bestScore, len / node.minWordLen);
      }
    } else {
      bestScore = Math.max(bestScore, depth / len);
    }

    return bestScore;
  }

  get isEmpty(): boolean {
    return this.root.children.size === 0;
  }
}

// ---------------------------------------------------------------------------
// Build per-language tries at module load time
// ---------------------------------------------------------------------------

export const languageTries: Map<LanguageCode, LanguageTrie> = new Map();

for (const [lang, vocab] of Object.entries(VOCABULARY) as [LanguageCode, VocabEntry][]) {
  if (vocab.words.length === 0) continue;
  const trie = new LanguageTrie();
  for (const word of vocab.words) {
    trie.addWord(word);
  }
  languageTries.set(lang, trie);
}

// Also build phrase sets for quick phrase matching (kept separate — phrases are multi-word)
export const phraseSets: Map<LanguageCode, string[]> = new Map();
for (const [lang, vocab] of Object.entries(VOCABULARY) as [LanguageCode, VocabEntry][]) {
  if (vocab.phrases.length > 0) {
    phraseSets.set(lang, vocab.phrases.map((p) => p.toLowerCase()));
  }
}

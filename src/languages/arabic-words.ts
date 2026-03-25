/**
 * Arabic profanity words list
 * Contains common profanities, insults, and offensive terms. Includes variations.
 * ⚠️ Warning: This file contains explicit language in Arabic
 */
const _d: Record<string, [number, number]> = {
  // Core vulgar words
  "كس": [4, 4], // Pussy
  "كس أمك": [4, 4], // Your mother's pussy
  "كس اختك": [4, 4], // Your sister's pussy
  "زب": [4, 4], // Dick
  "زبي": [4, 4], // My dick
  "طيز": [3, 4], // Ass
  "شرموطة": [5, 4], // Whore (fem)
  "شرموط": [5, 4], // Whore (masc)
  "قحبة": [5, 4], // Whore / prostitute
  "عاهرة": [5, 4], // Prostitute (fem)
  "عاهرات": [5, 4], // Prostitutes (plural)
  "العاهرات": [5, 4], // The prostitutes
  "ابن العاهرة": [5, 4], // Son of a prostitute
  "ابن الشرموطة": [5, 5], // Son of a whore
  "ابن القحبة": [5, 5], // Son of a whore
  "ابن الكلب": [3, 4], // Son of a dog

  // Insults
  "أحمق": [1, 4], // Fool / idiot
  "حمقى": [1, 4], // Fools (plural)
  "الأحمق": [1, 4], // The fool
  "وغد": [1, 4], // Scoundrel
  "أيها الوغد": [1, 4], // You scoundrel
  "سافل": [1, 4], // Lowlife
  "أيها الحقير": [1, 4], // You despicable one
  "حثالة": [1, 4], // Scum
  "حمار": [1, 3], // Donkey / ass
  "كلب": [1, 4], // Dog
  "يا ابن الحرام": [3, 4], // You bastard
  "خول": [1, 4], // Faggot (slur)
  "ديوث": [1, 4], // Cuckold
  "عرص": [1, 4], // Pimp
  "منيك": [3, 5], // Fucker
  "متناك": [3, 5], // Fucked

  // Curses
  "اللعنة": [2, 4], // The curse / damn
  "اللعين": [2, 4], // The cursed one
  "أيها اللعين": [3, 4], // You cursed one
  "يلعن أبوك": [1, 4], // Curse your father
  "يلعن دينك": [3, 4], // Curse your religion
  "لعنة": [2, 4], // Curse

  // Sexual
  "نيك": [3, 5], // Fuck
  "سخيف": [1, 4], // Ridiculous / lame
  "مارس الجنس مع": [3, 4], // Have sex with
  "القذف": [3, 4], // Ejaculation
  "الجنس": [1, 2], // Sex
  "المواد الإباحية": [2, 3], // Pornography
  "زنا": [2, 3], // Adultery / fornication
  "لوطي": [3, 4], // Sodomite

  // Slurs
  "الشاذ": [5, 4], // The deviant / queer (slur)
  "الشواذ": [5, 4], // The deviants (plural slur)
  "مثلي الجنس": [3, 3], // Homosexual
  "زنجي": [5, 4], // Negro (slur)
  "الزنوج": [5, 4], // Negroes (slur)
  "نازي": [5, 5], // Nazi

  // Body parts / functions (vulgar)
  "قضيب": [4, 3], // Penis
  "مؤخرة": [4, 3], // Buttocks
  "المؤخرات": [4, 3], // Buttocks (plural)
  "خصية": [4, 3], // Testicle
  "بول": [1, 2], // Urine
  "تبول": [1, 2], // Urination
  "خرا": [4, 5], // Shit
  "القواد": [4, 3], // The pimp
  "سادي": [2, 3], // Sadistic

  // Egyptian / regional
  "أحا": [3, 4], // Exclamation of disgust (Egyptian)
  "الكلبة": [3, 4], // The bitch
  "الكلبات": [3, 4], // The bitches

  // Egyptian dialect
  "ابن المتناكة": [3, 5], // Son of the fucked one
  "يا خول": [3, 4], // You faggot
  "شرموطة أمك": [5, 4], // Your mother's a whore
  "كسمك": [4, 4], // Your mother's pussy (abbreviated)
  "عرص ابن العرص": [3, 4], // Pimp son of a pimp
  "ابن الوسخة": [3, 4], // Son of the dirty one
  "يا واطي": [3, 4], // You lowlife
  "يا وسخ": [3, 4], // You filthy
  "ابن الشرشوحة": [3, 4], // Son of a slut
  "متناكة": [3, 5], // Fucked (fem)

  // Levantine dialect (Syrian/Lebanese/Palestinian/Jordanian)
  "كس إمك": [4, 4], // Your mother's pussy
  "أيري فيك": [4, 4], // My dick in you
  "أيري": [4, 4], // My dick
  "روح إنتاك": [3, 5], // Go get fucked
  "منيوك": [3, 5], // Fucked (passive)
  "منيوكة": [3, 5], // Fucked (fem)
  "كلب ابن الكلب": [3, 4], // Dog son of a dog
  "يا حيوان": [3, 4], // You animal
  "يلعن أبوك وأبو يلي خلفك": [1, 4], // Curse your father and who bore you
  "زبالة": [3, 4], // Garbage (insult)
  "يا قذر": [3, 4], // You filthy

  // Gulf dialect (Saudi/UAE/Kuwait/Qatar)
  "ثور": [1, 4], // Bull (stupid)
  "حمار ابن حمار": [3, 4], // Donkey son of a donkey
  "يا تيس": [1, 4], // You goat (stupid)
  "قواد": [3, 4], // Pimp
  "معرص": [3, 4], // Pimped out
  "ديوس": [3, 4], // Cuckold (Gulf)
  "زق": [3, 5], // Shit (Gulf)

  // Maghreb dialect (Morocco/Tunisia/Algeria)
  "نعل بوك": [1, 4], // Curse your father
  "نيك موك": [3, 5], // Fuck your mother
  "زمل": [3, 4], // Faggot (Maghreb)
  "قحبة أمك": [5, 4], // Your mother's a whore
  "تفو عليك": [3, 4], // Spit on you
  "ولد الحرام": [3, 4], // Illegitimate child
  "يا زنديق": [3, 4], // You heretic

  // Iraqi dialect
  "ابن الگحبة": [5, 5], // Son of a whore (Iraqi)
  "كحبة": [5, 4], // Whore (Iraqi)
  "گواد": [3, 4], // Pimp (Iraqi)
  "ابن الگلب": [3, 4], // Son of a dog (Iraqi)
  "چلب": [3, 4], // Dog (Iraqi)
  "بيض": [4, 4], // Balls (Iraqi vulgar)
  "طرطور": [3, 4], // Worthless person (Iraqi)
  "مقعد": [3, 4], // Cripple (Iraqi insult)
  "چفخانة": [3, 4], // Brothel (Iraqi)
  "يبن الگحبة": [5, 5], // Son of a whore (Iraqi spoken)
  "عيني عينك": [3, 4], // Shameless (Iraqi)

  // Egyptian dialect (additional)
  "عيل وسخ": [3, 4], // Dirty kid
  "يا خرا": [3, 5], // You shit
  "بقرة": [1, 3], // Cow (insult)
  "يا حمارة": [3, 4], // You donkey (fem)
  "أمك": [3, 4], // Your mother (implied insult)
  "كسم": [3, 4], // Kos om (abbreviated)
  "طيزك": [3, 4], // Your ass
  "يا معفن": [3, 4], // You rotten
  "يا زبالة": [3, 4], // You trash
  "ابن الجزمة": [3, 4], // Son of a shoe
  "يا جلدة": [3, 4], // You (vulgar)
  "يا عبيط": [1, 4], // You idiot
  "يا أهبل": [1, 4], // You stupid
  "ابن أبوه": [1, 4], // Son of his father (euphemism for bastard)
  "يا ابن اللبوة": [3, 4], // Son of a lioness (vulgar context)
  "يا مجنون": [1, 4], // You crazy
  "بتاع نسوان": [3, 4], // Womanizer
  "يا كلبة": [3, 4], // You bitch
  "يا ملعون": [3, 4], // You cursed one
  "يا ابن الحيوانة": [3, 4], // Son of an animal
  "حلق بره": [1, 4], // Get lost
  "اتلم يا وسخ": [3, 4], // Get away you filthy

  // Levantine dialect (additional)
  "طز": [1, 4], // Screw it / damn
  "طز فيك": [3, 4], // Screw you
  "روح انيك أمك": [3, 5], // Go fuck your mother
  "يلعن ربك": [3, 4], // Curse your god
  "يلعن عرضك": [3, 4], // Curse your honor
  "يلعن روحك": [3, 4], // Curse your soul
  "كس إختك": [4, 4], // Your sister's pussy
  "أيري بتمك": [4, 4], // My dick in your mouth
  "أيري بأمك": [4, 4], // My dick in your mother
  "أيري بأختك": [4, 4], // My dick in your sister
  "كل خرا": [3, 5], // Eat shit
  "كل زق": [3, 5], // Eat shit (variant)
  "شو هالحمار": [3, 4], // What a donkey
  "روح انحاش": [1, 4], // Get lost
  "بدي فشخك": [3, 4], // I'll destroy you
  "فشخ": [3, 4], // Destroy (vulgar)
  "منيوكين": [3, 5], // Fucked (plural)
  "شلحة": [3, 4], // Stripper/slut

  // Gulf dialect (additional)
  "يا حقير": [3, 4], // You despicable
  "يا وضيع": [3, 4], // You lowly
  "ابن الجلب": [3, 4], // Son of a dog (Gulf variant)
  "يبن الجحش": [3, 4], // Son of a donkey
  "خنيث": [3, 4], // Effeminate (slur)
  "يا منيوك": [3, 5], // You fucked
  "يا سفالة": [3, 4], // You scum
  "مزين": [3, 4], // Pimp (Gulf slang)
  "طابور": [2, 3], // Queue (euphemism for gang activity)
  "يا فاجر": [3, 4], // You immoral
  "يا نذل": [3, 4], // You vile
  "عديم الشرف": [3, 4], // Without honor
  "كلب ابن كلب": [3, 4], // Dog son of dog (Gulf)
  "يا تافه": [3, 4], // You worthless
  "يا زفت": [3, 4], // You tar (insult)
  "يا قرد": [3, 4], // You monkey

  // Maghreb dialect (additional)
  "نعل دين ممك": [3, 4], // Curse your mother's religion
  "نعل بو ممك": [1, 4], // Curse your mother's father
  "نعل دين بوك": [1, 4], // Curse your father's religion
  "يا زعطوط": [1, 4], // You fool (Maghreb)
  "يا كلاب": [3, 4], // You dogs
  "يا حشايشي": [3, 4], // You hashish smoker
  "زعري": [3, 4], // Punk/thug (Maghreb)
  "نعل شيطانك": [3, 4], // Curse your devil
  "يا بهيمة": [3, 4], // You animal
  "متنيك": [3, 5], // Fucked (Maghreb)
  "قحبة بنت قحبة": [5, 4], // Whore daughter of whore

  // Standard Arabic insults (additional)
  "وقح": [1, 4], // Rude / shameless
  "سفيه": [1, 4], // Foolish / insolent
  "أبله": [1, 4], // Idiot
  "غبي": [1, 4], // Stupid
  "تافه": [1, 4], // Worthless
  "نذل": [1, 4], // Vile
  "خسيس": [1, 4], // Mean / despicable
  "لئيم": [1, 4], // Wretched
  "دنيء": [1, 4], // Lowly
  "وضيع": [1, 4], // Base / low
  "فاسق": [1, 4], // Immoral / sinner
  "فاجر": [1, 4], // Debauched
  "رذيل": [1, 4], // Vile / abject
  "منحط": [1, 4], // Degraded
  "ساقط": [1, 4], // Fallen / degenerate
  "خائن": [1, 4], // Traitor
  "جبان": [1, 4], // Coward
  "نجس": [1, 4], // Impure / filthy
  "قذر": [1, 4], // Dirty
  "مقرف": [1, 4], // Disgusting
  "حقير": [1, 4], // Contemptible

  // Sexual terms (additional)
  "لواط": [3, 3], // Sodomy
  "سحاق": [3, 3], // Lesbianism (vulgar)
  "جماع": [2, 3], // Intercourse
  "نكاح": [2, 2], // Sexual intercourse (vulgar context)
  "فاحشة": [2, 3], // Obscenity / fornication
  "زاني": [2, 3], // Adulterer (masc)
  "زانية": [2, 3], // Adulteress (fem)
  "داعرة": [5, 4], // Prostitute
  "داعر": [4, 4], // Debauched (masc)
  "بغي": [5, 4], // Prostitute (classical)
  "مومس": [5, 4], // Whore (formal)
  "فاسقة": [2, 3], // Immoral woman

  // Romanized Arabic profanity (used online)
  "kos omak": [4, 5], // Your mother's pussy
  // "kos": [4, 5], // Pussy — false positive: Greek island name (Kos)
  "ibn el sharmouta": [3, 4], // Son of a whore
  "ibn el sharmota": [5, 5], // Son of a whore (variant)
  "ya kalb": [3, 5], // You dog
  "ya hmar": [3, 5], // You donkey
  "ya ibn el sharmouta": [5, 5], // You son of a whore
  "ya ibn el kahba": [5, 5], // You son of a whore
  "ya khara": [3, 5], // You shit
  "telhas teezi": [3, 5], // Lick my ass
  "airi feek": [4, 5], // My dick in you
  "kol khara": [3, 5], // Eat shit
  "ya ahbal": [1, 5], // You idiot
  "ya wiskha": [3, 5], // You filthy
  "ya sharmout": [5, 5], // You male whore
  "ya sharmouta": [5, 5], // You whore
  "ya manyak": [3, 5], // You fucker
  "ya manyouk": [3, 5], // You fucked
  "ya khawal": [3, 5], // You faggot
  "ya zefer": [3, 5], // You disgusting
  "ya zift": [3, 5], // You tar
  "ibn el metnaka": [3, 5], // Son of the fucked one
  "ya ebn el kahba": [5, 5], // Son of a whore (variant)
  "neek": [3, 5], // Fuck
  // "nik": [3, 5], // Fuck (variant) — false positive: common English name (Nick/Nik)

  // Body parts vulgar (additional)
  "بظر": [4, 3], // Clitoris
  "ثدي": [4, 4], // Breast (vulgar context)
  "خصيتين": [4, 3], // Testicles
  "شرج": [4, 3], // Anus
  "فرج": [4, 3], // Vulva
  "عورة": [2, 2], // Private parts
  "حلمة": [4, 3], // Nipple
  "بزاز": [4, 4], // Breasts (vulgar)

  // Additional romanized Arabic profanity (online usage)
  "ayre": [4, 5], // my dick
  "ayri": [4, 5], // my dick (variant)
  "ayre feek": [4, 5], // my dick in you
  "ayre fi teezak": [4, 5], // my dick in your ass
  "teez": [3, 5], // ass
  "teezak": [3, 5], // your ass
  "teezi": [3, 5], // my ass
  "zeb": [4, 5], // dick
  "zebi": [4, 3], // my dick
  "zebb": [4, 5], // dick (variant)
  "sharmouta": [5, 5], // whore
  "sharmout": [5, 5], // male whore
  "sharmota": [5, 5], // whore (variant)
  "ya kalb ibn kalb": [3, 5], // you dog son of a dog
  "ya ibn sharmouta": [5, 5], // you son of a whore
  "ibn sharmouta": [5, 5], // son of a whore
  "kol khara wa moot": [5, 5], // eat shit and die
  "koss": [4, 5], // pussy (variant)
  "kos okhtak": [4, 5], // your sister's pussy
  "ya wati": [3, 5], // you lowlife
  "ya wisikh": [3, 5], // you filthy
  "ya manyouka": [3, 5], // you fucked (fem)
  "ya ibn il metnaka": [3, 5], // you son of the fucked
  "ya kharouf": [3, 5], // you sheep (insult)
  "ya dabbeh": [1, 5], // you idiot/animal
  "tfeh alayk": [3, 5], // spit on you
  "telhas": [3, 5], // lick (vulgar)
  "inaal": [3, 5], // curse
  "ina'al abouk": [1, 5], // curse your father
  "ina'al deenak": [3, 5], // curse your religion
  "ya zalameh": [3, 5], // you man (condescending)
  "ya gazma": [3, 5], // you shoe (insult)
  "ya ibn il gazma": [3, 5], // son of a shoe
  "ya hayawan": [3, 5], // you animal
  "ya kosomak": [4, 5], // your mother's pussy
  "nikomak": [3, 5], // fuck your mother (romanized)
  "ya gahba": [5, 5], // you whore (romanized)
  "ya zebbala": [3, 5], // you trash
  "ya ta3ban": [3, 5], // you snake (insult)
  "ya thawr": [1, 5], // you bull (stupid)
  "ya a3ma": [3, 5], // you blind
  "ya atrash": [3, 5], // you deaf (insult)
  "ya ma3tooh": [3, 5], // you mentally deficient
  "manyak": [3, 5], // fucker (romanized)
  "manyouk": [3, 5], // fucked (romanized)
  "kis": [4, 5], // pussy (romanized variant)
  "ya haiwan": [3, 5], // you animal (variant)
  "wlad l7ram": [3, 5], // children of sin (romanized Maghreb)
  "ta7an": [3, 5], // to grind (sexual, vulgar)
  "zabour": [4, 5], // penis (romanized Maghreb)

  // Iraqi dialect (additional)
  "ابن الچلب": [3, 4], // son of a dog (Iraqi)
  "معيدي": [1, 4], // stupid rural person (Iraqi insult)
  "بربوگ": [1, 4], // stupid (Iraqi)
  "خنزير": [1, 3], // pig (Iraqi insult)
  "ابن الخنزير": [3, 4], // son of a pig
  "حرامي": [3, 4], // thief (Iraqi)
  "ديّوث": [3, 4], // cuckold (Iraqi emphasis)
  "معرس": [3, 4], // pimped out (Iraqi)
  "ابن السرماية": [3, 4], // son of poverty (Iraqi insult)
  "تيس": [1, 4], // goat / stupid (Iraqi)
  "بعير": [3, 4], // camel (Iraqi insult)
  "فدوة": [3, 4], // disgusting (Iraqi slang)
  "زنخ": [3, 4], // rancid / disgusting (Iraqi)
  "يبن القحبة": [5, 5], // son of a whore (Iraqi spoken variant)
  "يابن الچلب": [3, 4], // son of a dog (Iraqi variant)
  "گلب": [3, 4], // dog (Iraqi variant spelling)
  "حيوان ابن حيوان": [3, 4], // animal son of animal (Iraqi)
  "مسخرة": [1, 3], // joke/mockery (Iraqi insult)
  "بغل": [3, 4], // mule (Iraqi insult)
  "ابن البغل": [3, 4], // son of a mule (Iraqi)
  "جاكوج": [3, 4], // asshole (Iraqi slang)
  "خرب بيتك": [3, 4], // may your house be destroyed (Iraqi)
  "يخرب بيتك": [3, 4], // may god destroy your house (Iraqi)
  "ابن الحرام": [3, 4], // bastard (Iraqi variant)
  "شلعوفة": [1, 4], // ugly woman (Iraqi)

  // Saudi/Khaleeji (additional)
  "يا ثور": [1, 4], // you bull (stupid)
  "يا خسيس": [3, 4], // you despicable
  "يا سافل": [3, 4], // you lowlife (Khaleeji)
  "يا ساقط": [3, 4], // you degenerate (Khaleeji)
  "يا نجس": [3, 4], // you impure (Khaleeji)
  "يا مخنث": [3, 4], // you effeminate (Khaleeji slur)
  "يا عديم": [3, 4], // you worthless (Khaleeji)
  "ابن الحمار": [3, 4], // son of a donkey (Khaleeji)
  "يا جحش": [3, 4], // you donkey (young)
  "ابن النعجة": [3, 4], // son of a sheep (insult)
  "طق عشر": [3, 5], // fuck off (Saudi slang)
  "لا أبوك": [1, 4], // no father (Saudi insult)
  "يا مطوع": [3, 4], // you religious zealot (Saudi derogatory)
  "يا بدوي": [3, 4], // you bedouin (derogatory context)
  "يا خرفان": [3, 4], // you sheep (plural, insult)
  "يلعن بوك": [1, 4], // curse your father (Gulf)
  "يلعن بو أمك": [1, 4], // curse your mother's father (Gulf)
  "أم الدحديرة": [3, 4], // mother of rolling (Gulf insult)
  "يا معرص": [3, 4], // you pimp (Gulf)
  "يا ديوث": [3, 4], // you cuckold (Gulf)
  "يا جلد": [3, 4], // you (vulgar, Gulf)
  "وجهك خرا": [3, 5], // your face is shit (Gulf)
  "يا حمار": [3, 4], // you donkey (Gulf)
  "يا بقر": [3, 4], // you cow (Gulf)
  "ملعون الوالدين": [3, 4], // cursed parents (Gulf)
  "يا سفيه": [1, 4], // you foolish (Gulf)
  "يا ابن الجزمة": [3, 4], // son of a shoe (Gulf variant)
  "خبل": [3, 4], // crazy (Gulf)
  "يا خبل": [3, 4], // you crazy (Gulf)
  "هبيلة": [1, 4], // stupid woman (Gulf)
  "يا هبيل": [1, 4], // you stupid (Gulf)

  // Yemeni profanity
  "يا مسخوط": [3, 4], // you cursed one (Yemeni)
  "يا عكبري": [3, 4], // you vile (Yemeni)
  "قرعة": [3, 4], // bald (Yemeni insult)
  "يا مقرع": [3, 4], // you bald one (Yemeni insult)
  "يا أخي شيطان": [3, 4], // you brother of devil (Yemeni)
  "يا ابن الفاجرة": [3, 4], // son of an immoral woman (Yemeni)
  "يا ملعون ابو ابوك": [1, 4], // cursed be your grandfather (Yemeni)
  "ابن القبيحة": [1, 4], // son of the ugly one (Yemeni)
  "عقبري": [3, 4], // vile/evil (Yemeni variant)
  "يا مشخوط": [3, 4], // you worthless (Yemeni)
  "يلعن تريبتك": [3, 4], // curse your upbringing (Yemeni)
  "يا خابث": [3, 4], // you malicious (Yemeni)
  "مخبل": [3, 4], // crazy (Yemeni)
  "يا مخبل": [3, 4], // you crazy (Yemeni)
  "شلّح": [3, 4], // strip (Yemeni vulgar)
  "أمك هندية": [5, 4], // your mother is Indian (Yemeni racist insult)

  // Sudanese profanity
  "يا كلب الزريبة": [3, 4], // you dog of the pen (Sudanese)
  "يا ود الحرام": [3, 4], // you child of sin (Sudanese)
  "يا ود الكلب": [3, 4], // you son of a dog (Sudanese)
  "يا خواض": [3, 4], // you faggot (Sudanese)
  "كُتر": [3, 4], // ass (Sudanese)
  "أبو زبي": [1, 4], // father of dick (Sudanese insult)
  "يا حشاش": [3, 4], // you pothead (Sudanese)
  "يا ابو كرشة": [3, 4], // you big-bellied (Sudanese)
  "يا جنجويدي": [3, 4], // you Janjaweed (Sudanese derogatory)
  "يا عبد": [5, 4], // you slave (Sudanese racist insult)
  "ابن الشيطانة": [3, 4], // son of a she-devil (Sudanese)
  "كمكم": [3, 4], // shut up (Sudanese vulgar)
  "يا نجاسة": [3, 4], // you filth (Sudanese)

  // Libyan profanity
  "يا بن الكلبة": [3, 4], // you son of a bitch (Libyan)
  "يا مزنوق": [3, 4], // you desperate (Libyan insult)
  "يا حاسي": [3, 4], // you drinker (Libyan insult)
  "نعل بو دينك": [1, 4], // curse your religion's father (Libyan)
  "يا زربوط": [3, 4], // you clumsy (Libyan)
  "يا خنفوس": [3, 4], // you beetle (Libyan insult)
  "كلب بن كلب": [3, 4], // dog son of dog (Libyan)
  "يا مرتد": [3, 4], // you apostate (Libyan)
  "أزعر": [3, 4], // thug (Libyan)
  "يا عاطل": [3, 4], // you unemployed bum (Libyan)
  "يا بهلول": [1, 4], // you clown/fool (Libyan)
  "يا معجب": [3, 4], // you arrogant (Libyan)
  "يا طبل": [1, 4], // you drum (Libyan insult for stupid)

  // Tunisian profanity (additional)
  "barcha": [1, 2], // a lot (used in vulgar context)
  "kahba": [3, 4], // whore (Tunisian)
  "zamel": [3, 4], // faggot (Tunisian)
  "miboun": [3, 4], // passive homosexual (Tunisian slur)
  "يا مبون": [3, 4], // you passive homosexual (Tunisian)
  "barra nik omek": [3, 5], // go fuck your mother (Tunisian)
  "barra": [3, 4], // go away / get lost (Tunisian)
  "naek": [3, 5], // fuck (Tunisian)
  "zebbi": [4, 4], // my dick (Tunisian)
  "يا بهيم": [3, 4], // you animal (Tunisian)
  "يا كبش": [3, 4], // you ram (Tunisian insult)
  "يا حلوف": [3, 4], // you pig (Tunisian)
  "يا كافر": [3, 4], // you infidel (Tunisian)
  "حمار حاشاك": [3, 4], // donkey, excuse me (Tunisian insult)
  "يا مسطول": [3, 4], // you stoned/high (Tunisian)
  "بلا كرامة": [3, 4], // without dignity (Tunisian insult)
  "يا فاسد": [3, 4], // you corrupt (Tunisian)
  "عطري": [3, 4], // promiscuous (Tunisian slang)

  // Moroccan Darija profanity
  "نعل": [3, 4], // curse (Moroccan)
  "تبون": [5, 5], // cunt (Moroccan)
  "تبون أمك": [5, 5], // your mother's cunt (Moroccan)
  "زامل": [3, 4], // faggot (Moroccan)
  "يا قواد": [3, 4], // you pimp (Moroccan)
  "نعل ديالك": [3, 4], // curse yours (Moroccan)
  "نيك أمك": [3, 5], // fuck your mother (Moroccan)
  "يا بوزبال": [1, 4], // you idiot (Moroccan)
  "يا معفون": [3, 4], // you rotten (Moroccan)
  "سير تقود": [3, 4], // go pimp (Moroccan insult)
  "ولد لقحبة": [5, 5], // son of a whore (Moroccan)
  "بنت لقحبة": [5, 4], // daughter of a whore (Moroccan)
  "يا مول الخنونة": [3, 4], // you effeminate (Moroccan insult)
  "يا عيّاش": [3, 4], // you degenerate (Moroccan)
  "يا شفار": [3, 4], // you thief (Moroccan)
  "سير فحالك": [3, 4], // get lost (Moroccan)
  "ما كاين والو": [3, 4], // there's nothing (dismissive, Moroccan)
  "يا كرياني": [3, 4], // you dirty/smelly (Moroccan)
  "يا مقطوع من شجرة": [3, 4], // you cut from a tree (no family, Moroccan)

  // Algerian profanity
  "نعل بوك يخطيك": [1, 4], // may your father's curse hit you (Algerian)
  "يا قواد ابن القواد": [3, 4], // you pimp son of a pimp (Algerian)
  "نيك موك يا حمار": [3, 5], // fuck your mother you donkey (Algerian)
  "يا حاشي": [3, 4], // you worthless (Algerian)
  "روح تنيك": [3, 5], // go get fucked (Algerian)
  "والو فيك": [3, 4], // nothing in you (Algerian insult)
  "يا مجرور": [3, 4], // you dragged (Algerian insult)
  "يا طحان": [3, 4], // you grinder (sexual insult, Algerian)
  "يا كبران": [1, 4], // you old fool (Algerian)
  "يا حقار": [3, 4], // you contemptible (Algerian)
  "سكّت يا هبيل": [1, 4], // shut up stupid (Algerian)
  "يا ماكلة الراس": [3, 4], // you headache (Algerian insult)
  "يا بخيل": [3, 4], // you miser (Algerian insult)

  // Compound phrases (additional)
  "يا ابن الستين كلب": [3, 5], // you son of sixty dogs
  "يلعن ابو ابوك": [1, 4], // curse your grandfather
  "يلعن سبع ارواح ابوك": [1, 4], // curse seven souls of your father
  "يلعن ابوك على ابو ابوك": [1, 4], // curse your father upon your grandfather
  "كس أمك على أمك": [4, 5], // your mother's pussy upon your mother
  "أيري بكل عيلتك": [4, 5], // my dick in your whole family
  "يلعن ابو هالجنسية": [1, 4], // curse the father of this nationality
  "يا ابن ستين شرموطة": [5, 5], // son of sixty whores
  "يا ابن ألف كلب": [3, 5], // son of a thousand dogs
  "يلعن عرض أمك": [3, 5], // curse your mother's honor
  "يلعن أبو أمك": [1, 4], // curse your mother's father
  "كس أخت إلي خلفك": [4, 5], // pussy of the sister of who bore you
  "أيري بأبوك وأبو أبوك": [1, 4], // my dick in your father and grandfather
  "يلعن الساعة اللي اتولدت فيها": [3, 5], // curse the hour you were born
  "يا ابن المية كلب": [3, 5], // son of a hundred dogs
  "كسمك يابن الوسخة": [4, 5], // your mother's pussy you son of filthy
  "أنيكك أنت وأمك": [3, 5], // I'll fuck you and your mother
  "على كس أمك": [4, 5], // upon your mother's pussy

  // Additional sexual terms in Arabic
  "مص": [4, 4], // suck (sexual)
  "مصمص": [4, 4], // suck (repeated, sexual)
  "لحس": [4, 4], // lick (sexual)
  "ناكني": [4, 5], // fuck me
  "انيكك": [4, 5], // I'll fuck you
  "ناك": [4, 5], // fucked
  "ينيك": [4, 5], // fucks
  "نياكة": [4, 5], // fucking (noun)
  "نيّاك": [4, 5], // fucker (one who fucks a lot)
  "شهوة": [2, 3], // lust
  "شبق": [2, 4], // horny
  "عاهر": [5, 4], // whore (masc)
  "مني": [4, 4], // semen
  "اغتصاب": [5, 4], // rape
  "تحرش": [3, 3], // sexual harassment
  "متحرش": [3, 3], // harasser
  "قواد أمك": [4, 4], // your mother's pimp

  // Additional body part vulgarities
  "زبر": [4, 3], // dick (variant)
  "أير": [4, 3], // dick
  "كعب": [4, 4], // penis (slang)
  "منقة": [4, 4], // vagina (vulgar slang)
  "كساس": [4, 4], // pussies (plural vulgar)
  "طياز": [4, 4], // asses (plural vulgar)
  "بزازك": [4, 4], // your breasts (vulgar)
  "بزازها": [4, 4], // her breasts (vulgar)
  "طيزها": [4, 4], // her ass (vulgar)
  "كسها": [4, 4], // her pussy (vulgar)
  "زبه": [4, 4], // his dick (vulgar)
  "زبره": [4, 4], // his dick (vulgar variant)

  // Homophobic terms across dialects (additional)
  "لوطي ابن لوطي": [5, 4], // sodomite son of sodomite
  "يا لوطي": [5, 4], // you sodomite
  "مخنث": [5, 4], // effeminate / transgender (slur)
  "شاذ جنسيا": [5, 4], // sexually deviant
  "يا شاذ": [5, 4], // you deviant
  "ممحون": [3, 4], // horny / desperate (insult)
  "يا ممحون": [3, 4], // you horny/desperate
  "بنوتي": [3, 4], // girly boy (insult)
  "طنط": [3, 4], // effeminate (Egyptian slur)
  "يا طنط": [3, 4], // you effeminate (Egyptian)
  "خنيثة": [3, 4], // effeminate woman / slur
  "عالمة": [2, 3], // belly dancer (used as insult)
  "زوج مرات": [2, 4], // husband of wives (insult for cuckold)

  // Religious insults
  "يلعن دين أمك": [2, 3], // curse your mother's religion
  "يلعن الدين": [2, 3], // curse the religion
  "يلعن دين ابوك": [1, 4], // curse your father's religion
  "كافر ابن كافر": [2, 3], // infidel son of infidel
  "يا ملحد": [2, 3], // you atheist (used as insult)
  "يلعن دين ايلي خلفك": [2, 3], // curse the religion of who bore you
  "ابن الحرام ابن الحرام": [3, 4], // bastard son of bastard
  "يا مرتد ابن مرتد": [2, 3], // you apostate son of apostate
  "يا كفّار": [2, 3], // you infidels (plural insult)
  "يلعن دين هالدنيا": [2, 3], // curse the religion of this world
  "يلعن الشيطان ابوك": [1, 4], // may the devil curse your father
  "يا ابن ابليس": [2, 3], // son of Satan
  "يا عدو الله": [2, 3], // enemy of God

  // Internet abbreviations used in Arabic chat
  "كسمك ياخول": [4, 3], // your mom's pussy you faggot
  "يبن الشرموطة": [5, 5], // son of a whore (spoken/typed fast)
  "يبن المتناكة": [3, 5], // son of the fucked one (spoken/typed fast)
  "يبن الوسخة": [2, 3], // son of the dirty one (spoken/typed fast)
  "كسختك": [4, 3], // your sister's pussy (abbreviated)
  "يبن الكلب": [2, 3], // son of a dog (spoken/typed fast)
  "يبن الحرام": [3, 4], // bastard (spoken/typed fast)
  "يبن الزنا": [2, 3], // son of adultery (spoken/typed fast)
  "امك شرموطة": [5, 4], // your mother is a whore (direct)
  "اختك شرموطة": [5, 4], // your sister is a whore (direct)
  "ابوك قواد": [1, 4], // your father is a pimp (direct)
  "كس اختك ع امك": [4, 3], // your sister's pussy on your mother
  "يلعن كسمك": [4, 3], // curse your mother's pussy

  // ========================================
  // === Franco-Arabic / Arabizi (Romanized with number substitutions) ===
  // ========================================
  "3ars": [3, 5], // pimp (عرص)
  "7mar": [3, 5], // donkey (حمار)
  "7ayawan": [3, 5], // animal (حيوان)
  "7mara": [3, 5], // female donkey (حمارة)
  "5awal": [3, 5], // faggot (خول)
  "5ara": [3, 5], // shit (خرا)
  "5aneeth": [3, 5], // effeminate (خنيث)
  "5anzeer": [3, 5], // pig (خنزير)
  "2a7a": [3, 5], // exclamation of disgust (أحا)
  "kos 2omak": [4, 5], // your mother's pussy
  "2eri": [4, 5], // my dick (أيري)
  "2eri feek": [4, 5], // my dick in you
  "2eri fi teezak": [4, 5], // my dick in your ass
  "te7an": [3, 5], // sexual grinding (طحن)
  "3abd": [5, 5], // slave (عبد - racist)
  "za7af": [3, 5], // creep (زحف)
  "zan2a": [3, 5], // stinky (زنخة)
  "nayik": [3, 5], // fucker (نايك)
  "nayika": [3, 5], // fucker (fem)
  "sha5 5ara": [3, 5], // shit person
  "ya 5awal": [3, 5], // you faggot
  "ya 7ayawan": [3, 5], // you animal
  "ya 7mar": [3, 5], // you donkey
  "ya 5anzeer": [3, 5], // you pig
  "ya 3ars": [3, 5], // you pimp
  "5olo2": [3, 5], // get lost (خلوق inverted as insult)
  "kos o5tak": [4, 5], // your sister's pussy
  "ko55": [4, 5], // pussy variant
  "3arsa": [3, 5], // female pimp (عرصة)
  "m3arras": [3, 5], // pimped out (معرص)
  "manyoo2": [3, 5], // fucked (منيوك)
  "manyoo2a": [3, 5], // fucked (fem)
  "5ayen": [3, 5], // traitor (خاين)
  "met7arresh": [3, 5], // harasser (متحرش)
  "e7'a": [3, 5], // exclamation of disgust variant
  "ya 2a5oo": [3, 5], // you brother (condescending)
  "ya ibn el 5ara": [3, 5], // son of shit
  "ya ibn el 7mar": [3, 5], // son of a donkey
  "ya ibn el 5anzeer": [3, 5], // son of a pig
  "ibn 3ahira": [5, 5], // son of a whore
  "ya zo2": [3, 5], // you shit (Gulf)
  "ya fa7esh": [3, 5], // you obscene
  "ya za3ran": [3, 5], // you thug
  "ya sefla": [3, 5], // you scum
  "ya wa6i": [3, 5], // you lowlife
  "ya na3al": [3, 5], // you curse
  "3an kos omak": [4, 5], // upon your mother's pussy
  "ya 5anees": [3, 5], // you effeminate (variant)

  // ========================================
  // === More Lebanese/Syrian Dialect ===
  // ========================================
  "انتاك": [3, 5], // get fucked (Lebanese)
  "كس أختك يا ابن الشرموطة": [5, 5], // your sister's pussy you son of a whore
  "يا ابن الملعون": [3, 4], // son of the cursed
  "يا قليل الأدب": [3, 4], // you ill-mannered
  "فشخة": [3, 4], // destruction (vulgar)
  "ابن الحرام المتناك": [3, 4], // bastard who got fucked
  "ابن الكلبة المتناكة": [3, 5], // son of the fucked bitch
  "بدي أنيك عرضك": [3, 5], // I'll fuck your honor
  "يا كلب الشارع": [3, 4], // you street dog
  "يا حمار الشارع": [3, 4], // you street donkey
  "يا وقح": [3, 4], // you rude
  "يا قليل الحيا": [3, 4], // you shameless
  "يا بلا كرامة": [3, 4], // you without dignity
  "يا ابن الزنا المتناك": [3, 5], // son of adultery who got fucked
  "روح كل خرا وموت": [5, 5], // go eat shit and die
  "روح فشخ حالك": [3, 4], // go destroy yourself
  "يا أجرب": [3, 4], // you mangy

  // ========================================
  // === More Moroccan Darija ===
  // ========================================
  "نيك بوك": [1, 4], // fuck your father (Moroccan)
  "زبي ف ممك": [4, 4], // my dick in your mother (Moroccan)
  "كول تبون ممك": [5, 5], // eat your mother's cunt (Moroccan)
  "ولد التبون": [5, 5], // son of a cunt (Moroccan)
  "ولد الحشيش": [3, 4], // son of hashish (Moroccan)
  "يا حمار ولد الحمار": [3, 4], // you donkey son of donkey (Moroccan)
  "زبي فيك": [4, 4], // my dick in you (Moroccan)
  "تبون اختك": [5, 5], // your sister's cunt (Moroccan)
  "يا حلقوم": [3, 4], // you throat (Moroccan insult)
  "يا كلب ولد الكلب": [3, 4], // you dog son of dog (Moroccan)
  "يا زفت ولد الزفت": [3, 4], // you tar son of tar (Moroccan)
  "سير تقود يا ولد القحبة": [5, 5], // go pimp you son of a whore (Moroccan)
  "يا بغل ولد البغل": [3, 4], // you mule son of a mule (Moroccan)

  // ========================================
  // === More Algerian Dialect ===
  // ========================================
  "نعل كوك": [1, 4], // curse your father (Algerian variant)
  "يا حمار يتنيك": [3, 5], // you donkey get fucked (Algerian)
  "روح يبان بوك": [1, 4], // go show your father (Algerian insult)
  "يا ولد الزنية": [3, 4], // you son of adultery (Algerian)
  "نعل ربك": [3, 4], // curse your lord (Algerian)
  "يا قرعة": [3, 4], // you bald (Algerian insult)
  "يا مهبول": [3, 4], // you crazy (Algerian)
  "يا قواد يبن القواد": [3, 4], // you pimp son of pimp (Algerian variant)
  "يا شيطان": [3, 4], // you devil (Algerian)
  "يا فراخ": [3, 4], // you chicken (Algerian insult)
  "يا حقار يبن الحقار": [3, 4], // you contemptible son of contemptible (Algerian)
  "روح تنيك يا حمار": [3, 5], // go get fucked donkey (Algerian)
  "نعل بو ممك يا قواد": [1, 4], // curse your mother's father you pimp (Algerian)

  // ========================================
  // === More Tunisian Dialect ===
  // ========================================
  "يا كلب ابن الكلب": [3, 4], // you dog son of a dog (Tunisian)
  "يا عفن": [3, 4], // you rotten (Tunisian)
  "يا قحبة بنت القحبة": [5, 4], // you whore daughter of whore (Tunisian)
  "بارّا تنيّك": [3, 5], // go get fucked (Tunisian variant)
  "نعل بو زبك": [1, 4], // curse your dick's father (Tunisian)
  "نعل دين بو ممك": [1, 4], // curse your mother's father's religion (Tunisian)
  "يا خنزير ابن الخنزير": [3, 4], // you pig son of pig (Tunisian)
  "يا متنيّك": [3, 5], // you fucked one (Tunisian)
  "يا حقير ابن الحقير": [3, 4], // you despicable son of despicable (Tunisian)
  "يا مسطول ابن المسطول": [3, 4], // you stoned son of stoned (Tunisian)
  "كاهبة بنت الكاهبة": [5, 4], // whore daughter of a whore (Tunisian variant)
  "بارّا روح": [3, 4], // go away (Tunisian dismissive)
  "يا ابن الباطل": [3, 4], // you son of falsehood (Tunisian)

  // ========================================
  // === More Egyptian Dialect ===
  // ========================================
  "يا ابن الوسخة المتناكة": [3, 5], // son of the dirty fucked one (Egyptian)
  "يا ابن الشرشوحة المتناكة": [3, 5], // son of the fucked slut (Egyptian)
  "كسمك يا خول": [4, 4], // your mother's pussy you faggot (Egyptian)
  "يا خول ابن الخول": [3, 4], // you faggot son of faggot (Egyptian)
  "يا عرص ابن العرص المتناك": [3, 5], // you pimp son of the fucked pimp (Egyptian)
  "يا كسمك": [4, 4], // your mother's pussy (Egyptian vocative)
  "يا متناك ابن المتناكة": [3, 5], // you fucker son of the fucked (Egyptian)
  "يا جزمة قديمة": [3, 4], // you old shoe (Egyptian insult)
  "عارف أمك كويس": [3, 4], // I know your mother well (Egyptian innuendo)
  "يا ابن ستين في ستين": [3, 4], // son of sixty times sixty (Egyptian)
  "يا ابن المية شرموطة": [5, 4], // son of a hundred whores (Egyptian)
  "يا ابن الشريفة": [3, 4], // son of the noble one (sarcastic, Egyptian)
  "يا ابن العيلة الوسخة": [3, 4], // son of the dirty family (Egyptian)
  "يا أبو وش بايخ": [3, 4], // you with the stale face (Egyptian)
  "يا ولاد الوسخة": [3, 4], // you children of the dirty one (Egyptian)
  "يا ولاد الحرام الوسخين": [3, 4], // you dirty bastards (Egyptian)

  // ========================================
  // === More Gulf/Khaleeji Dialect ===
  // ========================================
  "يا خنيث ابن الخنيث": [3, 4], // you effeminate son of effeminate (Gulf)
  "يا مزين ابن المزين": [3, 4], // you pimp son of pimp (Gulf)
  "يا ابن الثور": [3, 4], // son of a bull (Gulf)
  "يا بغل ابن البغل": [3, 4], // you mule son of mule (Gulf)
  "يا ابن التيس": [3, 4], // son of a goat (Gulf)
  "يا ابن الخنزيرة": [3, 4], // son of a sow (Gulf)
  "وجهك زق": [3, 5], // your face is shit (Gulf)
  "يا صرصور": [2, 4], // you cockroach (Gulf)
  "يا حشرة": [1, 3], // you insect (Gulf)
  "يا نملة": [1, 3], // you ant (Gulf insult)
  "لا شرف لك": [3, 4], // you have no honor (Gulf)
  "يا عديم الأصل": [3, 4], // you without origin (Gulf)
  "يا قليل الأصل": [3, 4], // you of little origin (Gulf)
  "يا مغفل": [1, 4], // you gullible fool (Gulf)
  "يا أبله ابن الأبله": [1, 4], // you idiot son of idiot (Gulf)
  "أمك في الشارع": [3, 4], // your mother in the street (Gulf)
  "أبوك ديوث": [1, 4], // your father is a cuckold (Gulf)

  // ========================================
  // === More Iraqi Dialect ===
  // ========================================
  "يا ابن الگحبة المعرصة": [5, 4], // son of the pimped whore (Iraqi)
  "يا چلب ابن الچلب": [3, 4], // you dog son of dog (Iraqi)
  "يا بربوگ ابن البربوگ": [1, 4], // you fool son of fool (Iraqi)
  "گحبة أمك ع أمك": [5, 4], // your mother's whore upon your mother (Iraqi)
  "يخرب شرفك": [3, 4], // may your honor be destroyed (Iraqi)
  "ابن السنين گلب": [3, 4], // son of years of dogs (Iraqi)
  "يا ابن الطرطور": [3, 4], // son of the worthless (Iraqi)
  "يا بعير ابن البعير": [3, 4], // you camel son of camel (Iraqi)
  "يا معيدي ابن المعيدي": [1, 4], // you fool son of fool (Iraqi)
  "يا ابن الحرامية": [3, 4], // son of thieves (Iraqi)
  "كسمك يا ابن الگحبة": [5, 5], // your mother's pussy son of whore (Iraqi)
  "يلعن بو جدك": [1, 4], // curse your grandfather's father (Iraqi)
  "يا ابن السلبوطة": [3, 4], // son of the slipper (Iraqi insult)

  // ========================================
  // === Omani Dialect ===
  // ========================================
  "يا خايس": [3, 4], // you rotten (Omani)
  "يا معفن ابن المعفن": [3, 4], // you rotten son of rotten (Omani)
  "يا بوعلم": [1, 4], // you fool (Omani)
  "يا حيوان ابن الحيوان": [3, 4], // you animal son of animal (Omani)
  "أمك زانية": [3, 4], // your mother is an adulteress (Omani)
  "يا ابن الزانية": [3, 4], // son of an adulteress (Omani)
  "يلعن دين ابو ابوك": [1, 4], // curse your grandfather's religion (Omani)
  "يا سخيف ابن السخيف": [3, 4], // you pathetic son of pathetic (Omani)

  // ========================================
  // === Bahraini Dialect ===
  // ========================================
  "يا بقر ابن البقر": [3, 4], // you cow son of cow (Bahraini)
  "يا ثور ابن الثور": [3, 4], // you bull son of bull (Bahraini)
  "يا تيس ابن التيس": [3, 4], // you goat son of goat (Bahraini)
  "بو وجه خراب": [3, 4], // with a ruined face (Bahraini)
  "يا خس": [1, 4], // you lettuce (Bahraini insult for dumb)
  "يا ماعز": [3, 4], // you goat (Bahraini)
  "يا عنز": [3, 4], // you nanny goat (Bahraini insult)

  // ========================================
  // === Kuwaiti Dialect ===
  // ========================================
  "يا خوش زبالة": [3, 4], // you are great garbage (Kuwaiti sarcasm)
  "يا ابن الخادمة": [3, 4], // son of the maid (Kuwaiti classist insult)
  "يا حافي": [3, 4], // you barefoot (Kuwaiti classist)
  "يا فقير ابن الفقير": [3, 4], // you poor son of poor (Kuwaiti)
  "ملعون أبوك وأبو أبوك": [1, 4], // cursed your father and grandfather (Kuwaiti)
  "يا ابن الزفت الأسود": [3, 4], // son of black tar (Kuwaiti)
  "يا هبيل ابن الهبيل": [1, 4], // you stupid son of stupid (Kuwaiti)
  "يا خبل ابن الخبل": [3, 4], // you crazy son of crazy (Kuwaiti)

  // ========================================
  // === Mauritanian Dialect ===
  // ========================================
  "يا كافر ابن الكافر": [3, 4], // you infidel son of infidel (Mauritanian)
  "يا زنجي ابن الزنجي": [5, 4], // you negro son of negro (Mauritanian racist)
  "يا عبد ابن العبد": [5, 4], // you slave son of slave (Mauritanian racist)
  "يا ولد الحرام المطرود": [3, 4], // you expelled bastard (Mauritanian)

  // ========================================
  // === More Romanized Compound Phrases ===
  // ========================================
  "kos om el kol": [4, 5], // everyone's mother's pussy
  "telhas kos omak": [4, 5], // lick your mother's pussy
  "telhas teez omak": [3, 5], // lick your mother's ass
  "ya ibn el 7aram": [3, 5], // you bastard
  "ya ibn el gahba": [5, 5], // you son of a whore
  "ya ibn el mara el wisikha": [3, 5], // son of the dirty woman
  "kol 5ara w moot": [5, 5], // eat shit and die
  "ya wlad el 7aram": [3, 5], // you bastards
  "ayre b kos omak": [4, 5], // my dick in your mother's pussy
  "ayre b teezak": [4, 5], // my dick in your ass
  "a7a ya 5awal": [3, 5], // disgust you faggot
  "ya ibn el metnaka el wisikha": [3, 5], // son of the dirty fucked one
  "neek omak ya ibn el sharmouta": [5, 5], // fuck your mother son of a whore
  "kos o5tak ya manyouk": [4, 5], // your sister's pussy you fucked
  "rooh en2ebir": [3, 5], // go get buried
  "rooh inteek": [3, 5], // go get fucked
  "ya zalameh ibn el zalameh": [3, 5], // you man son of man (condescending)
  "ya 7ayawan ibn el 7ayawan": [3, 5], // you animal son of animal
  "kol zeg": [3, 5], // eat shit (variant)
  "ya ibn el shar6an": [3, 5], // son of the devil
  "ya khanzeera": [3, 5], // you sow
  "ya 7mara bint el 7mara": [3, 5], // you donkey daughter of donkey
  "ibn el 3ahira el metnaika": [5, 5], // son of the fucked whore
  "ya zebi": [4, 5], // you dick (Tunisian romanized)
  "ya t7in": [3, 5], // you flour (sexual insult)
  "ya m7ayen": [3, 5], // you cheater
  "ya zift ya zibele": [3, 5], // you tar you trash
  "barra nik": [3, 5], // go fuck (romanized Maghreb)
  "barra in3al bouk": [1, 5], // go curse your father (romanized Maghreb)
  "zaml ibn el zaml": [3, 5], // faggot son of faggot (romanized Maghreb)
  "t7an fi omak": [3, 5], // grind in your mother (sexual, romanized)
  "nikomak ya 7mar": [3, 5], // fuck your mother you donkey (romanized)

  // ========================================
  // === More Additional Sexual Terms ===
  // ========================================
  "نيكني يا زبي": [4, 5], // fuck me my dick (vulgar phrase)
  "مصي زبي": [4, 4], // suck my dick (fem command)
  "مصي أيري": [4, 4], // suck my dick (variant)
  "نيك طيزك": [4, 5], // fuck your ass
  "نيك كسك": [4, 5], // fuck your pussy
  "حط زبي بكسك": [4, 4], // put my dick in your pussy
  "حط أيري بطيزك": [4, 4], // put my dick in your ass
  "بدي أنيك طيزك": [4, 5], // I want to fuck your ass
  "بدي أنيك كسك": [4, 5], // I want to fuck your pussy
  "شلحي هدومك": [4, 4], // take off your clothes (fem)
  "يا بنت الشرموطة": [5, 4], // daughter of a whore
  "بنت القحبة": [5, 4], // daughter of a whore
  "بنت الكلب": [4, 4], // daughter of a dog
  "بنت المتناكة": [4, 5], // daughter of the fucked one
  "بنت الحرام": [4, 4], // illegitimate daughter
  "يا حبلة": [1, 3], // you pregnant (insult)
  "يا فاتحة": [4, 4], // you open (sexual insult)
  "يا واسعة": [4, 4], // you loose (sexual insult)
  "يا نجسة": [4, 4], // you filthy (fem)
  "يا وسخة": [4, 4], // you dirty (fem)
  "يا شريرة": [1, 4], // you evil (fem)
  "يا لبوة": [2, 3], // you lioness (sexual context)

  // ========================================
  // === EXPANSION: Egyptian dialect - extended ===
  // ========================================
  "ابن الشرموطة الوسخة": [5, 4], // Son of the dirty whore (Egyptian)
  "يا ابن اللبوة الوسخة": [3, 4], // Son of the dirty lioness (Egyptian)
  "كسم ابوك": [1, 4], // Your father's pussy (Egyptian)
  "كسم اللي خلفك": [4, 4], // Pussy of who bore you (Egyptian)
  "كسم اللي جابك": [4, 4], // Pussy of who brought you (Egyptian)
  "يا ابن الوسخين": [3, 4], // Son of dirty ones (Egyptian)
  "يا ابن المره الوسخة": [3, 4], // Son of the dirty woman (Egyptian)
  "يا متناك يا وسخ": [3, 5], // You fucker you dirty (Egyptian)
  "يا خنزيرة": [3, 4], // You sow (Egyptian fem)
  "نيك أمك يا خول": [3, 5], // Fuck your mother you faggot (Egyptian)
  "يا ابن المره المتناكة": [3, 5], // Son of the fucked woman (Egyptian)
  "يا واد يا وسخ": [3, 4], // You dirty boy (Egyptian)
  "يا واد يا ابن الوسخة": [3, 4], // You boy son of the dirty one (Egyptian)
  "يا بنت الوسخة": [3, 4], // You daughter of the dirty one (Egyptian)
  "يا بنت المتناكة": [3, 5], // You daughter of the fucked one (Egyptian)
  "كسمك يا بنت الشرموطة": [5, 4], // Your mom's pussy daughter of a whore (Egyptian)
  "يا متناكة يا وسخة": [3, 5], // You fucked one you dirty (Egyptian fem)
  "يا شرموطة يا وسخة": [5, 4], // You whore you dirty (Egyptian)
  "اقطع من هنا": [3, 4], // Get out of here (Egyptian)
  "يا ابن الست": [2, 3], // Son of the lady (Egyptian euphemism)
  "نيك امك يا ابن الشرموطة": [5, 5], // Fuck your mother son of a whore (Egyptian)
  "يا ابن الأفعى": [3, 4], // Son of the viper (Egyptian)
  "يا ملعون يا ابن الملعون": [3, 4], // You cursed one son of the cursed (Egyptian)
  "يا حمار يا ابن الحمار": [3, 4], // You donkey son of a donkey (Egyptian)
  "يا غبي يا ابن الغبي": [1, 4], // You stupid son of stupid (Egyptian)
  "يا عبيط يا ابن العبيطة": [1, 4], // You idiot son of the idiot (Egyptian)
  "يا أهبل يا ابن الهبلة": [1, 4], // You stupid son of the stupid (Egyptian)
  "نيلة في ابوك": [1, 4], // Indigo in your father (Egyptian curse)
  "نيلة فيك": [3, 4], // Indigo in you (Egyptian curse)
  "اللهم اكفينا شرك": [3, 4], // God protect us from your evil (Egyptian passive aggressive)
  "يا ابن دين الكلب": [3, 4], // Son of the dog's religion (Egyptian)
  "يا بتاع كله": [3, 4], // You of everything (Egyptian, implying promiscuity)
  "يا رخيصة": [3, 4], // You cheap one (Egyptian fem)
  "يا رخيص": [3, 4], // You cheap one (Egyptian masc)
  "يا قليلة الأدب": [3, 4], // You ill-mannered (Egyptian fem)
  "يا قليل الأدب يا ابن المتناكة": [3, 5], // You ill-mannered son of the fucked (Egyptian)
  "يا ابن الجزمة القديمة": [3, 4], // Son of the old shoe (Egyptian)
  "يا ابن الشحاتة": [3, 4], // Son of the beggar (Egyptian fem)
  "يا ابن الشحات": [3, 4], // Son of the beggar (Egyptian masc)
  "يا ابن النيل": [3, 4], // Son of the Nile (Egyptian sarcastic)
  "يا حيوانة": [3, 4], // You animal (Egyptian fem)
  "يلعن ابو دينك": [1, 4], // Curse your religion's father (Egyptian)
  "يلعن كسم دينك": [4, 4], // Curse your religion's pussy (Egyptian)
  "كسمين أمك": [4, 4], // Double pussy of your mother (Egyptian)
  "يا ابن التين": [2, 3], // Son of figs (Egyptian euphemism for insult)
  "أختك شرموطة يا ابن الكلب": [5, 4], // Your sister is a whore son of a dog (Egyptian)
  "كسمك على كسمك": [4, 4], // Your mom's pussy upon your mom's pussy (Egyptian)
  "يا ابن الشلحة": [3, 4], // Son of the stripper (Egyptian)

  // ========================================
  // === EXPANSION: Levantine dialect (Syrian) - extended ===
  // ========================================
  "روح لعند أمك": [3, 4], // Go to your mother (Syrian dismissive)
  "يا ابن القحبة المنيوكة": [5, 5], // Son of the fucked whore (Syrian)
  "أيري بكل خلقتك": [4, 4], // My dick in your entire creation (Syrian)
  "أيري بعرضك": [4, 4], // My dick in your honor (Syrian)
  "أيري بدينك": [4, 4], // My dick in your religion (Syrian)
  "أيري بربك": [4, 4], // My dick in your lord (Syrian)
  "أيري بأبوك وأمك": [1, 4], // My dick in your father and mother (Syrian)
  "كس أمك وأم اللي خلفك": [4, 4], // Your mother's pussy and who bore you's mother (Syrian)
  "يلعن عرض أمك وأبوك": [3, 4], // Curse your parents' honor (Syrian)
  "يا مقطع من شجرة": [3, 4], // You cut from a tree (Syrian, no family)
  "يا قليل الشرف": [3, 4], // You of little honor (Syrian)
  "يا عديم الشرف والكرامة": [3, 4], // You without honor and dignity (Syrian)
  "يا ابن الشرشوحة المنيوكة": [3, 5], // Son of the fucked slut (Syrian)
  "يلعن روحك وروح اللي جابك": [3, 4], // Curse your soul and who brought you (Syrian)
  "يا حيوان يا ابن الحيوان": [3, 4], // You animal son of animal (Syrian)
  "روح انحاش من وجي": [3, 4], // Get out of my face (Syrian)
  "يا كلب يا ابن الكلب": [3, 4], // You dog son of a dog (Syrian)
  "يا مشلوح": [3, 4], // You outcast (Syrian)
  "يا مرمي": [3, 4], // You thrown away (Syrian)
  "يا قرد يا ابن القرد": [3, 4], // You monkey son of monkey (Syrian)
  "بدي فشخ وجهك": [3, 4], // I'll smash your face (Syrian)
  "بدي كسر خشمك": [3, 4], // I'll break your nose (Syrian)
  "بدي فرمك": [3, 4], // I'll grind you (Syrian)
  "بدي أنيك عيلتك": [3, 5], // I'll fuck your family (Syrian)
  "يلعن اللي خلفك": [3, 4], // Curse who bore you (Syrian)
  "يلعن أبو خلقتك": [1, 4], // Curse the father of your creation (Syrian)
  "كل خرا وموت": [5, 5], // Eat shit and die (Syrian)
  "يا ابن الستين شرموطة": [5, 4], // Son of sixty whores (Syrian)
  "يا ابن الألف كلب": [3, 4], // Son of a thousand dogs (Syrian)
  "يا زبالة الشوارع": [3, 4], // You garbage of the streets (Syrian)
  "يا نفاية": [3, 4], // You waste (Syrian)
  "يا قمامة": [3, 4], // You garbage (Syrian)
  "وجهك زبالة": [3, 4], // Your face is garbage (Syrian)
  "يا منيك أمك": [3, 5], // You fucker of your mother (Syrian)

  // ========================================
  // === EXPANSION: Levantine dialect (Lebanese) - extended ===
  // ========================================
  "كس إمك يا ابن القحبة": [5, 5], // Your mother's pussy son of a whore (Lebanese)
  "أيري فيك وبإمك": [4, 4], // My dick in you and your mother (Lebanese)
  "روح ولك": [3, 4], // Go already (Lebanese dismissive)
  "شو هالحمار هيدا": [3, 4], // What a donkey this is (Lebanese)
  "طز فيك وبأهلك": [3, 4], // Screw you and your family (Lebanese)
  "يلعن ابو ابوك على أبو جدك": [1, 4], // Curse your grandfather's grandfather (Lebanese)
  "يا ابن اللقيطة": [3, 4], // Son of the foundling/bastard (Lebanese)
  "يا لقيط": [3, 4], // You foundling / bastard (Lebanese)
  "يا لقيطة": [3, 4], // You foundling / bastard (Lebanese fem)
  "أيري بعين إمك": [4, 4], // My dick in your mother's eye (Lebanese)
  "أيري بخشم ابوك": [1, 4], // My dick in your father's nose (Lebanese)
  "أيري بسبع ارواح ابوك": [1, 4], // My dick in seven souls of your father (Lebanese)
  "يا بلا تربية": [3, 4], // You without upbringing (Lebanese)
  "يا قليل التربية": [3, 4], // You of little upbringing (Lebanese)
  "يا بلا أخلاق": [3, 4], // You without morals (Lebanese)
  "يا شلخت": [3, 4], // You slut (Lebanese)
  "يا ناطرة عا الطريق": [5, 4], // You waiting on the road (Lebanese, implying prostitute)
  "يا متل إمك": [3, 4], // You like your mother (Lebanese insult)
  "يا بيّاع عرضو": [3, 4], // You seller of your honor (Lebanese)
  "بدّي كسّرك": [3, 4], // I'll break you (Lebanese)
  "بدّي فرمك فرم": [3, 4], // I'll grind you thoroughly (Lebanese)
  "كس إمّك على إمّك": [4, 4], // Your mom's pussy upon your mom (Lebanese)
  "كس أخت يلي خلفك": [4, 4], // Sister's pussy of who bore you (Lebanese)
  "يا معفّن يا ابن المعفّن": [3, 4], // You rotten son of rotten (Lebanese)
  "يا خرا ابن الخرا": [3, 5], // You shit son of shit (Lebanese)

  // ========================================
  // === EXPANSION: Levantine dialect (Palestinian) - extended ===
  // ========================================
  "روح عن وجهي": [3, 4], // Get out of my face (Palestinian)
  "يا ابن الملعونة": [3, 4], // Son of the cursed one (Palestinian)
  "يا كلب الشوارع": [3, 4], // You street dog (Palestinian)
  "يا حمار الحارة": [3, 4], // You donkey of the neighborhood (Palestinian)
  "يلعن ابو تربيتك": [1, 4], // Curse the father of your upbringing (Palestinian)
  "يلعن ابو هالوجه": [1, 4], // Curse the father of this face (Palestinian)
  "يلعن ابو هالخلقة": [1, 4], // Curse the father of this creation (Palestinian)
  "يا ابن الحرام يا منيوك": [3, 4], // You bastard you fucked (Palestinian)
  "كس أمك يا ابن الكلب": [4, 4], // Your mother's pussy son of a dog (Palestinian)
  "أيري فيك وبكل خلقتك": [4, 4], // My dick in you and your creation (Palestinian)
  "يا سافل يا ابن السافل": [3, 4], // You lowlife son of lowlife (Palestinian)
  "يا نذل يا ابن النذل": [3, 4], // You vile son of vile (Palestinian)
  "يا ابن الفاسقة": [3, 4], // Son of the immoral woman (Palestinian)
  "يا ابن المنيوكة الوسخة": [3, 5], // Son of the dirty fucked one (Palestinian)
  "روح إنتاك يا حمار": [3, 5], // Go get fucked you donkey (Palestinian)
  "يا ابن الغانية": [3, 4], // Son of the courtesan (Palestinian)
  "يلعن ابو سلالتك": [1, 4], // Curse the father of your lineage (Palestinian)
  "يا مش ابن ناس": [3, 4], // You not a son of people (Palestinian, meaning low class)

  // ========================================
  // === EXPANSION: Levantine dialect (Jordanian) - extended ===
  // ========================================
  "يا زلمة الخايسة": [3, 4], // You man of rotten (Jordanian)
  "يا ابن الكلبة العايرة": [3, 4], // Son of the roaming bitch (Jordanian)
  "روح قصف بحرك": [3, 4], // Go bomb your sea (Jordanian dismissive)
  "يا ابن القرمطية": [3, 4], // Son of the Qarmatian (Jordanian insult)
  "يلعن بو سنسفيلك": [3, 4], // Curse your ancestor (Jordanian)
  "يا ابن سبعين كلب": [3, 4], // Son of seventy dogs (Jordanian)
  "يلعن ابو خلقتك": [1, 4], // Curse your creation's father (Jordanian)
  "يا مخبول": [3, 4], // You crazy (Jordanian)
  "يا مخبولة": [3, 4], // You crazy (Jordanian fem)
  "يا ابن العاهر": [5, 4], // Son of the whoremonger (Jordanian)
  "يا ابن الزنا المحصن": [3, 4], // Son of married adultery (Jordanian)
  "يا أجرب يا ابن الأجرب": [3, 4], // You mangy son of mangy (Jordanian)
  "يا ابن الفاجرة المنيوكة": [3, 5], // Son of the fucked immoral (Jordanian)

  // ========================================
  // === EXPANSION: Gulf dialect (Saudi) - extended ===
  // ========================================
  "يا ابن الزنا": [3, 4], // Son of adultery (Saudi)
  "يا ابن الحرام المعرص": [3, 4], // You bastard pimp (Saudi)
  "يا ديوث يا ابن الديوث": [3, 4], // You cuckold son of cuckold (Saudi)
  "يا خنيث يا ابن الخنيث": [3, 4], // You effeminate son of effeminate (Saudi)
  "الله لا يوفقك": [3, 4], // May God not grant you success (Saudi curse)
  "الله يلعنك": [2, 4], // May God curse you (Saudi)
  "الله ياخذك": [3, 4], // May God take you (Saudi death curse)
  "الله يسود وجهك": [3, 4], // May God blacken your face (Saudi curse)
  "الله يقطع رزقك": [3, 4], // May God cut your sustenance (Saudi curse)
  "الله يفضحك": [3, 4], // May God expose you (Saudi curse)
  "الله ينتقم منك": [3, 4], // May God take revenge on you (Saudi)
  "الله يذلك": [3, 4], // May God humiliate you (Saudi)
  "الله يعميك": [3, 4], // May God blind you (Saudi)
  "الله يشلك": [3, 4], // May God paralyze you (Saudi)
  "يا ابن الستين في ستين": [3, 4], // Son of sixty in sixty (Saudi)
  "يا قذر يا ابن القذر": [3, 4], // You filthy son of filthy (Saudi)
  "يا وضيع يا ابن الوضيع": [3, 4], // You lowly son of lowly (Saudi)
  "يا سفالة يا ابن السفالة": [3, 4], // You scum son of scum (Saudi)
  "يلعن بو شنبك": [1, 4], // Curse your mustache's father (Saudi)
  "طق عشر يا حمار": [3, 5], // Fuck off you donkey (Saudi)
  "أمك تمشي في الشارع": [3, 4], // Your mother walks the streets (Saudi)
  "أبوك ما له أصل": [1, 4], // Your father has no origin (Saudi)
  "يا ابن اللقيط": [3, 4], // Son of the foundling (Saudi)
  "يا ابن المسيار": [3, 4], // Son of the temporary marriage (Saudi insult)
  "يا ابن الحرمة الوسخة": [3, 4], // Son of the dirty woman (Saudi)
  "يا بربوق": [1, 4], // You foolish (Saudi)
  "يا سخلة": [1, 4], // You lamb (Saudi insult for stupid)
  "يا طرش بحر": [3, 4], // You sea vomit (Saudi insult)

  // ========================================
  // === EXPANSION: Gulf dialect (Emirati) - extended ===
  // ========================================
  "يا ابن اللعبة": [3, 4], // Son of the toy (Emirati insult)
  "يا هبيل يا ابن الهبيلة": [1, 4], // You stupid son of the stupid (Emirati)
  "يا خبل يا ابن الخبلة": [3, 4], // You crazy son of the crazy (Emirati)
  "يا مسخرة يا ابن المسخرة": [3, 4], // You joke son of a joke (Emirati)
  "يا مغفل يا ابن المغفل": [3, 4], // You gullible son of gullible (Emirati)
  "انطم": [3, 4], // Shut up (Emirati)
  "سكر سالفتك": [3, 4], // Shut your story (Emirati, shut up)
  "يا بو وجه": [3, 4], // You with a face (Emirati shameless)
  "يا حافي يا ابن الحافي": [3, 4], // You barefoot son of barefoot (Emirati)
  "يا ريال وسخ": [3, 4], // You dirty man (Emirati)
  "يا حرمة وسخة": [3, 4], // You dirty woman (Emirati)
  "يا ابن الهندية": [5, 4], // Son of the Indian woman (Emirati racist)
  "يا عيل وسخ": [3, 4], // You dirty kid (Emirati)
  "يا معرص يا ابن المعرص": [3, 4], // You pimp son of pimp (Emirati)

  // ========================================
  // === EXPANSION: Gulf dialect (Qatari) - extended ===
  // ========================================
  "يا ابن الخبيثة": [3, 4], // Son of the malicious (Qatari)
  "يا خبيث يا ابن الخبيث": [3, 4], // You malicious son of malicious (Qatari)
  "يا تافه يا ابن التافه": [3, 4], // You worthless son of worthless (Qatari)
  "يا فاشل يا ابن الفاشل": [3, 4], // You failure son of failure (Qatari)
  "يا حقير يا ابن الحقير": [3, 4], // You contemptible son of contemptible (Qatari)
  "يا نجس يا ابن النجس": [3, 4], // You impure son of impure (Qatari)
  "يلعن بو وجهك": [1, 4], // Curse your face's father (Qatari)
  "يلعن بو خلقتك": [1, 4], // Curse your creation's father (Qatari)

  // ========================================
  // === EXPANSION: Iraqi dialect - extended ===
  // ========================================
  "يا ابن الچلب المعرص": [3, 4], // Son of the pimped dog (Iraqi)
  "يا گحبة بنت الگحبة": [5, 4], // You whore daughter of whore (Iraqi)
  "يخرب بيت ابوك": [1, 4], // May your father's house be destroyed (Iraqi)
  "يخرب عرضك": [3, 4], // May your honor be destroyed (Iraqi)
  "يخرب دينك": [3, 4], // May your religion be destroyed (Iraqi)
  "يا ابن الفجرة": [3, 4], // Son of the immoral one (Iraqi)
  "يا ابن الخبيثة العايرة": [3, 4], // Son of the malicious wanderer (Iraqi)
  "يا بلاوي": [3, 4], // You disasters (Iraqi insult)
  "يا سراي": [3, 4], // You worthless (Iraqi)
  "يا لوطي يا ابن اللوطي": [3, 4], // You sodomite son of sodomite (Iraqi)
  "يا معرس يا ابن المعرس": [3, 4], // You pimped son of pimped (Iraqi)
  "كل خره يا ابن الچلب": [3, 5], // Eat shit son of a dog (Iraqi)
  "يا بربوگ يا ابن البربوگ": [1, 4], // You fool son of fool (Iraqi)
  "يا ابن البيض": [4, 4], // Son of balls (Iraqi vulgar)
  "يا ابن الطرشي": [3, 4], // Son of the pickles (Iraqi insult)
  "يا ابن الچفخانة": [3, 4], // Son of the brothel (Iraqi)
  "گحبة أمك على جدك": [1, 4], // Your mother's whore upon your grandfather (Iraqi)
  "يا ولد الحرام يا ابن الگحبة": [3, 4], // You bastard son of a whore (Iraqi)
  "يا ابن الزاغرية": [3, 4], // Son of the ululating one (Iraqi insult)
  "يا مسخوط من الله": [3, 4], // You cursed by God (Iraqi)
  "الله يسلّط عليك": [3, 4], // May God send upon you (Iraqi curse)
  "الله ياخذك مو ياخذ غيرك": [5, 5], // May God take you not others (Iraqi death curse)
  "يا ابن السگنية": [3, 4], // Son of the cigarette woman (Iraqi insult)
  "يا ابن الشارع": [3, 4], // Son of the street (Iraqi)

  // ========================================
  // === EXPANSION: Moroccan Darija - extended ===
  // ========================================
  "نعل بو ممك على ممك": [1, 4], // Curse your mother's father upon your mother (Moroccan)
  "نيك ممك يا ولد القحبة": [5, 5], // Fuck your mother son of a whore (Moroccan)
  "سير تنيك يا ولد الحرام": [3, 4], // Go get fucked bastard (Moroccan)
  "سير لعند ممك": [3, 4], // Go to your mother (Moroccan dismissive)
  "زبي ف تبون ممك": [5, 5], // My dick in your mother's cunt (Moroccan)
  "يا بوزبال ولد البوزبال": [1, 4], // You idiot son of idiot (Moroccan)
  "يا حمار ولد الحمارة": [3, 4], // You donkey son of donkey (Moroccan)
  "يا كلب ابن الكلبة": [3, 4], // You dog son of bitch (Moroccan)
  "يا خنزير ولد الخنزيرة": [3, 4], // You pig son of sow (Moroccan)
  "يا مقود ولد المقود": [3, 4], // You pimped son of pimped (Moroccan)
  "يا ولد الزنا": [3, 4], // You son of adultery (Moroccan)
  "يا ولد لقحبة الوسخة": [5, 4], // Son of the dirty whore (Moroccan)
  "يا ولد لكلبة": [3, 4], // Son of the bitch (Moroccan)
  "تبون اختك على ممك": [5, 5], // Your sister's cunt upon your mother (Moroccan)
  "نعل بوك ع بو ممك": [1, 4], // Curse your father upon your mother's father (Moroccan)
  "سير تقود يا حمار": [3, 4], // Go pimp you donkey (Moroccan)
  "يا ماكيان": [3, 4], // You chicken (Moroccan insult)
  "يا معجون": [3, 4], // You paste (Moroccan insult for worthless)
  "يا ولد البرادة": [3, 4], // Son of the fridge (Moroccan, meaning cold/heartless)
  "يا مسوس": [3, 4], // You rotten (Moroccan)
  "يا زعطوط ولد الزعطوط": [1, 4], // You fool son of fool (Moroccan)
  "يا شفّار ولد الشفّار": [3, 4], // You thief son of thief (Moroccan)
  "يا عيّاش ولد العيّاش": [3, 4], // You degenerate son of degenerate (Moroccan)
  "يا مقطوع من الدنيا": [3, 4], // You cut from the world (Moroccan)
  "يا بلا أصل": [3, 4], // You without origin (Moroccan)
  "يا بلا فصل": [3, 4], // You without class (Moroccan)

  // ========================================
  // === EXPANSION: Algerian dialect - extended ===
  // ========================================
  "نعل بوك يا قواد ابن القواد": [1, 4], // Curse your father pimp son of pimp (Algerian)
  "روح تنيك يا حمار ابن الحمار": [3, 5], // Go get fucked donkey son of donkey (Algerian)
  "يا ولد الزنية المنيك": [3, 5], // Son of fucked adultery (Algerian)
  "يا هبيل يبن الهبيلة": [1, 4], // You stupid son of stupid (Algerian)
  "يا مجرور ولد المجرور": [3, 4], // You dragged son of dragged (Algerian)
  "يا طحان ولد الطحانة": [3, 4], // You grinder son of grinder (Algerian)
  "نعل ربك يا حقار": [3, 4], // Curse your lord you contemptible (Algerian)
  "روح يبان بوك يا حمار": [1, 4], // Go show your father you donkey (Algerian)
  "يا كلاب ولاد الكلاب": [3, 4], // You dogs sons of dogs (Algerian)
  "نعل دين بو جدك": [1, 4], // Curse your grandfather's father's religion (Algerian)
  "يا خنزير ابن الخنزيرة": [3, 4], // You pig son of sow (Algerian)
  "يا ولد الحركية": [3, 4], // Son of the collaborator (Algerian historical insult)
  "يا شيطان ولد الشيطان": [3, 4], // You devil son of devil (Algerian)
  "يا فراخ ولد الفراخ": [3, 4], // You chicken son of chicken (Algerian)
  "يا ناقص ولد الناقصة": [3, 4], // You deficient son of deficient (Algerian)
  "يا مسخوط ولد المسخوط": [3, 4], // You cursed son of cursed (Algerian)
  "يا سارق ولد السارقة": [3, 4], // You thief son of thief (Algerian)
  "يا كذاب ولد الكذابة": [3, 4], // You liar son of liar (Algerian)

  // ========================================
  // === EXPANSION: Tunisian dialect - extended ===
  // ========================================
  "بارّا تنيّك يا ولد القحبة": [5, 5], // Go get fucked son of a whore (Tunisian)
  "نعل بو ممك يا مبون": [1, 4], // Curse your mother's father you bottom (Tunisian)
  "يا حلوف ابن الحلوف": [3, 4], // You pig son of pig (Tunisian)
  "يا كبش ابن الكبش": [3, 4], // You ram son of ram (Tunisian)
  "يا زامل ولد الزامل": [3, 4], // You faggot son of faggot (Tunisian)
  "يا مبون ولد المبون": [3, 4], // You bottom son of bottom (Tunisian)
  "يا ملعون ولد الملعون": [3, 4], // You cursed son of cursed (Tunisian)
  "يا فاسد ولد الفاسد": [3, 4], // You corrupt son of corrupt (Tunisian)
  "يا مسطول ابن المسطولة": [3, 4], // You stoned son of stoned (Tunisian)
  "يا حشايشي ابن الحشايشي": [3, 4], // You pothead son of pothead (Tunisian)
  "بلا كرامة بلا راس": [3, 4], // Without dignity without head (Tunisian)
  "يا ناقص عقل": [3, 4], // You deficient mind (Tunisian)
  "يا ولد البور": [3, 4], // Son of the wasteland (Tunisian insult)
  "يا مخنّث": [3, 4], // You effeminate (Tunisian slur)
  "يا ولد الغجر": [3, 4], // Son of the gypsies (Tunisian)

  // ========================================
  // === EXPANSION: Libyan dialect - extended ===
  // ========================================
  "يا بن الكلبة الوسخة": [3, 4], // Son of the dirty bitch (Libyan)
  "يا مزنوق يبن المزنوقة": [3, 4], // You desperate son of desperate (Libyan)
  "نعل بو دينك يا كلب": [3, 4], // Curse your religion you dog (Libyan)
  "يا خنفوس ابن الخنفوس": [3, 4], // You beetle son of beetle (Libyan)
  "يا زربوط يبن الزربوط": [3, 4], // You clumsy son of clumsy (Libyan)
  "يا بهلول ابن البهلول": [1, 4], // You fool son of fool (Libyan)
  "يا طبل ابن الطبل": [3, 4], // You drum son of drum (Libyan)
  "يا أزعر ابن الأزعر": [3, 4], // You thug son of thug (Libyan)
  "يا عاطل ابن العاطل": [3, 4], // You bum son of bum (Libyan)
  "يا مرتد ابن المرتد": [3, 4], // You apostate son of apostate (Libyan)
  "يا كلب الشط": [3, 4], // You dog of the shore (Libyan)
  "يا مجنون ابن المجنونة": [3, 4], // You crazy son of crazy (Libyan)
  "يا حيوان بلا عقل": [3, 4], // You animal without brain (Libyan)
  "يلعن ابو ابوك يا كلب": [1, 4], // Curse your grandfather you dog (Libyan)

  // ========================================
  // === EXPANSION: Sudanese dialect - extended ===
  // ========================================
  "يا ود الزنا": [3, 4], // Son of adultery (Sudanese)
  "يا ود الشيطان": [3, 4], // Son of devil (Sudanese)
  "يا ود الغابة": [5, 4], // Son of the jungle (Sudanese racist insult)
  "يا كلب الحلة": [3, 4], // You dog of the neighborhood (Sudanese)
  "يا خواض ابن الخواض": [3, 4], // You faggot son of faggot (Sudanese)
  "يا حشاش ابن الحشاش": [3, 4], // You pothead son of pothead (Sudanese)
  "يا جنجويدي ابن الجنجويدي": [3, 4], // You Janjaweed son of Janjaweed (Sudanese)
  "يا نجاسة ابن النجاسة": [3, 4], // You filth son of filth (Sudanese)
  "كمكم يا كلب": [3, 4], // Shut up you dog (Sudanese)
  "يا فاسق ابن الفاسق": [3, 4], // You sinner son of sinner (Sudanese)
  "يا ابن البقرة": [3, 4], // Son of a cow (Sudanese)
  "يا ابن الدقيقة": [3, 4], // Son of the minute (Sudanese insult)
  "يا زول وسخ": [3, 4], // You dirty person (Sudanese)
  "يا زول خايس": [3, 4], // You rotten person (Sudanese)
  "يلعن ديل اللي جابوك": [3, 4], // Curse those who brought you (Sudanese)
  "يا ابن الكداب": [3, 4], // Son of the liar (Sudanese)
  "يا ابن الحرامي": [3, 4], // Son of the thief (Sudanese)

  // ========================================
  // === EXPANSION: Yemeni dialect - extended ===
  // ========================================
  "يا مسخوط من ربك": [3, 4], // You cursed by your lord (Yemeni)
  "يا عكبري ابن العكبري": [3, 4], // You vile son of vile (Yemeni)
  "يلعن تريبتك وتريبة ابوك": [1, 4], // Curse your upbringing and your father's (Yemeni)
  "يا خابث ابن الخابث": [3, 4], // You malicious son of malicious (Yemeni)
  "يا مخبل ابن المخبل": [3, 4], // You crazy son of crazy (Yemeni)
  "يا ابن الفاجرة المسخوطة": [3, 4], // Son of the cursed immoral (Yemeni)
  "يا ابن القبيحة المسخوطة": [1, 4], // Son of the cursed ugly (Yemeni)
  "يا مشخوط ابن المشخوط": [3, 4], // You worthless son of worthless (Yemeni)
  "يلعن ابو ابوك على ابو ابو ابوك": [1, 4], // Curse grandfather upon great-grandfather (Yemeni)
  "يا ابن الشيطانة": [3, 4], // Son of the she-devil (Yemeni)
  "يا ابن الزفتة": [3, 4], // Son of the tar (Yemeni insult)
  "يا قليل الحيا ابن قليل الحيا": [3, 4], // You shameless son of shameless (Yemeni)
  "يا كافر ابن الكافرة": [3, 4], // You infidel son of infidel (Yemeni)

  // ========================================
  // === EXPANSION: More Franco-Arabic / Arabizi - extended ===
  // ========================================
  "ya 7mar ibn el 7mara": [3, 4], // you donkey son of donkey
  "ya kalb ibn el kalba": [3, 4], // you dog son of bitch
  "ya 5anzeer ibn el 5anzeera": [3, 5], // you pig son of sow
  "kos omak ya ibn el 3ahira": [5, 5], // your mother's pussy son of a whore
  "2eiri fi teezak ya 7ayawan": [4, 4], // my dick in your ass you animal
  "ya za7af ibn el za7af": [3, 4], // you creep son of creep
  "na3al abuk ya 5awal": [1, 5], // curse your father you faggot
  "na3al dinak ya kalb": [3, 5], // curse your religion you dog
  "barra nik omak ya 7mar": [3, 5], // go fuck your mother you donkey
  "barra rooh ya zaml": [3, 4], // go away you faggot
  "ya wlad el gahba": [5, 4], // you sons of whores
  "ya wlad el 5ara": [3, 5], // you sons of shit
  "ya wlad el kalba": [3, 4], // you sons of a bitch
  "2eiri b kol 3ayltak": [4, 5], // my dick in your whole family
  "n3al bo dinak ya 7ayawan": [1, 5], // curse your religion's father you animal
  "ya tbon ommak": [5, 5], // your mother's cunt (Moroccan romanized)
  "ya wled l9a7ba": [5, 5], // son of a whore (Moroccan romanized)
  "sir t9awed ya 7mar": [3, 4], // go pimp you donkey (Moroccan romanized)
  "na3al bo mmak ya zaml": [1, 5], // curse your mother's father faggot (Maghreb romanized)
  "ya m3aras ibn el m3aras": [3, 5], // you pimp son of pimp (romanized)
  "ya dayoos ibn el dayoos": [3, 4], // you cuckold son of cuckold (romanized)
  "ya 5aneeth ibn el 5aneeth": [3, 5], // you effeminate son of effeminate (romanized)
  "telhas teez omak ya ibn el sharmouta": [5, 5], // lick your mom's ass son of whore
  "ayre b koss o5tak": [4, 5], // my dick in your sister's pussy
  "ayre b 3ardhak": [4, 5], // my dick in your honor
  "ayre b dinak": [4, 4], // my dick in your religion
  "ayre b rabbak": [4, 4], // my dick in your lord
  "kol 5ara w moot ya kalb": [5, 5], // eat shit and die you dog
  "rooh enteek ya 7mar": [3, 5], // go get fucked you donkey
  "ya manyouk ibn el manyouka": [3, 5], // you fucked son of fucked
  "ya nayek omak": [3, 5], // you fucker of your mother
  "nikomak ya wled l7ram": [3, 4], // fuck your mother you bastard
  "ya zebbi f ommak": [4, 4], // my dick in your mother (Tunisian romanized)
  "ya m3arras": [3, 5], // you pimped (romanized)
  "ya miboun ibn el miboun": [3, 4], // you bottom son of bottom (Tunisian romanized)
  "in3al abuk w abu abuk": [1, 5], // curse your father and grandfather (romanized)
  "in3al 7 arwa7 abuk": [1, 5], // curse seven souls of your father (romanized)
  "nik omak ya ibn el metnaka": [3, 5], // fuck your mother son of fucked (romanized)
  "ya 3abd": [5, 5], // you slave (racist romanized)
  "ya zeft ibn el zeft": [3, 4], // you tar son of tar (romanized)
  "ya 5abees": [3, 5], // you malicious (romanized)
  "ya fesid": [3, 4], // you corrupt (romanized)
  "ya 5asis": [3, 5], // you despicable (romanized)
  "ya la2eem": [3, 4], // you wretched (romanized)
  "ya daeni2": [3, 4], // you lowly (romanized)
  "ya fasiq": [3, 4], // you sinner (romanized)
  "ya safel": [3, 4], // you lowlife (romanized)
  "ya sa9et": [3, 4], // you degenerate (romanized)
  "ya 5ayen ibn el 5ayen": [3, 5], // you traitor son of traitor (romanized)
  "ya jaban": [1, 4], // you coward (romanized)
  "ya najas": [3, 4], // you impure (romanized)
  "ya mo2rif": [3, 4], // you disgusting (romanized)
  "ya 7a9eer": [3, 4], // you contemptible (romanized)
  "ya 3adeem el sharaf": [3, 5], // you without honor (romanized)
  "ya mn7at": [3, 4], // you degraded (romanized)
  "ya ratheel": [3, 4], // you vile (romanized)

  // ========================================
  // === EXPANSION: More sexual terms across dialects ===
  // ========================================
  "انيكك يا بنت الكلب": [4, 5], // I'll fuck you daughter of a dog
  "انيكك من وراك": [4, 5], // I'll fuck you from behind
  "بدي أنيك طيزك يا شرموطة": [5, 5], // I want to fuck your ass you whore
  "يا زاني يا ابن الزاني": [4, 4], // You adulterer son of adulterer
  "يا زانية يا بنت الزانية": [4, 4], // You adulteress daughter of adulteress
  "يا داعر يا ابن الداعر": [4, 4], // You debauched son of debauched
  "يا داعرة يا بنت الداعرة": [5, 4], // You prostitute daughter of prostitute
  "يا مومس يا بنت المومس": [5, 4], // You whore daughter of whore
  "نيكني بالقوة": [4, 5], // Fuck me by force
  "نيكها": [4, 5], // Fuck her
  "نيكه": [4, 5], // Fuck him
  "نيكهم": [4, 5], // Fuck them
  "نيكوه": [4, 5], // Fuck him (plural command)
  "نيكوها": [4, 5], // Fuck her (plural command)
  "اتنيكي": [4, 5], // Get fucked (fem command)
  "اتنيك": [4, 5], // Get fucked (command)
  "يا بغل": [1, 4], // You mule (stupid, vulgar)
  "يا حمارة ابن الحمارة": [4, 4], // You donkey daughter of donkey
  "يا عاهرة ابن العاهر": [5, 5], // You whore son of whoremonger
  "يا مني": [4, 4], // You semen (extreme insult)
  "يا ابن المني": [4, 4], // Son of semen (extreme insult)
  "بص زبي": [4, 4], // Look at my dick (vulgar)
  "بوس زبي": [4, 4], // Kiss my dick (vulgar)
  "بوس طيزي": [4, 4], // Kiss my ass (vulgar)
  "تعالي مصي": [4, 4], // Come suck (fem command)
  "تعالي نيكيني": [4, 5], // Come fuck me (to fem)
  "يا نياكة": [4, 5], // You fucker (fem form)
  "يا متحرش يا ابن المتحرش": [4, 4], // You harasser son of harasser
  "يا مغتصب": [5, 5], // You rapist
  "يا مغتصبة": [5, 5], // You rapist (fem)
  "يا قحبة الحارة": [5, 4], // You whore of the neighborhood
  "يا شرموطة الحارة": [5, 4], // You whore of the neighborhood (variant)
  "يا عاهرة الشوارع": [5, 4], // You whore of the streets
  "يا شرموطة الشوارع": [5, 4], // You whore of the streets (variant)

  // ========================================
  // === EXPANSION: Religious insults - extended ===
  // ========================================
  "يلعن الله": [2, 3], // Curse God (extreme blasphemy)
  "يلعن دينك ودين ابوك": [1, 4], // Curse your religion and your father's
  "يلعن دينك ودين اللي خلفك": [2, 3], // Curse your religion and who bore you
  "يلعن ربك وربّ أبوك": [1, 4], // Curse your lord and your father's lord
  "يلعن ربك ورب اللي جابك": [2, 3], // Curse your lord and the lord of who brought you
  "يلعن صليبك": [2, 3], // Curse your cross
  "يلعن إنجيلك": [2, 3], // Curse your Bible
  "يلعن قرآنك": [2, 3], // Curse your Quran (extreme blasphemy)
  "يلعن مسجدك": [2, 3], // Curse your mosque
  "يلعن كنيستك": [2, 3], // Curse your church
  "يا كافر يا ملعون": [2, 3], // You infidel you cursed
  "يا ملحد يا كلب": [2, 3], // You atheist you dog
  "يا مرتد يا ابن الكلب": [2, 3], // You apostate son of a dog
  "يا عدو الله وعدو الناس": [2, 3], // Enemy of God and enemy of people
  "يلعن ابو دينك على ابو ابوك": [1, 4], // Curse your religion's father upon your grandfather
  "يلعن سبع ارواح ابوك وامك": [1, 4], // Curse seven souls of your father and mother
  "يلعن ابو الدين اللي دنتو": [1, 4], // Curse the religion's father that you follow
  "يا ابن ابليس الرجيم": [2, 3], // Son of the accursed Satan
  "يا صديق الشيطان": [2, 3], // Friend of the devil
  "يا خادم ابليس": [2, 3], // Servant of Satan
  "الله يحرقك بنار جهنم": [2, 3], // May God burn you in hellfire
  "يروح عليك نار جهنم": [2, 3], // May hellfire go upon you
  "يا ابن الملعون من الله": [2, 3], // Son of the cursed by God
  "يا مطرود من رحمة الله": [2, 3], // You expelled from God's mercy
  "يا ابن اللعينة": [2, 3], // Son of the cursed one (fem)

  // ========================================
  // === EXPANSION: Scatological terms across dialects ===
  // ========================================
  "يا خرا بني آدم": [3, 5], // You shit of humans
  "يا خرة": [3, 5], // You (piece of) shit
  "يا ابن الخرا": [3, 5], // Son of shit
  "يا بنت الخرا": [3, 5], // Daughter of shit
  "ريحتك خرا": [3, 5], // Your smell is shit
  "كل شي فيك خرا": [3, 5], // Everything about you is shit
  "يا خراي": [3, 5], // You my shit
  "يا براز": [3, 4], // You feces
  "يا بول": [3, 4], // You urine (insult)
  "يا ابن البول": [3, 4], // Son of urine
  "يا ابن الخراي": [3, 5], // Son of my shit
  "كل خرا وبلعه": [3, 5], // Eat shit and swallow it
  "كل خرا يا ابن الكلب": [3, 5], // Eat shit son of a dog
  "كل زق يا حمار": [3, 5], // Eat shit you donkey
  "يا خراشي": [3, 5], // You shitty person (Egyptian variant)
  "يا مخري": [3, 5], // You my shit (Egyptian)
  "يا مبولجي": [3, 4], // You pisser (Egyptian slang)
  "يا خراوي": [3, 5], // You shitty (Gulf variant)

  // ========================================
  // === EXPANSION: Compound curse expressions ===
  // ========================================
  "الله يخرب بيتك": [3, 5], // May God destroy your house
  "الله يخرب بيت ابوك": [1, 4], // May God destroy your father's house
  "الله يخرب بيت اللي جابك": [3, 5], // May God destroy the house of who brought you
  "الله يخرب بيت اللي خلفك": [3, 5], // May God destroy the house of who bore you
  "الله يلعن ابوك وابو ابوك": [1, 4], // May God curse your father and grandfather
  "الله يلعنك ويلعن اللي جابك": [3, 5], // May God curse you and who brought you
  "الله يلعن يوم ما اتولدت": [3, 5], // May God curse the day you were born
  "الله يلعن الساعة اللي اتولدت فيها": [3, 5], // May God curse the hour you were born (variant)
  "الله لا يردك سالم": [3, 5], // May God not return you safely
  "الله ينعل ابوك": [1, 4], // May God curse your father
  "الله ينعل أمك": [3, 5], // May God curse your mother
  "الله ينعل جدك": [1, 4], // May God curse your grandfather
  "الله يحرقك": [3, 5], // May God burn you
  "الله يحرق قبرك": [3, 5], // May God burn your grave
  "الله يحرق أهلك": [3, 5], // May God burn your family
  "الله يخذلك": [3, 5], // May God forsake you
  "الله يمسخك": [3, 5], // May God deform you
  "الله يعمي عينك": [3, 5], // May God blind your eye
  "الله يقطع يدينك": [3, 5], // May God cut your hands
  "الله يقطع رجلينك": [3, 5], // May God cut your legs
  "الله يقطع لسانك": [3, 5], // May God cut your tongue
  "الله يسلط عليك ناره": [3, 5], // May God send his fire upon you
  "الله يجعلك عبرة": [3, 5], // May God make you an example
  "الله يجيب في أيامك": [3, 5], // May God bring calamity in your days
  "يا ابن الستين ألف كلب": [3, 5], // Son of sixty thousand dogs
  "يا ابن المية ألف شرموطة": [5, 5], // Son of a hundred thousand whores
  "يلعن سبعة أجيال من أهلك": [3, 5], // Curse seven generations of your family
  "يلعن ابو ابو ابوك": [1, 4], // Curse your great-grandfather
  "يلعن ابو خال أمك": [1, 4], // Curse your mother's uncle's father
  "كس أمك وأم أمك وأم ابوك": [1, 4], // Pussy of your mother, grandmother, and father's mother
  "أيري بكل شي اسمو أهلك": [4, 5], // My dick in everything called your family
  "يلعن ابو كل حدا بعرفك": [1, 4], // Curse the father of everyone who knows you
  "أيري فيك وبأبوك وبجدك": [1, 4], // My dick in you, your father, and grandfather
  "كس أخت يلي جابك ويلي خلفك": [4, 5], // Sister's pussy of who brought and bore you
  "يلعن ابوك على امك على جدك": [1, 4], // Curse your father upon mother upon grandfather

  // ========================================
  // === EXPANSION: More Arabizi compound phrases ===
  // ========================================
  "kos omak w om omak": [4, 5], // your mother's and grandmother's pussy
  "ayre fi abok w jaddak": [1, 4], // my dick in your father and grandfather
  "ya ibn el sitteen alf kalb": [3, 5], // son of sixty thousand dogs
  "in3al 7 ajyal min ahlak": [3, 5], // curse seven generations of your family
  "alla yil3anak ya ibn el sharmouta": [5, 5], // may God curse you son of a whore
  "alla yakhthak ya ibn el gahba": [5, 5], // may God take you son of a whore
  "alla ya7re2ak ya kalb": [3, 5], // may God burn you dog
  "alla yakhrib baytak": [3, 5], // may God destroy your house
  "alla yi9ta3 rizqak": [3, 5], // may God cut your sustenance
  "alla yifdha7ak": [3, 5], // may God expose you
  "alla yi3meek": [3, 5], // may God blind you
  "rooh in7ash ya 7ayawan": [3, 5], // get lost you animal
  "ya ibn alf sharmoota": [5, 5], // son of a thousand whores
  "kos omak 3a abok": [1, 5], // your mother's pussy upon your father
  "ayre fi 3ardhak": [4, 5], // my dick in your honor
  "ayre fi wejjak": [4, 5], // my dick in your face
  "ayre fi timmak": [4, 5], // my dick in your mouth
  "badi fash5ak": [3, 5], // I'll destroy you (romanized Levantine)
  "badi kassirak": [3, 5], // I'll break you (romanized)
  "badi ni2ak": [3, 5], // I'll fuck you (romanized)
  "badi nayik 3ayiltak": [3, 5], // I'll fuck your family (romanized)
  "kol zegg w moot": [5, 5], // eat shit and die (romanized)
  "tfoo 3alayak": [3, 5], // spit on you (romanized)
  "ya 3ayil wisi5": [3, 5], // you dirty kid (romanized Egyptian)
  "ya wiski5 ya ibn el wis5a": [3, 5], // you dirty son of the dirty (romanized)
  "ya mish ibn nas": [3, 5], // you not a son of people (romanized)
  "ya abad abu abu abok": [3, 5], // curse your ancestors (romanized)
  "ya 7awan": [3, 5], // you animal (romanized abbreviated)
  "kos a5tak 3a omak": [4, 5], // your sister's pussy upon your mother (romanized)
  "ya wled z zina": [3, 5], // you son of adultery (romanized Maghreb)
  "ya wled l7aram l m9awed": [3, 4], // you bastard pimp (romanized Maghreb)
  "tboun mok 3la mok": [5, 5], // your mother's cunt upon mother (romanized Moroccan)
  "sir tni2 ya wled l9a7ba": [5, 5], // go get fucked son of whore (romanized Moroccan)
  "ya ga7ba": [5, 5], // you whore (romanized variant)
  "ya metnayik": [3, 5], // you fucked (romanized Maghreb)
  "ya zamel wled el zamel": [3, 5], // you faggot son of faggot (romanized Maghreb)
  "barra nik mo2ek": [3, 5], // go fuck your mother (romanized Maghreb)
  "ya 7olof": [3, 5], // you pig (romanized Tunisian)
  "ya mstoul": [3, 5], // you stoned (romanized Tunisian)

  // ========================================
  // === EXPANSION: Additional insults across all dialects ===
  // ========================================
  "يا منافق": [1, 4], // You hypocrite
  "يا منافقة": [1, 4], // You hypocrite (fem)
  "يا كذاب": [1, 4], // You liar
  "يا كذابة": [1, 4], // You liar (fem)
  "يا خائن يا ابن الخائن": [1, 4], // You traitor son of traitor
  "يا خائنة يا بنت الخائنة": [1, 4], // You traitor daughter of traitor
  "يا غدار": [1, 4], // You treacherous
  "يا غدارة": [1, 4], // You treacherous (fem)
  "يا حرامي يا ابن الحرامي": [1, 4], // You thief son of thief
  "يا حرامية يا بنت الحرامية": [1, 4], // You thief daughter of thief
  "يا جبان يا ابن الجبان": [1, 4], // You coward son of coward
  "يا جبانة يا بنت الجبانة": [1, 4], // You coward daughter of coward
  "يا فاشل": [1, 4], // You failure
  "يا فاشلة": [1, 4], // You failure (fem)
  "يا أنجاس": [1, 4], // You impure ones (plural)
  "يا أوساخ": [1, 4], // You dirty ones (plural)
  "يا أوباش": [1, 4], // You thugs (plural)
  "يا حثالة المجتمع": [1, 4], // You dregs of society
  "يا نفاية المجتمع": [1, 4], // You waste of society
  "يا قمامة المجتمع": [1, 4], // You garbage of society
  "يا عالة على المجتمع": [1, 4], // You burden on society
  "يا طفيلي": [1, 4], // You parasite
  "يا طفيلية": [1, 4], // You parasite (fem)
  "يا دودة": [1, 4], // You worm
  "يا ابن الدودة": [1, 4], // Son of a worm
  "يا حشرة يا ابن الحشرة": [1, 4], // You insect son of insect
  "يا صرصور يا ابن الصرصور": [4, 4], // You cockroach son of cockroach
  "يا عنكبوت": [1, 4], // You spider (insult)
  "يا ثعبان": [1, 4], // You snake
  "يا ثعبان يا ابن الثعبان": [1, 4], // You snake son of snake
  "يا عقرب": [1, 4], // You scorpion
  "يا عقرب يا ابن العقرب": [1, 4], // You scorpion son of scorpion
  "يا كلب ابن الكلب المسعور": [1, 4], // You dog son of rabid dog
  "يا حمار ابن الحمارة الوسخة": [1, 4], // You donkey son of dirty donkey
  "يا بقرة يا بنت البقرة": [1, 4], // You cow daughter of cow
  "يا ماعز يا ابن الماعز": [1, 4], // You goat son of goat
  "يا جاموسة": [1, 4], // You buffalo (fem insult)
  "يا ابن الجاموسة": [1, 4], // Son of the buffalo
  "يا خروف": [1, 4], // You sheep
  "يا ابن الخروفة": [1, 4], // Son of the ewe
  "يا غراب": [1, 4], // You crow (insult)
  "يا ابن الغراب": [1, 4], // Son of the crow
  "يا ضبع": [1, 4], // You hyena
  "يا ابن الضبع": [1, 4], // Son of the hyena
  "يا قمل": [1, 4], // You louse
  "يا ابن القملة": [1, 4], // Son of the louse
  "يا بق": [1, 4], // You bedbug
  "يا ذبابة": [1, 4], // You fly
  "يا ابن الذبابة": [1, 4], // Son of the fly
  "يا كتكوت": [1, 4], // You chick (cowardly)
  "يا دجاجة": [1, 4], // You chicken (cowardly)
  "يا ابن الدجاجة": [1, 4], // Son of the chicken

  // ========================================
  // === EXPANSION: Insults about appearance/intelligence ===
  // ========================================
  "يا أعمى": [1, 4], // You blind
  "يا أطرش": [1, 4], // You deaf
  "يا أخرس": [1, 4], // You mute (insult)
  "يا أعرج": [1, 4], // You lame
  "يا أعور": [1, 4], // You one-eyed
  "يا شحات": [1, 4], // You beggar
  "يا شحاتة": [1, 4], // You beggar (fem)
  "يا مسكين": [1, 4], // You pitiful (condescending)
  "يا مسكينة": [1, 4], // You pitiful (fem, condescending)
  "يا قبيح": [1, 4], // You ugly
  "يا قبيحة": [1, 4], // You ugly (fem)
  "يا دميم": [1, 4], // You ugly (formal)
  "يا دميمة": [1, 4], // You ugly (fem formal)
  "يا مشوه": [1, 4], // You deformed
  "يا مشوهة": [1, 4], // You deformed (fem)
  "يا سمين": [1, 4], // You fat
  "يا سمينة": [1, 4], // You fat (fem)
  "يا خنزير سمين": [1, 4], // You fat pig
  "يا بقرة سمينة": [1, 4], // You fat cow
  "يا هيكل عظمي": [1, 4], // You skeleton
  "يا نحيف": [1, 4], // You skinny (insult)
  "يا معتوه": [1, 4], // You mentally deficient
  "يا معتوهة": [1, 4], // You mentally deficient (fem)
  "يا مجنون يا ابن المجنونة": [1, 4], // You crazy son of crazy
  "يا متخلف": [5, 4], // You retarded (ableist)
  "يا متخلفة": [5, 4], // You retarded (fem, ableist)
  "يا متخلف عقليا": [5, 4], // You mentally retarded (ableist)
  "يا بليد": [1, 4], // You dull/stupid
  "يا بليدة": [1, 4], // You dull (fem)
  "يا غبي يا ابن الغبية": [1, 4], // You stupid son of the stupid
  "يا جاهل": [1, 4], // You ignorant
  "يا جاهلة": [1, 4], // You ignorant (fem)
  "يا أمي": [1, 4], // You illiterate
  "يا أمية": [1, 4], // You illiterate (fem)
  "يا فارغ": [1, 4], // You empty (insult)
  "يا فاضي": [1, 4], // You empty/idle (insult)
  "يا ضايع": [1, 4], // You lost (insult)
  "يا ضايعة": [1, 4], // You lost (fem insult)
  "يا تايه": [1, 4], // You wandering/lost (insult)

  // ========================================
  // === EXPANSION: More compound "son of" expressions ===
  // ========================================
  "ابن الزبالة": [3, 5], // Son of garbage
  "ابن القمامة": [3, 5], // Son of trash
  "ابن النفاية": [3, 5], // Son of waste
  "ابن الحثالة": [3, 5], // Son of dregs
  "ابن الوساخة": [3, 5], // Son of filth
  "ابن الرذيلة": [3, 5], // Son of vice
  "ابن الفاحشة": [3, 5], // Son of obscenity
  "ابن المعصية": [3, 5], // Son of sin
  "ابن الضلالة": [3, 5], // Son of misguidance
  "ابن الجهالة": [3, 5], // Son of ignorance
  "ابن الخطيئة": [3, 5], // Son of sin (variant)
  "ابن البلوة": [3, 5], // Son of calamity
  "ابن المصيبة": [3, 5], // Son of disaster
  "ابن اللعنة": [3, 5], // Son of the curse
  "ابن العار": [3, 5], // Son of shame
  "ابن الفضيحة": [3, 5], // Son of scandal
  "ابن العيب": [3, 5], // Son of disgrace
  "ابن الذل": [3, 5], // Son of humiliation
  "ابن الهوان": [3, 5], // Son of degradation
  "بنت الزبالة": [3, 5], // Daughter of garbage
  "بنت النفاية": [3, 5], // Daughter of waste
  "بنت الوساخة": [3, 5], // Daughter of filth
  "بنت الرذيلة": [3, 5], // Daughter of vice
  "بنت الفاحشة": [3, 5], // Daughter of obscenity
  "بنت اللعنة": [3, 5], // Daughter of the curse
  "بنت العار": [3, 5], // Daughter of shame
  "بنت الفضيحة": [3, 5], // Daughter of scandal

  // ========================================
  // === EXPANSION: More body-related vulgarities ===
  // ========================================
  "كسك": [4, 4], // Your pussy (to fem)
  "كسها واسع": [4, 4], // Her pussy is wide
  "كسك واسع": [4, 4], // Your pussy is wide
  "طيزك واسع": [3, 4], // Your ass is wide
  "زبه كبير": [4, 4], // His dick is big (vulgar context)
  "زبك صغير": [4, 4], // Your dick is small
  "بلا زب": [4, 4], // Without a dick
  "بلا كس": [4, 4], // Without a pussy
  "بلا طيز": [3, 4], // Without an ass
  "بلا خصي": [4, 4], // Without balls
  "مبتور": [3, 4], // Amputated / castrated (insult)
  "مخصي": [3, 4], // Castrated (insult)
  "يا مبتور": [3, 4], // You castrated (insult)
  "يا مخصي": [3, 4], // You castrated one (insult)
  "يا عنين": [3, 4], // You impotent
  "يا عاجز": [3, 4], // You incapable / impotent
  "يا عاجزة": [3, 4], // You incapable (fem)
  "يا بايخ": [3, 4], // You stale / impotent (Egyptian)
  "يا بايخة": [3, 4], // You stale (fem, Egyptian)
  "يا محروم": [3, 4], // You deprived
  "يا محرومة": [3, 4], // You deprived (fem)

  // ========================================
  // === EXPANSION: Evasion and internet spellings ===
  // ========================================
  "k0s": [4, 5], // Pussy with zero
  "k0ss": [4, 5], // Pussy variant
  "sh4rmouta": [5, 5], // Whore with 4
  "sh4rmoot4": [5, 5], // Whore with 4s
  "z3b": [4, 5], // Dick with 3
  "z3bi": [4, 5], // My dick with 3
  "t33z": [3, 5], // Ass with 3s
  "7m4r": [2, 5], // Donkey with 4
  "k4lb": [2, 5], // Dog with 4
  "5nz33r": [2, 5], // Pig with numbers
  "g47ba": [5, 5], // Whore with numbers
  "ni2k": [3, 5], // Fuck with 2
  "n33k": [3, 5], // Fuck with 3s
  "m4ny4k": [3, 5], // Fucker with 4s
  "5wal": [2, 5], // Faggot with 5 (variant)
  "y4 k4lb": [2, 5], // You dog with 4s
  "y4 7m4r": [2, 5], // You donkey with 4s
  "y4 5nz33r": [2, 5], // You pig with numbers
  "k0s 0m4k": [4, 5], // Your mother's pussy with numbers
  "4yr3 f33k": [4, 5], // My dick in you with numbers
  "t3lh4s t33zi": [3, 5], // Lick my ass with numbers

  // ========================================
  // === EXPANSION: Additional romanized (no numbers) ===
  // ========================================
  "koss ommak": [4, 5], // your mother's pussy (variant)
  "koss okhtak": [4, 5], // your sister's pussy (variant)
  "ibn el sharmoota": [5, 5], // son of a whore (variant)
  "ibn il kahba": [5, 5], // son of a whore (variant)
  "ibn il metnaka": [3, 5], // son of the fucked (variant)
  "ya ibn il wisikha": [3, 5], // son of the dirty (variant)
  "ya ibn il kalba": [3, 5], // son of a bitch (variant)
  "ya ibn il khanzeera": [3, 5], // son of a sow (variant)
  "ya hayawana": [3, 5], // you animal (fem)
  "ya zibala": [3, 5], // you garbage
  "ya zebala": [3, 5], // you garbage (variant)
  "ya nifaya": [3, 5], // you waste
  "ya hathala": [3, 5], // you dregs
  "rooh nimak": [3, 5], // go to your mother (dismissive)
  "yel3an abook": [1, 5], // curse your father (variant)
  "yel3an ommak": [3, 5], // curse your mother (variant)
  "yel3an deenak": [3, 5], // curse your religion (variant)
  "yel3an rabbak": [3, 5], // curse your lord (variant)
  "ya ibn il laeema": [3, 5], // son of the wretched (variant)
  "ya ibn il najas": [3, 5], // son of the impure
  "ya ibn il fasid": [3, 5], // son of the corrupt
  "ya iblis": [3, 5], // you devil
  "ya shaytan": [3, 5], // you Satan
  "ya la3een": [3, 5], // you cursed (variant)
  "ya mal3oon": [3, 5], // you cursed
  "ya mal3oona": [3, 5], // you cursed (fem)
  "wlad il haram": [3, 5], // children of sin
  "wlad il 3ahira": [5, 5], // children of the whore
  "wlad il kalba": [3, 5], // children of the bitch
  "wlad il sharmoota": [5, 5], // children of the whore (variant)
  "kol taban": [3, 5], // eat shit (Gulf variant)
  "boos teezi": [3, 5], // kiss my ass
  "boos zibbi": [4, 5], // kiss my dick
  "emshi min hina": [3, 5], // leave from here
  "irhal ya kalb": [3, 5], // leave you dog
  "ta3al hina ya hmar": [3, 5], // come here you donkey
  "allah yer7amak... la2": [3, 5], // may God have mercy... no (sarcastic curse)
  "omak shaklaha": [3, 5], // your mother looks like (setup for insult)
  "abook shaklou": [1, 5], // your father looks like (setup for insult)
  "wejjak zay teez": [3, 5], // your face looks like an ass
  "wejjak zay il khara": [3, 5], // your face looks like shit
  "wejjak zay il zeft": [3, 5], // your face looks like tar
};
const arabicBadWords: Record<string, { s: number; c: number }> = {};
for (const [k, [s, c]] of Object.entries(_d)) {
    arabicBadWords[k] = { s, c };
}
export default arabicBadWords;

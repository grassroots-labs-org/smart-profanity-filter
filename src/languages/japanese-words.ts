/**
 * Japanese profanity words list
 * Contains common profanities, insults, and offensive terms.
 * Includes native Japanese profanity and commonly used katakana loanword profanity.
 * ⚠️ Warning: This file contains explicit language in Japanese
 */
const _d: Record<string, [number, number]> = {
  // Native Japanese profanity
  "クソ": [3, 5], // Shit/damn
  "糞": [3, 5], // Shit (kanji)
  "くそったれ": [3, 5], // Shithead
  "くたばれ": [3, 4], // Drop dead
  "畜生": [5, 5], // Damn it / beast
  "死ね": [5, 5], // Die
  "馬鹿": [3, 4], // Idiot/fool — common Japanese profanity
  "バカ": [1, 4], // Idiot/fool (katakana)
  "アホ": [1, 4], // Idiot (Kansai)
  "変態": [2, 3], // Pervert
  "痴漢": [3, 4], // Groper/molester
  "きちがい": [3, 4], // Crazy/insane
  "ケツ": [2, 4], // Ass
  "ちんこ": [4, 4], // Penis (vulgar)
  "ちんちん": [4, 4], // Penis (childish)
  "ちんぽ": [4, 4], // Penis (vulgar)
  "まんこ": [4, 4], // Pussy (vulgar)
  "おっぱい": [4, 4], // Breasts
  "金玉": [4, 4], // Testicles (kanji)
  "きんたま": [4, 4], // Testicles (hiragana)
  "やりまん": [3, 4], // Slut
  "売春婦": [5, 4], // Prostitute
  "強姦": [5, 5], // Rape
  "野郎": [3, 4], // Bastard
  "くそ野郎": [3, 4], // Shit bastard
  "てめえ": [3, 4], // You (hostile)
  "きさま": [3, 4], // You (hostile/archaic)
  "雌豚": [3, 4], // Sow/female pig
  "デブ": [1, 4], // Fatso
  "ブス": [1, 4], // Ugly (woman)
  "カス": [2, 4], // Scum/dregs
  "クズ": [2, 4], // Trash/scum
  "ゴミ": [1, 2], // Garbage
  "尻": [1, 3], // Butt/ass
  "精子": [2, 3], // Sperm
  "射精": [4, 4], // Ejaculation
  "自慰": [4, 4], // Masturbation
  "フェラ": [4, 5], // Fellatio (abbreviation)
  "淫乱": [4, 4], // Lewd/promiscuous
  "中出し": [3, 4], // Creampie
  "パイズリ": [4, 4], // Titjob
  "売女": [5, 4], // Whore
  "ふざけるな": [3, 5], // Don't mess around / fuck off
  "エロ": [2, 3], // Erotic/perverted
  "ちくび": [2, 3], // Nipple
  "ザーメン": [3, 4], // Semen (German loanword)
  "セックス": [2, 3], // Sex

  // Katakana loanword profanity (commonly used in Japanese)
  "小便": [1, 3], // Urine/piss
  "放尿": [1, 3], // Urination
  "獣性": [5, 5], // Bestiality/animal nature
  "恋物癖": [4, 4], // Fetishism
  "アナル": [3, 4], // Anal
  "アスホール": [3, 4], // Asshole
  "コック": [4, 4], // Cock
  "コックサッカー": [4, 4], // Cocksucker
  "ブロージョブ": [4, 5], // Blowjob
  "ブルシット": [3, 5], // Bullshit
  "ディルドー": [2, 3], // Dildo
  "ファゴット": [4, 4], // Faggot
  "ペニス": [4, 4], // Penis
  "プッシー": [4, 4], // Pussy
  "バギーナ": [4, 4], // Vagina
  "オーガスム": [3, 4], // Orgasm
  "オルガスム": [3, 4], // Orgasm (alternate)
  "コンドム": [1, 2], // Condom
  "マゾキスト": [1, 2], // Masochist
  "サディスト": [1, 2], // Sadist
  "シーメール": [4, 4], // Shemale
  "ニガー": [5, 5], // N-word
  "ビッチ": [3, 4], // Bitch
  "ファック": [3, 5], // Fuck
  "レイプ": [5, 5], // Rape
  "スメグマ": [3, 4], // Smegma

  // Additional Japanese profanity
  "あほんだら": [1, 4], // Idiot (Kansai)
  "うざい": [1, 3], // Annoying
  "うぜえ": [1, 3], // Annoying (rougher)
  "おまんこ": [4, 4], // Pussy (polite prefix + vulgar)
  "がいじ": [3, 4], // Disabled person (internet slang, offensive)
  "きしょい": [1, 3], // Gross/disgusting
  "きもい": [1, 3], // Disgusting/creepy
  "くそがき": [3, 5], // Shit brat
  "くそばばあ": [3, 5], // Shit old woman
  "くそじじい": [3, 5], // Shit old man
  "こじき": [3, 4], // Beggar (discriminatory)
  "このやろう": [3, 4], // You bastard
  "ざけんな": [3, 5], // Don't fuck with me
  "しね": [5, 5], // Die (hiragana variant)
  "すけべ": [3, 4], // Pervert
  "ちくしょう": [3, 4], // Damn it
  "どあほ": [1, 4], // Big idiot (Kansai)
  "とんま": [1, 4], // Dunce
  "のろま": [1, 4], // Slowpoke (insult)
  "ばかやろう": [3, 4], // Stupid bastard
  "ぶさいく": [1, 4], // Ugly
  "ぼけ": [1, 4], // Senile / idiot
  "まぬけ": [1, 4], // Fool
  "ろくでなし": [2, 4], // Good-for-nothing
  "低能": [2, 4], // Low-ability (insult)
  "売国奴": [3, 4], // Traitor
  "外道": [3, 4], // Brute/fiend
  "廃人": [3, 4], // Human waste
  "気違い": [3, 4], // Insane (offensive kanji)
  "知障": [3, 4], // Mentally disabled (abbreviation, offensive)
  "穢多": [5, 4], // Historical discriminatory term
  "糞ガキ": [3, 5], // Shit brat (kanji)
  "糞野郎": [3, 4], // Shit bastard (kanji)
  "落ちこぼれ": [1, 3], // Dropout/failure
  "陰キャ": [1, 3], // Introvert (internet insult)
  "ガイジ": [3, 4], // Disabled (katakana, internet slang)
  "キモオタ": [3, 4], // Creepy otaku
  "シコる": [4, 4], // To masturbate (internet slang)
  "ヤリチン": [5, 4], // Man-whore
  "ヤリマン": [3, 4], // Already listed variant
  "氏ね": [5, 5], // Die (internet censored form)
  "ま○こ": [3, 4], // Censored まんこ
  "ち○こ": [3, 4], // Censored ちんこ

  // クソ/糞 compounds
  "くそぼけ": [1, 4], // Shit-idiot
  "くそ女": [3, 5], // Shit woman
  "くそ男": [3, 5], // Shit man
  "くそ食らえ": [3, 5], // Eat shit
  "くそたれ": [3, 5], // Shit-drip
  "くそみそ": [3, 5], // Shit and miso (worthless)
  "くそまみれ": [3, 5], // Covered in shit
  "クソガキ": [3, 5], // Shit brat (katakana)
  "クソ野郎": [3, 4], // Shit bastard (katakana)
  "クソビッチ": [3, 5], // Shit bitch
  "クソアマ": [3, 5], // Shit woman (vulgar)
  "糞虫": [3, 5], // Shit insect
  "糞ったれ": [3, 5], // Shit-drip (kanji)

  // バカ/馬鹿 compounds
  "大馬鹿": [1, 4], // Great fool
  "馬鹿たれ": [1, 4], // Stupid drip
  "馬鹿野郎": [3, 4], // Stupid bastard
  "馬鹿者": [1, 4], // Stupid person
  "馬鹿女": [1, 4], // Stupid woman
  "馬鹿男": [1, 4], // Stupid man
  "馬鹿面": [1, 4], // Stupid face
  "バカタレ": [1, 4], // Stupid drip (katakana)
  "ばかもの": [1, 4], // Stupid person (hiragana)
  "ドバカ": [1, 4], // Huge idiot

  // Discriminatory terms
  "非人": [5, 4], // Non-person (historical slur)
  "チョン": [4, 4], // Slur for Koreans
  "部落民": [4, 4], // Burakumin (discriminatory)
  "毛唐": [4, 4], // Slur for foreigners
  "三国人": [4, 4], // Derogatory for foreigners
  "土人": [4, 4], // Primitive person (slur)
  "支那": [5, 5], // Derogatory for China
  "支那人": [5, 5], // Derogatory for Chinese people
  "チャンコロ": [4, 4], // Slur for Chinese
  "露助": [4, 4], // Slur for Russians
  "ジャップ": [4, 4], // Jap (self-referential slur)
  "ガイジン": [3, 4], // Foreigner (can be derogatory)
  "不法滞在者": [3, 4], // Illegal alien (derogatory use)

  // Sexual terms
  "おめこ": [4, 4], // Female genitalia (Kansai)
  "ぼぼ": [4, 4], // Sexual intercourse (dialectal)
  "やる": [4, 4], // To do it (sexual)
  "はめる": [4, 4], // To insert (sexual)
  "挿入": [4, 4], // Insertion (sexual)
  "膣": [4, 4], // Vagina
  "陰茎": [4, 4], // Penis
  "勃起": [4, 4], // Erection
  "包茎": [4, 4], // Phimosis (used as insult)
  "童貞": [4, 4], // Virgin (male, used as insult)
  "痴女": [4, 4], // Female pervert
  "淫売": [5, 4], // Prostitute
  "売春": [5, 4], // Prostitution
  "援交": [5, 4], // Compensated dating
  "風俗": [4, 4], // Sex industry
  "ソープ": [4, 4], // Soapland (sex establishment)
  "デリヘル": [4, 4], // Delivery health (escort service)
  "パンチラ": [4, 4], // Panty shot
  "手コキ": [4, 4], // Handjob
  "手マン": [4, 4], // Manual stimulation
  "潮吹き": [4, 4], // Squirting
  "青姦": [4, 4], // Outdoor sex
  "乱交": [4, 4], // Orgy
  "痴漢行為": [4, 4], // Groping acts
  "陰毛": [4, 4], // Pubic hair
  "陰部": [4, 4], // Genitals
  "陰唇": [4, 4], // Labia
  "陰嚢": [4, 4], // Scrotum
  "肉便器": [4, 4], // Meat toilet (extremely vulgar)
  "玉舐め": [4, 4], // Ball licking
  "顔射": [4, 4], // Facial (sexual)
  "口内射精": [4, 4], // Oral ejaculation
  "二穴": [4, 4], // Double penetration
  "素股": [4, 4], // Intercrural sex
  "本番": [4, 4], // Full sex service
  "逆レイプ": [5, 5], // Reverse rape
  "輪姦": [5, 5], // Gang rape
  "近親相姦": [5, 5], // Incest
  "獣姦": [5, 5], // Bestiality
  "屍姦": [4, 4], // Necrophilia
  "盗撮": [4, 4], // Voyeurism/hidden camera
  "痴態": [4, 4], // Lewd behavior
  "淫行": [4, 4], // Obscene acts
  "猥褻": [4, 4], // Obscenity
  "不倫": [4, 4], // Adultery
  "姦通": [4, 4], // Adultery (legal term)
  "ペドフィリア": [5, 5], // Pedophilia
  "ロリコン": [4, 4], // Lolicon
  "ショタコン": [4, 4], // Shotacon
  "処女膜": [4, 4], // Hymen
  "精液": [2, 3], // Semen
  "愛液": [4, 4], // Sexual fluids
  "潮": [4, 4], // Squirt
  "オナニー": [4, 4], // Masturbation
  "オナホ": [4, 4], // Masturbation toy
  "バイブ": [4, 4], // Vibrator
  "ローター": [4, 4], // Rotor (sex toy)
  "ぶっかけ": [4, 4], // Bukkake

  // Internet slang insults
  "DQN": [2, 3], // Delinquent (internet slang)
  "ニート": [2, 3], // NEET
  "情弱": [2, 3], // Information-weak
  "池沼": [2, 3], // Pond-swamp (sounds like 知障)
  "きめえ": [2, 3], // Gross (slang)
  "消えろ": [2, 3], // Disappear/get lost
  "タヒね": [5, 5], // Die (censored form)
  "4ね": [5, 5], // Die (number substitution)
  "逝ってよし": [5, 5], // Go die (2ch slang)
  "糞スレ": [3, 5], // Shit thread
  "厨房": [2, 3], // Middle schooler (insult)
  "厨": [2, 3], // Abbreviation of 厨房
  "工作員": [2, 3], // Shill (internet)
  "在日": [2, 3], // Resident Korean (derogatory use)
  "チー牛": [2, 3], // Cheese beef (insult for nerds)
  "こどおじ": [2, 3], // Adult living with parents
  "こどおば": [2, 3], // Female adult living with parents
  "ハゲ": [2, 3], // Baldy
  "禿げ": [2, 3], // Bald (kanji)
  "インキャ": [2, 3], // Introvert (katakana insult)
  "ウェーイ": [2, 3], // Party people (derogatory)
  "ナマポ": [2, 3], // Welfare recipient (derogatory)
  "底辺": [2, 3], // Bottom tier (insult)
  "ゆとり": [2, 3], // Yutori generation (insult)
  "老害": [2, 3], // Old person nuisance
  "ま〜ん": [2, 3], // Derogatory for women
  "まーん": [2, 3], // Derogatory for women
  "メンヘラ": [2, 3], // Mentally ill (derogatory)
  "ヤリ目": [2, 3], // Only after sex

  // Compound insults
  "このくそやろう": [3, 4], // You shit bastard
  "てめえこの野郎": [3, 4], // You bastard (emphatic)
  "ぶっ殺す": [1, 4], // I'll kill you
  "ぶっ飛ばす": [1, 4], // I'll knock you out
  "ぶっ壊す": [1, 4], // I'll destroy you
  "殺すぞ": [1, 4], // I'll kill you
  "死にやがれ": [5, 5], // Die (vulgar imperative)
  "死にさらせ": [5, 5], // Die (Kansai vulgar)
  "くたばりやがれ": [1, 4], // Drop dead (vulgar)
  "消え失せろ": [1, 4], // Get the hell out
  "失せろ": [1, 4], // Get lost
  "うせろ": [1, 3], // Get lost (casual)
  "黙れ": [1, 4], // Shut up
  "だまれ": [1, 4], // Shut up (hiragana)
  "うるせえ": [1, 4], // Shut up (rough)
  "すっこんでろ": [1, 4], // Stay out of it / get lost
  "地獄に落ちろ": [1, 4], // Go to hell
  "このブス": [1, 4], // You ugly (to women)
  "このデブ": [1, 4], // You fatso
  "このカス": [1, 4], // You scum
  "このクズ": [1, 4], // You trash
  "このゴミ": [1, 4], // You garbage
  "このハゲ": [1, 4], // You baldy
  "この低能": [1, 4], // You lowlife
  "クソムシ": [3, 5], // Shit bug

  // Kansai dialect insults
  "アホくさ": [1, 4], // Stupid/ridiculous
  "しばくぞ": [1, 4], // I'll beat you up
  "いてまうぞ": [1, 4], // I'll mess you up
  "いわすぞ": [1, 4], // I'll hurt you
  "ドアホウ": [1, 4], // Big idiot (katakana)
  "アホンダラ": [1, 4], // Idiot (katakana)
  "ボケナス": [1, 4], // Idiot eggplant
  "すかたん": [1, 4], // Fool (Kansai)
  "たわけ": [1, 4], // Fool (Nagoya/Kansai)
  "たわけもの": [1, 4], // Foolish person
  "ボケ": [1, 4], // Idiot (katakana)
  "ドボケ": [1, 4], // Big idiot

  // Katakana loanwords (sexual/vulgar)
  "クリトリス": [3, 4], // Clitoris
  "ヴァギナ": [4, 4], // Vagina
  "フェラチオ": [4, 5], // Fellatio
  "クンニ": [3, 4], // Cunnilingus
  "クンニリングス": [3, 4], // Cunnilingus
  "アナルセックス": [3, 4], // Anal sex
  "ピストン": [3, 4], // Piston (sexual thrusting)
  "オーラルセックス": [4, 5], // Oral sex
  "マスターベーション": [4, 4], // Masturbation
  "ポルノ": [2, 3], // Porno
  "イラマチオ": [3, 4], // Irrumatio
  "スカトロ": [3, 4], // Scatology
  "SMプレイ": [3, 4], // SM play
  "ボンデージ": [3, 4], // Bondage
  "テスティクル": [4, 4], // Testicle
  "ニップル": [3, 4], // Nipple
  "エレクション": [3, 4], // Erection
  "エジャキュレーション": [3, 4], // Ejaculation

  // Yakuza/tough guy language
  "こら": [1, 3], // Hey! (aggressive)
  "なめんな": [2, 4], // Don't look down on me
  "なめるな": [2, 4], // Don't look down on me
  "なめんなよ": [2, 4], // Don't underestimate me
  "調子乗るな": [4, 4], // Don't get cocky
  "調子こいてんじゃねえぞ": [3, 4], // Don't get too full of yourself
  "おどれ": [2, 4], // You (threatening, Kansai)
  "われ": [2, 3], // You (threatening, Kansai)
  "なんじゃわれ": [5, 5], // What do you want (threatening)
  "いてこますぞ": [3, 5], // I'll beat the shit out of you
  "しょっぴくぞ": [3, 4], // I'll drag you in
  "かたにはめる": [3, 4], // To frame someone
  "しめる": [3, 4], // To punish/squeeze
  "しめてやる": [3, 4], // I'll punish you
  "やっちまえ": [3, 4], // Do him in
  "けじめつけろ": [3, 4], // Settle this (yakuza)
  "指詰めろ": [3, 4], // Cut off your finger
  "シャブ": [3, 4], // Meth (drugs)
  "ヤク": [3, 4], // Drugs
  "ヤク中": [3, 4], // Drug addict
  "覚醒剤": [1, 2], // Stimulant drugs

  // Additional body-part vulgarities
  "ケツの穴": [3, 4], // Asshole
  "肛門": [1, 2], // Anus
  "クソ穴": [3, 5], // Shit hole
  "乳首": [2, 3], // Nipple
  "巨乳": [4, 3], // Big breasts
  "貧乳": [3, 4], // Flat chest (insult)
  "ちっぱい": [3, 4], // Flat chest (slang insult)
  "デカチン": [4, 4], // Big penis
  "短小": [4, 4], // Small penis (insult)
  "早漏": [2, 3], // Premature ejaculation (insult)
  "遅漏": [2, 3], // Delayed ejaculation
  "インポ": [2, 3], // Impotent
  "ふぐり": [4, 4], // Testicles (archaic)

  // Additional クソ/糞 compounds
  "クソみたい": [3, 5], // Shit-like
  "クソジジイ": [3, 5], // Shit old man (katakana)
  "クソババア": [3, 5], // Shit old woman (katakana)
  "クソデブ": [1, 4], // Shit fatso
  "クソブス": [1, 4], // Shit ugly
  "クソハゲ": [3, 5], // Shit baldy
  "クソ真面目": [3, 5], // Shit-serious (annoyingly serious)
  "くそったれめ": [3, 5], // Damn shithead
  "糞ジジイ": [3, 5], // Shit old man (kanji+katakana)
  "糞ババア": [3, 5], // Shit old woman (kanji+katakana)
  "糞ビッチ": [3, 5], // Shit bitch (kanji+katakana)
  "糞デブ": [1, 4], // Shit fatso (kanji)
  "糞食らえ": [3, 5], // Eat shit (kanji)
  "糞味噌": [3, 5], // Shit and miso (kanji, worthless)
  "クソメス": [3, 5], // Shit female (animal term, vulgar)
  "クソオス": [3, 5], // Shit male (animal term, vulgar)
  "クソニート": [3, 5], // Shit NEET
  "クソ雑魚": [1, 4], // Shit weakling
  "くそでぶ": [1, 4], // Shit fatso (hiragana)
  "くそぶす": [1, 4], // Shit ugly (hiragana)
  "くそはげ": [3, 5], // Shit baldy (hiragana)

  // Additional バカ/馬鹿 compounds
  "大バカ者": [1, 4], // Great fool
  "バカヤロー": [3, 4], // Stupid bastard (elongated)
  "馬鹿にすんな": [1, 4], // Don't make a fool of me
  "馬鹿にすな": [1, 3], // Don't make a fool of me (casual)
  "馬鹿丸出し": [1, 4], // Fully exposed idiot
  "馬鹿げてる": [1, 4], // Absurd/stupid
  "馬鹿らしい": [1, 4], // Stupid/ridiculous
  "バカ面": [1, 4], // Stupid face (katakana)
  "バカ女": [1, 4], // Stupid woman (katakana)
  "バカ男": [1, 4], // Stupid man (katakana)
  "バカども": [1, 4], // Stupid people (plural)
  "バカの一つ覚え": [1, 4], // One-trick pony (idiot)
  "バカにしやがって": [3, 5], // How dare you mock me
  "馬鹿チン": [1, 4], // Stupid dick
  "馬鹿め": [1, 4], // You fool
  "バカめ": [1, 4], // You fool (katakana)

  // Additional discriminatory terms
  "朝鮮人": [3, 4], // Korean person (derogatory context)
  "ヨツ": [3, 4], // Four (burakumin slur)
  "四つ": [3, 4], // Four (burakumin slur, kanji)
  "エタ": [3, 4], // Historical outcaste slur (katakana)
  "ヒニン": [3, 4], // Non-person (katakana)
  "鬼畜米英": [3, 4], // Barbaric Americans/British
  "半島人": [3, 4], // Peninsula person (Korean slur)
  "ぺクチョン": [3, 4], // Korean caste slur
  "台湾人": [3, 4], // Taiwanese (derogatory context)
  "蛮族": [3, 4], // Barbarian tribe
  "劣等民族": [5, 5], // Inferior race
  "白豚": [3, 4], // White pig (anti-Western slur)
  "黒んぼ": [5, 4], // N-word equivalent (Japanese)
  "くろんぼ": [5, 4], // N-word equivalent (hiragana)
  "クロンボ": [5, 4], // N-word equivalent (katakana)
  "南蛮人": [3, 4], // Southern barbarian (historical slur)
  "鮮人": [3, 4], // Korean person (derogatory abbreviation)
  "不逞鮮人": [3, 4], // Lawless Korean (historical slur)
  "ヒトモドキ": [5, 5], // Sub-human / human-like creature
  "ナマモノ": [5, 5], // Raw creature (dehumanizing)

  // Additional sexual terms
  "足コキ": [4, 4], // Footjob
  "尻コキ": [4, 4], // Buttjob
  "緊縛": [4, 4], // Bondage/rope play
  "調教": [4, 4], // Training (BDSM)
  "奴隷": [4, 4], // Slave (sexual context)
  "ご奉仕": [4, 4], // Service (sexual context)
  "寝取り": [4, 4], // Cuckolding (male)
  "寝取られ": [4, 4], // Being cuckolded
  "露出": [4, 4], // Exposure/exhibitionism
  "露出狂": [4, 4], // Exhibitionist
  "覗き": [4, 4], // Peeping
  "覗き魔": [4, 4], // Peeping tom
  "夜這い": [4, 4], // Night crawling (sexual)
  "ソープランド": [4, 4], // Soapland (full name)
  "ヘルス": [4, 4], // Health (sex establishment type)
  "ファッションヘルス": [4, 4], // Fashion health (sex service)
  "ピンサロ": [4, 4], // Pink salon (sex establishment)
  "キャバクラ": [2, 3], // Cabaret club (hostess bar)
  "おさわり": [4, 4], // Touching (sexual context)
  "抜きあり": [4, 4], // With ejaculation (sex service)
  "生本番": [4, 4], // Raw/unprotected sex
  "生中出し": [4, 4], // Raw creampie
  "生挿入": [4, 4], // Raw insertion
  "二穴同時": [4, 4], // Double penetration simultaneous
  "三穴": [4, 4], // Triple penetration
  "アヘ顔": [4, 4], // Ahegao face
  "精飲": [4, 4], // Semen drinking
  "飲精": [4, 4], // Drinking semen
  "ゴックン": [4, 4], // Swallowing (sexual)
  "放尿プレイ": [4, 4], // Urination play
  "聖水": [4, 4], // Holy water (urine, sexual)
  "浣腸": [4, 4], // Enema (sexual)
  "浣腸プレイ": [4, 4], // Enema play
  "触手": [4, 4], // Tentacle (sexual)
  "母乳": [4, 4], // Breast milk (sexual context)
  "搾乳": [4, 4], // Milking (sexual)
  "乳搾り": [4, 4], // Breast milking
  "パイパン": [4, 4], // Shaved genitals
  "剃毛": [4, 4], // Shaving (sexual)
  "着エロ": [4, 4], // Clothed erotica
  "ハメ撮り": [4, 4], // POV sex filming
  "個撮": [4, 4], // Private photo shoot (sexual)
  "裏ビデオ": [4, 4], // Underground video (porn)
  "無修正": [4, 4], // Uncensored (porn)
  "モザイク無し": [4, 4], // No mosaic (uncensored porn)
  "エロ動画": [4, 4], // Erotic video
  "エロ画像": [4, 4], // Erotic image
  "エロ漫画": [4, 4], // Erotic manga
  "エロゲー": [4, 4], // Erotic game
  "エロ同人": [4, 4], // Erotic doujinshi
  "抜ける": [4, 4], // Can fap to this
  "抜いた": [4, 4], // Fapped to this
  "おかず": [4, 4], // Fap material (lit. side dish)
  "性奴隷": [4, 4], // Sex slave
  "肉奴隷": [4, 4], // Meat slave
  "便所": [4, 4], // Toilet (derogatory for person)
  "公衆便所": [4, 4], // Public toilet (extremely vulgar)
  "種付け": [4, 4], // Impregnation (vulgar)
  "孕ませ": [4, 4], // Getting pregnant (vulgar/fetish)
  "妊娠": [4, 4], // Pregnancy (fetish context)
  "母子相姦": [5, 5], // Mother-son incest
  "父子相姦": [1, 4], // Father-daughter incest
  "兄妹相姦": [5, 5], // Sibling incest

  // Additional internet slang
  "基地外": [4, 5], // Crazy (kanji substitution for きちがい)
  "キチガイ": [2, 3], // Crazy (katakana)
  "キチ": [2, 3], // Crazy (abbreviation)
  "糖質": [2, 3], // Schizophrenia (derogatory abbreviation)
  "アスペ": [2, 3], // Asperger's (derogatory)
  "発達": [2, 3], // Developmental disability (derogatory abbreviation)
  "発達障害": [2, 3], // Developmental disability (used as insult)
  "自閉": [2, 3], // Autism (used as insult)
  "知的障害": [2, 3], // Intellectual disability (used as insult)
  "ガチャ外れ": [2, 3], // Lost the gacha (bad genes)
  "親ガチャ失敗": [2, 3], // Failed parent gacha
  "ワナビー": [2, 3], // Wannabe (derogatory)
  "にわか": [2, 3], // Poser/fake fan
  "エアプ": [2, 3], // Air play (pretending to know)
  "ゴミクズ": [2, 3], // Trash scum
  "人間のクズ": [2, 3], // Human trash
  "社会のゴミ": [2, 3], // Society's garbage
  "生きてる価値なし": [2, 3], // Not worth living
  "生ゴミ": [2, 3], // Raw garbage (insult)
  "産廃": [2, 3], // Industrial waste (insult for person)
  "クソリプ": [3, 5], // Shit reply
  "クソレス": [3, 5], // Shit response
  "信者": [2, 3], // Believer/fanboy (derogatory)
  "アンチ": [2, 3], // Anti/hater
  "粘着": [3, 3], // Stalker/persistent harasser
  "荒らし": [2, 3], // Troll/griefer
  "炎上": [2, 3], // Flaming (internet)
  "特定": [2, 3], // Doxxing
  "晒し": [2, 3], // Exposing/doxxing
  "叩き": [2, 3], // Bashing
  "祭り": [2, 3], // Festival (internet mob attack)
  "ステマ": [2, 3], // Stealth marketing (derogatory)
  "乞食": [2, 3], // Beggar (internet: freeloader)
  "割れ厨": [2, 3], // Piracy enthusiast
  "ニコ厨": [2, 3], // Niconico addict (derogatory)
  "パヨク": [2, 3], // Derogatory for leftist
  "ネトウヨ": [2, 3], // Internet right-winger (derogatory)
  "ネトサヨ": [2, 3], // Internet left-winger (derogatory)
  "売国": [2, 3], // Selling out the country
  "反日": [2, 3], // Anti-Japan (used as slur)
  "非国民": [2, 3], // Non-citizen/traitor
  "国賊": [2, 3], // National traitor
  "負け犬": [1, 4], // Loser (lit. losing dog)
  "負け組": [1, 4], // Loser group
  "童貞くん": [2, 3], // Virgin boy (mocking)
  "処女厨": [2, 3], // Virgin-obsessed (derogatory)
  "高齢童貞": [2, 3], // Elderly virgin (insult)
  "魔法使い": [2, 3], // Wizard (30+ year old virgin)
  "喪女": [2, 3], // Unpopular woman
  "喪男": [2, 3], // Unpopular man
  "非リア": [2, 3], // Non-real-life (no social life)
  "リア充爆発しろ": [2, 3], // Normies should explode
  "ヲタ": [2, 3], // Otaku (derogatory variant)
  "キモヲタ": [2, 3], // Creepy otaku (variant)
  "腐女子": [2, 3], // Fujoshi (used derogatorily)
  "萌え豚": [2, 3], // Moe pig (insult for otaku)
  "ブヒる": [2, 3], // To oink (acting like moe pig)
  "ドルオタ": [2, 3], // Idol otaku (derogatory)
  "ジャニオタ": [2, 3], // Johnny's otaku (derogatory)
  "V豚": [2, 3], // VTuber pig (derogatory)
  "バチャ豚": [2, 3], // VTuber pig (variant)
  "スパチャ乞食": [2, 3], // Superchat beggar
  "弱者男性": [2, 3], // Weak male (internet insult)
  "弱男": [2, 3], // Weak man (abbreviation)
  "強者女性": [2, 3], // Strong female (sarcastic insult)
  "フェミ": [2, 3], // Feminist (derogatory)
  "ツイフェミ": [2, 3], // Twitter feminist (derogatory)
  "ミサンドリー": [2, 3], // Misandry
  "ミソジニー": [2, 3], // Misogyny
  "マンさん": [4, 3], // Ms. pussy (derogatory for women)
  "ちんさん": [4, 3], // Mr. dick (derogatory for men)
  "子供部屋おじさん": [2, 3], // Room uncle (man living with parents)
  "子供部屋おばさん": [2, 3], // Room aunt (woman living with parents)
  "無産様": [2, 3], // Childless woman (sarcastic)
  "種無し": [2, 3], // Seedless (infertile man, insult)
  "石女": [2, 3], // Barren woman (archaic insult)
  "穀潰し": [2, 3], // Grain crusher (useless person)
  "引きこもり": [2, 3], // Shut-in (used as insult)
  "ヒキニート": [2, 3], // Shut-in NEET
  "社畜": [2, 3], // Corporate slave (self-deprecating/insult)
  "奴隷労働": [2, 3], // Slave labor
  "ブラック企業": [2, 3], // Black company (exploitative employer)

  // 2ch/5ch culture terms
  "香具師": [3, 4], // Yakushi (2ch term for person)
  "藻前": [3, 4], // You (2ch corrupted form)
  "漏れ": [3, 4], // Me (2ch corrupted form)
  "逝く": [5, 5], // To die/come (2ch)
  "必死だな": [3, 4], // You're desperate (mockery)
  "顔真っ赤": [3, 4], // Face turning red (mocking)
  "効いてる効いてる": [3, 4], // It's working (mockery)
  "涙目": [3, 4], // Teary eyes (mockery)
  "発狂": [3, 4], // Going crazy (mockery)
  "ファビョる": [3, 4], // To rage (from Korean 화병)
  "火病": [3, 4], // Korean rage disease (slur)
  "半島に帰れ": [3, 4], // Go back to the peninsula (slur)
  "国に帰れ": [3, 4], // Go back to your country
  "嫌儲": [3, 4], // Anti-monetization (board culture)
  "まとめカス": [3, 4], // Summary site scum
  "対立煽り": [3, 4], // Conflict incitement
  "自演乙": [3, 4], // Self-reply, good job (sarcasm)
  "構ってちゃん": [3, 4], // Attention seeker
  "かまちょ": [3, 4], // Attention seeker (abbreviation)
  "地雷": [3, 4], // Landmine (problematic person)
  "地雷女": [3, 4], // Landmine woman
  "地雷男": [3, 4], // Landmine man
  "メンヘラ女": [3, 4], // Mentally ill woman (derogatory)
  "ヤンデレ": [3, 4], // Yandere (used derogatorily)
  "サイコパス": [3, 4], // Psychopath (insult)
  "ソシオパス": [3, 4], // Sociopath (insult)
  "ガイジムーブ": [3, 4], // Disabled person move (offensive)

  // Kansai/Osaka dialect additions
  "しばいたろか": [3, 4], // Shall I beat you up
  "いてもうたるぞ": [3, 4], // I'll mess you up
  "あほか": [1, 4], // Are you stupid
  "アホちゃう": [1, 4], // Aren't you stupid
  "アホかいな": [1, 4], // What an idiot
  "しょうもない": [1, 3], // Worthless/pathetic
  "しょうもな": [1, 3], // Worthless (casual)
  "けったいな": [3, 4], // Strange/weird (negative)
  "ごうつくばり": [3, 4], // Greedy person
  "がめつい": [3, 4], // Greedy/stingy
  "どたま": [3, 4], // Head (Kansai vulgar)
  "どたまかち割るぞ": [3, 4], // I'll crack your skull
  "いちびり": [3, 4], // Show-off (Kansai)
  "いちびるな": [3, 4], // Stop showing off
  "あんじょう": [1, 2], // Properly (threatening context)
  "ワレなにしとんじゃ": [2, 4], // What are you doing (threatening)
  "しばき回すぞ": [3, 4], // I'll beat you all around

  // Kyushu dialect insults
  "たいがいにせえ": [2, 4], // Enough already (threatening)
  "きさん": [1, 4], // You (Kyushu hostile)
  "ばってん": [1, 1], // But (used in threatening context)
  "なんばしよっと": [1, 4], // What are you doing (aggressive)
  "しゃーしい": [1, 4], // Annoying (Kyushu)
  "のさばるな": [1, 4], // Don't be arrogant
  "ふうけもん": [1, 4], // Fool (Kyushu dialect)
  "ぬすっと": [1, 4], // Thief (dialectal)
  "がまだす": [1, 1], // To endure (threatening context)
  "ちゃげなか": [1, 4], // Pathetic (Kyushu)

  // Hokkaido/Tohoku dialect insults
  "たげ": [1, 4], // Very (Tohoku intensifier, with insults)
  "はんかくさい": [1, 4], // Stupid/half-baked (Hokkaido)
  "ごんぼほる": [1, 4], // To throw a tantrum (Tohoku)
  "じょっぱり": [1, 4], // Stubborn person (Tohoku, negative)
  "べこ": [1, 4], // Cow (used as insult)

  // Additional yakuza/tough language
  "かます": [3, 4], // To hit/attack
  "かましたろか": [3, 4], // Shall I hit you
  "どつく": [3, 4], // To punch
  "どついたろか": [3, 4], // Shall I punch you
  "ぶちのめす": [3, 4], // To beat the crap out of
  "ぶちのめすぞ": [3, 4], // I'll beat the crap out of you
  "ぶん殴る": [3, 4], // To punch hard
  "ぶん殴るぞ": [3, 4], // I'll punch you
  "張り倒す": [3, 4], // To slap down
  "張り倒すぞ": [3, 4], // I'll slap you down
  "叩きのめす": [3, 4], // To beat senseless
  "潰す": [3, 4], // To crush
  "潰してやる": [3, 4], // I'll crush you
  "沈めるぞ": [3, 4], // I'll sink you (kill)
  "沈めてやる": [3, 4], // I'll sink you
  "消すぞ": [3, 4], // I'll erase you (kill)
  "始末する": [3, 4], // To dispose of (kill)
  "落とし前": [3, 4], // Settling accounts (yakuza)
  "落とし前つけろ": [3, 4], // Settle your debts
  "カタギ": [1, 2], // Civilian (non-yakuza)
  "堅気": [1, 2], // Civilian (kanji)
  "極道": [1, 2], // Yakuza way
  "舎弟": [1, 2], // Younger brother (yakuza subordinate)
  "兄貴": [1, 2], // Elder brother (yakuza senior)
  "親分": [1, 2], // Boss (yakuza)
  "鉄砲玉": [3, 4], // Bullet (hitman)
  "チャカ": [3, 4], // Gun (slang)
  "ドス": [3, 4], // Knife (yakuza slang)
  "ムショ": [1, 2], // Prison
  "前科もん": [3, 4], // Ex-con
  "ヤクザ": [3, 4], // Yakuza
  "ヤクザもん": [3, 4], // Yakuza person
  "チンピラ": [3, 4], // Thug/punk
  "ゴロツキ": [3, 4], // Hoodlum
  "ならず者": [3, 4], // Outlaw/rogue

  // Additional katakana loanwords (vulgar)
  "スリーサム": [3, 4], // Threesome
  "フォーサム": [3, 4], // Foursome
  "グローリーホール": [3, 4], // Glory hole
  "ストリッパー": [3, 4], // Stripper
  "ストリップ": [3, 4], // Strip
  "エスコート": [3, 4], // Escort
  "コールガール": [3, 4], // Call girl
  "ソドミー": [3, 4], // Sodomy
  "ニンフォマニア": [3, 4], // Nymphomania
  "インポテンツ": [3, 4], // Impotence
  "ヘンタイ": [3, 4], // Hentai (katakana)
  "ペドフィル": [5, 5], // Pedophile
  "レズビアン": [3, 4], // Lesbian (can be derogatory)
  "ホモ": [3, 4], // Homo (derogatory)
  "ゲイ": [3, 4], // Gay (can be derogatory)
  "オカマ": [3, 4], // Effeminate man / drag (derogatory)
  "おかま": [3, 4], // Effeminate man (hiragana)
  "ニューハーフ": [3, 4], // Newhalf (trans, can be derogatory)
  "おなべ": [3, 4], // Masculine woman (derogatory)
  "レズ": [3, 4], // Lesbian (abbreviation, derogatory)
  "ホモ野郎": [3, 4], // Homo bastard
  "オカマ野郎": [3, 4], // Effeminate bastard
  "バイセクシャル": [3, 4], // Bisexual (derogatory context)

  // Threat and violence expressions
  "殺してやる": [5, 5], // I'll kill you
  "殺すからな": [5, 5], // I'll kill you (warning)
  "首吊って死ね": [5, 5], // Hang yourself
  "飛び降りろ": [5, 5], // Jump off (suicide)
  "手首切れ": [5, 5], // Cut your wrists
  "練炭焚け": [5, 5], // Light charcoal (suicide method)
  "樹海行け": [5, 5], // Go to Aokigahara (suicide forest)
  "生きる価値ない": [5, 5], // Not worth living
  "存在価値なし": [5, 5], // No value in existing
  "お前なんか死ね": [5, 5], // Someone like you should die
  "産まれてくんな": [5, 5], // Shouldn't have been born
  "目障り": [5, 5], // Eyesore
  "耳障り": [5, 5], // Ear-sore (annoying)
  "虫酸が走る": [5, 5], // Makes my skin crawl
  "反吐が出る": [5, 5], // Makes me vomit
  "胸糞悪い": [5, 5], // Chest-shit-bad (disgusting)
  "腹立つ": [5, 5], // Infuriating

  // Derogatory terms for social groups
  "ニート野郎": [3, 4], // NEET bastard
  "引きこもり野郎": [3, 4], // Shut-in bastard
  "生活保護": [3, 4], // Welfare (used as insult)
  "ナマポ野郎": [3, 4], // Welfare bastard
  "フリーター": [3, 4], // Part-timer (used derogatorily)
  "派遣": [3, 4], // Temp worker (used derogatorily)
  "底辺職": [3, 4], // Bottom-tier job (insult)
  "Fラン": [3, 4], // F-rank (low-tier university)
  "高卒": [3, 4], // High school grad (used as insult)
  "中卒": [3, 4], // Middle school grad (insult)
  "低学歴": [3, 4], // Low education
  "三流": [3, 4], // Third-rate
  "田舎者": [3, 4], // Country bumpkin
  "かっぺ": [3, 4], // Country bumpkin (slang)
  "芋": [3, 4], // Potato (unsophisticated person)
  "ダサい": [3, 4], // Uncool/lame
  "ダサ": [3, 4], // Uncool (abbreviation)
  "貧乏人": [3, 4], // Poor person (insult)
  "乞食野郎": [3, 4], // Beggar bastard
  "ホームレス": [3, 4], // Homeless (used as insult)
  "浮浪者": [3, 4], // Vagrant (derogatory)
  "不審者": [3, 4], // Suspicious person
  "変質者": [3, 4], // Pervert/deviant
  "犯罪者": [3, 4], // Criminal (used as slur)
  "前科者": [3, 4], // Person with criminal record
  "性犯罪者": [3, 4], // Sex offender
  "ストーカー": [3, 4], // Stalker
  "クレーマー": [3, 4], // Complainer (derogatory)
  "モンペ": [3, 4], // Monster parent
  "毒親": [3, 4], // Toxic parent

  // Additional compound insults
  "このくそったれ": [3, 5], // You shithead
  "このくそがき": [3, 5], // You shit brat
  "この糞野郎": [3, 4], // You shit bastard
  "死ねよ": [5, 5], // Just die
  "死ねば": [5, 5], // If you'd just die
  "死ねカス": [5, 5], // Die, scum
  "死ねクズ": [5, 5], // Die, trash
  "死ねゴミ": [5, 5], // Die, garbage
  "くそ死ね": [5, 5], // Shit-die
  "きもい死ね": [5, 5], // Disgusting, die
  "うざい死ね": [5, 5], // Annoying, die
  "お前が死ね": [5, 5], // You die
  "ぶっころ": [1, 4], // Gonna kill (abbreviation)
  "ぶっとばすぞ": [1, 4], // I'll knock you out
  "ぶちころすぞ": [5, 5], // I'll beat you to death
  "タコ": [1, 4], // Octopus (insult for bald/stupid)
  "このタコ": [1, 4], // You octopus (insult)
  "すっとこどっこい": [1, 4], // Bumbling fool
  "おたんこなす": [1, 4], // Clumsy fool
  "へなちょこ": [1, 4], // Wimp/weakling
  "へっぽこ": [1, 4], // Incompetent
  "ぽんこつ": [1, 4], // Broken/useless
  "うんこ": [1, 4], // Poop
  "うんこたれ": [1, 4], // Poop-drip
  "うんこ野郎": [3, 4], // Poop bastard
  "クソうんこ": [3, 5], // Shit poop
  "糞尿": [3, 5], // Shit and piss
  "ションベン": [1, 4], // Piss
  "ションベンたれ": [1, 4], // Piss-drip (weakling)
  "小僧": [1, 4], // Brat (derogatory)
  "ガキ": [1, 4], // Brat
  "このガキ": [1, 4], // You brat
  "餓鬼": [1, 4], // Hungry ghost / brat (kanji)
  "ゲス": [1, 4], // Lowlife/scum
  "ゲス野郎": [3, 4], // Scum bastard
  "下衆": [1, 4], // Lowlife (kanji)
  "下種": [1, 4], // Lowlife (variant kanji)
  "外様": [1, 4], // Outsider (derogatory)
  "人でなし": [1, 4], // Inhuman person
  "鬼畜": [1, 4], // Demonic/brutal
  "畜生め": [1, 4], // Damn beast
  "けだもの": [1, 4], // Beast (for a person)
  "人非人": [1, 4], // Inhuman being
  "恥知らず": [1, 4], // Shameless person
  "面汚し": [1, 4], // Disgrace
  "穀潰": [1, 4], // Grain waster (useless person)
  "給料泥棒": [1, 4], // Salary thief
  "税金泥棒": [1, 4], // Tax thief
  "能なし": [1, 4], // Incompetent
  "役立たず": [1, 4], // Useless person
  "甲斐性なし": [1, 4], // Worthless (no ambition)
  "意気地なし": [1, 4], // Coward
  "根性なし": [1, 4], // No guts
  "腰抜け": [1, 4], // Coward (lit. waist-fallen)
  "弱虫": [1, 4], // Weakling/coward
  "泣き虫": [1, 4], // Crybaby
  "いくじなし": [1, 4], // Coward/spineless
  "玉なし": [1, 4], // No balls (coward)

  // Romanized Japanese profanity (romaji input)
  "kuso": [3, 5], // Shit/damn
  "baka": [1, 5], // Idiot/fool
  // "shine": [5, 5], // Die — false positive: extremely common English word ("sunshine", "let it shine")
  "shi ne": [5, 5], // Die (spaced)
  "chikusho": [3, 5], // Damn it
  "chikushou": [3, 5], // Damn it (variant)
  "manko": [4, 5], // Pussy (vulgar)
  "chinko": [4, 5], // Penis (vulgar)
  "chinpo": [4, 5], // Penis (vulgar)
  "chinpoko": [4, 5], // Penis (childish variant)
  "chinchin": [4, 5], // Penis (childish)
  "oppai": [4, 5], // Breasts
  "kintama": [4, 5], // Testicles
  "yariman": [3, 5], // Slut
  "yarichin": [5, 5], // Man-whore
  "hentai": [3, 4], // Pervert
  "chikan": [3, 5], // Groper/molester
  "kisama": [3, 5], // You (hostile)
  "temee": [3, 5], // You (hostile)
  "temae": [3, 5], // You (hostile, variant)
  "konoyaro": [3, 5], // You bastard
  "bakayaro": [3, 5], // Stupid bastard
  "bakayarou": [3, 5], // Stupid bastard (variant)
  "kusottare": [3, 5], // Shithead
  "kutabare": [3, 5], // Drop dead
  "fuzakenna": [3, 5], // Don't mess around
  "fuzakeruna": [3, 5], // Don't mess around (variant)
  "zakenna": [3, 5], // Don't fuck with me
  // "aho": [1, 5], // commented out — severity 1, very low signal
  "ahondara": [1, 5], // Idiot (Kansai)
  "doaho": [1, 5], // Big idiot (Kansai)
  "kichigai": [3, 5], // Crazy/insane
  "ketsu": [3, 5], // Ass
  "ketsunoana": [3, 5], // Asshole
  "shiri": [3, 5], // Butt
  "unko": [3, 5], // Poop
  "kuso gaki": [3, 5], // Shit brat
  "kusobaba": [3, 5], // Shit old woman
  "kusojijii": [3, 5], // Shit old man
  "kusoyaro": [3, 5], // Shit bastard
  "debu": [1, 5], // Fatso
  "busu": [1, 5], // Ugly (woman)
  "kasu": [3, 5], // Scum
  "kuzu": [3, 5], // Trash
  "gomi": [3, 5], // Garbage
  "omanko": [4, 5], // Pussy (polite prefix + vulgar)
  "omeko": [3, 5], // Female genitalia (Kansai)
  "bobo": [1, 4], // Sexual intercourse (dialectal)
  "seishi": [3, 5], // Sperm
  "shasei": [3, 5], // Ejaculation
  "jii": [4, 5], // Masturbation
  "onanii": [4, 5], // Masturbation
  "fera": [4, 5], // Fellatio
  "ferachio": [4, 5], // Fellatio (full)
  "inran": [3, 5], // Lewd/promiscuous
  "nakadashi": [3, 5], // Creampie
  "paizuri": [4, 5], // Titjob
  "baita": [5, 5], // Whore
  "ero": [3, 5], // Erotic/perverted
  "chikubi": [3, 5], // Nipple
  "shibaku": [3, 5], // I'll beat you (Kansai)
  "shibakuzo": [3, 5], // I'll beat you up
  "korosu": [3, 5], // I'll kill
  "korosuzo": [3, 5], // I'll kill you
  "buchikorosu": [5, 5], // I'll beat you to death
  "bukkorosu": [3, 5], // I'll kill you (slang)
  "buttobasu": [3, 5], // I'll knock you out
  "nameruna": [3, 5], // Don't look down on me
  "namenna": [3, 5], // Don't underestimate me
  "namennayo": [3, 5], // Don't underestimate me
  "usero": [3, 5], // Get lost
  "kieru": [3, 5], // Disappear
  "kiero": [3, 5], // Disappear (imperative)
  "damare": [3, 5], // Shut up
  "urusee": [3, 5], // Shut up (rough)
  "sukebe": [3, 5], // Pervert
  "ecchi": [3, 4], // Lewd/naughty
  "etchi": [3, 5], // Lewd/naughty (variant)
  "yareru": [3, 5], // Can have sex
  "yaru": [3, 5], // To do it (sexual)
  "hameru": [3, 5], // To insert (sexual)
  "okasu": [5, 5], // To violate/rape
  "goukan": [5, 5], // Rape
  "rinkan": [5, 5], // Gang rape
  "chuudashi": [3, 5], // Creampie
  "gansha": [3, 5], // Facial (sexual)
  "kunni": [3, 5], // Cunnilingus
  "tekoki": [3, 5], // Handjob
  "teman": [3, 5], // Manual stimulation
  "shiofuki": [3, 5], // Squirting
  "aigan": [3, 5], // Outdoor sex
  "rankou": [3, 5], // Orgy
  "inkou": [3, 5], // Obscene acts
  "waisetsu": [3, 5], // Obscenity
  "baishun": [5, 5], // Prostitution
  "baishunfu": [5, 5], // Prostitute
  "soapland": [3, 5], // Soapland
  "deriherru": [3, 5], // Delivery health (escort)
  "deriheru": [3, 5], // Delivery health (variant)
  "pinsaro": [3, 5], // Pink salon
  "fuzoku": [3, 5], // Sex industry
  "honban": [3, 5], // Full sex service
  "namahon": [3, 5], // Raw sex
  "rorikkon": [3, 5], // Lolicon
  "shotakon": [3, 5], // Shotacon
  "pedofilia": [5, 5], // Pedophilia
  "roshutsukyo": [3, 5], // Exhibitionist
  "nozoki": [3, 5], // Peeping
  "tousatsu": [3, 5], // Voyeurism
  "kinbaku": [3, 4], // Bondage
  "choukyou": [3, 5], // Training (BDSM)
  "dorei": [3, 5], // Slave
  "seidorei": [3, 5], // Sex slave
  "nikudorei": [3, 5], // Meat slave
  "nikubenki": [3, 5], // Meat toilet
  "bukkake": [4, 5], // Bukkake
  "gokkun": [3, 4], // Swallowing (sexual)
  "irrumatio": [3, 5], // Irrumatio
  "iramachio": [3, 5], // Irrumatio (variant)
  "sukatoro": [3, 5], // Scatology
  "hamedori": [3, 5], // POV sex filming
  "mushūsei": [3, 5], // Uncensored
  "mushūseii": [3, 5], // Uncensored (variant)
  "eroge": [3, 5], // Erotic game
  "erodouga": [3, 5], // Erotic video
  "eromanga": [3, 5], // Erotic manga
  "okazu": [3, 5], // Fap material
  "nuku": [3, 5], // To fap
  "nuita": [3, 5], // Fapped
  "shikoru": [4, 5], // To masturbate (slang)
  "ahegao": [3, 5], // Ahegao face
  "paipan": [3, 5], // Shaved genitals
  "sounyuu": [3, 5], // Insertion (sexual)
  "boukei": [3, 5], // Phimosis (insult)
  "doutei": [3, 5], // Virgin (male, insult)
  "inkya": [3, 5], // Introvert (insult)
  "youkya": [3, 5], // Extrovert (used sarcastically)
  "kimoi": [3, 5], // Disgusting
  "kimoe": [3, 5], // Disgusting (variant)
  "kishoi": [3, 5], // Gross
  "uzai": [3, 5], // Annoying
  "uzee": [3, 5], // Annoying (rougher)
  "gaiji": [3, 5], // Disabled person (offensive slang)
  "teinō": [3, 5], // Low-ability (insult)
  "teinou": [3, 5], // Low-ability (variant)
  "chinpa": [4, 5], // Short/small penis (insult)
  "tanshou": [4, 5], // Small penis
  "sourou": [3, 5], // Premature ejaculation
  "inpo": [3, 5], // Impotent
  "hage": [3, 5], // Baldy
  "chonmage": [3, 5], // Topknot (used mockingly)
  "niito": [3, 5], // NEET
  "hikikomori": [3, 5], // Shut-in
  "shachiku": [3, 5], // Corporate slave
  "furi-ta-": [3, 5], // Part-timer (derogatory)
  "makeinu": [1, 5], // Loser
  "makegumi": [1, 5], // Loser group
  "binbounin": [3, 5], // Poor person (insult)
  "kojiki": [3, 5], // Beggar
  "furōsha": [3, 5], // Vagrant
  "inaka mono": [3, 5], // Country bumpkin
  "inakappe": [3, 5], // Country bumpkin (slang)
  "kappe": [3, 5], // Country bumpkin (abbreviation)
  "dasai": [3, 5], // Uncool/lame
  "ponkotsu": [3, 5], // Broken/useless
  "heppoko": [3, 5], // Incompetent
  "hetakuso": [3, 5], // Terrible at something
  "nonashi": [3, 5], // Incompetent
  "yakutatazu": [3, 5], // Useless person
  "kusomushi": [3, 5], // Shit bug
  "gomikuzu": [3, 5], // Trash scum
  "ningennokuzu": [3, 5], // Human trash
  "ikiterukachinaishi": [3, 5], // Not worth living
  "umaretekunna": [3, 5], // Shouldn't have been born
  "shiniyagare": [5, 5], // Die (vulgar imperative)
  "shinisarase": [5, 5], // Die (Kansai vulgar)
  "kutabariyagare": [3, 5], // Drop dead (vulgar)
  "kieuserou": [3, 5], // Get the hell out
  "jigoku ni ochiro": [3, 5], // Go to hell
  "koroshiteyaru": [3, 5], // I'll kill you
  "buttobasu zo": [3, 5], // I'll knock you out
  "buchinomesu": [3, 5], // To beat the crap out of
  "bunaguru": [3, 5], // To punch hard
  "dotsukou": [3, 5], // Shall I punch you
  "shizume": [3, 5], // I'll sink you (kill)
  "hajimesuru": [3, 5], // To dispose of (kill)
  "yakuza": [3, 5], // Yakuza
  "chinpira": [3, 5], // Thug/punk
  "gorotsuki": [3, 5], // Hoodlum
  "shabu": [3, 5], // Meth
  "yaku": [3, 5], // Drugs
  "yakuchuu": [3, 5], // Drug addict
  "manuke": [1, 5], // Fool
  "tonma": [3, 5], // Dunce
  "noroma": [3, 5], // Slowpoke
  "rokudenashi": [3, 5], // Good-for-nothing
  "gedo": [3, 5], // Brute/fiend
  "haijin": [3, 5], // Human waste
  "ochikobore": [3, 5], // Dropout/failure
  "kimoota": [3, 5], // Creepy otaku
  "netouyo": [3, 5], // Internet right-winger (derogatory)
  "payoku": [3, 5], // Derogatory for leftist
  "baikoku": [3, 5], // Selling out the country
  "hannichi": [3, 5], // Anti-Japan (used as slur)
  "hikokumin": [3, 5], // Non-citizen/traitor
  "kokuzoku": [3, 5], // National traitor
  // "chon": [3, 5], // Slur for Koreans — false positive: place name ("Chon Buri")
  "chankoro": [3, 5], // Slur for Chinese
  "shina": [3, 5], // Derogatory for China
  "shinajin": [3, 5], // Derogatory for Chinese
  "gaijin": [3, 5], // Foreigner (can be derogatory)
  "ketōjin": [3, 5], // Slur for foreigners
  "kuronbo": [3, 5], // N-word equivalent
  "nigā": [3, 5], // N-word (katakana romanization)
  "dojin": [3, 5], // Primitive person (slur)
  "sangokujin": [3, 5], // Derogatory for foreigners
  "hitomodoki": [5, 5], // Sub-human
  // "eta": [3, 5], // Historical outcaste slur — commented out: collides with English "ETA" (estimated time of arrival)
  "hinin": [3, 5], // Non-person (historical)
  "burakumin": [3, 5], // Burakumin (discriminatory)
  "yotsu": [3, 5], // Four (burakumin slur)

  // Mixed Japanese-English profanity (katakana loanwords typed in romaji)
  "fakku": [3, 5], // Fuck
  "fakkin": [3, 5], // Fucking
  "shitto": [3, 5], // Shit
  "bitchi": [3, 4], // Bitch
  "asuhōru": [3, 4], // Asshole
  "kokku": [4, 4], // Cock
  "dammu": [3, 4], // Damn
  "heru": [3, 4], // Hell
  "kocksacker": [4, 4], // Cocksucker (typed in roman)
  "fakkyu": [3, 5], // Fuck you
  "buroshitto": [3, 5], // Bullshit

  // Additional romaji compound insults
  "kono kuso yaro": [3, 4], // You shit bastard
  "kono baka": [1, 4], // You idiot
  "kono busu": [1, 4], // You ugly
  "kono debu": [1, 4], // You fatso
  "kono kasu": [1, 4], // You scum
  "kono kuzu": [1, 4], // You trash
  "kono gomi": [1, 4], // You garbage
  "kono hage": [1, 4], // You baldy
  "shinde kure": [5, 5], // Please die
  "ikiterukachinashi": [1, 4], // Not worth living
  "sonzaikachinashi": [1, 4], // No value in existing
  "mejiwari": [1, 4], // Eyesore
  "hedogaderu": [1, 4], // Makes me vomit
  "mushizugahashiru": [1, 4], // Makes my skin crawl

  // Additional 2ch/5ch meme insults
  "ワロタ": [2, 3], // Laughed (mockery)
  "草生える": [3, 3], // Growing grass (LOL, mockery)
  "大草原": [3, 3], // Great grassland (massive LOL)
  "wwwww": [2, 3], // LOL (mockery in certain contexts)
  "プギャー": [2, 3], // Mockery sound
  "m9(^Д^)": [2, 3], // Pointing and laughing
  "ゲラゲラ": [2, 3], // Laughing mockery sound
  "鬱だ死のう": [5, 5], // I'm depressed, let's die (dark humor meme)
  "通報しますた": [2, 3], // Reported (2ch meme)
  "お前のかーちゃんでべそ": [2, 3], // Your mom has an outie (playground insult)
  "池沼ムーブ": [2, 3], // Pond-swamp move (disabled person move)
  "ンゴ": [2, 3], // Suffix used mockingly
  "クソワロ": [3, 5], // Shit-laugh (mockery)
  "草不可避": [3, 3], // Grass unavoidable (can't help but laugh, mocking)
  "お前もう死んでいる": [5, 5], // You're already dead (threat/meme)
  "雑魚": [1, 4], // Small fry/weakling
  "ザコ": [2, 3], // Small fry (katakana)
  "この雑魚": [1, 4], // You weakling
  "雑魚キャラ": [1, 4], // Weakling character
  "養分": [2, 3], // Nutrients (sucker being exploited)
  "カモ": [2, 3], // Duck (sucker/easy target)
  "カモにする": [2, 3], // To make someone a sucker
  "オワコン": [2, 3], // Finished content (washed up)
  "終わってる": [2, 3], // It's over (for someone)
  "クソゲー": [3, 5], // Shit game
  "糞運営": [3, 5], // Shit management
  "エアプ勢": [2, 3], // Fake experience group
  "サンドバッグ": [2, 3], // Sandbag (punching bag, insult)
  "カカシ": [2, 3], // Scarecrow (useless person)
  "木偶の坊": [2, 3], // Wooden puppet (useless person)
  "穀潰し野郎": [3, 4], // Grain waster bastard
  "税金の無駄": [2, 3], // Waste of tax money
  "酸素の無駄": [2, 3], // Waste of oxygen
  "電気の無駄": [2, 3], // Waste of electricity

  // Additional Okinawan dialect profanity
  "フリムン": [1, 4], // Fool (Okinawan)
  "ゲレン": [1, 4], // Ugly/dirty (Okinawan)
  "ヤナワラバー": [3, 4], // Bad child (Okinawan)
  "ヤナカーギー": [1, 4], // Ugly face (Okinawan)
  "インチキ": [3, 4], // Cheater/fraud
  "ワジワジ": [3, 4], // Angry (Okinawan)
  "チュラカーギー": [3, 4], // Beautiful face (used sarcastically)
  "シニサリンドー": [3, 4], // Go to hell (Okinawan)
  "クルサリンドー": [3, 4], // I'll kill you (Okinawan)
  "ヒヤミカチ": [3, 4], // Suddenly/shockingly (exclamation)

  // Additional Tohoku dialect profanity
  "たまげた": [3, 4], // Shocked (can be insult)
  "しょしい": [3, 4], // Embarrassing/pathetic (Tohoku)
  "あずましくない": [3, 4], // Uncomfortable/unpleasant (Hokkaido)
  "なまら": [3, 4], // Very (Hokkaido intensifier)
  "なまらむかつく": [3, 4], // Very annoying (Hokkaido)
  "こわい": [3, 4], // Tired/scary (Tohoku double meaning)
  "ねっぱる": [3, 4], // Sticky/annoying person (Tohoku)
  "がおる": [3, 4], // To be exhausted/defeated (Tohoku)

  // Additional Nagoya/Chubu dialect profanity
  "たわけめ": [1, 4], // You fool (Nagoya)
  "でれすけ": [3, 4], // Lazy/sloppy person (Nagoya)
  "ちんちこちん": [3, 4], // Extremely hot (Nagoya, sounds vulgar)
  "けったくそ悪い": [3, 4], // Annoying/disgusting (Nagoya)
  "どべ": [3, 4], // Last place/worst (Chubu)

  // Additional compound sexual terms
  "セフレ": [4, 4], // Sex friend
  "ハメ友": [4, 4], // Sex friend (vulgar)
  "ワンナイト": [4, 4], // One-night stand
  "マグロ": [4, 4], // Tuna (passive sex partner)
  "即ハメ": [4, 4], // Immediate sex
  "即マン": [4, 4], // Immediate sex (vulgar)
  "即尺": [4, 4], // Immediate oral
  "ナンパ": [4, 4], // Pickup (sexual connotation)
  "逆ナン": [4, 4], // Reverse pickup (woman picks up man)
  "ヤリ部屋": [4, 4], // Sex room
  "ラブホ": [4, 4], // Love hotel
  "連れ込み": [4, 4], // Taking someone to hotel
  "お持ち帰り": [4, 4], // Takeaway (taking someone home for sex)
  "据え膳": [4, 4], // Easy sexual opportunity
  "二股": [4, 4], // Two-timing
  "浮気": [4, 4], // Cheating
  "不倫相手": [4, 4], // Affair partner
  "愛人": [4, 4], // Mistress/lover
  "セクハラ": [4, 4], // Sexual harassment
  "パワハラ": [4, 4], // Power harassment
  "痴漢プレイ": [4, 4], // Groping play
  "レイプ目": [5, 5], // Rape eyes (glazed expression)
  "和姦": [4, 4], // Consensual sex (used in disturbing contexts)
  "陵辱": [4, 4], // Humiliation/violation
  "凌辱プレイ": [4, 4], // Humiliation play
  "奴隷プレイ": [4, 4], // Slave play
  "首絞め": [4, 4], // Choking (sexual)
  "窒息プレイ": [4, 4], // Asphyxiation play
  "蝋燭プレイ": [4, 4], // Candle play
  "目隠しプレイ": [4, 4], // Blindfold play
  "拘束プレイ": [4, 4], // Restraint play
  "アナルプレイ": [4, 4], // Anal play
  "前立腺": [4, 4], // Prostate (sexual context)
  "前立腺マッサージ": [4, 4], // Prostate massage
  "ペギング": [4, 4], // Pegging
  "フィストファック": [4, 5], // Fist fuck
  "ダブルペネトレーション": [4, 4], // Double penetration
  "中イキ": [4, 4], // Internal orgasm
  "外イキ": [4, 4], // External orgasm
  "連続イキ": [4, 4], // Continuous orgasm
  "潮噴き": [4, 4], // Squirting (variant)
  "マン汁": [4, 4], // Vaginal fluid (vulgar)
  "ザー汁": [4, 4], // Semen (slang)
  "精飲プレイ": [4, 4], // Semen drinking play
  "聖水プレイ": [4, 4], // Golden shower play
  "スカプレイ": [4, 4], // Scatplay
  "食糞": [4, 4], // Coprophagia
  "飲尿": [4, 4], // Urine drinking
  "異物挿入": [4, 4], // Foreign object insertion

  // Additional internet generation insults
  "チー牛顔": [2, 3], // Cheese beef face (nerd face)
  "キョロ充": [2, 3], // Looking-around normie (anxious social person)
  "量産型": [3, 3], // Mass-produced type (generic/boring)
  "イキリ": [2, 3], // Acting tough
  "イキリオタク": [2, 3], // Tough-acting otaku
  "イキリト": [2, 3], // Acting like Kirito (SAO insult)
  "なろう系": [2, 3], // Light novel type (generic/boring)
  "承認欲求モンスター": [2, 3], // Approval-seeking monster
  "マウント": [3, 3], // Mounting (asserting dominance)
  "マウント取り": [2, 3], // Taking mount (one-upping)
  "煽りカス": [2, 3], // Provocation scum
  "クソザコ": [1, 4], // Shit weakling
  "クソザコナメクジ": [3, 5], // Shit weak slug
  "害悪": [2, 3], // Harmful evil
  "戦犯": [2, 3], // War criminal (blame for failure)
  "A級戦犯": [3, 3], // A-class war criminal (most to blame)
  "脳死": [2, 3], // Brain dead (acting without thinking)
  "思考停止": [2, 3], // Stopped thinking (insult)
  "コミュ障": [2, 3], // Communication disorder (insult)
  "陰キャラ": [2, 3], // Dark character (introvert insult)
  "陰の者": [2, 3], // Person of shadow (introvert insult)
  "キモ男": [2, 3], // Gross man
  "キモ女": [2, 3], // Gross woman
  "おっさん": [2, 3], // Old man (derogatory)
  "おばさん": [2, 3], // Old woman (derogatory)
  "ジジイ": [2, 3], // Old man (vulgar)
  "ババア": [2, 3], // Old woman (vulgar)
  "くたばれジジイ": [2, 3], // Drop dead old man
  "くたばれババア": [2, 3], // Drop dead old woman

  // === EXPANDED ENTRIES ===

  // Additional native Japanese insults - comprehensive
  "あんぽんたん": [1, 4], // Idiot (archaic/playful)
  "うすのろ": [1, 4], // Slow-witted
  "うつけ": [1, 4], // Fool (archaic)
  "うつけもの": [1, 4], // Foolish person (archaic)
  "おおばかもの": [1, 4], // Great fool
  "おおまぬけ": [1, 4], // Great fool
  "おろかもの": [1, 4], // Foolish person
  "おたんちん": [1, 4], // Fool/simpleton
  "くされ外道": [1, 4], // Rotten fiend
  "くされ野郎": [3, 4], // Rotten bastard
  "くされ女": [1, 4], // Rotten woman
  "くされ": [1, 4], // Rotten
  "くそくらえ": [3, 5], // Eat shit (hiragana)
  "くそ以下": [3, 5], // Below shit
  "くそ未満": [3, 5], // Less than shit
  "けちんぼ": [1, 4], // Stingy person
  "こんちくしょう": [1, 4], // Damn it (emphatic)
  "このすっとこどっこい": [1, 4], // You bumbling fool
  "このとんちき": [1, 4], // You dunce
  "ごくつぶし": [1, 4], // Grain waster (useless person)
  "ごろつき": [1, 4], // Hoodlum (hiragana)
  "さっさと失せろ": [1, 4], // Hurry up and get lost
  "さっさと消えろ": [1, 4], // Hurry up and disappear
  "さっさと死ね": [5, 5], // Hurry up and die
  "ざまあみろ": [1, 4], // Serves you right
  "ざまあ": [1, 4], // Serves you right (abbreviation)
  "すっとこ": [1, 4], // Bumbling
  "ずうずうしい": [1, 4], // Shameless/brazen
  "たかり": [1, 4], // Moocher/beggar
  "たかり屋": [1, 4], // Professional moocher
  "ちっこい": [1, 4], // Tiny (insult for stature)
  "でくのぼう": [1, 4], // Wooden puppet (useless, hiragana)
  "とんちき": [1, 4], // Dunce/blockhead
  "なんだこの野郎": [3, 4], // What the hell, you bastard
  "のたれ死ね": [5, 5], // Die in a ditch
  "のたれ死にしろ": [5, 5], // Die in a ditch (polite form of insult)
  "はいはいワロスワロス": [1, 4], // Yeah yeah LOL (dismissive mockery)
  "ばかたれ": [1, 4], // Stupid drip (hiragana)
  "ばかめ": [1, 4], // You fool (hiragana)
  "ひきょうもの": [1, 4], // Coward (hiragana)
  "へたくそ": [1, 4], // Terrible at something
  "ほざくな": [1, 4], // Don't spout nonsense
  "もろだし": [1, 4], // Full exposure
  "やりちん": [5, 4], // Man-whore (hiragana)
  "よわむし": [1, 4], // Weakling/coward (hiragana)

  // Additional kanji insults
  "愚か者": [1, 4], // Fool
  "愚者": [1, 4], // Fool (formal)
  "愚鈍": [1, 4], // Stupid and dull
  "愚図": [1, 4], // Dullard
  "愚劣": [1, 4], // Stupid and inferior
  "愚民": [1, 4], // Stupid people
  "悪党": [1, 4], // Villain
  "悪人": [1, 4], // Bad person
  "悪魔": [1, 4], // Devil
  "悪鬼": [1, 4], // Evil spirit
  "暗愚": [1, 4], // Dark stupidity
  "陰湿": [1, 4], // Sneaky/nasty
  "陰険": [1, 4], // Treacherous
  "汚物": [1, 4], // Filth
  "下等": [3, 4], // Low-class
  "下劣": [1, 4], // Base/vulgar
  "下品": [3, 4], // Vulgar/low-class
  "害虫": [1, 4], // Pest
  "間抜け": [1, 4], // Idiot (lit. missed timing)
  "狂人": [1, 4], // Madman
  "狂犬": [1, 4], // Mad dog
  "愚弄": [1, 4], // Mocking/ridiculing
  "嫌われ者": [1, 4], // Hated person
  "小者": [1, 4], // Small person (insignificant)
  "卑怯者": [1, 4], // Coward (kanji)
  "卑劣": [1, 4], // Base/despicable
  "品性下劣": [1, 4], // Low character
  "不細工": [1, 4], // Ugly/clumsy
  "膿": [1, 4], // Pus (insult)
  "阿呆": [1, 4], // Idiot (Kansai kanji)
  "大阿呆": [1, 4], // Great idiot
  "能天気": [1, 4], // Airheaded
  "脳足りん": [1, 4], // Brain deficient
  "脳みそ足りん": [1, 4], // Brain matter deficient
  "脳無し": [1, 4], // Brainless
  "脳味噌腐ってる": [1, 4], // Brain rotting
  "腐れ外道": [1, 4], // Rotten fiend (kanji)
  "腐れ野郎": [3, 4], // Rotten bastard (kanji)
  "朽ち果てろ": [1, 4], // Rot away
  "恥さらし": [1, 4], // Public shame
  "恥曝し": [1, 4], // Public disgrace
  "面汚しめ": [1, 4], // You disgrace
  "面の皮が厚い": [1, 4], // Thick-skinned (shameless)
  "厚顔無恥": [1, 4], // Thick-faced and shameless
  "破廉恥": [1, 4], // Shameless/indecent
  "恥知らずめ": [1, 4], // You shameless one
  "厚かましい": [1, 4], // Brazen/impudent

  // 死ね (die) variations - comprehensive
  "死ね死ね": [5, 5], // Die die
  "死ねよクソ": [5, 5], // Die, shit
  "死ねクソガキ": [5, 5], // Die, shit brat
  "死ねよマジで": [5, 5], // Seriously die
  "死ねよお前": [5, 5], // You die
  "さっさと死ねよ": [5, 5], // Hurry up and die
  "早く死ね": [5, 5], // Die quickly
  "即刻死ね": [5, 5], // Die immediately
  "今すぐ死ね": [5, 5], // Die right now
  "一刻も早く死ね": [5, 5], // Die as soon as possible
  "苦しんで死ね": [5, 5], // Suffer and die
  "もがいて死ね": [5, 5], // Writhe and die
  "のたうち回って死ね": [5, 5], // Thrash around and die
  "惨めに死ね": [5, 5], // Die miserably
  "孤独に死ね": [5, 5], // Die alone
  "誰にも知られず死ね": [5, 5], // Die without anyone knowing
  "野垂れ死ね": [5, 5], // Die in a ditch
  "犬死にしろ": [5, 5], // Die like a dog
  "無駄死にしろ": [5, 5], // Die uselessly

  // くそ/糞 additional compounds
  "クソ食え": [3, 5], // Eat shit (katakana)
  "クソ以下": [3, 5], // Below shit
  "クソ未満": [3, 5], // Less than shit
  "クソみてえ": [3, 5], // Shit-like (rough)
  "クソしょうもない": [3, 5], // Shit worthless
  "クソつまらない": [3, 5], // Shit boring
  "クソきもい": [3, 5], // Shit disgusting
  "クソうざい": [3, 5], // Shit annoying
  "クソダサい": [3, 5], // Shit uncool
  "クソ弱い": [3, 5], // Shit weak
  "クソ下手": [3, 5], // Shit bad at
  "クソカス": [3, 5], // Shit scum
  "クソクズ": [3, 5], // Shit trash
  "クソゴミ": [3, 5], // Shit garbage
  "クソ人間": [3, 5], // Shit human
  "クソ親父": [3, 5], // Shit old man (parent)
  "クソ母親": [3, 5], // Shit mother
  "クソ教師": [3, 5], // Shit teacher
  "クソ上司": [3, 5], // Shit boss
  "クソ会社": [3, 5], // Shit company
  "クソ政治家": [3, 5], // Shit politician
  "くそまずい": [3, 5], // Shit bad tasting
  "くそきたない": [3, 5], // Shit dirty
  "くそやかましい": [3, 5], // Shit noisy
  "くそうるさい": [3, 5], // Shit loud
  "くそつまんねえ": [3, 5], // Shit boring (rough)
  "くそめんどい": [3, 5], // Shit troublesome
  "くそめんどくさい": [3, 5], // Shit troublesome (full)
  "くそだりい": [3, 5], // Shit lazy/tiresome
  "くそねみい": [3, 5], // Shit sleepy

  // バカ/アホ extended compounds
  "バカの極み": [1, 4], // Height of stupidity
  "バカの壁": [1, 4], // Wall of stupidity
  "バカ丸出し": [1, 4], // Full-on stupid
  "バカすぎる": [1, 4], // Too stupid
  "バカすぎ": [1, 3], // Too stupid (casual)
  "バカでしょ": [1, 4], // Are you stupid
  "バカなの": [1, 4], // Are you stupid (question)
  "バカじゃないの": [1, 4], // Aren't you stupid
  "バカじゃねえの": [1, 4], // Aren't you stupid (rough)
  "バカか": [1, 4], // Are you stupid (direct)
  "バカかお前": [1, 4], // Are you stupid, you
  "バカ言うな": [1, 4], // Don't say stupid things
  "バカこくな": [1, 4], // Don't say stupid things (rough)
  "お前バカだろ": [1, 4], // You're stupid right
  "おまえバカか": [1, 4], // Are you stupid (rough)
  "アホすぎ": [1, 4], // Too stupid (Kansai)
  "アホすぎる": [1, 4], // Too stupid (Kansai)
  "アホか": [1, 4], // Are you stupid (Kansai)
  "アホやろ": [3, 4], // Stupid bastard (Kansai)
  "アホらしい": [3, 5], // Ridiculous (Kansai)
  "アホくさい": [1, 4], // Stupid-smelling (Kansai)
  "アホの極み": [1, 4], // Height of stupidity (Kansai)
  "アホ面": [1, 4], // Stupid face (Kansai)
  "アホヅラ": [1, 4], // Stupid face (Kansai variant)
  "アホ丸出し": [1, 4], // Full-on stupid (Kansai)
  "アホまるだし": [1, 4], // Full-on stupid (Kansai hiragana)
  "ドアホが": [1, 4], // Big idiot (Kansai aggressive)
  "ドアホめ": [1, 4], // You big idiot (Kansai)
  "アホンダラが": [1, 4], // Idiot (Kansai aggressive)
  "このアホンダラ": [1, 4], // You idiot (Kansai)
  "このドアホ": [1, 4], // You big idiot

  // Kansai dialect - expanded
  "しばくぞこら": [3, 4], // I'll beat you, hey
  "しばいたるわ": [5, 5], // I'll beat you (Kansai polite threat)
  "しばき倒す": [3, 4], // Beat to the ground (Kansai)
  "いてまうど": [3, 4], // I'll mess you up (Kansai variant)
  "いてこましたろか": [3, 5], // Shall I beat the shit out of you (Kansai)
  "いわしたるぞ": [3, 4], // I'll hurt you (Kansai variant)
  "いわすぞこら": [3, 4], // I'll hurt you, hey (Kansai)
  "われなにさらしてんねん": [3, 4], // What the hell are you doing (Kansai)
  "われなんやねん": [3, 4], // What are you (Kansai hostile)
  "おどれなんじゃ": [3, 4], // What are you (Kansai hostile)
  "おどれこら": [5, 5], // Hey you (Kansai threatening)
  "おどれなめとったらいてまうぞ": [3, 4], // If you look down on me I'll beat you (Kansai)
  "どたまかち割ったるぞ": [3, 4], // I'll crack your skull (Kansai full)
  "しょうもないやつ": [3, 4], // Worthless person (Kansai)
  "しょうもないやっちゃ": [3, 4], // Worthless person (Kansai variant)
  "あほんだらめ": [1, 4], // You idiot (Kansai)
  "ぼけかす": [1, 4], // Idiot scum (Kansai)
  "ぼけなすめ": [1, 4], // You idiot eggplant (Kansai)
  "すかたんめ": [1, 4], // You fool (Kansai)
  "けったいなやつ": [3, 4], // Weird person (Kansai)
  "いけず": [3, 4], // Mean person (Kansai)
  "いけず言うな": [3, 4], // Don't be mean (Kansai)
  "なんぼのもんじゃい": [3, 4], // Who do you think you are (Kansai)
  "えらそうにすんな": [3, 4], // Don't act arrogant (Kansai)
  "えらそうなこと言うな": [3, 4], // Don't say arrogant things (Kansai)
  "調子のんな": [4, 4], // Don't get cocky (Kansai)
  "いちびんな": [3, 4], // Don't show off (Kansai)
  "つべこべ言うな": [3, 4], // Don't talk back (Kansai)
  "ごちゃごちゃ言うな": [3, 4], // Don't ramble (Kansai)
  "がたがた言うな": [3, 4], // Don't complain (Kansai)

  // Kyushu dialect - expanded
  "ばかたれが": [1, 4], // Stupid drip (Kyushu aggressive)
  "きさんなんばしよるとか": [3, 4], // What the hell are you doing (Kyushu)
  "しゃーしか": [3, 4], // Annoying (Kyushu variant)
  "のさばりくさって": [3, 4], // Being arrogant (Kyushu)
  "ふうけもんめ": [1, 4], // You fool (Kyushu)
  "ぬすっとめ": [3, 4], // You thief (Kyushu)
  "わるさーしくさって": [3, 4], // Being a troublemaker (Kyushu)
  "ちゃげんなか": [3, 4], // Pathetic (Kyushu variant)
  "がまださんか": [5, 5], // Can't endure (Kyushu threat)
  "きさんしゃーしいぞ": [3, 4], // You're annoying (Kyushu)
  "こぎゃんこつすっと": [5, 5], // If you do such things (Kyushu threatening)
  "あばかん": [3, 4], // Can't handle (Kyushu, incompetent)
  "でたらめ": [3, 4], // Nonsense (general but used in Kyushu)
  "よかよか": [3, 4], // Fine fine (sarcastic dismissal, Kyushu)
  "しかとすんな": [3, 4], // Don't ignore me (Kyushu)
  "じごでんな": [3, 4], // Hellish (Kyushu)
  "ばかくさ": [1, 4], // Stupid-smelling (Kyushu)
  "ばかこくな": [1, 4], // Don't be stupid (Kyushu)

  // Tohoku dialect - expanded
  "たげむかつく": [3, 4], // Very annoying (Tohoku)
  "たげきもい": [3, 4], // Very disgusting (Tohoku)
  "たげうざい": [3, 4], // Very annoying (Tohoku)
  "しょしくてしゃあない": [3, 4], // Embarrassingly pathetic (Tohoku)
  "ごんぼほり": [3, 4], // Tantrum-thrower (Tohoku)
  "じょっぱりめ": [3, 4], // You stubborn person (Tohoku)
  "へばな": [3, 4], // Go away (Tohoku)
  "うるせごと言うな": [3, 4], // Don't say noisy things (Tohoku)
  "おしょすい": [3, 4], // Embarrassing/pathetic (Tohoku)
  "おめでこ": [3, 4], // Your forehead (Tohoku insult)
  "あんにゃろめ": [3, 4], // That bastard (Tohoku)
  "ごしゃぐ": [3, 4], // To get angry (Tohoku)
  "ごしゃがれる": [3, 4], // To be scolded (Tohoku)
  "わらし": [3, 4], // Child (Tohoku, can be derogatory)
  "がんす": [5, 5], // Is (Tohoku, used in threatening context)
  "べっちょ": [3, 4], // Female genitalia (Tohoku)
  "ほでなす": [3, 4], // Useless person (Tohoku)

  // Hokkaido dialect - expanded
  "はんかくさいやつ": [1, 4], // Stupid person (Hokkaido)
  "なまらむかつくんだが": [3, 4], // Very annoying though (Hokkaido)
  "なまらキモい": [3, 4], // Very disgusting (Hokkaido)
  "なまらうざい": [3, 4], // Very annoying (Hokkaido)
  "なまらバカ": [1, 4], // Very stupid (Hokkaido)
  "あずましくないな": [3, 4], // Unpleasant (Hokkaido)
  "しゃっこい": [3, 4], // Cold (Hokkaido, used as insult for cold person)
  "めんこくない": [1, 4], // Not cute (Hokkaido, ugly)
  "べったら": [3, 4], // Lazy/slovenly (Hokkaido)
  "ちょす": [3, 4], // To tease/bother (Hokkaido)
  "ちょすな": [3, 4], // Don't bother me (Hokkaido)

  // Okinawan/Ryukyuan dialect - expanded
  "フリムンめ": [1, 4], // You fool (Okinawan)
  "ゲレンなやつ": [1, 4], // Ugly/dirty person (Okinawan)
  "ヤナワラバーめ": [3, 4], // You bad child (Okinawan)
  "ヤナカーギーめ": [1, 4], // You ugly face (Okinawan)
  "シニサリンドーよ": [3, 4], // Go to hell (Okinawan)
  "クルサリンドーよ": [3, 4], // I'll kill you (Okinawan)
  "イッペーワジワジ": [3, 4], // Very angry (Okinawan)
  "フリー": [1, 4], // Fool (Okinawan short)
  "ヤナムン": [3, 4], // Bad thing (Okinawan)
  "ヤナグチ": [3, 4], // Bad mouth (Okinawan)
  "デージ": [3, 4], // Very/serious (Okinawan intensifier)
  "デージフリムン": [1, 4], // Very foolish (Okinawan)
  "アキサミヨー": [3, 4], // Oh my (Okinawan exclamation, aggressive context)
  "チバリヨー": [3, 4], // Hang in there (sarcastic, Okinawan)
  "ナンクルナイサ": [3, 4], // It'll work out (sarcastic dismissal, Okinawan)
  "クサミチ": [3, 4], // Stinky (Okinawan)
  "ガチマヤー": [3, 4], // Greedy (Okinawan)

  // Nagoya/Chubu dialect - expanded
  "たわけがあ": [1, 4], // You fool (Nagoya aggressive)
  "たわけめが": [1, 4], // You fool (Nagoya aggressive)
  "でれすけめ": [3, 4], // You lazy person (Nagoya)
  "けったくそわるい": [3, 4], // Annoying/disgusting (Nagoya)
  "けったくそ": [3, 4], // Annoying (Nagoya short)
  "ちんちこちんやぞ": [3, 4], // It's very hot (Nagoya, sounds vulgar)
  "どべやなあ": [3, 4], // You're last place (Chubu)
  "どべのどべ": [3, 4], // Last of the last (Chubu)
  "やっとかめ": [3, 4], // Long time no see (Nagoya, can be aggressive)

  // Hiroshima/Chugoku dialect
  "たいぎい": [3, 4], // Troublesome/tiresome (Hiroshima)
  "ぶち": [3, 4], // Very (Hiroshima intensifier, with insults)
  "ぶちころすけえ": [5, 5], // I'll beat you to death (Hiroshima)
  "ぶちむかつく": [3, 4], // Very annoying (Hiroshima)
  "ぶちきもい": [3, 4], // Very disgusting (Hiroshima)
  "ぶちうざい": [3, 4], // Very annoying (Hiroshima)
  "ぶちバカ": [1, 4], // Very stupid (Hiroshima)
  "ぶちアホ": [1, 4], // Very stupid (Hiroshima)
  "ぶちブス": [1, 4], // Very ugly (Hiroshima)
  "ぶちデブ": [1, 4], // Very fat (Hiroshima)
  "じゃけえ": [3, 4], // Because (Hiroshima, aggressive context)
  "わりゃあ": [3, 4], // You (Hiroshima hostile)
  "おどりゃあ": [5, 5], // You (Hiroshima threatening)
  "おどりゃあなんしょうるんか": [5, 5], // What are you doing (Hiroshima threatening)
  "いなげな": [3, 4], // Strange/weird (Hiroshima negative)

  // Shikoku dialect
  "あるまじき": [3, 4], // Unforgivable (Shikoku)
  "いかんぜよ": [3, 4], // No good (Tosa/Kochi)
  "なめたらいかんぜよ": [3, 4], // Don't underestimate me (Tosa)
  "おんしゃ": [3, 4], // You (Tosa hostile)
  "こじゃんと": [3, 4], // Very (Tosa intensifier)
  "こじゃんとムカつく": [3, 4], // Very annoying (Tosa)

  // Additional sexual terms - comprehensive
  "性器": [4, 4], // Genitalia
  "性器露出": [4, 4], // Genital exposure
  "性交渉": [4, 4], // Sexual relations
  "性的暴行": [4, 4], // Sexual assault
  "性的虐待": [4, 4], // Sexual abuse
  "わいせつ行為": [4, 4], // Indecent act (hiragana+kanji)
  "卑猥": [4, 4], // Obscene
  "猥褻行為": [4, 4], // Obscene behavior
  "猥褻罪": [4, 4], // Indecency crime
  "公然猥褻": [4, 4], // Public indecency
  "強制わいせつ": [4, 4], // Forced indecency
  "強制性交": [4, 4], // Forced intercourse
  "準強姦": [5, 5], // Quasi-rape
  "集団強姦": [5, 5], // Group rape
  "強姦魔": [5, 5], // Rapist
  "強姦犯": [5, 5], // Rape criminal
  "連続強姦犯": [5, 5], // Serial rapist
  "精液まみれ": [4, 4], // Covered in semen
  "精子まみれ": [4, 4], // Covered in sperm
  "ザーメンまみれ": [4, 4], // Covered in semen (loanword)
  "精液顔": [4, 4], // Semen face
  "ちんこまんこ": [4, 4], // Dick pussy (combined vulgar)
  "まんぐり返し": [4, 4], // Legs-over-head position
  "お尻の穴": [4, 4], // Butt hole
  "アヌス": [4, 4], // Anus (katakana)
  "菊穴": [4, 4], // Chrysanthemum hole (anus)
  "菊門": [4, 4], // Chrysanthemum gate (anus)
  "糞穴": [4, 5], // Shit hole
  "尻穴": [4, 4], // Ass hole
  "処女喪失": [4, 4], // Loss of virginity (female)
  "童貞喪失": [4, 4], // Loss of virginity (male)
  "初体験": [4, 4], // First experience (sexual)
  "筆おろし": [4, 4], // First sexual experience (male)
  "筆下ろし": [4, 4], // First sexual experience (variant)
  "手淫": [4, 4], // Masturbation (kanji)
  "自涜": [4, 4], // Self-pollution (masturbation)
  "陰茎挿入": [4, 4], // Penile insertion
  "膣内射精": [4, 4], // Vaginal ejaculation
  "膣外射精": [4, 4], // External ejaculation
  "前戯": [4, 4], // Foreplay
  "後戯": [4, 4], // Afterplay
  "愛撫": [4, 4], // Caressing (sexual)
  "性的快感": [4, 4], // Sexual pleasure
  "快楽": [4, 4], // Pleasure (sexual context)
  "絶頂": [4, 4], // Climax
  "白濁液": [2, 3], // White turbid liquid (semen euphemism)
  "先走り": [4, 4], // Pre-cum
  "我慢汁": [4, 4], // Pre-cum (slang: patience juice)
  "カリ首": [4, 4], // Glans (slang)
  "竿": [4, 4], // Shaft (penis slang)
  "玉袋": [4, 4], // Ball sack
  "金玉袋": [4, 4], // Testicle sack
  "睾丸": [4, 4], // Testicle (medical kanji)
  "陰核": [4, 4], // Clitoris (medical kanji)
  "陰裂": [4, 4], // Vulvar cleft
  "小陰唇": [4, 4], // Labia minora (kanji)
  "大陰唇": [4, 4], // Labia majora (kanji)
  "恥丘": [4, 4], // Mons pubis
  "恥骨": [4, 4], // Pubic bone
  "乳輪": [4, 4], // Areola
  "乳房": [4, 4], // Breast (medical)

  // Additional internet/2ch/5ch slang
  "草": [3, 5], // LOL (modern slang, but also mocking)
  "大草原不可避": [3, 3], // Can't avoid great grassland (can't help laughing, mocking)
  "クソワロタ": [3, 5], // Shit-laughed
  "クソワロスwww": [3, 5], // Shit-LOL
  "お前らに人権はない": [2, 3], // You guys have no human rights
  "人権ない": [2, 3], // No human rights
  "人権剥奪": [2, 3], // Human rights revocation (gaming insult)
  "戦犯はお前": [2, 3], // You are the war criminal (gaming blame)
  "A戦犯": [3, 3], // A-class war criminal
  "お荷物": [2, 3], // Burden/deadweight
  "足手まとい": [2, 3], // Hindrance
  "邪魔者": [2, 3], // Nuisance
  "邪魔するな": [2, 3], // Don't get in the way
  "邪魔": [2, 3], // In the way
  "邪魔くさい": [2, 3], // Bothersome
  "しゃしゃるな": [3, 3], // Don't butt in
  "しゃしゃり出るな": [2, 3], // Don't come forward uninvited
  "出しゃばるな": [2, 3], // Don't be pushy
  "でしゃばり": [2, 3], // Busybody
  "おせっかい": [2, 3], // Nosy/meddlesome
  "お節介野郎": [3, 4], // Nosy bastard
  "ストーカーかよ": [2, 3], // Are you a stalker
  "キモストーカー": [2, 3], // Creepy stalker
  "キモい男": [2, 3], // Creepy man
  "キモい女": [2, 3], // Creepy woman
  "キモいおっさん": [2, 3], // Creepy old man
  "キモいおばさん": [2, 3], // Creepy old woman
  "キモいジジイ": [2, 3], // Creepy old man (vulgar)
  "キモいババア": [2, 3], // Creepy old woman (vulgar)
  "キモオタ野郎": [3, 4], // Creepy otaku bastard
  "キモオタども": [2, 3], // Creepy otaku people
  "キモデブ": [1, 4], // Creepy fatso
  "キモハゲ": [2, 3], // Creepy baldy
  "きっしょ": [2, 3], // Gross (abbreviation of きしょい)
  "きっしょい": [2, 3], // Gross (variant)
  "ドン引き": [2, 3], // Total turn-off
  "引くわ": [2, 3], // That's a turn-off
  "ウザ絡み": [2, 3], // Annoying involvement
  "ウザ男": [2, 3], // Annoying man
  "ウザ女": [2, 3], // Annoying woman
  "クソ絡み": [3, 5], // Shit involvement
  "ウザいんだよ": [2, 3], // You're annoying
  "うぜえんだよ": [2, 3], // You're annoying (rough)
  "きもいんだよ": [2, 3], // You're disgusting
  "きめえんだよ": [2, 3], // You're gross
  "くさいんだよ": [2, 3], // You stink
  "くせえんだよ": [2, 3], // You stink (rough)
  "だせえんだよ": [2, 3], // You're uncool
  "邪魔なんだよ": [2, 3], // You're in the way
  "消えろよ": [2, 3], // Disappear already
  "いなくなれ": [2, 3], // Disappear
  "存在が邪魔": [2, 3], // Your existence is in the way
  "存在が迷惑": [2, 3], // Your existence is a nuisance
  "存在価値ゼロ": [2, 3], // Zero existence value
  "存在意義なし": [2, 3], // No meaning in existing
  "生きてる意味ない": [2, 3], // No meaning in living
  "お前の席ねえから": [2, 3], // There's no seat for you
  "帰れ": [2, 3], // Go home
  "帰れよ": [2, 3], // Go home already
  "さっさと帰れ": [2, 3], // Hurry up and go home
  "田舎に帰れ": [2, 3], // Go back to the countryside

  // Additional katakana loanword profanity
  "マザーファッカー": [5, 5], // Motherfucker
  "サノバビッチ": [3, 4], // Son of a bitch
  "ゴーファックユアセルフ": [3, 5], // Go fuck yourself
  "シャットアップ": [3, 4], // Shut up
  "ゲットアウト": [3, 4], // Get out
  "ファックオフ": [3, 5], // Fuck off
  "ダムイット": [3, 4], // Damn it
  "ゴッドダム": [3, 4], // God damn
  "ホーリーシット": [3, 5], // Holy shit
  "ワットザファック": [3, 5], // What the fuck
  "ピースオブシット": [3, 5], // Piece of shit
  "ゴートゥーヘル": [3, 4], // Go to hell
  "バスタード": [3, 4], // Bastard
  "スラット": [3, 4], // Slut
  "ホアー": [5, 4], // Whore
  "クラップ": [3, 4], // Crap
  "ジャーク": [3, 4], // Jerk
  "アイディオット": [1, 4], // Idiot
  "モロン": [1, 4], // Moron
  "リタード": [3, 4], // Retard
  "ルーザー": [1, 4], // Loser
  "フリーク": [3, 4], // Freak
  "クリーピー": [3, 4], // Creepy
  "ディスガスティング": [3, 4], // Disgusting
  "パセティック": [3, 4], // Pathetic
  "ミゼラブル": [3, 4], // Miserable
  "ピッグ": [3, 4], // Pig
  "カウ": [3, 4], // Cow (insult)
  "ドッグ": [3, 4], // Dog (insult)
  "ラット": [3, 4], // Rat
  "パラサイト": [3, 4], // Parasite
  "トラッシュ": [3, 4], // Trash
  "スカム": [3, 4], // Scum

  // Additional ateji/phonetic substitution spellings
  "氏ね氏ね": [5, 5], // Die die (internet censored)
  "詩ね": [5, 5], // Die (kanji substitution)
  "市ね": [5, 5], // Die (kanji substitution)
  "四ね": [5, 5], // Die (number substitution)
  "し_ね": [5, 5], // Die (with underscore)
  "タヒにたい": [5, 5], // Want to die (censored)
  "しネ": [5, 5], // Die (mixed case)
  "シね": [5, 5], // Die (mixed case variant)
  "シネ": [5, 5], // Die (full katakana)
  "シネシネ": [5, 5], // Die die (katakana)
  "ころす": [3, 4], // Kill (hiragana)
  "ころすぞ": [3, 4], // I'll kill you (hiragana)
  "コロス": [3, 4], // Kill (katakana)
  "コロスゾ": [3, 4], // I'll kill you (katakana)
  "56す": [4, 5], // Kill (number substitution)
  "ヌッコロス": [3, 4], // Kill (internet variant)
  "ヌッ頃す": [3, 4], // Kill (internet variant)
  "頃す": [4, 5], // Kill (kanji substitution)
  "頃すぞ": [4, 5], // I'll kill you (kanji substitution)
  "タヒぬ": [5, 5], // Die (censored variant)
  "タヒのう": [5, 5], // Let's die (censored)

  // Additional threat/violence expressions
  "殺すぞこの野郎": [3, 4], // I'll kill you, you bastard
  "殺すぞクソが": [5, 5], // I'll kill you, shit
  "ぶっ殺すぞマジで": [5, 5], // I'll seriously kill you
  "マジで殺すからな": [5, 5], // I'll seriously kill you, warning
  "本気で殺すぞ": [5, 5], // I'll really kill you
  "目を潰す": [5, 5], // I'll gouge out your eyes
  "歯を折る": [5, 5], // I'll break your teeth
  "骨を折る": [5, 5], // I'll break your bones
  "腕を折ってやる": [5, 5], // I'll break your arm
  "足を折ってやる": [5, 5], // I'll break your leg
  "顔面潰す": [5, 5], // I'll crush your face
  "顔面殴る": [5, 5], // I'll punch your face
  "ワンパンで沈める": [5, 5], // I'll sink you with one punch
  "ボコる": [5, 5], // To beat up
  "ボコボコにする": [5, 5], // To beat to a pulp
  "ボコボコにしてやる": [5, 5], // I'll beat you to a pulp
  "フルボッコ": [5, 5], // Full beating
  "フルボッコにする": [5, 5], // To give a full beating
  "タコ殴りにする": [5, 5], // To punch repeatedly
  "タコ殴り": [5, 5], // Repeated beating
  "ぼこぼこ": [5, 5], // Beaten up (hiragana)
  "メッタ打ち": [5, 5], // To beat savagely
  "メッタ刺し": [5, 5], // To stab repeatedly
  "八つ裂きにする": [5, 5], // To tear into eight pieces
  "バラバラにする": [5, 5], // To tear apart
  "ミンチにする": [5, 5], // To mince
  "すり潰す": [5, 5], // To grind to paste
  "消し去る": [5, 5], // To erase
  "存在ごと消す": [5, 5], // To erase your existence
  "この世から消す": [5, 5], // To erase from this world

  // Additional discriminatory terms
  "障害者め": [3, 4], // You disabled person
  "身障者": [3, 4], // Physically disabled (derogatory)
  "精神異常者": [3, 4], // Mentally abnormal person
  "気狂いめ": [3, 4], // You crazy person
  "ルンペン": [3, 4], // Vagrant (German loanword)
  "浮浪者め": [3, 4], // You vagrant
  "極道者め": [3, 4], // You gang member
  "半グレ": [3, 4], // Semi-delinquent
  "チンピラめ": [3, 4], // You thug
  "不良少年め": [3, 4], // You delinquent
  "ヤンキーかよ": [3, 4], // Are you a delinquent
  "ゴミヤンキー": [3, 4], // Garbage delinquent
  "クソヤンキー": [3, 5], // Shit delinquent
  "劣等人種": [3, 4], // Inferior race
  "劣等種": [3, 4], // Inferior species

  // Additional sexual terms - romaji
  "sefure": [4, 4], // Sex friend
  "hametomo": [4, 4], // Sex friend (vulgar)
  "wannaito": [4, 4], // One-night stand
  "sokuhame": [4, 4], // Immediate sex
  "sokuman": [4, 4], // Immediate sex (vulgar)
  "nanpa": [4, 4], // Pickup (sexual)
  "gyakunan": [4, 4], // Reverse pickup
  "rabuho": [4, 4], // Love hotel
  "futamata": [4, 4], // Two-timing
  "uwaki": [4, 4], // Cheating
  "sekuhara": [4, 4], // Sexual harassment
  "pawahara": [4, 4], // Power harassment
  "chinkanpurei": [4, 4], // Groping play
  "ryoujoku": [4, 4], // Humiliation/violation
  "doreipurei": [4, 4], // Slave play
  "kubijime": [4, 4], // Choking (sexual)
  "pegingu": [4, 4], // Pegging
  "manjiru": [4, 4], // Vaginal fluid (vulgar)

  // Additional romaji - compound
  "kono kusottare ga": [3, 5], // You shithead
  "kono baka ga": [1, 4], // You idiot
  "kono aho ga": [1, 4], // You idiot (Kansai)
  "kono kichigai ga": [3, 5], // You crazy person
  "kono gomi ga": [3, 5], // You garbage
  "kono kuzu ga": [3, 5], // You trash
  "kono kasu ga": [3, 5], // You scum
  "kono gesu ga": [3, 5], // You lowlife
  "kono chikusho ga": [3, 5], // You beast
  "kono gedo ga": [3, 5], // You fiend
  "kono hitodenashi ga": [3, 5], // You inhuman person
  "fuzakenna yo": [3, 5], // Don't mess around
  "nameruna yo": [3, 5], // Don't look down on me
  "choushi norunna yo": [4, 5], // Don't get cocky
  "erasouni sunna": [3, 5], // Don't act arrogant
  "gata gata iunna": [3, 5], // Don't complain
  "sassato usero": [3, 5], // Hurry up and get lost
  "sassato kiero": [3, 5], // Hurry up and disappear
  "sassato shine": [5, 5], // Hurry up and die
  "hayaku shine": [5, 5], // Die quickly
  "ima sugu shine": [5, 5], // Die right now
  "kurushinde shine": [5, 5], // Suffer and die
  "mijimeni shine": [5, 5], // Die miserably
  "hitoride shine": [5, 5], // Die alone
  "inuji ni shiro": [5, 5], // Die like a dog
  "zamaa miro": [3, 5], // Serves you right

  // Additional homophobic/transphobic slurs
  "ホモくさい": [5, 4], // Homo-smelling
  "ホモっぽい": [5, 4], // Homo-ish
  "ホモ臭い": [5, 4], // Homo-stinking
  "ホモだろ": [5, 4], // You're homo right
  "レズだろ": [5, 4], // You're lesbian right
  "オカマっぽい": [5, 4], // Effeminate-ish
  "オカマくさい": [5, 4], // Effeminate-smelling
  "オカマめ": [5, 4], // You effeminate one
  "おなべめ": [5, 4], // You masculine woman
  "ゲイ野郎": [3, 4], // Gay bastard
  "レズ女": [5, 4], // Lesbian woman (derogatory)
  "女装野郎": [3, 4], // Cross-dressing bastard
  "変態野郎": [3, 4], // Pervert bastard
  "変質者め": [5, 4], // You deviant

  // Additional compound insults with この
  "このくそったれが": [3, 5], // You shithead (aggressive)
  "この能なしが": [1, 4], // You incompetent
  "この穀潰しが": [1, 4], // You grain waster
  "この役立たずが": [1, 4], // You useless person
  "この腰抜けが": [1, 4], // You coward
  "この恥知らずが": [1, 4], // You shameless person
  "この面汚しが": [1, 4], // You disgrace
  "この卑怯者が": [1, 4], // You coward
  "この下衆が": [1, 4], // You lowlife
  "この外道が": [1, 4], // You fiend
  "この畜生が": [1, 4], // You beast
  "この人でなしが": [1, 4], // You inhuman person
  "この鬼畜が": [1, 4], // You brute
  "この人非人が": [1, 4], // You inhuman being
  "このけだものが": [1, 4], // You beast
  "この虫けらが": [5, 5], // You insect (dehumanizing)
  "この蛆虫が": [1, 4], // You maggot
  "このゴキブリが": [4, 4], // You cockroach
  "このダニが": [1, 4], // You tick
  "このシラミが": [1, 4], // You louse
  "この寄生虫が": [1, 4], // You parasite
  "この害虫が": [1, 4], // You pest
  "このウジ虫が": [1, 4], // You maggot (katakana)
  "このドブネズミが": [1, 4], // You sewer rat
  "このハイエナが": [1, 4], // You hyena
  "このヒルが": [1, 4], // You leech
  "このミミズが": [1, 4], // You earthworm

  // Additional derogatory terms for appearance
  "ブサイク": [1, 4], // Ugly (katakana)
  "ブサメン": [1, 4], // Ugly face
  "ブサ面": [1, 4], // Ugly face (variant)
  "不細工め": [1, 4], // You ugly
  "醜い": [1, 4], // Ugly (kanji)
  "醜女": [1, 4], // Ugly woman (kanji)
  "醜男": [1, 4], // Ugly man (kanji)
  "オバサン顔": [3, 4], // Old woman face
  "おっさん顔": [3, 4], // Old man face
  "ジジイ顔": [3, 4], // Old man face (vulgar)
  "ババア顔": [3, 4], // Old woman face (vulgar)
  "チビ": [3, 4], // Shorty
  "チビデブ": [1, 4], // Short and fat
  "チビハゲ": [3, 4], // Short and bald
  "チビデブハゲ": [1, 4], // Short fat and bald
  "チビブサ": [1, 4], // Short and ugly
  "デブス": [1, 4], // Fat and ugly
  "ブサデブ": [1, 4], // Ugly and fat
  "豚": [3, 4], // Pig (insult)
  "ブタ": [3, 4], // Pig (katakana)
  "豚野郎": [3, 4], // Pig bastard
  "豚女": [3, 4], // Pig woman
  "豚男": [3, 4], // Pig man
  "デブ男": [1, 4], // Fat man
  "デブ女": [1, 4], // Fat woman
  "クソデブ男": [1, 4], // Shit fat man
  "クソデブ女": [1, 4], // Shit fat woman
  "ハゲデブ": [1, 4], // Bald and fat (katakana)
  "クソハゲ男": [3, 5], // Shit bald man
  "ズラ": [3, 4], // Wig (mocking bald person)
  "ヅラ": [3, 4], // Wig (variant)
  "カツラ": [3, 4], // Wig (katakana)

  // Additional insults about intelligence
  "脳みそ空っぽ": [1, 4], // Empty brain
  "脳みそスカスカ": [1, 4], // Brain is hollow
  "脳みそゼロ": [1, 4], // Zero brain
  "脳みそ入ってない": [1, 4], // No brain inside
  "脳みそ使え": [1, 4], // Use your brain
  "頭空っぽ": [1, 4], // Empty head
  "頭悪すぎ": [1, 4], // Head too bad
  "頭おかしい": [1, 4], // Head is weird (crazy)
  "頭イカれてる": [1, 4], // Head is messed up
  "頭湧いてる": [1, 4], // Head is boiling (crazy)
  "頭大丈夫": [1, 4], // Is your head OK (sarcastic)
  "頭の病院行け": [1, 4], // Go to a head hospital
  "病院行け": [1, 4], // Go to a hospital (you're crazy)
  "精神科行け": [1, 4], // Go to psychiatry
  "精神病院行け": [1, 4], // Go to a mental hospital
  "知恵遅れ": [1, 4], // Slow-witted (derogatory)
  "学習障害": [1, 4], // Learning disability (used as insult)
  "理解力ゼロ": [1, 4], // Zero comprehension
  "判断力ゼロ": [1, 4], // Zero judgment
  "常識ないのか": [1, 4], // Do you have no common sense
  "非常識": [1, 4], // Lacking common sense
  "非常識すぎ": [1, 4], // Too lacking common sense
  "社会不適合者": [1, 4], // Socially maladjusted person

  // Additional insults about worth/value
  "価値なし": [1, 4], // Worthless
  "価値ゼロ": [1, 4], // Zero value
  "存在が無駄": [1, 4], // Existence is wasteful
  "存在が害": [1, 4], // Existence is harmful
  "存在が罪": [1, 4], // Existence is a sin
  "お前の存在自体が害悪": [1, 4], // Your existence itself is harmful
  "この世にいらない": [1, 4], // Not needed in this world
  "この世に不要": [1, 4], // Unnecessary in this world
  "生まれてこなければよかった": [1, 4], // Should not have been born
  "生まれてきたのが間違い": [1, 4], // Being born was a mistake
  "生きてるだけ無駄": [1, 4], // Living is just wasteful
  "酸素の無駄遣い": [1, 4], // Waste of oxygen
  "空気の無駄": [1, 4], // Waste of air
  "食糧の無駄": [1, 4], // Waste of food
  "スペースの無駄": [1, 4], // Waste of space
  "親の顔が見たい": [1, 4], // I want to see your parents' faces (shame)
  "親が泣いてるぞ": [1, 4], // Your parents are crying
  "育ちが悪い": [1, 4], // Badly raised
  "しつけがなってない": [1, 4], // No discipline
  "猿以下": [1, 4], // Below monkeys
  "虫以下": [1, 4], // Below insects
  "ゴミ以下": [1, 4], // Below garbage
  "クソ以下の存在": [3, 5], // Existence below shit
  "犬以下": [1, 4], // Below dogs
  "豚以下": [1, 4], // Below pigs
  "アメーバ以下": [1, 4], // Below amoeba

  // Additional compound profanity - various
  "ぶっころがす": [3, 5], // To knock around
  "ぶっこわしてやる": [3, 5], // I'll destroy you
  "ぶった切る": [3, 5], // To slash
  "ぶったおす": [3, 5], // To knock down
  "ぶちかます": [3, 5], // To slam into
  "ぶちまける": [3, 5], // To spill/expose
  "ぶちこむ": [3, 5], // To throw in
  "ぶちこわす": [3, 5], // To wreck
  "たたっ殺す": [5, 5], // To beat to death
  "なぶり殺す": [5, 5], // To torment to death
  "嬲り殺す": [5, 5], // To torment to death (kanji)
  "蹴り殺す": [5, 5], // To kick to death
  "踏み殺す": [5, 5], // To stomp to death
  "絞め殺す": [5, 5], // To strangle to death
  "焼き殺す": [5, 5], // To burn to death
  "撃ち殺す": [5, 5], // To shoot to death
  "刺し殺す": [5, 5], // To stab to death
  "食い殺す": [5, 5], // To eat to death
  "噛み殺す": [5, 5], // To bite to death
  "引き裂く": [3, 5], // To tear apart
  "引きちぎる": [3, 5], // To rip apart
  "引きずり回す": [3, 5], // To drag around
  "引きずり出す": [3, 5], // To drag out
  "叩き出す": [3, 5], // To throw out
  "蹴り出す": [3, 5], // To kick out
  "追い出す": [3, 5], // To chase out
  "放り出す": [3, 5], // To throw out
  "叩きつける": [3, 5], // To slam against
  "投げつける": [3, 5], // To hurl at
  "ぶつける": [3, 5], // To hit against

  // Additional romaji profanity
  "anpontan": [1, 4], // Idiot (archaic)
  "usunoro": [3, 4], // Slow-witted
  "utsuke": [1, 4], // Fool (archaic)
  "orokmono": [1, 4], // Foolish person
  "kusare": [3, 4], // Rotten
  "kusare gedo": [3, 4], // Rotten fiend
  "kusare yaro": [3, 4], // Rotten bastard
  "kechinbo": [3, 4], // Stingy person
  "konchikusho": [3, 4], // Damn it (emphatic)
  "gokutsubushi": [3, 4], // Grain waster
  "zamaAmiro": [3, 4], // Serves you right
  "zamaa": [3, 4], // Serves you right (short)
  "zuuzuushii": [3, 4], // Shameless
  "takari": [3, 4], // Moocher
  "tonchiki": [3, 4], // Blockhead
  "hozakuna": [3, 4], // Don't spout nonsense
  "oroka mono": [1, 4], // Foolish person
  "gujin": [1, 4], // Stupid person
  "guretsu": [1, 4], // Stupid and inferior
  "gudon": [1, 4], // Stupid and dull
  "akutou": [3, 4], // Villain
  "akunin": [3, 4], // Bad person
  "akuma": [3, 4], // Devil
  "insitsu": [3, 4], // Sneaky/nasty
  "inken": [3, 4], // Treacherous
  "obutsu": [3, 4], // Filth
  "katou": [3, 4], // Low-class
  "geretsu": [3, 4], // Base/vulgar
  "gehin": [3, 4], // Vulgar
  "gaichuu": [3, 4], // Pest
  "kyoujin": [3, 4], // Madman
  "kyouken": [3, 4], // Mad dog
  "gurou": [3, 4], // Ridiculing
  "kirawaremono": [3, 4], // Hated person
  "hikyoumono": [1, 4], // Coward
  "hiretsu": [3, 4], // Base/despicable
  "busaiku": [3, 4], // Already listed variant
  "ahou": [1, 4], // Idiot (Kansai)
  "nouashi": [3, 4], // Brain deficient
  "nounashi": [3, 4], // Already listed variant
  "noumiso kusatteru": [3, 4], // Brain rotting
  "hajisarashi": [3, 4], // Public shame
  "tsura yogoshi": [3, 4], // Disgrace
  "harenchi": [3, 4], // Shameless
  "atsukamashii": [3, 4], // Brazen

  // Additional gaming/internet insults
  "エイム下手": [2, 3], // Bad aim
  "エイムクソ": [3, 5], // Shit aim
  "エイムゴミ": [2, 3], // Garbage aim
  "芋る": [1, 4], // To camp (gaming, cowardly)
  "芋カス": [2, 3], // Camping scum
  "芋砂": [2, 3], // Camping sniper
  "noob": [1, 2], // Noob (used in Japanese gaming)
  "ヌーブ": [2, 3], // Noob (katakana)
  "初心者かよ": [2, 3], // Are you a beginner
  "下手くそ": [2, 3], // Already listed but variant
  "ヘタクソ": [2, 3], // Terrible (katakana)
  "雑魚すぎ": [2, 3], // Too weak
  "雑魚乙": [1, 4], // Weakling, good work (sarcastic)
  "ざっこ": [1, 3], // Weakling (casual)
  "ザッコw": [1, 4], // Weakling LOL
  "弱すぎ": [2, 3], // Too weak
  "弱すぎワロタ": [2, 3], // Too weak, LOL
  "足引っ張るな": [2, 3], // Don't drag us down
  "お荷物すぎ": [2, 3], // Too much of a burden
  "いらね": [2, 3], // Don't need you
  "来んな": [2, 3], // Don't come
  "来るな": [2, 3], // Don't come (standard)
  "参加するな": [2, 3], // Don't participate
  "邪魔すんな": [2, 3], // Don't get in the way (casual)
  "ゲーム辞めろ": [2, 3], // Quit the game
  "引退しろ": [2, 3], // Retire
  "やめちまえ": [2, 3], // Just quit
  "センスない": [2, 3], // No talent/sense
  "センスゼロ": [2, 3], // Zero talent
  "才能ない": [2, 3], // No talent
  "向いてない": [2, 3], // Not cut out for it
  "スマーフ": [2, 3], // Smurf (gaming: experienced player on new account)
  "チーター": [2, 3], // Cheater
  "チートかよ": [2, 3], // Are you cheating
  "壁打ちしてろ": [2, 3], // Go hit a wall (practice alone)
  "bot以下": [2, 3], // Below bot
  "botかよ": [2, 3], // Are you a bot
  "CPU以下": [2, 3], // Below CPU
  "養分乙": [2, 3], // Good work being exploited
  "カモ乙": [2, 3], // Good work being a sucker
  "搾取乙": [2, 3], // Good work being exploited (variant)
  "金ヅル": [2, 3], // Money vine (cash cow, derogatory)
  "ATM": [2, 3], // ATM (person used for money)
  "財布": [2, 3], // Wallet (person used for money)
  "おサイフ": [2, 3], // Wallet (polite prefix, sarcastic)

  // Additional modern internet slang
  "こどおじきもい": [2, 3], // Creepy adult at parents
  "チー牛きも": [2, 3], // Cheese beef creepy
  "チーズ牛丼": [2, 3], // Cheese beef bowl (nerd insult full form)
  "チー牛メガネ": [3, 3], // Cheese beef glasses
  "陰キャきもい": [2, 3], // Creepy introvert
  "陽キャウザい": [2, 3], // Annoying extrovert
  "パリピうざい": [2, 3], // Annoying party people
  "ウェイ系きもい": [2, 3], // Creepy party type
  "量産型女": [3, 3], // Mass-produced woman
  "量産型男": [3, 3], // Mass-produced man
  "地雷メイク": [2, 3], // Landmine makeup
  "地雷系": [2, 3], // Landmine type (problematic)
  "メンヘラきもい": [2, 3], // Creepy mentally ill
  "メンヘラうざい": [2, 3], // Annoying mentally ill
  "構ってちゃんうざい": [2, 3], // Annoying attention seeker
  "かまちょうざい": [2, 3], // Annoying attention seeker (casual)
  "承認欲求やば": [2, 3], // Approval-seeking is crazy
  "承認欲求キモ": [2, 3], // Approval-seeking is creepy
  "マウントうざい": [2, 3], // Annoying one-upping
  "マウントとるな": [2, 3], // Don't one-up
  "イキるな": [2, 3], // Don't act tough
  "イキりすぎ": [2, 3], // Acting too tough
  "調子乗りすぎ": [4, 3], // Getting too cocky
  "調子こきすぎ": [2, 3], // Getting too full of yourself
  "ウザ絡みすんな": [2, 3], // Don't be annoyingly involved
  "クソリプすんな": [3, 5], // Don't shit-reply
  "クソリプ乙": [3, 5], // Good work shit-replying
  "エアプ乙": [2, 3], // Good work pretending
  "にわか乙": [2, 3], // Good work being a poser

  // Additional romaji profanity - more compounds
  "kuso yaro me": [3, 4], // You shit bastard
  "baka yaro me": [3, 4], // You stupid bastard
  "chikusho me": [3, 5], // You damn beast
  "gesu yaro": [3, 4], // Lowlife bastard
  "gesu onna": [3, 5], // Lowlife woman
  "gesu otoko": [3, 5], // Lowlife man
  "kuzu yaro": [3, 4], // Trash bastard
  "kuzu onna": [3, 5], // Trash woman
  "kuzu otoko": [3, 5], // Trash man
  "gomi yaro": [3, 4], // Garbage bastard
  "gomi onna": [3, 5], // Garbage woman
  "gomi otoko": [3, 5], // Garbage man
  "kasu yaro": [3, 4], // Scum bastard
  "kasu onna": [3, 5], // Scum woman
  "kasu otoko": [3, 5], // Scum man
  "buta yaro": [3, 4], // Pig bastard
  "buta onna": [3, 5], // Pig woman
  "buta otoko": [3, 5], // Pig man
  "saru": [3, 5], // Monkey (insult)
  "saru miman": [3, 5], // Below monkeys
  "mushi": [3, 5], // Bug (insult)
  "mushi miman": [3, 5], // Below bugs
  "gokiburi": [4, 5], // Cockroach
  // "dani": [3, 5], // Tick — false positive: common English name (Dani/Daniel)
  "shirami": [3, 5], // Louse
  "kiseichu": [3, 5], // Parasite
  "ujimushi": [3, 5], // Maggot
  "dobunezumi": [3, 5], // Sewer rat
  "hiru": [3, 5], // Leech
  "mimizu": [3, 5], // Earthworm
  "ameba miman": [3, 5], // Below amoeba
  "inu ika": [3, 5], // Below dogs
  "buta ika": [3, 5], // Below pigs
  "gomi ika": [3, 5], // Below garbage
  "kuso ika": [3, 5], // Below shit

  // Additional insults - body shaming romaji
  "chibi": [1, 4], // Shorty
  "chibi debu": [1, 4], // Short and fat
  "chibi hage": [1, 4], // Short and bald
  "debusu": [1, 4], // Fat and ugly
  "busadebu": [1, 4], // Ugly and fat
  "buta": [1, 4], // Pig
  "hage debu": [1, 4], // Bald and fat
  "zura": [1, 4], // Wig (mocking)
  "katsura": [1, 4], // Wig
  "busamen": [1, 4], // Ugly face
  "shikome": [1, 4], // Ugly woman (archaic)
  "minikui": [1, 4], // Ugly
  "minikui onna": [1, 4], // Ugly woman
  "minikui otoko": [1, 4], // Ugly man

  // Additional sexual romaji
  "seiki": [3, 4], // Genitalia
  "seikousha": [3, 4], // Sexual relations
  "seiteki boukou": [3, 4], // Sexual assault
  "seiteki gyakutai": [3, 4], // Sexual abuse
  "waisetsu koui": [3, 4], // Indecent act
  "hibwai": [3, 4], // Obscene
  "kyousei waisetsu": [3, 4], // Forced indecency
  "kyousei seikou": [4, 4], // Forced intercourse
  "shuudan goukan": [5, 5], // Group rape
  "goukan ma": [5, 5], // Rapist
  "goukan han": [5, 5], // Rape criminal
  "seieki mamire": [3, 4], // Covered in semen
  "chinko manko": [4, 4], // Dick pussy
  "manguri gaeshi": [3, 4], // Legs-over-head
  "oshiri no ana": [3, 4], // Butt hole
  "kiku ana": [3, 4], // Chrysanthemum hole
  "kiku mon": [3, 4], // Chrysanthemum gate
  "kuso ana": [3, 5], // Shit hole
  "shiri ana": [3, 4], // Ass hole
  "shojo soushitsu": [3, 4], // Loss of virginity
  "doutei soushitsu": [3, 4], // Loss of virginity (male)
  "hatsu taiken": [3, 4], // First experience
  "fude oroshi": [3, 4], // First sexual experience
  "shuuin": [4, 4], // Masturbation (variant)
  "jitoku": [3, 4], // Self-pollution
  "inkei sounyuu": [3, 4], // Penile insertion
  "chitsu nai shasei": [4, 4], // Vaginal ejaculation
  "chitsu gai shasei": [3, 4], // External ejaculation
  "zengi": [3, 4], // Foreplay
  "aibu": [3, 4], // Caressing
  "seiteki kaikan": [3, 4], // Sexual pleasure
  "zetchou": [3, 4], // Climax
  "hakudaku eki": [3, 4], // White turbid liquid
  "sakibashiri": [3, 4], // Pre-cum
  "gaman jiru": [3, 4], // Pre-cum (patience juice)
  "kari kubi": [3, 4], // Glans
  // "sao": [3, 4], // Shaft — false positive: "SAO" anime, "Sao Paulo"
  "tama bukuro": [3, 4], // Ball sack
  "kougan": [4, 4], // Testicle
  "inkaku": [3, 4], // Clitoris
  "inretsu": [4, 4], // Vulvar cleft
  "shikyu": [3, 4], // Pubic area
  "nyuurin": [3, 4], // Areola
  "nyuubou": [4, 4], // Breast

  // ===== ADDITIONAL ROMAJI VARIATIONS (ALTERNATE SPELLINGS) =====
  "baka yaro": [3, 5], // Stupid bastard (spaced)
  "aho ndara": [1, 5], // Idiot (Kansai spaced)
  "dosukebe": [3, 4], // Super pervert
  "do sukebe": [3, 5], // Super pervert (spaced)
  "ecchi na": [3, 4], // Perverted (adjective)
  "ettchi": [3, 4], // Perverted (alt spelling)
  "hentai yarou": [3, 4], // Pervert bastard
  "kuso baba": [3, 5], // Shit old woman (spaced)
  "kusojiji": [3, 5], // Shit old man
  "kuso jiji": [3, 5], // Shit old man (spaced)
  "kusoonna": [3, 5], // Shit woman
  "kuso onna": [3, 5], // Shit woman (spaced)
  "kusootoko": [3, 5], // Shit man
  "kuso otoko": [3, 5], // Shit man (spaced)
  "kusogaki": [3, 5], // Shit brat
  "kuso mushi": [3, 5], // Shit bug (spaced)
  "kusoame": [3, 5], // Shit rain (damn rain)
  "kusomajime": [3, 5], // Shit serious
  "kusowarota": [3, 5], // Shit laughed (internet)
  "kusowaro": [3, 5], // Shit laugh (internet)
  "kusowarosu": [3, 5], // Shit laugh (2ch)
  "shinee": [5, 5], // Die (elongated)
  "shiney": [5, 5], // Die (English-ized)
  "shi ne yo": [5, 5], // Die (spaced)
  "タヒれ": [5, 5], // Die (katakana evasion variant)
  "たひね": [5, 5], // Die (hiragana evasion)
  "逝ね": [3, 3], // Pass away (euphemism for die)
  "逝け": [5, 5], // Go away/die
  "koroshite yaru": [3, 5], // I'll kill you (spaced)
  "bukkoroshiteyaru": [5, 5], // I'll beat you to death
  "butt obasu": [3, 5], // Punch away (spaced)
  "namen nayo": [3, 5], // Don't mess with me (spaced)
  "fuzakenayo": [3, 5], // Don't mess around (spaced)
  "fuzaken na yo": [3, 4], // Don't mess around (alt)
  "namenjaneeyo": [3, 4], // Don't lick me (vulgar)
  "nanjya kora": [3, 4], // What the hell (dialectal)
  "nanda kora": [3, 4], // What the hell is this
  "doke kora": [3, 4], // Move it, bastard
  "dokikasare": [3, 4], // Get out of the way (harsh)
  "urusai yo": [3, 4], // Shut up (with emphasis)
  "uruseenda": [3, 4], // Shut up (strong)
  "damare kono": [3, 4], // Shut up, you...
  "damare yo": [3, 4], // Shut up (with emphasis)
  "damari yagare": [3, 4], // Shut the hell up
  "deteike": [3, 4], // Get out (romaji)
  "deteke": [3, 4], // Get out (casual)
  "detekeyo": [3, 4], // Get out! (emphatic)
  "usero yo": [3, 5], // Fuck off (emphatic)
  "kiero yo": [3, 4], // Disappear (emphatic)
  "shine kasu": [5, 5], // Die, scum
  "shine gomi": [5, 5], // Die, trash
  "shine kuzu": [5, 5], // Die, garbage
  "shine zako": [1, 4], // Die, weakling

  // ===== MORE KANJI/KANA INSULTS =====
  "糞女": [3, 5], // Shit woman
  "糞男": [3, 5], // Shit man
  "糞親父": [3, 5], // Shit old man
  "糞豚": [3, 5], // Shit pig
  "糞犬": [3, 5], // Shit dog
  "糞猫": [3, 5], // Shit cat
  "糞鬼": [3, 5], // Shit demon
  "糞ゲー": [3, 5], // Shit game
  "くそげー": [3, 5], // Shit game (hiragana)
  "クソ運営": [3, 5], // Shit management (katakana)
  "糞仕様": [3, 5], // Shit specification
  "クソ仕様": [3, 5], // Shit specification
  "クソスレ": [3, 5], // Shit thread (katakana)
  "糞レス": [3, 5], // Shit response
  "馬鹿垂れ": [1, 4], // Stupid person (kanji)
  "大馬鹿者": [1, 4], // Great idiot
  "大馬鹿野郎": [3, 4], // Great idiot bastard
  "超馬鹿": [1, 4], // Super idiot
  "ド馬鹿": [1, 4], // Extreme idiot
  "ド阿呆": [1, 4], // Extreme idiot (Kansai)
  "阿呆丸出し": [1, 4], // Full-on idiot (Kansai)
  "間抜け面": [1, 4], // Idiot face
  "能無し": [1, 4], // Incompetent
  "脳なし": [1, 4], // Brainless
  "脳みそ無し": [1, 4], // No brain matter
  "低脳": [1, 4], // Low brain
  "ちしょう": [1, 4], // Retard (hiragana)
  "チショウ": [1, 4], // Retard (katakana)
  "害児": [1, 4], // Harm child (derogatory)
  "基地害": [1, 4], // Crazy (variant)
  "きち": [1, 4], // Crazy (abbreviated hiragana)
  "キティ": [1, 4], // Crazy (kitty = kichi + suffix)
  "キチママ": [1, 4], // Crazy mom (internet)
  "下衆め": [1, 4], // Scum! (exclamation)
  "下衆い": [1, 4], // Scummy (adjective)
  "ゲスい": [1, 4], // Scummy (katakana)
  "げすい": [1, 4], // Scummy (hiragana)
  "卑しい": [1, 4], // Despicable
  "粘着質": [1, 4], // Stalker type
  "自演": [1, 4], // Self-posting (2ch)
  "ちょん": [1, 4], // Derogatory for Korean (hiragana)
  "ちゃんころ": [1, 4], // Derogatory for Chinese (hiragana)
  "シナ人": [1, 4], // Derogatory for Chinese
  "シナ": [1, 4], // Derogatory for China
  "蛮人": [1, 4], // Barbarian
  "コジキ": [1, 4], // Beggar (katakana)
  "クズ人間": [1, 4], // Garbage human
  "くず人間": [1, 4], // Garbage human (hiragana)
  "ゴミ人間": [1, 4], // Trash human
  "ごみ人間": [1, 4], // Trash human (hiragana)
  "ゴミカス": [1, 4], // Trash scum
  "ごみかす": [1, 4], // Trash scum (hiragana)
  "ごみくず": [1, 4], // Trash garbage (hiragana)
  "カスゴミ": [1, 4], // Scum trash
  "クズゴミ": [1, 4], // Garbage trash
  "ゴミ虫": [1, 4], // Trash bug
  "人間のゴミ": [1, 4], // Human trash
  "人間の屑": [1, 4], // Human scum (kanji)
  "社会のクズ": [1, 4], // Society's garbage
  "社会の底辺": [1, 4], // Bottom of society
  "底辺人間": [1, 4], // Bottom-tier human
  "底辺層": [1, 4], // Bottom stratum
  "敗北者": [1, 4], // Defeated person
  "落伍者": [1, 4], // Dropout/failure
  "やくたたず": [1, 4], // Useless person (hiragana)
  "無能者": [1, 4], // Incompetent person
  "無能め": [1, 4], // Incompetent! (exclamation)
  "ポンコツ": [1, 4], // Broken-down/useless
  "ボンクラ": [1, 4], // Blockhead
  "ぼんくら": [1, 4], // Blockhead (hiragana)
  "トンマ": [1, 4], // Dunce
  "ドジ": [1, 4], // Klutz
  "どじ": [1, 4], // Klutz (hiragana)
  "マヌケ": [1, 4], // Fool (katakana)
  "たこ": [1, 4], // Octopus/idiot (hiragana)
  "はげ": [1, 4], // Baldy (hiragana)
  "禿": [1, 4], // Baldy (kanji)
  "禿頭": [1, 4], // Bald head
  "ハゲ頭": [1, 4], // Bald head
  "でぶ": [1, 4], // Fatso (hiragana)
  "ぶた": [1, 4], // Pig (hiragana)
  "クソブタ": [3, 5], // Shit pig
  "ちび": [1, 4], // Shorty (hiragana)
  "ぶす": [1, 4], // Ugly woman (hiragana)
  "ドブス": [1, 4], // Extreme ugly
  "どぶす": [1, 4], // Extreme ugly (hiragana)
  "クソブサイク": [1, 4], // Shit ugly
  "ドブサイク": [1, 4], // Extreme ugly
  "きもおた": [1, 4], // Gross otaku (hiragana)
  "キモい": [1, 4], // Gross
  "キッモ": [1, 4], // Gross (elongated)
  "きっも": [1, 4], // Gross (elongated hiragana)
  "グロい": [1, 4], // Grotesque
  "ぐろい": [1, 4], // Grotesque (hiragana)
  "ウザイ": [1, 4], // Annoying (katakana)
  "ウゼー": [1, 4], // Annoying (elongated)
  "うぜー": [1, 4], // Annoying (elongated hiragana)
  "ウゼェ": [1, 4], // Annoying (variant)
  "うぜぇ": [1, 4], // Annoying (variant hiragana)
  "ムカつく": [1, 4], // Irritating
  "むかつく": [1, 4], // Irritating (hiragana)
  "イラつく": [1, 4], // Irritating
  "いらつく": [1, 4], // Irritating (hiragana)

  // ===== MORE 2CH/5CH/NICO INTERNET SLANG =====
  "ワロス": [2, 3], // LOL (2ch)
  "テラワロス": [2, 3], // Tera-LOL (extreme laughing)
  "ギガワロス": [2, 3], // Giga-LOL
  "メガワロス": [2, 3], // Mega-LOL
  "ワロタwww": [2, 3], // Laughed www
  "wwww": [2, 3], // Japanese LOL
  "藁": [2, 3], // LOL (kanji for straw/warota)
  "ｷﾀ━━━(ﾟ∀ﾟ)━━━!!": [2, 5], // It's here!! (excitement/mockery)
  "ﾜﾛﾀ": [2, 3], // Laughed (half-width)
  "ﾜﾛｽ": [2, 3], // LOL (half-width)
  "ｸｿﾜﾛﾀ": [3, 5], // Shit laughed (half-width)
  "ぷぎゃー": [2, 3], // Pointing and laughing (sound)
  "( ´,_ゝ`)プッ": [2, 3], // Scoffing
  "必死すぎ": [2, 3], // Too desperate
  "ファビョーン": [2, 3], // Raging (derogatory)
  "涙拭けよ": [2, 3], // Wipe your tears
  "ブーメラン": [2, 3], // Boomerang (hypocrisy)
  "おまいう": [2, 3], // You're one to talk (おまえが言うな)
  "おまえがいうな": [2, 3], // You're one to talk
  "目くそ鼻くそ": [2, 3], // Pot calling kettle black
  "どの口が言う": [2, 3], // With what mouth do you say that
  "何様": [2, 3], // Who do you think you are
  "何様のつもり": [2, 3], // Who do you think you are
  "お前何様": [2, 3], // Who do you think you are
  "調子乗んな": [4, 3], // Don't get cocky
  "調子に乗るな": [4, 3], // Don't get cocky (formal)
  "図に乗るな": [2, 3], // Don't get full of yourself
  "いい気になるな": [2, 3], // Don't be smug
  "思い上がるな": [2, 3], // Don't be arrogant
  "つけあがるな": [2, 3], // Don't get uppity
  "ナメんな": [2, 3], // Don't underestimate (katakana)
  "ナメてんの": [2, 3], // Are you looking down on me?
  "ナメとんか": [2, 3], // Are you looking down? (Kansai)
  "舐めとんか": [2, 3], // Are you looking down? (Kansai kanji)
  "舐めとんのか": [2, 3], // Are you looking down? (Kansai)

  // ===== ADDITIONAL KANSAI/OSAKA DIALECT =====
  "しばくぞコラ": [3, 4], // I'll beat you, hey
  "いわしたろか": [3, 4], // Shall I wreck you?
  "やったろか": [3, 4], // Shall I do you?
  "ぶちかましたる": [3, 4], // I'll smash you (Kansai)
  "何さらしとんじゃ": [3, 4], // What are you doing (angry)
  "何しとんねん": [3, 4], // What are you doing
  "何ぬかしとんじゃ": [3, 4], // What are you saying (angry)
  "ぬかすな": [3, 4], // Don't say that (harsh)
  "ぬかせ": [3, 4], // Say it (challenge)
  "ほざけ": [3, 4], // Babble on (sarcastic)
  "こら待たんかい": [5, 5], // Hey wait (threatening)
  "じゃかましい": [3, 4], // Noisy/shut up (Kansai)
  "やかましいわ": [3, 4], // Shut up (Kansai)
  "うっとうしい": [3, 4], // Annoying (Kansai emphasis)
  "しょーもな": [3, 4], // Worthless (Kansai casual)
  "あかんたれ": [3, 4], // Good-for-nothing (Kansai)
  "へたれ": [1, 4], // Coward/wimp
  "ヘタレ": [1, 4], // Coward/wimp (katakana)
  "玉無し": [4, 4], // No balls
  "タマなし": [4, 4], // No balls (katakana)
  "チキン": [1, 4], // Chicken (coward)
  "ビビり": [3, 4], // Scaredy-cat
  "びびり": [3, 4], // Scaredy-cat (hiragana)
  "ションベン垂れ": [1, 4], // Piss-dripping (coward)

  // ===== ADDITIONAL KYUSHU DIALECT =====
  "くらすぞ": [3, 4], // I'll hit you (Hakata)
  "くらわすぞ": [3, 4], // I'll hit you (variant)
  "せからしか": [3, 4], // Annoying (Kumamoto)
  "なんしようと": [3, 4], // What are you doing (Hakata aggressive)
  "なめとっちゃ": [3, 4], // Are you looking down (Kyushu)
  "なめよっちゃ": [3, 4], // Looking down on me (Kyushu)
  "ぬしゃ": [3, 4], // You (Kagoshima aggressive)
  "わいや": [3, 4], // You (Kagoshima aggressive)

  // ===== ADDITIONAL TOHOKU DIALECT =====
  "どんだば": [3, 4], // What is it (Tohoku aggressive)
  "なんだべ": [3, 4], // What is it (Tohoku aggressive)
  "この野郎だべ": [3, 4], // This bastard (Tohoku)
  "ばがやろう": [3, 4], // Stupid bastard (Tohoku pronunciation)
  "ばがだ": [1, 4], // Stupid (Tohoku)
  "ばがでねえが": [1, 4], // Isn't it stupid (Tohoku)
  "ふざけんでねえ": [3, 4], // Don't mess around (Tohoku)
  "うるさいべ": [3, 4], // Shut up (Tohoku)
  "けやぐ": [3, 4], // Annoying person (Aomori)

  // ===== ADDITIONAL OKINAWAN =====
  "ふりむん": [1, 4], // Idiot (Okinawan)
  "ゆくさー": [3, 4], // Liar (Okinawan)
  "わじわじーする": [3, 4], // Getting angry (Okinawan)
  "ちゅらかーぎー": [1, 4], // Ugly face (ironic, Okinawan)
  "やなかーぎー": [1, 4], // Ugly face (Okinawan)
  "やなわらばー": [3, 4], // Bad child (Okinawan)
  "がちまやー": [3, 4], // Glutton (Okinawan)
  "いったーよ": [3, 4], // You bastard (Okinawan)
  "ひんすー": [3, 4], // Poor person (Okinawan derogatory)
  "あきさみよー": [3, 4], // Oh my god (Okinawan exclamation)
  "くすけー": [3, 5], // Shit (Okinawan)

  // ===== ADDITIONAL HOKKAIDO DIALECT =====
  "たくらんけ": [1, 4], // Idiot (Hokkaido)
  "けっぱれ": [3, 4], // Try harder (Hokkaido, dismissive)

  // ===== NAGOYA/CHUBU DIALECT =====
  "たーけ": [1, 3], // Fool (Nagoya casual)
  "だぎゃー": [3, 4], // Exclamation (Nagoya, vulgar)
  "どたわけ": [1, 4], // Big fool (Nagoya)
  "いかんわ": [3, 4], // No good (Nagoya disapproval)

  // ===== MORE SEXUAL/EXPLICIT TERMS =====
  "淫婦": [5, 4], // Whore
  "援助交際": [3, 4], // Compensated dating (full)
  "パパ活": [3, 4], // Sugar daddy dating
  "ママ活": [3, 4], // Sugar mommy dating
  "せふれ": [3, 4], // Sex friend (hiragana)
  "びっち": [3, 4], // Bitch (hiragana)
  "スケベ": [3, 4], // Pervert
  "助兵衛": [3, 4], // Pervert (kanji)
  "助平": [3, 4], // Pervert (kanji variant)
  "好色": [3, 4], // Lustful
  "色魔": [4, 4], // Sex demon
  "色狂い": [3, 4], // Sex-crazy
  "色キチ": [3, 4], // Sex-crazy (abbrev)
  "発情": [3, 4], // In heat
  "発情期": [3, 4], // Mating season (derogatory for humans)
  "盛り": [3, 4], // In heat (animal term for humans)
  "サカり": [3, 4], // In heat (katakana)
  "さかり": [3, 4], // In heat (hiragana)
  "レイパー": [5, 5], // Rapist (English loanword)
  "レイプ犯": [5, 5], // Rape criminal
  "レイプ魔": [5, 5], // Rape demon
  "ちかん": [3, 4], // Groper (hiragana)
  "変態女": [3, 4], // Pervert woman
  "変態男": [3, 4], // Pervert man
  "ろりこん": [3, 4], // Lolicon (hiragana)
  "しょたこん": [3, 4], // Shotacon (hiragana)
  "マザコン": [3, 4], // Mother complex
  "シスコン": [3, 4], // Sister complex
  "ブラコン": [3, 4], // Brother complex
  "ファザコン": [1, 4], // Father complex
  "童貞厨": [3, 4], // Male-virgin-obsessed (internet)
  "非モテ": [3, 4], // Unpopular (romantically)
  "モテない": [3, 4], // Not popular (romantically)
  "まんさん": [3, 4], // Women (derogatory, from manko)
  "ま～ん(笑)": [3, 4], // Women LOL (derogatory)
  "ち〜ん": [3, 4], // Men (derogatory retort)
  "ちーん(笑)": [3, 4], // Men LOL (derogatory)
  "おばはん": [3, 4], // Old woman (Kansai derogatory)
  "老いぼれ": [3, 4], // Senile old person

  // ===== THREAT/VIOLENCE EXPRESSIONS =====
  "殴り殺す": [5, 5], // Beat to death
  "叩き殺す": [5, 5], // Strike to death
  "撲殺": [5, 5], // Beat to death
  "刺殺": [5, 5], // Stabbing death
  "射殺": [5, 5], // Shooting death
  "焼殺": [5, 5], // Burning death
  "絞殺": [5, 5], // Strangulation
  "毒殺": [5, 5], // Poisoning death
  "斬殺": [5, 5], // Slashing death
  "殺したる": [5, 5], // I'll kill you (Kansai)
  "ぶっ殺してやる": [5, 5], // I'll fucking kill you
  "ぶっ殺したる": [5, 5], // I'll fucking kill you (Kansai)
  "首を絞める": [5, 5], // Strangle your neck
  "首吊れ": [5, 5], // Hang yourself
  "死んでくれ": [5, 5], // Please die
  "死んだ方がいい": [5, 5], // Better off dead
  "生きる価値なし": [5, 5], // No value in living
  "この世から消えろ": [5, 5], // Disappear from this world
  "地獄行き": [5, 5], // Bound for hell
  "呪ってやる": [5, 5], // I'll curse you
  "呪い殺す": [5, 5], // Curse to death
  "祟ってやる": [5, 5], // I'll haunt you
  "ぶっ潰す": [5, 5], // Fucking crush
  "叩き潰す": [5, 5], // Smash to pieces
  "ぼこる": [5, 5], // Beat up (hiragana)
  "リンチ": [5, 5], // Lynch
  "袋叩き": [5, 5], // Gang beating

  // ===== MORE ROMAJI COMPOUND INSULTS =====
  "kichigai yarou": [3, 4], // Crazy bastard
  "teme": [1, 4], // You (extremely rude, short)
  "konoyarou": [3, 4], // You bastard
  "kono yarou": [3, 5], // You bastard (spaced)
  "kono kuso yarou": [3, 4], // You shit bastard
  "kono baka yarou": [3, 4], // You stupid bastard
  "kono ama": [1, 4], // You bitch
  "kono gaki": [1, 4], // You brat
  "kono chikushou": [1, 4], // You beast
  "bakamono": [1, 4], // Fool
  "usuratonkachi": [1, 4], // Dimwit
  "rokudemonai": [1, 4], // Good-for-nothing
  "rokudemonashi": [1, 4], // Good-for-nothing (noun)
  "betabeta suruna": [1, 4], // Don't be clingy
  "kutabare kuzu": [1, 4], // Drop dead scum
  "kutabare kasu": [1, 4], // Drop dead scum
  "kuso kurae": [3, 5], // Eat shit
  "chikushou me": [1, 4], // You beast
  "urusee baka": [1, 4], // Shut up stupid
  "damatte ro": [1, 4], // Shut up and stay
  "me no mae kara kieyagare": [1, 4], // Disappear from my sight
  "zako ga": [1, 4], // Weakling!
  "gomi ga": [1, 4], // Trash!
  "kasu ga": [1, 4], // Scum!
  "kuzu ga": [1, 4], // Garbage!
  "uzee nda yo": [1, 4], // You're annoying
  "kimoi nda yo": [1, 4], // You're gross
  "kusai nda yo": [1, 4], // You stink
  "shine yo gomi": [5, 5], // Die, trash
  // "iku": [1, 4], // commented out — severity 1, very low signal
  "ikisou": [1, 4], // About to come (sexual)
  "ikasete": [1, 4], // Make me come (sexual)
  "iku iku": [1, 4], // Coming coming (sexual)

  // ===== GAMING/ONLINE INSULTS =====
  "ざこ": [1, 4], // Weakling (hiragana)
  "雑魚専": [1, 4], // Only fights weaklings
  "雑魚狩り": [1, 4], // Hunting weaklings
  "ザッコ": [1, 4], // Weakling (elongated)
  "ニワカ": [1, 4], // Newbie/poser
  "えあぷ": [1, 4], // Armchair player (hiragana)
  "チーミング": [1, 4], // Teaming (cheating)
  "芋虫": [1, 4], // Caterpillar (camper insult)
  "お荷物プレイ": [1, 4], // Dead weight play
  "寄生": [1, 4], // Parasite (carried player)
  "寄生虫": [1, 4], // Parasite
  "鴨": [1, 4], // Duck (easy target)
  "かも": [1, 4], // Duck/easy target (hiragana)
  "晒しスレ": [1, 4], // Shaming thread
  "通報": [5, 5], // Report (threatening)
  "通報した": [1, 4], // Reported you
  "垢BAN": [1, 4], // Account ban
  "クソエイム": [3, 5], // Shit aim
  "アンインストールしろ": [1, 4], // Uninstall
  "回線切れ": [1, 4], // Disconnect (insulting)
  "回線細い": [1, 4], // Thin connection (insult)
  "ラグい": [1, 4], // Laggy
  "ラグ死": [5, 5], // Lag death
  "糞マップ": [3, 5], // Shit map
  "糞バランス": [3, 5], // Shit balance
  "糞アプデ": [3, 5], // Shit update
  "クソゲーすぎ": [3, 5], // Too much of a shit game
  "ゲームやめろ": [1, 4], // Quit the game
  "二度と来るな": [1, 4], // Never come back
  "消えろカス": [1, 4], // Disappear scum
  "足引っ張んな": [1, 4], // Don't drag us down

  // ===== ADDITIONAL COMPOUND EXPRESSIONS =====
  "生きてる価値がない": [3, 5], // No value in being alive
  "生まれてくるな": [3, 5], // Should not have been born
  "常識がない": [3, 5], // No common sense
  "教養がない": [3, 5], // No education/culture
  "品がない": [3, 5], // No class
  "人としてどうなの": [3, 5], // What kind of person are you
  "人として終わってる": [3, 5], // You're finished as a person
  "おわコン": [3, 5], // Over content (variant)
  "オワタ": [3, 5], // It's over
  "人生終了": [3, 5], // Life over
  "詰んだ": [3, 5], // Checkmate (you're done)
  "詰んでる": [3, 5], // Checkmated (hopeless)
  "ザマア": [3, 5], // Serves you right (katakana)
  "ざまぁ": [3, 5], // Serves you right (variant)
  "いい気味": [3, 5], // Serves you right (lit: good feeling)
  "ざまーみろ": [3, 5], // Serves you right (elongated)
  "メシウマ": [3, 5], // Meal tastes good (schadenfreude, internet)
  "めしうま": [3, 5], // Meal tastes good (hiragana)
  "飯ウマ": [3, 5], // Meal delicious (schadenfreude)
  "他人の不幸で飯がうまい": [3, 5], // Others' misfortune makes my meal taste good
  "にーと": [3, 5], // NEET (hiragana)
  "ひきこもり": [3, 5], // Hikikomori (hiragana)
  "なまぽ": [3, 5], // Welfare (hiragana)
  "すねかじり": [3, 5], // Parent-moocher
  "ぱらさいと": [3, 5], // Parasite (hiragana)
  "寄生虫め": [3, 5], // Parasite!
  "タダ飯食い": [3, 5], // Free-meal eater
};
const japaneseBadWords: Record<string, { s: number; c: number }> = {};
for (const [k, [s, c]] of Object.entries(_d)) {
    japaneseBadWords[k] = { s, c };
}
export default japaneseBadWords;

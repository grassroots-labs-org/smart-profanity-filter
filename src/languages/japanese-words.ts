/**
 * Japanese profanity words list
 * Contains common profanities, insults, and offensive terms.
 * Includes native Japanese profanity and commonly used katakana loanword profanity.
 * ⚠️ Warning: This file contains explicit language in Japanese
 */
const japaneseBadWords: Record<string, { s: number; c: number }> = {
  // Native Japanese profanity
  "クソ": { s: 3, c: 5 }, // Shit/damn
  "糞": { s: 3, c: 5 }, // Shit (kanji)
  "くそったれ": { s: 3, c: 5 }, // Shithead
  "くたばれ": { s: 3, c: 4 }, // Drop dead
  "畜生": { s: 5, c: 5 }, // Damn it / beast
  "死ね": { s: 5, c: 5 }, // Die
  "馬鹿": { s: 1, c: 4 }, // Idiot/fool
  "バカ": { s: 1, c: 4 }, // Idiot/fool (katakana)
  "アホ": { s: 1, c: 4 }, // Idiot (Kansai)
  "変態": { s: 3, c: 4 }, // Pervert
  "痴漢": { s: 3, c: 4 }, // Groper/molester
  "きちがい": { s: 3, c: 4 }, // Crazy/insane
  "ケツ": { s: 3, c: 4 }, // Ass
  "ちんこ": { s: 4, c: 4 }, // Penis (vulgar)
  "ちんちん": { s: 4, c: 4 }, // Penis (childish)
  "ちんぽ": { s: 4, c: 4 }, // Penis (vulgar)
  "まんこ": { s: 4, c: 4 }, // Pussy (vulgar)
  "おっぱい": { s: 4, c: 4 }, // Breasts
  "金玉": { s: 4, c: 4 }, // Testicles (kanji)
  "きんたま": { s: 4, c: 4 }, // Testicles (hiragana)
  "やりまん": { s: 3, c: 4 }, // Slut
  "売春婦": { s: 5, c: 4 }, // Prostitute
  "強姦": { s: 5, c: 5 }, // Rape
  "野郎": { s: 3, c: 4 }, // Bastard
  "くそ野郎": { s: 3, c: 4 }, // Shit bastard
  "てめえ": { s: 3, c: 4 }, // You (hostile)
  "きさま": { s: 3, c: 4 }, // You (hostile/archaic)
  "雌豚": { s: 3, c: 4 }, // Sow/female pig
  "デブ": { s: 1, c: 4 }, // Fatso
  "ブス": { s: 1, c: 4 }, // Ugly (woman)
  "カス": { s: 3, c: 4 }, // Scum/dregs
  "クズ": { s: 3, c: 4 }, // Trash/scum
  "ゴミ": { s: 3, c: 4 }, // Garbage
  "尻": { s: 3, c: 5 }, // Butt/ass
  "精子": { s: 3, c: 4 }, // Sperm
  "射精": { s: 4, c: 4 }, // Ejaculation
  "自慰": { s: 4, c: 4 }, // Masturbation
  "フェラ": { s: 4, c: 5 }, // Fellatio (abbreviation)
  "淫乱": { s: 4, c: 4 }, // Lewd/promiscuous
  "中出し": { s: 3, c: 4 }, // Creampie
  "パイズリ": { s: 4, c: 4 }, // Titjob
  "売女": { s: 5, c: 4 }, // Whore
  "ふざけるな": { s: 3, c: 5 }, // Don't mess around / fuck off
  "エロ": { s: 3, c: 4 }, // Erotic/perverted
  "ちくび": { s: 3, c: 4 }, // Nipple
  "ザーメン": { s: 3, c: 4 }, // Semen (German loanword)
  "セックス": { s: 3, c: 4 }, // Sex

  // Katakana loanword profanity (commonly used in Japanese)
  "小便": { s: 3, c: 4 }, // Urine/piss
  "放尿": { s: 3, c: 4 }, // Urination
  "獣性": { s: 5, c: 5 }, // Bestiality/animal nature
  "恋物癖": { s: 4, c: 4 }, // Fetishism
  "アナル": { s: 3, c: 4 }, // Anal
  "アスホール": { s: 3, c: 4 }, // Asshole
  "コック": { s: 4, c: 4 }, // Cock
  "コックサッカー": { s: 4, c: 4 }, // Cocksucker
  "ブロージョブ": { s: 4, c: 5 }, // Blowjob
  "ブルシット": { s: 3, c: 5 }, // Bullshit
  "ディルドー": { s: 3, c: 4 }, // Dildo
  "ファゴット": { s: 3, c: 4 }, // Faggot
  "ペニス": { s: 4, c: 4 }, // Penis
  "プッシー": { s: 4, c: 4 }, // Pussy
  "バギーナ": { s: 4, c: 4 }, // Vagina
  "オーガスム": { s: 3, c: 4 }, // Orgasm
  "オルガスム": { s: 3, c: 4 }, // Orgasm (alternate)
  "コンドム": { s: 3, c: 4 }, // Condom
  "マゾキスト": { s: 3, c: 4 }, // Masochist
  "サディスト": { s: 3, c: 4 }, // Sadist
  "シーメール": { s: 3, c: 4 }, // Shemale
  "ニガー": { s: 3, c: 4 }, // N-word
  "ビッチ": { s: 3, c: 4 }, // Bitch
  "ファック": { s: 3, c: 5 }, // Fuck
  "レイプ": { s: 5, c: 5 }, // Rape
  "スメグマ": { s: 3, c: 4 }, // Smegma

  // Additional Japanese profanity
  "あほんだら": { s: 1, c: 4 }, // Idiot (Kansai)
  "うざい": { s: 3, c: 4 }, // Annoying
  "うぜえ": { s: 3, c: 4 }, // Annoying (rougher)
  "おまんこ": { s: 4, c: 4 }, // Pussy (polite prefix + vulgar)
  "がいじ": { s: 3, c: 4 }, // Disabled person (internet slang, offensive)
  "きしょい": { s: 3, c: 4 }, // Gross/disgusting
  "きもい": { s: 3, c: 4 }, // Disgusting/creepy
  "くそがき": { s: 3, c: 5 }, // Shit brat
  "くそばばあ": { s: 3, c: 5 }, // Shit old woman
  "くそじじい": { s: 3, c: 5 }, // Shit old man
  "こじき": { s: 3, c: 4 }, // Beggar (discriminatory)
  "このやろう": { s: 3, c: 4 }, // You bastard
  "ざけんな": { s: 3, c: 5 }, // Don't fuck with me
  "しね": { s: 5, c: 5 }, // Die (hiragana variant)
  "すけべ": { s: 3, c: 4 }, // Pervert
  "ちくしょう": { s: 3, c: 4 }, // Damn it
  "どあほ": { s: 1, c: 4 }, // Big idiot (Kansai)
  "とんま": { s: 3, c: 4 }, // Dunce
  "のろま": { s: 3, c: 4 }, // Slowpoke (insult)
  "ばかやろう": { s: 3, c: 4 }, // Stupid bastard
  "ぶさいく": { s: 1, c: 4 }, // Ugly
  "ぼけ": { s: 1, c: 4 }, // Senile / idiot
  "まぬけ": { s: 1, c: 4 }, // Fool
  "ろくでなし": { s: 3, c: 4 }, // Good-for-nothing
  "低能": { s: 3, c: 4 }, // Low-ability (insult)
  "売国奴": { s: 3, c: 4 }, // Traitor
  "外道": { s: 3, c: 4 }, // Brute/fiend
  "廃人": { s: 3, c: 4 }, // Human waste
  "気違い": { s: 3, c: 4 }, // Insane (offensive kanji)
  "知障": { s: 3, c: 4 }, // Mentally disabled (abbreviation, offensive)
  "穢多": { s: 3, c: 4 }, // Historical discriminatory term
  "糞ガキ": { s: 3, c: 5 }, // Shit brat (kanji)
  "糞野郎": { s: 3, c: 4 }, // Shit bastard (kanji)
  "落ちこぼれ": { s: 3, c: 4 }, // Dropout/failure
  "陰キャ": { s: 3, c: 4 }, // Introvert (internet insult)
  "ガイジ": { s: 3, c: 4 }, // Disabled (katakana, internet slang)
  "キモオタ": { s: 3, c: 4 }, // Creepy otaku
  "シコる": { s: 4, c: 4 }, // To masturbate (internet slang)
  "ヤリチン": { s: 5, c: 4 }, // Man-whore
  "ヤリマン": { s: 3, c: 4 }, // Already listed variant
  "氏ね": { s: 5, c: 5 }, // Die (internet censored form)
  "ま○こ": { s: 3, c: 4 }, // Censored まんこ
  "ち○こ": { s: 3, c: 4 }, // Censored ちんこ

  // クソ/糞 compounds
  "くそぼけ": { s: 1, c: 4 }, // Shit-idiot
  "くそ女": { s: 3, c: 5 }, // Shit woman
  "くそ男": { s: 3, c: 5 }, // Shit man
  "くそ食らえ": { s: 3, c: 5 }, // Eat shit
  "くそたれ": { s: 3, c: 5 }, // Shit-drip
  "くそみそ": { s: 3, c: 5 }, // Shit and miso (worthless)
  "くそまみれ": { s: 3, c: 5 }, // Covered in shit
  "クソガキ": { s: 3, c: 5 }, // Shit brat (katakana)
  "クソ野郎": { s: 3, c: 4 }, // Shit bastard (katakana)
  "クソビッチ": { s: 3, c: 5 }, // Shit bitch
  "クソアマ": { s: 3, c: 5 }, // Shit woman (vulgar)
  "糞虫": { s: 3, c: 5 }, // Shit insect
  "糞ったれ": { s: 3, c: 5 }, // Shit-drip (kanji)

  // バカ/馬鹿 compounds
  "大馬鹿": { s: 1, c: 4 }, // Great fool
  "馬鹿たれ": { s: 1, c: 4 }, // Stupid drip
  "馬鹿野郎": { s: 3, c: 4 }, // Stupid bastard
  "馬鹿者": { s: 1, c: 4 }, // Stupid person
  "馬鹿女": { s: 1, c: 4 }, // Stupid woman
  "馬鹿男": { s: 1, c: 4 }, // Stupid man
  "馬鹿面": { s: 1, c: 4 }, // Stupid face
  "バカタレ": { s: 1, c: 4 }, // Stupid drip (katakana)
  "ばかもの": { s: 1, c: 4 }, // Stupid person (hiragana)
  "ドバカ": { s: 1, c: 4 }, // Huge idiot

  // Discriminatory terms
  "非人": { s: 3, c: 4 }, // Non-person (historical slur)
  "チョン": { s: 3, c: 4 }, // Slur for Koreans
  "部落民": { s: 3, c: 4 }, // Burakumin (discriminatory)
  "毛唐": { s: 3, c: 4 }, // Slur for foreigners
  "三国人": { s: 3, c: 4 }, // Derogatory for foreigners
  "土人": { s: 3, c: 4 }, // Primitive person (slur)
  "支那": { s: 5, c: 5 }, // Derogatory for China
  "支那人": { s: 5, c: 5 }, // Derogatory for Chinese people
  "チャンコロ": { s: 3, c: 4 }, // Slur for Chinese
  "露助": { s: 3, c: 4 }, // Slur for Russians
  "ジャップ": { s: 3, c: 4 }, // Jap (self-referential slur)
  "ガイジン": { s: 3, c: 4 }, // Foreigner (can be derogatory)
  "不法滞在者": { s: 3, c: 4 }, // Illegal alien (derogatory use)

  // Sexual terms
  "おめこ": { s: 4, c: 4 }, // Female genitalia (Kansai)
  "ぼぼ": { s: 4, c: 4 }, // Sexual intercourse (dialectal)
  "やる": { s: 4, c: 4 }, // To do it (sexual)
  "はめる": { s: 4, c: 4 }, // To insert (sexual)
  "挿入": { s: 4, c: 4 }, // Insertion (sexual)
  "膣": { s: 4, c: 4 }, // Vagina
  "陰茎": { s: 4, c: 4 }, // Penis
  "勃起": { s: 4, c: 4 }, // Erection
  "包茎": { s: 4, c: 4 }, // Phimosis (used as insult)
  "童貞": { s: 4, c: 4 }, // Virgin (male, used as insult)
  "痴女": { s: 4, c: 4 }, // Female pervert
  "淫売": { s: 5, c: 4 }, // Prostitute
  "売春": { s: 5, c: 4 }, // Prostitution
  "援交": { s: 5, c: 4 }, // Compensated dating
  "風俗": { s: 4, c: 4 }, // Sex industry
  "ソープ": { s: 4, c: 4 }, // Soapland (sex establishment)
  "デリヘル": { s: 4, c: 4 }, // Delivery health (escort service)
  "パンチラ": { s: 4, c: 4 }, // Panty shot
  "手コキ": { s: 4, c: 4 }, // Handjob
  "手マン": { s: 4, c: 4 }, // Manual stimulation
  "潮吹き": { s: 4, c: 4 }, // Squirting
  "青姦": { s: 4, c: 4 }, // Outdoor sex
  "乱交": { s: 4, c: 4 }, // Orgy
  "痴漢行為": { s: 4, c: 4 }, // Groping acts
  "陰毛": { s: 4, c: 4 }, // Pubic hair
  "陰部": { s: 4, c: 4 }, // Genitals
  "陰唇": { s: 4, c: 4 }, // Labia
  "陰嚢": { s: 4, c: 4 }, // Scrotum
  "肉便器": { s: 4, c: 4 }, // Meat toilet (extremely vulgar)
  "玉舐め": { s: 4, c: 4 }, // Ball licking
  "顔射": { s: 4, c: 4 }, // Facial (sexual)
  "口内射精": { s: 4, c: 4 }, // Oral ejaculation
  "二穴": { s: 4, c: 4 }, // Double penetration
  "素股": { s: 4, c: 4 }, // Intercrural sex
  "本番": { s: 4, c: 4 }, // Full sex service
  "逆レイプ": { s: 5, c: 5 }, // Reverse rape
  "輪姦": { s: 5, c: 5 }, // Gang rape
  "近親相姦": { s: 5, c: 5 }, // Incest
  "獣姦": { s: 5, c: 5 }, // Bestiality
  "屍姦": { s: 4, c: 4 }, // Necrophilia
  "盗撮": { s: 4, c: 4 }, // Voyeurism/hidden camera
  "痴態": { s: 4, c: 4 }, // Lewd behavior
  "淫行": { s: 4, c: 4 }, // Obscene acts
  "猥褻": { s: 4, c: 4 }, // Obscenity
  "不倫": { s: 4, c: 4 }, // Adultery
  "姦通": { s: 4, c: 4 }, // Adultery (legal term)
  "ペドフィリア": { s: 5, c: 5 }, // Pedophilia
  "ロリコン": { s: 4, c: 4 }, // Lolicon
  "ショタコン": { s: 4, c: 4 }, // Shotacon
  "処女膜": { s: 4, c: 4 }, // Hymen
  "精液": { s: 3, c: 4 }, // Semen
  "愛液": { s: 4, c: 4 }, // Sexual fluids
  "潮": { s: 4, c: 4 }, // Squirt
  "オナニー": { s: 4, c: 4 }, // Masturbation
  "オナホ": { s: 4, c: 4 }, // Masturbation toy
  "バイブ": { s: 4, c: 4 }, // Vibrator
  "ローター": { s: 4, c: 4 }, // Rotor (sex toy)
  "ぶっかけ": { s: 4, c: 4 }, // Bukkake

  // Internet slang insults
  "DQN": { s: 2, c: 3 }, // Delinquent (internet slang)
  "ニート": { s: 2, c: 3 }, // NEET
  "情弱": { s: 2, c: 3 }, // Information-weak
  "池沼": { s: 2, c: 3 }, // Pond-swamp (sounds like 知障)
  "きめえ": { s: 2, c: 3 }, // Gross (slang)
  "消えろ": { s: 2, c: 3 }, // Disappear/get lost
  "タヒね": { s: 5, c: 5 }, // Die (censored form)
  "4ね": { s: 5, c: 5 }, // Die (number substitution)
  "逝ってよし": { s: 5, c: 5 }, // Go die (2ch slang)
  "糞スレ": { s: 3, c: 5 }, // Shit thread
  "厨房": { s: 2, c: 3 }, // Middle schooler (insult)
  "厨": { s: 2, c: 3 }, // Abbreviation of 厨房
  "工作員": { s: 2, c: 3 }, // Shill (internet)
  "在日": { s: 2, c: 3 }, // Resident Korean (derogatory use)
  "チー牛": { s: 2, c: 3 }, // Cheese beef (insult for nerds)
  "こどおじ": { s: 2, c: 3 }, // Adult living with parents
  "こどおば": { s: 2, c: 3 }, // Female adult living with parents
  "ハゲ": { s: 2, c: 3 }, // Baldy
  "禿げ": { s: 2, c: 3 }, // Bald (kanji)
  "インキャ": { s: 2, c: 3 }, // Introvert (katakana insult)
  "ウェーイ": { s: 2, c: 3 }, // Party people (derogatory)
  "ナマポ": { s: 2, c: 3 }, // Welfare recipient (derogatory)
  "底辺": { s: 2, c: 3 }, // Bottom tier (insult)
  "ゆとり": { s: 2, c: 3 }, // Yutori generation (insult)
  "老害": { s: 2, c: 3 }, // Old person nuisance
  "ま〜ん": { s: 2, c: 3 }, // Derogatory for women
  "まーん": { s: 2, c: 3 }, // Derogatory for women
  "メンヘラ": { s: 2, c: 3 }, // Mentally ill (derogatory)
  "ヤリ目": { s: 2, c: 3 }, // Only after sex

  // Compound insults
  "このくそやろう": { s: 3, c: 4 }, // You shit bastard
  "てめえこの野郎": { s: 3, c: 4 }, // You bastard (emphatic)
  "ぶっ殺す": { s: 1, c: 4 }, // I'll kill you
  "ぶっ飛ばす": { s: 1, c: 4 }, // I'll knock you out
  "ぶっ壊す": { s: 1, c: 4 }, // I'll destroy you
  "殺すぞ": { s: 1, c: 4 }, // I'll kill you
  "死にやがれ": { s: 5, c: 5 }, // Die (vulgar imperative)
  "死にさらせ": { s: 5, c: 5 }, // Die (Kansai vulgar)
  "くたばりやがれ": { s: 1, c: 4 }, // Drop dead (vulgar)
  "消え失せろ": { s: 1, c: 4 }, // Get the hell out
  "失せろ": { s: 1, c: 4 }, // Get lost
  "うせろ": { s: 1, c: 3 }, // Get lost (casual)
  "黙れ": { s: 1, c: 4 }, // Shut up
  "だまれ": { s: 1, c: 4 }, // Shut up (hiragana)
  "うるせえ": { s: 1, c: 4 }, // Shut up (rough)
  "すっこんでろ": { s: 1, c: 4 }, // Stay out of it / get lost
  "地獄に落ちろ": { s: 1, c: 4 }, // Go to hell
  "このブス": { s: 1, c: 4 }, // You ugly (to women)
  "このデブ": { s: 1, c: 4 }, // You fatso
  "このカス": { s: 1, c: 4 }, // You scum
  "このクズ": { s: 1, c: 4 }, // You trash
  "このゴミ": { s: 1, c: 4 }, // You garbage
  "このハゲ": { s: 1, c: 4 }, // You baldy
  "この低能": { s: 1, c: 4 }, // You lowlife
  "クソムシ": { s: 3, c: 5 }, // Shit bug

  // Kansai dialect insults
  "アホくさ": { s: 1, c: 4 }, // Stupid/ridiculous
  "しばくぞ": { s: 1, c: 4 }, // I'll beat you up
  "いてまうぞ": { s: 1, c: 4 }, // I'll mess you up
  "いわすぞ": { s: 1, c: 4 }, // I'll hurt you
  "ドアホウ": { s: 1, c: 4 }, // Big idiot (katakana)
  "アホンダラ": { s: 1, c: 4 }, // Idiot (katakana)
  "ボケナス": { s: 1, c: 4 }, // Idiot eggplant
  "すかたん": { s: 1, c: 4 }, // Fool (Kansai)
  "たわけ": { s: 1, c: 4 }, // Fool (Nagoya/Kansai)
  "たわけもの": { s: 1, c: 4 }, // Foolish person
  "ボケ": { s: 1, c: 4 }, // Idiot (katakana)
  "ドボケ": { s: 1, c: 4 }, // Big idiot

  // Katakana loanwords (sexual/vulgar)
  "クリトリス": { s: 3, c: 4 }, // Clitoris
  "ヴァギナ": { s: 4, c: 4 }, // Vagina
  "フェラチオ": { s: 4, c: 5 }, // Fellatio
  "クンニ": { s: 3, c: 4 }, // Cunnilingus
  "クンニリングス": { s: 3, c: 4 }, // Cunnilingus
  "アナルセックス": { s: 3, c: 4 }, // Anal sex
  "ピストン": { s: 3, c: 4 }, // Piston (sexual thrusting)
  "オーラルセックス": { s: 4, c: 5 }, // Oral sex
  "マスターベーション": { s: 4, c: 4 }, // Masturbation
  "ポルノ": { s: 3, c: 4 }, // Porno
  "イラマチオ": { s: 3, c: 4 }, // Irrumatio
  "スカトロ": { s: 3, c: 4 }, // Scatology
  "SMプレイ": { s: 3, c: 4 }, // SM play
  "ボンデージ": { s: 3, c: 4 }, // Bondage
  "テスティクル": { s: 4, c: 4 }, // Testicle
  "ニップル": { s: 3, c: 4 }, // Nipple
  "エレクション": { s: 3, c: 4 }, // Erection
  "エジャキュレーション": { s: 3, c: 4 }, // Ejaculation

  // Yakuza/tough guy language
  "こら": { s: 3, c: 4 }, // Hey! (aggressive)
  "なめんな": { s: 3, c: 4 }, // Don't look down on me
  "なめるな": { s: 3, c: 4 }, // Don't look down on me
  "なめんなよ": { s: 3, c: 4 }, // Don't underestimate me
  "調子乗るな": { s: 4, c: 4 }, // Don't get cocky
  "調子こいてんじゃねえぞ": { s: 3, c: 4 }, // Don't get too full of yourself
  "おどれ": { s: 5, c: 5 }, // You (threatening, Kansai)
  "われ": { s: 5, c: 5 }, // You (threatening, Kansai)
  "なんじゃわれ": { s: 5, c: 5 }, // What do you want (threatening)
  "いてこますぞ": { s: 3, c: 5 }, // I'll beat the shit out of you
  "しょっぴくぞ": { s: 3, c: 4 }, // I'll drag you in
  "かたにはめる": { s: 3, c: 4 }, // To frame someone
  "しめる": { s: 3, c: 4 }, // To punish/squeeze
  "しめてやる": { s: 3, c: 4 }, // I'll punish you
  "やっちまえ": { s: 3, c: 4 }, // Do him in
  "けじめつけろ": { s: 3, c: 4 }, // Settle this (yakuza)
  "指詰めろ": { s: 3, c: 4 }, // Cut off your finger
  "シャブ": { s: 3, c: 4 }, // Meth (drugs)
  "ヤク": { s: 3, c: 4 }, // Drugs
  "ヤク中": { s: 3, c: 4 }, // Drug addict
  "覚醒剤": { s: 3, c: 4 }, // Stimulant drugs

  // Additional body-part vulgarities
  "ケツの穴": { s: 3, c: 4 }, // Asshole
  "肛門": { s: 3, c: 4 }, // Anus
  "クソ穴": { s: 3, c: 5 }, // Shit hole
  "乳首": { s: 3, c: 4 }, // Nipple
  "巨乳": { s: 4, c: 3 }, // Big breasts
  "貧乳": { s: 3, c: 4 }, // Flat chest (insult)
  "ちっぱい": { s: 3, c: 4 }, // Flat chest (slang insult)
  "デカチン": { s: 4, c: 4 }, // Big penis
  "短小": { s: 4, c: 4 }, // Small penis (insult)
  "早漏": { s: 3, c: 4 }, // Premature ejaculation (insult)
  "遅漏": { s: 3, c: 4 }, // Delayed ejaculation
  "インポ": { s: 3, c: 4 }, // Impotent
  "ふぐり": { s: 4, c: 4 }, // Testicles (archaic)

  // Additional クソ/糞 compounds
  "クソみたい": { s: 3, c: 5 }, // Shit-like
  "クソジジイ": { s: 3, c: 5 }, // Shit old man (katakana)
  "クソババア": { s: 3, c: 5 }, // Shit old woman (katakana)
  "クソデブ": { s: 1, c: 4 }, // Shit fatso
  "クソブス": { s: 1, c: 4 }, // Shit ugly
  "クソハゲ": { s: 3, c: 5 }, // Shit baldy
  "クソ真面目": { s: 3, c: 5 }, // Shit-serious (annoyingly serious)
  "くそったれめ": { s: 3, c: 5 }, // Damn shithead
  "糞ジジイ": { s: 3, c: 5 }, // Shit old man (kanji+katakana)
  "糞ババア": { s: 3, c: 5 }, // Shit old woman (kanji+katakana)
  "糞ビッチ": { s: 3, c: 5 }, // Shit bitch (kanji+katakana)
  "糞デブ": { s: 1, c: 4 }, // Shit fatso (kanji)
  "糞食らえ": { s: 3, c: 5 }, // Eat shit (kanji)
  "糞味噌": { s: 3, c: 5 }, // Shit and miso (kanji, worthless)
  "クソメス": { s: 3, c: 5 }, // Shit female (animal term, vulgar)
  "クソオス": { s: 3, c: 5 }, // Shit male (animal term, vulgar)
  "クソニート": { s: 3, c: 5 }, // Shit NEET
  "クソ雑魚": { s: 1, c: 4 }, // Shit weakling
  "くそでぶ": { s: 1, c: 4 }, // Shit fatso (hiragana)
  "くそぶす": { s: 1, c: 4 }, // Shit ugly (hiragana)
  "くそはげ": { s: 3, c: 5 }, // Shit baldy (hiragana)

  // Additional バカ/馬鹿 compounds
  "大バカ者": { s: 1, c: 4 }, // Great fool
  "バカヤロー": { s: 3, c: 4 }, // Stupid bastard (elongated)
  "馬鹿にすんな": { s: 1, c: 4 }, // Don't make a fool of me
  "馬鹿にすな": { s: 1, c: 3 }, // Don't make a fool of me (casual)
  "馬鹿丸出し": { s: 1, c: 4 }, // Fully exposed idiot
  "馬鹿げてる": { s: 1, c: 4 }, // Absurd/stupid
  "馬鹿らしい": { s: 1, c: 4 }, // Stupid/ridiculous
  "バカ面": { s: 1, c: 4 }, // Stupid face (katakana)
  "バカ女": { s: 1, c: 4 }, // Stupid woman (katakana)
  "バカ男": { s: 1, c: 4 }, // Stupid man (katakana)
  "バカども": { s: 1, c: 4 }, // Stupid people (plural)
  "バカの一つ覚え": { s: 1, c: 4 }, // One-trick pony (idiot)
  "バカにしやがって": { s: 3, c: 5 }, // How dare you mock me
  "馬鹿チン": { s: 1, c: 4 }, // Stupid dick
  "馬鹿め": { s: 1, c: 4 }, // You fool
  "バカめ": { s: 1, c: 4 }, // You fool (katakana)

  // Additional discriminatory terms
  "朝鮮人": { s: 3, c: 4 }, // Korean person (derogatory context)
  "ヨツ": { s: 3, c: 4 }, // Four (burakumin slur)
  "四つ": { s: 3, c: 4 }, // Four (burakumin slur, kanji)
  "エタ": { s: 3, c: 4 }, // Historical outcaste slur (katakana)
  "ヒニン": { s: 3, c: 4 }, // Non-person (katakana)
  "鬼畜米英": { s: 3, c: 4 }, // Barbaric Americans/British
  "半島人": { s: 3, c: 4 }, // Peninsula person (Korean slur)
  "ぺクチョン": { s: 3, c: 4 }, // Korean caste slur
  "台湾人": { s: 3, c: 4 }, // Taiwanese (derogatory context)
  "蛮族": { s: 3, c: 4 }, // Barbarian tribe
  "劣等民族": { s: 3, c: 4 }, // Inferior race
  "白豚": { s: 3, c: 4 }, // White pig (anti-Western slur)
  "黒んぼ": { s: 3, c: 4 }, // N-word equivalent (Japanese)
  "くろんぼ": { s: 3, c: 4 }, // N-word equivalent (hiragana)
  "クロンボ": { s: 3, c: 4 }, // N-word equivalent (katakana)
  "南蛮人": { s: 3, c: 4 }, // Southern barbarian (historical slur)
  "鮮人": { s: 3, c: 4 }, // Korean person (derogatory abbreviation)
  "不逞鮮人": { s: 3, c: 4 }, // Lawless Korean (historical slur)
  "ヒトモドキ": { s: 5, c: 5 }, // Sub-human / human-like creature
  "ナマモノ": { s: 5, c: 5 }, // Raw creature (dehumanizing)

  // Additional sexual terms
  "足コキ": { s: 4, c: 4 }, // Footjob
  "尻コキ": { s: 4, c: 4 }, // Buttjob
  "緊縛": { s: 4, c: 4 }, // Bondage/rope play
  "調教": { s: 4, c: 4 }, // Training (BDSM)
  "奴隷": { s: 4, c: 4 }, // Slave (sexual context)
  "ご奉仕": { s: 4, c: 4 }, // Service (sexual context)
  "寝取り": { s: 4, c: 4 }, // Cuckolding (male)
  "寝取られ": { s: 4, c: 4 }, // Being cuckolded
  "露出": { s: 4, c: 4 }, // Exposure/exhibitionism
  "露出狂": { s: 4, c: 4 }, // Exhibitionist
  "覗き": { s: 4, c: 4 }, // Peeping
  "覗き魔": { s: 4, c: 4 }, // Peeping tom
  "夜這い": { s: 4, c: 4 }, // Night crawling (sexual)
  "ソープランド": { s: 4, c: 4 }, // Soapland (full name)
  "ヘルス": { s: 4, c: 4 }, // Health (sex establishment type)
  "ファッションヘルス": { s: 4, c: 4 }, // Fashion health (sex service)
  "ピンサロ": { s: 4, c: 4 }, // Pink salon (sex establishment)
  "キャバクラ": { s: 4, c: 4 }, // Cabaret club (hostess bar)
  "おさわり": { s: 4, c: 4 }, // Touching (sexual context)
  "抜きあり": { s: 4, c: 4 }, // With ejaculation (sex service)
  "生本番": { s: 4, c: 4 }, // Raw/unprotected sex
  "生中出し": { s: 4, c: 4 }, // Raw creampie
  "生挿入": { s: 4, c: 4 }, // Raw insertion
  "二穴同時": { s: 4, c: 4 }, // Double penetration simultaneous
  "三穴": { s: 4, c: 4 }, // Triple penetration
  "アヘ顔": { s: 4, c: 4 }, // Ahegao face
  "精飲": { s: 4, c: 4 }, // Semen drinking
  "飲精": { s: 4, c: 4 }, // Drinking semen
  "ゴックン": { s: 4, c: 4 }, // Swallowing (sexual)
  "放尿プレイ": { s: 4, c: 4 }, // Urination play
  "聖水": { s: 4, c: 4 }, // Holy water (urine, sexual)
  "浣腸": { s: 4, c: 4 }, // Enema (sexual)
  "浣腸プレイ": { s: 4, c: 4 }, // Enema play
  "触手": { s: 4, c: 4 }, // Tentacle (sexual)
  "母乳": { s: 4, c: 4 }, // Breast milk (sexual context)
  "搾乳": { s: 4, c: 4 }, // Milking (sexual)
  "乳搾り": { s: 4, c: 4 }, // Breast milking
  "パイパン": { s: 4, c: 4 }, // Shaved genitals
  "剃毛": { s: 4, c: 4 }, // Shaving (sexual)
  "着エロ": { s: 4, c: 4 }, // Clothed erotica
  "ハメ撮り": { s: 4, c: 4 }, // POV sex filming
  "個撮": { s: 4, c: 4 }, // Private photo shoot (sexual)
  "裏ビデオ": { s: 4, c: 4 }, // Underground video (porn)
  "無修正": { s: 4, c: 4 }, // Uncensored (porn)
  "モザイク無し": { s: 4, c: 4 }, // No mosaic (uncensored porn)
  "エロ動画": { s: 4, c: 4 }, // Erotic video
  "エロ画像": { s: 4, c: 4 }, // Erotic image
  "エロ漫画": { s: 4, c: 4 }, // Erotic manga
  "エロゲー": { s: 4, c: 4 }, // Erotic game
  "エロ同人": { s: 4, c: 4 }, // Erotic doujinshi
  "抜ける": { s: 4, c: 4 }, // Can fap to this
  "抜いた": { s: 4, c: 4 }, // Fapped to this
  "おかず": { s: 4, c: 4 }, // Fap material (lit. side dish)
  "性奴隷": { s: 4, c: 4 }, // Sex slave
  "肉奴隷": { s: 4, c: 4 }, // Meat slave
  "便所": { s: 4, c: 4 }, // Toilet (derogatory for person)
  "公衆便所": { s: 4, c: 4 }, // Public toilet (extremely vulgar)
  "種付け": { s: 4, c: 4 }, // Impregnation (vulgar)
  "孕ませ": { s: 4, c: 4 }, // Getting pregnant (vulgar/fetish)
  "妊娠": { s: 4, c: 4 }, // Pregnancy (fetish context)
  "母子相姦": { s: 5, c: 5 }, // Mother-son incest
  "父子相姦": { s: 1, c: 4 }, // Father-daughter incest
  "兄妹相姦": { s: 5, c: 5 }, // Sibling incest

  // Additional internet slang
  "基地外": { s: 4, c: 5 }, // Crazy (kanji substitution for きちがい)
  "キチガイ": { s: 2, c: 3 }, // Crazy (katakana)
  "キチ": { s: 2, c: 3 }, // Crazy (abbreviation)
  "糖質": { s: 2, c: 3 }, // Schizophrenia (derogatory abbreviation)
  "アスペ": { s: 2, c: 3 }, // Asperger's (derogatory)
  "発達": { s: 2, c: 3 }, // Developmental disability (derogatory abbreviation)
  "発達障害": { s: 2, c: 3 }, // Developmental disability (used as insult)
  "自閉": { s: 2, c: 3 }, // Autism (used as insult)
  "知的障害": { s: 2, c: 3 }, // Intellectual disability (used as insult)
  "ガチャ外れ": { s: 2, c: 3 }, // Lost the gacha (bad genes)
  "親ガチャ失敗": { s: 2, c: 3 }, // Failed parent gacha
  "ワナビー": { s: 2, c: 3 }, // Wannabe (derogatory)
  "にわか": { s: 2, c: 3 }, // Poser/fake fan
  "エアプ": { s: 2, c: 3 }, // Air play (pretending to know)
  "ゴミクズ": { s: 2, c: 3 }, // Trash scum
  "人間のクズ": { s: 2, c: 3 }, // Human trash
  "社会のゴミ": { s: 2, c: 3 }, // Society's garbage
  "生きてる価値なし": { s: 2, c: 3 }, // Not worth living
  "生ゴミ": { s: 2, c: 3 }, // Raw garbage (insult)
  "産廃": { s: 2, c: 3 }, // Industrial waste (insult for person)
  "クソリプ": { s: 3, c: 5 }, // Shit reply
  "クソレス": { s: 3, c: 5 }, // Shit response
  "信者": { s: 2, c: 3 }, // Believer/fanboy (derogatory)
  "アンチ": { s: 2, c: 3 }, // Anti/hater
  "粘着": { s: 3, c: 3 }, // Stalker/persistent harasser
  "荒らし": { s: 2, c: 3 }, // Troll/griefer
  "炎上": { s: 2, c: 3 }, // Flaming (internet)
  "特定": { s: 2, c: 3 }, // Doxxing
  "晒し": { s: 2, c: 3 }, // Exposing/doxxing
  "叩き": { s: 2, c: 3 }, // Bashing
  "祭り": { s: 2, c: 3 }, // Festival (internet mob attack)
  "ステマ": { s: 2, c: 3 }, // Stealth marketing (derogatory)
  "乞食": { s: 2, c: 3 }, // Beggar (internet: freeloader)
  "割れ厨": { s: 2, c: 3 }, // Piracy enthusiast
  "ニコ厨": { s: 2, c: 3 }, // Niconico addict (derogatory)
  "パヨク": { s: 2, c: 3 }, // Derogatory for leftist
  "ネトウヨ": { s: 2, c: 3 }, // Internet right-winger (derogatory)
  "ネトサヨ": { s: 2, c: 3 }, // Internet left-winger (derogatory)
  "売国": { s: 2, c: 3 }, // Selling out the country
  "反日": { s: 2, c: 3 }, // Anti-Japan (used as slur)
  "非国民": { s: 2, c: 3 }, // Non-citizen/traitor
  "国賊": { s: 2, c: 3 }, // National traitor
  "負け犬": { s: 1, c: 4 }, // Loser (lit. losing dog)
  "負け組": { s: 1, c: 4 }, // Loser group
  "童貞くん": { s: 2, c: 3 }, // Virgin boy (mocking)
  "処女厨": { s: 2, c: 3 }, // Virgin-obsessed (derogatory)
  "高齢童貞": { s: 2, c: 3 }, // Elderly virgin (insult)
  "魔法使い": { s: 2, c: 3 }, // Wizard (30+ year old virgin)
  "喪女": { s: 2, c: 3 }, // Unpopular woman
  "喪男": { s: 2, c: 3 }, // Unpopular man
  "非リア": { s: 2, c: 3 }, // Non-real-life (no social life)
  "リア充爆発しろ": { s: 2, c: 3 }, // Normies should explode
  "ヲタ": { s: 2, c: 3 }, // Otaku (derogatory variant)
  "キモヲタ": { s: 2, c: 3 }, // Creepy otaku (variant)
  "腐女子": { s: 2, c: 3 }, // Fujoshi (used derogatorily)
  "萌え豚": { s: 2, c: 3 }, // Moe pig (insult for otaku)
  "ブヒる": { s: 2, c: 3 }, // To oink (acting like moe pig)
  "ドルオタ": { s: 2, c: 3 }, // Idol otaku (derogatory)
  "ジャニオタ": { s: 2, c: 3 }, // Johnny's otaku (derogatory)
  "V豚": { s: 2, c: 3 }, // VTuber pig (derogatory)
  "バチャ豚": { s: 2, c: 3 }, // VTuber pig (variant)
  "スパチャ乞食": { s: 2, c: 3 }, // Superchat beggar
  "弱者男性": { s: 2, c: 3 }, // Weak male (internet insult)
  "弱男": { s: 2, c: 3 }, // Weak man (abbreviation)
  "強者女性": { s: 2, c: 3 }, // Strong female (sarcastic insult)
  "フェミ": { s: 2, c: 3 }, // Feminist (derogatory)
  "ツイフェミ": { s: 2, c: 3 }, // Twitter feminist (derogatory)
  "ミサンドリー": { s: 2, c: 3 }, // Misandry
  "ミソジニー": { s: 2, c: 3 }, // Misogyny
  "マンさん": { s: 4, c: 3 }, // Ms. pussy (derogatory for women)
  "ちんさん": { s: 4, c: 3 }, // Mr. dick (derogatory for men)
  "子供部屋おじさん": { s: 2, c: 3 }, // Room uncle (man living with parents)
  "子供部屋おばさん": { s: 2, c: 3 }, // Room aunt (woman living with parents)
  "無産様": { s: 2, c: 3 }, // Childless woman (sarcastic)
  "種無し": { s: 2, c: 3 }, // Seedless (infertile man, insult)
  "石女": { s: 2, c: 3 }, // Barren woman (archaic insult)
  "穀潰し": { s: 2, c: 3 }, // Grain crusher (useless person)
  "引きこもり": { s: 2, c: 3 }, // Shut-in (used as insult)
  "ヒキニート": { s: 2, c: 3 }, // Shut-in NEET
  "社畜": { s: 2, c: 3 }, // Corporate slave (self-deprecating/insult)
  "奴隷労働": { s: 2, c: 3 }, // Slave labor
  "ブラック企業": { s: 2, c: 3 }, // Black company (exploitative employer)

  // 2ch/5ch culture terms
  "香具師": { s: 3, c: 4 }, // Yakushi (2ch term for person)
  "藻前": { s: 3, c: 4 }, // You (2ch corrupted form)
  "漏れ": { s: 3, c: 4 }, // Me (2ch corrupted form)
  "逝く": { s: 5, c: 5 }, // To die/come (2ch)
  "必死だな": { s: 3, c: 4 }, // You're desperate (mockery)
  "顔真っ赤": { s: 3, c: 4 }, // Face turning red (mocking)
  "効いてる効いてる": { s: 3, c: 4 }, // It's working (mockery)
  "涙目": { s: 3, c: 4 }, // Teary eyes (mockery)
  "発狂": { s: 3, c: 4 }, // Going crazy (mockery)
  "ファビョる": { s: 3, c: 4 }, // To rage (from Korean 화병)
  "火病": { s: 3, c: 4 }, // Korean rage disease (slur)
  "半島に帰れ": { s: 3, c: 4 }, // Go back to the peninsula (slur)
  "国に帰れ": { s: 3, c: 4 }, // Go back to your country
  "嫌儲": { s: 3, c: 4 }, // Anti-monetization (board culture)
  "まとめカス": { s: 3, c: 4 }, // Summary site scum
  "対立煽り": { s: 3, c: 4 }, // Conflict incitement
  "自演乙": { s: 3, c: 4 }, // Self-reply, good job (sarcasm)
  "構ってちゃん": { s: 3, c: 4 }, // Attention seeker
  "かまちょ": { s: 3, c: 4 }, // Attention seeker (abbreviation)
  "地雷": { s: 3, c: 4 }, // Landmine (problematic person)
  "地雷女": { s: 3, c: 4 }, // Landmine woman
  "地雷男": { s: 3, c: 4 }, // Landmine man
  "メンヘラ女": { s: 3, c: 4 }, // Mentally ill woman (derogatory)
  "ヤンデレ": { s: 3, c: 4 }, // Yandere (used derogatorily)
  "サイコパス": { s: 3, c: 4 }, // Psychopath (insult)
  "ソシオパス": { s: 3, c: 4 }, // Sociopath (insult)
  "ガイジムーブ": { s: 3, c: 4 }, // Disabled person move (offensive)

  // Kansai/Osaka dialect additions
  "しばいたろか": { s: 3, c: 4 }, // Shall I beat you up
  "いてもうたるぞ": { s: 3, c: 4 }, // I'll mess you up
  "あほか": { s: 1, c: 4 }, // Are you stupid
  "アホちゃう": { s: 1, c: 4 }, // Aren't you stupid
  "アホかいな": { s: 1, c: 4 }, // What an idiot
  "しょうもない": { s: 3, c: 4 }, // Worthless/pathetic
  "しょうもな": { s: 3, c: 4 }, // Worthless (casual)
  "けったいな": { s: 3, c: 4 }, // Strange/weird (negative)
  "ごうつくばり": { s: 3, c: 4 }, // Greedy person
  "がめつい": { s: 3, c: 4 }, // Greedy/stingy
  "どたま": { s: 3, c: 4 }, // Head (Kansai vulgar)
  "どたまかち割るぞ": { s: 3, c: 4 }, // I'll crack your skull
  "いちびり": { s: 3, c: 4 }, // Show-off (Kansai)
  "いちびるな": { s: 3, c: 4 }, // Stop showing off
  "あんじょう": { s: 5, c: 5 }, // Properly (threatening context)
  "ワレなにしとんじゃ": { s: 5, c: 5 }, // What are you doing (threatening)
  "しばき回すぞ": { s: 3, c: 4 }, // I'll beat you all around

  // Kyushu dialect insults
  "たいがいにせえ": { s: 5, c: 5 }, // Enough already (threatening)
  "きさん": { s: 1, c: 4 }, // You (Kyushu hostile)
  "ばってん": { s: 5, c: 5 }, // But (used in threatening context)
  "なんばしよっと": { s: 1, c: 4 }, // What are you doing (aggressive)
  "しゃーしい": { s: 1, c: 4 }, // Annoying (Kyushu)
  "のさばるな": { s: 1, c: 4 }, // Don't be arrogant
  "ふうけもん": { s: 1, c: 4 }, // Fool (Kyushu dialect)
  "ぬすっと": { s: 1, c: 4 }, // Thief (dialectal)
  "がまだす": { s: 5, c: 5 }, // To endure (threatening context)
  "ちゃげなか": { s: 1, c: 4 }, // Pathetic (Kyushu)

  // Hokkaido/Tohoku dialect insults
  "たげ": { s: 1, c: 4 }, // Very (Tohoku intensifier, with insults)
  "はんかくさい": { s: 1, c: 4 }, // Stupid/half-baked (Hokkaido)
  "ごんぼほる": { s: 1, c: 4 }, // To throw a tantrum (Tohoku)
  "じょっぱり": { s: 1, c: 4 }, // Stubborn person (Tohoku, negative)
  "べこ": { s: 1, c: 4 }, // Cow (used as insult)

  // Additional yakuza/tough language
  "かます": { s: 3, c: 4 }, // To hit/attack
  "かましたろか": { s: 3, c: 4 }, // Shall I hit you
  "どつく": { s: 3, c: 4 }, // To punch
  "どついたろか": { s: 3, c: 4 }, // Shall I punch you
  "ぶちのめす": { s: 3, c: 4 }, // To beat the crap out of
  "ぶちのめすぞ": { s: 3, c: 4 }, // I'll beat the crap out of you
  "ぶん殴る": { s: 3, c: 4 }, // To punch hard
  "ぶん殴るぞ": { s: 3, c: 4 }, // I'll punch you
  "張り倒す": { s: 3, c: 4 }, // To slap down
  "張り倒すぞ": { s: 3, c: 4 }, // I'll slap you down
  "叩きのめす": { s: 3, c: 4 }, // To beat senseless
  "潰す": { s: 3, c: 4 }, // To crush
  "潰してやる": { s: 3, c: 4 }, // I'll crush you
  "沈めるぞ": { s: 3, c: 4 }, // I'll sink you (kill)
  "沈めてやる": { s: 3, c: 4 }, // I'll sink you
  "消すぞ": { s: 3, c: 4 }, // I'll erase you (kill)
  "始末する": { s: 3, c: 4 }, // To dispose of (kill)
  "落とし前": { s: 3, c: 4 }, // Settling accounts (yakuza)
  "落とし前つけろ": { s: 3, c: 4 }, // Settle your debts
  "カタギ": { s: 3, c: 4 }, // Civilian (non-yakuza)
  "堅気": { s: 3, c: 4 }, // Civilian (kanji)
  "極道": { s: 3, c: 4 }, // Yakuza way
  "舎弟": { s: 3, c: 4 }, // Younger brother (yakuza subordinate)
  "兄貴": { s: 3, c: 4 }, // Elder brother (yakuza senior)
  "親分": { s: 3, c: 4 }, // Boss (yakuza)
  "鉄砲玉": { s: 3, c: 4 }, // Bullet (hitman)
  "チャカ": { s: 3, c: 4 }, // Gun (slang)
  "ドス": { s: 3, c: 4 }, // Knife (yakuza slang)
  "ムショ": { s: 3, c: 4 }, // Prison
  "前科もん": { s: 3, c: 4 }, // Ex-con
  "ヤクザ": { s: 3, c: 4 }, // Yakuza
  "ヤクザもん": { s: 3, c: 4 }, // Yakuza person
  "チンピラ": { s: 3, c: 4 }, // Thug/punk
  "ゴロツキ": { s: 3, c: 4 }, // Hoodlum
  "ならず者": { s: 3, c: 4 }, // Outlaw/rogue

  // Additional katakana loanwords (vulgar)
  "スリーサム": { s: 3, c: 4 }, // Threesome
  "フォーサム": { s: 3, c: 4 }, // Foursome
  "グローリーホール": { s: 3, c: 4 }, // Glory hole
  "ストリッパー": { s: 3, c: 4 }, // Stripper
  "ストリップ": { s: 3, c: 4 }, // Strip
  "エスコート": { s: 3, c: 4 }, // Escort
  "コールガール": { s: 3, c: 4 }, // Call girl
  "ソドミー": { s: 3, c: 4 }, // Sodomy
  "ニンフォマニア": { s: 3, c: 4 }, // Nymphomania
  "インポテンツ": { s: 3, c: 4 }, // Impotence
  "ヘンタイ": { s: 3, c: 4 }, // Hentai (katakana)
  "ペドフィル": { s: 5, c: 5 }, // Pedophile
  "レズビアン": { s: 3, c: 4 }, // Lesbian (can be derogatory)
  "ホモ": { s: 3, c: 4 }, // Homo (derogatory)
  "ゲイ": { s: 3, c: 4 }, // Gay (can be derogatory)
  "オカマ": { s: 3, c: 4 }, // Effeminate man / drag (derogatory)
  "おかま": { s: 3, c: 4 }, // Effeminate man (hiragana)
  "ニューハーフ": { s: 3, c: 4 }, // Newhalf (trans, can be derogatory)
  "おなべ": { s: 3, c: 4 }, // Masculine woman (derogatory)
  "レズ": { s: 3, c: 4 }, // Lesbian (abbreviation, derogatory)
  "ホモ野郎": { s: 3, c: 4 }, // Homo bastard
  "オカマ野郎": { s: 3, c: 4 }, // Effeminate bastard
  "バイセクシャル": { s: 3, c: 4 }, // Bisexual (derogatory context)

  // Threat and violence expressions
  "殺してやる": { s: 5, c: 5 }, // I'll kill you
  "殺すからな": { s: 5, c: 5 }, // I'll kill you (warning)
  "首吊って死ね": { s: 5, c: 5 }, // Hang yourself
  "飛び降りろ": { s: 5, c: 5 }, // Jump off (suicide)
  "手首切れ": { s: 5, c: 5 }, // Cut your wrists
  "練炭焚け": { s: 5, c: 5 }, // Light charcoal (suicide method)
  "樹海行け": { s: 5, c: 5 }, // Go to Aokigahara (suicide forest)
  "生きる価値ない": { s: 5, c: 5 }, // Not worth living
  "存在価値なし": { s: 5, c: 5 }, // No value in existing
  "お前なんか死ね": { s: 5, c: 5 }, // Someone like you should die
  "産まれてくんな": { s: 5, c: 5 }, // Shouldn't have been born
  "目障り": { s: 5, c: 5 }, // Eyesore
  "耳障り": { s: 5, c: 5 }, // Ear-sore (annoying)
  "虫酸が走る": { s: 5, c: 5 }, // Makes my skin crawl
  "反吐が出る": { s: 5, c: 5 }, // Makes me vomit
  "胸糞悪い": { s: 5, c: 5 }, // Chest-shit-bad (disgusting)
  "腹立つ": { s: 5, c: 5 }, // Infuriating

  // Derogatory terms for social groups
  "ニート野郎": { s: 3, c: 4 }, // NEET bastard
  "引きこもり野郎": { s: 3, c: 4 }, // Shut-in bastard
  "生活保護": { s: 3, c: 4 }, // Welfare (used as insult)
  "ナマポ野郎": { s: 3, c: 4 }, // Welfare bastard
  "フリーター": { s: 3, c: 4 }, // Part-timer (used derogatorily)
  "派遣": { s: 3, c: 4 }, // Temp worker (used derogatorily)
  "底辺職": { s: 3, c: 4 }, // Bottom-tier job (insult)
  "Fラン": { s: 3, c: 4 }, // F-rank (low-tier university)
  "高卒": { s: 3, c: 4 }, // High school grad (used as insult)
  "中卒": { s: 3, c: 4 }, // Middle school grad (insult)
  "低学歴": { s: 3, c: 4 }, // Low education
  "三流": { s: 3, c: 4 }, // Third-rate
  "田舎者": { s: 3, c: 4 }, // Country bumpkin
  "かっぺ": { s: 3, c: 4 }, // Country bumpkin (slang)
  "芋": { s: 3, c: 4 }, // Potato (unsophisticated person)
  "ダサい": { s: 3, c: 4 }, // Uncool/lame
  "ダサ": { s: 3, c: 4 }, // Uncool (abbreviation)
  "貧乏人": { s: 3, c: 4 }, // Poor person (insult)
  "乞食野郎": { s: 3, c: 4 }, // Beggar bastard
  "ホームレス": { s: 3, c: 4 }, // Homeless (used as insult)
  "浮浪者": { s: 3, c: 4 }, // Vagrant (derogatory)
  "不審者": { s: 3, c: 4 }, // Suspicious person
  "変質者": { s: 3, c: 4 }, // Pervert/deviant
  "犯罪者": { s: 3, c: 4 }, // Criminal (used as slur)
  "前科者": { s: 3, c: 4 }, // Person with criminal record
  "性犯罪者": { s: 3, c: 4 }, // Sex offender
  "ストーカー": { s: 3, c: 4 }, // Stalker
  "クレーマー": { s: 3, c: 4 }, // Complainer (derogatory)
  "モンペ": { s: 3, c: 4 }, // Monster parent
  "毒親": { s: 3, c: 4 }, // Toxic parent

  // Additional compound insults
  "このくそったれ": { s: 3, c: 5 }, // You shithead
  "このくそがき": { s: 3, c: 5 }, // You shit brat
  "この糞野郎": { s: 3, c: 4 }, // You shit bastard
  "死ねよ": { s: 5, c: 5 }, // Just die
  "死ねば": { s: 5, c: 5 }, // If you'd just die
  "死ねカス": { s: 5, c: 5 }, // Die, scum
  "死ねクズ": { s: 5, c: 5 }, // Die, trash
  "死ねゴミ": { s: 5, c: 5 }, // Die, garbage
  "くそ死ね": { s: 5, c: 5 }, // Shit-die
  "きもい死ね": { s: 5, c: 5 }, // Disgusting, die
  "うざい死ね": { s: 5, c: 5 }, // Annoying, die
  "お前が死ね": { s: 5, c: 5 }, // You die
  "ぶっころ": { s: 1, c: 4 }, // Gonna kill (abbreviation)
  "ぶっとばすぞ": { s: 1, c: 4 }, // I'll knock you out
  "ぶちころすぞ": { s: 5, c: 5 }, // I'll beat you to death
  "タコ": { s: 1, c: 4 }, // Octopus (insult for bald/stupid)
  "このタコ": { s: 1, c: 4 }, // You octopus (insult)
  "すっとこどっこい": { s: 1, c: 4 }, // Bumbling fool
  "おたんこなす": { s: 1, c: 4 }, // Clumsy fool
  "へなちょこ": { s: 1, c: 4 }, // Wimp/weakling
  "へっぽこ": { s: 1, c: 4 }, // Incompetent
  "ぽんこつ": { s: 1, c: 4 }, // Broken/useless
  "うんこ": { s: 1, c: 4 }, // Poop
  "うんこたれ": { s: 1, c: 4 }, // Poop-drip
  "うんこ野郎": { s: 3, c: 4 }, // Poop bastard
  "クソうんこ": { s: 3, c: 5 }, // Shit poop
  "糞尿": { s: 3, c: 5 }, // Shit and piss
  "ションベン": { s: 1, c: 4 }, // Piss
  "ションベンたれ": { s: 1, c: 4 }, // Piss-drip (weakling)
  "小僧": { s: 1, c: 4 }, // Brat (derogatory)
  "ガキ": { s: 1, c: 4 }, // Brat
  "このガキ": { s: 1, c: 4 }, // You brat
  "餓鬼": { s: 1, c: 4 }, // Hungry ghost / brat (kanji)
  "ゲス": { s: 1, c: 4 }, // Lowlife/scum
  "ゲス野郎": { s: 3, c: 4 }, // Scum bastard
  "下衆": { s: 1, c: 4 }, // Lowlife (kanji)
  "下種": { s: 1, c: 4 }, // Lowlife (variant kanji)
  "外様": { s: 1, c: 4 }, // Outsider (derogatory)
  "人でなし": { s: 1, c: 4 }, // Inhuman person
  "鬼畜": { s: 1, c: 4 }, // Demonic/brutal
  "畜生め": { s: 1, c: 4 }, // Damn beast
  "けだもの": { s: 1, c: 4 }, // Beast (for a person)
  "人非人": { s: 1, c: 4 }, // Inhuman being
  "恥知らず": { s: 1, c: 4 }, // Shameless person
  "面汚し": { s: 1, c: 4 }, // Disgrace
  "穀潰": { s: 1, c: 4 }, // Grain waster (useless person)
  "給料泥棒": { s: 1, c: 4 }, // Salary thief
  "税金泥棒": { s: 1, c: 4 }, // Tax thief
  "能なし": { s: 1, c: 4 }, // Incompetent
  "役立たず": { s: 1, c: 4 }, // Useless person
  "甲斐性なし": { s: 1, c: 4 }, // Worthless (no ambition)
  "意気地なし": { s: 1, c: 4 }, // Coward
  "根性なし": { s: 1, c: 4 }, // No guts
  "腰抜け": { s: 1, c: 4 }, // Coward (lit. waist-fallen)
  "弱虫": { s: 1, c: 4 }, // Weakling/coward
  "泣き虫": { s: 1, c: 4 }, // Crybaby
  "いくじなし": { s: 1, c: 4 }, // Coward/spineless
  "玉なし": { s: 1, c: 4 }, // No balls (coward)

  // Romanized Japanese profanity (romaji input)
  "kuso": { s: 3, c: 5 }, // Shit/damn
  "baka": { s: 1, c: 5 }, // Idiot/fool
  "shine": { s: 5, c: 5 }, // Die
  "shi ne": { s: 5, c: 5 }, // Die (spaced)
  "chikusho": { s: 3, c: 5 }, // Damn it
  "chikushou": { s: 3, c: 5 }, // Damn it (variant)
  "manko": { s: 4, c: 5 }, // Pussy (vulgar)
  "chinko": { s: 4, c: 5 }, // Penis (vulgar)
  "chinpo": { s: 4, c: 5 }, // Penis (vulgar)
  "chinpoko": { s: 4, c: 5 }, // Penis (childish variant)
  "chinchin": { s: 4, c: 5 }, // Penis (childish)
  "oppai": { s: 4, c: 5 }, // Breasts
  "kintama": { s: 4, c: 5 }, // Testicles
  "yariman": { s: 3, c: 5 }, // Slut
  "yarichin": { s: 5, c: 5 }, // Man-whore
  "hentai": { s: 3, c: 4 }, // Pervert
  "chikan": { s: 3, c: 5 }, // Groper/molester
  "kisama": { s: 3, c: 5 }, // You (hostile)
  "temee": { s: 3, c: 5 }, // You (hostile)
  "temae": { s: 3, c: 5 }, // You (hostile, variant)
  "konoyaro": { s: 3, c: 5 }, // You bastard
  "bakayaro": { s: 3, c: 5 }, // Stupid bastard
  "bakayarou": { s: 3, c: 5 }, // Stupid bastard (variant)
  "kusottare": { s: 3, c: 5 }, // Shithead
  "kutabare": { s: 3, c: 5 }, // Drop dead
  "fuzakenna": { s: 3, c: 5 }, // Don't mess around
  "fuzakeruna": { s: 3, c: 5 }, // Don't mess around (variant)
  "zakenna": { s: 3, c: 5 }, // Don't fuck with me
  "aho": { s: 1, c: 5 }, // Idiot (Kansai)
  "ahondara": { s: 1, c: 5 }, // Idiot (Kansai)
  "doaho": { s: 1, c: 5 }, // Big idiot (Kansai)
  "kichigai": { s: 3, c: 5 }, // Crazy/insane
  "ketsu": { s: 3, c: 5 }, // Ass
  "ketsunoana": { s: 3, c: 5 }, // Asshole
  "shiri": { s: 3, c: 5 }, // Butt
  "unko": { s: 3, c: 5 }, // Poop
  "kuso gaki": { s: 3, c: 5 }, // Shit brat
  "kusobaba": { s: 3, c: 5 }, // Shit old woman
  "kusojijii": { s: 3, c: 5 }, // Shit old man
  "kusoyaro": { s: 3, c: 5 }, // Shit bastard
  "debu": { s: 1, c: 5 }, // Fatso
  "busu": { s: 1, c: 5 }, // Ugly (woman)
  "kasu": { s: 3, c: 5 }, // Scum
  "kuzu": { s: 3, c: 5 }, // Trash
  "gomi": { s: 3, c: 5 }, // Garbage
  "omanko": { s: 4, c: 5 }, // Pussy (polite prefix + vulgar)
  "omeko": { s: 3, c: 5 }, // Female genitalia (Kansai)
  "bobo": { s: 1, c: 4 }, // Sexual intercourse (dialectal)
  "seishi": { s: 3, c: 5 }, // Sperm
  "shasei": { s: 3, c: 5 }, // Ejaculation
  "jii": { s: 4, c: 5 }, // Masturbation
  "onanii": { s: 4, c: 5 }, // Masturbation
  "fera": { s: 4, c: 5 }, // Fellatio
  "ferachio": { s: 4, c: 5 }, // Fellatio (full)
  "inran": { s: 3, c: 5 }, // Lewd/promiscuous
  "nakadashi": { s: 3, c: 5 }, // Creampie
  "paizuri": { s: 4, c: 5 }, // Titjob
  "baita": { s: 5, c: 5 }, // Whore
  "ero": { s: 3, c: 5 }, // Erotic/perverted
  "chikubi": { s: 3, c: 5 }, // Nipple
  "shibaku": { s: 3, c: 5 }, // I'll beat you (Kansai)
  "shibakuzo": { s: 3, c: 5 }, // I'll beat you up
  "korosu": { s: 3, c: 5 }, // I'll kill
  "korosuzo": { s: 3, c: 5 }, // I'll kill you
  "buchikorosu": { s: 5, c: 5 }, // I'll beat you to death
  "bukkorosu": { s: 3, c: 5 }, // I'll kill you (slang)
  "buttobasu": { s: 3, c: 5 }, // I'll knock you out
  "nameruna": { s: 3, c: 5 }, // Don't look down on me
  "namenna": { s: 3, c: 5 }, // Don't underestimate me
  "namennayo": { s: 3, c: 5 }, // Don't underestimate me
  "usero": { s: 3, c: 5 }, // Get lost
  "kieru": { s: 3, c: 5 }, // Disappear
  "kiero": { s: 3, c: 5 }, // Disappear (imperative)
  "damare": { s: 3, c: 5 }, // Shut up
  "urusee": { s: 3, c: 5 }, // Shut up (rough)
  "sukebe": { s: 3, c: 5 }, // Pervert
  "ecchi": { s: 3, c: 4 }, // Lewd/naughty
  "etchi": { s: 3, c: 5 }, // Lewd/naughty (variant)
  "yareru": { s: 3, c: 5 }, // Can have sex
  "yaru": { s: 3, c: 5 }, // To do it (sexual)
  "hameru": { s: 3, c: 5 }, // To insert (sexual)
  "okasu": { s: 5, c: 5 }, // To violate/rape
  "goukan": { s: 5, c: 5 }, // Rape
  "rinkan": { s: 5, c: 5 }, // Gang rape
  "chuudashi": { s: 3, c: 5 }, // Creampie
  "gansha": { s: 3, c: 5 }, // Facial (sexual)
  "kunni": { s: 3, c: 5 }, // Cunnilingus
  "tekoki": { s: 3, c: 5 }, // Handjob
  "teman": { s: 3, c: 5 }, // Manual stimulation
  "shiofuki": { s: 3, c: 5 }, // Squirting
  "aigan": { s: 3, c: 5 }, // Outdoor sex
  "rankou": { s: 3, c: 5 }, // Orgy
  "inkou": { s: 3, c: 5 }, // Obscene acts
  "waisetsu": { s: 3, c: 5 }, // Obscenity
  "baishun": { s: 5, c: 5 }, // Prostitution
  "baishunfu": { s: 5, c: 5 }, // Prostitute
  "soapland": { s: 3, c: 5 }, // Soapland
  "deriherru": { s: 3, c: 5 }, // Delivery health (escort)
  "deriheru": { s: 3, c: 5 }, // Delivery health (variant)
  "pinsaro": { s: 3, c: 5 }, // Pink salon
  "fuzoku": { s: 3, c: 5 }, // Sex industry
  "honban": { s: 3, c: 5 }, // Full sex service
  "namahon": { s: 3, c: 5 }, // Raw sex
  "rorikkon": { s: 3, c: 5 }, // Lolicon
  "shotakon": { s: 3, c: 5 }, // Shotacon
  "pedofilia": { s: 5, c: 5 }, // Pedophilia
  "roshutsukyo": { s: 3, c: 5 }, // Exhibitionist
  "nozoki": { s: 3, c: 5 }, // Peeping
  "tousatsu": { s: 3, c: 5 }, // Voyeurism
  "kinbaku": { s: 3, c: 4 }, // Bondage
  "choukyou": { s: 3, c: 5 }, // Training (BDSM)
  "dorei": { s: 3, c: 5 }, // Slave
  "seidorei": { s: 3, c: 5 }, // Sex slave
  "nikudorei": { s: 3, c: 5 }, // Meat slave
  "nikubenki": { s: 3, c: 5 }, // Meat toilet
  "bukkake": { s: 4, c: 5 }, // Bukkake
  "gokkun": { s: 3, c: 4 }, // Swallowing (sexual)
  "irrumatio": { s: 3, c: 5 }, // Irrumatio
  "iramachio": { s: 3, c: 5 }, // Irrumatio (variant)
  "sukatoro": { s: 3, c: 5 }, // Scatology
  "hamedori": { s: 3, c: 5 }, // POV sex filming
  "mushūsei": { s: 3, c: 5 }, // Uncensored
  "mushūseii": { s: 3, c: 5 }, // Uncensored (variant)
  "eroge": { s: 3, c: 5 }, // Erotic game
  "erodouga": { s: 3, c: 5 }, // Erotic video
  "eromanga": { s: 3, c: 5 }, // Erotic manga
  "okazu": { s: 3, c: 5 }, // Fap material
  "nuku": { s: 3, c: 5 }, // To fap
  "nuita": { s: 3, c: 5 }, // Fapped
  "shikoru": { s: 4, c: 5 }, // To masturbate (slang)
  "ahegao": { s: 3, c: 5 }, // Ahegao face
  "paipan": { s: 3, c: 5 }, // Shaved genitals
  "sounyuu": { s: 3, c: 5 }, // Insertion (sexual)
  "boukei": { s: 3, c: 5 }, // Phimosis (insult)
  "doutei": { s: 3, c: 5 }, // Virgin (male, insult)
  "inkya": { s: 3, c: 5 }, // Introvert (insult)
  "youkya": { s: 3, c: 5 }, // Extrovert (used sarcastically)
  "kimoi": { s: 3, c: 5 }, // Disgusting
  "kimoe": { s: 3, c: 5 }, // Disgusting (variant)
  "kishoi": { s: 3, c: 5 }, // Gross
  "uzai": { s: 3, c: 5 }, // Annoying
  "uzee": { s: 3, c: 5 }, // Annoying (rougher)
  "gaiji": { s: 3, c: 5 }, // Disabled person (offensive slang)
  "teinō": { s: 3, c: 5 }, // Low-ability (insult)
  "teinou": { s: 3, c: 5 }, // Low-ability (variant)
  "chinpa": { s: 4, c: 5 }, // Short/small penis (insult)
  "tanshou": { s: 4, c: 5 }, // Small penis
  "sourou": { s: 3, c: 5 }, // Premature ejaculation
  "inpo": { s: 3, c: 5 }, // Impotent
  "hage": { s: 3, c: 5 }, // Baldy
  "chonmage": { s: 3, c: 5 }, // Topknot (used mockingly)
  "niito": { s: 3, c: 5 }, // NEET
  "hikikomori": { s: 3, c: 5 }, // Shut-in
  "shachiku": { s: 3, c: 5 }, // Corporate slave
  "furi-ta-": { s: 3, c: 5 }, // Part-timer (derogatory)
  "makeinu": { s: 1, c: 5 }, // Loser
  "makegumi": { s: 1, c: 5 }, // Loser group
  "binbounin": { s: 3, c: 5 }, // Poor person (insult)
  "kojiki": { s: 3, c: 5 }, // Beggar
  "furōsha": { s: 3, c: 5 }, // Vagrant
  "inaka mono": { s: 3, c: 5 }, // Country bumpkin
  "inakappe": { s: 3, c: 5 }, // Country bumpkin (slang)
  "kappe": { s: 3, c: 5 }, // Country bumpkin (abbreviation)
  "dasai": { s: 3, c: 5 }, // Uncool/lame
  "ponkotsu": { s: 3, c: 5 }, // Broken/useless
  "heppoko": { s: 3, c: 5 }, // Incompetent
  "hetakuso": { s: 3, c: 5 }, // Terrible at something
  "nonashi": { s: 3, c: 5 }, // Incompetent
  "yakutatazu": { s: 3, c: 5 }, // Useless person
  "kusomushi": { s: 3, c: 5 }, // Shit bug
  "gomikuzu": { s: 3, c: 5 }, // Trash scum
  "ningennokuzu": { s: 3, c: 5 }, // Human trash
  "ikiterukachinaishi": { s: 3, c: 5 }, // Not worth living
  "umaretekunna": { s: 3, c: 5 }, // Shouldn't have been born
  "shiniyagare": { s: 5, c: 5 }, // Die (vulgar imperative)
  "shinisarase": { s: 5, c: 5 }, // Die (Kansai vulgar)
  "kutabariyagare": { s: 3, c: 5 }, // Drop dead (vulgar)
  "kieuserou": { s: 3, c: 5 }, // Get the hell out
  "jigoku ni ochiro": { s: 3, c: 5 }, // Go to hell
  "koroshiteyaru": { s: 3, c: 5 }, // I'll kill you
  "buttobasu zo": { s: 3, c: 5 }, // I'll knock you out
  "buchinomesu": { s: 3, c: 5 }, // To beat the crap out of
  "bunaguru": { s: 3, c: 5 }, // To punch hard
  "dotsukou": { s: 3, c: 5 }, // Shall I punch you
  "shizume": { s: 3, c: 5 }, // I'll sink you (kill)
  "hajimesuru": { s: 3, c: 5 }, // To dispose of (kill)
  "yakuza": { s: 3, c: 5 }, // Yakuza
  "chinpira": { s: 3, c: 5 }, // Thug/punk
  "gorotsuki": { s: 3, c: 5 }, // Hoodlum
  "shabu": { s: 3, c: 5 }, // Meth
  "yaku": { s: 3, c: 5 }, // Drugs
  "yakuchuu": { s: 3, c: 5 }, // Drug addict
  "manuke": { s: 1, c: 5 }, // Fool
  "tonma": { s: 3, c: 5 }, // Dunce
  "noroma": { s: 3, c: 5 }, // Slowpoke
  "rokudenashi": { s: 3, c: 5 }, // Good-for-nothing
  "gedo": { s: 3, c: 5 }, // Brute/fiend
  "haijin": { s: 3, c: 5 }, // Human waste
  "ochikobore": { s: 3, c: 5 }, // Dropout/failure
  "kimoota": { s: 3, c: 5 }, // Creepy otaku
  "netouyo": { s: 3, c: 5 }, // Internet right-winger (derogatory)
  "payoku": { s: 3, c: 5 }, // Derogatory for leftist
  "baikoku": { s: 3, c: 5 }, // Selling out the country
  "hannichi": { s: 3, c: 5 }, // Anti-Japan (used as slur)
  "hikokumin": { s: 3, c: 5 }, // Non-citizen/traitor
  "kokuzoku": { s: 3, c: 5 }, // National traitor
  "chon": { s: 3, c: 5 }, // Slur for Koreans
  "chankoro": { s: 3, c: 5 }, // Slur for Chinese
  "shina": { s: 3, c: 5 }, // Derogatory for China
  "shinajin": { s: 3, c: 5 }, // Derogatory for Chinese
  "gaijin": { s: 3, c: 5 }, // Foreigner (can be derogatory)
  "ketōjin": { s: 3, c: 5 }, // Slur for foreigners
  "kuronbo": { s: 3, c: 5 }, // N-word equivalent
  "nigā": { s: 3, c: 5 }, // N-word (katakana romanization)
  "dojin": { s: 3, c: 5 }, // Primitive person (slur)
  "sangokujin": { s: 3, c: 5 }, // Derogatory for foreigners
  "hitomodoki": { s: 5, c: 5 }, // Sub-human
  "eta": { s: 3, c: 5 }, // Historical outcaste slur
  "hinin": { s: 3, c: 5 }, // Non-person (historical)
  "burakumin": { s: 3, c: 5 }, // Burakumin (discriminatory)
  "yotsu": { s: 3, c: 5 }, // Four (burakumin slur)

  // Mixed Japanese-English profanity (katakana loanwords typed in romaji)
  "fakku": { s: 3, c: 5 }, // Fuck
  "fakkin": { s: 3, c: 5 }, // Fucking
  "shitto": { s: 3, c: 5 }, // Shit
  "bitchi": { s: 3, c: 4 }, // Bitch
  "asuhōru": { s: 3, c: 4 }, // Asshole
  "kokku": { s: 4, c: 4 }, // Cock
  "dammu": { s: 3, c: 4 }, // Damn
  "heru": { s: 3, c: 4 }, // Hell
  "kocksacker": { s: 4, c: 4 }, // Cocksucker (typed in roman)
  "fakkyu": { s: 3, c: 5 }, // Fuck you
  "buroshitto": { s: 3, c: 5 }, // Bullshit

  // Additional romaji compound insults
  "kono kuso yaro": { s: 3, c: 4 }, // You shit bastard
  "kono baka": { s: 1, c: 4 }, // You idiot
  "kono busu": { s: 1, c: 4 }, // You ugly
  "kono debu": { s: 1, c: 4 }, // You fatso
  "kono kasu": { s: 1, c: 4 }, // You scum
  "kono kuzu": { s: 1, c: 4 }, // You trash
  "kono gomi": { s: 1, c: 4 }, // You garbage
  "kono hage": { s: 1, c: 4 }, // You baldy
  "shinde kure": { s: 5, c: 5 }, // Please die
  "ikiterukachinashi": { s: 1, c: 4 }, // Not worth living
  "sonzaikachinashi": { s: 1, c: 4 }, // No value in existing
  "mejiwari": { s: 1, c: 4 }, // Eyesore
  "hedogaderu": { s: 1, c: 4 }, // Makes me vomit
  "mushizugahashiru": { s: 1, c: 4 }, // Makes my skin crawl

  // Additional 2ch/5ch meme insults
  "ワロタ": { s: 2, c: 3 }, // Laughed (mockery)
  "草生える": { s: 3, c: 3 }, // Growing grass (LOL, mockery)
  "大草原": { s: 3, c: 3 }, // Great grassland (massive LOL)
  "wwwww": { s: 2, c: 3 }, // LOL (mockery in certain contexts)
  "プギャー": { s: 2, c: 3 }, // Mockery sound
  "m9(^Д^)": { s: 2, c: 3 }, // Pointing and laughing
  "ゲラゲラ": { s: 2, c: 3 }, // Laughing mockery sound
  "鬱だ死のう": { s: 5, c: 5 }, // I'm depressed, let's die (dark humor meme)
  "通報しますた": { s: 2, c: 3 }, // Reported (2ch meme)
  "お前のかーちゃんでべそ": { s: 2, c: 3 }, // Your mom has an outie (playground insult)
  "池沼ムーブ": { s: 2, c: 3 }, // Pond-swamp move (disabled person move)
  "ンゴ": { s: 2, c: 3 }, // Suffix used mockingly
  "クソワロ": { s: 3, c: 5 }, // Shit-laugh (mockery)
  "草不可避": { s: 3, c: 3 }, // Grass unavoidable (can't help but laugh, mocking)
  "お前もう死んでいる": { s: 5, c: 5 }, // You're already dead (threat/meme)
  "雑魚": { s: 1, c: 4 }, // Small fry/weakling
  "ザコ": { s: 2, c: 3 }, // Small fry (katakana)
  "この雑魚": { s: 1, c: 4 }, // You weakling
  "雑魚キャラ": { s: 1, c: 4 }, // Weakling character
  "養分": { s: 2, c: 3 }, // Nutrients (sucker being exploited)
  "カモ": { s: 2, c: 3 }, // Duck (sucker/easy target)
  "カモにする": { s: 2, c: 3 }, // To make someone a sucker
  "オワコン": { s: 2, c: 3 }, // Finished content (washed up)
  "終わってる": { s: 2, c: 3 }, // It's over (for someone)
  "クソゲー": { s: 3, c: 5 }, // Shit game
  "糞運営": { s: 3, c: 5 }, // Shit management
  "エアプ勢": { s: 2, c: 3 }, // Fake experience group
  "サンドバッグ": { s: 2, c: 3 }, // Sandbag (punching bag, insult)
  "カカシ": { s: 2, c: 3 }, // Scarecrow (useless person)
  "木偶の坊": { s: 2, c: 3 }, // Wooden puppet (useless person)
  "穀潰し野郎": { s: 3, c: 4 }, // Grain waster bastard
  "税金の無駄": { s: 2, c: 3 }, // Waste of tax money
  "酸素の無駄": { s: 2, c: 3 }, // Waste of oxygen
  "電気の無駄": { s: 2, c: 3 }, // Waste of electricity

  // Additional Okinawan dialect profanity
  "フリムン": { s: 1, c: 4 }, // Fool (Okinawan)
  "ゲレン": { s: 1, c: 4 }, // Ugly/dirty (Okinawan)
  "ヤナワラバー": { s: 3, c: 4 }, // Bad child (Okinawan)
  "ヤナカーギー": { s: 1, c: 4 }, // Ugly face (Okinawan)
  "インチキ": { s: 3, c: 4 }, // Cheater/fraud
  "ワジワジ": { s: 3, c: 4 }, // Angry (Okinawan)
  "チュラカーギー": { s: 3, c: 4 }, // Beautiful face (used sarcastically)
  "シニサリンドー": { s: 3, c: 4 }, // Go to hell (Okinawan)
  "クルサリンドー": { s: 3, c: 4 }, // I'll kill you (Okinawan)
  "ヒヤミカチ": { s: 3, c: 4 }, // Suddenly/shockingly (exclamation)

  // Additional Tohoku dialect profanity
  "たまげた": { s: 3, c: 4 }, // Shocked (can be insult)
  "しょしい": { s: 3, c: 4 }, // Embarrassing/pathetic (Tohoku)
  "あずましくない": { s: 3, c: 4 }, // Uncomfortable/unpleasant (Hokkaido)
  "なまら": { s: 3, c: 4 }, // Very (Hokkaido intensifier)
  "なまらむかつく": { s: 3, c: 4 }, // Very annoying (Hokkaido)
  "こわい": { s: 3, c: 4 }, // Tired/scary (Tohoku double meaning)
  "ねっぱる": { s: 3, c: 4 }, // Sticky/annoying person (Tohoku)
  "がおる": { s: 3, c: 4 }, // To be exhausted/defeated (Tohoku)

  // Additional Nagoya/Chubu dialect profanity
  "たわけめ": { s: 1, c: 4 }, // You fool (Nagoya)
  "でれすけ": { s: 3, c: 4 }, // Lazy/sloppy person (Nagoya)
  "ちんちこちん": { s: 3, c: 4 }, // Extremely hot (Nagoya, sounds vulgar)
  "けったくそ悪い": { s: 3, c: 4 }, // Annoying/disgusting (Nagoya)
  "どべ": { s: 3, c: 4 }, // Last place/worst (Chubu)

  // Additional compound sexual terms
  "セフレ": { s: 4, c: 4 }, // Sex friend
  "ハメ友": { s: 4, c: 4 }, // Sex friend (vulgar)
  "ワンナイト": { s: 4, c: 4 }, // One-night stand
  "マグロ": { s: 4, c: 4 }, // Tuna (passive sex partner)
  "即ハメ": { s: 4, c: 4 }, // Immediate sex
  "即マン": { s: 4, c: 4 }, // Immediate sex (vulgar)
  "即尺": { s: 4, c: 4 }, // Immediate oral
  "ナンパ": { s: 4, c: 4 }, // Pickup (sexual connotation)
  "逆ナン": { s: 4, c: 4 }, // Reverse pickup (woman picks up man)
  "ヤリ部屋": { s: 4, c: 4 }, // Sex room
  "ラブホ": { s: 4, c: 4 }, // Love hotel
  "連れ込み": { s: 4, c: 4 }, // Taking someone to hotel
  "お持ち帰り": { s: 4, c: 4 }, // Takeaway (taking someone home for sex)
  "据え膳": { s: 4, c: 4 }, // Easy sexual opportunity
  "二股": { s: 4, c: 4 }, // Two-timing
  "浮気": { s: 4, c: 4 }, // Cheating
  "不倫相手": { s: 4, c: 4 }, // Affair partner
  "愛人": { s: 4, c: 4 }, // Mistress/lover
  "セクハラ": { s: 4, c: 4 }, // Sexual harassment
  "パワハラ": { s: 4, c: 4 }, // Power harassment
  "痴漢プレイ": { s: 4, c: 4 }, // Groping play
  "レイプ目": { s: 5, c: 5 }, // Rape eyes (glazed expression)
  "和姦": { s: 4, c: 4 }, // Consensual sex (used in disturbing contexts)
  "陵辱": { s: 4, c: 4 }, // Humiliation/violation
  "凌辱プレイ": { s: 4, c: 4 }, // Humiliation play
  "奴隷プレイ": { s: 4, c: 4 }, // Slave play
  "首絞め": { s: 4, c: 4 }, // Choking (sexual)
  "窒息プレイ": { s: 4, c: 4 }, // Asphyxiation play
  "蝋燭プレイ": { s: 4, c: 4 }, // Candle play
  "目隠しプレイ": { s: 4, c: 4 }, // Blindfold play
  "拘束プレイ": { s: 4, c: 4 }, // Restraint play
  "アナルプレイ": { s: 4, c: 4 }, // Anal play
  "前立腺": { s: 4, c: 4 }, // Prostate (sexual context)
  "前立腺マッサージ": { s: 4, c: 4 }, // Prostate massage
  "ペギング": { s: 4, c: 4 }, // Pegging
  "フィストファック": { s: 4, c: 5 }, // Fist fuck
  "ダブルペネトレーション": { s: 4, c: 4 }, // Double penetration
  "中イキ": { s: 4, c: 4 }, // Internal orgasm
  "外イキ": { s: 4, c: 4 }, // External orgasm
  "連続イキ": { s: 4, c: 4 }, // Continuous orgasm
  "潮噴き": { s: 4, c: 4 }, // Squirting (variant)
  "マン汁": { s: 4, c: 4 }, // Vaginal fluid (vulgar)
  "ザー汁": { s: 4, c: 4 }, // Semen (slang)
  "精飲プレイ": { s: 4, c: 4 }, // Semen drinking play
  "聖水プレイ": { s: 4, c: 4 }, // Golden shower play
  "スカプレイ": { s: 4, c: 4 }, // Scatplay
  "食糞": { s: 4, c: 4 }, // Coprophagia
  "飲尿": { s: 4, c: 4 }, // Urine drinking
  "異物挿入": { s: 4, c: 4 }, // Foreign object insertion

  // Additional internet generation insults
  "チー牛顔": { s: 2, c: 3 }, // Cheese beef face (nerd face)
  "キョロ充": { s: 2, c: 3 }, // Looking-around normie (anxious social person)
  "量産型": { s: 3, c: 3 }, // Mass-produced type (generic/boring)
  "イキリ": { s: 2, c: 3 }, // Acting tough
  "イキリオタク": { s: 2, c: 3 }, // Tough-acting otaku
  "イキリト": { s: 2, c: 3 }, // Acting like Kirito (SAO insult)
  "なろう系": { s: 2, c: 3 }, // Light novel type (generic/boring)
  "承認欲求モンスター": { s: 2, c: 3 }, // Approval-seeking monster
  "マウント": { s: 3, c: 3 }, // Mounting (asserting dominance)
  "マウント取り": { s: 2, c: 3 }, // Taking mount (one-upping)
  "煽りカス": { s: 2, c: 3 }, // Provocation scum
  "クソザコ": { s: 1, c: 4 }, // Shit weakling
  "クソザコナメクジ": { s: 3, c: 5 }, // Shit weak slug
  "害悪": { s: 2, c: 3 }, // Harmful evil
  "戦犯": { s: 2, c: 3 }, // War criminal (blame for failure)
  "A級戦犯": { s: 3, c: 3 }, // A-class war criminal (most to blame)
  "脳死": { s: 2, c: 3 }, // Brain dead (acting without thinking)
  "思考停止": { s: 2, c: 3 }, // Stopped thinking (insult)
  "コミュ障": { s: 2, c: 3 }, // Communication disorder (insult)
  "陰キャラ": { s: 2, c: 3 }, // Dark character (introvert insult)
  "陰の者": { s: 2, c: 3 }, // Person of shadow (introvert insult)
  "キモ男": { s: 2, c: 3 }, // Gross man
  "キモ女": { s: 2, c: 3 }, // Gross woman
  "おっさん": { s: 2, c: 3 }, // Old man (derogatory)
  "おばさん": { s: 2, c: 3 }, // Old woman (derogatory)
  "ジジイ": { s: 2, c: 3 }, // Old man (vulgar)
  "ババア": { s: 2, c: 3 }, // Old woman (vulgar)
  "くたばれジジイ": { s: 2, c: 3 }, // Drop dead old man
  "くたばれババア": { s: 2, c: 3 }, // Drop dead old woman

  // === EXPANDED ENTRIES ===

  // Additional native Japanese insults - comprehensive
  "あんぽんたん": { s: 1, c: 4 }, // Idiot (archaic/playful)
  "うすのろ": { s: 1, c: 4 }, // Slow-witted
  "うつけ": { s: 1, c: 4 }, // Fool (archaic)
  "うつけもの": { s: 1, c: 4 }, // Foolish person (archaic)
  "おおばかもの": { s: 1, c: 4 }, // Great fool
  "おおまぬけ": { s: 1, c: 4 }, // Great fool
  "おろかもの": { s: 1, c: 4 }, // Foolish person
  "おたんちん": { s: 1, c: 4 }, // Fool/simpleton
  "くされ外道": { s: 1, c: 4 }, // Rotten fiend
  "くされ野郎": { s: 3, c: 4 }, // Rotten bastard
  "くされ女": { s: 1, c: 4 }, // Rotten woman
  "くされ": { s: 1, c: 4 }, // Rotten
  "くそくらえ": { s: 3, c: 5 }, // Eat shit (hiragana)
  "くそ以下": { s: 3, c: 5 }, // Below shit
  "くそ未満": { s: 3, c: 5 }, // Less than shit
  "けちんぼ": { s: 1, c: 4 }, // Stingy person
  "こんちくしょう": { s: 1, c: 4 }, // Damn it (emphatic)
  "このすっとこどっこい": { s: 1, c: 4 }, // You bumbling fool
  "このとんちき": { s: 1, c: 4 }, // You dunce
  "ごくつぶし": { s: 1, c: 4 }, // Grain waster (useless person)
  "ごろつき": { s: 1, c: 4 }, // Hoodlum (hiragana)
  "さっさと失せろ": { s: 1, c: 4 }, // Hurry up and get lost
  "さっさと消えろ": { s: 1, c: 4 }, // Hurry up and disappear
  "さっさと死ね": { s: 5, c: 5 }, // Hurry up and die
  "ざまあみろ": { s: 1, c: 4 }, // Serves you right
  "ざまあ": { s: 1, c: 4 }, // Serves you right (abbreviation)
  "すっとこ": { s: 1, c: 4 }, // Bumbling
  "ずうずうしい": { s: 1, c: 4 }, // Shameless/brazen
  "たかり": { s: 1, c: 4 }, // Moocher/beggar
  "たかり屋": { s: 1, c: 4 }, // Professional moocher
  "ちっこい": { s: 1, c: 4 }, // Tiny (insult for stature)
  "でくのぼう": { s: 1, c: 4 }, // Wooden puppet (useless, hiragana)
  "とんちき": { s: 1, c: 4 }, // Dunce/blockhead
  "なんだこの野郎": { s: 3, c: 4 }, // What the hell, you bastard
  "のたれ死ね": { s: 5, c: 5 }, // Die in a ditch
  "のたれ死にしろ": { s: 5, c: 5 }, // Die in a ditch (polite form of insult)
  "はいはいワロスワロス": { s: 1, c: 4 }, // Yeah yeah LOL (dismissive mockery)
  "ばかたれ": { s: 1, c: 4 }, // Stupid drip (hiragana)
  "ばかめ": { s: 1, c: 4 }, // You fool (hiragana)
  "ひきょうもの": { s: 1, c: 4 }, // Coward (hiragana)
  "へたくそ": { s: 1, c: 4 }, // Terrible at something
  "ほざくな": { s: 1, c: 4 }, // Don't spout nonsense
  "もろだし": { s: 1, c: 4 }, // Full exposure
  "やりちん": { s: 5, c: 4 }, // Man-whore (hiragana)
  "よわむし": { s: 1, c: 4 }, // Weakling/coward (hiragana)

  // Additional kanji insults
  "愚か者": { s: 1, c: 4 }, // Fool
  "愚者": { s: 1, c: 4 }, // Fool (formal)
  "愚鈍": { s: 1, c: 4 }, // Stupid and dull
  "愚図": { s: 1, c: 4 }, // Dullard
  "愚劣": { s: 1, c: 4 }, // Stupid and inferior
  "愚民": { s: 1, c: 4 }, // Stupid people
  "悪党": { s: 1, c: 4 }, // Villain
  "悪人": { s: 1, c: 4 }, // Bad person
  "悪魔": { s: 1, c: 4 }, // Devil
  "悪鬼": { s: 1, c: 4 }, // Evil spirit
  "暗愚": { s: 1, c: 4 }, // Dark stupidity
  "陰湿": { s: 1, c: 4 }, // Sneaky/nasty
  "陰険": { s: 1, c: 4 }, // Treacherous
  "汚物": { s: 1, c: 4 }, // Filth
  "下等": { s: 3, c: 4 }, // Low-class
  "下劣": { s: 1, c: 4 }, // Base/vulgar
  "下品": { s: 3, c: 4 }, // Vulgar/low-class
  "害虫": { s: 1, c: 4 }, // Pest
  "間抜け": { s: 1, c: 4 }, // Idiot (lit. missed timing)
  "狂人": { s: 1, c: 4 }, // Madman
  "狂犬": { s: 1, c: 4 }, // Mad dog
  "愚弄": { s: 1, c: 4 }, // Mocking/ridiculing
  "嫌われ者": { s: 1, c: 4 }, // Hated person
  "小者": { s: 1, c: 4 }, // Small person (insignificant)
  "卑怯者": { s: 1, c: 4 }, // Coward (kanji)
  "卑劣": { s: 1, c: 4 }, // Base/despicable
  "品性下劣": { s: 1, c: 4 }, // Low character
  "不細工": { s: 1, c: 4 }, // Ugly/clumsy
  "膿": { s: 1, c: 4 }, // Pus (insult)
  "阿呆": { s: 1, c: 4 }, // Idiot (Kansai kanji)
  "大阿呆": { s: 1, c: 4 }, // Great idiot
  "能天気": { s: 1, c: 4 }, // Airheaded
  "脳足りん": { s: 1, c: 4 }, // Brain deficient
  "脳みそ足りん": { s: 1, c: 4 }, // Brain matter deficient
  "脳無し": { s: 1, c: 4 }, // Brainless
  "脳味噌腐ってる": { s: 1, c: 4 }, // Brain rotting
  "腐れ外道": { s: 1, c: 4 }, // Rotten fiend (kanji)
  "腐れ野郎": { s: 3, c: 4 }, // Rotten bastard (kanji)
  "朽ち果てろ": { s: 1, c: 4 }, // Rot away
  "恥さらし": { s: 1, c: 4 }, // Public shame
  "恥曝し": { s: 1, c: 4 }, // Public disgrace
  "面汚しめ": { s: 1, c: 4 }, // You disgrace
  "面の皮が厚い": { s: 1, c: 4 }, // Thick-skinned (shameless)
  "厚顔無恥": { s: 1, c: 4 }, // Thick-faced and shameless
  "破廉恥": { s: 1, c: 4 }, // Shameless/indecent
  "恥知らずめ": { s: 1, c: 4 }, // You shameless one
  "厚かましい": { s: 1, c: 4 }, // Brazen/impudent

  // 死ね (die) variations - comprehensive
  "死ね死ね": { s: 5, c: 5 }, // Die die
  "死ねよクソ": { s: 5, c: 5 }, // Die, shit
  "死ねクソガキ": { s: 5, c: 5 }, // Die, shit brat
  "死ねよマジで": { s: 5, c: 5 }, // Seriously die
  "死ねよお前": { s: 5, c: 5 }, // You die
  "さっさと死ねよ": { s: 5, c: 5 }, // Hurry up and die
  "早く死ね": { s: 5, c: 5 }, // Die quickly
  "即刻死ね": { s: 5, c: 5 }, // Die immediately
  "今すぐ死ね": { s: 5, c: 5 }, // Die right now
  "一刻も早く死ね": { s: 5, c: 5 }, // Die as soon as possible
  "苦しんで死ね": { s: 5, c: 5 }, // Suffer and die
  "もがいて死ね": { s: 5, c: 5 }, // Writhe and die
  "のたうち回って死ね": { s: 5, c: 5 }, // Thrash around and die
  "惨めに死ね": { s: 5, c: 5 }, // Die miserably
  "孤独に死ね": { s: 5, c: 5 }, // Die alone
  "誰にも知られず死ね": { s: 5, c: 5 }, // Die without anyone knowing
  "野垂れ死ね": { s: 5, c: 5 }, // Die in a ditch
  "犬死にしろ": { s: 5, c: 5 }, // Die like a dog
  "無駄死にしろ": { s: 5, c: 5 }, // Die uselessly

  // くそ/糞 additional compounds
  "クソ食え": { s: 3, c: 5 }, // Eat shit (katakana)
  "クソ以下": { s: 3, c: 5 }, // Below shit
  "クソ未満": { s: 3, c: 5 }, // Less than shit
  "クソみてえ": { s: 3, c: 5 }, // Shit-like (rough)
  "クソしょうもない": { s: 3, c: 5 }, // Shit worthless
  "クソつまらない": { s: 3, c: 5 }, // Shit boring
  "クソきもい": { s: 3, c: 5 }, // Shit disgusting
  "クソうざい": { s: 3, c: 5 }, // Shit annoying
  "クソダサい": { s: 3, c: 5 }, // Shit uncool
  "クソ弱い": { s: 3, c: 5 }, // Shit weak
  "クソ下手": { s: 3, c: 5 }, // Shit bad at
  "クソカス": { s: 3, c: 5 }, // Shit scum
  "クソクズ": { s: 3, c: 5 }, // Shit trash
  "クソゴミ": { s: 3, c: 5 }, // Shit garbage
  "クソ人間": { s: 3, c: 5 }, // Shit human
  "クソ親父": { s: 3, c: 5 }, // Shit old man (parent)
  "クソ母親": { s: 3, c: 5 }, // Shit mother
  "クソ教師": { s: 3, c: 5 }, // Shit teacher
  "クソ上司": { s: 3, c: 5 }, // Shit boss
  "クソ会社": { s: 3, c: 5 }, // Shit company
  "クソ政治家": { s: 3, c: 5 }, // Shit politician
  "くそまずい": { s: 3, c: 5 }, // Shit bad tasting
  "くそきたない": { s: 3, c: 5 }, // Shit dirty
  "くそやかましい": { s: 3, c: 5 }, // Shit noisy
  "くそうるさい": { s: 3, c: 5 }, // Shit loud
  "くそつまんねえ": { s: 3, c: 5 }, // Shit boring (rough)
  "くそめんどい": { s: 3, c: 5 }, // Shit troublesome
  "くそめんどくさい": { s: 3, c: 5 }, // Shit troublesome (full)
  "くそだりい": { s: 3, c: 5 }, // Shit lazy/tiresome
  "くそねみい": { s: 3, c: 5 }, // Shit sleepy

  // バカ/アホ extended compounds
  "バカの極み": { s: 1, c: 4 }, // Height of stupidity
  "バカの壁": { s: 1, c: 4 }, // Wall of stupidity
  "バカ丸出し": { s: 1, c: 4 }, // Full-on stupid
  "バカすぎる": { s: 1, c: 4 }, // Too stupid
  "バカすぎ": { s: 1, c: 3 }, // Too stupid (casual)
  "バカでしょ": { s: 1, c: 4 }, // Are you stupid
  "バカなの": { s: 1, c: 4 }, // Are you stupid (question)
  "バカじゃないの": { s: 1, c: 4 }, // Aren't you stupid
  "バカじゃねえの": { s: 1, c: 4 }, // Aren't you stupid (rough)
  "バカか": { s: 1, c: 4 }, // Are you stupid (direct)
  "バカかお前": { s: 1, c: 4 }, // Are you stupid, you
  "バカ言うな": { s: 1, c: 4 }, // Don't say stupid things
  "バカこくな": { s: 1, c: 4 }, // Don't say stupid things (rough)
  "お前バカだろ": { s: 1, c: 4 }, // You're stupid right
  "おまえバカか": { s: 1, c: 4 }, // Are you stupid (rough)
  "アホすぎ": { s: 1, c: 4 }, // Too stupid (Kansai)
  "アホすぎる": { s: 1, c: 4 }, // Too stupid (Kansai)
  "アホか": { s: 1, c: 4 }, // Are you stupid (Kansai)
  "アホやろ": { s: 3, c: 4 }, // Stupid bastard (Kansai)
  "アホらしい": { s: 3, c: 5 }, // Ridiculous (Kansai)
  "アホくさい": { s: 1, c: 4 }, // Stupid-smelling (Kansai)
  "アホの極み": { s: 1, c: 4 }, // Height of stupidity (Kansai)
  "アホ面": { s: 1, c: 4 }, // Stupid face (Kansai)
  "アホヅラ": { s: 1, c: 4 }, // Stupid face (Kansai variant)
  "アホ丸出し": { s: 1, c: 4 }, // Full-on stupid (Kansai)
  "アホまるだし": { s: 1, c: 4 }, // Full-on stupid (Kansai hiragana)
  "ドアホが": { s: 1, c: 4 }, // Big idiot (Kansai aggressive)
  "ドアホめ": { s: 1, c: 4 }, // You big idiot (Kansai)
  "アホンダラが": { s: 1, c: 4 }, // Idiot (Kansai aggressive)
  "このアホンダラ": { s: 1, c: 4 }, // You idiot (Kansai)
  "このドアホ": { s: 1, c: 4 }, // You big idiot

  // Kansai dialect - expanded
  "しばくぞこら": { s: 3, c: 4 }, // I'll beat you, hey
  "しばいたるわ": { s: 5, c: 5 }, // I'll beat you (Kansai polite threat)
  "しばき倒す": { s: 3, c: 4 }, // Beat to the ground (Kansai)
  "いてまうど": { s: 3, c: 4 }, // I'll mess you up (Kansai variant)
  "いてこましたろか": { s: 3, c: 5 }, // Shall I beat the shit out of you (Kansai)
  "いわしたるぞ": { s: 3, c: 4 }, // I'll hurt you (Kansai variant)
  "いわすぞこら": { s: 3, c: 4 }, // I'll hurt you, hey (Kansai)
  "われなにさらしてんねん": { s: 3, c: 4 }, // What the hell are you doing (Kansai)
  "われなんやねん": { s: 3, c: 4 }, // What are you (Kansai hostile)
  "おどれなんじゃ": { s: 3, c: 4 }, // What are you (Kansai hostile)
  "おどれこら": { s: 5, c: 5 }, // Hey you (Kansai threatening)
  "おどれなめとったらいてまうぞ": { s: 3, c: 4 }, // If you look down on me I'll beat you (Kansai)
  "どたまかち割ったるぞ": { s: 3, c: 4 }, // I'll crack your skull (Kansai full)
  "しょうもないやつ": { s: 3, c: 4 }, // Worthless person (Kansai)
  "しょうもないやっちゃ": { s: 3, c: 4 }, // Worthless person (Kansai variant)
  "あほんだらめ": { s: 1, c: 4 }, // You idiot (Kansai)
  "ぼけかす": { s: 1, c: 4 }, // Idiot scum (Kansai)
  "ぼけなすめ": { s: 1, c: 4 }, // You idiot eggplant (Kansai)
  "すかたんめ": { s: 1, c: 4 }, // You fool (Kansai)
  "けったいなやつ": { s: 3, c: 4 }, // Weird person (Kansai)
  "いけず": { s: 3, c: 4 }, // Mean person (Kansai)
  "いけず言うな": { s: 3, c: 4 }, // Don't be mean (Kansai)
  "なんぼのもんじゃい": { s: 3, c: 4 }, // Who do you think you are (Kansai)
  "えらそうにすんな": { s: 3, c: 4 }, // Don't act arrogant (Kansai)
  "えらそうなこと言うな": { s: 3, c: 4 }, // Don't say arrogant things (Kansai)
  "調子のんな": { s: 4, c: 4 }, // Don't get cocky (Kansai)
  "いちびんな": { s: 3, c: 4 }, // Don't show off (Kansai)
  "つべこべ言うな": { s: 3, c: 4 }, // Don't talk back (Kansai)
  "ごちゃごちゃ言うな": { s: 3, c: 4 }, // Don't ramble (Kansai)
  "がたがた言うな": { s: 3, c: 4 }, // Don't complain (Kansai)

  // Kyushu dialect - expanded
  "ばかたれが": { s: 1, c: 4 }, // Stupid drip (Kyushu aggressive)
  "きさんなんばしよるとか": { s: 3, c: 4 }, // What the hell are you doing (Kyushu)
  "しゃーしか": { s: 3, c: 4 }, // Annoying (Kyushu variant)
  "のさばりくさって": { s: 3, c: 4 }, // Being arrogant (Kyushu)
  "ふうけもんめ": { s: 1, c: 4 }, // You fool (Kyushu)
  "ぬすっとめ": { s: 3, c: 4 }, // You thief (Kyushu)
  "わるさーしくさって": { s: 3, c: 4 }, // Being a troublemaker (Kyushu)
  "ちゃげんなか": { s: 3, c: 4 }, // Pathetic (Kyushu variant)
  "がまださんか": { s: 5, c: 5 }, // Can't endure (Kyushu threat)
  "きさんしゃーしいぞ": { s: 3, c: 4 }, // You're annoying (Kyushu)
  "こぎゃんこつすっと": { s: 5, c: 5 }, // If you do such things (Kyushu threatening)
  "あばかん": { s: 3, c: 4 }, // Can't handle (Kyushu, incompetent)
  "でたらめ": { s: 3, c: 4 }, // Nonsense (general but used in Kyushu)
  "よかよか": { s: 3, c: 4 }, // Fine fine (sarcastic dismissal, Kyushu)
  "しかとすんな": { s: 3, c: 4 }, // Don't ignore me (Kyushu)
  "じごでんな": { s: 3, c: 4 }, // Hellish (Kyushu)
  "ばかくさ": { s: 1, c: 4 }, // Stupid-smelling (Kyushu)
  "ばかこくな": { s: 1, c: 4 }, // Don't be stupid (Kyushu)

  // Tohoku dialect - expanded
  "たげむかつく": { s: 3, c: 4 }, // Very annoying (Tohoku)
  "たげきもい": { s: 3, c: 4 }, // Very disgusting (Tohoku)
  "たげうざい": { s: 3, c: 4 }, // Very annoying (Tohoku)
  "しょしくてしゃあない": { s: 3, c: 4 }, // Embarrassingly pathetic (Tohoku)
  "ごんぼほり": { s: 3, c: 4 }, // Tantrum-thrower (Tohoku)
  "じょっぱりめ": { s: 3, c: 4 }, // You stubborn person (Tohoku)
  "へばな": { s: 3, c: 4 }, // Go away (Tohoku)
  "うるせごと言うな": { s: 3, c: 4 }, // Don't say noisy things (Tohoku)
  "おしょすい": { s: 3, c: 4 }, // Embarrassing/pathetic (Tohoku)
  "おめでこ": { s: 3, c: 4 }, // Your forehead (Tohoku insult)
  "あんにゃろめ": { s: 3, c: 4 }, // That bastard (Tohoku)
  "ごしゃぐ": { s: 3, c: 4 }, // To get angry (Tohoku)
  "ごしゃがれる": { s: 3, c: 4 }, // To be scolded (Tohoku)
  "わらし": { s: 3, c: 4 }, // Child (Tohoku, can be derogatory)
  "がんす": { s: 5, c: 5 }, // Is (Tohoku, used in threatening context)
  "べっちょ": { s: 3, c: 4 }, // Female genitalia (Tohoku)
  "ほでなす": { s: 3, c: 4 }, // Useless person (Tohoku)

  // Hokkaido dialect - expanded
  "はんかくさいやつ": { s: 1, c: 4 }, // Stupid person (Hokkaido)
  "なまらむかつくんだが": { s: 3, c: 4 }, // Very annoying though (Hokkaido)
  "なまらキモい": { s: 3, c: 4 }, // Very disgusting (Hokkaido)
  "なまらうざい": { s: 3, c: 4 }, // Very annoying (Hokkaido)
  "なまらバカ": { s: 1, c: 4 }, // Very stupid (Hokkaido)
  "あずましくないな": { s: 3, c: 4 }, // Unpleasant (Hokkaido)
  "しゃっこい": { s: 3, c: 4 }, // Cold (Hokkaido, used as insult for cold person)
  "めんこくない": { s: 1, c: 4 }, // Not cute (Hokkaido, ugly)
  "べったら": { s: 3, c: 4 }, // Lazy/slovenly (Hokkaido)
  "ちょす": { s: 3, c: 4 }, // To tease/bother (Hokkaido)
  "ちょすな": { s: 3, c: 4 }, // Don't bother me (Hokkaido)

  // Okinawan/Ryukyuan dialect - expanded
  "フリムンめ": { s: 1, c: 4 }, // You fool (Okinawan)
  "ゲレンなやつ": { s: 1, c: 4 }, // Ugly/dirty person (Okinawan)
  "ヤナワラバーめ": { s: 3, c: 4 }, // You bad child (Okinawan)
  "ヤナカーギーめ": { s: 1, c: 4 }, // You ugly face (Okinawan)
  "シニサリンドーよ": { s: 3, c: 4 }, // Go to hell (Okinawan)
  "クルサリンドーよ": { s: 3, c: 4 }, // I'll kill you (Okinawan)
  "イッペーワジワジ": { s: 3, c: 4 }, // Very angry (Okinawan)
  "フリー": { s: 1, c: 4 }, // Fool (Okinawan short)
  "ヤナムン": { s: 3, c: 4 }, // Bad thing (Okinawan)
  "ヤナグチ": { s: 3, c: 4 }, // Bad mouth (Okinawan)
  "デージ": { s: 3, c: 4 }, // Very/serious (Okinawan intensifier)
  "デージフリムン": { s: 1, c: 4 }, // Very foolish (Okinawan)
  "アキサミヨー": { s: 3, c: 4 }, // Oh my (Okinawan exclamation, aggressive context)
  "チバリヨー": { s: 3, c: 4 }, // Hang in there (sarcastic, Okinawan)
  "ナンクルナイサ": { s: 3, c: 4 }, // It'll work out (sarcastic dismissal, Okinawan)
  "クサミチ": { s: 3, c: 4 }, // Stinky (Okinawan)
  "ガチマヤー": { s: 3, c: 4 }, // Greedy (Okinawan)

  // Nagoya/Chubu dialect - expanded
  "たわけがあ": { s: 1, c: 4 }, // You fool (Nagoya aggressive)
  "たわけめが": { s: 1, c: 4 }, // You fool (Nagoya aggressive)
  "でれすけめ": { s: 3, c: 4 }, // You lazy person (Nagoya)
  "けったくそわるい": { s: 3, c: 4 }, // Annoying/disgusting (Nagoya)
  "けったくそ": { s: 3, c: 4 }, // Annoying (Nagoya short)
  "ちんちこちんやぞ": { s: 3, c: 4 }, // It's very hot (Nagoya, sounds vulgar)
  "どべやなあ": { s: 3, c: 4 }, // You're last place (Chubu)
  "どべのどべ": { s: 3, c: 4 }, // Last of the last (Chubu)
  "やっとかめ": { s: 3, c: 4 }, // Long time no see (Nagoya, can be aggressive)

  // Hiroshima/Chugoku dialect
  "たいぎい": { s: 3, c: 4 }, // Troublesome/tiresome (Hiroshima)
  "ぶち": { s: 3, c: 4 }, // Very (Hiroshima intensifier, with insults)
  "ぶちころすけえ": { s: 5, c: 5 }, // I'll beat you to death (Hiroshima)
  "ぶちむかつく": { s: 3, c: 4 }, // Very annoying (Hiroshima)
  "ぶちきもい": { s: 3, c: 4 }, // Very disgusting (Hiroshima)
  "ぶちうざい": { s: 3, c: 4 }, // Very annoying (Hiroshima)
  "ぶちバカ": { s: 1, c: 4 }, // Very stupid (Hiroshima)
  "ぶちアホ": { s: 1, c: 4 }, // Very stupid (Hiroshima)
  "ぶちブス": { s: 1, c: 4 }, // Very ugly (Hiroshima)
  "ぶちデブ": { s: 1, c: 4 }, // Very fat (Hiroshima)
  "じゃけえ": { s: 3, c: 4 }, // Because (Hiroshima, aggressive context)
  "わりゃあ": { s: 3, c: 4 }, // You (Hiroshima hostile)
  "おどりゃあ": { s: 5, c: 5 }, // You (Hiroshima threatening)
  "おどりゃあなんしょうるんか": { s: 5, c: 5 }, // What are you doing (Hiroshima threatening)
  "いなげな": { s: 3, c: 4 }, // Strange/weird (Hiroshima negative)

  // Shikoku dialect
  "あるまじき": { s: 3, c: 4 }, // Unforgivable (Shikoku)
  "いかんぜよ": { s: 3, c: 4 }, // No good (Tosa/Kochi)
  "なめたらいかんぜよ": { s: 3, c: 4 }, // Don't underestimate me (Tosa)
  "おんしゃ": { s: 3, c: 4 }, // You (Tosa hostile)
  "こじゃんと": { s: 3, c: 4 }, // Very (Tosa intensifier)
  "こじゃんとムカつく": { s: 3, c: 4 }, // Very annoying (Tosa)

  // Additional sexual terms - comprehensive
  "性器": { s: 4, c: 4 }, // Genitalia
  "性器露出": { s: 4, c: 4 }, // Genital exposure
  "性交渉": { s: 4, c: 4 }, // Sexual relations
  "性的暴行": { s: 4, c: 4 }, // Sexual assault
  "性的虐待": { s: 4, c: 4 }, // Sexual abuse
  "わいせつ行為": { s: 4, c: 4 }, // Indecent act (hiragana+kanji)
  "卑猥": { s: 4, c: 4 }, // Obscene
  "猥褻行為": { s: 4, c: 4 }, // Obscene behavior
  "猥褻罪": { s: 4, c: 4 }, // Indecency crime
  "公然猥褻": { s: 4, c: 4 }, // Public indecency
  "強制わいせつ": { s: 4, c: 4 }, // Forced indecency
  "強制性交": { s: 4, c: 4 }, // Forced intercourse
  "準強姦": { s: 5, c: 5 }, // Quasi-rape
  "集団強姦": { s: 5, c: 5 }, // Group rape
  "強姦魔": { s: 5, c: 5 }, // Rapist
  "強姦犯": { s: 5, c: 5 }, // Rape criminal
  "連続強姦犯": { s: 5, c: 5 }, // Serial rapist
  "精液まみれ": { s: 4, c: 4 }, // Covered in semen
  "精子まみれ": { s: 4, c: 4 }, // Covered in sperm
  "ザーメンまみれ": { s: 4, c: 4 }, // Covered in semen (loanword)
  "精液顔": { s: 4, c: 4 }, // Semen face
  "ちんこまんこ": { s: 4, c: 4 }, // Dick pussy (combined vulgar)
  "まんぐり返し": { s: 4, c: 4 }, // Legs-over-head position
  "お尻の穴": { s: 4, c: 4 }, // Butt hole
  "アヌス": { s: 4, c: 4 }, // Anus (katakana)
  "菊穴": { s: 4, c: 4 }, // Chrysanthemum hole (anus)
  "菊門": { s: 4, c: 4 }, // Chrysanthemum gate (anus)
  "糞穴": { s: 4, c: 5 }, // Shit hole
  "尻穴": { s: 4, c: 4 }, // Ass hole
  "処女喪失": { s: 4, c: 4 }, // Loss of virginity (female)
  "童貞喪失": { s: 4, c: 4 }, // Loss of virginity (male)
  "初体験": { s: 4, c: 4 }, // First experience (sexual)
  "筆おろし": { s: 4, c: 4 }, // First sexual experience (male)
  "筆下ろし": { s: 4, c: 4 }, // First sexual experience (variant)
  "手淫": { s: 4, c: 4 }, // Masturbation (kanji)
  "自涜": { s: 4, c: 4 }, // Self-pollution (masturbation)
  "陰茎挿入": { s: 4, c: 4 }, // Penile insertion
  "膣内射精": { s: 4, c: 4 }, // Vaginal ejaculation
  "膣外射精": { s: 4, c: 4 }, // External ejaculation
  "前戯": { s: 4, c: 4 }, // Foreplay
  "後戯": { s: 4, c: 4 }, // Afterplay
  "愛撫": { s: 4, c: 4 }, // Caressing (sexual)
  "性的快感": { s: 4, c: 4 }, // Sexual pleasure
  "快楽": { s: 4, c: 4 }, // Pleasure (sexual context)
  "絶頂": { s: 4, c: 4 }, // Climax
  "白濁液": { s: 2, c: 3 }, // White turbid liquid (semen euphemism)
  "先走り": { s: 4, c: 4 }, // Pre-cum
  "我慢汁": { s: 4, c: 4 }, // Pre-cum (slang: patience juice)
  "カリ首": { s: 4, c: 4 }, // Glans (slang)
  "竿": { s: 4, c: 4 }, // Shaft (penis slang)
  "玉袋": { s: 4, c: 4 }, // Ball sack
  "金玉袋": { s: 4, c: 4 }, // Testicle sack
  "睾丸": { s: 4, c: 4 }, // Testicle (medical kanji)
  "陰核": { s: 4, c: 4 }, // Clitoris (medical kanji)
  "陰裂": { s: 4, c: 4 }, // Vulvar cleft
  "小陰唇": { s: 4, c: 4 }, // Labia minora (kanji)
  "大陰唇": { s: 4, c: 4 }, // Labia majora (kanji)
  "恥丘": { s: 4, c: 4 }, // Mons pubis
  "恥骨": { s: 4, c: 4 }, // Pubic bone
  "乳輪": { s: 4, c: 4 }, // Areola
  "乳房": { s: 4, c: 4 }, // Breast (medical)

  // Additional internet/2ch/5ch slang
  "草": { s: 3, c: 5 }, // LOL (modern slang, but also mocking)
  "大草原不可避": { s: 3, c: 3 }, // Can't avoid great grassland (can't help laughing, mocking)
  "クソワロタ": { s: 3, c: 5 }, // Shit-laughed
  "クソワロスwww": { s: 3, c: 5 }, // Shit-LOL
  "お前らに人権はない": { s: 2, c: 3 }, // You guys have no human rights
  "人権ない": { s: 2, c: 3 }, // No human rights
  "人権剥奪": { s: 2, c: 3 }, // Human rights revocation (gaming insult)
  "戦犯はお前": { s: 2, c: 3 }, // You are the war criminal (gaming blame)
  "A戦犯": { s: 3, c: 3 }, // A-class war criminal
  "お荷物": { s: 2, c: 3 }, // Burden/deadweight
  "足手まとい": { s: 2, c: 3 }, // Hindrance
  "邪魔者": { s: 2, c: 3 }, // Nuisance
  "邪魔するな": { s: 2, c: 3 }, // Don't get in the way
  "邪魔": { s: 2, c: 3 }, // In the way
  "邪魔くさい": { s: 2, c: 3 }, // Bothersome
  "しゃしゃるな": { s: 3, c: 3 }, // Don't butt in
  "しゃしゃり出るな": { s: 2, c: 3 }, // Don't come forward uninvited
  "出しゃばるな": { s: 2, c: 3 }, // Don't be pushy
  "でしゃばり": { s: 2, c: 3 }, // Busybody
  "おせっかい": { s: 2, c: 3 }, // Nosy/meddlesome
  "お節介野郎": { s: 3, c: 4 }, // Nosy bastard
  "ストーカーかよ": { s: 2, c: 3 }, // Are you a stalker
  "キモストーカー": { s: 2, c: 3 }, // Creepy stalker
  "キモい男": { s: 2, c: 3 }, // Creepy man
  "キモい女": { s: 2, c: 3 }, // Creepy woman
  "キモいおっさん": { s: 2, c: 3 }, // Creepy old man
  "キモいおばさん": { s: 2, c: 3 }, // Creepy old woman
  "キモいジジイ": { s: 2, c: 3 }, // Creepy old man (vulgar)
  "キモいババア": { s: 2, c: 3 }, // Creepy old woman (vulgar)
  "キモオタ野郎": { s: 3, c: 4 }, // Creepy otaku bastard
  "キモオタども": { s: 2, c: 3 }, // Creepy otaku people
  "キモデブ": { s: 1, c: 4 }, // Creepy fatso
  "キモハゲ": { s: 2, c: 3 }, // Creepy baldy
  "きっしょ": { s: 2, c: 3 }, // Gross (abbreviation of きしょい)
  "きっしょい": { s: 2, c: 3 }, // Gross (variant)
  "ドン引き": { s: 2, c: 3 }, // Total turn-off
  "引くわ": { s: 2, c: 3 }, // That's a turn-off
  "ウザ絡み": { s: 2, c: 3 }, // Annoying involvement
  "ウザ男": { s: 2, c: 3 }, // Annoying man
  "ウザ女": { s: 2, c: 3 }, // Annoying woman
  "クソ絡み": { s: 3, c: 5 }, // Shit involvement
  "ウザいんだよ": { s: 2, c: 3 }, // You're annoying
  "うぜえんだよ": { s: 2, c: 3 }, // You're annoying (rough)
  "きもいんだよ": { s: 2, c: 3 }, // You're disgusting
  "きめえんだよ": { s: 2, c: 3 }, // You're gross
  "くさいんだよ": { s: 2, c: 3 }, // You stink
  "くせえんだよ": { s: 2, c: 3 }, // You stink (rough)
  "だせえんだよ": { s: 2, c: 3 }, // You're uncool
  "邪魔なんだよ": { s: 2, c: 3 }, // You're in the way
  "消えろよ": { s: 2, c: 3 }, // Disappear already
  "いなくなれ": { s: 2, c: 3 }, // Disappear
  "存在が邪魔": { s: 2, c: 3 }, // Your existence is in the way
  "存在が迷惑": { s: 2, c: 3 }, // Your existence is a nuisance
  "存在価値ゼロ": { s: 2, c: 3 }, // Zero existence value
  "存在意義なし": { s: 2, c: 3 }, // No meaning in existing
  "生きてる意味ない": { s: 2, c: 3 }, // No meaning in living
  "お前の席ねえから": { s: 2, c: 3 }, // There's no seat for you
  "帰れ": { s: 2, c: 3 }, // Go home
  "帰れよ": { s: 2, c: 3 }, // Go home already
  "さっさと帰れ": { s: 2, c: 3 }, // Hurry up and go home
  "田舎に帰れ": { s: 2, c: 3 }, // Go back to the countryside

  // Additional katakana loanword profanity
  "マザーファッカー": { s: 5, c: 5 }, // Motherfucker
  "サノバビッチ": { s: 3, c: 4 }, // Son of a bitch
  "ゴーファックユアセルフ": { s: 3, c: 5 }, // Go fuck yourself
  "シャットアップ": { s: 3, c: 4 }, // Shut up
  "ゲットアウト": { s: 3, c: 4 }, // Get out
  "ファックオフ": { s: 3, c: 5 }, // Fuck off
  "ダムイット": { s: 3, c: 4 }, // Damn it
  "ゴッドダム": { s: 3, c: 4 }, // God damn
  "ホーリーシット": { s: 3, c: 5 }, // Holy shit
  "ワットザファック": { s: 3, c: 5 }, // What the fuck
  "ピースオブシット": { s: 3, c: 5 }, // Piece of shit
  "ゴートゥーヘル": { s: 3, c: 4 }, // Go to hell
  "バスタード": { s: 3, c: 4 }, // Bastard
  "スラット": { s: 3, c: 4 }, // Slut
  "ホアー": { s: 5, c: 4 }, // Whore
  "クラップ": { s: 3, c: 4 }, // Crap
  "ジャーク": { s: 3, c: 4 }, // Jerk
  "アイディオット": { s: 1, c: 4 }, // Idiot
  "モロン": { s: 1, c: 4 }, // Moron
  "リタード": { s: 3, c: 4 }, // Retard
  "ルーザー": { s: 1, c: 4 }, // Loser
  "フリーク": { s: 3, c: 4 }, // Freak
  "クリーピー": { s: 3, c: 4 }, // Creepy
  "ディスガスティング": { s: 3, c: 4 }, // Disgusting
  "パセティック": { s: 3, c: 4 }, // Pathetic
  "ミゼラブル": { s: 3, c: 4 }, // Miserable
  "ピッグ": { s: 3, c: 4 }, // Pig
  "カウ": { s: 3, c: 4 }, // Cow (insult)
  "ドッグ": { s: 3, c: 4 }, // Dog (insult)
  "ラット": { s: 3, c: 4 }, // Rat
  "パラサイト": { s: 3, c: 4 }, // Parasite
  "トラッシュ": { s: 3, c: 4 }, // Trash
  "スカム": { s: 3, c: 4 }, // Scum

  // Additional ateji/phonetic substitution spellings
  "氏ね氏ね": { s: 5, c: 5 }, // Die die (internet censored)
  "詩ね": { s: 5, c: 5 }, // Die (kanji substitution)
  "市ね": { s: 5, c: 5 }, // Die (kanji substitution)
  "四ね": { s: 5, c: 5 }, // Die (number substitution)
  "し_ね": { s: 5, c: 5 }, // Die (with underscore)
  "タヒにたい": { s: 5, c: 5 }, // Want to die (censored)
  "しネ": { s: 5, c: 5 }, // Die (mixed case)
  "シね": { s: 5, c: 5 }, // Die (mixed case variant)
  "シネ": { s: 5, c: 5 }, // Die (full katakana)
  "シネシネ": { s: 5, c: 5 }, // Die die (katakana)
  "ころす": { s: 3, c: 4 }, // Kill (hiragana)
  "ころすぞ": { s: 3, c: 4 }, // I'll kill you (hiragana)
  "コロス": { s: 3, c: 4 }, // Kill (katakana)
  "コロスゾ": { s: 3, c: 4 }, // I'll kill you (katakana)
  "56す": { s: 4, c: 5 }, // Kill (number substitution)
  "ヌッコロス": { s: 3, c: 4 }, // Kill (internet variant)
  "ヌッ頃す": { s: 3, c: 4 }, // Kill (internet variant)
  "頃す": { s: 4, c: 5 }, // Kill (kanji substitution)
  "頃すぞ": { s: 4, c: 5 }, // I'll kill you (kanji substitution)
  "タヒぬ": { s: 5, c: 5 }, // Die (censored variant)
  "タヒのう": { s: 5, c: 5 }, // Let's die (censored)

  // Additional threat/violence expressions
  "殺すぞこの野郎": { s: 3, c: 4 }, // I'll kill you, you bastard
  "殺すぞクソが": { s: 5, c: 5 }, // I'll kill you, shit
  "ぶっ殺すぞマジで": { s: 5, c: 5 }, // I'll seriously kill you
  "マジで殺すからな": { s: 5, c: 5 }, // I'll seriously kill you, warning
  "本気で殺すぞ": { s: 5, c: 5 }, // I'll really kill you
  "目を潰す": { s: 5, c: 5 }, // I'll gouge out your eyes
  "歯を折る": { s: 5, c: 5 }, // I'll break your teeth
  "骨を折る": { s: 5, c: 5 }, // I'll break your bones
  "腕を折ってやる": { s: 5, c: 5 }, // I'll break your arm
  "足を折ってやる": { s: 5, c: 5 }, // I'll break your leg
  "顔面潰す": { s: 5, c: 5 }, // I'll crush your face
  "顔面殴る": { s: 5, c: 5 }, // I'll punch your face
  "ワンパンで沈める": { s: 5, c: 5 }, // I'll sink you with one punch
  "ボコる": { s: 5, c: 5 }, // To beat up
  "ボコボコにする": { s: 5, c: 5 }, // To beat to a pulp
  "ボコボコにしてやる": { s: 5, c: 5 }, // I'll beat you to a pulp
  "フルボッコ": { s: 5, c: 5 }, // Full beating
  "フルボッコにする": { s: 5, c: 5 }, // To give a full beating
  "タコ殴りにする": { s: 5, c: 5 }, // To punch repeatedly
  "タコ殴り": { s: 5, c: 5 }, // Repeated beating
  "ぼこぼこ": { s: 5, c: 5 }, // Beaten up (hiragana)
  "メッタ打ち": { s: 5, c: 5 }, // To beat savagely
  "メッタ刺し": { s: 5, c: 5 }, // To stab repeatedly
  "八つ裂きにする": { s: 5, c: 5 }, // To tear into eight pieces
  "バラバラにする": { s: 5, c: 5 }, // To tear apart
  "ミンチにする": { s: 5, c: 5 }, // To mince
  "すり潰す": { s: 5, c: 5 }, // To grind to paste
  "消し去る": { s: 5, c: 5 }, // To erase
  "存在ごと消す": { s: 5, c: 5 }, // To erase your existence
  "この世から消す": { s: 5, c: 5 }, // To erase from this world

  // Additional discriminatory terms
  "障害者め": { s: 3, c: 4 }, // You disabled person
  "身障者": { s: 3, c: 4 }, // Physically disabled (derogatory)
  "精神異常者": { s: 3, c: 4 }, // Mentally abnormal person
  "気狂いめ": { s: 3, c: 4 }, // You crazy person
  "ルンペン": { s: 3, c: 4 }, // Vagrant (German loanword)
  "浮浪者め": { s: 3, c: 4 }, // You vagrant
  "極道者め": { s: 3, c: 4 }, // You gang member
  "半グレ": { s: 3, c: 4 }, // Semi-delinquent
  "チンピラめ": { s: 3, c: 4 }, // You thug
  "不良少年め": { s: 3, c: 4 }, // You delinquent
  "ヤンキーかよ": { s: 3, c: 4 }, // Are you a delinquent
  "ゴミヤンキー": { s: 3, c: 4 }, // Garbage delinquent
  "クソヤンキー": { s: 3, c: 5 }, // Shit delinquent
  "劣等人種": { s: 3, c: 4 }, // Inferior race
  "劣等種": { s: 3, c: 4 }, // Inferior species

  // Additional sexual terms - romaji
  "sefure": { s: 4, c: 4 }, // Sex friend
  "hametomo": { s: 4, c: 4 }, // Sex friend (vulgar)
  "wannaito": { s: 4, c: 4 }, // One-night stand
  "sokuhame": { s: 4, c: 4 }, // Immediate sex
  "sokuman": { s: 4, c: 4 }, // Immediate sex (vulgar)
  "nanpa": { s: 4, c: 4 }, // Pickup (sexual)
  "gyakunan": { s: 4, c: 4 }, // Reverse pickup
  "rabuho": { s: 4, c: 4 }, // Love hotel
  "futamata": { s: 4, c: 4 }, // Two-timing
  "uwaki": { s: 4, c: 4 }, // Cheating
  "sekuhara": { s: 4, c: 4 }, // Sexual harassment
  "pawahara": { s: 4, c: 4 }, // Power harassment
  "chinkanpurei": { s: 4, c: 4 }, // Groping play
  "ryoujoku": { s: 4, c: 4 }, // Humiliation/violation
  "doreipurei": { s: 4, c: 4 }, // Slave play
  "kubijime": { s: 4, c: 4 }, // Choking (sexual)
  "pegingu": { s: 4, c: 4 }, // Pegging
  "manjiru": { s: 4, c: 4 }, // Vaginal fluid (vulgar)

  // Additional romaji - compound
  "kono kusottare ga": { s: 3, c: 5 }, // You shithead
  "kono baka ga": { s: 1, c: 4 }, // You idiot
  "kono aho ga": { s: 1, c: 4 }, // You idiot (Kansai)
  "kono kichigai ga": { s: 3, c: 5 }, // You crazy person
  "kono gomi ga": { s: 3, c: 5 }, // You garbage
  "kono kuzu ga": { s: 3, c: 5 }, // You trash
  "kono kasu ga": { s: 3, c: 5 }, // You scum
  "kono gesu ga": { s: 3, c: 5 }, // You lowlife
  "kono chikusho ga": { s: 3, c: 5 }, // You beast
  "kono gedo ga": { s: 3, c: 5 }, // You fiend
  "kono hitodenashi ga": { s: 3, c: 5 }, // You inhuman person
  "fuzakenna yo": { s: 3, c: 5 }, // Don't mess around
  "nameruna yo": { s: 3, c: 5 }, // Don't look down on me
  "choushi norunna yo": { s: 4, c: 5 }, // Don't get cocky
  "erasouni sunna": { s: 3, c: 5 }, // Don't act arrogant
  "gata gata iunna": { s: 3, c: 5 }, // Don't complain
  "sassato usero": { s: 3, c: 5 }, // Hurry up and get lost
  "sassato kiero": { s: 3, c: 5 }, // Hurry up and disappear
  "sassato shine": { s: 5, c: 5 }, // Hurry up and die
  "hayaku shine": { s: 5, c: 5 }, // Die quickly
  "ima sugu shine": { s: 5, c: 5 }, // Die right now
  "kurushinde shine": { s: 5, c: 5 }, // Suffer and die
  "mijimeni shine": { s: 5, c: 5 }, // Die miserably
  "hitoride shine": { s: 5, c: 5 }, // Die alone
  "inuji ni shiro": { s: 5, c: 5 }, // Die like a dog
  "zamaa miro": { s: 3, c: 5 }, // Serves you right

  // Additional homophobic/transphobic slurs
  "ホモくさい": { s: 5, c: 4 }, // Homo-smelling
  "ホモっぽい": { s: 5, c: 4 }, // Homo-ish
  "ホモ臭い": { s: 5, c: 4 }, // Homo-stinking
  "ホモだろ": { s: 5, c: 4 }, // You're homo right
  "レズだろ": { s: 5, c: 4 }, // You're lesbian right
  "オカマっぽい": { s: 5, c: 4 }, // Effeminate-ish
  "オカマくさい": { s: 5, c: 4 }, // Effeminate-smelling
  "オカマめ": { s: 5, c: 4 }, // You effeminate one
  "おなべめ": { s: 5, c: 4 }, // You masculine woman
  "ゲイ野郎": { s: 3, c: 4 }, // Gay bastard
  "レズ女": { s: 5, c: 4 }, // Lesbian woman (derogatory)
  "女装野郎": { s: 3, c: 4 }, // Cross-dressing bastard
  "変態野郎": { s: 3, c: 4 }, // Pervert bastard
  "変質者め": { s: 5, c: 4 }, // You deviant

  // Additional compound insults with この
  "このくそったれが": { s: 3, c: 5 }, // You shithead (aggressive)
  "この能なしが": { s: 1, c: 4 }, // You incompetent
  "この穀潰しが": { s: 1, c: 4 }, // You grain waster
  "この役立たずが": { s: 1, c: 4 }, // You useless person
  "この腰抜けが": { s: 1, c: 4 }, // You coward
  "この恥知らずが": { s: 1, c: 4 }, // You shameless person
  "この面汚しが": { s: 1, c: 4 }, // You disgrace
  "この卑怯者が": { s: 1, c: 4 }, // You coward
  "この下衆が": { s: 1, c: 4 }, // You lowlife
  "この外道が": { s: 1, c: 4 }, // You fiend
  "この畜生が": { s: 1, c: 4 }, // You beast
  "この人でなしが": { s: 1, c: 4 }, // You inhuman person
  "この鬼畜が": { s: 1, c: 4 }, // You brute
  "この人非人が": { s: 1, c: 4 }, // You inhuman being
  "このけだものが": { s: 1, c: 4 }, // You beast
  "この虫けらが": { s: 5, c: 5 }, // You insect (dehumanizing)
  "この蛆虫が": { s: 1, c: 4 }, // You maggot
  "このゴキブリが": { s: 4, c: 4 }, // You cockroach
  "このダニが": { s: 1, c: 4 }, // You tick
  "このシラミが": { s: 1, c: 4 }, // You louse
  "この寄生虫が": { s: 1, c: 4 }, // You parasite
  "この害虫が": { s: 1, c: 4 }, // You pest
  "このウジ虫が": { s: 1, c: 4 }, // You maggot (katakana)
  "このドブネズミが": { s: 1, c: 4 }, // You sewer rat
  "このハイエナが": { s: 1, c: 4 }, // You hyena
  "このヒルが": { s: 1, c: 4 }, // You leech
  "このミミズが": { s: 1, c: 4 }, // You earthworm

  // Additional derogatory terms for appearance
  "ブサイク": { s: 1, c: 4 }, // Ugly (katakana)
  "ブサメン": { s: 1, c: 4 }, // Ugly face
  "ブサ面": { s: 1, c: 4 }, // Ugly face (variant)
  "不細工め": { s: 1, c: 4 }, // You ugly
  "醜い": { s: 1, c: 4 }, // Ugly (kanji)
  "醜女": { s: 1, c: 4 }, // Ugly woman (kanji)
  "醜男": { s: 1, c: 4 }, // Ugly man (kanji)
  "オバサン顔": { s: 3, c: 4 }, // Old woman face
  "おっさん顔": { s: 3, c: 4 }, // Old man face
  "ジジイ顔": { s: 3, c: 4 }, // Old man face (vulgar)
  "ババア顔": { s: 3, c: 4 }, // Old woman face (vulgar)
  "チビ": { s: 3, c: 4 }, // Shorty
  "チビデブ": { s: 1, c: 4 }, // Short and fat
  "チビハゲ": { s: 3, c: 4 }, // Short and bald
  "チビデブハゲ": { s: 1, c: 4 }, // Short fat and bald
  "チビブサ": { s: 1, c: 4 }, // Short and ugly
  "デブス": { s: 1, c: 4 }, // Fat and ugly
  "ブサデブ": { s: 1, c: 4 }, // Ugly and fat
  "豚": { s: 3, c: 4 }, // Pig (insult)
  "ブタ": { s: 3, c: 4 }, // Pig (katakana)
  "豚野郎": { s: 3, c: 4 }, // Pig bastard
  "豚女": { s: 3, c: 4 }, // Pig woman
  "豚男": { s: 3, c: 4 }, // Pig man
  "デブ男": { s: 1, c: 4 }, // Fat man
  "デブ女": { s: 1, c: 4 }, // Fat woman
  "クソデブ男": { s: 1, c: 4 }, // Shit fat man
  "クソデブ女": { s: 1, c: 4 }, // Shit fat woman
  "ハゲデブ": { s: 1, c: 4 }, // Bald and fat (katakana)
  "クソハゲ男": { s: 3, c: 5 }, // Shit bald man
  "ズラ": { s: 3, c: 4 }, // Wig (mocking bald person)
  "ヅラ": { s: 3, c: 4 }, // Wig (variant)
  "カツラ": { s: 3, c: 4 }, // Wig (katakana)

  // Additional insults about intelligence
  "脳みそ空っぽ": { s: 1, c: 4 }, // Empty brain
  "脳みそスカスカ": { s: 1, c: 4 }, // Brain is hollow
  "脳みそゼロ": { s: 1, c: 4 }, // Zero brain
  "脳みそ入ってない": { s: 1, c: 4 }, // No brain inside
  "脳みそ使え": { s: 1, c: 4 }, // Use your brain
  "頭空っぽ": { s: 1, c: 4 }, // Empty head
  "頭悪すぎ": { s: 1, c: 4 }, // Head too bad
  "頭おかしい": { s: 1, c: 4 }, // Head is weird (crazy)
  "頭イカれてる": { s: 1, c: 4 }, // Head is messed up
  "頭湧いてる": { s: 1, c: 4 }, // Head is boiling (crazy)
  "頭大丈夫": { s: 1, c: 4 }, // Is your head OK (sarcastic)
  "頭の病院行け": { s: 1, c: 4 }, // Go to a head hospital
  "病院行け": { s: 1, c: 4 }, // Go to a hospital (you're crazy)
  "精神科行け": { s: 1, c: 4 }, // Go to psychiatry
  "精神病院行け": { s: 1, c: 4 }, // Go to a mental hospital
  "知恵遅れ": { s: 1, c: 4 }, // Slow-witted (derogatory)
  "学習障害": { s: 1, c: 4 }, // Learning disability (used as insult)
  "理解力ゼロ": { s: 1, c: 4 }, // Zero comprehension
  "判断力ゼロ": { s: 1, c: 4 }, // Zero judgment
  "常識ないのか": { s: 1, c: 4 }, // Do you have no common sense
  "非常識": { s: 1, c: 4 }, // Lacking common sense
  "非常識すぎ": { s: 1, c: 4 }, // Too lacking common sense
  "社会不適合者": { s: 1, c: 4 }, // Socially maladjusted person

  // Additional insults about worth/value
  "価値なし": { s: 1, c: 4 }, // Worthless
  "価値ゼロ": { s: 1, c: 4 }, // Zero value
  "存在が無駄": { s: 1, c: 4 }, // Existence is wasteful
  "存在が害": { s: 1, c: 4 }, // Existence is harmful
  "存在が罪": { s: 1, c: 4 }, // Existence is a sin
  "お前の存在自体が害悪": { s: 1, c: 4 }, // Your existence itself is harmful
  "この世にいらない": { s: 1, c: 4 }, // Not needed in this world
  "この世に不要": { s: 1, c: 4 }, // Unnecessary in this world
  "生まれてこなければよかった": { s: 1, c: 4 }, // Should not have been born
  "生まれてきたのが間違い": { s: 1, c: 4 }, // Being born was a mistake
  "生きてるだけ無駄": { s: 1, c: 4 }, // Living is just wasteful
  "酸素の無駄遣い": { s: 1, c: 4 }, // Waste of oxygen
  "空気の無駄": { s: 1, c: 4 }, // Waste of air
  "食糧の無駄": { s: 1, c: 4 }, // Waste of food
  "スペースの無駄": { s: 1, c: 4 }, // Waste of space
  "親の顔が見たい": { s: 1, c: 4 }, // I want to see your parents' faces (shame)
  "親が泣いてるぞ": { s: 1, c: 4 }, // Your parents are crying
  "育ちが悪い": { s: 1, c: 4 }, // Badly raised
  "しつけがなってない": { s: 1, c: 4 }, // No discipline
  "猿以下": { s: 1, c: 4 }, // Below monkeys
  "虫以下": { s: 1, c: 4 }, // Below insects
  "ゴミ以下": { s: 1, c: 4 }, // Below garbage
  "クソ以下の存在": { s: 3, c: 5 }, // Existence below shit
  "犬以下": { s: 1, c: 4 }, // Below dogs
  "豚以下": { s: 1, c: 4 }, // Below pigs
  "アメーバ以下": { s: 1, c: 4 }, // Below amoeba

  // Additional compound profanity - various
  "ぶっころがす": { s: 3, c: 5 }, // To knock around
  "ぶっこわしてやる": { s: 3, c: 5 }, // I'll destroy you
  "ぶった切る": { s: 3, c: 5 }, // To slash
  "ぶったおす": { s: 3, c: 5 }, // To knock down
  "ぶちかます": { s: 3, c: 5 }, // To slam into
  "ぶちまける": { s: 3, c: 5 }, // To spill/expose
  "ぶちこむ": { s: 3, c: 5 }, // To throw in
  "ぶちこわす": { s: 3, c: 5 }, // To wreck
  "たたっ殺す": { s: 5, c: 5 }, // To beat to death
  "なぶり殺す": { s: 5, c: 5 }, // To torment to death
  "嬲り殺す": { s: 5, c: 5 }, // To torment to death (kanji)
  "蹴り殺す": { s: 5, c: 5 }, // To kick to death
  "踏み殺す": { s: 5, c: 5 }, // To stomp to death
  "絞め殺す": { s: 5, c: 5 }, // To strangle to death
  "焼き殺す": { s: 5, c: 5 }, // To burn to death
  "撃ち殺す": { s: 5, c: 5 }, // To shoot to death
  "刺し殺す": { s: 5, c: 5 }, // To stab to death
  "食い殺す": { s: 5, c: 5 }, // To eat to death
  "噛み殺す": { s: 5, c: 5 }, // To bite to death
  "引き裂く": { s: 3, c: 5 }, // To tear apart
  "引きちぎる": { s: 3, c: 5 }, // To rip apart
  "引きずり回す": { s: 3, c: 5 }, // To drag around
  "引きずり出す": { s: 3, c: 5 }, // To drag out
  "叩き出す": { s: 3, c: 5 }, // To throw out
  "蹴り出す": { s: 3, c: 5 }, // To kick out
  "追い出す": { s: 3, c: 5 }, // To chase out
  "放り出す": { s: 3, c: 5 }, // To throw out
  "叩きつける": { s: 3, c: 5 }, // To slam against
  "投げつける": { s: 3, c: 5 }, // To hurl at
  "ぶつける": { s: 3, c: 5 }, // To hit against

  // Additional romaji profanity
  "anpontan": { s: 1, c: 4 }, // Idiot (archaic)
  "usunoro": { s: 3, c: 4 }, // Slow-witted
  "utsuke": { s: 1, c: 4 }, // Fool (archaic)
  "orokmono": { s: 1, c: 4 }, // Foolish person
  "kusare": { s: 3, c: 4 }, // Rotten
  "kusare gedo": { s: 3, c: 4 }, // Rotten fiend
  "kusare yaro": { s: 3, c: 4 }, // Rotten bastard
  "kechinbo": { s: 3, c: 4 }, // Stingy person
  "konchikusho": { s: 3, c: 4 }, // Damn it (emphatic)
  "gokutsubushi": { s: 3, c: 4 }, // Grain waster
  "zamaAmiro": { s: 3, c: 4 }, // Serves you right
  "zamaa": { s: 3, c: 4 }, // Serves you right (short)
  "zuuzuushii": { s: 3, c: 4 }, // Shameless
  "takari": { s: 3, c: 4 }, // Moocher
  "tonchiki": { s: 3, c: 4 }, // Blockhead
  "hozakuna": { s: 3, c: 4 }, // Don't spout nonsense
  "oroka mono": { s: 1, c: 4 }, // Foolish person
  "gujin": { s: 1, c: 4 }, // Stupid person
  "guretsu": { s: 1, c: 4 }, // Stupid and inferior
  "gudon": { s: 1, c: 4 }, // Stupid and dull
  "akutou": { s: 3, c: 4 }, // Villain
  "akunin": { s: 3, c: 4 }, // Bad person
  "akuma": { s: 3, c: 4 }, // Devil
  "insitsu": { s: 3, c: 4 }, // Sneaky/nasty
  "inken": { s: 3, c: 4 }, // Treacherous
  "obutsu": { s: 3, c: 4 }, // Filth
  "katou": { s: 3, c: 4 }, // Low-class
  "geretsu": { s: 3, c: 4 }, // Base/vulgar
  "gehin": { s: 3, c: 4 }, // Vulgar
  "gaichuu": { s: 3, c: 4 }, // Pest
  "kyoujin": { s: 3, c: 4 }, // Madman
  "kyouken": { s: 3, c: 4 }, // Mad dog
  "gurou": { s: 3, c: 4 }, // Ridiculing
  "kirawaremono": { s: 3, c: 4 }, // Hated person
  "hikyoumono": { s: 1, c: 4 }, // Coward
  "hiretsu": { s: 3, c: 4 }, // Base/despicable
  "busaiku": { s: 3, c: 4 }, // Already listed variant
  "ahou": { s: 1, c: 4 }, // Idiot (Kansai)
  "nouashi": { s: 3, c: 4 }, // Brain deficient
  "nounashi": { s: 3, c: 4 }, // Already listed variant
  "noumiso kusatteru": { s: 3, c: 4 }, // Brain rotting
  "hajisarashi": { s: 3, c: 4 }, // Public shame
  "tsura yogoshi": { s: 3, c: 4 }, // Disgrace
  "harenchi": { s: 3, c: 4 }, // Shameless
  "atsukamashii": { s: 3, c: 4 }, // Brazen

  // Additional gaming/internet insults
  "エイム下手": { s: 2, c: 3 }, // Bad aim
  "エイムクソ": { s: 3, c: 5 }, // Shit aim
  "エイムゴミ": { s: 2, c: 3 }, // Garbage aim
  "芋る": { s: 1, c: 4 }, // To camp (gaming, cowardly)
  "芋カス": { s: 2, c: 3 }, // Camping scum
  "芋砂": { s: 2, c: 3 }, // Camping sniper
  "noob": { s: 1, c: 2 }, // Noob (used in Japanese gaming)
  "ヌーブ": { s: 2, c: 3 }, // Noob (katakana)
  "初心者かよ": { s: 2, c: 3 }, // Are you a beginner
  "下手くそ": { s: 2, c: 3 }, // Already listed but variant
  "ヘタクソ": { s: 2, c: 3 }, // Terrible (katakana)
  "雑魚すぎ": { s: 2, c: 3 }, // Too weak
  "雑魚乙": { s: 1, c: 4 }, // Weakling, good work (sarcastic)
  "ざっこ": { s: 1, c: 3 }, // Weakling (casual)
  "ザッコw": { s: 1, c: 4 }, // Weakling LOL
  "弱すぎ": { s: 2, c: 3 }, // Too weak
  "弱すぎワロタ": { s: 2, c: 3 }, // Too weak, LOL
  "足引っ張るな": { s: 2, c: 3 }, // Don't drag us down
  "お荷物すぎ": { s: 2, c: 3 }, // Too much of a burden
  "いらね": { s: 2, c: 3 }, // Don't need you
  "来んな": { s: 2, c: 3 }, // Don't come
  "来るな": { s: 2, c: 3 }, // Don't come (standard)
  "参加するな": { s: 2, c: 3 }, // Don't participate
  "邪魔すんな": { s: 2, c: 3 }, // Don't get in the way (casual)
  "ゲーム辞めろ": { s: 2, c: 3 }, // Quit the game
  "引退しろ": { s: 2, c: 3 }, // Retire
  "やめちまえ": { s: 2, c: 3 }, // Just quit
  "センスない": { s: 2, c: 3 }, // No talent/sense
  "センスゼロ": { s: 2, c: 3 }, // Zero talent
  "才能ない": { s: 2, c: 3 }, // No talent
  "向いてない": { s: 2, c: 3 }, // Not cut out for it
  "スマーフ": { s: 2, c: 3 }, // Smurf (gaming: experienced player on new account)
  "チーター": { s: 2, c: 3 }, // Cheater
  "チートかよ": { s: 2, c: 3 }, // Are you cheating
  "壁打ちしてろ": { s: 2, c: 3 }, // Go hit a wall (practice alone)
  "bot以下": { s: 2, c: 3 }, // Below bot
  "botかよ": { s: 2, c: 3 }, // Are you a bot
  "CPU以下": { s: 2, c: 3 }, // Below CPU
  "養分乙": { s: 2, c: 3 }, // Good work being exploited
  "カモ乙": { s: 2, c: 3 }, // Good work being a sucker
  "搾取乙": { s: 2, c: 3 }, // Good work being exploited (variant)
  "金ヅル": { s: 2, c: 3 }, // Money vine (cash cow, derogatory)
  "ATM": { s: 2, c: 3 }, // ATM (person used for money)
  "財布": { s: 2, c: 3 }, // Wallet (person used for money)
  "おサイフ": { s: 2, c: 3 }, // Wallet (polite prefix, sarcastic)

  // Additional modern internet slang
  "こどおじきもい": { s: 2, c: 3 }, // Creepy adult at parents
  "チー牛きも": { s: 2, c: 3 }, // Cheese beef creepy
  "チーズ牛丼": { s: 2, c: 3 }, // Cheese beef bowl (nerd insult full form)
  "チー牛メガネ": { s: 3, c: 3 }, // Cheese beef glasses
  "陰キャきもい": { s: 2, c: 3 }, // Creepy introvert
  "陽キャウザい": { s: 2, c: 3 }, // Annoying extrovert
  "パリピうざい": { s: 2, c: 3 }, // Annoying party people
  "ウェイ系きもい": { s: 2, c: 3 }, // Creepy party type
  "量産型女": { s: 3, c: 3 }, // Mass-produced woman
  "量産型男": { s: 3, c: 3 }, // Mass-produced man
  "地雷メイク": { s: 2, c: 3 }, // Landmine makeup
  "地雷系": { s: 2, c: 3 }, // Landmine type (problematic)
  "メンヘラきもい": { s: 2, c: 3 }, // Creepy mentally ill
  "メンヘラうざい": { s: 2, c: 3 }, // Annoying mentally ill
  "構ってちゃんうざい": { s: 2, c: 3 }, // Annoying attention seeker
  "かまちょうざい": { s: 2, c: 3 }, // Annoying attention seeker (casual)
  "承認欲求やば": { s: 2, c: 3 }, // Approval-seeking is crazy
  "承認欲求キモ": { s: 2, c: 3 }, // Approval-seeking is creepy
  "マウントうざい": { s: 2, c: 3 }, // Annoying one-upping
  "マウントとるな": { s: 2, c: 3 }, // Don't one-up
  "イキるな": { s: 2, c: 3 }, // Don't act tough
  "イキりすぎ": { s: 2, c: 3 }, // Acting too tough
  "調子乗りすぎ": { s: 4, c: 3 }, // Getting too cocky
  "調子こきすぎ": { s: 2, c: 3 }, // Getting too full of yourself
  "ウザ絡みすんな": { s: 2, c: 3 }, // Don't be annoyingly involved
  "クソリプすんな": { s: 3, c: 5 }, // Don't shit-reply
  "クソリプ乙": { s: 3, c: 5 }, // Good work shit-replying
  "エアプ乙": { s: 2, c: 3 }, // Good work pretending
  "にわか乙": { s: 2, c: 3 }, // Good work being a poser

  // Additional romaji profanity - more compounds
  "kuso yaro me": { s: 3, c: 4 }, // You shit bastard
  "baka yaro me": { s: 3, c: 4 }, // You stupid bastard
  "chikusho me": { s: 3, c: 5 }, // You damn beast
  "gesu yaro": { s: 3, c: 4 }, // Lowlife bastard
  "gesu onna": { s: 3, c: 5 }, // Lowlife woman
  "gesu otoko": { s: 3, c: 5 }, // Lowlife man
  "kuzu yaro": { s: 3, c: 4 }, // Trash bastard
  "kuzu onna": { s: 3, c: 5 }, // Trash woman
  "kuzu otoko": { s: 3, c: 5 }, // Trash man
  "gomi yaro": { s: 3, c: 4 }, // Garbage bastard
  "gomi onna": { s: 3, c: 5 }, // Garbage woman
  "gomi otoko": { s: 3, c: 5 }, // Garbage man
  "kasu yaro": { s: 3, c: 4 }, // Scum bastard
  "kasu onna": { s: 3, c: 5 }, // Scum woman
  "kasu otoko": { s: 3, c: 5 }, // Scum man
  "buta yaro": { s: 3, c: 4 }, // Pig bastard
  "buta onna": { s: 3, c: 5 }, // Pig woman
  "buta otoko": { s: 3, c: 5 }, // Pig man
  "saru": { s: 3, c: 5 }, // Monkey (insult)
  "saru miman": { s: 3, c: 5 }, // Below monkeys
  "mushi": { s: 3, c: 5 }, // Bug (insult)
  "mushi miman": { s: 3, c: 5 }, // Below bugs
  "gokiburi": { s: 4, c: 5 }, // Cockroach
  "dani": { s: 3, c: 5 }, // Tick
  "shirami": { s: 3, c: 5 }, // Louse
  "kiseichu": { s: 3, c: 5 }, // Parasite
  "ujimushi": { s: 3, c: 5 }, // Maggot
  "dobunezumi": { s: 3, c: 5 }, // Sewer rat
  "hiru": { s: 3, c: 5 }, // Leech
  "mimizu": { s: 3, c: 5 }, // Earthworm
  "ameba miman": { s: 3, c: 5 }, // Below amoeba
  "inu ika": { s: 3, c: 5 }, // Below dogs
  "buta ika": { s: 3, c: 5 }, // Below pigs
  "gomi ika": { s: 3, c: 5 }, // Below garbage
  "kuso ika": { s: 3, c: 5 }, // Below shit

  // Additional insults - body shaming romaji
  "chibi": { s: 1, c: 4 }, // Shorty
  "chibi debu": { s: 1, c: 4 }, // Short and fat
  "chibi hage": { s: 1, c: 4 }, // Short and bald
  "debusu": { s: 1, c: 4 }, // Fat and ugly
  "busadebu": { s: 1, c: 4 }, // Ugly and fat
  "buta": { s: 1, c: 4 }, // Pig
  "hage debu": { s: 1, c: 4 }, // Bald and fat
  "zura": { s: 1, c: 4 }, // Wig (mocking)
  "katsura": { s: 1, c: 4 }, // Wig
  "busamen": { s: 1, c: 4 }, // Ugly face
  "shikome": { s: 1, c: 4 }, // Ugly woman (archaic)
  "minikui": { s: 1, c: 4 }, // Ugly
  "minikui onna": { s: 1, c: 4 }, // Ugly woman
  "minikui otoko": { s: 1, c: 4 }, // Ugly man

  // Additional sexual romaji
  "seiki": { s: 3, c: 4 }, // Genitalia
  "seikousha": { s: 3, c: 4 }, // Sexual relations
  "seiteki boukou": { s: 3, c: 4 }, // Sexual assault
  "seiteki gyakutai": { s: 3, c: 4 }, // Sexual abuse
  "waisetsu koui": { s: 3, c: 4 }, // Indecent act
  "hibwai": { s: 3, c: 4 }, // Obscene
  "kyousei waisetsu": { s: 3, c: 4 }, // Forced indecency
  "kyousei seikou": { s: 4, c: 4 }, // Forced intercourse
  "shuudan goukan": { s: 5, c: 5 }, // Group rape
  "goukan ma": { s: 5, c: 5 }, // Rapist
  "goukan han": { s: 5, c: 5 }, // Rape criminal
  "seieki mamire": { s: 3, c: 4 }, // Covered in semen
  "chinko manko": { s: 4, c: 4 }, // Dick pussy
  "manguri gaeshi": { s: 3, c: 4 }, // Legs-over-head
  "oshiri no ana": { s: 3, c: 4 }, // Butt hole
  "kiku ana": { s: 3, c: 4 }, // Chrysanthemum hole
  "kiku mon": { s: 3, c: 4 }, // Chrysanthemum gate
  "kuso ana": { s: 3, c: 5 }, // Shit hole
  "shiri ana": { s: 3, c: 4 }, // Ass hole
  "shojo soushitsu": { s: 3, c: 4 }, // Loss of virginity
  "doutei soushitsu": { s: 3, c: 4 }, // Loss of virginity (male)
  "hatsu taiken": { s: 3, c: 4 }, // First experience
  "fude oroshi": { s: 3, c: 4 }, // First sexual experience
  "shuuin": { s: 4, c: 4 }, // Masturbation (variant)
  "jitoku": { s: 3, c: 4 }, // Self-pollution
  "inkei sounyuu": { s: 3, c: 4 }, // Penile insertion
  "chitsu nai shasei": { s: 4, c: 4 }, // Vaginal ejaculation
  "chitsu gai shasei": { s: 3, c: 4 }, // External ejaculation
  "zengi": { s: 3, c: 4 }, // Foreplay
  "aibu": { s: 3, c: 4 }, // Caressing
  "seiteki kaikan": { s: 3, c: 4 }, // Sexual pleasure
  "zetchou": { s: 3, c: 4 }, // Climax
  "hakudaku eki": { s: 3, c: 4 }, // White turbid liquid
  "sakibashiri": { s: 3, c: 4 }, // Pre-cum
  "gaman jiru": { s: 3, c: 4 }, // Pre-cum (patience juice)
  "kari kubi": { s: 3, c: 4 }, // Glans
  "sao": { s: 3, c: 4 }, // Shaft
  "tama bukuro": { s: 3, c: 4 }, // Ball sack
  "kougan": { s: 4, c: 4 }, // Testicle
  "inkaku": { s: 3, c: 4 }, // Clitoris
  "inretsu": { s: 4, c: 4 }, // Vulvar cleft
  "shikyu": { s: 3, c: 4 }, // Pubic area
  "nyuurin": { s: 3, c: 4 }, // Areola
  "nyuubou": { s: 4, c: 4 }, // Breast

  // ===== ADDITIONAL ROMAJI VARIATIONS (ALTERNATE SPELLINGS) =====
  "baka yaro": { s: 3, c: 5 }, // Stupid bastard (spaced)
  "aho ndara": { s: 1, c: 5 }, // Idiot (Kansai spaced)
  "dosukebe": { s: 3, c: 4 }, // Super pervert
  "do sukebe": { s: 3, c: 5 }, // Super pervert (spaced)
  "ecchi na": { s: 3, c: 4 }, // Perverted (adjective)
  "ettchi": { s: 3, c: 4 }, // Perverted (alt spelling)
  "hentai yarou": { s: 3, c: 4 }, // Pervert bastard
  "kuso baba": { s: 3, c: 5 }, // Shit old woman (spaced)
  "kusojiji": { s: 3, c: 5 }, // Shit old man
  "kuso jiji": { s: 3, c: 5 }, // Shit old man (spaced)
  "kusoonna": { s: 3, c: 5 }, // Shit woman
  "kuso onna": { s: 3, c: 5 }, // Shit woman (spaced)
  "kusootoko": { s: 3, c: 5 }, // Shit man
  "kuso otoko": { s: 3, c: 5 }, // Shit man (spaced)
  "kusogaki": { s: 3, c: 5 }, // Shit brat
  "kuso mushi": { s: 3, c: 5 }, // Shit bug (spaced)
  "kusoame": { s: 3, c: 5 }, // Shit rain (damn rain)
  "kusomajime": { s: 3, c: 5 }, // Shit serious
  "kusowarota": { s: 3, c: 5 }, // Shit laughed (internet)
  "kusowaro": { s: 3, c: 5 }, // Shit laugh (internet)
  "kusowarosu": { s: 3, c: 5 }, // Shit laugh (2ch)
  "shinee": { s: 5, c: 5 }, // Die (elongated)
  "shiney": { s: 5, c: 5 }, // Die (English-ized)
  "shi ne yo": { s: 5, c: 5 }, // Die (spaced)
  "タヒれ": { s: 5, c: 5 }, // Die (katakana evasion variant)
  "たひね": { s: 5, c: 5 }, // Die (hiragana evasion)
  "逝ね": { s: 3, c: 3 }, // Pass away (euphemism for die)
  "逝け": { s: 5, c: 5 }, // Go away/die
  "koroshite yaru": { s: 3, c: 5 }, // I'll kill you (spaced)
  "bukkoroshiteyaru": { s: 5, c: 5 }, // I'll beat you to death
  "butt obasu": { s: 3, c: 5 }, // Punch away (spaced)
  "namen nayo": { s: 3, c: 5 }, // Don't mess with me (spaced)
  "fuzakenayo": { s: 3, c: 5 }, // Don't mess around (spaced)
  "fuzaken na yo": { s: 3, c: 4 }, // Don't mess around (alt)
  "namenjaneeyo": { s: 3, c: 4 }, // Don't lick me (vulgar)
  "nanjya kora": { s: 3, c: 4 }, // What the hell (dialectal)
  "nanda kora": { s: 3, c: 4 }, // What the hell is this
  "doke kora": { s: 3, c: 4 }, // Move it, bastard
  "dokikasare": { s: 3, c: 4 }, // Get out of the way (harsh)
  "urusai yo": { s: 3, c: 4 }, // Shut up (with emphasis)
  "uruseenda": { s: 3, c: 4 }, // Shut up (strong)
  "damare kono": { s: 3, c: 4 }, // Shut up, you...
  "damare yo": { s: 3, c: 4 }, // Shut up (with emphasis)
  "damari yagare": { s: 3, c: 4 }, // Shut the hell up
  "deteike": { s: 3, c: 4 }, // Get out (romaji)
  "deteke": { s: 3, c: 4 }, // Get out (casual)
  "detekeyo": { s: 3, c: 4 }, // Get out! (emphatic)
  "usero yo": { s: 3, c: 5 }, // Fuck off (emphatic)
  "kiero yo": { s: 3, c: 4 }, // Disappear (emphatic)
  "shine kasu": { s: 5, c: 5 }, // Die, scum
  "shine gomi": { s: 5, c: 5 }, // Die, trash
  "shine kuzu": { s: 5, c: 5 }, // Die, garbage
  "shine zako": { s: 1, c: 4 }, // Die, weakling

  // ===== MORE KANJI/KANA INSULTS =====
  "糞女": { s: 3, c: 5 }, // Shit woman
  "糞男": { s: 3, c: 5 }, // Shit man
  "糞親父": { s: 3, c: 5 }, // Shit old man
  "糞豚": { s: 3, c: 5 }, // Shit pig
  "糞犬": { s: 3, c: 5 }, // Shit dog
  "糞猫": { s: 3, c: 5 }, // Shit cat
  "糞鬼": { s: 3, c: 5 }, // Shit demon
  "糞ゲー": { s: 3, c: 5 }, // Shit game
  "くそげー": { s: 3, c: 5 }, // Shit game (hiragana)
  "クソ運営": { s: 3, c: 5 }, // Shit management (katakana)
  "糞仕様": { s: 3, c: 5 }, // Shit specification
  "クソ仕様": { s: 3, c: 5 }, // Shit specification
  "クソスレ": { s: 3, c: 5 }, // Shit thread (katakana)
  "糞レス": { s: 3, c: 5 }, // Shit response
  "馬鹿垂れ": { s: 1, c: 4 }, // Stupid person (kanji)
  "大馬鹿者": { s: 1, c: 4 }, // Great idiot
  "大馬鹿野郎": { s: 3, c: 4 }, // Great idiot bastard
  "超馬鹿": { s: 1, c: 4 }, // Super idiot
  "ド馬鹿": { s: 1, c: 4 }, // Extreme idiot
  "ド阿呆": { s: 1, c: 4 }, // Extreme idiot (Kansai)
  "阿呆丸出し": { s: 1, c: 4 }, // Full-on idiot (Kansai)
  "間抜け面": { s: 1, c: 4 }, // Idiot face
  "能無し": { s: 1, c: 4 }, // Incompetent
  "脳なし": { s: 1, c: 4 }, // Brainless
  "脳みそ無し": { s: 1, c: 4 }, // No brain matter
  "低脳": { s: 1, c: 4 }, // Low brain
  "ちしょう": { s: 1, c: 4 }, // Retard (hiragana)
  "チショウ": { s: 1, c: 4 }, // Retard (katakana)
  "害児": { s: 1, c: 4 }, // Harm child (derogatory)
  "基地害": { s: 1, c: 4 }, // Crazy (variant)
  "きち": { s: 1, c: 4 }, // Crazy (abbreviated hiragana)
  "キティ": { s: 1, c: 4 }, // Crazy (kitty = kichi + suffix)
  "キチママ": { s: 1, c: 4 }, // Crazy mom (internet)
  "下衆め": { s: 1, c: 4 }, // Scum! (exclamation)
  "下衆い": { s: 1, c: 4 }, // Scummy (adjective)
  "ゲスい": { s: 1, c: 4 }, // Scummy (katakana)
  "げすい": { s: 1, c: 4 }, // Scummy (hiragana)
  "卑しい": { s: 1, c: 4 }, // Despicable
  "粘着質": { s: 1, c: 4 }, // Stalker type
  "自演": { s: 1, c: 4 }, // Self-posting (2ch)
  "ちょん": { s: 1, c: 4 }, // Derogatory for Korean (hiragana)
  "ちゃんころ": { s: 1, c: 4 }, // Derogatory for Chinese (hiragana)
  "シナ人": { s: 1, c: 4 }, // Derogatory for Chinese
  "シナ": { s: 1, c: 4 }, // Derogatory for China
  "蛮人": { s: 1, c: 4 }, // Barbarian
  "コジキ": { s: 1, c: 4 }, // Beggar (katakana)
  "クズ人間": { s: 1, c: 4 }, // Garbage human
  "くず人間": { s: 1, c: 4 }, // Garbage human (hiragana)
  "ゴミ人間": { s: 1, c: 4 }, // Trash human
  "ごみ人間": { s: 1, c: 4 }, // Trash human (hiragana)
  "ゴミカス": { s: 1, c: 4 }, // Trash scum
  "ごみかす": { s: 1, c: 4 }, // Trash scum (hiragana)
  "ごみくず": { s: 1, c: 4 }, // Trash garbage (hiragana)
  "カスゴミ": { s: 1, c: 4 }, // Scum trash
  "クズゴミ": { s: 1, c: 4 }, // Garbage trash
  "ゴミ虫": { s: 1, c: 4 }, // Trash bug
  "人間のゴミ": { s: 1, c: 4 }, // Human trash
  "人間の屑": { s: 1, c: 4 }, // Human scum (kanji)
  "社会のクズ": { s: 1, c: 4 }, // Society's garbage
  "社会の底辺": { s: 1, c: 4 }, // Bottom of society
  "底辺人間": { s: 1, c: 4 }, // Bottom-tier human
  "底辺層": { s: 1, c: 4 }, // Bottom stratum
  "敗北者": { s: 1, c: 4 }, // Defeated person
  "落伍者": { s: 1, c: 4 }, // Dropout/failure
  "やくたたず": { s: 1, c: 4 }, // Useless person (hiragana)
  "無能者": { s: 1, c: 4 }, // Incompetent person
  "無能め": { s: 1, c: 4 }, // Incompetent! (exclamation)
  "ポンコツ": { s: 1, c: 4 }, // Broken-down/useless
  "ボンクラ": { s: 1, c: 4 }, // Blockhead
  "ぼんくら": { s: 1, c: 4 }, // Blockhead (hiragana)
  "トンマ": { s: 1, c: 4 }, // Dunce
  "ドジ": { s: 1, c: 4 }, // Klutz
  "どじ": { s: 1, c: 4 }, // Klutz (hiragana)
  "マヌケ": { s: 1, c: 4 }, // Fool (katakana)
  "たこ": { s: 1, c: 4 }, // Octopus/idiot (hiragana)
  "はげ": { s: 1, c: 4 }, // Baldy (hiragana)
  "禿": { s: 1, c: 4 }, // Baldy (kanji)
  "禿頭": { s: 1, c: 4 }, // Bald head
  "ハゲ頭": { s: 1, c: 4 }, // Bald head
  "でぶ": { s: 1, c: 4 }, // Fatso (hiragana)
  "ぶた": { s: 1, c: 4 }, // Pig (hiragana)
  "クソブタ": { s: 3, c: 5 }, // Shit pig
  "ちび": { s: 1, c: 4 }, // Shorty (hiragana)
  "ぶす": { s: 1, c: 4 }, // Ugly woman (hiragana)
  "ドブス": { s: 1, c: 4 }, // Extreme ugly
  "どぶす": { s: 1, c: 4 }, // Extreme ugly (hiragana)
  "クソブサイク": { s: 1, c: 4 }, // Shit ugly
  "ドブサイク": { s: 1, c: 4 }, // Extreme ugly
  "きもおた": { s: 1, c: 4 }, // Gross otaku (hiragana)
  "キモい": { s: 1, c: 4 }, // Gross
  "キッモ": { s: 1, c: 4 }, // Gross (elongated)
  "きっも": { s: 1, c: 4 }, // Gross (elongated hiragana)
  "グロい": { s: 1, c: 4 }, // Grotesque
  "ぐろい": { s: 1, c: 4 }, // Grotesque (hiragana)
  "ウザイ": { s: 1, c: 4 }, // Annoying (katakana)
  "ウゼー": { s: 1, c: 4 }, // Annoying (elongated)
  "うぜー": { s: 1, c: 4 }, // Annoying (elongated hiragana)
  "ウゼェ": { s: 1, c: 4 }, // Annoying (variant)
  "うぜぇ": { s: 1, c: 4 }, // Annoying (variant hiragana)
  "ムカつく": { s: 1, c: 4 }, // Irritating
  "むかつく": { s: 1, c: 4 }, // Irritating (hiragana)
  "イラつく": { s: 1, c: 4 }, // Irritating
  "いらつく": { s: 1, c: 4 }, // Irritating (hiragana)

  // ===== MORE 2CH/5CH/NICO INTERNET SLANG =====
  "ワロス": { s: 2, c: 3 }, // LOL (2ch)
  "テラワロス": { s: 2, c: 3 }, // Tera-LOL (extreme laughing)
  "ギガワロス": { s: 2, c: 3 }, // Giga-LOL
  "メガワロス": { s: 2, c: 3 }, // Mega-LOL
  "ワロタwww": { s: 2, c: 3 }, // Laughed www
  "wwww": { s: 2, c: 3 }, // Japanese LOL
  "藁": { s: 2, c: 3 }, // LOL (kanji for straw/warota)
  "ｷﾀ━━━(ﾟ∀ﾟ)━━━!!": { s: 2, c: 5 }, // It's here!! (excitement/mockery)
  "ﾜﾛﾀ": { s: 2, c: 3 }, // Laughed (half-width)
  "ﾜﾛｽ": { s: 2, c: 3 }, // LOL (half-width)
  "ｸｿﾜﾛﾀ": { s: 3, c: 5 }, // Shit laughed (half-width)
  "ぷぎゃー": { s: 2, c: 3 }, // Pointing and laughing (sound)
  "( ´,_ゝ`)プッ": { s: 2, c: 3 }, // Scoffing
  "必死すぎ": { s: 2, c: 3 }, // Too desperate
  "ファビョーン": { s: 2, c: 3 }, // Raging (derogatory)
  "涙拭けよ": { s: 2, c: 3 }, // Wipe your tears
  "ブーメラン": { s: 2, c: 3 }, // Boomerang (hypocrisy)
  "おまいう": { s: 2, c: 3 }, // You're one to talk (おまえが言うな)
  "おまえがいうな": { s: 2, c: 3 }, // You're one to talk
  "目くそ鼻くそ": { s: 2, c: 3 }, // Pot calling kettle black
  "どの口が言う": { s: 2, c: 3 }, // With what mouth do you say that
  "何様": { s: 2, c: 3 }, // Who do you think you are
  "何様のつもり": { s: 2, c: 3 }, // Who do you think you are
  "お前何様": { s: 2, c: 3 }, // Who do you think you are
  "調子乗んな": { s: 4, c: 3 }, // Don't get cocky
  "調子に乗るな": { s: 4, c: 3 }, // Don't get cocky (formal)
  "図に乗るな": { s: 2, c: 3 }, // Don't get full of yourself
  "いい気になるな": { s: 2, c: 3 }, // Don't be smug
  "思い上がるな": { s: 2, c: 3 }, // Don't be arrogant
  "つけあがるな": { s: 2, c: 3 }, // Don't get uppity
  "ナメんな": { s: 2, c: 3 }, // Don't underestimate (katakana)
  "ナメてんの": { s: 2, c: 3 }, // Are you looking down on me?
  "ナメとんか": { s: 2, c: 3 }, // Are you looking down? (Kansai)
  "舐めとんか": { s: 2, c: 3 }, // Are you looking down? (Kansai kanji)
  "舐めとんのか": { s: 2, c: 3 }, // Are you looking down? (Kansai)

  // ===== ADDITIONAL KANSAI/OSAKA DIALECT =====
  "しばくぞコラ": { s: 3, c: 4 }, // I'll beat you, hey
  "いわしたろか": { s: 3, c: 4 }, // Shall I wreck you?
  "やったろか": { s: 3, c: 4 }, // Shall I do you?
  "ぶちかましたる": { s: 3, c: 4 }, // I'll smash you (Kansai)
  "何さらしとんじゃ": { s: 3, c: 4 }, // What are you doing (angry)
  "何しとんねん": { s: 3, c: 4 }, // What are you doing
  "何ぬかしとんじゃ": { s: 3, c: 4 }, // What are you saying (angry)
  "ぬかすな": { s: 3, c: 4 }, // Don't say that (harsh)
  "ぬかせ": { s: 3, c: 4 }, // Say it (challenge)
  "ほざけ": { s: 3, c: 4 }, // Babble on (sarcastic)
  "こら待たんかい": { s: 5, c: 5 }, // Hey wait (threatening)
  "じゃかましい": { s: 3, c: 4 }, // Noisy/shut up (Kansai)
  "やかましいわ": { s: 3, c: 4 }, // Shut up (Kansai)
  "うっとうしい": { s: 3, c: 4 }, // Annoying (Kansai emphasis)
  "しょーもな": { s: 3, c: 4 }, // Worthless (Kansai casual)
  "あかんたれ": { s: 3, c: 4 }, // Good-for-nothing (Kansai)
  "へたれ": { s: 1, c: 4 }, // Coward/wimp
  "ヘタレ": { s: 1, c: 4 }, // Coward/wimp (katakana)
  "玉無し": { s: 4, c: 4 }, // No balls
  "タマなし": { s: 4, c: 4 }, // No balls (katakana)
  "チキン": { s: 1, c: 4 }, // Chicken (coward)
  "ビビり": { s: 3, c: 4 }, // Scaredy-cat
  "びびり": { s: 3, c: 4 }, // Scaredy-cat (hiragana)
  "ションベン垂れ": { s: 1, c: 4 }, // Piss-dripping (coward)

  // ===== ADDITIONAL KYUSHU DIALECT =====
  "くらすぞ": { s: 3, c: 4 }, // I'll hit you (Hakata)
  "くらわすぞ": { s: 3, c: 4 }, // I'll hit you (variant)
  "せからしか": { s: 3, c: 4 }, // Annoying (Kumamoto)
  "なんしようと": { s: 3, c: 4 }, // What are you doing (Hakata aggressive)
  "なめとっちゃ": { s: 3, c: 4 }, // Are you looking down (Kyushu)
  "なめよっちゃ": { s: 3, c: 4 }, // Looking down on me (Kyushu)
  "ぬしゃ": { s: 3, c: 4 }, // You (Kagoshima aggressive)
  "わいや": { s: 3, c: 4 }, // You (Kagoshima aggressive)

  // ===== ADDITIONAL TOHOKU DIALECT =====
  "どんだば": { s: 3, c: 4 }, // What is it (Tohoku aggressive)
  "なんだべ": { s: 3, c: 4 }, // What is it (Tohoku aggressive)
  "この野郎だべ": { s: 3, c: 4 }, // This bastard (Tohoku)
  "ばがやろう": { s: 3, c: 4 }, // Stupid bastard (Tohoku pronunciation)
  "ばがだ": { s: 1, c: 4 }, // Stupid (Tohoku)
  "ばがでねえが": { s: 1, c: 4 }, // Isn't it stupid (Tohoku)
  "ふざけんでねえ": { s: 3, c: 4 }, // Don't mess around (Tohoku)
  "うるさいべ": { s: 3, c: 4 }, // Shut up (Tohoku)
  "けやぐ": { s: 3, c: 4 }, // Annoying person (Aomori)

  // ===== ADDITIONAL OKINAWAN =====
  "ふりむん": { s: 1, c: 4 }, // Idiot (Okinawan)
  "ゆくさー": { s: 3, c: 4 }, // Liar (Okinawan)
  "わじわじーする": { s: 3, c: 4 }, // Getting angry (Okinawan)
  "ちゅらかーぎー": { s: 1, c: 4 }, // Ugly face (ironic, Okinawan)
  "やなかーぎー": { s: 1, c: 4 }, // Ugly face (Okinawan)
  "やなわらばー": { s: 3, c: 4 }, // Bad child (Okinawan)
  "がちまやー": { s: 3, c: 4 }, // Glutton (Okinawan)
  "いったーよ": { s: 3, c: 4 }, // You bastard (Okinawan)
  "ひんすー": { s: 3, c: 4 }, // Poor person (Okinawan derogatory)
  "あきさみよー": { s: 3, c: 4 }, // Oh my god (Okinawan exclamation)
  "くすけー": { s: 3, c: 5 }, // Shit (Okinawan)

  // ===== ADDITIONAL HOKKAIDO DIALECT =====
  "たくらんけ": { s: 1, c: 4 }, // Idiot (Hokkaido)
  "けっぱれ": { s: 3, c: 4 }, // Try harder (Hokkaido, dismissive)

  // ===== NAGOYA/CHUBU DIALECT =====
  "たーけ": { s: 1, c: 3 }, // Fool (Nagoya casual)
  "だぎゃー": { s: 3, c: 4 }, // Exclamation (Nagoya, vulgar)
  "どたわけ": { s: 1, c: 4 }, // Big fool (Nagoya)
  "いかんわ": { s: 3, c: 4 }, // No good (Nagoya disapproval)

  // ===== MORE SEXUAL/EXPLICIT TERMS =====
  "淫婦": { s: 5, c: 4 }, // Whore
  "援助交際": { s: 3, c: 4 }, // Compensated dating (full)
  "パパ活": { s: 3, c: 4 }, // Sugar daddy dating
  "ママ活": { s: 3, c: 4 }, // Sugar mommy dating
  "せふれ": { s: 3, c: 4 }, // Sex friend (hiragana)
  "びっち": { s: 3, c: 4 }, // Bitch (hiragana)
  "スケベ": { s: 3, c: 4 }, // Pervert
  "助兵衛": { s: 3, c: 4 }, // Pervert (kanji)
  "助平": { s: 3, c: 4 }, // Pervert (kanji variant)
  "好色": { s: 3, c: 4 }, // Lustful
  "色魔": { s: 4, c: 4 }, // Sex demon
  "色狂い": { s: 3, c: 4 }, // Sex-crazy
  "色キチ": { s: 3, c: 4 }, // Sex-crazy (abbrev)
  "発情": { s: 3, c: 4 }, // In heat
  "発情期": { s: 3, c: 4 }, // Mating season (derogatory for humans)
  "盛り": { s: 3, c: 4 }, // In heat (animal term for humans)
  "サカり": { s: 3, c: 4 }, // In heat (katakana)
  "さかり": { s: 3, c: 4 }, // In heat (hiragana)
  "レイパー": { s: 5, c: 5 }, // Rapist (English loanword)
  "レイプ犯": { s: 5, c: 5 }, // Rape criminal
  "レイプ魔": { s: 5, c: 5 }, // Rape demon
  "ちかん": { s: 3, c: 4 }, // Groper (hiragana)
  "変態女": { s: 3, c: 4 }, // Pervert woman
  "変態男": { s: 3, c: 4 }, // Pervert man
  "ろりこん": { s: 3, c: 4 }, // Lolicon (hiragana)
  "しょたこん": { s: 3, c: 4 }, // Shotacon (hiragana)
  "マザコン": { s: 3, c: 4 }, // Mother complex
  "シスコン": { s: 3, c: 4 }, // Sister complex
  "ブラコン": { s: 3, c: 4 }, // Brother complex
  "ファザコン": { s: 1, c: 4 }, // Father complex
  "童貞厨": { s: 3, c: 4 }, // Male-virgin-obsessed (internet)
  "非モテ": { s: 3, c: 4 }, // Unpopular (romantically)
  "モテない": { s: 3, c: 4 }, // Not popular (romantically)
  "まんさん": { s: 3, c: 4 }, // Women (derogatory, from manko)
  "ま～ん(笑)": { s: 3, c: 4 }, // Women LOL (derogatory)
  "ち〜ん": { s: 3, c: 4 }, // Men (derogatory retort)
  "ちーん(笑)": { s: 3, c: 4 }, // Men LOL (derogatory)
  "おばはん": { s: 3, c: 4 }, // Old woman (Kansai derogatory)
  "老いぼれ": { s: 3, c: 4 }, // Senile old person

  // ===== THREAT/VIOLENCE EXPRESSIONS =====
  "殴り殺す": { s: 5, c: 5 }, // Beat to death
  "叩き殺す": { s: 5, c: 5 }, // Strike to death
  "撲殺": { s: 5, c: 5 }, // Beat to death
  "刺殺": { s: 5, c: 5 }, // Stabbing death
  "射殺": { s: 5, c: 5 }, // Shooting death
  "焼殺": { s: 5, c: 5 }, // Burning death
  "絞殺": { s: 5, c: 5 }, // Strangulation
  "毒殺": { s: 5, c: 5 }, // Poisoning death
  "斬殺": { s: 5, c: 5 }, // Slashing death
  "殺したる": { s: 5, c: 5 }, // I'll kill you (Kansai)
  "ぶっ殺してやる": { s: 5, c: 5 }, // I'll fucking kill you
  "ぶっ殺したる": { s: 5, c: 5 }, // I'll fucking kill you (Kansai)
  "首を絞める": { s: 5, c: 5 }, // Strangle your neck
  "首吊れ": { s: 5, c: 5 }, // Hang yourself
  "死んでくれ": { s: 5, c: 5 }, // Please die
  "死んだ方がいい": { s: 5, c: 5 }, // Better off dead
  "生きる価値なし": { s: 5, c: 5 }, // No value in living
  "この世から消えろ": { s: 5, c: 5 }, // Disappear from this world
  "地獄行き": { s: 5, c: 5 }, // Bound for hell
  "呪ってやる": { s: 5, c: 5 }, // I'll curse you
  "呪い殺す": { s: 5, c: 5 }, // Curse to death
  "祟ってやる": { s: 5, c: 5 }, // I'll haunt you
  "ぶっ潰す": { s: 5, c: 5 }, // Fucking crush
  "叩き潰す": { s: 5, c: 5 }, // Smash to pieces
  "ぼこる": { s: 5, c: 5 }, // Beat up (hiragana)
  "リンチ": { s: 5, c: 5 }, // Lynch
  "袋叩き": { s: 5, c: 5 }, // Gang beating

  // ===== MORE ROMAJI COMPOUND INSULTS =====
  "kichigai yarou": { s: 3, c: 4 }, // Crazy bastard
  "teme": { s: 1, c: 4 }, // You (extremely rude, short)
  "konoyarou": { s: 3, c: 4 }, // You bastard
  "kono yarou": { s: 3, c: 5 }, // You bastard (spaced)
  "kono kuso yarou": { s: 3, c: 4 }, // You shit bastard
  "kono baka yarou": { s: 3, c: 4 }, // You stupid bastard
  "kono ama": { s: 1, c: 4 }, // You bitch
  "kono gaki": { s: 1, c: 4 }, // You brat
  "kono chikushou": { s: 1, c: 4 }, // You beast
  "bakamono": { s: 1, c: 4 }, // Fool
  "usuratonkachi": { s: 1, c: 4 }, // Dimwit
  "rokudemonai": { s: 1, c: 4 }, // Good-for-nothing
  "rokudemonashi": { s: 1, c: 4 }, // Good-for-nothing (noun)
  "betabeta suruna": { s: 1, c: 4 }, // Don't be clingy
  "kutabare kuzu": { s: 1, c: 4 }, // Drop dead scum
  "kutabare kasu": { s: 1, c: 4 }, // Drop dead scum
  "kuso kurae": { s: 3, c: 5 }, // Eat shit
  "chikushou me": { s: 1, c: 4 }, // You beast
  "urusee baka": { s: 1, c: 4 }, // Shut up stupid
  "damatte ro": { s: 1, c: 4 }, // Shut up and stay
  "me no mae kara kieyagare": { s: 1, c: 4 }, // Disappear from my sight
  "zako ga": { s: 1, c: 4 }, // Weakling!
  "gomi ga": { s: 1, c: 4 }, // Trash!
  "kasu ga": { s: 1, c: 4 }, // Scum!
  "kuzu ga": { s: 1, c: 4 }, // Garbage!
  "uzee nda yo": { s: 1, c: 4 }, // You're annoying
  "kimoi nda yo": { s: 1, c: 4 }, // You're gross
  "kusai nda yo": { s: 1, c: 4 }, // You stink
  "shine yo gomi": { s: 5, c: 5 }, // Die, trash
  "iku": { s: 1, c: 4 }, // Coming (sexual)
  "ikisou": { s: 1, c: 4 }, // About to come (sexual)
  "ikasete": { s: 1, c: 4 }, // Make me come (sexual)
  "iku iku": { s: 1, c: 4 }, // Coming coming (sexual)

  // ===== GAMING/ONLINE INSULTS =====
  "ざこ": { s: 1, c: 4 }, // Weakling (hiragana)
  "雑魚専": { s: 1, c: 4 }, // Only fights weaklings
  "雑魚狩り": { s: 1, c: 4 }, // Hunting weaklings
  "ザッコ": { s: 1, c: 4 }, // Weakling (elongated)
  "ニワカ": { s: 1, c: 4 }, // Newbie/poser
  "えあぷ": { s: 1, c: 4 }, // Armchair player (hiragana)
  "チーミング": { s: 1, c: 4 }, // Teaming (cheating)
  "芋虫": { s: 1, c: 4 }, // Caterpillar (camper insult)
  "お荷物プレイ": { s: 1, c: 4 }, // Dead weight play
  "寄生": { s: 1, c: 4 }, // Parasite (carried player)
  "寄生虫": { s: 1, c: 4 }, // Parasite
  "鴨": { s: 1, c: 4 }, // Duck (easy target)
  "かも": { s: 1, c: 4 }, // Duck/easy target (hiragana)
  "晒しスレ": { s: 1, c: 4 }, // Shaming thread
  "通報": { s: 5, c: 5 }, // Report (threatening)
  "通報した": { s: 1, c: 4 }, // Reported you
  "垢BAN": { s: 1, c: 4 }, // Account ban
  "クソエイム": { s: 3, c: 5 }, // Shit aim
  "アンインストールしろ": { s: 1, c: 4 }, // Uninstall
  "回線切れ": { s: 1, c: 4 }, // Disconnect (insulting)
  "回線細い": { s: 1, c: 4 }, // Thin connection (insult)
  "ラグい": { s: 1, c: 4 }, // Laggy
  "ラグ死": { s: 5, c: 5 }, // Lag death
  "糞マップ": { s: 3, c: 5 }, // Shit map
  "糞バランス": { s: 3, c: 5 }, // Shit balance
  "糞アプデ": { s: 3, c: 5 }, // Shit update
  "クソゲーすぎ": { s: 3, c: 5 }, // Too much of a shit game
  "ゲームやめろ": { s: 1, c: 4 }, // Quit the game
  "二度と来るな": { s: 1, c: 4 }, // Never come back
  "消えろカス": { s: 1, c: 4 }, // Disappear scum
  "足引っ張んな": { s: 1, c: 4 }, // Don't drag us down

  // ===== ADDITIONAL COMPOUND EXPRESSIONS =====
  "生きてる価値がない": { s: 3, c: 5 }, // No value in being alive
  "生まれてくるな": { s: 3, c: 5 }, // Should not have been born
  "常識がない": { s: 3, c: 5 }, // No common sense
  "教養がない": { s: 3, c: 5 }, // No education/culture
  "品がない": { s: 3, c: 5 }, // No class
  "人としてどうなの": { s: 3, c: 5 }, // What kind of person are you
  "人として終わってる": { s: 3, c: 5 }, // You're finished as a person
  "おわコン": { s: 3, c: 5 }, // Over content (variant)
  "オワタ": { s: 3, c: 5 }, // It's over
  "人生終了": { s: 3, c: 5 }, // Life over
  "詰んだ": { s: 3, c: 5 }, // Checkmate (you're done)
  "詰んでる": { s: 3, c: 5 }, // Checkmated (hopeless)
  "ザマア": { s: 3, c: 5 }, // Serves you right (katakana)
  "ざまぁ": { s: 3, c: 5 }, // Serves you right (variant)
  "いい気味": { s: 3, c: 5 }, // Serves you right (lit: good feeling)
  "ざまーみろ": { s: 3, c: 5 }, // Serves you right (elongated)
  "メシウマ": { s: 3, c: 5 }, // Meal tastes good (schadenfreude, internet)
  "めしうま": { s: 3, c: 5 }, // Meal tastes good (hiragana)
  "飯ウマ": { s: 3, c: 5 }, // Meal delicious (schadenfreude)
  "他人の不幸で飯がうまい": { s: 3, c: 5 }, // Others' misfortune makes my meal taste good
  "にーと": { s: 3, c: 5 }, // NEET (hiragana)
  "ひきこもり": { s: 3, c: 5 }, // Hikikomori (hiragana)
  "なまぽ": { s: 3, c: 5 }, // Welfare (hiragana)
  "すねかじり": { s: 3, c: 5 }, // Parent-moocher
  "ぱらさいと": { s: 3, c: 5 }, // Parasite (hiragana)
  "寄生虫め": { s: 3, c: 5 }, // Parasite!
  "タダ飯食い": { s: 3, c: 5 }, // Free-meal eater
};

export default japaneseBadWords;

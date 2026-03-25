/**
 * Korean profanity words list
 * Contains common profanities, insults, and offensive terms.
 * ⚠️ Warning: This file contains explicit language in Korean
 */
const _d: Record<string, [number, number]> = {
  // Core Korean profanity
  "씨발": [3, 5], // Fuck
  "시발": [3, 5], // Fuck (variant spelling)
  "씹": [3, 4], // Vulgar term for female genitalia
  "좆": [4, 4], // Dick
  "보지": [4, 4], // Pussy
  "자지": [4, 4], // Penis
  "개새끼": [3, 4], // Son of a bitch
  "개년": [3, 4], // Bitch (lit. dog-woman)
  "병신": [3, 4], // Retard/cripple
  "지랄": [3, 5], // Acting crazy / bullshit
  "미친놈": [3, 4], // Crazy bastard
  "미친년": [3, 4], // Crazy bitch
  "년": [3, 4], // Bitch / derogatory term for woman
  "놈": [3, 4], // Bastard / derogatory term for man
  "새끼": [3, 4], // Bastard (lit. offspring)
  "쌍놈": [3, 4], // Low-class bastard
  "쌍년": [3, 4], // Low-class bitch
  "창녀": [5, 4], // Whore
  "걸레": [3, 4], // Slut (lit. mop/rag)
  "매춘부": [5, 4], // Prostitute
  "또라이": [3, 4], // Lunatic / nutjob
  "찐따": [1, 4], // Loser / nerd
  "닥쳐": [2, 4], // Shut up
  "꺼져": [3, 5], // Get lost / fuck off
  "엿먹어": [3, 5], // Go fuck yourself (lit. eat taffy)
  "똥": [1, 4], // Shit
  "좆같다": [4, 5], // Dick-like (shitty)
  "존나": [3, 5], // Fucking / very (intensifier)
  "느금마": [3, 4], // Your mom (derogatory slang)
  "호로새끼": [1, 4], // Bastard (fatherless insult)
  "니미": [3, 4], // Your mother (vulgar abbreviation)

  // Abbreviations
  "ㅅㅂ": [3, 5], // Abbreviation: 씨발 (fuck)
  "ㅂㅅ": [3, 4], // Abbreviation: 병신 (retard)
  "ㅆㅂ": [3, 5], // Abbreviation: 씨발 (fuck, emphatic)
  "ㅄ": [3, 4], // Abbreviation: 병신 (retard, combined)

  // Loanword profanity
  "갱뱅": [3, 4], // Gang bang
  "오르가즘": [2, 3], // Orgasm
  "페니스": [4, 4], // Penis
  "쉬메일": [3, 4], // Shemale

  // Additional Korean profanity
  "개같은": [3, 4], // Dog-like
  "개자식": [3, 4], // Dog's offspring
  "개쓰레기": [3, 4], // Dog trash
  "개돼지": [5, 5], // Dog-pig (dehumanizing)
  "개씹": [3, 4], // Dog + vulgar
  "걸레년": [3, 4], // Slut bitch
  "꼴통": [1, 4], // Blockhead
  "나쁜년": [3, 4], // Bad bitch
  "뒈져라": [3, 4], // Drop dead
  "뒤질래": [5, 5], // Wanna die?
  "미친": [3, 4], // Crazy (prefix)
  "미친새끼": [3, 4], // Crazy bastard
  "발놈": [1, 4], // Stupid guy
  "벌레": [5, 5], // Bug (dehumanizing)
  "빡대가리": [1, 4], // Stupid head
  "빡쳤어": [2, 4], // Pissed off
  "쌍놈의새끼": [3, 4], // Double bastard's offspring
  "쓰레기": [1, 2], // Trash
  "씹새끼": [3, 4], // Vulgar bastard
  "씹년": [3, 4], // Vulgar bitch
  "씹할": [3, 4], // Vulgar (prefix)
  "애미": [3, 4], // Your mother (derogatory)
  "애비": [1, 4], // Your father (derogatory)
  "엠창": [3, 4], // Abbreviation: mother + window (insult)
  "옘병": [3, 4], // Plague (exclamation)
  "육변기": [3, 4], // Meat toilet (extremely vulgar)
  "잡놈": [3, 4], // Lowlife
  "지랄하네": [3, 4], // Acting crazy
  "찐따새끼": [1, 4], // Loser bastard
  "호구": [1, 3], // Sucker/pushover
  "화냥년": [3, 4], // Slut (archaic but still used)
  "ㅈㄹ": [3, 4], // Abbreviation: 지랄
  "ㅈㄴ": [3, 4], // Abbreviation: 존나
  "ㅅㅂㄹㅁ": [3, 4], // Abbreviation compound
  "ㅁㅊ": [3, 4], // Abbreviation: 미친
  "니미럴": [3, 4], // Your mother (vulgar variant)
  "니애미": [3, 4], // Your mother
  "좆까": [4, 5], // Fuck off (dick + imperative)
  "뻑큐": [3, 5], // Fuck you (Konglish)

  // 씨발 variations
  "씨팔": [3, 4], // Censored variant of 씨발
  "씨부랄": [3, 4], // Vulgar variant
  "씨발놈": [3, 4], // Fucking bastard
  "씨발년": [3, 5], // Fucking bitch
  "시팔": [3, 4], // Censored variant
  "씨부렁": [3, 4], // Vulgar variant
  "씨바": [3, 4], // Truncated variant
  "씨빨": [3, 5], // Misspelling variant
  "쉬발": [3, 5], // Phonetic variant
  "쉬벌": [3, 5], // Phonetic variant
  "씨볼": [3, 4], // Variant
  "씹발": [3, 4], // Vulgar compound
  "ㅆㅂ놈": [3, 4], // Abbreviated + noun
  "ㅆㅂ년": [3, 4], // Abbreviated + noun
  "시발놈": [3, 4], // Variant + bastard
  "시발년": [3, 4], // Variant + bitch
  "씨발새끼": [3, 4], // Fucking bastard
  "미친씨발": [3, 5], // Crazy fuck

  // 개 compounds
  "개같은년": [3, 5], // Dog-like bitch
  "개같은놈": [3, 4], // Dog-like bastard
  "개망나니": [3, 5], // Dog delinquent
  "개소리": [3, 5], // Dog sound (bullshit)
  "개지랄": [3, 5], // Dog tantrum
  "개판": [3, 5], // Dog mess (shitshow)
  "개씹새끼": [3, 4], // Dog-vulgar bastard
  "개미친": [3, 5], // Dog-crazy
  "개나리": [3, 5], // Derogatory (sounds like 개 + forsythia)
  "개년아": [3, 5], // Dog-bitch (vocative)
  "개놈아": [3, 4], // Dog-bastard (vocative)
  "개좆": [4, 5], // Dog dick
  "개보지": [4, 5], // Dog pussy
  "개자지": [4, 5], // Dog penis
  "개뼈다귀": [3, 5], // Dog bone (worthless)
  "개수작": [3, 5], // Dog trick (bullshit behavior)
  "개거품": [3, 5], // Dog foam (nonsense)
  "개찐따": [1, 4], // Dog loser
  "개병신": [3, 5], // Dog retard
  "개또라이": [3, 5], // Dog lunatic
  "개좆같은": [4, 5], // Dog-dick-like

  // 좆 compounds
  "좆만한": [4, 5], // Dick-sized (small/worthless)
  "좆밥": [1, 4], // Dick rice (loser)
  "좆같은": [4, 5], // Dick-like
  "좆같은새끼": [3, 4], // Dick-like bastard
  "좆나": [4, 5], // Dick + intensifier
  "좆대가리": [4, 5], // Dick head
  "좆물": [4, 5], // Dick juice
  "좆까라": [3, 5], // Fuck off (imperative)

  // Sexual terms
  "섹스": [4, 4], // Sex
  "자위": [4, 4], // Masturbation
  "강간": [5, 5], // Rape
  "성폭행": [4, 4], // Sexual assault
  "매춘": [5, 4], // Prostitution
  "음경": [4, 4], // Penis (medical)
  "질": [4, 4], // Vagina (medical)
  "클리토리스": [4, 4], // Clitoris
  "항문성교": [4, 4], // Anal sex
  "구강성교": [4, 5], // Oral sex
  "성기": [4, 4], // Genitals
  "성교": [4, 4], // Sexual intercourse
  "음핵": [4, 4], // Clitoris (medical)
  "포경": [4, 4], // Phimosis (insult)
  "고환": [4, 4], // Testicle
  "정액": [4, 4], // Semen
  "사정": [4, 4], // Ejaculation
  "조루": [4, 4], // Premature ejaculation (insult)
  "발기": [4, 4], // Erection
  "발기부전": [4, 4], // Erectile dysfunction (insult)
  "딸딸이": [4, 4], // Masturbation (slang)
  "야동": [4, 4], // Porn video
  "성인물": [4, 4], // Adult content
  "포르노": [4, 4], // Porno
  "윤간": [5, 5], // Gang rape
  "근친상간": [5, 5], // Incest
  "수간": [5, 5], // Bestiality
  "페도필리아": [5, 5], // Pedophilia
  "유두": [4, 4], // Nipple
  "젖꼭지": [4, 4], // Nipple
  "음모": [4, 4], // Pubic hair
  "스와핑": [4, 4], // Swapping (partner)
  "원조교제": [4, 4], // Compensated dating
  "성매매": [4, 4], // Sex trade
  "조건만남": [5, 4], // Conditional meeting (prostitution)
  "몰카": [4, 4], // Hidden camera (voyeurism)
  "도촬": [4, 4], // Voyeurism
  "노출증": [4, 4], // Exhibitionism
  "페티시": [4, 4], // Fetish
  "불륜": [2, 3], // Adultery
  "간통": [2, 3], // Adultery (legal)
  "박다": [4, 5], // To fuck (vulgar)
  "따먹다": [4, 5], // To fuck (vulgar)
  "씹하다": [4, 5], // To fuck

  // Slurs
  "쪽바리": [5, 4], // Slur for Japanese
  "짱깨": [5, 4], // Slur for Chinese
  "깜둥이": [5, 4], // Slur for Black people
  "흑형": [5, 4], // Black bro (can be derogatory)
  "양놈": [4, 4], // Western bastard
  "양키": [5, 4], // Yankee (derogatory)
  "빨갱이": [5, 4], // Commie (slur)
  "수꼴": [5, 5], // Extreme conservative (slur)
  "좌좀": [5, 4], // Leftist zombie (slur)
  "일뽕": [5, 4], // Japan-lover (derogatory)
  "미뽕": [5, 4], // America-lover (derogatory)
  "중뽕": [5, 4], // China-lover (derogatory)
  "토착왜구": [5, 4], // Native Japanese sympathizer (slur)
  "매국노": [5, 4], // Traitor
  "반쪽발이": [5, 4], // Half-Japanese slur

  // Internet abbreviations
  "ㅗ": [2, 3], // Middle finger gesture
  "ㄷㅊ": [2, 3], // Abbreviation: 닥쳐
  "ㅆㄹㄱ": [2, 3], // Abbreviated insult
  "ㅈㄱ": [2, 3], // Abbreviation: 자격/조건
  "ㅂㅊ": [2, 3], // Abbreviation: 보지/병충
  "ㄲㅈ": [2, 3], // Abbreviation: 꺼져
  "ㅅㄲ": [2, 3], // Abbreviation: 새끼
  "ㅈㅂ": [2, 3], // Abbreviation
  "ㅆㅂㄴ": [2, 3], // Abbreviation: 씨발놈
  "ㅆㅂㄹㅁ": [2, 3], // Compound abbreviation
  "ㄴㄱㅁ": [2, 3], // Abbreviation: 느금마
  "ㅈㄹㅎㄴ": [2, 3], // Abbreviation: 지랄하네
  "ㅂㄹ": [2, 3], // Abbreviation
  "ㅈㄱㅇ": [2, 3], // Abbreviation
  "ㅍㅋ": [2, 3], // Abbreviation: 뻑큐
  "ㅁㅊㄴ": [2, 3], // Abbreviation: 미친놈
  "ㅁㅊㄴㄴ": [2, 3], // Abbreviation: 미친년

  // Compound insults
  "니애미뒤졌어": [1, 4], // Your mom is dead
  "니애비뒤졌어": [1, 4], // Your dad is dead
  "느금마뒤졌어": [1, 3], // Your mom is dead (slang)
  "애미뒤진": [1, 4], // Dead-mom (modifier)
  "애비뒤진": [1, 4], // Dead-dad (modifier)
  "시발새끼": [3, 4], // Fuck bastard (variant)
  "개씹년": [1, 4], // Dog-vulgar bitch
  "미친개새끼": [3, 4], // Crazy dog bastard
  "좆만한새끼": [3, 4], // Dick-sized bastard
  "빡대가리새끼": [3, 4], // Stupid-head bastard
  "지랄새끼": [3, 4], // Crazy bastard
  "또라이새끼": [3, 4], // Lunatic bastard
  "찐따같은새끼": [1, 4], // Loser-like bastard
  "병신새끼": [3, 4], // Retard bastard
  "쓰레기같은년": [1, 4], // Trash-like bitch
  "쓰레기같은놈": [3, 4], // Trash-like bastard
  "죽어버려": [5, 5], // Go die
  "죽을래": [5, 5], // Wanna die?
  "뒈져": [1, 4], // Drop dead
  "뒤져라": [5, 5], // Die (vulgar)
  "뒤져버려": [5, 5], // Just die
  "자살해": [5, 5], // Kill yourself
  "니미씨발": [3, 5], // Your mom + fuck
  "엠병": [1, 4], // Mom + disease (insult)

  // Modern slang insults
  "틀딱": [2, 3], // Boomer (derogatory)
  "꼰대": [2, 3], // Old-fashioned/preachy person
  "한남충": [2, 3], // Korean male bug (misandrist slur)
  "한녀충": [2, 3], // Korean female bug (misogynist slur)
  "맘충": [2, 3], // Mom-bug (derogatory for mothers)
  "급식충": [2, 3], // School-lunch bug (insult for young students)
  "진지충": [2, 3], // Serious-bug (overly serious person)
  "설명충": [2, 3], // Explanation-bug
  "노키즈존": [2, 3], // No kids zone (derogatory context)
  "김치녀": [2, 3], // Kimchi woman (misogynist)
  "된장녀": [2, 3], // Doenjang woman (misogynist)
  "개저씨": [2, 3], // Dog-uncle (derogatory for middle-aged men)
  "보빨러": [4, 3], // Pussy licker (vulgar insult)
  "자댕이": [2, 3], // Slur (derogatory)
  "무뇌충": [2, 3], // No-brain bug
  "허언증": [2, 3], // Pathological liar (used as insult)
  "관종": [2, 3], // Attention whore
  "어그로": [2, 3], // Aggro (troll)
  "ㅂㄹㅇ": [2, 3], // Abbreviation: 빨리와/병리 (context-dependent)

  // Body-part vulgarities
  "젖": [4, 4], // Breast (vulgar)
  "똥꼬": [1, 3], // Asshole (childish/vulgar)
  "항문": [1, 2], // Anus
  "똥구멍": [2, 4], // Shit hole
  "보짓물": [4, 4], // Vaginal fluid (extremely vulgar)
  "자궁": [1, 2], // Uterus (vulgar context)
  "불알": [4, 4], // Balls/testicles
  "불알놈": [3, 4], // Ball-bastard
  "젖탱이": [4, 4], // Tit (vulgar)
  "큰보지": [4, 4], // Big pussy (vulgar)
  "좆구멍": [4, 4], // Dick hole
  "씹물": [3, 4], // Vulgar fluid

  // Additional insults and exclamations
  "염병": [1, 4], // Plague (exclamation, vulgar)
  "염병할": [1, 4], // Plague upon you
  "지랄맞다": [1, 4], // Crazy/messed up
  "좆망": [4, 5], // Dick + doomed (fucked)
  "개꿀": [1, 4], // Dog honey (sarcastic)
  "ㅈ됐다": [3, 5], // Fucked (abbreviated)
  "좆됐다": [3, 5], // Fucked
  "시발점": [1, 4], // Used as pun on 씨발
  "씹덕": [1, 4], // Vulgar otaku
  "씹선비": [1, 4], // Vulgar hypocrite
  "오지랖": [1, 4], // Nosy/meddlesome (insult)
  "주둥아리": [1, 4], // Snout (shut your mouth)
  "주둥이": [1, 4], // Snout (derogatory)
  "대가리": [1, 4], // Head (derogatory)
  "면상": [1, 4], // Face (derogatory)
  "상판대기": [1, 4], // Face (vulgar)

  // Additional 씨발 compounds
  "씨발놈아": [3, 4], // Fucking bastard (vocative)
  "씨발년아": [3, 5], // Fucking bitch (vocative)
  "씨발것": [3, 5], // Fucking thing
  "씨발놈의새끼": [3, 4], // Fucking bastard's offspring
  "씨발련": [3, 5], // Fucking wench
  "씨발롬": [3, 5], // Fucking guy (corruption)
  "씨발놈의자식": [3, 4], // Fucking bastard's child
  "씨발놈아죽어": [3, 4], // Fucking bastard, die
  "시발새끼야": [3, 4], // Fuck-bastard (vocative variant)
  "시발것": [3, 5], // Fucking thing (variant)
  "씨부랄년": [3, 5], // Vulgar variant + bitch
  "씨부랄놈": [3, 4], // Vulgar variant + bastard
  "시방새끼": [3, 4], // Dialectal fuck-bastard
  "씨벌": [3, 5], // Variant spelling
  "씹팔": [3, 5], // Vulgar compound variant
  "씨발덕": [3, 5], // Fucking otaku
  "씨발충": [3, 5], // Fucking bug (insect insult)
  "쌍시발": [3, 5], // Double-fuck
  "개씨발": [3, 5], // Dog-fuck
  "존나씨발": [3, 5], // Fucking fuck
  "미친씨발년": [3, 5], // Crazy fucking bitch
  "미친씨발놈": [3, 4], // Crazy fucking bastard

  // Additional 개 compounds
  "개무시": [3, 5], // Dog-ignore (total disrespect)
  "개한민국": [3, 5], // Dog-Korea (derogatory for Korea)
  "개꼴": [3, 5], // Dog-appearance (disgusting sight)
  "개꿈": [3, 5], // Dog dream (worthless dream)
  "개뿔": [3, 5], // Dog horn (bullshit)
  "개헛소리": [3, 5], // Dog nonsense
  "개쌍놈": [3, 4], // Dog lowlife bastard
  "개쌍년": [3, 5], // Dog lowlife bitch
  "개후장": [3, 5], // Dog asshole
  "개지랄하다": [3, 5], // To act like a dog tantrum
  "개쓰레기같은": [3, 5], // Dog-trash-like
  "개불알": [4, 5], // Dog balls
  "개잡놈": [3, 5], // Dog lowlife
  "개잡년": [3, 5], // Dog lowlife bitch
  "개씹발": [3, 5], // Dog + vulgar fuck
  "개좆같다": [4, 5], // Like a dog's dick (shitty)
  "개나발": [3, 5], // Dog trumpet (bullshit)
  "개허접": [3, 5], // Dog amateur (pathetic)
  "개쩐다": [3, 5], // Extremely (sarcastic)
  "개웃기다": [1, 4], // Dog-funny (sarcastically stupid)
  "개노답": [3, 5], // Dog-no answer (hopeless)
  "개극혐": [3, 5], // Dog-extreme disgust
  "개역겹다": [3, 5], // Dog-disgusting
  "개짜증": [3, 5], // Dog-annoying

  // Additional 좆 compounds
  "좆같은년": [4, 5], // Dick-like bitch
  "좆같은놈": [3, 4], // Dick-like bastard
  "좆도아닌": [4, 5], // Not even dick (worthless)
  "좆도없는": [4, 5], // Having no dick (worthless)
  "좆만한놈": [3, 4], // Dick-sized bastard
  "좆만한년": [4, 5], // Dick-sized bitch
  "좆물리다": [4, 5], // Dick-watered (disappointed)
  "좆벌레": [4, 5], // Dick bug
  "좆새끼": [3, 4], // Dick bastard
  "좆빠는": [4, 5], // Dick-sucking
  "좆까놈": [3, 4], // Fuck-off bastard

  // Additional 병신 compounds
  "병신같은": [3, 5], // Retard-like
  "병신아": [3, 5], // Retard (vocative)
  "씹병신": [3, 5], // Vulgar retard
  "개병신같은": [3, 5], // Dog-retard-like
  "존나병신": [3, 5], // Fucking retard
  "병신같은새끼": [3, 4], // Retard-like bastard
  "병신같은년": [3, 5], // Retard-like bitch
  "병신같은놈": [3, 4], // Retard-like bastard
  "병신짓": [3, 5], // Retard behavior
  "병신력": [3, 5], // Retard power (sarcastic)
  "병신년": [3, 5], // Retard bitch
  "병신놈": [3, 4], // Retard bastard
  "쌍병신": [3, 5], // Double retard
  "대병신": [3, 5], // Grand retard

  // Additional sexual terms
  "성행위": [4, 4], // Sexual act
  "자위행위": [4, 4], // Masturbation act
  "구강": [4, 4], // Oral (sexual context)
  "삽입": [4, 4], // Insertion (sexual)
  "체위": [4, 4], // Sexual position
  "후배위": [4, 4], // Doggy style
  "정상위": [4, 4], // Missionary position
  "기승위": [4, 4], // Cowgirl position
  "측위": [4, 4], // Side position (sexual)
  "좌위": [4, 4], // Sitting position (sexual)
  "입위": [4, 4], // Standing position (sexual)
  "69자세": [4, 4], // 69 position
  "쓰리썸": [4, 4], // Threesome
  "난교": [4, 4], // Orgy
  "관계": [4, 4], // Relations (sexual context)
  "성관계": [4, 4], // Sexual relations
  "정사": [4, 4], // Love affair/sexual act
  "음란": [4, 4], // Obscene/lewd
  "음란물": [4, 4], // Obscene material
  "음란행위": [4, 4], // Obscene act
  "외설": [4, 4], // Obscenity
  "변태": [4, 4], // Pervert
  "변태놈": [3, 4], // Pervert bastard
  "변태새끼": [3, 4], // Pervert bastard
  "색마": [4, 4], // Sex fiend
  "색골": [4, 4], // Lecher
  "호색한": [4, 4], // Lecher/philanderer
  "음탕": [4, 4], // Debauchery
  "치한": [4, 4], // Groper (from Japanese)
  "성추행": [4, 4], // Sexual harassment
  "성희롱": [4, 4], // Sexual harassment
  "추행": [4, 4], // Indecent act
  "성범죄": [4, 4], // Sex crime
  "성도착": [4, 4], // Sexual perversion
  "관음증": [4, 4], // Voyeurism
  "가학증": [4, 4], // Sadism
  "피학증": [4, 4], // Masochism
  "소아성애": [5, 5], // Pedophilia (Korean term)
  "아동성범죄": [4, 4], // Child sex crime
  "성노예": [4, 4], // Sex slave
  "매매춘": [4, 4], // Sex trade (buying/selling)
  "성인용품": [4, 4], // Adult goods
  "딜도": [4, 4], // Dildo
  "바이브레이터": [4, 4], // Vibrator
  "콘돔": [1, 2], // Condom
  "박아주다": [4, 5], // To fuck (give)
  "따먹히다": [4, 5], // To be fucked
  "꽂다": [4, 4], // To stick in (sexual)
  "넣다": [4, 4], // To put in (sexual context)
  "빨다": [4, 4], // To suck (sexual)
  "핥다": [4, 4], // To lick (sexual)
  "빠구리": [4, 4], // Sex (vulgar slang)
  "뒷치기": [4, 4], // From behind (sexual)
  "질싸": [4, 4], // Vaginal ejaculation
  "얼싸": [4, 4], // Facial (sexual)
  "가슴싸": [4, 4], // Chest ejaculation
  "입싸": [4, 4], // Oral ejaculation
  "안에싸": [4, 4], // Ejaculate inside
  "발사": [4, 4], // Fire/ejaculate
  "사까시": [4, 5], // Blowjob (from Japanese)
  "보빨": [4, 4], // Pussy licking (vulgar)
  "자빨": [4, 4], // Dick sucking (vulgar)
  "좆빨": [4, 4], // Dick sucking (vulgar)
  "잠지": [4, 4], // Female genitalia (dialectal)
  "씹팔이": [4, 4], // Vulgar derogatory
  "풍속": [4, 4], // Sex industry (from Japanese)

  // Additional slurs
  "조선족": [5, 4], // Joseonjok (derogatory context)
  "짱개년": [5, 4], // Chinese slur + bitch
  "짱개놈": [5, 4], // Chinese slur + bastard
  "쪽바리년": [5, 4], // Japanese slur + bitch
  "쪽바리놈": [5, 4], // Japanese slur + bastard
  "깜둥이년": [5, 4], // Black slur + bitch
  "깜둥이놈": [5, 4], // Black slur + bastard
  "동남아": [1, 1], // Southeast Asian (derogatory context)
  "다문화": [1, 1], // Multicultural (derogatory context)
  "혼혈": [2, 3], // Mixed blood (derogatory)
  "튀기": [5, 4], // Mixed race (derogatory)
  "왜놈": [4, 4], // Japanese bastard (historical slur)
  "왜놈새끼": [4, 4], // Japanese bastard offspring
  "왜구": [5, 4], // Japanese pirate (slur)
  "되놈": [4, 4], // Chinese bastard (slur)
  "오랑캐": [5, 4], // Barbarian (historical slur)
  "코쟁이": [5, 4], // Big-nose (Western slur)
  "양코배기": [5, 4], // Western nose (slur)
  "캄보디아년": [5, 4], // Cambodian woman (derogatory)
  "필리핀년": [5, 4], // Filipino woman (derogatory)

  // Additional internet abbreviations
  "ㅈㅈ": [2, 3], // Abbreviation: 좆좆/졌다 (gg/lost)
  "ㅂㅅㅇ": [2, 3], // Abbreviation: 병신아
  "ㅅㅂㄴ": [2, 3], // Abbreviation: 씨발놈
  "ㅅㅂㄴㄴ": [2, 3], // Abbreviation: 씨발년
  "ㅅㅂㅅㄲ": [2, 3], // Abbreviation: 씨발새끼
  "ㅈㅁㅎ": [2, 3], // Abbreviation: 좆만한
  "ㅈㄲ": [2, 3], // Abbreviation: 좆까
  "ㅅㅅ": [2, 3], // Abbreviation: 섹스
  "ㅂㅈ": [2, 3], // Abbreviation: 보지
  "ㅈㅈ남": [2, 3], // Abbreviation: 좆좆 + man
  "ㅊㄴ": [2, 3], // Abbreviation: 창녀
  "ㅆㄹㄱ년": [2, 3], // Abbreviated + bitch
  "ㄱㅅㄲ": [2, 3], // Abbreviation: 개새끼
  "ㄱㄴ": [2, 3], // Abbreviation: 개년
  "ㅁㅊㅅㄲ": [2, 3], // Abbreviation: 미친새끼
  "ㅈㄴㅅㄲ": [2, 3], // Abbreviation: 존나새끼
  "ㅈㅅ": [2, 3], // Abbreviation: 좆같은/지랄
  "ㅍㅌㅊ": [2, 3], // Abbreviation: 판단은 추 (meme)
  "ㅇㅂ": [3, 3], // Abbreviation: 오빠/assorted
  "ㅗㅗ": [2, 3], // Double middle finger

  // Modern Korean internet slang additions
  "느개비": [2, 3], // Your dad (derogatory slang)
  "느금": [2, 3], // Your mom (abbreviated derogatory)
  "느개미": [2, 3], // Your mom (variant)
  "노무현": [1, 1], // Used as profanity substitute (controversial)
  "이기야": [2, 3], // Gyeongsang exclamation (aggressive)
  "좆문가": [4, 3], // Dick expert (sarcastic)
  "좆소": [4, 3], // Dick company (small terrible company)
  "헬조선": [2, 3], // Hell Joseon (Korea is hell)
  "흙수저": [2, 3], // Dirt spoon (born poor, derogatory)
  "김여사": [2, 3], // Ms. Kim (bad female driver slur)
  "충무공": [2, 3], // Used sarcastically as insult
  "노답": [2, 3], // No answer (hopeless person)
  "답정너": [2, 3], // Answer-decided-you (close-minded)
  "문찐": [1, 4], // Door-loser (shut-in)
  "혐짤": [2, 3], // Disgusting photo
  "ㅈ망": [4, 3], // Abbreviation: dick-doomed
  "갈보": [5, 4], // Prostitute (archaic)
  "화냥": [2, 3], // Slut (archaic)
  "작부": [5, 4], // Barmaid/prostitute
  "요년": [2, 3], // This bitch
  "요놈": [3, 4], // This bastard
  "이년": [2, 3], // This bitch
  "이놈": [3, 4], // This bastard
  "그년": [2, 3], // That bitch
  "그놈": [3, 4], // That bastard
  "저년": [2, 3], // That bitch (over there)
  "저놈": [3, 4], // That bastard (over there)
  "년놈": [3, 4], // Bitches and bastards
  "잡것": [2, 3], // Lowlife thing
  "잡것들": [2, 3], // Lowlife things (plural)
  "못난이": [1, 4], // Ugly person
  "못생긴년": [1, 4], // Ugly bitch
  "못생긴놈": [1, 4], // Ugly bastard
  "뚱뚱이": [1, 4], // Fatty
  "뚱보": [1, 4], // Fatso
  "뚱땡이": [1, 4], // Fatty (childish)
  "찐빵": [1, 4], // Steamed bun (fat person)
  "돼지년": [2, 3], // Pig bitch
  "돼지놈": [3, 4], // Pig bastard
  "돼지새끼": [3, 4], // Pig bastard
  "원숭이": [5, 5], // Monkey (dehumanizing)
  "짐승": [5, 5], // Beast (dehumanizing)
  "짐승새끼": [3, 4], // Beast bastard
  "인간쓰레기": [2, 3], // Human trash
  "인간말종": [2, 3], // Human scum
  "인간이하": [5, 5], // Sub-human
  "사람도아닌것": [2, 3], // Not even a person
  "네이년": [2, 3], // Internet bitch (from Naver)
  "일베충": [2, 3], // Ilbe bug (political insult)
  "메갈충": [2, 3], // Megalia bug (political insult)
  "워마드충": [2, 3], // Womad bug (political insult)
  "페미충": [2, 3], // Feminist bug
  "꼴페미": [2, 3], // Disgusting feminist
  "미러링충": [2, 3], // Mirroring bug
  "군무새": [2, 3], // Military parrot (repeater)
  "앵무새": [2, 3], // Parrot (mindless repeater)
  "벌레새끼": [3, 4], // Bug bastard
  "벌레만도못한": [2, 3], // Worse than a bug
  "구더기": [2, 3], // Maggot
  "구더기만도못한": [2, 3], // Worse than a maggot
  "기생충": [2, 3], // Parasite
  "기생충새끼": [3, 4], // Parasite bastard
  "좀비": [5, 5], // Zombie (dehumanizing)

  // Gyeongsang dialect profanity
  "마이묵어라": [3, 4], // Eat a lot (sarcastic aggression)
  "니캐": [3, 4], // You (Gyeongsang hostile)
  "니기미": [3, 4], // Your mother (Gyeongsang vulgar)
  "씨부럴": [3, 5], // Fuck (Gyeongsang variant)
  "머시마": [3, 4], // What the hell (Gyeongsang)
  "무신": [3, 4], // What (Gyeongsang aggressive)
  "이자슥아": [3, 4], // This bastard (Gyeongsang)
  "자슥": [3, 4], // Bastard (Gyeongsang)
  "머하노": [3, 4], // What are you doing (aggressive)
  "니거": [3, 4], // Your thing (can be vulgar)
  "아이가": [3, 4], // No way (exasperated)
  "지랄발광": [3, 4], // Going absolutely crazy
  "맞을래": [3, 4], // Wanna get hit?
  "한대맞을래": [3, 4], // Wanna get punched?

  // Jeolla dialect profanity
  "거시기": [2, 3], // That thing (euphemistic vulgar)
  "쥑일놈": [3, 4], // Damned bastard (Jeolla)
  "쥑일년": [3, 4], // Damned bitch (Jeolla)
  "뭐시여": [3, 4], // What is it (aggressive, Jeolla)
  "허벌나게": [3, 4], // Extremely/outrageously (Jeolla)
  "쌉놈": [3, 4], // Low bastard (Jeolla variant)
  "되바라진": [3, 4], // Insolent (Jeolla)
  "건달": [3, 4], // Thug/hoodlum
  "고놈": [3, 4], // That bastard (Jeolla)
  "고년": [3, 4], // That bitch (Jeolla)
  "뒈진다": [5, 5], // Gonna die (Jeolla variant)

  // Chungcheong dialect profanity
  "바보유": [1, 4], // Idiot (Chungcheong ending)
  "왜그려": [3, 4], // Why (Chungcheong, aggressive)
  "미치겠슈": [3, 4], // Going crazy (Chungcheong)
  "뭐여이게": [3, 4], // What is this (Chungcheong, aggressive)
  "짜증나유": [3, 4], // Annoying (Chungcheong)

  // Texting shortcuts for profanity
  "ㅅㅂㄹㅁㅋ": [3, 4], // Compound abbreviation
  "ㅂㅅㄱㅌ": [3, 4], // Abbreviation compound
  "ㅈㄹㅁㅈ": [3, 4], // 지랄맞다 abbreviation
  "ㅈㄲㄹ": [3, 4], // 좆까라 abbreviation
  "ㅆ발": [3, 4], // 씨발 partial
  "ㅆ빨": [3, 4], // 씨빨 partial
  "ㅅ발": [3, 4], // 시발 partial
  "tlqkf": [3, 4], // 시발 (keyboard mapping)
  "ㅂ신": [3, 4], // 병신 partial
  "qudtls": [3, 4], // 병신 (keyboard mapping)
  "tpvmf": [3, 4], // 시발 variant (keyboard)
  "ㅅㅂ놈아": [3, 4], // Abbreviated fuck + bastard vocative
  "ㅅㅂ년아": [3, 5], // Abbreviated fuck + bitch vocative
  "ㅂㅅ새끼": [3, 4], // Abbreviated retard + bastard
  "ㄱㅅㄲ아": [3, 4], // Abbreviated dog bastard vocative
  "ㄴㄱㅁ뒤졌어": [3, 4], // Your mom dead (abbreviated)
  "ㅈㄴ웃기네": [3, 5], // Fucking funny (abbreviated)

  // Additional body-part vulgarities
  "좆대": [4, 4], // Dick (vulgar slang)
  "씹구멍": [3, 4], // Vulgar hole
  "똥침": [1, 3], // Poop-needle (prank, vulgar)
  "젖가슴": [4, 4], // Breasts (vulgar)
  "음낭": [4, 4], // Scrotum
  "자궁구": [3, 4], // Cervix (vulgar context)
  "귀두": [2, 3], // Glans
  "포피": [1, 2], // Foreskin
  "전립선": [1, 1], // Prostate (vulgar context)
  "유방": [4, 4], // Breast (vulgar context)
  "큰자지": [4, 4], // Big dick
  "작은자지": [4, 4], // Small dick (insult)
  "엉덩이": [1, 2], // Buttocks (vulgar context)
  "궁둥이": [1, 3], // Butt (childish/vulgar)
  "볼기짝": [1, 3], // Butt cheek (vulgar)
  "치골": [1, 1], // Pubic bone (vulgar context)
  "고추": [4, 4], // Pepper (child's word for penis)
  "잦": [3, 4], // Variant spelling of 자지
  "봊": [3, 4], // Variant spelling of 보지

  // Additional compound insults
  "씨발병신새끼": [3, 4], // Fuck retard bastard
  "개좆같은새끼": [3, 4], // Dog-dick-like bastard
  "미친년아죽어": [5, 5], // Crazy bitch, die
  "미친놈아죽어": [3, 4], // Crazy bastard, die
  "존나병신같은새끼": [3, 4], // Fucking retard-like bastard
  "존나쓰레기같은년": [3, 5], // Fucking trash-like bitch
  "좆까라이새끼야": [3, 4], // Fuck off you bastard
  "느금마한테말해": [1, 4], // Tell your mom (derogatory)
  "애미없는새끼": [3, 4], // Motherless bastard
  "애비없는새끼": [1, 4], // Fatherless bastard
  "고아새끼": [3, 4], // Orphan bastard
  "부모없는새끼": [3, 4], // Parentless bastard
  "니미럴새끼": [3, 4], // Your mom + bastard
  "조져버린다": [3, 5], // I'll fuck you up
  "조져줄까": [3, 5], // Shall I fuck you up
  "패버린다": [1, 4], // I'll beat you up
  "패줄까": [1, 4], // Shall I beat you up
  "쳐맞아라": [1, 4], // Get hit
  "맞아죽어": [5, 5], // Get beaten to death
  "죽여버린다": [1, 4], // I'll kill you
  "쳐죽인다": [5, 5], // I'll beat you to death
  "때려죽인다": [5, 5], // I'll beat you to death
  "찢어버린다": [1, 4], // I'll tear you apart
  "밟아버린다": [1, 4], // I'll stomp on you
  "뭉개버린다": [1, 4], // I'll crush you
  "씹어먹는다": [1, 4], // I'll chew you up
  "삼켜버린다": [1, 4], // I'll swallow you up

  // Additional exclamations and expressions
  "젠장": [2, 4], // Damn
  "제기랄": [2, 4], // Damn it
  "빌어먹을": [2, 4], // Damned
  "망할": [2, 4], // Damned/doomed
  "지긋지긋": [1, 2], // Sick and tired
  "꼴불견": [1, 3], // Unsightly
  "역겹다": [1, 3], // Disgusting
  "추잡하다": [3, 4], // Vile
  "더럽다": [1, 2], // Dirty/filthy (insult)
  "천하다": [3, 4], // Low-class/vulgar
  "비열하다": [3, 4], // Despicable
  "치사하다": [3, 4], // Petty/despicable
  "비겁하다": [1, 4], // Cowardly
  "겁쟁이": [1, 4], // Coward
  "겁보": [1, 4], // Scaredy cat
  "찌질이": [1, 4], // Pathetic loser
  "찐따짓": [1, 4], // Loser behavior
  "루저": [1, 4], // Loser (loanword)
  "덜떨어진": [1, 4], // Not fully developed (insult)
  "모자란": [1, 3], // Lacking (insult for intelligence)
  "멍청이": [1, 4], // Idiot
  "멍청한놈": [3, 4], // Stupid bastard
  "멍청한년": [1, 4], // Stupid bitch
  "바보": [1, 4], // Idiot/fool
  "바보새끼": [3, 4], // Idiot bastard
  "멍청한새끼": [3, 4], // Stupid bastard
  "돌대가리": [1, 4], // Rock head (stupid)
  "돌머리": [1, 4], // Rock head (stupid)
  "돈대가리": [3, 4], // Money head (materialistic, insult)
  "흉물": [3, 4], // Monstrosity/eyesore
  "추녀": [1, 4], // Ugly woman
  "추남": [1, 4], // Ugly man
  "꼴보기싫다": [3, 4], // Can't stand looking at you
  "눈깔": [3, 4], // Eyeball (vulgar)
  "주둥아리닥쳐": [3, 4], // Shut your snout
  "입닥쳐": [3, 4], // Shut your mouth
  "닥치고꺼져": [3, 4], // Shut up and get lost

  // Romanized Korean profanity (English keyboard input)
  "ssibal": [3, 5], // Fuck
  "sibal": [3, 5], // Fuck (variant)
  "shibal": [3, 5], // Fuck (variant)
  "sshibal": [3, 5], // Fuck (variant)
  "ssipal": [3, 5], // Fuck (censored variant)
  "sipal": [3, 5], // Fuck (censored variant)
  "gaesaekki": [3, 5], // Son of a bitch
  "gae saekki": [3, 5], // Son of a bitch (spaced)
  "gaenyeon": [3, 5], // Bitch (dog-woman)
  "byeongsin": [3, 5], // Retard
  "byungshin": [3, 5], // Retard (variant)
  "pyeongsin": [3, 5], // Retard (variant)
  "jiral": [3, 5], // Acting crazy/bullshit
  // "jot": [4, 5], // Dick — false positive: common English word ("jot down notes")
  "jod": [4, 5], // Dick (variant)
  "jod gata": [4, 5], // Dick-like
  "boji": [4, 5], // Pussy
  "bozi": [4, 5], // Pussy (variant)
  "jaji": [4, 5], // Penis
  "saekki": [3, 5], // Bastard
  "sekki": [3, 5], // Bastard (variant)
  "seki": [3, 5], // Bastard (variant)
  // "nom": [3, 5], // Bastard — commented out: collides with English "nom nom" (eating), "nominated"
  "nyeon": [3, 5], // Bitch
  "nyon": [3, 5], // Bitch (variant)
  "ssangnom": [3, 5], // Low-class bastard
  "ssangnyeon": [3, 5], // Low-class bitch
  "changnyeo": [5, 5], // Whore
  "changnyuh": [5, 5], // Whore (variant)
  "geollae": [3, 5], // Slut
  "georae": [3, 5], // Slut (variant)
  "ttorai": [3, 5], // Lunatic
  "ddorai": [3, 5], // Lunatic (variant)
  "jjindda": [1, 5], // Loser
  "dakchyeo": [3, 5], // Shut up
  "dakchuh": [3, 5], // Shut up (variant)
  "kkeojyeo": [3, 5], // Get lost
  "gguh jyuh": [3, 5], // Get lost (variant)
  "yeotmeogeo": [3, 5], // Go fuck yourself
  "jonna": [3, 5], // Fucking/very (vulgar intensifier)
  "jotna": [3, 5], // Fucking/very (vulgar variant)
  "neugumma": [3, 5], // Your mom (derogatory)
  "nigimi": [3, 5], // Your mother (vulgar)
  "nimi": [3, 5], // Your mother (vulgar abbreviation)
  "nimilal": [3, 5], // Your mother (vulgar variant)
  "niaebi": [1, 5], // Your father (derogatory)
  "niaemi": [3, 5], // Your mother (derogatory)
  "michin": [3, 5], // Crazy
  "michinnom": [3, 5], // Crazy bastard
  "michinnyeon": [3, 5], // Crazy bitch
  "michinsaekki": [3, 5], // Crazy bastard
  "hogu": [3, 5], // Sucker/pushover
  "horosekki": [1, 5], // Bastard (fatherless)
  "jobalna": [3, 5], // Fucking (variant intensifier)
  "gaegateun": [3, 5], // Dog-like
  "gaejasik": [3, 5], // Dog's offspring
  "gaesseuregi": [3, 5], // Dog trash
  "gaejiral": [3, 5], // Dog tantrum (bullshit)
  "gaesori": [3, 5], // Dog sound (bullshit)
  "gaepan": [3, 5], // Dog mess (shitshow)
  "jotkkara": [3, 5], // Fuck off
  "jotkkala": [3, 5], // Fuck off (variant)
  "ppakdaegari": [1, 5], // Stupid head
  "meongcheong": [1, 5], // Stupid
  "meongcheongi": [1, 5], // Idiot
  "babo": [3, 4], // Idiot
  "babosekki": [3, 5], // Idiot bastard
  "doldaegari": [3, 5], // Rock head
  "tteungbo": [1, 5], // Fatso
  "tteungtteongi": [1, 5], // Fatty
  "dwaeji": [3, 5], // Pig (insult)
  "jugeora": [5, 5], // Die
  "jugeo": [5, 5], // Die (casual)
  "jugeobeolyeo": [5, 5], // Go die
  "dwijyeora": [5, 5], // Die (vulgar)
  "dwijyeobeolyeo": [5, 5], // Just die
  "jasal hae": [5, 5], // Kill yourself
  "jjijeo": [3, 5], // Tear apart
  "jojyeo": [3, 5], // Fuck up
  "paejwo": [3, 5], // Beat up
  "matazugeo": [5, 5], // Get beaten to death
  "yeombyeong": [3, 5], // Plague (exclamation)
  "yeombyeonghal": [3, 5], // Plague upon you
  "jenjang": [3, 5], // Damn
  "jegilar": [3, 5], // Damn it
  "bireomeogeul": [3, 5], // Damned
  "manghal": [3, 5], // Doomed/damned
  "sseulegi": [3, 5], // Trash
  "ingansseuregi": [3, 5], // Human trash
  "inganmaljong": [3, 5], // Human scum
  "beollae": [5, 5], // Bug (dehumanizing)
  "beollaesaekki": [3, 5], // Bug bastard
  "gisaengchung": [3, 5], // Parasite
  "gudeogi": [3, 5], // Maggot
  "weonsung i": [5, 5], // Monkey (dehumanizing)
  "jimseung": [5, 5], // Beast (dehumanizing)
  "ggondae": [3, 5], // Old-fashioned person
  "teuldak": [3, 5], // Boomer (derogatory)
  "hannamchung": [3, 5], // Korean male bug
  "hannyeochung": [3, 5], // Korean female bug
  "mamchung": [3, 5], // Mom-bug
  "geupsikchung": [3, 5], // School-lunch bug
  "gimchinyeo": [3, 5], // Kimchi woman (misogynist)
  "doenjangnyo": [3, 5], // Doenjang woman (misogynist)
  "gaejeossi": [3, 5], // Dog-uncle
  "gwanjong": [5, 5], // Attention whore
  "eogeurol": [3, 5], // Aggro/troll
  "nodap": [3, 5], // No answer (hopeless)
  "jjijil i": [1, 5], // Pathetic loser
  "lujeo": [1, 5], // Loser (loanword)
  "chuno": [1, 5], // Ugly woman
  "chunam": [1, 5], // Ugly man
  "hyangeongmu": [3, 5], // Disgusting photo
  "galbo": [5, 5], // Prostitute (archaic)
  "hwanyangnyo": [3, 5], // Slut (archaic)
  "jagbu": [5, 5], // Barmaid/prostitute
  "jabnom": [3, 5], // Lowlife
  "jabnyeon": [3, 5], // Lowlife bitch
  "geomjaengi": [1, 5], // Coward
  "geobbo": [3, 5], // Scaredy cat
  "mosnangi": [1, 5], // Ugly person

  // Keyboard-mapped evasions (Korean typed on English keyboard)
  "rlawls": [3, 5], // 기싫 on English keyboard
  "wlfkf": [3, 5], // 지랄 on English keyboard
  "todrkf": [3, 5], // 새끼 on English keyboard
  "todrl": [3, 5], // 새기 variant
  "rotodk": [3, 5], // 개새끼 approximation
  "rnrtodk": [3, 5], // 개새끼 variant
  "rkqtlr": [3, 5], // 간싸 approximation
  "thvmf": [3, 5], // 씨발 (alternate mapping)
  "qkstod": [3, 5], // 방신 (병신 variant mapping)
  "wjdrmf": [3, 5], // 저놈
  "dusruf": [3, 5], // 연놈
  "anfro": [3, 5], // 망할
  "dbsxkf": [3, 5], // 뇬탈 variant
  "dkssud": [3, 5], // 닥쳐
  "Rkwk": [3, 5], // 까자 variant
  "rksem": [3, 5], // 가놈 variant
  "rlqns": [3, 5], // 기분 (used in profane context)
  "vkdlf": [3, 5], // 바이 variant
  "tnlqkf": [3, 5], // 시발 variant
  "tnvmf": [3, 5], // 시발 variant mapping
  "qudtlstodrl": [3, 5], // 병신새끼
  "tlqkftodrl": [3, 5], // 씨발새끼
  "rotodrldl": [3, 5], // 개새끼이
  "wlfkfgksms": [3, 5], // 지랄하는
  "anstjd": [3, 5], // 뭐시 variant

  // Additional compound insults
  "개후레자식": [3, 4], // Dog bastard offspring
  "개후레새끼": [3, 4], // Dog bastard child
  "개후레": [3, 4], // Dog bastard
  "후레자식": [3, 4], // Bastard offspring
  "후레새끼": [3, 4], // Bastard child
  "엠생": [1, 4], // Mom-born (your mother insult)
  "엠뒤": [5, 5], // Mom-dead (your mother died)
  "니미칠": [1, 4], // Your mom (vulgar variant)
  "니미세끼": [1, 4], // Your mom's offspring
  "느그엄마": [1, 4], // Your mother (dialectal)
  "느그아빠": [1, 4], // Your father (dialectal)
  "느그마": [1, 4], // Your mother (abbreviated)
  "쳐먹어": [1, 4], // Eat it (vulgar)
  "쳐박아": [1, 4], // Shove it (vulgar)
  "처먹을": [1, 4], // To eat (vulgar)
  "쳐발라": [3, 5], // Get the fuck out
  "좆도모르는": [4, 4], // Doesn't know dick
  "존나쉬운": [3, 5], // Fucking easy (insult)
  "존나어려운": [3, 5], // Fucking hard (insult)
  "존나못생긴": [1, 4], // Fucking ugly
  "존나찐따": [1, 4], // Fucking loser
  "씨발련아": [3, 5], // Fucking wench (vocative)
  "개쓰레기새끼": [3, 4], // Dog-trash bastard
  "미친병신새끼": [3, 4], // Crazy retard bastard
  "미친개같은": [1, 4], // Crazy dog-like
  "개미친새끼": [3, 4], // Dog-crazy bastard
  "좆같은세상": [4, 4], // Dick-like world
  "좆같은인생": [4, 4], // Dick-like life
  "씹새끼야": [3, 4], // Vulgar bastard (vocative)
  "개좆같은놈": [3, 4], // Dog-dick-like bastard
  "개좆같은년": [4, 4], // Dog-dick-like bitch
  "빡쳐죽겠다": [5, 5], // So pissed I could die
  "열받아죽겠다": [5, 5], // So angry I could die
  "짜증나죽겠다": [5, 5], // So annoyed I could die
  "지겨워죽겠다": [5, 5], // So bored I could die
  "맞아뒤져라": [5, 5], // Get beaten and die
  "쳐맞고뒤져": [5, 5], // Get hit and die
  "존나쓸모없는": [3, 5], // Fucking useless
  "아무짝에쓸모없는": [1, 4], // Utterly useless
  "쓸모없는놈": [3, 4], // Useless bastard
  "쓸모없는년": [1, 4], // Useless bitch
  "한심한놈": [3, 4], // Pathetic bastard
  "한심한년": [1, 4], // Pathetic bitch
  "한심한새끼": [3, 4], // Pathetic bastard
  "불쌍한새끼": [3, 4], // Pitiful bastard (sarcastic)
  "저능아": [1, 4], // Low-IQ person
  "정박아": [1, 4], // Mentally deficient (insult)
  "미치광이": [1, 4], // Madman
  "미치광이새끼": [3, 4], // Madman bastard
  "또라이같은": [1, 4], // Lunatic-like

  // Additional sexual terms
  "성인동영상": [4, 4], // Adult video
  "야한동영상": [4, 4], // Lewd video
  "야사": [4, 4], // Lewd photo
  "야설": [4, 4], // Erotic fiction
  "음란사이트": [4, 4], // Obscene website
  "성인사이트": [4, 4], // Adult website
  "떡치다": [4, 4], // To have sex (slang)
  "떡실신": [4, 4], // Fainting from sex
  "말뚝박기": [4, 4], // Piledriving (sexual)
  "쌍떡": [4, 4], // Double sex
  "앞뒤": [4, 4], // Front and back (sexual)
  "뒷구멍": [4, 4], // Back hole (vulgar)
  "유륜": [4, 4], // Areola
  "음순": [4, 4], // Labia
  "대음순": [4, 4], // Labia majora
  "소음순": [4, 4], // Labia minora
  "치구": [4, 4], // Pubic area (vulgar)
  "회음부": [4, 4], // Perineum (vulgar context)
  "정관": [4, 4], // Vas deferens (vulgar context)
  "포르노배우": [4, 4], // Porn actor
  "야한짓": [4, 4], // Lewd act
  "음란한짓": [4, 4], // Obscene act
  "변태짓": [4, 4], // Perverse act
  "추잡한짓": [4, 4], // Vile act
  "애널": [4, 4], // Anal
  "오럴": [4, 4], // Oral
  "쓰리피": [4, 4], // 3P (threesome)
  "란제리": [4, 4], // Lingerie (sexual context)
  "스트립": [4, 4], // Strip
  "스트리퍼": [4, 4], // Stripper
  "에스코트": [4, 4], // Escort
  "매춘굴": [4, 4], // Brothel
  "사창가": [4, 4], // Red-light district
  "유곽": [4, 4], // Brothel (traditional)
  "술집여자": [4, 4], // Bar girl
  "접대부": [4, 4], // Hostess (derogatory)
  "안마시술소": [3, 3], // Massage parlor (euphemism)

  // Additional slurs
  "동남아년": [5, 4], // Southeast Asian woman (derogatory)
  "동남아놈": [5, 4], // Southeast Asian man (derogatory)
  "조센징": [5, 5], // Korean (extreme self-deprecating slur)
  "한국년": [5, 4], // Korean woman (derogatory context)
  "짱깨새끼": [3, 4], // Chinese slur + bastard
  "쪽발이": [5, 4], // Japanese (slur variant)
  "왜놈년": [3, 4], // Japanese bastard woman
  "흑인놈": [5, 4], // Black man (derogatory)
  "흑인년": [5, 4], // Black woman (derogatory)
  "백인놈": [5, 4], // White man (derogatory)
  "중국놈": [5, 4], // Chinese man (derogatory)
  "중국년": [5, 4], // Chinese woman (derogatory)
  "일본놈": [5, 4], // Japanese man (derogatory)
  "일본년": [5, 4], // Japanese woman (derogatory)
  "다문화년": [5, 4], // Multicultural woman (derogatory)
  "다문화놈": [5, 4], // Multicultural man (derogatory)
  "장애인놈": [3, 4], // Disabled bastard (derogatory)
  "장애인년": [5, 4], // Disabled bitch (derogatory)
  "장애인새끼": [3, 4], // Disabled bastard
  "불구": [5, 4], // Cripple (derogatory)
  "불구자": [5, 4], // Crippled person
  "절름발이": [5, 4], // Limping person (derogatory)
  "곱사등이": [5, 4], // Hunchback (derogatory)
  "꺼벙이": [5, 4], // Dark-skinned person (derogatory)
  "이주노동자": [5, 4], // Migrant worker (derogatory context)
  "외노자": [5, 4], // Foreign worker (derogatory abbreviation)

  // Additional dialect profanity (Gangwon)
  "머래": [3, 4], // What (Gangwon aggressive)
  "쎄리": [3, 4], // Hit hard (Gangwon)
  "패대기": [3, 4], // Slam/throw down
  "패대기치다": [3, 4], // To slam down

  // Additional dialect (Jeju)
  "호멩이": [1, 4], // Fool (Jeju)
  "경헌": [3, 4], // Like that (Jeju, aggressive context)
  "하르방": [3, 4], // Old man (Jeju, can be derogatory)

  // Additional internet slang
  "ㅈ소": [4, 3], // Abbreviation: 좆소 (dick company)
  "ㅂㅅ짓": [2, 3], // Abbreviation: 병신짓
  "ㅁㅊㄱ": [2, 3], // Abbreviation: 미치겠
  "ㄱㅈ같은": [2, 3], // Abbreviation: 개좆같은
  "ㅅㅂㅅㄲ야": [2, 3], // 씨발새끼야
  "ㄴㄱㅁ한테": [2, 3], // 느금마한테
  "ㅂㅅ력": [2, 3], // 병신력
  "ㅇㅂ이": [2, 3], // 오빠이 (mockery)
  "ㅈ됨": [3, 5], // 좆됨 (fucked)
  "ㅈ망함": [4, 3], // 좆망함 (dick-doomed)
  "ㅋㅋ루삥뽕": [2, 3], // Mockery sound
  "ㅎㅂ": [2, 3], // Abbreviation: 혐짤/흥분
  "ㅊㄴ년": [2, 3], // 창녀 + bitch
  "ㅊㅊ": [2, 3], // 추천/창창 context-dependent
  "년놈들": [3, 4], // Bitches and bastards (plural)
  "놈년들": [3, 4], // Bastards and bitches (plural)
  "씨발것들": [3, 5], // Fucking things (plural)
  "개새끼들": [2, 3], // Sons of bitches (plural)
  "병신들": [2, 3], // Retards (plural)
  "좆같은것들": [4, 3], // Dick-like things (plural)
  "쓰레기들": [2, 3], // Trash (plural)
  "벌레들": [2, 3], // Bugs (plural)
  "찐따들": [1, 4], // Losers (plural)
  "미친놈들": [3, 4], // Crazy bastards (plural)
  "미친년들": [2, 3], // Crazy bitches (plural)

  // Additional modern Korean insults
  "무개념": [1, 4], // No concept (clueless)
  "개념없는": [1, 4], // Conceptless (clueless)
  "저질": [1, 4], // Low-quality
  "저급": [1, 4], // Low-grade
  "하류": [3, 4], // Lower class
  "하등": [1, 4], // Lower grade (insult)
  "얼간이": [1, 4], // Simpleton
  "천치": [1, 4], // Natural fool
  "백치": [1, 4], // Idiot (archaic)
  "둔재": [1, 4], // Dull person
  "퇴물": [1, 4], // Has-been
  "구닥다리": [1, 4], // Old-fashioned/outdated
  "골빈년": [1, 4], // Empty-headed bitch
  "골빈놈": [3, 4], // Empty-headed bastard
  "오지라퍼": [1, 4], // Nosy busybody
  "진상": [1, 4], // Difficult customer/person
  "진상놈": [3, 4], // Difficult bastard
  "진상년": [1, 4], // Difficult bitch
  "상폐녀": [1, 4], // Upper-waste woman (derogatory)
  "하폐남": [1, 4], // Lower-waste man (derogatory)
  "씹덕새끼": [3, 4], // Vulgar otaku bastard
  "좆선비새끼": [3, 4], // Dick-scholar bastard
  "존나구린": [3, 5], // Fucking pathetic
  "존나더러운": [3, 5], // Fucking dirty
  "존나역겨운": [3, 5], // Fucking disgusting
  "존나징그러운": [3, 5], // Fucking creepy
  "씹구린": [1, 4], // Vulgar + pathetic
  "개구린": [1, 4], // Dog + pathetic
  "좆구린": [4, 4], // Dick + pathetic

  // === EXPANDED ENTRIES ===

  // Additional 씨발/시발 variants - exhaustive
  "시발놈의새끼": [3, 4], // Fuck bastard's offspring (variant)
  "시발년의새끼": [3, 5], // Fuck bitch's offspring (variant)
  "씨발련의": [3, 5], // Fucking wench's
  "씨발롬의": [3, 5], // Fucking guy's (corruption)
  "씨발것의": [3, 5], // Fucking thing's
  "씨발롬아": [3, 5], // Fucking guy (vocative)
  "씨발것아": [3, 5], // Fucking thing (vocative)
  "씨발것들아": [3, 5], // Fucking things (vocative plural)
  "씨부랄것": [3, 4], // Vulgar variant thing
  "씨부랄새끼들": [3, 4], // Vulgar bastards
  "씨불": [3, 4], // Censored variant
  "씨블": [3, 4], // Censored variant
  "씨브랄": [3, 4], // Censored variant
  "씨방": [3, 4], // Censored variant
  "씨방새": [3, 4], // Censored variant + bird
  "씨방놈": [3, 4], // Censored variant + bastard
  "씨방년": [3, 4], // Censored variant + bitch
  "씨밤바": [2, 3], // Euphemistic variant
  "씨빠": [3, 4], // Truncated variant
  "씨파": [3, 4], // Truncated variant
  "씨부렁놈": [3, 4], // Vulgar variant bastard
  "씨부렁년": [3, 4], // Vulgar variant bitch
  "씨부렁새끼": [3, 4], // Vulgar variant bastard
  "시밤": [3, 4], // Censored variant
  "시방": [3, 4], // Dialectal variant
  "시벌": [3, 4], // Variant spelling
  "시불": [3, 4], // Variant spelling
  "시블": [3, 4], // Variant spelling
  "시팔놈": [3, 4], // Censored variant + bastard
  "시팔년": [3, 4], // Censored variant + bitch
  "시팔새끼": [3, 4], // Censored variant + bastard
  "씨팔놈": [3, 4], // Censored variant + bastard
  "씨팔년": [3, 4], // Censored variant + bitch
  "씨팔새끼": [3, 4], // Censored variant + bastard
  "ㅆ발놈": [3, 4], // Partial + bastard
  "ㅆ발년": [3, 4], // Partial + bitch
  "ㅆ발새끼": [3, 4], // Partial + bastard
  "ㅅ발놈": [3, 4], // Partial + bastard
  "ㅅ발년": [3, 4], // Partial + bitch
  "ㅅ발새끼": [3, 4], // Partial + bastard
  "시이발": [3, 4], // Extended variant
  "씨이발": [3, 4], // Extended variant
  "씌발": [3, 5], // Misspelling variant
  "씌팔": [3, 5], // Misspelling variant
  "씹발년": [3, 4], // Vulgar compound + bitch
  "씹발놈": [3, 4], // Vulgar compound + bastard
  "씹발새끼": [3, 4], // Vulgar compound + bastard
  "씹팔년": [3, 4], // Vulgar variant + bitch
  "씹팔놈": [3, 4], // Vulgar variant + bastard
  "씹팔새끼": [3, 4], // Vulgar variant + bastard
  "좆씨발": [4, 5], // Dick-fuck
  "존나씨발새끼": [3, 4], // Fucking fuck bastard
  "시부렬": [3, 4], // Variant spelling
  "시부래": [3, 4], // Variant spelling
  "시부럴": [3, 4], // Variant spelling
  "씨부래": [3, 4], // Variant spelling

  // Additional 개 compound insults - comprehensive
  "개미친놈": [3, 4], // Dog-crazy bastard
  "개미친년": [1, 4], // Dog-crazy bitch
  "개같은새끼": [3, 4], // Dog-like bastard
  "개같은것": [1, 4], // Dog-like thing
  "개같은인간": [1, 4], // Dog-like human
  "개같은세상": [1, 4], // Dog-like world
  "개같은인생": [1, 4], // Dog-like life
  "개같은상황": [1, 4], // Dog-like situation
  "개답없는": [1, 4], // Dog-no answer (hopeless)
  "개후레자식들": [3, 4], // Dog bastard offspring (plural)
  "개후레새끼들": [3, 4], // Dog bastard children (plural)
  "개무개념": [1, 4], // Dog-no concept
  "개한심한": [1, 4], // Dog-pathetic
  "개찐따같은": [1, 4], // Dog-loser-like
  "개변태": [1, 4], // Dog-pervert
  "개변태새끼": [3, 4], // Dog-pervert bastard
  "개쓰레기인간": [1, 4], // Dog-trash human
  "개쓰레기같은인간": [1, 4], // Dog-trash-like human
  "개쓰레기같은놈": [3, 4], // Dog-trash-like bastard
  "개쓰레기같은년": [1, 4], // Dog-trash-like bitch
  "개역겨운놈": [3, 4], // Dog-disgusting bastard
  "개역겨운년": [1, 4], // Dog-disgusting bitch
  "개짜증나는": [1, 4], // Dog-annoying
  "개짜증나는놈": [3, 4], // Dog-annoying bastard
  "개짜증나는년": [1, 4], // Dog-annoying bitch
  "개머저리": [1, 4], // Dog-dimwit
  "개한심": [1, 4], // Dog-pathetic (short)
  "개구역질나는": [1, 4], // Dog-nausea-inducing
  "개토할것같은": [1, 4], // Dog-vomit-inducing
  "개징그러운": [1, 4], // Dog-creepy
  "개꼴사나운": [1, 4], // Dog-unsightly
  "개망신": [1, 4], // Dog-disgrace
  "개창피한": [3, 4], // Dog-embarrassing
  "개더러운놈": [3, 4], // Dog-dirty bastard
  "개더러운년": [1, 4], // Dog-dirty bitch
  "개추잡한": [1, 4], // Dog-vile
  "개비열한": [1, 4], // Dog-despicable
  "개치사한": [1, 4], // Dog-petty
  "개비겁한": [1, 4], // Dog-cowardly
  "개한심스러운": [1, 4], // Dog-pathetically
  "개꼬라지": [1, 4], // Dog-state (pathetic state)

  // Additional 좆 compounds - exhaustive
  "좆같은인간": [4, 5], // Dick-like human
  "좆같은상황": [4, 5], // Dick-like situation
  "좆같은일": [4, 5], // Dick-like job/thing
  "좆같은말": [4, 5], // Dick-like talk
  "좆같은소리": [4, 5], // Dick-like sound (nonsense)
  "좆같은짓": [4, 5], // Dick-like behavior
  "좆같은게임": [4, 5], // Dick-like game
  "좆같은나라": [4, 5], // Dick-like country
  "좆같은회사": [4, 5], // Dick-like company
  "좆같은학교": [4, 5], // Dick-like school
  "좆같은선생": [4, 5], // Dick-like teacher
  "좆소기업": [4, 5], // Dick small company
  "좆문가놈": [3, 4], // Dick expert bastard
  "좆문가년": [4, 5], // Dick expert bitch
  "좆도모르는놈": [3, 4], // Bastard who doesn't know dick
  "좆도모르는년": [4, 5], // Bitch who doesn't know dick
  "좆도모르면서": [4, 5], // While not knowing dick
  "좆도아닌놈": [3, 4], // Not-even-dick bastard
  "좆도아닌년": [4, 5], // Not-even-dick bitch
  "좆도없는놈": [3, 4], // Having-no-dick bastard
  "좆도없는년": [4, 5], // Having-no-dick bitch
  "좆밥놈": [1, 4], // Dick-rice bastard (loser)
  "좆밥년": [1, 4], // Dick-rice bitch (loser)
  "좆빠는놈": [3, 4], // Dick-sucking bastard
  "좆빠는년": [4, 5], // Dick-sucking bitch
  "좆이나빨아라": [4, 5], // Go suck dick
  "좆이나빨아": [4, 5], // Suck a dick
  "좆까라이": [3, 5], // Fuck off (full)
  "좆까는놈": [3, 4], // Fuck-off bastard
  "좆같이생긴": [4, 5], // Looking dick-like

  // Additional 병신 compounds - exhaustive
  "병신같은짓": [3, 5], // Retard-like behavior
  "병신같은소리": [3, 5], // Retard-like sound (nonsense)
  "병신같은말": [3, 5], // Retard-like talk
  "병신같은인간": [3, 5], // Retard-like human
  "병신같은게임": [3, 5], // Retard-like game
  "병신같은행동": [3, 5], // Retard-like action
  "개병신짓": [3, 5], // Dog-retard behavior
  "존나병신짓": [3, 5], // Fucking retard behavior
  "씹병신짓": [3, 5], // Vulgar retard behavior
  "대병신짓": [3, 5], // Grand retard behavior
  "극병신": [3, 5], // Extreme retard
  "초병신": [3, 5], // Ultra retard
  "핵병신": [3, 5], // Nuclear retard
  "병신력폭발": [3, 5], // Retard power explosion
  "병신력만렙": [3, 5], // Retard power max level
  "병신중의병신": [3, 5], // Retard among retards
  "병신오브병신": [3, 5], // Retard of retards (Konglish)
  "병신의끝판왕": [3, 5], // Ultimate retard
  "병신레전드": [3, 5], // Retard legend
  "킹병신": [3, 5], // Already listed

  // Additional 씹 compounds
  "씹놈": [3, 4], // Vulgar bastard
  "씹놈아": [3, 4], // Vulgar bastard (vocative)
  "씹련": [3, 5], // Vulgar wench
  "씹련아": [3, 5], // Vulgar wench (vocative)
  "씹치": [3, 5], // Vulgar
  "씹창": [3, 5], // Vulgar window (insult)
  "씹뚜껑": [3, 5], // Vulgar lid (insult)
  "씹같은": [3, 5], // Vulgar-like
  "씹같은놈": [3, 4], // Vulgar-like bastard
  "씹같은년": [3, 5], // Vulgar-like bitch
  "씹같은새끼": [3, 4], // Vulgar-like bastard
  "씹귀신": [3, 5], // Vulgar ghost
  "씹질": [3, 5], // Vulgar acts

  // 존나/졸라 variants and compounds
  "졸라": [3, 5], // Fucking (variant of 존나)
  "존나게": [3, 5], // Fuckingly
  "졸라게": [3, 5], // Fuckingly (variant)
  "존나리": [3, 5], // Fucking (variant)
  "졸라리": [3, 5], // Fucking (variant)
  "존나웃긴": [3, 5], // Fucking funny
  "존나슬픈": [3, 5], // Fucking sad
  "존나힘든": [3, 5], // Fucking hard
  "존나약한": [3, 5], // Fucking weak
  "존나못하는": [3, 5], // Fucking bad at
  "존나빠른": [3, 5], // Fucking fast
  "존나느린": [3, 5], // Fucking slow
  "존나큰": [3, 5], // Fucking big
  "존나작은": [3, 5], // Fucking small
  "존나많은": [3, 5], // Fucking many
  "존나적은": [3, 5], // Fucking few
  "존나비싼": [3, 5], // Fucking expensive
  "존나싼": [3, 5], // Fucking cheap
  "존나뚱뚱한": [1, 4], // Fucking fat
  "존나마른": [3, 5], // Fucking thin
  "존나키큰": [3, 5], // Fucking tall
  "존나키작은": [3, 5], // Fucking short
  "존나지루한": [3, 5], // Fucking boring
  "존나짜증나는": [3, 5], // Fucking annoying
  "존나귀찮은": [3, 5], // Fucking bothersome
  "존나싫은": [3, 5], // Fucking hateful
  "졸라쓰레기": [3, 5], // Fucking trash (variant)
  "졸라병신": [3, 5], // Fucking retard (variant)
  "졸라새끼": [3, 4], // Fucking bastard (variant)
  "졸라바보": [1, 4], // Fucking idiot (variant)
  "졸라멍청한": [1, 4], // Fucking stupid (variant)

  // Additional Korean internet abbreviations - comprehensive
  "ㅈㄴ못하네": [3, 5], // Fucking bad at (abbreviated)
  "ㅈㄴ역겹다": [3, 5], // Fucking disgusting (abbreviated)
  "ㅈㄴ짜증": [3, 5], // Fucking annoying (abbreviated)
  "ㅈㄴ더럽다": [3, 5], // Fucking dirty (abbreviated)
  "ㅈㄴ한심": [3, 5], // Fucking pathetic (abbreviated)
  "ㅈㄴ구리다": [3, 5], // Fucking pathetic (abbreviated)
  "ㅂㅅ놈": [3, 4], // Retard bastard (abbreviated)
  "ㅂㅅ년": [2, 3], // Retard bitch (abbreviated)
  "ㅂㅅ짓하네": [2, 3], // Doing retard stuff (abbreviated)
  "ㅂㅅ력ㅈㄴ": [3, 5], // Retard power fucking (abbreviated)
  "ㄱㅅㄲ들": [3, 4], // Dog bastards (abbreviated plural)
  "ㅅㅂ것": [3, 5], // Fucking thing (abbreviated)
  "ㅅㅂ것들": [3, 5], // Fucking things (abbreviated plural)
  "ㅅㅂ롬": [3, 5], // Fucking guy (abbreviated)
  "ㅅㅂ련": [3, 5], // Fucking wench (abbreviated)
  "ㅈ같다": [4, 3], // Dick-like (abbreviated)
  "ㅈ같은놈": [3, 4], // Dick-like bastard (abbreviated)
  "ㅈ같은년": [4, 3], // Dick-like bitch (abbreviated)
  "ㄱㅂㅅ": [2, 3], // Abbreviation: 개병신
  "ㄱㅂㅅ새끼": [3, 4], // Dog-retard bastard (abbreviated)
  "ㄱㅈ같다": [4, 3], // Dog-dick-like (abbreviated)
  "ㅇㅁ뒤졌어": [2, 3], // Your parent dead (abbreviated)
  "ㅈㄹㅁㅈ하네": [2, 3], // Crazy stuff (abbreviated)
  "ㅈㅁㅎ놈": [3, 4], // Dick-sized bastard (abbreviated)
  "ㅁㅊ병신": [2, 3], // Crazy retard (abbreviated)
  "ㅁㅊ좆": [4, 3], // Crazy dick (abbreviated)
  "ㅁㅊㅂㅅ": [2, 3], // Crazy retard (abbreviated)
  "ㄱㅉ새끼": [1, 4], // Dog-loser bastard (abbreviated)
  "ㅈㄲ놈": [3, 4], // Fuck-off bastard (abbreviated)
  "ㅈㄲ년": [3, 5], // Fuck-off bitch (abbreviated)
  "ㅅㅂㅂㅅ": [3, 5], // Fuck retard (abbreviated)

  // Keyboard evasion mappings - comprehensive
  "tlqkf새끼": [3, 5], // 시발 keyboard + bastard
  "tlqkfska": [3, 5], // 시발놈 keyboard
  "tlqkfsus": [3, 5], // 시발년 keyboard
  "qudtls새끼": [3, 5], // 병신 keyboard + bastard
  "wlfkfgks": [3, 5], // 지랄하 keyboard
  "tnlqkf새끼": [3, 5], // 씨발 variant + bastard
  "EKfxm": [3, 5], // 따먹 keyboard
  "qkRek": [3, 5], // 박다 keyboard
  "wkwl": [3, 5], // 자위 keyboard
  "rkdrks": [3, 5], // 강간 keyboard
  "vhwl": [3, 5], // 보지 keyboard
  "whrt": [3, 5], // 좆 keyboard

  // Gyeongsang dialect profanity - expanded
  "니기미씨발": [5, 5], // Your mother fuck (Gyeongsang)
  "니기미좆같은": [4, 4], // Your mother dick-like (Gyeongsang)
  "니캐새끼": [3, 4], // You bastard (Gyeongsang)
  "이자식아": [3, 4], // This bastard (Gyeongsang)
  "저자식아": [3, 4], // That bastard (Gyeongsang)
  "머하노이기": [3, 4], // What are you doing (Gyeongsang aggressive)
  "머라카노": [3, 4], // What did you say (Gyeongsang aggressive)
  "아이고씨발": [3, 5], // Oh my fuck (Gyeongsang)
  "니기미럴": [3, 4], // Your mother (Gyeongsang vulgar)
  "니거새끼": [3, 4], // Your bastard (Gyeongsang)
  "니거년": [3, 4], // Your bitch (Gyeongsang)
  "니거놈": [3, 4], // Your bastard (Gyeongsang)
  "이기뭐꼬": [3, 4], // What is this (Gyeongsang aggressive)
  "꺼져빠라": [3, 4], // Get lost (Gyeongsang)
  "죽을라카나": [5, 5], // Wanna die (Gyeongsang)
  "맞을라카나": [3, 4], // Wanna get hit (Gyeongsang)
  "뒤질라카나": [3, 5], // Wanna get fucked up (Gyeongsang)
  "씨부러": [3, 5], // Fuck (Gyeongsang variant)
  "니기미할": [3, 4], // Your mother damn (Gyeongsang)
  "씨부럴놈": [3, 4], // Fuck bastard (Gyeongsang)
  "씨부럴년": [3, 5], // Fuck bitch (Gyeongsang)
  "씨부럴새끼": [3, 4], // Fuck bastard (Gyeongsang)

  // Jeolla dialect profanity - expanded
  "거시기년": [3, 4], // That thing bitch (Jeolla)
  "거시기놈": [3, 4], // That thing bastard (Jeolla)
  "쥑일놈의새끼": [3, 4], // Damned bastard's offspring (Jeolla)
  "쥑일년의새끼": [3, 4], // Damned bitch's offspring (Jeolla)
  "허벌나게못하네": [3, 4], // Outrageously bad at (Jeolla)
  "허벌나게못생겼네": [1, 4], // Outrageously ugly (Jeolla)
  "쌉놈의새끼": [3, 4], // Low bastard's offspring (Jeolla)
  "되바라진놈": [3, 4], // Insolent bastard (Jeolla)
  "되바라진년": [3, 4], // Insolent bitch (Jeolla)
  "건달놈": [3, 4], // Thug bastard (Jeolla)
  "건달년": [3, 4], // Thug bitch (Jeolla)
  "고놈의자식": [3, 4], // That bastard's child (Jeolla)
  "고년의자식": [3, 4], // That bitch's child (Jeolla)
  "뒈진다잉": [5, 5], // Gonna die (Jeolla variant)
  "뒈져불란다": [5, 5], // Gonna die (Jeolla extended)
  "쥑여불란다": [3, 4], // Gonna kill (Jeolla)
  "팰란다": [3, 4], // Gonna beat (Jeolla)
  "맞을란다": [3, 4], // Gonna get hit (Jeolla)
  "지랄발광이여": [3, 4], // Going crazy (Jeolla)
  "허벌씨부렁": [3, 4], // Outrageously vulgar (Jeolla)
  "겁내못하네": [3, 4], // So bad at it (Jeolla)
  "겁내못생겼다": [1, 4], // So ugly (Jeolla)

  // Chungcheong dialect profanity - expanded
  "바보유놈": [3, 4], // Idiot bastard (Chungcheong)
  "왜그려놈아": [3, 4], // Why bastard (Chungcheong)
  "미치겠슈놈아": [3, 4], // Going crazy bastard (Chungcheong)
  "뭐여이게놈아": [3, 4], // What is this bastard (Chungcheong)
  "짜증나유놈아": [3, 4], // Annoying bastard (Chungcheong)
  "꺼져유": [3, 4], // Get lost (Chungcheong)
  "닥쳐유": [3, 4], // Shut up (Chungcheong)
  "죽을려유": [5, 5], // Wanna die (Chungcheong)
  "맞을려유": [3, 4], // Wanna get hit (Chungcheong)

  // Jeju dialect profanity - expanded
  "호멩이야": [1, 4], // Fool (Jeju exclamation)
  "호멩이놈": [3, 4], // Fool bastard (Jeju)
  "호멩이년": [1, 4], // Fool bitch (Jeju)
  "경허지말라": [3, 4], // Don't do that (Jeju aggressive)
  "하르방놈": [3, 4], // Old man bastard (Jeju)
  "할망구": [3, 4], // Old woman (Jeju derogatory)
  "하르방구": [3, 4], // Old man (Jeju derogatory)
  "멍텅구리": [1, 4], // Idiot (Jeju)
  "촐딱서니": [1, 4], // Stupid behavior (Jeju)
  "놈펜이": [1, 4], // Idiot (Jeju variant)

  // Gangwon dialect profanity - expanded
  "머래놈아": [3, 4], // What bastard (Gangwon)
  "머래년아": [3, 4], // What bitch (Gangwon)
  "쎄리쳐라": [3, 4], // Hit hard (Gangwon)
  "패대기쳐라": [3, 4], // Slam them (Gangwon)
  "쎄리쳐죽인다": [5, 5], // Hit hard to death (Gangwon)
  "빡세게해라": [3, 4], // Do it hard (Gangwon aggressive)
  "빡세게맞아라": [3, 4], // Get hit hard (Gangwon)

  // Konglish profanity - comprehensive
  "뻑큐놈": [3, 4], // Fuck you bastard (Konglish)
  "뻑큐년": [3, 5], // Fuck you bitch (Konglish)
  "뻑큐새끼": [3, 4], // Fuck you bastard (Konglish)
  "뻑큐아": [3, 5], // Fuck you (Konglish vocative)
  "셧업": [3, 4], // Shut up (Konglish)
  "겟아웃": [3, 4], // Get out (Konglish)
  "파킹": [3, 5], // Fucking (Konglish)
  "파킹놈": [3, 4], // Fucking bastard (Konglish)
  "파킹년": [3, 5], // Fucking bitch (Konglish)
  "파킹새끼": [3, 4], // Fucking bastard (Konglish)
  "뻑유": [3, 5], // Fuck you (Konglish variant)
  "팍유": [3, 5], // Fuck you (Konglish variant)
  "팩유": [3, 5], // Fuck you (Konglish variant)
  "팩오프": [3, 5], // Fuck off (Konglish)
  "비치": [3, 4], // Bitch (Konglish)
  "비치놈": [3, 4], // Bitch bastard (Konglish)
  "비치년": [3, 4], // Bitch bitch (Konglish)
  "선오브어비치": [3, 4], // Son of a bitch (Konglish)
  "마더파커": [5, 5], // Motherfucker (Konglish)
  "아쉬홀": [3, 4], // Asshole (Konglish)
  "아쓰홀": [3, 4], // Asshole (Konglish variant)
  "담잇": [3, 4], // Damn it (Konglish)
  "갓댐": [3, 4], // God damn (Konglish)
  "홀리쉿": [3, 5], // Holy shit (Konglish)
  "왓더팩": [3, 5], // What the fuck (Konglish)
  "피스오브쉿": [3, 5], // Piece of shit (Konglish)
  "고투헬": [3, 4], // Go to hell (Konglish)
  "바스타드": [3, 4], // Bastard (Konglish)
  "슬럿": [3, 4], // Slut (Konglish)
  "호어": [5, 4], // Whore (Konglish)
  "크랩": [3, 4], // Crap (Konglish)
  "저크": [3, 4], // Jerk (Konglish)
  "이디엇": [1, 4], // Idiot (Konglish)
  "모론": [1, 4], // Moron (Konglish)
  "리타드": [3, 4], // Retard (Konglish)
  "루저놈": [1, 4], // Loser bastard (Konglish)
  "루저년": [1, 4], // Loser bitch (Konglish)
  "루저새끼": [1, 4], // Loser bastard (Konglish)
  "프릭": [3, 4], // Freak (Konglish)
  "크리피": [3, 4], // Creepy (Konglish)
  "디스거스팅": [3, 4], // Disgusting (Konglish)
  "페세틱": [3, 4], // Pathetic (Konglish)
  "미저러블": [3, 4], // Miserable (Konglish)
  "피그": [3, 4], // Pig (Konglish)
  "도그": [3, 4], // Dog (Konglish insult)
  "랫": [3, 4], // Rat (Konglish)
  "패러사이트": [3, 4], // Parasite (Konglish)
  "트래시": [3, 4], // Trash (Konglish)
  "스컴": [3, 4], // Scum (Konglish)

  // Additional romanized Korean profanity - comprehensive
  "ssibal saekki": [3, 5], // Fuck bastard
  "ssibal nom a": [3, 5], // Fucking bastard (vocative)
  "ssibal nyeon a": [3, 5], // Fucking bitch (vocative)
  "ssipal saekki": [3, 5], // Fuck bastard (censored)
  "ssibural": [3, 5], // Vulgar variant
  "ssibureong": [3, 5], // Vulgar variant
  "ssiba": [3, 5], // Truncated fuck
  "ssibal geot": [3, 5], // Fucking thing
  "gaesaekki deul": [3, 5], // Dog bastards (plural)
  "gaenyeon a": [3, 5], // Dog-bitch (vocative)
  "gaenom a": [3, 5], // Dog-bastard (vocative)
  "gaejot": [4, 5], // Dog dick
  "gaeboji": [4, 5], // Dog pussy
  "gaesori haji ma": [3, 5], // Don't make dog sounds
  "gaejiral haji ma": [3, 5], // Don't do dog tantrum
  "gaepan iya": [3, 5], // It's a dog mess
  "byeongsin gateun": [3, 5], // Retard-like
  "byeongsin jit": [3, 5], // Retard behavior
  "byeongsin ryeok": [3, 5], // Retard power
  "ssip byeongsin": [3, 5], // Vulgar retard
  "gae byeongsin": [3, 5], // Dog retard
  "jonna byeongsin": [3, 5], // Fucking retard
  "jot gateun": [4, 5], // Dick-like
  "jot gateun saekki": [3, 5], // Dick-like bastard
  "jot gateun nom": [3, 5], // Dick-like bastard
  "jot gateun nyeon": [4, 5], // Dick-like bitch
  "jot kkara": [3, 5], // Fuck off
  "jot kkala": [3, 5], // Fuck off (variant)
  "jot manha": [4, 5], // Dick-sized
  "jot bap": [1, 5], // Dick rice (loser)
  "jot na": [4, 5], // Dick (intensifier)
  "jot daegari": [4, 5], // Dickhead
  "ssip saekki": [3, 5], // Vulgar bastard
  "ssip nyeon": [3, 5], // Vulgar bitch
  "ssip hal": [3, 5], // Vulgar prefix
  "ssip deok": [3, 5], // Vulgar otaku
  "ssip seonbi": [3, 5], // Vulgar hypocrite
  "michin gae saekki": [3, 5], // Crazy dog bastard
  "ttorai saekki": [3, 5], // Lunatic bastard
  "jjindda saekki": [1, 5], // Loser bastard
  "sseulegi gateun": [3, 5], // Trash-like
  "beollae saekki": [3, 5], // Bug bastard
  "gisaengchung saekki": [3, 5], // Parasite bastard
  "gudeogi saekki": [3, 5], // Maggot bastard
  "babo nom": [3, 5], // Idiot bastard
  "babo nyeon": [1, 5], // Idiot bitch
  "meongcheonghan nom": [3, 5], // Stupid bastard
  "meongcheonghan nyeon": [1, 5], // Stupid bitch
  "doldaegari nom": [3, 5], // Rock head bastard
  "jugeo beoryeo": [5, 5], // Go die
  "dwijyeo beoryeo": [5, 5], // Just die
  "jasal hae ra": [5, 5], // Kill yourself

  // Additional compound threats and violence
  "조져버린다이새끼": [3, 4], // I'll fuck you up, bastard
  "조져줄까이새끼": [3, 4], // Shall I fuck you up, bastard
  "패버린다이새끼": [3, 4], // I'll beat you up, bastard
  "패줄까이새끼": [3, 4], // Shall I beat you up, bastard
  "쳐맞아라이새끼": [3, 4], // Get hit, bastard
  "죽여버린다이새끼": [3, 4], // I'll kill you, bastard
  "쳐죽인다이새끼": [3, 4], // I'll beat you to death, bastard
  "때려죽인다이새끼": [3, 4], // I'll beat you to death, bastard
  "찢어버린다이새끼": [3, 4], // I'll tear you apart, bastard
  "밟아버린다이새끼": [3, 4], // I'll stomp on you, bastard
  "뭉개버린다이새끼": [3, 4], // I'll crush you, bastard
  "씹어먹는다이새끼": [3, 4], // I'll chew you up, bastard
  "칼로찔러버린다": [3, 5], // I'll stab you with a knife
  "칼빵먹인다": [3, 5], // I'll knife you
  "총맞아죽어": [5, 5], // Get shot and die
  "불태워버린다": [3, 5], // I'll burn you
  "산채로묻어버린다": [3, 5], // I'll bury you alive
  "콘크리트에묻어버린다": [3, 5], // I'll bury you in concrete
  "바다에던져버린다": [3, 5], // I'll throw you in the ocean
  "사지를찢어버린다": [3, 5], // I'll tear your limbs apart
  "목을비틀어버린다": [3, 5], // I'll twist your neck
  "뼈를부러뜨린다": [3, 5], // I'll break your bones
  "이빨을부러뜨린다": [3, 5], // I'll break your teeth
  "눈을뽑아버린다": [3, 5], // I'll gouge out your eyes

  // Additional sexual insults
  "떡치는년": [3, 5], // Slut who fucks
  "떡치는놈": [5, 5], // Man-whore who fucks
  "떡치자": [3, 5], // Let's fuck
  "떡쳤냐": [3, 5], // Did you fuck
  "야동보는놈": [3, 4], // Porn-watching bastard
  "자위하는놈": [4, 4], // Masturbating bastard
  "딸치는놈": [4, 4], // Masturbating bastard
  "딸치고자빠져": [4, 4], // Masturbate and pass out
  "보빨놈": [3, 4], // Pussy-licking bastard
  "보빨년": [4, 4], // Pussy-licking bitch
  "자빨놈": [3, 4], // Dick-sucking bastard
  "자빨년": [4, 4], // Dick-sucking bitch
  "좆빨놈": [3, 4], // Dick-sucking bastard
  "좆빨년": [4, 4], // Dick-sucking bitch
  "사까시놈": [4, 5], // Blowjob bastard
  "사까시년": [4, 5], // Blowjob bitch
  "걸레짓하는년": [1, 4], // Slut-acting bitch
  "화냥질하는년": [1, 4], // Slutting around bitch
  "매춘부같은년": [5, 4], // Prostitute-like bitch
  "창녀같은년": [5, 4], // Whore-like bitch
  "성매매년": [1, 4], // Sex-trading bitch
  "조건년": [1, 4], // Conditional-meeting bitch
  "원조년": [1, 4], // Compensated-dating bitch
  "빠구리치자": [3, 5], // Let's fuck (vulgar)
  "빠구리치는년": [3, 5], // Fucking bitch (vulgar)
  "빠구리치는놈": [3, 4], // Fucking bastard (vulgar)
  "박아주까": [3, 5], // Shall I fuck you
  "따먹어주까": [3, 5], // Shall I fuck you
  "씹하자": [3, 5], // Let's fuck
  "벗어": [1, 4], // Take it off
  "다벗어": [1, 4], // Take it all off
  "다리벌려": [1, 4], // Spread your legs
  "야한짓하자": [1, 4], // Let's do lewd things

  // Additional slurs - expanded
  "조센징새끼": [3, 4], // Korean slur + bastard
  "한국년아": [5, 4], // Korean woman (vocative derogatory)
  "한국놈아": [5, 4], // Korean man (vocative derogatory)
  "짱깨놈아": [3, 4], // Chinese slur + bastard (vocative)
  "짱깨년아": [5, 4], // Chinese slur + bitch (vocative)
  "쪽바리놈아": [3, 4], // Japanese slur + bastard (vocative)
  "쪽바리년아": [5, 4], // Japanese slur + bitch (vocative)
  "깜둥이놈아": [3, 4], // Black slur + bastard (vocative)
  "깜둥이년아": [5, 4], // Black slur + bitch (vocative)
  "왜놈새끼야": [3, 4], // Japanese bastard offspring (vocative)
  "왜구새끼": [3, 4], // Japanese pirate bastard
  "되놈새끼": [3, 4], // Chinese bastard offspring
  "오랑캐새끼": [3, 4], // Barbarian bastard offspring
  "코쟁이새끼": [3, 4], // Big-nose bastard offspring
  "양코배기새끼": [3, 4], // Western nose bastard
  "외노자새끼": [3, 4], // Foreign worker bastard
  "불구자새끼": [3, 4], // Cripple bastard
  "불구놈": [3, 4], // Cripple bastard
  "불구년": [5, 4], // Cripple bitch
  "절름발이놈": [3, 4], // Limping bastard
  "벙어리": [5, 4], // Mute (derogatory)
  "소경": [5, 4], // Blind (derogatory)
  "귀머거리": [5, 4], // Deaf (derogatory)
  "외눈박이": [5, 4], // One-eyed (derogatory)
  "곱추": [5, 4], // Hunchback (derogatory short)
  "앉은뱅이": [5, 4], // Cripple who can't stand (derogatory)
  "정신지체": [5, 4], // Mentally retarded (derogatory)

  // Additional modern Korean insults - comprehensive
  "무개념놈": [3, 4], // Clueless bastard
  "무개념년": [1, 4], // Clueless bitch
  "개념없는놈": [3, 4], // Conceptless bastard
  "개념없는년": [1, 4], // Conceptless bitch
  "저질놈": [3, 4], // Low-quality bastard
  "저질년": [1, 4], // Low-quality bitch
  "저급놈": [3, 4], // Low-grade bastard
  "저급년": [1, 4], // Low-grade bitch
  "하류놈": [3, 4], // Lower-class bastard
  "하류년": [3, 4], // Lower-class bitch
  "하등놈": [3, 4], // Lower-grade bastard
  "하등년": [1, 4], // Lower-grade bitch
  "얼간이놈": [3, 4], // Simpleton bastard
  "얼간이년": [1, 4], // Simpleton bitch
  "천치놈": [3, 4], // Natural fool bastard
  "천치년": [1, 4], // Natural fool bitch
  "백치놈": [3, 4], // Idiot bastard (archaic)
  "백치년": [1, 4], // Idiot bitch (archaic)
  "둔재놈": [3, 4], // Dull bastard
  "퇴물놈": [3, 4], // Has-been bastard
  "구닥다리놈": [3, 4], // Outdated bastard
  "골빈놈아": [3, 4], // Empty-headed bastard (vocative)
  "골빈년아": [1, 4], // Empty-headed bitch (vocative)
  "오지라퍼놈": [3, 4], // Nosy bastard
  "오지라퍼년": [1, 4], // Nosy bitch
  "진상놈아": [3, 4], // Difficult bastard (vocative)
  "진상년아": [1, 4], // Difficult bitch (vocative)
  "진상새끼": [3, 4], // Difficult bastard
  "걸레년아": [1, 4], // Mop-bitch (vocative)
  "씹덕새끼야": [3, 4], // Vulgar otaku bastard (vocative)
  "좆선비새끼야": [3, 4], // Dick-scholar bastard (vocative)

  // Additional compound expressions with 존나
  "존나구린놈": [3, 4], // Fucking pathetic bastard
  "존나구린년": [3, 5], // Fucking pathetic bitch
  "존나더러운놈": [3, 4], // Fucking dirty bastard
  "존나더러운년": [3, 5], // Fucking dirty bitch
  "존나역겨운놈": [3, 4], // Fucking disgusting bastard
  "존나역겨운년": [3, 5], // Fucking disgusting bitch
  "존나징그러운놈": [3, 4], // Fucking creepy bastard
  "존나징그러운년": [3, 5], // Fucking creepy bitch
  "존나한심한놈": [3, 4], // Fucking pathetic bastard
  "존나한심한년": [3, 5], // Fucking pathetic bitch
  "존나거지같은": [3, 5], // Fucking beggar-like
  "존나무능한": [3, 5], // Fucking incompetent
  "존나쓸모없는놈": [3, 4], // Fucking useless bastard
  "존나쓸모없는년": [3, 5], // Fucking useless bitch
  "존나무식한": [3, 5], // Fucking ignorant
  "존나저능한": [3, 5], // Fucking low-IQ
  "존나개같은": [3, 5], // Fucking dog-like
  "존나돼지같은": [3, 5], // Fucking pig-like
  "존나벌레같은": [3, 5], // Fucking bug-like
  "존나구더기같은": [3, 5], // Fucking maggot-like
  "존나기생충같은": [3, 5], // Fucking parasite-like

  // Additional expressions of disgust/contempt
  "너같은놈은": [3, 4], // A person like you
  "너같은년은": [3, 4], // A woman like you
  "너같은새끼는": [3, 4], // A bastard like you
  "너같은인간은": [3, 4], // A human like you
  "너같은것은": [3, 4], // A thing like you
  "너같은쓰레기는": [3, 4], // A trash like you
  "너같은벌레는": [3, 4], // A bug like you
  "사라져라": [3, 4], // Disappear
  "사라져버려": [3, 4], // Just disappear
  "증발해라": [3, 4], // Evaporate
  "증발해버려": [3, 4], // Just evaporate
  "없어져라": [3, 4], // Cease to exist
  "없어져버려": [3, 4], // Just cease to exist
  "소멸해라": [3, 4], // Be annihilated
  "존재자체가혐오": [3, 4], // Your existence itself is disgusting
  "존재가역겨워": [3, 4], // Your existence is disgusting
  "존재가징그러워": [3, 4], // Your existence is creepy
  "너의존재자체가쓰레기": [3, 4], // Your existence itself is trash
  "태어나지말았어야했다": [3, 4], // Should not have been born
  "태어난게죄": [3, 4], // Being born is a crime
  "너를낳은부모가불쌍": [3, 4], // Parents who gave birth to you are pitiful
  "산소낭비": [3, 4], // Oxygen waste
  "공기낭비": [3, 4], // Air waste
  "음식낭비": [3, 4], // Food waste
  "자원낭비": [3, 4], // Resource waste
  "세금낭비": [3, 4], // Tax waste
  "공간낭비": [3, 4], // Space waste
  "살아있는게죄": [3, 4], // Being alive is a crime
  "이세상에서사라져": [3, 4], // Disappear from this world
  "지구에서꺼져": [3, 4], // Get off earth

  // Additional 핵/초/극/킹/갓 prefix insults
  "핵노답": [1, 4], // Nuclear no-answer (extremely hopeless)
  "핵쓰레기": [1, 4], // Nuclear trash
  "핵찐따": [1, 4], // Nuclear loser
  "핵구린": [1, 4], // Nuclear pathetic
  "핵한심": [1, 4], // Nuclear pathetic
  "핵멍청": [1, 4], // Nuclear stupid
  "핵못생긴": [1, 4], // Nuclear ugly
  "핵징그러운": [1, 4], // Nuclear creepy
  "핵역겨운": [1, 4], // Nuclear disgusting
  "초쓰레기": [1, 4], // Ultra trash
  "초찐따": [1, 4], // Ultra loser
  "초병신같은": [1, 4], // Ultra retard-like
  "초한심한": [1, 4], // Ultra pathetic
  "초멍청한": [1, 4], // Ultra stupid
  "극혐놈": [3, 4], // Extreme-disgust bastard
  "극혐년": [1, 4], // Extreme-disgust bitch
  "극혐새끼": [3, 4], // Extreme-disgust bastard
  "극혐인간": [1, 4], // Extreme-disgust human
  "킹받네": [1, 4], // King annoying (very annoying)
  "킹받는놈": [3, 4], // King-annoying bastard
  "킹받는년": [1, 4], // King-annoying bitch
  "킹받는새끼": [3, 4], // King-annoying bastard
  "킹쓰레기": [1, 4], // King trash
  "킹찐따": [1, 4], // King loser
  "갓쓰레기": [1, 4], // God trash (sarcastic)
  "갓찐따": [1, 4], // God loser (sarcastic)
  "갓노답": [1, 4], // God no-answer (sarcastic)

  // Additional 놈/년/새끼 compounds with various insults
  "멍청이새끼": [3, 4], // Idiot bastard
  "멍청이놈아": [3, 4], // Idiot bastard (vocative)
  "멍청이년아": [1, 4], // Idiot bitch (vocative)
  "바보놈아": [3, 4], // Idiot bastard (vocative)
  "바보년아": [1, 4], // Idiot bitch (vocative)
  "바보새끼야": [3, 4], // Idiot bastard (vocative)
  "돌대가리놈아": [3, 4], // Rock head bastard (vocative)
  "돌대가리년아": [1, 4], // Rock head bitch (vocative)
  "돌대가리새끼야": [3, 4], // Rock head bastard (vocative)
  "뚱뚱이놈아": [1, 4], // Fatty bastard (vocative)
  "뚱뚱이년아": [1, 4], // Fatty bitch (vocative)
  "뚱보놈아": [1, 4], // Fatso bastard (vocative)
  "뚱보년아": [1, 4], // Fatso bitch (vocative)
  "뚱보새끼야": [1, 4], // Fatso bastard (vocative)
  "못난이놈아": [1, 4], // Ugly bastard (vocative)
  "못난이년아": [1, 4], // Ugly bitch (vocative)
  "찌질이놈아": [1, 4], // Pathetic loser bastard (vocative)
  "찌질이년아": [1, 4], // Pathetic loser bitch (vocative)
  "찌질이새끼야": [1, 4], // Pathetic loser bastard (vocative)
  "겁쟁이놈아": [1, 4], // Coward bastard (vocative)
  "겁쟁이년아": [1, 4], // Coward bitch (vocative)
  "겁쟁이새끼야": [1, 4], // Coward bastard (vocative)
  "거지놈아": [3, 4], // Beggar bastard (vocative)
  "거지년아": [1, 4], // Beggar bitch (vocative)
  "거지새끼야": [3, 4], // Beggar bastard (vocative)
  "노숙자놈": [3, 4], // Homeless bastard
  "노숙자년": [1, 4], // Homeless bitch
  "노숙자새끼": [3, 4], // Homeless bastard
  "백수놈": [3, 4], // Unemployed bastard
  "백수년": [1, 4], // Unemployed bitch
  "백수새끼": [3, 4], // Unemployed bastard
  "백수건달": [1, 4], // Unemployed thug
  "니트족": [1, 4], // NEET (Korean)
  "니트족놈": [3, 4], // NEET bastard
  "니트족새끼": [3, 4], // NEET bastard
  "은둔형외톨이": [1, 4], // Shut-in loner
  "히키코모리": [1, 4], // Hikikomori (from Japanese)
  "폐인": [1, 4], // Ruined person
  "폐인놈": [3, 4], // Ruined person bastard
  "폐인새끼": [3, 4], // Ruined person bastard

  // Additional compound expressions
  "입좀닥쳐라": [3, 5], // Shut your mouth already
  "입좀다물어라": [3, 5], // Close your mouth already
  "주둥아리좀닥쳐": [3, 5], // Shut your snout already
  "주둥이좀닥쳐": [3, 5], // Shut your snout already
  "꺼져이새끼야": [3, 4], // Get lost bastard
  "사라져이새끼야": [3, 4], // Disappear bastard
  "닥치고사라져": [3, 5], // Shut up and disappear
  "닥치고꺼져라": [3, 5], // Shut up and get lost
  "개소리좀하지마": [3, 5], // Stop making dog sounds
  "개소리하지마라": [3, 5], // Don't make dog sounds
  "헛소리하지마라": [3, 5], // Don't talk nonsense
  "개헛소리하지마라": [3, 5], // Don't talk dog nonsense
  "닥치고가만있어": [3, 5], // Shut up and be still
  "닥치고앉아있어": [3, 5], // Shut up and sit down
  "존재하지마라": [3, 5], // Don't exist

  // Additional romanized - various systems
  "ssi bal": [3, 5], // Fuck (spaced with space)
  "si bal": [3, 5], // Fuck (variant spaced)
  "gae nyeon": [3, 5], // Dog-bitch (spaced)
  "gae nom": [3, 5], // Dog-bastard (spaced)
  "byeong sin": [3, 5], // Retard (spaced)
  "ji ral": [3, 5], // Crazy/bullshit (spaced)
  "jon na": [3, 5], // Fucking (spaced)
  "jot gata": [4, 5], // Dick-like (spaced)
  "bo ji": [4, 5], // Pussy (spaced)
  "ja ji": [4, 5], // Penis (spaced)
  "dak chyeo": [3, 5], // Shut up (spaced)
  "kkeo jyeo": [3, 5], // Get lost (spaced)
  "yeot meogeo": [3, 5], // Go fuck yourself (spaced)
  "neu geum ma": [3, 5], // Your mom (spaced)
  "ni mi": [3, 5], // Your mother (spaced)
  "ae mi": [3, 5], // Your mother (spaced)
  "ae bi": [1, 5], // Your father (spaced)
  "ssang nom": [3, 5], // Low-class bastard (spaced)
  "ssang nyeon": [3, 5], // Low-class bitch (spaced)
  "chang nyeo": [5, 5], // Whore (spaced)
  "geol lae": [3, 5], // Slut (spaced)
  "tto rai": [3, 5], // Lunatic (spaced)
  "jjin dda": [1, 5], // Loser (spaced)
  "ppak dae ga ri": [1, 5], // Stupid head (spaced)
  "meong cheong i": [1, 5], // Idiot (spaced)
  "dol dae ga ri": [3, 5], // Rock head (spaced)
  "ttung bo": [1, 5], // Fatso (spaced)
  "dwae ji": [3, 5], // Pig (spaced)
  "won sung i": [3, 5], // Monkey (spaced)
  "jim seung": [3, 5], // Beast (spaced)
  "in gan sseul le gi": [3, 5], // Human trash (spaced)
  "in gan mal jong": [3, 5], // Human scum (spaced)
  "beol lae": [3, 5], // Bug (spaced)
  "gi saeng chung": [3, 5], // Parasite (spaced)
  "gu deo gi": [3, 5], // Maggot (spaced)
  "yeom byeong": [3, 5], // Plague (spaced)
  "jen jang": [3, 5], // Damn (spaced)
  "je gi ral": [3, 5], // Damn it (spaced)
  "bil eo meog eul": [3, 5], // Damned (spaced)
  "mang hal": [3, 5], // Doomed (spaced)

  // Additional gaming/internet insults
  "트롤": [2, 3], // Troll
  "트롤놈": [3, 4], // Troll bastard
  "트롤년": [2, 3], // Troll bitch
  "트롤새끼": [3, 4], // Troll bastard
  "피딩놈": [3, 4], // Feeding bastard (gaming)
  "피딩년": [2, 3], // Feeding bitch (gaming)
  "피딩새끼": [3, 4], // Feeding bastard (gaming)
  "핵쟁이": [2, 3], // Hacker (gaming derogatory)
  "핵쟁이새끼": [3, 4], // Hacker bastard
  "치터놈": [3, 4], // Cheater bastard
  "치터년": [2, 3], // Cheater bitch
  "치터새끼": [3, 4], // Cheater bastard
  "발놈새끼": [3, 4], // Bad-play bastard
  "발컨놈": [3, 4], // Bad-control bastard
  "발컨새끼": [3, 4], // Bad-control bastard
  "실력없는놈": [3, 4], // Talentless bastard
  "실력없는년": [2, 3], // Talentless bitch
  "센스없는놈": [3, 4], // Senseless bastard
  "센스없는년": [2, 3], // Senseless bitch
  "노력도안하는놈": [3, 4], // Bastard who doesn't even try
  "꼴뚜기": [2, 3], // Squid (derogatory for bad play)
  "뉴비놈": [3, 4], // Newbie bastard
  "뉴비새끼": [3, 4], // Newbie bastard
  "초보놈": [3, 4], // Beginner bastard
  "초보새끼": [3, 4], // Beginner bastard
  "봇같은놈": [3, 4], // Bot-like bastard
  "봇같은년": [2, 3], // Bot-like bitch
  "봇이냐": [2, 3], // Are you a bot
  "롤충": [2, 3], // League-of-legends bug
  "겜충": [2, 3], // Game bug
  "폰겜충": [2, 3], // Phone-game bug
  "과금충": [2, 3], // Pay-to-win bug
  "과금돼지": [2, 3], // Pay-to-win pig
  "현질충": [2, 3], // Cash-shop bug
  "현질돼지": [2, 3], // Cash-shop pig
  "ATM놈": [3, 4], // ATM bastard
  "지갑놈": [3, 4], // Wallet bastard

  // ===== EXHAUSTIVE 씨발/시발 ADDITIONAL VARIANTS =====
  "씨8": [3, 5], // Fuck (number evasion)
  "시8": [3, 5], // Fuck (number evasion)
  "씨바알": [3, 5], // Fuck (elongated)
  "시바알": [3, 5], // Fuck (elongated)
  "시발련": [3, 5], // Fucking bitch
  "시발놈아": [3, 5], // You fucker
  "씨부리": [3, 5], // Fuck (variant)
  "씨1발": [3, 5], // Fuck (number insertion)
  "시1발": [3, 5], // Fuck (number insertion)
  "C발": [3, 5], // Fuck (English C evasion)
  // "C8": [3, 5], // Fuck (English+number evasion) — false positive: Corvette C8, common model numbers
  "ㅆ1ㅂㅏㄹ": [3, 5], // Fuck (decomposed)
  "씨@발": [3, 5], // Fuck (symbol evasion)
  "시@발": [3, 5], // Fuck (symbol evasion)
  "씨#발": [3, 5], // Fuck (symbol evasion)
  "shibbal": [3, 5], // Fuck (romanized variant)
  "shipal": [3, 5], // Fuck (romanized variant)
  "ssbal": [3, 5], // Fuck (romanized contracted)
  "cbal": [3, 5], // Fuck (romanized minimal)
  "tlqkf2": [3, 5], // Fuck (keyboard + number)
  "씨바놈": [3, 4], // Fucking bastard
  "씨발새끼야": [3, 4], // You fucking bastard (emphatic)
  "시발적": [3, 5], // Fucking (adjective form)
  "씨발적": [3, 5], // Fucking (adjective form)
  "시발탱": [3, 5], // Fucking (slang variant)
  "씨발탱": [3, 5], // Fucking (slang variant)

  // ===== EXHAUSTIVE 개 PREFIX ADDITIONAL COMPOUNDS =====
  "개역겹": [3, 5], // Dog disgusting
  "개구역질": [3, 5], // Dog nausea
  "개불쌍": [3, 5], // Dog pitiful (sarcastic)
  "개한심하다": [3, 5], // So pathetic
  "개쪽팔리다": [3, 5], // So embarrassing
  "개창피하다": [3, 5], // So shameful
  "개싫다": [3, 5], // So hateful
  "개빡침": [3, 5], // So enraged
  "개열받음": [3, 5], // So infuriating
  "개정신병자": [3, 5], // Dog psycho
  "개사이코": [3, 5], // Dog psycho (Konglish)
  "개쓸모없다": [3, 5], // So useless
  "개못생김": [1, 4], // So ugly
  "개추하다": [1, 4], // So ugly (formal)
  "개더럽다": [3, 5], // So dirty
  "개냄새": [3, 5], // Dog smell (stinks)
  "개구리다": [3, 5], // So stinky
  "개재수없다": [3, 5], // So unlucky/hateful
  "개짜증나다": [3, 5], // So irritating
  "개아깝다": [3, 5], // Such a waste
  "개꼴보기싫다": [3, 5], // Hate seeing (someone)
  "개눈꼴시다": [3, 5], // Hate the sight of

  // ===== EXHAUSTIVE 좆/자지 COMPOUNDS =====
  "좆까년": [3, 5], // Fuck off bitch
  "좆만이": [4, 5], // Dick-sized
  "자지빨아": [4, 5], // Suck dick
  "자지나빨아": [4, 5], // Go suck dick
  "자지같다": [4, 5], // Dick-like
  "자지벌레": [4, 5], // Dick bug
  "자지벌레같은": [4, 5], // Dick-bug-like
  "좆빨이": [4, 5], // Dick sucker

  // ===== EXHAUSTIVE 병신 ADDITIONAL COMPOUNDS =====
  "병신짓하다": [3, 5], // Doing retarded things
  "병신짓거리": [3, 5], // Retarded behavior
  "병신인증": [3, 5], // Retard certification (internet)
  "뼝신": [3, 5], // Retard (vowel variant)
  "벼응신": [3, 5], // Retard (stretched)
  "비응신": [3, 5], // Retard (vowel variant)
  "ㅂㅇㅅ": [3, 5], // Retard (consonant abbreviation)
  "byungsin": [3, 5], // Retard (romanized variant)
  "byeongshin": [3, 5], // Retard (romanized variant)
  "병1신": [3, 5], // Retard (number insertion)
  "병@신": [3, 5], // Retard (symbol evasion)

  // ===== EXHAUSTIVE 씹 ADDITIONAL COMPOUNDS =====
  "씹년아": [5, 5], // Hey cunt
  "씹쌍놈": [3, 4], // Cunt-double bastard
  "씹쌍년": [5, 5], // Cunt-double bitch
  "씹떡": [5, 5], // Cunt rice cake (sexual)
  "씹창녀": [5, 5], // Cunt-prostitute
  "씹보지": [5, 5], // Cunt-pussy
  "씹자지": [5, 5], // Cunt-dick
  "씹좆": [5, 5], // Cunt-dick
  "씹쓰레기": [5, 5], // Cunt-trash
  "씹꼴": [1, 4], // Cunt-sight (ugly)
  "씹꼴리다": [1, 4], // Cunt-looking (ugly)
  "씹덕후": [5, 5], // Cunt-fan (obsessive)

  // ===== ADDITIONAL INTERNET ABBREVIATIONS/EVASIONS =====
  "ㄱㅈ": [2, 5], // 개좆 abbreviation
  "ㅆㄺ": [2, 5], // 씨발 variant
  "ㄴㅁ": [2, 5], // 니미 abbreviation
  "ㄴㅁㅅㅂ": [2, 5], // 니미씨발
  "ㅎㅌㅊ": [2, 5], // 하튼 씨 abbreviation
  "ㅗㅗㅗ": [2, 5], // Multiple middle fingers
  "ㅗㅗㅗㅗ": [2, 5], // Many middle fingers

  // ===== KEYBOARD MAPPING EVASIONS =====
  "qkftor": [3, 5], // 발싸 (English keyboard)
  "answkd": [3, 5], // 문제 context variant
  "rotorl": [3, 5], // 개새끼 variant mapping
  "wjdtlq": [3, 5], // 정씨 variant mapping
  "tptkd": [3, 5], // 세상 variant mapping
  "qnrwlq": [3, 5], // 병씨 variant mapping
  "rlqnf": [3, 5], // 기발 variant mapping
  "wkrPwl": [3, 5], // 장애 variant mapping

  // ===== ADDITIONAL GYEONGSANG DIALECT =====
  "니기미씹": [5, 5], // Your mother's cunt (Gyeongsang)
  "니기미좆": [4, 4], // Your mother's dick (Gyeongsang)
  "뭐라카노": [3, 4], // What are you saying (Gyeongsang)
  "가가가가": [3, 4], // That person (confusing Gyeongsang sentence)
  "이 씨부럴": [3, 5], // This fucking (Gyeongsang)
  "우짜노": [3, 4], // What do we do (Gyeongsang dismissive)
  "무데이": [1, 4], // Idiot (Gyeongsang)
  "간나새끼": [3, 4], // Bastard (Gyeongsang)
  "간나": [3, 4], // Derogatory term (Gyeongsang)
  "문디이": [1, 4], // Idiot (Gyeongsang variant)
  "문디새끼": [3, 4], // Idiot bastard (Gyeongsang)
  "느그아부지": [1, 4], // Your father (Gyeongsang derogatory)
  "느그어무이": [3, 4], // Your mother (Gyeongsang derogatory)
  "니아부지": [1, 4], // Your father (Gyeongsang derogatory)
  "니어무이": [3, 4], // Your mother (Gyeongsang derogatory)
  "조빠라": [3, 4], // Suck it (Gyeongsang vulgar)
  "할매": [3, 4], // Grandma (Gyeongsang, can be derogatory)
  "할배": [3, 4], // Grandpa (Gyeongsang, can be derogatory)
  "해뿌리야": [3, 4], // Stop it (Gyeongsang angry)

  // ===== ADDITIONAL JEOLLA DIALECT =====
  "거시기새끼": [3, 4], // That-thing bastard (Jeolla)
  "거시기같은놈": [3, 4], // That-thing-like bastard (Jeolla)
  "쓸개빠진놈": [3, 4], // Gutless bastard (Jeolla)
  "쓸개빠진것": [3, 4], // Gutless thing (Jeolla)
  "지랄염병": [3, 4], // Crazy plague (Jeolla compound)
  "니미럴놈": [3, 4], // Your mother bastard (Jeolla)
  "이것이": [3, 4], // This thing (Jeolla dismissive)
  "저것이": [3, 4], // That thing (Jeolla dismissive)
  "뭣이중헌디": [3, 4], // What's important (Jeolla dismissive)
  "거시기한": [3, 4], // That-thinged (Jeolla vulgar)
  "해뿌렸다": [3, 4], // Did it already (Jeolla aggressive)
  "싸가지없당께": [3, 4], // Ill-mannered (Jeolla)
  "못난놈이당께": [1, 4], // Ugly bastard (Jeolla)

  // ===== ADDITIONAL CHUNGCHEONG DIALECT =====
  "그냥유": [3, 4], // Just that (Chungcheong dismissive)
  "뭐여": [3, 4], // What (Chungcheong dismissive)
  "이놈시키유": [3, 4], // This bastard (Chungcheong)
  "저놈시키유": [3, 4], // That bastard (Chungcheong)
  "허튼소리유": [3, 4], // Nonsense (Chungcheong)
  "지랄마셔유": [3, 4], // Stop being crazy (Chungcheong)
  "뻘소리유": [3, 5], // Bullshit (Chungcheong)
  "멍텅구리유": [1, 4], // Idiot (Chungcheong)
  "얼빠진놈유": [3, 4], // Absent-minded bastard (Chungcheong)
  "미친것이유": [3, 4], // Crazy thing (Chungcheong)

  // ===== ADDITIONAL JEJU DIALECT =====
  "이녁": [3, 4], // You (Jeju derogatory)
  "저녁": [3, 4], // That person (Jeju derogatory context)
  "혼저옵서양": [3, 4], // Come here (Jeju, vulgar context)
  "게메": [3, 4], // Dog (Jeju for 개)
  "미쳔것": [3, 4], // Crazy thing (Jeju)
  "호로자식": [3, 4], // Bastard child (Jeju variant)
  "바당에빠져": [3, 4], // Drown in the sea (Jeju curse)
  "돌아분놈": [3, 4], // Crazy bastard (Jeju)
  "뭐곡": [3, 4], // What (Jeju aggressive)

  // ===== ADDITIONAL GANGWON DIALECT =====
  "야래": [3, 4], // Come on (Gangwon aggressive)
  "이놈래": [3, 4], // This bastard (Gangwon)
  "저놈래": [3, 4], // That bastard (Gangwon)
  "뭐래": [3, 4], // What (Gangwon aggressive)
  "바보래": [1, 4], // Idiot (Gangwon)
  "미친놈래": [3, 4], // Crazy bastard (Gangwon)

  // ===== ADDITIONAL KONGLISH PROFANITY =====
  "파킹셧": [3, 5], // Fucking shit (Konglish)
  "파킹헬": [3, 5], // Fucking hell (Konglish)
  "파킹비치": [3, 5], // Fucking bitch (Konglish)
  "파킹바스타드": [3, 4], // Fucking bastard (Konglish)
  "쉿": [3, 5], // Shit (Konglish)
  "쉬잇": [3, 5], // Shit (Konglish elongated)
  "쉬이잇": [3, 5], // Shit (Konglish more elongated)
  "빡큐": [3, 5], // Fuck you (Konglish variant)
  "빡유": [3, 5], // Fuck you (Konglish variant)
  "씩유": [3, 4], // Sick you (Konglish insult)
  "빛치": [3, 4], // Bitch (Konglish variant)
  "비이치": [3, 4], // Bitch (Konglish elongated)
  "비취": [3, 4], // Bitch (Konglish variant)
  "어스홀": [3, 4], // Asshole (Konglish)
  "애스홀": [3, 4], // Asshole (Konglish variant)
  "마더뻐커": [5, 5], // Motherfucker (Konglish variant)
  "선오브비치": [3, 4], // Son of a bitch (Konglish)
  "썬오브비치": [3, 4], // Son of a bitch (Konglish variant)
  "호모": [3, 4], // Homo (Konglish derogatory)
  "게이": [3, 4], // Gay (Konglish derogatory use)
  "레즈": [3, 4], // Lesbian (Konglish derogatory)
  "레즈비언": [3, 4], // Lesbian (Konglish)
  "트랜스": [3, 4], // Trans (Konglish derogatory use)
  "디스": [3, 4], // Diss (Konglish)
  "디스하다": [3, 4], // To diss (Konglish verb)
  "트롤링": [3, 4], // Trolling (Konglish)

  // ===== ROMANIZED KOREAN PROFANITY =====
  "gaesaeggi": [3, 5], // 개새끼 (romanized variant)
  "geseki": [3, 5], // 개새끼 (romanized shortened)
  "ge seki": [3, 5], // 개새끼 (romanized shortened spaced)
  "shibal nom": [3, 5], // 씨발놈 (romanized)
  "ssibal nom": [3, 5], // 씨발놈 (romanized)
  "jotka": [3, 5], // 좆까 (romanized)
  "jot ka": [3, 5], // 좆까 (romanized spaced)
  "jotbap": [3, 5], // 좆밥 (romanized)
  "ssip": [3, 5], // 씹 (romanized)
  "sship": [3, 5], // 씹 (romanized variant)
  "mi chin nom": [3, 5], // 미친놈 (romanized)
  "michin nom": [3, 5], // 미친놈 (romanized)
  "mi chin nyun": [3, 5], // 미친년 (romanized)
  "michin nyun": [3, 5], // 미친년 (romanized)
  "michinnyun": [3, 5], // 미친년 (romanized)
  "dak chuh": [3, 5], // 닥쳐 (romanized)
  "gguh juh": [3, 5], // 꺼져 (romanized)
  "yut meogeo": [3, 5], // 엿먹어 (romanized variant)
  "nimiSSibal": [3, 5], // 니미씨발 (romanized)
  "ni mi ssi bal": [3, 5], // 니미씨발 (romanized spaced)
  "nimiral": [3, 5], // 니미럴 (romanized)
  "horoseki": [3, 5], // 호로새끼 (romanized)
  "horo seki": [3, 5], // 호로새끼 (romanized spaced)
  "ddong": [3, 5], // 똥 (romanized)
  "ttong": [3, 5], // 똥 (romanized variant)
  "ddong gae": [3, 5], // 똥개 (romanized)
  "bbak chida": [3, 5], // 빡치다 (romanized)
  "bbakchida": [3, 5], // 빡치다 (romanized)
  "bbi chi": [3, 5], // 삐치 (romanized)
  "gaenom": [3, 5], // 개놈 (romanized)
  "gae nyun": [3, 5], // 개년 (romanized)
  "gaenyun": [3, 5], // 개년 (romanized)

  // ===== ADDITIONAL COMPOUND THREATS/CURSES =====
  "죽어라": [5, 5], // Die (imperative)
  "죽고싶어": [5, 5], // Want to die (used as threat)
  "죽여줄까": [3, 5], // Shall I kill you?
  "죽여버리겠다": [3, 5], // I will kill you
  "찢어죽인다": [5, 5], // I'll tear you to death
  "갈기갈기찢어": [3, 5], // Tear to shreds
  "때려죽여": [5, 5], // Beat to death
  "밟아죽인다": [5, 5], // Stomp to death
  "밟아죽여": [5, 5], // Stomp to death
  "쳐죽여": [5, 5], // Strike to death
  "뒈져버려": [3, 5], // Drop dead already
  "뒈질래": [3, 5], // Want to drop dead?
  "디져라": [3, 5], // Drop dead (variant)
  "디져버려": [3, 5], // Drop dead (variant)
  "골로가라": [5, 5], // Go die
  "골로가버려": [5, 5], // Go die already
  "저승가라": [3, 5], // Go to the afterlife
  "지옥가라": [3, 5], // Go to hell
  "지옥에나가라": [3, 5], // Go to hell
  "지옥에서썩어라": [3, 5], // Rot in hell
  "지옥불에타라": [3, 5], // Burn in hellfire
  "염병할놈": [3, 4], // Plague bastard
  "염병할년": [3, 5], // Plague bitch
  "지랄하고자빠졌네": [3, 5], // Going crazy and collapsed
  "약쳐먹었냐": [3, 5], // Did you take drugs?
  "약빨았냐": [3, 5], // Did you suck drugs?
  "정신나갔냐": [3, 5], // Lost your mind?
  "정신줄놓았냐": [3, 5], // Let go of your sanity string?
  "정신병자놈": [3, 4], // Psycho bastard
  "정신병자년": [3, 5], // Psycho bitch
  "정신이상자": [3, 5], // Mentally abnormal person
  "돌아이놈": [3, 4], // Crazy bastard
  "돌아이년": [3, 5], // Crazy bitch
  "돌+i": [3, 5], // Crazy (symbol evasion)
  "또라이놈": [3, 4], // Lunatic bastard
  "또라이년": [3, 5], // Lunatic bitch
  "미치광이놈": [3, 4], // Maniac bastard
  "미치광이년": [3, 5], // Maniac bitch

  // ===== ADDITIONAL SEXUAL INSULTS =====
  "걸레같은년": [1, 4], // Rag-like bitch (slut)
  "걸레같은놈": [3, 4], // Rag-like bastard
  "창년아": [5, 4], // Hey whore
  "꽃뱀": [1, 4], // Gold digger (flower snake)
  "꽃뱀년": [1, 4], // Gold digger bitch
  "한남": [1, 4], // Korean man (derogatory)
  "한녀": [1, 4], // Korean woman (derogatory)
  "김치남": [1, 4], // Kimchi man (misandrist)
  "된장남": [1, 4], // Soybean paste man
  "숫처녀": [1, 4], // Virgin (derogatory context)
  "총각딱지": [1, 4], // Bachelor stigma
  "임신충": [1, 4], // Pregnancy bug (derogatory for pregnant)
  "애비없는": [1, 4], // Fatherless
  "애미없는": [1, 4], // Motherless
  "에미없는": [1, 4], // Motherless (variant)
  "에비없는": [1, 4], // Fatherless (variant)
  "고아놈": [3, 4], // Orphan bastard
  "고아년": [1, 4], // Orphan bitch
  "사생아": [1, 4], // Illegitimate child
  "사생아새끼": [3, 4], // Illegitimate child bastard

  // ===== ADDITIONAL MODERN KOREAN INSULTS =====
  "관심종자": [1, 4], // Attention seeker
  "관종새끼": [3, 4], // Attention whore bastard
  "싸이코": [1, 4], // Psycho (Korean)
  "싸이코놈": [3, 4], // Psycho bastard
  "싸이코년": [1, 4], // Psycho bitch
  "찐따놈": [1, 4], // Loser bastard
  "찐따같은": [1, 4], // Loser-like
  "오타쿠": [1, 4], // Otaku (derogatory)
  "오덕후": [1, 4], // Otaku (Korean variant)
  "오덕충": [1, 4], // Otaku-bug
  "빠돌이": [1, 4], // Fanboy (derogatory)
  "빠순이": [1, 4], // Fangirl (derogatory)
  "빠가": [1, 4], // Idiot (from Japanese baka)
  "빠가새끼": [3, 4], // Idiot bastard
  "빠가놈": [3, 4], // Idiot bastard
  "빠가년": [1, 4], // Idiot bitch
  "쪼다": [1, 4], // Coward/weakling
  "쪼다새끼": [1, 4], // Coward bastard
  "쪼다놈": [1, 4], // Coward bastard
  "겁쟁이새끼": [1, 4], // Coward bastard
  "찌질이새끼": [3, 4], // Pathetic bastard
  "찌질이놈": [3, 4], // Pathetic bastard
  "양아치": [1, 4], // Thug
  "양아치새끼": [3, 4], // Thug bastard
  "양아치놈": [3, 4], // Thug bastard
  "양아치년": [1, 4], // Thug bitch
  "날라리": [1, 4], // Delinquent
  "날라리새끼": [3, 4], // Delinquent bastard
  "불량배": [1, 4], // Hoodlum
  "깡패": [1, 4], // Gangster
  "깡패새끼": [3, 4], // Gangster bastard
  "깡패놈": [3, 4], // Gangster bastard
  "조폭새끼": [3, 4], // Mob bastard
  "건달새끼": [3, 4], // Ruffian bastard

  // ===== ADDITIONAL 핵/초/극/킹/갓 PREFIX INSULTS =====
  "핵꼴보기싫다": [1, 4], // Nuclear hate the sight of
  "핵폐급": [3, 4], // Nuclear waste-class
  "초저능": [1, 4], // Super low-ability
  "초바보": [1, 4], // Super idiot
  "초멍청이": [1, 4], // Super idiot
  "극혐오": [1, 4], // Extreme disgust
  "극극혐": [1, 4], // Extreme extreme disgust
  "킹받다": [1, 4], // King-angry (very angry)
  "킹받는다": [1, 4], // King-angry (very angry)
  "킹바보": [1, 4], // King idiot
  "갓병신": [1, 4], // God-retard (ironic)

  // ===== ADDITIONAL DISGUST/CONTEMPT EXPRESSIONS =====
  "꺼져새끼": [3, 4], // Fuck off bastard
  "꺼져놈": [3, 4], // Fuck off bastard
  "꺼져년": [3, 5], // Fuck off bitch
  "닥쳐새끼": [3, 4], // Shut up bastard
  "닥쳐놈": [3, 4], // Shut up bastard
  "닥쳐년": [3, 4], // Shut up bitch
  "입닥쳐새끼": [3, 4], // Shut your mouth bastard
  "입닥쳐놈": [3, 4], // Shut your mouth bastard
  "입닥쳐년": [3, 4], // Shut your mouth bitch
  "주둥이닥쳐": [3, 4], // Shut your snout
  "주둥이쳐": [3, 4], // Shut snout
  "주둥이다물어": [3, 4], // Close your snout
  "아가리해": [3, 4], // Shut your mouth (vulgar slang)
  "아갈이해": [3, 4], // Shut your jaw (variant)
  "재수없는놈": [3, 4], // Unlucky bastard
  "재수없는년": [3, 4], // Unlucky bitch
  "재수없는새끼": [3, 4], // Unlucky bastard
  "재수없어": [3, 4], // Unlucky/hateful
  "짜증나는놈": [3, 4], // Annoying bastard
  "짜증나는년": [3, 4], // Annoying bitch
  "짜증나는새끼": [3, 4], // Annoying bastard
  "역겨운놈": [3, 4], // Disgusting bastard
  "역겨운년": [3, 4], // Disgusting bitch
  "역겨운새끼": [3, 4], // Disgusting bastard
  "구역질나는놈": [3, 4], // Nausea-inducing bastard
  "구역질나는년": [3, 4], // Nausea-inducing bitch
  "메스꺼운놈": [3, 4], // Sickening bastard
  "메스꺼운년": [3, 4], // Sickening bitch
  "토나온다": [3, 4], // Makes me vomit
  "토할것같다": [3, 4], // Feel like vomiting
  "보기싫다": [3, 4], // Hate seeing you
  "보기싫은놈": [3, 4], // Hate-seeing bastard
  "보기싫은년": [3, 4], // Hate-seeing bitch
  "눈에거슬리는놈": [3, 4], // Eye-sore bastard
  "눈에거슬리는년": [3, 4], // Eye-sore bitch
  "꼴보기싫은놈": [3, 4], // Hate-the-sight bastard
  "꼴보기싫은년": [3, 4], // Hate-the-sight bitch
  "존재자체가짜증": [3, 4], // Your very existence is annoying
  "살아있는게짜증": [3, 4], // Your being alive is annoying

  // ===== ADDITIONAL GAMING INSULTS =====
  "롤충새끼": [3, 4], // LOL bug bastard
  "피시방충": [1, 4], // PC-bang bug
  "피시방거지": [1, 4], // PC-bang beggar
  "핵유저": [1, 4], // Hack user
  "치터": [1, 4], // Cheater (Korean)
  "치팅": [1, 4], // Cheating (Korean)
  "매크로충": [1, 4], // Macro bug (cheater)
  "서버충": [1, 4], // Server bug
  "미꾸라지": [1, 4], // Loach (slippery player)
  "팀킬러": [1, 4], // Team killer
  "팀킬충": [1, 4], // Team-kill bug
  "트롤러": [1, 4], // Troller
  "트롤픽": [1, 4], // Troll pick
  "트롤충": [1, 4], // Troll bug
  "브론즈놈": [3, 4], // Bronze bastard (low rank)
  "실버따리": [1, 4], // Silver (low rank insult)
  "골드따리": [1, 4], // Gold (mid rank insult)
  "하드스턱": [1, 4], // Hard stuck
  "만년브론즈": [1, 4], // Permanent bronze
  "만년실버": [1, 4], // Permanent silver
  "승률충": [1, 4], // Win-rate bug
  "캐리못함": [1, 4], // Can't carry
  "딜못": [1, 4], // Can't deal damage
  "탱못": [1, 4], // Can't tank
  "힐못": [1, 4], // Can't heal
  "탈주충": [1, 4], // Deserter bug
  "탈주놈": [3, 4], // Deserter bastard
  "어그로충": [1, 4], // Aggro bug (troll)
  "어그로꾼": [1, 4], // Aggro person
  "키보드워리어": [1, 4], // Keyboard warrior
  "키워": [1, 4], // Keyboard warrior (abbreviated)

  // ===== BODY SHAMING =====
  "뚱뚱보": [1, 4], // Big fatso
  "살찐돼지": [1, 4], // Fat pig
  "뚱뚱한돼지": [1, 4], // Fat pig
  "못생긴새끼": [1, 4], // Ugly bastard
  "흉물스럽다": [3, 4], // Monstrous
  "볼품없는놈": [3, 4], // Worthless-looking bastard
  "볼품없는년": [3, 4], // Worthless-looking bitch
  "쪼끄만놈": [3, 4], // Tiny bastard
  "쪼끄만년": [3, 4], // Tiny bitch
  "땅꼬마": [3, 4], // Ground-midget
  "키작은놈": [3, 4], // Short bastard

  // ===== WORTH/STATUS INSULTS =====
  "거지같은놈": [3, 4], // Beggar-like bastard
  "거지같은년": [1, 4], // Beggar-like bitch
  "거지새끼": [3, 4], // Beggar bastard
  "거지놈": [3, 4], // Beggar bastard
  "거지년": [1, 4], // Beggar bitch
  "거렁뱅이": [1, 4], // Beggar/bum
  "쓸모없는새끼": [3, 4], // Useless bastard
  "무능한놈": [3, 4], // Incompetent bastard
  "무능한년": [1, 4], // Incompetent bitch
  "무능한새끼": [3, 4], // Incompetent bastard
  "무능력자": [1, 4], // Incompetent person
  "낙오자": [1, 4], // Dropout/failure
  "패배자": [1, 4], // Loser
  "패배자놈": [1, 4], // Loser bastard
  "패배자새끼": [1, 4], // Loser bastard
  "인생낙오자": [1, 4], // Life failure
  "인생쓰레기": [1, 4], // Life trash
  "인생실패자": [1, 4], // Life failure
  "인생폐급": [3, 4], // Life waste-class
  "사회부적응자": [1, 4], // Social misfit
  "사회쓰레기": [1, 4], // Social trash
  "잉여인간": [1, 4], // Surplus human
  "잉여놈": [3, 4], // Surplus bastard
  "잉여새끼": [3, 4], // Surplus bastard
  "바닥인생": [1, 4], // Bottom-tier life
  "밑바닥인간": [1, 4], // Bottom human
  "하류인생": [3, 4], // Low-class life
  "찌꺼기인생": [1, 4], // Dregs life
  "찌꺼기놈": [3, 4], // Dregs bastard
  "찌꺼기새끼": [3, 4], // Dregs bastard

  // ===== ADDITIONAL SLURS =====
  "쪽바리새끼": [3, 4], // Japanese bastard (derogatory)
  "짱개": [5, 4], // Chinese (derogatory variant)
  "짱개새끼": [3, 4], // Chinese bastard (derogatory variant)
  "떠거리": [5, 4], // Chinese group (derogatory)
  "양키새끼": [3, 4], // Yankee bastard
  "깜둥이새끼": [3, 4], // Dark-skinned bastard
  "동남아충": [5, 4], // Southeast Asian bug (derogatory)
  "다문화충": [5, 4], // Multicultural bug (derogatory)
  "미국놈": [3, 4], // American bastard
  "미국년": [5, 4], // American bitch

  // ===== ADDITIONAL NUMBER/SYMBOL EVASIONS =====
  "18놈": [3, 5], // 씨발놈 (18 sounds like 시발)
  "18새끼": [3, 5], // 씨발새끼 (18 sounds like 시발)
  "18년": [3, 5], // 씨발년 (18 sounds like 시발)
  "18아": [3, 5], // 시발아 (18 sounds like 시발)
  "ㅆ1ㅂ": [3, 5], // 씨발 abbreviated with number
  "ㅅ1ㅂ": [3, 5], // 시발 abbreviated with number
  // "o1": [3, 5], // 오이 → 왜 context evasion — false positive: model numbers, OpenAI o1
  "2발": [3, 5], // 이발 → 시발 evasion
  "10발": [3, 5], // 십발 → 씨발 evasion
  "10팔": [3, 5], // 십팔 → 씨팔 evasion
  "10새끼": [3, 5], // 십새끼 → 씨발새끼 evasion
  "ㅂ2": [3, 5], // 병신 number evasion
  "시bal": [3, 5], // Mixed Korean-English
  "씨bal": [3, 5], // Mixed Korean-English
  "개sae끼": [3, 5], // Mixed Korean-English
  "미chin": [3, 5], // Mixed Korean-English
  "좆gat은": [3, 5], // Mixed Korean-English
  "shi-bal": [3, 5], // Romanized with hyphen
  "ssi-bal": [3, 5], // Romanized with hyphen
  "gae-sae-kki": [3, 5], // Romanized with hyphens
  "byeong-sin": [3, 5], // Romanized with hyphen
  "jot-ka": [3, 5], // Romanized with hyphen

  // ===== ADDITIONAL 존나/졸라 VARIANTS =====
  "존내": [3, 5], // Fucking (vowel variant)
  "존니": [3, 5], // Fucking (vowel variant)
  "존나리게": [3, 5], // Fucking (extended)
  "좐나": [3, 5], // Fucking (consonant variant)
  "좐나게": [3, 5], // Fucking (consonant variant adverb)
  "쥰나": [3, 5], // Fucking (vowel variant)
  "쥰내": [3, 5], // Fucking (vowel variant)
  "ㅈㄴㅂㅅ": [3, 4], // 존나병신 abbreviation
  "ㅈㄴㅈㄹ": [3, 4], // 존나지랄 abbreviation
  "jola": [3, 4], // 졸라 (romanized)
  "jol la": [3, 5], // 졸라 (romanized spaced)

  // ===== ADDITIONAL COMPOUND INSULTS (NOUN + MODIFIER) =====
  "쓰레기같은인간": [1, 4], // Trash-like human
  "쓰레기같은새끼": [3, 4], // Trash-like bastard
  "쓰레기만도못한": [1, 4], // Worse than trash
  "짐승같은놈": [3, 4], // Animal-like bastard
  "짐승같은년": [1, 4], // Animal-like bitch
  "짐승만도못한": [1, 4], // Worse than an animal
  "개만도못한": [1, 4], // Worse than a dog
  "개만도못한놈": [3, 4], // Worse than a dog bastard
  "개만도못한년": [1, 4], // Worse than a dog bitch
  "돼지만도못한": [1, 4], // Worse than a pig
  "벌레같은놈": [3, 4], // Bug-like bastard
  "벌레같은년": [1, 4], // Bug-like bitch
  "구더기같은놈": [3, 4], // Maggot-like bastard
  "구더기같은년": [1, 4], // Maggot-like bitch
  "기생충같은놈": [3, 4], // Parasite-like bastard
  "기생충같은년": [1, 4], // Parasite-like bitch
  "쥐같은놈": [3, 4], // Rat-like bastard
  "쥐같은년": [1, 4], // Rat-like bitch
  "바퀴벌레같은": [4, 4], // Cockroach-like
  "바퀴벌레같은놈": [3, 4], // Cockroach-like bastard
  "바퀴벌레같은년": [4, 4], // Cockroach-like bitch
  "잡초같은놈": [3, 4], // Weed-like bastard
  "잡초같은년": [1, 4], // Weed-like bitch
  "배설물같은놈": [3, 4], // Excrement-like bastard
  "오줌같은놈": [3, 4], // Piss-like bastard
  "똥같은놈": [3, 4], // Shit-like bastard
  "똥같은년": [3, 5], // Shit-like bitch
  "똥같은새끼": [3, 4], // Shit-like bastard
  "똥물같은놈": [3, 4], // Sewage-like bastard
  "하수구같은놈": [3, 4], // Sewer-like bastard

  // ===== ADDITIONAL APPEARANCE INSULTS =====
  "얼굴값못하는": [1, 4], // Face not worth its price
  "얼굴도못생기고": [1, 4], // Ugly-faced and...
  "얼굴이죄": [1, 4], // Face is a sin (so ugly)
  "꼴값하네": [1, 4], // Living up to your looks (ugly)
  "꼬라지하고는": [1, 4], // Look at that state
  "꼬라지좋다": [1, 4], // Nice state (sarcastic)
  "꼬라지봐라": [1, 4], // Look at that state
  "몰골봐라": [1, 4], // Look at that appearance
  "몰골이그게뭐냐": [1, 4], // What is that appearance
  "꼬라지하곤": [1, 4], // With that state
  "꼴좋다": [1, 4], // Nice sight (sarcastic)
  "얼굴찌푸리지마": [1, 4], // Don't make that face
  "면상좀봐": [1, 4], // Look at that face (derogatory)
  "면상봐라": [1, 4], // Look at that face
  "그면상으로": [1, 4], // With that face
  "대가리좀봐": [1, 4], // Look at that head

  // ===== ADDITIONAL INTELLIGENCE INSULTS =====
  "머리에뭐들었냐": [1, 4], // What's in your head
  "머리가비었냐": [1, 4], // Is your head empty
  "뇌가없냐": [1, 4], // Do you have no brain
  "뇌가비었냐": [1, 4], // Is your brain empty
  "뇌를빼고사냐": [1, 4], // Living without a brain
  "생각이란걸해봐": [1, 4], // Try thinking for once
  "생각좀해라": [1, 4], // Think for once
  "바보같은놈": [3, 4], // Foolish bastard
  "바보같은년": [1, 4], // Foolish bitch
  "바보같은새끼": [3, 4], // Foolish bastard
  "등신같은놈": [3, 4], // Idiot-like bastard
  "등신같은년": [1, 4], // Idiot-like bitch
  "저능아놈": [3, 4], // Imbecile bastard
  "저능아년": [1, 4], // Imbecile bitch
  "저능아새끼": [3, 4], // Imbecile bastard
  "IQ낮은놈": [3, 4], // Low-IQ bastard
  "IQ바닥놈": [3, 4], // Floor-IQ bastard
  "머리나쁜놈": [3, 4], // Bad-headed bastard
  "무식한놈": [3, 4], // Ignorant bastard
  "무식한년": [1, 4], // Ignorant bitch
  "무식한새끼": [3, 4], // Ignorant bastard
  "배운게없는놈": [3, 4], // Uneducated bastard
  "상식없는놈": [3, 4], // No-common-sense bastard
  "교양없는놈": [3, 4], // Uncultured bastard
  "교양없는년": [1, 4], // Uncultured bitch

  // ===== ADDITIONAL SOCIAL MEDIA/ONLINE INSULTS =====
  "좋아요거지": [1, 4], // Like-beggar
  "구독거지": [1, 4], // Subscribe-beggar
  "팔로워거지": [1, 4], // Follower-beggar
  "관심거지": [1, 4], // Attention-beggar
  "관심병": [1, 4], // Attention sickness
  "관심병자": [1, 4], // Attention-sick person
  "관심병환자": [1, 4], // Attention-sickness patient
  "자기과시": [1, 4], // Self-showing off
  "허세충": [1, 4], // Pretension bug
  "허세놈": [3, 4], // Pretension bastard
  "허세년": [1, 4], // Pretension bitch
  "허세부리지마": [1, 4], // Stop pretending
  "좆도아닌것이": [4, 4], // Thing that's not even a dick
  "주제파악좀해": [1, 4], // Know your place
  "주제넘다": [1, 4], // Overstepping your bounds
  "주제넘는놈": [3, 4], // Overstepping bastard
  "주제넘는년": [1, 4], // Overstepping bitch
  "분수를알아라": [1, 4], // Know your place
  "분수를모르다": [1, 4], // Not knowing one's place
  "잘난척하지마": [1, 4], // Don't act superior
  "잘난척하는놈": [3, 4], // Acting-superior bastard
  "잘난척하는년": [1, 4], // Acting-superior bitch
  "쇼하지마": [1, 4], // Don't put on a show
  "쇼하는놈": [3, 4], // Show-off bastard
  "오지랖충": [1, 4], // Busybody bug
  "오지랖넓다": [1, 4], // Wide busybody (too meddling)
  "참견충": [1, 4], // Meddling bug
  "참견하지마": [1, 4], // Don't meddle
  "상관마": [1, 4], // None of your business
  "니가뭔데": [1, 4], // Who are you to...
  "니가뭔데참견": [1, 4], // Who are you to meddle
  "쓸데없는소리": [1, 4], // Useless talk
  "개소리하지마": [3, 5], // Don't talk dog-shit
  "뻘소리하지마": [1, 4], // Don't talk nonsense
  "헛소리하지마": [1, 4], // Don't talk nonsense
  "지껄이지마": [1, 4], // Don't babble

  // ===== ADDITIONAL WORKPLACE/SCHOOL INSULTS =====
  "왕따": [1, 4], // Outcast/bullying target
  "왕따시키다": [1, 4], // To ostracize
  "왕따놈": [3, 4], // Outcast bastard
  "왕따새끼": [3, 4], // Outcast bastard
  "따돌리다": [1, 4], // To ostracize
  "따돌림": [1, 4], // Ostracism
  "은따": [1, 4], // Hidden outcast
  "전따": [1, 4], // Full outcast
  "핵인싸": [1, 4], // Nuclear insider (can be mocking)
  "아싸": [1, 4], // Outsider (can be derogatory)
  "아싸새끼": [3, 4], // Outsider bastard
  "초딩": [1, 4], // Elementary schooler (derogatory)
  "초딩새끼": [3, 4], // Elementary schooler bastard
  "중딩": [1, 4], // Middle schooler (derogatory)
  "중딩새끼": [3, 4], // Middle schooler bastard
  "고딩": [1, 4], // High schooler (can be derogatory)
  "대딩": [1, 4], // College student (can be derogatory)
  "틀딱충": [1, 4], // Old person bug
  "틀딱놈": [3, 4], // Old person bastard
  "꼰대놈": [3, 4], // Preachy bastard
  "꼰대새끼": [3, 4], // Preachy bastard
  "꼰대짓": [1, 4], // Preachy behavior
  "라떼놈": [3, 4], // Latte bastard (in my days... person)
  "라떼충": [1, 4], // Latte bug

  // ===== ADDITIONAL RELIGIOUS/POLITICAL INSULTS =====
  "개독": [2, 3], // Dog-Christian (derogatory)
  "개독교": [2, 3], // Dog-Christianity
  "개독놈": [3, 4], // Dog-Christian bastard
  "개독년": [2, 3], // Dog-Christian bitch
  "틀딱보수": [2, 3], // Old conservative
  "우좀": [2, 3], // Right-zombie
  "빨갱이새끼": [3, 4], // Commie bastard
  "빨갱이놈": [3, 4], // Commie bastard
  "수꼴놈": [3, 4], // Extreme conservative bastard
  "종북": [2, 3], // Pro-North Korea (derogatory)
  "종북새끼": [3, 4], // Pro-NK bastard
  "종북놈": [3, 4], // Pro-NK bastard
  "국뽕": [2, 3], // Extreme nationalism (derogatory)
  "국뽕충": [2, 3], // Extreme nationalism bug
  "국까": [2, 3], // Country-denigrator
  "국까새끼": [3, 4], // Country-denigrator bastard
  "매국노새끼": [3, 4], // Traitor bastard
  "친일파": [2, 3], // Pro-Japanese (derogatory)
  "친일파새끼": [3, 4], // Pro-Japanese bastard

  // ===== FAMILY-RELATED INSULTS =====
  "니애비": [1, 4], // Your dad
  "느그애미": [1, 4], // Your mom (dialect)
  "느그애비": [1, 4], // Your dad (dialect)
  "니엄마": [1, 4], // Your mom
  "니아빠": [1, 4], // Your dad
  "야엄마없냐": [1, 4], // Hey, don't you have a mother?
  "애미뒤졌냐": [1, 4], // Is your mother dead?
  "애비뒤졌냐": [1, 4], // Is your father dead?
  "애미나팔아": [1, 4], // Go sell your mother
  "니미뒤진": [1, 4], // Your mother dead (prefix)
  "니미뒤진놈": [3, 4], // Your-mother-dead bastard
  "니미뒤진년": [1, 4], // Your-mother-dead bitch
  "니미뒤진새끼": [3, 4], // Your-mother-dead bastard
  "어미를팔아먹은놈": [3, 4], // Bastard who sold his mother
  "부모없는놈": [3, 4], // Parentless bastard
  "부모얼굴에먹칠": [1, 4], // Disgrace to parents' faces
  "조상님얼굴에먹칠": [1, 4], // Disgrace to ancestors
  "삼대가욕한다": [1, 4], // Three generations curse you
  "집안망신": [1, 4], // Family disgrace
  "집안수치": [1, 4], // Family shame
  "가문의수치": [1, 4], // Disgrace of the family

  // ===== ADDITIONAL MISCELLANEOUS INSULTS =====
  "꼬져": [1, 4], // Get lost (variant of 꺼져)
  "꼬져라": [1, 4], // Get lost (emphatic)
  "꺼져라": [1, 4], // Get lost (emphatic)
  "엿이나먹어라": [3, 5], // Go eat yeot (go fuck yourself)
  "엿이나처먹어": [1, 4], // Go stuff yeot (vulgar)
  "좆이나먹어라": [4, 4], // Go eat a dick
  "보지나핥아라": [4, 4], // Go lick a pussy
  "똥이나먹어라": [3, 5], // Go eat shit
  "똥이나처먹어": [3, 5], // Go stuff shit (vulgar)
  "조용히해라": [1, 4], // Shut up (mild)
  "시끄러워": [1, 4], // You're noisy
  "시끄러운놈": [3, 4], // Noisy bastard
  "시끄러운년": [1, 4], // Noisy bitch
  "입을다물어": [1, 4], // Close your mouth
  "입다물어": [1, 4], // Shut your mouth
  "아구다물어": [1, 4], // Shut your jaw
  "떠들지마": [1, 4], // Don't chatter
  "재잘거리지마": [1, 4], // Don't babble
  "지껄이다": [1, 4], // To babble (derogatory)
  "조잘거리다": [1, 4], // To chirp (derogatory)
  "뒤통수치다": [1, 4], // Backstab
  "뒤통수친놈": [1, 4], // Backstabber
  "뒤통수친년": [1, 4], // Backstabbing bitch
  "배신자": [1, 4], // Traitor
  "배신자놈": [3, 4], // Traitor bastard
  "배신자새끼": [3, 4], // Traitor bastard
  "사기꾼": [1, 4], // Swindler
  "사기꾼놈": [3, 4], // Swindler bastard
  "사기꾼새끼": [3, 4], // Swindler bastard
  "거짓말쟁이": [1, 4], // Liar
  "거짓말쟁이놈": [3, 4], // Liar bastard
  "구라치다": [1, 3], // To lie (slang)
  "구라쟁이": [1, 3], // Liar (slang)
  "뻥치다": [1, 3], // To lie (slang)
  "뻥쟁이": [1, 3], // Liar (slang)
  "뻥쟁이놈": [3, 4], // Liar bastard
  "약올리다": [1, 4], // To tease/provoke
  "약올리지마": [1, 4], // Don't provoke me
  "눈깔깐다": [1, 4], // Rolling eyes (aggressive)
  "눈깔뒤집다": [1, 4], // Eyes flipping (angry)

  // === Extended Korean Words ===
  "개차반": [3, 4], // Scoundrel / worthless person (lit. dog food bowl)
  "거유": [3, 4], // Large breasts (sexually objectifying)
  "계집년": [3, 4], // Bitch / derogatory term for woman
  "고자": [3, 4], // Eunuch / impotent (derogatory)
  "근친": [4, 5], // Incest
  "노모": [3, 4], // Your mother (vulgar insult)
  "때씹": [4, 5], // Vulgar sexual act (variant)
  "뙤놈": [4, 5], // Racial slur for Chinese/East Asian people
  "로리타": [5, 5], // Lolita (pedophilic reference)
  "망가": [3, 4], // Manga (often used for erotic/hentai content)
  "바바리맨": [3, 4], // Flasher / exhibitionist
  "씹빨": [4, 5], // Vulgar sexual act
  "씹알": [4, 5], // Vulgar sexual term
  "암캐": [3, 4], // Bitch (lit. female dog - derogatory)
  "애자": [3, 5], // Ableist slur for disabled person
  "야애니": [3, 4], // Erotic anime / hentai
  "엄창": [4, 5], // Your mother / slut (vulgar compound)
  "에로": [2, 4], // Erotic / sexual content
  "유모": [3, 4], // Wet nurse (used as sexual slur)
  "육갑": [3, 4], // Nonsense / bullshit (lit. sixty-year cycle)
  "은꼴": [3, 4], // Hidden/secret erotic content
  "잡년": [3, 4], // Worthless bitch
  "종간나": [4, 5], // Fuck (variant of 씨발/씹)
  "좆만": [4, 5], // Tiny dick (vulgar)
  "죽일년": [4, 5], // Bitch worth killing (death threat)
  "쥐좆": [4, 5], // Tiny dick (lit. mouse dick)
  "직촬": [3, 4], // Voyeur / illicit recording
  "하드코어": [3, 4], // Hardcore (sexual)
  "호로": [3, 4], // Bastard / ill-born (archaic insult)
  "후레아들": [3, 4], // Ill-bred son / bastard
  "후장": [4, 5], // Anus / anal sex (vulgar)
  "희쭈그리": [2, 4], // Freak / weirdo
};
const koreanBadWords: Record<string, { s: number; c: number }> = {};
for (const [k, [s, c]] of Object.entries(_d)) {
    koreanBadWords[k] = { s, c };
}
export default koreanBadWords;

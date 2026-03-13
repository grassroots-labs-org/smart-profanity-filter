/**
 * Comprehensive isRomanized() test suite.
 *
 * Tests the romanization detector against:
 *   - True romanized text (Hindi, Urdu, Arabic, Russian, Japanese, Korean,
 *     Chinese Pinyin, Thai, Bengali, Tamil, Telugu, Vietnamese, Persian,
 *     Nepali, Gujarati)
 *   - Native Latin-script languages (English, French, German, Spanish, Italian,
 *     Portuguese, Dutch, Swedish, Norwegian, Danish, Polish, Czech, Romanian,
 *     Turkish, Indonesian, Malay, Tagalog, Swahili, Finnish, Hungarian,
 *     Croatian, Vietnamese w/ diacritics, Afrikaans, Catalan, Galician,
 *     Basque, Slovak, Lithuanian, Latvian, Estonian, Maltese, Welsh,
 *     Albanian, Slovenian)
 *   - Edge cases: SMS/abbreviated text, English with loanwords, long texts
 */

import {
  detectRomanization,
  isRomanized,
  analyzeCluster,
  trigramFingerprint,
} from "../src/romanization-detector.ts";

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function expectRomanized(text: string, label?: string) {
  const r = detectRomanization(text);
  expect({
    label: label ?? text.slice(0, 50),
    isRomanized: r.isRomanized,
    confidence: r.confidence,
    signals: r.signals,
  }).toMatchObject({ isRomanized: true });
}

function expectNotRomanized(text: string, label?: string) {
  const r = detectRomanization(text);
  expect({
    label: label ?? text.slice(0, 50),
    isRomanized: r.isRomanized,
    confidence: r.confidence,
    signals: r.signals,
  }).toMatchObject({ isRomanized: false });
}

// ═══════════════════════════════════════════════════════════════════════════════
// TRUE ROMANIZED — should ALL return isRomanized: true
// ═══════════════════════════════════════════════════════════════════════════════

describe("isRomanized", () => {
  describe("true romanized text", () => {
    // ─── Hindi (Devanagari → Latin) ─────────────────────────────────────
    describe("Hindi romanized", () => {
      test.each([
        ["mujhe bahut accha laga yeh dekhkar ki tum aa gaye"],
        ["kya haal hai bhai sab theek hai na aaj"],
        ["aaj mausam bahut achha hai bahar chalte hain"],
        ["mujhe lagta hai ki yeh bahut mushkil kaam hai lekin"],
        ["tum kahan jaa rahe ho aaj shaam ko milte hain"],
        ["hamara desh bahut sundar hai aur log bahut achhe hain"],
        ["ghar pe khana khao phir bahar chalo thoda ghoomte hain"],
        ["padhai khatam karke dost se milne ja raha hoon abhi"],
        ["chai peene chalo yaar bahut thandi hai aaj bahar"],
        ["kal raat ko bahut baarish hui thi sadak pe paani tha"],
        ["dost ne bola ki kal party hai ghar pe aana zaroor"],
        ["khana banana seekho apne haath se bahut maza aata hai"],
        ["yeh gaana bahut achha hai mujhe bahut pasand aaya"],
        ["mere ghar ke paas ek bahut bada park hai jahan log subah shaam ghoomte hain"],
        ["aaj maine apne dost ko phone kiya aur usne kaha ki wo bahut busy hai"],
      ])("'%s' → romanized", (text) => expectRomanized(text));
    });

    // ─── Urdu (Arabic script → Latin) ───────────────────────────────────
    describe("Urdu romanized", () => {
      test.each([
        ["mera naam ali hai aur main karachi se hoon bhai"],
        ["aap kaise hain sab kuch theek hai inshallah"],
        ["yeh kitab bahut achi hai maine parh li hai puri"],
        ["khuda hafiz bhai apna khayal rakhna hamesha yaad rakhna"],
        ["ramzan mubarak sab ko khushi mein rehna hamesha allah hafiz"],
        ["dua karo sab ke liye allah sab ki madad kare hamesha"],
        ["lahore bahut khoobsurat sheher hai aur log bahut mehman nawaz hain"],
      ])("'%s' → romanized", (text) => expectRomanized(text));
    });

    // ─── Arabic (Arabic script → Latin) ─────────────────────────────────
    describe("Arabic romanized", () => {
      test.each([
        ["ana bahebak ya habibi keefak el yom mashallah"],
        ["shukran jazeelan ya sadeeqi kayf halak alyawm"],
        ["ana min masr wa ahlan wa sahlan bikum jamian"],
        ["al hamdu lillah ana bikhair wa inta kayf halak"],
        ["yalla khalas ana mashi min hina la habibi wallah"],
        ["mashi ya akhi ana rayeh lal beit halla yalla bye"],
        ["wallah ana mish fahim shu bidak tihki ya zalameh"],
        ["ahlan wa sahlan ya habaybi keefkum elyoum inshallah tamam"],
      ])("'%s' → romanized", (text) => expectRomanized(text));
    });

    // ─── Russian (Cyrillic → Latin) ─────────────────────────────────────
    describe("Russian romanized", () => {
      test.each([
        ["privet kak dela u tebya segodnya vsyo horosho"],
        ["ya khochu poyti v magazin kupit khleb i moloko"],
        ["mne nravitsya eta kniga ona ochen interesnaya chitayu"],
        ["zavtra budet khoroshaya pogoda mozhno poyti gulyat v park"],
        ["spasibo bolshoye za pomoshch mne ochen priyatno bylo"],
        ["davai poydem v kino segodnya vecherom budet interesno"],
        ["mne ochen nravitsya russkaya kuhnya borshch i pelmeni"],
        ["u menya zavtra ekzamen ya dolzhen gotovitsya vsyu noch"],
      ])("'%s' → romanized", (text) => expectRomanized(text));
    });

    // ─── Japanese (Romaji) ──────────────────────────────────────────────
    describe("Japanese romanized (romaji)", () => {
      test.each([
        ["watashi wa nihongo o benkyou shite imasu ganbatte"],
        ["kyou wa totemo ii tenki desu ne sampo shimashou"],
        ["sumimasen kono hon wa ikura desu ka oshiete kudasai"],
        ["nihon no bunka wa totemo omoshiroi to omoimasu watashi"],
        ["ashita tomodachi to issho ni eiga o mimasu tanoshimi"],
        ["kinou tomodachi to issho ni sushi o tabemashita oishikatta"],
        ["nihongo no benkyou wa muzukashii desu ga tanoshii desu"],
        ["hajimemashite watashi wa tanaka desu douzo yoroshiku onegaishimasu"],
      ])("'%s' → romanized", (text) => expectRomanized(text));
    });

    // ─── Korean (Hangul → Latin) ────────────────────────────────────────
    describe("Korean romanized", () => {
      test.each([
        ["annyeonghaseyo hangugeo reul gongbu hago isseoyo jal"],
        ["oneul nalssiga joeyo sancheck halkka yo gamsahamnida"],
        ["igeon eolmayeyo yeogi eseo meokgo sipeoyo juseyo"],
        ["hangugeo gongbu hago isseoyo hwaiting jal haeboseyo"],
        ["oneul mwo haeyo uri gachi bap meokgo sipeoyo jeonyeoge"],
        ["hangugeo gongbu haneun geot joeyo hwaiting haja uri gachi"],
        ["annyeonghaseyo mannaseo bangapseumnida jeoneun hangugin imnida"],
      ])("'%s' → romanized", (text) => expectRomanized(text));
    });

    // ─── Chinese (Pinyin) ───────────────────────────────────────────────
    describe("Chinese Pinyin", () => {
      test.each([
        ["wo shi zhongguo ren wo ai zhongguo hen duo"],
        ["jintian tianqi hen hao women yiqi qu gongyuan ba"],
        ["ni hao ma wo hen gaoxing renshi ni pengyou"],
        ["zhege dongxi duoshao qian wo xiang mai yige"],
        ["xiexie ni de bangzhu women mingtian jian ba zaijian"],
        ["women qu chifan ba jintian wanshang chi shenme hao ne"],
        ["zhege difang hen piaoliang wo xihuan zher de fengjing"],
        ["wo jintian hen mang yinwei gongzuo hen duo xianzai hen lei"],
      ])("'%s' → romanized", (text) => expectRomanized(text));
    });

    // ─── Thai (Thai script → Latin) ─────────────────────────────────────
    describe("Thai romanized", () => {
      test.each([
        ["sawadee krap sabai dee mai wan nee arai dee"],
        ["khob khun krap phom cheu arai pai nai dee krap"],
        ["arai na krap mai khao jai phom sabai dee krap"],
        ["sawadee kha chan cheu noi khob khun kha pai nai dee"],
      ])("'%s' → romanized", (text) => expectRomanized(text));
    });

    // ─── Bengali (Bengali script → Latin) ───────────────────────────────
    describe("Bengali romanized", () => {
      test.each([
        ["amar naam rahim ami dhaka theke eshechi apnar ki"],
        ["tumi kemon acho aaj ke ami bhalo achi dhonnobad"],
        ["apni kothay jacchen aaj ke bhalobashi tomar shathe"],
        ["ami bhalo achi tumi kemon acho dada boudi kothay gelo"],
        ["khub bhalo lagche aaj thanda hawa dichhe baire ghure ashi"],
        ["amar bhai aaj dhaka theke eshechi bhalobashi tomar shathe thakbo"],
      ])("'%s' → romanized", (text) => expectRomanized(text));
    });

    // ─── Tamil (Tamil script → Latin) ───────────────────────────────────
    describe("Tamil romanized", () => {
      test.each([
        ["vanakkam eppadi irukkinga naan nalla irukken nandri"],
        ["enna panreenga innikku naan velaikku poren nandri"],
        ["naan romba nalla irukkinga ungalukku nandri solren"],
        ["neenga eppadi irukkinga naan romba nalla irukkinga nandri"],
        ["vanakkam nanbaa eppadi irukkeenga naan nalla irukkeen nandri romba"],
      ])("'%s' → romanized", (text) => expectRomanized(text));
    });

    // ─── Telugu (Telugu script → Latin) ──────────────────────────────────
    describe("Telugu romanized", () => {
      test.each([
        ["meeru ela unnaru nenu baagunnanu dhanyavadamulu meeku"],
        ["eppudu vastaru nenu intiki veltunnanu chala santosham"],
        ["namaskaram snehithudu ela unnaru nenu baagunnanu dhanyavaadalu"],
      ])("'%s' → romanized", (text) => expectRomanized(text));
    });

    // ─── Vietnamese without diacritics ──────────────────────────────────
    describe("Vietnamese without diacritics", () => {
      test.each([
        ["toi rat vui duoc gap ban hom nay troi dep qua"],
        ["chung toi di hoc moi ngay truong hoc rat tot lam"],
        ["hom nay troi dep lam chung ta di choi ngoai troi nhe"],
      ])("'%s' → romanized", (text) => expectRomanized(text));
    });

    // ─── Persian/Farsi (Arabic script → Latin) ──────────────────────────
    describe("Persian romanized", () => {
      test.each([
        ["salam chetori halet khube man khubam merci doost"],
        ["emruz hava kheili khube birun berim ghaza bokhorim"],
        ["man mikham beram bazaar kheili chizha lazem daram"],
        ["salam doostam chetori halet khube lotfan bia inja"],
      ])("'%s' → romanized", (text) => expectRomanized(text));
    });

    // ─── Nepali (Devanagari → Latin) ────────────────────────────────────
    describe("Nepali romanized", () => {
      test.each([
        ["namaste tapai kasto hunuhunchha ma thik chhu dhanyabaad"],
        ["tapai lai bhetna paaye khushi lagyo aaja mausam ramro chha"],
      ])("'%s' → romanized", (text) => expectRomanized(text));
    });

    // ─── Gujarati (Gujarati → Latin) ────────────────────────────────────
    describe("Gujarati romanized", () => {
      test.each([
        ["kem cho tamne malvanu gamyu mane bahut maja aavi aaj"],
        ["tamaru naam shu chhe mane tamne malvanu bahut gamyu"],
      ])("'%s' → romanized", (text) => expectRomanized(text));
    });
  });

  // ═══════════════════════════════════════════════════════════════════════════
  // NOT ROMANIZED — native Latin-script languages
  // ═══════════════════════════════════════════════════════════════════════════

  describe("native Latin-script text (NOT romanized)", () => {
    // ─── English ────────────────────────────────────────────────────────
    describe("English", () => {
      test.each([
        ["The quick brown fox jumps over the lazy dog near the riverbank while the birds sing in the tall oak trees above"],
        ["We are pleased to announce that the annual conference will be held in downtown Chicago this September with keynote speakers from around the world"],
        ["hey guys just wanted to let you know the meeting is moved to three pm tomorrow so make sure you update your calendars"],
        ["the server crashed because the database connection pool was exhausted during peak traffic and the load balancer failed"],
        ["the results of the study indicate a significant correlation between diet and cognitive performance suggesting nutritional interventions"],
        ["the team scored three goals in the second half to win the championship game after trailing by two goals at halftime"],
        ["preheat the oven to three hundred fifty degrees and mix the flour with butter then add the eggs and vanilla extract"],
        ["the defendant was found not guilty on all counts after the jury deliberated for three days considering all evidence"],
        ["the patient presented with acute abdominal pain and was referred for imaging studies to rule out appendicitis"],
        ["Muhammad and Raj went to the park with their friend Chen and his sister Yuki and they played basketball until sunset"],
        ["what the fuck are you doing you stupid piece of shit asshole get the hell out of here before I lose my damn mind"],
        ["join us for a community barbecue this saturday at the park everyone is welcome bring your family and friends"],
        ["the annual fundraiser gala will feature live music and a silent auction with proceeds going to local charities"],
        ["have a great day see you tomorrow morning at work and dont forget to bring the report we were working on"],
        ["does anyone know where the nearest pharmacy is around here because I need to pick up a prescription"],
      ])("'%s' → NOT romanized", (text) => expectNotRomanized(text));
    });

    // ─── English event descriptions ─────────────────────────────────────
    describe("English events", () => {
      test.each([
        ["free yoga class in the park every sunday morning bring a mat"],
        ["volunteer cleanup day at the beach this saturday at nine am"],
        ["open mic night at the coffee shop sign up starts at seven"],
        ["basketball tournament this weekend registration is now open for teams"],
        ["its gonna rain all week better bring an umbrella to work"],
        ["this restaurant has amazing pasta but the service was slow"],
        ["Annual Summer Music Festival featuring over 30 bands across four stages"],
        ["5K fun run through Riverside Park to benefit the children's hospital"],
        ["Learn to make authentic Italian pasta from scratch ingredients included"],
        ["48-hour hackathon focused on climate change solutions teams of 2-5 people"],
        ["Annual charity gala benefiting the local food bank silent auction dinner and dancing"],
        ["Diwali celebration with traditional dance performances henna art stations and vegetarian feast"],
      ])("'%s' → NOT romanized", (text) => expectNotRomanized(text));
    });

    // ─── English with loanwords ─────────────────────────────────────────
    describe("English with loanwords", () => {
      test.each([
        ["Priya and Takeshi are coming to the hackathon with Alejandro and Bjorn this weekend"],
        ["lets get some tikka masala and naan bread with chutney and raita tonight"],
        ["today we practiced pranayama and asana followed by shavasana and meditation namaste"],
        ["the sensei taught us kata and kumite techniques during karate class today very good"],
        ["we listened to some amazing bossa nova and samba at the brazilian festival last night"],
        ["we visited the souk in marrakech and bought some tagine and couscous for dinner"],
        ["the kubernetes cluster failed to deploy the nginx reverse proxy config"],
        ["she ordered pho and banh mi from the vietnamese restaurant downtown"],
        ["the dojo offers aikido and judo classes for beginners every wednesday evening"],
        ["our chef prepared a beautiful meze platter with hummus baba ghanoush and falafel"],
      ])("'%s' → NOT romanized", (text) => expectNotRomanized(text));
    });

    // ─── French ─────────────────────────────────────────────────────────
    describe("French", () => {
      test.each([
        ["Nous avons passé une excellente soirée avec nos amis au restaurant hier"],
        ["Nous avons passe une excellente soiree avec nos amis au restaurant hier soir"],
        ["je suis vraiment content de te voir ca fait longtemps mon ami comment"],
        ["putain de merde va te faire foutre espece de connard imbecile"],
        ["Rejoignez-nous pour une soiree exceptionnelle de musique francaise au theatre municipal"],
        ["le president a annonce de nouvelles mesures pour lutter contre le changement climatique"],
        ["bonjour comment allez vous je suis tres heureux de vous voir"],
        ["ce soir on mange du poulet roti avec des pommes de terre"],
        ["venez decouvrir notre marche artisanal ce dimanche matin au centre ville"],
        ["il fait tres beau aujourd hui on devrait aller se promener au parc"],
        ["ce restaurant propose une cuisine delicieuse mais le service est lent"],
      ])("'%s' → NOT romanized", (text) => expectNotRomanized(text));
    });

    // ─── German ─────────────────────────────────────────────────────────
    describe("German", () => {
      test.each([
        ["Die Universität München bietet ausgezeichnete Studiengänge für internationale Studenten"],
        ["Die Universitat Munchen bietet ausgezeichnete Studiengange fur internationale Studenten an"],
        ["ich bin heute echt mude und will einfach nur nach hause gehen schlafen"],
        ["Scheisse du Arschloch halt die Fresse du Hurensohn Wichser Idiot"],
        ["Kommen Sie zu unserem jahrlichen Strassenfest mit Bratwursten und Bier am Samstag"],
        ["die Regierung hat neue Massnahmen gegen den Klimawandel angekuendigt heute Morgen"],
        ["guten morgen wie geht es Ihnen heute bin froh Sie zu sehen"],
        ["heute abend essen wir schnitzel mit kartoffelsalat und ein bier"],
        ["wir laden Sie herzlich ein zum Sommerfest mit Livemusik und Grillbuffet"],
        ["morgen wird es regnen vergiss den Regenschirm nicht mitzunehmen"],
      ])("'%s' → NOT romanized", (text) => expectNotRomanized(text));
    });

    // ─── Spanish ────────────────────────────────────────────────────────
    describe("Spanish", () => {
      test.each([
        ["La universidad ofrece programas de ingeniería excelentes para estudiantes internacionales"],
        ["La universidad ofrece programas de ingenieria excelentes para estudiantes internacionales hoy"],
        ["oye que tal como estas hace mucho tiempo que no te veo amigo mio"],
        ["hijo de puta que mierda es esta pendejo cabron idiota estupido"],
        ["los invitamos a nuestra fiesta de verano con musica en vivo y comida tipica"],
        ["buenos dias como estas espero que todo ande bien por alla"],
        ["vamos a comer tacos y burritos en el restaurante mexicano"],
        ["fiesta de cumpleanos este sabado en mi casa todos estan invitados"],
        ["manana va a llover todo el dia mejor lleva paraguas al trabajo"],
        ["este cafe tiene un ambiente muy agradable y el personal es amable"],
      ])("'%s' → NOT romanized", (text) => expectNotRomanized(text));
    });

    // ─── Italian ────────────────────────────────────────────────────────
    describe("Italian", () => {
      test.each([
        ["L'università offre eccellenti programmi di ingegneria per studenti provenienti da tutto il mondo"],
        ["ciao come stai oggi fa un tempo bellissimo andiamo al parco insieme"],
        ["stasera mangiamo la pizza margherita con mozzarella fresca e basilico buonissimo"],
        ["buongiorno come stai spero che tu stia bene ci vediamo dopo"],
        ["vi invitiamo alla nostra festa di compleanno sabato sera al ristorante"],
        ["festa di quartiere con musica dal vivo e cibo tradizionale sabato sera"],
        ["domani piove tutto il giorno meglio portare ombrello e giacca pesante"],
      ])("'%s' → NOT romanized", (text) => expectNotRomanized(text));
    });

    // ─── Portuguese ─────────────────────────────────────────────────────
    describe("Portuguese", () => {
      test.each([
        ["A universidade oferece excelentes programas de engenharia para estudantes internacionais hoje"],
        ["ola como voce esta faz muito tempo que nao nos vemos amigo meu"],
        ["bom dia como voce esta tudo bem por aqui espero que sim"],
        ["cara vamos la no churrasco no fim de semana vai ser demais"],
        ["festa junina no proximo sabado com musica ao vivo e comida tipica"],
        ["amanha vai chover o dia inteiro melhor levar guarda chuva para trabalho"],
      ])("'%s' → NOT romanized", (text) => expectNotRomanized(text));
    });

    // ─── Dutch ──────────────────────────────────────────────────────────
    describe("Dutch", () => {
      test.each([
        ["De universiteit biedt uitstekende ingenieursprogramma's voor internationale studenten aan vandaag"],
        ["hallo hoe gaat het met jou ik heb je lang niet gezien vriend"],
        ["goedemorgen hoe gaat het vandaag met jou alles goed hier"],
        ["buurtfeest aanstaande zaterdag met live muziek en barbecue voor iedereen"],
        ["morgen gaat het regenen de hele dag neem een paraplu mee naar kantoor"],
      ])("'%s' → NOT romanized", (text) => expectNotRomanized(text));
    });

    // ─── Scandinavian ───────────────────────────────────────────────────
    describe("Scandinavian", () => {
      test.each([
        ["Universitetet erbjuder utmärkta ingenjörsprogram för internationella studenter från hela världen"],
        ["hej hur mar du idag jag maste handla mat efter jobbet"],
        ["Universitetet tilbyr utmerkede ingeniørprogrammer for internasjonale studenter fra hele verden"],
        ["hei hvordan har du det i dag alt bra her hjemme hos oss"],
        ["Universitetet tilbyder fremragende ingeniørprogrammer for internationale studerende fra hele verden"],
        ["hej hvordan gar det med dig vi ses i morgen til festen"],
      ])("'%s' → NOT romanized", (text) => expectNotRomanized(text));
    });

    // ─── Polish ─────────────────────────────────────────────────────────
    describe("Polish", () => {
      test.each([
        ["Uniwersytet oferuje doskonale programy inzynierskie dla studentow miedzynarodowych z calego swiata"],
        ["czesc jak sie masz dawno cie nie widzialem co slychac u ciebie"],
        ["dzien dobry jak sie pan miewa dzisiaj pogoda jest ladna"],
      ])("'%s' → NOT romanized", (text) => expectNotRomanized(text));
    });

    // ─── Czech ──────────────────────────────────────────────────────────
    describe("Czech", () => {
      test.each([
        ["Univerzita nabizi vynikajici inzenyrske programy pro mezinarodni studenty z celeho sveta"],
        ["ahoj jak se mas dneska je hezky pocasi pojdme ven na pivo"],
      ])("'%s' → NOT romanized", (text) => expectNotRomanized(text));
    });

    // ─── Romanian ───────────────────────────────────────────────────────
    describe("Romanian", () => {
      test.each([
        ["Universitatea ofera programe excelente de inginerie pentru studenti internationali din lumea intreaga"],
        ["buna ziua cum te simti azi vremea este frumoasa afara hai la plimbare"],
      ])("'%s' → NOT romanized", (text) => expectNotRomanized(text));
    });

    // ─── Turkish ────────────────────────────────────────────────────────
    describe("Turkish", () => {
      test.each([
        ["Üniversite uluslararası öğrenciler için mükemmel mühendislik programları sunmaktadır bugün"],
        ["Universite uluslararasi ogrenciler icin mukemmel muhendislik programlari sunmaktadir bugun"],
        ["merhaba nasilsin bugun hava cok guzel disari cikalim mi birlikte gezelim"],
        ["gunaydin bugun isler nasil gidiyor her sey yolunda mi acaba"],
        ["aksam yemeginde kebap ve lahmacun yiyelim cok guzel olur"],
      ])("'%s' → NOT romanized", (text) => expectNotRomanized(text));
    });

    // ─── Indonesian / Malay ─────────────────────────────────────────────
    describe("Indonesian / Malay", () => {
      test.each([
        ["Universitas ini menawarkan program teknik yang sangat baik untuk mahasiswa internasional"],
        ["halo apa kabar sudah lama tidak bertemu teman aku senang sekali hari ini"],
        ["selamat pagi bagaimana kabar anda hari ini semoga baik baik saja"],
        ["Universiti ini menawarkan program kejuruteraan yang sangat baik untuk pelajar antarabangsa"],
      ])("'%s' → NOT romanized", (text) => expectNotRomanized(text));
    });

    // ─── Tagalog ────────────────────────────────────────────────────────
    describe("Tagalog", () => {
      test.each([
        ["Ang unibersidad ay nag-aalok ng mahusay na mga programa sa engineering para sa mga estudyante"],
        ["kumusta ka na matagal na tayong hindi nagkita kamusta ang pamilya mo kaibigan"],
        ["magandang umaga kumusta ka na sana ayos lang ang lahat sa inyo"],
      ])("'%s' → NOT romanized", (text) => expectNotRomanized(text));
    });

    // ─── Swahili ────────────────────────────────────────────────────────
    describe("Swahili", () => {
      test.each([
        ["Chuo kikuu kinatoa programu bora za uhandisi kwa wanafunzi wa kimataifa kutoka ulimwenguni"],
        ["habari yako rafiki yangu tumekuwa muda mrefu hatujaoana vipi hali yako leo"],
        ["habari za asubuhi leo hali ya hewa ni nzuri sana twende nje"],
      ])("'%s' → NOT romanized", (text) => expectNotRomanized(text));
    });

    // ─── Finnish ────────────────────────────────────────────────────────
    describe("Finnish", () => {
      test.each([
        ["Yliopisto tarjoaa erinomaisia insinooriohjelmia kansainvalisille opiskelijoille ympari maailman tana vuonna"],
        ["moi mita kuuluu mina olen hyvin kiitos kysymasta tervetuloa meille"],
      ])("'%s' → NOT romanized", (text) => expectNotRomanized(text));
    });

    // ─── Hungarian ──────────────────────────────────────────────────────
    describe("Hungarian", () => {
      test.each([
        ["Az egyetem kiváló mérnöki programokat kínál a nemzetközi hallgatók számára a világ minden tájáról"],
        ["szia hogy vagy ma nagyon szep ido van menjunk setalni a parkba"],
      ])("'%s' → NOT romanized", (text) => expectNotRomanized(text));
    });

    // ─── Croatian ───────────────────────────────────────────────────────
    describe("Croatian", () => {
      test.each([
        ["Sveuciliste nudi izvrsne inzenjerske programe za medjunarodne studente iz cijelog svijeta danas"],
        ["bok kako si davno se nismo vidjeli hajde na kavu sutra popodne"],
      ])("'%s' → NOT romanized", (text) => expectNotRomanized(text));
    });

    // ─── Vietnamese WITH diacritics ─────────────────────────────────────
    describe("Vietnamese with diacritics (native orthography)", () => {
      test.each([
        ["Tôi rất vui được gặp bạn hôm nay trời đẹp quá chúng ta đi chơi"],
        ["Xin chào bạn khỏe không hôm nay thời tiết rất đẹp chúng ta đi dạo"],
      ])("'%s' → NOT romanized", (text) => expectNotRomanized(text));
    });

    // ─── Afrikaans ──────────────────────────────────────────────────────
    describe("Afrikaans", () => {
      test.each([
        ["Die universiteit bied uitstekende ingenieursprogramme vir internasionale studente van regoor die wêreld"],
        ["hallo hoe gaan dit met jou vandag die weer is pragtig buite"],
      ])("'%s' → NOT romanized", (text) => expectNotRomanized(text));
    });

    // ─── Other Latin-script languages ───────────────────────────────────
    describe("other Latin-script languages", () => {
      test.each([
        ["la universitat ofereix programes excel lents per a estudiants internacionals"],  // Catalan
        ["hola com estas fa molt de temps que no ens veiem amic meu"],  // Catalan
        ["a universidade ofrece excelentes programas para estudantes internacionais hoxe"],  // Galician
        ["unibertsitateak ikasle internazionalentzako programa bikainak eskaintzen ditu gaur"],  // Basque
        ["univerzita ponuka vynikajuce inzinierske programy pre medzinarodnych studentov"],  // Slovak
        ["universitetas siulo puikias inzinerijos programas tarptautiniams studentams is viso pasaulio"],  // Lithuanian
        ["universitate piedava lieliskas inzenierijas programmas starptautiskajiem studentiem no visas pasaules"],  // Latvian
        ["ulikool pakub rahvusvahelistele tudengitele suurepäraseid inseneriprogramme kogu maailmast"],  // Estonian
        ["l-universita toffri programmi eccellenti ghal istudenti internazzjonali minn madwar id-dinja"],  // Maltese
        ["mae'r brifysgol yn cynnig rhaglenni peirianneg ardderchog ar gyfer myfyrwyr rhyngwladol"],  // Welsh
        ["universiteti ofron programe te shkëlqyera inxhinierike per studentet nderkombetare"],  // Albanian
        ["univerza ponuja odlicne inzenirske programe za mednarodne studente iz celega sveta"],  // Slovenian
      ])("'%s' → NOT romanized", (text) => expectNotRomanized(text));
    });

    // ─── SMS / abbreviated text ─────────────────────────────────────────
    describe("SMS / abbreviated text", () => {
      test.each([
        ["omg u r so funny lol cant believe it tbh rofl"],
        ["jsui alle a la bibli pr etudier c tro dur mdr lol"],  // French SMS
        ["bin grad an der uni pruefung war krass alter echt mies"],  // German SMS
        ["tio k pasa hace tpo k no te veo kdd manan vale bro"],  // Spanish SMS
      ])("'%s' → NOT romanized", (text) => expectNotRomanized(text));
    });
  });

  // ═══════════════════════════════════════════════════════════════════════════
  // LONG TEXTS — verify detection thresholds hold at scale
  // ═══════════════════════════════════════════════════════════════════════════

  describe("long texts", () => {
    describe("long romanized texts → romanized", () => {
      test("long Hindi romanized", () => {
        expectRomanized(
          "aaj hamare mohalle mein ek bahut bada mela laga hua hai jahan bahut saare log aaye hain apne parivaar ke saath. bachchon ke liye jhule hain aur khane pine ke bahut saare stall lage hain. mausam bhi bahut achha hai aaj toh sabko bahut maza aa raha hai. shaam ko ek sangeet karyakram bhi hoga jismein bahut achhe gaayak gaana gaayenge."
        );
      });

      test("long Hindi romanized 2", () => {
        expectRomanized(
          "mere dost ne mujhe bataya ki kal uske ghar pe ek party hai jismein bahut saare log aayenge. usne kaha ki khana bahut achha banega aur sangeet bhi hoga. maine bola theek hai main zaroor aaunga apne bhai ke saath. phir hum dono bazaar gaye aur party ke liye kuch saamaan kharida jo zaroorat ka tha."
        );
      });

      test("long Arabic romanized", () => {
        expectRomanized(
          "ana rayeh lal souk al youm ashteri khudra wa fakha la ummi. al jaw helw ktir al youm wa ana mashallah bikhair. ba3dein baddi rouh la beit sadeeqi la nitsalla sawa wa nitkallam shway. inshallah bukra mnitruk la al bahr ma3 al shabab killon mwafeqin."
        );
      });

      test("long Russian romanized", () => {
        expectRomanized(
          "segodnya my s druzyami poshli v park gulyat potomu chto pogoda byla ochen khoroshaya. my vziali s soboi edu i napitki i ustroili piknik na trave. potom my igrali v futbol i khorosho proveli vremya. vecherom my poshli domoi ustavshiye no schastliviye ot zamechatelnogo dnya."
        );
      });

      test("long Japanese romanized", () => {
        expectRomanized(
          "kyou watashi wa tomodachi to issho ni kouen ni ikimashita. tenki ga totemo yokatta desu kara sampo shite bento o tabemashita. sorekara kouen no naka de shashin o torimashita. yoru ni natte kara resutoran de bangohan o tabemashita. totemo tanoshii ichinichi deshita mata raishu mo ikitai desu."
        );
      });

      test("long Korean romanized", () => {
        expectRomanized(
          "oneul chingudeul gwa gachi gongwon e gasseoyo. nalssiga joeoseo sancheck hago dosirak eul meogeo sseoyo. geurigo gongwon eseo sajin eul jjigeosseoyo. jeonyeoge reseuteorang eseo jeonyeog eul meogeosseoyo. jeongmal jaemiissneun haru yeosseoyo. daeume tto gago sipeoyo. gamsahamnida."
        );
      });

      test("long Chinese Pinyin", () => {
        expectRomanized(
          "jintian wo he pengyoumen yiqi qu le gongyuan. tianqi hen hao suoyi women sanbu le hen chang shijian. ranhou women zai caodi shang chi le wufan. xiawu women pai le hen duo zhaopian. wanshang women qu le yijia canting chi wanfan. jintian zhen shi kuaile de yitian wo xiwang xiaci hai keyi qu."
        );
      });

      test("long Vietnamese without diacritics", () => {
        expectRomanized(
          "hom nay toi di cho voi me toi de mua do an cho bua toi nay. troi rat dep va mat troi chieu sang khap noi. chung toi mua nhieu rau cu qua va thit ca tuoi. sau do chung toi ve nha nau an cho ca gia dinh. moi nguoi deu vui va an ngon mieng."
        );
      });
    });

    describe("long native Latin texts → NOT romanized", () => {
      test("long English 1", () => {
        expectNotRomanized(
          "We are hosting a community garden cleanup event this Saturday morning starting at nine am and going until noon. Please bring your own gloves and tools if you have them. We will provide water and snacks for all volunteers. There will also be a plant swap table where you can bring your extra seedlings and take home something new for your garden. Kids are welcome and there will be activities for them as well."
        );
      });

      test("long English 2", () => {
        expectNotRomanized(
          "The technology conference will feature over fifty speakers from leading companies in artificial intelligence machine learning and cloud computing. Attendees will have the opportunity to participate in hands on workshops covering topics like natural language processing computer vision and distributed systems. Early bird registration is now open with discounted rates available until the end of the month."
        );
      });

      test("long English 3", () => {
        expectNotRomanized(
          "I went to the grocery store yesterday to buy ingredients for dinner and ended up spending way more than I planned because everything looked so good. I got fresh salmon some asparagus a bag of rice and a bunch of herbs. Then I stopped by the bakery section and grabbed a loaf of sourdough bread and some croissants for breakfast tomorrow morning."
        );
      });

      test("long French", () => {
        expectNotRomanized(
          "Nous organisons une journee portes ouvertes a notre centre communautaire ce samedi. Il y aura des activites pour les enfants des demonstrations culinaires et un concert de musique locale en fin de journee. L entree est gratuite et tout le monde est le bienvenu. Venez avec votre famille et vos amis pour profiter de cette belle journee ensemble dans notre quartier."
        );
      });

      test("long German", () => {
        expectNotRomanized(
          "Wir laden Sie herzlich ein zu unserem jahrlichen Nachbarschaftsfest am Samstag im Stadtpark. Es wird Live-Musik geben Grillstationen mit verschiedenen Speisen und Getranken und ein Kinderprogramm mit Hupfburg und Schminken. Der Eintritt ist frei und alle Nachbarn sind willkommen. Bringen Sie Ihre Familie und Freunde mit und geniessen Sie einen schonen Tag im Freien zusammen."
        );
      });

      test("long Spanish", () => {
        expectNotRomanized(
          "Estamos organizando una fiesta de barrio el proximo sabado con musica en vivo comida tipica y actividades para toda la familia. Habra juegos para los ninos un torneo de futbol para los adultos y un area de descanso con sombra y bebidas frescas. La entrada es gratuita y todos los vecinos estan invitados a participar en esta celebracion comunitaria."
        );
      });

      test("long Italian", () => {
        expectNotRomanized(
          "Siamo lieti di invitarvi alla nostra festa di quartiere che si terra sabato prossimo nel parco centrale. Ci saranno stand gastronomici con piatti della tradizione locale musica dal vivo e giochi per bambini. L ingresso e gratuito e tutti i residenti sono benvenuti. Portate la vostra famiglia e i vostri amici per una giornata di divertimento e convivialita."
        );
      });

      test("long Turkish", () => {
        expectNotRomanized(
          "bugun arkadaslarimla birlikte parka gittik cunku hava cok guzeldi. yanımızda yiyecek ve icecek goturdum ve cimenler uzerinde piknik yaptik. sonra futbol oynadik ve cok guzel vakit gecirdik. aksam eve dondugumuzde yorgun ama mutluyduk. harika bir gun gecirdik haftaya yine gidelim."
        );
      });

      test("long Indonesian", () => {
        expectNotRomanized(
          "hari ini saya pergi ke taman bersama teman teman saya karena cuaca sangat bagus. kami membawa makanan dan minuman lalu piknik di atas rumput. setelah itu kami bermain sepak bola dan menghabiskan waktu dengan sangat menyenangkan. malam harinya kami pulang ke rumah dengan lelah tapi bahagia."
        );
      });

      test("long Swahili", () => {
        expectNotRomanized(
          "leo tulienda bustanini na marafiki zangu kwa sababu hali ya hewa ilikuwa nzuri sana. tulibeba chakula na vinywaji na kufanya pikniki kwenye nyasi. baadaye tulicheza mpira wa miguu na kupitisha wakati mzuri sana pamoja. jioni tulirudi nyumbani tukiwa wamechoka lakini wenye furaha kubwa sana."
        );
      });
    });
  });

  // ═══════════════════════════════════════════════════════════════════════════
  // Unit tests for sub-functions
  // ═══════════════════════════════════════════════════════════════════════════

  describe("trigramFingerprint", () => {
    test("detects indic trigrams in Hindi romanized text", () => {
      const result = trigramFingerprint("mujhe bahut accha laga yeh dekhkar ki tum aa gaye");
      expect(result.perFamilyRates["indic"]).toBeGreaterThan(0);
    });

    test("detects pinyin trigrams in Chinese Pinyin text", () => {
      const result = trigramFingerprint("wo shi zhongguo ren wo ai zhongguo hen duo");
      expect(result.perFamilyRates["pinyin"]).toBeGreaterThan(0);
    });

    test("detects romaji trigrams in Japanese romanized text", () => {
      const result = trigramFingerprint("watashi wa nihongo o benkyou shite imasu ganbatte");
      expect(result.perFamilyRates["romaji"]).toBeGreaterThan(0);
    });

    test("detects korean trigrams in Korean romanized text", () => {
      const result = trigramFingerprint("annyeonghaseyo hangugeo reul gongbu hago isseoyo jal");
      expect(result.perFamilyRates["korean"]).toBeGreaterThan(0);
    });

    test("detects arabic trigrams in Arabic romanized text", () => {
      const result = trigramFingerprint("ana bahebak ya habibi keefak el yom mashallah");
      expect(result.perFamilyRates["arabic"]).toBeGreaterThan(0);
    });

    test("detects russian trigrams in Russian romanized text", () => {
      const result = trigramFingerprint("privet kak dela u tebya segodnya vsyo horosho");
      expect(result.perFamilyRates["russian"]).toBeGreaterThan(0);
    });

    test("returns low scores for plain English", () => {
      const result = trigramFingerprint("The quick brown fox jumps over the lazy dog near the riverbank");
      expect(result.bestHitRate).toBeLessThan(0.10);
    });

    test("returns empty for very short text", () => {
      const result = trigramFingerprint("hi there");
      expect(result.bestFamily).toBe("");
      expect(result.totalTrigrams).toBeLessThan(10);
    });
  });

  describe("analyzeCluster", () => {
    test("coherent cluster when dominant family has 3+ of top 5", () => {
      const scores = { fr: 0.8, es: 0.6, it: 0.5, pt: 0.4, ro: 0.3 }; // all romance
      const cluster = analyzeCluster(scores);
      expect(cluster.isCoherent).toBe(true);
      expect(cluster.uniqueFamilies).toBe(1);
    });

    test("scattered cluster when many different families", () => {
      const scores = { fr: 0.5, de: 0.4, ru: 0.3, ja: 0.2, ar: 0.1 };
      const cluster = analyzeCluster(scores);
      expect(cluster.isScattered).toBe(true);
      expect(cluster.uniqueFamilies).toBeGreaterThanOrEqual(4);
    });
  });

  describe("edge cases", () => {
    test("empty string returns not romanized", () => {
      const r = detectRomanization("");
      expect(r.isRomanized).toBe(false);
    });

    test("single word returns not romanized (too short)", () => {
      const r = detectRomanization("konnichiwa");
      expect(r.isRomanized).toBe(false);
      expect(r.signals).toContain("too-short");
    });

    test("native script (Devanagari) returns not romanized", () => {
      const r = detectRomanization("नमस्ते आप कैसे हैं मैं ठीक हूँ धन्यवाद");
      expect(r.isRomanized).toBe(false);
      expect(r.signals).toContain("native-script");
    });

    test("native script (Chinese) returns not romanized", () => {
      const r = detectRomanization("你好我是中国人很高兴认识你");
      expect(r.isRomanized).toBe(false);
      expect(r.signals).toContain("native-script");
    });

    test("native script (Japanese) returns not romanized", () => {
      const r = detectRomanization("こんにちは私は日本語を勉強しています");
      expect(r.isRomanized).toBe(false);
      expect(r.signals).toContain("native-script");
    });

    test("native script (Korean) returns not romanized", () => {
      const r = detectRomanization("안녕하세요 한국어를 공부하고 있어요");
      expect(r.isRomanized).toBe(false);
      expect(r.signals).toContain("native-script");
    });

    test("native script (Arabic) returns not romanized", () => {
      const r = detectRomanization("مرحبا كيف حالك أنا بخير شكراً جزيلاً");
      expect(r.isRomanized).toBe(false);
      expect(r.signals).toContain("native-script");
    });

    test("native script (Cyrillic) returns not romanized", () => {
      const r = detectRomanization("Привет как дела у тебя сегодня всё хорошо");
      expect(r.isRomanized).toBe(false);
      expect(r.signals).toContain("native-script");
    });

    test("three words or fewer returns not romanized", () => {
      const r = detectRomanization("privet kak dela");
      expect(r.isRomanized).toBe(false);
      expect(r.signals).toContain("too-short");
    });
  });
});

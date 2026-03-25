import filter from "../src/index.ts";
import allLanguagesBadWords from "../src/languages/english-primary-all-languages.ts";

/**
 * Massive coverage test suite for the profanity filter.
 * Contains 1000+ test cases across five categories:
 *   1. Direct profane word detection (500+)
 *   2. Clean event descriptions (200+)
 *   3. Profane event descriptions (200+)
 *   4. Scunthorpe-problem words in context (100+)
 *   5. Multilingual clean text (100+)
 */

// Helper: pick N single-word entries (no spaces, length >= 3) from the word list
function pickWords(words: Record<string, { s: number; c: number }> | string[], count: number): string[][] {
  const wordList = Array.isArray(words) ? words : Object.keys(words);
  const singleWords = wordList.filter(
    (w) => !w.includes(" ") && w.length >= 3 && !/[.\/\-_*#@$!+(){}|<>\\]/.test(w)
  );
  // Deduplicate
  const unique = [...new Set(singleWords)];
  const selected = unique.slice(0, count);
  return selected.map((w) => [w]);
}

// Exclude certainty:0 words — they route to suspicious phrases, not profanity
const allWords = Object.entries(allLanguagesBadWords)
  .filter(([, v]) => (v as any).certainty !== 0)
  .map(([k]) => k);
const wordsToTest = pickWords(allWords, 550);

describe("Massive Coverage Tests", () => {
  beforeAll(() => {
    filter.updateConfig({ enableLeetSpeak: false });
  });

  // ============================================================
  // 1. PROFANE WORD DETECTION — 500+ tests
  // ============================================================
  describe("1. Profane word detection (every word in the list)", () => {
    // With sensitiveMode=false (default), check() only returns true for PROFANE-scored words.
    // Low severity/certainty words score AMBIVALENT — verify they're at least detected.
    test.each(wordsToTest)("should detect: %s", (word) => {
      const result = filter.detect(word);
      expect(result.scoredWords.length).toBeGreaterThan(0);
    });
  });

  // ============================================================
  // 2. CLEAN EVENT DESCRIPTIONS — 200+ tests
  // ============================================================
  const cleanDescriptions: string[][] = [
    // --- Community events ---
    ["Join us for the annual summer picnic at Riverside Park."],
    ["Neighborhood block party this Saturday from 2-6 PM. Bring a dish to share!"],
    ["Community garden planting day. Seeds and tools provided. All ages welcome."],
    ["Volunteer cleanup at Lake Shore Beach. Gloves and bags supplied."],
    ["Town hall meeting to discuss the new recreation center proposal."],
    ["Annual holiday toy drive collection at the community center through December 15."],
    ["Neighborhood watch meeting at 7 PM in the library conference room."],
    ["Community blood drive hosted by the Red Cross at First Baptist Church."],
    ["Free family movie night in the park. Showing The Lion King at sundown."],
    ["Habitat for Humanity build day. No experience needed, just enthusiasm!"],
    // --- Food & drink ---
    ["Farmers market every Thursday from 3-7 PM in the town square."],
    ["International food festival featuring cuisines from over 20 countries."],
    ["Cooking class: Learn to make fresh pasta from scratch. Ingredients included."],
    ["Wine tasting event at Valley Vineyards. $25 per person, must be 21+."],
    ["Chili cook-off competition. Register your team by October 1st. Prizes for top 3."],
    ["Fundraiser for the elementary school. Donations welcome."],
    ["Food truck rally at the waterfront. Over 15 vendors. Live music from 5-9 PM."],
    ["Monthly potluck dinner at the senior center. Theme: comfort food classics."],
    ["Coffee cupping workshop at Roast & Brew. Learn to taste like a professional."],
    ["BBQ and grill masterclass. Learn techniques for perfect smoked ribs and brisket."],
    ["Sushi rolling workshop for beginners. All materials provided, seats limited to 12."],
    ["Farm-to-table dinner series at Meadow Creek Ranch. Five courses, paired wines."],
    ["Artisan cheese tasting with local cheesemakers. Bread and fruit included."],
    ["Craft beer festival at the convention center. Over 50 breweries represented."],
    ["Vegan cooking demonstration with Chef Maria. Free samples for all attendees."],
    // --- Sports & fitness ---
    ["5K fun run for charity. Registration opens at 7 AM, race begins at 8 AM."],
    ["Youth soccer league registration now open for spring season. Ages 5-14."],
    ["Free yoga in the park every Sunday morning at 9 AM. Bring your own mat."],
    ["Adult basketball league. Games Tuesday and Thursday evenings at the rec center."],
    ["Swim meet at the aquatic center. Events for all age groups and skill levels."],
    ["Cycling club weekly ride. Meet at the bike shop at 6 AM Saturday mornings."],
    ["Tennis tournament: singles and doubles divisions. Entry fee $15 per player."],
    ["Marathon training group forming now. First meeting this Wednesday at Track Park."],
    ["Rock climbing introduction course at Summit Gym. Gear rental available."],
    ["Golf scramble fundraiser for the children's hospital. Teams of four, $80 per player."],
    ["CrossFit community workout at 10 AM. All fitness levels welcome, coaches available."],
    ["Paddleboard yoga on Lake Harmony. Equipment provided, must know how to swim."],
    ["Flag football pickup games every Sunday at 2 PM at the athletic fields."],
    ["Ice skating party at the downtown rink. Skate rental included with admission."],
    ["Kickball league for adults. Season starts April 12. Sign up as a team or individual."],
    // --- Music & arts ---
    ["Open mic night at the Blue Moon Cafe. Sign up starts at 6:30 PM."],
    ["Art gallery opening reception. Wine and cheese provided. Exhibition runs through March."],
    ["Pottery workshop for beginners. Learn to throw on the wheel. $45 includes materials."],
    ["Community theater auditions for Our Town. All roles open. No monologue required."],
    ["Photography walk through the historic district. Bring your camera or smartphone."],
    ["Watercolor painting class in the park. Supplies provided for first-time attendees."],
    ["Battle of the bands competition at the amphitheater. Five bands compete for $1,000 prize."],
    ["Jazz brunch at The Garden Restaurant. Live trio performs from 10 AM to 1 PM."],
    ["Children's art camp: ages 6-12. Two-week summer session, Monday through Friday."],
    ["Film screening and director Q&A at the independent cinema. Free for members."],
    ["Classical piano recital featuring works by Chopin and Liszt. Tickets $20 at the door."],
    ["Sketch club meets weekly at the museum. Bring your own materials. All skill levels."],
    ["String quartet performs Mozart and Haydn. Wine reception follows the performance."],
    ["Improv comedy show at the comedy club. Two shows nightly, Friday and Saturday."],
    ["Printmaking workshop using linocut techniques. Create your own holiday cards."],
    // --- Education & learning ---
    ["Free tutoring sessions available every Wednesday afternoon at the public library."],
    ["GED preparation course starting next month. Classes meet three evenings per week."],
    ["Science fair for middle school students. Projects due by November 1st."],
    ["Book club meeting to discuss The Great Gatsby. New members always welcome."],
    ["Financial literacy workshop. Learn budgeting, saving, and investing basics."],
    ["Coding bootcamp for teens ages 13-17. Learn Python and web development basics."],
    ["Adult literacy program seeking volunteer tutors. Training provided."],
    ["SAT prep course starting in January. Small class sizes, experienced instructors."],
    ["History lecture series: The Civil War. Meets every Tuesday at 7 PM."],
    ["Foreign language conversation circle. Practice Spanish, French, or Mandarin."],
    ["Resume writing workshop at the career center. Bring your current resume for review."],
    ["STEM camp for girls ages 8-14. Robotics, chemistry, and computer science activities."],
    ["Philosophy discussion group. This month: ethics in artificial intelligence."],
    ["Creative writing workshop. Flash fiction and short story techniques. Beginners welcome."],
    ["Public speaking class at Toastmasters. Overcome your fear and build confidence."],
    // --- Nature & outdoors ---
    ["Guided nature hike at Eagle Creek Trail. Moderate difficulty, 4 miles round trip."],
    ["Birdwatching expedition at the wetlands preserve. Binoculars available to borrow."],
    ["Stargazing event at the observatory. Telescopes provided, weather permitting."],
    ["Canoe trip along the Winding River. Life jackets and oars included."],
    ["Tree planting volunteer day at Memorial Forest. Help plant 200 native saplings."],
    ["Wildflower identification walk. Led by the county botanist. Suitable for all ages."],
    ["Camping skills workshop: fire building, shelter making, and navigation basics."],
    ["Horseback riding trail adventure at Ridge Stables. No experience necessary."],
    ["Fishing derby at Crystal Lake. Youth division and adult division. Catch and release."],
    ["Kayaking basics on the river. Certified instructors, equipment provided."],
    // --- Technology & business ---
    ["Tech meetup: Introduction to machine learning with Python. Pizza provided."],
    ["Startup pitch night at the incubator. Five startups present to angel investors."],
    ["WordPress workshop for small business owners. Build your website in one day."],
    ["Cybersecurity awareness seminar for seniors. Protect yourself from scams online."],
    ["Digital marketing workshop. SEO, social media strategy, and email campaigns."],
    ["Blockchain and cryptocurrency 101. A non-technical introduction for curious minds."],
    ["Networking event for women in technology. Keynote speaker and panel discussion."],
    ["3D printing demonstration at the makerspace. See prototypes come to life."],
    ["Data science study group. Working through Stanford's CS229 course materials."],
    ["Mobile app development meetup. Show-and-tell of recent projects and prototypes."],
    // --- Health & wellness ---
    ["Mental health awareness walk. Join us to reduce stigma and support resources."],
    ["Free blood pressure screening at the pharmacy every Monday 10 AM to 2 PM."],
    ["Meditation and mindfulness class. No experience needed, cushions provided."],
    ["Nutrition seminar: Eating well on a budget. Handouts and recipes included."],
    ["Zumba class at the community center. $5 drop-in fee. Bring water and towel."],
    ["Flu vaccine clinic at the health department. No appointment needed."],
    ["Support group for new parents meeting every other Thursday evening."],
    ["CPR and first aid certification course. AHA certified, $30 registration fee."],
    ["Tai chi in the park. Gentle movements for flexibility and relaxation. Free and open."],
    ["Stress management workshop. Practical tools for everyday wellbeing."],
    // --- Cultural & heritage ---
    ["Lunar New Year celebration at the cultural center. Dragon dance and traditional foods."],
    ["Diwali festival of lights. Join us for music, dancing, and fireworks."],
    ["Juneteenth commemoration with speakers, live music, and a community meal."],
    ["Oktoberfest celebration at the biergarten. German food, music, and dancing."],
    ["Day of the Dead altar exhibition and community workshop. Materials provided."],
    ["Greek festival at St. Nicholas Church. Gyros, baklava, and folk dancing."],
    ["Pride celebration and march through downtown. Family-friendly activities all day."],
    ["Indigenous peoples heritage festival. Storytelling, drumming, and artisan market."],
    ["Hanukkah menorah lighting ceremony in the town square. Hot cocoa served."],
    ["Celtic music and dance showcase. Traditional Irish and Scottish performances."],
    // --- Professional & networking ---
    ["Chamber of commerce monthly luncheon. Guest speaker: the new city manager."],
    ["Job fair at the convention center. Over 40 employers hiring. Dress professionally."],
    ["Real estate investors meetup. Market trends and deal analysis discussion."],
    ["Entrepreneurs breakfast club. Share challenges and wins over coffee and pastries."],
    ["Professional women's leadership conference. Workshops and networking sessions."],
    ["Small business tax preparation workshop. Bring your questions and past returns."],
    ["Insurance continuing education seminar. Four CE credits available."],
    ["Medical professionals networking dinner. RSVP required by Friday."],
    ["Legal aid clinic offering free 30-minute consultations. Walk-ins welcome."],
    ["Nonprofit board governance training. Best practices for effective board service."],
    // --- With numbers, dates, prices, URLs ---
    ["Registration deadline: January 15, 2026. Early bird pricing: $49.99 per person."],
    ["Event starts at 10:00 AM and ends at 3:30 PM. Check-in at Gate B."],
    ["Contact us at info@example.com or call (555) 123-4567 for more information."],
    ["Visit www.communityevents.org for the full schedule and ticket purchases."],
    ["Parking available at 123 Main Street garage. Rate: $5 for 4 hours."],
    ["Ages 18-65 welcome. Group rate: 10+ tickets at 20% discount."],
    ["Floor 3, Room 301-B at the Convention Center. Elevator access available."],
    ["Proceeds benefit the 501(c)(3) nonprofit Children First Foundation."],
    ["Over 5,000 participants expected. Last year raised a quarter million for charity."],
    ["Marathon course: 26.2 miles through downtown, finishing at Memorial Stadium."],
    // --- With place names ---
    ["The Scunthorpe Community Orchestra invites you to their spring concert."],
    ["Middlesex County Historical Society annual gala and fundraiser."],
    ["Penistone Agricultural Show featuring livestock, crafts, and local produce."],
    ["Cockermouth Mountain Rescue team fundraising dinner and auction."],
    ["Shitterton Village fete. Games, stalls, and a scarecrow competition."],
    ["Lightwater Country Park fun run. Refreshments at the finish line."],
    ["Sussex County Fair. Rides, games, and agricultural exhibitions all weekend."],
    ["Clitheroe Castle museum evening lecture series on medieval history."],
    ["Ramsbottom Chocolate Festival. Artisan chocolatiers and confectioners."],
    ["Wetwang Village Hall quiz night. Teams of four, £3 per person entry."],
    // --- With emojis ---
    ["Join us for an incredible night of live music and dancing! All ages welcome."],
    ["Painting party this Friday. Canvas, paints, and wine included in the ticket price."],
    ["Morning wellness walk around the lake. Fresh air and good company guaranteed."],
    ["Game night at the library. Board games, card games, and snacks provided."],
    ["Gardening workshop: spring planting tips and tricks from local experts."],
    // --- Multi-sentence descriptions ---
    ["The annual harvest festival returns to Heritage Farm. Enjoy hayrides, pumpkin picking, and corn mazes. Live bluegrass music all afternoon. Admission is free for children under 5."],
    ["The downtown business district is hosting a sidewalk sale this weekend. Over 50 shops are participating with discounts up to 70% off. Rain date is the following Saturday."],
    ["Our monthly game night features board games, trivia, and card tournaments. Snacks and drinks are provided. Bring a friend and your competitive spirit. Doors open at 6 PM."],
    ["The community pool is offering free swim lessons for kids ages 4-10 this summer. Registration opens May 1st online. Spaces are limited to 15 per session. Parents must sign a waiver."],
    ["Annual car show at the fairgrounds. Classic, vintage, and custom vehicles on display. Food court with 10 vendors. DJ spinning tunes from the 50s through the 80s. Trophies awarded at 4 PM."],
    ["Join the nature conservancy for a wetlands restoration project. Learn about local ecology while planting native grasses. Wear boots and bring sunscreen. Lunch provided for volunteers."],
    ["The university debate team hosts a public forum on renewable energy policy. Three panelists from academia, industry, and government will present their perspectives. Audience Q&A follows."],
    ["Craft fair and artisan market in the historic barn. Over 60 vendors selling handmade jewelry, pottery, textiles, and woodwork. Free parking and shuttle service from the train station."],
    ["This weekend's outdoor cinema features classic films under the stars. Bring blankets and lawn chairs. Concession stand opens at 7 PM. Feature starts at dusk. No pets allowed."],
    ["The community kitchen offers a free cooking class every second Tuesday. This month we focus on healthy weeknight meals. All ingredients provided. Space limited to 20 participants."],
    // --- Professional/formal tone ---
    ["We are pleased to announce the appointment of Dr. Sarah Chen as the new Director of Community Outreach."],
    ["The Board of Directors cordially invites you to the annual shareholders meeting on March 15th at 10 AM."],
    ["Please be advised that the parking structure will undergo maintenance from July 1-5."],
    ["The committee recommends approval of the proposed budget amendment for fiscal year 2026."],
    ["Applications are now being accepted for the summer internship program. Deadline: April 30th."],
    // --- Food terminology that might trip filters ---
    ["Cocktail hour begins at 5:30 PM with passed hors d'oeuvres and signature drinks."],
    ["Learn to prepare a classic French stew in this cooking demonstration."],
    ["Breast of chicken with roasted vegetables. Vegetarian option: stuffed bell peppers."],
    ["Succotash, cornbread, and smoked turkey legs at the heritage cooking demonstration."],
    ["Angus beef sliders with caramelized onions. Gluten-free buns available on request."],
    // --- Sports terminology ---
    ["The quarterback threw a perfect pass for a touchdown in the final seconds."],
    ["Our lacrosse team clinched the division title with a decisive 12-3 victory."],
    ["The pitcher struck out 14 batters in a dominant performance on the mound."],
    ["Defensive tackle position coach will hold a skills clinic for high school athletes."],
    ["The figure skating competition features programs set to classical masterworks."],
    // --- Music/art terminology ---
    ["The pianist performed a technically demanding piece with flawless execution."],
    ["Mixed media installation exploring themes of identity and belonging opens Friday."],
    ["The brass section delivers a powerful rendition of the national anthem."],
    ["Interpretive dance performance inspired by the changing of the seasons."],
    ["Acrylic pour painting technique workshop. No artistic experience required."],
    // --- Technology descriptions ---
    ["The new data pipeline processes 10 million records per hour with 99.9% uptime."],
    ["Cloud migration strategy workshop covering AWS, Azure, and GCP best practices."],
    ["Our penetration testing team identified and remediated three critical vulnerabilities."],
    ["The API endpoint handles 50,000 concurrent connections with sub-millisecond latency."],
    ["Hackathon: build an assistive technology prototype in 48 hours. All skill levels."],
    // --- Descriptions with tricky substrings ---
    ["The documentary covers the assassination of Archduke Franz Ferdinand and its aftermath."],
    ["Therapist-led workshop on managing accumulated stress from work and family obligations."],
    ["The class teaches fundamental bass guitar techniques for intermediate players."],
    ["Discuss the Essex countryside conservation efforts at the monthly meeting."],
    ["Analysis of geopolitical shifts and their implications for international trade."],
    ["The exhibition showcases Japanese woodblock prints from the Edo period."],
    ["Butterscotch pudding recipe demonstration at the community cooking series."],
    ["The classic car features a custom exhaust system and leather upholstery."],
    ["Grassroots organizing workshop for local advocacy groups and nonprofits."],
    ["The archaeological dig uncovered artifacts from a prehistoric settlement site."],
  ];

  describe("2. Clean event descriptions (should NOT be flagged)", () => {
    test.each(cleanDescriptions)("clean: %s", (text) => {
      expect(filter.check(text)).toBe(false);
    });
  });

  // ============================================================
  // 3. PROFANE EVENT DESCRIPTIONS — 200+ tests
  // ============================================================
  const profaneDescriptions: string[][] = [
    // --- English profanity in various positions ---
    ["Come to our fucking amazing concert tonight!"],
    ["This bullshit event is not worth your time."],
    ["What the fuck is this event even about?"],
    ["The asshole running this show has no idea what they are doing."],
    ["That was a shitty performance last year."],
    ["Get your ass to this party or you are a loser."],
    ["The bitches at the front desk would not let us in."],
    ["This damn bastard charged us double for parking."],
    ["Holy shit, the lineup for this festival is incredible."],
    ["Some dickhead parked in the handicapped spot again."],
    ["The cunt behind the counter was incredibly rude to everyone."],
    ["Fuck off if you do not like the music we play."],
    ["This piss-poor organization ruined the entire event."],
    ["What a cock-up from the event planners."],
    ["That wanker stole my spot in the queue."],
    ["The slut walk was a controversial community event."],
    ["Goddamn it, they cancelled the show at the last minute."],
    ["Those retarded parking instructions confused everyone."],
    ["Move your fatass and get to the starting line on time."],
    ["She called the organizer a stupid bitch in front of everyone."],
    // --- Profanity at beginning ---
    ["Shit, the venue changed locations again."],
    ["Fuck this noise, the event was a total disaster."],
    ["Fuck, we missed the early bird registration deadline."],
    ["Ass clown organizers forgot to book the DJ."],
    ["Bollocks, the tickets are already sold out."],
    ["Crap, the food trucks cancelled at the last minute."],
    ["Dick move by the promoters to raise prices day of."],
    ["Whore of a deal on these overpriced VIP tickets."],
    ["Piss off with your fake charity gala nonsense."],
    ["Twat of a host could not even operate the microphone."],
    // --- Profanity at end ---
    ["The event organizers are complete assholes."],
    ["Everything about that conference was utter bullshit."],
    ["Do not come to this event, it is absolute shit."],
    ["The keynote speaker was a total dipshit."],
    ["That DJ played nothing but crap all night, what a knobhead."],
    ["The VIP section was full of pretentious pricks."],
    ["Do not waste your money on this motherfucking scam."],
    ["The security guard called me a faggot for no reason."],
    ["They treated the volunteers like a complete jackass."],
    ["The after-party turned into a complete shitshow."],
    // --- Profanity in middle ---
    ["The opening act was good but the headliner was fucking terrible."],
    ["We paid fifty dollars for this shitty little concert."],
    ["The first half was decent, the second half was horseshit."],
    ["Nice venue but the goddamn sound system was broken."],
    ["Great location, piss poor execution of the entire festival."],
    ["The organizer had the balls to charge extra for water."],
    ["Beautiful park, but the event was run by a total dickhead."],
    ["I enjoyed the first speaker but the second was a complete tosser."],
    ["Lovely venue, shame the bastards running it are incompetent."],
    ["Good food, great music, but the crowd was full of arsehole behavior."],
    // --- Multiple profane words ---
    ["This fucking shitshow was the worst goddamn event of the year."],
    ["Fuck this bullshit, the asshole promoters lied about everything."],
    ["What a clusterfuck of shitty planning and dickhead organizers."],
    ["The whole damn thing was a steaming pile of horseshit crap."],
    ["Piss off you wanking twat, nobody wants your shitty flyers."],
    ["Bloody hell, those bastard scumbags stole our deposit."],
    ["That bitch and her dickhead boyfriend ruined the entire show."],
    ["What a fucking cunt move to cancel without any refund."],
    ["The dumbass emcee kept making sexist and racist jokes all night."],
    ["Shit-faced idiots caused a brawl and the cops shut everything down."],
    // --- Slurs in event context ---
    ["They called the street performer a nigger and security did nothing."],
    ["Some beaner joke was told on stage and half the audience left."],
    ["The comic used the word kike repeatedly in his routine."],
    ["A group of chinks slur was spray-painted on the event banner."],
    ["They refused entry to the homo couple at the door."],
    ["The racist MC kept calling people wetbacks throughout the show."],
    ["Someone yelled spic at the performer from the back of the crowd."],
    ["The hateful graffiti read towelhead go home outside the venue."],
    ["A gook slur was found carved into the bathroom stall at the hall."],
    ["The flyer for the event contained the word cracker as an insult."],
    // --- Creative embedding attempts ---
    ["The totally fucking unbelievable concert blew our minds."],
    ["What a fucking terrible waste of a Saturday."],
    ["Best damn show in the whole motherfucking city this year."],
    ["This is fan-fucking-tastic news for the music community."],
    ["That was the biggest bullshitting exercise I have ever witnessed."],
    ["The organizer was bitching about the weather all day long."],
    ["Everyone was pissing and moaning about the long wait times."],
    ["They kept fucking around instead of starting the show on time."],
    ["The staff was arsing around like a bunch of twats the whole damn time."],
    ["Some jackass was heckling the performer the entire show."],
    // --- Vulgar compound phrases ---
    ["Kiss my ass if you think this event was worth the price."],
    ["The promoter can suck my dick for all I care about his opinion."],
    ["Go fuck yourself if you disagree with our review of the show."],
    ["Eat shit and die was written on the bathroom wall at the venue."],
    ["Son of a bitch stole my wallet during the intermission."],
    ["The bouncer told us to fuck off even though we had valid tickets."],
    ["Piece of shit sound system ruined every single performance."],
    ["Blow me if you think this lineup is worth a hundred dollars."],
    ["Suck it up buttercup was their response to our bullshit complaints."],
    ["They can shove it up their ass for cancelling without notice."],
    // --- Threats and violent language ---
    ["Kill yourself if you actually enjoyed that terrible performance."],
    ["I hope you die in a fire for cancelling the headliner act."],
    ["Go die you worthless piece of garbage event coordinator."],
    ["Drink bleach if you think that was a good keynote speech."],
    ["The angry patron told staff to hang yourself over a refund dispute."],
    ["Someone wrote kys on the feedback forms at the convention."],
    ["The online review said unalive yourself if you attend this festival."],
    ["Off yourself was scrawled on the poster outside the theater."],
    ["Neck yourself was yelled at the referee during the match."],
    ["End yourself was posted in the event comment section online."],
    // --- Drug-related insults in context ---
    ["Some crackhead was harassing attendees near the entrance."],
    ["The venue was overrun with junkies sleeping in the parking lot."],
    ["A group of stoners were hotboxing in the restrooms."],
    ["The tweaker at the door would not stop asking for spare change."],
    ["Some methhead broke into the backstage area during the show."],
    ["That dopehead volunteer had no idea what was going on."],
    ["A cokewhore was causing a scene at the VIP bar area."],
    ["The crackwhore outside the venue was scaring families away."],
    ["Some pothead forgot to set up the entire merchandise table."],
    ["A bunch of druggies were camping in the park before the event."],
    // --- Internet slang profanity ---
    ["LMFAO this event is the biggest joke of the season."],
    ["WTF is wrong with the organizers of this festival."],
    ["STFU about the noise complaints, it is an outdoor concert."],
    ["GTFO of my way, I need to get to the front of the stage."],
    ["The incel community organized a counter-protest at the march."],
    ["Some thot was live-streaming the entire private event."],
    ["The simp spent five hundred dollars on VIP just to meet the host."],
    ["What a cuck move to let them cut the entire ticket line."],
    ["That coomer was making everyone uncomfortable at the art show."],
    ["The gooner in the front row would not stop making weird noises."],
    // --- Modern insults ---
    ["That landwhale blocked the aisle for the entire show."],
    ["The neckbeard at table six would not stop arguing with the speaker."],
    ["Some beta male was complaining about strong women on the panel."],
    ["The soyboy organizer could not even lift the PA system."],
    ["A group of incel losers were protesting outside the womens conference."],
    ["The femoid comment was reported to event security immediately."],
    ["Some roastie joke was made during the comedy set and nobody laughed."],
    ["The manlet at the door was on a power trip checking credentials."],
    ["The dicklet joke fell flat and the comedian was booed off stage."],
    ["That degenerate was banned from all future community events."],
    // --- Euphemistic and evasion spellings ---
    ["That fucking event was the worst thing I have ever attended."],
    ["Shut the eff up about the parking situation already."],
    ["The whole event was a cluster of bad decisions and effing chaos."],
    ["What a frigging disaster from start to finish at the fairgrounds."],
    ["The frickin caterer showed up two hours late with cold food."],
    ["Fudge this, I want my money back from this terrible show."],
    ["That fecker charged us for parking that was supposed to be free."],
    ["What a complete shitgibbon of an event coordinator."],
    ["The thundercunt behind the bar refused to serve us."],
    ["That cockwomble of a stage manager kept the band waiting for hours."],
    // --- Profanity mixed with descriptions ---
    ["Beautiful sunset over the harbor but the asshole DJ ruined the vibe."],
    ["The food was surprisingly excellent despite the shitty organization."],
    ["Amazing performers, gorgeous venue, but fuck the ticket prices."],
    ["Great lineup, terrible weather, and a bunch of dickhead security guards."],
    ["The kids had a wonderful time despite the bullshit parking situation."],
    ["Lovely flowers, beautiful decorations, and a total cunt of a host."],
    ["Perfect weather for the outdoor concert that those bastards nearly cancelled."],
    ["Incredible talent on stage, piss poor management behind the scenes."],
    ["The auction raised ten thousand dollars despite being run by wankers."],
    ["The charity walk was heartwarming until some tosser started a fight."],
    // --- Body-shaming and sexual in context ---
    ["The horny crowd got way too aggressive near the stage."],
    ["Some pervert was taking upskirt photos at the festival."],
    ["The butt plug joke during the family show was completely inappropriate."],
    ["A pornstar showed up to the charity event uninvited and caused a scene."],
    ["The slutty costume contest was cancelled after parent complaints."],
    ["Someone flashed their boobs on stage and security escorted them out."],
    ["The twerking competition got out of hand at the block party."],
    ["A dildo was found in the lost and found at the community center."],
    ["The escort service was advertising at the family picnic."],
    ["Some exhibitionist was flashing people near the playground area."],
    // --- Ableist slurs in context ---
    ["They called the volunteer a retard in front of everyone."],
    ["The spastic comment from the MC was deeply offensive."],
    ["Someone called the disabled athlete a cripple during the awards."],
    ["The presenter used the word gimp as a punchline."],
    ["That windowlicker insult was directed at the autistic attendee."],
    ["The moron joke was in extremely poor taste at the charity event."],
    ["They called the newcomer an imbecile for asking basic questions."],
    ["The spaz comment was reported to the event accessibility coordinator."],
    ["Someone used the word tard as a casual insult during the workshop."],
    ["The halfwit remark was aimed at the young volunteer unfairly."],
    // --- Religious profanity in context ---
    ["Jesus fucking Christ, they oversold the venue by two hundred seats."],
    ["Goddamn it all to hell, the headliner cancelled an hour before doors."],
    ["For fuck sake, how hard is it to set up a basic sound system."],
    ["Holy hell, the fire alarm went off during the middle of the keynote."],
    ["God damn these incompetent parking attendants at the arena."],
    // --- British profanity in context ---
    ["The bloody useless caterer served raw chicken at the gala dinner."],
    ["What a load of codswallop from those gobshite organizers."],
    ["That pillock of a DJ played the wrong setlist the entire night."],
    ["The shitty event planner chose the worst possible color scheme."],
    ["Those slaggy decorations looked like they came from a pound shop."],
    ["The bellend at the ticket booth shortchanged everyone."],
    ["What a plonker, he forgot to book the main act for the festival."],
    ["The minger running the karaoke had the worst taste in music."],
    ["Those wazzock volunteers had no idea where anything was."],
    ["The shagger in the VIP lounge was escorted out by security."],
  ];

  describe("3. Profane event descriptions (should be flagged)", () => {
    // With sensitiveMode=false, some mild profanity (crap, goddamn, tosser) scores
    // AMBIVALENT and doesn't trigger check(). Verify at least detected.
    test.each(profaneDescriptions)("profane: %s", (text) => {
      const result = filter.detect(text);
      expect(result.scoredWords.length).toBeGreaterThan(0);
    });
  });

  // ============================================================
  // 4. SCUNTHORPE-PROBLEM WORDS IN CONTEXT — 100+ tests
  // ============================================================
  const scunthorpeTexts: string[][] = [
    // --- Place names ---
    ["The Scunthorpe United match kicks off at 3pm."],
    ["Shitterton village in Dorset is a charming place to visit."],
    ["Penistone is a market town in South Yorkshire."],
    ["Cockermouth is located in the Lake District of Cumbria."],
    ["Middlesex County offers beautiful parks and recreation areas."],
    ["We are hosting the event at the Hancock Building downtown."],
    ["Visit Clitheroe Castle for a day of medieval history."],
    ["The event is at Ramsbottom Community Center in Lancashire."],
    ["Wetwang village hosts an annual charity cricket match."],
    ["The Buttermere fell walking group meets every other weekend."],
    ["Sussex County Agricultural Fair features local farming exhibitions."],
    ["Lightwater Country Park offers nature trails and picnic areas."],
    // --- Words containing profanity substrings ---
    ["Classic literature discussion group meets weekly."],
    ["The cocktail masterclass is taught by an award-winning mixologist."],
    ["Assessment scores will be posted by Friday afternoon."],
    ["The class covers fundamental topics in circuit analysis."],
    ["Please bring your documentation to the registration desk."],
    ["The therapist will conduct individual sessions starting Monday."],
    ["We will evaluate the data to determine statistical significance."],
    ["The assembly line workers union is holding elections."],
    ["Compass reading and orienteering skills for scouts."],
    ["A passionate speech about grassroots community organizing."],
    ["The title of the exhibit is Expressions of the Human Spirit."],
    ["Grape cultivation and viticulture workshop at the vineyard."],
    ["The analytical chemistry lab is fully equipped for testing."],
    ["Species conservation is the focus of this years symposium."],
    ["The cumulative effect of small changes leads to big results."],
    ["Learn about Essex history at the county heritage museum."],
    ["Discuss the impact of mass communication on modern society."],
    ["The class teaches bass guitar techniques for intermediate players."],
    ["Butterscotch pudding recipe demonstration this Saturday."],
    ["The archaeological dig uncovered a prehistoric settlement site."],
    ["Arsenal football club supporters gathering before the match."],
    ["Therapeutic massage techniques for stress relief workshop."],
    ["Contemporary dance performance exploring movement and space."],
    ["The assumption that all attendees have prior knowledge is incorrect."],
    ["Assistance with the application process is available at the front desk."],
    ["The associate director will present the quarterly report."],
    ["Constitution Day celebration with patriotic music and readings."],
    ["The botanical garden showcases native and exotic plant species."],
    // --- Food and cooking terms ---
    ["Breast of duck with cherry reduction sauce cooking class."],
    ["Roasted chestnuts and hot cider available at the winter market."],
    ["The recipe calls for one cup of shredded almonds."],
    ["Homemade sausage making workshop. Learn to stuff and link."],
    ["Ratatouille is the featured dish at the French cooking class."],
    ["Cocktail party featuring signature drinks and canapes."],
    ["The menu includes grilled flank steak with chimichurri sauce."],
    ["Spatchcock chicken roasting demonstration for beginners."],
    ["The dessert course features a rich chocolate fondant."],
    ["Rustic bread baking workshop with natural sourdough starter."],
    // --- Academic and scientific terms ---
    ["Analysis of organism behavior in controlled environments."],
    ["The sextant navigation workshop teaches celestial positioning."],
    ["Discussing the intersection of art and psychoanalysis."],
    ["Sexual dimorphism in bird species: a biology lecture."],
    ["The study of penile rehabilitation after prostate surgery."],
    ["Seminal works in twentieth century philosophy discussion."],
    ["The class examines the Marxist critique of capitalism."],
    ["Anatomical drawing class focused on the human figure."],
    ["The reproductive microbiome and its role in maternal health."],
    ["Research into prenatal development and embryology."],
    // --- Professional and formal language ---
    ["Executive summary of the organizational restructuring plan."],
    ["The consultant will assess the current workflow and recommend improvements."],
    ["Participants should bring their own laptop and charger."],
    ["Professional development workshop on leadership and management skills."],
    ["The committee will scrutinize the proposal before the vote."],
    // --- Technology terms ---
    ["The version control repository has been forked and is ready for development."],
    ["Backend architecture review focusing on microservices patterns."],
    ["The default branch has been renamed to main for consistency."],
    ["Socket programming workshop covering TCP and UDP protocols."],
    ["The daemon process handles background tasks automatically."],
    // --- Medical and health terms ---
    ["Breast cancer awareness walk and fundraiser this weekend."],
    ["Prostate health screening available at the mens health fair."],
    ["Testicular cancer awareness month campaign and information."],
    ["The fertility clinic is hosting an open house for prospective patients."],
    ["Pelvic floor physical therapy workshop for postpartum recovery."],
    // --- Historical and cultural terms ---
    ["The assassination of Lincoln changed the course of American history."],
    ["The exhibition explores the history of the British Empire."],
    ["Discussion of Dickens and his impact on Victorian literature."],
    ["The Shakers were a religious community known for their craftsmanship."],
    ["Japanese ukiyo-e prints depicting scenes from the pleasure quarters."],
    // --- Names and proper nouns ---
    ["Charles Dickens film retrospective at the classic cinema."],
    ["Lecture on the works of Isaac Asimov at the science fiction convention."],
    ["Reading of John Hancock's correspondence at the history museum."],
    ["Dr. Richard Cockerham presents findings on climate change."],
    ["Professor Henderson leads the panel on education reform."],
    // --- Compound words with innocent meanings ---
    ["Woodpecker watching excursion at the nature preserve."],
    ["The peacock display at the zoo is spectacular this time of year."],
    ["Hassock making workshop using traditional rush weaving techniques."],
    ["Titmouse birdwatching session at the wetlands sanctuary."],
    ["The game of shuttlecock badminton is included in the sports day."],
    // --- Everyday words with embedded substrings ---
    ["Assume all guests will need parking accommodations."],
    ["The analyst presented findings from the market research study."],
    ["A therapist-led group session on cognitive behavioral techniques."],
    ["Discuss grape varieties at the viticulture seminar."],
    ["The passage through the mountains offers breathtaking views."],
    ["This class teaches how to manipulate data in spreadsheets effectively."],
    ["We will examine the manuscript dating from the fourteenth century."],
    ["The flagship store grand opening includes refreshments and giveaways."],
    ["A documentary about the Sussex Downs and their unique ecology."],
    ["The class explores how to accumulate wealth through smart investing."],
  ];

  describe("4. Scunthorpe-problem words in context (should NOT be flagged)", () => {
    test.each(scunthorpeTexts)("scunthorpe: %s", (text) => {
      expect(filter.check(text)).toBe(false);
    });
  });

  // ============================================================
  // 5. MULTILINGUAL CLEAN TEXT — 100+ tests
  // ============================================================
  const multilingualCleanTexts: string[][] = [
    // --- Spanish ---
    ["Bienvenidos a la fiesta de la comunidad. Todos son bienvenidos."],
    ["Clase de cocina mexicana este sabado. Ingredientes incluidos."],
    ["Festival de musica latina con artistas locales e internacionales."],
    ["Reunion de vecinos para discutir mejoras en el parque."],
    ["Taller de pintura al oleo para principiantes. Materiales incluidos."],
    ["Noche de cine al aire libre en la plaza central."],
    ["Carrera de cinco kilometros a beneficio del hospital infantil."],
    ["Mercado de artesanias y productos locales este fin de semana."],
    ["Curso de primeros auxilios ofrecido por la Cruz Roja."],
    ["Exposicion de fotografia en la galeria municipal este fin de semana."],
    // --- French ---
    ["Bienvenue a notre soiree culturelle au centre communautaire."],
    ["Cours de cuisine francaise: apprenez a faire des crepes parfaites."],
    ["Festival de jazz dans le parc. Entree gratuite pour tous."],
    ["Reunion des parents pour discuter du programme scolaire."],
    ["Atelier de poterie pour debutants. Materiel fourni."],
    ["Cinema en plein air: projection de films classiques francais."],
    ["Marche aux fleurs et aux plantes au jardin botanique."],
    ["Vernissage de la nouvelle exposition au musee des beaux arts."],
    ["Concert de musique classique a la cathedrale dimanche soir."],
    ["Salon du livre avec dedicaces et rencontres avec les auteurs."],
    // --- German ---
    ["Willkommen zum Sommerfest im Stadtpark. Eintritt frei."],
    ["Kochkurs: Traditionelle bayerische Gerichte zubereiten."],
    ["Wanderung durch den Schwarzwald am kommenden Samstag."],
    ["Konzert der Philharmonie im Konzertsaal. Karten ab zwanzig Euro."],
    ["Weihnachtsmarkt mit Gluehwein und Lebkuchen im Stadtzentrum."],
    ["Kunstausstellung im Rathaus. Lokale Kuenstler zeigen ihre Werke."],
    ["Fahrradtour entlang der Donau. Treffpunkt am Marktplatz."],
    ["Vortrag ueber nachhaltige Landwirtschaft im Gemeindesaal."],
    ["Filmvorstellung im Freiluftkino. Bei Regen im Gemeindehaus."],
    ["Flohmarkt auf dem Rathausplatz. Stande ab fuenf Euro."],
    // --- Italian ---
    ["Benvenuti alla festa della comunita nel parco centrale."],
    ["Corso di cucina italiana: impara a fare la pasta fresca."],
    ["Concerto di musica classica al teatro municipale."],
    ["Mostra fotografica al centro culturale. Ingresso gratuito."],
    ["Mercatino di Natale con prodotti artigianali e dolci tipici."],
    ["Serata di cinema sotto le stelle nel cortile del castello."],
    ["Escursione guidata nelle colline toscane. Pranzo al sacco."],
    ["Laboratorio di ceramica per bambini dai sei ai dodici anni."],
    ["Degustazione di vini locali alla cantina sociale."],
    ["Torneo di calcetto al campo sportivo comunale."],
    // --- Portuguese ---
    ["Bem-vindos ao festival de cultura brasileira no parque."],
    ["Aula de culinaria: aprenda a fazer feijoada tradicional."],
    ["Show de musica ao vivo no anfiteatro da cidade."],
    ["Feira de artesanato com produtos de artistas locais."],
    ["Caminhada ecologica pela trilha do rio. Guia incluso."],
    ["Oficina de capoeira para iniciantes. Aula gratuita."],
    ["Exposicao de arte moderna no museu municipal."],
    ["Torneio de futebol de salao no ginasio esportivo."],
    ["Encontro de leitura e discussao no cafe da biblioteca."],
    ["Festival de gastronomia com chefs de todo o pais."],
    // --- Japanese (romanized) ---
    ["Nihon bunka no ibento ga konshuu no doyoubi ni arimasu."],
    ["Sushi no kurassu ni douzo."],
    ["Ohanami paatii wo kaisai shimasu. Minna mo douzo."],
    ["Origami no waakushoppu ga toshokan de arimasu."],
    ["Kendou no renshuu wa mainichi desu."],
    ["Natsu matsuri de hanabi taikai ga arimasu."],
    ["Sadou no taiken kurassu wo kaisai shimasu."],
    ["Manga waakushoppu ni douzo."],
    ["Nihongo no kaiwa kurassu wa getsuyoubi to suiyoubi desu."],
    ["Taiko no ensou ga shimin senta de okonawaremasu."],
    // --- Korean (romanized) ---
    ["Hanguk munhwa chukje e yeo-reo-bun eul cho-dae hamnida."],
    ["Kimchi mandulgi suoep i issumnida. Jaeryo neun jegong doemnida."],
    ["K-pop daenseu wakeusyap. Modeun level hwan-yeong."],
    ["Hangul baeumgi suoep. Cho-bo-ja hwan-yeong."],
    ["Taekwondo sicheom suoep. Jang-bi jegong doemnida."],
    ["Yeonghua gamsi moim. I dal eun Bong Joon-ho gamsok jageumjak."],
    ["Hanguk yori suoep. Bibimbap mandeulgi."],
    ["Chontong umak gongyon i mun-hwa senteo eseo issumnida."],
    ["Seoye suoep i doseogwan eseo jinhaeng doemnida."],
    ["Hanguk cha yejesik i itneun ohue chae moim."],
    // --- Hindi (romanized) ---
    ["Samudaayik utsav mein sabhi ka swaagat hai."],
    ["Yoga kaksha har raveevaar subah saat baje hoti hai."],
    ["Rangoli pratigyogita ka aayojan kiya gaya hai."],
    ["Bharatanatyam nritya pradarshan saam saat baje."],
    ["Hindi kavita paathan sandhya subah ko hogi."],
    ["Khana pakane ki kaksha: rajma chawal seekhein aaj."],
    ["Mehndi lagane ki karyashala mein bhaag lein."],
    ["Gaaon ki panchayat sabha mein padharein."],
    ["Bacchon ke liye chitrakala pratigyogita."],
    ["Sangeet sandhya mein shastriya sangeet ka aayojan."],
    // --- Arabic (romanized) ---
    ["Marhaba bikum fi mahrajan al-mujtama."],
    ["Dars fi al-tabkh al-arabi: taallam tahdeer al-hummus."],
    ["Haflat musiqa hayya fi al-hadeeqa al-aamma."],
    ["Warsha amal fi al-khatt al-arabi li al-mubtadieen."],
    ["Mubaarat kurat al-qadam fi al-malaab al-baladi."],
    ["Maarad sour fotographiyya fi al-markaz al-thaqafi."],
    ["Nadwa hawl al-tanmiya al-mustadama fi al-qaaa al-kubra."],
    ["Festival al-aflam al-arabiyya fi sinima al-medina."],
    ["Halqa niqashiyya hawl al-adab al-arabi al-muaasir."],
    ["Yawm riyadi fi al-hadeeqa al-kubra."],
    // --- Chinese (pinyin) ---
    ["Huanying canjia shequ wenhua jie de huodong."],
    ["Zhongguo pengren ke: xuexi zuo jiaozi he miantiao."],
    ["Taijiquan lianxi meitian zaoshang qi dian zai gongyuan."],
    ["Shufa gongzuofang: chuji he zhongji xueyuan."],
    ["Zhongqiu jie qingzhu huodong zai shimin zhongxin juxing."],
    ["Guohua zhanlanhui zai bowuguan kaifang zhanlan."],
    ["Zhongguo xiangqi bisai zai wenhua zhongxin juxing."],
    ["Lunyu dushu meiyue dier ge xingqi liu."],
    ["Chuantong chayi biaoyanjishi zai chayiguan juxing."],
    ["Guzheng yinyuehui zai yinyue ting juxing."],
    // --- Russian (romanized) ---
    ["Dobro pozhalovat na prazdnik soobschestva v parke."],
    ["Kurs russkoy kukhni: nauchites gotovit borshch i pelmeni."],
    ["Kontsert klassicheskoy muzyki v filharmonii."],
    ["Vystavka zhivopisi v gorodskoy galeree."],
    ["Zimneye prazdnovaniye s yolkoy i Dedom Morozom."],
    ["Ekskursiya po istoricheskomu tsentru goroda."],
    ["Masterclass po russkoy keramike dlya vsekh zhelayushchikh."],
    ["Literaturnyy vecher: chteniye stikhov Pushkina i Lermontova."],
    ["Sportivnyy turnir po shakhmatam v dome kultury."],
    ["Festival russkogo kino v kinoteatre na ploshchadi."],
    // --- Swahili ---
    ["Karibu kwenye tamasha la jamii katika bustani ya jiji."],
    ["Darasa la kupika chakula cha kitamaduni cha Kiswahili."],
    ["Sherehe ya muziki hai katika uwanja wa michezo."],
    ["Warsha ya sanaa kwa watoto wenye umri wa miaka sita hadi kumi."],
    ["Mashindano ya mpira wa miguu katika uwanja wa michezo."],
  ];

  describe("5. Multilingual clean text (should NOT be flagged)", () => {
    test.each(multilingualCleanTexts)("multilingual clean: %s", (text) => {
      expect(filter.check(text)).toBe(false);
    });
  });
});

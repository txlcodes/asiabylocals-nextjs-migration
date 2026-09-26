// Siem Reap authority pages (2026-09). Same CityInfoData shape as cityInfoContent.ts.
// Reached via getCambodiaInfoContent() -> getCityInfoContent().
//
// Every price, opening hour and distance here was checked in September 2026
// against Angkor Enterprise (the only official pass seller) and the published
// park hours, not recalled. The airport numbers matter because both Cambodian
// airports moved recently and most itineraries online still assume the old ones.
import type { CityInfoData } from './cityInfoContent';

const R2 = 'https://images.asiabylocals.com/asiabylocals/tours';
const img = (slug: string) => `${R2}/${slug}/img0/1600.webp`;

const IMG = {
    smallCircuit: img('angkor-wat-angkor-thom-and-ta-prohm-day-trip-with-sunset-siem-reap'),
    grandCircuit: img('grand-circle-tour-and-sunset-on-bakheng-hill-with-guide-in-siem-reap'),
    sunriseLake: img('angkor-wat-sunrise-and-tonle-sap-lake-floating-village-tour'),
    farTemples: img('beng-mealea-banteay-srei-and-kulen-waterfall-trip'),
    kohKer: img('from-siem-reap-koh-ker-and-beng-mealea-temples-tour-siem-reap'),
    food: img('cambodia-local-street-foods-and-local-guide'),
    countryside: img('authentic-countryside-sunset-tuk-tuk-tour-in-siem-reap'),
    circus: img('phare-the-cambodian-circus-show-with-pickup-and-drop-off'),
    transfer: img('angkor-international-airport-sai-private-shared-transfers-siem-reap'),
    cycle: img('cycle-angkor-backroad-bike-tour-e-bike-or-tuk-tuk-siem-reap'),
    battambang: img('battambang-full-day-tour-from-siem-reap-siem-reap'),
};

const CARD = {
    smallCircuit: { slug: 'angkor-wat-angkor-thom-and-ta-prohm-day-trip', title: 'Angkor Wat, Angkor Thom & Ta Prohm with Sunset', description: 'The small circuit done in one day with a licensed guide — the three temples everyone comes for, in the order that avoids the worst of the crowds.', price: 'From $25', duration: 'Full day', image: IMG.smallCircuit },
    grandCircuit: { slug: 'grand-circle-tour-and-sunset-on-bakheng-hill-with', title: 'Grand Circuit & Sunset on Bakheng Hill', description: 'Preah Khan, Neak Pean, Ta Som and East Mebon — the loop almost nobody does, with a fraction of the people.', price: 'From $25', duration: '8 hours', image: IMG.grandCircuit },
    sunriseLake: { slug: 'angkor-wat-sunrise-and-tonle-sap-lake-floating-vil', title: 'Angkor Wat Sunrise & Tonle Sap Floating Village', description: 'First light at the northern reflecting pool, then out to the stilt villages on the lake in the afternoon.', price: 'From $231', duration: '8 hours', image: IMG.sunriseLake },
    farTemples: { slug: 'beng-mealea-banteay-srei-and-kulen-waterfall-trip', title: 'Banteay Srei, Beng Mealea & Kulen Waterfall', description: 'The finest carving in Cambodia and a temple the jungle still owns, in one day out of town.', price: 'From $68', duration: 'Full day', image: IMG.farTemples },
    kohKer: { slug: 'from-siem-reap-koh-ker-and-beng-mealea-temples', title: 'Koh Ker & Beng Mealea Temples', description: "The 10th-century capital's 36-metre stepped pyramid, plus an uncleared temple on Angkor Wat's scale. Almost no queue at either.", price: 'From $65', duration: '8 hours', image: IMG.kohKer },
    food: { slug: 'cambodia-local-street-foods-and-local-guide', title: 'Cambodian Street Food with a Local Guide', description: 'The stalls with no English menu, in the order a Khmer family would eat them — amok, lok lak, num banh chok.', price: 'From $117', duration: '8 hours', image: IMG.food },
    countryside: { slug: 'authentic-countryside-sunset-tuk-tuk-tour-in-siem-', title: 'Countryside Sunset Tuk-Tuk Tour', description: 'Rice fields, sugar palms and villages five minutes off the temple road, timed for the last hour of light.', price: 'From $103', duration: '4 hours', image: IMG.countryside },
    circus: { slug: 'phare-the-cambodian-circus-show-with-pickup-and-dr', title: 'Phare: The Cambodian Circus', description: 'Modern acrobatic theatre about Cambodian life, staged by graduates of a Battambang school for children from hard backgrounds.', price: 'From $57', duration: '1.5 hours', image: IMG.circus },
    transfer: { slug: 'angkor-international-airport-sai-privateshared-tra', title: 'Siem Reap Angkor Airport (SAI) Transfers', description: 'The 45 km run between Siem Reap-Angkor International and town, with a driver who is already waiting when you land.', price: 'From $33', duration: '1 hour', image: IMG.transfer },
    cycle: { slug: 'cycle-angkor-backroad-bike-tour-e-bike-or-tuk', title: 'Angkor Backroad Bike Tour (E-Bike or Tuk-Tuk)', description: 'The temple circuits on the back lanes rather than the tour-bus road. Realistic November to February, punishing in April.', price: 'From $72', duration: '8 hours', image: IMG.cycle },
    battambang: { slug: 'battambang-full-day-tour-from-siem-reap', title: 'Battambang Day Trip from Siem Reap', description: 'The bamboo train and the bat exodus at Phnom Sampeau, in the calmest town in the country.', price: 'From $293', duration: 'Full day', image: IMG.battambang },
};

export function getSiemReapInfoContent(slug: string): CityInfoData | null {
    switch (slug) {

        case 'angkor-wat-tickets-and-pass-guide':
            return {
                title: 'Angkor Pass 2026: Prices, the 10-Day Rule and Where to Actually Buy It',
                seoTitle: 'Angkor Wat Tickets 2026: Prices & Pass Rules',
                description: 'Angkor pass prices for 2026 — USD 37, 62 and 72 — plus the rule almost every itinerary gets wrong: the 3-day pass is valid on any 3 days inside a 10-day window.',
                heroImage: IMG.smallCircuit,
                fastFacts: [
                    { icon: 'Wallet', label: '1-day pass', value: 'USD 37' },
                    { icon: 'Wallet', label: '3-day pass', value: 'USD 62, any 3 days in 10' },
                    { icon: 'Wallet', label: '7-day pass', value: 'USD 72, any 7 days in 30' },
                    { icon: 'Clock', label: 'Ticket office', value: '04:30 – 17:30 daily' },
                ],
                sections: [
                    {
                        title: 'The rule nobody tells you: three days does not mean three days in a row',
                        icon: 'Star',
                        content: "This is the single most useful thing to know before you plan anything in Siem Reap, and almost every itinerary online gets it wrong.\n\nThe **three-day Angkor pass costs USD 62 and is valid on any three days inside a ten-day window** from first use. Not three consecutive days. The **seven-day pass at USD 72** works the same way across thirty days. You can do a sunrise day, take a full day off for the [Tonle Sap](/cambodia/siem-reap/tonle-sap-floating-villages-guide) or the countryside, and come back for the far temples on day four — and the same pass covers all of it.\n\nWhy it matters: temple fatigue is real and it arrives faster than people expect. By the fourth hour of a second straight day on sandstone in the mid-thirties, most visitors have stopped seeing carvings and started seeing stone. **Spreading three temple days over five calendar days costs exactly nothing extra**, and it is the difference between remembering Angkor and enduring it.\n\nOne more piece of arithmetic that catches people out: **two single-day passes cost USD 74, which is more than the three-day pass at USD 62.** If there is any chance at all you will want a second temple day, the three-day is already the cheaper ticket. And if you are planning four temple days, the seven-day pass at USD 72 beats buying a three-day plus a one-day at USD 99.",
                        tourCard: CARD.smallCircuit,
                    },
                    {
                        title: 'Where to buy it, and the mistake that gets people turned back',
                        icon: 'MapPin',
                        content: "Passes are sold by **Angkor Enterprise**, the state operator, and by nobody else. There is **one ticket office**, a purpose-built building on the road out to the temples about four kilometres from town, and an official online sale on their own site.\n\n**Tickets are not sold at the temple gates.** This is the error that costs people a morning: a driver says he will sort the ticket when you get to Angkor Wat, you arrive at 05:10, and you are turned back at the checkpoint to drive twenty minutes in the wrong direction. Anyone who tells you otherwise is either confused or has not done it recently.\n\n**Opening hours are 04:30 to 17:30.** The 04:30 start exists for the sunrise crowd, which means the queue at that hour is real. **Buy your pass the evening before your first temple day** — it is a ten-minute errand that saves you the worst twenty minutes of the trip.\n\nWhat you need: **your passport**. They photograph you at the counter and your face is printed on the pass, which is checked at every temple, so the pass is not transferable and a friend's leftover days are worthless to you. **Children under twelve are free** on the strength of a passport showing the date of birth. There is **no student rate, no group rate and no half-day ticket**, whatever a booking site tells you. Payment is by card or US dollars.\n\nIf someone offers to sell you a pass at a markup, they are not an agent and they are not saving you anything — the price is fixed and the only seller is the state.",
                    },
                    {
                        title: 'What the pass does not cover',
                        icon: 'AlertTriangle',
                        content: "The Angkor Pass covers the Angkor Archaeological Park, which is a large area but not everything a tour will sell you.\n\n**Phnom Kulen** charges its own **USD 20** entry. It is the plateau the Angkor temples were quarried from and where Jayavarman II declared himself universal monarch in 802 — the date Cambodians give as the founding of the empire. The waterfall, the carved river bed and the reclining Buddha at the summit are worth it in or just after the rains, when the falls actually run. In March they are a trickle and the USD 20 stings.\n\n**Koh Ker** and **Preah Vihear** both sit well outside the park and carry separate admission. So does **Banteay Chhmar** up towards the Thai border. Beng Mealea's fee is now generally folded into the Angkor pass, but confirm it with your operator rather than at the gate.\n\n**A guide is not included in anything.** Licensed Cambodian guides are registered with the Ministry of Tourism and wear a numbered badge; a guide typically costs USD 35–45 a day on top of transport. You do not need one for Banteay Srei or the lake. You do want one for [Angkor Thom and the Bayon](/cambodia/siem-reap/angkor-temples-small-vs-grand-circuit), where nothing is labelled and the bas-relief galleries are unreadable without someone to point at them.\n\n**Transport is separate too.** A tuk-tuk for a small-circuit day runs roughly USD 18–25, a private car with driver USD 35–55, and both are hired by the day because the driver waits at each temple rather than dropping you and leaving.",
                        tourCard: CARD.farTemples,
                    },
                    {
                        title: 'Planning your pass around your trip length',
                        icon: 'Calendar',
                        content: "**One temple day** — the one-day pass at USD 37. This is the right answer for a stopover, and it buys you Angkor Wat, Angkor Thom and Ta Prohm at a brisk pace. You will not see Banteay Srei.\n\n**Two or three temple days** — the three-day pass at USD 62, always. Two singles cost more. Use the ten-day window: temples, a break, temples.\n\n**Four or more temple days** — the seven-day pass at USD 72. Ten dollars over the three-day removes every scheduling constraint for thirty days, and it is what makes Koh Ker and Preah Vihear sensible additions rather than expensive ones.\n\nFor a sense of how this fits an actual trip, our [3-day Siem Reap itinerary](/cambodia/siem-reap/siem-reap-3-day-itinerary) spreads two temple days around a lake day on a three-day pass, and the [Cambodia itinerary pages](/cambodia/itineraries) do the same at every length from three to ten days.\n\nOne last thing worth saying plainly: the pass money goes to Angkor Enterprise and a share is committed to conservation and to Kantha Bopha children's hospitals. It is one of the few entry fees in the region where the destination of the money is publicly stated.",
                        tourCard: CARD.kohKer,
                    },
                ],
                faqs: [
                    { q: 'How much is an Angkor Wat ticket in 2026?', a: 'USD 37 for one day, USD 62 for three days and USD 72 for seven days. Prices are set by Angkor Enterprise, the only official seller, and are identical online and at the ticket office. Children under twelve are free on a passport.' },
                    { q: 'Does the 3-day Angkor pass have to be used on consecutive days?', a: 'No. It is valid on any three days inside a ten-day window from first use, and the seven-day pass covers any seven days inside thirty. You can take a day off between temple days at no extra cost, which is the single best way to avoid temple fatigue.' },
                    { q: 'Can I buy the Angkor pass at Angkor Wat?', a: 'No. Passes are sold only at the Angkor Enterprise ticket office about four kilometres out on the temple road, and on their official website. You will be turned back at the temple checkpoint without one, so buy it the evening before your sunrise.' },
                    { q: 'Do I need my passport to buy an Angkor pass?', a: 'Yes. They photograph you at the counter and print your face on the pass, which is checked at every temple. That also means a pass is not transferable — you cannot use a friend’s unused days.' },
                    { q: 'Is there a student or group discount for Angkor?', a: 'No. There is no student rate, no group rate and no half-day ticket. Under-twelves are free on a passport and that is the only concession. Anyone selling a discounted pass is selling you something that does not exist.' },
                    { q: 'What time does the Angkor ticket office open?', a: '04:30, specifically so the sunrise crowd can buy on the morning. It closes at 17:30. The park itself is open 05:00 to 18:30, with Phnom Bakheng staying open to 19:00 for sunset.' },
                ],
            };

        case 'angkor-wat-sunrise-guide':
            return {
                title: 'Angkor Wat Sunrise: Why It Works, Where to Stand and Whether to Bother',
                seoTitle: 'Angkor Wat Sunrise Guide: Times & Best Spot',
                description: 'An honest Angkor Wat sunrise guide: why the temple faces west, which reflecting pool to stand at, what time to leave Siem Reap, and when to skip it entirely.',
                heroImage: IMG.sunriseLake,
                fastFacts: [
                    { icon: 'Clock', label: 'Leave town', value: '04:30' },
                    { icon: 'Clock', label: 'Angkor Wat opens', value: '05:00' },
                    { icon: 'MapPin', label: 'Best spot', value: 'Northern reflecting pool' },
                    { icon: 'Calendar', label: 'Clearest skies', value: 'November – March' },
                ],
                sections: [
                    {
                        title: 'The reason it works here and almost nowhere else',
                        icon: 'Star',
                        content: "Angkor Wat sunrise is one of the few famous travel moments that is famous for a structural reason rather than a marketing one.\n\n**Angkor Wat faces west.** Almost every other Khmer temple faces east, towards the rising sun; Suryavarman II's temple, built in the first half of the 12th century, is oriented the other way. Scholars argue about why — an association with Vishnu, a funerary function, or both — but the practical consequence is this: at dawn you stand on the western approach looking east at the temple, with the sun coming up **behind** the towers. That is what gives you the black silhouette of the five towers against a colouring sky, and it is why the same photograph is not available at the Bayon or Ta Prohm.\n\nThe second piece is water. The **northern reflecting pool** on the left of the causeway doubles the towers, and when it is full and still you get the symmetrical image that has sold this country for forty years. It is a genuinely good sight and it is genuinely worth one 04:30 alarm.\n\nWhat it is not is a private moment. On a dry-season morning there will be several hundred people along that pool edge, and phones held above heads. Knowing that in advance is most of the battle.",
                        tourCard: CARD.sunriseLake,
                    },
                    {
                        title: 'The timings that actually matter',
                        icon: 'Clock',
                        content: "**Leave Siem Reap at 04:30.** The drive is about twenty minutes. Angkor Wat admits visitors from **05:00**, and the sky starts colouring well before the sun clears the towers — which is the part people miss. Arriving at 05:45 because sunrise is 'at six' means arriving after the best of it.\n\n**Have your pass already.** The Angkor Enterprise ticket office opens at 04:30 too, but so does everyone else's plan; buying the evening before turns a twenty-minute queue into a non-event. Full detail on that in our [Angkor pass guide](/cambodia/siem-reap/angkor-wat-tickets-and-pass-guide).\n\n**Where to stand.** The northern pool is the classic and the crowded one. The **southern pool** gives you the same composition with noticeably fewer people, and most guides will steer you there if you ask. A third option almost nobody takes: walk past both pools, go inside the temple as the crowd is still at the water, and have the galleries close to yourself for twenty minutes.\n\n**When the crowd breaks for breakfast** — and it does, around 06:30, en masse to the stalls opposite — the causeway empties. That is the best twenty minutes of the morning and it is free.\n\n**Bring a torch.** The causeway is unlit before 05:30 and the sandstone is uneven. A phone light works; a headtorch works better.",
                    },
                    {
                        title: 'Season, weather, and when it will not happen',
                        icon: 'Calendar',
                        content: "**November to March** is the dry season and gives the most reliable clear skies. It is also the busiest.\n\n**The rains, June to October**, are more interesting than people expect. Cloud either kills the sunrise outright or makes it — a sky with structure in it produces far better colour than an empty blue one. The pools are also full, which they are not always in March. You are gambling, but the payoff is higher and the pool edge is emptier.\n\n**March to May** is the hot season and the sunrise is the only comfortable part of the day, which is an argument for doing it rather than against.\n\nTwo honest warnings. First, **the pools can be low or drained** in the dry months and during maintenance, and without water there is no reflection — just a silhouette. Second, there is no refund and no rain check; you have spent the 04:30 either way.\n\nIf you want the sunrise without the gamble, the equinoxes around **21 March and 23 September** are the dates the sun rises directly over the central tower. Those two mornings are the busiest of the year at that pool by a wide margin.",
                    },
                    {
                        title: 'When to skip it, and what to do instead',
                        icon: 'AlertTriangle',
                        content: "There is a version of this trip where you skip the sunrise and have a better day, and nobody selling tours will tell you so.\n\n**Skip it if you land the evening before.** The run in from the new airport is 45 kilometres and 45 to 60 minutes, so an arrival day already ends late; adding a 04:00 alarm on top of a flight is how people spend day two exhausted and day three ill.\n\n**Skip it if you have only one temple day.** The sunrise costs you the freshest three hours of your only day at the busiest moment in the park. Going in at 09:00, when the sunrise crowd has left and the day-tour buses have not arrived, gives you Angkor Wat quieter than dawn does.\n\n**The alternative is sunset**, and it is underrated. **Pre Rup** is the better of the two sunset temples: warm laterite that goes orange in the last light, a view over forest, and a fraction of the scrum. **Phnom Bakheng** is the famous one, stays open to 19:00, and caps how many people are allowed on top, which means queueing from mid-afternoon for a hill that is mostly other people.\n\nAnd if what you actually want is the quiet rather than the light, take the [grand circuit](/cambodia/siem-reap/angkor-temples-small-vs-grand-circuit) instead. Preah Khan at nine in the morning has the same trees-through-galleries atmosphere as Ta Prohm with a tenth of the visitors, and nobody has to get up at four for it.",
                        tourCard: CARD.grandCircuit,
                    },
                ],
                faqs: [
                    { q: 'What time is sunrise at Angkor Wat?', a: 'Angkor Wat opens at 05:00 and the sky begins colouring before the sun clears the towers, so leave Siem Reap around 04:30 for the twenty-minute drive. Actual sunrise runs roughly 05:40 to 06:20 depending on the month, but the best light is before it.' },
                    { q: 'Which reflecting pool is better for Angkor Wat sunrise?', a: 'The northern pool is the classic composition and the crowded one. The southern pool gives you the same view with meaningfully fewer people. Ask your guide for the southern side if you want the photograph without the wall of phones.' },
                    { q: 'Why does Angkor Wat face west?', a: 'It is the only major Khmer temple oriented that way. The usual explanations are its dedication to Vishnu, who is associated with the west, and a probable funerary role for Suryavarman II. The practical result is that the sun rises behind the towers, which is what makes the dawn silhouette and the pool reflection work.' },
                    { q: 'Is Angkor Wat sunrise worth it?', a: 'Once, yes — it is a real sight and not a manufactured one. Skip it if you landed the night before or if you only have one temple day, because it costs you your freshest hours at the park’s busiest moment. Sunset from Pre Rup is the low-effort alternative.' },
                    { q: 'How crowded is Angkor Wat at sunrise?', a: 'Several hundred people along the northern pool on a dry-season morning. The crowd thins dramatically around 06:30 when it leaves for breakfast, and the twenty minutes after that are the best of the day inside the temple.' },
                    { q: 'Do I need a guide for the sunrise?', a: 'Not for the sunrise itself, but a licensed guide earns their fee once you go inside — the 600 metres of bas-relief in the outer gallery are unlabelled and you will walk past the best of it otherwise.' },
                ],
            };

        case 'angkor-temples-small-vs-grand-circuit':
            return {
                title: 'Angkor Small Circuit vs Grand Circuit: Which Temples, in Which Order',
                seoTitle: 'Angkor Small vs Grand Circuit: Which to Do',
                description: 'What is on the Angkor small circuit and the grand circuit, how long each takes, and why the grand circuit is the emptier and often better day.',
                heroImage: IMG.grandCircuit,
                fastFacts: [
                    { icon: 'MapPin', label: 'Small circuit', value: '~17 km, the famous three' },
                    { icon: 'MapPin', label: 'Grand circuit', value: '~26 km, far quieter' },
                    { icon: 'Clock', label: 'Park hours', value: '05:00 – 18:30' },
                    { icon: 'Star', label: 'Best sunset', value: 'Pre Rup, not Bakheng' },
                ],
                sections: [
                    {
                        title: 'The small circuit: the three everyone comes for',
                        icon: 'Star',
                        content: "The **small circuit** is roughly seventeen kilometres and covers **Angkor Wat, Angkor Thom with the Bayon, and Ta Prohm**. If you have one day, this is the day.\n\n**Angkor Wat** was built in the first half of the 12th century by Suryavarman II as a Hindu temple to Vishnu and later turned to Buddhist use. At around 162 hectares inside its moat it is the largest religious monument on earth. The outer gallery carries about **600 metres of continuous bas-relief** — the Churning of the Ocean of Milk on the east side is the one to find — and the central towers are a model of Mount Meru. The upper level enforces its dress code at the stairs: shoulders and knees covered, no vests, no argument.\n\n**Angkor Thom** is not a temple but a walled city, laid out by Jayavarman VII around 1200 behind eight metres of wall and a moat, with five gates whose causeways are lined by gods and demons hauling on a serpent. At its centre the **Bayon** carries over 200 enormous serene faces. The thing most visitors miss is at eye level: the outer galleries show not gods but ordinary Khmer life — markets, a cockfight, a woman giving birth, the naval battle against the Chams. This is the single best argument for hiring a guide.\n\n**Ta Prohm** is the one the French conservators deliberately left half-swallowed, so silk-cotton and strangler fig roots still pour over the galleries. Jayavarman VII built it in 1186 as a Buddhist monastery and university, and an inscription records that it supported **more than 12,500 people**, with another 80,000 in the villages that fed it.",
                        tourCard: CARD.smallCircuit,
                    },
                    {
                        title: 'The grand circuit: the loop almost nobody does',
                        icon: 'MapPin',
                        content: "The **grand circuit** runs about twenty-six kilometres around the outside of Angkor Thom and takes in **Preah Khan, Neak Pean, Ta Som, East Mebon and Pre Rup**. Most visitors never do it, which is precisely the point.\n\n**Preah Khan** is the one to give real time to. Built by the same king as Ta Prohm and larger, it has the same trees through the same galleries with **a tenth of the visitors**, and a long processional axis you can walk end to end almost alone. If the queue for Ta Prohm's famous tree has turned into a twenty-minute shuffle by mid-morning — and it does — Preah Khan is the honest substitute rather than a consolation.\n\n**Neak Pean** is a small island temple set in a reservoir, reached on a boardwalk. In the wet months it is one of the loveliest things in the park; in the dry months the reservoir empties and the boardwalk crosses mud. Worth checking before you build a morning around it.\n\n**East Mebon**'s stone elephants stand at the corners of what used to be an island in an enormous artificial lake. Standing there and realising the ground you drove across was under water tells you more about Khmer hydraulic engineering than any museum panel.\n\n**Pre Rup** is where the day should end. It is the better of the two sunset temples — warm laterite that goes properly orange, a view over uninterrupted forest, and none of the scrum at Phnom Bakheng, which caps its numbers and starts queueing in the middle of the afternoon.",
                        tourCard: CARD.grandCircuit,
                    },
                    {
                        title: 'Which one, and in what order',
                        icon: 'Calendar',
                        content: "**One day**: small circuit, no question. Sunrise at Angkor Wat if you want it, the temple's interior when the crowd goes to breakfast, Angkor Thom and the Bayon late morning, Ta Prohm in the afternoon.\n\n**Two days**: small circuit, then the far temples — **Banteay Srei** 37 kilometres north-east, consecrated in 967 and carved in a pink sandstone that holds detail nothing else here keeps, plus **Beng Mealea**, a 12th-century temple on Angkor Wat's scale left uncleared and crossed on walkways over its own collapse.\n\n**Three days**: add the grand circuit, and put it in the **middle** rather than last. It is the gentlest of the three days and it works better as a breather between the small circuit and a long drive out to Koh Ker than as a tired finale.\n\n**Four days or more**: the outlying sites. **Koh Ker**, two hours north-east, was the capital for about two decades in the 10th century and has Prasat Thom, a seven-tiered sandstone pyramid 36 metres high with a wooden stair to the top. **Preah Vihear** sits on a cliff on the Thai border, three to three and a half hours each way, with a final climb by local 4x4. Both charge their own admission on top of the Angkor pass.\n\nRemember the pass arithmetic: the three-day pass spans a **ten-day window**, so a day off in the middle costs nothing. At four temple days the seven-day pass at USD 72 is cheaper than the alternatives.",
                        tourCard: CARD.kohKer,
                    },
                    {
                        title: 'Getting round: tuk-tuk, car, or bicycle',
                        icon: 'Info',
                        content: "**Tuk-tuk** is the normal way and the right one for most people on the small circuit. Around USD 18–25 for the day, open sides so you get air moving, and the driver waits at each temple rather than dropping you — which is why it is hired by the day, not by the trip.\n\n**Private car with driver** runs roughly USD 35–55 a day and earns it from March to May, when the heat sits in the mid-thirties from late morning, and on the long runs to Banteay Srei, Koh Ker or Preah Vihear.\n\n**Bicycle or e-bike** is genuinely good from November to February and genuinely punishing in April. The small circuit's seventeen kilometres is flat and the back lanes between temples are the best part of the day — rice fields, villages, no buses. The grand circuit's twenty-six kilometres is a longer but quieter ride. Start at dawn and be off the bike by noon.\n\n**A licensed guide** costs USD 35–45 a day on top of transport. Take one for Angkor Thom and Angkor Wat, where nothing is labelled. You do not need one for Banteay Srei, Pre Rup or the lake. Cambodian guides are registered with the Ministry of Tourism and wear a numbered badge, which is worth glancing at.\n\n**Water and shade.** There is no shade in the Angkor Wat courtyards and almost none on the Bayon's upper terrace. Carry more water than feels sensible, start early, and take the middle of the day off in the hot months — the temples are still there at four o'clock.",
                        tourCard: CARD.cycle,
                    },
                ],
                faqs: [
                    { q: 'What is the difference between the Angkor small circuit and grand circuit?', a: 'The small circuit is about 17 km and covers Angkor Wat, Angkor Thom with the Bayon, and Ta Prohm — the three famous temples. The grand circuit is about 26 km and loops outside Angkor Thom to Preah Khan, Neak Pean, Ta Som, East Mebon and Pre Rup. The small circuit has the icons; the grand circuit has the space.' },
                    { q: 'Can I see Angkor in one day?', a: 'Yes, the small circuit fits into one full day and covers what most people come for. You will not reach Banteay Srei, Beng Mealea or the grand circuit, and you will be moving briskly. Two days is the point where it stops feeling like a forced march.' },
                    { q: 'Is Preah Khan worth visiting?', a: 'It is the most underrated temple in the park. Built by the same king as Ta Prohm and larger, with the same roots through the same galleries and roughly a tenth of the visitors, plus a processional axis you can often walk alone.' },
                    { q: 'Where is the best sunset at Angkor?', a: 'Pre Rup. Warm laterite that goes orange in the last light and a view over forest, with none of the crowd control. Phnom Bakheng is the famous one, open to 19:00, but it caps numbers and the queue starts mid-afternoon.' },
                    { q: 'Can you cycle around the Angkor temples?', a: 'Yes, and it is one of the best ways to do it from November to February. The small circuit is 17 flat kilometres and the lanes between temples are the nicest part. From March to May the heat makes it a bad idea after about 10am.' },
                    { q: 'Do I need a guide at Angkor?', a: 'For Angkor Thom and Angkor Wat, yes — the Bayon galleries and the 600 metres of bas-relief are unlabelled, and the social history carved at eye level is the part everyone walks past. For Banteay Srei, Pre Rup and the lake a driver is enough.' },
                ],
            };

        case 'best-time-to-visit-siem-reap':
            return {
                title: 'Best Time to Visit Siem Reap: Month by Month, Including What the Lake Is Doing',
                seoTitle: 'Best Time to Visit Siem Reap: Month by Month',
                description: 'Siem Reap month by month — dry season crowds, the hot season reality, and why the Tonle Sap reversing decides whether a floating village trip is worth booking.',
                heroImage: IMG.countryside,
                fastFacts: [
                    { icon: 'Star', label: 'Best overall', value: 'November – February' },
                    { icon: 'AlertTriangle', label: 'Hottest', value: 'April, mid-30s °C' },
                    { icon: 'Calendar', label: 'Lake at its fullest', value: 'September – November' },
                    { icon: 'Wallet', label: 'Cheapest', value: 'May – September' },
                ],
                sections: [
                    {
                        title: 'The short answer, and the caveat everyone leaves out',
                        icon: 'Star',
                        content: "**November to February** is the answer for most people: dry, clear skies for sunrise, mornings comfortable enough to spend four hours on sandstone, and every road and boat running. It is also the busiest and most expensive stretch of the year.\n\nThe caveat is the lake. The **Tonle Sap reverses direction twice a year** — during the monsoon the Mekong pushes water back up the Tonle Sap river and the lake swells to several times its dry-season size, then drains again from about November. That single fact decides whether the floating villages are worth a day of your trip.\n\nSo the honest version is this: **November to February is best for the temples, and September to November is best for the lake**, and the overlap in November is why that month quietly beats December for a lot of travellers. Detail on which village works in which month is in our [Tonle Sap guide](/cambodia/siem-reap/tonle-sap-floating-villages-guide).\n\nThe other thing worth saying out loud: **the rains are underrated**. June to October usually means one heavy hour in the afternoon rather than all-day drizzle, the temples are green and comparatively empty, the moats and reflecting pools are full, and prices are a third lower. Photographers who know Angkor tend to come then.",
                        tourCard: CARD.sunriseLake,
                    },
                    {
                        title: 'Month by month',
                        icon: 'Calendar',
                        content: "**November** — Arguably the best month of the year. The rains have stopped, the light is clean, the landscape is still green rather than dust-brown, the lake is near its fullest, and peak pricing has not fully arrived. **Bon Om Touk**, the water festival marking the river's reversal, falls in November and is the biggest holiday in the Cambodian calendar.\n\n**December** — Perfect conditions and the year's heaviest crowds. Christmas and New Year see room rates double and the sunrise pool three deep. Book weeks out.\n\n**January** — Dry, the coolest mornings of the year, and crowds easing after the first week. Excellent.\n\n**February** — Reliable and dry, still comfortable, the lake dropping. A good month with no real flaw beyond price.\n\n**March** — Heat arriving. Mornings still fine, afternoons hard work. The lake is low and the floating villages are at their least interesting.\n\n**April** — The hottest month, mid-thirties by late morning with no shade in the courtyards. **Khmer New Year**, around 13–16 April, is a genuine national shutdown and a water fight; Siem Reap is busy with domestic travellers and a lot of small businesses close for it.\n\n**May–June** — The rains establish. Hot and humid, with afternoon storms. Prices fall noticeably. The landscape starts turning.\n\n**July–August** — Proper wet season, usually a heavy afternoon hour rather than a washout. Green temples, thin crowds, European summer keeps hotels moderately busy anyway.\n\n**September–October** — The wettest weeks, and the best ones for the lake: the Tonle Sap is at maximum, the flooded forest is reachable, and Kampong Phluk's stilt houses stand in water. Cheapest rates of the year. Some unsealed roads to outlying temples get difficult.",
                    },
                    {
                        title: 'Heat, crowds and the shape of a good day',
                        icon: 'Clock',
                        content: "Whatever month you pick, the shape of a Siem Reap day does not change: **the temples reward early mornings and punish the middle of the day.**\n\nFrom March to May the heat sits in the mid-thirties by late morning and there is no shade in the Angkor Wat courtyards or on the Bayon's upper terrace. The move is a **05:00 or 08:00 start, off the stone by noon, and back out at 15:30** for the last three hours. Push through 13:00 in April and you will spend day two in the hotel.\n\nEven in January the same logic holds for crowds rather than heat. Sunrise draws several hundred people to the northern reflecting pool; that crowd leaves en masse for breakfast around 06:30, and the twenty minutes after is the emptiest Angkor Wat gets all day. The tour buses arrive from about 09:00.\n\n**Rain season tactics**: carry a light poncho rather than an umbrella, because the wind comes with it; the sandstone gets genuinely slippery, especially the upper-level stairs at Angkor Wat and the rubble at Beng Mealea; and keep one indoor or short-radius option in reserve — a [cooking class or food walk](/cambodia/siem-reap/siem-reap-food-guide) is the standard rainy-afternoon insurance here.\n\n**Mosquitoes** are worth taking seriously in the wet months, particularly around the lake and at dusk in the countryside. Dengue is present in Cambodia; repellent and covered ankles in the evening are the sensible minimum.",
                        tourCard: CARD.countryside,
                    },
                    {
                        title: 'Prices, booking windows and festivals',
                        icon: 'Wallet',
                        content: "**Peak (20 December – 5 January)**: rates two to three times the annual average, minimum stays at the better hotels, and the sunrise pool at its worst. Book two months out.\n\n**High (November, mid-January – February)**: perhaps 30–50% above low season with good availability. Where most travellers should aim.\n\n**Shoulder (March, October)**: softening prices, workable conditions, noticeably fewer people.\n\n**Low (May – September)**: 30–50% below peak. Very good hotels at ordinary prices, and booking a few days ahead is fine.\n\n**What things cost**: guesthouse double USD 15–30; a good pool hotel USD 40–80; the well-known boutiques USD 120 and up. A tuk-tuk temple day USD 18–25, a private car USD 35–55, a licensed guide USD 35–45. The [Angkor pass](/cambodia/siem-reap/angkor-wat-tickets-and-pass-guide) is USD 62 for three days on top of all of it.\n\n**Festivals to plan around rather than into**: **Khmer New Year** in mid-April shuts much of the country and floods Siem Reap with domestic visitors; **Bon Om Touk**, the water festival, falls in November and is genuinely worth seeing, especially in Phnom Penh where the boat races run on the river; **Pchum Ben** in September or October is a solemn ancestor festival and a public holiday, when pagodas are busy and some businesses close.\n\nIf you are still choosing dates around a whole trip rather than one city, our [Cambodia itineraries](/cambodia/itineraries) set out what each trip length can actually reach.",
                    },
                ],
                faqs: [
                    { q: 'What is the best month to visit Siem Reap?', a: 'November. The rains have finished so the skies are clear, the landscape is still green, the Tonle Sap is near its fullest so the floating villages are at their best, and peak pricing has not fully landed. January is the close second.' },
                    { q: 'Is it worth visiting Angkor in the rainy season?', a: 'Yes, and it is underrated. June to October usually means one heavy afternoon hour rather than all-day rain. The temples are green and much emptier, the moats and reflecting pools are full, and rates are 30–50% lower. Carry a poncho and watch the wet sandstone.' },
                    { q: 'How hot does Siem Reap get?', a: 'April is the hottest month, with mid-thirties Celsius by late morning and no shade in the temple courtyards. From March to May, plan an early start, take the middle of the day off, and go back out after 15:30.' },
                    { q: 'When is the Tonle Sap at its fullest?', a: 'September to November. The monsoon pushes water back up the Tonle Sap river and the lake swells to several times its dry-season size. By March it has drained and the stilt villages stand on dry legs six to ten metres above the ground.' },
                    { q: 'Should I avoid Khmer New Year?', a: 'Plan around it rather than through it. Khmer New Year falls around 13–16 April, shuts a lot of businesses, and fills Siem Reap with domestic travellers. It is a good time to see the country celebrating and a bad time to need anything organised.' },
                    { q: 'How far ahead should I book Siem Reap?', a: 'Two months for the 20 December to 5 January peak, a couple of weeks in the November to February high season for the better guides and small-group sunrise tours, and a few days at any other time of year.' },
                ],
            };

        case 'tonle-sap-floating-villages-guide':
            return {
                title: 'Tonle Sap Floating Villages: Which One, Which Month, and Which to Avoid',
                seoTitle: 'Tonle Sap Floating Villages: Which One to Visit',
                description: 'Kampong Phluk, Kampong Khleang or Chong Kneas — which Tonle Sap floating village to visit, and why the lake reversing twice a year decides it.',
                heroImage: IMG.sunriseLake,
                fastFacts: [
                    { icon: 'MapPin', label: 'Kampong Phluk', value: '~30 km, stilt houses' },
                    { icon: 'MapPin', label: 'Kampong Khleang', value: '~50 km, least visited' },
                    { icon: 'AlertTriangle', label: 'Chong Kneas', value: 'Closest, most touristed' },
                    { icon: 'Calendar', label: 'Lake at its fullest', value: 'September - November' },
                ],
                sections: [
                    {
                        title: 'The lake runs backwards, and that decides your trip',
                        icon: 'Star',
                        content: "The Tonle Sap is the largest freshwater lake in Southeast Asia and it does something no other lake this size does: **it reverses direction twice a year.**\n\nDuring the monsoon the Mekong rises so far that it pushes water back up the Tonle Sap river, into the lake, which swells to several times its dry-season area and depth. From about November the flow turns round and the lake drains back out. The whole ecology runs on that pulse - it is one of the most productive inland fisheries on earth, and the flooded forest around the edge is the nursery.\n\nWhat that means for you is blunt: **a floating village in October and the same village in March are two different trips.** In the wet months the stilt houses stand in water, the boats can push into the flooded forest, and the village is a village on a lake. In March the same houses are dry sticks six to ten metres up in the air, the channel is a shallow brown trench, and the flooded forest is a dusty wood you walk under.\n\nNeither is wrong and both are interesting. But a tour photographed in October will not look like your February booking, and nobody selling the trip will volunteer that. **Ask what the water is doing the month you are going, before you book.**",
                        tourCard: CARD.sunriseLake,
                    },
                    {
                        title: 'The three villages, honestly compared',
                        icon: 'MapPin',
                        content: "**Kampong Phluk** - about 30 kilometres from town, roughly an hour each way plus boat time. This is the one most trips go to and the right default. The houses stand on stilts **six to ten metres high**, which is the image people have in their heads, and when the water is up you transfer to a small paddle boat to go into the flooded forest. Moderately visited but not overrun.\n\n**Kampong Khleang** - about 50 kilometres out and a half-day minimum. The largest of the lake communities and by far the least visited, because the extra hour each way filters out the coach trips. If you want the stilt village without a queue of boats, this is it. The trade-off is the road and the fact that there is less laid on for you, which is rather the point.\n\n**Chong Kneas** - closest to Siem Reap and the most heavily worked by tourism. If a lake trip is being sold very cheaply, this is almost certainly where it goes. It is not a scam, but the boat-to-boat selling is persistent, the 'orphanage' and 'school' stops that some operators build in are worth refusing on principle, and the village itself is the least interesting of the three because it moves with the waterline and has little permanent structure.\n\n**A note on the crocodile farms and floating restaurants**: several tours build in a stop at one. They are not part of the village and you are free to skip them.",
                    },
                    {
                        title: 'Month by month: what you will actually see',
                        icon: 'Calendar',
                        content: "**September to November** - the lake at maximum. Water up to the floor of the stilt houses, flooded forest navigable, birdlife at its best. This is the peak of the trip and it happens to overlap with the cheapest and quietest weeks of the year in Siem Reap. **Bon Om Touk**, the water festival that marks the river's reversal, falls in November and is the biggest holiday in the Cambodian calendar.\n\n**December to January** - still good. Water dropping but the villages still read as villages on water, and the weather is at its best for the rest of your trip.\n\n**February to March** - the lake is visibly down and the trip changes character. The stilts are exposed, the flooded forest is dry, and a lot of visitors come back feeling short-changed. If you are here in these months and the lake is the main reason, consider spending the day on the [countryside and rice fields](/cambodia/siem-reap/best-time-to-visit-siem-reap) instead - it is the honest swap.\n\n**April to June** - the lowest water of the year, and the hottest weather. Some operators stop running to Kampong Phluk altogether because the channel is not navigable. Check before you pay.\n\n**July to August** - filling again. By August the boats are back in the forest and the trip is worth doing.\n\n**Prek Toal**, the bird sanctuary on the far side of the lake, is a different proposition again: a serious early start, a long boat, and the best water-bird colony in Southeast Asia. It is worth it from **December to February** when the birds concentrate as the water drops, and pointless outside that.",
                    },
                    {
                        title: 'Booking it without getting stung',
                        icon: 'Wallet',
                        content: "**Boat fees are separate and they are the part that surprises people.** The community boat charge at Kampong Phluk is collected at the pier and is not always included in a cheap tour price. Ask whether your quote covers the boat, the small paddle boat in the flooded forest, and the community fee - three separate line items at some villages.\n\n**Go in the late afternoon.** The light over the water in the last two hours is the whole visual argument for this trip, and the village is back from the fields. Morning departures exist mainly so operators can pair them with a temple afternoon, which is the wrong way round.\n\n**Pair it well.** The strongest combination is a [sunrise at Angkor Wat](/cambodia/siem-reap/angkor-wat-sunrise-guide) followed by the lake in the afternoon, which is exactly what the sunrise-and-lake tours do. The other good pairing is to make the lake a rest day between two temple days - your [three-day Angkor pass](/cambodia/siem-reap/angkor-wat-tickets-and-pass-guide) spans a ten-day window, so a lake day costs you nothing in pass terms.\n\n**Two things to decline.** First, any stop billed as an orphanage or a village school visit - paid visits to institutions housing children are harmful regardless of how the operator frames it, and reputable Cambodian operators stopped offering them years ago. Second, buying rice or school supplies from the boat that pulls alongside; that trade is run for the boat operator, not the village.\n\n**What it costs**: a shared afternoon trip to Kampong Phluk runs roughly USD 25-40 including transport, a private car version USD 60-90, and Kampong Khleang perhaps a third more for the extra distance.",
                        tourCard: CARD.countryside,
                    },
                ],
                faqs: [
                    { q: 'Which Tonle Sap floating village is best?', a: 'Kampong Phluk for most people - about 30 km out, six-to-ten-metre stilt houses and a flooded forest you can paddle into when the water is up. Kampong Khleang is bigger and far quieter if you can spare the extra hour each way. Chong Kneas is closest and the most touristed.' },
                    { q: 'When is the best time to visit the Tonle Sap?', a: 'September to November, when the monsoon has pushed the lake to several times its dry-season size. The stilt houses stand in water and the flooded forest is navigable. By March the lake has drained and the same village sits high and dry.' },
                    { q: 'Why does the Tonle Sap flow backwards?', a: 'During the monsoon the Mekong rises high enough to push water back up the Tonle Sap river into the lake, which swells enormously; from about November the flow reverses and the lake drains out again. The fishery and the flooded forest both depend on that annual pulse.' },
                    { q: 'Is Chong Kneas worth visiting?', a: 'It is the least rewarding of the three - closest to town, most heavily commercialised, and the village itself has little permanent structure because it moves with the waterline. If a lake tour is unusually cheap, this is where it goes.' },
                    { q: 'Are boat fees included in a floating village tour?', a: 'Often not. The community boat charge, the small paddle boat into the flooded forest and the village fee can be three separate items collected at the pier. Ask your operator which of them your price covers before you leave town.' },
                    { q: 'Should I visit a floating village school or orphanage?', a: 'No. Paid visits to institutions housing children cause real harm however they are framed, and reputable Cambodian operators stopped offering them years ago. Decline the stop; a good guide will not have included it.' },
                ],
            };

        case 'siem-reap-3-day-itinerary':
            return {
                title: '3 Days in Siem Reap: A Temple Itinerary That Builds in a Rest Day',
                seoTitle: '3 Days in Siem Reap: Complete Itinerary',
                description: 'A 3-day Siem Reap itinerary using the Angkor pass ten-day window: two temple days with the Tonle Sap or countryside between them, plus real timings.',
                heroImage: IMG.smallCircuit,
                fastFacts: [
                    { icon: 'Wallet', label: 'Angkor pass', value: 'USD 62, 3 days in 10' },
                    { icon: 'Clock', label: 'Day 2 start', value: '04:30 for sunrise' },
                    { icon: 'MapPin', label: 'Ground covered', value: 'Small circuit + far temples' },
                    { icon: 'Star', label: 'Built-in rest', value: 'Lake or countryside day' },
                ],
                sections: [
                    {
                        title: 'Day 1: arrive, buy the pass, eat properly',
                        icon: 'MapPin',
                        content: "Arrival day is not a sightseeing day any more, and pretending otherwise is how people wreck day two.\n\n**Siem Reap-Angkor International Airport opened in October 2023 about 45 kilometres east of town.** The old airport was ten minutes from the temples; this one is a 45 to 60 minute drive, and up to 75 in the rains or at the evening peak on National Road 6. If you land in the afternoon, the realistic ceiling for the day is one errand and dinner.\n\nMake the errand count: **buy your Angkor pass at the Angkor Enterprise ticket office before it closes at 17:30.** It is a separate building on the road out to the temples, tickets are not sold at the temple gates, and doing it tonight saves you twenty minutes of queue at half past four tomorrow morning. Bring your passport - they photograph you and print your face on the pass. Full detail in our [Angkor pass guide](/cambodia/siem-reap/angkor-wat-tickets-and-pass-guide).\n\nThen eat. A street-food walk on the first night does more for the rest of the trip than any temple would, because the barrier to eating well here is knowing what to ask for. Start with **fish amok**, a coconut curry steamed in a banana-leaf cup until it sets like custard, and **lok lak**, pepper-seared beef with a lime and Kampot pepper dipping sauce. Both are built on **kroeung**, the lemongrass, galangal, turmeric and kaffir-lime paste that gets pounded fresh in every kitchen in the country each morning.\n\nThe centre of town is a twenty-minute walk end to end, and the interesting kitchens sit one street back from the ones with photographs on the menu.",
                        tourCard: CARD.transfer,
                    },
                    {
                        title: 'Day 2: sunrise, Angkor Wat, Angkor Thom, Ta Prohm',
                        icon: 'Clock',
                        content: "**Leave town at 04:30.** The drive is twenty minutes, Angkor Wat admits people from **05:00**, and the sky colours well before the sun clears the towers - which is why arriving at six means arriving late.\n\nAngkor Wat is the one major Khmer temple that **faces west**, and that is the entire reason sunrise works here: the five towers come up black against the colour and double in the northern reflecting pool. The southern pool gives you the same composition with noticeably fewer people.\n\n**Around 06:30 the crowd leaves for breakfast, en masse.** That twenty minutes is the emptiest Angkor Wat gets all day and it is the best time to walk the outer gallery - roughly 600 metres of continuous bas-relief, with the Churning of the Ocean of Milk on the east side. The upper level checks shoulders and knees at the stairs.\n\n**Late morning: Angkor Thom.** Jayavarman VII's walled capital from around 1200, behind eight metres of wall, entered on a causeway lined with gods and demons hauling a serpent. At the centre the **Bayon** and its 200-plus colossal faces. Look at the outer galleries as well as up: they carve markets, a cockfight, a woman giving birth, the naval war against the Chams - ordinary Khmer life rather than gods, and the single best reason to have a licensed guide today.\n\n**Afternoon: Ta Prohm**, left half-swallowed by silk-cotton and strangler fig roots on purpose. An inscription there records that the monastery once supported **more than 12,500 people**. If the queue for the famous tree has turned into a shuffle - and by mid-morning it has - Preah Khan to the north is the same atmosphere with a tenth of the people.\n\nIn March to May, break the day: off the stone by noon, back out at 15:30. There is no shade in the Angkor Wat courtyards.",
                        tourCard: CARD.smallCircuit,
                    },
                    {
                        title: 'Day 3, option A: the far temples',
                        icon: 'Star',
                        content: "**Banteay Srei goes first because it closes earlier than the central temples.** Thirty-seven kilometres north-east, about fifty minutes, consecrated in 967 to Shiva, and built by a brahmin rather than a king. It is cut in a pink sandstone deep enough to throw real shadow, which is why it is called the citadel of women and why it is the finest stonework in the country. It is small; an hour does it justice.\n\n**Beng Mealea** is the afternoon and the opposite experience. Sixty kilometres east, a 12th-century temple on Angkor Wat's footprint that was never cleared, crossed on wooden walkways over collapsed galleries with trees standing in the courtyards. Between the two you see both what Khmer masons could do and what the forest does when nobody stops it.\n\n**Phnom Kulen** is often sold alongside these. Be clear that it charges its own **USD 20 entry** outside the Angkor pass, the road up is steep, and the two-tier waterfall is only worth it in or just after the rains. In March it is a trickle.\n\nIf ruins are genuinely your thing, swap all of this for **Koh Ker**: two hours north-east, the capital for about two decades in the 10th century, with Prasat Thom, a seven-tiered sandstone pyramid 36 metres high that you climb by a wooden stair. It has its own admission and almost no queue.",
                        tourCard: CARD.farTemples,
                    },
                    {
                        title: 'Day 3, option B: the rest day, and the last evening',
                        icon: 'Calendar',
                        content: "Here is the argument for not looking at a third temple: **the three-day Angkor pass is valid on any three days inside a ten-day window**, so taking a day off costs you nothing, and by the second straight day on sandstone most people have stopped seeing carvings and started seeing stone.\n\nThe two good ways to spend it. **The Tonle Sap**, if the month is right - the lake reverses twice a year and the stilt villages read completely differently depending on the water, so check our [floating village guide](/cambodia/siem-reap/tonle-sap-floating-villages-guide) before committing. Or **the countryside**, which is five minutes off the temple road and almost nobody on the circuits sees it: rice paddy, sugar palms tapped from the crown twice a day by men climbing a notched pole, and villages going about a normal afternoon. Late light is when it works.\n\n**The last evening** is worth planning rather than defaulting to Pub Street. **Phare, the Cambodian circus**, grew out of a school in Battambang that takes children from hard backgrounds and stages modern acrobatic theatre about Cambodian life - it is short, properly staged and nothing like a hotel show. The classical **Apsara** performances are the other route: the form was rebuilt after the Khmer Rouge years from the handful of teachers who survived, and the hand positions you have spent two days looking at on the walls are the same fixed vocabulary.\n\nGoing further in Cambodia? Our [country itineraries](/cambodia/itineraries) run from three to ten days and set out honestly what each length can reach - including why Phnom Penh does not fit inside three.",
                        tourCard: CARD.circus,
                    },
                ],
                faqs: [
                    { q: 'Is 3 days enough for Siem Reap?', a: 'Yes for Angkor, which is what most people come for. Two temple days cover the small circuit and the far temples comfortably, and the third day is better spent on the lake or the countryside than on more stone. It is not enough to add Phnom Penh.' },
                    { q: 'Which Angkor pass do I need for 3 days in Siem Reap?', a: 'The three-day pass at USD 62. It is valid on any three days inside a ten-day window, so it still covers you if you only use two temple days. Two single-day passes cost USD 74, which is more.' },
                    { q: 'What order should I see the Angkor temples in?', a: 'Sunrise at Angkor Wat, the temple interior when the crowd leaves for breakfast around 06:30, Angkor Thom and the Bayon late morning, Ta Prohm in the afternoon. Then the far temples - Banteay Srei first because it closes earlier - on a separate day.' },
                    { q: 'Can I do Siem Reap without a guide?', a: 'For Banteay Srei, the lake and the countryside, a driver is enough. For Angkor Thom and Angkor Wat you want a licensed guide: nothing is labelled and the bas-relief galleries carry the best of the site at eye level, which most visitors walk straight past.' },
                    { q: 'How much does 3 days in Siem Reap cost?', a: 'The Angkor pass is USD 62. A tuk-tuk temple day runs USD 18-25 and a private car USD 35-55, with a licensed guide USD 35-45 on top. With a mid-range room and food, a comfortable three days lands around USD 250-400 per person before flights.' },
                    { q: 'How long is the drive from Siem Reap airport?', a: 'About 45 kilometres and 45 to 60 minutes, up to 75 in the rains or at peak hour. The airport moved in October 2023 and is much further out than the old one, so treat arrival day as an arrival day.' },
                ],
            };

        case 'siem-reap-airport-to-town':
            return {
                title: 'Siem Reap Airport to Town: 45 km, and Why Your Old Guidebook Is Wrong',
                seoTitle: 'Siem Reap Airport to Town: Transfers & Times',
                description: 'Siem Reap-Angkor International (SAI) sits 45 km east of town, a 45-60 minute drive. Transfer options, costs, and what the 2023 airport move broke in most itineraries.',
                heroImage: IMG.transfer,
                fastFacts: [
                    { icon: 'MapPin', label: 'Distance', value: '~45 km east of town' },
                    { icon: 'Clock', label: 'Drive time', value: '45-60 min, up to 75' },
                    { icon: 'Calendar', label: 'Opened', value: '16 October 2023' },
                    { icon: 'Wallet', label: 'Private car', value: 'From about USD 30' },
                ],
                sections: [
                    {
                        title: 'The airport moved, and almost nothing online has caught up',
                        icon: 'AlertTriangle',
                        content: "**Siem Reap-Angkor International Airport (SAI) opened on 16 October 2023**, replacing the old field that sat a few kilometres from town and dangerously close to the temples. The new site is roughly **45 kilometres east**, out towards Sotr Nikum, and the drive in is **45 to 60 minutes** in normal traffic - stretching to about 75 in the rains or at peak hour, when National Road 6 fills up.\n\nThe old airport was a ten-minute run. That is the assumption baked into a large amount of advice still sitting on the internet, and it breaks things that matter:\n\n**Arrival-day plans.** Landing at 14:00 no longer means a temple at 16:00 with time to spare. It means reaching your hotel around 15:30, and the [Angkor pass office closing at 17:30](/cambodia/siem-reap/angkor-wat-tickets-and-pass-guide) becomes the actual deadline for the day.\n\n**Sunrise on the morning after a late landing.** A 23:00 arrival now puts you in bed past midnight for an 04:00 alarm. Worth knowing before you book both.\n\n**Departure day.** Allow two and a half to three hours from your hotel for an international flight: an hour on the road plus the usual airport time, plus slack for National Road 6.\n\n**The other airport moved too.** Phnom Penh switched to **Techo International Airport on 9 September 2025**, about 20 to 24 kilometres south of the city. If you are doing both cities, both ends of the trip are longer than they used to be.",
                        tourCard: CARD.transfer,
                    },
                    {
                        title: 'The options, with what each actually costs',
                        icon: 'Wallet',
                        content: "**Pre-booked private car** - the least friction and what most people should do on arrival. A driver is waiting with your name, the car is air-conditioned for an hour you will want it, and there is no negotiation after a flight. Expect from about USD 30 for a saloon, more for a van or a late-night arrival.\n\n**Airport shuttle bus** - around USD 8 per person one way, running to a central drop-off, and taking roughly the same time as a car. Good value if you are travelling light and not arriving at 01:00.\n\n**Airport taxi** - available on arrival at a fixed counter rate, typically a little more than a pre-booked car because you are buying it at the point of need. Perfectly workable.\n\n**Tuk-tuk** - technically possible and a bad idea for 45 kilometres on a national road, particularly at night or with luggage. This was the obvious choice from the old airport and is no longer sensible.\n\n**Hotel transfer** - many Siem Reap hotels include or offer one. Ask before booking anything else; free is hard to beat and they know your flight number.\n\n**Grab and PassApp** work in Siem Reap and can be cheaper, though pickup from the airport terminal can be restricted to designated bays. Have the hotel address in Khmer script on your phone either way - it removes a conversation.",
                    },
                    {
                        title: 'Arriving: visa, money, SIM',
                        icon: 'Info',
                        content: "**Visa** - most nationalities can get a **visa on arrival** at SAI, or an **e-Visa** in advance through the official Cambodian government site. The e-Visa is the calmer option because it takes the queue out of the equation after a flight; be careful to use the government domain rather than one of the many lookalike sites that add a fee.\n\n**Money** - **Cambodia runs on US dollars.** ATMs dispense them, prices are quoted in them, and riel appears only as change below a dollar (roughly 4,000 riel to the dollar, and small change often comes in riel by design). Two practical consequences: **bring clean, untorn notes**, because a damaged bill gets refused by shops and even by some banks; and take out more than you think in the city, because rural ATM fees add up.\n\n**SIM** - Cellcard, Smart and Metfone all sell tourist data SIMs at the airport, cheaply and with sensible data allowances. Coverage across the temple park is good. Buy at the airport rather than in town; the price difference is negligible and the convenience is not.\n\n**Time from landing to the road** is usually short - SAI is a new and comparatively quiet airport, and immigration moves faster than the size of the terminal suggests.",
                    },
                    {
                        title: 'Getting around once you are in town',
                        icon: 'MapPin',
                        content: "Siem Reap itself is small. The old market, the river, the night-market grid and most of the hotels sit inside a twenty-minute walk, and the traffic is light by regional standards.\n\n**Tuk-tuk** is the normal way to move - a few dollars for a hop across town, and around **USD 18-25 for a full temple day** on the small circuit. The important thing to understand is that a temple day is hired **by the day, not by the trip**: your driver waits at each temple rather than dropping you and leaving, which is why the rate looks high next to a single ride and is not.\n\n**Private car with driver** runs roughly **USD 35-55 a day** and earns it from March to May, when the heat sits in the mid-thirties from late morning, and on the long runs out to Banteay Srei, Koh Ker or Preah Vihear.\n\n**Bicycle or e-bike** is genuinely good from November to February. The [small circuit](/cambodia/siem-reap/angkor-temples-small-vs-grand-circuit) is seventeen flat kilometres and the back lanes between temples are the best part of the day. From March to May, do not.\n\n**Grab and PassApp** cover the town for short hops and are useful at night when you would otherwise be negotiating.\n\nOne piece of etiquette worth knowing: your temple driver is sitting in the heat for eight hours while you walk around. A tip at the end of a full day is normal and appreciated, and the good drivers are worth keeping for the rest of your stay.",
                        tourCard: CARD.cycle,
                    },
                ],
                faqs: [
                    { q: 'How far is Siem Reap airport from the town centre?', a: 'About 45 kilometres east, which is a 45 to 60 minute drive in normal traffic and up to 75 minutes in the rains or at peak hour on National Road 6. The new Siem Reap-Angkor International Airport opened on 16 October 2023, much further out than the airport it replaced.' },
                    { q: 'How much is a taxi from Siem Reap airport?', a: 'A pre-booked private car starts around USD 30, an airport taxi at the counter is usually a little more, and the shuttle bus is about USD 8 per person. Many hotels include a transfer, so ask before booking anything separately.' },
                    { q: 'Can I take a tuk-tuk from Siem Reap airport?', a: 'Technically yes, practically no. It is 45 kilometres on a national road, and what made sense from the old ten-minute airport does not from this one, especially at night or with luggage.' },
                    { q: 'Can I get a visa on arrival at Siem Reap airport?', a: 'Most nationalities can, and the e-Visa is also available in advance through the official Cambodian government site. The e-Visa saves you a queue after a flight; make sure you use the government domain rather than a lookalike that adds a service fee.' },
                    { q: 'Should I bring US dollars to Cambodia?', a: 'Yes. Dollars are the working currency, ATMs dispense them and prices are quoted in them, with riel used as change under a dollar. Bring clean, untorn notes - damaged bills are routinely refused.' },
                    { q: 'How early should I leave for my flight out of Siem Reap?', a: 'Two and a half to three hours from your hotel for an international departure. That is an hour on the road plus normal airport time plus slack for National Road 6, which can back up without warning.' },
                ],
            };

        case 'siem-reap-food-guide':
            return {
                title: 'What to Eat in Siem Reap: Khmer Food Without the Photo Menus',
                seoTitle: 'Siem Reap Food Guide: What to Eat in Cambodia',
                description: 'A Siem Reap food guide built on what Khmer cooking actually is - prahok, kroeung, amok and lok lak - plus which markets to eat at and what to skip.',
                heroImage: IMG.food,
                fastFacts: [
                    { icon: 'Star', label: 'The dish to order', value: 'Fish amok' },
                    { icon: 'Star', label: 'The paste behind it', value: 'Kroeung, pounded daily' },
                    { icon: 'Clock', label: 'Breakfast dish', value: 'Num banh chok, morning only' },
                    { icon: 'Wallet', label: 'Street plate', value: 'USD 1.50 - 3' },
                ],
                sections: [
                    {
                        title: 'What Khmer food actually is',
                        icon: 'Star',
                        content: "Cambodian food gets described as a milder Thai or a sweeter Vietnamese, and both of those are lazy. It sits between its neighbours but the building blocks are its own.\n\n**Kroeung** is the foundation: a paste of lemongrass, galangal, turmeric, kaffir lime leaf and zest, garlic and shallot, pounded fresh in a mortar every morning in every serious kitchen in the country. Yellow, red and green kroeung differ by what is added, and the difference between a dish made with this morning's kroeung and one made with last week's is the difference between a good meal and a forgettable one.\n\n**Prahok** is the other pillar and the one visitors are warned about: a fermented fish paste that carries the salt and the depth in a huge share of Khmer cooking. Used properly it is not fishy on the plate, it is savoury. Eaten straight, as prahok ktis with pork and coconut, it is a genuine acquired taste and worth trying once.\n\n**Kampot pepper** is the third. It has a protected geographical indication, the first Cambodia registered, and green peppercorns still on the stem - picked that morning and cooked whole - are a different ingredient from the grey dust in a shaker.\n\nCambodian food is **notably less chilli-forward than Thai**. Heat is usually on the table rather than in the pot, which surprises people who arrive expecting the opposite.",
                        tourCard: CARD.food,
                    },
                    {
                        title: 'The dishes worth going out of your way for',
                        icon: 'Info',
                        content: "**Fish amok** - the national dish and the one to order first. Freshwater fish in a coconut and kroeung curry, steamed in a banana-leaf cup until it sets to something between a custard and a mousse. Done properly it is steamed, not stirred in a wok; if it arrives as a loose soupy curry you have been given the shortcut version. Most tourist kitchens serve the shortcut.\n\n**Lok lak** - cubes of beef seared hard with black pepper, served over salad and rice with a fried egg, and a dipping sauce of lime juice, salt and crushed Kampot pepper. The sauce is the point.\n\n**Num banh chok** - the breakfast dish, and the one most visitors never eat because it is finished by ten in the morning. Cold rice noodles with a green fish-and-lemongrass gravy, piled with raw banana flower, cucumber, bean sprouts and herbs you tear in yourself. Eaten standing up at a market for about a dollar. This is the single most Cambodian thing on the list.\n\n**Kuy teav** - the other breakfast, a pork-bone noodle soup you assemble at the table from the condiments in front of you.\n\n**Bai sach chrouk** - grilled marinated pork over broken rice with pickles and a bowl of clear broth. A dollar fifty, eaten before eight.\n\n**Nom krok** - coconut-rice cakes cooked in a dimpled pan and eaten hot from paper.\n\n**Red tree ants with beef and holy basil** - a real dish, not a dare. The ants are sour, like a citrus note, and it is genuinely good.",
                    },
                    {
                        title: 'Where to eat, and where not to',
                        icon: 'MapPin',
                        content: "**Psar Leu**, the big local market on the eastern side of town, is where Siem Reap actually shops and eats. Morning is the time. This is the place for num banh chok and bai sach chrouk, and it is not set up for visitors, which is the recommendation.\n\n**Psar Chas, the old market**, is the central one and is half produce, half souvenirs. The food stalls at the back are fine and convenient rather than exceptional.\n\n**Kandal Village** - the small grid of streets west of the river, where most of the interesting independent kitchens and coffee shops have ended up. Better cooking than Pub Street at similar prices.\n\n**The road behind Pub Street.** Pub Street itself is what it is - loud, cheap, aimed squarely at people who arrived yesterday - and one street back the same money buys noticeably better food.\n\n**What to skip**: the buffet-and-Apsara-show packages, where the food is reheated and the dance is an afterthought. If you want the dance, take a proper ticketed performance; if you want the food, go and eat somewhere that does only that.\n\n**Cooking classes** are unusually good value here, and the good ones start in a market: the guide walks you through the prahok, the palm sugar and the river fish before anything gets cooked, which is where the actual learning is. A class is also the standard rainy-afternoon insurance in the wet months.\n\n**Street food safety**: the usual rule holds and it is not squeamishness - eat where there is turnover and a queue, prefer things cooked to order in front of you, and be more careful with cut fruit and ice from unbranded sources than with hot food from a busy stall.",
                        tourCard: CARD.countryside,
                    },
                    {
                        title: 'Drinks, and what a meal costs',
                        icon: 'Wallet',
                        content: "**Palm wine and palm sugar** both come from the sugar palm, the national tree, tapped from the crown twice a day by men who climb a notched pole. The fresh sap is sweet and mild; left a day it ferments into something considerably less mild. You will see the pots tied into the crowns all over the countryside.\n\n**Iced coffee** in Cambodia is strong, dark, often roasted with butter, and served over ice with condensed milk. Order it *kafe tuk doh koh* and expect it to be sweet.\n\n**Sugarcane juice** pressed at the roadside for a dollar is the correct answer to a Cambodian afternoon.\n\n**Beer** is cheap enough that the Pub Street fifty-cent draught is a real thing. Angkor and Cambodia are the two local lagers.\n\n**What things cost**: a street plate or a bowl of noodles USD 1.50-3; a proper sit-down Khmer meal in a good local restaurant USD 5-8 a head; Kandal Village independents USD 8-15; the handful of ambitious modern-Khmer kitchens USD 25-50. A cooking class runs roughly USD 25-40 including the market walk.\n\n**Tipping** is not obligatory and is normal in tourist-facing places. Ten percent in a restaurant, and a few dollars at the end of a full day for a tuk-tuk driver who has sat in the heat waiting for you.\n\nIf you are building a full trip around this, the [3-day Siem Reap itinerary](/cambodia/siem-reap/siem-reap-3-day-itinerary) puts the food walk on the first night deliberately - it is the evening that makes the other three days eat better.",
                    },
                ],
                faqs: [
                    { q: 'What is the national dish of Cambodia?', a: 'Fish amok - freshwater fish in a coconut and kroeung curry, steamed in a banana-leaf cup until it sets like a custard. If it arrives as a loose wok-fried curry rather than a set steamed one, you have the shortcut version.' },
                    { q: 'Is Cambodian food spicy?', a: 'Much less so than Thai. Khmer cooking is built on lemongrass, galangal, turmeric and kaffir lime rather than chilli, and heat is usually offered on the table rather than cooked into the dish.' },
                    { q: 'What is kroeung?', a: 'The spice paste at the base of most Khmer cooking - lemongrass, galangal, turmeric, kaffir lime, garlic and shallot pounded fresh every morning. Yellow, red and green versions differ by what else goes in. Freshness is the whole difference between a good Khmer dish and a flat one.' },
                    { q: 'What should I eat for breakfast in Siem Reap?', a: 'Num banh chok - cold rice noodles under a green fish-and-lemongrass gravy with raw banana flower and herbs, eaten standing at a market for about a dollar. It is sold out by mid-morning, which is why most visitors never try it.' },
                    { q: 'Where do locals eat in Siem Reap?', a: 'Psar Leu, the big market on the east side, in the morning. Kandal Village west of the river has the independent kitchens. Pub Street is aimed at people who arrived yesterday, and one street back the same money buys better food.' },
                    { q: 'Is street food safe in Siem Reap?', a: 'Broadly yes, with the usual rules: eat where there is turnover and a queue, prefer food cooked to order in front of you, and be more cautious with cut fruit and ice from unbranded sources than with anything hot off a busy stall.' },
                ],
            };

        default:
            return null;
    }
}

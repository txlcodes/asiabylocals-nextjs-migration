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

        case 'angkor-wat-one-day-itinerary':
            return {
                title: 'One Day at Angkor: The Order That Beats the Crowds',
                seoTitle: 'Angkor Wat in One Day: Hour-by-Hour Plan',
                description: 'A one-day Angkor plan built around when each temple is empty, not around the map. Sunrise, Angkor Wat, the Bayon and Ta Prohm with real timings.',
                heroImage: IMG.smallCircuit,
                fastFacts: [
                    { icon: 'Clock', label: 'Leave town', value: '04:30' },
                    { icon: 'Wallet', label: 'Pass needed', value: '1-day, USD 37' },
                    { icon: 'MapPin', label: 'Ground covered', value: '~17 km small circuit' },
                    { icon: 'AlertTriangle', label: 'Hardest hours', value: '11:00 - 15:00' },
                ],
                sections: [
                    {
                        title: 'The clock matters more than the map',
                        icon: 'Clock',
                        content: "Everybody visits the same three temples in one day. The difference between a good day and a miserable one is the order, and the order is decided by where the coaches are.\n\n**04:30 leave town.** Angkor Wat opens at 05:00 and the sky colours before the sun clears the towers. Have your pass already, bought the evening before at the [Angkor Enterprise office](/cambodia/siem-reap/angkor-wat-tickets-and-pass-guide) which closes at 17:30 and is the only seller.\n\n**06:30 the crowd leaves for breakfast, together.** This is the single most useful fact on this page. The sunrise crowd walks back to the stalls at the same time and Angkor Wat empties. Go **in** while they go out. You get the 600 metres of bas-relief in the outer gallery and the upper level with almost nobody on the stairs.\n\n**08:30 Angkor Thom.** The coaches are still at Angkor Wat. Enter by the south gate, whose causeway is lined with gods and demons hauling a serpent, and give the Bayon a full hour.\n\n**11:00 stop.** From March to May the heat is in the mid-thirties and there is no shade in these courtyards. Eat, sit, drink more water than you want.\n\n**15:00 Ta Prohm.** The roots temple is at its worst between nine and eleven, when the queue for the famous tree is a shuffle. By mid-afternoon it thins out and the light through the canopy is better anyway.\n\n**17:00 Pre Rup for sunset**, not Phnom Bakheng - warm laterite, a view over forest, and no queue.",
                        tourCard: CARD.smallCircuit,
                    },
                    {
                        title: 'What you are actually looking at',
                        icon: 'Star',
                        content: "**Angkor Wat**, first half of the 12th century, built by Suryavarman II for Vishnu and later used as a Buddhist temple. Around 162 hectares inside the moat, the largest religious monument on earth. It faces **west**, alone among the great Khmer temples, which is the whole reason sunrise works here. Find the Churning of the Ocean of Milk on the east gallery - gods and demons pulling a serpent to churn the sea and produce the elixir of immortality, the same scene the Angkor Thom causeway sculpts in three dimensions.\n\n**The Bayon**, around 1200, Jayavarman VII. Over 200 enormous faces on the towers, and nobody agrees whether they are the bodhisattva Avalokiteshvara, the king, or deliberately both. Look down as well as up: the outer galleries carve markets, a cockfight, a woman giving birth and the naval war against the Chams. That is ordinary Khmer life, and it is the part most visitors walk past.\n\n**Ta Prohm**, 1186, built by the same king as a Buddhist monastery and university. The French conservators left the silk-cotton and strangler fig in place on purpose. Its own inscription records that it supported **more than 12,500 people**, with another 80,000 in the villages that fed it.",
                    },
                    {
                        title: 'One day honestly assessed',
                        icon: 'AlertTriangle',
                        content: "A single day gets you the three famous temples at a brisk pace. Here is what it does not get you, so you can decide before you buy a one-day pass at USD 37.\n\n**No Banteay Srei.** The finest carving in the country is 37 kilometres north-east and closes earlier than the central temples. It needs its own morning.\n\n**No Beng Mealea or Koh Ker.** Both are an hour or more out and are where Angkor stops feeling like a queue.\n\n**No grand circuit.** Preah Khan is the size of Ta Prohm with a tenth of the people, and one day never reaches it.\n\n**The arithmetic argues against one day anyway.** A one-day pass is USD 37 and a three-day is USD 62, valid on **any three days inside a ten-day window**. Two single days cost USD 74, more than the three-day. If there is any chance you will want a second temple day, you have already bought the wrong ticket.\n\nIf your dates genuinely allow one day, take it and do the order above. If they allow two, the [three-day itinerary](/cambodia/siem-reap/siem-reap-3-day-itinerary) shows what the extra time buys.",
                        tourCard: CARD.grandCircuit,
                    },
                    {
                        title: 'Practicalities for the day',
                        icon: 'Info',
                        content: "**Transport.** A tuk-tuk for the small circuit runs roughly USD 18-25 and is hired by the day, because your driver waits at each temple rather than dropping you. A private car is USD 35-55 and earns it from March to May. Cycling the 17 kilometres is a genuine pleasure from November to February and a bad idea in April.\n\n**A guide.** USD 35-45 on top. Worth it for this day specifically: nothing at the Bayon is labelled and the bas-relief galleries are unreadable without someone to point. Licensed Cambodian guides carry a numbered Ministry of Tourism badge.\n\n**Dress code.** Shoulders and knees covered, enforced at the upper level of Angkor Wat. Light long trousers beat shorts in that heat anyway.\n\n**Water.** More than you think. There are drink sellers at every temple and they are not a rip-off.\n\n**Shoes.** Uneven sandstone, steep stairs, and rubble at Ta Prohm. Trainers, not sandals.\n\n**Torch** for the pre-dawn causeway, which is unlit before 05:30.\n\n**Do not buy your pass from anyone but Angkor Enterprise.** The price is fixed, there is one ticket office, and tickets are not sold at the temple gates - a driver who says he will handle it there is wrong and you will be turned back.",
                        tourCard: CARD.cycle,
                    },
                ],
                faqs: [
                    { q: 'Can you see Angkor Wat in one day?', a: 'Yes - Angkor Wat, Angkor Thom with the Bayon, and Ta Prohm fit into one full day on the small circuit. You will not reach Banteay Srei, Beng Mealea or the grand circuit, and the pace is brisk.' },
                    { q: 'What is the best order to see the Angkor temples in one day?', a: 'Sunrise at Angkor Wat, then go inside at 06:30 when the crowd leaves for breakfast together. Angkor Thom and the Bayon from 08:30 while the coaches are still at Angkor Wat. Stop for the hottest hours. Ta Prohm at 15:00 when its queue has thinned, and sunset at Pre Rup.' },
                    { q: 'Should I buy a 1-day or 3-day Angkor pass?', a: 'The 1-day is USD 37 and the 3-day USD 62, valid on any three days inside a ten-day window. Two single days cost USD 74, more than the 3-day. If a second temple day is even possible, buy the 3-day.' },
                    { q: 'How much walking is one day at Angkor?', a: 'Expect four to six hours on uneven sandstone, with steep stairs at Angkor Wat’s upper level and rubble underfoot at Ta Prohm. The circuit itself is driven; the walking is inside each temple.' },
                    { q: 'Is a guide worth it for one day at Angkor?', a: 'For this day, yes. Nothing at the Bayon is labelled and the bas-relief galleries carry the best of the site at eye level, which is exactly what unguided visitors walk past. Roughly USD 35-45 on top of transport.' },
                    { q: 'When is Angkor Wat least crowded?', a: 'Between about 06:30 and 07:30, when the sunrise crowd leaves for breakfast together, and again after 15:00. The worst hours are 09:00 to 11:00, when the coach groups arrive.' },
                ],
            };

        case 'banteay-srei-guide':
            return {
                title: 'Banteay Srei: The Best Carving in Cambodia, and Why It Is Pink',
                seoTitle: 'Banteay Srei: Visiting the Citadel of Women',
                description: 'Banteay Srei sits 37 km from Siem Reap and holds carving nothing else at Angkor matches. When to go, why it closes early, and what to pair it with.',
                heroImage: IMG.farTemples,
                fastFacts: [
                    { icon: 'MapPin', label: 'Distance', value: '37 km, about 50 min' },
                    { icon: 'Calendar', label: 'Consecrated', value: 'AD 967' },
                    { icon: 'Clock', label: 'Go', value: 'Morning - it closes early' },
                    { icon: 'Wallet', label: 'Ticket', value: 'On the Angkor Pass' },
                ],
                sections: [
                    {
                        title: 'Why this one looks different from everything else',
                        icon: 'Star',
                        content: "Banteay Srei is small enough to walk in twenty minutes and it is the temple people come back talking about.\n\nThe reason is the stone. It is built from a **fine-grained pink sandstone** that takes an edge the coarser grey sandstone of the big Angkor temples cannot hold. The lintels and pediments are cut deep enough to throw real shadow at midday, and the detail survives a thousand years of monsoon in a way that flat relief does not. Stand close to the pediment of Shiva dancing and you can read individual fingers.\n\nIt was consecrated in **AD 967**, which makes it older than Angkor Wat by roughly 150 years, and it was **not built by a king**. Its patron was Yajnavaraha, a brahmin and a royal tutor - one of the very few major Khmer temples founded by someone outside the royal line. The scale follows from that: doorways you have to stoop through, towers you could touch the top of.\n\nThe name means citadel of women, and the usual explanation - that the carving is too fine for men's hands - is a later folk gloss rather than anything the inscriptions say. What the inscriptions call it is Tribhuvanamahesvara, the great lord of the threefold world, and it was dedicated to Shiva.",
                        tourCard: CARD.farTemples,
                    },
                    {
                        title: 'When to go, and why it has to be the morning',
                        icon: 'Clock',
                        content: "**Banteay Srei closes earlier than the central Angkor temples.** That single fact should shape your day: it goes first, not last. A plan that puts it in the late afternoon runs out of temple.\n\n**Early morning is also the light.** Pink sandstone at eight in the morning is genuinely pink; at noon it flattens out to grey-beige and the deep carving loses the shadow that makes it read. Photographers go at opening.\n\n**It is 37 kilometres north-east**, about fifty minutes each way by car or a long hot tuk-tuk ride. On the way you pass out of the temple park into rice country, which is half the pleasure of the trip.\n\n**Crowds.** It is small, so it fills fast - a single coach makes it feel busy in a way the same coach would not at Angkor Wat. The first hour after opening and the last hour before closing are the quiet ones.\n\n**It is on the Angkor Pass**, so no separate ticket. The things often sold with it are not: **Phnom Kulen charges USD 20** of its own, and **Koh Ker** and **Preah Vihear** have their own admission too.",
                    },
                    {
                        title: 'What to pair it with',
                        icon: 'MapPin',
                        content: "You have driven fifty minutes; do not drive straight back.\n\n**Beng Mealea** is the classic pairing and the best one. Another forty minutes east, a 12th-century temple on Angkor Wat's footprint that was never cleared, crossed on wooden walkways over collapsed galleries with trees standing in the courtyards. Banteay Srei is what Khmer masons could do at their most precise; Beng Mealea is what the forest does when nobody stops it. Seeing both in a day is the best single day in the park.\n\n**Kbal Spean**, the river of a thousand lingas, is close by and quieter still. Shiva carvings lie in and under a streambed, and the walk up is about 1.5 kilometres of forest path. Worth it when there is water in the river, which means in or just after the rains.\n\n**The Cambodia Landmine Museum** sits on the same road and is run by a former child soldier who has cleared tens of thousands of mines. It is small, honest and not a tourist attraction in the usual sense.\n\n**Phnom Kulen** is the other common pairing and the one to be clear-eyed about: separate USD 20 entry, a steep road, and a waterfall that only really runs in and after the rains.",
                        tourCard: CARD.kohKer,
                    },
                    {
                        title: 'Reading the carvings',
                        icon: 'Info',
                        content: "Almost nothing at Banteay Srei is labelled, and the pediments are the whole point, so it is worth knowing four of them before you arrive.\n\n**Shiva dancing the tandava** - the cosmic dance of creation and destruction, on the east pediment of the south library. The most reproduced carving in Cambodia.\n\n**Kama shooting Shiva** - the god of desire fires an arrow at a meditating Shiva to make him fall in love with Parvati, and is burned to ash for it. North library, east side.\n\n**The burning of Khandava forest** - Agni the fire god and Indra fighting over a forest, on the north library's west pediment. Look for the animals fleeing.\n\n**Ravana shaking Mount Kailash** - the demon king of the Ramayana trying to uproot Shiva's mountain, with Shiva calmly pressing it down with one toe. South library, west side.\n\nThe guardian figures at the tower doorways are **copies**; several originals were stolen in the twentieth century and some are in the National Museum in Phnom Penh, which is one good argument for [seeing that museum](/cambodia/phnom-penh/royal-palace-phnom-penh) after Siem Reap rather than before.\n\nA licensed guide is worth taking here even though the temple is small, precisely because it is all iconography and none of it is signposted.",
                    },
                ],
                faqs: [
                    { q: 'Is Banteay Srei worth the drive?', a: 'Yes. It is 37 km and about fifty minutes each way, and the carving in its pink sandstone is finer than anything at the main Angkor group - deep enough to throw shadow after a thousand years. Pair it with Beng Mealea and it is the best day in the park.' },
                    { q: 'Why is Banteay Srei called the citadel of women?', a: 'The usual story is that the carving is too fine for a man’s hand, but that is a later folk explanation. The inscriptions call it Tribhuvanamahesvara and record that it was founded in AD 967 by Yajnavaraha, a brahmin and royal tutor, not by a king.' },
                    { q: 'Is Banteay Srei included in the Angkor Pass?', a: 'Yes. Phnom Kulen, Koh Ker and Preah Vihear, which often get sold alongside it, are not - each charges its own admission on top.' },
                    { q: 'What time should I visit Banteay Srei?', a: 'Early morning. It closes earlier than the central temples, it is small enough that one coach makes it feel crowded, and the pink sandstone only reads as pink in low light.' },
                    { q: 'How long do you need at Banteay Srei?', a: 'About an hour to see it properly - it is one of the smallest major temples. The time cost is the drive, which is why almost everyone pairs it with Beng Mealea or Kbal Spean.' },
                    { q: 'Can you climb on Banteay Srei?', a: 'No. The towers are roped off and the doorways are too small to enter, so the temple is seen from the walkways. That protects exactly the carving you came for.' },
                ],
            };

        case 'ta-prohm-tomb-raider-temple':
            return {
                title: 'Ta Prohm: The Roots, the Queue, and the Temple Next Door',
                seoTitle: 'Ta Prohm Guide: Tomb Raider Temple & Crowds',
                description: 'What to know before Ta Prohm: why the trees were left, when the famous tree has a queue, and why Preah Khan gives you the same thing with a tenth of the people.',
                heroImage: IMG.smallCircuit,
                fastFacts: [
                    { icon: 'Calendar', label: 'Built', value: '1186, Jayavarman VII' },
                    { icon: 'Star', label: 'Its own inscription', value: '12,500 people served it' },
                    { icon: 'AlertTriangle', label: 'Worst crowds', value: '09:00 - 11:00' },
                    { icon: 'MapPin', label: 'Quieter twin', value: 'Preah Khan' },
                ],
                sections: [
                    {
                        title: 'The trees are a conservation decision, not neglect',
                        icon: 'Star',
                        content: "Ta Prohm looks abandoned. It is one of the most carefully managed sites in the park.\n\nWhen the École française d'Extrême-Orient began clearing Angkor in the early twentieth century they stripped the vegetation off temple after temple, because roots split stone and a cleared temple can be stabilised. At Ta Prohm they deliberately did the opposite and **left the forest in place**, as a record of how the whole city looked when it was found. Everything you see is the result of that decision, maintained since: props, cables, replaced blocks and cut-back growth, all kept discreet.\n\nThe trees are two species and they behave differently. The pale, smooth, elephantine ones are **silk-cotton (Tetrameles nudiflora)**, which grow enormous and fast. The tangled ropey ones are **strangler figs (Ficus)**, which germinate in a crevice up in the masonry and send roots down the wall to the ground. Nearly every famous photograph here is a strangler fig.\n\nThe temple was built in **1186 by Jayavarman VII** as a Buddhist monastery and university, dedicated to his mother. A surviving foundation stele records the establishment's size in startling detail: **more than 12,500 people** attached to the temple itself, including 18 high priests and 615 dancers, and another 80,000 in the surrounding villages supporting it.",
                        tourCard: CARD.smallCircuit,
                    },
                    {
                        title: 'The queue, and how to not stand in it',
                        icon: 'AlertTriangle',
                        content: "There is one specific tree - the strangler fig over the eastern gallery that appeared in Tomb Raider - and by mid-morning there is a line of people waiting to stand in front of it.\n\n**The worst window is 09:00 to 11:00**, when the coach groups arrive after doing Angkor Wat at sunrise. The wait for that one photograph can be twenty minutes.\n\n**Go at 15:00 instead.** Most day tours run Angkor Wat, Angkor Thom, Ta Prohm in that order and are finished by two. The light through the canopy in the late afternoon is also better than flat mid-morning sun.\n\n**Wooden walkways route you** through the temple on a fixed circuit now, which protects the stone and means you cannot wander. Follow it; the best roots are on it.\n\n**The other trees have no queue at all.** The Tomb Raider fig is not the biggest or the most dramatic, it is just the one people have seen. Walk on twenty metres.",
                    },
                    {
                        title: 'Preah Khan, which almost nobody does',
                        icon: 'MapPin',
                        content: "If the queue has formed, the honest answer is to go to Preah Khan instead, and a good guide will offer it.\n\n**Preah Khan is larger than Ta Prohm**, built by the same king three years later, dedicated to his father as Ta Prohm was to his mother, and left in a similar half-cleared state. Same silk-cotton trees, same roots through the same galleries, and roughly **a tenth of the visitors**.\n\nIt also has things Ta Prohm does not: a long processional axis you can walk end to end mostly alone, a strange two-storey building with round columns that looks nothing like anything else in Khmer architecture, and a Hall of Dancers whose carved apsaras run the length of a corridor.\n\nIt sits on the **grand circuit**, the loop outside Angkor Thom that most one-day visitors never reach, together with **Neak Pean** - a small island temple in a reservoir, magical when there is water and a mud crossing when there is not - **Ta Som**, **East Mebon** with its corner elephants, and **Pre Rup**, the better sunset temple.\n\nAdding the grand circuit is the single biggest upgrade available to a two- or three-day Angkor trip.",
                        tourCard: CARD.grandCircuit,
                    },
                    {
                        title: 'Practical notes',
                        icon: 'Info',
                        content: "**Underfoot.** Ta Prohm has more loose rubble and uneven stone than any other temple on the small circuit. Trainers, and watch your feet rather than your camera on the gallery thresholds.\n\n**Time.** An hour is comfortable, ninety minutes if you want the far corners. It is usually the third stop of a small-circuit day.\n\n**Photography.** The galleries are dark and the courtyards are bright, which is a hard exposure. Overcast days, which people avoid, are the best light here by a wide margin.\n\n**The Tomb Raider thing.** Filmed in 2000, released 2001, and it genuinely changed the visitor numbers. Cambodians will tell you about it cheerfully; it is not a sore point.\n\n**Dress code.** Ta Prohm does not enforce shoulders and knees the way [Angkor Wat's upper level](/cambodia/siem-reap/angkor-wat-tickets-and-pass-guide) does, but you will be at Angkor Wat the same day, so dress for the strictest stop.\n\n**It is on the Angkor Pass** with no separate charge.",
                    },
                ],
                faqs: [
                    { q: 'Why were the trees left at Ta Prohm?', a: 'A deliberate conservation choice. The French conservators cleared vegetation off temple after temple but left Ta Prohm as a record of how Angkor looked when it was found. The site is carefully managed - props, cables and cut-back growth are kept discreet.' },
                    { q: 'What time is Ta Prohm least crowded?', a: 'After 15:00. Most day tours run Angkor Wat, Angkor Thom then Ta Prohm and are done by two, so the 09:00 to 11:00 window is the worst and the late afternoon is both quieter and better lit.' },
                    { q: 'Which tree is the Tomb Raider tree?', a: 'A strangler fig over the eastern gallery. It is not the largest or the most dramatic at Ta Prohm, only the one people have seen on film, and it is the one with a queue. Walk twenty metres for a better root with nobody in front of it.' },
                    { q: 'Is Preah Khan better than Ta Prohm?', a: 'Quieter, larger and built by the same king three years later, with the same trees through the same galleries and about a tenth of the visitors. If Ta Prohm’s queue has formed, Preah Khan is the better use of the hour.' },
                    { q: 'How long do you need at Ta Prohm?', a: 'An hour is comfortable and ninety minutes lets you reach the far corners. Wooden walkways fix the route, so you cannot get lost or wander far off it.' },
                    { q: 'How many people worked at Ta Prohm?', a: 'Its own foundation stele records more than 12,500 people attached to the temple, including 18 high priests and 615 dancers, plus around 80,000 in surrounding villages supporting it. It was a monastery and university, not only a temple.' },
                ],
            };

        case 'angkor-by-bike':
            return {
                title: 'Cycling Angkor: Which Circuit, Which Months, and When Not To',
                seoTitle: 'Cycling Angkor: Routes, Distances & Best Months',
                description: 'Angkor by bicycle or e-bike: the small circuit is 17 flat kilometres, the grand circuit 26. Which months make it a pleasure and which make it dangerous.',
                heroImage: IMG.cycle,
                fastFacts: [
                    { icon: 'MapPin', label: 'Small circuit', value: '~17 km, flat' },
                    { icon: 'MapPin', label: 'Grand circuit', value: '~26 km, flat' },
                    { icon: 'Calendar', label: 'Good months', value: 'November - February' },
                    { icon: 'AlertTriangle', label: 'Avoid', value: 'March - May afternoons' },
                ],
                sections: [
                    {
                        title: 'Why the bike is the right vehicle here',
                        icon: 'Star',
                        content: "Angkor is flat. The whole park sits on an alluvial plain and the circuits have no climb worth the name, which is unusual for a headline cycling destination and is the reason ordinary people manage it.\n\nWhat the bike actually buys you is **the space between temples**. In a tuk-tuk the twenty minutes from Angkor Wat to the Bayon is twenty minutes of noise. On a bike it is forest, moat, and the long walls of Angkor Thom going past at a speed where you notice them. The causeway through the south gate, with its gods and demons hauling the serpent on either side, is a different experience at 12 km/h.\n\nYou also stop where you like. The small circuit has half a dozen minor temples that no vehicle itinerary bothers with - Thommanon, Chau Say Tevoda, Ta Keo - and on a bike they cost you nothing.\n\n**Distances**: the small circuit is about 17 kilometres plus roughly 8 to get out from town and back, so call it 25 to 33 for the day. The grand circuit is about 26 plus the same access. Neither is far; the heat is what makes them hard.",
                        tourCard: CARD.cycle,
                    },
                    {
                        title: 'The months, stated plainly',
                        icon: 'Calendar',
                        content: "**November to February** is when to do this. Mornings in the mid-twenties, low humidity, dry roads. This is a genuinely lovely ride and the single best way to see the park.\n\n**March to May** is when not to. Temperatures reach the mid-thirties by late morning with no shade on the roads between temples, and the failure mode is heat exhaustion three kilometres from anywhere. If you are here in April and set on cycling, be moving by 05:30, be off the bike by 10:00, and do not plan an afternoon leg.\n\n**June to October**, the rains, are more workable than they sound. The heat breaks, the roads are sealed and drain well, and the storm usually comes in one heavy afternoon hour. Carry a poncho, accept that you will get wet once, and enjoy an empty park.\n\n**Whatever the month, start at dawn.** Both circuits are pleasant at 06:00 and punishing at 13:00, and dawn also puts you at the temples before the coaches.",
                    },
                    {
                        title: 'Bike, e-bike or tuk-tuk',
                        icon: 'Info',
                        content: "**A basic town bike** rents for a few dollars a day in Siem Reap. Fine for the small circuit in cool weather; check the brakes and the saddle height before you take it, because nobody will adjust it for you.\n\n**An e-bike** costs more and changes the trip completely. Green e-bikes are widely available in Siem Reap and are permitted in the park. The assist is what makes the grand circuit and the March-to-May months survivable, and it is the version most people over forty are happier on. Range is the thing to ask about: you want enough for 40 km with the assist on.\n\n**A guided bike tour** adds someone who knows the back lanes. This matters more than it sounds - the direct roads between temples carry coaches, and the parallel dirt tracks through the forest are quieter, cooler and prettier. You will not find them alone.\n\n**A tuk-tuk** is the honest alternative and there is no shame in it. Roughly USD 18-25 for a small-circuit day, the driver waits at each stop, and in the hot months it is simply the better call. Many people ride one day and take a tuk-tuk the next.\n\n**Mixed** is the smartest option of all: tuk-tuk out to the far end, bike the loop, tuk-tuk back. Several operators run exactly that.",
                        tourCard: CARD.countryside,
                    },
                    {
                        title: 'Rules, safety and what to carry',
                        icon: 'AlertTriangle',
                        content: "**You still need an Angkor Pass** and it is checked at the same checkpoints. Have it accessible; you will be stopping at barriers.\n\n**Traffic.** The park roads are quiet by Asian standards but they carry coaches, and coach drivers are not expecting cyclists. Ride predictably, keep right, and be especially careful at the Angkor Thom gates, which are single-lane bottlenecks where vehicles squeeze past.\n\n**Water.** Two litres minimum, and buy more at the temples - there are sellers everywhere and they are cheap.\n\n**Sun.** There is no shade on the connecting roads. Long sleeves beat sunscreen for a whole day in the saddle.\n\n**A lock**, because you will leave the bike at temple entrances for an hour at a time.\n\n**Lights** if there is any chance of a sunset temple. It goes dark fast and the road back to town is unlit in places.\n\n**Do not ride the long outlying routes.** Banteay Srei is 37 km each way and Beng Mealea further; those are car trips. The circuits inside the park are what the bike is for.\n\nIf you want the countryside rather than the temples, the lanes south and east of town are flat, shaded and genuinely lovely - rice fields, sugar palms and villages five minutes off the temple road.",
                    },
                ],
                faqs: [
                    { q: 'Can you cycle around the Angkor temples?', a: 'Yes, and it is one of the best ways to do it. The park is flat: the small circuit is about 17 km and the grand circuit about 26, plus roughly 8 km to get out from town and back.' },
                    { q: 'What is the best time of year to cycle Angkor?', a: 'November to February - mid-twenties mornings and low humidity. March to May is genuinely dangerous in the afternoon, with mid-thirties heat and no shade between temples. The rainy months are better than they sound if you carry a poncho.' },
                    { q: 'Is an e-bike better than a normal bike at Angkor?', a: 'For most people, yes. The assist is what makes the grand circuit and the hot months workable. Ask about range - you want enough for 40 km with the assist on.' },
                    { q: 'Do I still need an Angkor Pass if I cycle?', a: 'Yes, and it is checked at the same checkpoints as vehicles. Keep it somewhere you can reach without dismounting awkwardly.' },
                    { q: 'Can I cycle to Banteay Srei?', a: 'You can, but it is 37 km each way on a road with traffic, and Beng Mealea is further. Those are car trips. The bike is for the circuits inside the park and the countryside lanes around town.' },
                    { q: 'Is cycling at Angkor safe?', a: 'Broadly yes - the roads are quiet by regional standards. The hazards are coaches at the single-lane Angkor Thom gates, the heat, and riding back after a sunset temple on unlit road. Lights, water and long sleeves cover most of it.' },
                ],
            };

        case 'where-to-stay-in-siem-reap':
            return {
                title: 'Where to Stay in Siem Reap: Five Areas, and Who Each One Suits',
                seoTitle: 'Where to Stay in Siem Reap: Areas Compared',
                description: 'Siem Reap neighbourhoods compared: Old Market, Wat Bo, Sok San, Charles de Gaulle and the river north. Noise, distance to the temples, and honest prices.',
                heroImage: IMG.countryside,
                fastFacts: [
                    { icon: 'MapPin', label: 'Most central', value: 'Old Market / Pub Street' },
                    { icon: 'Star', label: 'Best all-round', value: 'Wat Bo, east of the river' },
                    { icon: 'Wallet', label: 'Good pool hotel', value: 'USD 40 - 80' },
                    { icon: 'AlertTriangle', label: 'Airport now', value: '45 km, 45 - 60 min' },
                ],
                sections: [
                    {
                        title: 'The town is small, so pick for noise, not distance',
                        icon: 'Star',
                        content: "Siem Reap is about four kilometres across and a tuk-tuk crosses it for a couple of dollars. Nowhere you would book is far from anywhere else, which means the usual question - how close am I to things - is the wrong one.\n\nThe real question is **how close am I to Pub Street**, which is loud until two in the morning in a way that carries.\n\n**Old Market / Pub Street.** The centre. Walk to everything, eat at midnight, and hear the bass through the window. Right for a two-night trip and for people who want the noise. Wrong for anyone starting at 04:30 for sunrise, which is most people.\n\n**Wat Bo, east of the river.** The best all-round answer. Five to fifteen minutes' walk from the old market over a footbridge, quiet residential streets, a good concentration of mid-range hotels with pools and of the better small restaurants. If you only take one recommendation from this page, take this one.\n\n**Sok San Road**, west of the centre, is the budget and backpacker strip - hostels, cheap guesthouses, a second cluster of bars. Good value, walkable to Pub Street, noticeably less polished.\n\n**Charles de Gaulle**, the road out to the temples, holds most of the large resorts. Quiet, garden grounds, closest to Angkor, and dead at night - you will tuk-tuk in for dinner every evening.\n\n**North along the river** is where several of the boutique and heritage properties sit, in among trees. Quiet, characterful, a ten-minute ride to town.",
                    },
                    {
                        title: 'What things actually cost',
                        icon: 'Wallet',
                        content: "Siem Reap is one of the best-value destinations in Asia, and the gap between a cheap room and a lovely one is smaller than almost anywhere.\n\n**Hostel dorm** USD 6-12. **Guesthouse double** USD 15-30, and at USD 25 you will often have a pool.\n\n**Good mid-range hotel with a pool and breakfast** USD 40-80. This is the sweet spot and it buys something that would cost four times as much in Thailand.\n\n**Boutique and heritage** USD 90-200.\n\n**The well-known luxury properties** run USD 250 and up, and Siem Reap has several genuinely world-class ones.\n\n**Seasonality is real.** The 20 December to 5 January peak takes rates to two or three times the annual average with minimum stays attached. November and mid-January to February are 30-50% above low season with good availability. May to September is 30-50% below peak, and a very good hotel becomes ordinary money - see [when to visit](/cambodia/siem-reap/best-time-to-visit-siem-reap) for what you trade for that.\n\n**A pool is not a luxury here**, it is the thing that makes the middle of the day survivable from March to May. Filter for it before you filter for anything else.",
                        tourCard: CARD.transfer,
                    },
                    {
                        title: 'Things worth checking before you book',
                        icon: 'AlertTriangle',
                        content: "**The airport moved.** Siem Reap-Angkor International opened in October 2023 about **45 kilometres east**, a 45 to 60 minute drive. Hotel listings written before that still say ten minutes. Ask whether an airport transfer is included; many hotels include one and it is worth real money now.\n\n**Free tuk-tuk to the temples** is offered by a lot of hotels and is worth more than a breakfast upgrade. A temple day is USD 18-25 of transport.\n\n**Early breakfast.** You are leaving at 04:30 for sunrise. A hotel that will do a packed breakfast box, or that opens the kitchen at 04:00, is doing you a genuine favour. Ask.\n\n**Pub Street noise** carries further than the map suggests, particularly across the river on a still night. If you are a light sleeper, Wat Bo's back streets or Charles de Gaulle.\n\n**Construction.** Siem Reap rebuilt most of its main roads in 2020-2023 and building continues. Recent reviews are worth more than photographs here.\n\n**Cash.** Most small guesthouses want US dollars and many add a card fee. Bring clean, untorn notes - damaged bills get refused.",
                    },
                    {
                        title: 'How many nights',
                        icon: 'Calendar',
                        content: "**Two nights** is a stopover. One temple day, and you will wish you had more.\n\n**Three nights** is the honest minimum and what most people should book. Arrive, two temple days with the [three-day pass](/cambodia/siem-reap/angkor-wat-tickets-and-pass-guide) spread across them, leave. Our [three-day itinerary](/cambodia/siem-reap/siem-reap-3-day-itinerary) sets it out.\n\n**Four nights** is the sweet spot, and the fourth night is the one that changes the trip - it buys either the [Tonle Sap](/cambodia/siem-reap/tonle-sap-floating-villages-guide) or the far temples without dropping anything.\n\n**Five or more** and you reach Koh Ker, Preah Vihear, Battambang as a day trip, and the countryside. Few people regret it.\n\nOne booking tip specific to the pass: the three-day Angkor pass is valid on **any three days inside a ten-day window**, so extra nights never mean wasted ticket. Spreading temple days out is free, and it is the single best thing you can do for how much you actually enjoy the temples.",
                        tourCard: CARD.smallCircuit,
                    },
                ],
                faqs: [
                    { q: 'What is the best area to stay in Siem Reap?', a: 'Wat Bo, east of the river. It is a five to fifteen minute walk from the old market over a footbridge, the streets are quiet, and it has the best concentration of mid-range hotels with pools. Old Market is more central but loud until two in the morning.' },
                    { q: 'How much is a hotel in Siem Reap?', a: 'A guesthouse double runs USD 15-30 and often has a pool at USD 25. A good mid-range pool hotel with breakfast is USD 40-80, boutique USD 90-200. Rates double or triple between 20 December and 5 January.' },
                    { q: 'Should I stay near Pub Street?', a: 'Only if you want the noise. It runs until about 2am and carries further than the map suggests, which is a problem when you are leaving at 04:30 for sunrise. Wat Bo is ten minutes’ walk away and quiet.' },
                    { q: 'How far is Siem Reap airport from the hotels?', a: 'About 45 km and a 45 to 60 minute drive - the airport moved in October 2023 and any listing saying ten minutes predates that. Many hotels include a transfer, which is now worth real money.' },
                    { q: 'How many nights should I stay in Siem Reap?', a: 'Three is the honest minimum, four is the sweet spot. The three-day Angkor pass is valid on any three days inside ten, so extra nights never waste the ticket and spreading temple days out costs nothing.' },
                    { q: 'Do I need a hotel with a pool in Siem Reap?', a: 'From March to May, effectively yes. The middle of the day is mid-thirties with no shade at the temples, and the plan that works is early start, pool at noon, back out at 15:30.' },
                ],
            };

        case 'siem-reap-2-day-itinerary':
            return {
                title: '2 Days in Siem Reap: Both Temple Days, Done Right',
                seoTitle: '2 Days in Siem Reap: Complete Itinerary',
                description: 'A 2-day Siem Reap plan: the small circuit on day one, Banteay Srei and Beng Mealea on day two, with the pass arithmetic and real timings.',
                heroImage: IMG.farTemples,
                fastFacts: [
                    { icon: 'Wallet', label: 'Pass', value: '3-day, USD 62 (cheaper than 2 singles)' },
                    { icon: 'Clock', label: 'Day 1 start', value: '04:30' },
                    { icon: 'MapPin', label: 'Day 2', value: 'Banteay Srei + Beng Mealea' },
                    { icon: 'Star', label: 'Evening', value: 'Phare circus' },
                ],
                sections: [
                    {
                        title: 'Buy the three-day pass even though you have two days',
                        icon: 'Wallet',
                        content: "This is the first decision and most people get it wrong.\n\nTwo one-day passes cost **USD 74**. The three-day pass costs **USD 62** and is valid on **any three days inside a ten-day window**. The three-day is cheaper than the two singles you were about to buy, and it gives you a spare day you can use or ignore.\n\nBuy it at the Angkor Enterprise ticket office on the temple road, which is the only seller and closes at 17:30. Tickets are **not** sold at the temple gates. Bring your passport - they photograph you and print your face on the pass. Full detail in the [pass guide](/cambodia/siem-reap/angkor-wat-tickets-and-pass-guide).\n\nThe other consequence of the ten-day window: your two temple days **do not have to be consecutive**. If you are in Siem Reap for four nights, put a rest day in the middle. Two straight days on sandstone in the mid-thirties is where people stop seeing carvings and start seeing stone.",
                        tourCard: CARD.smallCircuit,
                    },
                    {
                        title: 'Day 1: sunrise and the small circuit',
                        icon: 'Clock',
                        content: "**04:30 leave town.** Angkor Wat opens at 05:00 and the sky colours before the sun clears the towers, so six o'clock is late. The temple faces **west** - alone among the great Khmer temples - which is exactly why the silhouette and the reflection in the northern pool work here. The southern pool has the same view with fewer elbows.\n\n**06:30 go inside while the crowd goes to breakfast.** They leave together and the temple empties. This is the best twenty minutes of the day: the 600-metre bas-relief gallery, the Churning of the Ocean of Milk, and the upper level without a queue on the stairs. Shoulders and knees covered or you are turned back.\n\n**08:30 Angkor Thom.** Enter by the south gate, causeway lined with gods and demons hauling a serpent, and give the **Bayon** a full hour - over 200 faces above, and markets, a cockfight and the Cham war carved at eye level below.\n\n**11:00 stop.** Go back to the hotel. This is not laziness; it is what makes day two possible.\n\n**15:00 Ta Prohm**, after its queue has thinned. **17:00 Pre Rup** for sunset, which is better than Phnom Bakheng and has no crowd cap.",
                    },
                    {
                        title: 'Day 2: out of the park',
                        icon: 'MapPin',
                        content: "Day two is the one people remember, and it goes north-east.\n\n**Banteay Srei first**, because it closes earlier than the central temples. Thirty-seven kilometres, about fifty minutes. Consecrated in **AD 967**, built by a brahmin rather than a king, and cut in a pink sandstone fine enough to hold detail no other Khmer temple keeps. An hour does it justice. Detail in our [Banteay Srei guide](/cambodia/siem-reap/banteay-srei-guide).\n\n**Beng Mealea after lunch.** Another forty minutes east: a 12th-century temple on Angkor Wat's footprint that was never cleared, walked on boards over collapsed galleries with trees standing in the courtyards. Between the two you see both ends of what this civilisation left - precision and collapse - in one day.\n\n**The swap**, if temples are enough: spend day two on the **Tonle Sap** instead. The lake reverses direction twice a year and the stilt villages read completely differently depending on the month, so check the [floating village guide](/cambodia/siem-reap/tonle-sap-floating-villages-guide) before committing to it.\n\n**The other swap**, for serious ruins people: **Koh Ker**, two hours north-east, capital for about twenty years in the 10th century, with a seven-tiered sandstone pyramid 36 metres high that you climb by a wooden stair. It has its own admission and almost nobody on it.",
                        tourCard: CARD.farTemples,
                    },
                    {
                        title: 'The evenings',
                        icon: 'Star',
                        content: "Two nights means two evenings, and defaulting to Pub Street for both is a waste of one of them.\n\n**Night one: food.** A street-food walk on the first evening makes every subsequent meal better, because the barrier to eating well in Cambodia is knowing what to ask for. **Fish amok**, a coconut and kroeung curry steamed in a banana leaf until it sets like custard. **Lok lak**, beef seared hard with black pepper and a lime and Kampot pepper dipping sauce. More in the [food guide](/cambodia/siem-reap/siem-reap-food-guide).\n\n**Night two: Phare.** The Cambodian circus grew out of a school in Battambang that takes children from hard backgrounds, and it is modern acrobatic theatre about Cambodian life rather than a hotel floor show. It is short, it is properly staged, and it is the thing people are still talking about on the plane.\n\n**The alternative** is a classical **Apsara** performance. The form was rebuilt after the Khmer Rouge years from the handful of teachers who survived, and the hand positions are the same fixed vocabulary you have spent two days looking at on the temple walls. Take a ticketed performance rather than a buffet-and-show package; the food at those is reheated and the dance is an afterthought.",
                        tourCard: CARD.circus,
                    },
                ],
                faqs: [
                    { q: 'Is 2 days enough for Siem Reap?', a: 'It covers Angkor properly: the small circuit on day one and the far temples on day two. You will miss the Tonle Sap and the grand circuit. Three nights is the honest minimum and four is the sweet spot.' },
                    { q: 'Which Angkor pass for 2 days?', a: 'The three-day at USD 62, not two one-day passes at USD 74. The three-day is cheaper and is valid on any three days inside a ten-day window, so the spare day is free.' },
                    { q: 'What should I do on day 2 in Siem Reap?', a: 'Banteay Srei first because it closes early, then Beng Mealea. If two temple days is one too many, swap day two for the Tonle Sap - but check what the lake is doing that month first.' },
                    { q: 'Do the two temple days have to be consecutive?', a: 'No. The three-day pass spans a ten-day window, so if you are staying four nights you can put a rest day in the middle at no extra cost. It is the single best thing you can do for how much you enjoy the temples.' },
                    { q: 'How much does 2 days in Siem Reap cost?', a: 'USD 62 for the pass, USD 18-25 a day for a tuk-tuk or USD 35-55 for a car, and USD 35-45 if you take a licensed guide. With a mid-range room and food, roughly USD 180-280 per person.' },
                    { q: 'Is Phare or an Apsara show better?', a: 'Phare if you want something contemporary and genuinely good - modern acrobatic theatre from a Battambang school that takes children from hard backgrounds. A ticketed Apsara performance if you want the classical form that was rebuilt after the Khmer Rouge years. Avoid the buffet-and-show packages either way.' },
                ],
            };

        case 'siem-reap-with-kids':
            return {
                title: 'Angkor With Children: What Works, What Does Not, and the Heat',
                seoTitle: 'Siem Reap With Kids: Temples, Heat & What Works',
                description: 'Visiting Angkor with children: which temples they actually like, how the heat changes the plan, free entry rules, and the sites to skip at their age.',
                heroImage: IMG.countryside,
                fastFacts: [
                    { icon: 'Wallet', label: 'Under 12', value: 'Free, on a passport' },
                    { icon: 'Clock', label: 'Realistic', value: '2 temples a day, not 5' },
                    { icon: 'Star', label: 'Biggest hit', value: 'Ta Prohm and the Bayon faces' },
                    { icon: 'AlertTriangle', label: 'Skip at their age', value: 'S-21 and Choeung Ek' },
                ],
                sections: [
                    {
                        title: 'Angkor is more child-friendly than it looks',
                        icon: 'Star',
                        content: "Parents worry that a week of temples will bore children rigid. Angkor is better at this than almost any historic site, for three specific reasons.\n\n**It is outdoors and you climb on it.** These are not roped-off rooms. Children go through doorways, up stairs, along galleries and around corners, and the scale is enormous.\n\n**Ta Prohm is a jungle.** Trees growing through buildings is a concept that needs no explaining to a seven-year-old. It is reliably the favourite.\n\n**The Bayon has two hundred giant faces.** Counting them is a genuine game and takes as long as you need it to.\n\n**Children under twelve are free**, on the strength of a passport showing the date of birth. No child ticket, no half rate - just free.\n\nWhat does not work is the adult plan. Five temples in a day is a lot for an adult and impossible for a child. **Two temples a day**, both in the morning, is the realistic ceiling, and a three-day pass across a ten-day window is exactly the right instrument for that - see the [pass guide](/cambodia/siem-reap/angkor-wat-tickets-and-pass-guide).",
                        tourCard: CARD.smallCircuit,
                    },
                    {
                        title: 'The heat is the real constraint',
                        icon: 'AlertTriangle',
                        content: "Everything difficult about Angkor with children is the temperature, not the temples.\n\nFrom **March to May** it is mid-thirties by late morning with **no shade in the Angkor Wat courtyards or on the Bayon's upper terrace**. Children overheat faster than adults and complain later than is useful.\n\n**The shape of a workable day**: out by 06:30 or 07:00, two temples, off the stone by 11:00, pool until 15:30, something short in the late afternoon. Build the trip around a hotel with a pool and treat the pool as part of the itinerary rather than a treat.\n\n**November to February** is a different trip - mid-twenties mornings, and the middle of the day is merely warm. If you have any choice of dates with children, choose these months.\n\n**Sunrise with children** is a judgement call. A 04:30 start is brutal on a family and the pool edge is crowded and dark. Many families do sunrise with one parent and let the others sleep. Nobody regrets skipping it.\n\n**Practicals**: more water than you think, hats that actually stay on, and a spare shirt. Loose cotton, and shoulders and knees covered for the upper level of Angkor Wat - which applies to children too.",
                    },
                    {
                        title: 'What to do on the non-temple days',
                        icon: 'MapPin',
                        content: "**Phare, the Cambodian circus** is the best evening in the country with children. Acrobatics, live music, ninety minutes, and it comes out of a Battambang school that takes children from hard backgrounds. Nobody is bored.\n\n**The Tonle Sap floating villages** are a boat ride to a village on stilts, which is inherently interesting. Check the month first - the lake reverses twice a year and in the dry season the houses stand on bare six-metre legs over mud. Our [floating village guide](/cambodia/siem-reap/tonle-sap-floating-villages-guide) says which village works when.\n\n**APOPO's HeroRATs** in Siem Reap train giant African pouched rats to detect landmines. Children get to meet the rats. It is short, it is free of gore, and it explains something real about Cambodia at a level a ten-year-old can hold.\n\n**A quad bike or tuk-tuk ride through the rice fields** at the end of the afternoon, when the light is good and the villages are out. Five minutes off the temple road and completely different.\n\n**A cooking class.** Most take children, and pounding kroeung in a mortar is a good job for small hands.\n\n**Angkor Wat by bike** is realistic for confident cyclists over about twelve in the cool months. The park is flat - see [cycling Angkor](/cambodia/siem-reap/angkor-by-bike).",
                        tourCard: CARD.circus,
                    },
                    {
                        title: 'What to leave out, and two honest warnings',
                        icon: 'Info',
                        content: "**Tuol Sleng and Choeung Ek in Phnom Penh are not suitable for young children**, and both sites say so. The photographs, the cells and the stupa of five thousand skulls are explicit. Prepared teenagers generally manage and often take a great deal from it; under-twelves should not go. If your itinerary includes Phnom Penh, plan for one parent to go while the other does the [Royal Palace](/cambodia/phnom-penh/royal-palace-phnom-penh) and the riverfront.\n\n**Do not visit an orphanage, and decline any tour that offers one.** Paid visits to institutions housing children cause real harm however they are framed, reputable Cambodian operators stopped offering them years ago, and the practice has driven children into institutions who have living parents. The same goes for buying milk powder or school supplies from someone who leads you to a particular shop.\n\n**Begging children** at the temples and the lake are a genuine dilemma. Giving money keeps children out of school because it makes them earning assets. Cambodian NGOs are consistent on this: give to an organisation, not to the child, however hard that feels in the moment.\n\n**Health.** Dengue is present; use repellent at dusk. Bottled water only. The heat, not the food, is what actually spoils family trips here.",
                    },
                ],
                faqs: [
                    { q: 'Is Angkor Wat suitable for children?', a: 'Yes, and better than most historic sites - it is outdoors, you climb on it, Ta Prohm has trees growing through the buildings and the Bayon has two hundred faces to count. Children under twelve enter free on a passport.' },
                    { q: 'How many temples can you do in a day with kids?', a: 'Two, both in the morning. The adult plan of four or five is not realistic. A three-day pass spread across a ten-day window is the right instrument, because it lets you take rest days at no extra cost.' },
                    { q: 'What is the best time of year to visit Angkor with children?', a: 'November to February. Mornings are mid-twenties and the middle of the day is merely warm. March to May reaches the mid-thirties with no shade in the courtyards, which is the single hardest thing about a family trip here.' },
                    { q: 'Should children visit the Killing Fields?', a: 'Not young children - both Tuol Sleng and Choeung Ek say so and the photographs, cells and stupa are explicit. Teenagers who have been prepared usually manage well. Plan for one parent to go while the other takes the children to the Royal Palace.' },
                    { q: 'Should we visit an orphanage in Cambodia?', a: 'No. Paid visits to institutions housing children cause real harm however they are framed, and reputable Cambodian operators stopped offering them years ago. Decline the stop if a tour includes it.' },
                    { q: 'Is sunrise at Angkor Wat worth it with kids?', a: 'It is a 04:30 start and a crowded dark pool edge. Many families send one parent and let the rest sleep, and nobody regrets skipping it. The temple is emptier at 06:30 anyway, when the sunrise crowd leaves for breakfast.' },
                ],
            };

        case 'bayon-and-angkor-thom-guide':
            return {
                title: 'Angkor Thom and the Bayon: Read the Walls, Not Just the Faces',
                seoTitle: 'Angkor Thom & Bayon Guide: Gates, Faces, Walls',
                description: 'Angkor Thom was a walled city, not a temple. The Bayon at its centre carries 200 faces above and ordinary Khmer life carved at eye level below.',
                heroImage: IMG.smallCircuit,
                fastFacts: [
                    { icon: 'Calendar', label: 'Laid out', value: 'c. 1200, Jayavarman VII' },
                    { icon: 'MapPin', label: 'City walls', value: '3 km each side, 8 m high' },
                    { icon: 'Star', label: 'Bayon faces', value: 'Over 200' },
                    { icon: 'Clock', label: 'Best hour', value: '08:30, before the coaches' },
                ],
                sections: [
                    {
                        title: 'It is a city, and that changes how you walk it',
                        icon: 'Star',
                        content: "Most visitors treat Angkor Thom as a temple with a long entrance. It is not. It is **the last capital of the Khmer empire**, laid out by Jayavarman VII around 1200, and it is a square roughly **three kilometres on each side** behind **eight-metre walls** and a moat. At its height it may have held a hundred thousand people. Everything wooden has gone; only the stone remains, which is why it reads as scattered monuments in forest.\n\n**The gates are the introduction.** Five of them, each with a tower of four faces, and each approached by a causeway lined with **54 gods on one side and 54 demons on the other**, hauling on the body of a serpent. That is the Churning of the Ocean of Milk again - the same myth carved flat on Angkor Wat's east gallery, here built at the scale of a bridge. The south gate is the best preserved and the one most tours use.\n\n**Inside**, the buildings you can still see are the Bayon at the centre, the **Baphuon**, the **Phimeanakas** and the royal enclosure, and the **Terrace of the Elephants** and **Terrace of the Leper King** along the eastern side. Between them is grass and forest where the city was.\n\nWalk the terraces rather than driving between stops. The Terrace of the Elephants is **350 metres** of parading elephants and garudas and it was the royal reviewing stand - you are standing where the court watched the army come home.",
                        tourCard: CARD.smallCircuit,
                    },
                    {
                        title: 'The Bayon: look down as well as up',
                        icon: 'Info',
                        content: "The faces are why people come and they deserve it - **over 200** of them on the towers, serene, eyes lowered, four to a tower, looking out in every direction. Who they are is still argued: the bodhisattva Avalokiteshvara, the king himself, or deliberately both at once.\n\nBut the thing most visitors walk straight past is at **eye level on the outer gallery**, and it is arguably more remarkable.\n\nThe outer gallery does not carve gods. It carves **ordinary Khmer life in the twelfth century**: a market with a woman haggling, men at a cockfight, a game of chess, a woman giving birth, a cook at a pot, fishermen, a man pulling a splinter from his foot. There is nothing else like it in the region and it is the closest thing we have to a photograph of how these people actually lived.\n\nIt also carves the **naval battle against the Chams** - the war Jayavarman VII won to found this city - in panels along the eastern side, with rows of oarsmen, crocodiles taking the dead in the water, and the fighting on deck.\n\nThe inner gallery, added later, returns to gods and kings. It is the outer one to slow down for.\n\nThis is the single strongest argument for a **licensed guide** at Angkor. Nothing is labelled, the panels run for a hundred metres, and without someone pointing you will photograph the faces and miss the rest.",
                    },
                    {
                        title: 'The Baphuon and the puzzle nobody could solve',
                        icon: 'AlertTriangle',
                        content: "Behind the Bayon stands the **Baphuon**, and it has the best story at Angkor.\n\nIt is older than Angkor Thom - mid-eleventh century - a temple-mountain that was already ancient when Jayavarman VII built his city around it. By the twentieth century it was collapsing, and in the 1960s French conservators began **anastylosis**: taking the whole thing apart, stone by stone, numbering **some 300,000 blocks** and laying them out in the forest to rebuild on a sound core.\n\nThen the war came. The **records of which block went where were destroyed** in the Khmer Rouge years, and the archaeologist who had led the work died. What was left was a hillside of 300,000 numbered stones and no key.\n\nRebuilding it took decades of what has been called the largest three-dimensional jigsaw in the world, and it reopened in 2011. When you walk up it you are walking on a puzzle that was solved without its picture.\n\nOn the west side, a **70-metre reclining Buddha** was assembled out of the temple's own stones in the sixteenth century. It is hard to see as a figure until someone points out the head, and then you cannot unsee it.",
                        tourCard: CARD.grandCircuit,
                    },
                    {
                        title: 'Timing and practicalities',
                        icon: 'Clock',
                        content: "**Go at 08:30.** The sunrise crowd is still at Angkor Wat or at breakfast, and Angkor Thom is at its emptiest. By ten the coaches arrive and the Bayon's narrow upper terrace becomes a slow shuffle.\n\n**Allow two hours minimum** - one for the Bayon, one for the Baphuon and the terraces. Most itineraries give it forty minutes, which is why so many people remember Angkor Thom as the one with the faces and nothing else.\n\n**The Bayon is a maze.** Low doorways, steep narrow stairs, and no obvious route. That is part of the pleasure but it is hard going for anyone unsteady, and there is no shade on the upper terrace.\n\n**The south gate** gets the traffic; the **north** and **west** gates are almost empty and just as good, and a driver will happily take a different one if you ask.\n\n**Victory Gate**, on the east, is the one the army came back through and lines up with the Terrace of the Elephants.\n\n**It is all on the Angkor Pass.** Angkor Thom sits on the [small circuit](/cambodia/siem-reap/angkor-temples-small-vs-grand-circuit) with Angkor Wat and Ta Prohm, and is the middle stop of a standard day.",
                    },
                ],
                faqs: [
                    { q: 'Is Angkor Thom the same as Angkor Wat?', a: 'No. Angkor Wat is a single temple; Angkor Thom is a walled city three kilometres on each side, laid out around 1200 by Jayavarman VII, with the Bayon at its centre. They are about 1.5 km apart and both on the small circuit.' },
                    { q: 'How many faces are on the Bayon?', a: 'Over 200, four to a tower, looking out in every direction. Whether they represent the bodhisattva Avalokiteshvara, the king himself, or deliberately both, is still argued.' },
                    { q: 'What should I look at on the Bayon besides the faces?', a: 'The outer gallery at eye level, which carves ordinary twelfth-century Khmer life - a market, a cockfight, a chess game, a woman giving birth - and the naval war against the Chams. There is nothing else like it in the region and most visitors walk straight past it.' },
                    { q: 'What happened to the Baphuon?', a: 'French conservators dismantled it in the 1960s, numbering some 300,000 blocks to rebuild it on a sound core. The records of which block went where were destroyed in the Khmer Rouge years. Rebuilding it without the key took decades; it reopened in 2011.' },
                    { q: 'How long do you need at Angkor Thom?', a: 'Two hours minimum - one for the Bayon and one for the Baphuon and the terraces. Most itineraries allow forty minutes, which is why people remember it only as the one with the faces.' },
                    { q: 'Which gate of Angkor Thom should I use?', a: 'The south gate is the best preserved and the busiest. The north and west gates are nearly empty and just as good, and any driver will take a different one if you ask. Each causeway is lined with 54 gods and 54 demons hauling a serpent.' },
                ],
            };

        case 'beng-mealea-and-koh-ker':
            return {
                title: 'Beng Mealea and Koh Ker: Angkor Without the Queue',
                seoTitle: 'Beng Mealea & Koh Ker: The Far Temples',
                description: 'Beng Mealea is Angkor Wat’s scale left uncleared; Koh Ker has a 36-metre stepped pyramid you can climb. Distances, admission and which to choose.',
                heroImage: IMG.kohKer,
                fastFacts: [
                    { icon: 'MapPin', label: 'Beng Mealea', value: '~60 km, 1 hr 15' },
                    { icon: 'MapPin', label: 'Koh Ker', value: '~120 km, 2 hrs' },
                    { icon: 'Star', label: 'Prasat Thom', value: '7 tiers, 36 m, climbable' },
                    { icon: 'Wallet', label: 'Koh Ker', value: 'Its own admission' },
                ],
                sections: [
                    {
                        title: 'Beng Mealea: what the French found',
                        icon: 'Star',
                        content: "Beng Mealea is a twelfth-century temple built on roughly **Angkor Wat's footprint**, about sixty kilometres east of Siem Reap, and almost nothing has been done to it.\n\nThe galleries have come down. Whole roof sections lie where they fell, sandstone blocks the size of cars tipped at angles, and trees have grown up through the courtyards and out again. You cross it on **wooden walkways** built over the collapse, which sounds managed and is not: the walkway takes you through the middle of a ruin that is genuinely ruined, with the forest closed over the top of it.\n\nThis is the closest you will get to what the nineteenth-century explorers described. Angkor Wat has been cleared, propped and restored for a century. Ta Prohm's roots are [carefully maintained theatre](/cambodia/siem-reap/ta-prohm-tomb-raider-temple), beautifully done. Beng Mealea is just fallen down.\n\nIt is also **quiet**. The drive filters out the coach traffic and you will often have whole sections alone.\n\nThere is little carving left to read and no restored sanctuary to climb - the appeal is entirely atmosphere. People who want information prefer Banteay Srei; people who want the feeling of finding something prefer this.",
                        tourCard: CARD.farTemples,
                    },
                    {
                        title: 'Koh Ker: the capital that lasted twenty years',
                        icon: 'MapPin',
                        content: "Two hours north-east of Siem Reap, Koh Ker is the strangest thing in the Angkor world.\n\nFor about **two decades in the tenth century** - roughly 928 to 944 - the Khmer capital moved here, away from Angkor, under Jayavarman IV. Then it moved back, and Koh Ker was left in the forest.\n\nWhat it left behind is **Prasat Thom**, a **seven-tiered sandstone pyramid 36 metres high** that looks nothing like Khmer architecture and a great deal like something from Mesoamerica. A wooden staircase now runs up the side and you can climb it. From the top there is forest to the horizon in every direction with no road, no village and no other visitor in it. There is nothing else like that view in Cambodia.\n\nThe site holds **dozens of other prasats** scattered through the forest, many barely cleared, and the sculpture from Koh Ker is among the most prized Khmer work anywhere - which is why a great deal of it was looted, and why several pieces have been repatriated from Western museums and private collections in recent years.\n\n**Koh Ker charges its own admission** on top of the Angkor Pass. So does Preah Vihear. Confirm what a tour price includes before you go rather than at the gate.\n\n**Landmines.** Koh Ker was mined and has been cleared along the marked paths. Stay on them. This is not a formality.",
                        tourCard: CARD.kohKer,
                    },
                    {
                        title: 'Which one, and how to combine them',
                        icon: 'Calendar',
                        content: "**Beng Mealea alone** is a half-day and pairs naturally with **Banteay Srei**, which is on the same road out. That is the best single day in the park: the finest carving in Cambodia in the morning, total collapse in the afternoon.\n\n**Koh Ker alone** is most of a day - two hours each way.\n\n**Both together** is a long but standard day trip, usually Koh Ker first and Beng Mealea on the way home, because Beng Mealea is closer to Siem Reap. Expect ten to twelve hours door to door.\n\n**Preah Vihear** is the third of the far temples and the biggest commitment: three to three and a half hours each way to a temple strung along a cliff on the Thai border, with a final climb by local 4x4 from the base station. A twelve-hour day, and the most dramatically sited temple in the country.\n\n**Which to skip.** If you have one far-temple day and you like carving and history, take Banteay Srei plus Beng Mealea. If you like scale and emptiness, take Koh Ker. If you are a serious ruins person with a spare day, take Preah Vihear.\n\nAll of this assumes a **three- or seven-day Angkor pass** - the seven-day at USD 72 is the cheaper ticket once you are at four temple days.",
                    },
                    {
                        title: 'Practicalities for a long day',
                        icon: 'Info',
                        content: "**Transport.** These are car trips, not tuk-tuk trips. A private car with driver runs USD 55-90 for the far temples depending on distance; a tuk-tuk to Koh Ker is four hours of open road each way in the heat and is a bad idea.\n\n**Start early.** Leave by seven. The heat is the enemy, and Beng Mealea's walkways and Koh Ker's pyramid are both fully exposed.\n\n**Food.** There are simple stalls at both sites and not much else on the road. Eat before you leave or accept rice and noodles.\n\n**Footwear.** Beng Mealea's walkways are fine but the good bits are off them where the guides take you, over rubble. Koh Ker's pyramid stair is steep and open. Trainers.\n\n**A guide** matters less here than at Angkor Thom - there is less carving to read - but a driver who knows Koh Ker's outlying prasats will show you three or four nobody else visits.\n\n**Roads** are surfaced the whole way to both now, which was not true a decade ago. The drive itself is through rice country and villages and is genuinely pleasant.\n\n**Combine with the [3-day itinerary](/cambodia/siem-reap/siem-reap-3-day-itinerary)** by making this your third day, once the small circuit and Banteay Srei are done.",
                    },
                ],
                faqs: [
                    { q: 'Is Beng Mealea worth visiting?', a: 'If you want the feeling of finding a ruin rather than reading one, yes. It is a twelfth-century temple on Angkor Wat’s footprint that was never cleared - collapsed galleries, trees through the courtyards, crossed on wooden walkways, and usually quiet.' },
                    { q: 'How far is Koh Ker from Siem Reap?', a: 'About 120 km and two hours each way. It was the Khmer capital for roughly two decades in the tenth century and its Prasat Thom is a seven-tiered sandstone pyramid 36 metres high that you can climb by a wooden stair.' },
                    { q: 'Is Koh Ker included in the Angkor Pass?', a: 'No. Koh Ker charges its own admission, and so does Preah Vihear. Beng Mealea is generally covered now, but confirm what your tour price includes before you set off rather than at the gate.' },
                    { q: 'Can you climb the pyramid at Koh Ker?', a: 'Yes, by a wooden staircase up the side of Prasat Thom. From the top there is forest to the horizon in every direction with no road or village in it - there is no comparable view anywhere else in Cambodia.' },
                    { q: 'Can you do Beng Mealea and Koh Ker in one day?', a: 'Yes, usually Koh Ker first and Beng Mealea on the way back since it is closer to Siem Reap. Expect ten to twelve hours door to door and take a car, not a tuk-tuk.' },
                    { q: 'Are there landmines at Koh Ker?', a: 'The site was mined and has been cleared along the marked paths. Stay on them - this is a real instruction, not a formality, and it applies to the outlying prasats in the forest as much as the main group.' },
                ],
            };
        case 'phnom-kulen-guide':
            return {
                title: 'Phnom Kulen: The Separate USD 20, and Whether It Is Worth It',
                seoTitle: 'Phnom Kulen Guide: Waterfall, Lingas & the USD 20',
                description: 'Phnom Kulen charges its own USD 20 on top of the Angkor Pass. What is up there, which months the waterfall actually runs, and when to skip it.',
                heroImage: IMG.farTemples,
                fastFacts: [
                    { icon: 'Wallet', label: 'Entry', value: 'USD 20, NOT on the Angkor Pass' },
                    { icon: 'Calendar', label: 'Falls run', value: 'Roughly July - December' },
                    { icon: 'Star', label: 'Founded here', value: 'The empire, AD 802' },
                    { icon: 'AlertTriangle', label: 'Road', value: 'Steep, one-way system' },
                ],
                sections: [
                    {
                        title: 'Where the Khmer empire says it began',
                        icon: 'Star',
                        content: "Phnom Kulen is a sandstone plateau about fifty kilometres north-east of Siem Reap, and it matters for two reasons that have nothing to do with the waterfall everyone photographs.\n\n**It is where the stone came from.** Angkor Wat, the Bayon, Banteay Srei - the blocks were quarried up here and moved down to the plain, and quarry faces with cut marks are still visible. Moving sandstone on that scale, by canal and elephant, is arguably a bigger engineering achievement than the temples themselves.\n\n**It is where the empire was declared.** In **AD 802** Jayavarman II held a ceremony on this plateau proclaiming himself *chakravartin*, universal monarch, and independent of Java. Cambodians give that date as the founding of the Khmer empire. There is a real sense in which this hill, not Angkor, is the country's origin point.\n\nIt is also a **living pilgrimage site**. Cambodians come up here in numbers at weekends and holidays to bathe at the falls and make offerings at the summit pagoda, and that is a large part of the atmosphere. You are a visitor at somebody else's sacred mountain, not at an archaeological park.\n\nThat combination - quarry, founding site, working pilgrimage - is what makes it interesting. The waterfall is the thing that sells it.",
                        tourCard: CARD.farTemples,
                    },
                    {
                        title: 'The USD 20, stated clearly',
                        icon: 'Wallet',
                        content: "**Phnom Kulen is not on the Angkor Pass.** It charges its own **USD 20** per foreign visitor, collected at the bottom of the mountain, and this catches people out constantly because Kulen is bundled into tour listings alongside Banteay Srei and Beng Mealea, which are covered.\n\nSo a day sold as three sites may carry an unadvertised twenty dollars a head. **Ask what a tour price includes before you book**, not at the barrier.\n\nThe same applies to **Koh Ker** and **Preah Vihear**, which also charge separately. Only the temples inside the Angkor Archaeological Park are on the pass - our [pass guide](/cambodia/siem-reap/angkor-wat-tickets-and-pass-guide) sets out exactly what the USD 37 / 62 / 72 does and does not buy.\n\n**The road is one-way by time of day.** The single mountain road runs up in the morning and down in the afternoon, with the changeover around midday. That is not a suggestion, it is how the traffic is managed, and it means a late start can mean you are not allowed up at all. Leave Siem Reap by eight.\n\n**Allow a full day.** Fifty kilometres each way plus the mountain road is two hours of driving before you have seen anything.",
                    },
                    {
                        title: 'Which months, and the honest verdict',
                        icon: 'Calendar',
                        content: "Everything about whether Kulen is worth your USD 20 and your day comes down to water.\n\n**July to December**, and especially **September to November**, the two-tier waterfall runs properly. The upper fall is a broad curtain, the lower one drops into a pool people swim in, and the river above it runs over the carved riverbed. This is the trip people rave about.\n\n**February to May** the falls reduce to a trickle or stop. The pool is shallow and brown, the carved riverbed is dry stone, and you have paid twenty dollars and spent a day for a view and a pagoda. In April it can be genuinely disappointing.\n\n**The honest verdict**: in the wet months and just after, Kulen is a very good day and the swim is the best thing you will do in Cambodia in that heat. In the dry months, **spend the day on [Banteay Srei and Beng Mealea](/cambodia/siem-reap/beng-mealea-and-koh-ker) instead** and do not feel you have missed anything.\n\n**Weekends** the plateau fills with Cambodian families, which is either the best part of the day or a crowd, depending on what you came for. Weekdays are quiet.",
                        tourCard: CARD.kohKer,
                    },
                    {
                        title: 'What to actually see up there',
                        icon: 'MapPin',
                        content: "**The waterfall**, two tiers, with the lower pool the one to swim in. Changing facilities are basic. Bring a towel and something you can swim in that covers you reasonably - this is a pilgrimage site.\n\n**The river of a thousand lingas.** Above the falls the riverbed itself is carved - hundreds of lingas in ordered grids, plus Vishnu reclining on the serpent Ananta, cut directly into the rock so the water runs over them. The idea was to sanctify the water that then flowed down to the plain and irrigated Angkor. Best when there is water; visible either way.\n\n**Kbal Spean** is the more famous version of the same idea and is a **different site**, closer to Banteay Srei, reached by a 1.5-kilometre forest walk. Do not confuse the two - operators sometimes blur them.\n\n**Preah Ang Thom**, the summit pagoda, holds a **reclining Buddha carved from a single sandstone boulder**, about eight metres long, from the sixteenth century. Shoes off, shoulders and knees covered, and a steep stair up.\n\n**The quarries and Srah Damrei**, an elephant and other animals carved life-size in stone deep in the forest, need a guide and a walk and almost nobody goes. Ask if you want the version of the mountain that is not on the tour.",
                    },
                ],
                faqs: [
                    { q: 'Is Phnom Kulen included in the Angkor Pass?', a: 'No. It charges its own USD 20 per foreign visitor at the bottom of the mountain, and tours often bundle it with Banteay Srei and Beng Mealea, which are covered. Ask what a tour price includes before booking, not at the barrier.' },
                    { q: 'When does the Phnom Kulen waterfall actually run?', a: 'Roughly July to December, best September to November. From February to May it reduces to a trickle or stops, and the carved riverbed is dry stone. In the dry months spend the day on Banteay Srei and Beng Mealea instead.' },
                    { q: 'Why is Phnom Kulen important?', a: 'The sandstone for Angkor was quarried there, and in AD 802 Jayavarman II declared himself universal monarch on the plateau - the date Cambodians give as the founding of the Khmer empire. It is also a living pilgrimage site, busiest at weekends.' },
                    { q: 'Can you swim at Phnom Kulen?', a: 'Yes, in the pool below the lower fall, when there is water. Facilities are basic, so bring a towel and something to swim in that covers you reasonably - this is a sacred mountain, not a swimming spot.' },
                    { q: 'Is Phnom Kulen the same as Kbal Spean?', a: 'No, though both have carved riverbeds. Kbal Spean is a separate site closer to Banteay Srei, reached by a 1.5 km forest walk. Operators sometimes blur the two, so check which one a tour actually goes to.' },
                    { q: 'How long does Phnom Kulen take?', a: 'A full day. It is about 50 km each way plus the mountain road, which runs one-way uphill in the morning and downhill in the afternoon - so a late start can mean you are not allowed up. Leave Siem Reap by eight.' },
                ],
            };

        case 'angkor-photography-guide':
            return {
                title: 'Photographing Angkor: Light, Angles and the Shots Everyone Misses',
                seoTitle: 'Angkor Photography Guide: Light, Times & Spots',
                description: 'Where to stand and when at Angkor: the southern reflecting pool, the empty half-hour after sunrise, why overcast is best at Ta Prohm, and the rules on tripods.',
                heroImage: IMG.sunriseLake,
                fastFacts: [
                    { icon: 'Clock', label: 'Empty half-hour', value: '06:30, when the crowd eats' },
                    { icon: 'MapPin', label: 'Quieter pool', value: 'Southern, not northern' },
                    { icon: 'Star', label: 'Best Ta Prohm light', value: 'Overcast' },
                    { icon: 'Calendar', label: 'Sun over the tower', value: 'Around 21 Mar, 23 Sep' },
                ],
                sections: [
                    {
                        title: 'The sunrise, and the two things nobody tells you',
                        icon: 'Clock',
                        content: "**The southern pool.** Everyone lines the northern reflecting pool because that is where the first tour bus stopped in about 1995 and it has been self-reinforcing ever since. The southern pool gives you the same five towers, the same reflection, and a fraction of the people. Walk on. Guides know and will take you if you ask.\n\n**The colour comes before the sun.** Angkor Wat admits from 05:00 and the sky is at its best in the twenty minutes before the disc appears, which is roughly 05:40 to 06:20 depending on the month. People who arrive for sunrise at six have missed it. Leave town at 04:30.\n\nThe reason any of this works is structural: **Angkor Wat faces west**, alone among the great Khmer temples, so at dawn you stand on the west causeway looking east and the towers silhouette against the colour. No other temple here gives you that.\n\n**Two honest warnings.** The pools can be low or drained in the dry months and during maintenance - no water, no reflection. And the rains are underrated: a sky with structure in it produces far better colour than an empty blue one, and the pool edge is emptier.\n\n**The equinoxes**, around **21 March and 23 September**, are when the sun rises directly over the central tower. Those two mornings are the most crowded of the year at that pool by a wide margin.",
                        tourCard: CARD.sunriseLake,
                    },
                    {
                        title: 'The empty half-hour, and the rest of the day',
                        icon: 'Star',
                        content: "**06:30 is the single most valuable half-hour at Angkor** and almost nobody uses it. The sunrise crowd leaves for breakfast together, in a body, and the temple empties. Go in while they go out and you have the outer gallery, the courtyards and the upper level close to yourself. Clean architectural shots with no people in them are available for about thirty minutes and at no other time of day.\n\n**Angkor Thom, 08:00 to 09:30.** The Bayon's faces take side light well and the towers are a maze of foreground and background - shoot through doorways and between towers rather than standing back. The outer gallery bas-reliefs are in shade and need a steady hand or a high ISO.\n\n**Midday: stop.** Overhead sun on grey sandstone is the worst light there is, and from March to May it is also dangerous. This is pool time.\n\n**15:00 to 17:00, Ta Prohm.** Late, when the queue has gone.\n\n**Sunset: Pre Rup**, not Phnom Bakheng. Pre Rup is warm laterite that goes properly orange, with a view over forest and no cap on numbers. Phnom Bakheng caps how many people are allowed up and queues from mid-afternoon.\n\n**Blue hour after sunset** at Angkor Wat's moat, from the causeway, is a shot very few people stay for.",
                    },
                    {
                        title: 'Ta Prohm, and why you want a grey day',
                        icon: 'Info',
                        content: "Ta Prohm is the hardest exposure at Angkor and the most misunderstood.\n\nThe galleries are deep shade and the courtyards are blazing. On a bright day the dynamic range is beyond what any sensor handles gracefully, and you get either black roots or a white sky.\n\n**Overcast is the best light here by a wide margin**, and rainy-season afternoons are ideal. Wet stone also saturates - the moss goes green and the sandstone goes warm. Photographers who know the site come in the rains for exactly this.\n\n**Shoot the roots small, not big.** The instinct is to frame the whole famous fig, which flattens it. Get close to where root meets stone, where you can see the wood actually deforming the masonry.\n\n**Put a person in it for scale.** Ta Prohm's proportions do not read without one.\n\n**The Tomb Raider tree has a queue from 09:00 to 11:00** and is not the best tree there. Walk twenty metres.\n\n**Preah Khan** on the grand circuit gives you the same trees-through-galleries with a tenth of the people and long corridors that frame beautifully - see [Ta Prohm vs Preah Khan](/cambodia/siem-reap/ta-prohm-tomb-raider-temple).",
                        tourCard: CARD.grandCircuit,
                    },
                    {
                        title: 'Kit, rules and manners',
                        icon: 'AlertTriangle',
                        content: "**Tripods.** Small ones are generally tolerated outside; large ones and anything that looks like a commercial set-up will be challenged, and there are areas where they are not allowed. A monopod or a beanbag is the practical answer for the dark galleries.\n\n**Drones are prohibited over the Angkor park** without written authorisation from the APSARA Authority. This is enforced and equipment has been confiscated. Do not take the risk for a clip.\n\n**Commercial and pre-wedding shoots need a permit** from APSARA, and the distinction between a tourist with a big camera and a paid shoot is made by the guards on the day. If you are being paid, get the permit.\n\n**Lenses.** A wide - 16-35 equivalent - does most of the work; the temples are close-quarters. Something longer, 70-200, is what gets you the face details on the Bayon and compresses the tower groups at Angkor Wat.\n\n**Dust and humidity** are real. The dry season is dusty enough to matter for lens changes and the wet season fogs glass when you come out of air conditioning - let the camera acclimatise before you shoot.\n\n**Monks.** Ask before photographing, every time, and accept no. Women should not hand anything directly to a monk.\n\n**Dress code applies to you too** - shoulders and knees covered at Angkor Wat's upper level, where some of the best light is.",
                    },
                ],
                faqs: [
                    { q: 'Where is the best spot for Angkor Wat sunrise photos?', a: 'The southern reflecting pool. It gives the same five towers and the same reflection as the northern pool with a fraction of the people - the northern one is crowded mostly because it always has been.' },
                    { q: 'What time should I arrive for sunrise at Angkor Wat?', a: 'Leave town at 04:30. The temple admits from 05:00 and the best colour is in the twenty minutes before the sun appears, around 05:40 to 06:20 depending on the month. Arriving for sunrise at six means arriving after it.' },
                    { q: 'When is Angkor Wat empty for photos?', a: 'From about 06:30, when the sunrise crowd leaves for breakfast together. You get roughly thirty minutes of near-empty galleries and courtyards, and there is no other window like it in the day.' },
                    { q: 'What is the best light for Ta Prohm?', a: 'Overcast, and rainy-season afternoons are ideal. On a bright day the shaded galleries and blazing courtyards exceed what any sensor handles, and you get either black roots or a white sky. Wet stone also saturates the moss and sandstone.' },
                    { q: 'Are drones allowed at Angkor?', a: 'No. Drones over the Angkor park are prohibited without written authorisation from the APSARA Authority, and it is enforced - equipment has been confiscated. Commercial and pre-wedding shoots also need a permit.' },
                    { q: 'Can I bring a tripod to Angkor Wat?', a: 'Small tripods are generally tolerated outside, but large ones and anything resembling a commercial set-up will be challenged and some areas prohibit them. A monopod or beanbag is the practical answer for the dark bas-relief galleries.' },
                ],
            };
        case 'siem-reap-nightlife-and-pub-street':
            return {
                title: 'Siem Reap After Dark: Pub Street, and the Streets Either Side of It',
                seoTitle: 'Siem Reap Nightlife: Pub Street & Better Options',
                description: 'Pub Street, the night markets, Phare circus and the quieter bars one street back - what each is actually like and what to do the night before a sunrise.',
                heroImage: IMG.circus,
                fastFacts: [
                    { icon: 'Clock', label: 'Pub Street runs', value: 'Until about 2am' },
                    { icon: 'Wallet', label: 'Draught beer', value: 'From about USD 0.50' },
                    { icon: 'Star', label: 'Best single night out', value: 'Phare, the Cambodian circus' },
                    { icon: 'AlertTriangle', label: 'Sunrise is at 05:00', value: 'Plan one big night, not three' },
                ],
                sections: [
                    {
                        title: 'What Pub Street actually is',
                        icon: 'Star',
                        content: "Pub Street is two pedestrianised blocks in the old market quarter, closed to traffic in the evening, lined with bars whose speakers point at each other. Fifty-cent draught beer, neon, fire dancers, and a crowd that is overwhelmingly visitors.\n\nIt is not a scam and it is not dangerous. It is loud, cheap and exactly what it says, and for one night on a short trip it is good fun. Cambodians work there rather than drink there.\n\nThe useful thing to know is that **the interesting part is one street back**. The lanes around it - **The Lane**, **Alley West**, and the streets running off the old market - carry the small bars, the cocktail places and the kitchens that people who live here actually use. Same five-minute walk, completely different evening.\n\n**The Angkor Night Market** and the several markets around it run from late afternoon until about eleven: silk, silver, krama scarves, carvings and a lot of identical printed t-shirts. Bargaining is expected and good-humoured. The food stalls at the back of the markets are better than the ones on Pub Street.\n\n**Fish massage tanks** are everywhere along here. They are a novelty, the hygiene is variable, and any open cut is a reason to skip it.",
                        tourCard: CARD.circus,
                    },
                    {
                        title: 'The one thing to book',
                        icon: 'Calendar',
                        content: "**Phare, the Cambodian Circus.** If you do one organised evening in Siem Reap, do this.\n\nIt is not a circus in the animals-and-trapeze sense. It came out of **Phare Ponleu Selpak**, a school founded in Battambang in 1994 by young Cambodians returning from a refugee camp, which teaches drawing, music, theatre and circus to children from difficult backgrounds. The Siem Reap show is the professional company that school produces, and ticket money funds the school.\n\nThe performances are modern acrobatic theatre with live music, about ninety minutes, under a big top, and each one tells a Cambodian story - village life, the Khmer Rouge years, modern Phnom Penh, ghosts. It is genuinely good theatre and it is the thing people are still talking about on the plane.\n\n**Book ahead** in the November-to-February peak.\n\n**Apsara dance** is the other option and a real one. The classical form was rebuilt after the Khmer Rouge years from the handful of teachers who survived, and the hand positions are the same vocabulary carved on the temple walls. Take a **ticketed performance** at a proper theatre rather than a buffet-and-show package - the food at those is reheated and the dance is background.\n\n**Beatocello.** Dr Beat Richner, the Swiss paediatrician who founded the Kantha Bopha children's hospitals, played cello concerts here for years to raise funds. He died in 2018; the hospitals continue and so does the tradition of fundraising concerts. Worth checking whether one is on.",
                    },
                    {
                        title: 'Eating and drinking better',
                        icon: 'MapPin',
                        content: "**Kandal Village**, the small grid of streets west of the river, is where the independent kitchens and the good coffee ended up. Better cooking than Pub Street at similar prices and no speakers.\n\n**The riverside**, north of the old market, is quieter again - a handful of restaurants along the water with actual tables outside.\n\n**Street food** is a morning and evening thing here. The [food guide](/cambodia/siem-reap/siem-reap-food-guide) covers what to order; the short version for an evening is **lok lak**, beef seared hard with a lime and Kampot pepper dipping sauce, and **fish amok** steamed in a banana leaf until it sets.\n\n**Psar Chas, the old market**, has food stalls at the back that are cheaper and better than anything on the strip thirty metres away.\n\n**Cocktail bars** in Kandal Village and on the lanes off Pub Street are genuinely good and cost a fraction of Bangkok. Several use Kampot pepper, palm sugar and local herbs properly rather than as decoration.\n\n**Angkor and Cambodia** are the two local lagers. Fifty-cent draught is real and it is exactly the beer you would expect for fifty cents.",
                        tourCard: CARD.food,
                    },
                    {
                        title: 'The 04:30 problem, and being a decent guest',
                        icon: 'AlertTriangle',
                        content: "The single biggest mistake in Siem Reap is treating every night as a night out when the temples start at five in the morning.\n\n**Pick one night.** Do it on the evening before a rest day or your last night, not before sunrise. A 04:30 alarm after Pub Street is how people end up sleeping through the best two hours of their trip. [Where you stay](/cambodia/siem-reap/where-to-stay-in-siem-reap) matters here too - Pub Street noise carries across the river on a still night.\n\n**Getting home.** Tuk-tuks wait at the end of Pub Street all night, PassApp and Grab both work, and a ride across town is a couple of dollars. There is no reason to walk far.\n\n**Some things to simply not do.** Siem Reap has a visible sex industry and a well-documented child protection problem; Cambodia runs the **ChildSafe** network and posters are everywhere for a reason. Report concerns to the ChildSafe hotline rather than intervening. Do not visit an orphanage, and decline any evening tour that offers one.\n\n**Begging children** work the strip at night. Giving money keeps them out of school by making them earning assets - Cambodian NGOs are consistent about this. Give to an organisation instead.\n\n**Drugs** are openly offered around Pub Street and the penalties in Cambodia are severe. It is also a common set-up.\n\n**Drinks** - stick to bottled water and to ice from proper machines, which is what bars use.",
                    },
                ],
                faqs: [
                    { q: 'Is Pub Street in Siem Reap worth it?', a: 'For one night, yes - two pedestrianised blocks of cheap draught and neon, loud and harmless. The more interesting places are one street back, in The Lane, Alley West and the streets off the old market.' },
                    { q: 'What is the best night out in Siem Reap?', a: 'Phare, the Cambodian Circus - modern acrobatic theatre with live music, about ninety minutes, staged by the professional company of a Battambang arts school that takes children from difficult backgrounds. Book ahead in peak season.' },
                    { q: 'Is an Apsara dinner show worth it?', a: 'Take a ticketed performance at a proper theatre, not a buffet-and-show package where the food is reheated and the dance is background. The classical form was rebuilt after the Khmer Rouge years from the few surviving teachers, and it is worth seeing properly.' },
                    { q: 'How late is Siem Reap nightlife?', a: 'Pub Street runs until about 2am and the night markets until around eleven. The practical limit is your own alarm - sunrise at Angkor means leaving town at 04:30, so plan one big night rather than three.' },
                    { q: 'Is Siem Reap safe at night?', a: 'Broadly yes, and tuk-tuks or Grab make getting home a couple of dollars. Be aware Cambodia has a well-documented child protection problem - the ChildSafe network exists for a reason - and that drugs offered around Pub Street carry severe penalties and are a common set-up.' },
                    { q: 'Where do locals eat and drink in Siem Reap?', a: 'Kandal Village west of the river for independent kitchens and coffee, the stalls at the back of Psar Chas for food that beats anything on the strip thirty metres away, and the riverside north of the old market for something quieter.' },
                ],
            };

        case 'siem-reap-to-battambang':
            return {
                title: 'Siem Reap to Battambang: Take the Boat If the Water Is High',
                seoTitle: 'Siem Reap to Battambang: Boat, Bus & Times',
                description: 'The Sangker river boat is the best transfer in Cambodia and only runs when the water is high. Road times, boat season, and what waits at the other end.',
                heroImage: IMG.battambang,
                fastFacts: [
                    { icon: 'MapPin', label: 'By road', value: '~170 km, 3-3.5 hours' },
                    { icon: 'Star', label: 'By boat', value: '6-9 hours, Aug - Jan only' },
                    { icon: 'Clock', label: 'Be there for', value: 'Dusk at Phnom Sampeau' },
                    { icon: 'MapPin', label: 'On to Phnom Penh', value: '~290 km, ~5 hours' },
                ],
                sections: [
                    {
                        title: 'The boat, when it runs',
                        icon: 'Star',
                        content: "This is the best transfer in Cambodia and most visitors never hear about it.\n\nThe boat leaves Siem Reap early, crosses the top of the **Tonle Sap**, and then turns up the **Sangker river** to Battambang. It takes **six to nine hours** depending on the water, and it is not a ferry - it is a narrow wooden boat that spends most of the day in channels barely wider than itself, passing floating villages, fish traps, flooded forest, children swimming, and houses that move with the season.\n\n**It only runs when the water is high**, roughly **August to January**, and in a poor year that window is shorter. In the dry months the boat either does not run or grounds. **Check locally before you build a plan around it**, and book a seat ahead - capacity is small.\n\nIt is not comfortable. Wooden benches, engine noise, no shade in places, and a long day. Nobody describes it as relaxing and almost everybody describes it as the best thing they did.\n\nThe [Tonle Sap reverses direction twice a year](/cambodia/siem-reap/tonle-sap-floating-villages-guide), and this journey is the clearest way to understand what that means - you are crossing water that will not be there in April.",
                        tourCard: CARD.battambang,
                    },
                    {
                        title: 'By road, which is what usually happens',
                        icon: 'Clock',
                        content: "**About 170 kilometres and three to three and a half hours** on a surfaced road, through rice country and roadside markets.\n\n**Bus** - several operators, roughly USD 6-15, three and a half to four hours with a stop. Book a day ahead in the November-to-February peak.\n\n**Minivan** - faster, tighter, three hours if the driver hurries.\n\n**Private car with driver** - from about USD 60-80, and worth it for two or more because it lets you stop. There is not a great deal on this road, but the villages and the palm-sugar stalls are worth ten minutes.\n\n**Leave in the morning.** You want to arrive with the afternoon intact, because the whole point of Battambang is what happens at dusk.\n\n**Onward to Phnom Penh** is about 290 kilometres and five hours on National Road 5. Siem Reap → Battambang → Phnom Penh is roughly eight and a half hours of road against six going direct, so the detour costs two and a half hours and buys a city. Our [six-day](/cambodia/itineraries/6-days) and [seven-day](/cambodia/itineraries/7-days) itineraries are built on exactly that.",
                    },
                    {
                        title: 'What is waiting there',
                        icon: 'MapPin',
                        content: "**Phnom Sampeau at dusk.** Millions of wrinkle-lipped bats leave a cliff cave in an unbroken ribbon for about half an hour. No build-up, no warm-up: nothing, then a stream that does not stop. People watch with a drink from the stalls below. It costs nothing and it is one of the best things in the country. **Be in place twenty minutes before sunset.**\n\nThe same hill has a **killing cave**, where victims were thrown through a shaft in the rock, with a memorial and a reclining Buddha at the bottom. Quiet, unvisited and in some ways harder than Choeung Ek.\n\n**The bamboo train (norry)** - a bamboo platform on wheels with a small motor on a single track, the lighter cart lifted off by hand when two meet. The original line at O Dambong was replaced by a purpose-built tourist track at Banan, which is worth knowing before you buy the ticket. The mechanism is real; the route is for visitors.\n\n**The town.** French shophouses along the river, a working market, and the calmest streets on the circuit. **Phare Ponleu Selpak**, the arts school the Cambodian circus came out of, is here and can be visited.\n\n**Banan** and **Ek Phnom** are eleventh-century temples with almost nobody at them - a useful corrective if you are templed out from Angkor.",
                        tourCard: CARD.battambang,
                    },
                    {
                        title: 'How long, and why to bother',
                        icon: 'Calendar',
                        content: "**One night** covers the bamboo train and the bats, which is the standard stop and works.\n\n**Two nights** adds Banan, the countryside, the arts school and a day of doing very little, which Battambang is unusually good for.\n\n**Why bother at all**, when Siem Reap to Phnom Penh is a direct six hours?\n\nBecause Battambang is the only place on the standard Cambodian route that is **not organised around visitors**. Siem Reap exists for Angkor and Phnom Penh is a capital; Battambang is a provincial town that happens to be pleasant, and the difference is immediately obvious. Prices are local prices, the market is a market, and nobody is selling you anything on the street.\n\nIt also sits correctly for the history. Meeting the killing cave at Phnom Sampeau **before** Tuol Sleng gives the Khmer Rouge story a shape that Phnom Penh alone does not - it makes clear that this happened everywhere, not in one building in the capital.\n\nIf you are going the other way, the [Phnom Penh to Battambang](/cambodia/phnom-penh/phnom-penh-to-battambang) route covers the southern leg.",
                    },
                ],
                faqs: [
                    { q: 'How do you get from Siem Reap to Battambang?', a: 'About 170 km and three to three and a half hours by road - bus USD 6-15, minivan a little faster, private car from USD 60-80. Or the Sangker river boat, six to nine hours, when the water is high.' },
                    { q: 'When does the Siem Reap to Battambang boat run?', a: 'Roughly August to January, when the water is high, and a poor year shortens that window. In the dry months it either does not run or grounds. Check locally and book ahead - capacity is small.' },
                    { q: 'Is the Battambang boat worth it?', a: 'It is not comfortable - wooden benches, engine noise, a long day - and almost everybody who takes it calls it the best thing they did. It crosses the top of the Tonle Sap and then works up channels barely wider than the boat, through floating villages and flooded forest.' },
                    { q: 'What is there to do in Battambang?', a: 'The bat exodus at Phnom Sampeau at dusk, the bamboo train, the killing cave on the same hill, French shophouses along the river, the Phare Ponleu Selpak arts school, and the eleventh-century temples at Banan and Ek Phnom with nobody at them.' },
                    { q: 'How many nights in Battambang?', a: 'One covers the bamboo train and the bats. Two adds Banan, the countryside and the arts school, and Battambang is unusually good for a day of doing nothing - it is the only stop on the route not organised around visitors.' },
                    { q: 'Is Battambang worth the detour?', a: 'Siem Reap to Battambang to Phnom Penh is about eight and a half hours of road against six going direct. Two and a half extra hours buys a whole city, and meeting the killing cave there before Tuol Sleng makes clear the Khmer Rouge happened everywhere, not in one building.' },
                ],
            };
        case 'angkor-wat-dress-code':
            return {
                title: 'What to Wear at Angkor: The Rule, Where It Is Enforced, and the Heat',
                seoTitle: 'Angkor Wat Dress Code: Rules & What to Wear',
                description: 'Shoulders and knees covered, enforced at Angkor Wat’s upper level and the Royal Palace. What that means in practice, and dressing for mid-thirties heat.',
                heroImage: IMG.smallCircuit,
                fastFacts: [
                    { icon: 'AlertTriangle', label: 'The rule', value: 'Shoulders AND knees covered' },
                    { icon: 'MapPin', label: 'Strictly enforced', value: 'Angkor Wat upper level' },
                    { icon: 'Star', label: 'Applies to', value: 'Men and women equally' },
                    { icon: 'Info', label: 'If you get it wrong', value: 'Cover-ups for sale, with a queue' },
                ],
                sections: [
                    {
                        title: 'The rule, and where it actually bites',
                        icon: 'AlertTriangle',
                        content: "**Shoulders and knees covered.** That is the whole rule and it applies to men as much as women, which surprises people.\n\nIn practice: no vest tops, no spaghetti straps, no crop tops, nothing see-through, and shorts or skirts that reach the knee when you are standing. A t-shirt with sleeves is fine; a sleeveless one is not.\n\n**Where it is enforced, properly, by someone at a barrier:**\n\n**The upper level of Angkor Wat** - the central sanctuary reached by the steep modern staircase. There is a guard at the bottom and people are turned back every day. This is the strictest point in the park and it is the one part of Angkor Wat most people most want to see.\n\n**The Royal Palace in Phnom Penh**, at the gate. Same rule, same enforcement, and there is a queue for rental cover-ups in the middle of the day.\n\n**Where it is expected but not policed:** everywhere else at Angkor, every working pagoda, and the summit pagoda at Phnom Kulen. Nobody will stop you, which is exactly why it is worth getting right on your own - these are active religious sites and Cambodians notice.\n\n**Shoes** come off inside any vihear and at the Silver Pagoda. Wear something you can slip out of.",
                        tourCard: CARD.smallCircuit,
                    },
                    {
                        title: 'What to actually wear in mid-thirties heat',
                        icon: 'Star',
                        content: "The instinct is that covering up in that temperature is unbearable. It is the opposite.\n\n**Light long trousers beat shorts** at Angkor and it is not close. There is **no shade in the Angkor Wat courtyards or on the Bayon's upper terrace**, and from March to May the sun is the problem, not the air. Loose cotton or linen trousers keep the sun off your legs and move air. Convertible hiking trousers work and look like what they are.\n\n**A loose long-sleeved shirt** over a t-shirt is what experienced people wear. Sun protection you do not have to reapply.\n\n**A hat that stays on.** There is wind on the upper terraces.\n\n**Trainers, not sandals.** Uneven sandstone, steep worn stairs, loose rubble at Ta Prohm and Beng Mealea. Flip-flops are how ankles get turned.\n\n**Colours.** Light ones, and accept they will be filthy - the dry season is genuinely dusty.\n\n**A krama**, the checked Cambodian cotton scarf, costs almost nothing in any market and solves several problems at once: shoulders covered at a barrier, sweat, sun on the back of the neck, and a head cover in a pagoda. Buy one on the first day.\n\n**A spare shirt in the bag** for the afternoon. You will want it.",
                    },
                    {
                        title: 'If you turn up wrong',
                        icon: 'Info',
                        content: "**Cover-ups are sold and rented at the Angkor Wat upper-level entrance** and at the Royal Palace gate. Elephant-print trousers and wrap skirts, a few dollars.\n\nThe cost is not the money, it is the **queue**. At the upper level in the middle of the morning that queue will take the twenty minutes you got up at 04:30 to save. At the Royal Palace it is worse because the palace also closes over the middle of the day.\n\n**A guide will warn you** if you are with one, which is one of the small practical reasons to take a licensed guide on your [Angkor Wat day](/cambodia/siem-reap/angkor-wat-one-day-itinerary).\n\n**Sunrise is a trap for this.** It is cool and dark at 04:30 and a vest feels right. By the time you are at the upper-level stairs at seven it is a problem. Dress for the strictest thing you will do that day, not for how it feels when you leave.\n\n**Children** are held to the same rule at the palace and the upper level.\n\n**Monks.** Ask before photographing, every time. Women should not hand anything directly to a monk or sit beside one - put the item down for him to pick up.",
                        tourCard: CARD.transfer,
                    },
                    {
                        title: 'The rest of the kit',
                        icon: 'MapPin',
                        content: "**Water**, more than feels sensible. Sellers at every temple, cheap, and no reason to ration.\n\n**Sunscreen** for face, neck and hands - the parts the clothes do not cover.\n\n**A torch** for the pre-dawn causeway at Angkor Wat, which is unlit before about 05:30, and for the dark inner galleries.\n\n**Insect repellent.** Dengue is present in Cambodia; dusk at the [Tonle Sap](/cambodia/siem-reap/tonle-sap-floating-villages-guide) and in the countryside is when it matters.\n\n**Cash in small US dollars.** Sellers at the temples do not take cards. Clean, untorn notes - damaged bills are refused.\n\n**Your Angkor Pass somewhere reachable.** It is checked at every temple and they photograph your face onto it, so it is not transferable.\n\n**A dry bag or a plastic bag for the camera** in the rains. The afternoon storm arrives fast.\n\n**What not to bring**: a drone, which is prohibited over the park without APSARA authorisation and has been confiscated, and a large tripod, which will be challenged. See the [photography guide](/cambodia/siem-reap/angkor-photography-guide).",
                    },
                ],
                faqs: [
                    { q: 'What is the dress code at Angkor Wat?', a: 'Shoulders and knees covered, for men as well as women. No vests, spaghetti straps, crop tops or anything see-through, and shorts or skirts to the knee. It is enforced by a guard at the upper-level staircase and people are turned back daily.' },
                    { q: 'Is the Angkor dress code enforced everywhere?', a: 'Strictly only at Angkor Wat’s upper level and at the Royal Palace gate in Phnom Penh. Everywhere else at Angkor and at working pagodas it is expected but not policed - which is why it is worth getting right on your own.' },
                    { q: 'Should I wear shorts or trousers at Angkor?', a: 'Light long trousers, and it is not close. There is no shade in the Angkor Wat courtyards or on the Bayon terrace, and from March to May the sun is the problem rather than the air. Loose cotton or linen keeps the sun off and moves air.' },
                    { q: 'What happens if I am not covered up at Angkor Wat?', a: 'You are turned back at the upper-level stairs. Cover-ups are sold and rented there for a few dollars, but the queue in the middle of the morning will cost you the twenty minutes you got up at 04:30 to save.' },
                    { q: 'What shoes should I wear at Angkor?', a: 'Trainers. The sandstone is uneven, the stairs are steep and worn, and Ta Prohm and Beng Mealea have loose rubble. Flip-flops are how ankles get turned, and you will also be taking shoes off inside viheras.' },
                    { q: 'What is a krama and should I buy one?', a: 'The checked Cambodian cotton scarf, sold in every market for almost nothing. It covers your shoulders at a barrier, handles sweat and sun on the neck, and works as a head cover in a pagoda. Buy one on the first day.' },
                ],
            };

        case 'siem-reap-money-and-costs':
            return {
                title: 'Money in Siem Reap: Dollars, Riel, and What a Day Really Costs',
                seoTitle: 'Siem Reap Costs: Money, ATMs & Daily Budget',
                description: 'Cambodia runs on US dollars with riel as small change. ATM fees, why torn notes are refused, tipping, and honest daily budgets for Siem Reap.',
                heroImage: IMG.food,
                fastFacts: [
                    { icon: 'Wallet', label: 'Working currency', value: 'US dollars' },
                    { icon: 'Info', label: 'Riel', value: 'Change under $1, ~4,000/USD' },
                    { icon: 'AlertTriangle', label: 'Torn notes', value: 'Routinely refused' },
                    { icon: 'Wallet', label: 'Comfortable day', value: 'USD 60 - 110 per person' },
                ],
                sections: [
                    {
                        title: 'Two currencies, one of them yours',
                        icon: 'Wallet',
                        content: "**Cambodia runs on US dollars.** Prices are quoted in dollars, ATMs dispense dollars, hotels and tours bill in dollars, and you can complete an entire trip without handling riel deliberately.\n\n**Riel is the change.** The exchange rate sits around **4,000 riel to the dollar** and it is deliberately stable, so a 1,000-riel note is a quarter and a 2,000 is fifty cents. Buy something for $1.50 with a $2 note and you get 2,000 riel back. That is the whole system and it works smoothly once you stop being surprised by it.\n\nThere are **no US coins in circulation**. Anything under a dollar comes back in riel, which is the single thing to internalise.\n\n**⚠️ Torn, marked or heavily worn dollar notes are routinely refused** - by shops, by hotels, sometimes by banks. This catches almost every visitor once. Bring clean notes, check what an ATM or a money changer hands you before you walk away, and do not accept a damaged note as change.\n\n**Small denominations matter.** Tuk-tuks, temple drink sellers, market stalls and tips all want ones and fives. Break a fifty at a hotel or a supermarket early and keep a stock of singles.",
                        tourCard: CARD.food,
                    },
                    {
                        title: 'ATMs, cards and changing money',
                        icon: 'Info',
                        content: "**ATMs are everywhere** in Siem Reap and dispense US dollars. Most charge a **fee of around USD 4-6 per withdrawal** on top of whatever your own bank takes, so take out larger amounts less often. Some machines let you choose the denomination; ask for smaller notes where you can.\n\n**Check the withdrawal limit** before you queue - it varies by bank and some cap low enough to make the fee hurt.\n\n**Cards** are accepted at hotels, the better restaurants and larger tour operators. Many add a **2-3% surcharge** and say so. Small guesthouses, tuk-tuks, markets and temple sellers are cash only.\n\n**You do not need to change money before you arrive.** Dollars are the local currency; bringing dollars from home is the simplest route if your bank gives a decent rate.\n\n**Money changers** in town give reasonable rates for major currencies and are worth using over an airport counter.\n\n**The Angkor Pass** is bought at the Angkor Enterprise office and takes card or cash. That is USD 62 for the three-day, and the [pass guide](/cambodia/siem-reap/angkor-wat-tickets-and-pass-guide) explains why that is the ticket to buy.",
                    },
                    {
                        title: 'What things cost',
                        icon: 'Star',
                        content: "**Sleeping.** Hostel dorm USD 6-12. Guesthouse double USD 15-30, often with a pool at USD 25. Good mid-range hotel with pool and breakfast USD 40-80. Boutique USD 90-200. See [where to stay](/cambodia/siem-reap/where-to-stay-in-siem-reap).\n\n**Eating.** Street plate or noodle bowl USD 1.50-3. A proper Khmer meal in a local restaurant USD 5-8 a head. Kandal Village independents USD 8-15. The ambitious modern-Khmer kitchens USD 25-50.\n\n**Beer** from USD 0.50 for Pub Street draught, USD 1.50-3 elsewhere. A decent cocktail USD 4-7.\n\n**Getting around.** Tuk-tuk across town a couple of dollars. **A full temple day by tuk-tuk USD 18-25** - hired by the day, because your driver waits at each temple. Private car with driver USD 35-55, more for the far temples. Airport transfer from about USD 30 for the 45-kilometre run.\n\n**Guides.** A licensed guide USD 35-45 a day on top of transport.\n\n**Tickets.** Angkor Pass USD 37 / 62 / 72. Phnom Kulen a separate USD 20. Koh Ker and Preah Vihear their own. Phare circus from about USD 18-38 depending on seat.\n\n**A comfortable day**, mid-range room included, lands at **USD 60-110 per person**. A backpacker day is USD 25-40. Peak season, 20 December to 5 January, moves the room part sharply.",
                        tourCard: CARD.smallCircuit,
                    },
                    {
                        title: 'Tipping, bargaining and where money should go',
                        icon: 'MapPin',
                        content: "**Tipping is not obligatory and is normal in tourist-facing work.** Ten percent in a restaurant that has looked after you. For a **tuk-tuk driver who has sat in the heat for eight hours** waiting at temple car parks, a few dollars at the end of the day is standard and appreciated - that wait is most of his working day. Same for a guide.\n\n**Bargaining** is expected in markets and good-humoured, not adversarial. Ask the price, offer somewhat less, settle. What is not good: grinding a weaver down over a piece that took a fortnight, or treating a two-dollar gap as a contest. The gap is trivial to you.\n\n**Fixed-price** applies to the Angkor Pass, restaurants, and most hotels. Tuk-tuk fares are agreed before you get in, not after.\n\n**Where the money actually lands.** Cambodia has a large number of Cambodian-run social enterprises - **training restaurants** teaching hospitality to young people from hard backgrounds, the **Phare** circus funding its Battambang arts school, weavers selling at the loom on Koh Dach. Several of the training restaurants cook as well as anywhere in town, which makes it an easy choice rather than a worthy one.\n\n**Where it should not go**: begging children, which keeps them out of school by making them earning assets, and orphanage visits, which reputable operators stopped offering years ago. Give to an organisation instead.",
                    },
                ],
                faqs: [
                    { q: 'What currency should I bring to Cambodia?', a: 'US dollars. They are the working currency - prices are quoted in them, ATMs dispense them and you never need to change money. Riel appears only as change under a dollar, at about 4,000 to the dollar, because there are no US coins in circulation.' },
                    { q: 'Why was my dollar note refused in Cambodia?', a: 'Torn, marked or heavily worn notes are routinely refused by shops, hotels and sometimes banks. Bring clean notes, check what an ATM or changer hands you before walking away, and do not accept a damaged note as change.' },
                    { q: 'How much are ATM fees in Siem Reap?', a: 'Around USD 4-6 per withdrawal on top of your own bank’s charge, so take out larger amounts less often. Check the per-withdrawal limit too, since a low cap makes the fee hurt more.' },
                    { q: 'How much does a day in Siem Reap cost?', a: 'A comfortable day with a mid-range room is USD 60-110 per person; a backpacker day is USD 25-40. The fixed costs are the Angkor Pass at USD 62 for three days and USD 18-25 a day for a tuk-tuk, with a licensed guide USD 35-45 on top.' },
                    { q: 'Should you tip in Cambodia?', a: 'Not obligatory, normal in tourist-facing work. Ten percent in a restaurant, and a few dollars at the end of a full day for a tuk-tuk driver who has spent eight hours waiting in the heat at temple car parks - that wait is most of his working day.' },
                    { q: 'Is bargaining expected in Siem Reap markets?', a: 'Yes, and it is good-humoured rather than adversarial. Ask, offer somewhat less, settle. Do not grind down a weaver over a piece that took a fortnight - the two-dollar gap is trivial to you and is not to them.' },
                ],
            };
        case 'preah-vihear-temple-guide':
            return {
                title: 'Preah Vihear: A Temple on a Cliff, and a Border That Was Fought Over',
                seoTitle: 'Preah Vihear Guide: The Cliff Temple & 4x4',
                description: 'Preah Vihear sits on a 525-metre cliff on the Thai border - 12 hours from Siem Reap, its own admission, a 4x4 for the last climb, and almost no visitors.',
                heroImage: IMG.kohKer,
                fastFacts: [
                    { icon: 'MapPin', label: 'From Siem Reap', value: '~210 km, 3-3.5 hrs each way' },
                    { icon: 'Star', label: 'Cliff drop', value: 'About 525 m' },
                    { icon: 'Wallet', label: 'Entry', value: 'Its own, NOT the Angkor Pass' },
                    { icon: 'AlertTriangle', label: 'Last climb', value: 'Local 4x4 or moto only' },
                ],
                sections: [
                    {
                        title: 'The most dramatically sited temple in Cambodia',
                        icon: 'Star',
                        content: "Preah Vihear is not like the other Khmer temples and the difference is the ground it stands on.\n\nMost of Angkor is laid out as a square mandala on a flat plain. Preah Vihear is built along a **north-south axis nearly 800 metres long**, climbing a spur of the Dangrek mountains through five successive gopuras - gateways - each on its own terrace, until the final sanctuary sits at the edge of a **cliff that drops about 525 metres** to the Cambodian plain below. You walk uphill through the whole temple and then the ground simply ends.\n\nConstruction spans roughly the **9th to the 12th centuries**, mostly under Suryavarman I and Suryavarman II - the same king who built Angkor Wat. It was dedicated to Shiva as Sikharesvara, lord of the summit, which given the site is about as literal as a dedication gets.\n\nThe carving on the gopura pediments is good, and the **Churning of the Ocean of Milk** appears here too, but the temple is not really about detail. It is about the walk up and the view off the end, and it is the one Khmer site where the setting outranks the architecture.\n\n**UNESCO listed it in 2008**, and that listing is directly tied to why it was closed for years.",
                        tourCard: CARD.kohKer,
                    },
                    {
                        title: 'Why it was closed, and what that means now',
                        icon: 'AlertTriangle',
                        content: "The temple sits **on the border**, and the border here has been genuinely contested.\n\nThe **International Court of Justice awarded the temple to Cambodia in 1962**, and confirmed the surrounding promontory in **2013**. Between those two dates, and especially after the 2008 UNESCO listing, there were **armed clashes between Cambodian and Thai forces** in 2008 and again in 2011, with casualties on both sides and damage to the temple itself. Parts of the site were closed for long periods.\n\nWhat that means practically today:\n\n**Access is from the Cambodian side only**, up the escarpment, which is why the journey is long. The Thai side is much closer to the temple but the access route is closed.\n\n**There is a military presence** on site. Soldiers are around, some of the outbuildings are theirs, and photographing installations rather than the temple is not welcome.\n\n**The area was mined.** Cleared paths are marked; **stay on them**. This is not a formality anywhere in this part of Cambodia and it particularly is not here.\n\n**Check the current situation before you plan around it.** Border conditions here have changed more than once, and a tour operator in Siem Reap will know today's position better than anything written down.",
                    },
                    {
                        title: 'Getting there, and the last four kilometres',
                        icon: 'Clock',
                        content: "**From Siem Reap it is about 210 kilometres and three to three and a half hours each way** on surfaced road, so a twelve-hour day door to door. Leave at six.\n\n**From Koh Ker** it is closer, which is why the two are often combined - and if you are making this trip, combining them is the right call. See [Beng Mealea and Koh Ker](/cambodia/siem-reap/beng-mealea-and-koh-ker).\n\n**Your car does not go up.** The last stretch to the top of the escarpment is a very steep road, and at the base station you transfer to a **local 4x4 pickup or the back of a moto**, paid separately, a few dollars. That transfer is not optional and not negotiable - it is a local arrangement and it is how everyone goes up.\n\n**Then you walk**, uphill, through the temple. It is a real climb in the open, several hundred metres of ascent in stages with almost no shade.\n\n**Entry is separate from the Angkor Pass.** So is Koh Ker's. Confirm with your operator what the price includes before you set off.\n\n**Take**: water, a hat, proper shoes, cash in small dollars for the 4x4, and your passport - you are in a border zone and it can be asked for.",
                        tourCard: CARD.farTemples,
                    },
                    {
                        title: 'Is it worth twelve hours?',
                        icon: 'Calendar',
                        content: "Honestly: for most visitors, no. For some, it is the best day of the trip.\n\n**Go if** you have four or more temple days, you have already done the small circuit, Banteay Srei and Beng Mealea, and what you want now is scale and emptiness rather than more carving. The view from the end of the sanctuary is not available anywhere else in Cambodia and you may well have it to yourself.\n\n**Do not go if** you have three days or fewer. Twelve hours is a third of a three-day trip, and you would be spending it on driving rather than on [the grand circuit](/cambodia/siem-reap/angkor-temples-small-vs-grand-circuit) or the [Tonle Sap](/cambodia/siem-reap/tonle-sap-floating-villages-guide), both of which give more per hour.\n\n**Do not go with young children.** It is a long drive, a steep transfer and an exposed climb.\n\n**The cheaper substitute** is Koh Ker on its own - two hours each way, a 36-metre stepped pyramid you can climb, and forest to the horizon from the top. It gives you the emptiness without the twelve hours.\n\n**If you do go**, the seven-day Angkor Pass at USD 72 is almost certainly your ticket by now - see the [pass guide](/cambodia/siem-reap/angkor-wat-tickets-and-pass-guide) - though remember Preah Vihear is not on it.",
                    },
                ],
                faqs: [
                    { q: 'Is Preah Vihear worth visiting?', a: 'If you have four or more temple days and want scale and emptiness rather than more carving, yes - it is the most dramatically sited temple in Cambodia, on a cliff dropping about 525 metres, and you may have it to yourself. On a three-day trip it costs a third of your time in a car.' },
                    { q: 'How do you get to Preah Vihear from Siem Reap?', a: 'About 210 km and three to three and a half hours each way on surfaced road, so a twelve-hour day. Your car stops at the base station and you transfer to a local 4x4 pickup or moto for the very steep last stretch, paid separately.' },
                    { q: 'Is Preah Vihear included in the Angkor Pass?', a: 'No. It charges its own admission, as does Koh Ker, which is often combined with it. Confirm what a tour price covers before setting off rather than at the gate.' },
                    { q: 'Is Preah Vihear safe to visit?', a: 'It is open and visited, with a military presence on site. The border here was genuinely contested - the ICJ awarded the temple to Cambodia in 1962 and confirmed the promontory in 2013, with armed clashes in 2008 and 2011. The area was mined, so stay on the marked paths, and check current conditions locally.' },
                    { q: 'Why is Preah Vihear built differently from other Khmer temples?', a: 'Instead of a square mandala on a plain, it runs nearly 800 metres north-south up a spur of the Dangrek mountains through five gopuras on successive terraces, ending at a cliff edge. It was dedicated to Shiva as Sikharesvara, lord of the summit.' },
                    { q: 'What can I do instead of Preah Vihear?', a: 'Koh Ker - two hours each way rather than three and a half, with a seven-tiered 36-metre pyramid you can climb and forest to the horizon from the top. It gives you the emptiness without the twelve-hour day.' },
                ],
            };

        case 'angkor-temples-in-the-rainy-season':
            return {
                title: 'Angkor in the Rains: The Season Everyone Avoids and Photographers Choose',
                seoTitle: 'Angkor in the Rainy Season: What It Is Really Like',
                description: 'June to October at Angkor - one heavy hour rather than all-day rain, full moats, green stone, thin crowds and 30-50% off rooms. What actually goes wrong.',
                heroImage: IMG.sunriseLake,
                fastFacts: [
                    { icon: 'Calendar', label: 'Wet season', value: 'Roughly June - October' },
                    { icon: 'Clock', label: 'Typical rain', value: 'One heavy afternoon hour' },
                    { icon: 'Wallet', label: 'Rooms', value: '30-50% below peak' },
                    { icon: 'Star', label: 'Lake at its fullest', value: 'September - November' },
                ],
                sections: [
                    {
                        title: 'What the rains are actually like',
                        icon: 'Star',
                        content: "The phrase \"rainy season\" does a lot of damage here, because it makes people picture British drizzle for a fortnight.\n\nWhat happens at Angkor from roughly **June to October** is: hot bright mornings, cloud building through the middle of the day, and **one heavy hour in the afternoon** - genuinely heavy, streets running with water - and then it stops and the evening is cool and clear. Some days it does not rain at all. September and October are the wettest and even then an all-day washout is the exception, not the pattern.\n\nSo the working day barely changes. You are at the temples from 05:00 anyway because of the heat, you are off the stone by noon anyway, and the rain arrives while you are at the pool.\n\nWhat you get in exchange is substantial:\n\n**The moats and reflecting pools are full.** In March the northern pool at Angkor Wat can be low or drained, and there is no reflection at all. In September there is.\n\n**The stone goes green.** Moss on the laterite, moss on the terraces, and the forest around Ta Prohm and Preah Khan at full saturation.\n\n**The crowds thin out** sharply, and rooms are **30-50% below peak**.",
                        tourCard: CARD.sunriseLake,
                    },
                    {
                        title: 'Why photographers come now',
                        icon: 'Info',
                        content: "The people who know this site best mostly shoot it in the wet months, for reasons worth understanding even if you only have a phone.\n\n**Skies with structure.** A dry-season sunrise is often an empty pale blue that photographs as nothing. Monsoon cloud catches colour and gives the towers something to sit against. It can also kill the sunrise completely - that is the gamble.\n\n**Overcast is the best light at [Ta Prohm](/cambodia/siem-reap/ta-prohm-tomb-raider-temple)**, by a wide margin. On a bright day the shaded galleries and blazing courtyards exceed what any sensor handles and you get black roots or a white sky. Cloud fixes that.\n\n**Wet stone saturates.** Sandstone goes warm, moss goes vivid, and the whole park stops looking grey.\n\n**Reflections** in the moats, the barays and every puddle on the causeways.\n\n**Empty frames.** The 06:30 half-hour when the sunrise crowd leaves for breakfast is emptier still in September, and the outlying temples can be genuinely deserted.\n\nMore on angles and timings in the [photography guide](/cambodia/siem-reap/angkor-photography-guide).",
                    },
                    {
                        title: 'What actually goes wrong',
                        icon: 'AlertTriangle',
                        content: "This is not a free lunch and the honest list is short but real.\n\n**Wet sandstone is slippery.** The upper-level stairs at Angkor Wat and the rubble at Beng Mealea are the two places it matters. People do fall.\n\n**Unsealed roads to the outlying temples** get difficult. Koh Ker and Preah Vihear are surfaced now, but the last stretches and the tracks around Beng Mealea can be soft. A car rather than a tuk-tuk, and a driver who will say no.\n\n**Cycling** is workable between showers and unpleasant during one. Fine as a plan, bad as a commitment - see [cycling Angkor](/cambodia/siem-reap/angkor-by-bike).\n\n**Mosquitoes** are worse. Dengue is present in Cambodia; repellent at dusk, covered ankles, and take it seriously around the lake.\n\n**Humidity fogs camera glass** when you come out of air conditioning. Let the kit acclimatise.\n\n**Some boats stop.** Paradoxically this is the season the [Tonle Sap](/cambodia/siem-reap/tonle-sap-floating-villages-guide) is at its best, but a severe storm cancels a day on the water.\n\n**Carry a poncho, not an umbrella.** The wind comes with the rain.",
                        tourCard: CARD.cycle,
                    },
                    {
                        title: 'Month by month, and who should do it',
                        icon: 'Calendar',
                        content: "**June** - the turn. Hot and humid with the first real storms. Still plenty of dry days.\n\n**July to August** - established wet season, an afternoon hour most days, everything green. European summer keeps hotels moderately busy regardless, so this is not the cheapest window despite the weather.\n\n**September** - the wettest month and the quietest. Lowest rates of the year. This is the connoisseur's month if you can take the gamble.\n\n**October** - still wet, and **the Tonle Sap is at maximum**. The stilt villages stand in water, the flooded forest is navigable by boat, and the lake is several times its dry-season size. If the lake is a reason you are coming, October is the month.\n\n**November** - the rains stop, the landscape is still green, the lake is still full, and peak pricing has not fully arrived. Widely the best month of the year at Angkor, and it is the tail of the wet season rather than the start of the dry one.\n\n**Who should come in the rains**: photographers, anyone on a budget, anyone who hates crowds, and anyone who specifically wants the floating villages. **Who should not**: a once-in-a-lifetime trip with fixed dates and no slack, where a washed-out sunrise cannot be tried again tomorrow.",
                    },
                ],
                faqs: [
                    { q: 'Is it worth visiting Angkor in the rainy season?', a: 'Yes, and it is underrated. June to October usually means one heavy afternoon hour rather than all-day rain, while the moats and reflecting pools are full, the stone goes green, the crowds thin and rooms are 30-50% below peak.' },
                    { q: 'How much does it actually rain at Angkor?', a: 'Typically hot bright mornings, cloud building, and one heavy hour in the afternoon - then it stops. Some days it does not rain at all. September and October are wettest and even then an all-day washout is the exception.' },
                    { q: 'What is the best month to photograph Angkor?', a: 'The wet months. Monsoon cloud gives the towers something to sit against, overcast is by far the best light at Ta Prohm, wet stone saturates, and the moats hold reflections that a dry March simply does not have.' },
                    { q: 'What are the downsides of Angkor in the rains?', a: 'Wet sandstone is slippery on Angkor Wat’s upper stairs and Beng Mealea’s rubble, unsealed tracks to outlying temples get soft, mosquitoes are worse with dengue present, and a severe storm can cancel a day on the lake.' },
                    { q: 'When is the Tonle Sap at its fullest?', a: 'September to November, with October the peak. The stilt villages stand in water and the flooded forest is navigable. By March the lake has drained and the same houses sit on bare six-metre legs.' },
                    { q: 'Is November wet or dry at Angkor?', a: 'It is the turn, and widely the best month of the year - the rains have stopped, the landscape is still green, the lake is still full from the monsoon, and peak pricing has not fully arrived.' },
                ],
            };
        default:
            return null;
    }
}

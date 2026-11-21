import { CityInfoData } from './cityInfoContent';

export function getJordanInfoContent(slug: string): CityInfoData | null {
    switch (slug) {
        case "best-petra-day-tour-from-amman":
            return {
                title: "Which Is the Best Petra Day Tour from Amman?",
                description: "Compare real full-day Petra tours from Amman — from a $258 private tour to the $142 group-or-private option with buffet lunch included.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/9af855c76466d7cdb6e6e9493abe310cf589ecb43f6c4fa3a2239147d9e82c94.jpg",
                sections: [
                    { title: "The Short Answer", content: "Nearly every Petra day tour from Amman covers the same ground — the Siq, the Treasury, and as much of the ancient city as a day allows — with the real differences being group vs. private, and whether lunch is included.", tourCard: { slug: "petra-full-day-group-or-private-tour-with-buffet", title: "Petra Full-Day Group or Private Tour with Buffet Lunch", description: "A full-day Petra tour with buffet lunch, bookable group or private.", price: "From $142", duration: "12 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/9af855c76466d7cdb6e6e9493abe310cf589ecb43f6c4fa3a2239147d9e82c94.jpg" } },
                    { title: "Best for Privacy: Private Full-Day Tour", content: "This runs entirely private rather than joining a group, at a higher price point for more flexibility on pace and stops.", tourCard: { slug: "petra-full-day-private-tour-from-amman", title: "Petra Full-Day Private Tour From Amman", description: "A fully private full-day Petra tour from Amman.", price: "From $258", duration: "10 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/29e9f78087a0992343461530b4778fbaef0cd6f5b720dea81b61c8fa7c830054.jpeg" } },
                    { title: "Practical Tips", content: "Amman to Petra is roughly 3 hours each way by road, so a day tour means 6+ hours of driving on top of the Petra visit itself — if you can spare an overnight in Petra or Wadi Musa, you'll have far more time at the site without the same-day round trip." }
                ],
                faqs: [
                    { q: "What is the best Petra day tour from Amman?", a: "A group-or-private tour with lunch included suits most visitors; go fully private for more flexibility." },
                    { q: "How long is the drive from Amman to Petra?", a: "About 3 hours each way, so a day tour includes 6+ hours of driving." }
                ],
            };

        case "best-petra-wadi-rum-2-day-tour":
            return {
                title: "Which Is the Best Petra & Wadi Rum 2-Day Tour?",
                description: "Compare real 2-day Petra and Wadi Rum tours — from a $182 shared tour to private overnight-camp packages.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/0a8efd7bac6be42a58bcae8f9afdabb4897549a8407ee6f6c487b3b795422d60.jpg",
                sections: [
                    { title: "The Short Answer", content: "Combining Petra with Wadi Rum over 2 days is the most popular way to see Jordan's two biggest sites without rushing either — you get a full day at Petra and a desert camp night in Wadi Rum.", tourCard: { slug: "golden-triangle-petra-wadi-rum-aqaba-2-day", title: "Golden Triangle: Petra, Wadi Rum & Aqaba 2-Day Adventure", description: "A 2-day combo covering Petra, Wadi Rum, and Aqaba.", price: "From $182", duration: "2 days", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/0a8efd7bac6be42a58bcae8f9afdabb4897549a8407ee6f6c487b3b795422d60.jpg" } },
                    { title: "Best for a Full Private Experience", content: "This version adds a Dead Sea stop to the Petra/Wadi Rum combo, run entirely privately rather than shared.", tourCard: { slug: "2-day-private-tour-to-petra-wadi-rum-dead", title: "2-Day Private Tour to Petra, Wadi Rum & Dead Sea From Amman", description: "A private 2-day tour covering Petra, Wadi Rum, and the Dead Sea.", price: "From $540", duration: "2 days", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/0a8efd7bac6be42a58bcae8f9afdabb4897549a8407ee6f6c487b3b795422d60.jpg" } },
                    { title: "Practical Tips", content: "Most 2-day packages include a Wadi Rum desert camp overnight — confirm whether it's a traditional Bedouin-style camp or a more tourist-oriented 'bubble'/luxury camp, since the experience and price differ a lot." }
                ],
                faqs: [
                    { q: "What is the best Petra & Wadi Rum 2-day tour?", a: "A shared tour covering both plus Aqaba is the best value; go private if you want more flexibility and a Dead Sea stop." },
                    { q: "Is 2 days enough for Petra and Wadi Rum?", a: "Yes for a solid overview of both, though more time lets you do Petra's longer hikes (like the Monastery trail) at a relaxed pace." }
                ],
            };

        case "best-multi-day-jordan-highlights-tour":
            return {
                title: "Which Is the Best Multi-Day Jordan Highlights Tour?",
                description: "Compare real 3-8 day Jordan tours covering Petra, Wadi Rum, and the Dead Sea — from a 3-day trip to an 8-day full-country package.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/0e771ecf0076071cb70cd3c7918951bed99bb487da4f78816dd45a05e9f715be.jpg",
                sections: [
                    { title: "The Short Answer", content: "A 3-day private tour is the sweet spot for covering Petra, Wadi Rum, and the Dead Sea without rushing — longer packages (4-8 days) add Jerash, Madaba, Mount Nebo, and more time at each stop.", tourCard: { slug: "3-days-private-tour-of-petra-wadi-rum-dead", title: "3-days private tour of Petra, Wadi Rum & Dead Sea from Amman", description: "A well-paced 3-day private tour covering Jordan's main highlights.", price: "From $668", duration: "3 days", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/86d9e0e16fae6809.jpeg" } },
                    { title: "Best for a Full Country Overview: 5-Day Highlights Tour", content: "This extends to 5 days, adding more sites and a slower pace across Jordan's main regions rather than just the headline three stops.", tourCard: { slug: "amman-5-day-jordan-highlights-tour", title: "Amman: 5-Day Jordan Highlights Tour", description: "A 5-day tour covering Jordan's main highlights beyond just Petra/Wadi Rum/Dead Sea.", price: "From $1143", duration: "5 days", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/0e771ecf0076071cb70cd3c7918951bed99bb487da4f78816dd45a05e9f715be.jpg" } },
                    { title: "Practical Tips", content: "Longer tours are almost always private rather than shared group tours — factor this into price comparisons, since a 5-day private tour isn't directly comparable to a 1-day shared tour on a per-day basis." }
                ],
                faqs: [
                    { q: "How many days do I need for a Jordan highlights tour?", a: "3 days covers Petra, Wadi Rum, and the Dead Sea comfortably; 5+ days adds Jerash, Madaba, and a more relaxed pace." },
                    { q: "Are multi-day Jordan tours private or shared?", a: "Almost always private, which is reflected in the higher per-day price compared to shorter shared tours." }
                ],
            };

        case "best-private-petra-guide-tour":
            return {
                title: "Which Is the Best Private Guided Tour of Petra Itself?",
                description: "Compare short private Petra tours (2-4 hours) with a dedicated local guide, for travellers already in Petra who just need the guided walkthrough.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/4e2eaabcccb94e8db4d52160d7f5536d8fe61e48ea2e6046346ca664a9dfc3a3.png",
                sections: [
                    { title: "The Short Answer", content: "If you're already staying in Petra/Wadi Musa and don't need transport from Amman, a short private guided walkthrough of the site itself — focused on the Siq, Treasury, and main facades — is the simplest option.", tourCard: { slug: "3-hour-private-petra-tour-with-local-guide", title: "3-Hour Private Petra Tour with Local Guide & Treasury", description: "A 3-hour private walkthrough of Petra's main sites with a local guide.", price: "From $197", duration: "3 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/4e2eaabcccb94e8db4d52160d7f5536d8fe61e48ea2e6046346ca664a9dfc3a3.png" } },
                    { title: "Best with Hotel Transfer Included: Private Guided Tour with Hotel Pickup", content: "This version adds hotel pickup to the private guided walkthrough, useful if you're staying outside immediate walking distance of the entrance.", tourCard: { slug: "private-3-hour-guided-tour-of-petra-with-hotel", title: "Private 3-Hour Guided Tour of Petra with Hotel Transfer", description: "A private guided Petra walkthrough with hotel transfer included.", price: "From $191", duration: "3 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/8f1ecefef1a7f77651561f1990793c4f164392ccf00b9be417cc0c398fc23076.jpg" } },
                    { title: "Practical Tips", content: "The entrance fee to the Petra Archaeological Park is separate from the guide fee on most of these tours — confirm whether it's included or needs to be paid separately at the gate." }
                ],
                faqs: [
                    { q: "Do I need a guide to visit Petra?", a: "Not strictly, but a local guide adds historical context to the Treasury, Siq, and other facades that's easy to miss on your own." },
                    { q: "Is the Petra entrance fee included in these tours?", a: "Varies by operator — confirm whether it's bundled or paid separately at the gate." }
                ],
            };

        case "best-petra-monastery-hike-tour":
            return {
                title: "Which Is the Best Petra Monastery Hike Tour?",
                description: "Compare real guided hikes to Petra's Monastery (Ad Deir) — the site's highest and most demanding major trail.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/2a6abd29afaeada809ff3b785927584af73beff5d232e1feb7a6139f508859c5.jpeg",
                sections: [
                    { title: "The Short Answer", content: "The hike up to the Monastery involves roughly 800 steps carved into the mountain — a guided hike with lunch included is the standard way to tackle it without rushing.", tourCard: { slug: "petra-guided-hike-to-the-monastery-with-lunch", title: "Petra: Guided Hike to the Monastery with Lunch", description: "A guided hike up to Petra's Monastery with lunch included.", price: "From $488", duration: "7 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/2a6abd29afaeada809ff3b785927584af73beff5d232e1feb7a6139f508859c5.jpeg" } },
                    { title: "Best Alternative Route: Back Door Hike", content: "Rather than the main entrance route, this approaches Petra via a back-entrance trail with a local guide — a genuinely different, less crowded way into the site.", tourCard: { slug: "petra-back-door-hike-with-a-local-guide", title: "Petra Back Door Hike with a Local Guide", description: "An alternative back-entrance hiking route into Petra.", price: "From $439", duration: "6 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/88cc605b421dc142f8636f56db41053300e4202a6f90fcbc641988689f895738.jpg" } },
                    { title: "Practical Tips", content: "The Monastery climb is genuinely strenuous in summer heat — morning starts are strongly preferable to afternoon, and bring more water than you think you'll need." }
                ],
                faqs: [
                    { q: "How hard is the hike to Petra's Monastery?", a: "Moderately strenuous — around 800 steps — but manageable for most reasonably fit travellers with a morning start." },
                    { q: "What is the back door hike into Petra?", a: "An alternative, less crowded entrance route via a hiking trail rather than the main Siq entrance." }
                ],
            };

        case "is-little-petra-worth-it":
            return {
                title: "Is Little Petra Worth Visiting?",
                description: "An honest look at Little Petra (Siq al-Barid), a smaller, quieter Nabataean site near the main Petra complex.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/1dbec8a6bd25ba640dc763194bb3a3fb0a51539c5514307f6e812d66651b00d4.jpg",
                sections: [
                    { title: "The Short Answer", content: "Little Petra is a smaller Nabataean settlement a short drive from the main site, with similar rock-carved facades but far fewer visitors — a good add-on if you have extra time, not a substitute for the main Petra visit.", tourCard: { slug: "little-petra-hidden-wonders-of-jordan", title: "Little Petra: Hidden Wonders of Jordan", description: "A guided visit to the smaller, quieter Little Petra site.", price: "From $91", duration: "5 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/1dbec8a6bd25ba640dc763194bb3a3fb0a51539c5514307f6e812d66651b00d4.jpg" } },
                    { title: "Practical Tips", content: "Worth combining with main Petra on a multi-day stay rather than a dedicated separate trip, since it's small enough to see in an hour or two." }
                ],
                faqs: [
                    { q: "Is Little Petra worth visiting?", a: "Yes as an add-on if you have extra time near Petra, not as a standalone destination." },
                    { q: "How does Little Petra compare to main Petra?", a: "Similar rock-carved Nabataean architecture, much smaller scale, and far fewer visitors." }
                ],
            };

        case "is-golf-cart-tour-worth-it-petra":
            return {
                title: "Is the Golf Cart Tour of Petra Worth It?",
                description: "An honest look at touring Petra by golf cart instead of walking — who it actually suits.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/0695d0e0ac6e89d236684bc37a7dec6d8633589cd74b4c8a9c860010d3552e7e.jpg",
                sections: [
                    { title: "The Short Answer", content: "A golf cart tour covers the main accessible stretch of Petra without the walking distance a full visit normally requires — genuinely useful for visitors with mobility limitations or very limited time, less valuable for anyone planning to hike further (like the Monastery), since carts can't go everywhere.", tourCard: { slug: "golf-cart-guided-tour-of-petra-with-hotel-transfer", title: "Golf Cart Guided Tour of Petra with Hotel Transfer", description: "A golf cart tour of Petra's accessible main stretch.", price: "From $325", duration: "2.5 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/0695d0e0ac6e89d236684bc37a7dec6d8633589cd74b4c8a9c860010d3552e7e.jpg" } },
                    { title: "Practical Tips", content: "Carts can't reach the Monastery or other elevated trails — this covers the Siq and Treasury area, not the full site." }
                ],
                faqs: [
                    { q: "Is the golf cart tour worth it in Petra?", a: "Yes for mobility-limited visitors or very tight schedules; not a full substitute for walking/hiking the whole site." },
                    { q: "Can a golf cart reach the Monastery?", a: "No, carts only cover the main accessible stretch near the entrance and Treasury." }
                ],
            };

        case "is-utv-tour-worth-it-petra":
            return {
                title: "Is the Petra UTV Mountain Trails Tour Worth It?",
                description: "An honest look at the private UTV tour of Petra's hidden mountain trails.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/040c58965132806eaff7320f960f930fb5a5a9f48699bca73d17200204b73675.jpeg",
                sections: [
                    { title: "The Short Answer", content: "This takes you off the standard walking route into Petra's surrounding mountain trails by UTV, a genuinely different adventure-focused angle on the site rather than the usual Treasury/Siq walkthrough.", tourCard: { slug: "petra-mountains-hidden-trails-3-hour-private-utv", title: "Petra Mountains Hidden Trails: 3-Hour Private UTV Tour", description: "A private UTV tour through Petra's surrounding mountain trails.", price: "From $334", duration: "3 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/040c58965132806eaff7320f960f930fb5a5a9f48699bca73d17200204b73675.jpeg" } },
                    { title: "Practical Tips", content: "This is a supplement to, not a replacement for, visiting the main archaeological site — plan it alongside a separate walking visit to see the Treasury and facades." }
                ],
                faqs: [
                    { q: "Is the Petra UTV tour worth it?", a: "Yes for an adventure-focused add-on, but it doesn't replace walking the main archaeological site." }
                ],
            };

        case "best-petra-photography-tour":
            return {
                title: "Which Is the Best Petra Photography Tour?",
                description: "Compare real photography-focused Petra tours — an early morning walk versus a dedicated expert-led photography session.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/3f40e40bdc0680850c26dc7bb0034fe372e30a2ceb21ce0812d91cb8e7eb87c4.jpg",
                sections: [
                    { title: "The Short Answer", content: "Both options are timed around Petra's best light — the Treasury catches direct sun in the morning, making an early start genuinely worth it for photography regardless of which tour you pick.", tourCard: { slug: "petra-early-morning-photography-walk-with-guide", title: "Petra: Early Morning Photography Walk with Guide", description: "An early morning guided walk timed for Petra's best photography light.", price: "From $246", duration: "3 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/3f40e40bdc0680850c26dc7bb0034fe372e30a2ceb21ce0812d91cb8e7eb87c4.jpg" } },
                    { title: "Best for Technical Guidance: Expert Photography Tour", content: "This leans more into technical photography coaching alongside the walk, better suited to travellers who want composition and settings advice, not just good timing.", tourCard: { slug: "petra-photography-tour-capture-the-magic-with-an", title: "Petra Photography Tour: Capture the Magic with an Expert", description: "An expert-led photography tour with technical coaching.", price: "From $602", duration: "5 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/20131fb0b8b7f72fc6ea1c215a2a501486135c8f5641adaec01c7404dfb5b7b5.jpg" } },
                    { title: "Practical Tips", content: "The Treasury faces east, so morning light hits it directly — afternoon tends to leave it in shadow, making morning the clear choice regardless of which tour you book." }
                ],
                faqs: [
                    { q: "What is the best time of day to photograph Petra?", a: "Morning — the Treasury faces east and catches direct light, while afternoons leave it shadowed." },
                    { q: "Do I need a photography tour to get good photos at Petra?", a: "No, but an early morning timed visit makes a real difference regardless of which tour format you choose." }
                ],
            };

        case "is-cooking-class-worth-it-petra":
            return {
                title: "Is the Petra Jordanian Cooking Class Worth It?",
                description: "An honest look at the Jordanian cooking class with meal near Petra.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/7a245cad5c72bb2ff82698281876b0ebdcc9646a922b446ff5cac88eea53cf18.jpg",
                sections: [
                    { title: "The Short Answer", content: "This pairs hands-on cooking of traditional Jordanian dishes with the meal you make, a good slower-paced cultural activity to break up a Petra-heavy itinerary.", tourCard: { slug: "petra-jordanian-cooking-class-with-meal", title: "Petra: Jordanian Cooking Class with Meal", description: "A hands-on Jordanian cooking class near Petra.", price: "From $58", duration: "1.5 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/7a245cad5c72bb2ff82698281876b0ebdcc9646a922b446ff5cac88eea53cf18.jpg" } },
                    { title: "Practical Tips", content: "Good as an evening activity after a full day at the archaeological site, rather than competing with site time during daylight hours." }
                ],
                faqs: [
                    { q: "Is the Petra cooking class worth it?", a: "Yes as a relaxed evening cultural activity, especially after a demanding day at the site." }
                ],
            };

        case "best-dana-to-petra-trek":
            return {
                title: "Which Is the Best Dana to Petra Trek?",
                description: "Compare real multi-day Dana-to-Petra trekking routes along the Jordan Trail — from a 3-day hike to a 5-day full traverse.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/666dbcb22d7164a94dd8686fc1c5e800cc323bc6cc95806d82b09eaacb310975.jpeg",
                sections: [
                    { title: "The Short Answer", content: "The Dana-to-Petra trek is one of the Jordan Trail's signature multi-day hikes, crossing wilderness and Bedouin camps before arriving at Petra on foot — a dramatically different way to experience the site compared to driving in.", tourCard: { slug: "dana-to-petra-multiple-days-hiking-with", title: "Dana to Petra: multiple days hiking with wilderness camp", description: "A multi-day wilderness trek from Dana to Petra.", price: "From $910", duration: "4 days", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/666dbcb22d7164a94dd8686fc1c5e800cc323bc6cc95806d82b09eaacb310975.jpeg" } },
                    { title: "Shortest Option: 3-Day Guided Hiking Adventure", content: "This compresses the route into 3 days for trekkers with less time, while still covering the core wilderness crossing.", tourCard: { slug: "from-dana-3-day-guided-hiking-adventure-to-petra", title: "From Dana: 3-Day Guided Hiking Adventure to Petra", description: "A compressed 3-day version of the Dana-to-Petra trek.", price: "From $1335", duration: "3 days", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/47883af93a9f253e7327017422417919f466a8f027fa0040dae10c2caab64d7f.jpeg" } },
                    { title: "Most Complete Route: 5-Day Jordan Trail Trek", content: "This is the fullest version of the trek, following the Jordan Trail's complete route at a less rushed pace.", tourCard: { slug: "dana-to-petra-trekking-adventure-via-the-jordan", title: "Dana to Petra Trekking Adventure via The Jordan Trail", description: "The complete, less rushed Dana-to-Petra Jordan Trail trek.", price: "From $1593", duration: "5 days", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/309d6786b40555f5c5a388b2f62ed021a05d2661b0802125f0ce4e7cab43d82c.jpeg" } },
                    { title: "Practical Tips", content: "This is a genuine multi-day wilderness trek requiring real fitness and camping gear supplied by the operator — not a casual day hike. Arriving at Petra on foot through the back trails is a completely different, much quieter experience than the main tourist entrance." }
                ],
                faqs: [
                    { q: "What is the best Dana to Petra trek?", a: "3 days for a compressed version; 5 days for the fullest, least rushed experience of the Jordan Trail route." },
                    { q: "Is the Dana to Petra trek difficult?", a: "Yes, it's a genuine multi-day wilderness trek requiring real fitness, not a casual walk." }
                ],
            };

        case "is-helicopter-tour-worth-it-petra":
            return {
                title: "Is the Petra Helicopter Tour Worth It?",
                description: "An honest look at the Amman-based Petra helicopter tour with optional return flight.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/6791d5470a920b7e01fcaa89cf1a498acfb0f57174de9afab580efca975c8358.png",
                sections: [
                    { title: "The Short Answer", content: "This gives an aerial view of Petra and the surrounding desert, flying from Amman — a premium, time-saving alternative to the 3-hour road drive, but you still need ground time at the site itself to see the Treasury and facades up close.", tourCard: { slug: "amman-petra-helicopter-tour-with-optional-return", title: "Amman: Petra Helicopter Tour with Optional Return Flight", description: "A helicopter tour to Petra from Amman, saving the 3-hour road drive.", price: "From $3380", duration: "5 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/6791d5470a920b7e01fcaa89cf1a498acfb0f57174de9afab580efca975c8358.png" } },
                    { title: "Practical Tips", content: "This saves driving time but doesn't replace walking the site itself — budget ground time at Petra in addition to the flight." }
                ],
                faqs: [
                    { q: "Is the Petra helicopter tour worth it?", a: "Worth it if time or the scenic flight itself is the priority; it saves the drive but you still need ground time at the site." }
                ],
            };

        case "best-petra-dead-sea-day-trip":
            return {
                title: "Which Is the Best Petra and Dead Sea Day Trip?",
                description: "Compare real day trips combining Petra with a Dead Sea float — from a $115 half-day Dead Sea option to a $138 combined Petra and Dead Sea day.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/cd2dfb235784f32d.png",
                sections: [
                    { title: "The Short Answer", content: "Combining Petra and the Dead Sea in a single day is ambitious given the driving distances involved — most genuine combo tours run as a private full day rather than a rushed group tour.", tourCard: { slug: "from-amman-private-day-tour-to-petra-dead-sea", title: "From Amman: Private Day Tour to Petra & Dead Sea", description: "A private day tour combining Petra and the Dead Sea.", price: "From $138", duration: "6 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/cd2dfb235784f32d.png" } },
                    { title: "Practical Tips", content: "Honestly, doing Petra justice and still floating in the Dead Sea in one day means limited time at each — a 2-day version with an overnight is a better fit if you can spare the extra day." }
                ],
                faqs: [
                    { q: "Can I visit Petra and the Dead Sea in one day?", a: "Yes, but it's a long day with limited time at each — a 2-day version is more comfortable if you have the time." }
                ],
            };

        case "best-petra-tour-from-aqaba":
            return {
                title: "Which Is the Best Petra Tour from Aqaba?",
                description: "Compare real Petra day trips from Aqaba, including cruise-ship shore excursions.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/9032b0e559e7ec3a.jpeg",
                sections: [
                    { title: "The Short Answer", content: "Aqaba is roughly 2 hours from Petra, making it a genuinely feasible day trip base — especially convenient for cruise passengers docking at Aqaba port.", tourCard: { slug: "from-aqaba-petra-1-day-tour", title: "From Aqaba: Petra 1-Day Tour", description: "A full-day Petra tour departing from Aqaba.", price: "From $701", duration: "8 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/f36848e6df792d91.jpeg" } },
                    { title: "Best for Cruise Passengers: Petra Shore Excursion", content: "This is specifically designed around cruise ship docking schedules at Aqaba port, timed to get you back before departure.", tourCard: { slug: "from-aqaba-port-petra-shore-excursion", title: "From Aqaba Port: Petra Shore Excursion", description: "A Petra day trip timed for Aqaba cruise ship passengers.", price: "From $701", duration: "8 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/9032b0e559e7ec3a.jpeg" } },
                    { title: "Practical Tips", content: "If you're on a cruise, confirm your ship's exact docking and departure times with the tour operator before booking — Aqaba-Petra round trips plus site time run a full 8 hours, leaving little buffer." }
                ],
                faqs: [
                    { q: "Can I visit Petra from Aqaba in one day?", a: "Yes, the drive is about 2 hours each way, making it a feasible full-day round trip." },
                    { q: "Are Petra shore excursions from Aqaba reliable for cruise schedules?", a: "Generally yes, they're built around docking times, but confirm your specific ship's schedule with the operator." }
                ],
            };

        case "best-wadi-rum-jeep-tour-from-petra":
            return {
                title: "Which Is the Best Wadi Rum Jeep Tour from the Petra Area?",
                description: "Compare real Wadi Rum jeep tours bookable from the Petra/Wadi Musa area — from a dinner-included half-day trip to a full-day overnight camp.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/76433eb77106281c9bbe908f1e343337826492a3430326c6d763f6bf395bdc33.jpeg",
                sections: [
                    { title: "The Short Answer", content: "Wadi Rum is a natural add-on from Petra, usually done as a jeep tour through the desert's rock formations, with the choice being a shorter trip with a meal or a full overnight camp experience.", tourCard: { slug: "wadi-rum-jeep-tour-and-zarb-dinner-or-lunch", title: "Wadi Rum: Jeep Tour and Zarb Dinner or Lunch with Pickup", description: "A Wadi Rum jeep tour with a traditional zarb meal included.", price: "From $104", duration: "2 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/76433eb77106281c9bbe908f1e343337826492a3430326c6d763f6bf395bdc33.jpeg" } },
                    { title: "Best for the Full Experience: Overnight Jeep Tour", content: "This extends the jeep tour into a full day with an overnight desert camp stay and three meals, the fuller Wadi Rum experience rather than a quick visit.", tourCard: { slug: "wadi-rum-full-day-jeep-tour-with-overnight-and", title: "Wadi Rum: Full-Day Jeep Tour with Overnight and 3 Meals", description: "A full-day Wadi Rum jeep tour with an overnight camp stay and 3 meals.", price: "From $85", duration: "1 day", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/79873ca1c2ee583cfce908c252aaf0dd24331ceb1c16f0a247c58bacf1c21e4c.jpg" } },
                    { title: "Practical Tips", content: "A zarb dinner — meat and vegetables slow-cooked underground in sand — is a genuine Bedouin tradition worth seeking out specifically if your tour offers it as an option." }
                ],
                faqs: [
                    { q: "What is the best Wadi Rum jeep tour from Petra?", a: "A short jeep tour with a zarb meal for a quick visit; the full-day overnight camp version for the complete experience." },
                    { q: "What is a zarb dinner?", a: "A traditional Bedouin meal of meat and vegetables slow-cooked underground in sand." }
                ],
            };

        case "petra-travel-guide-2026":
            return {
                title: "Petra Travel Guide 2026",
                description: "Jordan's most famous ancient city, carved into rose-colored sandstone cliffs — here's what first-timers need to know before visiting.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/9af855c76466d7cdb6e6e9493abe310cf589ecb43f6c4fa3a2239147d9e82c94.jpg",
                sections: [
                    { title: "Why Visit Petra", content: "Petra is a UNESCO World Heritage site and one of the New7Wonders of the World — a Nabataean city carved directly into sandstone cliffs, accessed through the dramatic Siq canyon. Most visitors come as a day trip from Amman, but staying overnight in Wadi Musa gives much more time at the site." },
                    { title: "Getting There", content: "Petra is about 3 hours by road from Amman, or 2 hours from Aqaba. Most visitors book a guided tour rather than self-driving, given the distances and the value of a guide explaining the site's history." }
                ],
                faqs: [
                    { q: "Is Petra worth visiting?", a: "Yes, it's widely considered one of the world's great archaeological sites." },
                    { q: "How far is Petra from Amman?", a: "About 3 hours by road." }
                ],
            };

        case "best-time-to-visit-petra":
            return {
                title: "Best Time to Visit Petra",
                description: "Petra's desert climate makes timing matter a lot for how comfortable your visit will be.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/9af855c76466d7cdb6e6e9493abe310cf589ecb43f6c4fa3a2239147d9e82c94.jpg",
                sections: [
                    { title: "Seasonal Overview", content: "Spring (March-May) and autumn (September-November) offer the most comfortable temperatures for walking and hiking. Summer (June-August) gets extremely hot, especially on exposed trails like the Monastery hike — plan for early morning starts if visiting then." }
                ],
                faqs: [
                    { q: "What is the best time to visit Petra?", a: "Spring or autumn for comfortable walking temperatures; if visiting in summer, start very early to avoid the heat." }
                ],
            };

        case "how-many-days-for-petra":
            return {
                title: "How Many Days Do You Need for Petra?",
                description: "An honest answer based on what each itinerary length actually lets you see.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/9af855c76466d7cdb6e6e9493abe310cf589ecb43f6c4fa3a2239147d9e82c94.jpg",
                sections: [
                    { title: "The Short Answer", content: "A single day covers the Treasury, the Siq, and the main valley floor comfortably. Two days lets you add the Monastery hike without rushing. Serious hikers or photographers benefit from a 2-night stay to catch both morning and late-afternoon light." }
                ],
                faqs: [
                    { q: "Is one day enough for Petra?", a: "Yes for the main sites, but the Monastery hike is better with a second day if you can spare it." },
                    { q: "Should I stay overnight near Petra?", a: "Yes if possible — it avoids the long same-day round trip from Amman and gives more flexible timing." }
                ],
            };

        case "petra-entrance-fee-guide":
            return {
                title: "Petra Entrance Fee Guide",
                description: "What the Petra Archaeological Park entrance actually costs, and how the Jordan Pass can change that.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/9af855c76466d7cdb6e6e9493abe310cf589ecb43f6c4fa3a2239147d9e82c94.jpg",
                sections: [
                    { title: "The Short Answer", content: "Petra's entrance fee is tiered by how many days you visit (1, 2, or 3 consecutive days), and is significantly cheaper for travellers staying overnight in Jordan versus day-trippers crossing from Israel/Eilat. The Jordan Pass bundles the visa fee waiver with Petra entrance and can be worth it if you're staying at least 3 nights in Jordan." }
                ],
                faqs: [
                    { q: "How much does Petra cost to enter?", a: "It's tiered by number of days (1/2/3-day tickets) and differs for overnight-in-Jordan visitors versus day-trippers." },
                    { q: "Is the Jordan Pass worth it for Petra?", a: "Often yes if staying 3+ nights in Jordan, since it bundles the visa fee waiver with Petra entrance." }
                ],
            };

        case "jordan-visa-guide-for-tourists":
            return {
                title: "Jordan Visa Guide for Tourists (Petra)",
                description: "Visa requirements for visiting Petra and Jordan.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/9af855c76466d7cdb6e6e9493abe310cf589ecb43f6c4fa3a2239147d9e82c94.jpg",
                sections: [
                    { title: "Visa Requirements", content: "Many nationalities can get a visa on arrival in Jordan, and the Jordan Pass (which bundles the visa fee waiver with Petra entrance) is worth checking before travel — it can be cheaper than paying for entrance separately for multi-day Petra visits. Check Jordan's official requirements for your specific nationality." }
                ],
                faqs: [
                    { q: "Do I need a visa to visit Jordan/Petra?", a: "Many nationalities get visa on arrival; check the Jordan Pass, which can bundle visa waiver with Petra entrance savings." }
                ],
            };

        case "best-wadi-rum-half-day-jeep-tour-aqaba":
            return {
                title: "Which Is the Best Wadi Rum Half-Day Jeep Tour from Aqaba?",
                seoTitle: "Best Wadi Rum Half-Day Jeep Tour 2026 | Comparison",
                description: "Compare real half-day Wadi Rum jeep tours from Aqaba — from a budget morning/sunset tour to private and sandboarding-added options.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/placeholder-wadirum.jpg",
                sections: [
                    { title: "The Short Answer", content: "Half-day jeep tours cover Wadi Rum's main rock formations, canyons, and a Bedouin tea stop in 4 hours or less — the standard way to see the desert without an overnight stay.", tourCard: { slug: "wadi-rum-desert-half-day-jeep-tour-morning-or", title: "Wadi Rum Desert: Half Day Jeep Tour (Morning or Sunset)", description: "A standard half-day jeep tour, bookable morning or sunset.", price: "From $52", duration: "4 hours" } },
                    { title: "Cheapest: Morning or Sunset Jeep Tour", content: "At $52, this covers the core half-day route with a choice of morning or sunset timing.", tourCard: { slug: "wadi-rum-desert-half-day-jeep-tour-morning-or", title: "Wadi Rum Desert: Half Day Jeep Tour (Morning or Sunset)", description: "The budget half-day jeep tour.", price: "From $52", duration: "4 hours" } },
                    { title: "Best with Sandboarding: Half-Day 4x4 with Sandboarding and Canyons", content: "Adds sandboarding and a canyon stop to the standard route for a more active half-day.", tourCard: { slug: "wadi-rum-half-day-4x4-tour-with-sandboarding-and", title: "Wadi Rum: Half-day 4x4 Tour with Sandboarding and Canyons", description: "Half-day jeep tour with sandboarding and canyons added.", price: "From $65", duration: "4 hours" } },
                    { title: "Best Private Option: Private 4-Hour Jeep Tour", content: "A private version of the same route with a dedicated Bedouin guide rather than joining a shared group.", tourCard: { slug: "wadi-rum-private-4-hour-jeep-tour-with-bedouin", title: "Wadi Rum: Private 4-Hour Jeep Tour with Bedouin Guide", description: "A private half-day jeep tour.", price: "From $65", duration: "4 hours" } },
                    { title: "Practical Tips", content: "Sunset departures get the best desert light for photos; morning tours are cooler and less crowded in summer." }
                ],
                faqs: [
                    { q: "What is the best half-day Wadi Rum jeep tour?", a: "A standard morning/sunset tour suits most visitors; add sandboarding for a more active half-day." },
                    { q: "How long is a half-day Wadi Rum jeep tour?", a: "Typically 2-4 hours." }
                ],
            };

        case "best-wadi-rum-full-day-jeep-tour-aqaba":
            return {
                title: "Which Is the Best Wadi Rum Full-Day Jeep Tour from Aqaba?",
                seoTitle: "Best Wadi Rum Full-Day Jeep Tour 2026 | Comparison",
                description: "Compare real full-day Wadi Rum jeep tours — from a budget lunch-included tour to hiking and rock-climbing combos.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/placeholder-wadirum.jpg",
                sections: [
                    { title: "The Short Answer", content: "Full-day tours cover more of Wadi Rum's hidden valleys and canyons than a half-day trip, usually with a Bedouin lunch included.", tourCard: { slug: "wadi-rum-full-day-jeep-tour-with-lunch", title: "Wadi Rum: Full-Day Jeep Tour with Lunch", description: "A full day of jeep touring with lunch included.", price: "From $96", duration: "1 day" } },
                    { title: "Cheapest: Full-Day Jeep with Lunch", content: "At $96, this covers a full day of jeep touring and a Bedouin lunch.", tourCard: { slug: "wadi-rum-full-day-jeep-tour-with-lunch", title: "Wadi Rum: Full-Day Jeep Tour with Lunch", description: "The budget full-day jeep tour.", price: "From $96", duration: "1 day" } },
                    { title: "Best for Hiking: Full Day Jeep & Jebel al-Hash Hiking", content: "Adds a hike up Jebel al-Hash to the jeep route, good for travellers who want more than just vehicle time.", tourCard: { slug: "wadi-rum-full-day-jeep-jebel-al-hash-hiking", title: "Wadi Rum: Full Day Jeep & Jebel al-Hash Hiking with Lunch", description: "Full-day jeep tour combined with a hike.", price: "From $91", duration: "8 hours" } },
                    { title: "Best for Climbing: Full-Day Rock Climbing Adventure", content: "Swaps general sightseeing for a dedicated rock-climbing day, a genuinely different activity from the standard jeep tours.", tourCard: { slug: "wadi-rum-full-day-rock-climbing-adventure-with", title: "Wadi Rum: Full-Day Rock Climbing Adventure with Lunch", description: "A full day focused on rock climbing.", price: "From $191", duration: "8 hours" } },
                    { title: "Practical Tips", content: "Full-day tours cover ground half-day tours skip entirely — worth the extra time if Wadi Rum is a trip highlight rather than a quick stop." }
                ],
                faqs: [
                    { q: "What is the best full-day Wadi Rum jeep tour?", a: "A standard lunch-included tour suits most visitors; add hiking or climbing for something more active." },
                    { q: "Does a full-day tour include lunch?", a: "Yes, most full-day Wadi Rum jeep tours include a Bedouin-style lunch." }
                ],
            };

        case "best-wadi-rum-overnight-camp-tour-aqaba":
            return {
                title: "Which Is the Best Wadi Rum Overnight Camp Tour?",
                seoTitle: "Best Wadi Rum Overnight Camp Tour 2026 | Comparison",
                description: "Compare real overnight Wadi Rum desert camp tours — from a budget camp stay to deluxe tents and multi-night wilderness packages.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/placeholder-wadirum.jpg",
                sections: [
                    { title: "The Short Answer", content: "An overnight stay is the real way to experience Wadi Rum — camps range from basic Bedouin tents to deluxe private setups, with stargazing as the common highlight after dark.", tourCard: { slug: "wadi-rum-jeep-tour-1-night-hostel-stay-with", title: "Wadi Rum: Jeep Tour & 1-Night Hostel Stay with Breakfast", description: "A jeep tour with a budget overnight camp stay.", price: "From $72", duration: "4 hours" } },
                    { title: "Cheapest: Jeep Tour & 1-Night Hostel Stay", content: "At $72, this is the lowest-priced way to combine a jeep tour with an overnight desert stay.", tourCard: { slug: "wadi-rum-jeep-tour-1-night-hostel-stay-with", title: "Wadi Rum: Jeep Tour & 1-Night Hostel Stay with Breakfast", description: "Budget overnight jeep + camp combo.", price: "From $72", duration: "4 hours" } },
                    { title: "Best Deluxe Option: Deluxe Tent Overnight Stay", content: "Upgrades the standard camp tent to a deluxe setup, for travellers who want more comfort without giving up the desert experience.", tourCard: { slug: "wadi-rum-jeep-tour-half-day-overnight-stay-deluxe", title: "Wadi Rum Jeep Tour half day overnight stay deluxe tent", description: "A half-day jeep tour with a deluxe overnight tent.", price: "From $52", duration: "1 day" } },
                    { title: "Best for Longer Stays: 2-Night Wadi Rum Adventure", content: "For travellers who want to properly settle into the desert, this multi-night package extends well beyond a single overnight.", tourCard: { slug: "wadi-rum-adventure-2-days-2-nights-in-the", title: "Wadi Rum Adventure: 2 Days, 2 Nights in the Desert & Meals", description: "A 2-night desert stay with meals included.", price: "From $234", duration: "3 days" } },
                    { title: "Practical Tips", content: "Desert nights get cold even when days are hot — camps provide blankets, but layering helps. Stargazing is best away from camp lights, so ask about a dedicated stargazing spot." }
                ],
                faqs: [
                    { q: "What is the best Wadi Rum overnight camp tour?", a: "A budget jeep+camp combo suits most visitors; go deluxe or multi-night for more comfort or a longer desert stay." },
                    { q: "Is it cold overnight in Wadi Rum?", a: "Yes, desert nights get cold even after hot days — camps provide blankets but bring layers." }
                ],
            };

        case "best-wadi-rum-sandboarding-tour-aqaba":
            return {
                title: "Which Is the Best Wadi Rum Sandboarding Tour?",
                seoTitle: "Best Wadi Rum Sandboarding Tour 2026 | Comparison",
                description: "Compare real sandboarding tours in Wadi Rum — from a short dedicated session to full jeep tours with sandboarding added.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/placeholder-wadirum.jpg",
                sections: [
                    { title: "The Short Answer", content: "Sandboarding in Wadi Rum is almost always bundled into a jeep tour rather than booked standalone — the red dunes here are genuinely good for it.", tourCard: { slug: "wadi-rum-sandboarding-camel-riding-1-hour-by-jeep", title: "WADI RUM: SANDBOARDING, Camel riding, 1 hour _By Jeep", description: "A short sandboarding and camel-riding combo.", price: "From $24", duration: "1 hour" } },
                    { title: "Cheapest: Sandboarding & Camel Riding Combo", content: "At $24, this is the lowest-priced way to try sandboarding alongside a short camel ride.", tourCard: { slug: "wadi-rum-sandboarding-camel-riding-1-hour-by-jeep", title: "WADI RUM: SANDBOARDING, Camel riding, 1 hour _By Jeep", description: "Budget sandboarding + camel combo.", price: "From $24", duration: "1 hour" } },
                    { title: "Best Longer Option: Guided 4x4 Jeep Tour with Sandboarding", content: "Extends sandboarding into a fuller 4-hour jeep tour rather than a quick one-hour stop.", tourCard: { slug: "wadi-rum-guided-4x4-jeep-tour-with-sandboarding", title: "Wadi Rum: Guided 4x4 Jeep Tour with Sandboarding", description: "A longer jeep tour with sandboarding included.", price: "From $48", duration: "4 hours" } },
                    { title: "Practical Tips", content: "Wear closed shoes, not sandals — sand gets surprisingly hot and boards pick up speed fast on the steeper dunes." }
                ],
                faqs: [
                    { q: "What is the best sandboarding tour in Wadi Rum?", a: "A short combo with camel riding is cheapest; a longer jeep tour gives more sandboarding time." },
                    { q: "Is sandboarding in Wadi Rum good for beginners?", a: "Yes, guides pick appropriate dune slopes for first-timers." }
                ],
            };

        case "best-wadi-rum-camel-ride-tour-aqaba":
            return {
                title: "Which Is the Best Wadi Rum Camel Ride Tour?",
                seoTitle: "Best Wadi Rum Camel Ride Tour 2026 | Comparison",
                description: "Compare real camel riding tours in Wadi Rum — from a basic half-day ride to tea-tasting and camel-communication class combos.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/placeholder-wadirum.jpg",
                sections: [
                    { title: "The Short Answer", content: "Camel riding is a classic, slower-paced way to see Wadi Rum compared to a jeep, and most tours pair it with Bedouin tea.", tourCard: { slug: "wadirumhalf-day-camel-tour-with-jeep-4x4", title: "Wadirum:Half-Day Camel Tour with Jeep 4x4", description: "A half-day combining camel riding with a jeep tour.", price: "From $20", duration: "1 hour" } },
                    { title: "Cheapest: Half-Day Camel Tour with Jeep", content: "At $20, this combines camel riding with jeep transport at the lowest price.", tourCard: { slug: "wadirumhalf-day-camel-tour-with-jeep-4x4", title: "Wadirum:Half-Day Camel Tour with Jeep 4x4", description: "Budget camel + jeep combo.", price: "From $20", duration: "1 hour" } },
                    { title: "Best with Tea Tasting: Camel Ride with Traditional Tea Tasting", content: "Adds a traditional Bedouin tea tasting stop to the camel ride for a more cultural experience.", tourCard: { slug: "wadi-rum-camel-ride-with-traditional-tea-tasting", title: "Wadi Rum: camel ride with traditional tea tasting", description: "Camel ride with tea tasting.", price: "From $39", duration: "1.5 hours" } },
                    { title: "Most Unique: Camel Communication Class", content: "A genuinely different angle — learning how Bedouins communicate with and handle camels, not just riding one.", tourCard: { slug: "wadi-rum-camel-ride-with-camel-communication-class", title: "Wadi Rum Camel Ride with Camel Communication Class", description: "Camel ride paired with a communication class.", price: "From $77", duration: "1 hour" } },
                    { title: "Practical Tips", content: "Camel rides move much slower than jeep tours — expect to cover far less ground, which is part of the appeal if you want a quieter pace." }
                ],
                faqs: [
                    { q: "What is the best camel ride tour in Wadi Rum?", a: "A half-day camel-and-jeep combo suits most visitors; the communication class is a unique add-on." },
                    { q: "Is camel riding in Wadi Rum comfortable for beginners?", a: "Yes, guides lead the camels and routes are generally easy-paced." }
                ],
            };

        case "is-wadi-rum-stargazing-worth-it-aqaba":
            return {
                title: "Is Wadi Rum Stargazing Worth It?",
                seoTitle: "Wadi Rum Stargazing 2026 | Honest Review",
                description: "An honest look at Wadi Rum's dedicated stargazing tours, away from the standard jeep-tour stargazing stop.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/placeholder-wadirum.jpg",
                sections: [
                    { title: "The Short Answer", content: "Wadi Rum has near-zero light pollution, making it genuinely one of the best stargazing spots accessible from Aqaba — a dedicated stargazing tour with telescopes goes well beyond the quick look-up moment most jeep tours include.", tourCard: { slug: "guided-stargazing-telescopes-souvenir-photo-in", title: "Guided Stargazing, Telescopes & Souvenir Photo in Wadi Rum", description: "A dedicated telescope-based stargazing tour.", price: "From $77", duration: "2 hours" } },
                    { title: "Practical Tips", content: "Go on a clear, moonless night for the best views — ask your operator about the lunar calendar before booking a specific date." }
                ],
                faqs: [
                    { q: "Is Wadi Rum stargazing worth it?", a: "Yes, the near-zero light pollution makes it one of the best accessible stargazing spots in the region." },
                    { q: "What's the best time for stargazing in Wadi Rum?", a: "A clear, moonless night gives the best visibility." }
                ],
            };

        case "best-wadi-rum-hiking-tour-aqaba":
            return {
                title: "Which Is the Best Wadi Rum Hiking Tour?",
                seoTitle: "Best Wadi Rum Hiking Tour 2026 | Comparison",
                description: "Compare real Wadi Rum hiking tours — from the Jebel al-Hash day hike to summiting Jordan's highest peak, Jebel Umm ad Dami.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/placeholder-wadirum.jpg",
                sections: [
                    { title: "The Short Answer", content: "Wadi Rum's hiking ranges from an easy day hike to a serious summit attempt on Jordan's highest peak — pick based on your fitness and how much of a challenge you want.", tourCard: { slug: "jabal-al-hash-hike-and-white-desert-lunch", title: "Jabal Al-Hash Hike and White Desert Lunch", description: "A moderate day hike with a desert lunch.", price: "From $98", duration: "4.5 hours" } },
                    { title: "Moderate Option: Jabal Al-Hash Hike with Lunch", content: "A manageable day hike suited to most fitness levels, finishing with a desert lunch.", tourCard: { slug: "jabal-al-hash-hike-and-white-desert-lunch", title: "Jabal Al-Hash Hike and White Desert Lunch", description: "A moderate day hike with lunch.", price: "From $98", duration: "4.5 hours" } },
                    { title: "Best for Views: Burdah Rock Bridge Advanced Mountain Hike", content: "A more demanding hike up to Wadi Rum's famous natural rock bridge, rewarding the effort with some of the desert's best views.", tourCard: { slug: "wadi-rum-burdah-rock-bridge-advanced-mountain-hike", title: "Wadi Rum: Burdah Rock Bridge Advanced Mountain Hike", description: "An advanced hike to the Burdah Rock Bridge.", price: "From $153", duration: "5 hours" } },
                    { title: "Toughest Challenge: Hike Mount Umm al-Dami, Jordan's Highest Peak", content: "For serious hikers only — summiting Jordan's highest point is a genuine mountaineering day, not a casual walk.", tourCard: { slug: "hike-mount-umm-al-dami-jordans-highest-peak-lunch", title: "Hike Mount Umm al-Dami: Jordan's Highest Peak & Lunch", description: "A summit hike to Jordan's highest peak.", price: "From $389", duration: "7 hours" } },
                    { title: "Practical Tips", content: "The advanced hikes require a reasonable fitness level and proper footwear — ask your operator honestly about the difficulty before booking if you're not an experienced hiker." }
                ],
                faqs: [
                    { q: "What is the best Wadi Rum hiking tour?", a: "A moderate hike like Jabal Al-Hash suits most visitors; Umm al-Dami is for serious hikers only." },
                    { q: "Do I need hiking experience for Wadi Rum's tougher trails?", a: "Yes, for Burdah Rock Bridge and Umm al-Dami — these are genuinely demanding, not casual walks." }
                ],
            };

        case "is-wadi-rum-hot-air-balloon-worth-it-aqaba":
            return {
                title: "Is the Wadi Rum Hot Air Balloon Flight Worth It?",
                seoTitle: "Wadi Rum Hot Air Balloon 2026 | Honest Review",
                description: "An honest look at Wadi Rum's sunrise hot air balloon flight with breakfast.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/placeholder-wadirum.jpg",
                sections: [
                    { title: "The Short Answer", content: "Seeing Wadi Rum's red rock formations from above at sunrise is a genuinely different perspective from any ground-level jeep or camel tour, and this is one of the few places in the region offering it.", tourCard: { slug: "hot-air-balloon-flight-sunrise-breakfast-in-wadi", title: "Hot Air Balloon Flight, Sunrise & Breakfast in Wadi Rum", description: "A sunrise hot air balloon flight with breakfast.", price: "From $519", duration: "5 hours" } },
                    { title: "Practical Tips", content: "Balloon flights are weather-dependent and can be cancelled on short notice for wind — build a buffer day into your itinerary if possible." }
                ],
                faqs: [
                    { q: "Is the Wadi Rum hot air balloon worth it?", a: "Yes, for a genuinely unique aerial view of the desert at sunrise, though it's a premium price point." },
                    { q: "Can the balloon flight be cancelled?", a: "Yes, due to wind or weather, with little advance notice." }
                ],
            };

        case "best-scuba-diving-tour-aqaba":
            return {
                title: "Which Is the Best Scuba Diving Tour in Aqaba?",
                seoTitle: "Best Scuba Diving Tour Aqaba 2026 | Comparison",
                description: "Compare real Red Sea scuba diving tours from Aqaba — from a guided beginner dive to boat-based multi-dive trips.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/placeholder-aqaba.jpg",
                sections: [
                    { title: "The Short Answer", content: "Aqaba's Red Sea coral reefs are a genuine diving draw, and tours range from a single guided shore dive to full boat trips with multiple dives.", tourCard: { slug: "aqaba-guided-scuba-diving-experience-with", title: "Aqaba: Guided Scuba Diving Experience with Instructor", description: "A guided scuba diving experience with an instructor.", price: "From $65", duration: "2 hours" } },
                    { title: "Cheapest: Guided Scuba Diving Experience", content: "At $65, this is the lowest-priced guided dive with an instructor.", tourCard: { slug: "aqaba-guided-scuba-diving-experience-with", title: "Aqaba: Guided Scuba Diving Experience with Instructor", description: "Budget guided dive.", price: "From $65", duration: "2 hours" } },
                    { title: "Best for Beginners: Private Red Sea Diving for Beginner or Experienced", content: "A private dive that explicitly caters to both first-timers and experienced divers.", tourCard: { slug: "aqaba-private-red-sea-diving-for-beginner-or", title: "Aqaba: Private Red Sea Diving for Beginner or Experienced", description: "A private dive suited to any experience level.", price: "From $65", duration: "2 hours" } },
                    { title: "Best Multi-Dive Option: 2 Guided Dives Boat Trip", content: "This covers two separate dives on a boat trip with gear and lunch, more value than a single shore dive.", tourCard: { slug: "aqaba-2-guided-dives-boat-trip-with-gear-and", title: "Aqaba: 2 Guided Dives Boat Trip with Gear and Buffet Lunch", description: "A two-dive boat trip with gear and lunch.", price: "From $210", duration: "5 hours" } },
                    { title: "Practical Tips", content: "Aqaba's reefs include an intentionally sunk shipwreck that's popular with divers — ask if your chosen dive site includes it." }
                ],
                faqs: [
                    { q: "What is the best scuba diving tour in Aqaba?", a: "A guided dive with an instructor suits beginners; a multi-dive boat trip suits experienced divers wanting more value." },
                    { q: "Is Aqaba good for beginner divers?", a: "Yes, several operators offer dives specifically suited to first-timers." }
                ],
            };

        case "best-snorkeling-tour-aqaba":
            return {
                title: "Which Is the Best Snorkeling Tour in Aqaba?",
                seoTitle: "Best Snorkeling Tour Aqaba 2026 | Comparison",
                description: "Compare real Red Sea snorkeling tours from Aqaba — from a basic guided trip to glass-boat and buffet-lunch combos.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/placeholder-aqaba.jpg",
                sections: [
                    { title: "The Short Answer", content: "Aqaba's shallow reefs make it easy for non-divers to see coral and fish while snorkeling, and tours range from a simple guided trip to boat-based options with lunch.", tourCard: { slug: "snorkeling-trip-with-pick-up-and-guide", title: "Snorkeling trip with pick up and guide", description: "A guided snorkeling trip with hotel pickup.", price: "From $48", duration: "2 hours" } },
                    { title: "Cheapest: Snorkeling Trip with Pickup and Guide", content: "At $48, this is the lowest-priced guided snorkeling trip with pickup included.", tourCard: { slug: "snorkeling-trip-with-pick-up-and-guide", title: "Snorkeling trip with pick up and guide", description: "Budget guided snorkeling trip.", price: "From $48", duration: "2 hours" } },
                    { title: "Best with Beach Access: Glass Boat & Snorkeling with Beach Club", content: "Combines a glass-bottom boat ride with snorkeling and a day at Berenice Beach Club.", tourCard: { slug: "glass-boat-snorkeling-with-day-use-of-berenice", title: "Glass Boat & Snorkeling with day use of Berenice Beach Club", description: "Glass boat ride, snorkeling, and beach club access.", price: "From $43", duration: "2 hours" } },
                    { title: "Best with Lunch: Red Sea Snorkeling Boat Trip with Buffet Lunch", content: "A boat-based snorkeling trip with a full buffet lunch included, good for a longer outing.", tourCard: { slug: "aqaba-red-sea-snorkeling-boat-trip-with-buffet", title: "Aqaba: Red Sea Snorkeling Boat Trip with Buffet Lunch", description: "Boat snorkeling trip with buffet lunch.", price: "From $115", duration: "4 hours" } },
                    { title: "Practical Tips", content: "Aqaba's water is calmest in the morning — book an early slot if you want the clearest visibility for snorkeling." }
                ],
                faqs: [
                    { q: "What is the best snorkeling tour in Aqaba?", a: "A guided trip with pickup suits most visitors; add a glass-bottom boat or lunch for a fuller outing." },
                    { q: "Is Aqaba good for snorkeling?", a: "Yes, its shallow reefs are accessible and good for non-divers." }
                ],
            };

        case "best-sunset-cruise-tour-aqaba":
            return {
                title: "Which Is the Best Sunset Cruise in Aqaba?",
                seoTitle: "Best Sunset Cruise Aqaba 2026 | Comparison",
                description: "Compare real Red Sea sunset cruises from Aqaba — from a shared cruise with a meal to private boat charters.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/placeholder-aqaba.jpg",
                sections: [
                    { title: "The Short Answer", content: "Aqaba's Red Sea sunsets, with Egypt and Saudi Arabia's coastlines visible across the water, are worth seeing from a boat — options range from a shared cruise with a meal to a fully private charter.", tourCard: { slug: "sea-breeze-sunset-cruise-with-meal-in-aqaba-red", title: "Sea Breeze Sunset Cruise with Meal in Aqaba Red Sea", description: "A shared sunset cruise with a meal included.", price: "From $26", duration: "2 hours" } },
                    { title: "Cheapest: Sea Breeze Sunset Cruise with Meal", content: "At $26, this is the lowest-priced sunset cruise with a meal included.", tourCard: { slug: "sea-breeze-sunset-cruise-with-meal-in-aqaba-red", title: "Sea Breeze Sunset Cruise with Meal in Aqaba Red Sea", description: "Budget shared sunset cruise.", price: "From $26", duration: "2 hours" } },
                    { title: "Best for Privacy: Private Sunset Cruise Boat Tour with Snacks", content: "A private version of the sunset cruise, better for couples or small groups wanting the boat to themselves.", tourCard: { slug: "aqaba-private-sunset-cruise-boat-tour-with-snacks", title: "Aqaba: Private Sunset Cruise Boat Tour with Snacks", description: "A private sunset cruise with snacks.", price: "From $546", duration: "1.5 hours" } },
                    { title: "Most Luxurious: Private Luxury Boat Tour in Aqaba", content: "The top-tier option, a fully private luxury boat rather than a standard cruise.", tourCard: { slug: "private-luxury-boat-tour-in-aqaba", title: "Private Luxury Boat Tour in Aqaba", description: "A luxury private boat tour.", price: "From $2289", duration: "3 hours" } },
                    { title: "Practical Tips", content: "On a clear evening, you can see the coastlines of four countries from Aqaba's waters — Jordan, Israel, Egypt, and Saudi Arabia — worth asking your captain to point them out." }
                ],
                faqs: [
                    { q: "What is the best sunset cruise in Aqaba?", a: "A shared cruise with a meal is the best value; go private for a more exclusive experience." },
                    { q: "Can you see other countries from Aqaba's water?", a: "Yes, on a clear evening you can often see Israel, Egypt, and Saudi Arabia's coastlines." }
                ],
            };

        case "is-aqaba-flyboard-worth-it":
            return {
                title: "Is the Aqaba Flyboard Experience Worth It?",
                seoTitle: "Aqaba Flyboard Experience 2026 | Honest Review",
                description: "An honest look at the Aqaba Red Sea flyboard experience.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/placeholder-aqaba.jpg",
                sections: [
                    { title: "The Short Answer", content: "Flyboarding uses a water-jet-powered board to lift you above the Red Sea's surface — a genuinely different, more adrenaline-focused activity than the area's snorkeling and diving options.", tourCard: { slug: "aqaba-red-sea-flyboard-experience", title: "Aqaba: Red Sea Flyboard Experience", description: "A water-jet flyboarding experience.", price: "From $189", duration: "3 hours" } },
                    { title: "Practical Tips", content: "No prior experience is needed — instructors handle the basics before you go up, but expect a learning curve in the first few minutes." }
                ],
                faqs: [
                    { q: "Is the Aqaba flyboard experience worth it?", a: "Yes, for travellers wanting a more adrenaline-focused water activity than standard snorkeling." },
                    { q: "Do I need experience to flyboard?", a: "No, instructors guide beginners through the basics." }
                ],
            };

        case "best-aqaba-to-wadi-rum-day-trip":
            return {
                title: "Which Is the Best Aqaba to Wadi Rum Day Trip?",
                seoTitle: "Best Aqaba to Wadi Rum Day Trip 2026 | Comparison",
                description: "Compare real Aqaba-to-Wadi Rum transfer-and-tour packages that combine getting there with a jeep tour.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/placeholder-wadirum.jpg",
                sections: [
                    { title: "The Short Answer", content: "Since Wadi Rum is about an hour from Aqaba, most day-trip packages bundle the transfer with a jeep tour rather than leaving you to arrange transport separately.", tourCard: { slug: "from-aqaba-jeep-tour-to-wadi-rum-desert", title: "From Aqaba: Jeep Tour to Wadi Rum Desert", description: "A transfer-and-jeep-tour package from Aqaba to Wadi Rum.", price: "From $268", duration: "5 hours" } },
                    { title: "Best Private Option: One-Day Private Tour from Aqaba to Wadi Rum", content: "A private version of the transfer-and-tour combo, giving more flexibility on timing.", tourCard: { slug: "one-day-private-tour-from-aqaba-to-wadi-rum", title: "One-day private tour from Aqaba to Wadi Rum site", description: "A private Aqaba-to-Wadi Rum day trip.", price: "From $328", duration: "10 hours" } },
                    { title: "Practical Tips", content: "If you're only in Aqaba briefly, a bundled transfer-and-tour package saves the hassle of separately arranging a taxi or rental car to Wadi Rum." }
                ],
                faqs: [
                    { q: "How far is Wadi Rum from Aqaba?", a: "About an hour's drive, making it an easy day trip." },
                    { q: "What's the best way to visit Wadi Rum from Aqaba?", a: "A bundled transfer-and-jeep-tour package, private or shared." }
                ],
            };

        case "is-wadi-al-mujib-dead-sea-tour-worth-it-aqaba":
            return {
                title: "Is the Wadi Al Mujib and Dead Sea Tour from Aqaba Worth It?",
                seoTitle: "Wadi Al Mujib Dead Sea Tour from Aqaba 2026 | Review",
                description: "An honest look at the Wadi Al Mujib and Dead Sea panoramic day trip from Aqaba.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/placeholder-deadsea.jpg",
                sections: [
                    { title: "The Short Answer", content: "This is a long day trip that covers Wadi Al Mujib's canyon scenery and the Dead Sea's famous floating experience — worth it if you have a full day free and want to see both without a separate overnight trip north.", tourCard: { slug: "wadi-al-mujib-and-dead-sea-panoramic-tour-from", title: "Wadi Al Mujib and Dead Sea Panoramic Tour from Aqaba", description: "A long day trip covering Wadi Al Mujib and the Dead Sea.", price: "From $325", duration: "11 hours" } },
                    { title: "Practical Tips", content: "This is a genuinely long day (around 11 hours) given the distance from Aqaba — worth it mainly if you don't have time to visit the Dead Sea region separately from Amman." }
                ],
                faqs: [
                    { q: "Is the Wadi Al Mujib and Dead Sea tour from Aqaba worth it?", a: "Yes if you have a full day and want to combine both without a separate trip, though it's a long day given the distance." },
                    { q: "How long is the drive from Aqaba to the Dead Sea?", a: "It's a significant distance, which is why this tour runs around 11 hours round trip." }
                ],
            };

        case "aqaba-travel-guide-2026":
            return {
                title: "Aqaba Travel Guide 2026",
                description: "Jordan's only coastal city is best known as the gateway to Wadi Rum and the Red Sea's diving and snorkeling — here's what first-timers need to know.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/placeholder-aqaba.jpg",
                sections: [
                    { title: "Why Visit Aqaba", content: "Most visitors use Aqaba as a base for Wadi Rum desert tours and Red Sea diving/snorkeling, though the city itself has a walkable old town and castle worth a short visit." },
                    { title: "Getting Around", content: "Taxis and hotel transfers cover the city; for Wadi Rum or Petra day trips, a bundled tour is simpler than arranging transport separately." }
                ],
                faqs: [
                    { q: "Is Aqaba worth visiting?", a: "Yes, mainly as a base for Wadi Rum and Red Sea diving/snorkeling." },
                    { q: "How do I get around Aqaba?", a: "Taxis and hotel transfers for the city; bundled tours for Wadi Rum/Petra day trips." }
                ],
            };

        case "best-time-to-visit-aqaba":
            return {
                title: "Best Time to Visit Aqaba",
                description: "Aqaba's desert-adjacent climate makes timing matter more here than in most Jordan destinations.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/placeholder-aqaba.jpg",
                sections: [
                    { title: "Weather Patterns", content: "Summer (June-August) in Aqaba and Wadi Rum is extremely hot, often exceeding 40°C in the desert — spring (March-May) and autumn (September-November) are far more comfortable for jeep tours and hiking." }
                ],
                faqs: [
                    { q: "What is the best time to visit Aqaba?", a: "Spring or autumn, to avoid Wadi Rum's extreme summer heat." }
                ],
            };

        case "is-aqaba-safe":
            return {
                title: "Is Aqaba Safe for Tourists?",
                description: "An honest look at safety in Aqaba and Wadi Rum for visitors.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/placeholder-aqaba.jpg",
                sections: [
                    { title: "The Short Answer", content: "Aqaba and Wadi Rum are generally very safe for tourists, including solo travellers, with a well-established tourism infrastructure. Standard precautions apply, same as any destination." }
                ],
                faqs: [
                    { q: "Is Aqaba safe for tourists?", a: "Yes, generally very safe with an established tourism infrastructure." }
                ],
            };

        case "aqaba-diving-guide":
            return {
                title: "Aqaba Diving Guide",
                description: "What to know before diving Aqaba's Red Sea reefs.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/placeholder-aqaba.jpg",
                sections: [
                    { title: "What to Expect", content: "Aqaba's reefs include coral gardens and an intentionally sunk shipwreck, with generally calm, clear water year-round and good visibility compared to many Red Sea sites further south." }
                ],
                faqs: [
                    { q: "Is Aqaba good for diving?", a: "Yes, with coral reefs, a sunk shipwreck, and generally clear, calm water." }
                ],
            };

        case "aqaba-food-guide":
            return {
                title: "Aqaba Food Guide",
                description: "What to eat in Aqaba, Jordan's main coastal city.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/placeholder-aqaba.jpg",
                sections: [
                    { title: "Local Specialties", content: "Fresh seafood is the obvious specialty given Aqaba's Red Sea location, alongside standard Jordanian staples like mansaf and mezze. Many Wadi Rum jeep tours also include Bedouin-style zarb (a traditional underground-cooked meal) as part of overnight camp packages." }
                ],
                faqs: [
                    { q: "What food is Aqaba known for?", a: "Fresh Red Sea seafood, plus Jordanian staples like mansaf and mezze." },
                    { q: "What is zarb?", a: "A traditional Bedouin dish cooked underground, often served on Wadi Rum overnight camp tours." }
                ],
            };

        case "aqaba-to-petra-guide":
            return {
                title: "Aqaba to Petra: How to Get There",
                description: "How to travel between Aqaba and Petra, Jordan's two biggest southern tourist draws.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/placeholder-petra.jpg",
                sections: [
                    { title: "Getting There", content: "Petra is roughly a 1.5-2 hour drive from Aqaba. Most visitors book a bundled day-tour transfer rather than arranging a taxi or rental car separately, since it also covers entrance logistics." }
                ],
                faqs: [
                    { q: "How far is Petra from Aqaba?", a: "About 1.5-2 hours by road." },
                    { q: "What's the best way to get from Aqaba to Petra?", a: "A bundled day-tour transfer, which also handles entrance logistics." }
                ],
            };

        case "best-dead-sea-day-trip-tour-amman":
            return {
                title: "Which Is the Best Dead Sea Day Trip from Amman?",
                seoTitle: "Best Dead Sea Day Trip from Amman 2026 | Honest Comparison",
                description: "Compare real Dead Sea day trips from Amman — from a budget half-day float to full-day combos with Baptism Site, Lot's Cave, and Pink Lake.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/642f1aa1fa091a17fa0811d514fa026855ab0fc0e0d87877d8e900402e99a327.jpg",
                sections: [
                    { title: "The Short Answer", content: "Floating in the Dead Sea's famously salty water is Jordan's most-booked day trip from Amman, and tours mainly differ in length (half-day vs. full-day) and what else gets bundled in — Baptism Site, Lot's Cave, or the Pink Lake/Crystal Beach area.", tourCard: { slug: "amman-dead-sea-day-tour-with-optional-entry-fees", title: "Amman: Dead Sea Day Tour with Optional Entry Fees and Lunch", description: "A standard full-day Dead Sea trip with optional entry fees and lunch.", price: "From $172", duration: "8 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/642f1aa1fa091a17fa0811d514fa026855ab0fc0e0d87877d8e900402e99a327.jpg" } },
                    { title: "Best Half-Day Option: Private Half-Day Tour", content: "If you only want the float without a full day commitment, this half-day version gets you there and back more quickly.", tourCard: { slug: "private-half-day-tour-to-the-dead-sea-from", title: "Private Half Day Tour to the Dead Sea from Amman", description: "A half-day Dead Sea trip for a quicker visit.", price: "From $226", duration: "5 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/738dfd644ed21e17b791d5eb89b1f5741349a3cc10ee988b1df26f472b9521ed.jpg" } },
                    { title: "Best Full-Day Value: Explore Dead Sea Full-Day Tour", content: "A full day at a competitive price, giving more time at the shore without the premium pricing of some private options.", tourCard: { slug: "explore-dead-sea-on-a-full-day-tour-from", title: "Explore Dead Sea on a Full-Day Tour from Amman with Lunch", description: "A full-day Dead Sea trip with lunch included.", price: "From $176", duration: "6 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/8175e3f5f62b5248.jpeg" } },
                    { title: "Best with Baptism Site: Dead Sea & Baptism Site Day Trip", content: "This pairs the Dead Sea float with the Baptism Site on the Jordan River, a significant religious site, in one day.", tourCard: { slug: "amman-baptism-site-and-dead-sea-day-trip", title: "Amman: Baptism Site and Dead Sea Day Trip", description: "The Dead Sea combined with the Baptism Site.", price: "From $260", duration: "8 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/eefcd3889fc047e8982f3eac866a7267606452fcb543a1152e2d32bdfa7f3b47.png" } },
                    { title: "Most Unique Add-On: Pink Lake & Crystal Beach", content: "This less-typical combo adds the Pink Lake and Crystal Beach area to the Dead Sea visit, a different angle from the standard Baptism Site pairing.", tourCard: { slug: "jordan-private-day-tour-pink-lake-crystal-beach", title: "Jordan Private Day Tour: Pink Lake, Crystal Beach & Dead Sea", description: "The Dead Sea paired with the Pink Lake and Crystal Beach.", price: "From $192", duration: "7 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/5a1ed4f07982594eeef7a17853fce6112a2cdbb541de2d5f4157440d2c66f104.jpeg" } },
                    { title: "Practical Tips", content: "Don't shave right before floating — the high salt content stings on broken skin. Avoid getting the water in your eyes, and shower immediately afterward at the beach facilities most tours include access to." }
                ],
                faqs: [
                    { q: "What is the best Dead Sea day trip from Amman?", a: "A full-day trip with lunch suits most visitors; add Baptism Site or Pink Lake for a fuller day." },
                    { q: "How long is the drive from Amman to the Dead Sea?", a: "Around 45-60 minutes, making it an easy half or full-day trip." },
                    { q: "Can you combine the Dead Sea with other sites in one day?", a: "Yes, Baptism Site and Pink Lake/Crystal Beach are both common pairings." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "What is the best Dead Sea day trip from Amman?", "acceptedAnswer": { "@type": "Answer", "text": "A full-day trip with lunch suits most visitors." } },
                    { "@type": "Question", "name": "How long is the drive to the Dead Sea?", "acceptedAnswer": { "@type": "Answer", "text": "Around 45-60 minutes." } }
                ] },
            };

        case "best-jerash-day-trip-tour-amman":
            return {
                title: "Which Is the Best Jerash Day Trip from Amman?",
                seoTitle: "Best Jerash Day Trip from Amman 2026 | Honest Comparison",
                description: "Compare real Jerash Roman ruins day trips from Amman — from a half-day visit to full-day combos with Amman city and the Citadel.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/4dab4bf733f0cbf7cae5337800796ee7ef298a060a07e590fa2409fa3e3567c7.jpg",
                sections: [
                    { title: "The Short Answer", content: "Jerash's remarkably preserved Roman ruins are an easy half-day trip from Amman, and tours mainly differ in whether they stay focused on Jerash alone or combine it with Amman city sightseeing for a fuller day.", tourCard: { slug: "amman-jerash-half-day-tour", title: "From Amman: Jerash Half Day Tour", description: "A focused half-day trip to Jerash.", price: "From $153", duration: "5 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/4dab4bf733f0cbf7cae5337800796ee7ef298a060a07e590fa2409fa3e3567c7.jpg" } },
                    { title: "Cheapest: Private Half-Day Tour to Jerash", content: "A private half-day option focused purely on Jerash without extra stops.", tourCard: { slug: "private-half-day-tour-to-jerash-from-amman", title: "Private Half Day Tour to Jerash From Amman", description: "A private half-day trip to Jerash.", price: "From $144", duration: "5 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/7b68211328e7d1352da0a9211515149b5d26f85acba18dc88df0f17c99546a65.jpeg" } },
                    { title: "Best Combo: Jerash and Amman City Tour", content: "This combines Jerash with Amman's city highlights in one full day, efficient if you want both without two separate trips.", tourCard: { slug: "private-day-tour-amman-city-and-jerash-from-amman", title: "Private Day Tour: Amman City and Jerash From Amman", description: "A full day combining Jerash with Amman city sightseeing.", price: "From $195", duration: "7 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/3dd8d6ebce441074db04a84030de65a7d142053c20ec93fb55c07267e8443f79.jpeg" } },
                    { title: "Best Full-Day Value: Full Day Jerash and Amman City Tour", content: "A full-day version at a competitive price point for the same Jerash-plus-city combination.", tourCard: { slug: "from-amman-full-day-jerash-and-amman-city-tour", title: "From Amman: Full day Jerash and Amman city Tour", description: "A full-day Jerash and Amman city combo.", price: "From $210", duration: "7 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/3a31ae4d1d99c528.jpeg" } },
                    { title: "Practical Tips", content: "Jerash's site is large with long colonnaded streets and little shade — bring water and a hat, especially in warmer months. Early morning visits avoid both the heat and the tour-bus crowds." }
                ],
                faqs: [
                    { q: "What is the best Jerash day trip from Amman?", a: "A half-day focused trip suits most visitors; combine with Amman city sightseeing for a fuller day." },
                    { q: "How far is Jerash from Amman?", a: "About 45-50 minutes by road, making it an easy half-day trip." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "What is the best Jerash day trip from Amman?", "acceptedAnswer": { "@type": "Answer", "text": "A half-day focused trip suits most visitors." } },
                    { "@type": "Question", "name": "How far is Jerash from Amman?", "acceptedAnswer": { "@type": "Answer", "text": "About 45-50 minutes by road." } }
                ] },
            };

        case "best-citadel-walking-tour-amman":
            return {
                title: "Which Is the Best Amman Citadel Walking Tour?",
                seoTitle: "Best Amman Citadel Walking Tour 2026 | Honest Comparison",
                description: "Compare real Amman Citadel and downtown walking tours — from a focused Citadel visit to combos with souks and the art trail.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/760db9594b9993773c0e48586149d4beb8eecfe6b84ff4a3644e828e6496d846.jpg",
                sections: [
                    { title: "The Short Answer", content: "The Citadel, perched above downtown Amman, is the city's most-visited landmark, and most walking tours either stay focused there or extend down into the souks and old city streets below.", tourCard: { slug: "amman-citadel-guided-walking-tour", title: "Amman: Citadel Guided Walking Tour", description: "A focused guided walk through the Citadel.", price: "From $77", duration: "1.5 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/760db9594b9993773c0e48586149d4beb8eecfe6b84ff4a3644e828e6496d846.jpg" } },
                    { title: "Best Combo: Citadel, Art Trail & Souks", content: "This extends the Citadel visit down into downtown's art trail and souks, giving a broader sense of the city beyond the ruins alone.", tourCard: { slug: "amman-walking-tour-with-citadel-art-trail-souks", title: "Amman: Walking Tour with Citadel, Art Trail, & Souks", description: "The Citadel combined with downtown's art trail and souks.", price: "From $85", duration: "3 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/79f1d1ff9edec7a835e515452471a32e92a3835195a378cb56cf984f7e70359d.png" } },
                    { title: "Best for First-Timers: Must-See Attractions Private Walk", content: "A private walk covering Amman's must-see attractions rather than a single-site focus, good orientation for a first visit.", tourCard: { slug: "amman-must-see-attractions-private-walking-tour", title: "Amman: Must-See Attractions Private Walking Tour", description: "A private walk covering Amman's main attractions.", price: "From $117", duration: "2 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/0c72cadaa76306db4f69a18ff4299ff9362ed5c1a94622eca4fa64e89ac790da.jpg" } },
                    { title: "Practical Tips", content: "The Citadel offers sweeping views over downtown Amman and the Roman Theatre below — worth timing your visit for golden hour if photography matters to you." }
                ],
                faqs: [
                    { q: "What is the best Amman Citadel walking tour?", a: "A focused Citadel visit suits a quick stop; add the souks and art trail for a fuller sense of downtown." },
                    { q: "How long does the Amman Citadel take to visit?", a: "1.5-3 hours depending on whether you add the surrounding downtown area." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "What is the best Amman Citadel walking tour?", "acceptedAnswer": { "@type": "Answer", "text": "A focused Citadel visit suits a quick stop." } },
                    { "@type": "Question", "name": "How long does the Citadel take to visit?", "acceptedAnswer": { "@type": "Answer", "text": "1.5-3 hours." } }
                ] },
            };

        case "best-desert-castles-tour-amman":
            return {
                title: "Which Is the Best Desert Castles Tour from Amman?",
                seoTitle: "Best Desert Castles Tour Amman 2026 | Honest Comparison",
                description: "Compare real Jordan Desert Castles day trips from Amman — from the classic Umayyad loop to combos with Azraq Wetland Reserve.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/4fa24de81e877.png",
                sections: [
                    { title: "The Short Answer", content: "Jordan's Desert Castles are a loop of Umayyad-era fortresses and hunting lodges east of Amman, off the typical tourist trail. Most tours cover the classic loop, with some adding the Azraq Wetland Reserve for a nature contrast.", tourCard: { slug: "from-amman-umayyad-desert-castles-tour-with", title: "From Amman: Umayyad Desert Castles Tour with Transfer", description: "The classic Umayyad Desert Castles loop.", price: "From $205", duration: "6 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/4fa24de81e877.png" } },
                    { title: "Best with Nature Added: Desert Castles & Azraq Wetland Reserve", content: "This adds the Azraq Wetland Reserve, a rare desert wetland ecosystem, to the Desert Castles loop.", tourCard: { slug: "amman-desert-castles-azraq-wetland-reserve-full", title: "Amman - Desert Castles & Azraq Wetland Reserve Full Day Trip", description: "The Desert Castles loop combined with Azraq Wetland Reserve.", price: "From $220", duration: "8 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/5f630965fca2bd83.jpeg" } },
                    { title: "Best for Nature Focus: History & Nature Azraq Tour", content: "This version leans more heavily into the Azraq Wetland Reserve's nature side alongside the historical castles.", tourCard: { slug: "history-nature-azraq-wetland-reserve-desert", title: "History & Nature: Azraq Wetland Reserve & Desert Castles", description: "A nature-focused version of the Desert Castles and Azraq combo.", price: "From $208", duration: "9 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/0f08005b6e26e8b25d46a4cc52f3d13dee7d85c757d41b9de17e2be4bbc7229c.jpg" } },
                    { title: "Practical Tips", content: "The Desert Castles are spread out across the eastern desert, so a guided day trip with transfer is far more practical than trying to self-drive between them without local knowledge of the routes." }
                ],
                faqs: [
                    { q: "What is the best Desert Castles tour from Amman?", a: "The classic Umayyad loop suits history-focused visitors; add Azraq Wetland Reserve for a nature contrast." },
                    { q: "What are Jordan's Desert Castles?", a: "A loop of Umayyad-era fortresses and hunting lodges in the eastern desert near Amman." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "What is the best Desert Castles tour from Amman?", "acceptedAnswer": { "@type": "Answer", "text": "The classic Umayyad loop suits history-focused visitors." } },
                    { "@type": "Question", "name": "What are Jordan's Desert Castles?", "acceptedAnswer": { "@type": "Answer", "text": "A loop of Umayyad-era fortresses in the eastern desert." } }
                ] },
            };

        case "best-madaba-mount-nebo-tour-amman":
            return {
                title: "Which Is the Best Madaba & Mount Nebo Tour from Amman?",
                seoTitle: "Best Madaba Mount Nebo Tour Amman 2026 | Honest Comparison",
                description: "Compare real Madaba and Mount Nebo half-day tours from Amman, both built around the same core sites.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/57617bb929bd8.jpeg",
                sections: [
                    { title: "The Short Answer", content: "Madaba's famous Byzantine mosaic map and Mount Nebo's view over the Jordan Valley (where Moses is said to have seen the Promised Land) are almost always visited together on a half-day trip, since they're a short drive apart.", tourCard: { slug: "amman-private-half-day-tour-to-madaba-mount-nebo", title: "Amman: Private Half-Day Tour to Madaba & Mount Nebo", description: "A private half-day trip to Madaba and Mount Nebo.", price: "From $142", duration: "5 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/57617bb929bd8.jpeg" } },
                    { title: "Alternative Private Option: Half Day Tour to Madaba and Mount Nebo", content: "A similarly-scoped private half-day option from a different operator, same core itinerary.", tourCard: { slug: "private-half-day-tour-to-madaba-and-mount-nebo", title: "Private Half Day Tour to Madaba and Mount Nebo from Amman", description: "An alternative private half-day Madaba and Mount Nebo trip.", price: "From $226", duration: "6 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/ca5b43884fbe5ea08cd985ab4fc17382055691b688c8f49b5b6d53ae7837bd82.jpeg" } },
                    { title: "Practical Tips", content: "Madaba's mosaic map is inside St. George's Church — modest dress is appreciated, same as any active place of worship. Mount Nebo's viewpoint is best for photos in clear weather; haze can obscure the Jordan Valley view on hot days." }
                ],
                faqs: [
                    { q: "What is the best Madaba and Mount Nebo tour from Amman?", a: "Either private half-day option covers the same core sites well; choose based on price and timing fit." },
                    { q: "What is Madaba known for?", a: "Its Byzantine-era mosaic map of the Holy Land, inside St. George's Church." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "What is the best Madaba and Mount Nebo tour from Amman?", "acceptedAnswer": { "@type": "Answer", "text": "Either private half-day option covers the core sites well." } },
                    { "@type": "Question", "name": "What is Madaba known for?", "acceptedAnswer": { "@type": "Answer", "text": "Its Byzantine-era mosaic map inside St. George's Church." } }
                ] },
            };

        case "best-helicopter-tour-amman":
            return {
                title: "Which Is the Best Helicopter Tour over Amman?",
                seoTitle: "Best Amman Helicopter Tour 2026 | Honest Comparison",
                description: "Compare the three real helicopter flight durations over Amman's city landmarks — 12, 17, and 22 minutes.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/cd0e3ea6723304dec7ad1b0cb169534bdb77ab8bc5757896468618aecce247cd.jpg",
                sections: [
                    { title: "The Short Answer", content: "Amman's helicopter flights come in three durations over the same core route past the Citadel, Roman Theatre, and downtown — longer flights simply cover more ground and climb higher for wider views.", tourCard: { slug: "amman-12-minute-helicopter-flight-over-city", title: "Amman: 12-Minute Helicopter Flight over City Landmarks", description: "The shortest, most affordable helicopter flight over Amman.", price: "From $488", duration: "12 minutes", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/cd0e3ea6723304dec7ad1b0cb169534bdb77ab8bc5757896468618aecce247cd.jpg" } },
                    { title: "Cheapest: 12-Minute Flight", content: "The shortest option, good for a taste of the aerial view without the longer-flight price jump.", tourCard: { slug: "amman-12-minute-helicopter-flight-over-city", title: "Amman: 12-Minute Helicopter Flight over City Landmarks", description: "The budget helicopter flight option.", price: "From $488", duration: "12 minutes", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/cd0e3ea6723304dec7ad1b0cb169534bdb77ab8bc5757896468618aecce247cd.jpg" } },
                    { title: "Middle Option: 17-Minute Flight", content: "A middle-ground flight length, covering more of the city than the 12-minute option without the full premium of the longest flight.", tourCard: { slug: "amman-17-minute-helicopter-flight-over-city", title: "Amman: 17-Minute Helicopter Flight over City Landmarks", description: "A mid-length helicopter flight over Amman.", price: "From $715", duration: "17 minutes", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/de61350d0cdf3c245acab1b63dbf142865e32b41174498ff67e2c88c9871f4ea.jpg" } },
                    { title: "Most Comprehensive: 22-Minute Flight", content: "The longest flight, covering the widest view of Amman's landmarks for travellers who want the fullest aerial experience.", tourCard: { slug: "amman-22-minute-helicopter-flight-over-city", title: "Amman: 22-Minute Helicopter Flight over City Landmarks", description: "The longest, most comprehensive helicopter flight over Amman.", price: "From $865", duration: "22 minutes", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/b74d51319a2f2c0dc83c428efddfe416744b6b05e3a3a62fcad089a4124d478d.jpg" } },
                    { title: "Practical Tips", content: "Flights depend on clear weather and are first thing in the morning or evening when air traffic and heat haze are at their lowest — book with some flexibility in your schedule." }
                ],
                faqs: [
                    { q: "What is the best helicopter tour over Amman?", a: "The 12-minute flight suits a quick taste; go longer for a fuller view of the city's landmarks." },
                    { q: "Is the Amman helicopter tour weather-dependent?", a: "Yes, clear weather is needed, so some schedule flexibility helps." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "What is the best helicopter tour over Amman?", "acceptedAnswer": { "@type": "Answer", "text": "The 12-minute flight suits a quick taste." } },
                    { "@type": "Question", "name": "Is it weather-dependent?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, clear weather is needed." } }
                ] },
            };

        case "best-food-tour-amman":
            return {
                title: "Which Is the Best Food Tour in Amman?",
                seoTitle: "Best Food Tour in Amman 2026 | Honest Comparison",
                description: "Compare real Amman food tours — from a downtown guided tour to a women-led culinary tour through the city's food scene.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/9f6959736150a250f95d60cdce93801897cd14fd2a2fa48836a05d77846078bb.jpeg",
                sections: [
                    { title: "The Short Answer", content: "Amman's food tours mostly walk you through downtown's street-food and market scene — the differences are in guide style and whether the tour has a specific thematic angle, like being women-led.", tourCard: { slug: "amman-guided-food-tour-in-downtown", title: "Amman: Guided Food Tour in Downtown", description: "A standard guided food tour through downtown Amman.", price: "From $92", duration: "2 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/9f6959736150a250f95d60cdce93801897cd14fd2a2fa48836a05d77846078bb.jpeg" } },
                    { title: "Best for Authenticity: Food Walking Tour", content: "This version brands itself around authenticity and local experience, going deeper into lesser-known spots than a standard downtown walk.", tourCard: { slug: "amman-food-walking-tour-the-authentic-local-food", title: "Amman Food Walking Tour: The Authentic Local Food Experience", description: "A food walking tour focused on authentic local spots.", price: "From $98", duration: "3 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/de859559041b284b8a622db8404ea105d9a01848f332b4e07d261b5d04fe4ed1.jpg" } },
                    { title: "Best Themed Option: Women-Led Culinary Tour", content: "A women-led tour through Amman's culinary scene, a distinct angle for travellers who specifically want that perspective.", tourCard: { slug: "amman-women-led-food-tour-through-ammans-culinary", title: "Amman: Women-Led Food Tour Through Amman's Culinary Scene", description: "A women-led food tour through Amman.", price: "From $155", duration: "3 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/bd3ca45e5f1ed4a2e270fac4ce887429f2a0f75ce408899db5acb2a4a52b0d92.jpg" } },
                    { title: "Practical Tips", content: "Come hungry and pace yourself — most food tours involve multiple tasting stops rather than one sit-down meal, so eating light beforehand helps you enjoy all the stops." }
                ],
                faqs: [
                    { q: "What is the best food tour in Amman?", a: "A standard downtown food tour suits most visitors; the women-led version is a distinct option for those seeking that angle." },
                    { q: "How many stops does an Amman food tour typically have?", a: "Several tasting stops rather than one meal — come hungry but pace yourself." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "What is the best food tour in Amman?", "acceptedAnswer": { "@type": "Answer", "text": "A standard downtown food tour suits most visitors." } },
                    { "@type": "Question", "name": "How many stops does the tour have?", "acceptedAnswer": { "@type": "Answer", "text": "Several tasting stops rather than one meal." } }
                ] },
            };

        case "best-craft-workshop-amman":
            return {
                title: "Which Is the Best Craft Workshop in Amman?",
                seoTitle: "Best Craft Workshop in Amman 2026 | Honest Comparison",
                description: "Compare real hands-on craft workshops in Amman — pottery, glass painting, mosaic art, silver ring crafting, and calligraphy.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/724f5421321d0d9b8d519fa2a894a314c39c038c0f3419858009a9905ad7ac1d.jpg",
                sections: [
                    { title: "The Short Answer", content: "Amman has an unusually wide range of hands-on craft workshops — the right one depends purely on which craft interests you, since all run roughly 1-4 hours with snacks or drinks included.", tourCard: { slug: "amman-pottery-painting-workshop-with-drinks-and", title: "Amman: Pottery Painting Workshop with Drinks and Snacks", description: "A hands-on pottery painting workshop.", price: "From $69", duration: "1 hour", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/724f5421321d0d9b8d519fa2a894a314c39c038c0f3419858009a9905ad7ac1d.jpg" } },
                    { title: "For Pottery Fans: Pottery Painting Workshop", content: "A straightforward pottery painting session, good for a relaxed, low-pressure creative activity.", tourCard: { slug: "amman-pottery-painting-workshop-with-drinks-and", title: "Amman: Pottery Painting Workshop with Drinks and Snacks", description: "A pottery painting workshop with snacks.", price: "From $69", duration: "1 hour", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/724f5421321d0d9b8d519fa2a894a314c39c038c0f3419858009a9905ad7ac1d.jpg" } },
                    { title: "For Glass Art: Glass Painting Workshop", content: "A glass-painting-specific session, a different medium from pottery for those who prefer working with glass.", tourCard: { slug: "amman-glass-painting-workshop-with-snacks-and", title: "Amman: Glass Painting Workshop with Snacks and Drinks", description: "A glass painting workshop.", price: "From $58", duration: "1 hour", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/4c53f9a65994858bdd14fb5d96c1c467e4fbdf2d5d017b44126fca9020fd39d4.jpg" } },
                    { title: "For a Longer Session: Mosaic Art Workshop", content: "A longer, more involved mosaic workshop with coffee and tea, reflecting Jordan's mosaic heritage seen at sites like Madaba.", tourCard: { slug: "amman-mosaic-art-workshop-with-coffee-and-tea", title: "Amman: Mosaic Art Workshop with Coffee and Tea", description: "A mosaic art workshop tying into Jordan's mosaic heritage.", price: "From $78", duration: "4 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/8b05a04a6a99093c6c916f50b0a5e1a9451881fbb2a3a682499236a2ac66c670.jpg" } },
                    { title: "For Jewelry Makers: Silver Ring Crafting Workshop", content: "A silver ring crafting session where you leave with a wearable piece you made yourself, distinct from the purely decorative crafts.", tourCard: { slug: "amman-silver-ring-crafting-workshop-with-samir", title: "Amman: Silver Ring Crafting Workshop with Samir", description: "A silver ring crafting workshop.", price: "From $98", duration: "2 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/3a1557438f601a01b6865e68976367e48cde3162b3367012741a1cef56939575.jpg" } },
                    { title: "For Art & History Combined: Calligraphy Class with Art Walk", content: "This pairs Arabic calligraphy instruction with an art walk and lunch, combining a craft lesson with sightseeing rather than staying purely workshop-based.", tourCard: { slug: "amman-calligraphy-class-art-walk-and-lunch-tour", title: "Amman: Calligraphy Class, Art Walk, and Lunch Tour", description: "A calligraphy class combined with an art walk and lunch.", price: "From $229", duration: "8 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/14b050bd949bdac2659a5045cbdb88b4d578534dd278079f8395a1ea18f096c5.jpg" } },
                    { title: "Practical Tips", content: "Most workshops are small-group or one-on-one, so booking a day or two ahead is sensible rather than expecting walk-in availability." }
                ],
                faqs: [
                    { q: "What is the best craft workshop in Amman?", a: "It depends on the craft — pottery and glass painting are relaxed and short, silver ring crafting gives you a wearable souvenir." },
                    { q: "Do I need experience for Amman's craft workshops?", a: "No, they're designed for beginners with hands-on guidance throughout." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "What is the best craft workshop in Amman?", "acceptedAnswer": { "@type": "Answer", "text": "It depends on the craft — pottery and glass painting are relaxed and short." } },
                    { "@type": "Question", "name": "Do I need experience?", "acceptedAnswer": { "@type": "Answer", "text": "No, they're designed for beginners." } }
                ] },
            };

        case "is-hammam-spa-experience-worth-it-amman":
            return {
                title: "Is a Hammam or Spa Experience in Amman Worth It?",
                seoTitle: "Amman Hammam & Spa Experience 2026 | Honest Review",
                description: "An honest look at Amman's hammam and spa experiences, including a ladies-only option and a Dead Sea combo.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/53dd0db78b015241340f05673406d73930cec9fc6f0449011f4149c6b6592715.jpg",
                sections: [
                    { title: "The Short Answer", content: "Traditional hammam experiences (steam, scrub, massage) are a genuinely relaxing, culturally rooted activity worth building into an Amman itinerary, especially after a day of walking or before/after the Dead Sea.", tourCard: { slug: "ladies-only-spa-hammam-experience-in-amman", title: "Ladies-Only Spa & Hammam Experience in Amman", description: "A ladies-only traditional hammam and spa experience.", price: "From $58", duration: "1 hour", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/53dd0db78b015241340f05673406d73930cec9fc6f0449011f4149c6b6592715.jpg" } },
                    { title: "Best Combo: Hammam, Massage, Lunch & Dead Sea Sunset", content: "This bundles the hammam with a massage, lunch, and a Dead Sea sunset visit into one longer, fuller day.", tourCard: { slug: "amman-5-hour-hammam-massage-lunch-and-dead-sea", title: "Amman: 5-hour Hammam, Massage, Lunch and Dead Sea Sunset", description: "A hammam, massage, and lunch combined with a Dead Sea sunset visit.", price: "From $287", duration: "5 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/92b41d43c99d8ee14596802220e860d292cece990457fca12d0500517dfb7d03.jpeg" } },
                    { title: "Practical Tips", content: "Ladies-only sessions exist for travellers who prefer that, and most hammams provide all necessary towels/robes — no need to bring your own." }
                ],
                faqs: [
                    { q: "Is a hammam experience worth it in Amman?", a: "Yes, it's a genuinely relaxing and culturally rooted activity, especially combined with a Dead Sea visit." },
                    { q: "Are there ladies-only hammam options in Amman?", a: "Yes, ladies-only sessions are available." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "Is a hammam experience worth it in Amman?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, especially combined with a Dead Sea visit." } },
                    { "@type": "Question", "name": "Are there ladies-only options?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, ladies-only sessions are available." } }
                ] },
            };

        case "best-petra-day-trip-from-amman":
            return {
                title: "Which Is the Best Petra Day Trip from Amman?",
                seoTitle: "Best Petra Day Trip from Amman 2026 | Honest Comparison",
                description: "Compare real Petra day trips from Amman — a focused private round-trip versus a combo adding the Dead Sea.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/82ef9760d871279a97dee75abf185d5f51fe86fb89bb78c3db2dd6cb68ab7243.jpeg",
                sections: [
                    { title: "The Short Answer", content: "Petra is a roughly 3-hour drive from Amman each way, making a day trip long but doable — the choice is mainly between a focused Petra-only round-trip or combining it with a Dead Sea stop.", tourCard: { slug: "petra-private-full-day-round-trip", title: "Petra Private Full-Day Round-Trip", description: "A focused private round-trip to Petra from Amman.", price: "From $229", duration: "10 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/82ef9760d871279a97dee75abf185d5f51fe86fb89bb78c3db2dd6cb68ab7243.jpeg" } },
                    { title: "Best Combo: Petra and Dead Sea Day Tour", content: "This adds a Dead Sea stop to the Petra round-trip, an ambitious but doable combination for travellers short on time.", tourCard: { slug: "amman-petra-and-dead-sea-day-tour", title: "Amman: Petra and Dead Sea Day Tour", description: "Petra combined with a Dead Sea stop in one long day.", price: "From $323", duration: "8 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/6e8d6558d705084681bbac3b8f323856797789f725b683be65842da3481eca2e.jpeg" } },
                    { title: "Practical Tips", content: "A Petra day trip from Amman is long — 6+ hours of driving round trip — so you'll have meaningfully less time at the site itself than if you stayed overnight near Petra. Consider an overnight stay if you want to see Petra by Night or the Monastery hike without rushing." }
                ],
                faqs: [
                    { q: "Can Petra be visited as a day trip from Amman?", a: "Yes, though it's a long day given the roughly 3-hour drive each way." },
                    { q: "Is it better to stay overnight near Petra instead?", a: "If you want to see more of the site unhurried, or do Petra by Night, an overnight stay is worth considering over a rushed day trip." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "Can Petra be visited as a day trip from Amman?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, though it's a long day given the drive." } },
                    { "@type": "Question", "name": "Is an overnight stay better?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, if you want to see more unhurried." } }
                ] },
            };

        case "is-as-salt-day-trip-worth-it-amman":
            return {
                title: "Is an As-Salt Day Trip from Amman Worth It?",
                seoTitle: "As-Salt Day Trip from Amman 2026 | Honest Review",
                description: "An honest look at As-Salt, Jordan's lesser-known Ottoman-era hill town, as a day trip from Amman.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/cbdf5309b8e25ac8a52c3fd953ee0052451a05c69ce391000603d22d349154fb.png",
                sections: [
                    { title: "The Short Answer", content: "As-Salt is a UNESCO-listed Ottoman-era hill town close to Amman, far less visited than Jerash or the Dead Sea — worth it specifically for travellers who want a quieter, more local-feeling day away from the bigger-name sites.", tourCard: { slug: "as-salt-city-tour-full-day-from-amman", title: "As-Salt City Tour – Full Day from Amman", description: "A full-day tour of the Ottoman-era hill town of As-Salt.", price: "From $380", duration: "8 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/cbdf5309b8e25ac8a52c3fd953ee0052451a05c69ce391000603d22d349154fb.png" } },
                    { title: "Alternative: Al-Salt and Downtown Amman Day Trip", content: "This pairs As-Salt with downtown Amman in one day, useful if you want to combine the quieter town with some city time too.", tourCard: { slug: "amman-al-salt-and-downtown-day-trip", title: "Amman: Al-Salt and Downtown Day Trip", description: "As-Salt combined with downtown Amman.", price: "From $248", duration: "7 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/91b6191443cbdc64b265cf30c7a546fef1115212d56567ccbce90322f9932392.jpg" } },
                    { title: "Practical Tips", content: "As-Salt's yellow-limestone architecture and hillside streets are genuinely distinct from Amman's modern concrete sprawl — a good contrast stop if you've already done the bigger sites." }
                ],
                faqs: [
                    { q: "Is an As-Salt day trip worth it?", a: "Yes, for travellers wanting a quieter, more local day away from Jordan's bigger-name sites." },
                    { q: "What is As-Salt known for?", a: "Its UNESCO-listed Ottoman-era yellow-limestone architecture." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "Is an As-Salt day trip worth it?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, for a quieter, more local day." } },
                    { "@type": "Question", "name": "What is As-Salt known for?", "acceptedAnswer": { "@type": "Answer", "text": "Its UNESCO-listed Ottoman-era architecture." } }
                ] },
            };

        case "is-wadi-mujib-canyon-hike-worth-it-amman":
            return {
                title: "Is the Wadi Mujib Canyon Hike Worth It?",
                seoTitle: "Wadi Mujib Canyon Hike 2026 | Honest Review",
                description: "An honest look at the Wadi Mujib river canyon hike, Jordan's answer to canyoning, as a day trip from Amman.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/d0196d0a1a17d2a0.jpeg",
                sections: [
                    { title: "The Short Answer", content: "Wadi Mujib's river canyon hike (wading and sometimes swimming upstream through a narrow gorge near the Dead Sea) is a genuinely different, more adventurous activity than Jordan's typical sightseeing stops — worth it if you want something physically active rather than another walking tour.", tourCard: { slug: "from-amman-wadi-mujib-river-canyon-hike-private", title: "From Amman: Wadi Mujib River Canyon Hike & Private Day Trip", description: "A private day trip to the Wadi Mujib river canyon hike.", price: "From $410", duration: "6 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/d0196d0a1a17d2a0.jpeg" } },
                    { title: "Practical Tips", content: "You will get wet — wear quick-dry clothing and secure footwear with good grip, since the hike involves wading and climbing over wet rocks. The hike is seasonal and can close when water levels are too high or too low." }
                ],
                faqs: [
                    { q: "Is the Wadi Mujib canyon hike worth it?", a: "Yes, for travellers wanting an active, adventurous activity distinct from typical sightseeing." },
                    { q: "What should I wear for Wadi Mujib?", a: "Quick-dry clothing and secure footwear — you will get wet wading through the canyon." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "Is the Wadi Mujib canyon hike worth it?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, for an active, adventurous activity." } },
                    { "@type": "Question", "name": "What should I wear?", "acceptedAnswer": { "@type": "Answer", "text": "Quick-dry clothing and secure footwear." } }
                ] },
            };

        case "is-baptism-site-tour-worth-it-amman":
            return {
                title: "Is a Baptism Site Tour from Amman Worth It?",
                seoTitle: "Baptism Site Tour from Amman 2026 | Honest Review",
                description: "An honest look at visiting the Baptism Site on the Jordan River as a day trip from Amman.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/2e56f67bbd0820a4ed5442a3d1007260da501bfa1e6d706f363287fec21aae8e.jpeg",
                sections: [
                    { title: "The Short Answer", content: "The Baptism Site, the traditional location where Jesus is said to have been baptized in the Jordan River, is worth it for travellers with any interest in biblical history — it's usually combined with the Dead Sea since both sites are in the same direction from Amman.", tourCard: { slug: "private-tour-baptism-site-jordan-river-from-amman", title: "Private Tour: Baptism Site (Jordan River) From Amman", description: "A private tour to the Baptism Site on the Jordan River.", price: "From $144", duration: "4 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/2e56f67bbd0820a4ed5442a3d1007260da501bfa1e6d706f363287fec21aae8e.jpeg" } },
                    { title: "Best Combo: Baptism Site & Dead Sea", content: "This pairs the Baptism Site with the Dead Sea, the most efficient way to see both in one trip since they're close together.", tourCard: { slug: "jordan-private-tour-to-the-dead-sea-and-baptism", title: "Jordan: Private Tour to The Dead Sea and Baptism Site", description: "The Baptism Site combined with the Dead Sea.", price: "From $195", duration: "8 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/7f2ffe74203e43c0da7c95739a5813beed251cf3d377041440a86d74950ab5a8.jpg" } },
                    { title: "Practical Tips", content: "Modest dress is required to enter the site, and advance permits/registration are typically arranged by the tour operator rather than something you handle yourself at the gate." }
                ],
                faqs: [
                    { q: "Is a Baptism Site tour worth it from Amman?", a: "Yes, especially for travellers with interest in biblical history; it pairs naturally with a Dead Sea visit." },
                    { q: "Do I need a permit to visit the Baptism Site?", a: "Yes, typically arranged by your tour operator in advance rather than at the gate." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "Is a Baptism Site tour worth it?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, especially with interest in biblical history." } },
                    { "@type": "Question", "name": "Do I need a permit?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, typically arranged by your tour operator." } }
                ] },
            };

        case "is-pink-lake-crystal-beach-tour-worth-it-amman":
            return {
                title: "Is the Pink Lake & Crystal Beach Tour from Amman Worth It?",
                seoTitle: "Pink Lake Crystal Beach Tour Amman 2026 | Honest Review",
                description: "An honest look at the Pink Lake and Crystal Beach day trip from Amman, a less typical Dead Sea-area combo.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/493812b649def5e3b66c9406c39a68978b9bd63b2f95f7e37713ab923b97cc19.jpg",
                sections: [
                    { title: "The Short Answer", content: "Pink Lake and Crystal Beach are less commonly covered than the standard Dead Sea stops, offering a genuinely different photo backdrop for travellers who've already done the typical Dead Sea float and want to see more of the area.", tourCard: { slug: "private-half-day-tour-pink-lake-crystal-beach-and", title: "Private Half Day Tour: Pink Lake, Crystal beach and Dead Sea", description: "A half-day private tour to Pink Lake, Crystal Beach, and the Dead Sea.", price: "From $172", duration: "6 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/493812b649def5e3b66c9406c39a68978b9bd63b2f95f7e37713ab923b97cc19.jpg" } },
                    { title: "Practical Tips", content: "This is a good add-on for repeat visitors to the Dead Sea area, or anyone wanting a different backdrop for photos beyond the standard float-in-the-sea shot." }
                ],
                faqs: [
                    { q: "Is the Pink Lake and Crystal Beach tour worth it?", a: "Yes, especially if you want a different photo backdrop than the standard Dead Sea float." },
                    { q: "How does this differ from a standard Dead Sea trip?", a: "It adds the less-visited Pink Lake and Crystal Beach stops to the usual Dead Sea visit." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "Is the Pink Lake and Crystal Beach tour worth it?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, for a different photo backdrop." } },
                    { "@type": "Question", "name": "How does this differ from a standard Dead Sea trip?", "acceptedAnswer": { "@type": "Answer", "text": "It adds less-visited stops to the usual visit." } }
                ] },
            };

        case "amman-travel-guide-2026":
            return {
                title: "Amman Travel Guide 2026",
                description: "Jordan's capital is a practical base for Petra, the Dead Sea, and Jerash, with its own Roman-era Citadel and food scene worth a day or two.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/760db9594b9993773c0e48586149d4beb8eecfe6b84ff4a3644e828e6496d846.jpg",
                sections: [
                    { title: "Why Visit Amman", content: "Most visitors use Amman as a base for Jordan's bigger-name sites (Petra, Dead Sea, Jerash), but the city itself has the Citadel, Roman Theatre, downtown souks, and an increasingly well-regarded food and craft-workshop scene worth a day or two on its own." },
                    { title: "Getting Around", content: "Amman is spread across hills and doesn't have a metro — taxis and ride-hailing (Careem/Uber) are the practical way to get around, since walking between neighborhoods often means steep hills." }
                ],
                faqs: [
                    { q: "Is Amman worth visiting on its own?", a: "Yes, for a day or two, mainly for the Citadel, downtown, and food scene, even beyond its role as a base for Petra/Dead Sea/Jerash." },
                    { q: "How do I get around Amman?", a: "Taxis or ride-hailing apps — the city's hilly layout makes walking between areas impractical." }
                ],
            };

        case "best-time-to-visit-amman":
            return {
                title: "Best Time to Visit Amman",
                description: "Amman has a more temperate, less extreme climate than the Dead Sea or desert areas nearby — timing depends on what else you're combining it with.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/760db9594b9993773c0e48586149d4beb8eecfe6b84ff4a3644e828e6496d846.jpg",
                sections: [
                    { title: "Seasonal Overview", content: "Spring (March-May) and autumn (September-November) are the most comfortable for walking tours and day trips. Summer (June-August) is hot, especially at lower-elevation sites like the Dead Sea and Petra; winter can be cold and occasionally snowy in Amman itself despite the desert reputation." }
                ],
                faqs: [
                    { q: "What is the best time to visit Amman?", a: "Spring or autumn for the most comfortable weather across both the city and day-trip destinations." },
                    { q: "Does it snow in Amman?", a: "Occasionally in winter, despite the region's desert reputation — Amman sits at a higher elevation than nearby desert areas." }
                ],
            };

        case "amman-1-day-itinerary":
            return {
                title: "Amman 1-Day Itinerary",
                description: "A realistic one-day plan for Amman if you're not spending extra time on a Petra or Dead Sea day trip.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/760db9594b9993773c0e48586149d4beb8eecfe6b84ff4a3644e828e6496d846.jpg",
                sections: [
                    { title: "Morning", content: "Start at the Citadel for views over the city, then walk down to the Roman Theatre below." },
                    { title: "Afternoon", content: "Explore downtown's souks and art trail, stopping for a craft workshop (pottery, calligraphy, or glass painting) if that interests you." },
                    { title: "Evening", content: "Finish with a food tour or a sit-down dinner at one of downtown's well-known local restaurants." }
                ],
                faqs: [
                    { q: "Can Amman be seen in one day?", a: "Yes, the Citadel, Roman Theatre, and downtown souks are all walkable within a day." },
                    { q: "What's a must-do in Amman in one day?", a: "The Citadel and Roman Theatre, plus a stop in the downtown souks." }
                ],
            };

        case "is-amman-safe":
            return {
                title: "Is Amman Safe for Tourists?",
                description: "An honest look at safety in Amman, Jordan's capital.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/760db9594b9993773c0e48586149d4beb8eecfe6b84ff4a3644e828e6496d846.jpg",
                sections: [
                    { title: "The Short Answer", content: "Amman is widely considered one of the safer capitals in the wider region for tourists, with low rates of violent crime against visitors. Standard city precautions (watch belongings in crowded souks, use licensed taxis or ride-hailing) are sufficient." }
                ],
                faqs: [
                    { q: "Is Amman safe for tourists?", a: "Yes, generally considered one of the safer regional capitals, with standard city precautions sufficient." }
                ],
            };

        case "amman-food-guide":
            return {
                title: "Amman Food Guide",
                description: "What to eat in Amman, from Jordan's national dish to downtown's street-food scene.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/9f6959736150a250f95d60cdce93801897cd14fd2a2fa48836a05d77846078bb.jpeg",
                sections: [
                    { title: "Local Specialties", content: "Mansaf (lamb in a fermented yogurt sauce over rice) is Jordan's national dish, usually saved for special occasions but findable in some restaurants. Downtown's street food scene includes falafel, hummus, and knafeh (a sweet cheese pastry) — look for the long-running local spots rather than tourist-facing cafes." }
                ],
                faqs: [
                    { q: "What is Jordan's national dish?", a: "Mansaf, lamb served in a fermented yogurt sauce over rice." },
                    { q: "What should I eat in downtown Amman?", a: "Falafel, hummus, and knafeh from long-running local spots." }
                ],
            };

        case "amman-to-petra-guide":
            return {
                title: "Amman to Petra: How to Get There",
                description: "The practical options for travelling between Amman and Petra.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/82ef9760d871279a97dee75abf185d5f51fe86fb89bb78c3db2dd6cb68ab7243.jpeg",
                sections: [
                    { title: "Getting There", content: "Petra is roughly a 3-hour drive south of Amman via the Desert Highway. A private day trip or multi-day tour with a driver is the most common way to go; public buses (JETT) also run the route but on a far more limited schedule." },
                    { title: "Day Trip vs. Overnight", content: "A day trip is doable but long (6+ hours of driving round trip). Staying overnight near Petra gives you more unhurried time at the site, and is the only way to see Petra by Night." }
                ],
                faqs: [
                    { q: "How long does it take to get from Amman to Petra?", a: "Roughly 3 hours by road each way." },
                    { q: "Should I day-trip Petra from Amman or stay overnight?", a: "An overnight stay gives more unhurried time and access to Petra by Night; a day trip works if time is tight." }
                ],
            };

        case "best-jeep-tour-wadi-rum":
            return {
                title: "Which Is the Best Jeep Tour in Wadi Rum?",
                seoTitle: "Best Wadi Rum Jeep Tour 2026 | Honest Comparison",
                description: "Compare real Wadi Rum jeep tours for travellers already based in the desert — from a quick 2-hour highlights ride to a full-day tour with traditional lunch.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/5c4ffd51558dd3f1.jpeg",
                sections: [
                    { title: "The Short Answer", content: "For travellers already in Wadi Rum (rather than day-tripping from Amman, Petra, or Aqaba), jeep tour length is the main choice — from a quick 2-hour highlights loop to a full day covering more of the desert's rock formations and canyons.", tourCard: { slug: "2h-jeep-tour-morning-or-sunset-wadi-rum-desert", title: "2H Jeep Tour Morning or Sunset Wadi Rum Desert Highlights", description: "A quick 2-hour jeep tour of Wadi Rum's highlights.", price: "From $37", duration: "2 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/5c4ffd51558dd3f1.jpeg" } },
                    { title: "Best Mid-Length: 4-Hour Highlights Tour", content: "A longer version covering more ground than the 2-hour option without committing to a full day.", tourCard: { slug: "wadi-rum-highlights-4-hour-jeep-tour-morning-or", title: "Wadi Rum Highlights: 4-Hour Jeep Tour - Morning or Sunset", description: "A 4-hour jeep tour covering more of Wadi Rum's highlights.", price: "From $63", duration: "4 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/8286674f5db95745.jpeg" } },
                    { title: "Best Full Day: Full Day Jeep Tour with Traditional Lunch", content: "This covers the most ground in a single day, with a traditional Bedouin lunch included partway through.", tourCard: { slug: "wadi-rum-desert-full-day-jeep-tour-traditional", title: "Wadi Rum Desert: Full Day Jeep Tour & Traditional Lunch", description: "A full-day jeep tour with a traditional Bedouin lunch.", price: "From $74", duration: "8.5 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/f8bb3ca3f12128dad371b63c89c811596cb98d3fc8506aad4226e9d6d02de572.png" } },
                    { title: "Practical Tips", content: "Morning and sunset are both offered for shorter tours — sunset is more atmospheric for photos, morning is cooler and less crowded at the main stops." }
                ],
                faqs: [
                    { q: "What is the best jeep tour in Wadi Rum?", a: "A 2-hour tour for a quick highlights loop, or a full day for the most comprehensive desert experience." },
                    { q: "Morning or sunset jeep tour?", a: "Sunset is more atmospheric for photos; morning is cooler and less crowded." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "What is the best jeep tour in Wadi Rum?", "acceptedAnswer": { "@type": "Answer", "text": "A 2-hour tour for quick highlights, or a full day for the most comprehensive trip." } },
                    { "@type": "Question", "name": "Morning or sunset?", "acceptedAnswer": { "@type": "Answer", "text": "Sunset for photos, morning for fewer crowds." } }
                ] },
            };

        case "best-overnight-camping-tour-wadi-rum":
            return {
                title: "Which Is the Best Overnight Camping Experience in Wadi Rum?",
                seoTitle: "Best Wadi Rum Overnight Camping 2026 | Comparison",
                description: "Compare real overnight camping tours in Wadi Rum — a straightforward full-day-plus-overnight package versus one with meals and extended stay.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/d2c97fa689c6f9bdf719c25cd0927ef8e0a05a701285f732afc62c37b18da939.jpeg",
                sections: [
                    { title: "The Short Answer", content: "An overnight stay in a Bedouin-style desert camp is arguably the single best way to experience Wadi Rum — the stars here are genuinely spectacular given minimal light pollution, and most tours combine the camp stay with a jeep tour and meals.", tourCard: { slug: "full-day-wadi-rum-tour-with-overnight-under-the", title: "Full-Day Wadi Rum Tour with Overnight Under the Stars", description: "A full-day tour with an overnight desert camp stay.", price: "From $72", duration: "1 day", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/d2c97fa689c6f9bdf719c25cd0927ef8e0a05a701285f732afc62c37b18da939.jpeg" } },
                    { title: "Best with Full Meals: Jeep Tour, Meals & Overnight Stay", content: "This bundles meals more explicitly into the overnight package, removing any guesswork about what's included for food.", tourCard: { slug: "wadi-rum-full-day-jeep-tour-meals-overnight-stay", title: "Wadi Rum Full-Day Jeep Tour, Meals & Overnight Stay", description: "A full-day jeep tour with meals and overnight camp stay.", price: "From $115", duration: "1 day", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/cdc525ace646978cd60d27adf5bd4f6c7b054150c177b86df9e7c49f85d37b4d.jpeg" } },
                    { title: "Practical Tips", content: "Desert nights get genuinely cold even in summer — bring warm layers regardless of season, since camps are usually equipped but temperature swings are significant." }
                ],
                faqs: [
                    { q: "What is the best overnight camping experience in Wadi Rum?", a: "A standard overnight package is good value; add explicit full-meal inclusion if you want certainty on food." },
                    { q: "Is it cold at night in the desert?", a: "Yes, genuinely cold even in summer — bring warm layers." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "What is the best overnight camping experience?", "acceptedAnswer": { "@type": "Answer", "text": "A standard overnight package, or one with explicit full meals." } },
                    { "@type": "Question", "name": "Is it cold at night?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, even in summer — bring warm layers." } }
                ] },
            };

        case "best-camel-tour-wadi-rum":
            return {
                title: "Which Is the Best Camel Tour in Wadi Rum?",
                seoTitle: "Best Wadi Rum Camel Tour 2026 | Honest Comparison",
                description: "Compare real camel tours in Wadi Rum — a sunset/sunrise 2-hour ride versus a full-day camel trek.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/64824169875df.jpeg",
                sections: [
                    { title: "The Short Answer", content: "Camel riding is the traditional way to cross Wadi Rum's sands, and the choice is a shorter sunset/sunrise ride versus a full day in the saddle for those who want the genuine Bedouin travel experience.", tourCard: { slug: "wadi-rum-2-hour-camel-ride-at-sunsetsunrise", title: "Wadi Rum: 2-Hour Camel Ride at Sunset/Sunrise Overnight", description: "A 2-hour camel ride timed for sunset or sunrise.", price: "From $103", duration: "1 day", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/64824169875df.jpeg" } },
                    { title: "Best for a Full Experience: Full Day Camel Tour", content: "This extends the ride to a full day, a genuinely more demanding but more complete way to experience traditional desert travel.", tourCard: { slug: "wadi-rum-full-day-camel-tour", title: "Wadi Rum Full Day Camel Tour", description: "A full-day camel tour through Wadi Rum.", price: "From $115", duration: "1 day", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/640991fc06d72.jpeg" } },
                    { title: "Practical Tips", content: "A full day on a camel is genuinely tiring if you're not used to it — the 2-hour version is more realistic for most first-timers." }
                ],
                faqs: [
                    { q: "What is the best camel tour in Wadi Rum?", a: "A 2-hour sunset/sunrise ride for most first-timers, or a full day for the complete traditional experience." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "What is the best camel tour?", "acceptedAnswer": { "@type": "Answer", "text": "A 2-hour ride for most first-timers, or a full day for the complete experience." } }
                ] },
            };

        case "is-khazali-canyon-horseback-worth-it-wadi-rum":
            return {
                title: "Is the Horseback Ride to Khazali Canyon in Wadi Rum Worth It?",
                seoTitle: "Khazali Canyon Horseback Ride Wadi Rum 2026 | Review",
                description: "An honest look at the horseback ride to Khazali Canyon and sand dunes in Wadi Rum.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/5358616d6d3b3d004af5d4e75ce252c18f50a8d06d8abecbb01876b361beb368.jpg",
                sections: [
                    { title: "The Short Answer", content: "Riding by horse to Khazali Canyon (known for ancient Nabataean and Thamudic rock inscriptions) and the surrounding dunes is a genuinely different way to cover the desert compared to jeep or camel, with a distinct pace that suits exploring narrow canyon terrain.", tourCard: { slug: "wadi-rum-horseback-ride-to-khazali-canyon-sand", title: "Wadi Rum: Horseback Ride to Khazali Canyon & Sand Dune", description: "A horseback ride to Khazali Canyon and the surrounding sand dunes.", price: "From $329", duration: "3 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/5358616d6d3b3d004af5d4e75ce252c18f50a8d06d8abecbb01876b361beb368.jpg" } },
                    { title: "Practical Tips", content: "Khazali Canyon's ancient inscriptions are easy to miss without a guide pointing them out — ask about their significance, since they're a genuine archaeological record, not just scenery." }
                ],
                faqs: [
                    { q: "Is the Khazali Canyon horseback ride worth it?", a: "Yes, for a different pace and perspective on the desert, plus access to the canyon's ancient rock inscriptions." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "Is the Khazali Canyon horseback ride worth it?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, for a different pace and access to ancient rock inscriptions." } }
                ] },
            };

        case "wadi-rum-travel-guide-2026":
            return {
                title: "Wadi Rum Travel Guide 2026",
                description: "What visitors need to know about basing themselves in Wadi Rum rather than day-tripping in from Petra, Aqaba, or Amman.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/d2c97fa689c6f9bdf719c25cd0927ef8e0a05a701285f732afc62c37b18da939.jpeg",
                sections: [
                    { title: "Why Stay in Wadi Rum", content: "Staying overnight in Wadi Rum rather than just passing through on a day trip from Petra or Aqaba means genuinely dark skies for stargazing, sunrise/sunset light on the rock formations, and more time to explore by jeep, camel, or horse without rushing back." }
                ],
                faqs: [
                    { q: "Is it worth staying overnight in Wadi Rum?", a: "Yes, for genuinely dark skies, better light for photos, and more time to explore without rushing." }
                ],
            };

        case "best-petra-hidden-route-tour-petra":
            return {
                title: "Which Is the Best Hidden-Route Hike into Petra?",
                seoTitle: "Best Petra Hidden Hike 2026 | Backdoor & Mount Aaron",
                description: "Compare two alternative ways into and around Petra beyond the main entrance — the premium backdoor hike and the Mount Aaron sacred summit adventure.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/ea6e04e7731367c07707b327af1718f0e94343be527529872a525035688bc8d0.jpg",
                sections: [
                    { title: "The Short Answer", content: "Beyond the main Siq entrance, two hiking routes offer a genuinely different Petra experience — a premium backdoor approach avoiding the crowds, or a summit hike to the shrine of Mount Aaron.", tourCard: { slug: "from-amman-premium-petra-backdoor-guided-hike", title: "From Amman: Premium Petra Backdoor Guided Hike with Lunch", description: "A guided hike into Petra via the backdoor route.", price: "From $573", duration: "12 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/ea6e04e7731367c07707b327af1718f0e94343be527529872a525035688bc8d0.jpg" } },
                    { title: "Also Via the Back Entrance: Private Guided Tour", content: "A shorter, more affordable version of the backdoor route, also avoiding the main entrance crowds.", tourCard: { slug: "petra-private-guided-tour-via-the-back-entrance", title: "Petra: Private Guided Tour via the Back Entrance with Pickup", description: "A private guided tour of Petra via the back entrance.", price: "From $458", duration: "6 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/4408dac693e09246a0fc06ebba681f0e51db6a303a6b523f630da865ec03069e.jpg" } },
                    { title: "For a Sacred Summit: Mount Aaron Adventure", content: "This hike climbs to the shrine of Mount Aaron (Jabal Haroun), revered as the burial place of the Prophet Aaron in Islamic and Jewish tradition, with panoramic views over the Petra region.", tourCard: { slug: "petra-mount-aaron-sacred-summit-adventure", title: "Petra & Mount Aaron: Sacred Summit Adventure", description: "A hike to the summit of Mount Aaron near Petra.", price: "From $430", duration: "10 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/6e80b2e9342e91065715278af9f1b88f87bc3307c825e7be5c9fe0f55415f7ba.jpeg" } },
                    { title: "Practical Tips", content: "These hiking routes require decent fitness and proper footwear — they are a different experience from a standard Siq-entrance Petra visit, not a replacement for it." }
                ],
                faqs: [
                    { q: "What is the Petra backdoor hike?", a: "A guided hiking route into Petra avoiding the main Siq entrance, reducing crowds." },
                    { q: "What is Mount Aaron?", a: "A summit near Petra revered as the burial place of the Prophet Aaron, reachable by a dedicated hike." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "What is the Petra backdoor hike?", "acceptedAnswer": { "@type": "Answer", "text": "A guided hiking route into Petra avoiding the main Siq entrance." } },
                    { "@type": "Question", "name": "What is Mount Aaron?", "acceptedAnswer": { "@type": "Answer", "text": "A summit near Petra revered as the burial place of the Prophet Aaron." } }
                ] },
            };

        case "is-petra-museum-tour-worth-it-petra":
            return {
                title: "Is the Petra & Petra Museum Day Trip Worth It?",
                seoTitle: "Petra Museum Day Trip 2026 | Honest Review",
                description: "An honest look at the Petra Museum add-on, which houses artifacts recovered from the ancient site itself.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/9cfa4c1fdbb248307b9fc108c967ff9627782becb0e0212c71c8d827c27dbc09.jpg",
                sections: [
                    { title: "The Short Answer", content: "The Petra Museum, near the visitor center, houses artifacts actually excavated from the site — a worthwhile add-on for understanding what you're seeing among the ruins, rather than a separate attraction on its own.", tourCard: { slug: "petra-petra-museum-shared-or-private-day-trip", title: "Petra & Petra Museum: Shared or Private Day Trip from Amman", description: "A day trip combining Petra with the Petra Museum.", price: "From $64", duration: "12 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/9cfa4c1fdbb248307b9fc108c967ff9627782becb0e0212c71c8d827c27dbc09.jpg" } },
                    { title: "Practical Tips", content: "Visiting the museum first, before walking into the site, gives useful context for the carvings and tombs you'll see later in the day." }
                ],
                faqs: [
                    { q: "Is the Petra Museum worth visiting?", a: "Yes, as a context-setting add-on before exploring the site, since it houses artifacts excavated from Petra itself." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "Is the Petra Museum worth visiting?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, as context before exploring the site." } }
                ] },
            };

        case "best-petra-beyond-the-ruins-experience-petra":
            return {
                title: "Best Ways to Experience Petra Beyond the Ruins Themselves",
                seoTitle: "Petra Pottery Class & VR Experience 2026",
                description: "Compare two unusual Petra experiences beyond walking the site itself — a hands-on pottery class with dinner, and a virtual reality recreation of Nabatean daily life.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/86dac525fb1bb7ab16cde4d12998e1491185c0435d1626d91ceee62c3d6f56e4.jpg",
                sections: [
                    { title: "The Short Answer", content: "Two options go beyond simply walking through the ruins — a hands-on pottery class paired with an Old Town walk and dinner, or a short virtual reality recreation of daily Nabatean life.", tourCard: { slug: "petra-pottery-class-old-town-walk-and-dinner", title: "Petra: Pottery Class, Old Town Walk, and Dinner", description: "A pottery class, Old Town walk, and dinner in Petra.", price: "From $647", duration: "1 day", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/86dac525fb1bb7ab16cde4d12998e1491185c0435d1626d91ceee62c3d6f56e4.jpg" } },
                    { title: "Quick and Immersive: Virtual Reality Nabateans Experience", content: "A short 20-minute VR experience recreating daily life among the Nabateans who built Petra, a quick add-on rather than a full activity.", tourCard: { slug: "petra-virtual-reality-nabateans-daily-life-3d-8k", title: "Petra: Virtual Reality Nabateans Daily Life 3D 8K", description: "A VR recreation of Nabatean daily life in Petra.", price: "From $20", duration: "20 minutes", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/72f247e1d66e127244e8002b36d518e33bcdae720ef265d92e233f6cb99901ee.jpeg" } },
                    { title: "Practical Tips", content: "The VR experience works well as a short add-on either before or after the main site visit, while the pottery class is a half-day-plus commitment best planned as its own evening." }
                ],
                faqs: [
                    { q: "What are the Nabateans?", a: "The ancient civilization that carved and built Petra." },
                    { q: "Is the Petra pottery class worth it?", a: "Yes, for a hands-on cultural experience beyond simply viewing the ruins." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "What are the Nabateans?", "acceptedAnswer": { "@type": "Answer", "text": "The ancient civilization that carved and built Petra." } }
                ] },
            };

        default:
            return null;
    }
}

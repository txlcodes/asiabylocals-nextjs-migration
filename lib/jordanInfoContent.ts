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

        default:
            return null;
    }
}

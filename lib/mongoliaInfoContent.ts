import { CityInfoData } from './cityInfoContent';

export function getMongoliaInfoContent(slug: string): CityInfoData | null {
    switch (slug) {
        case "best-terelj-national-park-day-tour-ulaanbaatar":
            return {
                title: "Which Is the Best Terelj National Park Day Tour from Ulaanbaatar?",
                seoTitle: "Best Terelj National Park Day Tour 2026 | Comparison",
                description: "Compare real Terelj National Park day trips from Ulaanbaatar — from a $46 budget tour via the Chinggis Khaan Statue to combos with Turtle Rock and horse riding.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/7ea09ef481770dff40c2a36beeb9a51deaba68c899ba181778d779d9b3136617.jpg",
                sections: [
                    { title: "The Short Answer", content: "Gorkhi-Terelj National Park's dramatic granite rock formations are usually paired with the giant Chinggis Khaan Equestrian Statue on the way out of the city — nearly every tour covers both, differing mainly in pace and extra stops like Turtle Rock or horse riding.", tourCard: { slug: "day-tour-terelj-national-park-via-chinggis-khaan", title: "Day tour Terelj National Park Via Chinggis Khaan Statue", description: "A standard day trip to Terelj via the Chinggis Khaan Statue.", price: "From $46", duration: "1 day", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/7ea09ef481770dff40c2a36beeb9a51deaba68c899ba181778d779d9b3136617.jpg" } },
                    { title: "Cheapest: Standard Day Tour", content: "At $46, this covers the full statue-plus-park route at the lowest price point among comparable tours.", tourCard: { slug: "day-tour-terelj-national-park-via-chinggis-khaan", title: "Day tour Terelj National Park Via Chinggis Khaan Statue", description: "The budget version of the classic combo.", price: "From $46", duration: "1 day", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/7ea09ef481770dff40c2a36beeb9a51deaba68c899ba181778d779d9b3136617.jpg" } },
                    { title: "Best with Turtle Rock: Statue and Turtle Rock Day Tour", content: "This version adds a stop at Turtle Rock, one of Terelj's most photographed formations, to the standard statue visit.", tourCard: { slug: "ulaanbaatar-chinggis-khaan-statue-and-turtle-rock", title: "Ulaanbaatar: Chinggis Khaan Statue and Turtle Rock Day Tour", description: "The statue combo with a Turtle Rock stop added.", price: "From $103", duration: "7 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/386bf96be68dc4ba33f7d0b3b5a6c23c69483913de23a2f87d6808498b84cc97.jpg" } },
                    { title: "Most Popular: Statue & Terelj Day Tour", content: "The most commonly booked version of this combo, with slightly different operator inclusions and pacing than the budget option.", tourCard: { slug: "chinggis-khan-statue-terelj-national-park-day-tour", title: "Chinggis Khan Statue & Terelj National Park Day Tour", description: "A popular standard version of the statue and park combo.", price: "From $90", duration: "6 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/0c6fe149a9c1c975a399fc93df53675fc26cc3bd099733e5d151e4630cbdc248.jpeg" } },
                    { title: "Practical Tips", content: "The Chinggis Khaan Statue (40m tall, the world's largest equestrian statue) has a small museum and observation deck inside the horse's head — worth the extra time if your tour allows it. Terelj's rock formations are a short walk from the road, so comfortable shoes are enough; no serious hiking gear needed for the standard day-trip stops." }
                ],
                faqs: [
                    { q: "What is the best Terelj National Park day tour from Ulaanbaatar?", a: "A standard day tour via the Chinggis Khaan Statue suits most visitors; add Turtle Rock for more scenery." },
                    { q: "How far is Terelj National Park from Ulaanbaatar?", a: "About 1.5-2 hours by road, making it a comfortable day trip." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "What is the best Terelj National Park day tour?", "acceptedAnswer": { "@type": "Answer", "text": "A standard day tour via the Chinggis Khaan Statue." } },
                    { "@type": "Question", "name": "How far is Terelj from Ulaanbaatar?", "acceptedAnswer": { "@type": "Answer", "text": "About 1.5-2 hours by road." } }
                ] },
            };

        case "best-city-tour-ulaanbaatar":
            return {
                title: "Which Is the Best Ulaanbaatar City Tour?",
                seoTitle: "Best Ulaanbaatar City Tour 2026 | Honest Comparison",
                description: "Compare real Ulaanbaatar city tours — from a private custom tour with a historian guide to the ultimate private tour with hotel pickup.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/52c7fd430d71b174e2ade47daaf842111ba394e7fa1d205f6013c6cd1ad25b6d.jpeg",
                sections: [
                    { title: "The Short Answer", content: "Ulaanbaatar's city tours usually cover Sukhbaatar Square, Gandan Monastery, and the National Museum, with the main differences being private vs. group format and whether a historian-level guide is included.", tourCard: { slug: "ulaanbaatar-private-custom-city-tour-with", title: "Ulaanbaatar: Private Custom City Tour with Historian Guide", description: "A private city tour with a historian-level guide.", price: "From $116", duration: "4 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/52c7fd430d71b174e2ade47daaf842111ba394e7fa1d205f6013c6cd1ad25b6d.jpeg" } },
                    { title: "Best for Depth: Private Custom Tour with Historian Guide", content: "This version pairs you with a historian-level guide for deeper context on the city's Soviet and nomadic history than a standard city tour.", tourCard: { slug: "ulaanbaatar-private-custom-city-tour-with", title: "Ulaanbaatar: Private Custom City Tour with Historian Guide", description: "The history-focused private city tour.", price: "From $116", duration: "4 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/52c7fd430d71b174e2ade47daaf842111ba394e7fa1d205f6013c6cd1ad25b6d.jpeg" } },
                    { title: "Best Full-Day Option: Ultimate Private City Tour with Hotel Pickup", content: "A longer, more comprehensive private city tour with hotel pickup included, good for covering more ground in one day.", tourCard: { slug: "ultimate-ulaanbaatar-private-city-tour-with-hotel", title: "Ultimate Ulaanbaatar Private City Tour with Hotel Pickup", description: "A full-day private city tour with hotel pickup.", price: "From $156", duration: "1 day", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/d47c6169a786f4cd2737af28987160206d6cf5f8ac5bf4d5f55e0f0ac01e6a3a.jpg" } },
                    { title: "Practical Tips", content: "Gandan Monastery is Mongolia's largest active Buddhist monastery and worth timing your visit for a prayer session if possible — ask your guide about typical timing." }
                ],
                faqs: [
                    { q: "What is the best Ulaanbaatar city tour?", a: "A private tour with a historian guide suits travellers wanting depth; the full-day option covers more ground." },
                    { q: "What does a typical Ulaanbaatar city tour include?", a: "Sukhbaatar Square, Gandan Monastery, and usually the National Museum." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "What is the best Ulaanbaatar city tour?", "acceptedAnswer": { "@type": "Answer", "text": "A private tour with a historian guide." } },
                    { "@type": "Question", "name": "What's included in a typical city tour?", "acceptedAnswer": { "@type": "Answer", "text": "Sukhbaatar Square, Gandan Monastery, and the National Museum." } }
                ] },
            };

        case "best-hustai-national-park-tour-ulaanbaatar":
            return {
                title: "Which Is the Best Hustai National Park Tour from Ulaanbaatar?",
                seoTitle: "Best Hustai National Park Tour 2026 | Comparison",
                description: "Compare real Hustai National Park tours from Ulaanbaatar — a standard day tour versus a sunset-timed wild horse viewing trip.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/06383af83d3e4a5283112a24d70a3f5924fff96b3a23855b0863240ed6563ff0.jpeg",
                sections: [
                    { title: "The Short Answer", content: "Hustai is the best place near Ulaanbaatar to see wild Przewalski's horses, reintroduced after near-extinction. Timing matters here — a sunset-focused tour improves your odds of seeing the horses active and grazing.", tourCard: { slug: "hustai-national-park-day-tour", title: "Hustai National Park Day Tour", description: "A standard day tour to see wild Przewalski's horses.", price: "From $195", duration: "7 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/06383af83d3e4a5283112a24d70a3f5924fff96b3a23855b0863240ed6563ff0.jpeg" } },
                    { title: "Standard Day Tour", content: "Covers the park and its wildlife-viewing areas during the day at a straightforward price.", tourCard: { slug: "hustai-national-park-day-tour", title: "Hustai National Park Day Tour", description: "The standard daytime Hustai visit.", price: "From $195", duration: "7 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/06383af83d3e4a5283112a24d70a3f5924fff96b3a23855b0863240ed6563ff0.jpeg" } },
                    { title: "Best for Wildlife Viewing: Wild Horse Sunset Tour", content: "Timed for sunset, when the wild horses are typically most active — a genuinely better wildlife-viewing window than a midday visit.", tourCard: { slug: "hustai-national-park-wild-horse-sunset-tour", title: "Hustai National Park Wild Horse Sunset Tour", description: "A sunset-timed tour for better wild horse viewing odds.", price: "From $228", duration: "8 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/8d500551b013724a737903ae6ed3cc52a2a3a23657316c232d541585d84f3204.jpg" } },
                    { title: "Practical Tips", content: "Bring binoculars if you have them — the horses roam a wide steppe area and aren't always close to the viewing paths." }
                ],
                faqs: [
                    { q: "What is the best Hustai National Park tour from Ulaanbaatar?", a: "A sunset-timed tour gives better odds of seeing the wild horses active." },
                    { q: "What animals can be seen at Hustai National Park?", a: "Wild Przewalski's horses, reintroduced after near-extinction, plus other steppe wildlife." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "What is the best Hustai National Park tour?", "acceptedAnswer": { "@type": "Answer", "text": "A sunset-timed tour for better wild horse viewing." } },
                    { "@type": "Question", "name": "What animals can be seen there?", "acceptedAnswer": { "@type": "Answer", "text": "Wild Przewalski's horses and other steppe wildlife." } }
                ] },
            };

        case "best-gobi-desert-multi-day-tour-ulaanbaatar":
            return {
                title: "Which Is the Best Gobi Desert Multi-Day Tour from Ulaanbaatar?",
                seoTitle: "Best Gobi Desert Tour from Ulaanbaatar 2026 | Comparison",
                description: "Compare real multi-day Gobi Desert tours from Ulaanbaatar — from a 1-day mini Gobi taste to a full 6-day camel-trekking expedition.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/da17bafe212f2d4fd77bfdf5ddd1560a27a85980c466046d3076c6c29e720c86.jpeg",
                sections: [
                    { title: "The Short Answer", content: "The real Gobi Desert is far from Ulaanbaatar, so trips range from a 1-day 'mini Gobi' taste near the city to full multi-day expeditions flying or driving into the actual desert. Decide based on how much time you have and whether you want the real Gobi or a convenient preview.", tourCard: { slug: "1-day-mini-gobi-tour-with-camel-ride-lunch", title: "1 day: Mini Gobi Tour with Camel Ride & Lunch", description: "A 1-day taste of Gobi-style scenery near Ulaanbaatar.", price: "From $364", duration: "15 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/da17bafe212f2d4fd77bfdf5ddd1560a27a85980c466046d3076c6c29e720c86.jpeg" } },
                    { title: "Quickest Taste: 1-Day Mini Gobi Tour", content: "This visits a sand-dune area resembling the Gobi without the long travel to the actual desert — a compromise for limited time.", tourCard: { slug: "1-day-mini-gobi-tour-with-camel-ride-lunch", title: "1 day: Mini Gobi Tour with Camel Ride & Lunch", description: "A convenient mini-Gobi day trip with camel riding.", price: "From $364", duration: "15 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/da17bafe212f2d4fd77bfdf5ddd1560a27a85980c466046d3076c6c29e720c86.jpeg" } },
                    { title: "Best Short Multi-Day: 2-Day Kharkhorin & Semi-Gobi", content: "A 2-day version that reaches semi-Gobi terrain and the ancient capital Kharkhorin, a reasonable middle ground on time.", tourCard: { slug: "from-ub-kharkhorin-semi-gobi-2-days-tour", title: "From UB: Kharkhorin & Semi Gobi 2-Days Tour", description: "A 2-day trip covering semi-Gobi terrain and Kharkhorin.", price: "From $455", duration: "2 days", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/97bd345a6e5ae899338c3933735a7b1067e9ddf3d61acd294b439da845b9ef61.jpg" } },
                    { title: "Best Full Experience: 6-Day Gobi Desert Camel Trek", content: "This reaches the actual Gobi Desert with proper camel trekking — the real thing rather than a nearby substitute, for travellers who have the time.", tourCard: { slug: "mongolia-6-day-gobi-desert-tour-with-camel", title: "Mongolia: 6-Day Gobi Desert Tour with Camel Trekking", description: "A full 6-day expedition into the real Gobi Desert with camel trekking.", price: "From $2587", duration: "6 days", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/ecdf5fdc96514c043ea3118ad628a03b92ef073e2d6bba54b3c2f2160eb1f095.jpeg" } },
                    { title: "Practical Tips", content: "The 'mini Gobi' tours visit sand dunes resembling the Gobi but are not the actual Gobi Desert — be clear on this distinction when booking if authenticity matters to you. Multi-day Gobi trips typically involve long driving days between camps, so pack for comfort on bumpy roads." }
                ],
                faqs: [
                    { q: "What is the best Gobi Desert tour from Ulaanbaatar?", a: "A 1-day mini Gobi tour works for limited time; a 6-day camel trek reaches the real Gobi Desert." },
                    { q: "Is the 'mini Gobi' the same as the real Gobi Desert?", a: "No, it's a nearby sand-dune area that resembles the Gobi — the real desert requires a multi-day trip." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "What is the best Gobi Desert tour from Ulaanbaatar?", "acceptedAnswer": { "@type": "Answer", "text": "A 1-day mini Gobi tour for limited time; a 6-day camel trek for the real Gobi." } },
                    { "@type": "Question", "name": "Is mini Gobi the same as the real Gobi?", "acceptedAnswer": { "@type": "Answer", "text": "No, it's a nearby substitute — the real desert needs a multi-day trip." } }
                ] },
            };

        case "best-kharkhorin-central-mongolia-tour-ulaanbaatar":
            return {
                title: "Which Is the Best Kharkhorin & Central Mongolia Tour from Ulaanbaatar?",
                seoTitle: "Best Kharkhorin Central Mongolia Tour 2026 | Comparison",
                description: "Compare real Kharkhorin and Central Mongolia tours from Ulaanbaatar — from a 2-day semi-Gobi trip to a full 3-day guided Central Mongolia circuit.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/73ae1ab3cee3c94f978ef16282561de17b6cb693f63f6c7ce9e7c80e704af786.jpg",
                sections: [
                    { title: "The Short Answer", content: "Kharkhorin was the 13th-century capital of the Mongol Empire, and tours here usually combine it with Elsen Tasarkhai's sand dunes and other Central Mongolia highlights. The main choice is 2 days (a quicker loop) versus 3 days (a fuller circuit).", tourCard: { slug: "from-ub-kharkhorin-semi-gobi-2-days-tour", title: "From UB: Kharkhorin & Semi Gobi 2-Days Tour", description: "A 2-day trip covering Kharkhorin and semi-Gobi dunes.", price: "From $455", duration: "2 days", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/97bd345a6e5ae899338c3933735a7b1067e9ddf3d61acd294b439da845b9ef61.jpg" } },
                    { title: "Quickest Option: 2-Day Kharkhorin & Semi Gobi", content: "This covers the ancient capital and nearby dunes in the shortest multi-day format available.", tourCard: { slug: "from-ub-kharkhorin-semi-gobi-2-days-tour", title: "From UB: Kharkhorin & Semi Gobi 2-Days Tour", description: "The quickest way to see Kharkhorin and semi-Gobi terrain.", price: "From $455", duration: "2 days", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/97bd345a6e5ae899338c3933735a7b1067e9ddf3d61acd294b439da845b9ef61.jpg" } },
                    { title: "Best Fuller Circuit: 3-Day Central Mongolia Guided Tour", content: "This extends the trip to 3 days, adding more time at each stop and typically a wider loop through Central Mongolia's highlights.", tourCard: { slug: "central-mongolia-3-day-guided-tour", title: "Central Mongolia 3-Day Guided Tour", description: "A fuller 3-day circuit through Central Mongolia.", price: "From $455", duration: "3 days", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/73ae1ab3cee3c94f978ef16282561de17b6cb693f63f6c7ce9e7c80e704af786.jpg" } },
                    { title: "Practical Tips", content: "Kharkhorin's Erdene Zuu Monastery, built from the ruins of the old capital, is the main historic site — most tours build in dedicated time there rather than just driving past." }
                ],
                faqs: [
                    { q: "What is the best Kharkhorin tour from Ulaanbaatar?", a: "A 2-day trip works for a quick loop; 3 days gives a fuller Central Mongolia circuit." },
                    { q: "What is Kharkhorin known for?", a: "It was the 13th-century capital of the Mongol Empire, now home to Erdene Zuu Monastery." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "What is the best Kharkhorin tour?", "acceptedAnswer": { "@type": "Answer", "text": "2 days for a quick loop, 3 days for a fuller circuit." } },
                    { "@type": "Question", "name": "What is Kharkhorin known for?", "acceptedAnswer": { "@type": "Answer", "text": "The 13th-century Mongol Empire capital." } }
                ] },
            };

        case "best-khuvsgul-lake-tour-ulaanbaatar":
            return {
                title: "Which Is the Best Khuvsgul Lake Tour from Ulaanbaatar?",
                seoTitle: "Best Khuvsgul Lake Tour 2026 | Honest Comparison",
                description: "Compare real Khuvsgul Lake tours from Ulaanbaatar — a 5-day trip combining the frozen lake with local culture versus a dedicated reindeer-herder visit.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/eda2910a5c30c18131421c55152441f2f0b23c2c6a76557dd4f2d743a83ceb53.png",
                sections: [
                    { title: "The Short Answer", content: "Khuvsgul Lake, Mongolia's 'Blue Pearl,' is far north and requires a multi-day trip. The two real options here differ in focus — one is a broader 5-day lake-and-culture trip, the other a dedicated visit to Tsaatan reindeer herders.", tourCard: { slug: "ulaanbaatar-5-day-khuvsgul-frozen-lake-local", title: "Ulaanbaatar: 5-Day Khuvsgul Frozen Lake & Local Culture Tour", description: "A 5-day trip to Khuvsgul Lake with local culture stops.", price: "From $2340", duration: "5 days", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/eda2910a5c30c18131421c55152441f2f0b23c2c6a76557dd4f2d743a83ceb53.png" } },
                    { title: "Best Rounded Trip: 5-Day Khuvsgul & Local Culture", content: "This balances lake scenery with broader local culture stops across the 5-day itinerary.", tourCard: { slug: "ulaanbaatar-5-day-khuvsgul-frozen-lake-local", title: "Ulaanbaatar: 5-Day Khuvsgul Frozen Lake & Local Culture Tour", description: "A balanced 5-day Khuvsgul Lake and culture trip.", price: "From $2340", duration: "5 days", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/eda2910a5c30c18131421c55152441f2f0b23c2c6a76557dd4f2d743a83ceb53.png" } },
                    { title: "Best for a Unique Culture: Reindeer Herders Tour", content: "This focuses specifically on visiting the Tsaatan, one of the world's last reindeer-herding communities, near the lake — a genuinely rare cultural encounter.", tourCard: { slug: "khuvsgul-lake-tsaatan-reindeer-herders-tour", title: "Khuvsgul Lake & Tsaatan Reindeer Herders Tour", description: "A tour combining Khuvsgul Lake with a Tsaatan reindeer-herder visit.", price: "From $2197", duration: "6 days", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/eb5168f5437c04a21e2b01b6fcca323d6f92e2f344048eba3c6db7fd1b0f3ef0.jpg" } },
                    { title: "Practical Tips", content: "Khuvsgul Lake is remote and cold even in summer — proper layered clothing matters regardless of season. These trips are a real time commitment (5-6 days), so plan your overall Mongolia itinerary around this being the single biggest block of time." }
                ],
                faqs: [
                    { q: "What is the best Khuvsgul Lake tour from Ulaanbaatar?", a: "A 5-day trip suits general sightseeing; the reindeer-herders tour suits those wanting a rare cultural encounter." },
                    { q: "How far is Khuvsgul Lake from Ulaanbaatar?", a: "Far north, requiring a multi-day trip of 5-6 days round trip." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "What is the best Khuvsgul Lake tour?", "acceptedAnswer": { "@type": "Answer", "text": "A 5-day trip for general sightseeing, or the reindeer-herders tour for culture." } },
                    { "@type": "Question", "name": "How far is Khuvsgul Lake?", "acceptedAnswer": { "@type": "Answer", "text": "Far north, requiring a 5-6 day multi-day trip." } }
                ] },
            };

        case "best-horseback-riding-tour-ulaanbaatar":
            return {
                title: "Which Is the Best Horseback Riding Tour from Ulaanbaatar?",
                seoTitle: "Best Horseback Riding Tour Ulaanbaatar 2026 | Comparison",
                description: "Compare real horseback riding experiences from Ulaanbaatar — a day lesson and grassland ride versus Terelj-based multi-day horse trekking.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/1d3f2e8bf20cb7ebd66cadc23fe5ddc4769dfc110dd9a2126dce0c23375c478c.png",
                sections: [
                    { title: "The Short Answer", content: "Mongolia is one of the world's best places for horseback riding given its nomadic horse culture. A day lesson and grassland ride suits beginners or those with limited time; multi-day horse trekking in Terelj suits travellers who want a real riding-focused trip.", tourCard: { slug: "mongolia-horseback-riding-day-lesson-and", title: "Mongolia: Horseback Riding Day Lesson and Grassland Ride", description: "A day lesson and grassland ride suitable for beginners.", price: "From $286", duration: "12 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/1d3f2e8bf20cb7ebd66cadc23fe5ddc4769dfc110dd9a2126dce0c23375c478c.png" } },
                    { title: "Best for Beginners: Day Lesson and Grassland Ride", content: "Includes a proper lesson before heading out onto the grassland, good for riders with little or no prior experience.", tourCard: { slug: "mongolia-horseback-riding-day-lesson-and", title: "Mongolia: Horseback Riding Day Lesson and Grassland Ride", description: "A beginner-friendly lesson and ride.", price: "From $286", duration: "12 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/1d3f2e8bf20cb7ebd66cadc23fe5ddc4769dfc110dd9a2126dce0c23375c478c.png" } },
                    { title: "Most Immersive: 3-Day Terelj Horse Trek", content: "A dedicated multi-day horse trek through Terelj's terrain, for travellers who want riding to be the core of the trip rather than a single-day activity.", tourCard: { slug: "3-days-horse-trek-tour-in-terelj-national-park", title: "3 days horse trek tour in Terelj national park", description: "A 3-day dedicated horse trekking trip through Terelj.", price: "From $884", duration: "3 days", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/da17bafe212f2d4fd77bfdf5ddd1560a27a85980c466046d3076c6c29e720c86.jpeg" } },
                    { title: "Practical Tips", content: "Mongolian horses are smaller and sturdier than many Western breeds and are generally well-suited to beginners under guidance — don't be intimidated if you've never ridden before." }
                ],
                faqs: [
                    { q: "What is the best horseback riding tour from Ulaanbaatar?", a: "A day lesson suits beginners; a multi-day Terelj trek suits those wanting riding as the main focus." },
                    { q: "Do I need riding experience for Mongolian horseback tours?", a: "No, Mongolian horses are well-suited to beginners and most tours include a lesson." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "What is the best horseback riding tour?", "acceptedAnswer": { "@type": "Answer", "text": "A day lesson for beginners, multi-day trek for a riding-focused trip." } },
                    { "@type": "Question", "name": "Do I need riding experience?", "acceptedAnswer": { "@type": "Answer", "text": "No, most tours include a lesson." } }
                ] },
            };

        case "best-nomad-homestay-experience-ulaanbaatar":
            return {
                title: "Which Is the Best Nomad Homestay Experience from Ulaanbaatar?",
                seoTitle: "Best Nomad Homestay Experience 2026 | Comparison",
                description: "Compare real nomadic homestay experiences from Ulaanbaatar — a 2-day nomadic life experience versus a 4-day authentic homestay near the Mini Gobi.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/40c799c44eb738bb24c3a6365a4e4213c89866c5f4fad9f1a5424673ceb6f3a4.jpg",
                sections: [
                    { title: "The Short Answer", content: "Staying with a nomadic family in a ger is one of Mongolia's most genuine experiences, and the real choice is how long you stay — a 2-day taste versus a fuller 4-day immersion further from the city.", tourCard: { slug: "ulaanbaatar-2-day-nomadic-life-experience-live", title: "Ulaanbaatar: 2-Day Nomadic Life Experience. Live like local", description: "A 2-day nomadic homestay experience.", price: "From $298", duration: "2 days", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/40c799c44eb738bb24c3a6365a4e4213c89866c5f4fad9f1a5424673ceb6f3a4.jpg" } },
                    { title: "Best Short Taste: 2-Day Nomadic Life Experience", content: "A manageable 2-day stay that still gives a genuine sense of daily nomadic life without a long time commitment.", tourCard: { slug: "ulaanbaatar-2-day-nomadic-life-experience-live", title: "Ulaanbaatar: 2-Day Nomadic Life Experience. Live like local", description: "The shorter nomadic homestay option.", price: "From $298", duration: "2 days", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/40c799c44eb738bb24c3a6365a4e4213c89866c5f4fad9f1a5424673ceb6f3a4.jpg" } },
                    { title: "Most Immersive: 4-Day Homestay Near the Mini Gobi", content: "A longer, more remote homestay experience that goes deeper into daily nomadic routines and reaches Mini Gobi scenery.", tourCard: { slug: "4-day-authentic-nomadic-family-homestay-near-the", title: "4-Day Authentic Nomadic Family Homestay near the Mini Gobi", description: "A deeper 4-day nomadic homestay experience.", price: "From $416", duration: "4 days", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/da17bafe212f2d4fd77bfdf5ddd1560a27a85980c466046d3076c6c29e720c86.jpeg" } },
                    { title: "Practical Tips", content: "Expect basic ger accommodation — no private bathroom, often no electricity beyond solar/battery lighting. This is part of the genuine experience, not a flaw, but worth knowing in advance." }
                ],
                faqs: [
                    { q: "What is the best nomad homestay experience from Ulaanbaatar?", a: "A 2-day stay suits limited time; a 4-day homestay gives a deeper immersion." },
                    { q: "What are the accommodation conditions like on a nomad homestay?", a: "Basic — a traditional ger with no private bathroom and limited electricity, typically solar or battery-powered." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "What is the best nomad homestay experience?", "acceptedAnswer": { "@type": "Answer", "text": "A 2-day stay for limited time, 4 days for deeper immersion." } },
                    { "@type": "Question", "name": "What are the accommodation conditions?", "acceptedAnswer": { "@type": "Answer", "text": "Basic ger with no private bathroom and limited electricity." } }
                ] },
            };

        case "is-cooking-class-worth-it-ulaanbaatar":
            return {
                title: "Is a Mongolian Cooking Class in Ulaanbaatar Worth It?",
                seoTitle: "Ulaanbaatar Mongolian Cooking Class 2026 | Honest Review",
                description: "An honest look at Ulaanbaatar's local Mongolian cooking class experiences, held in a real ger home.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/ed6f235fe5ab32d8bad23107cc4435460bf29bc69b8885310b3e8ec6369da2ad.jpeg",
                sections: [
                    { title: "The Short Answer", content: "This class takes place in a real ger home rather than a commercial kitchen, teaching traditional Mongolian dishes like buuz (steamed dumplings) directly from a local family — a genuine cultural experience, not a staged demo.", tourCard: { slug: "ulaanbaatar-local-mongolian-cooking-class-in-a", title: "Ulaanbaatar: local Mongolian Cooking Class in a Ger Home", description: "A hands-on Mongolian cooking class in a real ger home.", price: "From $351", duration: "4 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/ed6f235fe5ab32d8bad23107cc4435460bf29bc69b8885310b3e8ec6369da2ad.jpeg" } },
                    { title: "Practical Tips", content: "There's also a combined walking-tour-plus-cooking-class version if you'd rather pair this with some sightseeing rather than a standalone cooking session." }
                ],
                faqs: [
                    { q: "Is a Mongolian cooking class in Ulaanbaatar worth it?", a: "Yes, especially since it's held in a real ger home rather than a staged kitchen setting." },
                    { q: "What dishes are taught in a Mongolian cooking class?", a: "Traditional dishes like buuz (steamed dumplings) are common." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "Is a Mongolian cooking class worth it?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, especially held in a real ger home." } },
                    { "@type": "Question", "name": "What dishes are taught?", "acceptedAnswer": { "@type": "Answer", "text": "Traditional dishes like buuz dumplings." } }
                ] },
            };

        case "is-eagle-hunting-tour-worth-it-ulaanbaatar":
            return {
                title: "Is the Eagle Hunting Tour in Ulaanbaatar Worth It?",
                seoTitle: "Ulaanbaatar Eagle Hunting Tour 2026 | Honest Review",
                description: "An honest look at Ulaanbaatar's eagle hunting tour with a nomadic guide.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/4941e581d095435bbae6d61f62f73ca84eca9f74ad7d840f2fbf93e10286b912.jpeg",
                sections: [
                    { title: "The Short Answer", content: "This connects you with a nomadic eagle hunter for a hands-on demonstration of a traditional practice usually associated with western Mongolia's Kazakh communities — a notably different cultural angle from the Terelj/statue circuit most visitors stick to.", tourCard: { slug: "ulaanbaatar-eagle-hunting-tour-with-nomadic-tour", title: "Ulaanbaatar: Eagle Hunting Tour with Nomadic tour", description: "A hands-on eagle hunting demonstration with a nomadic guide.", price: "From $2600", duration: "3 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/4941e581d095435bbae6d61f62f73ca84eca9f74ad7d840f2fbf93e10286b912.jpeg" } },
                    { title: "Practical Tips", content: "This is priced well above most Ulaanbaatar activities given the specialized nature of the experience — confirm exactly what's included (transport, the eagle handler's fee, photos) before booking." }
                ],
                faqs: [
                    { q: "Is the eagle hunting tour in Ulaanbaatar worth it?", a: "Yes for travellers specifically interested in this traditional practice, though it's a premium-priced niche experience." },
                    { q: "Is eagle hunting authentic in this tour?", a: "Yes, it connects you with a real nomadic eagle hunter rather than a staged show." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "Is the eagle hunting tour worth it?", "acceptedAnswer": { "@type": "Answer", "text": "Yes for those specifically interested, though it's premium-priced." } },
                    { "@type": "Question", "name": "Is it authentic?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, with a real nomadic eagle hunter." } }
                ] },
            };

        case "is-shamanic-ceremony-worth-it-ulaanbaatar":
            return {
                title: "Is the Mongolian Shamanic Ceremony in Ulaanbaatar Worth It?",
                seoTitle: "Ulaanbaatar Shamanic Ceremony 2026 | Honest Review",
                description: "An honest look at Ulaanbaatar's Mongolian shamanic ceremony and spiritual Q&A experience.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/b509334d11a4fe721c4d2d40523f74e29d1bb837252e10230959c2f3d568a5e3.jpg",
                sections: [
                    { title: "The Short Answer", content: "Shamanism predates Buddhism in Mongolia and is still practiced today. This experience includes an actual ceremony plus a Q&A, offering real insight into a living spiritual tradition rather than a tourist reenactment.", tourCard: { slug: "ulaanbaatar-mongolian-shamanic-ceremony-spiritual", title: "Ulaanbaatar: Mongolian Shamanic Ceremony & Spiritual Q&A", description: "A real shamanic ceremony with a Q&A session.", price: "From $142", duration: "4 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/b509334d11a4fe721c4d2d40523f74e29d1bb837252e10230959c2f3d568a5e3.jpg" } },
                    { title: "Practical Tips", content: "There's also a shorter, more intimate 30-minute one-on-one version with a shaman if a full ceremony feels like more time than you want to commit." }
                ],
                faqs: [
                    { q: "Is the Mongolian shamanic ceremony worth it?", a: "Yes, for travellers interested in Mongolia's living spiritual traditions beyond Buddhism." },
                    { q: "Is shamanism still practiced in Mongolia?", a: "Yes, it predates Buddhism and continues as a living tradition today." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "Is the shamanic ceremony worth it?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, for those interested in Mongolia's living spiritual traditions." } },
                    { "@type": "Question", "name": "Is shamanism still practiced?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, it predates Buddhism and continues today." } }
                ] },
            };

        case "is-market-tour-worth-it-ulaanbaatar":
            return {
                title: "Is the Narantuul Market Tour in Ulaanbaatar Worth It?",
                seoTitle: "Ulaanbaatar Narantuul Market Tour 2026 | Honest Review",
                description: "An honest look at the Narantuul Market Tour, Ulaanbaatar's famous 'Black Market' with a local guide.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/70602b41e7e7f5c85754529951cf6530d5cf1a4a160116211a1c947c9163ba8d.jpg",
                sections: [
                    { title: "The Short Answer", content: "Narantuul (nicknamed the 'Black Market') is Ulaanbaatar's biggest market, selling everything from traditional deel clothing to camel-wool products and household goods. A guided visit helps you navigate it confidently and avoid overpaying.", tourCard: { slug: "ulaanbaatar-narantuul-market-tour-with-local-guide", title: "Ulaanbaatar: Narantuul Market Tour with Local Guide", description: "A guided visit to Ulaanbaatar's largest market.", price: "From $51", duration: "4 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/70602b41e7e7f5c85754529951cf6530d5cf1a4a160116211a1c947c9163ba8d.jpg" } },
                    { title: "Practical Tips", content: "The market is large and can be disorienting without a guide — bring cash since most vendors don't take cards, and expect to bargain." }
                ],
                faqs: [
                    { q: "Is the Narantuul Market tour worth it?", a: "Yes, a local guide makes navigating this large market much easier and helps avoid overpaying." },
                    { q: "What can you buy at Narantuul Market?", a: "Traditional deel clothing, camel-wool products, souvenirs, and household goods." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "Is the Narantuul Market tour worth it?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, a guide makes this large market much easier to navigate." } },
                    { "@type": "Question", "name": "What can you buy there?", "acceptedAnswer": { "@type": "Answer", "text": "Traditional deel clothing, camel-wool products, and souvenirs." } }
                ] },
            };

        case "is-bar-hopping-tour-worth-it-ulaanbaatar":
            return {
                title: "Is the Private Bar Hopping Tour in Ulaanbaatar Worth It?",
                seoTitle: "Ulaanbaatar Bar Hopping Tour 2026 | Honest Review",
                description: "An honest look at Ulaanbaatar's private bar hopping tour with a local guide.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/6aeca2c9f4c7425c4f0eb75296fb004e73a8f3013fc49a54a494f47cb5781045.png",
                sections: [
                    { title: "The Short Answer", content: "A local guide takes you through Ulaanbaatar's bar scene, useful since the best spots aren't always obvious or English-friendly without local knowledge.", tourCard: { slug: "ulaanbaatar-private-bar-hopping-tour-with-local", title: "Ulaanbaatar: Private Bar Hopping Tour with Local Guide", description: "A guided tour through Ulaanbaatar's bar scene.", price: "From $51", duration: "4 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/6aeca2c9f4c7425c4f0eb75296fb004e73a8f3013fc49a54a494f47cb5781045.png" } },
                    { title: "Practical Tips", content: "Good for solo travellers or anyone who wants a local's take on nightlife rather than guessing which spots are worth visiting." }
                ],
                faqs: [
                    { q: "Is the bar hopping tour in Ulaanbaatar worth it?", a: "Yes, especially for solo travellers wanting local insight into the nightlife scene." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "Is the bar hopping tour worth it?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, especially for solo travellers wanting local insight." } }
                ] },
            };

        case "is-walking-tour-worth-it-ulaanbaatar":
            return {
                title: "Is a Ulaanbaatar Walking Tour Worth It?",
                seoTitle: "Ulaanbaatar Walking Tour 2026 | Honest Review",
                description: "An honest look at Ulaanbaatar's hidden culture and ger area walking tours.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/591bc6032dee87b0dde83ffb680cefd7bf21c2de12c0a747adca0b13cc1edeb6.jpg",
                sections: [
                    { title: "The Short Answer", content: "Walking tours here go beyond the standard sights into ger districts and lesser-known corners of the city, giving a more authentic picture of daily life than a vehicle-based city tour.", tourCard: { slug: "ulaanbaatar-hidden-culture-walking-tour", title: "Ulaanbaatar: Hidden Culture Walking Tour", description: "A walking tour into lesser-known parts of the city.", price: "From $910", duration: "4 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/591bc6032dee87b0dde83ffb680cefd7bf21c2de12c0a747adca0b13cc1edeb6.jpg" } },
                    { title: "Alternative: Ger Area Walking Tour", content: "A more specifically ger-district-focused version, if seeing how many Ulaanbaatar residents actually live is your main interest.", tourCard: { slug: "ulaanbaatar-ger-area-walking-tour-with-local-guide", title: "Ulaanbaatar: Ger Area Walking Tour with Local Guide", description: "A walking tour through Ulaanbaatar's ger districts.", price: "From $618", duration: "2.5 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/bd8800a9a1c7867f2cb32dbcb8124d071de976c0ea09e6277b9e7355ce9914d3.jpeg" } },
                    { title: "Practical Tips", content: "Ger districts can have uneven terrain and limited paved paths — comfortable walking shoes matter more here than on a standard city tour." }
                ],
                faqs: [
                    { q: "Is a Ulaanbaatar walking tour worth it?", a: "Yes, it offers a more authentic look at daily life than a standard vehicle-based city tour." },
                    { q: "What is a ger district?", a: "A residential area where many Ulaanbaatar residents live in traditional gers rather than apartments." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "Is a Ulaanbaatar walking tour worth it?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, for a more authentic look at daily life." } },
                    { "@type": "Question", "name": "What is a ger district?", "acceptedAnswer": { "@type": "Answer", "text": "A residential area where people live in traditional gers." } }
                ] },
            };

        case "ulaanbaatar-travel-guide-2026":
            return {
                title: "Ulaanbaatar Travel Guide 2026",
                description: "Mongolia's capital is the gateway to the steppe, Gobi Desert, and nomadic culture — here's what first-timers need to know.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/0c6fe149a9c1c975a399fc93df53675fc26cc3bd099733e5d151e4630cbdc248.jpeg",
                sections: [
                    { title: "Why Visit Ulaanbaatar", content: "Most visitors use Ulaanbaatar as a short stop before heading out to Terelj National Park, the Gobi Desert, or Khuvsgul Lake. The city itself has Sukhbaatar Square, Gandan Monastery, and the giant Chinggis Khaan Statue nearby." },
                    { title: "Getting Around", content: "Taxis and ride-hailing apps work for getting around the city; day trips outside the city need a tour or private driver since public transport doesn't reach most of the countryside sights." }
                ],
                faqs: [
                    { q: "Is Ulaanbaatar worth visiting?", a: "Mainly as a base for the surrounding countryside — Terelj, the Gobi, and Khuvsgul Lake are the bigger draws." },
                    { q: "How many days do I need in Ulaanbaatar?", a: "1-2 days for the city itself; most of your trip should be day trips or multi-day countryside tours." }
                ],
            };

        case "best-time-to-visit-ulaanbaatar":
            return {
                title: "Best Time to Visit Ulaanbaatar",
                description: "Mongolia has extreme seasonal swings — timing matters a lot here, more than almost anywhere else covered on this site.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/0c6fe149a9c1c975a399fc93df53675fc26cc3bd099733e5d151e4630cbdc248.jpeg",
                sections: [
                    { title: "Seasonal Overview", content: "June-September is the main travel season, with warm days and accessible countryside roads. Winters are brutally cold (-20°C to -30°C is common), making most countryside tours impractical outside specialized winter trips." }
                ],
                faqs: [
                    { q: "What is the best time to visit Ulaanbaatar?", a: "June to September, when the countryside is accessible and weather is manageable." },
                    { q: "How cold does it get in Mongolia in winter?", a: "Extremely cold, commonly -20°C to -30°C, which closes off most standard tours." }
                ],
            };

        case "ulaanbaatar-1-day-itinerary":
            return {
                title: "Ulaanbaatar 1-Day Itinerary",
                description: "A realistic one-day plan for Ulaanbaatar before heading out to the countryside.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/0c6fe149a9c1c975a399fc93df53675fc26cc3bd099733e5d151e4630cbdc248.jpeg",
                sections: [
                    { title: "Morning", content: "Start at Sukhbaatar Square and the National Museum of Mongolia for historical context before heading further out." },
                    { title: "Afternoon", content: "Visit Gandan Monastery, then head to the Chinggis Khaan Statue Complex on the way out of the city if time allows." },
                    { title: "Evening", content: "Try a local restaurant for traditional dishes like buuz or khorkhog, or catch a cultural performance." }
                ],
                faqs: [
                    { q: "Can Ulaanbaatar be seen in one day?", a: "The city's core sights, yes — but most of Mongolia's appeal is in the countryside day trips beyond the city." }
                ],
            };

        case "mongolia-visa-guide-for-tourists":
            return {
                title: "Mongolia Visa Guide for Tourists (Ulaanbaatar)",
                description: "Visa requirements for visiting Ulaanbaatar and Mongolia.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/0c6fe149a9c1c975a399fc93df53675fc26cc3bd099733e5d151e4630cbdc248.jpeg",
                sections: [
                    { title: "Visa Requirements", content: "Many nationalities get visa-free entry to Mongolia for a set period; others need to apply in advance. Check Mongolia's official immigration requirements for your specific nationality before travel, since rules vary and change." }
                ],
                faqs: [
                    { q: "Do I need a visa to visit Mongolia?", a: "Depends on nationality — many get visa-free entry; verify current requirements for your passport before travel." }
                ],
            };

        case "ulaanbaatar-food-guide":
            return {
                title: "Ulaanbaatar Food Guide",
                description: "What to eat in Ulaanbaatar, from steamed dumplings to traditional barbecue.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/ed6f235fe5ab32d8bad23107cc4435460bf29bc69b8885310b3e8ec6369da2ad.jpeg",
                sections: [
                    { title: "Local Specialties", content: "Buuz (steamed meat dumplings), khorkhog (meat cooked with hot stones), and airag (fermented mare's milk) are Mongolia's signature foods — meat and dairy-heavy, reflecting the nomadic diet." }
                ],
                faqs: [
                    { q: "What food is Ulaanbaatar known for?", a: "Buuz dumplings, khorkhog barbecue, and dairy products like airag." }
                ],
            };

        case "ulaanbaatar-weather-guide":
            return {
                title: "Ulaanbaatar Weather Guide",
                description: "What to expect from Ulaanbaatar's extreme continental climate across the year.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/0c6fe149a9c1c975a399fc93df53675fc26cc3bd099733e5d151e4630cbdc248.jpeg",
                sections: [
                    { title: "Climate Overview", content: "Ulaanbaatar is the coldest capital city in the world, with summers (June-August) reaching comfortable warmth around 20-25°C, while winters drop to -20°C to -30°C. Spring and autumn are short transitional windows." }
                ],
                faqs: [
                    { q: "What is the weather like in Ulaanbaatar?", a: "Extreme — warm summers around 20-25°C, brutally cold winters at -20°C to -30°C." }
                ],
            };

        default:
            return null;
    }
}

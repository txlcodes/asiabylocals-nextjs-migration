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

        case "best-2-day-terelj-horseback-tour-ulaanbaatar":
            return {
                title: "Which Is the Best 2-Day Terelj Horseback Tour from Ulaanbaatar?",
                seoTitle: "Best 2-Day Terelj Horseback Tour 2026 | Comparison",
                description: "Compare real 2-day Terelj National Park horseback and nomad-stay tours from Ulaanbaatar — horse trekking, a nomad family homestay, and a horse riding/dog sledding combo.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/87d9d2b2883d9fb80cf0ae7ac1b51576ec837a4f650674926d9cf7908f10eda6.jpeg",
                sections: [
                    { title: "The Short Answer", content: "Spending two days in Terelj National Park rather than rushing through on a day trip means genuine riding time and usually an overnight stay in a traditional ger — the versions differ mainly in exactly how the horseback time is structured.", tourCard: { slug: "2-day-horse-trekking-in-terelj-national-park", title: "2-Day Horse Trekking in Terelj National Park", description: "A 2-day horse trekking experience in Terelj National Park.", price: "From $213", duration: "2 days", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/87d9d2b2883d9fb80cf0ae7ac1b51576ec837a4f650674926d9cf7908f10eda6.jpeg" } },
                    { title: "Best for Culture: Nomad Family Home Stay", content: "This centers the two days around staying with a nomad family, with horseback riding woven into daily life rather than being the sole focus.", tourCard: { slug: "nomad-family-home-stay-in-terelj-national-park", title: "Nomad Family Home Stay in Terelj National Park", description: "A 2-day nomad family homestay experience in Terelj.", price: "From $253", duration: "2 days", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/b0c1204e5576c7cbb3af8eb231e6b303c708ba132559af0c95a2d5dcbebe8579.jpeg" } },
                    { title: "Best for Variety: Horse Riding & Seasonal Dog Sledding", content: "This adds dog sledding (seasonal, snow-dependent) alongside the horseback riding, for travellers visiting in winter who want more than one type of activity.", tourCard: { slug: "terelj-2-day-horse-riding-seasonal-dog-sledding", title: "Terelj 2-Day Horse Riding, Seasonal Dog Sledding", description: "A 2-day combo of horse riding and seasonal dog sledding.", price: "From $332", duration: "2 days", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/79bc8ed0ac216bd7e49f7ccf7b9f6cb4744ad3ef4539d492ebd4b7701cdbe16e.jpeg" } },
                    { title: "Practical Tips", content: "Ger accommodation on these tours is genuinely basic (no attached plumbing in most cases) — pack accordingly, and check with the operator what's included for warmth if travelling outside summer." }
                ],
                faqs: [
                    { q: "What is the best 2-day Terelj horseback tour from Ulaanbaatar?", a: "Horse trekking for a riding-focused trip, or the nomad homestay for cultural immersion." },
                    { q: "What is ger accommodation like?", a: "Basic traditional felt tents, typically without attached plumbing — check what's included for warmth outside summer." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "What is the best 2-day Terelj horseback tour?", "acceptedAnswer": { "@type": "Answer", "text": "Horse trekking, or the nomad homestay for cultural immersion." } },
                    { "@type": "Question", "name": "What is ger accommodation like?", "acceptedAnswer": { "@type": "Answer", "text": "Basic traditional felt tents." } }
                ] },
            };

        case "best-gobi-desert-tour-ulaanbaatar":
            return {
                title: "Which Is the Best Gobi Desert Multi-Day Tour from Ulaanbaatar?",
                seoTitle: "Best Gobi Desert Tour Ulaanbaatar 2026 | Comparison",
                description: "Compare real multi-day Gobi Desert tours from Ulaanbaatar — a 6-day version versus a full 8-day tour with ger accommodation.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/3f44b0e1d0cf42d232f14f020c2ec9575e53e0fbe731c171191e621b91a31265.jpg",
                sections: [
                    { title: "The Short Answer", content: "The Gobi Desert is far enough from Ulaanbaatar that any genuine visit requires several days — the real choice is how many days you can commit, since more days means reaching more remote sand dunes and canyons.", tourCard: { slug: "6-day-great-gobi-tour-amazing-memory", title: "6-Day Great Gobi Tour Amazing Memory", description: "A 6-day Gobi Desert tour from Ulaanbaatar.", price: "From $1133", duration: "6 days", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/3f44b0e1d0cf42d232f14f020c2ec9575e53e0fbe731c171191e621b91a31265.jpg" } },
                    { title: "Alternative 6-Day Route: Discover Mongolia Gobi Tour", content: "A similarly structured 6-day itinerary from a different operator, worth comparing on exact stops included.", tourCard: { slug: "best-6-day-gobi-tour-discover-mongolia", title: "Best 6-Day Gobi Tour Discover Mongolia", description: "An alternative 6-day Gobi Desert itinerary.", price: "From $1200", duration: "6 days", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/b824f526195f41c4416ef570463460310ec6933919a2cb07ae6f60aa202b5023.png" } },
                    { title: "Best for Full Depth: 8-Day Gobi Desert Tour with Ger Accommodation", content: "The longest standard option, reaching further into the Gobi's remote sand dunes and rock formations with ger stays along the way.", tourCard: { slug: "from-ulaanbaatar-8-day-gobi-desert-tour-with-ger", title: "From Ulaanbaatar: 8-Day Gobi Desert Tour with Ger Accommodation", description: "A comprehensive 8-day Gobi Desert tour with ger stays.", price: "From $1450", duration: "8 days", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/df72544f8aeb17f148040a2e77a873eb7fa16fae5422fa97b495a31222c6995d.png" } },
                    { title: "Practical Tips", content: "These are genuine expedition-style trips with long driving days between sights — the Gobi's distances are vast, so don't expect a resort-style pace. Pack for big day-to-night temperature swings, a defining feature of desert climate." }
                ],
                faqs: [
                    { q: "What is the best Gobi Desert tour from Ulaanbaatar?", a: "A 6-day tour covers the main highlights; go 8 days for deeper, more remote access." },
                    { q: "How many days do I need for the Gobi Desert?", a: "At minimum 6 days given the travel distances involved from Ulaanbaatar." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "What is the best Gobi Desert tour?", "acceptedAnswer": { "@type": "Answer", "text": "A 6-day tour covers the highlights; 8 days for deeper access." } },
                    { "@type": "Question", "name": "How many days do I need?", "acceptedAnswer": { "@type": "Answer", "text": "At minimum 6 days." } }
                ] },
            };

        case "is-hustai-national-park-tour-worth-it-ulaanbaatar":
            return {
                title: "Is a Hustai National Park Day Trip from Ulaanbaatar Worth It?",
                seoTitle: "Hustai National Park Tour Ulaanbaatar 2026 | Review",
                description: "An honest look at Hustai National Park day trips from Ulaanbaatar, home to the only wild Przewalski's horses on Earth.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/f2535aae77c77fdb23bd52009a90e15aed1a5be8153832627d07493db46d2264.jpg",
                sections: [
                    { title: "The Short Answer", content: "Hustai National Park is the only place on Earth with wild Przewalski's horses (takhi), a species extinct in the wild until a successful reintroduction program — genuinely worth it for wildlife-focused travellers, and much closer to Ulaanbaatar than the Gobi.", tourCard: { slug: "from-ulaanbaatar-hustai-national-park-day-trip", title: "From Ulaanbaatar: Hustai National Park Day Trip", description: "A day trip to Hustai National Park to see wild Przewalski's horses.", price: "From $169", duration: "10 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/97e72268e660bba7394a8e7243e99189ca7fab37606889f3c085e24f69f9eae1.jpg" } },
                    { title: "Alternative Operator: Full-Day Trip", content: "A similar full-day itinerary from a different operator, worth comparing on timing and group size.", tourCard: { slug: "ulaanbaatar-khustai-national-park-full-day-trip", title: "Ulaanbaatar: Khustai National Park Full-Day Trip", description: "An alternative full-day Hustai National Park trip.", price: "From $111", duration: "12 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/f2535aae77c77fdb23bd52009a90e15aed1a5be8153832627d07493db46d2264.jpg" } },
                    { title: "Practical Tips", content: "Sightings aren't guaranteed since these are genuinely wild horses, but the park's population is well-established — early morning and evening are generally the best times for wildlife activity." }
                ],
                faqs: [
                    { q: "Is Hustai National Park worth visiting from Ulaanbaatar?", a: "Yes, it's the only place on Earth to see wild Przewalski's horses, and it's much closer than the Gobi." },
                    { q: "Are horse sightings guaranteed at Hustai?", a: "Not guaranteed since they're genuinely wild, but the population is well-established and sightings are common." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "Is Hustai National Park worth visiting?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, the only place on Earth with wild Przewalski's horses." } },
                    { "@type": "Question", "name": "Are sightings guaranteed?", "acceptedAnswer": { "@type": "Answer", "text": "Not guaranteed, but common given the established population." } }
                ] },
            };

        case "best-kharkhorin-tour-ulaanbaatar":
            return {
                title: "Which Is the Best Kharkhorin & Central Mongolia Tour from Ulaanbaatar?",
                seoTitle: "Best Kharkhorin Tour Ulaanbaatar 2026 | Comparison",
                description: "Compare real Kharkhorin and Central Mongolia multi-day tours from Ulaanbaatar — a 2-day express version versus a 3-day budget itinerary.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/2a7cb6e168c84e8eb3aea89d2693d90a3a323b32301575e857b4691cc3cd64be.jpg",
                sections: [
                    { title: "The Short Answer", content: "Kharkhorin, the ancient capital of the Mongol Empire under Genghis Khan's successors, is usually visited as a multi-day trip combined with Ugii Lake or the semi-Gobi landscape en route.", tourCard: { slug: "2-day-express-kharkhorin-ugii-lake-semi-gobi-tour", title: "2-Day Express Kharkhorin, Ugii Lake & Semi-Gobi Tour", description: "A 2-day express tour to Kharkhorin with Ugii Lake and semi-Gobi scenery.", price: "From $332", duration: "2 days", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/2a7cb6e168c84e8eb3aea89d2693d90a3a323b32301575e857b4691cc3cd64be.jpg" } },
                    { title: "Best Budget Option: 3-Day Budget Tour of Kharkhorin", content: "A slightly longer, lower-cost version giving more time at the ancient capital site itself.", tourCard: { slug: "3-day-budget-tour-of-kharkhorin-in-central", title: "3-Day Budget Tour of Kharkhorin in Central Mongolia", description: "A budget-friendly 3-day Kharkhorin tour.", price: "From $425", duration: "3 days", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/8cfeefde57c9f7a2a8c26e8492c33a35082aa45d1cfc82198ce0e04d6eb5ed0c.jpg" } },
                    { title: "Practical Tips", content: "Erdene Zuu Monastery, built partly from the stones of the original Kharkhorin capital, is the main surviving structure — a good guide helps piece together what the site looked like in the Mongol Empire era, since most of the original capital isn't visibly intact." }
                ],
                faqs: [
                    { q: "What is the best Kharkhorin tour from Ulaanbaatar?", a: "A 2-day express version for a quicker trip, or 3 days for more time at the ancient capital site." },
                    { q: "What's left of the original Kharkhorin capital?", a: "Mostly Erdene Zuu Monastery, built partly from the original capital's stones — much of the rest isn't visibly intact." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "What is the best Kharkhorin tour?", "acceptedAnswer": { "@type": "Answer", "text": "A 2-day express version, or 3 days for more time." } },
                    { "@type": "Question", "name": "What's left of the original capital?", "acceptedAnswer": { "@type": "Answer", "text": "Mostly Erdene Zuu Monastery." } }
                ] },
            };

        case "is-chinggis-khaan-museum-worth-it-ulaanbaatar":
            return {
                title: "Is the Chinggis Khaan National Museum in Ulaanbaatar Worth It?",
                seoTitle: "Chinggis Khaan Museum Ulaanbaatar 2026 | Honest Review",
                description: "An honest look at the Chinggis Khaan National Museum highlights tour in Ulaanbaatar.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/c3e0da828a5f70e122fbe90357c5f407db2ec66fbb2d4f8406970b513aaf95fe.jpeg",
                sections: [
                    { title: "The Short Answer", content: "This museum covers Mongolia's history from ancient times through the Mongol Empire and into the modern era — a genuinely useful primer before or after visiting the Chinggis Khaan Statue or Kharkhorin, giving context that a standalone site visit doesn't.", tourCard: { slug: "ulaanbaatar-chinggis-khaan-museum-highlights", title: "Ulaanbaatar: Chinggis Khaan Museum Highlights", description: "A highlights tour of the Chinggis Khaan National Museum.", price: "From $89", duration: "4 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/c3e0da828a5f70e122fbe90357c5f407db2ec66fbb2d4f8406970b513aaf95fe.jpeg" } },
                    { title: "Practical Tips", content: "Visit this before heading out to Terelj or Kharkhorin if your schedule allows — the historical context makes those sites noticeably more meaningful." }
                ],
                faqs: [
                    { q: "Is the Chinggis Khaan Museum worth visiting?", a: "Yes, especially before visiting the Chinggis Khaan Statue or Kharkhorin, for historical context." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "Is the museum worth visiting?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, especially for historical context before other sites." } }
                ] },
            };

        case "is-nomadic-cultural-show-worth-it-ulaanbaatar":
            return {
                title: "Is a Nomadic Cultural Performance Night in Ulaanbaatar Worth It?",
                seoTitle: "Ulaanbaatar Nomadic Cultural Show 2026 | Honest Review",
                description: "An honest look at Ulaanbaatar's nomadic heritage and cultural performance shows, featuring traditional music, dance, and throat singing.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/37648b051873d56f4c085228e874e170b2e32746b5665310864caadd69bf787e.jpg",
                sections: [
                    { title: "The Short Answer", content: "These evening shows feature traditional Mongolian music, dance, and throat singing (khöömei) — a genuinely good way to experience Mongolian performing arts if your schedule doesn't allow time in the countryside for the real nomadic lifestyle.", tourCard: { slug: "ulaanbaatar-nomadic-heritage-performance-night", title: "Ulaanbaatar: Nomadic Heritage Performance Night", description: "An evening cultural performance of traditional Mongolian music and dance.", price: "From $55", duration: "1 hour", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/37648b051873d56f4c085228e874e170b2e32746b5665310864caadd69bf787e.jpg" } },
                    { title: "Alternative: Nomadic Legend Mongolian Cultural Show", content: "A similarly structured evening show from a different venue, worth comparing on exact program content.", tourCard: { slug: "ulaanbaatar-nomadic-legend-mongolian-cultural", title: "Ulaanbaatar: Nomadic Legend Mongolian Cultural Show", description: "An alternative evening cultural performance.", price: "From $68", duration: "1 hour", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/dea31ffc3c9546947f78f8249af4cb4de06a619486413955459d9378c6613e3d.jpg" } },
                    { title: "Practical Tips", content: "Khöömei (throat singing) is a genuinely unique vocal technique specific to Central Asian nomadic cultures — worth looking up beforehand so you know what you're listening for during the show." }
                ],
                faqs: [
                    { q: "Is a nomadic cultural performance worth it in Ulaanbaatar?", a: "Yes, especially if you won't have time in the countryside — a good way to experience Mongolian performing arts." },
                    { q: "What is khöömei?", a: "Traditional Mongolian throat singing, a unique vocal technique specific to Central Asian nomadic cultures." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "Is a nomadic cultural show worth it?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, especially if you won't have time in the countryside." } },
                    { "@type": "Question", "name": "What is khöömei?", "acceptedAnswer": { "@type": "Answer", "text": "Traditional Mongolian throat singing." } }
                ] },
            };

        case "is-bogd-khan-mountain-hike-worth-it-ulaanbaatar":
            return {
                title: "Is the Bogd Khan Mountain Hike from Ulaanbaatar Worth It?",
                seoTitle: "Bogd Khan Mountain Hike 2026 | Honest Review",
                description: "An honest look at the Bogd Khan Mountain hike to Tsetsee Gun Peak, one of the world's oldest protected areas just outside Ulaanbaatar.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/90e848f8feebf04c2dea5ef2df8f4cfa1a276fe46cc440266bfe812e9ae41ae3.jpeg",
                sections: [
                    { title: "The Short Answer", content: "Bogd Khan Mountain, protected since 1778 and among the world's oldest nature reserves, offers a genuine hiking day trip without leaving the Ulaanbaatar area — a good choice if you want nature without a multi-day commitment.", tourCard: { slug: "bogd-khan-mountain-tsetsee-gun-peak-hike", title: "Bogd Khan Mountain: Tsetsee Gun Peak Hike & Monastery Tour", description: "A hike to Tsetsee Gun Peak with a monastery visit.", price: "From $220", duration: "10 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/90e848f8feebf04c2dea5ef2df8f4cfa1a276fe46cc440266bfe812e9ae41ae3.jpeg" } },
                    { title: "Practical Tips", content: "This is a full-day commitment despite being close to the city — bring proper hiking shoes and water for the Tsetsee Gun summit push." }
                ],
                faqs: [
                    { q: "Is the Bogd Khan Mountain hike worth it?", a: "Yes, for a genuine hiking day trip close to Ulaanbaatar without a multi-day countryside tour." },
                    { q: "How old is Bogd Khan Mountain's protected status?", a: "It has been protected since 1778, making it one of the world's oldest nature reserves." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "Is the Bogd Khan Mountain hike worth it?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, for genuine hiking close to Ulaanbaatar." } }
                ] },
            };

        case "is-aglag-monastery-tour-worth-it-ulaanbaatar":
            return {
                title: "Is the Aglag Buteel Temple / Creation Monastery Tour Worth It?",
                seoTitle: "Aglag Monastery Tour Ulaanbaatar 2026 | Honest Review",
                description: "An honest look at the Aglag Buteel Temple (Aglag Creation Monastery) day tour, a lesser-known Buddhist site near Ulaanbaatar.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/48625ed16a6760b64d74bc7aba74c12d7d91543505c512304322fe0e3704f713.jpeg",
                sections: [
                    { title: "The Short Answer", content: "Aglag Buteel Temple is a striking, lesser-visited Buddhist monastery built into a rock outcrop — worth it specifically if you want to see Mongolian Buddhism away from Ulaanbaatar's more famous and crowded sites.", tourCard: { slug: "ulaanbaatar-aglag-buteel-temple-day-tour", title: "Ulaanbaatar: Aglag Buteel Temple Day Tour", description: "A day tour to the Aglag Buteel Temple.", price: "From $130", duration: "7 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/48625ed16a6760b64d74bc7aba74c12d7d91543505c512304322fe0e3704f713.jpeg" } },
                    { title: "Practical Tips", content: "The temple's rock-outcrop setting makes for distinctive photos that look different from the more common Terelj and Gobi tour imagery." }
                ],
                faqs: [
                    { q: "Is the Aglag Buteel Temple tour worth it?", a: "Yes, for a less-crowded, visually distinctive Buddhist site near Ulaanbaatar." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "Is the Aglag Buteel Temple tour worth it?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, for a less-crowded Buddhist site near Ulaanbaatar." } }
                ] },
            };

        case "is-altai-horse-trek-worth-it-ulaanbaatar":
            return {
                title: "Is the 7-Day Altai Horse Trek Worth It?",
                seoTitle: "Altai Horse Trek Mongolia 2026 | Honest Review",
                description: "An honest look at the 7-day Altai Horse Trek, a multi-day horseback expedition through western Mongolia's Altai Mountains.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/bb72c0779a5563aef7b88a18a9c517d303ca06c92d9609069a78052bbc12d1ae.png",
                sections: [
                    { title: "The Short Answer", content: "This is a serious commitment, a full week on horseback through the Altai Mountains in western Mongolia, genuinely different from the more common Terelj or Gobi countryside tours near Ulaanbaatar — worth it only if you specifically want an extended horse trekking expedition.", tourCard: { slug: "altai-horse-trek-adventure-ride-across-the-roof", title: "Altai Horse Trek Adventure: Ride Across the Roof of Mongolia", description: "A 7-day horse trekking expedition through the Altai Mountains.", price: "From $2828", duration: "7 days", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/bb72c0779a5563aef7b88a18a9c517d303ca06c92d9609069a78052bbc12d1ae.png" } },
                    { title: "Practical Tips", content: "Basic horse riding experience is strongly recommended before committing to a week-long trek; this is not a beginner introduction to riding." }
                ],
                faqs: [
                    { q: "Is the Altai Horse Trek worth it?", a: "Yes, but only for travelers specifically wanting an extended, multi-day horse trekking expedition." },
                    { q: "Do I need riding experience for the Altai Horse Trek?", a: "Basic riding experience is strongly recommended given the trek's week-long length." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "Is the Altai Horse Trek worth it?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, for travelers wanting an extended multi-day horse trek." } }
                ] },
            };

        case "is-terelj-genghis-khan-statue-day-tour-worth-it-ulaanbaatar":
            return {
                title: "Is the Genghis Khan Statue and Terelj National Park Day Tour Worth It?",
                seoTitle: "Genghis Khan Statue Terelj Tour 2026 | Honest Review",
                description: "An honest look at Ulaanbaatar's most popular day tour, combining the giant Genghis Khan equestrian statue with Gorkhi-Terelj National Park's countryside scenery.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/fe1b9ef808a184a989e3a517f90192f561559f0eb47160a64dc927b159fb2e6f.jpg",
                sections: [
                    { title: "The Short Answer", content: "This is easily the single most popular day trip out of Ulaanbaatar, pairing the 40-metre steel Genghis Khan equestrian statue with Gorkhi-Terelj National Park's rock formations and steppe scenery in one manageable 8-hour outing.", tourCard: { slug: "genghis-khan-statue-and-terelj-national-park-day", title: "Genghis Khan Statue and Terelj National Park Day Tour", description: "A day tour combining the Genghis Khan statue with Terelj National Park.", price: "From $143", duration: "8 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/fe1b9ef808a184a989e3a517f90192f561559f0eb47160a64dc927b159fb2e6f.jpg" } },
                    { title: "Practical Tips", content: "A good first-day pick straight off a flight — it covers Mongolia's two biggest near-city draws without an overnight commitment." }
                ],
                faqs: [
                    { q: "Is this the best first day trip from Ulaanbaatar?", a: "Yes, it's the single most popular option, covering both the giant Genghis Khan statue and Terelj's countryside in one day." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "Is the Genghis Khan statue and Terelj day tour worth it?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, for Mongolia's two biggest near-city draws in a single manageable day." } }
                ] },
            };

        case "is-gobi-desert-tour-worth-it-ulaanbaatar":
            return {
                title: "Is the Gobi Desert Multi-Day Tour Worth It from Ulaanbaatar?",
                seoTitle: "Gobi Desert Tour Mongolia 2026 | Honest Review",
                description: "An honest look at the 8-day Gobi and Central Mongolia tour, a serious multi-day expedition into sand dunes and desert landscapes far beyond the capital.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/496e4dbbc3b72fb0378f02c6d28d32cf601120de531cda0404ca88198df370b4.jpg",
                sections: [
                    { title: "The Short Answer", content: "The Gobi is several days' drive from Ulaanbaatar, so this 8-day itinerary through central Mongolia and the Gobi's sand dunes is a genuinely different trip from the Terelj day tours near the capital, aimed at travellers with real time to spend on Mongolia's vast landscapes.", tourCard: { slug: "8-day-gobi-and-central-mongolia", title: "8-Day Gobi and Central Mongolia", description: "An 8-day tour through central Mongolia and the Gobi Desert.", price: "From $3640", duration: "8 days", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/496e4dbbc3b72fb0378f02c6d28d32cf601120de531cda0404ca88198df370b4.jpg" } },
                    { title: "Practical Tips", content: "Long driving days between sights are standard on any Gobi itinerary — this is a landscape trip, not a packed sightseeing schedule." }
                ],
                faqs: [
                    { q: "How far is the Gobi Desert from Ulaanbaatar?", a: "Several days' drive, which is why a proper Gobi tour runs a week or more rather than a day trip from the capital." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "Is the Gobi Desert tour worth it?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, for travellers with real time to spend on Mongolia's vast landscapes beyond the capital's day-trip range." } }
                ] },
            };

        case "is-khuvsgul-lake-tour-worth-it-ulaanbaatar":
            return {
                title: "Is the Lake Khuvsgul Tour Worth It from Ulaanbaatar?",
                seoTitle: "Lake Khuvsgul Mongolia 2026 | Honest Review",
                description: "An honest look at the 11-day Lake Khuvsgul tour, reaching Mongolia's 'Blue Pearl' in the far north near the Russian border.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/e651e09947e163d5df1c8a7ae0968153657e8d98a29ca0bf4fdd95bb07178ce4.jpg",
                sections: [
                    { title: "The Short Answer", content: "Lake Khuvsgul sits in Mongolia's far north near the Russian border, one of the world's largest freshwater lakes by volume and nicknamed the 'Blue Pearl' for its clarity — this 11-day itinerary is a serious commitment given the distance, but reaches a landscape nothing closer to Ulaanbaatar can match.", tourCard: { slug: "lake-khuvsgul-escape-explore-mongolias-blue-pearl", title: "Lake Khuvsgul Escape: Explore Mongolia's Blue Pearl", description: "An 11-day tour to Lake Khuvsgul in northern Mongolia.", price: "From $2660", duration: "11 days", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/e651e09947e163d5df1c8a7ae0968153657e8d98a29ca0bf4fdd95bb07178ce4.jpg" } },
                    { title: "Practical Tips", content: "Given the 11-day length, this suits travellers on a dedicated Mongolia trip rather than a short add-on stop." }
                ],
                faqs: [
                    { q: "Why does the Lake Khuvsgul tour take so long?", a: "The lake sits in Mongolia's far north near Russia, a serious distance from Ulaanbaatar that this 11-day itinerary accounts for." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "Is the Lake Khuvsgul tour worth it?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, for a landscape nothing closer to Ulaanbaatar can match, though it's a real time commitment given the distance." } }
                ] },
            };

        case "is-kharkhorin-ancient-capital-tour-worth-it-ulaanbaatar":
            return {
                title: "Is the Kharkhorin Ancient Capital Tour Worth It from Ulaanbaatar?",
                seoTitle: "Kharkhorin Tour Mongolia 2026 | Honest Review",
                description: "An honest look at the 2-day tour to Kharkhorin, the 13th-century capital of the Mongol Empire, paired with the semi-Gobi steppe.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/ce06d771be76c41744fb2ebd2edc3d72913fc2027b85d2183ad5b55ff0482bf2.jpg",
                sections: [
                    { title: "The Short Answer", content: "Kharkhorin was the capital of the Mongol Empire under Genghis Khan's successors, and this 2-day tour pairs the historic site and the Erdene Zuu monastery with a stretch of semi-Gobi steppe scenery, a genuinely different pairing from the more common Terelj day trips.", tourCard: { slug: "from-ub-old-capital-kharkhorin-and-semi-gobi-2", title: "From UB: Old Capital Kharkhorin and Semi-Gobi 2-Day Tour", description: "A 2-day tour to the ancient Mongol capital of Kharkhorin with semi-Gobi steppe.", price: "From $455", duration: "2 days", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/ce06d771be76c41744fb2ebd2edc3d72913fc2027b85d2183ad5b55ff0482bf2.jpg" } },
                    { title: "Practical Tips", content: "A good pick for travellers with a genuine historical interest in the Mongol Empire rather than just countryside scenery." }
                ],
                faqs: [
                    { q: "What is Kharkhorin known for?", a: "It was the 13th-century capital of the Mongol Empire under Genghis Khan's successors, now home to the historic Erdene Zuu monastery." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "Is the Kharkhorin tour worth it?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, for travellers with a genuine historical interest in the Mongol Empire's former capital, paired with semi-Gobi scenery." } }
                ] },
            };

        case "is-cow-herding-experience-worth-it-ulaanbaatar":
            return {
                title: "Is the Nomadic Cow-Herding Experience Worth It near Ulaanbaatar?",
                seoTitle: "Mongolia Cow Herding Experience 2026 | Honest Review",
                description: "An honest look at the 5-day nomadic cow-herding experience, a hands-on stay with a herding family distinct from a scripted cultural show.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/33479c5e472767f42146e226d38a0be106166bd3181240eae623465ed40534e7.jpg",
                sections: [
                    { title: "The Short Answer", content: "Unlike a scripted nomadic cultural show performed for visitors, this 5-day stay has you actually working alongside a herding family on their daily routine, a genuinely hands-on rather than observational introduction to nomadic life.", tourCard: { slug: "nomadic-cow-herding-experience-tour-5-days", title: "Nomadic Cow-Herding Experience Tour, 5 Days", description: "A 5-day hands-on stay with a nomadic cow-herding family.", price: "From $2925", duration: "5 days", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/33479c5e472767f42146e226d38a0be106166bd3181240eae623465ed40534e7.jpg" } },
                    { title: "Practical Tips", content: "Expect genuine physical work and basic ger accommodation — this is a participatory experience, not a comfortable countryside retreat." }
                ],
                faqs: [
                    { q: "Is this different from a nomadic cultural show?", a: "Yes, significantly — this has you actually working with a herding family's daily routine rather than watching a scripted performance." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "Is the cow-herding experience worth it?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, for travellers wanting a genuinely hands-on, participatory introduction to nomadic life rather than a scripted show." } }
                ] },
            };

        case "is-terelj-zipline-worth-it-ulaanbaatar":
            return {
                title: "Is the Terelj Zipline and Stargazing Tour Worth It?",
                seoTitle: "Terelj Zipline Mongolia 2026 | Honest Review",
                description: "An honest look at the 2-day Terelj zipline, horse riding, and stargazing tour, an adrenaline-and-countryside combo distinct from a standard Terelj sightseeing day trip.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/7c8ceab9948d94601f7d44632537d961e22aa220724359e6ecaf4f502f569437.png",
                sections: [
                    { title: "The Short Answer", content: "This 2-day package adds a zipline and horse riding on top of an overnight ger stay in Terelj National Park, plus Mongolia's famously dark, light-pollution-free night skies for stargazing — a more activity-packed version of the standard Terelj day trip.", tourCard: { slug: "terelj-2-day-zipline-horse-riding-stargazing-ger", title: "Terelj 2-Day Zipline, Horse Riding, Stargazing & Ger Stay", description: "A 2-day Terelj tour with zipline, horse riding, and stargazing.", price: "From $595", duration: "2 days", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/7c8ceab9948d94601f7d44632537d961e22aa220724359e6ecaf4f502f569437.png" } },
                    { title: "Practical Tips", content: "The overnight ger stay means genuinely dark skies away from city light pollution — bring warm layers even in summer, as Terelj nights get cold." }
                ],
                faqs: [
                    { q: "Is this different from a standard Terelj day trip?", a: "Yes, it adds a zipline, horse riding, and an overnight stay for proper stargazing, versus a standard single-day sightseeing visit." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "Is the Terelj zipline and stargazing tour worth it?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, for a more activity-packed overnight version of the standard Terelj day trip, with genuinely dark skies for stargazing." } }
                ] },
            };

        case "is-motorcycle-hot-springs-tour-worth-it-ulaanbaatar":
            return {
                title: "Is the 5-Day Motorcycle Tour with Hot Springs Worth It from Ulaanbaatar?",
                description: "An honest look at the 5-day motorcycle tour with hot springs from Ulaanbaatar.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/d6f1611ee3b8907145b237dae0ff384adc37943e600fa9e06b60530306a3ccab.png",
                sections: [
                    { title: "The Short Answer", content: "Riding a motorcycle across Mongolia's open countryside, ending days at natural hot springs, gives a genuinely different, more physical way to see the steppe than a standard van tour, worth it for experienced riders wanting a real adventure trip.", tourCard: { slug: "ulaanbaatar-5-day-motorcycle-tour-with-hot-springs", title: "Ulaanbaatar: 5-Day Motorcycle Tour with Hot Springs", description: "A 5-day motorcycle tour through Mongolia's countryside with hot springs stops.", price: "From $2990", duration: "5 days", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/d6f1611ee3b8907145b237dae0ff384adc37943e600fa9e06b60530306a3ccab.png" } },
                    { title: "Practical Tips", content: "Confirm the required riding license and experience level with the operator before booking, since Mongolia's terrain can be rough." }
                ],
                faqs: [
                    { q: "Is the motorcycle tour with hot springs worth it from Ulaanbaatar?", a: "Yes, for experienced riders wanting a genuinely physical, memorable way to see the steppe, distinct from a standard van tour." }
                ],
            };

        case "is-darkhan-shamanic-culture-tour-worth-it-ulaanbaatar":
            return {
                title: "Is the Darkhan Heritage and Shamanic Culture Tour Worth It from Ulaanbaatar?",
                description: "An honest look at the Darkhan Heritage & Shamanic Culture tour from Ulaanbaatar.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/d745b77a5d3de4c675e63dc2a1aa0c5b73bb050295d5a0b81234332b1ef254ae.jpg",
                sections: [
                    { title: "The Short Answer", content: "Darkhan, a lesser-visited city north of Ulaanbaatar, gives real access to Mongolia's shamanic heritage with far fewer tourists than the capital's own shamanic ceremony experiences, worth it for travelers wanting deeper, more authentic regional culture.", tourCard: { slug: "darkhan-heritage-shamanic-culture-tour-from", title: "Darkhan Heritage & Shamanic Culture Tour from Ulaanbaatar", description: "A heritage and shamanic culture tour to Darkhan from Ulaanbaatar.", price: "From $1441", duration: "Full day", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/d745b77a5d3de4c675e63dc2a1aa0c5b73bb050295d5a0b81234332b1ef254ae.jpg" } },
                    { title: "Practical Tips", content: "Approach any shamanic ceremony with respect — ask your guide about appropriate etiquette before participating." }
                ],
                faqs: [
                    { q: "Is the Darkhan heritage and shamanic culture tour worth it from Ulaanbaatar?", a: "Yes, for travelers wanting deeper, more authentic regional shamanic culture away from the capital's more touristed experiences." }
                ],
            };

        case "is-khugnu-khan-mountain-tour-worth-it-ulaanbaatar":
            return {
                title: "Is the Khugnu Khan Mountain Tour Worth It from Ulaanbaatar?",
                description: "An honest look at the 3-day Khugnu Khan Mountain tour from Ulaanbaatar.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/4c814af114d4b5b6f379c37d5ec3baea7fb42643fab219de44cea5a4db708a6d.jpg",
                sections: [
                    { title: "The Short Answer", content: "Khugnu Khan Mountain's granite rock formations and nearby sand dunes give a genuinely distinct landscape from both Terelj and the Gobi, worth it for travelers wanting a quieter, less-touristed stretch of central Mongolia.", tourCard: { slug: "3-days-khugnu-khan-mountain-tour", title: "3 Days Khugnu Khan Mountain Tour", description: "A 3-day tour to Khugnu Khan Mountain's granite formations and sand dunes.", price: "From $1116", duration: "3 days", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/4c814af114d4b5b6f379c37d5ec3baea7fb42643fab219de44cea5a4db708a6d.jpg" } },
                    { title: "Practical Tips", content: "Pack for camping and variable weather, since multi-day central Mongolia trips typically involve ger or tent accommodation." }
                ],
                faqs: [
                    { q: "Is the Khugnu Khan Mountain tour worth it from Ulaanbaatar?", a: "Yes, for a genuinely distinct landscape of granite formations and sand dunes, quieter than both Terelj and the Gobi." }
                ],
            };

        case "is-asralt-peak-trek-worth-it-ulaanbaatar":
            return {
                title: "Is the Asralt Peak Trek and Horseback Adventure Worth It in Terelj?",
                description: "An honest look at the 6-day Asralt Peak trek and horseback adventure in Terelj.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/c7caf559c45bf496364b69183a2ee50e64a5b3cd5f4bb7692605b44ac0b39b4b.jpg",
                sections: [
                    { title: "The Short Answer", content: "Trekking and riding to Asralt Peak over six days gives a genuinely serious mountain adventure deep into Terelj's backcountry, far beyond the standard day-trip sightseeing circuit, worth it for fit travelers wanting a real multi-day wilderness trip.", tourCard: { slug: "terelj-6-day-asralt-peak-trek-horseback-adventure", title: "Terelj: 6-Day Asralt Peak Trek & Horseback Adventure", description: "A 6-day trek and horseback adventure to Asralt Peak in Terelj.", price: "From $1983", duration: "6 days", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/c7caf559c45bf496364b69183a2ee50e64a5b3cd5f4bb7692605b44ac0b39b4b.jpg" } },
                    { title: "Practical Tips", content: "Build up riding stamina before the trip if you're not an experienced horseback rider, since the days involve sustained time in the saddle." }
                ],
                faqs: [
                    { q: "Is the Asralt Peak trek and horseback adventure worth it in Terelj?", a: "Yes, for fit travelers wanting a genuinely serious multi-day wilderness trip, far beyond Terelj's standard day-trip circuit." }
                ],
            };

        default:
            return null;
    }
}

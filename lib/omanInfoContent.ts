import { CityInfoData } from './cityInfoContent';

export function getOmanInfoContent(slug: string): CityInfoData | null {
    switch (slug) {
        case "best-wahiba-sands-desert-tour-muscat":
            return {
                title: "Which Is the Best Wahiba Sands Desert Tour from Muscat?",
                seoTitle: "Best Wahiba Sands Desert Tour Muscat 2026 | Honest Comparison",
                description: "Compare real Wahiba Sands desert day trips from Muscat — from a $111 shared tour with Wadi Bani Khalid to sunset safaris with quad-bike add-ons and 4WD swim adventures.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/7f15706a343964e41d892cb1c24dd2e110d4c0d1de1fae6fc1b4506b212b9db5.jpg",
                sections: [
                    {
                        title: "The Short Answer",
                        content: "Wahiba Sands' golden dunes are usually paired with a swim stop at Wadi Bani Khalid's turquoise pools, and most tours time the dune drive for sunset. A shared group tour covering both stops is the standard, most-booked version.",
                        tourCard: { slug: "shared-trip-to-wadi-bani-khalid-wahiba-desert", title: "Shared Trip To Wadi Bani Khalid & Wahiba Desert with Sunset", description: "A shared day tour combining Wadi Bani Khalid and sunset dunes.", price: "From $111", duration: "9 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/7f15706a343964e41d892cb1c24dd2e110d4c0d1de1fae6fc1b4506b212b9db5.jpg" },
                    },
                    {
                        title: "Cheapest: Shared Trip with Sunset",
                        content: "At $111, this is the lowest-priced way to see both the wadi and the desert sunset in one shared-group day.",
                        tourCard: { slug: "shared-trip-to-wadi-bani-khalid-wahiba-desert", title: "Shared Trip To Wadi Bani Khalid & Wahiba Desert with Sunset", description: "The budget-friendly shared desert and wadi day trip.", price: "From $111", duration: "9 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/7f15706a343964e41d892cb1c24dd2e110d4c0d1de1fae6fc1b4506b212b9db5.jpg" },
                    },
                    {
                        title: "Best Value Shared Option: Desert, Wadi & Bedouin Tour",
                        content: "This version adds a Bedouin camp visit to the standard wadi-and-desert combo, giving a cultural stop alongside the swimming and dune driving.",
                        tourCard: { slug: "from-muscat-shared-desert-wadi-bani-khalid", title: "From Muscat: Shared Desert, Wadi Bani Khalid & Bedouin Tour", description: "A shared tour adding a Bedouin camp visit to the desert and wadi.", price: "From $117", duration: "9 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/a57ca2a0c0064f2947025284c06050ea3423d23095d303d39eb02708ced920b9.png" },
                    },
                    {
                        title: "Best for Thrill-Seekers: Sunset Safari with Quad & Horse Rides",
                        content: "This option adds optional quad-bike and horse-riding add-ons to the sunset dune safari, for travellers who want more activity than a standard dune drive.",
                        tourCard: { slug: "from-muscat-sunset-desert-safari-add-on-quad", title: "From Muscat: Sunset Desert Safari, Add-On Quad & Horse Rides", description: "A sunset desert safari with optional quad bike and horse riding.", price: "From $124", duration: "8.5 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/6219025355dade4dd52463bd230c2bda7e55a59aa3be2f0d18c542e0c9fc8b99.png" },
                    },
                    {
                        title: "Best Full-Day Trip: Wadi Bani Khalid & Wahiba Sands Sunset",
                        content: "A slightly longer full-day version of the classic combo, giving more time at both the wadi pools and the dunes before the sunset drive.",
                        tourCard: { slug: "muscat-wadi-bani-khalid-and-wahiba-sands-sunset", title: "Muscat: Wadi Bani Khalid and Wahiba Sands Sunset Day Trip", description: "A full-day version of the wadi and sunset-dunes combo.", price: "From $138", duration: "11 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/219a98522af9d9a760e26495e2a0e8bd9a39520d568247b7a6f68591faae6f6e.jpg" },
                    },
                    {
                        title: "Most Active Option: 4WD Safari & Wadi Swim Adventure",
                        content: "This leans into the 4WD dune-bashing experience itself rather than treating it as transport, paired with swim time at the wadi — best for travellers who want the drive to be a highlight, not just a means of getting there.",
                        tourCard: { slug: "wahiba-desert-4wd-safari-wadi-bani-khalid-swim", title: "Wahiba Desert 4WD Safari & Wadi Bani Khalid Swim Adventure", description: "A 4WD-focused desert safari combined with wadi swimming.", price: "From $228", duration: "8 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/5a9a4227e0a91487ddf386d8a37d3cb29f88f4125875c8b4bcde15ababb55b57.jpeg" },
                    },
                    {
                        title: "Practical Tips",
                        content: "Wadi Bani Khalid's pools are cold even in summer heat, so bring a swimsuit and a change of clothes for the drive back. Sunset timing shifts seasonally, so shared tours generally adjust departure times month to month to catch the dunes at the right light."
                    }
                ],
                faqs: [
                    { q: "What is the best Wahiba Sands desert tour from Muscat?", a: "A shared tour combining Wadi Bani Khalid and sunset dunes suits most visitors; add quad bikes or a 4WD-focused option for more activity." },
                    { q: "Can I swim at Wadi Bani Khalid?", a: "Yes, most desert tours include swim time at its turquoise pools, though the water stays cold year-round." },
                    { q: "How long is a Wahiba Sands day trip from Muscat?", a: "Most tours run 8-11 hours round trip, timed to catch the dunes at sunset." },
                    { q: "What's the cheapest Wahiba Sands tour from Muscat?", a: "A shared group tour combining the wadi and sunset dunes, the lowest-priced way to see both." }
                ],
                jsonLd: {
                    "@context": "https://schema.org",
                    "@type": "FAQPage",
                    "mainEntity": [
                        { "@type": "Question", "name": "What is the best Wahiba Sands desert tour from Muscat?", "acceptedAnswer": { "@type": "Answer", "text": "A shared tour combining Wadi Bani Khalid and sunset dunes suits most visitors." } },
                        { "@type": "Question", "name": "Can I swim at Wadi Bani Khalid?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, most tours include swim time at its turquoise pools." } },
                        { "@type": "Question", "name": "How long is a Wahiba Sands day trip?", "acceptedAnswer": { "@type": "Answer", "text": "Most tours run 8-11 hours round trip." } },
                        { "@type": "Question", "name": "What's the cheapest Wahiba Sands tour?", "acceptedAnswer": { "@type": "Answer", "text": "A shared group tour combining the wadi and sunset dunes." } }
                    ]
                },
            };

        case "best-dolphin-watching-tour-muscat":
            return {
                title: "Which Is the Best Dolphin Watching Tour in Muscat?",
                seoTitle: "Best Dolphin Watching Tour Muscat 2026 | Honest Comparison",
                description: "Compare real dolphin watching boat tours from Muscat — from a $39 wild dolphin and coastline trip to speedboat whale-watching and traditional dhow sunset cruise combos.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/85e7bf0eaafa91018d32e0dbb90fae96ccd1d75b9a1c67c8c73058d91991d554.jpg",
                sections: [
                    {
                        title: "The Short Answer",
                        content: "Muscat's coastline has resident pods of spinner and bottlenose dolphins, and most boat tours head out early morning when the water is calmer and sightings are more likely. A standard dolphin-watching-and-coastline boat tour is the most common, straightforward option.",
                        tourCard: { slug: "muscat-wild-dolphin-watching-historic-coastline", title: "Muscat: Wild Dolphin Watching & Historic Coastline Boat Tour", description: "A boat tour combining dolphin watching with Muscat's historic coastline.", price: "From $39", duration: "2 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/85e7bf0eaafa91018d32e0dbb90fae96ccd1d75b9a1c67c8c73058d91991d554.jpg" },
                    },
                    {
                        title: "Cheapest: Wild Dolphin & Historic Coastline",
                        content: "At $39, this is the lowest-priced dolphin tour, pairing the dolphin search with views of Muscat's coastal forts and old town.",
                        tourCard: { slug: "muscat-wild-dolphin-watching-historic-coastline", title: "Muscat: Wild Dolphin Watching & Historic Coastline Boat Tour", description: "The budget-friendly dolphin and coastline tour.", price: "From $39", duration: "2 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/85e7bf0eaafa91018d32e0dbb90fae96ccd1d75b9a1c67c8c73058d91991d554.jpg" },
                    },
                    {
                        title: "Best for a Local Feel: Dolphin Watching with Village Cruising",
                        content: "This version adds a cruise past coastal fishing villages, giving a glimpse of local life alongside the dolphin search.",
                        tourCard: { slug: "muscat-dolphin-watching-with-village-cruising-tour", title: "Muscat Dolphin Watching with Village Cruising Tour", description: "Dolphin watching combined with a cruise past coastal villages.", price: "From $43", duration: "2 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/27574cf9bf93479df813e23782fc35396cf693801b6dad69e9672e7ce16452e0.jpg" },
                    },
                    {
                        title: "Best for Speed and Range: Speedboat Dolphin & Whale Watching",
                        content: "Using a speedboat rather than a standard boat covers more coastline in the same time window, and this version also flags seasonal whale-watching potential.",
                        tourCard: { slug: "muscat-speedboat-tour-for-dolphin-seasonal-whale", title: "Muscat: Speedboat Tour for Dolphin & Seasonal Whale Watching", description: "A faster speedboat tour covering more coastline, with seasonal whale-watching potential.", price: "From $46", duration: "2 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/933dbdd12d7fb6613a7e1b6effe8333e44b36106ac16ad425d0d80d2ef136fc0.jpg" },
                    },
                    {
                        title: "Best Combined Activity: Dolphin Watch & Snorkel Excursion",
                        content: "This pairs the boat trip with a snorkeling stop, good for travellers who want to get in the water rather than just view from the boat.",
                        tourCard: { slug: "muscat-dolphin-watch-snorkel-excursion", title: "Muscat: Dolphin Watch & Snorkel Excursion", description: "Dolphin watching combined with a snorkeling stop.", price: "From $68", duration: "3 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/4ac78c57bb60a217.jpeg" },
                    },
                    {
                        title: "Best for Sunset: Coastal Sunset Cruise on a Traditional Omani Dhow",
                        content: "Rather than a dawn dolphin search, this runs in the evening on a traditional wooden dhow, trading dolphin-sighting odds for a scenic sunset cruise along the coast.",
                        tourCard: { slug: "muscat-coastal-sunset-cruise-on-a-traditional", title: "Muscat: Coastal Sunset Cruise on a Traditional Omani Dhow", description: "An evening sunset cruise on a traditional Omani dhow.", price: "From $72", duration: "2 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/9f7f8fe07edddb31257bb1efad86ce31e62a7fb63e767d124d21b0626b2d7a0a.png" },
                    },
                    {
                        title: "Practical Tips",
                        content: "Morning departures (usually 7-9am) have the best odds of dolphin sightings since the water is calmer and dolphins tend to be more active earlier in the day. If sunset scenery matters more to you than guaranteed dolphin sightings, a dhow cruise timed for evening is the better pick."
                    }
                ],
                faqs: [
                    { q: "What is the best dolphin watching tour in Muscat?", a: "A standard morning dolphin-and-coastline tour suits most visitors; go for a dhow sunset cruise if scenery matters more than guaranteed sightings." },
                    { q: "What time of day is best for dolphin watching in Muscat?", a: "Early morning, usually 7-9am, when the water is calmer and dolphins are more active." },
                    { q: "Are dolphin sightings guaranteed in Muscat?", a: "No, sightings depend on conditions, though Muscat's coast has resident pods that are seen fairly reliably." },
                    { q: "What's the cheapest dolphin watching tour in Muscat?", a: "A standard wild dolphin and historic coastline boat tour, the lowest-priced option." }
                ],
                jsonLd: {
                    "@context": "https://schema.org",
                    "@type": "FAQPage",
                    "mainEntity": [
                        { "@type": "Question", "name": "What is the best dolphin watching tour in Muscat?", "acceptedAnswer": { "@type": "Answer", "text": "A standard morning dolphin-and-coastline tour suits most visitors." } },
                        { "@type": "Question", "name": "What time of day is best for dolphin watching?", "acceptedAnswer": { "@type": "Answer", "text": "Early morning, usually 7-9am." } },
                        { "@type": "Question", "name": "Are dolphin sightings guaranteed?", "acceptedAnswer": { "@type": "Answer", "text": "No, but Muscat's coast has resident pods seen fairly reliably." } },
                        { "@type": "Question", "name": "What's the cheapest dolphin watching tour?", "acceptedAnswer": { "@type": "Answer", "text": "A standard wild dolphin and coastline boat tour." } }
                    ]
                },
            };

        case "best-sultan-qaboos-grand-mosque-tour-muscat":
            return {
                title: "Which Is the Best Sultan Qaboos Grand Mosque Tour in Muscat?",
                seoTitle: "Best Sultan Qaboos Grand Mosque Tour Muscat 2026",
                description: "Compare real Sultan Qaboos Grand Mosque tours in Muscat — from a $130 guided visit with lunch to combos with Muttrah Souq and city highlights.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/c17f95859331d1b9f9a861fd143da3ed1ee69fe9f0bb6bad1cf7aa24267af505.jpg",
                sections: [
                    { title: "The Short Answer", content: "The Grand Mosque is open to non-Muslim visitors outside prayer times, and a guided visit explaining its architecture and the world's second-largest hand-woven carpet is far more worthwhile than a quick photo stop. Most tours pair it with Muttrah Souq or other city highlights.", tourCard: { slug: "muscat-sultan-qaboos-grand-mosque-guided-tour", title: "Muscat: Sultan Qaboos Grand Mosque Guided Tour", description: "A focused guided visit to the Grand Mosque.", price: "From $144", duration: "1.5 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/c17f95859331d1b9f9a861fd143da3ed1ee69fe9f0bb6bad1cf7aa24267af505.jpg" } },
                    { title: "Best Focused Visit: Guided Tour", content: "A short, dedicated guided visit to the mosque itself, without added stops — ideal if you only have an hour or two.", tourCard: { slug: "muscat-sultan-qaboos-grand-mosque-guided-tour", title: "Muscat: Sultan Qaboos Grand Mosque Guided Tour", description: "The focused mosque-only guided visit.", price: "From $144", duration: "1.5 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/c17f95859331d1b9f9a861fd143da3ed1ee69fe9f0bb6bad1cf7aa24267af505.jpg" } },
                    { title: "Best with a Meal: Tour with Omani Lunch", content: "This adds a traditional Omani lunch after the mosque visit, useful for midday visits timed around prayer closures.", tourCard: { slug: "muscat-sultan-qaboos-grand-mosque-tour-with-omani", title: "Muscat: Sultan Qaboos Grand Mosque Tour with Omani Lunch", description: "The mosque visit with a traditional lunch included.", price: "From $130", duration: "2 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/2742f88f512d230a2e7d4cdeceff6cc4eeab248fed9d0fad3ebf5be505ea2a9f.png" } },
                    { title: "Cheapest Combo: City Highlights with Grand Mosque & Souq", content: "At $65, this shared tour folds the mosque into a wider city highlights run including Muttrah Souq — the lowest-priced way to see both in one go.", tourCard: { slug: "muscat-shared-city-highlights-tour-with-grand", title: "Muscat: Shared City Highlights Tour with Grand Mosque & Souq", description: "A budget shared tour combining the mosque with city highlights and the souq.", price: "From $65", duration: "4 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/576d8f90f2f769b074f6789c1173194d0f7db4eadb8a7093fd5dc42427fab526.png" } },
                    { title: "Best Half-Day Combo: Grand Mosque & Muttrah Souk", content: "A half-day version that gives more time at both the mosque and the souq than the shortest shared tours.", tourCard: { slug: "muscat-half-day-city-tour-of-grand-mosque-muttrah", title: "Muscat: Half-Day City Tour of Grand Mosque & Muttrah Souk", description: "A half-day combo of the mosque and Muttrah Souk.", price: "From $234", duration: "5 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/0127455a11ee2222d0932dde511543cddb08bfd258439ff5cf8e05894800d65b.jpeg" } },
                    { title: "Practical Tips", content: "Modest dress is required — women need a headscarf and full-length clothing, available to borrow at the entrance if needed. The mosque closes to tourists during prayer times and is typically open to visitors only in the morning, so book an early slot." }
                ],
                faqs: [
                    { q: "What is the best Sultan Qaboos Grand Mosque tour in Muscat?", a: "A dedicated guided tour suits a focused visit; combine with Muttrah Souq for a fuller half-day." },
                    { q: "What should I wear to visit the Grand Mosque?", a: "Modest dress is required; headscarves for women are usually available to borrow at the entrance." },
                    { q: "What time can I visit the Grand Mosque?", a: "Typically mornings only, before prayer times close it to non-worshippers." },
                    { q: "Can the Grand Mosque be combined with other Muscat sights?", a: "Yes, Muttrah Souq and city highlights tours commonly include it." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "What is the best Sultan Qaboos Grand Mosque tour in Muscat?", "acceptedAnswer": { "@type": "Answer", "text": "A dedicated guided tour suits a focused visit." } },
                    { "@type": "Question", "name": "What should I wear?", "acceptedAnswer": { "@type": "Answer", "text": "Modest dress; headscarves are usually available to borrow." } },
                    { "@type": "Question", "name": "What time can I visit?", "acceptedAnswer": { "@type": "Answer", "text": "Typically mornings only." } },
                    { "@type": "Question", "name": "Can it be combined with other sights?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, Muttrah Souq and city highlights tours commonly include it." } }
                ] },
            };

        case "best-nizwa-jebel-akhdar-day-trip-muscat":
            return {
                title: "Which Is the Best Nizwa & Jebel Akhdar Day Trip from Muscat?",
                seoTitle: "Best Nizwa & Jebel Akhdar Day Trip Muscat 2026",
                description: "Compare real Nizwa and Jebel Akhdar day trips from Muscat — from a $104 shared tour to 4x4 adventures and private versions.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/490178b393a0d420f27b235906c05a268fdc49eb74966ed4888f83d3f8f4e1b4.png",
                sections: [
                    { title: "The Short Answer", content: "Nizwa's fort and souq pair naturally with a drive up to Jebel Akhdar, the Green Mountain, known for terraced rose and pomegranate orchards. A shared day tour covering both is the standard, most-booked option.", tourCard: { slug: "from-muscat-nizwa-fort-birkat-al-mouz-jebel-akdar", title: "From Muscat: Nizwa Fort, Birkat Al Mouz & Jebel Akdar Tour", description: "A shared day trip covering Nizwa Fort, Birkat Al Mouz, and Jebel Akhdar.", price: "From $104", duration: "9 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/490178b393a0d420f27b235906c05a268fdc49eb74966ed4888f83d3f8f4e1b4.png" } },
                    { title: "Cheapest: Shared Full-Day Tour", content: "At $104, several shared tours cover the same core route at the lowest price point.", tourCard: { slug: "muscat-visit-nizwa-al-hamra-and-misfath-sharing", title: "Muscat: Visit Nizwa, Al Hamra, and Misfath Sharing Tour", description: "A budget-friendly shared tour of Nizwa and nearby villages.", price: "From $104", duration: "8.5 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/f3c154c074a6c6481410e41fc8d9ea9ce310847225ea329b5d8083dc7e7d53c4.png" } },
                    { title: "Best for the Drive Itself: 4x4 Adventure", content: "This leans into the 4x4 mountain drive as a highlight, not just transport, for travellers who want the journey to be part of the experience.", tourCard: { slug: "muscat-4x4-adventure-through-jebel-akhdar-and", title: "Muscat: 4x4 Adventure Through Jebel Akhdar and Nizwa", description: "A 4x4-focused adventure through Jebel Akhdar and Nizwa.", price: "From $104", duration: "9.5 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/4c45927055c853ca098721ab897091b06ee1f1a3e25125a4a278dd176eb9c71e.jpeg" } },
                    { title: "Best Value Shared Option: Full-Day Nizwa & Jebel Akhdar", content: "A straightforward shared full-day format, a reliable default if you don't need the 4x4-focused version.", tourCard: { slug: "muscat-shared-nizwa-jebel-akhdar-full-day-tour", title: "Muscat: Shared Nizwa Jebel Akhdar Full-Day Tour", description: "A shared full-day tour of Nizwa and Jebel Akhdar.", price: "From $107", duration: "8 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/1eb9d0060dfa1872f9b196787f5a9f4b11eee541d4c987ec0f91b1d374bab18c.jpg" } },
                    { title: "Best for Privacy: 4x4 Private Tour", content: "This runs as a private 4x4 trip rather than a shared group, giving full flexibility on pace and stops.", tourCard: { slug: "muscat-4x4-private-nizwa-jebel-akhdar-birkat-al", title: "Muscat: 4x4 private Nizwa, Jebel Akhdar, Birkat Al Mouz Tour", description: "A private 4x4 version of the Nizwa and Jebel Akhdar route.", price: "From $189", duration: "10 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/90b39cde6cc761b67ad32fc4f05d483512b0f556763e4b7bfb7ca74b3f4e42e3.jpeg" } },
                    { title: "Practical Tips", content: "Jebel Akhdar's roads require a genuine 4x4 — regular sedans are not permitted past the checkpoint partway up. Temperatures on the Green Mountain are noticeably cooler than Muscat, so bring a light jacket even in summer." }
                ],
                faqs: [
                    { q: "What is the best Nizwa & Jebel Akhdar day trip from Muscat?", a: "A shared full-day tour suits most visitors; go private for more flexibility." },
                    { q: "Do I need a 4x4 for Jebel Akhdar?", a: "Yes, regular cars aren't permitted past the mountain checkpoint." },
                    { q: "Is Jebel Akhdar colder than Muscat?", a: "Yes, noticeably — bring a light jacket even in summer." },
                    { q: "What's the cheapest Nizwa & Jebel Akhdar tour?", a: "A shared day tour, around $104." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "What is the best Nizwa & Jebel Akhdar day trip?", "acceptedAnswer": { "@type": "Answer", "text": "A shared full-day tour suits most visitors." } },
                    { "@type": "Question", "name": "Do I need a 4x4?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, regular cars aren't permitted past the checkpoint." } },
                    { "@type": "Question", "name": "Is Jebel Akhdar colder?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, noticeably cooler than Muscat." } },
                    { "@type": "Question", "name": "What's the cheapest tour?", "acceptedAnswer": { "@type": "Answer", "text": "A shared day tour around $104." } }
                ] },
            };

        case "best-jebel-akhdar-overnight-tour-muscat":
            return {
                title: "Which Is the Best Jebel Akhdar Overnight Tour from Muscat?",
                seoTitle: "Best Jebel Akhdar Overnight Tour Muscat 2026",
                description: "Compare real Jebel Akhdar overnight trips from Muscat — from a guided day trip with Birkat Al Mouz to multi-night camping and village-hiking tours.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/11b87aff1cd253a9887b52cf78cafd98a870b8475b5b64d3a3432e458fc280c7.jpg",
                sections: [
                    { title: "The Short Answer", content: "Staying overnight on Jebel Akhdar means catching sunrise and sunset over the Green Mountain's terraced orchards and canyon views, rather than rushing back to Muscat before dark. A guided day trip with Birkat Al Mouz is the entry point before committing to an overnight stay.", tourCard: { slug: "muscat-jebel-akhdar-and-birkat-al-mouz-guided-day", title: "Muscat: Jebel Akhdar and Birkat Al Mouz Guided Day Trip", description: "A guided day trip to Jebel Akhdar and the Birkat Al Mouz oasis village.", price: "From $442", duration: "8 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/11b87aff1cd253a9887b52cf78cafd98a870b8475b5b64d3a3432e458fc280c7.jpg" } },
                    { title: "Best for Hiking: Private 3-Village Hike", content: "This runs as a guided hike between three mountain villages rather than a driving tour, for travellers who want to actually walk the terraces rather than just view them.", tourCard: { slug: "jebel-akhdar-private-3-village-hike-local-guide", title: "Jebel Akhdar: Private 3-Village Hike, Local Guide & Transfer", description: "A private guided hike connecting three Jebel Akhdar villages.", price: "From $715", duration: "9 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/a6b792601ed63924b034e037f8ff8cab6e232140b9a3d87ac8188da3ee2333dd.jpg" } },
                    { title: "Best for Camping: Overnight Camping with Meals", content: "This includes an actual overnight camp on the mountain with meals provided, the most immersive way to experience Jebel Akhdar's night sky and cooler air.", tourCard: { slug: "from-muscat-jebel-akhdar-overnight-camping-with", title: "From Muscat: Jebel Akhdar Overnight Camping with Meals", description: "An overnight camping trip on Jebel Akhdar with meals included.", price: "From $1455", duration: "2 days", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/c47c7b599f389f668af5678fde1d8a8d2d419030cbf8f3ef9a01cf17094aa973.jpeg" } },
                    { title: "Practical Tips", content: "Nights on the mountain get cold even in summer, so proper layers matter more than for a standard day trip. Book camping gear through your operator rather than bringing your own unless you've confirmed equipment transport in advance." }
                ],
                faqs: [
                    { q: "What is the best Jebel Akhdar overnight tour from Muscat?", a: "Camping with meals included suits most travellers who want to stay overnight; try the village hike if you want more walking." },
                    { q: "Is Jebel Akhdar cold at night?", a: "Yes, noticeably colder than Muscat even in summer — bring warm layers." },
                    { q: "Can I hike between Jebel Akhdar villages?", a: "Yes, guided multi-village hikes are available as a dedicated tour type." },
                    { q: "Do I need my own camping gear?", a: "No, most overnight tours include tents and meals." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "What is the best Jebel Akhdar overnight tour?", "acceptedAnswer": { "@type": "Answer", "text": "Camping with meals included suits most travellers." } },
                    { "@type": "Question", "name": "Is it cold at night?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, noticeably colder than Muscat." } },
                    { "@type": "Question", "name": "Can I hike between villages?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, guided multi-village hikes exist." } },
                    { "@type": "Question", "name": "Do I need my own gear?", "acceptedAnswer": { "@type": "Answer", "text": "No, tents and meals are usually included." } }
                ] },
            };

        case "best-jebel-shams-grand-canyon-tour-muscat":
            return {
                title: "Which Is the Best Jebel Shams Grand Canyon Tour from Muscat?",
                seoTitle: "Best Jebel Shams Grand Canyon Tour Muscat 2026",
                description: "Compare real Jebel Shams day trips from Muscat — from a $182 Nizwa souq combo to overnight camping and expert-guided hiking options.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/0f5a8622698a741cf0a89df375e5013443467ac1391c47300d13c87e00d25f12.jpeg",
                sections: [
                    { title: "The Short Answer", content: "Jebel Shams, Oman's highest peak, has a rim trail nicknamed the 'Grand Canyon of Oman' for its dramatic cliff-edge views. A day trip combining it with Nizwa souq is the standard way to see it without camping overnight.", tourCard: { slug: "muscat-nizwa-souq-jebel-shams-grand-canyon-full", title: "Muscat: Nizwa Souq & Jebel Shams Grand Canyon Full-Day Tour", description: "A full-day tour combining Nizwa souq with the Jebel Shams canyon rim.", price: "From $182", duration: "10 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/0f5a8622698a741cf0a89df375e5013443467ac1391c47300d13c87e00d25f12.jpeg" } },
                    { title: "Best Value: Grand Canyon & Nizwa Heritage Tour", content: "A slightly lower-priced version pairing the canyon views with Nizwa's heritage sites rather than just the souq.", tourCard: { slug: "from-muscat-jebel-shams-grand-canyon-nizwa", title: "From Muscat: Jebel Shams Grand Canyon & Nizwa Heritage Tour", description: "A day trip combining Jebel Shams with Nizwa's heritage sites.", price: "From $228", duration: "8 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/24599dc9c12942e6c98c3740e6e12a551ea124563ede59e7b19f2009df03c0ba.jpeg" } },
                    { title: "Best for Serious Hikers: Top Peak Hiking Tour", content: "This is a dedicated hiking tour led by an expert guide up toward the peak itself, rather than a viewpoint-focused day trip.", tourCard: { slug: "muscat-jebel-shams-top-peak-hiking-tour-with", title: "Muscat: Jebel Shams Top Peak Hiking Tour with Expert Guide", description: "An expert-guided hike toward the Jebel Shams peak.", price: "From $832", duration: "15 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/44519a9fb2390b330a674f87fd45cc45e705f5297bfc77f60b5c6f831a5669a9.png" } },
                    { title: "Best for Overnight: Camping at Jebel Shams", content: "Camping on the rim overnight means catching sunrise directly over the canyon, a genuinely different experience from a day-trip viewpoint stop.", tourCard: { slug: "overnight-camping-at-jebel-shams-2-days-1-night", title: "Overnight Camping at Jebel Shams (2 Days 1 Night)", description: "An overnight camping trip on the Jebel Shams rim.", price: "From $1407", duration: "2 days", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/2e766da2450599ac9fa59bea75646c0438983893cb8f7edee84fb28214b38b79.png" } },
                    { title: "Practical Tips", content: "The rim trail (Balcony Walk) has sheer drops with minimal barriers in places, so it's not ideal for anyone with a fear of heights or young children unsupervised. The access road also requires 4x4, same as Jebel Akhdar." }
                ],
                faqs: [
                    { q: "What is the best Jebel Shams Grand Canyon tour from Muscat?", a: "A day trip combining it with Nizwa suits most visitors; camp overnight for sunrise over the canyon." },
                    { q: "Is the Jebel Shams rim trail safe?", a: "It has sheer drops with minimal barriers in places — caution is needed, especially with children." },
                    { q: "Do I need a 4x4 to reach Jebel Shams?", a: "Yes, the access road requires 4x4, same as Jebel Akhdar." },
                    { q: "Can I camp at Jebel Shams?", a: "Yes, overnight camping tours on the rim are available." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "What is the best Jebel Shams tour from Muscat?", "acceptedAnswer": { "@type": "Answer", "text": "A day trip combining it with Nizwa suits most visitors." } },
                    { "@type": "Question", "name": "Is the rim trail safe?", "acceptedAnswer": { "@type": "Answer", "text": "It has sheer drops with minimal barriers in places." } },
                    { "@type": "Question", "name": "Do I need a 4x4?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, the access road requires 4x4." } },
                    { "@type": "Question", "name": "Can I camp there?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, overnight camping tours exist." } }
                ] },
            };

        case "best-wadi-shab-tour-muscat":
            return {
                title: "Which Is the Best Wadi Shab Tour from Muscat?",
                seoTitle: "Best Wadi Shab Tour Muscat 2026 | Honest Comparison",
                description: "Compare real Wadi Shab tours from Muscat — from a $39 self-guided hike-and-swim to private cave tours and Bimmah Sinkhole combos.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/7be8b9ecc9c200dd87a0a3d267c74e86d95ed3e8963aa4ca59bbcb0ffb40fd1c.jpg",
                sections: [
                    { title: "The Short Answer", content: "Wadi Shab's turquoise pools require a short boat crossing and a walk/swim through a canyon to reach the hidden cave waterfall. A basic hike-and-swim tour covers the core experience; pricier versions add Bimmah Sinkhole and other coastal stops.", tourCard: { slug: "explore-wadi-shab-hike-and-swim-in-paradise", title: "Explore Wadi Shab – Hike and Swim in Paradise", description: "A straightforward hike-and-swim tour of Wadi Shab.", price: "From $39", duration: "3 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/7be8b9ecc9c200dd87a0a3d267c74e86d95ed3e8963aa4ca59bbcb0ffb40fd1c.jpg" } },
                    { title: "Cheapest: Hike and Swim", content: "At $39, this is the lowest-priced way to experience Wadi Shab's hike and swim to the hidden cave.", tourCard: { slug: "explore-wadi-shab-hike-and-swim-in-paradise", title: "Explore Wadi Shab – Hike and Swim in Paradise", description: "The budget-friendly Wadi Shab experience.", price: "From $39", duration: "3 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/7be8b9ecc9c200dd87a0a3d267c74e86d95ed3e8963aa4ca59bbcb0ffb40fd1c.jpg" } },
                    { title: "Best for Privacy: Private Wadi Shab Cave & Bimmah Sinkhole", content: "This private version adds the Bimmah Sinkhole, Oman's famous turquoise limestone crater, without sharing the trip with a larger group.", tourCard: { slug: "from-muscat-private-wadi-shab-cave-bimmah", title: "From Muscat: Private Wadi Shab Cave & Bimmah Sinkhole Tour", description: "A private tour combining Wadi Shab and Bimmah Sinkhole.", price: "From $77", duration: "4 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/a1faa57581244a8f35f8ee71fa3ee50046d19e114ff33d3f24cc2a32e4aae6c7.jpeg" } },
                    { title: "Best Value Shared Combo: Wadi Shab, Bimmah Sinkhole & Beach", content: "A shared group version of the same combo, at a lower price than the private option.", tourCard: { slug: "from-muscat-shared-wadi-shab-bimmah-sinkhole", title: "From Muscat: Shared Wadi Shab, Bimmah Sinkhole & Beach Tour", description: "A shared tour combining Wadi Shab, the sinkhole, and a beach stop.", price: "From $90", duration: "9 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/217953cd20426b133bb4c43abc8afc83b9a80be867e2e10dba4dd319db220c91.jpg" } },
                    { title: "Best for a Deeper Hike: Hiking Tour with Cave Swim & Waterfall", content: "This focuses more on the hike itself and the waterfall at the end of the canyon, for travellers who want more trekking than a quick in-and-out swim.", tourCard: { slug: "wadi-shab-hiking-tour-with-cave-swim-waterfall", title: "Wadi Shab: Hiking Tour with Cave Swim & Waterfall Visit", description: "A hiking-focused version of the Wadi Shab experience.", price: "From $218", duration: "8 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/58af402adf400e0b961a90214b06598678b172ff7427148651f99555898a91e3.jpg" } },
                    { title: "Practical Tips", content: "The final stretch to the hidden cave waterfall involves a short swim through a narrow gap — not ideal if you're a nervous swimmer or claustrophobic. Water shoes help significantly on the rocky canyon walk." }
                ],
                faqs: [
                    { q: "What is the best Wadi Shab tour from Muscat?", a: "A basic hike-and-swim tour suits most visitors; add Bimmah Sinkhole for a fuller day." },
                    { q: "Do I need to swim at Wadi Shab?", a: "Yes, reaching the hidden cave waterfall involves a short swim through a narrow gap." },
                    { q: "What should I wear for Wadi Shab?", a: "Water shoes help on the rocky canyon walk; bring a swimsuit under your clothes." },
                    { q: "Can Wadi Shab be combined with Bimmah Sinkhole?", a: "Yes, this is one of the most common combos from Muscat." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "What is the best Wadi Shab tour from Muscat?", "acceptedAnswer": { "@type": "Answer", "text": "A basic hike-and-swim tour suits most visitors." } },
                    { "@type": "Question", "name": "Do I need to swim?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, a short swim through a narrow gap reaches the cave waterfall." } },
                    { "@type": "Question", "name": "What should I wear?", "acceptedAnswer": { "@type": "Answer", "text": "Water shoes help on the rocky canyon walk." } },
                    { "@type": "Question", "name": "Can it be combined with Bimmah Sinkhole?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, a common combo from Muscat." } }
                ] },
            };

        case "best-daymaniyat-islands-snorkeling-tour-muscat":
            return {
                title: "Which Is the Best Daymaniyat Islands Snorkeling Tour from Muscat?",
                seoTitle: "Best Daymaniyat Islands Snorkeling Tour Muscat 2026",
                description: "Compare real Daymaniyat Islands snorkeling tours from Muscat — from a $90 trip with snacks to turtle-focused and equipment-included options.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/30c994fabb249b60f9c6ccb277b8c03bc30258ecbe1f0ad0e18237901bb1c56b.jpeg",
                sections: [
                    { title: "The Short Answer", content: "The Daymaniyat Islands are a protected marine reserve about an hour's boat ride from Muscat, known for coral reefs and nesting sea turtles. Almost every tour includes snorkeling gear and a snack or lunch; the main differences are turtle focus and group size.", tourCard: { slug: "muscat-daymaniyat-islands-snorkeling-with", title: "Muscat: Daymaniyat Islands Snorkeling with Sandwich, snacks", description: "A standard Daymaniyat Islands snorkeling trip with snacks included.", price: "From $90", duration: "4.5 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/30c994fabb249b60f9c6ccb277b8c03bc30258ecbe1f0ad0e18237901bb1c56b.jpeg" } },
                    { title: "Cheapest: Snorkeling with Snacks", content: "At $90, this is the lowest-priced way to snorkel the Daymaniyat reef with a light snack included.", tourCard: { slug: "muscat-daymaniyat-islands-snorkeling-with", title: "Muscat: Daymaniyat Islands Snorkeling with Sandwich, snacks", description: "The budget Daymaniyat snorkeling trip.", price: "From $90", duration: "4.5 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/30c994fabb249b60f9c6ccb277b8c03bc30258ecbe1f0ad0e18237901bb1c56b.jpeg" } },
                    { title: "Best for Wildlife: Sea Turtle Snorkeling Trip", content: "This version is explicitly focused on sea turtle sightings, a genuine highlight of the Daymaniyat reserve.", tourCard: { slug: "oman-daymaniyat-islands-sea-turtle-snorkeling-trip", title: "Oman: Daymaniyat Islands Sea Turtle Snorkeling Trip", description: "A turtle-focused Daymaniyat snorkeling trip.", price: "From $102", duration: "5 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/6492c2c0e417d.jpeg" } },
                    { title: "Best Value Standard Trip: Daymaniyat Islands Snorkeling Tour", content: "A straightforward standard-format trip, a reliable default if turtle sightings aren't your main priority.", tourCard: { slug: "muscat-daymaniyat-islands-snorkeling-tour", title: "Muscat: Daymaniyat Islands Snorkeling Tour", description: "The standard Daymaniyat snorkeling tour format.", price: "From $102", duration: "5.5 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/e21aa277ec9049048b69b57c98b0be418022125e1ed5bdb7a1abec9229915092.jpg" } },
                    { title: "Best for Smaller Boats: Boat & Snorkel Trip", content: "This runs on a smaller boat than some of the larger group operators, worth considering if you prefer a more intimate trip.", tourCard: { slug: "muscat-daymaniyat-islands-boat-snorkel-trip", title: "Muscat: Daymaniyat Islands Boat & Snorkel Trip", description: "A smaller-boat version of the Daymaniyat snorkeling trip.", price: "From $117", duration: "5 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/512a644b268b1d66c94f8aebeff2b79ceeac1458988aa175db0001e60994e226.png" } },
                    { title: "Practical Tips", content: "The Daymaniyat Islands are only accessible May through October — the reserve closes the rest of the year for turtle nesting season, so check seasonal availability before booking. Reef-safe sunscreen is strongly recommended given the protected marine status." }
                ],
                faqs: [
                    { q: "What is the best Daymaniyat Islands snorkeling tour from Muscat?", a: "A standard snorkeling trip with snacks suits most visitors; pick the turtle-focused option if wildlife is your priority." },
                    { q: "When can I visit the Daymaniyat Islands?", a: "Only May through October — the reserve closes the rest of the year for turtle nesting." },
                    { q: "Are turtles guaranteed on Daymaniyat tours?", a: "Not guaranteed, but the islands are a known nesting and feeding area, so sightings are fairly common in season." },
                    { q: "What should I bring for a Daymaniyat snorkeling trip?", a: "Reef-safe sunscreen is recommended given the protected marine status; most operators provide snorkel gear." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "What is the best Daymaniyat Islands snorkeling tour?", "acceptedAnswer": { "@type": "Answer", "text": "A standard snorkeling trip with snacks suits most visitors." } },
                    { "@type": "Question", "name": "When can I visit?", "acceptedAnswer": { "@type": "Answer", "text": "Only May through October." } },
                    { "@type": "Question", "name": "Are turtles guaranteed?", "acceptedAnswer": { "@type": "Answer", "text": "Not guaranteed, but sightings are fairly common in season." } },
                    { "@type": "Question", "name": "What should I bring?", "acceptedAnswer": { "@type": "Answer", "text": "Reef-safe sunscreen is recommended." } }
                ] },
            };

        case "best-scuba-diving-tour-muscat":
            return {
                title: "Which Is the Best Scuba Diving Tour in Muscat?",
                seoTitle: "Best Scuba Diving Tour Muscat 2026 | Honest Comparison",
                description: "Compare real scuba diving tours in Muscat — from a $186 discover-diving experience for beginners to Daymaniyat Islands coral-reef dive trips.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/b51a69e22aad11b2b78dfd5a281d3ab62501f77b45374afb604280379d997fc3.jpg",
                sections: [
                    { title: "The Short Answer", content: "Muscat's coastline and the Daymaniyat Islands offer some of the Gulf's better coral-reef diving, with options for complete beginners through to certified divers. A discover-diving experience is the entry point if you've never dived before.", tourCard: { slug: "oman-discover-scuba-diving-experience", title: "Oman: Discover Scuba Diving Experience", description: "A beginner-friendly introduction to scuba diving.", price: "From $186", duration: "4 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/f94fc58adba6fdf6adeefe46142b49269bbe1041f941139e041e01be9f7777ab.png" } },
                    { title: "Best for Beginners: Discover Scuba Diving", content: "No certification required — an instructor guides you through a shallow introductory dive, a good way to try scuba for the first time.", tourCard: { slug: "oman-discover-scuba-diving-experience", title: "Oman: Discover Scuba Diving Experience", description: "The beginner-friendly discover-diving option.", price: "From $186", duration: "4 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/f94fc58adba6fdf6adeefe46142b49269bbe1041f941139e041e01be9f7777ab.png" } },
                    { title: "Best Value Standard Dive: Scuba Diving in Muscat", content: "A standard dive trip along Muscat's coastline, suited to certified divers who don't need the full-day island trip.", tourCard: { slug: "scuba-diving-in-muscat", title: "Scuba Diving in Muscat", description: "A standard certified-diver trip along the Muscat coastline.", price: "From $267", duration: "4.5 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/b51a69e22aad11b2b78dfd5a281d3ab62501f77b45374afb604280379d997fc3.jpg" } },
                    { title: "Best Full-Day Trip: Daymaniyat Islands Scuba Diving", content: "A full-day trip out to the Daymaniyat reserve for divers who want to reach the region's best reef sites.", tourCard: { slug: "dimaniyat-islands-scuba-diving-trip", title: "Dimaniyat Islands Scuba Diving Trip", description: "A full-day scuba diving trip to the Daymaniyat Islands.", price: "From $215", duration: "1 day", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/b72cdc0405388be31a847d26d96fcfc6a5bd828a664ff69a404364e1b483a813.jpg" } },
                    { title: "Best for Coral Reefs: Coral-Reef Scuba Diving Trip", content: "This specifically targets the healthiest coral-reef sites around Daymaniyat, aimed at divers who want reef quality over just logging a dive.", tourCard: { slug: "from-muscat-daymaniyat-islands-coral-reef-scuba", title: "From Muscat: Daymaniyat Islands Coral-Reef Scuba Diving Trip", description: "A coral-reef-focused dive trip to Daymaniyat.", price: "From $462", duration: "4 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/ce7f799ca758647a621fafbe6bf0c11011b9fbe7563b4c45961d5e550b848dd9.jpeg" } },
                    { title: "Practical Tips", content: "Certified-diver trips require you to bring or show proof of certification (PADI or equivalent) — the discover-diving option is the only one that needs none. Visibility and water temperature vary seasonally, with the cooler winter months generally offering clearer water." }
                ],
                faqs: [
                    { q: "What is the best scuba diving tour in Muscat?", a: "A discover-diving experience suits beginners; certified divers should head straight to a Daymaniyat Islands trip." },
                    { q: "Do I need certification to scuba dive in Muscat?", a: "Only for standard dive trips — discover-diving experiences require no prior certification." },
                    { q: "When is the best time to dive in Muscat?", a: "Cooler winter months generally offer clearer water visibility." },
                    { q: "Are the Daymaniyat Islands good for diving?", a: "Yes, they're considered some of the best reef diving in the Gulf region." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "What is the best scuba diving tour in Muscat?", "acceptedAnswer": { "@type": "Answer", "text": "A discover-diving experience suits beginners." } },
                    { "@type": "Question", "name": "Do I need certification?", "acceptedAnswer": { "@type": "Answer", "text": "Only for standard dive trips, not discover-diving." } },
                    { "@type": "Question", "name": "When is the best time to dive?", "acceptedAnswer": { "@type": "Answer", "text": "Cooler winter months generally offer clearer water." } },
                    { "@type": "Question", "name": "Are the Daymaniyat Islands good for diving?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, considered some of the best reef diving in the Gulf." } }
                ] },
            };

        case "best-fishing-trip-muscat":
            return {
                title: "Which Is the Best Fishing Trip in Muscat?",
                seoTitle: "Best Fishing Trip Muscat 2026 | Honest Comparison",
                description: "Compare real fishing trips in Muscat — from a $871 skipper-and-equipment charter to combos with snorkeling and a private island BBQ.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/a985c1a7589b349a3786e5af89edc9469aae63e29cf79f92fd4f7d83f14d05c8.jpeg",
                sections: [
                    { title: "The Short Answer", content: "Muscat's coastal waters offer genuine deep-sea fishing for species like kingfish and tuna, typically run as private charters with a skipper and equipment included. The main choices are whether you want fishing alone or combined with snorkeling and a beach BBQ.", tourCard: { slug: "muscat-fishing-trip-with-skipper-and-equipment", title: "Muscat: Fishing Trip with Skipper and Equipment", description: "A private fishing charter with skipper and equipment included.", price: "From $871", duration: "4 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/a985c1a7589b349a3786e5af89edc9469aae63e29cf79f92fd4f7d83f14d05c8.jpeg" } },
                    { title: "Cheapest: Skipper and Equipment Included", content: "At $871 for the boat, this is the standard entry point for a private fishing charter.", tourCard: { slug: "muscat-fishing-trip-with-skipper-and-equipment", title: "Muscat: Fishing Trip with Skipper and Equipment", description: "The standard private fishing charter option.", price: "From $871", duration: "4 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/a985c1a7589b349a3786e5af89edc9469aae63e29cf79f92fd4f7d83f14d05c8.jpeg" } },
                    { title: "Alternative Equipment Package: Fishing Trip with Equipments", content: "A similarly priced alternative with its own equipment package, worth comparing against the skipper-led option above.", tourCard: { slug: "muscat-fishing-trip-with-equipments", title: "Muscat: Fishing Trip with Equipments", description: "An alternative fishing charter with equipment included.", price: "From $884", duration: "4 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/eae13544aaaf8b1be35e02df869a2a65786b7bdd176d96de7890d08d386dc5fc.jpg" } },
                    { title: "Best Combined Activity: Fishing and Snorkeling Boat Tour", content: "This pairs fishing with a snorkeling stop, good if not everyone in your group wants to fish the whole time.", tourCard: { slug: "muscat-fishing-and-snorkeling-boat-tour", title: "Muscat: Fishing and Snorkeling Boat Tour", description: "A combined fishing and snorkeling boat trip.", price: "From $975", duration: "5 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/637056315bcc50b9ad5e59ae4468c94b8c364473d900f38313ac0dba4047cd5f.jpeg" } },
                    { title: "Best for a Full Day: Private Fishing Trip with Island BBQ", content: "The most complete option, adding an island BBQ and snorkeling to the fishing trip for a full day on the water.", tourCard: { slug: "muscat-private-fishing-trip-with-island-bbq-and", title: "Muscat: Private Fishing Trip with Island BBQ and Snorkeling", description: "A full-day private fishing trip with an island BBQ and snorkeling.", price: "From $1820", duration: "8 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/a818de689fcbee04a4357cdeffd4258dde3c329bfaaf7246c3d0d173413285a4.jpg" } },
                    { title: "Practical Tips", content: "These are priced per boat/charter, not per person — split the cost across your group to compare against per-person activities. Morning departures generally have calmer seas and better fishing activity than afternoon trips." }
                ],
                faqs: [
                    { q: "What is the best fishing trip in Muscat?", a: "A standard skipper-and-equipment charter suits most groups; add snorkeling or a BBQ for a fuller day." },
                    { q: "Are Muscat fishing trips priced per person or per boat?", a: "Per boat/charter — split the cost across your group." },
                    { q: "What fish can I catch near Muscat?", a: "Kingfish and tuna are common catches in these waters." },
                    { q: "What time of day is best for fishing in Muscat?", a: "Morning departures generally have calmer seas and better activity." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "What is the best fishing trip in Muscat?", "acceptedAnswer": { "@type": "Answer", "text": "A standard skipper-and-equipment charter suits most groups." } },
                    { "@type": "Question", "name": "Is it priced per person or per boat?", "acceptedAnswer": { "@type": "Answer", "text": "Per boat/charter." } },
                    { "@type": "Question", "name": "What fish can I catch?", "acceptedAnswer": { "@type": "Answer", "text": "Kingfish and tuna are common." } },
                    { "@type": "Question", "name": "What time is best for fishing?", "acceptedAnswer": { "@type": "Answer", "text": "Morning departures generally have calmer seas." } }
                ] },
            };

        case "best-kayaking-tour-muscat":
            return {
                title: "Which Is the Best Kayaking Tour in Muscat?",
                seoTitle: "Best Kayaking Tour Muscat 2026 | Honest Comparison",
                description: "Compare real kayaking tours in Muscat — from a $33 Al Qurum Beach sunset paddle to full-moon trips and private sunset sessions at Khor Al Khairan.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/ebf7c8261a0d502b2826a262bf8acbc4d5032736fa09774f4545120d7cc5f564.png",
                sections: [
                    { title: "The Short Answer", content: "Kayaking in Muscat is mostly a short, scenic sunset or evening activity rather than a long expedition — Al Qurum Beach is the most common launch point, with Khor Al Khairan offering a quieter lagoon alternative. A basic sunset session is the standard entry point.", tourCard: { slug: "muscat-al-qurum-beach-sunset-kayaking-experience", title: "Muscat: Al Qurum Beach Sunset Kayaking Experience", description: "A sunset kayaking session at Al Qurum Beach.", price: "From $33", duration: "1 hour", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/ebf7c8261a0d502b2826a262bf8acbc4d5032736fa09774f4545120d7cc5f564.png" } },
                    { title: "Cheapest: Al Qurum Beach Sunset Kayaking", content: "At $33, this is the lowest-priced kayaking session, a simple sunset paddle at Al Qurum Beach.", tourCard: { slug: "muscat-al-qurum-beach-sunset-kayaking-experience", title: "Muscat: Al Qurum Beach Sunset Kayaking Experience", description: "The budget-friendly sunset kayaking option.", price: "From $33", duration: "1 hour", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/ebf7c8261a0d502b2826a262bf8acbc4d5032736fa09774f4545120d7cc5f564.png" } },
                    { title: "Best for Flexibility: Morning, Sunset or Full Moon Kayaking", content: "This option lets you choose your timing — morning, sunset, or a monthly full-moon paddle — rather than being locked into one slot.", tourCard: { slug: "oman-muscat-morning-sunset-or-monthly-full-moon", title: "Oman: Muscat Morning, Sunset or Monthly Full Moon Kayaking", description: "A flexible-timing kayaking session with a full-moon option.", price: "From $46", duration: "2 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/45b7719e3f2c861c3c96ba1bc86b9d59e20eeed8bd497586cad059a09f702a95.jpg" } },
                    { title: "Alternative Sunset Option: From Muscat Sunset Kayaking", content: "A similarly priced alternative sunset session, worth comparing for timing and meeting point convenience.", tourCard: { slug: "from-muscat-al-qurum-beach-sunset-kayaking", title: "From Muscat: Al Qurum Beach Sunset Kayaking Experience", description: "An alternative operator's sunset kayaking session.", price: "From $47", duration: "2 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/02e58b92661fc7b0903f0c18b53a96f9aca742a34d27a9a7c1396b8adb0a649a.jpg" } },
                    { title: "Best for a Quiet Lagoon: Private Khor Al Khairan Sunset", content: "This runs at Khor Al Khairan's calmer lagoon rather than the open beach, and is private rather than a group session.", tourCard: { slug: "from-muscat-kayak-at-khor-al-khairan-sunset", title: "From Muscat: Kayak at Khor al khairan Sunset. Private", description: "A private sunset kayaking session at the quieter Khor Al Khairan lagoon.", price: "From $110", duration: "1 hour", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/4c183a5b4893c043c31ce2bc6d406e5cddc1fbd30b5fc1e3e038af1efa14130d.jpg" } },
                    { title: "Practical Tips", content: "Sunset slots book up fast in cooler months when more people are out — reserve a day or two ahead rather than same-day. No prior kayaking experience is needed for any of these sessions; basic instruction is included." }
                ],
                faqs: [
                    { q: "What is the best kayaking tour in Muscat?", a: "A sunset session at Al Qurum Beach suits most visitors; go to Khor Al Khairan for a quieter lagoon." },
                    { q: "Do I need kayaking experience?", a: "No, basic instruction is included in all these sessions." },
                    { q: "What's the cheapest kayaking option in Muscat?", a: "A basic Al Qurum Beach sunset session, around $33." },
                    { q: "Is full moon kayaking available in Muscat?", a: "Yes, as a flexible-timing option alongside morning and sunset slots." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "What is the best kayaking tour in Muscat?", "acceptedAnswer": { "@type": "Answer", "text": "A sunset session at Al Qurum Beach suits most visitors." } },
                    { "@type": "Question", "name": "Do I need experience?", "acceptedAnswer": { "@type": "Answer", "text": "No, basic instruction is included." } },
                    { "@type": "Question", "name": "What's the cheapest option?", "acceptedAnswer": { "@type": "Answer", "text": "A basic Al Qurum Beach sunset session." } },
                    { "@type": "Question", "name": "Is full moon kayaking available?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, as a flexible-timing option." } }
                ] },
            };

        case "best-overnight-camping-trip-muscat":
            return {
                title: "Which Is the Best Overnight Camping Trip from Muscat?",
                seoTitle: "Best Overnight Camping Trip Muscat 2026",
                description: "Compare real overnight camping trips from Muscat — from beach camping with a BBQ dinner to desert camping combined with Wadi and Ibra Village.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/06790d8a8db38b4918e44b4aacdd755b39cd568979b0d5379a5ef5c6386f5178.jpeg",
                sections: [
                    { title: "The Short Answer", content: "Overnight camping near Muscat splits into two distinct experiences: a beach camp with a BBQ dinner close to the city, or a longer desert camping trip further out combined with wadi visits. The beach option is the easier, more accessible choice.", tourCard: { slug: "muscat-overnight-beach-camping-with-bbq-dinner", title: "Muscat: Overnight Beach Camping with BBQ Dinner", description: "An overnight beach camping trip with a BBQ dinner.", price: "From $332", duration: "23 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/06790d8a8db38b4918e44b4aacdd755b39cd568979b0d5379a5ef5c6386f5178.jpeg" } },
                    { title: "Best for Easy Access: Beach Camping with BBQ", content: "The most accessible overnight option, staying close to Muscat rather than venturing into the desert.", tourCard: { slug: "muscat-overnight-beach-camping-with-bbq-dinner", title: "Muscat: Overnight Beach Camping with BBQ Dinner", description: "The easy-access beach camping option with BBQ.", price: "From $332", duration: "23 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/06790d8a8db38b4918e44b4aacdd755b39cd568979b0d5379a5ef5c6386f5178.jpeg" } },
                    { title: "Best for a Desert Experience: Desert Overnight Camping with Wadi & Ibra Village", content: "This takes you further out for a genuine desert camping experience combined with a wadi stop and a visit to Ibra Village.", tourCard: { slug: "muscat-desert-overnight-camping-wadi-ibra-village", title: "Muscat: Desert Overnight Camping, Wadi & Ibra Village & Souk", description: "A desert camping trip combined with a wadi and Ibra Village.", price: "From $1404", duration: "2 days", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/a48500c43d686b5c1170cf29030818060dd1c54189f1949066e123894e7fc535.jpg" } },
                    { title: "Practical Tips", content: "Beach camping near Muscat is a far more budget-friendly entry point than full desert camping trips, which require longer travel and more logistics. Check whether tents and bedding are included or if you need to bring your own." }
                ],
                faqs: [
                    { q: "What is the best overnight camping trip from Muscat?", a: "Beach camping suits travellers who want an easy, closer overnight option; go for desert camping for a fuller wilderness experience." },
                    { q: "Is beach camping cheaper than desert camping?", a: "Yes, significantly, given the shorter travel distance and simpler logistics." },
                    { q: "Are tents included in camping trips?", a: "Usually yes, but confirm with your specific operator before booking." },
                    { q: "What's included in a BBQ beach camping trip?", a: "Typically tents, a BBQ dinner, and transfer from Muscat." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "What is the best overnight camping trip from Muscat?", "acceptedAnswer": { "@type": "Answer", "text": "Beach camping suits travellers who want an easy option." } },
                    { "@type": "Question", "name": "Is beach camping cheaper?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, significantly cheaper than desert camping." } },
                    { "@type": "Question", "name": "Are tents included?", "acceptedAnswer": { "@type": "Answer", "text": "Usually yes, confirm with the operator." } },
                    { "@type": "Question", "name": "What's included in BBQ beach camping?", "acceptedAnswer": { "@type": "Answer", "text": "Typically tents, BBQ dinner, and transfer." } }
                ] },
            };

        case "best-bimmah-sinkhole-tour-muscat":
            return {
                title: "Which Is the Best Bimmah Sinkhole Tour from Muscat?",
                seoTitle: "Best Bimmah Sinkhole Tour Muscat 2026 | Honest Comparison",
                description: "Compare real Bimmah Sinkhole day trips from Muscat — from a $406 private tour with Wadi Shab to coastal combos with Sur and Fins Beach.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/0c89b4ed94f73513d76cd42235ccc9f2b9d8e00398d019189aad92186fcfd79d.jpg",
                sections: [
                    { title: "The Short Answer", content: "Bimmah Sinkhole is a collapsed limestone crater filled with turquoise water, easily combined with Wadi Shab or Fins Beach since they sit along the same coastal road. A private day tour pairing the sinkhole with Wadi Shab is the most popular combination.", tourCard: { slug: "from-muscat-private-day-tour-to-bimmah-sinkhole", title: "From Muscat: Private Day Tour to Bimmah Sinkhole & Wadi Shab", description: "A private day tour combining Bimmah Sinkhole and Wadi Shab.", price: "From $406", duration: "8 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/0c89b4ed94f73513d76cd42235ccc9f2b9d8e00398d019189aad92186fcfd79d.jpg" } },
                    { title: "Best Value Combo: Wadi Tiwi, Fins Beach & Bimmah Sinkhole", content: "This combo adds Wadi Tiwi, a less-visited canyon, alongside the usual Fins Beach and sinkhole stops.", tourCard: { slug: "from-muscat-tour-to-wadi-tiwi-fins-beach-bimmah", title: "From Muscat: Tour to Wadi Tiwi, Fins Beach & Bimmah Sinkhole", description: "A coastal day tour adding Wadi Tiwi to the sinkhole and Fins Beach.", price: "From $416", duration: "8 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/b479a3c7683800eb042a6065f8872b2b6c33ca52167e673682cd1d5850dfa5c4.jpeg" } },
                    { title: "Best for a Different Wadi: Wadi Al Arbeieen Swim & Hike", content: "This substitutes Wadi Al Arbeieen for Wadi Shab, a quieter alternative canyon with its own swim and hike combined with the sinkhole and beach.", tourCard: { slug: "muscat-wadi-al-arbeieen-swim-hike-sinkhole-beach", title: "Muscat: Wadi Al Arbeieen Swim & Hike, Sinkhole, Beach Tour", description: "A day trip pairing Wadi Al Arbeieen with the sinkhole and beach.", price: "From $416", duration: "8.5 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/3c53e66f8e66523e56b1baa0f5d126a8b86e9657c755937ac06a2c687fa5f3a1.png" } },
                    { title: "Best for Sur Lovers: Sur Coastal Tour with Bimmah Sinkhole & Fins Beach", content: "This extends the day further along the coast to Sur, the historic dhow-building town, alongside the sinkhole and Fins Beach.", tourCard: { slug: "muscat-sur-coastal-tour-with-bimmah-sinkhole-fins", title: "Muscat: Sur Coastal Tour with Bimmah Sinkhole & Fins Beach", description: "A coastal day trip combining Sur, Bimmah Sinkhole, and Fins Beach.", price: "From $637", duration: "10 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/af90520fe28ba47fb35f1dbd1cfeb522b0e0077f52a87e68ede539fb3d2fa944.jpg" } },
                    { title: "Practical Tips", content: "The sinkhole has stairs leading directly down to swimmable water — no boat or hike required, unlike Wadi Shab. Midweek mornings are noticeably quieter than weekend afternoons, when it gets crowded with local day-trippers." }
                ],
                faqs: [
                    { q: "What is the best Bimmah Sinkhole tour from Muscat?", a: "A combo with Wadi Shab suits most visitors since they're along the same coastal road." },
                    { q: "Is Bimmah Sinkhole easy to access?", a: "Yes, stairs lead directly down to the water — no hike or boat needed." },
                    { q: "When is Bimmah Sinkhole least crowded?", a: "Midweek mornings, well before weekend afternoons when local day-trippers arrive." },
                    { q: "Can Bimmah Sinkhole be combined with Sur?", a: "Yes, longer coastal tours extend to the historic town of Sur." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "What is the best Bimmah Sinkhole tour?", "acceptedAnswer": { "@type": "Answer", "text": "A combo with Wadi Shab suits most visitors." } },
                    { "@type": "Question", "name": "Is it easy to access?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, stairs lead directly to the water." } },
                    { "@type": "Question", "name": "When is it least crowded?", "acceptedAnswer": { "@type": "Answer", "text": "Midweek mornings." } },
                    { "@type": "Question", "name": "Can it be combined with Sur?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, longer coastal tours extend to Sur." } }
                ] },
            };

        case "best-horse-riding-tour-muscat":
            return {
                title: "Which Is the Best Horse Riding Tour in Muscat?",
                seoTitle: "Best Horse Riding Tour Muscat 2026 | Honest Comparison",
                description: "Compare real horse riding tours in Muscat — from an $85 Arabian horse beach ride to sunset rides and combo trips with camel riding.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/192fae1dc42ed0b512fc43a3909995bdbacf34f0626c151ad937644e51191045.jpeg",
                sections: [
                    { title: "The Short Answer", content: "Horse riding in Muscat is almost always a beach activity, often on genuine Arabian horses, with sunset timing being the most popular slot for the lighting and cooler temperatures. A standard beach ride is the entry point before considering a sunset or desert combo.", tourCard: { slug: "muscat-arabian-horse-riding-on-the-beach", title: "Muscat: Arabian Horse Riding on the Beach", description: "A standard Arabian horse beach ride.", price: "From $85", duration: "1 hour", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/192fae1dc42ed0b512fc43a3909995bdbacf34f0626c151ad937644e51191045.jpeg" } },
                    { title: "Cheapest: Arabian Horse Riding on the Beach", content: "At $85, this is the standard entry point for a beach horse ride on an Arabian horse.", tourCard: { slug: "muscat-arabian-horse-riding-on-the-beach", title: "Muscat: Arabian Horse Riding on the Beach", description: "The standard beach horse riding option.", price: "From $85", duration: "1 hour", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/192fae1dc42ed0b512fc43a3909995bdbacf34f0626c151ad937644e51191045.jpeg" } },
                    { title: "Best for Privacy: Private Horse Riding on Al Sawadi Beach", content: "This runs as a private session on Al Sawadi Beach rather than a group ride, giving more one-on-one instruction time.", tourCard: { slug: "muscat-private-horse-riding-on-al-sawadi-beach", title: "Muscat: Private Horse Riding on Al Sawadi Beach", description: "A private horse riding session on Al Sawadi Beach.", price: "From $85", duration: "1 hour", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/3396ea07a1548022ba4c0a8c9a6da992e3ea126cb030c512bb55693e9bba6d4b.jpg" } },
                    { title: "Best for Scenery: Sunset Horse Riding with Private Transfer", content: "This adds sunset timing and a private transfer, worth the small premium for the lighting alone.", tourCard: { slug: "muscat-sunset-horse-riding-on-the-beach-private", title: "Muscat: Sunset Horse Riding on the Beach + Private Transfer", description: "A sunset beach horse ride with private transfer.", price: "From $124", duration: "1 hour", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/bf98ef8654ff74f4f94fc2479403f6de878d60c73e7c711bc71cc52449a52974.jpg" } },
                    { title: "Best Combo: Desert Sunset Tour with Horse and Camel Ride", content: "This combines both horse and camel riding into one desert sunset outing, good for travellers who want to try both.", tourCard: { slug: "muscat-desert-sunset-tour-with-horse-and-camel", title: "Muscat: Desert Sunset Tour with Horse and Camel Ride", description: "A desert sunset tour combining horse and camel riding.", price: "From $648", duration: "8 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/bf98ef8654ff74f4f94fc2479403f6de878d60c73e7c711bc71cc52449a52974.jpg" } },
                    { title: "Practical Tips", content: "No prior riding experience is needed for the beach sessions — horses are led or closely guided for beginners. Sunset slots book up fastest, so reserve a day or two ahead in peak season." }
                ],
                faqs: [
                    { q: "What is the best horse riding tour in Muscat?", a: "A standard beach ride suits most visitors; go for the sunset slot for better lighting and cooler temperatures." },
                    { q: "Do I need riding experience?", a: "No, beach sessions are suitable for beginners with guided or led horses." },
                    { q: "Can I combine horse and camel riding in Muscat?", a: "Yes, desert sunset tours often combine both." },
                    { q: "What's the cheapest horse riding option in Muscat?", a: "A standard Arabian horse beach ride, around $85." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "What is the best horse riding tour in Muscat?", "acceptedAnswer": { "@type": "Answer", "text": "A standard beach ride suits most visitors." } },
                    { "@type": "Question", "name": "Do I need experience?", "acceptedAnswer": { "@type": "Answer", "text": "No, beach sessions suit beginners." } },
                    { "@type": "Question", "name": "Can I combine horse and camel riding?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, desert sunset tours often combine both." } },
                    { "@type": "Question", "name": "What's the cheapest option?", "acceptedAnswer": { "@type": "Answer", "text": "A standard Arabian horse beach ride." } }
                ] },
            };

        case "best-quad-biking-tour-muscat":
            return {
                title: "Which Is the Best Quad Biking Tour in Muscat?",
                seoTitle: "Best Quad Biking Tour Muscat 2026 | Honest Comparison",
                description: "Compare real quad biking tours in Muscat — from a $104 sunset desert ride with BBQ to combos with kayaking and Wadi Bani Khalid.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/a70e9825ebd7991ee8b1bf2b5ff72d6d4b17823a67d9bed16ca2733d7a10091a.jpeg",
                sections: [
                    { title: "The Short Answer", content: "Quad biking near Muscat is almost always a desert sunset activity, often bundled with a BBQ dinner or as an add-on to a longer desert day trip. A standalone sunset quad ride with BBQ is the simplest, most direct option.", tourCard: { slug: "muscatoptional-quad-bike-with-sunset-watching", title: "Muscat: Optional Quad Bike with Sunset Watching, Pickup & BBQ", description: "A desert quad biking session with sunset watching and BBQ.", price: "From $104", duration: "4 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/a70e9825ebd7991ee8b1bf2b5ff72d6d4b17823a67d9bed16ca2733d7a10091a.jpeg" } },
                    { title: "Cheapest: Quad Bike with Sunset Watching & BBQ", content: "At $104, this covers a full quad biking session plus sunset viewing and a BBQ dinner.", tourCard: { slug: "muscatoptional-quad-bike-with-sunset-watching", title: "Muscat: Optional Quad Bike with Sunset Watching, Pickup & BBQ", description: "The standalone quad biking and sunset BBQ option.", price: "From $104", duration: "4 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/a70e9825ebd7991ee8b1bf2b5ff72d6d4b17823a67d9bed16ca2733d7a10091a.jpeg" } },
                    { title: "Best Add-On: Sunset Desert Safari with Quad & Horse Rides", content: "This folds quad biking into a wider sunset desert safari alongside optional horse rides, good if you want more than one activity in the same outing.", tourCard: { slug: "from-muscat-sunset-desert-safari-add-on-quad", title: "From Muscat: Sunset Desert Safari, Add-On Quad & Horse Rides", description: "A sunset desert safari with optional quad biking and horse rides.", price: "From $124", duration: "8.5 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/6219025355dade4dd52463bd230c2bda7e55a59aa3be2f0d18c542e0c9fc8b99.png" } },
                    { title: "Best Multi-Activity Combo: Quad Biking, Kayaking & SEABOB Tour", content: "This pairs a half-day of quad biking with kayaking and a SEABOB underwater scooter session, for travellers who want to pack in variety.", tourCard: { slug: "muscat-private-half-day-quad-biking-kayaking", title: "Muscat: Private Half-Day Quad Biking, Kayaking & SEABOB Tour", description: "A private multi-activity combo of quad biking, kayaking, and SEABOB.", price: "From $253", duration: "4 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/f93bd0069ff3588d83f9294da9859e2e66b9fac3a6e80f623bd0a5ed91df0545.png" } },
                    { title: "Best for a Longer Desert Day: Desert & Wadi Bani Khalid with Quad Option", content: "This is a full desert and wadi day trip with quad biking offered as an optional add-on rather than the main activity.", tourCard: { slug: "muscat-desert-wadi-bani-khalid-tour-with-quad", title: "Muscat: Desert & Wadi Bani Khalid Tour with Quad Bike Option", description: "A desert and wadi day trip with an optional quad bike add-on.", price: "From $260", duration: "9 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/60b4cfc82137712e227c2d4950b1adca68260891bc8157438de91c9f0818f31d.jpg" } },
                    { title: "Practical Tips", content: "A driving license is generally required to operate the quad yourself; passenger seats are sometimes available for those who'd rather not drive. Sand gets everywhere — closed shoes and a change of clothes are worth bringing." }
                ],
                faqs: [
                    { q: "What is the best quad biking tour in Muscat?", a: "A standalone sunset quad ride with BBQ suits most visitors; combine with other activities for a fuller day." },
                    { q: "Do I need a license to quad bike in Muscat?", a: "Generally yes to drive; passenger seats are sometimes available." },
                    { q: "What should I wear for quad biking?", a: "Closed shoes, and bring a change of clothes since sand gets everywhere." },
                    { q: "Can quad biking be combined with other activities?", a: "Yes, kayaking, SEABOB, and wadi day trips are common combos." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "What is the best quad biking tour in Muscat?", "acceptedAnswer": { "@type": "Answer", "text": "A standalone sunset quad ride with BBQ suits most visitors." } },
                    { "@type": "Question", "name": "Do I need a license?", "acceptedAnswer": { "@type": "Answer", "text": "Generally yes to drive." } },
                    { "@type": "Question", "name": "What should I wear?", "acceptedAnswer": { "@type": "Answer", "text": "Closed shoes and a change of clothes." } },
                    { "@type": "Question", "name": "Can it be combined with other activities?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, kayaking, SEABOB, and wadi trips are common." } }
                ] },
            };

        case "best-city-tour-muscat":
            return {
                title: "Which Is the Best City Tour in Muscat?",
                seoTitle: "Best Muscat City Tour 2026 | Honest Comparison",
                description: "Compare real Muscat city tours — from a $59 group guided tour to private half-day and full-day versions covering the city's main landmarks.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/027555e67c24a691579906614a94dcd097346d5b654ff17cd1de32eaed0bbdd7.jpeg",
                sections: [
                    { title: "The Short Answer", content: "A Muscat city tour typically covers the Grand Mosque exterior or interior, the Royal Opera House, Old Muscat's forts, and Muttrah Souq in some combination. A group guided tour with pickup is the most budget-friendly way to see the main landmarks.", tourCard: { slug: "muscat-group-guided-city-tour-and-pickup-drop-off", title: "Muscat: Group Guided City Tour and Pickup-drop off", description: "A budget-friendly group guided city tour with pickup included.", price: "From $59", duration: "4 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/027555e67c24a691579906614a94dcd097346d5b654ff17cd1de32eaed0bbdd7.jpeg" } },
                    { title: "Cheapest: Group Guided City Tour", content: "At $59, this is the lowest-priced way to cover Muscat's main landmarks with pickup and drop-off included.", tourCard: { slug: "muscat-group-guided-city-tour-and-pickup-drop-off", title: "Muscat: Group Guided City Tour and Pickup-drop off", description: "The budget group city tour option.", price: "From $59", duration: "4 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/027555e67c24a691579906614a94dcd097346d5b654ff17cd1de32eaed0bbdd7.jpeg" } },
                    { title: "Best for Privacy: Private Half-Day City Tour of Main Landmarks", content: "A similarly priced private version, giving flexibility on pace without a big jump in cost.", tourCard: { slug: "muscat-private-half-day-city-tour-of-main", title: "Muscat: Private Half-Day City Tour of Main Landmarks", description: "A private half-day city tour of Muscat's main landmarks.", price: "From $59", duration: "4.5 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/7448bba2cf5c7a3c02b2a64a1ca249f8c062dd6309dda24d90c5a5cb5abfa1bf.png" } },
                    { title: "Best Half-Day Standard: Half-Day City Tour", content: "A straightforward half-day format, a reliable mid-range option between the budget group tours and full-day versions.", tourCard: { slug: "muscat-half-day-city-tour", title: "Muscat: Half-Day City Tour", description: "A standard half-day Muscat city tour.", price: "From $141", duration: "4 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/080729280ec37beab9b1e8b6e38e2947a58c45b601841f608bfe998d383e953a.png" } },
                    { title: "Best for Seeing Everything: Full-Day City Tour", content: "This extends the standard city tour into a full day, giving enough time to cover the mosque, souq, and other landmarks without rushing.", tourCard: { slug: "muscat-full-day-city-tour", title: "Muscat: Full-Day City Tour", description: "A full-day version of the Muscat city tour.", price: "From $91", duration: "7 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/cc5517bd7b94a7ec88d1ba37ec72c064aef3aeaaa844936933d130beb7c9091d.jpg" } },
                    { title: "Practical Tips", content: "If the Grand Mosque is a must-see, confirm whether your chosen city tour includes entry or only an exterior photo stop — some budget tours skip the interior visit. Most city tours run in air-conditioned vehicles, important given Muscat's heat outside winter months." }
                ],
                faqs: [
                    { q: "What is the best city tour in Muscat?", a: "A group guided tour suits most budgets; go private for more flexibility or full-day for a more thorough visit." },
                    { q: "Does a Muscat city tour include the Grand Mosque?", a: "Most do, but confirm whether it's an interior visit or just an exterior stop." },
                    { q: "How long is a Muscat city tour?", a: "Half-day tours run about 4 hours; full-day versions run 7+ hours." },
                    { q: "What's the cheapest Muscat city tour?", a: "A group guided tour with pickup, around $59." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "What is the best city tour in Muscat?", "acceptedAnswer": { "@type": "Answer", "text": "A group guided tour suits most budgets." } },
                    { "@type": "Question", "name": "Does it include the Grand Mosque?", "acceptedAnswer": { "@type": "Answer", "text": "Most do, confirm interior vs exterior visit." } },
                    { "@type": "Question", "name": "How long is a city tour?", "acceptedAnswer": { "@type": "Answer", "text": "Half-day around 4 hours, full-day 7+ hours." } },
                    { "@type": "Question", "name": "What's the cheapest option?", "acceptedAnswer": { "@type": "Answer", "text": "A group guided tour with pickup." } }
                ] },
            };

        case "best-nakhal-fort-hot-springs-tour-muscat":
            return {
                title: "Which Is the Best Nakhal Fort & Hot Springs Tour from Muscat?",
                seoTitle: "Best Nakhal Fort & Hot Springs Tour Muscat 2026",
                description: "Compare real Nakhal Fort and hot springs day trips from Muscat — from a Rustaq combo to private wellness-focused escapes.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/ecf9ea73a0d6238f042adb8631382c08f5ec9469e0fdbf8364672ebcf627bef1.jpg",
                sections: [
                    { title: "The Short Answer", content: "Nakhal Fort sits near Ain Al Thawwarah, a natural hot spring that stays warm year-round and is free to enter. A half-day tour covering both is the simplest way to see this combination without a longer Rustaq or Jebel Akhdar add-on.", tourCard: { slug: "private-half-day-nakhal-tour", title: "Private Half Day Nakhal Tour", description: "A private half-day tour of Nakhal Fort and the nearby hot spring.", price: "From $354", duration: "4.5 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/e68d123c503a78fb7b54cc60e7d4d83caec91c470636002314e20f80e5b690c4.jpg" } },
                    { title: "Cheapest: Rustaq Tour with Lunch & Hot Springs", content: "This combines a Rustaq visit with lunch and the hot springs at a lower price point than the dedicated Nakhal tours.", tourCard: { slug: "from-muscat-rustaq-tour-with-lunch-hot-springs", title: "From Muscat: Rustaq Tour with Lunch & Hot Springs", description: "A Rustaq and hot springs day trip with lunch included.", price: "From $260", duration: "5 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/32890a944451f9ba1dbb2108a9bd6b4f66592cef46faed17b40388477d60dba2.jpeg" } },
                    { title: "Best Combo: Nakhal Fort, Hot Springs & Dunes Sunset Tour", content: "This adds a desert dunes sunset stop to the Nakhal and hot springs visit, extending the day into the evening.", tourCard: { slug: "from-muscat-nakhal-fort-hot-springs-dunes-sunset", title: "From Muscat: Nakhal Fort, Hot Springs & Dunes Sunset Tour", description: "A day trip combining Nakhal Fort, hot springs, and a desert dunes sunset.", price: "From $294", duration: "5 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/ecf9ea73a0d6238f042adb8631382c08f5ec9469e0fdbf8364672ebcf627bef1.jpg" } },
                    { title: "Best for Relaxation: Private Nakhal Hot Springs Wellness Escape", content: "This frames the hot springs visit explicitly as a wellness experience, worth it if relaxation is your main goal rather than sightseeing.", tourCard: { slug: "muscat-private-nakhal-hot-springs-wellness-escape", title: "Muscat: Private Nakhal Hot Springs Wellness Escape", description: "A private wellness-focused trip to the Nakhal hot springs.", price: "From $462", duration: "8 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/9025a4f036d595a3e9d9fec05196be5cc6141c42c8fa4e6ddd97472b5e14f58d.jpg" } },
                    { title: "Practical Tips", content: "Ain Al Thawwarah's hot spring is free and open to the public, so even budget tours can include a swim stop there. The water stays naturally warm year-round, making this a good cooler-weather activity too, not just a summer one." }
                ],
                faqs: [
                    { q: "What is the best Nakhal Fort & hot springs tour from Muscat?", a: "A private half-day tour suits most visitors; add Rustaq or dunes for a fuller day." },
                    { q: "Is the Nakhal hot spring free to enter?", a: "Yes, Ain Al Thawwarah is a free public hot spring." },
                    { q: "Is the hot spring warm year-round?", a: "Yes, the water stays naturally warm regardless of season." },
                    { q: "Can Nakhal Fort be combined with other sights?", a: "Yes, Rustaq and desert dunes sunset are common add-ons." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "What is the best Nakhal Fort & hot springs tour?", "acceptedAnswer": { "@type": "Answer", "text": "A private half-day tour suits most visitors." } },
                    { "@type": "Question", "name": "Is the hot spring free?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, Ain Al Thawwarah is free and public." } },
                    { "@type": "Question", "name": "Is it warm year-round?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, naturally warm regardless of season." } },
                    { "@type": "Question", "name": "Can it be combined with other sights?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, Rustaq and desert dunes are common add-ons." } }
                ] },
            };

        case "best-sunset-dhow-cruise-muscat":
            return {
                title: "Which Is the Best Sunset Dhow Cruise in Muscat?",
                seoTitle: "Best Sunset Dhow Cruise Muscat 2026 | Honest Comparison",
                description: "Compare real sunset dhow cruises in Muscat — from a $63 Omani-hospitality cruise to coastal sunset versions with a full-day combo option.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/7ee0746f4236b81c5dcf2b9dc5a0541bf75f27cd4ba77cc825920a8e66bf1a34.jpg",
                sections: [
                    { title: "The Short Answer", content: "A traditional wooden dhow cruise along Muscat's coastline at sunset is one of the city's most reliably scenic, low-effort activities, usually including traditional refreshments. Most versions run 2 hours and differ mainly in hospitality style and exact route.", tourCard: { slug: "muscat-sunset-dhow-cruise-with-omani-hospitality", title: "Muscat: Sunset Dhow Cruise with Omani Hospitality", description: "A traditional dhow sunset cruise with Omani hospitality.", price: "From $63", duration: "2 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/7ee0746f4236b81c5dcf2b9dc5a0541bf75f27cd4ba77cc825920a8e66bf1a34.jpg" } },
                    { title: "Cheapest: Sunset Dhow Cruise with Omani Hospitality", content: "At $63, this is the lowest-priced dhow cruise, including traditional Omani hospitality touches like dates and coffee.", tourCard: { slug: "muscat-sunset-dhow-cruise-with-omani-hospitality", title: "Muscat: Sunset Dhow Cruise with Omani Hospitality", description: "The budget-friendly dhow cruise with traditional hospitality.", price: "From $63", duration: "2 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/7ee0746f4236b81c5dcf2b9dc5a0541bf75f27cd4ba77cc825920a8e66bf1a34.jpg" } },
                    { title: "Best for Coastal Views: Coastal Sunset Cruise", content: "This version emphasizes a longer coastal route, passing more of Muscat's waterfront forts and skyline.", tourCard: { slug: "muscat-coastal-sunset-cruise-on-a-traditional", title: "Muscat: Coastal Sunset Cruise on a Traditional Omani Dhow", description: "A coastal-route sunset dhow cruise.", price: "From $72", duration: "2 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/9f7f8fe07edddb31257bb1efad86ce31e62a7fb63e767d124d21b0626b2d7a0a.png" } },
                    { title: "Alternative Coastal Route: Omani Dhow Coastal and Sunset Cruise", content: "A similarly priced coastal alternative, worth comparing for departure point and timing.", tourCard: { slug: "muscat-omani-dhow-coastal-and-sunset-cruise", title: "Muscat: Omani Dhow Coastal and Sunset Cruise", description: "An alternative coastal sunset dhow cruise.", price: "From $78", duration: "2 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/ded406f53dc446f4.jpeg" } },
                    { title: "Best for a Fuller Day: Full-Day Tour with Sunset Dhow Cruise & Local Lunch", content: "This bundles the sunset cruise with a full day of touring and a local lunch, good if you want to combine the cruise with other activities rather than booking it separately.", tourCard: { slug: "muscat-full-day-tour-with-sunset-dhow-cruise", title: "Muscat: Full-day Tour with Sunset Dhow Cruise & Local Lunch", description: "A full-day tour combining a sunset dhow cruise with a local lunch.", price: "From $186", duration: "9 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/7ee0746f4236b81c5dcf2b9dc5a0541bf75f27cd4ba77cc825920a8e66bf1a34.jpg" } },
                    { title: "Practical Tips", content: "Timing is weather- and season-dependent since the cruise is built around sunset — departure times shift month to month, so confirm the exact pickup time close to your date. Dolphin sightings are possible but not guaranteed on these routes, unlike the dedicated dolphin-watching tours." }
                ],
                faqs: [
                    { q: "What is the best sunset dhow cruise in Muscat?", a: "The standard Omani hospitality cruise suits most visitors; go coastal-route for more views of the waterfront forts." },
                    { q: "How long is a Muscat sunset dhow cruise?", a: "Most run about 2 hours, timed around sunset." },
                    { q: "Will I see dolphins on a sunset dhow cruise?", a: "Possible but not guaranteed — book a dedicated dolphin-watching tour if that's your priority." },
                    { q: "What's included on a sunset dhow cruise?", a: "Traditional Omani refreshments like dates and coffee are common." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "What is the best sunset dhow cruise in Muscat?", "acceptedAnswer": { "@type": "Answer", "text": "The standard Omani hospitality cruise suits most visitors." } },
                    { "@type": "Question", "name": "How long is it?", "acceptedAnswer": { "@type": "Answer", "text": "Most run about 2 hours." } },
                    { "@type": "Question", "name": "Will I see dolphins?", "acceptedAnswer": { "@type": "Answer", "text": "Possible but not guaranteed." } },
                    { "@type": "Question", "name": "What's included?", "acceptedAnswer": { "@type": "Answer", "text": "Traditional Omani refreshments like dates and coffee." } }
                ] },
            };

        case "best-wadi-bani-awf-bilad-sayt-tour-muscat":
            return {
                title: "Which Is the Best Wadi Bani Awf & Bilad Sayt Tour from Muscat?",
                seoTitle: "Best Wadi Bani Awf & Bilad Sayt Tour Muscat 2026",
                description: "Compare real Wadi Bani Awf and Bilad Sayt day trips from Muscat — from a 4WD tour combo with Balad Sayt to a Nakhal and hot springs extension.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/646b18f3aef920dd6710cc8a2f54537d063a02ffabd1b6441097809d527dd7a8.jpg",
                sections: [
                    { title: "The Short Answer", content: "Wadi Bani Awf's canyon drive leads to Bilad Sayt, a terraced mountain village often called Oman's most photogenic settlement. This route requires serious 4WD driving skill, which is why nearly every tour runs with an experienced local driver rather than self-drive.", tourCard: { slug: "from-muscat-full-day-wadi-bani-awf-balad-sayt", title: "From Muscat: Full-Day Wadi Bani Awf & Balad Sayt 4WD Tour", description: "A full-day 4WD tour of Wadi Bani Awf and Bilad Sayt village.", price: "From $614", duration: "8 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/646b18f3aef920dd6710cc8a2f54537d063a02ffabd1b6441097809d527dd7a8.jpg" } },
                    { title: "Best Value: Day Trip to Wadi Bani Awf, Balad Sayt & Nakhal Fort", content: "This extends the route to include Nakhal Fort and its hot spring, combining two distinct experiences in one day.", tourCard: { slug: "day-trip-to-wadi-bani-awfbalad-saytnakhal-fort", title: "Day Trip to Wadi Bani Awf, Balad Sayt, Nakhal Fort-Hot Spring", description: "A day trip combining Wadi Bani Awf, Bilad Sayt, and Nakhal Fort's hot spring.", price: "From $578", duration: "8 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/68232c1e2e1eed582d334451c655606ccf8bba5c9b02dc79b918f8021533b40a.jpg" } },
                    { title: "Alternative Route: Rustaq & Bilad Sayt", content: "This pairs Bilad Sayt with Rustaq instead of Nakhal, a worthwhile alternative if you've already seen Nakhal Fort.", tourCard: { slug: "barcelo-mussanah-rustaq-bilad-sayt", title: "Barceló Mussanah: Rustaq & Bilad Sayt", description: "A day trip combining Rustaq and the Bilad Sayt village.", price: "From $389", duration: "11.5 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/f6664d1b04ba8e84edb2f4c09850d4c1c01cbc6850163c59f16aa34b2cf5b96b.png" } },
                    { title: "Most Complete Route: Nakhal, Nakhal Hot Springs, Wadi Bani Awf & Bilad Sayt", content: "This is the widest-ranging version, covering Nakhal Fort, its hot spring, and the full Wadi Bani Awf-to-Bilad Sayt drive in a single long day.", tourCard: { slug: "nakhal-fort-nakhal-hot-springs-wadi-bani-awf", title: "Nakhal Fort, Nakhal Hot Springs, Wadi Bani Awf & Bilad Sayt", description: "The most complete combination of Nakhal, its hot springs, and Bilad Sayt.", price: "From $502", duration: "8 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/729f94f8849baa9fbf1d4c0be204b0cb178f0d8b5243fce7d2c38b7855d0872b.jpeg" } },
                    { title: "Practical Tips", content: "The Wadi Bani Awf canyon road is narrow with sheer drops in sections and is genuinely one of Oman's more intense 4WD drives — never attempt it without an experienced local driver. Bilad Sayt's terraces look best in the morning light before midday haze sets in." }
                ],
                faqs: [
                    { q: "What is the best Wadi Bani Awf & Bilad Sayt tour from Muscat?", a: "A full-day 4WD tour with an experienced local driver suits most visitors; add Nakhal Fort for a fuller day." },
                    { q: "Is the Wadi Bani Awf road dangerous?", a: "It's a genuinely intense 4WD drive with sheer drops in sections — always go with an experienced local driver." },
                    { q: "What makes Bilad Sayt special?", a: "Its dramatic terraced mountain setting makes it one of Oman's most photographed villages." },
                    { q: "Can this be combined with Nakhal Fort?", a: "Yes, several tours combine the route with Nakhal Fort and its hot spring." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "What is the best Wadi Bani Awf & Bilad Sayt tour?", "acceptedAnswer": { "@type": "Answer", "text": "A full-day 4WD tour with an experienced driver suits most visitors." } },
                    { "@type": "Question", "name": "Is the road dangerous?", "acceptedAnswer": { "@type": "Answer", "text": "It's an intense 4WD drive with sheer drops in sections." } },
                    { "@type": "Question", "name": "What makes Bilad Sayt special?", "acceptedAnswer": { "@type": "Answer", "text": "Its dramatic terraced mountain setting." } },
                    { "@type": "Question", "name": "Can it be combined with Nakhal Fort?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, several tours combine the two." } }
                ] },
            };

        case "best-muttrah-souq-tour-muscat":
            return {
                title: "Which Is the Best Muttrah Souq Tour in Muscat?",
                seoTitle: "Best Muttrah Souq Tour Muscat 2026 | Honest Comparison",
                description: "Compare real Muttrah Souq tours in Muscat — from a focused $104 food-and-market walk to half-day and city-highlights combos.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/07f914c256f9f149c80fa4262e0bee7b1c72056a30b341c2bdce409fba74f8da.jpeg",
                sections: [
                    { title: "The Short Answer", content: "Muttrah Souq is one of the oldest marketplaces in the Arab world, known for frankincense, textiles, and silver. A dedicated food-and-souq walking tour gets you deeper into the market than a brief stop on a larger city tour.", tourCard: { slug: "muscat-muttrah-souq-tour-with-omani-food", title: "Muscat: Muttrah Souq Tour with Omani Food", description: "A focused walking tour of Muttrah Souq with Omani food tastings.", price: "From $104", duration: "2 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/07f914c256f9f149c80fa4262e0bee7b1c72056a30b341c2bdce409fba74f8da.jpeg" } },
                    { title: "Best for Food Lovers: Muttrah Souq Tour with Omani Food", content: "This is the most dedicated option, built specifically around tasting Omani food while walking through the souq's alleys.", tourCard: { slug: "muscat-muttrah-souq-tour-with-omani-food", title: "Muscat: Muttrah Souq Tour with Omani Food", description: "The food-focused Muttrah Souq walking tour.", price: "From $104", duration: "2 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/07f914c256f9f149c80fa4262e0bee7b1c72056a30b341c2bdce409fba74f8da.jpeg" } },
                    { title: "Best Combined with the Mosque: Half-Day City Tour of Grand Mosque & Muttrah Souk", content: "This pairs the souq with the Grand Mosque for a half-day that covers both of Muscat's standout sights.", tourCard: { slug: "muscat-half-day-city-tour-of-grand-mosque-muttrah", title: "Muscat: Half-Day City Tour of Grand Mosque & Muttrah Souk", description: "A half-day combo of the Grand Mosque and Muttrah Souk.", price: "From $234", duration: "5 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/0127455a11ee2222d0932dde511543cddb08bfd258439ff5cf8e05894800d65b.jpeg" } },
                    { title: "Best Value Shared Option: Shared City Tour with Free Time at Muttrah Souq", content: "This gives you unstructured free time to browse the souq yourself after a shared city tour, rather than a fully guided walk.", tourCard: { slug: "muscat-shared-4-hour-city-tour-free-time-at", title: "Muscat: Shared 4-Hour City Tour & Free Time at Muttrah Souq", description: "A shared city tour with free time to explore Muttrah Souq.", price: "From $68", duration: "10 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/84c72ccc7bdbb73dee1b815b62df52c05815763a43de84d911853f30fe13a695.jpg" } },
                    { title: "Best for a Quick Overview: 3-Hour City Tour with Opera & Mutrah Souq", content: "A shorter overview combining the Royal Opera House with a quick souq visit, suited to travellers short on time.", tourCard: { slug: "muscat-3-hour-city-tour-visit-mosque-opera-mutrah", title: "Muscat 3-Hour City Tour: Visit Mosque, Opera & Mutrah Souq", description: "A 3-hour overview combining the mosque, opera house, and souq.", price: "From $247", duration: "3 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/c3ae1b63436163fee8de4cb30759ba2d695c8669376a86b993908e059de9c4e8.png" } },
                    { title: "Practical Tips", content: "Bargaining is expected at Muttrah Souq, particularly for textiles and souvenirs, though frankincense and silver are often fixed-price at reputable stalls. The souq is more atmospheric in the evening when it's cooler and more locals are shopping." }
                ],
                faqs: [
                    { q: "What is the best Muttrah Souq tour in Muscat?", a: "A dedicated food-and-souq walking tour suits travellers who want to go deep; combine with the Grand Mosque for a half-day." },
                    { q: "Is bargaining expected at Muttrah Souq?", a: "Yes, particularly for textiles and souvenirs; frankincense and silver are often fixed-price." },
                    { q: "What is Muttrah Souq known for?", a: "Frankincense, textiles, and silver, plus being one of the oldest markets in the Arab world." },
                    { q: "What's the best time to visit Muttrah Souq?", a: "Evening, when it's cooler and more atmospheric with local shoppers." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "What is the best Muttrah Souq tour?", "acceptedAnswer": { "@type": "Answer", "text": "A dedicated food-and-souq walking tour suits travellers who want to go deep." } },
                    { "@type": "Question", "name": "Is bargaining expected?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, particularly for textiles and souvenirs." } },
                    { "@type": "Question", "name": "What is it known for?", "acceptedAnswer": { "@type": "Answer", "text": "Frankincense, textiles, and silver." } },
                    { "@type": "Question", "name": "Best time to visit?", "acceptedAnswer": { "@type": "Answer", "text": "Evening, when it's cooler and more atmospheric." } }
                ] },
            };

        case "best-wadi-darbat-tour-salalah":
            return {
                title: "Which Is the Best Wadi Darbat Tour in Salalah?",
                seoTitle: "Best Wadi Darbat Tour Salalah 2026 | Honest Comparison",
                description: "Compare real Wadi Darbat tours in Salalah — from a boat-ride-and-cliff combo to a full-day trip adding Jabal Samhan and a sinkhole.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/1ff2fa541796bb0de34617031d1241e5ec04842257e7fbfa651c3daf0d33e6c9.jpg",
                sections: [
                    { title: "The Short Answer", content: "Wadi Darbat's lush lagoon (dramatically different outside Khareef monsoon season vs. during it) is usually paired with a boat ride and a nearby cliff or mountain viewpoint.", tourCard: { slug: "darbat-guided-tour-with-boat-ride-and-taqah-cliff", title: "Darbat Guided Tour with Boat Ride And Taqah Cliff", description: "A Wadi Darbat tour with a boat ride and Taqah Cliff viewpoint.", price: "From $102", duration: "5 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/1ff2fa541796bb0de34617031d1241e5ec04842257e7fbfa651c3daf0d33e6c9.jpg" } },
                    { title: "Best Alternative Route: Taqah and Wadi Darbat Majestic Trip", content: "A similar combo from a different operator, worth comparing on timing and the exact viewpoints included.", tourCard: { slug: "salalah-taqah-and-wadi-darbat-majestic-trip", title: "Salalah: Taqah, and Wadi Darbat - Majestic Trip", description: "An alternative Wadi Darbat and Taqah combo tour.", price: "From $182", duration: "6 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/455a1e02cc2f50d4b97a0685c2a4f0fbb2068f67115ce90dbc52e7d77533550b.png" } },
                    { title: "Best Full Day: Wadi Derbat, Jabal Samhan & Sinkhole", content: "This extends the day significantly, adding Jabal Samhan's mountain plateau and a natural sinkhole to the Wadi Darbat visit.", tourCard: { slug: "salalah-wadi-derbat-jabal-samhan-sinkhole-full", title: "Salalah: Wadi Derbat, Jabal Samhan, & Sinkhole Full-Day Tour", description: "A full-day tour adding Jabal Samhan and a sinkhole to Wadi Darbat.", price: "From $114", duration: "8 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/e428355c3437ffd430726f98cbe03bda3aba48452b33089f8e3f440b333b1c59.jpeg" } },
                    { title: "Practical Tips", content: "Wadi Darbat looks completely different depending on season — lush and green during and after the Khareef monsoon (June-September), drier the rest of the year. If lush greenery is what you want, time your visit accordingly." }
                ],
                faqs: [
                    { q: "What is the best Wadi Darbat tour in Salalah?", a: "A boat-ride-and-cliff combo for a half-day visit, or the full-day version adding Jabal Samhan and a sinkhole." },
                    { q: "When is Wadi Darbat at its most scenic?", a: "During and right after the Khareef monsoon (June-September), when it's lush and green." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "What is the best Wadi Darbat tour?", "acceptedAnswer": { "@type": "Answer", "text": "A boat-ride-and-cliff combo, or the full-day version with Jabal Samhan." } },
                    { "@type": "Question", "name": "When is it most scenic?", "acceptedAnswer": { "@type": "Answer", "text": "During and after the Khareef monsoon, June-September." } }
                ] },
            };

        case "best-empty-quarter-desert-safari-salalah":
            return {
                title: "Which Is the Best Empty Quarter Desert Safari from Salalah?",
                seoTitle: "Best Empty Quarter Desert Safari Salalah 2026 | Comparison",
                description: "Compare real Rub al Khali (Empty Quarter) desert safaris from Salalah — a day tour versus a legendary overnight desert camping experience.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/5a8943bb9610a18ce5280d8450e8ee0881fac437d5b16427bbea0dd0e6847f31.jpeg",
                sections: [
                    { title: "The Short Answer", content: "The Rub al Khali (Empty Quarter), one of the largest sand deserts on Earth, is reachable from Salalah as either a day tour or a genuinely memorable overnight camping trip with stargazing.", tourCard: { slug: "the-empty-quarter-desert-tour", title: "The Empty Quarter desert tour", description: "A day tour into the Empty Quarter desert from Salalah.", price: "From $221", duration: "8 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/5a8943bb9610a18ce5280d8450e8ee0881fac437d5b16427bbea0dd0e6847f31.jpeg" } },
                    { title: "Best 4x4 Option: 4x4 Desert Adventure", content: "This emphasizes the 4x4 dune-driving experience itself as a highlight, not just transport to the desert.", tourCard: { slug: "4x4-desert-adventure-empty-quarter-desert-safari", title: "4x4 Desert Adventure - Empty Quarter Desert Safari", description: "A 4x4-focused desert safari into the Empty Quarter.", price: "From $169", duration: "8 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/365e1293cd0a58263de066be5543c73676a26b1f5184d2fb9a73391b5178e203.jpeg" } },
                    { title: "Best for a Full Experience: Legendary Rub al Khali Overnight Safari", content: "This turns the desert trip into an overnight experience with camping and stargazing, genuinely different from a day tour given how dark and clear the sky gets this far from city lights.", tourCard: { slug: "salalah-legendary-rub-al-khali-overnight-desert", title: "Salalah: Legendary Rub' al Khali Overnight Desert Safari", description: "An overnight desert camping and stargazing experience in the Empty Quarter.", price: "From $293", duration: "20 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/6a1f005a6fc1aab49378401fcae8e6def88e63215f6b9f0d54655baffd274b90.jpeg" } },
                    { title: "Practical Tips", content: "The Empty Quarter is genuinely remote — this isn't a quick desert stop like some Gulf-city desert tours, it's several hours of driving each way. The overnight version is worth the extra cost if stargazing matters to you, since light pollution here is about as low as it gets." }
                ],
                faqs: [
                    { q: "What is the best Empty Quarter desert safari from Salalah?", a: "A day tour covers the basics; the overnight version adds genuinely excellent stargazing." },
                    { q: "Is the Empty Quarter far from Salalah?", a: "Yes, it's a genuinely remote desert requiring several hours of driving each way." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "What is the best Empty Quarter safari from Salalah?", "acceptedAnswer": { "@type": "Answer", "text": "A day tour, or overnight for excellent stargazing." } },
                    { "@type": "Question", "name": "Is it far from Salalah?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, several hours of driving each way." } }
                ] },
            };

        case "best-dolphin-watching-tour-salalah":
            return {
                title: "Which Is the Best Dolphin Watching Tour in Salalah?",
                seoTitle: "Best Dolphin Watching Tour Salalah 2026 | Comparison",
                description: "Compare real dolphin watching boat tours in Salalah — a standard boat trip versus a swimming-with-dolphins experience with lunch.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/92723b6f90716c540a955dc2c8cff11099660b01622ebae05b987391a6702630.jpeg",
                sections: [
                    { title: "The Short Answer", content: "Salalah's coast has resident dolphin pods, and tours range from a standard viewing-only boat trip to a more involved swimming-with-dolphins experience.", tourCard: { slug: "salalah-dolphin-watching-boat-tour-with", title: "Salalah Dolphin Watching Boat Tour with Refreshments", description: "A standard dolphin watching boat tour with refreshments.", price: "From $56", duration: "2 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/92723b6f90716c540a955dc2c8cff11099660b01622ebae05b987391a6702630.jpeg" } },
                    { title: "Best with Pickup: Dolphin Watching Boat Tour with Pickup", content: "This includes hotel pickup, removing the logistics of getting to the departure point yourself.", tourCard: { slug: "salalah-dolphin-watching-boat-tour-with-pickup", title: "Salalah: Dolphin Watching Boat Tour with Pickup", description: "The dolphin watching tour with hotel pickup included.", price: "From $130", duration: "2 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/939f3737fb48e7b8be383b54852af82e7cf5ea3e20eeab72c3b44a3c12110898.jpg" } },
                    { title: "Best for Full Immersion: Swimming with Dolphins with Lunch", content: "This goes beyond viewing into an actual in-water swimming experience with the dolphins, with lunch included for a fuller day.", tourCard: { slug: "salalah-swimming-with-dolphins-with-lunch-pickup", title: "Salalah: Swimming with Dolphins with Lunch & Pickup", description: "A swimming-with-dolphins experience with lunch and pickup.", price: "From $260", duration: "7 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/77f078708dae5281a6a1d220e032b904eaa24c5f1c564271bf83fa91f424f2f9.png" } },
                    { title: "Practical Tips", content: "Dolphin sightings aren't guaranteed on any tour, but Salalah's resident pods make sightings fairly reliable — morning departures generally have calmer seas." }
                ],
                faqs: [
                    { q: "What is the best dolphin watching tour in Salalah?", a: "A standard boat tour for viewing; the swimming experience for full immersion." },
                    { q: "Are dolphin sightings guaranteed in Salalah?", a: "Not guaranteed, but fairly reliable given the resident pods along the coast." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "What is the best dolphin watching tour in Salalah?", "acceptedAnswer": { "@type": "Answer", "text": "A standard boat tour, or the swimming experience for full immersion." } },
                    { "@type": "Question", "name": "Are sightings guaranteed?", "acceptedAnswer": { "@type": "Answer", "text": "Not guaranteed, but fairly reliable." } }
                ] },
            };

        case "best-west-salalah-beach-tour-salalah":
            return {
                title: "Which Is the Best West Salalah Beach Tour?",
                seoTitle: "Best West Salalah Beach Tour 2026 | Honest Comparison",
                description: "Compare real West Salalah beach day trips — covering Al Fazayah Beach and the Shaat viewpoint, sometimes called Oman's 'Caribbean of the Orient.'",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/76baf05020b76357e4bd8644a93b78602ac439af4d443974f05a231fafa9dda4.jpeg",
                sections: [
                    { title: "The Short Answer", content: "West Salalah's beaches, especially Al Fazayah, are sometimes nicknamed the 'Caribbean of the Orient' for their turquoise water against dramatic cliffs — most tours combine the beach with the Shaat viewpoint above it.", tourCard: { slug: "salalah-west-tour-al-fazayah-beach-shaat-viewpont", title: "Salalah West Tour (Al fazayah beach, shaat viewpont)", description: "A West Salalah tour covering Al Fazayah Beach and the Shaat viewpoint.", price: "From $156", duration: "6 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/76baf05020b76357e4bd8644a93b78602ac439af4d443974f05a231fafa9dda4.jpeg" } },
                    { title: "Alternative Operator: West Salalah Tour by VisitSalalah", content: "A similar West Salalah itinerary from a different local operator, worth comparing on exact stops and group size.", tourCard: { slug: "west-salalah-tour-by-visitsalalah", title: "West Salalah Tour by VisitSalalah", description: "An alternative West Salalah beach and viewpoint tour.", price: "From $169", duration: "4 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/416a57f0b3d584fc46bb20cf38b1a03ce4e6f41730fe031fa149d929be216910.jpg" } },
                    { title: "Practical Tips", content: "Bring a swimsuit — Al Fazayah's water is genuinely swim-worthy, not just a scenic photo stop, and the beach can get busy on weekends with local visitors too." }
                ],
                faqs: [
                    { q: "What is the best West Salalah beach tour?", a: "Either operator's version works; compare exact stops and group size." },
                    { q: "Is Al Fazayah Beach good for swimming?", a: "Yes, genuinely swim-worthy turquoise water, not just a photo stop." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "What is the best West Salalah beach tour?", "acceptedAnswer": { "@type": "Answer", "text": "Either operator's version works." } },
                    { "@type": "Question", "name": "Is Al Fazayah Beach good for swimming?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, genuinely swim-worthy." } }
                ] },
            };

        case "is-frankincense-trail-tour-worth-it-salalah":
            return {
                title: "Is the Frankincense Trail Tour in Salalah Worth It?",
                seoTitle: "Salalah Frankincense Trail Tour 2026 | Honest Review",
                description: "An honest look at Salalah's Frankincense Trail, camel farm, and beach tour — tracing Dhofar's ancient frankincense trade.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/e18f0449a86cf77d568a47117beef9e6e1d275047f94851727f62b7848cc66a4.jpeg",
                sections: [
                    { title: "The Short Answer", content: "Dhofar's frankincense trees and ancient trade routes are genuinely distinct to this region — this tour traces that history along with a camel farm stop and beach time, a worthwhile cultural angle beyond just scenery.", tourCard: { slug: "salalah-frankincense-trail-camel-farm-and-beach", title: "Salalah: Frankincense Trail, Camel Farm, and Beach Tour", description: "A tour tracing the frankincense trail with a camel farm and beach stop.", price: "From $163", duration: "8 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/e18f0449a86cf77d568a47117beef9e6e1d275047f94851727f62b7848cc66a4.jpeg" } },
                    { title: "Practical Tips", content: "Dhofar's frankincense trees still produce resin harvested commercially today — a good guide points out the difference between wild and cultivated trees, which isn't obvious without context." }
                ],
                faqs: [
                    { q: "Is the Frankincense Trail tour worth it?", a: "Yes, for genuine regional history beyond just scenery, plus a camel farm and beach stop." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "Is the Frankincense Trail tour worth it?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, for genuine regional history and culture." } }
                ] },
            };

        case "best-city-tour-salalah":
            return {
                title: "Which Is the Best City Tour in Salalah?",
                seoTitle: "Best Salalah City Tour 2026 | Honest Comparison",
                description: "Compare real Salalah city tours — a standard sightseeing tour versus a historical heritage and culture-focused version.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/bf519ebb46d8a56584e44d3deacae69b1b0019a5dea512e368c32d671546498b.jpg",
                sections: [
                    { title: "The Short Answer", content: "Salalah's city tours either cover standard sightseeing (souks, mosques, the port) or lean specifically into the city's heritage and cultural history.", tourCard: { slug: "salalah-city-tour", title: "Salalah City Tour", description: "A standard sightseeing tour of Salalah.", price: "From $124", duration: "3.5 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/bf519ebb46d8a56584e44d3deacae69b1b0019a5dea512e368c32d671546498b.jpg" } },
                    { title: "Best for History: Historical Salalah Heritage & Culture Tour", content: "This leans specifically into Salalah's heritage and cultural history rather than just general sightseeing stops.", tourCard: { slug: "historical-salalah-guided-city-tour-of-heritage", title: "Historical Salalah: Guided City Tour of Heritage & Culture", description: "A heritage and culture-focused city tour of Salalah.", price: "From $91", duration: "4 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/95cf5c6cce50247c99d0bb855df3094b43c5a376a3d9e5ff5645779af5f1cc39.jpeg" } },
                    { title: "Practical Tips", content: "Salalah's souks are more low-key than those in Muscat or Dubai — worth it for a genuine shopping experience rather than a tourist spectacle, but set expectations accordingly." }
                ],
                faqs: [
                    { q: "What is the best city tour in Salalah?", a: "A standard sightseeing tour for general highlights, or the heritage version for deeper cultural context." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "What is the best city tour in Salalah?", "acceptedAnswer": { "@type": "Answer", "text": "A standard sightseeing tour, or the heritage version for deeper context." } }
                ] },
            };

        case "salalah-travel-guide-2026":
            return {
                title: "Salalah Travel Guide 2026",
                description: "What visitors need to know about Salalah, Oman's lush southern city.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/1ff2fa541796bb0de34617031d1241e5ec04842257e7fbfa651c3daf0d33e6c9.jpg",
                sections: [
                    { title: "Why Visit", content: "Salalah is Oman's green south, known for the Khareef monsoon season's lush landscapes, Wadi Darbat, frankincense heritage, dolphin-watching, and access to the Empty Quarter desert." }
                ],
                faqs: [
                    { q: "Is Salalah worth visiting?", a: "Yes, for its lush Khareef-season landscapes, frankincense heritage, and desert access, genuinely different from Muscat." }
                ],
            };

        case "best-time-to-visit-salalah":
            return {
                title: "Best Time to Visit Salalah",
                description: "Salalah's climate is unusual for Oman — the Khareef monsoon shapes when to visit depending on what you want to see.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/1ff2fa541796bb0de34617031d1241e5ec04842257e7fbfa651c3daf0d33e6c9.jpg",
                sections: [
                    { title: "Weather Patterns", content: "June to September is Khareef monsoon season, when Salalah turns lush and green, a major domestic tourist draw. October to April is drier and hotter, better for desert trips to the Empty Quarter." }
                ],
                faqs: [
                    { q: "What is the best time to visit Salalah?", a: "June-September for lush Khareef-season greenery; October-April for desert trips." }
                ],
            };

        case "best-dhow-cruise-khasab":
            return {
                title: "Which Is the Best Dhow Cruise in Khasab?",
                seoTitle: "Best Khasab Dhow Cruise 2026 | Musandam Fjords Comparison",
                description: "Compare real Khasab dhow cruises through the Musandam fjords — half-day dolphin-watching trips versus full overnight cruises.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/2abbc44b2b681f9e12992b614c0a9972a2524aa6afc53be521b56cfea8f92afc.png",
                sections: [
                    { title: "The Short Answer", content: "Khasab's dhow cruises through the Musandam fjords ('the Norway of Arabia') are the region's signature activity — pick by duration and budget, from a half-day dolphin trip to a full overnight cruise.", tourCard: { slug: "khasab-fjords-dhow-cruise-with-dolphin-watching", title: "Khasab Fjords Dhow Cruise with Dolphin Watching & Snorkeling", description: "A classic Khasab fjords dhow cruise.", price: "From $52", duration: "3.5 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/2abbc44b2b681f9e12992b614c0a9972a2524aa6afc53be521b56cfea8f92afc.png" } },
                    { title: "Best Budget Option: Half-Day Cruise", content: "A shorter, more affordable version covering the same dolphin-watching and snorkeling basics.", tourCard: { slug: "khasab-half-day-dhow-cruise-with-dolphin-watching", title: "Khasab: Half-Day Dhow Cruise with Dolphin Watching", description: "A half-day dhow cruise with dolphin watching.", price: "From $65", duration: "3.5 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/63ce87e40d0a8.jpeg" } },
                    { title: "Best for a Full Experience: Overnight Dhow Cruise", content: "Sleeping aboard a traditional dhow anchored in the fjords, with dinner and breakfast included, is the most memorable version of this experience.", tourCard: { slug: "khasab-overnight-dhow-cruise-with-dinner-breakfast", title: "Khasab: Overnight Dhow Cruise with Dinner & Breakfast", description: "An overnight dhow cruise through the Musandam fjords.", price: "From $278", duration: "17 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/d222f25e36434d9d9c60d8b37cdf8370877bad722ad9314e456865f16cd94529.jpg" } },
                    { title: "Best Private Option: Fjords Cruise with Kayaking", content: "A private version adds kayaking on top of the dolphin-watching, for a more active and exclusive day on the water.", tourCard: { slug: "private-khasab-fjords-dhow-cruise-with-dolphins", title: "Private Khasab Fjords Dhow Cruise with Dolphins & Kayaking", description: "A private fjords cruise with kayaking.", price: "From $650", duration: "6 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/897930152928b4b3732531b03889dfdd17bccb36a883338dec03cfd6fc035dd0.png" } },
                    { title: "Practical Tips", content: "Dolphin sightings are common but not guaranteed year-round; mornings tend to have calmer water for photos and snorkeling." }
                ],
                faqs: [
                    { q: "What is the best dhow cruise in Khasab?", a: "A half-day trip covers the essentials cheaply; go overnight for the full experience or private for kayaking." },
                    { q: "Will I see dolphins on a Khasab dhow cruise?", a: "Sightings are common in the Musandam fjords, though not guaranteed on every trip." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "What is the best dhow cruise in Khasab?", "acceptedAnswer": { "@type": "Answer", "text": "A half-day trip for budget, overnight for the full experience, private for kayaking." } },
                    { "@type": "Question", "name": "Will I see dolphins?", "acceptedAnswer": { "@type": "Answer", "text": "Sightings are common in the Musandam fjords, though not guaranteed." } }
                ] },
            };

        case "best-musandam-adventure-tour-khasab":
            return {
                title: "Best Musandam Adventure Tour from Khasab (Beyond the Dhow Cruise)",
                seoTitle: "Khasab Mountain Safari & Zipline 2026",
                description: "Beyond dhow cruises, Khasab's Jebel Harim mountain safaris and ziplines offer a different side of the Musandam peninsula.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/0e3544aa4fb03a862736b247fb61e9647393cd69e361e7dcc889fbb644824e3f.jpeg",
                sections: [
                    { title: "The Short Answer", content: "Jebel Harim's rugged mountain roads and the Musandam zipline are the main land-based alternatives to a dhow cruise in Khasab.", tourCard: { slug: "khasab-jebel-harim-mountain-safari-with-zipline", title: "Khasab: Jebel Harim Mountain Safari with Zipline Option", description: "A 4x4 mountain safari to Jebel Harim with an optional zipline.", price: "From $184", duration: "4 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/0e3544aa4fb03a862736b247fb61e9647393cd69e361e7dcc889fbb644824e3f.jpeg" } },
                    { title: "Standalone Zipline Option", content: "For those short on time, the Musandam zipline can be booked on its own as an entry ticket.", tourCard: { slug: "musandam-zip-line-entry-ticket", title: "Musandam: Zip Line Entry Ticket", description: "Entry to the Musandam zipline.", price: "From $83", duration: "8 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/a2c3849fe86f8ead2018a9582a1b2cc81e29465b75da3a6f77810795b87a1f1e.jpeg" } },
                    { title: "Practical Tips", content: "Jebel Harim roads are rough — a 4x4 safari vehicle with an experienced driver is standard, not optional, for this route." }
                ],
                faqs: [
                    { q: "What is there to do in Khasab besides dhow cruises?", a: "A Jebel Harim mountain safari and the Musandam zipline are the main land-based alternatives." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "What else is there to do in Khasab?", "acceptedAnswer": { "@type": "Answer", "text": "A Jebel Harim mountain safari and the Musandam zipline." } }
                ] },
            };

        case "khasab-travel-guide-2026":
            return {
                title: "Khasab Travel Guide 2026",
                description: "Everything to know about visiting Khasab, Oman's gateway to the Musandam fjords.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/d222f25e36434d9d9c60d8b37cdf8370877bad722ad9314e456865f16cd94529.jpg",
                sections: [
                    { title: "Getting There", content: "Khasab is in the Musandam Governorate, an Omani exclave separated from the rest of Oman by UAE territory. Most visitors arrive by road from Dubai (roughly 2 hours) or by domestic flight from Muscat." },
                    { title: "What to Do", content: "Dhow cruises through the fjords (half-day to overnight), Jebel Harim mountain safaris, diving and snorkeling, and the Khasab Fort and souq in town." },
                    { title: "Best Time to Visit", content: "October to April offers the most comfortable temperatures; summer is extremely hot but the fjords themselves stay scenic year-round." }
                ],
                faqs: [
                    { q: "How do you get to Khasab?", a: "By road from Dubai (about 2 hours) or by domestic flight from Muscat." },
                    { q: "What is Khasab known for?", a: "Dhow cruises through the Musandam fjords, often called 'the Norway of Arabia'." }
                ],
            };

        case "best-nizwa-day-trip-nizwa":
            return {
                title: "Which Is the Best Nizwa Day Trip from Muscat?",
                seoTitle: "Best Nizwa Day Trip 2026 | Fort, Souq & Jebel Akhdar",
                description: "Compare real Nizwa day trips — fort and souq only, versus trips that add Jebel Akhdar or the historic forts of Bahla and Jabreen.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/d20872cf0d64306f982cbc985a53b1c45d8ab492f8ad12a25e005b3b505e3fcf.jpg",
                sections: [
                    { title: "The Short Answer", content: "Nizwa's fort and souq are the core of any visit; the best trip for you depends on whether you also want Jebel Akhdar's mountain scenery or the extra historic forts of Bahla and Jabreen.", tourCard: { slug: "nizwa-souq-fort-oman-across-ages-museum-day-trip", title: "Nizwa: Souq, Fort, Oman Across Ages Museum Day Trip", description: "A day trip covering Nizwa's souq, fort, and museum.", price: "From $494", duration: "8 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/d20872cf0d64306f982cbc985a53b1c45d8ab492f8ad12a25e005b3b505e3fcf.jpg" } },
                    { title: "Best for Extra Mountain Scenery: Nizwa and Jabal Akhdar", content: "This adds Jabal Akhdar's terraced villages and viewpoints onto the standard Nizwa visit.", tourCard: { slug: "muscat-nizwa-and-jabal-akhdar-day-trip-with-lunch", title: "Muscat: Nizwa and Jabal Akhdar Day Trip With Lunch & Sunset", description: "A day trip combining Nizwa and Jabal Akhdar.", price: "From $145", duration: "10 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/9bce44f0b2d8f4e83e50d2927799b755c9077bead729f9e4410ac92b402cc106.jpeg" } },
                    { title: "Best for More Forts: Nizwa, Bahla & Jabrin Castle", content: "This covers three historic forts in one day for travelers who want Oman's fort architecture in depth.", tourCard: { slug: "nizwa-souq-nizwa-fort-bahla-fort-jabrin-castle", title: "Nizwa Souq, Nizwa Fort, Bahla Fort & Jabrin Castle", description: "A day trip covering Nizwa, Bahla, and Jabrin forts.", price: "From $546", duration: "7.5 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/d2742aa724a5a5fa30f5d26f20e79e4608d400008357e545d8a97cd084789fe7.png" } },
                    { title: "Practical Tips", content: "Nizwa Souq is busiest (and most interesting) on Friday mornings, when the traditional livestock market runs." }
                ],
                faqs: [
                    { q: "What is the best Nizwa day trip?", a: "Fort and souq alone covers the basics; add Jabal Akhdar for mountains or Bahla/Jabrin for more fort history." },
                    { q: "What day is Nizwa's livestock market?", a: "Friday mornings, as part of the wider Nizwa Souq." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "What is the best Nizwa day trip?", "acceptedAnswer": { "@type": "Answer", "text": "Fort and souq for the basics, plus Jabal Akhdar or Bahla/Jabrin for more." } },
                    { "@type": "Question", "name": "When is Nizwa's livestock market?", "acceptedAnswer": { "@type": "Answer", "text": "Friday mornings." } }
                ] },
            };

        case "best-jebel-akhdar-tour-nizwa":
            return {
                title: "Which Is the Best Jebel Akhdar Tour from Nizwa?",
                seoTitle: "Best Jebel Akhdar Tour 2026 | E-Bike, Mountain Bike & Via Ferrata",
                description: "Compare active ways to see Jebel Akhdar from Nizwa — e-bike touring, mountain biking, and via ferrata climbing.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/8877eac8480f8a1a26f30c6de944fbdf9c7466a581b1dce0461db871c2d8c1e0.jpg",
                sections: [
                    { title: "The Short Answer", content: "Jebel Akhdar ('Green Mountain') rewards an active approach — e-bike touring is the easiest, mountain biking is more athletic, and via ferrata at Jebel Shams is the most extreme.", tourCard: { slug: "jabal-akhdar-e-bike-tour-adventure", title: "Jabal Akhdar E-Bike Tour & Adventure", description: "An e-bike tour through Jabal Akhdar's mountain villages.", price: "From $401", duration: "8 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/8877eac8480f8a1a26f30c6de944fbdf9c7466a581b1dce0461db871c2d8c1e0.jpg" } },
                    { title: "Most Athletic: Jebel Akhdar Mountain Bike", content: "A standard mountain bike tour for travelers who want more physical effort than an e-bike.", tourCard: { slug: "nizwa-jebel-akhdar-mountain-bike", title: "Nizwa: Jebel Akhdar Mountain Bike", description: "A mountain bike tour of Jebel Akhdar.", price: "From $416", duration: "3 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/5e286f4d40a8dc422e61916a630998a442767f67f6862021322ca4c697af0cf2.png" } },
                    { title: "Most Extreme: Jebel Shams Balcony Walk & Via Ferrata", content: "For experienced adventurers, this combines the famous Balcony Walk above 'Oman's Grand Canyon' with a via ferrata climbing section.", tourCard: { slug: "nizwa-jebel-shams-balcony-walk-and-via-ferrata", title: "Nizwa: Jebel Shams Balcony Walk and Via Ferrata Adventure", description: "A via ferrata and balcony walk adventure at Jebel Shams.", price: "From $390", duration: "8 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/40f844450fdd5a74c56f9b0e192a6cac596ea7991972adc979b88551732a4427.jpg" } },
                    { title: "Practical Tips", content: "Jebel Akhdar's elevation (over 2,000m) makes it noticeably cooler than Muscat or Nizwa — bring a layer even in summer." }
                ],
                faqs: [
                    { q: "What is the best way to see Jebel Akhdar?", a: "E-bike touring is easiest, mountain biking is more athletic, via ferrata at Jebel Shams is the most extreme." },
                    { q: "Is Jebel Akhdar cooler than Nizwa?", a: "Yes, its elevation over 2,000m makes it noticeably cooler year-round." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "What is the best way to see Jebel Akhdar?", "acceptedAnswer": { "@type": "Answer", "text": "E-bike for ease, mountain bike for more effort, via ferrata for the most extreme." } },
                    { "@type": "Question", "name": "Is Jebel Akhdar cooler than Nizwa?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, its elevation makes it noticeably cooler year-round." } }
                ] },
            };

        case "nizwa-travel-guide-2026":
            return {
                title: "Nizwa Travel Guide 2026",
                description: "Everything to know about visiting Nizwa, the former capital of Oman and home of its most famous souq and fort.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/b13edd84e57915c8a25e0e3835f20af9e9dff9d77d1cf2b14828f08512b14829.jpg",
                sections: [
                    { title: "Getting There", content: "Nizwa is about 1.5 hours by road from Muscat, making it Oman's most popular day-trip destination from the capital." },
                    { title: "What to Do", content: "Nizwa Fort, the historic souq (busiest Friday mornings), and day trips up into the Jebel Akhdar mountains for hiking, biking, or via ferrata." },
                    { title: "Best Time to Visit", content: "October to April for comfortable daytime temperatures, especially for mountain activities in Jebel Akhdar." }
                ],
                faqs: [
                    { q: "How far is Nizwa from Muscat?", a: "About 1.5 hours by road." },
                    { q: "What is Nizwa famous for?", a: "Its historic fort and souq, and as the gateway to the Jebel Akhdar mountains." }
                ],
            };

        case "is-scuba-diving-worth-it-khasab":
            return {
                title: "Is Scuba Diving Worth It in Khasab?",
                seoTitle: "Khasab Scuba Diving 2026 | Honest Review",
                description: "An honest look at Khasab's Discover Scuba Diving experience in the Musandam fjords, an underwater alternative to the region's famous dhow cruises.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/d4ab4e24006537bb31356851888ac5664b5e4258313895194d9878bcb573ec44.jpeg",
                sections: [
                    { title: "The Short Answer", content: "This beginner-friendly intro dive explores the Musandam fjords from underwater rather than from a dhow deck, no certification required, a genuinely different way to experience 'the Norway of Arabia' than the region's usual cruise-and-snorkel format.", tourCard: { slug: "musandam-discover-scuba-diving-experience", title: "Musandam: Discover Scuba Diving Experience", description: "A beginner-friendly intro scuba dive in the Musandam fjords.", price: "From $145", duration: "3 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/d4ab4e24006537bb31356851888ac5664b5e4258313895194d9878bcb573ec44.jpeg" } },
                    { title: "Practical Tips", content: "No certification or prior diving experience is needed — an instructor guides every step." }
                ],
                faqs: [
                    { q: "Is scuba diving worth it in Khasab?", a: "Yes, for an underwater perspective on the Musandam fjords, genuinely different from the region's usual dhow cruises." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "Is scuba diving worth it in Khasab?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, for an underwater perspective on the Musandam fjords." } }
                ] },
            };

        case "is-city-tour-worth-it-khasab":
            return {
                title: "Is the City Tour with Khasab Fort Worth It?",
                seoTitle: "Khasab City Tour 2026 | Honest Review",
                description: "An honest look at the Khasab city tour with Khasab Fort, a land-based cultural option distinct from the region's dhow cruises and mountain safaris.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/5e22fe6d13276.jpeg",
                sections: [
                    { title: "The Short Answer", content: "This tour covers Khasab town and its 17th-century Portuguese-built fort, a short cultural stop that works well as a half-day pairing with a fjord cruise or mountain safari, rather than a destination on its own.", tourCard: { slug: "khasab-city-tour-with-khasab-fort", title: "Khasab City Tour with Khasab Fort", description: "A city tour of Khasab including its historic fort.", price: "From $182", duration: "3 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/5e22fe6d13276.jpeg" } },
                    { title: "Practical Tips", content: "Pair this with a dhow cruise or mountain safari on the same day to make the most of a short stay in Khasab." }
                ],
                faqs: [
                    { q: "Is the Khasab city tour worth it?", a: "Yes, as a short cultural add-on alongside a dhow cruise or mountain safari, though not worth a full day on its own." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "Is the Khasab city tour worth it?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, as a short cultural add-on alongside a cruise or safari." } }
                ] },
            };

        case "is-kayaking-worth-it-salalah":
            return {
                title: "Is Kayaking Worth It in Salalah?",
                seoTitle: "Salalah Kayaking 2026 | Honest Review",
                description: "An honest look at Salalah's full-day kayaking tour, a slow-paced coastal activity distinct from the region's flyboard and desert-safari thrills.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/3be30ad600519e2fc53bf6f3c07245a0a6e7c6ba0aeb21b7e4e283eb1660ec15.jpg",
                sections: [
                    { title: "The Short Answer", content: "This full-day kayaking tour explores Salalah's coastline at a slower, quieter pace than the region's motorized water activities, a good fit for travellers wanting a calmer, nature-focused day on the water.", tourCard: { slug: "kayaks-in-paradise-salalah", title: "Kayaks in Paradise: Salalah", description: "A full-day kayaking tour along Salalah's coastline.", price: "From $221", duration: "8 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/3be30ad600519e2fc53bf6f3c07245a0a6e7c6ba0aeb21b7e4e283eb1660ec15.jpg" } },
                    { title: "Practical Tips", content: "No prior kayaking experience is required, but the full-day format means sun exposure, so bring sunscreen and a hat." }
                ],
                faqs: [
                    { q: "Is kayaking worth it in Salalah?", a: "Yes, for a calmer, nature-focused alternative to the region's motorized water sports and desert safaris." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "Is kayaking worth it in Salalah?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, for a calm, nature-focused day on the water." } }
                ] },
            };

        case "is-mirbat-snorkeling-worth-it-salalah":
            return {
                title: "Is Mirbat Snorkeling Worth It near Salalah?",
                seoTitle: "Mirbat Snorkeling Salalah 2026 | Honest Review",
                description: "An honest look at the Mirbat snorkeling trip near Salalah, a dedicated underwater outing distinct from the region's dolphin-watching boat tours.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/b73c69baccf8b2b0184ad8c33ad031e0ab715652438a96c11d8224a1d9619181.jpg",
                sections: [
                    { title: "The Short Answer", content: "Mirbat's waters are a genuinely good snorkeling spot, a focused underwater outing rather than a dolphin-watching cruise that happens to include some snorkel time — worth it if marine life, not dolphins specifically, is the priority.", tourCard: { slug: "salalah-discover-mirbats-snorkeling-paradise", title: "Salalah: Discover Mirbat's Snorkeling Paradise", description: "A dedicated snorkeling trip to Mirbat's waters near Salalah.", price: "From $169", duration: "4 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/b73c69baccf8b2b0184ad8c33ad031e0ab715652438a96c11d8224a1d9619181.jpg" } },
                    { title: "Practical Tips", content: "Mirbat is a separate town from Salalah city, so factor in drive time when booking around other plans." }
                ],
                faqs: [
                    { q: "Is Mirbat snorkeling worth it near Salalah?", a: "Yes, for travellers prioritizing marine life and reef snorkeling over a dolphin-focused boat tour." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "Is Mirbat snorkeling worth it near Salalah?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, for a focused underwater outing prioritizing marine life." } }
                ] },
            };

        case "is-fishing-trip-worth-it-salalah":
            return {
                title: "Is the Half-Day Fishing Trip Worth It in Salalah?",
                seoTitle: "Salalah Fishing Trip 2026 | Honest Review",
                description: "An honest look at Salalah's half-day fishing trip, a relaxed boat activity distinct from the region's snorkeling, dolphin-watching, and water-sport tours.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/c71e45e7a355e152371f6252fabc44ba6a5a0a6f9e66912bdb1976bd4270ab57.jpg",
                sections: [
                    { title: "The Short Answer", content: "This half-day fishing trip off Salalah's coast is a relaxed, low-key alternative to the region's more active water sports, a good option for travellers who want time on the water without snorkeling or paddling.", tourCard: { slug: "salalah-half-day-fishing-trip", title: "Salalah: Half-Day Fishing Trip", description: "A half-day fishing trip off Salalah's coast.", price: "From $156", duration: "4 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/c71e45e7a355e152371f6252fabc44ba6a5a0a6f9e66912bdb1976bd4270ab57.jpg" } },
                    { title: "Practical Tips", content: "Equipment is typically provided, so no need to bring your own fishing gear." }
                ],
                faqs: [
                    { q: "Is the half-day fishing trip worth it in Salalah?", a: "Yes, for a relaxed time on the water, a good change of pace from the region's more active water sports." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "Is the half-day fishing trip worth it in Salalah?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, for a relaxed time on the water." } }
                ] },
            };

        case "is-night-city-tour-worth-it-salalah":
            return {
                title: "Is the Night City Tour Worth It in Salalah?",
                seoTitle: "Salalah Night City Tour 2026 | Honest Review",
                description: "An honest look at Salalah's night city tour covering city lights, souqs, and the mall, a cooler evening alternative to daytime city sightseeing.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/7ed79acd5a9066e5dd2156d0e2c36e31f1eabf368f4de5f01f0df66133a53156.jpeg",
                sections: [
                    { title: "The Short Answer", content: "Seeing Salalah's souqs, mall, and city lights after dark avoids the daytime heat and gives a genuinely different, more local-life atmosphere than the standard daytime city tour, with shopping and street life as the focus.", tourCard: { slug: "salalah-by-night-city-lights-souks-mall-shopping", title: "Salalah by Night: City Lights, Souks & Mall Shopping", description: "An evening city tour covering Salalah's souqs, mall, and city lights.", price: "From $75", duration: "4 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/7ed79acd5a9066e5dd2156d0e2c36e31f1eabf368f4de5f01f0df66133a53156.jpeg" } },
                    { title: "Practical Tips", content: "Bring cash for souq shopping, since smaller stalls may not take cards." }
                ],
                faqs: [
                    { q: "Is the night city tour worth it in Salalah?", a: "Yes, for a cooler, more local-life atmosphere focused on souqs and shopping, distinct from the daytime sightseeing city tour." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "Is the night city tour worth it in Salalah?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, for a cooler evening focused on souqs and local shopping." } }
                ] },
            };

        case "is-flyboard-experience-worth-it-salalah":
            return {
                title: "Is the Flyboard Experience Worth It in Salalah?",
                seoTitle: "Salalah Flyboard Experience 2026 | Honest Review",
                description: "An honest look at Salalah's flyboard experience, a water-jet-powered flying session distinct from the region's usual beach and desert activities.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/d51d155529d991f85ad41daee7bd697c1f47ee5cfc3d8f6849f981fc5493ac76.jpeg",
                sections: [
                    { title: "The Short Answer", content: "Flyboarding straps water jets to your feet to lift you above the sea, a genuinely different thrill from Salalah's usual beach and desert-safari activities. Twenty minutes is enough to get a real taste of flight with instructor guidance.", tourCard: { slug: "salalah-flyboard-experience", title: "Salalah Flyboard Experience", description: "A water-jet-powered flyboard session off Salalah's coast.", price: "From $172", duration: "20 minutes", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/d51d155529d991f85ad41daee7bd697c1f47ee5cfc3d8f6849f981fc5493ac76.jpeg" } },
                    { title: "Practical Tips", content: "Being a confident swimmer helps, since balance takes practice and you'll fall into the water repeatedly while learning." }
                ],
                faqs: [
                    { q: "Is flyboarding worth it in Salalah?", a: "Yes, for a genuinely different water thrill from the region's usual beach and desert activities." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "Is flyboarding worth it in Salalah?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, for a genuinely different water thrill off Salalah's coast." } }
                ] },
            };

        case "is-horse-trek-worth-it-salalah":
            return {
                title: "Is the Arabian Horse Trek Worth It in Salalah?",
                seoTitle: "Salalah Horse Trek 2026 | Honest Review",
                description: "An honest look at Salalah's authentic Arabian horse trek along the coast, a short equestrian alternative to camel riding or desert ATV adventures.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/4db3302bb590f9867c21412c7d02afac1a6a247e00e89b559b12ea1f450a439a.jpg",
                sections: [
                    { title: "The Short Answer", content: "This half-hour trek on Arabian horses along Salalah's coastline is a relaxed, low-cost way to see the shoreline from a different angle than camel riding or a beach walk, good as a quick add-on rather than the day's main activity.", tourCard: { slug: "authentic-arabian-horse-trek-salalah-coastal", title: "Authentic Arabian Horse Trek: Salalah Coastal", description: "A 30-minute Arabian horse trek along Salalah's coast.", price: "From $41", duration: "30 minutes", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/4db3302bb590f9867c21412c7d02afac1a6a247e00e89b559b12ea1f450a439a.jpg" } },
                    { title: "Practical Tips", content: "No riding experience is needed — this is a guided, easy-paced trek rather than independent riding." }
                ],
                faqs: [
                    { q: "Is the Arabian horse trek worth it in Salalah?", a: "Yes, as an inexpensive, relaxed coastal activity, best paired with other things on the same day rather than as a standalone outing." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "Is the Arabian horse trek worth it in Salalah?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, as an inexpensive, relaxed coastal activity." } }
                ] },
            };

        case "is-jabal-samhan-atv-tour-worth-it-salalah":
            return {
                title: "Is the Jabal Samhan ATV Adventure Worth It in Salalah?",
                seoTitle: "Salalah Jabal Samhan ATV Tour 2026 | Honest Review",
                description: "An honest look at the Jabal Samhan ATV adventure near Salalah, an off-road mountain activity distinct from the region's beach and desert-safari tours.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/8ddc281d9f4a3fd7f4bbc1780c91752d05095eac8ea403dda0ddb0b4bc71b55d.jpg",
                sections: [
                    { title: "The Short Answer", content: "Riding an ATV up Jabal Samhan's escarpment trails gives scenic mountain views over the Dhofar coastline, a genuinely different landscape and activity type from Salalah's usual beach, wadi, and sand-dune desert safaris.", tourCard: { slug: "salalah-jabal-samhan-atv-adventure-with-scenic", title: "Salalah: Jabal Samhan ATV Adventure with Scenic Views", description: "An off-road ATV adventure up Jabal Samhan with scenic mountain views.", price: "From $221", duration: "2 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/8ddc281d9f4a3fd7f4bbc1780c91752d05095eac8ea403dda0ddb0b4bc71b55d.jpg" } },
                    { title: "Practical Tips", content: "No prior ATV experience is needed — guides brief riders on controls before setting off on the mountain trails." }
                ],
                faqs: [
                    { q: "Is the Jabal Samhan ATV tour worth it in Salalah?", a: "Yes, for a genuinely different mountain landscape and off-road activity from Salalah's beach and desert-safari tours." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "Is the Jabal Samhan ATV tour worth it in Salalah?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, for a different mountain landscape and off-road activity." } }
                ] },
            };

        case "is-cultural-cart-tour-worth-it-nizwa":
            return {
                title: "Is the Al Aqur Cultural Cart Tour Worth It near Nizwa?",
                seoTitle: "Nizwa Cultural Cart Tour 2026 | Honest Review",
                description: "An honest look at the Al Aqur village cultural cart tour near Nizwa, a short, inexpensive add-on rather than a standalone excursion.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/3282318fefdc5713fd1643de4c3f98eebef6d4d8fdac7aa5c01ba7758b626a03.jpg",
                sections: [
                    { title: "The Short Answer", content: "This short cart ride through Al Aqur village in the Jebel Akhdar highlands gives a slow, local-life glimpse of mountain village terraces at a low price, best treated as a quick add-on to a Jebel Akhdar day trip rather than a destination in itself.", tourCard: { slug: "nizwa-alaqur-cultural-cart-tour", title: "Nizwa: Al Aqur Cultural Cart Tour", description: "A short cultural cart ride through Al Aqur village in the Jebel Akhdar highlands.", price: "From $25", duration: "35 minutes", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/3282318fefdc5713fd1643de4c3f98eebef6d4d8fdac7aa5c01ba7758b626a03.jpg" } },
                    { title: "Practical Tips", content: "Pair this with a broader Jebel Akhdar mountain tour the same day, since 35 minutes alone doesn't justify the trip up to the plateau." }
                ],
                faqs: [
                    { q: "Is the Al Aqur cultural cart tour worth it near Nizwa?", a: "Yes, as a quick, inexpensive add-on to a Jebel Akhdar day trip, but not worth a dedicated trip on its own." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "Is the Al Aqur cultural cart tour worth it near Nizwa?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, as a quick add-on to a Jebel Akhdar day trip." } }
                ] },
            };

        default:
            return null;
    }
}

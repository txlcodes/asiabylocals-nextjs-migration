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

        default:
            return null;
    }
}

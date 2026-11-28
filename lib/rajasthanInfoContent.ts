import { CityInfoData } from './cityInfoContent';

// Rajasthan launched 2026-11-28: Jaisalmer (5 live tours) and Udaipur (9 live
// tours) share this file since neither city has enough supply alone for its
// own file, following the same shared-file pattern used for Jordan/Uzbekistan.
export function getRajasthanInfoContent(slug: string): CityInfoData | null {
    switch (slug) {
        case "best-jaisalmer-fort-tour-jaisalmer":
            return {
                title: "Which Is the Best Jaisalmer Fort Tour?",
                description: "Compare real Jaisalmer Fort tours — from a $20 heritage walk to a $125 guided tour with a professional, to see which actually fits your pace and budget.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/9af855c76466d7cdb6e6e9493abe310cf589ecb43f6c4fa3a2239147d9e82c94.jpg",
                sections: [
                    { title: "The Short Answer", content: "Jaisalmer Fort tours mostly differ in how structured the guiding is — a licensed guide you book directly, a set heritage walk, or a half-day version that adds the wider old city by car.", tourCard: { slug: "jaisalmer-fort-certified-guided-tour", title: "Book Licensed and Certified Tour Guide for Jaisalmer Fort", description: "A licensed, certified guide for the fort itself.", price: "From $30", duration: "3 hours" } },
                    { title: "Cheapest: Heritage Walk", content: "At $20, this is the simplest way to see the fort's havelis and narrow lanes with a guide, without any extra stops.", tourCard: { slug: "jaisalmer-fort-walking-tour", title: "Jaisalmer Heritage Walk: Journey Through the Golden Past", description: "A budget heritage walk through the fort.", price: "From $20", duration: "2 hours" } },
                    { title: "Best for Structure: Licensed Guide Booking", content: "Booking a certified guide directly gives you more control over pace and what gets covered, for a modest step up from the cheapest option.", tourCard: { slug: "jaisalmer-fort-certified-guided-tour", title: "Book Licensed and Certified Tour Guide for Jaisalmer Fort", description: "A certified guide booked directly for the fort.", price: "From $30", duration: "3 hours" } },
                    { title: "Best Guided Walk: Heritage Walking Tour", content: "This runs longer and more thoroughly than the basic walk, with a guide trained specifically on the fort's history and architecture.", tourCard: { slug: "jaisalmer-fort-heritage-walking-tour", title: "Jaisalmer Heritage Walking Tour With Professional Guide", description: "A professionally guided heritage walk through the fort.", price: "From $125", duration: "2.5 hours" } },
                    { title: "Best for Seeing More: Half-Day by Car", content: "This extends past the fort itself to cover more of Jaisalmer's highlights by car, useful if you want a broader city overview in one outing.", tourCard: { slug: "jaisalmer-fort-half-day-tour", title: "Highlights of Jaisalmer (Guided Half-Day Tour By Car)", description: "A half-day car tour covering the fort and wider city.", price: "From $90", duration: "4 hours" } },
                    { title: "Practical Tips", content: "The fort is a living fort with people still residing inside it, so go early morning or late afternoon to avoid the midday heat, which gets intense even outside peak summer." }
                ],
                faqs: [
                    { q: "What is the best Jaisalmer Fort tour?", a: "The heritage walking tour with a professional guide gives the most thorough coverage; the $20 walk is fine if you just want a quick overview." },
                    { q: "Is Jaisalmer Fort worth visiting?", a: "Yes — it's one of the few forts in India still inhabited, with shops, homes, and temples inside its walls." }
                ],
            };

        case "is-jeep-safari-camel-ride-dinner-worth-it-jaisalmer":
            return {
                title: "Is the Jaisalmer Jeep Safari, Camel Ride & Dinner Tour Worth It?",
                description: "An honest look at Jaisalmer's $120 combo tour: jeep safari into the Thar Desert, a camel ride, and dinner with folk dance.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/0a8efd7bac6be42a58bcae8f9afdabb4897549a8407ee6f6c487b3b795422d60.jpg",
                sections: [
                    { title: "The Short Answer", content: "Yes, if you want the classic Thar Desert evening in one outing — jeep safari out to the dunes, a camel ride, and a desert dinner with folk dance — rather than booking each piece separately.", tourCard: { slug: "jaisalmer-fort-guided-tour", title: "From Jaisalmer: Jeep Safari, Camel Ride, Dinner and Folk Dance", description: "A combined jeep safari, camel ride, and dinner with folk dance.", price: "From $120", duration: "5 hours" } },
                    { title: "What You Actually Get", content: "The jeep handles the longer desert stretches that would be exhausting by camel alone, the camel ride covers the final approach to the dunes, and dinner with live folk dance rounds out the evening as the sun sets over the Thar." },
                    { title: "Who It's For", content: "Best for travelers who want one evening in the desert rather than an overnight camp stay — if you want to sleep out under the stars, look for a separate overnight desert camp package instead." },
                    { title: "Practical Tips", content: "Sunset timing matters most here — confirm the pickup time lines up with golden hour at the dunes, since that's the visual highlight most people come for." }
                ],
                faqs: [
                    { q: "Is the Jaisalmer jeep safari and camel ride tour worth it?", a: "Yes, for a single well-rounded desert evening combining transport, a camel ride, and dinner with folk dance." },
                    { q: "Does this tour include an overnight desert camp?", a: "No — it's an evening outing, not an overnight stay. Book a separate camp package if you want to sleep in the desert." }
                ],
            };

        case "best-udaipur-city-tour-udaipur":
            return {
                title: "Which Is the Best Udaipur City Tour?",
                description: "Compare real Udaipur sightseeing tours — from a $20 guide-only booking to the $80 full or half-day private tour with an approved guide.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/9af855c76466d7cdb6e6e9493abe310cf589ecb43f6c4fa3a2239147d9e82c94.jpg",
                sections: [
                    { title: "The Short Answer", content: "Udaipur city tours mostly differ in how much is bundled in — a bare guide booking, a full private day with a car, or a themed heritage framing around the City Palace and lakes.", tourCard: { slug: "private-udaipur-city-tour-full-day-with-guide", title: "Private Udaipur City Tour – Full Day with Guide", description: "A private full-day city tour with a guide.", price: "From $20", duration: "8 hours" } },
                    { title: "Cheapest: Guide-Only Booking", content: "At $20, this just books you a guide for the day — useful if you already have your own car or driver and only need the local knowledge.", tourCard: { slug: "city-palace-guided-tour", title: "Book Tour Guide for Udaipur City Tour", description: "A guide-only booking for a self-arranged Udaipur city tour.", price: "From $20", duration: "8 hours" } },
                    { title: "Best Value: Private Full-Day with Guide", content: "This includes both a guide and the day structured around Udaipur's main sights, at the same $20 entry price as the guide-only option but with more built-in structure.", tourCard: { slug: "private-udaipur-city-tour-full-day-with-guide", title: "Private Udaipur City Tour – Full Day with Guide", description: "A structured private full-day tour with guide included.", price: "From $20", duration: "8 hours" } },
                    { title: "Best for Flexibility: Full or Half-Day with Approved Guide", content: "This lets you choose between a full or half day and pairs you with an officially approved guide, good if you're not sure how much time you'll want in advance.", tourCard: { slug: "city-palace-sightseeing-full-day-tour", title: "Udaipur: Private Full-Day or Half-Day Sightseeing Tour with a Approved Guide", description: "A flexible full or half-day sightseeing tour with an approved guide.", price: "From $80", duration: "8 hours" } },
                    { title: "Best Themed: The Venice of the East", content: "This version frames the day specifically around Udaipur's City Palace and lake heritage rather than a generic city overview.", tourCard: { slug: "city-palace-heritage-full-day-tour", title: "The Venice of the East: Udaipur Full-Day Guided Heritage Tour", description: "A heritage-focused full-day tour centered on the City Palace and lakes.", price: "From $50", duration: "8 hours" } },
                    { title: "Also Worth Knowing: Lake Pichola Add-On", content: "If your tour doesn't already include it, a dedicated Lake Pichola sightseeing add-on is available separately and pairs well with any of the above.", tourCard: { slug: "lake-pichola-full-day-tour", title: "Udaipur: Private Full-Day Sightseeing Tour with a Tour Guide", description: "A full-day sightseeing tour with a focus on Lake Pichola.", price: "From $29", duration: "8 hours" } },
                ],
                faqs: [
                    { q: "What is the best Udaipur city tour?", a: "The approved-guide full-or-half-day option gives the most flexibility; the $20 private full-day tour is the best value if budget matters most." },
                    { q: "How many days do you need in Udaipur?", a: "One full day covers the City Palace, Lake Pichola, and the old city center comfortably; add a second day for Kumbhalgarh or Chittorgarh day trips." }
                ],
            };

        case "is-kumbhalgarh-ranakpur-day-trip-worth-it-udaipur":
            return {
                title: "Is the Kumbhalgarh & Ranakpur Day Trip from Udaipur Worth It?",
                description: "An honest look at the $130 day round trip from Udaipur to Kumbhalgarh Fort and the Ranakpur Jain temple.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/0a8efd7bac6be42a58bcae8f9afdabb4897549a8407ee6f6c487b3b795422d60.jpg",
                sections: [
                    { title: "The Short Answer", content: "Yes, if you have a spare day in Udaipur and want to see something beyond the lakes — Kumbhalgarh's massive fort walls and Ranakpur's intricately carved marble Jain temple are both genuinely striking and rarely crowded compared to Udaipur's city center.", tourCard: { slug: "ranakpur-jain-temple-spiritual-tour", title: "From Udaipur : Kumbhalgarh and Ranakpur Temple Day Round Trip", description: "A day round trip covering Kumbhalgarh Fort and Ranakpur temple.", price: "From $130", duration: "1 day" } },
                    { title: "What You Actually See", content: "Kumbhalgarh has the second-longest fort wall in the world after the Great Wall of China, and Ranakpur's Jain temple is known for its 1,444 intricately carved marble pillars, no two exactly alike." },
                    { title: "Who It's For", content: "Best for travelers who've already covered the City Palace and Lake Pichola and want a full day away from the lake district — it's a longer drive, so it eats most of a day." },
                    { title: "Practical Tips", content: "Ranakpur's temple has a dress code (no leather items allowed inside) and modest clothing is expected, so plan your outfit accordingly before you go." }
                ],
                faqs: [
                    { q: "Is the Kumbhalgarh and Ranakpur day trip worth it from Udaipur?", a: "Yes, for travelers wanting to see Rajasthan's fort and temple architecture beyond Udaipur's lake district in a single day." },
                    { q: "How far is Kumbhalgarh from Udaipur?", a: "Roughly 2-2.5 hours each way by road, so combining it with Ranakpur on the same day makes efficient use of the drive." }
                ],
            };

        case "is-chittorgarh-fort-day-trip-worth-it-udaipur":
            return {
                title: "Is the Chittorgarh Fort Day Trip from Udaipur Worth It?",
                description: "An honest look at the $90 day trip by car from Udaipur to Chittorgarh Fort, one of Rajasthan's largest forts.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/9af855c76466d7cdb6e6e9493abe310cf589ecb43f6c4fa3a2239147d9e82c94.jpg",
                sections: [
                    { title: "The Short Answer", content: "Yes, if you're interested in Rajput history — Chittorgarh is the largest fort in India and the site of some of Rajasthan's most significant historical sieges, with towers, palaces, and temples spread across its hilltop.", tourCard: { slug: "chittorgarh-fort-full-day-tour", title: "Udaipur : Chittorgarh Fort Day Trip By Car", description: "A full-day car trip from Udaipur to Chittorgarh Fort.", price: "From $90", duration: "1 day" } },
                    { title: "What You Actually See", content: "The fort complex includes the Vijay Stambh (Victory Tower), Rani Padmini's Palace, and several temples, spread across a site large enough that a full day doesn't feel rushed." },
                    { title: "Who It's For", content: "Best for history-focused travelers; if you want nature or architecture more than history, the Kumbhalgarh/Ranakpur combo may suit you better." },
                    { title: "Practical Tips", content: "The fort complex is large and mostly outdoors with limited shade, so bring water and sun protection, especially if visiting outside the winter months." }
                ],
                faqs: [
                    { q: "Is the Chittorgarh Fort day trip worth it from Udaipur?", a: "Yes, for travelers interested in Rajput history and India's largest fort complex." },
                    { q: "How far is Chittorgarh from Udaipur?", a: "About 1.5-2 hours each way by road, making it a comfortable single-day round trip." }
                ],
            };

        case "is-vintage-car-havelis-tour-worth-it-udaipur":
            return {
                title: "Is the Private City Tour with Vintage Cars & Havelis Worth It in Udaipur?",
                description: "An honest look at the full-day private Udaipur city tour riding in a vintage car, visiting the city's royal havelis.",
                heroImage: "https://images.asiabylocals.com/asiabylocals/tours/udaipur-private-city-tour-with-vintage-cars/img0/1600.webp",
                sections: [
                    { title: "The Short Answer", content: "Yes, if you want to see Udaipur's royal heritage with a touch of old-world glamour — riding in a vintage car while visiting the city's historic havelis gives this private tour a genuinely different feel than a standard sedan-and-driver sightseeing day.", tourCard: { slug: "udaipur-private-city-tour-with-vintage-cars", title: "Udaipur: Private City Tour with Vintage Cars & Havelis", description: "A full-day private Udaipur city tour riding in a vintage car, visiting the city's royal havelis.", price: "From $198", duration: "8 hours", image: "https://images.asiabylocals.com/asiabylocals/tours/udaipur-private-city-tour-with-vintage-cars/img0/1600.webp" } },
                    { title: "What You Actually See", content: "Expect stops at several of Udaipur's grand havelis alongside the city's lakes and palaces, with the vintage car itself becoming part of the photo-worthy experience." },
                    { title: "Who It's For", content: "Best for travelers wanting a touch of old-world romance to their Udaipur sightseeing, rather than a purely practical city tour." },
                    { title: "Practical Tips", content: "Vintage cars prioritize style over speed and comfort, so expect a slower, more deliberate pace than a modern air-conditioned vehicle." }
                ],
                faqs: [
                    { q: "Is the vintage car and havelis tour worth it in Udaipur?", a: "Yes, for travelers wanting a touch of old-world glamour alongside genuine royal heritage sightseeing." }
                ],
            };

        case "best-jodhpur-blue-city-tour-jodhpur":
            return {
                title: "Which Is the Best Jodhpur Blue City Tour?",
                description: "Compare real Jodhpur city tours — from a $20 guide-only booking to the $92 private Mehrangarh Fort and Blue City tour with an approved guide.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/9af855c76466d7cdb6e6e9493abe310cf589ecb43f6c4fa3a2239147d9e82c94.jpg",
                sections: [
                    { title: "The Short Answer", content: "Jodhpur's Blue City tours mostly differ in whether you're walking the indigo-painted lanes on foot, touring Mehrangarh Fort with a guide, or doing both by car with a professional guide.", tourCard: { slug: "jodhpur-blue-city-tour-car-guide", title: "Explore Jodhpur: Blue City Tour with Car & Professional Guide", description: "A car-based Blue City tour with a professional guide.", price: "From $60", duration: "4 hours" } },
                    { title: "Cheapest: Blue City Walking Tour", content: "At $25, this is a straightforward walking tour of the blue-painted old city lanes with a local guide, no car needed.", tourCard: { slug: "ghanta-ghar-walking-tour", title: "Jodhpur: Blue City Walking Tour By Local Guide.", description: "A budget walking tour of the Blue City with a local guide.", price: "From $25", duration: "2 hours" } },
                    { title: "Best for Flexibility: Guide-Only Booking", content: "At $20, this just books you a guide for Jodhpur city and Mehrangarh Fort — useful if you already have your own transport sorted.", tourCard: { slug: "mehrangarh-fort-guided-tour", title: "Book Tour Guide for Jodhpur City", description: "A guide-only booking for Jodhpur city and the fort.", price: "From $20", duration: "4 hours" } },
                    { title: "Best Combo: Fort & Indigo Lanes Private Exploration", content: "This pairs Mehrangarh Fort with a private walk through the indigo-painted lanes, a step up from a basic walking tour.", tourCard: { slug: "mehrangarh-fort-exploration-private-tour", title: "Fort & Indigo Lanes: Private Blue City Exploration of Jodhpur", description: "A private tour combining Mehrangarh Fort with the Blue City lanes.", price: "From $50", duration: "4 hours" } },
                    { title: "Most Thorough: Private Tour with Approved Guide", content: "At $92, this is the most structured option, pairing Mehrangarh Fort and the Blue City with an officially approved guide for the full outing.", tourCard: { slug: "mehrangarh-fort-private-tour", title: "Jodhpur: Mehrangarh Fort and Blue City Private Tour with Approved Guide", description: "A private, approved-guide tour of the fort and Blue City.", price: "From $92", duration: "4 hours" } },
                    { title: "Practical Tips", content: "Mehrangarh Fort sits on a hilltop overlooking the Blue City, so most tours start there for the views before descending into the old town lanes — go in the morning for cooler walking weather." }
                ],
                faqs: [
                    { q: "What is the best Jodhpur Blue City tour?", a: "The private tour with an approved guide covers the most ground; the $25 walking tour is the best budget option for just the old city lanes." },
                    { q: "Why is Jodhpur called the Blue City?", a: "Many houses in the old city are painted blue, originally believed to repel heat and insects, giving the area its name." }
                ],
            };

        case "is-local-flavors-hidden-lanes-tour-worth-it-jodhpur":
            return {
                title: "Is the Jodhpur Local Flavors & Hidden Lanes Tour Worth It?",
                description: "An honest look at Jodhpur's $35 Blue Splendor tour, covering Padamsar Lake, local food, and the city's hidden lanes.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/0a8efd7bac6be42a58bcae8f9afdabb4897549a8407ee6f6c487b3b795422d60.jpg",
                sections: [
                    { title: "The Short Answer", content: "Yes, if you've already seen the fort and want a more local, food-focused side of Jodhpur — this covers Padamsar Lake and the hidden backstreets most standard fort-and-city tours skip, with local food worked in along the way.", tourCard: { slug: "padamsar-lake-guided-tour", title: "Blue Splendor: Local Flavors & Hidden Lanes of Jodhpur", description: "A food-and-lanes tour of Jodhpur covering Padamsar Lake.", price: "From $35", duration: "3 hours" } },
                    { title: "What You Actually Get", content: "Rather than circling the same fort-and-viewpoint route every Jodhpur tour hits, this one routes through quieter residential lanes and a stop at Padamsar Lake, with tastings of local snacks and sweets along the way." },
                    { title: "Who It's For", content: "Best as a second activity after Mehrangarh Fort, for travelers who want to taste their way through the city rather than just photograph it." },
                    { title: "Practical Tips", content: "Come a little hungry — the food stops are a core part of the route, not an afterthought." }
                ],
                faqs: [
                    { q: "Is the Jodhpur local flavors and hidden lanes tour worth it?", a: "Yes, as a food-focused complement to a standard fort tour, especially for travelers who want to see beyond the main sights." }
                ],
            };

        case "is-thar-desert-camel-jeep-safari-worth-it-jodhpur":
            return {
                title: "Is the Jodhpur Thar Desert Camel & Jeep Safari Worth It?",
                description: "An honest look at Jodhpur's $90 desert and camel/jeep safari tour into the Thar Desert.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/9af855c76466d7cdb6e6e9493abe310cf589ecb43f6c4fa3a2239147d9e82c94.jpg",
                sections: [
                    { title: "The Short Answer", content: "Yes, if you want a desert experience from Jodhpur without traveling all the way to Jaisalmer — this covers both a jeep safari and a camel ride into the Thar Desert's outskirts near the city.", tourCard: { slug: "thar-desert-guided-tour", title: "From Jodhpur : Enjoy Desert & Camel, Jeep Safari Tour", description: "A combined jeep safari and camel ride into the Thar Desert from Jodhpur.", price: "From $90", duration: "1 day" } },
                    { title: "What You Actually Get", content: "The jeep covers the rougher desert terrain while the camel ride handles the classic dune approach, giving a taste of the Thar Desert experience without the longer trip out to Jaisalmer's deeper dunes." },
                    { title: "Who It's For", content: "Good for travelers short on time who still want a desert outing; if the full Thar Desert dune experience matters more than convenience, Jaisalmer's dunes are more dramatic." },
                    { title: "Practical Tips", content: "Jodhpur's desert stretches are less dramatic than Jaisalmer's deeper dunes, so set expectations accordingly — this is more about a taste of the desert than an epic dune landscape." }
                ],
                faqs: [
                    { q: "Is the Jodhpur Thar Desert camel and jeep safari worth it?", a: "Yes, as a convenient desert taste from Jodhpur itself, though Jaisalmer offers more dramatic dunes if that's the priority." }
                ],
            };

        case "is-junagarh-fort-karni-mata-tour-worth-it-bikaner":
            return {
                title: "Is the Bikaner Junagarh Fort & Karni Mata Temple Tour Worth It?",
                description: "An honest look at Bikaner's $60 heritage tour covering Junagarh Fort and the Karni Mata rat temple.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/0a8efd7bac6be42a58bcae8f9afdabb4897549a8407ee6f6c487b3b795422d60.jpg",
                sections: [
                    { title: "The Short Answer", content: "Yes, if you're curious about one of Rajasthan's most unusual sights — Karni Mata Temple, home to thousands of revered rats, paired with Junagarh Fort's well-preserved palaces and museum.", tourCard: { slug: "junagarh-fort-spiritual-tour", title: "Bikaner Heritage Journey: Explore Junagarh Fort & Karni Mata Temple", description: "A heritage tour combining Junagarh Fort and Karni Mata Temple.", price: "From $60", duration: "1 day" } },
                    { title: "What You Actually See", content: "Junagarh Fort was never conquered and its interiors — including the Karan Mahal and Anup Mahal — are unusually well preserved, while Karni Mata Temple a short drive away is genuinely one of India's stranger and more memorable religious sites." },
                    { title: "Who It's For", content: "Best for travelers who've covered Jaisalmer and Jodhpur and want a less-visited Rajasthan city with a genuinely unique stop rather than another fort-only itinerary." },
                    { title: "Practical Tips", content: "Visitors at Karni Mata Temple go barefoot inside, and the rats are considered sacred, so observe respectfully rather than reacting with alarm." }
                ],
                faqs: [
                    { q: "Is the Bikaner Junagarh Fort and Karni Mata Temple tour worth it?", a: "Yes, for travelers wanting a less-visited Rajasthan stop with one of India's most distinctive temples." },
                    { q: "What is unusual about Karni Mata Temple?", a: "It's home to thousands of rats considered sacred and protected, making it one of India's most unusual religious sites." }
                ],
            };

        default:
            return null;
    }
}

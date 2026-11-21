import { CityInfoData } from './cityInfoContent';

export function getNepalInfoContent(slug: string): CityInfoData | null {
    switch (slug) {
        case "best-everest-base-camp-trek-kathmandu":
            return {
                title: "Which Is the Best Everest Base Camp Trek from Kathmandu?",
                seoTitle: "Best Everest Base Camp Trek 2026 | Honest Comparison",
                description: "Compare real Everest Base Camp trek itineraries from Kathmandu — from a budget 12-day road route to classic 14-day Lukla-flight treks and private group options.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/60b065101488006276ff1b5aa3c914dc950dd1e64def36a4b66153b2ed7acce3.jpg",
                sections: [
                    {
                        title: "The Short Answer",
                        content: "Every Everest Base Camp trek covers roughly the same route through the Khumbu valley to 5,364m, but itineraries differ a lot in length (10-15 days), how you reach Lukla (flight vs. budget overland route), and group size. A 12-14 day trek with a Lukla flight is the standard, most-booked version.",
                        tourCard: { slug: "from-kathmandulukla-everest-base-camp-ebc-10-day", title: "From Kathmandu/Lukla: Everest Base Camp (EBC) 10-Day Trek", description: "A compact 10-day EBC trek via the standard Lukla flight route.", price: "From $662", duration: "10 days", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/60b065101488006276ff1b5aa3c914dc950dd1e64def36a4b66153b2ed7acce3.jpg" },
                    },
                    {
                        title: "Cheapest: Budget Road Route",
                        content: "This route skips the Lukla flight entirely and starts by road, which is why it's priced well below the flight-based treks — a genuine budget option, though it adds travel days overland.",
                        tourCard: { slug: "budget-everest-base-camp-trek-14-days-via-road", title: "Budget Everest Base Camp Trek: 14-Days via Road", description: "The lowest-cost EBC trek, reaching Lukla by road instead of flying.", price: "From $1689", duration: "14 days", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/b5a91fed8d1dd3c4a25552187c4593417179cde72255531b376d23c096f61bcf.png" },
                    },
                    {
                        title: "Best Value Standard Trek: 12-Day with Licensed Guide",
                        content: "A well-priced, standard-length trek with a licensed guide and the usual Lukla flight — the most straightforward choice if you don't need a longer acclimatization schedule.",
                        tourCard: { slug: "12-day-everest-base-camp-with-licensed-guide", title: "12-Day Everest Base Camp with Licensed Guide", description: "A standard 12-day trek led by a licensed guide.", price: "From $467", duration: "12 days", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/60b065101488006276ff1b5aa3c914dc950dd1e64def36a4b66153b2ed7acce3.jpg" },
                    },
                    {
                        title: "Best for Private/Small Groups: 11-Day Trek",
                        content: "This option explicitly offers a private or small-group format rather than joining a larger fixed group, useful if you want more flexibility on pace.",
                        tourCard: { slug: "everest-base-camp-11-day-private-or-group-trek", title: "Everest Base Camp: 11-Day Private or Group Trek to 5,364m", description: "An 11-day trek bookable as private or group.", price: "From $1689", duration: "11 days", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/26936def6db0fce54fe5018204bd320a4e8d7f1186619f3aafc971bf7680e65d.jpeg" },
                    },
                    {
                        title: "Best All-Inclusive: 14-Day Trek",
                        content: "This longer 14-day version bills itself as all-inclusive, bundling permits, flights, and accommodation into one price rather than leaving items to pay for separately along the route.",
                        tourCard: { slug: "kathmandu-14-day-everest-base-camp-trek-all", title: "Kathmandu: 14-Day Everest Base Camp Trek (All-Inclusive)", description: "A 14-day all-inclusive version of the classic EBC trek.", price: "From $980", duration: "14 days", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/70170943839690dd1b964cf7ab98a0368190318e0f3002454bbb96a6907ab2a8.jpg" },
                    },
                    {
                        title: "Best Budget Multi-Day: 12-Day Trek",
                        content: "A longer 12-day schedule at a lower price point than most of the 14-day options, giving a bit more acclimatization time without the highest-tier cost.",
                        tourCard: { slug: "budget-12-days-everest-base-camp-trek-from", title: "Budget: 12 Days Everest Base Camp Trek from Kathmandu", description: "A 12-day budget-focused EBC trek from Kathmandu.", price: "From $1809", duration: "12 days", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/7484ce3db2583a023df5f9b71799388ee699d808f0087387a5fcdf8fe3fea28c.jpeg" },
                    },
                    {
                        title: "Practical Tips",
                        content: "Lukla flights are notoriously weather-dependent and get delayed or cancelled often, especially in the morning fog — build in a buffer day if your schedule is tight. Altitude sickness risk rises fast above 3,500m, so a trek with proper acclimatization days (usually 12+ days total) is worth the extra cost over the fastest itinerary."
                    }
                ],
                faqs: [
                    { q: "What is the best Everest Base Camp trek from Kathmandu?", a: "A standard 12-14 day trek with a Lukla flight and licensed guide suits most trekkers; budget travellers can use the road-route option instead of flying." },
                    { q: "How long does the Everest Base Camp trek take?", a: "Most itineraries run 10-15 days round-trip from Kathmandu, including acclimatization days." },
                    { q: "What's the cheapest way to trek to Everest Base Camp?", a: "A budget road-route trek that skips the Lukla flight, though it adds overland travel time." },
                    { q: "Do I need previous trekking experience for Everest Base Camp?", a: "No technical climbing skill is needed, but a reasonable fitness level and proper acclimatization days are important given the altitude." }
                ],
                jsonLd: {
                    "@context": "https://schema.org",
                    "@type": "FAQPage",
                    "mainEntity": [
                        { "@type": "Question", "name": "What is the best Everest Base Camp trek from Kathmandu?", "acceptedAnswer": { "@type": "Answer", "text": "A standard 12-14 day trek with a Lukla flight and licensed guide suits most trekkers." } },
                        { "@type": "Question", "name": "How long does the Everest Base Camp trek take?", "acceptedAnswer": { "@type": "Answer", "text": "Most itineraries run 10-15 days round-trip." } },
                        { "@type": "Question", "name": "What's the cheapest way to trek to Everest Base Camp?", "acceptedAnswer": { "@type": "Answer", "text": "A budget road-route trek that skips the Lukla flight." } },
                        { "@type": "Question", "name": "Do I need previous trekking experience?", "acceptedAnswer": { "@type": "Answer", "text": "No technical skill needed, but good fitness and acclimatization matter." } }
                    ]
                },
            };

        case "best-everest-base-camp-helicopter-tour-kathmandu":
            return {
                title: "Which Is the Best Everest Base Camp Helicopter Tour from Kathmandu?",
                seoTitle: "Best Everest Base Camp Helicopter Tour 2026 | Honest Comparison",
                description: "Compare real Everest Base Camp helicopter day tours from Kathmandu — from a $1,836 private tour to combos with breakfast and Gokyo Lake.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/d5b7ad6313c3bca37d7db8e12b5c7306152d87082e8334cf9eee0313d07140c1.jpg",
                sections: [
                    {
                        title: "The Short Answer",
                        content: "A helicopter tour sees Everest Base Camp in a single day instead of a two-week trek, landing briefly near the base camp area (weather permitting) before returning to Kathmandu. It's the option for travellers who want the view and the bragging rights without the multi-day trekking commitment.",
                        tourCard: { slug: "kathmandu-everest-base-camp-helicopter-tour-with", title: "Kathmandu: Everest Base Camp Helicopter Tour with Breakfast", description: "A one-day helicopter tour to Everest Base Camp with breakfast included.", price: "From $1907", duration: "6 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/d5b7ad6313c3bca37d7db8e12b5c7306152d87082e8334cf9eee0313d07140c1.jpg" },
                    },
                    {
                        title: "Best for Private Groups: Private Helicopter Tour",
                        content: "This version is explicitly private rather than shared with other passengers, giving more flexibility on timing and a more personal experience for small groups or couples.",
                        tourCard: { slug: "from-kathmandu-private-everest-base-camp", title: "From Kathmandu: Private Everest Base Camp Helicopter Tour", description: "A private helicopter day tour to Everest Base Camp.", price: "From $1836", duration: "6 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/d9fb2a78d0ead10cff7255b183722732e4e58a42659dcbb8fdaed2c55f0135d7.jpeg" },
                    },
                    {
                        title: "Cheapest: 6-Hour Private Tour",
                        content: "At $1,836, this is the lowest-priced private helicopter option among the tours listed here, covering the same core Everest Base Camp flyover and landing.",
                        tourCard: { slug: "kathmandu-6-hour-private-everest-base-camp", title: "Kathmandu: 6-Hour Private Everest Base Camp Helicopter Tour", description: "A 6-hour private helicopter tour to Everest Base Camp.", price: "From $1836", duration: "6 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/d9fb2a78d0ead10cff7255b183722732e4e58a42659dcbb8fdaed2c55f0135d7.jpeg" },
                    },
                    {
                        title: "Best with Breakfast: EBC Tour with Breakfast",
                        content: "This adds a mountain-view breakfast stop to the standard helicopter route, a small but welcome addition given the very early departure times these tours require.",
                        tourCard: { slug: "kathmandu-everest-base-camp-helicopter-tour-with", title: "Kathmandu: Everest Base Camp Helicopter Tour with Breakfast", description: "The standard helicopter tour with a breakfast stop included.", price: "From $1907", duration: "6 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/d5b7ad6313c3bca37d7db8e12b5c7306152d87082e8334cf9eee0313d07140c1.jpg" },
                    },
                    {
                        title: "Best for a Fuller Flight: + Gokyo Lake",
                        content: "This longer version adds Gokyo Lake to the route, covering more of the Khumbu region's scenery in a single flight rather than just the base camp area.",
                        tourCard: { slug: "kathmandu-everest-base-camp-and-gokyo-lake", title: "Kathmandu: Everest Base Camp and Gokyo Lake Helicopter Tour", description: "A helicopter tour covering both Everest Base Camp and Gokyo Lake.", price: "From $1924", duration: "7 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/c51806752814eef879ea31e88bb10a218c29b2ff7b7e2b3c85d69f5cbc395ff3.jpg" },
                    },
                    {
                        title: "Practical Tips",
                        content: "Helicopter tours depart very early (often before sunrise) since mountain weather is most stable in the morning, and are frequently delayed or cancelled on short notice if clouds roll in — build a buffer day into your trip if possible rather than booking on your last day in Kathmandu."
                    }
                ],
                faqs: [
                    { q: "What is the best Everest Base Camp helicopter tour from Kathmandu?", a: "A private 6-hour tour suits most travellers; add Gokyo Lake if you want to see more of the Khumbu region in one flight." },
                    { q: "How long is an Everest Base Camp helicopter tour?", a: "Most tours run 6-7 hours door-to-door from Kathmandu, including the landing time near base camp." },
                    { q: "Can weather cancel an Everest Base Camp helicopter tour?", a: "Yes, mountain weather can delay or cancel flights on short notice, so a buffer day is recommended." },
                    { q: "Is the helicopter tour a substitute for trekking to Everest Base Camp?", a: "It covers the same destination in a single day rather than two weeks, but it's a different experience — no multi-day trekking through Sherpa villages." }
                ],
                jsonLd: {
                    "@context": "https://schema.org",
                    "@type": "FAQPage",
                    "mainEntity": [
                        { "@type": "Question", "name": "What is the best Everest Base Camp helicopter tour from Kathmandu?", "acceptedAnswer": { "@type": "Answer", "text": "A private 6-hour tour suits most travellers." } },
                        { "@type": "Question", "name": "How long is an Everest Base Camp helicopter tour?", "acceptedAnswer": { "@type": "Answer", "text": "Most tours run 6-7 hours door-to-door." } },
                        { "@type": "Question", "name": "Can weather cancel the tour?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, mountain weather can delay or cancel flights on short notice." } },
                        { "@type": "Question", "name": "Is it a substitute for trekking?", "acceptedAnswer": { "@type": "Answer", "text": "It reaches the same destination but in one day rather than two weeks." } }
                    ]
                },
            };

        case "best-kathmandu-durbar-square-tour-kathmandu":
            return {
                title: "Which Is the Best Kathmandu Durbar Square Tour?",
                seoTitle: "Best Kathmandu Durbar Square Tour 2026 | Honest Comparison",
                description: "Compare real Kathmandu Durbar Square tours — from a $13 walking tour combined with Monkey Temple to a $98 Thanka art experience and a full royal-museums tour.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/17379c867a25536f93c25e6c14867f0f0c0ef4bc0b8be712f6bccf364848e60c.png",
                sections: [
                    {
                        title: "The Short Answer",
                        content: "Kathmandu Durbar Square is the old royal palace complex in the heart of the city, and most tours pair it with a nearby stop rather than visiting it alone. A guided walking tour from Thamel covering the square's temples and courtyards is the most common starting point.",
                        tourCard: { slug: "kathmandu-durbar-square-guided-tour-from-thamel", title: "Kathmandu: Durbar Square Guided Tour from Thamel", description: "A guided walking tour of Durbar Square starting from Thamel.", price: "From $33", duration: "3 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/9ad71ad10a2bdf1df726d233085cc53e0162627b5308c4e38a1f65990fa7d0a9.jpg" },
                    },
                    {
                        title: "Cheapest: Combined with Monkey Temple",
                        content: "At $13, this combines a Durbar Square walk with a stop at Swayambhunath (Monkey Temple), the lowest-priced way to see both landmarks.",
                        tourCard: { slug: "kathmandu-walking-tour-with-monkey-temple-durbar", title: "Kathmandu: Walking Tour with Monkey Temple & Durbar Square", description: "A budget combo walking tour of Durbar Square and Monkey Temple.", price: "From $13", duration: "4 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/17379c867a25536f93c25e6c14867f0f0c0ef4bc0b8be712f6bccf364848e60c.png" },
                    },
                    {
                        title: "Most Popular: Standard Guided Tour",
                        content: "A straightforward guided tour of the square itself, covering its temples, courtyards, and the former royal palace.",
                        tourCard: { slug: "kathmandu-durbar-square-guided-tour-from-thamel", title: "Kathmandu: Durbar Square Guided Tour from Thamel", description: "The standard guided tour of Durbar Square.", price: "From $33", duration: "3 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/9ad71ad10a2bdf1df726d233085cc53e0162627b5308c4e38a1f65990fa7d0a9.jpg" },
                    },
                    {
                        title: "Best for Independent Sightseeing: Durbar Square Sightseeing",
                        content: "This version focuses purely on sightseeing at your own pace with a guide on hand, rather than a fixed walking route.",
                        tourCard: { slug: "kathmandu-durbar-square-sightseeing", title: "Kathmandu Durbar Square Sightseeing", description: "A flexible sightseeing visit to Durbar Square.", price: "From $89", duration: "3 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/32fcb1aa1fecfc1e476db18281ce97c523e6888ba0fb65a058fd7b3abf7b1aaf.jpeg" },
                    },
                    {
                        title: "Best for Culture: + Thanka Art Experience",
                        content: "This adds a Thanka painting art experience to the square visit, a good pick if you want a hands-on cultural activity alongside the sightseeing.",
                        tourCard: { slug: "kathmandu-durbar-square-tour-and-thanka-art", title: "Kathmandu: Durbar Square Tour and Thanka Art Experience", description: "Durbar Square combined with a Thanka art experience.", price: "From $98", duration: "3 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/a6ee34f18859851839621aed636bc59949a777fa413bf44ba2d379ebf4f3d9ac.jpg" },
                    },
                    {
                        title: "Most Comprehensive: Durbar Squares & Royal Museums",
                        content: "The widest-reaching version, covering multiple Durbar Squares and their royal museums rather than just the Kathmandu one.",
                        tourCard: { slug: "kathmandu-durbar-squares-and-royal-museums-guided", title: "Kathmandu Durbar Squares and Royal Museums Guided Tour", description: "A guided tour covering multiple Durbar Squares and royal museums.", price: "From $98", duration: "6 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/18e20635880732edbe1a687229841a01144dadf936e86691c3e242a99f504182.jpg" },
                    },
                    {
                        title: "Practical Tips",
                        content: "A separate entrance ticket is required for foreign visitors at Kathmandu Durbar Square, which some tours include and others don't — check before booking. The square is still an active religious and civic space, so dress modestly and expect some areas to be closed during ceremonies.",
                    }
                ],
                faqs: [
                    { q: "What is the best Kathmandu Durbar Square tour?", a: "A standard guided walking tour suits most visitors; combine it with Monkey Temple for a budget option." },
                    { q: "Is an entrance ticket needed for Kathmandu Durbar Square?", a: "Yes, foreign visitors need a separate entrance ticket, which some tours include." },
                    { q: "How long does a Durbar Square tour take?", a: "Most tours run 3-4 hours; combined multi-site tours can run up to 6 hours." },
                    { q: "Can Durbar Square be combined with other sites?", a: "Yes, Monkey Temple and Thanka art experiences are common add-ons." }
                ],
                jsonLd: {
                    "@context": "https://schema.org",
                    "@type": "FAQPage",
                    "mainEntity": [
                        { "@type": "Question", "name": "What is the best Kathmandu Durbar Square tour?", "acceptedAnswer": { "@type": "Answer", "text": "A standard guided walking tour suits most visitors; combine it with Monkey Temple for a budget option." } },
                        { "@type": "Question", "name": "Is an entrance ticket needed for Kathmandu Durbar Square?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, foreign visitors need a separate entrance ticket, which some tours include." } },
                        { "@type": "Question", "name": "How long does a Durbar Square tour take?", "acceptedAnswer": { "@type": "Answer", "text": "Most tours run 3-4 hours; combined multi-site tours can run up to 6 hours." } },
                        { "@type": "Question", "name": "Can Durbar Square be combined with other sites?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, Monkey Temple and Thanka art experiences are common add-ons." } }
                    ]
                },
            };
        case "best-pashupatinath-boudhanath-tour-kathmandu":
            return {
                title: "Which Is the Best Pashupatinath & Boudhanath Tour in Kathmandu?",
                seoTitle: "Best Pashupatinath & Boudhanath Tour Kathmandu 2026 | Honest Comparison",
                description: "Compare real Pashupatinath Temple and Boudhanath Stupa tours from Kathmandu — from a $36 guided day visit to evening Aarati cremation ceremony tours.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/8c0593362ddf5e644091693aefd6f0082396b15d6c421539f14ef3fa152167b5.jpeg",
                sections: [
                    {
                        title: "The Short Answer",
                        content: "Pashupatinath, Nepal's most important Hindu temple, and Boudhanath, one of the largest Buddhist stupas in the world, are usually visited together since they're a short drive apart. The main choice is daytime sightseeing versus the evening Aarati ritual, a dramatic fire ceremony held along the Bagmati River.",
                        tourCard: { slug: "kathmandu-pashupatinath-boudhanath-guided-tour", title: "Kathmandu: Pashupatinath & Boudhanath Guided Tour", description: "A standard guided day tour of both sites.", price: "From $36", duration: "3 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/bda11171c983464b583d4e4c5943bebc108ffaabfa3623615b69f16e20363cf9.jpg" },
                    },
                    {
                        title: "Cheapest: Standard Guided Tour",
                        content: "At $36, this is the lowest-priced way to see both sites together during the day.",
                        tourCard: { slug: "kathmandu-pashupatinath-boudhanath-guided-tour", title: "Kathmandu: Pashupatinath & Boudhanath Guided Tour", description: "The budget-friendly day tour of both sites.", price: "From $36", duration: "3 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/bda11171c983464b583d4e4c5943bebc108ffaabfa3623615b69f16e20363cf9.jpg" },
                    },
                    {
                        title: "Best for the Evening Ritual: Aarati Tour",
                        content: "This times the visit for the evening Aarati ceremony at Pashupatinath, a candle-and-fire ritual performed daily along the riverbank.",
                        tourCard: { slug: "kathmandu-temple-evening-tour", title: "Kathmandu: Pashupatinath Temple Evening Aarati Tour (Daily)", description: "An evening tour timed for the daily Aarati ritual.", price: "From $46", duration: "3 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/5a7ae2fd4ac81b3b2138b10708ebd75ca030be617cee32a7873d2681551e96de.png" },
                    },
                    {
                        title: "Best Combined Visit: Temple & Stupa Tour",
                        content: "A fuller version covering both Pashupatinath and Boudhanath in more depth than the basic combo.",
                        tourCard: { slug: "kathmandu-pashupatinath-temple-boudhanath-stupa", title: "Kathmandu: Pashupatinath Temple & Boudhanath Stupa Tour", description: "A more in-depth tour of both sites.", price: "From $63", duration: "5 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/8c0593362ddf5e644091693aefd6f0082396b15d6c421539f14ef3fa152167b5.jpeg" },
                    },
                    {
                        title: "Most Comprehensive: + Art Gallery",
                        content: "This adds an art gallery stop to the temple and stupa visit, for travellers who want a cultural add-on alongside the religious sites.",
                        tourCard: { slug: "kathmandu-boudhanath-pashupati-art-gallery-aarati", title: "Kathmandu: Boudhanath, Pashupati, Art Gallery & Aarati Tour", description: "The most complete version, adding an art gallery stop.", price: "From $90", duration: "4 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/ada54a421b8ce5c4f2c897c9cdc25d17d23ebbe6b80b4e1c6ceacc5610340ab9.jpeg" },
                    },
                    {
                        title: "Best Full-Day Option: Day Trip Version",
                        content: "A longer day-trip format for travellers who want to spend more unhurried time at both sites rather than a quick visit.",
                        tourCard: { slug: "kathmandu-day-trip-pashupatinath-temple", title: "Kathmandu: Day Trip Pashupatinath Temple & Boudhanath Stupa", description: "A full-day version of the temple and stupa visit.", price: "From $104", duration: "4 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/ee2d83013a317c6ae73bac31639f7e89037b4b15e00e72788a28c47fb0714561.jpg" },
                    },
                    {
                        title: "Practical Tips",
                        content: "Non-Hindus cannot enter the main Pashupatinath temple building itself but can view it from across the river, where cremation ceremonies are also visible — be respectful with photography in this area. Evening Aarati draws large crowds, so arrive early for a good viewing spot.",
                    }
                ],
                faqs: [
                    { q: "What is the best Pashupatinath and Boudhanath tour?", a: "A standard guided day tour suits most visitors; go for the evening version if you want to see the Aarati ritual." },
                    { q: "Can non-Hindus enter Pashupatinath Temple?", a: "No, the main temple building is restricted to Hindus, but it can be viewed from across the river." },
                    { q: "What is the Aarati ceremony?", a: "A daily evening fire-and-candle ritual performed along the Bagmati River at Pashupatinath." },
                    { q: "How far apart are Pashupatinath and Boudhanath?", a: "A short drive apart, which is why almost every tour visits both in one trip." }
                ],
                jsonLd: {
                    "@context": "https://schema.org",
                    "@type": "FAQPage",
                    "mainEntity": [
                        { "@type": "Question", "name": "What is the best Pashupatinath and Boudhanath tour?", "acceptedAnswer": { "@type": "Answer", "text": "A standard guided day tour suits most visitors; go for the evening version if you want to see the Aarati ritual." } },
                        { "@type": "Question", "name": "Can non-Hindus enter Pashupatinath Temple?", "acceptedAnswer": { "@type": "Answer", "text": "No, the main temple building is restricted to Hindus, but it can be viewed from across the river." } },
                        { "@type": "Question", "name": "What is the Aarati ceremony?", "acceptedAnswer": { "@type": "Answer", "text": "A daily evening fire-and-candle ritual performed along the Bagmati River at Pashupatinath." } },
                        { "@type": "Question", "name": "How far apart are Pashupatinath and Boudhanath?", "acceptedAnswer": { "@type": "Answer", "text": "A short drive apart, which is why almost every tour visits both in one trip." } }
                    ]
                },
            };
        case "best-swayambhunath-monkey-temple-tour-kathmandu":
            return {
                title: "Which Is the Best Swayambhunath (Monkey Temple) Tour in Kathmandu?",
                seoTitle: "Best Swayambhunath Monkey Temple Tour 2026 | Honest Comparison",
                description: "Compare real Swayambhunath (Monkey Temple) tours from Kathmandu — from a $26 walk from Thamel to evening art-gallery visits and dedicated monkey-watching tours.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/a98c3832feb8c64d67d8aef0662212a0d9eb43460b5ad6050d3ecea1958a532d.png",
                sections: [
                    {
                        title: "The Short Answer",
                        content: "Swayambhunath, nicknamed the Monkey Temple for its resident monkey population, sits on a hilltop overlooking Kathmandu Valley. A guided walk from Thamel is the simplest, most common way to visit, usually combined with some of the surrounding old-town streets.",
                        tourCard: { slug: "from-thamel-walk-to-swayambhunath-the-monkey", title: "From Thamel: Walk to Swayambhunath, the Monkey Temple", description: "A guided walk from Thamel up to Swayambhunath.", price: "From $26", duration: "3 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/a98c3832feb8c64d67d8aef0662212a0d9eb43460b5ad6050d3ecea1958a532d.png" },
                    },
                    {
                        title: "Cheapest: Walk from Thamel",
                        content: "At $26, this is the lowest-priced way to reach Swayambhunath, walking there directly from Thamel.",
                        tourCard: { slug: "from-thamel-walk-to-swayambhunath-the-monkey", title: "From Thamel: Walk to Swayambhunath, the Monkey Temple", description: "The budget-friendly walking route to Swayambhunath.", price: "From $26", duration: "3 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/a98c3832feb8c64d67d8aef0662212a0d9eb43460b5ad6050d3ecea1958a532d.png" },
                    },
                    {
                        title: "Best Combined Walk: Thamel & Swayambhunath",
                        content: "This pairs the temple visit with a broader walking tour of Thamel itself, good if you want more of the surrounding neighborhood covered.",
                        tourCard: { slug: "kathmandu-thamel-swayambhunath-walking-tour-with", title: "Kathmandu: Thamel & Swayambhunath Walking Tour with Guide", description: "A combined walking tour of Thamel and Swayambhunath.", price: "From $39", duration: "3 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/f679e5d06b2f99b2c4c41eda700ed31c98801d15b0da225e4514a0dd1047a369.png" },
                    },
                    {
                        title: "Best for Wildlife: Monkey Watching Tour",
                        content: "This leans into the temple's namesake monkey population with a dedicated monkey-watching focus alongside the usual temple sightseeing.",
                        tourCard: { slug: "kathmandu-monkey-temple-guided-monkey-watching", title: "Kathmandu: Monkey Temple Guided Monkey Watching Tour", description: "A tour focused on the temple's monkey population.", price: "From $71", duration: "2 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/ae218bdeab1482901c06ddf2fc26708e5fdef6569c8cb7cc95f9ea736c6cf196.jpg" },
                    },
                    {
                        title: "Best for Evening Light: Swayambhunath Evening Tour",
                        content: "Timed for evening, this version pairs the temple visit with an art gallery stop while catching the hilltop at golden hour.",
                        tourCard: { slug: "kathmandu-swayambhunath-evening-tour-with-art", title: "Kathmandu: Swayambhunath Evening Tour with Art Gallery Visit", description: "An evening temple visit paired with an art gallery.", price: "From $73", duration: "4 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/205e4b8b089408170511899235b954b4c70977a8bbee329836a9410dd095269a.jpg" },
                    },
                    {
                        title: "Practical Tips",
                        content: "Climbing the 365 stone steps to the top is the traditional approach and gives the best views, but a road also leads most of the way up if steps aren't an option. Keep food and loose items away from the monkeys, who are used to grabbing from visitors.",
                    }
                ],
                faqs: [
                    { q: "What is the best Swayambhunath tour from Kathmandu?", a: "A guided walk from Thamel suits most visitors; add an evening timing for better light and photos." },
                    { q: "Why is Swayambhunath called the Monkey Temple?", a: "Because of its large resident population of monkeys around the temple grounds." },
                    { q: "How do you get to Swayambhunath?", a: "On foot via 365 stone steps, or by road most of the way up for those who prefer not to climb." },
                    { q: "Is Swayambhunath safe for monkeys and food?", a: "Keep food and loose items secured, as the monkeys are accustomed to taking items from visitors." }
                ],
                jsonLd: {
                    "@context": "https://schema.org",
                    "@type": "FAQPage",
                    "mainEntity": [
                        { "@type": "Question", "name": "What is the best Swayambhunath tour from Kathmandu?", "acceptedAnswer": { "@type": "Answer", "text": "A guided walk from Thamel suits most visitors; add an evening timing for better light and photos." } },
                        { "@type": "Question", "name": "Why is Swayambhunath called the Monkey Temple?", "acceptedAnswer": { "@type": "Answer", "text": "Because of its large resident population of monkeys around the temple grounds." } },
                        { "@type": "Question", "name": "How do you get to Swayambhunath?", "acceptedAnswer": { "@type": "Answer", "text": "On foot via 365 stone steps, or by road most of the way up for those who prefer not to climb." } },
                        { "@type": "Question", "name": "Is Swayambhunath safe for monkeys and food?", "acceptedAnswer": { "@type": "Answer", "text": "Keep food and loose items secured, as the monkeys are accustomed to taking items from visitors." } }
                    ]
                },
            };
        case "best-bhaktapur-durbar-square-tour-kathmandu":
            return {
                title: "Which Is the Best Bhaktapur Durbar Square Tour from Kathmandu?",
                seoTitle: "Best Bhaktapur Durbar Square Tour 2026 | Honest Comparison",
                description: "Compare real Bhaktapur day tours from Kathmandu — from a $102 4-hour Durbar Square tour to combos with Nagarkot sunset and Patan.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/d24f550d178617a749769052211a3e21a02fb1a9faa97cc3dbc93c3fb25384f4.jpg",
                sections: [
                    {
                        title: "The Short Answer",
                        content: "Bhaktapur's UNESCO-listed Durbar Square is one of the best-preserved medieval city centers in the Kathmandu Valley, known for its wood carvings, pottery squares, and temples. A standalone 4-hour tour is the standard way to see it without adding extra stops.",
                        tourCard: { slug: "bhaktapur-durbar-square-4-hour-tour", title: "Bhaktapur Durbar Square 4-Hour Tour", description: "A standalone guided tour of Bhaktapur Durbar Square.", price: "From $102", duration: "4 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/d24f550d178617a749769052211a3e21a02fb1a9faa97cc3dbc93c3fb25384f4.jpg" },
                    },
                    {
                        title: "Best Value Standalone: 4-Hour Tour",
                        content: "A focused half-day visit to Bhaktapur's Durbar Square without combining it with other cities.",
                        tourCard: { slug: "bhaktapur-durbar-square-4-hour-tour", title: "Bhaktapur Durbar Square 4-Hour Tour", description: "The standard standalone Bhaktapur tour.", price: "From $102", duration: "4 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/d24f550d178617a749769052211a3e21a02fb1a9faa97cc3dbc93c3fb25384f4.jpg" },
                    },
                    {
                        title: "Best for Sunset: + Nagarkot Combo",
                        content: "This pairs Bhaktapur with a sunset stop at Nagarkot, good for travellers who want to end the day with mountain views.",
                        tourCard: { slug: "kathmandu-bhaktapur-durbar-square-nagarkot-sunset", title: "Kathmandu: Bhaktapur Durbar Square & Nagarkot Sunset Tour", description: "Bhaktapur combined with a Nagarkot sunset stop.", price: "From $102", duration: "6 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/ae94750f95fec83463d19af5a0511b342ea1bfee84468d98f9fd6f1fd62b5b55.jpeg" },
                    },
                    {
                        title: "Best Combined Heritage Tour: + Patan with Lunch",
                        content: "This combines Bhaktapur with Patan's Durbar Square and includes lunch, a good way to compare two of the valley's three royal cities in one day.",
                        tourCard: { slug: "kathmandu-patan-bhaktapur-durbar-square-tour-with", title: "Kathmandu: Patan & Bhaktapur Durbar Square Tour with Lunch", description: "Bhaktapur and Patan combined with lunch included.", price: "From $103", duration: "5 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/64cf9c608f064d9daca4ec8f21b2eb55393562cb85132c40898f89623c5c4b4b.jpeg" },
                    },
                    {
                        title: "Best for Private Groups: Private Patan & Bhaktapur Sightseeing",
                        content: "This version runs as a private tour rather than a shared group, giving more flexibility on pace and timing across both cities.",
                        tourCard: { slug: "kathmandu-private-patan-and-bhaktapur-sightseeing", title: "Kathmandu: Private Patan and Bhaktapur Sightseeing Tour", description: "A private version of the Patan and Bhaktapur combo.", price: "From $104", duration: "6 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/606f313f7cebb5abb650f0c131e923d350441be2a1e79c1b4e9ee31c2667eb3f.png" },
                    },
                    {
                        title: "Best for a Quieter Route: + Panauti Walking Tour",
                        content: "This adds a walk through Panauti, a quieter, less-visited heritage town, to the Bhaktapur visit — a good pick if you want to get away from the more touristed stops.",
                        tourCard: { slug: "from-kathmandu-bhaktapur-panauti-guided-walking", title: "From Kathmandu, Bhaktapur & Panauti Guided Walking Tour", description: "Bhaktapur combined with a walk through Panauti.", price: "From $13", duration: "5 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/698d9a69555a25bc303546d8485c09d8a236eebb20ad4d7e98417599f18cb30f.jpg" },
                    },
                    {
                        title: "Practical Tips",
                        content: "Bhaktapur charges a separate entrance fee for foreign visitors, often higher than Kathmandu or Patan's — check if your tour price includes it. The town is still a living community, so expect to see potters, woodcarvers, and daily life happening right alongside the historic sites.",
                    }
                ],
                faqs: [
                    { q: "What is the best Bhaktapur tour from Kathmandu?", a: "A standalone 4-hour tour suits most visitors; combine with Nagarkot sunset or Patan for a fuller day." },
                    { q: "Is there an entrance fee for Bhaktapur Durbar Square?", a: "Yes, a separate fee applies for foreign visitors, often higher than at other Durbar Squares." },
                    { q: "How far is Bhaktapur from Kathmandu?", a: "About a 30-45 minute drive, making it an easy half-day or full-day trip." },
                    { q: "Can Bhaktapur be combined with other sites?", a: "Yes, Patan and Nagarkot are the most common combinations." }
                ],
                jsonLd: {
                    "@context": "https://schema.org",
                    "@type": "FAQPage",
                    "mainEntity": [
                        { "@type": "Question", "name": "What is the best Bhaktapur tour from Kathmandu?", "acceptedAnswer": { "@type": "Answer", "text": "A standalone 4-hour tour suits most visitors; combine with Nagarkot sunset or Patan for a fuller day." } },
                        { "@type": "Question", "name": "Is there an entrance fee for Bhaktapur Durbar Square?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, a separate fee applies for foreign visitors, often higher than at other Durbar Squares." } },
                        { "@type": "Question", "name": "How far is Bhaktapur from Kathmandu?", "acceptedAnswer": { "@type": "Answer", "text": "About a 30-45 minute drive, making it an easy half-day or full-day trip." } },
                        { "@type": "Question", "name": "Can Bhaktapur be combined with other sites?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, Patan and Nagarkot are the most common combinations." } }
                    ]
                },
            };
        case "best-patan-durbar-square-tour-kathmandu":
            return {
                title: "Which Is the Best Patan Durbar Square Tour from Kathmandu?",
                seoTitle: "Best Patan Durbar Square Tour 2026 | Honest Comparison",
                description: "Compare real Patan tours from Kathmandu — from a $29 heritage walking tour with astrology and stories to a Buddhist circuit tour and a heritage pond boating experience.",
                heroImage: "https://res.cloudinary.com/dx2fxyaft/image/upload/v1786434365/tours/kathmandu/tours/kathmandu_1786434365409_0.jpg",
                sections: [
                    {
                        title: "The Short Answer",
                        content: "Patan (Lalitpur) is known for its concentration of intricate metal and stone craftsmanship, and its Durbar Square is often considered the most architecturally dense of the valley's three royal squares. A heritage walking tour covering the square's temples and courtyards is the standard way to see it.",
                        tourCard: { slug: "patan-durbar-square-walking-tour", title: "Patan Heritage Walking Tour: Astrology & Stories", description: "A heritage walking tour of Patan with storytelling and astrology themes.", price: "From $29", duration: "4 hours", image: "https://res.cloudinary.com/dx2fxyaft/image/upload/v1786434365/tours/kathmandu/tours/kathmandu_1786434365409_0.jpg" },
                    },
                    {
                        title: "Cheapest: Heritage Walking Tour",
                        content: "At $29, this is the lowest-priced way to explore Patan's Durbar Square with a guide.",
                        tourCard: { slug: "patan-durbar-square-walking-tour", title: "Patan Heritage Walking Tour: Astrology & Stories", description: "The budget-friendly Patan heritage walk.", price: "From $29", duration: "4 hours", image: "https://res.cloudinary.com/dx2fxyaft/image/upload/v1786434365/tours/kathmandu/tours/kathmandu_1786434365409_0.jpg" },
                    },
                    {
                        title: "Best for Buddhist Heritage: Buddhist Circuit Tour",
                        content: "This focuses specifically on Patan's Buddhist sites and monasteries rather than the square's Hindu temples, a different angle on the same city.",
                        tourCard: { slug: "kathmandu-patan-buddhist-circuit-tour-with-pickup", title: "Kathmandu: Patan Buddhist Circuit Tour with Pickup", description: "A tour focused on Patan's Buddhist heritage sites.", price: "From $93", duration: "4 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/be4b15450c08b168241d547331c283b23ddd223db832e62f7490271a66eb2b60.jpg" },
                    },
                    {
                        title: "Best for a Unique Experience: Bahals, Museum & Pond Boating",
                        content: "This adds a boating experience on a heritage pond to the usual museum and courtyard (bahal) visits, a genuinely different activity from the standard walking tour.",
                        tourCard: { slug: "kathmandu-patan-bahals-tour-museum-heritage-pond", title: "Kathmandu: Patan Bahals Tour, Museum & Heritage Pond Boating", description: "Patan's courtyards and museum paired with pond boating.", price: "From $95", duration: "4 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/7d645b018b6582475fe3512819349a6cbc047aa45d3e32b10e2d9d51732a34a3.jpg" },
                    },
                    {
                        title: "Best for Hands-On Culture: Thangka Painting Class",
                        content: "Rather than sightseeing alone, this pairs a Thangka painting class with a local artist, letting you take home a hands-on cultural experience from Patan.",
                        tourCard: { slug: "thangka-painting-class-with-local-artist-in-patan", title: "Thangka Painting Class with Local Artist in Patan", description: "A hands-on Thangka painting class in Patan.", price: "From $76", duration: "4 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/955acd5b4f0b82e7f6451221cc699bafb695489cd845705bdc05c59b2452b5c8.jpg" },
                    },
                    {
                        title: "Practical Tips",
                        content: "Patan's Durbar Square has a dedicated museum inside the old royal palace that's worth the extra entrance fee for its bronze and metalwork collection. The city is a short taxi ride from central Kathmandu, making it easy to combine with a Bhaktapur day trip.",
                    }
                ],
                faqs: [
                    { q: "What is the best Patan Durbar Square tour?", a: "A heritage walking tour suits most visitors; add a Thangka painting class for a hands-on cultural experience." },
                    { q: "What is Patan known for?", a: "Intricate metal and stone craftsmanship, and one of the valley's three historic royal Durbar Squares." },
                    { q: "Is the Patan Museum worth visiting?", a: "Yes, it holds a notable bronze and metalwork collection inside the old royal palace." },
                    { q: "How far is Patan from central Kathmandu?", a: "A short taxi ride, making it easy to combine with other valley day trips." }
                ],
                jsonLd: {
                    "@context": "https://schema.org",
                    "@type": "FAQPage",
                    "mainEntity": [
                        { "@type": "Question", "name": "What is the best Patan Durbar Square tour?", "acceptedAnswer": { "@type": "Answer", "text": "A heritage walking tour suits most visitors; add a Thangka painting class for a hands-on cultural experience." } },
                        { "@type": "Question", "name": "What is Patan known for?", "acceptedAnswer": { "@type": "Answer", "text": "Intricate metal and stone craftsmanship, and one of the valley's three historic royal Durbar Squares." } },
                        { "@type": "Question", "name": "Is the Patan Museum worth visiting?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, it holds a notable bronze and metalwork collection inside the old royal palace." } },
                        { "@type": "Question", "name": "How far is Patan from central Kathmandu?", "acceptedAnswer": { "@type": "Answer", "text": "A short taxi ride, making it easy to combine with other valley day trips." } }
                    ]
                },
            };
        case "best-nagarkot-sunrise-tour-kathmandu":
            return {
                title: "Which Is the Best Nagarkot Sunrise Tour from Kathmandu?",
                seoTitle: "Best Nagarkot Sunrise Tour Kathmandu 2026 | Honest Comparison",
                description: "Compare real Nagarkot sunrise tours from Kathmandu — from a $58 standard sunrise trip to combos with Himalayan views and a Changunarayan temple hike.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/64c20c5d1b8f3.jpeg",
                sections: [
                    {
                        title: "The Short Answer",
                        content: "Nagarkot is one of the best viewpoints near Kathmandu for Himalayan sunrise views on a clear day, sometimes including distant views of Everest. A standard sunrise tour with an early departure and a local guide is the most common way to see it.",
                        tourCard: { slug: "kathmandu-nagarkot-sunrise-tour-with-local-guide", title: "Kathmandu: Nagarkot Sunrise Tour with Local guide", description: "A standard early-morning sunrise tour to Nagarkot.", price: "From $58", duration: "3.5 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/8af4d57b9315cf66ca8cb9720da97eba3c377f5b1a97dbc52e859378eb4c16d9.jpg" },
                    },
                    {
                        title: "Cheapest: Standard Sunrise Tour",
                        content: "At $58, this covers the core Nagarkot sunrise experience with a local guide at the lowest price among these options.",
                        tourCard: { slug: "kathmandu-nagarkot-sunrise-tour-with-local-guide", title: "Kathmandu: Nagarkot Sunrise Tour with Local guide", description: "The budget-friendly Nagarkot sunrise tour.", price: "From $58", duration: "3.5 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/8af4d57b9315cf66ca8cb9720da97eba3c377f5b1a97dbc52e859378eb4c16d9.jpg" },
                    },
                    {
                        title: "Best for Mountain Views: Mt. Everest Himalayas View Tour",
                        content: "This explicitly frames the trip around spotting Everest and other Himalayan peaks from Nagarkot's viewpoint, weather permitting.",
                        tourCard: { slug: "kathmandu-nagarkot-sunrise-mt-everest-himalayas", title: "Kathmandu: Nagarkot Sunrise, Mt. Everest Himalayas View Tour", description: "A sunrise tour focused on Himalayan and Everest views.", price: "From $71", duration: "4 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/64c20c5d1b8f3.jpeg" },
                    },
                    {
                        title: "Best Combined Trip: + Hike & Changunarayan Visit",
                        content: "This adds a hike and a stop at Changunarayan, one of the valley's oldest temples, extending the sunrise trip into a fuller morning outing.",
                        tourCard: { slug: "from-kathmandu-nagarkot-sunrise-hike", title: "From Kathmandu: Nagarkot Sunrise, Hike & Changunarayan Visit", description: "Nagarkot sunrise combined with a hike and Changunarayan temple.", price: "From $65", duration: "7 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/caf45969853a68759801157c044b89311a2a68119b248d13ed742777ab8e7a8e.jpg" },
                    },
                    {
                        title: "Best for a Longer Day: Himalayas Tour with Changu Hike",
                        content: "A longer version of the hike-and-temple combo, giving more time at each stop rather than a quick morning trip.",
                        tourCard: { slug: "kathmandu-nagarkot-sunrise-himalayas-tour-with", title: "Kathmandu: Nagarkot Sunrise Himalayas Tour with Changu Hike", description: "An extended version of the sunrise, hike, and temple combo.", price: "From $73", duration: "8 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/8e99b62ad910c0953478e0d4095c1810df5c19838cf7858815bc4670b8f0ee9c.jpg" },
                    },
                    {
                        title: "Best for History: Sunrise + Changunarayan's Oldest Temple",
                        content: "This frames the hike specifically around reaching Changunarayan, regarded as one of the oldest temples in the Kathmandu Valley.",
                        tourCard: { slug: "nagarkot-sunrise-hike-to-changunarayan-visit", title: "Nagarkot Sunrise & Hike to Changunarayan Visit Oldest Temple", description: "A sunrise hike ending at the historic Changunarayan temple.", price: "From $80", duration: "6 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/5557900b521464a63822e1b51844e8cb400d59ed6baa8c9e196651d51192a561.jpg" },
                    },
                    {
                        title: "Practical Tips",
                        content: "Sunrise viewing depends heavily on clear weather, especially in the Himalayan foothills where cloud cover is common outside the dry winter season (roughly October to March). Tours depart very early, often around 4-5am, to reach the viewpoint before sunrise.",
                    }
                ],
                faqs: [
                    { q: "What is the best Nagarkot sunrise tour from Kathmandu?", a: "A standard sunrise tour suits most visitors; add the Changunarayan hike for a fuller morning." },
                    { q: "Can you see Everest from Nagarkot?", a: "On a clear day, yes, though visibility depends heavily on weather and season." },
                    { q: "What time do Nagarkot sunrise tours depart?", a: "Typically around 4-5am to reach the viewpoint before sunrise." },
                    { q: "What is the best season for Nagarkot sunrise views?", a: "Roughly October to March, the dry season with clearer skies." }
                ],
                jsonLd: {
                    "@context": "https://schema.org",
                    "@type": "FAQPage",
                    "mainEntity": [
                        { "@type": "Question", "name": "What is the best Nagarkot sunrise tour from Kathmandu?", "acceptedAnswer": { "@type": "Answer", "text": "A standard sunrise tour suits most visitors; add the Changunarayan hike for a fuller morning." } },
                        { "@type": "Question", "name": "Can you see Everest from Nagarkot?", "acceptedAnswer": { "@type": "Answer", "text": "On a clear day, yes, though visibility depends heavily on weather and season." } },
                        { "@type": "Question", "name": "What time do Nagarkot sunrise tours depart?", "acceptedAnswer": { "@type": "Answer", "text": "Typically around 4-5am to reach the viewpoint before sunrise." } },
                        { "@type": "Question", "name": "What is the best season for Nagarkot sunrise views?", "acceptedAnswer": { "@type": "Answer", "text": "Roughly October to March, the dry season with clearer skies." } }
                    ]
                },
            };
        case "best-chitwan-jungle-safari-tour-kathmandu":
            return {
                title: "Which Is the Best Chitwan Jungle Safari Tour from Kathmandu?",
                seoTitle: "Best Chitwan Jungle Safari Tour Kathmandu 2026 | Honest Comparison",
                description: "Compare real Chitwan jungle safari packages from Kathmandu — from a $168 3-day group tour to a private 2-day trip and a 1-night safari with transfers.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/a17dad5cfe6f4de9344bc6b5090860e8f14f7db41f9028767612dff4cb36a5c4.jpeg",
                sections: [
                    {
                        title: "The Short Answer",
                        content: "Chitwan National Park is Nepal's premier wildlife destination, known for one-horned rhinos, and sometimes tigers and elephants, seen via jeep safari, canoe rides, and village walks. A multi-day package including transport, lodging, and safari activities is standard since the park is several hours from Kathmandu.",
                        tourCard: { slug: "chitwan-jungle-safari-3-days-from-kathmandu-or", title: "Chitwan Jungle Safari 3 Days- From Kathmandu or Pokhara", description: "A standard 3-day jungle safari package including transport.", price: "From $168", duration: "3 days", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/a17dad5cfe6f4de9344bc6b5090860e8f14f7db41f9028767612dff4cb36a5c4.jpeg" },
                    },
                    {
                        title: "Cheapest: Standard 3-Day Safari",
                        content: "At $168, this is the lowest-priced multi-day safari package including lodging and jungle activities.",
                        tourCard: { slug: "chitwan-jungle-safari-3-days-from-kathmandu-or", title: "Chitwan Jungle Safari 3 Days- From Kathmandu or Pokhara", description: "The budget-friendly 3-day Chitwan safari.", price: "From $168", duration: "3 days", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/a17dad5cfe6f4de9344bc6b5090860e8f14f7db41f9028767612dff4cb36a5c4.jpeg" },
                    },
                    {
                        title: "Best for Shorter Trips: 1-Night Safari with Transfers",
                        content: "A more compact version for travellers with less time, still covering the core jungle activities with round-trip transfers included.",
                        tourCard: { slug: "chitwan-1-night-jungle-safari-with-transfers-from", title: "Chitwan: 1-Night Jungle Safari with Transfers from Kathmandu", description: "A compact 1-night safari with transfers included.", price: "From $202", duration: "2 days", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/1cae98c25b3b03cac81651969f0239011ecda14b3fc736a43a530378edeea13a.jpg" },
                    },
                    {
                        title: "Best for Private Groups: Private 2-Day Safari",
                        content: "This runs as a private trip rather than a shared group tour, giving more flexibility on pace for the safari activities.",
                        tourCard: { slug: "from-pokharakathmandu-private-2-day-chitwan", title: "From Pokhara/Kathmandu: Private 2-Day Chitwan Jungle Safari", description: "A private 2-day Chitwan jungle safari.", price: "From $186", duration: "2 days", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/f929744e6ba084eb2e9513899cd49413ded7570f96d6e6fbafc325ec1fdbbf5b.jpg" },
                    },
                    {
                        title: "Budget Transport Only: Tourist Bus Ticket",
                        content: "For travellers planning their own lodging and safari activities independently, this is just the tourist bus transfer to Chitwan.",
                        tourCard: { slug: "tourist-bus-ticket-kathmandu-to-chitwan", title: "Tourist Bus Ticket Kathmandu to Chitwan", description: "A standalone bus ticket to Chitwan for independent travellers.", price: "From $23", duration: "11 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/52b234cf57b9e9d3.jpeg" },
                    },
                    {
                        title: "Practical Tips",
                        content: "Rhino sightings are fairly reliable in Chitwan, but tiger sightings are rare and not guaranteed on any package. The overland journey from Kathmandu takes 5-7 hours by bus, so factor that into how many days you actually get at the park itself.",
                    }
                ],
                faqs: [
                    { q: "What is the best Chitwan jungle safari tour from Kathmandu?", a: "A standard 3-day package suits most visitors; go private for more flexibility on timing." },
                    { q: "Are rhino sightings guaranteed at Chitwan?", a: "Not guaranteed, but fairly reliable; tiger sightings are much rarer." },
                    { q: "How long does it take to get from Kathmandu to Chitwan?", a: "About 5-7 hours by bus overland." },
                    { q: "What's the cheapest way to visit Chitwan from Kathmandu?", a: "A standalone tourist bus ticket if you're arranging lodging and safari activities separately." }
                ],
                jsonLd: {
                    "@context": "https://schema.org",
                    "@type": "FAQPage",
                    "mainEntity": [
                        { "@type": "Question", "name": "What is the best Chitwan jungle safari tour from Kathmandu?", "acceptedAnswer": { "@type": "Answer", "text": "A standard 3-day package suits most visitors; go private for more flexibility on timing." } },
                        { "@type": "Question", "name": "Are rhino sightings guaranteed at Chitwan?", "acceptedAnswer": { "@type": "Answer", "text": "Not guaranteed, but fairly reliable; tiger sightings are much rarer." } },
                        { "@type": "Question", "name": "How long does it take to get from Kathmandu to Chitwan?", "acceptedAnswer": { "@type": "Answer", "text": "About 5-7 hours by bus overland." } },
                        { "@type": "Question", "name": "What's the cheapest way to visit Chitwan from Kathmandu?", "acceptedAnswer": { "@type": "Answer", "text": "A standalone tourist bus ticket if you're arranging lodging and safari activities separately." } }
                    ]
                },
            };
        case "best-paragliding-tour-kathmandu":
            return {
                title: "Which Is the Best Paragliding Tour in Kathmandu?",
                seoTitle: "Best Paragliding Tour Kathmandu 2026 | Honest Comparison",
                description: "Compare real tandem paragliding tours from Kathmandu — from a $110 Chandragiri flight to valley-view flights with hotel transfers and a combo with the Monkey Temple and cable car.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/db39b42e558d5039fd4064131d3285671db6c09d0b25b429df1ee5d55e71c416.jpeg",
                sections: [
                    {
                        title: "The Short Answer",
                        content: "Paragliding near Kathmandu typically launches from Chandragiri Hill, giving views over the Kathmandu Valley rather than the high-Himalaya views associated with Pokhara's paragliding. A standard tandem flight with a certified pilot is the default option.",
                        tourCard: { slug: "paragliding-at-chandragiri-guided-tour", title: "Kathmandu: Tandem Paragliding with Valley Views", description: "A standard tandem paragliding flight over Kathmandu Valley.", price: "From $110", duration: "4 hours", image: "https://res.cloudinary.com/dx2fxyaft/image/upload/v1781508597/tours/kathmandu/tours/kathmandu_1781508596172_0.jpg" },
                    },
                    {
                        title: "Cheapest: Valley Paragliding with Transfer",
                        content: "This includes hotel transfer at the lowest price point among the options here.",
                        tourCard: { slug: "kathmandu-valley-paragliding-experience-with", title: "Kathmandu Valley: Paragliding Experience with Transfer", description: "A paragliding flight with hotel transfer included.", price: "From $142", duration: "2 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/0f98d0c557857d4ce65e1d5c3cdc5652b3fb197614f91f2550f02c3b8bbd4d78.jpeg" },
                    },
                    {
                        title: "Most Popular: Tandem Paragliding with Valley Views",
                        content: "The standard tandem flight option, giving sweeping views over the Kathmandu Valley from Chandragiri.",
                        tourCard: { slug: "kathmandu-tandem-paragliding-with-valley-views", title: "Kathmandu: Tandem Paragliding with Valley Views", description: "The most commonly booked tandem flight.", price: "From $159", duration: "4 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/db39b42e558d5039fd4064131d3285671db6c09d0b25b429df1ee5d55e71c416.jpeg" },
                    },
                    {
                        title: "Best for a Quick Flight: Himalayan Views & Hotel Transfers",
                        content: "A shorter flight window for travellers who want the experience without dedicating a half-day to it.",
                        tourCard: { slug: "kathmandu-paragliding-himalayan-views-hotel", title: "Kathmandu: Paragliding, Himalayan Views & Hotel Transfers", description: "A shorter paragliding flight with hotel transfers.", price: "From $182", duration: "30 minutes", image: "" },
                    },
                    {
                        title: "Best for a Fuller Day: Chandragiri to Chitlang Flight",
                        content: "This extends the flight route toward Chitlang village, covering more ground than the standard Chandragiri loop.",
                        tourCard: { slug: "kathmanduchandragiri-himalayan-paragliding-to", title: "Kathmandu/Chandragiri: Himalayan Paragliding to Chitlang", description: "An extended paragliding route toward Chitlang village.", price: "From $224", duration: "5 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/07767d6d5cfbee88ae7c3ec55026bcd32cfb71bc79f6ed31bdeefa280c2769b0.jpg" },
                    },
                    {
                        title: "Practical Tips",
                        content: "Paragliding is weather-dependent and can be cancelled or rescheduled on short notice due to wind conditions, so avoid booking it for your last day in Kathmandu. No prior experience is needed since you fly tandem with a certified pilot in control.",
                    }
                ],
                faqs: [
                    { q: "What is the best paragliding tour in Kathmandu?", a: "A standard tandem flight from Chandragiri suits most visitors; add transfers for convenience." },
                    { q: "Do I need experience to paraglide in Kathmandu?", a: "No, tandem flights are flown with a certified pilot in control." },
                    { q: "Can weather cancel a paragliding flight?", a: "Yes, wind conditions can cause cancellations or rescheduling on short notice." },
                    { q: "Where does Kathmandu paragliding launch from?", a: "Most flights launch from Chandragiri Hill, giving views over the Kathmandu Valley." }
                ],
                jsonLd: {
                    "@context": "https://schema.org",
                    "@type": "FAQPage",
                    "mainEntity": [
                        { "@type": "Question", "name": "What is the best paragliding tour in Kathmandu?", "acceptedAnswer": { "@type": "Answer", "text": "A standard tandem flight from Chandragiri suits most visitors; add transfers for convenience." } },
                        { "@type": "Question", "name": "Do I need experience to paraglide in Kathmandu?", "acceptedAnswer": { "@type": "Answer", "text": "No, tandem flights are flown with a certified pilot in control." } },
                        { "@type": "Question", "name": "Can weather cancel a paragliding flight?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, wind conditions can cause cancellations or rescheduling on short notice." } },
                        { "@type": "Question", "name": "Where does Kathmandu paragliding launch from?", "acceptedAnswer": { "@type": "Answer", "text": "Most flights launch from Chandragiri Hill, giving views over the Kathmandu Valley." } }
                    ]
                },
            };
        case "best-river-rafting-tour-kathmandu":
            return {
                title: "Which Is the Best River Rafting Tour from Kathmandu?",
                seoTitle: "Best River Rafting Tour Kathmandu 2026 | Honest Comparison",
                description: "Compare real river rafting day trips from Kathmandu — from a $71 Trisuli River trip with lunch to a beginner-friendly adventure and Bhotekoshi's more intense rapids.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/e29023b91ff7e708321e64a7c9a5705600d3f0e0b96b7f3ec58eab1d869e088e.jpg",
                sections: [
                    {
                        title: "The Short Answer",
                        content: "The Trisuli River is the standard, most accessible rafting destination near Kathmandu, with grade 2-3 rapids suitable for most skill levels, while the Bhotekoshi River offers a more intense ride for experienced rafters. A Trisuli day trip with lunch is the most common choice.",
                        tourCard: { slug: "kathmandu-trisuli-river-rafting-day-trip-with", title: "Kathmandu: Trisuli River Rafting Day Trip with Lunch", description: "A standard day trip rafting the Trisuli River with lunch.", price: "From $71", duration: "7 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/e29023b91ff7e708321e64a7c9a5705600d3f0e0b96b7f3ec58eab1d869e088e.jpg" },
                    },
                    {
                        title: "Cheapest: Trisuli Day Trip with Lunch",
                        content: "At $71, this is the lowest-priced rafting day trip, covering the Trisuli's grade 2-3 rapids with lunch included.",
                        tourCard: { slug: "kathmandu-trisuli-river-rafting-day-trip-with", title: "Kathmandu: Trisuli River Rafting Day Trip with Lunch", description: "The budget-friendly Trisuli rafting day trip.", price: "From $71", duration: "7 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/e29023b91ff7e708321e64a7c9a5705600d3f0e0b96b7f3ec58eab1d869e088e.jpg" },
                    },
                    {
                        title: "Best for Beginners: Beginner-Friendly Rafting Adventure",
                        content: "This is explicitly positioned for first-time rafters, with gentler sections and more guidance than a standard trip.",
                        tourCard: { slug: "beginner-friendly-rafting-adventure-on-the", title: "Beginner-Friendly Rafting Adventure on the Trishuli River", description: "A rafting trip designed for first-timers.", price: "From $115", duration: "1 day", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/a8b082703b95dd3b31cf0f1d60e77ebecdc2c75f9ca499f1e047f324bdb00514.jpg" },
                    },
                    {
                        title: "Best for Comfort: + Private Car",
                        content: "This includes private car transport rather than a shared vehicle, a worthwhile upgrade if you'd rather not share the ride with a larger group.",
                        tourCard: { slug: "kathmandu-trishuli-river-rafting-with-lunch-by", title: "Kathmandu: Trishuli River Rafting with Lunch by Private Car", description: "Trisuli rafting with private car transport and lunch.", price: "From $233", duration: "1 day", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/38486c689e857b5769280ebed328aaa477206c9d5c947d3c84ff47456ff0425e.jpg" },
                    },
                    {
                        title: "Best for Experienced Rafters: Bhotekoshi River Rafting",
                        content: "The Bhotekoshi has more technical, intense rapids than the Trisuli, making it the pick for rafters who want a bigger adrenaline hit.",
                        tourCard: { slug: "kathmandu-bhotekoshi-river-rafting-day-trip-with", title: "Kathmandu: Bhotekoshi River Rafting Day Trip with Meals", description: "A more intense rafting day trip on the Bhotekoshi River.", price: "From $234", duration: "6 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/0ed52e9fbc5e14461790c6d11d86ba9aa496ce4cf81cf08fa44c337b73f920b9.jpg" },
                    },
                    {
                        title: "Practical Tips",
                        content: "Rafting season runs roughly September to early December and March to May, outside the monsoon when rivers can be too high or dangerous. All trips include safety gear and a trained guide, but check whether your trip includes a change of clothes or towel for after.",
                    }
                ],
                faqs: [
                    { q: "What is the best river rafting tour from Kathmandu?", a: "A standard Trisuli day trip suits most visitors; go for Bhotekoshi if you want more intense rapids." },
                    { q: "Is Trisuli River rafting suitable for beginners?", a: "Yes, it has grade 2-3 rapids suitable for most skill levels, including dedicated beginner-friendly trips." },
                    { q: "What's the difference between Trisuli and Bhotekoshi rafting?", a: "Trisuli is gentler and more accessible; Bhotekoshi has more technical, intense rapids." },
                    { q: "When is the best season for rafting near Kathmandu?", a: "Roughly September to early December and March to May, outside the monsoon." }
                ],
                jsonLd: {
                    "@context": "https://schema.org",
                    "@type": "FAQPage",
                    "mainEntity": [
                        { "@type": "Question", "name": "What is the best river rafting tour from Kathmandu?", "acceptedAnswer": { "@type": "Answer", "text": "A standard Trisuli day trip suits most visitors; go for Bhotekoshi if you want more intense rapids." } },
                        { "@type": "Question", "name": "Is Trisuli River rafting suitable for beginners?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, it has grade 2-3 rapids suitable for most skill levels, including dedicated beginner-friendly trips." } },
                        { "@type": "Question", "name": "What's the difference between Trisuli and Bhotekoshi rafting?", "acceptedAnswer": { "@type": "Answer", "text": "Trisuli is gentler and more accessible; Bhotekoshi has more technical, intense rapids." } },
                        { "@type": "Question", "name": "When is the best season for rafting near Kathmandu?", "acceptedAnswer": { "@type": "Answer", "text": "Roughly September to early December and March to May, outside the monsoon." } }
                    ]
                },
            };
        case "best-annapurna-base-camp-trek-kathmandu":
            return {
                title: "Which Is the Best Annapurna Base Camp Trek from Kathmandu?",
                seoTitle: "Best Annapurna Base Camp Trek Kathmandu 2026 | Honest Comparison",
                description: "Compare real Annapurna Base Camp trek itineraries bookable from Kathmandu — from a 5-day standard trek to a 7-day version via Poon Hill with permits included.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/25294734c644805fdce9b63ee7c775da1257335b32a55e7ae334bf4afcbf10d4.jpg",
                sections: [
                    {
                        title: "The Short Answer",
                        content: "Annapurna Base Camp treks actually start and end from Pokhara, but are commonly booked and bundled from Kathmandu with transport included. A standard 5-day trek is the most common length, with longer 7-day versions adding the Poon Hill sunrise viewpoint.",
                        tourCard: { slug: "from-kathmandu-7-day-annapurna-base-camp-trek", title: "From Kathmandu: 7-Day Annapurna Base Camp Trek with Permits", description: "A 7-day ABC trek with permits included, bookable from Kathmandu.", price: "From $98", duration: "7 days", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/25294734c644805fdce9b63ee7c775da1257335b32a55e7ae334bf4afcbf10d4.jpg" },
                    },
                    {
                        title: "Cheapest: 7-Day Trek with Permits",
                        content: "At $98, this is the lowest-priced option here, bundling permits into the price for a 7-day itinerary.",
                        tourCard: { slug: "from-kathmandu-7-day-annapurna-base-camp-trek", title: "From Kathmandu: 7-Day Annapurna Base Camp Trek with Permits", description: "The budget-friendly 7-day ABC trek.", price: "From $98", duration: "7 days", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/25294734c644805fdce9b63ee7c775da1257335b32a55e7ae334bf4afcbf10d4.jpg" },
                    },
                    {
                        title: "Best Standard Length: 5-Day Trek",
                        content: "The most common trek length, reaching base camp and back without the extra Poon Hill detour.",
                        tourCard: { slug: "from-pokharakathmandu-5-day-trek-to-annapurna", title: "From Pokhara/Kathmandu: 5-Day Trek to Annapurna Base Camp", description: "A standard 5-day Annapurna Base Camp trek.", price: "From $104", duration: "5 days", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/9bf0e54017eb56f4ece1d0d4d5562980bb3c1d6700cecd80a9bc03c78c57613c.jpg" },
                    },
                    {
                        title: "Best for Limited Time: Easy 5-Day Trek with 1 Flight",
                        content: "This version uses a short flight to cut down walking time, good for trekkers with limited days who still want to reach base camp.",
                        tourCard: { slug: "kathmandu-easy-5-day-annapurna-base-camp-trek", title: "Kathmandu: Easy 5-Day Annapurna Base Camp Trek with 1 Flight", description: "A 5-day trek shortened with one internal flight.", price: "From $156", duration: "5 days", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/fdeef8764c0c79b8f9e50ffb8f4a459f81c5cf70459c56cafe4970610932f8fa.jpg" },
                    },
                    {
                        title: "Best All-Inclusive: 5-Day ABC Trek",
                        content: "A fuller-service 5-day package bundling more inclusions than the base-level options.",
                        tourCard: { slug: "kathmandupokhara-5-day-annapurna-base-camp-abc", title: "Kathmandu/Pokhara: 5-Day Annapurna Base Camp (ABC) Trek", description: "An all-inclusive 5-day ABC trek.", price: "From $336", duration: "5 days", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/531a3a8b5a2f8aa4be9ad9faa0466ccaf549f831a945b01db5933a4280fcb36f.jpg" },
                    },
                    {
                        title: "Practical Tips",
                        content: "ABC sits at about 4,130m, lower than Everest Base Camp, making altitude sickness risk somewhat lower but still real — don't skip acclimatization just because the trek is shorter. The best trekking seasons are spring (March-May) and autumn (September-November) for clear mountain views.",
                    }
                ],
                faqs: [
                    { q: "What is the best Annapurna Base Camp trek from Kathmandu?", a: "A standard 5-day trek suits most trekkers; add Poon Hill for sunrise views on a 7-day version." },
                    { q: "How high is Annapurna Base Camp?", a: "About 4,130 meters, lower than Everest Base Camp." },
                    { q: "Does the Annapurna Base Camp trek start from Kathmandu or Pokhara?", a: "It actually starts from Pokhara, though many packages bundle transport from Kathmandu." },
                    { q: "What's the best season for the Annapurna Base Camp trek?", a: "Spring (March-May) and autumn (September-November) for clear mountain views." }
                ],
                jsonLd: {
                    "@context": "https://schema.org",
                    "@type": "FAQPage",
                    "mainEntity": [
                        { "@type": "Question", "name": "What is the best Annapurna Base Camp trek from Kathmandu?", "acceptedAnswer": { "@type": "Answer", "text": "A standard 5-day trek suits most trekkers; add Poon Hill for sunrise views on a 7-day version." } },
                        { "@type": "Question", "name": "How high is Annapurna Base Camp?", "acceptedAnswer": { "@type": "Answer", "text": "About 4,130 meters, lower than Everest Base Camp." } },
                        { "@type": "Question", "name": "Does the Annapurna Base Camp trek start from Kathmandu or Pokhara?", "acceptedAnswer": { "@type": "Answer", "text": "It actually starts from Pokhara, though many packages bundle transport from Kathmandu." } },
                        { "@type": "Question", "name": "What's the best season for the Annapurna Base Camp trek?", "acceptedAnswer": { "@type": "Answer", "text": "Spring (March-May) and autumn (September-November) for clear mountain views." } }
                    ]
                },
            };
        case "best-langtang-valley-trek-kathmandu":
            return {
                title: "Which Is the Best Langtang Valley Trek from Kathmandu?",
                seoTitle: "Best Langtang Valley Trek Kathmandu 2026 | Honest Comparison",
                description: "Compare real Langtang Valley trek itineraries from Kathmandu — from a 5-day guided trek to an 8-day and 10-day version with more acclimatization time.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/7b68e4227428100e9e5a7e5ba8085ab2c80da722ecd1f9dd47b1f55046a2bbd3.jpeg",
                sections: [
                    {
                        title: "The Short Answer",
                        content: "Langtang Valley is the closest major trekking region to Kathmandu, reachable by road without an internal flight, making it a popular alternative to Everest or Annapurna treks for travellers with less time. A 5-6 day guided trek is the standard length.",
                        tourCard: { slug: "5-day-langtang-valley-trek-guide-transport-permit", title: "5-Day Langtang Valley Trek; Guide; Transport; Permit", description: "A standard 5-day Langtang trek with guide, transport, and permits.", price: "From $331", duration: "5 days", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/a6f52eedd9c8db0fea7c4c9f1c44c9fafa9b2b7f0f547f857af86dd1b9033c9a.jpg" },
                    },
                    {
                        title: "Cheapest: 5-Day Trek with Everything Included",
                        content: "At $331, this bundles guide, transport, and permits into one price for the shortest standard itinerary.",
                        tourCard: { slug: "5-day-langtang-valley-trek-guide-transport-permit", title: "5-Day Langtang Valley Trek; Guide; Transport; Permit", description: "The budget-friendly 5-day Langtang trek.", price: "From $331", duration: "5 days", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/a6f52eedd9c8db0fea7c4c9f1c44c9fafa9b2b7f0f547f857af86dd1b9033c9a.jpg" },
                    },
                    {
                        title: "Best for First-Timers: 6-Day Trek for First-Timers",
                        content: "This version is explicitly paced for trekkers without prior high-altitude experience, with a slightly longer schedule for acclimatization.",
                        tourCard: { slug: "from-kathmandu-6-day-langtang-trek-for-first", title: "From Kathmandu: 6-Day Langtang Trek for First-Timers", description: "A 6-day trek paced for first-time trekkers.", price: "From $449", duration: "6 days", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/a408d43f74f1f9495024e1a13fbbd8465390f26d71c1d439edbcb1241be339ed.jpg" },
                    },
                    {
                        title: "Best All-Inclusive: 6-Day Guided Trek",
                        content: "A fuller-service version of the standard 6-day itinerary, bundling more inclusions than the base trek.",
                        tourCard: { slug: "kathmandu-langtang-valley-6-day-all-inclusive", title: "Kathmandu: Langtang Valley 6-Day all inclusive Guided Trek", description: "An all-inclusive 6-day Langtang trek.", price: "From $416", duration: "6 days", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/7b68e4227428100e9e5a7e5ba8085ab2c80da722ecd1f9dd47b1f55046a2bbd3.jpeg" },
                    },
                    {
                        title: "Best for More Views: 8-Day Guided Trek",
                        content: "This extends the schedule to 8 days, giving more time at higher viewpoints and a less rushed pace than the 5-6 day versions.",
                        tourCard: { slug: "kathmandu-langtang-valley-trek-8-days-guided-trek", title: "Kathmandu: Langtang Valley Trek 8-Days Guided Trek", description: "An 8-day Langtang trek with more time at altitude.", price: "From $503", duration: "8 days", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/091f4770cbb6ba467c767931e8837fed9f4747cda8887b96c3074bb21c359c1d.jpeg" },
                    },
                    {
                        title: "Practical Tips",
                        content: "Langtang Valley was badly affected by the 2015 earthquake, and the trail passes through villages that have since been rebuilt — your trek directly supports the local economy's recovery. It's one of the few major trekking regions reachable without an internal flight, making it more weather-reliable than Everest or Lukla-dependent routes.",
                    }
                ],
                faqs: [
                    { q: "What is the best Langtang Valley trek from Kathmandu?", a: "A standard 5-6 day trek suits most trekkers; first-timers should pick a version explicitly paced for less experience." },
                    { q: "Is Langtang Valley trek good for beginners?", a: "Yes, several itineraries are specifically designed and paced for first-time trekkers." },
                    { q: "How do you get to the Langtang trek starting point?", a: "By road from Kathmandu, with no internal flight needed, unlike Everest or some Annapurna routes." },
                    { q: "How long does the Langtang Valley trek take?", a: "Most itineraries run 5-8 days, including acclimatization days." }
                ],
                jsonLd: {
                    "@context": "https://schema.org",
                    "@type": "FAQPage",
                    "mainEntity": [
                        { "@type": "Question", "name": "What is the best Langtang Valley trek from Kathmandu?", "acceptedAnswer": { "@type": "Answer", "text": "A standard 5-6 day trek suits most trekkers; first-timers should pick a version explicitly paced for less experience." } },
                        { "@type": "Question", "name": "Is Langtang Valley trek good for beginners?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, several itineraries are specifically designed and paced for first-time trekkers." } },
                        { "@type": "Question", "name": "How do you get to the Langtang trek starting point?", "acceptedAnswer": { "@type": "Answer", "text": "By road from Kathmandu, with no internal flight needed, unlike Everest or some Annapurna routes." } },
                        { "@type": "Question", "name": "How long does the Langtang Valley trek take?", "acceptedAnswer": { "@type": "Answer", "text": "Most itineraries run 5-8 days, including acclimatization days." } }
                    ]
                },
            };
        case "best-poon-hill-trek-kathmandu":
            return {
                title: "Which Is the Best Poon Hill Trek from Kathmandu?",
                seoTitle: "Best Poon Hill Trek Kathmandu 2026 | Honest Comparison",
                description: "Compare real Poon Hill trek itineraries bookable from Kathmandu — from a 4-day short trek to a 5-day Ghorepani Poon Hill trek and a 7-day version combined with Annapurna Base Camp.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/6bd505ae98cf9356380764bbdfaa3a39e50068070c0ac1f62bf67b68cf9dec3e.jpg",
                sections: [
                    {
                        title: "The Short Answer",
                        content: "Poon Hill is famous for its sunrise panorama of the Annapurna range and Dhaulagiri, and is one of the shortest, most accessible treks in the Annapurna region. A 4-5 day trek via Ghorepani is the standard version, with longer options combining it with Annapurna Base Camp.",
                        tourCard: { slug: "from-kathmandu-3-night-4-day-poon-hill-trek", title: "From Kathmandu : 3 Night 4 Day Poon Hill Trek", description: "A short 4-day Poon Hill trek, the most compact option.", price: "From $609", duration: "4 days", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/6bd505ae98cf9356380764bbdfaa3a39e50068070c0ac1f62bf67b68cf9dec3e.jpg" },
                    },
                    {
                        title: "Shortest Option: 4-Day Trek",
                        content: "At 4 days, this is the most compact version here for travellers with the least time to spare.",
                        tourCard: { slug: "from-kathmandu-3-night-4-day-poon-hill-trek", title: "From Kathmandu : 3 Night 4 Day Poon Hill Trek", description: "The shortest Poon Hill trek option.", price: "From $609", duration: "4 days", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/6bd505ae98cf9356380764bbdfaa3a39e50068070c0ac1f62bf67b68cf9dec3e.jpg" },
                    },
                    {
                        title: "Most Popular: Ghorepani Poon Hill Trek",
                        content: "The classic Ghorepani route to Poon Hill, the most commonly booked version of this trek.",
                        tourCard: { slug: "ghorepani-poon-hill-trek-5-days", title: "Ghorepani Poon Hill Trek – 5 Days", description: "The standard 5-day Ghorepani Poon Hill trek.", price: "From $1429", duration: "5 days", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/2998095f79cfef211ed17ad57e352dc0043da0946f1f6b666398194438b4e0c4.jpg" },
                    },
                    {
                        title: "Best for Culture: Sunrise and Gurung Culture Trek",
                        content: "This version adds a cultural focus on Gurung villages along the route, not just the sunrise viewpoint itself.",
                        tourCard: { slug: "kathmandu-poon-hill-sunrise-and-gurung-culture", title: "Kathmandu: Poon Hill Sunrise and Gurung Culture trek", description: "A Poon Hill trek with added focus on Gurung village culture.", price: "From $1411", duration: "7 days", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/5480d02c13d1d7091a883bcae943939e2203ada886093ed33c5561f428a8801b.jpg" },
                    },
                    {
                        title: "Best Combined Trek: + Annapurna Base Camp via Poon Hill",
                        content: "This combines the Poon Hill sunrise viewpoint with a full trek onward to Annapurna Base Camp, for trekkers who want both in one trip.",
                        tourCard: { slug: "from-kathmandu-7-day-annapurna-base-camp-trek-via", title: "From Kathmandu: 7-Day Annapurna Base Camp Trek via Poon Hill", description: "Poon Hill combined with a full Annapurna Base Camp trek.", price: "From $632", duration: "7 days", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/67e73ba425dc82459e99e0b4b6dacf5e6b052882641fd246e9b618484d82c681.jpg" },
                    },
                    {
                        title: "Practical Tips",
                        content: "The sunrise viewpoint at Poon Hill (3,210m) is a short, steep pre-dawn climb from Ghorepani village — most treks schedule this as an early-morning side trip rather than an overnight stay at the summit. This is considered one of the easier treks in the region, suitable for trekkers with moderate fitness and no prior high-altitude experience.",
                    }
                ],
                faqs: [
                    { q: "What is the best Poon Hill trek from Kathmandu?", a: "A standard 4-5 day Ghorepani route suits most trekkers; combine with Annapurna Base Camp for a longer trip." },
                    { q: "How difficult is the Poon Hill trek?", a: "One of the easier treks in the region, suitable for moderate fitness without prior high-altitude experience." },
                    { q: "What is special about Poon Hill?", a: "Its sunrise panorama of the Annapurna range and Dhaulagiri from a 3,210m viewpoint." },
                    { q: "Can Poon Hill be combined with Annapurna Base Camp?", a: "Yes, several 7-day itineraries combine both into one trek." }
                ],
                jsonLd: {
                    "@context": "https://schema.org",
                    "@type": "FAQPage",
                    "mainEntity": [
                        { "@type": "Question", "name": "What is the best Poon Hill trek from Kathmandu?", "acceptedAnswer": { "@type": "Answer", "text": "A standard 4-5 day Ghorepani route suits most trekkers; combine with Annapurna Base Camp for a longer trip." } },
                        { "@type": "Question", "name": "How difficult is the Poon Hill trek?", "acceptedAnswer": { "@type": "Answer", "text": "One of the easier treks in the region, suitable for moderate fitness without prior high-altitude experience." } },
                        { "@type": "Question", "name": "What is special about Poon Hill?", "acceptedAnswer": { "@type": "Answer", "text": "Its sunrise panorama of the Annapurna range and Dhaulagiri from a 3,210m viewpoint." } },
                        { "@type": "Question", "name": "Can Poon Hill be combined with Annapurna Base Camp?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, several 7-day itineraries combine both into one trek." } }
                    ]
                },
            };
        case "best-mustang-tour-kathmandu":
            return {
                title: "Which Is the Best Mustang Tour from Kathmandu?",
                seoTitle: "Best Mustang Tour Kathmandu 2026 | Honest Comparison",
                description: "Compare real Upper and Lower Mustang tours from Kathmandu — from a 5-day Lower Mustang trip to multi-day jeep tours and guided motorbike tours of Upper Mustang.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/23622b8b3e6372f535d330cbc6f5c09b4e90b98cdcd172faf7d051612b9d189a.jpg",
                sections: [
                    {
                        title: "The Short Answer",
                        content: "Mustang is a high-altitude desert region behind the Himalayas, split into the more accessible Lower Mustang and the restricted, permit-only Upper Mustang. A jeep tour is the most common way to cover its dramatic landscapes without a multi-day trek.",
                        tourCard: { slug: "from-kathmandu-mustang-jeep-tour-on-a-four", title: "From Kathmandu: Mustang Jeep Tour on a Four-Landscape Loop", description: "A jeep tour covering four distinct Mustang landscapes.", price: "From $1757", duration: "4 days", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/23622b8b3e6372f535d330cbc6f5c09b4e90b98cdcd172faf7d051612b9d189a.jpg" },
                    },
                    {
                        title: "Most Accessible: Lower Mustang Adventure Tour",
                        content: "Lower Mustang doesn't require the special permit Upper Mustang does, making this the easier, lower-cost entry point into the region.",
                        tourCard: { slug: "kathmandu-lower-mustang-adventure-tour-with-local", title: "Kathmandu: Lower Mustang Adventure Tour With Local Guide", description: "A guided tour of the more accessible Lower Mustang region.", price: "From $495", duration: "5 days", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/3fb0bdd4dec7f2ac6f0644c020035720b477170f1f509a7f8aa3d43fec6884c9.jpg" },
                    },
                    {
                        title: "Best for Adventure Riders: Upper Mustang Motorbike Tour",
                        content: "This covers Upper Mustang by guided motorbike rather than jeep or on foot, a genuinely different way to experience the region's terrain.",
                        tourCard: { slug: "kathmandu-9-day-upper-mustang-guided-motorbike", title: "Kathmandu: 9-Day Upper Mustang Guided Motorbike Tour", description: "A 9-day motorbike tour of Upper Mustang.", price: "From $624", duration: "10 days", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/58dac42f6a6d29062564f515b5997ecd806e870daf21db3c4577c40ef690a8f8.jpg" },
                    },
                    {
                        title: "Best for Scenery: Four-Landscape Jeep Loop",
                        content: "This jeep tour is built around covering four distinct landscapes within the Mustang region in one loop.",
                        tourCard: { slug: "from-kathmandu-mustang-jeep-tour-on-a-four", title: "From Kathmandu: Mustang Jeep Tour on a Four-Landscape Loop", description: "A jeep loop covering four distinct Mustang landscapes.", price: "From $1757", duration: "4 days", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/23622b8b3e6372f535d330cbc6f5c09b4e90b98cdcd172faf7d051612b9d189a.jpg" },
                    },
                    {
                        title: "Best for Full Upper Mustang Access: 7-Day Private Jeep Tour",
                        content: "This is a private jeep tour specifically into Upper Mustang, the restricted-permit region with its ancient walled capital, Lo Manthang.",
                        tourCard: { slug: "from-kathmandu-7-day-upper-mustang-private-jeep", title: "From Kathmandu: 7-Day Upper Mustang Private Jeep Tour", description: "A private 7-day jeep tour into Upper Mustang.", price: "From $2611", duration: "7 days", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/680a3136f26d6d4c8ffa26a661f3925da551df73e58a4c9a97daab08d172d19d.jpg" },
                    },
                    {
                        title: "Practical Tips",
                        content: "Upper Mustang requires a special restricted-area permit (separate from the standard Annapurna Conservation Area permit) that costs significantly more and is usually arranged by the tour operator. The region's high-desert landscape and limited rainfall make it accessible even during Nepal's monsoon season, when many other trekking regions are less favorable.",
                    }
                ],
                faqs: [
                    { q: "What is the best Mustang tour from Kathmandu?", a: "A Lower Mustang tour suits travellers without the special permit; Upper Mustang jeep or motorbike tours cover the restricted region." },
                    { q: "Do I need a special permit for Mustang?", a: "Upper Mustang requires a restricted-area permit; Lower Mustang does not." },
                    { q: "Can Mustang be visited during the monsoon?", a: "Yes, its high-desert landscape makes it more weather-reliable than many other trekking regions during monsoon." },
                    { q: "What is Lo Manthang?", a: "The ancient walled capital of the former Mustang kingdom, reached via Upper Mustang tours." }
                ],
                jsonLd: {
                    "@context": "https://schema.org",
                    "@type": "FAQPage",
                    "mainEntity": [
                        { "@type": "Question", "name": "What is the best Mustang tour from Kathmandu?", "acceptedAnswer": { "@type": "Answer", "text": "A Lower Mustang tour suits travellers without the special permit; Upper Mustang jeep or motorbike tours cover the restricted region." } },
                        { "@type": "Question", "name": "Do I need a special permit for Mustang?", "acceptedAnswer": { "@type": "Answer", "text": "Upper Mustang requires a restricted-area permit; Lower Mustang does not." } },
                        { "@type": "Question", "name": "Can Mustang be visited during the monsoon?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, its high-desert landscape makes it more weather-reliable than many other trekking regions during monsoon." } },
                        { "@type": "Question", "name": "What is Lo Manthang?", "acceptedAnswer": { "@type": "Answer", "text": "The ancient walled capital of the former Mustang kingdom, reached via Upper Mustang tours." } }
                    ]
                },
            };
        case "best-manaslu-circuit-trek-kathmandu":
            return {
                title: "Which Is the Best Manaslu Circuit Trek from Kathmandu?",
                seoTitle: "Best Manaslu Circuit Trek Kathmandu 2026 | Honest Comparison",
                description: "Compare real Manaslu Circuit trek itineraries from Kathmandu — from a 12-day trek to private and all-inclusive 13-14 day versions with a licensed guide.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/a1d425760ec341b996980ccf047f772e168c47ee487464d58d33a4161087ebfe.jpeg",
                sections: [
                    {
                        title: "The Short Answer",
                        content: "The Manaslu Circuit is a quieter, less-crowded alternative to Everest or Annapurna treks, circling the eighth-highest mountain in the world and requiring a restricted-area permit. Itineraries generally run 12-14 days with a licensed guide required by law.",
                        tourCard: { slug: "manaslu-ciruit-trek-manaslu-trek-12-days-from", title: "Manaslu Ciruit Trek: Manaslu Trek 12 Days from Kathmandu", description: "The shortest standard Manaslu Circuit itinerary.", price: "From $1671", duration: "12 days", image: "" },
                    },
                    {
                        title: "Shortest Option: 12-Day Trek",
                        content: "At 12 days, this is the most compact version of the full circuit among the options here.",
                        tourCard: { slug: "manaslu-ciruit-trek-manaslu-trek-12-days-from", title: "Manaslu Ciruit Trek: Manaslu Trek 12 Days from Kathmandu", description: "The shortest Manaslu Circuit trek option.", price: "From $1671", duration: "12 days", image: "" },
                    },
                    {
                        title: "Best Value Standard: 13-Day Licensed Guide Trek",
                        content: "A standard 13-day circuit with a licensed guide, the legally required format for this restricted region.",
                        tourCard: { slug: "manaslu-circuit-13-day-licensed-guide", title: "Manaslu Circuit : 13-Day Licensed Guide", description: "A 13-day trek with a legally required licensed guide.", price: "From $428", duration: "14 days", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/6bd2d9b56b795751c33e502e264ea4a4273d770a23973c4ce3d3d3f7c8d934f0.jpg" },
                    },
                    {
                        title: "Best Combined: + Base Camp Trek",
                        content: "This adds a Manaslu Base Camp extension to the standard circuit, for trekkers who want to get closer to the mountain itself.",
                        tourCard: { slug: "from-kathmandu-13-day-manaslu-circuit-and-base", title: "From Kathmandu: 13-Day Manaslu Circuit and Base Camp Trek", description: "The circuit extended with a Base Camp visit.", price: "From $702", duration: "13 days", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/a1d425760ec341b996980ccf047f772e168c47ee487464d58d33a4161087ebfe.jpeg" },
                    },
                    {
                        title: "Best for Private Groups: Private 13-Day Trek",
                        content: "This runs as a private trek rather than joining a group, useful for trekkers who want more flexibility on pace in this remote region.",
                        tourCard: { slug: "from-kathmandu-private-13-day-manaslu-circuit-trek", title: "From Kathmandu: Private 13-Day Manaslu Circuit Trek", description: "A private version of the 13-day Manaslu Circuit.", price: "From $1287", duration: "13 days", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/27361329e0d3ecf36aa712a573221a08175db08fd625bfa3861e1f5e614f31bc.jpg" },
                    },
                    {
                        title: "Best All-Inclusive: 14-Day Guided Trek",
                        content: "The longest, most fully bundled version, giving the most acclimatization time around the circuit's high pass.",
                        tourCard: { slug: "kathmandu-manaslu-circuit-trek-14-day-guided-tour", title: "Kathmandu: Manaslu Circuit Trek 14-Day Guided Tour", description: "A 14-day all-inclusive version of the circuit.", price: "From $1465", duration: "14 days", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/9e57811e63a0d331692e3e5ce39eb48aad90ccb859006bccaa9dc12d2acd689b.jpeg" },
                    },
                    {
                        title: "Practical Tips",
                        content: "A licensed guide is legally required for the Manaslu Circuit's restricted section, unlike many other Nepal treks where it's optional — factor this into any price comparison. The circuit crosses the Larkya La pass at over 5,100m, making this a serious high-altitude trek that needs proper acclimatization days.",
                    }
                ],
                faqs: [
                    { q: "What is the best Manaslu Circuit trek from Kathmandu?", a: "A standard 13-day trek with a licensed guide suits most trekkers; add the Base Camp extension for a closer mountain view." },
                    { q: "Is a guide required for the Manaslu Circuit?", a: "Yes, a licensed guide is legally required for this restricted-area trek." },
                    { q: "How difficult is the Manaslu Circuit trek?", a: "A serious high-altitude trek, crossing the Larkya La pass at over 5,100m." },
                    { q: "How long does the Manaslu Circuit trek take?", a: "Most itineraries run 12-14 days including acclimatization." }
                ],
                jsonLd: {
                    "@context": "https://schema.org",
                    "@type": "FAQPage",
                    "mainEntity": [
                        { "@type": "Question", "name": "What is the best Manaslu Circuit trek from Kathmandu?", "acceptedAnswer": { "@type": "Answer", "text": "A standard 13-day trek with a licensed guide suits most trekkers; add the Base Camp extension for a closer mountain view." } },
                        { "@type": "Question", "name": "Is a guide required for the Manaslu Circuit?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, a licensed guide is legally required for this restricted-area trek." } },
                        { "@type": "Question", "name": "How difficult is the Manaslu Circuit trek?", "acceptedAnswer": { "@type": "Answer", "text": "A serious high-altitude trek, crossing the Larkya La pass at over 5,100m." } },
                        { "@type": "Question", "name": "How long does the Manaslu Circuit trek take?", "acceptedAnswer": { "@type": "Answer", "text": "Most itineraries run 12-14 days including acclimatization." } }
                    ]
                },
            };
        case "best-nepali-cooking-class-kathmandu":
            return {
                title: "Which Is the Best Nepali Cooking Class in Kathmandu?",
                seoTitle: "Best Nepali Cooking Class Kathmandu 2026 | Honest Comparison",
                description: "Compare real Nepali cooking classes in Kathmandu — from a $20 Thamel class to a women-led class and a food-and-drink experience with tastings.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/7f584a32a9335f2fa8229c8d2b8462ac01f60371e1d3e426e7fbdeb188760df2.jpg",
                sections: [
                    {
                        title: "The Short Answer",
                        content: "Nepali cooking classes in Kathmandu typically teach momos (dumplings) and dal bhat, the country's staple meal, in small hands-on groups. A standard 3-hour class in Thamel is the most common, accessible option.",
                        tourCard: { slug: "thamel-cooking-food-tour", title: "Nepali Cooking Class", description: "A standard Nepali cooking class in Thamel.", price: "From $20", duration: "3 hours", image: "https://res.cloudinary.com/dx2fxyaft/image/upload/v1782454020/tours/kathmandu/tours/kathmandu_1782454020090_0.jpg" },
                    },
                    {
                        title: "Cheapest: Standard Thamel Class",
                        content: "At $20, this is the lowest-priced cooking class, teaching core Nepali dishes in a hands-on format.",
                        tourCard: { slug: "thamel-cooking-food-tour", title: "Nepali Cooking Class", description: "The budget-friendly Thamel cooking class.", price: "From $20", duration: "3 hours", image: "https://res.cloudinary.com/dx2fxyaft/image/upload/v1782454020/tours/kathmandu/tours/kathmandu_1782454020090_0.jpg" },
                    },
                    {
                        title: "Best for a Fuller Menu: Food and Drink Cooking Class",
                        content: "This expands beyond a single dish to cover a fuller Nepali meal along with traditional drinks.",
                        tourCard: { slug: "kathmandu-nepali-food-and-drink-cooking-class", title: "Kathmandu: Nepali Food and Drink Cooking Class", description: "A cooking class covering a fuller Nepali meal and drinks.", price: "From $27", duration: "3 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/a0763c4c65bf77b9fdc3331934910f4876aa4c23d0a842ac22575598fa3bc7d8.jpg" },
                    },
                    {
                        title: "Best for Authenticity: Local Women-Led Class",
                        content: "This is run by local women in a home-style setting, a genuinely different format from a tourist-oriented cooking studio.",
                        tourCard: { slug: "local-women-led-nepali-cooking-class", title: "Local Women Led Nepali Cooking Class", description: "A home-style cooking class led by local women.", price: "From $39", duration: "3 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/828562a370d3d753844592125435c6a1b62f50f4656cd1e4c10b4f8fc16038b6.jpg" },
                    },
                    {
                        title: "Best Overall Food Experience: With Tastings",
                        content: "This frames the class as a broader food experience, with tastings of multiple dishes rather than cooking just one meal.",
                        tourCard: { slug: "kathmandu-food-experience-nepali-cooking-class", title: "Kathmandu Food Experience: Nepali Cooking Class With Drinks", description: "A fuller food experience with cooking and tastings.", price: "From $40", duration: "1.5 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/7f584a32a9335f2fa8229c8d2b8462ac01f60371e1d3e426e7fbdeb188760df2.jpg" },
                    },
                    {
                        title: "Practical Tips",
                        content: "Most classes accommodate vegetarian preferences easily since dal bhat is naturally plant-based, but confirm with the specific operator if you have other dietary restrictions. These classes work well as a rainy-day activity or an evening addition to a day of sightseeing.",
                    }
                ],
                faqs: [
                    { q: "What is the best Nepali cooking class in Kathmandu?", a: "A standard Thamel class suits most visitors; go for a women-led class for a more authentic, home-style experience." },
                    { q: "What dishes do Nepali cooking classes typically teach?", a: "Momos (dumplings) and dal bhat, Nepal's staple meal, are the most common." },
                    { q: "Are Nepali cooking classes vegetarian-friendly?", a: "Yes, dal bhat is naturally plant-based, making most classes easy to adapt for vegetarians." },
                    { q: "How long does a Nepali cooking class take?", a: "Most run 1.5-3 hours." }
                ],
                jsonLd: {
                    "@context": "https://schema.org",
                    "@type": "FAQPage",
                    "mainEntity": [
                        { "@type": "Question", "name": "What is the best Nepali cooking class in Kathmandu?", "acceptedAnswer": { "@type": "Answer", "text": "A standard Thamel class suits most visitors; go for a women-led class for a more authentic, home-style experience." } },
                        { "@type": "Question", "name": "What dishes do Nepali cooking classes typically teach?", "acceptedAnswer": { "@type": "Answer", "text": "Momos (dumplings) and dal bhat, Nepal's staple meal, are the most common." } },
                        { "@type": "Question", "name": "Are Nepali cooking classes vegetarian-friendly?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, dal bhat is naturally plant-based, making most classes easy to adapt for vegetarians." } },
                        { "@type": "Question", "name": "How long does a Nepali cooking class take?", "acceptedAnswer": { "@type": "Answer", "text": "Most run 1.5-3 hours." } }
                    ]
                },
            };
        case "best-yoga-meditation-retreat-kathmandu":
            return {
                title: "Which Is the Best Yoga and Meditation Retreat in Kathmandu?",
                seoTitle: "Best Yoga Meditation Retreat Kathmandu 2026 | Honest Comparison",
                description: "Compare real yoga and meditation experiences in Kathmandu — from a $106 sound healing session to a multi-day Pharping meditation and yoga retreat.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/a40537b01dd06f71cae2562df25d88064a95ce10435d8c70c14fc19106ce55b0.jpeg",
                sections: [
                    {
                        title: "The Short Answer",
                        content: "Kathmandu's yoga and meditation offerings range from short single-session experiences combining yoga with Tibetan singing-bowl sound healing, to multi-day retreats outside the city in quieter settings like Pharping. A single combined yoga-and-meditation session is the most accessible starting point.",
                        tourCard: { slug: "kathmandu-yoga-meditation-and-sound-healing-with", title: "Kathmandu: Yoga, Meditation, and Sound Healing with Pickup", description: "A combined yoga, meditation, and sound healing session.", price: "From $146", duration: "3 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/a40537b01dd06f71cae2562df25d88064a95ce10435d8c70c14fc19106ce55b0.jpeg" },
                    },
                    {
                        title: "Cheapest: Singing Bowl Sound Healing with Yoga",
                        content: "At $106, this pairs a shorter yoga session with Tibetan singing-bowl sound healing, the lowest-priced option here.",
                        tourCard: { slug: "kathmandu-singing-bowl-sound-healing-session-with", title: "Kathmandu: Singing Bowl Sound Healing Session with Yoga", description: "A yoga session combined with singing bowl sound healing.", price: "From $106", duration: "1.5 hours", image: "" },
                    },
                    {
                        title: "Best Short Session: 1-Hour Yoga & Sound Healing",
                        content: "A compact format splitting the time evenly between a yoga session and a separate sound healing session.",
                        tourCard: { slug: "kathmandu-1-hour-yoga-1-hour-sound-healing-session", title: "Kathmandu: 1-Hour Yoga & 1-Hour Sound Healing Session", description: "A split session of yoga and sound healing.", price: "From $129", duration: "2 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/4d6c29d2f062faae0a10dff1e36d16d27cddf606528b9b51cf674ea2ab0237b1.jpg" },
                    },
                    {
                        title: "Best for Nature: Yoga & Meditation with Kakani Farm Visit",
                        content: "This takes the practice out of the city to Kakani, pairing yoga and meditation with a farm visit in a more rural, scenic setting.",
                        tourCard: { slug: "from-kathmandu-yoga-meditation-with-kakani-farm", title: "From Kathmandu: Yoga & Meditation with Kakani Farm Visit", description: "Yoga and meditation combined with a countryside farm visit.", price: "From $133", duration: "5 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/b1eebaec1398ec72182328416c600e7e1117c839962ec713c3acdcbbed1b6332.jpg" },
                    },
                    {
                        title: "Most Comprehensive: 3-Day Pharping Meditation and Yoga Retreat",
                        content: "The most immersive option here, a multi-day retreat in Pharping, a traditional meditation retreat town outside Kathmandu.",
                        tourCard: { slug: "kathmandu-3-day-pharping-meditation-and-yoga", title: "Kathmandu: 3-Day Pharping Meditation and Yoga Retreat", description: "A 3-day meditation and yoga retreat in Pharping.", price: "From $455", duration: "3 days", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/bdd9bdd98957ab4d9e4549e11dd77f000bd5eade551975259847d4ebc2204a7b.jpg" },
                    },
                    {
                        title: "Practical Tips",
                        content: "No prior yoga or meditation experience is needed for any of these sessions, which are generally designed for beginners and casual practitioners rather than advanced practice. Pharping, used for the multi-day retreat, is also home to several notable Tibetan Buddhist monasteries worth visiting alongside the retreat itself.",
                    }
                ],
                faqs: [
                    { q: "What is the best yoga and meditation experience in Kathmandu?", a: "A single combined yoga-and-meditation session suits most visitors; go for the Pharping retreat for a deeper, multi-day experience." },
                    { q: "Do I need prior yoga experience for these sessions?", a: "No, most are designed for beginners and casual practitioners." },
                    { q: "What is Pharping known for?", a: "A traditional meditation retreat town outside Kathmandu with several notable Tibetan Buddhist monasteries." },
                    { q: "What is included in a singing bowl sound healing session?", a: "A guided session using Tibetan singing bowls, often combined with a short yoga practice." }
                ],
                jsonLd: {
                    "@context": "https://schema.org",
                    "@type": "FAQPage",
                    "mainEntity": [
                        { "@type": "Question", "name": "What is the best yoga and meditation experience in Kathmandu?", "acceptedAnswer": { "@type": "Answer", "text": "A single combined yoga-and-meditation session suits most visitors; go for the Pharping retreat for a deeper, multi-day experience." } },
                        { "@type": "Question", "name": "Do I need prior yoga experience for these sessions?", "acceptedAnswer": { "@type": "Answer", "text": "No, most are designed for beginners and casual practitioners." } },
                        { "@type": "Question", "name": "What is Pharping known for?", "acceptedAnswer": { "@type": "Answer", "text": "A traditional meditation retreat town outside Kathmandu with several notable Tibetan Buddhist monasteries." } },
                        { "@type": "Question", "name": "What is included in a singing bowl sound healing session?", "acceptedAnswer": { "@type": "Answer", "text": "A guided session using Tibetan singing bowls, often combined with a short yoga practice." } }
                    ]
                },
            };
        case "best-chandragiri-cable-car-tour-kathmandu":
            return {
                title: "Which Is the Best Chandragiri Cable Car Tour from Kathmandu?",
                seoTitle: "Best Chandragiri Cable Car Tour Kathmandu 2026 | Honest Comparison",
                description: "Compare real Chandragiri Hills cable car tours from Kathmandu — from a $79 valley-and-Everest-views ride to combos with temple visits and the Monkey Temple.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/5506c38da47efdf4.jpeg",
                sections: [
                    {
                        title: "The Short Answer",
                        content: "Chandragiri Hill's cable car is one of the easiest ways to get sweeping views over the Kathmandu Valley, and on clear days, distant Himalayan peaks, without any hiking required. A standard cable car ride up and down is the simplest option.",
                        tourCard: { slug: "chandragiri-cable-car-breathtaking-valley-and", title: "Chandragiri Cable Car: Breathtaking Valley and Everest Views", description: "A standard Chandragiri cable car ride with valley and Everest views.", price: "From $79", duration: "4 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/5506c38da47efdf4.jpeg" },
                    },
                    {
                        title: "Cheapest: Standard Cable Car Ride",
                        content: "At $79, this is the lowest-priced way to ride the cable car and take in the valley views from the top.",
                        tourCard: { slug: "chandragiri-cable-car-breathtaking-valley-and", title: "Chandragiri Cable Car: Breathtaking Valley and Everest Views", description: "The budget-friendly Chandragiri cable car ride.", price: "From $79", duration: "4 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/5506c38da47efdf4.jpeg" },
                    },
                    {
                        title: "Best Full-Day Option: Chandragiri Hill Day Tour",
                        content: "A longer full-day version, giving more time to explore the hilltop area and its temple rather than a quick up-and-down ride.",
                        tourCard: { slug: "chandragiri-hill-cable-car-a-day-tour", title: "Chandragiri Hill Cable Car - A Day Tour", description: "A full-day version of the Chandragiri cable car tour.", price: "From $89", duration: "1 day", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/44ad869430db7e1412ffc21d253c290712eae2934957b67dacf6c0141b6fbfdb.jpeg" },
                    },
                    {
                        title: "Best for Sightseeing: Chandragiri Hills Sightseeing with Cable Car",
                        content: "This pairs the cable car ride with broader sightseeing around the hilltop area.",
                        tourCard: { slug: "kathmandu-chandragiri-hills-sightseeing-with", title: "Kathmandu: Chandragiri Hills Sightseeing with Cable Car", description: "The cable car combined with hilltop sightseeing.", price: "From $98", duration: "3 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/ea63434e63d966322ce13f176ccb5c9205e000ffa3e96452f51204797bf48dd4.jpg" },
                    },
                    {
                        title: "Best Half-Day Combo: + Temple Tour",
                        content: "This adds a temple visit to the cable car ride, a good half-day combo if you want a cultural stop alongside the views.",
                        tourCard: { slug: "kathmandu-half-day-chandragiri-cable-car-temple", title: "Kathmandu: Half-Day Chandragiri Cable Car & Temple Tour", description: "The cable car combined with a temple visit.", price: "From $111", duration: "3 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/f3616218743a837d8925f06241ef4570130cd34e0908cb7bd488fbbe8a758e28.jpg" },
                    },
                    {
                        title: "Practical Tips",
                        content: "Everest and other distant peaks are only visible from Chandragiri on clear days, mainly in the dry season from October to March — manage expectations if visiting during the monsoon. The hilltop also has a Bhaleshwor Mahadev temple and viewing decks worth the extra time if you book one of the longer options.",
                    }
                ],
                faqs: [
                    { q: "What is the best Chandragiri cable car tour from Kathmandu?", a: "A standard cable car ride suits most visitors; add a temple visit for a fuller half-day." },
                    { q: "Can you see Everest from Chandragiri?", a: "On clear days, yes, mainly during the dry season from October to March." },
                    { q: "How long does the Chandragiri cable car ride take?", a: "The ride itself is short; most tours budget 3-4 hours total including time at the top." },
                    { q: "Is there a temple at Chandragiri Hill?", a: "Yes, the Bhaleshwor Mahadev temple sits at the hilltop alongside viewing decks." }
                ],
                jsonLd: {
                    "@context": "https://schema.org",
                    "@type": "FAQPage",
                    "mainEntity": [
                        { "@type": "Question", "name": "What is the best Chandragiri cable car tour from Kathmandu?", "acceptedAnswer": { "@type": "Answer", "text": "A standard cable car ride suits most visitors; add a temple visit for a fuller half-day." } },
                        { "@type": "Question", "name": "Can you see Everest from Chandragiri?", "acceptedAnswer": { "@type": "Answer", "text": "On clear days, yes, mainly during the dry season from October to March." } },
                        { "@type": "Question", "name": "How long does the Chandragiri cable car ride take?", "acceptedAnswer": { "@type": "Answer", "text": "The ride itself is short; most tours budget 3-4 hours total including time at the top." } },
                        { "@type": "Question", "name": "Is there a temple at Chandragiri Hill?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, the Bhaleshwor Mahadev temple sits at the hilltop alongside viewing decks." } }
                    ]
                },
            };
        case "best-kathmandu-valley-sightseeing-tour-kathmandu":
            return {
                title: "Which Is the Best Kathmandu Valley Sightseeing Tour?",
                seoTitle: "Best Kathmandu Valley Sightseeing Tour 2026 | Honest Comparison",
                description: "Compare real full-day Kathmandu Valley sightseeing tours — from a $24 budget bus tour to a UNESCO-sites tour and a private Patan and Bhaktapur combo with lunch.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/ce82cf58703d88fbd618122468a4298b73cb91bbce7d62e49c42fa7c67d96d0e.png",
                sections: [
                    {
                        title: "The Short Answer",
                        content: "A Kathmandu Valley sightseeing tour typically bundles several of the valley's UNESCO World Heritage Sites — Durbar Squares, stupas, and temples — into one full day with transport included. A budget bus tour covering multiple sites is the most economical starting point.",
                        tourCard: { slug: "kathmandu-full-day-budget-bus-tour-of-kathmandu", title: "Kathmandu: Full-Day Budget Bus Tour of Kathmandu Valley", description: "A budget full-day bus tour covering multiple valley sites.", price: "From $24", duration: "6 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/9268364a22274dd1fc8c1a1228c531d95aa31ec666a02bb62387e986ffc89a31.jpg" },
                    },
                    {
                        title: "Cheapest: Full-Day Budget Bus Tour",
                        content: "At $24, this is the lowest-priced way to see multiple valley sites in one day via shared bus transport.",
                        tourCard: { slug: "kathmandu-full-day-budget-bus-tour-of-kathmandu", title: "Kathmandu: Full-Day Budget Bus Tour of Kathmandu Valley", description: "The budget-friendly full-day valley bus tour.", price: "From $24", duration: "6 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/9268364a22274dd1fc8c1a1228c531d95aa31ec666a02bb62387e986ffc89a31.jpg" },
                    },
                    {
                        title: "Best for UNESCO Sites: Told Through UNESCO Sites",
                        content: "This frames the entire day specifically around the valley's UNESCO World Heritage Sites, a good pick if that's your main interest.",
                        tourCard: { slug: "kathmandu-the-kathmandu-valley-told-through", title: "Kathmandu: The Kathmandu Valley, Told Through UNESCO Sites", description: "A full-day tour structured around the valley's UNESCO sites.", price: "From $78", duration: "1 day", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/ce82cf58703d88fbd618122468a4298b73cb91bbce7d62e49c42fa7c67d96d0e.png" },
                    },
                    {
                        title: "Best Combined Tour: Patan & Bhaktapur with Lunch",
                        content: "This combines two of the valley's three royal cities with lunch included, a well-rounded single-day option.",
                        tourCard: { slug: "kathmandu-valley-patan-bhaktapur-private-tour", title: "Kathmandu Valley: Patan & Bhaktapur Private Tour with Lunch", description: "A private tour of Patan and Bhaktapur with lunch.", price: "From $138", duration: "5 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/5bc87724ccd5dc727775894434d329da69f70027a604a2d74ac3ef7a4157afc9.jpg" },
                    },
                    {
                        title: "Best for Flexibility: Private Car and Driver Rental",
                        content: "Rather than a fixed itinerary, this rents a private car and driver for the day, letting you choose which valley sites to prioritize yourself.",
                        tourCard: { slug: "kathmandu-valley-private-car-and-driver-rental", title: "Kathmandu Valley: Private Car and Driver Rental", description: "A private car and driver rental for self-directed sightseeing.", price: "From $104", duration: "8 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/0a563090fa5eedafa83ae9e7f16744783267a1a0a61b6318bb10ccc8f13e3aa5.png" },
                    },
                    {
                        title: "Practical Tips",
                        content: "Entrance fees for individual sites (Durbar Squares, stupas) are usually separate from the tour price since each heritage site charges its own fee — budget for this extra cost regardless of which tour you pick. A private car rental gives the most flexibility but requires you to already know which sites you want to prioritize.",
                    }
                ],
                faqs: [
                    { q: "What is the best Kathmandu Valley sightseeing tour?", a: "A full-day tour covering multiple UNESCO sites suits most visitors; rent a private car if you want full flexibility on the itinerary." },
                    { q: "Are entrance fees included in Kathmandu Valley tours?", a: "Usually not — individual site entrance fees are typically separate from the tour price." },
                    { q: "How many UNESCO sites are in the Kathmandu Valley?", a: "Several, including multiple Durbar Squares, Pashupatinath, Boudhanath, and Swayambhunath." },
                    { q: "Is a private car rental a good option for valley sightseeing?", a: "Yes, if you already know which sites to prioritize and want full flexibility on pace." }
                ],
                jsonLd: {
                    "@context": "https://schema.org",
                    "@type": "FAQPage",
                    "mainEntity": [
                        { "@type": "Question", "name": "What is the best Kathmandu Valley sightseeing tour?", "acceptedAnswer": { "@type": "Answer", "text": "A full-day tour covering multiple UNESCO sites suits most visitors; rent a private car if you want full flexibility on the itinerary." } },
                        { "@type": "Question", "name": "Are entrance fees included in Kathmandu Valley tours?", "acceptedAnswer": { "@type": "Answer", "text": "Usually not — individual site entrance fees are typically separate from the tour price." } },
                        { "@type": "Question", "name": "How many UNESCO sites are in the Kathmandu Valley?", "acceptedAnswer": { "@type": "Answer", "text": "Several, including multiple Durbar Squares, Pashupatinath, Boudhanath, and Swayambhunath." } },
                        { "@type": "Question", "name": "Is a private car rental a good option for valley sightseeing?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, if you already know which sites to prioritize and want full flexibility on pace." } }
                    ]
                },
            };

        case "best-paragliding-tour-pokhara":
            return {
                title: "Which Is the Best Paragliding Tour in Pokhara?",
                seoTitle: "Best Paragliding Tour Pokhara 2026 | Honest Comparison",
                description: "Compare real tandem paragliding flights in Pokhara — from an $80 budget flight with Annapurna views to combos with a city tour and Phewa Lake.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/6a0ef06342ccb1bfdfddbfba209fb927023fc5f3e5c1974d8046dff8a2a65db5.jpg",
                sections: [
                    { title: "The Short Answer", content: "Nearly every Pokhara paragliding tour launches from Sarangkot with Annapurna range views on the way down — the differences are mainly flight length, photo/video inclusion, and whether extra sightseeing is bundled in.", tourCard: { slug: "pokhara-paragliding-with-annapurna-views-photos", title: "Pokhara: Paragliding with Annapurna Views, Photos & Video", description: "A standard tandem paragliding flight with Annapurna views and photos.", price: "From $80", duration: "1 hour", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/6a0ef06342ccb1bfdfddbfba209fb927023fc5f3e5c1974d8046dff8a2a65db5.jpg" } },
                    { title: "Cheapest: Paragliding with Photos & Video", content: "At $80, this is the lowest-priced standard flight that still includes photo and video of your flight.", tourCard: { slug: "pokhara-paragliding-with-annapurna-views-photos", title: "Pokhara: Paragliding with Annapurna Views, Photos & Video", description: "The budget-friendly paragliding flight with media included.", price: "From $80", duration: "1 hour", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/6a0ef06342ccb1bfdfddbfba209fb927023fc5f3e5c1974d8046dff8a2a65db5.jpg" } },
                    { title: "Best with GoPro: Tandem Flight with GoPro Photos", content: "This version specifically uses a GoPro for your flight footage, a step up in capture quality over a standard phone/camera photo package.", tourCard: { slug: "pokhara-tandem-paragliding-flight-with-gopro", title: "Pokhara: Tandem Paragliding Flight with GoPro Photos", description: "A tandem flight with GoPro footage of the experience.", price: "From $91", duration: "2 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/3f9bdd6de60cddee665013ea6d9da3053a9c3246f1273ca782e27887411703c2.jpeg" } },
                    { title: "Best Full Package: Paragliding with Complimentary Pokhara Tour", content: "This bundles the flight with a complimentary city tour of Pokhara afterward, good value if you also want some ground-level sightseeing the same day.", tourCard: { slug: "pokhara-paragliding-package-with-complimentary", title: "Pokhara: Paragliding Package with Complimentary Pokhara Tour", description: "A paragliding flight bundled with a complimentary city tour.", price: "From $94", duration: "5 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/62be5ac206bfda4c7bb9529444e41dc869627701a1e74777dfd08ad6ded0f387.jpg" } },
                    { title: "Practical Tips", content: "Flights launch from Sarangkot and land near Phewa Lake, so morning slots (before afternoon winds pick up) tend to be smoother and are often preferred by first-time flyers." }
                ],
                faqs: [
                    { q: "What is the best paragliding tour in Pokhara?", a: "A standard flight with photos suits most visitors; add the Pokhara tour package for a fuller day." },
                    { q: "Is Pokhara paragliding safe for beginners?", a: "Yes, all flights are tandem with a certified pilot — no experience needed." },
                    { q: "What's the best time of day to paraglide in Pokhara?", a: "Morning, before afternoon winds pick up, tends to be smoother." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "What is the best paragliding tour in Pokhara?", "acceptedAnswer": { "@type": "Answer", "text": "A standard flight with photos suits most visitors." } },
                    { "@type": "Question", "name": "Is it safe for beginners?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, all flights are tandem with a certified pilot." } },
                    { "@type": "Question", "name": "Best time of day to fly?", "acceptedAnswer": { "@type": "Answer", "text": "Morning, before afternoon winds pick up." } }
                ] },
            };

        case "best-sarangkot-sunrise-tour-pokhara":
            return {
                title: "Which Is the Best Sarangkot Sunrise Tour in Pokhara?",
                seoTitle: "Best Sarangkot Sunrise Tour Pokhara 2026 | Comparison",
                description: "Compare real Sarangkot sunrise tours from Pokhara — from a $23 standard tour with Annapurna views to a private version and a cable car combo.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/36a7253ae364b9bdacf2f0c0efc53550fc4c2fb8a2dc0143b96c19957aa9e5e1.jpg",
                sections: [
                    { title: "The Short Answer", content: "Sarangkot's hilltop viewpoint offers one of the best sunrise views of the Annapurna range anywhere near Pokhara, and most tours differ mainly in whether they're shared or private, and whether a cable car ride is included.", tourCard: { slug: "from-pokhara-sarangkot-sunrise-tour-with", title: "From Pokhara: Sarangkot Sunrise Tour with Annapurna Views", description: "A standard shared sunrise tour to Sarangkot.", price: "From $23", duration: "3 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/36a7253ae364b9bdacf2f0c0efc53550fc4c2fb8a2dc0143b96c19957aa9e5e1.jpg" } },
                    { title: "Cheapest: Standard Sunrise Tour", content: "At $23, this is the lowest-priced way to see the Sarangkot sunrise over the Annapurna range.", tourCard: { slug: "from-pokhara-sarangkot-sunrise-tour-with", title: "From Pokhara: Sarangkot Sunrise Tour with Annapurna Views", description: "The budget-friendly shared sunrise tour.", price: "From $23", duration: "3 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/36a7253ae364b9bdacf2f0c0efc53550fc4c2fb8a2dc0143b96c19957aa9e5e1.jpg" } },
                    { title: "Best with Panoramic Views: Sunrise Tour with Annapurna Panoramas", content: "A slightly different operator take on the same core experience, emphasizing the full panoramic sweep of the Annapurna range.", tourCard: { slug: "pokhara-sarangkot-sunrise-tour-with-annapurna", title: "Pokhara: Sarangkot Sunrise Tour with Annapurna Panoramas", description: "A sunrise tour emphasizing panoramic Annapurna views.", price: "From $30", duration: "3 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/521071f4c9b591b34f278d60008ddab984f6055c1f349bdebe6513cc54fd5f82.jpg" } },
                    { title: "Best with Cable Car: Sunrise Tour with Cable Car and Local Guide", content: "This adds a cable car ride to the standard sunrise viewpoint visit, with a local guide providing context along the way.", tourCard: { slug: "pokhara-sarangkot-sunrise-cable-car-tour-with", title: "Pokhara: Sarangkot Sunrise, Cable Car tour with Local Guide", description: "The sunrise tour combined with a cable car ride.", price: "From $33", duration: "5 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/4d7f9f625820347c805df9d8dffd863e336ad29d74c48101443662b4b7eb001e.jpeg" } },
                    { title: "Practical Tips", content: "Departures are very early (typically 4:30-5am pickup) to reach the viewpoint before sunrise — bring a warm layer, since Sarangkot's elevation makes pre-dawn temperatures noticeably cooler than Pokhara's lakeside." }
                ],
                faqs: [
                    { q: "What is the best Sarangkot sunrise tour in Pokhara?", a: "A standard shared tour suits most visitors; add a cable car for extra scenery." },
                    { q: "What time do Sarangkot sunrise tours depart?", a: "Very early, typically around 4:30-5am, to reach the viewpoint before sunrise." },
                    { q: "Is it cold at Sarangkot at sunrise?", a: "Yes, noticeably cooler than Pokhara's lakeside given the elevation — bring a warm layer." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "What is the best Sarangkot sunrise tour?", "acceptedAnswer": { "@type": "Answer", "text": "A standard shared tour suits most visitors." } },
                    { "@type": "Question", "name": "What time do tours depart?", "acceptedAnswer": { "@type": "Answer", "text": "Around 4:30-5am to reach the viewpoint before sunrise." } },
                    { "@type": "Question", "name": "Is it cold at sunrise?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, bring a warm layer." } }
                ] },
            };

        case "best-annapurna-day-hike-pokhara":
            return {
                title: "Which Is the Best Annapurna Day Hike from Pokhara?",
                seoTitle: "Best Annapurna Day Hike Pokhara 2026 | Comparison",
                description: "Compare real Annapurna foothills day hikes from Pokhara — a group hike to Australian Camp versus a panorama day hike, no multi-day trek commitment required.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/b273225b0582cd12162ff2fdbac7b844732af9843934fd05551b737d6b5c27eb.png",
                sections: [
                    { title: "The Short Answer", content: "For travellers who want a taste of the Annapurna foothills without committing to a multi-day trek, these day hikes reach viewpoints like Australian Camp in a single day from Pokhara.", tourCard: { slug: "pokhara-annapurna-foothills-day-group-hike-with", title: "Pokhara: Annapurna Foothills Day Group Hike with Transfers", description: "A group day hike into the Annapurna foothills with transfers.", price: "From $76", duration: "7 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/b273225b0582cd12162ff2fdbac7b844732af9843934fd05551b737d6b5c27eb.png" } },
                    { title: "Best to Australian Camp: Annapurna Panorama Day Hike", content: "This specifically targets Australian Camp, a well-known foothills viewpoint, with panoramic Annapurna views as the reward.", tourCard: { slug: "pokhara-annapurna-panorama-day-hike-to-australian", title: "Pokhara: Annapurna Panorama Day Hike to Australian Camp", description: "A day hike to Australian Camp with panoramic Annapurna views.", price: "From $76", duration: "8.5 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/d2631580acfbb30562fc02a4dc70b5fc77357f8795e439fbfa8e03d05129c696.jpg" } },
                    { title: "Practical Tips", content: "These day hikes are a realistic option if you don't have the week-plus needed for a full Annapurna Base Camp trek, but still want real trail time and mountain views — reasonable fitness is enough, no technical experience needed." }
                ],
                faqs: [
                    { q: "What is the best Annapurna day hike from Pokhara?", a: "Both options reach similar foothills viewpoints like Australian Camp — pick based on group vs. more flexible pacing." },
                    { q: "Do I need trekking experience for an Annapurna day hike?", a: "No, reasonable fitness is enough for these single-day foothills hikes." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "What is the best Annapurna day hike from Pokhara?", "acceptedAnswer": { "@type": "Answer", "text": "Both options reach similar foothills viewpoints like Australian Camp." } },
                    { "@type": "Question", "name": "Do I need trekking experience?", "acceptedAnswer": { "@type": "Answer", "text": "No, reasonable fitness is enough." } }
                ] },
            };

        case "best-phewa-lake-tour-pokhara":
            return {
                title: "Which Is the Best Phewa Lake Experience in Pokhara?",
                seoTitle: "Best Phewa Lake Tour Pokhara 2026 | Honest Comparison",
                description: "Compare real Phewa Lake experiences in Pokhara — a sunset boat ride with dinner versus a Queen's Forest hike combined with a lake boat ride.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/f5e694af9832307acbe55ee3c17a2451fdcaa448d15e8ee90ec8f5e271838995.jpg",
                sections: [
                    { title: "The Short Answer", content: "Phewa Lake, Pokhara's centerpiece, can be enjoyed as a relaxed sunset boat ride or combined with a forest hike to Santi Stupa for those who want to earn the lake view with some walking first.", tourCard: { slug: "pokhara-sunset-boat-ride-on-phewa-lake-with-dinner", title: "Pokhara: Sunset Boat Ride on Phewa Lake with Dinner", description: "A relaxed sunset boat ride on Phewa Lake with dinner included.", price: "From $80", duration: "4 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/f5e694af9832307acbe55ee3c17a2451fdcaa448d15e8ee90ec8f5e271838995.jpg" } },
                    { title: "Best Combined with Hiking: Queen's Forest Hike & Lake Boat Ride", content: "This pairs a hike up to Santi Stupa through Queen's Forest with a boat ride on Phewa Lake afterward, for a more active full day.", tourCard: { slug: "pokhara-queen-forest-hike-to-santi-stupa-lake", title: "Pokhara: Queen Forest Hike to Santi Stupa & Lake Boat Ride", description: "A forest hike to Santi Stupa combined with a lake boat ride.", price: "From $67", duration: "6 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/bdd818d16d6679df4e8f355d11e3258108304bed3d200eb77634a634f07f800e.jpg" } },
                    { title: "Practical Tips", content: "Sunset boat rides book up on clear evenings — reserve in advance during peak season (October-November, March-April) when Annapurna reflections on the lake are at their clearest." }
                ],
                faqs: [
                    { q: "What is the best Phewa Lake experience in Pokhara?", a: "A sunset boat ride with dinner for relaxation, or the Queen's Forest hike combo for a more active day." },
                    { q: "When is the best time for Phewa Lake views?", a: "October-November and March-April, when Annapurna reflections on the lake are clearest." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "What is the best Phewa Lake experience?", "acceptedAnswer": { "@type": "Answer", "text": "A sunset boat ride with dinner, or the Queen's Forest hike combo." } },
                    { "@type": "Question", "name": "Best time for lake views?", "acceptedAnswer": { "@type": "Answer", "text": "October-November and March-April." } }
                ] },
            };

        case "best-zipline-tour-pokhara":
            return {
                title: "Which Is the Best Zipline Tour in Pokhara?",
                seoTitle: "Best Zipline Tour Pokhara 2026 | Honest Comparison",
                description: "Compare real zipline tours in Pokhara — from a skyscreamer swing combo to one of the world's steepest and fastest ziplines with hotel transfers.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/c7ba876b7f05f09483808f079ca7b160527967f4a00e819dba5d4547ef344a92.png",
                sections: [
                    { title: "The Short Answer", content: "Pokhara's zipline is known as one of the steepest and fastest in the world, and tours differ mainly in whether extra activities (like a swing) are bundled in and whether hotel transfers are included.", tourCard: { slug: "pokhara-zipline-and-skyscreamer-swing-combo", title: "Pokhara: Zipline and Skyscreamer Swing Combo", description: "The zipline combined with a skyscreamer swing experience.", price: "From $101", duration: "2 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/27f34a2ad45f17c35c6ab2a8e30c777e71f16d16281327f3c7053674c8842f73.jpg" } },
                    { title: "Best with Transfers: High-Speed Zipline Tour with Hotel Transfers", content: "This bundles hotel pickup and drop-off into the zipline experience, removing the logistics of getting there yourself.", tourCard: { slug: "pokhara-high-speed-zipline-tour-with-hotel", title: "Pokhara: High-Speed Zipline Tour with Hotel Transfers", description: "The high-speed zipline with hotel transfers included.", price: "From $280", duration: "3 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/c7ba876b7f05f09483808f079ca7b160527967f4a00e819dba5d4547ef344a92.png" } },
                    { title: "Practical Tips", content: "Pokhara's zipline reaches genuinely high speeds (among the fastest commercial ziplines anywhere) — if heights and speed aren't for you, the paragliding or boat options are gentler ways to see similar scenery." }
                ],
                faqs: [
                    { q: "What is the best zipline tour in Pokhara?", a: "The skyscreamer combo adds variety; go for the hotel-transfer version if you want the logistics handled." },
                    { q: "Is Pokhara's zipline really one of the fastest in the world?", a: "Yes, it's marketed and generally regarded as among the steepest and fastest commercial ziplines globally." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "What is the best zipline tour in Pokhara?", "acceptedAnswer": { "@type": "Answer", "text": "The skyscreamer combo adds variety." } },
                    { "@type": "Question", "name": "Is it really one of the fastest in the world?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, among the steepest and fastest commercial ziplines globally." } }
                ] },
            };

        case "pokhara-travel-guide-2026":
            return {
                title: "Pokhara Travel Guide 2026",
                description: "What visitors need to know about Pokhara, Nepal's adventure-sports and lakeside hub.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/6a0ef06342ccb1bfdfddbfba209fb927023fc5f3e5c1974d8046dff8a2a65db5.jpg",
                sections: [
                    { title: "Why Visit", content: "Pokhara is Nepal's adventure capital — paragliding, ziplining, and Annapurna trekking all launch from here, alongside the relaxed lakeside scene around Phewa Lake." }
                ],
                faqs: [
                    { q: "Is Pokhara worth visiting?", a: "Yes, for adventure sports (paragliding, ziplining), Annapurna access, and the lakeside atmosphere." }
                ],
            };

        case "best-time-to-visit-pokhara":
            return {
                title: "Best Time to Visit Pokhara",
                description: "Timing matters in Pokhara, especially for mountain views and paragliding conditions.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/6a0ef06342ccb1bfdfddbfba209fb927023fc5f3e5c1974d8046dff8a2a65db5.jpg",
                sections: [
                    { title: "Weather Patterns", content: "October-November and March-April offer the clearest Annapurna views and best paragliding conditions. The monsoon (June-September) brings heavy cloud cover that often obscures the mountains entirely." }
                ],
                faqs: [
                    { q: "What is the best time to visit Pokhara?", a: "October-November and March-April for clear mountain views and good paragliding weather." }
                ],
            };

        case "pokhara-1-day-itinerary":
            return {
                title: "Pokhara 1-Day Itinerary",
                description: "A realistic one-day plan for Pokhara if you don't have time for a multi-day Annapurna trek.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/36a7253ae364b9bdacf2f0c0efc53550fc4c2fb8a2dc0143b96c19957aa9e5e1.jpg",
                sections: [
                    { title: "Early Morning", content: "Start before dawn with the Sarangkot sunrise tour for Annapurna views." },
                    { title: "Midday", content: "Follow with a paragliding flight, which conveniently launches near Sarangkot and lands close to Phewa Lake." },
                    { title: "Evening", content: "Finish with a relaxed sunset boat ride on Phewa Lake." }
                ],
                faqs: [
                    { q: "Can Pokhara be seen in one day?", a: "Yes, Sarangkot sunrise, paragliding, and a Phewa Lake boat ride fit comfortably into one day." }
                ],
            };

        case "pokhara-vs-kathmandu-guide":
            return {
                title: "Pokhara vs Kathmandu: Which Should You Visit First?",
                description: "An honest comparison of Nepal's two most-visited cities for first-time travellers deciding where to spend their time.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/6a0ef06342ccb1bfdfddbfba209fb927023fc5f3e5c1974d8046dff8a2a65db5.jpg",
                sections: [
                    { title: "The Short Answer", content: "Kathmandu is the cultural and historical base (temples, Durbar Square, Everest access), while Pokhara is the adventure and relaxation base (paragliding, lakeside, Annapurna access). Most itineraries include both rather than choosing one." }
                ],
                faqs: [
                    { q: "Should I visit Pokhara or Kathmandu first?", a: "Most travellers do both — Kathmandu for culture and Everest-region access, Pokhara for adventure sports and Annapurna access." }
                ],
            };

        case "best-shivapuri-hiking-tour-kathmandu":
            return {
                title: "Which Is the Best Shivapuri National Park Hiking Tour from Kathmandu?",
                seoTitle: "Best Shivapuri Hiking Tour Kathmandu 2026 | Comparison",
                description: "Compare real Shivapuri National Park day hikes from Kathmandu — a half-day Nagarjun route versus a longer full-day hike.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/089e8fb5a9f68162ca8f35bbf629ee180fbfd304fc6dd86a66dd6d6886ea5a35.jpg",
                sections: [
                    { title: "The Short Answer", content: "Shivapuri National Park, right on Kathmandu's edge, offers genuine forest hiking without leaving the valley — the choice is mainly half-day vs. full-day depending on how much trail time you want.", tourCard: { slug: "shivapuri-nagarjun-half-day-hiking-tour-to", title: "Shivapuri Nagarjun Half-Day Hiking Tour", description: "A half-day hike in the Shivapuri Nagarjun area.", price: "From $97", duration: "5 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/b4625753f2344b2494744e1aaa9cb05f4ec118b9fd2831642ead540c06b689d3.jpg" } },
                    { title: "Best Full Day: Shivapuri National Park Day Hiking", content: "A longer version covering more of the park's trails for travellers who want a full day of hiking rather than a half-day sampler.", tourCard: { slug: "kathmandu-shivapuri-national-park-day-hiking", title: "Kathmandu: Shivapuri National Park Day Hiking", description: "A full-day hike through Shivapuri National Park.", price: "From $114", duration: "7 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/089e8fb5a9f68162ca8f35bbf629ee180fbfd304fc6dd86a66dd6d6886ea5a35.jpg" } },
                    { title: "Practical Tips", content: "Shivapuri is a genuine escape from Kathmandu's traffic and pollution without requiring a multi-day trip — a good option if you want nature time without committing to Nagarkot or further-out hikes." }
                ],
                faqs: [
                    { q: "What is the best Shivapuri hiking tour from Kathmandu?", a: "A half-day hike for a shorter trip, or the full-day version for more trail time." },
                    { q: "Is Shivapuri close to Kathmandu?", a: "Yes, right on the edge of the valley, making it an easy escape from the city." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "What is the best Shivapuri hiking tour?", "acceptedAnswer": { "@type": "Answer", "text": "A half-day or full-day hike depending on time available." } },
                    { "@type": "Question", "name": "Is Shivapuri close to Kathmandu?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, right on the edge of the valley." } }
                ] },
            };

        case "best-pottery-workshop-kathmandu":
            return {
                title: "Which Is the Best Pottery Workshop in Kathmandu?",
                seoTitle: "Best Pottery Workshop Kathmandu 2026 | Honest Comparison",
                description: "Compare real pottery workshops in Kathmandu — a quick wheel-throwing session versus a more involved artisan-led workshop.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/3d0828b07feebfddde3846a7fcace319de375f51415fb241c5e5abc32374bfbd.png",
                sections: [
                    { title: "The Short Answer", content: "Kathmandu Valley's pottery tradition, especially in Bhaktapur's Pottery Square, is hands-on learnable in a single session — the difference between workshops is mainly length and how much individual guidance you get.", tourCard: { slug: "kathmandu-traditional-pottery-workshop-with-wheel", title: "Kathmandu Traditional Pottery Workshop with Wheel", description: "A hands-on traditional pottery wheel-throwing workshop.", price: "From $44", duration: "1 hour", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/3d0828b07feebfddde3846a7fcace319de375f51415fb241c5e5abc32374bfbd.png" } },
                    { title: "Best with Local Artisans: Pottery Workshop with Local Artisans", content: "This pairs you directly with local artisans for more personalized guidance than a standard group session.", tourCard: { slug: "kathmandu-pottery-workshop-with-local-artisans", title: "Kathmandu Pottery Workshop with Local Artisans", description: "A pottery workshop with direct guidance from local artisans.", price: "From $65", duration: "2 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/b2f2a4ec282e9b6065f571ecc2999b8a587e03f6b4a9d5a4a282c9ab213ef20f.jpg" } },
                    { title: "Practical Tips", content: "You'll likely get muddy — wear clothes you don't mind getting dirty, and most workshops let you take your finished piece home once fired, though pickup timing varies by operator." }
                ],
                faqs: [
                    { q: "What is the best pottery workshop in Kathmandu?", a: "A quick wheel-throwing session for a taste of it, or the artisan-led version for more personalized guidance." },
                    { q: "Can I take my pottery piece home?", a: "Usually yes once fired, though pickup timing varies by operator." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "What is the best pottery workshop in Kathmandu?", "acceptedAnswer": { "@type": "Answer", "text": "A quick session, or the artisan-led version for more guidance." } },
                    { "@type": "Question", "name": "Can I take my piece home?", "acceptedAnswer": { "@type": "Answer", "text": "Usually yes once fired." } }
                ] },
            };

        case "is-dakshinkali-pharping-tour-worth-it-kathmandu":
            return {
                title: "Is the Dakshinkali Temple & Pharping Day Tour from Kathmandu Worth It?",
                seoTitle: "Dakshinkali Pharping Tour Kathmandu 2026 | Review",
                description: "An honest look at the Dakshinkali Temple, Asura Cave, and Pharping day tour from Kathmandu.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/365a3a040b47d85568405e921252fa72d9df6bdf6e16bee8e0a05b6f318a9601.jpg",
                sections: [
                    { title: "The Short Answer", content: "Dakshinkali Temple, one of Nepal's most important Kali temples, and nearby Pharping's Asura Cave and monasteries offer a genuinely different religious angle than the standard Kathmandu temple circuit — worthwhile if you want to go beyond the most-visited sites.", tourCard: { slug: "pharping-asura-cave-and-dakshinkali-temple-tour", title: "Pharping: Asura Cave and Dakshinkali Temple Tour", description: "A tour of Pharping's Asura Cave and Dakshinkali Temple.", price: "From $164", duration: "8 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/365a3a040b47d85568405e921252fa72d9df6bdf6e16bee8e0a05b6f318a9601.jpg" } },
                    { title: "Alternative Route: Dakshinkali Temple and Kirtipur Day Tour", content: "This pairs Dakshinkali with Kirtipur, a historic Newar town, instead of Pharping's caves.", tourCard: { slug: "kathmandu-dakshinkali-temple-and-kirtipur-day-tour", title: "Kathmandu: Dakshinkali Temple and Kirtipur Day Tour", description: "Dakshinkali Temple combined with a visit to Kirtipur.", price: "From $208", duration: "12 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/2a6fd129e5c473b7391119143c8ba87a8c250fd5ad7394bf37e601c76b6f8ceb.png" } },
                    { title: "Practical Tips", content: "Dakshinkali historically involves animal sacrifice as part of its religious practice, especially on Tuesdays and Saturdays — be aware of this before visiting if it's something you'd rather avoid seeing." }
                ],
                faqs: [
                    { q: "Is the Dakshinkali and Pharping tour worth it?", a: "Yes, for a different religious angle beyond Kathmandu's most-visited temples." },
                    { q: "Does Dakshinkali involve animal sacrifice?", a: "Yes, historically part of its religious practice, especially on Tuesdays and Saturdays." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "Is the Dakshinkali/Pharping tour worth it?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, for a different religious angle." } },
                    { "@type": "Question", "name": "Does it involve animal sacrifice?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, part of its historical religious practice." } }
                ] },
            };

        case "is-thamel-pub-crawl-worth-it-kathmandu":
            return {
                title: "Is the Thamel Pub Crawl in Kathmandu Worth It?",
                seoTitle: "Thamel Pub Crawl Kathmandu 2026 | Honest Review",
                description: "An honest look at Kathmandu's Thamel nightlife pub crawl with a local guide.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/e4b1e524064047e78384f7762c413ef8502295ea994376a109e3e690cefe2600.png",
                sections: [
                    { title: "The Short Answer", content: "Thamel is Kathmandu's main nightlife and backpacker district, and a guided pub crawl is a genuinely easy way to meet other travellers and get oriented to the area's bars without wandering alone on your first night.", tourCard: { slug: "kathmandu-nightlife-thamel-pub-crawl-with-a-local", title: "Kathmandu Nightlife: Thamel Pub Crawl with a Local Guide", description: "A guided pub crawl through Thamel's nightlife district.", price: "From $130", duration: "4 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/e4b1e524064047e78384f7762c413ef8502295ea994376a109e3e690cefe2600.png" } },
                    { title: "Practical Tips", content: "Good for solo travellers especially, since it's a built-in way to meet other people — less essential if you're already travelling with a group." }
                ],
                faqs: [
                    { q: "Is the Thamel pub crawl worth it?", a: "Yes, especially for solo travellers wanting to meet others and get oriented to the nightlife district." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "Is the Thamel pub crawl worth it?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, especially for solo travellers." } }
                ] },
            };

        case "is-momo-masterclass-worth-it-kathmandu":
            return {
                title: "Is the Thamel Momo Masterclass Worth It?",
                seoTitle: "Thamel Momo Masterclass Kathmandu 2026 | Review",
                description: "An honest look at Kathmandu's momo-making masterclass in a Thakali kitchen, Nepal's most iconic dumpling dish.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/1e7cc46fcb23d164cf15c70ec8591c6226dde160f4fd056ddc3725def8ba6014.jpg",
                sections: [
                    { title: "The Short Answer", content: "Momos are arguably Nepal's most iconic food, and learning to make them from scratch in a Thakali kitchen is a genuinely hands-on, affordable way to engage with Nepali food culture beyond just eating in restaurants.", tourCard: { slug: "thamel-momo-masterclass-in-a-thakali-kitchen", title: "Thamel: Momo Masterclass in a Thakali Kitchen", description: "A hands-on momo-making class in a traditional Thakali kitchen.", price: "From $27", duration: "2 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/1e7cc46fcb23d164cf15c70ec8591c6226dde160f4fd056ddc3725def8ba6014.jpg" } },
                    { title: "Practical Tips", content: "You get to eat what you make at the end, so come a bit hungry — this isn't just a demonstration, it's a genuine cooking class." }
                ],
                faqs: [
                    { q: "Is the Thamel momo masterclass worth it?", a: "Yes, a genuinely hands-on and affordable way to engage with Nepali food culture." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "Is the momo masterclass worth it?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, hands-on and affordable." } }
                ] },
            };

        case "is-budhanilkantha-temple-tour-worth-it-kathmandu":
            return {
                title: "Is the Budhanilkantha Temple Tour from Kathmandu Worth It?",
                seoTitle: "Budhanilkantha Temple Tour Kathmandu 2026 | Review",
                description: "An honest look at the Budhanilkantha Temple guided tour, home to Nepal's largest stone sculpture of a reclining Vishnu.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/7669514f5d42d2241f9b6dd22629cc5c90f0a7c2572dc62e1a4785e5644913d0.png",
                sections: [
                    { title: "The Short Answer", content: "Budhanilkantha's massive stone sculpture of a reclining Vishnu, floating in a water tank, is a genuinely impressive and lesser-visited site compared to Kathmandu's more famous temples — worth it if you want to go beyond the standard circuit.", tourCard: { slug: "from-kathmandu-budhanilkantha-temple-guided-tour", title: "From Kathmandu: Budhanilkantha Temple Guided Tour", description: "A guided tour of the Budhanilkantha reclining Vishnu temple.", price: "From $89", duration: "4 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/7669514f5d42d2241f9b6dd22629cc5c90f0a7c2572dc62e1a4785e5644913d0.png" } },
                    { title: "Practical Tips", content: "There's a local legend that no reigning Nepali king could visit the temple, since the Vishnu statue resembles a past king — ask your guide about this story, since it's a genuinely interesting piece of local folklore." }
                ],
                faqs: [
                    { q: "Is the Budhanilkantha Temple tour worth it?", a: "Yes, for a genuinely impressive, less-visited site beyond the standard temple circuit." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "Is the Budhanilkantha tour worth it?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, for a less-visited but impressive site." } }
                ] },
            };

        case "best-durbar-square-tour-bhaktapur":
            return {
                title: "Which Is the Best Durbar Square Tour in Bhaktapur?",
                seoTitle: "Best Bhaktapur Durbar Square Tour 2026 | Comparison",
                description: "Compare real Bhaktapur Durbar Square tours — from a spiritual/local-life angle to a half-day World Heritage city overview.",
                heroImage: "https://res.cloudinary.com/dx2fxyaft/image/upload/v1786438768/tours/bhaktapur/tours/bhaktapur_1786438767711_0.jpg",
                sections: [
                    { title: "The Short Answer", content: "Bhaktapur's Durbar Square, one of three UNESCO-listed Durbar Squares in the Kathmandu Valley, is genuinely less crowded than Kathmandu's own Durbar Square and better preserved — tours here differ mainly in whether they lean into spiritual/local-life context or stick to a general heritage overview.", tourCard: { slug: "bhaktapur-durbar-square-spiritual-tour", title: "Bhaktapur Secrets: Hidden Temples & Local Newari Life", description: "A spiritually-focused tour of Bhaktapur's hidden temples and Newari life.", price: "From $19", duration: "4 hours", image: "https://res.cloudinary.com/dx2fxyaft/image/upload/v1786438768/tours/bhaktapur/tours/bhaktapur_1786438767711_0.jpg" } },
                    { title: "Best General Overview: Half-Day World Heritage City Tour", content: "This covers Bhaktapur's main heritage sites more broadly, a good fit if you want the overview rather than a specific spiritual or local-life angle.", tourCard: { slug: "bhaktapur-nepal-half-day-world-heritage-city-tour", title: "Bhaktapur, Nepal: Half-Day World Heritage City Tour", description: "A half-day overview tour of Bhaktapur's World Heritage sites.", price: "From $159", duration: "4 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/4ddb4adeaffa442ce291decf08996b64bbc88586257c148f50fa129ff03ff863.jpg" } },
                    { title: "Practical Tips", content: "Bhaktapur is genuinely walkable once you're there, and its brick-paved squares and Newari architecture are distinct from both Kathmandu and Patan's Durbar Squares — worth seeing all three if you have time, since each has a different character." }
                ],
                faqs: [
                    { q: "What is the best Durbar Square tour in Bhaktapur?", a: "A spiritual/local-life focused tour for deeper context, or the half-day overview for general heritage sightseeing." },
                    { q: "Is Bhaktapur's Durbar Square different from Kathmandu's?", a: "Yes, each of the valley's three Durbar Squares has distinct architecture and character, and Bhaktapur's is generally less crowded." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "What is the best Durbar Square tour in Bhaktapur?", "acceptedAnswer": { "@type": "Answer", "text": "A spiritual/local-life tour, or the half-day general overview." } },
                    { "@type": "Question", "name": "Is it different from Kathmandu's Durbar Square?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, each has distinct architecture and character." } }
                ] },
            };

        case "best-pottery-workshop-bhaktapur":
            return {
                title: "Which Is the Best Pottery Workshop in Bhaktapur?",
                seoTitle: "Best Bhaktapur Pottery Workshop 2026 | Comparison",
                description: "Compare real pottery workshops in Bhaktapur's famous Pottery Square — a standard local-artisan session versus one combined with Changunarayan Temple.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/010029945717dedd73216b6fb96a9198ffa4db8029d08286991b68ab17b74767.jpeg",
                sections: [
                    { title: "The Short Answer", content: "Bhaktapur's Pottery Square is the real deal — working potters still use traditional wheel-throwing techniques here daily, and a hands-on workshop with a local artisan is a genuinely authentic craft experience.", tourCard: { slug: "bhaktapur-pottery-workshop-with-local-artisan", title: "Bhaktapur: Pottery Workshop with Local Artisan", description: "A hands-on pottery workshop with a local Bhaktapur artisan.", price: "From $137", duration: "3 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/010029945717dedd73216b6fb96a9198ffa4db8029d08286991b68ab17b74767.jpeg" } },
                    { title: "Best Combined with Sightseeing: Changunarayan & Pottery Workshop", content: "This pairs the pottery workshop with a visit to Changunarayan Temple, one of the oldest Hindu temples in the valley, for a fuller day combining craft and heritage.", tourCard: { slug: "bhaktapur-changunarayan-pottery-workshop", title: "Bhaktapur: Changunarayan & Pottery Workshop", description: "A combined Changunarayan Temple visit and pottery workshop.", price: "From $134", duration: "10 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/95df22f1d6c9dab2eec3762e1db9e5241f657195c7e3d93052590eed6d82e741.jpg" } },
                    { title: "Practical Tips", content: "You'll get muddy — wear clothes you don't mind getting dirty, and ask about pickup timing for your finished piece since it needs to be fired after your session." }
                ],
                faqs: [
                    { q: "What is the best pottery workshop in Bhaktapur?", a: "A standard local-artisan session for the craft itself, or add Changunarayan Temple for a fuller day." },
                    { q: "Is Bhaktapur's Pottery Square a real working square?", a: "Yes, potters genuinely work there daily using traditional techniques, not just for tourists." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "What is the best pottery workshop in Bhaktapur?", "acceptedAnswer": { "@type": "Answer", "text": "A standard local-artisan session, or add Changunarayan Temple." } },
                    { "@type": "Question", "name": "Is Pottery Square a real working square?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, potters genuinely work there daily." } }
                ] },
            };

        case "is-changunarayan-hike-worth-it-bhaktapur":
            return {
                title: "Is the Guided Hike to Changunarayan Temple from Bhaktapur Worth It?",
                seoTitle: "Changunarayan Temple Hike Bhaktapur 2026 | Review",
                description: "An honest look at the guided hike to Changunarayan Temple from Bhaktapur, one of the oldest Hindu temples in the Kathmandu Valley.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/916552827839ed7c4606a45159e6ca6e6b46460168d6c6d773ca419de57a10c4.jpg",
                sections: [
                    { title: "The Short Answer", content: "Changunarayan Temple, dating back to the 4th century, is one of the valley's oldest Hindu temples and sits on a hilltop reached by a genuine hike rather than a drive-up visit — worth it for both the temple itself and the valley views along the trail.", tourCard: { slug: "bhaktapur-guided-hike-to-changunarayan-temple", title: "Bhaktapur: Guided Hike to Changunarayan Temple with Transfer", description: "A guided hike to Changunarayan Temple with transfer included.", price: "From $78", duration: "5 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/916552827839ed7c4606a45159e6ca6e6b46460168d6c6d773ca419de57a10c4.jpg" } },
                    { title: "Practical Tips", content: "The hike is moderate rather than strenuous, suitable for most fitness levels — comfortable shoes are enough, no technical hiking gear needed." }
                ],
                faqs: [
                    { q: "Is the Changunarayan Temple hike worth it?", a: "Yes, for one of the valley's oldest temples and genuine trail views along the way." },
                    { q: "How difficult is the hike?", a: "Moderate, suitable for most fitness levels with just comfortable shoes needed." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "Is the Changunarayan hike worth it?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, for one of the valley's oldest temples." } },
                    { "@type": "Question", "name": "How difficult is it?", "acceptedAnswer": { "@type": "Answer", "text": "Moderate, suitable for most fitness levels." } }
                ] },
            };

        case "is-bicycle-heritage-tour-worth-it-bhaktapur":
            return {
                title: "Is the Guided Bicycle Heritage Tour of Bhaktapur Worth It?",
                seoTitle: "Bhaktapur Bicycle Heritage Tour 2026 | Honest Review",
                description: "An honest look at the guided bicycle heritage tour through Bhaktapur, covering more ground than a walking tour.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/736cd0a8aa95951d05bbf2e0ed1b0c3811e2a4fe441d61da6d816b1e605a96e7.jpg",
                sections: [
                    { title: "The Short Answer", content: "Covering Bhaktapur by bicycle lets you reach more of the city's squares, temples, and backstreets than walking alone, while still moving slowly enough to actually see things — a genuinely good middle ground between a car tour and walking.", tourCard: { slug: "bhaktapur-guided-bicycle-heritage-tour", title: "Bhaktapur: Guided Bicycle Heritage Tour", description: "A guided bicycle tour covering Bhaktapur's heritage sites.", price: "From $151", duration: "1 day", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/736cd0a8aa95951d05bbf2e0ed1b0c3811e2a4fe441d61da6d816b1e605a96e7.jpg" } },
                    { title: "Practical Tips", content: "Bhaktapur's streets are narrow and sometimes cobbled — comfortable with cycling on uneven surfaces matters more here than raw fitness." }
                ],
                faqs: [
                    { q: "Is the bicycle heritage tour worth it?", a: "Yes, a good middle ground between a car tour and walking, covering more ground while staying slow enough to see things." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "Is the bicycle heritage tour worth it?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, a good middle ground between driving and walking." } }
                ] },
            };

        case "is-woodcarving-workshop-worth-it-bhaktapur":
            return {
                title: "Is the Woodcarving Workshop in Bhaktapur Worth It?",
                seoTitle: "Bhaktapur Woodcarving Workshop 2026 | Honest Review",
                description: "An honest look at Bhaktapur's traditional Newari woodcarving workshop with lunch included.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/20c935b9e63503edf0e230be1f96715ade87e72329847b6a10ff99bd4f4c99e1.jpg",
                sections: [
                    { title: "The Short Answer", content: "Bhaktapur's intricately carved wooden window frames and temple struts are a Newari craft tradition you can see throughout the city — this workshop teaches the basics hands-on, with a traditional Newari lunch included, genuinely worthwhile if pottery alone doesn't cover your craft interest.", tourCard: { slug: "bhaktapur-tour-with-a-woodcarving-workshop-newari", title: "Bhaktapur: Tour with a Woodcarving Workshop & Newari Lunch", description: "A woodcarving workshop combined with a traditional Newari lunch.", price: "From $151", duration: "1 day", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/20c935b9e63503edf0e230be1f96715ade87e72329847b6a10ff99bd4f4c99e1.jpg" } },
                    { title: "Practical Tips", content: "Look up at the carved window frames and temple struts around the city before or after this workshop — it's much easier to appreciate the craft once you've tried it yourself." }
                ],
                faqs: [
                    { q: "Is the woodcarving workshop worth it?", a: "Yes, a genuine Newari craft tradition you'll then recognize throughout the city, plus a traditional lunch." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "Is the woodcarving workshop worth it?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, a genuine Newari craft tradition with lunch included." } }
                ] },
            };

        case "bhaktapur-travel-guide-2026":
            return {
                title: "Bhaktapur Travel Guide 2026",
                description: "What visitors need to know about Bhaktapur, the Kathmandu Valley's best-preserved medieval city.",
                heroImage: "https://res.cloudinary.com/dx2fxyaft/image/upload/v1786438768/tours/bhaktapur/tours/bhaktapur_1786438767711_0.jpg",
                sections: [
                    { title: "Why Visit", content: "Bhaktapur is the Kathmandu Valley's best-preserved medieval city, with a UNESCO-listed Durbar Square, a genuine working Pottery Square, and Newari woodcarving traditions still visible throughout the city." }
                ],
                faqs: [
                    { q: "Is Bhaktapur worth visiting?", a: "Yes, for its well-preserved medieval architecture and living craft traditions, genuinely distinct from Kathmandu itself." }
                ],
            };

        case "best-buddhas-birthplace-tour-lumbini":
            return {
                title: "Which Is the Best Buddha's Birthplace Tour in Lumbini?",
                seoTitle: "Best Lumbini Buddha Birthplace Tour 2026 | Comparison",
                description: "Compare real Lumbini day tours to Buddha's birthplace — a spiritual-focused version versus a standard guided day tour.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/36db59dd55bb2788cf80fe08e90573f2d03f5d998a08f81ca2802f52eea97fcb.jpg",
                sections: [
                    { title: "The Short Answer", content: "Lumbini, the UNESCO-listed birthplace of Buddha, is a significant pilgrimage site for Buddhists worldwide and a genuinely peaceful, meaningful visit even for non-religious travellers interested in the history — both tour versions cover the Maya Devi Temple and sacred garden, differing mainly in depth and pacing.", tourCard: { slug: "lumbini-buddhist-spiritual-tour-of-buddhas", title: "Lumbini: Buddhist Spiritual Tour of Buddha's Birthplace", description: "A spiritually-focused tour of Buddha's birthplace.", price: "From $83", duration: "7 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/36db59dd55bb2788cf80fe08e90573f2d03f5d998a08f81ca2802f52eea97fcb.jpg" } },
                    { title: "Alternative: Guided Day Tour to Buddha's Birthplace", content: "A standard guided version covering the same core sites at a different pace and price point.", tourCard: { slug: "lumbini-guided-day-tour-to-buddhas-birthplace", title: "Lumbini: Guided Day Tour to Buddha's Birthplace", description: "A standard guided day tour of Buddha's birthplace.", price: "From $124", duration: "5 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/eb70d1e873150178.jpeg" } },
                    { title: "Practical Tips", content: "Lumbini is genuinely quiet and contemplative compared to Nepal's more touristy sites — dress modestly and expect a slower, more reflective pace than a typical sightseeing stop." }
                ],
                faqs: [
                    { q: "What is the best Buddha's birthplace tour in Lumbini?", a: "Either version covers the Maya Devi Temple and sacred garden — the spiritual version leans deeper into the religious context." },
                    { q: "Is Lumbini worth visiting for non-Buddhists?", a: "Yes, it's a UNESCO World Heritage site with genuine historical significance beyond its religious importance." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "What is the best Buddha's birthplace tour?", "acceptedAnswer": { "@type": "Answer", "text": "Either version covers the Maya Devi Temple and sacred garden." } },
                    { "@type": "Question", "name": "Is it worth visiting for non-Buddhists?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, a UNESCO site with genuine historical significance." } }
                ] },
            };

        case "is-beyond-lumbini-tour-worth-it":
            return {
                title: "Is the Beyond Lumbini Tour (Kapilvastu, Ramgram, Devdaha) Worth It?",
                seoTitle: "Beyond Lumbini Tour 2026 | Honest Review",
                description: "An honest look at the Beyond Lumbini day tour covering Kapilvastu, Ramgram, and Devdaha — lesser-known Buddhist archaeological sites.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/e472178f6514c2d1fc9a8681d5daea3fdc47f3ee0da18c94bb438bad776cb299.png",
                sections: [
                    { title: "The Short Answer", content: "These are genuinely lesser-known archaeological sites connected to Buddha's early life — Kapilvastu (his childhood home), Ramgram, and Devdaha — worthwhile specifically for travellers who've already seen Lumbini itself and want deeper Buddhist history rather than a repeat visit.", tourCard: { slug: "beyond-lumbini-kapilvastu-ramgram-devdaha-and", title: "Beyond Lumbini: Kapilvastu, Ramgram & Devdaha and Lunch", description: "A day tour covering Kapilvastu, Ramgram, and Devdaha with lunch.", price: "From $59", duration: "8 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/e472178f6514c2d1fc9a8681d5daea3fdc47f3ee0da18c94bb438bad776cb299.png" } },
                    { title: "Practical Tips", content: "These sites are more archaeological than visually dramatic — a knowledgeable guide adds real value here since the historical significance isn't always obvious from the ruins alone." }
                ],
                faqs: [
                    { q: "Is the Beyond Lumbini tour worth it?", a: "Yes, for travellers who've already seen Lumbini and want deeper Buddhist history at lesser-known sites." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "Is the Beyond Lumbini tour worth it?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, for deeper Buddhist history beyond Lumbini itself." } }
                ] },
            };

        case "is-crane-watching-tour-worth-it-lumbini":
            return {
                title: "Is the Crane Spotting/Watching Tour in Lumbini Worth It?",
                seoTitle: "Lumbini Crane Watching Tour 2026 | Honest Review",
                description: "An honest look at Lumbini's crane spotting and watching tour, a genuinely different nature-focused activity in a mainly spiritual destination.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/926d8bfa5c653d5e223b0daeecd15578b770207b19acd2021b2cfdbdf1e389a5.jpg",
                sections: [
                    { title: "The Short Answer", content: "Lumbini's surrounding wetlands host Sarus cranes, among the tallest flying birds in the world — a genuinely different, nature-focused activity in a destination mostly known for spiritual sites, worth it for birdwatchers or anyone wanting variety beyond temples.", tourCard: { slug: "lumbini-crane-spotting-watching-tour", title: "Lumbini: Crane Spotting/Watching Tour", description: "A crane spotting tour in Lumbini's surrounding wetlands.", price: "From $130", duration: "3 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/926d8bfa5c653d5e223b0daeecd15578b770207b19acd2021b2cfdbdf1e389a5.jpg" } },
                    { title: "Practical Tips", content: "Early morning or late afternoon gives the best chance of sightings, when the cranes are most active." }
                ],
                faqs: [
                    { q: "Is the crane watching tour in Lumbini worth it?", a: "Yes, a genuinely different nature-focused activity for birdwatchers or those wanting variety beyond temples." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "Is the crane watching tour worth it?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, a different nature-focused activity for birdwatchers." } }
                ] },
            };

        case "lumbini-travel-guide-2026":
            return {
                title: "Lumbini Travel Guide 2026",
                description: "What visitors need to know about Lumbini, the UNESCO-listed birthplace of Buddha.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/36db59dd55bb2788cf80fe08e90573f2d03f5d998a08f81ca2802f52eea97fcb.jpg",
                sections: [
                    { title: "Why Visit", content: "Lumbini is the UNESCO World Heritage birthplace of Buddha, a major pilgrimage site with the Maya Devi Temple, a sacred garden, and monasteries built by Buddhist communities from around the world." }
                ],
                faqs: [
                    { q: "Is Lumbini worth visiting?", a: "Yes, as a UNESCO World Heritage site of major religious and historical significance." }
                ],
            };

        case "is-suspension-bridge-tour-worth-it-pokhara":
            return {
                title: "Is the Suspension Bridge Tour Worth It in Pokhara?",
                seoTitle: "Pokhara Suspension Bridge Tour 2026 | Honest Review",
                description: "An honest look at Pokhara's two-iconic-suspension-bridge tour, a half-day sightseeing option distinct from the city's usual trekking and paragliding.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/be31790d6120647c17be3327d2518e72133c248624aedc8834d355238eebc27e.jpg",
                sections: [
                    { title: "The Short Answer", content: "This tour visits two of Pokhara's well-known suspension bridges, a relaxed half-day sightseeing option for travellers wanting scenic views without committing to a multi-day trek or an aerial activity like paragliding.", tourCard: { slug: "2-iconic-suspension-bridge-tour-in-pokhara", title: "2 Iconic Suspension Bridge Tour in Pokhara", description: "A half-day tour of two of Pokhara's iconic suspension bridges.", price: "From $58", duration: "4 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/be31790d6120647c17be3327d2518e72133c248624aedc8834d355238eebc27e.jpg" } },
                    { title: "Practical Tips", content: "A good option to pair with a lower-key day between longer treks or an early-morning Sarangkot sunrise outing." }
                ],
                faqs: [
                    { q: "Is the suspension bridge tour worth it in Pokhara?", a: "Yes, as a relaxed half-day sightseeing option that doesn't require trekking fitness or heights tolerance beyond crossing a bridge." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "Is the suspension bridge tour worth it in Pokhara?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, as a relaxed half-day sightseeing option." } }
                ] },
            };

        case "is-atv-tour-worth-it-pokhara":
            return {
                title: "Is the ATV Tour Worth It in Pokhara?",
                seoTitle: "Pokhara ATV Tour 2026 | Honest Review",
                description: "An honest look at Pokhara's ATV tour, a short off-road adventure option distinct from the city's usual trekking, boating, and paragliding.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/802713e6006ed1e0.jpeg",
                sections: [
                    { title: "The Short Answer", content: "Riding an ATV through Pokhara's surrounding countryside and riverbed trails gives a quick adrenaline fix without the time commitment of a trek, a genuinely different activity type from the lake and mountain-view tours most visitors do.", tourCard: { slug: "atv-tours-rev-up-your-adventure", title: "ATV Tours: Rev Up Your Adventure", description: "An off-road ATV riding tour around Pokhara.", price: "From $58", duration: "2 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/802713e6006ed1e0.jpeg" } },
                    { title: "Practical Tips", content: "No prior riding experience is needed — guides brief you on controls before setting off." }
                ],
                faqs: [
                    { q: "Is the ATV tour worth it in Pokhara?", a: "Yes, for a quick adrenaline activity that's genuinely different from the city's trekking and boating options." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "Is the ATV tour worth it in Pokhara?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, for a quick off-road adrenaline activity." } }
                ] },
            };

        case "best-chitwan-jungle-safari-tour-pokhara":
            return {
                title: "Best Chitwan Jungle Safari Tour from Pokhara",
                seoTitle: "Pokhara to Chitwan Jungle Safari 2026 | Best Tours",
                description: "An honest look at Chitwan National Park jungle safari packages departing from Pokhara, a multi-day add-on distinct from the city's lake and mountain activities.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/5ec4c0bae6df052a83a4e3e725e4356d952d7e04e909b3b3c3e04e20787f95bb.jpeg",
                sections: [
                    { title: "The Short Answer", content: "Chitwan National Park is a multi-day jungle safari add-on, not a day trip, with rhino, elephant, and possibly tiger sightings on jeep or canoe safaris — a genuinely different landscape from Pokhara's lake and mountain scenery.", tourCard: { slug: "chitwan-national-park-2-night-3-days-jungle-safari", title: "Chitwan National Park: 2 Night 3 Days Jungle Safari", description: "A 3-day jungle safari package to Chitwan National Park from Pokhara.", price: "From $241", duration: "3 days", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/5ec4c0bae6df052a83a4e3e725e4356d952d7e04e909b3b3c3e04e20787f95bb.jpeg" } },
                    { title: "Practical Tips", content: "Pack layers for jeep safaris, which run early morning and evening when wildlife is most active." }
                ],
                faqs: [
                    { q: "Is Chitwan worth visiting from Pokhara?", a: "Yes, for a genuinely different jungle and wildlife experience from Pokhara's lake and mountain scenery, though it requires a multi-day commitment." },
                    { q: "How long is the Chitwan safari from Pokhara?", a: "This package runs 2 nights and 3 days, including jeep and canoe safaris inside the park." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "Is Chitwan worth visiting from Pokhara?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, for a different jungle and wildlife experience from Pokhara's lake and mountain scenery." } }
                ] },
            };

        case "is-horseback-riding-worth-it-pokhara":
            return {
                title: "Is Horseback Riding Worth It in Pokhara?",
                seoTitle: "Pokhara Horseback Riding 2026 | Honest Review",
                description: "An honest look at Pokhara's horseback riding adventure, a relaxed alternative to trekking for covering scenic ground near Phewa Lake.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/dcecd9ea05c045f2c19d2f9240551603c912f7bcd5f47145f575bfbcbf35aedb.jpg",
                sections: [
                    { title: "The Short Answer", content: "This 2.5-hour horseback ride covers scenic countryside around Pokhara at a relaxed pace, a good option for travellers who want mountain views and fresh air without hiking on foot.", tourCard: { slug: "from-pokhara-25-hour-horseback-riding-adventure", title: "From Pokhara: 2.5-Hour Horseback Riding Adventure", description: "A 2.5-hour horseback riding adventure through Pokhara's countryside.", price: "From $59", duration: "2.5 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/dcecd9ea05c045f2c19d2f9240551603c912f7bcd5f47145f575bfbcbf35aedb.jpg" } },
                    { title: "Practical Tips", content: "No riding experience is required, and the pace is suited to beginners rather than experienced riders wanting a gallop." }
                ],
                faqs: [
                    { q: "Is horseback riding worth it in Pokhara?", a: "Yes, as a relaxed way to see scenic countryside without the physical demands of trekking." },
                    { q: "Do I need riding experience for horseback riding in Pokhara?", a: "No, the tour is designed for beginners with no prior experience." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "Is horseback riding worth it in Pokhara?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, as a relaxed alternative to trekking for scenic countryside views." } }
                ] },
            };

        default:
            return null;
    }
}

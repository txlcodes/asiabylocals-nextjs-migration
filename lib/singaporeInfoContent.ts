import { CityInfoData } from './cityInfoContent';

export function getSingaporeInfoContent(slug: string): CityInfoData | null {
    switch (slug) {
        case "best-gardens-by-the-bay-tour-singapore":
            return {
                title: "Which Is the Best Gardens by the Bay Tour in Singapore?",
                seoTitle: "Best Gardens by the Bay Tour Singapore 2026 | Honest Comparison",
                description: "Compare real Gardens by the Bay options in Singapore — from a $25 basic admission ticket to the night tour with conservatory access.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/d3e7932b4a0cf4e6b644e72457dd871f0f0fb00a360372e3998a53698b1bd2df.jpeg",
                sections: [
                    { title: "The Short Answer", content: "The Supertree Grove is free to walk through at any time, but the Cloud Forest and Flower Dome conservatories need a ticket. A basic admission ticket covers the conservatories; a night tour adds the light show and after-dark atmosphere.", tourCard: { slug: "gardens-by-the-bay-admission-ticket", title: "Gardens by the Bay Admission Ticket", description: "Standard entry to the Cloud Forest and Flower Dome conservatories.", price: "From $25", duration: "3.5 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/d3e7932b4a0cf4e6b644e72457dd871f0f0fb00a360372e3998a53698b1bd2df.jpeg" } },
                    { title: "Best for Evenings: Night Tour & Conservatory Tickets", content: "This combines conservatory access with the Garden Rhapsody light show at the Supertree Grove, timed for evening visits.", tourCard: { slug: "gardens-by-the-bay-night-tour-conservatory-tickets", title: "Gardens by the Bay Night Tour & Conservatory Tickets", description: "Conservatory access plus the evening light show.", price: "From $81", duration: "2 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/8e8577d350e02f68b2ea8b515324155003c09fb0805cb8c481c2af087f3e3640.jpg" } },
                    { title: "Practical Tips", content: "The Garden Rhapsody light show runs free nightly at the Supertree Grove even without a conservatory ticket — only pay for conservatory entry if you specifically want the Cloud Forest/Flower Dome." }
                ],
                faqs: [
                    { q: "Is Gardens by the Bay free?", a: "The outdoor Supertree Grove and nightly light show are free; the Cloud Forest and Flower Dome conservatories require a paid ticket." },
                    { q: "What's the best time to visit Gardens by the Bay?", a: "Evening, to catch the free Garden Rhapsody light show after conservatory visiting hours." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "Is Gardens by the Bay free?", "acceptedAnswer": { "@type": "Answer", "text": "The Supertree Grove and light show are free; conservatories need a ticket." } },
                    { "@type": "Question", "name": "Best time to visit?", "acceptedAnswer": { "@type": "Answer", "text": "Evening for the free light show." } }
                ] },
            };

        case "best-chinatown-walking-tour-singapore":
            return {
                title: "Which Is the Best Chinatown Walking Tour in Singapore?",
                seoTitle: "Best Chinatown Walking Tour Singapore 2026 | Honest Comparison",
                description: "Compare real Chinatown walking tours in Singapore — from a $70 historic walk with lunch to the UNESCO hawker food tasting tour.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/f46f7e59de5f8bb8.jpeg",
                sections: [
                    { title: "The Short Answer", content: "Singapore's Chinatown mixes temples, shophouses, and some of the city's best hawker food — most tours lean either heritage-focused or food-focused.", tourCard: { slug: "singapore-chinatown-historic-walking-tour-with", title: "Singapore: Chinatown Historic Walking Tour with Lunch", description: "A heritage-focused walk through Chinatown with lunch included.", price: "From $70", duration: "3.5 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/f46f7e59de5f8bb8.jpeg" } },
                    { title: "Best for Food: UNESCO Hawker Culture Tasting Tour", content: "This leans into Singapore's UNESCO-recognized hawker culture with multiple food stops through Chinatown's hawker centres.", tourCard: { slug: "unesco-hawker-culture-chinatown-food-tasting-tour", title: "UNESCO Hawker Culture: Chinatown Food Tasting Tour", description: "A food-focused tour through Chinatown's hawker culture.", price: "From $117", duration: "3 hours", image: "https://images.asiabylocals.com/asiabylocals/tours/sg-684974/img0/1600.webp" } },
                    { title: "Best Multi-District: Chinatown, Little India & Arab Street", content: "If you want more than just Chinatown, this extends the walk into Little India and Arab Street, covering three of Singapore's most distinct ethnic enclaves in one tour.", tourCard: { slug: "singapore-chinatown-little-india-arab-street", title: "Singapore: Chinatown, Little India, Arab Street Walking Tour", description: "A multi-district heritage walk covering three ethnic enclaves.", price: "From $149", duration: "4 hours", image: "https://images.asiabylocals.com/asiabylocals/tours/sg-997547/img0/1600.webp" } },
                    { title: "Practical Tips", content: "Morning tours avoid the midday heat; food-focused tours are best done hungry, since multiple tastings are usually packed into 2-3 hours." }
                ],
                faqs: [
                    { q: "What is the best Chinatown walking tour in Singapore?", a: "A heritage walk with lunch suits most visitors; pick the hawker food tour if eating is your priority." },
                    { q: "Can Chinatown be combined with other districts?", a: "Yes, several tours combine it with Little India and Arab Street in one walk." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "Best Chinatown walking tour?", "acceptedAnswer": { "@type": "Answer", "text": "A heritage walk with lunch suits most visitors." } },
                    { "@type": "Question", "name": "Can Chinatown be combined with other districts?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, with Little India and Arab Street." } }
                ] },
            };

        case "best-night-safari-tour-singapore":
            return {
                title: "Which Is the Best Night Safari Tour in Singapore?",
                seoTitle: "Best Night Safari Tour Singapore 2026 | Honest Comparison",
                description: "Compare real Night Safari options in Singapore — from a $67 entry-with-show ticket to the guided tour with hotel pickup.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/cf0ca5b5db7e8a558963e6fe31da34194ee7744baf7695b0bd5d11a9cf123df0.jpeg",
                sections: [
                    { title: "The Short Answer", content: "Night Safari lets you see nocturnal animals active after dark, something the daytime zoo can't offer. A basic entry ticket with show covers the essentials; guided and tram-ride versions add convenience and narration.", tourCard: { slug: "night-safari-entry-ticket-with-show", title: "Night Safari Entry Ticket with Show", description: "Standard entry including the Creatures of the Night show.", price: "From $67", duration: "3 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/cf0ca5b5db7e8a558963e6fe31da34194ee7744baf7695b0bd5d11a9cf123df0.jpeg" } },
                    { title: "Best with Hotel Pickup: Night Safari with Tram Ride", content: "This adds hotel pickup and a tram ride through the park, removing the need to arrange your own transport after dark.", tourCard: { slug: "singapore-night-safari-with-tram-ride-hotel-pickup", title: "Singapore: Night Safari with Tram Ride & Hotel Pickup", description: "Night Safari with tram ride and hotel transfer.", price: "From $87", duration: "3.5 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/1023f82ce6abf6691cbb1ab35a508553705b7eca087286ecd5be9d628cbf3043.png" } },
                    { title: "Practical Tips", content: "The tram ride covers more ground than walking trails alone in the limited evening hours, so it's worth the extra cost if you want to see the most animals in one visit." }
                ],
                faqs: [
                    { q: "What is the best Night Safari tour in Singapore?", a: "A basic entry-with-show ticket suits most visitors; add hotel pickup if you don't want to arrange your own transport after dark." },
                    { q: "Is the tram ride worth it at Night Safari?", a: "Yes, it covers more ground than walking alone in the limited evening visiting hours." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "Best Night Safari tour?", "acceptedAnswer": { "@type": "Answer", "text": "A basic entry-with-show ticket suits most visitors." } },
                    { "@type": "Question", "name": "Is the tram ride worth it?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, it covers more ground in limited evening hours." } }
                ] },
            };

        case "best-night-river-cruise-singapore":
            return {
                title: "Which Is the Best Night River Cruise in Singapore?",
                seoTitle: "Best Night River Cruise Singapore 2026 | Honest Comparison",
                description: "Compare real Singapore River cruise options — from a $41 basic entry ticket to the night cruise bundled with two light shows.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/42af13c774a011a22fa7f3675fd9c2be05dbc78ee9d1f70c3ec4f84a94377a43.jpg",
                sections: [
                    { title: "The Short Answer", content: "A river cruise along the Singapore River gives skyline views of Marina Bay Sands and the CBD from the water. A basic ticket covers just the cruise; night versions bundle in the Spectra and Garden Rhapsody light shows.", tourCard: { slug: "singapore-river-cruise-entry-tickets-pvt-return", title: "Singapore River Cruise Entry Tickets & PVT Return Transfers", description: "A basic river cruise ticket with private return transfers.", price: "From $41", duration: "45 minutes", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/42af13c774a011a22fa7f3675fd9c2be05dbc78ee9d1f70c3ec4f84a94377a43.jpg" } },
                    { title: "Best Value Combo: Night Cruise & 2 Shows", content: "This bundles the river cruise with both the Spectra light show at Marina Bay and the Garden Rhapsody show at Gardens by the Bay, plus hotel transfer.", tourCard: { slug: "night-river-cruise-2-shows-complimentary-hotel", title: "Night River Cruise & 2 Shows + Complimentary Hotel Transfer", description: "A river cruise bundled with two light shows and hotel transfer.", price: "From $46", duration: "4 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/e1e78c995dbd10cf815432117e17ec80d43ed6978c37511661c2ca22bebec8ae.png" } },
                    { title: "Practical Tips", content: "Evening cruises timed around the Spectra show (nightly at Marina Bay) give the best combination of skyline views and the light show without needing two separate outings." }
                ],
                faqs: [
                    { q: "What is the best night river cruise in Singapore?", a: "A combo including both the Spectra and Garden Rhapsody shows gives the most value for a similar price to a basic cruise." },
                    { q: "How long is a Singapore River cruise?", a: "A basic cruise runs about 45 minutes; combo packages with shows run 3-4 hours total." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "Best night river cruise?", "acceptedAnswer": { "@type": "Answer", "text": "A combo with both Spectra and Garden Rhapsody shows gives the most value." } },
                    { "@type": "Question", "name": "How long is the cruise?", "acceptedAnswer": { "@type": "Answer", "text": "About 45 minutes for a basic cruise." } }
                ] },
            };

        case "best-sentosa-tour-singapore":
            return {
                title: "Which Is the Best Sentosa Tour in Singapore?",
                seoTitle: "Best Sentosa Tour Singapore 2026 | Honest Comparison",
                description: "Compare real Sentosa Island tours — from a $44 guided walk with Fort Siloso to the multi-attraction island discovery tour.",
                heroImage: "https://images.asiabylocals.com/asiabylocals/tours/sg-1200610/img0/1600.webp",
                sections: [
                    { title: "The Short Answer", content: "Sentosa packs beaches, Fort Siloso's wartime history, and major attractions like Universal Studios into one island. A focused walking tour suits history-minded visitors; a multi-attraction tour suits those who want to see as much as possible in one visit.", tourCard: { slug: "sentosa-guided-walking-tour-with-fort-siloso", title: "Sentosa: Guided Walking Tour with Fort Siloso & Beach Views", description: "A guided walk covering Fort Siloso and Sentosa's beaches.", price: "From $44", duration: "2 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/84a34b691d3f74f751818a05cfb927628c7686370b36f6acdfe5dbfc25d52891.jpg" } },
                    { title: "Best for Seeing Everything: Island Discovery Tour (4 Attractions)", content: "This covers four separate Sentosa attractions in one guided outing, the most efficient way to see the island without planning your own route between sights.", tourCard: { slug: "sentosa-island-discovery-guided-tour-featuring-4", title: "Sentosa Island Discovery Guided Tour Featuring 4 Attractions", description: "A guided tour covering four Sentosa attractions in one visit.", price: "From $192", duration: "7 hours", image: "https://images.asiabylocals.com/asiabylocals/tours/sg-1200610/img0/1600.webp" } },
                    { title: "Practical Tips", content: "Sentosa is reachable by cable car, monorail, or on foot via a boardwalk — factor your preferred route into which tour package you pick, since some bundle cable car rides in." }
                ],
                faqs: [
                    { q: "What is the best Sentosa tour?", a: "A focused Fort Siloso walk suits history-minded visitors; the 4-attraction tour suits those wanting to see the most in one visit." },
                    { q: "How do you get to Sentosa?", a: "By cable car, monorail, or on foot via a boardwalk." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "Best Sentosa tour?", "acceptedAnswer": { "@type": "Answer", "text": "A Fort Siloso walk suits history-minded visitors; the 4-attraction tour suits those wanting more." } },
                    { "@type": "Question", "name": "How do you get to Sentosa?", "acceptedAnswer": { "@type": "Answer", "text": "By cable car, monorail, or boardwalk." } }
                ] },
            };

        case "best-food-tour-singapore":
            return {
                title: "Which Is the Best Food Tour in Singapore?",
                seoTitle: "Best Food Tour Singapore 2026 | Honest Comparison",
                description: "Compare real Singapore hawker food tours — from a 9-tasting local hawker tour to the Chinatown-focused 7-tasting version.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/ed069c4929639d85ffca84e58321deac09361a8698fdcb43ecf9ea6301d50624.jpg",
                sections: [
                    { title: "The Short Answer", content: "Singapore's hawker centres are UNESCO-recognized, and most food tours work through multiple stalls across several dishes with a local guide explaining the food's history.", tourCard: { slug: "singapore-local-hawker-food-tour-with-9-tastings", title: "Singapore: Local Hawker Food Tour with 9 tastings", description: "A citywide hawker food tour with 9 tastings.", price: "From $111", duration: "3 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/ed069c4929639d85ffca84e58321deac09361a8698fdcb43ecf9ea6301d50624.jpg" } },
                    { title: "Best Chinatown-Focused: Hawkers Food Tour with 7 Tastings", content: "This keeps the food tour concentrated within Chinatown's hawker centres specifically, rather than spreading across the wider city.", tourCard: { slug: "singapore-chinatown-hawkers-food-tour-with-7-food", title: "Singapore: Chinatown Hawkers Food Tour with 7 Food Tastings", description: "A Chinatown-focused hawker food tour with 7 tastings.", price: "From $146", duration: "3.5 hours", image: "https://images.asiabylocals.com/asiabylocals/tours/sg-224655/img0/1600.webp" } },
                    { title: "Practical Tips", content: "Go hungry — these tours pack multiple full tastings into 3-3.5 hours, and most guides recommend skipping a big breakfast beforehand." }
                ],
                faqs: [
                    { q: "What is the best food tour in Singapore?", a: "A 9-tasting citywide hawker tour covers the most ground; a Chinatown-focused version suits those staying centrally." },
                    { q: "Should I eat before a Singapore food tour?", a: "No, go hungry — most tours pack in several full tastings." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "Best food tour in Singapore?", "acceptedAnswer": { "@type": "Answer", "text": "A 9-tasting citywide hawker tour covers the most ground." } },
                    { "@type": "Question", "name": "Should I eat before?", "acceptedAnswer": { "@type": "Answer", "text": "No, go hungry." } }
                ] },
            };

        case "best-little-india-tour-singapore":
            return {
                title: "Is Singapore's Little India Tour Worth It?",
                seoTitle: "Little India Singapore Tour 2026 | Honest Review",
                description: "An honest look at the guided Little India walking tour in Singapore and its local food angle.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/255bd3ff88de585e13ae7c64d0a54f880e3cf19a9ceeab14a2045f4d1cbe8d0c.png",
                sections: [
                    { title: "The Short Answer", content: "This guided walk combines Little India's temples and markets with local food stops, giving a sensory introduction to one of Singapore's most distinct ethnic enclaves.", tourCard: { slug: "singapore-little-india-and-local-flavours-guided", title: "Singapore: Little India and Local Flavours Guided Tour", description: "A guided walk through Little India with local food stops.", price: "From $121", duration: "3 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/255bd3ff88de585e13ae7c64d0a54f880e3cf19a9ceeab14a2045f4d1cbe8d0c.png" } },
                    { title: "Practical Tips", content: "Little India is at its liveliest in the late afternoon and evening, when markets and food stalls are busiest — book an afternoon slot rather than a morning one." }
                ],
                faqs: [
                    { q: "Is the Little India tour worth it?", a: "Yes, especially the combined food-and-culture version, for a genuine sensory introduction to the district." },
                    { q: "When is the best time to visit Little India?", a: "Late afternoon to evening, when it's liveliest." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "Is the Little India tour worth it?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, for a genuine sensory introduction to the district." } },
                    { "@type": "Question", "name": "Best time to visit?", "acceptedAnswer": { "@type": "Answer", "text": "Late afternoon to evening." } }
                ] },
            };

        case "best-marina-bay-sands-skypark-tour-singapore":
            return {
                title: "Is Marina Bay Sands SkyPark Worth It in Singapore?",
                seoTitle: "Marina Bay Sands SkyPark Singapore 2026 | Honest Comparison",
                description: "Compare real Marina Bay Sands SkyPark options — from a standalone ticket to the night tour bundled with a river cruise.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/532b4400d3dbdf8ae525827dba53ae1639d03a5a3da9106eb61e6fbd40ca16a5.jpeg",
                sections: [
                    { title: "The Short Answer", content: "SkyPark's observation deck gives the single best skyline view in Singapore, looking down on Gardens by the Bay and the CBD. A standalone ticket covers just the deck; combo packages add a river cruise and light show.", tourCard: { slug: "marina-bay-sands-skypark-entry-tickets-with-hotel", title: "Marina Bay Sands SkyPark Entry Tickets with Hotel Transfers", description: "Standalone SkyPark observation deck access with hotel transfer.", price: "From $87", duration: "1.5 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/532b4400d3dbdf8ae525827dba53ae1639d03a5a3da9106eb61e6fbd40ca16a5.jpeg" } },
                    { title: "Best Combo: Night Tour with River Cruise & SkyPark", content: "This bundles SkyPark with a river cruise and the Spectra light show, giving three major Marina Bay experiences in one evening.", tourCard: { slug: "singapore-night-tour-with-river-cruise-skypark", title: "Singapore: Night Tour with River Cruise, SkyPark & Spectra", description: "SkyPark bundled with a river cruise and the Spectra show.", price: "From $224", duration: "4.5 hours", image: "https://images.asiabylocals.com/asiabylocals/tours/sg-1185318/img0/1600.webp" } },
                    { title: "Practical Tips", content: "Sunset is the single best time to be on the SkyPark deck, catching both daylight and night skyline views in one visit." }
                ],
                faqs: [
                    { q: "Is Marina Bay Sands SkyPark worth it?", a: "Yes, for the best skyline view in Singapore — go at sunset for the best of both daylight and night views." },
                    { q: "What's the best time to visit SkyPark?", a: "Sunset." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "Is SkyPark worth it?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, for the best skyline view in Singapore." } },
                    { "@type": "Question", "name": "Best time to visit?", "acceptedAnswer": { "@type": "Answer", "text": "Sunset." } }
                ] },
            };

        case "best-cable-car-tour-singapore":
            return {
                title: "Which Is the Best Cable Car Tour in Singapore?",
                seoTitle: "Best Cable Car Tour Singapore 2026 | Honest Comparison",
                description: "Compare real Sentosa cable car options — from a round-trip ticket to the combo with Sky Helix and Wings of Time show.",
                heroImage: "https://images.asiabylocals.com/asiabylocals/tours/sg-1323967/img0/1600.webp",
                sections: [
                    { title: "The Short Answer", content: "The cable car to Sentosa gives aerial views over the harbour on the way to the island, and can be done standalone or bundled with other Sentosa attractions.", tourCard: { slug: "singapore-round-trip-aerial-cable-car-ticket", title: "Singapore: Round-Trip Aerial Cable Car Ticket", description: "A standalone round-trip cable car ticket to Sentosa.", price: "From $93", duration: "8 hours", image: "https://images.asiabylocals.com/asiabylocals/tours/sg-1323967/img0/1600.webp" } },
                    { title: "Best Combo: Cable Car, Sky Helix & Wings of Time", content: "This bundles the cable car with the Sky Helix observation tower and the Wings of Time evening show, covering three Sentosa experiences with one hotel transfer.", tourCard: { slug: "cable-car-sky-helix-wings-of-time-with-hotel", title: "Cable Car, Sky Helix & Wings of Time with Hotel Transfers", description: "Cable car combined with Sky Helix and the Wings of Time show.", price: "From $127", duration: "6 hours", image: "https://images.asiabylocals.com/asiabylocals/tours/sg-1217170/img0/1600.webp" } },
                    { title: "Practical Tips", content: "Pair the cable car ride with Wings of Time (an evening light-and-water show) if you're already going to be on Sentosa after dark." }
                ],
                faqs: [
                    { q: "What is the best cable car tour in Singapore?", a: "A standalone ticket suits a quick trip; the Sky Helix and Wings of Time combo covers more in one visit." },
                    { q: "Is the cable car the only way to Sentosa?", a: "No, monorail and a walking boardwalk are also options." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "Best cable car tour?", "acceptedAnswer": { "@type": "Answer", "text": "A standalone ticket suits a quick trip." } },
                    { "@type": "Question", "name": "Is cable car the only way to Sentosa?", "acceptedAnswer": { "@type": "Answer", "text": "No, monorail and boardwalk too." } }
                ] },
            };

        case "best-botanic-gardens-tour-singapore":
            return {
                title: "Which Is the Best Botanic Gardens Tour in Singapore?",
                seoTitle: "Best Botanic Gardens Tour Singapore 2026 | Honest Comparison",
                description: "Compare real Singapore Botanic Gardens tours — from a $52 UNESCO gems walk to the private orchid garden tour.",
                heroImage: "https://images.asiabylocals.com/asiabylocals/tours/sg-1336052/img0/1600.webp",
                sections: [
                    { title: "The Short Answer", content: "Singapore Botanic Gardens is a free-entry UNESCO World Heritage Site, so guided tours sell knowledge and access (like the National Orchid Garden) rather than entry itself.", tourCard: { slug: "singapore-discover-unesco-botanic-garden-gems", title: "Singapore: Discover UNESCO Botanic Garden gems, rare orchids", description: "A guided walk highlighting the gardens' UNESCO-listed highlights and rare orchids.", price: "From $52", duration: "2 hours", image: "https://images.asiabylocals.com/asiabylocals/tours/sg-1319999/img0/1600.webp" } },
                    { title: "Best for a Private Experience: Botanic Gardens & Orchid Garden Private Tour", content: "This runs as a private tour rather than a group walk, giving more flexibility to linger at the National Orchid Garden.", tourCard: { slug: "singapore-botanic-gardens-orchid-garden-private", title: "Singapore Botanic Gardens & Orchid Garden Private Tour", description: "A private tour of the Botanic Gardens and National Orchid Garden.", price: "From $146", duration: "3 hours", image: "https://images.asiabylocals.com/asiabylocals/tours/sg-1336052/img0/1600.webp" } },
                    { title: "Practical Tips", content: "The gardens themselves are free to enter — only the National Orchid Garden within them charges a separate entrance fee, which most guided tours include." }
                ],
                faqs: [
                    { q: "Is Singapore Botanic Gardens free?", a: "Yes, general entry is free; the National Orchid Garden within it charges separately." },
                    { q: "What's the best Botanic Gardens tour?", a: "A guided UNESCO-highlights walk suits most visitors; go private if you want more time at the Orchid Garden." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "Is Botanic Gardens free?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, except the National Orchid Garden." } },
                    { "@type": "Question", "name": "Best tour?", "acceptedAnswer": { "@type": "Answer", "text": "A guided UNESCO-highlights walk suits most visitors." } }
                ] },
            };

        case "best-singapore-zoo-tour-singapore":
            return {
                title: "Which Is the Best Singapore Zoo Tour?",
                seoTitle: "Best Singapore Zoo Tour 2026 | Honest Comparison",
                description: "Compare real Singapore Zoo tour options — from a rainforest and animal encounter tour to the entry ticket with tram ride.",
                heroImage: "https://images.asiabylocals.com/asiabylocals/tours/sg-1495925/img0/1600.webp",
                sections: [
                    { title: "The Short Answer", content: "Singapore Zoo is known for its open-concept enclosures rather than traditional cages. A guided tour adds animal-encounter context; a basic entry-with-tram ticket is simpler and covers more ground physically.", tourCard: { slug: "singapore-zoo-discover-rainforest-animal", title: "Singapore Zoo: Discover Rainforest & Animal Encounter Tour", description: "A guided rainforest and animal encounter tour at Singapore Zoo.", price: "From $106", duration: "2 hours", image: "https://images.asiabylocals.com/asiabylocals/tours/sg-1495925/img0/1600.webp" } },
                    { title: "Best for Covering More Ground: Entry Ticket with Tram Ride", content: "This pairs zoo entry with a tram ride, useful on a hot day or if you want to see more exhibits without a lot of walking.", tourCard: { slug: "singapore-zoo-entry-ticket-tram-ride-and-hotel", title: "Singapore: Zoo Entry Ticket, Tram Ride, and Hotel Transfer", description: "Zoo entry with tram ride and hotel transfer.", price: "From $116", duration: "4 hours", image: "https://images.asiabylocals.com/asiabylocals/tours/sg-1215018/img0/1600.webp" } },
                    { title: "Practical Tips", content: "Morning visits are cooler and catch the animals more active before midday heat sets in." }
                ],
                faqs: [
                    { q: "What is the best Singapore Zoo tour?", a: "A guided animal-encounter tour adds context; a tram-ride ticket is simpler and covers more ground." },
                    { q: "Best time to visit Singapore Zoo?", a: "Morning, when it's cooler and animals are more active." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "Best Singapore Zoo tour?", "acceptedAnswer": { "@type": "Answer", "text": "A guided animal-encounter tour adds context." } },
                    { "@type": "Question", "name": "Best time to visit?", "acceptedAnswer": { "@type": "Answer", "text": "Morning." } }
                ] },
            };

        case "is-universal-studios-singapore-worth-it":
            return {
                title: "Is Universal Studios Singapore Worth It?",
                seoTitle: "Universal Studios Singapore 2026 | Honest Review",
                description: "An honest comparison of the two real Universal Studios Singapore ticket options.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/74321805fc19ab5a5728494edb68a2e61ecb43401effb413ab69f9dc3c056448.jpeg",
                sections: [
                    { title: "The Short Answer", content: "Universal Studios Singapore is the only Universal theme park in Southeast Asia, worth it for theme-park fans even on a short Singapore trip.", tourCard: { slug: "singaporeuniversal-studios-entry-ticket-with", title: "Singapore: Universal Studios Entry Ticket with Hotel Transfer", description: "Entry ticket with hotel transfer included.", price: "From $143", duration: "4 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/74321805fc19ab5a5728494edb68a2e61ecb43401effb413ab69f9dc3c056448.jpeg" } },
                    { title: "With Round-Trip Transfers", content: "This version adds round-trip transfers rather than one-way hotel pickup, useful if you want transport sorted both ways.", tourCard: { slug: "universal-studios-singapore-tickets-round-trip", title: "Universal Studios Singapore Tickets + Round-trip Transfers", description: "Entry ticket with round-trip transfers.", price: "From $192", duration: "7 hours", image: "https://images.asiabylocals.com/asiabylocals/tours/sg-1199480/img0/1600.webp" } },
                    { title: "Practical Tips", content: "Budget a full day — the park is large enough that rushing through in half a day means skipping major rides." }
                ],
                faqs: [
                    { q: "Is Universal Studios Singapore worth it?", a: "Yes, for theme-park fans — it's the only Universal park in Southeast Asia." },
                    { q: "How much time do I need at Universal Studios Singapore?", a: "A full day is recommended to see the major rides without rushing." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "Is Universal Studios Singapore worth it?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, for theme-park fans." } },
                    { "@type": "Question", "name": "How much time do I need?", "acceptedAnswer": { "@type": "Answer", "text": "A full day." } }
                ] },
            };

        case "best-bird-paradise-tour-singapore":
            return {
                title: "Which Is the Best Bird Paradise Ticket in Singapore?",
                seoTitle: "Best Bird Paradise Ticket Singapore 2026 | Honest Comparison",
                description: "Compare real Bird Paradise ticket options in Singapore — from a direct e-ticket to the version with hotel transfers.",
                heroImage: "https://images.asiabylocals.com/asiabylocals/tours/sg-1461904/img0/1600.webp",
                sections: [
                    { title: "The Short Answer", content: "Bird Paradise is the world's largest bird park by land area, relocated from the old Jurong Bird Park. A direct e-ticket is the simplest, cheapest way in; hotel-transfer versions add convenience.", tourCard: { slug: "singapore-bird-paradise-direct-entry-e-ticket", title: "Singapore Bird Paradise: Direct Entry E-Ticket", description: "A straightforward direct-entry e-ticket.", price: "From $88", duration: "4 hours", image: "https://images.asiabylocals.com/asiabylocals/tours/sg-1461904/img0/1600.webp" } },
                    { title: "Best with Transport Sorted: Entry Ticket with Hotel Transfers", content: "This adds hotel pickup/drop-off, useful since Bird Paradise is further from the city centre than some other attractions.", tourCard: { slug: "bird-paradise-entry-ticket-with-hotel-transfers", title: "Bird Paradise Entry Ticket with Hotel Transfers", description: "Entry ticket bundled with hotel transfers.", price: "From $97", duration: "4 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/940b50a1e42dd6764ce5f1f6f77a231ac3707569b3dc2bd1da784e6110e9bc8f.png" } },
                    { title: "Practical Tips", content: "Bird Paradise is next to the Mandai Wildlife Reserve cluster (Night Safari, River Wonders), so it's worth combining with one of those if you're making the trip out that way." }
                ],
                faqs: [
                    { q: "What is Bird Paradise in Singapore?", a: "The world's largest bird park by land area, which replaced the old Jurong Bird Park." },
                    { q: "Should I combine Bird Paradise with another Mandai attraction?", a: "Yes, it's located near Night Safari and River Wonders, worth combining given the distance from the city centre." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "What is Bird Paradise?", "acceptedAnswer": { "@type": "Answer", "text": "The world's largest bird park by land area." } },
                    { "@type": "Question", "name": "Should I combine it with another attraction?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, it's near Night Safari and River Wonders." } }
                ] },
            };

        case "singapore-travel-guide-2026":
            return {
                title: "Singapore Travel Guide 2026",
                description: "Singapore packs world-class attractions, food, and transport into a compact, easy-to-navigate city-state.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/d3e7932b4a0cf4e6b644e72457dd871f0f0fb00a360372e3998a53698b1bd2df.jpeg",
                sections: [
                    { title: "Why Visit Singapore", content: "Singapore is a compact city-state covering Gardens by the Bay, Sentosa, Marina Bay Sands, world-famous hawker food, and some of the region's best-run public transport, all within a small footprint." },
                    { title: "Getting Around", content: "The MRT (metro) is clean, cheap, and covers nearly everywhere a visitor would go — get an EZ-Link card on arrival rather than buying single tickets each ride." }
                ],
                faqs: [
                    { q: "Is Singapore worth visiting?", a: "Yes, for its attractions, food scene, and ease of getting around." },
                    { q: "How do I get around Singapore?", a: "The MRT metro system, using an EZ-Link card." }
                ],
            };

        case "best-time-to-visit-singapore":
            return {
                title: "Best Time to Visit Singapore",
                description: "Singapore is tropical and hot year-round, so timing is mostly about rain and festival crowds, not seasons.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/d3e7932b4a0cf4e6b644e72457dd871f0f0fb00a360372e3998a53698b1bd2df.jpeg",
                sections: [
                    { title: "Weather Patterns", content: "Hot and humid year-round (26-32°C), with heavier rain roughly November-January during the northeast monsoon. February-April tends to be comparatively drier." }
                ],
                faqs: [
                    { q: "What is the best time to visit Singapore?", a: "February to April for drier weather, though it's hot and humid year-round regardless." }
                ],
            };

        case "singapore-1-day-itinerary":
            return {
                title: "Singapore 1-Day Itinerary",
                description: "A realistic one-day plan for Singapore if you only have a short layover or stop.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/d3e7932b4a0cf4e6b644e72457dd871f0f0fb00a360372e3998a53698b1bd2df.jpeg",
                sections: [
                    { title: "Morning", content: "Start at Gardens by the Bay, then walk to the Marina Bay Sands SkyPark for skyline views." },
                    { title: "Afternoon", content: "Explore Chinatown or Little India, with a hawker food stop for lunch." },
                    { title: "Evening", content: "Catch the free Spectra light show at Marina Bay, or take a night river cruise." }
                ],
                faqs: [
                    { q: "Can Singapore be seen in one day?", a: "The core highlights, yes — Gardens by the Bay, Marina Bay Sands, and a district walk fit comfortably in a day." }
                ],
            };

        case "singapore-3-day-itinerary":
            return {
                title: "Singapore 3-Day Itinerary",
                description: "A realistic three-day plan covering Singapore's major attractions without rushing.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/d3e7932b4a0cf4e6b644e72457dd871f0f0fb00a360372e3998a53698b1bd2df.jpeg",
                sections: [
                    { title: "Day 1", content: "Marina Bay area: Gardens by the Bay, SkyPark, and the Spectra light show in the evening." },
                    { title: "Day 2", content: "Sentosa Island: cable car over, Fort Siloso, beaches, and Universal Studios if that's a priority." },
                    { title: "Day 3", content: "Cultural districts: Chinatown, Little India, and the Botanic Gardens, plus a hawker food tour." }
                ],
                faqs: [
                    { q: "Is 3 days enough for Singapore?", a: "Yes, comfortably covers Marina Bay, Sentosa, and the main cultural districts without rushing." }
                ],
            };

        case "singapore-visa-guide-for-tourists":
            return {
                title: "Singapore Visa Guide for Tourists",
                description: "Visa requirements for visiting Singapore.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/d3e7932b4a0cf4e6b644e72457dd871f0f0fb00a360372e3998a53698b1bd2df.jpeg",
                sections: [
                    { title: "Visa Requirements", content: "Many nationalities get visa-free entry to Singapore for a set period. Check Singapore's official immigration requirements for your specific nationality before travel, since rules vary and change." }
                ],
                faqs: [
                    { q: "Do I need a visa to visit Singapore?", a: "Many nationalities get visa-free entry; verify current requirements for your passport before travel." }
                ],
            };

        case "singapore-public-transport-guide":
            return {
                title: "Singapore Public Transport Guide",
                description: "How to get around Singapore using its MRT, bus, and ride-hailing options.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/d3e7932b4a0cf4e6b644e72457dd871f0f0fb00a360372e3998a53698b1bd2df.jpeg",
                sections: [
                    { title: "Getting Around", content: "Get an EZ-Link card on arrival — it works across the MRT metro and buses with a single tap-in, tap-out system. Grab (ride-hailing) is widely used and reliable for anything the MRT doesn't cover directly." }
                ],
                faqs: [
                    { q: "What's the best way to get around Singapore?", a: "The MRT metro with an EZ-Link card for most trips; Grab for anything it doesn't cover." }
                ],
            };

        case "singapore-food-guide":
            return {
                title: "Singapore Food Guide",
                description: "What to eat in Singapore, home to a UNESCO-recognized hawker food culture.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/ed069c4929639d85ffca84e58321deac09361a8698fdcb43ecf9ea6301d50624.jpg",
                sections: [
                    { title: "Local Specialties", content: "Chicken rice, laksa, chili crab, and satay are Singapore staples, best eaten at hawker centres rather than restaurants for both authenticity and price." }
                ],
                faqs: [
                    { q: "What food is Singapore known for?", a: "Chicken rice, laksa, chili crab, and satay, best found at hawker centres." }
                ],
            };

        case "is-singapore-expensive":
            return {
                title: "Is Singapore Expensive to Visit?",
                description: "An honest look at Singapore's travel costs and how to keep them down.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/d3e7932b4a0cf4e6b644e72457dd871f0f0fb00a360372e3998a53698b1bd2df.jpeg",
                sections: [
                    { title: "The Short Answer", content: "Singapore is one of the pricier destinations in Southeast Asia for hotels and alcohol, but hawker food and public transport are genuinely cheap, which keeps a budget trip realistic if you eat and travel like a local." }
                ],
                faqs: [
                    { q: "Is Singapore expensive?", a: "Hotels and alcohol are pricey, but hawker food and public transport are cheap, keeping a budget trip realistic." }
                ],
            };

        case "best-bike-tour-singapore":
            return {
                title: "Which Is the Best Bike Tour in Singapore?",
                seoTitle: "Best Singapore Bike Tour 2026 | Honest Comparison",
                description: "Compare real Singapore bike tours — from a city highlights ride to a sunset tour with hawker food stops.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/cbf34455107882875e6d66fa4adc37bf815a2ee182169364c961becc01d144c3.jpg",
                sections: [
                    { title: "The Short Answer", content: "Singapore's flat, bike-friendly layout makes cycling a genuinely good way to cover ground between neighborhoods, and tours differ mainly in route focus and whether food stops are included.", tourCard: { slug: "singapore-lion-city-highlights-bike-tour", title: "Singapore: Lion City Highlights Bike Tour", description: "A bike tour covering Singapore's main highlights.", price: "From $87", duration: "4 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/cbf34455107882875e6d66fa4adc37bf815a2ee182169364c961becc01d144c3.jpg" } },
                    { title: "Best Budget Option: City Bicycle Tour", content: "A straightforward city bike tour covering the main sights without extra add-ons.", tourCard: { slug: "bikeable-singapore-city-bicycle-tour", title: "Bikeable: Singapore City Bicycle Tour", description: "A standard city bicycle tour of Singapore.", price: "From $82", duration: "4 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/8e6bbc9e3952daca0ba22b61970d24cf7f837db18708304c58cf7140ef70f9ec.png" } },
                    { title: "Best with Food: Sunset Bike Tour with Hawker Food Experience", content: "This times the ride for sunset and builds in stops at hawker stalls, combining cycling with Singapore's food scene in one outing.", tourCard: { slug: "singapore-sunset-bike-tour-with-hawker-food", title: "Singapore: Sunset Bike Tour with Hawker Food Experience", description: "A sunset bike tour with hawker food stops included.", price: "From $292", duration: "3 hours", image: "https://images.asiabylocals.com/asiabylocals/tours/sg-1095964/img0/1600.webp" } },
                    { title: "Practical Tips", content: "Singapore's heat and humidity are real factors on a bike — morning or sunset rides are far more comfortable than midday, which is why most operators schedule around those windows." }
                ],
                faqs: [
                    { q: "What is the best bike tour in Singapore?", a: "A city highlights ride for sightseeing, or the sunset hawker food tour for combining cycling with eating." },
                    { q: "Is Singapore good for cycling?", a: "Yes, it's flat and bike-friendly, though heat makes morning or sunset rides more comfortable than midday." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "What is the best bike tour in Singapore?", "acceptedAnswer": { "@type": "Answer", "text": "A city highlights ride, or the sunset hawker food tour." } },
                    { "@type": "Question", "name": "Is Singapore good for cycling?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, flat and bike-friendly." } }
                ] },
            };

        case "best-wings-of-time-cable-car-tour-singapore":
            return {
                title: "Which Is the Best Cable Car & Wings of Time Combo in Sentosa?",
                seoTitle: "Best Sentosa Cable Car Wings of Time Tour 2026 | Comparison",
                description: "Compare real Sentosa cable car and Wings of Time show combo tours — from a sunset shared trip to a full Sky Helix and hotel-transfer package.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/53667ae3f0a9580f408b6d576e09b238049ee017081943ceb17fd501634280ab.jpg",
                sections: [
                    { title: "The Short Answer", content: "The Sentosa cable car and the Wings of Time nighttime light-and-water show are commonly paired, since the cable car gives great sunset views and the show runs right after dark on the same beach.", tourCard: { slug: "singapore-cable-car-ride-with-wings-of-time-show", title: "Singapore: Cable Car Ride with Wings of Time Show", description: "A standard combo of the Sentosa cable car and Wings of Time show.", price: "From $102", duration: "3.5 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/60480d492382c133f04a66d08c9420f8540de03c3c1a841783292e2d5f6227bb.png" } },
                    { title: "Cheapest: Sunset Trip Shared Basis", content: "At $27, this is the lowest-priced way to combine the sunset cable car ride with the evening show on a shared basis.", tourCard: { slug: "sentosa-cable-car-wings-of-time-sunset-trip", title: "Sentosa Cable car & Wings of time Sunset Trip Shared Basis", description: "A budget shared-basis sunset cable car and show combo.", price: "From $27", duration: "6 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/53667ae3f0a9580f408b6d576e09b238049ee017081943ceb17fd501634280ab.jpg" } },
                    { title: "Most Complete: Cable Car, Sky Helix & Wings of Time with Hotel Transfers", content: "This adds the Sky Helix (an open-air aerial tower ride) and includes hotel transfers, the most complete version of the combo.", tourCard: { slug: "cable-car-sky-helix-wings-of-time-with-hotel", title: "Cable Car, Sky Helix & Wings of Time with Hotel Transfers", description: "The full combo including Sky Helix and hotel transfers.", price: "From $127", duration: "6 hours", image: "https://images.asiabylocals.com/asiabylocals/tours/sg-1217170/img0/1600.webp" } },
                    { title: "Practical Tips", content: "Time your cable car ride for roughly an hour before sunset to catch both daylight and dusk views, then stay on for the Wings of Time show which starts shortly after dark." }
                ],
                faqs: [
                    { q: "What is the best Sentosa cable car and Wings of Time combo?", a: "A shared sunset trip for budget, or the Sky Helix version with transfers for the most complete experience." },
                    { q: "When should I ride the cable car for sunset?", a: "About an hour before sunset, to catch both daylight and dusk views." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "What is the best cable car and Wings of Time combo?", "acceptedAnswer": { "@type": "Answer", "text": "A shared sunset trip, or the Sky Helix version for more." } },
                    { "@type": "Question", "name": "When to ride for sunset?", "acceptedAnswer": { "@type": "Answer", "text": "About an hour before sunset." } }
                ] },
            };

        case "best-merlion-civic-district-walking-tour-singapore":
            return {
                title: "Which Is the Best Merlion & Civic District Walking Tour in Singapore?",
                seoTitle: "Best Merlion Civic District Tour Singapore 2026 | Comparison",
                description: "Compare real Merlion, Marina Bay, and Civic District walking tours — from a focused Chinatown/Merlion/Marina Bay route to one adding Raffles Hotel and Arab Street.",
                heroImage: "https://images.asiabylocals.com/asiabylocals/tours/sg-1016210/img0/1600.webp",
                sections: [
                    { title: "The Short Answer", content: "Singapore's colonial Civic District, Merlion Park, and Chinatown are close enough together that most walking tours cover all three, differing mainly in whether Raffles Hotel and Arab Street are also added.", tourCard: { slug: "chinatown-merlion-marina-bay-highlights-4h", title: "Chinatown, Merlion & Marina Bay Highlights 4h Walking Tour", description: "A 4-hour walking tour covering Chinatown, Merlion, and Marina Bay.", price: "From $238", duration: "4 hours", image: "https://images.asiabylocals.com/asiabylocals/tours/sg-1016210/img0/1600.webp" } },
                    { title: "Best for History: Merlion, Marina Bay & Historical Civic District", content: "This leans more into the Civic District's colonial history alongside the standard Merlion and Marina Bay stops.", tourCard: { slug: "merlion-marina-bay-historical-civic-district", title: "Merlion, Marina Bay, Historical Civic District Walking Tour", description: "A history-focused walk through the Civic District, Merlion, and Marina Bay.", price: "From $199", duration: "3 hours", image: "https://images.asiabylocals.com/asiabylocals/tours/sg-862404/img0/1600.webp" } },
                    { title: "Most Comprehensive: Chinatown, Raffles Hotel, Merlion, Arab Street", content: "This adds both Raffles Hotel and Arab Street to the core route, covering the widest range of neighborhoods in one walk.", tourCard: { slug: "chinatown-raffles-hotel-merlion-arab-street", title: "Chinatown, Raffles Hotel, Merlion, Arab Street Walking Tour", description: "The most comprehensive walking route adding Raffles Hotel and Arab Street.", price: "From $279", duration: "4.5 hours", image: "https://images.asiabylocals.com/asiabylocals/tours/sg-1466212/img0/1600.webp" } },
                    { title: "Practical Tips", content: "These routes cover a lot of ground on foot in Singapore's heat and humidity — comfortable shoes and water matter more here than on a typical city walk elsewhere." }
                ],
                faqs: [
                    { q: "What is the best Merlion and Civic District walking tour?", a: "A standard 4-hour route covers the essentials; go comprehensive if you want Raffles Hotel and Arab Street too." },
                    { q: "How much walking is involved?", a: "A fair amount — these routes cover multiple neighborhoods on foot, so comfortable shoes matter in Singapore's heat." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "What is the best Merlion/Civic District walking tour?", "acceptedAnswer": { "@type": "Answer", "text": "A standard 4-hour route covers the essentials." } },
                    { "@type": "Question", "name": "How much walking is involved?", "acceptedAnswer": { "@type": "Answer", "text": "A fair amount across multiple neighborhoods." } }
                ] },
            };

        case "is-jewel-changi-tour-worth-it-singapore":
            return {
                title: "Is the Jewel Changi Private Tour Worth It?",
                seoTitle: "Jewel Changi Airport Tour Singapore 2026 | Honest Review",
                description: "An honest look at a customized private tour of Jewel Changi, the airport's indoor rainforest and shopping complex.",
                heroImage: "https://images.asiabylocals.com/asiabylocals/tours/sg-1383945/img0/1600.webp",
                sections: [
                    { title: "The Short Answer", content: "Jewel Changi, home to the world's tallest indoor waterfall and a lush indoor rainforest, is worth a dedicated visit even if you're not flying through the airport that day — a guided tour helps you make the most of a stopover or an arrival/departure day.", tourCard: { slug: "singapore-welcome-jewel-changi-customized-private", title: "Singapore Welcome: Jewel Changi Customized Private Tour", description: "A customized private tour of Jewel Changi.", price: "From $159", duration: "1.5 hours", image: "https://images.asiabylocals.com/asiabylocals/tours/sg-1383945/img0/1600.webp" } },
                    { title: "Practical Tips", content: "This works especially well as a stopover activity if you have a long layover at Changi Airport, since Jewel is directly connected to the terminals." }
                ],
                faqs: [
                    { q: "Is Jewel Changi worth visiting?", a: "Yes, it has the world's tallest indoor waterfall and a lush indoor rainforest, worth seeing even on a layover." },
                    { q: "Is Jewel Changi inside the airport?", a: "Yes, it's directly connected to Changi Airport's terminals." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "Is Jewel Changi worth visiting?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, for its indoor waterfall and rainforest, even on a layover." } }
                ] },
            };

        case "is-level33-rooftop-brewery-tour-worth-it-singapore":
            return {
                title: "Is the LeVeL33 Rooftop Brewery Tour Worth It?",
                seoTitle: "LeVeL33 Rooftop Brewery Tour 2026 | Honest Review",
                description: "An honest look at the LeVeL33 rooftop brewery tour and craft beer tasting, one of the world's highest urban craft breweries.",
                heroImage: "https://images.asiabylocals.com/asiabylocals/tours/sg-661386/img0/1600.webp",
                sections: [
                    { title: "The Short Answer", content: "LeVeL33 is one of the world's highest urban craft breweries, with sweeping Marina Bay views alongside the beer tasting — worth it for the view as much as the beer itself.", tourCard: { slug: "singapore-level33-rooftop-brewery-tour-craft-beer", title: "Singapore: LeVeL33 Rooftop Brewery Tour & Craft Beer Tasting", description: "A rooftop brewery tour and craft beer tasting with Marina Bay views.", price: "From $132", duration: "30 minutes", image: "https://images.asiabylocals.com/asiabylocals/tours/sg-661386/img0/1600.webp" } },
                    { title: "Practical Tips", content: "Go in the late afternoon or early evening for the best light over Marina Bay during your tasting." }
                ],
                faqs: [
                    { q: "Is the LeVeL33 brewery tour worth it?", a: "Yes, for the combination of craft beer and sweeping Marina Bay views from one of the world's highest urban breweries." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "Is the LeVeL33 brewery tour worth it?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, for craft beer and Marina Bay views together." } }
                ] },
            };

        case "best-river-wonders-night-safari-combo-singapore":
            return {
                title: "Is the River Wonders & Night Safari Combo Worth It?",
                seoTitle: "River Wonders Night Safari Singapore 2026 | Honest Review",
                description: "An honest look at combining River Wonders, Singapore's river-themed wildlife park, with a guided Night Safari visit.",
                heroImage: "https://images.asiabylocals.com/asiabylocals/tours/sg-1212307/img0/1600.webp",
                sections: [
                    { title: "The Short Answer", content: "River Wonders, home to giant pandas and river-themed habitats, pairs naturally with the adjacent Night Safari for one combined day-into-evening outing — more efficient than visiting on separate trips.", tourCard: { slug: "river-wonders-free-easy-with-night-safari-guided", title: "River Wonders (Free & Easy) with Night Safari Guided Tour", description: "A free & easy River Wonders visit combined with a guided Night Safari.", price: "From $220", duration: "7 hours", image: "https://images.asiabylocals.com/asiabylocals/tours/sg-1212307/img0/1600.webp" } },
                    { title: "Practical Tips", content: "River Wonders and Night Safari are both part of the Mandai wildlife precinct alongside the Singapore Zoo, so this combo saves a separate trip back to the area." }
                ],
                faqs: [
                    { q: "What is River Wonders?", a: "A river-themed wildlife park in Singapore's Mandai precinct, home to giant pandas among other species." },
                    { q: "Can River Wonders and Night Safari be combined?", a: "Yes, they're both part of the same Mandai precinct, making a combined visit efficient." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "What is River Wonders?", "acceptedAnswer": { "@type": "Answer", "text": "A river-themed wildlife park in Singapore's Mandai precinct." } }
                ] },
            };

        case "is-adventure-cove-waterpark-worth-it-singapore":
            return {
                title: "Is Adventure Cove Waterpark Worth It in Singapore?",
                seoTitle: "Adventure Cove Waterpark Singapore 2026 | Honest Review",
                description: "An honest look at Adventure Cove Waterpark on Sentosa, distinct from Universal Studios Singapore next door.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/0c83a7ab9e44a0dd963e6298f9f729cf0c7164d69086231ce6f62b1d8a97aa47.jpeg",
                sections: [
                    { title: "The Short Answer", content: "Adventure Cove Waterpark, located on Sentosa near Universal Studios, offers slides, a lazy river, and a rays/fish lagoon snorkeling experience — a genuinely different attraction from the theme park next door, worth adding if you want a water-based day.", tourCard: { slug: "adventure-cove-waterpark-entry-ticket-with-hotel", title: "Adventure Cove Waterpark Entry Ticket with Hotel Pickup", description: "Entry to Adventure Cove Waterpark with hotel pickup.", price: "From $67", duration: "3 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/0c83a7ab9e44a0dd963e6298f9f729cf0c7164d69086231ce6f62b1d8a97aa47.jpeg" } },
                    { title: "Practical Tips", content: "Its Sentosa location makes it easy to combine with Universal Studios on a multi-day Sentosa visit, rather than needing a separate trip." }
                ],
                faqs: [
                    { q: "Is Adventure Cove the same as Universal Studios Singapore?", a: "No, it's a separate waterpark on Sentosa, located nearby." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "Is Adventure Cove the same as Universal Studios?", "acceptedAnswer": { "@type": "Answer", "text": "No, it's a separate waterpark on Sentosa." } }
                ] },
            };

        case "is-art-jamming-worth-it-singapore":
            return {
                title: "Is Art Jamming Worth It in Singapore?",
                seoTitle: "Singapore Art Jamming 2026 | Honest Review",
                description: "An honest look at Singapore's art jamming workshops, a relaxed, unstructured creative activity distinct from the city's museum visits and guided sightseeing.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/517b0539603e70c40dd8f23f69a0ce543e1720c1833557c9d7b4dbf4f1cc551d.jpeg",
                sections: [
                    { title: "The Short Answer", content: "Art jamming is a free-form painting session with no instruction or set subject, a relaxed creative outlet rather than a structured class — a good change of pace from museum visits or guided city tours, especially for a rainy afternoon.", tourCard: { slug: "art-jamming-workshops", title: "Art Jamming Workshops", description: "A relaxed, unstructured art jamming painting session.", price: "From $24", duration: "2 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/517b0539603e70c40dd8f23f69a0ce543e1720c1833557c9d7b4dbf4f1cc551d.jpeg" } },
                    { title: "Practical Tips", content: "No art skill is needed — the format is deliberately unstructured, so come with whatever idea you want to paint rather than expecting instruction." }
                ],
                faqs: [
                    { q: "Is art jamming worth it in Singapore?", a: "Yes, as a relaxed, unstructured creative activity, good for a rainy day or a change of pace from museums and guided tours." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "Is art jamming worth it in Singapore?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, as a relaxed, unstructured creative activity." } }
                ] },
            };

        case "is-hop-on-hop-off-bus-worth-it-singapore":
            return {
                title: "Is the Hop-On Hop-Off Bus Worth It in Singapore?",
                seoTitle: "Singapore Hop-On Hop-Off Bus 2026 | Honest Review",
                description: "An honest look at Singapore's open-top hop-on hop-off sightseeing bus, a flexible city-sightseeing option distinct from the MRT and guided walking tours.",
                heroImage: "https://images.asiabylocals.com/asiabylocals/tours/sg-1374356/img0/1600.webp",
                sections: [
                    { title: "The Short Answer", content: "This open-top bus loop covers the city's main landmarks with the flexibility to hop off at any stop and continue later, a good fit for travelers who want to cover more ground than walking without committing to a fixed guided tour schedule.", tourCard: { slug: "2-hour-singapore-city-open-top-sightseeing-bus", title: "2-Hour Singapore City Open-Top Sightseeing Bus", description: "An open-top hop-on hop-off sightseeing bus tour of Singapore.", price: "From $38", duration: "2 hours", image: "https://images.asiabylocals.com/asiabylocals/tours/sg-1374356/img0/1600.webp" } },
                    { title: "Practical Tips", content: "Singapore's MRT is fast and efficient, so the bus's main advantage is the open-top sightseeing view rather than raw transport speed." }
                ],
                faqs: [
                    { q: "Is the hop-on hop-off bus worth it in Singapore?", a: "Yes, for flexible sightseeing with open-top views, though the MRT remains faster for pure point-to-point transport." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "Is the hop-on hop-off bus worth it in Singapore?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, for flexible open-top sightseeing." } }
                ] },
            };

        case "is-katong-joo-chiat-tour-worth-it-singapore":
            return {
                title: "Is the Katong & Joo Chiat Tour Worth It in Singapore?",
                seoTitle: "Katong Joo Chiat Tour Singapore 2026 | Honest Review",
                description: "An honest look at Singapore's Katong and Joo Chiat heritage tour, a Peranakan neighborhood walk distinct from the Marina Bay and Gardens by the Bay sightseeing most visitors prioritize.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/4a0b49940d2a987954390d30fd4e832aff304fceee815093201fa341c0b3ebf0.jpeg",
                sections: [
                    { title: "The Short Answer", content: "Katong and Joo Chiat's colorful Peranakan shophouses and local food scene sit well beyond the Marina Bay tourist core, a genuinely different, quieter side of Singapore for travelers who've already covered the main landmarks.", tourCard: { slug: "beyond-marina-bay-hidden-gems-of-katong-joo-chiat", title: "Beyond Marina Bay: Hidden Gems of Katong & Joo Chiat", description: "A guided tour of Singapore's Katong and Joo Chiat Peranakan neighborhoods.", price: "From $51", duration: "2 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/4a0b49940d2a987954390d30fd4e832aff304fceee815093201fa341c0b3ebf0.jpeg" } },
                    { title: "Practical Tips", content: "Best booked after you've already seen Marina Bay and Gardens by the Bay, since this is specifically framed as a 'beyond the main sights' experience." }
                ],
                faqs: [
                    { q: "Is the Katong and Joo Chiat tour worth it in Singapore?", a: "Yes, for travelers wanting a quieter, more local side of Singapore beyond the Marina Bay core." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "Is the Katong and Joo Chiat tour worth it in Singapore?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, for a quieter, more local Peranakan neighborhood experience." } }
                ] },
            };

        case "is-batam-day-trip-worth-it-singapore":
            return {
                title: "Is the Batam Day Trip Worth It from Singapore?",
                seoTitle: "Batam Day Trip from Singapore 2026 | Honest Review",
                description: "An honest look at the Batam culture day trip with lunch and massage, a quick ferry ride to Indonesian territory from Singapore.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/02b972b40d33a67aec98f78cee095840d99a1bc1b6a38942aeaaabd1286e49fc.jpeg",
                sections: [
                    { title: "The Short Answer", content: "Batam is Indonesian territory just a short ferry ride from Singapore, genuinely cheaper for things like massages and local food, making this day trip a practical way to add a second country to your trip without much extra travel time.", tourCard: { slug: "batam-culture-tour-with-lunch-massage-from", title: "Batam Culture Tour with Lunch & Massage from Singapore", description: "A day trip to Batam, Indonesia with lunch and a massage included.", price: "From $216", duration: "9 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/02b972b40d33a67aec98f78cee095840d99a1bc1b6a38942aeaaabd1286e49fc.jpeg" } },
                    { title: "Practical Tips", content: "Bring your passport — Batam is Indonesian territory, so this crosses an international border despite the short ferry ride." }
                ],
                faqs: [
                    { q: "Is the Batam day trip worth it from Singapore?", a: "Yes, for a practical way to add a second country to your trip, with genuinely cheaper massages and local food just a short ferry ride away." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "Is the Batam day trip worth it?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, for a quick way to add Indonesia to a Singapore trip with genuinely cheaper local prices." } }
                ] },
            };

        case "is-pulau-ubin-cycling-tour-worth-it-singapore":
            return {
                title: "Is the Pulau Ubin Guided Cycling & Village Heritage Tour Worth It?",
                description: "An honest look at the guided cycling tour of Pulau Ubin, one of Singapore's last rustic kampong-style islands.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/33be0fd1517a1d2e21405d871b5a059751cb4f50fbf7d580281e14cdd908da34.jpeg",
                sections: [
                    { title: "The Short Answer", content: "Pulau Ubin is genuinely one of Singapore's last rustic, undeveloped islands, giving a cycling tour here a striking contrast to the hyper-modern city skyline, a good pick for travelers wanting to see Singapore's fast-disappearing kampong heritage.", tourCard: { slug: "pulau-ubin-guided-cycling-village-heritage-tour", title: "Pulau Ubin Guided Cycling & Village Heritage Tour", description: "A guided cycling tour of Pulau Ubin's rustic village heritage.", price: "From $254", duration: "4 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/33be0fd1517a1d2e21405d871b5a059751cb4f50fbf7d580281e14cdd908da34.jpeg" } },
                    { title: "Practical Tips", content: "A short ferry ride gets you to the island, so build that into your schedule along with the cycling time." }
                ],
                faqs: [
                    { q: "Is the Pulau Ubin cycling tour worth it?", a: "Yes, it's a striking contrast to the city skyline, showing Singapore's fast-disappearing rustic kampong heritage." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "Is the Pulau Ubin cycling tour worth it?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, it shows Singapore's fast-disappearing rustic kampong heritage." } }
                ] },
            };

        case "is-firewalking-worth-it-singapore":
            return {
                title: "Is the Firewalking Experience in Singapore Worth It?",
                description: "An honest look at the firewalking experience in Singapore, including insights from a practitioner on the tradition's origins.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/7a060cc02f8ab002c86945a24e922f9679ff07fab252e55f478a6fcf3e53c02f.jpg",
                sections: [
                    { title: "The Short Answer", content: "At a genuinely low price and just 45 minutes, trying firewalking with real insight from a practitioner into the tradition's cultural and spiritual origins is a quick, memorable way to try something you'll never find back home.", tourCard: { slug: "firewalking-in-singapore-insights-from-a", title: "Firewalking in Singapore: Insights from a Practitioner", description: "A firewalking experience in Singapore with cultural insights from a practitioner.", price: "From $21", duration: "45 minutes", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/7a060cc02f8ab002c86945a24e922f9679ff07fab252e55f478a6fcf3e53c02f.jpg" } },
                    { title: "Practical Tips", content: "Follow the practitioner's safety instructions closely — this is a genuine, controlled tradition, not a casual stunt." }
                ],
                faqs: [
                    { q: "Is the firewalking experience worth it in Singapore?", a: "Yes, at a low price it's a quick, memorable way to try a genuine tradition with real cultural insight." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "Is firewalking worth it in Singapore?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, it's a quick, memorable, low-cost way to try a genuine cultural tradition." } }
                ] },
            };

        case "is-punggol-kayak-tour-worth-it-singapore":
            return {
                title: "Is the Punggol Waterway Kayak Tour Worth It in Singapore?",
                description: "An honest look at the guided Punggol Waterway kayak tour in Singapore.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/07a561bbdd3e405d9608c2a8aab00ae75d88010c86c053261b92c7109d339174.jpg",
                sections: [
                    { title: "The Short Answer", content: "Kayaking through Punggol's waterway gives a genuinely active, water-level perspective on a part of Singapore most tourists never see, a good affordable activity to break up the usual museum and shopping circuit.", tourCard: { slug: "singapore-punggol-waterway-kayak-tour-with-guide", title: "Singapore Punggol Waterway Kayak Tour", description: "A guided kayak tour of Punggol Waterway in Singapore.", price: "From $61", duration: "2 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/07a561bbdd3e405d9608c2a8aab00ae75d88010c86c053261b92c7109d339174.jpg" } },
                    { title: "Practical Tips", content: "No prior kayaking experience is needed — the guide keeps the pace accessible for beginners." }
                ],
                faqs: [
                    { q: "Is the Punggol Waterway kayak tour worth it in Singapore?", a: "Yes, it's an affordable, active way to see a part of Singapore most tourists never visit." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "Is the Punggol kayak tour worth it?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, it's an affordable, active way to see a part of Singapore most tourists miss." } }
                ] },
            };

        case "is-peranakan-culture-tour-worth-it-singapore":
            return {
                title: "Is the Peranakan Culture & Cuisine Tour Worth It in Singapore?",
                description: "An honest look at the Peranakan culture and cuisine tour, exploring Singapore's distinctive hybrid heritage.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/0dd64a463d7a8e18127f0275dc8ca56d6e5bd274e6cf4264e942d643249d9a23.jpg",
                sections: [
                    { title: "The Short Answer", content: "Peranakan culture, a genuine hybrid of Chinese and Malay heritage unique to this region, is distinct from both the Chinatown and Little India circuits, giving this tour real cultural depth that many visitors otherwise miss entirely.", tourCard: { slug: "singapore-peranakan-culture-cuisine-hidden", title: "Singapore Peranakan Culture & Cuisine Tour", description: "A tour exploring Peranakan culture and cuisine in Singapore.", price: "From $147", duration: "2.5 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/0dd64a463d7a8e18127f0275dc8ca56d6e5bd274e6cf4264e942d643249d9a23.jpg" } },
                    { title: "Practical Tips", content: "Come hungry — the cuisine component typically includes several genuine Peranakan dish tastings." }
                ],
                faqs: [
                    { q: "Is the Peranakan culture and cuisine tour worth it in Singapore?", a: "Yes, it gives real cultural depth into a distinctive hybrid heritage that many visitors otherwise miss entirely." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "Is the Peranakan culture tour worth it?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, it gives real depth into a distinctive hybrid heritage many visitors miss." } }
                ] },
            };

        default:
            return null;
    }
}

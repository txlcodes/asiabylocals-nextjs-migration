import { CityInfoData } from './cityInfoContent';

export function getKazakhstanInfoContent(slug: string): CityInfoData | null {
    switch (slug) {
        case "best-charyn-canyon-day-trip-almaty":
            return {
                title: "Which Is the Best Charyn Canyon Day Trip from Almaty?",
                seoTitle: "Best Charyn Canyon Day Trip Almaty 2026 | Honest Comparison",
                description: "Compare real one-day Charyn Canyon trips from Almaty — from a $59 budget combo to small-group and lake-combo versions covering Kolsai and Kaindy.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/6b797305789d600fe3152d2a42e0060798f3552025cace86dd17e50585ca884b.jpg",
                sections: [
                    { title: "The Short Answer", content: "Charyn Canyon's 'Valley of Castles' is almost always combined with Kolsai and Kaindy Lakes in one long day, since they're all in the same direction from Almaty. A budget combo day trip covers the basics; small-group versions cost more but avoid large tour buses.", tourCard: { slug: "from-almaty-charyn-canyon-full-day-trip-with", title: "From Almaty: Charyn Canyon Full-Day Trip with Boxed Lunch", description: "A full-day Charyn Canyon trip with lunch included.", price: "From $65", duration: "10 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/6b797305789d600fe3152d2a42e0060798f3552025cace86dd17e50585ca884b.jpg" } },
                    { title: "Cheapest: Charyn Canyon Day Trip with Boxed Lunch", content: "At $65, this is one of the lowest-priced ways to see Charyn Canyon in a single day with lunch included.", tourCard: { slug: "from-almaty-charyn-canyon-full-day-trip-with", title: "From Almaty: Charyn Canyon Full-Day Trip with Boxed Lunch", description: "The budget Charyn Canyon day trip.", price: "From $65", duration: "10 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/6b797305789d600fe3152d2a42e0060798f3552025cace86dd17e50585ca884b.jpg" } },
                    { title: "Best Small-Group Option: Charyn, Kolsai & Kaindy Day Trip", content: "This runs as a small group rather than a large bus tour, covering all three major sights — Charyn Canyon, Kolsai Lakes, and Kaindy Lake — in one long day.", tourCard: { slug: "small-group-charyn-canyon-kolsai-kaindy-lakes-day", title: "Small-Group Charyn Canyon, Kolsai & Kaindy Lakes Day Trip", description: "A small-group combo of Charyn Canyon, Kolsai, and Kaindy Lakes.", price: "From $94", duration: "17 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/32ccb2b32f4e7aa1a7880b0bf1564aabd6c239227ee465aff4794dda3ee8f279.jpg" } },
                    { title: "Practical Tips", content: "These are genuinely long days (10-17 hours) given the distances involved — bring snacks, water, and comfortable shoes for walking the canyon trails. If you don't want to rush, consider the 2-day version instead of cramming all three sights into one day." }
                ],
                faqs: [
                    { q: "What is the best Charyn Canyon day trip from Almaty?", a: "A budget full-day trip suits most visitors; a small-group version avoids large tour buses." },
                    { q: "Can Charyn Canyon be visited in one day from Almaty?", a: "Yes, though it's a long day (10-17 hours) given the distance, especially if combined with Kolsai and Kaindy Lakes." },
                    { q: "What's included in a typical Charyn Canyon tour?", a: "Usually transport, a guide, and often the Kolsai/Kaindy Lakes as well since they're in the same region." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "What is the best Charyn Canyon day trip from Almaty?", "acceptedAnswer": { "@type": "Answer", "text": "A budget full-day trip suits most visitors." } },
                    { "@type": "Question", "name": "Can Charyn Canyon be visited in one day?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, though it's a long day given the distance." } }
                ] },
            };

        case "best-2-day-charyn-kolsai-kaindy-tour-almaty":
            return {
                title: "Which Is the Best 2-Day Charyn, Kolsai & Kaindy Tour from Almaty?",
                seoTitle: "Best 2-Day Charyn Kolsai Kaindy Tour 2026 | Comparison",
                description: "Compare real 2-day Charyn Canyon, Kolsai, and Kaindy Lakes tours from Almaty for travellers who don't want to cram all three sights into one long day.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/23352d6ca42418e2d4f17d0a316a3ef683f0e154675ea2a3f30cc2f1f93dda22.jpg",
                sections: [
                    { title: "The Short Answer", content: "Splitting the Charyn/Kolsai/Kaindy circuit over two days means less rushing and an overnight stay near the lakes, rather than a single exhausting 15+ hour day.", tourCard: { slug: "from-almaty-2-day-kolsai-kaindy-lakes-charyn", title: "From Almaty: 2-Day Kolsai-Kaindy Lakes & Charyn Canyon Tour", description: "A 2-day version of the classic three-sight circuit.", price: "From $143", duration: "2 days", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/23352d6ca42418e2d4f17d0a316a3ef683f0e154675ea2a3f30cc2f1f93dda22.jpg" } },
                    { title: "Practical Tips", content: "The 2-day version includes an overnight stay, usually in a guesthouse or yurt camp near the lakes — check what's included in accommodation before booking, since standards vary." }
                ],
                faqs: [
                    { q: "Is the 2-day version better than the 1-day Charyn Canyon trip?", a: "Yes, if you'd rather not spend 15+ hours in a vehicle in a single day — it spreads the same sights over two more relaxed days." },
                    { q: "What's included in the overnight stay?", a: "Usually a guesthouse or yurt camp near the lakes — standards vary, so check details before booking." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "Is the 2-day version better than the 1-day trip?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, if you'd rather not spend over 15 hours in a vehicle in one day." } }
                ] },
            };

        case "best-big-almaty-lake-tour-almaty":
            return {
                title: "Which Is the Best Big Almaty Lake Tour?",
                seoTitle: "Best Big Almaty Lake Tour 2026 | Honest Comparison",
                description: "Compare real Big Almaty Lake tours — from a no-hiking car tour with hot springs to full guided hikes with mountain views.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/e82fdec2d5fdfd7051684892f2c7a0a1132cb3d945d225ececa958d22c91f5bd.jpeg",
                sections: [
                    { title: "The Short Answer", content: "Big Almaty Lake's turquoise water is reachable either by a no-hiking car tour (good for those short on time or mobility) or a proper guided hike, usually paired with Alma-Arasan hot springs.", tourCard: { slug: "big-almaty-lake-no-hiking-and-alma-arasan-hot", title: "Big Almaty Lake no hiking and Alma Arasan hot springs", description: "A no-hiking car tour to Big Almaty Lake with hot springs.", price: "From $64", duration: "4 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/6c466aedec849f33220df06bad0c149d35987b0c315286e77048b3bca49f88c7.jpeg" } },
                    { title: "Best No-Hiking Option: Car Tour with Hot Springs", content: "For travellers who want the views without the walk, this car-based tour reaches the lake and adds Alma-Arasan hot springs.", tourCard: { slug: "big-almaty-lake-no-hiking-and-alma-arasan-hot", title: "Big Almaty Lake no hiking and Alma Arasan hot springs", description: "The no-hiking option with hot springs.", price: "From $64", duration: "4 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/6c466aedec849f33220df06bad0c149d35987b0c315286e77048b3bca49f88c7.jpeg" } },
                    { title: "Best for Hikers: Guided Hike with Mountain Views", content: "A proper guided hike up to the lake, covering more scenery on the way than the drive-up version.", tourCard: { slug: "almaty-big-almaty-lake-hiking-with-guide", title: "Almaty: Big Almaty Lake Hiking with Guide", description: "A full guided hike to Big Almaty Lake.", price: "From $364", duration: "8 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/e82fdec2d5fdfd7051684892f2c7a0a1132cb3d945d225ececa958d22c91f5bd.jpeg" } },
                    { title: "Practical Tips", content: "The lake sits over 2,500m, so altitude and mountain weather can change fast — bring layers even in summer. A permit checkpoint on the road up sometimes causes delays, which guided tours handle for you." }
                ],
                faqs: [
                    { q: "What is the best Big Almaty Lake tour?", a: "A no-hiking car tour suits those short on time; a guided hike suits those who want more active scenery." },
                    { q: "Do I need to hike to see Big Almaty Lake?", a: "No, several tours drive most of the way up, though a hiking version exists for those who want it." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "What is the best Big Almaty Lake tour?", "acceptedAnswer": { "@type": "Answer", "text": "A no-hiking car tour suits those short on time." } }
                ] },
            };

        case "best-altyn-emel-singing-dunes-tour-almaty":
            return {
                title: "Which Is the Best Altyn-Emel Singing Dunes Tour from Almaty?",
                seoTitle: "Best Altyn-Emel Singing Dunes Tour 2026 | Comparison",
                description: "Compare real Altyn-Emel National Park tours from Almaty, home of the famous Singing Dune and the Aktau/Katutau mountains.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/86deeadc6ac6ba9a2e4b6e6ae30d38793e29c3e2cdac69a8166af2a7664c7d95.jpg",
                sections: [
                    { title: "The Short Answer", content: "Altyn-Emel's Singing Dune (which produces a low hum when sand slides down it) is the park's signature attraction, usually combined with the colorful Aktau and Katutau mountain formations. It's far enough from Almaty that both 1-day and 2-day versions exist.", tourCard: { slug: "from-almaty-altyn-emel-day-tour-with-a-singing", title: "From Almaty: Altyn-Emel Day Tour with a Singing Dune Climb", description: "A day tour to Altyn-Emel with a Singing Dune climb.", price: "From $293", duration: "16 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/86deeadc6ac6ba9a2e4b6e6ae30d38793e29c3e2cdac69a8166af2a7664c7d95.jpg" } },
                    { title: "Practical Tips", content: "Altyn-Emel is roughly 3 hours from Almaty each way, making the 1-day version a very long day — consider the 2-day version if you want time to properly explore the Aktau 'painted mountains' as well as the dune." }
                ],
                faqs: [
                    { q: "What is the Singing Dune at Altyn-Emel?", a: "A large sand dune that produces a low humming sound under certain conditions when sand slides down its face." },
                    { q: "Is Altyn-Emel worth a 2-day trip?", a: "Yes if you want time for both the Singing Dune and the Aktau/Katutau mountain formations without rushing." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "What is the Singing Dune?", "acceptedAnswer": { "@type": "Answer", "text": "A large dune that produces a humming sound as sand slides down it." } }
                ] },
            };

        case "best-city-tour-almaty":
            return {
                title: "Which Is the Best City Tour in Almaty?",
                seoTitle: "Best Almaty City Tour 2026 | Honest Comparison",
                description: "Compare real Almaty city tours — from a budget walking tour with chocolate tasting to full-day private tours covering Kok-Tobe and Medeu.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/6eb082265fac1cfd5ff06721fe01f1466af66d5dc67d9836bca6952f5328dbbb.png",
                sections: [
                    { title: "The Short Answer", content: "Almaty city tours range from short walking tours of the centre to full-day private tours covering Kok-Tobe hill, Green Bazaar, and the mountain-facing suburbs. A half-day city highlights tour with hotel pickup covers the essentials efficiently.", tourCard: { slug: "almaty-city-highlights-with-hotel-pickup", title: "Almaty: City Highlights with Hotel Pickup", description: "A city highlights tour with convenient hotel pickup.", price: "From $208", duration: "1 day", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/6eb082265fac1cfd5ff06721fe01f1466af66d5dc67d9836bca6952f5328dbbb.png" } },
                    { title: "Practical Tips", content: "Almaty's main sights (Panfilov Park, Green Bazaar, Kok-Tobe) are spread out enough that a guided tour with transport is more efficient than walking between all of them." }
                ],
                faqs: [
                    { q: "What is the best city tour in Almaty?", a: "A city highlights tour with hotel pickup covers the essentials efficiently in a single day." },
                    { q: "Is Almaty walkable?", a: "The city centre is, but the main sights are spread out enough that a guided tour with transport helps." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "What is the best city tour in Almaty?", "acceptedAnswer": { "@type": "Answer", "text": "A city highlights tour with hotel pickup." } }
                ] },
            };

        case "best-shymbulak-medeu-tour-almaty":
            return {
                title: "Which Is the Best Shymbulak & Medeu Tour in Almaty?",
                seoTitle: "Best Shymbulak Medeu Tour Almaty 2026 | Comparison",
                description: "Compare real Shymbulak ski resort and Medeu skating rink tours from Almaty, including cable car options.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/8ddca89a88ba7fbfbd95344ee8d9cd48d429f8dbb901aceed71abbdb7b449175.jpg",
                sections: [
                    { title: "The Short Answer", content: "Shymbulak, Almaty's main ski resort, and Medeu, a famous high-altitude skating rink, sit in the same mountain gorge and are almost always visited together via a scenic cable car ride.", tourCard: { slug: "almaty-shymbulak-ski-resort-medeu-skating-rink", title: "Almaty: Shymbulak Ski Resort & Medeu Skating Rink Day Tour", description: "A combined tour of Shymbulak and Medeu.", price: "From $396", duration: "6 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/8ddca89a88ba7fbfbd95344ee8d9cd48d429f8dbb901aceed71abbdb7b449175.jpg" } },
                    { title: "Practical Tips", content: "Shymbulak is a genuine ski resort in winter, but the cable car runs year-round for mountain views even without snow — worth doing regardless of season." }
                ],
                faqs: [
                    { q: "Can Shymbulak be visited outside ski season?", a: "Yes, the cable car runs year-round for the views even without snow." },
                    { q: "What is Medeu known for?", a: "It's a famous high-altitude skating rink, visited for its setting as much as the ice itself." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "Can Shymbulak be visited outside ski season?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, the cable car runs year-round." } }
                ] },
            };

        case "best-issyk-lake-turgen-gorge-tour-almaty":
            return {
                title: "Which Is the Best Issyk Lake & Turgen Gorge Tour from Almaty?",
                seoTitle: "Best Issyk Lake Turgen Gorge Tour 2026 | Comparison",
                description: "Compare real Issyk Lake and Turgen Gorge waterfall day tours from Almaty.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/cd2f894326c2b737a04d83f0bff03fe0607d902d353bd1c42285ad8ad45a80f2.jpg",
                sections: [
                    { title: "The Short Answer", content: "Issyk Lake, a glacial lake formed by an ancient landslide, is usually combined with Turgen Gorge's waterfalls in one day trip east of Almaty.", tourCard: { slug: "almaty-issyk-lake-and-turgen-gorge-waterfall-day", title: "Almaty: Issyk Lake and Turgen Gorge Waterfall Day Tour", description: "A combined Issyk Lake and Turgen Gorge day trip.", price: "From $383", duration: "10 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/cd2f894326c2b737a04d83f0bff03fe0607d902d353bd1c42285ad8ad45a80f2.jpg" } },
                    { title: "Practical Tips", content: "Turgen Gorge has several waterfall stops along a trail, so wear shoes suited to uneven, sometimes wet terrain." }
                ],
                faqs: [
                    { q: "What is Issyk Lake known for?", a: "A glacial lake formed by an ancient landslide, known for its scenic setting." },
                    { q: "Are Issyk Lake and Turgen Gorge usually combined?", a: "Yes, they're in the same direction from Almaty and typically visited together." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "What is Issyk Lake known for?", "acceptedAnswer": { "@type": "Answer", "text": "A glacial lake formed by an ancient landslide." } }
                ] },
            };

        case "best-assy-plateau-tour-almaty":
            return {
                title: "Which Is the Best Assy Plateau Tour from Almaty?",
                seoTitle: "Best Assy Plateau Tour Almaty 2026 | Comparison",
                description: "Compare real Assy Plateau day tours from Almaty, including the Bear Waterfall hike add-on.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/652b59853c289e21b8f40a431f6c6697f4bab504af7973ea93d3a3586abb58df.jpg",
                sections: [
                    { title: "The Short Answer", content: "Assy Plateau is a high-altitude grassland popular for sweeping mountain views, often paired with a short hike to the Bear Waterfall.", tourCard: { slug: "from-almaty-assy-plateau-day-tour-bear-waterfall", title: "From Almaty: Assy Plateau Day Tour & Bear Waterfall Hike", description: "A day tour to Assy Plateau with a Bear Waterfall hike.", price: "From $71", duration: "1 day", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/652b59853c289e21b8f40a431f6c6697f4bab504af7973ea93d3a3586abb58df.jpg" } },
                    { title: "Practical Tips", content: "The plateau road can be rough in parts, so a 4WD vehicle is typically used — check if your tour includes 4WD transport if that matters to you." }
                ],
                faqs: [
                    { q: "What is Assy Plateau known for?", a: "Sweeping high-altitude grassland views, often paired with the Bear Waterfall hike." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "What is Assy Plateau known for?", "acceptedAnswer": { "@type": "Answer", "text": "Sweeping high-altitude grassland views." } }
                ] },
            };

        case "is-almaty-paragliding-worth-it":
            return {
                title: "Is Tandem Paragliding Over Almaty Worth It?",
                seoTitle: "Almaty Paragliding 2026 | Honest Review",
                description: "An honest look at tandem paragliding over the Almaty mountains.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/253e975c48ac422ad02573989635bb1f4b832365f7779234a631b6f40fe6a7f6.png",
                sections: [
                    { title: "The Short Answer", content: "Tandem paragliding over the Zailiysky Alatau mountains gives a genuinely different perspective on Almaty's setting than any ground-based tour, with multiple flight-length options to choose from.", tourCard: { slug: "almaty-3-tandem-paragliding-options-over-almaty", title: "Almaty: 3 Tandem Paragliding Options over Almaty Mountains", description: "Tandem paragliding with multiple flight-length options.", price: "From $221", duration: "2 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/253e975c48ac422ad02573989635bb1f4b832365f7779234a631b6f40fe6a7f6.png" } },
                    { title: "Practical Tips", content: "Flights depend on wind conditions and can be rescheduled at short notice — build a buffer day if this is a priority activity." }
                ],
                faqs: [
                    { q: "Is paragliding over Almaty worth it?", a: "Yes, for a genuinely different aerial view of the mountains surrounding the city." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "Is paragliding over Almaty worth it?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, for a different aerial view of the mountains." } }
                ] },
            };

        case "is-almaty-rock-climbing-worth-it":
            return {
                title: "Is Rock Climbing in Almaty Worth It?",
                seoTitle: "Almaty Rock Climbing 2026 | Honest Review",
                description: "An honest look at rock climbing on Almaty's Lesnichestvo routes.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/618b69d5e806c9ad38ffed3421d2df4e4f247c262481dc0f537c7f79e83499a5.jpeg",
                sections: [
                    { title: "The Short Answer", content: "The Lesnichestvo routes offer genuine rock climbing close to the city, with pickup included, making this one of the more accessible adventure activities around Almaty.", tourCard: { slug: "almaty-rock-climbing-on-the-lesnichestvo-routes", title: "Almaty: Rock Climbing on the Lesnichestvo Routes with Pickup", description: "A rock climbing session on the Lesnichestvo routes.", price: "From $143", duration: "4 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/618b69d5e806c9ad38ffed3421d2df4e4f247c262481dc0f537c7f79e83499a5.jpeg" } },
                    { title: "Practical Tips", content: "Suitable for beginners as well as experienced climbers since routes vary in difficulty — confirm your experience level with the operator in advance." }
                ],
                faqs: [
                    { q: "Is rock climbing in Almaty suitable for beginners?", a: "Yes, routes vary in difficulty — confirm your level with the operator in advance." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "Is rock climbing in Almaty suitable for beginners?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, routes vary in difficulty." } }
                ] },
            };

        case "best-almaty-mountain-hiking-tour-almaty":
            return {
                title: "Which Is the Best Mountain Hiking Tour in Almaty?",
                seoTitle: "Best Almaty Mountain Hiking Tour 2026 | Comparison",
                description: "Compare real guided hiking tours in the mountains around Almaty.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/6574921525af045b76d6459930fdc2742748c6d5e7a8eb288588acbaaa16e1aa.jpg",
                sections: [
                    { title: "The Short Answer", content: "Almaty's mountain backdrop (the Zailiysky Alatau range) offers full-day guided hikes ranging from moderate panoramic routes to more demanding peak hikes.", tourCard: { slug: "almaty-mountains-private-full-day-hiking-tour", title: "Almaty Mountains: Private Full-Day Hiking Tour", description: "A private full-day hiking tour in the Almaty mountains.", price: "From $378", duration: "1 day", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/6574921525af045b76d6459930fdc2742748c6d5e7a8eb288588acbaaa16e1aa.jpg" } },
                    { title: "Practical Tips", content: "Weather at altitude can shift quickly even in summer — bring layers and check conditions with your guide before setting out." }
                ],
                faqs: [
                    { q: "What is the best hiking tour in Almaty?", a: "A private full-day guided hike suits most visitors wanting to explore the surrounding mountains properly." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "What is the best hiking tour in Almaty?", "acceptedAnswer": { "@type": "Answer", "text": "A private full-day guided hike." } }
                ] },
            };

        case "is-almaty-private-dinner-worth-it":
            return {
                title: "Is a Private Dinner with a Kazakh Family in Almaty Worth It?",
                seoTitle: "Almaty Kazakh Family Dinner 2026 | Honest Review",
                description: "An honest look at the private dinner experience with a local Kazakh family in Almaty.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/79665ebc6de8cbabdf4d56f6cd3bd78e218160cdb2c8919538e34dbca18543e0.jpeg",
                sections: [
                    { title: "The Short Answer", content: "This experience brings you into a local home for a traditional Kazakh meal, a genuinely different way to experience the culture compared to a restaurant meal.", tourCard: { slug: "almaty-private-dinner-with-a-kazakh-family", title: "Almaty: Private Dinner with a Kazakh Family", description: "A home-hosted dinner experience with a local Kazakh family.", price: "From $389", duration: "3 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/79665ebc6de8cbabdf4d56f6cd3bd78e218160cdb2c8919538e34dbca18543e0.jpeg" } },
                    { title: "Practical Tips", content: "Worth it for travellers who specifically want cultural depth over convenience — it's pricier than a restaurant meal, but the access to a real family setting is the point." }
                ],
                faqs: [
                    { q: "Is the Kazakh family dinner worth it?", a: "Yes, for travellers who want genuine cultural depth rather than just a restaurant meal." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "Is the Kazakh family dinner worth it?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, for genuine cultural depth." } }
                ] },
            };

        case "is-almaty-shooting-tour-worth-it":
            return {
                title: "Is the Almaty Shooting Tour Worth It?",
                seoTitle: "Almaty Shooting Tour 2026 | Honest Review",
                description: "An honest look at Almaty's shooting range tour with AK-47, M16, Mosin, and Glock options.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/78aac921bfe41f6b8b53a39af17f81acf37fe501641d3b900bab382c5d5f3da2.jpg",
                sections: [
                    { title: "The Short Answer", content: "This shooting range experience lets visitors fire a range of firearms (AK-47, M16, Mosin, Glock, and more) under supervision — a niche but genuinely different activity from Almaty's usual nature-focused tours.", tourCard: { slug: "almaty-shooting-tour-with-ak-47-m16-mosin-glock", title: "Almaty: Shooting Tour with AK 47, M16, Mosin, Glock & More", description: "A supervised shooting range experience with multiple firearm options.", price: "From $234", duration: "3 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/78aac921bfe41f6b8b53a39af17f81acf37fe501641d3b900bab382c5d5f3da2.jpg" } },
                    { title: "Practical Tips", content: "Safety briefings and supervision are standard for this kind of experience — worth it specifically for travellers interested in firearms, skippable otherwise." }
                ],
                faqs: [
                    { q: "Is the Almaty shooting tour safe?", a: "Yes, it runs under professional supervision with safety briefings included." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "Is the Almaty shooting tour safe?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, it runs under professional supervision." } }
                ] },
            };

        case "almaty-travel-guide-2026":
            return {
                title: "Almaty Travel Guide 2026",
                description: "Kazakhstan's largest city sits at the foot of the Tian Shan mountains, mixing Soviet-era architecture with genuinely dramatic alpine scenery just outside town.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/6eb082265fac1cfd5ff06721fe01f1466af66d5dc67d9836bca6952f5328dbbb.png",
                sections: [
                    { title: "Why Visit Almaty", content: "Almaty is the gateway to some of Central Asia's most dramatic scenery — Charyn Canyon, Kolsai Lakes, Big Almaty Lake, and the Tian Shan mountains are all within day-trip range. The city itself has a relaxed, leafy character distinct from Astana's futuristic skyline." },
                    { title: "Getting Around", content: "The city centre is walkable, but most of Almaty's biggest draws (lakes, canyons, ski resorts) require a car or organized tour, since public transport doesn't reach them." }
                ],
                faqs: [
                    { q: "Is Almaty worth visiting?", a: "Yes, both for the city itself and as a base for some of Central Asia's best mountain and canyon scenery." }
                ],
            };

        case "best-time-to-visit-almaty":
            return {
                title: "Best Time to Visit Almaty",
                description: "Almaty has genuine four-season weather, and timing shapes which of its signature day trips are actually doable.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/6eb082265fac1cfd5ff06721fe01f1466af66d5dc67d9836bca6952f5328dbbb.png",
                sections: [
                    { title: "Seasonal Overview", content: "Summer (June-August) is best for Charyn Canyon, Kolsai Lakes, and Big Almaty Lake hikes. Winter (December-March) is ski season at Shymbulak. Spring and autumn offer milder weather but some mountain roads can be affected by snow or mud." }
                ],
                faqs: [
                    { q: "When is the best time to visit Almaty's lakes and canyons?", a: "Summer, June through August, for the most reliable access and weather." },
                    { q: "When is ski season at Shymbulak?", a: "Roughly December through March." }
                ],
            };

        case "almaty-1-day-itinerary":
            return {
                title: "Almaty 1-Day Itinerary",
                description: "A realistic one-day plan for Almaty if your trip is short.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/6eb082265fac1cfd5ff06721fe01f1466af66d5dc67d9836bca6952f5328dbbb.png",
                sections: [
                    { title: "Morning", content: "Start with Panfilov Park and the Zenkov Cathedral, then browse Green Bazaar for local produce and snacks." },
                    { title: "Afternoon", content: "Take the cable car up to Kok-Tobe hill for panoramic city views, or head up to Medeu/Shymbulak if you have more time." },
                    { title: "Evening", content: "Finish with dinner in the city centre — Almaty has a strong, varied food scene for a one-day visit." }
                ],
                faqs: [
                    { q: "Can Almaty be seen in one day?", a: "The city itself, yes — but its famous lakes and canyons need separate full days of their own." }
                ],
            };

        case "kazakhstan-visa-guide-for-tourists":
            return {
                title: "Kazakhstan Visa Guide for Tourists (Almaty)",
                description: "Visa requirements for visiting Almaty and Kazakhstan.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/6eb082265fac1cfd5ff06721fe01f1466af66d5dc67d9836bca6952f5328dbbb.png",
                sections: [
                    { title: "Visa Requirements", content: "Kazakhstan offers visa-free entry to many nationalities for a set period. Check Kazakhstan's official immigration requirements for your specific nationality before travel, since rules vary and change." }
                ],
                faqs: [
                    { q: "Do I need a visa to visit Almaty?", a: "Many nationalities get visa-free entry; verify current requirements for your passport before travel." }
                ],
            };

        case "is-almaty-safe":
            return {
                title: "Is Almaty Safe for Tourists?",
                description: "An honest look at safety in Almaty for visitors.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/6eb082265fac1cfd5ff06721fe01f1466af66d5dc67d9836bca6952f5328dbbb.png",
                sections: [
                    { title: "The Short Answer", content: "Almaty is generally safe for tourists in the main city areas. Standard precautions apply for mountain day trips — weather and altitude are the real risks, more than crime." }
                ],
                faqs: [
                    { q: "Is Almaty safe for tourists?", a: "Yes, generally — the bigger risks on day trips are weather and altitude rather than crime." }
                ],
            };

        case "almaty-food-guide":
            return {
                title: "Almaty Food Guide",
                description: "What to eat in Almaty.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/6eb082265fac1cfd5ff06721fe01f1466af66d5dc67d9836bca6952f5328dbbb.png",
                sections: [
                    { title: "Local Specialties", content: "Try plov (rice pilaf), beshbarmak (boiled meat with noodles), and kazy (horse sausage) for a genuine taste of Kazakh cuisine. Green Bazaar is a good place to sample a range of local snacks and produce." }
                ],
                faqs: [
                    { q: "What food is Almaty known for?", a: "Plov, beshbarmak, and kazy are classic Kazakh dishes worth trying." }
                ],
            };

        case "almaty-currency-guide":
            return {
                title: "Almaty Currency Guide",
                description: "How to handle money in Almaty.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/6eb082265fac1cfd5ff06721fe01f1466af66d5dc67d9836bca6952f5328dbbb.png",
                sections: [
                    { title: "Currency Basics", content: "The Kazakhstani Tenge (KZT) is the local currency. Cards are widely accepted in the city, but carry some cash for markets and smaller tour operators, especially on day trips outside the city." }
                ],
                faqs: [
                    { q: "What currency does Almaty use?", a: "The Kazakhstani Tenge (KZT)." }
                ],
            };

        case "is-kazakh-wine-masterclass-worth-it-almaty":
            return {
                title: "Is the Kazakh Wine Masterclass in Almaty Worth It?",
                seoTitle: "Almaty Kazakh Wine Masterclass 2026 | Honest Review",
                description: "An honest look at Almaty's Kazakh wine masterclass, a tasting of local Kazakhstani wines most visitors don't expect to find.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/833536f110ad718358721aaf651ee77f86670a7ce1b31a188b8a89cb46911a4c.jpg",
                sections: [
                    { title: "The Short Answer", content: "Kazakhstan has a small but genuine domestic wine industry, and this English-hosted tasting of 6 wines is a good introduction most visitors don't expect to find here.", tourCard: { slug: "almaty-kazakh-6-wine-masterclass-with-english", title: "Almaty: Kazakh 6-Wine Masterclass with English-Speaking Host", description: "A tasting of 6 Kazakh wines with an English-speaking host.", price: "From $77", duration: "1.5 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/833536f110ad718358721aaf651ee77f86670a7ce1b31a188b8a89cb46911a4c.jpg" } },
                    { title: "Practical Tips", content: "This works well as an evening activity paired with dinner, since it only runs about 1.5 hours." }
                ],
                faqs: [
                    { q: "Is the Kazakh wine masterclass worth it?", a: "Yes, a genuine and unexpected introduction to Kazakhstan's small domestic wine industry." },
                    { q: "Does Kazakhstan produce wine?", a: "Yes, a small but real domestic wine industry exists, mostly unknown to visitors." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "Is the Kazakh wine masterclass worth it?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, a genuine introduction to Kazakhstan's domestic wine industry." } }
                ] },
            };

        case "best-almaty-evening-experience-almaty":
            return {
                title: "Which Is the Best Almaty Evening Experience?",
                seoTitle: "Best Almaty Evening Tour 2026 | Night Lights & Retro Cruise",
                description: "Compare Almaty's two standout evening experiences — a night lights panoramic tour with a bar stop, and a retro cruise in a vintage 1973 Cadillac.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/3af47cc40c93bdf336c4520e474dc8733a86d25f286fd0520dbe0813c160136d.jpeg",
                sections: [
                    { title: "The Short Answer", content: "For panoramic night views plus a social element, go with the night lights tour; for a more novel, photogenic experience, the vintage Cadillac cruise stands out.", tourCard: { slug: "almaty-night-lights-tour-panoramic-views-local", title: "Almaty: Night Lights Tour, Panoramic Views & Local Bar Stop", description: "An evening tour of Almaty's night views with a bar stop.", price: "From $234", duration: "5 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/3af47cc40c93bdf336c4520e474dc8733a86d25f286fd0520dbe0813c160136d.jpeg" } },
                    { title: "Most Novel: Private Retro Cruise in a 1973 Cadillac", content: "A private cruise through the city in a vintage 1973 Cadillac, a genuinely unusual and photogenic way to see Almaty after dark.", tourCard: { slug: "almaty-private-retro-cruise-in-a-1973-cadillac", title: "Almaty: Private Retro Cruise in a 1973 Cadillac", description: "A private retro cruise through Almaty in a vintage Cadillac.", price: "From $974", duration: "3 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/9d33ad251435637ca67c49dfd18b8dcba83b0140383d7ce3543437be4b74466f.jpeg" } },
                    { title: "Practical Tips", content: "Both work well after a day of mountain or canyon touring, as a relaxed way to end the day back in the city." }
                ],
                faqs: [
                    { q: "What is the best evening activity in Almaty?", a: "A night lights panoramic tour with a bar stop, or a vintage Cadillac cruise for something more novel." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "What is the best evening activity in Almaty?", "acceptedAnswer": { "@type": "Answer", "text": "A night lights tour or a vintage Cadillac cruise." } }
                ] },
            };

        case "is-tanbaly-gorge-petroglyphs-tour-worth-it-almaty":
            return {
                title: "Is the Tanbaly Gorge Petroglyphs Day Tour from Almaty Worth It?",
                seoTitle: "Tanbaly Gorge Petroglyphs Tour 2026 | Honest Review",
                description: "An honest look at the Tanbaly Gorge day tour, a UNESCO World Heritage site with ancient petroglyphs a few hours from Almaty.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/d4712704d5f14a0489eefd7a32e748c6b7ff82e124b3d7717b29ef572feb210a.jpg",
                sections: [
                    { title: "The Short Answer", content: "Tanbaly Gorge holds thousands of ancient petroglyphs dating back millennia, a genuinely different kind of day trip from Almaty's usual lakes and canyons — worth it for travelers interested in archaeology and ancient history.", tourCard: { slug: "tanbaly-gorge-ancient-petroglyphs-day-tour-at-a", title: "Tanbaly Gorge: Ancient Petroglyphs Day Tour at a UNESCO Site", description: "A day tour to the UNESCO-listed Tanbaly Gorge petroglyphs.", price: "From $384", duration: "8 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/d4712704d5f14a0489eefd7a32e748c6b7ff82e124b3d7717b29ef572feb210a.jpg" } },
                    { title: "Practical Tips", content: "This is a less-visited site compared to Charyn Canyon or the Kolsai Lakes, so it suits travelers who prefer a quieter day trip over a crowded one." }
                ],
                faqs: [
                    { q: "Is the Tanbaly Gorge tour worth it?", a: "Yes, for travelers interested in ancient history and archaeology, and as a quieter alternative to Almaty's more crowded nature day trips." },
                    { q: "What is at Tanbaly Gorge?", a: "Thousands of ancient petroglyphs (rock carvings), a UNESCO World Heritage Site." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "Is the Tanbaly Gorge tour worth it?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, for ancient history fans and as a quieter day-trip alternative." } }
                ] },
            };

        case "is-wwii-soviet-history-tour-worth-it-almaty":
            return {
                title: "Is the WWII & Soviet History Tour in Almaty Worth It?",
                seoTitle: "Almaty WWII Soviet History Tour 2026 | Honest Review",
                description: "An honest look at Almaty's private WWII and Soviet history tour, covering the city's museums and monuments from this era.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/d2d74513d837099d634897191bccaf8b665503c32aa334cd95464f4990587873.jpg",
                sections: [
                    { title: "The Short Answer", content: "Almaty has a layer of Soviet and WWII-era history often missed by visitors focused on mountains and lakes — this private tour covers relevant museums and monuments with historical context from a local guide.", tourCard: { slug: "almaty-private-wwii-soviet-history-tour-with", title: "Almaty: Private WWII & Soviet History Tour with Museums", description: "A private tour of Almaty's WWII and Soviet-era history.", price: "From $354", duration: "4.5 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/d2d74513d837099d634897191bccaf8b665503c32aa334cd95464f4990587873.jpg" } },
                    { title: "Practical Tips", content: "Worth pairing with a general city tour, since this one focuses specifically on the historical angle rather than Almaty's broader highlights." }
                ],
                faqs: [
                    { q: "Is the WWII & Soviet history tour worth it in Almaty?", a: "Yes, for a historical layer of the city most general city tours skip." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "Is the WWII Soviet history tour worth it?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, for a historical layer most city tours skip." } }
                ] },
            };

        case "best-city-tour-astana":
            return {
                title: "Which Is the Best City Tour in Astana?",
                seoTitle: "Best Astana City Tour 2026 | Honest Comparison",
                description: "Compare real Astana city tours — from a landmarks-by-night tour to Baiterek Tower views and Soviet/Imperialist architecture walks.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/32e3be5ef75af5097044c7541b480e89ef8f9efb53bf2bce40b9e798b767ffc6.jpg",
                sections: [
                    { title: "The Short Answer", content: "Astana's futuristic skyline and Soviet-era old city offer very different sightseeing angles, and most tours pick one focus — night skyline, Baiterek Tower views, or historic architecture.", tourCard: { slug: "astana-city-highlights-tour-with-views-from", title: "Astana: City Highlights Tour with Views from Baiterek Tower", description: "A city highlights tour including views from Baiterek Tower.", price: "From $78", duration: "4 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/32e3be5ef75af5097044c7541b480e89ef8f9efb53bf2bce40b9e798b767ffc6.jpg" } },
                    { title: "Best at Night: Landmarks by Night Tour", content: "Astana's modern architecture is dramatically lit after dark — this version is timed specifically to see the skyline at its best.", tourCard: { slug: "astana-city-tour-landmarks-by-night-with-a", title: "Astana City Tour: Landmarks by Night with a Certified Guide", description: "A night tour of Astana's illuminated landmarks.", price: "From $78", duration: "4 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/95ba6de3d97cfcc047803f822b385fdc4dbbf08d5595e5bc1b9d6a5f7aff984e.jpg" } },
                    { title: "Best for History: Old City Soviet & Imperialist Architecture", content: "This focuses on Astana's older architecture rather than the futuristic new city, a genuinely different angle on the city's history.", tourCard: { slug: "astana-old-city-tour-of-imperialistic-soviet", title: "Astana: Old City Tour of Imperialistic & Soviet Architecture", description: "A tour of Astana's Soviet and Imperialist-era architecture.", price: "From $78", duration: "4 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/62d7da0a151ca5fb138acb5f3f97b08fc228f72aa92cc3853394b1346942af7e.jpg" } },
                    { title: "Best with Entry Included: Baiterek Entry Ticket Tour", content: "This explicitly bundles the Baiterek Tower entrance ticket into the tour price, avoiding a separate purchase at the site.", tourCard: { slug: "astana-city-highlights-tour-with-baiterek-entry", title: "Astana: City Highlights Tour with Baiterek Entry Ticket", description: "A city tour with Baiterek Tower entry included.", price: "From $116", duration: "4 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/4d153ebe3d89a82da15f2906aa034bc6aa016ed1bc92c76248583adfd6f3ee85.jpeg" } },
                    { title: "Practical Tips", content: "Astana's winters are genuinely extreme (often well below -20°C), so dress accordingly if visiting outside summer — the modern architecture is dramatic either way, but outdoor walking time shrinks fast in deep cold." }
                ],
                faqs: [
                    { q: "What is the best city tour in Astana?", a: "A Baiterek Tower highlights tour suits most visitors; go at night for the illuminated skyline or focus on the old city for Soviet-era history." },
                    { q: "Is Astana's winter severe?", a: "Yes, temperatures regularly drop well below -20°C — dress accordingly for outdoor sightseeing." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "What is the best city tour in Astana?", "acceptedAnswer": { "@type": "Answer", "text": "A Baiterek Tower highlights tour suits most visitors." } },
                    { "@type": "Question", "name": "Is Astana's winter severe?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, often well below -20°C." } }
                ] },
            };

        case "is-burabay-national-park-tour-worth-it-astana":
            return {
                title: "Is a Burabay National Park Tour from Astana Worth It?",
                seoTitle: "Burabay National Park Tour Astana 2026 | Honest Review",
                description: "An honest look at Burabay National Park day trips from Astana, often called Kazakhstan's 'Switzerland.'",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/b4ca9913dc45d68874ac3286815188bf9dac33ed338d48a57d648f8f07028cf5.jpeg",
                sections: [
                    { title: "The Short Answer", content: "Burabay National Park's lakes and granite rock formations are a genuine contrast to Astana's steppe surroundings, often compared to Switzerland for its scenery — worth the day trip if you want nature alongside the city's architecture.", tourCard: { slug: "astana-burabay-national-park-tour-with-lunch-and", title: "Astana: Burabay National Park Tour with Lunch and Pickup", description: "A day trip to Burabay National Park with lunch included.", price: "From $381", duration: "1 day", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/b4ca9913dc45d68874ac3286815188bf9dac33ed338d48a57d648f8f07028cf5.jpeg" } },
                    { title: "Best for a Fuller Trip: 2-Day Astana & Burabay Tour", content: "For travellers who want more than a rushed day trip, this private 2-day version adds an overnight stay near the park.", tourCard: { slug: "astana-private-2-day-tour-of-astana-burabay", title: "Astana: Private 2-Day Tour of Astana & Burabay National Park", description: "A private 2-day tour combining Astana and Burabay.", price: "From $649", duration: "2 days", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/64faf45abec07c0eff820f3f8ed6be30a59da8d560a6ade3c2f7dabe7c2d89e9.jpeg" } },
                    { title: "Practical Tips", content: "Burabay is about 3 hours from Astana, so the day-trip version is a long but doable round trip — the 2-day version is worth it if you'd rather not spend most of a single day in a vehicle." }
                ],
                faqs: [
                    { q: "Is Burabay National Park worth visiting from Astana?", a: "Yes, for lake and granite-formation scenery genuinely different from the steppe around Astana." },
                    { q: "How far is Burabay from Astana?", a: "About 3 hours each way, making a day trip long but doable, or better as a 2-day overnight trip." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "Is Burabay National Park worth visiting?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, for scenery genuinely different from the steppe." } },
                    { "@type": "Question", "name": "How far is Burabay from Astana?", "acceptedAnswer": { "@type": "Answer", "text": "About 3 hours each way." } }
                ] },
            };

        case "astana-travel-guide-2026":
            return {
                title: "Astana Travel Guide 2026",
                description: "What visitors need to know about Astana, Kazakhstan's futuristic capital.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/32e3be5ef75af5097044c7541b480e89ef8f9efb53bf2bce40b9e798b767ffc6.jpg",
                sections: [
                    { title: "Why Visit", content: "Astana (also known as Nur-Sultan in recent years) is known for its dramatic modern architecture — Baiterek Tower, the Khan Shatyr tent, and a skyline built largely since 1997 when it became the capital." }
                ],
                faqs: [
                    { q: "Is Astana worth visiting?", a: "Yes, for its dramatic modern architecture, built almost entirely since it became the capital in 1997." }
                ],
            };

        case "best-time-to-visit-astana":
            return {
                title: "Best Time to Visit Astana",
                description: "Astana has one of the most extreme climates of any capital city — timing matters a lot here.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/32e3be5ef75af5097044c7541b480e89ef8f9efb53bf2bce40b9e798b767ffc6.jpg",
                sections: [
                    { title: "Weather Patterns", content: "Summers (June-August) are warm and the best time for outdoor sightseeing and Burabay day trips. Winters are brutally cold, often well below -20°C, though the illuminated skyline still has its own appeal for those who don't mind the cold." }
                ],
                faqs: [
                    { q: "What is the best time to visit Astana?", a: "June to August for warm weather suited to outdoor sightseeing and day trips." }
                ],
            };

        case "best-turkistan-tour-shymkent":
            return {
                title: "Which Is the Best Turkistan Day Tour from Shymkent?",
                seoTitle: "Best Turkistan Tour from Shymkent 2026 | Comparison",
                description: "Compare real Turkistan day tours from Shymkent — a standard guided day tour versus an all-inclusive version and a 2-day private option.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/9e1b23ef2deed17e9d55c88d8cc6ff0437b5ac78be7c07507af9656803388517.png",
                sections: [
                    { title: "The Short Answer", content: "Turkistan's UNESCO-listed Mausoleum of Khoja Ahmed Yasawi is the main draw, and tours differ mainly in length and whether Otrar's ruins are added to the day.", tourCard: { slug: "shymkent-turkestan-guided-tour", title: "From Shymkent: Turkestan and Otrar Day Tour with Guide", description: "A standard guided day tour to Turkistan and Otrar.", price: "From $299", duration: "8 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/2e783e31b6374ba1900bed52579c30a10c695318aa79424ac631d5ca9492efad.jpg" } },
                    { title: "Best All-Inclusive: One-Day Turkistan Tour", content: "This bundles everything into one all-inclusive price, removing the guesswork of extra costs along the way.", tourCard: { slug: "from-shymkent-all-inclusive-one-day-turkistan-tour", title: "From Shymkent: All-Inclusive One-Day Turkistan Tour", description: "An all-inclusive day tour to Turkistan.", price: "From $262", duration: "1 day", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/9e1b23ef2deed17e9d55c88d8cc6ff0437b5ac78be7c07507af9656803388517.png" } },
                    { title: "Best for More Time: 2-Day Private Turkistan Tour", content: "This spreads the visit over two days for up to two travellers, giving a more relaxed pace than a single long day trip.", tourCard: { slug: "from-shymkent-2-day-private-turkistan-tour-for-up", title: "From Shymkent: 2-Day Private Turkistan Tour for Up to Two", description: "A private 2-day Turkistan tour for up to two travellers.", price: "From $481", duration: "2 days", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/9e1b23ef2deed17e9d55c88d8cc6ff0437b5ac78be7c07507af9656803388517.png" } },
                    { title: "Practical Tips", content: "The Yasawi Mausoleum is one of Central Asia's most significant Islamic architectural sites — a knowledgeable guide adds real context to the UNESCO listing and the site's history." }
                ],
                faqs: [
                    { q: "What is the best Turkistan tour from Shymkent?", a: "A standard day tour covers the essentials; go all-inclusive for simplicity or 2 days for a more relaxed pace." },
                    { q: "What is the main site in Turkistan?", a: "The UNESCO-listed Mausoleum of Khoja Ahmed Yasawi." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "What is the best Turkistan tour?", "acceptedAnswer": { "@type": "Answer", "text": "A standard day tour, all-inclusive, or 2 days for a relaxed pace." } },
                    { "@type": "Question", "name": "What is the main site?", "acceptedAnswer": { "@type": "Answer", "text": "The UNESCO-listed Mausoleum of Khoja Ahmed Yasawi." } }
                ] },
            };

        case "is-city-tour-worth-it-shymkent":
            return {
                title: "Is a Private City Tour of Shymkent Worth It?",
                seoTitle: "Shymkent City Tour 2026 | Honest Review",
                description: "An honest look at the private city tour by car in Shymkent, Kazakhstan's third-largest city.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/a5e0b8ef9d8c8d6ae6094d9ec75924364606c5844964050d4b76a6ea88db90e0.jpg",
                sections: [
                    { title: "The Short Answer", content: "A private car tour with a local guide is a straightforward way to see Shymkent's main sights before or after a Turkistan day trip, without needing to navigate the city yourself.", tourCard: { slug: "shymkent-private-city-tour-by-car-with-local-guide", title: "Shymkent: Private City Tour by Car with Local Guide", description: "A private city tour of Shymkent with a local guide.", price: "From $182", duration: "5 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/a5e0b8ef9d8c8d6ae6094d9ec75924364606c5844964050d4b76a6ea88db90e0.jpg" } },
                    { title: "Practical Tips", content: "Most visitors use Shymkent primarily as a base for Turkistan — this city tour is worth adding if you have an extra half-day rather than rushing straight to the main attraction." }
                ],
                faqs: [
                    { q: "Is a Shymkent city tour worth it?", a: "Yes, if you have extra time beyond a Turkistan day trip — a straightforward way to see the city with a local guide." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "Is a Shymkent city tour worth it?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, if you have extra time beyond a Turkistan day trip." } }
                ] },
            };

        case "is-aksu-canyon-tour-worth-it-shymkent":
            return {
                title: "Is the Aksu Canyon & Tian Shan Mountains Day Trip from Shymkent Worth It?",
                seoTitle: "Aksu Canyon Tian Shan Tour Shymkent 2026 | Review",
                description: "An honest look at the Aksu Canyon and Tian Shan Mountains day trip from Shymkent, a dramatic natural landscape distinct from Turkistan's historical sites.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/6ea8d33d24e755fa89498f1a5b71940a3dae9ea8343208440daf5b5474d6dad5.jpeg",
                sections: [
                    { title: "The Short Answer", content: "Aksu Canyon, sometimes compared to a smaller-scale Grand Canyon, and the surrounding Tian Shan mountain scenery offer a genuinely different day from Shymkent's historical/cultural sites — good if you want nature alongside the Turkistan history.", tourCard: { slug: "from-shymkent-day-trip-to-aksu-canyon-tian-shan", title: "From Shymkent: Day Trip to Aksu Canyon & Tian Shan Mountains", description: "A day trip to Aksu Canyon and the Tian Shan Mountains.", price: "From $459", duration: "1 day", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/6ea8d33d24e755fa89498f1a5b71940a3dae9ea8343208440daf5b5474d6dad5.jpeg" } },
                    { title: "Practical Tips", content: "This is a genuinely different landscape from Turkistan's historical sites — worth it specifically if natural scenery, not just history, is part of what you want from a Shymkent-region trip." }
                ],
                faqs: [
                    { q: "Is the Aksu Canyon day trip worth it?", a: "Yes, for dramatic canyon and mountain scenery genuinely different from Shymkent's historical sites." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "Is the Aksu Canyon day trip worth it?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, for dramatic natural scenery distinct from the historical sites." } }
                ] },
            };

        case "is-karlag-museum-tour-worth-it-astana":
            return {
                title: "Is the Karaganda & Karlag Museum Day Tour Worth It from Astana?",
                seoTitle: "Karlag Museum Tour Astana 2026 | Honest Review",
                description: "An honest look at the Karaganda and Karlag Museum day tour, covering one of the Soviet Union's largest Gulag labor camp systems.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/86f1fe3fad062a0c675bef269782456f68076c4b9a2d718e7a038bbc2b60a8b9.jpg",
                sections: [
                    { title: "The Short Answer", content: "Karlag was one of the largest forced-labor camp systems in the Soviet Gulag network, and this museum preserves its history in sobering detail — a genuinely significant historical site, very different in tone from Astana's futuristic architecture tours.", tourCard: { slug: "from-astana-soviet-karaganda-karlag-museum-day", title: "From Astana: Soviet Karaganda & Karlag Museum Day Tour", description: "A day tour covering Karaganda and the Karlag Museum.", price: "From $311", duration: "10 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/86f1fe3fad062a0c675bef269782456f68076c4b9a2d718e7a038bbc2b60a8b9.jpg" } },
                    { title: "Practical Tips", content: "This is an emotionally heavy historical site — go in with that expectation rather than treating it as standard sightseeing." }
                ],
                faqs: [
                    { q: "What was Karlag?", a: "One of the largest forced-labor camp systems in the Soviet Gulag network, based near Karaganda." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "What was Karlag?", "acceptedAnswer": { "@type": "Answer", "text": "One of the largest Soviet Gulag forced-labor camp systems." } }
                ] },
            };

        default:
            return null;
    }
}

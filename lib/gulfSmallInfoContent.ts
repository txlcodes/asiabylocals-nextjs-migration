import { CityInfoData } from './cityInfoContent';

export function getGulfSmallInfoContent(slug: string): CityInfoData | null {
    switch (slug) {
        case "best-desert-city-tour-kuwait-city":
            return {
                title: "Which Is the Best Desert & City Combo Tour in Kuwait City?",
                seoTitle: "Best Kuwait City Desert Tour 2026 | Honest Comparison",
                description: "Compare real Kuwait City and desert combo tours — from a $72 half-day pickup/drop-off tour to buggy desert safaris and premium full-day sightseeing.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/9e82076bb2f32408fed6b8695124493f91d71a2ea8a827e7aab5af34e9f80b0f.jpg",
                sections: [
                    { title: "The Short Answer", content: "Most Kuwait City tours pair the skyline and Kuwait Towers with a desert stop, since both are close together outside the city center. A half-day licensed tour covers the basics without a full-day commitment.", tourCard: { slug: "half-day-licensed-tours-in-kuwait-city-desert", title: "Half Day licensed Tours in Kuwait City & Desert Pick&DropOff", description: "A half-day licensed tour covering city and desert.", price: "From $72", duration: "5 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/9e82076bb2f32408fed6b8695124493f91d71a2ea8a827e7aab5af34e9f80b0f.jpg" } },
                    { title: "Best for Adventure: Desert Safari with Buggies & Camels", content: "This version adds buggy rides and camel encounters to the desert stop alongside the Kuwait Towers visit, for a more active outing.", tourCard: { slug: "kuwait-desert-safari-buggys-camels-kuwait-towers", title: "Kuwait: Desert Safari, buggy's, Camels & Kuwait Towers", description: "A desert safari with buggies and camels plus Kuwait Towers.", price: "From $130", duration: "5 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/f564d0f33537c373c12885d2835ab6d95968e54a177a8c0d5a9b36901e4d70bb.jpeg" } },
                    { title: "Best Full Day: Licensed City & Desert Tour", content: "A longer full-day version of the licensed city-and-desert combo, giving more time at each stop than the half-day option.", tourCard: { slug: "full-day-licensed-tours-in-kuwait-city-desert", title: "Full Day licensed Tours in Kuwait City & Desert Pick&DropOff", description: "A full-day licensed city and desert tour.", price: "From $143", duration: "9 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/c645b76982dbfe1c5ebd3e016fc8f1085151b80606f55a44f2a7f128d6ffdc18.jpg" } },
                    { title: "Most Premium: Premium Full-Day Sightseeing", content: "The highest-tier version, billed as premium sightseeing for travellers who want a more polished experience than the standard licensed tours.", tourCard: { slug: "from-kuwait-city-premium-full-day-sightseeing-tour", title: "From Kuwait City : Premium Full-Day Sightseeing Tour", description: "A premium full-day sightseeing tour of Kuwait City.", price: "From $254", duration: "7 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/7c3c825d5098749f28c49c7bdb7419da21896c8357f238565b9dcd31e73d0cf9.jpg" } },
                    { title: "Practical Tips", content: "Kuwait's desert is best visited outside midday heat, especially April-October — morning or late-afternoon tours are noticeably more comfortable than midday ones." }
                ],
                faqs: [
                    { q: "What is the best desert and city tour in Kuwait City?", a: "A half-day licensed tour suits most visitors; add buggies and camels for a more active desert stop." },
                    { q: "Is Kuwait's desert close to the city?", a: "Yes, most tours combine it with Kuwait Towers and other city sights in the same half-day or full-day trip." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "What is the best desert and city tour in Kuwait City?", "acceptedAnswer": { "@type": "Answer", "text": "A half-day licensed tour suits most visitors." } },
                    { "@type": "Question", "name": "Is the desert close to the city?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, most tours combine it with Kuwait Towers in one trip." } }
                ] },
            };

        case "is-kuwait-private-city-tour-worth-it":
            return {
                title: "Is a Private Guided Tour of Kuwait City Worth It?",
                seoTitle: "Kuwait City Private Tour 2026 | Honest Review",
                description: "An honest look at Kuwait City's private guided tour with a local guide.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/41ca76d2b8769af7003e0e2ba4251288b2ebc011fac3f82c20ec1032040c09e5.jpg",
                sections: [
                    { title: "The Short Answer", content: "A private tour with a local guide gives flexibility over route and pace that a shared licensed tour doesn't — worth the premium if you want to linger at specific sights or skip others entirely.", tourCard: { slug: "kuwait-city-private-tour-with-a-local-guide", title: "Kuwait City: Private Tour with a Local Guide", description: "A private, flexible tour of Kuwait City with a local guide.", price: "From $194", duration: "6 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/41ca76d2b8769af7003e0e2ba4251288b2ebc011fac3f82c20ec1032040c09e5.jpg" } },
                    { title: "Practical Tips", content: "Tell your guide in advance if you have specific priorities (shopping, architecture, food) — private tours are flexible enough to reshape around your interests rather than following a fixed script." }
                ],
                faqs: [
                    { q: "Is a private Kuwait City tour worth it?", a: "Yes, if you want flexibility over pace and route rather than a fixed shared itinerary." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "Is a private Kuwait City tour worth it?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, for flexibility over pace and route." } }
                ] },
            };

        case "kuwait-city-travel-guide-2026":
            return {
                title: "Kuwait City Travel Guide 2026",
                description: "What first-time visitors need to know about Kuwait City.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/f564d0f33537c373c12885d2835ab6d95968e54a177a8c0d5a9b36901e4d70bb.jpeg",
                sections: [
                    { title: "Why Visit", content: "Kuwait City combines a modern waterfront skyline (the Kuwait Towers) with easy access to desert landscapes just outside the city — most visitors combine both in a single tour." }
                ],
                faqs: [
                    { q: "Is Kuwait City worth visiting?", a: "Yes, particularly for its skyline, Kuwait Towers, and easy desert access." }
                ],
            };

        case "best-time-to-visit-kuwait-city":
            return {
                title: "Best Time to Visit Kuwait City",
                description: "Kuwait City's climate is extreme in summer — timing matters a lot here.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/f564d0f33537c373c12885d2835ab6d95968e54a177a8c0d5a9b36901e4d70bb.jpeg",
                sections: [
                    { title: "Weather Patterns", content: "Summers (June-September) are extremely hot, often exceeding 45°C, making outdoor desert tours uncomfortable. November to March is noticeably milder and the best window for desert and outdoor sightseeing." }
                ],
                faqs: [
                    { q: "What is the best time to visit Kuwait City?", a: "November to March, when temperatures are far more comfortable for outdoor and desert tours." }
                ],
            };

        case "is-kuwait-city-safe":
            return {
                title: "Is Kuwait City Safe for Tourists?",
                description: "An honest look at safety in Kuwait City for visitors.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/f564d0f33537c373c12885d2835ab6d95968e54a177a8c0d5a9b36901e4d70bb.jpeg",
                sections: [
                    { title: "The Short Answer", content: "Kuwait City is generally very safe for tourists, with low crime rates. Standard respectful-dress norms apply, especially outside tourist-oriented areas." }
                ],
                faqs: [
                    { q: "Is Kuwait City safe for tourists?", a: "Yes, generally very safe with low crime rates." }
                ],
            };

        case "best-pearling-path-tour-manama":
            return {
                title: "Which Is the Best Pearling Path / Muharraq Tour in Manama?",
                seoTitle: "Best Pearling Path Tour Manama 2026 | Honest Comparison",
                description: "Compare real Pearling Path and Muharraq walking tours from Manama — from a cultural walk with breakfast to an oyster-opening pearling experience.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/ccf270aae44e14ea92576ba1668fe68845b0783eeb70e7ed360e0de14bcbb466.jpg",
                sections: [
                    { title: "The Short Answer", content: "Bahrain's UNESCO-listed Pearling Path runs through Muharraq's old town, and tours here differ mainly in whether they include breakfast, an oyster-opening activity, or just a straightforward walk.", tourCard: { slug: "muharraq-pearling-path-cultural-walking-tour-with", title: "Muharraq Pearling Path Cultural Walking Tour with Breakfast", description: "A cultural walking tour of the Pearling Path with breakfast.", price: "From $124", duration: "4 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/39fa3e2310b1ec4b5bb626411289a4b9bd2d8031aaccc02cc06b6c4595a95067.jpg" } },
                    { title: "Best Hands-On: Pearling Path with Oyster Opening", content: "This version adds an actual oyster-opening activity, letting you take part in the pearl-diving heritage rather than just walking past it.", tourCard: { slug: "bahrain-pearling-path-tour-with-oyster-opening", title: "Bahrain: Pearling Path Tour with Oyster Opening activity", description: "The Pearling Path tour with a hands-on oyster-opening activity.", price: "From $117", duration: "6 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/ccf270aae44e14ea92576ba1668fe68845b0783eeb70e7ed360e0de14bcbb466.jpg" } },
                    { title: "Practical Tips", content: "The Pearling Path is a UNESCO World Heritage site covering 17 buildings and 3 offshore oyster beds — comfortable walking shoes matter since the route covers Muharraq's old narrow streets." }
                ],
                faqs: [
                    { q: "What is the best Pearling Path tour in Manama?", a: "A cultural walking tour with breakfast suits most visitors; add the oyster-opening activity for a hands-on experience." },
                    { q: "Is the Pearling Path a UNESCO site?", a: "Yes, it's Bahrain's UNESCO World Heritage listing covering historic pearling buildings in Muharraq." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "What is the best Pearling Path tour?", "acceptedAnswer": { "@type": "Answer", "text": "A cultural walking tour with breakfast suits most visitors." } },
                    { "@type": "Question", "name": "Is it a UNESCO site?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, Bahrain's UNESCO World Heritage listing." } }
                ] },
            };

        case "best-city-desert-tour-manama":
            return {
                title: "Which Is the Best City & Desert Combo Tour in Manama?",
                seoTitle: "Best Manama City Desert Tour 2026 | Honest Comparison",
                description: "Compare real Manama city and desert combo tours — from a $85 downtown tour to full city-and-desert day trips with transfers.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/429bdcbf1a9d9f8258039ed83a78897e49d55a30f03c8a8a3d9e602b133058c9.png",
                sections: [
                    { title: "The Short Answer", content: "Most Manama tours combine the downtown city center with a half-day desert stop, since both are a short drive apart. A standalone downtown tour works if you only want the city.", tourCard: { slug: "bahrain-downtown-city-center-tour", title: "bahrain downtown city center tour", description: "A straightforward downtown Manama city tour.", price: "From $85", duration: "5 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/e5756cf74f0ea90e72bc6a05b62d52e5957c028edfc59d4b8a92fd6fd8f35fb8.jpg" } },
                    { title: "Best Desert-Only Option: Half-Day Desert Tour", content: "This focuses specifically on Bahrain's desert landscapes without the city stops, for travellers who've already seen downtown Manama.", tourCard: { slug: "bahrain-half-day-desert-tour", title: "Bahrain Half-Day Desert Tour", description: "A focused half-day desert tour.", price: "From $101", duration: "4 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/690f9ad78036d6d56e49fde3612d05dce4f616e6a4e4ae4dea591d6a8fef456e.jpg" } },
                    { title: "Best Full Combo: City and Desert Tour with Transfers", content: "This bundles both the city and desert into one trip with transfers included, the most efficient way to see both in a single outing.", tourCard: { slug: "manama-bahrain-city-and-desert-tour-with-transfers", title: "Manama: Bahrain City and Desert Tour with Transfers", description: "A combined city and desert tour with transfers included.", price: "From $124", duration: "5 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/429bdcbf1a9d9f8258039ed83a78897e49d55a30f03c8a8a3d9e602b133058c9.png" } },
                    { title: "Practical Tips", content: "Desert tours typically include a stop at a traditional camp setup — confirm whether food or refreshments are included if that matters to you, since this varies by operator." }
                ],
                faqs: [
                    { q: "What is the best city and desert tour in Manama?", a: "A combined tour with transfers is the most efficient; go downtown-only if you've already seen the desert." },
                    { q: "Is Bahrain's desert far from Manama?", a: "No, it's a short drive, which is why most tours combine it with city sightseeing in one trip." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "What is the best city and desert tour in Manama?", "acceptedAnswer": { "@type": "Answer", "text": "A combined tour with transfers is the most efficient." } },
                    { "@type": "Question", "name": "Is the desert far from Manama?", "acceptedAnswer": { "@type": "Answer", "text": "No, a short drive from the city." } }
                ] },
            };

        case "is-bahrain-food-tasting-tour-worth-it-manama":
            return {
                title: "Is a Traditional Bahrain Food Tasting Tour Worth It?",
                seoTitle: "Bahrain Food Tasting Tour Manama 2026 | Honest Review",
                description: "An honest look at Manama's traditional Bahraini food tasting and walking tours.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/50d9c4b1b221c40fbf92a69156c5797534325a617288bd4e0083dfd58f939678.jpeg",
                sections: [
                    { title: "The Short Answer", content: "A food tasting tour is a genuinely good way to try Bahraini dishes you wouldn't easily find or recognize on your own, usually paired with a short walking component through local neighborhoods.", tourCard: { slug: "traditional-bahrain-food-tasting-tour", title: "Traditional Bahrain Food Tasting Tour", description: "A guided food tasting tour of traditional Bahraini dishes.", price: "From $103", duration: "2 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/50d9c4b1b221c40fbf92a69156c5797534325a617288bd4e0083dfd58f939678.jpeg" } },
                    { title: "Practical Tips", content: "Go hungry — these tours typically involve multiple small tastings across several stops rather than one sit-down meal." }
                ],
                faqs: [
                    { q: "Is a Bahrain food tasting tour worth it?", a: "Yes, it's a good way to sample local dishes you might not recognize or find on your own." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "Is a Bahrain food tasting tour worth it?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, a good way to sample local dishes." } }
                ] },
            };

        case "manama-travel-guide-2026":
            return {
                title: "Manama (Bahrain) Travel Guide 2026",
                description: "What first-time visitors need to know about Manama, Bahrain.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/429bdcbf1a9d9f8258039ed83a78897e49d55a30f03c8a8a3d9e602b133058c9.png",
                sections: [
                    { title: "Why Visit", content: "Manama blends a modern financial-hub skyline with genuine historic depth — the UNESCO-listed Pearling Path, old souks, and easy desert day trips make it a compact, varied Gulf stop." }
                ],
                faqs: [
                    { q: "Is Manama worth visiting?", a: "Yes, for its mix of modern skyline, historic Pearling Path, and nearby desert." }
                ],
            };

        case "best-time-to-visit-manama":
            return {
                title: "Best Time to Visit Manama",
                description: "Manama's climate is hot for much of the year — timing your visit matters.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/429bdcbf1a9d9f8258039ed83a78897e49d55a30f03c8a8a3d9e602b133058c9.png",
                sections: [
                    { title: "Weather Patterns", content: "Summers (May-September) are very hot and humid. November to April is noticeably milder and the best window for walking tours and desert trips." }
                ],
                faqs: [
                    { q: "What is the best time to visit Manama?", a: "November to April, for milder, more comfortable weather." }
                ],
            };

        case "is-manama-safe":
            return {
                title: "Is Manama Safe for Tourists?",
                description: "An honest look at safety in Manama for visitors.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/429bdcbf1a9d9f8258039ed83a78897e49d55a30f03c8a8a3d9e602b133058c9.png",
                sections: [
                    { title: "The Short Answer", content: "Manama is generally very safe for tourists with low crime rates. Standard modest-dress norms apply outside tourist-oriented hotel and mall areas." }
                ],
                faqs: [
                    { q: "Is Manama safe for tourists?", a: "Yes, generally very safe with low crime rates." }
                ],
            };

        case "best-babylon-day-trip-baghdad":
            return {
                title: "Which Is the Best Babylon Day Trip from Baghdad?",
                seoTitle: "Best Babylon Day Trip from Baghdad 2026 | Comparison",
                description: "Compare real Babylon day trips from Baghdad — from a straightforward guided tour to combos with Borsippa and Karbala's holy shrines.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/eb169b8d16b4765eba413b73207099197020a47b5b54c9f124aac8ad443d7623.jpeg",
                sections: [
                    { title: "The Short Answer", content: "Ancient Babylon, one of history's most famous cities, is a day trip from Baghdad usually paired with either Borsippa's ziggurat ruins or Karbala's holy shrines, depending on your interests.", tourCard: { slug: "babylon-day-tour-with-guide-and-transport", title: "Babylon Day Tour with Guide and Transport", description: "A standard guided day trip to ancient Babylon.", price: "From $325", duration: "10 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/eb169b8d16b4765eba413b73207099197020a47b5b54c9f124aac8ad443d7623.jpeg" } },
                    { title: "Best for Ancient History: Babylon & Borsippa Day Tour", content: "This pairs Babylon with Borsippa's ziggurat ruins, extending the day into another major Mesopotamian archaeological site.", tourCard: { slug: "from-baghdad-babylon-and-borsippa-day-tour", title: "From Baghdad: Babylon and Borsippa Day Tour", description: "Babylon combined with the Borsippa ziggurat ruins.", price: "From $325", duration: "8 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/695004b4c7b1c084b075ebb12bf8f293debdd3c1ac2ffd2237975a1d9d7e6094.jpeg" } },
                    { title: "Best for Pilgrimage Travellers: Babylon & Karbala", content: "This pairs ancient Babylon with Karbala's holy shrines, a good fit for travellers combining historical sightseeing with a pilgrimage stop.", tourCard: { slug: "explore-ancient-babylon-ancient-karbala", title: "Explore Ancient Babylon & Ancient Karbala", description: "Babylon combined with Karbala's holy shrines.", price: "From $377", duration: "6 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/4cd50e87e3cf0ed817856ee88e49d9e7f373e94017e50e76e3c3d7e277cde62c.jpeg" } },
                    { title: "Practical Tips", content: "Babylon's ruins include partial reconstructions from the Saddam-era restoration alongside genuine ancient remains — a knowledgeable guide is worth it to distinguish the two, which isn't always obvious to first-time visitors." }
                ],
                faqs: [
                    { q: "What is the best Babylon day trip from Baghdad?", a: "A standard guided tour suits most visitors; combine with Borsippa for more archaeology or Karbala for a pilgrimage stop." },
                    { q: "Is Babylon fully preserved or reconstructed?", a: "It's a mix — some sections are genuine ancient ruins, others are partial modern reconstructions, so a knowledgeable guide helps distinguish them." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "What is the best Babylon day trip from Baghdad?", "acceptedAnswer": { "@type": "Answer", "text": "A standard guided tour suits most visitors." } },
                    { "@type": "Question", "name": "Is Babylon reconstructed?", "acceptedAnswer": { "@type": "Answer", "text": "It's a mix of genuine ruins and modern reconstruction." } }
                ] },
            };

        case "best-baghdad-city-tour-baghdad":
            return {
                title: "Which Is the Best Baghdad City Tour?",
                seoTitle: "Best Baghdad City Tour 2026 | Honest Comparison",
                description: "Compare real Baghdad city tours — from a guided city tour with a free Tigris River boat ride to full historical and cultural day tours.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/293d3b93a9cb3f8d5a6f106fd00b96176b12713818f93487f3432b03e09b806e.jpg",
                sections: [
                    { title: "The Short Answer", content: "Baghdad city tours typically cover the old town, Al-Mutanabbi Street, and a Tigris riverfront stop, differing mainly in length and whether a river boat ride is included.", tourCard: { slug: "baghdad-guided-city-tour-with-free-tigris-river", title: "Baghdad: Guided City Tour with free Tigris River Boat Ride", description: "A guided city tour including a free Tigris River boat ride.", price: "From $130", duration: "3.5 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/293d3b93a9cb3f8d5a6f106fd00b96176b12713818f93487f3432b03e09b806e.jpg" } },
                    { title: "Best Full Day: Historical & Culture Tour", content: "A longer version covering Baghdad's history and culture in more depth than the shorter city tours.", tourCard: { slug: "baghdad-historical-culture-tour", title: "Baghdad historical & culture tour", description: "A full-day historical and cultural tour of Baghdad.", price: "From $260", duration: "10 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/709481f265446678d4d92837de36791680780da878db3accfd758adfe18e0a83.jpg" } },
                    { title: "Practical Tips", content: "Al-Mutanabbi Street, Baghdad's historic book market, is most lively on Friday mornings — worth timing your city tour around that if you want to see it at its liveliest." }
                ],
                faqs: [
                    { q: "What is the best Baghdad city tour?", a: "A guided tour with a Tigris River boat ride suits most visitors; go full-day for deeper historical context." },
                    { q: "When is Al-Mutanabbi Street busiest?", a: "Friday mornings, Baghdad's traditional day for the book market." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "What is the best Baghdad city tour?", "acceptedAnswer": { "@type": "Answer", "text": "A guided tour with a Tigris River boat ride." } },
                    { "@type": "Question", "name": "When is Al-Mutanabbi Street busiest?", "acceptedAnswer": { "@type": "Answer", "text": "Friday mornings." } }
                ] },
            };

        case "is-karbala-day-trip-worth-it-baghdad":
            return {
                title: "Is a Karbala Holy Shrines Day Trip from Baghdad Worth It?",
                seoTitle: "Karbala Day Trip from Baghdad 2026 | Honest Review",
                description: "An honest look at Karbala holy shrines day trips from Baghdad.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/0037d0b6dbb9be11f581cf52e4de51540d85d49f7c6ae2ee8d2e6c409b63ccca.jpeg",
                sections: [
                    { title: "The Short Answer", content: "Karbala's Imam Hussain and Abbas shrines are among the most significant Shia Islamic pilgrimage sites in the world — a day trip here is worthwhile for both religious travellers and those interested in the architecture and history, regardless of faith.", tourCard: { slug: "from-baghdad-karbala-holy-shrines-guided-day-trip", title: "From Baghdad: Karbala Holy Shrines Guided Day Trip", description: "A guided day trip to Karbala's holy shrines.", price: "From $390", duration: "9 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/0037d0b6dbb9be11f581cf52e4de51540d85d49f7c6ae2ee8d2e6c409b63ccca.jpeg" } },
                    { title: "Practical Tips", content: "Dress modestly and expect security checks given the religious significance of the site — a local guide helps navigate etiquette for non-Muslim visitors respectfully." }
                ],
                faqs: [
                    { q: "Is a Karbala day trip from Baghdad worth it?", a: "Yes, for the architecture and history as well as religious significance, regardless of faith." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "Is Karbala worth visiting?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, for architecture, history, and religious significance." } }
                ] },
            };

        case "baghdad-travel-guide-2026":
            return {
                title: "Baghdad Travel Guide 2026",
                description: "What first-time visitors need to know about Baghdad, Iraq.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/eb169b8d16b4765eba413b73207099197020a47b5b54c9f124aac8ad443d7623.jpeg",
                sections: [
                    { title: "Why Visit", content: "Baghdad is the gateway to Mesopotamia's ancient sites — Babylon, Ctesiphon, and more — alongside its own layered history. Tours here run with licensed guides who handle logistics and security considerations for visitors." }
                ],
                faqs: [
                    { q: "Is Baghdad worth visiting?", a: "Yes, particularly as a base for Mesopotamian archaeological sites like Babylon and Ctesiphon." }
                ],
            };

        case "iraq-visa-guide-for-tourists":
            return {
                title: "Iraq Visa Guide for Tourists (Baghdad)",
                description: "Visa requirements for visiting Baghdad and Iraq.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/eb169b8d16b4765eba413b73207099197020a47b5b54c9f124aac8ad443d7623.jpeg",
                sections: [
                    { title: "Visa Requirements", content: "Iraq's visa rules vary significantly by nationality and have changed in recent years to allow more visa-on-arrival access for many countries. Check Iraq's official immigration requirements for your specific nationality before travel, since rules vary and change." }
                ],
                faqs: [
                    { q: "Do I need a visa to visit Baghdad/Iraq?", a: "Depends on nationality — many countries now get visa-on-arrival access; verify current requirements before travel." }
                ],
            };

        case "best-jeita-grotto-tour-beirut":
            return {
                title: "Which Is the Best Jeita Grotto Tour from Beirut?",
                seoTitle: "Best Jeita Grotto Tour from Beirut 2026 | Comparison",
                description: "Compare real Jeita Grotto day trips from Beirut — from a full-day tour combined with Harissa to private motorcycle and road-trip versions.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/a9c0ac8db12bedf0c2077bb629f35ba120a0e12f302f75be76477be64aedefc6.jpg",
                sections: [
                    { title: "The Short Answer", content: "Jeita Grotto's limestone caves are almost always paired with Harissa's hilltop statue and views, since both are a short drive from Beirut. A standard full-day tour covers both at a shared pace.", tourCard: { slug: "beirut-full-day-guided-tour-with-jeita-grotto", title: "Beirut: Full-Day Guided Tour with Jeita Grotto & Harissa", description: "A full-day guided tour combining Jeita Grotto and Harissa.", price: "From $169", duration: "1 day", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/a9c0ac8db12bedf0c2077bb629f35ba120a0e12f302f75be76477be64aedefc6.jpg" } },
                    { title: "Best Extended Route: Jeita, Harissa & Byblos Private Tour", content: "This extends the standard combo to include Byblos, one of the oldest continuously inhabited cities in the world, for a fuller day of sightseeing.", tourCard: { slug: "from-beirut-jeita-grotto-harissa-byblos-private", title: "From Beirut: Jeita Grotto > Harissa & Byblos Private Tour", description: "Jeita Grotto, Harissa, and Byblos in one private tour.", price: "From $585", duration: "6 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/4c707da5064f202c9463f5381e9a5c67dda6097e2ab6b5e781916b36e0fa5f1d.jpeg" } },
                    { title: "Best for a Different Pace: Private Motorcycle Tour", content: "This covers Jeita, Byblos, and Batroun by motorcycle rather than car, a genuinely different and more active way to see the same coastal route.", tourCard: { slug: "beirut-private-motorcycle-tour-to-jeita-byblos", title: "Beirut: Private Motorcycle Tour to Jeita, Byblos & Batroun", description: "A motorcycle tour covering Jeita, Byblos, and Batroun.", price: "From $389", duration: "9 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/94c261bc5b485880a68b663f14c44bca67ef20186f5d236664e86e66248d5c63.jpg" } },
                    { title: "Practical Tips", content: "Jeita Grotto has both upper and lower caverns — the lower cavern is accessed by a short boat ride and is often considered the more dramatic of the two, so confirm your tour includes both." }
                ],
                faqs: [
                    { q: "What is the best Jeita Grotto tour from Beirut?", a: "A full-day tour with Harissa suits most visitors; extend to Byblos for more sightseeing or go by motorcycle for something different." },
                    { q: "Does Jeita Grotto have two caves?", a: "Yes, an upper and lower cavern — the lower one is reached by a short boat ride." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "What is the best Jeita Grotto tour from Beirut?", "acceptedAnswer": { "@type": "Answer", "text": "A full-day tour with Harissa suits most visitors." } },
                    { "@type": "Question", "name": "Does Jeita Grotto have two caves?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, upper and lower caverns." } }
                ] },
            };

        case "best-baalbek-day-trip-beirut":
            return {
                title: "Which Is the Best Baalbek Day Trip from Beirut?",
                seoTitle: "Best Baalbek Day Trip from Beirut 2026 | Comparison",
                description: "Compare real Baalbek Roman ruins day trips from Beirut, usually combined with Anjar and Ksara's wine cellars.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/cff1d0af013443509beb8ae6a044f487fa1f87b2ba8278f79332399cef33308d.jpg",
                sections: [
                    { title: "The Short Answer", content: "Baalbek's massive Roman temple complex, one of the best-preserved in the world, is usually combined with Anjar's Umayyad ruins and a wine tasting stop at Ksara in a single full-day private tour.", tourCard: { slug: "from-beirut-baalbek-anjar-ksara-private-full-day", title: "From Beirut: Baalbek, Anjar & Ksara Private Full-Day Tour", description: "A private full-day tour combining Baalbek, Anjar, and Ksara.", price: "From $324", duration: "10 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/cff1d0af013443509beb8ae6a044f487fa1f87b2ba8278f79332399cef33308d.jpg" } },
                    { title: "Practical Tips", content: "Baalbek's temples include some of the largest stone blocks ever used in construction — a knowledgeable guide adds real value here since the engineering history is genuinely remarkable and easy to miss without context." }
                ],
                faqs: [
                    { q: "What is the best Baalbek day trip from Beirut?", a: "A private full-day tour combining Baalbek, Anjar, and Ksara's wine cellars." },
                    { q: "Is Baalbek far from Beirut?", a: "It's a full-day round trip given the distance, so most tours run 10 hours." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "What is the best Baalbek day trip from Beirut?", "acceptedAnswer": { "@type": "Answer", "text": "A private full-day tour combining Baalbek, Anjar, and Ksara." } },
                    { "@type": "Question", "name": "Is Baalbek far from Beirut?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, it's a full-day round trip." } }
                ] },
            };

        case "is-cedars-of-god-tour-worth-it-beirut":
            return {
                title: "Is the Cedars of God & Qadisha Valley Tour from Beirut Worth It?",
                seoTitle: "Cedars of God Qadisha Valley Tour 2026 | Honest Review",
                description: "An honest look at the Cedars of God, Qadisha Valley, and Gibran Museum day trip from Beirut.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/f90dac62bdf5a1365ad0d7c54150afb66230bd9af001116aee9fa9cb0c78fd5e.jpeg",
                sections: [
                    { title: "The Short Answer", content: "The Cedars of God is one of the last remaining stands of Lebanon's ancient cedar forests (a UNESCO site), paired here with the dramatic Qadisha Valley and the Gibran Museum — genuinely worth it for the scenery alone, even more so with the cultural context.", tourCard: { slug: "cedars-of-godqadisha-gibran-wpickup", title: "Cedars of God,Qadisha & Gibran w/pickup, guide,entries+lunch", description: "A full-day tour of the Cedars of God, Qadisha Valley, and Gibran Museum.", price: "From $325", duration: "9 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/f90dac62bdf5a1365ad0d7c54150afb66230bd9af001116aee9fa9cb0c78fd5e.jpeg" } },
                    { title: "Practical Tips", content: "This is a mountain trip, so bring a layer even in summer — elevations here are notably cooler than coastal Beirut." }
                ],
                faqs: [
                    { q: "Is the Cedars of God tour worth it?", a: "Yes, for the UNESCO-listed ancient cedar forest and the dramatic Qadisha Valley scenery." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "Is the Cedars of God tour worth it?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, for the UNESCO cedar forest and Qadisha Valley scenery." } }
                ] },
            };

        case "beirut-travel-guide-2026":
            return {
                title: "Beirut Travel Guide 2026",
                description: "What first-time visitors need to know about Beirut, Lebanon.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/a9c0ac8db12bedf0c2077bb629f35ba120a0e12f302f75be76477be64aedefc6.jpg",
                sections: [
                    { title: "Why Visit", content: "Beirut packs Mediterranean coastline, mountain day trips, and some of the region's oldest archaeological sites (Baalbek, Byblos, Jeita Grotto) into a compact base." }
                ],
                faqs: [
                    { q: "Is Beirut worth visiting?", a: "Yes, for its coastline, food scene, and access to major day trips like Baalbek and Byblos." }
                ],
            };

        case "lebanon-visa-guide-for-tourists":
            return {
                title: "Lebanon Visa Guide for Tourists (Beirut)",
                description: "Visa requirements for visiting Beirut and Lebanon.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/a9c0ac8db12bedf0c2077bb629f35ba120a0e12f302f75be76477be64aedefc6.jpg",
                sections: [
                    { title: "Visa Requirements", content: "Many nationalities get visa-on-arrival access to Lebanon for tourism. Check Lebanon's official immigration requirements for your specific nationality before travel, since rules vary and change." }
                ],
                faqs: [
                    { q: "Do I need a visa to visit Beirut/Lebanon?", a: "Many nationalities get visa-on-arrival; verify current requirements for your passport before travel." }
                ],
            };

        case "best-boat-cruise-dinner-tour-manama":
            return {
                title: "Which Is the Best Boat Cruise with Dinner in Manama?",
                seoTitle: "Best Manama Boat Cruise Dinner 2026 | Comparison",
                description: "Compare real boat cruise and dinner tours in Manama — both include a guided cruise with hotel transfer, differing mainly in price tier.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/02cef9ac0e6c124fcc8aa370a1b4a2a7462f1cab9db658d6cb6d12d077c985c7.jpeg",
                sections: [
                    { title: "The Short Answer", content: "Manama's boat cruise with dinner tours cover the same core experience — a guided cruise with hotel transfer and dinner — mainly differing in operator and exact inclusions.", tourCard: { slug: "boat-cruise-dinner-hotel-transfer-and-guided", title: "Boat Cruise Dinner, Hotel Transfer and Guided Muharraq Walk", description: "A boat cruise with dinner, hotel transfer, and a guided Muharraq walk.", price: "From $104", duration: "3 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/23a748576b003f38ca27a6a2fad04fa2a6102be8af228db8ff83de7911e6f9f8.jpg" } },
                    { title: "Alternative: Boat Cruise with Dinner & Hotel Transfer", content: "A similar boat cruise and dinner package at a different price point, worth comparing on exact inclusions.", tourCard: { slug: "manama-boat-cruise-with-dinner-hotel-transfer", title: "Manama: Boat Cruise with Dinner & Hotel Transfer with guide", description: "An alternative boat cruise and dinner package.", price: "From $156", duration: "3 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/02cef9ac0e6c124fcc8aa370a1b4a2a7462f1cab9db658d6cb6d12d077c985c7.jpeg" } },
                    { title: "Practical Tips", content: "Evening departures catch the Manama skyline lit up after dark — worth confirming your cruise timing if sunset or night views matter to you." }
                ],
                faqs: [
                    { q: "What is the best boat cruise with dinner in Manama?", a: "Both cover similar ground — compare exact inclusions and timing between operators." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "What is the best boat cruise with dinner?", "acceptedAnswer": { "@type": "Answer", "text": "Both options cover similar ground." } }
                ] },
            };

        case "is-jarada-island-tour-worth-it-manama":
            return {
                title: "Is the Jarada Island Boat Tour from Manama Worth It?",
                seoTitle: "Jarada Island Boat Tour Manama 2026 | Honest Review",
                description: "An honest look at Jarada Island boat excursions from Manama, a tiny sandbar island that disappears at high tide.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/9e8bbe70b660025fac4e7877f9c4342218a9896e6edf27269310f055d4fad9ff.jpg",
                sections: [
                    { title: "The Short Answer", content: "Jarada Island is a tiny sandbar that's only visible at low tide and disappears underwater at high tide — a genuinely unusual destination, and the fishing-inclusive version adds an activity beyond just visiting the sandbar.", tourCard: { slug: "bahrain-jarada-island-boat-tour-with-fishing", title: "Bahrain: Jarada Island Boat Tour with Fishing", description: "A boat tour to Jarada Island with fishing included.", price: "From $780", duration: "3 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/9e8bbe70b660025fac4e7877f9c4342218a9896e6edf27269310f055d4fad9ff.jpg" } },
                    { title: "Practical Tips", content: "Timing matters a lot here — check the tide schedule with your operator, since visiting at the wrong time means the island may be mostly or fully submerged." }
                ],
                faqs: [
                    { q: "Is the Jarada Island boat tour worth it?", a: "Yes, for a genuinely unusual sandbar-island experience, but check tide timing first." },
                    { q: "Is Jarada Island always visible?", a: "No, it's only visible at low tide and disappears underwater at high tide." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "Is Jarada Island worth visiting?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, but check tide timing first." } },
                    { "@type": "Question", "name": "Is it always visible?", "acceptedAnswer": { "@type": "Answer", "text": "No, only at low tide." } }
                ] },
            };

        case "is-heritage-tour-worth-it-manama":
            return {
                title: "Is Bahrain's Heritage & Cultural Tour from Manama Worth It?",
                seoTitle: "Bahrain Heritage Tour Manama 2026 | Honest Review",
                description: "An honest look at Bahrain's heritage and cultural tours from Manama, covering forts, pearling history, and traditional architecture.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/35829611ad4b188c1bfcf2368e73ae5223fab66955751a5184785a28b6ac39b6.jpg",
                sections: [
                    { title: "The Short Answer", content: "Bahrain's heritage tours cover forts, pearling history, and traditional architecture beyond the standard city/desert combo — genuinely worthwhile if you want deeper cultural context rather than just sightseeing.", tourCard: { slug: "bahrain-heritage-tour", title: "Bahrain Heritage Tour", description: "A heritage-focused tour covering Bahrain's forts and traditional culture.", price: "From $254", duration: "6 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/35829611ad4b188c1bfcf2368e73ae5223fab66955751a5184785a28b6ac39b6.jpg" } },
                    { title: "Alternative: Heritage & Cultural Tour", content: "A similarly structured heritage tour from a different operator, worth comparing on exact sites visited.", tourCard: { slug: "bahrain-heritage-cultural-tour", title: "Bahrain Heritage & Cultural tour", description: "An alternative heritage and cultural tour of Bahrain.", price: "From $254", duration: "6 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/4f93103536e52fa55807bc0506ae11814c7a0a47fa6699ed6a923fa2541b0aa7.jpg" } },
                    { title: "Practical Tips", content: "These tours typically include Bahrain Fort (Qal'at al-Bahrain), a UNESCO World Heritage Site — worth confirming it's on the itinerary since it's the single strongest heritage stop in the country." }
                ],
                faqs: [
                    { q: "Is Bahrain's heritage tour worth it?", a: "Yes, for deeper cultural context on forts and pearling history beyond standard sightseeing." },
                    { q: "Does it include Bahrain Fort?", a: "Typically yes — confirm with your operator, since it's the strongest heritage stop in the country." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "Is the heritage tour worth it?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, for deeper cultural context." } },
                    { "@type": "Question", "name": "Does it include Bahrain Fort?", "acceptedAnswer": { "@type": "Answer", "text": "Typically yes." } }
                ] },
            };

        case "is-sunset-horse-riding-worth-it-manama":
            return {
                title: "Is the Sunset Horse Riding Tour in Manama Worth It?",
                seoTitle: "Bahrain Sunset Horse Riding Tour 2026 | Review",
                description: "An honest look at Bahrain's sunset horse riding tour, combined with other highlights for a fuller desert-and-coast experience.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/6b29b8667d8bf181e9e8735a625301b12dbe9fdd09807ae4816452e3bc05fb20.jpg",
                sections: [
                    { title: "The Short Answer", content: "This combines horse riding with sunset timing, a genuinely scenic way to experience Bahrain's desert or coastal landscape rather than just driving past it.", tourCard: { slug: "bahrain-fantastic-tour-with-sunset-horse-riding", title: "Bahrain Fantastic Tour with Sunset Horse Riding", description: "A tour combining sunset horse riding with other Bahrain highlights.", price: "From $289", duration: "6 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/6b29b8667d8bf181e9e8735a625301b12dbe9fdd09807ae4816452e3bc05fb20.jpg" } },
                    { title: "Practical Tips", content: "No prior riding experience is typically required, but confirm with the operator if you have specific concerns about pace or terrain." }
                ],
                faqs: [
                    { q: "Is the sunset horse riding tour in Manama worth it?", a: "Yes, a scenic way to experience the landscape rather than just viewing it from a vehicle." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "Is sunset horse riding worth it?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, a scenic alternative to vehicle sightseeing." } }
                ] },
            };

        case "is-ctesiphon-tour-worth-it-baghdad":
            return {
                title: "Is the Al-Mada'in Shrines & Ctesiphon Tour from Baghdad Worth It?",
                seoTitle: "Ctesiphon Tour Baghdad 2026 | Honest Review",
                description: "An honest look at the Al-Mada'in Shrines and Ctesiphon day tour from Baghdad, home to the largest unreinforced brick arch in the world.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/15ea2967c133213a8493e065a79bb1e5b033c9c51b7830903d3c0d6b6165c918.jpeg",
                sections: [
                    { title: "The Short Answer", content: "Ctesiphon's Taq Kasra arch, the largest unreinforced brick vault in the world, is a genuinely remarkable piece of ancient Persian engineering just outside Baghdad — a short, worthwhile add-on rather than a full-day commitment.", tourCard: { slug: "from-baghdad-al-madain-shrines-ctesiphon-tour", title: "From Baghdad: Al-Mada'in Shrine's & Ctesiphon Tour", description: "A short tour to Al-Mada'in Shrines and the Ctesiphon arch.", price: "From $130", duration: "2 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/15ea2967c133213a8493e065a79bb1e5b033c9c51b7830903d3c0d6b6165c918.jpeg" } },
                    { title: "Practical Tips", content: "Being close to Baghdad and short in duration, this pairs well with another half-day activity on the same day rather than standing alone." }
                ],
                faqs: [
                    { q: "Is the Ctesiphon tour worth it?", a: "Yes, for the Taq Kasra arch, the largest unreinforced brick vault in the world, and it's a short trip from Baghdad." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "Is the Ctesiphon tour worth it?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, for the largest unreinforced brick arch in the world." } }
                ] },
            };

        case "best-samarra-hatra-mosul-tour-baghdad":
            return {
                title: "Which Is the Best Samarra, Hatra & Mosul Tour from Baghdad?",
                seoTitle: "Best Samarra Hatra Mosul Tour Baghdad 2026 | Comparison",
                description: "Compare real Samarra, Hatra, and Mosul tours from Baghdad — a focused Samarra day tour versus a 2-day trip covering all three ancient sites.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/01a5970d28754dca93d8d6769512203b0478a9b2fb8329109bb2e392783491c7.jpg",
                sections: [
                    { title: "The Short Answer", content: "Samarra's Great Mosque with its spiral minaret, Hatra's UNESCO-listed Parthian ruins, and Mosul's historic old city are each worth visiting, and the choice is a focused Samarra day trip versus the fuller 2-day combo.", tourCard: { slug: "samarra-day-tour-explore-the-wonders-of-the", title: "Samarra Day Tour Explore the Wonders of the Abbasid Empire", description: "A day tour focused on Samarra's Abbasid-era sites.", price: "From $325", duration: "10 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/01a5970d28754dca93d8d6769512203b0478a9b2fb8329109bb2e392783491c7.jpg" } },
                    { title: "Best Full Experience: 2-Day Samarra, Hatra & Mosul Tour", content: "This covers all three major historical sites over two days rather than focusing on just one, the more complete option for history-focused travellers.", tourCard: { slug: "2-day-samarra-hatra-and-mosul-tour", title: "2-Day Samarra, Hatra, and Mosul Tour", description: "A 2-day tour covering Samarra, Hatra, and Mosul.", price: "From $845", duration: "14 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/69d62d5a7d20430050914c8ba0ce22dd0609ff146b9b75b3f45ca2594f388abd.jpeg" } },
                    { title: "Practical Tips", content: "Hatra is UNESCO-listed and one of the best-preserved Parthian-era sites in the world — if ancient history is your main interest, the 2-day version justifies the extra time and cost." }
                ],
                faqs: [
                    { q: "What is the best Samarra/Hatra/Mosul tour from Baghdad?", a: "A Samarra-only day trip for a focused visit, or the 2-day version for all three sites." },
                    { q: "Is Hatra a UNESCO site?", a: "Yes, one of the best-preserved Parthian-era sites in the world." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "What is the best Samarra/Hatra/Mosul tour?", "acceptedAnswer": { "@type": "Answer", "text": "A Samarra-only day trip, or the 2-day version for all three." } },
                    { "@type": "Question", "name": "Is Hatra a UNESCO site?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, one of the best-preserved Parthian sites." } }
                ] },
            };

        case "is-iraq-marshes-tour-worth-it-baghdad":
            return {
                title: "Is the Iraqi Marshes Tour from Baghdad Worth It?",
                seoTitle: "Iraq Marshes Tour Baghdad 2026 | Honest Review",
                description: "An honest look at the Mesopotamian Marshes day tour from Baghdad, a UNESCO-listed wetland with boat rides and traditional reed houses.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/fe0ee729d616740b462c5a0c65c71e3dcd3143960b9c5d7ce7333ec3ee5e38cb.jpeg",
                sections: [
                    { title: "The Short Answer", content: "The Mesopotamian Marshes, a UNESCO World Heritage wetland, offer a genuinely different landscape from the rest of Iraq's desert and historical sites — boat rides, traditional reed houses, and a local Masgouf fish lunch make this a distinctive cultural-and-nature stop.", tourCard: { slug: "discover-iraqs-marshes-boat-ridemasgouf-lunchreed", title: "Discover Iraq's Marshes: Boat Ride, Masgouf Lunch & Reed Houses", description: "A day trip to the Mesopotamian Marshes with a boat ride and traditional lunch.", price: "From $488", duration: "1 day", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/fe0ee729d616740b462c5a0c65c71e3dcd3143960b9c5d7ce7333ec3ee5e38cb.jpeg" } },
                    { title: "Practical Tips", content: "This is a long day trip given the distance from Baghdad — if you want to spend more time in the marshes and nearby ancient Ur, the overnight version is worth considering instead." }
                ],
                faqs: [
                    { q: "Is the Iraqi Marshes tour worth it?", a: "Yes, for a genuinely distinctive wetland landscape and culture unlike anywhere else in Iraq." },
                    { q: "Are the marshes a UNESCO site?", a: "Yes, the Mesopotamian Marshes are a UNESCO World Heritage wetland." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "Is the Iraqi Marshes tour worth it?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, for a distinctive wetland landscape and culture." } },
                    { "@type": "Question", "name": "Are the marshes a UNESCO site?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, a UNESCO World Heritage wetland." } }
                ] },
            };

        case "is-ziggurat-of-ur-tour-worth-it-baghdad":
            return {
                title: "Is the Ziggurat of Ur & Marshes Overnight Tour Worth It?",
                seoTitle: "Ziggurat of Ur Tour Baghdad 2026 | Honest Review",
                description: "An honest look at the Ziggurat of Ur and Marshes overnight tour, combining one of the world's oldest surviving step pyramids with the Mesopotamian wetlands.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/9c710a3d1f63319f58b892c2a66c82a7fe119ac8ea3c1930ad5d12600be9ab25.jpeg",
                sections: [
                    { title: "The Short Answer", content: "The Ziggurat of Ur, one of the best-preserved Sumerian step pyramids in the world and traditionally linked to the biblical birthplace of Abraham, is combined here with an overnight stay near the Marshes — genuinely one of Iraq's most significant ancient sites.", tourCard: { slug: "ziggurat-of-ur-marshes-overnight-stay-tour", title: "Ziggurat of Ur, Marshes, & Overnight Stay Tour", description: "An overnight tour combining the Ziggurat of Ur with the Mesopotamian Marshes.", price: "From $780", duration: "1 day", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/9c710a3d1f63319f58b892c2a66c82a7fe119ac8ea3c1930ad5d12600be9ab25.jpeg" } },
                    { title: "Practical Tips", content: "Combining both sites in one overnight trip is efficient given their relative proximity to each other compared to Baghdad — worth it if ancient Sumerian history is a priority for your Iraq itinerary." }
                ],
                faqs: [
                    { q: "Is the Ziggurat of Ur tour worth it?", a: "Yes, it's one of the best-preserved Sumerian step pyramids in the world and a genuinely significant historical site." },
                    { q: "Is the Ziggurat of Ur linked to the Bible?", a: "Yes, Ur is traditionally identified as the birthplace of Abraham." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "Is the Ziggurat of Ur tour worth it?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, one of the best-preserved Sumerian step pyramids." } },
                    { "@type": "Question", "name": "Is it linked to the Bible?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, traditionally the birthplace of Abraham." } }
                ] },
            };

        case "is-kuwait-day-night-skyline-tour-worth-it":
            return {
                title: "Is the Kuwait City Day & Night Skyline Tour Worth It?",
                seoTitle: "Kuwait City Skyline Tour 2026 | Honest Review",
                description: "An honest look at the Day & Night Skyline Tour in Kuwait City, including local food and tea.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/89d020c2e752489d88535eeae4cf0a26098dbf56110db710b10c6fb3292b51d8.jpeg",
                sections: [
                    { title: "The Short Answer", content: "Seeing Kuwait City's skyline transition from day to night in one outing — paired with local food and tea stops — is a genuinely good way to experience both the city's modern architecture and its everyday food culture in one trip.", tourCard: { slug: "kuwait-day-night-skyline-tour-with-local-food-tea", title: "Kuwait: Day & Night Skyline Tour With Local Food & Tea", description: "A day-to-night skyline tour with local food and tea.", price: "From $241", duration: "6 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/89d020c2e752489d88535eeae4cf0a26098dbf56110db710b10c6fb3292b51d8.jpeg" } },
                    { title: "Practical Tips", content: "Timing this around sunset gets you both daylight skyline views and the illuminated night skyline in one continuous trip." }
                ],
                faqs: [
                    { q: "Is the Kuwait City day/night skyline tour worth it?", a: "Yes, a good way to see both daylight and illuminated skyline views plus local food in one trip." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "Is the skyline tour worth it?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, for both day and night skyline views plus food." } }
                ] },
            };

        case "best-walking-tour-beirut":
            return {
                title: "Is the Beirut Walking Tour Worth It?",
                seoTitle: "Beirut Walking Tour 2026 | Honest Review",
                description: "An honest look at Beirut's city walking tour, covering the capital's mix of ancient ruins, war-era scars, and vibrant nightlife districts.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/bd18f410b2617b766374ccd14a9b1c9e71bf8fcbada6aa9990966e004ef6a016.jpeg",
                sections: [
                    { title: "The Short Answer", content: "Beirut's layered history — ancient Roman ruins, civil-war-era scars, and a genuinely vibrant modern nightlife and food scene all in close proximity — makes a walking tour a worthwhile orientation, especially with a guide who can explain the city's complex recent history.", tourCard: { slug: "beirut-walking-tour", title: "Beirut Walking Tour", description: "A walking tour covering Beirut's ancient and modern history.", price: "From $221", duration: "8 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/bd18f410b2617b766374ccd14a9b1c9e71bf8fcbada6aa9990966e004ef6a016.jpeg" } },
                    { title: "Practical Tips", content: "A knowledgeable local guide adds real value in Beirut specifically, since much of the city's recent history isn't explained on plaques or obvious just from walking past buildings." }
                ],
                faqs: [
                    { q: "Is the Beirut walking tour worth it?", a: "Yes, especially with a guide who can explain the city's complex recent history alongside the ancient sites." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "Is the Beirut walking tour worth it?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, especially with a knowledgeable guide." } }
                ] },
            };

        case "best-chouf-mountains-tour-beirut":
            return {
                title: "Which Is the Best Chouf Mountains Tour from Beirut?",
                seoTitle: "Best Chouf Mountains Tour Beirut 2026 | Comparison",
                description: "Compare real Chouf Mountains tours from Beirut — a castles-focused route versus a broader hidden-gems mountain day trip.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/d000c29419308225501a60da14d9535a8b429873595d085f156b0102dfa27204.jpg",
                sections: [
                    { title: "The Short Answer", content: "The Chouf Mountains offer both historic castles (Mousa Castle and Mir Amin Palace) and broader scenic hidden-gems routes — the choice depends on whether castles or general mountain scenery is the priority.", tourCard: { slug: "chouf-mountains-mousa-mir-amin-castles-tour", title: "Chouf Mountains: Mousa & Mir Amin Castles Tour", description: "A castles-focused tour of the Chouf Mountains.", price: "From $182", duration: "8 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/d000c29419308225501a60da14d9535a8b429873595d085f156b0102dfa27204.jpg" } },
                    { title: "Best for Scenery: Beyond Chouf Mountains Hidden Gems Tour", content: "This broadens the day beyond the two main castles into a wider hidden-gems mountain route, better for scenery over a focused castle visit.", tourCard: { slug: "beyond-chouf-mountains-hidden-gems-mountains-day", title: "BEYOND CHOUF mountains - Hidden Gems Mountains Day Tour", description: "A broader scenic tour of the Chouf Mountains' hidden gems.", price: "From $325", duration: "8 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/d000c29419308225501a60da14d9535a8b429873595d085f156b0102dfa27204.jpg" } },
                    { title: "Practical Tips", content: "Mousa Castle is a genuinely unusual private museum castle built by one man over decades — worth asking your guide about its unusual backstory, since it's not a typical historical fortress." }
                ],
                faqs: [
                    { q: "What is the best Chouf Mountains tour from Beirut?", a: "A castles-focused tour for Mousa and Mir Amin, or the hidden-gems version for broader scenery." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "What is the best Chouf Mountains tour?", "acceptedAnswer": { "@type": "Answer", "text": "A castles-focused tour, or hidden-gems for broader scenery." } }
                ] },
            };

        case "is-bourj-hammoud-food-walk-worth-it-beirut":
            return {
                title: "Is the Bourj Hammoud Food Walk in Beirut Worth It?",
                seoTitle: "Bourj Hammoud Food Walk Beirut 2026 | Review",
                description: "An honest look at the Sumac & Stone food walking tour through Bourj Hammoud, Beirut's Armenian quarter.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/7d4304689f10d19de3f75e7c0c9e5b7799153c26ae723a80a2c4bfa47d6a0531.jpeg",
                sections: [
                    { title: "The Short Answer", content: "Bourj Hammoud is Beirut's Armenian quarter, with a food scene distinct from the rest of the city — genuinely worthwhile for travellers who want a less touristy neighborhood and a different culinary angle on Lebanese food.", tourCard: { slug: "sumac-stone-a-bourj-hammoud-food-walk", title: "Sumac & Stone: A Bourj Hammoud Food Walk", description: "A food walking tour through Beirut's Armenian quarter.", price: "From $156", duration: "6 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/7d4304689f10d19de3f75e7c0c9e5b7799153c26ae723a80a2c4bfa47d6a0531.jpeg" } },
                    { title: "Practical Tips", content: "Go hungry — this is a multi-stop tasting walk, not a sit-down meal, so pace yourself across the stops." }
                ],
                faqs: [
                    { q: "Is the Bourj Hammoud food walk worth it?", a: "Yes, for a less touristy neighborhood and Armenian-influenced Lebanese food." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "Is the Bourj Hammoud food walk worth it?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, for a less touristy neighborhood and distinct food." } }
                ] },
            };

        case "is-tripoli-day-trip-worth-it-beirut":
            return {
                title: "Is the Tripoli Citadel, Souks & Hammam Day Trip from Beirut Worth It?",
                seoTitle: "Tripoli Day Trip Beirut 2026 | Honest Review",
                description: "An honest look at the Tripoli day trip from Beirut, covering the citadel, old souks, and a traditional hammam experience.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/f4c5fb8911f801cfeb65cb26714a10d278cc02faeb40b8b800624085310b5d75.jpeg",
                sections: [
                    { title: "The Short Answer", content: "Tripoli, Lebanon's second-largest city, has a well-preserved medieval citadel, extensive old souks, and historic hammams — genuinely worth the day trip for travellers who want to see Lebanon beyond Beirut and its immediate surroundings.", tourCard: { slug: "beirut-tripoli-citadel-souks-and-hammam-day-trip", title: "Beirut: Tripoli Citadel, Souks, and Hammam Day Trip w/lunch", description: "A day trip to Tripoli covering the citadel, souks, and a hammam.", price: "From $325", duration: "7 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/f4c5fb8911f801cfeb65cb26714a10d278cc02faeb40b8b800624085310b5d75.jpeg" } },
                    { title: "Practical Tips", content: "Bring a swimsuit or appropriate clothing if you plan to use the hammam facilities, since this is a genuine traditional bathhouse experience, not just a visit." }
                ],
                faqs: [
                    { q: "Is the Tripoli day trip from Beirut worth it?", a: "Yes, for Lebanon's second-largest city's medieval citadel, souks, and traditional hammams." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "Is the Tripoli day trip worth it?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, for the citadel, souks, and traditional hammams." } }
                ] },
            };

        case "is-mount-lebanon-tour-worth-it-beirut":
            return {
                title: "Is the Mount Lebanon Nature & Spirituality Tour Worth It?",
                seoTitle: "Mount Lebanon Nature Spirituality Tour 2026 | Review",
                description: "An honest look at the Mount Lebanon nature and spirituality tour from Beirut, combining mountain scenery with religious heritage sites.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/98627edb1029290b43eb38f3610a066725f26d4f10aa9a1a33b4577204256562.jpeg",
                sections: [
                    { title: "The Short Answer", content: "This combines Mount Lebanon's natural scenery with its religious heritage sites, worthwhile for travellers who want both nature time and a cultural/spiritual dimension in the same day, rather than just scenery.", tourCard: { slug: "mount-lebanon-nature-and-spirituality-tour", title: "Mount Lebanon Nature and Spirituality Tour", description: "A tour combining Mount Lebanon's nature with spiritual heritage sites.", price: "From $338", duration: "7 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/98627edb1029290b43eb38f3610a066725f26d4f10aa9a1a33b4577204256562.jpeg" } },
                    { title: "Practical Tips", content: "Mountain weather can differ significantly from Beirut's coastal climate — bring a layer even in warmer months given the elevation." }
                ],
                faqs: [
                    { q: "Is the Mount Lebanon nature and spirituality tour worth it?", a: "Yes, for combining mountain scenery with religious heritage sites in one day." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "Is the Mount Lebanon tour worth it?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, for combining nature and spiritual heritage." } }
                ] },
            };

        case "best-private-yacht-tour-manama":
            return {
                title: "Is a Private Yacht or Boat Rental Worth It in Manama?",
                seoTitle: "Manama Private Yacht Rental 2026 | Honest Review",
                description: "Compare Manama's private boat options — a short skyline boat ride versus a longer private yacht rental with captain.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/f3dce041750f1cbc4e556ababa5457e5c3a9d814dab276cc3b7c51919789aa1b.jpg",
                sections: [
                    { title: "The Short Answer", content: "For a quick look at Manama's skyline from the water, a short private boat ride is enough; for a longer, more flexible outing, a private yacht rental with captain gives full control of the route and pace.", tourCard: { slug: "private-boat-ride-in-manama-the-best-of-the", title: "Private Boat Ride in Manama: the Best of the Capital's Skyline", description: "A short private boat ride showing Manama's skyline.", price: "From $501", duration: "1 hour", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/f3dce041750f1cbc4e556ababa5457e5c3a9d814dab276cc3b7c51919789aa1b.jpg" } },
                    { title: "For a Longer, More Flexible Trip: Private Yacht Rental with Captain", content: "A private yacht rental gives full control over the route and pace, with a captain included — worth it if you want more than a quick skyline pass.", tourCard: { slug: "manama-private-yacht-rental-with-captain", title: "Manama: Private Yacht Rental with Captain", description: "A private yacht rental with a captain in Manama.", price: "From $1040", duration: "3 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/332c4e76511bd99453de291d74597cf55fc14dbbc8f88f44b393c9810c7fc4b2.jpg" } },
                    { title: "Practical Tips", content: "Evening departures catch the Manama skyline lit up after dark, a popular reason travelers choose the private boat option over a group cruise." }
                ],
                faqs: [
                    { q: "Is a private yacht rental worth it in Manama?", a: "Yes, for a longer and more flexible outing than a short skyline boat ride." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "Is a private yacht rental worth it in Manama?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, for a longer and more flexible outing." } }
                ] },
            };

        case "best-baghdad-landmark-tour-baghdad":
            return {
                title: "Which Baghdad Landmark Tour Should You Take First?",
                seoTitle: "Best Baghdad Landmark Tours 2026 | Old Town, Kadhimiya, Al-Wastani Gate",
                description: "Compare three focused Baghdad landmark tours — the Old Town walking tour, the Kadhimiya sunrise tour, and the Al-Wastani Gate private tour.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/6ad47593484a4853e037de76123442ed91d9e1b6647c38fc6b8fce07a7412573.jpg",
                sections: [
                    { title: "The Short Answer", content: "Beyond a general city tour, Baghdad has a few focused single-site tours — pick based on what interests you most: historic streets, religious heritage, or Abbasid-era architecture.", tourCard: { slug: "baghdad-old-town-guided-walking-tour-with-drinks", title: "Baghdad: Old Town Guided Walking Tour with Drinks", description: "A guided walking tour through Baghdad's Old Town.", price: "From $247", duration: "2 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/6ad47593484a4853e037de76123442ed91d9e1b6647c38fc6b8fce07a7412573.jpg" } },
                    { title: "For Religious Heritage: Kadhimiya Sunrise Tour", content: "This early tour visits the Kadhimiya Shrine at sunrise, including airport pickup and breakfast, popular with pilgrims and early arrivals.", tourCard: { slug: "baghdad-kadhimiya-sunrise-tour-airport-pickup", title: "Baghdad: Kadhimiya Sunrise Tour & Airport Pickup & Breakfast", description: "A sunrise tour of the Kadhimiya Shrine with airport pickup.", price: "From $130", duration: "3 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/a8d4163a81d23317a34fd0de1b5ba357eb2552955effcc6dce1b4057769db01b.jpeg" } },
                    { title: "For Abbasid-Era History: Al-Wastani Gate Private Tour", content: "A short private tour of the Al-Wastani Gate, one of the last surviving fragments of Baghdad's medieval Abbasid-era walls.", tourCard: { slug: "baghdad-al-wastani-gate-private-guided-tour-with", title: "Baghdad: Al-Wastani Gate Private Guided Tour with Pickup", description: "A private guided tour of the Al-Wastani Gate.", price: "From $247", duration: "1 hour", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/06c42881736598d73b540a680985d8aa2c959af83360e67823b47cbd931761d9.jpeg" } },
                    { title: "Practical Tips", content: "These short, focused tours work well stacked together into one day if you have limited time in Baghdad." }
                ],
                faqs: [
                    { q: "What is the Al-Wastani Gate?", a: "One of the last surviving fragments of Baghdad's medieval Abbasid-era city walls." },
                    { q: "Can these Baghdad landmark tours be combined in one day?", a: "Yes, they are each short (1-3 hours) and can be stacked together." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "What is the Al-Wastani Gate?", "acceptedAnswer": { "@type": "Answer", "text": "A surviving fragment of Baghdad's medieval Abbasid-era city walls." } }
                ] },
            };

        default:
            return null;
    }
}

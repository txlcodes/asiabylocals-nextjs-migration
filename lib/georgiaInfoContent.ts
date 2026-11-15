import { CityInfoData } from './cityInfoContent';

export function getGeorgiaInfoContent(slug: string): CityInfoData | null {
    switch (slug) {
        case "best-kazbegi-day-tour-tbilisi":
            return {
                title: "Which Is the Best Kazbegi Day Tour from Tbilisi?",
                seoTitle: "Best Kazbegi Day Tour from Tbilisi 2026 | Honest Comparison",
                description: "Compare real Kazbegi day trips from Tbilisi — from an $11 budget group tour covering Gudauri and Gergeti Church to small-group and paragliding versions.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/d02ff5fc955ab5d43256cad8799167bb2592264478aa8713ada7a86245489a30.jpg",
                sections: [
                    {
                        title: "The Short Answer",
                        content: "Almost every Kazbegi day tour follows the same route along the Georgian Military Road — stopping at Ananuri Fortress, Gudauri's mountain viewpoints, and finishing with a 4x4 ride up to Gergeti Trinity Church below Mount Kazbek. The differences are group size, whether a 4x4 to the church is included, and small add-ons like paragliding.",
                        tourCard: { slug: "tbilisi-into-the-caucasus-kazbegi-gudauri-gergeti", title: "Tbilisi: Into the Caucasus – Kazbegi, Gudauri & Gergeti Holy", description: "The classic full-day Kazbegi route covering Gudauri and Gergeti Trinity Church.", price: "From $11", duration: "12 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/d02ff5fc955ab5d43256cad8799167bb2592264478aa8713ada7a86245489a30.jpg" },
                    },
                    {
                        title: "Cheapest: Full Caucasus Route",
                        content: "At $11, this covers the complete classic route — Gudauri, Gergeti Church, and mountain views — at the lowest price among the day tours here.",
                        tourCard: { slug: "tbilisi-into-the-caucasus-kazbegi-gudauri-gergeti", title: "Tbilisi: Into the Caucasus – Kazbegi, Gudauri & Gergeti Holy", description: "The budget version of the classic Kazbegi route.", price: "From $11", duration: "12 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/d02ff5fc955ab5d43256cad8799167bb2592264478aa8713ada7a86245489a30.jpg" },
                    },
                    {
                        title: "Best with Ananuri Included: Kazbegi, Ananuri, Gudauri & Gergeti",
                        content: "This version explicitly includes a stop at Ananuri Fortress, a 17th-century complex overlooking the Aragvi reservoir, on the way up to Kazbegi.",
                        tourCard: { slug: "from-tbilisi-kazbegi-ananuri-gudauri-gergeti-day", title: "From Tbilisi: Kazbegi, Ananuri, Gudauri & Gergeti Day Tour", description: "The full route with a dedicated Ananuri Fortress stop.", price: "From $13", duration: "11 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/798fd183ac18631a15d738d79d1e7f93252fa1deb183121fad7c2ae5f4cddd99.png" },
                    },
                    {
                        title: "Best Value Group Tour: Day Trip to Kazbegi",
                        content: "A straightforward group day trip hitting the same core stops — Kazbegi, Gudauri, Ananuri — without extra frills, a solid default choice.",
                        tourCard: { slug: "day-trip-to-kazbegi-gudauri-ananuri-from-tbilisi", title: "Day Trip To Kazbegi, Gudauri, Ananuri (From Tbilisi)", description: "A standard group day trip covering the main Kazbegi stops.", price: "From $20", duration: "11 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/bb3f48c0b7b266931bd6b2269bf5ffa89aea542af369ca437f7e0a5d25e11265.jpg" },
                    },
                    {
                        title: "Best for Small Groups: Mountain Discovery Small-Group Tour",
                        content: "This explicitly runs in a smaller group format rather than a large bus tour, worth the slightly higher price if you want more flexibility at each stop.",
                        tourCard: { slug: "tbilisi-kazbegi-mountain-discovery-small-group", title: "Tbilisi: Kazbegi Mountain Discovery Small-Group Tour", description: "A small-group version of the Kazbegi day tour.", price: "From $26", duration: "12 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/aa43427e1a0882748bd96c68201458c38c4971d0745ef6ce4255df9d8d2fd4c1.jpg" },
                    },
                    {
                        title: "Best for Adventure: Kazbegi Tour with Paragliding",
                        content: "For travellers who want more than sightseeing, this version adds a paragliding flight over the Caucasus mountains to the standard Kazbegi route.",
                        tourCard: { slug: "from-tbilisi-to-kazbegi-tour-with-paraglidng", title: "From Tbilisi to Kazbegi Tour With Paragliding", description: "The Kazbegi day tour with a paragliding flight added.", price: "From $24", duration: "11 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/ae78d3430b3750237f38995eb43ad43e8a9387dd51a7008feead227e240b221c.png" },
                    },
                    {
                        title: "Practical Tips",
                        content: "The road to Gergeti Trinity Church is steep and rough — nearly all tours switch to shared 4x4 vehicles for that final stretch rather than driving the tour bus up. Winter snow can close the Georgian Military Road entirely on short notice, so this is more reliably doable from late spring through autumn."
                    }
                ],
                faqs: [
                    { q: "What is the best Kazbegi day tour from Tbilisi?", a: "A standard group tour covering Ananuri, Gudauri, and Gergeti Church suits most visitors; go small-group for more flexibility." },
                    { q: "How long is a Kazbegi day tour from Tbilisi?", a: "Most tours run 10-12 hours round trip, including the drive along the Georgian Military Road." },
                    { q: "Do I need a 4x4 to reach Gergeti Trinity Church?", a: "Yes, the final stretch up to the church requires a 4x4 — tours switch vehicles at the base rather than driving a standard bus up." },
                    { q: "Can Kazbegi tours be done in winter?", a: "Snow can close the Georgian Military Road on short notice in winter, so late spring through autumn is more reliable." }
                ],
                jsonLd: {
                    "@context": "https://schema.org",
                    "@type": "FAQPage",
                    "mainEntity": [
                        { "@type": "Question", "name": "What is the best Kazbegi day tour from Tbilisi?", "acceptedAnswer": { "@type": "Answer", "text": "A standard group tour covering Ananuri, Gudauri, and Gergeti Church suits most visitors." } },
                        { "@type": "Question", "name": "How long is a Kazbegi day tour?", "acceptedAnswer": { "@type": "Answer", "text": "Most tours run 10-12 hours round trip." } },
                        { "@type": "Question", "name": "Do I need a 4x4 for Gergeti Trinity Church?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, the final stretch requires a 4x4." } },
                        { "@type": "Question", "name": "Can Kazbegi tours be done in winter?", "acceptedAnswer": { "@type": "Answer", "text": "Snow can close the road on short notice in winter." } }
                    ]
                },
            };

        case "best-kakheti-wine-tour-tbilisi":
            return {
                title: "Which Is the Best Kakheti Wine Tour from Tbilisi?",
                seoTitle: "Best Kakheti Wine Tour from Tbilisi 2026 | Honest Comparison",
                description: "Compare real Kakheti wine region day trips from Tbilisi — from an $11 budget tasting tour to 9-tasting small-group trips and combos with Sighnaghi and Bodbe Monastery.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/882e4235e223d1a803318007e62529c820fa381c88acbc7fb7d82d2107b20c58.jpg",
                sections: [
                    {
                        title: "The Short Answer",
                        content: "Kakheti is Georgia's main wine region, and most day tours combine winery visits and tastings with a stop in Sighnaghi, the hilltop 'City of Love,' and Bodbe Monastery. The number of tastings included and group size are what separate the budget options from the pricier small-group versions.",
                        tourCard: { slug: "tbilisi-kakheti-wine-region-day-trip-with-wine", title: "Tbilisi: Kakheti Wine Region Day Trip with Wine Tasting", description: "A standard Kakheti day trip with winery visits and tastings.", price: "From $11", duration: "10 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/882e4235e223d1a803318007e62529c820fa381c88acbc7fb7d82d2107b20c58.jpg" },
                    },
                    {
                        title: "Cheapest: Standard Wine Region Day Trip",
                        content: "At $11, this covers the core Kakheti wine experience with tastings included, the lowest-priced way to see the region.",
                        tourCard: { slug: "tbilisi-kakheti-wine-region-day-trip-with-wine", title: "Tbilisi: Kakheti Wine Region Day Trip with Wine Tasting", description: "The budget-friendly Kakheti wine day trip.", price: "From $11", duration: "10 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/882e4235e223d1a803318007e62529c820fa381c88acbc7fb7d82d2107b20c58.jpg" },
                    },
                    {
                        title: "Best for Serious Tasters: 9 Tastings in a Small Group",
                        content: "This explicitly includes 9 separate tastings and runs as a small group rather than a large bus tour — the clear pick if wine is the main reason for the trip.",
                        tourCard: { slug: "from-tbilisi-kakheti-wine-tour-9-tastings-small", title: "From Tbilisi: Kakheti Wine Tour, 9 Tastings & Small Group", description: "A small-group tour with 9 wine tastings included.", price: "From $20", duration: "8 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/5b3093703adfcdbcb637c8669e2d7a5aabb5c5d411b6201473444fecf769b3be.jpg" },
                    },
                    {
                        title: "Best Full-Day Combo: Sighnaghi & Bodbe Monastery",
                        content: "This pairs the wine tastings with a longer cultural stop in Sighnaghi and a visit to Bodbe Monastery, good for travellers who want history and scenery alongside the wine.",
                        tourCard: { slug: "tbilisi-kakheti-sighnaghi-bodbe-monastery-day-tour", title: "Tbilisi: Kakheti, Sighnaghi & Bodbe Monastery Day Tour", description: "A full-day combo of wine tasting, Sighnaghi, and Bodbe Monastery.", price: "From $24", duration: "10 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/e78c5894dc5745f6ecfa7122c9d1d4393c7f365f788d37e177d6ba326805dd94.jpeg" },
                    },
                    {
                        title: "Most Comprehensive: + Chailuri Fortress",
                        content: "The widest-ranging version, adding a stop at Chailuri Fortress to the wine, Sighnaghi, and Bodbe combination — best if you want to cover as much of Kakheti as possible in one day.",
                        tourCard: { slug: "kakheti-wine-chailuri-fortress-sighnaghi-bodbe", title: "Kakheti Wine, Chailuri Fortress, Sighnaghi, Bodbe & Telavi", description: "The most complete Kakheti day tour, adding Chailuri Fortress and Telavi.", price: "From $24", duration: "11 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/4560aa973f963fa02e589edf65cb8d79b668d6506566f1bab3e1ad5df1e251c5.jpg" },
                    },
                    {
                        title: "Practical Tips",
                        content: "Most wineries in Kakheti use the traditional qvevri (clay vessel) method, so expect noticeably different flavors from wines you may know elsewhere — ask your guide which wineries on the route use qvevri versus modern methods if that's of particular interest. Groups with children should check in advance since some wineries limit younger visitors during active tastings."
                    }
                ],
                faqs: [
                    { q: "What is the best Kakheti wine tour from Tbilisi?", a: "A standard day trip with tastings suits most visitors; go for the 9-tasting small-group option if wine is your main focus." },
                    { q: "How many wineries do Kakheti day tours visit?", a: "Typically 1-2 wineries with multiple tastings each, often combined with a stop in Sighnaghi and Bodbe Monastery." },
                    { q: "What makes Kakheti wine different?", a: "Many Kakheti wineries use the traditional qvevri clay-vessel method, giving the wine a distinct flavor profile." },
                    { q: "How long is a Kakheti wine tour from Tbilisi?", a: "Most day tours run 8-11 hours round trip." }
                ],
                jsonLd: {
                    "@context": "https://schema.org",
                    "@type": "FAQPage",
                    "mainEntity": [
                        { "@type": "Question", "name": "What is the best Kakheti wine tour from Tbilisi?", "acceptedAnswer": { "@type": "Answer", "text": "A standard day trip with tastings suits most visitors." } },
                        { "@type": "Question", "name": "How many wineries do Kakheti tours visit?", "acceptedAnswer": { "@type": "Answer", "text": "Typically 1-2 wineries with multiple tastings." } },
                        { "@type": "Question", "name": "What makes Kakheti wine different?", "acceptedAnswer": { "@type": "Answer", "text": "Many wineries use the traditional qvevri clay-vessel method." } },
                        { "@type": "Question", "name": "How long is a Kakheti wine tour?", "acceptedAnswer": { "@type": "Answer", "text": "Most day tours run 8-11 hours round trip." } }
                    ]
                },
            };

        case "best-old-town-walking-tour-tbilisi":
            return {
                title: "Which Is the Best Old Town Walking Tour in Tbilisi?",
                seoTitle: "Best Old Town Walking Tour Tbilisi 2026 | Honest Comparison",
                description: "Compare real Old Town Tbilisi walking tours — from an $18 historic walk with a local guide to food-and-wine, market, and hidden-canyon versions.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/aaf34f1c36f626e2d56c5da064980c4828870e604344be8f0dd2fdd1ae6b82b0.jpg",
                sections: [
                    { title: "The Short Answer", content: "Tbilisi's Old Town is compact and walkable, with sulfur bathhouses, Narikala Fortress views, and winding cobblestone lanes as the core stops. A standard historic walk with a local guide covers the main sights without any extra theme.", tourCard: { slug: "tbilisi-old-town-historic-walk-with-local-guide", title: "Tbilisi: Old Town Historic Walk With Local Guide", description: "A standard guided walk through Tbilisi's Old Town.", price: "From $18", duration: "2 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/aaf34f1c36f626e2d56c5da064980c4828870e604344be8f0dd2fdd1ae6b82b0.jpg" } },
                    { title: "Cheapest: Historic Walk With Local Guide", content: "At $18, this covers the core Old Town sights at the lowest price among the walking tours here.", tourCard: { slug: "tbilisi-old-town-historic-walk-with-local-guide", title: "Tbilisi: Old Town Historic Walk With Local Guide", description: "The budget-friendly Old Town walking tour.", price: "From $18", duration: "2 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/aaf34f1c36f626e2d56c5da064980c4828870e604344be8f0dd2fdd1ae6b82b0.jpg" } },
                    { title: "Best for a Different Angle: Waterfall & Hidden Canyon", content: "Rather than sticking to the main squares, this version detours to the Tbilisi Waterfall inside Leghvtakhevi Canyon, a short but scenic add-on most tourists miss.", tourCard: { slug: "tbilisi-old-town-waterfall-hidden-canyon-walking", title: "Tbilisi: Old Town Waterfall & Hidden Canyon Walking Tour", description: "An Old Town walk that detours to a hidden waterfall canyon.", price: "From $18", duration: "2 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/d37c0ddf137fa2b7a967c6976479671b14aa689ae04de916f977dbe5a25cd430.jpeg" } },
                    { title: "Best Themed Walk: Silk Road, Markets and Local Stories", content: "This version leans into Tbilisi's trading-crossroads history, with stops at local markets and stories tied to the old Silk Road routes.", tourCard: { slug: "tbilisi-old-town-silk-road-markets-and-local", title: "Tbilisi Old Town: Silk Road, Markets and Local Stories", description: "A themed walk covering Tbilisi's market and trading history.", price: "From $52", duration: "2 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/34bf35144a08c9d6515fc66d3c43f8f1e6d55f911bc97e6b79dd1c177dfaf13e.jpeg" } },
                    { title: "Best for Food Lovers: Old Town Food and Wine Tour", content: "This combines the historic walk with food and wine stops along the way, good for travellers who want to eat their way through the Old Town rather than just look at it.", tourCard: { slug: "tbilisi-old-town-food-and-wine-tour", title: "Tbilisi: Old Town Food and Wine Tour", description: "An Old Town walk combined with food and wine tastings.", price: "From $66", duration: "4 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/a4cca7696d2f508d4228e828b6be48a779a0d2d8385a5e728101bd3c445f8e95.png" } },
                    { title: "Best In-Depth Version: Discover History of Old Town", content: "A longer, more thorough version for travellers who want real depth on the Old Town's history rather than a quick overview walk.", tourCard: { slug: "tbilisi-discover-history-of-old-town-walking-tour", title: "Tbilisi: Discover History of Old Town Walking Tour", description: "An in-depth historical walking tour of the Old Town.", price: "From $40", duration: "3 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/b37aa5b93d5672e68f4b19509bc228cd5548b66a088e2ce23b65ae02635bf0ac.jpg" } },
                    { title: "Practical Tips", content: "The Old Town's cobblestone streets and steep lanes up to Narikala Fortress mean comfortable shoes matter more than on most city walks. Many tours end near the sulfur bathhouses, so pack a swimsuit if you want to follow up with a soak afterward." }
                ],
                faqs: [
                    { q: "What is the best Old Town walking tour in Tbilisi?", a: "A standard historic walk with a local guide suits most visitors; add food and wine stops for a fuller experience." },
                    { q: "How long does an Old Town Tbilisi walking tour take?", a: "Most tours run 2-4 hours depending on whether food, wine, or extra detours are included." },
                    { q: "What's the cheapest Old Town walking tour in Tbilisi?", a: "A standard historic walk with a local guide, the lowest-priced option." },
                    { q: "Can an Old Town walk include the sulfur bathhouses?", a: "Many tours pass by them, and some travellers follow up with a bathhouse visit afterward on their own." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "What is the best Old Town walking tour in Tbilisi?", "acceptedAnswer": { "@type": "Answer", "text": "A standard historic walk with a local guide suits most visitors." } },
                    { "@type": "Question", "name": "How long does it take?", "acceptedAnswer": { "@type": "Answer", "text": "Most tours run 2-4 hours." } },
                    { "@type": "Question", "name": "What's the cheapest option?", "acceptedAnswer": { "@type": "Answer", "text": "A standard historic walk with a local guide." } },
                    { "@type": "Question", "name": "Can it include the sulfur bathhouses?", "acceptedAnswer": { "@type": "Answer", "text": "Many tours pass by them." } }
                ] },
            };

        case "best-mtskheta-jvari-day-trip-tbilisi":
            return {
                title: "Which Is the Best Mtskheta & Jvari Day Trip from Tbilisi?",
                seoTitle: "Best Mtskheta & Jvari Day Trip Tbilisi 2026 | Honest Comparison",
                description: "Compare real half-day Mtskheta and Jvari Monastery trips from Tbilisi — from a $21 guided tour to Svetitskhoveli Cathedral and Samtavro Monastery combos.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/a26f7112f41b5ffd6ab965cbc141b7d0728036af5251508c259555fd5d3559ec.png",
                sections: [
                    { title: "The Short Answer", content: "Mtskheta, Georgia's ancient capital, is a half-day trip from Tbilisi centered on Jvari Monastery's hilltop view and Svetitskhoveli Cathedral below. A standard guided tour covering both is the most common version, distinct from the longer full-day trips that add Gori and Uplistsikhe.", tourCard: { slug: "tbilisi-mtskheta-guided-tour-with-jvari-monastery", title: "Tbilisi: Mtskheta Guided Tour with Jvari Monastery", description: "A standard half-day Mtskheta and Jvari Monastery tour.", price: "From $21", duration: "4 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/a26f7112f41b5ffd6ab965cbc141b7d0728036af5251508c259555fd5d3559ec.png" } },
                    { title: "Cheapest: Guided Tour with Jvari Monastery", content: "At $21, this is the lowest-priced way to see both Jvari Monastery and Mtskheta's cathedral in one half-day trip.", tourCard: { slug: "tbilisi-mtskheta-guided-tour-with-jvari-monastery", title: "Tbilisi: Mtskheta Guided Tour with Jvari Monastery", description: "The budget-friendly Mtskheta half-day trip.", price: "From $21", duration: "4 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/a26f7112f41b5ffd6ab965cbc141b7d0728036af5251508c259555fd5d3559ec.png" } },
                    { title: "Best Value Half-Day: Mtskheta Guided Experience", content: "A straightforward half-day experience at a similar price point, covering the same core sights with slightly different pacing.", tourCard: { slug: "from-tbilisi-half-day-mtskheta-guided-experience", title: "From Tbilisi: Half Day Mtskheta Guided Experience", description: "A half-day guided experience in Mtskheta.", price: "From $25", duration: "4 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/43f84f0a802a95fee8e2c7118194d45b36701eb92bcb1896e35b6955f696a41c.jpeg" } },
                    { title: "Best with Samtavro Added: Half-Day Tour with Monasteries", content: "This version adds Samtavro Monastery to the standard Jvari-and-cathedral route, covering a third historic site in the same half-day window.", tourCard: { slug: "from-tbilisi-half-day-tour-mtskheta-jvari-samtavro", title: "From Tbilisi: Half day tour, Mtskheta, Jvari & Samtavro", description: "A half-day trip adding Samtavro Monastery to the Mtskheta route.", price: "From $25", duration: "4 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/48d74a7c24f907360a9e3201305ca6f3759f8a7ce891cfc59e1dbfd8b5dea71b.png" } },
                    { title: "Best Named-Cathedral Focus: Jvari, Svetitskhoveli & Samtavro", content: "This version names all three sites explicitly in its itinerary — Jvari, Svetitskhoveli Cathedral, and Samtavro — useful if you want to confirm exactly what's covered before booking.", tourCard: { slug: "from-tbilisi-to-mtskheta-jvari-svetitskhoveli", title: "From Tbilisi to Mtskheta, Jvari, Svetitskhoveli & Samtavro", description: "A half-day trip explicitly covering Jvari, Svetitskhoveli, and Samtavro.", price: "From $24", duration: "4 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/9d28b5f617afdfbea5484e4c5e2acc1fdb0b5acac70169d038dd26e22b17748c.jpg" } },
                    { title: "Practical Tips", content: "Jvari Monastery sits on a hilltop with sweeping views over the Mtkvari and Aragvi rivers meeting below — worth timing your visit for clear weather if photos matter to you. If you want to also see Gori and Uplistsikhe cave town, look for a dedicated full-day combo rather than trying to add them onto a half-day Mtskheta trip." }
                ],
                faqs: [
                    { q: "What is the best Mtskheta and Jvari day trip from Tbilisi?", a: "A standard half-day guided tour covering Jvari Monastery and Svetitskhoveli Cathedral suits most visitors." },
                    { q: "How long is a Mtskheta and Jvari trip from Tbilisi?", a: "Most half-day versions run around 4 hours." },
                    { q: "Can Mtskheta be combined with Gori and Uplistsikhe?", a: "Yes, but that requires a separate, longer full-day tour rather than a half-day Mtskheta trip." },
                    { q: "What's the cheapest Mtskheta day trip from Tbilisi?", a: "A standard guided tour with Jvari Monastery, the lowest-priced half-day option." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "What is the best Mtskheta and Jvari day trip from Tbilisi?", "acceptedAnswer": { "@type": "Answer", "text": "A standard half-day guided tour suits most visitors." } },
                    { "@type": "Question", "name": "How long is the trip?", "acceptedAnswer": { "@type": "Answer", "text": "Most half-day versions run around 4 hours." } },
                    { "@type": "Question", "name": "Can it be combined with Gori and Uplistsikhe?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, but via a separate full-day tour." } },
                    { "@type": "Question", "name": "What's the cheapest option?", "acceptedAnswer": { "@type": "Answer", "text": "A standard guided tour with Jvari Monastery." } }
                ] },
            };

        case "best-gori-uplistsikhe-day-trip-tbilisi":
            return {
                title: "Which Is the Best Gori & Uplistsikhe Day Trip from Tbilisi?",
                seoTitle: "Best Gori & Uplistsikhe Day Trip Tbilisi 2026 | Honest Comparison",
                description: "Compare real full-day Gori and Uplistsikhe cave town trips from Tbilisi — from an $18 combo tour to versions adding the Stalin Museum and Mtskheta.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/20ba4d95f677f564bf0927935762012b9bf4c8964cc4b0b0dff7976638eca216.jpg",
                sections: [
                    { title: "The Short Answer", content: "Uplistsikhe is an ancient rock-hewn cave town, usually paired with Gori (Stalin's birthplace and its controversial museum) and often Mtskheta on the way back, making this a full-day trip rather than the shorter Mtskheta-only version.", tourCard: { slug: "tbilisi-mtskheta-gori-uplistsikhe-tour", title: "Tbilisi: Mtskheta, Gori, & Uplistsikhe Tour", description: "A full-day combo of Mtskheta, Gori, and Uplistsikhe cave town.", price: "From $18", duration: "9.5 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/20ba4d95f677f564bf0927935762012b9bf4c8964cc4b0b0dff7976638eca216.jpg" } },
                    { title: "Cheapest: Mtskheta, Gori & Uplistsikhe Tour", content: "At $18, this is the lowest-priced full-day version covering all three stops.", tourCard: { slug: "tbilisi-mtskheta-gori-uplistsikhe-tour", title: "Tbilisi: Mtskheta, Gori, & Uplistsikhe Tour", description: "The budget-friendly full-day combo.", price: "From $18", duration: "9.5 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/20ba4d95f677f564bf0927935762012b9bf4c8964cc4b0b0dff7976638eca216.jpg" } },
                    { title: "Best for History Depth: + Stalin Museum", content: "This version explicitly includes entry to the Stalin Museum in Gori, rather than just driving past the town, for travellers who want that specific stop covered.", tourCard: { slug: "from-tbilisi-mtskheta-gori-stalin-museum", title: "From Tbilisi: Mtskheta, Gori, Stalin Museum & Uplistsikhe", description: "A full-day tour with dedicated Stalin Museum entry.", price: "From $27", duration: "10 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/d183471e2e7bc17ae2681bf4d135b059e91a4810c709a3f3201152d9e01382d8.jpg" } },
                    { title: "Best Group Day Tour: Mtskheta, Gori & Uplistsikhe", content: "A standard group version of the same three-stop route, a reliable default if you don't need the Stalin Museum specifically.", tourCard: { slug: "from-tbilisi-mtskheta-gori-and-uplistsikhe-day", title: "From Tbilisi: Mtskheta, Gori, and Uplistsikhe Day Tour", description: "A standard full-day group tour of the three sites.", price: "From $26", duration: "9 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/a8898ed310a3510a53f4b8721b2b08f0b0bdd3dec0a1139c1aca64b292458898.jpg" } },
                    { title: "Most Comprehensive: Georgia Day Trip (Mtskheta, Jvari, Uplistsikhe & Gori)", content: "This version explicitly names Jvari Monastery alongside the other three stops, making it the most complete single-day itinerary covering all of the region's main historic sites.", tourCard: { slug: "georgia-day-trip-mtskheta-jvari-uplistsikhe-gori", title: "Georgia Day Trip: Mtskheta, Jvari, Uplistsikhe & Gori", description: "The most complete single-day combo of all four sites.", price: "From $32", duration: "10 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/63167cdbe7636ca9b4ce36008e74c0646bbaf05e284f1d9f4ff558bafa5ecd70.png" } },
                    { title: "Practical Tips", content: "Uplistsikhe's cave dwellings involve some scrambling over uneven rock, so wear shoes with good grip rather than sandals. The Stalin Museum is a genuinely controversial stop for some travellers given its largely uncritical framing — worth knowing before you book a version that includes it." }
                ],
                faqs: [
                    { q: "What is the best Gori and Uplistsikhe day trip from Tbilisi?", a: "A standard full-day combo covering Mtskheta, Gori, and Uplistsikhe suits most visitors." },
                    { q: "Does the Gori day trip include the Stalin Museum?", a: "Some versions include dedicated entry; others just pass through Gori, so check before booking if that matters to you." },
                    { q: "How long is a Gori and Uplistsikhe day trip?", a: "Most full-day versions run 9-10 hours round trip." },
                    { q: "What's the cheapest Gori and Uplistsikhe tour?", a: "A standard three-stop combo tour, the lowest-priced full-day option." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "What is the best Gori and Uplistsikhe day trip from Tbilisi?", "acceptedAnswer": { "@type": "Answer", "text": "A standard full-day combo suits most visitors." } },
                    { "@type": "Question", "name": "Does it include the Stalin Museum?", "acceptedAnswer": { "@type": "Answer", "text": "Some versions do, others just pass through Gori." } },
                    { "@type": "Question", "name": "How long is the trip?", "acceptedAnswer": { "@type": "Answer", "text": "Most versions run 9-10 hours." } },
                    { "@type": "Question", "name": "What's the cheapest option?", "acceptedAnswer": { "@type": "Answer", "text": "A standard three-stop combo tour." } }
                ] },
            };

        case "best-david-gareja-monastery-tour-tbilisi":
            return {
                title: "Which Is the Best David Gareja Monastery Tour from Tbilisi?",
                seoTitle: "Best David Gareja Monastery Tour Tbilisi 2026 | Honest Comparison",
                description: "Compare real David Gareja Monastery and Rainbow Mountains tours from Tbilisi — from a $38 shared trip to private and wine-tasting combo versions.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/23d92f806af7526e7b492a551f121450133b35ba5d41ee50488dd943eef9400c.png",
                sections: [
                    { title: "The Short Answer", content: "David Gareja is a cave monastery complex on the semi-desert Azerbaijan border, usually paired with the colorful striped 'Rainbow Mountains' nearby. A shared day trip covering both is the standard way to see this remote site.", tourCard: { slug: "from-tbilisi-rainbow-mountain-david-gareja", title: "From Tbilisi: Rainbow Mountain & David Gareja Monastery Trip", description: "A day trip combining the Rainbow Mountains and David Gareja Monastery.", price: "From $38", duration: "7 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/47b8d33c34a3c4cb8d6c841e3ce7baf5ab60c490a2a2521bbd6d13d709f90807.jpg" } },
                    { title: "Cheapest: Rainbow Mountain & David Gareja Monastery Trip", content: "At $38, this is the lowest-priced way to see both the monastery and the Rainbow Mountains in one day.", tourCard: { slug: "from-tbilisi-rainbow-mountain-david-gareja", title: "From Tbilisi: Rainbow Mountain & David Gareja Monastery Trip", description: "The budget-friendly version of this combo day trip.", price: "From $38", duration: "7 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/47b8d33c34a3c4cb8d6c841e3ce7baf5ab60c490a2a2521bbd6d13d709f90807.jpg" } },
                    { title: "Best Value Standard Tour: David Gareja Monastery & Rainbow Mountains", content: "A straightforward version of the same combo at a similar price point, run by a different operator with slightly different inclusions.", tourCard: { slug: "tbilisi-david-gareja-monastery-rainbow-mountains", title: "Tbilisi: David Gareja Monastery & Rainbow Mountains Tour", description: "A standard combo tour of the monastery and Rainbow Mountains.", price: "From $41", duration: "7 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/23d92f806af7526e7b492a551f121450133b35ba5d41ee50488dd943eef9400c.png" } },
                    { title: "Best Named 'Rainbow Desert' Version: Rainbow Desert Day Tour", content: "This operator frames the striped rock formations as a 'Rainbow Desert' rather than mountains, covering the same core sights with its own branding and pace.", tourCard: { slug: "from-tbilisi-david-gareja-monastery-rainbow", title: "From Tbilisi: David Gareja Monastery & Rainbow Desert Day Tour", description: "A combo day trip branded around the Rainbow Desert formations.", price: "From $51", duration: "7 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/23d92f806af7526e7b492a551f121450133b35ba5d41ee50488dd943eef9400c.png" } },
                    { title: "Best for Wine Lovers: David Gareji Monastery and Wine Tasting Tour", content: "Rather than pairing the monastery with the Rainbow Mountains, this version adds wine tasting instead, since the David Gareja area sits near Kakheti's eastern wine country.", tourCard: { slug: "from-tbilisi-david-gareji-monastery-and-wine", title: "From Tbilisi: David Gareji Monastery and Wine Tasting Tour", description: "David Gareja Monastery combined with wine tasting instead of the Rainbow Mountains.", price: "From $78", duration: "1 day", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/c1532c7bd8c2974e114171bff57d2b2a8276eef97e11a209d6527c33a1bcc2a4.jpeg" } },
                    { title: "Practical Tips", content: "The road to David Gareja is rough in places and the site itself involves walking across exposed, shadeless terrain — bring water and sun protection even in cooler months. The Rainbow Mountains' colors show most vividly in good midday light, so an early-morning-only itinerary may mean flatter-looking rock." }
                ],
                faqs: [
                    { q: "What is the best David Gareja Monastery tour from Tbilisi?", a: "A shared day trip combining the monastery with the Rainbow Mountains suits most visitors." },
                    { q: "How far is David Gareja from Tbilisi?", a: "It's a full day trip, roughly 7 hours round trip including the monastery and Rainbow Mountains stops." },
                    { q: "Can David Gareja be combined with wine tasting?", a: "Yes, since the area is near Kakheti's eastern wine country, some tours pair it with wine tasting instead of the Rainbow Mountains." },
                    { q: "What's the cheapest David Gareja tour from Tbilisi?", a: "A shared day trip combining the monastery and Rainbow Mountains, the lowest-priced option." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "What is the best David Gareja Monastery tour from Tbilisi?", "acceptedAnswer": { "@type": "Answer", "text": "A shared day trip with the Rainbow Mountains suits most visitors." } },
                    { "@type": "Question", "name": "How far is David Gareja from Tbilisi?", "acceptedAnswer": { "@type": "Answer", "text": "About 7 hours round trip." } },
                    { "@type": "Question", "name": "Can it be combined with wine tasting?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, some tours pair it with Kakheti wine tasting instead." } },
                    { "@type": "Question", "name": "What's the cheapest option?", "acceptedAnswer": { "@type": "Answer", "text": "A shared day trip combining monastery and Rainbow Mountains." } }
                ] },
            };

        case "best-chronicles-of-georgia-tour-tbilisi":
            return {
                title: "Which Is the Best Chronicles of Georgia Monument Tour in Tbilisi?",
                seoTitle: "Best Chronicles of Georgia Tour Tbilisi 2026 | Honest Comparison",
                description: "Compare real Chronicles of Georgia monument tours from Tbilisi — from a $24 Mtskheta combo to panoramic city-tour and wine-cellar versions.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/76ae682d80dd054658aeff4732959d4d8e3725fc9a8810a3327d943d44b9c3fb.jpg",
                sections: [
                    { title: "The Short Answer", content: "The Chronicles of Georgia is a towering set of carved pillars overlooking the Tbilisi Sea reservoir, usually visited as a stop on a broader Mtskheta tour rather than on its own. A combo version with Mtskheta, Jvari, and a wine cellar is the most common way to see it.", tourCard: { slug: "mtskheta-jvari-bazaar-chronicles-of-georgia-wine", title: "Mtskheta, Jvari, Bazaar, Chronicles of Georgia & Wine Cellar", description: "A combo tour covering Mtskheta, Jvari, the Chronicles monument, and a wine cellar.", price: "From $24", duration: "5 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/c8fed9d81fddd3899956fb0bc2cf8fd8e468b22df5e9fb2b61640ded7332f80e.jpg" } },
                    { title: "Cheapest: Mtskheta, Jvari, Bazaar & Wine Cellar Combo", content: "At $24, this covers the Chronicles monument alongside Mtskheta, a bazaar stop, and a wine cellar at the lowest price among the options here.", tourCard: { slug: "mtskheta-jvari-bazaar-chronicles-of-georgia-wine", title: "Mtskheta, Jvari, Bazaar, Chronicles of Georgia & Wine Cellar", description: "The budget-friendly Chronicles of Georgia combo.", price: "From $24", duration: "5 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/c8fed9d81fddd3899956fb0bc2cf8fd8e468b22df5e9fb2b61640ded7332f80e.jpg" } },
                    { title: "Best Value Standard Combo: Chronicles of Georgia, Jvari, Mtskheta Tour & Wine", content: "A similar combo at a slightly higher price, with its own operator-specific pacing and inclusions.", tourCard: { slug: "tbilisi-chronicles-of-georgia-jvari-mtskheta-tour", title: "Tbilisi: Chronicles of Georgia, Jvari, Mtskheta Tour & Wine", description: "A standard Chronicles of Georgia and Mtskheta combo with wine.", price: "From $29", duration: "6 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/cee87fa3d600c6bbcad59d9a2a2b2fc1b0760db8d1a9d33ff2cb59e79254b5e2.jpeg" } },
                    { title: "Best for City Views Instead: Panoramic Tour & Chronicles of Georgia", content: "Rather than pairing the monument with Mtskheta, this version pairs it with a panoramic Tbilisi city tour and a stop at Mtatsminda, better suited to travellers who've already done Mtskheta separately.", tourCard: { slug: "tbilisi-panoramic-tour-chronicles-of-georgia", title: "Tbilisi: Panoramic Tour, Chronicles of Georgia & Mtatsminda", description: "A city panorama tour combined with the Chronicles of Georgia monument.", price: "From $52", duration: "4 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/76ae682d80dd054658aeff4732959d4d8e3725fc9a8810a3327d943d44b9c3fb.jpg" } },
                    { title: "Best Simple City + Monument Combo: Tbilisi City Tour + Chronicles of Georgia", content: "A straightforward pairing of a general Tbilisi city tour with the Chronicles monument, without the panoramic or Mtatsminda framing of the pricier option.", tourCard: { slug: "tbilisi-city-tour-chronicles-of-georgia", title: "Tbilisi city tour + Chronicles of Georgia", description: "A general city tour combined with the Chronicles of Georgia monument.", price: "From $73", duration: "5 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/3d05e8723f7bc33cc4be43fbb20c2450d44e8d5e073db03e86c4420b9cd40945.jpeg" } },
                    { title: "Practical Tips", content: "The monument sits on an exposed hilltop with little shade, and the carved reliefs depicting Georgian history are worth a guide's explanation since they're not labeled on-site. Most versions bundle it as a stop rather than the main event, so check the itinerary order if seeing it at a specific time of day (for sunset photos, for example) matters to you." }
                ],
                faqs: [
                    { q: "What is the best Chronicles of Georgia tour from Tbilisi?", a: "A combo with Mtskheta, Jvari, and a wine cellar suits most visitors; pick a city-panorama combo if you've already done Mtskheta separately." },
                    { q: "Is the Chronicles of Georgia monument usually a standalone tour?", a: "No, it's almost always included as a stop within a broader Mtskheta or city-panorama tour." },
                    { q: "What does the Chronicles of Georgia monument depict?", a: "Carved pillars showing scenes from Georgian history and Christianity, best understood with a guide since there's no on-site labeling." },
                    { q: "What's the cheapest way to see the Chronicles of Georgia?", a: "A combo tour with Mtskheta, Jvari, and a wine cellar, the lowest-priced option." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "What is the best Chronicles of Georgia tour from Tbilisi?", "acceptedAnswer": { "@type": "Answer", "text": "A combo with Mtskheta, Jvari, and a wine cellar suits most visitors." } },
                    { "@type": "Question", "name": "Is it usually a standalone tour?", "acceptedAnswer": { "@type": "Answer", "text": "No, it's almost always a stop within a broader tour." } },
                    { "@type": "Question", "name": "What does the monument depict?", "acceptedAnswer": { "@type": "Answer", "text": "Carved pillars showing scenes from Georgian history." } },
                    { "@type": "Question", "name": "What's the cheapest way to see it?", "acceptedAnswer": { "@type": "Answer", "text": "A combo tour with Mtskheta, Jvari, and a wine cellar." } }
                ] },
            };

        case "best-horseback-riding-tour-tbilisi":
            return {
                title: "Which Is the Best Horseback Riding Tour near Tbilisi?",
                seoTitle: "Best Horseback Riding Tour Tbilisi 2026 | Honest Comparison",
                description: "Compare real horseback riding tours near Tbilisi — from a $169 1-hour ranch ride to Sabaduri Forest BBQ rides and the multi-day Truso Valley adventure.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/70254e8b01165d778924aae8a6fb85075c167bb3b4576e7446ea03bf98979dbe.jpg",
                sections: [
                    { title: "The Short Answer", content: "Horseback riding near Tbilisi ranges from short ranch sessions to full-day forest rides with a BBQ and multi-day mountain valley trips. A 1-hour ride at Palomino Ranch near Tbilisi is the simplest way to try it without committing a full day.", tourCard: { slug: "1-hour-horse-riding-tour-at-palomino-ranch-near", title: "1-Hour Horse Riding Tour at Palomino Ranch Near Tbilisi", description: "A short introductory horse riding session near Tbilisi.", price: "From $169", duration: "2 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/062bcb335da1aaa7903d699d5cfcf29480d2131e41a4178fff0d6f7afdcc65f2.jpg" } },
                    { title: "Cheapest: 1-Hour Ride at Palomino Ranch", content: "At $169, this is the shortest, lowest-priced way to try horseback riding near Tbilisi.", tourCard: { slug: "1-hour-horse-riding-tour-at-palomino-ranch-near", title: "1-Hour Horse Riding Tour at Palomino Ranch Near Tbilisi", description: "The budget-friendly introductory ride.", price: "From $169", duration: "2 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/062bcb335da1aaa7903d699d5cfcf29480d2131e41a4178fff0d6f7afdcc65f2.jpg" } },
                    { title: "Best for More Riding Time: 2-Hour Ride at Palomino Ranch", content: "The same ranch setting as the 1-hour option, but with double the time in the saddle for riders who want more than a quick taster.", tourCard: { slug: "2-hour-horse-riding-tour-at-palomino-ranch-near", title: "2-hour horse riding tour at Palomino Ranch Near Tbilisi", description: "A longer ranch ride near Tbilisi.", price: "From $182", duration: "2 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/3bf5c82535c20580267caa78ab2b9bc6982d273f0a5a5813b6d78dc091fdeb23.jpeg" } },
                    { title: "Best for a Fuller Day Out: Sabaduri Forest Ride with BBQ", content: "This extends the experience into a full-day outing through Sabaduri Forest with a BBQ included, better suited to riders who want the horseback ride to be part of a bigger day out rather than the whole activity.", tourCard: { slug: "tbilisi-sabaduri-forest-horse-riding-tour-with-bbq", title: "Tbilisi: Sabaduri Forest Horse Riding Tour with BBQ", description: "A full-day forest horseback ride with a BBQ included.", price: "From $290", duration: "8 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/25181f65794197e6a06ee44317f785c1f4fbdb7a0353a60d0e8ef493e23acff9.jpeg" } },
                    { title: "Most Adventurous: Truso Valley Horse Riding Adventure", content: "This is a full-day mountain-valley ride near Kazbegi rather than a short Tbilisi-area session, for travellers who want a genuine multi-hour riding adventure through dramatic Caucasus scenery.", tourCard: { slug: "from-tbilisi-truso-valley-horse-riding-adventure", title: "From Tbilisi: Truso Valley Horse Riding Adventure", description: "A full-day mountain valley horseback adventure from Tbilisi.", price: "From $468", duration: "1 day", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/70254e8b01165d778924aae8a6fb85075c167bb3b4576e7446ea03bf98979dbe.jpg" } },
                    { title: "Practical Tips", content: "Ranch sessions near Tbilisi are suitable for beginners with little or no riding experience, while the Truso Valley and forest rides generally expect at least basic comfort in the saddle given the longer hours and terrain. Closed-toe shoes with a slight heel are recommended over sneakers for proper stirrup grip." }
                ],
                faqs: [
                    { q: "What is the best horseback riding tour near Tbilisi?", a: "A 1 or 2-hour ranch ride suits beginners; the Sabaduri Forest or Truso Valley options suit riders who want a fuller day." },
                    { q: "Do I need riding experience for horseback tours near Tbilisi?", a: "Ranch sessions are beginner-friendly; the longer forest and valley rides generally expect basic riding comfort." },
                    { q: "What's the cheapest horseback riding option near Tbilisi?", a: "A 1-hour ride at Palomino Ranch, the shortest and lowest-priced option." },
                    { q: "Can horseback riding near Tbilisi include a full day out?", a: "Yes, the Sabaduri Forest ride includes a BBQ, and the Truso Valley option is a full-day mountain adventure." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "What is the best horseback riding tour near Tbilisi?", "acceptedAnswer": { "@type": "Answer", "text": "A 1 or 2-hour ranch ride suits beginners." } },
                    { "@type": "Question", "name": "Do I need riding experience?", "acceptedAnswer": { "@type": "Answer", "text": "Ranch sessions are beginner-friendly; longer rides expect basic comfort." } },
                    { "@type": "Question", "name": "What's the cheapest option?", "acceptedAnswer": { "@type": "Answer", "text": "A 1-hour ride at Palomino Ranch." } },
                    { "@type": "Question", "name": "Can it include a full day out?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, the Sabaduri Forest ride and Truso Valley option." } }
                ] },
            };

        case "best-vardzia-borjomi-day-trip-tbilisi":
            return {
                title: "Which Is the Best Vardzia & Borjomi Day Trip from Tbilisi?",
                seoTitle: "Best Vardzia Borjomi Day Trip from Tbilisi 2026 | Honest Comparison",
                description: "Compare real Vardzia cave monastery and Borjomi day trips from Tbilisi — from a $38 budget group tour to private 4x4 and multi-day versions, almost always paired with Rabati Castle.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/a81784b7c91dc06820f80b39b0e0f2ca759728d4ca6e15d90296116ad964bdb0.png",
                sections: [
                    {
                        title: "The Short Answer",
                        content: "Vardzia's 12th-century cave monastery, Borjomi's mineral-water park, and Akhaltsikhe's Rabati Castle sit close enough together that nearly every tour visits all three in one long day. A standard budget group tour covering all three is the default, most-booked option.",
                        tourCard: { slug: "from-tbilisiunesco-vardzia-rabati-and-borjomi-day", title: "From Tbilisi:UNESCO Vardzia, Rabati, and Borjomi Day Trip", description: "The standard full-day trip covering Vardzia, Rabati Castle, and Borjomi.", price: "From $38", duration: "15 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/a81784b7c91dc06820f80b39b0e0f2ca759728d4ca6e15d90296116ad964bdb0.png" },
                    },
                    {
                        title: "Cheapest: Standard UNESCO Day Trip",
                        content: "At $38, this is the lowest-priced version covering all three stops in one long day.",
                        tourCard: { slug: "from-tbilisiunesco-vardzia-rabati-and-borjomi-day", title: "From Tbilisi:UNESCO Vardzia, Rabati, and Borjomi Day Trip", description: "The budget-friendly version of the classic three-stop route.", price: "From $38", duration: "15 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/a81784b7c91dc06820f80b39b0e0f2ca759728d4ca6e15d90296116ad964bdb0.png" },
                    },
                    {
                        title: "Best for Private Comfort: Vardzia, Rabati Castle & Borjomi Private Tour",
                        content: "This runs as a private tour rather than a shared group bus, worth it if you want flexible timing at each of the three long-day stops.",
                        tourCard: { slug: "from-tbilisi-vardzia-rabati-castle-borjomi", title: "From Tbilisi: Vardzia, Rabati Castle & Borjomi Private Tour", description: "A private version of the Vardzia/Rabati/Borjomi circuit.", price: "From $319", duration: "14 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/43db15b4cb83f19d3405ee42beee7583fad9953775696ad7691b3e4120556540.jpg" },
                    },
                    {
                        title: "Best for a Less Rushed Day: 2-Day Tour",
                        content: "Given this route runs 13-15 hours as a single day, this 2-day version splits it into a more relaxed pace with an overnight stay, worth considering given how long the single-day versions run.",
                        tourCard: { slug: "tbilisi-2-day-borjomi-rabati-vardzia-tour", title: "Tbilisi: 2-Day Borjomi, Rabati, & Vardzia Tour", description: "A 2-day version of the route with an overnight stay, avoiding the single long day.", price: "From $390", duration: "2 days", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/cad3d969e12375aafcc70cceb3ad9daf15089917ad7c204f88a9ebf9f424afb5.jpeg" },
                    },
                    {
                        title: "Best for Castle Focus: Borjomi, Rabati Castle & Vardzia Day Trip",
                        content: "This version leads with Rabati Castle's restored fortress complex, good if that's your priority stop rather than the cave monastery.",
                        tourCard: { slug: "from-tbilisi-borjomi-rabati-castle-vardzia-day", title: "From Tbilisi: Borjomi, Rabati Castle & Vardzia Day Trip", description: "A version of the route with more time at Rabati Castle.", price: "From $66", duration: "13 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/4ecf9158ae6c653fc28deb77edabf7d254d70e99f6e72109e9d532f5978162df.jpeg" },
                    },
                    {
                        title: "Practical Tips",
                        content: "This is one of Georgia's longest single-day tours from Tbilisi — 13-15 hours round trip is typical, so an early departure (often before 7am) is standard. If you'd rather not spend most of a day on the road, the 2-day version is worth the extra cost."
                    }
                ],
                faqs: [
                    { q: "What is the best Vardzia and Borjomi day trip from Tbilisi?", a: "A standard group tour covering Vardzia, Rabati Castle, and Borjomi suits most visitors; go private for flexible timing or 2-day to avoid the long single-day drive." },
                    { q: "How long is the Vardzia/Borjomi day trip from Tbilisi?", a: "Typically 13-15 hours round trip, among the longest single-day tours from Tbilisi." },
                    { q: "Can Vardzia and Borjomi be split into two days?", a: "Yes, a 2-day version exists with an overnight stay for a less rushed pace." },
                    { q: "What's included on a typical Vardzia/Borjomi day trip?", a: "Usually Vardzia cave monastery, Rabati Castle in Akhaltsikhe, and Borjomi's mineral-water park, all in one day." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "What is the best Vardzia and Borjomi day trip from Tbilisi?", "acceptedAnswer": { "@type": "Answer", "text": "A standard group tour covering Vardzia, Rabati Castle, and Borjomi suits most visitors." } },
                    { "@type": "Question", "name": "How long is the day trip?", "acceptedAnswer": { "@type": "Answer", "text": "Typically 13-15 hours round trip." } },
                    { "@type": "Question", "name": "Can it be split into two days?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, a 2-day version exists." } },
                    { "@type": "Question", "name": "What's typically included?", "acceptedAnswer": { "@type": "Answer", "text": "Vardzia cave monastery, Rabati Castle, and Borjomi park." } }
                ] },
            };

        case "best-georgian-cooking-class-tbilisi":
            return {
                title: "Which Is the Best Georgian Cooking Class in Tbilisi?",
                seoTitle: "Best Georgian Cooking Class Tbilisi 2026 | Honest Comparison",
                description: "Compare real Georgian cooking classes in Tbilisi — from a $38 khinkali and khachapuri class to intimate family classes with wine and a feast.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/c92674e9217ad67e.jpeg",
                sections: [
                    {
                        title: "The Short Answer",
                        content: "Nearly every Georgian cooking class centers on khinkali (dumplings) and khachapuri (cheese bread), Georgia's two signature dishes — the differences come down to group size, whether wine is included, and if it's a casual class or a more intimate family setting.",
                        tourCard: { slug: "tbilisi-georgian-cooking-class-with-khinkali-and", title: "Tbilisi: Georgian Cooking Class with Khinkali and Khachapuri", description: "The standard Georgian cooking class covering both signature dishes.", price: "From $38", duration: "2.5 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/c92674e9217ad67e.jpeg" },
                    },
                    {
                        title: "Cheapest: Standard Khinkali & Khachapuri Class",
                        content: "At $38, this covers both signature dishes at the lowest price among the classes here.",
                        tourCard: { slug: "tbilisi-georgian-cooking-class-with-khinkali-and", title: "Tbilisi: Georgian Cooking Class with Khinkali and Khachapuri", description: "The budget-friendly standard cooking class.", price: "From $38", duration: "2.5 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/c92674e9217ad67e.jpeg" },
                    },
                    {
                        title: "Best for a Certificate: Khinkali & Khachapuri Class with Certificate",
                        content: "This version adds a completion certificate to the standard class, a nice touch if you want a keepsake from the experience.",
                        tourCard: { slug: "tbilisi-khinkali-khachapuri-cooking-class-with", title: "Tbilisi: Khinkali &Khachapuri Cooking Class with Certificate", description: "The standard class plus a completion certificate.", price: "From $95", duration: "3 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/3527b53a61771baafc46f6ef9ff7ca80c5db0f516169a518444bf9e4d700fe81.jpg" },
                    },
                    {
                        title: "Best for Intimacy: Family Cooking Class with Wine & Feast",
                        content: "Run in a smaller, more personal family setting rather than a larger class, this version pairs the cooking with wine and a full feast afterward.",
                        tourCard: { slug: "tbilisi-intimate-family-cooking-class-with-wine", title: "Tbilisi: Intimate Family Cooking Class with Wine & Feast", description: "A small-group family cooking class with wine and a feast.", price: "From $57", duration: "2 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/640fa629bf4dd72393909528ef14c09373de20cbee832108bc869baf17ba664a.png" },
                    },
                    {
                        title: "Practical Tips",
                        content: "Khinkali are meant to be eaten by hand, holding the twisted top knot and sipping the broth inside before eating the rest — most classes teach this technique as part of the experience, not just the cooking itself."
                    }
                ],
                faqs: [
                    { q: "What is the best Georgian cooking class in Tbilisi?", a: "The standard khinkali and khachapuri class suits most visitors; go for the family class if you want a more intimate setting." },
                    { q: "What dishes do Georgian cooking classes typically teach?", a: "Khinkali (dumplings) and khachapuri (cheese bread), Georgia's two signature dishes." },
                    { q: "Is wine included in Georgian cooking classes?", a: "Some are, particularly the family-style and feast-inclusive versions — check the specific class." },
                    { q: "How long does a Georgian cooking class take?", a: "Most run 2-3 hours." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "What is the best Georgian cooking class in Tbilisi?", "acceptedAnswer": { "@type": "Answer", "text": "The standard khinkali and khachapuri class suits most visitors." } },
                    { "@type": "Question", "name": "What dishes are typically taught?", "acceptedAnswer": { "@type": "Answer", "text": "Khinkali and khachapuri, Georgia's two signature dishes." } },
                    { "@type": "Question", "name": "Is wine included?", "acceptedAnswer": { "@type": "Answer", "text": "Some classes include it, particularly family-style versions." } },
                    { "@type": "Question", "name": "How long does a class take?", "acceptedAnswer": { "@type": "Answer", "text": "Most run 2-3 hours." } }
                ] },
            };

        case "best-mtatsminda-park-tour-tbilisi":
            return {
                title: "Which Is the Best Mtatsminda Park Tour in Tbilisi?",
                seoTitle: "Best Mtatsminda Park Tour Tbilisi 2026 | Honest Comparison",
                description: "Compare real Mtatsminda Park and funicular tours in Tbilisi — from a $38 cable car and park visit to a combined Turtle Lake and myths-and-legends tour.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/cd4b10241bababa94674a90e28a39f9f16b65c8989b1d5bc3ab373c3edca6302.jpeg",
                sections: [
                    {
                        title: "The Short Answer",
                        content: "Mtatsminda Park sits on a hilltop above Tbilisi, reached by funicular or cable car, with the city's best panoramic views and an amusement park at the top. A standard funicular-and-cable-car visit covers the basics at the lowest cost.",
                        tourCard: { slug: "tbilisi-mtatsminda-park-with-funicular-and-cable", title: "Tbilisi: Mtatsminda Park with Funicular and Cable Car Ride", description: "A standard visit to Mtatsminda Park using the funicular and cable car.", price: "From $38", duration: "3 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/cd4b10241bababa94674a90e28a39f9f16b65c8989b1d5bc3ab373c3edca6302.jpeg" },
                    },
                    {
                        title: "Cheapest: Funicular and Cable Car Ride",
                        content: "At $38, this covers the core Mtatsminda experience via both the funicular and cable car at the lowest price.",
                        tourCard: { slug: "tbilisi-mtatsminda-park-with-funicular-and-cable", title: "Tbilisi: Mtatsminda Park with Funicular and Cable Car Ride", description: "The budget-friendly standard Mtatsminda visit.", price: "From $38", duration: "3 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/cd4b10241bababa94674a90e28a39f9f16b65c8989b1d5bc3ab373c3edca6302.jpeg" },
                    },
                    {
                        title: "Best Combined with Turtle Lake",
                        content: "This pairs Mtatsminda Park with a stop at Turtle Lake, a reservoir popular with locals for walking and relaxing, giving a fuller half-day outing.",
                        tourCard: { slug: "tbilisi-turtle-lake-mtatsminda-park-funicular-tour", title: "Tbilisi: Turtle Lake, Mtatsminda Park, & Funicular Tour", description: "Mtatsminda Park combined with a visit to Turtle Lake.", price: "From $77", duration: "3.5 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/b1aa39760cda9c27e5f52248b57d2f60700d74c402b286403aee63661e1fbfb5.jpg" },
                    },
                    {
                        title: "Best for Storytelling: Mtatsminda Myths & Legends Tour",
                        content: "Rather than a straightforward sightseeing visit, this version frames the hill's history through local myths and legends, a good fit for travellers who want narrative alongside the views.",
                        tourCard: { slug: "tbilisi-mtatsminda-myths-legends-tour", title: "Tbilisi: Mtatsminda Myths & Legends Tour", description: "A storytelling-focused tour of Mtatsminda's history and legends.", price: "From $85", duration: "2 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/2e1cb2f0bfd912cc90612b60716965cf5b41949ca0d2822b05bb7ed97b41be28.jpeg" },
                    },
                    {
                        title: "Practical Tips",
                        content: "The cable car to Mtatsminda departs from near Rike Park and offers views over the Old Town on the way up — worth timing your visit for late afternoon if you want the best light for photos from the summit."
                    }
                ],
                faqs: [
                    { q: "What is the best Mtatsminda Park tour in Tbilisi?", a: "A standard funicular-and-cable-car visit suits most visitors; add Turtle Lake for a fuller outing." },
                    { q: "How do you get up to Mtatsminda Park?", a: "By funicular or cable car, both departing from different points near the city center." },
                    { q: "What's at the top of Mtatsminda Park?", a: "Panoramic views over Tbilisi and an amusement park." },
                    { q: "Can Mtatsminda Park be combined with other attractions?", a: "Yes, commonly with Turtle Lake." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "What is the best Mtatsminda Park tour?", "acceptedAnswer": { "@type": "Answer", "text": "A standard funicular-and-cable-car visit suits most visitors." } },
                    { "@type": "Question", "name": "How do you get up to Mtatsminda Park?", "acceptedAnswer": { "@type": "Answer", "text": "By funicular or cable car." } },
                    { "@type": "Question", "name": "What's at the top?", "acceptedAnswer": { "@type": "Answer", "text": "Panoramic views and an amusement park." } },
                    { "@type": "Question", "name": "Can it be combined with other attractions?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, commonly with Turtle Lake." } }
                ] },
            };

        case "best-rafting-tour-tbilisi":
            return {
                title: "Which Is the Best Rafting Tour from Tbilisi?",
                seoTitle: "Best Rafting Tour from Tbilisi 2026 | Honest Comparison",
                description: "Compare real rafting day trips from Tbilisi — from a budget Gudauri combo with horseback riding and paragliding to a dedicated Aragvi and Mtkvari river rafting tour.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/3f8ca5e10a9f5328786dc41f1c1e14d0d79a51e9a74e710d4d7114752721ebb3.jpg",
                sections: [
                    {
                        title: "The Short Answer",
                        content: "Rafting from Tbilisi usually happens on the Aragvi or Mtkvari rivers, often bundled with other Gudauri-area activities like horseback riding or paragliding rather than sold as a standalone trip.",
                        tourCard: { slug: "tbilisi-to-gudauri-tour-with-rafting-horseback", title: "Tbilisi to Gudauri Tour with Rafting Horseback & Paragliding", description: "A multi-activity Gudauri day trip including rafting, horseback riding, and paragliding.", price: "From $26", duration: "10 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/3f8ca5e10a9f5328786dc41f1c1e14d0d79a51e9a74e710d4d7114752721ebb3.jpg" },
                    },
                    {
                        title: "Cheapest: Gudauri Multi-Activity Day Trip",
                        content: "At $26, this is the lowest-priced way to try rafting, bundled with horseback riding and paragliding in one Gudauri day trip.",
                        tourCard: { slug: "tbilisi-to-gudauri-tour-with-rafting-horseback", title: "Tbilisi to Gudauri Tour with Rafting Horseback & Paragliding", description: "The budget-friendly multi-activity rafting day trip.", price: "From $26", duration: "10 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/3f8ca5e10a9f5328786dc41f1c1e14d0d79a51e9a74e710d4d7114752721ebb3.jpg" },
                    },
                    {
                        title: "Best Dedicated Rafting: Ananuri Fortress & Rafting",
                        content: "Rather than splitting time across several activities, this version pairs rafting with just one additional stop — Ananuri Fortress — for a more focused rafting-centered day.",
                        tourCard: { slug: "tbilisi-ananuri-fortress-rafting-with-hotel-pick", title: "Tbilisi: Ananuri Fortress & Rafting. With hotel pick-up.", description: "A rafting-focused day trip paired with Ananuri Fortress.", price: "From $350", duration: "5 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/68338b32395eb61e1de5c0c3e37c6f1030c867608426873ef09c1c0f1ec46c58.jpg" },
                    },
                    {
                        title: "Best for a Different River: Mtkvari River Rafting from Borjomi",
                        content: "This runs on the Mtkvari river near Borjomi rather than the Aragvi near Gudauri, a genuinely different stretch of water for travellers who've already done the Gudauri-area version.",
                        tourCard: { slug: "borjomi-mtkvari-river-rafting-with-guide-from", title: "Borjomi: Mtkvari River Rafting with Guide from Chobiskhevi", description: "Rafting on the Mtkvari river near Borjomi.", price: "From $189", duration: "1 hour", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/a21b1be98241e0142b7019744ecef90816f855ac18d464134e79a91254bf5572.jpg" },
                    },
                    {
                        title: "Practical Tips",
                        content: "Most rafting here is sold as part of a broader adventure day rather than a long technical rafting trip — if you want a longer, more serious rafting experience, ask operators directly about river conditions and trip length before booking."
                    }
                ],
                faqs: [
                    { q: "What is the best rafting tour from Tbilisi?", a: "The Gudauri multi-activity day trip suits budget travellers; the Ananuri Fortress combo suits those wanting a more rafting-focused day." },
                    { q: "Which rivers do Tbilisi rafting tours use?", a: "Most commonly the Aragvi near Gudauri, or the Mtkvari near Borjomi." },
                    { q: "Is rafting from Tbilisi suitable for beginners?", a: "Yes, most tours are bundled adventure days aimed at general travellers rather than serious rafting enthusiasts." },
                    { q: "What's the cheapest rafting option from Tbilisi?", a: "A multi-activity Gudauri day trip bundling rafting with horseback riding and paragliding." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "What is the best rafting tour from Tbilisi?", "acceptedAnswer": { "@type": "Answer", "text": "The Gudauri multi-activity day trip suits budget travellers." } },
                    { "@type": "Question", "name": "Which rivers are used?", "acceptedAnswer": { "@type": "Answer", "text": "Most commonly the Aragvi near Gudauri, or the Mtkvari near Borjomi." } },
                    { "@type": "Question", "name": "Is it suitable for beginners?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, most tours are aimed at general travellers." } },
                    { "@type": "Question", "name": "What's the cheapest option?", "acceptedAnswer": { "@type": "Answer", "text": "A multi-activity Gudauri day trip." } }
                ] },
            };

        case "best-air-balloon-ride-tbilisi":
            return {
                title: "Is a Tbilisi Air Balloon Ride Worth It?",
                seoTitle: "Tbilisi Air Balloon Ride 2026 | Honest Comparison",
                description: "Compare the two real air balloon options in Tbilisi — a skip-the-line standard ticket versus a VIP 4-in-1 combo with cable car, boat, and wine.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/172a118adccf2798e933113124a054277c725773565d87669d1455724aca7908.jpeg",
                sections: [
                    {
                        title: "The Short Answer",
                        content: "Tbilisi's air balloon rides are short tethered flights (not the hours-long free-flying balloon trips you may know from Cappadocia), giving an aerial view over the Old Town. The choice is mainly between a simple skip-the-line ticket or a VIP combo bundling in other activities.",
                        tourCard: { slug: "tbilisi-air-balloon-skip-the-line-ticket", title: "Tbilisi: Air Balloon Skip The Line Ticket", description: "A standard skip-the-line ticket for Tbilisi's tethered air balloon.", price: "From $59", duration: "10 minutes", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/172a118adccf2798e933113124a054277c725773565d87669d1455724aca7908.jpeg" },
                    },
                    {
                        title: "Cheapest: VIP 4-in-1 Combo",
                        content: "At $17, this combo ticket bundles the balloon ride with a cable car trip, a boat ride, and wine, actually undercutting the standalone balloon ticket.",
                        tourCard: { slug: "tbilisi-vip-4-in-1-balloon-cable-car-boat", title: "Tbilisi: VIP 4-in-1 Balloon, Cable Car, Boat & Wine Tour", description: "A combo ticket bundling the balloon ride with cable car, boat, and wine.", price: "From $17", duration: "25 minutes", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/9a31cb54e435bde0253b3cba0765bf8931892cc3956e989b526dd1854478ed3e.jpg" },
                    },
                    {
                        title: "Practical Tips",
                        content: "These are tethered balloons that rise and descend in place rather than drifting over the landscape, so set expectations accordingly if you're picturing a Cappadocia-style flight. Weather and wind can cancel flights on short notice."
                    }
                ],
                faqs: [
                    { q: "Is a Tbilisi air balloon ride worth it?", a: "Yes for a quick aerial view of the Old Town, but it's a short tethered ride, not a long free-flying trip." },
                    { q: "What's the cheapest Tbilisi balloon option?", a: "The VIP 4-in-1 combo, which also includes a cable car, boat ride, and wine." },
                    { q: "How long does the Tbilisi balloon ride last?", a: "Around 10-25 minutes, as it's a tethered ride rather than a long flight." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "Is a Tbilisi air balloon ride worth it?", "acceptedAnswer": { "@type": "Answer", "text": "Yes for a quick aerial view, but it's a short tethered ride." } },
                    { "@type": "Question", "name": "What's the cheapest option?", "acceptedAnswer": { "@type": "Answer", "text": "The VIP 4-in-1 combo." } },
                    { "@type": "Question", "name": "How long does it last?", "acceptedAnswer": { "@type": "Answer", "text": "Around 10-25 minutes." } }
                ] },
            };

        case "best-tusheti-tour-tbilisi":
            return {
                title: "Which Is the Best Tusheti Tour from Tbilisi?",
                seoTitle: "Best Tusheti Tour from Tbilisi 2026 | Honest Comparison",
                description: "Compare real multi-day Tusheti tours from Tbilisi — a 3-day 4x4 jeep tour, a 3-day jeep adventure with meals, and a 5-day helicopter all-inclusive option.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/a7cc6c2dad72273aa3723672889a33787a55812fbcbb4d67e4fa9c3841c39b9b.jpg",
                sections: [
                    {
                        title: "The Short Answer",
                        content: "Tusheti is one of Georgia's most remote mountain regions, reachable only by 4x4 over the Abano Pass (one of the world's most dangerous roads) or by helicopter. A 3-day 4x4 jeep tour with a guesthouse stay is the standard way most travellers do it.",
                        tourCard: { slug: "tbilisi-3-day-tusheti-4x4-jeep-tour-with", title: "Tbilisi: 3-Day Tusheti 4x4 Jeep Tour with Guesthouse Stay", description: "A standard 3-day 4x4 trip to Tusheti with a guesthouse stay.", price: "From $1560", duration: "3 days", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/a7cc6c2dad72273aa3723672889a33787a55812fbcbb4d67e4fa9c3841c39b9b.jpg" },
                    },
                    {
                        title: "Cheapest: 3-Day 4x4 Jeep Tour with Guesthouse",
                        content: "At $1,560, this is the lowest-priced way to reach Tusheti, via 4x4 over the Abano Pass with local guesthouse accommodation.",
                        tourCard: { slug: "tbilisi-3-day-tusheti-4x4-jeep-tour-with", title: "Tbilisi: 3-Day Tusheti 4x4 Jeep Tour with Guesthouse Stay", description: "The lowest-priced way to reach Tusheti by 4x4.", price: "From $1560", duration: "3 days", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/a7cc6c2dad72273aa3723672889a33787a55812fbcbb4d67e4fa9c3841c39b9b.jpg" },
                    },
                    {
                        title: "Best All-Inclusive Jeep Option: 3-Day Jeep Adventure with Meals",
                        content: "This version bundles all meals into the 3-day jeep itinerary, simplifying logistics in a region where food options are limited.",
                        tourCard: { slug: "tbilisi-3-day-tusheti-jeep-adventure-with-meals", title: "Tbilisi: 3-Day Tusheti Jeep Adventure with Meals", description: "A 3-day Tusheti jeep tour with all meals included.", price: "From $2039", duration: "3 days", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/b0b1c483371bc83cf986852768ae4a7756b54b6d05b80f9e565075e6909796a7.jpeg" },
                    },
                    {
                        title: "Best for Skipping the Dangerous Road: 5-Day Helicopter Tour",
                        content: "Rather than driving the notoriously risky Abano Pass, this version flies in by helicopter, trading the road-trip adventure for a safer, more comfortable (and longer) stay.",
                        tourCard: { slug: "tbilisi-5-day-tusheti-by-helicopter-with-all", title: "Tbilisi: 5-Day Tusheti by Helicopter with All-Inclusive Stay", description: "A 5-day all-inclusive Tusheti trip reached by helicopter instead of the Abano Pass road.", price: "From $2195", duration: "5 days", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/b0b1c483371bc83cf986852768ae4a7756b54b6d05b80f9e565075e6909796a7.jpeg" },
                    },
                    {
                        title: "Practical Tips",
                        content: "The Abano Pass road to Tusheti is only open roughly June through September due to snow, and is considered one of the most dangerous roads in the world — if that's a concern, the helicopter option avoids it entirely."
                    }
                ],
                faqs: [
                    { q: "What is the best Tusheti tour from Tbilisi?", a: "A 3-day 4x4 jeep tour suits most adventurous travellers; the helicopter option avoids the dangerous Abano Pass road entirely." },
                    { q: "When is Tusheti accessible by road?", a: "Roughly June through September, when the Abano Pass is open and clear of snow." },
                    { q: "Is the road to Tusheti dangerous?", a: "Yes, the Abano Pass is considered one of the most dangerous roads in the world." },
                    { q: "How long does a Tusheti trip take?", a: "Most jeep tours run 3 days; the helicopter option runs 5 days all-inclusive." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "What is the best Tusheti tour from Tbilisi?", "acceptedAnswer": { "@type": "Answer", "text": "A 3-day 4x4 jeep tour suits most adventurous travellers." } },
                    { "@type": "Question", "name": "When is Tusheti accessible by road?", "acceptedAnswer": { "@type": "Answer", "text": "Roughly June through September." } },
                    { "@type": "Question", "name": "Is the road dangerous?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, the Abano Pass is one of the most dangerous roads in the world." } },
                    { "@type": "Question", "name": "How long does a trip take?", "acceptedAnswer": { "@type": "Answer", "text": "Most jeep tours run 3 days." } }
                ] },
            };

        case "best-sulfur-bath-experience-tbilisi":
            return {
                title: "Which Is the Best Sulfur Bath Experience in Tbilisi?",
                seoTitle: "Best Sulfur Bath Experience Tbilisi 2026 | Honest Comparison",
                description: "Compare real private sulfur bath experiences in Tbilisi — from a $21 romantic bath with wine to a $203 iconic private bathhouse experience with pickup.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/5842a84adfd8dd144bd8199c3e02725308bdc33e0cd2076eff906762fa50d799.jpg",
                sections: [
                    {
                        title: "The Short Answer",
                        content: "Tbilisi's natural sulfur baths in the Abanotubani district are the city's most distinctive wellness experience, and both real options here are private rather than shared sessions — the difference is price tier and whether pickup is included.",
                        tourCard: { slug: "tbilisi-private-romantic-sulfur-bath-experience", title: "Tbilisi: Private Romantic Sulfur Bath Experience with Wine", description: "A private sulfur bath experience with wine included.", price: "From $21", duration: "1 hour", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/6af07fe188c5930cbd5022b11ed7e415e0963a6a65ff6f52f38e6b4193792a61.png" },
                    },
                    {
                        title: "Cheapest: Romantic Sulfur Bath with Wine",
                        content: "At $21, this is the lower-priced private sulfur bath option, including wine for a romantic touch.",
                        tourCard: { slug: "tbilisi-private-romantic-sulfur-bath-experience", title: "Tbilisi: Private Romantic Sulfur Bath Experience with Wine", description: "The budget-friendly private sulfur bath with wine.", price: "From $21", duration: "1 hour", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/6af07fe188c5930cbd5022b11ed7e415e0963a6a65ff6f52f38e6b4193792a61.png" },
                    },
                    {
                        title: "Best with Convenience: Iconic Private Experience with Pickup",
                        content: "This higher-tier version includes hotel pickup, removing the hassle of getting to Abanotubani yourself.",
                        tourCard: { slug: "tbilisi-iconic-private-sulfur-bath-experience", title: "Tbilisi: Iconic Private Sulfur Bath Experience with Pickup", description: "A private sulfur bath experience including hotel pickup.", price: "From $203", duration: "1 hour", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/5842a84adfd8dd144bd8199c3e02725308bdc33e0cd2076eff906762fa50d799.jpg" },
                    },
                    {
                        title: "Practical Tips",
                        content: "Tbilisi literally means 'warm place' in Old Georgian, named for these naturally heated sulfur springs — the domed bathhouses in Abanotubani have been in continuous use for centuries. Private sessions mean no need to worry about bathing-suit etiquette in a shared space."
                    }
                ],
                faqs: [
                    { q: "What is the best sulfur bath experience in Tbilisi?", a: "A private romantic experience with wine suits most visitors; add pickup if convenience matters more than price." },
                    { q: "Why is Tbilisi known for sulfur baths?", a: "The city's name means 'warm place,' referring to its naturally heated sulfur springs used for centuries." },
                    { q: "Are Tbilisi sulfur baths private or shared?", a: "Both real options here are private sessions rather than shared bathhouse sessions." },
                    { q: "How long does a sulfur bath experience last?", a: "Typically around 1 hour." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "What is the best sulfur bath experience in Tbilisi?", "acceptedAnswer": { "@type": "Answer", "text": "A private romantic experience with wine suits most visitors." } },
                    { "@type": "Question", "name": "Why is Tbilisi known for sulfur baths?", "acceptedAnswer": { "@type": "Answer", "text": "The city's name means 'warm place,' referring to its sulfur springs." } },
                    { "@type": "Question", "name": "Are the baths private or shared?", "acceptedAnswer": { "@type": "Answer", "text": "Both options here are private sessions." } },
                    { "@type": "Question", "name": "How long does it last?", "acceptedAnswer": { "@type": "Answer", "text": "Typically around 1 hour." } }
                ] },
            };

        case "best-bike-tour-tbilisi":
            return {
                title: "Is a Tbilisi Bike Tour Worth It?",
                seoTitle: "Tbilisi Bike Tour 2026 | Honest Review",
                description: "An honest look at Tbilisi's private bike tour covering Peace Bridge, Old Town, and Sameba Cathedral.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/410a76a24b1941c3765acad48657d108febda881596dbd34ba0e032797c96ae5.png",
                sections: [
                    {
                        title: "The Short Answer",
                        content: "This private bike tour covers Tbilisi's Peace Bridge, Old Town streets, and Sameba Cathedral at a cyclist's pace — a genuinely different way to see the city compared to the standard walking tours.",
                        tourCard: { slug: "tbilisi-private-bike-tour-peace-bridge-old-town", title: "Tbilisi Private Bike Tour: Peace Bridge, Old Town & Sameba", description: "A private bike tour covering Peace Bridge, Old Town, and Sameba Cathedral.", price: "From $104", duration: "3 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/410a76a24b1941c3765acad48657d108febda881596dbd34ba0e032797c96ae5.png" },
                    },
                    {
                        title: "Practical Tips",
                        content: "Tbilisi's Old Town has cobblestone streets and some steep sections, so this suits reasonably fit, comfortable cyclists rather than complete beginners."
                    }
                ],
                faqs: [
                    { q: "Is a Tbilisi bike tour worth it?", a: "Yes for a different pace and perspective than walking, especially for covering the Peace Bridge, Old Town, and Sameba Cathedral in one outing." },
                    { q: "Is Tbilisi's Old Town suitable for cycling?", a: "It has cobblestones and some steep sections, so reasonable fitness and comfort on a bike is recommended." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "Is a Tbilisi bike tour worth it?", "acceptedAnswer": { "@type": "Answer", "text": "Yes for a different pace and perspective than walking." } },
                    { "@type": "Question", "name": "Is Old Town suitable for cycling?", "acceptedAnswer": { "@type": "Answer", "text": "It has cobblestones and steep sections, so reasonable fitness helps." } }
                ] },
            };

        case "tbilisi-travel-guide-2026":
            return {
                title: "Tbilisi Travel Guide 2026",
                description: "Georgia's capital mixes Soviet-era architecture, a dramatically renovated Old Town, and some of the Caucasus's best wine and food — here's what first-timers need to know.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/d02ff5fc955ab5d43256cad8799167bb2592264478aa8713ada7a86245489a30.jpg",
                sections: [
                    { title: "Why Visit Tbilisi", content: "Tbilisi is compact enough to explore mostly on foot, with its Old Town, sulfur bathhouses, and Narikala Fortress cable car all within walking distance of each other. It's also the launch point for Georgia's biggest day trips — Kazbegi's mountains and Kakheti's wine region." },
                    { title: "Getting Around", content: "The metro covers the main areas cheaply, and Bolt (ride-hailing) is widely used for anything further out. Most day trips to Kazbegi, Kakheti, or Mtskheta are easiest booked as organized tours rather than self-driving." }
                ],
                faqs: [
                    { q: "Is Tbilisi worth visiting?", a: "Yes, for its Old Town, bathhouses, food and wine scene, and as a base for Caucasus day trips." },
                    { q: "How do I get around Tbilisi?", a: "Metro for central areas, Bolt ride-hailing for everything else." }
                ],
            };

        case "best-time-to-visit-tbilisi":
            return {
                title: "Best Time to Visit Tbilisi",
                description: "Tbilisi has four real seasons, unlike much of the rest of this project's typical tropical destinations — timing matters more here.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/d02ff5fc955ab5d43256cad8799167bb2592264478aa8713ada7a86245489a30.jpg",
                sections: [
                    { title: "Seasonal Overview", content: "Spring (April-June) and autumn (September-October) are the best balance of mild weather and fewer crowds. Summer (July-August) is hot in the city but is harvest season in Kakheti, good timing for wine tours. Winter can close the Georgian Military Road to Kazbegi on short notice due to snow." }
                ],
                faqs: [
                    { q: "What is the best time to visit Tbilisi?", a: "Spring or autumn for the best weather balance; summer specifically for Kakheti's wine harvest." },
                    { q: "Can Kazbegi be visited in winter?", a: "Sometimes, but snow can close the Georgian Military Road on short notice — spring through autumn is more reliable." }
                ],
            };

        case "tbilisi-1-day-itinerary":
            return {
                title: "Tbilisi 1-Day Itinerary",
                description: "A realistic one-day plan for Tbilisi if you don't have time for a Kazbegi or Kakheti day trip.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/d02ff5fc955ab5d43256cad8799167bb2592264478aa8713ada7a86245489a30.jpg",
                sections: [
                    { title: "Morning", content: "Start in the Old Town, then take the cable car up to Narikala Fortress for views over the city." },
                    { title: "Afternoon", content: "Visit a traditional sulfur bathhouse in the Abanotubani district, then wander the Peace Bridge and Rike Park area." },
                    { title: "Evening", content: "Finish with a Georgian dinner — khachapuri and a glass of qvevri wine is the classic way to end a Tbilisi day." }
                ],
                faqs: [
                    { q: "Can Tbilisi be seen in one day?", a: "The Old Town and central sights, yes — but Kazbegi and Kakheti need separate full days of their own." },
                    { q: "What's a must-do in Tbilisi in one day?", a: "The Old Town, Narikala Fortress cable car, and a sulfur bathhouse experience." }
                ],
            };

        case "georgia-visa-guide-for-tourists":
            return {
                title: "Georgia Visa Guide for Tourists (Tbilisi)",
                description: "Visa requirements for visiting Tbilisi and Georgia.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/d02ff5fc955ab5d43256cad8799167bb2592264478aa8713ada7a86245489a30.jpg",
                sections: [
                    { title: "Visa Requirements", content: "Georgia has one of the more open visa policies in the region — many nationalities get visa-free entry for an extended period. Check Georgia's official immigration requirements for your specific nationality before travel, since rules vary and change." }
                ],
                faqs: [
                    { q: "Do I need a visa to visit Tbilisi/Georgia?", a: "Many nationalities get visa-free entry; verify current requirements for your passport before travel." }
                ],
            };

        default:
            return null;
    }
}

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

        default:
            return null;
    }
}

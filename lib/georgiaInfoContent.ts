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

        case "best-walking-tour-batumi":
            return {
                title: "Which Is the Best Walking Tour in Batumi?",
                seoTitle: "Best Batumi Walking Tour 2026 | Honest Comparison",
                description: "Compare real Batumi walking tours — from a morning or evening city walk to a multicultural history tour covering local life.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/72eb9e37462ec6a4006bd9575cd8207ea10a4d05f76b184d2ff02ad903e9b2e3.jpg",
                sections: [
                    { title: "The Short Answer", content: "Batumi's seaside boulevard and old town are compact enough for a focused walking tour, and the main choice is timing (morning vs. evening) or going deeper into the city's multicultural history.", tourCard: { slug: "batumi-morning-walking-tour", title: "Batumi: Morning Walking Tour", description: "A morning walking tour of Batumi's seaside and old town.", price: "From $147", duration: "4 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/c0ad68f8634ebed057a15eba3974a4929e80d2674861ec502029b756b3f1d452.jpg" } },
                    { title: "Best in the Evening: Evening Walking Tour", content: "This covers the same ground as the morning tour but timed for evening light and the boulevard's livelier after-dark atmosphere.", tourCard: { slug: "batumi-evening-walking-tour", title: "Batumi: Evening Walking Tour", description: "An evening walking tour of Batumi.", price: "From $147", duration: "4 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/72eb9e37462ec6a4006bd9575cd8207ea10a4d05f76b184d2ff02ad903e9b2e3.jpg" } },
                    { title: "Best for Depth: Multicultural Walking Tour", content: "This goes deeper into Batumi's multicultural history and local life rather than just the main sights, good for travellers who want more context.", tourCard: { slug: "batumi-multicultural-walking-tour-history-local", title: "Batumi: Multicultural walking tour, history & local life", description: "A history-focused walking tour covering Batumi's multicultural past.", price: "From $38", duration: "2.5 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/64d387cfe45f74757cbd0068805d64bce6f1918184c08413a6955b07ffba542d.jpg" } },
                    { title: "Practical Tips", content: "Batumi's boulevard is at its liveliest in the evening, with fountains, street performers, and the Ferris wheel lit up — worth the evening option if atmosphere matters more to you than daylight photos." }
                ],
                faqs: [
                    { q: "What is the best walking tour in Batumi?", a: "Morning for daylight sightseeing, evening for atmosphere, or the multicultural tour for deeper history." },
                    { q: "Is Batumi's boulevard worth seeing at night?", a: "Yes, it's at its liveliest in the evening with lit fountains and street performers." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "What is the best walking tour in Batumi?", "acceptedAnswer": { "@type": "Answer", "text": "Morning for daylight, evening for atmosphere." } },
                    { "@type": "Question", "name": "Is the boulevard worth seeing at night?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, it's liveliest in the evening." } }
                ] },
            };

        case "best-martvili-canyon-tour-batumi":
            return {
                title: "Which Is the Best Martvili Canyon & Prometheus Cave Tour from Batumi?",
                seoTitle: "Best Martvili Canyon Tour from Batumi 2026 | Comparison",
                description: "Compare real Martvili Canyon and Prometheus Cave day trips from Batumi.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/647469e87641df8c91905e58463295834ccc374c5054f0d49f86f046e3d6a552.jpg",
                sections: [
                    { title: "The Short Answer", content: "Martvili Canyon's turquoise waters and Prometheus Cave's underground formations are almost always paired in one long day trip from Batumi, since they're in the same general direction.", tourCard: { slug: "batumi-martvili-canyon-prometheus-cave-day-trip", title: "Batumi: Martvili Canyon & Prometheus Cave Day Trip", description: "A day trip covering Martvili Canyon and Prometheus Cave from Batumi.", price: "From $80", duration: "10 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/647469e87641df8c91905e58463295834ccc374c5054f0d49f86f046e3d6a552.jpg" } },
                    { title: "Alternative Operator: Martvili Canyon, Prometheus Cave Guided Tour", content: "A similar combo from a different operator, worth comparing on timing and inclusions if the first option's schedule doesn't fit.", tourCard: { slug: "from-batumi-martvili-canyon-prometheous-cave", title: "From Batumi: Martvili Canyon, Prometheous Cave Guided tour", description: "An alternative guided combo of Martvili Canyon and Prometheus Cave.", price: "From $90", duration: "10 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/647469e87641df8c91905e58463295834ccc374c5054f0d49f86f046e3d6a552.jpg" } },
                    { title: "Practical Tips", content: "This is a genuinely long day (10 hours) given the distance from Batumi — bring a swimsuit if you want to get in Martvili's boat-accessible canyon pools, and a light jacket for the noticeably cooler cave interior." }
                ],
                faqs: [
                    { q: "What is the best Martvili Canyon tour from Batumi?", a: "Either standard combo tour works; compare timing and inclusions between operators." },
                    { q: "How long is the trip from Batumi to Martvili Canyon?", a: "A full day, around 10 hours round trip including both the canyon and cave." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "What is the best Martvili Canyon tour from Batumi?", "acceptedAnswer": { "@type": "Answer", "text": "Either standard combo tour works." } },
                    { "@type": "Question", "name": "How long is the trip?", "acceptedAnswer": { "@type": "Answer", "text": "A full day, around 10 hours." } }
                ] },
            };

        case "best-wine-tasting-tour-batumi":
            return {
                title: "Which Is the Best Wine Tasting Tour in Batumi?",
                seoTitle: "Best Batumi Wine Tasting Tour 2026 | Comparison",
                description: "Compare real wine tasting experiences in Batumi — from a local cellar tasting to a mountainous Adjara vineyard tour with lunch.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/055bc10b9f98e02007ec0e312abd2899496add84edd97348f4f277fdf2abf9c0.jpg",
                sections: [
                    { title: "The Short Answer", content: "Batumi's wine tastings range from a quick local cellar visit in the city to a full vineyard day trip into the mountainous Adjara region.", tourCard: { slug: "georgian-wine-tasting-at-local-cellar-in-batumi", title: "Georgian Wine Tasting at Local Cellar in Batumi", description: "A local cellar wine tasting in Batumi.", price: "From $74", duration: "1 hour", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/c4f902655784c89e.jpeg" } },
                    { title: "Best in the Mountains: Wine Tasting in Mountainous Adjara", content: "This gets you out of the city into Adjara's mountains for the tasting, pairing wine with scenery rather than staying in a city cellar.", tourCard: { slug: "best-from-batumi-wine-tasting-in-mountainous", title: "Best From Batumi: Wine Tasting in Mountainous Adjara", description: "A mountain-region wine tasting experience from Batumi.", price: "From $88", duration: "1.5 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/d668bb02763f57da22556a04820df3eac100efc9e8566bb25c8e341d805dc7d5.png" } },
                    { title: "Best Full Experience: Vineyard Tour with Lunch", content: "This extends the tasting into a full vineyard visit with lunch included, the most complete wine-focused day from Batumi.", tourCard: { slug: "batumi-vineyard-tour-with-wine-tasting-and-lunch", title: "Batumi: Vineyard Tour with Wine Tasting and Lunch", description: "A full vineyard day trip with wine tasting and lunch.", price: "From $163", duration: "5 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/055bc10b9f98e02007ec0e312abd2899496add84edd97348f4f277fdf2abf9c0.jpg" } },
                    { title: "Practical Tips", content: "Adjara's mountain wine region is distinct from Kakheti (Georgia's main wine region near Tbilisi) — if you're doing both cities, these are genuinely different tastings, not a repeat." }
                ],
                faqs: [
                    { q: "What is the best wine tasting tour in Batumi?", a: "A local cellar tasting for a quick city option, or the vineyard tour with lunch for a fuller day." },
                    { q: "Is Batumi's wine region the same as Kakheti near Tbilisi?", a: "No, Adjara's mountain wine region is distinct from Kakheti — different tastings if visiting both." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "What is the best wine tasting tour in Batumi?", "acceptedAnswer": { "@type": "Answer", "text": "A local cellar tasting, or the vineyard tour with lunch for more." } },
                    { "@type": "Question", "name": "Is it the same wine region as Kakheti?", "acceptedAnswer": { "@type": "Answer", "text": "No, Adjara is a distinct mountain wine region." } }
                ] },
            };

        case "is-batumi-jet-ski-worth-it":
            return {
                title: "Is the Jet Ski, Boat & Parasailing Combo in Batumi Worth It?",
                seoTitle: "Batumi Jet Ski Parasailing Tour 2026 | Honest Review",
                description: "An honest look at Batumi's jet ski, boat ride, and parasailing combo experience on the Black Sea.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/2cb06fe188e6a85be79153ef01a03552b718c123dbccd51a1a64c53bc40769ea.jpg",
                sections: [
                    { title: "The Short Answer", content: "This combo packs jet skiing, a boat ride, and parasailing into one Black Sea outing — genuinely good value for trying three water activities rather than booking each separately.", tourCard: { slug: "batumi-jet-ski-boat-ride-and-parasailing", title: "Batumi: Jet Ski, Boat Ride, and Parasailing Experience", description: "A combo of jet skiing, boat riding, and parasailing in Batumi.", price: "From $13", duration: "3 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/2cb06fe188e6a85be79153ef01a03552b718c123dbccd51a1a64c53bc40769ea.jpg" } },
                    { title: "Practical Tips", content: "Summer (June-September) is the main season for Black Sea water activities in Batumi — outside that window, operators may run limited schedules or close entirely." }
                ],
                faqs: [
                    { q: "Is the Batumi jet ski/parasailing combo worth it?", a: "Yes, good value for trying three water activities in one outing." },
                    { q: "When can I do water sports in Batumi?", a: "Mainly summer (June-September); outside that, availability is limited." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "Is the jet ski/parasailing combo worth it?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, good value for three activities in one outing." } }
                ] },
            };

        case "batumi-travel-guide-2026":
            return {
                title: "Batumi Travel Guide 2026",
                description: "What visitors need to know about Batumi, Georgia's Black Sea resort city.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/72eb9e37462ec6a4006bd9575cd8207ea10a4d05f76b184d2ff02ad903e9b2e3.jpg",
                sections: [
                    { title: "Why Visit", content: "Batumi is Georgia's main Black Sea resort city, known for its seaside boulevard, distinctive modern architecture alongside an old town, and easy access to the Adjara mountains and Martvili Canyon." }
                ],
                faqs: [
                    { q: "Is Batumi worth visiting?", a: "Yes, for its seaside boulevard, architecture, and access to the Adjara mountains and canyons." }
                ],
            };

        case "best-time-to-visit-batumi":
            return {
                title: "Best Time to Visit Batumi",
                description: "Batumi's Black Sea coastal climate differs from Tbilisi's — timing matters for beach and water activities.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/72eb9e37462ec6a4006bd9575cd8207ea10a4d05f76b184d2ff02ad903e9b2e3.jpg",
                sections: [
                    { title: "Weather Patterns", content: "June to September is beach and water-sports season. Batumi is notably wetter than Tbilisi year-round given its coastal position, so pack for rain even in summer." }
                ],
                faqs: [
                    { q: "What is the best time to visit Batumi?", a: "June to September for beach weather and water sports." }
                ],
            };

        case "best-old-town-tour-kutaisi":
            return {
                title: "Which Is the Best Walking Tour in Kutaisi?",
                seoTitle: "Best Kutaisi Walking Tour 2026 | Honest Comparison",
                description: "Compare real Kutaisi walking tours — from a 3000-years-of-history tour to a culture, history, and local market walk.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/3fdfc9c079cba57bfa6bafce2d27798a681ba33c15f94894ac2f4f676ac8415d.jpg",
                sections: [
                    { title: "The Short Answer", content: "Kutaisi, one of the oldest continuously inhabited cities in the world, has walking tours that lean either purely historical or add a local market/culture angle.", tourCard: { slug: "kutaisi-walking-tour-3000-years-of-history", title: "Kutaisi Walking Tour – 3000 Years of History", description: "A history-focused walking tour of one of the world's oldest cities.", price: "From $17", duration: "2 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/3fdfc9c079cba57bfa6bafce2d27798a681ba33c15f94894ac2f4f676ac8415d.jpg" } },
                    { title: "Best with Local Market: Culture, History & Local Market Tour", content: "This adds a stop at the local market to the historical walk, giving a glimpse of everyday Kutaisi life alongside the history.", tourCard: { slug: "kutaisi-walking-tour-culture-history-local-market", title: "Kutaisi Walking Tour: Culture, History & Local Market", description: "A walking tour combining history with a local market visit.", price: "From $15", duration: "2 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/66cb752f754ca0819fcf7a967e2b2050153dfad00953236570826655a7b712a9.jpg" } },
                    { title: "Practical Tips", content: "Kutaisi was Georgia's capital in antiquity and under several medieval kingdoms — a guide adds real value here since the city's layered history isn't always obvious just from walking past the buildings." }
                ],
                faqs: [
                    { q: "What is the best walking tour in Kutaisi?", a: "Either tour works well; add the market version if you want a look at daily local life too." },
                    { q: "Is Kutaisi one of the world's oldest cities?", a: "Yes, it's among the oldest continuously inhabited cities, and was Georgia's capital in antiquity and under several medieval kingdoms." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "What is the best walking tour in Kutaisi?", "acceptedAnswer": { "@type": "Answer", "text": "Either works well; add the market version for local life." } },
                    { "@type": "Question", "name": "Is Kutaisi one of the oldest cities?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, among the oldest continuously inhabited cities." } }
                ] },
            };

        case "best-monasteries-tour-kutaisi":
            return {
                title: "Which Is the Best Monasteries Tour from Kutaisi?",
                seoTitle: "Best Kutaisi Monasteries Tour 2026 | Comparison",
                description: "Compare real Gelati, Motsameta, and Bagrati monastery tours from Kutaisi — both UNESCO-listed sites in one trip.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/6f6a114ca88e8c894c20dd66f378d7ed1af9e7edfef483352b19f8cac39ba07d.jpg",
                sections: [
                    { title: "The Short Answer", content: "Gelati Monastery (UNESCO-listed) and Motsameta Monastery are almost always visited together given their proximity, and most tours also add Bagrati Cathedral in the city itself.", tourCard: { slug: "bagrati-gelati-motsameta-monasteries-tour", title: "Bagrati, Gelati & Motsameta monasteries tour", description: "A tour covering Bagrati Cathedral and the Gelati and Motsameta monasteries.", price: "From $33", duration: "3 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/5169be8c47f98a603248c0bd5958ad6c699457cf79bacec4f1b1a14471be1530.jpg" } },
                    { title: "Alternative Route: Gelati, Motsameta & Bagrati Cathedral", content: "A similar combo from a different operator, worth comparing on exact stop order and inclusions.", tourCard: { slug: "monasteries-gelati-motsameta-annunciation-and", title: "Monasteries: Gelati, Motsameta, Annunciation, and Bagrati", description: "An alternative monastery combo tour adding Annunciation Cathedral.", price: "From $26", duration: "4 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/6f6a114ca88e8c894c20dd66f378d7ed1af9e7edfef483352b19f8cac39ba07d.jpg" } },
                    { title: "Practical Tips", content: "Gelati Monastery's 12th-century frescoes are a highlight — ask your guide which chambers have the best-preserved paintings, since not all areas are equally well lit or restored." }
                ],
                faqs: [
                    { q: "What is the best monasteries tour from Kutaisi?", a: "Either combo covering Gelati, Motsameta, and Bagrati works well — compare exact stops and timing." },
                    { q: "Is Gelati Monastery a UNESCO site?", a: "Yes, UNESCO-listed, known for its 12th-century frescoes." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "What is the best monasteries tour from Kutaisi?", "acceptedAnswer": { "@type": "Answer", "text": "Either combo covering Gelati, Motsameta, and Bagrati works well." } },
                    { "@type": "Question", "name": "Is Gelati a UNESCO site?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, known for its 12th-century frescoes." } }
                ] },
            };

        case "best-prometheus-cave-tour-kutaisi":
            return {
                title: "Which Is the Best Prometheus Cave & Martvili Canyon Tour from Kutaisi?",
                seoTitle: "Best Prometheus Cave Tour Kutaisi 2026 | Comparison",
                description: "Compare real Prometheus Cave and Martvili Canyon day trips from Kutaisi, the closest major city to both.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/214dbab852b0e4fdfa168a1902a35ab5a46c715d82b48ccef0004d2ae69ceb38.jpeg",
                sections: [
                    { title: "The Short Answer", content: "Kutaisi is the closest major city to both Prometheus Cave and Martvili Canyon, making these day trips significantly shorter than doing them from Tbilisi or Batumi.", tourCard: { slug: "kutaisi-prometheus-cave-martvili-canyon-guided", title: "Kutaisi: Prometheus Cave & Martvili Canyon Guided Tours", description: "A guided day trip to Prometheus Cave and Martvili Canyon from Kutaisi.", price: "From $39", duration: "6 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/214dbab852b0e4fdfa168a1902a35ab5a46c715d82b48ccef0004d2ae69ceb38.jpeg" } },
                    { title: "Best Group Option: Group Tour from Kutaisi", content: "A group-format version of the same combo, typically at a lower per-person price than a private tour.", tourCard: { slug: "prometheus-cave-martvili-canyon-group-tour-from", title: "Prometheus Cave & Martvili Canyon Group Tour From Kutaisi", description: "A group tour version of the Prometheus Cave and Martvili Canyon combo.", price: "From $39", duration: "8 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/b9511d87cc4ab0ec4cc1d74513cb6141fb5b32c20d39148c7a4909632ad1bd0e.jpeg" } },
                    { title: "Practical Tips", content: "Since Kutaisi is so much closer to both sites than Tbilisi or Batumi, this is genuinely the best base if these two attractions are a priority for your Georgia trip." }
                ],
                faqs: [
                    { q: "What is the best Prometheus Cave tour from Kutaisi?", a: "Either combo works; the group option is typically cheaper per person." },
                    { q: "Is Kutaisi closer to Prometheus Cave than Tbilisi?", a: "Yes, significantly closer, making it the best base for this and Martvili Canyon." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "What is the best Prometheus Cave tour from Kutaisi?", "acceptedAnswer": { "@type": "Answer", "text": "Either combo works; group is typically cheaper." } },
                    { "@type": "Question", "name": "Is Kutaisi closer to the cave than Tbilisi?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, significantly closer." } }
                ] },
            };

        case "is-tskaltubo-sanatoriums-tour-worth-it-kutaisi":
            return {
                title: "Is the Tskaltubo Abandoned Soviet Sanatoriums Tour from Kutaisi Worth It?",
                seoTitle: "Tskaltubo Sanatoriums Tour Kutaisi 2026 | Review",
                description: "An honest look at the Tskaltubo abandoned Soviet sanatoriums day tour from Kutaisi, a genuinely unusual urban-exploration stop.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/ea11c45ab5fcd3afd13d5e7495bcdf17bd94bb27ef520465b8e84cf4940a61be.png",
                sections: [
                    { title: "The Short Answer", content: "Tskaltubo's abandoned Soviet-era spa sanatoriums are a genuinely striking urban-exploration site, once a major resort for Soviet elites and now decaying and atmospheric — a niche interest, but a memorable one for those drawn to it.", tourCard: { slug: "kutaisi-tskaltubo-abandoned-soviet-sanatoriums", title: "Kutaisi: Tskaltubo Abandoned Soviet Sanatoriums Tour", description: "A tour of Tskaltubo's abandoned Soviet-era spa sanatoriums.", price: "From $56", duration: "4 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/ea11c45ab5fcd3afd13d5e7495bcdf17bd94bb27ef520465b8e84cf4940a61be.png" } },
                    { title: "Practical Tips", content: "Wear sturdy shoes — the buildings are genuinely abandoned and derelict, with uneven floors and debris in places, not a maintained tourist site." }
                ],
                faqs: [
                    { q: "Is the Tskaltubo sanatoriums tour worth it?", a: "Yes, for travellers interested in Soviet history or urban exploration — a niche but memorable stop." },
                    { q: "Is Tskaltubo safe to walk through?", a: "Reasonably so with a guide, but wear sturdy shoes given the genuinely derelict condition of the buildings." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "Is the Tskaltubo tour worth it?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, for Soviet history or urban exploration interest." } }
                ] },
            };

        case "kutaisi-travel-guide-2026":
            return {
                title: "Kutaisi Travel Guide 2026",
                description: "What visitors need to know about Kutaisi, one of the world's oldest continuously inhabited cities.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/3fdfc9c079cba57bfa6bafce2d27798a681ba33c15f94894ac2f4f676ac8415d.jpg",
                sections: [
                    { title: "Why Visit", content: "Kutaisi offers ancient history (Bagrati Cathedral, Gelati Monastery), is the closest base to Prometheus Cave and Martvili Canyon, and has a growing budget-airline hub making it an increasingly common Georgia entry point." }
                ],
                faqs: [
                    { q: "Is Kutaisi worth visiting?", a: "Yes, for its ancient history and as the best base for Prometheus Cave and Martvili Canyon." }
                ],
            };

        case "best-gudauri-ski-tour-tbilisi":
            return {
                title: "Which Is the Best Gudauri Ski Resort Tour from Tbilisi?",
                seoTitle: "Best Gudauri Ski Tour from Tbilisi 2026 | Comparison",
                description: "Compare real Gudauri ski resort day trips from Tbilisi — a budget full-day trip, a private tour, and ski lessons for beginners.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/41b5db5f3c907f68a12eaa409b97681e5be82d54dfcadfa7daead3faf8937eea.jpg",
                sections: [
                    { title: "The Short Answer", content: "Gudauri, Georgia's main ski resort along the Georgian Military Road, is reachable as a day trip from Tbilisi — the choice is mainly budget vs. private transport, plus whether you need lessons.", tourCard: { slug: "from-tbilisi-full-day-gudauri-ski-resort-day-trip", title: "From Tbilisi: Full-Day Gudauri Ski Resort Day Trip", description: "A budget full-day ski trip to Gudauri from Tbilisi.", price: "From $40", duration: "10 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/41b5db5f3c907f68a12eaa409b97681e5be82d54dfcadfa7daead3faf8937eea.jpg" } },
                    { title: "Best Private Option: Private Gudauri Ski Resort Tour", content: "This gives you a private vehicle and more flexible timing than the shared day trip, worth it if you want to set your own schedule on the slopes.", tourCard: { slug: "from-tbilisi-private-gudauri-ski-resort-tour", title: "From Tbilisi: Private Gudauri Ski Resort Tour", description: "A private transport version of the Gudauri ski day trip.", price: "From $220", duration: "10 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/68c931a9724362a8ac59f846527ae5fa48a17f4dabd3b505c134690fd95aaef8.jpg" } },
                    { title: "Best for Beginners: Individual and Group Ski Lessons", content: "If you've never skied before, this adds actual instruction rather than just transport and lift access.", tourCard: { slug: "gudauri-individual-and-group-ski-lesson", title: "Gudauri: Individual and Group Ski Lesson", description: "Ski lessons at Gudauri, individual or group format.", price: "From $175", duration: "2.5 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/b5949701380566e0a1d800080913c3cc56aebd0d38bffe43a99842986e2b58a0.jpeg" } },
                    { title: "Practical Tips", content: "Equipment rental is typically separate from transport-only packages — confirm what's included before you go, since renting on arrival can mean queuing at peak times." }
                ],
                faqs: [
                    { q: "What is the best Gudauri ski tour from Tbilisi?", a: "A budget day trip for transport only, private for flexibility, or lessons if you're a beginner." },
                    { q: "Is equipment rental included in Gudauri ski day trips?", a: "Usually not in budget transport-only packages — confirm with your operator." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "What is the best Gudauri ski tour?", "acceptedAnswer": { "@type": "Answer", "text": "A budget day trip, private for flexibility, or lessons for beginners." } },
                    { "@type": "Question", "name": "Is equipment rental included?", "acceptedAnswer": { "@type": "Answer", "text": "Usually not in budget packages." } }
                ] },
            };

        case "best-paragliding-tour-tbilisi":
            return {
                title: "Which Is the Best Paragliding Tour from Tbilisi?",
                seoTitle: "Best Paragliding Tour from Tbilisi 2026 | Comparison",
                description: "Compare real paragliding tours from Tbilisi — a tandem flight over the Tbilisi Sea versus a full Gudauri mountain paragliding adventure.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/172c5b10b49386be6f6e3cfb7331c2143d765ed1a9c8a8a6b4990b09d2b59487.jpg",
                sections: [
                    { title: "The Short Answer", content: "Tbilisi offers two genuinely different paragliding settings — a tandem flight over the Tbilisi Sea reservoir close to the city, or a full mountain adventure flight from Gudauri in the Caucasus.", tourCard: { slug: "tbilisi-tandem-paragliding-over-the-tbilisi-sea", title: "Tbilisi: Tandem Paragliding over the Tbilisi Sea", description: "A tandem paragliding flight over the Tbilisi Sea reservoir.", price: "From $221", duration: "2 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/172c5b10b49386be6f6e3cfb7331c2143d765ed1a9c8a8a6b4990b09d2b59487.jpg" } },
                    { title: "Best for Mountain Views: Gudauri Paragliding Adventure", content: "This flies over the Caucasus mountains near Gudauri instead of the city reservoir, a genuinely more dramatic setting.", tourCard: { slug: "from-tbilisi-gudauri-paragliding-adventure-with", title: "From Tbilisi: Gudauri Paragliding Adventure", description: "A paragliding flight over the Caucasus mountains near Gudauri.", price: "From $423", duration: "5 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/edb588e8e6b38db6b755293eb34e4ca6ed80af4e5e173fdbb9f000792c86aeb6.png" } },
                    { title: "Practical Tips", content: "The Tbilisi Sea flight is much closer to the city and cheaper, good for a quick taste of paragliding; the Gudauri version is a bigger day out with more dramatic mountain scenery." }
                ],
                faqs: [
                    { q: "What is the best paragliding tour from Tbilisi?", a: "A Tbilisi Sea flight for convenience, or Gudauri for dramatic mountain scenery." },
                    { q: "Which paragliding option is closer to Tbilisi?", a: "The Tbilisi Sea flight, much closer than the Gudauri mountain option." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "What is the best paragliding tour from Tbilisi?", "acceptedAnswer": { "@type": "Answer", "text": "Tbilisi Sea for convenience, Gudauri for scenery." } },
                    { "@type": "Question", "name": "Which is closer to Tbilisi?", "acceptedAnswer": { "@type": "Answer", "text": "The Tbilisi Sea flight." } }
                ] },
            };

        case "is-birtvisi-canyon-tour-worth-it-tbilisi":
            return {
                title: "Is the Birtvisi Canyon Hike & Zipline Tour from Tbilisi Worth It?",
                seoTitle: "Birtvisi Canyon Tour Tbilisi 2026 | Honest Review",
                description: "An honest look at the Birtvisi Canyon hiking, zipline, and lake day tour from Tbilisi.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/d3dc9637198a0ce4007317b969a9c953c638af282b3ba2d741e9eee21f07897f.jpeg",
                sections: [
                    { title: "The Short Answer", content: "Birtvisi Canyon combines genuine hiking through dramatic rock formations with a zipline and lake stop — a good active alternative to the standard sightseeing-focused day trips from Tbilisi.", tourCard: { slug: "from-tbilisi-birtvisi-canyon-hike-zipline-lake", title: "From Tbilisi: Birtvisi Canyon Hike, Zipline & Lake", description: "A day trip combining Birtvisi Canyon hiking, a zipline, and a lake visit.", price: "From $130", duration: "10 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/d3dc9637198a0ce4007317b969a9c953c638af282b3ba2d741e9eee21f07897f.jpeg" } },
                    { title: "Practical Tips", content: "This is a more physically active day than most Tbilisi day trips — reasonable fitness helps, and bring proper footwear for the canyon hiking sections." }
                ],
                faqs: [
                    { q: "Is the Birtvisi Canyon tour worth it?", a: "Yes, a good active alternative combining hiking, a zipline, and a lake in one day." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "Is the Birtvisi Canyon tour worth it?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, a good active day combining hiking, zipline, and a lake." } }
                ] },
            };

        case "is-fishing-tour-worth-it-tbilisi":
            return {
                title: "Is a Fishing Tour from Tbilisi Worth It?",
                seoTitle: "Tbilisi Fishing Tour 2026 | Honest Review",
                description: "An honest look at private fishing tours from Tbilisi, including a Lake Sagamo experience with a local guide.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/18d6ee3b1cfb3c94196d07e67ab6e1f427788c0ba878a3b9ea1f345dd6be3214.jpg",
                sections: [
                    { title: "The Short Answer", content: "A private fishing tour with a local guide, often including a picnic, is a genuinely relaxed alternative to Tbilisi's more sightseeing-heavy day trips — good if you want a slower, more low-key day in nature.", tourCard: { slug: "tbilisi-private-fishing-tour-with-picnic-and-guide", title: "Tbilisi: Private Fishing Tour with Picnic and Guide", description: "A private fishing tour with a picnic and local guide.", price: "From $455", duration: "8 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/18d6ee3b1cfb3c94196d07e67ab6e1f427788c0ba878a3b9ea1f345dd6be3214.jpg" } },
                    { title: "Alternative: Lake Sagamo Fishing Experience", content: "A similar relaxed fishing experience at Lake Sagamo with a local guide, worth comparing on location and exact inclusions.", tourCard: { slug: "tbilisi-lake-sagamo-fishing-experience-with-local", title: "Tbilisi: Lake Sagamo Fishing Experience with Local Guide", description: "A fishing experience at Lake Sagamo with a local guide.", price: "From $520", duration: "7 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/30f6bbafc48010231923ba52e8c41197bdbb43bbea306c9e0f264eb011979224.jpeg" } },
                    { title: "Practical Tips", content: "These are private, guide-led experiences rather than tackle-rental-only trips — your guide typically handles the logistics, making this approachable even without prior fishing experience." }
                ],
                faqs: [
                    { q: "Is a fishing tour from Tbilisi worth it?", a: "Yes, for a relaxed, nature-focused alternative to standard sightseeing day trips." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "Is a fishing tour from Tbilisi worth it?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, for a relaxed nature-focused day." } }
                ] },
            };

        case "best-gergeti-church-tour-kazbegi":
            return {
                title: "Which Is the Best Gergeti Trinity Church Tour from Kazbegi?",
                seoTitle: "Best Gergeti Church Tour Kazbegi 2026 | Comparison",
                description: "Compare real Gergeti Trinity Church tours for travellers already based in Kazbegi/Stepantsminda — a quick 4x4 jeep ride versus a two-way group trip.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/ee3d5625d3e9faf58708a1c32f3316eab4520279672051350f46428e81994ebf.jpeg",
                sections: [
                    { title: "The Short Answer", content: "If you're already staying in Kazbegi (Stepantsminda) rather than day-tripping from Tbilisi, reaching Gergeti Trinity Church is quick — a short shared 4x4 jeep ride up the steep final stretch.", tourCard: { slug: "stepantsminda-gergeti-trinity-church-4x4-jeep-tour", title: "Stepantsminda: Gergeti Trinity Church 4x4 Jeep Tour", description: "A quick 4x4 jeep tour up to Gergeti Trinity Church.", price: "From $68", duration: "1 hour", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/ee3d5625d3e9faf58708a1c32f3316eab4520279672051350f46428e81994ebf.jpeg" } },
                    { title: "Best Value: Two-Ways Group Trip", content: "This covers the round trip in a shared group format at a lower price than a private jeep.", tourCard: { slug: "from-kazbegi-to-gergeti-church-two-ways-group-trip", title: "From Kazbegi to Gergeti Church Two Ways Group Trip", description: "A shared group round trip to Gergeti Church.", price: "From $51", duration: "1.5 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/6347cf101270adf508b80357530a6f31b9f14dc8e851712d783cda203d1bbdf2.jpeg" } },
                    { title: "Practical Tips", content: "Since you're already in Kazbegi, there's no need to book a full Tbilisi day-tour package for this — a short local jeep ride is all it takes, much cheaper than the Tbilisi-based combo tours." }
                ],
                faqs: [
                    { q: "What is the best way to reach Gergeti Church from Kazbegi?", a: "A short shared or private 4x4 jeep ride, much cheaper than booking a full Tbilisi day tour." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "What is the best way to reach Gergeti Church from Kazbegi?", "acceptedAnswer": { "@type": "Answer", "text": "A short shared or private 4x4 jeep ride." } }
                ] },
            };

        case "best-gveleti-waterfall-hike-kazbegi":
            return {
                title: "Which Is the Best Gveleti Waterfall Hike from Kazbegi?",
                seoTitle: "Best Gveleti Waterfall Hike Kazbegi 2026 | Comparison",
                description: "Compare real Gveleti Waterfall hikes from Kazbegi — a focused waterfall hike versus a combo adding Sno Valley.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/aacd077c2ef144d6705fd1b3f4c2735f85adc693246dcc3b68e2545f4711a67d.jpeg",
                sections: [
                    { title: "The Short Answer", content: "Gveleti Waterfall is a genuinely rewarding short hike near Kazbegi, and the choice is a focused waterfall-only hike versus extending the day into Sno Valley's scenery as well.", tourCard: { slug: "kazbegi-gveleti-waterfall-guided-hike", title: "Kazbegi: Gveleti Waterfall Guided Hike", description: "A focused guided hike to Gveleti Waterfall.", price: "From $51", duration: "3 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/aacd077c2ef144d6705fd1b3f4c2735f85adc693246dcc3b68e2545f4711a67d.jpeg" } },
                    { title: "Best Combined: Sno Valley & Gveleti Waterfall Tour", content: "This extends the hike into Sno Valley's wider mountain scenery, a fuller half-day rather than just the waterfall.", tourCard: { slug: "from-kazbegi-sno-valley-and-gveleti-waterfall-tour", title: "From Kazbegi: Sno Valley and Gveleti Waterfall Tour", description: "A combo tour of Sno Valley and Gveleti Waterfall.", price: "From $110", duration: "4 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/4e9be15d6a78eac17dbd5307472b2768a52fddf31bcd2a60de10bb7dcce8d7fd.jpeg" } },
                    { title: "Practical Tips", content: "The waterfall hike itself is short and manageable for most fitness levels — the Sno Valley extension is where the day gets more scenic but also longer." }
                ],
                faqs: [
                    { q: "What is the best Gveleti Waterfall hike from Kazbegi?", a: "A focused hike for just the waterfall, or add Sno Valley for a fuller half-day." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "What is the best Gveleti Waterfall hike?", "acceptedAnswer": { "@type": "Answer", "text": "A focused hike, or add Sno Valley for more." } }
                ] },
            };

        case "is-truso-valley-tour-worth-it-kazbegi":
            return {
                title: "Is the Truso Valley Tour from Kazbegi Worth It?",
                seoTitle: "Truso Valley Tour Kazbegi 2026 | Honest Review",
                description: "An honest look at the Truso Valley day tour from Kazbegi, a dramatic, less-visited valley with mineral springs and ghost villages.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/c975e6e27eab7dfc76d21ad35ae1af7b28150f04da99c2a8a8f88b2a30150dc0.jpeg",
                sections: [
                    { title: "The Short Answer", content: "Truso Valley is genuinely less touristy than the main Gergeti/Gudauri circuit, with dramatic scenery, natural mineral springs, and semi-abandoned villages — a good pick if you've already done the standard Kazbegi sights and want something quieter.", tourCard: { slug: "from-kazbegi-truso-valley-sno-valley-gergeti", title: "From Kazbegi: Truso Valley, Sno Valley & Gergeti Church", description: "A tour combining Truso Valley, Sno Valley, and Gergeti Church.", price: "From $125", duration: "5 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/c975e6e27eab7dfc76d21ad35ae1af7b28150f04da99c2a8a8f88b2a30150dc0.jpeg" } },
                    { title: "Practical Tips", content: "Truso Valley sits close to the Russian border region — a local guide is useful for both navigation and historical context about the area's semi-abandoned villages." }
                ],
                faqs: [
                    { q: "Is the Truso Valley tour worth it?", a: "Yes, for a quieter, less touristy alternative to the main Kazbegi circuit." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "Is the Truso Valley tour worth it?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, for a quieter alternative to the main circuit." } }
                ] },
            };

        case "best-horse-riding-tour-kazbegi":
            return {
                title: "Which Is the Best Horse Riding Tour in Kazbegi?",
                seoTitle: "Best Horse Riding Tour Kazbegi 2026 | Comparison",
                description: "Compare real horse riding tours in Kazbegi — a sunset ride from Rooms Hotel versus a private/public trek with a local horseman.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/8fd58069b4b5e983746a57d32c6f17c86ce6db8206f9080accd03944e719a23b.jpeg",
                sections: [
                    { title: "The Short Answer", content: "Horse riding in Kazbegi puts you right in the mountain scenery the Caucasus is known for, and the choice is mainly timing (sunset) versus format (private vs. public trek).", tourCard: { slug: "kazbegisunset-horse-riding-tour-from-rooms-hotel", title: "Kazbegi: Sunset Horse Riding Tour from Rooms Hotel", description: "A sunset horse riding tour starting from Rooms Hotel Kazbegi.", price: "From $38", duration: "1.5 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/8fd58069b4b5e983746a57d32c6f17c86ce6db8206f9080accd03944e719a23b.jpeg" } },
                    { title: "Best with Local Horseman: Private & Public Horse Trek", content: "This pairs you directly with a local horseman for the ride, available as either private or public group format.", tourCard: { slug: "private-public-horse-trek-with-local-horseman-in", title: "Private & Public Horse Trek with Local Horseman in Kazbegi", description: "A horse trek with a local horseman, private or public.", price: "From $73", duration: "1.5 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/6c0921e394292e781725d0a6281bb5ce142617125456a522add83d0f93f9e9e9.jpeg" } },
                    { title: "Practical Tips", content: "No prior riding experience is typically needed — confirm with the operator if you have specific concerns about pace or terrain." }
                ],
                faqs: [
                    { q: "What is the best horse riding tour in Kazbegi?", a: "A sunset ride for scenery, or the local-horseman trek for a more personal guided experience." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "What is the best horse riding tour in Kazbegi?", "acceptedAnswer": { "@type": "Answer", "text": "A sunset ride, or a trek with a local horseman." } }
                ] },
            };

        case "kazbegi-travel-guide-2026":
            return {
                title: "Kazbegi (Stepantsminda) Travel Guide 2026",
                description: "What visitors need to know about basing themselves in Kazbegi rather than day-tripping from Tbilisi.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/ee3d5625d3e9faf58708a1c32f3316eab4520279672051350f46428e81994ebf.jpeg",
                sections: [
                    { title: "Why Stay in Kazbegi", content: "Basing yourself in Kazbegi (also called Stepantsminda) rather than day-tripping from Tbilisi means you can see Gergeti Church, Gveleti Waterfall, and Truso Valley without the long return drive each time, and catch dawn/dusk light in the mountains." }
                ],
                faqs: [
                    { q: "Is it worth staying overnight in Kazbegi?", a: "Yes, if you want more time in the mountains without a long daily return drive to Tbilisi." }
                ],
            };

        case "best-ushguli-day-trip-mestia":
            return {
                title: "Which Is the Best Ushguli Day Trip from Mestia?",
                seoTitle: "Best Ushguli Day Trip from Mestia 2026 | Comparison",
                description: "Compare real Ushguli day trips from Mestia — a standard day trip versus one adding an optional Shkhara Glacier hike.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/d3c9f8c286fb419a80d4a6a4bee730c2c7b38fef9875f6365b882013e0037305.jpg",
                sections: [
                    { title: "The Short Answer", content: "Ushguli, one of the highest continuously inhabited settlements in Europe, is reachable as a day trip from Mestia — the choice is a standard sightseeing version or one adding a hike toward Shkhara Glacier.", tourCard: { slug: "mestia-ushguli-day-trip", title: "Mestia Ushguli day trip", description: "A standard day trip to the Ushguli villages.", price: "From $64", duration: "6 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/d3c9f8c286fb419a80d4a6a4bee730c2c7b38fef9875f6365b882013e0037305.jpg" } },
                    { title: "Best with Hiking: Day Trip with Shkhara Hike Option", content: "This adds an optional hike toward Shkhara Glacier, Georgia's highest peak, for travellers who want more than just village sightseeing.", tourCard: { slug: "from-mestia-to-ushguli-day-trip-with-shkhara-hike", title: "From Mestia to Ushguli: Day Trip with Shkhara Hike Option", description: "An Ushguli day trip with an optional Shkhara Glacier hike.", price: "From $234", duration: "10 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/eac5a1ddf58ba74e6c0db14cc72f90ed0f801348a0ea24e20f3bee4dc88303a5.jpg" } },
                    { title: "Practical Tips", content: "The road to Ushguli is rough and scenic in equal measure — a 4x4 is standard for this route, and the drive itself is part of the experience." }
                ],
                faqs: [
                    { q: "What is the best Ushguli day trip from Mestia?", a: "A standard day trip for sightseeing, or add the Shkhara hike option for more activity." },
                    { q: "Is Ushguli really one of the highest villages in Europe?", a: "Yes, it's among the highest continuously inhabited settlements in Europe." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "What is the best Ushguli day trip?", "acceptedAnswer": { "@type": "Answer", "text": "A standard day trip, or add the Shkhara hike option." } },
                    { "@type": "Question", "name": "Is Ushguli really that high?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, among the highest inhabited settlements in Europe." } }
                ] },
            };

        case "best-chalaadi-glacier-tour-mestia":
            return {
                title: "Which Is the Best Chalaadi Glacier Tour from Mestia?",
                seoTitle: "Best Chalaadi Glacier Tour Mestia 2026 | Comparison",
                description: "Compare real Chalaadi Glacier options from Mestia — a quick private transfer versus a full guided hike.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/ccbd544c247ada35ba090003a2607105555c52d75388e0a2c1fb540c44f54cf0.jpeg",
                sections: [
                    { title: "The Short Answer", content: "Chalaadi Glacier is close enough to Mestia for a relatively quick visit, and the choice is a transfer-only trip for those short on time versus a full guided hike for a more immersive experience.", tourCard: { slug: "chalaadi-glacier-transfer-from-mestia-private", title: "Chalaadi Glacier Transfer from Mestia - Private Round Trip", description: "A private round-trip transfer to Chalaadi Glacier.", price: "From $65", duration: "4 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/ccbd544c247ada35ba090003a2607105555c52d75388e0a2c1fb540c44f54cf0.jpeg" } },
                    { title: "Best for a Full Experience: Guided Hike with Views", content: "This adds a proper guided hike around the glacier rather than just transport, with a guide pointing out the best viewpoints.", tourCard: { slug: "mestia-chalaadi-glacier-guided-hike-with-views", title: "Mestia: Chalaadi Glacier Guided Hike with Views", description: "A guided hike around Chalaadi Glacier with scenic viewpoints.", price: "From $182", duration: "7 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/9aa7611c1644e735132e0506b0abf250124ed45eebd3d907220b8b047dbeaac4.jpg" } },
                    { title: "Practical Tips", content: "The glacier has visibly receded over recent decades — worth asking your guide about the changes if you're interested in the environmental angle." }
                ],
                faqs: [
                    { q: "What is the best Chalaadi Glacier option from Mestia?", a: "A transfer-only trip if short on time, or the full guided hike for a more immersive visit." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "What is the best Chalaadi Glacier tour?", "acceptedAnswer": { "@type": "Answer", "text": "A transfer-only trip, or the full guided hike." } }
                ] },
            };

        case "best-koruldi-lakes-tour-mestia":
            return {
                title: "Which Is the Best Koruldi Lakes Tour from Mestia?",
                seoTitle: "Best Koruldi Lakes Tour Mestia 2026 | Comparison",
                description: "Compare real Koruldi Lakes tours from Mestia — a standard scenic tour versus a horse riding version for those who'd rather not hike up.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/62e153e4898e321c00e55e1760fcc3ac8966f85712538c5de3a8086819a2f442.jpg",
                sections: [
                    { title: "The Short Answer", content: "Koruldi Lakes, perched high above Mestia with dramatic Svaneti mountain views, can be reached on foot or on horseback — the choice depends on your fitness and whether you'd rather hike or ride up.", tourCard: { slug: "mestia-koruldi-lakes-tour-where-mountains-touch", title: "Mestia: Koruldi Lakes Tour – Where Mountains Touch the Sky", description: "A scenic tour to Koruldi Lakes above Mestia.", price: "From $195", duration: "3 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/62e153e4898e321c00e55e1760fcc3ac8966f85712538c5de3a8086819a2f442.jpg" } },
                    { title: "Best for Non-Hikers: Horse Riding Tour to Koruldi Lakes", content: "This covers the same route by horse instead of hiking, a good option if the climb is too strenuous or you simply prefer riding.", tourCard: { slug: "mestia-horse-riding-tour-to-koruldi-lakes", title: "Mestia: Horse Riding Tour to Koruldi Lakes", description: "A horse riding tour to Koruldi Lakes.", price: "From $311", duration: "6 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/8f4da111f5f165c803824a2b13e9a687e026ac37bc76357b4b2d85b5245a628b.jpg" } },
                    { title: "Practical Tips", content: "The climb to Koruldi Lakes is genuinely steep — if you're not confident in your fitness, the horse riding option is a legitimate alternative, not just a novelty." }
                ],
                faqs: [
                    { q: "What is the best Koruldi Lakes tour from Mestia?", a: "A standard hiking tour, or horse riding if you'd rather not hike the steep climb." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "What is the best Koruldi Lakes tour?", "acceptedAnswer": { "@type": "Answer", "text": "A hiking tour, or horse riding as an alternative." } }
                ] },
            };

        case "mestia-travel-guide-2026":
            return {
                title: "Mestia (Svaneti) Travel Guide 2026",
                description: "What visitors need to know about Mestia, the gateway to Georgia's Svaneti mountain region.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/d3c9f8c286fb419a80d4a6a4bee730c2c7b38fef9875f6365b882013e0037305.jpg",
                sections: [
                    { title: "Why Visit", content: "Mestia is the main base for exploring Svaneti, Georgia's most dramatic mountain region, known for its distinctive stone defensive towers, Ushguli's high-altitude villages, and glacier hikes." }
                ],
                faqs: [
                    { q: "Is Mestia worth visiting?", a: "Yes, as the gateway to Svaneti's dramatic mountains, stone towers, and high-altitude villages." }
                ],
            };

        case "best-borjomi-activity-tour-borjomi":
            return {
                title: "Best Things to Do in Borjomi (Beyond the Mineral Water)",
                seoTitle: "Best Borjomi Activities 2026 | Jeep, Buggy & Horseback Tours",
                description: "Borjomi is known for its mineral water parks, but local jeep safaris, buggy rides, and horseback tours are a genuinely different way to see the surrounding nature.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/7226006672e0d466c8d21b4468582c89539110538dfc3f228d2a312f9a24737d.jpg",
                sections: [
                    { title: "The Short Answer", content: "Beyond the famous Mineral Water Park, Borjomi's forested valley is best explored by jeep, buggy, or on horseback.", tourCard: { slug: "borjomi-jeep-tour-discover-the-beautiful-nature", title: "Borjomi Jeep Tour - Discover the Beautiful Nature", description: "A jeep tour through Borjomi's forested nature.", price: "From $291", duration: "9 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/7226006672e0d466c8d21b4468582c89539110538dfc3f228d2a312f9a24737d.jpg" } },
                    { title: "Most Relaxed: Mineral Water Park & Monastery", content: "The classic in-town visit, pairing the famous mineral water park with the nearby Mtsvane Monastery.", tourCard: { slug: "borjomi-mineral-water-park-and-mtsvane-monastery", title: "Borjomi: Mineral Water Park and Mtsvane Monastery Tour", description: "A tour of Borjomi's mineral water park and monastery.", price: "From $147", duration: "10 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/eda4f45cfb2a8c121d19194f9f24f371dbe50383f2103bfb86bc09a6ee864098.jpeg" } },
                    { title: "Most Scenic: Buggy Tour to the Lakes", content: "A faster-paced buggy ride out to the surrounding lakes for travelers who want more adrenaline than a standard jeep tour.", tourCard: { slug: "buggy-tour-to-the-lakes-from-borjomi", title: "Buggy Tour to the Lakes from Borjomi", description: "A buggy tour to the lakes around Borjomi.", price: "From $208", duration: "3 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/20e87ae07d4fa113d0529608f73ca69c91fb8d5bd7603b1be04ccfcdd3c630a4.png" } },
                    { title: "Most Traditional: Private Horseback Riding to Kakhisi Lake", content: "A horseback ride to Kakhisi Lake offers a quieter, more traditional way to see the valley.", tourCard: { slug: "borjomi-private-horseback-riding-tour-to-kakhisi", title: "Borjomi: Private Horseback Riding Tour to Kakhisi Lake", description: "A private horseback ride to Kakhisi Lake.", price: "From $143", duration: "4 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/19891a3fa0984b722637e8ea9b2682d88f552a153a7689971069573295618589.jpeg" } },
                    { title: "Practical Tips", content: "Most visitors combine Borjomi with Vardzia and Rabati Castle as a day trip from Tbilisi or Kutaisi, but these local activities are worth an extra day if you're staying overnight in Borjomi itself." }
                ],
                faqs: [
                    { q: "What is there to do in Borjomi besides the mineral water park?", a: "Jeep safaris, buggy rides to the lakes, and horseback riding to Kakhisi Lake." },
                    { q: "Is Borjomi worth an overnight stay?", a: "Yes, if you want time for jeep, buggy, or horseback activities beyond the standard day-trip stops." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "What is there to do in Borjomi besides the mineral water park?", "acceptedAnswer": { "@type": "Answer", "text": "Jeep safaris, buggy rides, and horseback riding." } }
                ] },
            };

        case "best-bakuriani-ski-tour-borjomi":
            return {
                title: "Which Is the Best Bakuriani Tour from Borjomi?",
                seoTitle: "Best Bakuriani Ski Tour 2026 | Cable Car, Ski & Snowshoe",
                description: "Compare ways to visit Bakuriani, Georgia's main ski resort town near Borjomi — cable car sightseeing, ski lessons, and snowshoe hiking.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/abf0964e056dc4babe81b56fcdcdd638461495444a457207d73365aa6ad1ee46.jpeg",
                sections: [
                    { title: "The Short Answer", content: "Bakuriani is Georgia's main ski resort, a short drive from Borjomi — visit by cable car for sightseeing, book a ski lesson in winter, or snowshoe through the Caucasus in the off-season.", tourCard: { slug: "bakuriani-cable-car-ride-mountain-villages-tour", title: "Bakuriani Cable Car Ride: Mountain Villages Tour", description: "A cable car ride over Bakuriani's mountain villages.", price: "From $87", duration: "6 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/abf0964e056dc4babe81b56fcdcdd638461495444a457207d73365aa6ad1ee46.jpeg" } },
                    { title: "For Winter Visitors: Private or Group Ski Lesson", content: "Bakuriani's ski season runs roughly December through March — a lesson here is a good introduction to Georgian skiing.", tourCard: { slug: "bakuriani-private-or-group-ski-lesson", title: "Bakuriani: Private or Group Ski Lesson", description: "A ski lesson in Bakuriani.", price: "From $169", duration: "2.5 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/0ca7d86fa21d44a5fff7ebbf58902236f27295fb0c797856506fd781bca00331.jpeg" } },
                    { title: "For Off-Season Visitors: Caucasus Mountains Snowshoe Hike", content: "Outside ski season, a snowshoe hike is the best way to experience the same Caucasus scenery.", tourCard: { slug: "bakuriani-caucasus-mountains-snowshoe-hike", title: "Bakuriani: Caucasus Mountains Snowshoe Hike", description: "A snowshoe hike through the Caucasus mountains near Bakuriani.", price: "From $74", duration: "4.5 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/2bd17027940af683b686508b92c0ff6d8c01a01f8a786bc1bab512f0c6de0da4.jpeg" } },
                    { title: "Practical Tips", content: "Bakuriani is roughly a 30-minute drive from Borjomi, making it an easy half-day or full-day add-on to a Borjomi visit." }
                ],
                faqs: [
                    { q: "Is Bakuriani worth visiting from Borjomi?", a: "Yes, it is about a 30-minute drive and is Georgia's main ski resort town." },
                    { q: "When is ski season in Bakuriani?", a: "Roughly December through March." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "When is ski season in Bakuriani?", "acceptedAnswer": { "@type": "Answer", "text": "Roughly December through March." } }
                ] },
            };

        case "borjomi-travel-guide-2026":
            return {
                title: "Borjomi Travel Guide 2026",
                description: "Everything to know about visiting Borjomi, Georgia's famous spa town and gateway to the Bakuriani ski resort.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/7226006672e0d466c8d21b4468582c89539110538dfc3f228d2a312f9a24737d.jpg",
                sections: [
                    { title: "Getting There", content: "Borjomi is roughly 2.5 hours by road from Tbilisi, or about 2 hours from Kutaisi — most visitors see it as part of a Vardzia/Rabati Castle day trip, though it is also worth an overnight stay." },
                    { title: "What to Do", content: "The Mineral Water Park and Mtsvane Monastery in town, jeep and buggy tours into the surrounding forest, horseback riding to Kakhisi Lake, and day trips to the Bakuriani ski resort." },
                    { title: "Best Time to Visit", content: "Summer for hiking and the mineral water park; December through March for skiing in nearby Bakuriani." }
                ],
                faqs: [
                    { q: "How far is Borjomi from Tbilisi?", a: "About 2.5 hours by road." },
                    { q: "What is Borjomi known for?", a: "Its mineral water and spa town atmosphere, and as the gateway to the Bakuriani ski resort." }
                ],
            };

        case "is-okatse-canyon-tour-worth-it-kutaisi":
            return {
                title: "Is the Okatse Canyon Tour Worth It from Kutaisi?",
                seoTitle: "Okatse Canyon Tour Kutaisi 2026 | Honest Review",
                description: "An honest look at Okatse Canyon, a dramatic gorge walk on a suspended metal walkway, paired here with Martvili Canyon and Prometheus Cave.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/210d325a869d4e938b609fb9aaaa37560eebe692111f87b55a0f5c808fdae4cd.jpeg",
                sections: [
                    { title: "The Short Answer", content: "Okatse Canyon's highlight is a suspended metal walkway bolted into the canyon wall, giving dramatic views straight down into the gorge — a genuinely different experience from Martvili Canyon's boat-ride format, and this tour covers both plus Prometheus Cave in one day.", tourCard: { slug: "from-kutaisi-guided-tour-of-okatse-martvili", title: "From Kutaisi: Guided Tour of Okatse, Martvili, & Prometheus", description: "A guided tour of Okatse Canyon, Martvili Canyon, and Prometheus Cave.", price: "From $54", duration: "10 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/210d325a869d4e938b609fb9aaaa37560eebe692111f87b55a0f5c808fdae4cd.jpeg" } },
                    { title: "Practical Tips", content: "The walkway has sections with gaps looking straight down — not ideal for those with a fear of heights, unlike Martvili's gentler boat-based canyon view." }
                ],
                faqs: [
                    { q: "What makes Okatse Canyon different from Martvili?", a: "Okatse is viewed from a suspended metal walkway bolted to the canyon wall, while Martvili is explored partly by boat." },
                    { q: "Is Okatse Canyon worth it?", a: "Yes, for dramatic canyon views, though it's not ideal for those with a fear of heights." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "What makes Okatse different from Martvili?", "acceptedAnswer": { "@type": "Answer", "text": "Okatse is viewed from a suspended walkway on the canyon wall, Martvili partly by boat." } }
                ] },
            };

        case "is-katskhi-pillar-tour-worth-it-kutaisi":
            return {
                title: "Is the Katskhi Pillar Tour Worth It from Kutaisi?",
                seoTitle: "Katskhi Pillar Tour Kutaisi 2026 | Honest Review",
                description: "An honest look at Katskhi Pillar, a natural limestone pillar topped by a small monastery, paired here with Chiatura and Uplistsikhe.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/a7b5543f852d8d02f84010a5d53bde6c628eb7a6328b3208e80165d484034647.jpg",
                sections: [
                    { title: "The Short Answer", content: "Katskhi Pillar, a natural 40-meter limestone column topped by a small working monastery accessible only by ladder, is one of Georgia's most visually striking religious sites — this private tour pairs it with Chiatura's old Soviet cable cars and the ancient cave city of Uplistsikhe.", tourCard: { slug: "private-tour-from-kutaisi-to-katskhi-chiatura", title: "Private Tour from Kutaisi to Katskhi, Chiatura & Uplistsikhe", description: "A private tour to Katskhi Pillar, Chiatura, and Uplistsikhe.", price: "From $176", duration: "11 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/a7b5543f852d8d02f84010a5d53bde6c628eb7a6328b3208e80165d484034647.jpg" } },
                    { title: "Practical Tips", content: "Only monks are typically allowed to climb the pillar itself — most visitors view it from the ground, which is still a striking sight." }
                ],
                faqs: [
                    { q: "Can I climb Katskhi Pillar myself?", a: "No, typically only the resident monks climb it — visitors view it from the ground." },
                    { q: "What is at the top of Katskhi Pillar?", a: "A small working monastery, reached only by ladder." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "What is at the top of Katskhi Pillar?", "acceptedAnswer": { "@type": "Answer", "text": "A small working monastery, reached only by ladder." } }
                ] },
            };

        case "is-sunset-cruise-worth-it-batumi":
            return {
                title: "Is the Batumi Sunset Cruise Worth It?",
                seoTitle: "Batumi Sunset Cruise 2026 | Honest Review",
                description: "An honest look at Batumi's short Black Sea sunset cruise with a glass of wine.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/e062b19d9881ab28b3f4c4c5c9519e9aa1d7c0b8ba0211fab90d2c6c6552bb3d.jpg",
                sections: [
                    { title: "The Short Answer", content: "At a very low price, this short cruise shows off Batumi's Black Sea coastline and skyline at sunset, with a glass of wine included — an easy, affordable evening activity.", tourCard: { slug: "batumi-sunset-cruise-with-a-glass-of-wine", title: "Batumi: Sunset Cruise with a Glass of Wine", description: "A sunset cruise on the Black Sea with a glass of wine.", price: "From $26", duration: "30 minutes", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/e062b19d9881ab28b3f4c4c5c9519e9aa1d7c0b8ba0211fab90d2c6c6552bb3d.jpg" } },
                    { title: "Practical Tips", content: "Book a slot timed close to actual sunset, since the cruise is short and you want the light at its best for the duration." }
                ],
                faqs: [
                    { q: "Is the Batumi sunset cruise worth it?", a: "Yes, given its low price, it's an easy and affordable evening activity on the Black Sea." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "Is the Batumi sunset cruise worth it?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, given its low price and easy format." } }
                ] },
            };

        case "is-khachapuri-cooking-class-worth-it-batumi":
            return {
                title: "Is the Khachapuri Cooking Class Worth It in Batumi?",
                seoTitle: "Batumi Khachapuri Cooking Class 2026 | Honest Review",
                description: "An honest look at Batumi's Georgian khachapuri cooking class, teaching Georgia's iconic cheese-filled bread.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/75122421b1027c054180e7b421847ffc70a3bef761da92c3bbe0b907125b9673.png",
                sections: [
                    { title: "The Short Answer", content: "Khachapuri, Georgia's beloved cheese-filled bread, comes in several regional styles — this hands-on class teaches you to make it directly, a short and affordable cultural activity.", tourCard: { slug: "batumi-cook-georgian-khachapuri-in-batumi", title: "Batumi: Cook Georgian Khachapuri in Batumi", description: "A hands-on khachapuri cooking class.", price: "From $95", duration: "1.5 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/75122421b1027c054180e7b421847ffc70a3bef761da92c3bbe0b907125b9673.png" } },
                    { title: "Practical Tips", content: "At just 1.5 hours, this fits easily into an afternoon or evening between other Batumi activities." }
                ],
                faqs: [
                    { q: "What is khachapuri?", a: "Georgia's beloved cheese-filled bread, with several regional variations." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "What is khachapuri?", "acceptedAnswer": { "@type": "Answer", "text": "Georgia's beloved cheese-filled bread." } }
                ] },
            };

        case "is-machakhela-national-park-hike-worth-it-batumi":
            return {
                title: "Is the Machakhela National Park Hike Worth It from Batumi?",
                seoTitle: "Machakhela National Park Batumi 2026 | Honest Review",
                description: "An honest look at the Machakhela National Park guided hiking tour, a forested nature escape from Batumi's coastline.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/5ea159370bc6291971b9285116b95c0d9784e99dccc3450296ba3cc7beb251a6.jpg",
                sections: [
                    { title: "The Short Answer", content: "Machakhela National Park offers dense forest, rivers, and traditional Adjarian villages, a genuinely different landscape from Batumi's beach and city sightseeing.", tourCard: { slug: "batumi-machakhela-national-park-guided-hiking-tour", title: "Batumi: Machakhela National Park Guided Hiking Tour", description: "A guided hiking tour through Machakhela National Park.", price: "From $390", duration: "5 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/5ea159370bc6291971b9285116b95c0d9784e99dccc3450296ba3cc7beb251a6.jpg" } },
                    { title: "Practical Tips", content: "Wear proper hiking shoes — the terrain is genuinely forested and uneven, unlike Batumi's flat seaside boulevard." }
                ],
                faqs: [
                    { q: "What is Machakhela National Park known for?", a: "Dense forest, rivers, and traditional Adjarian villages, a different landscape from Batumi's coast." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "What is Machakhela National Park known for?", "acceptedAnswer": { "@type": "Answer", "text": "Dense forest, rivers, and traditional Adjarian villages." } }
                ] },
            };

        case "is-dashbashi-canyon-tour-worth-it-tbilisi":
            return {
                title: "Is the Dashbashi Canyon Day Trip Worth It from Tbilisi?",
                seoTitle: "Dashbashi Canyon Tbilisi 2026 | Honest Review",
                description: "An honest look at Dashbashi Canyon and its glass/diamond bridge, a dramatic gorge day trip from Tbilisi.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/d11c661ba105f67739dc3a586def180d16dab12457af46780da8e9dab72929a6.jpg",
                sections: [
                    { title: "The Short Answer", content: "Dashbashi Canyon's highlight is a glass-floored 'diamond bridge' suspended over a dramatic gorge — a genuinely different landscape from Tbilisi's usual Kazbegi/Gudauri mountain day trips, in a different direction entirely.", tourCard: { slug: "bridge-dashbashi-full-day-tour", title: "From Tbilisi: Dashbashi Canyon and Diamond Bridge Day Trip", description: "A day trip to Dashbashi Canyon and the diamond bridge.", price: "From $73", duration: "8 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/d11c661ba105f67739dc3a586def180d16dab12457af46780da8e9dab72929a6.jpg" } },
                    { title: "Alternative: Private Tour", content: "A private version of the same canyon and glass bridge visit, worth it if you want your own schedule and vehicle.", tourCard: { slug: "dashbashi-canyon-glass-bridge-private-tour-from", title: "Dashbashi Canyon & Glass Bridge Private Tour from Tbilisi", description: "A private tour of Dashbashi Canyon and the glass bridge.", price: "From $245", duration: "8 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/7f70607602a25a7504125ee0ec609e8a9774de69516fd83fbe249461f9af60d2.jpeg" } },
                    { title: "Practical Tips", content: "The glass bridge is a popular photo spot — go early in the day for better light and fewer other visitors waiting for photos." }
                ],
                faqs: [
                    { q: "What is Dashbashi Canyon known for?", a: "A dramatic gorge with a glass-floored 'diamond bridge' suspended above it." },
                    { q: "Is Dashbashi Canyon different from Kazbegi?", a: "Yes, it's in a different direction from Tbilisi and offers a canyon landscape rather than high mountains." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "What is Dashbashi Canyon known for?", "acceptedAnswer": { "@type": "Answer", "text": "A dramatic gorge with a glass-floored diamond bridge." } }
                ] },
            };

        case "is-vani-sulfur-baths-tour-worth-it-kutaisi":
            return {
                title: "Is the Vani Museum and Sulfur Baths Tour Worth It from Kutaisi?",
                seoTitle: "Vani Sulfur Baths Tour from Kutaisi 2026 | Honest Review",
                description: "An honest look at the Vani Museum and sulfur baths day trip from Kutaisi, pairing ancient Colchian archeology with a soak, distinct from the city's cave and canyon circuit.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/c6ff7caa8f8dd860b09df884da02a7d0cac401231f88735031c42a8d1da5f2cb.jpg",
                sections: [
                    { title: "The Short Answer", content: "Vani was a major ancient Colchian city, and its museum holds genuine archaeological finds predating the Greek-myth Golden Fleece legends associated with the region — paired here with a relaxing sulfur bath soak, a nice mix of history and relaxation distinct from Kutaisi's usual cave-and-canyon day trips.", tourCard: { slug: "from-kutaisi-vani-sulfur-baths-day-trip", title: "From Kutaisi: Vani Museum & Sulfur Baths Day Trip", description: "A day trip combining the Vani archeological museum with sulfur baths.", price: "From $91", duration: "8 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/c6ff7caa8f8dd860b09df884da02a7d0cac401231f88735031c42a8d1da5f2cb.jpg" } },
                    { title: "Practical Tips", content: "Bring a swimsuit for the sulfur baths portion of the day, and note the mineral water has a distinct sulfur smell that lingers briefly on skin." },
                ],
                faqs: [
                    { q: "Is the Vani and sulfur baths tour worth it from Kutaisi?", a: "Yes, for a genuine mix of ancient Colchian history and relaxation, different from the city's usual cave and canyon day trips." },
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "Is the Vani and sulfur baths tour worth it from Kutaisi?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, for a genuine mix of ancient history and relaxation." } },
                ] },
            };

        case "is-racha-wine-tour-worth-it-kutaisi":
            return {
                title: "Is the Racha Wine Tasting Day Trip Worth It from Kutaisi?",
                seoTitle: "Racha Wine Tour from Kutaisi 2026 | Honest Review",
                description: "An honest look at the Racha day trip with wine tasting from Kutaisi, a mountainous wine sub-region genuinely different from the flatter Kakheti wine country most visitors associate with Georgian wine.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/6f12281d0ccd3cfff5ffae7bcc882ca97ba70a62e471e7cdcf2fb6cc634d722d.png",
                sections: [
                    { title: "The Short Answer", content: "Racha is a mountainous wine sub-region known for semi-sweet wines made from the Alexandrouli and Mujuretuli grapes, genuinely different terrain and grape varieties from the flatter, more famous Kakheti wine country — worth it for travelers wanting to go beyond the standard wine-tour circuit.", tourCard: { slug: "from-kutaisi-racha-day-trip-with-wine-testing", title: "From Kutaisi: Racha Day Trip with Wine Tasting", description: "A day trip to the Racha mountain wine region with wine tasting.", price: "From $377", duration: "9 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/6f12281d0ccd3cfff5ffae7bcc882ca97ba70a62e471e7cdcf2fb6cc634d722d.png" } },
                    { title: "Practical Tips", content: "Mountain roads into Racha can be winding, so this suits travelers comfortable with a longer, scenic drive." },
                ],
                faqs: [
                    { q: "Is the Racha wine tour worth it from Kutaisi?", a: "Yes, for travelers wanting to try a genuinely different wine region and grape variety beyond the standard Kakheti circuit." },
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "Is the Racha wine tour worth it from Kutaisi?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, for a genuinely different wine region and grape variety beyond Kakheti." } },
                ] },
            };

        case "is-dmanisi-archeology-tour-worth-it-tbilisi":
            return {
                title: "Is the Dmanisi Archeology Tour Worth It from Tbilisi?",
                seoTitle: "Dmanisi Archeology Tour from Tbilisi 2026 | Honest Review",
                description: "An honest look at the Dmanisi archeology, Bolnisi, and Sioni day tour from Tbilisi, a globally significant early-human archeological site distinct from Georgia's medieval monasteries and canyons.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/b277f5ba6f182b0b0f0efe22486291c9becd54221d665ca71c148a99e430d867.jpeg",
                sections: [
                    { title: "The Short Answer", content: "Dmanisi is home to some of the oldest early-human fossils found outside Africa, a globally significant archeological site that's a completely different era and subject from Georgia's medieval monasteries, wine regions, and canyons — genuinely worth it for travelers interested in ancient human history.", tourCard: { slug: "from-tbilisi-dmanisi-archeology-bolnisi-sioni", title: "From Tbilisi: Dmanisi Archeology, Bolnisi & Sioni Tour", description: "A day tour to the Dmanisi archeological site with stops at Bolnisi and Sioni.", price: "From $146", duration: "9 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/b277f5ba6f182b0b0f0efe22486291c9becd54221d665ca71c148a99e430d867.jpeg" } },
                    { title: "Practical Tips", content: "This appeals specifically to travelers with a genuine interest in archeology and early human history, more than scenic sightseeing." },
                ],
                faqs: [
                    { q: "Is the Dmanisi archeology tour worth it from Tbilisi?", a: "Yes, for travelers interested in globally significant early-human history, a completely different subject from Georgia's usual medieval sightseeing." },
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "Is the Dmanisi archeology tour worth it from Tbilisi?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, for genuine interest in globally significant early-human history." } },
                ] },
            };

        case "is-chiatura-cable-cars-tour-worth-it-tbilisi":
            return {
                title: "Is the Chiatura Cable Cars Tour Worth It from Tbilisi?",
                seoTitle: "Chiatura Cable Cars Tour from Tbilisi 2026 | Honest Review",
                description: "An honest look at the Chiatura cable cars and Katskhi Pillar family tour from Tbilisi, a unique Soviet-era industrial landmark distinct from Georgia's medieval monasteries.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/a879c4124a202db38c8ab909a67c3639be258990064697f0b7c88cead56bdd48.jpg",
                sections: [
                    { title: "The Short Answer", content: "Chiatura's rickety Soviet-era cable cars, still in daily use by locals, are a genuinely unique industrial curiosity, paired here with the striking Katskhi Pillar monastery — a completely different kind of day from Georgia's wine and monastery circuits.", tourCard: { slug: "from-tbilisi-chiatura-cable-cars-katskhi-family", title: "From Tbilisi: Chiatura Cable Cars & Katskhi Family Tour", description: "A day tour to Chiatura's Soviet-era cable cars and Katskhi Pillar.", price: "From $510", duration: "11 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/a879c4124a202db38c8ab909a67c3639be258990064697f0b7c88cead56bdd48.jpg" } },
                    { title: "Practical Tips", content: "The cable cars are genuinely old infrastructure, not a tourist ride, so set expectations as an authentic industrial curiosity rather than a polished attraction." },
                ],
                faqs: [
                    { q: "Is the Chiatura cable cars tour worth it from Tbilisi?", a: "Yes, for a genuinely unique Soviet-era industrial curiosity, a completely different day from Georgia's usual monastery and wine sightseeing." },
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "Is the Chiatura cable cars tour worth it from Tbilisi?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, for a genuinely unique Soviet-era industrial curiosity." } },
                ] },
            };

        case "is-electric-mountain-biking-worth-it-tbilisi":
            return {
                title: "Is Electric Mountain Biking Worth It around Tbilisi?",
                seoTitle: "Tbilisi Electric Mountain Biking 2026 | Honest Review",
                description: "An honest look at the electric mountain biking tour around Tbilisi, a motor-assisted outdoor activity distinct from the city's standard bike tours.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/8e48300af5db3ca5.jpeg",
                sections: [
                    { title: "The Short Answer", content: "E-bikes let you cover hillier terrain around Tbilisi than a standard bike tour without requiring serious cycling fitness, a good middle-ground option between a casual city bike ride and a demanding mountain-bike route.", tourCard: { slug: "electric-mountain-biking-around-tbilisi", title: "Electric Mountain Biking Around Tbilisi", description: "An electric mountain biking tour through the hills around Tbilisi.", price: "From $150", duration: "4 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/8e48300af5db3ca5.jpeg" } },
                    { title: "Practical Tips", content: "No advanced cycling fitness is needed — the motor assist handles the harder climbs, making this accessible to a wider range of riders." },
                ],
                faqs: [
                    { q: "Is electric mountain biking worth it around Tbilisi?", a: "Yes, for covering hillier terrain without requiring serious cycling fitness, a good middle ground between casual and demanding bike tours." },
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "Is electric mountain biking worth it around Tbilisi?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, for covering hillier terrain without requiring serious cycling fitness." } },
                ] },
            };

        case "is-urbex-tour-worth-it-tbilisi":
            return {
                title: "Is the Abandoned Wonders Urbex Tour Worth It in Tbilisi?",
                seoTitle: "Tbilisi Urbex Tour 2026 | Honest Review",
                description: "An honest look at Tbilisi's abandoned wonders urbex tour, a niche urban-exploration activity distinct from the Old Town's standard walking tours.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/d4d248cba52aeb8d7ca3a61bbcf8f257940f4777ed61ad27a5b0ef8d49bb8cf3.png",
                sections: [
                    { title: "The Short Answer", content: "Tbilisi has several striking abandoned Soviet-era buildings, and this urban-exploration tour gives access to them with a guide, a genuinely different kind of activity from the Old Town's churches and wine bars — a niche interest, but a memorable one for those drawn to it.", tourCard: { slug: "a-journey-through-abandoned-wonders-tbilisi-urbex", title: "A Journey Through Abandoned Wonders: Tbilisi Urbex", description: "A guided urban-exploration tour of Tbilisi's abandoned buildings.", price: "From $169", duration: "4 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/d4d248cba52aeb8d7ca3a61bbcf8f257940f4777ed61ad27a5b0ef8d49bb8cf3.png" } },
                    { title: "Practical Tips", content: "Wear sturdy closed-toe shoes, since abandoned sites often have uneven or debris-covered floors." },
                ],
                faqs: [
                    { q: "Is the urbex tour worth it in Tbilisi?", a: "Yes, for travelers drawn to urban exploration and Soviet-era architecture, a genuinely different activity from standard Old Town sightseeing." },
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "Is the urbex tour worth it in Tbilisi?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, for a genuinely different niche activity exploring abandoned Soviet-era buildings." } },
                ] },
            };

        case "is-khevsureti-jeep-tour-worth-it-tbilisi":
            return {
                title: "Is the Khevsureti 3-Day Private Jeep Tour Worth It from Tbilisi?",
                seoTitle: "Khevsureti Jeep Tour from Tbilisi 2026 | Honest Review",
                description: "An honest look at the 3-day Khevsureti private jeep tour from Tbilisi, a remote mountain region distinct from the standard Kazbegi and Svaneti circuits.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/4ed83c952bae29c4fb2946abc3d28769314c2e75f70b6de7fec1dfbef84ae274.jpg",
                sections: [
                    { title: "The Short Answer", content: "Khevsureti is a remote, less-visited mountain region with its own distinct medieval fortress villages, genuinely different from the more touristed Kazbegi and Svaneti circuits most Georgia itineraries cover.", tourCard: { slug: "from-tbilisi-3-day-khevsureti-private-jeep", title: "From Tbilisi: 3-Day Khevsureti Private Jeep Tour", description: "A 3-day private jeep tour of the remote Khevsureti mountain region.", price: "From $1040", duration: "3 days", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/4ed83c952bae29c4fb2946abc3d28769314c2e75f70b6de7fec1dfbef84ae274.jpg" } },
                    { title: "Practical Tips", content: "Roads into Khevsureti are rough and seasonal, so confirm current access conditions with the operator before booking, especially outside summer." },
                ],
                faqs: [
                    { q: "Is the Khevsureti jeep tour worth it from Tbilisi?", a: "Yes, for travelers wanting a genuinely remote mountain region beyond the standard Kazbegi and Svaneti circuits." },
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "Is the Khevsureti jeep tour worth it from Tbilisi?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, for a genuinely remote mountain region beyond the standard circuits." } },
                ] },
            };

        case "is-rock-climbing-worth-it-tbilisi":
            return {
                title: "Is the 2-Day Rock Climbing Adventure Worth It from Tbilisi?",
                seoTitle: "Tbilisi Rock Climbing Adventure 2026 | Honest Review",
                description: "An honest look at the 2-day rock climbing adventure from Tbilisi, a serious outdoor-sport activity distinct from the city's horse riding and rafting pages.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/11f64f82638b4aa10075dd1423aec44d336db747eeac7eecc7adae6031368bde.jpeg",
                sections: [
                    { title: "The Short Answer", content: "This 2-day climbing adventure heads to genuine rock-climbing routes outside Tbilisi, a serious outdoor-sport activity with equipment and instruction included, rather than a scenic day trip — worth it specifically for travelers with real climbing interest.", tourCard: { slug: "from-tbilisi-2-day-rock-climbing-adventure-in", title: "From Tbilisi: 2-Day Rock Climbing Adventure", description: "A 2-day rock climbing adventure in the mountains near Tbilisi.", price: "From $975", duration: "2 days", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/11f64f82638b4aa10075dd1423aec44d336db747eeac7eecc7adae6031368bde.jpeg" } },
                    { title: "Practical Tips", content: "Discuss your experience level with the operator in advance, since routes are chosen to match climbing ability." },
                ],
                faqs: [
                    { q: "Is the rock climbing adventure worth it from Tbilisi?", a: "Yes, for travelers with genuine climbing interest wanting real routes with equipment and instruction included." },
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "Is the rock climbing adventure worth it from Tbilisi?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, for travelers with genuine climbing interest." } },
                ] },
            };

        case "is-full-day-rafting-worth-it-borjomi":
            return {
                title: "Is the Full-Day Beginner-Friendly Rafting Trip Worth It in Borjomi?",
                seoTitle: "Borjomi Full-Day Rafting 2026 | Honest Review",
                description: "An honest look at Borjomi's full-day beginner-friendly rafting trip, a more extensive format than the standard one-hour Mtkvari River rafting session.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/dfa89436ff8e96f4830472e0d3616c4f83f224af54aa6422f1218242424df6ac.png",
                sections: [
                    { title: "The Short Answer", content: "This full-day rafting trip covers considerably more river and time than the standard one-hour Mtkvari River session, a fuller rafting day rather than a quick add-on activity — worth it specifically if rafting is the main draw of your trip rather than a short extra.", tourCard: { slug: "rafting-day-trip-beginner-friendly", title: "Rafting Day Trip: Beginner-Friendly", description: "A full-day beginner-friendly rafting trip near Borjomi.", price: "From $494", duration: "8 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/dfa89436ff8e96f4830472e0d3616c4f83f224af54aa6422f1218242424df6ac.png" } },
                    { title: "Practical Tips", content: "No prior rafting experience is needed, but come prepared for a full day on and around the water, not a quick hour-long dip." },
                ],
                faqs: [
                    { q: "Is the full-day rafting trip worth it in Borjomi?", a: "Yes, for travelers who want rafting as the main activity of their day, a fuller experience than the standard one-hour session." },
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "Is the full-day rafting trip worth it in Borjomi?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, for a fuller rafting experience than the standard one-hour session." } },
                ] },
            };

        case "is-mount-kazbek-climb-worth-it-kazbegi":
            return {
                title: "Is the Mount Kazbek Guided Climb Worth It?",
                seoTitle: "Mount Kazbek Climb 2026 | Honest Review",
                description: "An honest look at the 7-day guided climb of Mount Kazbek, a serious mountaineering expedition distinct from the region's day hikes and horse riding tours.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/5d6f481b2bc8f3f19519c8f262675d87e722833ed0c9940ba56ce3b8020fd0dd.jpg",
                sections: [
                    { title: "The Short Answer", content: "Mount Kazbek, one of Georgia's highest peaks at over 5,000 meters, requires a genuine multi-day mountaineering expedition with acclimatization days, a completely different undertaking from the region's day hikes, horse rides, and 4x4 valley tours.", tourCard: { slug: "from-stepantsminda-mount-kazbek-guided-climb-with", title: "From Stepantsminda: Mount Kazbek Guided Climb", description: "A 7-day guided mountaineering expedition to the summit of Mount Kazbek.", price: "From $2600", duration: "7 days", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/5d6f481b2bc8f3f19519c8f262675d87e722833ed0c9940ba56ce3b8020fd0dd.jpg" } },
                    { title: "Practical Tips", content: "This requires genuine mountaineering fitness and ideally prior high-altitude experience — be honest about your fitness level when booking." },
                ],
                faqs: [
                    { q: "Is the Mount Kazbek climb worth it?", a: "Yes, for travelers with real mountaineering fitness and ambition wanting a genuine high-altitude summit expedition." },
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "Is the Mount Kazbek climb worth it?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, for a genuine high-altitude mountaineering expedition." } },
                ] },
            };

        case "is-heshkili-huts-tetnuldi-tour-worth-it-mestia":
            return {
                title: "Is the Heshkili Huts and Tetnuldi Mountain Tour Worth It in Mestia?",
                seoTitle: "Mestia Tetnuldi Tour 2026 | Honest Review",
                description: "An honest look at the Heshkili Huts and Tetnuldi Mountain tour from Mestia, a lesser-visited Svaneti landscape distinct from the usual Ushguli and Koruldi Lakes day trips.",
                heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/5cc028e492769ba610a8c3901b484f7ba9d4c8bc71dda5996cd851c1a543a196.jpg",
                sections: [
                    { title: "The Short Answer", content: "Heshkili Huts and the Tetnuldi Mountain area are quieter, less-visited corners of Svaneti than Ushguli or Koruldi Lakes, giving genuine mountain scenery without the crowds that gather at the region's more famous spots.", tourCard: { slug: "from-mestia-heshkili-huts-and-tetnuldi-mountain", title: "From Mestia: Heshkili Huts and Tetnuldi Mountain", description: "A tour to the Heshkili Huts and Tetnuldi Mountain area from Mestia.", price: "From $169", duration: "5 hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/5cc028e492769ba610a8c3901b484f7ba9d4c8bc71dda5996cd851c1a543a196.jpg" } },
                    { title: "Practical Tips", content: "Best booked after you've already seen Ushguli and Koruldi Lakes, since this is specifically a quieter alternative landscape." },
                ],
                faqs: [
                    { q: "Is the Heshkili Huts and Tetnuldi tour worth it in Mestia?", a: "Yes, for travelers wanting quieter Svaneti scenery away from the crowds at Ushguli and Koruldi Lakes." },
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "Is the Heshkili Huts and Tetnuldi tour worth it in Mestia?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, for quieter Svaneti scenery away from the main crowds." } },
                ] },
            };

        default:
            return null;
    }
}

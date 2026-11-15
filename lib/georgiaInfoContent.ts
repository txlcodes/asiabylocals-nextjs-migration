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

        default:
            return null;
    }
}

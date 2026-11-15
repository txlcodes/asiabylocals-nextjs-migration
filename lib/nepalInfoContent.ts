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

        default:
            return null;
    }
}

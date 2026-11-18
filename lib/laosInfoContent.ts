import { CityInfoData } from './cityInfoContent';

export function getLaosInfoContent(slug: string): CityInfoData | null {
    switch (slug) {
        case "best-kuang-si-waterfall-tour-luang-prabang":
            return {
                title: "Which Is the Best Kuang Si Waterfall Tour from Luang Prabang?",
                seoTitle: "Best Kuang Si Waterfall Tour 2026 | Honest Comparison",
                description: "Compare real Kuang Si Waterfall tours from Luang Prabang — from a $33 half-day visit to combos with jungle rafting, picnic lunch, sunset cruises, and village treks.",
                heroImage: "https://images.asiabylocals.com/asiabylocals/tours/luang-prabang/kuang-si.webp",
                sections: [
                    { title: "The Short Answer", content: "Kuang Si's tiered turquoise pools are Luang Prabang's single biggest draw, and most tours simply differ in what else gets bundled in — rafting, a picnic lunch, or a sunset cruise on the way back.", tourCard: { slug: "waterfall-morning-morning-tour", title: "Half Day to Kuang Si Waterfall - Morning / Afternoon", description: "A straightforward half-day visit to Kuang Si Waterfall.", price: "From $33", duration: "4.5 hours" } },
                    { title: "Cheapest: Half-Day Waterfall Visit", content: "At $33, this covers just the waterfall visit without extra activities — the simplest way to see Kuang Si.", tourCard: { slug: "waterfall-morning-morning-tour", title: "Half Day to Kuang Si Waterfall - Morning / Afternoon", description: "The budget half-day waterfall visit.", price: "From $33", duration: "4.5 hours" } },
                    { title: "Best for Adventure: Jungle Rafting Combo", content: "This adds jungle rafting to the waterfall visit, a more active option than simply walking the pools.", tourCard: { slug: "waterfall-prabang-guided-tour", title: "Luang Prabang: Kuang Si Waterfall Jungle Rafting", description: "Kuang Si combined with jungle rafting.", price: "From $38", duration: "40 minutes" } },
                    { title: "Best with Lunch: Picnic at the Falls", content: "This version includes a picnic lunch at the waterfall, good for making a full relaxed day of it rather than rushing back.", tourCard: { slug: "luang-prabang-picnic-guided-tour", title: "Luang Prabang: Kuang Si Waterfall Picnic Lunch", description: "A waterfall visit with a picnic lunch included.", price: "From $65", duration: "2 hours" } },
                    { title: "Best Combo: + Sunset Cruise", content: "Pairs the waterfall with a Mekong sunset cruise afterward, bundling two of Luang Prabang's best half-day activities into one outing.", tourCard: { slug: "luang-prabang-waterfalls-sunset-tour", title: "Luang Prabang: Afternoon Kuang Si Waterfalls & Sunset Cruise", description: "Kuang Si Waterfall combined with a Mekong sunset cruise.", price: "From $42", duration: "5 hours" } },
                    { title: "Most Active: Village & Forest Trek + Sunset Cruise", content: "For travellers who want more than a quick waterfall stop, this adds a village and forest trek before finishing with a sunset cruise.", tourCard: { slug: "luang-prabang-sunset-sunset-tour", title: "Kuang Si Falls: Village & Forest Trek with Sunset Cruise", description: "A trekking-focused route to Kuang Si with a sunset cruise finish.", price: "From $68", duration: "9 hours" } },
                    { title: "Practical Tips", content: "Morning visits beat the crowds and the heat — the falls get busy with day-trippers by midday. Bring a swimsuit; the lower pools are open for swimming." }
                ],
                faqs: [
                    { q: "What is the best Kuang Si Waterfall tour from Luang Prabang?", a: "A half-day visit suits most travellers; add rafting or a village trek for a more active day." },
                    { q: "Can you swim at Kuang Si Waterfall?", a: "Yes, the lower tiered pools are open for swimming." },
                    { q: "What's the cheapest Kuang Si Waterfall tour?", a: "A basic half-day visit without add-on activities." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "What is the best Kuang Si Waterfall tour?", "acceptedAnswer": { "@type": "Answer", "text": "A half-day visit suits most travellers." } },
                    { "@type": "Question", "name": "Can you swim at Kuang Si?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, the lower tiered pools are open for swimming." } }
                ] },
            };

        case "best-alms-giving-ceremony-tour-luang-prabang":
            return {
                title: "Which Is the Best Alms Giving Ceremony Tour in Luang Prabang?",
                seoTitle: "Best Alms Giving Ceremony Tour 2026 | Honest Comparison",
                description: "Compare real alms giving (Tak Bat) ceremony tours in Luang Prabang — from a basic $24 ceremony and market visit to breakfast and Kuang Si combos.",
                heroImage: "https://images.asiabylocals.com/asiabylocals/tours/luang-prabang/alms.webp",
                sections: [
                    { title: "The Short Answer", content: "The dawn alms-giving ceremony, where saffron-robed monks walk the streets collecting rice from kneeling locals, is one of Luang Prabang's most photographed traditions. Most tours pair it with the morning market.", tourCard: { slug: "luang-prabang-alms-giving-ceremony-morning-market", title: "Luang Prabang: Alms Giving Ceremony & Morning Market Tour", description: "The ceremony paired with a morning market visit.", price: "From $24", duration: "3 hours" } },
                    { title: "Cheapest: Ceremony & Morning Market", content: "At $24, this is the standard entry-level way to experience the ceremony respectfully with a guide.", tourCard: { slug: "luang-prabang-alms-giving-ceremony-morning-market", title: "Luang Prabang: Alms Giving Ceremony & Morning Market Tour", description: "The budget ceremony and market combo.", price: "From $24", duration: "3 hours" } },
                    { title: "Best with Offering Set: Almsgiving with Lao Offering", content: "This version includes a proper Lao offering set if you want to participate in giving alms yourself rather than just observing.", tourCard: { slug: "luang-prabang-almsgiving-guided-tour", title: "Luang Prabang: Almsgiving Ceremony with Lao Offering Set", description: "The ceremony with an offering set included for active participation.", price: "From $33", duration: "1 hour" } },
                    { title: "Best with Breakfast: Ceremony & Breakfast", content: "Pairs the early dawn ceremony with breakfast afterward, useful since the ceremony starts very early and you'll want food soon after.", tourCard: { slug: "luang-prabang-alms-giving-ceremony-breakfast", title: "Luang Prabang: Alms Giving Ceremony & Breakfast", description: "The ceremony followed by breakfast.", price: "From $46", duration: "2.5 hours" } },
                    { title: "Best Combo: Ceremony + Kuang Si Falls", content: "Combines the dawn ceremony with a full day trip to Kuang Si Waterfall, efficiently using the early start.", tourCard: { slug: "luang-prabang-ceremony-guided-tour", title: "Luang Prabang: Almsgiving Ceremony and Kuang Si Falls Tour", description: "The ceremony combined with a Kuang Si Falls day trip.", price: "From $97", duration: "8 hours" } },
                    { title: "Practical Tips", content: "Dress modestly (shoulders and knees covered), stay quiet and respectful, and don't use flash photography or get too close to the monks — this is a genuine religious practice, not a staged show." }
                ],
                faqs: [
                    { q: "What is the best alms giving ceremony tour in Luang Prabang?", a: "A ceremony-plus-market tour suits most visitors; add an offering set if you want to participate." },
                    { q: "How should I dress for the alms giving ceremony?", a: "Modestly — shoulders and knees covered, and stay quiet and respectful throughout." },
                    { q: "What time does the alms giving ceremony happen?", a: "At dawn, typically around 5:30-6am." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "What is the best alms giving ceremony tour?", "acceptedAnswer": { "@type": "Answer", "text": "A ceremony-plus-market tour suits most visitors." } },
                    { "@type": "Question", "name": "How should I dress?", "acceptedAnswer": { "@type": "Answer", "text": "Modestly, with shoulders and knees covered." } }
                ] },
            };

        case "best-mekong-sunset-cruise-luang-prabang":
            return {
                title: "Which Is the Best Mekong Sunset Cruise in Luang Prabang?",
                seoTitle: "Best Mekong Sunset Cruise Luang Prabang 2026 | Comparison",
                description: "Compare real Mekong sunset cruises in Luang Prabang — from a $25 cruise with Lao food and drink to tasting dinners and Baci ceremony combos.",
                heroImage: "https://images.asiabylocals.com/asiabylocals/tours/luang-prabang/sunset-cruise.webp",
                sections: [
                    { title: "The Short Answer", content: "A Mekong sunset cruise is one of the simplest, most relaxed ways to end a day in Luang Prabang — most versions include some food and drink, and the differences come down to how much is included.", tourCard: { slug: "luang-prabang-two-river-sunset-cruise-lao-food", title: "Luang Prabang: Two-River Sunset Cruise, Lao Food & Drink", description: "A sunset cruise covering two rivers with Lao food and drink.", price: "From $25", duration: "2 hours" } },
                    { title: "Cheapest: Two-River Cruise with Food & Drink", content: "At $25, this covers the river scenery plus food and drink at a good value.", tourCard: { slug: "luang-prabang-two-river-sunset-cruise-lao-food", title: "Luang Prabang: Two-River Sunset Cruise, Lao Food & Drink", description: "The budget-friendly sunset cruise option.", price: "From $25", duration: "2 hours" } },
                    { title: "Best with Snacks: Cruise with Snacks", content: "A simple, lighter version with snacks rather than a full meal — good if you just want the scenery without a heavy food component.", tourCard: { slug: "luang-prabang-cruise-sunset-tour", title: "Luang Prabang: Mekong River Sunset Cruise with Snacks", description: "A lighter sunset cruise with snacks.", price: "From $45", duration: "2 hours" } },
                    { title: "Best for Dinner: Cruise + Tasting Dinner", content: "This upgrades to a full tasting dinner on board, turning the cruise into a proper evening meal rather than just a scenic ride.", tourCard: { slug: "luang-prabang-prabang-sunset-tour", title: "Luang Prabang: Mekong Sunset Cruise & Lao Tasting Dinner", description: "A sunset cruise with a full Lao tasting dinner.", price: "From $57", duration: "2 hours" } },
                    { title: "Best for Culture: Cruise + Baci Ceremony", content: "Adds a traditional Baci blessing ceremony to the cruise, a genuine Lao spiritual tradition rather than just scenery and food.", tourCard: { slug: "luang-prabang-ceremony-boat-tour", title: "Luang Prabang: Mekong River Cruise with Baci Ceremony", description: "A sunset cruise combined with a traditional Baci ceremony.", price: "From $440", duration: "3.5 hours" } },
                    { title: "Practical Tips", content: "Book ahead in high season (November-February) — sunset cruise boats fill up, and the best light is roughly 30-40 minutes before actual sunset." }
                ],
                faqs: [
                    { q: "What is the best Mekong sunset cruise in Luang Prabang?", a: "A two-river cruise with food and drink is the best-value standard option." },
                    { q: "How long is a typical sunset cruise?", a: "Usually around 2 hours." },
                    { q: "Do sunset cruises include food?", a: "Most do — ranging from light snacks to full tasting dinners depending on the option." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "What is the best Mekong sunset cruise?", "acceptedAnswer": { "@type": "Answer", "text": "A two-river cruise with food and drink is the best-value option." } },
                    { "@type": "Question", "name": "How long is a sunset cruise?", "acceptedAnswer": { "@type": "Answer", "text": "Usually around 2 hours." } }
                ] },
            };

        case "best-pak-ou-caves-tour-luang-prabang":
            return {
                title: "Which Is the Best Pak Ou Caves Tour from Luang Prabang?",
                seoTitle: "Best Pak Ou Caves Tour 2026 | Honest Comparison",
                description: "Compare real Pak Ou Caves tours from Luang Prabang — from a $59 half-day Mekong cruise to combos with Kuang Si Falls and village visits.",
                heroImage: "https://images.asiabylocals.com/asiabylocals/tours/luang-prabang/pak-ou.webp",
                sections: [
                    { title: "The Short Answer", content: "Pak Ou Caves house thousands of Buddha statues left by pilgrims over centuries, reached by boat up the Mekong. Most tours are half-day cruises, with some extending into full-day combos with Kuang Si Falls.", tourCard: { slug: "luang-prabang-afternoon-morning-tour", title: "Half Day Mekong Cruise to Pak Ou Caves-Morning or Afternoon", description: "A half-day Mekong cruise to Pak Ou Caves.", price: "From $59", duration: "5.5 hours" } },
                    { title: "Cheapest: Half-Day Cruise", content: "At $59, this is the standard, lowest-priced way to visit the caves by boat.", tourCard: { slug: "luang-prabang-afternoon-morning-tour", title: "Half Day Mekong Cruise to Pak Ou Caves-Morning or Afternoon", description: "The budget half-day cave cruise.", price: "From $59", duration: "5.5 hours" } },
                    { title: "Best with Lunch: Day Cruise with Lunch", content: "A full-day version that includes lunch, giving more time at the caves and on the river without rushing back for a meal.", tourCard: { slug: "cave-statues-boat-tour", title: "Pak Ou Caves: Day Cruise with 4,000+ Buddha Statues & Lunch", description: "A full-day cave cruise with lunch included.", price: "From $65", duration: "1 day" } },
                    { title: "Best Combo: + Kuang Si Waterfalls", content: "Combines the caves with Kuang Si Waterfall in one day, efficient if you only have one day to cover both of Luang Prabang's biggest half-day trips.", tourCard: { slug: "cave-waterfalls-boat-tour", title: "Luang Prabang: Pak Ou Caves Cruise & Kuang Si Waterfalls", description: "Pak Ou Caves combined with Kuang Si Waterfalls in one day.", price: "From $72", duration: "1 day" } },
                    { title: "Best for Culture: + Village Visit", content: "Adds a village visit along the river to the caves cruise, giving more cultural context beyond just the caves themselves.", tourCard: { slug: "pak-ou-caves-guided-tour-with-village-visit", title: "Pak Ou Caves Guided Tour with Village Visit", description: "The caves cruise combined with a riverside village visit.", price: "From $195", duration: "1 day" } },
                    { title: "Practical Tips", content: "The boat ride itself up the Mekong is as much a highlight as the caves — scenic limestone cliffs and riverside villages line the route both ways." }
                ],
                faqs: [
                    { q: "What is the best Pak Ou Caves tour from Luang Prabang?", a: "A half-day cruise suits most visitors; combine with Kuang Si Falls for a fuller day." },
                    { q: "How do you get to Pak Ou Caves?", a: "By boat up the Mekong River from Luang Prabang, roughly 2 hours each way." },
                    { q: "What's inside Pak Ou Caves?", a: "Thousands of Buddha statues left by pilgrims and locals over centuries." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "What is the best Pak Ou Caves tour?", "acceptedAnswer": { "@type": "Answer", "text": "A half-day cruise suits most visitors." } },
                    { "@type": "Question", "name": "How do you get to Pak Ou Caves?", "acceptedAnswer": { "@type": "Answer", "text": "By boat up the Mekong River." } }
                ] },
            };

        case "best-cooking-class-luang-prabang":
            return {
                title: "Which Is the Best Cooking Class in Luang Prabang?",
                seoTitle: "Best Cooking Class Luang Prabang 2026 | Honest Comparison",
                description: "Compare real Lao cooking classes in Luang Prabang — farm-to-table, vegetarian, royal palace, and market-to-Mekong boat versions.",
                heroImage: "https://images.asiabylocals.com/asiabylocals/tours/luang-prabang/cooking.webp",
                sections: [
                    { title: "The Short Answer", content: "Lao cooking classes in Luang Prabang usually start with a market visit, then move to a farm or riverside kitchen — the differences come down to setting (farm, former royal palace, boat) and whether vegetarian options are the focus.", tourCard: { slug: "luang-prabang-authentic-lao-farm-to-table-cooking", title: "Luang Prabang: Authentic Lao Farm-to-Table Cooking Class", description: "A farm-to-table cooking class covering market shopping through cooking.", price: "From $59", duration: "4 hours" } },
                    { title: "Cheapest Standard Option: Farm-to-Table Class", content: "At $59, this is the standard, most straightforward farm-based class.", tourCard: { slug: "luang-prabang-authentic-lao-farm-to-table-cooking", title: "Luang Prabang: Authentic Lao Farm-to-Table Cooking Class", description: "The budget-friendly standard farm cooking class.", price: "From $59", duration: "4 hours" } },
                    { title: "Best for Vegetarians: Vegetarian Cooking Class", content: "A dedicated vegetarian version covering the same core techniques without meat-based dishes.", tourCard: { slug: "luang-prabang-authentic-lao-vegetarian-cooking", title: "Luang Prabang: Authentic Lao Vegetarian Cooking Class", description: "A vegetarian-focused Lao cooking class.", price: "From $67", duration: "4 hours" } },
                    { title: "Best for History: Former Royal Palace Class", content: "This runs at the former Royal Palace grounds, adding a historical setting to the cooking experience itself.", tourCard: { slug: "palace-royal-food-tour", title: "Luang Prabang: Cooking Class at the Former Royal Palace", description: "A cooking class held at the former Royal Palace.", price: "From $72", duration: "4 hours" } },
                    { title: "Most Scenic: Market-to-Mekong Boat Class", content: "This version takes the market shopping and cooking onto a boat on the Mekong, a genuinely different setting from a standard land-based kitchen.", tourCard: { slug: "luang-prabangmarket-to-mekong-river-boat-lao", title: "Luang Prabang: Market-to-Mekong River boat Lao Cooking Class", description: "A cooking class combining market shopping with cooking aboard a Mekong boat.", price: "From $90", duration: "5 hours" } },
                    { title: "Practical Tips", content: "Most classes include a morning market visit as the first step — arrive on time since markets wind down by mid-morning." }
                ],
                faqs: [
                    { q: "What is the best cooking class in Luang Prabang?", a: "A farm-to-table class suits most visitors; vegetarian and boat-based versions are available too." },
                    { q: "Do Luang Prabang cooking classes include a market visit?", a: "Yes, most start with a morning market visit to shop for ingredients." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "What is the best cooking class in Luang Prabang?", "acceptedAnswer": { "@type": "Answer", "text": "A farm-to-table class suits most visitors." } },
                    { "@type": "Question", "name": "Do classes include a market visit?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, most start with a morning market visit." } }
                ] },
            };

        case "best-food-tour-luang-prabang":
            return {
                title: "Which Is the Best Food Tour in Luang Prabang?",
                seoTitle: "Best Food Tour Luang Prabang 2026 | Honest Comparison",
                description: "Compare real food tours in Luang Prabang — all offering 15+ tastings, differing in storytelling angle and bakery/market stops.",
                heroImage: "https://images.asiabylocals.com/asiabylocals/tours/luang-prabang/food-tour.webp",
                sections: [
                    { title: "The Short Answer", content: "Luang Prabang's food tours mostly share the same 15+ tastings format at local stalls and eateries — the differences are in framing (hidden gems/local stories, bakery stops, or unlimited beer) rather than drastically different stops.", tourCard: { slug: "luang-prabang-tastings-food-tour", title: "Luang Prabang: Mekong Meals Food Tour with 15+ Tastings", description: "A food tour with 15+ tastings across local spots.", price: "From $59", duration: "4 hours" } },
                    { title: "Best for Storytelling: Hidden Food Gems & Local Stories", content: "This version leans into the stories behind each dish and stall, good for travellers who want context along with the food.", tourCard: { slug: "luang-prabang-hidden-food-gems-local-stories-15", title: "Luang Prabang: Hidden Food Gems, Local Stories & 15 Tastings", description: "A food tour emphasizing stories behind each dish.", price: "From $59", duration: "4 hours" } },
                    { title: "Best with Bakery Stop: Plates Food Tour", content: "Adds a dedicated bakery visit to the standard tasting format, a nod to Luang Prabang's French colonial baking heritage.", tourCard: { slug: "luang-prabang-food-food-tour", title: "Luang Prabang: Plates Food Tour, 15+ Tastings & Bakery Visit", description: "A food tour including a bakery stop.", price: "From $59", duration: "4 hours" } },
                    { title: "Most Social: Unlimited Beer Food Tour by Tuk-Tuk", content: "This version adds unlimited beer and tuk-tuk transport between stops, a more social, lower-key version of the format.", tourCard: { slug: "luang-prabang-unlimited-food-tour", title: "Lang Prabang Food tour unlimited beers by Tuk-tuk excursion", description: "A tuk-tuk food tour with unlimited beer included.", price: "From $143", duration: "3 hours" } },
                    { title: "Practical Tips", content: "Come hungry but not starving — 15+ tastings adds up to a full meal's worth of food by the end." }
                ],
                faqs: [
                    { q: "What is the best food tour in Luang Prabang?", a: "Most offer a similar 15+ tastings format — pick based on framing (storytelling, bakery, or social/beer-focused)." },
                    { q: "How many tastings are typical on a Luang Prabang food tour?", a: "15 or more across multiple local stops." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "What is the best food tour in Luang Prabang?", "acceptedAnswer": { "@type": "Answer", "text": "Most offer a similar 15+ tastings format." } },
                    { "@type": "Question", "name": "How many tastings are typical?", "acceptedAnswer": { "@type": "Answer", "text": "15 or more across multiple local stops." } }
                ] },
            };

        case "best-nong-khiaw-trek-camping-tour-luang-prabang":
            return {
                title: "Which Is the Best Nong Khiaw Trekking & Camping Tour from Luang Prabang?",
                seoTitle: "Best Nong Khiaw Trek & Camping Tour 2026 | Comparison",
                description: "Compare real multi-day Nong Khiaw trekking and camping tours from Luang Prabang — from a 2-day camping trip to a 3-day cloud-camping trek with kayaking.",
                heroImage: "https://images.asiabylocals.com/asiabylocals/tours/luang-prabang/nong-khiaw.webp",
                sections: [
                    { title: "The Short Answer", content: "Nong Khiaw's dramatic limestone karst scenery is Laos's answer to Vietnam's Ha Long Bay, and multi-day treks here range from a straightforward 2-day camping trip to a longer 3-day cloud-camping and kayaking adventure.", tourCard: { slug: "luang-prabang-overnight-evening-tour", title: "Luang Prabang: Nong Khiaw Overnight Camping 2 Days 1 Night", description: "A 2-day, 1-night Nong Khiaw camping trip.", price: "From $65", duration: "2 days" } },
                    { title: "Cheapest: 2-Day Overnight Camping", content: "At $65, this is the lowest-priced way to experience Nong Khiaw's scenery with an overnight camp.", tourCard: { slug: "luang-prabang-overnight-evening-tour", title: "Luang Prabang: Nong Khiaw Overnight Camping 2 Days 1 Night", description: "The budget 2-day Nong Khiaw camping trip.", price: "From $65", duration: "2 days" } },
                    { title: "Best with Meals Included: 2-Day Camping Trip with Meals", content: "Same core itinerary as the budget option but with meals bundled in, simpler for travellers who don't want to arrange food separately.", tourCard: { slug: "from-luang-prabang-2-day-nong-khiaw-camping-trip", title: "From Luang Prabang: 2-Day Nong Khiaw Camping Trip with Meals", description: "A 2-day Nong Khiaw camping trip with meals included.", price: "From $91", duration: "2 days" } },
                    { title: "Best Longer Trek: 3-Day Trekking & Camping with Homestay", content: "A longer 3-day version that adds a homestay element, giving a deeper look at local village life beyond just the scenery.", tourCard: { slug: "luang-prabang-trekking-adventure-tour", title: "Luang Prabang: Nong Khiaw 3-Day Trekking & camping, Homstay", description: "A 3-day trek with camping and a homestay.", price: "From $143", duration: "3 days" } },
                    { title: "Most Adventurous: 3-Day Cloud-Camping Trek & Kayaking", content: "This adds Nam Ou River kayaking to the trekking and camping, the most activity-packed version of the Nong Khiaw multi-day trips.", tourCard: { slug: "nong-khiaw-3-day-cloud-camping-trek-nam-ou", title: "Nong Khiaw: 3-Day Cloud-Camping Trek & Nam Ou River Kayaking", description: "A 3-day trek combining camping and river kayaking.", price: "From $137", duration: "3 days" } },
                    { title: "Practical Tips", content: "Nong Khiaw is reachable from Luang Prabang by road or by the scenic Mekong/Nam Ou river boat routes — factor the transfer time into your overall trip length." }
                ],
                faqs: [
                    { q: "What is the best Nong Khiaw trek from Luang Prabang?", a: "A 2-day camping trip suits most visitors; go for the 3-day cloud-camping trek if you want kayaking included too." },
                    { q: "How far is Nong Khiaw from Luang Prabang?", a: "A few hours by road or river boat, depending on the route." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "What is the best Nong Khiaw trek from Luang Prabang?", "acceptedAnswer": { "@type": "Answer", "text": "A 2-day camping trip suits most visitors." } },
                    { "@type": "Question", "name": "How far is Nong Khiaw from Luang Prabang?", "acceptedAnswer": { "@type": "Answer", "text": "A few hours by road or river boat." } }
                ] },
            };

        case "best-slow-boat-transfer-luang-prabang":
            return {
                title: "Which Is the Best Slow Boat Transfer To/From Luang Prabang?",
                seoTitle: "Best Slow Boat Transfer Luang Prabang 2026 | Comparison",
                description: "Compare real slow boat transfer routes to and from Luang Prabang — the classic 2-day Huay Xai route and the newer Chiangrai connection.",
                heroImage: "https://images.asiabylocals.com/asiabylocals/tours/luang-prabang/slow-boat.webp",
                sections: [
                    { title: "The Short Answer", content: "The Mekong slow boat is a classic, scenic way to travel between Luang Prabang and the Thai border region, taking 2 days with an overnight stop — a slower but far more scenic alternative to flying or the bus.", tourCard: { slug: "from-luang-prabang-2-day-slow-boat-transfer-to", title: "From Luang Prabang: 2-Day Slow Boat Transfer to Huay Xai", description: "A classic 2-day slow boat from Luang Prabang to Huay Xai.", price: "From $59", duration: "2 days" } },
                    { title: "Best for Heading to Thailand: Luang Prabang to Huay Xai", content: "This is the standard direction most travellers take, continuing on to Thailand after reaching Huay Xai at the border.", tourCard: { slug: "from-luang-prabang-2-day-slow-boat-transfer-to", title: "From Luang Prabang: 2-Day Slow Boat Transfer to Huay Xai", description: "The standard Luang Prabang to Huay Xai slow boat.", price: "From $59", duration: "2 days" } },
                    { title: "Best for Arriving from Thailand: Huay Xai to Luang Prabang", content: "The reverse direction, for travellers coming from Thailand into Laos via the same scenic river route.", tourCard: { slug: "from-huay-xai-laos-2-day-slow-boat-to", title: "From Huay Xai, Laos: 2-Day Slow Boat to Luang Prabang", description: "The reverse slow boat route from Huay Xai to Luang Prabang.", price: "From $76", duration: "2 days" } },
                    { title: "Best Direct from Thailand: From Chiangrai", content: "This option starts directly from Chiangrai in Thailand, bundling the overland leg to the border with the boat journey itself.", tourCard: { slug: "luang-prabang-chiangrai-boat-tour", title: "From Chiangrai: 2-Day Slow Boat Tour to Luang Prabang, Laos", description: "A 2-day slow boat starting from Chiangrai, Thailand.", price: "From $107", duration: "2 days" } },
                    { title: "Practical Tips", content: "The journey includes an overnight stop at Pakbeng partway through — book accommodation there in advance during peak season, as it fills up with other slow boat travellers on the same schedule." }
                ],
                faqs: [
                    { q: "How long does the slow boat to Luang Prabang take?", a: "2 days, with an overnight stop at Pakbeng partway through." },
                    { q: "Is the slow boat better than flying?", a: "It's far slower but much more scenic — a genuine part of the travel experience rather than just transport." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "How long does the slow boat take?", "acceptedAnswer": { "@type": "Answer", "text": "2 days, with an overnight stop at Pakbeng." } },
                    { "@type": "Question", "name": "Is it better than flying?", "acceptedAnswer": { "@type": "Answer", "text": "Slower but far more scenic." } }
                ] },
            };

        case "best-city-heritage-tour-luang-prabang":
            return {
                title: "Which Is the Best City & Heritage Tour in Luang Prabang?",
                seoTitle: "Best City Heritage Tour Luang Prabang 2026 | Comparison",
                description: "Compare real city and heritage tours in Luang Prabang — from a quick heritage walk to full-day temple, museum, and Phousi Hill combos.",
                heroImage: "https://images.asiabylocals.com/asiabylocals/tours/luang-prabang/heritage.webp",
                sections: [
                    { title: "The Short Answer", content: "Luang Prabang's UNESCO-listed old town is compact and walkable, and city/heritage tours range from a quick introduction to a full day covering temples, the National Museum, and sunset from Mount Phousi.", tourCard: { slug: "luang-prabang-prabang-heritage-tour", title: "Luang Prabang:1 Hour Heritage Tour,snacks,drinks,pick-up", description: "A quick 1-hour heritage tour with snacks and drinks.", price: "From $46", duration: "2 hours" } },
                    { title: "Quickest Introduction: 1-Hour Heritage Tour", content: "A short, efficient orientation to the old town, good if you're short on time but still want local guiding.", tourCard: { slug: "luang-prabang-prabang-heritage-tour", title: "Luang Prabang:1 Hour Heritage Tour,snacks,drinks,pick-up", description: "The quickest heritage orientation tour.", price: "From $46", duration: "2 hours" } },
                    { title: "Best Half-Day Option: City Highlights & Optional Kuang Si", content: "Covers the main city highlights with an optional extension to Kuang Si Falls if you want to combine both in one tour.", tourCard: { slug: "luang-prabang-highlights-guided-tour", title: "Luang Prabang: City Highlights & Optional Kuang Si Falls", description: "A half-day city highlights tour with an optional Kuang Si extension.", price: "From $46", duration: "4.5 hours" } },
                    { title: "Best Full-Day: Temples, Museum & Phousi Hill", content: "A comprehensive full day covering the National Museum, major temples, and finishing with sunset from Mount Phousi.", tourCard: { slug: "temple-prabang-spiritual-tour", title: "Luang Prabang: Temples, Museum, and Phousi Hill Private Tour", description: "A full-day private tour of temples, the museum, and Phousi Hill.", price: "From $123", duration: "6 hours" } },
                    { title: "Most Comprehensive: Full-Day Temples, Phousi & Night Market", content: "The most complete version, adding the night market to the temples and Phousi Hill combo for a full day into evening.", tourCard: { slug: "luang-prabang-full-day-temples-mount-phousi-night", title: "Luang Prabang: Full-day Temples, Mount Phousi & Night Market", description: "A full-day-into-evening tour covering temples, Phousi Hill, and the night market.", price: "From $130", duration: "9 hours" } },
                    { title: "Practical Tips", content: "Mount Phousi's summit gets crowded right before sunset — arrive at least 30 minutes early to get a good viewing spot." }
                ],
                faqs: [
                    { q: "What is the best city tour in Luang Prabang?", a: "A half-day highlights tour suits most visitors; go full-day if you want the National Museum and night market included too." },
                    { q: "Is Mount Phousi worth climbing for sunset?", a: "Yes, though it gets crowded — arrive early for a good spot." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "What is the best city tour in Luang Prabang?", "acceptedAnswer": { "@type": "Answer", "text": "A half-day highlights tour suits most visitors." } },
                    { "@type": "Question", "name": "Is Mount Phousi worth it for sunset?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, though it gets crowded." } }
                ] },
            };

        case "is-weaving-craft-workshop-worth-it-luang-prabang":
            return {
                title: "Are Luang Prabang's Weaving and Craft Workshops Worth It?",
                seoTitle: "Luang Prabang Craft Workshops 2026 | Honest Review",
                description: "An honest look at Luang Prabang's traditional craft workshops — Katu weaving, Saa paper-making, and mulberry lantern-making.",
                heroImage: "https://images.asiabylocals.com/asiabylocals/tours/luang-prabang/weaving.webp",
                sections: [
                    { title: "The Short Answer", content: "Luang Prabang has several hands-on traditional craft workshops, each teaching a different local skill rather than competing on the same experience.", tourCard: { slug: "luang-prabang-workshop-guided-tour", title: "Luang Prabang: Katu Weaving Workshop - 3 hours", description: "A 3-hour traditional Katu weaving workshop.", price: "From $72", duration: "3 hours" } },
                    { title: "Weaving: Katu Weaving Workshop", content: "Learn traditional Katu textile weaving hands-on, a genuine ethnic-minority craft specific to the region.", tourCard: { slug: "luang-prabang-workshop-guided-tour", title: "Luang Prabang: Katu Weaving Workshop - 3 hours", description: "A hands-on Katu weaving workshop.", price: "From $72", duration: "3 hours" } },
                    { title: "Paper-Making: Saa Paper Workshop with Local Artisans", content: "Learn traditional Saa (mulberry bark) paper-making with local artisans, a different craft from weaving.", tourCard: { slug: "luang-prabang-saa-paper-making-workshop-with", title: "Luang Prabang: Saa Paper-Making Workshop with Local Artisans", description: "A hands-on Saa paper-making workshop.", price: "From $271", duration: "4 hours" } },
                    { title: "Lantern-Making: Mulberry Paper and Lantern Making", content: "This combines Saa paper-making with turning the paper into a traditional lantern, a more private, personalized version of the paper craft.", tourCard: { slug: "luang-prabang-mulberry-private-tour", title: "Luang Prabang: Private Mulberry Saa Paper and Lantern Making", description: "A private workshop combining paper-making with lantern crafting.", price: "From $270", duration: "4 hours" } },
                    { title: "Practical Tips", content: "These are genuinely hands-on, not just demonstrations — you'll leave with something you made yourself, which makes them a good alternative to generic souvenir shopping." }
                ],
                faqs: [
                    { q: "Are Luang Prabang's craft workshops worth it?", a: "Yes, they're genuinely hands-on and you leave with something you made — a good alternative to souvenir shopping." },
                    { q: "What crafts can you learn in Luang Prabang?", a: "Katu weaving, Saa paper-making, and lantern-making are the main hands-on options." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "Are the craft workshops worth it?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, they're hands-on and you leave with something you made." } },
                    { "@type": "Question", "name": "What crafts can you learn?", "acceptedAnswer": { "@type": "Answer", "text": "Katu weaving, Saa paper-making, and lantern-making." } }
                ] },
            };

        case "best-village-trekking-tour-luang-prabang":
            return {
                title: "Which Is the Best Village Trekking Tour from Luang Prabang?",
                seoTitle: "Best Village Trekking Tour 2026 | Honest Comparison",
                description: "Compare real village trekking tours from Luang Prabang — Hmong villages, Khmu culture visits, and remote village day trips.",
                heroImage: "https://images.asiabylocals.com/asiabylocals/tours/luang-prabang/village.webp",
                sections: [
                    { title: "The Short Answer", content: "Several ethnic-minority villages near Luang Prabang are reachable on a day trip, each offering a different cultural angle — Hmong, Khmu, or a more general remote village experience.", tourCard: { slug: "luang-prabang-authentic-remote-village-day-trip", title: "Luang Prabang: Authentic Remote Village Day Trip", description: "A day trip to a remote village near Luang Prabang.", price: "From $85", duration: "7 hours" } },
                    { title: "Best for Culture: Khmu Culture Tour", content: "This focuses specifically on meeting Khmu families and learning about their culture, a more intimate format than a general village visit.", tourCard: { slug: "luang-prabang-khmu-culture-tour-to-meet-local", title: "Luang Prabang: Khmu Culture Tour to Meet Local Families", description: "A cultural visit to meet Khmu families.", price: "From $98", duration: "4 hours" } },
                    { title: "Best by Scooter: Remote Villages Scooter Day Trip", content: "Covers remote villages by scooter rather than a standard vehicle, a more adventurous way to reach less-visited areas.", tourCard: { slug: "luang-prabang-remote-villages-scooter-day-trip", title: "Luang Prabang: Remote Villages Scooter Day Trip & Lao Lunch", description: "A scooter-based day trip to remote villages with lunch.", price: "From $85", duration: "7 hours" } },
                    { title: "Best for Hmong Culture: Hmong Village Kuangsi Tour", content: "Combines a Hmong village visit with Kuang Si Waterfall, pairing culture and nature in one day.", tourCard: { slug: "luang-prabang-village-guided-tour", title: "Luang Prabang: Hmong Village Kuangsi Waterfall Tour", description: "A Hmong village visit combined with Kuang Si Waterfall.", price: "From $259", duration: "8 hours" } },
                    { title: "Practical Tips", content: "These village visits work best with a guide who speaks the local language and has an established relationship with the community — ask how your operator sources and compensates village visits." }
                ],
                faqs: [
                    { q: "What is the best village trekking tour from Luang Prabang?", a: "A remote village day trip suits general interest; pick Khmu- or Hmong-specific tours for a deeper cultural focus." },
                    { q: "Are village visits respectful of local communities?", a: "Choose operators with established community relationships rather than ad-hoc drop-in visits." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "What is the best village trekking tour?", "acceptedAnswer": { "@type": "Answer", "text": "A remote village day trip suits general interest." } },
                    { "@type": "Question", "name": "Are village visits respectful?", "acceptedAnswer": { "@type": "Answer", "text": "Choose operators with established community relationships." } }
                ] },
            };

        case "is-paramotor-flight-worth-it-luang-prabang":
            return {
                title: "Is a Paramotor Flight Over Luang Prabang Worth It?",
                seoTitle: "Luang Prabang Paramotor Flight 2026 | Honest Review",
                description: "An honest look at paramotor flights over Luang Prabang — a short but genuinely unique way to see the city and Mekong from the air.",
                heroImage: "https://images.asiabylocals.com/asiabylocals/tours/luang-prabang/paramotor.webp",
                sections: [
                    { title: "The Short Answer", content: "A paramotor flight is a short powered-paraglider ride over Luang Prabang and the Mekong, offering aerial views you can't get any other way in this city — genuinely unique, though brief.", tourCard: { slug: "luang-prabang-private-paramotor-flight-city-hotel", title: "Luang Prabang: Private Paramotor Flight & City Hotel Pickup", description: "A private paramotor flight over the city with hotel pickup.", price: "From $221", duration: "15 minutes" } },
                    { title: "Alternative: Paramotor Flight with Hotel Pickup", content: "A near-identical option with the same hotel pickup convenience, essentially the same experience from a different operator.", tourCard: { slug: "luang-prabang-paramotor-guided-tour", title: "Luang Prabang：Paramotor Flight with Hotel Pickup", description: "A paramotor flight with hotel pickup included.", price: "From $242", duration: "15 minutes" } },
                    { title: "Practical Tips", content: "At 15 minutes, this is brief and priced accordingly high per minute — worth it specifically for the aerial perspective on the Mekong and old town, not as a long thrill-ride." }
                ],
                faqs: [
                    { q: "Is the Luang Prabang paramotor flight worth it?", a: "Yes for the unique aerial views, though it's brief (around 15 minutes) for the price." },
                    { q: "How long is the paramotor flight?", a: "Around 15 minutes." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "Is the paramotor flight worth it?", "acceptedAnswer": { "@type": "Answer", "text": "Yes for the unique aerial views, though it's brief." } },
                    { "@type": "Question", "name": "How long is the flight?", "acceptedAnswer": { "@type": "Answer", "text": "Around 15 minutes." } }
                ] },
            };

        case "best-private-full-day-tour-luang-prabang":
            return {
                title: "Which Is the Best Private Full-Day Tour in Luang Prabang?",
                seoTitle: "Best Private Full-Day Tour Luang Prabang 2026 | Comparison",
                description: "Compare real private full-day tours in Luang Prabang — from a tailor-made day with a local guide to full-day city tours with airport transfers.",
                heroImage: "https://images.asiabylocals.com/asiabylocals/tours/luang-prabang/private-tour.webp",
                sections: [
                    { title: "The Short Answer", content: "Private full-day tours in Luang Prabang let you set your own pace and pick your own stops with a dedicated local guide, rather than following a fixed group itinerary.", tourCard: { slug: "tailor-made-luang-prabang-private-day-tour-with-a", title: "Tailor-made Luang Prabang Private Day Tour with a Local Guide", description: "A fully customizable private day tour with a local guide.", price: "From $215", duration: "8 hours" } },
                    { title: "Most Flexible: Tailor-Made Private Day Tour", content: "This is explicitly built around your preferences rather than a fixed route, the most flexible private option.", tourCard: { slug: "tailor-made-luang-prabang-private-day-tour-with-a", title: "Tailor-made Luang Prabang Private Day Tour with a Local Guide", description: "The most customizable private day tour option.", price: "From $215", duration: "8 hours" } },
                    { title: "Best with Transfers: 2-Day Private Tour with Airport Transfers", content: "Bundles a 2-day private tour with airport transfers, convenient if you want transport logistics handled alongside the sightseeing.", tourCard: { slug: "luang-prabang-transfers-private-tour", title: "Luang Prabang: 2-Day Private Tour with Airport Transfers", description: "A 2-day private tour that includes airport transfers.", price: "From $215", duration: "2 days" } },
                    { title: "Best Classic Itinerary: Classic Tour (Private)", content: "Follows Luang Prabang's classic sightseeing route but privately rather than in a group, if you want the standard highlights without sharing a vehicle.", tourCard: { slug: "luang-prabang-classic-private-tour", title: "Classic tour in Luang Prabang (Private)", description: "The classic Luang Prabang sightseeing route run privately.", price: "From $316", duration: "8 hours" } },
                    { title: "Practical Tips", content: "Private tours cost more per person for solo travellers but become competitive with group tours once split across 3-4 people, since you're paying for the guide/vehicle rather than per head." }
                ],
                faqs: [
                    { q: "What is the best private full-day tour in Luang Prabang?", a: "A tailor-made private tour with a local guide gives the most flexibility." },
                    { q: "Are private tours worth it for solo travellers?", a: "They cost more per person solo, but become competitive once split across a small group." }
                ],
                jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
                    { "@type": "Question", "name": "What is the best private full-day tour?", "acceptedAnswer": { "@type": "Answer", "text": "A tailor-made private tour with a local guide." } },
                    { "@type": "Question", "name": "Are private tours worth it solo?", "acceptedAnswer": { "@type": "Answer", "text": "They cost more solo but become competitive in a small group." } }
                ] },
            };

        case "luang-prabang-travel-guide-2026":
            return {
                title: "Luang Prabang Travel Guide 2026",
                description: "Laos's former royal capital blends French-colonial architecture, dozens of Buddhist temples, and the Mekong River — here's what first-timers need to know.",
                heroImage: "https://images.asiabylocals.com/asiabylocals/tours/luang-prabang/city.webp",
                sections: [
                    { title: "Why Visit Luang Prabang", content: "A UNESCO World Heritage old town, the dawn alms-giving ceremony, Kuang Si Waterfall, and Pak Ou Caves make this one of Southeast Asia's most atmospheric small cities — genuinely walkable and calm compared to bigger regional hubs." },
                    { title: "Getting Around", content: "The old town is entirely walkable; tuk-tuks handle anything further, and most day trips (Kuang Si, Pak Ou Caves) are easiest as organized tours given the boat/road logistics involved." }
                ],
                faqs: [
                    { q: "Is Luang Prabang worth visiting?", a: "Yes — its temples, alms-giving ceremony, and nearby waterfalls and caves make it one of Laos's top destinations." },
                    { q: "How many days do you need in Luang Prabang?", a: "3-4 days covers the city and main day trips comfortably." }
                ],
            };

        case "best-time-to-visit-luang-prabang":
            return {
                title: "Best Time to Visit Luang Prabang",
                description: "Luang Prabang has a clear dry and wet season split, unlike much of equatorial Southeast Asia.",
                heroImage: "https://images.asiabylocals.com/asiabylocals/tours/luang-prabang/city.webp",
                sections: [
                    { title: "Seasonal Overview", content: "November-February is cool and dry, the most comfortable and popular time to visit. March-May gets hot, sometimes with haze from agricultural burning. The wet season (June-October) brings regular afternoon rain but lush green scenery and fewer crowds." }
                ],
                faqs: [
                    { q: "What is the best time to visit Luang Prabang?", a: "November to February for the coolest, driest weather." },
                    { q: "Does Luang Prabang get hazy?", a: "Yes, March-May can bring smoky haze from seasonal agricultural burning in the region." }
                ],
            };

        case "luang-prabang-1-day-itinerary":
            return {
                title: "Luang Prabang 1-Day Itinerary",
                description: "A realistic one-day plan for Luang Prabang if you're short on time.",
                heroImage: "https://images.asiabylocals.com/asiabylocals/tours/luang-prabang/city.webp",
                sections: [
                    { title: "Dawn", content: "Start at the alms-giving ceremony at dawn, then wander the morning market before it closes." },
                    { title: "Midday", content: "Visit the old town's main temples and the National Museum, then climb Mount Phousi for the view." },
                    { title: "Evening", content: "Finish with a Mekong sunset cruise or dinner at the night market." }
                ],
                faqs: [
                    { q: "Can Luang Prabang be seen in one day?", a: "The core old town, yes — but Kuang Si Falls and Pak Ou Caves each need their own half-day trip." },
                    { q: "What's a must-do in Luang Prabang in one day?", a: "The dawn alms-giving ceremony and sunset from Mount Phousi." }
                ],
            };

        case "laos-visa-guide-for-tourists":
            return {
                title: "Laos Visa Guide for Tourists (Luang Prabang)",
                description: "Visa requirements for visiting Luang Prabang and Laos.",
                heroImage: "https://images.asiabylocals.com/asiabylocals/tours/luang-prabang/city.webp",
                sections: [
                    { title: "Visa Requirements", content: "Many nationalities can get a visa on arrival at Luang Prabang International Airport or Laos's land borders, or apply for an e-visa in advance. Check Laos's official immigration requirements for your specific nationality before travel, since rules vary and change." }
                ],
                faqs: [
                    { q: "Do I need a visa to visit Luang Prabang/Laos?", a: "Many nationalities get visa-on-arrival or can apply for an e-visa; verify current requirements for your passport." }
                ],
            };

        case "luang-prabang-food-guide":
            return {
                title: "Luang Prabang Food Guide",
                description: "What to eat in Luang Prabang, from riverside night market stalls to French-colonial bakeries.",
                heroImage: "https://images.asiabylocals.com/asiabylocals/tours/luang-prabang/city.webp",
                sections: [
                    { title: "Local Specialties", content: "Try laap (minced meat salad), sticky rice, Mekong river weed snacks (khai pen), and the city's distinctive French-colonial bakery scene — a holdover from the colonial era that's genuinely good." },
                    { title: "Where to Eat", content: "The night market food section and local noodle shops offer the best value; a dedicated food tour is a good way to sample widely without guessing." }
                ],
                faqs: [
                    { q: "What food is Luang Prabang known for?", a: "Laap, sticky rice, Mekong weed snacks, and French-colonial-influenced baking." },
                    { q: "Where's the best place to eat in Luang Prabang?", a: "The night market's food section and local noodle shops for value and authenticity." }
                ],
            };

        case "is-luang-prabang-safe":
            return {
                title: "Is Luang Prabang Safe for Tourists?",
                description: "An honest look at safety in Luang Prabang for visitors.",
                heroImage: "https://images.asiabylocals.com/asiabylocals/tours/luang-prabang/city.webp",
                sections: [
                    { title: "The Short Answer", content: "Luang Prabang is one of the safer, calmer cities in Southeast Asia for tourists — violent crime is rare. The main real risks are road safety (scooter rentals, uneven pavements) and river/waterfall safety at Kuang Si and during boat trips." },
                    { title: "Practical Tips", content: "Wear a helmet if renting a scooter, be cautious swimming at waterfalls after heavy rain (currents can be stronger than they look), and use reputable boat operators for river trips." }
                ],
                faqs: [
                    { q: "Is Luang Prabang safe for tourists?", a: "Yes, generally one of the calmer, safer Southeast Asian cities — main risks are road and water safety, not crime." },
                    { q: "Is it safe to swim at Kuang Si Waterfall?", a: "Generally yes, but be cautious after heavy rain when currents can be stronger." }
                ],
            };

        case "luang-prabang-alms-giving-etiquette-guide":
            return {
                title: "Luang Prabang Alms Giving Etiquette Guide",
                description: "How to respectfully observe or participate in Luang Prabang's dawn alms-giving ceremony.",
                heroImage: "https://images.asiabylocals.com/asiabylocals/tours/luang-prabang/alms.webp",
                sections: [
                    { title: "Etiquette Basics", content: "Dress modestly with shoulders and knees covered, stay quiet, don't use flash photography, don't touch the monks, and if you don't plan to give alms yourself, observe quietly from the side rather than crowding the procession. Buy offerings from a legitimate vendor, not aggressive street sellers pushing low-quality rice at inflated prices." }
                ],
                faqs: [
                    { q: "How should I behave at the alms giving ceremony?", a: "Dress modestly, stay quiet, no flash photography, and don't crowd or touch the monks." },
                    { q: "Should I buy offerings from street vendors?", a: "Be selective — some street vendors sell low-quality rice at inflated prices; a guided tour's included offering set avoids this." }
                ],
            };

        default:
            return null;
    }
}

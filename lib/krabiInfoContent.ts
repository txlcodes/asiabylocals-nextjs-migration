// Krabi authority pages (2026-08). Same CityInfoData shape as cityInfoContent.ts.
// Reached via getThailandInfoContent() -> getCityInfoContent().
import type { CityInfoData } from './cityInfoContent';

const IMG = {
    tigerCave: "https://res.cloudinary.com/dx2fxyaft/image/upload/v1786364390/asiabylocals/tours/krabi-602-krabi-tiger-cave-temple-emerald-pool-and-hot-springs-tour/hq_tour_img_1.jpg",
    fourIsland: "https://res.cloudinary.com/dx2fxyaft/image/upload/v1786364587/asiabylocals/tours/krabi-620-krabi-classic-4-island-tour-with-snorkeling-hotel-pickup/hq_tour_img_1.jpg",
    hongIsland: "https://res.cloudinary.com/dx2fxyaft/image/upload/v1786364536/asiabylocals/tours/krabi-615-krabi-hong-islands-speedboat-tour-with-lunch-snorkeling/hq_tour_img_1.jpg",
    kayak: "https://res.cloudinary.com/dx2fxyaft/image/upload/v1786364493/asiabylocals/tours/krabi-611-krabi-ao-thalane-mangrove-kayaking-tour-with-pickup/hq_tour_img_1.jpg",
    emerald: "https://res.cloudinary.com/dx2fxyaft/image/upload/v1786364651/asiabylocals/tours/krabi-625-krabi-emerald-pool-and-hot-spring-waterfall-with-atv-riding/hq_tour_img_1.jpg",
    phiPhi: "https://res.cloudinary.com/dx2fxyaft/image/upload/v1786364413/asiabylocals/tours/krabi-604-from-krabi-phi-phi-early-bird-4-islands-by-speedboat/hq_tour_img_1.jpg",
    cooking: "https://res.cloudinary.com/dx2fxyaft/image/upload/v1786364546/asiabylocals/tours/krabi-616-krabi-traditional-thai-cooking-class-with-local-chef/hq_tour_img_1.jpg",
    crystalLake: "https://res.cloudinary.com/dx2fxyaft/image/upload/v1786364450/asiabylocals/tours/krabi-607-krabi-klong-root-crystal-lake-kayaking-tour/hq_tour_img_1.jpg",
};

const CARD = {
    fourIsland: { slug: "phra-nang-cave-beach-boat-tour", title: "Krabi Classic 4-Island Tour with Snorkelling", description: "Phra Nang Cave Beach, Chicken Island, Tup and Poda — the signature Krabi day, with hotel pickup and snorkelling stops.", price: "From $36", duration: "8 hours", image: IMG.fourIsland },
    fourIslandLongtail: { slug: "chicken-island-guided-tour", title: "4 Islands & Krabi's Separated Sea by Longtail Boat", description: "The Talay Waek sandbar at low tide, by traditional longtail — the slower, more atmospheric version of the classic circuit.", price: "From $21", duration: "7 hours", image: IMG.fourIsland },
    hong: { slug: "hong-island-boat-tour", title: "Hong Islands Speedboat Tour with Lunch & Snorkelling", description: "The enclosed emerald lagoon and Hong Island's beach — quieter than the 4-island circuit and arguably prettier.", price: "From $33", duration: "8 hours", image: IMG.hongIsland },
    tigerCave: { slug: "tiger-cave-temple-spiritual-tour", title: "Tiger Cave Temple, Emerald Pool & Hot Springs", description: "The 1,260-step climb to the summit Buddha, then the jungle pools — Krabi's whole inland day in one trip.", price: "From $43", duration: "8 hours", image: IMG.tigerCave },
    phiPhi: { slug: "maya-bay-adventure-boat-tour", title: "Phi Phi Early Bird & 4 Islands by Speedboat", description: "Reach Maya Bay ahead of the Phuket fleet, then the Krabi islands on the way home.", price: "From $88", duration: "9 hours", image: IMG.phiPhi },
    kayak: { slug: "ao-thalane-guided-tour", title: "Ao Thalane Mangrove Kayaking Tour", description: "Paddle the tidal channels between limestone karsts — the quietest, most local half-day in Krabi.", price: "From $27", duration: "4 hours", image: IMG.kayak },
    emerald: { slug: "hot-spring-waterfall-guided-tour", title: "Emerald Pool & Hot Spring Waterfall with ATV", description: "Krabi's inland jungle: the mineral-blue Emerald Pool and the tiered hot-spring waterfall.", price: "From $74", duration: "7 hours", image: IMG.emerald },
    cooking: { slug: "ao-nang-cooking-food-tour", title: "Traditional Thai Cooking Class with a Local Chef", description: "Market tour then southern Thai dishes cooked from scratch — the best rainy-afternoon insurance in Krabi.", price: "From $48", duration: "4 hours", image: IMG.cooking },
    crystalLake: { slug: "crystal-lake-mini-tour", title: "Klong Root Crystal Lake Kayaking Tour", description: "A spring-fed lake so clear the kayaks look like they're floating on air — and almost no tourists.", price: "From $29", duration: "2.5 hours", image: IMG.crystalLake },
    sunrise: { slug: "poda-island-sunrise-tour", title: "Phi Phi Beat-the-Crowds with Poda Breakfast at Sunrise", description: "Leave before dawn, eat breakfast on Poda Island, and hit Maya Bay before the day fleet arrives.", price: "From $96", duration: "11 hours", image: IMG.phiPhi },
};

export function getKrabiInfoContent(slug: string): CityInfoData | null {
    switch (slug) {

        case "best-time-to-visit-krabi":
            return {
                title: "Best Time to Visit Krabi: Month-by-Month Weather & Sea Guide (2026)",
                description: "November–March is Krabi's dry season with calm seas and every island tour running. Month-by-month weather, monsoon truths, rock-climbing season and honest pricing.",
                heroImage: IMG.hongIsland,
                sections: [
                    {
                        title: "The Short Answer: November to March",
                        icon: "Star",
                        content: "Krabi sits on the **Andaman coast**, which means its year is governed by the same southwest monsoon that shapes [Phuket's seasons](/thailand/phuket/best-time-to-visit-phuket) — and the difference between the two halves of the year is bigger here than most visitors expect, because almost everything worth doing in Krabi happens on or beside the water.\n\n**Dry season (November–March)** is when Krabi is at its best and it isn't close. The sea flattens, visibility for snorkelling climbs, and every island trip — the [4 Islands](/thailand/krabi/krabi-4-islands-tour-guide), Hong Islands, Phi Phi — runs daily and reliably. Days sit at 28–33°C with low humidity, the limestone karsts stand against blue rather than grey, and the longtail boats to [Railay](/thailand/krabi/railay-beach-krabi) run without drama.\n\n**Green season (May–October)** brings rain, wind and rough Andaman seas. Some island departures are cancelled at short notice, longtail crossings to Railay get bumpy or stop, and the west-facing beaches can fly red flags. In exchange: hotel rates fall 40–60%, the karst scenery turns spectacularly green, waterfalls run hard, and you can have Ao Nang in something close to peace.\n\n**The sweet spot** is **late November to February**. December–January is peak everything; **November** and **March** are the value edges of the good season — dry enough to be safe, cheap enough to notice.\n\nOne genuinely useful quirk: **Krabi's inland attractions are weather-proof**. The [Tiger Cave Temple](/thailand/krabi/tiger-cave-temple-krabi), Emerald Pool, hot springs and mangrove kayaking all work in the wet, which makes a rainy Krabi trip salvageable in a way a rainy island-only trip isn't.",
                        tourCard: CARD.hong,
                    },
                    {
                        title: "Month by Month on the Andaman",
                        icon: "Clock",
                        content: "**November** — The turn, and the connoisseur's month. Rain drops away, the sea settles, the landscape is still monsoon-green rather than dry-season brown, and peak pricing hasn't arrived. Loy Krathong floats on the Ao Nang beachfront.\n\n**December** — Perfect conditions and the year's biggest crowds. Christmas–New Year sees rates double or worse, and the 4 Islands circuit is genuinely busy. Book 6+ weeks ahead.\n\n**January** — Arguably the best all-round month: dry, calm, excellent underwater visibility, and crowds easing after the first week.\n\n**February** — Dry-season reliability at its most consistent, lowest rainfall of the year. Prime rock-climbing conditions on Railay's walls.\n\n**March** — Still excellent and heating up; sea temperature peaks around 30°C. Prices soften late in the month. The last safe month for locked-in island plans.\n\n**April** — Hottest month (34–36°C) and the transition. Seas usually stay workable until late April, and **Songkran (April 13–15)** is a genuinely fun, low-key affair in Ao Nang and Krabi Town compared to the city chaos.\n\n**May–June** — The monsoon establishes. Rain in bursts, building swell, first cancellations. Prices drop sharply and the value is real if you stay flexible.\n\n**July–August** — Mid-monsoon. Daily rain, choppy crossings, some tours consolidated or cancelled. European summer keeps Ao Nang moderately busy regardless.\n\n**September–October** — The wettest, quietest, cheapest weeks. Many longtail operators pause, some Railay resorts close for maintenance, and a beach-first trip is a gamble. Inland Krabi, though, is at its most beautiful — waterfalls at full volume, jungle at maximum green."
                    },
                    {
                        title: "What Changes With the Sea: Boats, Railay and Safety",
                        icon: "AlertTriangle",
                        content: "This is the part that separates Krabi planning from a generic beach holiday: **your access to most of Krabi depends on small boats.**\n\n**Railay is boat-only.** The limestone headlands cut it off from the road network entirely, so the only way in is a longtail from Ao Nang or Krabi Town's Ao Nam Mao pier. In dry season that's a routine 15-minute hop. In green season, rough water can delay or suspend crossings, and longtails wait to fill up — so a day trip can become an unplanned overnight. If you're staying on Railay during the monsoon, build slack around your flight day.\n\n**Island tours consolidate.** In green season, operators merge departures and cancel when the sea is bad. Two rules: book island days **early in your trip** so you have spare days to rebook, and prefer the **sheltered options** when the forecast is poor — the [Ao Thalane mangroves](/thailand/krabi/ao-thalane-guided-tour) and [Klong Root crystal lake](/thailand/krabi/crystal-lake-mini-tour) sit in protected water and run when the open sea doesn't.\n\n**Red flags mean stay out.** Ao Nang and the west-facing beaches get monsoon surf and rip currents from roughly May to October. Same rule as everywhere on this coast: a rip looks *smoother* than the water beside it, and if you're caught, swim parallel to shore rather than against it.\n\n**Rock climbing** — Railay is one of the world's great sport-climbing destinations, and the season follows the same curve: **November to March** is prime, with dry rock and grippy limestone. Green-season climbing happens but wet rock and afternoon storms limit it.",
                        tourCard: CARD.kayak,
                    },
                    {
                        title: "Prices, Crowds and Booking Windows",
                        icon: "Wallet",
                        content: "Krabi is meaningfully cheaper than Phuket for equivalent quality — one of the main reasons to choose it — but the seasonal swing is just as steep.\n\n**Peak (20 Dec – 10 Jan)**: rates 2–3× the annual average, minimum-stay requirements at Railay and Klong Muang resorts, compulsory gala dinners at some properties. Book 2–3 months out.\n\n**High (November, mid-Jan – March)**: 30–50% above low season with good availability. Where most travellers should aim.\n\n**Shoulder (April, October)**: softening prices, decent-to-variable conditions, noticeably fewer people.\n\n**Low (May – September)**: 40–60% discounts. Beachfront resorts at guesthouse prices, and last-minute booking works fine.\n\n**What things cost**: guesthouse double ฿700–1,400; good 3–4 star with pool ฿1,800–3,500; Railay/Klong Muang resorts ฿4,000–12,000. A 4-Islands longtail day runs from about $21, speedboat versions $33–50, Phi Phi days $50–96. Local food ฿60–120 a dish; Ao Nang's beach-road restaurants charge double that for less.\n\n**Booking tours**: 2–4 days ahead in dry season is fine; over Christmas–New Year, book a week or more out. In green season, book with a spare day in reserve and expect at least one reshuffle.\n\nStill weighing Krabi against its neighbour? Our honest [Krabi vs Phuket comparison](/thailand/krabi/krabi-vs-phuket-which-to-visit) breaks down who each suits — and the [3-day itinerary](/thailand/krabi/krabi-3-day-itinerary) shows what a good trip actually looks like."
                    }
                ],
                faqs: [
                    { q: "What is the best month to visit Krabi?", a: "**January** is the best all-round month — dry, calm seas, excellent underwater visibility and crowds easing after the first week. **November** is the value pick: the rain has stopped and the landscape is still green, but peak pricing hasn't arrived. The broader dry season runs November–March." },
                    { q: "Is Krabi bad in the rainy season?", a: "It's a real trade-off. May–October brings rain, rough Andaman seas, cancelled island departures and occasional red flags on west-facing beaches. But hotels drop 40–60%, the scenery is at its greenest, and **Krabi's inland attractions — Tiger Cave Temple, Emerald Pool, hot springs, mangrove kayaking — all work in the wet.**" },
                    { q: "Can you still get to Railay in the monsoon?", a: "Usually, but not guaranteed. **Railay is boat-only** — limestone headlands cut it off from the road network — so rough water can delay or suspend the longtail crossings from Ao Nang. In dry season it's a routine 15-minute hop; in green season, build slack around your flight day if you're staying there." },
                    { q: "When is the best time for rock climbing in Krabi?", a: "**November to March**, when the limestone is dry and grippy. Railay is one of the world's great sport-climbing destinations, and the season follows the same curve as everything else here — green-season climbing happens, but wet rock and afternoon storms limit it badly." },
                    { q: "When is Krabi cheapest?", a: "**May to September** — hotel rates fall 40–60%, beachfront resorts go for guesthouse prices, and last-minute booking works. September and October are the absolute floor, but they're also the months when a beach-first trip is most likely to be disrupted." }
                ],
                jsonLd: {
                    "@context": "https://schema.org",
                    "@graph": [
                        {
                            "@type": "FAQPage",
                            "mainEntity": [
                                { "@type": "Question", "name": "What is the best month to visit Krabi?", "acceptedAnswer": { "@type": "Answer", "text": "January is the best all-round month — dry, calm seas, excellent visibility and easing crowds. November is the value pick. The dry season runs November–March." } },
                                { "@type": "Question", "name": "Is Krabi bad in the rainy season?", "acceptedAnswer": { "@type": "Answer", "text": "A trade-off. May–October brings rough Andaman seas and cancelled island departures, but hotels drop 40–60% and Krabi's inland attractions — Tiger Cave Temple, Emerald Pool, hot springs, mangrove kayaking — all work in the wet." } },
                                { "@type": "Question", "name": "Can you still get to Railay in the monsoon?", "acceptedAnswer": { "@type": "Answer", "text": "Usually, but not guaranteed. Railay is boat-only, so rough water can delay or suspend longtail crossings from Ao Nang. Build slack around your flight day." } }
                            ]
                        }
                    ]
                },
                fastFacts: [
                    { icon: 'Star', label: 'Best Months', value: 'November – March' },
                    { icon: 'AlertTriangle', label: 'Rough Seas', value: 'May – October' },
                    { icon: 'CheckCircle2', label: 'Weather-Proof', value: 'Inland: temple, pools, mangroves' }
                ]
            };

        case "railay-beach-krabi":
            return {
                title: "Railay Beach Krabi: The Complete 2026 Guide (Boat Access, Beaches & Climbing)",
                description: "Railay is a peninsula reachable only by longtail boat. The four beaches compared, the Phra Nang cave shrine, rock climbing, how to get there and whether to stay or day-trip.",
                heroImage: IMG.fourIsland,
                sections: [
                    {
                        title: "A Peninsula That Behaves Like an Island",
                        icon: "Info",
                        content: "**Railay is not an island** — and almost everyone assumes it is, because it acts like one. It's a peninsula attached to the Krabi mainland, but the attachment runs through **sheer limestone headlands** that no road has ever crossed. The result is one of the strangest and best pieces of geography in Thailand: a place ten minutes from a busy resort strip that can only be reached by boat.\n\nWhat that isolation buys you is the whole point. **No cars.** No motorbike traffic, no horns, no through-road. Just sand paths between the beaches, resorts tucked under 200-metre limestone walls, and the sound of longtail engines arriving and leaving.\n\nIt also produced Railay's second identity. Those same walls — overhanging, pocketed, absurdly featured limestone — made this one of the **world's great sport-climbing destinations** from the 1980s onward, and the climbing community that settled here gave Railay a character that's part beach resort, part climbers' village. On any morning you'll see ropes hanging off the cliffs directly behind the sunbathers.\n\nThe practical consequence for planning: Railay is a **commitment**, not a stop. Getting there means a longtail crossing, your luggage goes in a boat, and if the sea turns you may not leave on schedule. Understanding that in advance is the difference between loving it and being stranded by it.",
                        tourCard: CARD.fourIsland,
                    },
                    {
                        title: "The Four Beaches, Honestly Compared",
                        icon: "Map",
                        content: "Railay is really four separate beaches on one small peninsula, and they are not remotely equal.\n\n**Phra Nang Cave Beach** — The famous one, and deservedly. A short crescent of soft sand hemmed by a vast limestone overhang, with clear swimmable water and offshore karsts. It is genuinely one of the most beautiful beaches in Thailand. At its eastern end sits **Tham Phra Nang Nok**, the \"Princess Cave\" — a shrine to a sea goddess where local fishermen have long left **carved wooden phalluses** as offerings for a safe return and good catches. It surprises visitors; it's a serious folk-religious site, so photograph it respectfully rather than posing with the offerings. No accommodation here, so it empties in the evening.\n\n**Railay West** — The main resort beach: wide, west-facing, excellent sunsets, and where the longtails from Ao Nang land. Good swimming, the nicest resorts, the highest prices.\n\n**Railay East** — The mangrove side, and **not a swimming beach** — at low tide it's mudflat. It's the budget accommodation, bars and climbing-shop strip, plus the pier for boats from Krabi Town. Cheaper to stay, five minutes' walk to Railay West.\n\n**Tonsai Bay** — Around the headland, historically the climbers' and backpackers' enclave: rougher, cheaper, more hammocks and less polish, though it has gentrified in recent years. Reachable by boat, or on foot from Railay West at low tide via a rocky scramble.\n\n**The walk that's worth it**: the steep, muddy, rope-assisted climb from between Railay East and Phra Nang up to the **viewpoint** and the **hidden lagoon**. It's genuinely strenuous and slippery — proper shoes, not flip-flops — and the view over both bays is the best in Krabi."
                    },
                    {
                        title: "Getting There, and Whether to Stay",
                        icon: "Ticket",
                        content: "**From Ao Nang** — The standard route. Longtails leave from the Ao Nang beachfront ticket office, roughly **฿100–150 per person** each way, about 15 minutes. They depart **when full** (usually 8 passengers), so at quiet times you either wait or pay to charter. Last boats typically run until around sunset; after dark you're chartering at a premium.\n\n**From Krabi Town** — Longtails from **Ao Nam Mao pier** to Railay East, roughly ฿150, about 15 minutes.\n\n**From the airport** — Taxi to Ao Nang (about 40 min) then the boat. Allow real buffer; there is no road, and there is no fixing a missed boat.\n\n**Practicalities that catch people out**: you'll usually **wade a few steps through shin-deep water** to board and disembark, so wheeled suitcases and Railay are a poor match — soft bags travel far better. Boats stop when the sea is rough. There are ATMs on Railay but they charge heavily; bring cash.\n\n**Stay or day-trip?**\n\n**Day-trip if** you want the beaches without the logistics. Most [4-Islands tours](/thailand/krabi/krabi-4-islands-tour-guide) include Phra Nang Cave Beach anyway, which is the efficient way to see the best of it. Independent day trips work well too: boat over at 9, viewpoint climb, Phra Nang, back by 5.\n\n**Stay if** you want Railay at its best — which is **early morning and after 5 PM**, when the day-trip boats have gone and the peninsula belongs to the people sleeping there. That's the real argument for a night or two, and it's a strong one.\n\n**Don't stay if** you have an early flight the next morning, are travelling with heavy luggage or limited mobility, or are visiting in the depths of green season."
                    },
                    {
                        title: "Climbing, Costs and Etiquette",
                        icon: "CheckCircle2",
                        content: "**Rock climbing** — Railay has hundreds of bolted routes across grades, from beginner slabs to serious overhangs, on limestone that climbers travel across the world for. Half-day beginner courses run roughly **฿1,000–1,500**, full days ฿1,800–2,500, including gear and instruction. No experience needed for the intro courses, and they're one of the best-value activities in Krabi. Peak conditions are **November–March**; check operators' safety credentials and gear age rather than booking purely on price. **Deep-water soloing** — climbing unroped above the sea and dropping in — is also offered, and is exactly as committing as it sounds.\n\n**What Railay costs**: it's pricier than mainland Krabi because everything arrives by boat. Budget rooms on Railay East ฿800–1,500; Railay West resorts ฿3,500–12,000. A beer runs ฿90–120, a meal ฿150–350. Bring cash.\n\n**Etiquette and care**:\n- The **Phra Nang shrine** is an active place of worship. Look, don't pose with or touch the offerings.\n- **Monkeys** are everywhere and are practised thieves — keep bags closed, don't feed them, and don't get between a mother and an infant.\n- **The viewpoint trail** claims ankles every season. It's steep red clay with fixed ropes; it's genuinely dangerous when wet, and there's no shame in turning back.\n- Take your rubbish off the peninsula; waste management on a boat-access headland is a real problem.\n\nRailay slots naturally into day two of our [3-day Krabi itinerary](/thailand/krabi/krabi-3-day-itinerary), and if you're deciding where to base yourself, the [where to stay in Krabi guide](/thailand/krabi/where-to-stay-in-krabi) weighs Railay against Ao Nang and the quieter northern beaches.",
                        tourCard: CARD.fourIslandLongtail,
                    }
                ],
                faqs: [
                    { q: "Is Railay Beach an island?", a: "No — it's a **peninsula** attached to the Krabi mainland, but sheer limestone headlands block any road, so it's only reachable by boat. That's what gives it its no-cars, no-traffic character." },
                    { q: "How do you get to Railay Beach?", a: "By **longtail boat**: from the Ao Nang beachfront (฿100–150 per person, ~15 minutes) or from Ao Nam Mao pier near Krabi Town (~฿150). Boats leave **when full**, usually 8 passengers. Expect to wade shin-deep to board — soft bags beat wheeled suitcases." },
                    { q: "Which Railay beach is the best?", a: "**Phra Nang Cave Beach** — soft sand under a huge limestone overhang, clear swimmable water and the Princess Cave shrine. **Railay West** is the main resort beach with the best sunsets. **Railay East** is the budget/mangrove side and isn't a swimming beach. **Tonsai** is the climbers' bay." },
                    { q: "What is the cave with the wooden phalluses at Railay?", a: "**Tham Phra Nang Nok (Princess Cave)** at the end of Phra Nang Beach — a shrine to a sea goddess where fishermen have long left carved wooden phalluses as offerings for safe passage and good catches. It's an active folk-religious site; photograph it respectfully and don't handle the offerings." },
                    { q: "Should I stay on Railay or day-trip?", a: "**Day-trip** if you want the beaches without boat logistics — most 4-Islands tours include Phra Nang anyway. **Stay** if you want Railay at its best: early morning and after 5 PM, once the day boats leave and the peninsula empties. Avoid staying if you have an early flight or heavy luggage." },
                    { q: "Is Railay good for rock climbing beginners?", a: "Excellent. Half-day beginner courses run **฿1,000–1,500** including gear and instruction, with hundreds of bolted routes across all grades on world-class limestone. Peak season is November–March when the rock is dry. Check operators' safety credentials rather than booking on price alone." }
                ],
                jsonLd: {
                    "@context": "https://schema.org",
                    "@graph": [
                        {
                            "@type": "FAQPage",
                            "mainEntity": [
                                { "@type": "Question", "name": "Is Railay Beach an island?", "acceptedAnswer": { "@type": "Answer", "text": "No — it's a peninsula attached to the Krabi mainland, but sheer limestone headlands block any road, so it's only reachable by boat." } },
                                { "@type": "Question", "name": "How do you get to Railay Beach?", "acceptedAnswer": { "@type": "Answer", "text": "By longtail boat from the Ao Nang beachfront (฿100–150, ~15 minutes) or Ao Nam Mao pier near Krabi Town. Boats leave when full, usually 8 passengers." } },
                                { "@type": "Question", "name": "Which Railay beach is the best?", "acceptedAnswer": { "@type": "Answer", "text": "Phra Nang Cave Beach — soft sand under a limestone overhang with clear water and the Princess Cave shrine. Railay West is the main resort beach; Railay East isn't a swimming beach." } }
                            ]
                        }
                    ]
                },
                fastFacts: [
                    { icon: 'Map', label: 'Access', value: 'Longtail boat only, ~15 min' },
                    { icon: 'Ticket', label: 'Boat Fare', value: '฿100–150 each way' },
                    { icon: 'Star', label: 'Best Beach', value: 'Phra Nang Cave Beach' }
                ]
            };

        case "krabi-4-islands-tour-guide":
            return {
                title: "Krabi 4 Islands Tour 2026: What You Actually Get (Longtail vs Speedboat)",
                description: "Poda, Chicken, Tup and Phra Nang Cave Beach — plus the Talay Waek sandbar that only appears at low tide. Longtail vs speedboat, real costs, park fees and how to dodge the crowds.",
                heroImage: IMG.fourIsland,
                sections: [
                    {
                        title: "The Four Islands, and the Fifth Thing Nobody Mentions",
                        icon: "Star",
                        content: "The **4 Islands tour** is Krabi's signature day out — as central to Krabi as the Phi Phi trip is to Phuket, and for most visitors it's the reason they came. The circuit covers:\n\n**Phra Nang Cave Beach** — On the [Railay peninsula](/thailand/krabi/railay-beach-krabi): soft sand under a vast limestone overhang, clear water, and the Princess Cave shrine with its wooden offerings. Frequently rated among Thailand's most beautiful beaches.\n\n**Chicken Island (Koh Kai)** — A limestone stack whose profile genuinely does look like a chicken's head and neck from the right angle. The snorkelling around it is the best of the day: decent coral and reliable fish.\n\n**Tup Island (Koh Tup)** and **Mor Island** — Small, low, sandy.\n\n**Poda Island** — The most spacious and relaxed stop: a broad white beach, casuarina shade, and a signature limestone tower offshore. Usually the lunch stop.\n\n**And the part that makes the tour**: at **low tide**, a sandbar surfaces and physically connects Tup, Mor and Chicken Islands, so you can **walk between islands across the seabed** with water on both sides. Thais call it **Talay Waek — \"the separated sea\"** — and it's the most photographed natural sight in Krabi.\n\nThis is the single most important planning fact on this page: **Talay Waek only exists at low tide.** A tour timed against the tide gives you four pleasant beaches. A tour timed with it gives you the thing you actually saw in the photos. Ask the operator directly what the tide is doing on your date — good ones will tell you without being pushed.",
                        tourCard: CARD.fourIsland,
                    },
                    {
                        title: "Longtail vs Speedboat: A Real Difference",
                        icon: "Info",
                        content: "This choice shapes the whole day, and it isn't just about money.\n\n**Longtail boat** — The traditional wooden boats with the long propeller shaft. Slower, open to the air, and the more atmospheric experience by a wide margin. You sit low to the water, the karsts pass at a human pace, and the boat can nose into shallow places speedboats can't. Downsides: **loud** (that engine is unmuffled), slower between stops so you cover less, and genuinely uncomfortable in choppy water. Group sizes are small. From about **$21** for a shared day — the [4 Islands and Separated Sea longtail tour](/thailand/krabi/chicken-island-guided-tour) is the classic version.\n\n**Speedboat** — Fast, covers the circuit with time to spare, handles swell far better, and usually carries more people with a proper crew, lunch and gear. Less romantic, more efficient. Typically **$33–50**, like the [classic 4-island tour with snorkelling and hotel pickup](/thailand/krabi/phra-nang-cave-beach-boat-tour).\n\n**Private charter** — A longtail for your group runs roughly ฿2,500–4,000 for the day depending on season and negotiation; you set the order and timing, which is the only way to truly beat the crowds.\n\n**Our honest steer**: if the sea is calm and you want the *experience*, take the longtail — it's the way Krabi has always done this. If you're prone to seasickness, travelling with kids, visiting in shoulder season, or want maximum stops, take the speedboat.\n\n**A note on \"private\" upsells**: some operators sell \"private\" tours that simply mean a smaller shared boat. Confirm whether it's genuinely exclusive to your group before paying the premium."
                    },
                    {
                        title: "Costs, Park Fees and What's Really Included",
                        icon: "Wallet",
                        content: "**The headline price is rarely the final price**, and the gap is almost always the national park fee.\n\nThe islands sit inside a **marine national park**, and foreign visitors pay an entrance fee of roughly **฿200–400** depending on the specific park zone your route enters. Some tours bundle it into the ticket price; many collect it in cash at the pier or on the boat. **Ask which before booking** — a ฿700 tour plus ฿400 in fees is a different proposition from a ฿900 all-in tour.\n\n**Typical all-in day cost per person**:\n- Shared longtail: **$21–35** + park fee\n- Shared speedboat: **$33–50**, more often fee-inclusive\n- Private longtail charter: ฿2,500–4,000 per boat + fees\n\n**Usually included**: boat, snorkel mask and fins, lunch (often a beach buffet or box), drinking water, life jackets, hotel pickup in Ao Nang.\n\n**Usually not**: park fees, towels, alcohol, GoPro rental, and tips.\n\n**Bring**: cash for fees and drinks, **reef-safe mineral sunscreen** (chemical sunscreens are banned in Thailand's marine parks and crews increasingly check), a dry bag, a hat, and motion-sickness tablets taken 30 minutes *before* boarding if you're prone.\n\n**Leave behind**: drones (prohibited in the national park without a permit, with a serious fine), single-use plastic where you can, and any expectation that your phone survives an unprotected boat day."
                    },
                    {
                        title: "Beating the Crowds, and When to Skip It",
                        icon: "Clock",
                        content: "The 4 Islands circuit is popular enough that timing matters more than operator choice.\n\n**The crowd pattern**: the bulk of shared boats leave Ao Nang **9:00–10:00 AM** and hit Phra Nang and Poda together late morning. The islands are busiest **11 AM – 2 PM**.\n\n**How to dodge it**:\n- Book a **sunrise or early-bird departure** — the [Phi Phi early-bird with Poda breakfast at sunrise](/thailand/krabi/poda-island-sunrise-tour) is built around exactly this logic, reaching the beaches before the fleet.\n- Take an **afternoon/sunset departure** instead: same islands, softer light, thinner crowds, and Chicken Island at sunset is genuinely lovely.\n- Charter privately and run the circuit **backwards** — start at Poda while everyone else starts at Phra Nang.\n- Go **midweek**, and avoid Thai public holidays entirely.\n\n**Consider the alternatives** — the 4 Islands is not automatically the best boat day in Krabi:\n- **[Hong Islands](/thailand/krabi/hong-island-boat-tour)** — an enclosed emerald lagoon and a superb beach, quieter than the 4-island circuit and, for many people, prettier.\n- **[Phi Phi and Maya Bay](/thailand/krabi/maya-bay-adventure-boat-tour)** — bigger, more famous, a longer day; note Maya Bay's [strict rules](/thailand/phuket/maya-bay-phuket) (no swimming in the bay, timed entry).\n- **[Ao Thalane mangrove kayaking](/thailand/krabi/ao-thalane-guided-tour)** — the antidote: quiet, sheltered, no engine noise, and it runs when the open sea doesn't.\n\n**Skip the 4 Islands entirely if** the forecast is bad (the day is miserable in rain and chop), or if you've already done Phi Phi and want variety rather than more beach-hopping. Otherwise, do it once — with the tide in your favour — and understand why it's the trip everyone books.",
                        tourCard: CARD.hong,
                    }
                ],
                faqs: [
                    { q: "What are the 4 islands in the Krabi tour?", a: "**Phra Nang Cave Beach** (on the Railay peninsula), **Chicken Island (Koh Kai)**, **Tup Island (Koh Tup)** with neighbouring Mor Island, and **Poda Island**. At low tide a sandbar surfaces connecting Tup, Mor and Chicken — the **Talay Waek** or \"separated sea\", the tour's signature sight." },
                    { q: "What is Talay Waek and when can you see it?", a: "**Talay Waek — \"the separated sea\"** — is a sandbar that surfaces at **low tide**, physically connecting Tup, Mor and Chicken Islands so you can walk between them with sea on both sides. It only exists at low tide, so ask your operator what the tide is doing on your date before booking." },
                    { q: "Longtail or speedboat for the Krabi 4 Islands tour?", a: "**Longtail** is slower, louder and far more atmospheric — the traditional way, from about $21. **Speedboat** is faster, handles swell much better and fits more stops, typically $33–50. Choose the longtail if the sea is calm and you want the experience; the speedboat if you get seasick, have kids, or want efficiency." },
                    { q: "Is there a national park fee for the Krabi 4 Islands?", a: "Yes — the islands sit in a marine national park and foreign visitors pay roughly **฿200–400** depending on the zone. Some tours include it; many collect cash at the pier. **Always confirm before booking**, since it materially changes the real price." },
                    { q: "How do you avoid crowds on the 4 Islands tour?", a: "Most shared boats leave 9–10 AM and the islands peak 11 AM–2 PM. Take a **sunrise/early-bird departure**, an **afternoon or sunset trip**, or charter privately and run the circuit **backwards**. Midweek beats weekends, and Thai public holidays are worst." },
                    { q: "Is the 4 Islands tour better than Hong Islands?", a: "Not automatically. **Hong Islands** has an enclosed emerald lagoon and an excellent beach, and is generally quieter — many visitors find it prettier. The 4 Islands wins on variety and the Talay Waek sandbar. If you have two boat days, do both; if one, pick by whether you want the sandbar or the lagoon." }
                ],
                jsonLd: {
                    "@context": "https://schema.org",
                    "@graph": [
                        {
                            "@type": "FAQPage",
                            "mainEntity": [
                                { "@type": "Question", "name": "What are the 4 islands in the Krabi tour?", "acceptedAnswer": { "@type": "Answer", "text": "Phra Nang Cave Beach, Chicken Island (Koh Kai), Tup Island (Koh Tup) with Mor Island, and Poda Island. At low tide a sandbar connects Tup, Mor and Chicken — the Talay Waek or separated sea." } },
                                { "@type": "Question", "name": "What is Talay Waek and when can you see it?", "acceptedAnswer": { "@type": "Answer", "text": "A sandbar that surfaces at low tide connecting Tup, Mor and Chicken Islands so you can walk between them with sea on both sides. It only exists at low tide — check the tide for your date." } },
                                { "@type": "Question", "name": "Is there a national park fee for the Krabi 4 Islands?", "acceptedAnswer": { "@type": "Answer", "text": "Yes — roughly ฿200–400 for foreign visitors depending on the park zone. Some tours include it, many collect cash at the pier. Confirm before booking." } }
                            ]
                        }
                    ]
                },
                fastFacts: [
                    { icon: 'Star', label: 'The Signature Sight', value: 'Talay Waek sandbar (low tide only)' },
                    { icon: 'Wallet', label: 'Cost', value: '$21 longtail / $33–50 speedboat' },
                    { icon: 'AlertTriangle', label: 'Extra', value: 'Park fee ฿200–400 — ask if included' }
                ]
            };

        case "tiger-cave-temple-krabi":
            return {
                title: "Tiger Cave Temple Krabi (Wat Tham Sua): The 1,260-Step Climb, Honestly",
                description: "1,260 steps up a 309-metre limestone tower to a summit Buddha and a 360° view. How hard it really is, when to climb, the monkeys, dress code and what's at the top.",
                heroImage: IMG.tigerCave,
                sections: [
                    {
                        title: "What You're Actually Signing Up For",
                        icon: "AlertTriangle",
                        content: "**Wat Tham Sua — the Tiger Cave Temple** — sits northeast of Krabi Town, and the reason people come is a staircase: **1,260 steps** climbing a **309-metre limestone tower** to a golden Buddha and one of the great views in southern Thailand.\n\nLet's be honest about the climb, because a lot of guides aren't. This is **not a scenic stroll with steps**. The staircase is steep, irregular, and several sections have risers far higher than a normal stair — some close to knee height. There's minimal shade for long stretches. In Krabi's heat and humidity, most reasonably fit people take **45 minutes to an hour**; fast climbers do it in 25–30 minutes; plenty of people turn back partway, and that's a perfectly sensible decision rather than a failure.\n\n(You may see **1,237 steps** quoted — that was the older count before repairs and additions brought it to **1,260**. Both numbers appear on signage and in guidebooks.)\n\n**Who should think twice**: anyone with knee or heart problems, vertigo (some sections are exposed with only a handrail between you and a drop), or small children who'll need carrying. There is **no alternative route** to the summit — no cable car, no road. It's the stairs or nothing.\n\n**What you get for it**: a **360-degree panorama** over Krabi's karst landscape — limestone towers scattered across green plain, the coast and islands in the distance — plus a large golden Buddha, a gilded pagoda and a set of Buddha footprints at the summit. On a clear morning it's genuinely one of the best views in Thailand, and the sense of having earned it is a large part of the experience.",
                        tourCard: CARD.tigerCave,
                    },
                    {
                        title: "The Temple Below, and the Name",
                        icon: "History",
                        content: "Most visitors fixate on the staircase and miss that **the temple complex at the base is the actual monastery**, and it's worth an hour in its own right.\n\nWat Tham Sua is a working **forest monastery** and meditation centre, founded around a natural cave where a monk meditated in the 1970s. The name comes from that cave: **tiger paw prints** were reportedly found in it, and stalagmite formations inside are said to resemble tiger claws. Tigers no longer live here, but the name stuck and the cave shrine remains.\n\nBehind the main buildings, a **circular walking path** loops through the base of the limestone massif — a genuinely lovely forest walk past monks' *kutis* (meditation huts) tucked into the rock, banyan trees with enormous buttress roots, and small shrines. It's shaded, flat, and almost empty compared to the staircase. If the 1,260 steps are beyond you or your group, **this loop is the reason to come anyway** — it's the part that actually feels like a monastery.\n\nYou'll also encounter, in various shrine areas, the meditation-on-death imagery that Thai forest monasteries use — skeletal and anatomical displays intended as contemplations on impermanence. It's not staged for tourists; it's a genuine teaching tradition, and reacting to it as a curiosity rather than a practice is the wrong note.\n\n**Entry to the temple is free** (donations welcomed). It's an active religious site, not an attraction with a ticket."
                    },
                    {
                        title: "Practical: Timing, Dress Code, Monkeys and Getting There",
                        icon: "Clock",
                        content: "**When to climb — this is the whole game.** Go at **7:00–8:00 AM**. The temple opens early, the air is as cool as it gets, the light over the karsts is beautiful, and you'll share the stairs with a handful of people instead of a queue. By 11 AM the staircase is brutally hot and the summit platform is crowded. **Late afternoon (4 PM onward)** is the second-best window and gives you sunset from the top — but bring a torch for the descent, because it gets dark fast and the steps are unforgiving in poor light.\n\n**What to bring**: at least **1.5 litres of water per person** (there are vendors at the base, far fewer options up top), a small towel, sunscreen and a hat. Wear **proper shoes with grip** — flip-flops are a genuinely bad idea on worn, uneven stone.\n\n**Dress code**: it's a temple. **Shoulders and knees covered** for men and women, including on the climb. Yes, you'll be hot; yes, it's still required. Sarongs are available at the base if needed.\n\n**The monkeys are a real issue.** Macaques patrol the lower staircase and they are bold, experienced thieves. Keep water bottles out of sight (they associate them with reward), zip your bags, don't carry visible food, and **don't feed them under any circumstance** — feeding is what made them aggressive. Don't make eye contact or bare teeth in a smile; both read as threats.\n\n**Getting there**: about **9 km northeast of Krabi Town**, roughly 30 minutes from Ao Nang. Songthaew or Grab from Krabi Town runs ฿150–300; from Ao Nang expect ฿400–600 return with waiting time. Most visitors do it as part of an inland day — the [Tiger Cave, Emerald Pool and hot springs tour](/thailand/krabi/tiger-cave-temple-spiritual-tour) is the standard combination and handles the transport, which is the fiddly part.\n\n**Pairing it well**: the temple is inland and **weather-proof**, which makes it the right call on a day when the sea is too rough for [island tours](/thailand/krabi/krabi-4-islands-tour-guide). Combine with the [Emerald Pool and hot spring waterfall](/thailand/krabi/hot-spring-waterfall-guided-tour) for a full inland day — jungle pools after a 1,260-step climb are close to perfect.",
                        tourCard: CARD.emerald,
                    }
                ],
                faqs: [
                    { q: "How many steps are there at Tiger Cave Temple?", a: "**1,260 steps** to the summit — you'll also see **1,237** quoted, which was the count before repairs and additions. They climb a 309-metre limestone tower, and several sections have risers close to knee height." },
                    { q: "How hard is the Tiger Cave Temple climb?", a: "Genuinely hard. Steep, irregular steps with minimal shade in tropical heat — **45–60 minutes** for most reasonably fit people, 25–30 for fast climbers. Many turn back partway. Think twice if you have knee or heart problems or vertigo; there's no cable car or road, so it's the stairs or nothing." },
                    { q: "What is the best time to climb Tiger Cave Temple?", a: "**7:00–8:00 AM** — coolest air, best light over the karsts, and far fewer people. By 11 AM it's brutally hot and the summit is crowded. **After 4 PM** is the second-best window and gives you sunset, but bring a torch for the descent." },
                    { q: "Is there an entrance fee for Tiger Cave Temple?", a: "**No — entry is free**, with donations welcomed. It's an active forest monastery rather than a ticketed attraction. Dress code applies: shoulders and knees covered, including while climbing." },
                    { q: "Why is it called the Tiger Cave Temple?", a: "From the cave the monastery grew around: **tiger paw prints** were reportedly found inside, and stalagmite formations there are said to resemble tiger claws. No tigers remain, but the cave shrine does — and the base complex is a working meditation monastery worth exploring in its own right." },
                    { q: "Are the monkeys at Tiger Cave Temple a problem?", a: "Yes, take them seriously. Macaques patrol the lower stairs and are practised thieves — keep water bottles out of sight, zip your bags, carry no visible food, and never feed them. Avoid eye contact and don't bare your teeth in a smile; both read as threats." }
                ],
                jsonLd: {
                    "@context": "https://schema.org",
                    "@graph": [
                        {
                            "@type": "FAQPage",
                            "mainEntity": [
                                { "@type": "Question", "name": "How many steps are there at Tiger Cave Temple?", "acceptedAnswer": { "@type": "Answer", "text": "1,260 steps to the summit (1,237 in older counts), climbing a 309-metre limestone tower. Several sections have risers close to knee height." } },
                                { "@type": "Question", "name": "How hard is the Tiger Cave Temple climb?", "acceptedAnswer": { "@type": "Answer", "text": "Genuinely hard — 45–60 minutes for most reasonably fit people in tropical heat with minimal shade. There is no cable car or road; it's the stairs or nothing." } },
                                { "@type": "Question", "name": "What is the best time to climb Tiger Cave Temple?", "acceptedAnswer": { "@type": "Answer", "text": "7:00–8:00 AM for cool air, good light and few people. After 4 PM is second best and gives sunset, but bring a torch for the descent." } },
                                { "@type": "Question", "name": "Is there an entrance fee for Tiger Cave Temple?", "acceptedAnswer": { "@type": "Answer", "text": "No — entry is free with donations welcomed. Dress code applies: shoulders and knees covered, including while climbing." } }
                            ]
                        }
                    ]
                },
                fastFacts: [
                    { icon: 'AlertTriangle', label: 'The Climb', value: '1,260 steps · 45–60 min' },
                    { icon: 'Ticket', label: 'Entry', value: 'Free (donations welcome)' },
                    { icon: 'Clock', label: 'Best Time', value: '7–8 AM (or after 4 PM)' }
                ]
            };

        case "where-to-stay-in-krabi":
            return {
                title: "Where to Stay in Krabi 2026: Ao Nang vs Railay vs Krabi Town Compared",
                description: "Ao Nang, Railay, Klong Muang, Tubkaek, Krabi Town or Koh Lanta — an honest area-by-area guide to where to base yourself in Krabi and who each suits.",
                heroImage: IMG.hongIsland,
                sections: [
                    {
                        title: "Krabi Is a Province, Not a Town",
                        icon: "Map",
                        content: "The single most common Krabi booking mistake is treating it like one place. **Krabi is a province**, and the options inside it are genuinely different holidays — from a boat-access car-free peninsula to a working Thai town with no beach at all.\n\nAnd unlike most beach destinations, the key variable isn't just atmosphere or price. It's **how you get to the water**. Krabi's coastline is broken up by limestone headlands, so where you sleep determines which boats you can catch, how long your transfers are, and whether the beach outside your hotel is actually swimmable.\n\nThe realistic shortlist, from busiest to quietest:\n\n- **Ao Nang** — the hub: restaurants, boats, nightlife, most hotels\n- **Railay** — boat-only peninsula, no cars, dramatic and committing\n- **Klong Muang & Tubkaek** — quiet northern resort beaches\n- **Krabi Town** — real Thai town, no beach, cheapest\n- **Koh Lanta** — a separate island, 2 hours away, for slower trips\n\n**Our default recommendation for first-timers is Ao Nang** — it's where the boats leave from, and in a destination built around day trips that matters more than the quality of the sand outside your door. But the case for each is genuinely different, so read on before booking.",
                        tourCard: CARD.fourIsland,
                    },
                    {
                        title: "Ao Nang and Railay: The Two Main Choices",
                        icon: "Star",
                        content: "**Ao Nang — the practical hub.** Krabi's main resort strip: a beachfront road of restaurants, bars, dive shops, massage places and tour desks, backed by hotels at every price. Crucially, **this is where the longtails and speedboats leave from** — the [4 Islands](/thailand/krabi/krabi-4-islands-tour-guide), Hong Islands, Phi Phi and the Railay shuttle all launch from here or nearby.\n\n*Stay here if*: it's your first Krabi trip, you're doing several boat days, or you want choice of food and easy logistics.\n*Honest downsides*: **Ao Nang beach itself is mediocre** — narrow, busy, with longtails moored along it and unremarkable water. Nobody's favourite beach; everybody's favourite base. The strip is also touristy in a way some travellers find grating.\n\n**Railay — the dramatic one.** The boat-only peninsula: no cars, no roads in, limestone walls straight out of the sea, and Phra Nang Cave Beach. Read the [full Railay guide](/thailand/krabi/railay-beach-krabi) before committing, because the logistics are real.\n\n*Stay here if*: scenery is your priority, you're climbing, or you want Railay at its best — early morning and after 5 PM, once the day-trip boats leave.\n*Honest downsides*: everything arrives by boat, so prices run higher; you'll wade to board with your luggage; rough seas can strand you; and there's no ATM worth using. **Don't stay here the night before an early flight.**\n\n**Splitting the difference**: a lot of experienced visitors do **Ao Nang for the boat days, then one or two nights on Railay** at the end. It's the best of both, and the transfer is fifteen minutes."
                    },
                    {
                        title: "The Quiet Options: Klong Muang, Tubkaek, Krabi Town and Koh Lanta",
                        icon: "CheckCircle2",
                        content: "**Klong Muang & Tubkaek** — Twenty to thirty minutes north of Ao Nang, and where Krabi keeps its calm resort coast. Wide, quiet beaches, upscale and mid-range resorts with proper grounds and pools, sunset views toward the karst islands, and essentially no nightlife or street scene.\n\n*Stay here if*: you want a resort holiday, you're travelling with family, or you're a couple who'd rather read than bar-hop. Tubkaek in particular has some of Krabi's best sunset views.\n*Downsides*: you'll need transport for everything — expect ฿300–500 each way to Ao Nang — and dining outside your resort is limited.\n\n**Krabi Town** — The provincial capital, 30 minutes inland from Ao Nang. **No beach at all**, and that's the point: this is a working Thai river town with night markets, genuinely good cheap food, a Walking Street on weekends, and prices that make Ao Nang look silly.\n\n*Stay here if*: you're on a budget, you want local atmosphere over resort life, or you're passing through between destinations. It's also the transport hub for buses and the pier at Ao Nam Mao.\n*Downsides*: no beach, and every boat day starts with a transfer.\n\n**Koh Lanta** — Technically Krabi province, practically a separate trip: about two hours away including a ferry. Long, quiet, west-facing beaches, a much slower pace, and a loyal repeat crowd.\n\n*Stay here if*: you have a week and want to stop moving. *Don't* try to combine it with Ao Nang-based day trips — pick one or the other.",
                        tourCard: CARD.kayak,
                    },
                    {
                        title: "Quick Picks, Prices and Transport Reality",
                        icon: "Wallet",
                        content: "**Choose by traveller type:**\n\n- **First-timers, several boat days** → **Ao Nang**\n- **Scenery, climbing, romance** → **Railay** (1–2 nights, or split with Ao Nang)\n- **Families and resort holidays** → **Klong Muang** or **Tubkaek**\n- **Budget and local atmosphere** → **Krabi Town**\n- **Slow week, no day trips** → **Koh Lanta**\n- **Early flight the next morning** → Ao Nang or Krabi Town, never Railay\n\n**What accommodation costs** (per night, 2026): guesthouse double ฿700–1,400; solid 3–4 star with pool ฿1,800–3,500; Railay West and Tubkaek resorts ฿4,000–12,000. In **green season (May–October)** knock 40–60% off all of it.\n\n**Transport reality — budget for this properly**:\n- Krabi Airport → Ao Nang: ~40 min, ฿600–800 by taxi, ฿150 by shared minibus\n- Ao Nang ↔ Krabi Town: 30 min, songthaew ฿60–80, Grab/taxi ฿400–500\n- Ao Nang ↔ Railay: longtail ฿100–150 per person, ~15 min, leaves when full\n- Ao Nang ↔ Klong Muang: ฿300–500 each way\n- Scooter rental: ฿200–300/day — genuinely useful here given the distances, but the coastal road has fast traffic and most travel insurance is void without a motorcycle licence.\n\n**Booking windows**: for the 20 Dec – 10 Jan peak, book 2–3 months ahead, especially for Railay and the northern resorts (many enforce minimum stays). November through March, 3–4 weeks is comfortable. Green season, walk-in rates are often the best you'll find.\n\nOnce you've picked a base, the [3-day itinerary](/thailand/krabi/krabi-3-day-itinerary) shows how to sequence the days — and if you're still choosing between provinces, see [Krabi vs Phuket](/thailand/krabi/krabi-vs-phuket-which-to-visit)."
                    }
                ],
                faqs: [
                    { q: "Where is the best place to stay in Krabi?", a: "**Ao Nang** for most first-timers — it's where the boats leave from, and in a destination built on day trips that beats having nicer sand outside your door. Choose **Railay** for scenery and climbing, **Klong Muang or Tubkaek** for quiet resort holidays, and **Krabi Town** for budget and local atmosphere." },
                    { q: "Is Ao Nang beach any good?", a: "Honestly, it's mediocre — narrow, busy, with longtails moored along it and unremarkable water. It's nobody's favourite beach but everybody's favourite base, because every island tour departs from there. The good beaches (Railay, Phra Nang, Poda, Hong) are all a boat ride away." },
                    { q: "Should I stay in Railay or Ao Nang?", a: "**Ao Nang** for logistics and choice; **Railay** for drama and quiet. A very common solution is both: Ao Nang for the boat days, then one or two nights on Railay at the end. Don't stay on Railay the night before an early flight — it's boat-access only and rough seas can strand you." },
                    { q: "Is it worth staying in Krabi Town?", a: "Yes, if you want local atmosphere and low prices — it's a working Thai river town with night markets, excellent cheap food and a weekend Walking Street. But there's **no beach at all**, and every boat day starts with a 30-minute transfer to Ao Nang." },
                    { q: "How much are hotels in Krabi?", a: "Guesthouse doubles ฿700–1,400; good 3–4 star with pool ฿1,800–3,500; Railay West and Tubkaek resorts ฿4,000–12,000 per night. Green season (May–October) knocks 40–60% off everything. Krabi is meaningfully cheaper than Phuket for equivalent quality." },
                    { q: "Can I stay on Koh Lanta and do Krabi day trips?", a: "Not really — Koh Lanta is about two hours away including a ferry, so it functions as a separate trip rather than a base. Pick either an Ao Nang-based, day-trip-heavy itinerary, or a slow Koh Lanta week. Trying to do both means spending your holiday in transit." }
                ],
                jsonLd: {
                    "@context": "https://schema.org",
                    "@graph": [
                        {
                            "@type": "FAQPage",
                            "mainEntity": [
                                { "@type": "Question", "name": "Where is the best place to stay in Krabi?", "acceptedAnswer": { "@type": "Answer", "text": "Ao Nang for most first-timers — it's where the boats leave from. Railay for scenery and climbing, Klong Muang or Tubkaek for quiet resorts, Krabi Town for budget and local atmosphere." } },
                                { "@type": "Question", "name": "Is Ao Nang beach any good?", "acceptedAnswer": { "@type": "Answer", "text": "Mediocre — narrow, busy, with longtails moored along it. It's nobody's favourite beach but everybody's favourite base, because every island tour departs from there." } },
                                { "@type": "Question", "name": "Should I stay in Railay or Ao Nang?", "acceptedAnswer": { "@type": "Answer", "text": "Ao Nang for logistics and choice; Railay for drama and quiet. Many do both — Ao Nang for boat days, then a night or two on Railay. Never stay on Railay before an early flight." } }
                            ]
                        }
                    ]
                },
                fastFacts: [
                    { icon: 'Star', label: 'Best Base', value: 'Ao Nang (boats leave here)' },
                    { icon: 'Map', label: 'Most Dramatic', value: 'Railay (boat-only)' },
                    { icon: 'Wallet', label: 'Cheapest', value: 'Krabi Town (no beach)' }
                ]
            };

        case "krabi-3-day-itinerary":
            return {
                title: "The Perfect 3-Day Krabi Itinerary (2026): Islands, Railay & the Jungle Interior",
                description: "A field-tested 3-day Krabi plan: the 4 Islands circuit, Railay and Phra Nang, then Tiger Cave Temple and the jungle pools — with timings, costs and bad-weather swaps.",
                heroImage: IMG.fourIsland,
                sections: [
                    {
                        title: "How to Structure Three Days",
                        icon: "Map",
                        content: "Krabi rewards a simple structure: **two water days and one land day.** The islands are why you came, but the inland karst country — jungle pools, hot springs, a 1,260-step temple climb — is what makes Krabi different from every other Thai beach destination, and skipping it is the most common mistake.\n\nThree rules shape this plan:\n\n**1. Book boat days early in the trip.** Weather cancels departures, especially outside the November–March window. Front-load the sea and keep the land day as your flexible buffer — it works in any weather.\n\n**2. Chase the tide, not the clock.** The [4 Islands circuit](/thailand/krabi/krabi-4-islands-tour-guide) is transformed by **low tide**, when the Talay Waek sandbar surfaces and you can walk between three islands. Ask your operator what the tide does on your date and book accordingly.\n\n**3. Start early, always.** Boats leave 9–10 AM en masse; the temple stairs are brutal after 10; the islands peak 11–2. Every good Krabi day starts before the crowd.\n\n**Where to base**: **Ao Nang**, for this itinerary — it's where the boats leave from. See [where to stay in Krabi](/thailand/krabi/where-to-stay-in-krabi) for the alternatives.\n\n**Getting here**: Krabi International Airport takes direct flights from Bangkok (~80 min) and several regional hubs. Airport to Ao Nang is ~40 minutes (฿600–800 taxi, ฿150 shared minibus). Ferries connect to Phi Phi, Koh Lanta and Phuket."
                    },
                    {
                        title: "Day 1: The 4 Islands and the Separated Sea",
                        icon: "Star",
                        content: "**8:00 AM — Hotel pickup in Ao Nang.** Do this on day one: if the sea turns later in your trip, you'll have banked the signature day.\n\n**9:00 AM — Phra Nang Cave Beach.** The limestone overhang, the clear water and the Princess Cave shrine with its wooden offerings. Arriving early here is the difference between a beautiful beach and a busy one.\n\n**10:30 AM — Chicken Island & the snorkelling.** The limestone stack that really does look like a chicken's head, with the best coral and fish of the day around it.\n\n**Midday — Tup, Mor and the Talay Waek sandbar.** If the tide is right, this is the day's centrepiece: a sandbar surfaces and connects three islands so you can walk across the seabed with sea on either side.\n\n**1:00 PM — Poda Island lunch.** The broadest, most relaxed beach of the four, with casuarina shade and a signature limestone tower offshore.\n\n**4:00 PM — Back to Ao Nang.**\n\n**Choosing your boat**: the [longtail version](/thailand/krabi/chicken-island-guided-tour) (from $21) is slower, louder and far more atmospheric; the [speedboat with snorkelling and hotel pickup](/thailand/krabi/phra-nang-cave-beach-boat-tour) (from $36) handles chop better and fits more in. Budget an extra **฿200–400 national park fee** unless it's explicitly included.\n\n**Evening** — Ao Nang's beach road for dinner, or the far better-value local places one street back. Krabi Town's night market is worth the ฿60 songthaew if you have energy.",
                        tourCard: CARD.fourIsland,
                    },
                    {
                        title: "Day 2: Railay, or the Second Island Day",
                        icon: "CheckCircle2",
                        content: "Two good options here depending on what you want from the trip.\n\n**Option A — Railay under your own steam.** Catch a longtail from Ao Nang beachfront (฿100–150, ~15 min, leaves when full) around 9 AM. Do the **viewpoint and hidden lagoon** climb first while you're fresh — it's a steep, rope-assisted scramble up red clay, genuinely strenuous, and the panorama over both bays is the best in Krabi. Then swim at **Phra Nang Cave Beach**, eat on **Railay West**, and stay for sunset before the last boats. Or book a **half-day beginner rock-climbing course** (฿1,000–1,500) — Railay is world-class limestone and the intro courses are excellent value. Full detail in the [Railay guide](/thailand/krabi/railay-beach-krabi).\n\n**Option B — A second, better boat day.** If day one left you wanting more water, the [Hong Islands](/thailand/krabi/hong-island-boat-tour) (from $33) are quieter than the 4-island circuit and, for many visitors, prettier — an enclosed emerald lagoon you enter through a gap in the cliffs, plus an excellent beach. Alternatively push out to [Phi Phi and Maya Bay](/thailand/krabi/maya-bay-adventure-boat-tour) (from $88) — a longer, bigger day; note Maya Bay's [strict rules](/thailand/phuket/maya-bay-phuket): timed entry and no swimming in the bay.\n\n**Option C — the quiet one.** [Ao Thalane mangrove kayaking](/thailand/krabi/ao-thalane-guided-tour) (from $27) paddles tidal channels between karst walls with no engine noise at all. It's the antidote to two speedboat days, it's sheltered enough to run when the open sea doesn't, and it's the day people unexpectedly rate highest.\n\n**Evening** — if you're staying over on Railay, this is the night to do it: the peninsula empties after 5 PM and becomes a completely different place.",
                        tourCard: CARD.hong,
                    },
                    {
                        title: "Day 3: The Inland Day — Temple Stairs and Jungle Pools",
                        icon: "History",
                        content: "This is the day most itineraries skip and most visitors remember.\n\n**7:00 AM — [Tiger Cave Temple](/thailand/krabi/tiger-cave-temple-krabi).** Go at opening. **1,260 steps** up a 309-metre limestone tower to a summit Buddha and a 360° view over the karst plain. It takes most people 45–60 minutes up, it is genuinely hard, and doing it in the 7 AM cool rather than the 11 AM furnace is the difference between memorable and miserable. Free entry; shoulders and knees covered; watch the monkeys, who will take your water bottle.\n\n**10:30 AM — The Emerald Pool (Sa Morakot).** In the Khao Phra Bang Khram forest, a mineral spring pool of an almost unreal blue-green, reached by a short boardwalk through jungle. Swimmable and beautiful. The nearby **Blue Pool** is a deeper, more vivid spring that you look at rather than swim in.\n\n**1:00 PM — The Hot Spring Waterfall.** Thermal water running over smooth limestone into a series of natural stone tubs at around 35–40°C — you sit in them like a staircase of baths, with cool jungle stream below. After 1,260 steps, this is exactly right.\n\nThe [Tiger Cave, Emerald Pool and hot springs tour](/thailand/krabi/tiger-cave-temple-spiritual-tour) (from $43) chains all three with transport, which is the fiddly part — they're spread across the interior and awkward without a driver.\n\n**Alternative day 3s**: a [Thai cooking class](/thailand/krabi/ao-nang-cooking-food-tour) (from $48), the extraordinary [Klong Root crystal lake](/thailand/krabi/crystal-lake-mini-tour) (from $29) where spring water is clear enough that kayaks appear to float on air, or an [ethical elephant visit](/thailand/krabi/krabi-elephant-shelter-entry-ticket) — apply the same no-riding standards set out in our [elephant sanctuary guide](/thailand/phuket/phuket-elephant-sanctuary-guide).\n\n**Costs for three days** (per person, excluding hotel): two boat/activity days $55–130, inland day $43, food $12–25/day, local transport ฿400–800. **Realistic total: $150–260.**\n\n**Bad-weather swap**: if the sea shuts down, move the inland day forward — the temple, pools and springs work in rain, and mangrove kayaking is sheltered. That flexibility is Krabi's quiet advantage over island-only destinations.",
                        tourCard: CARD.tigerCave,
                    }
                ],
                faqs: [
                    { q: "Is 3 days enough for Krabi?", a: "Yes — three days covers the 4 Islands circuit, Railay or a second island day, and the inland karst country (Tiger Cave Temple, Emerald Pool, hot springs). That's the essential Krabi. A fourth day lets you add Phi Phi or Koh Lanta without rushing." },
                    { q: "What's the best order for a Krabi itinerary?", a: "**Boat days first**, land day last. Weather cancels departures, so front-load the sea and keep the inland day — which works in any weather — as your buffer. Within day one, chase **low tide** for the Talay Waek sandbar on the 4 Islands tour." },
                    { q: "How much does 3 days in Krabi cost?", a: "Roughly **$150–260 per person** excluding hotel: two boat/activity days at $55–130, the inland day around $43, food $12–25/day, and ฿400–800 in local transport. Budget an extra ฿200–400 for marine national park fees on island days." },
                    { q: "What should I do in Krabi if the weather is bad?", a: "Move inland — and this is Krabi's real advantage over island-only destinations. **Tiger Cave Temple, the Emerald Pool, the Blue Pool and the hot spring waterfall all work in rain**, and Ao Thalane mangrove kayaking is sheltered enough to run when the open sea doesn't. A cooking class covers the worst days." },
                    { q: "Should I do the 4 Islands or Hong Islands from Krabi?", a: "**4 Islands** for variety and the Talay Waek sandbar; **Hong Islands** for a quieter day and an enclosed emerald lagoon that many visitors find prettier. With two boat days, do both — they're genuinely different. With one, pick by whether you want the sandbar or the lagoon." }
                ],
                jsonLd: {
                    "@context": "https://schema.org",
                    "@graph": [
                        {
                            "@type": "FAQPage",
                            "mainEntity": [
                                { "@type": "Question", "name": "Is 3 days enough for Krabi?", "acceptedAnswer": { "@type": "Answer", "text": "Yes — the 4 Islands circuit, Railay or a second island day, and the inland karst country (Tiger Cave Temple, Emerald Pool, hot springs)." } },
                                { "@type": "Question", "name": "What's the best order for a Krabi itinerary?", "acceptedAnswer": { "@type": "Answer", "text": "Boat days first, land day last — weather cancels departures, so front-load the sea and keep the weather-proof inland day as your buffer. Chase low tide for the Talay Waek sandbar." } },
                                { "@type": "Question", "name": "How much does 3 days in Krabi cost?", "acceptedAnswer": { "@type": "Answer", "text": "Roughly $150–260 per person excluding hotel, plus ฿200–400 marine national park fees on island days." } },
                                { "@type": "Question", "name": "What should I do in Krabi if the weather is bad?", "acceptedAnswer": { "@type": "Answer", "text": "Move inland — Tiger Cave Temple, the Emerald Pool and the hot spring waterfall all work in rain, and Ao Thalane mangrove kayaking is sheltered." } }
                            ]
                        }
                    ]
                },
                fastFacts: [
                    { icon: 'Clock', label: 'Structure', value: '2 water days + 1 inland day' },
                    { icon: 'Wallet', label: 'Budget', value: '$150–260 per person' },
                    { icon: 'Star', label: 'Key Trick', value: 'Book boat days first' }
                ]
            };

        case "krabi-vs-phuket-which-to-visit":
            return {
                title: "Krabi vs Phuket 2026: Which Should You Actually Choose?",
                description: "Same sea, very different holidays. Beaches, nightlife, cost, families, transport and island access compared honestly — plus who each one genuinely suits.",
                heroImage: IMG.hongIsland,
                sections: [
                    {
                        title: "The Short Answer",
                        icon: "Star",
                        content: "Krabi and Phuket sit on the same Andaman coast, share the same [dry season](/thailand/krabi/best-time-to-visit-krabi), and reach many of the same islands. They are still not interchangeable, and the choice usually comes down to one question: **do you want a holiday that happens on land, or one that happens on the water?**\n\n**Choose Phuket if** you want infrastructure — an international airport with direct long-haul flights, hundreds of restaurants, real nightlife, big resorts, malls, hospitals, and enough variety that a two-week stay never repeats itself. Phuket is a fully developed island that happens to have beaches.\n\n**Choose Krabi if** you want landscape — limestone karsts rising out of green water, boat-access beaches, rock climbing, jungle pools and a slower pace. Krabi is a coastline that happens to have hotels.\n\n**The blunt version**: Phuket has better *facilities*; **Krabi has better *scenery***, and it isn't close. Phra Nang, Railay and the Hong lagoon are more dramatic than anything on Phuket's own coast — though Phuket compensates with easier access to Phang Nga Bay and the Similans.\n\n**And the answer a lot of people should hear**: they're **two hours apart by road or ferry**. On a trip of ten days or more, do both — Phuket for arrival, nightlife and the big island days; Krabi for the karsts and the quiet. That's a better holiday than picking a side.",
                        tourCard: CARD.hong,
                    },
                    {
                        title: "Beaches, Islands and Scenery",
                        icon: "Map",
                        content: "**Beaches on the mainland/island itself** — This surprises people: **neither destination's home beaches are the best part**. Phuket's Patong is busy and its water unremarkable; [Kata and Karon](/thailand/phuket/phuket-beaches-guide) are better, and the quiet north (Surin, Bang Tao) better again. Krabi's Ao Nang beach is frankly mediocre. But Krabi has an ace Phuket can't match: **[Railay and Phra Nang](/thailand/krabi/railay-beach-krabi)**, a 15-minute boat ride away, where limestone walls drop straight into clear water. On pure beach drama, Krabi wins.\n\n**Island day trips** — Roughly a draw, with different strengths:\n- Both reach **Phi Phi and Maya Bay** (Krabi is slightly closer).\n- **Krabi** owns the [4 Islands circuit](/thailand/krabi/krabi-4-islands-tour-guide) with its Talay Waek sandbar, and the Hong Islands lagoon.\n- **Phuket** owns easier access to [Phang Nga Bay and James Bond Island](/thailand/phuket/phang-nga-bay), the Racha islands, and the **Similan Islands** — world-class diving, open mid-October to mid-May, effectively a Phuket trip.\n\n**Scenery beyond the water** — Not close. Krabi's interior is limestone towers, jungle, the [Emerald Pool and hot springs](/thailand/krabi/tiger-cave-temple-krabi). Phuket's interior is roads, housing and a big Buddha on a hill. Phuket does have the genuinely lovely [Sino-Portuguese Old Town](/thailand/phuket/phuket-old-town), which Krabi has no answer to.\n\n**Rock climbing** — No contest: **Railay** is world-class limestone with hundreds of bolted routes. Phuket barely competes."
                    },
                    {
                        title: "Nightlife, Food, Families and Cost",
                        icon: "Wallet",
                        content: "**Nightlife** — **Phuket, decisively.** Patong's Bangla Road, beach clubs, cabaret, superclubs and a scene that runs until dawn. Krabi's nightlife is Ao Nang's beach-road bars and a reggae bar or two — pleasant, low-key, over by midnight. If a night out matters, Phuket. If you find that scene off-putting, Krabi is a feature not a compromise.\n\n**Food** — **Phuket**, and by more than people expect. It's a **UNESCO City of Gastronomy** with a distinct Hokkien-Thai cuisine, serious Old Town restaurants and outstanding street food — see the [Phuket food guide](/thailand/phuket/phuket-food-guide). Krabi eats well but conventionally; Ao Nang's beach road is tourist-priced, and the best local food is in Krabi Town's night market.\n\n**Families** — **Krabi edges it** for younger children: calmer, more compact, shorter transfers, less nightlife to navigate, and boat days that feel like adventures. **Phuket wins for teenagers** and for families who want waterparks, big resort pools and variety. Phuket also has far better hospitals, which matters with kids.\n\n**Cost** — **Krabi is cheaper**, meaningfully. Equivalent hotels run 20–40% less, food is cheaper outside the Ao Nang strip, and tours are similar-to-slightly-cheaper. Phuket's peak season (Dec–Jan) is expensive in a way Krabi's simply isn't. Compare our [where to stay in Krabi](/thailand/krabi/where-to-stay-in-krabi) and [Phuket beaches guide](/thailand/phuket/phuket-beaches-guide) for real numbers.\n\n**Getting there** — **Phuket, clearly.** Phuket International takes direct long-haul and dense regional traffic. Krabi International is smaller: mostly Bangkok and regional flights, so many visitors connect via Bangkok or fly into Phuket and transfer two hours by road or ferry."
                    },
                    {
                        title: "The Verdict, by Traveller",
                        icon: "CheckCircle2",
                        content: "**Choose Phuket if you are:**\n- A first-time visitor to Thailand's south wanting easy logistics and variety\n- Travelling long-haul and wanting direct flights\n- Here for nightlife, food, shopping or spa-and-resort living\n- A diver aiming at the Similans (mid-Oct to mid-May)\n- Travelling with teenagers, or anyone who'll be bored in a quiet place\n- On a short trip where transfer time is precious\n\n**Choose Krabi if you are:**\n- Here for landscape above all — karsts, lagoons, boat-access beaches\n- A climber, kayaker or hiker\n- Travelling with young children who benefit from a calmer, more compact base\n- Watching your budget\n- Actively trying to avoid a party scene\n- Someone who'd rather do fewer things slowly\n\n**Do both if** you have 10+ days. The standard and still-correct route: fly into **Phuket**, spend 3–4 days on the west coast and the big island trips, transfer to **Krabi** (2 hours by road, or ferry via Phi Phi to break the journey), and finish with the karsts and Railay. Fly home from Krabi or hop back.\n\n**One planning note that applies to both**: they share the same monsoon. **November–March** is the window for either; **May–October** brings rough Andaman seas, cancelled boats and 40–60% discounts. Krabi has the edge in bad weather thanks to its weather-proof inland attractions — the [3-day itinerary](/thailand/krabi/krabi-3-day-itinerary) is built to be reshuffled around the forecast.",
                        tourCard: CARD.tigerCave,
                    }
                ],
                faqs: [
                    { q: "Is Krabi or Phuket better?", a: "Different, not better. **Phuket** wins on infrastructure — direct international flights, restaurants, nightlife, hospitals, variety. **Krabi** wins on scenery — limestone karsts, Railay, boat-access beaches, jungle pools — and it's cheaper. Phuket is an island with beaches; Krabi is a coastline with hotels." },
                    { q: "Which is cheaper, Krabi or Phuket?", a: "**Krabi**, meaningfully — equivalent hotels run 20–40% less, and food is cheaper away from the Ao Nang strip. Tours cost about the same. Phuket's December–January peak is expensive in a way Krabi's simply isn't." },
                    { q: "Which is better for families, Krabi or Phuket?", a: "**Krabi** for younger children — calmer, more compact, shorter transfers, less nightlife to navigate. **Phuket** for teenagers and families wanting waterparks, big resorts and variety. Phuket also has considerably better hospitals, which matters when travelling with kids." },
                    { q: "Can you visit both Krabi and Phuket in one trip?", a: "Yes, and you should if you have **10+ days** — they're about two hours apart by road or ferry. The standard route is fly into Phuket, do the west coast and big island trips, transfer to Krabi (optionally via Phi Phi to break the journey), and finish with the karsts and Railay." },
                    { q: "Which has better beaches, Krabi or Phuket?", a: "**Krabi**, thanks to Railay and Phra Nang Cave Beach — limestone walls dropping into clear water, 15 minutes by boat. Neither destination's *home* beach is great: Ao Nang is mediocre and Patong is busy with unremarkable water. Phuket's Kata, Karon and the quiet north are solid, but they don't match Railay for drama." },
                    { q: "Which is better for diving, Krabi or Phuket?", a: "**Phuket**, mainly because of access to the **Similan Islands** — world-class diving, open mid-October to mid-May — plus Racha Yai for beginners and the King Cruiser wreck. Krabi has decent local reef diving and easy Phi Phi access, but Phuket is the serious diver's base." }
                ],
                jsonLd: {
                    "@context": "https://schema.org",
                    "@graph": [
                        {
                            "@type": "FAQPage",
                            "mainEntity": [
                                { "@type": "Question", "name": "Is Krabi or Phuket better?", "acceptedAnswer": { "@type": "Answer", "text": "Different, not better. Phuket wins on infrastructure — direct flights, restaurants, nightlife, variety. Krabi wins on scenery — karsts, Railay, boat-access beaches — and is cheaper." } },
                                { "@type": "Question", "name": "Which is cheaper, Krabi or Phuket?", "acceptedAnswer": { "@type": "Answer", "text": "Krabi, meaningfully — equivalent hotels run 20–40% less and food is cheaper away from the Ao Nang strip." } },
                                { "@type": "Question", "name": "Which is better for families, Krabi or Phuket?", "acceptedAnswer": { "@type": "Answer", "text": "Krabi for younger children — calmer, compact, shorter transfers. Phuket for teenagers and families wanting waterparks and variety, plus better hospitals." } },
                                { "@type": "Question", "name": "Can you visit both Krabi and Phuket in one trip?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, if you have 10+ days — they're about two hours apart by road or ferry. Fly into Phuket, then transfer to Krabi, optionally via Phi Phi." } }
                            ]
                        }
                    ]
                },
                fastFacts: [
                    { icon: 'Star', label: 'Scenery', value: 'Krabi wins' },
                    { icon: 'CheckCircle2', label: 'Facilities & Nightlife', value: 'Phuket wins' },
                    { icon: 'Map', label: 'Apart', value: '~2 hours — do both if 10+ days' }
                ]
            };

        default:
            return null;
    }
}

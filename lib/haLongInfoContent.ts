// Ha Long Bay authority pages (2026-09). Same CityInfoData shape as cityInfoContent.ts.
// Reached via getHaLongInfoContent() -> getCityInfoContent().
//
// Every tourCard slug is taken from the live tour list for this city.
import type { CityInfoData } from './cityInfoContent';

const IMG = 'https://res.cloudinary.com/dx2fxyaft/image/upload/v1789200549/asiabylocals/tours/halong-dragon-pearl-cave-artistic-live-performance-and-dinner-ha-long-bay/img0.jpg';

export function getHaLongInfoContent(slug: string): CityInfoData | null {
  switch (slug) {

    case "ha-long-bay-day-trip-or-overnight-cruise":
      return {
        title: "Ha Long Bay: Day Cruise or Overnight, and How to Decide",
        seoTitle: "Ha Long Bay Day Trip vs Overnight Cruise 2026",
        description: "The single decision that shapes the whole trip, what each one actually gives you, and who should pick which.",
        heroImage: IMG,
        fastFacts: [
          { icon: "clock", label: "Day cruise", value: "About 6 hours on the water, 12 hours door to door from Hanoi" },
          { icon: "moon", label: "Overnight", value: "One night aboard, roughly 24 hours" },
          { icon: "map", label: "From Hanoi", value: "Around 2.5 hours each way on the expressway" },
          { icon: "sun", label: "Best light", value: "Early morning and the hour before sunset" },
          { icon: "ship", label: "Star ratings", value: "Self-declared by each operator, not an official grade" },
        ],
        sections: [
          {
            title: "Ha Long Bay: Day Cruise or Overnight, and How to Decide",
            icon: "ship",
            content: "This is the only decision that really matters, and most people make it on price when they should make it on time of day.\n\nA day cruise puts you on the water between roughly midday and late afternoon. That is the busiest window, the light is flat and hard, and every other day boat is doing the same loop at the same time. You see the bay. You do not get it to yourself at any point.\n\nAn overnight cruise buys you the two hours either side of that: the boat is anchored for sunset, the day fleet has gone, and you are back on deck before the next day's boats arrive. The karsts at dawn with mist sitting between them is the image people come for, and it is not available on a day trip.\n\nIf you have one full day and are returning to Hanoi the same night, take the day cruise and accept what it is. If you can give it a night, give it a night. The difference is larger than the price gap suggests.",
            tourCard: {
              slug: "ha-long-bay-day-cruise-swimming-meal-kayaking",
              title: "Ha Long Bay Day Cruise with Swimming, a Meal and Kayaking",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 53",
              duration: "1 day",
              image: IMG,
            },
          },
          {
            title: "What a day actually looks like",
            icon: "clock",
            content: "The day is longer than the cruise. From Hanoi the drive is around two and a half hours each way on the expressway, so a six-hour cruise is a twelve-hour day door to door, and most of that is a coach seat.\n\nA typical day cruise runs a cave, a kayak or bamboo-boat stop, a swim if the season allows, and lunch on board. That is a comfortable amount for the time. Anything promising four or five stops in the same window is moving you between them, not letting you be in them.\n\nOvernight boats do the same first afternoon, then add sunset on deck, dinner, squid fishing for whoever stays up, and a morning activity before the run back to the harbour. Two-night boats go further out and are the only ones that reach the quieter water in any real sense.",
          },
          {
            title: "The three bays, which are not the same place",
            icon: "map",
            content: "Ha Long Bay, Bai Tu Long Bay and Lan Ha Bay sit next to each other and are sold interchangeably, which they are not.\n\nHa Long Bay proper is the famous one and the busiest. The main caves and the postcard viewpoints are here, and so is the traffic.\n\nBai Tu Long is north-east of it, fewer boats are licensed for it, and the itineraries are quieter for the same scenery.\n\nLan Ha is south, off Cat Ba Island, and has the beaches. If you want to swim rather than look, this is the one.\n\nOperators use whichever name sells, so read the itinerary rather than the title. A cruise called a Ha Long cruise may spend most of its time in Lan Ha, which is usually a good thing.",
          },
          {
            title: "Weather, and the days boats do not sail",
            icon: "cloud",
            content: "⚠️ The harbour authority can suspend all sailings in bad weather, and when it does, no operator can override it. This is most likely between July and September, which is typhoon season in the Gulf of Tonkin.\n\nIf that happens your cruise is cancelled rather than delayed, and you get the money back rather than the trip. Build a spare day into the end of a Vietnam itinerary if Ha Long matters to you, and do not put it on the day before an international flight.\n\nOctober to April is the reliable window. The trade-off is that winter water is too cold for most people to swim, and January and February can be grey and drizzly in a way that photographs badly but is atmospheric in person.\n\nMay and June are hot and clear and the water is warm, which is the best combination if you can take the heat.",
          },
        ],
      };

    case "choosing-a-ha-long-bay-cruise":
      return {
        title: "Choosing a Ha Long Bay Cruise: What the Star Ratings Actually Mean",
        seoTitle: "How to Choose a Ha Long Bay Cruise 2026",
        description: "Why a 5-star cruise is not a 5-star anything, which differences are worth paying for, and which are marketing.",
        heroImage: IMG,
        fastFacts: [
          { icon: "ship", label: "Star ratings", value: "Set by the operator, not by any authority" },
          { icon: "users", label: "Boat size", value: "Ranges from about 10 cabins to over 50" },
          { icon: "bed", label: "Worth paying for", value: "A private balcony and a smaller boat" },
          { icon: "utensils", label: "Usually included", value: "All meals on board" },
          { icon: "wallet", label: "Rarely included", value: "Drinks, kayaking extras, tips" },
        ],
        sections: [
          {
            title: "Choosing a Ha Long Bay Cruise: What the Star Ratings Actually Mean",
            icon: "ship",
            content: "Every boat in the bay calls itself five-star, and a fair number call themselves six-star, which is not a category that exists anywhere. There is no independent body grading these boats. The number is chosen by the company selling the cabin.\n\nThat does not make it useless. It correlates loosely with cabin size, whether there is a balcony, and how good the food is. It tells you nothing reliable about the crew, the route, or how many other boats you will be moored beside.\n\nThe things that genuinely change the experience are the number of cabins and whether your cabin opens onto the outside. A twenty-cabin boat unloads twenty cabins' worth of people onto the same small beach at the same time. A ten-cabin boat does not.",
            tourCard: {
              slug: "ha-long-and-lan-ha-bay-day-tour-by-hera-luxury-cruise",
              title: "Ha Long and Lan Ha Bay Day Tour by Hera Luxury Cruise",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 93",
              duration: "7.5 hours",
              image: IMG,
            },
          },
          {
            title: "What is included, and what is not",
            icon: "utensils",
            content: "Meals on board are almost always included and are usually the high point of the food you eat in the region — set menus, seafood-heavy, served at a fixed time.\n\nDrinks are almost never included, and boat bar prices are what you would expect from a bar you cannot leave. Buying a couple of bottles of water before you board is normal and nobody minds.\n\nKayaking is sometimes included and sometimes an on-the-day extra. Cave entrance fees are usually inside the price. Transfers from Hanoi are often a separate line, and shared transfers stop at several hotels, which adds an hour nobody counts.\n\nTips for the crew are expected rather than required, and are collected at the end.",
          },
          {
            title: "Cabins, and the balcony question",
            icon: "bed",
            content: "A private balcony is the one upgrade most people say afterwards was worth it, because the whole point of an overnight is the hours when you are moored and everyone else has gone inside.\n\nLower cabins are cheaper and quieter in swell but have small windows. Upper cabins have the view and the engine noise. Boats with a top sun deck give you the view anyway, so a balcony matters less on a small boat than a large one.\n\nAir conditioning on most boats runs on the generator, and on some it is switched off overnight. If you are travelling in June or July, ask.",
          },
        ],
      };

    case "getting-to-ha-long-bay-from-hanoi":
      return {
        title: "Getting to Ha Long Bay from Hanoi",
        seoTitle: "Hanoi to Ha Long Bay Transfer Guide 2026",
        description: "How long it really takes, the difference between a shared and a private transfer, and the pickup window nobody warns you about.",
        heroImage: IMG,
        fastFacts: [
          { icon: "car", label: "Drive time", value: "About 2.5 hours on the expressway" },
          { icon: "clock", label: "Shared transfer", value: "Add an hour for the hotel pickup loop" },
          { icon: "sunrise", label: "Pickup", value: "Usually between 7.30am and 8.30am" },
          { icon: "map", label: "Main departure", value: "Tuan Chau harbour for Ha Long Bay" },
          { icon: "ship", label: "For Lan Ha", value: "Boats often leave from Got Pier, closer to Cat Ba" },
        ],
        sections: [
          {
            title: "Getting to Ha Long Bay from Hanoi",
            icon: "car",
            content: "The expressway cut this journey roughly in half and it is now around two and a half hours of actual driving. That is the number operators quote, and on the road itself it is accurate.\n\nWhat is not in the number is the pickup. A shared transfer collects from several hotels across Hanoi before it leaves the city, which reliably adds an hour, and if your hotel is first on the loop you spend that hour on the minibus.\n\nIf you are in the Old Quarter you will usually be collected early in that window. If you are further out you may be last, which is better.\n\nA private transfer removes the loop entirely and is the single best value upgrade on a Ha Long day trip, particularly for two or more people where the per-head difference narrows.",
            tourCard: {
              slug: "2-day-ha-long-bay-cruise-and-ninh-binh-unesco-tour",
              title: "2-Day Ha Long Bay Cruise and Ninh Binh UNESCO Tour",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 147",
              duration: "2 days",
              image: IMG,
            },
          },
          {
            title: "Which harbour you leave from",
            icon: "anchor",
            content: "Most Ha Long Bay boats leave from Tuan Chau, a marina on an island joined to the mainland by a causeway. It is large, busy, and the boarding process at peak times takes a while.\n\nBoats working Lan Ha Bay frequently leave from Got Pier instead, which is further along the coast and about half an hour more driving. Your itinerary will say which.\n\nThis matters if you are making your own way there: the two are not close together, and arriving at the wrong one is not recoverable in the time available.",
          },
          {
            title: "Combining it with Ninh Binh",
            icon: "map",
            content: "Ninh Binh sits south of Hanoi and Ha Long sits east, so the two-in-one tours are not a straight line. They work by taking you out to Ninh Binh, back through or around Hanoi, and on to the coast, which is a lot of road.\n\nDone over two days with a night on the boat, that is a reasonable trip and a common one. Done as a single day it is not, and anybody selling it as one is selling you a coach tour with two brief stops.\n\nThe reason people pair them is that Ninh Binh's limestone is the same geology as Ha Long's, seen from a rowing boat on a river instead of a cruise on the sea. Doing both back to back is more repetitive than it sounds on paper.",
          },
        ],
      };

    case "best-time-to-visit-ha-long-bay":
      return {
        title: "Best Time to Visit Ha Long Bay",
        seoTitle: "Best Time to Visit Ha Long Bay 2026",
        description: "Month by month: when the water is warm, when the mist is at its best, and the months when sailings get cancelled.",
        heroImage: IMG,
        fastFacts: [
          { icon: "sun", label: "Warmest water", value: "May to August" },
          { icon: "cloud", label: "Most atmospheric", value: "January to March, misty and grey" },
          { icon: "alert-triangle", label: "Cancellation risk", value: "July to September, typhoon season" },
          { icon: "users", label: "Busiest", value: "Vietnamese holidays in late April and early September" },
          { icon: "thermometer", label: "Winter", value: "Can drop to around 15°C; too cold to swim" },
        ],
        sections: [
          {
            title: "Best Time to Visit Ha Long Bay",
            icon: "calendar-days",
            content: "There is no month that is bad for the scenery and several that are bad for the plan, which is a useful way to think about it.\n\nOctober and November are the closest thing to a sweet spot: the summer heat has gone, the sea is still warm enough to swim, and the sky is usually clear. April and May are the other good window, warming up and generally dry.\n\nJune to August is hot, the water is at its best, and the storm risk is climbing. December to March is cool to cold, frequently grey, and the bay sits under mist that is genuinely beautiful and photographs as a flat white sky.\n\nPick October or April if you want the postcard. Pick February if you want the bay half empty and do not mind a jumper.",
            tourCard: {
              slug: "1-day-ha-long-bay-deluxe-cruise",
              title: "One-Day Ha Long Bay Deluxe Cruise",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 93",
              duration: "1 day",
              image: IMG,
            },
          },
          {
            title: "The months sailings get cancelled",
            icon: "alert-triangle",
            content: "⚠️ Between July and September the Gulf of Tonkin gets typhoons, and when one is approaching the harbour authority stops all boats. This is not a decision your operator makes and not one money changes.\n\nWhen it happens, the cruise is cancelled and refunded. What it costs you is the day, and if the day was your only one, the trip.\n\nThe practical answer is to book Ha Long early in your Vietnam itinerary rather than late, so a lost day can be moved. Putting it immediately before an international departure is the one arrangement that cannot absorb a cancellation.",
          },
          {
            title: "Crowds and the domestic holidays",
            icon: "users",
            content: "The bay is busiest when Vietnam itself is on holiday, which is not the same as the Western peak.\n\nThe last week of April and the first days of May, and the first days of September, fill every boat in the bay and push prices up sharply. Tet, the lunar new year, empties the business districts and fills the coast.\n\nOutside those, midweek is noticeably quieter than the weekend, and a Tuesday departure in a shoulder month is about as good as it gets.",
          },
        ],
      };

    case "lan-ha-bay-and-cat-ba-guide":
      return {
        title: "Lan Ha Bay and Cat Ba: The Quieter Ha Long, the Cruises That Go There, Kayaking, and How to Reach the Island",
        seoTitle: "Lan Ha Bay & Cat Ba Guide 2026",
        description: "Why the newer cruises sail Lan Ha instead of Ha Long, what the bay offers (kayaking through arches, floating villages, empty beaches), Cat Ba island's national park and the ferry and bus logistics from Hanoi.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/cat-ba-island-2-days-lan-ha-bay-hiking-biking-kayaking-ha-long/img0/1600.webp",
        fastFacts: [
          { icon: "ship", label: "Lan Ha", value: "South of Cat Ba island, same karst, far fewer boats" },
          { icon: "map", label: "Cruise port", value: "Got pier (Hai Phong) or Cat Ba's Ben Beo" },
          { icon: "clock", label: "From Hanoi", value: "2.5 hours to Got pier by expressway and shuttle" },
          { icon: "droplet", label: "Kayaking", value: "Dark Cave and Light Cave, Ba Trai Dao beaches" },
          { icon: "leaf", label: "Cat Ba park", value: "Langur reserve, Ngu Lam trek, 2 hours" },
          { icon: "calendar", label: "Best", value: "March to May, September to November" },
        ],
        sections: [

          {
            title: "The quieter bay",
            icon: "ship",
            content: "Lan Ha Bay is the southern continuation of Ha Long's karst, wrapped around Cat Ba island and administered by Hai Phong rather than Quang Ninh, which is why it stayed outside the tourist boat routes for years. It has the same limestone towers, some 400 of them, with more beaches, floating fishing villages, and, at last count, a tenth of the boats. Most of the overnight cruises launched since about 2018 sail here from the Got pier, and the day trips from Cat Ba town cover it by fast boat. If you want the bay without the traffic jam at Sung Sot cave, this is it.",
            tourCard: {
              slug: "cat-ba-island-2-days-lan-ha-bay-hiking-biking-kayaking-ha-long",
              title: "Cat Ba Island: 2 Days Lan Ha Bay - hiking, biking, kayaking (Ha Long)",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 208.00",
              duration: "2 days",
              image: "https://images.asiabylocals.com/asiabylocals/tours/cat-ba-island-2-days-lan-ha-bay-hiking-biking-kayaking-ha-long/img0/1600.webp",
            },
          },
          {
            title: "What a Lan Ha cruise does",
            icon: "droplet",
            content: "A 2-day-1-night cruise from Got pier: boarding at noon, lunch, kayaking through the Dark Cave and Light Cave arch into a hidden lagoon, a swim at Ba Trai Dao (three peaches) beach, sunset on deck, and the next morning a visit to the Viet Hai fishing village by bicycle or a cave, back at the pier by 11:00. The three-day version reaches the outer islands and Bai Tu Long. Prices track the boat; the [choosing a cruise guide](/vietnam/ha-long/choosing-a-ha-long-bay-cruise) applies exactly to Lan Ha too.",
            tourCard: {
              slug: "cat-ba-island-lan-ha-bay-full-day-with-luxury-cruise-ha-long",
              title: "Cat Ba Island: Lan Ha Bay Full-Day with Luxury Cruise (Ha Long)",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 49.50",
              duration: "8 hours",
              image: "https://images.asiabylocals.com/asiabylocals/tours/cat-ba-island-lan-ha-bay-full-day-with-luxury-cruise-ha-long/img0/1600.webp",
            },
          },
          {
            title: "Cat Ba island",
            icon: "leaf",
            content: "Cat Ba is the largest island in the bay, half of it a national park protecting the Cat Ba langur, one of the rarest primates on earth, with about 70 left. The Ngu Lam peak trek is two hours from the park gate to a viewpoint over the karst; Cannon Fort above the town has the bay panorama and wartime tunnels; Cat Co beaches below the town are small and swimmable in summer. Cat Ba town itself is a strip of hotels and seafood restaurants and the base for budget day trips on the bay by fast boat, USD 25 to 45.",
            tourCard: {
              slug: "cat-ba-island-lan-ha-bay-boat-tour-lunch-beach-kayaking-ha-long",
              title: "Cat Ba Island: Lan Ha Bay boat tour - lunch, beach, kayaking (Ha Long)",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 49.50",
              duration: "8 hours",
              image: "https://images.asiabylocals.com/asiabylocals/tours/cat-ba-island-lan-ha-bay-boat-tour-lunch-beach-kayaking-ha-long/img0/1600.webp",
            },
          },
          {
            title: "Getting there",
            icon: "map",
            content: "From Hanoi: the expressway to Hai Phong then the Got pier (2.5 hours by limousine bus or cruise shuttle), where the cruises board and the car ferry crosses to Cat Ba in 15 minutes; Cat Ba town is a further 40 minutes across the island by bus. Direct bus-and-ferry packages from Hanoi to Cat Ba town take about four hours. From Ha Long city, a fast boat or the Tuan Chau ferry. The [getting to Ha Long guide](/vietnam/ha-long/getting-to-ha-long-bay-from-hanoi) covers the Ha Long side.",
            tourCard: {
              slug: "cat-ba-island-lan-ha-bay-fishing-tour-with-local-fishermen-ha-long",
              title: "Cat Ba Island: Lan Ha Bay Fishing Tour with local fishermen (Ha Long)",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 68.00",
              duration: "3 hours",
              image: "https://images.asiabylocals.com/asiabylocals/tours/cat-ba-island-lan-ha-bay-fishing-tour-with-local-fishermen-ha-long/img0/1600.webp",
            },
          },
          {
            title: "When",
            icon: "calendar",
            content: "March to May and September to November are the months: clear, warm, calm. Summer is hot with domestic crowds on Cat Ba's beaches and typhoon closures from July to September. December to February is cool and misty, atmospheric on the water and cold at night on deck. The langurs are not on the visitor trails; the trek is for the forest and the view.",
            tourCard: {
              slug: "ha-long-bay-to-lan-ha-bay-cat-ba-island-day-tour",
              title: "Ha Long Bay to Lan Ha Bay - Cat Ba Island Day Tour",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 63.50",
              duration: "7 hours",
              image: "https://images.asiabylocals.com/asiabylocals/tours/ha-long-bay-to-lan-ha-bay-cat-ba-island-day-tour/img0/1600.webp",
            },
          },
        ],
        faqs: [
          { q: "What is the difference between Lan Ha Bay and Ha Long Bay?", a: "Same karst landscape; Lan Ha is the southern part around Cat Ba island, with more beaches and far fewer boats. Most newer overnight cruises sail Lan Ha." },
          { q: "How do I get to Lan Ha Bay from Hanoi?", a: "Expressway to Hai Phong and the Got pier, about 2.5 hours, where cruises board and the ferry crosses to Cat Ba." },
          { q: "Is Cat Ba island worth visiting?", a: "Yes for a day or two: the national park trek, Cannon Fort's view, small beaches in summer and budget day trips on Lan Ha by fast boat." },
          { q: "When is the best time for Lan Ha Bay?", a: "March to May and September to November: clear and calm. Cruises stop for typhoons from July to September." },
        ],
      };

    case "ha-long-bay-caves-and-islands-guide":
      return {
        title: "Ha Long Bay's Caves and Islands: Sung Sot, Thien Cung, Ti Top, Luon Cave, and What Each Cruise Route Sees",
        seoTitle: "Ha Long Bay Caves & Islands Guide 2026",
        description: "The named stops that fill every Ha Long itinerary, what is at each, which are crowded, the kayaking spots, the Cua Van floating village, and how routes 1 and 2 differ.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/ha-long-bay-luxury-cruise-sung-sot-cave-luon-cave-and-ti-top-by-local-operator/img0/1600.webp",
        fastFacts: [
          { icon: "landmark", label: "Sung Sot", value: "Surprise Cave, the largest, on route 2, always busy" },
          { icon: "landmark", label: "Thien Cung", value: "Heaven Palace cave, route 1, day-trip standard" },
          { icon: "mountain", label: "Ti Top", value: "Island with a beach and 400 steps to the viewpoint" },
          { icon: "droplet", label: "Luon", value: "Kayak or bamboo boat through an arch into a lagoon" },
          { icon: "ship", label: "Cua Van", value: "Floating fishing village, rowed by locals" },
          { icon: "map", label: "Routes", value: "1 (day, Thien Cung, Dau Go) and 2 (overnight, Sung Sot, Ti Top, Luon)" },
        ],
        sections: [

          {
            title: "How the bay is organised",
            icon: "map",
            content: "Ha Long's 1,600 islands are toured on fixed routes set by the management board, and every boat follows one: route 1 is the day-trip loop from Tuan Chau past the Kissing Rocks to Thien Cung and Dau Go caves; route 2 is the overnight loop to Sung Sot cave, Ti Top island and Luon cave, sleeping at anchor near Cua Van; routes 3 and 4 push to Bai Tu Long. Knowing the route tells you what you will see. The [day trip or overnight guide](/vietnam/ha-long/ha-long-bay-day-trip-or-overnight-cruise) explains which to pick.",
            tourCard: {
              slug: "ha-long-bay-luxury-cruise-sung-sot-cave-luon-cave-and-ti-top-by-local-operator",
              title: "Ha Long Bay Luxury Cruise: Sung Sot Cave, Luon Cave and Ti Top by Local Operator",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 148.50",
              duration: "7.5 hours",
              image: "https://images.asiabylocals.com/asiabylocals/tours/ha-long-bay-luxury-cruise-sung-sot-cave-luon-cave-and-ti-top-by-local-operator/img0/1600.webp",
            },
          },
          {
            title: "The caves",
            icon: "landmark",
            content: "Sung Sot (Surprise) cave on Bo Hon island is the largest, three chambers on a paved 500-metre loop with lit formations and a window over the bay; every overnight boat visits and the path is a queue between 9:00 and 11:00. Thien Cung (Heaven Palace) is the day-trip cave, smaller, heavily lit, on Dau Go island beside the older Dau Go cave. Me Cung and Trinh Nu are quieter caves on some routes. Luon cave is not a cave to walk but an arch to paddle through into a lagoon ringed by cliffs, and it is the best 40 minutes on the bay.",
            tourCard: {
              slug: "halong-bay-titop-island-sung-sot-and-luon-caves",
              title: "Halong Bay, Titop Island, Sung Sot and Luon Caves",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 74.50",
              duration: "12 hours",
              image: "https://images.asiabylocals.com/asiabylocals/tours/halong-bay-titop-island-sung-sot-and-luon-caves/img0/1600.webp",
            },
          },
          {
            title: "Islands and beaches",
            icon: "mountain",
            content: "Ti Top island, named for the Soviet cosmonaut who visited with Ho Chi Minh in 1962, has the bay's most-used beach and 400 steps to a viewpoint that gives the classic photograph; the beach is packed in summer afternoons. Soi Sim is the quieter alternative some boats use. The Kissing Rocks (Trong Mai), two chicken-shaped stacks, are the bay's symbol and a boat-side photo stop. Ban Sen and the Bai Tu Long islands are the reward of the three-day routes.",
            tourCard: {
              slug: "ha-noi-ha-long-bay-day-trip-titop-sung-sot-luon-cave-by-local-operator",
              title: "Ha Noi: Ha Long Bay Day Trip, Titop, Sung Sot, Luon Cave by Local Operator",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 57.50",
              duration: "6 hours",
              image: "https://images.asiabylocals.com/asiabylocals/tours/ha-noi-ha-long-bay-day-trip-titop-sung-sot-luon-cave-by-local-operator/img0/1600.webp",
            },
          },
          {
            title: "Cua Van and the villages",
            icon: "ship",
            content: "The floating fishing villages, Cua Van, Vung Vieng and Ba Hang, were moved ashore in 2014 for environmental reasons; a few families remain as a cultural stop, rowing visitors through the anchorage in bamboo boats and showing the floating school and the pearl farms. It is a gentle half hour and a reminder that people lived on this water for generations. Tips to the rowers are expected.",
            tourCard: {
              slug: "ha-long-bay-full-day-cruise-buffet-kayak-and-sung-sot-cave-by-local-operator",
              title: "Ha Long Bay: Full-Day Cruise - Buffet, Kayak and Sung Sot Cave by Local Operator",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 30.00",
              duration: "12 hours",
              image: "https://images.asiabylocals.com/asiabylocals/tours/ha-long-bay-full-day-cruise-buffet-kayak-and-sung-sot-cave-by-local-operator/img0/1600.webp",
            },
          },
          {
            title: "Practical",
            icon: "calendar",
            content: "Cave entries and the Ti Top landing are included in the bay's sightseeing fee, which cruises bundle. Wear shoes with grip in the caves; the paths are wet. The Sung Sot queue is worst mid-morning and thinnest at the first 7:30 landing, which the better cruises take. Kayaking runs unless the bay is rough; the [best time guide](/vietnam/ha-long/best-time-to-visit-ha-long-bay) has the seasons, and the [choosing a cruise](/vietnam/ha-long/choosing-a-ha-long-bay-cruise) page which boats do the early landings.",
            tourCard: {
              slug: "halong-bay-sung-sot-titop-island-and-luon-cave",
              title: "Halong Bay, Sung Sot, Titop Island and Luon Cave",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 53.00",
              duration: "6 hours",
              image: "https://images.asiabylocals.com/asiabylocals/tours/halong-bay-sung-sot-titop-island-and-luon-cave/img0/1600.webp",
            },
          },
        ],
        faqs: [
          { q: "Which cave is best in Ha Long Bay?", a: "Sung Sot for scale, on the overnight route; Luon cave for the kayak through the arch into the lagoon, which is the best stop on the bay." },
          { q: "What is Ti Top island?", a: "An island with the bay's main beach and 400 steps to a viewpoint, on the overnight route; named for cosmonaut Gherman Titov's 1962 visit." },
          { q: "Are the floating villages still inhabited?", a: "Mostly not: residents were moved ashore in 2014, and a few families remain at Cua Van and Vung Vieng as a cultural stop with bamboo-boat rides." },
          { q: "Do day trips see Sung Sot cave?", a: "Usually not: day trips follow route 1 to Thien Cung and Dau Go caves. Sung Sot, Ti Top and Luon are on the overnight route 2." },
        ],
      };

    case "ha-long-bay-with-kids":
      return {
        title: "Ha Long Bay with Kids: Which Cruise, Cabin and Route Work for Families, and What to Skip",
        seoTitle: "Ha Long Bay with Kids 2026",
        description: "Whether to do a day trip or an overnight with children, the family cabins and connecting rooms, kayaking and swimming ages, the cave steps, seasickness, and the boats that welcome families.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/ha-long-bay-2-day-1-night-or-3-day-2-night-with-a-6-star-cruise/img0/1600.webp",
        fastFacts: [
          { icon: "users", label: "Best ages", value: "5 and up for overnight; day trip from 3" },
          { icon: "ship", label: "Format", value: "2-day-1-night on a mid-range or family cruise" },
          { icon: "droplet", label: "Kayaking", value: "Double kayaks, children from about 6 with an adult" },
          { icon: "mountain", label: "Ti Top steps", value: "400 steps; skip with toddlers" },
          { icon: "bed", label: "Cabins", value: "Family cabins or connecting rooms on larger boats" },
          { icon: "calendar", label: "Season", value: "April to June and September to October" },
        ],
        sections: [

          {
            title: "Day or night",
            icon: "ship",
            content: "With children under five, a day trip from Hanoi (12 hours door to door, six on the water) is long but avoids the cabin question. From about five upwards the overnight is the better day: a cabin with a window on the water, kayaking, a swim, the sunset deck and the cave next morning, and the children remember it. Choose a 2-day-1-night; three days is too long for most families. The [day trip or overnight guide](/vietnam/ha-long/ha-long-bay-day-trip-or-overnight-cruise) has the general case.",
            tourCard: {
              slug: "ha-long-bay-2-day-1-night-or-3-day-2-night-with-a-6-star-cruise",
              title: "Ha Long Bay 2-Day 1-Night or 3-Day 2-Night With A 6-Star Cruise",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 335.50",
              duration: "2 days",
              image: "https://images.asiabylocals.com/asiabylocals/tours/ha-long-bay-2-day-1-night-or-3-day-2-night-with-a-6-star-cruise/img0/1600.webp",
            },
          },
          {
            title: "Choosing the boat",
            icon: "bed",
            content: "Larger mid-range and premium cruises (20 to 40 cabins) have family cabins or connecting rooms, children's rates, and staff used to families; the small boutique boats with eight cabins are quieter and often adults-oriented. Look for a sundeck with rails, a swimming platform, a kayaking policy that allows children in doubles, and a cabin with a bathtub rather than a shower if the children are small. The [choosing a cruise guide](/vietnam/ha-long/choosing-a-ha-long-bay-cruise) covers the classes; ask the operator directly about the cabin layout before booking.",
            tourCard: {
              slug: "halong-bay-cruise-cave-titop-island-and-kayak-bamboo-boat-ha-long",
              title: "Halong Bay Cruise: Cave, Titop Island and Kayak/Bamboo Boat (Ha Long)",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 118.50",
              duration: "13 hours",
              image: "https://images.asiabylocals.com/asiabylocals/tours/halong-bay-cruise-cave-titop-island-and-kayak-bamboo-boat-ha-long/img0/1600.webp",
            },
          },
          {
            title: "Activities by age",
            icon: "droplet",
            content: "Kayaking in doubles works from about six with an adult; younger children ride in the bamboo rowing boats through Luon cave instead. Swimming from the boat is for confident swimmers with life jackets, which are provided. Ti Top's 400 steps are fine for school-age children and not for toddlers; the beach at the bottom is the alternative. Sung Sot cave is a paved 500-metre loop with steps, manageable from about four. Cooking demonstrations, squid fishing at night and tai chi at dawn keep the older ones busy.",
            tourCard: {
              slug: "ha-long-bay-cruise-with-lunch-and-activities",
              title: "Ha Long Bay Cruise with Lunch and Activities",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 109.50",
              duration: "Full day",
              image: "https://images.asiabylocals.com/asiabylocals/tours/ha-long-bay-cruise-with-lunch-and-activities/img0/1600.webp",
            },
          },
          {
            title: "Comfort and safety",
            icon: "shield",
            content: "The bay is sheltered and seasickness is rare, but the sea can be choppy on the transfer tender in wind. Life jackets are mandatory on tenders and kayaks. Cabins have air conditioning; bring a light jacket for the deck from November to March. Food on cruises is buffet or set menu with plain options (rice, noodles, fruit) that children eat; tell the operator about allergies. The shuttle from Hanoi is 2.5 hours each way with a stop, which is the hardest part of the trip for small children.",
            tourCard: {
              slug: "lan-ha-bay-2-3-day-cruise-with-private-cabin-with-balcony-ha-long",
              title: "Lan Ha Bay: 2–3 Day Cruise with Private Cabin with Balcony (Ha Long)",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 351.00",
              duration: "2 days",
              image: "https://images.asiabylocals.com/asiabylocals/tours/lan-ha-bay-2-3-day-cruise-with-private-cabin-with-balcony-ha-long/img0/1600.webp",
            },
          },
          {
            title: "When",
            icon: "calendar",
            content: "April to June and September to October are warm enough to swim and calm enough to kayak. July and August are hot and are the typhoon months, when cruises cancel at short notice; December to February is cool and misty, no swimming, but atmospheric. The [best time guide](/vietnam/ha-long/best-time-to-visit-ha-long-bay) has the detail. Book family cabins two to four weeks ahead in high season.",
            tourCard: {
              slug: "otis-ha-long-bay-luxury-cruise-buffet-and-stylish-deck",
              title: "Otis Ha Long Bay Luxury Cruise, Buffet and Stylish Deck",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 73.00",
              duration: "Flexible",
              image: "https://images.asiabylocals.com/asiabylocals/tours/otis-ha-long-bay-luxury-cruise-buffet-and-stylish-deck/img0/1600.webp",
            },
          },
        ],
        faqs: [
          { q: "Is Ha Long Bay suitable for children?", a: "Yes from about five for an overnight cruise and from three for a day trip. Choose a larger cruise with family cabins and a swimming platform." },
          { q: "Can kids kayak in Ha Long Bay?", a: "From about six in a double kayak with an adult, life jackets provided. Younger children use the bamboo rowing boats." },
          { q: "Which is better with kids, a day trip or an overnight cruise?", a: "Overnight from about five: kayaking, swimming, the sunset and the cave next morning. A day trip is 12 hours door to door with six on the water." },
          { q: "When is the best time to take children to Ha Long Bay?", a: "April to June and September to October, warm enough to swim and calm for kayaking; avoid the typhoon months of July to September." },
        ],
      };

    case "bai-tu-long-bay-guide":
      return {
        title: "Bai Tu Long Bay: The Empty Corner of Ha Long, the Three-Day Cruises, Vung Vieng, and Who It Suits",
        seoTitle: "Bai Tu Long Bay Guide 2026",
        description: "What lies north-east of the crowded Ha Long routes: the same karst with almost no boats, the two-night cruises that go there, Vung Vieng village and Thien Canh Son cave, and the trade-off against Lan Ha.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/bai-tu-long-bay-cruise-with-vung-vieng-fishing-village-in-ha-long/img0/1600.webp",
        fastFacts: [
          { icon: "ship", label: "Where", value: "North-east of Ha Long Bay, Quang Ninh province" },
          { icon: "clock", label: "Cruise", value: "2-day-1-night or 3-day-2-night from Ha Long" },
          { icon: "landmark", label: "Stops", value: "Thien Canh Son cave, Vung Vieng village, Cong Do, Cap La" },
          { icon: "users", label: "Boats", value: "A handful of operators licensed for the routes" },
          { icon: "droplet", label: "Kayaking", value: "Cong Dam lagoons, quiet water" },
          { icon: "calendar", label: "Best", value: "March to May, September to November" },
        ],
        sections: [

          {
            title: "The quiet bay",
            icon: "ship",
            content: "Bai Tu Long is the north-eastern third of the Ha Long world heritage area, the same drowned-karst landscape stretching towards the Chinese border, and it is where the bay is still empty: a national park of islands with a handful of licensed cruise operators, no day-trip traffic, and anchorages where yours is the only boat. It costs a longer sail from Ha Long and a night more on the water, which is exactly what keeps it quiet.",
            tourCard: {
              slug: "bai-tu-long-bay-cruise-with-vung-vieng-fishing-village-in-ha-long",
              title: "Bai Tu Long Bay Cruise with Vung Vieng fishing Village in Ha Long",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 260.50",
              duration: "2 days",
              image: "https://images.asiabylocals.com/asiabylocals/tours/bai-tu-long-bay-cruise-with-vung-vieng-fishing-village-in-ha-long/img0/1600.webp",
            },
          },
          {
            title: "What a cruise does",
            icon: "landmark",
            content: "Boats board at Ha Long (Tuan Chau or Hon Gai) and sail north-east for three hours past the busy routes, then two days of the bay to yourselves: kayaking the Cong Dam lagoons, Thien Canh Son cave with its view from the mouth, the Vung Vieng floating village rowed by former fishing families, a swim at Cap La or Ban Chan beach, squid fishing from the deck at night, and the return on the second or third morning. The two-night version reaches furthest; the one-night version gives a taste with a long sail each way.",
            tourCard: {
              slug: "ha-long-and-bai-tu-long-bay-cruise-with-kayaking-and-buffet-lunch-by-local-operator",
              title: "Ha Long and Bai Tu Long Bay Cruise with Kayaking and Buffet Lunch by Local Operator",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 55.50",
              duration: "5 hours",
              image: "https://images.asiabylocals.com/asiabylocals/tours/ha-long-and-bai-tu-long-bay-cruise-with-kayaking-and-buffet-lunch-by-local-operator/img0/1600.webp",
            },
          },
          {
            title: "Bai Tu Long or Lan Ha",
            icon: "map",
            content: "Both are the answer to the crowded core routes. Lan Ha, off Cat Ba, is closer to Hanoi, has more beaches and more boats to choose from, and works as a one-night cruise; the [Lan Ha guide](/vietnam/ha-long/lan-ha-bay-and-cat-ba-guide) covers it. Bai Tu Long is emptier still, wilder, and best over two nights; it suits people who want the bay as a landscape rather than as activities, and photographers. If you have one night, Lan Ha; two nights and a wish for silence, Bai Tu Long.",
            tourCard: {
              slug: "deluxe-bai-tu-long-bay-2-day-cruise-with-meals-in-ha-long",
              title: "Deluxe Bai Tu Long Bay 2-Day Cruise with Meals in Ha Long",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 439.50",
              duration: "2 days",
              image: "https://images.asiabylocals.com/asiabylocals/tours/deluxe-bai-tu-long-bay-2-day-cruise-with-meals-in-ha-long/img0/1600.webp",
            },
          },
          {
            title: "Boats and cost",
            icon: "users",
            content: "Fewer operators run Bai Tu Long, mostly mid-range and premium wooden junks and small ships with 10 to 30 cabins; prices run above the equivalent Ha Long boat because of the longer sailing. The [choosing a cruise guide](/vietnam/ha-long/choosing-a-ha-long-bay-cruise) framework applies: cabin class, deck, kayaking policy, early landings. Book three to six weeks ahead in high season; the licensed boats are few.",
            tourCard: {
              slug: "bhaya-cruises-2-day-halong-bay-tour-ha-long",
              title: "Bhaya Cruises 2-Day Halong Bay Tour (Ha Long)",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 221.00",
              duration: "22 hours",
              image: "https://images.asiabylocals.com/asiabylocals/tours/bhaya-cruises-2-day-halong-bay-tour-ha-long/img0/1600.webp",
            },
          },
          {
            title: "When",
            icon: "calendar",
            content: "March to May and September to November for calm, clear water. Summer brings heat and the typhoon closures; the north-east monsoon from December to February makes Bai Tu Long colder and mistier than the sheltered core, and the long sail rougher. The [best time guide](/vietnam/ha-long/best-time-to-visit-ha-long-bay) has the months, and the [getting to Ha Long](/vietnam/ha-long/getting-to-ha-long-bay-from-hanoi) page the transfer.",
            tourCard: {
              slug: "la-regina-4-star-cruise-bai-tu-long-bay-in-ha-long",
              title: "La Regina 4 star cruise - Bai Tu Long Bay in Ha Long",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 156.00",
              duration: "2 days",
              image: "https://images.asiabylocals.com/asiabylocals/tours/la-regina-4-star-cruise-bai-tu-long-bay-in-ha-long/img0/1600.webp",
            },
          },
        ],
        faqs: [
          { q: "What is Bai Tu Long Bay?", a: "The north-eastern part of the Ha Long heritage area: the same karst islands with almost no boats, visited by a few licensed two- and three-day cruises." },
          { q: "Is Bai Tu Long better than Ha Long Bay?", a: "Quieter and wilder, with the same landscape; it needs a longer sail and ideally two nights. The core Ha Long routes have the famous caves and the crowds." },
          { q: "How long is a Bai Tu Long cruise?", a: "Two days and one night at minimum; three days and two nights to reach the far islands. Boats leave from Ha Long, not Cat Ba." },
          { q: "Should I choose Bai Tu Long or Lan Ha?", a: "One night and closer to Hanoi: Lan Ha. Two nights and a wish for empty water: Bai Tu Long." },
        ],
      };

    default:
      return null;
  }
}

// Colombo authority pages (2026-09). Same CityInfoData shape as cityInfoContent.ts.
// Reached via getColomboInfoContent() -> getCityInfoContent().
import type { CityInfoData } from './cityInfoContent';

const CARD_0 = {
  slug: "private-sigiriya-rock-dambulla-cave-temple-day-trip-lunch",
  title: "Private Sigiriya Rock and Dambulla Cave Temple Day Trip with Lunch",
  description: 'Bookable directly through AsiaByLocals, with a verified local operator.',
  price: 'From USD 143',
  duration: "Full day",
  image: "https://res.cloudinary.com/dx2fxyaft/image/upload/v1788368938/asiabylocals/tours/sigiriya-dambulla-private-day-trip-with-lunch-all-inclusive/img0.jpg",
};

const CARD_1 = {
  slug: "colombo-anuradhapura-day-trip-mihintale-ancient-city-stops",
  title: "Colombo to Anuradhapura Day Trip with Mihintale and Ancient City Stops",
  description: 'Bookable directly through AsiaByLocals, with a verified local operator.',
  price: 'From USD 62.65',
  duration: "Full day",
  image: "https://res.cloudinary.com/dx2fxyaft/image/upload/v1788369130/asiabylocals/tours/from-colombo-to-anuradhapura-transfer-with-sightseeing-stops/img0.jpg",
};

const CARD_2 = {
  slug: "colombo-city-sightseeing-tuk-tuk-hotel-pickup",
  title: "Colombo City Sightseeing by Tuk-Tuk with Hotel Pickup",
  description: 'Bookable directly through AsiaByLocals, with a verified local operator.',
  price: 'From USD 52',
  duration: "3 hours",
  image: "https://res.cloudinary.com/dx2fxyaft/image/upload/v1788368764/asiabylocals/tours/shore-excursion-colombo-city-sightseeing-tour-by-tuk-tuk/img0.jpg",
};

const CARD_3 = {
  slug: "negombo-day-trip-colombo-dutch-fort-canals-seafood-lunch",
  title: "Negombo Day Trip from Colombo: Dutch Fort, Canals and a Seafood Lunch",
  description: 'Bookable directly through AsiaByLocals, with a verified local operator.',
  price: 'From USD 79.55',
  duration: "10 hours",
  image: "https://res.cloudinary.com/dx2fxyaft/image/upload/v1788369177/asiabylocals/tours/negombo-day-trip-dutch-forts-canals-seafood/img0.jpg",
};

const CARD_4 = {
  slug: "galle-fort-turtle-beach-bentota-mangrove-safari-private-day-tr",
  title: "Galle Fort, Turtle Beach and Bentota Mangrove Safari Private Day Trip",
  description: 'Bookable directly through AsiaByLocals, with a verified local operator.',
  price: 'From USD 156',
  duration: "10 hours",
  image: "https://res.cloudinary.com/dx2fxyaft/image/upload/v1788368945/asiabylocals/tours/all-inclusive-galle-turtle-beach-mangrove-river-safari/img0.jpg",
};

const CARD_5 = {
  slug: "colombo-anuradhapura-day-trip-mihintale-ancient-city-stops",
  title: "Colombo to Anuradhapura Day Trip with Mihintale and Ancient City Stops",
  description: 'Bookable directly through AsiaByLocals, with a verified local operator.',
  price: 'From USD 62.65',
  duration: "Full day",
  image: "https://res.cloudinary.com/dx2fxyaft/image/upload/v1788369130/asiabylocals/tours/from-colombo-to-anuradhapura-transfer-with-sightseeing-stops/img0.jpg",
};

const CARD_6 = {
  slug: "colombo-city-sightseeing-tuk-tuk-hotel-pickup",
  title: "Colombo City Sightseeing by Tuk-Tuk with Hotel Pickup",
  description: 'Bookable directly through AsiaByLocals, with a verified local operator.',
  price: 'From USD 52',
  duration: "3 hours",
  image: "https://res.cloudinary.com/dx2fxyaft/image/upload/v1788368764/asiabylocals/tours/shore-excursion-colombo-city-sightseeing-tour-by-tuk-tuk/img0.jpg",
};

const CARD_7 = {
  slug: "colombo-port-city-sunset-cruise-snacks",
  title: "Colombo Port City Sunset Cruise with Snacks",
  description: 'Bookable directly through AsiaByLocals, with a verified local operator.',
  price: 'From USD 167.82',
  duration: "3 hours",
  image: "https://res.cloudinary.com/dx2fxyaft/image/upload/v1788368743/asiabylocals/tours/port-city-colombo-sunset-cruise-with-snacks/img0.jpg",
};

export function getColomboInfoContent(slug: string): CityInfoData | null {
  switch (slug) {
    case "best-time-to-visit-colombo":
      return {
        title: "Best Time to Visit Colombo: A Month-by-Month Weather Guide",
        seoTitle: "Best Time to Visit Colombo",
        description: "Colombo sits on Sri Lanka's west coast, so it follows the southwest monsoon, not the national one. Month-by-month weather, crowds and what to book when.",
        heroImage: "https://res.cloudinary.com/dx2fxyaft/image/upload/v1788368938/asiabylocals/tours/sigiriya-dambulla-private-day-trip-with-lunch-all-inclusive/img0.jpg",
        fastFacts: [
          { icon: "calendar-days", label: "Driest, most reliable months", value: "December to March" },
          { icon: "calendar-days", label: "Southwest (Yala) monsoon", value: "Roughly May to September, affecting the west and south coasts" },
          { icon: "calendar-days", label: "Northeast (Maha) monsoon", value: "Roughly October to January, affecting the east and north instead" },
          { icon: "calendar-days", label: "Temperature range", value: "Around 26-32C year-round, with high humidity" },
          { icon: "calendar-days", label: "Busiest and priciest", value: "Mid-December to mid-January, and the Sinhala and Tamil New Year in April" },
          { icon: "calendar-days", label: "Best value with acceptable weather", value: "Late February to early April, and again in late September" },
        ],
        sections: [
          {
            title: "Best Time to Visit Colombo: A Month-by-Month Weather Guide",
            icon: "calendar-days",
            content: "Most articles about when to visit Sri Lanka describe a single rainy season, and most of them are wrong for Colombo. The island has two monsoons that arrive on opposite coasts at opposite times of year, which means the country never has one weather answer. Colombo is on the west coast, and the season that matters to it is the southwest monsoon, known locally as the Yala monsoon, which runs roughly from May into September.\n\nThe practical consequence is simple. December through March is Colombo's driest, clearest, most comfortable stretch, and it is also the busiest and priciest. May to September is the city's wettest window, though the rain usually falls as heavy afternoon downpours rather than all-day grey. October and November are transitional and often unsettled, because the second inter-monsoon brings thunderstorms to much of the island at once.\n\nThe temperature, meanwhile, barely moves. Colombo sits close to sea level and near the equator, so daytime highs hover in the low thirties Celsius all year and nights rarely drop far below the mid-twenties. What changes is not heat but humidity and rain. Planning a Colombo trip is therefore a question of picking a rain window, not a temperature window, and of deciding whether you also want the south and west beaches, which follow exactly the same pattern as the city.",
            tourCard: CARD_0,
          },
          {
            title: "Two monsoons, one island: the thing most guides get wrong",
            icon: "calendar-days",
            content: "Sri Lanka is small enough to look like it should have one climate and mountainous enough that it does not. A central highland massif splits the island, and the wind systems that hit it come from opposite directions at different times of year. The southwest or Yala monsoon blows in off the Indian Ocean from around May to September and dumps its rain on the western and southern slopes, which is where Colombo, Galle and the whole southwest beach strip sit. The northeast or Maha monsoon arrives roughly October to January and soaks Trincomalee, Batticaloa, Arugam Bay and Jaffna on the other side.\n\nThis is why blanket advice about a Sri Lankan rainy season is useless. When Colombo is at its wettest in June and July, the east coast is having its best beach weather of the year. When Colombo is at its best in January, the east is closed down and half the guesthouses in Arugam Bay have shuttered for the season. A guide that gives you one national answer is describing half the country and quietly ignoring the other half.\n\nThe two shoulder periods, roughly March to April and again in October to November, are called the inter-monsoons. These are the only times when the whole island can be rained on at once, usually as short, violent afternoon thunderstorms rather than persistent drizzle. October in particular has a reputation among Sri Lankans as the least predictable month anywhere on the island.",
          },
          {
            title: "December to March: the dry window",
            icon: "calendar-days",
            content: "This is the stretch to aim for if you only get one shot. Skies are usually clear in the mornings, the sea off the west coast is calmer, the humidity is a shade lower than in the monsoon months, and evening walks along Galle Face Green are genuinely pleasant rather than an endurance test. It is also when the coastal railway south toward Galle looks its best, with a flat blue sea rather than a churned brown one out the window.\n\nThe trade-off is everything else. Hotel rates in Colombo peak from mid-December to mid-January, flights are at their most expensive, and Galle, Mirissa and Unawatuna are at their fullest. If you want the dry weather without the December pricing, aim for late January into March, when the rain is still minimal but the Christmas and New Year surge has passed.\n\nFebruary is arguably Colombo's single best month. Rainfall is at its annual low, sea conditions are settled, and the city has not yet built to the pre-monsoon humidity that makes late April uncomfortable. It is also a good month for day trips inland, because the road to Kandy is less likely to be slowed by hill-country downpours.",
          },
          {
            title: "April: heat, festivals and the first hints of monsoon",
            icon: "calendar-days",
            content: "April is the hottest month in Colombo and the point at which humidity begins climbing toward monsoon levels. Afternoon thunderstorms start appearing, sometimes dramatically, but they usually pass within an hour or two and rarely wipe out a day. If you can handle heat, the first half of April is still a workable time to visit.\n\nMid-April brings the Sinhala and Tamil New Year, the biggest holiday of the Sri Lankan year. For a few days around it much of Colombo empties out as people travel to family homes in the villages, and a surprising number of shops, small restaurants and offices close entirely. This can be atmospheric or frustrating depending on your plans, but it is worth knowing in advance rather than discovering on arrival. Long-distance buses and trains around those dates are packed, and fares on private transport rise.\n\nBy late April the pre-monsoon build-up is obvious. The air feels heavy, storms come more often, and the sea starts to look agitated. This is the tail end of the good season rather than the start of the bad one, but it is a noticeably different city from the one you get in February.",
          },
          {
            title: "May to September: the southwest monsoon in practice",
            icon: "calendar-days",
            content: "The monsoon is worth understanding before you write it off. It does not usually mean days of continuous rain. The typical monsoon day in Colombo is bright or hazy in the morning, builds to a heavy downpour in the afternoon or evening, and clears again. Rain when it comes is intense, streets flood briefly, and tuk-tuks are suddenly hard to find, but you rarely lose an entire day.\n\nWhat you do lose is the sea. Waves along the west coast build, currents strengthen, and swimming off Colombo's stretch of coast becomes genuinely unwise even when it looks tempting. Boat trips out of the west and south coasts, including whale-watching from Mirissa, largely shut down for the season. If beaches are the point of your trip, this is the window to travel to the east coast instead, where these are the best months of the year.\n\nFor a city-focused trip, the monsoon is actually a reasonable bargain. Rates drop, museums and temples are quieter, restaurants take walk-ins, and Colombo's indoor attractions are unaffected by weather. Carry a compact umbrella rather than a rain jacket, which in this humidity is worse than the rain, and build afternoons around the Dutch Hospital, Gangaramaya, the National Museum or a long lunch rather than a walking route.",
          },
          {
            title: "October and November: the unpredictable months",
            icon: "calendar-days",
            content: "The second inter-monsoon covers roughly October and November, and it is the one period when Colombo's weather genuinely refuses to be planned around. Thunderstorms can arrive at any hour, sometimes with real force, and this is also the part of the year when tropical depressions in the Bay of Bengal are most likely to affect the island, occasionally with serious flooding.\n\nThat said, October and November are not a write-off. Rain still tends to come in bursts rather than sitting all day, and prices are at their lowest before the December surge. If your trip is flexible and city-based, you can do well here. If you have a fixed itinerary with day trips, boat trips or a tight connection to a beach stay, this is the riskiest window to gamble on.\n\nBy the second half of November the pattern usually starts settling toward the dry season. Late November can feel like a preview of December at a fraction of the price, which makes it one of the better value bets on the calendar for travellers willing to accept some uncertainty.",
          },
          {
            title: "Matching Colombo's weather to the rest of your route",
            icon: "calendar-days",
            content: "Almost nobody comes to Sri Lanka only for Colombo, so the real question is how the city's season lines up with wherever else you are going. If you are heading south to Galle, Mirissa and the surf coast, or west and north to Negombo, you are on the same weather system as Colombo and the December-to-March advice applies to the whole route.\n\nIf your route runs east, to Trincomalee, Pasikuda or Arugam Bay, the calendar inverts. Those places are at their best from about May to September, exactly when Colombo is wettest, which makes a monsoon-season trip perfectly sensible: pass through Colombo quickly, get to the east, and enjoy the season the other half of the island is having.\n\nThe hill country around Kandy, Nuwara Eliya and Ella follows its own rules, sitting between the two systems and getting rain from both, though usually as cloud and drizzle rather than tropical downpours. It is cooler year-round and less season-dependent than either coast. A common and sensible pattern is to base your dates on the coast you care most about and treat Colombo, which works in any month, as the flexible part of the plan.",
          },
        ],
        faqs: [
          { q: "What is the actual best month to visit Colombo?", a: "February. It is Colombo's driest month, the sea is calm, humidity is a touch lower than the rest of the year, and the December-January price peak has passed. January and March are close behind." },
          { q: "Is it worth visiting Colombo during the monsoon?", a: "Yes, if your trip is city-focused. Monsoon rain in Colombo is usually a heavy afternoon burst rather than an all-day washout, and hotels, museums, temples and restaurants are unaffected. Avoid it if you came for west-coast beaches or boat trips, which are effectively out of season from May to September." },
          { q: "Does Sri Lanka have one rainy season?", a: "No, and this is the single most common error in Colombo travel advice. The southwest monsoon hits the west and south coasts from roughly May to September; the northeast monsoon hits the east and north from roughly October to January. There is no month when the whole island is in season or out of it." },
          { q: "How hot does Colombo get?", a: "Daytime highs sit in the low thirties Celsius almost all year, with April typically the hottest month. Nights rarely fall below the mid-twenties. The variable that actually changes your experience is humidity, which is high year-round and highest just before and during the monsoon." },
          { q: "When is Colombo most crowded and expensive?", a: "Mid-December to mid-January, which combines the driest weather with the European and domestic holiday season. The days around the Sinhala and Tamil New Year in mid-April are also busy, and a lot of small businesses close for the holiday itself." },
          { q: "Can you swim off Colombo?", a: "Colombo is not a swimming city at any time of year. The shoreline along Galle Face is a promenade rather than a beach, currents are strong, and during the southwest monsoon the sea is genuinely dangerous. For swimming, go south to Bentota or beyond, or north to Negombo, and do so in the December-to-March window." },
          { q: "How many days does Colombo need?", a: "Two full days covers the city comfortably, including Fort, Pettah, Gangaramaya, Galle Face and a proper meal or two. Most travellers use it as a bookend to a longer island trip rather than a destination in itself, and there is no shame in that." },
        ],
        jsonLd: {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: [
            {
              '@type': 'Question',
              name: "What is the actual best month to visit Colombo?",
              acceptedAnswer: { '@type': 'Answer', text: "February. It is Colombo's driest month, the sea is calm, humidity is a touch lower than the rest of the year, and the December-January price peak has passed. January and March are close behind." },
            },
            {
              '@type': 'Question',
              name: "Is it worth visiting Colombo during the monsoon?",
              acceptedAnswer: { '@type': 'Answer', text: "Yes, if your trip is city-focused. Monsoon rain in Colombo is usually a heavy afternoon burst rather than an all-day washout, and hotels, museums, temples and restaurants are unaffected. Avoid it if you came for west-coast beaches or boat trips, which are effectively out of season from May to September." },
            },
            {
              '@type': 'Question',
              name: "Does Sri Lanka have one rainy season?",
              acceptedAnswer: { '@type': 'Answer', text: "No, and this is the single most common error in Colombo travel advice. The southwest monsoon hits the west and south coasts from roughly May to September; the northeast monsoon hits the east and north from roughly October to January. There is no month when the whole island is in season or out of it." },
            },
            {
              '@type': 'Question',
              name: "How hot does Colombo get?",
              acceptedAnswer: { '@type': 'Answer', text: "Daytime highs sit in the low thirties Celsius almost all year, with April typically the hottest month. Nights rarely fall below the mid-twenties. The variable that actually changes your experience is humidity, which is high year-round and highest just before and during the monsoon." },
            },
            {
              '@type': 'Question',
              name: "When is Colombo most crowded and expensive?",
              acceptedAnswer: { '@type': 'Answer', text: "Mid-December to mid-January, which combines the driest weather with the European and domestic holiday season. The days around the Sinhala and Tamil New Year in mid-April are also busy, and a lot of small businesses close for the holiday itself." },
            },
            {
              '@type': 'Question',
              name: "Can you swim off Colombo?",
              acceptedAnswer: { '@type': 'Answer', text: "Colombo is not a swimming city at any time of year. The shoreline along Galle Face is a promenade rather than a beach, currents are strong, and during the southwest monsoon the sea is genuinely dangerous. For swimming, go south to Bentota or beyond, or north to Negombo, and do so in the December-to-March window." },
            },
            {
              '@type': 'Question',
              name: "How many days does Colombo need?",
              acceptedAnswer: { '@type': 'Answer', text: "Two full days covers the city comfortably, including Fort, Pettah, Gangaramaya, Galle Face and a proper meal or two. Most travellers use it as a bookend to a longer island trip rather than a destination in itself, and there is no shame in that." },
            },
          ],
        },
      };

    case "colombo-city-guide":
      return {
        title: "Colombo City Guide: What the City Actually Is, Neighbourhood by Neighbourhood",
        seoTitle: "Colombo City Guide: Areas & History",
        description: "An honest guide to Colombo: Fort, Pettah, Cinnamon Gardens, Slave Island, Galle Face and Mount Lavinia, plus the colonial history that shaped each one.",
        heroImage: "https://res.cloudinary.com/dx2fxyaft/image/upload/v1788369130/asiabylocals/tours/from-colombo-to-anuradhapura-transfer-with-sightseeing-stops/img0.jpg",
        fastFacts: [
          { icon: "map", label: "Population", value: "Around 750,000 in the city proper, roughly 5.6 million in the wider metropolitan area" },
          { icon: "map", label: "Colonial timeline", value: "Portuguese from 1505, Dutch from 1656, British from 1796, independence 1948" },
          { icon: "map", label: "Oldest surviving building in Fort", value: "The Dutch Hospital, from the Dutch colonial period, now restaurants and shops" },
          { icon: "map", label: "Administrative capital", value: "Sri Jayawardenepura Kotte, a suburb east of Colombo; Colombo remains the commercial capital" },
          { icon: "map", label: "Languages", value: "Sinhala and Tamil are official; English is widely used in the city" },
          { icon: "map", label: "Realistic time needed", value: "One to two days for the city itself" },
        ],
        sections: [
          {
            title: "Colombo City Guide: What the City Actually Is, Neighbourhood by Neighbourhood",
            icon: "map",
            content: "Colombo is a working port city that happens to have a great deal of history layered into it, rather than a monument city that happens to have a port. It has no single set-piece sight, no Angkor and no Taj, and travellers who arrive expecting one usually leave disappointed after half a day. Travellers who arrive expecting a large, hot, commercially minded South Asian capital with Portuguese, Dutch and British sediment showing through the concrete tend to enjoy it considerably more.\n\nThe city has been a trading harbour for well over a thousand years. Arab merchants were established here long before any European arrived, trading in cinnamon and gems and giving the place its early importance. The Portuguese took the harbour in the early sixteenth century, the Dutch took it from them in 1656, the British took it from the Dutch in 1796 and ruled the whole island until independence in 1948. Each of those layers left buildings, street names, religions, surnames and food behind, and Fort and Pettah in particular are where you can read them all in a few hundred metres.\n\nWhat Colombo is now is a city of distinct districts that feel almost unrelated to each other. The colonial commercial core, the trading bazaar next to it, the wide leafy avenues of the old British residential quarter, the lake district with its temples, and the beach suburb at the southern end. Understanding those five areas is most of what you need to make sense of the place.",
            tourCard: CARD_1,
          },
          {
            title: "Fort: the colonial and commercial core",
            icon: "map",
            content: "Fort is the old walled European quarter, and though the walls came down under the British it kept the name and the function. This is where the Dutch and then the British ran their commerce, and it is still where the banks, the port authority, the presidential secretariat and a great deal of official Colombo sit. For decades much of it was fenced off under high security, which is why it can feel oddly quiet for a capital's downtown. Since the checkpoints came down it has become far more walkable, and it is the best square kilometre in the city for anyone interested in architecture.\n\nThe Dutch Hospital is the anchor. It is the oldest surviving building in Fort, dating from the Dutch period, built around two courtyards with thick walls and deep verandas designed for tropical heat long before anyone had air conditioning. It was restored and reopened as a precinct of restaurants, bars and shops, and while that is unashamedly a tourist-facing conversion, the building itself is the real thing and worth walking through slowly.\n\nA short walk away, the Old Colombo Lighthouse stands as a clock tower in the middle of a road junction. It genuinely was both at once, a clock tower with a light at the top, guiding ships in until surrounding buildings grew tall enough to block it and the light was moved elsewhere. Around it are the grand facades of the old mercantile houses, some restored, some peeling, and to the west the enormous new Port City reclamation, a flat expanse of land pushed out into the sea that is gradually becoming a financial district. The contrast between the two is the most honest single view of where Colombo is going.",
          },
          {
            title: "Pettah: the bazaar",
            icon: "map",
            content: "Immediately east of Fort, across a railway line and a change of atmosphere so abrupt it feels like a different city, is Pettah. This is Colombo's wholesale and retail market district, and it is organised the old way, by trade rather than by shop. One street is electronics, another textiles, another hardware, another spices and dried fish. Nothing is signposted for visitors, everything is being loaded or unloaded, and it is the single most alive part of the city.\n\nThe landmark is Jami Ul-Alfar, the Red Mosque, built in 1908 in candy-striped red and white brickwork that looks like nothing else in Sri Lanka. It sits mid-block on a narrow commercial street, so it appears without warning above the awnings. Non-Muslim visitors are generally welcome outside prayer times if dressed modestly, and it is worth asking rather than assuming.\n\nPettah also holds the Dutch Period Museum, in what was a seventeenth-century Dutch governor's residence. It is a modest museum with a magnificent building around it, arranged around a courtyard that instantly explains how colonial Colombo dealt with the climate. Pettah rewards an hour of unstructured walking more than any itinerary, and it is worth doing it in the morning when the trading is at its peak.",
          },
          {
            title: "Cinnamon Gardens and Colombo 7: the leafy quarter",
            icon: "map",
            content: "South-east of the centre lies Cinnamon Gardens, known by its postal code, Colombo 7, in the way Londoners say Mayfair. The name is literal: this was cinnamon plantation land under the Dutch, and the British later laid it out as their residential district of wide streets, large gardens and heavy shade trees. It remains the wealthiest part of the city and the least like the rest of it.\n\nThis is where most of Colombo's institutional culture lives. The Colombo National Museum, a grand white Italianate building from the 1870s, holds the island's most significant collection, including the throne and regalia of the last Kandyan king. Independence Square sits nearby, an open colonnaded memorial hall built to commemorate the 1948 handover and deliberately styled after a Kandyan royal audience hall, a piece of architectural nationalism that repays a few minutes of thought. Early mornings and evenings it fills with joggers and families.\n\nColombo 7 is also where you will find the city's better restaurants, galleries and design shops, and Geoffrey Bawa's own townhouse on 33rd Lane, which is discussed in its own section below. If Fort and Pettah are Colombo's commercial history, Cinnamon Gardens is its self-image.",
          },
          {
            title: "Slave Island, Beira Lake and Gangaramaya",
            icon: "map",
            content: "Between Fort and Cinnamon Gardens is a district officially called Kompanna Vidiya and universally called Slave Island, a name inherited from the Dutch period when enslaved people were held on what was then an island in Beira Lake. It is a dense, mixed, rapidly changing area of old low-rise streets with high-rise towers going up between them, and it contains the city's two best-known temples.\n\nGangaramaya Temple is Colombo's most visited Buddhist site and an unusual one. Its architecture deliberately borrows from Sri Lankan, Thai, Indian and Chinese traditions at once, and its museum is essentially an enormous accumulation of objects donated by devotees over decades, from ivory carvings and vintage cars to a great deal of small oddities. It is chaotic and much more interesting for it.\n\nOut on the water beside it is Seema Malaka, the temple's meditation hall, built on platforms over Beira Lake and designed by Geoffrey Bawa. It is calm in a way the main temple is not, with rows of Buddha figures facing the water and almost nothing else. Seeing the two within a few minutes of each other is one of the more satisfying contrasts in Colombo.",
          },
          {
            title: "Galle Face, Kollupitiya and the seafront",
            icon: "map",
            content: "Running south from Fort along the ocean is Galle Face Green, a long open lawn on the seafront that the Dutch first cleared for a line of cannon fire and the British later laid out as a promenade. It is Colombo's living room. On weekday afternoons it is a place to walk; at dusk, and especially at weekends, it fills with families, kite sellers, courting couples and a line of food carts selling isso wade, the deep-fried prawn fritters that are the correct thing to eat there.\n\nBehind and south of it, Kollupitiya, or Colombo 3, is the main hotel and shopping stretch, where a good share of the city's international hotels, malls and offices sit along Galle Road. It is not beautiful, but it is convenient, and most visitors end up staying somewhere along this axis because it puts Fort, Pettah, Gangaramaya and Cinnamon Gardens all within a short tuk-tuk ride.\n\nGalle Road continues south through Bambalapitiya and Wellawatte, which are less polished and more genuinely residential, and where a lot of the best cheap eating in the city happens, particularly South Indian and Sri Lankan Tamil food in Wellawatte.",
          },
          {
            title: "Mount Lavinia and the southern edge",
            icon: "map",
            content: "About twelve kilometres south of Fort, at the end of the coastal railway's suburban stretch, is Mount Lavinia, Colombo's beach suburb. It grew around the seaside residence a British governor built here in the 1800s, which later became a hotel and still dominates the headland. This is the closest thing to a beach the city has, and while it is not a beach you would travel to Sri Lanka for, it is a genuinely pleasant place to stay if you want sea air and a slower pace within reach of the centre.\n\nThe stretch of sand below the headland has a row of seafood restaurants that set tables out in the evening, and sunset here is the standard Colombo alternative to Galle Face. Swimming is possible in the dry season with care and is a bad idea during the southwest monsoon, when the surf is strong.\n\nGetting there is half the appeal. The coastal railway line runs directly along the shore, and even the short suburban hop from Fort to Mount Lavinia gives you the same sea-level view that makes the longer Galle line famous. It costs very little and takes around half an hour, traffic permitting on the road being the reason it is often the faster option.",
          },
          {
            title: "Geoffrey Bawa and the case for tropical modernism",
            icon: "map",
            content: "Sri Lanka's most consequential twentieth-century figure in architecture was Geoffrey Bawa, a lawyer who retrained as an architect in his thirties and then spent decades working out how a modern building should behave in a hot, wet climate. The result, usually called tropical modernism, is a way of building with open plans, courtyards, deep shade, cross-ventilation and blurred boundaries between inside and garden. Its influence on hotels and houses across South and Southeast Asia is hard to overstate.\n\nHis own Colombo townhouse, on 33rd Lane in Kollupitiya, is the best short introduction to it. He assembled it over decades out of four small bungalows, and the result is a sequence of small courtyards, corridors and light wells that feels far larger and cooler than the plot has any right to. It is open to visitors by appointment, which is exactly why so few itineraries include it, and it takes under an hour.\n\nIf the house interests you, Seema Malaka on Beira Lake is his too, and further afield the Bawa estate at Lunuganga near Bentota is a full day out. For a city with no headline monument, Bawa is arguably Colombo's most distinctive thing to see, and the fact that almost no standard itinerary mentions him is a gap worth exploiting.",
          },
        ],
        faqs: [
          { q: "Is Colombo worth visiting, or should I skip straight to the coast?", a: "Give it a day, or two if you like cities. Colombo does not have a headline sight and it does not pretend to, but Fort's colonial architecture, Pettah's market streets, Gangaramaya and the food are genuinely good. Most travellers use it as an arrival or departure bookend, which is a sensible way to treat it." },
          { q: "Where should I stay in Colombo?", a: "Kollupitiya, also called Colombo 3, along the Galle Road seafront, puts you within a short ride of everything and has the widest range of hotels. Fort suits people who want colonial architecture on the doorstep, Cinnamon Gardens suits a quieter and greener stay, and Mount Lavinia suits anyone who wants sea air and does not mind being twelve kilometres out." },
          { q: "Is Colombo safe for tourists?", a: "Broadly yes. Ordinary urban precautions apply, particularly in crowded market areas like Pettah where pickpocketing is the main risk. The most common complaints from visitors are tuk-tuk overcharging and gem shop or temple touts steering you somewhere you did not ask to go, both of which are annoyances rather than dangers." },
          { q: "What should I wear when visiting temples in Colombo?", a: "Shoulders and knees covered, and shoes removed before entering shrine areas at Buddhist temples such as Gangaramaya. Hats come off too. At the Red Mosque in Pettah, modest dress is expected and women should carry a scarf. Temple floors get extremely hot in the middle of the day, so socks are a practical thing to have in your bag." },
          { q: "How many days do I need in Colombo?", a: "Two full days is comfortable and covers Fort, Pettah, the lake temples, Cinnamon Gardens and Galle Face with time for proper meals. One day is enough for a compressed version. More than three and you will be looking for reasons to stay unless you have specific interests in architecture, food or shopping." },
          { q: "Is Colombo the capital of Sri Lanka?", a: "It is the commercial capital and by far the largest city, but the official administrative capital moved in the 1980s to Sri Jayawardenepura Kotte, a suburb to the east, where parliament sits. In practice everyone treats Colombo as the capital." },
          { q: "What is the difference between Fort and Pettah?", a: "They are next to each other and completely different. Fort is the old European commercial quarter, with colonial banks and offices, government buildings and the restored Dutch Hospital. Pettah, immediately east, is the market district, organised into streets by trade, loud and commercial and not aimed at visitors at all. Walking from one into the other takes a couple of minutes and is one of the most striking transitions in the city." },
        ],
        jsonLd: {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: [
            {
              '@type': 'Question',
              name: "Is Colombo worth visiting, or should I skip straight to the coast?",
              acceptedAnswer: { '@type': 'Answer', text: "Give it a day, or two if you like cities. Colombo does not have a headline sight and it does not pretend to, but Fort's colonial architecture, Pettah's market streets, Gangaramaya and the food are genuinely good. Most travellers use it as an arrival or departure bookend, which is a sensible way to treat it." },
            },
            {
              '@type': 'Question',
              name: "Where should I stay in Colombo?",
              acceptedAnswer: { '@type': 'Answer', text: "Kollupitiya, also called Colombo 3, along the Galle Road seafront, puts you within a short ride of everything and has the widest range of hotels. Fort suits people who want colonial architecture on the doorstep, Cinnamon Gardens suits a quieter and greener stay, and Mount Lavinia suits anyone who wants sea air and does not mind being twelve kilometres out." },
            },
            {
              '@type': 'Question',
              name: "Is Colombo safe for tourists?",
              acceptedAnswer: { '@type': 'Answer', text: "Broadly yes. Ordinary urban precautions apply, particularly in crowded market areas like Pettah where pickpocketing is the main risk. The most common complaints from visitors are tuk-tuk overcharging and gem shop or temple touts steering you somewhere you did not ask to go, both of which are annoyances rather than dangers." },
            },
            {
              '@type': 'Question',
              name: "What should I wear when visiting temples in Colombo?",
              acceptedAnswer: { '@type': 'Answer', text: "Shoulders and knees covered, and shoes removed before entering shrine areas at Buddhist temples such as Gangaramaya. Hats come off too. At the Red Mosque in Pettah, modest dress is expected and women should carry a scarf. Temple floors get extremely hot in the middle of the day, so socks are a practical thing to have in your bag." },
            },
            {
              '@type': 'Question',
              name: "How many days do I need in Colombo?",
              acceptedAnswer: { '@type': 'Answer', text: "Two full days is comfortable and covers Fort, Pettah, the lake temples, Cinnamon Gardens and Galle Face with time for proper meals. One day is enough for a compressed version. More than three and you will be looking for reasons to stay unless you have specific interests in architecture, food or shopping." },
            },
            {
              '@type': 'Question',
              name: "Is Colombo the capital of Sri Lanka?",
              acceptedAnswer: { '@type': 'Answer', text: "It is the commercial capital and by far the largest city, but the official administrative capital moved in the 1980s to Sri Jayawardenepura Kotte, a suburb to the east, where parliament sits. In practice everyone treats Colombo as the capital." },
            },
            {
              '@type': 'Question',
              name: "What is the difference between Fort and Pettah?",
              acceptedAnswer: { '@type': 'Answer', text: "They are next to each other and completely different. Fort is the old European commercial quarter, with colonial banks and offices, government buildings and the restored Dutch Hospital. Pettah, immediately east, is the market district, organised into streets by trade, loud and commercial and not aimed at visitors at all. Walking from one into the other takes a couple of minutes and is one of the most striking transitions in the city." },
            },
          ],
        },
      };

    case "getting-around-colombo":
      return {
        title: "Getting Around Colombo: Tuk-Tuks, PickMe, Trains and Buses",
        seoTitle: "Getting Around Colombo: Transport Guide",
        description: "How to actually move around Colombo: metered tuk-tuks, the PickMe app, the coastal railway, city buses and the airport transfer, with what each really costs.",
        heroImage: "https://res.cloudinary.com/dx2fxyaft/image/upload/v1788368764/asiabylocals/tours/shore-excursion-colombo-city-sightseeing-tour-by-tuk-tuk/img0.jpg",
        fastFacts: [
          { icon: "train-front", label: "Local ride-hailing app", value: "PickMe, the Sri Lankan market leader; Uber also operates in Colombo" },
          { icon: "train-front", label: "Tuk-tuk rule", value: "Insist on the meter or agree the fare before you sit down" },
          { icon: "train-front", label: "Airport distance", value: "Bandaranaike International is about 35 km north, roughly 45-75 minutes via the expressway" },
          { icon: "train-front", label: "Best scenic transport", value: "The coastal railway south, which runs directly along the shoreline" },
          { icon: "train-front", label: "Rush hours to avoid", value: "Roughly 7.30-9.30am and 4.30-7pm on weekdays" },
          { icon: "train-front", label: "Payment", value: "Cash is still king for tuk-tuks; card payment can be linked in the ride-hailing apps" },
        ],
        sections: [
          {
            title: "Getting Around Colombo: Tuk-Tuks, PickMe, Trains and Buses",
            icon: "train-front",
            content: "Colombo is bigger than it looks on a map and hotter than it looks on a forecast, which means you will use transport far more than you expect. The city has no metro, its bus network is impenetrable to newcomers, and its traffic is genuinely bad during peak hours. What it does have is an enormous supply of tuk-tuks, two working ride-hailing apps, and a coastal railway line that is one of the better bargains in Asian travel.\n\nThe single most useful thing to know before you arrive is that Colombo's tuk-tuks are supposed to be metered, and many are, but the ones waiting outside hotels and tourist sites will usually try a fixed price several times the meter fare. That is the entire negotiation, and there is a simple way around it. The second most useful thing is that PickMe, the local ride-hailing app, removes the negotiation altogether by pricing the trip before you get in.\n\nBeyond that, distances within the tourist core are shorter than they feel. Fort to Pettah is a walk. Fort to Galle Face is a walk in cool weather. Galle Face to Gangaramaya is a very short ride. It is only when you head out to Cinnamon Gardens, Mount Lavinia or the airport that you are covering real ground.",
            tourCard: CARD_2,
          },
          {
            title: "Tuk-tuks and the meter question",
            icon: "train-front",
            content: "Three-wheelers, called tuk-tuks by visitors and simply three-wheelers by Sri Lankans, are the default way to move around Colombo. There are tens of thousands of them and you will rarely wait more than a minute for one on a main road. Many are fitted with meters, and a metered ride starts at a modest flag-fall and then charges by the kilometre at a rate that makes most in-city trips remarkably cheap.\n\nThe complication is that meters are not universally used with foreigners. A driver parked outside a hotel, a museum, or a temple entrance is there specifically to quote a flat price, and that price will typically be somewhere between two and five times the metered fare. A driver you flag down while walking on a main road is far more likely to simply turn the meter on. This is the whole trick: walk fifty metres away from wherever tourists gather before you hail anything.\n\nIf a driver refuses the meter, agree the fare explicitly before you get in, and say the number out loud so there is no ambiguity at the other end. Carry small notes, because change is a very common way for a fare to drift upward. And be aware of the free-tour approach, where a friendly driver offers a cheap city loop that turns out to include stops at gem shops or spice gardens where he earns commission. It is not dangerous, it is just not what you asked for.",
          },
          {
            title: "PickMe and Uber: the simpler option",
            icon: "train-front",
            content: "PickMe is the Sri Lankan ride-hailing app and it is the single best transport tip for Colombo. It works like any other such app, it shows you the fare before you confirm, and it lets you choose a three-wheeler as the vehicle type, which means you get a tuk-tuk at an app-set price with no conversation about meters at all. It is almost always cheaper than a negotiated street fare and it removes the daily friction entirely.\n\nUber also operates in Colombo, with both cars and tuk-tuks, and works fine. Coverage and driver numbers are generally better with PickMe, particularly outside the central districts, so most residents have both installed and check whichever is faster at the time. Both accept card payment if you add one, though drivers are used to cash and it often makes for a smoother trip.\n\nThe one thing to prepare in advance is a working Sri Lankan phone number, since the apps verify by SMS. A local SIM is inexpensive and available at the airport on arrival, and getting one is worth doing in the arrivals hall rather than putting off. Airport pickup zones for the apps exist but can be confusing, so if you are landing late at night a prearranged transfer is a reasonable indulgence.",
          },
          {
            title: "Trains: the coastal line and why to take it",
            icon: "train-front",
            content: "Sri Lanka's railway is slow, old and frequently overcrowded, and it is also one of the best things about travelling in the country. From Colombo the relevant line is the coastal route heading south, which leaves Fort station and then runs so close to the water that in places the waves break within metres of the carriage. It is not a tourist train, it is the ordinary commuter and intercity service, and it costs very little.\n\nEven a short ride is worth it. Fort to Mount Lavinia takes around half an hour and gives you the whole effect for the price of a soft drink. Going further, the line continues to Bentota, Hikkaduwa and Galle, and the Colombo-to-Galle run is a genuinely enjoyable two and a half to three hours in second or third class with the doors open. The express trains are faster and less scenic than the slow ones, which is an unusual trade-off to have to make.\n\nBuy tickets at the station counter on the day for ordinary classes; there is no need to book ahead for the coastal line unless you want reserved first-class seating on a specific intercity service. Travel outside peak commuter hours if you want a seat, avoid the doors if you are carrying luggage, and be aware that Fort station is a large, busy, unsignposted place where asking someone is faster than reading anything.",
          },
          {
            title: "Buses: cheap, comprehensive, and hard to use",
            icon: "train-front",
            content: "Colombo's bus network is extensive and extraordinarily cheap, with both the state-run red SLTB buses and a much larger fleet of private operators covering essentially every corridor in the city. Fares are a matter of small change, and for the price of a single tuk-tuk ride you could cross the city several times over.\n\nThe problem is legibility. Route numbers are displayed in Sinhala as often as in numerals, destinations are called out rather than posted, buses do not always come to a complete stop, and the driving is assertive. For a visitor with a few days in the city, the time cost of working the system out generally exceeds the money saved, especially given how cheap a metered tuk-tuk already is.\n\nThere is one exception worth making. The Galle Road corridor, running south from Fort through Kollupitiya, Bambalapitiya, Wellawatte and on toward Mount Lavinia, is a straight line served constantly by buses, and it is easy to use because you simply need one going south along a road you can see. If you want to try a Colombo bus once, that is the route to do it on.",
          },
          {
            title: "Getting to and from the airport",
            icon: "train-front",
            content: "Bandaranaike International Airport is at Katunayake, around 35 kilometres north of the city near Negombo. The Colombo-Katunayake Expressway connects it to the city and turns what was once a punishing two-hour crawl into a trip of roughly 45 minutes to an hour and a quarter depending on traffic at the city end.\n\nOptions, roughly in order of cost, are the airport bus service to central Colombo, a metered or app-booked taxi, and a prearranged hotel or private transfer. Taxi counters inside the terminal offer fixed fares, and PickMe and Uber both serve the airport, though the designated pickup areas are set back from the terminal and it is worth reading the app's instructions before walking out. Tuk-tuks are not a sensible airport option over that distance at expressway speeds.\n\nIf you are arriving on a late-night flight, which many long-haul services into Colombo are, book a transfer in advance. Landing at two in the morning and negotiating a fare while jet-lagged is the worst version of every problem described on this page. Many travellers also skip Colombo entirely on arrival and go straight to Negombo, which is only about ten kilometres from the airport and makes a far easier first night.",
          },
          {
            title: "Walking, traffic and the practical realities",
            icon: "train-front",
            content: "Colombo is more walkable than its reputation suggests, in specific places and at specific times. Fort into Pettah is best done on foot, because the streets are narrow and the traffic is worse than your own pace. Galle Face Green is a walk by definition. The Beira Lake area around Gangaramaya and Seema Malaka is easily covered on foot. Cinnamon Gardens has wide, shaded streets that are pleasant to wander.\n\nWhat defeats walking is heat, humidity and pavement quality. Footpaths appear and disappear, are used for parking and trading, and drainage covers are not always where you would like them. Cross with local pedestrians rather than alone, because traffic yields to a group and not to an individual. Between roughly eleven and three, plan for short walks and rides in between rather than long routes.\n\nTraffic peaks on weekday mornings from around half past seven to half past nine, and again from late afternoon into the early evening. A journey that takes fifteen minutes at midday can take three times that at six in the evening, which matters if you have a train to catch or a table booked. When in doubt in rush hour, and if your route happens to run parallel to the coast, the train will beat the road.",
          },
        ],
        faqs: [
          { q: "Should I use PickMe or Uber in Colombo?", a: "PickMe is the local market leader and generally has more drivers, better coverage outside the centre and slightly lower prices. Uber works well too. Most residents have both and open whichever quotes faster. Both need a phone number for SMS verification, so pick up a local SIM at the airport." },
          { q: "How much should a tuk-tuk cost in Colombo?", a: "A metered ride starts with a small flag-fall and then charges per kilometre, which makes most trips inside the central districts very cheap. Drivers waiting outside hotels and attractions will often quote several times that as a flat fare. The reliable way to know you are paying the right price is to book a three-wheeler through PickMe, which sets the fare in advance." },
          { q: "Is the train from Colombo to Galle worth taking?", a: "Yes. It runs directly along the coastline for much of the route, costs very little, and takes roughly two and a half to three hours. The slower services are more scenic than the expresses. Travel outside commuter hours if you want a seat, and consider going down by train and back by expressway bus or car to save time." },
          { q: "How do I get from Colombo airport to the city?", a: "Bandaranaike International is about 35 km north, connected by expressway, so allow roughly 45 to 75 minutes. Airport taxis with fixed fares, PickMe and Uber, an airport bus service and prearranged hotel transfers all work. For late-night arrivals, book ahead. If your itinerary allows, staying in Negombo for the first night is much closer to the airport." },
          { q: "Can I use city buses as a tourist?", a: "You can, and they cost almost nothing, but route numbers and destinations are often displayed only in Sinhala and stops are not announced in a way newcomers can follow. Given how cheap tuk-tuks already are, most short-stay visitors skip them. The Galle Road corridor south from Fort is the one easy exception." },
          { q: "Do I need to rent a car in Colombo?", a: "No, and it is a bad idea. Traffic is heavy, driving conventions are assertive, and parking in Fort and Pettah is difficult. If you want a car for the wider island, hire one with a driver, which is standard practice in Sri Lanka, costs far less than you would expect and solves navigation, parking and language at once." },
          { q: "Is it safe to walk around Colombo at night?", a: "The main commercial and hotel areas, including Galle Face, Kollupitiya and Fort, are generally fine in the evening and busy with people. Pettah largely shuts down after trading hours and is not a place to wander after dark. As anywhere, keep valuables out of sight and take a ride rather than walking long distances late." },
        ],
        jsonLd: {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: [
            {
              '@type': 'Question',
              name: "Should I use PickMe or Uber in Colombo?",
              acceptedAnswer: { '@type': 'Answer', text: "PickMe is the local market leader and generally has more drivers, better coverage outside the centre and slightly lower prices. Uber works well too. Most residents have both and open whichever quotes faster. Both need a phone number for SMS verification, so pick up a local SIM at the airport." },
            },
            {
              '@type': 'Question',
              name: "How much should a tuk-tuk cost in Colombo?",
              acceptedAnswer: { '@type': 'Answer', text: "A metered ride starts with a small flag-fall and then charges per kilometre, which makes most trips inside the central districts very cheap. Drivers waiting outside hotels and attractions will often quote several times that as a flat fare. The reliable way to know you are paying the right price is to book a three-wheeler through PickMe, which sets the fare in advance." },
            },
            {
              '@type': 'Question',
              name: "Is the train from Colombo to Galle worth taking?",
              acceptedAnswer: { '@type': 'Answer', text: "Yes. It runs directly along the coastline for much of the route, costs very little, and takes roughly two and a half to three hours. The slower services are more scenic than the expresses. Travel outside commuter hours if you want a seat, and consider going down by train and back by expressway bus or car to save time." },
            },
            {
              '@type': 'Question',
              name: "How do I get from Colombo airport to the city?",
              acceptedAnswer: { '@type': 'Answer', text: "Bandaranaike International is about 35 km north, connected by expressway, so allow roughly 45 to 75 minutes. Airport taxis with fixed fares, PickMe and Uber, an airport bus service and prearranged hotel transfers all work. For late-night arrivals, book ahead. If your itinerary allows, staying in Negombo for the first night is much closer to the airport." },
            },
            {
              '@type': 'Question',
              name: "Can I use city buses as a tourist?",
              acceptedAnswer: { '@type': 'Answer', text: "You can, and they cost almost nothing, but route numbers and destinations are often displayed only in Sinhala and stops are not announced in a way newcomers can follow. Given how cheap tuk-tuks already are, most short-stay visitors skip them. The Galle Road corridor south from Fort is the one easy exception." },
            },
            {
              '@type': 'Question',
              name: "Do I need to rent a car in Colombo?",
              acceptedAnswer: { '@type': 'Answer', text: "No, and it is a bad idea. Traffic is heavy, driving conventions are assertive, and parking in Fort and Pettah is difficult. If you want a car for the wider island, hire one with a driver, which is standard practice in Sri Lanka, costs far less than you would expect and solves navigation, parking and language at once." },
            },
            {
              '@type': 'Question',
              name: "Is it safe to walk around Colombo at night?",
              acceptedAnswer: { '@type': 'Answer', text: "The main commercial and hotel areas, including Galle Face, Kollupitiya and Fort, are generally fine in the evening and busy with people. Pettah largely shuts down after trading hours and is not a place to wander after dark. As anywhere, keep valuables out of sight and take a ride rather than walking long distances late." },
            },
          ],
        },
      };

    case "colombo-food-guide":
      return {
        title: "Colombo Food Guide: What Sri Lankan Food Actually Is and Where to Eat It",
        seoTitle: "Colombo Food Guide: What to Eat",
        description: "Rice and curry, kottu roti, hoppers, lamprais and pol sambol explained properly, plus how Colombo meals work, what to eat when, and where to go find it.",
        heroImage: "https://res.cloudinary.com/dx2fxyaft/image/upload/v1788369177/asiabylocals/tours/negombo-day-trip-dutch-forts-canals-seafood/img0.jpg",
        fastFacts: [
          { icon: "utensils", label: "The everyday meal", value: "Rice and curry, meaning rice plus several curries and sambols on one plate" },
          { icon: "utensils", label: "Breakfast and dinner dish", value: "Hoppers, especially egg hoppers, usually made morning and evening rather than at lunch" },
          { icon: "utensils", label: "The late-night sound", value: "Kottu roti, identified by the rhythmic metal clanging from the griddle" },
          { icon: "utensils", label: "The Burgher classic", value: "Lamprais, rice and accompaniments baked together in a banana leaf" },
          { icon: "utensils", label: "The one condiment to learn", value: "Pol sambol: grated coconut, chilli, lime, onion and Maldive fish" },
          { icon: "utensils", label: "Heat level", value: "Genuinely hot by default; ask for less chilli if you need it, and expect it to still be hot" },
        ],
        sections: [
          {
            title: "Colombo Food Guide: What Sri Lankan Food Actually Is and Where to Eat It",
            icon: "utensils",
            content: "Sri Lankan food is not Indian food with a different name. It shares ingredients and some technique, but it has its own logic, built around coconut in every form, a distinctive roasted-spice profile, dried Maldive fish as a savoury backbone, and a national appetite for chilli that visitors consistently underestimate. Colombo is the best place in the country to eat it, because the capital gathers Sinhalese, Tamil, Muslim and Burgher cooking traditions into a few square kilometres.\n\nThe first thing to understand is that rice and curry is not a dish. It is the everyday structure of a Sri Lankan meal, a plate of rice with several separate curries around it plus one or more sambols, and the whole point is the combination. Ordering it and expecting a bowl with meat in sauce misreads the entire cuisine. The second thing to understand is that most of the specifically Sri Lankan items on this page are eaten at particular times of day, which is why travellers who only eat in hotels often never encounter them.\n\nAnd Ceylon tea, the thing the island is most famous for exporting, is worth trying the way Sri Lankans actually drink it: strong, milky and startlingly sweet, from a small glass, at a roadside stall. The delicate single-estate stuff mostly goes overseas.",
            tourCard: CARD_3,
          },
          {
            title: "Rice and curry: the meal, not the dish",
            icon: "utensils",
            content: "A Sri Lankan rice and curry plate arrives as a mound of rice surrounded by three to six separate preparations, each cooked and seasoned differently. There will usually be a dhal, mild and coconut-rich, which functions as the anchor. There may be a fish or chicken curry, deeply spiced and often dark from roasted curry powder. There will be vegetables: perhaps a jackfruit curry, a beetroot curry, a green bean tempered dish, a cassava or ash plantain preparation. And there will be sambols, small intense relishes that are not optional extras but part of the balance.\n\nThe difference between a good and a bad rice and curry is the number and freshness of the components. The best versions in Colombo are at lunch, at the modest, unglamorous places that cook a fixed set in the morning and serve until it runs out, usually somewhere between noon and two. Hotel buffets do a version of the same thing with more choice and less character.\n\nEat it with your right hand if you can. Sri Lankans mix a small area of the plate at a time, gathering rice and one or two curries together with the fingertips and pushing it up with the thumb. Nobody will mind if you use cutlery, but the food is designed for the other method and the combining is the point. A shared plate of rice and curry with a good pol sambol and a papadam is one of the genuinely great cheap meals in Asia.",
          },
          {
            title: "Hoppers, egg hoppers and string hoppers",
            icon: "utensils",
            content: "A hopper, appa in Sinhala, is a bowl-shaped pancake made from a fermented batter of rice flour and coconut milk, cooked in a small round-bottomed pan so it comes out thin, lacy and crisp at the edges and soft and slightly spongy in the middle. The fermentation gives it a mild sourness that plays against whatever you eat it with. An egg hopper has an egg cracked into the base while it cooks, so you get a set yolk sitting in the bowl.\n\nThe standard accompaniments are pol sambol, lunu miris, which is a hotter onion and chilli relish, and often a small curry to dip into. Hoppers are made fresh to order over a live flame, which is why they are a morning and evening item and why you will not usually find them at lunchtime. A hopper stand firing up around six in the evening is one of the better sights in a Colombo side street.\n\nString hoppers, indi appa, are an entirely different food that unfortunately shares a name. They are nests of steamed rice-flour noodles, pressed through a mould and stacked, served several at a time with dhal, a coconut milk gravy called kiri hodi, and sambol. They are softer, plainer and more absorbent, and they are usually a breakfast food. Ordering hoppers and being brought string hoppers, or the reverse, is one of the most common menu confusions visitors run into.",
          },
          {
            title: "Kottu roti, and how to find it",
            icon: "utensils",
            content: "Kottu is the sound before it is a dish. Godamba roti, a thin stretched flatbread, is chopped on a hot steel griddle with two blunt metal blades, together with egg, onion, leeks, carrot and usually chicken, beef or cheese, and the chopping is done in a fast two-handed rhythm that carries down the street. Cooks turn it into something close to drumming, and you can locate a kottu stand by ear from a block away.\n\nThe result is a hot, savoury, slightly chewy pile of chopped bread and filling, served with a bowl of curry gravy to pour over it. It is heavy, cheap, and unambiguously the national late-night food. Most kottu places open in the evening and run late, and eating it standing at a roadside counter around ten at night is the correct context.\n\nVariations have multiplied. Cheese kottu is now everywhere and is exactly as rich as it sounds. Dolphin kottu, despite the name, involves no dolphin and refers to a version made with extra egg and cheese. Pol roti kottu uses a coconut flatbread instead. If you want to try one thing in Colombo that no restaurant in your home country does properly, this is it.",
          },
          {
            title: "Lamprais and the Burgher kitchen",
            icon: "utensils",
            content: "Lamprais comes from the Dutch Burgher community, the descendants of Dutch and Portuguese colonists who intermarried locally and developed a distinct cuisine of their own. The name comes from the Dutch lomprijst, meaning a lump of rice, and the dish is exactly that idea executed with unusual care: rice cooked in stock, a mixed meat curry, a fried ash plantain, a brinjal preparation, a boiled egg and two frikkadels, which are small Dutch-derived meatballs, all wrapped in a banana leaf and baked together so the flavours run into each other.\n\nIt is a set composition, not a build-your-own, and a real lamprais is judged on whether the components are right rather than on quantity. Many places now sell a loose approximation that is essentially rice and curry in a leaf; the genuine article uses the specific set of accompaniments and the baking step that makes the leaf perfume the rice.\n\nThe Burgher influence shows elsewhere in Colombo too, in breudher, a rich yeasted Christmas bread, in love cake made with semolina and cashew, and in a general strand of baking and sweets that feels European in structure and entirely Sri Lankan in flavouring. It is one of the more interesting legacies of the colonial layering visible everywhere else in the city.",
          },
          {
            title: "Sambols, short eats and street food",
            icon: "utensils",
            content: "Pol sambol is the one to learn. Freshly grated coconut, red chilli, lime juice, shallot and a small amount of pounded Maldive fish, which is a rock-hard cured tuna that functions the way anchovy does in Mediterranean cooking, providing savoury depth rather than a fish flavour. It goes with almost everything, and a plate of rice and curry without it is missing a note. Seeni sambol is its sweet counterpart, caramelised onion cooked down with spices and tamarind, dark and sticky and excellent in a bread roll.\n\nShort eats are the Sri Lankan snack tradition, sold from glass cases in tea shops and bakeries: fish cutlets, which are crumbed and fried spiced fish and potato balls, mutton rolls wrapped in a crepe and fried, vegetable patties, and various buns. The convention in an old-style tea shop is that a tray is brought to your table and you take what you want and are charged for what you ate.\n\nOn Galle Face Green in the evening, the item to look for is isso wade, a flat lentil fritter topped with whole prawns, deep-fried and served with a chilli sauce. Buy it from a stall doing brisk trade so that what you get comes out of the oil hot rather than off a stack. The green also produces excellent achcharu, pickled fruit with chilli and salt, and freshly cut mango and pineapple served the same way.",
          },
          {
            title: "Tea, king coconut and what to drink",
            icon: "utensils",
            content: "Ceylon tea is the island's most famous export and Colombo is a strange place to encounter it, because the way it is drunk here bears little relation to the way it is marketed abroad. A local plain tea is brewed strong and served in a small glass; a milk tea, kiri thé, is strong tea with condensed or powdered milk and enough sugar to be genuinely sweet. Asking for less sugar is possible and is usually met with mild puzzlement.\n\nIf you want the delicate high-grown single-estate teas from Nuwara Eliya and the hill country, buy them at a proper tea shop in Colombo rather than expecting to be served them by the glass. Several long-established merchants in Fort and Colombo 7 will let you taste before buying, and tea makes the best and lightest souvenir on the island.\n\nThe other essential drink is thambili, king coconut, sold from carts and roadside stacks everywhere. It is the orange coconut rather than the green one, it is not sweetened, and it is the single best thing to drink in Colombo's heat. The seller will hack the top off and hand it to you with a straw, then split it so you can scrape out the soft flesh afterwards. Faluda, a rose-syrup, milk and basil-seed drink with ice cream, is the local indulgence and worth one in an afternoon.",
          },
          {
            title: "Where to eat, and how meals work",
            icon: "utensils",
            content: "The Dutch Hospital precinct in Fort is where most visitors have their first proper Colombo meal, and it is a pleasant, safe, slightly expensive introduction inside a genuinely historic building. It is worth doing once. It is not, however, where the best Sri Lankan food in the city is, and treating it as the whole answer would be a mistake.\n\nFor the real thing, the pattern is to eat cheap and local at lunch and be more deliberate at dinner. Lunch means a rice and curry place, often unmarked, often with a queue of office workers, serving from around noon until it runs out. Dinner means either a hopper stand, a kottu place, or one of the modern Sri Lankan restaurants in Colombo 7 and Kollupitiya that take the traditional repertoire seriously and plate it properly. Wellawatte, further south along Galle Road, is the district for South Indian and Sri Lankan Tamil food, including excellent dosai and vegetarian thali.\n\nA practical warning about heat. Sri Lankan chilli levels are high by any international standard, and a dish described as mild by a Colombo cook may still be hotter than you expect. Rice, coconut sambol and yoghurt help; water does not. Ask for it less spicy if you need to, order a coconut-based dish alongside anything fiery, and give yourself a day or two to adjust before committing to a full local plate.",
          },
        ],
        faqs: [
          { q: "What is the one dish to eat in Colombo?", a: "Rice and curry at lunchtime at a local place, because it is the cuisine's actual structure rather than a single dish. If you only get one evening meal, make it egg hoppers with pol sambol, or kottu roti late at night." },
          { q: "Is Sri Lankan food very spicy?", a: "Yes, more than most visitors expect, and more than Indian food in many cases. Chilli is used generously and the heat is direct. You can ask for less, though the baseline stays high. Coconut milk dishes, curd with treacle and plain rice all help; drinking water makes it worse." },
          { q: "What is the difference between hoppers and string hoppers?", a: "A hopper is a single bowl-shaped pancake of fermented rice-flour batter cooked in a small round pan, often with an egg in the base. String hoppers are steamed nests of rice-flour noodles served several at a time. They share a name and nothing else. Hoppers are a morning and evening item; string hoppers are usually breakfast." },
          { q: "What is kottu roti?", a: "Chopped godamba flatbread stir-fried on a griddle with egg, vegetables and usually meat or cheese, served with a curry gravy. It is made with two metal blades striking the griddle in a rhythm, so you can hear a kottu stand before you see it. It is late-night food, cheap and filling." },
          { q: "Is street food in Colombo safe to eat?", a: "Generally yes, with the usual rules. Eat where there is turnover and a queue, prefer food cooked in front of you and served hot, be cautious with anything that has been sitting out, and stick to bottled or filtered water. The isso wade stalls on Galle Face Green in the evening are a good example of high-turnover cooking done in the open." },
          { q: "Where can I eat vegetarian in Colombo?", a: "Easily. A great deal of everyday Sri Lankan cooking is vegetable-based, and a vegetarian rice and curry with dhal, jackfruit, beetroot, beans and sambols is a full meal in its own right. Wellawatte has excellent South Indian vegetarian restaurants serving dosai and thali. The main thing to check is Maldive fish, which is used in small quantities in many sambols and tempered dishes." },
          { q: "What should I buy as a food souvenir?", a: "Tea, bought from an established merchant in Colombo where you can taste before choosing, is the obvious answer and travels well. Cinnamon, which Sri Lanka produces in its true quilled form rather than the cassia sold as cinnamon elsewhere, is the other. Avoid buying spices from any shop a driver takes you to unasked." },
        ],
        jsonLd: {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: [
            {
              '@type': 'Question',
              name: "What is the one dish to eat in Colombo?",
              acceptedAnswer: { '@type': 'Answer', text: "Rice and curry at lunchtime at a local place, because it is the cuisine's actual structure rather than a single dish. If you only get one evening meal, make it egg hoppers with pol sambol, or kottu roti late at night." },
            },
            {
              '@type': 'Question',
              name: "Is Sri Lankan food very spicy?",
              acceptedAnswer: { '@type': 'Answer', text: "Yes, more than most visitors expect, and more than Indian food in many cases. Chilli is used generously and the heat is direct. You can ask for less, though the baseline stays high. Coconut milk dishes, curd with treacle and plain rice all help; drinking water makes it worse." },
            },
            {
              '@type': 'Question',
              name: "What is the difference between hoppers and string hoppers?",
              acceptedAnswer: { '@type': 'Answer', text: "A hopper is a single bowl-shaped pancake of fermented rice-flour batter cooked in a small round pan, often with an egg in the base. String hoppers are steamed nests of rice-flour noodles served several at a time. They share a name and nothing else. Hoppers are a morning and evening item; string hoppers are usually breakfast." },
            },
            {
              '@type': 'Question',
              name: "What is kottu roti?",
              acceptedAnswer: { '@type': 'Answer', text: "Chopped godamba flatbread stir-fried on a griddle with egg, vegetables and usually meat or cheese, served with a curry gravy. It is made with two metal blades striking the griddle in a rhythm, so you can hear a kottu stand before you see it. It is late-night food, cheap and filling." },
            },
            {
              '@type': 'Question',
              name: "Is street food in Colombo safe to eat?",
              acceptedAnswer: { '@type': 'Answer', text: "Generally yes, with the usual rules. Eat where there is turnover and a queue, prefer food cooked in front of you and served hot, be cautious with anything that has been sitting out, and stick to bottled or filtered water. The isso wade stalls on Galle Face Green in the evening are a good example of high-turnover cooking done in the open." },
            },
            {
              '@type': 'Question',
              name: "Where can I eat vegetarian in Colombo?",
              acceptedAnswer: { '@type': 'Answer', text: "Easily. A great deal of everyday Sri Lankan cooking is vegetable-based, and a vegetarian rice and curry with dhal, jackfruit, beetroot, beans and sambols is a full meal in its own right. Wellawatte has excellent South Indian vegetarian restaurants serving dosai and thali. The main thing to check is Maldive fish, which is used in small quantities in many sambols and tempered dishes." },
            },
            {
              '@type': 'Question',
              name: "What should I buy as a food souvenir?",
              acceptedAnswer: { '@type': 'Answer', text: "Tea, bought from an established merchant in Colombo where you can taste before choosing, is the obvious answer and travels well. Cinnamon, which Sri Lanka produces in its true quilled form rather than the cassia sold as cinnamon elsewhere, is the other. Avoid buying spices from any shop a driver takes you to unasked." },
            },
          ],
        },
      };

    case "day-trips-from-colombo":
      return {
        title: "Day Trips from Colombo: Honest Distances and Which Ones Are Worth It",
        seoTitle: "Best Day Trips from Colombo",
        description: "Galle, Kandy, Sigiriya, Bentota and Negombo with real travel times from Colombo, and a straight answer on which are day trips and which are not worth it.",
        heroImage: "https://res.cloudinary.com/dx2fxyaft/image/upload/v1788368945/asiabylocals/tours/all-inclusive-galle-turtle-beach-mangrove-river-safari/img0.jpg",
        fastFacts: [
          { icon: "route", label: "Galle", value: "About 125 km, roughly 2 hours each way via the Southern Expressway. The best day trip." },
          { icon: "route", label: "Kandy", value: "About 115 km but 3-4 hours each way on a mountain road. A long day." },
          { icon: "route", label: "Sigiriya", value: "About 170 km, realistically a 12-14 hour round trip. Better as an overnight." },
          { icon: "route", label: "Bentota", value: "About 65 km, roughly 1 to 1.5 hours. Easy half day for a beach." },
          { icon: "route", label: "Negombo", value: "About 37 km north, under an hour. Convenient around airport days." },
          { icon: "route", label: "Best transport", value: "Hired car with driver for inland trips; the coastal train for anywhere south" },
        ],
        sections: [
          {
            title: "Day Trips from Colombo: Honest Distances and Which Ones Are Worth It",
            icon: "route",
            content: "Sri Lanka looks compact on a map and travels like a much larger country. The island is only about 430 kilometres from top to bottom, but outside the expressway network the roads are single-carriageway, winding, and shared with buses, lorries, tuk-tuks and the occasional stationary cow. A hundred kilometres inland can take four hours. The same distance on the southern expressway can take ninety minutes. Everything about planning a day trip from Colombo comes down to knowing which of those two situations you are in.\n\nThe expressway network is the single most important development for Colombo day trips. The Southern Expressway runs from the edge of Colombo down toward Galle and Matara, and it has turned the south coast into genuinely easy territory. Inland, no such road exists to Kandy in the same way, which is why Kandy remains a punishing day out despite being closer in kilometres than Galle.\n\nThis page is deliberately blunt about which trips do not work. Sigiriya and Yala get sold as Colombo day trips and technically can be done, but doing them means fourteen hours in a vehicle for a couple of hours at the destination, and you will see the place badly. Saying so is more useful than listing everything within a 200 kilometre radius as though distance were the only variable.",
            tourCard: CARD_4,
          },
          {
            title: "Galle: the one that actually works",
            icon: "route",
            content: "Galle is the day trip to take if you only take one. It is about 125 kilometres south along the coast, and the Southern Expressway covers most of that in roughly two hours by car. The destination justifies the drive: Galle Fort is a walled Dutch colonial town from the seventeenth century, built on a promontory, still lived in, and one of the best-preserved European fortifications in Asia. It is a UNESCO World Heritage site and it is genuinely compact, which means a day is enough to see it properly rather than glimpse it.\n\nInside the walls the streets are narrow and gridded, lined with Dutch-era townhouses now holding cafes, boutiques, small museums and guesthouses. The ramparts can be walked most of the way round, and the standard advice, which is correct, is to walk them in the late afternoon when the heat drops and the light on the sea is at its best. The lighthouse at the southern end is the postcard shot.\n\nThe better version of this trip is to go down by train and come back by road. The coastal railway hugs the shoreline for much of the route, takes two and a half to three hours, and costs a fraction of anything else. Going by train in the morning and returning by expressway car or bus in the evening gives you the scenery and gets you back at a reasonable hour. If you can spare a night, staying inside the fort after the day-trippers leave is the version everyone recommends afterwards.",
          },
          {
            title: "Kandy: closer on the map, much further in practice",
            icon: "route",
            content: "Kandy is about 115 kilometres from Colombo, less than Galle, and it takes twice as long. The road climbs into the hills, twists constantly, passes through a continuous string of towns, and is shared with heavy traffic. Three hours is a good run; four is normal; more than that happens. That is six to eight hours of driving for a day trip, which is why Kandy as a day trip from Colombo is a decision rather than a default.\n\nWhat is there is significant. The Temple of the Sacred Tooth Relic, Sri Dalada Maligawa, houses what is held to be a tooth of the Buddha and is the most important Buddhist site in the country, with an evening puja ceremony that is the right time to visit. Kandy was the last independent Sinhalese kingdom, holding out against the Portuguese and Dutch and falling to the British only in 1815, and the town retains a distinct highland character and a large artificial lake at its centre.\n\nIf you go as a day trip, leave Colombo before six in the morning, accept that you will see the temple and the lake and not much else, and expect to be back late. The far better plan is two nights in Kandy on the way to the hill country, taking the train up rather than driving, because the Colombo-to-Kandy rail line climbs through some genuinely good scenery and continues on toward Nuwara Eliya and Ella.",
          },
          {
            title: "Sigiriya and the Cultural Triangle: not a day trip",
            icon: "route",
            content: "Sigiriya is the rock fortress in the central plains where a fifth-century king built a palace on top of a two-hundred-metre granite outcrop, with frescoes on the rock face, a mirror wall, and a lion-shaped gateway of which the paws survive. It is arguably the single most impressive site in Sri Lanka, and it is around 170 kilometres from Colombo on roads that do not permit fast travel.\n\nA Colombo day trip to Sigiriya is sold and it is done, and it means roughly twelve to fourteen hours door to door. You would leave around four in the morning, arrive with the day already hot, climb over a thousand steps in full sun because you have missed the cool early window, and drive back exhausted. Everything that makes Sigiriya worth seeing, the early light, the empty ascent, the sense of scale from the summit, is precisely what a day trip removes.\n\nDo it as an overnight instead, ideally two nights, based in Sigiriya or Dambulla. That gives you a dawn climb, the Dambulla cave temples with their painted ceilings, and the option of Polonnaruwa, the medieval capital whose ruins are extensive and best seen by bicycle. The Cultural Triangle deserves three days, not one, and no amount of efficient driving changes that.",
          },
          {
            title: "Bentota, Kalutara and the near south coast",
            icon: "route",
            content: "If the goal is simply to reach a beach, you do not need to go as far as Galle. Bentota is about 65 kilometres south, a little over an hour by expressway, and has a wide sandy stretch, a river mouth with boat trips through mangroves, and enough resort infrastructure to make a lazy day easy. It is the standard Colombo beach escape and works as either a full or half day.\n\nKalutara, closer still at around 40 kilometres, has a long beach and the striking Kalutara Bodhiya, a large white stupa beside the road that is hollow and painted inside, unusual among Sri Lankan stupas which are normally solid. Almost every vehicle heading south stops here briefly, and it takes ten minutes to look at properly.\n\nAlso near Bentota is Lunuganga, the country estate Geoffrey Bawa spent decades turning into a landscape garden, which pairs naturally with a visit to his Colombo townhouse. If Bawa's work interested you in the city, this is the follow-up, and it is a very different sort of day out from a beach. There is also a turtle hatchery strip along this coast; standards vary considerably between them, so choose carefully if that matters to you.",
          },
          {
            title: "Negombo and the north: the airport-side option",
            icon: "route",
            content: "Negombo sits about 37 kilometres north of Colombo and, more usefully, about ten kilometres from the airport. It is a fishing town with a long beach, a strong Catholic character left over from Portuguese rule that gives it a very different feel from the Buddhist south, and a working lagoon crossed by a Dutch-era canal system.\n\nThe reason to go is the fish market at Lellama in the early morning, when the outrigger boats come in and the catch is auctioned on the sand, and the drying yards where fish are laid out in the sun. It is an ordinary working scene rather than an attraction, which is what makes it good, and it is over by mid-morning.\n\nAs a day trip from Colombo, Negombo is fine but not compelling. Its real value is logistical: if you have an early flight or a late arrival, spending that night in Negombo instead of Colombo saves you a long airport transfer at a bad hour and gives you a beach to sit on while you wait. Many well-planned Sri Lanka itineraries start and end there rather than in the capital.",
          },
          {
            title: "Wildlife: Udawalawe, Yala and why they are overnight trips",
            icon: "route",
            content: "Sri Lanka's headline national parks are all further from Colombo than a day allows. Udawalawe, which is the most reliable park in the country for elephants and is largely open grassland, is roughly 170 to 180 kilometres away and takes four hours or more. Yala, the most famous and the best chance of a leopard sighting, is further still, well over 250 kilometres, at five to six hours each way.\n\nGame drives run at dawn and late afternoon because that is when animals move; midday in a national park in Sri Lanka mostly shows you empty scrub. A day trip from Colombo arrives at exactly the wrong time, which is the whole problem. Anyone selling a Colombo-to-Yala day safari is selling you ten hours of car and two hours of the worst possible viewing window.\n\nThe workable versions are all overnight. Udawalawe with a night nearby, or better, combining a park with the southern coast so you drive Colombo to Galle to Mirissa to Udawalawe or Yala over several days. If you genuinely have only one day and want to see wildlife, the honest alternative near Colombo is whale watching out of Mirissa in season, which is itself a very early start and a long drive, or simply accepting that this trip belongs in a longer itinerary.",
          },
          {
            title: "How to book and what it costs",
            icon: "route",
            content: "For anywhere outside the rail corridor, the standard and sensible arrangement in Sri Lanka is a car with a driver, hired for the day. This is not a luxury; it is how most domestic long-distance travel works, it costs considerably less than the equivalent anywhere in Europe, and it removes navigation, parking and language problems in one step. Agree the price, the route and whether the expressway tolls and the driver's meals are included before you set off.\n\nBe clear about stops. The traditional friction on a Sri Lankan day trip is the unrequested detour to a spice garden, gem showroom or batik workshop where the driver earns a commission. There is nothing sinister about it, but it eats an hour of a day you are paying for. Saying at the start that you do not want commercial stops usually settles it.\n\nThe train remains the exception and the pleasure. For Galle and anywhere on the coastal line, and for Kandy on the hill line, the train is cheaper, more interesting and often no slower than the road once traffic is counted. A good compromise on any southbound day trip is train one way, car the other, which gets you the view without the return journey eating your evening.",
          },
        ],
        faqs: [
          { q: "What is the best day trip from Colombo?", a: "Galle. It is about 125 km and roughly two hours each way on the Southern Expressway, and Galle Fort is a compact walled Dutch colonial town you can genuinely see in a day. Going down by coastal train and returning by road is the version most people enjoy most." },
          { q: "Can I do Kandy as a day trip from Colombo?", a: "You can, but it is a long day. Kandy is only about 115 km away yet takes three to four hours each way on a winding hill road, so you are looking at six to eight hours of travel for a few hours at the Temple of the Tooth. It is far better as a two-night stop on the way to the hill country." },
          { q: "Is Sigiriya doable as a day trip from Colombo?", a: "Realistically no. It is about 170 km on slow roads, making a twelve to fourteen hour day, and you would climb the rock in the middle of the hottest part of the day. Give it an overnight in Sigiriya or Dambulla so you can climb at dawn, and add the Dambulla cave temples while you are there." },
          { q: "Where is the closest good beach to Colombo?", a: "Mount Lavinia is the closest, about 12 km south and reachable by suburban train, but it is a city beach. For a proper beach day, Bentota is around 65 km and a little over an hour by expressway. Negombo, about 37 km north, is the option if you are already dealing with the airport." },
          { q: "Should I hire a car and driver or use the train?", a: "Both, on different routes. The coastal train south toward Galle and the hill line toward Kandy are cheap, scenic and often as fast as the road once traffic is counted. For anywhere off the rail lines, including the national parks and the Cultural Triangle, a car with a driver hired for the day is the standard and most practical arrangement in Sri Lanka." },
          { q: "Can I see elephants on a day trip from Colombo?", a: "Not well. Udawalawe, the most reliable elephant park, is four hours or more each way, and game drives only work at dawn and dusk, which a day trip cannot reach. Wildlife belongs in a multi-day itinerary combined with the south coast. Be sceptical of any operator selling a Colombo-to-Yala day safari." },
          { q: "How early should I leave Colombo for a day trip?", a: "For Galle, leaving by around eight gets you there before the heat peaks. For Kandy, before six. For anything in the Cultural Triangle or the national parks, the required departure time is itself the argument for not doing it in a day. Colombo's morning rush from about half past seven adds a significant delay to any late start." },
        ],
        jsonLd: {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: [
            {
              '@type': 'Question',
              name: "What is the best day trip from Colombo?",
              acceptedAnswer: { '@type': 'Answer', text: "Galle. It is about 125 km and roughly two hours each way on the Southern Expressway, and Galle Fort is a compact walled Dutch colonial town you can genuinely see in a day. Going down by coastal train and returning by road is the version most people enjoy most." },
            },
            {
              '@type': 'Question',
              name: "Can I do Kandy as a day trip from Colombo?",
              acceptedAnswer: { '@type': 'Answer', text: "You can, but it is a long day. Kandy is only about 115 km away yet takes three to four hours each way on a winding hill road, so you are looking at six to eight hours of travel for a few hours at the Temple of the Tooth. It is far better as a two-night stop on the way to the hill country." },
            },
            {
              '@type': 'Question',
              name: "Is Sigiriya doable as a day trip from Colombo?",
              acceptedAnswer: { '@type': 'Answer', text: "Realistically no. It is about 170 km on slow roads, making a twelve to fourteen hour day, and you would climb the rock in the middle of the hottest part of the day. Give it an overnight in Sigiriya or Dambulla so you can climb at dawn, and add the Dambulla cave temples while you are there." },
            },
            {
              '@type': 'Question',
              name: "Where is the closest good beach to Colombo?",
              acceptedAnswer: { '@type': 'Answer', text: "Mount Lavinia is the closest, about 12 km south and reachable by suburban train, but it is a city beach. For a proper beach day, Bentota is around 65 km and a little over an hour by expressway. Negombo, about 37 km north, is the option if you are already dealing with the airport." },
            },
            {
              '@type': 'Question',
              name: "Should I hire a car and driver or use the train?",
              acceptedAnswer: { '@type': 'Answer', text: "Both, on different routes. The coastal train south toward Galle and the hill line toward Kandy are cheap, scenic and often as fast as the road once traffic is counted. For anywhere off the rail lines, including the national parks and the Cultural Triangle, a car with a driver hired for the day is the standard and most practical arrangement in Sri Lanka." },
            },
            {
              '@type': 'Question',
              name: "Can I see elephants on a day trip from Colombo?",
              acceptedAnswer: { '@type': 'Answer', text: "Not well. Udawalawe, the most reliable elephant park, is four hours or more each way, and game drives only work at dawn and dusk, which a day trip cannot reach. Wildlife belongs in a multi-day itinerary combined with the south coast. Be sceptical of any operator selling a Colombo-to-Yala day safari." },
            },
            {
              '@type': 'Question',
              name: "How early should I leave Colombo for a day trip?",
              acceptedAnswer: { '@type': 'Answer', text: "For Galle, leaving by around eight gets you there before the heat peaks. For Kandy, before six. For anything in the Cultural Triangle or the national parks, the required departure time is itself the argument for not doing it in a day. Colombo's morning rush from about half past seven adds a significant delay to any late start." },
            },
          ],
        },
      };

    case "colombo-2-day-itinerary":
      return {
        title: "Colombo in 2 Days: A Realistic Itinerary",
        seoTitle: "Colombo 2 Day Itinerary",
        description: "A workable two-day Colombo plan built around the heat and traffic: Fort and Pettah, Beira Lake temples, Cinnamon Gardens, Galle Face and where to eat.",
        heroImage: "https://res.cloudinary.com/dx2fxyaft/image/upload/v1788369130/asiabylocals/tours/from-colombo-to-anuradhapura-transfer-with-sightseeing-stops/img0.jpg",
        fastFacts: [
          { icon: "clock", label: "Day one", value: "Fort, Pettah, Beira Lake temples, Galle Face at dusk" },
          { icon: "clock", label: "Day two", value: "Cinnamon Gardens, National Museum, Independence Square, Bawa house, Mount Lavinia sunset" },
          { icon: "clock", label: "Walk within clusters", value: "Fort to Pettah, and the Beira Lake temples, are both walkable" },
          { icon: "clock", label: "Heat window to avoid", value: "Roughly 11am to 3pm; plan indoor stops" },
          { icon: "clock", label: "Book ahead", value: "The Geoffrey Bawa house on 33rd Lane is by appointment only" },
          { icon: "clock", label: "Budget for transport", value: "A handful of short rides per day; use PickMe to avoid fare negotiation" },
        ],
        sections: [
          {
            title: "Colombo in 2 Days: A Realistic Itinerary",
            icon: "clock",
            content: "Two days is the right amount of time for Colombo. One is a rush that leaves you with a checklist rather than an impression, and three starts to feel like padding unless you have a specific interest in architecture, food or shopping. This itinerary assumes two full days and works around the two things that ruin most Colombo plans: midday heat and evening traffic.\n\nThe underlying structure is the same both days. Be out early, when Pettah is trading and the light is good and it is possible to walk without suffering. Retreat somewhere shaded or indoors from roughly eleven until three, which is what everyone who lives here does. Come back out in the late afternoon and let the evening run long, because Colombo is at its best after five.\n\nDistances are short enough that you will not spend the trip in transit, but not so short that you can walk everything. Assume a handful of tuk-tuk or PickMe rides each day between clusters, and walk within each cluster. The plan below groups sights geographically for exactly that reason.",
            tourCard: CARD_5,
          },
          {
            title: "Day one, morning: Pettah while it is working",
            icon: "clock",
            content: "Start at eight, and start in Pettah rather than Fort. The market district is at its most active in the early morning, when goods are being unloaded and the wholesale trade is at full pitch, and it is also the only time of day when walking those streets is comfortable. Enter from the Fort side and let the street-by-street organisation reveal itself: one road of electronics, another of textiles, another of hardware, another dense with spices and dried fish.\n\nAim yourself loosely toward Jami Ul-Alfar, the Red Mosque, on Second Cross Street. Its red and white striped brickwork, dating from 1908, appears suddenly above the shop awnings and is unlike anything else in the country. If you would like to see inside, ask politely, avoid prayer times, and dress modestly, with a scarf for women. A short walk away, the Dutch Period Museum occupies a seventeenth-century governor's residence, and even if the collection is modest the courtyard building is worth the entrance.\n\nGive Pettah ninety minutes to two hours and do not over-plan it. The value is in walking rather than in any single stop. Keep a hand on your bag in the tightest streets, and be ready to step aside constantly for handcarts, which have right of way by force of custom.",
          },
          {
            title: "Day one, late morning: Fort",
            icon: "clock",
            content: "Cross west into Fort and the city changes completely within a couple of minutes' walk. This was the Dutch and then the British commercial quarter, and the streets still carry banks, shipping offices and government buildings in colonial facades of varying repair. It is quieter than Pettah, partly because much of it was under security restriction for years and has only relatively recently opened up again.\n\nWork toward the Old Colombo Lighthouse, the clock tower standing in the middle of a junction that genuinely functioned as both timepiece and lighthouse until the buildings around it grew too tall. From there, walk to the Dutch Hospital, the oldest surviving building in Fort, a low colonial structure built around two courtyards with thick walls and deep verandas. It now holds restaurants and shops, which is a commercial use of a serious building, but the architecture survives the conversion.\n\nHave lunch here, in the shade of the courtyard, and let it run long, because you are now heading into the worst part of the day. If you want a view over the new Port City reclamation before you stop, the western edge of Fort gives you the strange sight of a flat expanse of new land pushed out into the sea directly beside a district that has not changed in a century.",
          },
          {
            title: "Day one, afternoon: Beira Lake and Gangaramaya",
            icon: "clock",
            content: "Take a short ride south-east to Beira Lake around three, when the heat starts easing. Gangaramaya Temple is the busiest Buddhist site in Colombo and an unusual one: its buildings deliberately draw on Sri Lankan, Thai, Indian and Chinese architectural traditions at once, and its museum is a vast accumulation of objects donated over decades, ranging from religious artefacts to vintage cars to small curiosities nobody would think to collect. It is disorganised in a way that becomes charming.\n\nRemove shoes and hats before entering the shrine areas, cover shoulders and knees, and be aware that the temple floors will be hot underfoot in the afternoon. Allow an hour, more if the museum absorbs you.\n\nWalk out onto the lake to Seema Malaka, the temple's meditation hall, built on platforms over the water and designed by Geoffrey Bawa. It is the opposite of the main temple in every way: quiet, spare, structured, with rows of seated Buddha figures facing the water and very little else. Seeing the two within ten minutes of each other is one of the more rewarding contrasts available in Colombo, and it is a good introduction to Bawa if you plan to see his house tomorrow.",
          },
          {
            title: "Day one, evening: Galle Face Green at dusk",
            icon: "clock",
            content: "Be at Galle Face Green by around half past five. The long seafront lawn was originally cleared by the Dutch to give their guns a clear field of fire and later laid out by the British as a promenade, and it now functions as the city's shared open space. On a weekday evening it fills; on a Saturday or Sunday it is packed.\n\nWhat happens there is not staged for anyone. Families spread out on the grass, kite sellers work the crowd with brightly coloured kites that go up in the sea breeze, couples sit facing the water under umbrellas, and a line of food carts sets up along the northern end. The thing to eat is isso wade, a fried lentil fritter topped with whole prawns, bought hot from a stall with a queue and eaten standing up with chilli sauce. Pickled fruit with salt and chilli, and freshly cut mango, are the other stall staples.\n\nStay for the sunset over the Indian Ocean and then walk the length of the green as the lights come on. For dinner, either stay in this area, where there are hotel restaurants and bars along the seafront, or head to a kottu place and eat the national late-night dish in its proper context, standing at a counter listening to the metal blades on the griddle.",
          },
          {
            title: "Day two, morning: Cinnamon Gardens and the National Museum",
            icon: "clock",
            content: "Start day two in Colombo 7, Cinnamon Gardens, which was cinnamon plantation land under the Dutch and the British residential quarter afterwards. It is the greenest and quietest part of the city, with wide streets under heavy shade trees, and it is a pleasant place to be on foot early in the day.\n\nThe Colombo National Museum, in a white Italianate building from the 1870s, holds the most significant collection in the country. The highlights are the regalia and throne of the last king of Kandy, an extensive collection of Buddhist sculpture and bronzes, and a substantial run of colonial-period material that connects directly to everything you saw in Fort yesterday. Give it a couple of hours. Signage is variable and the building is not air conditioned throughout, but the objects are the real thing.\n\nWalk or take a short ride to Independence Square, the open colonnaded memorial hall built to commemorate the handover of 1948 and deliberately modelled on a Kandyan royal audience hall, a piece of architecture making a political argument about continuity with the pre-colonial past. There is a small independence museum underneath it, and the surrounding grounds are where much of Colombo comes to exercise in the early morning and evening.",
          },
          {
            title: "Day two, afternoon: the Bawa house and a slower pace",
            icon: "clock",
            content: "Book this in advance, because it is the one item on the itinerary that requires it. Geoffrey Bawa's own townhouse on 33rd Lane in Kollupitiya is open to visitors by appointment, and it is the best short introduction to the architect who effectively invented tropical modernism and shaped the look of hotels and houses across the region.\n\nHe assembled the house over decades from four small bungalows on a cramped urban plot, and the result is a sequence of courtyards, corridors, light wells and framed views that makes a tight site feel spacious and cool without mechanical help. It takes well under an hour to visit and it is the sort of place that quietly rearranges how you look at every other building for the rest of the trip. Very few standard Colombo itineraries include it, which is precisely why it is on this one.\n\nIf you would rather shop, the alternative for this slot is the design and craft shops of Colombo 7 and the surrounding streets, where Sri Lankan textiles, ceramics and tea are sold at fixed prices and to a standard the market stalls do not reach. Buy tea from a proper merchant where you can taste first, and buy true cinnamon, the quilled kind, rather than the cassia sold under the same name almost everywhere else in the world.",
          },
          {
            title: "Day two, evening: Mount Lavinia by train",
            icon: "clock",
            content: "End the trip by taking the suburban train from Fort or Kollupitiya station south to Mount Lavinia. It takes around half an hour, costs a trivial amount, and runs directly along the shoreline for most of the way, which gives you a compressed preview of what makes the longer Galle line famous. Doors stay open, the sea is a few metres away, and it is the single best-value thing you can do in Colombo.\n\nMount Lavinia grew up around the seaside residence a British governor built here in the early nineteenth century, which later became a hotel and still occupies the headland. Below it there is a strip of sand with seafood restaurants that put tables out on the beach in the evening, and this is the standard Colombo alternative to a Galle Face sunset. It is calmer, and you are eating rather than standing.\n\nOrder whatever came in that day, usually prawns, crab or a whole fish grilled with chilli, and confirm the price before it is cooked, since seafood is often sold by weight. Get a tuk-tuk or a PickMe back rather than a late train. If you have an early flight the next morning, note that Mount Lavinia is on the wrong side of the city from the airport, so factor in the extra crossing.",
          },
          {
            title: "Adapting the plan: one day, three days, or rain",
            icon: "clock",
            content: "If you only have one day, compress it into the morning of day one and the evening of day two. Pettah and Fort early, the Dutch Hospital for lunch, Gangaramaya and Seema Malaka mid-afternoon, and Galle Face at dusk. That is the essential Colombo and it works.\n\nIf you have three days, use the extra one for the things this plan leaves out. The best options are a proper food day, moving between a lunchtime rice and curry place, a tea merchant and an evening hopper stand; a longer architectural circuit taking in Bawa's work alongside the older colonial buildings; or a half day south to Bentota. Alternatively, use the third day as a Galle day trip, going down by the coastal train and returning by expressway.\n\nIf it rains, and during the southwest monsoon between roughly May and September it very likely will in the afternoon, the plan holds with reordering. The National Museum, the Dutch Period Museum, the Gangaramaya museum, the Dutch Hospital and Colombo's shopping and eating are all indoor or covered. Move whatever was scheduled outdoors into the morning and put the museums in the afternoon slot, since the rain here typically comes as a heavy burst late in the day rather than a continuous grey.",
          },
        ],
        faqs: [
          { q: "Is two days enough for Colombo?", a: "Yes. Two full days covers Fort, Pettah, the Beira Lake temples, Cinnamon Gardens, Galle Face and enough good eating to get a real sense of the city. One day is a workable compression. Beyond three you will be inventing things to do unless you have a particular interest in architecture, food or shopping." },
          { q: "What is the best order to see Colombo's sights?", a: "Group them geographically and by time of day. Pettah and Fort in the morning, because Pettah is trading and it is cool enough to walk. Indoor or shaded stops from about eleven to three. The Beira Lake temples mid-afternoon and Galle Face at dusk. The city punishes plans that ignore the midday heat." },
          { q: "Do I need to book anything in advance in Colombo?", a: "Only one thing on this itinerary: the Geoffrey Bawa house on 33rd Lane, which is visited by appointment. Everything else, including the National Museum, Gangaramaya and the Dutch Period Museum, is walk-in. Popular restaurants in Colombo 7 are worth reserving on weekend evenings." },
          { q: "How much walking is involved?", a: "A moderate amount, concentrated inside clusters. Pettah to Fort is walked, the Beira Lake temples are walked, and Cinnamon Gardens is pleasant on foot. Between clusters you take short tuk-tuk or PickMe rides. Footpaths are uneven in places, so wear something with a proper sole rather than sandals." },
          { q: "What should I do in Colombo in the evening?", a: "Galle Face Green at dusk is the local answer, with kite sellers, food carts and isso wade. After that, either eat seafood on the sand at Mount Lavinia or find a kottu roti stand, which is the national late-night dish and audible from a block away. The Dutch Hospital precinct in Fort holds most of the city's bar scene." },
          { q: "Can I combine Colombo with a day trip in two days?", a: "Not comfortably. A Galle day trip alone takes four hours of travel plus the time there and would consume one of your two days entirely. If you want both, give yourself three days: two in the city and one for Galle, going down by the coastal train and back by road." },
          { q: "What should I skip if I am short on time?", a: "The National Museum, if you are not a museum person, and the Dutch Period Museum, which is more interesting for the building than the collection. What you should not skip is Pettah in the early morning and Galle Face at dusk, which are the two moments where you see the city being itself rather than presenting itself." },
        ],
        jsonLd: {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: [
            {
              '@type': 'Question',
              name: "Is two days enough for Colombo?",
              acceptedAnswer: { '@type': 'Answer', text: "Yes. Two full days covers Fort, Pettah, the Beira Lake temples, Cinnamon Gardens, Galle Face and enough good eating to get a real sense of the city. One day is a workable compression. Beyond three you will be inventing things to do unless you have a particular interest in architecture, food or shopping." },
            },
            {
              '@type': 'Question',
              name: "What is the best order to see Colombo's sights?",
              acceptedAnswer: { '@type': 'Answer', text: "Group them geographically and by time of day. Pettah and Fort in the morning, because Pettah is trading and it is cool enough to walk. Indoor or shaded stops from about eleven to three. The Beira Lake temples mid-afternoon and Galle Face at dusk. The city punishes plans that ignore the midday heat." },
            },
            {
              '@type': 'Question',
              name: "Do I need to book anything in advance in Colombo?",
              acceptedAnswer: { '@type': 'Answer', text: "Only one thing on this itinerary: the Geoffrey Bawa house on 33rd Lane, which is visited by appointment. Everything else, including the National Museum, Gangaramaya and the Dutch Period Museum, is walk-in. Popular restaurants in Colombo 7 are worth reserving on weekend evenings." },
            },
            {
              '@type': 'Question',
              name: "How much walking is involved?",
              acceptedAnswer: { '@type': 'Answer', text: "A moderate amount, concentrated inside clusters. Pettah to Fort is walked, the Beira Lake temples are walked, and Cinnamon Gardens is pleasant on foot. Between clusters you take short tuk-tuk or PickMe rides. Footpaths are uneven in places, so wear something with a proper sole rather than sandals." },
            },
            {
              '@type': 'Question',
              name: "What should I do in Colombo in the evening?",
              acceptedAnswer: { '@type': 'Answer', text: "Galle Face Green at dusk is the local answer, with kite sellers, food carts and isso wade. After that, either eat seafood on the sand at Mount Lavinia or find a kottu roti stand, which is the national late-night dish and audible from a block away. The Dutch Hospital precinct in Fort holds most of the city's bar scene." },
            },
            {
              '@type': 'Question',
              name: "Can I combine Colombo with a day trip in two days?",
              acceptedAnswer: { '@type': 'Answer', text: "Not comfortably. A Galle day trip alone takes four hours of travel plus the time there and would consume one of your two days entirely. If you want both, give yourself three days: two in the city and one for Galle, going down by the coastal train and back by road." },
            },
            {
              '@type': 'Question',
              name: "What should I skip if I am short on time?",
              acceptedAnswer: { '@type': 'Answer', text: "The National Museum, if you are not a museum person, and the Dutch Period Museum, which is more interesting for the building than the collection. What you should not skip is Pettah in the early morning and Galle Face at dusk, which are the two moments where you see the city being itself rather than presenting itself." },
            },
          ],
        },
      };

    case "pettah-market-guide":
      return {
        title: "Pettah Market Guide: Colombo's Bazaar, Street by Street",
        seoTitle: "Pettah Market Guide, Colombo",
        description: "Pettah is organised by trade, one street per commodity. A practical guide to the cross streets, the Red Mosque, the Dutch Period Museum and how to shop there.",
        heroImage: "https://res.cloudinary.com/dx2fxyaft/image/upload/v1788368764/asiabylocals/tours/shore-excursion-colombo-city-sightseeing-tour-by-tuk-tuk/img0.jpg",
        fastFacts: [
          { icon: "store", label: "Location", value: "Immediately east of Fort, on the other side of the railway; a two-minute walk" },
          { icon: "store", label: "Organising principle", value: "Streets specialise by trade, not by shop" },
          { icon: "store", label: "Landmark", value: "Jami Ul-Alfar, the Red Mosque, built 1908 in striped red and white brick" },
          { icon: "store", label: "Best time to go", value: "Early morning, roughly 8 to 11am, when trading is at its peak and it is cool enough to walk" },
          { icon: "store", label: "Closed day", value: "Much of Pettah winds down on Sunday; Friday midday is quieter around the mosque" },
          { icon: "store", label: "What to carry", value: "Small notes, a bag worn across the front, and no valuables in back pockets" },
        ],
        sections: [
          {
            title: "Pettah Market Guide: Colombo's Bazaar, Street by Street",
            icon: "store",
            content: "Pettah is the market district immediately east of Fort, and crossing between the two takes about two minutes and feels like changing countries. Fort is colonial facades, banks and quiet. Pettah is handcarts, horns, loudspeakers, stacked goods to head height and about as much commerce per square metre as anywhere in South Asia. It is not a tourist attraction, it is Colombo's wholesale and retail engine, and that is exactly what makes it worth an hour or two of your time.\n\nThe organising principle, and the thing that turns Pettah from chaos into something legible, is that the district is arranged by trade. The numbered Cross Streets running off Main Street each have a specialism, more or less: one is electronics, one is textiles and fabric, one is hardware and tools, one is heavy with spices, dried fish and sacks of grain. Nobody put up a sign explaining this. You work it out by walking, and once you have, the whole place makes sense.\n\nThe name comes from the Tamil pettai, meaning a settlement outside a fort, and that is precisely what it was: the native and merchant town that grew up beyond the walls of the European quarter. It has been trading continuously for centuries, under the Dutch, the British and independent Sri Lanka, and it is the least changed part of Colombo.",
            tourCard: CARD_6,
          },
          {
            title: "How Pettah is laid out",
            icon: "store",
            content: "The spine is Main Street, running roughly east from the edge of Fort, with the numbered Cross Streets, First through Fifth and beyond, running perpendicular off it to the north. Bordering the district are Olcott Mawatha along the railway to the south, and Sea Street to the north-east. Between them is a dense grid that is easy to navigate once you accept that you will be looking at the street rather than at a map.\n\nThe specialisation of each street is the thing to hold in your head. Broadly, First Cross Street and its surroundings deal in electronics, phones, accessories and small appliances. Second Cross Street holds textiles and clothing, and is where the Red Mosque stands. Fourth and Fifth Cross Streets and the lanes toward the north-east go heavy on dried goods, spices, rice, lentils and dried fish, and the smell tells you before the signage does. Hardware, tools and machine parts occupy their own stretch. Bags, shoes and toys have theirs. The boundaries blur at the edges and shift over time, but the principle is stable.\n\nThis matters practically because it means you should decide roughly what you want to look at rather than wandering aimlessly. If you want spices, you go to the spice streets and there will be twenty sellers of them beside each other, which is exactly the condition in which prices are competitive and quality is comparable. If you want a phone charger, you go to the electronics streets. Looking for spices on the electronics street will get you nothing, and this is the single most common way visitors conclude Pettah is impenetrable.",
          },
          {
            title: "The Red Mosque",
            icon: "store",
            content: "Jami Ul-Alfar, universally called the Red Mosque, is Pettah's landmark and one of the most photographed buildings in Sri Lanka. It was completed in 1908 in an exuberant style of red and white striped brickwork with onion domes, arches and a candy-cane effect that looks like nothing else on the island. It stands mid-block on Second Cross Street, hemmed in by shops, so it appears above the awnings with no approach and no plaza, which is part of its impact.\n\nThe story often told is that it was built tall and boldly patterned partly to serve as a landmark for sailors approaching the port, and whether or not that is the whole truth, it did function that way before the surrounding buildings rose. It remains an active mosque serving the substantial Muslim trading community that has been a part of Pettah's commerce for generations, long predating European arrival.\n\nVisitors are often permitted inside outside prayer times, but this is a working place of worship and not a monument, so ask at the entrance rather than walking in. Dress modestly, cover shoulders and knees, women should carry a scarf for the head, and shoes come off. Friday around midday prayers is the wrong time to turn up as a sightseer. Photographing the exterior from the street is unproblematic and is what most people come for.",
          },
          {
            title: "The Dutch Period Museum",
            icon: "store",
            content: "A short walk from the mosque, on Prince Street, is the Dutch Period Museum, housed in a building that was the residence of a Dutch governor in the seventeenth century and later served variously as a hospital, a post office and a police station. It is a rare survival of Dutch domestic architecture in the city, built around a central courtyard with a colonnaded veranda, thick walls and high ceilings, all of which is a working demonstration of how to build for this climate without machinery.\n\nThe collection covers the Dutch colonial period in Sri Lanka, with furniture, ceramics, coins, weapons, and gravestones and inscriptions moved here from elsewhere. It is a modest museum in scale and the labelling is uneven, but it does something useful: it gives the Dutch layer of Colombo's history a physical form, which otherwise you only glimpse in the Dutch Hospital across in Fort and in street names.\n\nThe reason to go is as much the contrast as the content. Stepping off a Pettah street where a hundred people are moving goods, into a silent courtyard three and a half centuries old, is the most direct illustration available of how the layers of this city sit on top of each other. Allow forty-five minutes, and check opening days locally, since smaller state museums here sometimes close on days that are not obvious.",
          },
          {
            title: "Sea Street, gold and the Hindu temples",
            icon: "store",
            content: "At the north-eastern edge of Pettah, Sea Street is the goldsmiths' quarter, a concentrated run of jewellery shops that has been the centre of Colombo's gold trade for a very long time. Shop after shop displays gold chains, bangles and wedding sets, mostly serving Sri Lankan customers buying for weddings and as savings rather than tourists. It is worth walking even if you are not buying, simply for the density.\n\nSea Street is also where the district's Hindu character concentrates, with several kovils including the old Ganesha and Kali temples that serve the Tamil merchant community. The temple gopurams, the tiered towers crowded with painted figures, rise directly above the shopfronts. Festival days here are loud and full and genuinely worth catching if your dates coincide.\n\nA word about buying gold or gems in Sri Lanka. The island has a real and ancient gem trade, centred on Ratnapura, and there are entirely legitimate dealers. There is also a well-established practice of steering visitors toward showrooms where prices bear no relation to value, usually via a helpful driver or a stranger who befriends you. If you are not knowledgeable about stones, treat any gem purchase in Colombo as entertainment spending rather than investment, and never buy from somewhere you did not choose yourself.",
          },
          {
            title: "Shopping in Pettah: what is worth buying",
            icon: "store",
            content: "Be honest about what Pettah is for. It is a wholesale and mass-market district serving Sri Lankan households and small retailers, not a craft market. Most of what is sold here is cheap manufactured goods, imported clothing, household plastics, electronics and school supplies. Visitors hoping for handicrafts will be disappointed, and should go to the fixed-price craft and design shops in Colombo 7 instead.\n\nWhat Pettah genuinely does well is dry goods. Spices bought in the spice streets are fresher and cheaper than anywhere aimed at tourists, and this is the place to buy true Ceylon cinnamon in quills, cardamom, cloves, pepper and curry powders. Tea is sold here in bulk and unglamorously; for good tea you are better off with a proper merchant, but for everyday quantities Pettah is fine. Fabric on the textile streets is inexpensive and sold by the metre, and tailoring is cheap in Colombo if you have time.\n\nPrices are negotiable in the market stalls and generally fixed in the actual shops. Bargaining, where it applies, is brisk and unemotional rather than theatrical: ask the price, offer meaningfully less, settle quickly, and walk away without drama if it does not work. Have small notes, because change is a frequent point of friction, and count what you are given.",
          },
          {
            title: "Practicalities, safety and timing",
            icon: "store",
            content: "Go in the morning. Between about eight and eleven the wholesale trade is at its most active, handcarts are moving constantly, and the temperature is still bearable. By early afternoon the heat in those narrow streets is punishing and the energy drops. Much of Pettah winds down on Sundays, and around Poya days, the monthly full-moon Buddhist holidays, a lot of businesses close across the country.\n\nOn safety: Pettah is not dangerous, but it is the most crowded place in Colombo and pickpocketing is the realistic risk. Wear a bag across your front, keep nothing in back pockets, do not bring a passport you do not need, and be particularly alert in the tightest lanes where you are physically pressed against other people. Handcarts have effective right of way and will not stop for you.\n\nGetting there and away is simple. Colombo Fort railway station and the main Bastian Mawatha and Central bus terminals are all at Pettah's southern edge, which is why the district is so busy in the first place. Walk in from Fort, and when you have had enough, walk back out the same way and let the sudden quiet register. That transition, more than any single building, is the thing to take away from Pettah.",
          },
        ],
        faqs: [
          { q: "Is Pettah worth visiting?", a: "Yes, for an hour or two, if you want to see Colombo working rather than presenting itself. It is a wholesale and retail market district organised by trade, with the Red Mosque and the Dutch Period Museum inside it. It is not a craft or souvenir market, so adjust expectations accordingly." },
          { q: "Is Pettah safe for tourists?", a: "Generally yes, in daylight. The realistic risk is pickpocketing, because it is the most crowded part of the city. Carry a bag across your front, keep nothing in back pockets, leave your passport at the hotel and stay alert in the narrowest lanes. Pettah largely empties after trading hours and is not a place to wander after dark." },
          { q: "What is the best time to visit Pettah market?", a: "Between about eight and eleven in the morning, when the wholesale trade is at its peak and the streets are still cool enough to walk. Avoid early afternoon, when the heat in those narrow streets is severe. Much of the district is closed on Sundays and on Poya full-moon holidays." },
          { q: "Can I go inside the Red Mosque?", a: "Often yes, outside prayer times, but ask at the entrance rather than walking in, since it is an active mosque and not a monument. Dress modestly with shoulders and knees covered, women should carry a scarf, and remove your shoes. Avoid Friday around midday. The exterior, which is what most people come for, can be photographed freely from the street." },
          { q: "What should I buy in Pettah?", a: "Spices are the best buy, particularly true Ceylon cinnamon in quills, cardamom and pepper, bought in the streets where the spice traders cluster. Fabric sold by the metre on the textile streets is cheap and good. Skip the electronics unless you know exactly what you are looking at, and do not expect handicrafts, which are better bought in the fixed-price shops of Colombo 7." },
          { q: "Do I need to bargain in Pettah?", a: "In the street stalls, yes, briskly and without theatre. In the actual shops, prices are usually fixed. Ask the price, offer meaningfully less, settle fast, and walk away politely if you cannot agree. Carry small notes, since change is a common way for a price to creep upward." },
          { q: "How long should I spend in Pettah?", a: "Ninety minutes to two hours is right for most people, including the Red Mosque and a walk through two or three of the trade streets. Add another forty-five minutes if you want the Dutch Period Museum. It is a district you experience by walking rather than a set of stops to work through." },
        ],
        jsonLd: {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: [
            {
              '@type': 'Question',
              name: "Is Pettah worth visiting?",
              acceptedAnswer: { '@type': 'Answer', text: "Yes, for an hour or two, if you want to see Colombo working rather than presenting itself. It is a wholesale and retail market district organised by trade, with the Red Mosque and the Dutch Period Museum inside it. It is not a craft or souvenir market, so adjust expectations accordingly." },
            },
            {
              '@type': 'Question',
              name: "Is Pettah safe for tourists?",
              acceptedAnswer: { '@type': 'Answer', text: "Generally yes, in daylight. The realistic risk is pickpocketing, because it is the most crowded part of the city. Carry a bag across your front, keep nothing in back pockets, leave your passport at the hotel and stay alert in the narrowest lanes. Pettah largely empties after trading hours and is not a place to wander after dark." },
            },
            {
              '@type': 'Question',
              name: "What is the best time to visit Pettah market?",
              acceptedAnswer: { '@type': 'Answer', text: "Between about eight and eleven in the morning, when the wholesale trade is at its peak and the streets are still cool enough to walk. Avoid early afternoon, when the heat in those narrow streets is severe. Much of the district is closed on Sundays and on Poya full-moon holidays." },
            },
            {
              '@type': 'Question',
              name: "Can I go inside the Red Mosque?",
              acceptedAnswer: { '@type': 'Answer', text: "Often yes, outside prayer times, but ask at the entrance rather than walking in, since it is an active mosque and not a monument. Dress modestly with shoulders and knees covered, women should carry a scarf, and remove your shoes. Avoid Friday around midday. The exterior, which is what most people come for, can be photographed freely from the street." },
            },
            {
              '@type': 'Question',
              name: "What should I buy in Pettah?",
              acceptedAnswer: { '@type': 'Answer', text: "Spices are the best buy, particularly true Ceylon cinnamon in quills, cardamom and pepper, bought in the streets where the spice traders cluster. Fabric sold by the metre on the textile streets is cheap and good. Skip the electronics unless you know exactly what you are looking at, and do not expect handicrafts, which are better bought in the fixed-price shops of Colombo 7." },
            },
            {
              '@type': 'Question',
              name: "Do I need to bargain in Pettah?",
              acceptedAnswer: { '@type': 'Answer', text: "In the street stalls, yes, briskly and without theatre. In the actual shops, prices are usually fixed. Ask the price, offer meaningfully less, settle fast, and walk away politely if you cannot agree. Carry small notes, since change is a common way for a price to creep upward." },
            },
            {
              '@type': 'Question',
              name: "How long should I spend in Pettah?",
              acceptedAnswer: { '@type': 'Answer', text: "Ninety minutes to two hours is right for most people, including the Red Mosque and a walk through two or three of the trade streets. Add another forty-five minutes if you want the Dutch Period Museum. It is a district you experience by walking rather than a set of stops to work through." },
            },
          ],
        },
      };

    case "galle-face-green-guide":
      return {
        title: "Galle Face Green: Colombo's Seafront Promenade at Dusk",
        seoTitle: "Galle Face Green Guide, Colombo",
        description: "The history of Colombo's ocean promenade, why it fills at sunset, what to eat from the food carts, and how to make the most of an evening on the green.",
        heroImage: "https://res.cloudinary.com/dx2fxyaft/image/upload/v1788368743/asiabylocals/tours/port-city-colombo-sunset-cruise-with-snacks/img0.jpg",
        fastFacts: [
          { icon: "sunset", label: "Location", value: "Between Galle Road and the sea, running south from Fort along Colombo's seafront" },
          { icon: "sunset", label: "Origin", value: "Cleared by the Dutch as a field of fire; laid out as a promenade by the British in the 1850s" },
          { icon: "sunset", label: "Best time", value: "From about 5pm to well after dark; Saturdays and Sundays are busiest" },
          { icon: "sunset", label: "What to eat", value: "Isso wade, the prawn-topped lentil fritter, plus achcharu pickled fruit and cut mango" },
          { icon: "sunset", label: "Cost", value: "Free to enter; food carts cost very little" },
          { icon: "sunset", label: "Swimming", value: "No. The shoreline is rocky and the currents are dangerous, especially in monsoon season" },
        ],
        sections: [
          {
            title: "Galle Face Green: Colombo's Seafront Promenade at Dusk",
            icon: "sunset",
            content: "Galle Face Green is a half-kilometre strip of lawn between Galle Road and the Indian Ocean, and it is the closest thing Colombo has to a communal living room. During the day it is a hot, largely empty green that visitors walk past and wonder about. From about five in the afternoon it fills, and by sunset it is the most alive public space in the country.\n\nIt exists because of artillery. The Dutch cleared the ground in the seventeenth century to give the guns of their fort an unobstructed line of fire toward any approach along the coast, which is why it is flat, open and directly on the water. Under the British it was reimagined as a promenade and recreation ground, laid out in the 1850s during the governorship of Sir Henry Ward, with an inscription dedicating it to the ladies and children of Colombo. Cricket, golf, horse racing and military parades all happened here at various points.\n\nWhat it is now is neither military nor colonial. It is where families come in the evening because there is a sea breeze and space for children to run, where kites are sold and flown, where couples sit facing the water with an umbrella held up against the view, and where a line of carts sells fried snacks to a queue. Nobody arranged it for visitors, which is why it is the best free hour in Colombo.",
            tourCard: CARD_7,
          },
          {
            title: "Why it exists: from field of fire to promenade",
            icon: "sunset",
            content: "The Dutch took Colombo from the Portuguese in 1656 and set about fortifying it properly. Part of that work involved clearing the ground south of the fort so that nothing could approach under cover and so their cannon had an unobstructed field of fire down the coast. That deliberately empty ground is the reason there is a large open green in the middle of an otherwise dense capital city today, and it is why the space is flat and treeless.\n\nUnder British rule the military purpose faded and the recreational one took over. In the 1850s the green was formally laid out as a promenade under Governor Sir Henry Ward, whose dedication of the space to the ladies and children of Colombo is still recorded on a plaque there. Through the colonial period it hosted cricket, golf, horse racing and ceremonial parades, and the grand hotel that still stands at its southern end, one of the oldest in Asia, dates from that era.\n\nThe green has been reshaped several times since independence, most recently with resurfacing, new paving along the seafront wall and a formalised area for the food vendors who had always been there informally. It is smaller than it once was, having lost ground to road widening and construction, and to the north the enormous Port City reclamation now occupies water that was open sea within living memory. The green's history is essentially the history of Colombo compressed into one field.",
          },
          {
            title: "What actually happens at dusk",
            icon: "sunset",
            content: "Arrive around half past five and you will see the green fill in real time. Families spread mats and sit; children run in the space they do not have at home; groups of young men play informal cricket with improvised stumps. The sea breeze picks up in the late afternoon, which is the whole reason the timing works, and it is what makes the kites possible.\n\nKite sellers walk the green with bunches of cheap, brightly coloured kites held above their heads, and by six the sky above the green has a dozen or more of them up at once. Buying one and flying it badly is a legitimate and inexpensive way to spend twenty minutes. Along the seafront wall, couples sit facing the water, very often with an umbrella opened between themselves and the promenade, which is a well-known Colombo convention that everyone politely ignores.\n\nAlong the northern end, the food carts set up in a line and start frying. The crowd builds through sunset and stays well after dark, and on Saturdays and Sundays it is genuinely packed. Nothing about it is a performance for tourists, which is why an hour here tells you more about the city than most of its museums.",
          },
          {
            title: "The food carts and what to order",
            icon: "sunset",
            content: "Isso wade is the thing to eat, and Galle Face is where you eat it. A wade, pronounced roughly wah-day, is a savoury fritter of ground lentils, spiced and flattened and deep-fried; the Galle Face version has whole small prawns pressed into the top before it goes in the oil. It comes with a fierce chilli sauce and is eaten standing up, immediately, from a scrap of paper. Buy from a cart with a queue so that yours comes out of the oil rather than off a cooling stack.\n\nBeyond that, the standard carts sell achcharu, which is fruit and vegetables pickled with chilli, salt and vinegar and served in a bag, and freshly cut mango, pineapple and green mango dressed with salt and chilli powder, which is one of the great hot-weather foods anywhere. There will be corn on the cob grilled over coals, various fried short eats, and king coconut sellers with stacks of orange thambili who will hack the top off one for you.\n\nStandards are generally decent because the turnover is enormous, but apply the usual rules: hot, freshly cooked, high throughput. Prices are low and largely fixed, though it does no harm to ask before ordering. And take your rubbish with you, since the green is cleaned by people rather than by machinery.",
          },
          {
            title: "The southern end, the hotels and the Port City",
            icon: "sunset",
            content: "At the southern end of the green stands one of Asia's oldest hotels, a colonial pile that has been operating on this spot since the mid-nineteenth century and has accumulated the guest list to prove it. Even if you are not staying, its seaward terrace is the traditional place to have a drink at sunset, and the ritual of a bagpiper or a flag-lowering at dusk has been part of the theatre there for a long time. It is a deliberately old-fashioned experience and none the worse for it.\n\nAlong the eastern side of the green, across Galle Road, are several of the city's large international hotels and, immediately behind, some of Colombo's newest high-rise development. The contrast between the empty green, the colonial hotel and the towers behind is the clearest visual summary available of the city's last thirty years.\n\nTo the north, past the green's top end, is the Port City, an enormous reclamation project that has pushed a new flat expanse of land out into the sea beside Fort and is slowly filling with development. Whatever you think of it, it is the largest single change to Colombo's shoreline in centuries, and standing on the green looking north at it is the honest way to see where the city is heading.",
          },
          {
            title: "Practicalities: getting there, safety and the sea",
            icon: "sunset",
            content: "The green runs along the seafront immediately south of Fort, and if you are anywhere in Fort or Kollupitiya you can walk. From further out, any tuk-tuk driver knows it, and a PickMe ride from most central hotels is short and cheap. Traffic on Galle Road at that hour is heavy, so allow more time than the distance suggests, and consider being dropped at the northern end and walking south.\n\nDo not swim. This is important and it is not obvious, because there is water, sand in places and a great many people. The shoreline here is rocky and irregular, the currents are strong, and during the southwest monsoon between roughly May and September the sea can be violent right up against the wall. Waves regularly come over the promenade in bad weather. People paddle at the edges; going further in is a genuinely bad idea, and there are no lifeguards.\n\nAs for safety on land, it is a busy family space and is fine into the evening. Ordinary crowd precautions apply around the food carts, where people are pressed together. You will be approached occasionally by vendors and, less often, by someone with a story or a scheme; a polite no and continued walking ends it. There is no entrance fee and no closing time.",
          },
          {
            title: "Fitting it into a Colombo day",
            icon: "sunset",
            content: "Galle Face works best as the end of a day rather than a destination in itself. The natural sequence is to spend the morning in Pettah and Fort, take the middle of the day somewhere shaded, visit Gangaramaya and Seema Malaka on Beira Lake in the mid-afternoon, and then walk down to the green for five o'clock. All of that sits within a small area and does not require much transport.\n\nGive it at least an hour and a half. Half of that is simply sitting or walking the length of the seafront wall while the light goes; the rest is the food carts and, if you want, a kite. If you would like a drink at the colonial hotel at the southern end, add another hour and go before sunset rather than after, when it fills.\n\nAfterwards, you are well positioned for dinner. The Dutch Hospital precinct in Fort is a ten-minute ride north and holds most of the city's restaurant and bar scene in a genuinely historic building. Alternatively, if you want the local version of an evening, find a kottu stand and eat chopped roti standing at a counter, which is what a great many of the people who were on the green with you will be doing an hour later.",
          },
        ],
        faqs: [
          { q: "What time should I go to Galle Face Green?", a: "Arrive around half past five in the afternoon. The sea breeze picks up, the kite sellers come out, the food carts start frying and the crowd builds through sunset. Before about four it is hot and largely empty. Weekends are noticeably fuller than weekdays." },
          { q: "What should I eat at Galle Face Green?", a: "Isso wade, a deep-fried lentil fritter topped with whole prawns and served with chilli sauce, is the signature. Also worth having are achcharu, which is chilli-and-salt pickled fruit, freshly cut mango dressed the same way, grilled corn, and a king coconut. Buy from carts with a queue so the food is fresh out of the oil." },
          { q: "Can you swim at Galle Face Green?", a: "No. It is a promenade rather than a beach, the shoreline is rocky, currents are strong and there are no lifeguards. During the southwest monsoon from roughly May to September the sea breaks over the promenade wall. For swimming near Colombo, go south to Mount Lavinia or, better, to Bentota." },
          { q: "Is Galle Face Green free?", a: "Yes. There is no entrance fee and no closing time, and it is a public open space used mainly by Colombo residents. The only money you will spend is on food from the carts, a kite, or a drink at the hotel at the southern end, all of which are inexpensive by the standards of a capital city." },
          { q: "What is the history of Galle Face Green?", a: "The Dutch cleared the ground in the seventeenth century so their fort's cannon would have an open field of fire along the coast. The British later turned it into a promenade, formally laid out in the 1850s under Governor Sir Henry Ward and dedicated to the ladies and children of Colombo. It has since hosted cricket, horse racing and parades, and is now simply the city's main public green." },
          { q: "How long should I spend there?", a: "About ninety minutes covers it properly: walking the length of the seafront, watching the kites, buying something from the food carts and staying through sunset. Add an hour if you want a sunset drink on the terrace of the old hotel at the southern end, and go before sunset rather than after, since it fills." },
          { q: "Is Galle Face Green safe in the evening?", a: "Yes. It is a busy family space and stays populated well after dark. Take normal crowd precautions around the food carts where people are pressed together, keep your bag in front of you, and expect the occasional vendor or approach, which a polite refusal ends. Take a tuk-tuk or a ride-hail back rather than walking long distances late." },
        ],
        jsonLd: {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: [
            {
              '@type': 'Question',
              name: "What time should I go to Galle Face Green?",
              acceptedAnswer: { '@type': 'Answer', text: "Arrive around half past five in the afternoon. The sea breeze picks up, the kite sellers come out, the food carts start frying and the crowd builds through sunset. Before about four it is hot and largely empty. Weekends are noticeably fuller than weekdays." },
            },
            {
              '@type': 'Question',
              name: "What should I eat at Galle Face Green?",
              acceptedAnswer: { '@type': 'Answer', text: "Isso wade, a deep-fried lentil fritter topped with whole prawns and served with chilli sauce, is the signature. Also worth having are achcharu, which is chilli-and-salt pickled fruit, freshly cut mango dressed the same way, grilled corn, and a king coconut. Buy from carts with a queue so the food is fresh out of the oil." },
            },
            {
              '@type': 'Question',
              name: "Can you swim at Galle Face Green?",
              acceptedAnswer: { '@type': 'Answer', text: "No. It is a promenade rather than a beach, the shoreline is rocky, currents are strong and there are no lifeguards. During the southwest monsoon from roughly May to September the sea breaks over the promenade wall. For swimming near Colombo, go south to Mount Lavinia or, better, to Bentota." },
            },
            {
              '@type': 'Question',
              name: "Is Galle Face Green free?",
              acceptedAnswer: { '@type': 'Answer', text: "Yes. There is no entrance fee and no closing time, and it is a public open space used mainly by Colombo residents. The only money you will spend is on food from the carts, a kite, or a drink at the hotel at the southern end, all of which are inexpensive by the standards of a capital city." },
            },
            {
              '@type': 'Question',
              name: "What is the history of Galle Face Green?",
              acceptedAnswer: { '@type': 'Answer', text: "The Dutch cleared the ground in the seventeenth century so their fort's cannon would have an open field of fire along the coast. The British later turned it into a promenade, formally laid out in the 1850s under Governor Sir Henry Ward and dedicated to the ladies and children of Colombo. It has since hosted cricket, horse racing and parades, and is now simply the city's main public green." },
            },
            {
              '@type': 'Question',
              name: "How long should I spend there?",
              acceptedAnswer: { '@type': 'Answer', text: "About ninety minutes covers it properly: walking the length of the seafront, watching the kites, buying something from the food carts and staying through sunset. Add an hour if you want a sunset drink on the terrace of the old hotel at the southern end, and go before sunset rather than after, since it fills." },
            },
            {
              '@type': 'Question',
              name: "Is Galle Face Green safe in the evening?",
              acceptedAnswer: { '@type': 'Answer', text: "Yes. It is a busy family space and stays populated well after dark. Take normal crowd precautions around the food carts where people are pressed together, keep your bag in front of you, and expect the occasional vendor or approach, which a polite refusal ends. Take a tuk-tuk or a ride-hail back rather than walking long distances late." },
            },
          ],
        },
      };

    default:
      return null;
  }
}

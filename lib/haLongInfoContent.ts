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

    default:
      return null;
  }
}

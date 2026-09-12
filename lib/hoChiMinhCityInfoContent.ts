// Ho Chi Minh City authority pages (2026-09). Same CityInfoData shape as cityInfoContent.ts.
// Reached via getHoChiMinhCityInfoContent() -> getCityInfoContent().
import type { CityInfoData } from './cityInfoContent';

const IMG = 'https://res.cloudinary.com/dx2fxyaft/image/upload/v1789200403/asiabylocals/tours/water-puppet-show-ticket-in-ho-chi-minh-city/img0.png';

export function getHoChiMinhCityInfoContent(slug: string): CityInfoData | null {
  switch (slug) {

    case "cu-chi-tunnels-guide":
      return {
        title: "Cu Chi Tunnels: Ben Dinh or Ben Duoc, and What the Visit Involves",
        seoTitle: "Cu Chi Tunnels Guide 2026",
        description: "The two sites sold under one name, how tight the tunnels actually are, and the half day it takes.",
        heroImage: IMG,
        fastFacts: [
          { icon: "map", label: "Two sites", value: "Ben Dinh is closer and busier; Ben Duoc is further and quieter" },
          { icon: "clock", label: "From the city", value: "About 1.5 to 2 hours each way" },
          { icon: "arrow-down", label: "The tunnels", value: "Widened for visitors, still very tight and hot" },
          { icon: "alert-triangle", label: "Not for", value: "Claustrophobia, bad knees, or anyone who dislikes the dark" },
          { icon: "volume-2", label: "The shooting range", value: "Optional and loud; audible across the whole site" },
        ],
        sections: [
          {
            title: "Cu Chi Tunnels: Ben Dinh or Ben Duoc, and What the Visit Involves",
            icon: "map",
            content: "Cu Chi is sold as one attraction and is actually two separate sites on the same tunnel network, roughly fifteen kilometres apart.\n\nBen Dinh is nearer the city, gets most of the tour traffic, and is the one you are on unless the itinerary says otherwise. Ben Duoc is further out, more used by Vietnamese visitors, and is noticeably quieter.\n\nBoth cover the same ground: a briefing, examples of the trap systems, a stretch of tunnel you can go down into, and the entrance hatches that are the most memorable thing at either site.\n\nIf your tour gives you the choice and you have the time, take Ben Duoc.",
            tourCard: {
              slug: "cu-chi-tunnels-tour-with-optional-shooting-range-in-ho-chi-minh-city",
              title: "Cu Chi Tunnels Tour with Optional Shooting Range",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 22",
              duration: "7 hours",
              image: IMG,
            },
          },
          {
            title: "Going into the tunnels",
            icon: "alert-triangle",
            content: "⚠️ The sections open to visitors have been widened and lit, and they are still tight, hot and airless. People who are certain they will be fine sometimes are not.\n\nYou move crouched or on hands and knees. There are exits at intervals so you can come out early, and the guides point them out before you go in, which is the thing to listen for.\n\nIt is not the place to discover you are claustrophobic, and it is hard on knees. Nobody minds if you skip it; a fair number of each group does.\n\nWear clothes you do not mind getting red dirt on. That dirt does not fully come out.",
          },
          {
            title: "The half day it actually takes",
            icon: "clock",
            content: "The drive is one and a half to two hours each way depending on traffic leaving the city, which means a morning tour returns in the early afternoon and an afternoon tour gets back after dark.\n\nMany tours stop at a handicraft workshop on the way. It is a scheduled shopping stop and you are not obliged to buy anything.\n\nCombining Cu Chi with the Mekong Delta in one day is sold and is a mistake: they are in opposite directions from the city and the day becomes almost entirely road.\n\nThe shooting range at the site is optional, costs extra per round, and is extremely loud across the whole complex, which some visitors find changes the tone of the place.",
          },
        ],
      };

    case "mekong-delta-day-trip-guide":
      return {
        title: "Mekong Delta Day Trips: My Tho, Ben Tre and the Floating Market Question",
        seoTitle: "Mekong Delta Day Trip from Ho Chi Minh City 2026",
        description: "What a day trip reaches, why the famous floating market is not on it, and how to tell a good itinerary from a conveyor belt.",
        heroImage: IMG,
        fastFacts: [
          { icon: "map", label: "Day trips reach", value: "My Tho and Ben Tre, about 2 hours from the city" },
          { icon: "ship", label: "Cai Rang floating market", value: "Near Can Tho; needs an overnight, not a day trip" },
          { icon: "clock", label: "Typical day", value: "Around 9 hours door to door" },
          { icon: "sun", label: "Markets are early", value: "Floating markets wind down by about 8am" },
          { icon: "users", label: "Watch for", value: "Itineraries with five stops in one day" },
        ],
        sections: [
          {
            title: "Mekong Delta Day Trips: My Tho, Ben Tre and the Floating Market Question",
            icon: "ship",
            content: "The Mekong Delta is enormous and a day trip from Ho Chi Minh City reaches its near edge: My Tho and, slightly further, Ben Tre.\n\nThat is a real part of the delta with real river life, coconut groves, small canals you go down in a rowing boat, and workshops making coconut candy and rice paper. It is also the most heavily touristed corner of it, and the standard itinerary is a well-worn circuit.\n\nBen Tre is generally the better of the two. It is a little further, takes fewer groups, and the canals are narrower and quieter than My Tho's main channel.",
            tourCard: {
              slug: "hcm-mekong-delta-my-tho-and-ben-tre-coconut-village-ho-chi-minh-city",
              title: "Mekong Delta: My Tho and Ben Tre Coconut Village",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 23",
              duration: "9 hours",
              image: IMG,
            },
          },
          {
            title: "The floating market you have seen photographs of",
            icon: "alert-triangle",
            content: "⚠️ Cai Rang, the big floating market in the photographs, is near Can Tho, roughly four hours from Ho Chi Minh City. It is busiest at dawn and winding down by around eight in the morning.\n\nThose two facts together mean it cannot be done as a day trip from Saigon. Anything advertising a floating market on a one-day Mekong tour is showing you a much smaller local one, which is fine as long as you know that is what it is.\n\nTo see Cai Rang properly you need a night in Can Tho and an early boat. It is worth it if the delta is a priority; it is a two-day commitment.",
          },
          {
            title: "Telling a good day from a conveyor belt",
            icon: "users",
            content: "The difference between Mekong tours is pace, not content. Almost all of them visit the same kinds of place.\n\nA good itinerary does four things properly. A poor one lists seven and gives you fifteen minutes at each, most of which is a demonstration ending at a shop counter.\n\nSmall-group tours cost more and are the whole difference on this trip, because the rowing boats seat a handful of people and a large group means waiting in the sun for your turn.\n\nAsk what the lunch is. On the better tours it is a proper sit-down meal of local river fish; on the cheapest it is a canteen stop shared with several other buses.",
          },
        ],
      };

    case "saigon-street-food-guide":
      return {
        title: "Saigon Street Food: How the South Eats Differently",
        seoTitle: "Ho Chi Minh City Street Food Guide 2026",
        description: "Why southern food is sweeter and herb-heavy, the dishes Saigon owns, and how a motorbike food tour works.",
        heroImage: IMG,
        fastFacts: [
          { icon: "utensils", label: "The southern style", value: "Sweeter, more herbs, more fresh vegetables at the table" },
          { icon: "sandwich", label: "The signature", value: "Banh mi, a French roll done better here than in France" },
          { icon: "flame", label: "Worth seeking", value: "Com tam, broken rice with grilled pork" },
          { icon: "bike", label: "Motorbike tours", value: "Cover far more ground than walking; you ride pillion" },
          { icon: "clock", label: "Late city", value: "Saigon eats much later than Hanoi" },
        ],
        sections: [
          {
            title: "Saigon Street Food: How the South Eats Differently",
            icon: "utensils",
            content: "If you have eaten in Hanoi first, Saigon tastes noticeably different, and it is not a matter of quality.\n\nSouthern cooking is sweeter, uses more sugar and coconut, and puts a plate of raw herbs and vegetables on the table with almost everything. A southern pho arrives with a pile of basil, bean sprouts and lime that a Hanoi cook would consider an insult to the broth.\n\nThe city also eats later. Hanoi is an early-morning city; Saigon runs well into the night, and some of the best street eating happens after nine.\n\nThe other difference is variety. Saigon absorbed food from across the south, from the delta and from its large Chinese community in Cholon, and it shows.",
            tourCard: {
              slug: "saigon-street-food-flower-market-and-old-apartment-tour",
              title: "Saigon Street Food, Flower Market and Old Apartment Tour",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 27",
              duration: "3.5 hours",
              image: IMG,
            },
          },
          {
            title: "What to eat here specifically",
            icon: "sandwich",
            content: "Banh mi is the one to start with. A crisp light roll, pate, cold cuts or grilled pork, pickled carrot and daikon, coriander and chilli. The bread is the reason it works and the bread is better in the south.\n\nCom tam is broken rice, grilled pork chop, shredded pork skin and a steamed egg loaf, eaten all day and most associated with Saigon.\n\nBanh xeo is a large turmeric crepe you tear up, wrap in lettuce and herbs, and dip. It is messy and it is meant to be.\n\nFinish with ca phe sua da, iced coffee with condensed milk, which is strong enough that one in the afternoon will keep you up.",
          },
          {
            title: "Motorbike food tours, which work here",
            icon: "bike",
            content: "Saigon is spread out and the good eating is not concentrated in one walkable quarter the way Hanoi's is. That is why the motorbike food tours took hold here.\n\nYou ride pillion behind a driver, usually a student, and cover four or five neighbourhoods in an evening you could not cross on foot. A helmet is provided.\n\nIt sounds alarming and is generally calmer than crossing the road yourself, because your driver knows the traffic. If you are nervous, say so at the start; the pace changes.\n\nWalking tours work well too, but they cover one district rather than the city. Pick by how much ground you want, not by nerve.",
          },
        ],
      };

    default:
      return null;
  }
}

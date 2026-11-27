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

    case "best-time-to-visit-ho-chi-minh-city":
      return {
        title: "Best Time to Visit Ho Chi Minh City: Dry and Wet Seasons, Tet, and the Months That Actually Matter",
        seoTitle: "Best Time to Visit Ho Chi Minh City 2026",
        description: "Saigon has two seasons, not four. The dry months from December to April, what the afternoon rains of May to November are really like, the Tet shutdown, heat in April, and how the calendar changes the Cu Chi and Mekong days.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/mui-ne-best-day-trip-in-ho-chi-minh-city/img0/1600.webp",
        fastFacts: [
          { icon: "sun", label: "Dry season", value: "December to April" },
          { icon: "cloud", label: "Wet season", value: "May to November, short afternoon storms" },
          { icon: "thermometer", label: "Hottest", value: "April, 35 degrees and humid" },
          { icon: "calendar", label: "Tet", value: "Late Jan or Feb; much of the city closes for a week" },
          { icon: "users", label: "Busiest", value: "December to February, and Tet" },
          { icon: "droplet", label: "Rain", value: "Usually 1 to 2 hours in the late afternoon, then clears" },
        ],
        sections: [

          {
            title: "Two seasons",
            icon: "sun",
            content: "Ho Chi Minh City is 10 degrees north of the equator and its year has two halves. The dry season from December to April is sunny, with December and January the most comfortable at 25 to 32 degrees and April the hottest, near 35 with heavy humidity before the rains break. The wet season, May to November, is not a monsoon washout: most days are bright until mid-afternoon, a storm arrives for an hour or two, the streets flood ankle-deep and drain, and the evening is cooler. Tours run year-round; the wet-season rain rarely costs more than a coffee stop.",
            tourCard: {
              slug: "mui-ne-best-day-trip-in-ho-chi-minh-city",
              title: "Mui Ne Best Day Trip in Ho Chi Minh City",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 82.60",
              duration: "12 hours",
              image: "https://images.asiabylocals.com/asiabylocals/tours/mui-ne-best-day-trip-in-ho-chi-minh-city/img0/1600.webp",
            },
          },
          {
            title: "Month by month",
            icon: "calendar",
            content: "December to February: dry, warm, the busiest tourist months and the best for walking the city. Late January or February: Tet, the lunar new year, when the city empties of its migrants for a week, most restaurants and small businesses close for three to five days, and prices rise; the flower street on Nguyen Hue is the compensation. March and April: hot and dry, best for early starts. May: the first storms. June to October: green, wet afternoons, fewer tourists, lower hotel rates, and the Mekong at its fullest. November: the rains taper and the city dries out.",
            tourCard: {
              slug: "private-ben-tre-visit-mekong-delta-region-ho-chi-minh-city",
              title: "Private Ben Tre: visit Mekong delta region (Ho Chi Minh City)",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 88.32",
              duration: "4 hours",
              image: "https://images.asiabylocals.com/asiabylocals/tours/private-ben-tre-visit-mekong-delta-region-ho-chi-minh-city/img0/1600.webp",
            },
          },
          {
            title: "What the weather changes",
            icon: "map",
            content: "Cu Chi and the Mekong are outdoor days: in the wet season take the morning departures and expect the delta's orchards and canals at their lushest; in April the tunnels are stifling and the earlier the better. City walking and food tours are evening affairs in any month, since the afternoon is the hot and wet hour. Rooftop bars and the Saigon River cruises are best in the dry season for the sunset. The [Cu Chi guide](/vietnam/ho-chi-minh-city/cu-chi-tunnels-guide) and [Mekong guide](/vietnam/ho-chi-minh-city/mekong-delta-day-trip-guide) have the day plans.",
            tourCard: {
              slug: "from-hcm-city-visit-mekong-delta-with-maximum-12-people-ho-chi-minh-city",
              title: "From HCM City: Visit Mekong Delta With Maximum 12 People (Ho Chi Minh City)",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 45.20",
              duration: "9 hours",
              image: "https://images.asiabylocals.com/asiabylocals/tours/from-hcm-city-visit-mekong-delta-with-maximum-12-people-ho-chi-minh-city/img0/1600.webp",
            },
          },
          {
            title: "Tet",
            icon: "moon",
            content: "Tet Nguyen Dan falls on the lunar new year, between 21 January and 20 February, and for Saigon it is Christmas, New Year and a homecoming at once. The week before is the best time in the city: the Nguyen Hue flower street, the markets, the fireworks on the river. The first three days are the problem: shops, restaurants and many tours close, transport is full, and the city is quiet. Book around it or embrace it; do not arrive on day one expecting a normal week.",
            tourCard: {
              slug: "ghost-belief-and-culture-tour-on-motorbike-in-ho-chi-minh-city",
              title: "Ghost, Belief and Culture Tour on Motorbike in Ho Chi Minh City",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 20.80",
              duration: "2 hours",
              image: "https://images.asiabylocals.com/asiabylocals/tours/ghost-belief-and-culture-tour-on-motorbike-in-ho-chi-minh-city/img0/1600.webp",
            },
          },
          {
            title: "Booking sense",
            icon: "clock",
            content: "There is no bad month. Aim for December to March for the classic dry-season trip, September to November for value and green scenery with manageable rain, and avoid the first three days of Tet unless you want the quiet. Every tour on our Saigon pages runs in both seasons; the operators shift the itinerary to the morning in the rains. The [Saigon street food guide](/vietnam/ho-chi-minh-city/saigon-street-food-guide) covers the evening in any weather.",
            tourCard: {
              slug: "tay-ninh-1-day-trip-black-virgin-mountain-and-cao-dai-temple-in-ho-chi-minh-city",
              title: "Tay Ninh: 1-Day Trip Black Virgin Mountain and Cao Dai Temple in Ho Chi Minh City",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 61.83",
              duration: "11 hours",
              image: "https://images.asiabylocals.com/asiabylocals/tours/tay-ninh-1-day-trip-black-virgin-mountain-and-cao-dai-temple-in-ho-chi-minh-city/img0/1600.webp",
            },
          },
        ],
        faqs: [
          { q: "What is the best month to visit Ho Chi Minh City?", a: "December to February: dry, warm and comfortable. March and April are hotter; the wet season from May to November has short afternoon storms and fewer crowds." },
          { q: "Does the rainy season ruin a trip to Saigon?", a: "No. Rain comes as a one- to two-hour afternoon storm most days and clears; mornings and evenings are fine, and hotels are cheaper." },
          { q: "When is Tet in Ho Chi Minh City?", a: "On the lunar new year, between 21 January and 20 February. The week before is festive; the first three days most businesses close." },
          { q: "How hot does Ho Chi Minh City get?", a: "April is the peak at around 35 degrees with high humidity. December and January are the coolest at 25 to 32." },
        ],
      };

    case "saigon-motorbike-tours-guide":
      return {
        title: "Saigon by Motorbike: Night Food Rides, the Districts You Cannot Walk To, and Riding Pillion Safely",
        seoTitle: "Saigon Motorbike Tours Guide 2026",
        description: "Why the motorbike tour is Ho Chi Minh City's signature experience, the routes across Districts 1, 3, 4, 5 and Binh Thanh, what the night food rides eat, the women-driver companies, helmets and the licence issue.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/immersive-cooking-class-and-market-tour-with-chef-in-ho-chi-minh-city/img0/1600.webp",
        fastFacts: [
          { icon: "bike", label: "Format", value: "Pillion behind a licensed local driver-guide" },
          { icon: "clock", label: "Length", value: "3 to 4.5 hours, evening is the classic" },
          { icon: "ticket", label: "Price", value: "USD 35 to 70 with food and drinks" },
          { icon: "map", label: "Districts", value: "1, 3, 4, 5 (Cholon), Binh Thanh, Thu Thiem" },
          { icon: "shield", label: "Helmet", value: "Compulsory and provided" },
          { icon: "users", label: "Solo", value: "Every guest has their own driver, no single supplement" },
        ],
        sections: [

          {
            title: "Why this is the tour",
            icon: "bike",
            content: "Saigon has eight million motorbikes and the city is designed around them. The famous sights of District 1 are walkable, but the city that Saigonese live in, the alleys of District 4, the Chinese shophouses of Cholon, the canal-side cafes of District 3, the food streets of Binh Thanh, is a motorbike's world, and a pillion tour reaches five districts in an evening. The format was invented here in the 2010s by student-run companies, many with all-women driver teams, and it remains the best-reviewed thing to do in the city.",
            tourCard: {
              slug: "immersive-cooking-class-and-market-tour-with-chef-in-ho-chi-minh-city",
              title: "Immersive Cooking Class and Market Tour with Chef in Ho Chi Minh City",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 45.08",
              duration: "Flexible",
              image: "https://images.asiabylocals.com/asiabylocals/tours/immersive-cooking-class-and-market-tour-with-chef-in-ho-chi-minh-city/img0/1600.webp",
            },
          },
          {
            title: "Night food rides",
            icon: "utensils",
            content: "The standard evening ride starts around 17:30 and eats its way across the city: banh xeo sizzling crepes in District 3, a Cholon noodle house, grilled seafood or snails on plastic stools in District 4, a bo la lot (beef in betel leaf) stall, a broken-rice plate, coconut ice cream or che dessert, and a rooftop or a bia hoi for the last stop, six to eight tastings in four hours. Everything is included. The drivers are the guides and eat with you. The [street food guide](/vietnam/ho-chi-minh-city/saigon-street-food-guide) lists the dishes if you go alone.",
            tourCard: {
              slug: "2-day-1-night-mekong-delta-can-tho-floating-market",
              title: "2-Day 1-Night Mekong Delta, Can Tho Floating Market",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 114.30",
              duration: "2 days",
              image: "https://images.asiabylocals.com/asiabylocals/tours/2-day-1-night-mekong-delta-can-tho-floating-market/img0/1600.webp",
            },
          },
          {
            title: "Day rides and other routes",
            icon: "map",
            content: "Daytime rides cover the sights with less heat than walking: the Reunification Palace, the post office and Notre Dame, the War Remnants Museum, Cholon's Thien Hau temple and Binh Tay market, the Thu Thiem side of the river for the skyline, and a coffee in a hidden apartment cafe. Half-day rides out of the city reach the Cu Chi tunnels (70 km each way on the bike, a long day) or the Long An rice country. Vintage Vespa rides use restored 1960s scooters at a premium.",
            tourCard: {
              slug: "guided-vegetarian-food-tour-by-motorbike-in-ho-chi-minh-city",
              title: "Guided Vegetarian Food Tour by Motorbike in Ho Chi Minh City",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 71.50",
              duration: "4 hours",
              image: "https://images.asiabylocals.com/asiabylocals/tours/guided-vegetarian-food-tour-by-motorbike-in-ho-chi-minh-city/img0/1600.webp",
            },
          },
          {
            title: "Safety and the licence",
            icon: "shield",
            content: "Drivers hold Vietnamese licences and the companies carry insurance; helmets are provided and legally required; the pace is the traffic's, which in Saigon means rarely above 30 km/h. Wear closed shoes and long trousers, and hold the grab bar, not the driver. Self-riding needs a licence with a motorcycle category and a 1968-convention international permit; without one the police can fine you and travel insurance will not pay for an accident, which is why a pillion tour is the answer.",
            tourCard: {
              slug: "motorbike-street-food-tour-12-tastings-in-ho-chi-minh-city",
              title: "Motorbike Street Food Tour - 12 Tastings in Ho Chi Minh City",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 40.30",
              duration: "3.5 hours",
              image: "https://images.asiabylocals.com/asiabylocals/tours/motorbike-street-food-tour-12-tastings-in-ho-chi-minh-city/img0/1600.webp",
            },
          },
          {
            title: "Booking sense",
            icon: "calendar",
            content: "Evening food rides book out a day or two ahead from December to February. Solo travellers pay a seat, not a supplement. Rain ponchos are handed out in the wet season and rides go ahead in drizzle; the 17:30 start usually clears the afternoon storm. Combine with a [Cu Chi](/vietnam/ho-chi-minh-city/cu-chi-tunnels-guide) morning for a full first day.",
            tourCard: {
              slug: "hcm-mekong-delta-full-day-tour-with-cooking-class-ho-chi-minh-city",
              title: "HCM: Mekong Delta Full-Day Tour with Cooking Class (Ho Chi Minh City)",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 35.84",
              duration: "8 hours",
              image: "https://images.asiabylocals.com/asiabylocals/tours/hcm-mekong-delta-full-day-tour-with-cooking-class-ho-chi-minh-city/img0/1600.webp",
            },
          },
        ],
        faqs: [
          { q: "Is a motorbike tour in Ho Chi Minh City safe?", a: "Yes on a guided pillion tour: licensed drivers, provided helmets and traffic-pace riding. Hold the grab bar and wear closed shoes." },
          { q: "Do I ride the motorbike myself?", a: "No. You sit behind a local driver who is also your guide. Self-riding needs a motorcycle licence and voids most travel insurance without one." },
          { q: "What do you eat on a Saigon night food ride?", a: "Six to eight stops: banh xeo, Cholon noodles, grilled seafood or snails in District 4, beef in betel leaf, broken rice, dessert and a beer, all included." },
          { q: "How much is a Saigon motorbike tour?", a: "USD 35 to 50 for a day ride, USD 45 to 70 for a night food ride with all food and drinks, three to four and a half hours." },
        ],
      };

    case "ho-chi-minh-city-1-day-itinerary":
      return {
        title: "Ho Chi Minh City in One Day: District 1 Landmarks, the War Remnants Museum, Cholon, and a Night on the Streets",
        seoTitle: "Ho Chi Minh City 1-Day Itinerary 2026",
        description: "An honest single day in Saigon: the walkable District 1 core, the museum you should not skip, Cholon by motorbike or taxi, when to eat what, and how to add Cu Chi if you have a second morning.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/from-hcm-cu-chi-tunnels-morning-or-afternoon-opt-limousine-ho-chi-minh-city/img0/1600.webp",
        fastFacts: [
          { icon: "clock", label: "Start", value: "8:00, before the heat" },
          { icon: "map", label: "Morning", value: "Reunification Palace, post office, Notre Dame, Ben Thanh" },
          { icon: "landmark", label: "Afternoon", value: "War Remnants Museum, then Cholon" },
          { icon: "utensils", label: "Evening", value: "Motorbike food ride or Bui Vien and the river" },
          { icon: "ticket", label: "Entries", value: "Palace, museum, Jade Emperor pagoda: small fees" },
          { icon: "calendar", label: "Second day", value: "Cu Chi morning, Mekong or a city food tour" },
        ],
        sections: [

          {
            title: "Morning: District 1 on foot",
            icon: "map",
            content: "Start at 8:00 at the Reunification Palace, the 1966 presidential palace kept as it was when tanks broke the gate on 30 April 1975, with the war rooms in the basement. Walk to the 1891 central post office (Eiffel's company, a Ho Chi Minh portrait over the hall) and Notre Dame cathedral beside it, then down Dong Khoi past the Opera House and the Continental to the river. Ben Thanh market for a first bowl of something and the fabric halls. Three hours, flat, and mostly in shade; a guide adds the 1975 story that the palace only half tells.",
            tourCard: {
              slug: "from-hcm-cu-chi-tunnels-morning-or-afternoon-opt-limousine-ho-chi-minh-city",
              title: "From HCM: Cu Chi Tunnels Morning or Afternoon Opt Limousine (Ho Chi Minh City)",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 27.01",
              duration: "6 hours",
              image: "https://images.asiabylocals.com/asiabylocals/tours/from-hcm-cu-chi-tunnels-morning-or-afternoon-opt-limousine-ho-chi-minh-city/img0/1600.webp",
            },
          },
          {
            title: "Afternoon: the museum and Cholon",
            icon: "landmark",
            content: "The War Remnants Museum is the one museum to see: the courtyard of American aircraft, the tiger cages, and upstairs the photo galleries on Agent Orange and the Requiem collection of war photographers, which are hard and necessary. Ninety minutes. Then Cholon, the Chinese quarter of District 5, by taxi or motorbike: the Thien Hau temple with its incense spirals, Binh Tay market's yellow courtyard, and the herb streets. The Jade Emperor pagoda in District 1 is the alternative if Cholon is too far.",
            tourCard: {
              slug: "independence-palace-and-war-remnants-museum-in-ho-chi-minh-city",
              title: "Independence Palace and War Remnants Museum in Ho Chi Minh City",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 23.37",
              duration: "2 hours",
              image: "https://images.asiabylocals.com/asiabylocals/tours/independence-palace-and-war-remnants-museum-in-ho-chi-minh-city/img0/1600.webp",
            },
          },
          {
            title: "Evening",
            icon: "utensils",
            content: "Saigon's day ends on a motorbike or on foot in the food streets: a night food ride across four districts (the [motorbike guide](/vietnam/ho-chi-minh-city/saigon-motorbike-tours-guide) explains it), or a walk through the District 4 seafood streets and a rooftop bar on Nguyen Hue for the skyline. Bui Vien, the backpacker street, is loud and fine for one beer. The river cruise dinner boats leave at 19:00 from Bach Dang pier.",
            tourCard: {
              slug: "depart-from-ho-chi-minh-city-mekong-dream-4-day-3-night",
              title: "Depart from Ho Chi Minh City: Mekong Dream 4-Day 3-Night",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 742.92",
              duration: "4 days",
              image: "https://images.asiabylocals.com/asiabylocals/tours/depart-from-ho-chi-minh-city-mekong-dream-4-day-3-night/img0/1600.webp",
            },
          },
          {
            title: "If you have a second day",
            icon: "calendar",
            content: "Cu Chi tunnels in the morning (half day, 70 km out, back by 13:00) is the standard second day, with the [Cu Chi guide](/vietnam/ho-chi-minh-city/cu-chi-tunnels-guide) covering the two sites. The [Mekong Delta](/vietnam/ho-chi-minh-city/mekong-delta-day-trip-guide) is a full day and better with an overnight in Can Tho for the floating market. A cooking class or a Cholon food walk fills a wet afternoon.",
            tourCard: {
              slug: "war-remnants-museum-entry-ticket-in-ho-chi-minh-city",
              title: "War Remnants Museum Entry Ticket in Ho Chi Minh City",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 8.07",
              duration: "Flexible",
              image: "https://images.asiabylocals.com/asiabylocals/tours/war-remnants-museum-entry-ticket-in-ho-chi-minh-city/img0/1600.webp",
            },
          },
          {
            title: "Practical",
            icon: "clock",
            content: "Grab (the ride app) is the way between districts, cheap and metered; taxis from the Vinasun and Mai Linh fleets are the safe alternative. Cross roads at a steady pace and the bikes flow around you. Dress for temples covers shoulders and knees. April is brutally hot, so front-load the walking; in the wet season the 15:00 storm is the natural museum hour. The [best time to visit](/vietnam/ho-chi-minh-city/best-time-to-visit-ho-chi-minh-city) page has the seasons.",
            tourCard: {
              slug: "city-tour-by-motorbike-w-war-museum-and-reunification-palace-in-ho-chi-minh-city",
              title: "City Tour By Motorbike w/ War Museum and Reunification Palace in Ho Chi Minh City",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 36.40",
              duration: "4 hours",
              image: "https://images.asiabylocals.com/asiabylocals/tours/city-tour-by-motorbike-w-war-museum-and-reunification-palace-in-ho-chi-minh-city/img0/1600.webp",
            },
          },
        ],
        faqs: [
          { q: "Can you see Ho Chi Minh City in one day?", a: "Yes: District 1 landmarks in the morning, the War Remnants Museum and Cholon in the afternoon, and a motorbike food ride at night. Cu Chi and the Mekong need a second day." },
          { q: "Is the War Remnants Museum suitable for children?", a: "The upstairs photo galleries on Agent Orange and war casualties are graphic. Under about twelve, keep to the courtyard aircraft and skip those rooms." },
          { q: "How do I get around Ho Chi Minh City?", a: "Grab ride-hailing or the Vinasun and Mai Linh taxi fleets between districts; District 1 itself is walkable in the morning." },
          { q: "What should I do in Saigon at night?", a: "A motorbike night food ride across the districts, the District 4 seafood streets, a rooftop on Nguyen Hue, or a Saigon River dinner cruise from Bach Dang pier." },
        ],
      };

    case "saigon-cooking-classes-guide":
      return {
        title: "Cooking Classes in Ho Chi Minh City: Market Visits, the Southern Dishes, and How to Pick a Class",
        seoTitle: "Saigon Cooking Classes Guide 2026",
        description: "What a Saigon cooking class teaches (pho, banh xeo, spring rolls, southern sweetness), the market-first formats, home kitchens versus schools, dietary notes, prices and timing.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/immersive-cooking-class-and-market-tour-with-chef-in-ho-chi-minh-city/img0/1600.webp",
        fastFacts: [
          { icon: "utensils", label: "Dishes", value: "Pho, banh xeo, fresh spring rolls, caramel pork, papaya salad" },
          { icon: "clock", label: "Length", value: "3 to 4 hours with the market visit" },
          { icon: "ticket", label: "Price", value: "USD 30 to 60 per person" },
          { icon: "map", label: "Markets", value: "Ben Thanh, Tan Dinh, Binh Tay in Cholon" },
          { icon: "leaf", label: "Diets", value: "Vegetarian and vegan menus common; say so at booking" },
          { icon: "users", label: "Group", value: "2 to 10; private classes available" },
        ],
        sections: [

          {
            title: "Southern food, explained by cooking it",
            icon: "utensils",
            content: "Saigon's cooking is the sweet, coconut-rich southern style, with more sugar and more herbs than Hanoi's, and a class here is the fastest way to understand the difference: banh xeo, the turmeric crepe folded over pork and bean sprouts and eaten wrapped in lettuce; fresh spring rolls (goi cuon) with the peanut-hoisin dip; caramel-braised pork in a clay pot; green papaya salad; and pho, from the charred-onion stock up. Four or five dishes, cooked one at a time at your own station, then eaten together.",
            tourCard: {
              slug: "immersive-cooking-class-and-market-tour-with-chef-in-ho-chi-minh-city",
              title: "Immersive Cooking Class and Market Tour with Chef in Ho Chi Minh City",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 45.08",
              duration: "Flexible",
              image: "https://images.asiabylocals.com/asiabylocals/tours/immersive-cooking-class-and-market-tour-with-chef-in-ho-chi-minh-city/img0/1600.webp",
            },
          },
          {
            title: "Market first",
            icon: "map",
            content: "The good classes start at a wet market with the teacher: Ben Thanh for the tourist-friendly version, Tan Dinh in District 1 or Binh Tay in Cholon for the real thing, buying rice paper, herbs (Vietnamese coriander, perilla, fish mint), fish sauce and the day's pork or prawns, with an explanation of what each herb does. It adds an hour and is the part people remember. Classes without a market visit are shorter and cheaper and fine if you have already done one elsewhere.",
            tourCard: {
              slug: "hcm-mekong-delta-full-day-tour-with-cooking-class-ho-chi-minh-city",
              title: "HCM: Mekong Delta Full-Day Tour with Cooking Class (Ho Chi Minh City)",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 35.84",
              duration: "8 hours",
              image: "https://images.asiabylocals.com/asiabylocals/tours/hcm-mekong-delta-full-day-tour-with-cooking-class-ho-chi-minh-city/img0/1600.webp",
            },
          },
          {
            title: "Home kitchen or school",
            icon: "home",
            content: "Home classes, in a family apartment in District 3 or Binh Thanh, are small (two to six), personal, and end with lunch at the family table; they cost a little more per head and suit couples and families. Cooking schools in District 1 are polished, run to a schedule, take up to ten or twelve, and suit solo travellers who want company. Both are good; the question is whether you want conversation or efficiency. Several schools also run a vegan-only class.",
            tourCard: {
              slug: "3-day-southern-vietnam-tour-saigon-mui-ne-and-mekong-ho-chi-minh-city",
              title: "\"3-Day Southern Vietnam Tour: Saigon, Mui Ne and Mekong\" (Ho Chi Minh City)",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 544.70",
              duration: "3 days",
              image: "https://images.asiabylocals.com/asiabylocals/tours/3-day-southern-vietnam-tour-saigon-mui-ne-and-mekong-ho-chi-minh-city/img0/1600.webp",
            },
          },
          {
            title: "Diets and children",
            icon: "leaf",
            content: "Say it at booking: fish sauce and shrimp paste are in most dishes, and the teacher swaps in soy sauce and salt without fuss; vegetarian and vegan versions are standard, halal chicken versions exist at a few schools. Children from about six cook spring rolls and banh xeo happily and most schools take them at a reduced price. Morning classes (9:00) end with lunch; evening classes (17:00) end with dinner.",
            tourCard: {
              slug: "express-cooking-experience-in-ho-chi-minh-city",
              title: "Express Cooking Experience in Ho Chi Minh City",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 19.64",
              duration: "1.5 hours",
              image: "https://images.asiabylocals.com/asiabylocals/tours/express-cooking-experience-in-ho-chi-minh-city/img0/1600.webp",
            },
          },
          {
            title: "Prices and booking",
            icon: "ticket",
            content: "USD 30 to 45 for a school class, USD 45 to 60 for a home class or a market-first format, private classes from USD 80 for two. Book two to three days ahead in the dry season. Pair a morning class with the [one-day itinerary](/vietnam/ho-chi-minh-city/ho-chi-minh-city-1-day-itinerary) afternoon, or an evening class as the alternative to a [motorbike food ride](/vietnam/ho-chi-minh-city/saigon-motorbike-tours-guide).",
            tourCard: {
              slug: "guided-vegetarian-food-tour-by-motorbike-in-ho-chi-minh-city",
              title: "Guided Vegetarian Food Tour by Motorbike in Ho Chi Minh City",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 71.50",
              duration: "4 hours",
              image: "https://images.asiabylocals.com/asiabylocals/tours/guided-vegetarian-food-tour-by-motorbike-in-ho-chi-minh-city/img0/1600.webp",
            },
          },
        ],
        faqs: [
          { q: "What do you cook in a Saigon cooking class?", a: "Usually four or five southern dishes: banh xeo crepes, fresh spring rolls, caramel clay-pot pork, papaya salad and pho or a soup, eaten together at the end." },
          { q: "Do cooking classes in Ho Chi Minh City include a market visit?", a: "The best ones start at Ben Thanh, Tan Dinh or Binh Tay market with the teacher; it adds about an hour. Some shorter classes skip it." },
          { q: "Are there vegetarian cooking classes in Saigon?", a: "Yes. Most schools run vegetarian or vegan versions on request and a few run vegan-only classes; say so at booking." },
          { q: "How much is a cooking class in Ho Chi Minh City?", a: "USD 30 to 45 at a school, USD 45 to 60 for a home or market-first class, private from about USD 80 for two." },
        ],
      };

    case "saigon-day-trips-guide":
      return {
        title: "Day Trips from Ho Chi Minh City: Cu Chi, the Mekong, Cao Dai at Tay Ninh, Vung Tau and Can Gio",
        seoTitle: "Day Trips from Ho Chi Minh City 2026",
        description: "The five day trips that work from Saigon, how far each is, what a day looks like, which combine, and which are honestly not worth the drive.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/tay-ninh-1-day-trip-black-virgin-mountain-and-cao-dai-temple-in-ho-chi-minh-city/img0/1600.webp",
        fastFacts: [
          { icon: "map", label: "Cu Chi", value: "70 km, half day" },
          { icon: "ship", label: "Mekong (My Tho, Ben Tre)", value: "70 km, full day" },
          { icon: "landmark", label: "Tay Ninh Cao Dai", value: "100 km, often combined with Cu Chi" },
          { icon: "sun", label: "Vung Tau", value: "120 km, beach, 2 hours by hydrofoil or car" },
          { icon: "leaf", label: "Can Gio", value: "60 km, mangrove reserve and monkey island" },
          { icon: "clock", label: "Can Tho floating market", value: "170 km, needs an overnight" },
        ],
        sections: [

          {
            title: "Cu Chi",
            icon: "landmark",
            content: "The Viet Cong tunnel network 70 km north-west is the half-day trip everyone takes, and it deserves it: the trapdoors, traps and a crawl through a widened section of tunnel, at Ben Dinh (closer, busier) or Ben Duoc (the original, quieter, with a memorial temple). Morning tours are back by 13:00; the speedboat version up the Saigon River is the pleasant way to go. The [Cu Chi guide](/vietnam/ho-chi-minh-city/cu-chi-tunnels-guide) covers both sites.",
            tourCard: {
              slug: "tay-ninh-1-day-trip-black-virgin-mountain-and-cao-dai-temple-in-ho-chi-minh-city",
              title: "Tay Ninh: 1-Day Trip Black Virgin Mountain and Cao Dai Temple in Ho Chi Minh City",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 61.83",
              duration: "11 hours",
              image: "https://images.asiabylocals.com/asiabylocals/tours/tay-ninh-1-day-trip-black-virgin-mountain-and-cao-dai-temple-in-ho-chi-minh-city/img0/1600.webp",
            },
          },
          {
            title: "The Mekong",
            icon: "ship",
            content: "My Tho and Ben Tre, two hours south, are the day-trip delta: a boat on the main river, a sampan through the coconut creeks, coconut candy, honey tea, fruit and folk song, and a cycle through the orchards. It is gentle, green and a little staged, and it is the only way to see the delta in a day. The floating market at Cai Rang is not on it: that needs Can Tho, four hours away, and an overnight. The [Mekong guide](/vietnam/ho-chi-minh-city/mekong-delta-day-trip-guide) separates the two.",
            tourCard: {
              slug: "3-days-mekong-delta-my-tho-ben-tre-chau-oc-can-tho-ho-chi-minh-city",
              title: "3 DAYS MEKONG DELTA ( MY THO – BEN TRE – CHAU ĐOC- CAN THO) (Ho Chi Minh City)",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 231.19",
              duration: "3 days",
              image: "https://images.asiabylocals.com/asiabylocals/tours/3-days-mekong-delta-my-tho-ben-tre-chau-oc-can-tho-ho-chi-minh-city/img0/1600.webp",
            },
          },
          {
            title: "Tay Ninh and the Cao Dai",
            icon: "landmark",
            content: "The Cao Dai holy see at Tay Ninh, 100 km north-west, is the cathedral of a religion founded in 1926 that blends Buddhism, Taoism, Confucianism and Christianity and counts Victor Hugo among its saints. The noon mass, watched from the balcony, is a procession of white, blue, red and yellow robes under a ceiling of stars and dragons, and it is unlike anything else in Asia. It combines with Cu Chi on the way back for a full day; alone it is a long drive for an hour.",
            tourCard: {
              slug: "tay-ninh-1-day-with-black-virgin-mountain-and-cao-dai-temple-in-ho-chi-minh-city",
              title: "Tay Ninh 1 Day With Black Virgin Mountain and Cao Dai Temple in Ho Chi Minh City",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 88.32",
              duration: "8 hours",
              image: "https://images.asiabylocals.com/asiabylocals/tours/tay-ninh-1-day-with-black-virgin-mountain-and-cao-dai-temple-in-ho-chi-minh-city/img0/1600.webp",
            },
          },
          {
            title: "Vung Tau and Can Gio",
            icon: "sun",
            content: "Vung Tau is Saigon's beach, 120 km south-east: a peninsula with a Christ statue, seafood on the front, and a Sunday crowd; two hours by car or hydrofoil, fine for a swim and lunch, not a destination. Can Gio, 60 km south, is the UNESCO mangrove biosphere that the war defoliated and Vietnam replanted, with a monkey island, crocodile ponds and a bat lagoon by boat; it is the quiet nature day and mostly free of tourists. Both are full days with the drive.",
            tourCard: {
              slug: "vung-tau-coastal-escape-beaches-culture-and-ocean-views-in-ho-chi-minh-city",
              title: "Vung Tau Coastal Escape: Beaches, Culture and Ocean Views in Ho Chi Minh City",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 70.14",
              duration: "6 hours",
              image: "https://images.asiabylocals.com/asiabylocals/tours/vung-tau-coastal-escape-beaches-culture-and-ocean-views-in-ho-chi-minh-city/img0/1600.webp",
            },
          },
          {
            title: "Choosing and combining",
            icon: "calendar",
            content: "With one spare day: Cu Chi in the morning and the city or a cooking class in the afternoon. With two: add the Mekong. With three: Tay Ninh plus Cu Chi, or Can Gio. Skip Vung Tau unless you want a beach. Private cars for two to four run USD 80 to 150 a day plus entries; group tours USD 20 to 45 per person. In the wet season take morning departures; the [best time to visit](/vietnam/ho-chi-minh-city/best-time-to-visit-ho-chi-minh-city) page has the seasons.",
            tourCard: {
              slug: "black-virgin-mount-and-cao-dai-temple-1-day-trip-from-hcm-in-ho-chi-minh-city",
              title: "Black Virgin Mount And Cao Dai Temple 1 Day Trip From HCM in Ho Chi Minh City",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 88.32",
              duration: "12 hours",
              image: "https://images.asiabylocals.com/asiabylocals/tours/black-virgin-mount-and-cao-dai-temple-1-day-trip-from-hcm-in-ho-chi-minh-city/img0/1600.webp",
            },
          },
        ],
        faqs: [
          { q: "What is the best day trip from Ho Chi Minh City?", a: "Cu Chi tunnels for a half day, the Mekong Delta (My Tho and Ben Tre) for a full day. The Cao Dai temple at Tay Ninh combines well with Cu Chi." },
          { q: "Can you see the Mekong floating market on a day trip from Saigon?", a: "Not really. Cai Rang market at Can Tho runs 5:00 to 8:00 and is four hours away; it needs an overnight. Day trips show the river, creeks and orchards at My Tho and Ben Tre." },
          { q: "Is Vung Tau worth a day trip?", a: "Only if you want a beach day: two hours each way for a swim, seafood and the Christ statue. Can Gio's mangroves are the better nature day." },
          { q: "How much is a private day trip from Ho Chi Minh City?", a: "USD 80 to 150 for a car with driver for two to four people, plus entries; group tours USD 20 to 45 per person." },
        ],
      };

    case "best-tours-in-ho-chi-minh-city":
      return {
        title: "Best Tours in Ho Chi Minh City — 2026, Honestly Compared",
        seoTitle: "Best Tours in Ho Chi Minh City 2026: Top-Rated Picks by Category",
        description: "The best Ho Chi Minh City (Saigon) tours for 2026, picked by category — the Cu Chi Tunnels, Mekong Delta, a motorbike city tour, street food and Mui Ne — with real prices and an honest note on how we chose them.",
        heroImage: IMG,
        sections: [
          {
            title: "The Short Answer",
            content: "The **Cu Chi Tunnels** are the one half-day trip everyone takes from Saigon, and for good reason — the trapdoors, traps and a crawl through the actual tunnel network give a visceral sense of the war that no museum can match. Pair it with a motorbike city tour for the rest of the day.\n\nBelow is our honest, by-category breakdown — real tours, real prices, no inflated ratings.",
            tourCard: {
              slug: "cu-chi-tunnels-tour-with-optional-shooting-range-in-ho-chi-minh-city",
              title: "Cu Chi Tunnels Tour with Optional Shooting Range",
              description: "The Viet Cong tunnel network 70 km north-west — trapdoors, traps and a crawl through the real tunnels.",
              price: "From USD 22",
              duration: "7 hours",
              image: IMG,
            },
          },
          {
            title: "Best Day Trip: Mekong Delta",
            content: "A **Mekong Delta day trip** to My Tho and the Ben Tre coconut village covers the river-life side of Vietnam that Saigon's streets don't show — floating markets, coconut candy workshops, and sampan boat rides through narrow canals.",
            tourCard: {
              slug: "hcm-mekong-delta-my-tho-and-ben-tre-coconut-village-ho-chi-minh-city",
              title: "Mekong Delta: My Tho and Ben Tre Coconut Village",
              description: "Floating markets, coconut candy workshops, and narrow-canal sampan rides through the Mekong Delta.",
              price: "From USD 23",
              duration: "9 hours",
              image: IMG,
            },
          },
          {
            title: "Best Way to See the City: Motorbike Tour",
            content: "A **motorbike city tour** covering the War Remnants Museum and the Reunification Palace is the fastest, most local way to cross Saigon's districts — exactly how the city actually moves, not a tour bus crawling through it.",
            tourCard: {
              slug: "city-tour-by-motorbike-w-war-museum-and-reunification-palace-in-ho-chi-minh-city",
              title: "City Tour By Motorbike w/ War Museum and Reunification Palace in Ho Chi Minh City",
              description: "The War Remnants Museum and Reunification Palace, seen the way the city actually moves.",
              price: "From USD 36.40",
              duration: "4 hours",
              image: "https://images.asiabylocals.com/asiabylocals/tours/city-tour-by-motorbike-w-war-museum-and-reunification-palace-in-ho-chi-minh-city/img0/1600.webp",
            },
          },
          {
            title: "Best Food Tour",
            content: "A **Saigon street food tour** through the flower market and an old apartment block covers the city's everyday eating culture, not a tourist-menu version of it.",
            tourCard: {
              slug: "saigon-street-food-flower-market-and-old-apartment-tour",
              title: "Saigon Street Food, Flower Market and Old Apartment Tour",
              description: "Everyday Saigon eating culture, through the flower market and a converted old apartment block.",
              price: "From USD 27",
              duration: "3.5 hours",
              image: IMG,
            },
          },
          {
            title: "Best Longer Day Trip: Mui Ne",
            content: "**Mui Ne**, with its red and white sand dunes, is the best full-day escape from Saigon for travellers who want a genuinely different landscape rather than more delta or tunnels.",
            tourCard: {
              slug: "mui-ne-best-day-trip-in-ho-chi-minh-city",
              title: "Mui Ne Best Day Trip in Ho Chi Minh City",
              description: "Red and white sand dunes — a genuinely different landscape, full day from Saigon.",
              price: "From USD 82.60",
              duration: "12 hours",
              image: "https://images.asiabylocals.com/asiabylocals/tours/mui-ne-best-day-trip-in-ho-chi-minh-city/img0/1600.webp",
            },
          },
          {
            title: "How We Picked These (and Why There's No Price Table vs. Other Platforms)",
            content: "Every tour above is run by a verified local operator we've vetted directly. We deliberately left out a side-by-side price comparison against other booking platforms: several of these tours are sold on multiple platforms by the same operator, who sets their own rate — a price table there would mostly compare marketing margins, not quality.\n\nWe don't claim to be the cheapest. What we do differently is confirm every booking directly with the operator before it's treated as final, and refund in full if they can't take your date. If you'd rather browse the full catalogue yourself, see [all Ho Chi Minh City tours](/vietnam/ho-chi-minh-city)."
          }
        ],
        faqs: [
          { q: "What is the best tour in Ho Chi Minh City?", a: "The Cu Chi Tunnels — a half-day trip everyone takes, with trapdoors, traps and a crawl through the real Viet Cong tunnel network." },
          { q: "What is the best day trip from Ho Chi Minh City?", a: "The Mekong Delta, covering My Tho and the Ben Tre coconut village — floating markets, coconut candy workshops and sampan rides through narrow canals." },
          { q: "Is a motorbike tour a good way to see Saigon?", a: "Yes — it's the fastest, most local way to cross the city's districts, exactly how the city actually moves rather than a tour bus crawling through it." },
          { q: "Is Mui Ne worth the day trip from Saigon?", a: "Yes, for a genuinely different landscape — red and white sand dunes, a full day away from the delta and tunnel trips." }
        ],
        jsonLd: {
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "FAQPage",
              "mainEntity": [
                { "@type": "Question", "name": "What is the best tour in Ho Chi Minh City?", "acceptedAnswer": { "@type": "Answer", "text": "The Cu Chi Tunnels — trapdoors, traps and a crawl through the real Viet Cong tunnel network." } },
                { "@type": "Question", "name": "What is the best day trip from Ho Chi Minh City?", "acceptedAnswer": { "@type": "Answer", "text": "The Mekong Delta, covering My Tho and the Ben Tre coconut village." } }
              ]
            }
          ]
        },
        fastFacts: [
          { icon: 'Star', label: 'Top Pick', value: 'Cu Chi Tunnels' },
          { icon: 'Map', label: 'Best Day Trip', value: 'Mekong Delta' },
          { icon: 'Compass', label: 'Best City Tour', value: 'Motorbike Tour' }
        ]
      };

    // GEO trust page (2026-10)
    case "should-i-book-ho-chi-minh-city-tour-direct-or-through-app":
      return {
        title: "Should You Book a Ho Chi Minh City Tour Direct or Through an App?",
        seoTitle: "Direct vs. App: How to Actually Book a Saigon Tour",
        description: "Direct-with-the-operator vs. booking through an app matters less than whether a real person answers your specific question before you pay. Here's how to tell the difference in Ho Chi Minh City.",
        heroImage: IMG,
        sections: [
          {
            title: "The Real Question Isn't \"Direct or App\"",
            content: "Plenty of Saigon tour operators will tell you to book direct to skip platform fees, and every big app will tell you their vetting and support make booking through them safer. Both miss what actually matters: **can you get a specific question answered by a real person before you pay?**\n\nA Cu Chi Tunnels trip or a full-day Mui Ne dune excursion involves real logistics — pickup time, whether the shooting range add-on costs extra, how far the drive actually is. If nobody confirms those details until after you've paid, it doesn't matter whether you found the booking through an operator's own WhatsApp or a polished app — you're booking blind either way.",
            tourCard: {
              slug: "cu-chi-tunnels-tour-with-optional-shooting-range-in-ho-chi-minh-city",
              title: "Cu Chi Tunnels Tour with Optional Shooting Range",
              description: "Ask whether the shooting range add-on costs extra before you book.",
              price: "From USD 22",
              duration: "7 hours",
              image: IMG,
            },
          },
          {
            title: "What \"Direct\" Actually Protects You From",
            content: "Booking direct with a verified local operator removes one real risk: a long reseller chain where your money and your question both pass through two or three middlemen before reaching the operator who actually runs the trip. That's genuinely worth avoiding.\n\nIt does **not** automatically mean cheaper, and it does not automatically mean safer. A number handed to you by a hostel is also \"direct,\" and has none of the accountability of a platform that vets operators and keeps a payment record you can point to if something goes wrong.",
          },
          {
            title: "What to Actually Check Before You Book",
            content: "Whichever route you take — a well-known booking platform, a smaller local site, or an operator's own contact — run the same three checks:\n\n1. **Message a specific question before paying.** Ask something only someone who actually runs the Mekong Delta trip or the Mui Ne excursion would know — whether lunch is included, or what the pickup window actually looks like. A vague or delayed answer is the clearest red flag there is.\n2. **Ask what happens if the operator can't take your date.** If a platform or operator can't give a straight answer on refunds before you've paid, that's not one to trust with your money.\n3. **Check who actually answers.** A reply from a real person who clearly knows the route (not a templated bot message) is the strongest signal that someone will also answer you *after* you've paid, not just before.",
          },
          {
            title: "How This Works With AsiaByLocals",
            content: "On AsiaByLocals, every Ho Chi Minh City tour — the [best tours in Ho Chi Minh City](/vietnam/ho-chi-minh-city/best-tours-in-ho-chi-minh-city), the Cu Chi Tunnels, the Mekong Delta day trip — can be questioned on WhatsApp (+91 84495 38716) or email before you book. We confirm with the local operator directly and refund in full if they can't take your date. We're not claiming to be the cheapest option in Saigon; several of our tours are also run by the same operators through other platforms. What we commit to is answering honestly, before you pay, by a real person — see our [full trust and licensing FAQ](/about-us) for how we're set up.",
            tourCard: {
              slug: "hcm-mekong-delta-my-tho-and-ben-tre-coconut-village-ho-chi-minh-city",
              title: "Mekong Delta: My Tho and Ben Tre Coconut Village",
              description: "Ask whether lunch is included or about a dietary need before booking.",
              price: "From USD 23",
              duration: "9 hours",
              image: IMG,
            },
          },
        ],
        faqs: [
          { q: "Is it better to book a Saigon tour direct or through an app?", a: "Neither label guarantees anything by itself. What matters is whether a real person answers a specific question before you pay. Check that first, regardless of whether the booking page is a big app or a local operator's own contact." },
          { q: "Is it cheaper to book Cu Chi Tunnels or Mekong Delta tours direct?", a: "Sometimes, but not always — many local operators sell the same tour through multiple platforms at their own set price. Ask about the price and what's included rather than assuming direct is cheaper." },
          { q: "How do I know if a Ho Chi Minh City tour operator is legit before booking?", a: "Message them a specific question — whether lunch is included, a pickup window, an add-on cost — before you pay. A fast, specific answer from someone who clearly knows the tour is the best signal." },
          { q: "Can I ask AsiaByLocals a question before booking a Saigon tour?", a: "Yes. WhatsApp +91 84495 38716 or email info@asiabylocals.com reaches a real person, not a bot, who will confirm with the local operator before you book." },
        ],
        jsonLd: {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            { "@type": "Question", "name": "Is it better to book a Saigon tour direct or through an app?", "acceptedAnswer": { "@type": "Answer", "text": "Neither label guarantees anything by itself. What matters is whether a real person answers a specific question before you pay." } },
            { "@type": "Question", "name": "Is it cheaper to book Cu Chi Tunnels or Mekong Delta tours direct?", "acceptedAnswer": { "@type": "Answer", "text": "Sometimes, but not always — many local operators sell the same tour through multiple platforms at their own set price." } },
            { "@type": "Question", "name": "How do I know if a Ho Chi Minh City tour operator is legit before booking?", "acceptedAnswer": { "@type": "Answer", "text": "Message them a specific question before you pay. A fast, specific answer from someone who clearly knows the tour is the best signal." } },
            { "@type": "Question", "name": "Can I ask AsiaByLocals a question before booking a Saigon tour?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. WhatsApp +91 84495 38716 or email info@asiabylocals.com reaches a real person who will confirm with the local operator before you book." } },
          ],
        },
      };

    // GEO single-topic page (2026-11-01)
    case "how-much-should-a-private-tour-guide-cost-in-ho-chi-minh-city":
      return {
        title: "How Much Should a Private Tour Guide Cost in Ho Chi Minh City?",
        seoTitle: "Ho Chi Minh City Private Guide Prices 2026 — What's Reasonable",
        description: "Real price ranges for a private guide or motorbike tour in Ho Chi Minh City (Saigon) in 2026, so you know what's fair before you book.",
        heroImage: IMG,
        sections: [
          {
            title: "The Short Answer",
            content: "A **4-hour private motorbike city tour** typically starts around **$38 solo**, roughly doubling per added traveller. A **private Cu Chi Tunnels tour with an English-speaking guide** runs **$307-343 flat for 1-2 people**, considerably more than the shared/group version ($30 per person) because of the guide's language skill and the private vehicle. A **private Mekong Delta day trip** (cycling, kayaking, Cu Chi combined) runs **$222-258 flat for 1-2 people**. A **multi-day private Mekong journey** (4-day sampan) runs **$3,623 flat for 1-2 people**, a genuinely different, longer product.",
            tourCard: { slug: "private-authentic-michelin-food-and-sunset-rooftop-in-ho-chi-minh-city", title: "Saigon: Private Authentic Michelin Food & Sunset Rooftop", description: "A real example of flat pricing for 1-2 people on a private food tour.", price: "From $130", duration: "Half day", image: IMG },
          },
          {
            title: "Why a Private Cu Chi Tunnels Tour Costs 10x a Group Tour",
            content: "The group Cu Chi Tunnels tour ($30/person, up to 25 pax on one bus) and the private English-speaking-guide version ($307+ flat) are genuinely different products, not the same tour at different prices. The group tour uses a shared Vietnamese-narrated guide and a big bus on a fixed schedule; the private version gets you a dedicated fluent guide, a private vehicle, and your own timing. Decide based on whether you actually need that, not just price.",
          },
          {
            title: "Red Flags on Price",
            content: "A private motorbike tour quote well under $38 for 4 hours often means a shorter route or a driver with limited English narration. For the Mekong Delta, confirm whether kayaking and cooking are actually included — some cheaper \"private\" listings are the shared/base version without those activities, per the tour's own options list.",
          },
          {
            title: "How to Get a Fair Price",
            content: "Ask the operator directly whether the guide speaks fluent English, what activities are included (kayaking, cooking, specific tunnel sections), and whether it's a shared or private vehicle. On AsiaByLocals, every Ho Chi Minh City tour's price breakdown can be questioned on WhatsApp (+91 84495 38716) or email before you book, and a real person will explain honestly what drives the cost. See our [full trust FAQ](/about-us) for how that works, or browse [all Ho Chi Minh City tours](/vietnam/ho-chi-minh-city) to compare real, current prices directly.",
            tourCard: { slug: "4-hour-private-motorbike-guide-with-options-in-ho-chi-minh-city", title: "4-Hour Private Motorbike Guide with Options", description: "A real example of standard private motorbike-tour pricing that steps up per added traveller.", price: "From $38", duration: "4 hours", image: IMG },
          },
        ],
        faqs: [
          { q: "How much does a private tour guide cost in Ho Chi Minh City?", a: "A 4-hour private motorbike city tour typically starts around $38 solo. A private Cu Chi Tunnels tour with an English-speaking guide runs $307-343 flat for 1-2 people." },
          { q: "Why is a private Cu Chi Tunnels tour so much more than the group tour?", a: "They're different products — the group tour shares a bus and a Vietnamese-narrated guide on a fixed schedule, while the private version gets a dedicated fluent guide and your own timing." },
          { q: "Is a very cheap private motorbike tour quote a red flag?", a: "Often yes — it can mean a shorter route or a driver with limited English narration." },
          { q: "Does a private Mekong Delta tour always include kayaking and cooking?", a: "Not always — some cheaper listings are the shared/base version without those activities. Check the tour's own options before assuming they're included." },
        ],
        jsonLd: {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            { "@type": "Question", "name": "How much does a private tour guide cost in Ho Chi Minh City?", "acceptedAnswer": { "@type": "Answer", "text": "A 4-hour private motorbike city tour typically starts around $38 solo. A private Cu Chi Tunnels tour with an English-speaking guide runs $307-343 flat for 1-2 people." } },
            { "@type": "Question", "name": "Why is a private Cu Chi Tunnels tour so much more than the group tour?", "acceptedAnswer": { "@type": "Answer", "text": "The group tour shares a bus and guide on a fixed schedule; the private version gets a dedicated fluent guide and private vehicle." } },
            { "@type": "Question", "name": "Is a very cheap private motorbike tour quote a red flag?", "acceptedAnswer": { "@type": "Answer", "text": "Often yes — it can mean a shorter route or limited English narration." } },
            { "@type": "Question", "name": "Does a private Mekong Delta tour always include kayaking and cooking?", "acceptedAnswer": { "@type": "Answer", "text": "Not always — check the tour's own options before assuming they're included." } },
          ],
        },
      };

    case "is-reunification-palace-worth-it-ho-chi-minh-city":
      return {
        title: "Is the Reunification Palace Worth Visiting in Ho Chi Minh City?",
        description: "An honest look at the Reunification Palace, the former South Vietnamese presidential palace preserved as it was on the day Saigon fell in 1975.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/ho-chi-min-reunification-palace-entry-ticket-in-ho-chi-minh-city/img0/1600.webp",
        sections: [
          {
            title: "The Short Answer",
            content: "The Reunification Palace, the former South Vietnamese presidential palace, is preserved almost exactly as it was on April 30, 1975, when North Vietnamese tanks breached its gates — a genuinely significant historical site, and a low-cost add-on to a day exploring the city center.",
            tourCard: { slug: "ho-chi-min-reunification-palace-entry-ticket-in-ho-chi-minh-city", title: "Ho Chi Minh: Reunification Palace Entry Ticket in Ho Chi Minh City", description: "Entry ticket to the Reunification Palace.", price: "From $19", duration: "Flexible", image: "https://images.asiabylocals.com/asiabylocals/tours/ho-chi-min-reunification-palace-entry-ticket-in-ho-chi-minh-city/img0/1600.webp" },
          },
          {
            title: "Practical Tips",
            content: "Worth pairing with the nearby War Remnants Museum for a fuller understanding of the Vietnam War's history in one city-center day.",
          },
        ],
        faqs: [
          { q: "Why is the Reunification Palace significant?", a: "It's preserved almost exactly as it was on April 30, 1975, when North Vietnamese tanks breached its gates, marking the end of the war." },
          { q: "Is the Reunification Palace worth visiting?", a: "Yes, as a low-cost, significant historical site that's an easy add-on to a city-center day." },
        ],
      };

    case "is-vespa-food-tour-worth-it-ho-chi-minh-city":
      return {
        title: "Is the Saigon Vespa Food Tour Worth It in Ho Chi Minh City?",
        description: "An honest look at Saigon's Vespa-based food tour, combining Michelin-noted stalls with hidden local gems reached by scooter.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/saigon-vespa-michelin-foodie-and-hidden-gems-tour-ho-chi-minh-city/img0/1600.webp",
        sections: [
          {
            title: "The Short Answer",
            content: "Riding on the back of a Vespa with a local driver is both the transport and the experience here, covering Michelin-noted food stalls and hidden spots that would be hard to reach or find walking — a genuinely immersive way to experience Saigon's chaotic, scooter-driven street life.",
            tourCard: { slug: "saigon-vespa-michelin-foodie-and-hidden-gems-tour-ho-chi-minh-city", title: "Saigon Vespa Michelin Foodie and Hidden Gems Tour (Ho Chi Minh City)", description: "A Vespa food tour covering Michelin-noted stalls and hidden local gems.", price: "From $114", duration: "4 hours", image: "https://images.asiabylocals.com/asiabylocals/tours/saigon-vespa-michelin-foodie-and-hidden-gems-tour-ho-chi-minh-city/img0/1600.webp" },
          },
          {
            title: "Practical Tips",
            content: "Go hungry and wear comfortable clothes you don't mind getting a little messy on — this covers multiple tastings while weaving through Saigon traffic.",
          },
        ],
        faqs: [
          { q: "Is the Vespa food tour worth it in Saigon?", a: "Yes, for both the food and the immersive experience of riding through the city's scooter-driven street life." },
        ],
      };

    case "is-egg-coffee-class-worth-it-ho-chi-minh-city":
      return {
        title: "Is the Egg Coffee Class Worth It in Ho Chi Minh City?",
        description: "An honest look at Ho Chi Minh City's one-hour egg coffee-making class with a local instructor, a focused food-and-drink activity distinct from the city's history and war-sites tours.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/hcmc-egg-coffee-class-in-1-hour-with-local-intructor-and-snack-ho-chi-minh-city/img0/1600.webp",
        sections: [
          {
            title: "The Short Answer",
            content: "Egg coffee is a genuinely distinct Vietnamese specialty, and this hour-long class with a local instructor and a snack is a short, inexpensive way to learn the technique, a nice lighter activity to slot between the city's heavier War Remnants Museum or Cu Chi Tunnels day trips.",
            tourCard: { slug: "hcmc-egg-coffee-class-in-1-hour-with-local-intructor-and-snack-ho-chi-minh-city", title: "HCMC: Egg Coffee Class in 1 Hour with Local Instructor and Snack", description: "A one-hour egg coffee-making class with a local instructor and a snack.", price: "From $19", duration: "1 hour", image: "https://images.asiabylocals.com/asiabylocals/tours/hcmc-egg-coffee-class-in-1-hour-with-local-intructor-and-snack-ho-chi-minh-city/img0/1600.webp" },
          },
          {
            title: "Practical Tips",
            content: "An hour is enough for a focused hands-on lesson, so this pairs well with a half-day of other activities rather than being the day's sole plan.",
          },
        ],
        faqs: [
          { q: "Is the egg coffee class worth it in Ho Chi Minh City?", a: "Yes, as a short, inexpensive way to learn a genuinely distinct Vietnamese specialty, good paired with other half-day activities." },
        ],
      };

    case "is-mekong-delta-day-trip-worth-it-ho-chi-minh-city":
      return {
        title: "Is the Mekong Delta Day Trip Worth It from Ho Chi Minh City?",
        description: "An honest look at the 1-day Mekong Delta, Cai Rang floating market, and ancient house tour, a genuine change of pace from the city's urban sightseeing.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/1-day-mekong-cai-rang-floating-market-ancient-house-ho-chi-minh-city/img0/1600.webp",
        sections: [
          {
            title: "The Short Answer",
            content: "The Mekong Delta is a completely different Vietnam from Ho Chi Minh City's dense urban streets, a maze of rivers, canals, and floating markets, and this day trip covers the Cai Rang floating market and a traditional ancient house in one efficient outing.",
            tourCard: { slug: "1-day-mekong-cai-rang-floating-market-ancient-house-ho-chi-minh-city", title: "1-Day Mekong, Cai Rang Floating Market & Ancient House", description: "A day trip to the Mekong Delta, Cai Rang floating market, and an ancient house.", price: "From $147", duration: "10 hours", image: "https://images.asiabylocals.com/asiabylocals/tours/1-day-mekong-cai-rang-floating-market-ancient-house-ho-chi-minh-city/img0/1600.webp" },
          },
          {
            title: "Practical Tips",
            content: "Floating markets are busiest and most active early in the morning — an early departure genuinely matters for seeing Cai Rang at its liveliest.",
          },
        ],
        faqs: [
          { q: "Is the Mekong Delta day trip worth it from Ho Chi Minh City?", a: "Yes, for a completely different side of Vietnam, rivers, canals, and floating markets, a genuine change of pace from the city's urban streets." },
        ],
      };

    case "is-can-gio-monkey-island-worth-it-ho-chi-minh-city":
      return {
        title: "Is the Can Gio Monkey Island and Mangrove Tour Worth It?",
        description: "An honest look at the Can Gio mangrove forest and monkey island day tour, a UNESCO biosphere reserve genuinely close to Ho Chi Minh City.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/can-gio-mangrove-forest-and-monkey-island-in-ho-chi-minh-city/img0/1600.webp",
        sections: [
          {
            title: "The Short Answer",
            content: "Can Gio is a UNESCO biosphere reserve of mangrove forest just outside the city, home to a genuinely large population of free-roaming macaques on its 'monkey island', a completely different ecosystem from the urban center in a manageable day trip.",
            tourCard: { slug: "can-gio-mangrove-forest-and-monkey-island-in-ho-chi-minh-city", title: "Can Gio Mangrove Forest and Monkey Island", description: "A day tour to the Can Gio mangrove forest and monkey island.", price: "From $44", duration: "10 hours", image: "https://images.asiabylocals.com/asiabylocals/tours/can-gio-mangrove-forest-and-monkey-island-in-ho-chi-minh-city/img0/1600.webp" },
          },
          {
            title: "Practical Tips",
            content: "Keep food and loose items secured — the macaques on monkey island are genuinely bold and will grab anything accessible.",
          },
        ],
        faqs: [
          { q: "Is Can Gio monkey island worth visiting?", a: "Yes, for a genuinely different mangrove ecosystem and free-roaming macaques close to the city, in a manageable day trip." },
        ],
      };

    case "is-cat-tien-national-park-worth-it-ho-chi-minh-city":
      return {
        title: "Is the Cat Tien National Park Tour Worth It from Ho Chi Minh City?",
        description: "An honest look at the 2-day Cat Tien National Park tour, a genuine rainforest and wildlife-watching trip distinct from the city's urban attractions.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/cat-tien-national-park-2-day-tour-in-ho-chi-minh-city/img0/1600.webp",
        sections: [
          {
            title: "The Short Answer",
            content: "Cat Tien is one of Vietnam's most significant national parks for biodiversity, with genuine rainforest trekking and wildlife-spotting opportunities, a real commitment at 2 days but a completely different experience from the city's urban sightseeing or the Mekong Delta's waterways.",
            tourCard: { slug: "cat-tien-national-park-2-day-tour-in-ho-chi-minh-city", title: "Cat Tien National Park 2-Day Tour", description: "A 2-day rainforest and wildlife-watching tour of Cat Tien National Park.", price: "From $496", duration: "2 days", image: "https://images.asiabylocals.com/asiabylocals/tours/cat-tien-national-park-2-day-tour-in-ho-chi-minh-city/img0/1600.webp" },
          },
          {
            title: "Practical Tips",
            content: "Worth it specifically for travelers with real interest in wildlife and rainforest ecosystems rather than a casual sightseeing add-on." ,
          },
        ],
        faqs: [
          { q: "Is Cat Tien National Park worth it?", a: "Yes, for travelers with genuine interest in rainforest wildlife, one of Vietnam's most significant parks for biodiversity." },
        ],
      };

    case "is-black-virgin-mountain-cao-dai-tour-worth-it-ho-chi-minh-city":
      return {
        title: "Is the Black Virgin Mountain and Cao Dai Temple Tour Worth It?",
        description: "An honest look at the Black Virgin Mountain, Cao Dai Temple, and Cu Chi Tunnels combination tour, pairing a cable car mountain with a uniquely Vietnamese religious site.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/black-virgin-mountain-and-cao-dai-temple-and-cu-chi/img0/1600.webp",
        sections: [
          {
            title: "The Short Answer",
            content: "Cao Dai is a uniquely Vietnamese syncretic religion blending Buddhism, Christianity, and other traditions, and its elaborately decorated temple is genuinely unlike anything else in the region, paired on this tour with a cable car ride up Black Virgin Mountain and the Cu Chi Tunnels.",
            tourCard: { slug: "black-virgin-mountain-and-cao-dai-temple-and-cu-chi", title: "Black Virgin Mountain, Cao Dai Temple and Cu Chi", description: "A combination tour of Black Virgin Mountain, Cao Dai Temple, and the Cu Chi Tunnels.", price: "From $101", duration: "10 hours", image: "https://images.asiabylocals.com/asiabylocals/tours/black-virgin-mountain-and-cao-dai-temple-and-cu-chi/img0/1600.webp" },
          },
          {
            title: "Practical Tips",
            content: "Time your visit around the Cao Dai Temple's midday ceremony if you want to see the genuinely elaborate religious service in action." ,
          },
        ],
        faqs: [
          { q: "Is the Cao Dai Temple worth visiting?", a: "Yes, it's a uniquely Vietnamese syncretic religion with an elaborately decorated temple genuinely unlike anything else in the region." },
        ],
      };

    case "is-ao-dai-photo-experience-worth-it-ho-chi-minh-city":
      return {
        title: "Is the Ao Dai Try-On Photo Experience Worth It in Saigon?",
        description: "An honest look at the Ao Dai try-on photo experience, wearing Vietnam's traditional dress for a photoshoot around Ho Chi Minh City's landmarks.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/ao-dai-try-on-photo-experience-in-saigon/img0/1600.webp",
        sections: [
          {
            title: "The Short Answer",
            content: "The ao dai is Vietnam's iconic traditional dress, and trying one on for a guided photoshoot around the city's colonial-era landmarks gives genuinely different, more personal photos than standard tourist snapshots.",
            tourCard: { slug: "ao-dai-try-on-photo-experience-in-saigon", title: "Ao Dai Try-On Photo Experience in Saigon", description: "A guided photoshoot wearing Vietnam's traditional ao dai dress.", price: "From $44", duration: "3 hours", image: "https://images.asiabylocals.com/asiabylocals/tours/ao-dai-try-on-photo-experience-in-saigon/img0/1600.webp" },
          },
          {
            title: "Practical Tips",
            content: "A good short add-on activity to pair with a half-day of sightseeing around the city's colonial-era landmarks." ,
          },
        ],
        faqs: [
          { q: "Is the Ao Dai photo experience worth it?", a: "Yes, for genuinely different, more personal photos than standard tourist snapshots, wearing Vietnam's iconic traditional dress." },
        ],
      };

    case "is-water-puppet-show-worth-it-ho-chi-minh-city":
      return {
        title: "Is the Vietnamese Water Puppet Show Worth It in Ho Chi Minh City?",
        description: "An honest look at the water puppet show in Saigon, a centuries-old Vietnamese folk art performed on a water stage.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/vietnamese-water-puppet-show-ticket/img0/1600.webp",
        sections: [
          {
            title: "The Short Answer",
            content: "At under an hour and a modest ticket price, the water puppet show is an easy, low-commitment way to see a genuinely unique Vietnamese folk art, and it fits neatly into an evening around other Saigon sightseeing.",
            tourCard: { slug: "vietnamese-water-puppet-show-ticket", title: "Vietnamese Water Puppet Show Ticket", description: "Tickets to Saigon's traditional water puppet show.", price: "From $30", duration: "45 minutes", image: "https://images.asiabylocals.com/asiabylocals/tours/vietnamese-water-puppet-show-ticket/img0/1600.webp" },
          },
          {
            title: "Practical Tips",
            content: "Book ahead for an evening slot, since seats near the front give the best view of the water stage mechanics.",
          },
        ],
        faqs: [
          { q: "Is the water puppet show worth it in Ho Chi Minh City?", a: "Yes, for a modest price and under an hour it offers a genuinely unique cultural performance that's easy to fit around other sightseeing." },
        ],
      };

    case "is-chocolate-workshop-worth-it-ho-chi-minh-city":
      return {
        title: "Is the Chocolate Making Workshop Worth It in Ho Chi Minh City?",
        description: "An honest look at the hands-on chocolate making workshop with tasting in Saigon, built around Vietnam's own cacao industry.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/chocolate-making-workshop-with-tasting-in-ho-chi-minh-city/img0/1600.webp",
        sections: [
          {
            title: "The Short Answer",
            content: "Vietnam is a genuine cacao-growing country, not just a chocolate-shop stop, so this hands-on workshop with tasting gives real insight into bean-to-bar chocolate-making in a compact 2-hour session.",
            tourCard: { slug: "chocolate-making-workshop-with-tasting-in-ho-chi-minh-city", title: "Chocolate Making Workshop with Tasting", description: "A hands-on chocolate making workshop with tasting in Ho Chi Minh City.", price: "From $42", duration: "2 hours", image: "https://images.asiabylocals.com/asiabylocals/tours/chocolate-making-workshop-with-tasting-in-ho-chi-minh-city/img0/1600.webp" },
          },
          {
            title: "Practical Tips",
            content: "A good rainy-day or midday activity between bigger sightseeing blocks, since it only takes about 2 hours.",
          },
        ],
        faqs: [
          { q: "Is the chocolate making workshop worth it in Ho Chi Minh City?", a: "Yes, Vietnam's own cacao industry gives this hands-on workshop real substance beyond a typical tourist chocolate-shop stop." },
        ],
      };

    case "is-sound-of-vietnam-show-worth-it-ho-chi-minh-city":
      return {
        title: "Is the Sound of Vietnam Show with Dinner Worth It?",
        description: "An honest look at the Sound of Vietnam evening show with dinner in Ho Chi Minh City, pairing a cultural performance with a set meal.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/sound-of-vietnam-show-with-dinner/img0/1600.webp",
        sections: [
          {
            title: "The Short Answer",
            content: "Pairing a Vietnamese cultural performance with a set dinner makes this a convenient one-stop evening, useful for travelers who want a cultural show without arranging a separate dinner afterward.",
            tourCard: { slug: "sound-of-vietnam-show-with-dinner", title: "Sound of Vietnam Show with Dinner", description: "An evening cultural performance paired with a set dinner in Ho Chi Minh City.", price: "From $113", duration: "Evening", image: "https://images.asiabylocals.com/asiabylocals/tours/sound-of-vietnam-show-with-dinner/img0/1600.webp" },
          },
          {
            title: "Practical Tips",
            content: "Check what's included in the set dinner menu in advance if you have dietary restrictions, since it's typically a fixed menu.",
          },
        ],
        faqs: [
          { q: "Is the Sound of Vietnam show with dinner worth it?", a: "Yes, it's a convenient one-stop evening for travelers who want a cultural performance without arranging a separate dinner." },
        ],
      };

    case "is-long-tan-battlefield-tour-worth-it-ho-chi-minh-city":
      return {
        title: "Is the Long Tan & Nui Dat Battlefield Tour Worth It from Ho Chi Minh City?",
        description: "An honest look at the Long Tan and Nui Dat battlefield tour, which covers a specific, less-visited chapter of the Vietnam War's history.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/long-tan-and-nui-dat-battlefield-real-story-from-the-vietnam-war-ho-chi-minh-city/img0/1600.webp",
        sections: [
          {
            title: "The Short Answer",
            content: "This tour digs into the Battle of Long Tan and the former Nui Dat base, a specific and less commonly covered chapter of the Vietnam War compared to the well-trodden Cu Chi Tunnels, making it a good fit for travelers who already know the broader war history and want more depth.",
            tourCard: { slug: "long-tan-and-nui-dat-battlefield-real-story-from-the-vietnam-war-ho-chi-minh-city", title: "Long Tan & Nui Dat Battlefield Tour", description: "A tour covering the Battle of Long Tan and the former Nui Dat base from the Vietnam War.", price: "From $137", duration: "5 hours", image: "https://images.asiabylocals.com/asiabylocals/tours/long-tan-and-nui-dat-battlefield-real-story-from-the-vietnam-war-ho-chi-minh-city/img0/1600.webp" },
          },
          {
            title: "Practical Tips",
            content: "This suits travelers who already know the broader Vietnam War story and want a deeper, more specific site rather than the more commonly visited Cu Chi Tunnels.",
          },
        ],
        faqs: [
          { q: "Is the Long Tan battlefield tour worth it?", a: "Yes, for travelers wanting more depth beyond the commonly visited Cu Chi Tunnels, this covers a specific, less-visited chapter of the Vietnam War." },
        ],
      };

    case "is-secret-bunker-war-tour-worth-it-ho-chi-minh-city":
      return {
        title: "Is the Secret Bunker and Vietnam War Walking Tour Worth It in Ho Chi Minh City?",
        description: "An honest look at the secret bunker and Vietnam War walking tour in Ho Chi Minh City.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/secret-bunker-and-vietnam-war-walking-tour/img0/1600.webp",
        sections: [
          {
            title: "The Short Answer",
            content: "This walking tour visits a genuine wartime bunker hidden within the city itself, a different format from the Cu Chi Tunnels' underground tunnel network — a more urban, walkable angle on the Vietnam War for travelers who don't want a half-day trip outside the city.",
            tourCard: { slug: "secret-bunker-and-vietnam-war-walking-tour", title: "Secret Bunker and Vietnam War Walking Tour", description: "A walking tour of a secret wartime bunker in Ho Chi Minh City.", price: "From $33", duration: "3 hours", image: "https://images.asiabylocals.com/asiabylocals/tours/secret-bunker-and-vietnam-war-walking-tour/img0/1600.webp" },
          },
          {
            title: "Practical Tips",
            content: "A good pick if you want genuine Vietnam War history without committing to the half-day trip out to the Cu Chi Tunnels.",
          },
        ],
        faqs: [
          { q: "Is the secret bunker and Vietnam War walking tour worth it?", a: "Yes, for genuine wartime history within the city itself, without the half-day commitment the Cu Chi Tunnels require." },
        ],
      };

    case "is-conical-hat-painting-workshop-worth-it-ho-chi-minh-city":
      return {
        title: "Is the Conical Hat Painting Workshop Worth It in Ho Chi Minh City?",
        description: "An honest look at the conical hat (nón lá) painting workshop in Ho Chi Minh City.",
        heroImage: "https://res.cloudinary.com/dx2fxyaft/image/upload/v1789200348/asiabylocals/tours/conical-hat-painting-workshop-in-ho-chi-minh-city/img0.jpg",
        sections: [
          {
            title: "The Short Answer",
            content: "The conical hat (nón lá) is one of Vietnam's most recognizable symbols, and painting your own under guidance turns a familiar souvenir into a genuinely personal, handmade one rather than a mass-produced market item.",
            tourCard: { slug: "conical-hat-painting-workshop-in-ho-chi-minh-city", title: "Conical Hat Painting Workshop in Ho Chi Minh City", description: "A hands-on conical hat painting workshop.", price: "From $39", duration: "2.5 hours", image: "https://res.cloudinary.com/dx2fxyaft/image/upload/v1789200348/asiabylocals/tours/conical-hat-painting-workshop-in-ho-chi-minh-city/img0.jpg" },
          },
          {
            title: "Practical Tips",
            content: "You take home the hat you paint — a genuinely personal souvenir rather than a mass-produced market version.",
          },
        ],
        faqs: [
          { q: "Is the conical hat painting workshop worth it in Ho Chi Minh City?", a: "Yes, for a genuinely personal, handmade version of one of Vietnam's most recognizable souvenirs." },
        ],
      };

    case "is-rug-tufting-workshop-worth-it-ho-chi-minh-city":
      return {
        title: "Is the Rug Tufting Workshop Worth It in Saigon?",
        description: "An honest look at the rug tufting workshop in Saigon (Ho Chi Minh City).",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/rug-tufting-workshop-in-saigon/img0/1600.webp",
        sections: [
          {
            title: "The Short Answer",
            content: "Rug tufting using a tufting gun is a genuinely modern craft trend rather than a traditional Vietnamese one, giving this a different, more contemporary creative outlet than the city's lacquer and ceramic workshops — a good fit for travelers specifically looking for a design-forward activity.",
            tourCard: { slug: "rug-tufting-workshop-in-saigon", title: "Rug Tufting Workshop in Saigon", description: "A hands-on rug tufting workshop in Saigon.", price: "From $36", duration: "3.5 hours", image: "https://images.asiabylocals.com/asiabylocals/tours/rug-tufting-workshop-in-saigon/img0/1600.webp" },
          },
          {
            title: "Practical Tips",
            content: "You take home a genuinely usable small rug or mat, not just a decorative trinket — a more substantial souvenir than most craft workshops produce.",
          },
        ],
        faqs: [
          { q: "Is the rug tufting workshop worth it in Saigon?", a: "Yes, for a modern, design-forward creative activity distinct from the city's more traditional craft workshops." },
        ],
      };

    case "is-slum-tour-worth-it-ho-chi-minh-city":
      return {
        title: "Is the Motorbike Slum Tour Worth It in Ho Chi Minh City?",
        description: "An honest, even-handed look at the motorbike slum tour in Ho Chi Minh City.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/motorbike-slum-tour-in-ho-chi-minh-city/img0/1600.webp",
        sections: [
          {
            title: "The Short Answer",
            content: "This tour rides through lower-income neighborhoods most tourists never see, which can offer genuine insight into everyday local resourcefulness rather than the curated city-center version of Saigon — whether it's right for you depends on your comfort with the format and confidence that the specific operator and guide genuinely benefit the community they ride you through.",
            tourCard: { slug: "motorbike-slum-tour-in-ho-chi-minh-city", title: "Motorbike Slum Tour in Ho Chi Minh City", description: "A motorbike tour through lower-income neighborhoods of Ho Chi Minh City.", price: "From $30", duration: "Flexible", image: "https://images.asiabylocals.com/asiabylocals/tours/motorbike-slum-tour-in-ho-chi-minh-city/img0/1600.webp" },
          },
          {
            title: "Practical Tips",
            content: "Ask the operator directly how the tour benefits the community and whether local guides from the area itself lead the ride — a genuinely ethical operator should answer this clearly and specifically.",
          },
        ],
        faqs: [
          { q: "Is a slum tour in Ho Chi Minh City ethical?", a: "It depends entirely on the specific operator — ask directly how the community benefits and whether local guides lead the ride, and expect a clear, specific answer." },
          { q: "Is the motorbike slum tour worth it?", a: "It can be, for travelers genuinely interested in everyday local life rather than treating the neighborhood as a spectacle — confirm the operator's community-benefit model first." },
        ],
      };

    case "is-perfume-workshop-worth-it-ho-chi-minh-city":
      return {
        title: "Is the Perfume Workshop with Scent of Saigon Worth It in Ho Chi Minh City?",
        description: "An honest look at the perfume workshop with Scent of Saigon in Ho Chi Minh City.",
        heroImage: "https://res.cloudinary.com/dx2fxyaft/image/upload/v1789200362/asiabylocals/tours/perfume-workshop-with-scent-of-saigon/img0.jpg",
        sections: [
          {
            title: "The Short Answer",
            content: "This workshop teaches the basics of perfume blending using scents inspired by Saigon itself, letting you create and take home your own bottle — worth it as a relaxed, personal craft activity rather than another temple or market stop.",
            tourCard: { slug: "perfume-workshop-with-scent-of-saigon", title: "Perfume Workshop with Scent of Saigon", description: "A hands-on perfume blending workshop inspired by Saigon.", price: "From $26", duration: "1.5 hours", image: "https://res.cloudinary.com/dx2fxyaft/image/upload/v1789200362/asiabylocals/tours/perfume-workshop-with-scent-of-saigon/img0.jpg" },
          },
          {
            title: "Practical Tips",
            content: "Pack your bottle carefully for the flight home — check whether it needs to go in checked luggage under liquid restrictions.",
          },
        ],
        faqs: [
          { q: "Is the perfume workshop with Scent of Saigon worth it in Ho Chi Minh City?", a: "Yes, as a relaxed hands-on craft activity with a genuinely personal souvenir to take home." },
        ],
      };

    case "is-iconic-apartments-walking-tour-worth-it-ho-chi-minh-city":
      return {
        title: "Is the Iconic Apartments Walking Tour Worth It in Ho Chi Minh City?",
        description: "An honest look at the Iconic Apartments walking tour in Ho Chi Minh City.",
        heroImage: "https://res.cloudinary.com/dx2fxyaft/image/upload/v1789200385/asiabylocals/tours/iconic-apartments-walking-tour-in-ho-chi-minh-city/img0.jpg",
        sections: [
          {
            title: "The Short Answer",
            content: "Saigon's old apartment blocks, originally built for government staff decades ago, have been converted floor by floor into a maze of independent cafes, boutiques, and galleries — this walking tour explains the history behind the buildings rather than you wandering in without context, worth it for travelers who want more than just an Instagram photo stop.",
            tourCard: { slug: "iconic-apartments-walking-tour-in-ho-chi-minh-city", title: "Iconic Apartments Walking Tour in Ho Chi Minh City", description: "A guided walking tour through Saigon's iconic converted apartment blocks.", price: "From $29", duration: "3 hours", image: "https://res.cloudinary.com/dx2fxyaft/image/upload/v1789200385/asiabylocals/tours/iconic-apartments-walking-tour-in-ho-chi-minh-city/img0.jpg" },
          },
          {
            title: "Practical Tips",
            content: "Wear comfortable shoes — these old buildings have narrow stairwells and no elevators between most floors.",
          },
        ],
        faqs: [
          { q: "Is the Iconic Apartments walking tour worth it in Ho Chi Minh City?", a: "Yes, it gives real context on the buildings' history, going beyond just a quick photo stop." },
        ],
      };

    case "is-scented-candle-making-workshop-worth-it-ho-chi-minh-city":
      return {
        title: "Is the Scented Candle-Making Workshop Worth It in Ho Chi Minh City?",
        description: "An honest look at the scented candle-making workshop in Ho Chi Minh City.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/scented-candle-making-workshop-in-ho-chi-minh-city/img0/1600.webp",
        sections: [
          {
            title: "The Short Answer",
            content: "A straightforward, relaxed hands-on candle-making class where you mix your own scent and pour your own candle to take home — worth it as a low-key, air-conditioned break from a day of outdoor sightseeing rather than a must-do cultural experience.",
            tourCard: { slug: "scented-candle-making-workshop-in-ho-chi-minh-city", title: "Scented Candle-Making Workshop in Ho Chi Minh City", description: "A hands-on scented candle-making workshop.", price: "From $39", duration: "2 hours", image: "https://images.asiabylocals.com/asiabylocals/tours/scented-candle-making-workshop-in-ho-chi-minh-city/img0/1600.webp" },
          },
          {
            title: "Practical Tips",
            content: "Let your candle cool and set fully before packing it for travel, especially in warm weather.",
          },
        ],
        faqs: [
          { q: "Is the scented candle-making workshop worth it in Ho Chi Minh City?", a: "Yes, as a relaxed, air-conditioned craft break with a genuine souvenir, though it's not an essential cultural experience." },
        ],
      };

    case "is-icon-saigon-sunset-cruise-worth-it-ho-chi-minh-city":
      return {
        title: "Is the ICON Saigon Luxury Sunset Cruise Worth It in Ho Chi Minh City?",
        description: "An honest look at the ICON Saigon luxury sunset cruise in Ho Chi Minh City.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/icon-saigon-luxury-sunset-cruise/img0/1600.webp",
        sections: [
          {
            title: "The Short Answer",
            content: "A short sunset cruise on the Saigon River with the city's modern skyline as the backdrop, worth it specifically for the golden-hour skyline views rather than as a full dinner-cruise experience — it's brief, so treat it as a scenic add-on rather than an evening's main activity.",
            tourCard: { slug: "icon-saigon-luxury-sunset-cruise", title: "ICON Saigon Luxury Sunset Cruise", description: "A sunset river cruise with Saigon's modern skyline views.", price: "From $34", duration: "1 hour", image: "https://images.asiabylocals.com/asiabylocals/tours/icon-saigon-luxury-sunset-cruise/img0/1600.webp" },
          },
          {
            title: "Practical Tips",
            content: "Check the exact departure time against sunset that day so you don't miss the golden-hour window the cruise is built around.",
          },
        ],
        faqs: [
          { q: "Is the ICON Saigon luxury sunset cruise worth it in Ho Chi Minh City?", a: "Yes, for the skyline views at golden hour, but treat it as a scenic add-on rather than a full evening activity given its short length." },
        ],
      };

    case "is-chinatown-temples-market-walking-tour-worth-it-ho-chi-minh-city":
      return {
        title: "Is the Chinatown, Temples and Market Walking Tour Worth It in Ho Chi Minh City?",
        description: "An honest look at the Chinatown, temples, and market walking tour in Ho Chi Minh City.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/icon-saigon-luxury-sunset-cruise/img0/1600.webp",
        sections: [
          {
            title: "The Short Answer",
            content: "Cholon, the city's Chinatown district, is a genuinely different cultural layer from the French colonial core most visitors stick to, and this walking tour through its temples and markets covers ground most itineraries skip entirely, worth it for travelers wanting a fuller picture of Saigon's history.",
            tourCard: { slug: "chinatown-temples-and-market-walking-tour-in-ho-chi-minh-city", title: "Chinatown, Temples and Market Walking Tour in Ho Chi Minh City", description: "A guided walking tour of Ho Chi Minh City's Chinatown district, temples, and markets.", price: "From $33", duration: "2.5 hours", image: "https://images.asiabylocals.com/asiabylocals/tours/icon-saigon-luxury-sunset-cruise/img0/1600.webp" },
          },
          {
            title: "Practical Tips",
            content: "Dress modestly for the temple stops, since several require covered shoulders.",
          },
        ],
        faqs: [
          { q: "Is the Chinatown walking tour worth it in Ho Chi Minh City?", a: "Yes, for a fuller picture of the city's history beyond the French colonial core most visitors stick to." },
        ],
      };

    case "is-archery-hidden-cafe-experience-worth-it-ho-chi-minh-city":
      return {
        title: "Is the Archery and Hidden Café Experience Worth It in Ho Chi Minh City?",
        description: "An honest look at the archery and hidden café experience in Ho Chi Minh City.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/icon-saigon-luxury-sunset-cruise/img0/1600.webp",
        sections: [
          {
            title: "The Short Answer",
            content: "Pairing archery practice with a visit to a genuinely hidden, hard-to-find café gives this a different pace than the city's usual street food and history tours, worth it specifically for travelers wanting something active and a little off the typical sightseeing script.",
            tourCard: { slug: "archery-and-hidden-caf-experience-in-ho-chi-minh-city", title: "Archery and Hidden Café Experience in Ho Chi Minh City", description: "An archery session paired with a visit to a hidden café in Ho Chi Minh City.", price: "From $35", duration: "2 hours", image: "https://images.asiabylocals.com/asiabylocals/tours/icon-saigon-luxury-sunset-cruise/img0/1600.webp" },
          },
          {
            title: "Practical Tips",
            content: "Wear comfortable clothes you can move in for the archery portion, since you'll be standing and drawing a bow repeatedly.",
          },
        ],
        faqs: [
          { q: "Is the archery and hidden café experience worth it in Ho Chi Minh City?", a: "Yes, for travelers wanting something active and off the typical sightseeing script, rather than another food or history tour." },
        ],
      };

    case "is-mosaic-art-workshop-worth-it-ho-chi-minh-city":
      return {
        title: "Is the Mosaic Art Workshop in a Secret Spot Worth It in Ho Chi Minh City?",
        description: "An honest look at the mosaic art workshop in a secret spot in Ho Chi Minh City.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/icon-saigon-luxury-sunset-cruise/img0/1600.webp",
        sections: [
          {
            title: "The Short Answer",
            content: "Hosted at a genuinely hidden location rather than a tourist-facing storefront, this hands-on mosaic workshop gives a quiet, creative break from sightseeing and a real souvenir to take home, worth it for travelers wanting a calmer indoor activity between busier days.",
            tourCard: { slug: "mosaic-art-workshop-in-a-secret-spot-in-ho-chi-minh-city", title: "Mosaic Art Workshop in a Secret Spot in Ho Chi Minh City", description: "A hands-on mosaic art workshop at a hidden location in Ho Chi Minh City.", price: "From $39", duration: "4 hours", image: "https://images.asiabylocals.com/asiabylocals/tours/icon-saigon-luxury-sunset-cruise/img0/1600.webp" },
          },
          {
            title: "Practical Tips",
            content: "A good rainy-day or midday-heat option, since it's entirely indoors and hands-on.",
          },
        ],
        faqs: [
          { q: "Is the mosaic art workshop worth it in Ho Chi Minh City?", a: "Yes, for a calm, creative break from sightseeing with a genuine souvenir to take home." },
        ],
      };

    case "is-thao-dien-walking-tour-worth-it-ho-chi-minh-city":
      return {
        title: "Is the Luxury and Snapshots Walking Tour in Thao Dien Worth It?",
        description: "An honest look at the luxury and snapshots walking tour in Thao Dien, Ho Chi Minh City.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/icon-saigon-luxury-sunset-cruise/img0/1600.webp",
        sections: [
          {
            title: "The Short Answer",
            content: "Thao Dien is the city's upscale, leafy expat district, a genuinely different side of Saigon from the dense, historic downtown core, worth it specifically for travelers wanting photogenic cafes and boutique architecture rather than another temple or market stop.",
            tourCard: { slug: "luxury-and-snapshots-walking-tour-in-thao-dien-in-ho-chi-minh-city", title: "Luxury and Snapshots Walking Tour in Thao Dien in Ho Chi Minh City", description: "A walking tour of Thao Dien's upscale cafes and boutique architecture.", price: "From $36", duration: "3 hours", image: "https://images.asiabylocals.com/asiabylocals/tours/icon-saigon-luxury-sunset-cruise/img0/1600.webp" },
          },
          {
            title: "Practical Tips",
            content: "Bring your camera or phone fully charged — the tour is built specifically around photogenic stops.",
          },
        ],
        faqs: [
          { q: "Is the Thao Dien walking tour worth it in Ho Chi Minh City?", a: "Yes, for travelers wanting a photogenic, upscale side of Saigon that's genuinely different from the historic downtown core." },
        ],
      };

    case "is-tan-lap-floating-village-worth-it-ho-chi-minh-city":
      return {
        title: "Is the Tan Lap Floating Village Eco Day Tour Worth It?",
        description: "An honest look at the Tan Lap Floating Village eco day tour from Ho Chi Minh City.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/tan-lap-floating-village-eco-day-tour-in-ho-chi-minh-city/img0/1600.webp",
        sections: [
          {
            title: "The Short Answer",
            content: "Tan Lap's flooded cajuput forest and boardwalk give a genuinely different eco-landscape than the standard My Tho/Ben Tre delta circuit, worth it for travelers wanting a quieter, more nature-focused Mekong day away from the usual boat crowds.",
            tourCard: { slug: "tan-lap-floating-village-eco-day-tour-in-ho-chi-minh-city", title: "Tan Lap Floating Village Eco Day Tour in Ho Chi Minh City", description: "An eco day tour to Tan Lap Floating Village's flooded forest and boardwalk.", price: "From $343", duration: "Full day", image: "https://images.asiabylocals.com/asiabylocals/tours/tan-lap-floating-village-eco-day-tour-in-ho-chi-minh-city/img0/1600.webp" },
          },
          {
            title: "Practical Tips",
            content: "Bring insect repellent, since the flooded forest area has more mosquitoes than the open delta river sections.",
          },
        ],
        faqs: [
          { q: "Is the Tan Lap Floating Village tour worth it from Ho Chi Minh City?", a: "Yes, for a quieter, more nature-focused eco-landscape than the standard delta river circuit." },
        ],
      };

    case "is-sa-dec-flower-village-worth-it-ho-chi-minh-city":
      return {
        title: "Is the Sa Dec Flower Village and Xeo Quyt Forest Day Tour Worth It?",
        description: "An honest look at the 1-day Mekong Sa Dec Flower Village and Xeo Quyt Forest tour from Ho Chi Minh City.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/hcm-1-day-mekong-sa-dec-flower-village-and-xeo-quyt-forest-ho-chi-minh-city/img0/1600.webp",
        sections: [
          {
            title: "The Short Answer",
            content: "Pairing Sa Dec's flower-growing village with Xeo Quyt's wartime guerrilla forest gives a genuinely varied day combining color and history, distinct from the standard coconut-candy delta circuit, worth it for travelers wanting something beyond the usual My Tho/Ben Tre route.",
            tourCard: { slug: "hcm-1-day-mekong-sa-dec-flower-village-and-xeo-quyt-forest-ho-chi-minh-city", title: "HCM: 1 Day Mekong Sa Dec Flower Village and Xeo Quyt Forest", description: "A day tour combining Sa Dec Flower Village and Xeo Quyt Forest in the Mekong Delta.", price: "From $390", duration: "Full day", image: "https://images.asiabylocals.com/asiabylocals/tours/hcm-1-day-mekong-sa-dec-flower-village-and-xeo-quyt-forest-ho-chi-minh-city/img0/1600.webp" },
          },
          {
            title: "Practical Tips",
            content: "Check the flower season before booking, since Sa Dec's village is more vivid at certain times of year than others.",
          },
        ],
        faqs: [
          { q: "Is the Sa Dec Flower Village and Xeo Quyt Forest tour worth it from Ho Chi Minh City?", a: "Yes, for a genuinely varied day combining color and wartime history, beyond the standard delta circuit." },
        ],
      };

    case "is-bao-loc-waterfalls-tea-hills-worth-it-ho-chi-minh-city":
      return {
        title: "Is the Bao Loc Waterfalls and Tea Hills Day Trip Worth It?",
        description: "An honest look at the Bao Loc Waterfalls and tea hills private day trip from Mui Ne.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/bao-loc-waterfalls-and-tea-hills-private-day-trip-from-mui-ne-in-ho-chi-minh-city/img0/1600.webp",
        sections: [
          {
            title: "The Short Answer",
            content: "Bao Loc's waterfalls and rolling tea plantations give a genuinely different highland landscape than Mui Ne's dunes or Saigon's delta day trips, worth it for travelers already in the Mui Ne area who want a scenic detour into the highlands.",
            tourCard: { slug: "bao-loc-waterfalls-and-tea-hills-private-day-trip-from-mui-ne-in-ho-chi-minh-city", title: "Bao Loc Waterfalls and Tea Hills Private Day Trip from Mui Ne", description: "A private day trip to Bao Loc's waterfalls and tea plantations from Mui Ne.", price: "From $328", duration: "Full day", image: "https://images.asiabylocals.com/asiabylocals/tours/bao-loc-waterfalls-and-tea-hills-private-day-trip-from-mui-ne-in-ho-chi-minh-city/img0/1600.webp" },
          },
          {
            title: "Practical Tips",
            content: "Pack a light jacket, since Bao Loc sits at higher elevation and runs noticeably cooler than the coast.",
          },
        ],
        faqs: [
          { q: "Is the Bao Loc waterfalls and tea hills day trip worth it?", a: "Yes, for travelers already in the Mui Ne area wanting a scenic highland detour distinct from the coast or delta." },
        ],
      };

    case "is-dak-nong-tour-worth-it-ho-chi-minh-city":
      return {
        title: "Is the Dak Nong 3-Day Tour Worth It from Ho Chi Minh City?",
        description: "An honest look at the Dak Nong 3-day tour with meals and guide from Ho Chi Minh City.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/dak-nong-3-day-tour-with-meals-and-guide-in-ho-chi-minh-city/img0/1600.webp",
        sections: [
          {
            title: "The Short Answer",
            content: "Dak Nong's volcanic caves, waterfalls and Central Highlands scenery are a genuinely different side of Vietnam than the delta, tunnels or coast, worth it for travelers with a few extra days who want real highland terrain and UNESCO geopark sites few tourists visit.",
            tourCard: { slug: "dak-nong-3-day-tour-with-meals-and-guide-in-ho-chi-minh-city", title: "Dak Nong 3-Day Tour with Meals and Guide", description: "A 3-day tour of Dak Nong's volcanic caves, waterfalls and highlands with meals and a guide.", price: "From $2077", duration: "3 days", image: "https://images.asiabylocals.com/asiabylocals/tours/dak-nong-3-day-tour-with-meals-and-guide-in-ho-chi-minh-city/img0/1600.webp" },
          },
          {
            title: "Practical Tips",
            content: "Book with real lead time, since this is a multi-day trip covering a remote region with fixed logistics.",
          },
        ],
        faqs: [
          { q: "Is the Dak Nong 3-day tour worth it from Ho Chi Minh City?", a: "Yes, for travelers with extra days who want genuine Central Highlands terrain and geopark sites few tourists visit." },
        ],
      };

    case "is-ho-chi-minh-trail-dirtbike-12day-worth-it-ho-chi-minh-city":
      return {
        title: "Is the Ho Chi Minh Trail Dirtbike Tour (Saigon to Hanoi, 12 Days) Worth It?",
        description: "An honest look at the 12-day Ho Chi Minh Trail dirtbike tour from Saigon to Hanoi.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/ho-chi-minh-trail-dirtbike-tour-from-saigon-to-hanoi-12-days/img0/1600.webp",
        sections: [
          {
            title: "The Short Answer",
            content: "Riding the full length of the historic Ho Chi Minh Trail from Saigon to Hanoi over 12 days gives a genuinely immersive, backroads view of Vietnam that no bus or flight route can match, worth it specifically for experienced riders wanting the complete country, not just the highlights.",
            tourCard: { slug: "ho-chi-minh-trail-dirtbike-tour-from-saigon-to-hanoi-12-days", title: "Ho Chi Minh Trail Dirtbike Tour: From Saigon to Hanoi: 12 Days", description: "A 12-day dirtbike tour along the historic Ho Chi Minh Trail from Saigon to Hanoi.", price: "From $2990", duration: "12 days", image: "https://images.asiabylocals.com/asiabylocals/tours/ho-chi-minh-trail-dirtbike-tour-from-saigon-to-hanoi-12-days/img0/1600.webp" },
          },
          {
            title: "Practical Tips",
            content: "Prior motorcycle experience matters here — this isn't a beginner scooter tour, and the trail includes genuinely rough backroad sections.",
          },
        ],
        faqs: [
          { q: "Is the 12-day Ho Chi Minh Trail dirtbike tour worth it?", a: "Yes, specifically for experienced riders wanting a complete, immersive view of Vietnam's backroads from Saigon to Hanoi." },
        ],
      };

    case "is-5day-southern-vietnam-tour-worth-it-ho-chi-minh-city":
      return {
        title: "Is the 5-Day Southern Vietnam Tour Worth It from Ho Chi Minh City?",
        description: "An honest look at the 5-day Southern Vietnam tour from Ho Chi Minh City.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/5-day-southern-vietnam-tour/img0/1600.webp",
        sections: [
          {
            title: "The Short Answer",
            content: "Bundling the city, Mekong Delta, and a coastal stop into one 5-day guided package covers southern Vietnam's main regions without the hassle of booking each leg separately, worth it for travelers who want a complete southern overview handled in one booking.",
            tourCard: { slug: "5-day-southern-vietnam-tour", title: "5-Day Southern Vietnam Tour", description: "A 5-day guided tour covering Ho Chi Minh City, the Mekong Delta, and the southern coast.", price: "From $1690", duration: "5 days", image: "https://images.asiabylocals.com/asiabylocals/tours/5-day-southern-vietnam-tour/img0/1600.webp" },
          },
          {
            title: "Practical Tips",
            content: "Confirm the exact regions on the itinerary before booking, since several similarly named multi-day southern Vietnam packages exist with slightly different routes.",
          },
        ],
        faqs: [
          { q: "Is the 5-day Southern Vietnam tour worth it from Ho Chi Minh City?", a: "Yes, for travelers wanting a complete southern Vietnam overview handled in one booking rather than arranging each leg separately." },
        ],
      };

    case "is-10day-beauty-of-vietnam-worth-it-ho-chi-minh-city":
      return {
        title: "Is the 10 Days Beauty of Vietnam Tour Worth It?",
        description: "An honest look at the 10-day Beauty of Vietnam tour from Ho Chi Minh City.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/10-days-beauty-of-vietnam-ho-chi-minh-city/img0/1600.webp",
        sections: [
          {
            title: "The Short Answer",
            content: "Ten days is enough time to genuinely span Vietnam's south-to-north highlights in one guided package, worth it for travelers who want the country's full range covered without piecing together separate city-by-city bookings.",
            tourCard: { slug: "10-days-beauty-of-vietnam-ho-chi-minh-city", title: "10 Days Beauty of Vietnam (Ho Chi Minh City)", description: "A 10-day guided tour spanning Vietnam's highlights from south to north.", price: "From $2340", duration: "10 days", image: "https://images.asiabylocals.com/asiabylocals/tours/10-days-beauty-of-vietnam-ho-chi-minh-city/img0/1600.webp" },
          },
          {
            title: "Practical Tips",
            content: "Check which transport is included between cities, since 10-day countrywide packages vary on whether domestic flights or overnight trains are covered.",
          },
        ],
        faqs: [
          { q: "Is the 10-day Beauty of Vietnam tour worth it?", a: "Yes, for travelers wanting the country's full south-to-north range covered in one guided package rather than separate bookings." },
        ],
      };

    case "is-20day-hanoi-ho-chi-minh-tour-worth-it-ho-chi-minh-city":
      return {
        title: "Is the 20-Day Tour from Hanoi to Ho Chi Minh Worth It?",
        description: "An honest look at the 20-day guided tour from Hanoi to Ho Chi Minh City.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/20-day-tour-from-hanoi-to-ho-chi-minh/img0/1600.webp",
        sections: [
          {
            title: "The Short Answer",
            content: "Twenty days gives genuine time to explore Vietnam in depth rather than rushing between highlights, worth it specifically for travelers with a long trip planned who want the entire country covered in one continuous, fully organized itinerary.",
            tourCard: { slug: "20-day-tour-from-hanoi-to-ho-chi-minh", title: "20-Day Tour from Hanoi to Ho Chi Minh", description: "A 20-day guided tour covering Vietnam from Hanoi to Ho Chi Minh City.", price: "From $2042", duration: "20 days", image: "https://images.asiabylocals.com/asiabylocals/tours/20-day-tour-from-hanoi-to-ho-chi-minh/img0/1600.webp" },
          },
          {
            title: "Practical Tips",
            content: "Confirm the cancellation and date-change policy before booking, since a trip this long carries more risk of needing to adjust dates.",
          },
        ],
        faqs: [
          { q: "Is the 20-day Hanoi to Ho Chi Minh tour worth it?", a: "Yes, specifically for travelers with a long trip planned who want the entire country covered in one continuous, organized itinerary." },
        ],
      };

    default:
      return null;
  }
}

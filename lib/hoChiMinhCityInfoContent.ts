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

    default:
      return null;
  }
}

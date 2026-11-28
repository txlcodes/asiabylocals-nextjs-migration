// Hanoi authority pages (2026-09). Same CityInfoData shape as cityInfoContent.ts.
// Reached via getHanoiInfoContent() -> getCityInfoContent().
import type { CityInfoData } from './cityInfoContent';

const IMG = 'https://res.cloudinary.com/dx2fxyaft/image/upload/v1789201477/asiabylocals/tours/lan-ha-bay-day-cruise-with-dark-and-bright-caves-in-hanoi/img0.jpg';

export function getHanoiInfoContent(slug: string): CityInfoData | null {
  switch (slug) {

    case "hanoi-old-quarter-guide":
      return {
        title: "Hanoi Old Quarter: How the Streets Are Organised and How to Walk Them",
        seoTitle: "Hanoi Old Quarter Guide 2026",
        description: "The trade-street system that still runs the district, what is worth your feet, and the part of the day it is best seen.",
        heroImage: IMG,
        fastFacts: [
          { icon: "map", label: "The grid", value: "Thirty-six original trade streets, most still named for a craft" },
          { icon: "clock", label: "Best hours", value: "6am to 8am, and again after 7pm" },
          { icon: "coffee", label: "Local habit", value: "Egg coffee, invented here in the 1940s" },
          { icon: "alert-triangle", label: "Crossing the road", value: "Walk slowly and predictably; do not stop" },
          { icon: "calendar-days", label: "Weekends", value: "Streets around the lake close to traffic Friday to Sunday evening" },
        ],
        sections: [
          {
            title: "Hanoi Old Quarter: How the Streets Are Organised and How to Walk Them",
            icon: "map",
            content: "The Old Quarter is not laid out at random. Each street was historically a guild selling one thing, and the name still says which: Hang Bac was silver, Hang Ma was paper goods, Hang Thiec was tin. A surprising number still sell roughly what they always sold, so a street of nothing but shoes or nothing but altar offerings is not a tourist arrangement, it is the original system still working.\n\nThat is the most interesting way to walk it. Rather than heading for a list of sights, pick a direction and notice when the goods on both sides change at once. It happens at almost every junction.\n\nThe streets are narrow, the pavements are parked on, and you will walk in the road. That is normal and is what everyone else is doing.",
            tourCard: {
              slug: "small-group-street-food-walking-tour-in-hanoi",
              title: "Small-Group Street Food Walking Tour in Hanoi",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 21",
              duration: "3 hours",
              image: IMG,
            },
          },
          {
            title: "Crossing the road, which is a real skill",
            icon: "alert-triangle",
            content: "⚠️ This is the thing most first-time visitors get wrong, and it matters because the motorbike traffic does not stop for you and is not going to.\n\nThe technique is to step out at a slow, even pace and keep going. Riders read your speed and steer around you. What breaks the system is stopping suddenly or stepping back, because you have then moved to where they had already decided you would not be.\n\nDo not wait for a gap. At most hours there is not one. If it feels impossible, walk beside a local and cross when they cross.",
          },
          {
            title: "When to be out",
            icon: "clock",
            content: "Hanoi is an early city. By six in the morning the markets are at full volume, the pho stalls are busiest, and older residents are doing tai chi round Hoan Kiem lake. By nine much of that has ended.\n\nThe middle of the day is hot and the Old Quarter is at its most crowded and least pleasant. The evening starts again around seven, and the area around Ta Hien street becomes a street-side drinking district that runs late.\n\nFrom Friday evening to Sunday night the streets around Hoan Kiem are closed to traffic and fill with families, games and impromptu music. If your dates include a weekend, keep one evening for that.",
          },
        ],
      };

    case "hanoi-street-food-guide":
      return {
        title: "Hanoi Street Food: What to Eat, and Why a Guide Changes It",
        seoTitle: "Hanoi Street Food Guide 2026",
        description: "The dishes Hanoi does better than anywhere else, when each one is eaten, and the difference a local guide makes.",
        heroImage: IMG,
        fastFacts: [
          { icon: "utensils", label: "The signature", value: "Pho, eaten at breakfast rather than dinner" },
          { icon: "flame", label: "The lunch dish", value: "Bun cha, grilled pork in broth, served midday" },
          { icon: "coffee", label: "The drink", value: "Ca phe trung, egg coffee" },
          { icon: "beer", label: "The evening", value: "Bia hoi, fresh draught beer brewed that morning" },
          { icon: "clock", label: "Timing matters", value: "Most specialist stalls sell one dish and close when it runs out" },
        ],
        sections: [
          {
            title: "Hanoi Street Food: What to Eat, and Why a Guide Changes It",
            icon: "utensils",
            content: "Hanoi's food is more specialised than Saigon's. A stall usually makes one dish, has made it for decades, and stops when the pot is empty. That is why a place can be famous and shut at two in the afternoon.\n\nThe consequence for a visitor is that wandering and hoping does not work well. You arrive at the wrong hour, or at the version aimed at you rather than the one the neighbourhood eats.\n\nThis is the one city where a food walk genuinely earns its price, not because the food is hard to find but because the timing is. A guide takes you to four places in the window each is good in, which is close to impossible to arrange yourself on a short stay.",
            tourCard: {
              slug: "old-quarter-street-food-tour-with-12-tastings-in-hanoi",
              title: "Old Quarter Street Food Tour with Twelve Tastings",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 37",
              duration: "3.5 hours",
              image: IMG,
            },
          },
          {
            title: "The dishes, and when they are eaten",
            icon: "clock",
            content: "Pho is breakfast. A Hanoi pho is clearer and plainer than the southern version, with far fewer herbs added at the table, and that restraint is the point rather than an omission.\n\nBun cha is lunch and effectively only lunch. Grilled pork patties in a bowl of sweet-sour broth, with noodles and herbs to dip. Almost every bun cha place stops serving in the early afternoon.\n\nBanh cuon, steamed rice sheets, is a morning dish. Cha ca, turmeric fish cooked at the table with dill, is dinner and is the one sit-down meal worth booking.\n\nEgg coffee is any time and is more like a dessert than a drink: whipped yolk and condensed milk over hot coffee, invented here when milk was scarce.",
          },
          {
            title: "Eating safely without eating badly",
            icon: "shield",
            content: "The stalls with a queue of locals turn their stock over fastest, which is the single most useful rule and better than any judgment about how the place looks.\n\nEat where the cooking happens in front of you. Be more careful with cut fruit and with ice in places without a visible ice supplier, and much less careful about plastic stools and a shared table, which are not a hygiene signal at all.\n\nIf you have a serious allergy, have it written in Vietnamese before you go. Fish sauce is in almost everything savoury, including dishes that look vegetarian, and peanuts appear as a garnish more often than menus say.",
          },
        ],
      };

    case "day-trips-from-hanoi":
      return {
        title: "Day Trips from Hanoi: Ninh Binh, Ha Long and the Craft Villages",
        seoTitle: "Best Day Trips from Hanoi 2026",
        description: "Which ones work in a day, which do not, and how long each really takes once the pickup loop is counted.",
        heroImage: IMG,
        fastFacts: [
          { icon: "map", label: "Ninh Binh", value: "About 2 hours each way; the best full-day trip" },
          { icon: "ship", label: "Ha Long", value: "2.5 hours each way; better as an overnight" },
          { icon: "mountain", label: "Sapa", value: "5 to 6 hours each way; not a day trip" },
          { icon: "hammer", label: "Craft villages", value: "Under an hour out; half a day is enough" },
          { icon: "clock", label: "Add", value: "An hour for the shared hotel pickup loop" },
        ],
        sections: [
          {
            title: "Day Trips from Hanoi: Ninh Binh, Ha Long and the Craft Villages",
            icon: "map",
            content: "Hanoi is unusually well placed for day trips, and the mistake is attempting the ones that are really overnight trips.\n\nNinh Binh is the best of them by a distance. Limestone karsts identical in geology to Ha Long's, seen from a small rowing boat on a river, with Mua Cave's staircase for the view over the whole valley. Two hours each way, and a full day is genuinely enough.\n\nHa Long works as a day trip but gives up the part worth having, which is the hours either side of the day fleet.\n\nSapa does not work as a day trip in any form. Five to six hours each way means ten to twelve hours in a seat for a few hours in the hills. Anyone selling it as one is selling a bus ride.",
            tourCard: {
              slug: "transfer-to-from-cat-ba-island-by-multiple-timing-bus",
              title: "Transfer To and From Cat Ba Island by Bus",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 26",
              duration: "3.5 hours",
              image: IMG,
            },
          },
          {
            title: "The craft villages, which most visitors skip",
            icon: "hammer",
            content: "Within an hour of the city there are villages that have made one thing for centuries: Bat Trang for ceramics, Van Phuc for silk, Quang Phu Cau for the incense sticks that photograph as fields of red.\n\nThese are working places rather than exhibits, which is the appeal and also the caveat: there is no performance laid on and a village that is having a quiet day is having a quiet day.\n\nThey suit a half day rather than a full one, and they pair well with a late afternoon back in the Old Quarter.",
          },
          {
            title: "What the advertised hours leave out",
            icon: "clock",
            content: "Almost every day trip quotes driving time from the edge of Hanoi, not from your hotel.\n\nA shared tour collects from several hotels first, which adds close to an hour at the start and a slower drop-off at the end. On a Ninh Binh day that turns a nine-hour itinerary into eleven.\n\nA private transfer removes it. On anything two people or more it is usually the best-value change you can make to a day trip, and it also means you leave when the light is still good rather than when the last hotel has been collected.",
          },
        ],
      };

    case "best-time-to-visit-hanoi":
      return {
        title: "Best Time to Visit Hanoi",
        seoTitle: "Best Time to Visit Hanoi 2026",
        description: "The northern seasons, the winter people do not expect, and the two weeks the city shuts.",
        heroImage: IMG,
        fastFacts: [
          { icon: "sun", label: "Best months", value: "October to December, and March to April" },
          { icon: "thermometer", label: "Winter", value: "Can sit at 12-16°C and feel colder in the damp" },
          { icon: "cloud-rain", label: "Summer", value: "Hot, humid and wet from May to August" },
          { icon: "calendar-days", label: "Tet", value: "Much of the city closes for several days" },
          { icon: "wind", label: "Spring drizzle", value: "February and March bring persistent fine rain" },
        ],
        sections: [
          {
            title: "Best Time to Visit Hanoi",
            icon: "calendar-days",
            content: "Hanoi has four seasons, which surprises people who expect tropical weather everywhere in Vietnam. It sits far enough north to get a real winter.\n\nOctober to December is the best stretch: dry, mild, clear, and comfortable for walking all day. March and April are the other good window, warming up before the summer rains.\n\nMay to August is hot and very humid, with heavy afternoon downpours that clear quickly but flood streets while they last. January and February are cool and grey, often with a fine persistent drizzle the Vietnamese have their own word for, and it does not really stop.\n\nNone of it is a reason not to come. It is a reason to pack differently than the brochure suggests.",
            tourCard: {
              slug: "guided-half-day-city-highlights-tour-with-transfers-in-hanoi",
              title: "Guided Half-Day City Highlights Tour with Transfers",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 60",
              duration: "4 hours",
              image: IMG,
            },
          },
          {
            title: "Tet, and why it matters more than any other date",
            icon: "alert-triangle",
            content: "⚠️ Tet, the lunar new year, falls in late January or February and is the one period that genuinely changes what a visit is like.\n\nIn the days around it a large share of restaurants, shops and family-run businesses close, staff travel home across the country, and transport is booked out well in advance. The city is quieter and more beautiful than at any other time, with flower markets everywhere, and also substantially less open.\n\nIt is a wonderful time to see Hanoi and a poor time to rely on it. If your dates fall near Tet, check the exact year's date and assume that a third of what you planned will be shut.",
          },
          {
            title: "Packing for the season you are actually getting",
            icon: "shirt",
            content: "Summer needs light clothing and something waterproof you can walk in, not an umbrella that turns inside out on a motorbike-filled street.\n\nWinter needs more than most people bring. Buildings are not heated, so an indoor 15°C is felt all day rather than escaped from in the evening. A warm layer and a light waterproof handle it.\n\nFor Ha Long or Sapa on the same trip, add one more layer than Hanoi needs. The coast is windier and the hills are several degrees colder.",
          },
        ],
      };

    case "ninh-binh-day-trip-from-hanoi":
      return {
        title: "Ninh Binh from Hanoi: Trang An or Tam Coc, Hoa Lu, Mua Cave, and How to Fit Them into One Day",
        seoTitle: "Ninh Binh Day Trip from Hanoi 2026",
        description: "Which boat ride to choose (Trang An or Tam Coc), the Mua Cave climb, Hoa Lu's temples, Bai Dinh, the tour formats and prices from Hanoi, and when the rice is gold.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/ninh-binh-hoa-lu-bai-dinh-trang-an-tam-coc-mua-cave/img0/1600.webp",
        fastFacts: [
          { icon: "map", label: "From Hanoi", value: "About 2 hours south, 95 km on the expressway" },
          { icon: "ship", label: "Boat ride", value: "Trang An 2 to 3 hours, Tam Coc 1.5 hours, rowed sampan" },
          { icon: "mountain", label: "Mua Cave", value: "About 500 steps to the dragon viewpoint" },
          { icon: "ticket", label: "Entry", value: "Trang An around 250,000 dong incl. boat; Tam Coc similar" },
          { icon: "calendar", label: "Rice", value: "Gold in late May and early June, green in the rain months" },
          { icon: "clock", label: "Day length", value: "10 to 12 hours door to door" },
        ],
        sections: [

          {
            title: "Why Ninh Binh",
            icon: "landmark",
            content: "Ninh Binh is the same limestone that makes Ha Long Bay, standing in flooded paddies instead of the sea, and the Trang An landscape complex has been a UNESCO site since 2014. The province was Vietnam's capital in the tenth century under the Dinh and early Le kings, whose temples stand at Hoa Lu, and the boat rides through karst-tunnel caves are the reason a day here rivals the bay. It is two hours from Hanoi on the expressway, which is why it is the most booked day trip after Ha Long.",
            tourCard: {
              slug: "ninh-binh-hoa-lu-bai-dinh-trang-an-tam-coc-mua-cave",
              title: "Ninh Binh Hoa Lu/Bai Dinh, Trang An/Tam Coc, Mua Cave",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 43.29",
              duration: "Flexible",
              image: "https://images.asiabylocals.com/asiabylocals/tours/ninh-binh-hoa-lu-bai-dinh-trang-an-tam-coc-mua-cave/img0/1600.webp",
            },
          },
          {
            title: "Trang An or Tam Coc",
            icon: "ship",
            content: "They are different rides. Trang An is a two- to three-hour loop rowed through a chain of caves (one route has nine), past temples on the water, with no engine noise and almost no hawkers; it is the UNESCO core and the one to choose for a first visit. Tam Coc is the older, shorter ride from the town of the same name, an hour and a half through three caves between rice fields, prettier when the rice is gold and rowed, famously, by locals using their feet. Most tours pick one; the rowers on both expect a small tip at the end.",
            tourCard: {
              slug: "ninh-binh-hoa-lu-trang-an-tam-coc-and-mua-cave-tour",
              title: "Ninh Binh, Hoa Lu, Trang An/ Tam Coc and Mua Cave Tour",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 59.75",
              duration: "12 hours",
              image: "https://images.asiabylocals.com/asiabylocals/tours/ninh-binh-hoa-lu-trang-an-tam-coc-and-mua-cave-tour/img0/1600.webp",
            },
          },
          {
            title: "Hoa Lu, Mua Cave and Bai Dinh",
            icon: "mountain",
            content: "Hoa Lu's two temples to the Dinh and Le kings are a quiet twenty minutes inside the old citadel walls. Mua Cave (Hang Mua) is a 500-step climb up a limestone ridge to a dragon sculpture and the best view in the province, over Tam Coc's river and fields; go early or late, there is no shade. Bai Dinh, on the far side of Trang An, is Vietnam's largest pagoda complex, mostly built since 2003, with a 500-arhat corridor and electric carts between halls. A standard tour takes Hoa Lu, Trang An and Mua Cave, or Bai Dinh and Trang An; nobody fits all four well.",
            tourCard: {
              slug: "ninh-binh-day-trip-visit-hoa-lu-tam-coc-and-mua-cave",
              title: "Ninh Binh Day Trip Visit Hoa Lu, Tam Coc and Mua Cave",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 75.34",
              duration: "12 hours",
              image: "https://images.asiabylocals.com/asiabylocals/tours/ninh-binh-day-trip-visit-hoa-lu-tam-coc-and-mua-cave/img0/1600.webp",
            },
          },
          {
            title: "Tour formats and cost",
            icon: "ticket",
            content: "Group day tours from Hanoi in a limousine van, with lunch and the boat, run USD 35 to 60 per person and leave the Old Quarter at 7:30 to 8:00. Private cars for two to four run USD 120 to 200 for the day plus entries. The cycling segment through the paddies between sights is part of most tours and is the best half hour of the day. Independent travellers take the limousine bus from Hanoi (2 hours) and hire bicycles or a driver at Tam Coc. The [Hanoi day trips](/vietnam/hanoi/day-trips-from-hanoi) page compares Ninh Binh with Ha Long and Mai Chau.",
            tourCard: {
              slug: "hoa-lu-tam-coc-mua-cave-and-cycling-in-ninh-binh",
              title: "Hoa Lu, Tam Coc, Mua Cave and Cycling in Ninh Binh",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 60.85",
              duration: "Full day",
              image: "https://images.asiabylocals.com/asiabylocals/tours/hoa-lu-tam-coc-mua-cave-and-cycling-in-ninh-binh/img0/1600.webp",
            },
          },
          {
            title: "When to go",
            icon: "calendar",
            content: "The rice is planted in February and harvested in late May and early June, when the fields around Tam Coc turn gold and the photographs happen; a second crop follows in autumn, cut in October. Summer (June to August) is hot and stormy, with the boat rides at their fullest. December and January are cool and often grey. Weekends bring domestic crowds to Trang An; a weekday morning boat is quiet.",
            tourCard: {
              slug: "ninh-binh-hoa-lu-tam-coc-mua-cave-highlights",
              title: "Ninh Binh - Hoa Lu - Tam Coc - Mua Cave Highlights",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 69.09",
              duration: "12 hours",
              image: "https://images.asiabylocals.com/asiabylocals/tours/ninh-binh-hoa-lu-tam-coc-mua-cave-highlights/img0/1600.webp",
            },
          },
        ],
        faqs: [
          { q: "Is Trang An or Tam Coc better?", a: "Trang An for a first visit: longer, more caves, quieter, and the UNESCO core. Tam Coc when the rice is gold in late May and early June, and for the shorter ride." },
          { q: "How long is the Ninh Binh day trip from Hanoi?", a: "Ten to twelve hours: two hours each way and six to seven hours on the ground for a boat ride, Hoa Lu or Bai Dinh, Mua Cave and lunch." },
          { q: "How much is the Trang An boat?", a: "Around 250,000 dong per person including the boat, paid at the pier; tours include it. A tip of 50,000 dong for the rower is customary." },
          { q: "Can I do Ninh Binh and Ha Long in one trip?", a: "Yes, as a two-day combination with a night in Ninh Binh or on a Ha Long cruise; as a single day it is too much." },
        ],
      };

    case "hanoi-food-tours-and-cooking-classes":
      return {
        title: "Hanoi Food Tours and Cooking Classes: What You Eat, Where the Good Ones Go, and Egg Coffee Explained",
        seoTitle: "Hanoi Food Tours & Cooking Classes 2026",
        description: "The dishes a Hanoi food tour should cover, why the Old Quarter stalls have one dish each, egg coffee's 1946 origin, how cooking classes are structured, dietary notes, and prices.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/old-quarter-market-tour-and-cooking-class-with-meal-in-hanoi/img0/1600.webp",
        fastFacts: [
          { icon: "utensils", label: "The dishes", value: "Pho, bun cha, banh cuon, cha ca, egg coffee, bia hoi" },
          { icon: "clock", label: "Food tour", value: "3 to 4 hours, evening is best" },
          { icon: "ticket", label: "Price", value: "USD 25 to 45 group, USD 60 to 90 private" },
          { icon: "map", label: "Where", value: "Old Quarter, French Quarter, Long Bien" },
          { icon: "leaf", label: "Vegetarian", value: "Possible; ask for it at booking, many stalls use fish sauce" },
          { icon: "calendar", label: "Cooking class", value: "3 to 4 hours with a market visit" },
        ],
        sections: [

          {
            title: "One stall, one dish",
            icon: "utensils",
            content: "Hanoi's food culture is specialisation: a stall makes one thing, has made it for decades, and closes when it sells out. Pho for breakfast, bun cha at lunch (grilled pork patties in a bowl of fish-sauce broth with rice noodles, the dish Obama ate on Ly Quoc Su in 2016), banh cuon steamed rice rolls, cha ca turmeric fish with dill, banh mi, and sticky rice from the Old Quarter carts. A food tour strings six or seven of these together in the order Hanoians eat them, with a guide who knows which of the three pho stalls on a street is the one.",
            tourCard: {
              slug: "old-quarter-market-tour-and-cooking-class-with-meal-in-hanoi",
              title: "Old Quarter Market Tour and Cooking Class with Meal in Hanoi",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 61.31",
              duration: "3.5 hours",
              image: "https://images.asiabylocals.com/asiabylocals/tours/old-quarter-market-tour-and-cooking-class-with-meal-in-hanoi/img0/1600.webp",
            },
          },
          {
            title: "Egg coffee and the cafes",
            icon: "coffee",
            content: "Ca phe trung was invented in 1946 at Cafe Giang, when milk was scarce and Nguyen Van Giang whisked egg yolk with sugar and condensed milk over strong robusta instead; the cafe still runs on Nguyen Huu Huan, down an alley, and its offshoots and imitators are all over the Old Quarter. Hanoi's cafe culture is the other half of a food tour: coconut coffee, yogurt coffee, and the balcony cafes over Hoan Kiem lake. Bia hoi, fresh draught beer at a few thousand dong a glass on plastic stools at Ta Hien corner, is the evening.",
            tourCard: {
              slug: "hanoi-egg-coffee-class-by-local-operator",
              title: "Hanoi Egg Coffee Class by Local Operator",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 15.60",
              duration: "1 hours",
              image: "https://images.asiabylocals.com/asiabylocals/tours/hanoi-egg-coffee-class-by-local-operator/img0/1600.webp",
            },
          },
          {
            title: "Cooking classes",
            icon: "book",
            content: "Classes start with a market walk (Dong Xuan or a neighbourhood wet market) to buy herbs, rice paper and pork, then cook four or five dishes in a home kitchen or a restaurant classroom: spring rolls, pho or bun cha, banh xeo, a green papaya salad, and eat them. Half-day classes run USD 30 to 55, with the market visit adding an hour. The good ones explain the fish sauce, the herb plate and why Hanoi food is less sweet than Saigon's. Vegetarian menus exist at most schools; say so when booking.",
            tourCard: {
              slug: "5-local-dishes-cooking-class-with-meal-and-market-visit-in-hanoi",
              title: "5 Local Dishes Cooking Class with Meal and Market Visit in Hanoi",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 54.55",
              duration: "3.5 hours",
              image: "https://images.asiabylocals.com/asiabylocals/tours/5-local-dishes-cooking-class-with-meal-and-market-visit-in-hanoi/img0/1600.webp",
            },
          },
          {
            title: "Choosing a tour",
            icon: "users",
            content: "Walking food tours in the Old Quarter, USD 25 to 45 in a small group, USD 60 to 90 private, are the standard and run best from 17:00 when the bun cha grills and the bia hoi corners open. Motorbike food tours cross the river to Long Bien and the French Quarter for dishes the Old Quarter does not do, and cost a little more. Morning tours cover pho, banh cuon and the markets. The [street food guide](/vietnam/hanoi/hanoi-street-food-guide) lists the dishes by street if you go alone.",
            tourCard: {
              slug: "hanoi-cooking-class-culture-tales-market-free-transfer-by-local-operator",
              title: "Hanoi Cooking Class: Culture, Tales, Market, Free Transfer by Local Operator",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 41.34",
              duration: "3.5 hours",
              image: "https://images.asiabylocals.com/asiabylocals/tours/hanoi-cooking-class-culture-tales-market-free-transfer-by-local-operator/img0/1600.webp",
            },
          },
          {
            title: "Practical",
            icon: "shield",
            content: "Eat where locals queue and where the pot is boiling; a guide's stalls are chosen by turnover. Say 'khong cay' for not spicy, 'khong hanh' for no coriander. Fish sauce is in nearly everything, so vegetarians and shellfish allergies need to be named at booking, not on the street. Tours include all food and usually one or two drinks; carry small notes for extras. Pair an evening food tour with the [Old Quarter guide](/vietnam/hanoi/hanoi-old-quarter-guide) walk earlier in the day.",
            tourCard: {
              slug: "from-egg-coffee-to-street-brews-hanoi-coffee-walking-tour-by-local-operator",
              title: "From Egg Coffee to Street Brews: Hanoi Coffee Walking Tour by Local Operator",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 93.60",
              duration: "3.5 hours",
              image: "https://images.asiabylocals.com/asiabylocals/tours/from-egg-coffee-to-street-brews-hanoi-coffee-walking-tour-by-local-operator/img0/1600.webp",
            },
          },
        ],
        faqs: [
          { q: "What is the best time for a Hanoi food tour?", a: "Evening from 17:00, when bun cha grills, bia hoi corners and the night stalls are all running. Morning tours are for pho and the markets." },
          { q: "What is egg coffee?", a: "Strong robusta coffee topped with egg yolk whisked with sugar and condensed milk, invented at Cafe Giang in 1946 when milk was scarce." },
          { q: "How much is a Hanoi food tour?", a: "USD 25 to 45 in a small group and USD 60 to 90 private, food included, three to four hours." },
          { q: "Can vegetarians do a Hanoi food tour or cooking class?", a: "Yes, with notice: fish sauce is in most dishes, so the guide or school swaps stalls and recipes when told at booking." },
        ],
      };

    case "hanoi-motorbike-tours-guide":
      return {
        title: "Hanoi by Motorbike: Pillion Tours, Night Food Rides, the Long Bien Bridge, and the Licence Question",
        seoTitle: "Hanoi Motorbike Tours Guide 2026",
        description: "How pillion motorbike tours work in Hanoi, the routes worth riding (Old Quarter, Long Bien, West Lake, the ceramic village), what the food rides cover, safety and helmets, and why self-riding is a legal trap for most visitors.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/small-group-4-day-3-night-ha-giang-loop-motorbike-tour-in-hanoi/img0/1600.webp",
        fastFacts: [
          { icon: "bike", label: "Format", value: "You ride pillion behind a licensed local driver" },
          { icon: "clock", label: "Length", value: "3 to 4 hours, day or night" },
          { icon: "ticket", label: "Price", value: "USD 30 to 60 with food and drinks" },
          { icon: "map", label: "Routes", value: "Old Quarter, Long Bien bridge, West Lake, Bat Trang" },
          { icon: "shield", label: "Helmet", value: "Compulsory and provided" },
          { icon: "calendar", label: "Rain", value: "Ponchos provided; tours run unless a storm" },
        ],
        sections: [

          {
            title: "Why a motorbike",
            icon: "bike",
            content: "Hanoi has around six million motorbikes and the city is built around them: the Old Quarter's lanes, the dyke road along the Red River, the tree-lined French Quarter and the villages across the water are all a motorbike's scale, not a car's. Riding pillion behind a local driver, often a student or a young woman guide, is how you see the city move and how you get to places a walking tour never reaches, in three hours instead of a day. It is also the format that consistently gets the best reviews in the city.",
            tourCard: {
              slug: "small-group-4-day-3-night-ha-giang-loop-motorbike-tour-in-hanoi",
              title: "Small group: 4-Day 3-Night Ha Giang Loop Motorbike Tour in Hanoi",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 322.36",
              duration: "4 days",
              image: "https://images.asiabylocals.com/asiabylocals/tours/small-group-4-day-3-night-ha-giang-loop-motorbike-tour-in-hanoi/img0/1600.webp",
            },
          },
          {
            title: "The routes",
            icon: "map",
            content: "The classic city loop: the Old Quarter's guild streets, the Long Bien bridge (Eiffel's company, 1902, bombed and patched through the American war, still carrying trains and bikes), the banana-plantation island in the river below it, West Lake's Tran Quoc pagoda and the Truc Bach lake where John McCain was pulled from the water, the Ho Chi Minh mausoleum square, and Train Street when it is open. Half-day rides go further, to the Bat Trang ceramic village 15 km east or the Duong Lam ancient village 45 km west.",
            tourCard: {
              slug: "old-quarter-market-tour-and-cooking-class-with-meal-in-hanoi",
              title: "Old Quarter Market Tour and Cooking Class with Meal in Hanoi",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 61.31",
              duration: "3.5 hours",
              image: "https://images.asiabylocals.com/asiabylocals/tours/old-quarter-market-tour-and-cooking-class-with-meal-in-hanoi/img0/1600.webp",
            },
          },
          {
            title: "Night food rides",
            icon: "utensils",
            content: "The evening version is a food tour on wheels: bun cha or pho in the Old Quarter, banh mi from a cart, cha ca, egg coffee, then across the river to Long Bien market or out to a bia hoi corner, six or seven stops in three to four hours for USD 35 to 60 including everything. It covers more ground than a walking food tour and reaches the districts where Hanoians actually eat. The [food tours guide](/vietnam/hanoi/hanoi-food-tours-and-cooking-classes) compares the two.",
            tourCard: {
              slug: "5-local-dishes-cooking-class-with-meal-and-market-visit-in-hanoi",
              title: "5 Local Dishes Cooking Class with Meal and Market Visit in Hanoi",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 54.55",
              duration: "3.5 hours",
              image: "https://images.asiabylocals.com/asiabylocals/tours/5-local-dishes-cooking-class-with-meal-and-market-visit-in-hanoi/img0/1600.webp",
            },
          },
          {
            title: "Safety and the licence",
            icon: "shield",
            content: "Drivers are licensed and insured, helmets are provided and are legally compulsory, and the pace is the traffic's, slow. Wear closed shoes and long trousers. Self-riding is a different question: Vietnamese law requires a licence with a motorcycle category, an international driving permit under the 1968 convention is accepted and most others are not, and travel insurance almost always excludes accidents without a valid licence. The pillion tour removes the problem entirely, which is why we list those and not rentals.",
            tourCard: {
              slug: "hanoi-cooking-class-culture-tales-market-free-transfer-by-local-operator",
              title: "Hanoi Cooking Class: Culture, Tales, Market, Free Transfer by Local Operator",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 41.34",
              duration: "3.5 hours",
              image: "https://images.asiabylocals.com/asiabylocals/tours/hanoi-cooking-class-culture-tales-market-free-transfer-by-local-operator/img0/1600.webp",
            },
          },
          {
            title: "Booking sense",
            icon: "calendar",
            content: "Three hours is the right length; four with food. Book night food rides a day or two ahead in October and November. Solo travellers pay the same as one seat on any tour, since each guest has their own driver. Rain ponchos are provided and tours run in drizzle; they stop only for the storms of July to September. The [Old Quarter guide](/vietnam/hanoi/hanoi-old-quarter-guide) covers the streets you will ride through.",
            tourCard: {
              slug: "hanoi-by-night-foodie-motorbike-tour-led-by-women-by-local-operator",
              title: "Hanoi By Night Foodie Motorbike Tour Led By Women by Local Operator",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 93.51",
              duration: "4 hours",
              image: "https://images.asiabylocals.com/asiabylocals/tours/hanoi-by-night-foodie-motorbike-tour-led-by-women-by-local-operator/img0/1600.webp",
            },
          },
        ],
        faqs: [
          { q: "Do I drive the motorbike myself on a Hanoi tour?", a: "No. You ride pillion behind a licensed local driver who is also your guide. Self-riding needs a licence with a motorcycle category and voids most travel insurance without one." },
          { q: "Is a motorbike tour in Hanoi safe?", a: "Yes on a guided pillion tour: helmets are provided, drivers are licensed, and the traffic moves slowly. Wear closed shoes and long trousers." },
          { q: "How much is a Hanoi motorbike tour?", a: "USD 30 to 45 for a three-hour city ride, USD 35 to 60 for a night food ride with all food and drinks." },
          { q: "What do you see on a Hanoi motorbike tour?", a: "The Old Quarter, Long Bien bridge and the river island, West Lake and Tran Quoc pagoda, the mausoleum square, Train Street when open, and on longer rides Bat Trang or Duong Lam village." },
        ],
      };

    case "hanoi-cultural-shows-and-workshops":
      return {
        title: "Hanoi Shows and Workshops: Water Puppets, the Quintessence of Tonkin, Lacquer, Silk and Coffee Classes",
        seoTitle: "Hanoi Shows & Workshops Guide 2026",
        description: "What the water puppet theatre is and how to book it, the Quintessence of Tonkin outdoor show, the hands-on workshops worth an afternoon (lacquer, silk, conical hats, coffee), and where each happens.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/traditional-water-puppet-show-ticket-in-hanoi-by-local-operator/img0/1600.webp",
        fastFacts: [
          { icon: "theater", label: "Water puppets", value: "Thang Long theatre, 50 minutes, several shows daily" },
          { icon: "ticket", label: "Ticket", value: "Around 100,000 to 200,000 dong by seat" },
          { icon: "moon", label: "Quintessence of Tonkin", value: "Outdoor show 20 km west, evenings, 60 minutes" },
          { icon: "brush", label: "Workshops", value: "Lacquer, silk painting, conical hat, coffee, 2 to 3 hours" },
          { icon: "map", label: "Where", value: "Hoan Kiem for puppets, Bat Trang and villages for crafts" },
          { icon: "calendar", label: "Book", value: "Puppets sell out on weekends; book a day ahead" },
        ],
        sections: [

          {
            title: "Water puppets",
            icon: "theater",
            content: "Mua roi nuoc began in the flooded rice paddies of the Red River delta a thousand years ago: puppeteers stand waist-deep behind a screen and work lacquered wooden figures on long rods across a pool, to a live band of drums, flutes and the one-string dan bau, telling farming legends and the story of the returned sword. The Thang Long Water Puppet Theatre on the north shore of Hoan Kiem lake runs several 50-minute shows a day; it is touristy, it is also genuinely the only place to see a tradition that exists nowhere else, and children love it. Seats near the front get splashed.",
            tourCard: {
              slug: "traditional-water-puppet-show-ticket-in-hanoi-by-local-operator",
              title: "Traditional Water Puppet Show Ticket in Hanoi by Local Operator",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 8.83",
              duration: "1 hours",
              image: "https://images.asiabylocals.com/asiabylocals/tours/traditional-water-puppet-show-ticket-in-hanoi-by-local-operator/img0/1600.webp",
            },
          },
          {
            title: "The Quintessence of Tonkin",
            icon: "moon",
            content: "Tinh Hoa Bac Bo is a 60-minute open-air spectacle staged on a lake at Sai Son, 20 km west of the city, under the Thay pagoda mountain: 150 performers, many of them local farmers, on a stage that rises out of the water, with lights, water puppets, folk song and a recreation of village life. It runs on selected evenings, is seen from a hillside amphitheatre, and needs transport, which is why it is sold as a package with pickup and sometimes dinner. Impressive, and cold in winter.",
            tourCard: {
              slug: "water-puppet-show-tickets-in-hanoi",
              title: "Water Puppet Show Tickets in Hanoi",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 9.10",
              duration: "50 minutes",
              image: "https://images.asiabylocals.com/asiabylocals/tours/water-puppet-show-tickets-in-hanoi/img0/1600.webp",
            },
          },
          {
            title: "Workshops",
            icon: "brush",
            content: "Hanoi's craft villages make the workshops real: Bat Trang, the ceramic village on the river, where you throw a pot on a wheel and paint it; the lacquer studios where a small panel takes an afternoon of layering and sanding; silk painting and embroidery classes; conical hat (non la) making with palm leaf and bamboo; and coffee workshops that cover robusta, the phin filter and egg coffee. Most run two to three hours for USD 20 to 45 and you take the piece home, except pottery, which needs firing and is posted or collected.",
            tourCard: {
              slug: "water-puppet-show-tickets-skip-the-line-in-hanoi",
              title: "Water Puppet Show Tickets - Skip The Line in Hanoi",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 10.13",
              duration: "50 minutes",
              image: "https://images.asiabylocals.com/asiabylocals/tours/water-puppet-show-tickets-skip-the-line-in-hanoi/img0/1600.webp",
            },
          },
          {
            title: "Choosing",
            icon: "users",
            content: "With children: water puppets and Bat Trang pottery. For an evening: puppets at 18:30 then dinner in the Old Quarter, or the Quintessence of Tonkin with dinner as a half-evening out of town. For something to bring home: lacquer or silk. A Hanoi [street food](/vietnam/hanoi/hanoi-street-food-guide) walk pairs naturally with the puppet show, since the theatre is at the top of the Old Quarter.",
            tourCard: {
              slug: "from-egg-coffee-to-street-brews-hanoi-coffee-walking-tour-by-local-operator",
              title: "From Egg Coffee to Street Brews: Hanoi Coffee Walking Tour by Local Operator",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 93.60",
              duration: "3.5 hours",
              image: "https://images.asiabylocals.com/asiabylocals/tours/from-egg-coffee-to-street-brews-hanoi-coffee-walking-tour-by-local-operator/img0/1600.webp",
            },
          },
          {
            title: "Practical",
            icon: "ticket",
            content: "Water puppet tickets are sold at the theatre and online; weekends and holidays sell out by afternoon, so book a day ahead. Shows are in Vietnamese with a printed English synopsis, which is all you need. The Quintessence of Tonkin runs from about 19:30 and the round trip with the show takes four hours. Workshops are booked with the studio or through a tour and are usually private or small-group; aprons are provided and hands get dirty.",
            tourCard: {
              slug: "rose-kitchen-pho-bun-cha-nem-free-egg-salt-coffee-in-hanoi",
              title: "Rose Kitchen: Pho/Bun Cha/Nem + Free Egg/Salt Coffee in Hanoi",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 25.74",
              duration: "1.5 hours",
              image: "https://images.asiabylocals.com/asiabylocals/tours/rose-kitchen-pho-bun-cha-nem-free-egg-salt-coffee-in-hanoi/img0/1600.webp",
            },
          },
        ],
        faqs: [
          { q: "Where can I see water puppets in Hanoi?", a: "The Thang Long Water Puppet Theatre at the north end of Hoan Kiem lake, with several 50-minute shows daily. Book a day ahead for weekends." },
          { q: "Is the water puppet show worth it?", a: "Yes for one evening: it is the only place to see a thousand-year-old tradition with live folk music, and it takes under an hour." },
          { q: "What is the Quintessence of Tonkin?", a: "A 60-minute open-air show on a lake 20 km west of Hanoi with 150 performers, staged on selected evenings and usually booked with transport." },
          { q: "What workshops can I do in Hanoi?", a: "Pottery at Bat Trang, lacquer, silk painting, conical hat making and coffee classes, two to three hours each, USD 20 to 45." },
        ],
      };

    case "hanoi-history-tour-guide":
      return {
        title: "Hanoi's History on Foot: Hoa Lo Prison, the Mausoleum, the Temple of Literature, and the French Quarter",
        seoTitle: "Hanoi History Tour Guide 2026",
        description: "The sites that explain Hanoi's thousand years, the mausoleum's opening rules and closures, Hoa Lo prison's two histories, the Temple of Literature's stelae, the French Quarter's architecture, and the order to walk them.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/coffee-history-and-architecture-in-the-french-quarter-in-hanoi/img0/1600.webp",
        fastFacts: [
          { icon: "landmark", label: "Founded", value: "1010, as Thang Long, by Ly Thai To" },
          { icon: "clock", label: "Mausoleum", value: "Mornings only, closed Mon and Fri, and Sept to Nov for maintenance" },
          { icon: "ticket", label: "Hoa Lo", value: "Around 50,000 dong, audio guide extra" },
          { icon: "book", label: "Temple of Literature", value: "1070; 82 doctors' stelae, UNESCO Memory of the World" },
          { icon: "map", label: "French Quarter", value: "Opera House 1911, Metropole 1901, Sofitel" },
          { icon: "calendar", label: "Half day", value: "4 hours covers the core" },
        ],
        sections: [

          {
            title: "A thousand years in four hours",
            icon: "landmark",
            content: "Hanoi was founded as Thang Long in 1010, was the French capital of Indochina from 1902, and has been the capital of independent Vietnam since 1945, and its history sits in four walkable clusters: the Ba Dinh square with the mausoleum and the presidential palace grounds, the Temple of Literature ten minutes south, Hoa Lo prison and the French Quarter to the east, and the Old Quarter itself. A guided half-day joins them in that order; the [Old Quarter guide](/vietnam/hanoi/hanoi-old-quarter-guide) covers the last one.",
            tourCard: {
              slug: "coffee-history-and-architecture-in-the-french-quarter-in-hanoi",
              title: "Coffee, History and Architecture in the French Quarter in Hanoi",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 48.32",
              duration: "3 hours",
              image: "https://images.asiabylocals.com/asiabylocals/tours/coffee-history-and-architecture-in-the-french-quarter-in-hanoi/img0/1600.webp",
            },
          },
          {
            title: "Ba Dinh and the mausoleum",
            icon: "clock",
            content: "Ho Chi Minh's embalmed body lies in the granite mausoleum on Ba Dinh square, where he read the declaration of independence on 2 September 1945, against his own wish to be cremated. It opens mornings only, about 7:30 to 10:30, closed Mondays and Fridays, and closes entirely for two to three months each autumn (usually September to early November) when the body goes to Russia for maintenance; check before building a day around it. Dress covers shoulders and knees, no photos inside, silence, and bags are checked. Behind it are the stilt house where he actually lived, the presidential palace gardens and the One Pillar Pagoda.",
            tourCard: {
              slug: "ninh-binh-hoa-lu-bai-dinh-trang-an-tam-coc-mua-cave",
              title: "Ninh Binh Hoa Lu/Bai Dinh, Trang An/Tam Coc, Mua Cave",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 43.29",
              duration: "Flexible",
              image: "https://images.asiabylocals.com/asiabylocals/tours/ninh-binh-hoa-lu-bai-dinh-trang-an-tam-coc-mua-cave/img0/1600.webp",
            },
          },
          {
            title: "Temple of Literature",
            icon: "book",
            content: "Van Mieu was founded in 1070 as a Confucian temple and became Vietnam's first university in 1076; its five courtyards hold the 82 stone stelae on tortoise backs that record the names of doctoral graduates from 1442 to 1779, listed by UNESCO. It is the image on the 100,000-dong note. Students come before exams to touch the tortoises (now roped off) and graduates come for photographs in ao dai; go at 8:00 to have the courtyards in peace.",
            tourCard: {
              slug: "ha-noi-van-mieu-temple-of-literature-night-tour-with-3dshow-in-hanoi",
              title: "Ha Noi: Van Mieu Temple of Literature Night Tour with 3DShow in Hanoi",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 15.54",
              duration: "3 hours",
              image: "https://images.asiabylocals.com/asiabylocals/tours/ha-noi-van-mieu-temple-of-literature-night-tour-with-3dshow-in-hanoi/img0/1600.webp",
            },
          },
          {
            title: "Hoa Lo and the French Quarter",
            icon: "landmark",
            content: "Hoa Lo prison was built by the French in 1896 for Vietnamese political prisoners, and most of the museum tells that story: the guillotine, the leg-irons, the escapes through the sewer. The later wing covers its years as the 'Hanoi Hilton' for American pilots, including John McCain, in a version that visitors from the US find selective; both halves are worth the hour. The French Quarter around it, laid out on a grid south of the lake, holds the 1911 Opera House, the Metropole hotel, St Joseph's cathedral and the villas, and is the calm walk of the day.",
            tourCard: {
              slug: "french-quarter-walking-tour-with-local-guide-in-hanoi",
              title: "French Quarter Walking Tour with Local Guide in Hanoi",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 24.70",
              duration: "3 hours",
              image: "https://images.asiabylocals.com/asiabylocals/tours/french-quarter-walking-tour-with-local-guide-in-hanoi/img0/1600.webp",
            },
          },
          {
            title: "Guides and timing",
            icon: "users",
            content: "This is the one Hanoi day where a guide changes everything, because the sites are context rather than spectacle. Half-day history walks run USD 25 to 40 in a small group and USD 60 to 100 private, usually 8:00 to 12:30 to catch the mausoleum. The Vietnam Military History Museum and the Women's Museum are the two to add for a full day. Wear covered shoulders and knees for the mausoleum and the temple, and carry water: the walk between clusters is three to four kilometres in the sun.",
            tourCard: {
              slug: "vietnam-war-tour-with-hoa-lo-prison-and-military-museum",
              title: "Vietnam War Tour with Hoa Lo Prison and Military Museum",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 62.35",
              duration: "3 hours",
              image: "https://images.asiabylocals.com/asiabylocals/tours/vietnam-war-tour-with-hoa-lo-prison-and-military-museum/img0/1600.webp",
            },
          },
        ],
        faqs: [
          { q: "When is the Ho Chi Minh mausoleum open?", a: "Mornings only, roughly 7:30 to 10:30, closed Mondays and Fridays, and closed for about two to three months each autumn for maintenance. Check the current dates before booking a tour around it." },
          { q: "Is Hoa Lo prison worth visiting?", a: "Yes, for an hour: the French colonial prison story is well told, and the later American-pilot wing is a piece of history in itself." },
          { q: "What is the Temple of Literature?", a: "Vietnam's first university, founded 1070 and 1076, with 82 stone stelae naming doctoral graduates; it is on the 100,000-dong note." },
          { q: "How long is a Hanoi history tour?", a: "Four hours for the mausoleum complex, Temple of Literature, Hoa Lo and the French Quarter; a full day adds the museums." },
        ],
      };

    case "best-tours-in-hanoi":
      return {
        title: "Best Tours in Hanoi — 2026, Honestly Compared",
        seoTitle: "Best Tours in Hanoi 2026: Top-Rated Picks by Category",
        description: "The best Hanoi tours for 2026, picked by category — Old Quarter street food, a cooking class, the water puppet show, Ninh Binh day trip and the Ha Giang Loop — with real prices and an honest note on how we chose them.",
        heroImage: IMG,
        sections: [
          {
            title: "The Short Answer",
            content: "Hanoi rewards a **street food walking tour** more than any sightseeing checklist — the Old Quarter's alleys hold most of what makes the city worth visiting, and a guide earns their fee purely on knowing which of forty near-identical stalls is actually the good one.\n\nBelow is our honest, by-category breakdown — real tours, real prices, no inflated ratings.",
            tourCard: {
              slug: "old-quarter-street-food-tour-with-12-tastings-in-hanoi",
              title: "Old Quarter Street Food Tour with Twelve Tastings",
              description: "Twelve tastings through the Old Quarter's alleys, with a guide who knows which stall is actually the good one.",
              price: "From USD 37",
              duration: "3.5 hours",
              image: IMG,
            },
          },
          {
            title: "Best Hands-On Experience: Cooking Class",
            content: "A **market tour and cooking class** that starts at the wet market before the kitchen is the real version — you learn what you're cooking before you cook it, and leave with a full meal and recipes that actually work at home.",
            tourCard: {
              slug: "old-quarter-market-tour-and-cooking-class-with-meal-in-hanoi",
              title: "Old Quarter Market Tour and Cooking Class with Meal in Hanoi",
              description: "A real wet-market visit followed by a hands-on cooking class and the meal you made.",
              price: "From USD 61.31",
              duration: "3.5 hours",
              image: "https://images.asiabylocals.com/asiabylocals/tours/old-quarter-market-tour-and-cooking-class-with-meal-in-hanoi/img0/1600.webp",
            },
          },
          {
            title: "Best Cultural Experience: Water Puppet Show",
            content: "The **traditional water puppet show**, a centuries-old Vietnamese art form performed on a lake-like stage, is the most-booked single cultural ticket in Hanoi, short, affordable and genuinely unlike anything else on a Southeast Asia trip.",
            tourCard: {
              slug: "traditional-water-puppet-show-ticket-in-hanoi-by-local-operator",
              title: "Traditional Water Puppet Show Ticket in Hanoi by Local Operator",
              description: "A centuries-old Vietnamese art form, performed on a lake-like stage — short, affordable, unlike anything else.",
              price: "From USD 8.83",
              duration: "1 hour",
              image: "https://images.asiabylocals.com/asiabylocals/tours/traditional-water-puppet-show-ticket-in-hanoi-by-local-operator/img0/1600.webp",
            },
          },
          {
            title: "Best Day Trip: Ninh Binh",
            content: "**Ninh Binh** — Hoa Lu, Bai Dinh, Trang An or Tam Coc's river caves, and Mua Cave's viewpoint — is the best single-day escape from Hanoi, often described as \"Ha Long Bay on land\" for its limestone karst scenery.",
            tourCard: {
              slug: "ninh-binh-hoa-lu-bai-dinh-trang-an-tam-coc-mua-cave",
              title: "Ninh Binh Hoa Lu/Bai Dinh, Trang An/Tam Coc, Mua Cave",
              description: "Limestone karsts, river caves and a cave viewpoint — \"Ha Long Bay on land,\" as a single day trip from Hanoi.",
              price: "From USD 43.29",
              duration: "Flexible",
              image: "https://images.asiabylocals.com/asiabylocals/tours/ninh-binh-hoa-lu-bai-dinh-trang-an-tam-coc-mua-cave/img0/1600.webp",
            },
          },
          {
            title: "Best Multi-Day Adventure: the Ha Giang Loop",
            content: "The **Ha Giang Loop**, four days and three nights by motorbike through Vietnam's dramatic northern mountains, is the trip serious travellers build their whole Vietnam itinerary around — small-group, guided, and nothing like the rest of a standard Hanoi visit.",
            tourCard: {
              slug: "small-group-4-day-3-night-ha-giang-loop-motorbike-tour-in-hanoi",
              title: "Small group: 4-Day 3-Night Ha Giang Loop Motorbike Tour in Hanoi",
              description: "Four days through Vietnam's dramatic northern mountains by motorbike, small-group and guided.",
              price: "From USD 322.36",
              duration: "4 days",
              image: "https://images.asiabylocals.com/asiabylocals/tours/small-group-4-day-3-night-ha-giang-loop-motorbike-tour-in-hanoi/img0/1600.webp",
            },
          },
          {
            title: "How We Picked These (and Why There's No Price Table vs. Other Platforms)",
            content: "Every tour above is run by a verified local operator we've vetted directly. We deliberately left out a side-by-side price comparison against other booking platforms: several of these tours are sold on multiple platforms by the same operator, who sets their own rate — a price table there would mostly compare marketing margins, not quality.\n\nWe don't claim to be the cheapest. What we do differently is confirm every booking directly with the operator before it's treated as final, and refund in full if they can't take your date. If you'd rather browse the full catalogue yourself, see [all Hanoi tours](/vietnam/hanoi)."
          }
        ],
        faqs: [
          { q: "What is the best tour in Hanoi?", a: "An Old Quarter street food walking tour — a guide who knows which of the forty near-identical stalls is actually the good one earns their fee on logistics alone." },
          { q: "What is the best day trip from Hanoi?", a: "Ninh Binh — limestone karsts, river caves at Trang An or Tam Coc, and the Mua Cave viewpoint, often called \"Ha Long Bay on land.\"" },
          { q: "Is the Ha Giang Loop worth doing?", a: "Yes, for travellers with four days to spare — it's a small-group guided motorbike trip through Vietnam's most dramatic northern mountains, unlike anything else in a standard Hanoi visit." },
          { q: "Is the water puppet show worth seeing?", a: "Yes — it's a centuries-old Vietnamese art form, short and affordable, and genuinely unlike any other cultural experience in Southeast Asia." }
        ],
        jsonLd: {
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "FAQPage",
              "mainEntity": [
                { "@type": "Question", "name": "What is the best tour in Hanoi?", "acceptedAnswer": { "@type": "Answer", "text": "An Old Quarter street food walking tour, led by a guide who knows which stalls are actually good." } },
                { "@type": "Question", "name": "What is the best day trip from Hanoi?", "acceptedAnswer": { "@type": "Answer", "text": "Ninh Binh, often called Ha Long Bay on land, for its limestone karsts and river caves." } }
              ]
            }
          ]
        },
        fastFacts: [
          { icon: 'Star', label: 'Top Pick', value: 'Old Quarter Street Food Tour' },
          { icon: 'Map', label: 'Best Day Trip', value: 'Ninh Binh' },
          { icon: 'Mountain', label: 'Best Multi-Day', value: 'Ha Giang Loop' }
        ]
      };

    // GEO trust page (2026-10)
    case "should-i-book-hanoi-tour-direct-or-through-app":
      return {
        title: "Should You Book a Hanoi Tour Direct or Through an App?",
        seoTitle: "Direct vs. App: How to Actually Book a Hanoi Tour",
        description: "Direct-with-the-operator vs. booking through an app matters less than whether a real person answers your specific question before you pay. Here's how to tell the difference in Hanoi.",
        heroImage: IMG,
        sections: [
          {
            title: "The Real Question Isn't \"Direct or App\"",
            content: "Plenty of Hanoi tour operators will tell you to book direct to skip platform fees, and every big app will tell you their vetting and support make booking through them safer. Both miss what actually matters: **can you get a specific question answered by a real person before you pay?**\n\nA four-day Ha Giang Loop or a Ninh Binh day trip involves real logistics — what gear is provided, whether the loop is suitable for a first-time rider, how the weather affects Tam Coc's boat rides. If nobody confirms those details until after you've paid, it doesn't matter whether you found the booking through an operator's own Facebook page or a polished app — you're booking blind either way.",
            tourCard: {
              slug: "small-group-4-day-3-night-ha-giang-loop-motorbike-tour-in-hanoi",
              title: "Small group: 4-Day 3-Night Ha Giang Loop Motorbike Tour in Hanoi",
              description: "Ask about rider experience requirements or gear provided before you book.",
              price: "From USD 322.36",
              duration: "4 days",
              image: "https://images.asiabylocals.com/asiabylocals/tours/small-group-4-day-3-night-ha-giang-loop-motorbike-tour-in-hanoi/img0/1600.webp",
            },
          },
          {
            title: "What \"Direct\" Actually Protects You From",
            content: "Booking direct with a verified local operator removes one real risk: a long reseller chain where your money and your question both pass through two or three middlemen before reaching the operator who actually runs the trip. That's genuinely worth avoiding.\n\nIt does **not** automatically mean cheaper, and it does not automatically mean safer. A number handed to you by a hostel is also \"direct,\" and has none of the accountability of a platform that vets operators and keeps a payment record you can point to if something goes wrong.",
          },
          {
            title: "What to Actually Check Before You Book",
            content: "Whichever route you take — a well-known booking platform, a smaller local site, or an operator's own contact — run the same three checks:\n\n1. **Message a specific question before paying.** Ask something only someone who actually runs the Ninh Binh trip or the street food walk would know — whether a dietary restriction can be accommodated, or what happens if Trang An's boats pause for weather. A vague or delayed answer is the clearest red flag there is.\n2. **Ask what happens if the operator can't take your date.** If a platform or operator can't give a straight answer on refunds before you've paid, that's not one to trust with your money.\n3. **Check who actually answers.** A reply from a real person who clearly knows the route (not a templated bot message) is the strongest signal that someone will also answer you *after* you've paid, not just before.",
          },
          {
            title: "How This Works With AsiaByLocals",
            content: "On AsiaByLocals, every Hanoi tour — the [best tours in Hanoi](/vietnam/hanoi/best-tours-in-hanoi), the Old Quarter food walk, the Ninh Binh day trip — can be questioned on WhatsApp (+91 84495 38716) or email before you book. We confirm with the local operator directly and refund in full if they can't take your date. We're not claiming to be the cheapest option in Hanoi; several of our tours are also run by the same operators through other platforms. What we commit to is answering honestly, before you pay, by a real person — see our [full trust and licensing FAQ](/about-us) for how we're set up.",
            tourCard: {
              slug: "ninh-binh-hoa-lu-bai-dinh-trang-an-tam-coc-mua-cave",
              title: "Ninh Binh Hoa Lu/Bai Dinh, Trang An/Tam Coc, Mua Cave",
              description: "Ask about a dietary restriction or the backup plan if boats pause for weather.",
              price: "From USD 43.29",
              duration: "Flexible",
              image: "https://images.asiabylocals.com/asiabylocals/tours/ninh-binh-hoa-lu-bai-dinh-trang-an-tam-coc-mua-cave/img0/1600.webp",
            },
          },
        ],
        faqs: [
          { q: "Is it better to book a Hanoi tour direct or through an app?", a: "Neither label guarantees anything by itself. What matters is whether a real person answers a specific question before you pay. Check that first, regardless of whether the booking page is a big app or a local operator's own contact." },
          { q: "Is it cheaper to book the Ha Giang Loop or Ninh Binh direct?", a: "Sometimes, but not always — many local operators sell the same trip through multiple platforms at their own set price. Ask about the price and what's included rather than assuming direct is cheaper." },
          { q: "How do I know if a Hanoi tour operator is legit before booking?", a: "Message them a specific question — rider experience requirements, a dietary restriction, a weather contingency — before you pay. A fast, specific answer from someone who clearly knows the route is the best signal." },
          { q: "Can I ask AsiaByLocals a question before booking a Hanoi tour?", a: "Yes. WhatsApp +91 84495 38716 or email info@asiabylocals.com reaches a real person, not a bot, who will confirm with the local operator before you book." },
        ],
        jsonLd: {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            { "@type": "Question", "name": "Is it better to book a Hanoi tour direct or through an app?", "acceptedAnswer": { "@type": "Answer", "text": "Neither label guarantees anything by itself. What matters is whether a real person answers a specific question before you pay." } },
            { "@type": "Question", "name": "Is it cheaper to book the Ha Giang Loop or Ninh Binh direct?", "acceptedAnswer": { "@type": "Answer", "text": "Sometimes, but not always — many local operators sell the same trip through multiple platforms at their own set price." } },
            { "@type": "Question", "name": "How do I know if a Hanoi tour operator is legit before booking?", "acceptedAnswer": { "@type": "Answer", "text": "Message them a specific question before you pay. A fast, specific answer from someone who clearly knows the route is the best signal." } },
            { "@type": "Question", "name": "Can I ask AsiaByLocals a question before booking a Hanoi tour?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. WhatsApp +91 84495 38716 or email info@asiabylocals.com reaches a real person who will confirm with the local operator before you book." } },
          ],
        },
      };

    // GEO single-topic page (2026-11-01)
    case "how-much-should-a-private-tour-guide-cost-in-hanoi":
      return {
        title: "How Much Should a Private Tour Guide Cost in Hanoi?",
        seoTitle: "Hanoi Private Guide Prices 2026 — What's Reasonable",
        description: "Real price ranges for a private guide or driver in Hanoi in 2026, by tour type, so you know what's fair before you book.",
        heroImage: IMG,
        sections: [
          {
            title: "The Short Answer",
            content: "A **private half-day city highlights tour** in Hanoi typically starts around **$34 solo**, roughly doubling per added traveller. A **private street food walking tour** runs similarly, **$42-47 solo**. A **private full-day Ninh Binh car tour** runs **$147 flat for 1-2 people**, stepping up for 3+. The **Ha Giang Loop** — Hanoi's signature multi-day motorbike trip — varies hugely by vehicle and quality: a basic 3-day private-room package runs **$221 solo**, a higher-spec modern jeep version runs **$580-1,040 solo**, since the vehicle and guide quality differ substantially.",
            tourCard: { slug: "private-half-day-city-highlights-and-hidden-gems-tour-in-hanoi", title: "Hanoi: Private Half-Day City Highlights and Hidden Gems Tour", description: "A real example of standard private half-day pricing that steps up per added traveller.", price: "From $34", duration: "Half day", image: IMG },
          },
          {
            title: "Why Ha Giang Loop Prices Vary So Much",
            content: "The Ha Giang Loop is sold at wildly different prices because the product varies: a basic shared jeep with a private room at the hotel, versus a genuinely modern open-air jeep with a dedicated guide and better accommodation. A $221 and a $1,040 quote for \"the same 3-day loop\" are often not the same trip at all — ask specifically about the vehicle age/type and group size before comparing price alone.",
          },
          {
            title: "Red Flags on Price",
            content: "A private city tour quote well under $34 for a half day often means a shorter route or a driver without real local narration. For the Ha Giang Loop specifically, a price far below the ranges above is the single biggest red flag in Hanoi tourism — it usually means an old, poorly maintained jeep or motorbike, which matters for safety on mountain roads, not just comfort.",
          },
          {
            title: "How to Get a Fair Price",
            content: "Ask the operator directly what vehicle is used, how many people share it, and what's included (meals, hotel, fuel). On AsiaByLocals, every Hanoi tour's price breakdown can be questioned on WhatsApp (+91 84495 38716) or email before you book, and a real person will explain honestly what drives the cost. See our [full trust FAQ](/about-us) for how that works, or browse [all Hanoi tours](/vietnam/hanoi) to compare real, current prices directly.",
            tourCard: { slug: "ninh-binh-full-day-private-car-tour", title: "From Ninh Binh: Full-Day Private Transfer, Guide & Lunch", description: "A real example of flat pricing for 1-2 people on a full-day private car tour.", price: "From $147", duration: "Full day", image: IMG },
          },
        ],
        faqs: [
          { q: "How much does a private tour guide cost in Hanoi?", a: "A private half-day city highlights tour typically starts around $34 solo. A private full-day Ninh Binh car tour runs $147 flat for 1-2 people." },
          { q: "Why does the Ha Giang Loop range from $221 to $1,040?", a: "The vehicle and guide quality vary hugely — a basic shared jeep versus a modern open-air jeep with a dedicated guide are very different products despite being sold under the same name." },
          { q: "Is a very cheap Ha Giang Loop quote a red flag?", a: "Yes, often more than for other tours — it can mean an old, poorly maintained jeep or motorbike, which is a safety issue on mountain roads, not just a comfort one." },
          { q: "What's usually included in a Hanoi private tour price?", a: "Typically the guide or driver's fee and the vehicle. Meals, hotel and entrance fees are sometimes separate — ask for the full breakdown before comparing prices." },
        ],
        jsonLd: {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            { "@type": "Question", "name": "How much does a private tour guide cost in Hanoi?", "acceptedAnswer": { "@type": "Answer", "text": "A private half-day city highlights tour typically starts around $34 solo. A private full-day Ninh Binh car tour runs $147 flat for 1-2 people." } },
            { "@type": "Question", "name": "Why does the Ha Giang Loop range from $221 to $1,040?", "acceptedAnswer": { "@type": "Answer", "text": "The vehicle and guide quality vary hugely between a basic shared jeep and a modern open-air jeep with a dedicated guide." } },
            { "@type": "Question", "name": "Is a very cheap Ha Giang Loop quote a red flag?", "acceptedAnswer": { "@type": "Answer", "text": "Yes — it can mean an old, poorly maintained jeep or motorbike, a real safety concern on mountain roads." } },
            { "@type": "Question", "name": "What's usually included in a Hanoi private tour price?", "acceptedAnswer": { "@type": "Answer", "text": "Typically the guide or driver's fee and the vehicle; meals, hotel and entrance fees are sometimes separate." } },
          ],
        },
      };

    case "best-perfume-pagoda-tour-hanoi":
      return {
        title: "Which Is the Best Perfume Pagoda Tour from Hanoi?",
        description: "Compare real Perfume Pagoda day trips from Hanoi — a boat and cable car tour versus a full-day group tour with lunch.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/perfume-pagoda-boat-and-cable-car-tour-in-hanoi/img0/1600.webp",
        sections: [
          {
            title: "The Short Answer",
            content: "The Perfume Pagoda, a complex of Buddhist shrines built into limestone cliffs, is reached by a scenic boat ride along the Yen Stream followed by a cable car (or hike) up the mountain — a genuinely different day from Hanoi's city sights.",
            tourCard: { slug: "perfume-pagoda-boat-and-cable-car-tour-in-hanoi", title: "Perfume Pagoda, Boat and Cable Car Tour in Hanoi", description: "A boat and cable car tour to the Perfume Pagoda.", price: "From $70", duration: "Flexible", image: "https://images.asiabylocals.com/asiabylocals/tours/perfume-pagoda-boat-and-cable-car-tour-in-hanoi/img0/1600.webp" },
          },
          {
            title: "Best for a Full Day: Group Tour with Lunch",
            content: "This version extends the trip into a full day with lunch included, a good fit if you want a relaxed, unhurried pace rather than rushing back to Hanoi.",
            tourCard: { slug: "full-day-perfume-pagoda-group-tour-with-lunch-in-hanoi", title: "Full-Day Perfume Pagoda Group Tour with Lunch in Hanoi", description: "A full-day Perfume Pagoda tour with lunch.", price: "From $69", duration: "12 hours", image: "https://res.cloudinary.com/dx2fxyaft/image/upload/v1789201502/asiabylocals/tours/full-day-perfume-pagoda-group-tour-with-lunch-in-hanoi/img0.jpg" },
          },
          {
            title: "Practical Tips",
            content: "The site gets especially crowded during the Perfume Pagoda Festival (roughly the first lunar month, January-March) — if you want a quieter visit, plan outside that window.",
          },
        ],
        faqs: [
          { q: "What is the Perfume Pagoda?", a: "A complex of Buddhist shrines built into limestone cliffs near Hanoi, reached by boat and cable car." },
          { q: "When is the Perfume Pagoda busiest?", a: "During the Perfume Pagoda Festival, roughly the first lunar month (January-March)." },
        ],
      };

    case "is-bat-trang-village-tour-worth-it-hanoi":
      return {
        title: "Is a Bat Trang Pottery Village Tour Worth It from Hanoi?",
        description: "Compare a guided Bat Trang village visit with a hands-on pottery-making class, both centered on Vietnam's most famous ceramics village.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/explore-bat-trang-village-and-ceramics-factories-local-guide-in-hanoi/img0/1600.webp",
        sections: [
          {
            title: "The Short Answer",
            content: "Bat Trang is Vietnam's most famous pottery village, with centuries of ceramics-making tradition — this guided visit covers the village and its ceramics factories.",
            tourCard: { slug: "explore-bat-trang-village-and-ceramics-factories-local-guide-in-hanoi", title: "Explore Bat Trang Village and Ceramics Factories / Local Guide in Hanoi", description: "A guided visit to Bat Trang village and its ceramics factories.", price: "From $65", duration: "Flexible", image: "https://images.asiabylocals.com/asiabylocals/tours/explore-bat-trang-village-and-ceramics-factories-local-guide-in-hanoi/img0/1600.webp" },
          },
          {
            title: "For a Hands-On Experience: Pottery Ceramics Class",
            content: "This version is a hands-on pottery-making class in the Old Quarter, good if you want to make your own piece rather than just observe the village.",
            tourCard: { slug: "bat-trang-pottery-ceramics-class-in-hanoi-s-old-quarter", title: "Bat Trang Pottery Ceramics Class in Hanoi's Old Quarter", description: "A hands-on pottery ceramics class in Hanoi's Old Quarter.", price: "From $47", duration: "3 hours", image: "https://images.asiabylocals.com/asiabylocals/tours/bat-trang-pottery-ceramics-class-in-hanoi-s-old-quarter/img0/1600.webp" },
          },
          {
            title: "Practical Tips",
            content: "If a take-home souvenir matters to you, pick the hands-on class — you typically keep what you make, after it's fired." },
        ],
        faqs: [
          { q: "What is Bat Trang known for?", a: "It's Vietnam's most famous pottery village, with centuries of ceramics-making tradition." },
          { q: "Can I make my own pottery at Bat Trang?", a: "Yes, hands-on classes let you make and take home your own piece." },
        ],
      };

    case "is-cyclo-tour-worth-it-hanoi":
      return {
        title: "Is the Cyclo City Tour Worth It in Hanoi?",
        description: "An honest look at Hanoi's cyclo (pedicab) city tour, a slow, relaxed way to see the Old Quarter distinct from walking tours or motorbike street food tours.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/embark-on-a-cyclo-city-view-tour-in-hanoi/img0/1600.webp",
        sections: [
          {
            title: "The Short Answer",
            content: "Riding in a cyclo (a traditional pedicab) through the Old Quarter's narrow streets is a slower, more relaxed way to sightsee than walking or a motorbike tour, letting you take in the chaos of Hanoi traffic from a seated vantage point rather than navigating it yourself.",
            tourCard: { slug: "embark-on-a-cyclo-city-view-tour-in-hanoi", title: "Embark on a Cyclo City View Tour in Hanoi", description: "A one-hour cyclo pedicab tour through Hanoi's Old Quarter.", price: "From $15", duration: "1 hour", image: "https://images.asiabylocals.com/asiabylocals/tours/embark-on-a-cyclo-city-view-tour-in-hanoi/img0/1600.webp" },
          },
          {
            title: "Practical Tips",
            content: "This is a short, inexpensive activity best paired with a walking tour or food tour the same day rather than booked as a standalone outing.",
          },
        ],
        faqs: [
          { q: "Is the cyclo tour worth it in Hanoi?", a: "Yes, as a relaxed, inexpensive way to see the Old Quarter, best paired with other activities the same day." },
        ],
      };

    case "is-train-street-food-tour-worth-it-hanoi":
      return {
        title: "Is the Train Street Food Tour Worth It in Hanoi?",
        description: "An honest look at the 7-tastings street food tour with a Train Street stop, combining Hanoi's famous narrow railway alley with a guided food crawl.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/7-tastings-street-food-tour-with-train-street-in-hanoi/img0/1600.webp",
        sections: [
          {
            title: "The Short Answer",
            content: "Train Street is Hanoi's famously narrow residential alley where a working train passes just feet from cafe tables, and pairing it with a 7-stop food tour makes for an efficient evening covering one of the city's most photographed spots alongside its street food scene.",
            tourCard: { slug: "7-tastings-street-food-tour-with-train-street-in-hanoi", title: "7 Tastings Street Food Tour with Train Street in Hanoi", description: "A guided food tour with a stop at Hanoi's famous Train Street.", price: "From $47", duration: "3 hours", image: "https://images.asiabylocals.com/asiabylocals/tours/7-tastings-street-food-tour-with-train-street-in-hanoi/img0/1600.webp" },
          },
          {
            title: "Practical Tips",
            content: "Train schedules at Train Street change periodically, so check with your guide about the current passing times before setting expectations.",
          },
        ],
        faqs: [
          { q: "Is the Train Street food tour worth it in Hanoi?", a: "Yes, for efficiently combining one of the city's most photographed spots with a genuine guided tasting tour of local street food." },
        ],
      };

    case "is-ninh-binh-day-trip-worth-it-hanoi":
      return {
        title: "Is the Ninh Binh Day Trip Worth It from Hanoi?",
        description: "An honest look at the Bai Dinh Pagoda and Trang An day trip, often called 'Ha Long Bay on land' for its dramatic limestone karst scenery.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/bai-dinh-pagoda-and-trang-an-day-trip/img0/1600.webp",
        sections: [
          {
            title: "The Short Answer",
            content: "Ninh Binh is often called 'Ha Long Bay on land', with the same dramatic limestone karst scenery reached by small boat through rice paddies and caves rather than open sea, pairing it on this day trip with Bai Dinh, one of Vietnam's largest pagoda complexes.",
            tourCard: { slug: "bai-dinh-pagoda-and-trang-an-day-trip", title: "Bai Dinh Pagoda and Trang An Day Trip", description: "A day trip to Bai Dinh Pagoda and the Trang An karst landscape.", price: "From $52", duration: "Full day", image: "https://images.asiabylocals.com/asiabylocals/tours/bai-dinh-pagoda-and-trang-an-day-trip/img0/1600.webp" },
          },
          {
            title: "Practical Tips",
            content: "Trang An's boat ride takes you through several low cave tunnels — this is a relaxed activity suitable for most ages and fitness levels." ,
          },
        ],
        faqs: [
          { q: "Is a Ninh Binh day trip worth it from Hanoi?", a: "Yes, for dramatic karst scenery often called 'Ha Long Bay on land', paired with one of Vietnam's largest pagoda complexes in a single day." },
        ],
      };

    case "is-ba-vi-national-park-worth-it-hanoi":
      return {
        title: "Is the Ba Vi National Park Day Trip Worth It from Hanoi?",
        description: "An honest look at the Ba Vi National Park and Ao Vua Resort day trip, a genuine nature escape close enough to Hanoi for a single day.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/ba-vi-national-park-and-ao-vua-resort-day-trip-in-hanoi/img0/1600.webp",
        sections: [
          {
            title: "The Short Answer",
            content: "Ba Vi National Park sits close enough to Hanoi for a straightforward day trip, with forested mountain trails and old French colonial ruins, pairing it with the Ao Vua Resort's waterfalls for a mix of hiking and relaxation in a single day.",
            tourCard: { slug: "ba-vi-national-park-and-ao-vua-resort-day-trip-in-hanoi", title: "Ba Vi National Park and Ao Vua Resort Day Trip", description: "A day trip to Ba Vi National Park and Ao Vua Resort.", price: "From $416", duration: "10 hours", image: "https://images.asiabylocals.com/asiabylocals/tours/ba-vi-national-park-and-ao-vua-resort-day-trip-in-hanoi/img0/1600.webp" },
          },
          {
            title: "Practical Tips",
            content: "A good pick for a lower-commitment nature day if Sapa or Ha Giang's multi-day treks don't fit your schedule." ,
          },
        ],
        faqs: [
          { q: "Is Ba Vi National Park worth visiting from Hanoi?", a: "Yes, for a genuine nature escape with forested trails and colonial ruins, close enough for a single day without a multi-day commitment." },
        ],
      };

    case "is-mai-chau-pu-luong-trek-worth-it-hanoi":
      return {
        title: "Is the Mai Chau and Pu Luong Trek Worth It from Hanoi?",
        description: "An honest look at the 2-day Mai Chau and Pu Luong trekking trip, a quieter rural trekking region closer to Hanoi than Sapa.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/2-days-mai-chau-and-pu-luong-nature-reserve-trekking/img0/1600.webp",
        sections: [
          {
            title: "The Short Answer",
            content: "Mai Chau and Pu Luong sit significantly closer to Hanoi than Sapa, genuinely less touristed, with ethnic minority villages and rice terrace trekking that gives a similar experience to Sapa in roughly half the travel time.",
            tourCard: { slug: "2-days-mai-chau-and-pu-luong-nature-reserve-trekking", title: "2-Days Mai Chau and Pu Luong Nature Reserve Trekking", description: "A 2-day trekking trip through Mai Chau and Pu Luong Nature Reserve.", price: "From $288", duration: "2 days", image: "https://images.asiabylocals.com/asiabylocals/tours/2-days-mai-chau-and-pu-luong-nature-reserve-trekking/img0/1600.webp" },
          },
          {
            title: "Practical Tips",
            content: "A good alternative to Sapa for travelers short on time but still wanting genuine rice terrace trekking and ethnic minority village culture.",
          },
        ],
        faqs: [
          { q: "Is Mai Chau and Pu Luong worth it instead of Sapa?", a: "Yes, for travelers short on time — it's significantly closer to Hanoi and genuinely less touristed, with a similar trekking experience." },
        ],
      };

    case "is-ha-giang-loop-worth-it-hanoi":
      return {
        title: "Is the Ha Giang Loop Worth It from Hanoi?",
        description: "An honest look at the multi-day Ha Giang Loop motorbike tour departing from Hanoi, widely considered Vietnam's most spectacular motorbike route.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/3-day-ha-giang-loop-small-group-adventure-in-hanoi/img0/1600.webp",
        sections: [
          {
            title: "The Short Answer",
            content: "The Ha Giang Loop is widely considered Vietnam's most spectacular motorbike route, winding through dramatic limestone mountain scenery near the Chinese border, and this small-group version with an easy rider means you don't need motorbike experience yourself to do it.",
            tourCard: { slug: "3-day-ha-giang-loop-small-group-adventure-in-hanoi", title: "3-Day Ha Giang Loop Small Group Adventure", description: "A 3-day small-group Ha Giang Loop motorbike tour from Hanoi.", price: "From $207", duration: "3 days", image: "https://images.asiabylocals.com/asiabylocals/tours/3-day-ha-giang-loop-small-group-adventure-in-hanoi/img0/1600.webp" },
          },
          {
            title: "Practical Tips",
            content: "Choose the easy rider option (riding pillion behind an experienced driver) if you don't have real motorbike experience — the mountain roads are genuinely demanding to self-drive.",
          },
        ],
        faqs: [
          { q: "Is the Ha Giang Loop worth it from Hanoi?", a: "Yes, it's widely considered Vietnam's most spectacular motorbike route, and an easy-rider option means no prior motorbike experience is needed." },
        ],
      };

    case "is-water-puppet-show-worth-it-hanoi":
      return {
        title: "Is the Thang Long Water Puppet Show Worth It in Hanoi?",
        description: "An honest look at Hanoi's famous Thang Long Water Puppet Show, a centuries-old Vietnamese folk art performed on a water stage.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/thang-long-water-puppet-show-tickets-in-hanoi/img0/1600.webp",
        sections: [
          {
            title: "The Short Answer",
            content: "At under an hour and a modest price, the Thang Long Water Puppet Show is an easy, low-commitment way to see a genuinely unique Vietnamese folk art performed on a water stage with live traditional music, and it fits neatly around any other Hanoi sightseeing.",
            tourCard: { slug: "thang-long-water-puppet-show-tickets-in-hanoi", title: "Thang Long Water Puppet Show Tickets", description: "Tickets to Hanoi's famous water puppet show.", price: "From $10", duration: "45 minutes", image: "https://images.asiabylocals.com/asiabylocals/tours/thang-long-water-puppet-show-tickets-in-hanoi/img0/1600.webp" },
          },
          {
            title: "Practical Tips",
            content: "Book ahead for an evening show, since seats near the front sell out first and give the best view of the water stage mechanics.",
          },
        ],
        faqs: [
          { q: "Is the Thang Long Water Puppet Show worth it in Hanoi?", a: "Yes, for a low price and under an hour it offers a genuinely unique cultural performance that's easy to fit around other sightseeing." },
        ],
      };

    case "is-vespa-city-tour-worth-it-hanoi":
      return {
        title: "Is the Hanoi Vintage Vespa City Tour Worth It?",
        description: "An honest look at touring Hanoi by vintage Vespa, riding pillion behind a local guide through the Old Quarter and beyond.",
        heroImage: "https://res.cloudinary.com/dx2fxyaft/image/upload/v1789201554/asiabylocals/tours/hanoi-vintage-vespa-city-tours-hanoi/img0.jpg",
        sections: [
          {
            title: "The Short Answer",
            content: "Riding pillion on a vintage Vespa behind a local guide is a fun, efficient way to cover more of Hanoi than walking allows, weaving through Old Quarter traffic and out to spots a typical walking tour wouldn't reach, all without needing to drive yourself.",
            tourCard: { slug: "hanoi-vintage-vespa-city-tours-hanoi", title: "Hanoi Vintage Vespa City Tour", description: "A guided Vespa tour of Hanoi, riding pillion behind a local guide.", price: "From $68", duration: "6 hours", image: "https://res.cloudinary.com/dx2fxyaft/image/upload/v1789201554/asiabylocals/tours/hanoi-vintage-vespa-city-tours-hanoi/img0.jpg" },
          },
          {
            title: "Practical Tips",
            content: "Dress for the weather and wear closed shoes, since you'll be exposed to the elements for most of the 6 hours riding around the city.",
          },
        ],
        faqs: [
          { q: "Is the Hanoi Vespa city tour worth it?", a: "Yes, it covers far more ground than walking and reaches spots a typical walking tour misses, all while someone else does the driving." },
        ],
      };

    case "is-cooking-class-worth-it-hanoi":
      return {
        title: "Is a Hanoi Cooking Class with Market Tour Worth It?",
        description: "An honest look at the Maya Traditional Cooking Class and Market Tour in Hanoi, which pairs a local market visit with hands-on cooking.",
        heroImage: "https://res.cloudinary.com/dx2fxyaft/image/upload/v1789201452/asiabylocals/tours/maya-traditional-cooking-class-and-market-tour-in-hanoi/img0.jpg",
        sections: [
          {
            title: "The Short Answer",
            content: "Starting with a real local market visit before cooking gives this class more context than a kitchen-only lesson, and at 3 hours it's a reasonable way to spend a free morning or afternoon in Hanoi while picking up a few Vietnamese dishes you can actually recreate at home.",
            tourCard: { slug: "maya-traditional-cooking-class-and-market-tour-in-hanoi", title: "Maya Traditional Cooking Class & Market Tour", description: "A Hanoi market visit paired with a hands-on traditional Vietnamese cooking class.", price: "From $42", duration: "3 hours", image: "https://res.cloudinary.com/dx2fxyaft/image/upload/v1789201452/asiabylocals/tours/maya-traditional-cooking-class-and-market-tour-in-hanoi/img0.jpg" },
          },
          {
            title: "Practical Tips",
            content: "Go hungry — you'll be eating what you cook, and market-tour classes like this one tend to run generous portions.",
          },
        ],
        faqs: [
          { q: "Is the Hanoi cooking class with market tour worth it?", a: "Yes, the market visit adds real context before cooking, making it more worthwhile than a kitchen-only class." },
        ],
      };

    case "is-tran-quoc-pagoda-tour-worth-it-hanoi":
      return {
        title: "Is the Tran Quoc Pagoda and Ba Dinh Walking Tour Worth It in Hanoi?",
        description: "An honest look at the guided walking tour of Tran Quoc Pagoda and the Ba Dinh district in Hanoi.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/guided-walking-tour-of-tran-quoc-pagoda-and-ba-dinh-in-hanoi/img0/1600.webp",
        sections: [
          {
            title: "The Short Answer",
            content: "Tran Quoc is Hanoi's oldest Buddhist pagoda, set scenically on West Lake, and pairing it with a walk through the Ba Dinh district (home to Ho Chi Minh's mausoleum and government buildings) gives a genuinely different, more spacious and green side of the city than the crowded Old Quarter.",
            tourCard: { slug: "guided-walking-tour-of-tran-quoc-pagoda-and-ba-dinh-in-hanoi", title: "Guided Walking Tour of Tran Quoc Pagoda and Ba Dinh in Hanoi", description: "A guided walking tour of Tran Quoc Pagoda and the Ba Dinh district.", price: "From $25", duration: "3 hours", image: "https://images.asiabylocals.com/asiabylocals/tours/guided-walking-tour-of-tran-quoc-pagoda-and-ba-dinh-in-hanoi/img0/1600.webp" },
          },
          {
            title: "Practical Tips",
            content: "Dress modestly for the pagoda and the mausoleum area — shoulders and knees covered — as both enforce dress codes.",
          },
        ],
        faqs: [
          { q: "Is the Tran Quoc Pagoda and Ba Dinh tour worth it in Hanoi?", a: "Yes, for a genuinely more spacious, green side of the city distinct from the crowded Old Quarter, plus the oldest pagoda in Hanoi." },
        ],
      };

    case "is-perfume-making-workshop-worth-it-hanoi":
      return {
        title: "Is the Perfume Making Workshop Worth It in Hanoi?",
        description: "An honest look at Hanoi's hands-on perfume making workshop.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/perfume-making-workshop-must-do-experience-in-hanoi/img0/1600.webp",
        sections: [
          {
            title: "The Short Answer",
            content: "Blending your own scent from natural ingredients under guidance is a genuinely different, more personal souvenir than buying a bottle off a shelf, and the short format makes it an easy fit between other Old Quarter activities.",
            tourCard: { slug: "perfume-making-workshop-must-do-experience-in-hanoi", title: "Perfume Making Workshop - Must-Do Experience in Hanoi", description: "A hands-on perfume making workshop in Hanoi.", price: "From $34", duration: "1.5 hours", image: "https://images.asiabylocals.com/asiabylocals/tours/perfume-making-workshop-must-do-experience-in-hanoi/img0/1600.webp" },
          },
          {
            title: "Practical Tips",
            content: "You take home the bottle you blend — a genuinely personal souvenir rather than a generic shop-bought one.",
          },
        ],
        faqs: [
          { q: "Is the perfume making workshop worth it in Hanoi?", a: "Yes, for a genuinely personal, hands-on souvenir you blend yourself rather than buy off a shelf." },
        ],
      };

    case "is-embroidery-workshop-worth-it-hanoi":
      return {
        title: "Is the Heritage Embroidery Workshop in an Ancient House Worth It in Hanoi?",
        description: "An honest look at Hanoi's heritage embroidery workshop held in an ancient Old Quarter house.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/hanoi-s-heritage-embroidery-workshop-in-ancient-house-by-local-operator/img0/1600.webp",
        sections: [
          {
            title: "The Short Answer",
            content: "Vietnamese embroidery is a genuine heritage craft, and learning it inside an actual ancient Old Quarter house adds real atmosphere beyond a generic classroom setting, giving historical context to the needlework itself.",
            tourCard: { slug: "hanoi-s-heritage-embroidery-workshop-in-ancient-house-by-local-operator", title: "Hanoi's Heritage: Embroidery Workshop in Ancient House by Local Operator", description: "A hands-on embroidery workshop held inside an ancient Old Quarter house.", price: "From $39", duration: "1.5 hours", image: "https://images.asiabylocals.com/asiabylocals/tours/hanoi-s-heritage-embroidery-workshop-in-ancient-house-by-local-operator/img0/1600.webp" },
          },
          {
            title: "Practical Tips",
            content: "Ask about the house's own history while you work — many of these ancient Old Quarter houses have stories of their own worth hearing.",
          },
        ],
        faqs: [
          { q: "Is the embroidery workshop worth it in Hanoi?", a: "Yes, the ancient-house setting adds real atmosphere and historical context beyond a generic craft class." },
        ],
      };

    case "is-knife-making-workshop-worth-it-hanoi":
      return {
        title: "Is the Hands-On Knife Making Workshop with a Master Blacksmith Worth It in Hanoi?",
        description: "An honest look at Hanoi's hands-on knife making workshop with a master blacksmith.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/hands-on-knife-making-workshop-with-master-blacksmith-in-hanoi/img0/1600.webp",
        sections: [
          {
            title: "The Short Answer",
            content: "Forging your own blade under a master blacksmith is a genuinely physical, hands-on craft experience distinct from the city's other gentler workshops like perfume or embroidery making — worth it specifically for travelers who want a more intense, hands-on activity.",
            tourCard: { slug: "hands-on-knife-making-workshop-with-master-blacksmith-in-hanoi", title: "Hands-On Knife Making Workshop with Master Blacksmith in Hanoi", description: "A hands-on knife forging workshop with a master blacksmith.", price: "From $44", duration: "2.5 hours", image: "https://images.asiabylocals.com/asiabylocals/tours/hands-on-knife-making-workshop-with-master-blacksmith-in-hanoi/img0/1600.webp" },
          },
          {
            title: "Practical Tips",
            content: "Wear clothes you don't mind getting dirty or singed near the forge — this is a genuinely physical workshop, not a delicate craft class.",
          },
        ],
        faqs: [
          { q: "Is the knife making workshop worth it in Hanoi?", a: "Yes, for a genuinely physical, hands-on forging experience distinct from the city's gentler craft workshops." },
        ],
      };

    case "is-indoor-shooting-experience-worth-it-hanoi":
      return {
        title: "Is the Safe Indoor Shooting Experience Worth It in Hanoi?",
        description: "An honest look at the safe indoor shooting experience with a 1-on-1 coach in Hanoi.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/safe-indoor-shooting-experience-with-1-on-1-coach-in-hanoi/img0/1600.webp",
        sections: [
          {
            title: "The Short Answer",
            content: "A genuinely novel activity for most travelers, this supervised indoor shooting session with a dedicated coach gives a safe, structured introduction, worth it for travelers wanting a different kind of adrenaline activity distinct from the city's temples and food tours.",
            tourCard: { slug: "safe-indoor-shooting-experience-with-1-on-1-coach-in-hanoi", title: "Safe Indoor Shooting Experience with 1-on-1 Coach in Hanoi", description: "A supervised indoor shooting experience with a dedicated one-on-one coach.", price: "From $27", duration: "2 hours", image: "https://images.asiabylocals.com/asiabylocals/tours/safe-indoor-shooting-experience-with-1-on-1-coach-in-hanoi/img0/1600.webp" },
          },
          {
            title: "Practical Tips",
            content: "No prior experience is needed — the one-on-one coaching is specifically designed for complete beginners.",
          },
        ],
        faqs: [
          { q: "Is the indoor shooting experience worth it in Hanoi?", a: "Yes, for a safe, structured introduction to a genuinely novel activity, distinct from the city's usual sightseeing." },
        ],
      };

    case "is-floating-cakes-lotus-tea-worth-it-hanoi":
      return {
        title: "Is Making Floating Cakes and Tasting Lotus Tea Worth It in Hanoi?",
        description: "An honest look at the floating cakes making and fresh lotus tea tasting experience in Hanoi.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/make-floating-cakes-and-taste-fresh-lotus-tea-in-hanoi/img0/1600.webp",
        sections: [
          {
            title: "The Short Answer",
            content: "Banh troi (floating cakes) and lotus tea are genuine traditional specialties less commonly offered as dedicated classes, worth it for travelers wanting a relaxed, specific craft-and-tasting activity distinct from the city's standard cooking classes.",
            tourCard: { slug: "make-floating-cakes-and-taste-fresh-lotus-tea-in-hanoi", title: "Make Floating Cakes and Taste Fresh Lotus Tea in Hanoi", description: "A hands-on floating cakes making class paired with fresh lotus tea tasting.", price: "From $26", duration: "2.5 hours", image: "https://images.asiabylocals.com/asiabylocals/tours/make-floating-cakes-and-taste-fresh-lotus-tea-in-hanoi/img0/1600.webp" },
          },
          {
            title: "Practical Tips",
            content: "Ask about the seasonal availability of fresh lotus — the tea's quality and flavor can vary depending on when you visit.",
          },
        ],
        faqs: [
          { q: "Is making floating cakes and tasting lotus tea worth it in Hanoi?", a: "Yes, it's a relaxed, specific traditional activity distinct from the city's standard cooking classes." },
        ],
      };

    case "is-incense-village-ao-dai-photoshoot-worth-it-hanoi":
      return {
        title: "Is the Incense Village Ao Dai Rental and Photoshoot Worth It in Hanoi?",
        description: "An honest look at the incense village Ao Dai rental and photoshoot experience in Hanoi.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/hanoi-incense-village-ao-dai-rental-and-photoshoot-by-local-operator/img0/1600.webp",
        sections: [
          {
            title: "The Short Answer",
            content: "Wearing a traditional Ao Dai for photos against the colorful backdrop of an incense-making village gives a genuinely distinctive photo opportunity, worth it for travelers who want striking photos alongside a glimpse of a traditional craft village.",
            tourCard: { slug: "hanoi-incense-village-ao-dai-rental-and-photoshoot-by-local-operator", title: "Hanoi Incense Village Ao Dai Rental and Photoshoot", description: "An Ao Dai rental and photoshoot experience in an incense-making village.", price: "From $26", duration: "1 hour", image: "https://images.asiabylocals.com/asiabylocals/tours/hanoi-incense-village-ao-dai-rental-and-photoshoot-by-local-operator/img0/1600.webp" },
          },
          {
            title: "Practical Tips",
            content: "Bring your own camera or phone if you want extra shots beyond what's included, and confirm what's covered in the package beforehand.",
          },
        ],
        faqs: [
          { q: "Is the incense village Ao Dai rental and photoshoot worth it in Hanoi?", a: "Yes, for a genuinely distinctive photo opportunity combining traditional dress with a colorful craft-village backdrop." },
        ],
      };

    case "is-quintessence-of-tonkin-show-worth-it-hanoi":
      return {
        title: "Is the Quintessence of Tonkin Show Worth It in Hanoi?",
        description: "An honest look at the Quintessence of Tonkin cultural show in Hanoi.",
        heroImage: "https://res.cloudinary.com/dx2fxyaft/image/upload/v1789201507/asiabylocals/tours/quintessence-of-tonkin-show-a-cultural-spectacle-in-hanoi/img0.jpg",
        sections: [
          {
            title: "The Short Answer",
            content: "This large-scale outdoor cultural performance stages scenes from northern Vietnamese village life and folklore, giving genuine production value and spectacle, worth it for travelers who want a bigger, more theatrical evening show than the standard water puppet performance.",
            tourCard: { slug: "quintessence-of-tonkin-show-a-cultural-spectacle-in-hanoi", title: "Quintessence of Tonkin Show - A Cultural Spectacle", description: "A large-scale outdoor cultural performance depicting northern Vietnamese village life.", price: "From $56", duration: "4 hours", image: "https://res.cloudinary.com/dx2fxyaft/image/upload/v1789201507/asiabylocals/tours/quintessence-of-tonkin-show-a-cultural-spectacle-in-hanoi/img0.jpg" },
          },
          {
            title: "Practical Tips",
            content: "Book ahead and confirm the venue's distance from central Hanoi, since this show runs at a dedicated outdoor site.",
          },
        ],
        faqs: [
          { q: "Is the Quintessence of Tonkin show worth it in Hanoi?", a: "Yes, it's a genuinely bigger, more theatrical production than the standard water puppet show, worth it for a memorable evening." },
        ],
      };

    case "is-ban-gioc-waterfall-tour-worth-it-hanoi":
      return {
        title: "Is the Ban Gioc Waterfall Tour Worth It from Hanoi?",
        description: "An honest look at the 2-day Ban Gioc Waterfall tour from Hanoi.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/2-day-ban-gioc-waterfall-tour-in-hanoi/img0/1600.webp",
        sections: [
          {
            title: "The Short Answer",
            content: "Ban Gioc is one of Vietnam's largest waterfalls and sits far enough from Hanoi that almost nobody does it as a day trip, so the 2-day tour format genuinely matches the destination, worth it for travelers wanting dramatic scenery well off the Ha Giang/Ninh Binh circuit.",
            tourCard: { slug: "2-day-ban-gioc-waterfall-tour-in-hanoi", title: "2-Day Ban Gioc Waterfall Tour in Hanoi", description: "A 2-day tour to Ban Gioc Waterfall from Hanoi.", price: "From $337", duration: "2 days", image: "https://images.asiabylocals.com/asiabylocals/tours/2-day-ban-gioc-waterfall-tour-in-hanoi/img0/1600.webp" },
          },
          {
            title: "Practical Tips",
            content: "Pack for changeable mountain weather, since Cao Bang province sits considerably higher and cooler than Hanoi.",
          },
        ],
        faqs: [
          { q: "Is the Ban Gioc Waterfall tour worth it from Hanoi?", a: "Yes, for travelers wanting one of Vietnam's largest waterfalls and genuinely dramatic scenery off the main Ha Giang/Ninh Binh circuit." },
        ],
      };

    case "is-cao-bang-loop-worth-it-hanoi":
      return {
        title: "Is the Cao Bang Loop Worth It from Hanoi?",
        description: "An honest look at the 4-day, 3-night Cao Bang Loop tour with a local guide from Hanoi.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/cao-bang-loop-tour-4-days-3-nights-with-a-local-guide-in-hanoi/img0/1600.webp",
        sections: [
          {
            title: "The Short Answer",
            content: "Cao Bang gets a fraction of the Ha Giang Loop's traffic despite similarly dramatic karst and border scenery, so this multi-day loop genuinely delivers a quieter version of the same experience, worth it for travelers who want Ha Giang-style riding without Ha Giang's crowds.",
            tourCard: { slug: "cao-bang-loop-tour-4-days-3-nights-with-a-local-guide-in-hanoi", title: "Cao Bang Loop Tour: 4 Days, 3 Nights with a Local Guide in Hanoi", description: "A 4-day, 3-night Cao Bang loop tour with a local guide from Hanoi.", price: "From $748", duration: "4 days", image: "https://images.asiabylocals.com/asiabylocals/tours/cao-bang-loop-tour-4-days-3-nights-with-a-local-guide-in-hanoi/img0/1600.webp" },
          },
          {
            title: "Practical Tips",
            content: "Book with real lead time, since this is a multi-day guided loop with fixed group logistics rather than a flexible day trip.",
          },
        ],
        faqs: [
          { q: "Is the Cao Bang Loop worth it from Hanoi?", a: "Yes, for travelers wanting Ha Giang-style karst and border scenery with noticeably fewer crowds." },
        ],
      };

    case "is-yen-tu-sacred-mountain-worth-it-hanoi":
      return {
        title: "Is the Yen Tu Sacred Mountain Day Trip Worth It from Hanoi?",
        description: "An honest look at the Yen Tu Sacred Mountain day trip with cable car from Hanoi.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/yen-tu-sacred-mountain-day-trip-with-cable-car-in-hanoi/img0/1600.webp",
        sections: [
          {
            title: "The Short Answer",
            content: "Yen Tu is one of Vietnamese Buddhism's most important pilgrimage mountains, and the cable car makes the summit pagodas genuinely reachable in a single day trip, worth it for travelers wanting a spiritual and scenic site distinct from Hanoi's city temples.",
            tourCard: { slug: "yen-tu-sacred-mountain-day-trip-with-cable-car-in-hanoi", title: "Yen Tu Sacred Mountain Day Trip with Cable Car in Hanoi", description: "A day trip to Yen Tu Sacred Mountain with cable car access from Hanoi.", price: "From $338", duration: "Full day", image: "https://images.asiabylocals.com/asiabylocals/tours/yen-tu-sacred-mountain-day-trip-with-cable-car-in-hanoi/img0/1600.webp" },
          },
          {
            title: "Practical Tips",
            content: "Dress modestly, since the summit holds active pagodas and monasteries rather than just a scenic viewpoint.",
          },
        ],
        faqs: [
          { q: "Is the Yen Tu Sacred Mountain day trip worth it from Hanoi?", a: "Yes, for a genuinely important Buddhist pilgrimage site made reachable in a day by the cable car, distinct from Hanoi's city temples." },
        ],
      };

    case "is-hoang-su-phi-harvest-worth-it-hanoi":
      return {
        title: "Is the Hoang Su Phi Harvest Season Mountain Escape Worth It from Hanoi?",
        description: "An honest look at the Hoang Su Phi in harvest season 3-day mountain escape from Hanoi.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/hoang-su-phi-in-harvest-season-3-day-mountain-escape-in-hanoi/img0/1600.webp",
        sections: [
          {
            title: "The Short Answer",
            content: "Hoang Su Phi's terraced rice fields are at their most striking during the harvest window, and this 3-day trip is timed specifically around that, worth it for travelers visiting in season who want a quieter alternative to the better-known Sapa terraces.",
            tourCard: { slug: "hoang-su-phi-in-harvest-season-3-day-mountain-escape-in-hanoi", title: "Hoang Su Phi in Harvest Season: 3-Day Mountain Escape in Hanoi", description: "A 3-day mountain escape to Hoang Su Phi timed for harvest season.", price: "From $332", duration: "3 days", image: "https://images.asiabylocals.com/asiabylocals/tours/hoang-su-phi-in-harvest-season-3-day-mountain-escape-in-hanoi/img0/1600.webp" },
          },
          {
            title: "Practical Tips",
            content: "Confirm the harvest timing with the operator before booking, since the terraces' peak color window shifts slightly year to year.",
          },
        ],
        faqs: [
          { q: "Is the Hoang Su Phi harvest season trip worth it from Hanoi?", a: "Yes, for travelers visiting in the harvest window who want Sapa-style terraced scenery with far fewer crowds." },
        ],
      };

    case "is-dien-bien-phu-3day-worth-it-hanoi":
      return {
        title: "Is the Dien Bien Phu 3-Day Guided Adventure Worth It from Hanoi?",
        description: "An honest look at the 3-day Dien Bien Phu guided adventure from Hanoi.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/dien-bien-phu-3-day-guided-adventure-with-meals-and-transfers-in-hanoi/img0/1600.webp",
        sections: [
          {
            title: "The Short Answer",
            content: "Dien Bien Phu, the site of the decisive 1954 battle that ended French colonial rule in Vietnam, offers genuine historical weight far from Hanoi's usual tourist circuit, worth it for travelers with a specific interest in Vietnamese history.",
            tourCard: { slug: "dien-bien-phu-3-day-guided-adventure-with-meals-and-transfers-in-hanoi", title: "Dien Bien Phu: 3-Day Guided Adventure with Meals and Transfers in Hanoi", description: "A 3-day guided adventure to Dien Bien Phu with meals and transfers.", price: "From $719", duration: "3 days", image: "https://images.asiabylocals.com/asiabylocals/tours/dien-bien-phu-3-day-guided-adventure-with-meals-and-transfers-in-hanoi/img0/1600.webp" },
          },
          {
            title: "Practical Tips",
            content: "Read up on the battle's history beforehand, since the sites carry far more weight with that context than as a standalone sightseeing stop.",
          },
        ],
        faqs: [
          { q: "Is the Dien Bien Phu 3-day guided adventure worth it from Hanoi?", a: "Yes, for travelers with a specific interest in Vietnamese history, offering genuine historical weight far from the usual tourist circuit." },
        ],
      };

    case "is-maichau-puluong-ninhbinh-worth-it-hanoi":
      return {
        title: "Is the Mai Chau, Pu Luong & Ninh Binh 3-Day Tour Worth It from Hanoi?",
        description: "An honest look at the 3-day Mai Chau, Pu Luong, and Ninh Binh tour from Hanoi.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/mai-chau-pu-luong-and-ninh-binh-3-day-tour/img0/1600.webp",
        sections: [
          {
            title: "The Short Answer",
            content: "Combining Mai Chau's valley villages, Pu Luong's terraced hills, and Ninh Binh's limestone scenery in one 3-day trip covers three genuinely distinct landscapes without backtracking to Hanoi between each.",
            tourCard: { slug: "mai-chau-pu-luong-and-ninh-binh-3-day-tour", title: "Mai Chau, Pu Luong, and Ninh Binh 3-Day Tour", description: "A 3-day tour combining Mai Chau, Pu Luong, and Ninh Binh.", price: "From $351", duration: "3 days", image: "https://images.asiabylocals.com/asiabylocals/tours/mai-chau-pu-luong-and-ninh-binh-3-day-tour/img0/1600.webp" },
          },
          {
            title: "Practical Tips",
            content: "Pack light but bring layers, since the route moves between valley, hill, and karst terrain with varying temperatures.",
          },
        ],
        faqs: [
          { q: "Is the Mai Chau, Pu Luong and Ninh Binh 3-day tour worth it from Hanoi?", a: "Yes, for travelers wanting three genuinely distinct landscapes covered efficiently in one trip, without backtracking to Hanoi between stops." },
        ],
      };

    case "is-sonla-quynhnhai-dariver-worth-it-hanoi":
      return {
        title: "Is the Son La Quynh Nhai Ecotourism & Da River Tour Worth It from Hanoi?",
        description: "An honest look at the 3-day Son La Quynh Nhai ecotourism and Da River tour from Hanoi.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/sonla-quynh-nhai-ecotourism-and-da-river-3-day-private-tour-in-hanoi/img0/1600.webp",
        sections: [
          {
            title: "The Short Answer",
            content: "Quynh Nhai's reservoir and Da River scenery sit well off the standard northern Vietnam loop, giving genuine ecotourism access to a region most travelers never reach, worth it for those wanting somewhere truly off the beaten path.",
            tourCard: { slug: "sonla-quynh-nhai-ecotourism-and-da-river-3-day-private-tour-in-hanoi", title: "SonLa: Quynh Nhai Ecotourism and Da river 3 day Private Tour in Hanoi", description: "A 3-day private ecotourism tour of Quynh Nhai and the Da River from Hanoi.", price: "From $338", duration: "3 days", image: "https://images.asiabylocals.com/asiabylocals/tours/sonla-quynh-nhai-ecotourism-and-da-river-3-day-private-tour-in-hanoi/img0/1600.webp" },
          },
          {
            title: "Practical Tips",
            content: "Infrastructure here is genuinely limited compared to the main northern Vietnam tourist loop, so set expectations accordingly.",
          },
        ],
        faqs: [
          { q: "Is the Son La Quynh Nhai and Da River tour worth it from Hanoi?", a: "Yes, for travelers wanting genuine ecotourism access to a region most visitors never reach, truly off the beaten path." },
        ],
      };

    case "is-tam-chuc-pagoda-worth-it-hanoi":
      return {
        title: "Is the Tam Chuc Pagoda Day Trip Worth It from Hanoi?",
        description: "An honest look at the Tam Chuc Pagoda day trip, a visit to one of the world's largest pagoda complexes near Hanoi.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/tam-chuc-biggest-pagoda-and-boat-or-duyen-ninh-pagoda-in-hanoi/img0/1600.webp",
        sections: [
          {
            title: "The Short Answer",
            content: "Tam Chuc is genuinely one of the largest pagoda complexes in the world, set dramatically among limestone mountains and a lake, and the included boat ride across the water gives a scale and setting that Hanoi's own city-center temples simply can't match.",
            tourCard: { slug: "tam-chuc-biggest-pagoda-and-boat-or-duyen-ninh-pagoda-in-hanoi", title: "Tam Chuc BIGGEST Pagoda and Boat or Duyen Ninh Pagoda in Hanoi", description: "A day trip to Tam Chuc, one of the world's largest pagoda complexes, with a boat ride.", price: "From $208", duration: "1 day", image: "https://images.asiabylocals.com/asiabylocals/tours/tam-chuc-biggest-pagoda-and-boat-or-duyen-ninh-pagoda-in-hanoi/img0/1600.webp" },
          },
          {
            title: "Practical Tips",
            content: "Wear comfortable shoes — the complex is genuinely vast, and seeing it properly involves a fair amount of walking between halls.",
          },
        ],
        faqs: [
          { q: "Is the Tam Chuc Pagoda day trip worth it from Hanoi?", a: "Yes, for a genuinely dramatic, oversized pagoda complex set among mountains and a lake, a scale Hanoi's own temples can't match." },
        ],
      };

    case "is-paragliding-worth-it-hanoi":
      return {
        title: "Is Paragliding Worth It Near Hanoi?",
        description: "An honest look at the Hanoi paragliding tour with roundtrip city transfer, an aerial adventure activity outside the capital.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/hanoi-paragliding-tour-roundtrip-transfer-from-city-by-local-operator/img0/1600.webp",
        sections: [
          {
            title: "The Short Answer",
            content: "This gives a genuine aerial thrill over the countryside outside Hanoi, a real change of pace from the capital's temples, lakes, and Old Quarter streets, worth it specifically for travelers wanting an adrenaline activity rather than more city sightseeing.",
            tourCard: { slug: "hanoi-paragliding-tour-roundtrip-transfer-from-city-by-local-operator", title: "Hanoi Paragliding Tour - Roundtrip Transfer from City", description: "A paragliding tour with roundtrip transfer from Hanoi city center.", price: "From $103", duration: "Half day", image: "https://images.asiabylocals.com/asiabylocals/tours/hanoi-paragliding-tour-roundtrip-transfer-from-city-by-local-operator/img0/1600.webp" },
          },
          {
            title: "Practical Tips",
            content: "Flights depend genuinely on wind conditions, so build some flexibility into your schedule in case of a weather-related reschedule.",
          },
        ],
        faqs: [
          { q: "Is paragliding worth it near Hanoi?", a: "Yes, for a genuine aerial adventure outside the capital, a real change of pace from the city's temples and lakes." },
        ],
      };

    case "is-michelin-restaurant-worth-it-hanoi":
      return {
        title: "Is the Tam Vị Michelin Restaurant Meal Worth It in Hanoi?",
        description: "An honest look at dining at Tam Vị, a Michelin-starred restaurant in Hanoi serving Vietnamese cuisine.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/vietnamese-meal-at-tam-v-1-star-michelin-restaurant/img0/1600.webp",
        sections: [
          {
            title: "The Short Answer",
            content: "A proper Michelin-starred meal gives a genuinely different dining experience than Hanoi's street food scene, a worthwhile splurge for food-focused travelers who want a sit-down taste of elevated Vietnamese cuisine alongside the city's famous street stalls.",
            tourCard: { slug: "vietnamese-meal-at-tam-v-1-star-michelin-restaurant", title: "Vietnamese Meal at Tam Vị 1-Star Michelin Restaurant", description: "A Vietnamese meal at the Michelin-starred Tam Vị restaurant in Hanoi.", price: "From $86", duration: "1.5 hours", image: "https://images.asiabylocals.com/asiabylocals/tours/vietnamese-meal-at-tam-v-1-star-michelin-restaurant/img0/1600.webp" },
          },
          {
            title: "Practical Tips",
            content: "Book ahead — Michelin-starred dining in Hanoi genuinely fills up, especially for evening slots.",
          },
        ],
        faqs: [
          { q: "Is the Tam Vị Michelin restaurant meal worth it in Hanoi?", a: "Yes, as a genuinely worthwhile splurge for food-focused travelers wanting elevated Vietnamese cuisine alongside the city's street food." },
        ],
      };

    case "is-beer-bath-massage-worth-it-hanoi":
      return {
        title: "Is the Beer Bath and Massage Experience Worth It in Hanoi?",
        description: "An honest look at the 75-minute beer bath and massage experience in Hanoi's Old Quarter, a novelty wellness activity.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/hanoi-old-quarter-75-minute-beer-bath-and-massage-experience-by-local-operator/img0/1600.webp",
        sections: [
          {
            title: "The Short Answer",
            content: "A beer bath is a genuinely quirky novelty wellness treatment, popular in parts of Vietnam for its claimed skin benefits, and pairing it with a massage makes this a relaxed, easy-to-book break after a day of Old Quarter sightseeing.",
            tourCard: { slug: "hanoi-old-quarter-75-minute-beer-bath-and-massage-experience-by-local-operator", title: "Hanoi Old Quarter: 75-Minute Beer Bath and Massage Experience", description: "A 75-minute beer bath and massage experience in Hanoi's Old Quarter.", price: "From $62", duration: "75 minutes", image: "https://images.asiabylocals.com/asiabylocals/tours/hanoi-old-quarter-75-minute-beer-bath-and-massage-experience-by-local-operator/img0/1600.webp" },
          },
          {
            title: "Practical Tips",
            content: "Go in for the novelty and the relaxation, not for any dramatic skin transformation — treat it as a fun, low-stakes spa break.",
          },
        ],
        faqs: [
          { q: "Is the beer bath and massage experience worth it in Hanoi?", a: "Yes, for a genuinely quirky, relaxed wellness break — go in for the novelty and relaxation rather than expecting dramatic results." },
        ],
      };

    case "is-cucphuong-wildlife-worth-it-hanoi":
      return {
        title: "Is the Cuc Phuong Wildlife and Mua Cave Sunset Tour Worth It from Hanoi?",
        description: "An honest look at the Cuc Phuong wildlife and Mua Cave sunset experience, combining Vietnam's oldest national park with a scenic sunset viewpoint.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/cuc-phuong-wildlife-and-mua-cave-sunset-experience-in-hanoi/img0/1600.webp",
        sections: [
          {
            title: "The Short Answer",
            content: "Cuc Phuong is genuinely Vietnam's oldest national park, home to a real primate rescue center, and pairing it with the Mua Cave sunset viewpoint gives both wildlife conservation interest and a genuinely scenic payoff in a single day.",
            tourCard: { slug: "cuc-phuong-wildlife-and-mua-cave-sunset-experience-in-hanoi", title: "Cuc Phuong Wildlife and Mua Cave Sunset Experience in Hanoi", description: "A day trip combining Cuc Phuong National Park wildlife with a Mua Cave sunset viewpoint.", price: "From $64", duration: "1 day", image: "https://images.asiabylocals.com/asiabylocals/tours/cuc-phuong-wildlife-and-mua-cave-sunset-experience-in-hanoi/img0/1600.webp" },
          },
          {
            title: "Practical Tips",
            content: "The Mua Cave viewpoint involves a genuine uphill climb of several hundred steps, so time your visit to arrive before sunset with energy to spare.",
          },
        ],
        faqs: [
          { q: "Is the Cuc Phuong wildlife and Mua Cave sunset tour worth it from Hanoi?", a: "Yes, for genuine wildlife conservation interest at Vietnam's oldest national park, paired with a real scenic sunset payoff." },
        ],
      };

    case "is-knife-making-blacksmith-village-worth-it-hanoi":
      return {
        title: "Is the Hanoi Knife Making in a Blacksmith Village Workshop Worth It?",
        description: "An honest look at Hanoi's hands-on knife-making workshop in a traditional blacksmith village.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/9af855c76466d7cdb6e6e9493abe310cf589ecb43f6c4fa3a2239147d9e82c94.jpg",
        sections: [
          {
            title: "The Short Answer",
            content: "Yes, if you want a genuinely hands-on craft experience rather than another cooking class — this takes you into a traditional blacksmith village to actually forge your own knife, a distinctive activity with a real functional souvenir at the end.",
            tourCard: { slug: "knife-making-in-blacksmith-village-in-hanoi-by-local-operator", title: "Knife Making in Blacksmith Village in Hanoi", description: "A hands-on knife-making workshop in a traditional blacksmith village near Hanoi.", price: "From $70", duration: "Half day", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/9af855c76466d7cdb6e6e9493abe310cf589ecb43f6c4fa3a2239147d9e82c94.jpg" },
          },
          {
            title: "Practical Tips",
            content: "Wear closed-toe shoes and clothes you don't mind getting a bit dirty — this is a genuine forge workshop, not a sanitized demonstration.",
          },
        ],
        faqs: [
          { q: "Is the knife-making blacksmith village workshop worth it in Hanoi?", a: "Yes, for travelers wanting a genuinely hands-on craft experience with a functional souvenir, distinct from Hanoi's usual cooking classes." },
        ],
      };

    case "is-silver-jewelry-making-workshop-worth-it-hanoi":
      return {
        title: "Is the Hanoi Silver Jewelry-Making Workshop Worth It?",
        description: "An honest look at Hanoi's hands-on silver jewelry-making workshop.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/0a8efd7bac6be42a58bcae8f9afdabb4897549a8407ee6f6c487b3b795422d60.jpg",
        sections: [
          {
            title: "The Short Answer",
            content: "Yes, if you want a wearable souvenir you genuinely made yourself — this workshop teaches traditional silversmithing techniques to craft your own piece of jewelry, a distinctive alternative to buying silver from a shop.",
            tourCard: { slug: "silver-jewelry-making-workshop-in-hanoi", title: "Silver Jewelry-Making Workshop in Hanoi", description: "A hands-on silver jewelry-making workshop in Hanoi.", price: "From $65", duration: "Half day", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/0a8efd7bac6be42a58bcae8f9afdabb4897549a8407ee6f6c487b3b795422d60.jpg" },
          },
          {
            title: "Practical Tips",
            content: "Expect genuine hands-on time with tools and metal — allow extra time if you want to craft a more detailed design rather than a simple piece.",
          },
        ],
        faqs: [
          { q: "Is the silver jewelry-making workshop worth it in Hanoi?", a: "Yes, for travelers wanting a genuinely wearable souvenir they crafted themselves using traditional silversmithing techniques." },
        ],
      };

    case "is-leather-notebook-making-workshop-worth-it-hanoi":
      return {
        title: "Is the Hanoi Leather Notebook Making Workshop Worth It?",
        description: "An honest look at Hanoi's hands-on leather notebook-making workshop.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/9af855c76466d7cdb6e6e9493abe310cf589ecb43f6c4fa3a2239147d9e82c94.jpg",
        sections: [
          {
            title: "The Short Answer",
            content: "Yes, if a practical, long-lasting souvenir appeals more than a typical trinket — this workshop walks you through crafting your own leather-bound notebook or journal from start to finish, something you'll actually use after the trip.",
            tourCard: { slug: "leather-notebook-making-workshop-craft-your-journal-in-hanoi", title: "Leather Notebook Making Workshop – Craft Your Journal in Hanoi", description: "A hands-on leather notebook-making workshop in Hanoi.", price: "From $65", duration: "Half day", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/9af855c76466d7cdb6e6e9493abe310cf589ecb43f6c4fa3a2239147d9e82c94.jpg" },
          },
          {
            title: "Practical Tips",
            content: "Consider using the notebook itself as a travel journal for the rest of your trip, giving the souvenir an immediate practical purpose.",
          },
        ],
        faqs: [
          { q: "Is the leather notebook making workshop worth it in Hanoi?", a: "Yes, for travelers wanting a genuinely practical, long-lasting souvenir they crafted themselves." },
        ],
      };

    case "is-halal-food-train-street-tour-worth-it-hanoi":
      return {
        title: "Is the Hanoi Authentic Halal Food Tour and Train Street Experience Worth It?",
        description: "An honest look at Hanoi's authentic halal food tour combined with the Train Street experience.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/0a8efd7bac6be42a58bcae8f9afdabb4897549a8407ee6f6c487b3b795422d60.jpg",
        sections: [
          {
            title: "The Short Answer",
            content: "Yes, specifically for Muslim travelers who want to try Hanoi's street food without worrying about dietary restrictions — this tour curates genuinely halal options while also taking in the famous Train Street, covering food and sightseeing in one trip.",
            tourCard: { slug: "authentic-halal-food-tour-and-train-street-experience-in-hanoi", title: "Authentic Halal Food Tour and Train Street Experience in Hanoi", description: "A halal street food tour combined with the Train Street experience in Hanoi.", price: "From $99", duration: "Half day", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/0a8efd7bac6be42a58bcae8f9afdabb4897549a8407ee6f6c487b3b795422d60.jpg" },
          },
          {
            title: "Practical Tips",
            content: "Train Street's schedule depends on actual train timings, so confirm with your guide whether the itinerary lines up with a train passing through during your visit.",
          },
        ],
        faqs: [
          { q: "Is the halal food tour and Train Street experience worth it in Hanoi?", a: "Yes, especially for Muslim travelers wanting curated halal street food alongside Hanoi's famous Train Street sightseeing." },
        ],
      };

    case "is-ceramic-village-dong-ho-painting-worth-it-hanoi":
      return {
        title: "Is the Ceramic Village, Dong Ho Painting and Carpentry Village Tour Worth It?",
        description: "An honest look at the Hanoi day trip covering a ceramic village, Dong Ho folk painting, and a carpentry village.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/9af855c76466d7cdb6e6e9493abe310cf589ecb43f6c4fa3a2239147d9e82c94.jpg",
        sections: [
          {
            title: "The Short Answer",
            content: "Yes, for travelers wanting genuine traditional craft exposure in one trip — this covers three distinct Vietnamese artisan traditions (ceramics, Dong Ho woodblock folk painting, and carpentry) in villages where these crafts are still practiced, rather than a single workshop stop.",
            tourCard: { slug: "ceramic-village-dong-ho-painting-and-carpentry-village-in-hanoi", title: "Ceramic Village, Dong Ho Painting and Carpentry Village in Hanoi", description: "A day trip covering a ceramic village, Dong Ho folk painting, and a carpentry village near Hanoi.", price: "From $197", duration: "Full day", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/9af855c76466d7cdb6e6e9493abe310cf589ecb43f6c4fa3a2239147d9e82c94.jpg" },
          },
          {
            title: "Practical Tips",
            content: "Dong Ho woodblock prints make genuinely distinctive, lightweight souvenirs that pack easily for travel.",
          },
        ],
        faqs: [
          { q: "Is the ceramic village, Dong Ho painting and carpentry tour worth it near Hanoi?", a: "Yes, for travelers wanting genuine exposure to three distinct traditional Vietnamese crafts in one day." },
        ],
      };

    case "is-cave-dining-pearl-show-onsen-worth-it-hanoi":
      return {
        title: "Is Hanoi Escape: Cave Dining, Sacred Pearl Show and Onsen Springs Worth It?",
        description: "An honest look at the Hanoi Escape experience combining cave dining, a Sacred Pearl show, and onsen hot springs.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/0a8efd7bac6be42a58bcae8f9afdabb4897549a8407ee6f6c487b3b795422d60.jpg",
        sections: [
          {
            title: "The Short Answer",
            content: "Yes, if you want genuinely varied sensory experiences in one trip — dining inside an actual cave, watching a staged Sacred Pearl show, and soaking in Japanese-style onsen hot springs gives a far more eclectic day than Hanoi's standard temple or old quarter sightseeing.",
            tourCard: { slug: "hanoi-escape-cave-dining-sacred-pearl-show-and-onsen-springs-hanoi", title: "Hanoi Escape: Cave Dining, Sacred Pearl Show and Onsen Springs (Hanoi)", description: "An experience combining cave dining, a Sacred Pearl show, and onsen hot springs near Hanoi.", price: "From $245", duration: "Full day", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/0a8efd7bac6be42a58bcae8f9afdabb4897549a8407ee6f6c487b3b795422d60.jpg" },
          },
          {
            title: "Practical Tips",
            content: "Bring a swimsuit for the onsen portion, and dress warmly for the cave, which stays genuinely cool regardless of outside temperature.",
          },
        ],
        faqs: [
          { q: "Is the cave dining, Sacred Pearl show and onsen experience worth it near Hanoi?", a: "Yes, for travelers wanting a genuinely eclectic mix of dining, entertainment, and wellness in one day." },
        ],
      };

    case "is-military-history-museum-landmarks-worth-it-hanoi":
      return {
        title: "Is the Vietnam Military History Museum and Landmarks Tour Worth It?",
        description: "An honest look at Hanoi's guided tour of the Vietnam Military History Museum and related landmarks.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/9af855c76466d7cdb6e6e9493abe310cf589ecb43f6c4fa3a2239147d9e82c94.jpg",
        sections: [
          {
            title: "The Short Answer",
            content: "Yes, for travelers with genuine interest in Vietnam's military history — the Military History Museum covers conflicts from French colonization through the Vietnam War with real artifacts and aircraft, and a guide adds context that's easy to miss walking through alone.",
            tourCard: { slug: "vietnam-military-history-museum-and-landmarks-tour", title: "Vietnam Military History Museum and Landmarks Tour", description: "A guided tour of the Vietnam Military History Museum and related landmarks in Hanoi.", price: "From $101", duration: "Half day", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/9af855c76466d7cdb6e6e9493abe310cf589ecb43f6c4fa3a2239147d9e82c94.jpg" },
          },
          {
            title: "Practical Tips",
            content: "A guide with genuine historical depth makes the exhibits far more meaningful than reading placards alone, especially for complex periods like the French-Indochina conflict." },
        ],
        faqs: [
          { q: "Is the Vietnam Military History Museum and landmarks tour worth it in Hanoi?", a: "Yes, for travelers with genuine interest in Vietnam's military history, with a guide adding context that's easy to miss alone." }
        ],
      };

    case "is-bar-crawl-nightclub-worth-it-hanoi":
      return {
        title: "Is the Hanoi Guided Bar Crawl with Drinks and Nightclub Entry Worth It?",
        description: "An honest look at Hanoi's guided bar crawl, including drinks and nightclub entry.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/0a8efd7bac6be42a58bcae8f9afdabb4897549a8407ee6f6c487b3b795422d60.jpg",
        sections: [
          {
            title: "The Short Answer",
            content: "Yes, if you want a structured night out without the hassle of finding spots or navigating door policies yourself — this guided crawl covers multiple bars with drinks included and ends with nightclub entry, a genuinely social alternative to Hanoi's quieter evening options.",
            tourCard: { slug: "guided-bar-crawl-with-drinks-and-nightclub-entry-in-hanoi", title: "Guided Bar Crawl with Drinks and Nightclub Entry in Hanoi", description: "A guided bar crawl in Hanoi with drinks and nightclub entry included.", price: "From $78", duration: "A few hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/0a8efd7bac6be42a58bcae8f9afdabb4897549a8407ee6f6c487b3b795422d60.jpg" },
          },
          {
            title: "Practical Tips",
            content: "A good pick for solo travelers or small groups wanting to meet other people on a structured, social night out.",
          },
        ],
        faqs: [
          { q: "Is the guided bar crawl with nightclub entry worth it in Hanoi?", a: "Yes, for travelers wanting a structured, social night out without navigating bars and door policies solo." },
        ],
      };

    default:
      return null;
  }
}

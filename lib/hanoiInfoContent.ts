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

    default:
      return null;
  }
}

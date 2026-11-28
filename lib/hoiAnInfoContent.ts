// Hoi An authority pages (2026-09). Same CityInfoData shape as cityInfoContent.ts.
// Reached via getHoiAnInfoContent() -> getCityInfoContent().
import type { CityInfoData } from './cityInfoContent';

const IMG = 'https://res.cloudinary.com/dx2fxyaft/image/upload/v1789201646/asiabylocals/tours/vietnamese-foldable-lantern-making-class-in-hoi-an/img0.jpg';

export function getHoiAnInfoContent(slug: string): CityInfoData | null {
  switch (slug) {

    case "hoi-an-ancient-town-guide":
      return {
        title: "Hoi An Ancient Town: The Ticket System and What It Actually Buys",
        seoTitle: "Hoi An Ancient Town Ticket Guide 2026",
        description: "How the heritage ticket works, which houses are worth one of your entries, and the hours the streets are at their best.",
        heroImage: IMG,
        fastFacts: [
          { icon: "ticket", label: "The ticket", value: "One ticket admits you to a set number of heritage sites" },
          { icon: "map", label: "Walking the town", value: "Free; the ticket is for entering the old houses" },
          { icon: "clock", label: "Best hours", value: "Before 8am and after 5pm" },
          { icon: "car", label: "Vehicles", value: "Central lanes are closed to traffic for much of the day" },
          { icon: "lightbulb", label: "Lanterns", value: "Lit every evening, not only at festival" },
        ],
        sections: [
          {
            title: "Hoi An Ancient Town: The Ticket System and What It Actually Buys",
            icon: "ticket",
            content: "Hoi An runs a heritage ticket, and it confuses almost every first-time visitor because of what it is not.\n\nIt is not an entry fee for the town. You can walk the streets, cross the bridges, eat, shop and photograph without one. What the ticket buys is admission to a fixed number of the protected buildings: old merchant houses, assembly halls, the museums and the Japanese Covered Bridge.\n\nYou choose which of them to use your entries on, and the money goes to maintaining the buildings, which is genuinely why the town still looks like this.\n\nMost visitors use two or three entries and then stop, which is a reasonable way to do it. The houses are similar to one another and the fourth is much less interesting than the first.",
            tourCard: {
              slug: "vietnamese-foldable-lantern-making-class-in-hoi-an",
              title: "Vietnamese Foldable Lantern Making Class",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 13",
              duration: "1.5 hours",
              image: IMG,
            },
          },
          {
            title: "Which buildings to spend entries on",
            icon: "landmark",
            content: "Tan Ky house is the one most people pick first and deserves it: a merchant family home in continuous use for generations, with Japanese, Chinese and Vietnamese carpentry in the same room and flood marks on the wall.\n\nThe Fujian Assembly Hall is the most visually striking of the halls, built by a Chinese merchant community and still functioning as a temple.\n\nThe Japanese Covered Bridge is the symbol of the town and is small; see it, but do not expect it to occupy you.\n\nThe folk-culture and trade museums are for people who want the background rather than the buildings, and are a better use of a hot afternoon than a morning.",
          },
          {
            title: "Getting the town without the crowd",
            icon: "clock",
            content: "The old town is small and it fills. Between about ten in the morning and four in the afternoon the central lanes carry more people than they were built for, and in high season the bridge has a queue.\n\nBefore eight it is almost empty, the light is low and warm, and the market is at its most working rather than most photographed. That hour is the single best thing in Hoi An and it costs nothing.\n\nAfter five the lanterns come on, the day groups leave, and the town looks like the photographs again. Aim to be out for both and to spend the middle of the day at the beach or in a tailor's.",
          },
        ],
      };

    case "hoi-an-tailoring-guide":
      return {
        title: "Getting Clothes Made in Hoi An: Time, Fittings and What Can Go Wrong",
        seoTitle: "Hoi An Tailoring Guide 2026",
        description: "How long it really takes, how many fittings you need, and the mistakes that produce a suit you never wear.",
        heroImage: IMG,
        fastFacts: [
          { icon: "scissors", label: "Realistic minimum", value: "Two full days for a suit, more for several pieces" },
          { icon: "repeat", label: "Fittings", value: "Two at least; three for tailored jackets" },
          { icon: "shirt", label: "Bring", value: "A garment that already fits you well, to copy" },
          { icon: "wallet", label: "Fabric", value: "The main price variable; ask what the cloth actually is" },
          { icon: "alert-triangle", label: "The trap", value: "Ordering on your last afternoon" },
        ],
        sections: [
          {
            title: "Getting Clothes Made in Hoi An: Time, Fittings and What Can Go Wrong",
            icon: "scissors",
            content: "Hoi An has hundreds of tailors and the good ones are very good. What separates a garment you wear for years from one you leave in a hotel wardrobe is almost always time, not price.\n\nThe advertised turnaround is often twenty-four hours. That is physically possible and it is how most disappointments happen, because it allows one fitting and no time to correct anything found in it.\n\nOrder on your first day. Have the first fitting the next morning, the second that evening or the following day, and collect before you leave. Two full days is the realistic minimum for a suit and three is comfortable.",
            tourCard: {
              slug: "thanh-ha-village-tour-with-pottery-making-and-gift-in-hoi-an",
              title: "Thanh Ha Village Tour with Pottery Making",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 30",
              duration: "2 hours",
              image: IMG,
            },
          },
          {
            title: "Fabric, which is where the price lives",
            icon: "wallet",
            content: "The same suit can be quoted at wildly different prices in two shops fifty metres apart, and the difference is usually the cloth rather than the labour.\n\nAsk what the fabric actually is: wool, wool blend, or a synthetic that will look right in the shop and shine after two wears. A reputable tailor will tell you and will show you the bolt.\n\nSilk is the other thing people buy here and the word covers a wide range. Hold it up: real silk is warm to the touch and does not have the flat sheen of polyester.\n\nBeing clear that you care about the cloth changes the conversation immediately, and usually improves what you are shown.",
          },
          {
            title: "How to give a tailor a fighting chance",
            icon: "shirt",
            content: "Bring a garment you already own and love the fit of. Copying something real beats describing something imagined, and it removes most of the room for misunderstanding.\n\nBring a photograph of what you want, not a description. Terms like slim fit mean different things to different people and nothing at all across a language gap.\n\nWear the shoes you will wear with the trousers to the fitting, because the hem is cut to them.\n\nAnd say something at the fitting. The moment to mention that the shoulders feel tight is while you are standing in the shop, not after you have flown home.",
          },
        ],
      };

    case "my-son-sanctuary-guide":
      return {
        title: "My Son Sanctuary: Going Early, and What Survived",
        seoTitle: "My Son Sanctuary Guide 2026",
        description: "The Cham temple complex an hour from Hoi An, why the 6am departure is worth it, and what the bomb craters explain.",
        heroImage: IMG,
        fastFacts: [
          { icon: "sunrise", label: "Best departure", value: "The earliest one, usually around 5.30 to 6am" },
          { icon: "clock", label: "From Hoi An", value: "About an hour each way" },
          { icon: "landmark", label: "Built", value: "Between roughly the 4th and 13th centuries by the Champa kingdom" },
          { icon: "thermometer", label: "Shade", value: "Very little; it gets fierce by mid-morning" },
          { icon: "alert-triangle", label: "Damage", value: "Much of the site was bombed during the war" },
        ],
        sections: [
          {
            title: "My Son Sanctuary: Going Early, and What Survived",
            icon: "landmark",
            content: "My Son is a Hindu temple complex in a valley about an hour inland from Hoi An, built by the Champa kingdom over roughly nine centuries. It is the most important Cham site in Vietnam and it is a ruin in the real sense.\n\nThe brickwork is the thing to look at. The Cham built without visible mortar, and how they bonded the bricks is still not fully settled. Restored sections are easy to pick out because the modern joints show.\n\nIt is a smaller site than Angkor or Bagan and comparisons to them set the wrong expectation. Go for the brickwork, the carving and the setting in the valley rather than for scale.",
            tourCard: {
              slug: "my-son-early-morning-with-banh-my-and-coffee-6-am-in-hoi-an",
              title: "My Son Early Morning Tour with Banh Mi and Coffee",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 30",
              duration: "4.5 hours",
              image: IMG,
            },
          },
          {
            title: "Why everyone says go early",
            icon: "sunrise",
            content: "⚠️ There is almost no shade at My Son and the valley holds heat. By ten in the morning it is genuinely punishing for most of the year, and by midday people cut the visit short.\n\nThe early departures leave Hoi An before dawn and get you into the site as it opens, in cool air, low light and with far fewer people. The difference is not marginal; it is the difference between an hour you enjoy and an hour you endure.\n\nThe cost is a very early alarm, and it is worth it. Most tours include breakfast on the way or at the site precisely because nobody has eaten.\n\nTake water. There is limited shelter once you are walking between the groups of towers.",
          },
          {
            title: "The craters, and what they explain",
            icon: "alert-triangle",
            content: "Parts of My Son are missing, and the reason is in the ground: bomb craters, some of them still obvious, from American bombing during the war when the valley was used by Viet Cong forces.\n\nOne of the largest temple groups was effectively destroyed. What stands today is a fraction of what was recorded by French archaeologists earlier in the century.\n\nGuides differ in how much they dwell on this. It is worth asking, because without it the gaps in the site look like ordinary decay, and they are not.",
          },
        ],
      };

    case "best-time-to-visit-hoi-an":
      return {
        title: "Best Time to Visit Hoi An",
        seoTitle: "Best Time to Visit Hoi An 2026",
        description: "The dry months, the lantern full moon, and the autumn weeks when the old town floods.",
        heroImage: IMG,
        fastFacts: [
          { icon: "sun", label: "Driest and best", value: "February to May" },
          { icon: "cloud-rain", label: "Wettest", value: "September to November" },
          { icon: "alert-triangle", label: "Flooding", value: "The old town floods most years, usually October or November" },
          { icon: "moon", label: "Lantern festival", value: "The 14th night of each lunar month" },
          { icon: "waves", label: "Beach season", value: "Roughly April to August" },
        ],
        sections: [
          {
            title: "Best Time to Visit Hoi An",
            icon: "calendar-days",
            content: "Hoi An sits in central Vietnam, which has a different rain pattern from both the north and the south, and this catches out people planning a whole-country trip around one season.\n\nFebruary to May is the best stretch: dry, warm without being brutal, and the sea is warming up. June to August is hot and humid with the beaches at their best.\n\nSeptember to November is the wet season, and it is properly wet rather than an afternoon shower. This is also when the region gets its typhoons.\n\nDecember and January are cooler and drier than the autumn but can still be grey, and the sea is too cold for most people.",
            tourCard: {
              slug: "my-son-morning-tour-with-quang-noodle-in-hoi-an",
              title: "My Son Morning Tour with Quang Noodle",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 19",
              duration: "5 hours",
              image: IMG,
            },
          },
          {
            title: "The flooding, which is normal here",
            icon: "alert-triangle",
            content: "⚠️ The old town floods. Not every year to the same degree, but often enough that the heritage houses have flood-level marks on their walls going back decades and boats stored upstairs.\n\nIt usually happens in October or November. Streets near the river go under, shops move their stock up, and for a day or two people move around the centre by boat. It is dramatic, photogenic and disruptive in equal measure.\n\nIf your dates fall in that window, keep the plan loose and do not book the one unmissable thing for a fixed date. Outside October and November this is not a consideration.",
          },
          {
            title: "The lantern full moon",
            icon: "moon",
            content: "On the fourteenth night of each lunar month the old town turns off its electric lights and lights lanterns instead. Shops and houses put out candles, people float paper lanterns on the river, and there is music in the streets.\n\nIt happens monthly rather than once a year, which surprises people who plan a trip around a single festival date. Check which night falls in your stay and keep that evening free.\n\nIt is busy. Very busy, in high season. The compensation is that the town is doing the thing it is best at, and the crowd is part of it rather than in the way of it.",
          },
        ],
      };

    case "hoi-an-cooking-classes-guide":
      return {
        title: "Cooking Classes in Hoi An: Tra Que Farm, Basket Boats, Cao Lau and White Rose, and Which Class to Book",
        seoTitle: "Hoi An Cooking Classes Guide 2026",
        description: "Hoi An has more cooking classes per square kilometre than anywhere in Vietnam. The formats (market plus class, farm class, basket-boat class), the local dishes, prices, dietary notes and how to choose.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/rural-cycle-market-tour-basket-boat-and-organic-farm-cooking-in-hoi-an/img0/1600.webp",
        fastFacts: [
          { icon: "utensils", label: "Local dishes", value: "Cao lau, white rose dumplings, banh xeo, mi quang, spring rolls" },
          { icon: "clock", label: "Length", value: "3 to 5 hours depending on format" },
          { icon: "ticket", label: "Price", value: "USD 25 to 55 per person" },
          { icon: "map", label: "Where", value: "Old town, Tra Que village, Cam Thanh coconut village" },
          { icon: "leaf", label: "Diets", value: "Vegetarian and vegan standard; halal on request at some" },
          { icon: "calendar", label: "Book", value: "1 to 2 days ahead in high season" },
        ],
        sections: [

          {
            title: "The Hoi An formats",
            icon: "utensils",
            content: "Three styles exist. Market-plus-class: a walk through the central market for herbs and rice paper, then a restaurant kitchen in the old town, three hours. Farm class: a bicycle ride to Tra Que, the herb village between the town and the beach, where you pick from the beds, sometimes water them with the shoulder cans, then cook in a garden kitchen, four hours. Basket-boat class: a ride through the Cam Thanh coconut waterways in a round bamboo boat, then a class in a village house, five hours with the boat. The third is the most fun with children, the second the prettiest, the first the most efficient.",
            tourCard: {
              slug: "rural-cycle-market-tour-basket-boat-and-organic-farm-cooking-in-hoi-an",
              title: "Rural Cycle, Market Tour, Basket Boat and Organic Farm Cooking in Hoi An",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 46.76",
              duration: "4 hours",
              image: "https://images.asiabylocals.com/asiabylocals/tours/rural-cycle-market-tour-basket-boat-and-organic-farm-cooking-in-hoi-an/img0/1600.webp",
            },
          },
          {
            title: "What you cook",
            icon: "book",
            content: "Hoi An's own dishes make the menu different from Hanoi's or Saigon's: cao lau, the thick noodles said to need water from a particular well, with pork and croutons; banh bao vac, the white rose dumplings that one family in town supplies to every restaurant; mi quang turmeric noodles from the province; banh xeo crepes; fresh spring rolls; and a green mango or banana-flower salad. Most classes do four or five, and you eat everything you make.",
            tourCard: {
              slug: "market-tour-basket-boat-ride-and-cooking-class-by-hangcoconut-in-hoi-an",
              title: "Market Tour, Basket Boat Ride and Cooking Class by Hangcoconut in Hoi An",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 26.00",
              duration: "Flexible",
              image: "https://images.asiabylocals.com/asiabylocals/tours/market-tour-basket-boat-ride-and-cooking-class-by-hangcoconut-in-hoi-an/img0/1600.webp",
            },
          },
          {
            title: "Choosing",
            icon: "users",
            content: "Half a day with a market and a kitchen suits a first visit and a tight schedule. The Tra Que farm class is the one to book if you have a full morning and want the countryside; go early, the beds are in full sun by 10:00. The coconut-village class is a family day. Home classes in a local house, for two to six, cost slightly more and end with a family lunch. Read whether the class is hands-on at your own station or a demonstration; both exist and the price is similar.",
            tourCard: {
              slug: "tra-que-village-cooking-class-with-massage-in-hoi-an",
              title: "Tra Que Village Cooking Class with Massage in Hoi An",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 24.70",
              duration: "50 minutes",
              image: "https://images.asiabylocals.com/asiabylocals/tours/tra-que-village-cooking-class-with-massage-in-hoi-an/img0/1600.webp",
            },
          },
          {
            title: "Diets and practical",
            icon: "leaf",
            content: "Vegetarian and vegan menus are standard, halal chicken or seafood versions run at a few schools on request, and fish sauce swaps for soy on notice. Children from six take part. Wear closed shoes for the farm and sunscreen for the bicycle ride; the boat class gets you damp. Morning classes end with lunch, afternoon classes with dinner, and the old-town ones can be joined straight after the [ancient town walk](/vietnam/hoi-an/hoi-an-ancient-town-guide).",
            tourCard: {
              slug: "hoi-an-cooking-class-and-tra-que-vegetable-village-by-bike-by-local-operator",
              title: "Hoi An Cooking Class and Tra Que Vegetable Village by Bike by Local Operator",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 62.61",
              duration: "6 hours",
              image: "https://images.asiabylocals.com/asiabylocals/tours/hoi-an-cooking-class-and-tra-que-vegetable-village-by-bike-by-local-operator/img0/1600.webp",
            },
          },
          {
            title: "Prices",
            icon: "ticket",
            content: "USD 25 to 35 for a market-and-kitchen class, USD 35 to 50 for the Tra Que farm class with bicycles, USD 40 to 55 for the basket-boat format, private classes from USD 70 for two. Everything eaten is included and most give a recipe booklet. The [tailoring guide](/vietnam/hoi-an/hoi-an-tailoring-guide) explains how to fit a fitting around a morning class.",
            tourCard: {
              slug: "tra-que-herb-village-cooking-class-in-hoi-an",
              title: "Tra Que Herb Village Cooking Class in Hoi An",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 40.94",
              duration: "Flexible",
              image: "https://images.asiabylocals.com/asiabylocals/tours/tra-que-herb-village-cooking-class-in-hoi-an/img0/1600.webp",
            },
          },
        ],
        faqs: [
          { q: "Which is the best cooking class format in Hoi An?", a: "The Tra Que farm class for the setting, the basket-boat class for families, the market-and-kitchen class for a quick half day. All cook the same local dishes." },
          { q: "What dishes do you learn in Hoi An?", a: "Cao lau noodles, white rose dumplings, mi quang, banh xeo, fresh spring rolls and a salad, four or five per class." },
          { q: "How much is a cooking class in Hoi An?", a: "USD 25 to 55 depending on format, food included; private classes from USD 70 for two." },
          { q: "Are Hoi An cooking classes vegetarian-friendly?", a: "Yes, vegetarian and vegan menus are standard; ask at booking and fish sauce is swapped for soy." },
        ],
      };

    case "hoi-an-lantern-festival-and-night-guide":
      return {
        title: "Hoi An at Night: The Lantern Festival Dates, the River Boats, the Night Market, and What Is Worth Your Evening",
        seoTitle: "Hoi An Lantern Festival & Night Guide 2026",
        description: "When the monthly full-moon lantern festival falls, what actually happens, the paper-lantern boats on the Thu Bon, the An Hoi night market, the lantern-making workshops, and how to avoid the crush.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/morning-market-old-town-and-lantern-workshop-in-hoi-an/img0/1600.webp",
        fastFacts: [
          { icon: "moon", label: "Lantern festival", value: "The 14th day of each lunar month, dusk to about 22:00" },
          { icon: "ship", label: "Boat ride", value: "20 to 30 minutes, small fee, from the old-town quay" },
          { icon: "map", label: "Night market", value: "An Hoi island, across the bridge, nightly" },
          { icon: "clock", label: "Old town", value: "Lights on from dusk; motorbikes banned in the evening" },
          { icon: "ticket", label: "Lantern workshop", value: "USD 10 to 20, 1 to 2 hours" },
          { icon: "users", label: "Quiet hours", value: "Before 18:00 and after 21:30" },
        ],
        sections: [

          {
            title: "The old town after dark",
            icon: "moon",
            content: "Hoi An's old town is closed to motorbikes for most of the day and the evening belongs to walkers: silk lanterns strung across the streets, the assembly halls lit, the Japanese bridge reflected in the river, and the quay lined with sampans hung with lanterns. It is the most photographed hour in Vietnam and, from 18:30 to 21:00 on a weekend, the most crowded street in the country. The trick is timing: dusk itself, around 17:30, before the coaches from Da Nang arrive, and after 21:30, when the town clears and the lanterns stay on.",
            tourCard: {
              slug: "morning-market-old-town-and-lantern-workshop-in-hoi-an",
              title: "Morning Market, Old Town and Lantern Workshop in Hoi An",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 49.36",
              duration: "Flexible",
              image: "https://images.asiabylocals.com/asiabylocals/tours/morning-market-old-town-and-lantern-workshop-in-hoi-an/img0/1600.webp",
            },
          },
          {
            title: "The lantern festival",
            icon: "calendar",
            content: "On the 14th day of every lunar month the town switches off its electric lights, the streets and houses run on candle lanterns, families make offerings at the ancestral altars and the river fills with floating paper lanterns. It runs from dusk to about 22:00 and the dates shift each month with the lunar calendar; the tourist office publishes them a year ahead. It is beautiful and it is the busiest night of the month; book accommodation in the old town well ahead and go to the river early or late. The floating-lantern ritual happens every night now, on a smaller scale.",
            tourCard: {
              slug: "night-boat-trip-and-floating-lantern-on-hoai-river-hoi-an-by-local-operator",
              title: "Night Boat Trip and Floating Lantern on Hoai River Hoi An by Local Operator",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 10.39",
              duration: "20 minutes",
              image: "https://images.asiabylocals.com/asiabylocals/tours/night-boat-trip-and-floating-lantern-on-hoai-river-hoi-an-by-local-operator/img0/1600.webp",
            },
          },
          {
            title: "Boats, market and lanterns",
            icon: "ship",
            content: "A 20- to 30-minute sampan ride on the Thu Bon from the old-town quay, rowed past the lantern-lit facades, costs a few dollars per boat and is the night's one essential; you set a paper lantern on the water from it. The An Hoi night market across the bridge sells lanterns, street food and souvenirs from about 17:00, and is where the lantern photographs are taken. Lantern-making workshops, an hour or two of bamboo frame and silk for USD 10 to 20, run in the afternoon and you carry your lantern out.",
            tourCard: {
              slug: "market-tour-cooking-class-and-lantern-workshop-in-hoi-an",
              title: "Market Tour, Cooking Class, and Lantern Workshop in Hoi An",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 33.77",
              duration: "4 hours",
              image: "https://images.asiabylocals.com/asiabylocals/tours/market-tour-cooking-class-and-lantern-workshop-in-hoi-an/img0/1600.webp",
            },
          },
          {
            title: "Food at night",
            icon: "utensils",
            content: "The old town's restaurants are good and priced for visitors; the better eating is at the food stalls along the river, the banh mi cart that a television chef made famous on Phan Chu Trinh, the cao lau stalls in the central market until it closes, and the night market's grilled skewers. A guided [food walk](/vietnam/hoi-an/hoi-an-cooking-classes-guide) in the early evening avoids the guesswork. Bars cluster on the An Hoi side and along Nguyen Phuc Chu.",
            tourCard: {
              slug: "hoi-an-coconut-boat-lantern-making-and-cooking-class-organic-by-local-operator",
              title: "Hoi An Coconut Boat, Lantern Making and Cooking Class Organic by Local Operator",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 36.36",
              duration: "4 hours",
              image: "https://images.asiabylocals.com/asiabylocals/tours/hoi-an-coconut-boat-lantern-making-and-cooking-class-organic-by-local-operator/img0/1600.webp",
            },
          },
          {
            title: "Practical",
            icon: "users",
            content: "The old town ticket (a small combined fee for the heritage houses and halls) is checked at the entry gates by day and rarely in the evening. Sunset is 17:30 to 18:30 depending on season; the [best time to visit](/vietnam/hoi-an/best-time-to-visit-hoi-an) page covers the rain, and October and November evenings can flood the quay. Wear something for the mosquitoes on the river, carry small notes for the boat and the lanterns, and walk: everything is within ten minutes.",
            tourCard: {
              slug: "private-night-boat-trip-and-release-lantern-on-river-in-hoi-an",
              title: "Private night boat Trip and release lantern on river in Hoi An",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 10.80",
              duration: "15 minutes",
              image: "https://images.asiabylocals.com/asiabylocals/tours/private-night-boat-trip-and-release-lantern-on-river-in-hoi-an/img0/1600.webp",
            },
          },
        ],
        faqs: [
          { q: "When is the Hoi An lantern festival?", a: "On the 14th day of every lunar month, from dusk to about 22:00, when the old town turns off its electric lights. The dates move each month; the tourist office lists them." },
          { q: "Do I need the lantern festival to see the lanterns?", a: "No. The silk lanterns are lit every night and the floating-lantern boats run nightly; the festival adds candlelight and crowds." },
          { q: "How much is a lantern boat ride in Hoi An?", a: "A few dollars per boat for 20 to 30 minutes from the old-town quay, plus a small amount for a paper lantern to float." },
          { q: "When is Hoi An old town least crowded at night?", a: "At dusk around 17:30, before the day-trip coaches arrive, and after 21:30 when they leave." },
        ],
      };

    case "hoi-an-countryside-and-bike-tours":
      return {
        title: "Hoi An Countryside by Bicycle: Tra Que, Cam Thanh Basket Boats, Kim Bong, Cam Kim Island, and the Rice Fields",
        seoTitle: "Hoi An Bicycle & Countryside Tours 2026",
        description: "The flat, quiet countryside around Hoi An is the best cycling in Vietnam. The loops through the herb village, the coconut waterways, the boat-builders of Kim Bong and Cam Kim island, the basket-boat ride, and when the fields are green.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/hoi-an-countryside-bike-tour-and-basket-boat-ride-by-local-operator/img0/1600.webp",
        fastFacts: [
          { icon: "bike", label: "Terrain", value: "Flat, quiet lanes and dyke paths" },
          { icon: "clock", label: "Length", value: "3 to 5 hours" },
          { icon: "ticket", label: "Price", value: "USD 25 to 50 with bike and basket boat" },
          { icon: "map", label: "Stops", value: "Tra Que, Cam Thanh, Kim Bong, Cam Kim, An Bang" },
          { icon: "calendar", label: "Fields", value: "Green Feb to Apr and Aug to Sep, gold before harvest" },
          { icon: "users", label: "Kids", value: "Child seats and small bikes on most tours" },
        ],
        sections: [

          {
            title: "Why cycle here",
            icon: "bike",
            content: "Hoi An sits on a flat delta between the river and the sea, and within ten minutes of the old town the lanes run through rice fields, shrimp ponds, herb gardens and villages where the water buffalo still plough. There are no hills, little traffic on the back lanes, and everything worth seeing is within a 15-kilometre loop. Half a day on a bicycle is how most visitors find the Hoi An they came for, and the tours here get the best reviews of anything in the town.",
            tourCard: {
              slug: "hoi-an-countryside-bike-tour-and-basket-boat-ride-by-local-operator",
              title: "Hoi An Countryside Bike Tour and Basket Boat Ride by Local Operator",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 46.76",
              duration: "Flexible",
              image: "https://images.asiabylocals.com/asiabylocals/tours/hoi-an-countryside-bike-tour-and-basket-boat-ride-by-local-operator/img0/1600.webp",
            },
          },
          {
            title: "The classic loop",
            icon: "map",
            content: "Out through the fields to Tra Que, the herb village where 200 families grow the basil, mint and coriander for the town's kitchens on beds fertilised with lake weed, with a stop to try the watering cans; on to Cam Thanh, the coconut-palm waterways where the round bamboo basket boats (thung chai) take you through the channels, with a spinning demonstration from the boatmen; across to Cam Kim island by the bridge or a small ferry, where the Kim Bong carpenters have built boats and temple beams for 400 years; and back by the dyke road. Four to five hours with a lunch stop in a village house.",
            tourCard: {
              slug: "rural-cycling-tour-to-villages-with-basket-boat-ride-in-hoi-an",
              title: "Rural Cycling Tour to Villages with Basket Boat Ride in Hoi An",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 37.14",
              duration: "3 hours",
              image: "https://images.asiabylocals.com/asiabylocals/tours/rural-cycling-tour-to-villages-with-basket-boat-ride-in-hoi-an/img0/1600.webp",
            },
          },
          {
            title: "Shorter and longer versions",
            icon: "clock",
            content: "A three-hour morning ride does Tra Que and the fields. Full-day rides add An Bang beach for a swim, or the My Son Cham temples 40 km inland by van with the bikes for the last stretch. Sunrise rides leave at 5:30 in the hot months and see the farmers at work; sunset rides end at the beach. E-bikes are offered by a few operators for the longer routes.",
            tourCard: {
              slug: "hoi-an-cooking-class-and-tra-que-vegetable-village-by-bike-by-local-operator",
              title: "Hoi An Cooking Class and Tra Que Vegetable Village by Bike by Local Operator",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 62.61",
              duration: "6 hours",
              image: "https://images.asiabylocals.com/asiabylocals/tours/hoi-an-cooking-class-and-tra-que-vegetable-village-by-bike-by-local-operator/img0/1600.webp",
            },
          },
          {
            title: "Basket boats, honestly",
            icon: "ship",
            content: "The Cam Thanh basket-boat ride is a short (20 to 30 minutes), fun and slightly staged experience: boatmen spin the round boats, sing, and make rings from palm leaves; some channels have loud music from other boats. Go with a tour that uses the quieter channels or early in the morning. It is included in most countryside rides and is worth it for the coconut forest itself, which the war defoliated and the villagers replanted.",
            tourCard: {
              slug: "fun-day-of-cycling-buffalo-riding-duck-farm-visit-and-basket-boat-ride-in-hoi-an",
              title: "Fun Day of Cycling, Buffalo Riding, Duck Farm Visit and Basket Boat Ride in Hoi An",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 73.00",
              duration: "3.5 hours",
              image: "https://images.asiabylocals.com/asiabylocals/tours/fun-day-of-cycling-buffalo-riding-duck-farm-visit-and-basket-boat-ride-in-hoi-an/img0/1600.webp",
            },
          },
          {
            title: "Practical",
            icon: "calendar",
            content: "Bikes, helmets and water are provided; wear a hat and sunscreen, the lanes have little shade. The fields are greenest from February to April and again in August and September, and gold just before the harvests in May and September; October and November bring rain and sometimes flooding to the low lanes. Book a day ahead in high season. Pair with a [cooking class](/vietnam/hoi-an/hoi-an-cooking-classes-guide) at Tra Que to do farm and kitchen in one morning.",
            tourCard: {
              slug: "cam-thanh-coconut-basket-boat-experience-from-hoi-an-da-nang-by-local-operator",
              title: "Cam Thanh Coconut Basket Boat Experience from Hoi An/Da Nang by Local Operator",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 17.15",
              duration: "1 hours",
              image: "https://images.asiabylocals.com/asiabylocals/tours/cam-thanh-coconut-basket-boat-experience-from-hoi-an-da-nang-by-local-operator/img0/1600.webp",
            },
          },
        ],
        faqs: [
          { q: "Is Hoi An good for cycling?", a: "Yes, it is the best cycling in Vietnam: flat, quiet lanes through rice fields and villages, all within a 15 km loop of the old town." },
          { q: "What is the basket boat ride in Hoi An?", a: "A 20- to 30-minute ride in a round bamboo boat through the Cam Thanh coconut waterways, with spinning demonstrations; included in most countryside tours." },
          { q: "How long is a Hoi An countryside bike tour?", a: "Three hours for Tra Que and the fields, four to five for the full loop with Cam Thanh and Cam Kim island, a full day with the beach or My Son." },
          { q: "When are the rice fields green in Hoi An?", a: "February to April and August to September; they turn gold just before harvest in May and late September." },
        ],
      };

    case "hoi-an-day-trips-guide":
      return {
        title: "Day Trips from Hoi An: My Son, Hue over the Hai Van Pass, Ba Na Hills, Cham Island, and Da Nang",
        seoTitle: "Day Trips from Hoi An 2026",
        description: "What is reachable in a day from Hoi An, how long each takes, which are worth it, and how to combine the Hai Van Pass with Hue or the Marble Mountains with Da Nang.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/discover-central-vietnam-ba-na-my-son-hue-hoi-an-by-local-operator/img0/1600.webp",
        fastFacts: [
          { icon: "landmark", label: "My Son", value: "40 km, half day, go for opening" },
          { icon: "mountain", label: "Hue via Hai Van", value: "130 km, full day, motorbike or car" },
          { icon: "ticket", label: "Ba Na Hills", value: "50 km, full day, cable car ticket is the cost" },
          { icon: "ship", label: "Cham Island", value: "20 km offshore, snorkelling, March to September" },
          { icon: "map", label: "Da Nang", value: "30 km, Marble Mountains, Lady Buddha, Dragon Bridge" },
          { icon: "clock", label: "Transfers", value: "Da Nang airport 45 minutes" },
        ],
        sections: [

          {
            title: "My Son",
            icon: "landmark",
            content: "The Cham temple ruins 40 km west, built between the 4th and 13th centuries by the Hindu kingdom that ruled this coast, are a UNESCO site of brick towers in a jungle valley, badly bombed in 1969 and partly restored. Half a day: leave at 7:00 to arrive at opening before the coaches and the heat, see the main groups B, C and D, watch the short Cham dance performance if it is on, and be back for lunch. Sunrise tours and boat-return tours down the Thu Bon are the pleasant variants. The [My Son guide](/vietnam/hoi-an/my-son-sanctuary-guide) has the site itself.",
            tourCard: {
              slug: "discover-central-vietnam-ba-na-my-son-hue-hoi-an-by-local-operator",
              title: "Discover Central Vietnam: Ba Na – My Son – Hue – Hoi An by Local Operator",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 62.35",
              duration: "6 hours",
              image: "https://images.asiabylocals.com/asiabylocals/tours/discover-central-vietnam-ba-na-my-son-hue-hoi-an-by-local-operator/img0/1600.webp",
            },
          },
          {
            title: "Hue over the Hai Van Pass",
            icon: "mountain",
            content: "Hue is 130 km north and the road there over the Hai Van Pass, the cloud pass between the central coast and the north, is the point: 20 km of hairpins with the sea below, the old French and American bunkers on the summit, and the Lang Co lagoon beyond. By motorbike pillion with an Easy Rider driver it is the best day in central Vietnam; by private car it is comfortable and stops at the same places. Hue itself needs four hours for the citadel and a tomb, so the day is 12 hours; better is one way with luggage, ending in Hue.",
            tourCard: {
              slug: "hue-hoi-an-and-da-nang-via-hai-van-pass",
              title: "Hue ↔ Hoi An and Da Nang via Hai Van Pass",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 18.19",
              duration: "Flexible",
              image: "https://images.asiabylocals.com/asiabylocals/tours/hue-hoi-an-and-da-nang-via-hai-van-pass/img0/1600.webp",
            },
          },
          {
            title: "Ba Na Hills and Da Nang",
            icon: "ticket",
            content: "Ba Na Hills, an hour away, is the French hill station rebuilt as a theme park at 1,400 metres with the Golden Bridge held by giant stone hands; the cable car ticket is most of the cost and the crowd is largest from 10:00, so early departures matter. Da Nang's own sights, the Marble Mountains, Lady Buddha on Son Tra and the Dragon Bridge's fire show on weekend nights, make a half day. The [Ba Na guide](/vietnam/da-nang/ba-na-hills-golden-bridge-guide) and [Marble Mountains guide](/vietnam/da-nang/marble-mountains-guide) cover them.",
            tourCard: {
              slug: "ba-na-hills-and-golden-bridge-tour-from-hoi-an-da-nang-by-local-operator",
              title: "Ba Na Hills and Golden Bridge Tour from Hoi An/Da Nang by Local Operator",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 31.17",
              duration: "9 hours",
              image: "https://images.asiabylocals.com/asiabylocals/tours/ba-na-hills-and-golden-bridge-tour-from-hoi-an-da-nang-by-local-operator/img0/1600.webp",
            },
          },
          {
            title: "Cham Island",
            icon: "ship",
            content: "Cu Lao Cham, 20 km offshore, is a marine reserve of eight islands reached by speedboat in 20 minutes from Cua Dai: snorkelling on the coral, a fishing village, a beach and a seafood lunch, from March to September when the sea is calm. Day tours run USD 30 to 50; the reef is modest by Thai standards and the trip is about the island. Closed by weather from October to February.",
            tourCard: {
              slug: "snorkelling-or-diving-in-cham-island-from-da-nang-or-hoi-an-by-local-operator",
              title: "Snorkelling or Diving in Cham Island From Da Nang or Hoi An by Local Operator",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 44.16",
              duration: "7 hours",
              image: "https://images.asiabylocals.com/asiabylocals/tours/snorkelling-or-diving-in-cham-island-from-da-nang-or-hoi-an-by-local-operator/img0/1600.webp",
            },
          },
          {
            title: "Choosing",
            icon: "calendar",
            content: "One spare day: My Son in the morning and the [countryside by bicycle](/vietnam/hoi-an/hoi-an-countryside-and-bike-tours) in the afternoon. Two: the Hai Van Pass to Hue, ideally one-way. Three: Ba Na or Cham Island by season. Private cars for two to four run USD 60 to 120 a day plus entries; group tours USD 20 to 45 per person. October to December is the rain, when My Son and the pass are often in cloud.",
            tourCard: {
              slug: "hai-van-pass-easy-rider-tour-from-hoi-an-da-nang-and-hue-by-local-operator",
              title: "Hai Van Pass Easy Rider Tour from Hoi An, Da Nang and Hue by Local Operator",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 130.00",
              duration: "8 hours",
              image: "https://images.asiabylocals.com/asiabylocals/tours/hai-van-pass-easy-rider-tour-from-hoi-an-da-nang-and-hue-by-local-operator/img0/1600.webp",
            },
          },
        ],
        faqs: [
          { q: "What is the best day trip from Hoi An?", a: "My Son at opening for half a day; the Hai Van Pass to Hue for a full day, ideally one-way with luggage." },
          { q: "How far is Hue from Hoi An?", a: "About 130 km, three hours by car over the Hai Van Pass, longer by motorbike with stops. A round trip in a day is 12 hours." },
          { q: "Can you visit Cham Island from Hoi An?", a: "Yes, by speedboat in 20 minutes from Cua Dai, March to September only; snorkelling, a village and lunch, USD 30 to 50." },
          { q: "Is Ba Na Hills worth it from Hoi An?", a: "For the Golden Bridge and the cable car, yes as a full day with an early start; the ticket is most of the cost and it is crowded by mid-morning." },
        ],
      };

    case "hoi-an-with-kids":
      return {
        title: "Hoi An with Kids: Basket Boats, Lantern Making, the Beach, Bicycles, and the Things That Actually Work",
        seoTitle: "Hoi An with Kids 2026",
        description: "Why Hoi An is the easiest stop in Vietnam with children, the activities that hold their attention (basket boats, lantern workshops, farm cooking, the beach), the ages that suit each, and the practicalities of heat, traffic and food.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/hoi-an-coconut-boat-lantern-making-and-cooking-class-organic-by-local-operator/img0/1600.webp",
        fastFacts: [
          { icon: "users", label: "Best ages", value: "4 to 14; the town is stroller-flat" },
          { icon: "ship", label: "Basket boats", value: "Cam Thanh, 20 to 30 minutes, spinning boats" },
          { icon: "brush", label: "Lantern workshop", value: "1 to 2 hours, from about age 5" },
          { icon: "sun", label: "Beach", value: "An Bang, 5 km, calm March to August" },
          { icon: "bike", label: "Bikes", value: "Child seats and small bikes available" },
          { icon: "utensils", label: "Food", value: "Spring rolls, banh mi, fruit shakes; nothing spicy by default" },
        ],
        sections: [

          {
            title: "Why it works",
            icon: "users",
            content: "Hoi An is car-free in the old town for most of the day, flat, small and safe, with a beach five kilometres away, a countryside you can cycle with a child seat, and food that children eat without persuasion. The evening lanterns are magic at any age. It is the town where families slow down for three or four nights in the middle of a Vietnam trip, and the activities below are the ones that get repeated.",
            tourCard: {
              slug: "hoi-an-coconut-boat-lantern-making-and-cooking-class-organic-by-local-operator",
              title: "Hoi An Coconut Boat, Lantern Making and Cooking Class Organic by Local Operator",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 36.36",
              duration: "4 hours",
              image: "https://images.asiabylocals.com/asiabylocals/tours/hoi-an-coconut-boat-lantern-making-and-cooking-class-organic-by-local-operator/img0/1600.webp",
            },
          },
          {
            title: "The activities",
            icon: "ship",
            content: "The Cam Thanh basket-boat ride is the winner: round bamboo boats through the coconut channels, boatmen spinning them, palm-leaf rings and grasshoppers made on the spot, 20 to 30 minutes, from age two upwards. Lantern-making workshops, an hour or two of bamboo and silk, suit five and up and the lantern goes home. The Tra Que farm cooking class lets children water the beds and roll spring rolls. Bicycle tours have child seats and small bikes, with a three-hour morning loop the right length. My Son is a hot walk and better left for teenagers.",
            tourCard: {
              slug: "night-boat-trip-and-floating-lantern-on-hoai-river-hoi-an-by-local-operator",
              title: "Night Boat Trip and Floating Lantern on Hoai River Hoi An by Local Operator",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 10.39",
              duration: "20 minutes",
              image: "https://images.asiabylocals.com/asiabylocals/tours/night-boat-trip-and-floating-lantern-on-hoai-river-hoi-an-by-local-operator/img0/1600.webp",
            },
          },
          {
            title: "Beach and water",
            icon: "sun",
            content: "An Bang beach is a ten-minute taxi from the old town, with calm water from March to August, sunbeds and cafes; Cua Dai further south has lost sand to erosion. The sea is rough and often red-flagged from October to February. Cham Island snorkelling is for confident swimmers from about eight, in season. Hotel pools do the rest, and most family hotels between the town and the beach have one.",
            tourCard: {
              slug: "an-bang-beach-tra-que-village-and-taran-shop-in-hoi-an",
              title: "An Bang Beach, Tra Que Village and Taran Shop in Hoi An",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 90.00",
              duration: "8 hours",
              image: "https://images.asiabylocals.com/asiabylocals/tours/an-bang-beach-tra-que-village-and-taran-shop-in-hoi-an/img0/1600.webp",
            },
          },
          {
            title: "Food and the evening",
            icon: "utensils",
            content: "Children eat fresh spring rolls, banh mi, fried rice, cao lau noodles and the fruit shakes; nothing is spicy unless asked. The night market skewers and the lantern boats (a few dollars, from the quay) are the evening, then bed by nine before the 21:30 crowd-thinning that adults enjoy. The [night guide](/vietnam/hoi-an/hoi-an-lantern-festival-and-night-guide) has the timing.",
            tourCard: {
              slug: "market-tour-cooking-class-and-lantern-workshop-in-hoi-an",
              title: "Market Tour, Cooking Class, and Lantern Workshop in Hoi An",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 33.77",
              duration: "4 hours",
              image: "https://images.asiabylocals.com/asiabylocals/tours/market-tour-cooking-class-and-lantern-workshop-in-hoi-an/img0/1600.webp",
            },
          },
          {
            title: "Practical",
            icon: "calendar",
            content: "Heat: do the outdoor things before 10:30 and after 16:00 from April to August, and carry water. Traffic outside the old town is motorbikes; hold hands at crossings and take taxis or Grab between the town and the beach. Pharmacies and a good clinic are in town. February to April is the family sweet spot: dry, warm, green fields, calm sea. The [best time to visit](/vietnam/hoi-an/best-time-to-visit-hoi-an) page covers the rain months.",
            tourCard: {
              slug: "private-night-boat-trip-and-release-lantern-on-river-in-hoi-an",
              title: "Private night boat Trip and release lantern on river in Hoi An",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 10.80",
              duration: "15 minutes",
              image: "https://images.asiabylocals.com/asiabylocals/tours/private-night-boat-trip-and-release-lantern-on-river-in-hoi-an/img0/1600.webp",
            },
          },
        ],
        faqs: [
          { q: "Is Hoi An good for children?", a: "Yes, the best stop in Vietnam for families: a car-free old town, a beach nearby, basket boats, lantern workshops and farm cooking, all flat and close together." },
          { q: "What is the best activity in Hoi An for kids?", a: "The Cam Thanh basket-boat ride, from age two, followed by a lantern-making workshop from about five." },
          { q: "Which beach in Hoi An is best for kids?", a: "An Bang, ten minutes from the old town, calm from March to August. The sea is rough and red-flagged from October to February." },
          { q: "When should families visit Hoi An?", a: "February to April: dry, warm, green rice fields and a calm sea. Avoid October to December for the rain and flooding." },
        ],
      };

    case "best-cham-islands-tour-hoi-an":
      return {
        title: "Which Is the Best Cham Islands Tour from Hoi An?",
        description: "Compare real Cham Islands day trips from Hoi An — a budget snorkeling tour, a lunch-included trip, and a PADI divemaster-led diving and snorkeling option.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/cham-islands-diving-and-snorkeling-with-padi-divemaster-hoi-an/img0/1600.webp",
        sections: [
          {
            title: "The Short Answer",
            content: "The Cham Islands, a marine protected area off the coast, offer Hoi An's best snorkeling and diving — a genuinely different day from the Ancient Town's cultural sights.",
            tourCard: { slug: "cham-island-daily-tour-with-snorkeling", title: "Cham Island Daily Tour with Snorkeling", description: "A daily tour of Cham Island with snorkeling.", price: "From $47", duration: "6.5 hours", image: "https://images.asiabylocals.com/asiabylocals/tours/cham-island-daily-tour-with-snorkeling/img0/1600.webp" },
          },
          {
            title: "Best Value: Snorkeling Trip with Lunch",
            content: "A similarly priced snorkeling trip that includes lunch, worth comparing on exact timing and stops.",
            tourCard: { slug: "cham-islands-snorkeling-trip-with-lunch", title: "Cham Islands Snorkeling Trip with Lunch", description: "A snorkeling trip to the Cham Islands with lunch included.", price: "From $53", duration: "5.5 hours", image: "https://images.asiabylocals.com/asiabylocals/tours/cham-islands-snorkeling-trip-with-lunch/img0/1600.webp" },
          },
          {
            title: "Best for Divers: PADI Divemaster-Led Diving and Snorkeling",
            content: "This version is led by a PADI divemaster, worth it for travelers who want an actual scuba dive rather than snorkeling alone.",
            tourCard: { slug: "cham-islands-diving-and-snorkeling-with-padi-divemaster-hoi-an", title: "Cham Islands Diving and Snorkeling with PADI Divemaster (Hoi An)", description: "A diving and snorkeling tour of the Cham Islands led by a PADI divemaster.", price: "From $168", duration: "Full day", image: "https://images.asiabylocals.com/asiabylocals/tours/cham-islands-diving-and-snorkeling-with-padi-divemaster-hoi-an/img0/1600.webp" },
          },
          {
            title: "Practical Tips",
            content: "The Cham Islands are a marine protected area, so some zones restrict snorkeling/diving seasonally — check current access with your operator.",
          },
        ],
        faqs: [
          { q: "What are the Cham Islands known for?", a: "A marine protected area off Hoi An's coast, known for the area's best snorkeling and diving." },
          { q: "Can I scuba dive at the Cham Islands?", a: "Yes, PADI divemaster-led options are available alongside standard snorkeling trips." },
        ],
      };

    case "is-painting-class-worth-it-hoi-an":
      return {
        title: "Is the Painting Class with a Local Artist Worth It in Hoi An?",
        description: "An honest look at Hoi An's painting class with a local artist in the Old Town, a creative activity distinct from the city's cooking classes and lantern-making workshops.",
        heroImage: "https://res.cloudinary.com/dx2fxyaft/image/upload/v1789201776/asiabylocals/tours/2-hours-painting-class-with-local-artist-in-oldtown-in-hoi-an/img0.jpg",
        sections: [
          {
            title: "The Short Answer",
            content: "This two-hour painting class with a local artist in the Old Town is a genuinely different creative outlet from Hoi An's usual cooking classes and lantern-making workshops, good for travelers wanting a quieter, artistic afternoon.",
            tourCard: { slug: "2-hours-painting-class-with-local-artist-in-oldtown-in-hoi-an", title: "2-Hour Painting Class with Local Artist in Old Town, Hoi An", description: "A two-hour painting class with a local artist in Hoi An's Old Town.", price: "From $42", duration: "2 hours", image: "https://res.cloudinary.com/dx2fxyaft/image/upload/v1789201776/asiabylocals/tours/2-hours-painting-class-with-local-artist-in-oldtown-in-hoi-an/img0.jpg" },
          },
          {
            title: "Practical Tips",
            content: "You take your finished painting home, so it makes a nice souvenir beyond the usual lantern or tailored clothing.",
          },
        ],
        faqs: [
          { q: "Is the painting class worth it in Hoi An?", a: "Yes, for a quieter, genuinely creative activity that's different from the city's cooking classes and lantern workshops." },
        ],
      };

    case "is-ao-dai-show-worth-it-hoi-an":
      return {
        title: "Is the Ao Dai Show Worth It in Hoi An?",
        description: "An honest look at Hoi An's Ao Dai fashion show with hotel transfers, a cultural performance distinct from the city's lantern and boat-ride evening activities.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/ao-dai-show-with-hotel-transfers-in-hoi-an/img0/1600.webp",
        sections: [
          {
            title: "The Short Answer",
            content: "This show presents Vietnam's traditional Ao Dai dress across different eras and styles, a dedicated cultural performance rather than a passive sightseeing stop — a different kind of evening than a lantern-lit riverside walk.",
            tourCard: { slug: "ao-dai-show-with-hotel-transfers-in-hoi-an", title: "Ao Dai Show with Hotel Transfers in Hoi An", description: "An Ao Dai traditional fashion show with hotel transfers included.", price: "From $57", duration: "Flexible", image: "https://images.asiabylocals.com/asiabylocals/tours/ao-dai-show-with-hotel-transfers-in-hoi-an/img0/1600.webp" },
          },
          {
            title: "Practical Tips",
            content: "Hotel transfers are included, which simplifies evening logistics compared to arranging your own transport back from the Old Town.",
          },
        ],
        faqs: [
          { q: "Is the Ao Dai show worth it in Hoi An?", a: "Yes, for a dedicated cultural performance on Vietnam's traditional dress, a different kind of evening than a lantern-lit walk." },
        ],
      };

    case "is-bach-ma-national-park-trek-worth-it-hoi-an":
      return {
        title: "Is the Bach Ma National Park Trek Worth It from Hoi An?",
        description: "An honest look at the Bach Ma National Park trekking and discovery day trip from Hoi An, a jungle hiking option distinct from the city's beach and Ancient Town activities.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/bach-ma-national-park-trekking-and-discovery-tour-from-hue-hoi-an/img0/1600.webp",
        sections: [
          {
            title: "The Short Answer",
            content: "Bach Ma National Park, between Hoi An and Hue, offers genuine jungle trekking with waterfalls and mountain viewpoints, a completely different landscape from the Old Town's canals and beaches — worth it for travelers wanting a real hiking day.",
            tourCard: { slug: "bach-ma-national-park-trekking-and-discovery-tour-from-hue-hoi-an", title: "Bach Ma National Park Trekking and Discovery Tour from Hue/Hoi An", description: "A trekking and discovery day trip to Bach Ma National Park.", price: "From $78", duration: "8 hours", image: "https://images.asiabylocals.com/asiabylocals/tours/bach-ma-national-park-trekking-and-discovery-tour-from-hue-hoi-an/img0/1600.webp" },
          },
          {
            title: "Practical Tips",
            content: "Wear proper hiking shoes and bring water — trails can be muddy and the park sees genuine humidity and elevation change.",
          },
        ],
        faqs: [
          { q: "Is the Bach Ma National Park trek worth it from Hoi An?", a: "Yes, for travelers wanting a genuine jungle hiking day, completely different from the Ancient Town's canals and beaches." },
        ],
      };

    case "is-ba-na-hills-tour-worth-it-hoi-an":
      return {
        title: "Is the Ba Na Hills and Golden Bridge Tour Worth It from Hoi An?",
        description: "An honest look at the Ba Na Hills and Golden Bridge day tour, a hilltop theme park famous for the hands sculpture 'holding up' a walkway bridge.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/ba-na-hills-and-golden-bridge-full-day-tour/img0/1600.webp",
        sections: [
          {
            title: "The Short Answer",
            content: "Ba Na Hills is a hilltop theme park reached by one of the world's longest cable car rides, home to the famous Golden Bridge with its giant stone hand sculptures, a genuinely different, more theme-park-like day than Hoi An's Ancient Town and beaches.",
            tourCard: { slug: "ba-na-hills-and-golden-bridge-full-day-tour", title: "Ba Na Hills and Golden Bridge Full-Day Tour", description: "A full-day tour to Ba Na Hills and the Golden Bridge.", price: "From $27", duration: "8 hours", image: "https://images.asiabylocals.com/asiabylocals/tours/ba-na-hills-and-golden-bridge-full-day-tour/img0/1600.webp" },
          },
          {
            title: "Practical Tips",
            content: "This gets genuinely crowded, especially on weekends — go on a weekday and arrive early for the best shot at the Golden Bridge without a packed crowd of other visitors." ,
          },
        ],
        faqs: [
          { q: "Is Ba Na Hills worth visiting from Hoi An?", a: "Yes, for the famous Golden Bridge and a genuinely different theme-park-style day, though it gets crowded — go early on a weekday." },
        ],
      };

    case "is-cham-islands-snorkeling-worth-it-hoi-an":
      return {
        title: "Is Cham Islands Snorkeling Worth It from Hoi An?",
        description: "An honest look at the Cham Islands snorkeling trip by speedboat, a marine protected area off the coast of Hoi An.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/cham-islands-snorkeling-trip-by-speedboat-with-lunch/img0/1600.webp",
        sections: [
          {
            title: "The Short Answer",
            content: "The Cham Islands are a marine protected area a short speedboat ride from Hoi An, giving genuine reef snorkeling and a beach day without the long travel that other Vietnam diving destinations require.",
            tourCard: { slug: "cham-islands-snorkeling-trip-by-speedboat-with-lunch", title: "Cham Islands Snorkeling Trip by Speedboat with Lunch", description: "A speedboat snorkeling trip to the Cham Islands with lunch included.", price: "From $46", duration: "6.5 hours", image: "https://images.asiabylocals.com/asiabylocals/tours/cham-islands-snorkeling-trip-by-speedboat-with-lunch/img0/1600.webp" },
          },
          {
            title: "Practical Tips",
            content: "Conditions are best in the calmer dry season months — ask your operator about current sea conditions if you're visiting during the rainy season." ,
          },
        ],
        faqs: [
          { q: "Is Cham Islands snorkeling worth it from Hoi An?", a: "Yes, for genuine reef snorkeling in a marine protected area just a short speedboat ride away, without a long travel commitment." },
        ],
      };

    case "is-my-son-sanctuary-tour-worth-it-hoi-an":
      return {
        title: "Is the My Son Sanctuary Tour Worth It from Hoi An?",
        description: "An honest look at the My Son Sanctuary half-day tour, a UNESCO World Heritage site of ancient Hindu temple ruins built by the Champa kingdom.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/a-perfect-journey-to-explore-my-son-in-half-day-hoi-an/img0/1600.webp",
        sections: [
          {
            title: "The Short Answer",
            content: "My Son Sanctuary is a UNESCO World Heritage site of ancient Hindu temple ruins built by the Champa kingdom, a genuinely different historical layer from Hoi An's Chinese and Japanese-influenced Ancient Town architecture, reachable in a manageable half day.",
            tourCard: { slug: "a-perfect-journey-to-explore-my-son-in-half-day-hoi-an", title: "A Perfect Journey to Explore My Son in Half Day", description: "A half-day tour to the My Son Sanctuary ruins.", price: "From $41", duration: "6 hours", image: "https://images.asiabylocals.com/asiabylocals/tours/a-perfect-journey-to-explore-my-son-in-half-day-hoi-an/img0/1600.webp" },
          },
          {
            title: "Practical Tips",
            content: "Go in the early morning — the ruins sit in a jungle valley that gets genuinely hot and humid by midday." ,
          },
        ],
        faqs: [
          { q: "Is My Son Sanctuary worth visiting from Hoi An?", a: "Yes, for a genuinely different historical layer, ancient Champa Hindu temple ruins distinct from Hoi An's own Chinese and Japanese-influenced architecture." },
        ],
      };

    case "is-basket-boat-coconut-forest-worth-it-hoi-an":
      return {
        title: "Is the Basket Boat Coconut Forest Tour Worth It in Hoi An?",
        description: "An honest look at the basket boat ride through Hoi An's coconut forest, a distinctively Vietnamese round-boat experience through mangrove waterways.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/basket-boat-ride-with-local-guide-in-coconut-forest-in-hoi-an/img0/1600.webp",
        sections: [
          {
            title: "The Short Answer",
            content: "The round basket boat is a distinctively Vietnamese craft, traditionally used by local fishermen, and paddling one through the coconut forest's narrow mangrove waterways with a local guide is a genuinely different, more playful activity than Hoi An's usual Ancient Town walks.",
            tourCard: { slug: "basket-boat-ride-with-local-guide-in-coconut-forest-in-hoi-an", title: "Basket Boat Ride with Local Guide in Coconut Forest", description: "A basket boat ride through Hoi An's coconut forest waterways.", price: "From $34", duration: "3 hours", image: "https://images.asiabylocals.com/asiabylocals/tours/basket-boat-ride-with-local-guide-in-coconut-forest-in-hoi-an/img0/1600.webp" },
          },
          {
            title: "Practical Tips",
            content: "Some guides add playful spinning tricks with the basket boat — a fun, low-stakes activity good for travelers of most ages." ,
          },
        ],
        faqs: [
          { q: "Is the basket boat coconut forest tour worth it?", a: "Yes, for a genuinely playful, distinctively Vietnamese boating experience through mangrove waterways, different from Hoi An's usual walking tours." },
        ],
      };

    case "is-countryside-bicycle-tour-worth-it-hoi-an":
      return {
        title: "Is the Hoi An Countryside Bicycle Tour Worth It?",
        description: "An honest look at the countryside bicycle tour around Hoi An, a slower-paced way to see rice fields and village life beyond the Ancient Town.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/3-hours-hoi-an-countryside-bicycle-tour-fun-and-safe-by-local-operator/img0/1600.webp",
        sections: [
          {
            title: "The Short Answer",
            content: "Cycling through the flat countryside around Hoi An covers more ground than walking while staying slow enough to actually take in rice fields and everyday village life, a genuinely different pace from the Ancient Town's dense lantern-lit streets.",
            tourCard: { slug: "3-hours-hoi-an-countryside-bicycle-tour-fun-and-safe-by-local-operator", title: "3-Hours Hoi An Countryside Bicycle Tour", description: "A guided bicycle tour through the countryside around Hoi An.", price: "From $70", duration: "3 hours", image: "https://images.asiabylocals.com/asiabylocals/tours/3-hours-hoi-an-countryside-bicycle-tour-fun-and-safe-by-local-operator/img0/1600.webp" },
          },
          {
            title: "Practical Tips",
            content: "Go in the early morning or late afternoon to avoid the midday heat — the terrain is flat and easy, so the heat is the real limiting factor." ,
          },
        ],
        faqs: [
          { q: "Is the countryside bicycle tour worth it in Hoi An?", a: "Yes, for a genuinely different slower pace through rice fields and village life, beyond the Ancient Town's dense lantern-lit streets." },
        ],
      };

    case "is-lantern-boat-ride-worth-it-hoi-an":
      return {
        title: "Is the Hoai River Lantern Boat Ride Worth It in Hoi An?",
        description: "An honest look at the night boat trip with floating lantern release on the Hoai River, Hoi An's single most iconic evening activity.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/hoai-river-night-boat-trip-and-floating-lantern-in-hoi-an/img0/1600.webp",
        sections: [
          {
            title: "The Short Answer",
            content: "Releasing a floating paper lantern onto the Hoai River at night, with the Ancient Town's own lanterns reflecting on the water, is genuinely Hoi An's single most iconic evening activity, a short but memorable boat ride rather than a long outing.",
            tourCard: { slug: "hoai-river-night-boat-trip-and-floating-lantern-in-hoi-an", title: "Hoai River Night Boat Trip and Floating Lantern", description: "A night boat trip with a floating lantern release on the Hoai River.", price: "From $26", duration: "15 minutes", image: "https://images.asiabylocals.com/asiabylocals/tours/hoai-river-night-boat-trip-and-floating-lantern-in-hoi-an/img0/1600.webp" },
          },
          {
            title: "Practical Tips",
            content: "Go on or near a full moon night if possible — the Hoai River gets an extra festival atmosphere during the monthly Lantern Festival dates.",
          },
        ],
        faqs: [
          { q: "Is the Hoai River lantern boat ride worth it?", a: "Yes, it's genuinely Hoi An's single most iconic evening activity, even though it's a short ride." },
        ],
      };

    case "is-lantern-making-workshop-worth-it-hoi-an":
      return {
        title: "Is the Lantern Making Workshop Worth It in Hoi An?",
        description: "An honest look at the hands-on lantern making workshop in the Old Town, a craft class distinct from simply buying a lantern or releasing one on the river.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/lantern-making-workshop-in-hoi-an-old-town/img0/1600.webp",
        sections: [
          {
            title: "The Short Answer",
            content: "Rather than just buying a finished silk lantern from a shop, this workshop teaches you to build the bamboo frame and stretch the silk yourself, a genuinely hands-on craft activity and a more meaningful souvenir than anything purchased ready-made.",
            tourCard: { slug: "lantern-making-workshop-in-hoi-an-old-town", title: "Lantern Making Workshop in Hoi An Old Town", description: "A hands-on lantern making workshop in Hoi An's Old Town.", price: "From $11", duration: "1 hour", image: "https://images.asiabylocals.com/asiabylocals/tours/lantern-making-workshop-in-hoi-an-old-town/img0/1600.webp" },
          },
          {
            title: "Practical Tips",
            content: "A good short, inexpensive add-on to pair with the evening river lantern release — do the workshop first and bring your own lantern to the river.",
          },
        ],
        faqs: [
          { q: "Is the lantern making workshop worth it?", a: "Yes, for a genuinely hands-on craft activity and a more meaningful souvenir than a shop-bought lantern." },
        ],
      };

    case "is-hai-van-pass-motorbike-tour-worth-it-hoi-an":
      return {
        title: "Is the Hai Van Pass Motorbike Tour Worth It from Hoi An?",
        description: "An honest look at the easy rider motorbike tour via Hai Van Pass, one of Vietnam's most scenic coastal mountain roads connecting Hoi An, Da Nang, and Hue.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/easy-rider-motorbike-tour-via-hai-van-pass-hoi-an-da-nang-hue-by-local-operator/img0/1600.webp",
        sections: [
          {
            title: "The Short Answer",
            content: "Hai Van Pass is one of Vietnam's most scenic coastal mountain roads, winding along cliffs between Da Nang and Hue, and this easy rider tour puts you on the back of an experienced local driver's motorbike, so no riding experience is required to take in the views.",
            tourCard: { slug: "easy-rider-motorbike-tour-via-hai-van-pass-hoi-an-da-nang-hue-by-local-operator", title: "Easy Rider Motorbike Tour via Hai Van Pass", description: "An easy rider motorbike tour over Hai Van Pass connecting Hoi An, Da Nang, and Hue.", price: "From $72", duration: "8 hours", image: "https://images.asiabylocals.com/asiabylocals/tours/easy-rider-motorbike-tour-via-hai-van-pass-hoi-an-da-nang-hue-by-local-operator/img0/1600.webp" },
          },
          {
            title: "Practical Tips",
            content: "Choose the easy rider option (riding pillion) rather than self-driving if you don't have real motorbike experience — the pass has genuine hairpin turns and cliffside drops.",
          },
        ],
        faqs: [
          { q: "Is the Hai Van Pass tour worth it from Hoi An?", a: "Yes, it's one of Vietnam's most scenic coastal roads, and the easy rider format means no riding experience is needed to enjoy it." },
        ],
      };

    case "is-marble-mountains-tour-worth-it-hoi-an":
      return {
        title: "Is the Marble Mountains, Am Phu Cave and Lady Buddha Tour Worth It from Hoi An?",
        description: "An honest look at the Marble Mountains, Am Phu Cave, and Lady Buddha tour, a cluster of marble hills and caves between Hoi An and Da Nang.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/marble-mountains-am-phu-cave-and-lady-buddha/img0/1600.webp",
        sections: [
          {
            title: "The Short Answer",
            content: "The Marble Mountains are a cluster of five marble and limestone hills dotted with Buddhist sanctuaries and caves, including the atmospheric Am Phu Cave depicting Buddhist concepts of heaven and hell — a genuinely unique landscape distinct from Hoi An's ancient-town architecture.",
            tourCard: { slug: "marble-mountains-am-phu-cave-and-lady-buddha", title: "Marble Mountains, Am Phu Cave and Lady Buddha", description: "A guided tour of the Marble Mountains, Am Phu Cave, and Lady Buddha statue.", price: "From $25", duration: "4.5 hours", image: "https://images.asiabylocals.com/asiabylocals/tours/marble-mountains-am-phu-cave-and-lady-buddha/img0/1600.webp" },
          },
          {
            title: "Practical Tips",
            content: "Wear comfortable shoes — there's genuine climbing involved to reach the cave sanctuaries and viewpoints.",
          },
        ],
        faqs: [
          { q: "Is the Marble Mountains tour worth it from Hoi An?", a: "Yes, for a genuinely unique marble-hill-and-cave landscape distinct from Hoi An's ancient-town architecture." },
        ],
      };

    case "is-terracotta-park-pottery-workshop-worth-it-hoi-an":
      return {
        title: "Is the Thanh Ha Terracotta Park Pottery Workshop Worth It in Hoi An?",
        description: "An honest look at Thanh Ha Terracotta Park, with its pottery workshop near Hoi An.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/thanh-ha-terracotta-park-with-pottery-workshop-in-hoi-an/img0/1600.webp",
        sections: [
          {
            title: "The Short Answer",
            content: "Thanh Ha has a genuine centuries-old pottery tradition, and the park combines viewing miniature terracotta models with a hands-on wheel-throwing workshop at an actual working pottery village, rather than just a souvenir stop.",
            tourCard: { slug: "thanh-ha-terracotta-park-with-pottery-workshop-in-hoi-an", title: "Thanh Ha Terracotta Park with Pottery Workshop in Hoi An", description: "A visit to Thanh Ha Terracotta Park with a hands-on pottery workshop.", price: "From $27", duration: "3 hours", image: "https://images.asiabylocals.com/asiabylocals/tours/thanh-ha-terracotta-park-with-pottery-workshop-in-hoi-an/img0/1600.webp" },
          },
          {
            title: "Practical Tips",
            content: "Wear clothes you don't mind getting a little messy — the pottery wheel portion is genuinely hands-on.",
          },
        ],
        faqs: [
          { q: "Is the Thanh Ha Terracotta Park pottery workshop worth it in Hoi An?", a: "Yes, for a genuine hands-on pottery experience at an actual working craft village, not just a souvenir stop." },
        ],
      };

    case "is-coffee-making-class-worth-it-hoi-an":
      return {
        title: "Is the Vietnamese Coffee Making Class Worth It in Hoi An?",
        description: "An honest look at the Vietnamese coffee culture and coffee making class in Hoi An.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/vietnamese-coffee-making-class-in-hoi-an-by-local-operator/img0/1600.webp",
        sections: [
          {
            title: "The Short Answer",
            content: "Vietnamese coffee culture, from the drip phin filter to egg coffee and coconut coffee, is distinct enough from Western coffee traditions that a hands-on class genuinely teaches something new, rather than just being a cafe visit with a different label.",
            tourCard: { slug: "vietnamese-coffee-making-class-in-hoi-an-by-local-operator", title: "Vietnamese Coffee Making Class in Hoi An by Local Operator", description: "A hands-on Vietnamese coffee making class in Hoi An.", price: "From $20", duration: "1 hour", image: "https://images.asiabylocals.com/asiabylocals/tours/vietnamese-coffee-making-class-in-hoi-an-by-local-operator/img0/1600.webp" },
          },
          {
            title: "Practical Tips",
            content: "A good short, low-commitment activity to slot between ancient town sightseeing stops.",
          },
        ],
        faqs: [
          { q: "Is the Vietnamese coffee making class worth it in Hoi An?", a: "Yes, Vietnamese coffee culture is genuinely distinct from Western traditions, and the class is a short, easy add-on." },
        ],
      };

    case "is-memories-show-worth-it-hoi-an":
      return {
        title: "Is the Hoi An Memories Show Worth It?",
        description: "An honest look at the Hoi An Memories Show, a large-scale cultural performance depicting the town's trading-port history.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/hoi-an-memories-show-qr-code-ticket-by-local-operator/img0/1600.webp",
        sections: [
          {
            title: "The Short Answer",
            content: "This is a large-scale outdoor performance with hundreds of performers dramatizing Hoi An's history as a Silk Road trading port, a genuinely bigger-budget production than the town's smaller lantern-boat and walking-tour experiences.",
            tourCard: { slug: "hoi-an-memories-show-qr-code-ticket-by-local-operator", title: "Hoi An Memories Show - QR Code Ticket by Local Operator", description: "Admission to the large-scale Hoi An Memories cultural show.", price: "From $34", duration: "1 hour", image: "https://images.asiabylocals.com/asiabylocals/tours/hoi-an-memories-show-qr-code-ticket-by-local-operator/img0/1600.webp" },
          },
          {
            title: "Practical Tips",
            content: "Arrive early to get a good seat — this is a popular evening show with a large audience.",
          },
        ],
        faqs: [
          { q: "Is the Hoi An Memories Show worth it?", a: "Yes, it's a genuinely bigger-budget production than the town's smaller evening experiences, worth it for the scale alone." },
        ],
      };

    case "is-incense-making-workshop-worth-it-hoi-an":
      return {
        title: "Is the Incense Making Workshop Worth It in Hoi An?",
        description: "An honest look at the incense making workshop in Hoi An.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/hoi-an-incense-making-workshop-experience/img0/1600.webp",
        sections: [
          {
            title: "The Short Answer",
            content: "Incense making is a genuine traditional craft in central Vietnam, and this workshop teaches the rolling and drying process hands-on, worth it as a relaxed, low-commitment activity distinct from Hoi An's lantern-making and tailoring experiences.",
            tourCard: { slug: "hoi-an-incense-making-workshop-experience", title: "Hoi An Incense Making Workshop Experience", description: "A hands-on traditional incense making workshop.", price: "From $26", duration: "2 hours", image: "https://images.asiabylocals.com/asiabylocals/tours/hoi-an-incense-making-workshop-experience/img0/1600.webp" },
          },
          {
            title: "Practical Tips",
            content: "Let your incense fully dry before packing it for the trip home, so it doesn't warp or stick together.",
          },
        ],
        faqs: [
          { q: "Is the incense making workshop worth it in Hoi An?", a: "Yes, as a relaxed, genuinely traditional craft activity distinct from the town's lantern-making and tailoring workshops." },
        ],
      };

    case "is-teh-dar-bamboo-circus-worth-it-hoi-an":
      return {
        title: "Is Teh Dar, the Bamboo Circus, Worth It in Hoi An?",
        description: "An honest look at Teh Dar, the bamboo circus show in Hoi An.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/teh-dar-unique-bamboo-circus-under-an-iconic-dome-in-hoi-an/img0/1600.webp",
        sections: [
          {
            title: "The Short Answer",
            content: "Teh Dar stages Vietnamese highland culture through acrobatics and bamboo performance under a distinctive dome, worth it as a genuinely well-produced evening show rather than a generic cultural dinner performance.",
            tourCard: { slug: "teh-dar-unique-bamboo-circus-under-an-iconic-dome-in-hoi-an", title: "Teh Dar - Unique Bamboo Circus Under An Iconic Dome", description: "A bamboo circus and acrobatics performance under an iconic dome.", price: "From $36", duration: "1 hour", image: "https://images.asiabylocals.com/asiabylocals/tours/teh-dar-unique-bamboo-circus-under-an-iconic-dome-in-hoi-an/img0/1600.webp" },
          },
          {
            title: "Practical Tips",
            content: "Book ahead for a good seat — this is a popular, well-regarded show with limited nightly capacity.",
          },
        ],
        faqs: [
          { q: "Is Teh Dar, the bamboo circus, worth it in Hoi An?", a: "Yes, it's a genuinely well-produced acrobatic show, distinct from a generic cultural dinner performance." },
        ],
      };

    case "is-wood-carving-class-worth-it-hoi-an":
      return {
        title: "Is the Wood Carving Class with a Village Master Artisan Worth It?",
        description: "An honest look at the wood carving class with a village master artisan in Hoi An.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/wood-carving-class-with-village-master-artisan-in-hoi-an/img0/1600.webp",
        sections: [
          {
            title: "The Short Answer",
            content: "Learning directly from a master artisan at a traditional carving village gives genuine insight into a regional craft, worth it for travelers who want a hands-on connection to Hoi An's artisan tradition beyond browsing finished pieces in a shop.",
            tourCard: { slug: "wood-carving-class-with-village-master-artisan-in-hoi-an", title: "Wood Carving Class with Village Master Artisan in Hoi An", description: "A hands-on wood carving class taught by a village master artisan.", price: "From $35", duration: "3 hours", image: "https://images.asiabylocals.com/asiabylocals/tours/wood-carving-class-with-village-master-artisan-in-hoi-an/img0/1600.webp" },
          },
          {
            title: "Practical Tips",
            content: "Wear clothes you don't mind getting wood dust on, and ask the artisan about the traditional motifs if they're not already explained.",
          },
        ],
        faqs: [
          { q: "Is the wood carving class with a village master artisan worth it in Hoi An?", a: "Yes, for genuine hands-on insight into a regional craft tradition, beyond just browsing finished pieces in a shop." },
        ],
      };

    case "is-ghosts-mystery-tour-worth-it-hoi-an":
      return {
        title: "Is the Hoi An Ghosts, Death, Mystery Unveiled Tour Worth It?",
        description: "An honest look at the Hoi An Ghosts, Death, Mystery Unveiled walking tour.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/hoi-an-ghosts-death-mystery-unveiled-by-local-operator/img0/1600.webp",
        sections: [
          {
            title: "The Short Answer",
            content: "This tour covers local folklore, ghost stories, and death rituals tied to Hoi An's ancient town, worth it for travelers who want a distinctly different evening angle on the town's history beyond the usual lantern-lit photo walks.",
            tourCard: { slug: "hoi-an-ghosts-death-mystery-unveiled-by-local-operator", title: "Hoi An Ghosts, Death, Mystery Unveiled", description: "A guided evening walking tour covering local ghost folklore and death rituals.", price: "From $27", duration: "2 hours", image: "https://images.asiabylocals.com/asiabylocals/tours/hoi-an-ghosts-death-mystery-unveiled-by-local-operator/img0/1600.webp" },
          },
          {
            title: "Practical Tips",
            content: "Go in with an open mind for folklore rather than expecting a scare-focused ghost tour — the format leans toward storytelling and cultural context.",
          },
        ],
        faqs: [
          { q: "Is the Hoi An Ghosts, Death, Mystery Unveiled tour worth it?", a: "Yes, it offers a genuinely different, folklore-focused angle on the town's history beyond the usual lantern-lit sightseeing." },
        ],
      };

    case "is-motorbike-riding-class-worth-it-hoi-an":
      return {
        title: "Is the Scooter/Motorbike Riding Class Worth It in Hoi An?",
        description: "An honest look at the scooter and motorbike riding crash course class in Hoi An.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/hoi-an-ghosts-death-mystery-unveiled-by-local-operator/img0/1600.webp",
        sections: [
          {
            title: "The Short Answer",
            content: "This crash-course class teaches genuine scooter and motorbike riding basics in a controlled setting, worth it specifically for travelers who've never ridden before but want to rent a bike for Vietnam's countryside roads rather than relying on taxis or tours.",
            tourCard: { slug: "scooter-motorbike-riding-class-crash-course-in-hoi-an", title: "Scooter/Motorbike Riding Class (crash course) in Hoi An", description: "A crash-course scooter and motorbike riding class in Hoi An.", price: "From $25", duration: "1.5 hours", image: "https://images.asiabylocals.com/asiabylocals/tours/hoi-an-ghosts-death-mystery-unveiled-by-local-operator/img0/1600.webp" },
          },
          {
            title: "Practical Tips",
            content: "Wear closed-toe shoes and clothing you don't mind getting dusty — this is hands-on practice, not a lecture.",
          },
        ],
        faqs: [
          { q: "Is the motorbike riding class worth it in Hoi An?", a: "Yes, specifically for complete beginners who want to safely learn before renting a scooter for Vietnam's countryside roads." },
        ],
      };

    case "is-hue-imperial-city-day-trip-worth-it-hoi-an":
      return {
        title: "Is the Hue Imperial City Day Trip Worth It from Hoi An?",
        description: "An honest look at the Hue Imperial City day trip with the Hai Van Pass from Hoi An.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/hoi-an-ghosts-death-mystery-unveiled-by-local-operator/img0/1600.webp",
        sections: [
          {
            title: "The Short Answer",
            content: "Hue's Imperial City, Vietnam's former royal capital, gives a genuinely different historical layer than Hoi An's trading-port architecture, and most tours route through the scenic Hai Van Pass along the way, worth it for travelers with a full day to spare for deeper Vietnamese history.",
            tourCard: { slug: "from-hoian-danang-hue-imperial-city-tour-with-haivan-pass-hoi-an", title: "From Hoian/Danang: Hue Imperial City Tour with Hai Van Pass", description: "A day trip to Hue's Imperial City via the Hai Van Pass from Hoi An.", price: "From $36", duration: "11 hours", image: "https://images.asiabylocals.com/asiabylocals/tours/hoi-an-ghosts-death-mystery-unveiled-by-local-operator/img0/1600.webp" },
          },
          {
            title: "Practical Tips",
            content: "This is a long day given the distance — confirm total travel time and whether the Hai Van Pass stop is weather-dependent.",
          },
        ],
        faqs: [
          { q: "Is the Hue Imperial City day trip worth it from Hoi An?", a: "Yes, for travelers with a full day to spare wanting a genuinely different historical layer — Vietnam's former royal capital — plus the scenic Hai Van Pass en route." },
        ],
      };

    case "is-boxing-class-worth-it-hoi-an":
      return {
        title: "Is the Boxing Class with English-Speaking Trainer Worth It in Hoi An?",
        description: "An honest look at the boxing class with an English-speaking trainer in Hoi An.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/hoi-an-ghosts-death-mystery-unveiled-by-local-operator/img0/1600.webp",
        sections: [
          {
            title: "The Short Answer",
            content: "A real boxing class with proper English-language instruction gives a genuine fitness activity distinct from the town's usual food tours and craft workshops, worth it specifically for travelers wanting to keep up a workout routine while traveling.",
            tourCard: { slug: "boxing-class-with-english-speaking-trainer-in-hoi-an", title: "Boxing Class with English-Speaking Trainer in Hoi An", description: "A boxing class with an English-speaking trainer in Hoi An.", price: "From $39", duration: "2 hours", image: "https://images.asiabylocals.com/asiabylocals/tours/hoi-an-ghosts-death-mystery-unveiled-by-local-operator/img0/1600.webp" },
          },
          {
            title: "Practical Tips",
            content: "Wear workout clothes and bring a water bottle — this is a genuine physical training session, not a cultural demonstration.",
          },
        ],
        faqs: [
          { q: "Is the boxing class worth it in Hoi An?", a: "Yes, for travelers wanting to keep up a real fitness routine while traveling, with proper English-language instruction." },
        ],
      };

    case "is-my-lai-massacre-tour-worth-it-hoi-an":
      return {
        title: "Is the My Lai Massacre Memory Tour Worth It from Hoi An?",
        description: "An honest look at the full-day My Lai Massacre memory tour from Hoi An.",
        heroImage: "https://res.cloudinary.com/dx2fxyaft/image/upload/v1789201808/asiabylocals/tours/full-day-my-lai-massacre-memory-tour-in-hoi-an/img0.jpg",
        sections: [
          {
            title: "The Short Answer",
            content: "Visiting the My Lai memorial site gives a genuinely sobering, important piece of Vietnam War history that most Hoi An itineraries skip entirely, worth it for travelers wanting real historical depth beyond the town's craft shops and lantern-lit canals.",
            tourCard: { slug: "full-day-my-lai-massacre-memory-tour-in-hoi-an", title: "Full-day My Lai Massacre Memory Tour in Hoi An", description: "A full-day tour to the My Lai Massacre memorial site from Hoi An.", price: "From $312", duration: "Full day", image: "https://res.cloudinary.com/dx2fxyaft/image/upload/v1789201808/asiabylocals/tours/full-day-my-lai-massacre-memory-tour-in-hoi-an/img0.jpg" },
          },
          {
            title: "Practical Tips",
            content: "Approach this with appropriate respect — it's a genuine memorial site for a documented atrocity, not a standard sightseeing stop.",
          },
        ],
        faqs: [
          { q: "Is the My Lai Massacre memory tour worth it from Hoi An?", a: "Yes, for travelers wanting genuine historical depth on the Vietnam War, beyond the town's craft shops and canals." },
        ],
      };

    case "is-son-tra-peninsula-jeep-worth-it-hoi-an":
      return {
        title: "Is the Son Tra Peninsula US Army Jeep Tour Worth It from Hoi An?",
        description: "An honest look at exploring Son Tra Peninsula by US Army Jeep from Hoi An.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/explore-son-tra-peninsula-by-us-army-jeep-in-hoi-an/img0/1600.webp",
        sections: [
          {
            title: "The Short Answer",
            content: "Riding a vintage US Army jeep up Son Tra Peninsula's winding roads to see the giant Lady Buddha statue and coastal views gives a genuinely fun, distinctive way to explore Da Nang's green mountain beyond Hoi An's own Old Town circuit.",
            tourCard: { slug: "explore-son-tra-peninsula-by-us-army-jeep-in-hoi-an", title: "Explore Son Tra Peninsula by US Army Jeep in Hoi An", description: "A jeep tour of Son Tra Peninsula near Da Nang from Hoi An.", price: "From $174", duration: "Half day", image: "https://images.asiabylocals.com/asiabylocals/tours/explore-son-tra-peninsula-by-us-army-jeep-in-hoi-an/img0/1600.webp" },
          },
          {
            title: "Practical Tips",
            content: "Bring a camera for the Lady Buddha statue and coastal viewpoints — this is a genuinely photogenic route.",
          },
        ],
        faqs: [
          { q: "Is the Son Tra Peninsula jeep tour worth it from Hoi An?", a: "Yes, for a genuinely fun, distinctive way to see Da Nang's Lady Buddha and coastal views beyond the standard Old Town circuit." },
        ],
      };

    case "is-vinwonders-nam-hoi-an-worth-it":
      return {
        title: "Is VinWonders Nam Hoi An Safari and Water Park Worth It?",
        description: "An honest look at VinWonders Nam Hoi An's safari and water park.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/vinwonders-nam-hoi-an-safari-and-water-park/img0/1600.webp",
        sections: [
          {
            title: "The Short Answer",
            content: "VinWonders combines a safari park with a water park in one large complex, giving families a genuine full-day theme park option that nothing else in Hoi An's heritage-focused town center offers, worth it specifically for travelers with kids wanting a break from temples and tailor shops.",
            tourCard: { slug: "vinwonders-nam-hoi-an-safari-and-water-park", title: "VinWonders Nam Hoi An Safari and Water Park", description: "Entry to VinWonders Nam Hoi An's safari park and water park.", price: "From $250", duration: "Full day", image: "https://images.asiabylocals.com/asiabylocals/tours/vinwonders-nam-hoi-an-safari-and-water-park/img0/1600.webp" },
          },
          {
            title: "Practical Tips",
            content: "Arrive early to make the most of both the safari and water park sections in one day — the complex is large.",
          },
        ],
        faqs: [
          { q: "Is VinWonders Nam Hoi An worth it?", a: "Yes, specifically for families wanting a genuine theme park break from Hoi An's heritage-focused town center." },
        ],
      };

    case "is-secret-cocktail-experience-worth-it-hoi-an":
      return {
        title: "Is the Secret Cocktail Experience Worth It in Hoi An?",
        description: "An honest look at the Secret Cocktail Experience in Hoi An.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/secret-cocktail-experience-in-hoi-an/img0/1600.webp",
        sections: [
          {
            title: "The Short Answer",
            content: "A hidden, speakeasy-style cocktail experience gives a genuinely different evening than Hoi An's usual riverside bars and lantern-lit restaurants, worth it for travelers wanting a memorable, slightly mysterious night out with real craft cocktails.",
            tourCard: { slug: "secret-cocktail-experience-in-hoi-an", title: "Secret Cocktail Experience in Hoi An", description: "A hidden, speakeasy-style cocktail experience in Hoi An.", price: "From $159", duration: "2 hours", image: "https://images.asiabylocals.com/asiabylocals/tours/secret-cocktail-experience-in-hoi-an/img0/1600.webp" },
          },
          {
            title: "Practical Tips",
            content: "Don't look up the exact location beforehand if you want the full speakeasy surprise — part of the appeal is not knowing where you're headed.",
          },
        ],
        faqs: [
          { q: "Is the Secret Cocktail Experience worth it in Hoi An?", a: "Yes, for travelers wanting a genuinely different, memorable evening out with real craft cocktails beyond the usual riverside bars." },
        ],
      };

    case "is-hai-van-pass-us-army-jeep-worth-it-hoi-an":
      return {
        title: "Is Exploring Hai Van Pass by US Army Jeep Worth It from Hoi An?",
        description: "An honest look at exploring Hai Van Pass by vintage US Army jeep from Hoi An.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/explore-hai-van-pass-by-us-army-jeep-in-hoi-an/img0/1600.webp",
        sections: [
          {
            title: "The Short Answer",
            content: "Riding Hai Van Pass's dramatic coastal switchbacks in an open vintage-style US Army jeep gives a genuinely different, nostalgic feel than the standard motorbike pillion ride, worth it for travelers wanting an unusual vehicle experience alongside the scenery.",
            tourCard: { slug: "explore-hai-van-pass-by-us-army-jeep-in-hoi-an", title: "Explore Hai Van Pass by US Army Jeep in Hoi An", description: "A tour of Hai Van Pass by vintage US Army jeep from Hoi An.", price: "From $270", duration: "4 hours", image: "https://images.asiabylocals.com/asiabylocals/tours/explore-hai-van-pass-by-us-army-jeep-in-hoi-an/img0/1600.webp" },
          },
          {
            title: "Practical Tips",
            content: "The open-top jeep offers less protection from weather than an enclosed vehicle, so check the forecast before booking.",
          },
        ],
        faqs: [
          { q: "Is exploring Hai Van Pass by US Army jeep worth it?", a: "Yes, for travelers wanting a genuinely different, nostalgic vehicle experience on the pass, distinct from the standard motorbike pillion ride." },
        ],
      };

    case "is-pagoda-stay-spiritual-tour-worth-it-hoi-an":
      return {
        title: "Is the Pagoda Stay 2-Day Spiritual Tour Worth It in Hoi An?",
        description: "An honest look at the Pagoda Stay 2-day spiritual tour in Hoi An.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/pagoda-stay-2-day-spiritual-tour-in-hoi-an/img0/1600.webp",
        sections: [
          {
            title: "The Short Answer",
            content: "Staying overnight at a working pagoda gives genuine insight into Vietnamese Buddhist monastic life that a quick temple visit can't offer, worth it for travelers with real interest in spiritual practice rather than just sightseeing.",
            tourCard: { slug: "pagoda-stay-2-day-spiritual-tour-in-hoi-an", title: "Pagoda Stay 2-Day Spiritual Tour in Hoi An", description: "A 2-day spiritual tour including an overnight stay at a pagoda in Hoi An.", price: "From $182", duration: "2 days", image: "https://images.asiabylocals.com/asiabylocals/tours/pagoda-stay-2-day-spiritual-tour-in-hoi-an/img0/1600.webp" },
          },
          {
            title: "Practical Tips",
            content: "Expect simple monastic accommodation and a quiet daily rhythm, since this is a genuine spiritual stay, not a boutique hotel experience.",
          },
        ],
        faqs: [
          { q: "Is the Pagoda Stay 2-day spiritual tour worth it in Hoi An?", a: "Yes, for travelers with real interest in Buddhist monastic life, offering genuine insight that a quick temple visit can't provide." },
        ],
      };

    case "is-10day-vietnam-family-tour-worth-it-hoi-an":
      return {
        title: "Is the 10 Days Vietnam Family Tour Worth It from Hoi An?",
        description: "An honest look at the 10-day Vietnam family tour from Hoi An.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/10-days-vietnam-family-tour-hoi-an/img0/1600.webp",
        sections: [
          {
            title: "The Short Answer",
            content: "Ten days gives genuine time to cover Vietnam's highlights at a family-friendly pace, with built-in flexibility for children's energy levels, worth it for families wanting a complete country overview without rushing between cities.",
            tourCard: { slug: "10-days-vietnam-family-tour-hoi-an", title: "10 Days Vietnam Family Tour (Hoi An)", description: "A 10-day Vietnam tour designed for families, based from Hoi An.", price: "From $2080", duration: "10 days", image: "https://images.asiabylocals.com/asiabylocals/tours/10-days-vietnam-family-tour-hoi-an/img0/1600.webp" },
          },
          {
            title: "Practical Tips",
            content: "Confirm the pacing and rest days built into the itinerary, since family tours should balance sightseeing with genuine downtime for kids.",
          },
        ],
        faqs: [
          { q: "Is the 10-day Vietnam family tour worth it?", a: "Yes, for families wanting a complete country overview at a comfortable pace, with flexibility built in for children." },
        ],
      };

    case "is-7day-north-central-vietnam-worth-it-hoi-an":
      return {
        title: "Is the 7-Day North and Central Vietnam Tour Worth It from Hoi An?",
        description: "An honest look at the 7-day North and Central Vietnam tour from Hoi An.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/7-days-in-north-and-central-vietnam-tour-hoi-an/img0/1600.webp",
        sections: [
          {
            title: "The Short Answer",
            content: "Covering both North and Central Vietnam in one 7-day trip gives travelers a genuine sense of the country's regional variety, from Hanoi's north to Hoi An's central coast, without committing to a full south-to-north itinerary.",
            tourCard: { slug: "7-days-in-north-and-central-vietnam-tour-hoi-an", title: "7 Days in North and Central Vietnam Tour (Hoi An)", description: "A 7-day tour covering North and Central Vietnam.", price: "From $1950", duration: "7 days", image: "https://images.asiabylocals.com/asiabylocals/tours/7-days-in-north-and-central-vietnam-tour-hoi-an/img0/1600.webp" },
          },
          {
            title: "Practical Tips",
            content: "Check the internal transport included between north and central regions, since the distances involve either domestic flights or long train legs.",
          },
        ],
        faqs: [
          { q: "Is the 7-day North and Central Vietnam tour worth it?", a: "Yes, for travelers wanting genuine regional variety between the north and central coast without committing to a full south-to-north trip." },
        ],
      };

    case "is-ky-anh-tunnel-cham-tower-worth-it-hoi-an":
      return {
        title: "Is the Ky Anh Tunnel and Cham Tower Vietnam War Tour Worth It from Hoi An?",
        description: "An honest look at the Ky Anh Tunnel and Cham Tower private Vietnam War tour from Hoi An.",
        heroImage: "https://res.cloudinary.com/dx2fxyaft/image/upload/v1789201838/asiabylocals/tours/ky-anh-tunnel-and-cham-tower-vietnam-war-tour-by-private-in-hoi-an/img0.jpg",
        sections: [
          {
            title: "The Short Answer",
            content: "Visiting the Ky Anh tunnel system alongside a Cham tower gives a genuine mix of recent war history and ancient Cham heritage in one private tour, worth it for travelers wanting historical depth beyond Hoi An's Old Town and My Son circuit.",
            tourCard: { slug: "ky-anh-tunnel-and-cham-tower-vietnam-war-tour-by-private-in-hoi-an", title: "Ky Anh Tunnel and Cham Tower: Vietnam War Tour by Private", description: "A private tour of the Ky Anh tunnel system and a Cham tower from Hoi An.", price: "From $140", duration: "Half day", image: "https://res.cloudinary.com/dx2fxyaft/image/upload/v1789201838/asiabylocals/tours/ky-anh-tunnel-and-cham-tower-vietnam-war-tour-by-private-in-hoi-an/img0.jpg" },
          },
          {
            title: "Practical Tips",
            content: "Bring a flashlight for the tunnel system, since lighting inside is genuinely limited compared to more developed war history sites.",
          },
        ],
        faqs: [
          { q: "Is the Ky Anh Tunnel and Cham Tower tour worth it from Hoi An?", a: "Yes, for travelers wanting genuine historical depth combining recent war history with ancient Cham heritage, beyond the usual Old Town and My Son circuit." },
        ],
      };

    case "is-handicraft-wood-carving-workshop-worth-it-hoi-an":
      return {
        title: "Is the Hoi An Statue Wood Carving Workshop Worth It?",
        description: "An honest look at Hoi An's handicraft workshop focused on statue wood carving.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/hoi-an-handicraft-workshop-statue-wood-carving-by-local-operator/img0/1600.webp",
        sections: [
          {
            title: "The Short Answer",
            content: "Hoi An's wood carving tradition runs genuinely deep, and this workshop gives real hands-on exposure to statue carving technique rather than just shopping finished pieces, worth it for travelers wanting a tangible craft souvenir they made themselves.",
            tourCard: { slug: "hoi-an-handicraft-workshop-statue-wood-carving-by-local-operator", title: "Hoi An Handicraft Workshop: Statue Wood Carving", description: "A hands-on statue wood carving workshop in Hoi An.", price: "From $166", duration: "2 hours", image: "https://images.asiabylocals.com/asiabylocals/tours/hoi-an-handicraft-workshop-statue-wood-carving-by-local-operator/img0/1600.webp" },
          },
          {
            title: "Practical Tips",
            content: "No prior carving experience is needed — instructors genuinely guide beginners through manageable, simplified pieces.",
          },
        ],
        faqs: [
          { q: "Is the statue wood carving workshop worth it in Hoi An?", a: "Yes, for a genuinely hands-on take on the city's deep wood carving tradition, leaving you with a real souvenir you made yourself." },
        ],
      };

    case "is-thanh-ha-pottery-kim-bong-worth-it-hoi-an":
      return {
        title: "Is the Thanh Ha Pottery and Kim Bong Carpentry Villages Tour Worth It?",
        description: "An honest look at the half-day Thanh Ha Pottery and Kim Bong Carpentry villages tour near Hoi An.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/half-day-thanh-ha-pottery-and-kim-bong-carpentry-villages-in-hoi-an/img0/1600.webp",
        sections: [
          {
            title: "The Short Answer",
            content: "Visiting both a pottery village and a carpentry village in one half-day gives genuine hands-on exposure to two distinct traditional crafts, worth it for travelers wanting cultural depth beyond Hoi An's Old Town lantern-lined streets.",
            tourCard: { slug: "half-day-thanh-ha-pottery-and-kim-bong-carpentry-villages-in-hoi-an", title: "Half Day Thanh Ha Pottery and Kim Bong Carpentry Villages", description: "A half-day tour of Thanh Ha Pottery Village and Kim Bong Carpentry Village near Hoi An.", price: "From $151", duration: "Half day", image: "https://images.asiabylocals.com/asiabylocals/tours/half-day-thanh-ha-pottery-and-kim-bong-carpentry-villages-in-hoi-an/img0/1600.webp" },
          },
          {
            title: "Practical Tips",
            content: "Pick up a small pottery piece directly from the village — genuine local purchases support the artisans more than souvenir shops do.",
          },
        ],
        faqs: [
          { q: "Is the Thanh Ha Pottery and Kim Bong Carpentry villages tour worth it?", a: "Yes, for travelers wanting genuine hands-on exposure to two distinct traditional crafts, beyond Hoi An's Old Town streets." },
        ],
      };

    case "is-cham-islands-scuba-diving-worth-it-hoi-an":
      return {
        title: "Is the Cham Islands Scuba Diving Experience Worth It from Hoi An?",
        description: "An honest look at the Cham Islands scuba diving experience with divemaster options from Hoi An.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/cham-islands-scuba-diving-experience-with-2-divemaster-opts-hoi-an/img0/1600.webp",
        sections: [
          {
            title: "The Short Answer",
            content: "The Cham Islands offer genuinely some of central Vietnam's best diving conditions, and having divemaster options means both beginners and certified divers can book the right level of experience, worth it for travelers wanting real underwater exploration rather than just snorkeling.",
            tourCard: { slug: "cham-islands-scuba-diving-experience-with-2-divemaster-opts-hoi-an", title: "Cham Islands: Scuba Diving Experience with 2 Divemaster Options", description: "A scuba diving experience at the Cham Islands with divemaster options from Hoi An.", price: "From $168", duration: "Half day", image: "https://images.asiabylocals.com/asiabylocals/tours/cham-islands-scuba-diving-experience-with-2-divemaster-opts-hoi-an/img0/1600.webp" },
          },
          {
            title: "Practical Tips",
            content: "Confirm which divemaster option suits your certification level before booking, since options genuinely differ for beginners versus certified divers.",
          },
        ],
        faqs: [
          { q: "Is the Cham Islands scuba diving experience worth it from Hoi An?", a: "Yes, for travelers wanting genuine underwater exploration at some of central Vietnam's best diving conditions, beyond just snorkeling." },
        ],
      };

    case "is-south-hoi-an-river-safari-worth-it-hoi-an":
      return {
        title: "Is the South Hoi An River Safari and Beach Dinner Worth It?",
        description: "An honest look at the South Hoi An river safari combined with a beach dinner.",
        heroImage: "https://res.cloudinary.com/dx2fxyaft/image/upload/v1789201686/asiabylocals/tours/south-hoi-an-river-safari-and-beach-dinner-hoi-an/img0.jpg",
        sections: [
          {
            title: "The Short Answer",
            content: "Combining a river safari through the less-visited southern waterways with a beach dinner gives a genuinely relaxed, scenic day-to-evening combination, worth it for travelers wanting both nature and a proper sunset meal in one booking.",
            tourCard: { slug: "south-hoi-an-river-safari-and-beach-dinner-hoi-an", title: "South Hoi An River Safari and Beach Dinner", description: "A river safari through South Hoi An combined with a beach dinner.", price: "From $346", duration: "Half day", image: "https://res.cloudinary.com/dx2fxyaft/image/upload/v1789201686/asiabylocals/tours/south-hoi-an-river-safari-and-beach-dinner-hoi-an/img0.jpg" },
          },
          {
            title: "Practical Tips",
            content: "Book the sunset time slot if possible, since the beach dinner's lighting genuinely makes the evening feel more special.",
          },
        ],
        faqs: [
          { q: "Is the South Hoi An river safari and beach dinner worth it?", a: "Yes, for travelers wanting a genuinely relaxed combination of nature and a proper sunset meal in one booking." },
        ],
      };

    case "is-cham-island-dj-party-worth-it-hoi-an":
      return {
        title: "Is the Cham Island Snorkeling and DJ Party Tour Worth It?",
        description: "An honest look at Hoi An's Cham Island tour combining snorkeling with a DJ party.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/9af855c76466d7cdb6e6e9493abe310cf589ecb43f6c4fa3a2239147d9e82c94.jpg",
        sections: [
          {
            title: "The Short Answer",
            content: "Yes, if you want a livelier, more social spin on the standard Cham Island snorkeling trip — this adds an onboard DJ party element, turning the usual quiet island day into something more upbeat for travelers wanting energy alongside the snorkeling.",
            tourCard: { slug: "cham-island-snorkeling-and-dj-party-tour", title: "Cham Island Snorkeling and DJ Party Tour", description: "A Cham Island tour combining snorkeling with an onboard DJ party.", price: "From $143", duration: "Full day", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/9af855c76466d7cdb6e6e9493abe310cf589ecb43f6c4fa3a2239147d9e82c94.jpg" },
          },
          {
            title: "Practical Tips",
            content: "This suits a livelier crowd rather than travelers seeking a quiet, relaxed island day — pick a standard snorkeling tour instead if that's what you want.",
          },
        ],
        faqs: [
          { q: "Is the Cham Island DJ party tour worth it?", a: "Yes, for travelers wanting a livelier, more social spin on standard Cham Island snorkeling." },
        ],
      };

    case "is-luxury-sunset-cruise-spice-menu-worth-it-hoi-an":
      return {
        title: "Is the Hoi An Luxury Sunset Cruise with 5-Course Spice Menu Worth It?",
        description: "An honest look at Hoi An's luxury sunset cruise featuring a 5-course spice menu and cocktails.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/0a8efd7bac6be42a58bcae8f9afdabb4897549a8407ee6f6c487b3b795422d60.jpg",
        sections: [
          {
            title: "The Short Answer",
            content: "Yes, if food quality is your priority as much as the sunset views — this cruise builds the evening around a proper 5-course spice-themed menu and cocktails, a genuine step up from a standard scenic river cruise.",
            tourCard: { slug: "hoi-an-luxury-sunset-cruise-5-course-spice-menu-and-cocktails-ha-long", title: "Hoi An Luxury Sunset Cruise: 5-Course Spice Menu and Cocktails", description: "A luxury sunset cruise in Hoi An featuring a 5-course spice-themed menu and cocktails.", price: "From $104", duration: "A few hours", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/0a8efd7bac6be42a58bcae8f9afdabb4897549a8407ee6f6c487b3b795422d60.jpg" },
          },
          {
            title: "Practical Tips",
            content: "Book the sunset time slot specifically, since the lighting and the multi-course meal are both timed to peak together.",
          },
        ],
        faqs: [
          { q: "Is the luxury sunset cruise with 5-course spice menu worth it in Hoi An?", a: "Yes, for travelers wanting a genuine upgrade in food quality alongside the standard river sunset cruise views." },
        ],
      };

    case "is-golden-hands-bridge-my-son-worth-it-hoi-an":
      return {
        title: "Is the My Son Sanctuary and Golden Hands Bridge Private Tour Worth It?",
        description: "An honest look at the private tour combining My Son Sanctuary with the Golden Hands Bridge.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/9af855c76466d7cdb6e6e9493abe310cf589ecb43f6c4fa3a2239147d9e82c94.jpg",
        sections: [
          {
            title: "The Short Answer",
            content: "Yes, if you want ancient history and a modern photogenic landmark in the same day — this pairs the Cham-era ruins of My Son Sanctuary with a visit to the striking Golden Hands Bridge, covering two very different eras of Vietnamese landmarks.",
            tourCard: { slug: "my-son-sanctuary-and-golden-hands-bridge-private-tour", title: "My Son Sanctuary and Golden Hands Bridge Private Tour", description: "A private tour combining My Son Sanctuary with the Golden Hands Bridge.", price: "From $321", duration: "Full day", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/9af855c76466d7cdb6e6e9493abe310cf589ecb43f6c4fa3a2239147d9e82c94.jpg" },
          },
          {
            title: "Practical Tips",
            content: "The Golden Hands Bridge (at Ba Na Hills) involves cable car access, so factor in queue times during busier periods.",
          },
        ],
        faqs: [
          { q: "Is the My Son Sanctuary and Golden Hands Bridge tour worth it?", a: "Yes, for travelers wanting both ancient Cham-era history and a striking modern landmark covered in one day." },
        ],
      };

    case "is-my-son-noodles-rice-paper-worth-it-hoi-an":
      return {
        title: "Is the My Son Sanctuary Tour with Noodles and Rice Paper Worth It?",
        description: "An honest look at the My Son Sanctuary tour that includes a noodles and rice paper experience.",
        heroImage: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/0a8efd7bac6be42a58bcae8f9afdabb4897549a8407ee6f6c487b3b795422d60.jpg",
        sections: [
          {
            title: "The Short Answer",
            content: "Yes, if you want a culinary element added to the standard ruins visit — this tour pairs My Son Sanctuary's ancient Cham architecture with a hands-on noodle and rice paper-making experience, giving culture and food together rather than ruins alone.",
            tourCard: { slug: "my-son-sanctuary-tour-with-noodles-and-rice-paper", title: "My Son Sanctuary Tour with Noodles and Rice Paper", description: "A My Son Sanctuary tour including a noodles and rice paper-making experience.", price: "From $144", duration: "Half day", image: "https://cdn.getyourguide.com/image/format=auto,quality=90/tour_img/0a8efd7bac6be42a58bcae8f9afdabb4897549a8407ee6f6c487b3b795422d60.jpg" },
          },
          {
            title: "Practical Tips",
            content: "Come with an appetite for the rice paper-making portion, since you'll typically get to eat what you make.",
          },
        ],
        faqs: [
          { q: "Is the My Son Sanctuary tour with noodles and rice paper worth it?", a: "Yes, for travelers wanting a hands-on culinary element added to the standard ancient ruins visit." },
        ],
      };

    case "is-electric-scooter-countryside-adventure-worth-it-hoi-an":
      return {
        title: "Is the Electric Scooter Countryside Adventure Worth It in Hoi An?",
        description: "An honest look at the half-day electric scooter countryside ride around Hoi An.",
        heroImage: "https://res.cloudinary.com/dx2fxyaft/image/upload/v1789201797/asiabylocals/tours/electric-scooter-countryside-adventure-in-hoi-an-hoi-an/img0.jpg",
        sections: [
          {
            title: "The Short Answer",
            content: "Yes, if you want a quiet, eco-friendly way to see Hoi An's countryside beyond the Old Town — an electric scooter is easier to ride than a manual motorbike and quieter than a combustion engine, making it a relaxed way to pass through villages and rice fields.",
            tourCard: { slug: "electric-scooter-countryside-adventure-in-hoi-an-hoi-an", title: "Electric Scooter Countryside Adventure In Hoi An", description: "A half-day electric scooter countryside ride around Hoi An.", price: "From $217", duration: "4.5 hours", image: "https://res.cloudinary.com/dx2fxyaft/image/upload/v1789201797/asiabylocals/tours/electric-scooter-countryside-adventure-in-hoi-an-hoi-an/img0.jpg" },
          },
          {
            title: "Practical Tips",
            content: "No prior scooter experience is usually required, but confirm license requirements with the operator before booking.",
          },
        ],
        faqs: [
          { q: "Is the electric scooter countryside adventure worth it in Hoi An?", a: "Yes, for travelers wanting a quiet, eco-friendly way to explore Hoi An's villages and rice fields beyond the Old Town." },
        ],
      };

    case "is-cham-islands-coconut-forest-worth-it-hoi-an":
      return {
        title: "Is the Private Cham Islands and Coconut Forest Tour Worth It in Hoi An?",
        description: "An honest look at the full-day private tour combining the Cham Islands and the Coconut Forest from Hoi An.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/private-cham-islands-and-coconut-forest-tour/img0/1600.webp",
        sections: [
          {
            title: "The Short Answer",
            content: "Yes, if you want both island snorkeling and a distinctly local boat-basket experience in one day — the Cham Islands offer genuine marine scenery, while the Coconut Forest's traditional basket boats give a completely different, local-life side of the Hoi An area.",
            tourCard: { slug: "private-cham-islands-and-coconut-forest-tour", title: "Private Cham Islands and Coconut Forest Tour", description: "A full-day private tour combining the Cham Islands and the Coconut Forest from Hoi An.", price: "From $259", duration: "8 hours", image: "https://images.asiabylocals.com/asiabylocals/tours/private-cham-islands-and-coconut-forest-tour/img0/1600.webp" },
          },
          {
            title: "Practical Tips",
            content: "Boat trips to the Cham Islands can be affected by rough seas in certain months, so check the weather forecast before booking.",
          },
        ],
        faqs: [
          { q: "Is the Cham Islands and Coconut Forest tour worth it in Hoi An?", a: "Yes, for travelers wanting both island snorkeling and a distinctly local basket-boat experience in one day." },
        ],
      };

    case "is-silk-village-artisan-local-meal-worth-it-hoi-an":
      return {
        title: "Is the Silk Village Tour with Artisan and Local Meal Worth It in Hoi An?",
        description: "An honest look at this silk village tour pairing a visit to local artisans with a meal of regional specialties.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/silk-village-tour-with-artisan-and-local-meal-in-hoi-an/img0/1600.webp",
        sections: [
          {
            title: "The Short Answer",
            content: "Watching artisans work silk by hand gives a genuine look at a craft most visitors only see in finished souvenirs, and pairing it with a local meal rounds it into a complete short outing, worth it for travelers curious about traditional craftsmanship rather than just shopping for silk products.",
            tourCard: { slug: "silk-village-tour-with-artisan-and-local-meal-in-hoi-an", title: "Silk Village Tour with Artisan and Local Meal in Hoi An", description: "A silk village tour with local artisans and a meal of regional specialties in Hoi An.", price: "From $51", duration: "3 hours", image: "https://images.asiabylocals.com/asiabylocals/tours/silk-village-tour-with-artisan-and-local-meal-in-hoi-an/img0/1600.webp" },
          },
          {
            title: "Practical Tips",
            content: "Ask the artisans questions directly, most are genuinely happy to explain their technique if you show real interest." },
        ],
        faqs: [
          { q: "Is the silk village tour with artisan and local meal worth it in Hoi An?", a: "Yes, for travelers curious about traditional silk craftsmanship rather than just shopping for finished silk goods." }
        ],
      };

    case "is-all-you-can-eat-vietnamese-dining-worth-it-hoi-an":
      return {
        title: "Is the All-You-Can-Eat Vietnamese Dining Experience Worth It in Hoi An?",
        description: "An honest look at this all-you-can-eat dining experience covering authentic Hoi An specialties, a different format from the usual single-stop food tours.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/home-hoi-an-all-you-can-eat-vietnamese-dining-experience-by-local-operator/img0/1600.webp",
        sections: [
          {
            title: "The Short Answer",
            content: "An all-you-can-eat format lets you try as much of each specialty as you want rather than the single small portions typical of walking food tours, worth it for travelers with a genuinely big appetite who want to properly fill up on Hoi An's regional dishes in one sitting.",
            tourCard: { slug: "home-hoi-an-all-you-can-eat-vietnamese-dining-experience-by-local-operator", title: "Home Hoi An: All-You-Can-Eat Vietnamese Dining Experience", description: "An all-you-can-eat Vietnamese dining experience with authentic Hoi An specialties.", price: "From $55", duration: "3 hours", image: "https://images.asiabylocals.com/asiabylocals/tours/home-hoi-an-all-you-can-eat-vietnamese-dining-experience-by-local-operator/img0/1600.webp" },
          },
          {
            title: "Practical Tips",
            content: "Pace yourself across the dishes, an all-you-can-eat format works best if you don't fill up on the first specialty served." },
        ],
        faqs: [
          { q: "Is the all-you-can-eat Vietnamese dining experience worth it in Hoi An?", a: "Yes, for travelers with a big appetite who want to properly fill up on multiple Hoi An specialties rather than small walking-tour portions." }
        ],
      };

    case "is-private-photoshoot-guided-walk-worth-it-hoi-an":
      return {
        title: "Is the Private Photoshoot and Guided Walk Experience Worth It in Hoi An?",
        description: "An honest look at this combined photoshoot and guided walk through Hoi An's Ancient Town, aimed at travelers who want quality photos alongside their sightseeing.",
        heroImage: "https://res.cloudinary.com/dx2fxyaft/image/upload/v1789201824/asiabylocals/tours/private-photoshoot-and-guided-walk-experience-in-hoi-an/img0.jpg",
        sections: [
          {
            title: "The Short Answer",
            content: "Having a guide double as a photographer means you get properly composed photos at Hoi An's lantern-lit streets rather than rushed phone snapshots, worth it for travelers who specifically want professional-looking photos of their visit, not just another walking tour.",
            tourCard: { slug: "private-photoshoot-and-guided-walk-experience-in-hoi-an", title: "Private Photoshoot and Guided Walk Experience in Hoi An", description: "A private guided walk through Hoi An combined with a professional photoshoot.", price: "From $57", duration: "3 hours", image: "https://res.cloudinary.com/dx2fxyaft/image/upload/v1789201824/asiabylocals/tours/private-photoshoot-and-guided-walk-experience-in-hoi-an/img0.jpg" },
          },
          {
            title: "Practical Tips",
            content: "Bring a change of outfit if you want variety in your photos, many travelers swap clothes partway through for different shots." },
        ],
        faqs: [
          { q: "Is the private photoshoot and guided walk experience worth it in Hoi An?", a: "Yes, for travelers who specifically want quality photos of their visit rather than just another standard walking tour." }
        ],
      };

    default:
      return null;
  }
}

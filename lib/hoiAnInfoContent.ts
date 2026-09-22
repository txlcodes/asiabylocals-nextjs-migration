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

    default:
      return null;
  }
}

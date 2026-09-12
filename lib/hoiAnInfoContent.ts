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

    default:
      return null;
  }
}

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

    default:
      return null;
  }
}

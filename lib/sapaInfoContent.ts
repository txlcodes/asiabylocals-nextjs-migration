// Sapa authority pages (2026-09). Same CityInfoData shape as cityInfoContent.ts.
// Reached via getSapaInfoContent() -> getCityInfoContent().
import type { CityInfoData } from './cityInfoContent';

const IMG = 'https://res.cloudinary.com/dx2fxyaft/image/upload/v1789200977/asiabylocals/tours/food-tour-in-sa-pa-sapa/img0.jpg';

export function getSapaInfoContent(slug: string): CityInfoData | null {
  switch (slug) {

    case "sapa-trekking-guide":
      return {
        title: "Trekking in Sapa: The Routes, the Difficulty and the Homestay Question",
        seoTitle: "Sapa Trekking Guide 2026",
        description: "Which valley walks are worth the day, how hard they really are after rain, and what staying in a village actually involves.",
        heroImage: IMG,
        fastFacts: [
          { icon: "footprints", label: "Classic route", value: "Y Linh Ho to Lao Chai to Ta Van, about 6 hours" },
          { icon: "mountain", label: "Terrain", value: "Clay paths, steep in places, slippery after rain" },
          { icon: "bed", label: "Homestay", value: "Shared house, mattress on the floor, dinner with the family" },
          { icon: "users", label: "Guides", value: "Mostly H'mong and Red Dao women from the valley villages" },
          { icon: "cloud", label: "The real risk", value: "Fog, which can close the view for a whole day" },
        ],
        sections: [
          {
            title: "Trekking in Sapa: The Routes, the Difficulty and the Homestay Question",
            icon: "footprints",
            content: "Sapa town itself has been built up hard over the last decade and is not the reason to come. The valley below it still is.\n\nThe standard day walk drops from the town down through Y Linh Ho, Lao Chai and Ta Van, following the Muong Hoa valley with terraces on both sides. It is around six hours with lunch, mostly downhill, and it is the route almost every one-day tour uses.\n\nLonger versions carry on to Giang Ta Chai or Su Pan and take in more of the valley with fewer people on the path. Two-day versions add a night in a village, which is where the trip changes character.\n\nNone of it is technical. What makes it hard is surface rather than gradient.",
            tourCard: {
              slug: "trekking-to-y-linh-ho-lao-chai-and-ta-van-villages-in-sapa",
              title: "Trekking to Y Linh Ho, Lao Chai and Ta Van Villages",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 39",
              duration: "6 hours",
              image: IMG,
            },
          },
          {
            title: "How hard it is, honestly",
            icon: "alert-triangle",
            content: "⚠️ The paths are clay. Dry, they are an easy walk that a reasonably fit person in trainers manages without trouble. Wet, the same path is genuinely slippery and the descents need care.\n\nIt rains often here, including in months that are dry elsewhere in Vietnam, and a path that dried yesterday may not have dried today.\n\nBring shoes with grip. Walking boots are better than trainers and trainers are much better than the sandals a surprising number of people arrive in. Local women often appear at the start of the walk offering to sell you a bamboo stick; on a wet day it is worth having.\n\nTell your guide early if you want a slower pace. The groups are small and the route can be shortened, but not once you are three hours down the valley.",
          },
          {
            title: "Staying in a village",
            icon: "bed",
            content: "A homestay here is a family's house with extra mattresses, not a guesthouse. You eat what the household eats, usually at a long table with everyone, and there is often rice wine you are welcome to decline.\n\nBathrooms are simple and hot water is not guaranteed. Bedding is provided and is warm, which matters because the valley gets cold at night for most of the year.\n\nIt is the part of a Sapa trip people remember, and it is also the part that suits some travellers and not others. If shared sleeping space is a problem, take the day walk and sleep in town.",
          },
        ],
      };

    case "fansipan-cable-car-guide":
      return {
        title: "Fansipan: The Cable Car, the Climb, and What the Summit Is Actually Like",
        seoTitle: "Fansipan Cable Car Guide 2026",
        description: "The two ways up Indochina's highest peak, the stairs nobody mentions at the top, and the odds of seeing anything.",
        heroImage: IMG,
        fastFacts: [
          { icon: "mountain", label: "Height", value: "3,147m, the highest point in Indochina" },
          { icon: "cable-car", label: "Cable car", value: "About 15 minutes from Sun World station" },
          { icon: "footprints", label: "On foot", value: "Two days with a guide and an overnight camp" },
          { icon: "alert-triangle", label: "At the top", value: "Roughly 600 steps from the upper station, or a funicular" },
          { icon: "cloud", label: "The view", value: "Cloud is common; clear mornings are the best odds" },
        ],
        sections: [
          {
            title: "Fansipan: The Cable Car, the Climb, and What the Summit Is Actually Like",
            icon: "mountain",
            content: "Fansipan is the highest mountain in Vietnam, Laos and Cambodia, and since the cable car opened it is also one of the easiest high summits anywhere to stand on.\n\nThe cable car climbs out of the Muong Hoa valley in about fifteen minutes and covers ground that used to take a day and a half on foot. It is an extraordinary ride when the cloud is below you and a ride inside a white cloud when it is not.\n\nThe summit itself is developed: temple complexes, statuary, viewing platforms, and a good deal of concrete. People expecting a bare peak are sometimes disappointed. People who take it as a mountaintop pilgrimage site, which is what it now is for most Vietnamese visitors, get more out of it.",
            tourCard: {
              slug: "sapa-1-day-trekking-tour-rice-terraces-and-villages-sapa",
              title: "Sapa One-Day Trekking Tour: Rice Terraces and Villages",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 39",
              duration: "6 hours",
              image: IMG,
            },
          },
          {
            title: "The part people are not told about",
            icon: "alert-triangle",
            content: "⚠️ The cable car does not reach the summit. It reaches an upper station, and from there it is roughly six hundred steps to the top.\n\nAt three thousand metres those steps are harder than the same number at sea level, and in cold wet weather they are slow going. There is a short funicular that covers most of the climb for an extra fee, and it is worth knowing it exists before you are standing at the bottom of the staircase.\n\nIf anyone in your group has mobility or heart concerns, this is the detail that decides whether the trip works.",
          },
          {
            title: "Whether you will see anything",
            icon: "cloud",
            content: "Fansipan makes its own weather and cloud sits on it for a large part of the year. There is no way to guarantee a view and no operator can sell you one.\n\nThe best odds are early on a clear morning, particularly between September and November and again in March and April. Afternoons cloud over more often than mornings in every season.\n\nIf the mountain is socked in when you wake up, it is usually worth switching that day with a valley trek and taking the cable car on the better morning. Being flexible about which day is the single biggest thing in your control.",
          },
        ],
      };

    case "best-time-to-visit-sapa":
      return {
        title: "Best Time to Visit Sapa",
        seoTitle: "Best Time to Visit Sapa 2026",
        description: "When the terraces are green, when they are gold, and the months when the valley disappears into cloud.",
        heroImage: IMG,
        fastFacts: [
          { icon: "sprout", label: "Green terraces", value: "June to August, after the fields are flooded and planted" },
          { icon: "sun", label: "Golden terraces", value: "Roughly mid-September into early October, at harvest" },
          { icon: "droplet", label: "Water mirrors", value: "May, when the terraces are flooded for planting" },
          { icon: "cloud", label: "Worst visibility", value: "January to March, persistent cloud and drizzle" },
          { icon: "thermometer", label: "Winter", value: "Can approach freezing; occasional snow on the peaks" },
        ],
        sections: [
          {
            title: "Best Time to Visit Sapa",
            icon: "calendar-days",
            content: "Sapa's calendar is a farming calendar, and what the terraces look like depends entirely on where the rice is in its year.\n\nIn May the fields are flooded before planting and the terraces become sheets of water reflecting the sky, which is the most photographed version and the shortest window.\n\nFrom June to August they are green and growing, which is also the wettest stretch, with heavy afternoon rain and slippery paths.\n\nAround mid-September into early October the rice turns gold before harvest. This is the best combination of scenery and weather in the year and is correspondingly busy.\n\nAfter harvest the terraces are bare earth and stubble until spring, which is a perfectly good time to walk and a poor time to photograph.",
            tourCard: {
              slug: "t-van-to-su-pan-guided-trek-with-local-guide-in-sapa",
              title: "Ta Van to Su Pan Guided Trek with a Local Guide",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 38",
              duration: "5 hours",
              image: IMG,
            },
          },
          {
            title: "The fog, which is the real variable",
            icon: "cloud",
            content: "⚠️ Sapa sits at around 1,500m and spends a large part of the winter inside cloud. From January to March it is common to have several consecutive days where the valley is simply not visible.\n\nThis is not rain and it is not a forecast problem. It can be bright above and white below at the same time.\n\nIf the view is the reason you are going, avoid the first quarter of the year, and in any season give Sapa two nights rather than one. A single night is a coin toss; two gives you a second morning.",
          },
          {
            title: "How cold it actually gets",
            icon: "thermometer",
            content: "People pack for Vietnam and arrive in Sapa underdressed more often than anywhere else in the country.\n\nWinter nights can approach freezing and the peaks occasionally get snow, which makes the national news when it happens. Rooms are often heated only by an air-conditioning unit on its warm setting, which struggles.\n\nEven in summer the evenings are cool enough for a layer, and the temperature drops sharply the moment the sun goes behind a ridge. Bring one more warm thing than you think Vietnam needs.",
          },
        ],
      };

    case "getting-to-sapa-from-hanoi":
      return {
        title: "Getting to Sapa from Hanoi",
        seoTitle: "Hanoi to Sapa Transfer Guide 2026",
        description: "Sleeper bus, limousine van or the night train: how long each takes, and why Sapa is not a day trip.",
        heroImage: IMG,
        fastFacts: [
          { icon: "bus", label: "Sleeper bus", value: "About 5 to 6 hours on the expressway" },
          { icon: "car", label: "Limousine van", value: "Similar time, fewer seats, door to door" },
          { icon: "train", label: "Night train", value: "To Lao Cai overnight, then about an hour by road" },
          { icon: "clock", label: "Minimum stay", value: "Two nights; one night is mostly travel" },
          { icon: "alert-triangle", label: "Not a day trip", value: "Ten to twelve hours in a seat for a few hours in the hills" },
        ],
        sections: [
          {
            title: "Getting to Sapa from Hanoi",
            icon: "bus",
            content: "The expressway changed this journey. It used to be an overnight train because the road took most of a day; now the road is around five to six hours and is what most people use.\n\nSleeper buses have flat or near-flat berths rather than seats and run day and night. Limousine vans are smaller, have proper seats, and will usually collect and drop at your hotel, which removes the bus station at both ends.\n\nThe night train to Lao Cai still runs and is the romantic option. It does not go to Sapa: Lao Cai is about an hour further on by road, and that transfer happens early in the morning.\n\nAll three arrive tired. The practical difference is whether you lose a night's sleep or a day.",
            tourCard: {
              slug: "transfer-to-or-from-sapa-by-a-vip-sleeper-bus",
              title: "Transfer To or From Sapa by VIP Sleeper Bus",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 42",
              duration: "6 hours",
              image: IMG,
            },
          },
          {
            title: "Why one night does not work",
            icon: "clock",
            content: "⚠️ Arriving on a morning bus and leaving on an evening bus the next day gives you roughly one usable day, and if that day is fogged in, you have seen nothing.\n\nTwo nights gives you two mornings, which is the single most useful thing you can buy here, because mornings are clearer than afternoons in almost every season.\n\nSapa sold as a day trip from Hanoi is a bus ride with a short stop in the middle. It appears on booking sites because it sells, not because it works.",
          },
          {
            title: "Motion sickness, which is common on this road",
            icon: "alert-triangle",
            content: "The last stretch from the expressway up to Sapa is a continuous climb with tight bends, and it affects people who are usually fine on buses.\n\nIf you are prone to it, take the front of a limousine van rather than a rear berth on a sleeper, and take something before you leave rather than when you start to feel it.\n\nThe same applies coming down, which is faster and worse.",
          },
        ],
      };

    default:
      return null;
  }
}

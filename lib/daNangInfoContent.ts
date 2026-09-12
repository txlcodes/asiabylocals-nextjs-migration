// Da Nang authority pages (2026-09). Same CityInfoData shape as cityInfoContent.ts.
// Reached via getDaNangInfoContent() -> getCityInfoContent().
import type { CityInfoData } from './cityInfoContent';

const IMG = 'https://res.cloudinary.com/dx2fxyaft/image/upload/v1789201269/asiabylocals/tours/ba-na-hills-and-golden-bridge-cable-car-ticket-in-da-nang/img0.jpg';

export function getDaNangInfoContent(slug: string): CityInfoData | null {
  switch (slug) {

    case "ba-na-hills-golden-bridge-guide":
      return {
        title: "Ba Na Hills and the Golden Bridge: Crowds, Timing and What It Really Is",
        seoTitle: "Ba Na Hills Golden Bridge Guide 2026",
        description: "How to get the bridge without the queue, what the rest of the hilltop is, and why the weather up there is a different day.",
        heroImage: IMG,
        fastFacts: [
          { icon: "cable-car", label: "Getting up", value: "Cable car; among the longest non-stop systems in the world" },
          { icon: "clock", label: "Go early", value: "First cars up, before roughly 9am" },
          { icon: "thermometer", label: "Up top", value: "Often 8-10°C cooler than Da Nang" },
          { icon: "cloud", label: "Visibility", value: "Cloud sits on the hill often; mornings are clearer" },
          { icon: "users", label: "Expect", value: "A theme park, not a quiet viewpoint" },
        ],
        sections: [
          {
            title: "Ba Na Hills and the Golden Bridge: Crowds, Timing and What It Really Is",
            icon: "cable-car",
            content: "The Golden Bridge, held up by two enormous stone hands, is the most photographed object in central Vietnam and it is a short walkway at the top of a hill resort.\n\nThat is worth knowing before you go, because a lot of people arrive expecting a remote mountain structure and find a French-themed village with rides, restaurants and a great many other visitors.\n\nIf you take it for what it is, it is a genuinely good day out and the cable car ride is remarkable on its own. If you are only there for one photograph, understand that hundreds of other people are there for the same one.",
            tourCard: {
              slug: "bana-hills-and-golden-bridge-small-group-tour-in-da-nang",
              title: "Ba Na Hills and Golden Bridge Small-Group Tour",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 26",
              duration: "8.5 hours",
              image: IMG,
            },
          },
          {
            title: "Timing, which decides the whole day",
            icon: "clock",
            content: "⚠️ The bridge is at its emptiest in the first hour after opening and effectively never empty after mid-morning.\n\nThe tours that leave Da Nang early and go straight up are worth the earlier start. Tours that stop somewhere first arrive into the queue.\n\nCloud is the other reason mornings win. The hill makes its own weather and by afternoon it is frequently inside a cloud, which means no view from the bridge at all and a cable car ride through white.\n\nWeekends and Vietnamese public holidays are substantially busier than weekdays. A Tuesday in a shoulder month is a different experience from a Saturday in July.",
          },
          {
            title: "What to bring up the hill",
            icon: "shirt",
            content: "It is meaningfully colder at the top, often eight to ten degrees below Da Nang, and windier. People go up in beach clothes and regret it.\n\nTake a layer, and something waterproof in the wet season, because a shower up there arrives without warning.\n\nAllow more time than you expect. The cable car queue at peak times can be long in both directions, and the descent queue late in the afternoon is the one that catches people with an evening flight.",
          },
        ],
      };

    case "marble-mountains-guide":
      return {
        title: "The Marble Mountains: The Lift, the Caves and Which Peak to Climb",
        seoTitle: "Marble Mountains Da Nang Guide 2026",
        description: "Five limestone hills between Da Nang and Hoi An, the one you actually climb, and the cave that is worth the extra ticket.",
        heroImage: IMG,
        fastFacts: [
          { icon: "mountain", label: "The hills", value: "Five peaks named for the elements; one is open to visitors" },
          { icon: "arrow-up", label: "Getting up", value: "A lift, or a long staircase" },
          { icon: "flashlight", label: "Am Phu cave", value: "A separate ticket; the Buddhist hell cave" },
          { icon: "clock", label: "Allow", value: "Two to three hours for the main peak" },
          { icon: "thermometer", label: "Inside", value: "Caves are cool; the steps outside are not" },
        ],
        sections: [
          {
            title: "The Marble Mountains: The Lift, the Caves and Which Peak to Climb",
            icon: "mountain",
            content: "Five marble and limestone hills rise straight out of flat coastal land between Da Nang and Hoi An, each named after one of the five elements. Only Thuy Son, the water mountain, is developed for visitors, and it is the one every tour means.\n\nInside it are caves that have been used as Buddhist and Hindu shrines for centuries, with pagodas built into the rock and openings in the ceiling that drop shafts of light onto altars.\n\nIt is a short visit with a lot in it, and it works well as a half day paired with something else rather than as a day on its own.",
            tourCard: {
              slug: "marble-mountain-monkey-mountain-and-am-phu-cave-tour-in-da-nang",
              title: "Marble Mountain, Monkey Mountain and Am Phu Cave Tour",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 30",
              duration: "4.5 hours",
              image: IMG,
            },
          },
          {
            title: "The lift, and whether to take it",
            icon: "arrow-up",
            content: "There is a lift up the side of Thuy Son and there is a staircase. The lift costs a small extra fee and saves a climb of well over a hundred steps in heat.\n\nTaking the lift up and walking down is the arrangement most people are happiest with. The descent passes several shrines the lift skips and is much easier than the ascent.\n\nThere are still steps once you are up there, including narrow and uneven ones inside the caves, so the lift removes the worst of it rather than all of it. Shoes with grip help: the marble underfoot is polished by centuries of feet and is slippery when damp.",
          },
          {
            title: "Am Phu cave, which is a separate thing",
            icon: "flashlight",
            content: "Am Phu is at the base rather than the top and needs its own ticket, which is why some tours include it and some do not.\n\nIt is a depiction of the Buddhist hell, laid out as a descent into the dark past scenes of judgment and punishment, with a climb back up towards the light. It is genuinely atmospheric and a little unnerving, and it is unlike anything else at the site.\n\nIt is dark and uneven. A phone torch is worth having, and it is not the right place for anyone unsteady on their feet.",
          },
        ],
      };

    case "getting-around-da-nang":
      return {
        title: "Getting Around Da Nang and On to Hoi An",
        seoTitle: "Da Nang Transport Guide 2026",
        description: "The 45 minutes between Da Nang and Hoi An, the Hai Van Pass, and how the two cities split a trip.",
        heroImage: IMG,
        fastFacts: [
          { icon: "car", label: "Da Nang to Hoi An", value: "About 45 minutes by road" },
          { icon: "plane", label: "The airport", value: "Inside the city, about 10 minutes from the beach strip" },
          { icon: "mountain", label: "Hai Van Pass", value: "North towards Hue; the scenic route, not the fast one" },
          { icon: "train", label: "By rail", value: "The Da Nang to Hue line is one of Vietnam's best rides" },
          { icon: "bike", label: "In the city", value: "Ride-hailing apps work well and are cheap" },
        ],
        sections: [
          {
            title: "Getting Around Da Nang and On to Hoi An",
            icon: "car",
            content: "Da Nang and Hoi An are forty-five minutes apart and most visitors use one as a base and day-trip to the other. Which way round is worth thinking about.\n\nDa Nang is a modern coastal city: a long beach, big hotels, bridges lit at night, and an international airport inside the city. It is easy and it is not especially characterful.\n\nHoi An is the old town, smaller, prettier and busier in the evenings, with its own beaches a short ride away.\n\nMost people who have done both say stay in Hoi An and day-trip to Da Nang, unless you want a resort beach holiday, in which case reverse it.",
            tourCard: {
              slug: "transfer-from-da-nang-to-hoian-or-vice-versa",
              title: "Transfer Between Da Nang and Hoi An",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 19",
              duration: "45 minutes",
              image: IMG,
            },
          },
          {
            title: "The Hai Van Pass",
            icon: "mountain",
            content: "The pass climbs over the mountains between Da Nang and Hue and is one of the great coastal roads anywhere. There is now a tunnel underneath it, which is what buses and most traffic use, so the pass itself is quieter than it used to be.\n\nThat means a transfer to Hue can go either way, and the fast way misses the entire point. If you are moving between the two cities, pay for the route over the top.\n\nThe train takes a lower line along the coast and is a genuinely spectacular ride in its own right, arguably better than the road for scenery and much better for not watching the road.\n\nCloud sits on the pass often. A clear day is luck rather than planning.",
          },
          {
            title: "Getting around the city itself",
            icon: "bike",
            content: "Ride-hailing apps work throughout Da Nang and are inexpensive, which makes them the default for most visitors. Car and motorbike options both appear in the same apps.\n\nThe beach strip is long and the distances along it are further than they look on a map, so walking from one end to the other is not the plan it appears to be.\n\nThe Dragon Bridge breathes fire and water on weekend evenings. It is a short show, it draws a crowd, and the bridge closes to traffic around it, which is worth knowing if you are trying to cross the river at that hour.",
          },
        ],
      };

    default:
      return null;
  }
}

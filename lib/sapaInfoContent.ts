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

    case "sapa-homestay-guide":
      return {
        title: "Homestays in Sapa: What a Night in a Hmong or Dao House Is Really Like, the Villages, and How to Book One",
        seoTitle: "Sapa Homestay Guide 2026",
        description: "The difference between a village homestay and a homestay hotel, the villages (Ta Van, Lao Chai, Ta Phin, Ban Ho), what you sleep on and eat, the etiquette, and how the two-day trek with a homestay is structured.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/sapa-2-day-1-night-trek-homestay-and-hmong-culture-with-isee-hmoob/img0/1600.webp",
        fastFacts: [
          { icon: "home", label: "Villages", value: "Ta Van and Lao Chai (Muong Hoa valley), Ta Phin (Red Dao), Ban Ho" },
          { icon: "bed", label: "Sleeping", value: "Mattress and mosquito net on a shared floor, or a private room" },
          { icon: "utensils", label: "Food", value: "Family dinner: rice, greens, pork or chicken, rice wine" },
          { icon: "ticket", label: "Cost", value: "USD 10 to 25 a night with meals; more with a private room" },
          { icon: "clock", label: "Typical", value: "2-day-1-night trek from Sapa" },
          { icon: "shield", label: "Bring", value: "Warm layer, torch, cash, earplugs" },
        ],
        sections: [

          {
            title: "Two kinds of homestay",
            icon: "home",
            content: "The word covers two things in Sapa. A village homestay is a family's stilt or wooden house in Ta Van, Lao Chai, Ta Phin or Ban Ho, where you sleep on a mattress under a mosquito net in the shared upper room or a curtained corner, eat dinner with the family and wake to roosters and the valley; it is the real thing and it is simple. A homestay hotel is a purpose-built guesthouse in the same villages with private rooms, hot showers and a restaurant, run by a local family but closer to a lodge. Both are honest; know which you are booking. The trekking guides use both.",
            tourCard: {
              slug: "sapa-2-day-1-night-trek-homestay-and-hmong-culture-with-isee-hmoob",
              title: "SAPA 2-Day 1-Night TREK - HOMESTAY and HMONG CULTURE WITH ISEE HMOOB",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 57.20",
              duration: "2 days",
              image: "https://images.asiabylocals.com/asiabylocals/tours/sapa-2-day-1-night-trek-homestay-and-hmong-culture-with-isee-hmoob/img0/1600.webp",
            },
          },
          {
            title: "The villages",
            icon: "map",
            content: "Ta Van, in the Muong Hoa valley 10 km from Sapa, is the most-used: Giay and Hmong families, terraces on both sides, and enough homestays that a quiet one is a matter of asking. Lao Chai, an hour's walk before it, is Black Hmong. Ta Phin, north of town, is the Red Dao village known for herbal baths and embroidery. Ban Ho, further down the valley, is Tay stilt houses by the river and the quietest of the four. The [trekking guide](/vietnam/sapa/sapa-trekking-guide) shows how the villages connect on foot.",
            tourCard: {
              slug: "explore-villages-and-rice-terraces-trek-in-one-day-in-sapa",
              title: "Explore Villages and Rice Terraces Trek In One-Day in Sapa",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 49.36",
              duration: "5 hours",
              image: "https://images.asiabylocals.com/asiabylocals/tours/explore-villages-and-rice-terraces-trek-in-one-day-in-sapa/img0/1600.webp",
            },
          },
          {
            title: "A night, honestly",
            icon: "bed",
            content: "Dinner is cooked over the family's fire: rice, stir-fried greens from the garden, pork or a chicken, tofu, spring rolls if there are guests, and happy water, the home-brewed rice wine that comes in small shots and repeated toasts. You sleep early because the village does; the mattress is thin, the blankets heavy, and the roosters start at four. Bathrooms are shared and often outside; hot water is a solar tank that runs out. It is cold from November to March, sometimes near freezing, and the houses are not heated. Bring a warm layer, a torch and earplugs, and it is one of the best nights in Vietnam.",
            tourCard: {
              slug: "sapa-2-day-1-night-trekking-hmong-and-red-dao-herbs-culture",
              title: "Sapa 2-Day 1-Night: Trekking, Hmong and Red Dao Herbs Culture",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 45.50",
              duration: "2 days",
              image: "https://images.asiabylocals.com/asiabylocals/tours/sapa-2-day-1-night-trekking-hmong-and-red-dao-herbs-culture/img0/1600.webp",
            },
          },
          {
            title: "Etiquette",
            icon: "shield",
            content: "Shoes off at the door, ask before photographing people, accept the rice wine once and refuse politely after, and do not hand money to children, which the villages themselves ask visitors not to do. Buying embroidery from the women who walk with you is welcome and is how the guiding economy works; the price is set and small. A small gift for the family (fruit, tea, school pencils) is appreciated but not expected. Your guide handles the introductions and the sleeping arrangements.",
            tourCard: {
              slug: "2-day-sapa-bac-ha-market-night-train-and-homestay-overnight-by-local-operator",
              title: "2 Day Sapa-Bac Ha Market: Night Train and Homestay Overnight by Local Operator",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 101.40",
              duration: "2 days",
              image: "https://images.asiabylocals.com/asiabylocals/tours/2-day-sapa-bac-ha-market-night-train-and-homestay-overnight-by-local-operator/img0/1600.webp",
            },
          },
          {
            title: "Booking and cost",
            icon: "ticket",
            content: "Homestays are booked as part of a trek (2-day-1-night from Sapa, USD 45 to 90 per person with guide, meals and the night) or directly with a family for USD 10 to 25 a night including dinner and breakfast. Private rooms in the homestay hotels run USD 25 to 50. Leave luggage at your Sapa hotel and carry a day pack. The [best time guide](/vietnam/sapa/best-time-to-visit-sapa) covers the cold months and the [getting to Sapa](/vietnam/sapa/getting-to-sapa-from-hanoi) page the journey from Hanoi.",
            tourCard: {
              slug: "2-day-2-night-sapa-trek-with-homestay-and-vip-bus",
              title: "2-Day 2-Night Sapa Trek with Homestay and VIP Bus",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 153.40",
              duration: "60 hours",
              image: "https://images.asiabylocals.com/asiabylocals/tours/2-day-2-night-sapa-trek-with-homestay-and-vip-bus/img0/1600.webp",
            },
          },
        ],
        faqs: [
          { q: "What is a homestay in Sapa like?", a: "A family's wooden or stilt house in a village, a mattress under a mosquito net in a shared room or a private room, dinner with the family and rice wine, cold from November to March. Homestay hotels in the same villages offer private rooms and hot showers." },
          { q: "Which village is best for a homestay in Sapa?", a: "Ta Van for the valley and choice, Ta Phin for Red Dao culture and herbal baths, Ban Ho for quiet by the river." },
          { q: "How much is a Sapa homestay?", a: "USD 10 to 25 a night with dinner and breakfast in a family house, USD 25 to 50 for a private room in a homestay hotel, or USD 45 to 90 as part of a two-day guided trek." },
          { q: "Do I need to book a homestay through a trek?", a: "No, families take direct bookings, but a guided trek includes the walk between villages and the introductions, and most first visitors do it that way." },
        ],
      };

    case "sapa-markets-and-bac-ha-guide":
      return {
        title: "Sapa's Markets and Bac Ha Sunday Market: Where the Hill Tribes Trade, What Day, and How to Go",
        seoTitle: "Sapa Markets & Bac Ha Market Guide 2026",
        description: "The weekly markets around Sapa (Bac Ha on Sunday, Can Cau on Saturday, Coc Ly on Tuesday, Muong Hum), Sapa's own market, what is sold, the buffalo and horse trading, and the long day trip to Bac Ha.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/2-day-sapa-bac-ha-market-night-train-and-homestay-overnight-by-local-operator/img0/1600.webp",
        fastFacts: [
          { icon: "calendar", label: "Bac Ha", value: "Sunday, the largest; Flower Hmong" },
          { icon: "calendar", label: "Can Cau", value: "Saturday, 20 km north of Bac Ha, buffalo trading" },
          { icon: "calendar", label: "Coc Ly", value: "Tuesday, by boat on the Chay river" },
          { icon: "map", label: "From Sapa", value: "Bac Ha about 100 km, 2.5 to 3 hours each way" },
          { icon: "clock", label: "Market hours", value: "Busiest 8:00 to 11:00" },
          { icon: "ticket", label: "Tour", value: "USD 30 to 55 group, USD 90 to 150 private car" },
        ],
        sections: [

          {
            title: "Why the markets matter",
            icon: "landmark",
            content: "The weekly markets are where the mountain economy happens: Flower Hmong, Black Hmong, Red Dao, Tay, Phu La and Nung families walk or ride in from the villages to sell buffalo, horses, pigs, chickens, medicinal plants, indigo cloth and embroidery, eat thang co (horse stew) and drink corn wine, and go home by noon. They are not staged for visitors, which is the point, and each has its day. Sapa's own market runs daily in town and is the everyday version.",
            tourCard: {
              slug: "2-day-sapa-bac-ha-market-night-train-and-homestay-overnight-by-local-operator",
              title: "2 Day Sapa-Bac Ha Market: Night Train and Homestay Overnight by Local Operator",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 101.40",
              duration: "2 days",
              image: "https://images.asiabylocals.com/asiabylocals/tours/2-day-sapa-bac-ha-market-night-train-and-homestay-overnight-by-local-operator/img0/1600.webp",
            },
          },
          {
            title: "Bac Ha on Sunday",
            icon: "calendar",
            content: "Bac Ha, 100 km east of Sapa near the Chinese border, is the big one: from 7:00 the town fills with Flower Hmong women in the brightest embroidery in Vietnam, a buffalo and horse market on the edge of town, a livestock section, rows of pho and thang co stalls, and the textiles. By 11:00 it thins and by early afternoon it is over. Tours from Sapa leave at 6:00 and are 10- to 11-hour days with the drive, usually adding the Hmong king's palace in Bac Ha or a village walk; from Hanoi it is done with an overnight in Lao Cai or Sapa.",
            tourCard: {
              slug: "1d-local-bac-ha-sunday-market-tour-best-seller",
              title: "1D Local Bac Ha Sunday Market Tour - Best Seller",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 45.41",
              duration: "10 hours",
              image: "https://images.asiabylocals.com/asiabylocals/tours/1d-local-bac-ha-sunday-market-tour-best-seller/img0/1600.webp",
            },
          },
          {
            title: "Saturday and Tuesday",
            icon: "calendar",
            content: "Can Cau, 20 km north of Bac Ha on Saturday, is smaller and more about the animals, with the buffalo trading in the field below the market; it combines with Bac Ha for a weekend. Coc Ly, on Tuesday, is reached by a boat ride on the Chay river and is the least visited. Muong Hum, on Sunday west of Lao Cai, is the alternative to Bac Ha for a quieter Sunday. Sin Cheng, Wednesday, and Lung Khau Nhin, Thursday, are for people staying the week.",
            tourCard: {
              slug: "village-trek-cooking-class-and-herbal-bath-in-sapa",
              title: "Village Trek, Cooking Class, and Herbal Bath in Sapa",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 103.91",
              duration: "5 hours",
              image: "https://images.asiabylocals.com/asiabylocals/tours/village-trek-cooking-class-and-herbal-bath-in-sapa/img0/1600.webp",
            },
          },
          {
            title: "Sapa's own market",
            icon: "map",
            content: "The town market on Ngu Chi Son street runs every day: a produce hall, a food court with the local dishes, and an upstairs of Hmong and Dao textiles and silver, where the women who did not walk to the villages sell. It is the place to buy indigo and embroidery at a fair price after the trek, and to eat thang co without the drive. Saturday evening's love market, a courtship tradition, is now a small performance in the square rather than the real thing.",
            tourCard: {
              slug: "2-day-sapa-homestay-and-cooking-class-with-locals",
              title: "2-day Sapa Homestay and Cooking class with locals",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 77.87",
              duration: "2 days",
              image: "https://images.asiabylocals.com/asiabylocals/tours/2-day-sapa-homestay-and-cooking-class-with-locals/img0/1600.webp",
            },
          },
          {
            title: "Practical",
            icon: "ticket",
            content: "Bac Ha day tours from Sapa run USD 30 to 55 per person by shared van, USD 90 to 150 for a private car; the road is winding and the day is long, so leave at 6:00 and bring motion-sickness tablets. Cash only at the markets, small notes. Ask before photographing people, and buy from the women rather than photographing for free; both are welcomed. The [trekking guide](/vietnam/sapa/sapa-trekking-guide) pairs a Bac Ha Sunday with a Monday-to-Wednesday trek, and the [best time guide](/vietnam/sapa/best-time-to-visit-sapa) covers the cold Sundays of winter.",
            tourCard: {
              slug: "sapa-hill-tribes-2-day-tour-by-overnight-train",
              title: "Sapa Hill Tribes 2-Day Tour by Overnight Train",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 330.20",
              duration: "3 days",
              image: "https://images.asiabylocals.com/asiabylocals/tours/sapa-hill-tribes-2-day-tour-by-overnight-train/img0/1600.webp",
            },
          },
        ],
        faqs: [
          { q: "What day is Bac Ha market?", a: "Sunday, from about 7:00 to noon. Can Cau is Saturday, Coc Ly is Tuesday, Muong Hum is Sunday." },
          { q: "How far is Bac Ha from Sapa?", a: "About 100 km, 2.5 to 3 hours each way on a winding road; tours leave Sapa at 6:00 and return by late afternoon." },
          { q: "Is Bac Ha market worth the drive?", a: "Yes if you are in Sapa on a Sunday: it is the largest and most colourful hill-tribe market in the north, and not staged. Skip it if you have only one day, and trek instead." },
          { q: "What can I buy at the Sapa markets?", a: "Indigo cloth, Hmong and Dao embroidery, silver, medicinal herbs, corn wine, and at Bac Ha, if you wanted one, a buffalo." },
        ],
      };

    case "mu-cang-chai-and-rice-terrace-guide":
      return {
        title: "Rice Terraces of the North: When Sapa, Mu Cang Chai and Hoang Su Phi Are Green, Flooded and Gold",
        seoTitle: "Northern Vietnam Rice Terrace Guide 2026",
        description: "The rice calendar that decides what the terraces look like, the three great terrace regions (Muong Hoa near Sapa, Mu Cang Chai, Hoang Su Phi), the drive times, and the photographs each season gives.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/explore-villages-and-rice-terraces-trek-in-one-day-in-sapa/img0/1600.webp",
        fastFacts: [
          { icon: "calendar", label: "Flooded mirrors", value: "Late April to early June (planting)" },
          { icon: "calendar", label: "Green", value: "June to August" },
          { icon: "calendar", label: "Gold", value: "Mid-September to early October (harvest)" },
          { icon: "map", label: "Muong Hoa", value: "Sapa's valley, walkable" },
          { icon: "map", label: "Mu Cang Chai", value: "Yen Bai, 6 to 7 hours from Hanoi" },
          { icon: "map", label: "Hoang Su Phi", value: "Ha Giang, remote, gold late September" },
        ],
        sections: [

          {
            title: "One crop, four looks",
            icon: "calendar",
            content: "The northern mountains grow a single rice crop a year, and the terraces change with it: bare and brown in winter, flooded and mirror-like when the paddies are filled and planted from late April to early June, deep green through the summer rains, and gold for two or three weeks from mid-September before the harvest strips them. The photographs people come for are the flooded terraces at planting and the gold at harvest; the green months are lush and cloudy. Plan the dates first and the destination second.",
            tourCard: {
              slug: "explore-villages-and-rice-terraces-trek-in-one-day-in-sapa",
              title: "Explore Villages and Rice Terraces Trek In One-Day in Sapa",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 49.36",
              duration: "5 hours",
              image: "https://images.asiabylocals.com/asiabylocals/tours/explore-villages-and-rice-terraces-trek-in-one-day-in-sapa/img0/1600.webp",
            },
          },
          {
            title: "Muong Hoa, Sapa's valley",
            icon: "map",
            content: "The terraces below Sapa along the Muong Hoa valley to Ta Van and beyond are the accessible ones: an hour's walk from town, seen from every trek, and the reason the [trekking guide](/vietnam/sapa/sapa-trekking-guide) exists. They are among the steepest in Vietnam and gold in the second half of September. Sapa's cloud and rain are the risk: June to August is the wettest and the valley can be fogged for days.",
            tourCard: {
              slug: "muong-hoa-valley-1-day-trek-stunning-rice-terraces-in-sapa",
              title: "Muong Hoa Valley 1 Day Trek – Stunning Rice Terraces in Sapa",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 41.56",
              duration: "6 hours",
              image: "https://images.asiabylocals.com/asiabylocals/tours/muong-hoa-valley-1-day-trek-stunning-rice-terraces-in-sapa/img0/1600.webp",
            },
          },
          {
            title: "Mu Cang Chai",
            icon: "mountain",
            content: "Mu Cang Chai, in Yen Bai province six to seven hours from Hanoi (and about four from Sapa over the Khau Pha pass), has the terraces the postcards use: the amphitheatres of La Pan Tan, Che Cu Nha and De Xu Phinh, recognised as a national heritage landscape, where the Hmong have carved whole hillsides. The gold season runs from about 15 September to 5 October and the district holds a terrace festival with paragliding off the pass. It is a two-day trip from Hanoi at least, by car or motorbike, and worth it in the harvest fortnight above all.",
            tourCard: {
              slug: "crossing-mu-cang-chai-rice-terraces-2-day-tour-from-hanoi-sapa",
              title: "Crossing: Mu Cang Chai Rice Terraces 2-Day Tour from Hanoi (Sapa)",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 150.66",
              duration: "2 days",
              image: "https://images.asiabylocals.com/asiabylocals/tours/crossing-mu-cang-chai-rice-terraces-2-day-tour-from-hanoi-sapa/img0/1600.webp",
            },
          },
          {
            title: "Hoang Su Phi and beyond",
            icon: "mountain",
            content: "Hoang Su Phi, in Ha Giang province, is the remote one: terraces on slopes so steep they look vertical, Red Dao and La Chi villages, and almost no other visitors, gold in late September. It is a three- or four-day loop from Hanoi and often combined with the Ha Giang motorbike loop. Pu Luong, south-west of Hanoi in Thanh Hoa, is the gentle alternative: lower terraces, Thai stilt villages and lodges, two crops a year so green more often, four hours from the capital.",
            tourCard: {
              slug: "sapa-hoang-lien-national-park-and-tribal-village-trek-private-by-local-operator",
              title: "Sapa Hoang Lien National Park and Tribal Village Trek Private by Local Operator",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 164.94",
              duration: "5 hours",
              image: "https://images.asiabylocals.com/asiabylocals/tours/sapa-hoang-lien-national-park-and-tribal-village-trek-private-by-local-operator/img0/1600.webp",
            },
          },
          {
            title: "Planning",
            icon: "clock",
            content: "For flooded terraces, mid-May; for gold, 15 to 30 September in Mu Cang Chai and the last week of September to the first of October in Sapa and Hoang Su Phi, and book transport and rooms a month ahead, since Vietnamese photographers fill every guesthouse. Weather is the wildcard: the harvest fortnight is also the tail of the typhoon season and fog is normal. Guided treks and private cars from Sapa reach Mu Cang Chai in a day; the [best time guide](/vietnam/sapa/best-time-to-visit-sapa) has the Sapa detail.",
            tourCard: {
              slug: "2-day-mu-cang-chai-rice-terrace-motorbike-adventure-in-sapa",
              title: "2-Day Mu Cang Chai Rice Terrace motorbike Adventure in Sapa",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 259.77",
              duration: "2 days",
              image: "https://images.asiabylocals.com/asiabylocals/tours/2-day-mu-cang-chai-rice-terrace-motorbike-adventure-in-sapa/img0/1600.webp",
            },
          },
        ],
        faqs: [
          { q: "When are the rice terraces gold in Sapa?", a: "Roughly the second half of September to early October, for two or three weeks before harvest. Mu Cang Chai peaks slightly earlier, around 15 September to 5 October." },
          { q: "When are the terraces flooded?", a: "Late April to early June, when the paddies are filled and planted; the mirror photographs are from this window." },
          { q: "Where are the best rice terraces in Vietnam?", a: "Mu Cang Chai in Yen Bai for the famous amphitheatres, Hoang Su Phi in Ha Giang for the steepest and emptiest, and Sapa's Muong Hoa valley for the accessible ones." },
          { q: "How far is Mu Cang Chai from Sapa?", a: "About four hours by road over the Khau Pha pass, or six to seven from Hanoi; it is at least a two-day trip." },
        ],
      };

    case "sapa-2-day-itinerary":
      return {
        title: "Two Days in Sapa: The Valley Trek with a Homestay, or Fansipan and the Villages from Town",
        seoTitle: "Sapa 2-Day Itinerary 2026",
        description: "Two ways to spend two days in Sapa depending on how far you want to walk: the classic overnight trek through the Muong Hoa valley, or a town-based pair of days with the Fansipan cable car, Cat Cat and Ta Phin, with the timings, costs and the weather caveat.",
        heroImage: "https://images.asiabylocals.com/asiabylocals/tours/sapa-2-days-trek-tour-stay-sapa-homestay-by-local-operator/img0/1600.webp",
        fastFacts: [
          { icon: "clock", label: "Arrive", value: "Overnight train or 6-hour bus from Hanoi, arriving morning" },
          { icon: "mountain", label: "Option A", value: "2-day trek Y Linh Ho, Lao Chai, Ta Van, homestay, Giang Ta Chai" },
          { icon: "ticket", label: "Option B", value: "Fansipan cable car day + Cat Cat and Ta Phin day" },
          { icon: "bed", label: "Sleep", value: "Village homestay (A) or Sapa hotel (B)" },
          { icon: "calendar", label: "Best", value: "March to May, September to November" },
          { icon: "cloud", label: "Fog", value: "Common; Fansipan is a gamble in cloud" },
        ],
        sections: [

          {
            title: "Getting the timing right",
            icon: "clock",
            content: "Sapa is 320 km from Hanoi: an overnight train to Lao Cai and an hour's shuttle up, arriving around 7:00, or the six-hour limousine bus on the expressway, arriving at noon. Either way two days means two full days in the mountains, and the plan depends on one question: do you want to walk the valley and sleep in a village, or stay in town and see it in pieces. The [getting to Sapa](/vietnam/sapa/getting-to-sapa-from-hanoi) page has the transport.",
            tourCard: {
              slug: "sapa-2-days-trek-tour-stay-sapa-homestay-by-local-operator",
              title: "Sapa 2-Days Trek tour - Stay Sapa Homestay by Local Operator",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 89.70",
              duration: "2 days",
              image: "https://images.asiabylocals.com/asiabylocals/tours/sapa-2-days-trek-tour-stay-sapa-homestay-by-local-operator/img0/1600.webp",
            },
          },
          {
            title: "Option A: the two-day trek",
            icon: "mountain",
            content: "Day 1: leave Sapa at 9:00 with a Hmong guide, down through Y Linh Ho and Lao Chai along the Muong Hoa river, lunch in a village, on to Ta Van by mid-afternoon, 12 to 14 km, and the night in a homestay with the family's dinner and rice wine. Day 2: Ta Van to Giang Ta Chai's waterfall and the Red Dao side of the valley, or up to Su Pan, 8 to 10 km, lunch, and a car back to Sapa by 15:00 for the evening bus or train. USD 45 to 90 per person with guide, meals and the homestay. The [trekking guide](/vietnam/sapa/sapa-trekking-guide) and [homestay guide](/vietnam/sapa/sapa-homestay-guide) have the detail.",
            tourCard: {
              slug: "explore-sapa-s-ethnic-villages-and-waterfalls-2-days-trek-by-local-operator",
              title: "Explore Sapa’s Ethnic Villages and WaterFalls 2 Days Trek by Local Operator",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 59.70",
              duration: "Flexible",
              image: "https://images.asiabylocals.com/asiabylocals/tours/explore-sapa-s-ethnic-villages-and-waterfalls-2-days-trek-by-local-operator/img0/1600.webp",
            },
          },
          {
            title: "Option B: town-based",
            icon: "ticket",
            content: "Day 1: the Fansipan cable car from the Sun World station at the edge of town, 15 minutes to 3,000 metres and a funicular and 600 steps to the 3,143-metre summit, best in the morning before cloud; back for lunch, then Cat Cat village, the Hmong village and waterfall 3 km below town, a two-hour loop. Day 2: Ta Phin, the Red Dao village 12 km north, with a village walk, embroidery and a herbal bath, or a half-day guided walk to Lao Chai and Ta Van by car and foot. Sleep both nights in Sapa. The [Fansipan guide](/vietnam/sapa/fansipan-cable-car-guide) explains the ticket and the cloud.",
            tourCard: {
              slug: "trekking-to-villages-and-cooking-class-in-town-in-sapa",
              title: "Trekking to Villages and Cooking Class in Town in Sapa",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 78.00",
              duration: "7 hours",
              image: "https://images.asiabylocals.com/asiabylocals/tours/trekking-to-villages-and-cooking-class-in-town-in-sapa/img0/1600.webp",
            },
          },
          {
            title: "Combining and adding",
            icon: "map",
            content: "Two days plus a Sunday is a Bac Ha market morning ([markets guide](/vietnam/sapa/sapa-markets-and-bac-ha-guide)) before the trek. Three days allows the trek and Fansipan. The Sapa town sights, the stone church, the lake and the market, fit into any evening. Skip the O Quy Ho pass unless it is clear; the Silver Waterfall on the way is fine for half an hour.",
            tourCard: {
              slug: "2-day-local-guided-valley-trek-with-night-homestay-in-sapa",
              title: "2-Day Local Guided Valley Trek with Night Homestay in Sapa",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 59.75",
              duration: "2 days",
              image: "https://images.asiabylocals.com/asiabylocals/tours/2-day-local-guided-valley-trek-with-night-homestay-in-sapa/img0/1600.webp",
            },
          },
          {
            title: "Weather and practical",
            icon: "cloud",
            content: "Sapa is cool year-round and cold, foggy and sometimes frosty from December to February; June to August is the rain, when trails are mud and Fansipan is invisible. March to May and September to November are the months, with the terraces gold in late September. Bring layers, a rain jacket and shoes with grip in every season. Leave main luggage at the Sapa hotel for the trek. Guided treks are booked a day or two ahead in high season; the [best time guide](/vietnam/sapa/best-time-to-visit-sapa) has the month-by-month.",
            tourCard: {
              slug: "3-day-sapa-trek-tour-with-homestay-and-fansipan",
              title: "3-Day Sapa Trek Tour with Homestay and Fansipan",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 310.67",
              duration: "3 days",
              image: "https://images.asiabylocals.com/asiabylocals/tours/3-day-sapa-trek-tour-with-homestay-and-fansipan/img0/1600.webp",
            },
          },
        ],
        faqs: [
          { q: "Is two days enough for Sapa?", a: "Yes for either the overnight valley trek with a homestay, or a town-based pair of days with the Fansipan cable car and the villages. Three days does both." },
          { q: "What is the classic Sapa two-day trek?", a: "Sapa to Y Linh Ho, Lao Chai and Ta Van on day one with a homestay night, then Giang Ta Chai or Su Pan on day two, 20 to 24 km in total with a Hmong guide." },
          { q: "Should I take the Fansipan cable car?", a: "In clear weather, yes: 15 minutes to the roof of Indochina. In fog you see nothing, so do it on the clearest morning and keep the villages for the cloudy day." },
          { q: "How do I get from Hanoi to Sapa for a two-day trip?", a: "Overnight train to Lao Cai plus a one-hour shuttle, arriving early morning, or the six-hour limousine bus; return the same way on the evening of day two." },
        ],
      };

    default:
      return null;
  }
}

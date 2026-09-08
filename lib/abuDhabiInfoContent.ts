// Abu Dhabi authority pages (2026-09). Same CityInfoData shape as cityInfoContent.ts.
// Reached via getAbuDhabiInfoContent() -> getCityInfoContent().
//
// Every tourCard slug is taken from the live tour list for this city.
import type { CityInfoData } from './cityInfoContent';

const IMG = 'https://res.cloudinary.com/dx2fxyaft/image/upload/v1788400000/asiabylocals/tours/abu-dhabi-grand-mosque-qasr-al-watan-and-etihad-towers-tour/img0.jpg';

export function getAbuDhabiInfoContent(slug: string): CityInfoData | null {
  switch (slug) {

    case "sheikh-zayed-grand-mosque-guide":
      return {
        title: "Sheikh Zayed Grand Mosque: Dress Code, Opening Hours and the Friday Closure",
        seoTitle: "Sheikh Zayed Grand Mosque Guide 2026",
        description: "Free to enter, strict on dress, and closed to visitors on Friday mornings — everything to get right before you go.",
        heroImage: IMG,
        fastFacts: [
          { icon: "ticket", label: "Entry", value: "Free for everyone" },
          { icon: "shirt", label: "Dress code", value: "Shoulders and knees covered; nothing tight or sheer" },
          { icon: "shirt", label: "Abaya", value: "Provided free at the entrance for women" },
          { icon: "calendar-days", label: "Friday", value: "Closed to visitors in the morning" },
          { icon: "clock", label: "Allow", value: "90 minutes to two hours" },
        ],
        sections: [
          {
            title: "Sheikh Zayed Grand Mosque: Dress Code, Opening Hours and the Friday Closure",
            icon: "landmark",
            content: "The mosque holds forty thousand people and is the reason most visitors come to Abu Dhabi at all. It is also free, which surprises people who assume the most photographed building in the UAE must have a ticket.\n\nWhat you are paying for on a tour is transport, a guide who can explain what you are looking at, and the timing being handled — not access.\n\nThe scale reads differently in person. The main prayer hall holds the largest hand-knotted carpet in the world, made in Iran and laid in one piece. The courtyard's floral marble inlay runs across an area most visitors walk over without looking down, and it is arguably better than the domes above it. The reflecting pools along the flanks are the shot everybody takes, and they work best in the last hour before sunset.\n\nAllow ninety minutes minimum. People routinely plan forty and stay two hours.",
            tourCard: {
              slug: "abu-dhabi-grand-mosque-qasr-al-watan-and-etihad-towers-tour",
              title: "Abu Dhabi Grand Mosque, Qasr Al Watan and Etihad Towers Tour",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 85",
              duration: "6 hours",
              image: IMG,
            },
          },
          {
            title: "The dress code, which is enforced",
            icon: "shirt",
            content: "This catches out more visitors than anything else, and it applies to everyone, men included.\n\nShoulders and knees must be covered. Clothing must not be tight or transparent. That rules out shorts, sleeveless tops, leggings as trousers, and anything sheer. Men in three-quarter length shorts are turned away regularly.\n\nWomen must cover their hair. An abaya with a hood is provided free at the entrance and returned afterwards — there is no need to buy or bring one, though a light scarf of your own is more comfortable in summer.\n\nShoes come off before entering the prayer halls, and the marble outside can be extremely hot by midday. Socks are worth having.\n\nThe staff at the entrance are polite about it and will send you to the abaya counter rather than turning you away, but a group with two people in shorts loses twenty minutes sorting it out.",
          },
          {
            title: "When to go, and the Friday problem",
            icon: "calendar-days",
            content: "⚠️ The mosque does not admit visitors on Friday mornings. Friday is the congregational prayer day and the building belongs to worshippers until the early afternoon. Every year a large number of visitors arrive on a Friday morning and are turned away.\n\nIf your Abu Dhabi day falls on a Friday, plan the mosque for the afternoon and something else for the morning — Qasr Al Watan and the Louvre both open normally.\n\nOtherwise the best hours are early morning, when it is cool and empty and the light is soft, or the last ninety minutes before sunset, when the white marble goes gold and then the exterior lighting comes on. That lighting system shifts with the phases of the moon, which is a detail worth knowing while you are looking at it.\n\nRamadan changes the hours substantially and the mosque is at its most atmospheric during it — check the dates for your travel year.",
          },
        ],
      };

    case "louvre-abu-dhabi-guide":
      return {
        title: "Louvre Abu Dhabi: The Dome, the Monday Closure, and How Long You Need",
        seoTitle: "Louvre Abu Dhabi Guide 2026",
        description: "Why the building is the exhibit, how the collection is hung, and the closure day that catches out most visitors to Saadiyat Island.",
        heroImage: IMG,
        fastFacts: [
          { icon: "calendar-days", label: "Closed", value: "Mondays — the single most common mistake" },
          { icon: "landmark", label: "The dome", value: "7,850 metal stars in eight layers" },
          { icon: "clock", label: "Allow", value: "Two to three hours" },
          { icon: "sun", label: "Best light", value: "Middle of a bright day, for the rain of light" },
          { icon: "map", label: "Where", value: "Saadiyat Island, ~20 minutes from the city centre" },
        ],
        sections: [
          {
            title: "Louvre Abu Dhabi: The Dome, the Monday Closure, and How Long You Need",
            icon: "landmark",
            content: "Jean Nouvel's dome is why most people come and it earns that. Nearly eight thousand metal stars in eight overlapping layers, floating on supports you cannot see from underneath, dropping a shifting pattern the architects called the rain of light onto the plazas below.\n\nIt changes hour by hour, and it is at its most dramatic in the middle of a bright day rather than late afternoon — which inverts the usual advice about visiting museums at the quiet end of the day.\n\nSpend some of your visit outside on the plazas rather than all of it in the galleries. The dome is the exhibit as much as anything hanging beneath it, and a surprising number of visitors go straight in, see the collection, and leave without standing under it properly.\n\n⚠️ **The museum is closed on Mondays.** This catches out more visitors to Saadiyat Island than anything else, particularly people on a fixed-date cruise call.",
            tourCard: {
              slug: "louvre-abu-dhabi-general-admission-ticket",
              title: "Louvre Abu Dhabi General Admission Ticket",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 16",
              duration: "2-3 hours",
              image: IMG,
            },
          },
          {
            title: "How the collection is hung, and why it matters",
            icon: "sparkles",
            content: "This is not a satellite of the Paris Louvre showing borrowed highlights. It is arranged on a genuinely different principle, and if you do not know that, you will walk through it as though it were a normal museum and miss the point.\n\nThe galleries run chronologically across civilisations rather than being divided by country or culture. A Chinese bronze, a Greek one and a Mesopotamian one from the same century share a room, so what you see is what humanity was doing simultaneously in different places. It is an argument about shared history, made in objects.\n\nThat argument only lands if somebody makes it, which is why the express guided tour is worth the small extra — forty-five minutes with a museum educator covering the highlights, on headsets so it works in a full gallery.\n\n⚠️ Note that the guided tour does **not** include your entry ticket. Both must be booked; arriving with only the tour will not get you through the door.",
            tourCard: {
              slug: "louvre-abu-dhabi-express-guided-tour",
              title: "Louvre Abu Dhabi Express Guided Tour",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 18",
              duration: "45 minutes",
              image: IMG,
            },
          },
          {
            title: "The view most visitors never get",
            icon: "waves",
            content: "The museum sits over water on purpose and its outdoor installations run down to the sea, which means there is a whole side of the building designed to be seen from the water and almost nobody sees it.\n\nGuided kayak tours circle the dome at eye level, close enough to see how the lattice is assembled, while the visitors inside look out at you. An hour, on flat sheltered water, with no experience needed. There is also a small electric catamaran you drive yourself, which is near-silent — and silence matters here, because the sound under that dome is part of the design and an outboard engine destroys it.\n\nDo the water first and the galleries after, not the other way round.\n\nBoth are best at either end of the day between June and September; an hour on open water at an Abu Dhabi midday is harder work than it sounds and there is no shade out there.",
            tourCard: {
              slug: "abu-dhabi-guided-kayak-tour-around-the-louvre",
              title: "Abu Dhabi Guided Kayak Tour around the Louvre",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 45",
              duration: "1 hour",
              image: IMG,
            },
          },
        ],
      };

    case "qasr-al-watan-guide":
      return {
        title: "Qasr Al Watan: Visiting a Working Presidential Palace",
        seoTitle: "Qasr Al Watan Abu Dhabi Guide",
        description: "What is on the public route, the evening light show, and the short-notice closures that no amount of planning can predict.",
        heroImage: IMG,
        fastFacts: [
          { icon: "landmark", label: "What it is", value: "A working presidential palace, not a former one" },
          { icon: "landmark", label: "Great Hall dome", value: "37 metres across" },
          { icon: "clock", label: "Allow", value: "Two hours, more with the evening show" },
          { icon: "shirt", label: "Dress", value: "Modest — standards close to the mosque" },
          { icon: "triangle-alert", label: "Closures", value: "At short notice for state functions" },
        ],
        sections: [
          {
            title: "Qasr Al Watan: Visiting a Working Presidential Palace",
            icon: "landmark",
            content: "Most palaces open to the public are former palaces. This one is not. Qasr Al Watan is where the UAE's government receives heads of state and where the Federal Supreme Council meets, and it opens the rest of itself to visitors around that.\n\nThat distinction is the reason to come, and it is also the reason for the one frustration attached to the place: it closes at short notice when it is needed, and those closures are not published far in advance.\n\nThe public route is generous. The Great Hall sits under a dome thirty-seven metres across, entirely white and gold, and is considerably larger in person than photographs suggest. The House of Knowledge holds manuscripts including early Arabic works on astronomy and mathematics. The Presidential Banquet hall and the Spirit of Collaboration room are both on the route, along with the collection of gifts given by visiting states.\n\nYour ticket covers all of it, plus the gardens and the visitor centre.",
            tourCard: {
              slug: "qasr-al-watan-palace-and-garden-entry-ticket-abu-dhabi",
              title: "Qasr Al Watan Palace and Garden Entry Ticket, Abu Dhabi",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 21",
              duration: "2 hours",
              image: IMG,
            },
          },
          {
            title: "Timing it, and the evening show",
            icon: "clock",
            content: "The palace is floodlit after dark and there is a projection show on the façade in the evening — the building itself becomes the screen. If you can arrange your day so the palace comes last, that is the version to see.\n\nThe practical order for a full Abu Dhabi day is the mosque in the morning while it is cool, the Louvre or lunch in the middle, and Qasr Al Watan in the late afternoon running into the show.\n\nDress modestly. The standards here are close to those at the Grand Mosque, though the abaya requirement does not apply.\n\n⚠️ Before booking anything built around this palace, confirm it is open on your date. A tour that includes it can usually be reshaped if it closes, but if the palace is the whole reason for the trip, it is worth checking rather than hoping. Tell us your date and we will check with the operator before you pay.",
          },
          {
            title: "Combining it with the mosque",
            icon: "map",
            content: "The Grand Mosque and Qasr Al Watan are the two buildings that between them explain how Abu Dhabi sees itself, and they sit close enough to do in a single half day.\n\nDoing it privately rather than on a coach makes a real difference at the mosque, which rewards being lingered in and where coach schedules rarely allow it. A private transfer with entry tickets to both included costs less than most people expect, particularly split between three or four.\n\nIf you are arriving by cruise ship at Zayed Port or have a long layover at the airport, there are tours built specifically around those pickups with the timing arranged to your ship or flight rather than a fixed departure. That is the version to take when you have one shot and no margin for error.",
            tourCard: {
              slug: "abu-dhabi-grand-mosque-and-qasr-al-watan-private-transfer-tour",
              title: "Abu Dhabi Grand Mosque and Qasr Al Watan Private Tour",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 85",
              duration: "Half day",
              image: IMG,
            },
          },
        ],
      };

    case "yas-island-parks-guide":
      return {
        title: "Yas Island Theme Parks: Which Ones, Which Order, and the Summer Rule",
        seoTitle: "Yas Island Parks Guide: Ferrari World, SeaWorld, Warner Bros",
        description: "Four parks within walking distance, why the multi-park pass costs less, and which are indoors when it matters.",
        heroImage: IMG,
        fastFacts: [
          { icon: "ticket", label: "The four", value: "Ferrari World, SeaWorld, Warner Bros. World, Yas Waterworld" },
          { icon: "wind", label: "Fully indoors", value: "Ferrari World, SeaWorld, Warner Bros. World" },
          { icon: "sun", label: "Outdoors", value: "Yas Waterworld — brutal June to September" },
          { icon: "wallet", label: "Multi-park pass", value: "Cheaper than separate tickets, valid several days" },
          { icon: "car", label: "Parking", value: "Free, with a shuttle between parks" },
        ],
        sections: [
          {
            title: "Yas Island Theme Parks: Which Ones, Which Order, and the Summer Rule",
            icon: "ticket",
            content: "Four major parks sit within walking distance of each other on Yas Island, which is unusual anywhere in the world, and buying them separately costs considerably more than a combined pass.\n\nFerrari World holds Formula Rossa, which reaches around 240 km/h in under five seconds and is the fastest rollercoaster on earth — fast enough that riders are issued protective goggles, because at that speed an insect does damage. It also has Flying Aces, the steepest non-inverted coaster drop anywhere.\n\nSeaWorld Abu Dhabi is the largest indoor marine-life park in the world, built around a research and rescue centre with eight realms and a huge multi-level aquarium at the centre.\n\nWarner Bros. World is six themed lands and twenty-nine rides, all under one roof.\n\nYas Waterworld is Emirati-themed and outdoors, which is the single most important fact about it.",
            tourCard: {
              slug: "yas-island-multi-park-pass-abu-dhabi-two-three-or-four-parks",
              title: "Yas Island Multi-Park Pass: Two, Three or Four Parks in Abu Dhabi",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 137",
              duration: "Valid several days",
              image: IMG,
            },
          },
          {
            title: "The summer rule, which locals follow and visitors ignore",
            icon: "sun",
            content: "Between June and September, three of these four parks are entirely indoors and air-conditioned, including every queue, and one is not.\n\nThat is not a small distinction. An Abu Dhabi July afternoon at an outdoor waterpark is an endurance event by eleven in the morning, and residents simply do not do it — they take their children to Warner Bros. World, which never sees the sun, or to SeaWorld.\n\nIn winter the position reverses and Yas Waterworld becomes the one to prioritise, because it is the only one whose appeal depends on the weather.\n\nSo the order for a summer trip is Warner Bros. World and SeaWorld, with Ferrari World for the coaster people. For a December trip, put the waterpark first while it is pleasant and keep the indoor parks for whichever day is dusty or windy.",
            tourCard: {
              slug: "warner-bros-world-abu-dhabi-entry-ticket",
              title: "Warner Bros. World Abu Dhabi Entry Ticket",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 109",
              duration: "Full day",
              image: IMG,
            },
          },
          {
            title: "The circuit, and what else is on the island",
            icon: "car",
            content: "Yas Marina Circuit hosts the Abu Dhabi Grand Prix and, outside race weekends, lets the public onto it — which very few Formula 1 circuits do.\n\nThere are three levels of that. Driving a single-seat Formula Yas 3000 yourself is the serious version and the expensive one. A Caterham Seven is the affordable way to actually drive the track: light, low, with nothing between you and the road, three laps, and far more fun at legal speeds than a supercar would be. And the drift taxi puts you in the passenger seat beside a professional while he takes two laps largely sideways, which needs no licence at all.\n\nAll three require a booking rather than a walk-up, and the driving options need a physical driving licence.\n\nteamLab Phenomena on Saadiyat is worth pairing with a Yas day if you have an evening spare — different island, twenty minutes away, and a completely different kind of attraction.",
            tourCard: {
              slug: "ferrari-world-abu-dhabi-entry-ticket",
              title: "Ferrari World Abu Dhabi Entry Ticket",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 109",
              duration: "Full day",
              image: IMG,
            },
          },
        ],
      };

    case "abu-dhabi-day-trip-from-dubai":
      return {
        title: "Abu Dhabi Day Trip from Dubai: What Fits in One Day, and What Does Not",
        seoTitle: "Abu Dhabi Day Trip from Dubai Guide",
        description: "Ninety minutes each way, three things that fit comfortably, and the two closures that can ruin the plan.",
        heroImage: IMG,
        fastFacts: [
          { icon: "car", label: "Distance", value: "About 90 minutes each way from Dubai" },
          { icon: "clock", label: "Realistic", value: "Three major sites, not five" },
          { icon: "calendar-days", label: "Avoid", value: "Friday mornings — the mosque is closed" },
          { icon: "calendar-days", label: "Avoid", value: "Mondays if the Louvre is on your list" },
          { icon: "shirt", label: "Bring", value: "Clothing that covers shoulders and knees" },
        ],
        sections: [
          {
            title: "Abu Dhabi Day Trip from Dubai: What Fits in One Day, and What Does Not",
            icon: "car",
            content: "Abu Dhabi is about ninety minutes down the coast from Dubai, and a day trip works well — provided the plan is honest about the arithmetic.\n\nThree hours of the day are spent in the car. That leaves roughly seven for the city, and inside those seven hours three major sites fit comfortably, four is tight, and five is a list rather than a day.\n\nThe combinations that work:\n\nThe classic — Sheikh Zayed Grand Mosque, Qasr Al Watan, and the Corniche with the Etihad Towers observation deck. This is the one to take if it is your only visit.\n\nThe cultural — the Grand Mosque and Louvre Abu Dhabi, with two hours at each rather than the twenty-minute stops a general city tour gives them. Better if you actually want to look at things.\n\nThe family — Yas Island for one of the theme parks, which is a full day on its own and does not combine with the mosque.\n\nPick one. Trying to blend them is how people end up seeing four car parks.",
            tourCard: {
              slug: "abu-dhabi-full-day-tour-from-dubai-with-grand-mosque-and-corniche",
              title: "Abu Dhabi Full-Day Tour from Dubai with the Grand Mosque and Corniche",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 51",
              duration: "Full day",
              image: IMG,
            },
          },
          {
            title: "The two closures that ruin the plan",
            icon: "calendar-days",
            content: "⚠️ The Sheikh Zayed Grand Mosque does not admit visitors on Friday mornings. If your only free day is a Friday, the mosque has to be the afternoon and something else takes the morning.\n\n⚠️ Louvre Abu Dhabi is closed on Mondays. Every Monday, all day.\n\nBetween them these two catch out an extraordinary number of day trippers, because a day trip has no second chance — you are not staying in the city and cannot come back tomorrow.\n\nQasr Al Watan adds a third, less predictable risk: it closes at short notice for state functions, and that is not published in advance.\n\nWhen you book with us we check all three against your actual date with the operator before you pay. That sounds like a small thing and it is the single most useful part of booking a day trip rather than driving yourself.",
          },
          {
            title: "Doing it the other way round",
            icon: "map",
            content: "One thing worth saying plainly: if Abu Dhabi is genuinely the reason for your trip, stay in Abu Dhabi rather than day-tripping to it.\n\nThree hours of driving buys you a lot when it is spent in the city instead — the mosque at sunrise, the Louvre in the quiet hour before closing, the palace lit up in the evening. Those are the versions worth having and a day trip from Dubai reaches none of them.\n\nFor anyone already in Abu Dhabi, or arriving by cruise at Zayed Port, or stuck with a long layover at the airport, there are half-day tours built around those pickups with timing arranged to your ship or flight rather than a fixed departure.\n\nAnd if you are travelling in the other direction — based in Abu Dhabi and wanting Dubai for a day — the same arithmetic applies in reverse: pick one half of Dubai, not both.",
            tourCard: {
              slug: "abu-dhabi-half-day-tour-with-airport-or-cruise-port-pickup",
              title: "Abu Dhabi Half-Day Tour with Airport or Cruise Port Pickup",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 118",
              duration: "5 hours",
              image: IMG,
            },
          },
        ],
      };

    case "best-time-to-visit-abu-dhabi":
      return {
        title: "Best Time to Visit Abu Dhabi: Weather, Prices and the Grand Prix Weekend",
        seoTitle: "Best Time to Visit Abu Dhabi 2026",
        description: "The season that works, the months that do not, and the one weekend a year when the city doubles its prices.",
        heroImage: IMG,
        fastFacts: [
          { icon: "sun", label: "Best months", value: "November to March" },
          { icon: "thermometer", label: "Summer", value: "June-September, 40-48C with high humidity" },
          { icon: "calendar-days", label: "Grand Prix", value: "Usually late November or early December" },
          { icon: "wallet", label: "Cheapest", value: "July and August" },
          { icon: "moon", label: "Ramadan", value: "Moves ~11 days earlier each year" },
        ],
        sections: [
          {
            title: "Best Time to Visit Abu Dhabi: Weather, Prices and the Grand Prix Weekend",
            icon: "sun",
            content: "November to March, and the reasoning is the same as Dubai's with one local difference: Abu Dhabi sits further out into the Gulf and is noticeably more humid, which makes the shoulder months harder here than they are ninety minutes up the coast.\n\nDecember to February is the peak — daytime around 24 to 28C, evenings cool enough for a layer, and everything outdoors genuinely pleasant. November and March are warm but manageable.\n\nApril and October are the honest shoulders: fine in the morning, uncomfortable after two in the afternoon.\n\nJune to September is severe. Temperatures reach the high forties and the humidity off the water makes the felt temperature worse. The city is entirely built for it — the malls, the museums and three of the four Yas Island parks are indoors and connected — but a plan built around the Corniche, kayaking or a waterpark will not survive the middle of the day.\n\nIf you must travel in summer, front-load everything outdoors before nine in the morning.",
          },
          {
            title: "The Formula 1 weekend",
            icon: "car",
            content: "The Abu Dhabi Grand Prix is usually the season finale, in late November or early December, and it is the one weekend a year when the city's hotel market changes shape completely.\n\nRates double or worse. Availability disappears months ahead, and the effect spills into Dubai, which fills with people commuting down for the race. Restaurant tables, taxis and tours all tighten.\n\nIf you are going for the race, none of that is a problem and the city at that moment is the best it gets — the circuit runs into the evening under lights and the whole island is a festival.\n\nIf you are not, check the date before you book and move a week either side. The same trip costs half as much and the city is quieter.\n\nThe circuit itself is open to the public outside race weekends, which is when to go if driving it rather than watching it is the appeal.",
          },
          {
            title: "Ramadan, and what it changes here",
            icon: "moon",
            content: "Ramadan shifts about eleven days earlier each year, so check the dates for your travel year rather than assuming.\n\nEating, drinking and smoking in public during daylight is restricted, live music pauses, and attraction hours shift — often opening later and running much later into the night. Hotels continue to serve guests throughout the day, usually in a screened area, and visitors are not expected to fast.\n\nThe Grand Mosque during Ramadan is the most atmospheric it ever is, and iftar — the meal breaking the fast at sunset — is the most sociable hour of the Emirati year. Hotel iftar buffets are genuinely one of the better things to do in the country.\n\nRates are lower than the equivalent week outside Ramadan.\n\nIt is not a reason to cancel a trip. It is a reason to shift your day later — which, in a city this hot, most visitors end up doing anyway.",
          },
        ],
      };

    case "abu-dhabi-desert-safari-guide":
      return {
        title: "Abu Dhabi Desert Safari: Emptier Dunes, and How It Differs from Dubai's",
        seoTitle: "Abu Dhabi Desert Safari Guide",
        description: "Higher dunes, fewer vehicles, working camel farms — what the Abu Dhabi version does differently and who should skip the dune bashing.",
        heroImage: IMG,
        fastFacts: [
          { icon: "car", label: "Dunes", value: "Higher and considerably emptier than Dubai's" },
          { icon: "clock", label: "Half day", value: "About 4 hours, morning or evening" },
          { icon: "clock", label: "Evening", value: "About 6-7 hours with camp dinner" },
          { icon: "shirt", label: "Bring", value: "A jacket — cold after dark, November to February" },
          { icon: "triangle-alert", label: "Not for", value: "Pregnancy, back or neck problems, motion sickness" },
        ],
        sections: [
          {
            title: "Abu Dhabi Desert Safari: Emptier Dunes, and How It Differs from Dubai's",
            icon: "sun",
            content: "The desert outside Abu Dhabi is a different landscape from the one outside Dubai, and the safari reflects it.\n\nThe dunes here run higher and the camps sit further from the city, which means far fewer vehicles on the same sand. A Dubai evening safari in season can put several hundred 4x4s across one dune field; the Abu Dhabi equivalent is a fraction of that.\n\nThe other difference is what gets included. Abu Dhabi safaris more often visit a working camel farm rather than offering a roadside camel ride — a farm where the animals are actually kept and worked, which is a rarer and more interesting thing to see than three minutes on a saddle.\n\nWhat is the same: the tyres come down at the dune line, there is half an hour of dune driving, then sandboarding, then sunset, then a camp with dinner and shows for the evening version.",
            tourCard: {
              slug: "abu-dhabi-desert-safari-with-camel-farm-and-bedouin-camp-dinner",
              title: "Abu Dhabi Desert Safari with Camel Farm and Bedouin Camp Dinner",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 91",
              duration: "6 hours",
              image: IMG,
            },
          },
          {
            title: "Morning or evening, and which suits what",
            icon: "clock",
            content: "The morning safari is cooler, quieter and better for photographs. The sand is ridged and untouched, the light is low, and there are almost no other vehicles. It suits photographers, families with small children, and anyone who wants the desert rather than the party.\n\nThe evening safari gives you the sunset over the dunes and the camp afterwards — barbecue dinner, tanoura and fire shows, shisha, and a genuinely dark sky. It is the more sociable version and the one most people book.\n\nA four-hour half-day covers the driving, sandboarding and the camel farm without the camp evening. Six to seven hours adds the camp and dinner.\n\nQuad biking is almost always an optional extra rather than part of the headline price. Decide at the option stage, because it is the single most common reason a cheap safari turns out to cost more than expected.",
            tourCard: {
              slug: "abu-dhabi-dune-bashing-safari-with-camel-farm-visit",
              title: "Abu Dhabi Dune Bashing Safari with a Camel Farm Visit",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 84",
              duration: "4 hours",
              image: IMG,
            },
          },
          {
            title: "Who should not do it",
            icon: "shield",
            content: "Dune bashing is deliberately rough. The driver takes the vehicle up dune faces and across them at an angle, and the lateral movement is real rather than theatrical.\n\nIf anyone in your group is pregnant, has back or neck problems, or is prone to motion sickness, tell us when booking. Every operator will run a gentler line on request and nobody is obliged to do the hard version — but it needs saying in advance rather than halfway up a dune.\n\nVery young children are generally better on a morning safari without the dune driving, or not at all.\n\nTwo other practical notes. Between November and February the desert gets genuinely cold after dark and the camps are open-sided; a jacket makes the difference between enjoying the last two hours and enduring them. And alcohol is usually neither included nor available at the camps, which surprises people expecting a bar.",
          },
        ],
      };

    case "abu-dhabi-city-guide":
      return {
        title: "Abu Dhabi City Guide: What the Capital Is Actually For",
        seoTitle: "Abu Dhabi City Guide 2026",
        description: "How the emirate differs from Dubai, what is worth your time across the islands, and how long you really need.",
        heroImage: IMG,
        fastFacts: [
          { icon: "map", label: "Layout", value: "Spread across islands — Yas, Saadiyat, the city, Reem" },
          { icon: "clock", label: "Minimum", value: "Two days to do it properly" },
          { icon: "landmark", label: "Don't miss", value: "Grand Mosque, Qasr Al Watan, Louvre" },
          { icon: "car", label: "Getting about", value: "Taxis are cheap; no metro" },
        ],
        sections: [
          {
            title: "Abu Dhabi City Guide: What the Capital Is Actually For",
            icon: "landmark",
            content: "Abu Dhabi is the capital, holds most of the country's oil, and has spent the last two decades building the cultural infrastructure that Dubai did not — the Louvre, the Guggenheim under construction, teamLab, a national museum. Where Dubai built commerce and spectacle, Abu Dhabi built institutions.\n\nThe practical result is a city that rewards a slower visit. It is quieter, greener and more spread out, and its best things are buildings you walk around rather than experiences you queue for.\n\nIt is also spread across islands, which catches out visitors who assume everything is central. Yas Island holds the theme parks and the circuit. Saadiyat holds the museums and the best beaches. Reem is residential with parkland and kayaking. The city proper holds the Corniche, the Grand Mosque and Qasr Al Watan.\n\nTwo days is the honest minimum. One day, done from Dubai, sees three things well and that is all.",
            tourCard: {
              slug: "abu-dhabi-half-day-city-tour-with-grand-mosque-and-heritage-village",
              title: "Abu Dhabi Half-Day City Tour with the Grand Mosque and Heritage Village",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 62",
              duration: "5 hours",
              image: IMG,
            },
          },
          {
            title: "The Corniche, the Heritage Village and the old city",
            icon: "waves",
            content: "The Corniche runs eight kilometres along the waterfront with a cycle path, public beaches and the skyline behind it. It is where the city actually goes in the evening, and in winter it is genuinely pleasant to walk.\n\nThe Heritage Village on the breakwater is the counterweight to all the glass: a reconstructed oasis settlement with a working souq, metalworkers and potters, and the clearest straight-on view of the Corniche skyline across the water. The dates market nearby is a local stop rather than a staged one, and dates here are taken as seriously as wine is elsewhere.\n\nQasr Al Hosn, the old fort, is the oldest stone building in the city and the point the whole settlement grew from.\n\nNone of these need a tour, but a guided half day strings them together with the mosque and saves the taxi arithmetic.",
          },
          {
            title: "The water, which is underused",
            icon: "ship",
            content: "Abu Dhabi has more accessible water than Dubai and far fewer people using it.\n\nReem Central Park's waterways run through the middle of the city and are almost silent once you are paddling — flat water, stable kayaks, no experience needed, and the towers visible above the planted banks. It is a genuinely good option for anyone who has done the mosque and the malls and wants something that is neither.\n\nThe mangroves are the other one. Abu Dhabi has extensive mangrove forest inside the city limits, which is unusual for a Gulf capital, and kayaking through the channels is quiet in a way nothing else here is.\n\nAnd around Saadiyat, the Louvre's dome from the water is the perspective the building was designed for.\n\nAll of these are best early or late between June and September. There is no shade on open water and an Abu Dhabi midday is not the time to find that out.",
            tourCard: {
              slug: "abu-dhabi-reem-central-park-guided-kayak-tour",
              title: "Abu Dhabi Reem Central Park Guided Kayak Tour",
              description: "Bookable directly through AsiaByLocals, with a verified local operator.",
              price: "From USD 55",
              duration: "2 hours",
              image: IMG,
            },
          },
        ],
      };

    default:
      return null;
  }
}

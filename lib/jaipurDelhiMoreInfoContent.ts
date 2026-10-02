// More Jaipur and Delhi authority pages (2026-10). Same CityInfoData shape as
// cityInfoContent.ts. Reached via getJaipurDelhiMoreInfoContent() -> getCityInfoContent().
//
// Chosen from Search Console demand with no page of its own, after filtering
// out false gaps: "tourist places in delhi" and its word-order variants are
// the SAME intent as the existing places-to-visit-in-delhi page, and "amer
// fort" is just the alternate transliteration of amber-fort — neither needed
// a new page. What was genuinely missing:
//   Jaipur — "jaipur local private day tour", 239 impressions at position 12,
//            nothing answering what a private vs. shared day actually buys.
//   Delhi  — "delhi tours" / "new delhi tours" / "delhi guided tour", 225
//            impressions combined at position 23-29, a generic commercial
//            query with no single page to catch it.
import type { CityInfoData } from './cityInfoContent';

const J_TUKTUK = {
  slug: 'jaipur-tuk-tuk-ride-or-cab',
  title: 'Jaipur Tuk Tuk Ride Or Cab',
  description: 'A top-rated Jaipur experience, bookable directly through AsiaByLocals.',
  price: 'From USD 32',
  duration: '8 hours',
  image: 'https://images.asiabylocals.com/asiabylocals/tours/jaipur-tuk-tuk-ride-or-cab/img0/1600.webp',
};

const J_MONKEY = {
  slug: 'jaipur-monkey-temple-sunset-and-night-city-tour-by',
  title: 'Jaipur: Monkey Temple Sunset and Night City Tour by Tuk-Tuk',
  description: 'A top-rated Jaipur experience, bookable directly through AsiaByLocals.',
  price: 'From USD 30',
  duration: '4 hours',
  image: 'https://images.asiabylocals.com/asiabylocals/tours/jaipur-monkey-temple-sunset-and-night-city-tour-by/img0/1600.webp',
};

const J_2DAY = {
  slug: 'jaipur-2-day-city-sightseeing-tour-with-cab-guide',
  title: 'Jaipur: 2-Day City Sightseeing Tour with Cab & Guide',
  description: 'A top-rated Jaipur experience, bookable directly through AsiaByLocals.',
  price: 'From USD 90',
  duration: '2 days',
  image: 'https://images.asiabylocals.com/asiabylocals/tours/jaipur-2-day-city-sightseeing-tour-with-cab-guide/img0/1600.webp',
};

const J_GALTA = {
  slug: 'from-jaipur-full-day-jaipur-sightseeing-with-galta',
  title: 'Jaipur: Full Day Jaipur Sightseeing with Galta G Temple',
  description: 'A top-rated Jaipur experience, bookable directly through AsiaByLocals.',
  price: 'From USD 25',
  duration: '7.2 hours',
  image: 'https://images.asiabylocals.com/asiabylocals/tours/from-jaipur-full-day-jaipur-sightseeing-with-galta/img0/1600.webp',
};

const DL_MARKET = {
  slug: 'from-spice-box-to-jewelry-box-old-delhi-market',
  title: 'From Spice Box to Jewelry Box: Old Delhi Market Adventure',
  description: 'A top-rated Delhi experience, bookable directly through AsiaByLocals.',
  price: 'From USD 32',
  duration: '4.5 hours',
  image: 'https://images.asiabylocals.com/asiabylocals/tours/from-spice-box-to-jewelry-box-old-delhi-market/img0/1600.webp',
};

const DL_EVENING = {
  slug: 'delhi-private-guided-evening-city-tour-with-hotel-',
  title: 'Delhi: Private Guided Evening City Tour with Hotel Transfer',
  description: 'A top-rated Delhi experience, bookable directly through AsiaByLocals.',
  price: 'From USD 24',
  duration: '3.9 hours',
  image: 'https://images.asiabylocals.com/asiabylocals/tours/delhi-private-guided-evening-city-tour-with-hotel-/img0/1600.webp',
};

export function getJaipurDelhiMoreInfoContent(slug: string): CityInfoData | null {
  switch (slug) {

    // ============================================================= JAIPUR
    case 'jaipur-local-private-day-tour':
      return {
        title: 'Jaipur Private Day Tours: What You Actually Get for the Money',
        seoTitle: 'Jaipur Local Private Day Tour',
        description:
          'Private car vs. shared group, tuk-tuk vs. air-conditioned sedan, one day vs. two: an honest comparison of Jaipur\'s private day tour options and what each is actually worth.',
        heroImage:
          'https://images.asiabylocals.com/asiabylocals/tours/jaipur-tuk-tuk-ride-or-cab/img0/1600.webp',
        fastFacts: [
          { icon: 'car', label: 'Typical private day', value: '7 to 8 hours, car and driver, $25-35 per person' },
          { icon: 'users', label: 'The real saving', value: 'Splits per person, so a group of 3-4 makes it cheap' },
          { icon: 'map-pin', label: 'Covers', value: 'Amber Fort, City Palace, Jantar Mantar, Hawa Mahal in one day' },
          { icon: 'clock', label: 'Pace', value: 'Set by you, not a bus timetable' },
        ],
        sections: [
          {
            title: 'Private Means the Car Is Yours, Not That It Costs More',
            icon: 'car',
            content:
              'The word "private" in Jaipur tour listings causes more confusion than it should. It does not mean luxury and it does not mean expensive. It means the vehicle, the driver and the pace belong to your party alone, for the day, rather than being shared with however many other travellers a group tour has filled its seats with.\n\nFor Jaipur specifically this matters more than in most cities, because the city\'s sights are spread out: [Amber Fort](/india/jaipur/amber-fort) sits 11 km north of the centre, the [City Palace](/india/jaipur/city-palace-jaipur) and [Jantar Mantar](/india/jaipur/jantar-mantar-jaipur) are in the old city, and [Hawa Mahal](/india/jaipur/hawa-mahal) and [Nahargarh Fort](/india/jaipur/nahargarh-fort) are each their own stop. A shared group vehicle moves at the schedule of its slowest member and its own fixed stops. A private car leaves when you are ready and skips what you are not interested in.\n\nA full private day with a car and driver typically runs $25 to $35 per person when split across three or four travellers, which is often close to what a shared seat alone would cost, with none of the waiting.',
            tourCard: J_TUKTUK,
          },
          {
            title: 'Tuk-Tuk, Sedan, or Full-Day Car: The Real Difference',
            icon: 'users',
            content:
              'Three vehicle types get offered for a private Jaipur day, and the choice is not about status.\n\nA **tuk-tuk** suits one or two people for a half day or an evening circuit, such as the [sunset tour to the Monkey Temple](/india/jaipur/jaipur-local-private-day-tour) area and the old city lanes. It cannot do the full Amber-to-City-Palace loop comfortably in the day\'s heat and it has no boot space for shopping.\n\nA **sedan or SUV with driver** is the standard choice for a full day: air-conditioned, room for luggage, and the only sensible option between April and September when Jaipur regularly sits above 38°C. This is what most "private day tour" listings actually mean.\n\nA **two-day private tour** adds slack rather than more driving. The second day usually goes to whatever the first day ran short on, or to Nahargarh at sunset and the markets properly rather than at a rush.',
            tourCard: J_MONKEY,
          },
          {
            title: 'What a Full Private Day Actually Covers',
            icon: 'map-pin',
            content:
              'A well-built 7 to 8 hour private day in Jaipur follows a route that a shared tour cannot always match stop for stop, because it has to serve a bus full of different interests. A typical private itinerary:\n\n**Morning** — Amber Fort first, before the heat and the coach parties, with time to actually walk the Sheesh Mahal rather than be swept through it.\n\n**Mid-morning** — Jal Mahal for photos on the way back into the city, five minutes, no ticket needed.\n\n**Midday** — City Palace and Jantar Mantar, which sit next to each other in the old city and are usually done together.\n\n**Afternoon** — Hawa Mahal from the street outside (the interior is a short visit) and the surrounding bazaar, where a private driver can simply wait rather than circle for parking.\n\n**Late afternoon or evening** — Nahargarh Fort for the sunset view over the city, which a fixed-schedule group tour often cannot fit in because it closes the day on someone else\'s timetable.\n\nAll of this is genuinely doable in one day with a private vehicle. It is a rush in a shared one.',
            tourCard: J_GALTA,
          },
          {
            title: 'Day Trip from Delhi, or Based in Jaipur',
            icon: 'clock',
            content:
              'If you are coming from Delhi for the day rather than staying in Jaipur, the private car changes the arithmetic again: the same vehicle does the 280 km drive each way and the sightseeing in between, which a train or bus trip cannot, since you would still need transport once you arrived. See [Delhi to Jaipur](/india/jaipur/delhi-to-jaipur) for how that comparison actually works out in hours.\n\nIf you are already based in Jaipur, the private day is simply the most efficient way to cover a spread-out city without losing hours to auto-rickshaw negotiations between every stop.\n\nEither way, book a few days ahead rather than the morning of. Good drivers and guides fill up fast in season, and a private booking made last minute is the one most likely to arrive with an unfamiliar substitute.',
          },
        ],
        faqs: [
          { q: 'Is a private day tour in Jaipur worth the extra cost over a group tour?', a: 'For most travellers, yes, and the cost gap is smaller than people expect. Split across three or four people it often runs close to a shared seat, and you get Amber Fort before the crowds, no waiting on slower group members, and the freedom to skip stops you are not interested in.' },
          { q: 'What is included in a typical private Jaipur day tour?', a: 'The vehicle, driver, fuel, tolls and parking are standard. A guide is usually a separate line item or a separate, pricier option. Monument entry tickets are almost always extra, since they are paid directly at each site.' },
          { q: 'Can one private car cover Amber Fort, City Palace and Hawa Mahal in a day?', a: 'Yes, comfortably, in 7 to 8 hours, because a private driver sets the route and the pace rather than following a fixed group schedule. Add Nahargarh Fort for sunset if you start early.' },
          { q: 'Should I book a tuk-tuk or a car for a full day in Jaipur?', a: 'A car for a full day, particularly April to September when the heat makes an open tuk-tuk genuinely uncomfortable for hours at a stretch. A tuk-tuk suits a shorter evening circuit of the old city rather than the full Amber-to-Nahargarh day.' },
        ],
      };

    // ============================================================== DELHI
    case 'delhi-tours':
      return {
        title: 'Delhi Tours: Guided, Private or Self-Guided — Which Actually Suits You',
        seoTitle: 'Delhi Tours',
        description:
          'Guided city tours, private cars, half-day versus full-day, Old Delhi versus New Delhi: an honest guide to choosing between Delhi\'s tour options before you book one.',
        heroImage:
          'https://images.asiabylocals.com/asiabylocals/tours/delhi-private-guided-evening-city-tour-with-hotel-/img0/1600.webp',
        fastFacts: [
          { icon: 'map-pin', label: 'The real split', value: 'Old Delhi (walking) and New Delhi (spread out) are different days' },
          { icon: 'users', label: 'Guided vs private', value: 'Guided adds commentary; private adds control over the route' },
          { icon: 'clock', label: 'Half vs full day', value: 'Half day covers one half of the city properly, not both' },
          { icon: 'calendar', label: 'Avoid', value: 'Mondays — several major sites close' },
        ],
        sections: [
          {
            title: 'Why "A Delhi Tour" Is the Wrong Unit to Book',
            icon: 'map-pin',
            content:
              'Searching for a generic "Delhi tour" usually turns up listings that quietly mean very different days: some are a half-day driving loop of the big photo stops, some are a walking tour of Old Delhi\'s lanes, some are a private full day with a car at your disposal.\n\nThe useful first decision is not which company to book but which **half of Delhi** you want, because trying to do both properly in one outing is how people end up with a rushed, exhausting day that remembers nothing clearly. [Old Delhi](/india/delhi/places-to-visit-in-delhi) is the 1639 Mughal city: Red Fort, Jama Masjid, Chandni Chowk, dense and best done on foot or by cycle-rickshaw. New Delhi is the 1911-31 British capital: India Gate, Humayun\'s Tomb, Qutub Minar, spread across wide avenues and best covered by car or Metro.\n\nA single good tour does one of these well. A tour claiming to do both in four hours is doing neither.',
            tourCard: DL_MARKET,
          },
          {
            title: 'Guided City Tour vs. Private Car: What You Are Actually Choosing',
            icon: 'users',
            content:
              'A **guided tour**, shared or private, puts a local guide with you who explains what you are looking at, which is where the real value of Delhi\'s history sits. Red Fort without context is an impressive wall; with a guide it is the room where the last Mughal emperor was tried by the British, and the gate where every Prime Minister since 1947 has addressed the country on Independence Day.\n\nA **private car without a guide** gives you a driver, flexibility over timing and stops, and no commentary. This suits travellers who already know what they want to see and simply need transport between sites that are too far apart to walk, which in Delhi is most of them.\n\nMany operators, ours included, offer both as separate line items on the same route, so the choice does not have to be all or nothing: a guide for the morning\'s monuments, then a private car alone for an afternoon of shopping or a specific neighbourhood.',
            tourCard: DL_EVENING,
          },
          {
            title: 'Half Day, Full Day, or Evening',
            icon: 'clock',
            content:
              'A **half day** (3 to 4 hours) genuinely covers one half of the city: either the Red Fort to Jama Masjid walk through Old Delhi, or India Gate to Humayun\'s Tomb through New Delhi, not both.\n\nA **full day** (6 to 8 hours) is the practical minimum for seeing both halves properly, and is what most "Delhi city tour" listings that promise comprehensive coverage are actually built around.\n\nAn **evening tour** is its own thing: markets, street food, and the monuments that are genuinely better after dark, India Gate chief among them, lit and with half the city out on the lawns. Old Delhi\'s food lanes also run later into the evening than the daytime sightseeing crowd realises.\n\nFor the deeper version of this, with a full hour-by-hour plan across two days, see the [2-day Delhi itinerary](/india/delhi/2-day-delhi-itinerary).',
          },
          {
            title: 'One Thing Worth Checking Before You Book',
            icon: 'calendar',
            content:
              'Several of Delhi\'s major sites close on **Mondays**: the Red Fort, the Lotus Temple and Akshardham among them. A tour booked for a Monday that includes any of these will either substitute a different stop or run short, and it is worth asking before you pay rather than finding out on the day.\n\nBeyond that, the single biggest factor in how a Delhi tour actually feels is not the company or the price, it is whether the itinerary respects the city\'s geography. A route that zigzags between Old and New Delhi to fit in everyone\'s favourite stop spends most of its hours in traffic rather than in front of anything worth seeing. Ask what order the stops run in before you book, not just which stops are included.',
          },
        ],
        faqs: [
          { q: 'What is the difference between a half-day and full-day Delhi tour?', a: 'A half day genuinely covers one half of the city, either Old Delhi or New Delhi, in 3 to 4 hours. A full day of 6 to 8 hours is the practical minimum for seeing both properly. A half-day tour claiming to cover both halves is rushing one of them.' },
          { q: 'Should I book a guided tour or just a private car in Delhi?', a: 'A guide adds the history and context that make Delhi\'s monuments mean something, particularly at the Red Fort and Humayun\'s Tomb. A private car without a guide suits travellers who already know what they want and just need transport across a spread-out city. Many tours, including ours, offer both as separate options on the same route.' },
          { q: 'Which days should I avoid for a Delhi tour?', a: 'Monday. The Red Fort, the Lotus Temple and Akshardham all close, which removes major stops from a single-day itinerary. Humayun\'s Tomb, Qutub Minar, Jama Masjid and India Gate stay open, so a Monday tour built around those still works.' },
          { q: 'Can one tour cover both Old Delhi and New Delhi properly?', a: 'Only across a full day of 6 to 8 hours. Old Delhi is dense and walkable; New Delhi is spread across wide avenues and needs a car or Metro between sites. A short tour that tries both ends up as transit time rather than sightseeing.' },
        ],
      };

    default:
      return null;
  }
}

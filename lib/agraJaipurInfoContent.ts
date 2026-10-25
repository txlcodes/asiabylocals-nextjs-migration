// Agra and Jaipur authority pages (2026-09). Same CityInfoData shape as
// cityInfoContent.ts. Reached via getAgraJaipurInfoContent() -> getCityInfoContent().
//
// Chosen from Search Console demand that had no page of its own, not from a
// list of things a city "should" have:
//   Agra   — "agra tour guide" at position 29.6, "agra local sightseeing" at
//            60.3, and no shopping guide at all while Delhi and Jaipur had one.
//   Jaipur — the Golden Triangle legs. delhi-to-agra existed; the other two
//            sides of the triangle did not, so anyone planning the loop fell
//            off the site halfway round.
import type { CityInfoData } from './cityInfoContent';

const A_GUIDE = {
  slug: 'book-govt-approved-tour-guide-for-taj-mahal-fort',
  title: 'Book a Government-Approved Guide for the Taj Mahal and Agra Fort',
  description: 'A top-rated Agra experience, bookable directly through AsiaByLocals.',
  price: 'From USD 18',
  duration: '3.8 hours',
  image: 'https://images.asiabylocals.com/asiabylocals/tours/book-govt-approved-tour-guide-for-taj-mahal-fort/img0/1600.webp',
};

const A_SUNSET = {
  slug: 'guided-sunset-tour-of-taj-mahal-with-skip-the',
  title: 'Guided Sunset Tour of the Taj Mahal with Skip-the-Line Entry',
  description: 'A top-rated Agra experience, bookable directly through AsiaByLocals.',
  price: 'From USD 18',
  duration: '3 hours',
  image: 'https://images.asiabylocals.com/asiabylocals/tours/guided-sunset-tour-of-taj-mahal-with-skip-the/img0/1600.webp',
};

const A_FULL = {
  slug: 'agra-taj-mahal-agra-fort-baby-taj-guided-day',
  title: 'Agra: Taj Mahal, Agra Fort and Baby Taj Guided Day Tour',
  description: 'A top-rated Agra experience, bookable directly through AsiaByLocals.',
  price: 'From USD 32',
  duration: '4.2 hours',
  image: 'https://images.asiabylocals.com/asiabylocals/tours/agra-taj-mahal-agra-fort-baby-taj-guided-day/img0/1600.webp',
};

const A_FORT = {
  slug: 'agra-fort-monument-visits-with-licensed-guide',
  title: 'Agra Fort: Monument Visit with a Licensed Guide',
  description: 'A top-rated Agra experience, bookable directly through AsiaByLocals.',
  price: 'From USD 21',
  duration: '2 hours',
  image: 'https://images.asiabylocals.com/asiabylocals/tours/agra-fort-monument-visits-with-licensed-guide/img0/1600.webp',
};

const J_CITY = {
  slug: 'jaipur-private-city-tour-with-a-women-driven-e',
  title: 'Jaipur: Private City Tour in a Women-Driven E-Rickshaw',
  description: 'A top-rated Jaipur experience, bookable directly through AsiaByLocals.',
  price: 'From USD 32',
  duration: '8 hours',
  image: 'https://images.asiabylocals.com/asiabylocals/tours/jaipur-private-city-tour-with-a-women-driven-e/img0/1600.webp',
};

const J_TUK = {
  slug: 'jaipur-tuk-tuk-ride-or-cab',
  title: 'Jaipur: Full-Day Sightseeing by Tuk-Tuk or Cab',
  description: 'A top-rated Jaipur experience, bookable directly through AsiaByLocals.',
  price: 'From USD 32',
  duration: '8 hours',
  image: 'https://images.asiabylocals.com/asiabylocals/tours/jaipur-tuk-tuk-ride-or-cab/img0/1600.webp',
};

const J_DELHI = {
  slug: 'from-delhi-jaipur-1-day-trip-by-ac-car',
  title: 'From Delhi: Jaipur Day Trip by Air-Conditioned Car',
  description: 'A top-rated Jaipur experience, bookable directly through AsiaByLocals.',
  price: 'From USD 100',
  duration: '12 hours',
  image: 'https://images.asiabylocals.com/asiabylocals/tours/from-delhi-jaipur-1-day-trip-by-ac-car/img0/1600.webp',
};

const J_FULL = {
  slug: 'from-jaipur-full-day-jaipur-sightseeing-with-galta',
  title: 'Jaipur: Full-Day Sightseeing including Galta Ji',
  description: 'A top-rated Jaipur experience, bookable directly through AsiaByLocals.',
  price: 'From USD 25',
  duration: '7.2 hours',
  image: 'https://images.asiabylocals.com/asiabylocals/tours/from-jaipur-full-day-jaipur-sightseeing-with-galta/img0/1600.webp',
};

const J_AMBER = {
  slug: 'jaipur-half-day-guided-tour-with-amber-fort-and',
  title: 'Jaipur: Half-Day Guided Tour with Amber Fort and Boat Ride',
  description: 'A top-rated Jaipur experience, bookable directly through AsiaByLocals.',
  price: 'From USD 31',
  duration: '5 hours',
  image: 'https://images.asiabylocals.com/asiabylocals/tours/jaipur-half-day-guided-tour-with-amber-fort-and/img0/1600.webp',
};

const J_SHOPPING = {
  slug: 'jaipur-tuk-tuk-shopping-tour-with-art-workshops',
  title: 'Jaipur: Tuk Tuk Shopping Tour with Art Workshops and Bazaar',
  description: 'A top-rated Jaipur experience, bookable directly through AsiaByLocals.',
  price: 'From USD 13',
  duration: '4 hours',
  image: 'https://images.asiabylocals.com/asiabylocals/tours/jaipur-tuk-tuk-shopping-tour-with-art-workshops/img0/1600.webp',
};

const J_PALACES = {
  slug: 'jaipur-full-day-tuk-tuk-tour-of-palaces-bazaars',
  title: 'Jaipur: Full-Day Tuk Tuk Tour of Palaces, Bazaars, and Temples',
  description: 'A top-rated Jaipur experience, bookable directly through AsiaByLocals.',
  price: 'From USD 24',
  duration: '8 hours',
  image: 'https://images.asiabylocals.com/asiabylocals/tours/jaipur-full-day-tuk-tuk-tour-of-palaces-bazaars/img0/1600.webp',
};

export function getAgraJaipurInfoContent(slug: string): CityInfoData | null {
  switch (slug) {

    // ================================================================ AGRA
    case 'agra-tour-guide':
      return {
        title: 'Hiring a Guide in Agra: Licences, Fees and the Touts at the Gate',
        seoTitle: 'Agra Tour Guide: How to Hire One',
        description:
          'What a government-approved Agra guide costs, how to check the licence, and why the man who approaches you outside the Taj Mahal gate is not one.',
        heroImage:
          'https://images.asiabylocals.com/asiabylocals/tours/book-govt-approved-tour-guide-for-taj-mahal-fort/img0/1600.webp',
        fastFacts: [
          { icon: 'badge', label: 'The licence', value: 'Ministry of Tourism approved, photo ID card, ask to see it' },
          { icon: 'wallet', label: 'Typical half day', value: 'About ₹1,500-2,500 for the Taj and the Fort' },
          { icon: 'alert', label: 'At the gate', value: 'Unlicensed touts; the fee is not the problem, the commission is' },
          { icon: 'clock', label: 'Worth it for', value: 'The Taj and Agra Fort; less so for Mehtab Bagh' },
        ],
        sections: [
          {
            title: 'Why a Guide Changes the Taj Mahal More Than Most Monuments',
            icon: 'landmark',
            content:
              'You can walk into the [Taj Mahal](/india/agra/taj-mahal) and be moved without anyone explaining anything. Most people are. But the building is doing a great deal that is invisible without someone to point at it.\n\nThe minarets lean very slightly outward, so that an earthquake would drop them away from the tomb rather than onto it. The calligraphy around the great arch is cut progressively larger as it rises, so that it reads at a constant size from the ground. The pietra dura inlay in a single flower can hold sixty separate pieces of stone. The whole platform is built on a grid of wells sunk into the riverbank, which is why it has not sunk in four hundred years.\n\nNone of this is written on a board. A guide is the difference between seeing a famous white building and understanding what was attempted.\n\nFor **[Agra Fort](/india/agra/agra-fort)** the case is stronger still, because the fort is a confusing complex of three centuries of additions, and without someone to sequence it you will walk past the room where Shah Jahan was imprisoned by his son and spent his last years looking at the Taj from a window.',
            tourCard: A_GUIDE,
          },
          {
            title: 'Licensed, Regional, and the Man at the Gate',
            icon: 'badge',
            content:
              'Three kinds of people will offer to guide you in Agra, and only one is what you want.\n\n**Ministry of Tourism approved guides** hold a national or regional licence, carry a photo identity card, and have passed examinations in history and languages. Ask to see the card. A real guide expects to be asked and will hand it over; the reaction to the question tells you most of what you need to know.\n\n**Monument-level guides** are registered with the Archaeological Survey for a specific site. Legitimate, narrower in scope, cheaper.\n\n**The men outside the gate** are neither. The fee they quote is often low, sometimes free, and that is the tell: they are paid by the marble workshop and the emporium they will take you to afterwards, out of the price you pay there. The tour is real, the commission is invisible, and it is usually several times what a licensed guide would have cost.\n\nThe simplest protection is to arrange the guide before you arrive, so that there is nothing to decide while three people are talking at you in the car park.',
          },
          {
            title: 'What It Should Cost, and What Is Not Included',
            icon: 'wallet',
            content:
              'A licensed guide for the Taj Mahal and Agra Fort together, roughly half a day, runs about **₹1,500 to ₹2,500** depending on language and season. A full day including Fatehpur Sikri is more. A guide in a less common language, Japanese or Spanish or Russian, costs more again because there are fewer of them.\n\n**Monument entry is separate and always has been.** The guide fee does not include your ₹1,100 Taj ticket or the ₹200 mausoleum supplement; see [Taj Mahal ticket price](/india/agra/taj-mahal-ticket-price-2026) for the current numbers. Anyone quoting one all-in figure should be asked to itemise it.\n\nWhen you book a guided tour through us the guide is licensed, the fee is stated, and there is no stop at a workshop unless you ask for one. That last point is worth more than it sounds: the unannounced shopping detour is the single most common complaint about Agra.',
            tourCard: A_FULL,
          },
          {
            title: 'When You Do Not Need One',
            icon: 'info',
            content:
              'Honestly: not everywhere.\n\n**Mehtab Bagh** is a garden across the river that you visit for one view. A guide adds little. See [Mehtab Bagh](/india/agra/mehtab-bagh) for when to go instead.\n\n**Sunrise at the Taj** is arguably better without one. The light changes fast, the crowd is thin, and most people would rather stand and look than listen. Take the guide at the Fort afterwards.\n\n**A second visit** to the same monument does not need a repeat of the same commentary.\n\nAn audio guide is available at the Taj and costs a fraction of a person. It is worse at answering questions and better at leaving you alone, which for some visitors is the right trade.',
            tourCard: A_SUNSET,
          },
        ],
        faqs: [
          { q: 'How much does a tour guide cost in Agra?', a: 'A licensed guide for the Taj Mahal and Agra Fort together, about half a day, is typically ₹1,500 to ₹2,500. Less common languages cost more. Monument entry tickets are always separate from the guide fee.' },
          { q: 'How do I know a guide is licensed?', a: 'Ask to see the Ministry of Tourism photo identity card. A licensed guide expects the question and will show it without hesitation. The men who approach you in the car park generally cannot, and are paid by the shops they take you to rather than by you.' },
          { q: 'Why do guides at the gate offer such low prices?', a: 'Because the tour is not where they earn. The fee is subsidised by commission from the marble workshop or emporium the tour ends at, which is added to whatever you buy there. It usually costs more in total than a licensed guide would have.' },
          { q: 'Do I need a guide for sunrise at the Taj Mahal?', a: 'Not really. The light changes quickly and the crowd is thin, and most people would rather stand and look than listen. Take a guide for Agra Fort afterwards, where the complex is genuinely confusing without one.' },
        ],
      };

    // ------------------------------------------------------------------
    case 'mehtab-bagh':
      return {
        title: 'Mehtab Bagh: The Taj Mahal from the Other Bank',
        seoTitle: 'Mehtab Bagh, Agra',
        description:
          'The garden across the Yamuna where the Taj Mahal is photographed at sunset. Entry, timings, the walk, and the days when there is no river to reflect anything.',
        heroImage:
          'https://images.asiabylocals.com/asiabylocals/tours/guided-sunset-tour-of-taj-mahal-with-skip-the/img0/1600.webp',
        fastFacts: [
          { icon: 'sun', label: 'Go for', value: 'Sunset; the Taj faces you and the light is behind you' },
          { icon: 'wallet', label: 'Entry', value: 'Modest ASI ticket, far below the Taj itself' },
          { icon: 'alert', label: 'The catch', value: 'The Yamuna is often nearly dry; no reflection most of the year' },
          { icon: 'clock', label: 'Time needed', value: 'An hour, arriving 45 minutes before sunset' },
        ],
        sections: [
          {
            title: 'What It Is, and Why It Is Directly Opposite',
            icon: 'landmark',
            content:
              'Mehtab Bagh is a Mughal garden on the north bank of the Yamuna, laid out in the early 1500s and perfectly aligned with the [Taj Mahal](/india/agra/taj-mahal) on the opposite side. That alignment is not a coincidence and it predates the Taj: the garden was already there, and Shah Jahan built his tomb to face it.\n\nThere is a long-running story that he intended a second Taj here in black marble, a mirror of the white one, joined by a bridge. There is no evidence for it and most historians treat it as legend, but it is told to every visitor, so you may as well hear it from someone who says so.\n\nWhat the garden actually gives you is the one view of the Taj that includes the river, the whole building uninterrupted, and no crowd standing in it.',
          },
          {
            title: 'Sunset, and the River That Is Usually Not There',
            icon: 'sun',
            content:
              'Go for sunset. From Mehtab Bagh the Taj faces you and the sun goes down behind your shoulder, so the marble takes the colour rather than being flattened by backlight. Arrive about forty-five minutes before, which gives you time to walk to the riverbank and settle.\n\nNow the honest part, because almost nobody mentions it. **The Yamuna at Agra is often reduced to a narrow channel or a series of pools**, and for much of the year there is no broad sheet of water to reflect anything. The photograph of the Taj mirrored in the river is a monsoon and post-monsoon photograph, roughly **July to October**, and outside those months you will more likely be looking across sand.\n\nThe view is still the best unobstructed view of the building anywhere. Just go knowing which photograph is available in your month, rather than discovering it at the fence.',
            tourCard: A_SUNSET,
          },
          {
            title: 'Getting There, and Combining It',
            icon: 'map-pin',
            content:
              'Mehtab Bagh is about **a kilometre from the Taj as the crow flies and around 10 to 12 km by road**, because you have to cross the river upstream. Allow half an hour each way in traffic, more at the end of the day.\n\nThe usual shape is Taj at sunrise, [Agra Fort](/india/agra/agra-fort) and the [Baby Taj](/india/agra/fatehpur-sikri) in the middle of the day, Mehtab Bagh for sunset. That sequence works because the Taj is closed on Fridays and sunset here is the consolation on a Friday visit.\n\nThe garden closes at sunset, so there is no lingering into dusk. Do not plan a long dinner immediately after, because getting back across the river takes longer than the map suggests.\n\nA guide adds little here; see [hiring a guide in Agra](/india/agra/agra-tour-guide) for where one is genuinely worth it.',
            tourCard: A_FORT,
          },
        ],
        faqs: [
          { q: 'Is Mehtab Bagh worth visiting?', a: 'For the view, yes. It is the only place you see the whole Taj Mahal uninterrupted with the river in front of it and no crowd in the frame. As a garden it is modest, so go for the fifteen minutes around sunset rather than for the grounds.' },
          { q: 'Will I see the Taj Mahal reflected in the river?', a: 'Only in and just after the monsoon, roughly July to October. For much of the year the Yamuna at Agra is a narrow channel or dry sand, and the famous reflection photograph is simply not available. The view itself is still the best there is.' },
          { q: 'How far is Mehtab Bagh from the Taj Mahal?', a: 'About a kilometre across the river, but 10 to 12 km by road because you must cross upstream. Allow half an hour each way, longer at the end of the day when the traffic builds.' },
          { q: 'What time should I arrive?', a: 'About 45 minutes before sunset. That gives you time to reach the riverbank and settle before the light turns. The garden closes at sunset, so there is no staying on into dusk.' },
        ],
      };

    // ------------------------------------------------------------------
    case 'agra-shopping-guide':
      return {
        title: 'Shopping in Agra: Marble Inlay, Leather, and the Commission Trap',
        seoTitle: 'Agra Shopping Guide',
        description:
          'Pietra dura marble, Mughal-era leather and zari work: where to buy, what a real piece costs, and why the workshop your driver suggests is the expensive one.',
        heroImage:
          'https://images.asiabylocals.com/asiabylocals/tours/agra-taj-mahal-agra-fort-baby-taj-guided-day/img0/1600.webp',
        fastFacts: [
          { icon: 'gem', label: 'The local craft', value: 'Pietra dura marble inlay, by descendants of the Taj artisans' },
          { icon: 'alert', label: 'The trap', value: 'Driver and guide commission, often 30-40% of your price' },
          { icon: 'shopping-bag', label: 'Also known for', value: 'Leather, zari embroidery, Mughal-style carpets' },
          { icon: 'wallet', label: 'Fixed price', value: 'UP state emporium; everywhere else negotiates' },
        ],
        sections: [
          {
            title: 'Say This Before You Get in the Car',
            icon: 'alert',
            content:
              'Agra has one shopping problem and it dwarfs every other consideration: **the commission system**.\n\nDrivers and unlicensed guides are paid by marble workshops and emporiums for every tourist they deliver, and the commission is not small. Thirty to forty per cent of whatever you spend is a normal range. It is not added at the till; it is already inside the price you are quoted, which is why the same piece can cost wildly different amounts depending on how you arrived.\n\nThis is why the driver who has been perfectly pleasant all morning will suddenly suggest a workshop you did not ask for, and why he will be reluctant to take you to one you name. He is not being difficult. He is being paid.\n\nThe defence is a single sentence, said at the start of the day rather than at the moment of the detour: **no shopping stops unless I ask for one**. Said early it is unremarkable. Said in the car park outside a marble showroom it is an argument.\n\nWhen you book a guided day through us that stop is not in the itinerary at all unless you want it.',
            tourCard: A_FULL,
          },
          {
            title: 'Pietra Dura: What Real Marble Inlay Is',
            icon: 'gem',
            content:
              'The craft Agra is genuinely famous for is **pietra dura**, marble inlay, and the workshops here are run by families who trace their trade to the artisans who decorated the [Taj Mahal](/india/agra/taj-mahal). That lineage is real, and so is the skill.\n\nWhat you are buying is semi-precious stone cut to shape and set flush into white marble: carnelian, lapis lazuli, malachite, mother of pearl, jasper. A single flower can take a craftsman days.\n\n**How to tell real from the substitute.** Run a finger across the inlay: real pietra dura is perfectly flush, you feel a single smooth surface with no lip at the join. Hold it to a light; genuine translucent stones such as carnelian glow at the edges while dyed resin stays flat and dead. Weight is the other tell, because real marble is heavy for its size and the alabaster or soapstone substitutes are noticeably light. And a real piece has tiny imperfections in the cut, because a person made it.\n\nPrices vary enormously with the number of pieces per flower and the stones used. There is no single fair price, which is exactly why arriving without a commission attached matters so much.',
          },
          {
            title: 'Leather, Zari and Carpets',
            icon: 'shopping-bag',
            content:
              'Agra has been a **leather** town since the Mughals and is still one of India\'s largest producers. Shoes, bags, jackets, mostly around Sadar Bazaar and Hing Ki Mandi. Quality runs from excellent to poor in the same street, so check the stitching and the smell: real leather smells of leather and bonded material smells of glue.\n\n**Zari and zardozi** is metal-thread embroidery, another Mughal survival, sold as saris, shawls and cushion covers. Real zari uses metallic thread that tarnishes slowly; the cheap version is plastic-coated and shines too evenly.\n\n**Carpets and dhurries** are sold everywhere in Agra but mostly made elsewhere, principally Bhadohi and Kashmir. That is not a problem provided nobody tells you otherwise. Ask where it was knotted, and count knots per square inch on the reverse rather than trusting the number on the label.',
          },
          {
            title: 'Where to Go',
            icon: 'map-pin',
            content:
              '**The Uttar Pradesh state emporium** is the fixed-price option and the honest shortcut. You will not get a bargain and you will not get a fake, and for a marble piece going home in a suitcase that is usually the correct trade.\n\n**Sadar Bazaar** is the main market: leather, clothes, handicrafts, food. Negotiated, busy, and a reasonable place to walk in the evening.\n\n**Kinari Bazaar** in the old city is the fabric and trim lane, more interesting to look at than to buy in unless you want zari by the metre.\n\n**Marble workshops in Tajganj**, the district around the Taj, are where the craft actually happens and where you can watch a piece being cut. Go to one you chose, not one you were driven to, and the difference in the opening price will be obvious.\n\nFor comparison, [Jaipur\'s shopping](/india/jaipur/jaipur-shopping-guide) is broader and better for textiles and gems; Agra is narrower and better for marble.',
            tourCard: A_GUIDE,
          },
        ],
        faqs: [
          { q: 'What is Agra famous for buying?', a: 'Pietra dura marble inlay above all, made by families descended from the Taj Mahal artisans. After that leather, since Agra is one of India\'s largest leather producers, and zari metal-thread embroidery.' },
          { q: 'How do I tell real marble inlay from fake?', a: 'Run a finger over it: real inlay is perfectly flush with no lip at the join. Hold it to the light, where genuine carnelian and similar stones glow at the edges while dyed resin stays flat. And real marble is heavy for its size; the alabaster substitutes feel noticeably light.' },
          { q: 'Why does my driver want to take me to a marble shop?', a: 'Because he is paid a commission, commonly 30 to 40 per cent of whatever you spend, and it is already inside the price you are quoted. Say at the start of the day that you do not want shopping stops. Said early it is unremarkable; said at the showroom door it is an argument.' },
          { q: 'Where can I shop in Agra without haggling?', a: 'The Uttar Pradesh state emporium. Fixed prices and checked quality. You lose the chance of a bargain and gain the certainty that a marble piece is marble, which for something that has to survive a suitcase is usually the right trade.' },
        ],
      };

    // ============================================================== JAIPUR
    case 'delhi-to-jaipur':
      return {
        title: 'Delhi to Jaipur: Train, Car or Bus, and What Each Day Looks Like',
        seoTitle: 'Delhi to Jaipur: How to Travel',
        description:
          '280 km on the expressway. The Vande Bharat, the Shatabdi, a private car or the bus, with honest journey times and which one suits a day trip.',
        heroImage:
          'https://images.asiabylocals.com/asiabylocals/tours/from-delhi-jaipur-1-day-trip-by-ac-car/img0/1600.webp',
        fastFacts: [
          { icon: 'map-pin', label: 'Distance', value: 'About 280 km by road' },
          { icon: 'train', label: 'Fastest train', value: 'Vande Bharat, roughly 4 hours' },
          { icon: 'car', label: 'By car', value: '5 to 6 hours door to door with a stop' },
          { icon: 'alert', label: 'Day trip verdict', value: 'Possible, long, and better as an overnight' },
        ],
        sections: [
          {
            title: 'The Honest Answer on a Day Trip',
            icon: 'alert',
            content:
              'Delhi to Jaipur and back in a day is done constantly and it is a **long** day. Around 280 km each way, which is five to six hours of driving in total on a good day and considerably more if you leave late.\n\nWhat that buys you is roughly five hours in Jaipur, which is [Amber Fort](/india/jaipur/amber-fort) and one or two things in the city. It is not enough for the [City Palace](/india/jaipur/city-palace-jaipur), [Jantar Mantar](/india/jaipur/jantar-mantar-jaipur) and Amber together at any reasonable pace.\n\nIf the day trip is what your schedule allows, take it and choose Amber Fort plus [Hawa Mahal](/india/jaipur/hawa-mahal) on the way back. If you have any flexibility at all, one night in Jaipur changes the trip completely, and the [one-day Jaipur itinerary](/india/jaipur/1-day-jaipur-itinerary) becomes a real day rather than a compressed one.',
            tourCard: J_DELHI,
          },
          {
            title: 'By Train: Vande Bharat and Shatabdi',
            icon: 'train',
            content:
              'The train is the civilised option and on a good day it is the fastest.\n\nThe **Vande Bharat Express** runs Delhi to Jaipur in about four hours, air-conditioned, with a meal served at your seat. The **Ajmer Shatabdi** takes a little over four and a half and has been doing the run for decades. Both leave from **New Delhi** station, not Nizamuddin, which is the Agra departure point and a frequent and expensive confusion.\n\nBook well ahead. These trains fill, and Indian rail booking opens sixty days out with the good seats going early. IRCTC is the official channel and a foreign card sometimes struggles with it; a travel agent handling the booking is a small fee well spent.\n\nThe catch with the train is that it delivers you to Jaipur Junction without transport at the other end, and Jaipur\'s sights are spread out. Budget for a car or an auto for the day once you arrive.',
          },
          {
            title: 'By Car: The Expressway and What It Costs in Hours',
            icon: 'car',
            content:
              'The **Delhi-Jaipur Expressway** (NH-48) is a good road and the drive is straightforward. Five to six hours door to door is realistic including one stop; anyone promising four has not accounted for getting out of Delhi.\n\nLeaving Delhi is the variable. Before 7 AM the city releases you in forty minutes. At 9 AM the same stretch takes ninety. That single hour of departure time is worth more to your day than anything else you decide.\n\nA private car with a driver is the sensible way to do it, and it solves the problem the train creates, because the same car takes you around Jaipur when you arrive. For a family or a group of three or four it is often cheaper than four train tickets plus local transport.\n\nThe usual stop is **Neemrana** or one of the highway restaurants around the halfway mark. Build it in rather than pretending you will drive straight through.',
            tourCard: J_TUK,
          },
          {
            title: 'As a Leg of the Golden Triangle',
            icon: 'map-pin',
            content:
              'Most people do not travel Delhi to Jaipur in isolation. It is one side of the [Golden Triangle](/india/golden-triangle), and which direction you travel it in matters more than it sounds.\n\n**Delhi, Agra, Jaipur, Delhi** is the common loop and the better one. It puts the [Taj Mahal](/india/agra/taj-mahal) early while you are fresh, makes the Agra to Jaipur leg a daytime drive with [Fatehpur Sikri](/india/agra/fatehpur-sikri) on the way, and brings you back to Delhi for your flight.\n\n**Delhi, Jaipur, Agra, Delhi** works too and is slightly better if you want Jaipur\'s markets before you have spent your money, but it pushes Agra to the end when everyone is tired, and the Taj deserves better than that.\n\nEither way, do not try to cover the triangle in two days. Three is the minimum that keeps every drive in daylight; see the [Golden Triangle page](/india/golden-triangle) for what each length actually fits.',
          },
        ],
        faqs: [
          { q: 'How long does Delhi to Jaipur take?', a: 'About four hours on the Vande Bharat Express, a little over four and a half on the Shatabdi, and five to six hours door to door by car including a stop. The bus is slower and only worth it on price.' },
          { q: 'Can I do Jaipur as a day trip from Delhi?', a: 'Yes, and it is a long day. Around 280 km each way leaves you roughly five hours in Jaipur, which is Amber Fort and one other sight, not the full city. One night there changes the trip completely if your schedule allows it.' },
          { q: 'Which station do Jaipur trains leave from?', a: 'New Delhi station, not Hazrat Nizamuddin. Nizamuddin is where the Agra trains go from, and mixing the two up is a common and expensive mistake on the morning of travel.' },
          { q: 'Train or car for Delhi to Jaipur?', a: 'Train if you are one or two people and want the fastest, calmest journey. Car if you are three or more, or if you want the same vehicle to take you around Jaipur afterwards, since the train leaves you at the station with the sights still spread across the city.' },
        ],
      };

    // ------------------------------------------------------------------
    case 'agra-to-jaipur':
      return {
        title: 'Agra to Jaipur: The Drive, and Why You Stop at Fatehpur Sikri',
        seoTitle: 'Agra to Jaipur: The Drive',
        description:
          '240 km, four to five hours, and one abandoned Mughal capital directly on the route. How to travel it, and the stops that are worth the detour.',
        heroImage:
          'https://images.asiabylocals.com/asiabylocals/tours/from-jaipur-full-day-jaipur-sightseeing-with-galta/img0/1600.webp',
        fastFacts: [
          { icon: 'map-pin', label: 'Distance', value: 'About 240 km' },
          { icon: 'car', label: 'By car', value: '4 to 5 hours without stops' },
          { icon: 'landmark', label: 'On the way', value: 'Fatehpur Sikri, 40 km from Agra, directly on the route' },
          { icon: 'train', label: 'By train', value: 'Possible but awkward; the car is the sensible choice' },
        ],
        sections: [
          {
            title: 'This Is the Leg Where the Car Wins',
            icon: 'car',
            content:
              'Of the three sides of the [Golden Triangle](/india/golden-triangle), Agra to Jaipur is the one where a private car is clearly the right answer rather than merely a comfortable one.\n\nThe trains between Agra and Jaipur exist but are slow, infrequent and awkwardly timed, and they take you past the one thing you should stop for without stopping. The road is about **240 km and four to five hours** of driving, and it passes directly through [Fatehpur Sikri](/india/agra/fatehpur-sikri), which is forty kilometres out of Agra.\n\nThat single fact settles it. A car turns the transfer into a sightseeing day at no extra cost in hours, because the stop is on the route rather than a detour from it.\n\nLeave Agra by eight and you reach Fatehpur Sikri before the heat and the coaches, spend two hours, and are in Jaipur by mid-afternoon with the evening free.',
            tourCard: J_FULL,
          },
          {
            title: 'Fatehpur Sikri: The Stop That Justifies the Route',
            icon: 'landmark',
            content:
              'Akbar built a capital here in 1571, in red sandstone, complete, and abandoned it about fourteen years later. The usual explanation is that the water ran out. What remains is one of the best preserved Mughal cities anywhere precisely because nobody lived in it long enough to alter it.\n\nThe **Buland Darwaza**, the victory gate, is 54 metres and among the tallest gateways in the world. The **Panch Mahal** is a five-storey open pavilion that steps inward like a wedding cake. The **Diwan-i-Khas** has a single carved central pillar that Akbar is said to have sat on while his advisers argued below.\n\nIt is a UNESCO World Heritage Site and it takes about two hours done properly. There is a shuttle from the car park to the monument because the last stretch is closed to private vehicles.\n\nOne warning that applies here more than anywhere in the triangle: the guides and "official" helpers at Fatehpur Sikri are persistent, and not all of them are licensed. See [hiring a guide in Agra](/india/agra/agra-tour-guide) for how to tell.',
          },
          {
            title: 'The Other Stops, and Whether They Are Worth It',
            icon: 'map-pin',
            content:
              '**Abhaneri stepwell (Chand Baori)** is the one worth the detour. Around 95 km short of Jaipur and roughly 20 km off the highway, it is a 9th-century stepwell of about 3,500 steps descending thirteen storeys into the ground, and it is one of the most startling structures in India. It adds an hour to an hour and a half including the drive in and out. If you have any interest in architecture at all, take it.\n\n**Bharatpur** and the Keoladeo bird sanctuary are a little off the route and only make sense if birds are a reason for your trip, in which case it is a morning, not a stop.\n\n**Highway restaurants** cluster around the halfway mark. The larger chains are safe and dull. Eat before you leave Agra if you can.\n\nWhat is not worth it: a marble workshop stop, which is not on the way to anywhere and is a commission arrangement. See [shopping in Agra](/india/agra/agra-shopping-guide).',
            tourCard: J_CITY,
          },
        ],
        faqs: [
          { q: 'How long does Agra to Jaipur take?', a: 'About four to five hours of driving for the 240 km, without stops. With Fatehpur Sikri, which is directly on the route, allow a full day and you arrive in Jaipur by mid-afternoon.' },
          { q: 'Is there a train from Agra to Jaipur?', a: 'There are trains, but they are slow, infrequent and awkwardly timed, and they pass Fatehpur Sikri without letting you stop. On this leg a private car is genuinely the better option rather than just the more comfortable one.' },
          { q: 'Is Fatehpur Sikri worth stopping for?', a: 'Yes, and it costs you almost nothing in time because it is 40 km out of Agra directly on the road to Jaipur. It is a complete Mughal capital abandoned after about fourteen years, which is why it survives so well, and it takes about two hours.' },
          { q: 'What is Chand Baori and should I detour for it?', a: 'A 9th-century stepwell at Abhaneri, about 3,500 steps descending thirteen storeys, roughly 20 km off the highway near Jaipur. It adds an hour to ninety minutes and it is one of the most extraordinary structures in India. Worth it if architecture interests you at all.' },
        ],
      };

    // ================================================================ GEO LISTICLES
    case 'best-tours-in-agra':
      return {
        title: 'Best Tours in Agra — 2026, Honestly Compared',
        seoTitle: 'Best Tours in Agra 2026: Top-Rated Picks by Category',
        description: 'The best Agra tours for 2026 — Taj Mahal guides, sunset tours, Agra Fort and full-day combos — with real prices and real guest reviews, not a marketing list.',
        heroImage: 'https://images.asiabylocals.com/asiabylocals/tours/agra-taj-mahal-agra-fort-baby-taj-guided-day/img0/1600.webp',
        sections: [
          {
            title: 'The Short Answer',
            content:
              'For a first visit, the best Agra tour is the **full-day Taj Mahal, Agra Fort and Baby Taj combo** — it covers the three essential monuments with one licensed guide and one vehicle, which matters more in Agra than most cities because of how badly a wrong guide can go (see the [guide-hiring guide](/india/agra/agra-tour-guide) for why). If you only have time for the Taj itself, go straight to the sunset slot below instead.\n\nBelow is our honest, by-category breakdown — real tours, real prices, real reviews.',
            tourCard: { ...A_FULL, rating: '4.98', reviews: '101' },
          },
          {
            title: 'Best Taj Mahal Guide',
            content:
              'For the Taj Mahal and Agra Fort together without the full-day commitment, a **licensed, government-approved guide** booked in advance is the highest-rated option — and it removes the single biggest Agra risk: the unlicensed tout at the gate who quotes a low fee and walks you to a commission-paying marble workshop instead. Ask to see the ID card; a real guide hands it over without hesitation.',
            tourCard: { ...A_GUIDE, rating: '4.83', reviews: '20' },
          },
          {
            title: 'Best Sunset Tour of the Taj Mahal',
            content:
              'The Taj changes colour through the day — ivory-white at noon, pink-gold at sunset — and the **evening slot** carries the highest rating of any Agra tour on our platform. Crowds thin after 4 PM and the marble genuinely looks different in low light; this is the pick for anyone who has already seen Agra Fort or is short on time.',
            tourCard: { ...A_SUNSET, rating: '4.95', reviews: '26' },
          },
          {
            title: 'Best Tour for Agra Fort Alone',
            content:
              'If the Taj is a repeat visit or you are tight on time, **Agra Fort on its own** is a two-hour visit that rewards a guide more than almost any other Agra site — the fort is a confusing three-century jumble of additions, and without someone to sequence it you will walk past the room where Shah Jahan spent his last years imprisoned, watching the Taj from a window, without knowing it.',
            tourCard: { ...A_FORT, rating: '4.96', reviews: '10' },
          },
          {
            title: 'How We Picked These (and Why There\'s No Price Table vs. Other Platforms)',
            content:
              'Every tour above runs with a licensed, government-approved guide we\'ve vetted directly — not a reseller\'s reseller. We left out a price comparison against GetYourGuide or Viator deliberately: the same local guide often works across multiple platforms at a similar rate, since the guide sets the fee, not us. A price race there would mostly compare marketing margins, not quality.\n\nWhat we do differently: every booking is confirmed with the guide directly, there is no unannounced stop at a shopping workshop unless you ask for one, and the licence is checked before the tour is listed. If you\'d rather browse the full catalogue yourself, see [all Agra tours](/india/agra).',
          },
        ],
        faqs: [
          { q: 'What is the best tour in Agra?', a: 'For a first visit, the full-day Taj Mahal, Agra Fort and Baby Taj combo with a licensed guide — it covers the three essential monuments in one trip. If you only have time for one, the Taj Mahal sunset tour is the highest-rated single option.' },
          { q: 'What is the best Taj Mahal guide to book?', a: 'A government-approved, licensed guide booked in advance — check for the Ministry of Tourism photo ID card. This avoids the unlicensed touts at the gate who route visitors to commission-paying marble workshops.' },
          { q: 'Is the Taj Mahal sunset tour worth it?', a: 'Yes — it is our highest-rated Agra tour. Crowds thin after 4 PM and the marble visibly changes colour in late light, which the midday visit does not show.' },
          { q: 'Do I need to book Agra tours in advance?', a: 'A few days ahead is enough most of the year, but during the cool season (November–February) and around major Indian holidays, licensed guides in less common languages book out faster.' },
          { q: 'Is Agra Fort worth visiting if I\'ve already seen the Taj Mahal?', a: 'Yes, and arguably it rewards a guide more — the fort is a confusing three-century complex of additions, and a guide is the difference between a scenic walk and understanding what you\'re looking at, including Shah Jahan\'s imprisonment cell.' },
        ],
        jsonLd: {
          '@context': 'https://schema.org',
          '@graph': [
            {
              '@type': 'FAQPage',
              mainEntity: [
                { '@type': 'Question', name: 'What is the best tour in Agra?', acceptedAnswer: { '@type': 'Answer', text: 'For a first visit, the full-day Taj Mahal, Agra Fort and Baby Taj combo with a licensed guide. For one monument only, the Taj Mahal sunset tour is the highest-rated single option.' } },
                { '@type': 'Question', name: 'What is the best Taj Mahal guide to book?', acceptedAnswer: { '@type': 'Answer', text: 'A government-approved, licensed guide booked in advance — check for the Ministry of Tourism photo ID card.' } },
                { '@type': 'Question', name: 'Is the Taj Mahal sunset tour worth it?', acceptedAnswer: { '@type': 'Answer', text: 'Yes — our highest-rated Agra tour. Crowds thin after 4 PM and the marble visibly changes colour in late light.' } },
              ],
            },
          ],
        },
        fastFacts: [
          { icon: 'star', label: 'Top Pick', value: 'Taj + Fort + Baby Taj Combo' },
          { icon: 'sun', label: 'Highest Rated', value: 'Taj Mahal Sunset Tour' },
          { icon: 'badge', label: 'Always Check', value: 'Guide\'s licence card' },
        ],
      };

    case 'best-tours-in-jaipur':
      return {
        title: 'Best Tours in Jaipur — 2026, Honestly Compared',
        seoTitle: 'Best Tours in Jaipur 2026: Top-Rated Picks by Category',
        description: 'The best Jaipur tours for 2026 — Amber Fort, the Pink City by tuk-tuk, shopping bazaars and full-day combos — with real prices and real guest reviews, not a marketing list.',
        heroImage: 'https://images.asiabylocals.com/asiabylocals/tours/jaipur-private-city-tour-with-a-women-driven-e/img0/1600.webp',
        sections: [
          {
            title: 'The Short Answer',
            content:
              'Jaipur rewards a full day far more than a rushed half-day, because the city\'s best sights are spread wide — Amber Fort sits outside the city, while the Pink City\'s bazaars and palaces are all inside the old walls. Our highest-rated single tour is a **private city tour by women-driven e-rickshaw**, which covers the Pink City at a pace that works and supports a women-driven local operator rather than a generic taxi.\n\nBelow is our honest, by-category breakdown — real tours, real prices, real reviews.',
            tourCard: { ...J_CITY, rating: '5.0', reviews: '20' },
          },
          {
            title: 'Best Amber Fort Tour',
            content:
              'Amber Fort, 11 km outside the city on a hilltop above Maota Lake, is Jaipur\'s single most important sight and deserves more than a quick in-and-out. The top-rated option pairs the fort with a **boat ride on the lake below** — a small addition that turns a monument visit into a proper half-day out, for a price that still undercuts most hotel-arranged transfers.',
            tourCard: { ...J_AMBER, rating: '4.63', reviews: '9' },
          },
          {
            title: 'Best Shopping & Bazaar Tour',
            content:
              'Jaipur is one of India\'s best cities for textiles, block-printing, gems and jewellery — and also one of the easiest places to badly overpay if you walk in without context. A guided **tuk-tuk shopping tour with art workshops** takes you to working artisan bazaars rather than commission showrooms, with the craft demonstrations (block-printing, gem-cutting) included rather than an afterthought.',
            tourCard: { ...J_SHOPPING, rating: '4.44', reviews: '5' },
          },
          {
            title: 'Best Full-Day Combo',
            content:
              'For a single day that covers palaces, bazaars and temples without the planning, a full-day **tuk-tuk circuit** is the top-rated option — the open-air tuk-tuk suits Jaipur\'s stop-start old-city traffic better than a car, and seeing the city from an auto-rickshaw is, for most first-timers, part of the experience rather than a compromise.',
            tourCard: { ...J_PALACES, rating: '5.0', reviews: '1' },
          },
          {
            title: 'How We Picked These (and Why There\'s No Price Table vs. Other Platforms)',
            content:
              'Every tour above runs with a local guide or driver we\'ve vetted directly. We left out a price comparison against GetYourGuide or Viator deliberately: the same local operator often lists on multiple platforms at a similar rate, since the operator sets the price, not us — a price table there would mostly compare marketing margins, not quality.\n\nWhat we do differently: every booking is confirmed with the operator directly, and the "no-shopping" tours on our platform mean exactly that — no unannounced stop at a commission bazaar unless the tour description says so. If you\'d rather browse the full catalogue yourself, see [all Jaipur tours](/india/jaipur).',
          },
        ],
        faqs: [
          { q: 'What is the best tour in Jaipur?', a: 'A private city tour by women-driven e-rickshaw is our highest-rated single Jaipur tour. For a first visit, pair it with a dedicated Amber Fort tour, since the fort sits outside the city and deserves its own half-day.' },
          { q: 'What is the best Amber Fort tour?', a: 'A half-day guided tour that pairs the fort with a boat ride on the lake below — it turns a monument visit into a fuller half-day out for a modest extra cost.' },
          { q: 'Is a tuk-tuk tour better than a car tour in Jaipur?', a: 'For the old walled city, yes — Jaipur\'s bazaars and narrow lanes suit an open-air tuk-tuk\'s stop-start pace better than a car, and most first-time visitors enjoy the tuk-tuk itself as part of the experience.' },
          { q: 'How do I avoid overpaying for shopping in Jaipur?', a: 'Book a guided shopping tour that visits working artisan bazaars rather than accepting an unplanned stop at a commission showroom. Several tours on our platform are explicitly labelled "no shopping" if you want to avoid detours entirely.' },
          { q: 'What is the best full-day tour in Jaipur?', a: 'A full-day tuk-tuk circuit covering palaces, bazaars and temples — it fits in the city\'s spread-out highlights without requiring you to plan the route yourself.' },
        ],
        jsonLd: {
          '@context': 'https://schema.org',
          '@graph': [
            {
              '@type': 'FAQPage',
              mainEntity: [
                { '@type': 'Question', name: 'What is the best tour in Jaipur?', acceptedAnswer: { '@type': 'Answer', text: 'A private city tour by women-driven e-rickshaw is our highest-rated single Jaipur tour, paired with a dedicated Amber Fort tour for a first visit.' } },
                { '@type': 'Question', name: 'What is the best Amber Fort tour?', acceptedAnswer: { '@type': 'Answer', text: 'A half-day guided tour that pairs the fort with a boat ride on the lake below.' } },
                { '@type': 'Question', name: 'How do I avoid overpaying for shopping in Jaipur?', acceptedAnswer: { '@type': 'Answer', text: 'Book a guided shopping tour to working artisan bazaars rather than accepting an unplanned stop at a commission showroom.' } },
              ],
            },
          ],
        },
        fastFacts: [
          { icon: 'star', label: 'Top Pick', value: 'Women-Driven E-Rickshaw City Tour' },
          { icon: 'landmark', label: 'Don\'t Miss', value: 'Amber Fort + Lake Boat Ride' },
          { icon: 'shopping-bag', label: 'Shopping', value: 'No-commission bazaar tours' },
        ],
      };

    // ================================================================ AGRA GEO SINGLE-TOPIC PAGES
    case 'best-taj-mahal-tour':
      return {
        title: 'Best Taj Mahal Tour — 2026, Honestly Compared',
        seoTitle: 'Best Taj Mahal Tour 2026: Which Option to Book',
        description: 'The best Taj Mahal tour format for most visitors, how it compares to a bare entry ticket, and what a licensed guide actually adds.',
        heroImage: 'https://images.asiabylocals.com/asiabylocals/tours/sunrise-taj-mahal-agra-private-city-tour-all/img0/1600.webp',
        sections: [
          {
            title: 'The Best Format: Private, Guided, Timed Right',
            content: 'For most first-time visitors, the best Taj Mahal tour is a **private guided visit at sunrise or early morning**, not a bare entry ticket and not a large group tour. A private format lets you set your own pace at the mausoleum, a licensed guide explains the inlay work and history a plaque can\'t, and an early slot avoids both the heat and the busiest hours (roughly mid-morning onward).\n\nA group tour is cheaper but means moving at the group\'s pace through the most photographed building in India — not ideal for your one visit.',
            tourCard: { slug: 'sunrise-taj-mahal-agra-private-city-tour-all', title: 'Sunrise Taj Mahal & Agra Private City Tour (All Inclusive)', description: 'Private, timed for sunrise, all-inclusive — the format we\'d recommend for a first Taj Mahal visit.', price: 'From $6', duration: 'Flexible', rating: '5.0', reviews: '3', image: 'https://images.asiabylocals.com/asiabylocals/tours/sunrise-taj-mahal-agra-private-city-tour-all/img0/1600.webp' },
          },
        ],
        faqs: [
          { q: 'What is the best Taj Mahal tour?', a: 'A private, guided tour timed for sunrise or early morning — it avoids the worst heat and crowds, and a licensed guide adds context a bare entry ticket doesn\'t.' },
          { q: 'Is a Taj Mahal tour better than just buying an entry ticket?', a: 'For a one-time visit, yes — a guide explains the pietra dura inlay work, the symmetry and the history, which most visitors would otherwise miss entirely.' },
        ],
        jsonLd: { '@context': 'https://schema.org', '@graph': [{ '@type': 'FAQPage', mainEntity: [{ '@type': 'Question', name: 'What is the best Taj Mahal tour?', acceptedAnswer: { '@type': 'Answer', text: 'A private, guided tour timed for sunrise or early morning.' } }] }] },
      };

    case 'best-taj-mahal-sunrise-tour':
      return {
        title: 'Best Taj Mahal Sunrise Tour — 2026',
        seoTitle: 'Best Taj Mahal Sunrise Tour 2026',
        description: 'Why sunrise is the best time to see the Taj Mahal, what the gate-opening routine actually looks like, and the top-rated sunrise tour.',
        heroImage: 'https://images.asiabylocals.com/asiabylocals/tours/sunrise-taj-mahal-agra-private-city-tour-all/img0/1600.webp',
        sections: [
          {
            title: 'Why Sunrise Is the Best Slot',
            content: 'The Taj Mahal opens at dawn, and the sunrise slot is the top-rated way to see it for three real reasons: the marble\'s colour genuinely shifts from pink-tinted to white-gold as the light changes, the heat hasn\'t built up yet (this matters most March–June), and the crowds that arrive by mid-morning tour bus are still hours away. Gates open roughly 30 minutes before official sunrise; arriving at opening is the difference between an empty platform and a queue.',
            tourCard: { slug: 'agra-taj-mahal-sunrise-guided-tour-w-express', title: 'Agra: Taj Mahal Sunrise Guided Tour w/ Express Entry Tickets', description: 'Express entry timed for gate-opening at sunrise, with a licensed guide.', price: 'From $5', duration: '3 hours', rating: '5.0', reviews: '2', image: 'https://images.asiabylocals.com/asiabylocals/tours/sunrise-taj-mahal-agra-private-city-tour-all/img0/1600.webp' },
          },
        ],
        faqs: [
          { q: 'What time should I arrive for Taj Mahal sunrise?', a: 'Gates typically open around 30 minutes before official sunrise. Arriving at opening time is the difference between an uncrowded platform and a queue.' },
          { q: 'Is the Taj Mahal sunrise tour worth the early start?', a: 'Yes — the marble\'s colour shifts noticeably in early light, the heat hasn\'t built up, and the mid-morning tour-bus crowds haven\'t arrived yet.' },
        ],
        jsonLd: { '@context': 'https://schema.org', '@graph': [{ '@type': 'FAQPage', mainEntity: [{ '@type': 'Question', name: 'What time should I arrive for Taj Mahal sunrise?', acceptedAnswer: { '@type': 'Answer', text: 'Gates typically open around 30 minutes before official sunrise.' } }] }] },
      };

    case 'best-full-day-agra-tour':
      return {
        title: 'Best Full-Day Agra Tour — 2026',
        seoTitle: 'Best Full-Day Agra Tour 2026',
        description: 'What a well-structured full-day Agra tour covers, and the top-rated private option with tickets and guide included.',
        heroImage: 'https://images.asiabylocals.com/asiabylocals/tours/from-agra-full-day-agra-private-tour-with-tickets/img0/1600.webp',
        sections: [
          {
            title: 'What a Good Full Day Actually Covers',
            content: 'A well-structured full-day Agra tour front-loads the Taj Mahal at sunrise or early morning, moves to Agra Fort before the midday heat, and leaves the afternoon for Fatehpur Sikri or a slower stop like Itmad-ud-Daulah (the "Baby Taj") depending on pace. The top-rated private full-day option bundles tickets and a licensed guide so nothing gets rushed to beat closing times.',
            tourCard: { slug: 'from-agra-full-day-agra-private-tour-with-tickets', title: 'From Agra: Full Day Agra Private Tour - With Tickets & Guide', description: 'Tickets and licensed guide handled, private pace, the full day done properly.', price: 'From $8', duration: '8 hours', rating: '5.0', reviews: '4', image: 'https://images.asiabylocals.com/asiabylocals/tours/from-agra-full-day-agra-private-tour-with-tickets/img0/1600.webp' },
          },
        ],
        faqs: [
          { q: 'What should a full-day Agra tour include?', a: 'The Taj Mahal at sunrise or early morning, Agra Fort before midday heat, and an afternoon stop at Fatehpur Sikri or Itmad-ud-Daulah, with tickets and a licensed guide included.' },
          { q: 'Is 8 hours enough for a full Agra day?', a: 'Yes, for the Taj Mahal, Agra Fort and one additional stop — trying to add two extra sites in the same day usually means rushing at least one of them.' },
        ],
        jsonLd: { '@context': 'https://schema.org', '@graph': [{ '@type': 'FAQPage', mainEntity: [{ '@type': 'Question', name: 'What should a full-day Agra tour include?', acceptedAnswer: { '@type': 'Answer', text: 'The Taj Mahal at sunrise, Agra Fort before midday heat, and one afternoon stop, with tickets and a guide included.' } }] }] },
      };

    case 'taj-mahal-skip-the-line-tickets':
      return {
        title: 'Taj Mahal Skip-the-Line Tickets — What They Actually Are (2026)',
        seoTitle: 'Taj Mahal Skip-the-Line Tickets Explained 2026',
        description: 'There is no separate physical fast lane at the Taj Mahal — what "skip-the-line" tickets actually mean, and official entry fees for 2026.',
        heroImage: 'https://images.asiabylocals.com/asiabylocals/tours/taj-mahal-agra-private-tour-from-delhi-by-car/img0/1600.webp',
        sections: [
          {
            title: 'There Is No Separate Fast Lane — Here\'s What "Skip-the-Line" Really Means',
            content: 'The Archaeological Survey of India does not run a distinct physical fast-track lane at the Taj Mahal gate. "Skip-the-line" tickets sold by tour operators and booking platforms are pre-booked entry secured online in advance, which avoids the on-site ticket counter queue — the real value is in pre-booking, not a separate turnstile.\n\nOfficial 2026 base pricing runs roughly ₹250 total for Indian nationals (₹50 entry plus ₹200 mausoleum fee) and about ₹1,300 for foreign nationals; always confirm the current fee on ASI\'s own ticketing portal before you travel, since government fees do change. A guided tour that handles the booking removes the queue risk entirely.',
            tourCard: { slug: 'taj-mahal-agra-private-tour-from-delhi-by-car', title: 'Taj Mahal & Agra Private Tour from Delhi by Car – Fast Entry', description: 'Pre-booked entry and a private car from Delhi — the booking is handled, not a separate physical line.', price: 'From $7', duration: 'Flexible', image: 'https://images.asiabylocals.com/asiabylocals/tours/taj-mahal-agra-private-tour-from-delhi-by-car/img0/1600.webp' },
          },
        ],
        faqs: [
          { q: 'Is there an actual skip-the-line queue at the Taj Mahal?', a: 'No separate physical fast lane exists. "Skip-the-line" tickets are pre-booked online entry, which avoids the on-site counter queue — the value is in pre-booking, not a different gate.' },
          { q: 'How much does Taj Mahal entry cost in 2026?', a: 'Roughly ₹250 total for Indian nationals and about ₹1,300 for foreign nationals, per 2026 reference pricing — confirm the current fee on ASI\'s own portal before travelling, as government fees change.' },
        ],
        jsonLd: { '@context': 'https://schema.org', '@graph': [{ '@type': 'FAQPage', mainEntity: [{ '@type': 'Question', name: 'Is there an actual skip-the-line queue at the Taj Mahal?', acceptedAnswer: { '@type': 'Answer', text: 'No separate physical fast lane exists — "skip-the-line" tickets are pre-booked online entry.' } }] }] },
      };

    case 'best-taj-mahal-photography-tour':
      return {
        title: 'Best Taj Mahal Photography Tour — 2026',
        seoTitle: 'Best Taj Mahal Photography Tour 2026',
        description: 'Taj Mahal photography rules (tripods, interior restrictions), the best light and angles, and the top-rated photography-focused tour.',
        heroImage: 'https://images.asiabylocals.com/asiabylocals/tours/agra-taj-mahal-guided-tour-with-instagram/img0/1600.webp',
        sections: [
          {
            title: 'Know the Rules Before You Go',
            content: 'Tripods are generally not permitted inside the Taj Mahal complex — most current visitor reports confirm this, though policy can vary by season, so ask your guide on arrival rather than assuming. Photography is not allowed inside the mausoleum\'s interior at all; exterior and garden shots are fine. Commercial or professional shoots need prior written ASI permission arranged in advance.\n\nThe white marble bench on the central platform — made famous by Princess Diana\'s 1992 photograph — is the spot most visitors queue for; arriving at sunrise dramatically shortens that queue.',
            tourCard: { slug: 'agra-taj-mahal-guided-tour-with-instagram', title: 'Agra: Taj Mahal Guided Tour with Instagram Photoshoot', description: 'A guide who knows the angles, the light and the famous bench shot — timed to beat the queue.', price: 'From $5', duration: '4 hours', rating: '5.0', reviews: '3', image: 'https://images.asiabylocals.com/asiabylocals/tours/agra-taj-mahal-guided-tour-with-instagram/img0/1600.webp' },
          },
        ],
        faqs: [
          { q: 'Can I use a tripod at the Taj Mahal?', a: 'Generally no — tripods are typically not permitted inside the complex, though it is worth confirming with your guide on arrival since policy can vary.' },
          { q: 'Can I take photos inside the Taj Mahal mausoleum?', a: 'No — photography is not allowed inside the mausoleum\'s interior. Exterior and garden photography is fine.' },
          { q: 'What is the famous Taj Mahal bench photo?', a: 'The white marble "Diana bench" on the central platform, made famous by Princess Diana\'s 1992 photograph — most visitors queue to replicate the shot, and arriving at sunrise shortens that wait significantly.' },
        ],
        jsonLd: { '@context': 'https://schema.org', '@graph': [{ '@type': 'FAQPage', mainEntity: [{ '@type': 'Question', name: 'Can I use a tripod at the Taj Mahal?', acceptedAnswer: { '@type': 'Answer', text: 'Generally no — tripods are typically not permitted inside the complex.' } }, { '@type': 'Question', name: 'Can I take photos inside the Taj Mahal mausoleum?', acceptedAnswer: { '@type': 'Answer', text: 'No — photography is not allowed inside the mausoleum\'s interior.' } }] }] },
      };

    case 'best-private-taj-mahal-tour':
      return {
        title: 'Best Private Taj Mahal Tour — 2026',
        seoTitle: 'Best Private Taj Mahal Tour 2026',
        description: 'What a private Taj Mahal tour gets you over a group tour, and the top-rated fully private, flexible-itinerary option.',
        heroImage: 'https://images.asiabylocals.com/asiabylocals/tours/agra-create-your-own-itinerary-with-private-car/img0/1600.webp',
        sections: [
          {
            title: 'What "Private" Actually Buys You',
            content: 'A private Taj Mahal tour means your own guide and vehicle, not a shared bus with a fixed schedule — you set the pace, linger where you want, and skip what doesn\'t interest you. The top-rated option lets you build your own itinerary with a private car and guide rather than following a preset template, which suits travellers who want flexibility over a rigid group schedule.',
            tourCard: { slug: 'agra-create-your-own-itinerary-with-private-car', title: 'Agra: Create Your Own Itinerary with Private Car & Guide', description: 'Your own pace, your own stops — a private car and guide for a custom Agra day.', price: 'From $15', duration: 'Flexible', rating: '5.0', reviews: '2', image: 'https://images.asiabylocals.com/asiabylocals/tours/agra-create-your-own-itinerary-with-private-car/img0/1600.webp' },
          },
        ],
        faqs: [
          { q: 'Is a private Taj Mahal tour worth the extra cost over a group tour?', a: 'For most travellers, yes — you set your own pace, avoid a shared bus schedule, and can linger at the Taj Mahal rather than being moved along with a group.' },
        ],
        jsonLd: { '@context': 'https://schema.org', '@graph': [{ '@type': 'FAQPage', mainEntity: [{ '@type': 'Question', name: 'Is a private Taj Mahal tour worth the extra cost over a group tour?', acceptedAnswer: { '@type': 'Answer', text: 'For most travellers, yes — you set your own pace and avoid a shared bus schedule.' } }] }] },
      };

    case 'best-baby-taj-tour':
      return {
        title: 'Best Baby Taj (Itmad-ud-Daulah) Tour — 2026',
        seoTitle: 'Best Baby Taj Tour 2026: Itmad-ud-Daulah Guide',
        description: 'What the "Baby Taj" actually is, why it matters to Taj Mahal history, entry fees, and the top-rated tour that includes it.',
        heroImage: 'https://images.asiabylocals.com/asiabylocals/tours/agra-day-tour-to-tomb-of-akbar-baby-taj/img0/1600.webp',
        sections: [
          {
            title: 'What the "Baby Taj" Actually Is',
            content: '**Itmad-ud-Daulah**, nicknamed the "Baby Taj," was built by Mughal empress Nur Jahan as a tomb for her father, Mirza Ghiyas Beg (who held the title Itimad-ud-Daulah). Its white marble and intricate pietra dura inlay work are widely considered a design precursor to the Taj Mahal, built decades before it. It sits a short drive from the main Taj Mahal — close enough to add to the same day without a major detour.\n\n2026 reference entry fees run around ₹30 for Indian/SAARC nationals and roughly ₹310 for other foreign nationals, though these are set by the ASI/Agra Development Authority and can change — confirm current pricing before you go. Foreign visitors should also budget for the separate ADA toll that covers same-day entry across several Agra monuments.',
            tourCard: { slug: 'agra-day-tour-to-tomb-of-akbar-baby-taj', title: 'Agra: Day Tour to Tomb of Akbar, Baby Taj, Mehtab and more', description: 'The lesser-visited Agra sites in one day — Baby Taj, Akbar\'s Tomb and Mehtab Bagh.', price: 'From $40', duration: '1 day', rating: '5.0', reviews: '1', image: 'https://images.asiabylocals.com/asiabylocals/tours/agra-day-tour-to-tomb-of-akbar-baby-taj/img0/1600.webp' },
          },
        ],
        faqs: [
          { q: 'What is the Baby Taj?', a: 'Itmad-ud-Daulah, a tomb built by Mughal empress Nur Jahan for her father. Its white marble and pietra dura inlay are considered a design precursor to the Taj Mahal, built decades earlier.' },
          { q: 'Is the Baby Taj worth visiting?', a: 'Yes, especially for anyone interested in Mughal architecture — it sits a short drive from the main Taj Mahal and sees far fewer crowds, making it an easy same-day add-on.' },
        ],
        jsonLd: { '@context': 'https://schema.org', '@graph': [{ '@type': 'FAQPage', mainEntity: [{ '@type': 'Question', name: 'What is the Baby Taj?', acceptedAnswer: { '@type': 'Answer', text: 'Itmad-ud-Daulah, a tomb built by empress Nur Jahan for her father, considered a design precursor to the Taj Mahal.' } }] }] },
      };

    case 'golden-triangle-tour-india':
      return {
        title: 'Golden Triangle Tour India — 2026, Honestly Explained',
        seoTitle: 'Golden Triangle Tour India 2026: Delhi-Agra-Jaipur Guide',
        description: 'What the Golden Triangle circuit actually covers, realistic trip lengths and drive times between Delhi, Agra and Jaipur, and the top-rated package.',
        heroImage: 'https://images.asiabylocals.com/asiabylocals/tours/private-golden-triangle-4-day-tour-package-delhi/img0/1600.webp',
        sections: [
          {
            title: 'Why This Specific Loop Is So Popular',
            content: 'The **Golden Triangle** links India\'s capital (Delhi), its most iconic monument (the Taj Mahal in Agra), and Rajasthan\'s palace capital (Jaipur) in one compact, well-paved road loop — roughly 720 km total — making it the most efficient first-time circuit through North India.\n\nRealistic trip length is **4 to 7 days**: a 5-day trip gives about one day per city, while 6-7 days allows 1.5 days in Delhi and Jaipur with a full day in Agra. Drive times vary by source and traffic, but a reasonable planning estimate is roughly 3-4 hours Delhi to Agra, 5-6 hours Agra to Jaipur (often with a Fatehpur Sikri stop en route), and 5-6 hours Jaipur back to Delhi.',
            tourCard: { slug: 'private-golden-triangle-4-day-tour-package-delhi', title: 'Private Golden Triangle 4 Day Tour Package Delhi-Agra-Jaipur', description: 'All three legs of the classic circuit, private car and guide, in a realistic 4-day timeframe.', price: 'From $28', duration: '4 days', image: 'https://images.asiabylocals.com/asiabylocals/tours/private-golden-triangle-4-day-tour-package-delhi/img0/1600.webp' },
          },
        ],
        faqs: [
          { q: 'How many days do you need for the Golden Triangle?', a: '4 to 7 days is realistic. 5 days gives roughly one day per city; 6-7 days allows 1.5 days each in Delhi and Jaipur with a full day in Agra.' },
          { q: 'How far is the Golden Triangle loop?', a: 'Roughly 720 km total for Delhi-Agra-Jaipur-Delhi, with drive times of approximately 3-6 hours between each leg depending on traffic and stops.' },
        ],
        jsonLd: { '@context': 'https://schema.org', '@graph': [{ '@type': 'FAQPage', mainEntity: [{ '@type': 'Question', name: 'How many days do you need for the Golden Triangle?', acceptedAnswer: { '@type': 'Answer', text: '4 to 7 days is realistic, with 5-6 days being the most common choice.' } }] }] },
      };

    case 'best-agra-tour-operator':
      return {
        title: 'Best Agra Tour Operator — 2026, How to Choose',
        seoTitle: 'Best Agra Tour Operator 2026: How to Choose',
        description: 'What actually separates a good Agra tour operator from a bad one, beyond price — and why we don\'t claim to be the cheapest.',
        heroImage: 'https://images.asiabylocals.com/asiabylocals/tours/agra-taj-mahal-agra-fort-baby-taj-guided-day/img0/1600.webp',
        sections: [
          {
            title: 'What Actually Separates a Good Operator',
            content: 'The best Agra tour operator isn\'t necessarily the cheapest one — it\'s the one that uses a **licensed, government-approved guide**, confirms your booking before treating it as final, and doesn\'t route you through an unannounced commission shop. Several platforms (including this one) resell the same local guides and operators, so the difference between "alternatives" is often the booking experience and honesty, not the person showing up on the day.\n\nWe deliberately don\'t claim to be the cheapest option for Agra tours. What we do differently: every booking is confirmed directly with the licensed guide or operator first, and we refund in full if they can\'t take your date.',
            tourCard: A_FULL,
          },
        ],
        faqs: [
          { q: 'How do I choose a good Agra tour operator?', a: 'Check that guides are licensed and government-approved, confirm the booking is verified with the operator before payment is final, and ask upfront whether a shopping stop is included — the best operators don\'t hide it.' },
          { q: 'Are GetYourGuide, Viator and direct booking platforms different for Agra tours?', a: 'Often the same local guide or operator is bookable across multiple platforms. The real differences are in booking transparency, confirmation process and refund policy, not who physically guides the tour.' },
        ],
        jsonLd: { '@context': 'https://schema.org', '@graph': [{ '@type': 'FAQPage', mainEntity: [{ '@type': 'Question', name: 'How do I choose a good Agra tour operator?', acceptedAnswer: { '@type': 'Answer', text: 'Check that guides are licensed, confirm the booking before payment is final, and ask upfront about shopping stops.' } }] }] },
      };

    case 'best-agra-tour-for-families':
      return {
        title: 'Best Agra Tour for Families — 2026',
        seoTitle: 'Best Agra Tour for Families 2026',
        description: 'What makes an Agra tour family-friendly, accessibility notes for the Taj Mahal and Agra Fort, and the top-rated flexible-pace option.',
        heroImage: 'https://images.asiabylocals.com/asiabylocals/tours/agra-create-your-own-itinerary-with-private-car/img0/1600.webp',
        sections: [
          {
            title: 'What Makes a Family Tour Work in Agra',
            content: 'A **private tour with a flexible itinerary** suits families best — you can shorten the walking, add rest breaks, and skip sites that won\'t hold young kids\' attention, none of which a fixed-schedule group tour allows.\n\nOn accessibility: vehicles cannot drive directly to the Taj Mahal entrance, so expect a walk of several hundred metres on paths that aren\'t fully level — a real consideration for strollers, older relatives or wheelchair users. A guide can assist across this stretch, but it\'s worth planning for rather than assuming full step-free access. Agra Fort has uneven terrain and some steps in places; ask your guide about the easiest route on the day.',
            tourCard: { slug: 'agra-create-your-own-itinerary-with-private-car', title: 'Agra: Create Your Own Itinerary with Private Car & Guide', description: 'Flexible pace, your own stops — easy to adapt for kids or older relatives.', price: 'From $15', duration: 'Flexible', rating: '5.0', reviews: '2', image: 'https://images.asiabylocals.com/asiabylocals/tours/agra-create-your-own-itinerary-with-private-car/img0/1600.webp' },
          },
        ],
        faqs: [
          { q: 'Is the Taj Mahal wheelchair accessible?', a: 'Partially. Vehicles stop some distance from the entrance, requiring a walk on paths that aren\'t fully level. A guide can assist, but it\'s worth planning for rather than assuming full step-free access.' },
          { q: 'What is the best tour format for families in Agra?', a: 'A private tour with a flexible itinerary — it lets you add rest breaks, shorten walking distances and adjust the pace for kids or older relatives, which a fixed-schedule group tour cannot do.' },
        ],
        jsonLd: { '@context': 'https://schema.org', '@graph': [{ '@type': 'FAQPage', mainEntity: [{ '@type': 'Question', name: 'Is the Taj Mahal wheelchair accessible?', acceptedAnswer: { '@type': 'Answer', text: 'Partially — vehicles stop some distance from the entrance, requiring a walk on paths that aren\'t fully level.' } }] }] },
      };

    case 'is-agra-safe-for-tourists':
      return {
        title: 'Is Agra Safe for Tourists? — 2026 Honest Guide',
        seoTitle: 'Is Agra Safe for Tourists? 2026 Guide',
        description: 'The real safety situation in Agra — mostly commission scams, not violent crime — and how a licensed guide avoids most of it.',
        heroImage: 'https://images.asiabylocals.com/asiabylocals/tours/agra-fort-monument-visits-with-licensed-guide/img0/1600.webp',
        sections: [
          {
            title: 'The Honest Answer: Mostly Scams, Not Danger',
            content: 'Agra is safe in the sense that matters most to tourists — violent crime against visitors is rare. The real risk is **commission-based scams**: taxi and auto-rickshaw drivers who earn kickbacks for detouring you into marble, leather or handicraft "emporiums," sometimes via a fake story that your hotel is closed or overbooked. Unofficial guides in official-looking uniforms and invalid ticket sellers outside monuments are also reported.\n\nAuto-rickshaws rarely use meters reliably — agree the fare before you get in. Taj Ganj, Fatehabad Road and the monument areas are generally fine by day; Sadar Bazaar has more touts and pickpocket risk, especially after dark. A licensed, pre-booked guide sidesteps nearly all of this, since the itinerary and transport are already arranged.',
            tourCard: A_GUIDE,
          },
        ],
        faqs: [
          { q: 'Is Agra safe for tourists in 2026?', a: 'Yes, in terms of violent crime, which is rare against visitors. The real risk is commission-based scams — taxi detours to shopping emporiums and fake guides — not physical danger.' },
          { q: 'What is the most common Agra tourist scam?', a: 'Taxi or auto-rickshaw drivers detouring visitors to marble or handicraft shops for a commission, sometimes using a fake story that your booked hotel is unavailable.' },
          { q: 'How do I avoid scams in Agra?', a: 'Book a licensed guide and transport in advance rather than arranging things on arrival, agree auto-rickshaw fares before getting in, and be skeptical of anyone outside a monument offering tickets or guiding services directly.' },
        ],
        jsonLd: { '@context': 'https://schema.org', '@graph': [{ '@type': 'FAQPage', mainEntity: [{ '@type': 'Question', name: 'Is Agra safe for tourists in 2026?', acceptedAnswer: { '@type': 'Answer', text: 'Yes in terms of violent crime, which is rare. The real risk is commission-based scams, not physical danger.' } }] }] },
      };

    case 'best-hotel-near-taj-mahal':
      return {
        title: 'Best Hotels Near the Taj Mahal — 2026',
        seoTitle: 'Best Hotels Near Taj Mahal 2026',
        description: 'Well-regarded hotels close to the Taj Mahal, from ultra-luxury to practical, and how to pair a stay with a guided visit.',
        heroImage: 'https://images.asiabylocals.com/asiabylocals/tours/agra-taj-mahal-agra-fort-baby-taj-guided-day/img0/1600.webp',
        sections: [
          {
            title: 'The Known Names Worth Knowing',
            content: '**Oberoi Amarvilas** is the consistent top pick for a Taj Mahal view stay — around 600 metres from the monument with a golf-cart transfer to the gate, in the ultra-luxury tier (rates start roughly $450/night and move higher for the best rooms). **ITC Mughal** is a well-regarded 5-star alternative nearby, though we\'d suggest confirming current view specifics directly with the hotel rather than assuming every room faces the monument.\n\nFor most travellers on a normal budget, proximity to the monument matters less than it seems — a 10-15 minute transfer still gets you to the gate for sunrise, and a licensed guide will time your pickup regardless of which hotel you choose.',
            tourCard: A_SUNSET,
          },
        ],
        faqs: [
          { q: 'What is the best hotel with a Taj Mahal view?', a: 'Oberoi Amarvilas is the most consistently recommended option, about 600 metres from the monument with a golf-cart transfer to the gate, in the ultra-luxury price tier.' },
          { q: 'Do I need to stay right next to the Taj Mahal?', a: 'Not really — a 10-15 minute transfer from most central Agra hotels still gets you to the gate in time for sunrise, and a guided tour will time your pickup accordingly.' },
        ],
        jsonLd: { '@context': 'https://schema.org', '@graph': [{ '@type': 'FAQPage', mainEntity: [{ '@type': 'Question', name: 'What is the best hotel with a Taj Mahal view?', acceptedAnswer: { '@type': 'Answer', text: 'Oberoi Amarvilas, about 600 metres from the monument, in the ultra-luxury price tier.' } }] }] },
      };

    case 'taj-mahal-night-viewing-tour':
      return {
        title: 'Taj Mahal Night Viewing Tour — 2026 Honest Guide',
        seoTitle: 'Taj Mahal Night Viewing 2026: Dates, Rules, Tickets',
        description: 'Taj Mahal night viewing is real but rare — only five nights a month, not open on Fridays. What you can actually see, and how to book.',
        heroImage: 'https://images.asiabylocals.com/asiabylocals/tours/agra-taj-mahal-full-moon-night-tour-with-hotel/img0/1600.webp',
        sections: [
          {
            title: 'It\'s Real, But Only 5 Nights a Month',
            content: 'Taj Mahal night viewing is genuinely limited: it runs on the **full moon night plus the two nights before and two nights after** (five nights total per lunar month), with sessions roughly 20:00-23:59 in small batches. It is closed every **Friday** and throughout **Ramzan**, so always check the specific month\'s viewing nights before planning around it — don\'t assume a date without confirming.\n\nOnly the exterior silhouette of the main mausoleum is visible from a distance at night; there is no interior access and no close-up viewing of the inlay work you\'d see by day. Visitors typically need to report roughly 30 minutes early for a security and ID check at a designated point before entry. Because availability is tightly capped, book through a guide or operator who can confirm the actual dates for your travel month rather than guessing from an old list.',
            tourCard: { slug: 'agra-taj-mahal-full-moon-night-tour-with-hotel', title: 'Agra: Taj Mahal Full Moon Night Tour with Hotel Pickup', description: 'Night viewing on one of the five permitted nights a month, with hotel pickup and the booking handled.', price: 'From $18', duration: 'Flexible', image: 'https://images.asiabylocals.com/asiabylocals/tours/agra-taj-mahal-full-moon-night-tour-with-hotel/img0/1600.webp' },
          },
        ],
        faqs: [
          { q: 'Can you visit the Taj Mahal at night?', a: 'Yes, but only on five nights per lunar month: the full moon night plus two nights before and two after. It is closed every Friday and throughout Ramzan.' },
          { q: 'What can you actually see on a Taj Mahal night tour?', a: 'Only the exterior silhouette of the main mausoleum from a distance — there is no interior access or close-up viewing of the inlay work at night.' },
          { q: 'How do I book Taj Mahal night viewing?', a: 'Because the permitted nights change by lunar month and availability is capped, book through a guide or operator who can confirm the exact dates for your travel month rather than relying on an old date list.' },
        ],
        jsonLd: { '@context': 'https://schema.org', '@graph': [{ '@type': 'FAQPage', mainEntity: [{ '@type': 'Question', name: 'Can you visit the Taj Mahal at night?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, but only on five nights per lunar month around the full moon, and never on Fridays or during Ramzan.' } }] }] },
      };

    default:
      return null;
  }
}

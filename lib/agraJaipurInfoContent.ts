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

    default:
      return null;
  }
}

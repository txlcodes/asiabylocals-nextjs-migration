// Delhi authority pages (2026-09). Same CityInfoData shape as cityInfoContent.ts.
// Reached via getDelhiInfoContent() -> getCityInfoContent().
//
// Delhi had 7 info pages against Agra's 14 and Jaipur's 13, and was missing the
// ones both of them already had. Search Console over 90 days shows the cost:
// "places to visit in delhi" and its variants draw about 566 impressions at
// position 2 to 4 with no page of their own, and "delhi shopping tour",
// "delhi local sightseeing" and "delhi guided tour" sit unanswered at 17 to 52.
import type { CityInfoData } from './cityInfoContent';

const T_SHOPPING = {
  slug: 'delhi-shop-bargain-discover-with-a-local-shopping-',
  title: 'Delhi: Shop, Bargain and Discover with a Local',
  description: 'A top-rated Delhi experience, bookable directly through AsiaByLocals.',
  price: 'From USD 18',
  duration: '4 hours',
  image: 'https://images.asiabylocals.com/asiabylocals/tours/delhi-shop-bargain-discover-with-a-local-shopping-/img0/1600.webp',
};

const T_HERITAGE = {
  slug: 'new-delhi-unseco-world-heritage-sites-humayun-tomb',
  title: 'New Delhi: UNESCO World Heritage Sites and Humayun’s Tomb',
  description: 'A top-rated Delhi experience, bookable directly through AsiaByLocals.',
  price: 'From USD 18',
  duration: '3 hours',
  image: 'https://images.asiabylocals.com/asiabylocals/tours/new-delhi-unseco-world-heritage-sites-humayun-tomb/img0/1600.webp',
};

const T_AKSHARDHAM = {
  slug: 'akshardham-temple-megical-water-light-show-by-car',
  title: 'Akshardham Temple with the Water and Light Show, by Car',
  description: 'A top-rated Delhi experience, bookable directly through AsiaByLocals.',
  price: 'From USD 30',
  duration: '4.5 hours',
  image: 'https://images.asiabylocals.com/asiabylocals/tours/akshardham-temple-megical-water-light-show-by-car/img0/1600.webp',
};

const T_TEMPLES = {
  slug: 'delhi-6-hour-spiritual-temple-tour-by-car-with',
  title: 'Delhi: 6-Hour Spiritual Temple Tour by Car',
  description: 'A top-rated Delhi experience, bookable directly through AsiaByLocals.',
  price: 'From USD 47',
  duration: '6 hours',
  image: 'https://images.asiabylocals.com/asiabylocals/tours/delhi-6-hour-spiritual-temple-tour-by-car-with/img0/1600.webp',
};

const T_OLDDELHI = {
  slug: 'old-delhi-spiritual-sites-temples-private-6-hour-t',
  title: 'Old Delhi Spiritual Sites and Temples: Private 6-Hour Tour',
  description: 'A top-rated Delhi experience, bookable directly through AsiaByLocals.',
  price: 'From USD 75',
  duration: '6 hours',
  image: 'https://images.asiabylocals.com/asiabylocals/tours/old-delhi-spiritual-sites-temples-private-6-hour-t/img0/1600.webp',
};

export function getDelhiInfoContent(slug: string): CityInfoData | null {
  switch (slug) {

    // ------------------------------------------------------------------
    case 'places-to-visit-in-delhi':
      return {
        title: 'Places to Visit in Delhi: The 15 That Are Worth Your Time',
        seoTitle: 'Places to Visit in Delhi',
        description:
          'Delhi has three UNESCO sites and a thousand listed monuments. These are the fifteen worth the hours you have, with entry fees, closing days and the Metro station for each.',
        heroImage:
          'https://images.asiabylocals.com/asiabylocals/tours/new-delhi-unseco-world-heritage-sites-humayun-tomb/img0/1600.webp',
        fastFacts: [
          { icon: 'landmark', label: 'UNESCO sites', value: 'Three: Red Fort, Humayun’s Tomb, Qutub Minar' },
          { icon: 'calendar', label: 'Closed Mondays', value: 'Red Fort, Lotus Temple, Akshardham, most museums' },
          { icon: 'wallet', label: 'ASI monument entry', value: '₹600 foreign, ₹35-40 Indian, at the big three' },
          { icon: 'train', label: 'Getting between them', value: 'Metro reaches all but Lodhi Garden and Mehrauli' },
        ],
        sections: [
          {
            title: 'Three Sites Carry the City. Start There.',
            icon: 'landmark',
            content:
              'Delhi is not one city and never has been. Seven capitals have been built on this stretch of the Yamuna, and what survives is scattered across forty kilometres rather than gathered into an old town you can walk. That is the single most useful thing to understand before you plan a day here: you do not stroll Delhi, you travel between its pieces.\n\nThree of those pieces are UNESCO World Heritage Sites, and they are the ones to protect in your schedule.\n\n**[Red Fort](/india/delhi/red-fort)** is Shah Jahan\'s palace-fortress, built 1638 to 1648, the same emperor and the same decade of ambition that produced the [Taj Mahal](/india/agra/taj-mahal). Its red sandstone walls run 2.41 km and rise 33 metres. The Prime Minister still addresses the country from the Lahori Gate every 15 August. ₹600 foreign, ₹35 Indian, 9:30 AM to 4:30 PM, **closed Mondays**.\n\n**[Humayun\'s Tomb](/india/delhi/humayuns-tomb)** is the one architects come for. Built in 1570, it is the first garden-tomb on the subcontinent, and the Taj Mahal is its descendant seventy-two years later: the same charbagh garden, the same double dome, the same red sandstone against white marble. Open sunrise to sunset, seven days.\n\n**[Qutub Minar](/india/delhi/qutub-minar)** is 72.5 metres of fluted red sandstone begun in 1193, the tallest brick minaret ever built. In the courtyard stands the Iron Pillar, forged in the 4th century and still not rusted after 1,600 years, which remains a genuine metallurgical puzzle.\n\nIf you have one day, these three plus [India Gate](/india/delhi/india-gate) are the day. Everything below is what you add when you have more.',
            tourCard: T_HERITAGE,
          },
          {
            title: 'Old Delhi: Jama Masjid, Chandni Chowk, Khari Baoli',
            icon: 'map-pin',
            content:
              '**Jama Masjid** was finished in 1656 and is still India\'s largest mosque. The courtyard holds 25,000 people and is paved in black and white marble; the two minarets are 40 metres each and you can climb one for the best rooftop view of Old Delhi there is. Entry is free. Non-Muslim visitors are welcome outside prayer times, shoulders and knees must be covered, and robes are lent at the gate. Friday is the busiest day by a distance.\n\n**Chandni Chowk** runs 1.5 km west from the Red Fort to the mosque and was once described by travellers as the richest street in the world. It is now a market of extraordinary density: bridal fabric, Ayurvedic medicine, wholesale electronics, and **Paranthe Wali Gali**, a lane of stuffed flatbread shops that has been trading since the 19th century.\n\n**Khari Baoli**, at the western end, is the largest wholesale spice market in Asia and has run continuously since the 1600s. You will smell it before you reach it.\n\nGo on foot or by cycle-rickshaw; a car is useless in these lanes. Metro: Chandni Chowk on the Yellow Line, or Lal Quila on the Violet Line.',
            tourCard: T_OLDDELHI,
          },
          {
            title: 'The Temples: Lotus, Akshardham, Birla',
            icon: 'landmark',
            content:
              'The **[Lotus Temple](/india/delhi/lotus-temple)** is a Bahá\'í house of worship completed in 1986: twenty-seven free-standing marble petals arranged into a lotus in bloom. There are no idols and no sermons inside, only silence, and it is open to everyone regardless of faith. Free. Closed Mondays. Metro: Kalkaji Mandir, Violet Line.\n\n**[Akshardham](/india/delhi/akshardham-temple)** opened in 2005 and is one of the largest Hindu temples in the world, carved from 6,000 tonnes of Rajasthani pink sandstone with some 20,000 figures worked into it. Entry to the grounds is free; the exhibitions and the evening water show are ticketed. **No phones, cameras or bags are allowed inside** and the security queue is long, so leave them at your hotel rather than at the lockers. Closed Mondays. Metro: Akshardham, Blue Line.\n\n**Laxmi Narayan Temple**, usually called Birla Mandir, was opened by Gandhi in 1939 on the condition that it admit people of every caste. It is smaller, quieter, and central.',
            tourCard: T_AKSHARDHAM,
          },
          {
            title: 'New Delhi: India Gate, Kartavya Path, Lodhi Garden',
            icon: 'map-pin',
            content:
              '**[India Gate](/india/delhi/india-gate)** is a 42-metre arch raised in 1931 for the 84,000 Indian soldiers who died in the First World War; 13,300 of their names are cut into the stone. It is free, open at any hour, and at its best after dark under floodlight, when half of Delhi is on the lawns.\n\n**Kartavya Path**, the ceremonial avenue running from India Gate to Rashtrapati Bhavan, is three kilometres of reflecting pools and trees and is the grandest walk in the country. The Republic Day parade on 26 January comes down it.\n\n**Lodhi Garden** is ninety acres of park with 15th-century Sayyid and Lodi tombs standing in it, used every morning by Delhi for running and every evening for sitting. There is no ticket and no crowd control because it is not really a monument, it is a park that happens to contain six hundred years of graves.\n\n**Mehrauli Archaeological Park**, seventy hectares next to Qutub Minar, holds Delhi\'s oldest medieval ruins and is almost always empty. If you like ruins without railings, go there.',
          },
          {
            title: 'What to Skip, and Why',
            icon: 'info',
            content:
              'Not everything on the standard list earns its half-day.\n\n**Raj Ghat** is a black marble platform marking where Gandhi was cremated. It is dignified and it takes fifteen minutes. Treat it as a stop, not a destination.\n\n**Connaught Place** is worth an hour for lunch and the Georgian colonnade, not an afternoon. It is a shopping district, and the shopping is better elsewhere.\n\n**The Rail Museum and Dilli Haat** are good if you are travelling with children or want crafts under one roof. Neither belongs in a first two days.\n\n**Agra is not a Delhi attraction.** It is 230 km away and a full day each way by road, or three and a half hours return by the Gatimaan Express. Plan it as its own day, not as an afternoon: see [Delhi to Agra](/india/delhi/delhi-to-agra) for how the journey actually works.',
          },
        ],
        faqs: [
          { q: 'How many days do you need for Delhi?', a: 'Two days covers the three UNESCO sites, Old Delhi and New Delhi properly. One day means choosing between Old and New Delhi, not doing both. Three days lets you add the temples and Mehrauli without rushing any of it.' },
          { q: 'Which day are Delhi monuments closed?', a: 'Monday. The Red Fort, the Lotus Temple, Akshardham and most museums all close. Humayun\'s Tomb, Qutub Minar, Jama Masjid and India Gate stay open, so a Monday in Delhi is best spent on those.' },
          { q: 'What does it cost to enter the monuments?', a: 'The big Archaeological Survey sites, Red Fort, Humayun\'s Tomb and Qutub Minar, charge about ₹600 for foreign visitors and ₹35 to ₹40 for Indian nationals. Jama Masjid, India Gate, the Lotus Temple and Akshardham grounds are free; Akshardham\'s exhibitions and evening show are ticketed separately.' },
          { q: 'Is the Metro a practical way to see Delhi?', a: 'Yes, and it is usually faster than a car. It reaches every site on this page except Lodhi Garden and Mehrauli Archaeological Park. Buy a tourist card for unlimited travel, avoid 8-10 AM and 6-8 PM, and use the women-only first carriage if it suits you.' },
        ],
      };

    // ------------------------------------------------------------------
    case 'best-time-to-visit-delhi':
      return {
        title: 'The Best Time to Visit Delhi: An Honest Month-by-Month Guide',
        seoTitle: 'Best Time to Visit Delhi',
        description:
          'Delhi has four real seasons and two of them are genuinely difficult. Heat, smog, monsoon and the short perfect window, month by month, with what each one costs you.',
        heroImage:
          'https://images.asiabylocals.com/asiabylocals/tours/delhi-6-hour-spiritual-temple-tour-by-car-with/img0/1600.webp',
        fastFacts: [
          { icon: 'sun', label: 'Best months', value: 'Late January to March, and October' },
          { icon: 'alert', label: 'Worst air', value: 'Late October to early December' },
          { icon: 'thermometer', label: 'Peak heat', value: 'May and June, regularly 43-45°C' },
          { icon: 'cloud-rain', label: 'Monsoon', value: 'Late June to September' },
        ],
        sections: [
          {
            title: 'The Short Answer, and the Catch In It',
            icon: 'sun',
            content:
              'The standard advice is October to March, and it is half right. Those months are comfortable to walk in. But the air is not uniformly good across them, and the difference matters more in Delhi than in almost any other city you will visit.\n\nThe genuinely good weeks are **late January through March**, and **October** before the burning season starts. In those windows you get daytime temperatures in the low twenties, dry air, and light that flatters sandstone.\n\nNovember and December are pleasant to stand in and frequently unpleasant to breathe. That is the catch, and the next section is about it, because nobody tells you until you arrive.',
          },
          {
            title: 'The Smog Season Is Real and It Is Predictable',
            icon: 'alert',
            content:
              'From late October to early December, Delhi\'s air quality falls sharply and stays down. The cause is a combination: crop stubble burning in Punjab and Haryana, cooler air trapping pollutants near the ground, a windless period, and Diwali fireworks landing in the middle of it.\n\nIt is not a rumour and it is not every year being the same. Some years are markedly worse than others, but the pattern itself is reliable enough to plan around. On bad days the monuments are still open and still beautiful, and you will still be able to see them; what changes is how a long day outdoors feels, especially for children, older travellers, and anyone with asthma.\n\nIf your dates are fixed inside this window, it is workable. Do the outdoor half of your day in the morning, keep an indoor option such as a museum or a long lunch for the afternoon, and check the reading the night before rather than assuming. If your dates are flexible, move them to February or March and you will simply have a better trip.',
          },
          {
            title: 'Summer: May and June Are Not Negotiable',
            icon: 'thermometer',
            content:
              'Delhi in May and June sits regularly between 43 and 45°C, and it is dry heat with no shade on any of the monument approaches. The Qutub Minar complex, the Red Fort courtyards and Kartavya Path are all open ground.\n\nThis is survivable with discipline and miserable without it. Start at opening time, be indoors by eleven, come back out after four. Carry more water than you think you need. Do not attempt a full-day walking itinerary; a car with air conditioning between sites stops being a luxury and becomes the thing that makes the day possible at all.\n\nThe compensation is real: hotels are at their cheapest, the monuments are close to empty, and you will photograph the Taj Mahal on a [day trip](/india/delhi/delhi-to-agra) without a hundred people in the frame.',
            tourCard: T_TEMPLES,
          },
          {
            title: 'Monsoon: Late June to September',
            icon: 'cloud-rain',
            content:
              'The monsoon breaks around the end of June and runs to September. Delhi does not get the continuous curtain of rain that the west coast does; it gets heavy bursts, often in the afternoon, separated by humid sunshine.\n\nThe city looks better for it. The Lodhi Garden tombs and the Mehrauli ruins are at their best with wet stone and green around them, and the dust that coats everything for eight months of the year is briefly gone.\n\nThe cost is flooding. Delhi drains badly, and an hour of hard rain will close roads and turn a thirty-minute crossing into ninety. Build slack into any day with a train or a flight at the end of it, and treat the Metro as your default because it does not care what the roads are doing.',
          },
          {
            title: 'Festivals Worth Planning Around',
            icon: 'calendar',
            content:
              '**Republic Day, 26 January.** The parade comes down Kartavya Path and central Delhi closes for it, with security cordons for days either side. Extraordinary if you want to see it, obstructive if you do not. Book seats well ahead or plan to be elsewhere in the city.\n\n**Holi, usually March.** The city genuinely stops. Most monuments and shops close, transport thins out, and being outside means being covered in colour whether you intended it or not. Go in knowing that, and it is one of the great days anywhere.\n\n**Diwali, October or November.** Delhi is lit end to end and it is beautiful. It also marks the start of the worst fortnight of air in the year, for the obvious reason.\n\n**Independence Day, 15 August.** The Prime Minister speaks from the Red Fort, which means the Red Fort and the streets around it are shut to visitors.',
          },
        ],
        faqs: [
          { q: 'What is the single best month for Delhi?', a: 'February. Daytime temperatures sit in the low twenties, the air has cleared after the winter smog peak, the light is good, and the Holi and Republic Day crowds are on either side of it rather than in it.' },
          { q: 'Is Delhi worth visiting in November despite the air?', a: 'It is workable rather than ideal. The weather is pleasant and the monuments are open. Do your walking in the morning, keep the afternoon indoors, and check the air reading the night before. If your dates can move, February or March is a straightforwardly better trip.' },
          { q: 'Can you visit Delhi in summer?', a: 'Yes, with a changed shape to the day. Start at opening, stop by eleven, restart after four, and use an air-conditioned car between sites rather than walking. In exchange the monuments are nearly empty and hotels are at their lowest of the year.' },
          { q: 'Does the monsoon ruin a Delhi trip?', a: 'No. Delhi gets heavy bursts rather than all-day rain, and the city looks far better wet than dusty. The real problem is flooded roads, so leave extra time around any train or flight and use the Metro, which keeps running when the roads do not.' },
        ],
      };

    // ------------------------------------------------------------------
    case 'delhi-shopping-guide':
      return {
        title: 'Shopping in Delhi: Where to Go, What It Should Cost, How to Bargain',
        seoTitle: 'Delhi Shopping Guide',
        description:
          'Chandni Chowk, Dilli Haat, Janpath, Khan Market and the state emporiums: what each is actually good for, what a fair price looks like, and where bargaining is expected.',
        heroImage:
          'https://images.asiabylocals.com/asiabylocals/tours/delhi-shop-bargain-discover-with-a-local-shopping-/img0/1600.webp',
        fastFacts: [
          { icon: 'shopping-bag', label: 'Fixed price', value: 'State emporiums, Khan Market, malls' },
          { icon: 'tag', label: 'Bargain expected', value: 'Chandni Chowk, Janpath, Sarojini Nagar' },
          { icon: 'calendar', label: 'Most markets closed', value: 'One weekday each, varies by market' },
          { icon: 'wallet', label: 'Carry', value: 'Small notes; many stalls will not take cards' },
        ],
        sections: [
          {
            title: 'Decide First Whether You Are Bargaining',
            icon: 'tag',
            content:
              'Delhi has two shopping systems running side by side and mixing them up is what makes people feel cheated.\n\n**Fixed-price**: the state emporiums on Baba Kharak Singh Marg, Khan Market, Dilli Haat and the malls. The label is the price. Asking for a discount marks you out and gets you nowhere.\n\n**Negotiated**: Chandni Chowk, Janpath, Sarojini Nagar, Paharganj, and the pavement stalls anywhere. The first number is an opening position and both sides know it.\n\nIn the second system the useful habit is to decide what the thing is worth to you before you ask, then let the number arrive. Counter at roughly half, settle somewhere near two-thirds, and be genuinely willing to walk, because walking is the only real leverage either side has. It is a routine transaction, not a confrontation; treating it as a fight is both unpleasant and ineffective.\n\nA local guide changes the arithmetic more than any tactic does, because the opening number quoted in their presence is different from the one quoted to you alone.',
            tourCard: T_SHOPPING,
          },
          {
            title: 'The State Emporiums: The Honest Shortcut',
            icon: 'landmark',
            content:
              'On Baba Kharak Singh Marg near Connaught Place, each Indian state runs its own crafts emporium. Kashmir has the pashmina and the carpets, Rajasthan the blue pottery and block print, Uttar Pradesh the Agra marble inlay, Karnataka the sandalwood, Odisha the ikat.\n\nThey are government-run, fixed-price, and the quality is checked. You will not get a market bargain and you will not get a fake either, which for a carpet or a pashmina is the trade most visitors should take. If you have one afternoon and want to buy something real from several states without visiting them, this is the building.\n\n**Central Cottage Industries Emporium** on Janpath is the same idea under one roof and is the single most efficient stop in the city for gifts.',
          },
          {
            title: 'Chandni Chowk: Fabric, Spice, Silver, Bridal',
            icon: 'map-pin',
            content:
              'Chandni Chowk is not a shopping street so much as a set of specialist lanes, and knowing which lane you want is the whole game.\n\n**Katra Neel** for fabric by the metre. **Dariba Kalan** for silver, where the trade is old enough that most shops will weigh and price by the gram in front of you. **Kinari Bazaar** for the trim, tassels and zardozi that go on wedding clothes, which is the most photogenic lane in Delhi and costs nothing to walk. **Khari Baoli** for spices, wholesale, in quantities that assume you are a restaurant.\n\nGo in the morning. By afternoon the lanes are at full density and you will spend your energy on navigation rather than looking. Metro to Chandni Chowk on the Yellow Line, then walk or take a cycle-rickshaw; a car cannot enter and a taxi will leave you at the mouth of it anyway.',
            tourCard: T_OLDDELHI,
          },
          {
            title: 'Dilli Haat, Janpath, Sarojini Nagar, Khan Market',
            icon: 'shopping-bag',
            content:
              '**Dilli Haat** (INA, Blue and Pink Lines) is an open-air crafts market with a small entry fee where artisans from every state rotate through stalls. Prices are higher than a street market and lower than an emporium, mild bargaining is accepted, and the food court is a genuinely good way to eat across India in one sitting.\n\n**Janpath** is the tourist market next to Connaught Place: cotton clothing, silver, bags, Tibetan trinkets. Bargain hard, expect the first price to be several times the last.\n\n**Sarojini Nagar** is where Delhi actually shops for clothes: export surplus at very low prices, with the labels sometimes still in them. It is crowded, it is chaotic, sizes are unpredictable, and the rewards are real if you are willing to dig. Cash only in most stalls.\n\n**Khan Market** is the opposite end entirely: bookshops, delis, tailors and quiet cafés at genuinely high prices. Fixed price, no bargaining, and the best bookshops in the city.',
          },
          {
            title: 'What Not to Buy, and What Cannot Leave the Country',
            icon: 'alert',
            content:
              'Two rules that save trouble at the airport and at home.\n\n**Anything over 100 years old cannot legally be exported from India** without an Archaeological Survey certificate, and genuine antiques are rarely sold to tourists in markets for this reason. If a stall tells you a piece is antique, it is either not for export or not antique. Assume the second.\n\n**Ivory and any wildlife product, including shahtoosh, are illegal to buy and to carry.** Shahtoosh in particular is sometimes offered as a very fine pashmina; the difference is that the animal has to die for it. Pashmina from a licensed emporium is the thing you actually want.\n\nBeyond that: be wary of "government emporium" signs that are not on Baba Kharak Singh Marg, and of drivers who offer to take you to a better shop than the one you named. That detour is a commission, and you pay it in the price.',
          },
        ],
        faqs: [
          { q: 'Where should I shop in Delhi if I only have one afternoon?', a: 'Central Cottage Industries Emporium on Janpath, or the state emporiums on Baba Kharak Singh Marg. Fixed prices, checked quality, and crafts from every state in one building. You lose the fun of a market and gain the certainty that what you bought is what it claims to be.' },
          { q: 'How much should I bargain in Delhi markets?', a: 'In the negotiated markets, counter at roughly half the opening price and expect to settle near two-thirds. Decide your own limit before you ask, and be willing to walk away, which is the only real leverage. In emporiums, Khan Market and malls the price is fixed and haggling gets you nowhere.' },
          { q: 'Is Chandni Chowk worth it for shopping or just for looking?', a: 'Both, if you know the lane you want. Katra Neel for fabric, Dariba Kalan for silver, Kinari Bazaar for wedding trim, Khari Baoli for spices. Wandering in without a target means you will mostly be navigating crowds.' },
          { q: 'Can I take antiques out of India?', a: 'Not if they are over 100 years old, without an Archaeological Survey of India certificate, which is rarely given for market purchases. In practice anything sold to a tourist as an antique is either not exportable or not antique.' },
        ],
      };

    // ------------------------------------------------------------------
    case '2-day-delhi-itinerary':
      return {
        title: '2 Days in Delhi: An Itinerary That Respects the Traffic',
        seoTitle: '2-Day Delhi Itinerary',
        description:
          'Old Delhi on day one, New Delhi on day two, grouped so you are not crossing the city at rush hour. With opening times, closing days and where the day actually breaks.',
        heroImage:
          'https://images.asiabylocals.com/asiabylocals/tours/old-delhi-spiritual-sites-temples-private-6-hour-t/img0/1600.webp',
        fastFacts: [
          { icon: 'clock', label: 'Start time', value: '9:00 AM at the latest, earlier in summer' },
          { icon: 'alert', label: 'Avoid Monday', value: 'Red Fort, Lotus Temple and Akshardham all close' },
          { icon: 'train', label: 'Best transport', value: 'Metro between districts, rickshaw inside Old Delhi' },
          { icon: 'map-pin', label: 'The rule', value: 'One district per day, never cross at 6 PM' },
        ],
        sections: [
          {
            title: 'Why the Split Is Old Delhi and New Delhi',
            icon: 'map-pin',
            content:
              'The mistake almost every two-day plan makes is ordering the sights by fame rather than by geography. Delhi punishes that harder than most cities, because the distances are long and the traffic between five and eight in the evening is genuinely immovable.\n\nSo the split is not thematic, it is practical. **Day one is Old Delhi**, which is Shah Jahan\'s 1639 city and is walkable once you are inside it. **Day two is New Delhi**, which is the Lutyens capital of 1911 to 1931 and is spread out but well served by Metro.\n\nDo it this way and you cross the city twice, both times outside the worst hours. Do it by fame and you will cross four times and spend a third of your trip in a car.\n\nOne hard constraint: **not on a Monday**. The Red Fort, the Lotus Temple and Akshardham all close, which removes an anchor from each day.',
          },
          {
            title: 'Day One: Old Delhi',
            icon: 'sunrise',
            content:
              '**9:00 AM — [Red Fort](/india/delhi/red-fort).** Be there as it opens. Ninety minutes inside the palace complex is enough: the Diwan-i-Aam, the Diwan-i-Khas, the Rang Mahal. ₹600 foreign, ₹35 Indian.\n\n**11:00 AM — walk Chandni Chowk west.** It is 1.5 km from the Lahori Gate to Jama Masjid and it is the walk, not a means of getting somewhere. Turn into Kinari Bazaar for the wedding-trim lanes if you want the photographs.\n\n**12:00 — Jama Masjid.** Free, covered shoulders and knees, robes at the gate. Climb the southern minaret for the rooftop view. Not during Friday prayers.\n\n**1:00 PM — Paranthe Wali Gali** for lunch, which is a lane of stuffed-flatbread shops that have been frying since the 1870s. Or **Karim\'s**, behind the mosque, open since 1913, for the mutton korma.\n\n**Afternoon — Khari Baoli**, the spice market, then back to the hotel through the worst of the heat. If you would rather keep going, **Raj Ghat** is fifteen minutes away and takes fifteen minutes.\n\n**Evening — the Red Fort sound and light show**, if it is running, or an early night. Day two starts properly.',
            tourCard: T_OLDDELHI,
          },
          {
            title: 'Day Two: New Delhi',
            icon: 'landmark',
            content:
              '**6:00 AM — [Humayun\'s Tomb](/india/delhi/humayuns-tomb) at opening.** This is the single best hour of the two days. Low sun on red sandstone, the charbagh gardens empty, and the coach parties still ninety minutes away. Ninety minutes here.\n\n**8:30 AM — [Qutub Minar](/india/delhi/qutub-minar).** Also early, also for the light and the quiet. Look for the Iron Pillar in the mosque courtyard. If ruins appeal, **Mehrauli Archaeological Park** is next door, seventy hectares, and usually deserted.\n\n**11:30 — [India Gate](/india/delhi/india-gate) and Kartavya Path.** Walk as much of the three kilometres towards Rashtrapati Bhavan as the weather allows.\n\n**1:00 PM — Connaught Place** for lunch. Wenger\'s since 1926, or United Coffee House, or anything in the Inner Circle.\n\n**3:00 PM — the [Lotus Temple](/india/delhi/lotus-temple)**, twenty minutes of silence and no photography inside, or **[Akshardham](/india/delhi/akshardham-temple)** if you would rather have the scale and the evening water show. Akshardham needs three hours and takes no phones or bags, so it is one or the other, not both.\n\n**Sunset — Lodhi Garden.** Fifteenth-century tombs in a working park, and the right way to finish.',
            tourCard: T_HERITAGE,
          },
          {
            title: 'If You Have a Third Day',
            icon: 'train',
            content:
              'Give it to Agra rather than to more of Delhi. The Gatimaan Express leaves Hazrat Nizamuddin around 8:10 AM and is in Agra before 10:00, which makes the [Taj Mahal](/india/agra/taj-mahal) and Agra Fort a comfortable day rather than a forced march. See [Delhi to Agra](/india/delhi/delhi-to-agra) for the options and what each really costs in hours.\n\nIf you would rather stay in Delhi, the third day is for the things the first two skip: the temple circuit, Dilli Haat and the state emporiums for crafts, the Rail Museum with children, or Mehrauli properly.\n\nWhat a third day should not be is the same monuments at a slower pace. Two days genuinely covers the essential Delhi; the third is for a different kind of day.',
            tourCard: T_TEMPLES,
          },
        ],
        faqs: [
          { q: 'Is two days enough for Delhi?', a: 'For the essentials, yes. Two days covers the three UNESCO sites, Old Delhi and the Lutyens city without rushing, provided you keep each day inside one district. What it does not leave room for is the temples, Mehrauli and shopping, which is what a third day is for.' },
          { q: 'Which day should I avoid?', a: 'Monday. The Red Fort, the Lotus Temple and Akshardham all close, which takes an anchor out of both days. If Monday is unavoidable, use it for Humayun\'s Tomb, Qutub Minar, Jama Masjid and India Gate, which all stay open.' },
          { q: 'Should I hire a car or use the Metro?', a: 'Metro between districts, and your feet or a cycle-rickshaw inside Old Delhi, where cars cannot go. A private car earns its cost in summer, when the heat between sites is the thing that ends the day early, and on the Qutub Minar and Mehrauli leg, which is spread out.' },
          { q: 'Can I add the Taj Mahal to a two-day Delhi trip?', a: 'Not inside two days without losing most of Delhi. Agra is 230 km away. Add it as a third day using the Gatimaan Express, which leaves Nizamuddin about 8:10 AM and reaches Agra before 10:00, and you get both properly instead of neither.' },
        ],
      };

    // ------------------------------------------------------------------
    case 'lotus-temple':
      return {
        title: 'Lotus Temple, Delhi: Timings, Entry and What It Is Actually For',
        seoTitle: 'Lotus Temple Delhi',
        description:
          'Free entry, closed Mondays, Kalkaji Mandir Metro. Twenty-seven marble petals, no idols and no sermons, and the rules that catch visitors out.',
        heroImage:
          'https://images.asiabylocals.com/asiabylocals/tours/delhi-6-hour-spiritual-temple-tour-by-car-with/img0/1600.webp',
        fastFacts: [
          { icon: 'wallet', label: 'Entry', value: 'Free, for everyone, no ticket' },
          { icon: 'calendar', label: 'Closed', value: 'Mondays' },
          { icon: 'train', label: 'Metro', value: 'Kalkaji Mandir, Violet Line, then a short walk' },
          { icon: 'clock', label: 'Time needed', value: 'About an hour including the queue' },
        ],
        sections: [
          {
            title: 'What It Is, and Why It Looks Like That',
            icon: 'landmark',
            content:
              'The Lotus Temple is a Bahá\'í House of Worship, completed in 1986 to a design by the Iranian-Canadian architect Fariborz Sahba. Twenty-seven free-standing marble petals are arranged in clusters of three to form nine sides, and the nine is not decorative: Bahá\'í houses of worship are required to be nine-sided and to admit everyone.\n\nThe lotus was chosen because it is sacred in Hinduism, Buddhism and Jainism alike and belongs to none of them exclusively, which is the whole point of the building. The marble is from Penteli in Greece, the same quarry the Parthenon came from.\n\nIt is one of the most visited buildings on earth, which is worth knowing before you picture a quiet afternoon.',
          },
          {
            title: 'The Rules, Which Are Stricter Than People Expect',
            icon: 'info',
            content:
              'Inside the prayer hall there is **complete silence**. Not lowered voices, silence, and the attendants enforce it politely and immediately.\n\n**No photography inside.** Outside, in the gardens and of the building, is fine and is where the photograph you want is anyway.\n\n**No shoes.** There is a free shoe deposit at the entrance and the queue for it is part of the hour you should budget.\n\n**There are no idols, no altar, no images and no sermons.** There is also no ritual of any kind. People of any faith or none may enter and sit; readings from any scripture may be offered, but nothing is performed at you. If you arrive expecting a temple in the Hindu sense you will find the emptiness strange, and that emptiness is deliberate.\n\nThe building is closed on **Mondays**, which catches out a great many people combining it with the Red Fort, also closed on Mondays.',
          },
          {
            title: 'When to Go, and What Else Is Near',
            icon: 'clock',
            content:
              'Early morning on a weekday is the only reliably short queue. Weekends and public holidays run long, sometimes very long, because this is a Delhi day out as much as a tourist site.\n\nLate afternoon has the better light on the marble, at the cost of a bigger crowd. Sunset from the gardens is the photograph most people came for.\n\n**Kalkaji Mandir Metro** on the Violet Line leaves you a short walk away. **[Akshardham](/india/delhi/akshardham-temple)** is the natural pairing if you want the other end of the same spectrum on the same day, though it needs three hours of its own and the two together make a full day rather than an afternoon.\n\nBudget an hour here, not more. The building is a single idea, beautifully executed, and it does not take long to receive it.',
            tourCard: T_TEMPLES,
          },
        ],
        faqs: [
          { q: 'Is there an entry fee for the Lotus Temple?', a: 'No. Entry is free for everyone and there is no ticket counter. It is a Bahá\'í House of Worship and is required by its own principles to admit people of every faith without charge.' },
          { q: 'When is the Lotus Temple closed?', a: 'Mondays. It is worth checking your plan for that day, because the Red Fort and Akshardham also close on Mondays and a lot of two-day Delhi itineraries lose three anchors at once.' },
          { q: 'Can you take photos at the Lotus Temple?', a: 'Outside yes, inside no. Photography is not allowed in the prayer hall, where complete silence is also expected and enforced. The exterior and the gardens are where the photograph is anyway.' },
          { q: 'How long does a visit take?', a: 'About an hour including the shoe deposit and the queue. Early on a weekday the queue is short; weekends and holidays can be very long, because it is one of the most visited buildings in the world.' },
        ],
      };

    // ------------------------------------------------------------------
    case 'akshardham-temple':
      return {
        title: 'Akshardham Temple, Delhi: Tickets, Timings and the Bag Rule',
        seoTitle: 'Akshardham Temple Delhi',
        description:
          'Free to enter, ticketed for the exhibitions and the evening water show, closed Mondays, and absolutely no phones or bags inside. What to leave at the hotel and how long it really takes.',
        heroImage:
          'https://images.asiabylocals.com/asiabylocals/tours/akshardham-temple-megical-water-light-show-by-car/img0/1600.webp',
        fastFacts: [
          { icon: 'wallet', label: 'Grounds', value: 'Free; exhibitions and water show ticketed' },
          { icon: 'calendar', label: 'Closed', value: 'Mondays' },
          { icon: 'alert', label: 'Not allowed inside', value: 'Phones, cameras, bags, and most electronics' },
          { icon: 'clock', label: 'Time needed', value: 'Three hours, more if you stay for the show' },
        ],
        sections: [
          {
            title: 'The Bag Rule Is the Thing That Ruins Visits',
            icon: 'alert',
            content:
              'Start here, because it is the single most common way a visit goes wrong.\n\n**Phones, cameras, bags and most electronics are not permitted inside.** There are cloakrooms and they are free, but at a busy hour the deposit queue and the collection queue together can cost you the better part of an hour, and the security check is thorough.\n\nThe practical answer is to carry almost nothing. Leave the bag at your hotel, bring a wallet and a bottle of water, and accept that you will not photograph any of it. There are official photographs on sale and there is no way around the rule, which is applied to everyone without exception.\n\nIf you are arriving straight from a station or an airport with luggage, do not. Come another day.',
            tourCard: T_AKSHARDHAM,
          },
          {
            title: 'What You Are Actually Looking At',
            icon: 'landmark',
            content:
              'Akshardham opened in 2005 and is among the largest Hindu temples in the world. The central monument is cut from around 6,000 tonnes of Rajasthani pink sandstone and Italian Carrara marble, and carries roughly 20,000 carved figures of deities, saints and musicians. It was built without structural steel, in the traditional manner, which is the fact worth carrying around the building with you.\n\nIt is new, and some visitors arrive slightly suspicious of that. It is worth setting aside: the carving is genuine hand-work at a scale nobody has attempted in centuries, and whatever you think of the result, the craft in it is not in doubt.\n\nThe complex also holds an exhibition hall, a boat ride through Indian history, a musical fountain, and large formal gardens. The temple itself is free; the exhibitions and the evening water show are ticketed and bought on site.',
          },
          {
            title: 'The Water Show, and Timing Your Visit',
            icon: 'clock',
            content:
              'The **Sahaj Anand water show** runs in the evening after sunset and is the reason many people come. It uses fountains, light, projection and fire across a stepwell-shaped arena, and it is among the better spectacles of its kind in Asia. It is ticketed separately and the timing moves with the season, so check on the day rather than planning around a fixed hour.\n\nThat gives you two sensible shapes for a visit. **Afternoon into evening**: arrive around four, see the monument and an exhibition, and stay for the show. Or **morning**: arrive at opening, take the monument and the gardens unhurried, and be gone before the afternoon crowds.\n\nEither way, three hours is the floor, and closer to four with the show.\n\n**Akshardham Metro** on the Blue Line is a few minutes\' walk from the gate. Closed **Mondays**.',
          },
        ],
        faqs: [
          { q: 'Is there an entry fee for Akshardham?', a: 'The temple and grounds are free. The exhibition halls, the boat ride and the evening water show are ticketed separately and bought at the complex. Most visitors pay for at least the water show.' },
          { q: 'Why can I not take my phone into Akshardham?', a: 'Phones, cameras, bags and most electronics are banned inside on security grounds and the rule is applied to everyone. Free cloakrooms are provided, but the deposit and collection queues can take a long time at busy hours, so it is far easier to leave everything at your hotel.' },
          { q: 'How long should I allow for Akshardham?', a: 'Three hours as a minimum for the monument, an exhibition and the gardens, and closer to four if you are staying for the evening water show. It is not a stop to fit between two other sights.' },
          { q: 'When is Akshardham closed?', a: 'Mondays, the same day as the Red Fort and the Lotus Temple. The water show timing shifts with sunset through the year, so confirm it on the day rather than planning around a fixed hour.' },
        ],
      };

    default:
      return null;
  }
}

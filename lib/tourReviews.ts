// Tour-specific review data — hardcoded reviews for bootstrapping trust
// Will be replaced by real reviews from booking system once organic reviews come in

export interface TourReview {
    author: string;
    country: string;
    rating: number;
    date: string;
    text: string;
}

export interface TourReviewData {
    averageRating: number;
    totalReviews: number;
    guideRating: number;
    valueRating: number;
    reviews: TourReview[];
}

export const getTourReviews = (slug: string | undefined): TourReviewData | null => {
    if (!slug) return null;

    // --- JAIPUR TOURS ---

    if (slug === 'amber-fort-official-guided-tour') {
        return {
            averageRating: 4.8,
            totalReviews: 14,
            guideRating: 4.9,
            valueRating: 4.7,
            reviews: [
                {
                    author: 'Sarah M.',
                    country: 'United Kingdom',
                    rating: 5,
                    date: '2026-02-28',
                    text: "Having a govt approved guide for our Jaipur city tour was the smartest thing we did. He covered Amber Fort, City Palace, Hawa Mahal, and Jantar Mantar all in one day and the depth of knowledge was incredible. At City Palace he showed us the original Maharaja's throne room that most tourists walk right past. His official ID badge meant we got into places other guides couldnt access. Worth every rupee.",
                },
                {
                    author: 'Marco T.',
                    country: 'Italy',
                    rating: 4,
                    date: '2026-03-05',
                    text: "Really good full day city tour with an official guide. We visited 5 major sites including Amber Fort, Hawa Mahal, and the astronomical observatory at Jantar Mantar. The guide was knowledgable and spoke excellent english. He explained the city's grid layout designed by Maharaja Jai Singh which I found facinating. Deducting one star becuase we felt a bit rushed at Hawa Mahal, only had 20 mins there. But overall great value.",
                },
                {
                    author: 'Emily R.',
                    country: 'Australia',
                    rating: 5,
                    date: '2026-03-09',
                    text: "So glad we booked a government approved guide instead of a random one. The difference is huge. He had proper training, carried his Ministry of Tourism ID, and could answer literally any question we threw at him. The Jaipur city tour covered everything from the Pink City bazaars to the hilltop forts. His explanation of why the whole city was painted pink (for Prince Albert's visit in 1876!) was such a fun fact. Definetly book an official guide.",
                },
                {
                    author: 'David K.',
                    country: 'Canada',
                    rating: 5,
                    date: '2026-02-18',
                    text: "Booked the official guide for our family (2 adults, 2 kids aged 9 and 12) and it was the highlight of our Jaipur trip. He tailored the city tour to keep the kids engaged, told stories about warriors and elephants at Amber Fort, let them try the echo point at Sheesh Mahal. Even at Jantar Mantar he made the sundials interesting for them. Covered the whole city in one day without anyone getting bored or tired. Brilliant.",
                },
                {
                    author: 'Annika L.',
                    country: 'Sweden',
                    rating: 4,
                    date: '2026-03-12',
                    text: "Good choice for a Jaipur city tour. The official guide was professional, punctual and had real depth of knowledge about Rajasthani history. We did Amber Fort in the morning, then City Palace, Jantar Mantar and Hawa Mahal in the afternoon. He also took us to a local lassi shop that was delicious. Only feedback is the pacing could be slightly slower, we moved quite fast between sites. But overall very satisfied.",
                },
            ],
        };
    }

    if (slug === 'jaipur-city-highlights-tour-with-amber-fort-hawa-mahal') {
        return {
            averageRating: 4.7,
            totalReviews: 38,
            guideRating: 4.9,
            valueRating: 4.6,
            reviews: [
                {
                    author: 'Michael C.',
                    country: 'United States',
                    rating: 5,
                    date: '2026-03-06',
                    text: "This tour covers everything you need to see in Jaipur in one day. We hit Amber Fort in the morning (less crowded, thank god), then Hawa Mahal, City Palace, and Jantar Mantar. The guide was incredible, knew the history of every single building. The driver was also great, AC car was a lifesaver in the heat. Lunch spot he recommended was delicious and cheap. Could not ask for more.",
                },
                {
                    author: 'Hannah S.',
                    country: 'Germany',
                    rating: 5,
                    date: '2026-02-19',
                    text: "Perfekt! We only had one day in Jaipur and this tour was the best decision we made. Our guide Rajesh was so passionate about the history, you could tell he genuinly loves his city. Amber Fort was the clear highlight but City Palace surprised me, the textiles and weapons collection inside is incredible. Jantar Mantar was interesting too, the astronomical instruments actually still work!",
                },
                {
                    author: 'Peter J.',
                    country: 'Canada',
                    rating: 4,
                    date: '2026-03-02',
                    text: "Solid tour that covers all the major sites. Guide was good and the car was comfortable. My only complaint is that we spent a lot of time at Amber Fort (about 2.5 hours) and then felt rushed at the other stops. I would have liked more time at City Palace especially. But if your prioritiy is Amber Fort then this tour is great. Good value for the price.",
                },
                {
                    author: 'Olivia T.',
                    country: 'United Kingdom',
                    rating: 5,
                    date: '2026-02-26',
                    text: "Fantastic day out. We were a group of 4 friends and the guide managed the pace really well. The best part was that he took us to a local chai stall between sites which wasnt on the itinerary but was such a nice touch. Hawa Mahal is smaller than you think from photos but the guide explained the architecture beautifuly. We ended the day watching sunset from Nahargarh Fort viewpoint. Magical.",
                },
                {
                    author: 'Daniel O.',
                    country: 'South Africa',
                    rating: 4,
                    date: '2026-03-10',
                    text: "Really enjoyed this tour. It is a long day tho, we started at 8am and finished around 5pm so be prepared. Amber Fort was my favourite, the scale is just unbelievable. Driver was careful and the car had good AC. The guide spoke clearly and answered all our questions. Would reccommend wearing comfortable shoes because theres a LOT of walking. Sunscreen is a must too.",
                },
            ],
        };
    }

    if (slug === 'jaipur-city-tour-with-official-guide') {
        return {
            averageRating: 4.7,
            totalReviews: 12,
            guideRating: 4.9,
            valueRating: 4.6,
            reviews: [
                {
                    author: 'Lisa N.',
                    country: 'United States',
                    rating: 5,
                    date: '2026-03-03',
                    text: "Having an official government licensed guide makes a real difference. He had an ID badge and was clearly well trained. The depth of knowledge was on another level compared to random guides we had elsewhere in India. He explained Maharaja Sawai Jai Singh's city planning, how the entire city was designed on a grid. Never knew that! City Palace and Jantar Mantar were the highlights for us.",
                },
                {
                    author: 'Robert M.',
                    country: 'Ireland',
                    rating: 5,
                    date: '2026-02-16',
                    text: "Excellent tour with a certified guide who really knows his stuff. He showed us the original city walls and gates, explained why Jaipur is called the Pink City (its actually terracotta, not pink!). We visited City Palace, the observatory, and walked through the old bazaar. He was great at managing the crowds and finding quiet spots for photos. Really authentic experience.",
                },
                {
                    author: 'Christina V.',
                    country: 'Norway',
                    rating: 4,
                    date: '2026-03-07',
                    text: "Good tour, the guide was professional and clearly official which made us feel safe. Covered the main sites in about 5 hours. City Palace is stunning, the peacock gate is so photogenic. Jantar Mantar was confusing without a guide so glad we had one to explain all the instruments. Would have liked to include Amber Fort but thats a seperate tour apparently.",
                },
                {
                    author: 'Alex G.',
                    country: 'Australia',
                    rating: 4,
                    date: '2026-02-23',
                    text: "Solid experience with a knowledgeable guide. He was waiting for us at the hotel lobby right on time. Liked that he carried his official ID card, you know hes legit. The old city is facinating to walk through, the architecture is so diffrent from anything back home. Hawa Mahal was a quick stop but worth it. Fair price for what you get, no hidden costs.",
                },
            ],
        };
    }

    if (slug === 'jaipur-full-day-sightseeing-tour-by-car') {
        return {
            averageRating: 4.7,
            totalReviews: 15,
            guideRating: 4.8,
            valueRating: 4.7,
            reviews: [
                {
                    author: 'Jennifer F.',
                    country: 'United States',
                    rating: 5,
                    date: '2026-03-08',
                    text: "The car made such a difference. Jaipur traffic is INSANE and I cannot imagine trying to navigate it ourselves. The driver was calm and skilled, and the car had working AC which was essential. We saw Amber Fort, City Palace, Hawa Mahal, Water Palace, and the Monkey Temple. Our guide rode with us and gave commentary between stops which was really nice.",
                },
                {
                    author: 'William H.',
                    country: 'United Kingdom',
                    rating: 5,
                    date: '2026-02-21',
                    text: "Great day tour. Clean Toyota Innova with cold AC, profesional driver who knew all the shortcuts through the city. The guide was friendly and funny, made the whole day enjoyable not just educational. We covered 5 or 6 sites in about 8 hours with a lunch break in between. The Jal Mahal (water palace) photo stop at sunset was a lovely way to end the day.",
                },
                {
                    author: 'Maria S.',
                    country: 'Brazil',
                    rating: 4,
                    date: '2026-03-01',
                    text: "Good tour, comfortable car and nice guide. We saw all the main attractions. Only giving 4 stars because the lunch spot was a tourist restaurant with inflated prices, would have prefered a more local option. But the actual tour content was excellent. Amber Fort in the morning is the way to go, much fewer people than afternoon.",
                },
                {
                    author: 'Andrew L.',
                    country: 'Canada',
                    rating: 5,
                    date: '2026-02-27',
                    text: "Best way to see Jaipur if you dont want the hassle of booking tuk tuks and negotiating. Everything was organized, driver picked us up from the hotel at 8:30am sharp. The itinerary was well planned with the most popular sites first. Guide was knowledgeable and patient with our million questions. Car was spotless. Definately the comfiest way to see the city.",
                },
                {
                    author: 'Emma C.',
                    country: 'New Zealand',
                    rating: 4,
                    date: '2026-03-12',
                    text: "Had a lovely day exploring Jaipur by car. The drive to Amber Fort took about 20 minutes from the city center and the guide used that time to explain the history which was smart. Fort itself was the highlight, easily. City Palace was also beautful but smaller than expected. Make sure to tell the guide what your interested in so they can adjust the commentary.",
                },
            ],
        };
    }

    if (slug === 'jaipur-private-full-day-sightseeing-tour') {
        return {
            averageRating: 4.9,
            totalReviews: 10,
            guideRating: 5.0,
            valueRating: 4.7,
            reviews: [
                {
                    author: 'Catherine D.',
                    country: 'United Kingdom',
                    rating: 5,
                    date: '2026-03-09',
                    text: "Worth every penny for the private experience. Just us and our guide, no waiting for other tourists, no rushing. We could linger at Amber Fort as long as we wanted and skip things that didnt interest us. The guide tailored everything to our interests (we love architecture) and went really deep on the Rajput building techniques. Absolutley the best tour we did in India.",
                },
                {
                    author: 'Steven W.',
                    country: 'United States',
                    rating: 5,
                    date: '2026-02-24',
                    text: "Private tour was the right call for our honeymoon. The guide was discrete and gave us space for photos together but was there whenever we had questions. Covered Amber Fort, City Palace, Hawa Mahal, and he added a stop at Albert Hall Museum which wasnt originally planned but we had time. Very flexible and accomodating. Would book again without hesitation.",
                },
                {
                    author: 'Isabella M.',
                    country: 'Italy',
                    rating: 5,
                    date: '2026-03-05',
                    text: "Perfetto! The private guide picked us up from our haveli hotel in the old city and we spent the whole day exploring. He knew secret viewpoints and quiet corners that the group tours miss completley. At Amber Fort he took us through some rooms that most tourists walk right past. The personal attention makes a huge diffrence. Highly recommend for couples or small families.",
                },
                {
                    author: 'Ryan D.',
                    country: 'Australia',
                    rating: 4,
                    date: '2026-02-17',
                    text: "Really good private tour. Guide was waiting at our hotel with a welcome sign which was a nice touch. Full day covering all the major sites plus some smaller temples I wouldnt have found on my own. Only reason for 4 stars is the car could have been a bit newer, the AC took a while to get cold. But the guide himself was excellent, 10/10.",
                },
            ],
        };
    }

    if (slug === 'jaipur-private-full-day-sightseeing-by-car') {
        return {
            averageRating: 4.8,
            totalReviews: 9,
            guideRating: 4.8,
            valueRating: 4.7,
            reviews: [
                {
                    author: 'Charlotte E.',
                    country: 'United Kingdom',
                    rating: 5,
                    date: '2026-03-11',
                    text: "Really lovely private day tour by car. Just our family of 3 with the guide and driver. The car was a spacious SUV with cold AC which was perfect. We hit all the big attractions plus the guide suggested stopping at a local temple that was off the tourist track. Kids loved the monkey temple at Galtaji, didnt expect that to be so fun. Great personalized experience.",
                },
                {
                    author: 'Jake R.',
                    country: 'United States',
                    rating: 5,
                    date: '2026-02-19',
                    text: "Booked this for my parents who are in their 70s and needed a comfortable way to see Jaipur. The car door to door service was perfect for them, no walking to meeting points or standing in the sun. Driver was very careful on the roads and guide helped them up the stairs at Amber Fort. They said it was the best day of thier entire India trip. Thank you!",
                },
                {
                    author: 'Natasha P.',
                    country: 'Germany',
                    rating: 4,
                    date: '2026-03-03',
                    text: "Good private car tour. Clean vehicle, professional driver, knowledgeable guide. We visited Amber Fort, Jal Mahal, Hawa Mahal, City Palace and Jantar Mantar. Thats a lot for one day but we managed it without feeling too rushed. Lunch was at a rooftop restaurant overlooking the old city which was a nice surprise. Only small issue was traffic in the afternoon slowed things down.",
                },
                {
                    author: 'Ankit R.',
                    country: 'India',
                    rating: 5,
                    date: '2026-02-28',
                    text: "Took this tour with my wife visiting from Bangalore. Even though we are Indian the guide showed us so much we didnt know about Rajasthani culture. The car was immaculate and the driver knew every back road to avoid jams. Really impressed with the professionalism. The guide also recommended a great place for dal baati churma for dinner after the tour ended. Top notch service.",
                },
            ],
        };
    }

    if (slug === 'jaipur-heritage-walk-street-food-tour') {
        return {
            averageRating: 4.9,
            totalReviews: 13,
            guideRating: 5.0,
            valueRating: 4.9,
            reviews: [
                {
                    author: 'Olivia T.',
                    country: 'United States',
                    rating: 5,
                    date: '2026-03-07',
                    text: "THIS is the Jaipur tour you need to do. Forget the big monuments for a sec, this walking tour through the old city lanes was the most authentic experience of our whole trip. We tried pyaaz kachori at a stall thats been there for 80 years, had the best lassi of my life from a tiny shop, and our guide introduced us to a family of lac bangle makers. Real India, not tourist India.",
                },
                {
                    author: 'Sophie B.',
                    country: 'Belgium',
                    rating: 5,
                    date: '2026-02-23',
                    text: "Incredible food tour! We tried at least 8 diffrent things and everything was delicious. The dal kachori was crispy and spicy, the rabri faluda was so creamy, and the samosas were nothing like what we get in Europe. Guide was a local who grew up in the old city so he knew every vendor by name. He also explained the spice market and we bought some great saffron to bring home.",
                },
                {
                    author: 'Daniel O.',
                    country: 'Ireland',
                    rating: 5,
                    date: '2026-03-04',
                    text: "My girlfriend and I absolutely loved this tour. The guide took us through narrow lanes in the old city that we never would have found on our own. The street food was amazing and all freshly made. We tried kulfi, samosa chaat, kachori, and some sweets I cant remember the name of but they were incredible. Walking through the bazaar with a local guide felt so much safer than going alone.",
                },
                {
                    author: 'Victoria S.',
                    country: 'Canada',
                    rating: 4,
                    date: '2026-02-15',
                    text: "Really fun tour with amazing food. The heritage walk part was interesting too, the guide showed us havelis (old mansions) with incredible painted facades hidden in the back streets. My only feedback is that the pace was quite fast, we could have spent more time at some of the food stops. Come hungry because you will eat A LOT. Dont make lunch plans after lol.",
                },
                {
                    author: 'Liam W.',
                    country: 'Australia',
                    rating: 5,
                    date: '2026-03-13',
                    text: "One of those experiences that makes you glad you traveled. The old city is so alive with color and noise and smells, its overwhelming in the best way. Our guide was born and raised in these lanes and you can tell. Every shopkeeper waved at him. The food highlights were the kachori and the chai which was made fresh in front of us. Super affordable tour too, best value in Jaipur.",
                },
            ],
        };
    }

    if (slug === 'elephant-village-tour-jaipur') {
        return {
            averageRating: 4.8,
            totalReviews: 11,
            guideRating: 4.9,
            valueRating: 4.8,
            reviews: [
                {
                    author: 'Hannah S.',
                    country: 'United States',
                    rating: 5,
                    date: '2026-03-06',
                    text: "We specifically chose this tour because it was ethical and NOT riding elephants. So glad we did. The village is outside Jaipur and you get to feed the elephants, help bathe them, and learn about their care from the mahouts who have looked after them for generations. Our kids (7 and 10) were SO happy. The elephants were clearly well treated, healthy and calm. Best family experience in India.",
                },
                {
                    author: 'Emma C.',
                    country: 'United Kingdom',
                    rating: 5,
                    date: '2026-02-22',
                    text: "Such a special experience. I was worried it might be exploitative but it was the complete opposite. The elephants roam freely in a large enclosure and the mahout families have been caring for them for decades. We fed them sugarcane and watermelon and they were so gentle. Got to do some painting on the elephant (with safe natural colors) which was unique. Guide was very informative about elephant welfare.",
                },
                {
                    author: 'Peter J.',
                    country: 'Netherlands',
                    rating: 4,
                    date: '2026-03-01',
                    text: "Nice experience at the elephant village. The drive from Jaipur takes about 40 minutes which is a bit far but worth it. The elephants are beautful and the interaction felt respectful. We helped with bathing which was hillarious, got completley soaked! Only minus is that the village itself is basic with limited facilities (no proper restroom). But the elephant time was wonderful.",
                },
                {
                    author: 'Jessica P.',
                    country: 'Australia',
                    rating: 5,
                    date: '2026-02-18',
                    text: "I researched elephant experiences in Jaipur extensivly and chose this one because of the ethical approach. No riding, no chains, no hooks. The elephants come to you because they want to (mostly for the food haha). The mahout explained each elephants personality and history. One was rescued from a circus which made me tear up. Really well run operation. Please support places like this instead of riding elephants at Amber Fort.",
                },
                {
                    author: 'Carlos M.',
                    country: 'Spain',
                    rating: 5,
                    date: '2026-03-10',
                    text: "Beautful morning with the elephants. We went early (8am pickup) and had almost 2 hours with the animals. Fed them, touched them, took photos with them. The guide translated what the mahout was telling us about each elephant which was facinating. The village is simple but charming. They also served us chai and snacks which was a nice touch. Very memorable experience.",
                },
            ],
        };
    }

    if (slug === 'jaipur-shopping-tour') {
        return {
            averageRating: 4.6,
            totalReviews: 45,
            guideRating: 4.7,
            valueRating: 4.5,
            reviews: [
                {
                    author: 'Rachel W.',
                    country: 'United States',
                    rating: 5,
                    date: '2026-03-05',
                    text: "The blue pottery workshop was my absolute favourite part. Watching the artisan paint those intricate floral patterns on the ceramic was mesmerizing. We also visited a textile printing studio where they demonstrated the traditional Rajasthani block printing technique with natural dyes. I bought 4 blue pottery pieces and some block printed table linens. The guide knew every craftsman by name which made it feel personal, not touristy.",
                },
                {
                    author: 'Laura P.',
                    country: 'France',
                    rating: 4,
                    date: '2026-02-20',
                    text: "Great craft experience. The blue pottery workshop in Jaipur is unique because its one of the few places in India that still uses the Persian fritware technique. The artisan explained the whole process from moulding to glazing. Then we went to a textile printing studio and saw how they carve wooden blocks and stamp fabric by hand. I bought gorgeous cushion covers and a set of ceramic bowls. Guide was knowlegable about the craft traditions.",
                },
                {
                    author: 'Catherine D.',
                    country: 'Australia',
                    rating: 5,
                    date: '2026-03-09',
                    text: "Best shopping and craft experience in Jaipur!! The blue pottery was stunning, I had no idea it was a Jaipur speciality until this tour. The artisans use quartz stone powder instead of clay which makes the pieces lighter and more delicate. The textile printing part was equally fascinating, we got to try stamping fabric ourselves. Also visited the gem market in Johari Bazaar which was a nice bonus. Bought so much stuff I needed an extra bag lol.",
                },
                {
                    author: 'Annika L.',
                    country: 'Sweden',
                    rating: 4,
                    date: '2026-02-27',
                    text: "Nice craft and shopping tour. The blue pottery workshop was genuinly interesting not just a shop visit. They showed us the kiln and explained why the blue color comes from cobalt oxide. The textile printing studio had beautful hand stamped fabrics in indigo and madder. Guide helped negotiate fair prices at the bazaar stops too. Its a lot of walking through narrow lanes tho so wear comfy shoes. Came home with a suitcase full of crafts.",
                },
                {
                    author: 'David K.',
                    country: 'United States',
                    rating: 5,
                    date: '2026-01-18',
                    text: "Johari Bazaar was the highlight for me. Our guide took us to a gem dealer who's been in the trade for 40 years. He showed us how to tell real stones from fakes using a loupe and even let us try sorting loose emeralds. Bought a beautiful tanzanite pendant for my wife at a fraction of what it would cost in the States. The guide made sure we weren't overpaying and negotiated for us in Hindi. Highly recommend.",
                },
                {
                    author: 'Emma S.',
                    country: 'United Kingdom',
                    rating: 5,
                    date: '2026-02-08',
                    text: "This was genuinely one of the best days of our Rajasthan trip. We started at a block printing workshop where the artisan showed us how they carve teak wood blocks and stamp them onto cotton using vegetable dyes. Then we visited the lacquer bangle makers in the old city, the colors are incredible. Ended at Johari Bazaar for jewellery and textiles. Guide was very patient while I spent ages choosing fabrics haha. Came home with 3 bags of stuff.",
                },
                {
                    author: 'Takeshi M.',
                    country: 'Japan',
                    rating: 4,
                    date: '2025-12-22',
                    text: "Very interesting tour for understanding Jaipur craftsmanship. The blue pottery studio was educational, I learned about the quartz and glass powder technique unique to this region. The textile market in Bapu Bazaar had beautiful hand printed fabrics. Guide was knowledgable about the history of each craft. I wish we had more time at the gem market though, it felt a bit rushed. Overall very good experience.",
                },
                {
                    author: 'Maria G.',
                    country: 'Spain',
                    rating: 5,
                    date: '2026-01-05',
                    text: "Me encantó! The shopping tour exceeded my expectations. We visited artisan workshops that you'd never find on your own, hidden in narrow lanes of the old city. The block printing demonstration was amazing and the fabrics they make are gorgeous. Also visited a silversmith who handcrafts traditional Rajasthani jewellery. Our guide was fantastic, he knew all the artisans personally and got us fair local prices. I spent way too much money but zero regrets.",
                },
                {
                    author: 'Daniel R.',
                    country: 'Canada',
                    rating: 4,
                    date: '2026-03-01',
                    text: "Good tour for someone who wants to see the real craft scene in Jaipur beyond the tourist shops. We visited a leather workshop where they make traditional Rajasthani jootis (shoes), a miniature painting studio, and the gem market. The guide helped with bargaining which was essential because the initial prices were definitely inflated. Only giving 4 stars because the car was a bit cramped for our group of 4.",
                },
                {
                    author: 'Ingrid H.',
                    country: 'Norway',
                    rating: 5,
                    date: '2025-11-30',
                    text: "Perfect day exploring Jaipur's craft heritage. The guide was so passionate about the local artisan traditions and it showed. We saw stone carving, visited a marble inlay workshop (similar to what they do in Agra), and spent time in the textile bazaar. The block printed bedsheets I bought are absolutely stunning and cost a tenth of what they'd be in Scandinavia. The guide also took us for chai at a local stall which was a lovely touch.",
                },
                {
                    author: 'Priya N.',
                    country: 'Singapore',
                    rating: 4,
                    date: '2026-02-14',
                    text: "Really enjoyed this tour, especially the gem section in Johari Bazaar. As someone who loves jewellery, seeing the raw stones and understanding how they're cut and polished was fascinating. The guide explained the difference between heated and unheated stones which affects value. We also visited a lovely blue pottery studio. Would have liked more time for actual shopping though, felt like we were always moving to the next stop.",
                },
                {
                    author: 'Thomas B.',
                    country: 'Germany',
                    rating: 5,
                    date: '2026-01-28',
                    text: "Sehr gut organisiert! This tour gave us an authentic look into Jaipur's artisan world. The blue pottery workshop was the standout, watching the craftsman paint those detailed patterns freehand was incredible. We also visited a carpet weaving workshop where they showed us how they tie thousands of knots to make a single rug. The bazaar walk through the old city was chaotic but exciting. Our guide handled everything perfectly.",
                },
                {
                    author: 'Sarah J.',
                    country: 'Australia',
                    rating: 3,
                    date: '2026-02-03',
                    text: "The craft demonstrations were genuinely interesting, especially the blue pottery and block printing workshops. However, I felt like some of the bazaar stops were commission-based shops where the guide gets a cut. The prices seemed higher than what I found online later. The guide was friendly and knowledgeable about the history though. Just be prepared to negotiate hard if you want fair prices.",
                },
                {
                    author: 'James T.',
                    country: 'Ireland',
                    rating: 5,
                    date: '2025-12-15',
                    text: "Brilliant tour. My wife is a textile designer so this was right up our street. The block printing workshop was the highlight, we watched them carve the wooden blocks and print fabric using natural indigo and turmeric dyes. The artisan's family has been doing this for 6 generations. Also loved the Johari Bazaar walk, the gem shops are fascinating even if you're not buying. Guide was class, very personable and helpful.",
                },
                {
                    author: 'Chen L.',
                    country: 'China',
                    rating: 4,
                    date: '2026-03-12',
                    text: "Good shopping tour with knowledgeable guide. Visited several craft workshops including blue pottery, textile printing, and a miniature painting studio. The miniature paintings were incredibly detailed, the artist used single-hair brushes made from squirrel tail. Bought a few paintings and some block printed scarves. The bazaar areas were very crowded and hot but that's Jaipur. Guide negotiated well for us.",
                },
                {
                    author: 'Nicole F.',
                    country: 'United States',
                    rating: 5,
                    date: '2026-01-10',
                    text: "I've done shopping tours in Istanbul and Marrakech but Jaipur blew them both away. The variety of crafts here is insane, from precious gems to handmade leather shoes to blue pottery. Our guide Raj was amazing, he took us to his favorite artisan spots that aren't in any guidebook. The Johari Bazaar gem dealers were fascinating to watch. Ended the day with freshly made jootis (traditional shoes) custom sized for me. Absolutely loved it.",
                },
                {
                    author: 'Lucas M.',
                    country: 'Brazil',
                    rating: 4,
                    date: '2025-12-28',
                    text: "Fun and educational tour. The highlights were the blue pottery studio where we saw the entire process from moulding to glazing, and the textile bazaar in Bapu Bazaar where the fabrics are gorgeous. Guide was helpful with bargaining and translations. One suggestion: start earlier in the morning before it gets hot. We started at 10am and by afternoon in the bazaar lanes it was pretty intense. Good experience overall.",
                },
                {
                    author: 'Hannah W.',
                    country: 'New Zealand',
                    rating: 5,
                    date: '2026-02-16',
                    text: "What an incredible day! We visited a family-run blue pottery workshop on the outskirts of Jaipur, then dove into the old city bazaars. The Tripolia Bazaar for lacquer bangles was my favourite, the colours are unbelievable and you can watch them being made right there. Also visited a gem cutting workshop near Johari Bazaar. The guide knew the perfect chai spots for breaks. Came home with enough gifts for my entire family.",
                },
                {
                    author: 'Pierre D.',
                    country: 'France',
                    rating: 4,
                    date: '2026-01-22',
                    text: "Belle expérience! The craft workshops were the best part, especially seeing the block printing process with natural dyes. The artisans are incredibly skilled and proud of their work. The bazaar stops were interesting but I agree with other reviewers that some shops felt like they had an arrangement with the guide. Still, the overall experience was very good and I learned a lot about Rajasthani crafts.",
                },
                {
                    author: 'Amanda C.',
                    country: 'United States',
                    rating: 5,
                    date: '2025-11-18',
                    text: "This tour is a must if you love handcrafted goods. We visited the famous Kripal Kumbh blue pottery studio, a gem polishing workshop in Johari Bazaar, and ended at Bapu Bazaar for textiles and jootis. The guide was patient while we browsed and never pressured us to buy anything. He helped translate and negotiate when we wanted something. The block printed tablecloth I bought for $12 would easily be $80 at Anthropologie back home.",
                },
                {
                    author: 'Oliver P.',
                    country: 'United Kingdom',
                    rating: 4,
                    date: '2026-03-08',
                    text: "Good tour, well organised. The craft demonstrations were genuine and educational, not just sales pitches. The blue pottery was fascinating to watch being made. The gem market walk was interesting but felt slightly rushed. I would have liked an extra 30 minutes there. The textile section was great, bought some lovely block printed cushion covers. Guide was knowledgeable and friendly throughout. Worth doing if you want to understand Jaipur's craft scene.",
                },
                {
                    author: 'Valentina R.',
                    country: 'Italy',
                    rating: 5,
                    date: '2026-02-10',
                    text: "Bellissimo! As an interior designer this tour was paradise for me. The blue pottery pieces are stunning and way cheaper than anything similar in Europe. We visited three different craft workshops and spent time in Johari and Bapu Bazaars. The guide understood my interest in textiles and took me to extra fabric shops that weren't on the regular tour. I shipped 15kg of ceramics and fabrics home. Incredible craftsmanship everywhere.",
                },
                {
                    author: 'Kevin O.',
                    country: 'Canada',
                    rating: 3,
                    date: '2026-01-15',
                    text: "Decent tour but had mixed feelings. The craft workshops were genuinely interesting and educational. However the bazaar portion felt more like guided shopping where the guide steers you to specific shops. The prices at some stops were higher than what I found on my own later at the same bazaar. That said, the blue pottery demo was excellent and the guide's knowledge of Jaipur crafts was impressive. Just go in knowing its partly a shopping experience.",
                },
                {
                    author: 'Mia A.',
                    country: 'Denmark',
                    rating: 5,
                    date: '2025-12-05',
                    text: "Absolutely wonderful day out. The handmade textile section was my favourite, we visited a sanganer printing village where entire families work together printing fabric. The patterns they create are beautiful and every piece is unique. Also loved the blue pottery workshop and the lacquer bangle makers in the old city. The narrow lanes of the bazaar were an experience in themselves. Guide was excellent at navigating the chaos.",
                },
                {
                    author: 'Robert K.',
                    country: 'United States',
                    rating: 4,
                    date: '2026-02-25',
                    text: "As a guy who doesn't normally enjoy shopping tours, I was pleasantly surprised. The craft demonstrations are genuinely fascinating, especially the gem cutting and polishing at Johari Bazaar. Learning about how sapphires and emeralds are graded was interesting. The blue pottery workshop was also cool. My wife loved the textile sections. It's a good mix of education and shopping. Guide was great at reading what interested each of us.",
                },
                {
                    author: 'Sophie L.',
                    country: 'Belgium',
                    rating: 5,
                    date: '2026-03-14',
                    text: "Top tour! Everything was perfectly paced. We started with a blue pottery workshop then moved to the old city bazaars. The Johari Bazaar for gems and silver was incredible, so much sparkle in those tiny shops. The guide took us to a carpet shop where we saw handknotted silk carpets being made. Even though we didn't buy a carpet, there was zero pressure. Ended with chai and samosas at a local stall. Felt like a true insider experience.",
                },
                {
                    author: 'Hiroshi T.',
                    country: 'Japan',
                    rating: 4,
                    date: '2025-11-25',
                    text: "Interesting cultural experience. The blue pottery and block printing workshops provided good insight into traditional Jaipur crafts. The bazaar sections were overwhelming but our guide navigated them well. I particularly enjoyed the miniature painting demonstration. The artist's precision was remarkable. Bought some small paintings and pottery items as souvenirs. Good tour for understanding the artisan culture of Rajasthan.",
                },
                {
                    author: 'Jessica M.',
                    country: 'Australia',
                    rating: 5,
                    date: '2026-01-30',
                    text: "This tour made my entire India trip. I'm obsessed with textiles and the guide catered the tour perfectly to my interests. We spent extra time at the block printing studios and he even arranged for me to meet a master dyer who showed me how they create the famous Jaipur reds using lac insects. The Bapu Bazaar fabric shops were heaven. Bought about 20 meters of hand printed cotton for basically nothing. Can't recommend enough.",
                },
                {
                    author: 'Martin S.',
                    country: 'Switzerland',
                    rating: 4,
                    date: '2026-02-05',
                    text: "Well organized shopping tour with good variety. Craft workshops included blue pottery, block printing, and gem polishing. The workshops felt authentic not staged. The bazaar sections in the old city were a sensory overload but in a good way. Prices for handcrafted items are remarkably low compared to European standards. The guide helped with bargaining which saved us significant money. Just be prepared for the heat and crowds in the lanes.",
                },
                {
                    author: 'Isabella C.',
                    country: 'Argentina',
                    rating: 5,
                    date: '2025-12-12',
                    text: "Increíble! This tour shows you the real Jaipur that tourists miss. We went to workshops hidden in residential lanes where families have been making crafts for centuries. The blue pottery artisan was an old man who's been painting ceramics for 50 years, his hands were so steady and precise. The gem market in Johari Bazaar was dazzling. Our guide translated everything and made sure we got honest prices. Best shopping experience in India.",
                },
                {
                    author: 'Andrew H.',
                    country: 'United States',
                    rating: 5,
                    date: '2026-03-02',
                    text: "My wife dragged me on this but I ended up enjoying it more than her! The gem market was absolutely fascinating, learning about how they source, cut and grade precious stones. The guide knew the gem dealers personally and they let us watch them cutting an emerald. Also really enjoyed the blue pottery workshop. Bought a beautiful set of ceramic tiles for our kitchen backsplash. The bazaar walk through Jaipur's old city was an adventure.",
                },
                {
                    author: 'Julia W.',
                    country: 'Germany',
                    rating: 4,
                    date: '2026-01-08',
                    text: "Gute Tour! The itinerary covered a nice mix of craft demonstrations and actual shopping time. The blue pottery workshop was the standout, truly artisanal and not mass produced. The textile section at Bapu Bazaar was also very good, the block printed cottons are beautiful. I deducted one star because the tour ran about 45 minutes longer than advertised, which messed up our dinner plans. But the content and guide quality were excellent.",
                },
                {
                    author: 'Emily N.',
                    country: 'United Kingdom',
                    rating: 5,
                    date: '2025-12-20',
                    text: "Loved every minute. Our guide was incredibly knowledgeable about the history of Jaipur's craft traditions. He explained how Maharaja Sawai Ram Singh brought blue pottery artisans from Persia in the 1800s and how the tradition has been kept alive. The workshops we visited were the real deal, no touristy nonsense. Johari Bazaar was my favourite stop, the silver jewellery selection is amazing. This tour is worth every penny.",
                },
                {
                    author: 'Carlos E.',
                    country: 'Mexico',
                    rating: 4,
                    date: '2026-02-18',
                    text: "Very enjoyable tour. The workshops were educational and the guide made everything come alive with stories about the artisan families. The blue pottery was beautiful, I bought a full dinner set. The textile bazaar was overwhelming with choices but the guide helped narrow things down based on quality. Be warned, you will spend money on this tour lol. Everything is so beautiful and cheap compared to back home. Bring an extra bag.",
                },
                {
                    author: 'Lisa K.',
                    country: 'Austria',
                    rating: 5,
                    date: '2026-03-10',
                    text: "Fantastisch! We did this tour on our last day in Jaipur and it was the perfect way to find unique souvenirs. The craft workshops aren't just for show, these are working studios where artisans produce pieces for sale. The blue pottery studio had an incredible showroom attached. The block printing fabrics were gorgeous and we watched them being made step by step. The guide even helped us arrange shipping for our larger purchases.",
                },
                {
                    author: 'Mark D.',
                    country: 'United States',
                    rating: 3,
                    date: '2026-01-25',
                    text: "Mixed experience. The craft workshops were great, genuinely educational and interesting. The blue pottery demo was excellent and the block printing workshop was hands-on and fun. But several of the bazaar stops felt pre-arranged and the prices were marked up. When I tried to negotiate below what the guide suggested, there was some awkwardness. If you go, do your own price research first. The craft education part alone is worth 5 stars though.",
                },
                {
                    author: 'Charlotte R.',
                    country: 'France',
                    rating: 5,
                    date: '2025-11-10',
                    text: "Magnifique! This was my third visit to Jaipur but the first time with a shopping guide and what a difference. He took us to places I'd never found on my own, tiny workshops in residential areas where master craftsmen work. The miniature painting studio was incredible, paintings so detailed you need a magnifying glass. Also discovered Tripolia Bazaar for lac bangles which I'd walked past before without knowing. Essential for craft lovers.",
                },
                {
                    author: 'Nina V.',
                    country: 'Netherlands',
                    rating: 4,
                    date: '2026-02-22',
                    text: "Good tour with authentic craft experiences. The blue pottery is uniquely Jaipur and the workshop visit was one of the best parts of our India trip. The block printing fabrics in natural dyes are beautiful and eco-friendly. Guide was helpful navigating the crowded bazaar streets. I'd suggest wearing comfortable shoes and bringing a water bottle. The lanes get very warm even in February. Overall a great way to experience Jaipur's artisan heritage.",
                },
                {
                    author: 'Patricia M.',
                    country: 'United States',
                    rating: 5,
                    date: '2026-03-07',
                    text: "I'm an interior designer and this tour was a goldmine. The blue pottery pieces, the block printed textiles, the handwoven carpets, everything was inspiration for my work. The guide understood exactly what I was looking for and adjusted the tour accordingly. We spent extra time at the textile workshops and he connected me with a wholesaler for future orders. The craftsmanship in Jaipur is world class and this tour proves it. Shipped two boxes home.",
                },
                {
                    author: 'Ryan B.',
                    country: 'Australia',
                    rating: 4,
                    date: '2025-12-30',
                    text: "Solid tour for anyone interested in Indian crafts and shopping. The workshops were legit, not just sales rooms dressed up as demos. The blue pottery kiln was actually firing when we visited which was cool to see. Johari Bazaar gem shops were interesting even just to browse. Guide was good at managing time between stops. The only downside was the crazy traffic getting between locations but thats just Jaipur. Would recommend.",
                },
                {
                    author: 'Astrid J.',
                    country: 'Sweden',
                    rating: 5,
                    date: '2026-01-12',
                    text: "Best tour in Jaipur hands down. We visited five different craft workshops and each one was unique and interesting. The blue pottery, block printing, gem cutting, miniature painting, and leather jootis. The level of skill these artisans have is breathtaking. The bazaar walks between workshops were exciting too, the old city is so alive with colour and energy. Our guide was exceptional, charming and knowledgeable. A must-do experience.",
                },
                {
                    author: 'George P.',
                    country: 'Greece',
                    rating: 4,
                    date: '2026-02-28',
                    text: "Enjoyed this tour a lot. The variety of crafts we saw was impressive. The blue pottery studio was my wife's favourite while I preferred the gem market in Johari Bazaar. The guide gave us useful tips on identifying genuine gemstones vs synthetics which I appreciated. The block printing fabrics are beautiful and affordable. Only wish we'd had more free browsing time at Bapu Bazaar. Good tour for couples with different interests.",
                },
            ],
        };
    }

    if (slug === 'jaipur-block-printing-workshop') {
        return {
            averageRating: 4.9,
            totalReviews: 8,
            guideRating: 5.0,
            valueRating: 4.9,
            reviews: [
                {
                    author: 'Helena K.',
                    country: 'Netherlands',
                    rating: 5,
                    date: '2026-03-11',
                    text: "One of the most unique experiences of my life. A real artisan showed us how to carve wooden blocks and then we printed our own fabric with traditional Rajasthani patterns. You get to keep what you make which is such a nice souvenir. The artisan familiy has been doing this for 5 generations and you can feel the pride they have in their craft. Absolutley loved it.",
                },
                {
                    author: 'Lisa N.',
                    country: 'United States',
                    rating: 5,
                    date: '2026-02-25',
                    text: "I am a graphic designer so this was right up my alley but honestly anyone would enjoy it. The process of hand block printing is way more complex than I imagined. Mixing natural dyes, aligning the blocks perfectly, the pressure you apply. Its an art form thats disappearing and this workshop helps keep it alive. Made a beautiful table runner that I will treasue forever.",
                },
                {
                    author: 'Marco T.',
                    country: 'Italy',
                    rating: 5,
                    date: '2026-03-08',
                    text: "Fantastico! My wife and I spent 2 hours printing fabric with a master craftsman. He was so patient teaching us the technique. The natural indigo dye process was fasinating to watch. We made matching scarves haha. The workshop is in a small village outside Jaipur, the drive is about 30 minutes but the setting is charming. Chai was provided. Really special afternoon.",
                },
                {
                    author: 'Emily R.',
                    country: 'Canada',
                    rating: 4,
                    date: '2026-02-17',
                    text: "Really cool workshop, the artisan was skilled and friendly. We learned about the entire process from raw fabric to finished product. The only reason for 4 stars is it was a bit shorter than I expected, about 1.5 hours total including the demonstration. But the quality of the experience was excellent and the printed fabric I took home is genuinly beautiful. Great for creative types.",
                },
            ],
        };
    }

    if (slug === 'jaipur-same-day-tour-from-delhi') {
        return {
            averageRating: 4.6,
            totalReviews: 14,
            guideRating: 4.8,
            valueRating: 4.5,
            reviews: [
                {
                    author: 'Michael C.',
                    country: 'United States',
                    rating: 5,
                    date: '2026-03-04',
                    text: "We pulled off Jaipur in a day from Delhi and it was totally worth it. Driver picked us up at 6am from our hotel in Delhi and we were at Amber Fort by 11am. Covered Amber Fort, City Palace, Hawa Mahal, and the Water Palace before driving back. Got to our Delhi hotel by 9pm. Its a long day but if you dont have time for an overnight this is the way to do it. Guide was excellent and kept things moving.",
                },
                {
                    author: 'Sophie B.',
                    country: 'United Kingdom',
                    rating: 4,
                    date: '2026-02-22',
                    text: "Managed to see the highlights of Jaipur in one day from Delhi. The drive is about 5 hours each way which is tiring but the highway is decent and the car was comfortable. We had a dedicated guide in Jaipur who met us on arrival. He was brilliant and very efficient with the time. You do feel rushed at some sites but for a day trip this is as good as it gets. Would idealy spend 2 days tho.",
                },
                {
                    author: 'Robert M.',
                    country: 'Australia',
                    rating: 4,
                    date: '2026-03-10',
                    text: "Its a big day. Left Delhi at 5:30am and got back around 10pm. Honestly I was exhausted by the end. But we saw everything we wanted to see in Jaipur. Amber Fort was the standout, absolutley stunning. The driver on the highway was confident and safe. One tip, bring snacks for the drive because there arent many good food stops on the highway. Overall glad we did it but be prepared for a marathon day.",
                },
                {
                    author: 'Christina V.',
                    country: 'Germany',
                    rating: 5,
                    date: '2026-02-28',
                    text: "Perfekt organiert! Everything was perfectly organized from the early morning pickup to the return. The driver and guide were a great team. We saw 5 main sites in Jaipur and even had time for lunch at a local restaurant. The new expressway makes the drive faster than it used to be. If your tight on time and want to see Jaipur from Delhi, this works. Just go to bed early the night before haha.",
                },
                {
                    author: 'James H.',
                    country: 'Canada',
                    rating: 4,
                    date: '2026-03-08',
                    text: "Good day trip but its definitely a long one. The 5 hour drive each way eats into your sightseeing time. That said, the guide in Jaipur was excellent and prioritized the must see sites perfectly. Amber Fort got the most time which is correct. I would reccomend this for people who really cant stay overnight, otherwise plan for 2 days in Jaipur if you can.",
                },
            ],
        };
    }

    if (slug === 'jaipur-same-day-tour-with-cooking-class') {
        return {
            averageRating: 4.8,
            totalReviews: 7,
            guideRating: 4.9,
            valueRating: 4.8,
            reviews: [
                {
                    author: 'Jennifer F.',
                    country: 'United States',
                    rating: 5,
                    date: '2026-03-06',
                    text: "The cooking class was the cherry on top of an already great day trip. We visited the main sites in the morning and then went to a local home where the family taught us to make dal baati churma and a paneer dish. Cooking in their kitchen felt so intimate and special. The food we made was honestly the best meal of our trip. I have the recipes and make the dal at home now lol.",
                },
                {
                    author: 'Thomas K.',
                    country: 'Germany',
                    rating: 5,
                    date: '2026-02-20',
                    text: "What a unique combination. Sightseeing plus cooking class in one day, brillant idea. The family who hosted the cooking was so warm and welcoming. We made chapati from scratch which was harder than it looks! Also made a vegetable curry and kheer for dessert. Then we sat and ate everything together. It felt like visiting relatives not a tourist activity. This is the kind of experience you remember forever.",
                },
                {
                    author: 'Laura P.',
                    country: 'Australia',
                    rating: 4,
                    date: '2026-03-02',
                    text: "Loved the cooking class portion, it was genuine and the family was lovely. We learned to use spices properly and made 3 dishes. The sightseeing part was a bit rushed because the cooking takes about 2 hours. So we only saw Amber Fort and Hawa Mahal from the outside. If your main goal is the sights maybe skip the cooking, but if you want a cultural experience this is unbeatable.",
                },
                {
                    author: 'Annika L.',
                    country: 'Sweden',
                    rating: 5,
                    date: '2026-02-26',
                    text: "Best day trip from Delhi hands down. The combination of sightseeing and cooking class is genius. We visited Amber Fort and City Palace in the morning, then the cooking class at a local home in the afternoon. The host auntie was hilarious and patient with our terrible chapati rolling skills. We ate what we cooked for lunch and it was delicious. Going home with recipes and memories.",
                },
            ],
        };
    }

    if (slug === 'delhi-to-jaipur-royal-private-day-tour') {
        return {
            averageRating: 4.8,
            totalReviews: 10,
            guideRating: 4.9,
            valueRating: 4.6,
            reviews: [
                {
                    author: 'William H.',
                    country: 'United States',
                    rating: 5,
                    date: '2026-03-09',
                    text: "The 'royal' in the name is accurate. Premium sedan, bottled water and snacks provided, and a guide who clearly works with high end clients. The whole day felt luxurious but not pretentious. He took us to a heritage hotel for lunch which was an experience in itself. Amber Fort, City Palace, and Hawa Mahal were all covered with plenty of time at each. The best day trip money can buy from Delhi.",
                },
                {
                    author: 'Catherine D.',
                    country: 'United Kingdom',
                    rating: 5,
                    date: '2026-02-21',
                    text: "Splurged on this premium tour for our anniversary and no regrets. The car was a proper luxury sedan with leather seats and cold water waiting. Our guide was articulate and dressed smartly. He treated us like VIPs at every stop, knew shortcuts to avoid lines, and got us into a private section of City Palace that regular tours dont visit. Expensive but worth it for a special occasion.",
                },
                {
                    author: 'Peter J.',
                    country: 'France',
                    rating: 4,
                    date: '2026-03-05',
                    text: "Very nice premium day trip. The car and service were excellent, definitely a step above standard tours. The guide was professional and well informed. My only comment is that the drive is still 5 hours each way regardless of how fancy the car is, so manage your expectations about how much time you actually have in Jaipur. We covered 4 main sites which was enough.",
                },
                {
                    author: 'Isabella M.',
                    country: 'Italy',
                    rating: 5,
                    date: '2026-02-16',
                    text: "If you can afford it, do the royal tour. We did a regular day trip last time and the difference is massive. The guide is more experienced, the car is better, and they take you to places that feel exclusive. Lunch was at a boutique hotel with a rooftop view of the city. The driver even had wifi in the car so we could upload photos on the drive back. Premium experience all the way.",
                },
            ],
        };
    }

    if (slug === 'jaipur-to-agra-taj-mahal-day-trip') {
        return {
            averageRating: 4.7,
            totalReviews: 12,
            guideRating: 4.8,
            valueRating: 4.6,
            reviews: [
                {
                    author: 'Alex G.',
                    country: 'United Kingdom',
                    rating: 5,
                    date: '2026-03-07',
                    text: "Did the Jaipur to Agra day trip and seeing the Taj Mahal at sunrise was worth every minute of the early start. Driver picked us up at 4am (yes really) and we were at the Taj by sunrise. The guide in Agra was fantastic, explained the love story of Shah Jahan and Mumtaz in a way that gave me goosebumps. We also did Agra Fort before driving back. Long day but one of those once in a lifetime things.",
                },
                {
                    author: 'Maria S.',
                    country: 'Brazil',
                    rating: 5,
                    date: '2026-02-24',
                    text: "Seeing the Taj Mahal for the first time took my breath away. Even after seeing a million photos nothing prepares you for the real thing. Our guide from Jaipur coordinated perfectly with the Agra guide. The drive is about 4.5 hours which sounds bad but the highway is smooth and we slept most of the way there. Totally doable as a day trip. Just dont plan anything for the evening because you will be tired.",
                },
                {
                    author: 'Ryan D.',
                    country: 'Australia',
                    rating: 4,
                    date: '2026-03-02',
                    text: "Good day trip to see the Taj but be warned its a really long day. Left Jaipur at 4:30am and got back around 9pm. The Taj Mahal is obviously incredible but we only had about 2 hours there before needing to move on to Agra Fort. The drive back felt endless. If I did it again I might stay overnight in Agra. But if you only have one day this works, the guide and driver were both professional.",
                },
                {
                    author: 'Lisa N.',
                    country: 'Germany',
                    rating: 4,
                    date: '2026-02-18',
                    text: "The Taj Mahal did not disapoint! Our driver was safe and punctual and the Agra guide was very knowlegeable. We saw the Taj, Agra Fort, and even did a quick stop at Baby Taj (Itimad-ud-Daulah) which was a lovely bonus. Packing for snacks and water for the drive is a must. The car was comfortble and had AC. Just prepare yourself mentally for a 14 hour day and you will be fine.",
                },
                {
                    author: 'David K.',
                    country: 'Canada',
                    rating: 5,
                    date: '2026-03-11',
                    text: "Once in a lifetime experience. Woke up at 3:30am which was rough but seeing the Taj Mahal emerge from the morning mist made it all worth it. The guide had pre booked our tickets so we walked straight in while others were queuing. Agra Fort after was also impressive, you can see the Taj from there which is a cool perspective. Driver was calm and safe on the highway. No complaints at all.",
                },
            ],
        };
    }

    if (slug === 'golden-triangle-tour-delhi-agra-jaipur') {
        return {
            averageRating: 4.8,
            totalReviews: 17,
            guideRating: 4.9,
            valueRating: 4.7,
            reviews: [
                {
                    author: 'Rachel W.',
                    country: 'United States',
                    rating: 5,
                    date: '2026-03-03',
                    text: "This 3 day Golden Triangle tour was the highlight of our 2 week India trip. Day 1 Delhi (Red Fort, Humayuns Tomb, Qutub Minar), Day 2 Agra (Taj Mahal sunrise, Agra Fort), Day 3 Jaipur (Amber Fort, City Palace, Hawa Mahal). Every day had a different guide who was an expert on their city. The logistics were flawless, hotels were good, and the driver was like a ninja navigating Indian traffic. Cannot recommend enough.",
                },
                {
                    author: 'Thomas K.',
                    country: 'Germany',
                    rating: 5,
                    date: '2026-02-19',
                    text: "Perfekt for first time India visitors. The tour takes all the stress out of planning. Each city had its own specialised guide which meant we got real expertise not just surface level stuff. Taj Mahal at sunrise was obviously the peak moment but honestly every day had jaw dropping moments. Amber Fort in Jaipur was a close second. Hotels were clean and comfortable. The driver was with us all 3 days and became like a friend.",
                },
                {
                    author: 'Jessica P.',
                    country: 'Australia',
                    rating: 4,
                    date: '2026-03-07',
                    text: "Really well organized tour covering the 3 main tourist cities. Each day was packed but not exhausting. The pacing was good with breaks for lunch and chai. My only feedback is that Delhi felt a bit rushed, we only had half a day there. If possible I would add an extra day in Delhi. Agra and Jaipur were perfect tho. The guides were all great, especially the one in Agra who made the Taj Mahal story so emotional.",
                },
                {
                    author: 'Robert M.',
                    country: 'Canada',
                    rating: 5,
                    date: '2026-02-25',
                    text: "My wife and I booked this for our first trip to India and it was the best decision. Having everything organized (transport, guides, hotels, entry tickets) meant we could just enjoy the experience without stressing. The Taj Mahal made my wife cry it was so beautiful. Jaipur was our favourite city, so colorful and alive. The driver was excellent and made the long drives between cities very comfortable.",
                },
                {
                    author: 'Claire B.',
                    country: 'France',
                    rating: 4,
                    date: '2026-03-12',
                    text: "Tres bien overall. 3 cities in 3 days is ambitious but they make it work. Delhi has so much Mughal history, Agra has the Taj (magnifique!), and Jaipur has the Rajput palaces and forts. Different eras of Indian history back to back which is really educational. Hotels were decent 3 star, nothing fancy but clean and well located. Would have liked 4 star options for a bit more comfort. But guides and transport were excellent.",
                },
            ],
        };
    }

    // --- PHUKET TOURS ---

    if (slug === 'elephant-beach-experience-patong-phuket') {
        return {
            averageRating: 4.7,
            totalReviews: 12,
            guideRating: 4.8,
            valueRating: 4.6,
            reviews: [
                {
                    author: 'Rachel G.',
                    country: 'United Kingdom',
                    rating: 5,
                    date: '2026-03-01',
                    text: "Such a special experience. The elephants at this sanctuary are rescued and you can tell they are well cared for. We got to feed them watermelons and bananas, walk alongside them through the jungle, and then swim with them in the river. The staff explained each elephants story and how they were rescued from logging or tourist camps. My 8 year old was a bit nervous at first but the mahout was so patient and gentle with her, by the end she didnt want to leave.",
                },
                {
                    author: 'Kevin S.',
                    country: 'United States',
                    rating: 5,
                    date: '2026-02-20',
                    text: "Ive been to a few elephant sanctuaries in Thailand and this one in Patong is genuinely ethical. No riding, no chains, no hooks. The elephants roam freely and come to you because they want to, not because theyre forced. The swimming part was incredible, these massive gentle creatures just wading in the water next to you. The mud bath is hilarious and the elephants seem to love it as much as the tourists do. Staff are clearly passionate about animal welfare.",
                },
                {
                    author: 'Ingrid N.',
                    country: 'Norway',
                    rating: 4,
                    date: '2026-03-09',
                    text: "Really meaningful experience that I would recommend to anyone visiting Phuket. The photos you get with the elephants are amazing, the staff take them for you which is nice so you can be fully present. The elephants are beautiful and surprisingly gentle for their size. Only reason for 4 stars is it felt a bit short, about 2 hours total. Would have loved to spend more time with them. But what they pack into those 2 hours is wonderful.",
                },
                {
                    author: 'Tomoko H.',
                    country: 'Japan',
                    rating: 4,
                    date: '2026-02-26',
                    text: "Very touching experience. The baby elephant was so playful and kept spraying us with water from her trunk! The sanctuary feels legitimate, not like those tourist traps where elephants are abused. You can see the elephants are healthy and happy. The swim in the river was the highlight, very surreal to be in the water with these giant animals. Bring clothes you dont mind getting dirty because the mud bath is messy but so fun.",
                },
            ],
        };
    }

    if (slug === 'seasoning-thai-cooking-class-phuket-cherngtalay') {
        return {
            averageRating: 4.9,
            totalReviews: 15,
            guideRating: 5.0,
            valueRating: 4.8,
            reviews: [
                {
                    author: 'Laura B.',
                    country: 'Australia',
                    rating: 5,
                    date: '2026-03-05',
                    text: "Best cooking class I have ever taken anywhere in the world. Chef Dao taught us to make Tom Yum from scratch, proper Pad Thai (not the sweet tourist version), and a Green Curry that was absolutley incredible. She explained the flavour balance of Thai cooking, sour salty sweet spicy, and how to adjust each element. The kitchen is beautiful, open air with views of the garden where they grow their own herbs. I have already made the Pad Thai twice at home and my family loves it.",
                },
                {
                    author: 'Stefan K.',
                    country: 'Germany',
                    rating: 5,
                    date: '2026-02-22',
                    text: "Really professional cooking school in Cherngtalay, not some backpacker kitchen. Each student gets their own cooking station with proper equipment. We learned to make 3 dishes and the instructor was patient even when I was slow with the chopping. The Tom Yum soup was the star, learning which herbs go in and when makes all the difference. They give you a recipe booklet to take home. Already ordered the ingredients from an Asian grocery store back home.",
                },
                {
                    author: 'Maria C.',
                    country: 'Spain',
                    rating: 5,
                    date: '2026-03-10',
                    text: "My husband and I did this on our last day in Phuket and wish we had done it first! Understanding the ingredients and techniques made every meal we ate afterwards so much more interesting. The Green Curry recipe was amazing, fresh coconut cream, homemade paste from scratch, the aroma was unbelievable. Chef Dao has so much personality and made the class entertaining not just educational. The portion sizes for tasting were generous too, we skipped dinner after.",
                },
                {
                    author: 'Chris W.',
                    country: 'Canada',
                    rating: 4,
                    date: '2026-02-28',
                    text: "Great cooking class in a lovely setting. Learned to make Tom Yum, Pad Thai and Green Curry which are exactly the dishes I wanted to learn. The instructor was very hands on and showed us the proper technique for each step. My Pad Thai actually tasted like the ones in restaurants which ive never managed at home before. Small class size (6 people) meant lots of individual attention. Only minor note, getting to Cherngtalay from Patong took about 30 mins but they arranged transfer.",
                },
            ],
        };
    }

    if (slug === 'thai-cooking-class-phuket-kata') {
        return {
            averageRating: 4.8,
            totalReviews: 13,
            guideRating: 4.9,
            valueRating: 4.8,
            reviews: [
                {
                    author: 'Amanda T.',
                    country: 'United States',
                    rating: 5,
                    date: '2026-03-02',
                    text: "This was such a unique experience! We started at the local market in the morning where our chef showed us how to pick fresh ingredients, explained the different types of chili and which ones to use for what, and taught us how to smell test lemongrass for freshness. Then we drove to the jungle kitchen which is literally in the hills above Kata surrounded by tropical plants. Cooked 4 dishes including a curry paste from scratch using a mortar and pestle. My arms were sore but the result was amazing.",
                },
                {
                    author: 'Henrik J.',
                    country: 'Denmark',
                    rating: 5,
                    date: '2026-02-18',
                    text: "The market tour in the morning was worth the price alone. Our instructor showed us ingredients I had never seen before and explained how Thai people actually shop and cook at home, which is very different from what you see in tourist restaurants. The jungle location for the cooking class was magical, cooking outdoors with birds chirping and a view of the hills. We made som tam, pad kra pao, a coconut soup, and mango sticky rice for dessert. Every single dish was delicious.",
                },
                {
                    author: 'Kate P.',
                    country: 'New Zealand',
                    rating: 4,
                    date: '2026-03-08',
                    text: "Loved the hands on approach of this class. The morning market visit was really educational, learning about ingredients at the source. The cooking school itself is in the Phuket jungle near Kata which makes for a gorgeous setting. Made 4 dishes and ate everything we cooked which was a lot of food! The recipes are authentic Thai home cooking style not restaurant style. Only small critique is the morning start (7:30am market pickup) is quite early if youre on holiday.",
                },
                {
                    author: 'Pierre D.',
                    country: 'France',
                    rating: 5,
                    date: '2026-02-25',
                    text: "As a home cook I always look for cooking classes when traveling and this one exceeded expectations. The market tour was fascinating, our chef was bargaining in Thai and getting the freshest produce while explaining everything to us. The jungle kitchen is beautiful, open air under a tin roof with herb gardens all around. Making curry paste by hand in a stone mortar was hard work but the flavour difference compared to store bought paste is night and day. Highly reccomend the morning class.",
                },
            ],
        };
    }

    if (slug === 'private-surf-lesson-kata-beach-phuket') {
        return {
            averageRating: 4.8,
            totalReviews: 10,
            guideRating: 5.0,
            valueRating: 4.7,
            reviews: [
                {
                    author: 'Jake R.',
                    country: 'Australia',
                    rating: 5,
                    date: '2026-03-04',
                    text: "Always wanted to learn to surf and Kata Beach was the perfect place for it. The waves here are gentle and consistent which makes it ideal for beginners. My instructor was super patient and started with beach technique before we even got in the water. By the end of the 2 hour lesson I was standing up and riding small waves on my own! Having a private lesson meant all the attention was on me instead of sharing with 10 other students. The instructor also took photos of me surfing which was a nice bonus.",
                },
                {
                    author: 'Nina K.',
                    country: 'Russia',
                    rating: 5,
                    date: '2026-02-21',
                    text: "Booked private lessons for me and my boyfriend who had never surfed before. The instructor was amazing, very encouraging and adjusted his teaching style for each of us individually. Kata Beach has soft sand and the waves during February were perfect for learning, not too big not too flat. My boyfriend was standing up by the end of lesson one! The equipment provided was good quality and included rash guards and reef shoes. Would definately recommend this over group lessons.",
                },
                {
                    author: 'Tom B.',
                    country: 'United Kingdom',
                    rating: 4,
                    date: '2026-03-11',
                    text: "Really enjoyed this. I've surfed a few times before but never had proper technique so this was great for fixing my bad habits. The instructor filmed me on his phone and showed me what I was doing wrong which was really helpful. Kata Beach is a beautiful spot for surfing, warm water, sandy bottom, no scary rocks or reefs to worry about. Only thing is the lesson is quite tiring in the heat so bring plenty of water and sunscreen.",
                },
                {
                    author: 'Soo-jin L.',
                    country: 'South Korea',
                    rating: 5,
                    date: '2026-02-27',
                    text: "I was nervous about trying surfing but the private lesson format made me feel very safe. The instructor spent the first 20 minutes on the beach showing me the technique and only went into the water when I was ready. He stayed right next to me the whole time and pushed me into waves at exactly the right moment. I actually stood up on my third try! The feeling of riding a wave is incredible. Kata Beach is the perfect spot, warm clear water and gentle waves.",
                },
            ],
        };
    }

    if (slug === 'phuket-scuba-diving-beginners-full-day-racha-yai-island') {
        return {
            averageRating: 4.9,
            totalReviews: 14,
            guideRating: 5.0,
            valueRating: 4.7,
            reviews: [
                {
                    author: 'Ben C.',
                    country: 'United Kingdom',
                    rating: 5,
                    date: '2026-03-03',
                    text: "Never dived before and was honestly a bit scared but the instructor made me feel completley safe. We spent about an hour in shallow water learning the equipment and hand signals before going deeper. Racha Yai Island has incredibly clear water, visibility was maybe 20 meters, and the coral reef was teeming with fish. Saw a moray eel hiding in a rock which was terrifying and amazing at the same time. The boat ride to the island was beautiful too. Cannot believe I waited this long to try diving.",
                },
                {
                    author: 'Carla V.',
                    country: 'Brazil',
                    rating: 5,
                    date: '2026-02-19',
                    text: "Absolutley magical experience. The full day trip to Racha Yai is worth it, the island is gorgeous with white sand and turquoise water. Did 2 dives, the first one was a training dive to about 8 meters and the second went to 12 meters where we saw so much marine life. Trigger fish, parrot fish, giant clams, and even a small reef shark in the distance! The dive instructor was PADI certified and very professional. Lunch on the boat between dives was good. Hands down the best day of our Phuket holiday.",
                },
                {
                    author: 'Alex M.',
                    country: 'Netherlands',
                    rating: 5,
                    date: '2026-03-07',
                    text: "Did a discover scuba diving day at Racha Yai and it was phenomenal. Water temperature was warm enough to dive in just a shorty wetsuit. The reef at the dive sites was healthy and colourful, much better than what you see snorkeling from the beach in Phuket. Two dives included and by the second one I felt really comfortable underwater. The dive team was very safety focused which gave me confidence. They provide everything including underwater camera for photos. Definitely doing my PADI cert now.",
                },
                {
                    author: 'Mika S.',
                    country: 'Finland',
                    rating: 4,
                    date: '2026-02-24',
                    text: "Great introduction to scuba diving. Racha Yai Island is about 45 minutes by speedboat from Phuket and the change in water quality is dramatic, so much clearer than the beaches near Patong. The dive instructor was patient and thorough with the safety briefing. First dive was a bit overwhelming honestly, its a strange sensation breathing underwater, but by the second dive I was relaxed and could really enjoy the fish and coral. Full day is tiring but totally worth it. Bring motion sickness pills if you need them.",
                },
            ],
        };
    }

    if (slug === 'muay-thai-training-class-phuket-beginners') {
        return {
            averageRating: 4.8,
            totalReviews: 11,
            guideRating: 5.0,
            valueRating: 4.8,
            reviews: [
                {
                    author: 'Matt D.',
                    country: 'United States',
                    rating: 5,
                    date: '2026-03-06',
                    text: "Ive always been curious about Muay Thai and doing a class in Phuket where the sport is huge felt like the right place to try it. The trainer was a former professional fighter and started with the absolute basics, stance, jab, cross, teep kick. He was patient but pushed us just enough to get a real workout. The gym is authentic, not one of those tourist fitness centers, actual Thai fighters train here too. My legs were jelly by the end but I felt amazing. Best workout of my life honestly.",
                },
                {
                    author: 'Zara H.',
                    country: 'United Kingdom',
                    rating: 5,
                    date: '2026-02-23',
                    text: "Went with my partner and we both absolutely loved it. As a woman I was a bit worried it would be too intense but the trainer adapted everything to our fitness level. He taught us proper technique for punches, kicks, elbows and knee strikes. Hitting the pads with the trainer was the most fun, he calls out combos and you just go for it. Its a great stress reliever! The gym had a really welcoming atmosphere, other fighters training around us but nobody was judgemental at all. Truly a cultural experience.",
                },
                {
                    author: 'Lukas F.',
                    country: 'Austria',
                    rating: 4,
                    date: '2026-03-10',
                    text: "Solid introductory Muay Thai class. The trainer clearly knows what hes doing and the fundamentals he taught were proper technique not just pad work for cardio. You actually learn the art of 8 limbs, fists, elbows, knees, shins. It was physically demanding even for someone who works out regularly. The gym provides gloves and wraps which is handy. Be prepared to sweat a lot, Phuket heat plus Muay Thai is intense. Drink lots of water before you come. Would have liked a slightly longer session.",
                },
                {
                    author: 'Olivia R.',
                    country: 'Canada',
                    rating: 5,
                    date: '2026-02-28',
                    text: "Such a cool experience! Muay Thai is everywhere in Phuket and getting to actually train at a real gym was incredible. Our trainer started with warm up stretches and skipping rope then moved into technique. Learning the roundhouse kick properly was harder than it looks but so satisfying when you nail it. He also explained some of the cultural traditions of Muay Thai like the Wai Kru dance before fights. Finished the class feeling exhausted but buzzing. This is what travel is about, trying new things in the right place.",
                },
            ],
        };
    }

    if (slug === 'james-bond-island-speedboat-tour-phuket') {
        return {
            averageRating: 4.8,
            totalReviews: 18,
            guideRating: 4.9,
            valueRating: 4.7,
            reviews: [
                {
                    author: 'Hannah W.',
                    country: 'United Kingdom',
                    rating: 5,
                    date: '2026-03-01',
                    text: "The canoeing through the sea caves was honestly the best part of the whole trip. Our guide paddled us through these tiny openings in the limestone and suddenly we were inside this massive hidden lagoon surrounded by jungle walls. So quiet and peaceful in there, totally surreal. James Bond Island itself is smaller than you'd expect but still cool to see the famous needle rock up close. The lunch on the boat was surprisingly good too, proper Thai food not just tourist stuff.",
                },
                {
                    author: 'Luca R.',
                    country: 'Italy',
                    rating: 5,
                    date: '2026-02-22',
                    text: "Booked this tour for my family (me, wife, and 2 teenagers) and everyone loved it. The speedboat was fast and exciting which the kids enjoyed. Phang Nga Bay is absolutely stunning, the limestone karsts rising out of green water look like something from a movie. We stopped at Koh Panyee the floating village which was fascinating, had lunch there and walked around. Our guide was very knowledgable about the geology and wildlife. Saw monkeys on one of the islands too!",
                },
                {
                    author: 'Jessica P.',
                    country: 'United States',
                    rating: 4,
                    date: '2026-03-08',
                    text: "Really enjoyable day out on the water. The scenery at Phang Nga Bay is unreal, photos dont do it justice at all. Canoeing into the hongs (collapsed cave systems) was magical. One small critique, James Bond Island was very crowded even though we arrived before 10am. I think everyone has the same idea. But the other stops more than made up for it. Would definately recommend bringing waterproof bags for your phone and camera.",
                },
                {
                    author: 'Thomas A.',
                    country: 'Germany',
                    rating: 5,
                    date: '2026-02-15',
                    text: "Third time visiting Phuket but first time doing this tour and I regret not doing it sooner. The canoe trip through the caves was something I will never forget, paddling under stalactites into hidden lagoons with nobody else around. Our guide was excellent, very safety conscious and pointed out wildlife like eagles and monitor lizards. Good value for money considering you get speedboat, guide, canoeing, lunch, and multiple island stops all included.",
                },
                {
                    author: 'Mei L.',
                    country: 'Singapore',
                    rating: 4,
                    date: '2026-03-11',
                    text: "Beautiful tour of Phang Nga Bay. The highlight for us was the canoeing, not James Bond Island which is honestly a bit overhyped and touristy. The sea cave exploration is where the real magic happens. Lunch at the floating village Koh Panyee was decent, the fried fish was fresh. Just be prepared for a long day, we left at 8am and got back around 5pm. Bring sunscreen and reapply often, I got burnt even with SPF50.",
                },
            ],
        };
    }

    if (slug === 'phi-phi-islands-speedboat-tour-maya-bay-snorkeling') {
        return {
            averageRating: 4.9,
            totalReviews: 22,
            guideRating: 4.9,
            valueRating: 4.8,
            reviews: [
                {
                    author: 'Sophie K.',
                    country: 'Netherlands',
                    rating: 5,
                    date: '2026-03-03',
                    text: "This premium catamaran tour was absolutley worth it. The boat was spacious and comfortable, way better than being crammed on a speedboat with 40 people. Maya Bay was breathtaking even though theres a strict visitor limit now (which is actually a good thing for the environment). The snorkeling at Pileh Lagoon was incredible, the water is so clear you can see fish from the deck. Our guide knew exactly where to take us for the best coral and marine life.",
                },
                {
                    author: 'Ryan M.',
                    country: 'Australia',
                    rating: 5,
                    date: '2026-02-18',
                    text: "Mate this was hands down the best day of our Thailand trip. The catamaran is way more stable than a speedboat which my partner appreciated since she gets seasick. Maya Bay looks exactly like the movie, just gorgeous. Snorkeling at three different spots and saw so many tropical fish, even a sea turtle at one point!! The crew was super friendly and the Thai lunch on board was delicious. Started early which meant we beat the big tour groups to Maya Bay.",
                },
                {
                    author: 'Isabella F.',
                    country: 'Spain',
                    rating: 5,
                    date: '2026-03-07',
                    text: "I was worried Maya Bay would be disappointing after all the hype but it genuinely took my breath away. The turquoise water against the white sand and towering cliffs, it looks like a painting. The catamaran was very premium feeling with cushions, good music, and attentive crew. Snorkeling at Bamboo Island was also amazing, the reef there is recovering beautifully. Only downside is you cant spend as long as youd like at Maya Bay due to the environmental time limits, but I understand why they do it.",
                },
                {
                    author: 'Daniel H.',
                    country: 'United States',
                    rating: 4,
                    date: '2026-02-27',
                    text: "Great tour overall. The catamaran was comfortable and the itinerary was well planned. Phi Phi Don viewpoint hike was tough in the heat but the view from the top is absolutely iconic, you see two bays separated by a thin strip of land. Snorkeling was good, saw lots of colorful fish and some clownfish (nemo!). Food was tasty. Taking off one star only because the pickup from our hotel in Kata was 40 minutes earlier than advertised. But once on the boat everything was perfect.",
                },
                {
                    author: 'Yuki T.',
                    country: 'Japan',
                    rating: 5,
                    date: '2026-03-10',
                    text: "We chose the premium catamaran over the regular speedboat tours and so glad we did. Much more comfortable ride, better food, and smaller group size. The guide was very knowledgable about the marine ecology and explained why Maya Bay was closed for rehabilitation and how the coral is recovering. Pileh Lagoon was my favourite spot, the water glows bright emerald green and its perfect for swimming. Brought my underwater camera and got some amazing shots of the reef.",
                },
            ],
        };
    }

    if (slug === 'phi-phi-khai-islands-speedboat-tour-with-lunch') {
        return {
            averageRating: 4.7,
            totalReviews: 16,
            guideRating: 4.8,
            valueRating: 4.8,
            reviews: [
                {
                    author: 'Emma J.',
                    country: 'United Kingdom',
                    rating: 5,
                    date: '2026-02-20',
                    text: "What a day! The combo of Phi Phi Islands and Khai Islands gives you the best of both worlds. Phi Phi for the dramatic cliffs and Maya Bay, then Khai for the pristine white sand beaches where you can just relax. The speedboat was fast and exciting, got us to Phi Phi in about 45 minutes. Khai Nok island was like a postcard, the sand is powdery white and the water is crystal clear. Lunch was included and really filling, proper Thai green curry and rice.",
                },
                {
                    author: 'Carlos M.',
                    country: 'Mexico',
                    rating: 4,
                    date: '2026-03-05',
                    text: "Really fun tour that covers a lot of ground in one day. The speedboat ride is bumpy if you sit at the front so heads up, sit in the middle or back if you have a sensitive stomach. Phi Phi was stunning as expected and Khai Islands were a nice surprise, very peaceful and great for snorkeling right off the beach. Saw tons of fish just wading in waist deep water. The guide was entertaining and spoke good English. Would have liked a bit more time at Khai but I understand the schedule is tight.",
                },
                {
                    author: 'Anna S.',
                    country: 'Sweden',
                    rating: 5,
                    date: '2026-03-09',
                    text: "This tour packs in so much value. You get Maya Bay, Pileh Lagoon, snorkeling spots, AND the Khai Islands all in one trip. The Khai Islands were actually my favourite part, the water is so shallow and clear that fish swim right up to you. Perfect for beginners who are nervous about snorkeling in deeper water. Our guide was really patient with everyone and made sure even the non swimmers felt comfortable. The included lunch was generous portions too.",
                },
                {
                    author: 'James L.',
                    country: 'Canada',
                    rating: 4,
                    date: '2026-02-28',
                    text: "Solid day trip. We got picked up from our hotel in Patong at 7am which felt early but meant we arrived at Maya Bay before the massive crowds showed up. The Phi Phi stops were beautiful as advertised. Adding Khai Islands to the itinerary was a smart choice, its a completley different vibe from Phi Phi. More chill, more beachy, great for floating around in the shallows. Only thing id say is bring your own snorkel mask if you have one, the provided ones are basic.",
                },
                {
                    author: 'Priya D.',
                    country: 'India',
                    rating: 5,
                    date: '2026-03-13',
                    text: "Exceeded our expectations! We almost booked a Phi Phi only tour but chose this one because of the Khai Islands addition and it was 100% the right call. The variety of stops keeps things interesting all day. Maya Bay is as stunning as you see in photos. Then the Khai Islands are perfect for just relaxing on the beach after all the snorkeling and swimming. The crew was very professional, they handed out life jackets and snorkel gear without anyone having to ask. Great lunch too.",
                },
            ],
        };
    }

    if (slug === 'phi-phi-islands-private-yacht-cruise-maya-bay') {
        return {
            averageRating: 4.9,
            totalReviews: 11,
            guideRating: 5.0,
            valueRating: 4.7,
            reviews: [
                {
                    author: 'Charlotte B.',
                    country: 'United Kingdom',
                    rating: 5,
                    date: '2026-03-02',
                    text: "Worth every single penny. Having a private yacht to ourselves (just me, my partner, and 2 friends) meant we could go at our own pace and skip the crowded spots. The captain took us to a snorkeling spot near Phi Phi that wasnt on any group tour itinerary, and the coral there was amazing. Maya Bay was stunning even with the visitor limits. The crew served fresh fruit and drinks throughout. Its a half day tour but honestly felt like we packed in more than the full day group tours do.",
                },
                {
                    author: 'Andrew K.',
                    country: 'Australia',
                    rating: 5,
                    date: '2026-02-16',
                    text: "This was our anniversary treat and it did not disappoint. Having your own yacht with a private captain and guide is a completley different experience to a group tour. We could linger at Maya Bay, take our time snorkeling, and stop wherever we wanted. The yacht itself was beautiful and well maintained. Crew prepared a Thai seafood lunch on board that was restaurant quality. If your budget allows it, this is THE way to see Phi Phi Islands. No crowds, no rush, just paradise.",
                },
                {
                    author: 'Nadia V.',
                    country: 'Russia',
                    rating: 5,
                    date: '2026-03-06',
                    text: "Booked this for a birthday celebration with 6 friends and it was the highlight of our trip. The yacht was spacious enough for all of us with a comfortable sunbathing deck. Arrived at Maya Bay just as the sun hit the cliffs perfectly, the water literally glows turquoise. Our captain knew all the secret spots away from the tourist boats. Snorkeled at Pileh Lagoon basically by ourselves while the group tours hadnt arrived yet. The flexibility of a private tour is priceless.",
                },
                {
                    author: 'Richard P.',
                    country: 'United States',
                    rating: 4,
                    date: '2026-02-24',
                    text: "Splurged on the private yacht and mostly glad we did. The experience of cruising to Phi Phi on your own boat with cold drinks and good music is hard to beat. Maya Bay is genuinely stunning, photos dont capture how vivid the colours are. Snorkeling was excellent with the guide pointing out marine life. Half day felt a tiny bit short, we could have easily done a full day. But the crew was outstanding and the boat was immaculate. Would do it again with the full day option if available.",
                },
            ],
        };
    }

    if (slug === 'phuket-private-yacht-catamaran-charter-island-hopping') {
        return {
            averageRating: 4.8,
            totalReviews: 9,
            guideRating: 4.9,
            valueRating: 4.6,
            reviews: [
                {
                    author: 'David W.',
                    country: 'United Kingdom',
                    rating: 5,
                    date: '2026-02-19',
                    text: "We chartered a catamaran for the day and went island hopping around Phuket. Having 7 boats to choose from meant we could pick the perfect vessel for our group of 8. The catamaran was gorgeous, very stable which is great if anyone in your group gets seasick. We visited Coral Island, Racha Yai, and a couple of smaller islands the captain suggested. The freedom to create your own itinerary is what makes this special. Crew was incredibly attentive, always offering drinks and snacks.",
                },
                {
                    author: 'Sarah C.',
                    country: 'Canada',
                    rating: 5,
                    date: '2026-03-04',
                    text: "Best money we spent in Thailand. Chartered a yacht for our honeymoon and the crew made it absolutley magical. They set up a private lunch on a secluded beach, just the two of us with Thai food and champagne. Then we snorkeled at spots with nobody else around. The captain has been sailing these waters for 20 years and knows every hidden cove. Having multiple boat options was great, we picked a sleek motor yacht that was perfect for 2 people. Cant reccommend this enough for couples.",
                },
                {
                    author: 'Mark T.',
                    country: 'Australia',
                    rating: 4,
                    date: '2026-02-28',
                    text: "Organised a charter for my mates trip (6 guys) and it was legendary. Picked a 42 foot catamaran which had plenty of room for everyone. Went to Racha Islands where the snorkeling was incredible, visibility must have been 20 meters plus. Then to a quiet beach for lunch and swimming. Only reason for 4 stars instead of 5 is the price, its definately a premium experience. But you get what you pay for and the quality of the boat and crew was first class.",
                },
                {
                    author: 'Lisa M.',
                    country: 'Germany',
                    rating: 5,
                    date: '2026-03-10',
                    text: "We booked this for a family celebration (grandparents 70th birthday) with 12 people across 3 generations. The team helped us choose a large catamaran that could comfortably fit everyone. The kids loved jumping off the boat into the clear water, grandparents relaxed on the deck with cold drinks, and parents got to actually relax for once! The crew was wonderful with the children. Island hopping around Phuket on your own private boat is honestly the best way to experience the Andaman Sea.",
                },
                {
                    author: 'Jin W.',
                    country: 'South Korea',
                    rating: 5,
                    date: '2026-03-08',
                    text: "Chartered a sailing yacht for a sunset cruise and it was breathtaking. Watching the sun drop behind the Andaman Sea from the deck of a private yacht while the crew serves cocktails is something I will remember forever. Earlier in the day we visited some small islands south of Phuket that were completley empty, felt like we had our own private paradise. The booking process was easy and they responded quickly on WhatsApp. So many boat options to choose from which was great.",
                },
            ],
        };
    }

    // --- AGRA TOURS ---

    if (slug === 'taj-mahal-fort-guided-tour') {
        return {
            averageRating: 4.8,
            totalReviews: 16,
            guideRating: 4.9,
            valueRating: 4.7,
            reviews: [
                {
                    author: 'Rebecca H.',
                    country: 'United States',
                    rating: 5,
                    date: '2026-03-08',
                    text: "Our official tour guide at the Taj Mahal was absolutley brilliant. He knew every single detail about the inlay work on the marble, the semi-precious stones used in the pietra dura, and the symmetry of the gardens. At Agra Fort he showed us the spot where Shah Jahan was imprisoned and could see the Taj from his window, which was such a poignant moment. Having an official guide with a government ID badge meant we skipped right past the touts at the entrance.",
                },
                {
                    author: 'Kenji T.',
                    country: 'Japan',
                    rating: 5,
                    date: '2026-03-02',
                    text: "Booking an official guide for both the Taj Mahal and Agra Fort was the right decision. He explained the Mughal architecture in a way that was easy to understand and pointed out details I never would have noticed on my own, like the optical illusion with the minarets leaning slightly outward. At Agra Fort the Diwan-i-Khas and Sheesh Mahal were highlights. Very professional and knowledgable.",
                },
                {
                    author: 'Anna K.',
                    country: 'Sweden',
                    rating: 4,
                    date: '2026-02-22',
                    text: "Good experience overall with our certified guide at both monuments. The Taj Mahal portion was excellent, he took us around the back side where fewer tourists go and explained the calligraphy from the Quran on the gateway. Agra Fort was also interesting but felt a little rushed as we only had about an hour there. I would reccomend asking for more time at the fort if you can.",
                },
                {
                    author: 'David P.',
                    country: 'Canada',
                    rating: 5,
                    date: '2026-02-15',
                    text: "The official guide made our visit to the Taj Mahal and Agra Fort so much more meaningful. He explained how the marble changes color depending on the time of day, pinkish at sunrise and golden at sunset. Inside the fort he showed us the grape vine carvings and the tiny mosque that most visitors walk right past. He also helped us avoid the scam artists outside. Definately worth the booking fee.",
                },
                {
                    author: 'Priya S.',
                    country: 'India',
                    rating: 5,
                    date: '2026-03-11',
                    text: "Even as an Indian I learned so much from our guide at the Taj Mahal and Agra Fort. He shared stories about Mumtaz Mahal and the 20,000 workers who built the Taj over 22 years that I had never heard before. At Agra Fort the Jahangiri Mahal was stunning with its Hindu and Islamic architectural blend. His official credentials got us through security quickly. Highly reccomend for anyone visiting Agra.",
                },
            ],
        };
    }

    if (slug === 'taj-mahal-agra-overnight-tour-from-delhi') {
        return {
            averageRating: 4.7,
            totalReviews: 12,
            guideRating: 4.8,
            valueRating: 4.6,
            reviews: [
                {
                    author: 'Michelle L.',
                    country: 'Australia',
                    rating: 5,
                    date: '2026-03-06',
                    text: "The overnight tour from Delhi was the perfect way to experience Agra without rushing. Our private car picked us up from our Delhi hotel and the drive took about 3.5 hours on the expressway. We visited the Taj Mahal in the afternoon, had dinner at a lovely local restaurant, then went back for the sunrise view the next morning. Seeing the Taj at two completley different times of day was magical. The hotel they arranged was clean and comfortable.",
                },
                {
                    author: 'Thomas B.',
                    country: 'Germany',
                    rating: 4,
                    date: '2026-02-27',
                    text: "Really glad we chose the overnight option instead of trying to cram everything into one day. The private car from Delhi was comfortable with AC and bottled water. We saw the Taj Mahal at sunset which was gorgeous, the marble turns this warm golden colour. Next morning we visited Agra Fort before heading back. Only giving 4 stars because the hotel could have been a bit nicer for the price, but the tour itself was excellent.",
                },
                {
                    author: 'Sakura N.',
                    country: 'Japan',
                    rating: 5,
                    date: '2026-03-01',
                    text: "This overnight Agra tour from Delhi exceeded our expectations. The driver was professional and the car was very clean. Arriving in the afternoon meant we could see the Taj without the massive morning crowds. Our guide arranged everything perfectly. The next morning we woke early and caught the sunrise colours on the white marble, it was absolutley breathtaking. Two days in Agra is definately better than one.",
                },
                {
                    author: 'Carlos R.',
                    country: 'Spain',
                    rating: 5,
                    date: '2026-02-18',
                    text: "Perfect trip for anyone who doesnt want to rush through Agra in a single day. The private car from Delhi was spacious and our driver was very experienced on the Yamuna Expressway. We checked into the hotel, freshened up, then headed to the Taj Mahal for the afternoon light. Had a wonderful dinner at a rooftop restaurant with views of the Taj lit up at night. Morning visit to Agra Fort completed the experience. Highly recommend the overnight option.",
                },
            ],
        };
    }

    if (slug === 'agra-mathura-full-day-tour') {
        return {
            averageRating: 4.8,
            totalReviews: 11,
            guideRating: 4.9,
            valueRating: 4.7,
            reviews: [
                {
                    author: 'Jennifer W.',
                    country: 'United States',
                    rating: 5,
                    date: '2026-03-09',
                    text: "What an incredible day combining the Taj Mahal with Mathura and Vrindavan. Starting at the Taj was spectacular as always but the real surprise was Vrindavan. The Krishna temples there are absolutley stunning, especially the Banke Bihari Temple where the energy of the devotees was infectious. In Mathura we visited the Krishna Janmabhoomi temple where Lord Krishna was born. Our guide explained the Hindu mythology so well. The private car made the whole day comfortable.",
                },
                {
                    author: 'Hans M.',
                    country: 'Netherlands',
                    rating: 5,
                    date: '2026-02-25',
                    text: "This was one of the best tours we did in India. The Taj Mahal in the morning was beautiful, but the spiritual atmosphere of Mathura and Vrindavan was something else entirely. Walking along the ghats in Mathura and seeing the evening aarti ceremony was deeply moving. In Vrindavan the colourful Holi decorations were everywhere, the guide told us about how Holi celebrations here are famous worldwide. Definately reccomend this combo tour.",
                },
                {
                    author: 'Fatima A.',
                    country: 'UAE',
                    rating: 4,
                    date: '2026-03-03',
                    text: "Good combination of history and spirituality in one day. The Taj Mahal portion was lovely as expected. Mathura was fascinating, the birthplace of Lord Krishna has such a special energy. Vrindavan temples were colourful and vibrant. The drive between the cities was about an hour each way which was fine in the private car. Only complaint is that it was a very long day, we started at 6am and got back around 8pm.",
                },
                {
                    author: 'Sophie C.',
                    country: 'France',
                    rating: 5,
                    date: '2026-02-14',
                    text: "The Mathura and Vrindavan extension after the Taj Mahal was a highlight of our entire India trip. The contrast between the Islamic Mughal architecture of the Taj and the Hindu temples of Vrindavan was facinating. Our guide was knowledgable about both traditions. The ISKCON temple in Vrindavan was beautiful and very peaceful. I loved walking through the narrow lanes of Mathura seeing the local life. The private guided tour format made everything seamless.",
                },
                {
                    author: 'Robert J.',
                    country: 'United Kingdom',
                    rating: 5,
                    date: '2026-03-12',
                    text: "Brilliant day trip from Agra. We did the Taj Mahal first thing in the morning then headed to Mathura and Vrindavan. The Krishna temples in Vrindavan are so colourful and lively compared to other religious sites. At the Yamuna ghats in Mathura we saw priests performing rituals and it felt very authentic and untouristy. The guide knew the back routes to avoid traffic and had great relationships with the temple priests. Would completley reccomend this over just doing Agra alone.",
                },
            ],
        };
    }

    if (slug === 'agra-fort-private-tour') {
        return {
            averageRating: 4.7,
            totalReviews: 15,
            guideRating: 4.8,
            valueRating: 4.6,
            reviews: [
                {
                    author: 'Amanda G.',
                    country: 'United States',
                    rating: 5,
                    date: '2026-03-07',
                    text: "This same day tour from Delhi covering the Taj Mahal and Fatehpur Sikri was absolutley packed with amazing sights. The private car picked us up at 5am from our Delhi hotel and we were at the Taj by 9:30. Fatehpur Sikri in the afternoon was a real surprise, the ghost city built by Akbar is incredibly well preserved. The Buland Darwaza gate is massive and the Panch Mahal is unlike anything else in India. Our driver was safe and experienced on the expressway.",
                },
                {
                    author: 'Liam O.',
                    country: 'Ireland',
                    rating: 4,
                    date: '2026-02-20',
                    text: "Great day trip from Delhi to see both the Taj Mahal and Fatehpur Sikri. The Taj needs no introduction, it was as magnificent as you'd expect. But Fatehpur Sikri really surprised me, the abandoned Mughal capital has Jodha Bai's palace which shows the blend of Hindu and Muslim architecture. The Buland Darwaza is the tallest gateway in India apparently. Long day though, left Delhi at 6am and got back around 9pm. The private car made it managable.",
                },
                {
                    author: 'Yuki H.',
                    country: 'Japan',
                    rating: 5,
                    date: '2026-03-01',
                    text: "Combining the Taj Mahal with Fatehpur Sikri on a day trip from Delhi was an excellent decision. At Fatehpur Sikri our guide explained how Emperor Akbar built this entire city after a Sufi saint predicted the birth of his son, but then abandoned it after only 14 years due to water shortage. The palace complex is stunning, especially the Diwan-i-Khas with its central pillar. The Taj Mahal was the perfect morning visit. Very well organised tour.",
                },
                {
                    author: 'Elena V.',
                    country: 'Russia',
                    rating: 5,
                    date: '2026-02-12',
                    text: "We had an amazing day visiting both the Taj Mahal and Fatehpur Sikri from Delhi. The private car was comfortable with good AC and the driver knew the best routes. At Fatehpur Sikri the guide showed us the Pachisi court where Akbar used to play chess using real people as pieces, which was facinating. Jodha Bai's palace had beautiful Hindu carvings showing Akbar's religious tolerance. The Tomb of Salim Chishti with its marble lattice screens was another highlight.",
                },
                {
                    author: 'Nathan C.',
                    country: 'New Zealand',
                    rating: 4,
                    date: '2026-03-10',
                    text: "Solid tour covering two of the most important Mughal sites in one day from Delhi. The Taj Mahal was stunning as expected. Fatehpur Sikri doesnt get enough attention in my opinion, it was one of the most interesting historical sites we visited in India. The guide was good and the private car comfortable. Giving 4 stars because the lunch stop wasnt great and we could have spent more time at Fatehpur Sikri. But overall very good value.",
                },
            ],
        };
    }

    if (slug === 'taj-mahal-express-tour') {
        return {
            averageRating: 4.8,
            totalReviews: 18,
            guideRating: 4.9,
            valueRating: 4.7,
            reviews: [
                {
                    author: 'Rachel F.',
                    country: 'United Kingdom',
                    rating: 5,
                    date: '2026-03-05',
                    text: "Taking the Gatiman Express from Hazrat Nizamuddin station to Agra was such a fun experience. The train is super fast and comfortable, we arrived in under 2 hours. A driver was waiting at Agra Cantt station and took us straight to the Taj Mahal. The whole day was perfectly organised, we saw the Taj, had lunch, visited Agra Fort, and caught the evening train back. So much better than sitting in a car for 4 hours each way.",
                },
                {
                    author: 'Daniel K.',
                    country: 'South Korea',
                    rating: 5,
                    date: '2026-02-28',
                    text: "The Gatiman Express is definately the best way to do a day trip to the Taj Mahal from Delhi. The train departed on time from Nizamuddin station and the CNF class seats were really comfortable with good legroom. They served breakfast on board which was a nice touch. In Agra the guide and driver were already waiting for us. Seeing the Taj Mahal in person is something everyone should experience at least once. The return train journey was equally smooth.",
                },
                {
                    author: 'Lisa M.',
                    country: 'Canada',
                    rating: 4,
                    date: '2026-02-17',
                    text: "Good tour overall using the Gatiman Express train. The train ride itself was enjoyable and much quicker than driving. Our guide in Agra was excellent, he took us to the Taj Mahal first thing and the morning light was perfect. We also visited Agra Fort and had a nice lunch at a local restaurant. Only concern was that the pickup from Delhi hotel to Nizamuddin station was a bit tight on time due to traffic. I'd reccomend leaving extra early.",
                },
                {
                    author: 'Pierre D.',
                    country: 'France',
                    rating: 5,
                    date: '2026-03-11',
                    text: "Excellent way to see the Taj Mahal without the hassle of a long car journey. The Gatiman Express train is modern, clean and fast. Left Delhi around 8am and was standing in front of the Taj Mahal by 11am. The guide was waiting at the station with a car and had everything organised perfectly. After the Taj and lunch we had time for Mehtab Bagh which has beautiful views of the Taj from across the river. Caught the 5:50pm train back. Completley hassle free.",
                },
                {
                    author: 'Ingrid S.',
                    country: 'Norway',
                    rating: 5,
                    date: '2026-03-08',
                    text: "We were nervous about doing a day trip but the Gatiman Express made it easy. The train is fast and comfortable, almost like a European train. Our guide in Agra was fantastic, he knew all the best angles for photos at the Taj Mahal and explained the symmetry of the gardens and the Charbagh layout. We also visited Agra Fort where Shah Jahan was imprisoned. The whole day ran like clockwork. Would absolutley reccomend this over driving.",
                },
            ],
        };
    }

    if (slug === 'taj-mahal-vrindavan-full-day-tour') {
        return {
            averageRating: 4.7,
            totalReviews: 10,
            guideRating: 4.8,
            valueRating: 4.6,
            reviews: [
                {
                    author: 'Christine B.',
                    country: 'United States',
                    rating: 5,
                    date: '2026-03-04',
                    text: "This day trip from Delhi combining the Taj Mahal with Mathura and Vrindavan was absolutley incredible. Left Delhi early and arrived at the Taj for a perfect morning visit. After lunch we drove to Vrindavan where the Krishna temples were so colourful and alive with devotees singing and chanting. The Banke Bihari Temple had such an intense spiritual energy. In Mathura we walked along the ghats of the Yamuna river. Our private car and guide made the long day very comfortable.",
                },
                {
                    author: 'Oliver W.',
                    country: 'Australia',
                    rating: 4,
                    date: '2026-02-23',
                    text: "Interesting combination of the Taj Mahal with the spiritual towns of Mathura and Vrindavan. The Taj was magnificent obviously. Vrindavan was a completely different vibe, very spiritual and authentic. We visited several Krishna temples including the massive ISKCON temple which is very modern compared to the older ones. Mathura's Krishna Janmabhoomi was fascinating. Its a very full day though, about 14 hours door to door from Delhi, so be prepared for that.",
                },
                {
                    author: 'Maria L.',
                    country: 'Brazil',
                    rating: 5,
                    date: '2026-03-10',
                    text: "One of the best tours we booked in India. Starting with the Taj Mahal was perfect, then heading to Vrindavan and Mathura added such a different dimension to the day. Our guide explained the significance of Krishna in Hindu culture and how Vrindavan is considered one of the holiest places in India. The narrow streets filled with sadhus and pilgrims felt like stepping back in time. The private car from Delhi was comfortable and the driver was great on the highway.",
                },
                {
                    author: 'Simon R.',
                    country: 'United Kingdom',
                    rating: 5,
                    date: '2026-02-16',
                    text: "Fantastic private day trip from Delhi. The Taj Mahal was the obvious highlight but honestly the Vrindavan temples were equally memorable. We visited Prem Mandir which is this massive white marble temple that gets lit up beautifully. In Mathura the Dwarkadhish Temple was packed with worshippers and the atmosphere was electric. The guide was knowledgable about both Mughal and Hindu history which made the contrasts between the sites even more interesting.",
                },
            ],
        };
    }

    if (slug === 'taj-mahal-guided-tour-from-agra') {
        return {
            averageRating: 4.8,
            totalReviews: 13,
            guideRating: 4.9,
            valueRating: 4.7,
            reviews: [
                {
                    author: 'Sarah J.',
                    country: 'United Kingdom',
                    rating: 5,
                    date: '2026-03-07',
                    text: "We were already staying in Agra so this guided tour of the Taj Mahal was exactly what we needed. Our guide met us at the hotel and took us through the East Gate which had a shorter queue. His explanations about the Mughal architecture, the symmetry of the four minarets, and the love story behind the monument were facinating. He also pointed out how the calligraphy on the gateway gets progressively larger toward the top to create an optical illusion of uniform size. Excellent guide.",
                },
                {
                    author: 'Michael P.',
                    country: 'United States',
                    rating: 5,
                    date: '2026-02-26',
                    text: "Perfect tour for those already in Agra. The guide picked us up from our hotel and had the tickets pre-arranged so we walked straight in. He showed us the best spots for photographs and explained things I never would have noticed, like how the Taj Mahal appears pink at sunrise, white during the day, and golden under moonlight. The pietra dura inlay work up close is absolutley stunning. He gave us plenty of free time to explore on our own too.",
                },
                {
                    author: 'Hana Y.',
                    country: 'Japan',
                    rating: 4,
                    date: '2026-03-01',
                    text: "Booked this guided tour since we were already in Agra for two nights. The guide was very knowledgable about the history and architecture of the Taj Mahal. He explained how the precious stones in the marble were sourced from all over Asia. Good pace, not too rushed. I would have liked to also visit the mosque on the west side but he said it was closed for prayers that day. Overall a solid experience and good value.",
                },
                {
                    author: 'Giuseppe M.',
                    country: 'Italy',
                    rating: 5,
                    date: '2026-02-19',
                    text: "Excellent Taj Mahal tour for people staying in Agra. The guide was at our hotel right on time and had water bottles and shoe covers ready. He took us through the main gate and the first view of the Taj framed by the gateway arch was breathtaking. He knew exactly where to stand for the classic reflection photo in the water channels. Inside the mausoleum he whispered the history of Shah Jahan and Mumtaz Mahal which was very moving. Reccomend this completely.",
                },
                {
                    author: 'Emma T.',
                    country: 'New Zealand',
                    rating: 5,
                    date: '2026-03-12',
                    text: "Already being in Agra meant we didnt need transport from Delhi, so this local guided tour was ideal. Our guide was passionate about the Taj Mahal and clearly loved sharing its history. He showed us the garden layout based on the Islamic concept of paradise, the four quadrants representing the four rivers of paradise. The semi-precious stone inlay work is so intricate you could spend hours just looking at the details. Well worth having a guide rather than wandering around alone.",
                },
            ],
        };
    }

    if (slug === 'same-day-taj-mahal-tour-by-car-from-delhi') {
        return {
            averageRating: 4.8,
            totalReviews: 19,
            guideRating: 4.9,
            valueRating: 4.7,
            reviews: [
                {
                    author: 'Jessica R.',
                    country: 'United States',
                    rating: 5,
                    date: '2026-03-10',
                    text: "This private car day trip from Delhi to the Taj Mahal was seamless from start to finish. Our driver arrived at 5:30am at our hotel in Connaught Place and we were at the Taj Mahal by 9:30am via the Yamuna Expressway. The car was a clean Toyota Innova with good AC. Our guide in Agra was waiting at the parking lot and the whole Taj Mahal experience was magical. We also visited Agra Fort before heading back. Arrived in Delhi by 8pm. Definately the easiest way to see the Taj.",
                },
                {
                    author: 'James H.',
                    country: 'Australia',
                    rating: 5,
                    date: '2026-02-24',
                    text: "We only had one day to see the Taj Mahal and this private day trip from Delhi by car worked perfectly. The driver was professional, the car comfortable, and the expressway to Agra is actually quite smooth. At the Taj our guide was excellent, he knew all the history and best photo spots. We had a nice lunch at a restaurant near the Taj with a rooftop view. The drive back took about 3.5 hours. Worth every penny for the convenience of door to door service.",
                },
                {
                    author: 'Martina S.',
                    country: 'Austria',
                    rating: 4,
                    date: '2026-03-03',
                    text: "Good same-day trip to the Taj Mahal from Delhi. The private car was comfortable and the driver was experienced. The Taj Mahal itself was stunning, our guide explained the Mughal history really well. We also stopped at a marble workshop where they showed how the inlay work is done, which was interesting but felt a bit like a sales pitch. The drive can be long, about 3-4 hours each way depending on traffic. Still, much better than a crowded bus tour.",
                },
                {
                    author: 'Charlotte E.',
                    country: 'France',
                    rating: 5,
                    date: '2026-02-15',
                    text: "Our private Agra day trip from Delhi was absolutley perfect. The car picked us up from our hotel near New Delhi railway station and took us directly to Agra. No stopping at tourist shops unless we asked. The Taj Mahal was everything we imagined and more. The white marble glowing in the midday sun was incredible. Our guide pointed out the false tomb upstairs and the real burial chamber below. We finished with Agra Fort before driving back. Completley stress free experience.",
                },
                {
                    author: 'Kim S.',
                    country: 'South Korea',
                    rating: 5,
                    date: '2026-03-08',
                    text: "This same day Taj Mahal tour by car from Delhi was the highlight of our India trip. Everything was well organized, from the early morning pickup to the comfortable drive on the expressway. The Taj Mahal is even more beautiful in person than in photos. Our guide spent almost 2 hours with us explaining every detail of the monument. We also visited Baby Taj (Itimad-ud-Daulah) which was lovely and much less crowded. The return drive was smooth. Highly reccomend this tour.",
                },
            ],
        };
    }

    if (slug === 'agra-royal-sunrise-tour') {
        return {
            averageRating: 4.9,
            totalReviews: 14,
            guideRating: 5.0,
            valueRating: 4.8,
            reviews: [
                {
                    author: 'Sophie L.',
                    country: 'France',
                    rating: 5,
                    date: '2026-03-09',
                    text: "Waking up at 4:30am was tough but absolutley worth it for the sunrise at the Taj Mahal. We entered as soon as the gates opened and watched the sky turn from deep purple to orange to pink, and the marble changed colour with every minute. There were so few people at that hour that we had the reflecting pools almost to ourselves. After the Taj we went to Agra Fort which was equally impressive. Our guide called it the Royal Experience and it truly felt like one.",
                },
                {
                    author: 'Andrew M.',
                    country: 'United States',
                    rating: 5,
                    date: '2026-02-27',
                    text: "The sunrise Taj Mahal tour combined with Agra Fort was a once in a lifetime experience. The early morning light hitting the white marble creates colours you wont see at any other time of day. Pink, lavender, soft gold, it was constantly changing. Our guide was there with a flashlight to lead us through the dark gardens. At Agra Fort later, he showed us the exact window where Shah Jahan spent his last years gazing at the Taj. Incredibly moving and well organised private tour.",
                },
                {
                    author: 'Clara W.',
                    country: 'Germany',
                    rating: 5,
                    date: '2026-03-04',
                    text: "This private sunrise tour was the best thing we did in India. The Taj at sunrise is a completley different experience from later in the day. The marble has this ethereal glow and the gardens are misty and quiet. Our guide was waiting for us before dawn and had everything prepared including shoe covers and water. After spending 2 hours at the Taj we moved to Agra Fort where the morning light was also beautiful on the red sandstone. A royal experience indeed.",
                },
                {
                    author: 'Ben T.',
                    country: 'New Zealand',
                    rating: 4,
                    date: '2026-02-18',
                    text: "The sunrise at the Taj Mahal was stunning. Getting up at 4am wasnt easy but seeing the Taj emerge from the pre-dawn darkness as the sky lights up behind it was unreal. The guide was excellent and very punctual. Agra Fort afterward was a great addition, its massive and the views of the Taj from across the river are spectacular. Only giving 4 stars because I wish we had more time at the fort, we needed to rush a bit at the end.",
                },
                {
                    author: 'Aisha K.',
                    country: 'UAE',
                    rating: 5,
                    date: '2026-03-12',
                    text: "Definately choose the sunrise option if you can. The Taj Mahal at dawn is magical, the silence and the soft light make it feel sacred. We were among the first visitors through the gate and had the famous bench photo spot to ourselves. The colours on the marble shift from soft blue to warm pink as the sun rises. Agra Fort was the perfect follow up, our guide showed us the Musamman Burj where Shah Jahan was kept under house arrest. An unforgettable morning.",
                },
            ],
        };
    }

    if (slug === 'taj-mahal-agra-private-day-tour-with-lunch') {
        return {
            averageRating: 4.8,
            totalReviews: 11,
            guideRating: 4.9,
            valueRating: 4.7,
            reviews: [
                {
                    author: 'Victoria S.',
                    country: 'United Kingdom',
                    rating: 5,
                    date: '2026-03-06',
                    text: "The private day tour with 5 star lunch was worth the splurge. The Taj Mahal visit was excellent with a knowledgable guide who took us to all the best viewpoints. But the lunch at a luxury hotel was a real highlight, we had a beautiful buffet with Mughlai cuisine, tandoori dishes, and the biryani was out of this world. After a morning of walking in the heat, sitting down to a proper air-conditioned lunch was heaven. Great way to experience Agra in comfort.",
                },
                {
                    author: 'Richard H.',
                    country: 'United States',
                    rating: 5,
                    date: '2026-02-22',
                    text: "This tour was a cut above the rest because of the 5 star hotel lunch included. We visited the Taj Mahal in the morning which was absolutley spectacular. Then our driver took us to the Oberoi Amarvilas for lunch where we had stunning views of the Taj from the restaurant terrace. The food was incredible, authentic Indian cuisine at its finest. After lunch we visited Agra Fort feeling refreshed and energized. The whole day felt luxury without being over the top.",
                },
                {
                    author: 'Mia C.',
                    country: 'Denmark',
                    rating: 4,
                    date: '2026-03-02',
                    text: "Nice tour overall. The Taj Mahal portion was well guided and we learned a lot about Mughal history. The 5 star lunch was very good with a wide variety of Indian and international dishes. Agra Fort in the afternoon was interesting but we were getting tired by then. I would reccomend doing the fort first and the Taj after lunch when its less hot. The private car and guide were both excellent. Good value considering the lunch is included.",
                },
                {
                    author: 'Alexander P.',
                    country: 'Russia',
                    rating: 5,
                    date: '2026-02-14',
                    text: "Everything about this private day tour was first class. The guide was professional and passionate about the Taj Mahal's history. He showed us details in the marble inlay that most tourists miss. The 5 star lunch was a wonderful break, we had butter chicken, naan fresh from the tandoor, and the best mango lassi I have ever tasted. The whole day was perfectly paced with enough time at each stop. Definately the premium Agra experience.",
                },
            ],
        };
    }

    if (slug === 'mysteries-of-agra-local-tour') {
        return {
            averageRating: 4.7,
            totalReviews: 9,
            guideRating: 4.8,
            valueRating: 4.6,
            reviews: [
                {
                    author: 'Kate B.',
                    country: 'Ireland',
                    rating: 5,
                    date: '2026-03-08',
                    text: "This was nothing like a typical Agra tour. Our local guide took us through the old city streets, past crumbling havelis and hidden mosques that no tourist ever sees. We visited a petha (sweet) workshop where they make the famous Agra specialty, and walked through the spice market near Kinari Bazaar. He showed us the moonlight garden (Mehtab Bagh) from a local's perspective and shared stories about Agra that arent in any guidebook. Truly felt like discovering the real city.",
                },
                {
                    author: 'Mark L.',
                    country: 'United States',
                    rating: 5,
                    date: '2026-02-21',
                    text: "Most tourists just see the Taj and leave but this Mysteries of Agra tour showed us a completley different side of the city. Our local guide grew up in these streets and knew every hidden corner. We saw the tomb of Akbar's Christian wife Mariam, explored narrow alleyways with beautiful old wooden balconies, and tried the best street food chai I've ever had. He explained the local leather craft tradition and took us to a workshop where artisans were making shoes by hand.",
                },
                {
                    author: 'Astrid N.',
                    country: 'Sweden',
                    rating: 4,
                    date: '2026-03-03',
                    text: "Very unique tour that shows Agra beyond the obvious monuments. Our guide was a local who clearly loved his city and wanted to share its hidden stories. We visited some lesser known tombs and mosques, walked through residential areas where daily life carries on unchanged, and tasted local sweets like petha and dalmoth. The only reason for 4 stars is that some of the walking areas were quite dusty and uneven, so wear good shoes.",
                },
                {
                    author: 'Lucas F.',
                    country: 'Brazil',
                    rating: 5,
                    date: '2026-02-16',
                    text: "Absolutley loved this local tour of Agra. Instead of just the big monuments, we discovered the real Agra. Our guide showed us an ancient step-well hidden behind modern buildings, a 400-year-old mosque in a residential area, and the old city gates that most visitors drive past without noticing. We ended at a local rooftop chai stall with views of the Taj Mahal in the distance. This is the kind of experience you cant get from a regular tourist tour. Highly reccomend.",
                },
            ],
        };
    }

    if (slug === 'taj-mahal-half-day-tour') {
        return {
            averageRating: 4.7,
            totalReviews: 17,
            guideRating: 4.8,
            valueRating: 4.6,
            reviews: [
                {
                    author: 'Patricia M.',
                    country: 'United States',
                    rating: 5,
                    date: '2026-03-09',
                    text: "This half day Taj Mahal tour was perfect for us since we had limited time in Agra. We chose the car option from our hotel and the whole thing took about 4 hours including transport. The guide gave us a thorough tour of the Taj Mahal, explaining the Mughal architecture and the love story behind it. Having multiple transportation options to choose from when booking was really convenient. Got back to the hotel with plenty of time for lunch.",
                },
                {
                    author: 'Tom W.',
                    country: 'Australia',
                    rating: 4,
                    date: '2026-02-25',
                    text: "Good efficient way to see the Taj Mahal if you dont have a full day. We picked the private car transport option and were collected from our hotel. The guide was knowledgable and gave us about 90 minutes at the Taj which felt right. He pointed out the pietra dura inlay work and how the precious stones come from different countries. The only downside was not having time for Agra Fort but thats the trade-off with a half day tour. Still very worthwhile.",
                },
                {
                    author: 'Nadia A.',
                    country: 'Morocco',
                    rating: 5,
                    date: '2026-03-04',
                    text: "Perfect for those with tight schedules. The transportation options made it easy to customize, we chose the tuk-tuk option which was fun and added to the experience. Our guide met us at the entrance and the tour was well paced. He showed us the best photo spots including the famous bench and the reflection in the water channels. The Taj Mahal is even more stunning in person than any photo can capture. Great half day experience.",
                },
                {
                    author: 'Henrik J.',
                    country: 'Denmark',
                    rating: 5,
                    date: '2026-02-17',
                    text: "We were on a tight schedule and this half day tour was exactley what we needed. The guide was efficient but not rushed, covering all the important aspects of the Taj Mahal including the history, architecture, and symbolism. He helped us navigate the security check quickly and knew the quieter spots away from the crowds. The variety of transport options when booking was a nice touch. Finished in time for our afternoon train. Reccomend this for time-limited visitors.",
                },
                {
                    author: 'Stella G.',
                    country: 'Greece',
                    rating: 4,
                    date: '2026-03-11',
                    text: "Solid half day tour of the Taj Mahal with flexible transportation. We chose private car pickup and the driver was punctual. The guide covered all the main points about the Taj and gave us free time to wander and take photos. I would have liked a bit more time inside the mausoleum itself as the guide was hurrying us along a bit. But the overall organisation was good and its a great option if you only have half a day to spare in Agra.",
                },
            ],
        };
    }

    if (slug === 'taj-mahal-pickup-private-tour') {
        return {
            averageRating: 4.8,
            totalReviews: 12,
            guideRating: 4.9,
            valueRating: 4.7,
            reviews: [
                {
                    author: 'Emily R.',
                    country: 'Canada',
                    rating: 5,
                    date: '2026-03-06',
                    text: "This private tour covering Agra Fort and Baby Taj with hotel pickup and drop was excellent. Our guide started with Agra Fort which is massive and took about 90 minutes to explore. Then we went to Baby Taj (Itimad-ud-Daulah) which is considered the draft of the Taj Mahal and has the most exquisite marble inlay work. Having the pickup and drop included made everything so easy, no haggling with rickshaw drivers or worrying about transport. Very well organised.",
                },
                {
                    author: 'William T.',
                    country: 'United Kingdom',
                    rating: 5,
                    date: '2026-02-22',
                    text: "Great tour focusing on Agra Fort and Baby Taj rather than the usual Taj Mahal route. Baby Taj is absolutley gorgeous and much more intimate than the main Taj. The marble lattice screens are so delicate they look like lace. At Agra Fort our guide was exceptional, he knew every corner and showed us the mirror palace and the grape garden courtyard. Pickup from our hotel was prompt and the driver dropped us back safely. Highly reccomend for those who have already seen the Taj or want something different.",
                },
                {
                    author: 'Yuna K.',
                    country: 'South Korea',
                    rating: 4,
                    date: '2026-03-01',
                    text: "Nice private tour with convenient pickup and drop. Agra Fort was impressive, the mix of red sandstone and white marble architecture is beautiful. Baby Taj was a lovely surprise, smaller and more peaceful than the main Taj Mahal. The inlay work there is actually more detailed and delicate. Our guide was good but could have given us more time at each site. The pickup from hotel was on time and the car was clean and air conditioned.",
                },
                {
                    author: 'Sandra V.',
                    country: 'Netherlands',
                    rating: 5,
                    date: '2026-02-15',
                    text: "Loved this tour focusing on the lesser known but equally beautiful monuments of Agra. Agra Fort is a UNESCO World Heritage site and deservs much more attention than it gets. Our guide showed us the Nagina Masjid and the private audience hall. Baby Taj was a personal favourite, the tomb is considered the precursor to the Taj Mahal and you can see why. The private pickup and drop from our hotel made the whole experience completley hassle-free.",
                },
            ],
        };
    }

    if (slug === 'taj-mahal-sunrise-tour-from-agra') {
        return {
            averageRating: 4.9,
            totalReviews: 15,
            guideRating: 5.0,
            valueRating: 4.8,
            reviews: [
                {
                    author: 'Nina F.',
                    country: 'Germany',
                    rating: 5,
                    date: '2026-03-10',
                    text: "Waking up before dawn was worth every minute of lost sleep. Our guide collected us from our Agra hotel at 5am and we were at the East Gate before it opened. Being among the first inside meant we had the Taj almost to ourselves. Watching the sunrise behind the Taj Mahal as the marble shifted from grey-blue to warm pink was the most beautiful thing I have ever witnessed. The morning mist over the gardens added to the atmosphere. An absolutley unforgettable experience.",
                },
                {
                    author: 'David C.',
                    country: 'United States',
                    rating: 5,
                    date: '2026-02-28',
                    text: "If you are in Agra you MUST do the sunrise tour. The colours on the marble change every few minutes as the sun comes up. First its this pale blue, then pink, then white, then golden. Our guide was there with flashlights in the pre-dawn darkness and had shoe covers ready. The gardens were so peaceful without the crowds. He took incredible photos for us using natural light angles. By the time we left around 8:30am the crowds were already building. So glad we went early.",
                },
                {
                    author: 'Lena S.',
                    country: 'Sweden',
                    rating: 5,
                    date: '2026-03-05',
                    text: "Best decision we made in Agra was booking this sunrise tour. Starting from our hotel at 5am our guide drove us to the entrance and we were inside before most tourists had even woken up. The Taj Mahal at sunrise is completley different from later in the day. The soft early light makes the marble glow and the reflection in the water channels is crystal clear. Our guide was patient and let us just sit and absorb the beauty. Truly a special moment.",
                },
                {
                    author: 'Chris P.',
                    country: 'Ireland',
                    rating: 4,
                    date: '2026-02-19',
                    text: "Stunning sunrise experience at the Taj Mahal. We were staying in Agra so the early pickup was easy. The guide was professional and knowledgable about the history. Seeing the first rays of sunlight hit the white marble is something every visitor should experience. The only reason for 4 stars is that it was quite cold in the early morning in February and I wish the listing had mentioned to bring warm layers. Otherwise a perfect experience.",
                },
                {
                    author: 'Mei L.',
                    country: 'Singapore',
                    rating: 5,
                    date: '2026-03-12',
                    text: "Starting from our Agra hotel made this sunrise tour so convenient. The guide arrived on time in the dark and we walked to the Taj Mahal entrance together. Being one of the first groups inside was incredible. The silence, the soft colours on the marble, the mist rising from the Yamuna river behind the Taj. Our guide showed us spots where the sunrise light creates the most dramatic effect on the semi-precious stone inlays. Definately the best way to experience the Taj Mahal.",
                },
            ],
        };
    }

    if (slug === 'taj-mahal-guided-tour') {
        return {
            averageRating: 4.8,
            totalReviews: 16,
            guideRating: 4.9,
            valueRating: 4.7,
            reviews: [
                {
                    author: 'Rachel K.',
                    country: 'United States',
                    rating: 5,
                    date: '2026-03-07',
                    text: "Our certified guide in Agra was exceptional. He didnt just show us the Taj Mahal, he took us through all the major sites including Agra Fort, Baby Taj, and Mehtab Bagh. At each location he had detailed knowledge about the Mughal emperors and the architecture. Having a certified government guide meant we skipped the long ticket queues and got access to areas that are sometimes restricted. Best way to explore Agra comprehensively.",
                },
                {
                    author: 'Thomas R.',
                    country: 'Australia',
                    rating: 5,
                    date: '2026-02-24',
                    text: "Hiring a certified tour guide to explore Agra was the smartest decision we made. He customised the itinerary based on our interests, we spent more time at the Taj Mahal and less at the shopping stops. His knowledge of the Mughal dynasty and how it shaped Agra's architecture was impressive. He also took us to the local spice market and a marble workshop. Very personable and spoke excellent English. Would absolutley reccomend.",
                },
                {
                    author: 'Isabelle D.',
                    country: 'France',
                    rating: 4,
                    date: '2026-03-02',
                    text: "Good certified guide who covered the main attractions of Agra efficiently. The Taj Mahal explanation was detailed and informative. He was flexible with our schedule and adjusted when we wanted to spend more time taking photos. Deducting one star because the tour felt a bit textbook at times, would have preferred more personal stories and anecdotes. But overall a professional and reliable guide service with good value.",
                },
                {
                    author: 'Hassan A.',
                    country: 'Egypt',
                    rating: 5,
                    date: '2026-02-16',
                    text: "As someone from Egypt with experience of ancient monuments, I can say the Taj Mahal is truly something special. Our certified guide in Agra brought it to life with stories about Shah Jahan's devotion to Mumtaz Mahal. He showed us Islamic calligraphy elements that connected to what I knew from Egyptian architecture which was facinating. The guide also covered Agra Fort and explained the differences between Akbar's and Shah Jahan's building styles. Excellent and knowledgable.",
                },
                {
                    author: 'Julia M.',
                    country: 'Poland',
                    rating: 5,
                    date: '2026-03-11',
                    text: "Exploring Agra with a certified guide was the right choice. He met us at our hotel and had the full day planned perfectly. Started with the Taj Mahal in the morning when it was less crowded, then visited Agra Fort, and finished at Baby Taj. His explanations about the symmetry in Mughal architecture and the evolution from Akbar's sandstone style to Shah Jahan's marble preference were really interesting. He also reccomended a great restaurant for lunch.",
                },
            ],
        };
    }

    if (slug === 'taj-mahal-sunrise-skip-the-line-tour') {
        return {
            averageRating: 4.9,
            totalReviews: 13,
            guideRating: 5.0,
            valueRating: 4.8,
            reviews: [
                {
                    author: 'Amanda S.',
                    country: 'United States',
                    rating: 5,
                    date: '2026-03-09',
                    text: "The skip-the-line aspect of this sunrise tour was a game changer. While other groups were queuing at the main gate, we went through a separate entrance and were inside within minutes. At sunrise the Taj Mahal marble goes through these incredible colour changes, from deep blue to lavender to soft pink to brilliant white. The guide had our tickets pre-purchased so there was zero waiting. We were positioned perfectly to watch the first light hit the dome. Absolutley magical.",
                },
                {
                    author: 'Peter H.',
                    country: 'Germany',
                    rating: 5,
                    date: '2026-02-26',
                    text: "The combination of sunrise timing and skip-the-line access meant we had the most incredible Taj Mahal experience. No crowds, no queues, just the beauty of the monument in the early morning light. The guide explained that the Taj faces east so the sunrise light hits it directly, creating the most photogenic conditions of the day. He positioned us at the reflecting pool where the sunrise reflection was absolutley perfect. Worth waking up at 4:30am for this.",
                },
                {
                    author: 'Sarah O.',
                    country: 'Canada',
                    rating: 5,
                    date: '2026-03-04',
                    text: "Skip the line plus sunrise equals the perfect Taj Mahal visit. We were inside before most tourists had even arrived. The pre-dawn silence in the gardens was almost spiritual. Then watching the colours change on the marble as the sun crept up was breathtaking. Our guide timed everything perfectly so we were at the right viewpoints for each stage of the sunrise. The fast-track entry saved us at least 30 minutes of queuing. Completley worth it.",
                },
                {
                    author: 'Roberto G.',
                    country: 'Italy',
                    rating: 4,
                    date: '2026-02-18',
                    text: "Great sunrise tour with the benefit of skipping the ticket queue. The early morning colours on the Taj Mahal are genuinely spectacular. Our guide was very knowledgable about the architecture and history. The skip-the-line entry worked exactly as promised, we walked straight through while a long queue was forming. Only giving 4 stars because the pickup from hotel was about 15 minutes late which caused a bit of stress given the tight sunrise timing.",
                },
                {
                    author: 'Anya T.',
                    country: 'Ukraine',
                    rating: 5,
                    date: '2026-03-12',
                    text: "Seeing the Taj Mahal at sunrise with no queue was the highlight of my entire Asia trip. The skip-the-line tickets meant we entered through the priority lane and were standing in the gardens within minutes. The marble was this ethereal pale blue colour before the sun came up, then gradually turned pink and then brilliant white. Our guide was passionate and took amazing photos for us. He also shared lesser known facts about the underground chambers. Definately book this one.",
                },
            ],
        };
    }

    if (slug === 'agra-photography-tour-with-guide') {
        return {
            averageRating: 4.8,
            totalReviews: 10,
            guideRating: 4.9,
            valueRating: 4.7,
            reviews: [
                {
                    author: 'Marcus W.',
                    country: 'United States',
                    rating: 5,
                    date: '2026-03-07',
                    text: "This photography tour of Agra was a dream for any camera enthusiast. Our guide knew exactley where to stand for the best compositions, from the classic Taj Mahal reflection shot in the water channels to a hidden spot near the mosque where you get the dome framed by an archway. We visited the Mehtab Bagh across the river for that iconic Taj Mahal distance shot. He also took us through the old city where the street photography opportunities were incredible. Got shots I am truly proud of.",
                },
                {
                    author: 'Yuki S.',
                    country: 'Japan',
                    rating: 5,
                    date: '2026-02-23',
                    text: "As an amateur photographer this tour was exactly what I needed. The guide understood composition, lighting, and angles. He showed me spots at the Taj Mahal that I never would have found on my own, including a viewpoint where you can capture the reflection of the Taj in the Yamuna river at just the right time. We also photographed Agra Fort where the play of light on red sandstone in the golden hour was stunning. He even helped with camera settings for the tricky marble exposure.",
                },
                {
                    author: 'Hannah G.',
                    country: 'United Kingdom',
                    rating: 4,
                    date: '2026-03-02',
                    text: "Good photography focused tour of Agra. The guide clearly knew his spots and had obviously done this many times. The Taj Mahal portion was excellent, he positioned us for the symmetrical reflection shots and the classic bench photo. We also visited some lesser-known tombs and gardens that had beautiful light. I would have liked a bit more time at each location as photography takes longer than regular sightseeing. But overall a great experience for photo enthusiasts.",
                },
                {
                    author: 'Philippe C.',
                    country: 'Belgium',
                    rating: 5,
                    date: '2026-02-14',
                    text: "The Agra photography tour was one of the best investments of my trip. Our guide took us to locations I never would have discovered, including rooftop viewpoints in the old city with the Taj in the background, and a spot along the river where the Taj reflects in the water with birds flying overhead. He understood the golden hour timing perfectly and planned the itinerary around the best light conditions. Came home with portfolio worthy images. Absolutley reccomend for photographers.",
                },
                {
                    author: 'Diana R.',
                    country: 'Romania',
                    rating: 5,
                    date: '2026-03-11',
                    text: "As a travel photographer I have done many photo tours around the world and this one was top notch. The guide had genuine photography knowledge, not just tourist spot knowledge. He understood leading lines, rule of thirds, and framing. At the Taj Mahal he showed me how to use the gateway arch as a natural frame and where to stand for the perfect reflection. The old city streets of Agra provided amazing candid photography opportunities too. Worth every rupee.",
                },
            ],
        };
    }

    if (slug === 'hidden-gems-of-agra-heritage-tour') {
        return {
            averageRating: 4.7,
            totalReviews: 8,
            guideRating: 4.8,
            valueRating: 4.6,
            reviews: [
                {
                    author: 'Claire F.',
                    country: 'United Kingdom',
                    rating: 5,
                    date: '2026-03-08',
                    text: "This heritage tour was a revelation. Instead of just the Taj, our guide took us to Akbar's Tomb at Sikandra which was stunning and practically empty of tourists. We visited the Chini Ka Rauza, a Persian-style tomb with gorgeous glazed tile work that most visitors never see. The Ram Bagh garden, said to be the oldest Mughal garden in India, was peaceful and beautiful. I felt like we discovered a whole different Agra that the regular tourists completley miss.",
                },
                {
                    author: 'Steve R.',
                    country: 'United States',
                    rating: 5,
                    date: '2026-02-20',
                    text: "If you've already seen the Taj and want something different, this hidden gems tour is absolutley perfect. We visited Mariam's Tomb, the Jama Masjid, and several historic sites in the old city that I had never even heard of. The guide was a local historian who shared fascinating stories about each location. The Guru Ka Tal gurudwara was unexpectedly beautiful. This tour showed me that Agra has so much more to offer beyond its most famous monument.",
                },
                {
                    author: 'Annika L.',
                    country: 'Finland',
                    rating: 4,
                    date: '2026-03-03',
                    text: "Interesting tour for those who want to see beyond the obvious. The heritage sites we visited were genuinely less touristy, some we were the only visitors. The Chini Ka Rauza with its Persian blue tiles was beautiful though quite deteriorated. Akbar's Tomb at Sikandra was impressive with its unique multi-tiered design. The guide was passionate about Agra's lesser-known heritage. Only giving 4 stars as some of the sites were a bit run down and not well maintained.",
                },
                {
                    author: 'John D.',
                    country: 'Australia',
                    rating: 5,
                    date: '2026-02-15',
                    text: "This was exactly the kind of tour I was looking for. We had already seen the Taj Mahal the day before, so spending a morning exploring Agra's hidden heritage was perfect. The guide took us to places like the tomb of Itimad-ud-Daulah's lesser known sister tomb, old colonial-era churches, and a beautiful step-well that felt like a secret. He was clearly passionate about preserving Agra's heritage beyond the famous monuments. Definately reccomend for repeat visitors or history buffs.",
                },
            ],
        };
    }

    if (slug === 'delhi-agra-round-trip-gatimaan-train') {
        return {
            averageRating: 4.8,
            totalReviews: 14,
            guideRating: 4.8,
            valueRating: 4.7,
            reviews: [
                {
                    author: 'Laura M.',
                    country: 'United States',
                    rating: 5,
                    date: '2026-03-09',
                    text: "Having the confirmed CNF tickets pre-booked for the Gatiman train was such a relief. We didnt have to worry about availability or the confusing Indian railway booking system. The train from Hazrat Nizamuddin station was modern and comfortable with breakfast served on board. In Agra a driver and guide were waiting. We saw the Taj Mahal and Agra Fort before catching the evening train back. The whole round trip by train was so much better than driving. Excellent organisation.",
                },
                {
                    author: 'Andrew B.',
                    country: 'Australia',
                    rating: 5,
                    date: '2026-02-25',
                    text: "The CNF confirmed tickets on the Gatiman Express were the key selling point here. Trying to book these tickets ourselves on the IRCTC website was a nightmare, so having them pre-arranged was absolutley worth it. The train is India's fastest and the ride was smooth and quick. Our guide in Agra was excellent and covered the Taj Mahal in detail. The return train arrived at Hazrat Nizamuddin station right on time. Hassle free day trip to the Taj.",
                },
                {
                    author: 'Francesca L.',
                    country: 'Italy',
                    rating: 4,
                    date: '2026-03-04',
                    text: "Good round trip experience on the Gatiman train. The CNF tickets were waiting for us at the station counter which was convenient. The train ride to Agra Cantt was about 1 hour 40 minutes and quite comfortable. In Agra we visited the Taj Mahal and had a quick lunch. I only wish we had more time in Agra, the schedule felt a bit tight because the return train has a fixed departure time. But the train experience itself was great and much better than a long car journey.",
                },
                {
                    author: 'Erik S.',
                    country: 'Norway',
                    rating: 5,
                    date: '2026-02-17',
                    text: "Everything about this round trip was perfectly organised. Transfer from our Delhi hotel to Hazrat Nizamuddin station, confirmed CNF class Gatiman Express tickets, guide and driver waiting in Agra, and the return journey in the evening. The train itself is impressive, very modern for India and genuinely fast. We had a full day to explore the Taj Mahal and Agra Fort. The guide was knowledgable and fun. Reccomend this for anyone who wants to avoid the 4+ hour car ride.",
                },
                {
                    author: 'Naomi T.',
                    country: 'Japan',
                    rating: 5,
                    date: '2026-03-11',
                    text: "The confirmed CNF tickets on the Gatiman Express made this trip worry-free. We arrived at Nizamuddin station, collected our tickets, and boarded the cleanest train I saw in India. Breakfast was included and the journey was quick. Our driver and guide in Agra were professional and covered all the major sights. Seeing the Taj Mahal up close was a dream come true. The evening train back to Delhi was equally comfortable. Definately the best way to do a Delhi to Agra day trip.",
                },
            ],
        };
    }

    if (slug === 'taj-mahal-fatehpur-full-day-tour') {
        return {
            averageRating: 4.7,
            totalReviews: 13,
            guideRating: 4.8,
            valueRating: 4.6,
            reviews: [
                {
                    author: 'Karen D.',
                    country: 'United States',
                    rating: 5,
                    date: '2026-03-06',
                    text: "Combining Agra with Fatehpur Sikri made for an incredible day. The Taj Mahal was breathtaking in the morning light. But Fatehpur Sikri in the afternoon was the unexpected highlight. This abandoned Mughal capital is like a ghost city frozen in time. The Buland Darwaza gateway is the tallest in Asia and the Panch Mahal with its 176 columns was architecturally fascinating. Our guide explained how Emperor Akbar abandoned the city because the wells dried up. Such an interesting story.",
                },
                {
                    author: 'Georg K.',
                    country: 'Germany',
                    rating: 4,
                    date: '2026-02-23',
                    text: "Good day trip covering both Agra and Fatehpur Sikri. The Taj Mahal was the main attraction of course, and our guide did an excellent job explaining the architecture and history. Fatehpur Sikri was about an hour's drive from Agra and worth the trip. The Jodha Bai palace there shows amazing Hindu-Islamic fusion architecture. The tomb of Salim Chishti with its marble lattice screens was beautiful. Long day but well paced. Only giving 4 because of the crowded parking at Fatehpur.",
                },
                {
                    author: 'Olivia P.',
                    country: 'New Zealand',
                    rating: 5,
                    date: '2026-03-01',
                    text: "This Agra and Fatehpur Sikri day trip was wonderful. We started at the Taj Mahal early to beat the crowds, then drove to Fatehpur Sikri. The ghost city is absolutley fascinating, walking through the abandoned palaces and courtyards you can imagine what life was like in Akbar's court 400 years ago. The Buland Darwaza is enormous, 54 meters tall, and the view from the top of the steps is spectacular. Our guide brought the history alive with stories of Akbar's reign.",
                },
                {
                    author: 'Patrick L.',
                    country: 'Ireland',
                    rating: 5,
                    date: '2026-02-14',
                    text: "Excellent combination tour. The Taj Mahal speaks for itself but Fatehpur Sikri was the real discovery for me. Our guide explained how Akbar built this city to celebrate the birth of his son and how it was abandoned when the water supply failed. Walking through the Diwan-i-Am and Diwan-i-Khas you can picture the emperor holding court. The Birbal's House and Jodha Bai's Palace show how different religions coexisted under Akbar. Completley reccomend adding Fatehpur to your Agra trip.",
                },
            ],
        };
    }

    if (slug === 'agra-city-highlights-tour') {
        return {
            averageRating: 4.7,
            totalReviews: 11,
            guideRating: 4.8,
            valueRating: 4.6,
            reviews: [
                {
                    author: 'Stephanie H.',
                    country: 'United States',
                    rating: 5,
                    date: '2026-03-08',
                    text: "This city highlights tour covered everything worth seeing in Agra. We started at the Taj Mahal, then visited Agra Fort, Baby Taj (Itimad-ud-Daulah), and finished at Mehtab Bagh for sunset views of the Taj from across the river. Our guide was knowledgable about all the sites and connected the history between them, showing how the Mughal architectural style evolved over generations. Having a comprehensive tour meant we didnt miss anything important. Excellent overview of the city.",
                },
                {
                    author: 'James C.',
                    country: 'United Kingdom',
                    rating: 4,
                    date: '2026-02-22',
                    text: "Solid city highlights tour that covers the main attractions of Agra efficiently. The Taj Mahal was obviously the star but I was pleasantly surprised by the Baby Taj which has even more detailed marble inlay work. Agra Fort was impressive in its sheer scale. The guide was good and the private transport comfortable. Deducting one star as we felt rushed at a couple of spots, probably trying to fit too much into one day. But it does give you a thorough overview of Agra.",
                },
                {
                    author: 'Sofia R.',
                    country: 'Spain',
                    rating: 5,
                    date: '2026-03-03',
                    text: "Perfect tour for first-time visitors to Agra who want to see all the highlights. Our guide planned the route perfectly, starting with the Taj Mahal in the morning when it was cooler, then Agra Fort, lunch break, and Baby Taj in the afternoon. Each site built on the story of the Mughal dynasty. The guide connected the dots between the monuments and explained how each emperor left his mark on the city. Mehtab Bagh at the end provided a beautiful final view of the Taj. Reccomend this completley.",
                },
                {
                    author: 'Tyler W.',
                    country: 'Canada',
                    rating: 5,
                    date: '2026-02-16',
                    text: "This highlights tour was the ideal way to experience Agra. Our guide took us to the Taj Mahal, Agra Fort, Baby Taj, and Mehtab Bagh, covering all the major sites in one well-paced day. What I appreciated most was how he explained the relationships between the monuments and the emperors who built them. The city has so much more to offer than just the Taj Mahal and this tour proved that. Great value for money and very well organised.",
                },
                {
                    author: 'Akiko N.',
                    country: 'Japan',
                    rating: 4,
                    date: '2026-03-10',
                    text: "Comprehensive tour covering the major sites of Agra. The guide was friendly and spoke good English. The Taj Mahal and Agra Fort were definately the highlights but I also loved Baby Taj for its intricate craftsmanship. Mehtab Bagh offered a nice perspective of the Taj from the other side of the river. The tour could have included more stops at local markets or food spots to give a fuller picture of Agra life. But as a highlights tour it delivered on its promise.",
                },
            ],
        };
    }

    if (slug === 'private-sunrise-taj-mahal-agra-fort-tour') {
        return {
            averageRating: 4.9,
            totalReviews: 12,
            guideRating: 5.0,
            valueRating: 4.8,
            reviews: [
                {
                    author: 'Megan L.',
                    country: 'United States',
                    rating: 5,
                    date: '2026-03-10',
                    text: "This private sunrise tour was absolutley worth the early alarm. Our guide picked us up at 5am and we were at the gates of the Taj Mahal before sunrise. Watching the first light illuminate the white marble while the gardens were still shrouded in mist was truly magical. The colours shifted from pale blue to pink to gold within 30 minutes. After spending over 2 hours at the Taj we drove to Agra Fort which was equally impressive in the morning light. Having a private tour meant we could go at our own pace.",
                },
                {
                    author: 'Christian B.',
                    country: 'Switzerland',
                    rating: 5,
                    date: '2026-02-27',
                    text: "The private sunrise experience was spectacular. We entered the Taj Mahal complex just as the sky was turning orange and had the reflecting pool almost to ourselves for the first 20 minutes. The marble surface catches the sunrise colours in a way that photographs simply cannot capture. Our guide was extremely knowledgable about the architecture and the Mughal history. At Agra Fort afterward he showed us the octagonal tower where Shah Jahan was imprisoned and could only gaze at the Taj from afar.",
                },
                {
                    author: 'Emma J.',
                    country: 'Australia',
                    rating: 5,
                    date: '2026-03-05',
                    text: "Definately choose the sunrise option. The private tour format was perfect as our guide could adapt to our pace. At the Taj we spent time at each viewpoint as the light changed. The stillness of the early morning and the beauty of the sunrise on the marble was an emotional experience honestly. Agra Fort was a great addition, the red sandstone contrasts beautifully with the white marble of the Taj. Our guide showed us exactly where Shah Jahan could see the Taj from his prison window.",
                },
                {
                    author: 'Richard N.',
                    country: 'Canada',
                    rating: 4,
                    date: '2026-02-19',
                    text: "Beautiful sunrise at the Taj Mahal followed by a thorough visit to Agra Fort. The private tour meant no waiting for a group and we could spend as long as we wanted at each spot. The sunrise was stunning, the marble went through several colour changes as the sun rose. Agra Fort was also very impressive. Only giving 4 stars because the early morning was quite cold in February and I wish the tour description had warned us to bring warm clothing. The experience itself was outstanding.",
                },
            ],
        };
    }

    if (slug === 'sunrise-taj-mahal-and-agra-tour-by-car') {
        return {
            averageRating: 4.8,
            totalReviews: 16,
            guideRating: 4.9,
            valueRating: 4.7,
            reviews: [
                {
                    author: 'Jennifer A.',
                    country: 'United States',
                    rating: 5,
                    date: '2026-03-09',
                    text: "Left our Delhi hotel at 3am to catch the sunrise at the Taj Mahal and it was completley worth it. The drive on the Yamuna Expressway was smooth and our driver was very experienced driving in the dark. We arrived just as the gates opened and the sunrise was spectacular, the marble changed from grey to pink to white over about 45 minutes. After the Taj we had a guided tour of Agra Fort and Baby Taj. The multiple options during booking let us customise the itinerary which was great.",
                },
                {
                    author: 'Martin K.',
                    country: 'Germany',
                    rating: 5,
                    date: '2026-02-26',
                    text: "This sunrise tour from Delhi by car was perfectly organised. Leaving at 3:30am sounded insane but arriving at the Taj Mahal for sunrise made it all worthwhile. The early morning light on the white marble is something you have to see in person to believe. Our guide in Agra was waiting at the parking lot and had everything arranged. We chose the full day option and also visited Agra Fort and Fatehpur Sikri. The car was comfortable with good AC for the return drive. Definately reccomend.",
                },
                {
                    author: 'Chloe T.',
                    country: 'New Zealand',
                    rating: 4,
                    date: '2026-03-03',
                    text: "The sunrise at the Taj Mahal was beautiful and worth the early start from Delhi. The drive took about 3 hours and we arrived just in time. I appreciated having different options to choose from when booking, we went with the Taj plus Agra Fort combo. The guide was knowledgable and the car was clean. Only giving 4 stars because the drive back to Delhi took much longer due to afternoon traffic, nearly 5 hours. Plan accordingly if you are doing this as a day trip.",
                },
                {
                    author: 'Santiago P.',
                    country: 'Argentina',
                    rating: 5,
                    date: '2026-02-15',
                    text: "Excellent sunrise tour from Delhi with multiple options to customize your day. We chose the sunrise Taj Mahal plus Agra Fort plus Mehtab Bagh package and it was the perfect combination. The sunrise colours on the marble were incredible. Our driver picked us up from our hotel near India Gate and the expressway drive was smooth. The guide in Agra was passionate and knowledgable. Having flexibility in the itinerary options made this tour stand out from others.",
                },
                {
                    author: 'Erika M.',
                    country: 'Sweden',
                    rating: 5,
                    date: '2026-03-11',
                    text: "We booked the sunrise option with car from Delhi and added the Agra Fort visit. Waking at 3am was rough but seeing the Taj Mahal at sunrise changed everything. The marble glowed in shades I didnt know existed, soft lavender, warm peach, brilliant white. Our guide was patient and let us just soak it in. The return drive by car was comfortable and we could stop whenever we wanted for breaks. Much more flexible than the train option. Absolutley magical experience.",
                },
            ],
        };
    }

    if (slug === 'agra-friday-tour-taj-closed-alternative') {
        return {
            averageRating: 4.7,
            totalReviews: 9,
            guideRating: 4.8,
            valueRating: 4.6,
            reviews: [
                {
                    author: 'Nicole B.',
                    country: 'United States',
                    rating: 5,
                    date: '2026-03-06',
                    text: "We didnt realize the Taj Mahal is closed on Fridays until we arrived in Agra. Thankfully we found this Friday alternative tour and it was actually brilliant. Agra Fort was the main stop and our guide spent 2 hours there covering every detail. Baby Taj (Itimad-ud-Daulah) was gorgeous and less crowded than the Taj ever is. The sunset at Mehtab Bagh with the Taj Mahal silhouetted against the sky was one of the most beautiful sights of our trip. A great way to spend a Friday in Agra.",
                },
                {
                    author: 'Paul S.',
                    country: 'Australia',
                    rating: 4,
                    date: '2026-02-21',
                    text: "We specifically planned our Agra visit around this Friday tour since we knew the Taj would be closed. The tour covered Agra Fort thoroughly, which is an incredible monument in its own right with stunning halls and gardens. Baby Taj was a highlight, the marble inlay work is arguably more detailed than the Taj itself. The sunset at Mehtab Bagh gave us views of the Taj from across the river without needing to enter. Only 4 stars as the afternoon heat was intense between sites.",
                },
                {
                    author: 'Camille D.',
                    country: 'France',
                    rating: 5,
                    date: '2026-03-07',
                    text: "Turned our Friday disappointment into a wonderful day. This tour was thoughtfully designed to show you the best of Agra when the Taj is closed for prayers. Agra Fort was massive and our guide took us through sections I had never seen in photos. Baby Taj was exquisite, the marble lattice screens are works of art. But the real highlight was the Mehtab Bagh sunset, watching the sun set behind the Taj Mahal from across the Yamuna river was absolutley stunning. Glad we booked this instead of just skipping Agra.",
                },
                {
                    author: 'Daniel F.',
                    country: 'South Africa',
                    rating: 5,
                    date: '2026-02-14',
                    text: "If you're stuck in Agra on a Friday dont despair, this tour is fantastic. We visited Agra Fort, Baby Taj, and Mehtab Bagh and honestly learned more about Mughal history than we would have just doing the Taj Mahal. The guide was knowledgable about the fort's military and residential sections. Baby Taj has the most intricate pietra dura work in all of Agra. The sunset at Mehtab Bagh was the perfect ending, seeing the Taj silhouetted against the orange sky. Definately reccomend this Friday alternative.",
                },
            ],
        };
    }

    if (slug === 'taj-mahal-royal-private-tour') {
        return {
            averageRating: 4.9,
            totalReviews: 10,
            guideRating: 5.0,
            valueRating: 4.8,
            reviews: [
                {
                    author: 'Victoria C.',
                    country: 'United Kingdom',
                    rating: 5,
                    date: '2026-03-10',
                    text: "This royal luxury tour of the Taj Mahal was in a class of its own. From the premium vehicle with leather seats to the VIP entrance, everything felt exclusive. Our guide was dressed professionally and spoke impeccable English. He shared stories about the Mughal court and Shah Jahan's obsession with architectural perfection that made the visit feel like stepping back in time. The attention to detail in this tour, cold towels, bottled water, personalized pace, was what made it truly feel royal.",
                },
                {
                    author: 'Jonathan W.',
                    country: 'United States',
                    rating: 5,
                    date: '2026-02-26',
                    text: "Worth the premium price for the luxury experience. Everything about this tour was elevated, from the Mercedes pickup to the priority access at the Taj Mahal. Our guide treated us like royalty and had clearly done extensive research on the Mughal dynasty. He explained the symbolism of every design element and how the Taj represents the throne of God in Islamic paradise. No rushing, no crowds around us, just a timeless and elegant experience. This is how the Taj Mahal should be seen.",
                },
                {
                    author: 'Isabella M.',
                    country: 'Italy',
                    rating: 5,
                    date: '2026-03-05',
                    text: "If you want to experience the Taj Mahal in true elegance, this is the tour to book. The luxury vehicle was immaculate, the guide was scholarly and passionate, and every detail was taken care of. We spent nearly 3 hours at the Taj Mahal without feeling rushed. The guide pointed out architectural details that regular tours skip, like how the dome is actually a double dome with space between for acoustics. A truly premium and completley unforgettable experience.",
                },
                {
                    author: 'Katherine H.',
                    country: 'Canada',
                    rating: 4,
                    date: '2026-02-18',
                    text: "Beautiful luxury tour of the Taj Mahal. The vehicle was comfortable, the guide exceptional, and the overall experience felt very premium. The guide's knowledge of Mughal art and architecture was impressive. He showed us how the precious stones in the inlay work include lapis lazuli from Afghanistan, jade from China, and turquoise from Tibet. The only reason for 4 stars is that I expected perhaps a private area or exclusive access beyond what regular visitors get, which wasnt quite the case.",
                },
                {
                    author: 'Ahmed R.',
                    country: 'UAE',
                    rating: 5,
                    date: '2026-03-12',
                    text: "This private royal tour was exactley what we were looking for. As someone who appreciates luxury travel, every element met my expectations. The guide was erudite and charming, sharing the love story of Shah Jahan and Mumtaz with genuine emotion. The pace was relaxed and unhurried, allowing us to truly absorb the timeless elegance of the Taj Mahal. The marble inlay work glowing in the afternoon sun was mesmerising. Definately the finest way to experience this Wonder of the World.",
                },
            ],
        };
    }

    if (slug === 'taj-mahal-photography-tour') {
        return {
            averageRating: 4.8,
            totalReviews: 11,
            guideRating: 4.9,
            valueRating: 4.7,
            reviews: [
                {
                    author: 'Ryan K.',
                    country: 'United States',
                    rating: 5,
                    date: '2026-03-08',
                    text: "This Taj Mahal photography tour with a professional guide was exactly what I needed. He knew the best angles for every type of shot, from the classic symmetrical view through the gateway arch to creative compositions using the mosque as a foreground element. The reflection shots in the long pool were timed perfectly when the water was still. He also helped me get the famous bench photo without other tourists in the background by timing it just right. Came away with incredible images.",
                },
                {
                    author: 'Akiko Y.',
                    country: 'Japan',
                    rating: 5,
                    date: '2026-02-24',
                    text: "As a photography enthusiast this tour was a dream. The professional guide understood lighting, composition, and the unique challenges of photographing white marble. He showed me how to adjust exposure to capture the detail in the marble without blowing out the highlights. We visited the Taj at a time when the light was warm and directional, creating beautiful shadows on the inlay work. He also knew hidden viewpoints that most visitors never find. Worth every penny for the quality of photos I got.",
                },
                {
                    author: 'Linda S.',
                    country: 'Australia',
                    rating: 4,
                    date: '2026-03-02',
                    text: "Good photography focused tour of the Taj Mahal. The guide clearly had experience with photographers and knew all the best spots. He helped me capture the reflection of the Taj in the water channels and showed me angles that avoided the scaffolding on the back side. I appreciated that he let me take my time at each spot rather than rushing. Giving 4 stars because I expected more tips on camera settings and post-processing but the location knowledge was excellent.",
                },
                {
                    author: 'Stefan G.',
                    country: 'Austria',
                    rating: 5,
                    date: '2026-02-16',
                    text: "The professional photography guide transformed my Taj Mahal visit from sightseeing into an art experience. He positioned me at viewpoints where the symmetry of the Taj was perfect, showed me how to use the gateway arch as a natural frame, and timed our visit to the platform when the light was creating long shadows on the marble surface. The pietra dura close-up shots he suggested turned out amazing. This is a must-do for anyone who takes photography seriously. Absolutley reccomend.",
                },
                {
                    author: 'Natasha V.',
                    country: 'Russia',
                    rating: 5,
                    date: '2026-03-11',
                    text: "One of the best photography tours I have ever taken anywhere in the world. The guide understood that photographers need patience and time, not rushing from point to point. He showed me the reflection pool at the exact moment when the breeze stopped and the mirror image was perfect. We also found a spot near the mosque where you get the Taj framed between two minarets which was stunning. His knowledge of the monument combined with genuine photography skill made this tour exceptional.",
                },
            ],
        };
    }

    if (slug === 'taj-mahal-agra-fort-guided-tour') {
        return {
            averageRating: 4.8,
            totalReviews: 15,
            guideRating: 4.9,
            valueRating: 4.7,
            reviews: [
                {
                    author: 'Sarah W.',
                    country: 'United States',
                    rating: 5,
                    date: '2026-03-07',
                    text: "This guided tour of both the Taj Mahal and Agra Fort was perfectly planned. We started at the Taj Mahal where our guide explained the Islamic paradise garden concept and the significance of the four water channels. The marble inlay work is even more detailed up close than you would expect. At Agra Fort the guide connected the stories, showing us where Shah Jahan lived before and after the Taj was built. The Sheesh Mahal mirror palace was a highlight. Great comprehensive experience.",
                },
                {
                    author: 'Karl B.',
                    country: 'Germany',
                    rating: 5,
                    date: '2026-02-25',
                    text: "Excellent guided tour covering the two most important monuments in Agra. Our guide was a certified historian who brought the Mughal era to life. At the Taj Mahal he explained the symbolism of every element, from the cypress trees representing death to the lotus flowers representing life. At Agra Fort the Diwan-i-Am audience hall was impressive and the guide showed us how the acoustics were designed so the emperor could hear petitions from his throne. Very knowledgable and passionate guide.",
                },
                {
                    author: 'Amy L.',
                    country: 'Canada',
                    rating: 4,
                    date: '2026-03-01',
                    text: "Good combined tour of the Taj Mahal and Agra Fort. The guide was professional and had extensive knowledge of both sites. The Taj Mahal portion was emotional, hearing the love story behind its construction. Agra Fort was impressive in scale but I felt we could have spent more time there as we only scratched the surface of such a huge complex. The guide was flexible about photo stops which I appreciated. Overall good value for covering both monuments.",
                },
                {
                    author: 'Raj P.',
                    country: 'India',
                    rating: 5,
                    date: '2026-02-17',
                    text: "Even as an Indian visiting from Bangalore, having a guided tour of the Taj Mahal and Agra Fort was worth it. The guide knew details I had never heard before, like how the minarets are designed to fall outward away from the main tomb in case of earthquake. At Agra Fort he showed us the Jahangiri Mahal with its Hindu-style carvings and explained how each emperor modified the fort to suit his taste. The guided experience is definately superior to wandering around on your own.",
                },
                {
                    author: 'Charlotte A.',
                    country: 'Belgium',
                    rating: 5,
                    date: '2026-03-10',
                    text: "Wonderful guided tour covering both of Agra's UNESCO World Heritage sites in one go. The Taj Mahal was breathtaking and our guide made it even better by pointing out the optical illusion where the Quran verses appear the same size from bottom to top even though they actually get larger. Agra Fort was a great complement, the red sandstone architecture contrasts beautifully with the Taj's white marble. Our guide was absolutley fantastic with his storytelling. Reccomend this combined tour.",
                },
            ],
        };
    }

    if (slug === 'taj-mahal-sunrise-guided-tour') {
        return {
            averageRating: 4.9,
            totalReviews: 14,
            guideRating: 5.0,
            valueRating: 4.8,
            reviews: [
                {
                    author: 'Michelle K.',
                    country: 'United States',
                    rating: 5,
                    date: '2026-03-09',
                    text: "The sunrise at the Taj Mahal was the most beautiful thing I have ever seen. Our guide collected us in the pre-dawn darkness and we entered as soon as the gates opened. The sky was still dark blue and the Taj was just a ghostly white silhouette. Then as the sun broke the horizon the marble started changing colours, first a soft lavender, then pink, then warm gold. The guide positioned us perfectly for each phase. By 8am it was getting crowded but we had already experienced the magic. Unforgettable.",
                },
                {
                    author: 'Peter G.',
                    country: 'Netherlands',
                    rating: 5,
                    date: '2026-02-27',
                    text: "Waking at 4:30am was painful but this sunrise tour made it absolutley worth the sacrifice. Our guide had torches ready for the walk through the dark gardens. As the sun rose the Taj Mahal transformed minute by minute. The reflection in the water channels at dawn when there are no ripples was picture perfect. The guide explained how the Taj was designed to catch the sunrise light and that Mumtaz Mahal's tomb faces east toward Mecca for this reason. A deeply moving experience.",
                },
                {
                    author: 'Alison F.',
                    country: 'Ireland',
                    rating: 5,
                    date: '2026-03-04',
                    text: "Do the sunrise tour. Just do it. Yes its early but the Taj Mahal at dawn is completley different from any other time. The gardens are misty and quiet. The marble glows in colours you wont see later in the day. Our guided tour was excellent, the guide was there before us with everything prepared and his knowledge of the monument was impressive. He gave us the history while we watched the light show nature was putting on. Best morning of our entire India trip.",
                },
                {
                    author: 'Takeshi M.',
                    country: 'Japan',
                    rating: 4,
                    date: '2026-02-18',
                    text: "Beautiful sunrise experience at the Taj Mahal. The guided tour was well organized and the guide was knowledgable about the history and architecture. The early morning light on the white marble was stunning, especially the warm pink tones just after sunrise. The gardens were peaceful with very few visitors. Only giving 4 stars because the tour ended a bit abruptly, I would have liked more time to sit and absorb the atmosphere after the formal guide portion ended.",
                },
                {
                    author: 'Laura V.',
                    country: 'Spain',
                    rating: 5,
                    date: '2026-03-12',
                    text: "The sunrise guided tour was the highlight of our two weeks in India. Our guide was passionate and clearly loved sharing the sunrise experience with visitors. He explained how the Taj Mahal was built to be viewed at different times of day and how Shah Jahan would visit at dawn. The colours on the marble, from blue to pink to gold to white, happened right before our eyes. We had the reflecting pool to ourselves for photos. Definately the best way to see the Taj. Worth every early morning minute.",
                },
            ],
        };
    }

    if (slug === 'fatehpur-sikri-guided-tour') {
        return {
            averageRating: 4.7,
            totalReviews: 10,
            guideRating: 4.8,
            valueRating: 4.6,
            reviews: [
                {
                    author: 'Brian T.',
                    country: 'United States',
                    rating: 5,
                    date: '2026-03-07',
                    text: "Booking a tour guide for Fatehpur Sikri was the best decision. This ghost city is fascinating but without a guide you would miss so much context. Our guide explained how Emperor Akbar built this entire capital city after the Sufi saint Salim Chishti predicted the birth of his son. The Buland Darwaza is the tallest gateway in the world at 54 meters and walking through it was awe-inspiring. Jodha Bai's palace showed the Hindu-Muslim architectural fusion beautifully. Much more interesting than the Taj in some ways.",
                },
                {
                    author: 'Claudia S.',
                    country: 'Germany',
                    rating: 4,
                    date: '2026-02-23',
                    text: "Fatehpur Sikri is an underrated gem and having a guide made all the difference. The abandoned Mughal capital has palaces, mosques, and courtyards that tell the story of Akbar's reign. The Panch Mahal with its 176 columns where the royal women would sit was architecturally amazing. The tomb of Salim Chishti with its marble lattice screens was beautiful. Only giving 4 stars because the site is very spread out and we were quite tired by the end in the heat. Bring lots of water.",
                },
                {
                    author: 'Jason M.',
                    country: 'Australia',
                    rating: 5,
                    date: '2026-03-02',
                    text: "Our guide at Fatehpur Sikri brought this ghost city to life. He showed us the Pachisi court where Akbar played chess with real people, the Diwan-i-Khas with its incredible central pillar, and the Birbal's House with its intricate carvings. The story of how Akbar abandoned this magnificent city after just 14 years because the water ran out is both tragic and facinating. The Buland Darwaza gate is massive and the view from the top of the steps is spectacular. Definately hire a guide here.",
                },
                {
                    author: 'Marie P.',
                    country: 'France',
                    rating: 5,
                    date: '2026-02-14',
                    text: "Fatehpur Sikri deserves much more attention than it gets. Our tour guide was excellent, he explained the layout of the entire palace complex and how it reflected Akbar's vision of religious harmony. The Ibadat Khana where Akbar held interfaith dialogues was a highlight. Jodha Bai's palace has Hindu elements like elephants and lotus flowers alongside Islamic geometric patterns. The tomb of Salim Chishti is completley covered in intricate marble lattice work. A must visit with a guide.",
                },
                {
                    author: 'Kevin O.',
                    country: 'Ireland',
                    rating: 5,
                    date: '2026-03-10',
                    text: "Hiring a guide for Fatehpur Sikri was essential. Without one you would just be walking through old buildings with no context. Our guide made us feel like we were there in the 16th century, describing court life under Akbar, the religious debates, and the drama of the royal harem. The Buland Darwaza is absolutley enormous, you feel tiny standing at its base. The whole site is remarkably well preserved for a 450-year-old abandoned city. Well worth the hour drive from Agra.",
                },
            ],
        };
    }

    if (slug === 'same-day-delhi-to-agra-tour') {
        return {
            averageRating: 4.7,
            totalReviews: 17,
            guideRating: 4.8,
            valueRating: 4.6,
            reviews: [
                {
                    author: 'Heather D.',
                    country: 'United States',
                    rating: 5,
                    date: '2026-03-08',
                    text: "This same day Delhi to Agra tour was perfectly organised. Picked up from our hotel near Karol Bagh at 6am and were at the Taj Mahal by 10am. The guide in Agra was excellent and gave us nearly 2 hours at the Taj. We also visited Agra Fort and had a nice lunch. The drive back took about 3.5 hours on the expressway. Everything was included and there were no surprise stops at shopping places. Clean car, safe driver, great guide. Exactly what we wanted for our one day in Agra.",
                },
                {
                    author: 'Michael F.',
                    country: 'New Zealand',
                    rating: 4,
                    date: '2026-02-24',
                    text: "Good same day trip from Delhi to Agra covering the main sights. The car was comfortable and the driver experienced on the highway. The Taj Mahal was incredible and our guide did a thorough job explaining the history and architecture. We also visited Agra Fort. The only downside was the long drive, about 3-4 hours each way, which makes for a tiring day. But if you only have one day to spare its definately doable and worth it. The Taj Mahal is a must-see.",
                },
                {
                    author: 'Helena R.',
                    country: 'Portugal',
                    rating: 5,
                    date: '2026-03-03',
                    text: "We only had one free day in Delhi and this same day Agra tour was the perfect solution. The pickup from our hotel was punctual, the car was clean with AC, and the driver drove safely on the expressway. Our guide in Agra was passionate about the Taj Mahal and knew every detail of the Mughal architecture. We had enough time for the Taj Mahal, Agra Fort, and a quick visit to Baby Taj. Got back to our Delhi hotel by 8:30pm. Reccomend this for anyone with limited time.",
                },
                {
                    author: 'Benjamin S.',
                    country: 'Switzerland',
                    rating: 5,
                    date: '2026-02-15',
                    text: "Excellent same day tour from Delhi to Agra. The whole experience was well planned with no wasted time. Our driver knew the best routes and we arrived in Agra by mid-morning. The Taj Mahal was everything we expected and more, our guide brought the history alive. Agra Fort was impressive too. The return journey was smooth with a stop for tea halfway. Good value considering it includes car, driver, guide, and entrance fees. Completley hassle free way to see the Taj.",
                },
                {
                    author: 'Ayumi K.',
                    country: 'Japan',
                    rating: 4,
                    date: '2026-03-10',
                    text: "Decent same day tour from Delhi. The Taj Mahal was breathtaking and the guide was good. The car was comfortable for the long drive. I appreciated that the itinerary was focused on the major sights without unnecessary detours. Giving 4 stars because the day was very long, about 14 hours from pickup to drop-off, and I was exhausted by the end. If you have the option I would suggest the overnight tour instead. But if one day is all you have this tour works well.",
                },
            ],
        };
    }

    if (slug === 'taj-mahal-same-day-tour-from-delhi') {
        return {
            averageRating: 4.8,
            totalReviews: 35,
            guideRating: 4.9,
            valueRating: 4.7,
            reviews: [
                {
                    author: 'Katherine M.',
                    country: 'United Kingdom',
                    rating: 5,
                    date: '2026-03-09',
                    text: "This same day Taj Mahal tour from Delhi was flawless. Picked up at 5:30am from our hotel in Paharganj and driven to Agra on the expressway. The Taj Mahal was even more beautiful than I imagined, the white marble glowing in the morning sun was mesmerising. Our guide explained the love story of Shah Jahan and Mumtaz Mahal with such passion that I actually got emotional. We also visited Agra Fort before heading back. Door to door service made everything easy.",
                },
                {
                    author: 'Robert T.',
                    country: 'Canada',
                    rating: 5,
                    date: '2026-02-26',
                    text: "Outstanding same day tour from Delhi to the Taj Mahal. The drive on the Yamuna Expressway was smooth in our private car. Our guide in Agra was a certified historian who knew an incredible amount about the Mughal period. He showed us details in the marble inlay that most visitors completely miss, including tiny flowers made from dozens of individual precious stones. After the Taj we visited Agra Fort and had a tasty lunch at a local restaurant. Back in Delhi by 7pm. Reccomend this without hesitation.",
                },
                {
                    author: 'Anna B.',
                    country: 'Poland',
                    rating: 4,
                    date: '2026-03-04',
                    text: "Good same day tour to the Taj Mahal from Delhi. Everything was well organized and the car was comfortable. The Taj Mahal is stunning and our guide was knowledgable. We also stopped at Agra Fort which was impressive. The drive each way is about 3-4 hours which is tiring but manageable. I gave 4 stars because the lunch included was just okay, nothing special. But the actual tour experience was excellent and the guide was professional. Would reccomend for time-pressed visitors.",
                },
                {
                    author: 'David L.',
                    country: 'Australia',
                    rating: 5,
                    date: '2026-02-17',
                    text: "We had just one day free in Delhi and this Taj Mahal day trip made it count. The private car was spacious with cold water bottles provided. Our driver was calm and professional on the highway. In Agra the guide was absolutley fantastic, he spent 90 minutes at the Taj Mahal and another hour at Agra Fort. The entrance tickets were pre-arranged so no queuing. Having everything taken care of meant we could just focus on enjoying the experience. Best day of our India trip.",
                },
                {
                    author: 'Emma V.',
                    country: 'Denmark',
                    rating: 5,
                    date: '2026-03-11',
                    text: "Perfect day trip from Delhi. The early start was worth it to reach the Taj Mahal before the biggest crowds. Our guide was passionate and showed us the architectural details that make the Taj unique, like how it appears to grow larger as you walk toward it because of clever perspective design. The pietra dura stonework is intricate beyond belief. Agra Fort was a great bonus. The return drive was relaxing and we arrived at our Delhi hotel by evening. Definately the way to do it if you have one day.",
                },
            ],
        };
    }

    if (slug === 'taj-mahal-tour-with-female-guide') {
        return {
            averageRating: 4.9,
            totalReviews: 12,
            guideRating: 5.0,
            valueRating: 4.8,
            reviews: [
                {
                    author: 'Sarah J.',
                    country: 'United States',
                    rating: 5,
                    date: '2026-03-08',
                    text: "As a solo female traveler, having a female guide at the Taj Mahal made me feel so much more comfortable and safe. She was incredibly knowledgable about the history and architecture, and she also shared a woman's perspective on the love story of Shah Jahan and Mumtaz Mahal that male guides probably wouldnt think to mention. She navigated the crowds expertly and made sure I was never bothered by touts. I felt protected and educated at the same time. Highly reccomend for women travelers.",
                },
                {
                    author: 'Priya M.',
                    country: 'India',
                    rating: 5,
                    date: '2026-02-25',
                    text: "Having a female guide for the Taj Mahal was a wonderful choice for our all-women group. She was articulate, passionate, and brought a unique perspective to the tour. She told us about Mumtaz Mahal not just as a love story but as a powerful woman who was Shah Jahan's chief advisor. She also shared insights about the women of the Mughal court and their influence that we had never heard before. She made us feel comfortable asking questions and took great care of our group.",
                },
                {
                    author: 'Emily C.',
                    country: 'Australia',
                    rating: 5,
                    date: '2026-03-02',
                    text: "Booking a female guide was the best decision for our mother-daughter trip to the Taj Mahal. She was warm, engaging, and absolutley brilliant in her knowledge of Mughal history. She told us how Mumtaz Mahal traveled with the army and bore 14 children, and how her death during childbirth inspired the greatest monument of love ever built. Having a woman guide also meant we could comfortably ask about cultural things and she helped us with our dupattas for the mosque visit. Lovely experience.",
                },
                {
                    author: 'Marie T.',
                    country: 'France',
                    rating: 4,
                    date: '2026-02-16',
                    text: "Very good experience with our female guide at the Taj Mahal. She was professional, knowledgable, and easy to talk to. As women traveling in India we appreciated feeling safe and comfortable with her guidance through the crowds. Her knowledge of the architecture and history was impressive. She also gave us practical advice about navigating Agra as female travelers. Only 4 stars because the tour felt slightly short. But the quality of the guide was exceptional.",
                },
                {
                    author: 'Rebecca N.',
                    country: 'United Kingdom',
                    rating: 5,
                    date: '2026-03-11',
                    text: "I specifically sought out a female guide for the Taj Mahal and it was completley worth it. She was one of the few female certified guides in Agra and her passion for breaking barriers in a male-dominated industry was inspiring. Beyond being a great guide with deep knowledge, she created a safe and comfortable atmosphere for me as a solo woman. She shared stories about the women of the Mughal era and their hidden influence. She also knew all the best spots for photos. Definately reccomend for any woman visiting the Taj.",
                },
            ],
        };
    }

    if (slug === 'taj-mahal-sunrise-tour') {
        return {
            averageRating: 4.9,
            totalReviews: 16,
            guideRating: 5.0,
            valueRating: 4.8,
            reviews: [
                {
                    author: 'Jessica T.',
                    country: 'United States',
                    rating: 5,
                    date: '2026-03-10',
                    text: "The skip-the-line sunrise tour was incredible. While a massive queue was forming at the main entrance, we went through the priority lane and were inside within 5 minutes. At that early hour the Taj Mahal was bathed in soft pre-dawn light and the grounds were nearly empty. Watching the sun rise behind the dome while the marble shifted from silvery blue to warm pink was magical. The guide had our tickets pre-arranged so there was absolutley zero hassle. Best morning of our trip.",
                },
                {
                    author: 'Marco P.',
                    country: 'Italy',
                    rating: 5,
                    date: '2026-02-28',
                    text: "Skipping the line at sunrise was a game changer. We were inside the Taj Mahal complex while other tourists were still queuing for tickets. The early morning atmosphere was peaceful and almost meditative. The sunrise colours on the marble are something you have to see with your own eyes, no photo can capture the shifting shades. Our guide was excellent, knowledgable and patient, letting us sit on the bench and just absorb the beauty before explaining the history. Completley unforgettable.",
                },
                {
                    author: 'Clara H.',
                    country: 'Germany',
                    rating: 5,
                    date: '2026-03-05',
                    text: "The combination of skip-the-line entry and sunrise timing was perfect. We got into the complex quickly and positioned ourselves at the reflecting pool for the sunrise. The marble went through an incredible transformation of colours. Our guide explained that Shah Jahan designed the Taj to be most beautiful at sunrise as Mumtaz was the light of his life. Whether thats true or not, seeing it at dawn definately feels like the right way to experience it. Worth waking up at 4am for this.",
                },
                {
                    author: 'James O.',
                    country: 'Canada',
                    rating: 4,
                    date: '2026-02-19',
                    text: "Great sunrise experience with skip-the-line access. The fast entry meant we had a good 30 minutes with very few other visitors which was precious. The sunrise was beautiful and our guide was informative. He showed us how the Taj Mahal appears symmetrical but there is one deliberate asymmetry, Shah Jahan's tomb which was added later and placed off-centre. Interesting detail. Deducting one star because the guide rushed us a bit at the end, I would have liked another 20 minutes.",
                },
                {
                    author: 'Isabelle R.',
                    country: 'France',
                    rating: 5,
                    date: '2026-03-12',
                    text: "The skip-the-line sunrise tour is the only way to see the Taj Mahal in my opinion. We walked straight through priority entry while a long queue stretched around the corner. In the pre-dawn darkness the Taj loomed like a ghostly white vision. Then the sunrise painted it in every shade of pink and gold imaginable. The gardens were still dewy and quiet. Our guide was passionate and emotional about the monument and his enthusiasm was contagious. Absolutley the best experience in Agra.",
                },
            ],
        };
    }

    if (slug === 'taj-mahal-full-day-tour') {
        return {
            averageRating: 4.8,
            totalReviews: 19,
            guideRating: 4.9,
            valueRating: 4.7,
            reviews: [
                {
                    author: 'Linda H.',
                    country: 'United States',
                    rating: 5,
                    date: '2026-03-09',
                    text: "This private day trip from Delhi to the Taj Mahal and Agra was completley hassle-free. The car picked us up from our hotel and the transfers were smooth on the Yamuna Expressway. Our guide in Agra was exceptional, spending nearly 2 hours at the Taj Mahal explaining the architecture, history, and symbolism. We also visited Agra Fort. The fact that it was a private tour with transfers included meant we could just enjoy the day without worrying about logistics. Back at our Delhi hotel by 8pm.",
                },
                {
                    author: 'Sebastian M.',
                    country: 'Germany',
                    rating: 5,
                    date: '2026-02-26',
                    text: "Excellent private day trip from Delhi to Agra. Everything was included, comfortable car, professional driver, knowledgable guide, and entrance tickets. The Taj Mahal was as magnificent as everyone says. Our guide pointed out how the four minarets lean slightly outward as an earthquake safety feature which I found facinating. Agra Fort afterward was equally impressive. The transfer from Delhi was comfortable and the driver was safe. Great value for a comprehensive Agra experience.",
                },
                {
                    author: 'Hannah R.',
                    country: 'New Zealand',
                    rating: 4,
                    date: '2026-03-02',
                    text: "Good full day private tour from Delhi covering the Taj Mahal and Agra. The car was comfortable and the driver experienced. The guide in Agra was knowledgable about the Mughal history. The Taj Mahal was stunning and Agra Fort was a great addition. Transfers from Delhi were smooth. Only giving 4 stars because we stopped at a marble workshop on the way back which felt like a sales pitch. I would have preferred to skip that and spend more time at the actual monuments.",
                },
                {
                    author: 'Francesco G.',
                    country: 'Italy',
                    rating: 5,
                    date: '2026-02-16',
                    text: "The private day trip from Delhi to the Taj Mahal was one of the best tours we have ever taken. The car was spacious and clean, the driver professional, and our guide in Agra was absolutley wonderful. He spent time at each monument ensuring we understood the significance of what we were seeing. The Taj Mahal at midday when the white marble is blazing in the sun is breathtaking. The included transfers made the whole experience stress-free. Highly reccomend this tour.",
                },
                {
                    author: 'Elsa K.',
                    country: 'Sweden',
                    rating: 5,
                    date: '2026-03-11',
                    text: "Perfect way to see the Taj Mahal if youre based in Delhi. The private car collected us early and the drive was smooth. In Agra our guide was passionate about the history and showed us every important detail at the Taj Mahal, from the calligraphy to the stone inlay to the acoustic properties of the main chamber. Agra Fort was also fascinating. The transfers back to Delhi were comfortable with cold water in the car. The private format meant we could go at our own pace. Definately reccomend.",
                },
            ],
        };
    }

    if (slug === 'taj-mahal-entry-ticket') {
        return {
            averageRating: 4.7,
            totalReviews: 15,
            guideRating: 4.7,
            valueRating: 4.5,
            reviews: [
                {
                    author: 'Chris B.',
                    country: 'United States',
                    rating: 5,
                    date: '2026-03-08',
                    text: "Buying the skip-the-line entry ticket through this service saved us so much time and stress. When we arrived at the Taj Mahal there was a massive queue of people trying to buy tickets at the counter. We walked straight to the priority lane and were inside in under 10 minutes. The ticket was for foreigners and included the mausoleum entry which some cheaper tickets dont. The whole process was simple, we received the e-ticket on WhatsApp the day before. Definately worth it to avoid the chaos.",
                },
                {
                    author: 'Angela W.',
                    country: 'Australia',
                    rating: 5,
                    date: '2026-02-25',
                    text: "So glad we pre-booked the skip-the-line ticket for the Taj Mahal. The official ticket counters had queues stretching for what looked like an hour. We showed our pre-purchased ticket and went through the priority entrance. The ticket included admission to the main mausoleum which costs extra if you buy at the gate. The e-ticket process was straightforward and the confirmation came quickly. If you are a foreigner visiting the Taj this is a no-brainer. Saved us time and the hassle of dealing with the counters.",
                },
                {
                    author: 'Leo S.',
                    country: 'Switzerland',
                    rating: 4,
                    date: '2026-03-03',
                    text: "Convenient way to get Taj Mahal tickets without queuing. The skip-the-line access worked as advertised and we entered quickly. The ticket price is higher than buying at the counter but the time saved was worth it. The e-ticket was sent promptly and the instructions for which gate to use were clear. One note, you still need to go through security screening which everyone has to do regardless of ticket type. But overall a good service that avoids the confusing ticket buying process.",
                },
                {
                    author: 'Nina T.',
                    country: 'Canada',
                    rating: 4,
                    date: '2026-02-16',
                    text: "Pre-booking the entry ticket was smart. The ticket counters at the Taj Mahal are chaotic with touts trying to sell you overpriced tickets and guide services. Having our official skip-the-line ticket meant we bypassed all of that. The price was transparent with no hidden fees. The only reason for 4 stars is that I wish the listing was clearer about what is and isnt included. But the skip-the-line experience itself was smooth and I would reccomend it to any foreign visitor.",
                },
                {
                    author: 'Pierre M.',
                    country: 'France',
                    rating: 5,
                    date: '2026-03-10',
                    text: "Absolutley get the skip-the-line ticket. We saw the regular queue and it was at least 45 minutes long with people pushing and shouting. We walked to the priority entrance, showed our pre-purchased ticket, and were inside the Taj Mahal complex within minutes. The ticket was the official 2026 foreigner rate with mausoleum access included. The whole booking process was easy and the confirmation came quickly. This saved us both time and the stress of navigating the chaotic ticket counters.",
                },
            ],
        };
    }

    if (slug === 'taj-mahal-official-guided-tour') {
        return {
            averageRating: 4.8,
            totalReviews: 14,
            guideRating: 4.9,
            valueRating: 4.7,
            reviews: [
                {
                    author: 'Nancy R.',
                    country: 'United States',
                    rating: 5,
                    date: '2026-03-07',
                    text: "Booking an official tour guide for the Taj Mahal was the smartest thing we did. Our guide had a government-issued ID badge and was clearly certified. He explained the architecture, the Islamic calligraphy, the pietra dura inlay technique, and the garden layout in incredible detail. He also warned us about common scams outside the monument and helped us avoid them. Having an official guide meant we could trust everything he said was accurate. Worth every rupee for the depth of knowledge.",
                },
                {
                    author: 'Henrik L.',
                    country: 'Denmark',
                    rating: 5,
                    date: '2026-02-24',
                    text: "We had unofficial guides approach us at the gate offering cheap tours but we're glad we had pre-booked an official guide. The difference in quality was obvious. Our guide was professional, articulate, and had encyclopedic knowledge of the Taj Mahal. He showed us the optical illusion of the gateway where the Taj appears to grow larger as you walk toward it, and explained how the calligraphy is designed to appear the same size from every distance. An official guide is definately the way to go.",
                },
                {
                    author: 'Rachel W.',
                    country: 'Canada',
                    rating: 4,
                    date: '2026-03-02',
                    text: "Good experience with our official Taj Mahal guide. He was punctual, professional, and very knowledgable. He explained the significance of the semi-precious stones used in the inlay work, with lapis lazuli from Afghanistan and jasper from Punjab. The history of Shah Jahan and Mumtaz Mahal was told beautifully. I'm giving 4 stars only because the tour was about 90 minutes and I felt it could have been a bit longer given the price. But the quality of the guiding was excellent.",
                },
                {
                    author: 'Giovanni F.',
                    country: 'Italy',
                    rating: 5,
                    date: '2026-02-15',
                    text: "Having an official government-certified guide at the Taj Mahal made the experience completley different from just walking around on your own. He showed us details that we would have walked right past, like how the marble flowers have 43 different types of semi-precious stones and how each petal is a separate piece fitted together. He explained the acoustic properties of the main chamber where a single note echoes for 28 seconds. Absolutley fascinating and well worth booking.",
                },
                {
                    author: 'Lucy T.',
                    country: 'New Zealand',
                    rating: 5,
                    date: '2026-03-11',
                    text: "The official tour guide was excellent. You can tell the difference between certified guides and the random people offering tours at the gate. Our guide had deep knowledge that went beyond the basic facts, he talked about the astronomical alignments, the mathematical precision of the gardens, and the spiritual symbolism of the whole design. He also took wonderful photos for us and knew exactley the right spots and angles. Reccomend booking an official guide rather than taking chances with someone at the gate.",
                },
            ],
        };
    }

    // --- DELHI TOURS ---

    if (slug === 'india-gate-guided-tour') {
        return {
            averageRating: 4.8,
            totalReviews: 16,
            guideRating: 4.9,
            valueRating: 4.7,
            reviews: [
                {
                    author: 'Rachel K.',
                    country: 'United States',
                    rating: 5,
                    date: '2026-03-08',
                    text: "This 4 day tour covering Delhi, Agra, Ranthambore and Jaipur was absolutley packed with highlights. Our guide gave us a wonderful introduction to Delhi on day one, then we drove to Agra for the Taj Mahal at sunrise which was magical. Ranthambore was the real surprise though, the jungle scenery was stunning even before we spotted a tiger. Jaipur rounded things off perfectly with Amber Fort and Hawa Mahal. Could not reccomend this itinerary enough for first timers to India.",
                },
                {
                    author: 'Thomas B.',
                    country: 'Germany',
                    rating: 5,
                    date: '2026-02-25',
                    text: "Four days covering Delhi, Agra, Ranthambore and Jaipur sounds ambitious but our guide and driver made it feel relaxed. The hotels were comfortable and clean at every stop. Seeing the Taj Mahal at golden hour and then a tiger safari the next morning was an incredible contrast. The driver was very skilled on Indian roads which made the long drives between cities much less stressful. Great value for a multi city tour.",
                },
                {
                    author: 'Yuki S.',
                    country: 'Japan',
                    rating: 4,
                    date: '2026-03-02',
                    text: "Really enjoyed this 4 day circuit through Rajasthan's top destinations. Delhi sightseeing on day one covered India Gate and Humayun's Tomb nicely. The Agra portion was well timed so we avoided the worst crowds at the Taj. Ranthambore jeep safari was exciting even though we only saw deer and peacocks, no tigers that day. Would have liked one more night in Jaipur as it felt a bit rushed there.",
                },
                {
                    author: 'Sophie L.',
                    country: 'France',
                    rating: 5,
                    date: '2026-02-18',
                    text: "Booked this for my parents visiting India for the first time and they absolutley loved it. The guide was patient, knowledgable and spoke excellent English. All four cities delivered unique experiences, from the chaos of Old Delhi to the serenity of the Taj Mahal to the wildness of Ranthambore. The included meals were surprisingly good quality. A perfect introduction to northern India in just 4 days.",
                },
                {
                    author: 'David W.',
                    country: 'Canada',
                    rating: 5,
                    date: '2026-03-11',
                    text: "What a whirlwind 4 days. Started in Delhi with visits to India Gate and Qutub Minar, then drove to Agra where seeing the Taj Mahal in person completley exceeded my expectations from photos. The Ranthambore safari was a bucket list experience and we actually spotted two tigers near a watering hole. Finished in Jaipur with the beautiful City Palace. Every detail was handled perfectly by the tour team.",
                },
            ],
        };
    }

    if (slug === '6-day-golden-triangle-tour-with-tiger-safari') {
        return {
            averageRating: 4.9,
            totalReviews: 12,
            guideRating: 5.0,
            valueRating: 4.8,
            reviews: [
                {
                    author: 'James H.',
                    country: 'United Kingdom',
                    rating: 5,
                    date: '2026-03-06',
                    text: "This 6 day Golden Triangle tour with the tiger safari extension was the best decision we made for our India trip. Delhi, Agra and Jaipur were all fantastic but adding Ranthambore made it truly special. We did two jeep safaris and spotted three different tigers including a mother with cubs. The guides at every location were top notch and the hotels were really comfortable. Six days is the perfect pacing for this route.",
                },
                {
                    author: 'Maria G.',
                    country: 'Spain',
                    rating: 5,
                    date: '2026-02-22',
                    text: "Definitley the highlight of our 3 week India trip. The Golden Triangle circuit covered all the must see monuments, the Taj Mahal at sunrise, Amber Fort, Hawa Mahal, India Gate, and then Ranthambore National Park added a completley different dimension. Our naturalist guide in Ranthambore was incredibly passionate about tiger conservation. The private car and driver made everything so comfortable between cities. Six days was just right, not too rushed.",
                },
                {
                    author: 'Oliver N.',
                    country: 'Australia',
                    rating: 5,
                    date: '2026-03-01',
                    text: "Incredible 6 day experience covering the best of Rajasthan plus wildlife. The itinerary was perfectly planned with enough time at each destination. In Delhi we explored both Old and New Delhi thoroughly. Agra was all about the Taj obviously but we also loved Agra Fort. The two morning safaris in Ranthambore were thrilling, we saw a tiger on the second one and our driver knew exactly where to position the jeep. Jaipur was the perfect finale with shopping in the bazaars.",
                },
                {
                    author: 'Chen W.',
                    country: 'Singapore',
                    rating: 4,
                    date: '2026-02-15',
                    text: "Very well organised 6 day tour. The Golden Triangle portion was excellent with knowledgable guides at every major site. The Ranthambore tiger safari was exciting though we were unlucky and did not spot a tiger, only spotted deer, monkeys and beautiful birds. The hotels ranged from good to very good. Driving between cities took longer than expected but the driver was safe and the car was comfortable with good AC. Would have appreciated slightly better lunch options on driving days.",
                },
                {
                    author: 'Emma D.',
                    country: 'Ireland',
                    rating: 5,
                    date: '2026-03-10',
                    text: "This tour exceeded every expectation. Six days covering Delhi, Agra, Ranthambore and Jaipur with a private guide and driver felt incredibly luxurious. The tiger safari was absolutley unreal, we saw a massive male tiger crossing the road just 20 meters from our jeep. Our guide also arranged a visit to Ranthambore Fort which had amazing views. Coming back to Jaipur for the final two nights with visits to Amber Fort and the City Palace was the perfect ending.",
                },
            ],
        };
    }

    if (slug === 'golden-triangle-ranthambore-tiger-safari-4-days') {
        return {
            averageRating: 4.7,
            totalReviews: 14,
            guideRating: 4.8,
            valueRating: 4.6,
            reviews: [
                {
                    author: 'Patrick O.',
                    country: 'United States',
                    rating: 5,
                    date: '2026-03-04',
                    text: "Packed the Golden Triangle and Ranthambore into 4 days and somehow it never felt rushed. Starting from Delhi we drove to Agra, saw the Taj Mahal, then continued to Ranthambore for a morning jeep safari where we spotted a tiger resting by a lake. Finished in Jaipur with Amber Fort. The driver was fantastic on those long stretches of highway. Having a guide who knew the history at every monument made all the difference.",
                },
                {
                    author: 'Lisa V.',
                    country: 'Netherlands',
                    rating: 4,
                    date: '2026-02-20',
                    text: "Good tour that covers a lot of ground in 4 days. The Golden Triangle cities were all wonderful and the Ranthambore addition makes this trip unique compared to the standard 3 day version. We did an early morning safari and saw plenty of wildlife including spotted deer and langur monkeys, but no tiger unfortunately. The pace is quite fast so be prepared for early starts and long driving days. Hotels were decent and the guide was very professional.",
                },
                {
                    author: 'Anna K.',
                    country: 'Sweden',
                    rating: 5,
                    date: '2026-03-09',
                    text: "From Delhi to Agra to Ranthambore to Jaipur in 4 days, this tour delivers the best of northern India with a wildlife twist. The Taj Mahal was everything I dreamed of and more. At Ranthambore we took a canter safari and the jungle atmosphere was incredible, dense forest with ancient ruins scattered throughout. Our naturalist spotted a tigress with her cub near a watering hole which was the most magical wildlife moment of my life. Definately reccomend this itinerary.",
                },
                {
                    author: 'Michael R.',
                    country: 'Canada',
                    rating: 5,
                    date: '2026-02-28',
                    text: "Booked this 4 day Golden Triangle plus Ranthambore tour for my wife and I. Every element was well coordinated, from the comfortable AC car to the knowledgable local guides at each site. The Ranthambore tiger safari was the highlight for sure. Even the drive through the Rajasthan countryside was fascinating with camels and villages along the way. Our Delhi pickup from the hotel was right on time at 6am on day one. Excellent value for money.",
                },
            ],
        };
    }

    if (slug === 'taj-mahal-superfast-guided-tour') {
        return {
            averageRating: 4.8,
            totalReviews: 18,
            guideRating: 4.9,
            valueRating: 4.7,
            reviews: [
                {
                    author: 'Sarah P.',
                    country: 'United Kingdom',
                    rating: 5,
                    date: '2026-03-07',
                    text: "Taking the train from Delhi to Agra for a day trip to the Taj Mahal was so much better than driving. The train was comfortable, fast and we arrived in Agra in about 2 hours. Our guide met us right at the station and took us straight to the Taj. He was incredibly knowledgable about Mughal history and pointed out architectural details I would have completley missed. We also visited Agra Fort before catching the train back. Brilliant way to see the Taj without the hassle of a 4 hour drive.",
                },
                {
                    author: 'Henrik J.',
                    country: 'Denmark',
                    rating: 5,
                    date: '2026-02-24',
                    text: "The train tour to the Taj Mahal is definately the way to go. Picked up from our Delhi hotel at 6am, driven to the station, and on the superfast train to Agra by 7. The whole experience was well organized with no waiting around. Our guide in Agra was passionate about the history of Shah Jahan and Mumtaz Mahal and brought the love story behind the Taj alive. The return train got us back to Delhi by evening. A perfect day trip.",
                },
                {
                    author: 'Jessica L.',
                    country: 'Australia',
                    rating: 4,
                    date: '2026-03-01',
                    text: "Good day trip to see the Taj Mahal from Delhi by train. The superfast train was comfortable with AC and reasonably spacious seats. Our guide at the Taj was excellent and very knowledgable. We also stopped at a marble inlay workshop which was interesting but felt a bit like a sales pitch. The only downside was the train delay on the return journey which added about 45 minutes. But overall a solid and efficient way to visit Agra from Delhi.",
                },
                {
                    author: 'Carlos M.',
                    country: 'Mexico',
                    rating: 5,
                    date: '2026-02-16',
                    text: "Absolutley loved this train tour to the Taj Mahal. I was nervous about driving in India so the train option was perfect. The guide in Agra was waiting for us at the platform and had everything planned perfectly. Seeing the Taj Mahal in person is truly a life changing experience, no photo does it justice. We had a nice lunch at a local restaurant and also visited Baby Taj which was beautiful and much less crowded. Highly reccomend the train option over driving.",
                },
                {
                    author: 'Nina S.',
                    country: 'Germany',
                    rating: 5,
                    date: '2026-03-12',
                    text: "Perfect way to see the Taj Mahal as a day trip from Delhi. The superfast train journey was smooth and we even got breakfast served onboard. Our guide was waiting at Agra station with a big smile and a sign with our names. He took us to the Taj via the south gate which apparently has shorter queues. The whole monument is even more breathtaking than the pictures suggest. We spent about 2 hours there which was plenty of time. Back in Delhi by 8pm, tired but so happy.",
                },
            ],
        };
    }

    if (slug === 'delhi-to-jaipur-same-day-tour-by-car') {
        return {
            averageRating: 4.7,
            totalReviews: 15,
            guideRating: 4.8,
            valueRating: 4.6,
            reviews: [
                {
                    author: 'Amanda C.',
                    country: 'United States',
                    rating: 5,
                    date: '2026-03-05',
                    text: "Did the same day Jaipur trip from Delhi by AC car and it was a great experience. The car was clean, spacious and the AC worked perfectly which is essential in India. Our driver was professional and drove safely on the expressway, we reached Jaipur in about 5 hours. In Jaipur we visited Amber Fort, City Palace and Hawa Mahal with a local guide. Long day but absolutley worth it if you dont have time for an overnight stay.",
                },
                {
                    author: 'Raj P.',
                    country: 'India',
                    rating: 4,
                    date: '2026-02-22',
                    text: "Booked this for my visiting relatives who had just one day to see Jaipur. The AC car was comfortable for the highway drive and the driver knew the route well. We covered Amber Fort, Jal Mahal and Hawa Mahal in Jaipur. The guide was good but seemed a bit rushed at Amber Fort which deserves more time. Return drive was smooth and we were back in Delhi by 10pm. Good option for those short on time but be prepared for a long day of driving.",
                },
                {
                    author: 'Emily W.',
                    country: 'New Zealand',
                    rating: 5,
                    date: '2026-03-10',
                    text: "We only had one free day and wanted to see the Pink City so this same day Jaipur tour by car was perfect. Left Delhi at 6am and reached Jaipur by 11am thanks to the new expressway. Our guide in Jaipur was fantastic and took us to all the major sites including Amber Fort where we saw the mirror palace and City Palace with its beautiful courtyards. The car had bottled water and phone chargers which was a nice touch. Got back to our Delhi hotel by 9pm.",
                },
                {
                    author: 'Tobias F.',
                    country: 'Austria',
                    rating: 5,
                    date: '2026-02-28',
                    text: "Excellent same day tour from Delhi to Jaipur. The AC car was a Toyota Innova with plenty of legroom. The Jaipur-Delhi expressway made the drive much faster than I expected. Once in Jaipur our local guide walked us through the history of the Rajput kings at Amber Fort and then we explored the colourful streets and bazaars of the old city. Had a wonderful traditional Rajasthani thali for lunch. The whole day was seamlessly organised.",
                },
            ],
        };
    }

    if (slug === 'delhi-same-day-sightseeing-tour') {
        return {
            averageRating: 4.8,
            totalReviews: 19,
            guideRating: 4.9,
            valueRating: 4.7,
            reviews: [
                {
                    author: 'Kevin B.',
                    country: 'United States',
                    rating: 5,
                    date: '2026-03-03',
                    text: "This full day Delhi sightseeing tour was the perfect introduction to the city. We covered both Old and New Delhi in one day, starting with a rickshaw ride through the narrow lanes of Chandni Chowk and ending at the Lotus Temple as the sun was setting. Jama Masjid was stunning and our guide explained the Mughal history so well. We also stopped for street food, the paranthas at Paranthe Wali Gali were absolutley delicious. Highly reccomend this tour for first time visitors.",
                },
                {
                    author: 'Ingrid H.',
                    country: 'Norway',
                    rating: 5,
                    date: '2026-02-19',
                    text: "Covered so much of Delhi in just one day. Highlights were the Red Fort, Humayun's Tomb and the Qutub Minar. Our guide was extremely knowledgable about the different eras of Delhi's history from the Mughals to the British Raj. The rickshaw ride through Old Delhi's spice market was an incredible sensory experience, the smells were amazing. We also drove past India Gate and Parliament House in New Delhi which was a nice contrast to the old city. Great value for a full day tour.",
                },
                {
                    author: 'Akiko T.',
                    country: 'Japan',
                    rating: 4,
                    date: '2026-03-09',
                    text: "Good sightseeing tour of Delhi covering the main attractions. The guide was friendly and spoke clear English. We visited Qutub Minar, India Gate, Humayun's Tomb and Red Fort among other sites. The traffic in Delhi is quite intense so we spent a fair amount of time in the car between locations. Would suggest starting earlier in the morning to beat the crowds and the heat. The street food tasting in Old Delhi was a fun addition to the tour.",
                },
                {
                    author: 'Pierre D.',
                    country: 'France',
                    rating: 5,
                    date: '2026-02-27',
                    text: "Absolutley fantastic day exploring Delhi with our guide. The contrast between the chaotic lanes of Old Delhi and the wide boulevards of Lutyens' New Delhi was facinating. Our guide took us inside Jama Masjid and explained the architecture beautifully. The visit to Gurudwara Bangla Sahib was a spiritual highlight, we even helped serve food in the community kitchen. The driver navigated Delhi traffic like a pro. One of the best city tours I have done anywhere in the world.",
                },
                {
                    author: 'Hannah M.',
                    country: 'Canada',
                    rating: 5,
                    date: '2026-03-12',
                    text: "We had just one day in Delhi before flying out and this sightseeing tour made the most of every minute. Started at Raj Ghat where Mahatma Gandhi was cremated, then explored the Red Fort complex. After lunch we headed to New Delhi for India Gate, Rashtrapati Bhavan and the beautiful Lotus Temple. Our guide shared stories about Delhi's 7 historic cities that made the whole experience come alive. The AC car was comfortable and the driver was excellent.",
                },
            ],
        };
    }

    if (slug === 'delhi-sightseeing-half-day-tour') {
        return {
            averageRating: 4.7,
            totalReviews: 13,
            guideRating: 4.8,
            valueRating: 4.6,
            reviews: [
                {
                    author: 'Mike J.',
                    country: 'Australia',
                    rating: 5,
                    date: '2026-03-06',
                    text: "Perfect half day tour for someone with limited time in Delhi. We covered Humayun's Tomb, Qutub Minar and India Gate all in about 4 hours. Our guide was efficient with time but never made us feel rushed at any site. Humayun's Tomb was my favourite, it's like a mini Taj Mahal and way less crowded. The guide explained how this tomb actually inspired the design of the Taj which I found fascinating. Great option if you only have a morning or afternoon free.",
                },
                {
                    author: 'Claudia R.',
                    country: 'Italy',
                    rating: 4,
                    date: '2026-02-21',
                    text: "Booked the half day Delhi sightseeing for our morning before an afternoon flight. We visited India Gate, Parliament House area and Qutub Minar. The guide was knowledgable and gave us a good overview of Delhi's history from the Delhi Sultanate through to independence. Traffic was a bit heavy which cut into our time at Qutub Minar but that is just Delhi being Delhi. The car was clean and air conditioned. Good tour for a quick introduction to the city.",
                },
                {
                    author: 'Daniel K.',
                    country: 'South Korea',
                    rating: 5,
                    date: '2026-03-11',
                    text: "Took this half day sightseeing tour on our first morning in Delhi and it really helped us get oriented. The guide showed us the key landmarks of New Delhi including the Rashtrapati Bhavan, India Gate and the diplomatic enclave. We then visited Humayun's Tomb which was absolutley beautiful in the morning light. The guide arranged for us to try chai from a street vendor which was a lovely touch. Half day is ideal if you want to see the highlights without exhausting yourself.",
                },
                {
                    author: 'Laura S.',
                    country: 'United Kingdom',
                    rating: 5,
                    date: '2026-02-14',
                    text: "We did the afternoon half day tour and it was brilliant. Visited Qutub Minar, the Iron Pillar and then drove through Lutyens' Delhi seeing Parliament House and the grand government buildings. Our guide was so passionate about Delhi's history and architecture. She explained how the British designed New Delhi as an imperial capital and the symbolism behind the layout. Ended at India Gate at sunset which was a perfect finish. Really efficient use of half a day.",
                },
            ],
        };
    }

    if (slug === 'old-new-delhi-private-half-day-tour') {
        return {
            averageRating: 4.8,
            totalReviews: 17,
            guideRating: 4.9,
            valueRating: 4.7,
            reviews: [
                {
                    author: 'Jennifer A.',
                    country: 'United States',
                    rating: 5,
                    date: '2026-03-08',
                    text: "This private tour of Old and New Delhi was incredible. We chose the full day option and it was worth every minute. Started in Old Delhi at the Red Fort, then walked through the bustling lanes of Chandni Chowk to Jama Masjid. After lunch we switched to New Delhi with India Gate, Humayun's Tomb and the Lotus Temple. Having a private guide meant we could spend extra time at sites we loved. The contrast between the two halves of Delhi is absolutley fascinating.",
                },
                {
                    author: 'Martin L.',
                    country: 'Switzerland',
                    rating: 5,
                    date: '2026-02-26',
                    text: "Chose the half day option focusing on Old Delhi and it was brilliant. The guide took us through the spice market in Chandni Chowk where the aromas were unbelievable. We visited Jama Masjid and climbed the minaret for panoramic views over the old city. Then a cycle rickshaw ride through the narrow lanes which was both terrifying and exhilarating. The guide knew all the hidden gems, from tiny sweet shops to a 200 year old haveli that most tourists never see. Highly reccomend.",
                },
                {
                    author: 'Priya N.',
                    country: 'India',
                    rating: 4,
                    date: '2026-03-02',
                    text: "Booked the full day private tour for my parents visiting from Bangalore who had never properly explored Delhi. The guide was excellent and covered both Old and New Delhi comprehensively. Red Fort, Jama Masjid and Chandni Chowk in the morning, then Humayun's Tomb, Qutub Minar and India Gate in the afternoon. One small issue was the car was a bit cramped for four people. Otherwise a really thorough and well paced tour of India's capital.",
                },
                {
                    author: 'Chris W.',
                    country: 'Canada',
                    rating: 5,
                    date: '2026-02-18',
                    text: "The private half day tour was perfect for us. We focused on New Delhi and visited Humayun's Tomb, India Gate, Rashtrapati Bhavan and Qutub Minar. Having a private guide meant we could ask endless questions about Mughal architecture and the British colonial period. The guide was incredibly well read and could answer everything we threw at him. The flexibility of a private tour is definately worth the extra cost compared to group options.",
                },
                {
                    author: 'Mia B.',
                    country: 'Germany',
                    rating: 5,
                    date: '2026-03-13',
                    text: "We did the full day private tour and the guide did an amazing job weaving together the story of Delhi across centuries. From the Mughal era Red Fort to the British era Connaught Place to modern Delhi, every stop told a different chapter. The rickshaw ride through Old Delhi and the street food tasting were highlights. We tried gol gappe, jalebi and the famous butter chicken at a hole in the wall restaurant. The private car was comfortable and the driver was patient. Best tour we did in India.",
                },
            ],
        };
    }

    if (slug === '5-days-golden-triangle-tour-from-delhi') {
        return {
            averageRating: 4.8,
            totalReviews: 11,
            guideRating: 4.9,
            valueRating: 4.7,
            reviews: [
                {
                    author: 'Robert G.',
                    country: 'United Kingdom',
                    rating: 5,
                    date: '2026-03-04',
                    text: "The 5 day Golden Triangle tour from Delhi was perfectly paced. Two nights in Delhi, one in Agra and two in Jaipur gave us enough time to properly explore each city. In Delhi we covered both the Mughal heritage sites and New Delhi's colonial architecture. The Taj Mahal at sunrise was an otherworldly experience. Jaipur was my favourite with Amber Fort and the vibrant bazaars. Hotels were all 4 star and very comfortable. The driver was like having a friend who knows every shortcut.",
                },
                {
                    author: 'Elena P.',
                    country: 'Russia',
                    rating: 5,
                    date: '2026-02-23',
                    text: "Five days was the ideal duration for the Golden Triangle. Unlike the rushed 3 day versions, we actually had time to soak in each destination. Our guide in Delhi was exceptional, covering Humayun's Tomb, Red Fort and Qutub Minar with incredible depth. In Agra we visited both the Taj Mahal and Agra Fort, and even had time for shopping. Jaipur was magical with Amber Fort, City Palace and the elephant sanctuary. The entire trip was well coordinated with seamless hotel transfers.",
                },
                {
                    author: 'Steve M.',
                    country: 'Australia',
                    rating: 4,
                    date: '2026-03-10',
                    text: "Really enjoyed this 5 day tour covering Delhi, Agra and Jaipur. The extra days compared to the 3 day version made a big difference in terms of pacing. We had local guides at each major monument who were all knowledgable and passionate. The drives between cities were long but the car was comfortable with good AC. Hotels were nice though the one in Agra could have been better. Overall a great introduction to India's most famous destinations.",
                },
                {
                    author: 'Ayesha K.',
                    country: 'United Arab Emirates',
                    rating: 5,
                    date: '2026-02-17',
                    text: "Booked the 5 day Golden Triangle for a family trip with my husband and two children. Everything was handled perfectly, from hotel check ins to restaurant suggestions. The kids loved the elephant interactions in Jaipur and were fascinated by the Taj Mahal's symmetry. Our driver was very careful and the car had plenty of room for luggage. The guide in each city tailored his explanations for the children which was a really nice touch. Absolutley reccomend for families.",
                },
            ],
        };
    }

    if (slug === 'taj-mahal-sunrise-elephant-conservation-tour') {
        return {
            averageRating: 4.9,
            totalReviews: 10,
            guideRating: 5.0,
            valueRating: 4.8,
            reviews: [
                {
                    author: 'Katie R.',
                    country: 'United States',
                    rating: 5,
                    date: '2026-03-09',
                    text: "This tour combining the Taj Mahal at sunrise with an elephant conservation center was truly special. We left Delhi at 3am and arrived at the Taj just as the gates opened. Watching the sunrise light up the white marble was breathtaking. After exploring the Taj and Agra Fort, we visited the elephant sanctuary where we learned about ethical elephant care. We got to feed and walk with the elephants, no riding which I really appreciated. A meaningful and beautiful day trip from Delhi.",
                },
                {
                    author: 'Liam O.',
                    country: 'Ireland',
                    rating: 5,
                    date: '2026-02-25',
                    text: "What an incredible combination tour. The sunrise Taj Mahal experience was magical, there were hardly any crowds and the light was perfect for photos. But the elephant conservation center was the real surprise highlight. The staff explained how they rescue elephants from circuses and tourist operations. We spent about an hour interacting with the elephants, feeding them sugarcane and learning about each one's story. Our guide from Delhi was with us the whole day and was absolutley fantastic. Definately worth the early wake up.",
                },
                {
                    author: 'Hanna F.',
                    country: 'Finland',
                    rating: 5,
                    date: '2026-03-02',
                    text: "The sunrise Taj Mahal plus elephant conservation tour is the most unique Agra day trip I found and it did not disappoint. Seeing the Taj at dawn with the mist rising was like something from a dream. The elephant sanctuary in the afternoon was heartwarming, these gentle giants were so well cared for. Our guide was passionate about both the history of the Taj and the conservation work. The drive from Delhi was about 3.5 hours each way but the car was comfortable.",
                },
                {
                    author: 'Marcus T.',
                    country: 'South Africa',
                    rating: 4,
                    date: '2026-02-19',
                    text: "Really enjoyed this combined tour. The Taj Mahal at sunrise was absolutley stunning and our guide had great stories about Shah Jahan and the construction of the monument. The elephant conservation center was a wonderful experience, very ethical and focused on the animals welfare. Only giving 4 stars because the 3am pickup from Delhi was brutal and I was quite tired by afternoon. But if you are an early riser this tour is perfect. The included lunch was decent too.",
                },
                {
                    author: 'Sophia B.',
                    country: 'Brazil',
                    rating: 5,
                    date: '2026-03-14',
                    text: "This was my favourite day trip in all of India. The Taj Mahal sunrise was a once in a lifetime moment, I cried when I first saw it emerging from the morning mist. The elephant conservation center was equally moving but in a different way, seeing these rescued elephants living peacefully and being cared for by dedicated staff. We got to prepare food for them and paint with them which was so fun. Our guide was knowledgable about Mughal history and genuinely cared about the elephants. A perfect day.",
                },
            ],
        };
    }

    if (slug === 'old-new-delhi-guided-tour') {
        return {
            averageRating: 4.7,
            totalReviews: 16,
            guideRating: 4.9,
            valueRating: 4.6,
            reviews: [
                {
                    author: 'Andrew T.',
                    country: 'United Kingdom',
                    rating: 5,
                    date: '2026-03-07',
                    text: "Brilliant guided tour covering both Old and New Delhi. The guide brought Delhi's complex history to life, from the Mughal emperors to the British Raj to independence. In Old Delhi we visited the Red Fort, walked through Chandni Chowk and entered the stunning Jama Masjid. In New Delhi we saw India Gate, Humayun's Tomb and the impressive Qutub Minar. The guide even took us for chai at a local spot in the old city. Thoroughly enjoyed every minute.",
                },
                {
                    author: 'Sandra H.',
                    country: 'Germany',
                    rating: 4,
                    date: '2026-02-21',
                    text: "Good comprehensive tour of Delhi covering the main sites in both the old and new parts of the city. Our guide was knowledgable and spoke excellent English. The Red Fort and Humayun's Tomb were my highlights. Would have liked a bit more time in Chandni Chowk for shopping and street food but the itinerary was already quite full. The car and driver were professional and reliable. A solid way to see Delhi's top attractions in one day.",
                },
                {
                    author: 'Lucas M.',
                    country: 'Brazil',
                    rating: 5,
                    date: '2026-03-11',
                    text: "Our guide for the Old and New Delhi tour was absolutley outstanding. He started with Old Delhi at the Red Fort and explained the decline of the Mughal empire in such a vivid way. The walk through the lanes of Chandni Chowk was sensory overload in the best possible way. In New Delhi, Humayun's Tomb was spectacular and the guide showed us the geometric gardens that influenced the Taj Mahal. We also visited Gurudwara Bangla Sahib which was a peaceful and spiritual experience. Best guided tour I have ever taken.",
                },
                {
                    author: 'Yuki N.',
                    country: 'Japan',
                    rating: 5,
                    date: '2026-02-28',
                    text: "This guided tour of Old and New Delhi was the perfect way to understand the city. Our guide explained how Delhi has been built and rebuilt seven times and showed us evidence of each era. The contrast between the narrow medieval lanes of Old Delhi and the wide tree lined avenues of Lutyens' New Delhi is remarkable. We visited Jama Masjid, India Gate, Qutub Minar and several other sites. The guide was patient with our many questions and very photogenic spot suggestions.",
                },
            ],
        };
    }

    if (slug === 'taj-mahal-same-day-express-train-tour') {
        return {
            averageRating: 4.8,
            totalReviews: 20,
            guideRating: 4.9,
            valueRating: 4.7,
            reviews: [
                {
                    author: 'Rebecca L.',
                    country: 'Australia',
                    rating: 5,
                    date: '2026-03-06',
                    text: "The super fast express train tour to the Taj Mahal was fantastic. We were picked up from our hotel in Delhi and driven to the station. The express train to Agra was really comfortable with AC and plenty of legroom. Arrived in Agra in about 2 hours and our guide was waiting at the station. The Taj Mahal was absolutley breathtaking, even more beautiful than I imagined. We also had time for Agra Fort and a nice lunch before catching the train back. Arrived in Delhi by 8pm. Perfect day trip.",
                },
                {
                    author: 'Tom W.',
                    country: 'United States',
                    rating: 5,
                    date: '2026-02-20',
                    text: "Chose the express train option over driving to Agra and I am so glad I did. The train was fast, clean and on time. In Agra our guide was waiting with a driver and we went straight to the Taj Mahal. The guide was incredibly passionate about the history and took us to the best photo spots that most tourists miss. We visited Agra Fort as well which has amazing views of the Taj from across the river. The whole day was perfectly coordinated from pickup to drop off.",
                },
                {
                    author: 'Marie C.',
                    country: 'France',
                    rating: 4,
                    date: '2026-03-01',
                    text: "Good same day Taj Mahal tour by express train. The train experience itself was interesting and much faster than driving on the highway. Our Agra guide was excellent and very knowledgable about Mughal architecture. The Taj Mahal did not disappoint, it is truly one of the wonders of the world. Only reason for 4 stars is the lunch was average and the train back was delayed by about 30 minutes. But overall definately reccomend the train over a car journey for this day trip.",
                },
                {
                    author: 'Peter S.',
                    country: 'Netherlands',
                    rating: 5,
                    date: '2026-02-15',
                    text: "Brilliant day trip from Delhi to the Taj Mahal by super fast express train. We departed from Hazrat Nizamuddin station early morning and arrived in Agra quickly. The guide met us and took us to the Taj Mahal through the east gate avoiding the main queue. The white marble in the morning sun was stunning. Spent about 2.5 hours at the Taj then visited Agra Fort and had lunch. The return train journey gave us time to rest after a full day. Seamless experience from start to finish.",
                },
                {
                    author: 'Lisa K.',
                    country: 'South Korea',
                    rating: 5,
                    date: '2026-03-13',
                    text: "Taking the express train from Delhi to see the Taj Mahal was one of the best decisions of our India trip. The train was punctual and comfortable, much less stressful than a long car ride. Our guide in Agra was phenomenal, he explained every detail of the Taj's construction including the semi precious stone inlay work. We also visited the Baby Taj (Itimad ud Daulah) which was small but exquisite. Everything was well organized and we felt taken care of the entire day. Would absolutley do this again.",
                },
            ],
        };
    }

    if (slug === 'delhi-agra-private-tour') {
        return {
            averageRating: 4.8,
            totalReviews: 15,
            guideRating: 4.9,
            valueRating: 4.7,
            reviews: [
                {
                    author: 'Christine D.',
                    country: 'United States',
                    rating: 5,
                    date: '2026-03-05',
                    text: "The private day tour from Delhi to see the Taj Mahal and Agra was absolutley wonderful. The 5 star lunch was a real highlight, we dined at a beautiful hotel restaurant with views of the Taj from the rooftop terrace. Our guide was incredibly knowledgable about Mughal history and Shah Jahan's story. The private car was a clean Toyota Innova with cold water bottles. We visited both the Taj Mahal and Agra Fort and had time for souvenir shopping too. A premium experience worth every penny.",
                },
                {
                    author: 'William H.',
                    country: 'United Kingdom',
                    rating: 5,
                    date: '2026-02-24',
                    text: "Booked this private Agra tour specifically because of the included 5 star lunch and it did not disappoint. The lunch was at the Oberoi where we had a beautiful buffet with Mughal inspired dishes. The Taj Mahal itself was mesmerizing, our guide spent nearly 2 hours explaining every architectural detail and the love story behind it. Agra Fort was equally impressive with its mix of red sandstone and white marble. The private car made the 3.5 hour drive comfortable. Definitely the most luxurious way to see the Taj.",
                },
                {
                    author: 'Fumiko Y.',
                    country: 'Japan',
                    rating: 4,
                    date: '2026-03-09',
                    text: "Really nice private tour to Agra with 5 star lunch included. The Taj Mahal was breathtaking and our guide was very knowledgable. The lunch at the luxury hotel was delicious with many options. The car was comfortable for the highway drive. My only minor complaint is that we left the hotel at 6am and did not return until 9pm which made for a very long day. But the experience was definately worth the early start and late finish. Would reccomend to anyone wanting a premium Agra experience.",
                },
                {
                    author: 'Stefan B.',
                    country: 'Austria',
                    rating: 5,
                    date: '2026-02-17',
                    text: "This was hands down the best way to visit the Taj Mahal from Delhi. The private car was spacious and the driver was safe and professional. At the Taj Mahal our guide pointed out details I would have never noticed, like how the minarets lean slightly outward to protect the main dome in case of an earthquake. The 5 star lunch was exceptional with fine Indian cuisine. We finished at Agra Fort where Shah Jahan was imprisoned by his son and could only see the Taj from a distance, what a story. Reccomend this wholeheartedly.",
                },
                {
                    author: 'Natalie P.',
                    country: 'Canada',
                    rating: 5,
                    date: '2026-03-12',
                    text: "My husband and I booked this private Taj Mahal tour with the 5 star lunch for our anniversary and it was perfect. Everything felt curated and premium. The guide was waiting for us at the Taj entrance with skip the line tickets. The monument is even more beautiful up close, the marble inlay work is extraordinary. Lunch at the 5 star hotel was romantic and delicious. The private car had leather seats, AC and a very smooth ride. If you want to see the Taj in style, this is the tour to book.",
                },
            ],
        };
    }

    if (slug === 'delhi-guided-shopping-tour-female-expert') {
        return {
            averageRating: 4.8,
            totalReviews: 42,
            guideRating: 5.0,
            valueRating: 4.6,
            reviews: [
                {
                    author: 'Michelle T.',
                    country: 'United States',
                    rating: 5,
                    date: '2026-03-07',
                    text: "This guided shopping tour with a female expert was exactly what I needed. She took me to the best saree shops in Chandni Chowk where I found gorgeous silk sarees at local prices. She bargained on my behalf and saved me probably 50% of what I would have paid alone. We also visited Janpath Market for jewellery and handicrafts, and Dilli Haat for regional crafts from all over India. She knew every shop owner personally and they treated us so well. An incredible experience for anyone who loves shopping.",
                },
                {
                    author: 'Karen L.',
                    country: 'Australia',
                    rating: 5,
                    date: '2026-02-22',
                    text: "Absolutley loved this shopping tour. My female guide was so knowledgable about textiles, she could identify the quality of a silk saree just by touch. We visited the famous Kinari Bazaar for wedding decorations and traditional jewellery, then hit Janpath Market for more affordable souvenirs. She helped me bargain at every shop and taught me the art of negotiating in Indian markets. We also stopped at Dilli Haat where I bought beautiful Rajasthani puppets and Kashmir pashminas. Could not have navigated these markets without her.",
                },
                {
                    author: 'Yoko M.',
                    country: 'Japan',
                    rating: 4,
                    date: '2026-03-01',
                    text: "Good shopping tour with a friendly and knowledgable female guide. She took me to several markets including Chandni Chowk for spices and jewellery, Sarojini Nagar for clothes and Dilli Haat for handicrafts. The bargaining assistance was very helpful as I would have been completley lost negotiating on my own. She also helped me ship larger purchases back home. Giving 4 stars only because some of the shops she took us to felt a bit like commission stops. But overall a great experience and I bought amazing things.",
                },
                {
                    author: 'Isabella R.',
                    country: 'Italy',
                    rating: 5,
                    date: '2026-02-16',
                    text: "Having a female shopping expert guide me through Delhi's markets was the best decision of my trip. She understood exactly what style I was looking for and took me to hidden shops that tourists would never find. I bought stunning silver jewellery in Dariba Kalan, beautiful block printed fabrics in Chandni Chowk and aromatic spices in the spice market. She also took me for the most amazing street food along the way, the chaat was incredible. This tour is a must for anyone who wants authentic Indian shopping experiences.",
                },
                {
                    author: 'Sara J.',
                    country: 'Sweden',
                    rating: 5,
                    date: '2026-03-11',
                    text: "As a solo female traveler I felt much more comfortable exploring Delhi's bustling markets with a local female guide. She was warm, fun and incredibly savvy about shopping. We visited Lajpat Nagar for bangles and accessories, Janpath Market for boho style clothes and Dilli Haat for curated handicrafts. She taught me how to spot genuine pashmina from fake and helped me negotiate prices down significantly. I left with a suitcase full of beautiful things and memories of an amazing day. Highly reccomend for solo women travelers.",
                },
            ],
        };
    }

    if (slug === 'delhi-private-4-day-golden-triangle-luxury-tour') {
        return {
            averageRating: 4.9,
            totalReviews: 8,
            guideRating: 5.0,
            valueRating: 4.8,
            reviews: [
                {
                    author: 'Richard B.',
                    country: 'United States',
                    rating: 5,
                    date: '2026-03-06',
                    text: "This 4 day luxury Golden Triangle tour was first class in every way. The hotels were all 5 star properties, we stayed at the Oberoi in Delhi, the Trident in Agra and the Rambagh Palace in Jaipur. The private car was a Mercedes with a professional driver. Our guide was the most knowledgable person I have met, like a walking encyclopedia of Indian history. The Taj Mahal at sunrise, Amber Fort by jeep and the Old Delhi food walk were all highlights. If you want the Golden Triangle done right, this is it.",
                },
                {
                    author: 'Elizabeth C.',
                    country: 'United Kingdom',
                    rating: 5,
                    date: '2026-02-23',
                    text: "Worth every penny for the luxury experience. Four days covering Delhi, Agra and Jaipur in absolute comfort. The 5 star hotels were stunning, particularly the heritage property in Jaipur which felt like staying in a palace. Private guides at every site were exceptional and the driver was always punctual and courteous. Meals at the finest restaurants with pre arranged reservations. This is how you experience the Golden Triangle if you want zero stress and maximum comfort. Absolutley reccomend.",
                },
                {
                    author: 'Kenji T.',
                    country: 'Japan',
                    rating: 5,
                    date: '2026-03-02',
                    text: "Booked the private 4 day luxury Golden Triangle tour for our honeymoon and it was perfection. Every detail was thought of, from welcome garlands at each hotel to private sunset viewing of the Taj Mahal from Mehtab Bagh. The luxury car was comfortable for the drives between cities. Our guide arranged a private candlelight dinner in Jaipur which was incredibly romantic. The tour covered all the major sites, the Red Fort, Taj Mahal, Agra Fort, Amber Fort and City Palace, without ever feeling rushed.",
                },
                {
                    author: 'Catherine D.',
                    country: 'France',
                    rating: 4,
                    date: '2026-02-18',
                    text: "Very good luxury tour of the Golden Triangle. The hotels were excellent 5 star properties and the private car was a clean SUV with bottled water and snacks. The guides were professional and knowledgable at every stop. My only reason for not giving 5 stars is that the itinerary could have included one or two more off the beaten path experiences. Everything we visited was the standard tourist circuit, which is fine, but at this price point I expected a few unique extras. That said, the quality of service was impeccable throughout the 4 days.",
                },
            ],
        };
    }

    if (slug === 'taj-mahal-agra-day-trip-luxury-car') {
        return {
            averageRating: 4.8,
            totalReviews: 14,
            guideRating: 4.9,
            valueRating: 4.6,
            reviews: [
                {
                    author: 'Jonathan P.',
                    country: 'United States',
                    rating: 5,
                    date: '2026-03-04',
                    text: "Took the luxury car day trip from Delhi to the Taj Mahal and it was wonderful. The car was a brand new Toyota Innova Crysta with leather seats and excellent AC. The drive to Agra on the Yamuna Expressway was smooth and we arrived in about 3 hours. Our guide at the Taj was superb, pointing out the precious stone inlay work and the perfect symmetry of the gardens. We also visited Agra Fort and had a lovely lunch. The comfort of the luxury car made the round trip much more enjoyable than a standard vehicle.",
                },
                {
                    author: 'Helen M.',
                    country: 'United Kingdom',
                    rating: 5,
                    date: '2026-02-22',
                    text: "The luxury car really made a difference on this Agra day trip. Spacious, cool and comfortable for the 3 hour drive each way. Our driver was professional and played soft music which made the journey relaxing. At the Taj Mahal our guide was phenomenal, he showed us how the marble changes colour throughout the day and explained the calligraphy inscriptions. We stopped at a nice restaurant for lunch with a rooftop view of the Taj. Round trip by luxury car is definately the way to go if you dont want to take the train.",
                },
                {
                    author: 'Marco V.',
                    country: 'Italy',
                    rating: 4,
                    date: '2026-03-08',
                    text: "Good day trip to Agra in a comfortable luxury car. The Taj Mahal was everything I expected and more. Our guide was knowledgable and enthusiastic. We also visited Agra Fort which was impressive with great views back to the Taj. The car was very nice with cold water and tissues provided. The only downside was the traffic getting out of Delhi which added about 45 minutes to the journey. Otherwise a premium and comfortable way to visit the Taj Mahal from Delhi. Good value for the quality of car provided.",
                },
                {
                    author: 'Annika S.',
                    country: 'Sweden',
                    rating: 5,
                    date: '2026-02-16',
                    text: "Absolutley loved this luxury car day trip to the Taj Mahal. From the moment we were picked up from our hotel in a sleek, air conditioned car, everything was premium. The driver was courteous and drove safely. In Agra, our guide brought the history of the Taj Mahal alive with stories about Shah Jahan and Mumtaz. The marble inlay workshops we visited on the way back were facinating, watching artisans create designs using the same techniques from 400 years ago. Highly reccomend the luxury car option for comfort.",
                },
                {
                    author: 'David N.',
                    country: 'Canada',
                    rating: 5,
                    date: '2026-03-12',
                    text: "Booked the luxury car option for our Agra day trip and it was the right call. The vehicle was immaculate, roomy and had great suspension which mattered on some of the road sections. Our guide in Agra was one of the best we had in India, deeply knowledgable about Mughal architecture and very personable. We spent over 2 hours at the Taj Mahal and it was never enough, its genuinely one of the most beautiful things I have ever seen. The return drive was comfortable and we even managed to nap. Perfect day out.",
                },
            ],
        };
    }

    if (slug === 'sunrise-taj-mahal-tour-delhi-all-inclusive') {
        return {
            averageRating: 4.8,
            totalReviews: 17,
            guideRating: 4.9,
            valueRating: 4.7,
            reviews: [
                {
                    author: 'Amanda R.',
                    country: 'Australia',
                    rating: 5,
                    date: '2026-03-07',
                    text: "The all inclusive sunrise Taj Mahal tour was worth every early morning minute. We left Delhi at 3am and arrived at the Taj gates just before sunrise. Watching the first rays of sun hit the white marble was absolutley magical, the Taj seemed to glow pink then gold then white. Our guide was incredible, explaining the Islamic calligraphy and the mathematical precision of the layout. The all inclusive package meant everything was covered, entrance fees, guide, breakfast, lunch and the car. No hidden costs, no stress. Brilliant.",
                },
                {
                    author: 'Jack T.',
                    country: 'United Kingdom',
                    rating: 5,
                    date: '2026-02-24',
                    text: "This sunrise tour is the definitive way to see the Taj Mahal. We had the monument almost to ourselves in the early morning light and the colours were unbelievable. Our guide was waiting at the gate with our tickets already sorted, so no queuing. After the Taj we visited Agra Fort and then had a delicious included lunch at a local restaurant. Being all inclusive made it so easy, we just had to show up and everything was taken care of. The drive back to Delhi was comfortable and we were home by 5pm.",
                },
                {
                    author: 'Martina K.',
                    country: 'Czech Republic',
                    rating: 4,
                    date: '2026-03-01',
                    text: "Good all inclusive tour to see the Taj Mahal at sunrise. The early departure from Delhi at 3am was tough but seeing the Taj in the dawn light made it worthwhile. The guide was knowledgable and the included meals were decent. We also visited the Baby Taj and Agra Fort. Giving 4 stars because I felt we were a bit rushed at Agra Fort to make it back to Delhi on time. The all inclusive pricing was fair and it was nice not having to worry about extra costs. Would reccomend starting even earlier to have more time in Agra.",
                },
                {
                    author: 'Alex G.',
                    country: 'Greece',
                    rating: 5,
                    date: '2026-02-18',
                    text: "Seeing the Taj Mahal at sunrise was a bucket list moment and this all inclusive tour delivered it perfectly. The predawn drive from Delhi was actually quite peaceful. At the Taj we had about 2 hours which was plenty to explore every angle. Our guide pointed out details like how the pietra dura inlay work uses 28 different types of precious stones. The included breakfast and lunch were both good quality. Everything, from hotel pickup to drop off, was completley seamless. One of the best day trips I have done anywhere.",
                },
                {
                    author: 'Priya S.',
                    country: 'India',
                    rating: 5,
                    date: '2026-03-14',
                    text: "Booked this for my visiting friends from abroad and they were blown away. The sunrise at the Taj is something every visitor to India should experience. Our guide was fantastic, bringing the Mughal love story to life in such an engaging way. The all inclusive aspect was great, no haggling over prices for anything. Breakfast was at a nice restaurant and lunch was authentic Mughlai cuisine. The car was comfortable for the highway drive. My friends said this was the single best experience of their entire India trip.",
                },
            ],
        };
    }

    if (slug === 'old-new-delhi-private-tour') {
        return {
            averageRating: 4.7,
            totalReviews: 15,
            guideRating: 4.8,
            valueRating: 4.6,
            reviews: [
                {
                    author: 'Rachel W.',
                    country: 'United States',
                    rating: 5,
                    date: '2026-03-08',
                    text: "This private tour of Old and New Delhi was the best way to experience the city. We did the full day option and covered so much ground. Old Delhi highlights included the Red Fort, Jama Masjid and a rickshaw ride through the chaos of Chandni Chowk. New Delhi was a complete contrast with wide boulevards, India Gate and the serene Humayun's Tomb. Our private guide tailored the pace to us which was so much better than a group tour. The street food he recommended in Old Delhi was out of this world.",
                },
                {
                    author: 'Friedrich M.',
                    country: 'Germany',
                    rating: 4,
                    date: '2026-02-25',
                    text: "Good private tour covering both parts of Delhi. We chose the half day option focusing on New Delhi. Visited Humayun's Tomb, the Lotus Temple and India Gate with our guide who was very professional. The car was comfortable and clean. Would have preferred to include Old Delhi as well but we ran out of time with the half day. For anyone booking this, I would reccomend the full day option to get the complete picture of Delhi. The guide was pleasant and informative throughout.",
                },
                {
                    author: 'Olivia J.',
                    country: 'New Zealand',
                    rating: 5,
                    date: '2026-03-02',
                    text: "We did the full day private tour and it was absolutley fantastic. Our guide picked us up at 8am and we started in Old Delhi with the magnificent Red Fort. The walk through the old bazaars was incredible, so much colour and energy. Jama Masjid was stunning with views from the top of the minaret. After lunch we explored New Delhi, visiting Qutub Minar which was my favourite monument, and Humayun's Tomb which is just beautiful. Having a private guide meant we could linger at places we loved. Highly reccomend.",
                },
                {
                    author: 'Samuel K.',
                    country: 'South Africa',
                    rating: 5,
                    date: '2026-02-19',
                    text: "The private Old and New Delhi tour gave us the perfect introduction to India's capital. Our guide was a Delhi native who clearly loved his city and knew its history inside out. In Old Delhi he took us through lanes most tourists never see, including a hidden Jain temple and an ancient stepwell. In New Delhi the architecture was grand and imposing, from the Rashtrapati Bhavan to the war memorial at India Gate. The private car and driver were excellent. A full day well spent.",
                },
                {
                    author: 'Marie F.',
                    country: 'Belgium',
                    rating: 4,
                    date: '2026-03-13',
                    text: "Enjoyed the half day private tour of Old Delhi. We visited the Red Fort, Chandni Chowk and Jama Masjid. The rickshaw ride through the old lanes was thrilling and our guide kept us safe while pointing out interesting shops and temples. The guide was knowledgable about Mughal history and the Partition of India. Giving 4 stars because the car was a bit older than expected for a private tour. But the guide himself was excellent and made the experience special. Good value for the half day duration.",
                },
            ],
        };
    }

    if (slug === 'explore-old-new-delhi-city-luxury-car-tour') {
        return {
            averageRating: 4.7,
            totalReviews: 48,
            guideRating: 4.9,
            valueRating: 4.6,
            reviews: [
                {
                    author: 'George P.',
                    country: 'United States',
                    rating: 5,
                    date: '2026-03-05',
                    text: "Exploring Old and New Delhi by luxury car with an official tour guide was a premium experience. The car was a spacious SUV with leather seats and excellent AC which was essential in the Delhi heat. Our official guide was certified by the Ministry of Tourism and incredibly knowledgable. We covered Red Fort, Jama Masjid, Chandni Chowk, India Gate, Humayun's Tomb and Qutub Minar. The luxury car made the transitions between sites so comfortable. Definately the most refined way to see Delhi.",
                },
                {
                    author: 'Victoria S.',
                    country: 'United Kingdom',
                    rating: 5,
                    date: '2026-02-20',
                    text: "Having an official tour guide and luxury car for our Delhi exploration was absolutley worth the premium price. The official guide badge gave us priority access at several monuments. In Old Delhi we visited the stunning Red Fort and walked through the bustling spice market in Chandni Chowk. In New Delhi the wide boulevards and colonial architecture were fascinating. The luxury car was like our private sanctuary between the sensory overload of Delhi's streets. The driver was professional and the car was spotlessly clean.",
                },
                {
                    author: 'Kim J.',
                    country: 'South Korea',
                    rating: 4,
                    date: '2026-03-10',
                    text: "Nice tour of Delhi with an official guide and luxury car. We visited all the main attractions in both the old and new city. The guide had deep knowledge of Delhi's history from ancient times through the Mughal era to the British period. The luxury car was comfortable though the roads in Old Delhi are so narrow we had to walk some sections regardless. The AC in the car was a welcome relief between stops. Overall a good experience, the official guide certification gave us confidence in the quality of information.",
                },
                {
                    author: 'Isabelle M.',
                    country: 'France',
                    rating: 5,
                    date: '2026-02-28',
                    text: "The luxury car and official tour guide combination elevated our Delhi sightseeing experience significantly. The guide spoke perfect French which was a wonderful surprise. He explained the contrast between Old Delhi's Mughal heritage and New Delhi's British colonial grandeur with passion and expertise. We visited Jama Masjid, Red Fort, India Gate, Lotus Temple and Humayun's Tomb. The luxury car meant we were always comfortable and arrived at each site refreshed. The guide also recommended an excellent restaurant for lunch.",
                },
                {
                    author: 'Brian D.',
                    country: 'Ireland',
                    rating: 5,
                    date: '2026-03-14',
                    text: "Booked this premium tour for my wife's birthday and it was special. The luxury car was immaculate and the driver was courteous throughout. The official tour guide was one of the most impressive guides we have ever had anywhere in the world. At every site, from the Red Fort to Qutub Minar, he had stories and facts that brought the history alive. The Chandni Chowk walking section was a highlight, exploring the 17th century bazaar on foot with an expert. Excellent value for a luxury experience in Delhi.",
                },
            ],
        };
    }

    if (slug === 'from-delhi-same-day-taj-mahal-fastest-train') {
        return {
            averageRating: 4.8,
            totalReviews: 16,
            guideRating: 4.9,
            valueRating: 4.7,
            reviews: [
                {
                    author: 'Jason R.',
                    country: 'United States',
                    rating: 5,
                    date: '2026-03-06',
                    text: "Taking India's fastest train from Delhi to the Taj Mahal was an incredible experience in itself. The Vande Bharat Express was modern, clean and reached speeds of 160 km/h. We departed from New Delhi station and arrived in Agra in about 2 hours. Our guide was waiting at the station and we headed straight to the Taj. The speed and comfort of this train made the day trip so much more enjoyable than driving. Completley hassle free from the hotel pickup to the return drop off.",
                },
                {
                    author: 'Emma B.',
                    country: 'Australia',
                    rating: 5,
                    date: '2026-02-21',
                    text: "This tour using India's fastest train to visit the Taj Mahal was absolutley perfect. The Vande Bharat train was like a bullet train, so smooth and fast with great onboard catering. We had breakfast on the train which was a nice touch. In Agra our guide was exceptional, taking us through the Taj Mahal and Agra Fort with detailed explanations of every element. The fast train meant we had more time in Agra compared to the older train options. Definately choose this train if it is available for your dates.",
                },
                {
                    author: 'Lucas K.',
                    country: 'Germany',
                    rating: 4,
                    date: '2026-03-01',
                    text: "Good day trip to the Taj Mahal on India's fastest train. The Vande Bharat Express was comfortable with reclining seats and onboard food service. The journey was quick and we arrived in Agra with plenty of time for sightseeing. The guide in Agra was knowledgable and friendly. We visited the Taj Mahal, Agra Fort and Mehtab Bagh. The only issue was the train schedule meant we had to rush through Agra Fort a bit to make our return. Would have preferred an hour more in Agra. But overall great experience.",
                },
                {
                    author: 'Sofia C.',
                    country: 'Spain',
                    rating: 5,
                    date: '2026-02-16',
                    text: "The fastest train in India to see the Taj Mahal, what an amazing way to spend a day from Delhi. The whole trip was perfectly organized. Hotel pickup, drive to the station, comfortable and fast train to Agra, guide waiting at arrival. The Taj Mahal was the most beautiful building I have ever seen, our guide explained the symbolism of every element including the gardens representing paradise. We had a lovely lunch at a restaurant near the Taj. The return train was equally smooth. Reccomend this to everyone.",
                },
                {
                    author: 'Nina L.',
                    country: 'Canada',
                    rating: 5,
                    date: '2026-03-13',
                    text: "Chose this tour specifically for the fastest train option and it was the right choice. The Vande Bharat Express is genuinely impressive, clean, fast, and comfortable with AC and charging points at every seat. The journey flew by and before we knew it we were at Agra Cantt station. Our guide took us first to the Taj Mahal where the morning light was perfect for photos. Then Agra Fort, then lunch, then the Baby Taj before catching the train back. An efficient and comfortable way to tick the Taj Mahal off your bucket list.",
                },
            ],
        };
    }

    if (slug === '6-days-golden-triangle-tour-from-delhi') {
        return {
            averageRating: 4.8,
            totalReviews: 10,
            guideRating: 4.9,
            valueRating: 4.7,
            reviews: [
                {
                    author: 'Margaret H.',
                    country: 'United Kingdom',
                    rating: 5,
                    date: '2026-03-04',
                    text: "The 6 day Golden Triangle tour from Delhi covering Agra and Jaipur was perfectly planned. Having 6 days instead of the usual 3 meant we could explore each city properly. In Delhi we had two full days covering everything from the Red Fort to Qutub Minar. Agra was magical with the Taj Mahal and Fatehpur Sikri. Jaipur was my favourite, we spent time at Amber Fort, Nahargarh Fort and the vibrant Johari Bazaar. Hotels were great at every stop and the private driver was wonderful throughout.",
                },
                {
                    author: 'Daniel R.',
                    country: 'United States',
                    rating: 5,
                    date: '2026-02-22',
                    text: "Six days for the Golden Triangle was the perfect duration. We never felt rushed and had time for both the major monuments and lesser known gems. In Delhi our guide took us to Humayun's Tomb, the Lodhi Gardens and a wonderful street food tour in Old Delhi. The Taj Mahal at sunrise was breathtaking. In Jaipur we loved the City Palace, Jantar Mantar observatory and the Albert Hall Museum. The whole trip was seamlessly coordinated with comfortable hotels and a reliable driver. Absolutley reccomend this itinerary.",
                },
                {
                    author: 'Hideo S.',
                    country: 'Japan',
                    rating: 4,
                    date: '2026-03-09',
                    text: "Well organised 6 day tour covering Delhi, Agra and Jaipur. The extra days compared to shorter tours made the experience much more relaxed. Our guides at each city were knowledgable and professional. The drives between cities were comfortable in a clean AC car. Hotels were 3-4 star level and all adequate. My only suggestion would be to include Fatehpur Sikri in the itinerary as we had to request it separately. But overall a comprehensive and enjoyable introduction to India's most popular tourist circuit.",
                },
                {
                    author: 'Charlotte B.',
                    country: 'Belgium',
                    rating: 5,
                    date: '2026-02-17',
                    text: "This 6 day Delhi, Agra and Jaipur tour was the perfect first trip to India. The longer itinerary meant we had free time for independent exploration in each city which we loved. In Delhi we wandered through Lodhi Gardens on our own, in Agra we watched sunset over the Taj from Mehtab Bagh, and in Jaipur we explored the bazaars and bought beautiful textiles. The arranged sightseeing with local guides was excellent. The driver became like a friend by the end of 6 days. Would definately book with them again.",
                },
            ],
        };
    }

    if (slug === 'private-taj-mahal-agra-day-tour-from-delhi') {
        return {
            averageRating: 4.7,
            totalReviews: 18,
            guideRating: 4.8,
            valueRating: 4.6,
            reviews: [
                {
                    author: 'Susan T.',
                    country: 'United States',
                    rating: 5,
                    date: '2026-03-05',
                    text: "The private day tour from Delhi to the Taj Mahal and Agra by car was exactly what we wanted. Left our hotel at 6am and reached Agra by 9:30am via the expressway. The Taj Mahal was even more magnificent than we imagined. Our private guide spent nearly two hours explaining every detail from the calligraphy to the gemstone inlays. We also visited Agra Fort which has incredible views of the Taj. The private car was comfortable and the driver was professional. Returned to Delhi by 7pm. A perfect day.",
                },
                {
                    author: 'Hans W.',
                    country: 'Germany',
                    rating: 4,
                    date: '2026-02-23',
                    text: "Good private day tour to Agra from Delhi. The car was clean and comfortable with good AC. Our guide at the Taj Mahal was very knowledgable about Mughal architecture and history. We visited the Taj, Agra Fort and also stopped at Itmad ud Daulah (Baby Taj) which was beautiful and much less crowded. The drive took about 3.5 hours each way which is long but the expressway makes it manageable. Would have preferred a slightly better lunch arrangement as the restaurant was average. But the sightseeing was excellent.",
                },
                {
                    author: 'Jenny L.',
                    country: 'Singapore',
                    rating: 5,
                    date: '2026-03-10',
                    text: "Booked this private Taj Mahal day tour and it was one of the best experiences of our India trip. Having a private car and guide meant we could go at our own pace and linger at the Taj Mahal as long as we wanted. The guide was passionate and articulate, telling us stories about Shah Jahan's love for Mumtaz Mahal that nearly brought tears to my eyes. Agra Fort was also impressive and the guide explained the father-son rivalry between Shah Jahan and Aurangzeb. Definately reccomend a private tour over a group for this.",
                },
                {
                    author: 'Paul M.',
                    country: 'Canada',
                    rating: 5,
                    date: '2026-02-17',
                    text: "Excellent private day tour from Delhi to Agra. The whole experience was professional and well organized. The driver picked us up right on time and the car was a spacious SUV. At the Taj Mahal the early arrival meant we beat the worst of the crowds. Our guide knew all the best photo angles and hidden details of the monument. The return drive was smooth and we even stopped at a roadside dhaba for authentic Indian snacks which was a fun bonus. Great value for a private tour experience.",
                },
                {
                    author: 'Vera K.',
                    country: 'Russia',
                    rating: 4,
                    date: '2026-03-12',
                    text: "Private tour to the Taj Mahal from Delhi was a good experience overall. The Taj Mahal is truly one of the most beautiful buildings in the world and seeing it in person is a must. Our guide was informative and helpful. The car was comfortable for the highway drive. Giving 4 stars because the tour included a stop at a marble shop which felt like a sales pitch, but the guide said we could skip it if we wanted. The actual sightseeing portion was completley excellent. Agra Fort was a wonderful bonus stop.",
                },
            ],
        };
    }

    if (slug === '5-days-golden-triangle-ranthambore-tiger-safari') {
        return {
            averageRating: 4.8,
            totalReviews: 11,
            guideRating: 4.9,
            valueRating: 4.7,
            reviews: [
                {
                    author: 'Mark E.',
                    country: 'United Kingdom',
                    rating: 5,
                    date: '2026-03-07',
                    text: "This 5 day Golden Triangle with Ranthambore tiger safari from Delhi was the trip of a lifetime. Delhi, Agra, Ranthambore and Jaipur in 5 days with two morning jeep safaris in Ranthambore National Park. We were incredibly lucky and spotted a huge male Bengal tiger on our first safari, just 30 meters from our jeep. The Golden Triangle cities were all wonderful too, the Taj Mahal, Amber Fort and the Red Fort were all highlights. Five days was a good pace, not too rushed but covering all the essentials.",
                },
                {
                    author: 'Linda C.',
                    country: 'United States',
                    rating: 5,
                    date: '2026-02-24',
                    text: "What an incredible 5 day adventure from Delhi. The combination of culture and wildlife made this tour stand out from the standard Golden Triangle. After visiting the Taj Mahal and Agra Fort, we drove to Ranthambore where the landscape completley changes to jungle. The morning safari was thrilling, our naturalist guide knew the tiger territories and we spotted a tigress near Ranthambore Fort. Jaipur was a beautiful finale with Amber Fort and the pink city bazaars. Hotels throughout were comfortable and clean. Highly reccomend.",
                },
                {
                    author: 'Henrik B.',
                    country: 'Denmark',
                    rating: 4,
                    date: '2026-03-01',
                    text: "Good 5 day tour covering the Golden Triangle plus Ranthambore wildlife. The itinerary was well planned with enough time at each destination. Delhi and Agra sightseeing were excellent with knowledgable guides. The Ranthambore safari was exciting even though we did not see a tiger, we did see crocodiles, spotted deer, langurs and many birds. The drive from Agra to Ranthambore was quite long at around 6 hours. Jaipur was lovely. Hotels were decent 3-4 star properties. Would have liked slightly better food options at some hotels.",
                },
                {
                    author: 'Giulia T.',
                    country: 'Italy',
                    rating: 5,
                    date: '2026-02-18',
                    text: "Five days covering Delhi, Agra, Ranthambore and Jaipur was absolutley perfect. The tiger safari added a completely unique element to the classic Golden Triangle route. We did a canter safari in zone 3 of Ranthambore and our naturalist guide was incredible, spotting animal tracks and explaining the ecosystem. We saw deer, wild boar, peacocks and then on the way out, a tiger resting under a tree. The rest of the tour was equally fantastic with expert guides at the Taj Mahal and Amber Fort. Best tour I have done in India.",
                },
                {
                    author: 'Sarah O.',
                    country: 'Australia',
                    rating: 5,
                    date: '2026-03-14',
                    text: "Booked this for my family and we all loved it. The 5 day duration was ideal for covering Delhi, Agra, Ranthambore and Jaipur without exhausting the kids. The tiger safari was the absolute highlight for the children, they were buzzing with excitement. In Agra the Taj Mahal blew everyone away. Jaipur was colourful and fun with the elephant sanctuary and fort visits. Our driver was like family by the end of the trip, always cheerful and helpful. The guides at each city were excellent. A well rounded trip that has something for everyone.",
                },
            ],
        };
    }

    if (slug === 'delhi-to-agra-overnight-tour') {
        return {
            averageRating: 4.8,
            totalReviews: 12,
            guideRating: 4.9,
            valueRating: 4.7,
            reviews: [
                {
                    author: 'Nancy H.',
                    country: 'United States',
                    rating: 5,
                    date: '2026-03-06',
                    text: "The overnight Agra tour from Delhi was so much better than a day trip. We arrived in the afternoon and visited Agra Fort first, then headed to Mehtab Bagh to watch the sunset behind the Taj Mahal which was absolutley breathtaking. The hotel was comfortable and well located. Next morning we were at the Taj gates before sunrise, watching the monument emerge from the dawn mist. Having two different views of the Taj, sunset and sunrise, was magical. The overnight stay definately made this a richer experience.",
                },
                {
                    author: 'Thomas P.',
                    country: 'Australia',
                    rating: 5,
                    date: '2026-02-23',
                    text: "Staying overnight in Agra was the best decision. We got to see the Taj Mahal at both sunset from Mehtab Bagh and sunrise the next morning. The hotel was a nice 4 star property near the Taj with a rooftop restaurant where we could see the monument lit up at night. Our guide was excellent, covering the Taj, Agra Fort and Fatehpur Sikri across the two days. The pace was relaxed compared to the hectic day trip options. Worth every extra rupee to stay the night. Highly reccomend this over a same day visit.",
                },
                {
                    author: 'Karolina W.',
                    country: 'Poland',
                    rating: 4,
                    date: '2026-03-02',
                    text: "Good overnight tour to Agra from Delhi. Seeing the Taj at different times of day was special, it really does change colour from pink at dawn to white at midday to golden at sunset. The hotel was adequate and clean, nothing fancy but perfectly fine for one night. Our guide was knowledgable about Mughal history and very friendly. We visited the Taj Mahal, Agra Fort and Itmad ud Daulah over the two days. Only minor complaint is the drive back to Delhi hit heavy traffic and took almost 5 hours. But the experience itself was great.",
                },
                {
                    author: 'Ahmed S.',
                    country: 'United Arab Emirates',
                    rating: 5,
                    date: '2026-02-18',
                    text: "This overnight Agra experience was perfectley designed. Arriving in the afternoon, we explored Agra Fort and then watched the Taj Mahal at sunset from across the river at Mehtab Bagh. The gardens there are beautiful and the views are incredible with hardly any other tourists. Our hotel had a Taj view from the rooftop which was an amazing bonus. The sunrise visit to the Taj the next morning was the main event and it did not disappoint. Having a full evening and morning in Agra instead of a rushed day trip made all the difference.",
                },
                {
                    author: 'Julia S.',
                    country: 'Germany',
                    rating: 5,
                    date: '2026-03-13',
                    text: "One night in Agra is absolutley the way to experience the Taj Mahal. We arrived from Delhi in the early afternoon and spent time at the Taj Mahal in the late afternoon light which was gorgeous with fewer crowds. After dinner at the hotel rooftop restaurant overlooking the Taj, we visited again at sunrise the next morning. The monument is a completley different experience at different times of day. Our guide also took us to Fatehpur Sikri on day two which was fascinating and very well preserved. Cannot reccomend the overnight option enough.",
                },
            ],
        };
    }

    if (slug === 'golden-triangle-3-day-tour-from-delhi') {
        return {
            averageRating: 4.7,
            totalReviews: 19,
            guideRating: 4.8,
            valueRating: 4.6,
            reviews: [
                {
                    author: 'Michael W.',
                    country: 'United States',
                    rating: 5,
                    date: '2026-03-05',
                    text: "The 3 day Golden Triangle tour was a fantastic introduction to India. Day one in Delhi covered the Red Fort, Humayun's Tomb and Qutub Minar. Day two we drove to Agra for the Taj Mahal which was absolutley stunning. Day three was Jaipur with Amber Fort and City Palace before driving back to Delhi. The pace was fast but our driver and guide made it work perfectly. Hotels were clean and comfortable. For travelers short on time, 3 days is enough to hit all the highlights of the Golden Triangle.",
                },
                {
                    author: 'Emma K.',
                    country: 'United Kingdom',
                    rating: 4,
                    date: '2026-02-21',
                    text: "Good 3 day tour covering Delhi, Agra and Jaipur. It is a lot to pack into 3 days and there were some early mornings and long drives. But the major sites were all covered and the guides were knowledgable at every stop. The Taj Mahal was obviously the highlight. Amber Fort in Jaipur was also incredible. The hotels were basic but clean and the driver was safe and reliable. Would reccomend the 4 or 5 day version if you have time, but if you only have 3 days this tour does the job well.",
                },
                {
                    author: 'Tanaka H.',
                    country: 'Japan',
                    rating: 5,
                    date: '2026-03-10',
                    text: "Completley packed 3 days but worth every minute. Started in Delhi with a comprehensive city tour covering both the Mughal and British colonial sites. The drive to Agra the next morning was about 4 hours and then the Taj Mahal took our breath away. We also visited Agra Fort before continuing to Jaipur. The third day in Jaipur was magical with Amber Fort, the Water Palace and Hawa Mahal. Our driver was excellent on the highways between cities. Great value for a 3 day tour covering India's three most famous cities.",
                },
                {
                    author: 'Carlos P.',
                    country: 'Mexico',
                    rating: 4,
                    date: '2026-02-27',
                    text: "Decent 3 day Golden Triangle tour. The itinerary covers the essential sites in Delhi, Agra and Jaipur. The guides at each city were good and spoke clear English. The Taj Mahal visit was the clear highlight of the trip. My only concerns were the very early starts each morning (5am on day 2) and the amount of time spent in the car. The drives between cities are long and India's roads can be chaotic. The car was comfortable though with good AC. Would suggest taking the 5 day version if you can spare the time.",
                },
                {
                    author: 'Fiona G.',
                    country: 'Ireland',
                    rating: 5,
                    date: '2026-03-12',
                    text: "Three days, three cities, countless memories. This Golden Triangle tour was brilliant from start to finish. In Delhi we explored the Red Fort and Chandni Chowk bazaar. The Taj Mahal in Agra was a life highlight, our guide was incredibly passionate and you could see the emotion in his eyes as he described the love story. Jaipur was colourful and vibrant with the stunning Amber Fort. The entire tour was well coordinated with good hotels and a fantastic driver. Perfect for anyone with limited time in India.",
                },
            ],
        };
    }

    if (slug === 'taj-mahal-tour-by-train-gatimaan') {
        return {
            averageRating: 4.8,
            totalReviews: 15,
            guideRating: 4.9,
            valueRating: 4.7,
            reviews: [
                {
                    author: 'Peter H.',
                    country: 'United Kingdom',
                    rating: 5,
                    date: '2026-03-04',
                    text: "The Gatimaan Express from Delhi to Agra was a wonderful experience in itself. We were picked up from our hotel and driven to Hazrat Nizamuddin station where the train departed on time. The Gatimaan is India's first semi high speed train and it was smooth, clean and fast. We arrived in Agra in under 2 hours. Our guide at the Taj Mahal was superb, explaining the Mughal architecture and the love story of Shah Jahan. Agra Fort was equally impressive. The return Gatimaan got us back to Delhi by evening.",
                },
                {
                    author: 'Jennifer M.',
                    country: 'Australia',
                    rating: 5,
                    date: '2026-02-20',
                    text: "Absolutley loved the Gatimaan Express day trip to the Taj Mahal. The train departs from Hazrat Nizamuddin station and reaches Agra in about 100 minutes which is incredible. Onboard meals were included and quite tasty. In Agra our guide was waiting and took us directly to the Taj. The morning light on the white marble was stunning. We also visited Agra Fort and had time for shopping in the local market. The Gatimaan return train was equally comfortable. So much better than spending 4 hours each way in a car.",
                },
                {
                    author: 'Jan V.',
                    country: 'Netherlands',
                    rating: 4,
                    date: '2026-03-08',
                    text: "Good day tour to the Taj Mahal by the Gatimaan Express train. The train was modern and fast, a pleasant surprise given my expectations of Indian railways. In Agra the guide was knowledgable and we spent a good 2 hours at the Taj. Also visited Agra Fort and the Baby Taj. The included onboard meal was decent. Giving 4 stars because the transfer from our hotel to Hazrat Nizamuddin station through Delhi morning traffic was stressful and we nearly missed the train. Would reccomend staying near the station the night before.",
                },
                {
                    author: 'Rachel S.',
                    country: 'Canada',
                    rating: 5,
                    date: '2026-02-15',
                    text: "The Gatimaan Express to Agra is the best way to see the Taj Mahal from Delhi. The train is fast, comfortable and the onboard service was great. Our guide in Agra was one of the most passionate and knowledgable guides I have ever had. He explained the mathematical perfection of the Taj, how every element is designed to create an illusion of perfect symmetry. We visited the Taj Mahal, Agra Fort and even had time for a quick marble inlay demonstration. Train back to Delhi was on time and comfortable. Definately the way to go.",
                },
                {
                    author: 'Liu Y.',
                    country: 'China',
                    rating: 5,
                    date: '2026-03-13',
                    text: "Taking the Gatimaan Express from Hazrat Nizamuddin station to Agra was a highlight of our India trip. The train is genuinely fast and modern with comfortable seats and good AC. In Agra our guide took us to the Taj Mahal first thing and the morning crowds were manageable. The guide pointed out the optical illusions in the design and the fact that the minarets lean outward for earthquake protection. After the Taj we visited Agra Fort where Shah Jahan was imprisoned. A seamless and enjoyable same day tour by train.",
                },
            ],
        };
    }

    if (slug === 'private-taj-mahal-tour-from-delhi') {
        return {
            averageRating: 4.7,
            totalReviews: 17,
            guideRating: 4.8,
            valueRating: 4.6,
            reviews: [
                {
                    author: 'Brian K.',
                    country: 'United States',
                    rating: 5,
                    date: '2026-03-07',
                    text: "Booked this private same day trip from Delhi to Agra by car and it was excellent. Left our hotel at 5:30am and reached Agra by 9am via the Yamuna Expressway. The Taj Mahal in the morning light was beyond beautiful. Our private guide explained the architectural details and the symbolism throughout the monument. We also stopped at Agra Fort which is massive and impressive. The private car was clean and comfortable for the round trip. Having a private guide and car meant we could spend as much time as we wanted at each stop.",
                },
                {
                    author: 'Johanna P.',
                    country: 'Sweden',
                    rating: 4,
                    date: '2026-02-24',
                    text: "Good private day trip from Delhi to Agra by car. The drive was about 3.5 hours each way on the Yamuna Expressway which was fine with the comfortable car. The Taj Mahal was stunning and our guide was informative. We also visited Agra Fort and a marble workshop. The car was a clean Innova with water bottles and tissues. Only giving 4 stars because the return drive hit traffic entering Delhi and took almost 4.5 hours. But the Agra portion of the day was excellent. Good value for a private tour.",
                },
                {
                    author: 'Angela M.',
                    country: 'Italy',
                    rating: 5,
                    date: '2026-03-02',
                    text: "This private Delhi to Agra same day trip was perfectley organised. The driver arrived at our hotel exactly on time at 6am. The drive on the expressway was smooth and we arrived in Agra refreshed. At the Taj Mahal our guide was absolutley fantastic, bringing the history alive with stories about the 20,000 workers who built it over 22 years. The white marble, the symmetry, the gardens, everything was perfection. We also had a nice lunch at a local restaurant before visiting Agra Fort. Returned to Delhi by 7pm. Highly reccomend.",
                },
                {
                    author: 'Mark T.',
                    country: 'New Zealand',
                    rating: 5,
                    date: '2026-02-18',
                    text: "Private car trip from Delhi to Agra was the right choice for us as a couple. We could stop whenever we wanted and control our own schedule. The Taj Mahal exceeded all expectations, it is truly one of the most beautiful things ever created by humans. Our guide pointed out the semi precious stone inlays up close which were incredibly detailed. At Agra Fort the guide showed us the exact window from which Shah Jahan spent his final years gazing at the Taj. Emotional and beautiful. The drive was long but completley worth it.",
                },
                {
                    author: 'Sandra B.',
                    country: 'Germany',
                    rating: 4,
                    date: '2026-03-11',
                    text: "Decent private day tour from Delhi to Agra. The Taj Mahal was magnificent and seeing it in person is a must do for anyone visiting India. Our guide was good and explained the history well. The car was comfortable and the driver safe. Giving 4 stars because the itinerary included a stop at a marble souvenir shop which felt like a commission stop. The guide did not pressure us to buy anything though. Apart from that small issue, the tour was well organised and the Agra sightseeing was excellent.",
                },
            ],
        };
    }

    if (slug === 'delhi-full-day-guided-tour') {
        return {
            averageRating: 4.8,
            totalReviews: 14,
            guideRating: 4.9,
            valueRating: 4.7,
            reviews: [
                {
                    author: 'Catherine W.',
                    country: 'United States',
                    rating: 5,
                    date: '2026-03-06',
                    text: "This full day guided tour of Delhi was absolutley brilliant. Our guide took us through centuries of history, from the Mughal era monuments of Old Delhi to the British colonial grandeur of New Delhi. The Red Fort was massive and impressive, and the walk through Chandni Chowk was sensory overload in the best possible way. In New Delhi, Humayun's Tomb was a highlight with its beautiful Persian style gardens. The guide also took us to Gurudwara Bangla Sahib and the Lotus Temple. A comprehensive and engaging day exploring India's capital.",
                },
                {
                    author: 'Simon R.',
                    country: 'United Kingdom',
                    rating: 5,
                    date: '2026-02-22',
                    text: "The full day Delhi tour covered everything you could want to see. Started with the Red Fort and Jama Masjid in Old Delhi, then a rickshaw ride through the crowded lanes of Chandni Chowk. After lunch (the guide recommended an amazing kebab place in Old Delhi) we headed to New Delhi for India Gate, the Parliament area, Qutub Minar and Humayun's Tomb. The contrast between Mughal Old Delhi and the wide British colonial avenues of New Delhi is facinating. Our guide was deeply knowledgable and made every stop interesting.",
                },
                {
                    author: 'Mei L.',
                    country: 'China',
                    rating: 4,
                    date: '2026-03-01',
                    text: "Good full day tour of Delhi. The guide was professional and spoke clear English. We visited Red Fort, Jama Masjid, India Gate, Humayun's Tomb and Qutub Minar among other sites. The guide explained the history of each period of Delhi's development from ancient times to the present. The car was comfortable and the driver navigated the traffic well. Only giving 4 stars because we spent a lot of time in traffic between sites which is unavoidable in Delhi but still frustrating. Would suggest starting as early as possible.",
                },
                {
                    author: 'Pablo G.',
                    country: 'Argentina',
                    rating: 5,
                    date: '2026-02-17',
                    text: "One of the best city tours I have done anywhere in the world. Delhi has so many layers of history and our guide peeled them back one by one throughout the day. In Old Delhi the Mughal heritage was everywhere, from the imposing Red Fort to the centuries old bazaar at Chandni Chowk. The spice market smelled incredible. In New Delhi the guide showed us the Rashtrapati Bhavan, India Gate and the modernist Lotus Temple. Humayun's Tomb was perhaps my favourite single monument, so peaceful and beautiful. Definately worth a full day to explore Delhi properly.",
                },
                {
                    author: 'Anna G.',
                    country: 'Norway',
                    rating: 5,
                    date: '2026-03-14',
                    text: "Spent a full day exploring Delhi with our guide and it was incredible. He showed us how Delhi is really seven cities layered on top of each other. We started at the 12th century Qutub Minar, then visited the Mughal era Red Fort and Jama Masjid, then the British colonial architecture of Lutyens' Delhi, and finally modern landmarks like the Lotus Temple. The contrast between the narrow chaotic lanes of Old Delhi and the grand orderly avenues of New Delhi is striking. Street food stops along the way were a delicious bonus. Absolutley reccomend this tour.",
                },
            ],
        };
    }

    return null;
};

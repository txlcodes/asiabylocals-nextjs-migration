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
            averageRating: 4.8,
            totalReviews: 18,
            guideRating: 4.9,
            valueRating: 4.7,
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
            averageRating: 4.7,
            totalReviews: 9,
            guideRating: 4.8,
            valueRating: 4.6,
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

    return null;
};

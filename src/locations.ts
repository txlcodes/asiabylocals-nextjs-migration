
export const COUNTRIES = [
    { name: 'India', code: 'IN' },
    { name: 'Thailand', code: 'TH' },
    { name: 'Japan', code: 'JP' },
    { name: 'Singapore', code: 'SG' },
    { name: 'Indonesia', code: 'ID' },
    { name: 'Malaysia', code: 'MY' },
    { name: 'Vietnam', code: 'VN' },
    { name: 'South Korea', code: 'KR' },
    { name: 'Philippines', code: 'PH' },
    { name: 'China', code: 'CN' },
    { name: 'Taiwan', code: 'TW' },
    { name: 'Hong Kong', code: 'HK' },
    { name: 'Sri Lanka', code: 'LK' },
    { name: 'Nepal', code: 'NP' },
    { name: 'Cambodia', code: 'KH' },
    { name: 'Myanmar', code: 'MM' },
    { name: 'Laos', code: 'LA' },
    { name: 'Bangladesh', code: 'BD' },
    // Western Countries
    { name: 'United States', code: 'US' },
    { name: 'United Kingdom', code: 'UK' },
    { name: 'France', code: 'FR' },
    { name: 'Italy', code: 'IT' },
    { name: 'Spain', code: 'ES' },
    { name: 'Germany', code: 'DE' },
    { name: 'Australia', code: 'AU' },
    { name: 'United Arab Emirates', code: 'AE' },
    { name: 'Turkey', code: 'TR' },
    { name: 'Egypt', code: 'EG' }
];

export const COUNTRY_CITIES: Record<string, string[]> = {
    'India': [
        'Delhi', 'Mumbai', 'Agra', 'Jaipur', 'Jodhpur', 'Jaisalmer', 'Udaipur',
        'Varanasi', 'Goa', 'Kerala', 'Rishikesh', 'Darjeeling', 'Amritsar',
        'Bikaner', 'Mathura', 'Khajuraho', 'Gwalior', 'Aurangabad', 'Mysore', 'Bengaluru'
    ],
    'Thailand': [
        'Bangkok', 'Chiang Mai', 'Phuket', 'Pattaya', 'Krabi', 'Ayutthaya',
        'Sukhothai', 'Hua Hin', 'Ko Samui', 'Ko Phangan', 'Ko Lanta', 'Phi Phi Islands'
    ],
    'Japan': [
        'Tokyo', 'Kyoto', 'Osaka', 'Hiroshima', 'Nara', 'Sapporo', 'Yokohama',
        'Fukuoka', 'Nagoya', 'Okinawa', 'Nikko', 'Takayama', 'Kanazawa'
    ],
    'Singapore': ['Singapore'],
    'Indonesia': [
        'Bali', 'Jakarta', 'Yogyakarta', 'Bandung', 'Lombok', 'Surabaya', 'Ubud', 'Gili Islands'
    ],
    'Malaysia': [
        'Kuala Lumpur', 'Penang', 'Malacca', 'Langkawi', 'Cameron Highlands', 'Kota Kinabalu', 'Borneo'
    ],
    'Vietnam': [
        'Hanoi', 'Ho Chi Minh City', 'Hoi An', 'Hue', 'Da Nang', 'Nha Trang', 'Sapa', 'Ha Long Bay', 'Mui Ne'
    ],
    'South Korea': [
        'Seoul', 'Busan', 'Jeju', 'Gyeongju', 'Incheon', 'Daegu', 'Jeonju'
    ],
    'Philippines': [
        'Manila', 'Cebu', 'Boracay', 'Palawan', 'Davao', 'Baguio', 'El Nido', 'Coron', 'Bohol'
    ],
    'China': [
        'Beijing', 'Shanghai', 'Guilin', "Xi'an", 'Chengdu', 'Hangzhou', 'Suzhou', 'Guangzhou', 'Shenzhen'
    ],
    'Taiwan': [
        'Taipei', 'Kaohsiung', 'Taichung', 'Tainan', 'Hualien'
    ],
    'Hong Kong': ['Hong Kong'],
    'Sri Lanka': [
        'Colombo', 'Kandy', 'Galle', 'Sigiriya', 'Anuradhapura', 'Ella'
    ],
    'Nepal': [
        'Kathmandu', 'Pokhara', 'Chitwan', 'Lumbini', 'Nagarkot'
    ],
    'Cambodia': [
        'Siem Reap', 'Phnom Penh', 'Battambang', 'Kampot', 'Kep'
    ],
    'Myanmar': [
        'Yangon', 'Bagan', 'Mandalay', 'Inle Lake', 'Mawlamyine'
    ],
    'Laos': [
        'Vientiane', 'Luang Prabang', 'Vang Vieng', 'Pakse', 'Phonsavan'
    ],
    'Bangladesh': [
        'Dhaka', 'Chittagong', "Cox's Bazar", 'Sylhet', 'Rajshahi'
    ],
    // New Western Countries
    'United States': [
        'New York', 'Los Angeles', 'San Francisco', 'Chicago', 'Las Vegas',
        'Miami', 'Orlando', 'Washington D.C.', 'Boston', 'Seattle', 'Hawaii', 'New Orleans'
    ],
    'United Kingdom': [
        'London', 'Edinburgh', 'Manchester', 'Bath', 'Liverpool', 'Oxford', 'Cambridge', 'York', 'Glasgow'
    ],
    'France': [
        'Paris', 'Nice', 'Lyon', 'Bordeaux', 'Marseille', 'Strasbourg', 'Avignon', 'Versailles'
    ],
    'Italy': [
        'Rome', 'Florence', 'Venice', 'Milan', 'Naples', 'Cinque Terre', 'Amalfi Coast', 'Pompeii', 'Verona'
    ],
    'Spain': [
        'Barcelona', 'Madrid', 'Seville', 'Granada', 'Valencia', 'Mallorca', 'Ibiza', 'Bilbao'
    ],
    'Germany': [
        'Berlin', 'Munich', 'Hamburg', 'Frankfurt', 'Cologne', 'Heidelberg', 'Dresden'
    ],
    'Australia': [
        'Sydney', 'Melbourne', 'Brisbane', 'Cairns', 'Gold Coast', 'Perth', 'Adelaide'
    ],
    'United Arab Emirates': [
        'Dubai', 'Abu Dhabi', 'Sharjah'
    ],
    'Turkey': [
        'Istanbul', 'Cappadocia', 'Antalya', 'Bodrum', 'Ephesus', 'Pamukkale'
    ],
    'Egypt': [
        'Cairo', 'Luxor', 'Aswan', 'Giza', 'Hurghada', 'Sharm El Sheikh', 'Alexandria'
    ]
};

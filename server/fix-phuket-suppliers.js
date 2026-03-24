import { PrismaClient } from '@prisma/client';
import dotenv from 'dotenv';

dotenv.config();
const prisma = new PrismaClient();

async function main() {
    // Create realistic Thai suppliers for each tour category
    const suppliers = [
        {
            fullName: 'Somchai Petcharat',
            companyName: 'Phuket Marine Adventures',
            email: 'booking@phuketmarineadventures.com',
            phone: '+66 76 381 765',
            whatsapp: '+66 89 472 3156',
            city: 'Phuket',
            mainHub: 'Thailand',
            tourLanguages: 'English, Thai, Chinese',
            businessType: 'company',
            companyEmployees: '11 - 25',
            companyActivities: '7 - 15',
            status: 'approved',
            emailVerified: true,
            passwordHash: '$2b$10$placeholder000000000000000000000000000000000000',
            tourIds: [235, 238, 241, 242, 244, 245], // All boat/yacht tours
        },
        {
            fullName: 'Kru Nai Chaiwat',
            companyName: 'Tiger Phuket Muay Thai Camp',
            email: 'train@tigerphuketmuaythai.com',
            phone: '+66 76 367 071',
            whatsapp: '+66 93 571 8842',
            city: 'Phuket',
            mainHub: 'Thailand',
            tourLanguages: 'English, Thai',
            businessType: 'company',
            companyEmployees: '3 - 10',
            companyActivities: '1 - 3',
            status: 'approved',
            emailVerified: true,
            passwordHash: '$2b$10$placeholder000000000000000000000000000000000001',
            tourIds: [287], // Muay Thai
        },
        {
            fullName: 'Captain Arun Srisuk',
            companyName: 'Andaman Dive Center Phuket',
            email: 'dive@andamandivecenter.com',
            phone: '+66 76 330 598',
            whatsapp: '+66 86 940 7723',
            city: 'Phuket',
            mainHub: 'Thailand',
            tourLanguages: 'English, Thai, German',
            businessType: 'company',
            companyEmployees: '3 - 10',
            companyActivities: '4 - 6',
            status: 'approved',
            emailVerified: true,
            passwordHash: '$2b$10$placeholder000000000000000000000000000000000002',
            tourIds: [311], // Scuba
        },
        {
            fullName: 'Napat Suriyawong',
            companyName: 'Kata Surf Academy',
            email: 'surf@katasurfacademy.com',
            phone: '+66 81 893 2471',
            whatsapp: '+66 81 893 2471',
            city: 'Phuket',
            mainHub: 'Thailand',
            tourLanguages: 'English, Thai',
            businessType: 'individual',
            companyEmployees: '1 - 2',
            companyActivities: '1 - 3',
            status: 'approved',
            emailVerified: true,
            passwordHash: '$2b$10$placeholder000000000000000000000000000000000003',
            tourIds: [312], // Surf
        },
        {
            fullName: 'Chef Ern Seasoning',
            companyName: 'Seasoning Thai Cooking School',
            email: 'book@seasoningphuket.com',
            phone: '+66 80 520 8666',
            whatsapp: '+66 80 520 8666',
            city: 'Phuket',
            mainHub: 'Thailand',
            tourLanguages: 'English, Thai',
            businessType: 'company',
            companyEmployees: '3 - 10',
            companyActivities: '1 - 3',
            status: 'approved',
            emailVerified: true,
            passwordHash: '$2b$10$placeholder000000000000000000000000000000000004',
            tourIds: [328], // Seasoning cooking class
        },
        {
            fullName: 'Wichai Thongprasert',
            companyName: 'Phuket Elephant Beach',
            email: 'info@phuketelephantbeach.com',
            phone: '+66 99 362 1119',
            whatsapp: '+66 99 362 1119',
            city: 'Phuket',
            mainHub: 'Thailand',
            tourLanguages: 'English, Thai, Japanese',
            businessType: 'company',
            companyEmployees: '3 - 10',
            companyActivities: '1 - 3',
            status: 'approved',
            emailVerified: true,
            passwordHash: '$2b$10$placeholder000000000000000000000000000000000005',
            tourIds: [329], // Elephant
        },
    ];

    for (const s of suppliers) {
        const { tourIds, ...supplierData } = s;

        // Create the supplier
        const created = await prisma.supplier.create({ data: supplierData });
        console.log(`✅ Created supplier [${created.id}] ${created.fullName} — ${created.companyName}`);

        // Reassign tours to this supplier
        for (const tourId of tourIds) {
            await prisma.tour.update({
                where: { id: tourId },
                data: { supplierId: created.id },
            });
            console.log(`   → Tour [${tourId}] reassigned`);
        }
    }

    console.log('\n✅ All Phuket suppliers created and tours reassigned!');
}

main()
    .catch((e) => { console.error(e); process.exit(1); })
    .finally(async () => { await prisma.$disconnect(); });

import { PrismaClient } from '@prisma/client';
import dotenv from 'dotenv';

dotenv.config();

const prisma = new PrismaClient();

async function main() {
    // Find the tour
    const existing = await prisma.tour.findUnique({
        where: { slug: 'cooking-class-food-tour' },
        select: { id: true, title: true, slug: true, duration: true, city: true },
    });

    if (!existing) {
        console.error('❌ Tour with slug "cooking-class-food-tour" not found');
        process.exit(1);
    }

    console.log(`Found: [${existing.id}] "${existing.title}"`);
    console.log(`   Current slug: ${existing.slug}`);
    console.log(`   Current duration: ${existing.duration}`);

    // Update both slug and duration
    const updated = await prisma.tour.update({
        where: { slug: 'cooking-class-food-tour' },
        data: {
            slug: 'seasoning-thai-cooking-class-phuket-cherngtalay',
            duration: '2.5 hours'
        },
    });

    console.log(`✅ Updated successfully!`);
    console.log(`   New slug: ${updated.slug}`);
    console.log(`   New duration: ${updated.duration}`);
    console.log(`   New URL: https://www.asiabylocals.com/thailand/phuket/${updated.slug}`);
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });


import { PrismaClient } from '@prisma/client';
import dotenv from 'dotenv';

dotenv.config();

const prisma = new PrismaClient();

async function main() {
    // Find the tour first so we can confirm it
    const existing = await prisma.tour.findUnique({
        where: { slug: 'phuket-kata-karon-food-tour' },
        select: { id: true, title: true, slug: true, city: true },
    });

    if (!existing) {
        console.error('❌ Tour with slug "phuket-kata-karon-food-tour" not found');
        process.exit(1);
    }

    console.log(`Found: [${existing.id}] "${existing.title}" → ${existing.slug}`);

    const updated = await prisma.tour.update({
        where: { slug: 'phuket-kata-karon-food-tour' },
        data: { slug: 'thai-cooking-class-phuket-kata' },
    });

    console.log(`✅ Slug updated: "${updated.slug}"`);
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

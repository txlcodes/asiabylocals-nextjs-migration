import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    const tours = await prisma.tour.findMany({
        where: {
            city: { contains: 'Delhi', mode: 'insensitive' }
        },
        select: {
            id: true,
            title: true,
            slug: true,
            city: true
        }
    });

    console.log(JSON.stringify(tours, null, 2));
}

main()
    .catch((e) => { console.error(e); process.exit(1); })
    .finally(async () => { await prisma.$disconnect(); });

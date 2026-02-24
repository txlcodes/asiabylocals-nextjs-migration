
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
async function main() {
    const tour = await prisma.tour.findUnique({
        where: { id: 208 }
    });
    console.log('Pickup Included (Tour 208):', tour?.pickupIncluded);
}
main().catch(console.error).finally(() => prisma.$disconnect());

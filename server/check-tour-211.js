
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
async function main() {
    const tour = await prisma.tour.findUnique({ where: { id: 211 } });
    console.log(JSON.stringify(tour, null, 2));
}
main().catch(console.error).finally(() => prisma.$disconnect());

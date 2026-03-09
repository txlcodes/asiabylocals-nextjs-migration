/**
 * fix-inr-to-usd.cjs
 * Converts all tours with currency=INR to USD using 1 USD = 85 INR rate.
 * Updates pricePerPerson, groupPrice, and groupPricingTiers.
 */
const { PrismaClient } = require('@prisma/client');
const dotenv = require('dotenv');
dotenv.config();

const prisma = new PrismaClient();
const RATE = 85;

function convertPrice(inr) {
  return Math.round(Number(inr) / RATE);
}

async function main() {
  const inrTours = await prisma.tour.findMany({
    where: { currency: 'INR' },
    select: {
      id: true, title: true, slug: true, city: true,
      pricePerPerson: true, groupPrice: true, groupPricingTiers: true, currency: true
    }
  });

  console.log(`Found ${inrTours.length} INR tours to convert\n`);

  for (const t of inrTours) {
    const oldPP = t.pricePerPerson;
    const newPP = convertPrice(oldPP);

    const oldGP = t.groupPrice;
    const newGP = oldGP ? convertPrice(oldGP) : null;

    let newTiersStr = null;
    try {
      const oldTiers = JSON.parse(t.groupPricingTiers || '[]');
      if (oldTiers.length > 0) {
        const newTiers = oldTiers.map(tier => ({
          ...tier,
          price: String(convertPrice(Number(tier.price)))
        }));
        newTiersStr = JSON.stringify(newTiers);
        console.log(`  tiers: converting ${oldTiers.length} tiers`);
      }
    } catch (e) {}

    console.log(`ID:${t.id} | ${t.title.substring(0, 55)}`);
    console.log(`  pricePerPerson: INR ${oldPP} -> USD ${newPP}`);
    if (oldGP) console.log(`  groupPrice: INR ${oldGP} -> USD ${newGP}`);

    const updateData = {
      currency: 'USD',
      pricePerPerson: newPP,
    };
    if (newGP !== null) {
      updateData.groupPrice = newGP;
    }
    if (newTiersStr !== null) {
      updateData.groupPricingTiers = newTiersStr;
    }

    await prisma.tour.update({
      where: { id: t.id },
      data: updateData
    });

    console.log(`  UPDATED\n`);
  }

  console.log(`=== Done! Converted ${inrTours.length} tours from INR to USD ===`);
  await prisma.$disconnect();
}

main().catch(e => {
  console.error(e);
  prisma.$disconnect();
  process.exit(1);
});

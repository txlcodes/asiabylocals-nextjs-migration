/**
 * fix-base64-images.js
 *
 * Finds tours that have base64-encoded images stored in the DB,
 * uploads them to Cloudinary, and replaces the base64 data with
 * the new Cloudinary URL.
 *
 * Usage:  cd server && node fix-base64-images.js
 *
 * Affected tours (6):
 *   - explore-old-new-delhi-city-luxury-car-tour  (Delhi)
 *   - hawa-mahal-private-tour                      (Jaipur)
 *   - james-bond-island-speedboat-tour-phuket      (Phuket)
 *   - phi-phi-islands-speedboat-tour-maya-bay-snorkeling (Phuket)
 *   - city-palace-guided-tour                      (Udaipur)
 *   - lake-pichola-full-day-tour                   (Udaipur)
 */

import dotenv from 'dotenv';
dotenv.config();

import { PrismaClient } from '@prisma/client';
import { uploadImage } from './utils/cloudinary.js';

const prisma = new PrismaClient();

// Known slugs with base64 image issues
const AFFECTED_SLUGS = [
  'explore-old-new-delhi-city-luxury-car-tour',
  'hawa-mahal-private-tour',
  'james-bond-island-speedboat-tour-phuket',
  'phi-phi-islands-speedboat-tour-maya-bay-snorkeling',
  'city-palace-guided-tour',
  'lake-pichola-full-day-tour',
  'elephant-village-tour-jaipur',
  'amber-fort-official-guided-tour',
];

function isBase64(str) {
  return (
    typeof str === 'string' &&
    (str.startsWith('data:image/') || str.length > 1000)
  );
}

async function fixTourImages(tour) {
  let images;
  try {
    images = JSON.parse(tour.images);
  } catch {
    console.error(`  [SKIP] Tour #${tour.id} "${tour.slug}" — images field is not valid JSON`);
    return false;
  }

  if (!Array.isArray(images)) {
    console.error(`  [SKIP] Tour #${tour.id} "${tour.slug}" — images is not an array`);
    return false;
  }

  const folder = `tours/${tour.city.toLowerCase().replace(/\s+/g, '-')}`;
  let changed = false;

  for (let i = 0; i < images.length; i++) {
    const img = images[i];
    if (!isBase64(img)) continue;

    console.log(`  Uploading image ${i + 1}/${images.length} for "${tour.slug}" to Cloudinary...`);
    console.log(`    Base64 size: ${(img.length / 1024).toFixed(0)} KB`);

    try {
      const cloudinaryUrl = await uploadImage(img, folder, `${tour.slug}-${i}`);
      images[i] = cloudinaryUrl;
      changed = true;
      console.log(`    -> ${cloudinaryUrl}`);
    } catch (err) {
      console.error(`    [ERROR] Failed to upload image ${i + 1}: ${err.message}`);
    }
  }

  if (changed) {
    await prisma.tour.update({
      where: { id: tour.id },
      data: { images: JSON.stringify(images) },
    });
    console.log(`  [DONE] Updated tour #${tour.id} "${tour.slug}" with Cloudinary URLs\n`);
  } else {
    console.log(`  [SKIP] No base64 images found in tour "${tour.slug}"\n`);
  }

  return changed;
}

async function main() {
  console.log('=== Base64 Image to Cloudinary Migration ===\n');
  console.log(`Cloudinary Cloud: ${process.env.CLOUDINARY_CLOUD_NAME}`);
  console.log(`Database: ${process.env.DATABASE_URL?.substring(0, 40)}...`);
  console.log(`Checking ${AFFECTED_SLUGS.length} known affected tours...\n`);

  const tours = await prisma.tour.findMany({
    where: { slug: { in: AFFECTED_SLUGS } },
    select: { id: true, slug: true, city: true, images: true, title: true },
  });

  console.log(`Found ${tours.length} tours in database.\n`);

  if (tours.length === 0) {
    console.log('No matching tours found. Exiting.');
    await prisma.$disconnect();
    return;
  }

  let fixedCount = 0;
  for (const tour of tours) {
    console.log(`Processing: "${tour.title}" (${tour.slug})`);
    const wasFixed = await fixTourImages(tour);
    if (wasFixed) fixedCount++;
  }

  console.log(`\n=== Migration Complete ===`);
  console.log(`Fixed: ${fixedCount}/${tours.length} tours`);
  console.log(`Skipped: ${tours.length - fixedCount} tours (already had Cloudinary URLs)`);

  await prisma.$disconnect();
}

main().catch((err) => {
  console.error('Fatal error:', err);
  prisma.$disconnect();
  process.exit(1);
});

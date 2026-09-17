/**
 * Resolve a tour photo to the cheapest host that can serve it.
 *
 * Images started on Cloudinary, whose bill is metered per request and per
 * resize: at 4 countries that was already 27 credits of bandwidth and 21 of
 * transformations a month, and storage only ever grows as countries are added.
 * The replacement is a set of pre-resized WebP files on Cloudflare R2, where
 * egress is not billed at all and the first 10 GB of storage is free.
 *
 * NEXT_PUBLIC_IMAGE_HOST is the switch. Unset, everything behaves exactly as
 * it did on Cloudinary; set, the same photos come from R2. The R2 key is
 * derived from the Cloudinary public_id, so no database row has to change and
 * unsetting the variable in Render is a complete rollback.
 */

// Every extra width is a file to store and, on Cloudinary, a billable
// transformation. These four cover what the layouts actually ask for:
// 128 avatars, 384 card thumbnails, 640 cards and phones, 1600 heroes.
const WIDTHS = [128, 384, 640, 1600] as const;

const IMAGE_HOST = (process.env.NEXT_PUBLIC_IMAGE_HOST || '').replace(/\/$/, '');

export function isCloudinaryUrl(src: string): boolean {
  return typeof src === 'string' && src.includes('res.cloudinary.com') && src.includes('/upload/');
}

/**
 * Strip the transformation and version segments Cloudinary puts between
 * /upload/ and the public_id, then drop the file extension.
 *
 *   /upload/f_auto,q_auto/v1712/tours/agra/x.jpg  ->  tours/agra/x
 */
export function cloudinaryPublicId(src: string): string | null {
  const after = src.split('/upload/')[1];
  if (!after) return null;
  const segments = after.split('?')[0].split('/').filter(Boolean);
  while (
    segments.length > 1 &&
    (/^v\d+$/.test(segments[0]) || segments[0].includes(',') || /^[a-z]_[^/]*$/.test(segments[0]))
  ) {
    segments.shift();
  }
  const id = segments.join('/').replace(/\.(jpg|jpeg|png|webp|avif|gif)$/i, '');
  return id || null;
}

/** Smallest stored width that still covers the request. */
function ladderWidth(width: number): number {
  return WIDTHS.find((w) => w >= width) ?? WIDTHS[WIDTHS.length - 1];
}

/**
 * A photo uploaded straight to R2 (every country from Bali onwards) is stored
 * as .../<key>/1600.webp. The other widths sit beside it, so serving a
 * smaller one is a filename swap. Works whether or not IMAGE_HOST is set,
 * because these photos have no Cloudinary copy to fall back to.
 */
const R2_NATIVE = /^(https:\/\/images\.asiabylocals\.com\/.+)\/(\d+)\.webp$/;

export function cloudinaryLoader({
  src,
  width,
  quality,
}: {
  src: string;
  width: number;
  quality?: number;
}): string {
  const r2 = typeof src === 'string' ? src.match(R2_NATIVE) : null;
  if (r2) return `${r2[1]}/${ladderWidth(width)}.webp`;
  if (!isCloudinaryUrl(src)) return src;

  if (IMAGE_HOST) {
    const id = cloudinaryPublicId(src);
    // A photo that has not been migrated yet keeps its Cloudinary URL rather
    // than pointing at an R2 key that would 404.
    if (id) return `${IMAGE_HOST}/${id}/${ladderWidth(width)}.webp`;
  }

  // f_auto  -> AVIF/WebP based on the Accept header
  // q_auto  -> Cloudinary picks the quality that preserves perceived detail
  // c_limit -> never upscale past the original
  const transform = `f_auto,q_${quality ?? 'auto:eco'},w_${ladderWidth(width)},c_limit`;

  // Drop any transform already in the URL instead of chaining onto it. No row
  // in the database carries one today, but a stacked transform bills as a
  // second derived file for a result the first one already produced.
  const [prefix, after] = src.split('/upload/');
  const rest = after.split('/').filter(Boolean);
  while (rest.length > 1 && (rest[0].includes(',') || /^[a-z]_[^/]*$/.test(rest[0]))) {
    rest.shift();
  }
  return `${prefix}/upload/${transform}/${rest.join('/')}`;
}

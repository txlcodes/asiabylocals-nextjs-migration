/**
 * Serve Cloudinary-hosted images straight from Cloudinary's CDN.
 *
 * Every tour photo already lives on Cloudinary, which does format negotiation
 * (AVIF/WebP), quality tuning and resizing at its own edge. Routing those same
 * images through Next.js/Vercel's optimizer added a second hop that had to
 * re-fetch and re-encode each variant — on a cold cache a city page with 20+
 * cards queued behind that optimizer and took ~35s to finish loading.
 *
 * This loader rewrites the URL into a Cloudinary transformation instead, so the
 * bytes come back already sized and encoded, with no Vercel involvement.
 */
export function cloudinaryLoader({
  src,
  width,
  quality,
}: {
  src: string;
  width: number;
  quality?: number;
}): string {
  if (!isCloudinaryUrl(src)) return src;

  // f_auto  -> AVIF/WebP based on the Accept header
  // q_auto  -> Cloudinary picks the quality that preserves perceived detail
  // c_limit -> never upscale past the original
  const transform = `f_auto,q_${quality ?? 'auto'},w_${width},c_limit`;
  return src.replace('/upload/', `/upload/${transform}/`);
}

export function isCloudinaryUrl(src: string): boolean {
  return typeof src === 'string' && src.includes('res.cloudinary.com') && src.includes('/upload/');
}

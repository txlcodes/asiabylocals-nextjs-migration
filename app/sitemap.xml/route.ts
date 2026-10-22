import { BASE_URL, getSitemapChunkCount } from '@/lib/sitemapEntries';

// Sitemap index. /sitemap.xml is the URL already submitted in Search Console
// and listed in robots.txt, so it stays the entry point; it now points at the
// per-chunk files (/sitemaps/0.xml, /sitemaps/1.xml, …) served by app/sitemaps/[file]/route.ts
// generates. Same hourly refresh as the chunks.
export const revalidate = 3600;

export async function GET() {
  const count = await getSitemapChunkCount();
  const lastmod = new Date().toISOString();
  const items = Array.from({ length: count }, (_, i) =>
    `  <sitemap>\n    <loc>${BASE_URL}/sitemaps/${i}.xml</loc>\n    <lastmod>${lastmod}</lastmod>\n  </sitemap>`
  ).join('\n');
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${items}\n</sitemapindex>\n`;
  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=0, s-maxage=3600, stale-while-revalidate=86400',
    },
  });
}

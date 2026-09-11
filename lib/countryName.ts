// Country slugs whose display name is not just the capitalised slug.
// Without this, /uae renders as "Uae" in headings and breadcrumbs.
const COUNTRY_DISPLAY_NAME: Record<string, string> = {
  uae: 'UAE',
};

export function countryDisplayName(slug: string): string {
  const known = COUNTRY_DISPLAY_NAME[slug.toLowerCase()];
  if (known) return known;
  return slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

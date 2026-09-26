// The price Google is told must be the price the page shows.
//
// The tour page and the city cards both quote the rate for TWO travellers,
// taken from an option's group pricing tiers. The JSON-LD used to quote
// `pricePerPerson` from the database instead. On 84 India tours that field has
// drifted far below anything bookable (one reads $5.21 against a cheapest real
// rate of $24), so the structured data advertised a price no guest could pay
// while the visible page showed the right one.
//
// These helpers derive the offer range from the same tiers the page renders,
// and fall back to pricePerPerson only when a tour has no usable options.

type Tier = { minPeople?: unknown; maxPeople?: unknown; price?: unknown };
type Option = { price?: unknown; groupPricingTiers?: unknown };

function tiersOf(opt: Option): Tier[] | null {
  const g = opt?.groupPricingTiers;
  if (!g) return null;
  try {
    const t = typeof g === 'string' ? JSON.parse(g) : g;
    return Array.isArray(t) && t.length ? (t as Tier[]) : null;
  } catch {
    return null;
  }
}

/** Per-head rate a pair would pay for one option, matching the page's own maths. */
function perHeadForTwo(opt: Option): number | null {
  const tiers = tiersOf(opt);
  if (tiers) {
    const two = tiers.find(t => parseInt(String(t?.minPeople)) === 2) || tiers[0];
    const total = parseFloat(String(two?.price));
    const heads = parseInt(String(two?.minPeople)) || 1;
    if (isFinite(total) && total > 0) return total / heads;
  }
  const flat = parseFloat(String(opt?.price));
  return isFinite(flat) && flat > 0 ? flat : null;
}

/** Offer range for a tour's JSON-LD, or null when nothing is bookable yet. */
export function offerRange(options: unknown, fallback?: unknown): { low: number; high: number } | null {
  const list = Array.isArray(options) ? (options as Option[]) : [];
  const rates = list.map(perHeadForTwo).filter((n): n is number => n != null);
  if (rates.length) {
    return { low: Math.round(Math.min(...rates) * 100) / 100, high: Math.round(Math.max(...rates) * 100) / 100 };
  }
  const f = parseFloat(String(fallback));
  return isFinite(f) && f > 0 ? { low: f, high: f } : null;
}

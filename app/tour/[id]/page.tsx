import { redirect } from 'next/navigation';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:3001';

interface Props {
  params: Promise<{ id: string }>;
}

const slugify = (v: string) => v.toLowerCase().trim().replace(/\s+/g, '-');

export default async function TourByIdPage({ params }: Props) {
  const { id } = await params;
  let target: string | null = null;
  try {
    const res = await fetch(`${API_URL}/api/tours/${id}`);
    if (res.ok) {
      const data = await res.json();
      // The API answers { success, tour }, so the tour fields live one level
      // down. Reading them off the wrapper always came back undefined and sent
      // every visitor to the homepage.
      const tour = data?.tour ?? data;
      // The country used to be hardcoded to "india", which sent Japan, UAE and
      // every other country's tours to a URL that does not exist.
      if (tour?.city && tour?.slug && tour?.country) {
        target = `/${slugify(tour.country)}/${slugify(tour.city)}/${tour.slug}`;
      }
    }
  } catch {
    // fall through to the homepage redirect below
  }
  redirect(target ?? '/');
}

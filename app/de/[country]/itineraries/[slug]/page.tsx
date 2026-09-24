import ItineraryPage, { generateMetadata as genMeta } from '@/app/[country]/itineraries/[slug]/page';
import type { Metadata } from 'next';
export const revalidate = 3600;
type P = { params: Promise<{ country: string; slug: string }> };
const withLang = async (params: P['params']) => Promise.resolve({ ...(await params), lang: 'de' });
export async function generateMetadata({ params }: P): Promise<Metadata> { return genMeta({ params: withLang(params) } as any); }
export default async function Page({ params }: P) { return ItineraryPage({ params: withLang(params) } as any); }

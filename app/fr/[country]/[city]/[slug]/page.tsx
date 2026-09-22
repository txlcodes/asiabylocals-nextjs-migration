import SlugPage, { generateMetadata as genMeta } from '@/app/[country]/[city]/[slug]/page';
import type { Metadata } from 'next';
export const revalidate = 60;
type P = { params: Promise<{ country: string; city: string; slug: string }> };
const withLang = async (params: P['params']) => Promise.resolve({ ...(await params), lang: 'fr' });
export async function generateMetadata({ params }: P): Promise<Metadata> { return genMeta({ params: withLang(params) } as any); }
export default async function Page({ params }: P) { return SlugPage({ params: withLang(params) } as any); }

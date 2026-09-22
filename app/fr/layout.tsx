import LangLinks from '@/components/LangLinks';
// Literal /fr folder: Next.js forbids [lang] next to [country], so each language gets its own folder.
export default function LangLayout({ children }: { children: React.ReactNode }) {
  return <div lang="fr"><LangLinks lang="fr" />{children}</div>;
}

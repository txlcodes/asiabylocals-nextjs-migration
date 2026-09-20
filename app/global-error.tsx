'use client';
// Last-resort boundary (root layout errors). Same stale-chunk auto-reload.
import { useEffect } from 'react';

export default function GlobalError({ error }: { error: Error & { digest?: string } }) {
  useEffect(() => {
    console.error('[global error]', error);
    if (/ChunkLoadError|Loading chunk|dynamically imported module|Failed to fetch/i.test(`${error?.name} ${error?.message}`)) {
      try {
        if (Date.now() - Number(sessionStorage.getItem('abl-chunk-reload') || 0) > 60_000) {
          sessionStorage.setItem('abl-chunk-reload', String(Date.now()));
          window.location.reload();
        }
      } catch { /* ignore */ }
    }
  }, [error]);
  return (
    <html lang="en">
      <body style={{ fontFamily: 'system-ui, sans-serif', padding: '4rem 1.5rem', textAlign: 'center' }}>
        <h1 style={{ fontSize: 22, fontWeight: 800, color: '#001A33' }}>Something went wrong</h1>
        <p style={{ color: '#4B5563', margin: '12px 0 24px' }}>The site was probably updated while this tab was open.</p>
        <button onClick={() => window.location.reload()} style={{ padding: '12px 20px', borderRadius: 12, background: '#10B981', color: '#fff', fontWeight: 700, border: 0 }}>Reload page</button>
      </body>
    </html>
  );
}

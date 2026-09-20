'use client';
// Landing page for the reset link in the password-reset email.
import { Suspense, useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';

function ResetForm() {
  const params = useSearchParams();
  const router = useRouter();
  const token = params.get('token') || '';
  const [pw, setPw] = useState('');
  const [pw2, setPw2] = useState('');
  const [msg, setMsg] = useState('');
  const [ok, setOk] = useState(false);
  const [busy, setBusy] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMsg('');
    if (pw.length < 8) return setMsg('Password must be at least 8 characters.');
    if (pw !== pw2) return setMsg('The two passwords do not match.');
    setBusy(true);
    try {
      const API_URL = process.env.NEXT_PUBLIC_API_URL || window.location.origin;
      const r = await fetch(`${API_URL}/api/suppliers/reset-password`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ token, password: pw }) });
      const d = await r.json();
      if (d.success) { setOk(true); setMsg('Password updated. Taking you to sign in...'); setTimeout(() => router.push('/supplier'), 1800); }
      else setMsg(d.error || 'Could not reset the password. Request a new link from the login page.');
    } catch { setMsg('Network error, please try again.'); }
    setBusy(false);
  };

  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-16">
      <form onSubmit={submit} className="w-full max-w-md bg-white rounded-3xl shadow-xl p-8 space-y-5">
        <h1 className="text-2xl font-black text-[#001A33]">Choose a new password</h1>
        <p className="text-sm text-gray-500">For your AsiaByLocals partner account.</p>
        {!token && <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl text-sm font-semibold">This link is missing its token. Open the link from the email again, or request a new one.</div>}
        <input type="password" value={pw} onChange={(e) => setPw(e.target.value)} placeholder="New password (8+ characters)" className="w-full border border-gray-200 rounded-xl px-4 py-3 bg-blue-50/40 outline-none focus:border-[#0071EB]" autoComplete="new-password" />
        <input type="password" value={pw2} onChange={(e) => setPw2(e.target.value)} placeholder="Repeat new password" className="w-full border border-gray-200 rounded-xl px-4 py-3 bg-blue-50/40 outline-none focus:border-[#0071EB]" autoComplete="new-password" />
        {msg && <div className={`${ok ? 'bg-green-50 border-green-200 text-green-800' : 'bg-red-50 border-red-200 text-red-700'} border px-4 py-3 rounded-xl text-sm font-semibold`}>{msg}</div>}
        <button type="submit" disabled={busy || !token || ok} className="w-full bg-[#0071EB] hover:bg-[#005bb8] text-white font-black py-4 rounded-full disabled:opacity-50">{busy ? 'Saving...' : 'Set new password'}</button>
        <a href="/supplier" className="block text-center text-sm font-semibold text-[#0071EB]">Back to sign in</a>
      </form>
    </main>
  );
}

export default function ResetPasswordPage() {
  return <Suspense fallback={null}><ResetForm /></Suspense>;
}

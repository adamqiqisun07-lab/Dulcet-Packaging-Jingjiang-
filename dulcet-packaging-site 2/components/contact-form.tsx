'use client';
import { useState } from 'react';

export default function ContactForm(){
  const [status, setStatus] = useState<'idle'|'ok'|'err'|'sub'>('idle');
  async function onSubmit(e: React.FormEvent<HTMLFormElement>){
    e.preventDefault();
    setStatus('sub');
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    const res = await fetch('/api/contact', { method:'POST', body: JSON.stringify(data) });
    if(res.ok) setStatus('ok'); else setStatus('err');
  }
  return (
    <form onSubmit={onSubmit} className="space-y-3 max-w-xl">
      <input name="name" placeholder="Name" required className="w-full p-3 ring-1 ring-slate-300 rounded-xl" />
      <input name="company" placeholder="Company" className="w-full p-3 ring-1 ring-slate-300 rounded-xl" />
      <input name="email" type="email" placeholder="Email" required className="w-full p-3 ring-1 ring-slate-300 rounded-xl" />
      <input name="phone" placeholder="Phone / WhatsApp" className="w-full p-3 ring-1 ring-slate-300 rounded-xl" />
      <input name="market" placeholder="Target Market" className="w-full p-3 ring-1 ring-slate-300 rounded-xl" />
      <textarea name="message" placeholder="Message" required className="w-full p-3 ring-1 ring-slate-300 rounded-xl h-32" />
      <button disabled={status==='sub'} className="btn btn-primary">{status==='sub'?'Sending…':'Send Inquiry'}</button>
      {status==='ok' && <p className="text-green-700">Thank you! We have received your inquiry.</p>}
      {status==='err' && <p className="text-red-700">Something went wrong. Please try again.</p>}
    </form>
  );
}

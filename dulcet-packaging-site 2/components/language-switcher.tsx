'use client';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { localeNames } from '@/lib/locales';

export default function LanguageSwitcher(){
  const pathname = usePathname();
  const parts = pathname.split('/').filter(Boolean);
  const current = parts[0] || 'en';
  const rest = parts.slice(1).join('/');
  return (
    <div className="flex items-center gap-2">
      {['en','pt','zh'].map(l => (
        <Link key={l} href={`/${l}/${rest}`} className={`text-sm px-2 py-1 rounded ${l===current?'bg-slate-900 text-white':'ring-1 ring-slate-300'}`}>
          {localeNames[l]}
        </Link>
      ))}
    </div>
  );
}

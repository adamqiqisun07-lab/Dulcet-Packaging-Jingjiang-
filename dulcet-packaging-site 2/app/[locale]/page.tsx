import Image from 'next/image';
import {useTranslations} from 'next-intl';
import Link from 'next/link';

export const metadata = { title: 'Dulcet Packaging — Advanced PET & Paper' };

export default function Page(){
  const t = useTranslations();
  return (
    <div className="space-y-12">
      <section className="grid gap-6 lg:grid-cols-2 items-center">
        <div className="space-y-4">
          <h1 className="text-3xl md:text-5xl font-semibold">
            {t('hero.title')}
          </h1>
          <p className="text-lg text-slate-600">{t('hero.subtitle')}</p>
          <div className="flex gap-3">
            <Link href="./products" className="btn btn-primary">{t('hero.cta.products')}</Link>
            <Link href="./contact" className="btn btn-ghost">{t('hero.cta.contact')}</Link>
          </div>
        </div>
        <div className="relative h-72 w-full rounded-2xl overflow-hidden shadow">
          <Image src="/images/hero.jpg" alt="PET film roll" fill priority className="object-cover" />
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        {['PET Film','Composite Paper','Transfer Paper'].map((name) => (
          <div key={name} className="card">
            <h3 className="text-xl font-semibold mb-2">{name}</h3>
            <p className="text-slate-600">High consistency, precise specs, export‑ready packaging.</p>
            <Link href="./products" className="mt-3 inline-block text-slate-900 underline">Explore</Link>
          </div>
        ))}
      </section>

      <section className="rounded-2xl bg-slate-50 p-6 text-center">
        <p className="text-slate-700">{t('home.trust')}</p>
      </section>
    </div>
  );
}

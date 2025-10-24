import Image from 'next/image';
import SpecTable from '@/components/spec-table';
import Link from 'next/link';

const db:any = {
  'pet-film-general': {
    name:'PET Film – General Purpose',
    image:'/images/products/pet-general.jpg',
    features:['High tensile strength','Excellent clarity','Good dimensional stability'],
    applications:['Printing','Packaging','Lamination'],
    specs:{ Thickness:'12–125 μm', Width:'Up to 2,500 mm', Finish:'Gloss/Matte' },
    datasheet:'/datasheets/pet-general.pdf'
  }
};

export async function generateStaticParams(){
  return Object.keys(db).map(slug => ({slug}));
}

export default function Page({params}:{params:{slug:string}}){
  const p = db[params.slug];
  if(!p) return <div>Not found</div>;
  return (
    <article className="grid gap-6 lg:grid-cols-2">
      <div className="relative h-80 w-full rounded-2xl overflow-hidden shadow">
        <Image src={p.image} alt={p.name} fill className="object-cover" />
      </div>
      <div>
        <h1 className="text-2xl font-semibold mb-2">{p.name}</h1>
        <h2 className="text-lg font-medium mb-2">Key Features</h2>
        <ul className="list-disc pl-5 mb-4">{p.features.map((f:string)=>(<li key={f}>{f}</li>))}</ul>
        <h2 className="text-lg font-medium mb-2">Applications</h2>
        <ul className="list-disc pl-5 mb-4">{p.applications.map((a:string)=>(<li key={a}>{a}</li>))}</ul>
        <SpecTable specs={p.specs} />
        <div className="flex gap-3 mt-4">
          <a href={p.datasheet} className="rounded-2xl px-4 py-2 ring-1 ring-slate-300" target="_blank">Download Datasheet</a>
          <Link href="/en/contact" className="rounded-2xl px-4 py-2 bg-slate-900 text-white">Inquiry</Link>
        </div>
      </div>
    </article>
  );
}

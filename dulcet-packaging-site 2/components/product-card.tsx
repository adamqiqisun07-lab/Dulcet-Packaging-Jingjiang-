import Image from 'next/image';
import Link from 'next/link';

export default function ProductCard({product}:{product:any}){
  return (
    <div className="card">
      <div className="relative h-40 w-full rounded-xl overflow-hidden mb-3">
        <Image src={product.image} alt={product.name} fill className="object-cover" />
      </div>
      <h3 className="text-lg font-semibold">{product.name}</h3>
      <p className="text-sm text-slate-600">{product.category}</p>
      <dl className="mt-2 text-sm text-slate-700">
        {Object.entries(product.specs).map(([k,v]) => (
          <div key={k} className="flex justify-between"><dt className="font-medium">{k}</dt><dd>{String(v)}</dd></div>
        ))}
      </dl>
      <Link href={`./products/${product.slug}`} className="mt-3 inline-block underline">Details</Link>
    </div>
  );
}

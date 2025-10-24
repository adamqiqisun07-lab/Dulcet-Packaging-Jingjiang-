import ProductCard from '@/components/product-card';

const products = [
  { slug:'pet-film-general', name:'PET Film – General Purpose', category:'PET Film', image:'/images/products/pet-general.jpg', specs:{ Thickness:'12–125 μm', Width:'Up to 2,500 mm', Finish:'Gloss/Matte' } },
  { slug:'composite-paper-xx', name:'Composite Paper – High Strength', category:'Composite Paper', image:'/images/products/composite-high.jpg', specs:{ BasisWeight:'60–120 g/m²', Width:'Custom', Finish:'Smooth' } },
  { slug:'transfer-paper-heat', name:'Transfer Paper – Heat Transfer', category:'Transfer Paper', image:'/images/products/transfer-heat.jpg', specs:{ BasisWeight:'60–80 g/m²', Size:'Roll/Sheet', Coating:'Specialized' } }
];

export const metadata = { title: 'Products' };

export default function Page(){
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Products</h1>
      <div className="grid gap-6 md:grid-cols-3">
        {products.map(p => <ProductCard key={p.slug} product={p} />)}
      </div>
    </div>
  );
}

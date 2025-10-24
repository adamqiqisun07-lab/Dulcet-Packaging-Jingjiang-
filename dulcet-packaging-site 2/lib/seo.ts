export const site = {
  name: 'Dulcet Packaging',
  url: 'https://www.example.com',
  tagline: 'Advanced PET Films & Paper Materials',
  company: {
    name: 'Dulcet Packaging',
    location: 'Jingjiang, Jiangsu, China'
  },
  markets: ['Brazil', 'South America', 'Europe', 'Middle East']
};

export function defaultMetadata({title, description}:{title?:string; description?:string}){
  const t = title ? `${title} | ${site.name}` : `${site.name} — ${site.tagline}`;
  return {
    title: t,
    description: description ?? 'Professional exporter of PET films, composite paper, and transfer paper.',
    alternates: { canonical: site.url },
    openGraph: { title: t, description, url: site.url, siteName: site.name, type: 'website' },
    twitter: { card: 'summary_large_image', title: t, description }
  };
}

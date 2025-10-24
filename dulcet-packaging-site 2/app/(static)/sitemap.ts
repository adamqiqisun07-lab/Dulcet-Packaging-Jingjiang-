import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ['', '/about', '/products', '/applications', '/news', '/contact'];
  const locales = ['en','pt','zh'];
  const base = 'https://www.example.com';
  const entries: MetadataRoute.Sitemap = [];
  for (const l of locales) {
    for (const r of routes) entries.push({ url: `${base}/${l}${r}`, changeFrequency: 'monthly', priority: 0.7 });
  }
  return entries;
}

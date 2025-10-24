import Link from 'next/link';
import LanguageSwitcher from './language-switcher';

export default function Header(){
  return (
    <header className="border-b">
      <div className="container-responsive py-4 flex items-center justify-between gap-4">
        <Link href="/en" className="text-lg font-semibold tracking-wide">Dulcet Packaging</Link>
        <nav className="hidden md:flex gap-6 text-sm">
          <Link href="/en" className="hover:underline">Home</Link>
          <Link href="/en/about" className="hover:underline">About</Link>
          <Link href="/en/products" className="hover:underline">Products</Link>
          <Link href="/en/applications" className="hover:underline">Applications</Link>
          <Link href="/en/news" className="hover:underline">News</Link>
          <Link href="/en/contact" className="hover:underline">Contact</Link>
        </nav>
        <LanguageSwitcher />
      </div>
    </header>
  );
}

export default function Footer(){
  const year = new Date().getFullYear();
  return (
    <footer className="border-t mt-16">
      <div className="container-responsive py-6 text-sm text-slate-600 flex flex-col md:flex-row gap-2 md:items-center md:justify-between">
        <div>© {year} Dulcet Packaging — Jingjiang, Jiangsu, China</div>
        <div>All rights reserved.</div>
      </div>
    </footer>
  );
}

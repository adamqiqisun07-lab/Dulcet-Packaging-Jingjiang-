import ContactForm from '@/components/contact-form';

export const metadata = { title: 'Contact — Dulcet Packaging' };

export default function Page(){
  return (
    <div className="grid gap-8 lg:grid-cols-2">
      <div>
        <h1 className="text-2xl font-semibold mb-2">Contact Us</h1>
        <p className="text-slate-600 mb-4">Reach out via the form or WhatsApp. We reply within 1 business day.</p>
        <ContactForm />
      </div>
      <aside className="space-y-3">
        <div className="card">
          <h2 className="font-semibold mb-2">Company</h2>
          <p>Dulcet Packaging</p>
          <p>Jingjiang, Jiangsu, China</p>
          <p>Email: sales@example.com</p>
          <p>WhatsApp: +00 0000 0000</p>
        </div>
        <div className="card">
          <h2 className="font-semibold mb-2">WeChat</h2>
          <img src="/images/wechat-qr.png" alt="WeChat QR" className="rounded-xl ring-1 ring-slate-200 w-48 h-48 object-cover" />
        </div>
        <div className="card">
          <h2 className="font-semibold mb-2">Map</h2>
          <p>Embed Google Map or Baidu Map here.</p>
        </div>
      </aside>
    </div>
  );
}

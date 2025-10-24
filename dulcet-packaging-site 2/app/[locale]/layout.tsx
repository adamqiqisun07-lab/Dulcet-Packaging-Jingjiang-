import '../styles.css';
import {ReactNode} from 'react';
import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import Header from '@/components/header';
import Footer from '@/components/footer';

export const dynamic = 'force-static';

export default async function RootLayout({children, params}:{children:ReactNode; params:{locale:string}}){
  const messages = await getMessages();
  const lang = params.locale;
  return (
    <html lang={lang} suppressHydrationWarning>
      <body className="min-h-dvh bg-white text-slate-900 antialiased">
        <NextIntlClientProvider messages={messages} locale={lang}>
          <Header />
          <main className="container-responsive py-8">{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

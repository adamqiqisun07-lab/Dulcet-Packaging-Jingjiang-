import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['en', 'pt', 'zh'],
  defaultLocale: 'en'
});

export const config = { matcher: ['/((?!_next|.*\..*).*)'] };

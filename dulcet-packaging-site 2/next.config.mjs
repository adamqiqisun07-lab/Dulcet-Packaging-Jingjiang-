/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: { serverActions: { allowedOrigins: ["*"] } },
  images: { remotePatterns: [] },
  i18n: { locales: ["en", "pt", "zh"], defaultLocale: "en" }
};
export default nextConfig;

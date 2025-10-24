# Dulcet Packaging — Multilingual Website (Next.js)

This is a ready-to-deploy Next.js website for **Dulcet Packaging** (Jingjiang, Jiangsu, China) with English, Portuguese, and Simplified Chinese.

## Quick Start
1. Ensure Node.js LTS is installed.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run locally:
   ```bash
   npm run dev
   # open http://localhost:3000/en  (or /pt, /zh)
   ```
4. Build/preview:
   ```bash
   npm run build && npm start
   ```

## Deploy
Deploy to **Vercel** (recommended):
- Create a new project and import this repository/folder
- Set `MAIL_*` env vars if you want the contact form to email your team (see below)
- Deploy

## Contact Form (Email)
Set the following environment variables on your hosting platform:
```
MAIL_HOST=smtp.yourprovider.com
MAIL_PORT=587
MAIL_USER=your_smtp_username
MAIL_PASS=your_smtp_password
MAIL_FROM=website@dulcetpackaging.com
MAIL_TO=sales@dulcetpackaging.com
```
Without these vars, the API returns a dev success and no email is sent.

## Internationalization
Locale routes: `/en`, `/pt`, `/zh`. Translations in `messages/*`. Add or edit keys as needed.

## Customize
- Replace placeholder images in `public/images/*`
- Update company info in `components/footer.tsx` and `app/[locale]/(routes)/contact/page.tsx`
- Add more products by expanding `app/[locale]/(routes)/products/*`

## License & Ownership
All source code is delivered for your company to own and modify.

# Hephabots website

One-page site for Hephabots: low-cost robot arms, built in India, starting with sorting dry waste.
Live at https://www.hephabots.com (GitHub Pages, deployed on push to `main` by `.github/workflows/deploy.yml`).

## Local development

```sh
npm install
npm run dev     # http://localhost:8080
npm run build   # outputs dist/
```

## Editing

- Page copy: `src/components/landing/Sections.tsx` (sections 1–6) and `ContactSection.tsx` (closing band and form).
- Contact details, WhatsApp, Google Sheet URL: `src/config/site.ts`.
- SEO tags and Open Graph: `index.html`, image at `public/og-image.png`.

**Before publishing, read [docs/FORM_SETUP.md](docs/FORM_SETUP.md).** It lists the values to fill in and how to connect the Google Sheet.

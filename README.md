# Syla Marie Garzon Cumuyog - Portfolio

Modern personal portfolio built with Next.js App Router, TypeScript, Tailwind CSS, Framer Motion, and shadcn/ui.

## Screenshots

Add screenshots to `public/screenshots/` and update the links below.

- Home: `public/screenshots/home.png`
- Projects: `public/screenshots/projects.png`
- About + Certificates: `public/screenshots/about.png`
- Contact: `public/screenshots/contact.png`

## Setup

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Scripts

- `npm run dev` - local dev server
- `npm run build` - production build
- `npm run start` - run production build
- `npm run lint` - lint

## Contact Form Email Setup (Resend)

Create an `.env.local` file with:

```bash
RESEND_API_KEY=your_resend_api_key
CONTACT_TO_EMAIL=sylamariecumuyog@outlook.com
CONTACT_FROM_EMAIL="Portfolio Contact <onboarding@resend.dev>"
```

- `RESEND_API_KEY` is required.
- `CONTACT_TO_EMAIL` defaults to `sylamariecumuyog@outlook.com` if omitted.
- `CONTACT_FROM_EMAIL` can stay as `onboarding@resend.dev` for testing.

## Customize Content

- Update profile + links: `src/data/site.ts`
- Update projects: `src/data/projects.ts`
- Replace certificates: `public/certificates/`
- Update certificate labels: `src/data/site.ts`

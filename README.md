# Evergreen Reach — Next.js

Premium dark-mode marketing site. Same design & north-star tone as the static HTML version, rebuilt with **Next.js 16 · React 19 · Tailwind CSS 4 · TypeScript**.

## Why Next.js here

| Benefit | What you get |
|---------|----------------|
| Components | Edit sections independently (`Hero`, `Plans`, …) |
| Content hub | Pricing, services, copy constants in `src/lib/site.ts` |
| Fonts | `next/font` (Fraunces + DM Sans) — no layout shift |
| Metadata | First-class SEO / OG / Twitter cards |
| Analytics | `@vercel/analytics` + Speed Insights + GA |
| Future | Easy multi-page, blog, portal, API routes |

## Commands

```bash
npm run dev      # http://localhost:3000
npm run build
npm start
```

## Deploy (Vercel)

Framework: **Next.js** (auto-detected). Formspree endpoint lives in `src/lib/site.ts`.

## Edit copy / pricing

Start in **`src/lib/site.ts`**. Section layout lives in the matching component under `src/components/`.

# Evergreen Reach — Next.js

Premium dark-mode marketing site for small & rural businesses.

**Stack:** Next.js 16 · React 19 · Tailwind CSS 4 · TypeScript

## Live

| | |
|--|--|
| **Site** | https://www.evergreen-reach.com |
| **Vercel project** | https://evergreen-reach-next.vercel.app |
| **GitHub** | https://github.com/dpuzel/evergreen-reach-next |
| **Branch** | `main` → auto-deploys to Vercel |

## Workflow

```bash
cd next   # if you're in the monorepo parent
npm run dev
# edit → commit → push
git add .
git commit -m "your message"
git push origin main
```

## Edit guide

| What | Where |
|------|--------|
| Pricing / services / contact | `src/lib/site.ts` |
| Section layout | `src/components/*` |
| Colors & UI chrome | `src/app/globals.css` |
| SEO / fonts | `src/app/layout.tsx` |

## Commands

```bash
npm run dev
npm run build
npm start
```

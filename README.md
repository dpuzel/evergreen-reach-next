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
| Field Notes (add a `.md` file) | `src/content/notes/` |
| Front Porch Report (JSON) | `src/content/porch/` |
| Section layout | `src/components/*` |
| Colors & UI chrome | `src/app/globals.css` |
| SEO / fonts | `src/app/layout.tsx` |

### Adding a Field Note

Drop a markdown file in `src/content/notes/your-slug.md`:

```md
---
title: "A clear, useful title"
summary: "One-line hook for the index."
date: "2026-08-15"
topic: "Google listing"
---

Write in plain markdown. Headings, lists, quotes, and links all work.
```

Commit and push. The `/notes` index, homepage teaser, sitemap, and `/notes/rss.xml` pick it up automatically. Set `draft: true` in frontmatter to keep a note off the shelf.

### Front Porch Reports

Drop a JSON file in `src/content/porch/your-slug.json`. Individual reports are shareable at `/porch/your-slug` and stay out of the sitemap (`noindex`). Draft and print from `/porch/new`.

## Commands

```bash
npm run dev
npm run build
npm start
```

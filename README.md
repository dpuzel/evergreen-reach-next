# Evergreen Reach — Next.js

Premium dark-mode marketing site for small & rural businesses.

**Stack:** Next.js 16 · React 19 · Tailwind CSS 4 · TypeScript

## Live

| | |
|--|--|
| **Preview / project URL** | https://evergreen-reach-next.vercel.app |
| **GitHub** | https://github.com/dpuzel/evergreen-reach-next |
| **Vercel project** | `evergreen-reach-next` (team: Evergreen Reach’s projects) |
| **Git branch** | `main` → auto-deploys to Vercel |

> Production domain `evergreen-reach.com` still points at the older `evergreen-reach-website` project until you switch it.

## Workflow (this is the good stuff)

```bash
# 1. Edit locally
cd next
npm run dev          # http://localhost:3000

# 2. Commit & push → Vercel builds a preview (PR) or production (main)
git add .
git commit -m "your message"
git push origin main
```

- **Push to `main`** → production deployment for this Vercel project
- **Open a PR** → preview deployment URL (commented on the PR)

### Handy CLI (installed for this machine)

```bash
# Vercel CLI lives at ~/.local/bin/vercel
export PATH="$HOME/.local/bin:$PATH"

vercel whoami
vercel ls
vercel logs
vercel --prod   # optional manual production deploy from local
```

GitHub CLI is also at `~/.local/bin/gh` if you want `gh pr create`, etc. Run `gh auth login` once for git push from the terminal.

## Project structure

```
next/
├── public/assets/           # Logos (generated/fetched by write-assets)
├── scripts/write-assets.cjs # Ensures logo files exist before build
├── src/
│   ├── app/                 # layout, page, globals.css
│   ├── components/          # Navbar, Hero, Story, Services, …
│   └── lib/site.ts          # ★ Copy, pricing, contact — edit here first
└── package.json
```

## Commands

```bash
npm run dev      # local dev
npm run build    # production build
npm start        # serve production build
npm run lint
```

## Edit guide

| What | Where |
|------|--------|
| Pricing / services / contact | `src/lib/site.ts` |
| Section layout & copy blocks | `src/components/*` |
| Colors, glass, buttons | `src/app/globals.css` |
| SEO / fonts | `src/app/layout.tsx` |

## Domain cutover (when ready)

1. Vercel → `evergreen-reach-next` → **Domains** → add `evergreen-reach.com` + `www`
2. Confirm DNS (or transfer from the old project)
3. Optionally archive or pause `evergreen-reach-website`

## Notes

- Formspree form endpoint is in `site.formspree`
- GA id is in `site.gaId`
- Logos: local files preferred; build script can fetch from the live project URL if missing

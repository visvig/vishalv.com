# vishalv.com

Personal site for Vishal V. Built on top of Timothy Lin’s Tailwind Next.js Starter Blog and customized for long-form notes, hacks, health logs, and a bookshelf.

## Stack

- Next.js 15.2.6 (App Router) + React 19.0.1
- Contentlayer 2 + MDX for typed Markdown content
- Tailwind CSS 4 with a custom palette
- Pliny utilities (layouts, newsletter, kbar search, RSS)
- TypeScript + ESLint + Prettier + Husky

## Structure

| Path | Purpose |
| --- | --- |
| `app/` | Routes, layouts, API handlers. |
| `components/` | Shared UI pieces. |
| `layouts/` | Page/article layouts via Pliny. |
| `data/` | Markdown content + metadata. |
| `css/` | Tailwind + Prism styles. |
| `scripts/` | Post-build tasks (RSS, search index). |
| `public/` | Static assets and generated search.json. |

## Philosophy

- Keep writing portable (Markdown in git).
- Prioritize calm, legible layouts.
- Automate chores (RSS, search, tag counts) during `yarn build`.
- Add enhancements (theme switch, kbar, newsletter) without blocking core reading.

## Commands

```bash
yarn install
yarn dev      # http://localhost:3000
yarn build    # runs Contentlayer + postbuild (RSS/search)
yarn start
yarn lint
```

Environment variables (`.env.local` + hosting platform):

- `NEXT_UMAMI_ID` (optional) for analytics.
- `BUTTONDOWN_API_KEY` and `BUTTONDOWN_SECURITY_TOKEN` for newsletter signup via Buttondown. Set `siteMetadata.newsletter.provider = null` to hide it.

## Content

- Notes: `data/blog/*.md` → `/notes/[slug]`
- Hacks: `data/hacks/*.md` → `/hacks`
- Bookshelf: `data/bookshelf/*.md` → `/bookshelf` + `/bookshelf/[slug]`
- Health logs/routines: `data/health/**`
- Author profile: `data/authors/default.md`

Run `yarn dev` or `yarn build` after editing content so Contentlayer regenerates.

## Credits

Thanks to [Timothy Lin](https://github.com/timlrx) for the original MIT-licensed starter. This repo keeps his license notice and adds Vishal’s customizations.

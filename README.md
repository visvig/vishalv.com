# vishalv.com

Personal site and thinking log for Vishal V. It is built on top of Timothy Lin’s [tailwind-nextjs-starter-blog](https://github.com/timlrx/tailwind-nextjs-starter-blog) and heavily customized to cover long-form notes, hack logs, health tracking, and a bookshelf of reading notes.

## Stack

- **Next.js 15 (App Router) + React 19** for routing, streaming, and server components.
- **Contentlayer 2 + MDX** to turn Markdown in `data/**` into typed content with computed fields (slugs, excerpts, search metadata, etc.).
- **Tailwind CSS 4** with a custom palette defined in `css/tailwind.css` and typography/kbar plugins.
- **Pliny** utilities for content helpers, newsletter integration, layouts, and the local `kbar` search modal.
- **Umami analytics** (optional) and **Buttondown newsletter** via the `/api/newsletter` route.
- **TypeScript**, ESLint 9, Prettier, and Husky/lint-staged to keep the codebase tidy.

## What’s Different from Timothy Lin’s Template

- “Blog” is re-framed as **Notes** everywhere (URLs, navigation, sitemap, feeds).
- New Contentlayer document types for `Bookshelf`, `Hacks`, and `Health`, each with bespoke pages under `/bookshelf`, `/projects`, and `/health`.
- A **Bookshelf** grid plus detailed review pages, with automatic cover extraction and metadata chips.
- A **Health dashboard** that surfaces recent performance logs and MDX routines.
- Project cards rebranded as **Hacks** with custom imagery and ordering.
- Kbar search is enabled out of the box and regenerated during `postbuild`.
- RSS feeds are generated for Notes and every tag via `scripts/rss.mjs`.
- Tailwind theme tokens were rewritten to match the site’s warm palette and typography choices.

## Repository Layout

| Path | Purpose |
| --- | --- |
| `app/` | Next.js App Router routes (home, notes, bookshelf, health, projects, API handlers, SEO helpers). |
| `components/` | Shared UI: navigation, cards, MDX components, social icons, etc. |
| `layouts/` | Article/author layouts powered by Pliny. |
| `data/` | Markdown content (notes, hacks, bookshelf, health) and site-wide metadata. |
| `css/` | Tailwind 4 config + Prism styles. |
| `scripts/` | `postbuild` hook that generates RSS + search.json. |
| `public/` | Static assets, favicons, and generated search index. |

## Getting Started

1. **Install dependencies**
   ```bash
   yarn install
   ```
2. **Create environment variables** in `.env.local` (copy if needed):
   - `NEXT_UMAMI_ID` – optional, used if Umami analytics is enabled.
   - Buttondown newsletter keys (see Pliny docs): `BUTTONDOWN_API_KEY`, `BUTTONDOWN_SECURITY_TOKEN`, etc.
3. **Run the dev server**
   ```bash
   yarn dev
   ```
4. Visit `http://localhost:3000`.

## Content Authoring

- Notes live in `data/blog/*.md` and render at `/notes/[slug]`.
- Hacks/projects live in `data/hacks/*.md` and appear on `/projects`.
- Bookshelf entries reside in `data/bookshelf/*.md` and get individual pages at `/bookshelf/[slug]`.
- Health routines and performance logs live under `data/health/**`.
- Author profile is stored at `data/authors/default.md`.

Whenever you add or edit markdown, rerun `yarn build` (or `yarn dev`) so Contentlayer regenerates `.contentlayer`.

## Scripts

| Command | Description |
| --- | --- |
| `yarn dev` | Run Next.js in development with hot reloading. |
| `yarn build` | Compile the app and run the postbuild script (RSS + search index). |
| `yarn start` | Start the production server locally. |
| `yarn analyze` | Build with the Next.js bundle analyzer. |
| `yarn lint` | Lint and auto-fix code across `app`, `components`, `layouts`, and `scripts`. |

## Deployment Notes

- The site assumes deployment on a platform that supports Next.js 15 (e.g., Vercel). Make sure your environment variables and `BASE_PATH` are set before building.
- `postbuild` writes `public/feed.xml`, `public/search.json`, and per-tag feeds; keep those files in source control if you need deterministic outputs.

## Acknowledgements

Thanks to [Timothy Lin](https://github.com/timlrx) for releasing the original MIT-licensed starter that this project extends. This repo keeps his license notice and builds on his excellent work. Any additional styling, content types, and integrations listed above were implemented by Vishal V.

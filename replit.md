# RuSoft Shop

A Russian software e-commerce store for licensed digital products (Windows, Office, Autodesk, Adobe, antivirus), migrated from Next.js 15 to Vite + React in the pnpm monorepo.

## Run & Operate

- `pnpm --filter @workspace/rusoftshop run dev` — run the RuSoft Shop frontend
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- Frontend: React + Vite, Tailwind CSS v4 via `@tailwindcss/vite`
- Routing: `wouter` (replaced Next.js App Router)
- No backend — purely frontend static app

## Where things live

- `artifacts/rusoftshop/src/pages/` — all page components (home, catalog, catalog-category, product, cart, blog, contacts, faq, download, payment, return, reviews, wholesale, work, not-found)
- `artifacts/rusoftshop/src/components/` — Header, Footer, ProductCard
- `artifacts/rusoftshop/src/App.tsx` — root router using wouter `<Switch>/<Route>`

## Architecture decisions

- Migrated from Next.js App Router to wouter; all `next/link` → `<Link>` from wouter; all `next/image` → `<img>`; `useParams()` from wouter for dynamic routes
- All product/category data is hardcoded in each page component (no API, no DB)
- `'use client'` directives removed — not needed in Vite
- `useParams<{ slug: string }>()` pattern used for `/catalog/:slug` and `/product/:slug`
- App has a single registered artifact (`rusoftshop`) with `previewPath: /`

## Product

Russian software e-commerce store selling licensed digital keys for Windows, Office, Autodesk, Adobe, and antivirus software. Features product listings, category filtering, product detail pages with image galleries/tabs/reviews, cart, and informational pages.

## User preferences

_Populate as you build — explicit user instructions worth remembering across sessions._

## Gotchas

- `wouter` `useParams` must be typed: `useParams<{ slug: string }>()`
- The `next` package is installed but should not be imported — it was a migration artifact
- Image URLs all point to `rusoft.shop` CDN (external images served from the original site)

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details

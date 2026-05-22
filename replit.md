# Licenvo.com

Un e-commerce italiano di licenze software digitali (Windows, Office, Autodesk, Adobe, antivirus), migrato da Next.js 15 a Vite + React nel monorepo pnpm. Il brand è **Licenvo.com** (titolare: DIGITALSOFT DI MUNSHI SHIHAB).

## Run & Operate

- `pnpm --filter @workspace/rusoftshop run dev` — avvia il frontend Licenvo
- `pnpm run typecheck` — typecheck completo
- `pnpm run build` — typecheck + build

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- Frontend: React + Vite, Tailwind CSS v4 via `@tailwindcss/vite`
- Routing: `wouter` (sostituisce Next.js App Router)
- Shopify Storefront API: `@shopify/hydrogen-react` + fetch headless (GraphQL)
- No backend — app frontend statica

## Dove si trovano le cose

- `artifacts/rusoftshop/src/pages/` — tutte le pagine (home, catalog, catalog-category, product, cart, blog, contacts, faq, download, payment, return, reviews, wholesale, work, privacy, terms, not-found)
- `artifacts/rusoftshop/src/components/` — Header, Footer, ProductCard
- `artifacts/rusoftshop/src/App.tsx` — router wouter `<Switch>/<Route>`
- `artifacts/rusoftshop/src/lib/shopify.ts` — client Shopify Storefront API (getProduct, getProducts, getProductsByCollection, buildCheckoutUrl)

## Architettura

- Migrato da Next.js App Router a wouter; `next/link` → `<Link>` da wouter; `next/image` → `<img>`
- **Shopify headless**: prodotti caricati da `licenvo.myshopify.com` via Storefront API con fallback a dati statici
- Il bottone "Acquista ora" apre il checkout Shopify nativo
- Metafields Shopify supportati: `custom.caratteristiche`, `custom.requisiti_sistema`, `custom.piattaforme`, `custom.cosa_ricevi`, `custom.brand_logo`, `custom.faq`
- Dati statici di fallback hardcoded in ogni pagina prodotto
- `useParams<{ slug: string }>()` da wouter per route dinamiche

## Brand & Azienda

- **Brand**: Licenvo.com
- **Titolare**: DIGITALSOFT DI MUNSHI SHIHAB
- **Sede**: Via Aldo Pio Manuzio 24, 40132 Bologna (BO)
- **P.IVA**: 04358941203 · **CF**: SHHMSH04M02Z249U · **REA**: BO-588058
- **Email**: assistenza@licenvo.com
- **Tel**: +39 393 684 1051
- **PEC**: munshishihab@legalmail.it

## Variabili d'ambiente

- `VITE_SHOPIFY_STORE_DOMAIN` = `licenvo.myshopify.com` (env var shared)
- `VITE_SHOPIFY_STOREFRONT_TOKEN` = token Storefront API (secret)

## Lingue & Policy

- **Tutto il sito è in italiano**
- Policy conformi normativa europea: GDPR (Reg. UE 2016/679), Codice del Consumo (D.Lgs. 206/2005), Direttiva UE 2019/771
- Pagine: `/privacy` (Privacy Policy GDPR), `/terms` (Termini e Condizioni), `/return` (Rimborsi), `/payment` (Pagamento e Consegna)

## Preferenze utente

- Lingua: italiano
- Brand: Licenvo.com (non RuSoft)
- Prezzi in Euro (€)
- Policy europee standard

## Gotchas

- `wouter` `useParams` va tipizzato: `useParams<{ slug: string }>()`
- Il pacchetto `next` è installato ma non va importato — artifact di migrazione
- Il client Shopify usa `VITE_` prefix per essere accessibile lato client Vite
- Se Shopify non risponde, la product page usa i dati statici di fallback automaticamente

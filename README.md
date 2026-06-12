# MyPrimaryCareGuide.ca

MyPrimaryCareGuide.ca is a newcomer-first healthcare navigation site for Kingston, Ontario. It is a static React + Vite app focused on plain language, cautious health wording, honest trust signals, and easier access to local care pathways.

## What the site includes

- Task-first guidance for urgent care, primary care, coverage, medicines, after-visit steps, and allied/community care
- A searchable Kingston service directory with filters, permalinks, directions, source links, and verification notes
- Page-level trust metadata, visible sources, and clearer "needs recheck" language
- Accessibility improvements for keyboard navigation, focus handling, dialogs, printing, and mobile use
- Built-in translation: the full guide (UI and page content) in 33 languages served on-domain, plus ~50 more through Google Translate's website proxy, and urgent quick phrases in 20+ languages

## Translation model

Three tiers, by review level, all reachable from one language picker:

1. **Reviewed in-app languages** (`en`, `fr`, `es`, `ar`, `zh`): UI strings live in `src/i18n/strings/<lang>.ts`; page content lives in `src/data/cities/kingston/content.<lang>.ts`. Translations are machine-assisted and reviewed; English is the reference version. RTL languages switch the whole document direction.
2. **Generated in-app languages** (28 more, from Amharic to Yoruba): one file per language in `src/i18n/generated/<code>.ts` exporting `strings` and `pages`, registered in `src/i18n/generated/registry.ts`, lazy-loaded as separate chunks, labelled "automatic translation" in the UI. Same structural validation as reviewed languages.
3. **Long-tail automatic translation**: any remaining language opens the current page through `translate.goog` (Google Translate's website proxy). Free, no API key, clearly disclaimed as unreviewed.

Urgent quick phrases ("I need urgent medical help" / "I need an interpreter, please") appear natively in 20+ languages in the language dialog.

Directory listings (names, addresses, phone numbers, hours) intentionally stay in English in every language so they match official sources exactly.

## Tech stack

- React 19
- TypeScript
- Vite
- Tailwind CSS
- React Router
- Static data and typed content files

## Run locally

```bash
npm install
npm run dev
```

The dev server runs on Vite's default local address. For a production-like local check:

```bash
npm run build
npm run preview
```

## Validation commands

```bash
npm run typecheck
npm run validate:content
npm run build
npm run validate
```

`npm run validate:content` checks content schema consistency, internal routes, anchor targets, query params, and service record requirements.

## Project structure

- `src/pages/`: route-level pages, including the directory and service detail view
- `src/components/`: shared UI, trust, layout, feedback, and accessibility components
- `src/i18n/`: language context, UI strings per language, quick phrases, and the long-tail Google Translate language list
- `src/data/cities/kingston/content.ts`: typed English page content for Kingston (reference version)
- `src/data/cities/kingston/content.{fr,es,ar,zh}.ts`: translated page content, lazy-loaded per language
- `src/data/cities/kingston/services.json`: raw local service records (English only, by design)
- `src/data/cities/kingston/serviceEnhancements.ts`: normalized category, eligibility, access, and trust metadata layered onto raw services
- `src/lib/`: directory search/filter logic, formatting, analytics, trust helpers, and feedback helpers
- `scripts/validate-content.ts`: content and link validation, including structural parity checks for every translated content file

## Content model

Page content is stored as typed `PageContent` objects. Supported section types are:

- `default`
- `checklist`
- `steps`
- `callout`
- `grid`
- `comparison`
- `table`
- `faq`

Service records are normalized into a shared schema with:

- canonical category slug
- neighbourhood/location context
- access modes and audience tags
- payment model
- eligibility and access notes
- verification status and review date

## Trust and verification

This project does not claim that every listing is fully verified at all times. The UI distinguishes between:

- `verified`
- `partially-verified`
- `community-reported`
- `needs-recheck`

Avoid adding unsupported local claims. If a local detail cannot be verified from an official source, remove it, soften it into general guidance, or mark it for recheck.

## Deployment

The site is built for static hosting and now includes Vercel routing support in `vercel.json` for SPA deep links such as `/faq#scenarios` and `/local-services/health811`.

See:

- `DEPLOYMENT.md` for Vercel deployment
- `DOMAIN.md` for `.ca` domain purchase and DNS connection guidance
- `MAINTENANCE.md` for ongoing review work
- `AGENTS.md` for maintainer workflow expectations

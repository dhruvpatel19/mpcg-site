# MyPrimaryCareGuide.ca

MyPrimaryCareGuide.ca is a newcomer-first healthcare navigation site for Kingston, Ontario. It is a static React + Vite app focused on plain language, cautious health wording, honest trust signals, and easier access to local care pathways.

## What the site includes

- Task-first guidance for urgent care, primary care, coverage, medicines, after-visit steps, and allied/community care
- A searchable Kingston service directory with filters, permalinks, directions, source links, and verification notes
- Page-level trust metadata, visible sources, and clearer "needs recheck" language
- Accessibility improvements for keyboard navigation, focus handling, dialogs, printing, and mobile use

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
- `src/data/cities/kingston/content.ts`: typed page content for Kingston
- `src/data/cities/kingston/services.json`: raw local service records
- `src/data/cities/kingston/serviceEnhancements.ts`: normalized category, eligibility, access, and trust metadata layered onto raw services
- `src/lib/`: directory search/filter logic, formatting, analytics, trust helpers, and feedback helpers
- `scripts/validate-content.ts`: content and link validation script

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

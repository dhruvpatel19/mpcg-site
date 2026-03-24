# AGENTS.md

## Run the app

```bash
npm install
npm run dev
```

Preview the production build locally:

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

## Supported content schema

Page content lives in `src/data/cities/kingston/content.ts` and must use the typed `PageContent` schema from `src/types.ts`.

Allowed `PageSection.type` values:

- `default`
- `checklist`
- `steps`
- `callout`
- `grid`
- `comparison`
- `table`
- `faq`

Raw service records live in `src/data/cities/kingston/services.json`.
Normalized service metadata lives in `src/data/cities/kingston/serviceEnhancements.ts`.

## Slug and query-param conventions

Page routes use `/:pageId`.
Service detail routes use `/local-services/:serviceId`.

Canonical service category slugs:

- `emergency-urgent`
- `primary-care`
- `community-health`
- `mental-health`
- `public-health`
- `labs-imaging`
- `pharmacies`
- `allied-community`
- `navigation-support`

Allowed directory query keys:

- `q`
- `category`
- `sort`
- `view`
- `audience`
- `access`
- `level`
- `payment`
- `location`

Values must match the config in `src/config/site.ts` and `src/lib/directory.ts`. The content validator enforces this.

## What "done" means here

- newcomer-first wording
- medically cautious language
- honest trust and verification labels
- keyboard and mobile usability checked
- no dead links or fake live features
- `npm run typecheck`, `npm run validate:content`, and `npm run build` pass
- deep links and service permalinks still work

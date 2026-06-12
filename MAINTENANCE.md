# Maintenance Guide

This site is static, but the content is operationally sensitive. Service access rules, walk-in availability, hours, and local navigation details can change quickly.

## Update priorities

Most likely to go stale:

- walk-in or urgent access notes
- hours and intake rules
- coverage and program eligibility changes
- public health clinic pages and booking flows
- community mental health intake details

## Where to edit

- Page content (English, reference version): `src/data/cities/kingston/content.ts`
- Translated page content: `src/data/cities/kingston/content.{fr,es,ar,zh}.ts`
- UI strings: `src/i18n/strings/{en,fr,es,ar,zh}.ts` (navigation labels live here too)
- Urgent quick phrases: `src/i18n/phrases.ts`
- Long-tail Google Translate language list: `src/i18n/moreLanguages.ts`
- Raw services: `src/data/cities/kingston/services.json`
- Normalized category/access/trust metadata: `src/data/cities/kingston/serviceEnhancements.ts`
- Site-wide filters and category config: `src/config/site.ts`

## Translation upkeep

- English is the reference version. When you change English content or UI strings, make the same change in the four translated files (or regenerate that page's translation) in the same sitting.
- `npm run validate:content` enforces that every translated content file keeps the same pages, section ids, section types, and valid links as English, so a forgotten or structurally broken translation fails validation.
- TypeScript enforces that every UI strings file has every key.
- Directory data stays English on purpose; do not translate `services.json`.
- Keep medical caution identical across languages: a translation must never sound more certain or more reassuring than the English.

## Review cadence

### Monthly

- Review feedback reports from the UI
- Check high-risk services marked `needs-recheck` or `partially-verified`
- Confirm urgent care and emergency guidance still matches official hospital pages
- Check whether high-traffic searches are producing weak or zero results

### Quarterly

- Review coverage content against Ontario and Canada official sources
- Review student and newcomer pathways
- Review the FAQ scenario library for common missing questions
- Check source links still resolve

## Required verification workflow

1. Use official institutional or government sources when available
2. If a local detail cannot be verified, remove it, soften it, or mark it for recheck
3. Update review dates and trust notes when you confirm a service
4. Keep unsupported "live" or "manually verified" claims out of the UI

## Validation before publishing

Run:

```bash
npm run validate
```

Minimum manual spot checks:

- `/about#privacy`
- `/faq#scenarios`
- `/local-services?category=labs-imaging`
- one service permalink such as `/local-services/health811`
- print view on a content page
- language dialog open, trap, Escape close, and focus return

## Analytics and feedback

- The current analytics implementation is privacy-conscious and stays in the browser via `localStorage`
- It tracks aggregate local signals such as page views, service views, search terms, zero-result searches, and report issue types
- Feedback currently opens a pre-filled email draft with page or service context; do not request personal health information

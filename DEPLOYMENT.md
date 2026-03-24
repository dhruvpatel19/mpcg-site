# Deployment Guide

This app is ready for static deployment on Vercel.

## Why Vercel works for this project

- The app is a static Vite build with no server runtime
- `npm run build` outputs a `dist/` folder
- No runtime environment variables are required
- `vercel.json` includes an SPA rewrite so deep links keep working on refresh

## Recommended deployment path

### 1. Put the repo in GitHub

Create a GitHub repository and push this codebase to it. Vercel's simplest workflow is Git-based deployment so every push can create a preview or production deployment.

### 2. Import the repo into Vercel

In Vercel:

1. Sign in and choose `Add New...` -> `Project`
2. Import the GitHub repository
3. Let Vercel detect the framework

Recommended settings:

- Framework preset: `Vite`
- Build command: `npm run build`
- Output directory: `dist`
- Install command: `npm install`

No environment variables are required for the current site.

### 3. Confirm routing support

Keep `vercel.json` in the repo:

```json
{
  "$schema": "https://openapi.vercel.sh/vercel.json",
  "framework": "vite",
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

That rewrite is important for:

- `/local-services/health811`
- page routes like `/need-help-now`
- direct reloads on deep links with hash anchors

### 4. Production branch

Set the production branch in Vercel to the branch you want to publish from, usually `main`.

### 5. Pre-deploy checks

Run before your first public deployment:

```bash
npm run validate
```

### 6. Post-deploy checks

After Vercel finishes the first deployment, verify:

- home page loads
- `/local-services?category=labs-imaging` filters correctly
- `/local-services/health811` loads directly
- `/about#privacy` scrolls to the privacy section
- print view hides navigation and decorative UI

## Rollout and maintenance

- Use Vercel preview deployments for content and UX review before production
- Keep the domain attached only to the production branch unless you intentionally want branch subdomains
- Re-run `npm run validate` after content changes

# Domain Guide

This project is designed to be published at `myprimarycareguide.ca` on Vercel.

## Before you buy a `.ca` domain

`.ca` domains are governed by CIRA and require an eligible Canadian presence category. If you do not meet the Canadian Presence Requirements, you should not register the domain yet.

## Option A: Buy the domain through Vercel

Use this when the domain is still available and you want Vercel to manage the purchase and DNS.

1. Create the Vercel project first
2. In Vercel, open the project
3. Go to `Settings` -> `Domains`
4. Search for `myprimarycareguide.ca`
5. If available, purchase it there and complete the registrant information
6. Finish any required verification steps

Notes:

- Vercel's supported domains list includes `.ca` for purchase
- Vercel currently shows `.ca` as not transfer-supported, so buying new is different from transferring an existing `.ca`
- Vercel also marks `.ca` as not supporting its WHOIS privacy option, so confirm registrar and registry privacy expectations before purchase
- CIRA separately notes that individual `.ca` registrant contact information is not displayed in the `.ca` WHOIS

## Option B: Buy the domain from a registrar, then connect it to Vercel

Use this when:

- you already own the domain
- you prefer a Canadian registrar
- the domain is not available in Vercel's checkout flow

Common approach:

1. Register `myprimarycareguide.ca` with your registrar
2. Create the Vercel project
3. In Vercel, open `Settings` -> `Domains`
4. Add:
   - `myprimarycareguide.ca`
   - `www.myprimarycareguide.ca`
5. Follow Vercel's DNS instructions

Vercel will usually offer one of two connection methods:

- Vercel nameservers
  - change the domain's nameservers at the registrar to Vercel's nameservers
  - manage DNS from Vercel after that
- Third-party DNS
  - keep DNS at the registrar
  - add the A, CNAME, and TXT records Vercel asks for

## Recommended domain setup

- Use `myprimarycareguide.ca` as the primary public domain
- Also add `www.myprimarycareguide.ca`
- Redirect one version to the other so there is only one canonical public URL
- Keep the site canonical URL set to `https://myprimarycareguide.ca`

## How to connect everything end to end

### If you buy through Vercel

1. Push the repo to GitHub
2. Import the repo into Vercel and deploy
3. Buy `myprimarycareguide.ca` from the project's `Settings` -> `Domains`
4. Assign the domain to the production project
5. Add `www.myprimarycareguide.ca`
6. Configure the redirect so one hostname is canonical
7. Wait for SSL and DNS to finish provisioning
8. Open the live domain and test deep links

### If you buy through another registrar

1. Push the repo to GitHub
2. Import the repo into Vercel and deploy
3. Buy the `.ca` domain from your registrar
4. In Vercel `Settings` -> `Domains`, add the apex and `www` domains
5. Copy the DNS records Vercel gives you
6. Add those records at the registrar
7. Wait for verification and certificate issuance
8. Set the canonical hostname redirect
9. Open the live domain and test deep links

## Public launch checklist

- domain resolves to Vercel
- HTTPS certificate is active
- `myprimarycareguide.ca` and `www.myprimarycareguide.ca` do not split traffic
- Vercel production deployment is attached to the correct branch
- `/local-services/health811` loads directly on the public domain
- `/about#privacy` and `/faq#scenarios` work after a full page refresh

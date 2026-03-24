# Unverified and Recheck Items

This file tracks local items that should not be presented as fully verified.

## Current review flags

- Walk-in availability and same-day intake details can change quickly and should be treated cautiously
- Any service marked `needs-recheck` in the UI should be prioritized for local confirmation
- Community eligibility details should only stay in the directory if they can be tied to an official source or direct service-owner guidance

## Known recurring risk areas

- clinic hours that change seasonally or during staffing shortages
- whether registration closes early on high-volume days
- whether a program is currently accepting new patients
- whether a service is truly walk-in versus same-day callback or appointment-only

## Before moving a service to `verified`

- confirm the official source URL still works
- confirm the phone number and address
- confirm the access model shown in the card
- update the `last_verified` date in ISO format
- update any trust note in `serviceEnhancements.ts`

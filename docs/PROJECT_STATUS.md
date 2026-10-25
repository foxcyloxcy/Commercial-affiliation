# Project status and next-agent handoff
Last reviewed: 2026-10-25
Status: scaffold committed; not validated/deployed

## What we are building
Philippines-first affiliate commerce discovery website (working brand: SulitFind). Rank genuinely affordable, trending, useful products across marketplaces, with product summaries, comparable merchant offers and user-initiated affiliate referrals. It is NOT a seller, marketplace checkout, or inventory fulfillment business.

## V1 scope
- Mobile-first Next.js storefront, category pages, search, canonical product and variant pages
- Merchant offers, verifiable observed prices and timestamps; do not claim historical discounts without data
- Transparent weighted ranking: value 35%, trends 25%, quality 20%, affordability 15%, merchant reliability 5%
- Approved affiliate URLs, click analytics, reporting reconciliation
- Editorial admin review, ingestion and source permissions; no unauthorized scraping

## What exists on main (code is unverified)
- Next.js/TypeScript boilerplate, demo storefront and example non-live prices
- Pure ranking algorithm and Vitest unit test
- API health route; outbound redirect intentionally disabled (HTTP 503)
- PostgreSQL schema migration: `supabase/migrations/20261025000000_initial_catalog.sql`
- GitHub CI, project agent instructions and local skill files
- `docs/DOMAIN.md`, `docs/DATABASE_NAMING.md`, `docs/THIRD_PARTY_SKILLS.md`

## What is not completed / cannot be claimed
- Build, tests, migration dry-run, or deployed site have NOT been validated by a running developer environment.
- No hosted Supabase project linked; SQL migration NOT applied.
- No affiliate program approvals, live feeds, authorized images, verified prices, or commission conversion integration.
- No public purchase redirects (intentional safety gate), no actual ranking market signals.
- External Matt Pocock and Supabase skills not vendored; Ponytail source not identified.
- No Vercel site created for this repository.

## Operational platform
- Verified through connected Vercel account on 2026-10-25: one visible project, `document-data-extractor`. This repo is a separate deployment target.
- Hobby project count limit is 200 and Pro unlimited (see https://vercel.com/docs/limits). Commercial affiliate operation must use paid Pro/Enterprise; verify account plan before deploying.
- Do not modify the document extractor's Vercel configuration while setting up this project.

## Next steps in order
1. Run `npm install`, `npm run typecheck`, `npm test`, `npm run build`; fix failures and commit the lockfile. Current CI uses npm install instead of npm ci until lockfile exists.
2. Review SQL migration with Supabase CLI against fresh local dev; validate FK/indexes, RLS, constraints and least-privilege access. Do not run against production without authorization.
3. Review third-party skill sources, install selected Matt Pocock and Supabase skills only after source review. Require an exact Ponytail GitHub source.
4. Build secure database-backed published catalog and editorial dashboard. Add integration tests.
5. Validate marketplace applications, usage permissions and approved sources; create source permission registry.
6. Implement price evidence + freshness, variants, scoring confidence, and source-aware rankings.
7. Implement approved affiliate link allowlist, click redirect, attribution and reconciliation tests.
8. Check Vercel plan, create separate project linked to this repo, configure env and deploy preview. Only promote after green checks.
9. Add analytics, SEO, privacy and affiliate disclosures; monitor broken/stale offers.

## Definition of done for initial MVP
Build and tests green; database migration repeatably validated; no unapproved data; product cards visibly indicate evidence freshness; at least one approved program linked; outbound click attribution functional; separate Vercel site deployed; operational runbook documented.

## Agent instructions
Before touching code read `AGENTS.md`, `docs/DOMAIN.md`, `docs/DATABASE_NAMING.md`, and skills under `.agents/skills/`. Do not mark tasks complete without concrete command outputs or provider confirmation. Keep this file up to date with every substantial milestone, including date, PR/commit, environment, test result, decision and next blocker.

# Commercial Affiliation

Philippines-first affiliate shopping discovery MVP, built with Next.js 15, TypeScript and a normalized Supabase/PostgreSQL schema.

## Quick start

```bash
npm install
cp .env.example .env.local
npm run dev
npm run typecheck
npm test
npm run build
```

Demo products and prices are **illustrative only**. Outbound affiliate redirects fail closed until approved programs, allowlisted URLs and proper server-side tracking are implemented.

## Structure
- `src/app` SEO-focused Next.js App Router site and API endpoints.
- `src/lib` catalog demo and ranking rules.
- `supabase/migrations` database schema (not applied to a hosted database).
- `docs/DOMAIN.md` domain language; `docs/DATABASE_NAMING.md` database naming conventions.
- `.agents/skills` locally maintained project agent skills; `docs/THIRD_PARTY_SKILLS.md` reviewed external sources and install instructions.

## Deployment
Connect a Vercel project and supply server-side Supabase credentials only after setting up a database, RLS policies and approved catalog sources. No live marketplace integration exists yet.

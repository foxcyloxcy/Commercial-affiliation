# Commercial Affiliation agent contract

## Required reading for every agent / developer
1. `docs/PROJECT_STATUS.md` — live description, built/not built, next milestones and blockers. Keep it updated with verified evidence.
2. `docs/DOMAIN.md` — canonical product, variant, offer, merchant, and attribution vocabulary.
3. `docs/DATABASE_NAMING.md` — PostgreSQL naming, FK, amount and timestamp rules.
4. `.agents/skills/database-schema-governance/SKILL.md` when changing DB structures.
5. `.agents/skills/affiliate-integrity/SKILL.md` when touching product data, prices or affiliate links.
6. `.agents/skills/engineering-quality/SKILL.md` when editing or reviewing application code.
7. `docs/THIRD_PARTY_SKILLS.md` before installing any external agent skills.

## Engineering constraints
Treat product, variant, merchant, offer, price observation, affiliate link and conversion as separate concepts. Require strict TypeScript, server-side secrets, migrations, tests, and least-privilege RLS. Never scrape without authorization, invent market statistics or live prices, silently redirect, or manipulate attribution. Rankings must not depend on affiliate commission. Prefer independently testable vertical slices. Run typecheck, tests and build and record actual outcomes. Never claim a migration or deploy is complete without proof. Do not apply production migrations without explicit permission.

## Continuity requirement
After each milestone, update `docs/PROJECT_STATUS.md`: date; what changed; files/PR/commit; tests or rollout actually verified; known limitations; and the single next actionable step. Reconcile the status with current code first. Do not silently treat plans as shipped functionality.

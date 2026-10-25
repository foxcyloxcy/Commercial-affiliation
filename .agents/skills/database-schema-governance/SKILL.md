---
name: database-schema-governance
description: Enforce PostgreSQL and Supabase table and column naming, data types, indexing, migration safety and row-level security whenever working on SQL or schema changes.
---
# Database schema governance
Read `docs/DATABASE_NAMING.md`, `docs/DOMAIN.md`, and existing migrations. Identify canonical entities before adding tables. Prefer plural snake_case tables and explicit `<entity>_id` FKs, immutable timestamped price evidence, minor-unit money, UTC timestamptz, RLS enabled on all public-schema tables, minimal exposure and idempotent seed fixtures. Add constraints and supporting indexes. Never deploy migrations without explicit approval. Verify with database lint and migration dry-run when a configured development database exists.

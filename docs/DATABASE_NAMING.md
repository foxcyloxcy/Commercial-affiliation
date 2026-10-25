# Database naming standard (PostgreSQL / Supabase)

- Table names: plural `snake_case`, e.g. `product_variants`, `price_observations`. Avoid ambiguous terms (`data`, `item`, `type`).
- Columns: `snake_case`; primary keys `id` UUID; foreign keys `<singular_entity>_id`, e.g. `product_id`. Never use `user` or reserved SQL keywords.
- Time: `created_at`, `updated_at`, `observed_at`, `expires_at`, `occurred_at`, all `timestamptz` UTC instants.
- Money: explicit `<meaning>_amount_minor` BIGINT and `currency_code` CHAR(3), never floating point. Use `price_amount_minor`, not `price` when ambiguous.
- Booleans: `is_` / `has_` prefixes. Statuses constrained with CHECK/enum. Counts end `_count`; score fields end `_score`.
- Uniqueness and FK indexes must be intentionally specified; FK constraints use names `<table>_<column>_fkey` (Postgres default is fine).
- Never rename migrations once applied; make forward-only additive migrations with clear timestamps. Never expose sensitive data via anon-readable tables. Document all public read policies.

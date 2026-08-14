-- KlassenCloud V10
-- The app stores its complete application state in Supabase Postgres.
-- Keep this table private: the Node.js server accesses it with the service-role key.
create table if not exists public.app_state (
  id integer primary key check (id = 1),
  state jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now()
);

-- Never expose app_state through the browser/client role.
alter table public.app_state enable row level security;

-- Optional: deny client access explicitly. The service-role key used by the Render server bypasses RLS.
revoke all on table public.app_state from anon, authenticated;

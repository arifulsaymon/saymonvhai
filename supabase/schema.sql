create table if not exists public.support_requests(id uuid primary key default gen_random_uuid(),platform text not null,email text not null,issue text not null,status text not null default 'new',created_at timestamptz not null default now());
alter table public.support_requests enable row level security;
create policy "allow anonymous support submissions" on public.support_requests for insert to anon,authenticated with check(length(email) between 5 and 320 and length(issue) between 5 and 4000 and platform in ('Google','Microsoft','Discord','Facebook','Instagram','X'));
-- No SELECT policy for anon/authenticated. Dashboard uses the server-only service role and must be protected with Supabase Auth before production.

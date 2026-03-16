alter table public.profiles enable row level security;

drop policy if exists "profiles_select_own" on public.profiles;
create policy "profiles_select_own"
on public.profiles
for select
using (auth.uid() = id);

drop policy if exists "profiles_insert_own" on public.profiles;
create policy "profiles_insert_own"
on public.profiles
for insert
with check (auth.uid() = id);

drop policy if exists "profiles_update_own" on public.profiles;
create policy "profiles_update_own"
on public.profiles
for update
using (auth.uid() = id)
with check (auth.uid() = id);

alter table public.courses
add column if not exists slug text;

update public.courses
set slug = lower(regexp_replace(title, '[^a-zA-Z0-9]+', '-', 'g'))
where slug is null or slug = '';

alter table public.courses
alter column slug set not null;

create unique index if not exists courses_slug_key on public.courses(slug);

alter table public.courses enable row level security;

drop policy if exists "courses_select_all" on public.courses;
create policy "courses_select_all"
on public.courses
for select
using (true);

drop policy if exists "courses_insert_all" on public.courses;
create policy "courses_insert_all"
on public.courses
for insert
with check (true);
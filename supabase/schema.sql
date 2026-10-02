-- Mandate: схема облака. Вставь целиком в Supabase -> SQL Editor -> Run.
-- Все таблицы закрыты правилами доступа (RLS): пользователь видит только свои строки.

-- документы: state (прогресс ученика), jobs, results, personal
create table if not exists public.kv (
  user_id uuid not null default auth.uid() references auth.users on delete cascade,
  key text not null,
  value jsonb not null,
  updated_at timestamptz not null default now(),
  primary key (user_id, key)
);

-- очередь запросов к тренеру (план подготовки, отчёт по компании)
create table if not exists public.requests (
  id text primary key,
  user_id uuid not null default auth.uid() references auth.users on delete cascade,
  type text not null check (type in ('prep', 'report')),
  payload jsonb not null,
  status text not null default 'queued' check (status in ('queued', 'processing', 'done', 'error')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- журнал событий для анализа (ответы, время, разделы)
create table if not exists public.events (
  id bigint generated always as identity primary key,
  user_id uuid not null default auth.uid() references auth.users on delete cascade,
  ts timestamptz not null,
  sid text,
  type text not null,
  data jsonb
);
create index if not exists events_user_ts on public.events (user_id, ts);

alter table public.kv enable row level security;
alter table public.requests enable row level security;
alter table public.events enable row level security;

drop policy if exists own_kv on public.kv;
create policy own_kv on public.kv for all to authenticated using (user_id = auth.uid()) with check (user_id = auth.uid());
drop policy if exists own_requests on public.requests;
create policy own_requests on public.requests for all to authenticated using (user_id = auth.uid()) with check (user_id = auth.uid());
drop policy if exists own_events on public.events;
create policy own_events on public.events for all to authenticated using (user_id = auth.uid()) with check (user_id = auth.uid());

-- закрытое хранилище для PDF-отчётов: файл лежит в папке <id пользователя>/
insert into storage.buckets (id, name, public) values ('reports', 'reports', false) on conflict (id) do nothing;
drop policy if exists own_reports_read on storage.objects;
create policy own_reports_read on storage.objects for select to authenticated
  using (bucket_id = 'reports' and (storage.foldername(name))[1] = auth.uid()::text);

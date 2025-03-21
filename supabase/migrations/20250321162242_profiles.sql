create schema if not exists sso;

create type sso.profile_visibility as enum('public', 'private');

create table if not exists sso.profiles (
  id uuid references auth.users on delete cascade not null primary key,
  username text unique,
  full_name text,
  avatar_url text,
  visibility sso.profile_visibility default 'public' not null,
  created_at timestamp with time zone default (now() at time zone 'utc'),
  updated_at timestamp with time zone default (now() at time zone 'utc')
);

alter table sso.profiles enable row level security;

create policy "Profiles are viewable by the owner." on sso.profiles for
select
  using (
    (
      select
        auth.uid ()
    ) = id
  );

create policy "Profiles are updatable by the owner." on sso.profiles
for update
  using (
    (
      select
        auth.uid ()
    ) = id
  );

create policy "Profiles are insertable by the owner." on sso.profiles for insert
with
  check (
    (
      select
        auth.uid ()
    ) = id
  );

create policy "Public profiles are viewable by everyone." on sso.profiles for
select
  using (visibility = 'public');

create function sso.create_profile () returns trigger
set
  search_path = '' as $$
begin
    insert into sso.profiles (id, full_name, avatar_url)
    values (new.id, new.raw_user_meta_data->>'full_name', new.raw_user_meta_data->>'avatar_url');
    return new;
end;
$$ language plpgsql security definer;

create trigger on_auth_user_created
after insert on auth.users for each row
execute procedure sso.create_profile ();
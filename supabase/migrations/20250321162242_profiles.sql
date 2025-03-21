create schema if not exists account;

create type account.profile_visibility as enum('public', 'private');

create table if not exists account.profiles (
  id uuid references auth.users on delete cascade not null primary key,
  username text unique,
  full_name text,
  avatar_url text,
  visibility account.profile_visibility default 'public' not null,
  created_at timestamp with time zone default (now() at time zone 'utc'),
  updated_at timestamp with time zone default (now() at time zone 'utc')
);

alter table account.profiles enable row level security;

create policy "Profiles are viewable by the owner." on account.profiles for
select
  using (
    (
      select
        auth.uid ()
    ) = id
  );

create policy "Profiles are updatable by the owner." on account.profiles
for update
  using (
    (
      select
        auth.uid ()
    ) = id
  );

create policy "Profiles are insertable by the owner." on account.profiles for insert
with
  check (
    (
      select
        auth.uid ()
    ) = id
  );

create policy "Public profiles are viewable by everyone." on account.profiles for
select
  using (visibility = 'public');

create function account.create_profile () returns trigger
set
  search_path = '' as $$
begin
    insert into account.profiles (id, full_name, avatar_url)
    values (new.id, new.raw_user_meta_data->>'full_name', new.raw_user_meta_data->>'avatar_url');
    return new;
end;
$$ language plpgsql security definer;

create trigger on_auth_user_created
after insert on auth.users for each row
execute procedure account.create_profile ();
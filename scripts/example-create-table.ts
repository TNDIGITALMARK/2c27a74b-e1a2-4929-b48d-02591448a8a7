/**
 * Example: Create Database Table
 *
 * This script shows how to create a database table with multi-tenant support.
 * Copy and modify this template for your own tables.
 *
 * Run with: npx tsx scripts/example-create-table.ts
 */

// Step 1: Define your SQL migration
const createYourTableSQL = `
-- ============================================
-- Migration: Create your_table_name
-- Purpose: Describe what this table stores
-- ============================================

-- Create table with required multi-tenant fields
create table if not exists public.your_table_name (
  id uuid primary key default uuid_generate_v4(),
  tenantid text not null,               -- Required for multi-tenant isolation
  projectid uuid not null,              -- Required for project isolation

  -- Add your custom columns here
  name text not null,
  description text,
  status text default 'active',

  -- Standard timestamp fields
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- Add foreign key constraints (REQUIRED)
alter table public.your_table_name
  add constraint fk_tenant
    foreign key (tenantid)
    references public.tenants(id)
    on delete cascade;

alter table public.your_table_name
  add constraint fk_project
    foreign key (projectid)
    references public.projects(id)
    on delete cascade;

-- Enable Row Level Security (REQUIRED)
alter table public.your_table_name enable row level security;

-- RLS Policies (REQUIRED - create separate policies for each operation)

-- SELECT policy for anonymous users
create policy "anon_select_your_table"
  on public.your_table_name
  for select
  to anon
  using (
    tenantid = (auth.jwt() ->> 'tenant_id')::text
    and projectid = (auth.jwt() ->> 'project_id')::uuid
  );

-- SELECT policy for authenticated users
create policy "auth_select_your_table"
  on public.your_table_name
  for select
  to authenticated
  using (
    tenantid = (auth.jwt() ->> 'tenant_id')::text
    and projectid = (auth.jwt() ->> 'project_id')::uuid
  );

-- INSERT policy for authenticated users
create policy "auth_insert_your_table"
  on public.your_table_name
  for insert
  to authenticated
  with check (
    tenantid = (auth.jwt() ->> 'tenant_id')::text
    and projectid = (auth.jwt() ->> 'project_id')::uuid
  );

-- UPDATE policy for authenticated users
create policy "auth_update_your_table"
  on public.your_table_name
  for update
  to authenticated
  using (
    tenantid = (auth.jwt() ->> 'tenant_id')::text
    and projectid = (auth.jwt() ->> 'project_id')::uuid
  )
  with check (
    tenantid = (auth.jwt() ->> 'tenant_id')::text
    and projectid = (auth.jwt() ->> 'project_id')::uuid
  );

-- DELETE policy for authenticated users
create policy "auth_delete_your_table"
  on public.your_table_name
  for delete
  to authenticated
  using (
    tenantid = (auth.jwt() ->> 'tenant_id')::text
    and projectid = (auth.jwt() ->> 'project_id')::uuid
  );

-- Create indexes for performance
create index if not exists idx_your_table_tenant_project
  on public.your_table_name(tenantid, projectid);

create index if not exists idx_your_table_status
  on public.your_table_name(status);

-- Add table and column comments
comment on table public.your_table_name is 'Describe what this table stores';
comment on column public.your_table_name.tenantid is 'FK to tenants.id for tenant isolation';
comment on column public.your_table_name.projectid is 'FK to projects.id for project isolation';

-- Create updated_at trigger
create or replace function public.update_updated_at_column()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

drop trigger if exists update_your_table_updated_at on public.your_table_name;
create trigger update_your_table_updated_at
  before update on public.your_table_name
  for each row
  execute function public.update_updated_at_column();
`;

// Step 2: Execute the migration
async function createTable() {
  console.log('🚀 Creating database table...\n');

  try {
    const response = await fetch('http://localhost:3006/api/supabase/migrations/execute', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: 'create_your_table_name',  // Change this to your table name
        sql: createYourTableSQL,
        autoApply: true,
        skipValidation: false
      })
    });

    const result = await response.json();

    if (result.success) {
      console.log('✅ Migration successful!');
      console.log('   File:', result.fileName);
      console.log('\n🎉 Your table is ready to use!');
      console.log('\nNext steps:');
      console.log('   1. Define TypeScript types in src/lib/supabase/types.ts');
      console.log('   2. Create query functions in src/lib/supabase/queries.ts');
      console.log('   3. Import and use: import { supabase } from "@/lib/supabase"');
      console.log('   4. Query your data: supabase.from("your_table_name").select("*")');
    } else {
      console.error('❌ Migration failed:', result.error);

      if (result.validation && !result.validation.passed) {
        console.error('\nValidation errors:');
        result.validation.errors?.forEach((err: string) => console.error('  -', err));
      }
    }
  } catch (error: any) {
    console.error('❌ Error:', error.message);
    console.error('\nMake sure:');
    console.error('   - Migration API is running on port 3006');
    console.error('   - Database credentials are correct');
  }
}

// Uncomment to run:
// createTable();

console.log('📝 Example Migration Script');
console.log('');
console.log('This is a template for creating database tables.');
console.log('');
console.log('To use:');
console.log('   1. Copy this file and rename it (e.g., create-users-table.ts)');
console.log('   2. Modify the SQL to match your table structure');
console.log('   3. Update the table name in the createTable() function');
console.log('   4. Uncomment the createTable() call at the bottom');
console.log('   5. Run: npx tsx scripts/your-script-name.ts');
console.log('');
console.log('See DATABASE.md for complete documentation.');

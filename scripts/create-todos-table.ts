/**
 * Database Migration Script: Create Todos Table
 *
 * This script demonstrates how to create a database table with full multi-tenant support.
 * Run with: npx tsx scripts/create-todos-table.ts
 */

const createTodoTableSQL = `
-- ============================================
-- Migration: Create todos table
-- Purpose: Store user todo items with multi-tenant isolation
-- Tables: public.todos
-- Dependencies: public.tenants, public.projects
-- ============================================

-- Create todos table with all required fields for multi-tenancy
create table if not exists public.todos (
  id uuid primary key default uuid_generate_v4(),
  tenantid text not null,
  projectid uuid not null,

  -- Application columns
  title text not null,
  description text,
  completed boolean default false,
  priority text default 'medium' check (priority in ('low', 'medium', 'high', 'urgent')),
  due_date timestamptz,
  assigned_to uuid,
  tags text[] default '{}',

  -- Timestamps
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- Add foreign key constraints (required for multi-tenant isolation)
alter table public.todos
  add constraint fk_tenant
    foreign key (tenantid)
    references public.tenants(id)
    on delete cascade;

alter table public.todos
  add constraint fk_project
    foreign key (projectid)
    references public.projects(id)
    on delete cascade;

-- Enable Row Level Security (required)
alter table public.todos enable row level security;

-- RLS Policies - Separate policy for each operation and role

-- SELECT policies
create policy "anon_select_todos"
  on public.todos
  for select
  to anon
  using (
    tenantid = (auth.jwt() ->> 'tenant_id')::text
    and projectid = (auth.jwt() ->> 'project_id')::uuid
  );

create policy "auth_select_todos"
  on public.todos
  for select
  to authenticated
  using (
    tenantid = (auth.jwt() ->> 'tenant_id')::text
    and projectid = (auth.jwt() ->> 'project_id')::uuid
  );

-- INSERT policy
create policy "auth_insert_todos"
  on public.todos
  for insert
  to authenticated
  with check (
    tenantid = (auth.jwt() ->> 'tenant_id')::text
    and projectid = (auth.jwt() ->> 'project_id')::uuid
  );

-- UPDATE policy
create policy "auth_update_todos"
  on public.todos
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

-- DELETE policy
create policy "auth_delete_todos"
  on public.todos
  for delete
  to authenticated
  using (
    tenantid = (auth.jwt() ->> 'tenant_id')::text
    and projectid = (auth.jwt() ->> 'project_id')::uuid
  );

-- Create indexes for performance
create index if not exists idx_todos_tenant_project
  on public.todos(tenantid, projectid);

create index if not exists idx_todos_completed
  on public.todos(completed);

create index if not exists idx_todos_priority
  on public.todos(priority);

create index if not exists idx_todos_due_date
  on public.todos(due_date) where due_date is not null;

create index if not exists idx_todos_created_at
  on public.todos(created_at desc);

-- Add helpful comments for documentation
comment on table public.todos is 'User todo items with multi-tenant isolation';
comment on column public.todos.tenantid is 'FK to tenants.id for tenant isolation';
comment on column public.todos.projectid is 'FK to projects.id for project isolation';
comment on column public.todos.title is 'Todo item title';
comment on column public.todos.description is 'Optional detailed description';
comment on column public.todos.completed is 'Whether the todo is completed';
comment on column public.todos.priority is 'Priority level: low, medium, high, urgent';
comment on column public.todos.due_date is 'Optional due date for the todo';
comment on column public.todos.assigned_to is 'Optional user assigned to this todo';
comment on column public.todos.tags is 'Array of tags for categorization';

-- Create updated_at trigger function if it doesn't exist
create or replace function public.update_updated_at_column()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

-- Add trigger to auto-update updated_at
drop trigger if exists update_todos_updated_at on public.todos;
create trigger update_todos_updated_at
  before update on public.todos
  for each row
  execute function public.update_updated_at_column();
`;

async function createTodosTable() {
  console.log('🚀 Creating todos table with multi-tenant support...\n');

  try {
    const response = await fetch('http://localhost:3006/api/supabase/migrations/execute', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: 'create_todos_table',
        sql: createTodoTableSQL,
        autoApply: true,
        skipValidation: false
      })
    });

    const result = await response.json();

    if (result.success) {
      console.log('✅ Migration successful!');
      console.log('   File:', result.fileName);
      console.log('   Path:', result.filePath);
      console.log('\n📋 Steps:');
      console.log('   Create:', result.steps.create);
      console.log('   Write:', result.steps.write);
      console.log('   Validate:', result.steps.validate);
      console.log('   Apply:', result.steps.apply);

      if (result.validation) {
        console.log('\n🔍 Validation:');
        console.log('   Passed:', result.validation.passed);
        if (result.validation.errors?.length > 0) {
          console.log('   Errors:', result.validation.errors);
        }
        if (result.validation.warnings?.length > 0) {
          console.log('   Warnings:', result.validation.warnings);
        }
      }

      console.log('\n🎉 Todos table is ready to use!');
      console.log('   You can now query: supabase.from("todos").select("*")');
    } else {
      console.error('❌ Migration failed:', result.error);
      if (result.validation && !result.validation.passed) {
        console.error('\n🔍 Validation Errors:');
        result.validation.errors?.forEach((err: string) => console.error('   -', err));
      }
      if (result.steps) {
        console.error('\n📋 Failed at step:', Object.entries(result.steps).find(([, v]) => v === 'failed')?.[0]);
      }
    }
  } catch (error) {
    console.error('❌ Error creating table:', error);
    console.error('\nMake sure:');
    console.error('   1. The migration API is running on port 3006');
    console.error('   2. Supabase CLI is installed and configured');
    console.error('   3. Database credentials are correct');
  }
}

// Run the migration
createTodosTable();

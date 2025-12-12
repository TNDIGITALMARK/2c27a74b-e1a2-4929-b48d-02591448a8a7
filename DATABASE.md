# Database Documentation

Complete guide to using the Supabase database in this project.

## 📋 Table of Contents

1. [Overview](#overview)
2. [Quick Start](#quick-start)
3. [Architecture](#architecture)
4. [Configuration](#configuration)
5. [Creating Tables](#creating-tables)
6. [Query Functions](#query-functions)
7. [Usage Examples](#usage-examples)
8. [Testing](#testing)
9. [Best Practices](#best-practices)
10. [Troubleshooting](#troubleshooting)

---

## Overview

This project uses **Supabase** as a complete backend solution, providing:

- **PostgreSQL Database**: Full-featured relational database
- **Row Level Security (RLS)**: Automatic tenant/project isolation
- **Real-time Subscriptions**: Live data updates
- **TypeScript Support**: Fully typed database operations
- **Migration System**: Version-controlled schema management

### Key Features

✅ **Multi-tenant Architecture**: Every table automatically filtered to your tenant/project
✅ **Type Safety**: Full TypeScript types for database operations
✅ **Reusable Queries**: Pre-built query functions for common operations
✅ **Migration API**: Easy schema management via HTTP API
✅ **Real-time Updates**: Subscribe to data changes
✅ **Security**: RLS policies enforce data isolation

---

## Quick Start

### 1. Install Dependencies

Already done! Supabase is installed and configured.

### 2. Create Your First Table

```bash
npx tsx scripts/create-todos-table.ts
```

This creates a `todos` table with full multi-tenant support.

### 3. Test the Connection

```bash
npx tsx scripts/test-database.ts
```

This verifies connectivity and runs CRUD operation tests.

### 4. Use in Your Application

```typescript
import { getTodos, createTodo } from '@/lib/supabase';

// Fetch todos
const { data: todos, error } = await getTodos();

// Create a new todo
const { data: newTodo } = await createTodo({
  title: 'Build amazing features',
  description: 'Using Supabase database',
  completed: false,
  priority: 'high',
  tags: ['development']
});
```

---

## Architecture

### Database Credentials

Your database is pre-configured with:

- **URL**: `https://hfndfmtxhqvubnfiwzlz.supabase.co`
- **Tenant ID**: `SVlJQX40kgMXeIejHAJWRWQveJZ2`
- **Project ID**: `2c27a74b-e1a2-4929-b48d-02591448a8a7`
- **Authentication**: Two-key system (anon key + scoped JWT)

### Multi-Tenant Isolation

Every table includes:

```sql
tenantid TEXT NOT NULL    -- Your tenant identifier
projectid UUID NOT NULL   -- Your project identifier
```

RLS policies automatically filter ALL queries to your tenant/project. You cannot access other tenants' data.

### File Structure

```
src/lib/supabase/
├── client.ts        # Supabase client configuration
├── types.ts         # TypeScript type definitions
├── queries.ts       # Reusable query functions
└── index.ts         # Exports everything

scripts/
├── create-todos-table.ts   # Example migration script
└── test-database.ts        # Database test suite
```

---

## Configuration

### Supabase Client (`src/lib/supabase/client.ts`)

The client is pre-configured with your credentials:

```typescript
import { supabase, DATABASE_CONFIG } from '@/lib/supabase/client';

// Use the client
const { data, error } = await supabase
  .from('todos')
  .select('*');

// Access configuration
console.log(DATABASE_CONFIG.TENANT_ID);
console.log(DATABASE_CONFIG.PROJECT_ID);
```

### Environment Variables (Optional)

For production, you can move credentials to environment variables:

```bash
# .env.local
NEXT_PUBLIC_SUPABASE_URL=https://hfndfmtxhqvubnfiwzlz.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
NEXT_PUBLIC_SUPABASE_SCOPED_TOKEN=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

---

## Creating Tables

### Migration API

Create tables using the migration API:

```bash
POST http://localhost:3006/api/supabase/migrations/execute
```

**Request:**
```json
{
  "name": "create_my_table",
  "sql": "CREATE TABLE ...",
  "autoApply": true,
  "skipValidation": false
}
```

**Response:**
```json
{
  "success": true,
  "fileName": "20250112123456_create_my_table.sql",
  "validation": { "passed": true },
  "applied": true
}
```

### Multi-Tenant Table Requirements

Every table MUST include:

```sql
CREATE TABLE public.my_table (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  tenantid TEXT NOT NULL,
  projectid UUID NOT NULL,

  -- Your columns here
  name TEXT,

  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Foreign key constraints (required)
ALTER TABLE public.my_table
  ADD CONSTRAINT fk_tenant
    FOREIGN KEY (tenantid) REFERENCES public.tenants(id) ON DELETE CASCADE,
  ADD CONSTRAINT fk_project
    FOREIGN KEY (projectid) REFERENCES public.projects(id) ON DELETE CASCADE;

-- Enable RLS (required)
ALTER TABLE public.my_table ENABLE ROW LEVEL SECURITY;

-- RLS policies (required - separate for each operation)
CREATE POLICY "anon_select_my_table"
  ON public.my_table FOR SELECT TO anon
  USING (
    tenantid = (auth.jwt() ->> 'tenant_id')::text
    AND projectid = (auth.jwt() ->> 'project_id')::uuid
  );

CREATE POLICY "auth_insert_my_table"
  ON public.my_table FOR INSERT TO authenticated
  WITH CHECK (
    tenantid = (auth.jwt() ->> 'tenant_id')::text
    AND projectid = (auth.jwt() ->> 'project_id')::uuid
  );

-- Add UPDATE and DELETE policies similarly
```

See `scripts/create-todos-table.ts` for a complete example.

---

## Query Functions

### Pre-built Todo Queries

```typescript
import {
  getTodos,          // Get all todos
  getTodoById,       // Get single todo
  getIncompleteTodos, // Get incomplete todos
  getTodosByPriority, // Get by priority
  searchTodos,       // Search by text
  createTodo,        // Create new todo
  updateTodo,        // Update todo
  toggleTodo,        // Toggle completion
  deleteTodo,        // Delete todo
  getTodoStats,      // Get statistics
} from '@/lib/supabase';
```

### Generic Query Helpers

```typescript
import {
  fetchAll,      // Fetch all records from any table
  fetchById,     // Fetch single record by ID
  insertRecord,  // Insert new record
  updateRecord,  // Update existing record
  deleteRecord,  // Delete record
} from '@/lib/supabase';

// Example: Use with any table
const { data, error } = await fetchAll<MyType>('my_table', {
  filters: [{ column: 'status', operator: 'eq', value: 'active' }],
  sort: { column: 'created_at', ascending: false },
  pagination: { page: 1, pageSize: 10 }
});
```

---

## Usage Examples

### Basic CRUD Operations

```typescript
import { getTodos, createTodo, updateTodo, deleteTodo } from '@/lib/supabase';

// CREATE
const { data: newTodo, error } = await createTodo({
  title: 'Learn Supabase',
  description: 'Master database operations',
  completed: false,
  priority: 'high',
  tags: ['learning', 'database']
});

// READ
const { data: todos } = await getTodos();

// UPDATE
const { data: updated } = await updateTodo(newTodo.id, {
  completed: true
});

// DELETE
await deleteTodo(newTodo.id);
```

### Advanced Queries

```typescript
// Pagination
const { data: page1 } = await getTodos({
  pagination: { page: 1, pageSize: 10 }
});

// Sorting
const { data: sorted } = await getTodos({
  sort: { column: 'priority', ascending: false }
});

// Filtering
const { data: filtered } = await getTodos({
  filters: [
    { column: 'completed', operator: 'eq', value: false },
    { column: 'priority', operator: 'in', value: ['high', 'urgent'] }
  ]
});

// Search
const { data: results } = await searchTodos('database');

// Statistics
const stats = await getTodoStats();
console.log(`Total: ${stats.total}, Completed: ${stats.completed}`);
```

### Real-time Subscriptions

```typescript
import { supabase } from '@/lib/supabase';

// Subscribe to all changes
const channel = supabase
  .channel('todos-changes')
  .on(
    'postgres_changes',
    {
      event: '*',
      schema: 'public',
      table: 'todos'
    },
    (payload) => {
      console.log('Change received:', payload);
      // Update your UI here
    }
  )
  .subscribe();

// Unsubscribe when done
channel.unsubscribe();
```

### Using in React Components

```typescript
'use client';

import { useState, useEffect } from 'react';
import { getTodos, createTodo, type Todo } from '@/lib/supabase';

export function TodoList() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadTodos();
  }, []);

  async function loadTodos() {
    const { data, error } = await getTodos();
    if (data) setTodos(data);
    setLoading(false);
  }

  async function addTodo(title: string) {
    const { data } = await createTodo({
      title,
      completed: false,
      priority: 'medium',
      tags: []
    });
    if (data) setTodos([...todos, data]);
  }

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      {todos.map(todo => (
        <div key={todo.id}>{todo.title}</div>
      ))}
    </div>
  );
}
```

---

## Testing

### Run Database Tests

```bash
npx tsx scripts/test-database.ts
```

This test suite verifies:
- ✅ Database connectivity
- ✅ Read operations
- ✅ Write operations
- ✅ Update operations
- ✅ Delete operations
- ✅ Row Level Security

### Create Sample Data

```typescript
import { createTodo } from '@/lib/supabase';

const sampleTodos = [
  {
    title: 'Complete project setup',
    priority: 'high',
    completed: false,
    tags: ['setup']
  },
  {
    title: 'Write documentation',
    priority: 'medium',
    completed: true,
    tags: ['docs']
  }
];

for (const todo of sampleTodos) {
  await createTodo(todo);
}
```

---

## Best Practices

### 1. Always Include Tenant/Project IDs in Inserts

```typescript
// ✅ Good - use the helper function
await createTodo({ title: 'Task' });

// ❌ Bad - missing tenant/project
await supabase.from('todos').insert({ title: 'Task' });

// ✅ Good - if you must use raw insert
await supabase.from('todos').insert({
  tenantid: DATABASE_CONFIG.TENANT_ID,
  projectid: DATABASE_CONFIG.PROJECT_ID,
  title: 'Task'
});
```

### 2. Use TypeScript Types

```typescript
// ✅ Good - typed response
const { data, error } = await getTodos();
// data is typed as Todo[]

// ✅ Good - typed insert
const todo: TodoInsert = {
  tenantid: DATABASE_CONFIG.TENANT_ID,
  projectid: DATABASE_CONFIG.PROJECT_ID,
  title: 'Task',
  completed: false,
  priority: 'medium',
  tags: []
};
```

### 3. Handle Errors Properly

```typescript
// ✅ Good - check for errors
const { data, error } = await getTodos();
if (error) {
  console.error('Failed to load todos:', error);
  return;
}

// Process data
console.log('Todos:', data);
```

### 4. Use Pagination for Large Datasets

```typescript
// ✅ Good - paginated query
const { data } = await getTodos({
  pagination: { page: 1, pageSize: 20 }
});

// ❌ Bad - fetching all records
const { data } = await getTodos();
```

### 5. Create Indexes for Frequently Queried Columns

```sql
-- Add indexes in your migrations
CREATE INDEX idx_todos_completed ON public.todos(completed);
CREATE INDEX idx_todos_priority ON public.todos(priority);
CREATE INDEX idx_todos_created_at ON public.todos(created_at DESC);
```

---

## Troubleshooting

### Issue: "relation 'todos' does not exist"

**Solution**: Create the table first:
```bash
npx tsx scripts/create-todos-table.ts
```

### Issue: "JWT expired" or "authentication failed"

**Solution**: Your scoped token has expired (45-minute lifetime). Contact support for a refreshed token.

### Issue: "permission denied for table"

**Solution**: RLS policies may be misconfigured. Verify:
1. RLS is enabled on the table
2. Policies exist for SELECT, INSERT, UPDATE, DELETE
3. Policies check both `tenantid` and `projectid`

### Issue: "Cannot read properties of null"

**Solution**: Always check for errors before accessing data:
```typescript
const { data, error } = await getTodos();
if (error) {
  console.error(error);
  return;
}
// Now safe to use data
```

### Issue: "Migration validation failed"

**Solution**: Ensure your migration includes:
- `tenantid TEXT NOT NULL`
- `projectid UUID NOT NULL`
- Foreign key constraints to `tenants` and `projects`
- RLS enabled
- RLS policies for each CRUD operation

---

## Additional Resources

- **Supabase Documentation**: https://supabase.com/docs
- **PostgreSQL Documentation**: https://www.postgresql.org/docs/
- **RLS Guide**: https://supabase.com/docs/guides/auth/row-level-security

---

## Summary

You now have a fully configured database system with:

✅ Supabase client configured
✅ Multi-tenant isolation via RLS
✅ TypeScript types for type safety
✅ Reusable query functions
✅ Migration system for schema management
✅ Example scripts and documentation

**Get Started:**
1. Create your first table: `npx tsx scripts/create-todos-table.ts`
2. Test the connection: `npx tsx scripts/test-database.ts`
3. Import and use: `import { getTodos } from '@/lib/supabase'`
4. Build amazing features! 🚀

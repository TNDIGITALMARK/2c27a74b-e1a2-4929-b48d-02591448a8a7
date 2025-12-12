# Database Quick Start Guide

Get started with your Supabase database in 3 minutes.

## 🚀 You're Already Set Up!

The database is **fully configured** and ready to use. Here's what you have:

✅ **Supabase Client**: Pre-configured in `src/lib/supabase/client.ts`
✅ **TypeScript Types**: Defined in `src/lib/supabase/types.ts`
✅ **Query Functions**: Ready to use in `src/lib/supabase/queries.ts`
✅ **Multi-tenant Security**: Row Level Security (RLS) automatically filters your data
✅ **Example Scripts**: Migration and test scripts in `scripts/`

---

## 📦 What's Included

### Core Files

```
src/lib/supabase/
├── client.ts      # Supabase client (ready to use)
├── types.ts       # TypeScript types
├── queries.ts     # Query functions (todos example)
└── index.ts       # Easy imports

scripts/
├── create-todos-table.ts       # Example: Create todos table
├── example-create-table.ts     # Template: Create your own tables
├── test-database.ts            # Test CRUD operations
└── verify-database.ts          # Verify configuration

DATABASE.md        # Complete documentation
QUICKSTART.md      # This file
```

---

## 🎯 Use the Database in 3 Steps

### Step 1: Import the Client

```typescript
import { supabase } from '@/lib/supabase';
```

### Step 2: Query Your Data

```typescript
// Example: Get all records from a table
const { data, error } = await supabase
  .from('your_table_name')
  .select('*');

if (error) {
  console.error('Error:', error);
} else {
  console.log('Data:', data);
}
```

### Step 3: Create, Update, Delete

```typescript
// CREATE
const { data: newRecord } = await supabase
  .from('your_table_name')
  .insert({
    tenantid: 'SVlJQX40kgMXeIejHAJWRWQveJZ2',
    projectid: '2c27a74b-e1a2-4929-b48d-02591448a8a7',
    name: 'My Item'
  })
  .select()
  .single();

// UPDATE
await supabase
  .from('your_table_name')
  .update({ name: 'Updated Name' })
  .eq('id', newRecord.id);

// DELETE
await supabase
  .from('your_table_name')
  .delete()
  .eq('id', newRecord.id);
```

---

## 📋 Create Your First Table

### Option 1: Use the Example (Todos Table)

```bash
npx tsx scripts/create-todos-table.ts
```

This creates a `todos` table with full multi-tenant support. You can start using it immediately:

```typescript
import { getTodos, createTodo } from '@/lib/supabase';

// Get all todos
const { data: todos } = await getTodos();

// Create a new todo
const { data: newTodo } = await createTodo({
  title: 'My first todo',
  completed: false,
  priority: 'high',
  tags: ['getting-started']
});
```

### Option 2: Create Your Own Table

1. **Copy the template:**
   ```bash
   cp scripts/example-create-table.ts scripts/create-my-table.ts
   ```

2. **Edit the SQL** in the new file to match your needs

3. **Run the migration:**
   ```bash
   npx tsx scripts/create-my-table.ts
   ```

---

## 🔑 Key Concepts

### Multi-tenant Isolation

Every query is **automatically filtered** to your tenant and project:
- **Tenant ID**: `SVlJQX40kgMXeIejHAJWRWQveJZ2`
- **Project ID**: `2c27a74b-e1a2-4929-b48d-02591448a8a7`

You **cannot** access other tenants' data. It's enforced by PostgreSQL Row Level Security.

### Required Fields

Every table MUST have:
```sql
id UUID PRIMARY KEY
tenantid TEXT NOT NULL          -- Your tenant
projectid UUID NOT NULL         -- Your project
created_at TIMESTAMPTZ
updated_at TIMESTAMPTZ
```

### Row Level Security (RLS)

RLS policies ensure data isolation. You MUST:
1. Enable RLS on every table
2. Create policies for SELECT, INSERT, UPDATE, DELETE
3. Filter by both `tenantid` and `projectid`

See `scripts/create-todos-table.ts` for a complete example.

---

## 🎓 Example: Using in a React Component

```typescript
'use client';

import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';

export function MyComponent() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadItems();
  }, []);

  async function loadItems() {
    const { data, error } = await supabase
      .from('your_table_name')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error loading items:', error);
    } else {
      setItems(data);
    }
    setLoading(false);
  }

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      {items.map(item => (
        <div key={item.id}>{item.name}</div>
      ))}
    </div>
  );
}
```

---

## 📚 Next Steps

### 1. Create Your First Table
```bash
npx tsx scripts/create-todos-table.ts
```

### 2. Test It Works
```bash
npx tsx scripts/test-database.ts
```

### 3. Use in Your App
```typescript
import { getTodos, createTodo } from '@/lib/supabase';
```

### 4. Read Full Documentation
See `DATABASE.md` for:
- Complete API reference
- Advanced queries (pagination, filtering, sorting)
- Real-time subscriptions
- Best practices
- Troubleshooting

---

## 🆘 Need Help?

### Common Issues

**"Table does not exist"**
→ Create the table first: `npx tsx scripts/create-todos-table.ts`

**"JWT expired"**
→ Your auth token expired (45-minute lifetime). Contact support for refresh.

**"Permission denied"**
→ Check RLS policies include both `tenantid` and `projectid` checks

### Resources

- **Full Documentation**: `DATABASE.md`
- **Supabase Docs**: https://supabase.com/docs
- **PostgreSQL Docs**: https://www.postgresql.org/docs/

---

## ✨ Summary

You have a **production-ready database system** with:

✅ Configured Supabase client
✅ Multi-tenant security via RLS
✅ TypeScript types for safety
✅ Reusable query functions
✅ Migration system for schema changes
✅ Example scripts and documentation

**Start building now!** 🚀

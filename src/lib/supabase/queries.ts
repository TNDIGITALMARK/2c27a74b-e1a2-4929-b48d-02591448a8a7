/**
 * Database Query Functions
 *
 * This module provides reusable query functions for interacting with the database.
 * All queries are automatically filtered by RLS to your tenant/project.
 */

import { supabase, DATABASE_CONFIG } from './client';
import type {
  Todo,
  TodoInsert,
  TodoUpdate,
  DatabaseResponse,
  DatabaseListResponse,
  PaginationOptions,
  SortOptions,
  FilterOption
} from './types';

/**
 * ====================
 * TODO QUERIES
 * ====================
 */

/**
 * Get all todos for the current tenant/project
 */
export async function getTodos(
  options?: {
    pagination?: PaginationOptions;
    sort?: SortOptions;
    filters?: FilterOption[];
  }
): Promise<DatabaseListResponse<Todo>> {
  try {
    let query = supabase.from('todos').select('*', { count: 'exact' });

    // Apply filters
    if (options?.filters) {
      options.filters.forEach(filter => {
        switch (filter.operator) {
          case 'eq':
            query = query.eq(filter.column, filter.value);
            break;
          case 'neq':
            query = query.neq(filter.column, filter.value);
            break;
          case 'gt':
            query = query.gt(filter.column, filter.value);
            break;
          case 'gte':
            query = query.gte(filter.column, filter.value);
            break;
          case 'lt':
            query = query.lt(filter.column, filter.value);
            break;
          case 'lte':
            query = query.lte(filter.column, filter.value);
            break;
          case 'like':
            query = query.like(filter.column, filter.value);
            break;
          case 'ilike':
            query = query.ilike(filter.column, filter.value);
            break;
          case 'in':
            query = query.in(filter.column, filter.value);
            break;
        }
      });
    }

    // Apply sorting
    if (options?.sort) {
      query = query.order(options.sort.column, {
        ascending: options.sort.ascending ?? false
      });
    } else {
      // Default sort by created_at descending
      query = query.order('created_at', { ascending: false });
    }

    // Apply pagination
    if (options?.pagination) {
      const { page, pageSize } = options.pagination;
      const from = (page - 1) * pageSize;
      const to = from + pageSize - 1;
      query = query.range(from, to);
    }

    const { data, error, count } = await query;

    if (error) throw error;
    return { data: data as Todo[], error: null, count };
  } catch (error) {
    console.error('Error fetching todos:', error);
    return { data: null, error: error as Error, count: null };
  }
}

/**
 * Get a single todo by ID
 */
export async function getTodoById(id: string): Promise<DatabaseResponse<Todo>> {
  try {
    const { data, error } = await supabase
      .from('todos')
      .select('*')
      .eq('id', id)
      .single();

    if (error) throw error;
    return { data: data as Todo, error: null };
  } catch (error) {
    console.error('Error fetching todo:', error);
    return { data: null, error: error as Error };
  }
}

/**
 * Get incomplete todos
 */
export async function getIncompleteTodos(): Promise<DatabaseListResponse<Todo>> {
  try {
    const { data, error, count } = await supabase
      .from('todos')
      .select('*', { count: 'exact' })
      .eq('completed', false)
      .order('priority', { ascending: false })
      .order('due_date', { ascending: true });

    if (error) throw error;
    return { data: data as Todo[], error: null, count };
  } catch (error) {
    console.error('Error fetching incomplete todos:', error);
    return { data: null, error: error as Error, count: null };
  }
}

/**
 * Get todos by priority
 */
export async function getTodosByPriority(
  priority: 'low' | 'medium' | 'high' | 'urgent'
): Promise<DatabaseListResponse<Todo>> {
  try {
    const { data, error, count } = await supabase
      .from('todos')
      .select('*', { count: 'exact' })
      .eq('priority', priority)
      .order('created_at', { ascending: false });

    if (error) throw error;
    return { data: data as Todo[], error: null, count };
  } catch (error) {
    console.error('Error fetching todos by priority:', error);
    return { data: null, error: error as Error, count: null };
  }
}

/**
 * Search todos by title or description
 */
export async function searchTodos(searchTerm: string): Promise<DatabaseListResponse<Todo>> {
  try {
    const { data, error, count } = await supabase
      .from('todos')
      .select('*', { count: 'exact' })
      .or(`title.ilike.%${searchTerm}%,description.ilike.%${searchTerm}%`)
      .order('created_at', { ascending: false });

    if (error) throw error;
    return { data: data as Todo[], error: null, count };
  } catch (error) {
    console.error('Error searching todos:', error);
    return { data: null, error: error as Error, count: null };
  }
}

/**
 * Create a new todo
 */
export async function createTodo(
  todo: Omit<TodoInsert, 'tenantid' | 'projectid'>
): Promise<DatabaseResponse<Todo>> {
  try {
    const { data, error } = await supabase
      .from('todos')
      .insert({
        ...todo,
        tenantid: DATABASE_CONFIG.TENANT_ID,
        projectid: DATABASE_CONFIG.PROJECT_ID
      })
      .select()
      .single();

    if (error) throw error;
    return { data: data as Todo, error: null };
  } catch (error) {
    console.error('Error creating todo:', error);
    return { data: null, error: error as Error };
  }
}

/**
 * Update a todo
 */
export async function updateTodo(
  id: string,
  updates: Partial<Omit<Todo, 'id' | 'tenantid' | 'projectid' | 'created_at' | 'updated_at'>>
): Promise<DatabaseResponse<Todo>> {
  try {
    const { data, error } = await supabase
      .from('todos')
      .update(updates)
      .eq('id', id)
      .select()
      .single();

    if (error) throw error;
    return { data: data as Todo, error: null };
  } catch (error) {
    console.error('Error updating todo:', error);
    return { data: null, error: error as Error };
  }
}

/**
 * Toggle todo completion status
 */
export async function toggleTodo(id: string, completed: boolean): Promise<DatabaseResponse<Todo>> {
  return updateTodo(id, { completed });
}

/**
 * Delete a todo
 */
export async function deleteTodo(id: string): Promise<DatabaseResponse<void>> {
  try {
    const { error } = await supabase
      .from('todos')
      .delete()
      .eq('id', id);

    if (error) throw error;
    return { data: null, error: null };
  } catch (error) {
    console.error('Error deleting todo:', error);
    return { data: null, error: error as Error };
  }
}

/**
 * Delete multiple todos
 */
export async function deleteTodos(ids: string[]): Promise<DatabaseResponse<void>> {
  try {
    const { error } = await supabase
      .from('todos')
      .delete()
      .in('id', ids);

    if (error) throw error;
    return { data: null, error: null };
  } catch (error) {
    console.error('Error deleting todos:', error);
    return { data: null, error: error as Error };
  }
}

/**
 * Get todo statistics
 */
export async function getTodoStats(): Promise<{
  total: number;
  completed: number;
  incomplete: number;
  byPriority: {
    low: number;
    medium: number;
    high: number;
    urgent: number;
  };
}> {
  try {
    // Get all todos
    const { count: total } = await supabase
      .from('todos')
      .select('*', { count: 'exact', head: true });

    // Get completed count
    const { count: completed } = await supabase
      .from('todos')
      .select('*', { count: 'exact', head: true })
      .eq('completed', true);

    // Get incomplete count
    const { count: incomplete } = await supabase
      .from('todos')
      .select('*', { count: 'exact', head: true })
      .eq('completed', false);

    // Get counts by priority
    const { count: low } = await supabase
      .from('todos')
      .select('*', { count: 'exact', head: true })
      .eq('priority', 'low');

    const { count: medium } = await supabase
      .from('todos')
      .select('*', { count: 'exact', head: true })
      .eq('priority', 'medium');

    const { count: high } = await supabase
      .from('todos')
      .select('*', { count: 'exact', head: true })
      .eq('priority', 'high');

    const { count: urgent } = await supabase
      .from('todos')
      .select('*', { count: 'exact', head: true })
      .eq('priority', 'urgent');

    return {
      total: total ?? 0,
      completed: completed ?? 0,
      incomplete: incomplete ?? 0,
      byPriority: {
        low: low ?? 0,
        medium: medium ?? 0,
        high: high ?? 0,
        urgent: urgent ?? 0
      }
    };
  } catch (error) {
    console.error('Error getting todo stats:', error);
    return {
      total: 0,
      completed: 0,
      incomplete: 0,
      byPriority: { low: 0, medium: 0, high: 0, urgent: 0 }
    };
  }
}

/**
 * ====================
 * GENERIC QUERY HELPERS
 * ====================
 */

/**
 * Generic function to fetch all records from a table
 */
export async function fetchAll<T>(
  tableName: string,
  options?: {
    pagination?: PaginationOptions;
    sort?: SortOptions;
    filters?: FilterOption[];
  }
): Promise<DatabaseListResponse<T>> {
  try {
    let query = supabase.from(tableName).select('*', { count: 'exact' });

    // Apply filters
    if (options?.filters) {
      options.filters.forEach(filter => {
        query = query.filter(filter.column, filter.operator, filter.value);
      });
    }

    // Apply sorting
    if (options?.sort) {
      query = query.order(options.sort.column, {
        ascending: options.sort.ascending ?? false
      });
    }

    // Apply pagination
    if (options?.pagination) {
      const { page, pageSize } = options.pagination;
      const from = (page - 1) * pageSize;
      const to = from + pageSize - 1;
      query = query.range(from, to);
    }

    const { data, error, count } = await query;

    if (error) throw error;
    return { data: data as T[], error: null, count };
  } catch (error) {
    console.error(`Error fetching from ${tableName}:`, error);
    return { data: null, error: error as Error, count: null };
  }
}

/**
 * Generic function to fetch a single record by ID
 */
export async function fetchById<T>(
  tableName: string,
  id: string
): Promise<DatabaseResponse<T>> {
  try {
    const { data, error } = await supabase
      .from(tableName)
      .select('*')
      .eq('id', id)
      .single();

    if (error) throw error;
    return { data: data as T, error: null };
  } catch (error) {
    console.error(`Error fetching from ${tableName}:`, error);
    return { data: null, error: error as Error };
  }
}

/**
 * Generic function to insert a record
 */
export async function insertRecord<T>(
  tableName: string,
  record: Omit<T, 'id' | 'created_at' | 'updated_at'>
): Promise<DatabaseResponse<T>> {
  try {
    const { data, error } = await supabase
      .from(tableName)
      .insert({
        ...record,
        tenantid: DATABASE_CONFIG.TENANT_ID,
        projectid: DATABASE_CONFIG.PROJECT_ID
      } as any)
      .select()
      .single();

    if (error) throw error;
    return { data: data as T, error: null };
  } catch (error) {
    console.error(`Error inserting into ${tableName}:`, error);
    return { data: null, error: error as Error };
  }
}

/**
 * Generic function to update a record
 */
export async function updateRecord<T>(
  tableName: string,
  id: string,
  updates: Partial<T>
): Promise<DatabaseResponse<T>> {
  try {
    const { data, error } = await supabase
      .from(tableName)
      .update(updates as any)
      .eq('id', id)
      .select()
      .single();

    if (error) throw error;
    return { data: data as T, error: null };
  } catch (error) {
    console.error(`Error updating ${tableName}:`, error);
    return { data: null, error: error as Error };
  }
}

/**
 * Generic function to delete a record
 */
export async function deleteRecord(
  tableName: string,
  id: string
): Promise<DatabaseResponse<void>> {
  try {
    const { error } = await supabase
      .from(tableName)
      .delete()
      .eq('id', id);

    if (error) throw error;
    return { data: null, error: null };
  } catch (error) {
    console.error(`Error deleting from ${tableName}:`, error);
    return { data: null, error: error as Error };
  }
}

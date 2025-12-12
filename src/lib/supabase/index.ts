/**
 * Supabase Database Module
 *
 * This module provides a complete database solution with:
 * - Configured Supabase client with RLS
 * - TypeScript types for database tables
 * - Reusable query functions
 * - Multi-tenant isolation
 *
 * Usage:
 * import { supabase, getTodos, createTodo } from '@/lib/supabase';
 */

// Export client
export { supabase, DATABASE_CONFIG } from './client';

// Export types
export type {
  BaseTableFields,
  Todo,
  TodoInsert,
  TodoUpdate,
  DatabaseResponse,
  DatabaseListResponse,
  PaginationOptions,
  SortOptions,
  FilterOption,
  FilterOperator
} from './types';

// Export query functions
export {
  // Todo queries
  getTodos,
  getTodoById,
  getIncompleteTodos,
  getTodosByPriority,
  searchTodos,
  createTodo,
  updateTodo,
  toggleTodo,
  deleteTodo,
  deleteTodos,
  getTodoStats,

  // Generic helpers
  fetchAll,
  fetchById,
  insertRecord,
  updateRecord,
  deleteRecord
} from './queries';

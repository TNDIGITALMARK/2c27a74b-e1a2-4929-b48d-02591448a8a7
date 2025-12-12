/**
 * Database Types
 *
 * These types define the structure of database tables with multi-tenant support.
 * All tables include tenantid and projectid for automatic RLS filtering.
 */

/**
 * Base fields that all tables must include for multi-tenant support
 */
export interface BaseTableFields {
  id: string;
  tenantid: string;
  projectid: string;
  created_at: string;
  updated_at: string;
}

/**
 * Example Todo Table
 *
 * This is a sample table structure showing how to properly
 * define database types with multi-tenant support.
 */
export interface Todo extends BaseTableFields {
  title: string;
  description: string | null;
  completed: boolean;
  priority: 'low' | 'medium' | 'high' | 'urgent';
  due_date: string | null;
  assigned_to: string | null;
  tags: string[];
}

/**
 * Insert types (omit auto-generated fields)
 */
export type TodoInsert = Omit<Todo, 'id' | 'created_at' | 'updated_at'>;

/**
 * Update types (all fields optional except id)
 */
export type TodoUpdate = Partial<Omit<Todo, 'id' | 'tenantid' | 'projectid' | 'created_at'>> & {
  id: string;
};

/**
 * Database Query Response Types
 */
export interface DatabaseResponse<T> {
  data: T | null;
  error: Error | null;
}

export interface DatabaseListResponse<T> {
  data: T[] | null;
  error: Error | null;
  count?: number | null;
}

/**
 * Pagination Options
 */
export interface PaginationOptions {
  page: number;
  pageSize: number;
}

/**
 * Sort Options
 */
export interface SortOptions {
  column: string;
  ascending?: boolean;
}

/**
 * Filter Options
 */
export type FilterOperator = 'eq' | 'neq' | 'gt' | 'gte' | 'lt' | 'lte' | 'like' | 'ilike' | 'in';

export interface FilterOption {
  column: string;
  operator: FilterOperator;
  value: any;
}

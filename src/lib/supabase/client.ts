import { createClient } from '@supabase/supabase-js';

/**
 * Supabase Client Configuration
 *
 * This client is configured with:
 * - Project URL: hfndfmtxhqvubnfiwzlz.supabase.co
 * - Anon Key: Public project identifier
 * - Scoped Token: JWT with tenant/project claims for RLS
 *
 * Row Level Security (RLS) automatically filters all queries to:
 * - Tenant: SVlJQX40kgMXeIejHAJWRWQveJZ2
 * - Project: 2c27a74b-e1a2-4929-b48d-02591448a8a7
 */
export const supabase = createClient(
  'https://hfndfmtxhqvubnfiwzlz.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhmbmRmbXR4aHF2dWJuZml3emx6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjA2Mjk4MDgsImV4cCI6MjA3NjIwNTgwOH0.n0NK_Ov03-UbDQYr5mio3ggYa5XTN-XI1kB6X81N4nA',
  {
    global: {
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsImF1ZCI6ImF1dGhlbnRpY2F0ZWQiLCJyb2xlIjoiYW5vbiIsInRlbmFudF9pZCI6IlNWbEpRWDQwa2dNWGVJZWpIQUpXUldRdmVKWjIiLCJwcm9qZWN0X2lkIjoiMmMyN2E3NGItZTFhMi00OTI5LWI0OGQtMDI1OTE0NDhhOGE3IiwianRpIjoiYzMxZTJiOTgtZGJhZS00ZjczLWJhYWEtYjNjNmFjYTAzYWZlIiwiaWF0IjoxNzY1NTAwMDQxLCJleHAiOjE3NjU1MDI3NDF9.EsRePWYcy1gnCtKQ0Hex_GxmnlqQuruAll6cDwGzpNo`
      }
    }
  }
);

/**
 * Database Configuration Constants
 */
export const DATABASE_CONFIG = {
  TENANT_ID: 'SVlJQX40kgMXeIejHAJWRWQveJZ2',
  PROJECT_ID: '2c27a74b-e1a2-4929-b48d-02591448a8a7',
} as const;

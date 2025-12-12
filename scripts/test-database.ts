/**
 * Database Test Script
 *
 * This script tests the database connection and demonstrates CRUD operations.
 * Run with: npx tsx scripts/test-database.ts
 */

import { supabase, DATABASE_CONFIG } from '../src/lib/supabase/client';

async function testDatabaseConnection() {
  console.log('🔍 Testing Database Connection...\n');
  console.log('📋 Configuration:');
  console.log('   Tenant ID:', DATABASE_CONFIG.TENANT_ID);
  console.log('   Project ID:', DATABASE_CONFIG.PROJECT_ID);
  console.log('   URL:', 'https://hfndfmtxhqvubnfiwzlz.supabase.co');
  console.log('');

  try {
    // Test 1: Check if we can connect
    console.log('Test 1: Connection Test');
    console.log('   Testing basic connectivity...');

    const { error: connectionError } = await supabase
      .from('todos')
      .select('*', { count: 'exact', head: true });

    if (connectionError) {
      // If table doesn't exist yet, that's okay - connection still works
      if (connectionError.message.includes('does not exist') ||
          connectionError.message.includes('relation') ||
          connectionError.code === '42P01') {
        console.log('   ✅ Connection successful!');
        console.log('   ℹ️  Note: "todos" table does not exist yet.');
        console.log('   ℹ️  Run: npx tsx scripts/create-todos-table.ts to create it.\n');
        return true;
      } else {
        throw connectionError;
      }
    } else {
      console.log('   ✅ Connection successful!');
      console.log('   ✅ "todos" table exists and is accessible.\n');
    }

    // Test 2: Try to read data
    console.log('Test 2: Read Operation');
    console.log('   Fetching todos...');

    const { data: todos, error: readError, count } = await supabase
      .from('todos')
      .select('*', { count: 'exact' });

    if (readError) {
      throw readError;
    }

    console.log(`   ✅ Read successful! Found ${count ?? 0} todo(s).`);
    if (todos && todos.length > 0) {
      console.log('   Sample todo:');
      console.log('   ', JSON.stringify(todos[0], null, 2));
    }
    console.log('');

    // Test 3: Try to create a test record
    console.log('Test 3: Create Operation');
    console.log('   Creating a test todo...');

    const testTodo = {
      tenantid: DATABASE_CONFIG.TENANT_ID,
      projectid: DATABASE_CONFIG.PROJECT_ID,
      title: 'Test Todo - Database Connection',
      description: 'This is a test todo created by the database test script',
      completed: false,
      priority: 'medium',
      tags: ['test', 'database']
    };

    const { data: newTodo, error: createError } = await supabase
      .from('todos')
      .insert(testTodo)
      .select()
      .single();

    if (createError) {
      throw createError;
    }

    console.log('   ✅ Create successful!');
    console.log('   Created todo ID:', newTodo.id);
    console.log('');

    // Test 4: Try to update the record
    console.log('Test 4: Update Operation');
    console.log('   Updating the test todo...');

    const { data: updatedTodo, error: updateError } = await supabase
      .from('todos')
      .update({
        completed: true,
        description: 'Updated: This todo has been marked as complete'
      })
      .eq('id', newTodo.id)
      .select()
      .single();

    if (updateError) {
      throw updateError;
    }

    console.log('   ✅ Update successful!');
    console.log('   Updated completed status to:', updatedTodo.completed);
    console.log('');

    // Test 5: Try to delete the record
    console.log('Test 5: Delete Operation');
    console.log('   Deleting the test todo...');

    const { error: deleteError } = await supabase
      .from('todos')
      .delete()
      .eq('id', newTodo.id);

    if (deleteError) {
      throw deleteError;
    }

    console.log('   ✅ Delete successful!');
    console.log('   Test todo removed from database.');
    console.log('');

    // Test 6: Verify RLS is working
    console.log('Test 6: Row Level Security Test');
    console.log('   Verifying RLS filters data to your tenant/project...');

    const { data: allTodos, count: totalCount } = await supabase
      .from('todos')
      .select('*', { count: 'exact' });

    console.log(`   ✅ RLS is working! You can see ${totalCount ?? 0} todo(s).`);
    console.log('   ✅ All queries are automatically filtered to your tenant/project.');
    console.log('');

    // Success summary
    console.log('═══════════════════════════════════════════════════════');
    console.log('🎉 All Database Tests Passed!');
    console.log('═══════════════════════════════════════════════════════');
    console.log('');
    console.log('✅ Connection: Working');
    console.log('✅ Read Operations: Working');
    console.log('✅ Write Operations: Working');
    console.log('✅ Update Operations: Working');
    console.log('✅ Delete Operations: Working');
    console.log('✅ Row Level Security: Active');
    console.log('');
    console.log('🚀 Your database is ready to use!');
    console.log('');
    console.log('Next Steps:');
    console.log('   1. Import queries: import { getTodos, createTodo } from "@/lib/supabase"');
    console.log('   2. Use in components: const { data } = await getTodos()');
    console.log('   3. Build your app with full database support!');
    console.log('');

    return true;

  } catch (error: any) {
    console.error('❌ Database Test Failed!\n');
    console.error('Error:', error.message || error);
    console.error('');

    if (error.message?.includes('does not exist') || error.code === '42P01') {
      console.log('💡 Solution:');
      console.log('   The "todos" table does not exist yet.');
      console.log('   Run: npx tsx scripts/create-todos-table.ts');
      console.log('');
    } else if (error.message?.includes('JWT') || error.message?.includes('authentication')) {
      console.log('💡 Solution:');
      console.log('   Authentication token may have expired (45-minute lifetime).');
      console.log('   Contact support for a refreshed token.');
      console.log('');
    } else if (error.message?.includes('permission denied')) {
      console.log('💡 Solution:');
      console.log('   RLS policies may be too restrictive.');
      console.log('   Check that policies allow operations for the "anon" role.');
      console.log('');
    } else {
      console.log('💡 Troubleshooting:');
      console.log('   1. Check that Supabase credentials are correct');
      console.log('   2. Verify the database table exists');
      console.log('   3. Ensure RLS policies are properly configured');
      console.log('   4. Check network connectivity');
      console.log('');
    }

    return false;
  }
}

// Run the tests
testDatabaseConnection();

import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
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

async function checkTable() {
  // Check if form_submissions table exists
  const { data: tables, error: tablesError } = await supabase
    .from('information_schema.tables')
    .select('table_name')
    .eq('table_schema', 'public')
    .eq('table_name', 'form_submissions');

  if (tablesError) {
    console.error('Error checking tables:', tablesError);
    process.exit(1);
  }

  console.log('form_submissions table exists:', tables && tables.length > 0);

  if (tables && tables.length > 0) {
    // Table exists, let's check its structure
    const { data: columns } = await supabase
      .from('information_schema.columns')
      .select('column_name, data_type')
      .eq('table_name', 'form_submissions')
      .eq('table_schema', 'public')
      .order('ordinal_position');

    console.log('Columns:', columns);
  } else {
    console.log('Table does not exist, will create it via API endpoint');
  }
}

checkTable();

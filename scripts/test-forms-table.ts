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

async function testTable() {
  // Try to query form_submissions table
  const { data, error } = await supabase
    .from('form_submissions')
    .select('*')
    .limit(1);

  if (error) {
    console.log('Table does not exist or error:', error.message);
    console.log('Need to create table');
  } else {
    console.log('Table exists! Sample data:', data);
  }
}

testTable();

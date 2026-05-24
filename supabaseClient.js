// supabaseClient.js
// Certifique-se de que o script do supabase está carregado no seu index.html
const supabaseUrl = 'https://qsdmfayaygufcbglchzi.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFzZG1mYXlheWd1ZmNiZ2xjaHppIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzk1NjQ2MzEsImV4cCI6MjA5NTE0MDYzMX0.YQgqzWAP81QVN3JjOO3hAEYxLntynvPHQitwQO1J7ZM'; 

const supabase = supabase.createClient(supabaseUrl, supabaseKey);
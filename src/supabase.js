import { createClient } from "@supabase/supabase-js";

const supabaseUrl = 'https://fckpykgpcheoozbgtbpm.supabase.co'
const supabaseAnonkey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZja3B5a2dwY2hlb296Ymd0YnBtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzAwODI3OTQsImV4cCI6MjA0NTY1ODc5NH0.yHTwKdvk3UTvGdQw3kYrlOAZlsY6r08yKv3ChC4GWg0'

export const supabase = createClient(supabaseUrl , supabaseAnonkey)
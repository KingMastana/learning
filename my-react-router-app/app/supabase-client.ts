import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://mxdcbmldudwahahgpuuo.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im14ZGNibWxkdWR3YWhhaGdwdXVvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ3NTk0MTksImV4cCI6MjA2MDMzNTQxOX0.SXcfzbH48l36Ho4ozeXVF2NGrcOwdyRXgs7HC_tKyYU";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
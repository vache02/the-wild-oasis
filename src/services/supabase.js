import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://oayckbtrsxutpeuerzdw.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9heWNrYnRyc3h1dHBldWVyemR3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTc1MTcwOTcsImV4cCI6MjAxMzA5MzA5N30.25Q1NNm0ZepFiqW3icmlUcFwIRh6MoZDV5127O_xDHg";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;

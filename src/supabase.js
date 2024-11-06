import { createClient } from "@supabase/supabase-js";


const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonkey =  import.meta.env.VITE_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl , supabaseAnonkey,{
    auth:{
        autoRefreshToken:true,
        persistSession:true,
        detectSessionInUrl:true,
        storage:window.localStorage,
        flowType:'implicit'
    }
})
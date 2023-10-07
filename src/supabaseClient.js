
import { createClient } from '@supabase/supabase-js'



export const supabase = createClient('https://heluyldjbfyghwatcrpe.supabase.co', "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhlbHV5bGRqYmZ5Z2h3YXRjcnBlIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTYwMDQ0MDQsImV4cCI6MjAxMTU4MDQwNH0.hd4SzvPBf9U5_y4hdiNvHRubtv9Y04ddRBvLx5m6MF4");
const getUserData = async (match) => { 
    return await this.supabase.from("users").select("*").eq("uuid", match);}
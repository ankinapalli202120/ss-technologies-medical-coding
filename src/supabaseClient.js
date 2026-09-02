import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://zdzractspidozdckffts.supabase.co";

const supabaseKey = "sb_publishable_82FIwi9hdRwjkCio0ZbBeg_J0T0hAyd";

export const supabase = createClient(supabaseUrl, supabaseKey);
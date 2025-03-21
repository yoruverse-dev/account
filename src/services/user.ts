'use server';

import { createClient } from '@/services/supabase/server';

export async function getUser() {
    const supabase = await createClient();
    return await supabase.from('profiles').select('*').single();
}
'use server';

import { createClient } from '@/services/supabase/server';

export async function getUser() {
    const supabase = await createClient();
    const { data, error } = await supabase.auth.getUser();
    if (error) return { error, data: null };
    return await supabase.from('profiles').select('*').eq('id', data.user.id).single();
}
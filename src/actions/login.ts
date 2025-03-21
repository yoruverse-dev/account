'use server';

import { createClient } from '@/services/supabase/server';
import { env } from '@/config/env';
import { redirect } from 'next/navigation';

interface SignInWithOAuth {
    provider: 'github' | 'discord' | 'twitch'
}

interface SignInError {
    error: string;
}

export async function signWithWithOAuth({ provider }: SignInWithOAuth): Promise<void | SignInError> {
    const supabase = await createClient();

    const { data, error } = await supabase.auth.signInWithOAuth({
        provider,
        options: {
            redirectTo: `${env.APPLICATION_URL}/auth/callback`,
        },
    });

    if (error) return { error: error.message };

    redirect(data.url);
}
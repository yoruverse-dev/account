import { createClient } from '@/services/supabase/server';

export default async function Home() {
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();

    return (
        <main>
            {user && (
                <p>
                    Hello {user.email}!
                </p>
            )}
        </main>
    );
}

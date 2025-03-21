'use client';

import { useUser } from '@/context/userContext';

export default function Home() {

    const { user } = useUser();

    return (
        <main>
            {user && (
                <p>
                    Hello {user.full_name}!
                </p>
            )}
        </main>
    );
}

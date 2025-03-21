'use client';

import { getUser } from '@/services/user';
import {
    createContext,
    useContext,
    useEffect,
    useMemo,
    useState
} from 'react';

type UserContextType = {
    user: Awaited<ReturnType<typeof getUser>>['data'] | null;
}

const UserContext = createContext<UserContextType>({
    user: null
});

export function UserProvider({ children }: React.PropsWithChildren) {
    const [user, setUser] = useState<UserContextType['user']>(null);

    useEffect(() => {
        (async () => {
            const { data, error } = await getUser();

            if (error) {
                console.error('Error fetching user:', error);
                return;
            }

            setUser(data);
        })();
    }, []);

    const value = useMemo(() => ({ user }), [user]);

    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    );
}

export function useUser() {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error('useUser must be used within a UserProvider');
    }

    return context;
}
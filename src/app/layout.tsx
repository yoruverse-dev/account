import '@/styles/globals.css';
import { sans, mono } from '@/styles/fonts';

import { cn } from '@/utils/cn';
import { UserProvider } from '@/context/userContext';

export default function RootLayout({ children }: React.PropsWithChildren) {
    return (
        <html lang='en'>
            <body className={cn(
                sans.variable, mono.variable
            )}>
                <UserProvider>
                    {children}
                </UserProvider>
            </body>
        </html>
    );
}

export { metadata } from '@/app/metadata';
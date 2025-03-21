import { YoruverseIcon } from '@/components/icons';
import { SocialButtons } from '@/components/login/socialButtons';
import Link from 'next/link';

export default function Login() {
    return (
        <main className='flex h-dvh items-center justify-center p-10'>
            <section className='max-w-md w-full text-center'>
                <YoruverseIcon className='mx-auto mb-5 size-10' />
                <h1 className='text-3xl font-bold text-zinc-50'>
                    Yoruverse <span className='text-indigo-400'>Account</span>
                </h1>
                <p>Connect with your apps across the Yoruverse</p>
                <p className='w-full flex items-center gap-2.5 truncate mb-5 mt-10'>
                    <span className='w-full h-px bg-zinc-700' />
                    Continue with
                    <span className='w-full h-px bg-zinc-700' />
                </p>
                <SocialButtons />
            </section>
            <span className='absolute bottom-5 text-zinc-300 text-sm'>
                Made with ❤️ by{' '}
                <Link href='https://github.com/yoruverse-dev/' target='_blank'>
                    Yoruverse
                </Link>
            </span>
        </main>
    );
}
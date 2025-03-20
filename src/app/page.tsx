import Link from 'next/link';

export default function Home() {
    return (
        <main>
            <h1>
                Hello Next.js 13.4!
            </h1>
            <p>
                Hello <strong>World!</strong>
            </p>
            <p>
                This is a link {' '}
                <Link href='/about'>About</Link>
            </p>
        </main>
    );
}

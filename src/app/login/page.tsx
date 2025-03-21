'use client';

import { signWithWithOAuth } from '@/actions/login';

export default function Login() {
    return (
        <div>
            <button
                onClick={() => signWithWithOAuth({ provider: 'discord' })}
            >
                Continue with Discord
            </button>
            <br />
            <button
                onClick={() => signWithWithOAuth({ provider: 'github' })}
            >
                Continue with GitHub
            </button>
            <br />
            <button
                onClick={() => signWithWithOAuth({ provider: 'twitch' })}
            >
                Continue with Twitch
            </button>
        </div>
    );
}
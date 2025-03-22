'use client';

import { signWithWithOAuth } from '@/actions/continue';
import { Button } from '@/components/button';
import { DiscordIcon, GitHubIcon, TwitchIcon } from '@/components/icons';

export function SocialButtons() {
    return (
        <div className='w-full flex items-center justify-between gap-5'>
            <Button
                variant='secondary'
                className='w-full'
                onClick={() => signWithWithOAuth({ provider: 'discord' })}
            >
                <DiscordIcon className='size-5' />
            </Button>
            <Button
                className='w-full'
                variant='secondary'
                onClick={() => signWithWithOAuth({ provider: 'github' })}
            >
                <GitHubIcon className='size-5' />
            </Button>
            <Button
                variant='secondary'
                className='w-full'
                onClick={() => signWithWithOAuth({ provider: 'twitch' })}
            >
                <TwitchIcon className='size-5' />
            </Button>
        </div>
    );
}
import { cn } from '@/utils/cn';

type ButtonProps = {
    variant?: 'primary' | 'secondary' | 'border' | 'ghost';
    icon?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({ variant = 'primary', icon, children, className, ...props }: ButtonProps) {
    return (
        <button
            className={cn(
                'flex items-center justify-center gap-2.5',
                'h-10 rounded-xl cursor-pointer font-medium text-zinc-50 transition-colors duration-300',
                icon ? 'w-10' : 'px-5',
                variant === 'primary' && 'bg-indigo-400 hover:bg-indigo-300 text-zinc-900',
                variant === 'secondary' && 'bg-zinc-800 hover:bg-zinc-700',
                variant === 'border' && 'border border-zinc-700 hover:bg-zinc-700',
                variant === 'ghost' && 'hover:text-indigo-300',
                className
            )}
            {...props}
        >
            {children}
        </button>
    );
}
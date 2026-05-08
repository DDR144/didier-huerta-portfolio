import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

interface HeadingProps {
    children: ReactNode;
    className?: string;
    as?: 'h1' | 'h2' | 'h3' | 'h4';
}

export function Heading({ children, className, as: Component = 'h2' }: HeadingProps) {
    const sizeClasses = {
        h1: 'text-4xl md:text-5xl font-extrabold tracking-tight lg:text-6xl',
        h2: 'text-3xl font-bold tracking-tight first:mt-0',
        h3: 'text-2xl font-semibold tracking-tight',
        h4: 'text-xl font-semibold tracking-tight',
    };

    return (
        <Component className={cn(sizeClasses[Component], "mb-4", className)}>
            {children}
        </Component>
    );
}

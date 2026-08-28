import Link from 'next/link';
import { Github, Linkedin } from 'lucide-react';

export function Footer() {
    return (
        <footer className="border-t bg-background">
            <div className="container mx-auto px-4 md:px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
                <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
                    Construido con Next.js, Tailwind y Shadcn/UI. © {new Date().getFullYear()} Didier Huerta.
                </p>
                <div className="flex items-center gap-4">
                    <Link href="https://github.com/DDR144" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                        <Github className="h-5 w-5" />
                        <span className="sr-only">GitHub</span>
                    </Link>
                    <Link href="https://www.linkedin.com/in/didier-huerta/" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                        <Linkedin className="h-5 w-5" />
                        <span className="sr-only">LinkedIn</span>
                    </Link>
                </div>
            </div>
        </footer>
    );
}

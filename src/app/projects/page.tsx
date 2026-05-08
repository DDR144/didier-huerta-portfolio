import { ProjectCard } from '@/components/projects/ProjectCard';
import { Heading } from '@/components/common/Heading';
import { Section } from '@/components/common/Section';
import { constructMetadata } from '@/lib/seo';

export const metadata = constructMetadata({
    title: 'Projects | Didier Portfolio',
    description: 'Showcase of my frontend engineering projects.',
});

const projects = [
    {
        title: "E-Commerce Dashboard",
        description: "A comprehensive dashboard for managing products and analytics.",
        problem: "Clients needed a centralized way to manage their inventory and view sales data without technical knowledge.",
        solution: "Built a user-friendly admin panel using Next.js App Router for speed, server actions for secure mutations, and Stripe for payments.",
        tech: ["Next.js", "TypeScript", "Prisma", "Stripe", "Recharts"],
        link: "/projects/ecommerce",
        repo: "https://github.com/your-username/ecommerce",
    },
    {
        title: "SaaS Landing Page",
        description: "High-performance landing page with stunning animations.",
        problem: "The product needed a marketing site that converted visitors but also loaded instantly to improve SEO scores.",
        solution: "Implemented a static site using Next.js with Framer Motion for scroll-triggered animations that don't impact Core Web Vitals.",
        tech: ["React", "Tailwind", "Framer Motion"],
        link: "/projects/saas-landing",
        repo: "https://github.com/your-username/saas",
    },
    {
        title: "Task Management App",
        description: "Real-time task collaboration tool.",
        problem: "Remote teams struggle with keeping task lists synchronized in real-time.",
        solution: "Leveraged Supabase Realtime subscriptions to update UI state instantly across all connected clients using optimistic updates.",
        tech: ["React", "Zustand", "dnd-kit", "Supabase"],
        link: "/projects/task-manager",
        repo: "https://github.com/your-username/task-manager",
    },
    {
        title: "Weather Dashboard",
        description: "Weather forecast application with location detection.",
        problem: "Existing weather apps were cluttered with ads and slow to load.",
        solution: "Created a minimal, fast PWA that caches weather data locally and uses server-side rendering for initial paint.",
        tech: ["Next.js", "OpenWeatherMap API", "PWA"],
        link: "/projects/weather",
        repo: "https://github.com/your-username/weather",
    },
];

export default function ProjectsPage() {
    return (
        <Section>
            <div className="max-w-4xl mx-auto mb-12">
                <Heading as="h1">Projects</Heading>
                <p className="text-xl text-muted-foreground">
                    A collection of projects exploring performance, accessibility, and modern UI patterns.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
                {projects.map((project, index) => (
                    <ProjectCard key={project.title} {...project} index={index} />
                ))}
            </div>
        </Section>
    );
}

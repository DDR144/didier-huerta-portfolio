import { ProjectCard } from '@/components/projects/ProjectCard';
import { Heading } from '@/components/common/Heading';
import { Section } from '@/components/common/Section';
import { constructMetadata } from '@/lib/seo';

export const metadata = constructMetadata({
    title: 'Proyectos | Didier Huerta',
    description: 'Proyectos de ingeniería frontend — rendimiento, accesibilidad y patrones de UI modernos.',
});

const projects = [
    {
        title: 'DevBlog',
        description: 'Plataforma de blog técnico para desarrolladores con panel de administración.',
        problem: 'Necesitaba un espacio propio para publicar artículos técnicos con control total sobre el contenido, SEO y diseño.',
        solution: 'Construí una plataforma completa con Next.js App Router, Prisma como ORM, PostgreSQL, y un panel admin protegido con JWT para gestionar posts, categorías y tags.',
        tech: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'shadcn/ui', 'MDX'],
        link: 'https://github.com/DDR144/devblog',
        repo: 'https://github.com/DDR144/devblog',
    },
    {
        title: 'Joyas Dido',
        description: 'Landing page para joyería artesanal con Astro y cero JavaScript del lado del cliente.',
        problem: 'Un joyero artesanal necesitaba presencia digital para mostrar su trabajo y recibir encargos personalizados por WhatsApp.',
        solution: 'Diseñé un sitio estático con Astro 7, CSS vanilla y tipografía serif para transmitir elegancia. Cero JS del lado del cliente garantiza carga instantánea y SEO perfecto.',
        tech: ['Astro', 'TypeScript', 'CSS Vanilla', 'Puppeteer'],
        link: 'https://github.com/DDR144/joyas-dido',
        repo: 'https://github.com/DDR144/joyas-dido',
    },
    {
        title: 'Task Management App',
        description: 'App Kanban full-stack con autenticación, drag-and-drop y gestión de tareas.',
        problem: 'Necesitaba una herramienta simple pero completa para gestionar tareas personales con autenticación segura e interfaz interactiva.',
        solution: 'Implementé un tablero Kanban con Next.js 16, Better Auth para sesiones, Drizzle ORM para la base de datos, y Server Actions para mutaciones con control de concurrencia.',
        tech: ['Next.js', 'Better Auth', 'Drizzle ORM', 'PostgreSQL', 'shadcn/ui'],
        link: 'https://github.com/DDR144/task-management-app',
        repo: 'https://github.com/DDR144/task-management-app',
    },
];

export default function ProjectsPage() {
    return (
        <Section>
            <div className="max-w-4xl mx-auto mb-12">
                <Heading as="h1">Proyectos</Heading>
                <p className="text-xl text-muted-foreground">
                    Proyectos reales explorando rendimiento, accesibilidad y patrones de arquitectura modernos.
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

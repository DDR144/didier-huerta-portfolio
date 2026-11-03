export interface Project {
  slug: string;
  title: string;
  description: string;
  problem: string;
  solution: string;
  tech: string[];
  link?: string;
  repo?: string;
  image?: string;
  year: string;
  role: string;
}

export const projects: Project[] = [
  {
    slug: 'devblog',
    title: 'DevBlog',
    description: 'Plataforma de blog técnico para desarrolladores con panel de administración.',
    problem: 'Necesitaba un espacio propio para publicar artículos técnicos con control total sobre el contenido, SEO y diseño.',
    solution: 'Construí una plataforma completa con Next.js App Router, Prisma como ORM, PostgreSQL, y un panel admin protegido con JWT para gestionar posts, categorías y tags.',
    tech: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'shadcn/ui', 'MDX'],
    link: 'https://github.com/DDR144/devblog',
    repo: 'https://github.com/DDR144/devblog',
    year: '2025',
    role: 'Full Stack Developer',
  },
  {
    slug: 'joyas-dido',
    title: 'Joyas Dido',
    description: 'Landing page para joyería artesanal con Astro y cero JavaScript del lado del cliente.',
    problem: 'Un joyero artesanal necesitaba presencia digital para mostrar su trabajo y recibir encargos personalizados por WhatsApp.',
    solution: 'Diseñé un sitio estático con Astro 7, CSS vanilla y tipografía serif para transmitir elegancia. Cero JS del lado del cliente garantiza carga instantánea y SEO perfecto.',
    tech: ['Astro', 'TypeScript', 'CSS Vanilla', 'Puppeteer'],
    link: 'https://github.com/DDR144/joyas-dido',
    repo: 'https://github.com/DDR144/joyas-dido',
    year: '2024',
    role: 'Frontend Developer',
  },
  {
    slug: 'task-management-app',
    title: 'Task Management App',
    description: 'App Kanban full-stack con autenticación, drag-and-drop y gestión de tareas.',
    problem: 'Necesitaba una herramienta simple pero completa para gestionar tareas personales con autenticación segura e interfaz interactiva.',
    solution: 'Implementé un tablero Kanban con Next.js 16, Better Auth para sesiones, Drizzle ORM para la base de datos, y Server Actions para mutaciones con control de concurrencia.',
    tech: ['Next.js', 'Better Auth', 'Drizzle ORM', 'PostgreSQL', 'shadcn/ui'],
    link: 'https://github.com/DDR144/task-management-app',
    repo: 'https://github.com/DDR144/task-management-app',
    year: '2026',
    role: 'Full Stack Developer',
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getProjectSlugs(): string[] {
  return projects.map((p) => p.slug);
}
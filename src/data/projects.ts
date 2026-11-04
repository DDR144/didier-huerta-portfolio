export interface ProjectPlane {
  title: string;
  body: string;
}

export interface ProjectCaptures {
  /** Qué debe mostrar la captura principal (16:10). */
  primary: string;
  /** Qué deben mostrar las dos capturas de detalle (4:3). */
  secondary: string[];
  /** Ruta pública del archivo de la captura principal, cuando exista. */
  primarySrc?: string;
  /** Rutas públicas de las capturas de detalle, en el mismo orden que `secondary`. */
  secondarySrc?: string[];
}

export interface Project {
  slug: string;
  title: string;
  description: string;
  problem: string;
  solution: string;
  outcome?: string;
  tech: string[];
  planes?: ProjectPlane[];
  captures?: ProjectCaptures;
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
    outcome:
      'Artículos en Markdown con SEO por ruta y un panel donde el contenido se gestiona sin tocar código.',
    tech: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'shadcn/ui', 'MDX'],
        planes: [
      { title: 'Interfaz', body: 'Next.js App Router con React y componentes de shadcn/ui.' },
      { title: 'Datos', body: 'PostgreSQL modelado con Prisma.' },
      { title: 'Contenido', body: 'Artículos en MDX.' },
      { title: 'Administración', body: 'Panel protegido con JWT para posts, categorías y tags.' },
    ],
    captures: {
      primary: 'Listado de artículos con navegación por categorías y tags',
      secondary: [
        'Editor Markdown con previsualización del artículo',
        'Panel de administración: posts, categorías y tags',
      ],
    },
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
    outcome:
      'Carga instantánea y SEO completo, con un flujo de encargo que termina en WhatsApp sin formularios intermedios.',
    tech: ['Astro', 'TypeScript', 'CSS Vanilla', 'Puppeteer'],
        planes: [
      { title: 'Sitio', body: 'Astro 7 con generación estática.' },
      { title: 'Estilos', body: 'CSS vanilla y tipografía serif.' },
      { title: 'JavaScript en el cliente', body: 'Ninguno: el sitio se entrega como HTML y CSS.' },
      { title: 'Encargos', body: 'El flujo termina en WhatsApp, sin formularios intermedios.' },
    ],
    captures: {
      primary: 'Portada con el catálogo de piezas artesanales',
      secondary: ['Detalle de una pieza', 'Llamado a encargo que abre WhatsApp'],
    },
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
    outcome:
      'Tareas con prioridades y fechas límite, movidas por drag-and-drop y sin escrituras concurrentes que se pisen.',
    tech: ['Next.js', 'Better Auth', 'Drizzle ORM', 'PostgreSQL', 'shadcn/ui'],
        planes: [
      { title: 'Interfaz', body: 'Tablero Kanban con drag-and-drop en Next.js 16.' },
      { title: 'Sesiones', body: 'Better Auth para autenticación.' },
      { title: 'Datos', body: 'PostgreSQL con Drizzle ORM.' },
      { title: 'Mutaciones', body: 'Server Actions con control de concurrencia.' },
    ],
    captures: {
      primary: 'Tablero Kanban de un proyecto con sus columnas',
      secondary: ['Tarea abierta con prioridad y fecha límite', 'Pantalla de inicio de sesión'],
    },
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
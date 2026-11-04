export interface ExperienceHighlight {
  text: string;
}

export interface Experience {
  position: string;
  company: string;
  location: string;
  period: string;
  highlights: string[];
}

export interface Education {
  institution: string;
  program: string;
  detail: string;
}

export const profile = {
  name: 'Didier Huerta Rojas',
  role: 'Desarrollador Full Stack',
  location: 'Lima, Perú',
  availability: 'Disponibilidad inmediata',
  availabilityDetail: 'Full Stack, frontend o backend. Presencial, híbrido o remoto desde Lima, Perú.',
  email: 'didier.huerta.dev@gmail.com',
  eyebrow: 'Desarrollador Full Stack · Lima, Perú · Disponibilidad inmediata',
  headline: 'Aplicaciones web completas, del modelo de datos a la interfaz.',
  lead:
    'Trabajo con TypeScript, React, Next.js, Node.js, NestJS, Java y Spring Boot sobre PostgreSQL. Construyo de extremo a extremo, con pruebas automatizadas, integración continua y despliegue en producción, y documento las decisiones para que otro equipo pueda continuar.',
  stats: [
    { value: '20', label: 'páginas en producción' },
    { value: '4', label: 'proyectos con ADR y pruebas' },
    { value: '68', label: 'pruebas automatizadas' },
  ],
  links: [
    { label: 'Correo', value: 'Formulario de contacto', href: '/contact' },
    { label: 'Email', value: 'didier.huerta.dev@gmail.com', href: 'mailto:didier.huerta.dev@gmail.com' },
    { label: 'LinkedIn', value: '/in/didier-huerta', href: 'https://www.linkedin.com/in/didier-huerta/' },
    { label: 'GitHub', value: '/DDR144', href: 'https://github.com/DDR144' },
  ],
}

export const experiences: Experience[] = [
  {
    position: 'Desarrollador Full Stack',
    company: 'NHL Decoración Comercial',
    location: 'Lima, Perú',
    period: 'dic 2025 — abr 2026',
    highlights: [
      'Implementé 20 de las 22 páginas de servicio del sitio corporativo de Digimedia con Next.js y React: contenido, metadatos SEO y diseño responsive. El sitio está en producción.',
      'Desarrollé en el panel de administración el editor de plantillas de WhatsApp: texto enriquecido, previsualización y cola de campañas, con modo oscuro.',
      'Estandaricé el header y footer compartidos traduciendo diseños de Figma a componentes reutilizables, y mejoré rendimiento y accesibilidad de las páginas de servicio.',
      'Colaboré en un flujo por ramas con Git y GitHub e integré funcionalidades backend mediante APIs REST.',
    ],
  },
]

export const education: Education[] = [
  {
    institution: 'Instituto IDAT',
    program: 'Desarrollo de Sistemas de Información',
    detail: 'Egresado · ene 2024 – abr 2026',
  },
]

export const languages = [
  {
    institution: 'Instituto Cultural Peruano Británico',
    program: 'Inglés avanzado',
    detail: 'Lectura de documentación técnica y comunicación profesional',
  },
]

export const process = [
  {
    step: '01',
    title: 'Entender el problema',
    body: 'Antes de la primera línea pregunto qué tiene que lograr el sitio y quién lo va a usar. En Joyas Dido eso significó un flujo de encargo por WhatsApp, no un carrito.',
  },
  {
    step: '02',
    title: 'Elegir la arquitectura',
    body: 'Estático cuando alcanza, full-stack cuando hace falta. Astro sin JavaScript para la joyería; Next.js con Server Actions para el Kanban.',
  },
  {
    step: '03',
    title: 'Construir por capas',
    body: 'Datos, componentes y páginas separados. TypeScript en los bordes, validación en el servidor y componentes accesibles desde el inicio.',
  },
  {
    step: '04',
    title: 'Medir y ajustar',
    body: 'Core Web Vitals, contraste y navegación por teclado antes de entregar. Si una decisión no se sostiene en métricas, se cambia.',
  },
]

export const criteria = [
  { title: 'Accesible por defecto', body: 'contraste AA, foco visible y navegación por teclado.' },
  { title: 'Rápido donde se nota', body: 'renderizado estático cuando el contenido no cambia por usuario.' },
  { title: 'Lógica en el servidor', body: 'validación y permisos fuera del cliente, siempre.' },
  { title: 'Fácil de retomar', body: 'nombres claros, componentes pequeños y decisiones documentadas.' },
]

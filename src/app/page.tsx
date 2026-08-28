'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Code2, Layers, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Section } from '@/components/common/Section';
import { Heading } from '@/components/common/Heading';

const stack = [
  'Next.js',
  'React',
  'TypeScript',
  'Tailwind CSS',
  'Shadcn/UI',
  'Framer Motion',
  'Node.js',
  'PostgreSQL',
  'Prisma',
  'Drizzle ORM',
  'Astro',
];

const featuredProjects = [
  {
    title: 'DevBlog',
    description:
      'Plataforma de blog técnico para desarrolladores con panel de administración, renderizado de Markdown y SEO optimizado.',
    tech: ['Next.js', 'Prisma', 'PostgreSQL', 'shadcn/ui', 'MDX'],
    link: 'https://github.com/DDR144/devblog',
    repo: 'https://github.com/DDR144/devblog',
  },
  {
    title: 'Joyas Dido',
    description:
      'Landing page para joyería artesanal. Sitio estático con Astro, cero JavaScript del lado del cliente y diseño responsive.',
    tech: ['Astro', 'TypeScript', 'CSS Vanilla'],
    link: 'https://github.com/DDR144/joyas-dido',
    repo: 'https://github.com/DDR144/joyas-dido',
  },
  {
    title: 'Task Management App',
    description:
      'App Kanban con autenticación, drag-and-drop, prioridades y fechas límite. Full-stack con Server Actions.',
    tech: ['Next.js', 'Better Auth', 'Drizzle ORM', 'PostgreSQL'],
    link: 'https://github.com/DDR144/task-management-app',
    repo: 'https://github.com/DDR144/task-management-app',
  },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <Section className="flex flex-col items-start justify-center min-h-[80vh] pt-24 md:pt-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl"
        >
          <Badge variant="secondary" className="mb-4">
            Desarrollador Full Stack — disponible para trabajar
          </Badge>
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl mb-6">
            Construyendo
            <span className="text-primary block">experiencias web modernas.</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl leading-relaxed">
            Creo aplicaciones web accesibles, performantes y pixel-perfect.
            Enfocado en los ecosistemas de React y Next.js para entregar
            interfaces de usuario excepcionales.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="h-12 px-8 text-base">
              <Link href="/projects">
                Ver Proyectos <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="h-12 px-8 text-base"
            >
              <Link href="/contact">Contáctame</Link>
            </Button>
          </div>
        </motion.div>
      </Section>

      {/* Stack Section */}
      <Section className="bg-muted/50">
        <div className="text-center mb-12">
          <Heading as="h2">Stack Técnico</Heading>
          <p className="text-muted-foreground">
            Tecnologías que utilizo para construir aplicaciones robustas.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 max-w-4xl mx-auto">
          {stack.map((tech, index) => (
            <motion.div
              key={tech}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <Badge
                variant="outline"
                className="text-base py-2 px-4 hover:bg-background transition-colors cursor-default"
              >
                {tech}
              </Badge>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Featured Projects */}
      <Section>
        <div className="flex items-center justify-between mb-12">
          <div>
            <Heading as="h2">Proyectos Destacados</Heading>
            <p className="text-muted-foreground">Algunos de mis trabajos recientes.</p>
          </div>
          <Button variant="ghost" asChild className="hidden md:inline-flex">
            <Link href="/projects">
              Ver todos los proyectos <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col overflow-hidden group hover:border-primary/50 transition-colors">
                <div className="aspect-video bg-muted relative overflow-hidden">
                  {/* Placeholder for project screenshot */}
                  <div className="absolute inset-0 flex items-center justify-center text-muted-foreground/20">
                    <Code2 className="h-12 w-12" />
                  </div>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors" />
                </div>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="text-muted-foreground text-sm mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <Badge key={t} variant="secondary" className="text-xs">
                        {t}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="pt-0">
                  <div className="flex w-full gap-2">
                    <Button asChild size="sm" className="w-full">
                      <Link href={project.link}>Detalles</Link>
                    </Button>
                    <Button
                      asChild
                      size="sm"
                      variant="outline"
                      className="w-full"
                    >
                      <Link href={project.repo} target="_blank">
                        Código
                      </Link>
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
        <div className="mt-8 text-center md:hidden">
          <Button variant="outline" asChild>
            <Link href="/projects">Ver todos los proyectos</Link>
          </Button>
        </div>
      </Section>

      {/* Value Props */}
      <Section className="border-t">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="flex flex-col gap-2">
            <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
              <Zap className="h-5 w-5 text-primary" />
            </div>
            <h3 className="font-bold text-lg">Rendimiento Primero</h3>
            <p className="text-muted-foreground text-sm">
              Optimizado para Core Web Vitals. Tiempos de carga rápidos e
              interacciones fluidas son innegociables.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
              <Layers className="h-5 w-5 text-primary" />
            </div>
            <h3 className="font-bold text-lg">Arquitectura Limpia</h3>
            <p className="text-muted-foreground text-sm">
              Bases de código escalables con separación clara de responsabilidades.
              Fácil de mantener y extender.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
              <Code2 className="h-5 w-5 text-primary" />
            </div>
            <h3 className="font-bold text-lg">Stack Moderno</h3>
            <p className="text-muted-foreground text-sm">
              Aprovechando las últimas funcionalidades de Next.js, React y TypeScript
              para soluciones robustas.
            </p>
          </div>
        </div>
      </Section>
    </div>
  );
}

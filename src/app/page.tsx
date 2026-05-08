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
  'Zustand',
  'Framer Motion',
  'Node.js',
  'PostgreSQL',
];

const featuredProjects = [
  {
    title: 'E-Commerce Dashboard',
    description:
      'A comprehensive dashboard for managing products, orders, and analytics. Built with Next.js App Router and Server Actions.',
    tech: ['Next.js', 'TypeScript', 'Prisma', 'Stripe'],
    link: '/projects/ecommerce',
    repo: 'https://github.com/your-username/ecommerce',
  },
  {
    title: 'SaaS Landing Page',
    description:
      'High-performance landing page with stunning animations and SEO optimization.',
    tech: ['React', 'Tailwind', 'Framer Motion'],
    link: '/projects/saas-landing',
    repo: 'https://github.com/your-username/saas',
  },
  {
    title: 'Task Management App',
    description:
      'Real-time task collaboration tool with drag-and-drop support.',
    tech: ['React', 'Zustand', 'dnd-kit', 'Supabase'],
    link: '/projects/task-manager',
    repo: 'https://github.com/your-username/task-manager',
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
            Frontend Engineer available for work
          </Badge>
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl mb-6">
            Building
            <span className="text-primary block">modern web experiences.</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl leading-relaxed">
            I craft accessible, pixel-perfect, and performant web applications.
            Focused on React ecosystems to deliver exceptional user interfaces.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="h-12 px-8 text-base">
              <Link href="/projects">
                View Projects <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="h-12 px-8 text-base"
            >
              <Link href="/contact">Contact Me</Link>
            </Button>
          </div>
        </motion.div>
      </Section>

      {/* Stack Section */}
      <Section className="bg-muted/50">
        <div className="text-center mb-12">
          <Heading as="h2">Technical Stack</Heading>
          <p className="text-muted-foreground">
            Technologies I use to build robust applications.
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
            <Heading as="h2">Featured Projects</Heading>
            <p className="text-muted-foreground">Some of my recent work.</p>
          </div>
          <Button variant="ghost" asChild className="hidden md:inline-flex">
            <Link href="/projects">
              View all projects <ArrowRight className="ml-2 h-4 w-4" />
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
                      <Link href={project.link}>Details</Link>
                    </Button>
                    <Button
                      asChild
                      size="sm"
                      variant="outline"
                      className="w-full"
                    >
                      <Link href={project.repo} target="_blank">
                        Code
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
            <Link href="/projects">View all projects</Link>
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
            <h3 className="font-bold text-lg">Performance First</h3>
            <p className="text-muted-foreground text-sm">
              Optimized for Core Web Vitals. Fast load times and smooth
              interactions are non-negotiable.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
              <Layers className="h-5 w-5 text-primary" />
            </div>
            <h3 className="font-bold text-lg">Clean Architecture</h3>
            <p className="text-muted-foreground text-sm">
              Scalable codebases with clear separation of concerns. Easy to
              maintain and extend.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
              <Code2 className="h-5 w-5 text-primary" />
            </div>
            <h3 className="font-bold text-lg">Modern Stack</h3>
            <p className="text-muted-foreground text-sm">
              Leveraging the latest features of Next.js, React, and TypeScript
              for robust solutions.
            </p>
          </div>
        </div>
      </Section>
    </div>
  );
}

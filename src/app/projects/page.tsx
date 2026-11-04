import type { Metadata } from 'next';
import Link from 'next/link';
import { ImageIcon } from 'lucide-react';

import NextImage from 'next/image';

import { projects } from '@/data/projects';

export const metadata: Metadata = {
  title: 'Proyectos | Didier Huerta',
  description:
    'Tres proyectos reales con el problema, la solución y lo que quedó funcionando: DevBlog, Joyas Dido y Task Management App.',
};

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-[1200px] px-6 pb-16 md:px-8">
      <div className="pb-8 pt-14">
        <p className="font-mono text-[11px] uppercase tracking-[0.09em] text-muted-foreground">Proyectos</p>
        <h1 className="mt-2.5 max-w-[24ch] text-4xl font-extrabold leading-[1.05] tracking-[-0.04em] sm:text-5xl">
          Tres proyectos, con el detalle dentro
        </h1>
        <p className="mt-3.5 max-w-[62ch] text-[17px] leading-relaxed text-muted-foreground">
          Abre cualquiera para leer el caso completo: el problema, qué construí, qué quedó funcionando y cómo está
          armado. Los marcos muestran el espacio reservado: las capturas reales aún no están tomadas.
        </p>
      </div>

      <ul className="grid gap-6 pb-2 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <li key={project.slug} className="flex">
            <Link
              href={`/projects/${project.slug}`}
              className="group flex h-full w-full flex-col overflow-hidden rounded-lg border border-border bg-card text-left shadow-sm transition-[border-color,box-shadow] hover:border-muted-foreground hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              <div className="relative flex aspect-[16/10] flex-col items-center justify-center gap-2 border-b border-border bg-muted text-muted-foreground">
                {project.captures?.primarySrc ? (
                  <NextImage
                    src={project.captures.primarySrc}
                    alt={`Captura de ${project.title}`}
                    fill
                    sizes="(min-width: 1024px) 380px, (min-width: 768px) 46vw, 92vw"
                    className="object-cover"
                  />
                ) : (
                  <>
                    <ImageIcon className="h-8 w-8 opacity-50" aria-hidden="true" />
                    <span className="font-mono text-[10px] uppercase tracking-[0.09em]">Captura pendiente</span>
                  </>
                )}
              </div>
              <div className="flex flex-1 flex-col gap-2.5 p-5">
                <span className="font-mono text-[10px] uppercase tracking-[0.09em] text-muted-foreground">
                  {project.year} · {project.role}
                </span>
                <span className="text-[19px] font-bold tracking-[-0.02em]">{project.title}</span>
                <span className="text-[13px] leading-[1.55] text-muted-foreground">{project.description}</span>
                <div className="mt-auto flex flex-wrap gap-1.5 pt-1">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-border px-2.5 py-[2px] font-mono text-[10px] uppercase tracking-[0.05em] text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <span className="flex items-center justify-between border-t border-border px-5 py-3 text-[13px] font-semibold">
                Ver el caso
                <span
                  className="text-muted-foreground transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                >
                  →
                </span>
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

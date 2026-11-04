import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import { CaptureFrame } from '@/components/projects/CaptureFrame';
import { getProjectBySlug, projects } from '@/data/projects';

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) return { title: 'Proyecto no encontrado | Didier Huerta' };

  return {
    title: `${project.title} | Didier Huerta`,
    description: project.description,
  };
}

export default async function ProjectCasePage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) notFound();

  return (
    <div className="mx-auto max-w-[1200px] px-6 pb-20 md:px-8">
      <Link
        href="/projects"
        className="mt-6 inline-flex items-center gap-2 py-1.5 text-[13px] font-semibold text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
      >
        <span aria-hidden="true">←</span> Todos los proyectos
      </Link>

      <div className="flex flex-wrap items-end justify-between gap-8 border-b border-border pb-7 pt-5">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.09em] text-muted-foreground">
            Caso · #{project.slug}
          </p>
          <h1 className="mt-2 text-4xl font-extrabold leading-[1.05] tracking-[-0.04em]">{project.title}</h1>
          <p className="mt-2.5 max-w-[60ch] text-base text-muted-foreground">{project.description}</p>
        </div>
      </div>

      <div className="grid items-start gap-14 pt-8 lg:grid-cols-[220px_1fr]">
        <aside className="flex flex-col gap-6">
          <dl>
            <dt className="mb-1.5 font-mono text-[10px] uppercase tracking-[0.09em] text-muted-foreground">Año</dt>
            <dd className="text-sm font-medium">{project.year}</dd>
          </dl>
          <dl>
            <dt className="mb-1.5 font-mono text-[10px] uppercase tracking-[0.09em] text-muted-foreground">Rol</dt>
            <dd className="text-sm font-medium">{project.role}</dd>
          </dl>
          <dl>
            <dt className="mb-1.5 font-mono text-[10px] uppercase tracking-[0.09em] text-muted-foreground">Stack</dt>
            <dd className="mt-1 flex flex-wrap gap-1.5">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-border px-2.5 py-[2px] font-mono text-[10px] uppercase tracking-[0.05em] text-muted-foreground"
                >
                  {tech}
                </span>
              ))}
            </dd>
          </dl>
          <div className="flex flex-col gap-2">
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-9 w-full items-center justify-center rounded-md bg-primary px-3.5 text-[13px] font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                Ver proyecto
              </a>
            )}
            {project.repo && (
              <a
                href={project.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-9 w-full items-center justify-center rounded-md border border-input px-3.5 text-[13px] font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                Código
              </a>
            )}
          </div>
        </aside>

        <div>
          <div className="mb-8 border-b border-border pb-7">
            <CaptureFrame
              src={project.captures?.primarySrc ?? project.image}
              alt={`Captura de ${project.title}`}
              label="Vista principal"
              caption={project.captures?.primary ?? 'Vista principal del proyecto'}
              ratio="hero"
            />
          </div>

          <section>
            <h2 className="mb-3 text-[22px] font-bold tracking-[-0.025em]">El problema</h2>
            <p className="max-w-[72ch] text-[15px] leading-[1.68]">{project.problem}</p>
          </section>

          <section className="mt-8 border-t border-border pt-7">
            <h2 className="mb-3 text-[22px] font-bold tracking-[-0.025em]">Qué construí</h2>
            <p className="max-w-[72ch] text-[15px] leading-[1.68]">{project.solution}</p>
          </section>

          <section className="mt-8 border-t border-border pt-7">
            <h2 className="mb-3 text-[22px] font-bold tracking-[-0.025em]">Qué quedó funcionando</h2>
            <p className="max-w-[72ch] text-[15px] font-medium leading-[1.68]">{project.outcome}</p>
            <p className="mt-3 font-mono text-[13px] uppercase tracking-[0.04em] text-muted-foreground">
              Falta la medición: métricas y fechas se añaden cuando estén tomadas.
            </p>
          </section>

          {project.captures && project.captures.secondary.length > 0 && (
            <section className="mt-8 border-t border-border pt-7">
              <h2 className="mb-3 text-[22px] font-bold tracking-[-0.025em]">Capturas</h2>
              <div className="grid gap-5 sm:grid-cols-2">
                {project.captures.secondary.map((caption, index) => (
                  <CaptureFrame
                    key={caption}
                    src={project.captures?.secondarySrc?.[index]}
                    alt={caption}
                    label="Detalle"
                    caption={caption}
                    ratio="detail"
                  />
                ))}
              </div>
            </section>
          )}

          {project.planes && project.planes.length > 0 && (
            <section className="mt-8 border-t border-border pt-7">
              <h2 className="mb-3 text-[22px] font-bold tracking-[-0.025em]">Cómo está armado</h2>
              <div className="grid gap-4 sm:grid-cols-2">
                {project.planes.map((plane) => (
                  <div key={plane.title} className="rounded-lg border border-border px-4 py-3.5">
                    <h3 className="mb-1.5 font-mono text-[10px] uppercase tracking-[0.09em] text-muted-foreground">
                      {plane.title}
                    </h3>
                    <p className="text-sm leading-[1.55]">{plane.body}</p>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  );
}

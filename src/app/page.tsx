import type { Metadata } from 'next';
import Link from 'next/link';
import { projects } from '@/data/projects';
import { criteria, education, experiences, languages, process, profile } from '@/data/profile';

export const metadata: Metadata = {
  title: 'Didier Huerta | Desarrollador Full Stack',
  description:
    'Desarrollador Full Stack en Lima, Perú. TypeScript, React, Next.js, Node.js, NestJS, Java y Spring Boot sobre PostgreSQL. Disponibilidad inmediata, presencial o remoto.',
};

export default function Home() {
  return (
    <div>
      <div className="mx-auto max-w-[1200px] px-6 md:px-8">
        <section
          className="grid gap-12 py-16 lg:grid-cols-[1.5fr_1fr] lg:items-start lg:gap-16 lg:py-20"
          aria-labelledby="hero-title"
        >
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.09em] text-muted-foreground">
              {profile.eyebrow}
            </p>
            <h1
              id="hero-title"
              className="mt-3.5 text-4xl font-extrabold leading-[1.04] tracking-[-0.04em] sm:text-5xl lg:text-[58px]"
            >
              {profile.headline.split(',')[0]},
              <span className="text-muted-foreground"> {profile.headline.split(',').slice(1).join(',').trim()}</span>
            </h1>
            <p className="mt-6 max-w-[54ch] text-lg leading-relaxed text-muted-foreground">{profile.lead}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#experiencia"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-primary px-6 text-[15px] font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                Ver experiencia <span aria-hidden="true">↓</span>
              </a>
              <Link
                href="/contact"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-md border border-input px-6 text-[15px] font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                Escríbeme
              </Link>
            </div>
            <dl className="mt-9 flex flex-wrap gap-8 border-t border-border pt-6">
              {profile.stats.map((stat) => (
                <div key={stat.label}>
                  <dd className="text-[26px] font-bold tracking-[-0.03em]">{stat.value}</dd>
                  <dt className="mt-1.5 font-mono text-[10px] uppercase tracking-[0.08em] text-muted-foreground">
                    {stat.label}
                  </dt>
                </div>
              ))}
            </dl>
          </div>

          <aside
            className="rounded-[10px] border border-border bg-card p-6 shadow-sm"
            aria-label="Contacto y disponibilidad"
          >
            <p className="flex items-center gap-2 text-[13px] font-semibold">
              <span className="h-2 w-2 rounded-full bg-foreground ring-4 ring-secondary" aria-hidden="true" />
              {profile.availability}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{profile.availabilityDetail}</p>
            <div className="mt-5 flex flex-col border-t border-border">
              {profile.links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="flex items-center gap-3 border-b border-border py-3 text-sm font-medium transition-colors hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                >
                  <span className="w-[76px] flex-none font-mono text-[10px] uppercase tracking-[0.08em] text-muted-foreground">
                    {link.label}
                  </span>
                  <span className="mr-auto">{link.value}</span>
                  <span className="text-muted-foreground" aria-hidden="true">
                    →
                  </span>
                </a>
              ))}
            </div>
          </aside>
        </section>

        <section
          className="border-t border-border py-16"
          id="experiencia"
          aria-labelledby="experience-title"
        >
          <div className="flex flex-wrap items-end justify-between gap-8">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.09em] text-muted-foreground">
                01 / experiencia
              </p>
              <h2 id="experience-title" className="mt-2.5 text-3xl font-bold tracking-[-0.035em]">
                Trabajo profesional y formación
              </h2>
              <p className="mt-2 max-w-[60ch] text-[15px] text-muted-foreground">
                Un rol en producción dentro de un equipo de 12 desarrolladores, y la formación que lo sostiene.
              </p>
            </div>
          </div>

          {experiences.map((experience) => (
            <article
              key={`${experience.company}-${experience.position}`}
              className="mt-8 grid gap-[18px] border-t border-border pt-8"
            >
              <div className="grid grid-cols-[44px_1fr_auto] items-baseline gap-5">
                <span className="font-mono text-xs text-muted-foreground">01</span>
                <div>
                  <h3 className="text-[22px] font-bold tracking-[-0.025em]">{experience.position}</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground">
                    {experience.company} · {experience.location}
                  </p>
                </div>
                <span className="text-right font-mono text-[11px] uppercase leading-[1.7] tracking-[0.06em] text-muted-foreground">
                  {experience.period}
                </span>
              </div>
              <ul className="flex max-w-[104ch] flex-col gap-2.5 md:pl-16">
                {experience.highlights.map((highlight) => (
                  <li key={highlight} className="flex gap-3 text-sm leading-relaxed">
                    <span className="flex-none text-muted-foreground" aria-hidden="true">
                      —
                    </span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}

          <div className="mt-10 grid gap-8 border-t border-border pt-8 md:grid-cols-2 md:pl-16">
            <div>
              <h3 className="mb-3 font-mono text-[10px] uppercase tracking-[0.09em] text-muted-foreground">
                Formación
              </h3>
              {education.map((item) => (
                <div key={item.institution}>
                  <p className="text-sm font-medium">
                    {item.institution} — {item.program}
                  </p>
                  <span className="mt-1 block text-[13px] text-muted-foreground">{item.detail}</span>
                </div>
              ))}
            </div>
            <div>
              <h3 className="mb-3 font-mono text-[10px] uppercase tracking-[0.09em] text-muted-foreground">
                Idiomas
              </h3>
              {languages.map((item) => (
                <div key={item.institution}>
                  <p className="text-sm font-medium">
                    {item.institution} — {item.program}
                  </p>
                  <span className="mt-1 block text-[13px] text-muted-foreground">{item.detail}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-border py-16" id="proyectos" aria-labelledby="projects-title">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.09em] text-muted-foreground">
                02 / proyectos
              </p>
              <h2 id="projects-title" className="mt-2.5 text-3xl font-bold tracking-[-0.035em]">
                Tres proyectos, el detalle en cada caso
              </h2>
              <p className="mt-2 max-w-[60ch] text-[15px] text-muted-foreground">
                El problema, la solución, lo que quedó funcionando y cómo está armado: cada caso completo vive en su
                propia página.
              </p>
            </div>
            <Link
              href="/projects"
              className="inline-flex h-9 items-center justify-center rounded-md border border-input px-3.5 text-[13px] font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              Ver los tres casos
            </Link>
          </div>

          <ul className="mt-8 grid gap-4 sm:grid-cols-3">
            {projects.map((project) => (
              <li key={project.slug} className="flex">
                <Link
                  href={`/projects/${project.slug}`}
                  className="group flex h-full w-full flex-col gap-2.5 rounded-lg border border-border bg-card p-5 shadow-sm transition-[border-color,box-shadow] hover:border-muted-foreground hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                >
                  <span className="font-mono text-[10px] uppercase tracking-[0.09em] text-muted-foreground">
                    {project.year} · {project.role}
                  </span>
                  <span className="text-[17px] font-bold tracking-[-0.02em]">{project.title}</span>
                  <span className="text-[13px] leading-[1.55] text-muted-foreground">{project.description}</span>
                  <span className="mt-auto pt-2 text-[13px] font-semibold">
                    Ver el caso{' '}
                    <span
                      className="inline-block text-muted-foreground transition-transform group-hover:translate-x-1"
                      aria-hidden="true"
                    >
                      →
                    </span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section className="border-t border-border py-16" id="proceso" aria-labelledby="process-title">
          <p className="font-mono text-[11px] uppercase tracking-[0.09em] text-muted-foreground">
            03 / cómo trabajo
          </p>
          <h2 id="process-title" className="mt-2.5 text-3xl font-bold tracking-[-0.035em]">
            De la conversación al código en cuatro pasos
          </h2>
          <p className="mt-2 max-w-[60ch] text-[15px] text-muted-foreground">
            El mismo proceso en todos los proyectos: entender antes de escribir, decidir con criterio y dejar el
            código mantenible.
          </p>

          <div className="mt-7 grid divide-y divide-border border-t border-border border-b md:grid-cols-4 md:divide-x md:divide-y-0">
            {process.map((item) => (
              <div key={item.step} className="py-6 pr-0 md:px-6 md:first:pl-0 md:last:pr-0">
                <span className="font-mono text-xs text-muted-foreground">{item.step}</span>
                <h3 className="mb-2 mt-3 text-[17px] font-semibold tracking-[-0.01em]">{item.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{item.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 grid gap-12 border-t border-border pt-14 lg:grid-cols-[1.1fr_1fr] lg:items-start">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.09em] text-muted-foreground">
                04 / criterios
              </p>
              <h2 className="mt-2.5 text-[26px] font-bold tracking-[-0.03em]">
                Lo que puedes esperar de mi código
              </h2>
              <p className="mt-2.5 text-[15px] text-muted-foreground">
                Reglas que aplico en todos los proyectos, no solo en los que muestro.
              </p>
            </div>
            <ul className="overflow-hidden rounded-[10px] border border-border">
              {criteria.map((item) => (
                <li key={item.title} className="flex items-start gap-3 border-b border-border px-4 py-3.5 text-sm last:border-b-0">
                  <span aria-hidden="true" className="mt-0.5 flex-none">
                    ✓
                  </span>
                  <span>
                    <b className="font-semibold">{item.title}:</b> {item.body}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>

      <section className="bg-foreground py-16 text-background" aria-labelledby="cta-title">
        <div className="mx-auto grid max-w-[1200px] items-center gap-12 px-6 md:px-8 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <h2 id="cta-title" className="text-3xl font-extrabold leading-[1.08] tracking-[-0.035em] sm:text-4xl">
              ¿Buscas un full stack que también cuide el detalle?
            </h2>
            <p className="mt-3.5 max-w-[46ch] text-base leading-relaxed text-background/70">
              Disponibilidad inmediata para presencial, híbrido o remoto desde Lima, Perú. Cuéntame el puesto o el
              proyecto y te respondo con cómo lo abordaría.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-background px-6 text-[15px] font-medium text-foreground transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-background focus-visible:ring-offset-2 focus-visible:ring-offset-foreground"
              >
                Escríbeme <span aria-hidden="true">→</span>
              </Link>
              <Link
                href="/projects"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-md border border-background/25 px-6 text-[15px] font-medium transition-colors hover:bg-background/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-background focus-visible:ring-offset-2 focus-visible:ring-offset-foreground"
              >
                Ver proyectos
              </Link>
            </div>
          </div>
          <div className="flex flex-col border-t border-background/20">
            {profile.links.map((link) => (
              <a
                key={`cta-${link.label}`}
                href={link.href}
                className="flex items-center gap-3 border-b border-background/20 py-3.5 text-[15px] font-medium transition-opacity hover:opacity-70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-background focus-visible:ring-offset-2 focus-visible:ring-offset-foreground"
              >
                <span className="w-[84px] flex-none font-mono text-[10px] uppercase tracking-[0.09em] text-background/60">
                  {link.label}
                </span>
                <span className="mr-auto">{link.value}</span>
                <span aria-hidden="true">→</span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

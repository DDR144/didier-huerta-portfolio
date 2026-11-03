"use client"

import { ProjectCard } from "@/components/projects/ProjectCard"
import { ProjectModal } from "@/components/projects/ProjectModal"
import { Heading } from "@/components/common/Heading"
import { Section } from "@/components/common/Section"
import { projects } from "@/data/projects"
import { useProjectHash } from "@/hooks/useProjectHash"

export function ProjectsContent() {
  const { project, openModal, closeModal } = useProjectHash()

  return (
    <Section>
      <div className="max-w-4xl mx-auto mb-12">
        <Heading as="h1">Proyectos</Heading>
        <p className="text-xl text-muted-foreground">
          Proyectos reales explorando rendimiento, accesibilidad y patrones de arquitectura modernos.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((item, index) => (
          <ProjectCard key={item.slug} project={item} index={index} onOpen={openModal} />
        ))}
      </div>

      <ProjectModal
        project={project}
        open={project !== null}
        onClose={closeModal}
      />
    </Section>
  )
}

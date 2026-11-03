import { constructMetadata } from "@/lib/seo"
import { ProjectsContent } from "@/components/projects/ProjectsContent"

export const metadata = constructMetadata({
  title: "Proyectos | Didier Huerta",
  description: "Proyectos de ingeniería frontend — rendimiento, accesibilidad y patrones de UI modernos.",
})

export default function ProjectsPage() {
  return <ProjectsContent />
}
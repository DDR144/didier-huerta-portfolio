"use client"

import { Project } from "@/data/projects"
import { Code2, ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog"

interface ProjectModalProps {
  project: Project | null
  open: boolean
  onClose: () => void
}

export function ProjectModal({ project, open, onClose }: ProjectModalProps) {
  if (!project) return null

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{project.title}</DialogTitle>
          <DialogDescription>
            {project.year} · {project.role}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 py-4">
          <div className="aspect-video bg-muted relative overflow-hidden rounded-lg">
            <div className="absolute inset-0 flex items-center justify-center text-muted-foreground/20">
              <Code2 className="h-16 w-16" />
            </div>
            <div className="absolute inset-0 bg-black/0" />
          </div>

          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-sm mb-2">Problema</h4>
              <p className="text-muted-foreground">{project.problem}</p>
            </div>

            <div>
              <h4 className="font-semibold text-sm mb-2">Solución</h4>
              <p className="text-muted-foreground">{project.solution}</p>
            </div>

            <div>
              <h4 className="font-semibold text-sm mb-2">Tecnologías</h4>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <Badge key={t} variant="secondary" className="text-xs">
                    {t}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          <DialogFooter className="flex-wrap gap-3 pt-4 border-t">
            {project.link && (
              <Button asChild variant="default">
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Demo en Vivo
                </a>
              </Button>
            )}
            {project.repo && (
              <Button asChild variant="outline">
                <a href={project.repo} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  Código
                </a>
              </Button>
            )}
            <Button variant="ghost" onClick={onClose}>
              Cerrar
            </Button>
          </DialogFooter>
        </div>
      </DialogContent>
    </Dialog>
  )
}
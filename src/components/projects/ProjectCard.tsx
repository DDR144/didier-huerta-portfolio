"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Code2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import type { Project } from "@/data/projects"

interface ProjectCardProps {
  project: Project
  index: number
  onOpen: (slug: string) => void
}

export function ProjectCard({ project, index, onOpen }: ProjectCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
        >
            <Card
                role="button"
                tabIndex={0}
                aria-label={`Ver detalle de ${project.title}`}
                className="h-full flex flex-col overflow-hidden group hover:border-primary/50 transition-colors cursor-pointer focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
                onClick={() => onOpen(project.slug)}
                onKeyDown={(event) => {
                    if (event.key === "Enter" || event.key === " ") {
                        event.preventDefault()
                        onOpen(project.slug)
                    }
                }}
            >
                <div className="aspect-video bg-muted relative overflow-hidden">
                    {/* Placeholder for project screenshot */}
                    <div className="absolute inset-0 flex items-center justify-center text-muted-foreground/20">
                        <Code2 className="h-12 w-12" />
                    </div>
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors" />
                </div>
                <CardHeader>
                    <CardTitle>{project.title}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1 space-y-4">
                    <div>
                        <h4 className="font-semibold text-sm mb-1">Problema:</h4>
                        <p className="text-sm text-muted-foreground">{project.problem}</p>
                    </div>
                    <div>
                        <h4 className="font-semibold text-sm mb-1">Solución:</h4>
                        <p className="text-sm text-muted-foreground">{project.solution}</p>
                    </div>
                    <div className="flex flex-wrap gap-2 pt-2">
                        {project.tech.map((t) => (
                            <Badge key={t} variant="secondary" className="text-xs">
                                {t}
                            </Badge>
                        ))}
                    </div>
                </CardContent>
                <CardFooter className="gap-2">
                    {project.link && (
                        <Button asChild size="sm" className="w-full">
                            <Link
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={(event) => event.stopPropagation()}
                            >
                                Demo en Vivo
                            </Link>
                        </Button>
                    )}
                    {project.repo && (
                        <Button asChild size="sm" variant="outline" className="w-full">
                            <Link
                                href={project.repo}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={(event) => event.stopPropagation()}
                            >
                                Código
                            </Link>
                        </Button>
                    )}
                </CardFooter>
            </Card>
        </motion.div>
    );
}

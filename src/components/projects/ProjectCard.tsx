'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Code2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

interface ProjectProps {
    title: string;
    description: string;
    problem: string;
    solution: string;
    tech: string[];
    link?: string;
    repo?: string;
    image?: string;
    index: number;
}

export function ProjectCard({ title, description, problem, solution, tech, link, repo, index }: ProjectProps) {
    return (
        <motion.div
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
                    <CardTitle>{title}</CardTitle>
                    <CardDescription>{description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1 space-y-4">
                    <div>
                        <h4 className="font-semibold text-sm mb-1">Problem:</h4>
                        <p className="text-sm text-muted-foreground">{problem}</p>
                    </div>
                    <div>
                        <h4 className="font-semibold text-sm mb-1">Solution:</h4>
                        <p className="text-sm text-muted-foreground">{solution}</p>
                    </div>
                    <div className="flex flex-wrap gap-2 pt-2">
                        {tech.map((t) => (
                            <Badge key={t} variant="secondary" className="text-xs">
                                {t}
                            </Badge>
                        ))}
                    </div>
                </CardContent>
                <CardFooter className="gap-2">
                    {link && (
                        <Button asChild size="sm" className="w-full">
                            <Link href={link}>Live Demo</Link>
                        </Button>
                    )}
                    {repo && (
                        <Button asChild size="sm" variant="outline" className="w-full">
                            <Link href={repo} target="_blank">Code</Link>
                        </Button>
                    )}
                </CardFooter>
            </Card>
        </motion.div>
    );
}

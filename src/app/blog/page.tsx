import Link from 'next/link';
import { format, parseISO } from 'date-fns';
import { getBlogPosts } from '@/lib/blog';
import { Heading } from '@/components/common/Heading';
import { Section } from '@/components/common/Section';
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { constructMetadata } from '@/lib/seo';

export const metadata = constructMetadata({
    title: 'Blog | Didier Portfolio',
    description: 'Thoughts on software development, performance, and best practices.',
});

export default async function BlogPage() {
    const posts = await getBlogPosts();

    return (
        <Section>
            <div className="max-w-4xl mx-auto mb-12">
                <Heading as="h1">Blog</Heading>
                <p className="text-xl text-muted-foreground">
                    Writing about what I learn in web development.
                </p>
            </div>

            <div className="max-w-3xl mx-auto grid gap-6">
                {posts.map((post) => (
                    <Link key={post.slug} href={`/blog/${post.slug}`}>
                        <Card className="hover:border-primary/50 transition-colors cursor-pointer">
                            <CardHeader>
                                <div className="flex items-center justify-between mb-2">
                                    <CardTitle className="text-xl">{post.meta.title}</CardTitle>
                                    <time className="text-sm text-muted-foreground tabular-nums">
                                        {format(parseISO(post.meta.publishedAt), 'MMMM dd, yyyy')}
                                    </time>
                                </div>
                                <CardDescription className="text-base">
                                    {post.meta.summary}
                                </CardDescription>
                            </CardHeader>
                        </Card>
                    </Link>
                ))}
                {posts.length === 0 && (
                    <p className="text-muted-foreground">No posts found.</p>
                )}
            </div>
        </Section>
    );
}

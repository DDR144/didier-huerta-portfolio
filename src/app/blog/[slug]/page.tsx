import { notFound } from 'next/navigation';
import { format, parseISO } from 'date-fns';
import { getBlogPost, getBlogPosts } from '@/lib/blog';
import { Section } from '@/components/common/Section';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { constructMetadata } from '@/lib/seo';

export async function generateMetadata(
    { params }: { params: Promise<{ slug: string }> } // Params are now Promises in Next.js 15+ (and 16?) but type definition suggests async handling usually
) {
    const resolvedParams = await params;
    const post = await getBlogPost(resolvedParams.slug);
    if (!post) return;

    return constructMetadata({
        title: `${post.meta.title} | Blog`,
        description: post.meta.summary,
    });
}

export async function generateStaticParams() {
    const posts = await getBlogPosts();
    return posts.map((post) => ({
        slug: post.slug,
    }));
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
    const resolvedParams = await params;
    const post = await getBlogPost(resolvedParams.slug);

    if (!post) {
        notFound();
    }

    return (
        <Section className="py-12">
            <div className="max-w-3xl mx-auto">
                <Button asChild variant="ghost" className="mb-8 pl-0 -ml-4 hover:bg-transparent">
                    <Link href="/blog" className="flex items-center text-muted-foreground hover:text-foreground">
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Back to Blog
                    </Link>
                </Button>

                <article>
                    <div className="mb-8 border-b pb-8">
                        <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl mb-4">
                            {post.meta.title}
                        </h1>
                        <time className="text-sm text-muted-foreground">
                            {format(parseISO(post.meta.publishedAt), 'MMMM dd, yyyy')}
                        </time>
                    </div>

                    <div className="prose prose-zinc dark:prose-invert max-w-none">
                        {post.content}
                    </div>
                </article>
            </div>
        </Section>
    );
}

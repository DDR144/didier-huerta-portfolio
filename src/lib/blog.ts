import fs from 'fs';
import path from 'path';
import { compileMDX } from 'next-mdx-remote/rsc';

const contentDir = path.join(process.cwd(), 'src/content/blog');

export type BlogPost = {
    slug: string;
    meta: {
        title: string;
        publishedAt: string;
        summary: string;
    };
    content: React.ReactNode;
};

export async function getBlogPosts() {
    const files = fs.readdirSync(contentDir);

    const posts = await Promise.all(
        files
            .filter((file) => path.extname(file) === '.mdx')
            .map(async (file) => {
                const filePath = path.join(contentDir, file);
                const fileContent = fs.readFileSync(filePath, 'utf8');
                const { frontmatter } = await compileMDX<{
                    title: string;
                    publishedAt: string;
                    summary: string;
                }>({
                    source: fileContent,
                    options: { parseFrontmatter: true },
                });

                return {
                    slug: file.replace('.mdx', ''),
                    meta: frontmatter,
                };
            })
    );

    return posts.sort((a, b) => (a.meta.publishedAt > b.meta.publishedAt ? -1 : 1));
}

export async function getBlogPost(slug: string) {
    const filePath = path.join(contentDir, `${slug}.mdx`);

    if (!fs.existsSync(filePath)) {
        return null;
    }

    const fileContent = fs.readFileSync(filePath, 'utf8');

    const { content, frontmatter } = await compileMDX<{
        title: string;
        publishedAt: string;
        summary: string;
    }>({
        source: fileContent,
        options: { parseFrontmatter: true },
    });

    return {
        slug,
        meta: frontmatter,
        content,
    };
}

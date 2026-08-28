import { Metadata } from 'next';

export function constructMetadata({
  title = 'Didier Huerta | Desarrollador Full Stack',
  description =
    'Desarrollador Full Stack especializado en Next.js, React y experiencias web modernas. Explora mis proyectos y contáctame.',
  image = '/og-image.jpg',
  icons = '/favicon.ico',
  noIndex = false,
}: {
  title?: string;
  description?: string;
  image?: string;
  icons?: string;
  noIndex?: boolean;
} = {}): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: image,
        },
      ],
    },
    icons,
    metadataBase: new URL('https://didier-portfolio.com'),
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  };
}

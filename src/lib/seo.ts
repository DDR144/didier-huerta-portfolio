import { Metadata } from 'next';

export function constructMetadata({
  title = 'Didier Portfolio | Frontend Engineer',
  description = 'Frontend Engineer specializing in Next.js, React, and tailored web experiences.',
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
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
      creator: '@didier',
    },
    icons,
    metadataBase: new URL('https://didier-portfolio.com'), // Replace with actual URL
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  };
}

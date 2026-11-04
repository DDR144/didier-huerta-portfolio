import NextImage from 'next/image';
import { ImageIcon } from 'lucide-react';

import { cn } from '@/lib/utils';

interface CaptureFrameProps {
  /** Ruta pública de la captura. Si falta, se dibuja el espacio reservado. */
  src?: string;
  alt: string;
  caption: string;
  label: string;
  ratio?: 'hero' | 'detail';
}

export function CaptureFrame({ src, alt, caption, label, ratio = 'hero' }: CaptureFrameProps) {
  return (
    <figure>
      <div
        className={cn(
          'flex flex-col items-center justify-center gap-2.5 overflow-hidden rounded-lg border border-border bg-muted text-muted-foreground',
          ratio === 'hero' ? 'aspect-[16/10]' : 'aspect-[4/3]',
        )}
      >
        {src ? (
          <NextImage
            src={src}
            alt={alt}
            width={1600}
            height={ratio === 'hero' ? 1000 : 1200}
            className="h-full w-full object-cover"
            sizes="(min-width: 1200px) 880px, 100vw"
          />
        ) : (
          <>
            <ImageIcon className="h-9 w-9 opacity-45" aria-hidden="true" />
            <span className="font-mono text-[10px] uppercase tracking-[0.09em]">
              Captura pendiente · {ratio === 'hero' ? '16:10' : '4:3'}
            </span>
          </>
        )}
      </div>
      <figcaption className="mt-2.5 text-[13px] leading-relaxed text-muted-foreground">
        <span className="mr-2 font-mono text-[11px] uppercase tracking-[0.09em]">{label}</span>
        {caption}
      </figcaption>
    </figure>
  );
}

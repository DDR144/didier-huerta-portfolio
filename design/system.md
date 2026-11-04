# Design system — proyecto-portafolio

Captured from the project sources on 2026-11-03. Every entry names where it comes from;
nothing here is invented.

Sources read:

- `src/app/globals.css` — Tailwind v4 `@theme inline` mapping, `:root` light tokens,
  `@media (prefers-color-scheme: dark)` dark tokens, `@layer base` defaults
- `src/app/layout.tsx` — fonts, `lang`, body classes
- `src/components/ui/button.tsx`, `card.tsx`, `badge.tsx`, `dialog.tsx`
- `src/components/common/Heading.tsx`, `Section.tsx`
- `src/components/layout/Navbar.tsx`, `Footer.tsx`
- `postcss.config.mjs` (Tailwind v4 via PostCSS; no `tailwind.config.*` exists)

The stack is shadcn/ui on the Tailwind **zinc/neutral** palette: near-neutral greys, no
brand accent color, no chromatic highlight. The visual language is typographic and
border-driven, not color-driven.

## Color

Authored values are HSL triplets in CSS custom properties; hex is the same color for
reference. Both themes exist, chosen by `prefers-color-scheme` only (no class toggle).

### Light (`:root`)

| Token | HSL | Hex | Usage |
| --- | --- | --- | --- |
| `--background` | `hsl(0 0% 100%)` | `#ffffff` | Page background |
| `--foreground` | `hsl(240 10% 3.9%)` | `#09090b` | Body text |
| `--card` | `hsl(0 0% 100%)` | `#ffffff` | Card surface |
| `--card-foreground` | `hsl(240 10% 3.9%)` | `#09090b` | Card text |
| `--popover` | `hsl(0 0% 100%)` | `#ffffff` | Dialog/sheet surface |
| `--popover-foreground` | `hsl(240 10% 3.9%)` | `#09090b` | Dialog/sheet text |
| `--primary` | `hsl(240 5.9% 10%)` | `#18181b` | Primary button, strong emphasis |
| `--primary-foreground` | `hsl(0 0% 98%)` | `#fafafa` | Text on primary |
| `--secondary` | `hsl(240 4.8% 95.9%)` | `#f4f4f5` | Secondary button, badge |
| `--secondary-foreground` | `hsl(240 5.9% 10%)` | `#18181b` | Text on secondary |
| `--muted` | `hsl(240 4.8% 95.9%)` | `#f4f4f5` | Muted surfaces, image placeholders |
| `--muted-foreground` | `hsl(240 3.8% 46.1%)` | `#71717a` | Secondary text, descriptions |
| `--accent` | `hsl(240 4.8% 95.9%)` | `#f4f4f5` | Hover surface for ghost/outline |
| `--accent-foreground` | `hsl(240 5.9% 10%)` | `#18181b` | Text on accent |
| `--destructive` | `hsl(0 84.2% 60.2%)` | `#ef4444` | Destructive action, validation error |
| `--destructive-foreground` | `hsl(0 0% 98%)` | `#fafafa` | Text on destructive |
| `--border` | `hsl(240 5.9% 90%)` | `#e4e4e7` | All borders and dividers |
| `--input` | `hsl(240 5.9% 90%)` | `#e4e4e7` | Input border |
| `--ring` | `hsl(240 10% 3.9%)` | `#09090b` | Focus ring |

### Dark (`prefers-color-scheme: dark`)

| Token | HSL | Hex |
| --- | --- | --- |
| `--background` | `hsl(240 10% 3.9%)` | `#09090b` |
| `--foreground` | `hsl(0 0% 98%)` | `#fafafa` |
| `--card` / `--popover` | `hsl(240 10% 3.9%)` | `#09090b` |
| `--primary` | `hsl(0 0% 98%)` | `#fafafa` |
| `--primary-foreground` | `hsl(240 5.9% 10%)` | `#18181b` |
| `--secondary` / `--muted` / `--accent` | `hsl(240 3.7% 15.9%)` | `#27272a` |
| `--muted-foreground` | `hsl(240 5% 64.9%)` | `#a1a1aa` |
| `--destructive` | `hsl(0 62.8% 30.6%)` | `#7f1d1d` |
| `--border` / `--input` | `hsl(240 3.7% 15.9%)` | `#27272a` |
| `--ring` | `hsl(240 4.9% 83.9%)` | `#d4d4d8` |

## Typography

| Role | Rule | Source |
| --- | --- | --- |
| Sans family | Inter, loaded with `next/font/google` as variable `--font-sans` on `<body>` | `src/app/layout.tsx` |
| Mono family | Declared as `--font-mono: var(--font-geist-mono)`, never loaded | `src/app/globals.css` |
| `h1` | `text-4xl md:text-5xl lg:text-6xl`, `font-extrabold`, `tracking-tight` | `Heading.tsx` |
| `h2` | `text-3xl`, `font-bold`, `tracking-tight`, `mb-4` | `Heading.tsx` |
| `h3` | `text-2xl`, `font-semibold`, `tracking-tight` | `Heading.tsx` |
| `h4` | `text-xl`, `font-semibold`, `tracking-tight` | `Heading.tsx` |
| Card title | `text-2xl`, `font-semibold`, `leading-none`, `tracking-tight` | `card.tsx` |
| Body / lead | `text-xl` for page leads, `leading-relaxed` | `page.tsx`, `ProjectsContent.tsx` |
| Body | `text-base` (16 px default) | `globals.css` |
| Small | `text-sm` (14 px), `text-muted-foreground` for descriptions | `card.tsx`, `Footer.tsx` |
| Micro | `text-xs` (12 px), `font-semibold`, badges and tags | `badge.tsx` |

Hero headline treatment in `src/app/page.tsx`: two lines, second line in `text-primary`
(the same near-black as the body text, so it reads as a weight cue rather than color).

## Spacing, radius, elevation

| Token | Value | Source |
| --- | --- | --- |
| Section rhythm | `py-16 md:py-24` | `Section.tsx` |
| Container | `container mx-auto px-4 md:px-6` | `Section.tsx`, `Navbar.tsx` |
| Card padding | `p-6` (header/content/footer), `pt-0` on content and footer | `card.tsx` |
| Header height | `h-16` sticky, `border-b`, `backdrop-blur`, `bg-background/95` | `Navbar.tsx` |
| `--radius` | `0.5rem` (8 px) | `globals.css` |
| `--radius-sm` / `md` / `lg` / `xl` | `calc(--radius - 4px)` = 4 px, `- 2px` = 6 px, 8 px, `+ 4px` = 12 px | `globals.css` |
| Card radius | `rounded-lg` (8 px) | `card.tsx` |
| Elevation | `shadow-sm` on cards only; everything else uses 1 px borders | `card.tsx` |
| Focus | `ring-2 ring-ring ring-offset-2` with `focus-visible` | `button.tsx`, `badge.tsx` |

## Component rules

- **Button** (`button.tsx`): `rounded-md`, `text-sm font-medium`, height 40 px default
  (`h-10 px-4`), `sm` 36 px (`h-9 px-3`), `lg` 44 px (`h-11 px-8`), `icon` 40×40.
  Variants: `default` (primary + `hover:bg-primary/90`), `destructive`, `outline`
  (border `input`, `hover:bg-accent`), `secondary`, `ghost`, `link`. Icons inside are
  16 px and `mr-2` when inline.
- **Badge** (`badge.tsx`): `rounded-full`, `px-2.5 py-0.5`, `text-xs font-semibold`,
  variants `default` / `secondary` / `destructive` / `outline`. Project tags use
  `secondary`.
- **Card** (`card.tsx`): `rounded-lg border bg-card shadow-sm`; header `flex flex-col
  space-y-1.5 p-6`; title `text-2xl`; description `text-sm muted-foreground`.
- **Dialog** (`dialog.tsx`): Radix overlay `bg-black/80`, content centered with
  `max-w-3xl max-h-[90vh] overflow-y-auto` in the project modal, close button at
  `right-4 top-4` with `sr-only` label `Cerrar`.
- **Navbar** (`Navbar.tsx`): sticky, active link at full foreground, inactive at
  `text-foreground/60`, GitHub action as `sm outline` button; mobile uses a right sheet
  `w-[240px] sm:w-[300px]`.
- **Footer** (`Footer.tsx`): `border-t`, small muted text on the left, icon links
  (`GitHub`, `LinkedIn`) at `text-muted-foreground hover:text-foreground`.

## Known deviations found while capturing (not tokens)

1. `globals.css` maps `--font-sans: var(--font-geist-sans)` and
   `--font-mono: var(--font-geist-mono)`, but `layout.tsx` loads **Inter** under the
   variable `--font-sans` and never defines the Geist variables. The `font-sans`
   utility therefore resolves to an undefined variable instead of Inter.
2. Dark theme has no manual switch: only `prefers-color-scheme`, so the user cannot
   choose.
3. There is no brand color anywhere in the token set; every emphasis is typographic or
   a border. Any redesign that introduces color is a deliberate departure from the
   current system, not a token tweak.

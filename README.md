# Softhon website

The marketing site for Softhon, a software product studio. It is a single page with anchored sections (Work, Approach, Products, Philosophy, Contact), built from the design in [`design/index.html`](design/index.html).

Built with Next.js 16 (App Router, Turbopack), React 19, Tailwind CSS 4 and TypeScript.

## Getting started

Requires Node.js 20.9 or later.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

| Script          | What it does                    |
| --------------- | ------------------------------- |
| `npm run dev`   | Start the dev server            |
| `npm run build` | Create a production build       |
| `npm run start` | Serve the production build      |

The page is fully static. There are no environment variables or API routes.

## Project structure

```
app/
  layout.tsx            Fonts, metadata, header and footer
  page.tsx              The homepage: sections in order
  globals.css           Design tokens (colours, radii, shadows) and base styles
  icon.png              Favicon
  opengraph-image.tsx   Social preview image, generated at build time
components/
  home/                 One component per page section
  layout/               SiteHeader, SiteFooter
  ui/                   Shared building blocks (Section, SectionHeader, Card, ButtonLink, IconTile, Eyebrow, Tag)
  icons.tsx             Icons copied from the design
lib/
  site.ts               Site URL and contact email
  utils.ts              cn() class-name helper
assets/fonts/           Inter Tight TTF, used only by the social preview image
design/                 The original design reference (open index.html in a browser)
```

## Common edits

- **Contact email or domain:** [`lib/site.ts`](lib/site.ts).
- **Product cards:** the `products` list at the top of [`components/home/ProductsShowcase.tsx`](components/home/ProductsShowcase.tsx).
- **Section copy:** the matching file in [`components/home/`](components/home/). Repeated items (services, approach steps, hero lifecycle) are data arrays at the top of each file.
- **Colours and other tokens:** the `@theme` block in [`app/globals.css`](app/globals.css). Use them as Tailwind classes, e.g. `bg-surface`, `text-muted`, `rounded-card`.

## Notes

- **Custom radius and shadow tokens** are registered with `tailwind-merge` in [`lib/utils.ts`](lib/utils.ts). Add any new ones there too, so `cn()` resolves conflicts correctly.
- **Next.js 16** differs from earlier versions. Check the guides in `node_modules/next/dist/docs/` before using an unfamiliar API. For example, `next/image`'s `priority` prop is deprecated in favour of `loading="eager"` or `preload`.
- **`turbopack.root`** is set in [`next.config.ts`](next.config.ts) so builds don't pick up a stray lockfile in a parent folder.

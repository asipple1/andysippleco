## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

Dev server runs at `http://localhost:4321`.

## Project overview

Personal portfolio for Andy Sipple — senior full-stack web developer on Oʻahu. Astro 7 static site with React islands and a retro space aesthetic.

**Design system colors** (CSS custom properties in `src/styles/global.css`):
- `--space: #0B0A1E` — page background
- `--cream: #F1E3CB` — primary text
- `--red: #EB3323`
- `--yellow: #F3C623`
- `--teal: #19A6A3` / `--teal-text: #5FD3CF` (labels)
- `--plum: #8A2E57`
- `--hairline: rgba(241,227,203,.18)`

**Fonts**: Big Shoulders Display (headings), IBM Plex Mono (mono/labels), Public Sans (body).

## Adding content

### New portfolio project

Edit `src/data/projects.ts`. Add an object with: `num`, `kind`, `slug`, `name`, `client`, `desc`, `role`, `stack`, `year`, `accent`, `imgLabel`, `imgOrder`, `textOrder`, `challenge`, `approach`, `outcome`. The first 3 projects in the array appear on the home page; all appear on `/work`.

### New field note

Edit `src/data/notes.ts`. Add an object with: `slug`, `title`, `date` (e.g. `'Oct 2026'`), `tag`, `read` (e.g. `'4 min'`), `excerpt`, `body` (array of paragraph strings).

### New life item

Edit `src/data/life.ts`. Set `kind: 'photo'` or `kind: 'video'`, `span: 'span 2'` for wide, `span: 'auto'` for standard.

## Architecture notes

- **SpaceBackground** is `position:absolute;inset:0` — planets span full page height. Each planet has `data-parallax="N"` (0.05–0.55); parallax JS applies `translateY(scrollY × speed)` to slow them down.
- **Spine** is `position:fixed` with CSS geometry derived from header constants. Do NOT add `transition:name` to Spine — it causes a position-morph artifact during View Transitions because old/new snapshots capture different positions.
- **Streaks overlay** is `z-index:2` — below header (`z-index:10`) and spine (`z-index:11`). This keeps the hyperspace effect scoped to main content.
- **`::view-transition-image-pair(main-content) { overflow:clip }`** prevents the expanding hyperspace snapshot from bleeding over the fixed spine.
- **Stars** are generated procedurally via seeded RNG on `astro:page-load`. Far stars: seed 7, 420 circles. Near stars: seed 21, 160 circles.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)

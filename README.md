# andysipple.co

Personal portfolio site for Andy Sipple — senior full-stack web developer on Oʻahu. Built with Astro 7, React islands, and a retro space aesthetic.

## Tech stack

| Layer | Choice |
|---|---|
| Framework | Astro 7.3 (static output) |
| UI islands | React 19 (`client:load`) |
| Transitions | Astro `ClientRouter` + CSS View Transitions API |
| Styles | Global CSS custom properties, no framework |
| Fonts | Google Fonts — Big Shoulders Display, IBM Plex Mono, Public Sans |
| Forms | Netlify Forms |
| Deploy | Netlify (static) |

## Project structure

```
src/
├── components/
│   ├── ContactForm.tsx      # React island — form with sent state
│   ├── Footer.astro
│   ├── Header.tsx           # React island — sticky nav + mobile menu
│   ├── LogoMark.astro       # Four-stripe corner logo SVG
│   ├── SpaceBackground.astro  # Parallax planet SVGs (position:absolute)
│   └── Spine.astro          # Fixed left accent lines, draw on scroll
├── data/
│   ├── life.ts              # Life page grid items
│   ├── notes.ts             # Field notes (title, body, metadata)
│   ├── projects.ts          # Portfolio projects (challenge/approach/outcome)
│   ├── services.ts          # Services + skills groups
│   └── timeline.ts          # Career timeline entries
├── layouts/
│   └── Layout.astro         # Root layout — parallax, scroll reveals, transitions
├── pages/
│   ├── index.astro          # Home — hero, missions, services, Hawaii, about, CTA
│   ├── about.astro
│   ├── contact.astro
│   ├── life.astro
│   ├── 404.astro
│   ├── work/
│   │   ├── index.astro      # Work grid
│   │   └── [slug].astro     # Project detail (getStaticPaths)
│   └── notes/
│       ├── index.astro      # Field notes list
│       └── [slug].astro     # Note detail (getStaticPaths)
└── styles/
    └── global.css           # Design tokens, reset, keyframes, scroll reveal, view transitions
```

## Design system

All colors, spacing, and fonts live in CSS custom properties in `global.css`:

```css
--space:       #0B0A1E   /* page background */
--cream:       #F1E3CB   /* primary text */
--red:         #EB3323
--yellow:      #F3C623
--teal:        #19A6A3
--teal-text:   #5FD3CF   /* lighter teal for labels */
--plum:        #8A2E57
--hairline:    rgba(241,227,203,.18)
--container:   clamp(20px,5vw,64px)  /* horizontal page padding */
--section-pad: clamp(72px,9vw,128px) /* vertical section padding */
```

Fonts are loaded from Google Fonts and referenced by name — `'Big Shoulders Display'`, `'IBM Plex Mono'`, `'Public Sans'`.

## Space background & parallax

`SpaceBackground.astro` is `position:absolute;inset:0` inside the page wrapper, so planets are distributed across the full page height. Each planet SVG has a `data-parallax="N"` attribute (0.05–0.55). The parallax JS in `Layout.astro` applies `translateY(scrollY × speed)` — slowing each element down relative to normal scroll, creating depth.

Planet placement by page section:
- **Saturn** — top (hero)
- **Red giant** — `top:22%` (work)
- **Neptune** — `top:52%` (islands/about)
- **Cratered moon** — `top:84%` (contact)

## Page transitions (hyperspace)

`main#main-content` has `transition:name="main-content"`. On navigation, CSS View Transitions animate old/new snapshots with a hyperspace effect (`scaleX(2.4)` + blur). Neon streak overlays are generated in JS on `astro:before-preparation` and `astro:page-load`. The streaks overlay is `z-index:2` — above page content but below the header (`z-index:10`) and spine (`z-index:11`).

## Adding content

### New portfolio project

Edit `src/data/projects.ts`. Each project needs:

```ts
{
  num: '06',          // display number
  kind: 'Independent',
  slug: 'my-project', // URL slug: /work/my-project
  name: 'Project Name',
  client: 'Client · Location',
  desc: 'One paragraph description.',
  role: 'Role title',
  stack: 'Tech · Stack',
  year: '2025',
  accent: '#EB3323',  // one of the design palette colors
  imgLabel: 'Screenshot description',
  imgOrder: 1,        // 1 = image left, 2 = image right (on home page)
  textOrder: 2,
  challenge: 'What was hard.',
  approach: 'What you did.',
  outcome: 'What changed.',
}
```

The first 3 projects in the array appear on the home page. All 5 appear on `/work`.

### New field note

Edit `src/data/notes.ts`:

```ts
{
  slug: 'my-note-slug',
  title: 'Note title',
  date: 'Oct 2026',   // Month Year format
  tag: 'Topic',
  read: '4 min',
  excerpt: 'One sentence shown in the list.',
  body: [
    'First paragraph.',
    'Second paragraph.',
  ],
}
```

### New life media item

Edit `src/data/life.ts`. Set `kind: 'photo'` or `kind: 'video'`, `span: 'span 2'` for wide items, `span: 'auto'` for standard.

## Development

```bash
# Install
npm install

# Dev server (background — preferred)
npx astro dev --background
npx astro dev status
npx astro dev logs
npx astro dev stop

# Type check
npx astro check

# Production build
npm run build
npm run preview
```

Dev server runs at `http://localhost:4321`.

## Deployment

The site deploys to Netlify as a static build. `npm run build` outputs to `./dist/`. The contact form uses Netlify Forms — the `data-netlify="true"` attribute on the form element is all that is needed for Netlify to detect and wire it up.

## Known quirks

- **React hydration warnings in dev**: `Header.tsx` uses `useEffect` to detect the active nav link (client-only). This is intentional — no mismatch on production.
- **Spine position**: Pure CSS (`left: calc(clamp(20px,5vw,64px) - 1px); top: 57px`) aligned to the logo mark geometry. No JS positioning.
- **View Transitions + spine**: The spine is not assigned a `transition:name` — doing so causes a morph artifact because the spine is `position:fixed` and the View Transitions API captures snapshots at different positions. The `::view-transition-image-pair(main-content)` has `overflow:clip` to prevent the expanding hyperspace snapshot from covering the spine.
- **Stars**: Generated procedurally in JS via seeded RNG on `astro:page-load`. Same seed = same stars every load. Far stars: seed 7, 420 circles. Near stars: seed 21, 160 circles.

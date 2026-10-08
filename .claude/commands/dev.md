# Dev Server

Manage the local Astro development server.

## Commands

```bash
# Start (always use background mode)
npx astro dev --background

# Check status
npx astro dev status

# View logs
npx astro dev logs

# Stop
npx astro dev stop
```

Dev server runs at `http://localhost:4321`.

## Build & preview

```bash
npm run build     # output to ./dist/
npm run preview   # serve the built output locally
```

## Type check

```bash
npx astro check
```

## Notes

- Always use `--background` so the process doesn't block the terminal
- After code changes, the dev server hot-reloads automatically
- The build target is Netlify static — no SSR, no server functions

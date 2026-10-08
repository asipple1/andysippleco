# Add Portfolio Project

Add a new project to the portfolio at `src/data/projects.ts`.

## Steps

1. Read `src/data/projects.ts` to see existing entries and the next available number.
2. Gather the required fields from the user (or use provided info):
   - `num`: next sequential number (e.g. `'06'`)
   - `kind`: `'Independent'`, `'Agency'`, or `'Contract'`
   - `slug`: URL-safe slug (e.g. `'my-project'`) — becomes `/work/my-project`
   - `name`: project display name
   - `client`: client name + location (e.g. `'ACME Corp · Honolulu, HI'`)
   - `desc`: one paragraph description
   - `role`: role title (e.g. `'Lead Engineer'`)
   - `stack`: tech stack joined with ` · ` (e.g. `'React · Node.js · PostgreSQL'`)
   - `year`: four-digit year string (e.g. `'2025'`)
   - `accent`: one of `'#EB3323'` (red), `'#F3C623'` (yellow), `'#19A6A3'` (teal), `'#8A2E57'` (plum)
   - `imgLabel`: alt text for the project image
   - `imgOrder`: `1` (image left) or `2` (image right)
   - `textOrder`: opposite of `imgOrder`
   - `challenge`: what was hard
   - `approach`: what you did
   - `outcome`: what changed / results

3. Add the new project object to the array in `src/data/projects.ts`.
4. The first 3 projects in the array appear on the home page; all appear on `/work`.
5. Add a project image at `public/work/[slug].jpg` (or `.png`) — 800×600 recommended.

## Notes

- Slugs must be unique — they become the URL at `/work/[slug]`
- `imgOrder`/`textOrder` control the two-column layout on the project detail page
- The `accent` color is used for section labels and decorative elements on the detail page

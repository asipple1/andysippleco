# Add Field Note

Add a new field note (blog post) to the site at `src/data/notes.ts`.

## Steps

1. Read `src/data/notes.ts` to see existing entries.
2. Gather the required fields from the user (or use provided info):
   - `slug`: URL-safe slug (e.g. `'my-note'`) — becomes `/notes/my-note`
   - `title`: display title
   - `date`: month + year string (e.g. `'Oct 2026'`)
   - `tag`: topic label (e.g. `'Engineering'`, `'Design'`, `'Hawaii'`)
   - `read`: estimated read time (e.g. `'4 min'`)
   - `excerpt`: one sentence shown on the notes list page
   - `body`: array of paragraph strings — each string is one `<p>` tag

3. Add the new note object to the **beginning** of the array (newest first).
4. Notes automatically get a detail page at `/notes/[slug]`.

## Notes

- Slugs must be unique
- `body` paragraphs are rendered as plain text — no HTML or markdown
- Notes appear in the order they are listed in the array; keep newest first

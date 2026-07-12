# Working on this repo

This is omeedtavakoli.com — Omeed's personal portfolio site, served via GitHub Pages from this repo. Vanilla HTML/CSS/JS, no build step.

## Always update NOTES.md

`NOTES.md` tracks shipped changes and future ideas so they don't get lost between sessions.

When making changes that affect what visitors see (edits to `index.html`, `styles.css`, `site.js`, or any user-facing copy), add an entry to `NOTES.md` in the **same commit**. Use a dated heading (`### YYYY-MM-DD`) at the top of the `Recent changes` section; reuse today's heading if one already exists for the current date.

Skip for trivial things: cache-buster bumps alone, internal-only comments, whitespace.

## Cache busting

When you edit `styles.css` or `site.js`, bump the corresponding `?v=N` query param in `index.html` so browsers refresh.

## Essay filenames

Use a simple one- or two-word lowercase filename for each standalone essay page, such as `loyalty.html`, `standard.html`, or `carwash.html`. Do not prefix essay pages with `essay-` or use the full essay title as the filename.

When renaming an essay page, update its homepage card, canonical URL, Open Graph URL, and any legacy hash redirects in `site.js`.

## Deploys

`main` deploys automatically to omeedtavakoli.com via GitHub Pages, usually within 30–60 seconds after push.

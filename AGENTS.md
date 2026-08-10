# Working on this repo

This is omeedtavakoli.com — Omeed's personal portfolio site, served via GitHub Pages from this repo. Vanilla HTML/CSS/JS, no build step.

## Always update NOTES.md

`NOTES.md` tracks shipped changes and future ideas so they don't get lost between sessions.

When making changes that affect what visitors see (edits to `index.html`, `styles.css`, `site.js`, or any user-facing copy), add an entry to `NOTES.md` in the **same commit**. Use a dated heading (`### YYYY-MM-DD`) at the top of the `Recent changes` section; reuse today's heading if one already exists for the current date.

Skip for trivial things: cache-buster bumps alone, internal-only comments, whitespace.

## Cache busting

When you edit `styles.css` or `site.js`, bump the corresponding `?v=N` query param in `index.html` so browsers refresh.

## Essay page URLs

Every standalone page is a directory index, not a flat file: `loyalty/index.html`, `standard/index.html`, `carwash/index.html`. Pick a simple one- or two-word lowercase directory name — do not prefix with `essay-` or use the full essay title. The public URL is `/loyalty/`, **with the trailing slash**; write it that way in cards, canonicals, and OG tags so nothing takes a needless redirect hop. The `.html` paths are retired and 404 on purpose.

**Every path inside these pages must be absolute.** From `/22/index.html`, a relative `styles.css?v=71` resolves to `/22/styles.css` and 404s — an unstyled page with no nav. Root all of it with a leading `/`: stylesheets, `essay-chrome.js`, `page-transition.js`, and any images.

When renaming a page, update its homepage card, canonical URL, Open Graph URL, and any legacy hash redirects in `site.js`.

## Deploys

`main` deploys automatically to omeedtavakoli.com via GitHub Pages, usually within 30–60 seconds after push.

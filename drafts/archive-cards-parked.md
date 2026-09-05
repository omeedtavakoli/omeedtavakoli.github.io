# Card layout — parked 2026-09-04

The Archive / Projects / Essays views used to be **image card galleries**. On
2026-09-04 all three were switched to `.simple-list` (one text row per entry).
This file records the **layout** so it can be rebuilt from scratch if the markup
or CSS is ever deleted. `drafts/` is repo-only and isn't linked from the site.

## Restoring it (nothing has been deleted yet)

The card markup is still in `index.html`, held out of view by a `hidden`
attribute. Per view:

1. Remove `hidden` from that view's `<ul class="projects-list" hidden>`.
2. Delete that view's `<ul class="simple-list">…</ul>` block.

Do it per view or for all three (`#archive-view`, `#projects-view`,
`#essays-view`). Then optionally drop `.projects-list[hidden]` and the
`.simple-list*` rules from `styles.css`, and bump `styles.css?v=N` on all six
pages. Everything under "The layout" below is still live CSS — it was never
removed, only orphaned.

## The layout

**Structure.** One `<li>` per item, wrapping an `<a class="project-item">` that
contains exactly two children — the thumbnail box and the text column:

```html
<li>
  <a class="project-item" href="/22/">
    <div class="project-thumb-wrap">
      <img decoding="async" loading="lazy" class="project-thumb"
           src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw=="
           data-src="images/thumbs/22.jpg" alt="22">
    </div>
    <div class="project-info">
      <span class="project-title">22</span>
      <span class="project-bio">A short note on turning 22.</span>
      <span class="project-sub">August 4, 2026</span>
    </div>
  </a>
</li>
```

**Geometry (desktop).** `.projects-list` is a single-column grid with `2rem`
between cards, `2rem` under the heading. Each card is a flex row, thumbnail
left, text right, `align-items: center`, `2rem` gap. The thumbnail is
`min(42%, 440px)` wide and locked to **16 / 9** by `aspect-ratio`, with an 8px
radius (`--radius-media`) and a `rgba(255,255,255,0.1)` hairline border;
`overflow: hidden` plus `object-fit: cover` on the image does the cropping. The
text column is `flex: 1`, stacked with a `0.4rem` gap.

**Type.** Title and bio both 25px / 1.25 at 90% white — the title at weight 600,
the bio at 400, so they separate by weight, not size. The date (`.project-sub`)
is 20px / 1.3 at 45% white.

**Hover.** The whole card lifts: `transform: translateY(-3px)` over 0.3s, the
thumb border brightens to 25% white, and the title goes to full white. (It was
`red` until the 2026-09-04 de-redding pass — if you restore cards and want the
old accent back, that's the rule to change.) `.pending` cards — used for items
with no destination yet — get `cursor: not-allowed` and no lift.

**Mobile (`max-width: 600px`).** The card turns vertical: `flex-direction:
column`, `gap: 0`, `align-items: stretch`, thumbnail full width. Card gap drops
to `1.5rem`, the title to 19px / 1.5, the date to 16px at 40% white, and
**`.project-bio` is `display: none`** — the description is desktop-only.

## Thumbnails

Files live in `images/thumbs/` (9 of them: `22.jpg`, `carwash.jpg`,
`clarity.jpg`, `focus.jpg`, `loyalty.jpg`, `router.creditcard.jpg`,
`standard.jpg`, `sv.jpg`, plus a stray `.png`). Several are referenced only from
turned-off cards and are kept on disk on purpose.

**Lazy loading is custom, not native.** Each `<img>` ships with a 1×1
transparent GIF in `src` and the real path in `data-src`;
`loadDeferredSectionImages(view)` in `site.js` swaps them in when a view is
opened. If you rebuild cards by hand, keep that pattern or the images will load
for every view on first paint.

**One card has no image file.** Mathematical Art (currently turned off) uses a
CSS thumbnail: `.mathart-thumb` is a `div` with two radial gradients over black
holding Euclid's infinitude-of-primes proof in 12px justified Times, white with
a purple `text-shadow`. It's `role="img"` with the proof text `aria-hidden`.

## If you restore cards later

- **The copy has diverged.** All the 2026-09-04 rewrites live only in the
  `.simple-list` rows. The card `.project-bio` / `.project-title` text is the
  *original* wording — it still says "traditional forms", "TKD", and the
  "packpacking" typo. Restoring cards restores that text too.
- **Cards show titles; the list doesn't.** That was the main tradeoff of the
  switch, and restoring cards gets the names back for free.
- **Turned-off items** are wrapped in `<!-- Turned off YYYY-MM-DD; uncomment to
  bring back -->` comments *inside* the card list. HTML comments don't nest,
  which is why the list is hidden with an attribute rather than commented out.

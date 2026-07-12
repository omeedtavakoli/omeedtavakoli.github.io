# Site notes

Personal log for omeedtavakoli.com. `git log` has the full commit history — this file is for the high-level "what changed" and "what's next" so things don't fall through the cracks.

## Recent changes

### 2026-07-12
- Simplified the 404 page: removed the ASCII "404 NOT FOUND" art and centered the remaining copy.
- Snapshot of the Archive-nav refresh kept in `/v3/` as a noindex preview (`omeedtavakoli.com/v3/`). Live root stays on the previous site.
- Archive subtitle is now "Writing, projects, and other work.", with **other work** linking to GitHub.
- Renamed the research Archive card to **Academic Research - Co-authored Paper**.
- Zoomed the Academic Research thumbnail (`proofs.graphs.png`) with a tighter crop.
- Math Research Archive card now uses `images/proofs.graphs.png` as its thumbnail.
- Backstory long-form: Perplexity tip line is now `His text was short, "might be worth sending a cold email."`
- Backstory long-form: "teaching" instead of "instructing" for the martial arts first job.
- Cut the Backstory long-form college opener about always having the same problem / not leaving things alone.
- Cut the Backstory long-form sentence about leading consumer verticals / education expansion at Perplexity.
- Dropped "while in school" from the Backstory long-form Perplexity sentence.
- Tweaked Backstory long-form line on OpenAI Playground: "It felt like the iPad all over again and I couldn't put it down."
- Swapped nav order so **Archive** comes before **Resume**. Bumped `essay-chrome.js` to `v=7`.
- Renamed the research paper Archive card title to **Math Research**, with the former title as the bio.
- Restored Archive to the image-card layout (combined chronological list with thumbnails). Bumped `styles.css` to `v=81`.
- Contact nav now opens X (`x.com/omeedtavakoli`); restored the top-right **Headshot** link (`x.com/omeedtavakoli/photo`) in place of `@omeedtavakoli`. Legacy `/#contact` redirects to X. Bumped `site.js` to `v=35` and `essay-chrome.js` to `v=6`.
- Archive is one combined chronological text list again (title link + description, no Essays/Projects split, no image cards). Bumped `styles.css` to `v=80`.
- Simplified Archive into plain underlined link lists under Essays / Projects (title + short description, no dates or card chrome). Bumped `styles.css` to `v=79`.
- Replaced Archive image cards with two text lists (**Essays** and **Projects**): title links with descriptions and dates underneath, no thumbnails. Bumped `styles.css` to `v=78`.
- Restored the research paper to Archive as **Benchmarks on AI grading of mathematical proofs (paper under publication review).**, dated May 10, 2025 and linked to the paper.
- Merged Essays and Projects into a single **Archive** section (`#archive`), one date-sorted list (newest first) with the "Coming soon" family tree pinned on top. Deactivated the Essays and Projects nav links (their `#essays`/`#projects` views + routing are kept for later, just unlinked). Replaced the top-right **Headshot** link with the **@omeedtavakoli** handle (to `x.com/omeedtavakoli`) and removed the duplicate handle from the nav row. Archive inherits the original Projects view styling; restored the exact pre-session stylesheet and bumped `styles.css` to `v=77`, `site.js` to `v=34`, and `essay-chrome.js` to `v=5`.
- Contact nav is now a direct `mailto:` link; removed the Contact dropdown and X option. Legacy `/#contact` redirects to email. Bumped `styles.css` to `v=73`, `site.js` to `v=33`, and `essay-chrome.js` to `v=3`.
- Resume nav now opens LinkedIn instead of the in-site experience page; removed LinkedIn from the Contact dropdown (X + Email remain). Deleted the Resume/experience section markup and related JS/CSS. Legacy `/#experience` redirects to LinkedIn. Bumped `styles.css` to `v=72`, `site.js` to `v=32`, and `essay-chrome.js` to `v=2`.

### 2026-07-09
- Apple-feel interaction polish (no layout redesign): press scale on nav/contact/toggle links, interruptible contact dropdown open/close via CSS transitions, light frosted nav material with `prefers-reduced-transparency` fallback, and reduced-motion guards for the new motion. Bumped `styles.css` to `v=70` and `site.js` to `v=31`.
- Fixed Headshot overlapping the left nav: `backdrop-filter` on `header` was creating a containing block for the fixed Headshot link. Moved the frost to `.nav-links` instead. Bumped `styles.css` to `v=71`.

### 2026-07-08
- Created a `Version 1` snapshot of the current site and a separate `version 2` working copy for the refresh MVP.
- Reworked `version 2` into a compact single-page home plus matching essay and 404 pages, with no About page and the existing dark serif palette, red highlights, writing links, work history, projects, and clock.
- Changed the `version 2` homepage sections from bullet lists into compact inline prose and added Contact to the V2 top navigation.
- Optimized the `Version 1` copy by deferring Projects/Interests images until their sections open and replacing the 1.9 MB credit-card essay thumbnail with a 72 KB JPEG; bumped `site.js` to `v=30` in that copy.
- Promoted the optimized `Version 1` files to the live root, removed the hidden Interests page markup/route from the live root and `Version 1`, and added `noindex`/robots exclusions so `version 2` can remain in the repo as an unlinked preview.

### 2026-06-29
- Hid the **22**, **Being Focused vs Obsessed**, and **How Pokémon Came to America** Coming soon cards from the live Essays page (markup kept commented out for future publishing).
- Fixed red focus ring appearing around the whole page when navigating back to Home from another tab. Bumped `styles.css` to `v=69`.
- Refreshed the Backstory short bio: split into three paragraphs, dropped "currently" and "early hire," and added "particularly" before the philosophy names.
- Short bio now says San Francisco and Los Angeles instead of SF/LA, and notes you joined Perplexity when the company had around 120 employees.
- Rewrote the Backstory long form: iPad through Playground arc, college uncertainty, Christmas 2022 Perplexity cold email, summer 2025 move west; ends on the move instead of a contact line.
- Resume experience cards now start collapsed; click or keyboard to expand a bio. Bumped `site.js` to `v=29`.

### 2026-06-26
- Hid the **Breaking into Silicon Valley** Coming soon card from the Essays page.
- Simplified the **The Credit Card Router** card bio to "An essay on routing credit card purchases."

### 2026-06-25
- Added **The Credit Card Router** essay card below **Breaking into Silicon Valley**, linking to the June 25 X Article and using `images/thumbs/router.creditcard.png`.

### 2026-06-14
- Added a Coming soon essay card for **22**, using a black cover with centered white serif text. The essay is planned for August 4.
- Updated the **22** description to "A short note on turning 22."
- Published **Depth Builds Emotional Loyalty** at `/loyalty.html`, dated June 14, 2026, using `images/loyalty.png`, and linked its Essays card to the new page.
- Updated the **Depth Builds Emotional Loyalty** description to "An essay on loyalty across sports, media, and technology."
- Removed the delayed full-page transition between the homepage and standalone essays, which could leave the page dark or frozen during interrupted and back/forward navigations. Internal links now navigate immediately; `page-transition.js` is bumped to `v=2`.
- Renamed the remaining standalone essay pages to short filenames: `/standard.html`, `/carwash.html`, and `/fifa.html`. Updated cards, canonical/social URLs, legacy hash redirects, and documented the filename convention in `AGENTS.md`; bumped `site.js` to `v=27`.
- Changed Essays thumbnails from lazy to eager loading so their images download while the section is hidden and appear immediately when returning to the Essays tab. Projects and Interests remain lazy-loaded.
- Deep site audit: replaced the eager essay-card sources with dedicated 880px JPEG thumbnails, reducing their combined transfer size from roughly 19 MB to 1.4 MB while keeping instant tab returns. Added visible keyboard focus, removed hidden SPA views from the tab order, made Resume cards keyboard-operable, fixed malformed ampersands in URLs, and bumped `styles.css` to `v=67` and `site.js` to `v=28`.
- Fixed standalone essay content overlapping the fixed navigation at narrower desktop widths and increased browser zoom; bumped `styles.css` to `v=66`.
- Linked "Daniel Wall's podcast" to his YouTube channel and changed the essay's closing line to "That is what I call loyalty," with "loyalty" italicized.
- Tightened the product and Apple transition in **Depth Builds Emotional Loyalty**, replacing the longer product-retention passage with one sentence and removing the WWDC setup paragraph.
- Further tightened the Tim Cook section by removing the Steve Jobs comparison, succession details, and closing chapter metaphor.
- Replaced the closing paragraph with "Across every medium, this is what I call loyalty."

### 2026-06-09
- Updated the **Depth Builds Emotional Loyalty** bio to "An essay on what the World Cup, social media, and Apple reveal about emotional loyalty."

### 2026-06-07
- Added a Coming soon essay card for **Depth Builds Emotional Loyalty** directly above **How Pokémon Came to America**, using `images/loyalty.png`. The idea was inspired by Daniel Wall's interview with Gary Vaynerchuk: attention creates an audience, but depth comes from slower, more personal acts of care such as answering questions live, engaging directly, and investing in people before expecting their loyalty.

### 2026-06-06
- Added a Coming soon essay card for **Being Focused vs Obsessed** directly below **Breaking into Silicon Valley**, using `images/focus.obe.essay.pic.png` and its introductory description.
- Updated the card bio to "An essay on the difference between discipline and devotion."
- Added a Coming soon card for **How Pokémon Came to America** below **Being Focused vs Obsessed**, with a blank white 16:9 cover placeholder and the bio "An essay on the people who carried ideas between Japanese and American consumer markets." Bumped `styles.css` to `v=65`.

### 2026-06-05 (later)
- **De-duplicated essay-page chrome into `essay-chrome.js`.** The three `essay-*.html` pages each had a byte-identical nav header, favicon/manifest block, and inline clock script — the source of the recurring "bring essays in line with nav" drift (fifa/car-wash were also stale on `styles.css?v=63` vs `v=64`). New shared `essay-chrome.js` is the single source of truth: it injects the favicon links, the primary nav header (Essays active), and runs the footer clock. Each essay page now just references it (`<script src="essay-chrome.js?v=1">`, loaded synchronously above `<main>` so the header lands before the article parses — no layout shift) and keeps only its own `<head>` meta + article content. Synced fifa/car-wash to `styles.css?v=64`. To change the essay nav from now on, edit `essay-chrome.js` only. No build step.

### 2026-06-05
- **Cross-page transition wired up:** `page-transition.js` existed in the repo but was referenced nowhere, so navigating between the SPA (`index.html`) and the standalone essay pages did a hard full-page reload (white flash). Added `<script src="page-transition.js?v=1" defer>` to `index.html` and all three essay pages (`essay-highest-standard.html`, `essay-fifa.html`, `essay-robotics-or-car-wash.html`). The matching `.page-enter-prep` / `.page-leaving` CSS (`styles.css`) was already in place, so this is a wiring-only change — the fade now masks the flash while keeping per-essay shareable OG URLs.
- **Removed the "Building products across consumer and prosumer. Previously on Perplexity's growth team." messaging** from `index.html`: set the schema, `og:description`, and `twitter:description` to "Omeed Tavakoli", and deleted the visible Resume subtitle line. The Backstory long-form narrative mention of Perplexity is unchanged (it's biography, not tagline).

### 2026-06-03
- Fixed the **Headshot** nav link drifting down the page during scroll on iOS/mobile. On mobile the header is `position: relative` (in normal flow), but `.media-assets-link` was still `position: fixed` — a lone fixed element drifts during momentum scroll on iOS because scrolling happens in the nested `.about-content` overflow container, not the body. Anchored Headshot to the header's top-right with `position: absolute; top: 0; right: 0` so it tracks the nav and scrolls away with it. Bumped `styles.css` to `v=64` in `index.html`.

### 2026-06-02
- **The Highest Standard** hero: micro crop (`scale(1.05)` in `.essay-hero-wrap`) to hide the minor blank spot in the window pane; `styles.css` bumped to `v=64` on the essay page.
- **Essays:** one canonical URL per piece — standalone `essay-*.html` only; removed embedded essay bodies from `index.html`. Added `essay-highest-standard.html` with article OG/Twitter meta. **The Highest Standard** uses `#highest-standard` everywhere in-site (Essays card + legacy hash redirects); `#essay-definition-of-success` still redirects for old bookmarks. Car Wash / FIFA use `#essay-robotics-or-car-wash` and `#essay-fifa`. Synced `styles.css?v=63` on all essay pages; bumped `site.js` to `v=26`.
- **The Highest Standard** essay: tightened the Randolph/community paragraph; clarified the line about people from different worlds arriving at the same answer about success.

### 2026-06-01
- Added a local essay card and embedded essay route for **The Highest Standard** with the tagline "An essay on service.", `images/netflix.png` cover art, June 1, 2026 date, essay body with a separated end note, matching 16:9 cover crop biased upward to show more of the Korean sign, and the short `#highest-standard` route with a legacy alias from `#essay-definition-of-success`. Bumped `styles.css` to `v=63` and `site.js` to `v=24`.
- Updated **The Highest Standard** copy: replaced the NASKA footnote marker with "Champions." and removed the starred closing note from the live essay.
- Zoomed the **The Highest Standard** Essays-list thumbnail in slightly (`transform: scale(1.14)` on the `images/netflix.png` img) so the subject fills the shared 16:9 card better; box sizing is unchanged so all thumbnails stay uniform.

### 2026-05-28
- Fixed `/#interests` crashing the SPA router: `navigate()` referenced `interestsToggle`, which was removed when Interests left the nav (2026-05-20), throwing `ReferenceError` and aborting the rest of navigation. Removed the dead line; the route now renders the preserved (still nav-hidden) Interests content without erroring. Bumped `site.js` to `v=22`.
- Brought the two standalone essay pages (`essay-fifa.html`, `essay-robotics-or-car-wash.html`) in line with the live nav: dropped the removed Interests link, added the Essays tab, and marked Essays (not Projects) active.

### 2026-05-24
- Resume copy refresh: updated Perplexity, WagerPager, Claim, and T. Rowe Price descriptions; Valente Center stayed unchanged.
- Fixed narrow desktop/tablet overlap where fixed left nav could cover section content by adding a medium-width content gutter (`601px`–`1240px`) and bumping `styles.css` to `v=57`.
- Short Backstory refresh: added philosophy line, removed "etc" from the martial arts list, moved contact into its own paragraph, and kept "here" linked to X.
- Fixed desktop essay views (Car Wash, FIFA) being cut off: removed `body.essay-route-active .center { margin-top: -6rem }` which was shifting the center box above the body's `overflow: hidden` clip boundary, hiding the top of the essay and truncating the bottom.

### 2026-05-20
- Removed Interests from the nav and moved Contact to its slot (bottom of left nav, after Projects).
- Interests page content (`#interests-view`) is fully preserved in `index.html` — just hidden from the nav. See **"Restoring Interests"** section below for exact steps to re-enable.
- Desktop Contact fixed-positioning (top-right under Headshot) removed; Contact now lives in the left nav flow like all other links.

### 2026-05-19
- Contact dropdown: X and LinkedIn entries replaced with their logo icons (SVG, grey/turns red on hover); Email stays as text.
- Contact dropdown font size bumped to match the "Contact" nav-link size (22px desktop, 18px mobile).
- About backstory: "the best way to reach me is on X" → "the best way to reach me is here" (same X profile link).

### 2026-05-18
- Split essays out of Projects into a new top-level Essays tab; embedded essay routes (`#essay-robotics-or-car-wash`, `#essay-fifa`) now activate the Essays nav.
- Reordered Essays: Breaking into SV (Coming soon) → Car Wash → Buy Clarity → FIFA.
- Removed AI Math Proofs project card; added paper link inline to the Valente Center entry on Resume instead.
- Updated Projects tagline: "A few trails I've followed outside the main road, from coding projects to interviews to travel stories."
- Updated Tavakoli Family Tree description to "A coding project to map my family history."
- Desktop layout: `header` is now `position: fixed` so all section views start much higher (no longer pushed below the vertical nav).
- Mobile layout: `header` stays `position: relative` on viewports ≤600px (fixes nav/content overlap on iPhone).
- Mobile padding: bumped `.about-content` top padding to 4rem so titles clear the top fade overlay.
- Desktop footer: clock moved to bottom-left, stacked iOS-style (time on top, date below). Contact link moved to bottom-right with popup (X / LinkedIn / Email) that opens **upward**. Contact removed from top nav.
- Mobile footer: kept the previous layout — Contact stays in the top nav (popup opens downward), footer just shows time/date stacked at bottom-left. Implemented via `position: fixed` on `.footer-contact` inside the mobile media query so the single element renders in different places per viewport.
- Linked the word "X" in the About backstory (short version) to `x.com/omeedtavakoli`, opens in a new tab.
- Reworked Contact placement again. Desktop: footer reverted to original row layout (time left, date right); Contact moved to the top-right corner under Headshot with a downward popup. Mobile: Contact is now a real child of `.nav-links` (wrapped in `.contact-wrap`) so the gap between Contact and the rest of the nav items is uniform — no more fragile hardcoded `top: 12.5rem`.
- Bugfix: the above broke on desktop because the `.contact-wrap { position: relative }` base rule was declared *after* the `@media (min-width: 601px)` override, so the override never won. Moved the desktop override into a media query that comes after the base rules.
- Tuned Contact's vertical position on desktop from `top: 5rem` to `top: 4.55rem` so the visual gap between Headshot and Contact matches the 0.5rem gap between left-nav items.

## Ideas / next

- Publish the **Tavakoli Family Tree** project (currently Coming soon).
- Write **Breaking into Silicon Valley** essay (currently Coming soon).
- Develop **How Ideas Cross the Pacific** (currently listed on the site as **How Pokémon Came to America**). Use Alfred Kahn bringing Pokémon to America as the narrative spine, then widen into examples such as Apple in Japan to show how Japanese creators and American operators have repeatedly amplified each other's ideas. Working bio: "An essay on the people who carried ideas between Japanese and American consumer markets." Keep the piece story-led rather than turning it into a broad historical survey.
- Decide if Grappling Analytics belongs in Projects long-term or eventually moves back to Resume.
- Stashed note from **The Highest Standard** for possible reuse: "People say you need to get outside of your comfort zone. I think you should double down on what you are good at first. As you grow you can start to iterate and work on the things that make you uncomfortable. If you only do things that make you uncomfortable you won't be flourishing. Start from the foundation of what makes you excel and build from there. Because if things start to decline, you can always go back to what you know works. Trying new things when everything is already falling apart might just make the fall worse."

## Restoring Interests

The Interests page is fully preserved in `index.html` (the `#interests-view` div with all content). To bring it back:

### 1. `index.html` — add nav link back after Projects and before `.contact-wrap`

```html
<a class="nav-link" href="#interests" id="interests-toggle">Interests</a>
```

Place it directly before `<div class="contact-wrap">` in the `<nav>` block.

### 2. `styles.css` — restore desktop Contact fixed positioning

Add this block back after the `.contact-wrap { position: relative; }` base rule:

```css
/* Desktop: pull Contact out of the nav stack and place it under Headshot. */
@media (min-width: 601px) {
  .contact-wrap {
    position: fixed;
    /* Sits one nav-link-row + 0.5rem gap below Headshot (Headshot top: 2.42rem). */
    top: 4.55rem;
    right: 3rem;
    z-index: 2;
  }
  .contact-panel {
    left: auto;
    right: 0;
    align-items: flex-end;
    padding: 0 0.05rem 0.25rem 0;
  }
}
```

### 3. `site.js` — restore interestsToggle variable and references

Add back after `essaysToggle`:
```js
var interestsToggle = document.getElementById('interests-toggle');
```

Update `allToggles`:
```js
var allToggles = [aboutToggle, experienceToggle, projectsToggle, essaysToggle, interestsToggle];
```

Update the nav click handler forEach:
```js
[aboutToggle, experienceToggle, projectsToggle, essaysToggle, interestsToggle].forEach(function(toggle) {
```

Re-add the active-toggle line inside the `#interests` branch of `navigate()` (it was removed on 2026-05-28 to fix the crash, since there was no nav element to highlight):
```js
} else if (hash === '#interests') {
  interestsView.classList.add('visible');
  interestsToggle.classList.add('active');
}
```

The `interestsView`, `#interests` route in `navigate()`, and the `#interests` case in `inSection` are otherwise still in `site.js` untouched.

### 4. Bump cache busters

Increment `styles.css?v=N` and `site.js?v=N` in `index.html`.

---

## Things tried and dropped

Keeping these here so we don't re-litigate later:

- **Subhead grouping inside Projects** (Essays / Interviews / Research / Other) — added visual noise without enough payoff for the current item count.
- **Bottom-right corner Interests link with home-only fade** — created a "hidden destination" pattern that broke the implicit "nav shows everything" promise.
- **Inline prose discovery links in About/Projects** (e.g. "feel free to check out my personal projects or interests") — felt like a maze; prose-as-navigation is a blog pattern, not a portfolio pattern.

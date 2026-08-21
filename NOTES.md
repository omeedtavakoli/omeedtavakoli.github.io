# Site notes

Personal log for omeedtavakoli.com. `git log` has the full commit history — this file is for the high-level "what changed" and "what's next" so things don't fall through the cracks.

## Recent changes

### 2026-08-20
- **Family Tree's closing line drops the platform name: "message me on X" is now "message me here."** The link target is unchanged — same `href` to `x.com/omeedtavakoli`, same `target="_blank"`. Naming the platform inside the anchor text was doing the link's job twice, and it dated the sentence to whatever the site is called this year. "here" also matches how Bio already phrases the same handoff ("The best way to reach me is here"), so the two contact points on the site now read the same way. Cost is that a visitor no longer knows where the link goes before clicking; accepted, since it's an external link on hover and the page is two sentences long. This is the only place the string appeared — the Archive card for Family Tree stopped carrying "Message me on X for access" when the landing page shipped on 2026-08-09. Copy-only change in `familytree/index.html`, no CSS/JS, so no cache-buster bump.
- **Bio's middle paragraph replaced — it now leads with work rather than with martial arts.** Was: "I'm Iranian-American and a martial artist (mainly BJJ, Muay Thai, Silat, and TKD). I also enjoy reading philosophy (particularly Rumi, Aristotle, Tolstoy)." Now: "In the past, I've enjoyed working on math evals research, consumer AI products, AI-enabled radiology, and competitive Taekwondo. I study Econ with a CS minor at USC. I'm Iranian-American, and outside of work I'm usually reading philosophy (Rumi, Aristotle, Tolstoy are favorites)." The section had nothing in it about what he actually works on — a visitor arriving from a project card got location, martial arts, and philosophy, and had to infer the rest from Archive. The new middle sentence carries the four work threads plus school; identity and reading move to the end, which is where they belong once there's something in front of them. **The martial arts list is gone and only "competitive Taekwondo" survives**, folded into the work list rather than standing as its own clause — BJJ, Muay Thai, and Silat are no longer named anywhere on the site. That's a deliberate narrowing, not an omission: the remaining mention is the one that reads as a pursuit rather than a hobby inventory, and it supersedes the three rounds of wording on that parenthetical logged under 2026-08-09 below. Philosophy kept all three names but swapped "particularly X, Y, Z" for "X, Y, Z are favorites" — same list, less hedging in front of it.
- First and third paragraphs are untouched: the San Francisco / Los Angeles / East Coast opener, and "The best way to reach me is [here]" pointing at `x.com/omeedtavakoli`. The contact link is still X, per the email removal on 2026-08-09.
- Still three paragraphs, so the note under 2026-08-10 about `#backstory-short p` running at 22px against a 1100px `.about-content > *` max-width still applies — the middle paragraph is now the long one and is where line length will show first if it ever needs revisiting. Copy-only change in `index.html`, no CSS/JS touched, so no cache-buster bump.

### 2026-08-12
- **Essays list is text-only now — thumbnails removed from all its cards.** The `#essays-view` cards each opened with a 16:9 thumb; they are now just title, bio, date. Removed the whole `div.project-thumb-wrap`, not only the `img`, since the wrap carries the aspect ratio and border and would have collapsed to an empty bordered box. Eight wraps went, including the two inside the commented-out drafts (Being Focused vs Obsessed, How Pokémon Came to America) so they match when they are eventually published — the Pokémon one held an `.essay-cover-placeholder` div rather than an `img`. **Archive keeps all of its thumbs** and is untouched: the essays appear there too, alongside video, research, and interview cards that are far more image-dependent. The two views are distinguishable in markup because Essays used `loading="eager"` with a real `src` while Archive uses `loading="lazy"` with a `data-src` placeholder — worth knowing if these ever need separating again. No CSS changes: `.project-thumb-wrap` / `.project-thumb` are still live for Archive, so nothing went dead. `.project-item` is `display:flex` and `.project-info` is `flex:1`, so the info block just takes the full row with no layout rule needed. Markup-only change in `index.html`, no CSS/JS, so no cache-buster bump.
- **Hero images removed from the three posts that had them** — `loyalty`, `standard`, and `carwash`. All five standalone pages now open identically: `h1`, byline, straight into `.essay-lead`. `22` and `familytree` never had a hero, so the three that did were the inconsistent ones. **The image files and their `og:image`/`twitter:image` tags stay exactly as they were** — those are what give the links a picture when shared on X, and they are independent of whether the image also appears in the page body. Removing them would have quietly turned every shared link into bare text. `standard` also lost the `div.essay-hero-wrap` that only existed to hold its image. **Left the now-unused CSS in place:** `.essay-hero`, `.essay-hero--centered`, `.essay-hero-wrap`, and the two `.essay-hero-wrap` descendant rules (`styles.css` ~906–940) are dead, but deleting them means a `styles.css` version bump across all six pages for no visitor-visible gain, and they are what a hero would need if one ever comes back. Note `.essay-cover-image` (line 617) is **not** dead — the Archive thumb for `standard` still uses it. Copy/markup-only change, no CSS/JS, so no cache-buster bump.
- **Family Tree page drops its opening line** — "I could never work out how my extended cousins were related to me. It kept bugging me, so I went and fixed it." is gone, and the page now opens on "I spent a year piecing together my family's history across 11 generations, in both English and Persian." The removed line was the motivation; what's left is the thing itself. Promoted the remaining sentence to `.essay-lead` rather than leaving the class orphaned — all five standalone pages open lead-size, and dropping it here would have made this the only one that didn't. Back to the two sentences the page was described as when it shipped: what it is, then how to ask. Copy-only change in `familytree/index.html`, no CSS/JS, so no cache-buster bump.

### 2026-08-10
- **22 now opens on a bare "22." paragraph**, above "That's how old I turn today." The piece was written so the `h1` supplies the antecedent for "That's" — the number was only in the title, and the body's first word pointed up at it. Repeating it as the first line of the body means the reference resolves inside the prose, so the piece reads on its own anywhere the heading isn't (an excerpt, a screenshot, a reader view). Trade-off is on the page itself: the `h1` and the first line now both say 22, a beat of repetition. Kept as `.essay-lead` so the opener and the sentence it sets up are the same size — the whole visible piece above the fold is now lead-size, which suits four sentences. Copy-only change in `22/index.html`, no CSS/JS, so no cache-buster bump.
- **"Backstory" is now "Bio", in the section heading and in the nav.** Both the home nav (`index.html`) and the essay-page nav (`essay-chrome.js`, which is the single source for all five standalone pages) previously said "About" while the section it opened was headed "Backstory" — two names for one thing. Now both say Bio. **The hash stayed `#about`** and so did every id (`about-view`, `about-toggle`, `section-heading-about`) and the `.about-*` CSS classes: `/#about` is the URL that's been shared and bookmarked, and `site.js` routes on that string in five places. Renaming the label is copy; renaming the hash would be a breaking change for nothing. So the code will keep saying "about" while the page says "Bio" — that's deliberate, not drift. Bumped `essay-chrome.js` to `v=8`.
- **Bio copy now runs at essay body size — 22px/1.72, up from 18px/1.75 (19px/1.65 on mobile, matching `.essay-article p`).** The section read noticeably smaller than the writing it sits next to. Scoped the rule to `#backstory-short p`, **not** `.about-content p`, which is the trap here: `.about-content p` (0,1,1) also wins over `.about-updated` (0,1,0), so it's what actually sets the Archive/Projects/Essays subtitles — they render at 18px today, not the 16px their own rule asks for. Widening it would have silently blown those three up to 22px too. Left the color alone: Bio prose is `rgba(255,255,255,0.8)` against the essays' `0.88`, so it's still a touch dimmer — easy to match later if it reads as inconsistent rather than as a section that's meant to sit back. One thing to watch: `.about-content > *` maxes out at 1100px against the essay column's 760px, so at 22px the Bio lines get long on a wide window. It's three short paragraphs, so it holds — worth revisiting if that section ever grows. Bumped `styles.css` to `v=89` across all six pages.
- Family Tree lead now opens "I could never work out how my extended cousins were related to me" — dropped the "For years" that preceded it. The phrase front-loaded a duration before the reader knew what was being measured, and the sentence already implies it went on a long time ("could never work out", "kept bugging me"). Starting on "I" gets to the problem in three words. Copy-only change in `familytree/index.html`, no CSS/JS, so no cache-buster bump.

### 2026-08-09
- Pointed the standalone pages at `styles.css?v=88`, the same version `index.html` already used — they were stranded on `v=71`. Identical bytes, but a different URL is a different cache entry, so clicking an Archive card refetched a stylesheet the browser already had. One-word change per page; nothing else touched.
- **Reverted a larger attempt at the same problem** (commit `b6f98a0`, reverted in `b328409`). It moved the nav out of `essay-chrome.js` into each page's HTML, added a CSS `@view-transition` block, deleted the long-dead `page-transition.js`, and added a `check-site.sh` + page template to police the duplication it introduced. It made navigation feel worse, and the machinery was out of proportion to a stylesheet version being stale. Both commits are in history if any single piece is ever worth revisiting on its own — the `@view-transition` block especially, which is two lines and independent of the rest. The diagnosis in that commit still stands and is worth keeping: crossing between `/` (an SPA) and a standalone page is a genuine document teardown, `essay-chrome.js` builds the header in JS so the corner is empty until it runs, and `page-transition.js` has been a no-op since `313cf4e` (2026-06-14) with its CSS still sitting unused in `styles.css`.
- **22, second sentence: "My odds of getting here were non-zero, and that turned out to be the only thing that mattered." → "My odds of getting here were non-zero, but barely. That turned out to be the only thing that mattered."** Splits one sentence into two and swaps the connector. "and" made the odds and their consequence a single continuous thought, which let the reader slide past the odds to get to the claim; "but barely" stops on the odds and concedes how thin they were before the claim is allowed to land. The full stop does the same work structurally — the proposition now stands alone instead of riding in on a subordinate clause. Piece is five sentences now rather than four; the propositional register and the closing line are untouched. Copy-only change in `22/index.html`, no CSS/JS, so no cache-buster bump.
- Retired the stale **Essay filenames** section in `AGENTS.md` in favor of **Essay page URLs**, since the flat-file convention it documented (`loyalty.html`, `standard.html`) no longer exists after the directory-index move below. Now states the directory-index layout, that the public URL carries a trailing slash and should be written that way everywhere, that `.html` paths 404 deliberately, and — the part that silently breaks — that every in-page path must be absolute or it resolves under the page's own directory and 404s. Also dropped "Publish the Tavakoli Family Tree project" from **Ideas / next**; it shipped today. Repo-docs only, nothing visitor-facing.
- **Dropped `.html` from every page URL, and the `.html` URLs no longer resolve at all.** Each standalone page moved from a flat file to a directory index: `22.html` → `22/index.html`, and the same for `familytree`, `loyalty`, `standard`, `carwash`. The pages are now at `/22/`, `/familytree/`, `/loyalty/`, `/standard/`, `/carwash/`, and `/22.html` returns the 404 page. Two approaches were considered and the first was built and then thrown away: GitHub Pages' server already falls back from `/foo` to `foo.html`, so simply rewriting the links to `/22` worked without renaming anything — but it left both spellings serving 200 forever, with only a `canonical` tag to say which was real. The requirement was that the extension be gone, not merely optional, so the flat files had to go; moving them into directories is the only way to make `/22.html` actually 404 on Pages. **This is a breaking change and it was chosen deliberately: old `.html` links are dead**, including anything already shared on X and any existing bookmarks. No redirect stubs were left behind — a stub would have to be a file named `22.html`, which is exactly the thing being removed. **The trailing slash is unavoidable.** A directory index means the URL is `/22/`, not `/22`; Pages 301s the bare `/22` to `/22/`. The only way to get a bare `/22` is a flat file, which is what we just removed. Links and canonicals are all written with the slash so nothing takes a needless redirect hop. **Every relative path inside the moved pages had to become absolute** — this is the part that silently breaks. `styles.css?v=71`, `essay-chrome.js?v=7`, `page-transition.js?v=2`, and the hero images (`images/car.wash.png`, `images/loyalty.png`, `images/netflix.png`) were all relative, and from `/22/index.html` they would have resolved to `/22/styles.css` and 404'd — an unstyled page with no nav. All are now rooted with a leading `/`. Anything new added to these pages must use absolute paths for the same reason. The `og:image`/`twitter:image` tags were already absolute URLs and needed no change. Also updated the three legacy hash redirects in `site.js` (`#highest-standard`, `#essay-definition-of-success` → `/standard/`, `#essay-robotics-or-car-wash` → `/carwash/`). Bumped `site.js` to `v=40`; no CSS changes. **Caveat for local preview:** directory indexes do work in `python -m http.server`, so local preview is actually more faithful than it was under the fallback approach.
- **Removed the email address from the site entirely; contact is now X everywhere.** It appeared in three places, all in `index.html`: the ASCII-art banner comment at the top, the home-page name-box link, and the new Family Tree card. All three now point at `x.com/omeedtavakoli`. The banner one was the worst of the three — bare text rather than an `href`, so a harvester didn't even need a link parser, and being inside an HTML comment hid it from readers but not from anything fetching the page. This also makes the site consistent: the Contact nav link and the Backstory "the best way to reach me is here" link were already X, so email was the odd one out. No other page ever carried the address (`carwash.html`, `loyalty.html`, `standard.html`, `404.html`, `essay-chrome.js` were all clean). Safe to rewire the name-box because the only JS that touched it — the underline-swoosh block in `site.js` — has been commented out since 2026-07-25.
- Brought the **Tavakoli Family Tree** card back to Archive, dated **August 2, 2026**, so it sits between 22 (Aug 4) and The Credit Card Router (Jun 25). It had been commented out as a "(Coming soon)" `div.project-item.pending` since before 2026-07-12. It is deliberately **not** a link to the project: the tree isn't public and shouldn't be discoverable just because it's on the site, so the card goes to a new landing page, `familytree.html`, which explains the project and hands off to X for the link. Access is granted by conversation, not by URL. Two earlier versions were tried and dropped the same day: a `mailto:` with a pre-filled "Tavakoli Family Tree — access request" subject (died when the address came off the site), then a bare link to the X profile (no context — visitors had no idea what they were asking for). The landing page is two sentences — what it is, then how to ask — and it also fixes the bio: the card no longer has to carry "Message me on X for access", so it just describes the thing. `tavakolifamily.com` is live but still `noindex`, so the tree stays out of search and the only real route in is through him — which is the point, and worth re-checking if that meta tag ever comes off. Dropped the `pending` class so it takes the normal hover, kept the CSS placeholder thumb (Tavakoli Family / خانواده تواکلی — no image file involved), and updated its `aria-label` off "coming soon". Bio rewritten from "Coding project to map my family history." to name the scope and tell people the click sends mail, since a card that opens a mail client instead of navigating is otherwise a surprise. Note the `&` in the href must stay `&amp;` or the `body` param is silently dropped. This is the second `mailto:` to the same address on the page (the home name-box is the first), so it's no new scraper exposure.
- Published **22**, the short note on turning 22, as `22.html`. It had been sitting as a hidden "Coming soon" card since 2026-06-25 (see the 2026-06-25 and 2026-07-12 entries below). New page follows the `standard.html` template — `essay-chrome.js` for the nav, `page-transition.js` for the flash mask — but runs **no hero image**; it opens straight into the copy. `images/22.png` is still the OG/Twitter card image, which is a separate thing from in-article art. Dated **August 4, 2026** (the birthday), not the publish date, so it sorts to the top of Archive above The Credit Card Router. Added a live card at the top of the Archive list and replaced the commented-out placeholder in the nav-hidden Essays list with the same live card. Body went through four passes and landed at **four sentences total**, two paragraphs. Everything between the opener and the two closing claims got cut — the phone call, the peers, the small step, the "looking back at it now" framing. That material was scaffolding around two propositions ("a non-zero chance was the only thing needed" and "what you do with it is measured by what you leave"), and stating them flat is stronger than walking up to them. Cutting the phone call also disposed of the trailing "the…" quote, which had no ending written for it. Register is propositional rather than retrospective, matching the Aristotle/Rumi passage in `standard.html`. At this length the piece genuinely is a "short note", which is what the card has always promised. Final line narrowed from "leaving the world better than you found it" to "leaving it better than I found it" — at four sentences, "the world" was writing a bigger cheque than the piece cashes, and "it" picks up "here" from the previous sentence so the scope is SV rather than everything. Both thumbs deliberately **omit** `.essay-cover-image`: that class sets `object-position: center 34%`, which exists for `standard.jpg` where the cover text sits high in the frame. The 22 glyph is already centered in its source (measured at 50.3% / 49.0% of an 880×880 square), so `center 34%` pushed it visibly low in the 16:9 crop. Plain `.project-thumb` falls through to the default `center center` and lands it dead center. No CSS/JS edits, so no cache-buster bump.

### 2026-07-30
- Dropped the TKD rank from the Backstory line — the parenthetical is now just "(mainly BJJ, Muay Thai, Silat, and TKD)". "Plus a third-degree black belt" read as ego, and the connector wasn't the cause: naming a rank at all is what draws the eye, so no choice of conjunction fixed it. Cutting the rank keeps the four arts and loses the flex; it still comes up in conversation if anyone asks. This supersedes the "plus" bullet below, which was live for about ten minutes. Copy-only, no cache-buster bump.
- Follow-up to the paragraph rewrite below: the martial arts parenthetical is now "(mainly BJJ, Muay Thai, and Silat, plus a third-degree black belt in TKD)". "Mainly" marks the list as non-exhaustive, which is both more accurate and more relaxed than a bare inventory. "Plus" re-scopes the belt out from under "mainly" — you don't *mainly* hold a rank — and the serial "and" before Silat closes the series so the belt stops reading as a fourth art. Copy-only, no cache-buster bump.
- Reworded the second Backstory paragraph. Was: "I'm Iranian-American. I like martial arts (BJJ, Muay Thai, Silat, third-degree black belt in TKD), and I enjoy reading philosophy (particularly Rumi, Aristotle, Tolstoy)." Now: "I'm Iranian-American and a martial artist (BJJ, Muay Thai, Silat, a third-degree black belt in TKD). I also enjoy reading philosophy (particularly Rumi, Aristotle, Tolstoy)." Three changes: "I like martial arts" → "a martial artist" (identity rather than preference, and parallel to "Iranian-American"); added the article in "a third-degree black belt" so that item reads as a rank instead of a fourth art; and "I also enjoy" opens the second sentence so it continues the first rather than restarting. An intermediate draft folded all three into one "I'm X, a Y, and a reader of philosophy" series — dropped it because "a reader of philosophy" read as try-hard, and because the version with "I enjoy" in the third slot broke parallelism ("I'm A, B, and I enjoy C"). Splitting into two sentences keeps the casual register and avoids the broken series. Copy-only change in `index.html`, no CSS/JS touched, so no cache-buster bump.

### 2026-07-26
- Archive subtitle: "Writing, projects, and other work." → "**Essays**, projects, and other work." The original wasn't ungrammatical — "writing" is a mass noun, so it takes a singular verb the same way "work" does — but it read as singular next to the plural "projects", and "Essays" matches what the page actually lists. Copy-only change in `index.html`, no CSS/JS touched, so no cache-buster bump.

### 2026-07-25
- **Fixed the nav menu disappearing on About and Archive.** Regression from the `z-index: 2` added to the section views earlier today (the tap-blocking-overlay fix below). `header` was already at `z-index: 2`, and both live in the root stacking context, so with an equal z-index the later element in the DOM wins — the opaque section views painted straight over the fixed nav and the Headshot link. Raised `header` to `z-index: 3` so it outranks the section views; the views still sit above `.name-box` (`z-index: 1`), so the overlay fix is intact. Home was never affected. Bumped `styles.css` to `v=88`.
- Section pages now respond to a swipe on mobile. After the long Backstory came out, About's copy fit the viewport exactly, so the scroll container had zero overflow — and iOS gives no elastic bounce in that state, so the page didn't move at all on a swipe and read as frozen rather than simply short. Added an `.about-content::after` trailing flex item (`flex: 0 0 18vh`, mobile only) to guarantee a little scrollable overflow. It sits below the fold so it costs nothing visually. Drop it if the sections get long enough to scroll on their own again. Bumped `styles.css` to `v=87`.
- **Fixed an invisible tap-blocking overlay on the section pages.** The hidden home layer was still eating touches. Leaving Home sets `.home-view.hidden { opacity: 0; pointer-events: none }`, but transparent elements still hit-test, and that `pointer-events: none` never reached `.name-box` — a descendant's `pointer-events: auto` overrides an ancestor's `none`. `.name-box` also carries `z-index: 1` while the section views had no `z-index`, so an invisible `position: fixed` mailto link sat at dead screen center, painting and hit-testing *above* the section pages. Any swipe starting mid-screen — i.e. every normal scroll gesture — landed on that link instead of `.about-content`, so the page read as frozen (and a tap there would fire the mail client). Three-part fix: `visibility: hidden` on `.home-view.hidden` (delayed by the 0.5s fade so the transition still plays) to drop the layer out of hit testing; an explicit `.home-view.hidden .name-box { pointer-events: none }` to kill the override during the fade window; and `z-index: 2` on the section views so they stack above the home layer. Also dropped `-webkit-overflow-scrolling: touch` from `.about-content` — deprecated since iOS 13 and a known cause of dead scroll containers under a composited ancestor, which `.about-view` is. Pre-existing since `bb3ee5b`, not a regression from today's Backstory edit; the shorter About page just made it obvious. Bumped `styles.css` to `v=86`.
- Fixed the home name sitting too low on mobile. `.name-box` positioned itself with `top: 48.5vh` (desktop) / `top: 47vh` (mobile), but on iOS Safari `vh` resolves against the *large* viewport — the height with the URL bar retracted — so the offset landed below true visual center on the visible screen. Added a `dvh` line under each `vh` line as a progressive-enhancement pair, matching what `body` already does with `min-height: 100vh` / `100dvh`. `dvh` is safe for this element specifically because Home never scrolls (`body` is `overflow: hidden`), so the value can't change mid-scroll and shift the name. Bumped `styles.css` to `v=85`.
- Backstory is now a single version. Removed the **Long** copy and the whole **Short / Long** toggle — the pill markup in `index.html`, the swoop-animation IIFE in `site.js`, and the `.backstory-toggle` / `.toggle-*` / `.swoop-*` rules in `styles.css`. Also cut the second sentence of the short opener ("Before, I was on the product and growth team at Perplexity when the company had around 120 employees."), so it now ends at "originally from the East Coast." The entire pre-edit section — the long version *and* the original short version, including the paragraphs that survived — is parked verbatim in `drafts/backstory-parked.md` for possible reuse; `drafts/` is repo-only and isn't linked from the site. Added `#backstory-short { margin-top: 1.6rem }` to hold the space the toggle used to occupy, keeping the heading→body rhythm consistent with the other tabs. Bumped `styles.css` to `v=84` and `site.js` to `v=39`.
- Hid the **Tavakoli Family Tree** Coming soon card from the live Archive page and the (nav-less) `#projects` page — markup kept commented out in both places for future publishing, matching how the Essays Coming soon cards were handled on 2026-06-29. No Coming soon cards render anywhere on the site now. The Credit Card Router is the first Archive item. No CSS/JS touched, so no cache-buster bump; the `.project-item.pending` and `.project-placeholder*` styles are intentionally left in `styles.css` for when the card returns.

### 2026-07-23
- Removed the FIFA essay: deleted its listing from both the Archive and Essays tabs in `index.html`, dropped the `#essay-fifa` → `/fifa.html` legacy hash redirect from `site.js`, and trashed `fifa.html` and the listing thumbnail `images/thumbs/fifa.jpg`. Kept the essay photo `images/fifa.essay.image.png`. Bumped `site.js` to `v=38`.

### 2026-07-15
- Short Backstory opener now reads: "I'm based in San Francisco and Los Angeles, originally from the East Coast."
- Deprecated the red underline under the home name (load swoosh + hover/touch + return-to-home replay). It was flaky — sometimes missing or incomplete on first visit and when navigating back to Home. Code kept commented in `site.js` / `styles.css` (search `DEPRECATED name underline` / `DEPRECATED 2026-07-15`). Bumped `styles.css` to `v=83` and `site.js` to `v=37`. Restore when ready — see Ideas / next.

### 2026-07-12
- Fixed the home name sitting left of center on mobile/iOS: moved `letter-spacing` onto an inner `.name-box-label` and canceled the trailing tracking with `margin-right: -0.35em`, so `translate(-50%)` centers the glyphs instead of the glyphs-plus-extra-space. Bumped `styles.css` to `v=82`.
- Apple-design interaction functionality pass (no visual/layout/copy changes): made the Backstory Short/Long toggle interruptible (removed the input lockout and fixed 130ms timer, now driven off `transitionend` with re-targeting on mid-swap clicks), added `prefers-reduced-motion` JS guards + fallback timeouts for the underline swoosh and backstory swap so state can't get stranded, and made the mobile underline hide timer cancel-safe on re-touch/cancel/visibility change. Bumped `site.js` to `v=36`.
- Promoted the Archive-nav refresh to the live root (Archive image-card list, Contact→X, Headshot restored, Academic Research card, "other work" GitHub link, Backstory edits, simplified centered 404). Removed the `/v3/` preview folder.
- Deprecated the previous live site entirely: deleted the `/old/` folder so it is no longer served (still recoverable via git history) and dropped its `robots.txt` entry.
- Removed the legacy `Version 1` and `version 2` preview folders from the repo (recoverable via git history) and cleared their `robots.txt` disallow entries.
- Simplified the 404 page: removed the ASCII "404 NOT FOUND" art and centered the remaining copy. Removed all fade-in animations and the link color transition.
- Earlier same-day iteration on Archive (text lists, splits) and a `/v3/` preview folder — now superseded by promoting the refresh to root.

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

- **Bring back the red underline under the home name.** Deprecated 2026-07-15 because it didn't reliably play on first load or when returning to Home. Uncomment the blocks marked `DEPRECATED 2026-07-15` in `site.js` (underline helpers + `playUnderlineSwoosh()` on return-to-home) and `styles.css` (keyframes, `.is-entering` / `.underline-in` / `.underline-out`, `.name-box::after`, mobile `::after` offset). Then fix the flakiness before shipping.
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

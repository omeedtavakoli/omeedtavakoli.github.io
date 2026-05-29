# Site notes

Personal log for omeedtavakoli.com. `git log` has the full commit history — this file is for the high-level "what changed" and "what's next" so things don't fall through the cracks.

## Recent changes

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
- Decide if Grappling Analytics belongs in Projects long-term or eventually moves back to Resume.

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

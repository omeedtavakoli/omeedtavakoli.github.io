# Site notes

Personal log for omeedtavakoli.com. `git log` has the full commit history — this file is for the high-level "what changed" and "what's next" so things don't fall through the cracks.

## Recent changes

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

## Ideas / next

- Publish the **Tavakoli Family Tree** project (currently Coming soon).
- Write **Breaking into Silicon Valley** essay (currently Coming soon).
- Decide if Grappling Analytics belongs in Projects long-term or eventually moves back to Resume.

## Things tried and dropped

Keeping these here so we don't re-litigate later:

- **Subhead grouping inside Projects** (Essays / Interviews / Research / Other) — added visual noise without enough payoff for the current item count.
- **Bottom-right corner Interests link with home-only fade** — created a "hidden destination" pattern that broke the implicit "nav shows everything" promise.
- **Inline prose discovery links in About/Projects** (e.g. "feel free to check out my personal projects or interests") — felt like a maze; prose-as-navigation is a blog pattern, not a portfolio pattern.

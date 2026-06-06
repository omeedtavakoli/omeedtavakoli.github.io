// Shared chrome for the standalone essay pages (essay-*.html): favicon links,
// the primary nav header, and the footer clock. This is the single source of
// truth for all three — change the nav here and every essay page updates, so
// they can't drift out of sync with the homepage nav anymore.
//
// Load this synchronously near the TOP of <body> (no `defer`), before <main>.
// The header is then inserted before the article parses, so there's no layout
// shift. The clock waits for DOMContentLoaded because the footer spans parse
// after this script runs.
(function essayChrome() {
  // --- Favicon links (mirrors the homepage set) -----------------------------
  var head = document.head;
  if (head) {
    [
      { rel: 'shortcut icon', href: '/favicon.ico?v=5' },
      { rel: 'icon', href: '/favicon.ico?v=5', sizes: 'any' },
      { rel: 'icon', href: '/favicon-32x32.png?v=5', type: 'image/png', sizes: '32x32' },
      { rel: 'icon', href: '/favicon-16x16.png?v=5', type: 'image/png', sizes: '16x16' },
      { rel: 'icon', href: '/images/favicon.svg?v=5', type: 'image/svg+xml' },
      { rel: 'apple-touch-icon', href: '/apple-touch-icon.png?v=5', sizes: '180x180' },
      { rel: 'manifest', href: '/site.webmanifest?v=5' }
    ].forEach(function(def) {
      var link = document.createElement('link');
      link.rel = def.rel;
      link.href = def.href;
      if (def.type) link.type = def.type;
      if (def.sizes) link.sizes = def.sizes;
      head.appendChild(link);
    });
  }

  // --- Primary nav header ----------------------------------------------------
  // Essays is marked active because every page using this file is an essay.
  var header = document.createElement('header');
  header.innerHTML =
    '<nav class="nav-links" aria-label="Primary">' +
      '<a class="nav-link" href="/">Home</a>' +
      '<a class="nav-link" href="/#about">About</a>' +
      '<a class="nav-link" href="/#experience">Resume</a>' +
      '<a class="nav-link active" href="/#essays">Essays</a>' +
      '<a class="nav-link" href="/#projects">Projects</a>' +
      '<a class="nav-link" href="/#contact">Contact</a>' +
    '</nav>' +
    '<a class="media-assets-link" href="https://x.com/omeedtavakoli/photo" target="_blank" rel="noopener">Headshot</a>';

  // Insert right after the skip-link (and before <main>, which hasn't parsed
  // yet) so the article flows below the header with no visible jump.
  var skip = document.querySelector('.skip-link');
  if (skip && skip.parentNode) {
    skip.parentNode.insertBefore(header, skip.nextSibling);
  } else if (document.body) {
    document.body.insertBefore(header, document.body.firstChild);
  }

  // --- Footer clock ----------------------------------------------------------
  function startClock() {
    var dateEl = document.getElementById('date');
    var timeEl = document.getElementById('time');
    if (!dateEl || !timeEl) return;
    function update() {
      var now = new Date();
      dateEl.textContent = now.toLocaleDateString('en-US', {
        month: 'numeric', day: 'numeric', year: 'numeric'
      });
      timeEl.textContent = now.toLocaleTimeString('en-US', {
        hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false
      });
    }
    update();
    setInterval(update, 1000);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', startClock);
  } else {
    startClock();
  }
})();

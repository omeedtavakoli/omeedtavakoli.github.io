// Shared chrome for the standalone essay pages: favicon links, primary header,
// and footer clock.
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

  // --- Primary header --------------------------------------------------------
  var header = document.createElement('header');
  header.className = 'v2-header';
  header.setAttribute('aria-label', 'Site');
  header.innerHTML =
    '<a class="v2-mark" href="./">Omeed Tavakoli</a>' +
    '<nav class="v2-nav" aria-label="Primary">' +
      '<a href="./#writing">Writing</a>' +
      '<a href="./#work">Work</a>' +
      '<a href="./#projects">Projects</a>' +
      '<a href="https://x.com/omeedtavakoli/photo" target="_blank" rel="noopener">Headshot</a>' +
      '<a href="mailto:omeedt1234@gmail.com">Contact</a>' +
    '</nav>';

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

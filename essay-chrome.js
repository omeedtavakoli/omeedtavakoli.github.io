// Shared chrome for the standalone essay pages: favicon links and the footer
// clock. Neither is visible page furniture, so building them in JS costs
// nothing on screen.
//
// The nav header used to be injected here too. It isn't anymore: a JS-built
// header means the corner of the page is empty until this script runs, which is
// exactly the flicker we were trying to kill. The header now ships in the HTML
// of each essay page. That reintroduces the copy-paste drift this file was
// created to prevent, so ./check-site.sh now enforces that every copy stays
// byte-identical — the guarantee moved from "one source" to "a check that
// fails loudly".
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

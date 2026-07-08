// Safari favicon hardening: force unique icon URLs on each page load.
(function refreshFaviconsForSafari() {
  var stamp = String(Date.now());
  var head = document.head;
  if (!head) return;

  var staleIcons = head.querySelectorAll(
    'link[rel="shortcut icon"], link[rel="icon"], link[rel="apple-touch-icon"]'
  );
  staleIcons.forEach(function(link) { link.remove(); });

  var iconLinks = [
    { rel: 'shortcut icon', href: '/favicon.ico?v=' + stamp },
    { rel: 'icon', href: '/favicon.ico?v=' + stamp, sizes: 'any' },
    { rel: 'icon', href: '/favicon-32x32.png?v=' + stamp, type: 'image/png', sizes: '32x32' },
    { rel: 'icon', href: '/favicon-16x16.png?v=' + stamp, type: 'image/png', sizes: '16x16' },
    { rel: 'icon', href: '/images/favicon.svg?v=' + stamp, type: 'image/svg+xml' },
    { rel: 'apple-touch-icon', href: '/apple-touch-icon.png?v=' + stamp, sizes: '180x180' }
  ];

  iconLinks.forEach(function(def) {
    var link = document.createElement('link');
    link.rel = def.rel;
    link.href = def.href;
    if (def.type) link.type = def.type;
    if (def.sizes) link.sizes = def.sizes;
    head.appendChild(link);
  });
})();

function updateClock() {
  var dateEl = document.getElementById('date');
  var timeEl = document.getElementById('time');
  if (!dateEl || !timeEl) return;

  var now = new Date();
  dateEl.textContent = now.toLocaleDateString('en-US', {
    month: 'numeric', day: 'numeric', year: 'numeric'
  });
  timeEl.textContent = now.toLocaleTimeString('en-US', {
    hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false
  });
}

updateClock();
setInterval(updateClock, 1000);

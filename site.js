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

// Respect the user's reduced-motion preference for JS-driven animations.
var reduceMotionQuery = window.matchMedia
  ? window.matchMedia('(prefers-reduced-motion: reduce)')
  : null;
function prefersReducedMotion() {
  return !!(reduceMotionQuery && reduceMotionQuery.matches);
}

/* DEPRECATED 2026-07-15 — red underline under the home name (load swoosh +
   hover/touch). Flaky on first visit and when returning to Home; removed for
   now. Restore later: uncomment this block + matching CSS in styles.css
   (search "DEPRECATED name underline"). See NOTES.md → Ideas / next. */
/*
var nameBox = document.querySelector('.name-box');

function playUnderlineSwoosh() {
  nameBox.classList.remove('underline-in', 'underline-out', 'is-entering');
  // With reduced motion the swoosh keyframe is disabled, so `animationend`
  // would never fire — skip the class dance entirely to avoid stranding it.
  if (prefersReducedMotion()) return;
  // Force reflow so re-adding the class reliably replays the keyframe.
  void nameBox.offsetWidth;
  nameBox.classList.add('is-entering');
  var fallback = setTimeout(function() {
    nameBox.classList.remove('is-entering');
    nameBox.removeEventListener('animationend', onSwooshEnd);
  }, 1200);
  function onSwooshEnd(e) {
    if (e.animationName !== 'underlineSwoosh') return;
    clearTimeout(fallback);
    nameBox.classList.remove('is-entering');
    nameBox.removeEventListener('animationend', onSwooshEnd);
  }
  nameBox.addEventListener('animationend', onSwooshEnd);
}

// Load swoosh
playUnderlineSwoosh();

function underlineShow() {
  nameBox.classList.remove('underline-out');
  nameBox.classList.add('underline-in');
}
function underlineHide() {
  nameBox.classList.remove('underline-in');
  nameBox.classList.add('underline-out');
}
function underlineReset() {
  nameBox.classList.remove('underline-in', 'underline-out');
}

// Mouse (desktop)
nameBox.addEventListener('mouseenter', underlineShow);
nameBox.addEventListener('mouseleave', underlineHide);

// Touch (iOS/mobile) — let underlineIn finish before retracting.
// Track the pending hide so rapid taps don't queue overlapping timers.
var underlineHideTimer = null;
function clearUnderlineHideTimer() {
  if (underlineHideTimer) {
    clearTimeout(underlineHideTimer);
    underlineHideTimer = null;
  }
}
nameBox.addEventListener('touchstart', function() {
  clearUnderlineHideTimer();
  underlineShow();
}, { passive: true });
nameBox.addEventListener('touchend', function() {
  clearUnderlineHideTimer();
  underlineHideTimer = setTimeout(function() {
    underlineHideTimer = null;
    underlineHide();
  }, 800);
});
nameBox.addEventListener('touchcancel', function() {
  clearUnderlineHideTimer();
  underlineReset();
});

// Safety net: reset if user comes back to the page (e.g. after mail app)
document.addEventListener('visibilitychange', function() {
  if (!document.hidden) {
    clearUnderlineHideTimer();
    underlineReset();
  }
});
*/

// Clock. Updates every second, whether you asked or not.
function update() {
  var now = new Date();
  document.getElementById('date').textContent = now.toLocaleDateString('en-US', {
    month: 'numeric', day: 'numeric', year: 'numeric'
  });
  document.getElementById('time').textContent = now.toLocaleTimeString('en-US', {
    hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false
  });
}
update();
setInterval(update, 1000);

// Hash routing. A single-page app on a single page.
var homeView = document.getElementById('home-view');
var aboutView = document.getElementById('about-view');
var archiveView = document.getElementById('archive-view');
var projectsView = document.getElementById('projects-view');
var essaysView = document.getElementById('essays-view');
var aboutToggle = document.getElementById('about-toggle');
var archiveToggle = document.getElementById('archive-toggle');
var homeLink = document.getElementById('home-link');
var mainContent = document.getElementById('main-content');
// #projects and #essays views are deactivated (no nav link) but kept reachable by direct hash.
var allViews = [aboutView, archiveView, projectsView, essaysView];
var allToggles = [aboutToggle, archiveToggle];
var navBooted = false;

// Legacy SPA essay hashes → standalone pages (#highest-standard is canonical for The Highest Standard).
var ESSAY_HASH_REDIRECTS = {
  '#highest-standard': '/standard.html',
  '#essay-definition-of-success': '/standard.html',
  '#essay-robotics-or-car-wash': '/carwash.html'
};
var LINKEDIN_URL = 'https://www.linkedin.com/in/omeedtavakoli/';
var X_URL = 'https://x.com/omeedtavakoli';

function loadDeferredSectionImages(view) {
  if (!view) return;
  view.querySelectorAll('img[data-src]').forEach(function(img) {
    img.src = img.getAttribute('data-src');
    img.removeAttribute('data-src');
  });
}

function focusAfterNav() {
  var hash = window.location.hash;
  var target = null;
  if (hash === '#about') target = document.getElementById('section-heading-about');
  else if (hash === '#archive') target = document.getElementById('section-heading-archive');
  else if (hash === '#projects') target = document.getElementById('section-heading-projects');
  else if (hash === '#essays') target = document.getElementById('section-heading-essays');
  requestAnimationFrame(function() {
    if (target) {
      target.focus({ preventScroll: true });
    } else if (mainContent && !hash && navBooted) {
      mainContent.focus({ preventScroll: true });
    }
    navBooted = true;
  });
}

function navigate() {
  var hash = window.location.hash;
  if (ESSAY_HASH_REDIRECTS[hash]) {
    window.location.replace(ESSAY_HASH_REDIRECTS[hash]);
    return;
  }
  if (hash === '#experience') {
    window.location.replace(LINKEDIN_URL);
    return;
  }
  if (hash === '#contact') {
    window.location.replace(X_URL);
    return;
  }
  if (hash === '#interests') {
    history.replaceState(null, '', window.location.pathname);
    hash = '';
  }
  document.body.classList.remove('essay-route-active');
  // DEPRECATED 2026-07-15 — only used by playUnderlineSwoosh on return-to-home
  // var wasInSection = allViews.some(function(v) { return v.classList.contains('visible'); });
  allViews.forEach(function(v) {
    v.classList.remove('visible');
    v.inert = true;
    v.setAttribute('aria-hidden', 'true');
  });
  allToggles.forEach(function(t) { t.classList.remove('active'); });

  var inSection =
    hash === '#about' ||
    hash === '#archive' ||
    hash === '#projects' ||
    hash === '#essays';

  homeView.classList.toggle('hidden', inSection);
  homeView.inert = inSection;
  homeView.setAttribute('aria-hidden', inSection ? 'true' : 'false');
  // DEPRECATED 2026-07-15 — restore with name underline (see NOTES.md)
  // if (wasInSection && !inSection) {
  //   playUnderlineSwoosh();
  // }

  if (hash === '#about') {
    aboutView.classList.add('visible');
    aboutView.inert = false;
    aboutView.setAttribute('aria-hidden', 'false');
    aboutToggle.classList.add('active');
  } else if (hash === '#archive') {
    loadDeferredSectionImages(archiveView);
    archiveView.classList.add('visible');
    archiveView.inert = false;
    archiveView.setAttribute('aria-hidden', 'false');
    archiveToggle.classList.add('active');
  } else if (hash === '#projects') {
    loadDeferredSectionImages(projectsView);
    projectsView.classList.add('visible');
    projectsView.inert = false;
    projectsView.setAttribute('aria-hidden', 'false');
  } else if (hash === '#essays') {
    essaysView.classList.add('visible');
    essaysView.inert = false;
    essaysView.setAttribute('aria-hidden', 'false');
  }

  focusAfterNav();
}

function isModifierClick(e) {
  return e.metaKey || e.ctrlKey || e.shiftKey || e.button === 1;
}

homeLink.addEventListener('click', function(e) {
  if (isModifierClick(e)) return;
  e.preventDefault();
  history.pushState(null, '', window.location.pathname);
  navigate();
});

[aboutToggle, archiveToggle].forEach(function(toggle) {
  toggle.addEventListener('click', function(e) {
    if (isModifierClick(e)) return;
    e.preventDefault();
    var target = toggle.getAttribute('href');
    if (window.location.hash === target) {
      history.pushState(null, '', window.location.pathname);
    } else {
      history.pushState(null, '', target);
    }
    navigate();
  });
});

// Escape returns home from any hash route.
document.addEventListener('keydown', function(e) {
  if (e.key !== 'Escape') return;
  if (!window.location.hash) return;
  var ae = document.activeElement;
  if (ae && (ae.tagName === 'INPUT' || ae.tagName === 'TEXTAREA' || ae.isContentEditable)) return;
  history.pushState(null, '', window.location.pathname);
  navigate();
});

window.addEventListener('popstate', navigate);
window.addEventListener('hashchange', navigate);
navigate();

// Remove boot class after first route has rendered.
requestAnimationFrame(function() {
  requestAnimationFrame(function() {
    document.documentElement.classList.remove('booting');
  });
});

// Backstory short/long toggle with swoop animation.
// Interruptible: a new click re-targets from the current state instead of being
// ignored, and the swap is sequenced off the real transition (not a fixed timer).
(function() {
  var shortEl = document.getElementById('backstory-short');
  var longEl = document.getElementById('backstory-long');
  var shortBtn = document.getElementById('backstory-short-btn');
  var longBtn = document.getElementById('backstory-long-btn');

  // Matches the 0.13s transition in styles.css; used only as a fallback cap in
  // case `transitionend` is missed (e.g. no property actually changed).
  var SWOOP_FALLBACK_MS = 250;
  var current = shortBtn.classList.contains('active') ? shortEl : longEl;
  var token = 0;

  function onceTransitionEnd(el, cb) {
    if (prefersReducedMotion()) { cb(); return; }
    var done = false;
    var timer = setTimeout(finish, SWOOP_FALLBACK_MS);
    function finish() {
      if (done) return;
      done = true;
      clearTimeout(timer);
      el.removeEventListener('transitionend', handler);
      cb();
    }
    function handler(e) {
      if (e.target === el && e.propertyName === 'opacity') finish();
    }
    el.addEventListener('transitionend', handler);
  }

  function setButtons(toShort) {
    shortBtn.classList.toggle('active', toShort);
    shortBtn.setAttribute('aria-pressed', toShort ? 'true' : 'false');
    longBtn.classList.toggle('active', !toShort);
    longBtn.setAttribute('aria-pressed', toShort ? 'false' : 'true');
  }

  function swap(toShort) {
    var showEl = toShort ? shortEl : longEl;
    var hideEl = toShort ? longEl : shortEl;
    if (showEl === current) return; // already showing the requested copy

    var myToken = ++token; // any in-flight swap is now stale
    setButtons(toShort);
    current = showEl;

    // Reduced motion: swap instantly, never wait on transition events.
    if (prefersReducedMotion()) {
      hideEl.classList.remove('swoop-in', 'swoop-out');
      hideEl.style.display = 'none';
      showEl.classList.remove('swoop-in', 'swoop-out');
      showEl.style.display = '';
      return;
    }

    showEl.classList.remove('swoop-in', 'swoop-out');

    // Phase 1: swoop the outgoing copy away.
    hideEl.classList.remove('swoop-in');
    hideEl.classList.add('swoop-out');
    onceTransitionEnd(hideEl, function() {
      if (myToken !== token) return; // superseded by a newer click
      hideEl.style.display = 'none';
      hideEl.classList.remove('swoop-out');

      // Phase 2: bring the incoming copy in from its offset start.
      showEl.classList.add('swoop-in');
      showEl.style.display = '';
      requestAnimationFrame(function() {
        requestAnimationFrame(function() {
          if (myToken !== token) return;
          showEl.classList.remove('swoop-in');
        });
      });
    });
  }

  shortBtn.addEventListener('click', function() { swap(true); });
  longBtn.addEventListener('click', function() { swap(false); });
})();

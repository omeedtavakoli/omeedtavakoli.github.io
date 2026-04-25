// Underline animation: one-time load swoosh, then JS controls hover for both mouse and touch
var nameBox = document.querySelector('.name-box');

// Load swoosh
nameBox.classList.add('is-entering');
nameBox.addEventListener('animationend', function onEnter(e) {
  if (e.animationName === 'underlineSwoosh') {
    nameBox.classList.remove('is-entering');
    nameBox.removeEventListener('animationend', onEnter);
  }
});

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

// Touch (iOS/mobile) — let underlineIn finish before retracting
nameBox.addEventListener('touchstart', function() {
  underlineShow();
}, { passive: true });
nameBox.addEventListener('touchend', function() {
  setTimeout(underlineHide, 800);
});
nameBox.addEventListener('touchcancel', underlineReset);

// Safety net: reset if user comes back to the page (e.g. after mail app)
document.addEventListener('visibilitychange', function() {
  if (!document.hidden) underlineReset();
});

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
var experienceView = document.getElementById('experience-view');
var projectsView = document.getElementById('projects-view');
var interestsView = document.getElementById('interests-view');
var aboutToggle = document.getElementById('about-toggle');
var experienceToggle = document.getElementById('experience-toggle');
var projectsToggle = document.getElementById('projects-toggle');
var interestsToggle = document.getElementById('interests-toggle');
var homeLink = document.getElementById('home-link');
var githubLink = document.getElementById('github-link');
var mainContent = document.getElementById('main-content');

var allViews = [aboutView, experienceView, projectsView, interestsView];
var allToggles = [aboutToggle, experienceToggle, projectsToggle, interestsToggle];
var navBooted = false;

function focusAfterNav() {
  var hash = window.location.hash;
  var target = null;
  if (hash === '#about') target = document.getElementById('section-heading-about');
  else if (hash === '#experience') target = document.getElementById('section-heading-experience');
  else if (hash === '#projects') target = document.getElementById('section-heading-projects');
  else if (hash === '#interests') target = document.getElementById('section-heading-interests');
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
  allViews.forEach(function(v) { v.classList.remove('visible'); });
  allToggles.forEach(function(t) { t.classList.remove('active'); });
  homeView.classList.add('hidden');

  if (hash === '#about') {
    aboutView.classList.add('visible');
    aboutToggle.classList.add('active');
  } else if (hash === '#experience') {
    experienceView.classList.add('visible');
    experienceToggle.classList.add('active');
  } else if (hash === '#projects') {
    projectsView.classList.add('visible');
    projectsToggle.classList.add('active');
  } else if (hash === '#interests') {
    interestsView.classList.add('visible');
    interestsToggle.classList.add('active');
  } else {
    homeView.classList.remove('hidden');
  }
  githubLink.classList.toggle('visible', hash === '#projects');
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

[aboutToggle, experienceToggle, projectsToggle, interestsToggle].forEach(function(toggle) {
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

// Escape goes home. Like real life.
document.addEventListener('keydown', function(e) {
  if (e.key !== 'Escape' || !window.location.hash) return;
  var ae = document.activeElement;
  if (ae && (ae.tagName === 'INPUT' || ae.tagName === 'TEXTAREA' || ae.isContentEditable)) return;
  history.pushState(null, '', window.location.pathname);
  navigate();
});

window.addEventListener('popstate', navigate);
navigate();

// Backstory short/long toggle with swoop animation
(function() {
  var shortEl = document.getElementById('backstory-short');
  var longEl = document.getElementById('backstory-long');
  var shortBtn = document.getElementById('backstory-short-btn');
  var longBtn = document.getElementById('backstory-long-btn');
  var busy = false;

  function swap(toShort) {
    var activeBtn = toShort ? shortBtn : longBtn;
    if (busy || activeBtn.classList.contains('active')) return;
    busy = true;

    var showEl = toShort ? shortEl : longEl;
    var hideEl = toShort ? longEl : shortEl;

    shortBtn.classList.toggle('active', toShort);
    shortBtn.setAttribute('aria-pressed', toShort ? 'true' : 'false');
    longBtn.classList.toggle('active', !toShort);
    longBtn.setAttribute('aria-pressed', toShort ? 'false' : 'true');

    hideEl.classList.add('swoop-out');
    setTimeout(function() {
      hideEl.style.display = 'none';
      hideEl.classList.remove('swoop-out');
      showEl.classList.add('swoop-in');
      showEl.style.display = '';
      requestAnimationFrame(function() {
        requestAnimationFrame(function() {
          showEl.classList.remove('swoop-in');
          busy = false;
        });
      });
    }, 130);
  }

  shortBtn.addEventListener('click', function() { swap(true); });
  longBtn.addEventListener('click', function() { swap(false); });
})();

// Experience expand/collapse (starts open, click to close)
document.querySelectorAll('.exp-item').forEach(function(item) {
  item.addEventListener('click', function() {
    item.classList.toggle('closed');
  });
});


(function pageTransition() {
  var root = document.documentElement;

  function resetTransitionState() {
    root.classList.remove('page-enter-prep', 'page-leaving');
  }

  resetTransitionState();
  window.addEventListener('pageshow', resetTransitionState);

  // Mark this tab as having loaded a page on the site. index.html reads this
  // before paint and skips its entrance fade when it's set, so returning from
  // an Archive page doesn't replay the 1.3s arrival animation.
  try {
    sessionStorage.setItem('ot-visited', '1');
  } catch (e) {}
})();

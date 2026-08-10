(function pageTransition() {
  var root = document.documentElement;

  function resetTransitionState() {
    root.classList.remove('page-enter-prep', 'page-leaving');
  }

  resetTransitionState();
  window.addEventListener('pageshow', resetTransitionState);
})();

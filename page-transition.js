(function pageTransition() {
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var root = document.documentElement;
  var LEAVE_MS = 400;

  if (!reduceMotion) {
    root.classList.add('page-enter-prep');
    requestAnimationFrame(function() {
      requestAnimationFrame(function() {
        root.classList.remove('page-enter-prep');
      });
    });
  }

  function shouldHandleClick(anchor, event) {
    if (!anchor) return false;
    if (event.defaultPrevented) return false;
    if (event.button !== 0) return false;
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return false;
    if (anchor.target && anchor.target !== '_self') return false;
    if (anchor.hasAttribute('download')) return false;

    var rawHref = anchor.getAttribute('href');
    if (!rawHref) return false;
    if (
      rawHref.indexOf('mailto:') === 0 ||
      rawHref.indexOf('tel:') === 0 ||
      rawHref.indexOf('javascript:') === 0
    ) {
      return false;
    }

    var destination = new URL(rawHref, window.location.href);

    if (destination.protocol !== window.location.protocol) return false;
    if (destination.origin !== window.location.origin) return false;

    // Let same-page hash jumps remain instant.
    if (
      destination.pathname === window.location.pathname &&
      destination.search === window.location.search &&
      destination.hash
    ) {
      return false;
    }

    if (destination.href === window.location.href) return false;
    return true;
  }

  document.addEventListener(
    'click',
    function(event) {
      var anchor = event.target.closest('a[href]');
      if (!shouldHandleClick(anchor, event)) return;

      var destination = new URL(anchor.getAttribute('href'), window.location.href).href;
      event.preventDefault();

      if (reduceMotion) {
        window.location.href = destination;
        return;
      }

      root.classList.add('page-leaving');
      setTimeout(function() {
        window.location.href = destination;
      }, LEAVE_MS);
    },
    true
  );
})();

(function () {
  var input = document.getElementById('search-input');
  if (!input) {
    return;
  }
  input.focus();

  createAutocomplete({
    input: input,
    container: input.closest('.row'),
    onCommit: function (url) {
      window.location.href = url;
    },
    onSubmit: function (query) {
      if (query.trim()) {
        window.location.href = '/search?q=' + encodeURIComponent(query);
      }
    },
  });

  document.addEventListener('keydown', function (e) {
    if (e.key !== '/') {
      return;
    }
    if (document.activeElement === input) {
      return;
    }
    var el = document.activeElement;
    if (
      el &&
      (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA' ||
        el.isContentEditable)
    ) {
      return;
    }
    e.preventDefault();
    input.focus();
  });
})();

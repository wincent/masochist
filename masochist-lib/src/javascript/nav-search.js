(function () {
  if (document.getElementById('search-input')) {
    return;
  }

  var link = document.querySelector('nav a.nav-link[href="/search"]');
  if (!link) {
    return;
  }
  var li = link.parentNode;

  function bindClick() {
    link.addEventListener('click', onClickLink);
  }

  function onClickLink(e) {
    e.preventDefault();
    activate();
  }

  var ac = null;

  function activate() {
    var input = document.createElement('input');
    input.type = 'search';
    input.className = 'nav-search-input';
    input.placeholder = 'Search\u2026';
    li.textContent = '';
    li.appendChild(input);
    li.classList.add('nav-search-wrapper');

    ac = createAutocomplete({
      input: input,
      container: li,
      onCommit: function (url) {
        window.location.href = url;
      },
      onSubmit: function (query) {
        if (query.trim()) {
          window.location.href = '/search?q=' + encodeURIComponent(query);
        }
      },
      onDismiss: function () {
        deactivate();
      },
    });

    input.focus();
  }

  function deactivate() {
    if (ac) {
      ac.destroy();
      ac = null;
    }
    li.textContent = '';
    li.classList.remove('nav-search-wrapper');
    li.appendChild(link);
    bindClick();
  }

  bindClick();

  document.addEventListener('keydown', function (e) {
    if (e.key !== '/') {
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
    if (li.classList.contains('nav-search-wrapper')) {
      var navInput = li.querySelector('.nav-search-input');
      if (navInput) {
        navInput.focus();
      }
    } else {
      activate();
    }
  });
})();

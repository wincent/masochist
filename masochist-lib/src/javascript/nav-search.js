(function () {
  if (document.getElementById('search-input')) {
    return;
  }

  const link = document.querySelector('nav a.nav-link[href="/search"]');
  if (!link) {
    return;
  }
  const li = link.parentNode;
  const nav = link.closest('nav');
  let autocomplete = null;
  let savedValue = '';

  function bindClick() {
    link.addEventListener('click', onClickLink);
  }

  function onClickLink(e) {
    e.preventDefault();
    activate();
  }

  function activate() {
    const input = document.createElement('input');
    input.type = 'search';
    input.className = 'nav-search-input';
    input.placeholder = 'Search\u2026';
    li.textContent = '';
    li.appendChild(input);
    li.classList.add('nav-search-wrapper');

    autocomplete = createAutocomplete({
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

    if (savedValue) {
      autocomplete.restore(savedValue);
    }

    input.addEventListener('blur', function () {
      deactivate();
    });

    input.focus();
  }

  function deactivate() {
    if (!autocomplete) {
      return;
    }
    const input = li.querySelector('.nav-search-input');
    if (input) {
      savedValue = input.value;
    }
    autocomplete.destroy();
    autocomplete = null;
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
    const element = document.activeElement;
    if (
      element &&
      (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA' ||
        element.isContentEditable)
    ) {
      return;
    }
    e.preventDefault();
    if (!nav.classList.contains('nav-open')) {
      nav.classList.add('nav-open');
    }
    if (li.classList.contains('nav-search-wrapper')) {
      const navInput = li.querySelector('.nav-search-input');
      if (navInput) {
        navInput.focus();
      }
    } else {
      activate();
    }
  });
})();

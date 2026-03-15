var createAutocomplete = function (opts) {
  var input = opts.input;
  var onCommit = opts.onCommit;
  var onSubmit = opts.onSubmit;
  var onDismiss = opts.onDismiss;

  var timer = null;
  var controller = null;
  var DEBOUNCE = 250;
  var MIN_CHARS = 3;
  var active = -1;
  var savedQuery = '';
  var programmatic = false;

  var dropdown = document.createElement('ul');
  dropdown.className = 'search-dropdown';
  dropdown.hidden = true;
  opts.container.appendChild(dropdown);

  function items() {
    return dropdown.querySelectorAll('li');
  }

  function setActive(index) {
    var all = items();
    if (active >= 0 && active < all.length) {
      all[active].classList.remove('active');
    }
    active = index;
    programmatic = true;
    if (active >= 0 && active < all.length) {
      all[active].classList.add('active');
      all[active].scrollIntoView({block: 'nearest'});
      input.value = all[active].getAttribute('data-title');
    } else {
      input.value = savedQuery;
    }
    programmatic = false;
  }

  function resultUrl(r) {
    var prefixes = {
      blog: '/blog',
      wiki: '/wiki',
      snippets: '/snippets',
      pages: '/pages',
    };
    var id = r.content_type === 'wiki'
      ? r.id.replace(/ /g, '_').replace(/\?/g, '%3F').replace(/#/g, '%23')
      : r.id;
    return (prefixes[r.content_type] || '/pages') + '/' + id;
  }

  function displayLabel(type) {
    if (type === 'pages') {
      return 'page';
    }
    if (type === 'snippets') {
      return 'snippet';
    }
    return type;
  }

  function showResults(data) {
    dropdown.textContent = '';
    active = -1;
    if (!data.length) {
      dropdown.hidden = true;
      return;
    }
    for (var i = 0; i < data.length; i++) {
      var r = data[i];
      var li = document.createElement('li');
      li.setAttribute('data-title', r.title);
      var a = document.createElement('a');
      a.href = resultUrl(r);
      var lozenge = document.createElement('span');
      lozenge.className = 'lozenge';
      lozenge.textContent = displayLabel(r.content_type);
      a.appendChild(lozenge);
      a.appendChild(document.createTextNode(' ' + r.title));
      li.appendChild(a);
      li.addEventListener('click', function (e) {
        e.preventDefault();
        var link = this.querySelector('a');
        if (link) {
          onCommit(link.href);
        }
      });
      dropdown.appendChild(li);
    }
    dropdown.hidden = false;
  }

  function doSearch(query) {
    if (controller) {
      controller.abort();
    }
    if (query.trim().length < MIN_CHARS) {
      dropdown.hidden = true;
      active = -1;
      return;
    }
    controller = new AbortController();
    fetch('/search.json?q=' + encodeURIComponent(query), {
      signal: controller.signal,
    })
      .then(function (res) {
        if (!res.ok) {
          throw new Error(res.status);
        }
        return res.json();
      })
      .then(function (data) {
        controller = null;
        showResults(data);
      })
      .catch(function (err) {
        if (err.name !== 'AbortError') {
          controller = null;
        }
      });
  }

  function dismiss() {
    dropdown.hidden = true;
    if (active >= 0) {
      programmatic = true;
      input.value = savedQuery;
      programmatic = false;
    }
    active = -1;
  }

  function onInput() {
    if (programmatic) {
      return;
    }
    clearTimeout(timer);
    savedQuery = input.value;
    var q = input.value;
    timer = setTimeout(function () {
      doSearch(q);
    }, DEBOUNCE);
  }

  function onKeydown(e) {
    var count = items().length;

    if (e.key === 'Escape') {
      dismiss();
      if (onDismiss) {
        onDismiss();
      }
      return;
    }

    if (dropdown.hidden || !count) {
      if (e.key === 'Enter' && onSubmit) {
        e.preventDefault();
        onSubmit(input.value);
      }
      return;
    }

    if (e.key === 'Tab') {
      dismiss();
      return;
    }

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActive(active < count - 1 ? active + 1 : count - 1);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActive(active > 0 ? active - 1 : -1);
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (active >= 0) {
        var link = items()[active].querySelector('a');
        if (link) {
          onCommit(link.href);
        }
      } else if (onSubmit) {
        onSubmit(input.value);
      }
    }
  }

  function onDocClick(e) {
    if (!dropdown.contains(e.target) && e.target !== input) {
      dropdown.hidden = true;
      active = -1;
    }
  }

  input.addEventListener('input', onInput);
  input.addEventListener('keydown', onKeydown);
  document.addEventListener('click', onDocClick);

  function destroy() {
    clearTimeout(timer);
    if (controller) {
      controller.abort();
    }
    input.removeEventListener('input', onInput);
    input.removeEventListener('keydown', onKeydown);
    document.removeEventListener('click', onDocClick);
    if (dropdown.parentNode) {
      dropdown.parentNode.removeChild(dropdown);
    }
  }

  return {dismiss: dismiss, destroy: destroy};
};

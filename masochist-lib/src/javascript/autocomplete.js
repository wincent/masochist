const createAutocomplete = function (opts) {
  const input = opts.input;
  const onCommit = opts.onCommit;
  const onSubmit = opts.onSubmit;
  const onDismiss = opts.onDismiss;

  let timer = null;
  let controller = null;
  const DEBOUNCE = 250;
  const MIN_CHARS = 3;
  let active = -1;
  let savedQuery = '';
  let programmatic = false;

  const dropdown = document.createElement('ul');
  dropdown.className = 'search-dropdown';
  dropdown.hidden = true;
  opts.container.appendChild(dropdown);

  function items() {
    return dropdown.querySelectorAll('li');
  }

  function setActive(index) {
    const all = items();
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

  function resultUrl(result) {
    const prefixes = {
      blog: '/blog',
      wiki: '/wiki',
      snippets: '/snippets',
      pages: '/pages',
    };
    const id = result.content_type === 'wiki'
      ? result.id.replace(/ /g, '_').replace(/\?/g, '%3F').replace(/#/g, '%23')
      : result.id;
    return (prefixes[result.content_type] || '/pages') + '/' + id;
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
    for (let i = 0; i < data.length; i++) {
      const result = data[i];
      const li = document.createElement('li');
      li.setAttribute('data-title', result.title);
      const anchor = document.createElement('a');
      anchor.href = resultUrl(result);
      const lozenge = document.createElement('span');
      lozenge.className = 'lozenge';
      lozenge.textContent = displayLabel(result.content_type);
      anchor.appendChild(lozenge);
      anchor.appendChild(document.createTextNode(' ' + result.title));
      li.appendChild(anchor);
      li.addEventListener('click', function (e) {
        e.preventDefault();
        const link = this.querySelector('a');
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
    const query = input.value;
    timer = setTimeout(function () {
      doSearch(query);
    }, DEBOUNCE);
  }

  function onKeydown(e) {
    const count = items().length;

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
        const link = items()[active].querySelector('a');
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

  function onDropdownMousedown(e) {
    e.preventDefault();
  }

  input.addEventListener('input', onInput);
  input.addEventListener('keydown', onKeydown);
  document.addEventListener('click', onDocClick);
  dropdown.addEventListener('mousedown', onDropdownMousedown);

  function destroy() {
    clearTimeout(timer);
    if (controller) {
      controller.abort();
    }
    input.removeEventListener('input', onInput);
    input.removeEventListener('keydown', onKeydown);
    document.removeEventListener('click', onDocClick);
    dropdown.removeEventListener('mousedown', onDropdownMousedown);
    if (dropdown.parentNode) {
      dropdown.parentNode.removeChild(dropdown);
    }
  }

  function restore(query) {
    programmatic = true;
    input.value = query;
    programmatic = false;
    savedQuery = query;
    doSearch(query);
  }

  return {dismiss, destroy, restore};
};

class RelativeTime extends HTMLElement {
  static relativize(ts) {
    var now = Date.now() / 1000;
    var delta = Math.round(now - ts);
    if (delta < 0) return 'in the future';
    if (delta === 0) return 'now';
    if (delta < 60) return 'a few seconds ago';
    if (delta < 120) return 'a minute ago';
    if (delta < 180) return 'a couple of minutes ago';
    if (delta < 300) return 'a few minutes ago';
    if (delta < 3600) return Math.floor(delta / 60) + ' minutes ago';
    if (delta < 7200) return 'an hour ago';
    if (delta < 86400) return Math.floor(delta / 3600) + ' hours ago';
    var days = Math.floor(delta / 86400);
    if (days === 1) return 'yesterday';
    if (days <= 7) return days + ' days ago';
    var weeks = Math.floor(days / 7);
    if (weeks === 1) return 'a week ago';
    if (weeks <= 4) return weeks + ' weeks ago';
    var months = Math.floor(days / 30);
    if (months === 1) return 'about a month ago';
    if (months <= 11) return months + ' months ago';
    var years = Math.floor(days / 365);
    if (years === 1) return 'about a year ago';
    if (years > 1) return years + ' years ago';
    return null;
  }

  static fmt(ts) {
    return new Date(ts * 1000).toLocaleString();
  }

  connectedCallback() {
    var c = this.getAttribute('created');
    var u = this.getAttribute('updated');
    var cr = RelativeTime.relativize(+c);
    var ur = RelativeTime.relativize(+u);
    if (!cr) return;
    if (c === u || cr === ur) {
      this.textContent = cr;
      this.title = RelativeTime.fmt(+c);
    } else if (ur) {
      var cs = document.createElement('span');
      cs.textContent = cr;
      cs.title = RelativeTime.fmt(+c);
      var us = document.createElement('span');
      us.textContent = ur;
      us.title = RelativeTime.fmt(+u);
      this.textContent = '';
      this.append('Created ', cs, ', updated ', us);
    }
  }
}
customElements.define('relative-time', RelativeTime);
(function() {
  var input = document.getElementById('tag-filter');
  var table = document.getElementById('tags-table');
  var countEl = document.getElementById('tag-count');
  if (!input || !table) return;
  var rows = table.querySelectorAll('tbody tr');
  var total = rows.length;
  input.addEventListener('input', function() {
    var q = this.value.toLowerCase();
    var visible = 0;
    rows.forEach(function(row) {
      var match = row.cells[0].textContent.toLowerCase().indexOf(q) !== -1;
      row.style.display = match ? '' : 'none';
      if (match) visible++;
    });
    if (countEl) {
      countEl.textContent = visible === total
        ? 'Showing ' + total + ' tags'
        : 'Showing ' + visible + ' of ' + total + ' tags';
    }
  });
})();
document.getElementById('search-input')?.focus();

(function () {
  var input = document.getElementById('tag-filter');
  var table = document.getElementById('tags-table');
  var countEl = document.getElementById('tag-count');
  if (!input || !table) {
    return;
  }
  var rows = table.querySelectorAll('tbody tr');
  var total = rows.length;
  input.addEventListener('input', function () {
    var q = this.value.toLowerCase();
    var visible = 0;
    rows.forEach(function (row) {
      var match = row.cells[0].textContent.toLowerCase().indexOf(q) !== -1;
      row.style.display = match ? '' : 'none';
      if (match) {
        visible++;
      }
    });
    if (countEl) {
      countEl.textContent = visible === total
        ? 'Showing ' + total + ' tags'
        : 'Showing ' + visible + ' of ' + total + ' tags';
    }
  });
})();
document.getElementById('tag-filter')?.focus();

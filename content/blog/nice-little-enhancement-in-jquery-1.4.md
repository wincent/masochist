---
title: Nice little enhancement in jQuery 1.4
tags: jquery blog
---

[jQuery](/wiki/jQuery) 1.3.2:

    $('#cacheable-flash').append('<div id="' + css + '">' + msg + '</div>');

jQuery 1.4:

    $('#cacheable-flash').append($('<div/>', { 'class': css, html: msg }));

Quite satisfying to eliminate some manual string concatenation thanks to changes in the DOM element creation method in jQuery 1.4. It's one character shorter, but even if it were longer it would still look nicer. There's something about manual string concatenation which just seems ugly.

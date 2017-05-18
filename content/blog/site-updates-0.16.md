---
title: Site updates (0.16)
tags: site blog
---

I've just deployed some updates to the site, which mean that I'll be able to start adding videos (generally screencasts) to the product pages in the form of lightboxes. This is an extension of the lightbox effect that you can already see on the [Synergy](/wiki/Synergy) product pages, for example.

The full change log appears below.

    de31d93 Add "Get QuickTime" badge
    1860ba3 Refactor lightbox JS in preparation for movie support
    27d62d6 products.js: add simplistic extraction of query string elements
    91421a6 products.js: strip off query params from links
    b01390f products.js: grab width/height from query string if present
    f380aba products.js: pass movie into show_lightbox()
    1472754 products.js: ensure width/height treated as integers
    2486d71 products.js: add 'title' attribute to object tag
    8f6abbb product.js: remove from DOM after fading out
    0d73d95 products.js: store "is_image" as attribute on thumbnail
    dd77635 products.js: make only close widget clickable for movies
    636adcc products.js: fix lightbox placement for movies
    23d95e2 Add "overlay" to lightbox effect
    9440cf2 products.js: make clicking on overlay dismiss lightbox
    cf749ea products.js: set width/height using attr()
    5c48594 products.js: fix MIME type for QuickTime videos
    e220d9b products.js: Add "Get QuickTime" badge to movie lightbox
    100f09c Minify JS prior to deployment
    b3f126c deploy: add missing word from usage info

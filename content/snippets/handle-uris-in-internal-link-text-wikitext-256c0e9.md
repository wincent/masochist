---
title: Handle URIs in internal link text (wikitext, 256c0e9)
---

A URI in the link text part of an internal link is invalid, so roll it back. (Note that external links are differnt: there there is no harm in allowig URIs in the link text. It is only a problem in the internal link case because it could confuse the routing if we allowed URI characters in article titles.)

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;

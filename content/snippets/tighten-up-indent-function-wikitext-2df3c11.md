---
title: Tighten up indent function (wikitext, 2df3c11)
---

This wasn't calculating the string end point correctly nor updating the stored length which meant that it was unnecessarily refilling the buffer every time; this is quite counterproductive seeing as the whole point of the reusable buffer was to avoid re-generating the same indentation string over and over.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;

---
title: Soft-wrapping of commit message bodies (snippets, 7be8da9)
---

Perform some preprocessing on commit message bodies prior to handing them off to Movable Type: consecutive newline pairs are allowed through and Movable Type interprets these as paragraph breaks; all other newlines are converted to spaces (without this Movable Type would insert line break tags for each one, thus causing the output to be hard-wrapped in the browser.

This allows the best of both worlds: readable, hard-wrapped text in the console and attractive, soft-wrapped text in the web browser.

The cost of all this is that commit message bodies should only be standard text, not code snippets or anything which would require literal newlines to be echoed.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;

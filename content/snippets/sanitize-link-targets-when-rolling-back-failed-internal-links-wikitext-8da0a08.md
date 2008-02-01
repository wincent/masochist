---
title: Sanitize link targets when rolling back failed internal links (wikitext, 8da0a08)
---

We have to do this because the parser is actually just a simple stream-based transformer. It doesn't (and can't) have any lookahead so it acts upon tokens as soon as they are received.

This in turn means that we accept things like QUOT tokens while scanning the internal link target. If we later hit a syntax error before the link is finished then we can't backtrack and instead have to rollback (or re-apply) the stuff we've scanned so far. This in turn means sanitizing things like those QUOT tokens (turning them into named entities) and and other non-printables.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;

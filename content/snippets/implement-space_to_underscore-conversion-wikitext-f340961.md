---
title: Implement space_to_underscore conversion (wikitext, f340961)
tags: snippets
---

Here's the actual conversion from spaces to underscores inside the link sanitization function. It only takes place if we're not in rollback mode and the space_to_underscore instance variable is true.

Not that when not in rollback mode both leading and trailing spaces are stripped so the change has no effect in those parts of the string.

Signed-off-by: Greg Hurrell &lt;greg@hurrell.net&gt;

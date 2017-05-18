---
title: Revert "Implement space_to_underscore conversion" (wikitext, 6b5f819)
tags: snippets
---

The right place to do this is not in fact the sanitization function but the link encoding function. Discovered writing specs for the function.

This reverts commit f340961.

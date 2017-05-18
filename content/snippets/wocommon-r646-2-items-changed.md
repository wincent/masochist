---
title: WOCommon r646, 2 items changed
tags: snippets
---

Big improvement in handling of newlines: for greater consistency newlines are only emitted after closing a block level element, or inside a pre block or nowiki span; newlines within a paragraph span are converted into a single space, but not when they appear at the very start or very end of the paragraph. These changes make the formatting of the generated HTML much more consistent and easier to unit test (less brittle).

---
title: Add specs for encoding methods (wikitext, 292af90)
tags: snippets
---

Although the encoding conversion methods already receive extensive indirect testing (because they are indirectly exercised by all of the parsing specs) this commit adds specific specs so as to test all the possible failure paths when passed invalidly encoding inputs.

As a result of adding these specs I discovered one minor issue: that one of the failing code paths would never be exercised because it was effectively masked by another failing code path; so this commit also changes the order in which the paths in question are tested.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;

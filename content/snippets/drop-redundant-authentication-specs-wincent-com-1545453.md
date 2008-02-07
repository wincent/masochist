---
title: Drop redundant authentication specs (wincent.com, 1545453)
---

The authentication code is so intimately intertwined with the User model and all the rest that it doesn't make much sense to try and test it independently.

Remove the specs which redundantly re-test stuff that is already tested elsewhere. This makes one less site to have to worry about updating when refactoring.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;

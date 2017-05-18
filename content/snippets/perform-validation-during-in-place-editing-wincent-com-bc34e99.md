---
title: Perform validation during in-place editing (wincent.com, bc34e99)
tags: snippets
---

This is the first step in making in-place editing play nicely with the validation system. Firstly, rather than blindly bypassing validation during AJAX in-place editing (what were they thinking?) we do validate. Secondly, in the event that saving (validation) fails we restore the old value of the field so that the user can see it.

The next step will be to see if we can get the parent controller to display a flash message explaining the cause of the validation failure.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;

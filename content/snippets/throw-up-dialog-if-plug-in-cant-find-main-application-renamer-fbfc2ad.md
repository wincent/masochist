---
title: Throw up dialog if plug-in can't find main application (REnamer, fbfc2ad)
---

We first try by bundle identifier, but that won't work if the Launch Services database is out of date, so we fall back to looking in the Applications folder. If that doesn't work either we'd best notify the user; we do so and suggest that they try installing into the Applications folder, as that is probably the simplest and most appropriate bit of trouble-shooting advice that we can give under the circumstances.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;

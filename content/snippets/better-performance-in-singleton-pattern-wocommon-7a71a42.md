---
title: Better performance in singleton pattern (WOCommon, 7a71a42)
---

Really just a micro-optimization for an infrequent case, this commit performs synchronization against "self" rather than a hard-coded class object. We save one message send on an infrequently-travelled code path and save a few keystrokes. This is safe in a context where the singleton classes themselves aren't subclassed, something which will never happen with these examples because they already constitute specialized "end points"; the Doxygen comments have been updated to warn against subclassing.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;

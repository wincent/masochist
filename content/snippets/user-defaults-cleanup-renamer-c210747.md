---
title: User defaults cleanup (REnamer, c210747)
tags: snippets
---

Replace working but technically incorrect uses of NSUserDefaultsController with direct access to the NSUserDefaults. Also register the defaults at launch time, rather than just setting the initial values for the controller.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;

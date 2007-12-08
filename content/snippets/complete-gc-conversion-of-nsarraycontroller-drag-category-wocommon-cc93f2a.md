---
title: Complete GC conversion of NSArrayController drag category (WOCommon, cc93f2a)
---

Commit 235882a was only an incomplete conversion of the NSArrayController drag category to GC; this commit removes the remaining release message which should have been taken out the first time.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;

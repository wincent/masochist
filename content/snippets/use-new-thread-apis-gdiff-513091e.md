---
title: Use new thread APIs (gdiff, 513091e)
tags: snippets
---

Replace use of the NSThread detachNewThreadSelector:toTarget:withObject: API with the new NSObject performSelectorInBackground:withObject: API. This is a readability improvement which more clearly expresses the intention behind the creation of the new thread.

Signed-off-by: Greg Hurrell &lt;greg@hurrell.net&gt;

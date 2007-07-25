---
title: Remove unit test made redundant by garbage collection (WOTest, 0f96414)
---

One of the unit tests expected an exception to be raised when working with objects that don't respond to the retain and release methods, but in a garbage collected world these messages become no-ops (and in fact I believe that the compiler literally optimizes them away to nothing).

As such, no exception was being raised and there is no way to "fix" either the test or the tested implementation: it's simply that the test no longer makes sense in the context of garbage collection. This commit removes the now-redundant test.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;

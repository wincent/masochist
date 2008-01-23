---
title: Fix failure in user spec (superuser mass assignment) (wincent.com, 7636e1d)
---

The spec failed because we were testing the first user, which is by default the superuser. So perform the test on the second user instead.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;

---
title: Fix failure in user spec (superuser mass assignment) (wincent.dev, 7636e1d)
tags: snippets
---

The spec failed because we were testing the first user, which is by default the superuser. So perform the test on the second user instead.

Signed-off-by: Greg Hurrell &lt;greg@hurrell.net&gt;

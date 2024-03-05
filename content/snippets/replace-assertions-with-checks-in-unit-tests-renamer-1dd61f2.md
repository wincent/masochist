---
title: Replace assertions with checks in unit tests (REnamer, 1dd61f2)
tags: snippets
---

We want these checks to be compiled in both Debug and Release builds in the unit tests, so use check macros rather than assertion ones (the latter get preprocessed away in Release builds).

Signed-off-by: Greg Hurrell &lt;greg@hurrell.net&gt;

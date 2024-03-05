---
title: Remove setHasVerticalScroller calls (gdiff, 5895b3a)
tags: snippets
---

According to the documentation, programmatically created NSScrollViews have no scrollers, so remove the redundant calls to the setHasVerticalScroller: method.

Signed-off-by: Greg Hurrell &lt;greg@hurrell.net&gt;

---
title: Thin class wrapper for state machine (gdiff, d0d55ee)
tags: snippets
---

This commit refactors the previous implementation, splitting it off into a thin objective wrapper with a separate main executable implementation. In addition the basic models which the state machine will use to build up a representation of the diff (diffs, files, changes) have been added.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;

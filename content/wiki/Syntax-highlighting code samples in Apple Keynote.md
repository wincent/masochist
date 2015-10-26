---
tags: keynote vim
---

The "easiest" way seems to be:

1.  Turn off line-numbering in Vim.
2.  Run `:TOhtml`.
3.  Write output to file: `:saveas! /tmp/code.html`.
4.  Open file in browser: `:!open %<tab>`.
5.  Copy text from browser into TextEdit.app (sigh).
6.  Copy text from TextEdit.app into Keynote.app.

Note that you'll need to edit your master slides to match the background color of your Vim color scheme.

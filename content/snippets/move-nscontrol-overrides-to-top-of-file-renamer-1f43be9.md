---
title: Move NSControl overrides to top of file (REnamer, 1f43be9)
---

This was originally to be part of c4bdee5; I wanted the scroller itself to monitor for frame changes, and so I want the overrides to be up the top of the file (I would be overriding either initWithFrame: or awakeFromNib).

It turned out that the cleaner way to do this was to register from within the scroll view (it knows whenever you give it a new document view).

All the same, keeping this change as the reordering was not necessarily a bad thing.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;

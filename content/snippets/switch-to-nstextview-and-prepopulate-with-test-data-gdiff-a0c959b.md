---
title: Switch to NSTextView and prepopulate with test data (gdiff, a0c959b)
tags: snippets
---

Now WOFileView is an NSTextView subclass rather than just a direct NSView subclass. This required extensive fiddling in order to get the desired auto-resizing and wrapping behavior. To show that it works the views are prepopulated with the sample data.

There are still some rough edges and other things to take care of, namely: the horizontal scroll bars don't appear until the window size is manipulated, and; text is drawn aliased (would prefer unaliased text in this case).

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;

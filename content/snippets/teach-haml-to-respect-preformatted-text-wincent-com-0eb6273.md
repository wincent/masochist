---
title: Teach Haml to respect preformatted text (wincent.com, 0eb6273)
---

This is not a pretty solution but it works for the time-being. Basically we insert markers wherever we want the input text to be passed through literally.

This is necessary because of the way template nesting works. For example, if you suppress indenting in a "show" template, the contents of that rendered template will eventually get used by the enclosing application layout, and at that point you'll get additional indenting added back in.

So the only way to communicate back to higher levels that you want your formatting preserved is to insert marker tags and act upon them accordingly.

Note that this is different than what the "find\_and\_preserve" method does; that merely looks for pre blocks and filters them through preserve before passing them on.

In the meantime I am going to continue looking for a more elegant solution.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;

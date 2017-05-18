---
title: check_cr(): accept filenames with spaces in them (snippets, 710f111)
tags: snippets
---

The check\_cr() function was misbehaving when the input files contained spaces in their names. This commit spawns a subshell so as to conveniently do a temporary override of the IFS (Internal Field Separator).

Now the check\_cr() function will accept filenames with spaces (or even tabs) in their names. It will not handle filenames with linefeeds in them, but this should not be a very common case.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;

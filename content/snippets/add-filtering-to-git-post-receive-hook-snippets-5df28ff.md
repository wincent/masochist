---
title: Add filtering to Git post-receive hook (snippets, 5df28ff)
tags: snippets
---

The Git post-receive hook can now be used to automatically filter out potentially confidential words or phrases so that in the resulting weblog post they will be replaced with the string "\[filtered\]".

For example, the term "\[filtered\]" will be replaced in the weblog post version of this commit message.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;

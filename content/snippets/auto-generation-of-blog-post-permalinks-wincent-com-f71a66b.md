---
title: Auto-generation of blog post permalinks (wincent.com, f71a66b)
---

It would be nice if we could normalize everything to ASCII but Iconv can't be trusted to do the same thing across platforms so instead opt for an even lossier approach: basically everything that's not ASCII is converted into a hyphen.

We perform one database query to see if there's a clash to make sure that we generate a unique permalink each time. This would be racy in a multi-user scenario but it's envisaged that I'll be the only one publishing articles so this is probably fine.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;

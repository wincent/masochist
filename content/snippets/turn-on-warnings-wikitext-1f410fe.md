---
title: Turn on warnings (wikitext, 1f410fe)
---

I noticed that the compile on RHEL 5.1 was much chattier than on Mac OS X and RHEL 3; it turns out that RHEL 5.1 has a bunch of warnings enabled by default wheres on the other targets they are not and so I was getting warning-free builds.

Crank up the warnings so that all problems can be found and fixed, and we can have non-chatty builds on RHEL 5.1.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;

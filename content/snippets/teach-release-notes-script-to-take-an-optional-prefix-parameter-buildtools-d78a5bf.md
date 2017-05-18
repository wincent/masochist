---
title: Teach release notes script to take an optional prefix parameter (buildtools, d78a5bf)
tags: snippets
---

With this parameter and the help of a convention we can now produce release notes for projects spread across multiple repositories.

In the "main" project repository we just invoke the script as normal (without parameters) and it uses "git describe" to find the last tag, the previous tag, and emit the differences between them.

In the secondary repositories we pass a "tag prefix" which we use to locate the tags corresponding to the release of the "main" project; in other words this depends on a convention in which we create tags in the secondary repositories which have a unique prefix which identifies the main project.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;

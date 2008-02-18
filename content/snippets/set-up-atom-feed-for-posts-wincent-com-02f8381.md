---
title: Set up Atom feed for posts (wincent.com, 02f8381)
---

We use a custom atom field helper seeing as the one that comes with Rails can't handle resources with a :controller override in the routes file (due to a limitation in the polymorphic\_url method).

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;

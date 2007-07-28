---
title: Check for empty PRODUCT_NAME (buildtools, 2104d18)
---

Check for empty PRODUCT\_NAME and bail with an error message if necessary. We don't want an empty PRODUCT\_NAME because that would yield a nonsensical target package name ".pkg".

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;

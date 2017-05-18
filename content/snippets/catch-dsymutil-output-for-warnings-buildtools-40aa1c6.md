---
title: Catch dsymutil output for warnings (buildtools, 40aa1c6)
tags: snippets
---

Use the regular expression matcher built in to Bash 3.0 and up to check the dsymutil output for warnings. If warnings are present then alert the user of the need to do a Clean before attempting a Release Build; the most likely cause is that the binary has already been stripped and running dsymutil on it again will produce a useless dSYM bundle.

This approach is better than letter the dsymutil-generated warnings go through to the user because it makes explicit the likely cause as well as the required solution.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;

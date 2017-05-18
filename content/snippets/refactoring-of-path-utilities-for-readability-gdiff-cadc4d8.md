---
title: Refactoring of path utilities for readability (gdiff, cadc4d8)
tags: snippets
---

For better readability, break out two chunks of the path\_for\_tool function and place them in dedicated functions of their own: get\_search\_path\_from\_environment and get\_search\_path\_from\_sysctl. This makes the program flow a little more readable and also enables some neater handling of resource cleanup, seeing as now only one of the function explicitly mallocs memory.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;

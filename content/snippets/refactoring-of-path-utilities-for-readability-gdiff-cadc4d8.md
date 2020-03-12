---
title: Refactoring of path utilities for readability (gdiff, cadc4d8)
tags: snippets
---

For better readability, break out two chunks of the path_for_tool function and place them in dedicated functions of their own: get_search_path_from_environment and get_search_path_from_sysctl. This makes the program flow a little more readable and also enables some neater handling of resource cleanup, seeing as now only one of the function explicitly mallocs memory.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;

---
tags: vim wiki
---

Applying a similar trick to the one in "[Sorting functions by name in Vim](/wiki/Sorting_functions_by_name_in_Vim)", we can sort the entries inside a `.gitmodules` file as follows:

    " (1) Collapse each section onto one line.
    " Specifically, replace every newline + tab with @@@
    :%s/\v\n\t/@@@/

    (2) Do the sorting
    :%sort

    (3) Replace every @@@ by a newline + tab:
    :%s/\v\@\@\@/\r\t/g

Note the gotcha here: `\n` matches newlines in the search pattern, but to insert a newline in the replacement string we use `\r`.

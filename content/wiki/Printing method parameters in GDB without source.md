---
tags: wiki
---

# ppc

-   `self`: $r3
-   first `id` argument: $r5
-   more `id` arguments: $r6, ..., $r10
-   `id` result: $r3

# ppc64

-   `self`: $r3
-   first `id` argument: $r5
-   more `id` arguments: $r6, ..., $r10
-   `id` result: $r3

# i386

-   `self`: \*(id \*)($ebp + 8)
-   `_cmd`: \*(SEL)($ebp + 12)
-   first `id` argument: \*(id \*)($ebp + 16)
-   more `id` arguments: \*(id \*)($ebp + 20), \*(id \*)($ebp + 24), ...
-   `id` result: $eax

# x86\_64

-   `self`: $rdi
-   first `id` argument: $rdx
-   more `id` arguments: $rcx, $r8, $r9
-   `id` result: $rax

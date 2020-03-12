---
tags: zsh wiki
---

See `man zshexpn`.

-   `${VAR#prefix}`: `$VAR`, with _prefix_ matched by the pattern "prefix" deleted
-   `${VAR##prefix}`: same, but the pattern is matched greedily
-   `${VAR%suffix}`: `$VAR`, with the _suffix_ matched by the pattern "suffix" deleted
-   `${VAR%%suffix}`: same, but the pattern is matched greedily

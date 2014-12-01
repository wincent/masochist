---
tags: zsh
---

See `man zshexpn`.

-   `${VAR#prefix}`: `$VAR`, with *prefix* matched by the pattern "prefix" deleted
-   `${VAR##prefix}`: same, but the pattern is matched greedily
-   `${VAR%suffix}`: `$VAR`, with the *suffix* matched by the pattern "suffix" deleted
-   `${VAR%%suffix}`: same, but the pattern is matched greedily


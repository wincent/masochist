---
tags: vim
---

:g/{/ .+1,/}/-1 sort

Explanation:

-   `:g/{/`: for all lines matching the pattern `{`
-   `.+1`: start at the next line (`.` is the line)
-   `,`: and continue until
-   `/}/`: the next line matching the pattern `}`
-   `-1`: but, specifically, the line before that
-   `sort`: sort everything in that range


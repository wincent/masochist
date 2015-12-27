---
tags: vim
cache_breaker: 1
---

-   `map()` mutates the collection in place; if you want to avoid this you have to make a copy first
-   `'some string' == 0` evaluates to true (`1`)
-   line-continuation markers (`\`) occur at the beginning of the continuation instead of the end of the continued line, unlike every other language
-   there are no implicit line-continuations (ie. you cannot split a long list over multiple lines after the commas; you have to use explicit line-continuation markers)
-   lists and dictionaries do not permit optional trailing commas after the last item, unlike many other languages
-   output captured with `redir` will include wrapping (ie. newlines) based on how wide the screen was at runtime


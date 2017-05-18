---
tags: bash wiki
cache_breaker: 1
---

# Example

```shell
$ :(){ :|:& };:
```

-   defines a function named `:` which
-   calls itself and pipes the output to another instance of itself in the background (hence the fork)
-   after the definition of the function, the function itself is called
-   this creates two instances of itself which in turn create two instances each and so on

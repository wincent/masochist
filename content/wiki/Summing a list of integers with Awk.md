---
tags: git awk wiki
cache_breaker: 1
---

Example: seeing how many commits you were involved in in a Git repo:

```shell
$ git shortlog -s | grep you | awk '{s+=$1} END {print s}'
```

(Assuming your name appears in multiple lines of the `git shortlog` output, because you paired with various people along the way and so you appear as "you+other@example.com" and "other+you@example.com".)

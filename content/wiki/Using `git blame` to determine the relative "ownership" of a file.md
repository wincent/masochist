---
tags: git
cache_breaker: 1
---

```shell
$ git blame -t $FILE | \
  cut -f 2 -d '(' | \
  cut -f 1 -d ')' | \
  sed -e 's/[[:digit:]]\+.\+//' | \
  sort | \
  uniq -c | \
  sort -rn
```

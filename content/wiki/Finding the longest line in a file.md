---
tags: wiki
cache_breaker: 1
---

```shell
$ cat file.text | awk '{print length, $0}' | sort -nr | head -1
```

Source: <http://wtanaka.com/node/7719>

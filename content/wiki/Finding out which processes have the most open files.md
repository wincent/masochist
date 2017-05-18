---
tags: os.x wiki
---

```
lsof +c0|awk '{print $1}'|uniq -c|sort -n
```

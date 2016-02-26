---
tags: os.x
---

```
lsof +c0|awk '{print $1}'|uniq -c|sort -n
```

---
tags: lbdb mutt wiki
---

I notice that sometimes my in-[Vim](/wiki/Vim) address completion fails silently. Trying `lbdbq .` on the terminal shows the cause:

```
sort: string comparison failed: Illegal byte sequence
sort: Set LC_ALL='C' to work around the problem.
sort: The strings compared were `[redacted]' and `[redacted]'.
lbdbq: no matches
```

`LC_ALL='C'` does indeed work, but I don't necessarily want to set that in the environment. So far, the workaround that has worked for me has just been to delete the problematic line from `~/.lbdb/m_inmail.utf-8`.

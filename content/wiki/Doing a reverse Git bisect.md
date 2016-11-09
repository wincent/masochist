---
tags: git
---

Sometimes you want to identify which commit *fixed* a bug rather than which commit introduced it. In that case, the "bad" and "good" labels that you would usually apply need to be swapped, which may be a difficult mental feat.

Instead, you can use "fixed" and "broken" terms like this:

```
git bisect start --term-new=fixed --term-old=broken
git bisect fixed master
git bisect broken 6c94774
```

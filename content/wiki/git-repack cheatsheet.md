---
tags: git
---

Expensive but effective repacking:

```shell
$ git repack -a -d -f --depth=250 --window=250
```

Probably a bad idea:

```shell
$ git gc --aggressive
```

**Source:** <http://metalinguist.wordpress.com/2007/12/06/the-woes-of-git-gc-aggressive-and-how-git-deltas-work/>

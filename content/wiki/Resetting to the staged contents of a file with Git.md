---
tags: git wiki
cache_breaker: 1
---

Scenario: you stage some changes, then edit the file further. You later decide that those further edits aren't worth pursuing and want to go back to where you were, but you left your editor so you can't undo. You basically want to update the file in the work tree to look like the version staged in the index:

```shell
$ git ls-files --stage -- some/path
$ git show sha1 > ...
```

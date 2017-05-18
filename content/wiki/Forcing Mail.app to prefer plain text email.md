---
tags: mail.app os.x wiki
cache_breaker: 1
---

This undocumented option instructs [Mail.app](/wiki/Mail.app) to display plain text versions of multi-format emails (those that include HTML but also offer a plain text alternative):

```shell
$ defaults write com.apple.mail PreferPlainText -bool TRUE
```

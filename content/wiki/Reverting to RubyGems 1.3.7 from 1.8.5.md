---
tags: rubygems wiki
---

In order to silence a raft of deprecation warnings in an environment where there are a lot of old gems and in which I can't update them:

```shell
$ sudo gem update --system 1.3.7
```

**Note:** this approach seems to work fine for [Ruby](/wiki/Ruby) 1.8.7, but [may not work for later versions of Ruby](http://help.rubygems.org/discussions/problems/617-downgrading-rubygems-from-185-to-137-gives-an-error).

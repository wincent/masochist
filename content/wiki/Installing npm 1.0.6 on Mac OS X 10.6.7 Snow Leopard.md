---
tags: npm wiki
---

The [npm](/wiki/npm) site recommends installing the latest version by piping the output of a `curl` invocation into `sh`, but I prefer to review and install a specific version:

```shell
$ git clone http://github.com/isaacs/npm.git
$ cd npm
$ git checkout v1.0.6
$ sudo make install
```

---
tags: ssh wiki
cache_breaker: 1
title: Changing an SSH private key passphrase with ssh-keygen
---

```shell
$ ssh-keygen -p -f .ssh/id_dsa
```

Note this works for adding a passphrase to an unencrypted key, and also for removing a passphrase from an encrypted key.

Alternatively, change or remove the passhprase on the default key with:

```shell
$ ssh-keygen -p
```

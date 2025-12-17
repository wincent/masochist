---
tags: wiki gpg
title: gpg-agent cheatsheet
---

# Checking status of running agent

```shell
gpgconf --list-dirs agent-socket
```

# Clearing the cache

```shell
gpgconf --kill gpg-agent
```

# Creating a test signature

```shell
echo test | gpg --clearsign
```

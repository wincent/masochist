---
tags: memcached homebrew wiki
title: Starting, stopping and restarting a Homebrew-installed memcached
---

# The new way

```bash
brew services list
brew services start memcached
brew services stop memcached
brew services restart memcached
brew services --help
```

# The old way

## Starting

```shell
$ launchctl load ~/Library/LaunchAgents/homebrew.mxcl.memcached.plist
```

## Stopping

```shell
$ launchctl unload ~/Library/LaunchAgents/homebrew.mxcl.memcached.plist
```

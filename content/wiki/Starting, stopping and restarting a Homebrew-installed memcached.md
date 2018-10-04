---
tags: memcached homebrew wiki
---

# The new way

```shell
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

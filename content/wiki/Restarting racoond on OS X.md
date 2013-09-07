---
tags: vpn os.x
cache_breaker: 1
---

```shell
$ sudo launchctl unload /System/Library/LaunchDaemons/com.apple.racoon.plist
$ sudo launchctl load /System/Library/LaunchDaemons/com.apple.racoon.plist
```

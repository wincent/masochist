---
tags: dns macos wiki
---

Sometimes a process will claim that a host is unknown when trying to connect with one process (eg. `git push`) but others have no trouble doing so (eg. `ping`). The solution may be to bounce the DNS cache.

# The finessed approach

```shell
$ sudo launchctl unload -w /System/Library/LaunchDaemons/com.apple.mDNSResponder.plist
$ sudo launchctl load -w /System/Library/LaunchDaemons/com.apple.mDNSResponder.plist
```

Verified to work on [OS X](/wiki/OS_X) 10.11.2 [El Capitan](/wiki/El_Capitan).

## Source

-   <http://apple.stackexchange.com/a/48828/158927>

# Via brute force

```shell
$ sudo killall -HUP mDNSResponder
```

## Source

-   <http://support.apple.com/kb/ht5343>

# See also

-   [Clearing Chrome's DNS cache](/wiki/Clearing_Chrome%27s_DNS_cache)

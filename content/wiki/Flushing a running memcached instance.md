---
tags: memcached wiki
---

I usually restored to a heavy-handed `sudo /etc/init.d/memcached restart` (or similar), but you can also do it with telnet:

```shell
$ telnet localhost 11211
flush_all
```

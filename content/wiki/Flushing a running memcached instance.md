---
tags: memcached wiki
---

I usually restored to a heavy-handed `sudo /etc/init.d/memcached restart` (or similar), but you can also do it with telnet:

```shell
$ telnet localhost 11211
flush_all
```

Or if you don't have `telnet` ([likely the case](https://serverfault.com/questions/259114/how-to-restart-clear-memcache-without-restarting-the-whole-web-server#comment908133_475987) if you are on recent macOS):

```shell
echo flush_all | nc -w 2 localhost 11211
```

---
tags: wiki cheatsheet
title: systemd cheatsheet
---

# Timer units

List all timers:

```
systemctl list-timers --all
```

Sample output:

```
NEXT                         LEFT          LAST                         PASSED       UNIT
Thu 2025-01-23 19:01:07 UTC  11min left    Thu 2025-01-23 18:46:53 UTC  2min 39s ago backup-mirror.timer
Fri 2025-01-24 00:11:38 UTC  5h 22min left n/a                          n/a          gc-repos.timer
Fri 2025-01-24 10:21:27 UTC  15h left      Thu 2025-01-23 10:21:27 UTC  8h ago       systemd-tmpfile
```

Check the status of a specific timer:

```
systemctl status example.timer
```

Check on the status of the related service:

```
systemctl status example.service # or:
systemctl status example
```

The above shows the last bit of the service logs, but you can see more with:

```
journalctl -u example.service # for the related service; or:
journalctl -u example
```

And you can see the timer unit logs too:

```
journalctl -u example.timer
```

And tail them:

```
journalctl -u example.timer -f
```

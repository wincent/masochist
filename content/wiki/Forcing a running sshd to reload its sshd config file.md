---
tags: ssh wiki
---

Find the process ID for the master `sshd` process and send it a `HUP` signal.

```shell
$ ps auxwww|grep sshd
$ sudo kill -HUP 1234
```

**Note:** This article should be titled "Forcing a running sshd to reload its sshd\_config file", but underscores are not allowed in wiki article titles.

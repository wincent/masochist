---
tags: cron wiki
cache_breaker: 1
---

# [Red Hat Enterprise Linux](/wiki/Red_Hat_Enterprise_Linux)

As root:

```shell
# ls -l /var/spool/cron/*
# cat /var/spool/cron/*
```

You'll also want to inspect:

-   `/etc/crontab`

And the contents of:

-   `/etc/cron.d/`
-   `/etc/cron.daily`
-   `/etc/cron.hourly`
-   `/etc/cron.monthly`
-   `/etc/cron.weekly`

For this purpose `find` might come in handy:

```shell
# find /etc -type f -path '/etc/cron*'
# find /etc -type f -path '/etc/cron*' -exec cat {} \;
```

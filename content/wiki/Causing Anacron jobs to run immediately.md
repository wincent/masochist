---
tags: wiki anacron
title: Causing Anacron jobs to run immediately
---

Can do this for testing purposes:

```shell
# anacron -fn           # kick off the jobs
# tail -f /var/log/cron # monitor the logs
```

ie.

- `-f` to force execution, ignoring timestamps.
- `-n` to ignore delay specifications (not sure if this is actually needed, but as you can see I used it anyway).
- `-s` (implied by `-n`) to run jobs serially instead of in parallel.

Via: https://askubuntu.com/a/761675

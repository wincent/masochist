---
tags: shell
---

The quick and dirty way:

```shell
$ (./script.sh &) &
```

Via: <http://stackoverflow.com/a/3430969/2103996>

**Note:** This "double-background" trick doesn't really daemonize the script, because it's not disconnecting standard in, standard out or standard error, nor is it making use of `setsid` to create a new process group.

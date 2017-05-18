---
tags: watch wiki
cache_breaker: 1
---

Ideally you'd express the command as a single invocation with options to do what you want, but if you must use a pipe, enclose the whole thing in quotes; eg:

```shell
$ watch "ps auxwww|grep ec2-user"
```

This is considerably easier than my first attempt at this:

```shell
$ watch 'bash -c "ps auxwww|grep ec2-user"'
```

Of course, in this case, there *is* an option you can pass that allows you to do this without a pipe, so that's the optimal case:

```shell
$ watch ps -U ec2-user uxwww
```

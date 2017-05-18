---
tags: red.hat updates wiki
---

Update everything at once, including the kernel:

```shell
# yum --disableexcludes=all check-update
# yum --disableexcludes=all update
```

Check if there is anything more to be installed (there was):

```shell
# yum --disableexcludes=all check-update
# yum --disableexcludes=all update
```

Reboot:

```shell
# reboot
```

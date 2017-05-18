---
tags: unix shell wiki
---

I recently wanted to be sure that I knew all the users and groups with files on a particular filesystem (specifically, this was an [EBS](/wiki/EBS) volume and I wanted to be sure that when I attached it on another host that that host already had corresponding user and group IDs).

Let's say the volume is mounted at `/data`, this prints a list of all user ID/group ID tuples:

```shell
# ls -laR /data/* | awk '{print $3":"$4}' | sort | uniq
```

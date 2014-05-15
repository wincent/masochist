---
tags: unix shell
---

Just say I want to change the user and group ID of a `git` user to 599 and 599, respectively, from their previous values of 507 and 509, respectively:

```shell
# grep git /etc/{passwd,group} # make note of existing IDs
# find / -uid 507 -or -gid 509 2> /dev/null | grep -v /proc | less # audit filesystem for files
# groupmod -g 599 git
# usermod -g 599 -u 599 git
# /etc/init.d/git stop
# find / -uid 501 -exec chown -v git {} \;
# find / -gid 509 -exec chgrp -v git {} \;
# /etc/init.d/git start
```

In this example, as the `git` user happens to be running a `git-daemon` instance, note that I exclude the `/proc` filesystem and stop the service and restart it after the change to be sure that no new files get created with the wrong IDs. Also note that if the user has files outside its `$HOME` their ownership needs to be changed manually.

---
tags: updates unicorn fedora wiki
---

Installation:

```shell
# gem install unicorn
```

Switching to the new version without dropping any connection, as described [here](http://unicorn.bogomips.org/SIGNALS.html):

```shell
# ps auxww | grep unicorn # get PID of master process, in this case 18003
# kill -s USR2 18003      # re-execute running binary
# ps auxww | grep unicorn # confirm that new master process launched successfully
# ls pids                 # check pid files (should have unicorn.pid and unicorn.pid.oldbin)
# kill -s WINCH 18003     # gracefully stop workers, keeping master process running
# ps auxww | grep unicorn # we also test in browser that app is running correctly
# kill -s QUIT 18003      # gracefully shut down
# ps auxww | grep unicorn # one more check
# pstree                  # and another
# monit status            # see how monit sees things
```

---
tags: nginx wiki
cache_breaker: 1
---

This is described on the official wiki at:

-   <http://wiki.nginx.org/NginxCommandLine#Upgrading_To_a_New_Binary_On_The_Fly>

Basically it boils down to the following:

Get [PID](/wiki/PID) of old master process by inspecting output of `ps`:

```shell
$ ps auxwww | grep nginx
```

(You could also just `cat /var/run/nginx.pid`.)

Now, install the new binary:

```shell
$ sudo make install
```

Advise old master process to start a new master process using the updated binary:

```shell
$ sudo kill -s USR2 2941
```

Gracefully shut down old worker processes:

```shell
$ sudo kill -s WINCH 2941
```

Gracefully exit old master process:

```shell
$ sudo kill -s QUIT 2941
```

See the official wiki for more info on how to do other things like backing out of an update.

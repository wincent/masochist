---
tags: ssh wiki
cache_breaker: 1
---

A colleague of mine recently shared [an article on speeding-up SSH-based workflows](http://blogs.perl.org/users/smylers/2011/08/ssh-productivity-tips.html).

[OpenSSH](/wiki/OpenSSH) has some awesome support for this baked in, in the form of the `Control*` family of directives. At first I was going to just apply these to the hosts to which I deploy code (deploying requires multiple connections), but in the end I decided that the following generic approach, added to my `~/.ssh/config`, would work well enough for all hosts:

    Host *
      ControlMaster auto
      ControlPath  ~/.ssh/master-%l-%r@%h:%p
      ControlPersist 240

This works quite well for my workflows:

-   `ControlMaster auto`: if a shared connection exists, use it; otherwise create one
-   `ControlPath ...`: store shared connections in per-local-host, per-remote-login, per-remote-host, per-port sockets
-   `ControlPersist 240`: keep shared connections around for an additional 240 seconds after the last `ssh` invocation exits; this permits rapid reuse for things like deploys, without having to worry about connections piling up over time

The short `ControlPersist` time is not only good for deploys, but it works well enough for other workflows. For example, when I'm starting to work at the beginning of the day, I usually begin by opening up a remote connection. This first one will be slow, but from then on I don't close it. I do, however, open up other connections to the same server as the need arises, and all of those will be fast because they'll use the shared connection.

To give some indication of the speed-up, consider the time for an initial connection (without the shared connection) followed by a subsequent one (using the shared connection):

```shell
$ time ssh example.net exit

real	0m1.591s
user	0m0.040s
sys	0m0.017s
$ time ssh example.net exit

real	0m0.266s
user	0m0.011s
sys	0m0.009s
```

# See also

-   <http://blogs.perl.org/users/smylers/2011/08/ssh-productivity-tips.html>
-   <http://protempore.net/~calvins/howto/ssh-connection-sharing/>

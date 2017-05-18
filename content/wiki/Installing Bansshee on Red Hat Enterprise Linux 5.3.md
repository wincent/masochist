---
tags: red.hat bansshee wiki
cache_breaker: 1
---

# Installing the latest source code from the [Git](/wiki/Git) repository

```shell
$ git clone git://git.wincent.com/bansshee.git
$ cd bansshee
$ sudo make install
```

# Testing required dependencies

```shell
$ perl -c /usr/local/sbin/bansshee
Can't locate Proc/Daemon.pm in @INC
$ sudo -H cpan Proc::Daemon
$ perl -c /usr/local/sbin/bansshee 
Can't locate File/Tail.pm in @INC
$ sudo -H cpan File::Tail
$ perl -c /usr/local/sbin/bansshee 
/usr/local/sbin/bansshee syntax OK
```

# Setting up [iptables](/wiki/iptables)

First, customize firewall rules as desired (beyond the scope of this document) in `/etc/sysconfig/iptables`.

Start `iptables`:

```shell
$ sudo service iptables start
```

Set up [iptables](/wiki/iptables) to automatically launch at boot time:

```shell
$ sudo chkconfig iptables on
```

# Setting up [Bansshee](/wiki/Bansshee) configuration and support files

See the `contrib` directory for support files specific to [RHEL](/wiki/RHEL) 5.3.

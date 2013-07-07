---
tags: znc
---

# Installation

```shell
# yum install gcc-c++ # prereq
# sudo -i -u builder # build as unprivileged user
$ wget http://znc.in/releases/znc-1.0.tar.gz
$ tar xzvf znc-1.0.tar.gz
$ cd znc-1.0
$ ./configure
$ make
$ exit # back to root
# cd /home/builder/znc-1.0
# make install
```

# Preparing an unprivileged user to run the daemon

At the very least, we want to run as an unprivileged user. For bonus points, we could run the daemon inside a chroot.

```shell
# useradd -r -m -d /var/lib/znc -c "ZNC IRC bouncer" znc
```

# Configuring

If using an existing SSL certificate, concatenate the relevant bits (private key, certificate, CA certificate) at `$HOME/.znc/znc.pem`, then configure:

```shell
# chown znc:znc /var/lib/znc/.znc/znc.pem
# chmod 400 !$
# sudo -i -u znc
$ /usr/local/bin/znc --makeconf
```

Additionally, as I am running this on EC2, I needed to add a port to the security group to allow connections through to ZNC.

# Running as a daemon

The docs (suprisingly) [recommend](http://wiki.znc.in/FAQ#How_can_I_restart_ZNC_automatically_.28in_case_of_a_machine_reboot.2C_crash.2C_etc..29.3F) using cron to make sure the daemon is running every ten minutes:

```shell
# crontab -u znc edit
```

The crontab should have an entry like:

    */10 * * * *   /usr/local/bin/znc > /dev/null 2>&1

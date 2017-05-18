---
tags: leopard red.hat rsync wiki
cache_breaker: 1
---

I first set up remote backups between [RHEL](/wiki/RHEL) (specifically, RHEL 3) and [Mac OS X](/wiki/Mac_OS_X) back in 2006 ([Tiger](/wiki/Tiger), if I recall correctly), and detailed that process in "[Remote backups via rsync between RHEL 3 and Mac OS X](/wiki/Remote_backups_via_rsync_between_RHEL_3_and_Mac_OS_X)".

These notes refer to my experiences in 2009, this time with [RHEL](/wiki/RHEL) 5.3 and [Mac OS X](/wiki/Mac_OS_X) 10.5.7 [Leopard](/wiki/Leopard).

# Objective

Our objective is to connect from our client machine ([Mac OS X](/wiki/Mac_OS_X)) via [SSH](/wiki/SSH) to perform an [rsync](/wiki/rsync) backup of critical files on a remote [Red Hat Enterprise Linux](/wiki/Red_Hat_Enterprise_Linux) machine.

# Initial client-side setup

First of all let's see what version of [rsync](/wiki/rsync) we have on the client side ([Mac OS X](/wiki/Mac_OS_X) 10.5.7 [Leopard](/wiki/Leopard):

```shell
$ whereis rsync
/usr/bin/rsync
$ rsync --version
rsync  version 2.6.9  protocol version 29
Copyright (C) 1996-2006 by Andrew Tridgell, Wayne Davison, and others.
<http://rsync.samba.org/>
Capabilities: 64-bit files, socketpairs, hard links, symlinks, batchfiles,
              inplace, IPv6, 32-bit system inums, 64-bit internal inums

rsync comes with ABSOLUTELY NO WARRANTY.  This is free software, and you
are welcome to redistribute it under certain conditions.  See the GNU
General Public Licence for details.
```

# Initial server-side setup

How does this compare with what's available on the server ([RHEL](/wiki/RHEL) 5.3)?

```shell
# yum list rsync
Loaded plugins: rhnplugin
Excluding Packages in global exclude list
Finished
Available Packages
rsync.i386                                                2.6.8-3.1                                                rhel-i386-server-5
```

I know from my experience last time ("[Remote backups via rsync between RHEL 3 and Mac OS X](/wiki/Remote_backups_via_rsync_between_RHEL_3_and_Mac_OS_X)") that version 2.6.8 must also speak "protocol version 29", so let's try installing that:

```shell
# yum install rsync
Loaded plugins: rhnplugin
Excluding Packages in global exclude list
Finished
Setting up Install Process
Parsing package install arguments
Resolving Dependencies
--> Running transaction check
---> Package rsync.i386 0:2.6.8-3.1 set to be updated
--> Finished Dependency Resolution

Dependencies Resolved

=====================================================================================================================================
 Package                    Arch                      Version                          Repository                               Size
=====================================================================================================================================
Installing:
 rsync                      i386                      2.6.8-3.1                        rhel-i386-server-5                      229 k

Transaction Summary
=====================================================================================================================================
Install      1 Package(s)         
Update       0 Package(s)         
Remove       0 Package(s)         

Total download size: 229 k
Is this ok [y/N]: y
Downloading Packages:
rsync-2.6.8-3.1.i386.rpm                                                                                      | 229 kB     00:00     
Running rpm_check_debug
Running Transaction Test
Finished Transaction Test
Transaction Test Succeeded
Running Transaction
  Installing     : rsync                                             [1/1] 

Installed: rsync.i386 0:2.6.8-3.1
Complete!
# rsync --version
rsync  version 2.6.8  protocol version 29
Copyright (C) 1996-2006 by Andrew Tridgell, Wayne Davison, and others.
<http://rsync.samba.org/>
Capabilities: 64-bit files, socketpairs, hard links, ACLs, xattrs, symlinks, batchfiles,
              inplace, IPv6, 64-bit system inums, 64-bit internal inums

rsync comes with ABSOLUTELY NO WARRANTY.  This is free software, and you
are welcome to redistribute it under certain conditions.  See the GNU
General Public Licence for details.
```

# Key set-up

I'll be using the key pair that I generated [last time](/wiki/Remote_backups_via_rsync_between_RHEL_3_and_Mac_OS_X), so there is no need to do anything on the client side.

On the server side I'm going to add my public key to root's `authorized_keys` file. First, upload the public key file from the local client to the server:

```shell
$ scp ~/.ssh/id_dsa_rsync.pub remoteuser@example.com:/home/remoteuser/.ssh
```

Back on the server, append this to the `authorized_keys` file for root:

```shell
# sudo cat /home/remoteuser/id_dsa_rsync.pub >> /root/.ssh/authorized_keys
```

And we customize the `authorized_keys` file by prepending this to the line in the file which corresponds to the key that we just added:

    command="rsync --server --daemon .",no-port-forwarding,no-agent-forwarding,no-X11-forwarding,no-pty

# Testing the connection

Seeing as I'm running [Bansshee](/wiki/Bansshee) I could get temporarily locked out of the server if I make too many failed connection attempts while testing, so I am going to turn it off temporarily:

```shell
# service bansshee stop
Stopping banshee:                                          [  OK  ]
```

Now let's create a test directory and run some trials:

```shell
$ cd /tmp
mkdir rsync-test
$ rsync -e "ssh -i /Users/testuser/.ssh/id_dsa_rsync" -avzxn --numeric-ids --delete --progress root@example.com:/ /tmp/rsync-test
rsync: connection unexpectedly closed (0 bytes received so far) [receiver]
rsync error: error in rsync protocol data stream (code 12) at /SourceCache/rsync/rsync-35.2/rsync/io.c(452) [receiver=2.6.9]
```

Find out if any extraneous output is causing problems:

```shell
$ ssh root@example.com echo -n 2>/dev/null > out.dat
$ cat out.dat
```

Try a simpler test case:

```shell
$ rsync -e ssh -avzxn --numeric-ids --delete --progress non-root-user@example.com:/ /tmp/rsync-test
receiving file list ... 
rsync: opendir "/package/admin/clear/supervise" failed: Permission denied (13)
...
sent 55244 bytes  received 267877 bytes  34012.74 bytes/sec
total size is 238451640  speedup is 737.96
rsync error: some files could not be transferred (code 23) at /SourceCache/rsync/rsync-35.2/rsync/main.c(1400) [generator=2.6.9]
```

Create `/root/debug.sh`:

    #!/bin/sh
    echo "$SSH_ORIGINAL_COMMAND" > /tmp/debug.out

And stick that in the forced command specification of the `authorized_keys` file before trying the `rsync` invocation again. Now inspect the output of `/tmp/debug.out`:

```shell
# cat /tmp/debug.out 
rsync --server --sender -vnlogDtprxz --numeric-ids . /
```

So this is identical to the output that I saw back in 2006. Update the forced command specification accordingly and try again.

It works. Note that my first test run, still using the `-n` switch, produced this:

    receiving file list ... 
    9778 files to consider
    ./                  
    Invalid checksum length -1610612736 [sender]
    rsync error: protocol incompatibility (code 2) at io.c(958) [sender=2.6.8]
    rsync: connection unexpectedly closed (223620 bytes received so far) [receiver]
    rsync error: error in rsync protocol data stream (code 12) at /SourceCache/rsync/rsync-35.2/rsync/io.c(452) [receiver=2.6.9]
    rsync: connection unexpectedly closed (223614 bytes received so far) [generator]
    rsync error: error in rsync protocol data stream (code 12) at /SourceCache/rsync/rsync-35.2/rsync/io.c(452) [generator=2.6.9]

Which basically was the exact same problem we saw in 2006.

But removing the `-n` switch we instead get:

    receiving file list ... 
    9778 files to consider
    ./                  
    .autofsck
               0 100%    0.00kB/s    0:00:00 (xfer#1, to-check=9776/9778)
    .mysql_history
             102 100%   99.61kB/s    0:00:00 (xfer#2, to-check=9775/9778)
    .rnd
            1024 100% 1000.00kB/s    0:00:00 (xfer#3, to-check=9774/9778)
    .elinks/
    ...
    selinux/
    srv/
    sys/
    tmp/
    usr/
    var/

    sent 175536 bytes  received 125732394 bytes  433418.00 bytes/sec
    total size is 315390998  speedup is 2.50

# Scripting the backup

So our manual test run worked, all that remains is to whip up a script to automate it a little.

# Clean up

Turn [Bansshee](/wiki/Bansshee) back on:

```shell
# service bansshee start
Starting banshee:                                          [  OK  ]
```

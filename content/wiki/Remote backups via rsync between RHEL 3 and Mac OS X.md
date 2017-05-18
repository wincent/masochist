---
tags: rsync wiki
cache_breaker: 1
---

***Note:** these notes were made with older versions of [RHEL](/wiki/RHEL) and [Mac OS X](/wiki/Mac_OS_X). See "[Remote backups via rsync](/wiki/Remote_backups_via_rsync)" for links to other articles using other [operating system](/wiki/operating_system) versions.*

These are notes I made while setting up an [rsync](/wiki/rsync)-based backup mechanism between my remote server (running [Red Hat Enterprise Linux](/wiki/Red_Hat_Enterprise_Linux)) and my local machine (running [Mac OS X](/wiki/Mac_OS_X)).

# Client set-up

## Key generation

    ssh-keygen -t dsa -f ~/.ssh/id_dsa_rsync
    chmod 400 ~/.ssh/id_dsa_rsync*

## Backup storage

    sudo mkdir /var/root/backups
    sudo mkdir /var/root/backups/hostname
    sudo chmod 700 /var/root/backups
    sudo chmod 700 /var/root/backups/hostname

# Remote set-up

Edit `/etc/ssh/sshd_config`, changing:

    PermitRootLogin no

To:

    PermitRootLogin forced-commands-only

Instruct `sshd` to re-read the configuration file by sending it a `SIGHUP` signal:

    sudo kill -s SIGHUP pid_of_sshd_process

Then we set things up in `root`'s home directory:

    sudo mkdir /root/.ssh
    sudo chmod 700 /root/.ssh

Copy the public key to the remote host by executing a command like this on the local machine:

    scp ~/.ssh/id_dsa_rsync.pub remoteuser@example.com:/home/remoteuser/

Then on the remote host:

    sudo cat /home/remoteuser/id_dsa_rsync.pub >> /root/.ssh/authorized_keys

It is necessary to customize the `authorized_keys` file so that it resembles the following:

    command="rsync --server --daemon .",no-port-forwarding,no-agent-forwarding,no-X11-forwarding,no-pty ssh-dss AAAACkiWA== user@example.net

That is, we prepend `command="rsync --server --daemon .",no-port-forwarding,no-agent-forwarding,no-X11-forwarding,no-pty` immediately prior to the public key that was previously added to the file.

The `/etc/rsyncd.conf` file should have the following content added:

    max connections = 1

    [system]
        path = /
        list = false

# Performing the backup

Options to be passed to `rsync`:

-   `-a`: archive, equivalent to `-rlptgoD`
-   `-r`: recursive
-   `-l`: copy symlinks as symlinks
-   `-p`: preserve permissions
-   `-t`: preserve times
-   `-g`: preserve group
-   `-o`: preserve owner
-   `-D`: preserve devices
-   `-v`: verbose
-   `-z`: compress
-   `-x`: don't cross filesystem boundaries
-   `--numeric-ids`: don't map uid/gid values by user/group name
-   `--delete`: delete files that don't exist on the sending side
-   `--progress`: show progress during transfer

<!-- -->

    sudo rsync -e "ssh -i /absolute_path_to/id_dsa_rsync" \
               -avzx --numeric-ids --delete --progress \
               root@example.com:/ /var/root/backups/example.com/

In addition, during testing the following additional switch can be applied:

-   `-n`: dry run mode

My first test produced this error message:

    protocol version mismatch - is your shell clean?

As instructed by the `rsync` man page I tested to see if any extraneous output was breaking things:

    ssh root@example.com echo -n 2>/dev/null > out.dat

This test required me to temporarily set `PermitRootLogin` to `yes`. If all is well, `out.dat` should be a zero-byte file; it was.

So I ran `rsync --version` on the remote host:

    rsync  version 2.5.7  protocol version 26

And the local machine:

    rsync  version 2.6.3  protocol version 28

Given that the protocol versions are different, that leaves me with three options:

1.   Build a custom version of `rsync` on the server that uses the newer protocol
2.  Build a custom version on the local machine that uses the older protocol
3.  A combination of both, build new versions on the server and the local machine that use the latest protocol
4.  And another option, discovered too late, the `--protocol=NUM` command line switch

# Building `rsync`

Download the latest source ([2.6.8](http://rsync.samba.org/ftp/rsync/rsync-2.6.8.tar.gz)) from <http://rsync.samba.org/> and extract/build it:

    wget http://rsync.samba.org/ftp/rsync/rsync-2.6.8.tar.gz
    tar xzvf rsync-2.6.8.tar.gz
    cd rsync-2.6.8
    ./configure
    make
    sudo make install

The procedure is the same for both the local [Mac OS X](/wiki/Mac_OS_X) machine and the remote [Red Hat Enterprise Linux](/wiki/Red_Hat_Enterprise_Linux) machine. The custom `rsync` binary is installed into `/usr/local/bin/`. `rsync --version` now outputs:

    rsync  version 2.6.8  protocol version 29

To ensure that the remote server uses the custom build I modify the `command` section of the `authorized_keys` file to read:

    command="/usr/local/bin/rsync --server --daemon ."

Likewise, in the local invocation I must explicitly provide a full path:

    sudo /usr/local/bin/rsync -e "ssh -i /absolute_path_to/id_dsa_rsync" \
                              -avzx --numeric-ids --delete --progress \
                              root@example.com:/ /var/root/backups/example.com/

Unfortunately, even using identical versions of `rsync` on both machines I still get the same "protocol version mismatch" error.

# Troubleshooting attempts

I've tried the following troubleshooting methods:

-   Perform the `out.dat` test both with and without redirection of `stderr` to `/dev/null`
-   Perform the test with the command (`echo -n`) with and without a corresponding `command` directive in the `authorized_keys` file

All tests produce zero bytes of output, as required.

I also tried running the backup with the following variations:

-   Omit the `no-port-forwarding` specification in the `authorized_keys` file
-   Omit the `no-pty` specification
-   Omit all specifications

So looks like I am going to have to reduce this to a simpler test case and then try ramping the complexity up from there.

    mkdir /tmp/test
    /usr/local/bin/rsync -e ssh -avzxn --numeric-ids --delete --progress \
                         non_root_user@example.com:/home/non_root_user /tmp/test/

That works. So try with root directory:

    /usr/local/bin/rsync -e ssh -avzxn --numeric-ids --delete --progress \
                         non_root_user@example.com:/ /tmp/test/

Works (although insufficient privileges lead to permissions errors).

One of the differences is that the non-root user is identified by a key that is already in memory and managed by `ssh-agent`. See if removing it from the agent has any effect:

    ssh-add -d ~/.ssh/id_dsa
    /usr/local/bin/rsync -e ssh -avzxn --numeric-ids --delete --progress \
                         non_root_user@example.com:/ /tmp/test/

Still works. Try running with root privileges (still same user):

    sudo /usr/local/bin/rsync -e "ssh -i /full_path_to_identity/id_dsa" \
                              -avzxn --numeric-ids --delete --progress \
                              non_root_user@example.com:/ /tmp/test/

Works. Now the *only* difference is that one invocation connects as root and the other does not. Swap `root` for `non_root_user` in the invocation above and we're back into "protocol mismatch" territory again...

Try removing the `command` restriction entirely from the `authorized_keys` file, setting `PermitRootLogin` to `yes` and sending the `SIGHUP` signal to the `sshd` daemon again.

Works. So there must be something wrong with the command specification. Restore `PermitRootLogin` and send `SIGHUP` again. I suspect that `rsync` is not behaving as documented on

I created a script `debug.sh` and placed that in the forced command specification, then attempted to connect:

    #!/bin/sh

    echo "$SSH_ORIGINAL_COMMAND" > /tmp/debug.out

This revealed that the actual command being sent by `rsync` was:

    rsync --server --sender -vnlogDtprxz --numeric-ids . /

There are several problems with this:

-   The passed command as stated in the `rsync` man page is incorrect
-   There is no trailing period as stated in the man page; the trailing entry is `/`
-   The `--sender` option is not documented in the man page or anywhere that I can find, not even by `/usr/local/bin/rsync --help` (update: [the current CVS version of the man page](http://rsync.samba.org/ftp/rsync/nightly/rsync.html) mentions the switch)
-   The full path to the custom build of `rsync` is not being passed through

After updating my `command` definition to reflect the actually-passed parameters, things seem to work (in "dry run" mode).

# Byte-ordering issues

Real ("non-dry" runs) all fail with messages like this:

    Invalid file index: -1610612736 (count=9406) [sender]
    rsync error: protocol incompatibility (code 2) at sender.c(169) [sender=2.6.8]
    rsync: writefd_unbuffered failed to write 4092 bytes [generator]: 
    Broken pipe (32)rsync: connection unexpectedly closed (195901 bytes received so far) [receiver]
    rsync error: error in rsync protocol data stream (code 12) at io.c(463) [receiver=2.6.8]
    rsync error: error in rsync protocol data stream (code 12) at io.c(1119) [generator=2.6.8]

[This mailing list post](http://lists.samba.org/archive/rsync/2006-June/015828.html) by the creator of `rsync` suggests that this might be a byte-ordering issue:

> This number is exactly 0x60000000, so another possibility that comes to mind is that the byte-order messed up somehow. Look in byteorder.h and make sure that CAREFUL\_ALIGNMENT is being defined on any system that uses most-significant-byte-first ordering.

Now, the i386 is not a big-endian system, but I thought I'd try setting `CAREFUL_ALIGNMENT` anyway and rebuilding. No effect:

    Invalid file index: 524288 (count=161486) [sender]

Other errors:

    Invalid file index: 524288 (count=161442) [sender]
    Invalid file index: -1610612736 (count=161454) [sender]

Note that 524288 is exactly 0x80000.

I tried pulling down the latest source from CVS but got the same problem. Will try downgrading to previously installed versions using the `--protocol` switch:

-   Change `command` specification to refer to `/usr/bin/rsync`
-   Invoke local copy of `/usr/bin/rsync` with the `--protocol=26` switch

No longer see "Invalid file index" errors, but the backup appears to stall after a number of files have been copied (no error message) and then crashes:

    Exception:  EXC_BAD_ACCESS (0x0001)
    Codes:      KERN_INVALID_ADDRESS (0x0001) at 0x3fffd0d6

    Thread 0 Crashed:
    0   <<00000000>> 	0xffff0ac4 __memcpy + 804 (cpu_capabilities.h:228)
    1   rsync 	0x0000a5a7 0x1000 + 38311
    2   rsync 	0x000041c8 0x1000 + 12744
    3   rsync 	0x00004ea8 0x1000 + 16040
    4   rsync 	0x0000899e 0x1000 + 31134
    5   rsync 	0x000092ad 0x1000 + 33453
    6   rsync 	0x0000a215 0x1000 + 37397
    7   rsync 	0x00001afe 0x1000 + 2814
    8   rsync 	0x00001a19 0x1000 + 2585

    Thread 0 crashed with X86 Thread State (32-bit):
      eax: 0xffff07a0    ebx: 0x7fffffff ecx: 0x7ffffffc edx: 0x00000003
      edi: 0x80031383    esi: 0x3fffd0d6 ebp: 0xbfffcff8 esp: 0xbfffcff0
       ss: 0x0000001f    efl: 0x00010202 eip: 0xffff0ac4  cs: 0x00000017
       ds: 0x0000001f     es: 0x0000001f  fs: 0x00000000  gs: 0x00000037

# Trying with 2.6.9pre1

On both the remote server and the local machine:

    wget http://rsync.samba.org/ftp/rsync/rsync-2.6.9pre1.tar.gz
    tar xzvf rsync-2.6.9pre1.tar.gz
    cd rsync-2.6.9pre1
    ./configure
    make
    sudo make check
    sudo make install

Seems to work, so something changed between 2.6.9pre1 and the version from the CVS that I tried a few days ago.

# Automation

## Configuring a cron job

For now I'll be running this manually.

## Avoiding password prompts

The private key file used to log in to the remote server is protected by a password. It would be possible to use a technique like that mentioned in "[Setting up multiple repository access methods with Subversion](/wiki/Setting_up_multiple_repository_access_methods_with_Subversion)" but given that the key allows the holder to read any file at all on the server for the time being I prefer to be prompted for a password.

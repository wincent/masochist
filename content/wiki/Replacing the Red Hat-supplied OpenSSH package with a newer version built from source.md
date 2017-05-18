---
tags: ssh rssh wiki
cache_breaker: 1
---

# Background

For many years now I have used the excellent [rssh](/wiki/rssh) shell to lockdown access to third-parties who require upload ([SFTP](/wiki/SFTP)) access to the server.

For basic security, [rssh](/wiki/rssh) enables users to connect to the server and upload using [SFTP](/wiki/SFTP) without needing full-fledged [shell](/wiki/shell) access.

For additional security, [rssh](/wiki/rssh) can operate within a [chroot](/wiki/chroot) "jail" which restricts users to a designated area (usually their home directory) and prevents them from seeing other parts of the filesystem.

In one of the recent updates supplied by [Red Hat](/wiki/Red_Hat) I noticed that I could no longer create working jails. Old jails continued to work because all the necessary files for the jail had been copied inside them at the time of their creation, but new jails didn't work.

The script that I use to create these jails (shown below) was specifically designed to handle the process automatically (to eliminate human error) and to be easily re-runnable on an existing jail to "refresh" it; nevertheless it didn't work.

I spent a little while investigating the problem and couldn't see any obvious errors in the set-up of the new jails. Running the script using `sh -x` to see exactly what it was doing revealed no obvious problems, and manual inspection of the required libraries with `ldd` didn't reveal any obvious omissions.

This wasn't a very satisfactory situation because it shows how brittle the system is: at any given time it is possible that Red Hat might make a change that breaks the jail-creation script, even though it was carefully crafted to be flexible and re-runnable. And the fact that processes running inside the jail can't write to system log files, at least without special configuration of the syslog daemon, makes the problem difficult to diagnose. This was not a process which I wanted to face repeatedly in the future.

    #!/bin/sh -e
    # vhost-jail
    # Copyright 2006-2008 Wincent Colaiuta
    # Version 1.0 (20 January 2006): RHEL 3
    # Version 2.0 (27 February 2008): RHEL 5.1

    #
    # Constants
    #

    # tools/executables:
    RSSHHELPER=/usr/local/libexec/rssh_chroot_helper
    SFTPSERVER=/usr/libexec/openssh/sftp-server

    # support files:
    LDCACHE=/etc/ld.so.cache
    LDCONF=/etc/ld.so.conf
    PASSWD=/etc/passwd
    RSSHCONF=/usr/local/etc/rssh.conf

    #
    # Functions
    #

    die()
    {
      SCRIPT=$(basename $0)
      echo "$SCRIPT: error: $1" >&2
      exit 1
    }

    # Returns the true name of a regular file or symlink (not a directory).
    # For example, given a symbolic link like this:
    #  /lib/libresolv.so.2 -> libresolv-2.5.so
    # Then:
    #   truename /lib/libresolv.so.2
    # Returns:
    #   /lib/libresolv-2.5.so
    truename()
    {
      FILE=$1
      DIR=$(dirname $FILE)
      NAME=$(basename $FILE)
      if [ ! -f $FILE ]; then
        die "truename(): $FILE is not a regular file"
      fi
      if [ -L $FILE ]; then
        TARGET=$(find $DIR -maxdepth 1 -name $NAME -printf "%l\n")
        TRUENAME="$DIR/$TARGET"
      else
        TRUENAME=$FILE
      fi
      echo $TRUENAME
    }

    lib_list()
    {
      # Will process output from ldd that looks like this:
      #   linux-gate.so.1 =>  (0x00a5c000)
      #   libc.so.6 => /lib/libc.so.6 (0x00318000)
      #   /lib/ld-linux.so.2 (0x002fb000)
      # grep filters out lines which don't contain an absolute path
      # perl then strips off everything except the (space-delimited) path
      ldd $1 | grep / | perl -pe "s/.*?(\/[^ ]+).*/\1/"
    }

    createdir()
    {
      if [ $# -ne 1 ]; then
        die "createdir() requires exactly one argument"
      fi 
      if [ ! -d "$1" ]; then
       if [ -e "$1" ]; then
         die "createdir(): $1 already exists and is not a directory"
       else 
        mkdir -p -v "$1" || die "createdir() failed for path: $1"
       fi
      fi
    }

    checkbase()
    {
      if [ $# -ne 1 ]; then
        die "checkbase() requires exactly one argument"
      fi
      BASE="$1"
      COUNT=`echo "${BASE}" | egrep -c "\/$"`
      if [ $COUNT -ne 0 ]; then
        die "checkbase() requires base directory to have no trailing slash"
      fi
    }

    # Previously this method set up hard links and symbolic links.
    # On this RHEL 5.1 install most hard links won't work (because they'd be cross-device links);
    # so we copy instead of hard-linking (uses about 5MB per jail).
    link()
    {
      if [ $# -ne 2 ]; then
        die "link() requires exactly two arguments"
      fi
      FILE="$1"
      BASE="$2"
      DIR=$(dirname "$FILE")
      checkbase "${BASE}"
      createdir "${BASE}${DIR}"
      if [ ! -f "${FILE}" ]; then
        die "link(): ${FILE} is not a regular file"
      fi
      if [ -L "$1" ]; then
        NAME=$(basename "${FILE}")
        TARGET=$(find "$DIR" -maxdepth 1 -name "${NAME}" -printf "%l\n")
        TRUENAME="${DIR}/${TARGET}"
        echo "${FILE} is a symbolic link with target ${TRUENAME}"
        cp -v -f "$TRUENAME" "$BASE$TRUENAME" || die "cp failed for file: $TRUENAME"
        pushd "${BASE}${DIR}"
        ln -v -f -s "${TARGET}" "${NAME}" || die "link() (symbolic) failed for file: ${BASE}${FILE}"
        popd
      else
        cp -v -f "$FILE" "$BASE/$FILE" || die "cp failed for file: $FILE"
      fi
    }

    #
    # Main
    #

    if [ $(whoami) != "root" ]; then
      die "this tool must be run as root"
    fi

    if [ $# -ne 2 ]; then
      die "exactly two arguments required ('path to chroot' and 'username')"
    fi

    BASE="$1"
    USER="$2"
    checkbase "${BASE}"

    # create relevant /etc/passwd entry
    DIR=$(dirname "$PASSWD")
    createdir "${BASE}${DIR}"
    cat "$PASSWD" | egrep "^${USER}:" > "$BASE$PASSWD"
    COUNT=$(wc -l "$BASE$PASSWD" | awk '{print $1}')
    if [ $COUNT -ne 1 ]; then
      die "error creating $BASE$PASSWD from $PASSWD"
    fi 

    # Get an up-to-date list of libraries linked to by sftp-server:
    LIBS=$(lib_list $SFTPSERVER) 
    for LIB in ${LIBS}; do
      link "${LIB}" "${BASE}"
    done

    LIBS=$(lib_list $RSSHHELPER)
    for LIB in ${LIBS}; do
      link "${LIB}" "${BASE}"
    done

    # copy/link support files
    link "${LDCACHE}" "${BASE}"
    link "${LDCONF}" "${BASE}"

    # copy/link tools
    link "${RSSHHELPER}" "${BASE}"
    link "${SFTPSERVER}" "${BASE}"

    # set up /dev/null if required
    test -d "$BASE/dev" || mkdir "$BASE/dev"
    test -e "$BASE/dev/null" || cp -a /dev/null "$BASE/dev/null"

    # append to rssh config
    CONFIG="user=${USER}:022:00010:\"${BASE}\""
    COUNT=$(cat "${RSSHCONF}" | egrep -c "${CONFIG}")
    if [ $COUNT -eq 0 ]; then
      echo "Appending line to ${RSSHCONF}"
      echo "${CONFIG}"
      echo "${CONFIG}" >> "${RSSHCONF}"
    fi

    # tighten ownership on chroot jail dir
    chown -v root:root "${BASE}"

    exit 0

# The decision to update

At this time I became aware of a new option added to [OpenSSH](/wiki/OpenSSH) around version 4.9, the `ChrootDirectory` setting which largely renders [rssh](/wiki/rssh) unnecessary. [Red Hat](/wiki/Red_Hat) actually backported this feature to the older version that they currently ship with [RHEL](/wiki/RHEL) 5.4 (they are currently shipping OpenSSH version 4.3; the latest version available is 5.3), but it is basically useless without the `Match` directive which they *didn't* backport and which is necessary in order to selectively apply the jail only to certain users.

As such, jailing [SFTP](/wiki/SFTP) users isn't really practical under the Red Hat-supplied OpenSSH because doing so would effectively jail *all* users, even system administrators, rendering remote administration impossible. (The possible workaround of setting the home directory of administrators to the root of the filesystem, `/`, seems like a hideous kludge and I immediately dismissed it.)

I like sticking to the stock-standard Red Hat packages wherever it is practical to do so because of the automated, quality-controlled security fixes, but in this case I felt like the advantages of switching to a hand-compiled, newer version of OpenSSH (robust, easy-to-configure chroot jails for [SFTP](/wiki/SFTP) users) outweighed the costs (having to monitor another mailing list for security advisories).

Another option I considered but discarded was the possibility of running a custom OpenSSH build out of `/usr/local` and listening on a different port, but given that these jails exist in part because they are for giving access to pseudo-trusted third parties, it might be confusing for them to set up their file transfer clients adequately (as it is, standard SFTP access proves to be tricky for many users, many of which are accustomed only to vanilla FTP clients).

The question was, how to replace the [yum](/wiki/yum)-installed Red Hat version of OpenSSH with a hand-built one? This was all to be done remotely so I wanted to be very careful about the steps I took so as not to get locked out.

# Making the transition

Grab the latest version from <http://www.openssh.org/portable.html>.

```shell
$ wget ftp://ftp.OpenBSD.org/pub/OpenBSD/OpenSSH/portable/openssh-5.3p1.tar.gz
$ tar xzvf openssh-5.3p1.tar.gz 
$ cd openssh-5.3p1
```

The page linked to above provides instructions on how to verify the signatures on the downloaded archive.

Now do a test build to see if we can do a warning and error-free build:

```shell
$ ./configure
$ make
$ make tests
```

Inspect what packages are currently installed:

```shell
$ rpm -qa|grep ssh
openssh-4.3p2-36.el5_4.2
openssh-clients-4.3p2-36.el5_4.2
openssh-server-4.3p2-36.el5_4.2
```

See what files on disk are associated with those packages:

```shell
$ rpm -ql openssh
$ rpm -ql openssh-clients
$ rpm -ql openssh-server
```

Do a test install under `/usr/local`:

```shell
$ sudo make install
```

Edit the test install's configuration file to listen on a different port:

```shell
# vi /usr/local/etc/sshd_config
```

Specifically, I wanted the test install to listen on port 2222:

    Port 2222

Instead of the default port 22:

    Port 22

On my system I have a restrictive firewall which rejects all traffic except for some specifically whitelisted things, so I had to allow access to port 2222. First step is to find out the rule number corresponding to the rejection rule:

```shell
# iptables -L --line-numbers|grep REJECT
33   REJECT     all  --  anywhere             anywhere            reject-with icmp-host-prohibited
```

So I need to insert a new rule at rule 33 which whitelists traffic to port 2222:

```shell
# iptables -I INPUT 33 -m state --state NEW -m tcp -p tcp --dport 2222 -j ACCEPT
```

Now we fire up the test server:

```shell
# /usr/local/sbin/sshd
```

After testing connectivity to the test server (with `ssh -p 2222 user@example.com` and `sftp -oPort=2222 user@example.com`; it worked), time to do a real install over the top of the existing system install. Any existing sessions will survive here which is a nice safety measure.

```shell
$ make clean
$ ./configure --prefix=/usr --sysconfdir=/etc/ssh
$ make
$ sudo make install
```

Kill the old master process and start a new one:

```shell
# service sshd restart
```

After confirming that it works, we are free to set up our jails. Set up a new group, `sftp`, which will contain all users who are to have SFTP-only access.

```shell
# groupadd sftp
```

Add a test user to the group to see if it works:

```shell
# usermod -G sftp exampleuser
```

My test user already had its home directory owned by `root:root`, with no write permissions of others, so I proceeded to edit the end of my `/etc/ssh/sshd_config`:

    # override default of no subsystems
    [/tags/Subsystem #Subsystem]	sftp	/usr/libexec/openssh/sftp-server
    Subsystem	sftp	internal-sftp

    Match Group sftp
    	ChrootDirectory	%h
    	ForceCommand	internal-sftp
    	X11Forwarding	no
    	AllowTcpForwarding	no

Test, it works as intended.

Change the user's shell:

```shell
chsh -s /sbin/nologin exampleuser
```

Test again; still works, so proceed to add all other SFTP users to the `sftp` group with `usermod`.

I also have a couple of users on the server for [Rails](/wiki/Rails) apps, and these had a slightly different set-up so I needed to tweak the permissions slightly. These home directories weren't owned by `root:root` but by the Rails user itself so I had to tweak like this:

```shell
# chown root rails_app
# chmod 750 rails_app
```

As a finally step had to clean up the [RPM](/wiki/RPM) database (as `yum`/RPM still thinks other package is installed):

```shell
# rpm -e --test --justdb openssh-clients openssh-server openssh
# rpm -e --justdb openssh-clients openssh-server openssh
```

Confirm that `yum` and `rpm` are happy:

```shell
# rpm -qa | grep ssh
# yum list|grep ssh
openssh.i386                            4.3p2-36.el5_4.2      rhel-i386-server-5
openssh-askpass.i386                    4.3p2-36.el5_4.2      rhel-i386-server-5
openssh-clients.i386                    4.3p2-36.el5_4.2      rhel-i386-server-5
openssh-server.i386                     4.3p2-36.el5_4.2      rhel-i386-server-5
```

And get rid of the temporary firewall rule:

```shell
# iptables -L --line-numbers
```

Just check the rule number we want to target:

    33   ACCEPT     tcp  --  anywhere             anywhere            state NEW tcp dpt:rockwell-csp2

Go ahead with the deletion:

```shell
# iptables -D INPUT 33
```

And confirm that it worked:

```shell
# iptables -L
```

We can kill the test process (find it with `ps auxwww|grep ssh` and look for `/usr/local/sbin/sshd`, and kill using `kill`) and make sure that the PID file at `/var/run/sshd.pid` corresponds to the new master process that we launched earlier so that `service sshd restart` (and similar) will work.

Finally, subscribe to <https://lists.mindrot.org/mailman/listinfo/openssh-unix-announce> to keep on top of security and release announcements.

# Follow-ups

## `git push`

I later discovered that my attempts to `git push` to the server were broken by the update. The message in the logs was:

    User git_user not allowed because account is locked

This is because the [Git](/wiki/Git) user had `!!` as a password in `/etc/shadow`, indicating that the account was locked. The old version of [OpenSSH](/wiki/OpenSSH) had allowed public key authentication anyway, but the new version does not.

So the required modification was to change the `!!` (user cannot log in to the system) to a `*` (user cannot log in by password) by manually editing `/etc/shadow`.

This has to be done manually because the `usermod` utility doesn't provide a means of swapping from `!!` to `*`, only of prepending a `!` (locking with `-L` or `--lock`) or removing a prepended `!` (unlocking with `-U` or `--unlock`).

```shell
# chmod +w /etc/shadow
# vim /etc/shadow
# chmod -w /etc/shadow
```

## [SSH](/wiki/SSH) `PATH`

Another discovery: the old SSH had a broader `PATH` setting, so commands like this:

```shell
$ ssh user@example.com "sh -c 'which gem git'"
```

Would work and find `/usr/bin/gem` and `/usr/local/bin/git`.

On the new install only the former is found but the later is not because `/usr/local/bin` is not in the `PATH`.

The solution is to set up a `~/.profile` file containing:

    PATH=/usr/local/bin:$PATH
    export PATH

And cause [Bash](/wiki/Bash) to consult it by invoking `sh` with the `-l` switch:

```shell
$ ssh user@example.com "sh -l -c 'which gem git'"
```

Similarly, commands like:

```shell
$ ssh user@example.com sudo monit restart all
```

Used to work because `monit` is at `/usr/local/bin/monit` and `/usr/local/bin` was in the `PATH`, but now need to be wrapped inside `sh -l -c ...` in order to flesh out the `PATH` appropriately:

```shell
$ ssh user@example.com "sh -l -c 'sudo monit restart all'"
```

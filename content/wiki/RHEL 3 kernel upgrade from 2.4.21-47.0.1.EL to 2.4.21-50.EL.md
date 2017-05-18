---
tags: red.hat wiki
---

These notes made while performing a [RHEL](/wiki/RHEL) 3 kernel upgrade from version 2.4.21-47.0.1.EL to 2.4.21-50.EL (gotta love those version numbers!).

In the command snippets below `$` is a normal prompt and `#` is a superuser prompt.

# Preliminaries

Do everything inside a [screen](/wiki/screen) session in case we lose the connection:

    $ screen

As basically every operation requires root privileges, do this in a root shell rather than using [sudo](/wiki/sudo) for every command:

    $ sudo -s

For posterity:

    # uptime
     06:29:49  up 233 days, 21:19,  2 users,  load average: 0.14, 0.16, 0.11

Get a list of updates:

    # up2date --list

    Fetching Obsoletes list for channel: rhel-i386-es-3...
    ########################################

    Fetching Obsoletes list for channel: rhel-i386-es-3-extras...
    ########################################

    Fetching rpm headers...
    ########################################

    Name                                    Version        Rel     
    ----------------------------------------------------------

    The following Packages were marked to be skipped by your configuration:

    Name                                    Version        Rel  Reason
    -------------------------------------------------------------------------------
    kernel                                  2.4.21         50.ELPkg name/pattern
    kernel-doc                              2.4.21         50.ELPkg name/pattern
    kernel-source                           2.4.21         50.ELPkg name/pattern
    ntp                                     4.1.2          5.el3Config modified

For comparison with after the upgrade:

    # uname -a
    Linux s69819.wincent.com 2.4.21-47.0.1.EL #1 Fri Oct 13 17:55:16 EDT 2006 i686 athlon i386 GNU/Linux
    # cat /etc/redhat-release
    Red Hat Enterprise Linux ES release 3 (Taroon Update 9)
    # rpm -qa | grep kernel
    kernel-doc-2.4.21-47.0.1.EL
    kernel-utils-2.4-8.37.15
    kernel-2.4.21-47.0.1.EL
    kernel-2.4.21-47.EL
    kernel-source-2.4.21-47.0.1.EL

# The actual upgrade

Perform the actual upgrade:

    # up2date -uf kernel kernel-doc kernel-source

    Fetching Obsoletes list for channel: rhel-i386-es-3...

    Fetching Obsoletes list for channel: rhel-i386-es-3-extras...

    Name                                    Version        Rel     
    ----------------------------------------------------------
    kernel                                  2.4.21         50.EL             athlon
    kernel-doc                              2.4.21         50.EL             i386  
    kernel-source                           2.4.21         50.EL             i386  


    Testing package set / solving RPM inter-dependencies...
    ########################################
    kernel-2.4.21-50.EL.athlon. ########################## Done.                   
    kernel-doc-2.4.21-50.EL.i38 ########################## Done.                   
    kernel-source-2.4.21-50.EL. ############################# Done.                   
    Preparing              ########################################### [100%]

    Installing...
       1:kernel-source          ########################################### [100%]
       2:kernel                 ########################################### [100%]
       3:kernel-doc             ########################################### [100%]

Check that the kernel files where actually installed into `/boot/`:

    # ll /boot
    total 14826
    drwxr-xr-x    5 root     root         1024 Jun 12 07:06 ./
    drwxr-xr-x   20 root     root         4096 Oct 21  2006 ../
    -rw-r--r--    1 root     root        48843 Oct 13  2006 config-2.4.21-47.0.1.EL
    -rw-r--r--    1 root     root        48843 Jul  5  2006 config-2.4.21-47.EL
    -rw-r--r--    1 root     root        48843 May  8 16:24 config-2.4.21-50.EL
    drwxr-xr-x    2 root     root         1024 Jun 12 07:07 grub/
    -rw-r--r--    1 root     root       260548 Oct 21  2006 initrd-2.4.21-47.0.1.EL.img
    -rw-r--r--    1 root     root       259145 Jul 20  2006 initrd-2.4.21-47.EL.img
    -rw-r--r--    1 root     root       260630 Jun 12 07:06 initrd-2.4.21-50.EL.img
    -rw-r--r--    1 root     root          549 Aug  5  2005 kernel.h
    drwx------    2 root     root        12288 Aug  5  2005 lost+found/
    -rw-r--r--    1 root     root        23108 Sep 11  2003 message
    -rw-r--r--    1 root     root        21282 Sep 11  2003 message.ja
    drwxr-xr-x    2 root     root         1024 Mar 24  2006 .rackspace/
    lrwxrwxrwx    1 root     root           27 Oct 21  2006 System.map -> System.map-2.4.21-47.0.1.EL
    -rw-r--r--    1 root     root       578134 Oct 13  2006 System.map-2.4.21-47.0.1.EL
    -rw-r--r--    1 root     root       578134 Jul  5  2006 System.map-2.4.21-47.EL
    -rw-r--r--    1 root     root       578301 May  8 16:24 System.map-2.4.21-50.EL
    -rwxr-xr-x    1 root     root      2882324 Oct 13  2006 vmlinux-2.4.21-47.0.1.EL*
    -rwxr-xr-x    1 root     root      2882320 Jul  5  2006 vmlinux-2.4.21-47.EL*
    -rwxr-xr-x    1 root     root      2886416 May  8 16:25 vmlinux-2.4.21-50.EL*
    -rw-r--r--    1 root     root      1240980 Oct 13  2006 vmlinuz-2.4.21-47.0.1.EL
    -rw-r--r--    1 root     root      1240892 Jul  5  2006 vmlinuz-2.4.21-47.EL
    -rw-r--r--    1 root     root      1240116 May  8 16:24 vmlinuz-2.4.21-50.EL

Check that the new kernel is in position 0 (at the top) of the list in `/boot/grub/grub.conf`:

    # cat /boot/grub/grub.conf
    # grub.conf generated by anaconda
    #
    # Note that you do not have to rerun grub after making changes to this file
    # NOTICE:  You have a /boot partition.  This means that
    #          all kernel and initrd paths are relative to /boot/, eg.
    #          root (hd0,0)
    #          kernel /vmlinuz-version ro root=/dev/hda3
    #          initrd /initrd-version.img
    [/tags/boot #boot]=/dev/hda
    default=0
    timeout=10
    splashimage=(hd0,0)/grub/splash.xpm.gz
    title Red Hat Enterprise Linux ES (2.4.21-50.EL)
            root (hd0,0)
            kernel /vmlinuz-2.4.21-50.EL ro root=/dev/hda3
            initrd /initrd-2.4.21-50.EL.img
    title Red Hat Enterprise Linux ES (2.4.21-47.0.1.EL)
            root (hd0,0)
            kernel /vmlinuz-2.4.21-47.0.1.EL ro root=/dev/hda3
            initrd /initrd-2.4.21-47.0.1.EL.img
    title Red Hat Enterprise Linux ES (2.4.21-47.EL)
            root (hd0,0)
            kernel /vmlinuz-2.4.21-47.EL ro root=/dev/hda3
            initrd /initrd-2.4.21-47.EL.img

Cross your fingers, hold your breath, and reboot the server which is on the other side of the Atlantic Ocean:

    # sudo reboot

    Broadcast message from root (pts/1) (Tue Jun 12 07:10:01 2007):

    The system is going down for reboot NOW!

    Broadcast message from root (pts/1) (Tue Jun 12 07:10:01 2007):

    The system is going down for reboot NOW!

# Post-install checks

73 seconds later, after logging in again:

    $ uname -a
    Linux s69819.wincent.com 2.4.21-50.EL #1 Tue May 8 17:18:10 EDT 2007 i686 athlon i386 GNU/Linux
    $ cat /etc/redhat-release
    Red Hat Enterprise Linux ES release 3 (Taroon Update 9)

Check that all services are still running:

    $ sudo service --status-all
    $ sudo chkconfig --list

And check that `up2date` is satisfied:

    $ sudo up2date --list

    Fetching Obsoletes list for channel: rhel-i386-es-3...

    Fetching Obsoletes list for channel: rhel-i386-es-3-extras...

    Fetching rpm headers...
    ########################################

    Name                                    Version        Rel     
    ----------------------------------------------------------

    The following Packages were marked to be skipped by your configuration:

    Name                                    Version        Rel  Reason
    -------------------------------------------------------------------------------
    ntp                                     4.1.2          5.el3Config modified

Optional clean-up; you could install the previous version of the kernel but I like to keep it around. On the *next* upgrade I'll get rid of the oldest versions:

    $ rpm -qa | grep kernel
    kernel-2.4.21-50.EL
    kernel-utils-2.4-8.37.15
    kernel-2.4.21-47.0.1.EL
    kernel-source-2.4.21-50.EL
    kernel-doc-2.4.21-50.EL
    kernel-2.4.21-47.EL

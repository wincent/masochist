---
tags: red.hat wiki
---

Here are some notes that I made while performing the kernel upgrade on my [Red Hat](/wiki/Red_Hat) box from version 2.4.21-47.EL to 2.4.21-47.0.1.EL. These are based on the general upgrade procedure described in the article, [Red Hat Enterprise Linux kernel update procedure](/wiki/Red_Hat_Enterprise_Linux_kernel_update_procedure).

    $ sudo -s
    # uptime
     08:46:27  up 92 days, 21:28,  1 user,  load average: 0.02, 0.15, 0.08
    # up2date --list

    Fetching Obsoletes list for channel: rhel-i386-es-3...

    Fetching Obsoletes list for channel: rhel-i386-es-3-extras...

    Fetching rpm headers...

    Name                                    Version        Rel     
    ----------------------------------------------------------

    The following Packages were marked to be skipped by your configuration:

    Name                                    Version        Rel  Reason
    -------------------------------------------------------------------------------
    kernel                                  2.4.21         47.0.1.ELPkg name/pattern
    kernel-doc                              2.4.21         47.0.1.ELPkg name/pattern
    kernel-source                           2.4.21         47.0.1.ELPkg name/pattern

There were no non-kernel RPMs to update, so I skipped the `up2date --nox -u` step.

    # uname -a
    Linux s69819.wincent.com 2.4.21-47.EL #1 Wed Jul 5 20:39:00 EDT 2006 i686 athlon i386 GNU/Linux
    # cat /etc/redhat-release
    Red Hat Enterprise Linux ES release 3 (Taroon Update 8)
    # ls -laF /boot
    # up2date --nox -u
    # rpm -qa | grep -i kernel
    kernel-2.4.21-32.0.1.EL
    kernel-2.4.21-40.EL
    kernel-source-2.4.21-47.EL
    kernel-2.4.21-37.0.1.EL
    kernel-utils-2.4-8.37.15
    kernel-doc-2.4.21-47.EL
    kernel-2.4.21-47.EL
    # up2date -uf kernel kernel-doc kernel-source

    Fetching Obsoletes list for channel: rhel-i386-es-3...

    Fetching Obsoletes list for channel: rhel-i386-es-3-extras...

    Name                                    Version        Rel     
    ----------------------------------------------------------
    kernel                                  2.4.21         47.0.1.EL         athlon
    kernel-doc                              2.4.21         47.0.1.EL         i386  
    kernel-source                           2.4.21         47.0.1.EL         i386  


    Testing package set / solving RPM inter-dependencies...
    ########################################
    kernel-2.4.21-47.0.1.EL.ath ########################## Done.                   
    kernel-doc-2.4.21-47.0.1.EL ########################## Done.                   
    kernel-source-2.4.21-47.0.1 ########################## Done.                   
    Preparing              ########################################### [100%]

    Installing...
       1:kernel-source          ########################################### [100%]
       2:kernel                 ########################################### [100%]
       3:kernel-doc             ########################################### [100%]
    # rpm -qa | grep -i kernel
    kernel-2.4.21-32.0.1.EL
    kernel-2.4.21-40.EL
    kernel-doc-2.4.21-47.0.1.EL
    kernel-2.4.21-37.0.1.EL
    kernel-utils-2.4-8.37.15
    kernel-2.4.21-47.0.1.EL
    kernel-2.4.21-47.EL
    kernel-source-2.4.21-47.0.1.EL
    # ls -laF /boot
    # cat /boot/grub/grub.conf

I then edited the `grub.conf` file to delete the last three groups (pertaining to old versions of the kernel), leaving behind only the newly installed version and the previous version. I then deleted the files corresponding to the old versions that were deleted from `grub.conf`:

    # rm -i /boot/*-32.0.1.EL*
    # rm -i /boot/*-37.0.1.EL*
    # rm -i /boot/*-40.EL*
    # reboot

## Note on removing old versions of the kernel

I later realized that additional modules are installed with each kernel in `/lib/modules/` and that the `rpm` tool could have been used to remove all of these files in one go:

    $ rpm -e kernel-2.4.21-40.EL
    $ rpm -e kernel-2.4.21-37.0.1.EL
    $ rpm -e kernel-2.4.21-32.0.1.EL

# Post install checks

    $ uptime
     09:07:56  up 1 min,  1 user,  load average: 0.77, 0.25, 0.09
    $ uname -a
    Linux s69819.wincent.com 2.4.21-47.0.1.EL #1 Fri Oct 13 17:55:16 EDT 2006 i686 athlon i386 GNU/Linux
    $ cat /etc/redhat-release
    Red Hat Enterprise Linux ES release 3 (Taroon Update 8)

Check that critical services are running ([Bansshee](/wiki/Bansshee), FTP, HTTP, MySQL, Mailman, `clamd`, IMAP, `ipop3`, [svn](/wiki/svn), [sendmail](/wiki/sendmail), `xinetd`, [webmin](/wiki/webmin) etc):

    $ sudo service --status-all
    $ sudo chkconfig --list

Confirm that up2date is now satisfied:

    $ sudo up2date --list

# Summary

A successful update. Service down time was approximately 71 seconds (as measured with [ping](/wiki/ping)).

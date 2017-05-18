---
tags: red.hat updates wiki
cache_breaker: 1
---

First we check what updated kernel packages are available:

    $ sudo yum --disableexcludes=all check-update 'kernel*'
    Password:
    Loading "rhnplugin" plugin
    rhel-i386-server-5        100% |=========================| 1.4 kB    00:00     

    kernel.i686                              2.6.18-92.1.13.el5     rhel-i386-server
    kernel-headers.i386                      2.6.18-92.1.13.el5     rhel-i386-server

Then perform the actual update:

    $ sudo yum --disableexcludes=all update 'kernel*'
    Loading "rhnplugin" plugin
    rhel-i386-server-5        100% |=========================| 1.4 kB    00:00     
    Setting up Update Process
    Resolving Dependencies
    --> Running transaction check
    ---> Package kernel-headers.i386 0:2.6.18-92.1.13.el5 set to be updated
    ---> Package kernel.i686 0:2.6.18-92.1.13.el5 set to be installed
    --> Finished Dependency Resolution

    Dependencies Resolved

    =============================================================================
     Package                 Arch       Version          Repository        Size 
    =============================================================================
    Installing:
     kernel                  i686       2.6.18-92.1.13.el5  rhel-i386-server-5   14 M
    Updating:
     kernel-headers          i386       2.6.18-92.1.13.el5  rhel-i386-server-5  848 k

    Transaction Summary
    =============================================================================
    Install      1 Package(s)         
    Update       1 Package(s)         
    Remove       0 Package(s)         

    Total download size: 15 M
    Is this ok [y/N]: y
    Downloading Packages:
    (1/2): kernel-2.6.18-92.1 100% |=========================|  14 MB    00:24     
    (2/2): kernel-headers-2.6 100% |=========================| 848 kB    00:01     
    Running rpm_check_debug
    Running Transaction Test
    Finished Transaction Test
    Transaction Test Succeeded
    Running Transaction
      Installing: kernel                       ######################### [1/3] 
      Updating  : kernel-headers               ######################### [2/3] 
      Cleanup   : kernel-headers               ######################### [3/3] 

    Installed: kernel.i686 0:2.6.18-92.1.13.el5
    Updated: kernel-headers.i386 0:2.6.18-92.1.13.el5
    Complete!

Then cross our fingers and reboot:

    $ sudo reboot

    Broadcast message from root (pts/0) (Sun Sep 28 12:18:23 2008):

    The system is going down for reboot NOW!

As noted in my [weblog post](/blog/server-maintenance), the system took about half an hour to come back online (instead of the expected 60 seconds) because of a forced `fsck`; the answer to why this kind of check takes place came from [INetU](/wiki/INetU) support:

> Red Hat like many Linux distributions will automatically force a filesystem check if 60 days or more have passed between file system checks it will automatically run at the next to verify drive integrity before mounting them for use.

This was something new to me having come to RHEL 5.1 from RHEL 3, which didn't perform such forced checks. So from here on will have to budget for additional downtime if more than 60 days have passed since the last reboot (or alternatively schedule periodic reboots every 55 days or so).

---
tags: red.hat updates
---

Check what's available:

    $ sudo yum --disableexcludes=all check-update 'kernel*'
    Password:
    Loading "rhnplugin" plugin
    rhel-i386-server-5        100% |=========================| 1.4 kB    00:00     

    kernel.i686                              2.6.18-92.1.17.el5     rhel-i386-server
    kernel-headers.i386                      2.6.18-92.1.17.el5     rhel-i386-server

Install:

    $ sudo yum --disableexcludes=all update 'kernel*'
    Loading "rhnplugin" plugin
    rhel-i386-server-5        100% |=========================| 1.4 kB    00:00     
    Setting up Update Process
    Resolving Dependencies
    --> Running transaction check
    ---> Package kernel-headers.i386 0:2.6.18-92.1.17.el5 set to be updated
    ---> Package kernel.i686 0:2.6.18-92.1.17.el5 set to be installed
    --> Finished Dependency Resolution
    --> Running transaction check
    ---> Package kernel-headers.i386 0:2.6.18-92.1.17.el5 set to be updated
    ---> Package kernel.i686 0:2.6.18-8.el5 set to be erased
    ---> Package kernel.i686 0:2.6.18-92.1.17.el5 set to be installed
    --> Finished Dependency Resolution

    Dependencies Resolved

    =============================================================================
     Package                 Arch       Version          Repository        Size 
    =============================================================================
    Installing:
     kernel                  i686       2.6.18-92.1.17.el5  rhel-i386-server-5   14 M
    Updating:
     kernel-headers          i386       2.6.18-92.1.17.el5  rhel-i386-server-5  850 k
    Removing:
     kernel                  i686       2.6.18-8.el5     installed          34 M

    Transaction Summary
    =============================================================================
    Install      1 Package(s)         
    Update       1 Package(s)         
    Remove       1 Package(s)         

    Total download size: 15 M
    Is this ok [y/N]: y
    Downloading Packages:
    (1/2): kernel-2.6.18-92.1 100% |=========================|  14 MB    00:22     
    (2/2): kernel-headers-2.6 100% |=========================| 850 kB    00:01     
    Running rpm_check_debug
    Running Transaction Test
    Finished Transaction Test
    Transaction Test Succeeded
    Running Transaction
      Installing: kernel                       ######################### [1/4] 
      Updating  : kernel-headers               ######################### [2/4] 
      Cleanup   : kernel-headers               ######################### [3/4] 
      Cleanup   : kernel                       ######################### [4/4] 

    Removed: kernel.i686 0:2.6.18-8.el5
    Installed: kernel.i686 0:2.6.18-92.1.17.el5
    Updated: kernel-headers.i386 0:2.6.18-92.1.17.el5
    Complete!

Cross fingers and reboot:

    $ sudo reboot

    Broadcast message from root (pts/0) (Wed Nov  5 05:27:06 2008):

    The system is going down for reboot NOW!

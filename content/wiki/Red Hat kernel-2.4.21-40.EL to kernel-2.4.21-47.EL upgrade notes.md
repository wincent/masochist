---
tags: red.hat wiki
---

Here are notes I made during an extensive update (including a kernel update) to my [Red Hat](/wiki/Red_Hat) system. The upgrade was from [Red Hat](/wiki/Red_Hat) Enterprise Linux ES release 3 (Taroon Update 7) to Taroon Update 8. The kernel was bumped from 2.4.21-40.EL to 2.4.21-47.EL.

# Perform the update

    $ sudo up2date --list
    Password:

    Fetching Obsoletes list for channel: rhel-i386-es-3...
    ########################################

    Fetching Obsoletes list for channel: rhel-i386-es-3-extras...
    ########################################

    Fetching rpm headers...
    ########################################

    Name                                    Version        Rel     
    ----------------------------------------------------------
    XFree86                                 4.3.0          110.EL            i386  
    XFree86-100dpi-fonts                    4.3.0          110.EL            i386  
    XFree86-75dpi-fonts                     4.3.0          110.EL            i386  
    XFree86-Mesa-libGL                      4.3.0          110.EL            i386  
    XFree86-Mesa-libGLU                     4.3.0          110.EL            i386  
    XFree86-Xnest                           4.3.0          110.EL            i386  
    XFree86-Xvfb                            4.3.0          110.EL            i386  
    XFree86-base-fonts                      4.3.0          110.EL            i386  
    XFree86-font-utils                      4.3.0          110.EL            i386  
    XFree86-libs                            4.3.0          110.EL            i386  
    XFree86-libs-data                       4.3.0          110.EL            i386  
    XFree86-tools                           4.3.0          110.EL            i386  
    XFree86-twm                             4.3.0          110.EL            i386  
    XFree86-xauth                           4.3.0          110.EL            i386  
    XFree86-xdm                             4.3.0          110.EL            i386  
    XFree86-xfs                             4.3.0          110.EL            i386  
    aspell                                  0.33.7.1       25.3.rhel3        i386  
    aspell-config                           0.33.7.1       25.3.rhel3        i386  
    aspell-devel                            0.33.7.1       25.3.rhel3        i386  
    authconfig                              4.3.7          4                 i386  
    autofs                                  4.1.3          186               i386  
    bash                                    2.05b          41.7              i386  
    bind                                    9.2.4          14_EL3            i386  
    bind-libs                               9.2.4          14_EL3            i386  
    bind-utils                              9.2.4          14_EL3            i386  
    chkconfig                               1.3.13.4       0.3               i386  
    comps                                   3ES            0.20060712        i386  
    coreutils                               4.5.3          28.1              i386  
    cpp                                     3.2.3          56                i386  
    crash                                   4.0            2.29              i386  
    curl                                    7.10.6         8.rhel3           i386  
    curl-devel                              7.10.6         8.rhel3           i386  
    e2fsprogs                               1.32           15.3              i386  
    e2fsprogs-devel                         1.32           15.3              i386  
    elfutils                                0.94.1         2                 i386  
    elfutils-devel                          0.94.1         2                 i386  
    elfutils-libelf                         0.94.1         2                 i386  
    elfutils-libelf-devel                   0.94.1         2                 i386  
    expect                                  5.38.0         92.7              i386  
    file                                    3.39           9.EL3.4           i386  
    ftp                                     0.17           17.2              i386  
    gcc                                     3.2.3          56                i386  
    gcc-c++                                 3.2.3          56                i386  
    gcc-java                                3.2.3          56                i386  
    gcc-objc                                3.2.3          56                i386  
    gdb                                     6.3.0.0        1.132.EL3         i386  
    glibc                                   2.3.2          95.44             i686  
    glibc-common                            2.3.2          95.44             i386  
    glibc-devel                             2.3.2          95.44             i386  
    glibc-headers                           2.3.2          95.44             i386  
    glibc-profile                           2.3.2          95.44             i386  
    glibc-utils                             2.3.2          95.44             i386  
    grep                                    2.5.1          24.6              i386  
    groff                                   1.18.1         28.EL3.3          i386  
    httpd                                   2.0.46         57.ent            i386  
    httpd-devel                             2.0.46         57.ent            i386  
    hwdata                                  0.101.27       1                 noarch
    initscripts                             7.31.31.EL     1                 i386  
    ipsec-tools                             0.2.5          0.7.rhel3.4       i386  
    iputils                                 20020927       11.30.5           i386  
    kbd                                     1.08           10.6              i386  
    krb5-devel                              1.2.7          56                i386  
    krb5-libs                               1.2.7          56                i386  
    krb5-workstation                        1.2.7          56                i386  
    kudzu                                   1.1.22.15      1                 i386  
    kudzu-devel                             1.1.22.15      1                 i386  
    lftp                                    2.6.3          6                 i386  
    libaio                                  0.3.96         7                 i386  
    libaio-devel                            0.3.96         7                 i386  
    libgcc                                  3.2.3          56                i386  
    libgcj                                  3.2.3          56                i386  
    libgcj-devel                            3.2.3          56                i386  
    libobjc                                 3.2.3          56                i386  
    libstdc++                               3.2.3          56                i386  
    libstdc++-devel                         3.2.3          56                i386  
    lockdev                                 1.0.1          5.1               i386  
    lockdev-devel                           1.0.1          5.1               i386  
    logrotate                               3.6.9          2.RHEL3           i386  
    logwatch                                4.3.2          3.rhel3           noarch
    losetup                                 2.11y          31.18             i386  
    ltrace                                  0.4            1.7.EL3           i386  
    man-pages                               1.60           5.rhel3           noarch
    mdadm                                   1.5.0          9.1               i386  
    mod_ssl                                 2.0.46         57.ent            i386  
    mount                                   2.11y          31.18             i386  
    net-snmp                                5.0.9          2.30E.20          i386  
    net-snmp-devel                          5.0.9          2.30E.20          i386  
    net-snmp-libs                           5.0.9          2.30E.20          i386  
    netdump                                 0.7.16         1.1               i386  
    nfs-utils                               1.0.6          44EL              i386  
    nptl-devel                              2.3.2          95.44             i686  
    nscd                                    2.3.2          95.44             i386  
    ntsysv                                  1.3.13.4       0.3               i386  
    openssh                                 3.6.1p2        33.30.9           i386  
    openssh-clients                         3.6.1p2        33.30.9           i386  
    openssh-server                          3.6.1p2        33.30.9           i386  
    pam                                     0.75           69                i386  
    pam-devel                               0.75           69                i386  
    pciutils                                2.1.10         7.EL3.1           i386  
    pciutils-devel                          2.1.10         7.EL3.1           i386  
    perl                                    5.8.0          94.EL3            i386  
    perl-CGI                                2.89           94.EL3            i386  
    perl-CPAN                               1.61           94.EL3            i386  
    perl-DBD-MySQL                          2.1021         4.EL3             i386  
    perl-DB_File                            1.806          94.EL3            i386  
    popt                                    1.8.2          30_nonptl         i386  
    procps                                  2.0.17         13.10             i386  
    psmisc                                  21.3           2.1               i386  
    python                                  2.2.3          6.3               i386  
    python-devel                            2.2.3          6.3               i386  
    quota                                   3.10           8                 i386  
    redhat-config-users                     1.1.18         8                 noarch
    redhat-release                          3ES            13.8.3            i386  
    redhat-rpm-config                       8.0.28         4                 noarch
    rhnlib                                  1.8.7          3                 noarch
    rpm                                     4.2.3          30_nonptl         i386  
    rpm-build                               4.2.3          30_nonptl         i386  
    rpm-devel                               4.2.3          30_nonptl         i386  
    rpm-libs                                4.2.3          30_nonptl         i386  
    rpm-python                              4.2.3          30_nonptl         i386  
    rpmdb-redhat                            3              0.20060712        i386  
    sed                                     4.0.7          8.EL3             i386  
    strace                                  4.5.14         0.EL3.1           i386  
    sysreport                               1.3.7.2        15                noarch
    tcl                                     8.3.5          92.7              i386  
    tcsh                                    6.12           13.EL3            i386  
    tk                                      8.3.5          92.7              i386  
    up2date                                 4.4.69         20                i386  
    util-linux                              2.11y          31.18             i386  
    vixie-cron                              4.1            11.EL3            i386  
    vsftpd                                  1.2.1          3E.6              i386  
    xinitrc                                 3.32.2         1                 noarch
    xterm                                   179            6.EL3             i386  

    The following Packages were marked to be skipped by your configuration:

    Name                                    Version        Rel  Reason
    -------------------------------------------------------------------------------
    kernel                                  2.4.21         47.ELPkg name/pattern
    kernel-doc                              2.4.21         47.ELPkg name/pattern
    kernel-source                           2.4.21         47.ELPkg name/pattern
    kernel-utils                            2.4            8.37.15Pkg name/pattern

    $ uname -a
    Linux s69819.wincent.com 2.4.21-40.EL #1 Thu Feb 2 22:22:40 EST 2006 i686 athlon i386 GNU/Linux
    $ cat /etc/redhat-release 
    Red Hat Enterprise Linux ES release 3 (Taroon Update 7)
    $ sudo up2date --nox -u

    Fetching Obsoletes list for channel: rhel-i386-es-3...

    Fetching Obsoletes list for channel: rhel-i386-es-3-extras...

    Fetching rpm headers...
    ########################################

    Fetching Obsoletes list for channel: rhel-i386-es-3...

    Fetching Obsoletes list for channel: rhel-i386-es-3-extras...

    Name                                    Version        Rel     
    ----------------------------------------------------------
    up2date                                 4.4.69         20                i386  


    Testing package set / solving RPM inter-dependencies...
    ########################################
    up2date-4.4.69-20.i386.rpm: ########################## Done.                   
    rhnlib-1.8.7-3.noarch.rpm:  ########################## Done.                   
    New Up2date available
    Preparing              ########################################### [100%]

    Installing...
       1:rhnlib                 ########################################### [100%]
       2:up2date                ########################################### [100%]
    New Up2date available
    The following packages were added to your selection to satisfy dependencies:

    Name                                    Version        Release
    --------------------------------------------------------------
    rhnlib                                  1.8.7          3                   

    Restarting up2date
    Restarting up2date
    $ 
    Fetching Obsoletes list for channel: rhel-i386-es-3...

    Fetching Obsoletes list for channel: rhel-i386-es-3-extras...

    Fetching rpm headers...
    ########################################

    Name                                    Version        Rel     
    ----------------------------------------------------------
    XFree86                                 4.3.0          110.EL            i386  
    XFree86-100dpi-fonts                    4.3.0          110.EL            i386  
    XFree86-75dpi-fonts                     4.3.0          110.EL            i386  
    XFree86-Mesa-libGL                      4.3.0          110.EL            i386  
    XFree86-Mesa-libGLU                     4.3.0          110.EL            i386  
    XFree86-Xnest                           4.3.0          110.EL            i386  
    XFree86-Xvfb                            4.3.0          110.EL            i386  
    XFree86-base-fonts                      4.3.0          110.EL            i386  
    XFree86-font-utils                      4.3.0          110.EL            i386  
    XFree86-libs                            4.3.0          110.EL            i386  
    XFree86-libs-data                       4.3.0          110.EL            i386  
    XFree86-tools                           4.3.0          110.EL            i386  
    XFree86-twm                             4.3.0          110.EL            i386  
    XFree86-xauth                           4.3.0          110.EL            i386  
    XFree86-xdm                             4.3.0          110.EL            i386  
    XFree86-xfs                             4.3.0          110.EL            i386  
    aspell                                  0.33.7.1       25.3.rhel3        i386  
    aspell-config                           0.33.7.1       25.3.rhel3        i386  
    aspell-devel                            0.33.7.1       25.3.rhel3        i386  
    authconfig                              4.3.7          4                 i386  
    autofs                                  4.1.3          186               i386  
    bash                                    2.05b          41.7              i386  
    bind                                    9.2.4          14_EL3            i386  
    bind-libs                               9.2.4          14_EL3            i386  
    bind-utils                              9.2.4          14_EL3            i386  
    chkconfig                               1.3.13.4       0.3               i386  
    comps                                   3ES            0.20060712        i386  
    coreutils                               4.5.3          28.1              i386  
    cpp                                     3.2.3          56                i386  
    crash                                   4.0            2.29              i386  
    curl                                    7.10.6         8.rhel3           i386  
    curl-devel                              7.10.6         8.rhel3           i386  
    e2fsprogs                               1.32           15.3              i386  
    e2fsprogs-devel                         1.32           15.3              i386  
    elfutils                                0.94.1         2                 i386  
    elfutils-devel                          0.94.1         2                 i386  
    elfutils-libelf                         0.94.1         2                 i386  
    elfutils-libelf-devel                   0.94.1         2                 i386  
    expect                                  5.38.0         92.7              i386  
    file                                    3.39           9.EL3.4           i386  
    ftp                                     0.17           17.2              i386  
    gcc                                     3.2.3          56                i386  
    gcc-c++                                 3.2.3          56                i386  
    gcc-java                                3.2.3          56                i386  
    gcc-objc                                3.2.3          56                i386  
    gdb                                     6.3.0.0        1.132.EL3         i386  
    glibc                                   2.3.2          95.44             i686  
    glibc-common                            2.3.2          95.44             i386  
    glibc-devel                             2.3.2          95.44             i386  
    glibc-headers                           2.3.2          95.44             i386  
    glibc-profile                           2.3.2          95.44             i386  
    glibc-utils                             2.3.2          95.44             i386  
    grep                                    2.5.1          24.6              i386  
    groff                                   1.18.1         28.EL3.3          i386  
    httpd                                   2.0.46         57.ent            i386  
    httpd-devel                             2.0.46         57.ent            i386  
    hwdata                                  0.101.27       1                 noarch
    initscripts                             7.31.31.EL     1                 i386  
    ipsec-tools                             0.2.5          0.7.rhel3.4       i386  
    iputils                                 20020927       11.30.5           i386  
    kbd                                     1.08           10.6              i386  
    krb5-devel                              1.2.7          56                i386  
    krb5-libs                               1.2.7          56                i386  
    krb5-workstation                        1.2.7          56                i386  
    kudzu                                   1.1.22.15      1                 i386  
    kudzu-devel                             1.1.22.15      1                 i386  
    lftp                                    2.6.3          6                 i386  
    libaio                                  0.3.96         7                 i386  
    libaio-devel                            0.3.96         7                 i386  
    libgcc                                  3.2.3          56                i386  
    libgcj                                  3.2.3          56                i386  
    libgcj-devel                            3.2.3          56                i386  
    libobjc                                 3.2.3          56                i386  
    libstdc++                               3.2.3          56                i386  
    libstdc++-devel                         3.2.3          56                i386  
    lockdev                                 1.0.1          5.1               i386  
    lockdev-devel                           1.0.1          5.1               i386  
    logrotate                               3.6.9          2.RHEL3           i386  
    logwatch                                4.3.2          3.rhel3           noarch
    losetup                                 2.11y          31.18             i386  
    ltrace                                  0.4            1.7.EL3           i386  
    man-pages                               1.60           5.rhel3           noarch
    mdadm                                   1.5.0          9.1               i386  
    mod_ssl                                 2.0.46         57.ent            i386  
    mount                                   2.11y          31.18             i386  
    net-snmp                                5.0.9          2.30E.20          i386  
    net-snmp-devel                          5.0.9          2.30E.20          i386  
    net-snmp-libs                           5.0.9          2.30E.20          i386  
    netdump                                 0.7.16         1.1               i386  
    nfs-utils                               1.0.6          44EL              i386  
    nptl-devel                              2.3.2          95.44             i686  
    nscd                                    2.3.2          95.44             i386  
    ntsysv                                  1.3.13.4       0.3               i386  
    openssh                                 3.6.1p2        33.30.9           i386  
    openssh-clients                         3.6.1p2        33.30.9           i386  
    openssh-server                          3.6.1p2        33.30.9           i386  
    pam                                     0.75           69                i386  
    pam-devel                               0.75           69                i386  
    pciutils                                2.1.10         7.EL3.1           i386  
    pciutils-devel                          2.1.10         7.EL3.1           i386  
    perl                                    5.8.0          94.EL3            i386  
    perl-CGI                                2.89           94.EL3            i386  
    perl-CPAN                               1.61           94.EL3            i386  
    perl-DBD-MySQL                          2.1021         4.EL3             i386  
    perl-DB_File                            1.806          94.EL3            i386  
    popt                                    1.8.2          30_nonptl         i386  
    procps                                  2.0.17         13.10             i386  
    psmisc                                  21.3           2.1               i386  
    python                                  2.2.3          6.3               i386  
    python-devel                            2.2.3          6.3               i386  
    quota                                   3.10           8                 i386  
    redhat-config-users                     1.1.18         8                 noarch
    redhat-release                          3ES            13.8.3            i386  
    redhat-rpm-config                       8.0.28         4                 noarch
    rpm                                     4.2.3          30_nonptl         i386  
    rpm-build                               4.2.3          30_nonptl         i386  
    rpm-devel                               4.2.3          30_nonptl         i386  
    rpm-libs                                4.2.3          30_nonptl         i386  
    rpm-python                              4.2.3          30_nonptl         i386  
    rpmdb-redhat                            3              0.20060712        i386  
    sed                                     4.0.7          8.EL3             i386  
    strace                                  4.5.14         0.EL3.1           i386  
    sysreport                               1.3.7.2        15                noarch
    tcl                                     8.3.5          92.7              i386  
    tcsh                                    6.12           13.EL3            i386  
    tk                                      8.3.5          92.7              i386  
    util-linux                              2.11y          31.18             i386  
    vixie-cron                              4.1            11.EL3            i386  
    vsftpd                                  1.2.1          3E.6              i386  
    xinitrc                                 3.32.2         1                 noarch
    xterm                                   179            6.EL3             i386  


    Testing package set / solving RPM inter-dependencies...
    ########################################
    XFree86-4.3.0-110.EL.i386.r ########################## Done.                   
    XFree86-100dpi-fonts-4.3.0- ########################## Done.                   
    XFree86-75dpi-fonts-4.3.0-1 ########################## Done.                   
    XFree86-Mesa-libGL-4.3.0-11 ########################## Done.                   
    XFree86-Mesa-libGLU-4.3.0-1 ########################## Done.                   
    XFree86-Xnest-4.3.0-110.EL. ########################## Done.                   
    XFree86-Xvfb-4.3.0-110.EL.i ########################## Done.                   
    XFree86-base-fonts-4.3.0-11 ########################## Done.                   
    XFree86-font-utils-4.3.0-11 ########################## Done.                   
    XFree86-libs-4.3.0-110.EL.i ########################## Done.                   
    XFree86-libs-data-4.3.0-110 ########################## Done.                   
    XFree86-tools-4.3.0-110.EL. ########################## Done.                   
    XFree86-twm-4.3.0-110.EL.i3 ########################## Done.                   
    XFree86-xauth-4.3.0-110.EL. ########################## Done.                   
    XFree86-xdm-4.3.0-110.EL.i3 ########################## Done.                   
    XFree86-xfs-4.3.0-110.EL.i3 ########################## Done.                   
    aspell-0.33.7.1-25.3.rhel3. ########################## Done.                   
    aspell-config-0.33.7.1-25.3 ########################## Done.                   
    aspell-devel-0.33.7.1-25.3. ########################## Done.                   
    authconfig-4.3.7-4.i386.rpm ########################## Done.                   
    autofs-4.1.3-186.i386.rpm:  ########################## Done.                   
    bash-2.05b-41.7.i386.rpm:   ########################## Done.                   
    bind-9.2.4-14_EL3.i386.rpm: ########################## Done.                   
    bind-libs-9.2.4-14_EL3.i386 ########################## Done.                   
    bind-utils-9.2.4-14_EL3.i38 ########################## Done.                   
    chkconfig-1.3.13.4-0.3.i386 ########################## Done.                   
    comps-3ES-0.20060712.i386.r ########################## Done.                   
    coreutils-4.5.3-28.1.i386.r ########################## Done.                   
    cpp-3.2.3-56.i386.rpm:      ########################## Done.                   
    crash-4.0-2.29.i386.rpm:    ########################## Done.                   
    curl-7.10.6-8.rhel3.i386.rp ########################## Done.                   
    curl-devel-7.10.6-8.rhel3.i ########################## Done.                   
    e2fsprogs-1.32-15.3.i386.rp ########################## Done.                   
    e2fsprogs-devel-1.32-15.3.i ########################## Done.                   
    elfutils-0.94.1-2.i386.rpm: ########################## Done.                   
    elfutils-devel-0.94.1-2.i38 ########################## Done.                   
    elfutils-libelf-0.94.1-2.i3 ########################## Done.                   
    elfutils-libelf-devel-0.94. ########################## Done.                   
    expect-5.38.0-92.7.i386.rpm ########################## Done.                   
    file-3.39-9.EL3.4.i386.rpm: ########################## Done.                   
    ftp-0.17-17.2.i386.rpm:     ########################## Done.                   
    gcc-3.2.3-56.i386.rpm:      ########################## Done.                   
    gcc-c++-3.2.3-56.i386.rpm:  ########################## Done.                   
    gcc-java-3.2.3-56.i386.rpm: ########################## Done.                   
    gcc-objc-3.2.3-56.i386.rpm: ########################## Done.                   
    gdb-6.3.0.0-1.132.EL3.i386. ########################## Done.                   
    glibc-2.3.2-95.44.i686.rpm: ########################## Done.                   
    glibc-common-2.3.2-95.44.i3 ########################## Done.                   
    glibc-devel-2.3.2-95.44.i38 ########################## Done.                   
    glibc-headers-2.3.2-95.44.i ########################## Done.                   
    glibc-profile-2.3.2-95.44.i ########################## Done.                   
    glibc-utils-2.3.2-95.44.i38 ########################## Done.                   
    grep-2.5.1-24.6.i386.rpm:   ########################## Done.                   
    groff-1.18.1-28.EL3.3.i386. ########################## Done.                   
    httpd-2.0.46-57.ent.i386.rp ########################## Done.                   
    httpd-devel-2.0.46-57.ent.i ########################## Done.                   
    hwdata-0.101.27-1.noarch.rp ########################## Done.                   
    initscripts-7.31.31.EL-1.i3 ########################## Done.                   
    ipsec-tools-0.2.5-0.7.rhel3 ########################## Done.                   
    iputils-20020927-11.30.5.i3 ########################## Done.                   
    kbd-1.08-10.6.i386.rpm:     ########################## Done.                   
    krb5-devel-1.2.7-56.i386.rp ########################## Done.                   
    krb5-libs-1.2.7-56.i386.rpm ########################## Done.                   
    krb5-workstation-1.2.7-56.i ########################## Done.                   
    kudzu-1.1.22.15-1.i386.rpm: ########################## Done.                   
    kudzu-devel-1.1.22.15-1.i38 ########################## Done.                   
    lftp-2.6.3-6.i386.rpm:      ########################## Done.                   
    libaio-0.3.96-7.i386.rpm:   ########################## Done.                   
    libaio-devel-0.3.96-7.i386. ########################## Done.                   
    libgcc-3.2.3-56.i386.rpm:   ########################## Done.                   
    libgcj-3.2.3-56.i386.rpm:   ########################## Done.                   
    libgcj-devel-3.2.3-56.i386. ########################## Done.                   
    libobjc-3.2.3-56.i386.rpm:  ########################## Done.                   
    libstdc++-3.2.3-56.i386.rpm ########################## Done.                   
    libstdc++-devel-3.2.3-56.i3 ########################## Done.                   
    lockdev-1.0.1-5.1.i386.rpm: ########################## Done.                   
    lockdev-devel-1.0.1-5.1.i38 ########################## Done.                   
    logrotate-3.6.9-2.RHEL3.i38 ########################## Done.                   
    logwatch-4.3.2-3.rhel3.noar ########################## Done.                   
    losetup-2.11y-31.18.i386.rp ########################## Done.                   
    ltrace-0.4-1.7.EL3.i386.rpm ########################## Done.                   
    man-pages-1.60-5.rhel3.noar ########################## Done.                   
    mdadm-1.5.0-9.1.i386.rpm:   ########################## Done.                   
    mod_ssl-2.0.46-57.ent.i386. ########################## Done.                   
    mount-2.11y-31.18.i386.rpm: ########################## Done.                   
    net-snmp-5.0.9-2.30E.20.i38 ########################## Done.                   
    net-snmp-devel-5.0.9-2.30E. ########################## Done.                   
    net-snmp-libs-5.0.9-2.30E.2 ########################## Done.                   
    netdump-0.7.16-1.1.i386.rpm ########################## Done.                   
    nfs-utils-1.0.6-44EL.i386.r ########################## Done.                   
    nptl-devel-2.3.2-95.44.i686 ########################## Done.                   
    nscd-2.3.2-95.44.i386.rpm:  ########################## Done.                   
    ntsysv-1.3.13.4-0.3.i386.rp ########################## Done.                   
    openssh-3.6.1p2-33.30.9.i38 ########################## Done.                   
    openssh-clients-3.6.1p2-33. ########################## Done.                   
    openssh-server-3.6.1p2-33.3 ########################## Done.                   
    pam-0.75-69.i386.rpm:       ########################## Done.                   
    pam-devel-0.75-69.i386.rpm: ########################## Done.                   
    pciutils-2.1.10-7.EL3.1.i38 ########################## Done.                   
    pciutils-devel-2.1.10-7.EL3 ########################## Done.                   
    perl-5.8.0-94.EL3.i386.rpm: ########################## Done.                   
    perl-CGI-2.89-94.EL3.i386.r ########################## Done.                   
    perl-CPAN-1.61-94.EL3.i386. ########################## Done.                   
    perl-DBD-MySQL-2.1021-4.EL3 ########################## Done.                   
    perl-DB_File-1.806-94.EL3.i ########################## Done.                   
    popt-1.8.2-30_nonptl.i386.r ########################## Done.                   
    procps-2.0.17-13.10.i386.rp ########################## Done.                   
    psmisc-21.3-2.1.i386.rpm:   ########################## Done.                   
    python-2.2.3-6.3.i386.rpm:  ########################## Done.                   
    python-devel-2.2.3-6.3.i386 ########################## Done.                   
    quota-3.10-8.i386.rpm:      ########################## Done.                   
    redhat-config-users-1.1.18- ########################## Done.                   
    redhat-release-3ES-13.8.3.i ########################## Done.                   
    redhat-rpm-config-8.0.28-4. ########################## Done.                   
    rpm-4.2.3-30_nonptl.i386.rp ########################## Done.                   
    rpm-build-4.2.3-30_nonptl.i ########################## Done.                   
    rpm-devel-4.2.3-30_nonptl.i ########################## Done.                   
    rpm-libs-4.2.3-30_nonptl.i3 ########################## Done.                   
    rpm-python-4.2.3-30_nonptl. ########################## Done.                   
    rpmdb-redhat-3-0.20060712.i ########################## Done.                   
    sed-4.0.7-8.EL3.i386.rpm:   ########################## Done.                   
    strace-4.5.14-0.EL3.1.i386. ########################## Done.                   
    sysreport-1.3.7.2-15.noarch ########################## Done.                   
    tcl-8.3.5-92.7.i386.rpm:    ########################## Done.                   
    tcsh-6.12-13.EL3.i386.rpm:  ########################## Done.                   
    tk-8.3.5-92.7.i386.rpm:     ########################## Done.                   
    util-linux-2.11y-31.18.i386 ########################## Done.                   
    vixie-cron-4.1-11.EL3.i386. ########################## Done.                   
    vsftpd-1.2.1-3E.6.i386.rpm: ########################## Done.                   
    xinitrc-3.32.2-1.noarch.rpm ########################## Done.                   
    xterm-179-6.EL3.i386.rpm:   ########################## Done.                   
    Preparing              ########################################### [100%]

    Installing...
       1:libgcc                 ########################################### [100%]
       2:hwdata                 ########################################### [100%]
       3:pciutils-devel         ########################################### [100%]
       4:glibc-common           ########################################### [100%]
       5:glibc                  ########################################### [100%]
    Stopping sshd:[  OK  ]
    Starting sshd:[  OK  ]
       6:bash                   ########################################### [100%]
       7:grep                   ########################################### [100%]
       8:chkconfig              ########################################### [100%]
       9:perl                   ########################################### [100%]
      10:popt                   ########################################### [100%]
      11:elfutils-libelf        ########################################### [100%]
      12:sed                    ########################################### [100%]
      13:libstdc++              ########################################### [100%]
      14:e2fsprogs              ########################################### [100%]
      15:libgcj                 ########################################### [100%]
      16:bind-libs              ########################################### [100%]
      17:elfutils               ########################################### [100%]
      18:file                   ########################################### [100%]
      19:elfutils-libelf-devel  ########################################### [100%]
      20:cpp                    ########################################### [100%]
      21:bind-utils             ########################################### [100%]
      22:libgcj-devel           ########################################### [100%]
      23:libstdc++-devel        ########################################### [100%]
      24:logrotate              ########################################### [100%]
      25:glibc-headers          ########################################### [100%]
      26:glibc-devel            ########################################### [100%]
      27:gcc                    ########################################### [100%]
      28:iputils                ########################################### [100%]
      29:libaio                 ########################################### [100%]
      30:mount                  ########################################### [100%]
      31:net-snmp-libs          ########################################### [100%]
      32:psmisc                 ########################################### [100%]
      33:perl-CGI               ########################################### [100%]
      34:perl-CPAN              ########################################### [100%]
      35:perl-DBD-MySQL         ########################################### [100%]
      36:lftp                   ########################################### [100%]
      37:lockdev                ########################################### [100%]
      38:libobjc                ########################################### [100%]
      39:XFree86-libs-data      ########################################### [100%]
      40:gcc-objc               ########################################### [100%]
      41:lockdev-devel          ########################################### [100%]
      42:libaio-devel           ########################################### [100%]
      43:gcc-c++                ########################################### [100%]
      44:gcc-java               ########################################### [100%]
      45:nptl-devel             ########################################### [100%]
      46:elfutils-devel         ########################################### [100%]
      47:e2fsprogs-devel        ########################################### [100%]
      48:XFree86-Mesa-libGLU    ########################################### [100%]
      49:groff                  ########################################### [100%]
      50:ltrace                 ########################################### [100%]
      51:ntsysv                 ########################################### [100%]
      52:glibc-utils            ########################################### [100%]
      53:httpd-devel            ########################################### [100%]
      54:perl-DB_File           ########################################### [100%]
      55:redhat-rpm-config      ########################################### [100%]
      56:curl-devel             ########################################### [100%]
      57:gdb                    ########################################### [100%]
      58:mdadm                  ########################################### [100%]
      59:pciutils               ########################################### [100%]
      60:redhat-release         ########################################### [100%]
      61:rpmdb-redhat           ########################################### [100%]
      62:crash                  ########################################### [100%]
      63:ftp                    ########################################### [100%]
      64:losetup                ########################################### [100%]
      65:strace                 ########################################### [100%]
      66:kudzu-devel            ########################################### [100%]
      67:pam-devel              ########################################### [100%]
      68:man-pages              ########################################### [100%]
      69:glibc-profile          ########################################### [100%]
      70:comps                  ########################################### [100%]
      71:coreutils              ########################################### [100%]
      72:pam                    ########################################### [100%]
      73:XFree86-libs           ########################################### [100%]
      74:krb5-libs              ########################################### [100%]
      75:XFree86-font-utils     ########################################### [100%]
      76:procps                 ########################################### [100%]
      77:util-linux             ########################################### [100%]
      78:initscripts            ########################################### [100%]
      79:tcl                    ########################################### [100%]
      80:aspell                 ########################################### [100%]
      81:openssh                ########################################### [100%]
      82:httpd                  ########################################### [100%]
      83:XFree86-Mesa-libGL     ########################################### [100%]
      84:python                 ########################################### [100%]
      85:xinitrc                ########################################### [100%]
      86:openssh-clients        ########################################### [100%]
      87:XFree86-base-fonts     ########################################### [100%]
      88:curl                   ########################################### [100%]
      89:XFree86-xauth          ########################################### [100%]
      90:xterm                  ########################################### [100%]
      91:aspell-config          ########################################### [100%]
      92:expect                 ########################################### [100%]
      93:tk                     ########################################### [100%]
      94:XFree86-xfs            ########################################### [100%]
      95:XFree86                ########################################### [100%]
      96:ipsec-tools            ########################################### [100%]
      97:XFree86-Xnest          ########################################### [100%]
      98:XFree86-Xvfb           ########################################### [100%]
      99:XFree86-tools          ########################################### [100%]
     100:XFree86-twm            ########################################### [100%]
     101:XFree86-xdm            ########################################### [100%]
     102:netdump                ########################################### [100%]
     103:mod_ssl                ########################################### [100%]
     104:openssh-server         ########################################### [100%]
     105:aspell-devel           ########################################### [100%]
     106:bind                   ########################################### [100%]
     107:kbd                    ########################################### [100%]
     108:quota                  ########################################### [100%]
     109:vixie-cron             ########################################### [100%]
     110:vsftpd                 ########################################### [100%]
     111:nfs-utils              ########################################### [100%]
     112:autofs                 ########################################### [100%]
     113:XFree86-100dpi-fonts   ########################################### [100%]
     114:XFree86-75dpi-fonts    ########################################### [100%]
     115:krb5-devel             ########################################### [100%]
     116:krb5-workstation       ########################################### [100%]
     117:authconfig             ########################################### [100%]
     118:kudzu                  ########################################### [100%]
     119:logwatch               ########################################### [100%]
     120:nscd                   ########################################### [100%]
     121:python-devel           ########################################### [100%]
     122:sysreport              ########################################### [100%]
     123:tcsh                   ########################################### [100%]
     124:rpm-libs               ########################################### [100%]
     125:rpm                    ########################################### [100%]
     126:rpm-python             ########################################### [100%]
     127:net-snmp               ########################################### [100%]
     128:net-snmp-devel         ########################################### [100%]
     129:redhat-config-users    ########################################### [100%]
     130:rpm-build              ########################################### [100%]
     131:rpm-devel              ########################################### [100%]
    The following Packages were marked to be skipped by your configuration:

    Name                                    Version        Rel  Reason
    -------------------------------------------------------------------------------
    kernel                                  2.4.21         47.ELPkg name/pattern
    kernel-doc                              2.4.21         47.ELPkg name/pattern
    kernel-source                           2.4.21         47.ELPkg name/pattern
    kernel-utils                            2.4            8.37.15Pkg name/pattern


    $ sudo up2date -uf kernel kernel-doc kernel-source kernel-utils
    Password:

    Fetching Obsoletes list for channel: rhel-i386-es-3...

    Fetching Obsoletes list for channel: rhel-i386-es-3-extras...

    Name                                    Version        Rel     
    ----------------------------------------------------------
    kernel                                  2.4.21         47.EL             athlon
    kernel-doc                              2.4.21         47.EL             i386  
    kernel-source                           2.4.21         47.EL             i386  
    kernel-utils                            2.4            8.37.15           i386  


    Testing package set / solving RPM inter-dependencies...
    ########################################
    kernel-2.4.21-47.EL.athlon. ########################## Done.                   
    kernel-doc-2.4.21-47.EL.i38 ########################## Done.                   
    kernel-source-2.4.21-47.EL. ########################## Done.                   
    kernel-utils-2.4-8.37.15.i3 ########################## Done.                   
    Preparing              ########################################### [100%]

    Installing...
       1:kernel-utils           ########################################### [100%]
       2:kernel                 ########################################### [100%]
       3:kernel-doc             ########################################### [100%]
       4:kernel-source          ########################################### [100%]

    $ cd /boot
    $ ll
    $ rpm -qa | grep kernel
    $ cat grub/grub.conf 
    $ df -h
    $ sudo reboot
    Password:

    Broadcast message from root (pts/0) (Thu Jul 20 11:15:12 2006):

    The system is going down for reboot NOW!
    $ Read from remote host wincent.com: Connection reset by peer
    Connection to wincent.com closed.

# Perform post-install checks

    $ ssh user@wincent.com 
    $ uname -a
    Linux s69819.wincent.com 2.4.21-47.EL #1 Wed Jul 5 20:39:00 EDT 2006 i686 athlon i386 GNU/Linux
    $ cat /etc/redhat-release 
    Red Hat Enterprise Linux ES release 3 (Taroon Update 8)
    $ sudo service --status-all
    Password:
    $ sudo up2date --list

    Fetching Obsoletes list for channel: rhel-i386-es-3...

    Fetching Obsoletes list for channel: rhel-i386-es-3-extras...

    Fetching rpm headers...

    Name                                    Version        Rel     
    ----------------------------------------------------------

    $ sudo chkconfig --list
    $ rpm -qa | grep kernel
    $ sudo up2date --list

    Fetching Obsoletes list for channel: rhel-i386-es-3...

    Fetching Obsoletes list for channel: rhel-i386-es-3-extras...

    Fetching rpm headers...

    Name                                    Version        Rel     
    ----------------------------------------------------------

# Repair [Bugzilla](/wiki/Bugzilla) breakage

It turns out that the system update broke my [Bugzilla](/wiki/Bugzilla) install because it overwrote some updated [Perl](/wiki/Perl) [CPAN](/wiki/CPAN) modules with older versions. I had to reinstall the newer versions in order to fix the breakage. Unfortunately, running `checksetup.pl` changes the permissions required for [Bugzilla](/wiki/Bugzilla) to work correctly with [Apache](/wiki/Apache)'s [suEXEC](/wiki/suEXEC), so I had to reset the permissions as well.

    $ sudo ./checksetup.pl 
    $ sudo /usr/bin/perl -MCPAN -e 'install "MIME::Base64"'
    $ sudo /usr/bin/perl -MCPAN -e 'install "CGI"'
    $ sudo /usr/bin/perl -MCPAN -e 'install "CPAN"'
    $ sudo ./checksetup.pl 
    $ sudo chown -R wincent.com:wincent.com .
    $ sudo chmod 644 .htaccess
    $ sudo chmod -R 644 skins
    $ sudo chmod 755 skins
    $ cd skins
    $ sudo chmod 755 custom standard
    $ cd standard
    $ sudo chmod 755 global index
    $ cd ../..
    $ sudo chmod 644 *.js
    $ sudo chmod 644 *.html

# See also

-   [Red Hat Enterprise Linux kernel update procedure](/wiki/Red_Hat_Enterprise_Linux_kernel_update_procedure)

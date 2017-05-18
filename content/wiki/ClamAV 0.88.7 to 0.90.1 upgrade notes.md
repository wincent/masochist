---
tags: clamav clamassassin wiki
---

# Introduction

I wanted to hold off on the [ClamAV](/wiki/ClamAV) upgrade for a while because it is a fairly major release and there were compatibility issues with [clamassassin](/wiki/clamassassin) (see <http://lists.jameslick.com/pipermail/clamassassin-announce/2007-February/000030.html>). These issues are fixed with [clamassassin](/wiki/clamassassin) 1.2.4 (see <http://lists.jameslick.com/pipermail/clamassassin-announce/2007-March/000031.html>). So I decided to perform the [ClamAV](/wiki/ClamAV) 0.88.7 to 0.90.1 upgrade simultaneously with the [clamassassin](/wiki/clamassassin) 1.2.3 to 1.2.4 upgrade.

# Resources

-   [ClamAV](/wiki/ClamAV) source download page: <http://www.clamav.net/download/sources>
-   [ClamAV](/wiki/ClamAV) uninstallation notes: <http://wiki.clamav.net/Main/UninstallClamAV>
-   [ClamAV](/wiki/ClamAV) 0.90 upgrade notes: <http://wiki.clamav.net/Main/UpgradeNotes090>
-   [ClamAV](/wiki/ClamAV) 0.90.1 upgrade notes: <http://wiki.clamav.net/Main/UpgradeNotes0901>
-   [ClamAV](/wiki/ClamAV) configuration updater: <http://wiki.clamav.net/twiki/pub/Main/UpgradeNotes090/updateclamconf>

# Procedure

Backup old [ClamAV](/wiki/ClamAV) configuration files:

    sudo cp /etc/freshclam.conf /etc/freshclam.conf.old
    sudo cp /etc/clamd.conf /etc/clamd.conf.old

Download new [clamassassin](/wiki/clamassassin) and [ClamAV](/wiki/ClamAV) source packages:

    wget http://jameslick.com/clamassassin/clamassassin-1.2.4.tar.gz
    wget http://kent.dl.sourceforge.net/sourceforge/clamav/clamav-0.90.1.tar.gz

(But see [this page](http://www.clamav.net/download/sources) for an appropriate local mirror for the [ClamAV](/wiki/ClamAV) download.)

Extract [clamassassin](/wiki/clamassassin) sources:

    tar xzvf clamassassin-1.2.4.tar.gz

Extract and build [ClamAV](/wiki/ClamAV) sources:

    tar xzvf clamav-0.90.1.tar.gz
    cd clamav-0.90.1
    ./configure --sysconfdir=/etc
    make
    make check

Uninstall old version of [ClamAV](/wiki/ClamAV) and install new version:

    cd ../clamav-0.88.7
    sudo make uninstall
    cd ../clamav-0.90.1
    sudo make install
    sudo ldconfig -v

Build and install new version of [clamassassin](/wiki/clamassassin):

    cd ../clamassassin-1.2.4
    ./configure --enable-subject-rewrite=[VIRUS]
    sudo make install

Migrate [ClamAV](/wiki/ClamAV) configuration files:

    chmod +x updateclamconf
    ./updateclamconf /etc/freshclam.conf.old /etc/freshclam.conf > freshclam.conf.new
    ./updateclamconf /etc/clamd.conf.old /etc/clamd.conf > clamd.conf.new
    sudo cp freshclam.conf.new /etc/freshclam.conf
    sudo cp clamd.conf.new /etc/clamd.conf

Post install checks and cleanup:

    whereis freshclam
    sudo freshclam -v

This failed with the following message:

    ERROR: Parse error at line 86: Option NotifyClamd requires string argument.
    Current working dir is /usr/local/share/clamav
    Max retries == 3
    WARNING: You must specify at least one database mirror.

I commented out the `NotifyClamd` line in the configuration file and tried again:

    Current working dir is /usr/local/share/clamav
    Max retries == 3
    ClamAV update process started at Tue Mar  6 05:28:07 2007
    Querying current.cvd.clamav.net
    TTL: 314
    Software version from DNS: 0.90.1
    main.cvd version from DNS: 42
    main.cvd is up to date (version: 42, sigs: 83951, f-level: 10, builder: tkojm)
    daily.cvd version from DNS: 2742
    daily.cvd is up to date (version: 2742, sigs: 12685, f-level: 14, builder: ccordes)

Continue checks:

    sudo freshclam
    sudo service clamd restart
    sudo service --status-all | grep clamd

Finally I checked the changes to the configuration files (technically I should have done this earlier):

    cd /etc
    diff freshclam.conf freshclam.conf.old

Yields:

    56d55
    < DatabaseMirror database.clamav.net
    86c85
    < [/tags/NotifyClamd #NotifyClamd]
    ---
    > NotifyClamd

And:

    diff clamd.conf clamd.conf.old

Produces:

    43c43
    < LogSyslog yes
    ---
    > LogSyslog
    76c76
    < FixStaleSocket yes
    ---
    > FixStaleSocket

Finally, I tailed my `maillog` for a while observing things to make sure delivery and scanning were still working properly. Have yet to discover any problems.

I also checked to see if the startup script had been modified and there was one minor change; from inside the [ClamAV](/wiki/ClamAV) source directory:

    diff contrib/init/RedHat/clamd /etc/init.d/clamd

Differences:

    28c28
    <         LANG= daemon $progdir/$prog
    ---
    >       daemon $progdir/$prog

So I decided to upgrade the script as well:

    sudo cp contrib/init/RedHat/clamd /etc/init.d/clamd

And restart the service to confirm that it works:

    sudo service clamd restart

# See also

-   Upgrade notes for last upgrade: "[ClamAV 0.88.6 to 0.88.7 upgrade notes](/wiki/ClamAV_0.88.6_to_0.88.7_upgrade_notes)"

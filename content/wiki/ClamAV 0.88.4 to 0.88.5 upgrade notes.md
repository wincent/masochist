---
tags: clamav wiki
---

These notes were made during the upgrade from version 0.88.4 of [ClamAV](/wiki/ClamAV) to version 0.88.5.

# Upgrade procedure

-   Download and extract:

<!-- -->

    wget http://belnet.dl.sourceforge.net/sourceforge/clamav/clamav-0.88.5.tar.gz
    tar xzvf clamav-0.88.5.tar.gz
    cd clamav-0.88.5

-   Read upgrade instructions (directs you to: <http://wiki.clamav.net/index.php/UpgradeInstructions>)

<!-- -->

    cat UPGRADE

-   Build:

<!-- -->

    ./configure --sysconfdir=/etc
    make

-   Backup configuration files:

<!-- -->

    sudo cp /etc/freshclam.conf /etc/freshclam.conf.old
    sudo cp /etc/clamd.conf /etc/clamd.conf.old

-   Check to make sure that the startup procedure hasn't changed:

<!-- -->

    diff contrib/init/RedHat/clamd /etc/init.d/clamd

-   Perform the actual install:

<!-- -->

    sudo make install
    # make sure only one version is installed
    whereis freshclam
    # check version
    sudo freshclam -v
    # do a manual update
    sudo freshclam 
    # restart the service
    sudo service clamd restart
    sudo service --status-all | grep clamd

-   Check to ensure that nothing changed in the configuration files:

<!-- -->

    diff /etc/freshclam.conf /etc/freshclam.conf.old
    diff /etc/clamd.conf /etc/clamd.conf.old

# See also

-   Release notes: <http://sourceforge.net/project/shownotes.php?release_id=455799>

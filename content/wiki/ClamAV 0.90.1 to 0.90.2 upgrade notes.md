---
tags: clamav wiki
---

-   Download `clamav-0.90.2.tar.gz` from <http://www.clamav.net/download/sources>
-   Build:

<!-- -->

    tar xzvf clamav-0.90.2.tar.gz 
    cd clamav-0.90.2
    ./configure --sysconfdir=/etc
    make
    make check

-   Backup old configuration:

<!-- -->

    sudo cp /etc/freshclam.conf /etc/freshclam.conf.old
    sudo cp /etc/clamd.conf /etc/clamd.conf.old

-   Uninstall old version, install new version:

<!-- -->

    cd ../clamav-0.90.1
    sudo make uninstall
    cd ../clamav-0.90.2
    sudo make install
    sudo ldconfig -v

-   Post install checks:

<!-- -->

    whereis freshclam
    sudo freshclam -v
    sudo service clamd restart
    sudo service --status-all | grep clamd
    cd /etc

    # check config files for changes
    diff freshclam.conf freshclam.conf.old
    diff clamd.conf clamd.conf.old

    # check startup script for changes
    cd -
    diff contrib/init/RedHat/clamd /etc/init.d/clamd

# See also

-   Official upgrade instructions: <http://wiki.clamav.net/Main/UpgradeInstructions>

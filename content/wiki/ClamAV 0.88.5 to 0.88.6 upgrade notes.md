---
tags: clamav wiki
---

For more details about the nature and purpose of the various steps, see [ClamAV 0.88.4 to 0.88.5 upgrade notes](/wiki/ClamAV_0.88.4_to_0.88.5_upgrade_notes).

    wget http://mesh.dl.sourceforge.net/sourceforge/clamav/clamav-0.88.6.tar.gz
    tar xzvf clamav-0.88.6.tar.gz
    cd clamav-0.88.6
    ./configure --sysconfdir=/etc
    make
    make check
    sudo cp /etc/freshclam.conf /etc/freshclam.conf.old
    sudo cp /etc/clamd.conf /etc/clamd.conf.old 
    diff contrib/init/RedHat/clamd /etc/init.d/clamd 
    sudo make install
    whereis freshclam
    sudo freshclam -v
    sudo freshclam
    sudo service clamd restart
    sudo service --status-all | grep clamd
    cd /etc
    diff freshclam.conf freshclam.conf.old 
    diff clamd.conf clamd.conf.old

---
tags: clamav wiki
---

wget http://ovh.dl.sourceforge.net/sourceforge/clamav/clamav-0.88.7.tar.gz
    tar xzvf clamav-0.88.7.tar.gz
    cd clamav-0.88.7
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

# See also

-   Release notes: <http://sourceforge.net/project/shownotes.php?release_id=470383>
-   Download: <http://sourceforge.net/project/showfiles.php?group_id=86638&release_id=470383>

---
tags: red.hat wiki
---

For posterity:

    uptime

Check for available updates:

    sudo up2date --list

Echo current release info:

    uname -a
    cat /etc/redhat-release

Trigger an update of all non-kernel RPMs:

    sudo up2date --nox -u

Install the new kernel:

    sudo up2date -uf kernel kernel-doc kernel-source kernel-utils

Confirm that the kernel is installed in /boot:

    cd /boot
    ll

Check the RPM database:

    rpm -qa | grep kernel

Check that /boot/grub/grub.conf: contains the appropriate lines at position 0 (first in list):

    title Red Hat Enterprise Linux ES (2.4.21-37.0.1.EL)
            root (hd0,0)
            kernel /vmlinuz-2.4.21-37.0.1.EL ro root=/dev/hda3
            initrd /initrd-2.4.21-37.0.1.EL.img

Reboot and cross your fingers:

    sudo reboot

# Post install checks

    uname -a
    cat /etc/redhat-release

Check that critical services are running ([Bansshee](/wiki/Bansshee), FTP, HTTP, MySQL, Mailman, `clamd`, IMAP, `ipop3`, [svn](/wiki/svn), [sendmail](/wiki/sendmail), `xinetd`, [webmin](/wiki/webmin) etc):

    sudo service --status-all
    sudo chkconfig --list

See if up2date is now satisfied:

    sudo up2date --list

# See also

Examples (oldest first):

-   [Red Hat kernel-2.4.21-40.EL to kernel-2.4.21-47.EL upgrade notes](/wiki/Red_Hat_kernel-2.4.21-40.EL_to_kernel-2.4.21-47.EL_upgrade_notes)
-   [Red Hat kernel 2.4.21-47.EL to 2.4.21-47.0.1.EL upgrade notes](/wiki/Red_Hat_kernel_2.4.21-47.EL_to_2.4.21-47.0.1.EL_upgrade_notes)

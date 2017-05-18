---
title: Server reboot
tags: blog
---

Tonight I rebooted the server for the first time since moving to [Rackspace](http://service.bfast.com/bfast/click?bfmid=30735717&siteid=41506187&bfpage=hosting_headaches) back in August 2005. It [hasn't skipped a beat](http://www.wincent.com/a/about/wincent/weblog/archives/2005/11/some_words_of_p.php) since then (218 days of uptime with incredibly solid network connectivity) but it was nevertheless time to perform a kernel upgrade so as to pull down the latest security fixes from [Red Hat](http://www.redhat.com/).





### How it works

As part of the [Red Hat Network](https://rhn.redhat.com/help/about.pxt) you get automated security updates on a daily basis. Since switching to Rackspace I've received daily email reports informing me of automated updates applied to [Apache](http://httpd.apache.org/), [PHP](http://www.php.net/) and many other pieces of software on the server. These may not be the bleeding-edge latest versions of the software, but Red Hat makes a point of back-porting security fixes.

Yet for some time now my daily email reports have ended with this:

    The following Packages were marked to be skipped by your configuration:



    Name                                    Version        Rel  Reason
    -------------------------------------------------------------------------------
    kernel                                  2.4.21         37.0.1.ELPkg name/pattern
    kernel-doc                              2.4.21         37.0.1.ELPkg name/pattern
    kernel-source                           2.4.21         37.0.1.ELPkg name/pattern
    redhat-release                          3ES            13.6.2Config modified



    All packages are currently up to date

I presumed that Rackspace, in their wisdom, didn't automatically apply kernel updates because they may prove disruptive. Perhaps they only apply them for particularly critical vulnerabilities. But today I saw an article in their knowledge base stating that kernel updates are skipped in the default configuration for `up2date`; that is, you'll never ever get a kernel update unless you do it yourself (or ask them to do it for you; most probably for free).

### How to upgrade the kernel

It turns out that it couldn't be easier. Back in my FreeBSD days when I upgraded the kernel I built it myself and then installed it. With RedHat it's a simple matter of doing:

    sudo up2date -uf kernel kernel-source kernel-doc

The kernel is downloaded, unpacked and installed. That's all you have to do. When you're ready, reboot to start using the new kernel:

    sudo reboot

This is without a doubt the quickest and most painless kernel upgrade I've ever done. By looking at the timestamps in entries in `/var/log/boot.log` and `/var/log/messages` I can see that precisely 92 seconds elapsed between Apache shutting down and starting up again. [Sendmail](http://sendmail.org/) was down for 87 seconds.

### Preflight

Of course, being the cautious fellow I am I didn't just run `up2date` and forget about it. I also did a number of "preflight" and "postflight" checks to make sure that everything worked as it should.

    $ uptime
     18:48:27  up 218 days,  6:37,  1 user,  load average: 0.00, 0.00, 0.00
    $ cat /etc/redhat-release
    Red Hat Enterprise Linux ES release 3 (Taroon Update 5)
    $ uname -a
    Linux s69819.wincent.com 2.4.21-32.0.1.EL #1 Tue May 17 17:55:54 EDT 2005 i686 athlon i386 GNU/Linux

I looked in `/boot/` to make sure that the kernel files were correctly installed, and confirmed that the appropriate modifications to `/boot/grub/grub.conf` had been made. I also did a `sudo up2date -uf redhat-release` after looking at exactly what files were included in the "redhat-release" package and determining that doing the update wouldn't break anything.

### Postflight

    $ uptime
     19:23:01  up 2 min,  3 users,  load average: 0.12, 0.13, 0.06
    $ cat /etc/redhat-release
    Red Hat Enterprise Linux ES release 3 (Taroon Update 6)
    $ uname -a
    Linux s69819.wincent.com 2.4.21-37.0.1.EL #1 Wed Jan 11 18:43:39 EST 2006 i686 athlon i386 GNU/Linux

I did a `sudo service --status-all` and to my surprise saw that [Mailman](http://www.gnu.org/software/mailman/index.html) and [clamd](http://www.clamav.net/) were not running. A `sudo chkconfig --list` revealed that they were not set to launch at boot time. The problem was that I had done the following when I configured them for the first time:

    $ sudo service mailman start
    $ sudo chkconfig --add mailman

But had failed to do:

    $ sudo chkconfig mailman on

It turns out that even though `clamd` was not running for a few minutes it didn't prevent mail delivery during that time. Mailman was even less of a worry given the amount of traffic on my [mailing lists](http://lists.wincent.com/). So all in all I am very happy with the upgrade and will apply any other kernel updates in the future

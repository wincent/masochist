---
title: Involuntary reboot log #8
tags: blog
---

You could argue that this one is my fault but I like to blame it on the Mac OS X dependence on NetInfo for user information.

I was trying to find out why another machine on my local network was continuously hammering my machine with packets. Well, not exactly hammering but generating a steady 5 to 10 kilobytes of traffic per second. It was as though my machine was being used as a gateway.

So I tried to rule things out one by one. Internet connection sharing was turned off. I wasn't running Tor or Privoxy. I ended up quitting basically everything and the traffic continued. I then tried to block the offending IP address using `ipfw` and the traffic still continued.

    sudo ipfw add deny ip from 192.168.1.34 to any
    sudo ipfw add deny ip from any to 192.168.1.34

I have no idea why this didn't work but I continued to see [TCP](http://www.wincent.com/knowledge-base/TCP) traffic. Variations on these rules didn't seem to work either. I then committed the mistake that required the reboot:

    sudo ipfw add deny all from any to any

That stopped the traffic all right but it stopped everything else, including [NetInfo](http://www.wincent.com/knowledge-base/NetInfo) lookups, and that meant that the following didn't work:

    sudo ipfw delete 100

Nothing `sudo` worked because it couldn't look up my credentials and complained that user ID 501 didn't exist in `/etc/passwd`. So I tried to reboot and Mac OS X decided to hang forever at the blue screen, requiring a hard reset. Sigh...

Right now performing my customary boot-from-DVD and repair with Disk First Aid trick... One of the drives claims to need minor repair. Another hour down the gurgler...





### Involuntary reboot stats to date

-   **Operating system version:** 10.4.9
-   **Kernel panics:** 6
-   **Hard resets:** 2
-   **Total failures:** 8
-   **Start of recording keeping:** 21 May 2006
-   **Total days to date:** 303 days
-   **Average time between failures:** 37 days
-   **Uptime at moment of failure(s):** Several days

As per usual I used the interactive Ruby interpreter, `irb`, to do the date calculations for me:

    require 'date'
    Date.today - Date.new(2006, 5, 21)
    303 / 7

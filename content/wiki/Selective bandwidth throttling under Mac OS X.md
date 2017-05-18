---
tags: ipfw dummynet wiki
cache_breaker: 1
---

# The problem

Ever since I moved to my new house I've had an annoying problem with my ADSL connection.

I am not sure whether it's an attempt by my ISP to thwart P2P file trading, or an unintentional defect in the system, but the result is the following:

While download speeds are generally fine (500-600KB/s), and ping times also (100ms), as soon as outbound traffic rises above 5-10KB/s, ping times go through the roof. If I allow the outbound traffic to reach the full capacity of the ADSL connection (about 50-60KB/s) then the ping times ascend to 2-5s. Web pages become unnavegable because requests time out, and download speeds suffer too.

So if this is an attempt to thwart P2P then it is certainly effective, because a download which would otherwise run at 500KB/s ends up falling to 20-30KB/s.

But it is not only P2P that suffers. Even doing something innocuous like sending an email with a large (10MB) attachment saturates the connection and causes the aforementioned problems of unacceptable ping times, broken web navigation, timeouts.

# The workarounds

## Application-level workarounds

At the level of P2P clients like Transmission and Azureus/Vuze, the situation is easily worked around by setting outgoing bandwidth limits of 5-10KB/s in the application preferences.

Of course, this makes the ADSL profile even more asymmetric than the "A" in its name suggests, because instead of being able to download and upload at a 10:1 speed ratio, we end up with a 100:1 speed ratio. That is, if you like to be a "good citizen" and upload as much as you download within the swarm, maintaining the 1.0 ratio, you'll need to spend 100 times as long uploading something than you do downloading it.

But even so, this is still better than rendering your net connection unusable.

## Operating System-level workarounds

Not all applications have built-in throttling, so you'll have to rely on the "DUMMYNET" facility built into the [Mac OS X](/wiki/Mac_OS_X) `ipfw` firewall.

To set up a "pipe" that will limit all traffic that flows through it:

    sudo ipfw pipe 1 config bw 10KByte/s

To apply that pipe to *all* outgoing traffic over the default ethernet interface (`en0`):

    sudo ipfw add 1 pipe 1 ip from any to any xmit en0

But note, this will still have a negative impact on your web navigation because your outbound requests for webpages will be sharing the tiny pipe with all other outbound traffic.

So, we can remove that rule:

    sudo ipfw del 1

And replace it with this one:

    sudo ipfw add 1 pipe 1 ip from any to any xmit en0 not dst-port 80,443

This limits all outbound traffic that is *not* bound for a destination port of 80 or 443. This means that web pages should still load relatively fast, but other outbound traffic will be limited.

While this example is relatively simplistic it gets the job done. It is possible to set up much more complex rulesets, including having multiple pipes, sharing pipes according to weighted queues (for example, it is possible to "weight" web traffic as twice as important as other traffic, ensuring that it gets double the bandwidth when bandwidth is saturated), and simulating dial-up connections and packet loss for the purposes of site testing.

# See also

-   `man ipfw`

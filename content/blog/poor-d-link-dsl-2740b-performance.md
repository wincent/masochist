---
title: Poor D-Link DSL-2740B performance
tags: blog
cache_breaker: 1
---

Anybody have any experience with the D-Link DSL-2740B ADSL router? Of all the routers I've had over the years, this seems to be among the worst as far as handling BitTorrent traffic is concerned.

With a BT client running (Azureus) configured to connect to no more than 10 peers, the performance of the router just falls through the floor. Ping times climb from about 30ms (for servers in Europe) 150ms (for US servers) to around 3 seconds.

Latest firmware, all unnecessary bells and whistles turned off, and connected via cable rather than wireless. I just can't understand why it handles such modest demands so poorly. And funnily enough, I can't find much commentary on the web about its performance.

Anybody have any experience with this unit?

# Update

I've done quite a bit of experimentation to try and get to the bottom of the performance problem and it seems likely that the router itself is not the problem.

First of all, here's what happens to cross-Atlantic ping times when you fire up a BT client:

    64 bytes from 209.235.214.139: icmp_seq=2893 ttl=44 time=182.523 ms
    64 bytes from 209.235.214.139: icmp_seq=2894 ttl=44 time=183.737 ms
    64 bytes from 209.235.214.139: icmp_seq=2895 ttl=44 time=180.633 ms
    64 bytes from 209.235.214.139: icmp_seq=2896 ttl=44 time=186.884 ms
    64 bytes from 209.235.214.139: icmp_seq=2897 ttl=44 time=181.502 ms
    64 bytes from 209.235.214.139: icmp_seq=2898 ttl=44 time=179.728 ms
    64 bytes from 209.235.214.139: icmp_seq=2899 ttl=44 time=187.326 ms
    64 bytes from 209.235.214.139: icmp_seq=2900 ttl=44 time=535.153 ms
    64 bytes from 209.235.214.139: icmp_seq=2901 ttl=44 time=703.063 ms
    64 bytes from 209.235.214.139: icmp_seq=2902 ttl=44 time=496.034 ms
    64 bytes from 209.235.214.139: icmp_seq=2903 ttl=44 time=179.732 ms
    64 bytes from 209.235.214.139: icmp_seq=2904 ttl=44 time=252.488 ms
    64 bytes from 209.235.214.139: icmp_seq=2905 ttl=44 time=178.335 ms
    64 bytes from 209.235.214.139: icmp_seq=2906 ttl=44 time=185.137 ms
    64 bytes from 209.235.214.139: icmp_seq=2907 ttl=44 time=180.503 ms
    64 bytes from 209.235.214.139: icmp_seq=2908 ttl=44 time=258.729 ms
    64 bytes from 209.235.214.139: icmp_seq=2909 ttl=44 time=185.832 ms
    64 bytes from 209.235.214.139: icmp_seq=2910 ttl=44 time=239.734 ms
    64 bytes from 209.235.214.139: icmp_seq=2911 ttl=44 time=577.424 ms
    64 bytes from 209.235.214.139: icmp_seq=2912 ttl=44 time=780.158 ms
    64 bytes from 209.235.214.139: icmp_seq=2913 ttl=44 time=720.689 ms
    64 bytes from 209.235.214.139: icmp_seq=2914 ttl=44 time=1553.701 ms
    64 bytes from 209.235.214.139: icmp_seq=2915 ttl=44 time=1918.942 ms
    64 bytes from 209.235.214.139: icmp_seq=2916 ttl=44 time=1811.759 ms
    64 bytes from 209.235.214.139: icmp_seq=2917 ttl=44 time=1548.392 ms
    64 bytes from 209.235.214.139: icmp_seq=2918 ttl=44 time=1570.016 ms
    64 bytes from 209.235.214.139: icmp_seq=2919 ttl=44 time=1814.157 ms
    64 bytes from 209.235.214.139: icmp_seq=2921 ttl=44 time=1337.983 ms
    64 bytes from 209.235.214.139: icmp_seq=2922 ttl=44 time=1685.063 ms
    64 bytes from 209.235.214.139: icmp_seq=2923 ttl=44 time=1419.158 ms
    64 bytes from 209.235.214.139: icmp_seq=2924 ttl=44 time=1674.856 ms
    64 bytes from 209.235.214.139: icmp_seq=2925 ttl=44 time=1609.522 ms
    64 bytes from 209.235.214.139: icmp_seq=2926 ttl=44 time=1467.571 ms
    64 bytes from 209.235.214.139: icmp_seq=2927 ttl=44 time=1466.806 ms

Note how it very quickly climbs from a stable 180ms up to 1.5 to 2 seconds. Stop the BT client and within seconds ping times revert to their former levels.

I tried the generic no-brand router that my ISP gave me and it exhibited exactly the same behaviour, so it seems that the connection is getting strangled upstream.

I tried setting Azureus to the minimum number of connections settable in the preferences (2 connections, 2 upload slots) and even with only 1 peer connected was able to reproduce these drastic increases in latency.

It seems to be tied to uploads, not downloads. Keeping the number of upload slots low (2) and heavily limiting the upload speed (to 10K) witness what happens to ping times:

    64 bytes from 209.235.214.139: icmp_seq=3030 ttl=44 time=1741.034 ms
    64 bytes from 209.235.214.139: icmp_seq=3031 ttl=44 time=1555.178 ms
    64 bytes from 209.235.214.139: icmp_seq=3032 ttl=44 time=1256.599 ms
    64 bytes from 209.235.214.139: icmp_seq=3034 ttl=44 time=1188.689 ms
    64 bytes from 209.235.214.139: icmp_seq=3035 ttl=44 time=1048.148 ms
    64 bytes from 209.235.214.139: icmp_seq=3037 ttl=44 time=1029.322 ms
    64 bytes from 209.235.214.139: icmp_seq=3038 ttl=44 time=1499.163 ms
    64 bytes from 209.235.214.139: icmp_seq=3039 ttl=44 time=1805.797 ms
    64 bytes from 209.235.214.139: icmp_seq=3040 ttl=44 time=1644.596 ms
    64 bytes from 209.235.214.139: icmp_seq=3041 ttl=44 time=1639.401 ms
    64 bytes from 209.235.214.139: icmp_seq=3042 ttl=44 time=1203.379 ms
    64 bytes from 209.235.214.139: icmp_seq=3043 ttl=44 time=1018.775 ms
    64 bytes from 209.235.214.139: icmp_seq=3044 ttl=44 time=920.632 ms
    64 bytes from 209.235.214.139: icmp_seq=3045 ttl=44 time=909.301 ms
    64 bytes from 209.235.214.139: icmp_seq=3046 ttl=44 time=919.494 ms
    64 bytes from 209.235.214.139: icmp_seq=3047 ttl=44 time=679.514 ms
    64 bytes from 209.235.214.139: icmp_seq=3048 ttl=44 time=753.429 ms
    64 bytes from 209.235.214.139: icmp_seq=3049 ttl=44 time=807.782 ms
    64 bytes from 209.235.214.139: icmp_seq=3050 ttl=44 time=804.558 ms
    64 bytes from 209.235.214.139: icmp_seq=3051 ttl=44 time=465.244 ms
    64 bytes from 209.235.214.139: icmp_seq=3052 ttl=44 time=407.975 ms
    64 bytes from 209.235.214.139: icmp_seq=3053 ttl=44 time=179.553 ms
    64 bytes from 209.235.214.139: icmp_seq=3054 ttl=44 time=182.495 ms
    64 bytes from 209.235.214.139: icmp_seq=3055 ttl=44 time=183.446 ms
    64 bytes from 209.235.214.139: icmp_seq=3056 ttl=44 time=178.376 ms
    64 bytes from 209.235.214.139: icmp_seq=3057 ttl=44 time=186.717 ms
    64 bytes from 209.235.214.139: icmp_seq=3058 ttl=44 time=184.740 ms
    64 bytes from 209.235.214.139: icmp_seq=3059 ttl=44 time=179.752 ms
    64 bytes from 209.235.214.139: icmp_seq=3060 ttl=44 time=271.949 ms
    64 bytes from 209.235.214.139: icmp_seq=3061 ttl=44 time=183.867 ms
    64 bytes from 209.235.214.139: icmp_seq=3062 ttl=44 time=180.561 ms
    64 bytes from 209.235.214.139: icmp_seq=3063 ttl=44 time=182.970 ms
    64 bytes from 209.235.214.139: icmp_seq=3064 ttl=44 time=182.206 ms
    64 bytes from 209.235.214.139: icmp_seq=3065 ttl=44 time=183.191 ms
    64 bytes from 209.235.214.139: icmp_seq=3066 ttl=44 time=181.135 ms
    64 bytes from 209.235.214.139: icmp_seq=3067 ttl=44 time=180.694 ms
    64 bytes from 209.235.214.139: icmp_seq=3068 ttl=44 time=229.157 ms
    64 bytes from 209.235.214.139: icmp_seq=3069 ttl=44 time=183.549 ms

Cranking up the number of connections allowed to over 100 and letting download speeds climb (to 500-600KB/sec) while keeping upload speeds clamped at 10KB/sec yields some degradation but still not the pathological levels being obtained earlier:

    64 bytes from 209.235.214.139: icmp_seq=3443 ttl=44 time=373.631 ms
    64 bytes from 209.235.214.139: icmp_seq=3444 ttl=44 time=266.417 ms
    64 bytes from 209.235.214.139: icmp_seq=3445 ttl=44 time=299.835 ms
    64 bytes from 209.235.214.139: icmp_seq=3446 ttl=44 time=261.362 ms
    64 bytes from 209.235.214.139: icmp_seq=3447 ttl=44 time=198.478 ms
    64 bytes from 209.235.214.139: icmp_seq=3448 ttl=44 time=254.593 ms
    64 bytes from 209.235.214.139: icmp_seq=3450 ttl=44 time=266.859 ms
    64 bytes from 209.235.214.139: icmp_seq=3451 ttl=44 time=345.570 ms
    64 bytes from 209.235.214.139: icmp_seq=3452 ttl=44 time=458.583 ms
    64 bytes from 209.235.214.139: icmp_seq=3453 ttl=44 time=279.435 ms
    64 bytes from 209.235.214.139: icmp_seq=3454 ttl=44 time=282.358 ms
    64 bytes from 209.235.214.139: icmp_seq=3455 ttl=44 time=217.000 ms
    64 bytes from 209.235.214.139: icmp_seq=3456 ttl=44 time=345.207 ms
    64 bytes from 209.235.214.139: icmp_seq=3457 ttl=44 time=367.902 ms
    64 bytes from 209.235.214.139: icmp_seq=3458 ttl=44 time=319.020 ms
    64 bytes from 209.235.214.139: icmp_seq=3459 ttl=44 time=364.823 ms
    64 bytes from 209.235.214.139: icmp_seq=3460 ttl=44 time=310.259 ms
    64 bytes from 209.235.214.139: icmp_seq=3461 ttl=44 time=210.597 ms
    64 bytes from 209.235.214.139: icmp_seq=3462 ttl=44 time=331.277 ms

So not really sure what's going on upstream, but it seems likely that Telefónica is dropping the ball as soon as you surpass a few kilobytes of upload bandwidth. Not sure if this is intentional (anti-P2P tactic) or just a sign of incompetence.

---
title: iMac memory upgrade: before and after
tags: blog
---

### Command

The following command was used to test the performance of the iMac before and after the upgrade:

`time xcodebuild clean build -target "Synergy Advance.app" -configuration Release`

### Before the upgrade

These are the results for the iMac equipped with 512 MB of RAM:

    real    26m19.688s
    user    5m36.100s
    sys     3m11.155s

### After the upgrade

These are the results for the iMac equipped with 2 GB of RAM:

    real    4m56.097s
    user    4m59.441s
    sys     1m35.643s

### Conclusion

The 64-bit Dual 2.5 GHZ G5 PowerPC which this humble iMac is replacing took about 6.5 minutes to compile [Synergy Advance](http://synergyadvance.com/). The new iMac, which is about one third of the price of the G5, does it in less than 5 minutes. And it does it [much, much more quietly](http://www.wincent.com/a/about/wincent/weblog/archives/2006/05/memory_for_the.php). The upgrade eliminates in one fell swoop 21 minutes of virtual memory disk thrashing.

I am absolutely floored.

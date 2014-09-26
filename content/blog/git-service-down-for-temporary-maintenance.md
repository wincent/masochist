---
title: Git service down for temporary maintenance [updated]
tags: site maintenance
cache_breaker: 1
---

Due to the still-unresolved Bash "shellshock" vulnerability (see "[CVE-2014-6271: Remote code execution through bash](https://news.ycombinator.com/item?id=8361574)" and "[CVE-2014-7169: Bash Fix Incomplete, Still Exploitable](https://news.ycombinator.com/item?id=8365158)") I've temporarily taken down the Git service (both the web interface and the Git protocol interface) as a precaution until some definitive patches are available.

In the meantime, all of my repos are mirrored and available at <https://github.com/wincent> and <https://gitorious.org/~wincent>.

Sorry for the inconvenience.

# Update: Thursday 25th September, 10:30 PM PST

[Amazon](/wiki/Amazon) just released packages which [fix both CVEs](https://alas.aws.amazon.com/ALAS-2014-419.html), so I've now re-enabled all services. (Previously they released a package that only address CVE-2014-6271; I installed it as soon as I could, but I wanted to take the services offline until a more definitive fix was available.)

Thanks for your understanding.

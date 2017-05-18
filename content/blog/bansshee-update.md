---
title: Bansshee update
tags: blog
---

I [recently wrote](http://www.wincent.com/a/about/wincent/weblog/archives/2006/04/bansshee_my_ans.php) that I spent some time working on a countermeasure for SSH-dictionary attacks. Well, Bansshee has been in service on my server now for over a week and it's nice to see it working without skipping a beat.

Now instead of getting a notification that a pair of script kiddies tried to brute force their way into my server a few thousands times I get a daily report that looks something like this:

    Failed password attempts: 58 time(s).


    Illegal user attempts: 10 time(s).


    IPs added to blocklist:
        yoreparo.com [216.12.215.219] : 1 time(s).
        218.89.164.18 : 1 time(s).

I am still putting together a downloadable package, hope to post it soon to <http://www.wincent.com/a/products/bansshee/>.

#### Update

Bansshee has been [publicly released](http://bansshee.org/).

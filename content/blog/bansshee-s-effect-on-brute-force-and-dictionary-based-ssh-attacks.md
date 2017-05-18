---
title: Bansshee's effect on brute force and dictionary-based SSH attacks
tags: bansshee blog
---

So the other day I [mentioned](/twitter/90) that I had seen over 25,000 [SSH](/wiki/SSH) break-in attempts in a 24-hour period, and that it was probably time to get [Bansshee](/wiki/Bansshee) configured for [Red Hat Enterprise Linux](/wiki/Red_Hat_Enterprise_Linux) 5.3 and deployed.

Well, I did that the other day and [released Bansshee 1.0.1](/blog/bansshee-1.0.1-is-out).

Now instead of 25,000+ break-in attempts this is what I'm seeing in my daily report:

    --------------------- Bansshee (secure-log) Begin ------------------------ 

    Failed password attempts: 15 time(s).

    Illegal user attempts: 11 time(s).

    IPs added to blocklist:
        28.Red-80-33-250.staticIP.rima-tde.net [80.33.250.28] : 1 time(s).
        190.144.121.90 : 1 time(s).
        218.108.235.86 : 1 time(s).

    ---------------------- Bansshee (secure-log) End ------------------------- 

    --------------------- SSHD Begin ------------------------ 

    Failed logins from:
       80.33.250.28 (28.Red-80-33-250.staticIP.rima-tde.net): 2 times
       83.59.197.221 (221.Red-83-59-197.dynamicIP.rima-tde.net): 1 time
       190.144.121.90: 7 times
       218.108.235.86: 5 times

    Illegal users from:
       80.33.250.28 (28.Red-80-33-250.staticIP.rima-tde.net): 10 times
       218.108.235.86: 1 time

    ---------------------- SSHD End -------------------------

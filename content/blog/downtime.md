---
title: Downtime
tags: aws
---

I just had about 10 minutes of downtime. Sorry about that.

Got a notice from Amazon that one of my instances was due for retirement and that I could migrate ahead of time by stopping and starting the instance. Operative words there are "stopping" and "starting". I issued a `sudo reboot` and the instance didn't come back up; I actually had to go into the AWS console and stop the instance, then restart it.

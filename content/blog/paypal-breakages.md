---
title: PayPal breakages
tags: blog
---

So I just found out that when PayPal rolled out their new website they [broke all of my payment links](http://www.wincent.com/a/news/archives/2007/10/paypal_rolls_ou.php). It looks like it took as many as 9 hours for a user to report this to me, and I don't know how many sales I lost. This couldn't happen at a worse time seeing as only yesterday I rolled out a new version of [Synergy](http://synergy.wincent.com/); if you're a developer (and I presume most of the people who read this weblog are) then you'll know that it's release day when you see your biggest downloads and sales.

The first thing I did was go to their "link generation wizard" and create some new links to see if there were any material differences. Links which used to start

    www.paypal.com/xclick/business=win@wincent.com

Now start:

    www.paypal.com/cgi-bin/webscr?cmd=_xclick&business=win@wincent.com

But it turns out that that wasn't the problem. The problem was the `lc=en` parameter that I had in the query string. Remove it and the "Page not found" errors go away. I'm posting this in the hope that it will help others caught off guard by this change.


### Update

PayPal later went on to fix the breakages, permitting me to add the `lc` parameter back to my links; but note that at some point they changed the expected value from a language code like `en` to a country code like `GB`. My initial testing with `US` didn't force the page into English as desired, but it appears that `GB` does work. Without this value, many customers were confronted with a login page in Spanish, even when their IPs were in the US and my merchant account has its language preference set to English. Those who wish to change their language before logging in can use the pop-up menu provided by PayPal (currently at the top right).

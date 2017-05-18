---
title: Outgoing mail changes
tags: site blog
cache_breaker: 1
---

Following on from [yesterday's "outsourcing" of the DNS nameservers](/blog/dns-changes), today outgoing mail was delegated to a new third-party provider, [AuthSMTP](http://authsmtp.com/).

Just like yesterday, from and end user perspective everything should continue working exactly as before and all email addresses are unchanged; it's just that behind the scenes outgoing mail is now being relayed through AuthSMTP's servers rather than being delivered directly by [Sendmail](/wiki/Sendmail) running on this server.

As I mentioned yesterday, these changes are laying the groundwork for some bigger changes to the hosting set-up in the near future. I've been very happy with the quality of my current webhost, [INetU](/wiki/INetU), but it's time to move to a more flexible, modular infrastructure and the first step is separating out concerns like DNS and mail from the website. More details to follow.

# Update (27 November 2009)

The new set-up has been in place for about a week now and everything seems to be going well. Outgoing emails from me and registration information has always worked, but outgoing mails from the [Rails](/wiki/Rails) application powering this site were broken until only a few hours ago; this means that things like email confirmation messages and lost password helpers weren't working.

I hadn't noticed the problem because: firstly, I was still getting the BCC'ed on all such messages as well as getting notifications for new comments and issues posted by users (because deliveries to my <win@wincent.com> address evidently don't go through authsmtp.com); and secondly, the failed delivery attempts weren't showing up in the [AuthSMTP](/wiki/AuthSMTP) control panel which I was watching (for some reason, that particular class of error, they appear in a separate log which was non-obvious to me at first).

So the problem was discovered this afternoon doing post-deployment testing, and solved soon after. As far as I know now, absolutely all outgoing mail is now functioning with the new set-up. As always, if you spot any problems (or don't get mail from me which you were expecting), please let me know either via email to <win@wincent.com> or by opening a [ticket](/wiki/ticket) in the [issue tracker](/wiki/issue_tracker).

---
title: Moving to RHEL 5
tags: blog
---

In October last year I [wrote](http://www.wincent.com/a/about/wincent/weblog/archives/2007/10/thinking_about.php) about changing UNIXes. Well, it's a new year now and it looks like it is going to happen.

I'll be migrating to [RHEL 5](http://www.wincent.com/knowledge-base/RHEL%205) (from RHEL 3). I don't have a firm date for the migration yet, and I need to do quite a bit of research before then about the best way to get all my data across. This will basically be a clean install on a new hard drive, the server should only be down for a relatively short interval, and then we'll come back on line and over the following hours I'll be transferring user accounts, mail, databases, software and everything else from the old hard drive to the new. So it will be quite intense, and most services *will* be interrupted for at least some of the migration. I expect to be transferring and configuring for several hours, possibly even the entire day.

One way to minimize the interruption would be to install the drive with the new system on it and migrate some of the data before rebooting, but I'm not sure how much time that will actually buy me, nor whether my host, [Rackspace](http://service.bfast.com/bfast/click?bfmid=30735717&siteid=41506187&bfpage=hosting_headaches), would be prepared to do that (it would require them to install RHEL 5 on the drive in another machine, then uninstall it from that machine and reinstall it into mine).

I'm very happy about this because it means I will be able to gradually retire bits of legacy software and replace all of this with a single, lean, unified [Rails](http://www.wincent.com/knowledge-base/Rails) application which handles everything for me (bug tracking, customer support tracking, forums, the wiki, and so forth).

Deploying Rails is a bitch by all accounts, but it's easier on RHEL 5 than it is on RHEL 3, (specifically, there are fewer pieces of additional software that you have to install, and you deviate less from the supported, auto-updated configuration). And once you've deployed it you've got *one* application stack to worry about instead of half a dozen.

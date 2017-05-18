---
title: WordPress 2.1.3 but not for me
tags: blog
---

After a cracker broke into the [WordPress](http://www.wincent.com/knowledge-base/WordPress) server last month and replaced the official download with a [trojan](http://www.wincent.com/knowledge-base/trojan) (an incident [described](http://wordpress.org/development/2007/04/wordpress-213-and-2010/) by the [WordPress](http://www.wincent.com/knowledge-base/WordPress) [public-relations team](http://photomatt.net/) as a "systems issue") I decided to give [WordPress](http://www.wincent.com/knowledge-base/WordPress) the flick, forever (see "[Removing a WordPress 2.1.1 installation and replacing it with a static mirror](http://www.wincent.com/knowledge-base/Removing%20a%20WordPress%202.1.1%20installation%20and%20replacing%20it%20with%20a%20static%20mirror)").

Today brings [another update](http://wordpress.org/development/2007/04/wordpress-213-and-2010/), once again security-driven.

> This update is highly recommend for all users of both branches.

*Translation:* upgrade immediately or get owned.

> These releases include fixes for several publicly known minor XSS issues, one major XML-RPC issue, and a proactive full sweep of the WordPress codebase to protect against future problems.

The [WordPress](http://www.wincent.com/knowledge-base/WordPress) team needs to change the way they work with respect to security. This is a very popular, public-facing web application. Instead of springing these forced security updates ("upgrade now or else") on the masses they should do three or four things:

1.  Adopt a regular, public update schedule for security updates so that people can plan and be ready for security updates. Something simple like "first Tuesday of every month".
2.  Have a core-team-only security branch which is merged into the publicly-viewable branches only just before release. More on this point below.
3.  Implement a mandatory review process in which every single check-in must pass a security review by another team member; this security-specific review should be in addition to any existing review procedures they might have (emphasis on the *might*).
4.  Appoint a security officer whose responsibilities include a coordinating regular, pro-active audits of the code base.

Now to address the second point above; I love the open source development model and I think it's great to develop stuff out in the open. But when it comes to security fixes for vulnerabilities need to be kept secret until they are released. With [WordPress](http://www.wincent.com/knowledge-base/WordPress) we currently have the worst of both worlds: throughout the entire development cycle attackers can monitor the [WordPress trac](http://trac.wordpress.org/) for vulnerability reports and the corresponding fixes and start working on exploits; meanwhile, users are exposed to risk and then on release day told to upgrade as quickly as possible or face the consequences.

They need to get their security fixes on a private branch. This is not a desktop application like [Firefox](http://www.wincent.com/knowledge-base/Firefox). If you're on holiday and upgrade your browser a week late then it's no big deal; but if you're a [WordPress](http://www.wincent.com/knowledge-base/WordPress) administrator and an exploit gets released while you're on a beach in Santo Domingo then your risk is many times greater. The dealing of security issues in the open followed by sudden, irregular releases without proper advance notice for scheduling just makes this problem worse.

The [WordPress](http://www.wincent.com/knowledge-base/WordPress) security track record has been appalling in the past so we can safely assume that vulnerabilities will continue to be discovered.

> We have taken dozens of additional precautions with the servers and systems that run WordPress.org and they appear to be working well, despite hundreds of hack attempts after we publicly disclosed there had been a problem. We are also now aggressively monitoring all downloads for any changes or modifications, and we are confident the same type of problem won’t happen again.

My response: too little, too late.

---
title: WordPress flaw
tags: blog
---

So a new [WordPress](http://www.wincent.com/knowledge-base/WordPress) release is out with the usual [spin](http://wordpress.org/development/2007/06/wordpress-221/):

> Since 2.2 was released a month ago, the WordPress community has been improving fit-and-finish by identifying and fixing those little bugs that can be so annoying and by fine-tuning some small details. The result is a nicely polished 2.2.1 release.

But wait, there's more! A little further down we see:

> Unfortunately, 2.2.1 is not just a bug fix release. Some security issues came to light during 2.2.1 development, making 2.2.1 a required upgrade.

This is not the first [security disgrace](http://www.wincent.com/a/about/wincent/weblog/archives/2007/04/wordpress_213_b.php) for [WordPress](http://www.wincent.com/knowledge-base/WordPress) and it's exactly this kind of flaw which makes it impossible to recommend [WordPress](http://www.wincent.com/knowledge-base/WordPress) as a public-facing [web](http://www.wincent.com/knowledge-base/web) application. In fact, it's not just that I can't recommend installing it; it's that it would be irresponsible to do anything but recommend that people *uninstall* it.

An [exploit](http://www.milw0rm.com/exploits/4039) for one of the flaws was published on 6 June. The exploit demonstrates how any user with an account can get the login names, password hashes, and authentication cookies for *every user in the database*. The exploit describes the flaw as "bastante tonto por cierto" ("pretty dumb, that's for sure").

The flaw was publicly disclosed on 6 June. It turns out that the security researcher in question privately notified the WordPress developers beforehand, and a [patch](http://trac.wordpress.org/changeset/5570) was checked into the trunk on 28 May.

Comments on the [corresponding ticket](http://trac.wordpress.org/ticket/4357) show that by 8 June the WordPress team knew that the flaw and exploit was known to be "Now widely published". Yet they waited until 21 June to prepare a new release.

This flaw should never have crept into the code base; it's an elementary [SQL](http://www.wincent.com/knowledge-base/SQL) injection attack. And once in the code base, it should have been caught by review. But it didn't get caught, and the WordPress team sat on the fix for nearly a month before advising people to upgrade; during just over two of those weeks an exploit was widely disseminated.

Even though the new release is now out, many won't upgrade and there will be countless script kiddies using [Google](http://www.wincent.com/knowledge-base/Google) to [find vulnerable installs](http://kev.coolcavemen.com/2007/06/wordpress-22-security-hole-identity-theft/). A friend of mine got bitten by this recently when someone walked in and took over his install using a exploit for a long-since-patched hole; he simply didn't realize that you had to upgrade WordPress regularly or risk getting owned. He didn't realize that when you install a public-facing web application it's like choosing a lock for your house; it's a good idea to choose carefully.

All of this leads to one simple conclusion: if you want install to WordPress on a public-facing web server, don't. And if you insist on installing it, then you need to watch the [trac](http://trac.wordpress.org/) like a hawk and be ready to patch faulty files as soon as flaws are discovered, because the WordPress team simply doesn't take security seriously. Even then you won't be safe because there will always be undiscovered flaws and you never know when someone might come knocking. I am not the only one who [thinks this](http://fukamachi.org/wp/2007/06/21/yet-another-wordpress-exploit/).

If you do want to install [weblog](http://www.wincent.com/knowledge-base/weblog) software, I recommend [Movable Type](http://www.wincent.com/knowledge-base/Movable%20Type). It is possible to set up a very secure install if you don't need things like comments (see "[Movable Type security notes](http://www.wincent.com/knowledge-base/Movable%20Type%20security%20notes)"). If you do, well, you should probably just use [Blogger](http://blogger.com/).

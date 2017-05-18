---
title: WordPress follow-up
tags: blog
---

A few people have contacted me with comments about my [article on WordPress](http://www.wincent.com/a/about/wincent/weblog/archives/2007/06/wordpress_flaw.php), and among other things it ended up getting linked to on a series of sites ([1](http://mjtsai.com/blog/2007/06/21/wordpress-flaw/), [2](http://daringfireball.net/linked/), [3](http://photomatt.net/2007/06/22/on-wp-security/)) with [successively](http://www.alexa.com/data/details/traffic_details?url=mjtsai.com%2F) [higher](http://www.alexa.com/data/details/traffic_details?url=daringfireball.net%2F) [traffic](http://www.alexa.com/data/details/traffic_details?url=http%3A%2F%2Fphotomatt.net%2F) rankings, ultimately reaching the weblog of [WordPress](http://www.wincent.com/knowledge-base/WordPress) creator, Matthew Mullenweg, the [most important Matt](http://photomatt.net/about/) on the Internet (&lt;irony&gt;incidentally, I am the [most important Wincent](http://www.google.com/search?q=wincent), did you know?&lt;/irony&gt;).

Matt makes a number of valid points which I don't disagree with, such as:

-   The likely number of people affected by the latest bugs ("an incredibly small percentage of the millions of WordPresses out there").
-   "Getting people to upgrade web software is hard."

But there are a couple of things I want to clarify. Matt seems to have missed my single major gripe about WordPress, and I don't blame him for not seeing it as you really need to have taken this alongside my [previous post](http://www.wincent.com/a/about/wincent/weblog/archives/2007/04/wordpress_213_b.php) on WordPress. Let me explain.

He says, "I think the real issue though is not that WP has bugs which are sometimes security related ... but that the mechanisms for updating complex web software are a pain."

Totally true, all software has bugs. Also true that updating web software is a pain. But that's not my complaint. My complaint is that the WordPress team needs to improve their *process*.

> I suppose we could act more like our proprietary competitors and try to downplay or hide security issues instead of trumpeting them loudly in our blog, but I think the benefit of having people well-informed outweighs the PR lumps we take for doing the right thing.

I wouldn't accuse the WordPress team of hiding security issues (although I *do* believe that they downplay them), but I *do* think they need to change what they're doing. My beliefs on this are pretty much exactly what I said [last time](http://www.wincent.com/a/about/wincent/weblog/archives/2007/04/wordpress_213_b.php):

> The WordPress team needs to change the way they work with respect to security. This is a very popular, public-facing web application. Instead of springing these forced security updates ("upgrade now or else") on the masses they should do three or four things:
>
> 1.  Adopt a regular, public update schedule for security updates so that people can plan and be ready for security updates. Something simple like "first Tuesday of every month".
> 2.  Have a core-team-only security branch which is merged into the publicly-viewable branches only just before release. More on this point below.
> 3.  Implement a mandatory review process in which every single check-in must pass a security review by another team member; this security-specific review should be in addition to any existing review procedures they might have (emphasis on the might).
> 4.  Appoint a security officer whose responsibilities include a coordinating regular, pro-active audits of the code base.

[Open source](http://www.wincent.com/knowledge-base/Open%20source) is great, but that doesn't mean that total transparency at every single moment is the best thing. Consider one of the iconic open source stars, the [Mozilla](http://www.wincent.com/knowledge-base/Mozilla) project: almost everything is out in the open but security issues are tracked privately and only exposed to the public eye *after* the release of the updated software containing the fix. They do this because they know that attackers would otherwise mine the [Bugzilla database](http://bugzilla.mozilla.org) looking for information that will help them craft exploits.

This approach would be doubly appropriate for WordPress because unlike a web browser, a WordPress weblog is always on, always exposed. No exploit can attack a flawed copy of Firefox if your computer is turned off and you're living it up in a disco in Ibiza; but if you're running WordPress and go off on a camping trip then your server is beyond your reach, naked, on the Internet with nothing but the guarantees of the WordPress team that the code has been audited and is hopefully vulnerability free, "fingers crossed".

This, combined with a regular release schedule, would make the pain of upgrading much easier to plan for and accommodate. And as Sho Fukamachi [writes](http://fukamachi.org/wp/2007/06/21/yet-another-wordpress-exploit/), if you upgrade via [Subversion](http://www.wincent.com/knowledge-base/Subversion) then it's really not that difficult (for tips on doing this, see "[Upgrading WordPress using Subversion](http://www.wincent.com/knowledge-base/Upgrading%20WordPress%20using%20Subversion)").

One last thing; Matt says:

> Wincent Colaiuta has no problem throwing flames at WordPress, but doesn't see fit to enable comments. (Apparently disabled to make Movable Type more secure.)

It's not that I disabled comments *in order to* increase security; it's that I didn't want comments in the first place, and then *later* recognized that a side-effect of this was the possibility of locking down an installation. I understand that for many people comments are a quintessential part of weblogging — I myself have run weblogs in the past with comments enabled — but there are also plenty of examples of sites that explicitly choose not to enable comments because they're not looking for a "conversation" with anonymous strangers. [Daring Fireball](http://www.wincent.com/knowledge-base/Daring%20Fireball) is a relatively high-profile example of this latter school.

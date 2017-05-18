---
title: Responsible disclosure
tags: blog
---

[This time](http://projects.info-pull.com/moab/MOAB-09-01-2007.html) they actually did the right thing:

> \[W\]ait for Apple to release a fix (this issue has been reported to them circa a month ago).

But there has also been some [scandal](http://applefun.blogspot.com/2007/01/canary-trap-leak-and-mole.html) over the previous issue installing a "root kit". The page isn't very legibly written so here is the summary: the MOAB organizers set up a "canary trap" that included a simple back door (not a root kit); this trap caught only a small number of people who were trying to find out about the exploit *before* the advisory was made public; on downloading the back door (an unannounced executable, closed source, from an untrusted source who has already demonstrated somewhat unconventional ethical framework) they proceeded to execute the code.

Moral of the story: do not install and/or run software from untrusted third parties. This is not actually a new lesson at all, but it's worth underlining it right now, especially when you go beyond "untrusted" third parties and start talking about "distrusted" ones. If you want to play with the [MOAB](http://www.wincent.com/a/about/wincent/weblog/archives/2007/01/month_of_apple.php) vulnerabilities you should be doing it on a properly isolated machine, one which you're prepared to wipe clean and start from scratch with afterwards, and certainly not on a production machine. In fact, even reading the MOAB weblog and advisories, you may be wise to do so from within Firefox running inside a Parallels virtual machine, just in case they decide to "teach" a "remote 0wn4age" lesson before the month is up.

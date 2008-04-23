---
title: Frequently used Terminal commands
tags: bash zsh
---

Apparently this "meme" has been spreading rampantly for a while now, but I only just found out about it [here](http://blog.codefront.net/2008/04/18/command-history-meme/), [here](http://diveintomark.org/archives/2008/04/15/history-meme) and [here](http://benjamin.smedbergs.us/blog/2008-04-15/history-meme/).

The idea is to see what commands appear most frequently in your [Bash](/wiki/Bash) history using this command:

    history | awk '{a[$2]++}END{for(i in a){print a[i] " " i}}' | sort -rn | head

My results:

    4598 git
    641 cd
    585 ls
    438 rake
    284 less
    232 script/console
    188 cap
    148 ll
    140 perl
    118 irb

I was pretty surprised that [Capistrano](/wiki/Capistrano) (`cap`) and [perl](/wiki/perl) rank so highly. But this is because every time I do a [Rails](/wiki/Rails) deployment I end up doing a series of about 10 `cap` invocations (`staging deploy:check`, `staging deploy:update`, `staging deploy:migrate_all` `staging spec`, `staging deploy:restart`, and then the same all over again for the production environment). And the abundance of [perl](/wiki/perl) usage is due to the fact that I used it pretty heavily to do a find-and-replace over thousands-of-pages dump of the old wiki.

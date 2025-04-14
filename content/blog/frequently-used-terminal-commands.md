---
title: Frequently used Terminal commands
tags: bash zsh blog
cache_breaker: 1
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

# Update: January 2011

Just for laughs, here are the results from running the command again, almost two years later:

    5341 git
    1005 cd
    692 ls
    369 less
    220 open
    163 bin/rspec
    161 man
    158 m
    124 bundle
    102 mv

Top 3 unchanged, `rake` completely gone (note that newcomer `bin/rspec` is probably responsible for that), `open` is surprisingly highly-ranked, `cap` gone (thank goodness), `m` ([MacVim](/wiki/MacVim) shortcut) and `bundle` are notable indices of how my software ecosystem has changed.

# Update: July 2011

Fairly big changes over the last months:

    5635 git
    837 ack
    626 less
    487 cd
    396 ls
    212 ssh
    121 m
    121 clear
    115 put
    85 vim

Less `cd` as I am tending to stick in one project directory and working on it for longer. `ssh` is way up as I am working on other hosts a lot more.

Here's the output on the host that I spend most time on:

    1711 git
    868 bundle
    837 cd
    419 less
    367 ls
    301 script/console
    270 ruby
    237 clear
    214 ack
    161 fg

All those `bundle` calls are from running things like `bundle exec` with things like `spec`, `rake` and `mongrel_rails`.

# Update: February 2013

Another couple of years pass. Now that I'm on [Zsh](/wiki/Zsh) where `history` outputs only a handful of recent items by default, I've added a numerical param to it:

```shell
$ history -100000 | awk '{a[$2]++}END{for(i in a){print a[i] " " i}}' | sort -rn | head
```

Work machine:

    6134 git
    3524 ack
    1142 less
    676 ssh
    429 cd
    361 specr # wrapper around rspec
    323 be    # this is an alias for `bundle exec`
    318 rm
    297 vim
    270 bundle

Laptop:

    1007 git
    398 cd
    312 less
    274 ssh
    124 ls
    123 rm
    114 vim
    111 scp
    109 ack
    105 cat

No wonder people feel emotionally attached to Git, if it's our most frequently used tool by such an enormous margin.

# Update: October 2015

## Laptop

    3586 git  # Undefeated world champion.
    672 less  # 2nd, up from 3rd.
    345 vim   # Highest ever showing (3rd, up from 7th).
    339 cd    # Down to 4th, from 2nd.
    284 ls    # Steady 5th, despite Zsh hook that auto-lists on cd.
    259 rm    # Steady 6th; I like to delete.
    232 npm   # Goodbye Rails, hello JS ecosystem.
    230 ag    # ack, dethroned
    157 man   # Apparently RTFM-ing more than ever.
    146 find

## Work sandbox

    3033 hg        # So sad.
    1801 tbgs      # (Work) search tool.
    931 less
    623 ag         # Big code base = more searching.
    511 arc
    452 git
    394 tgrep      # Alias wrapper around ag.
    363 find|grep  # More searching: where/what is that file?
    335 ls         # Less poking around, more time in (long-running) editor.
    302 tgrepd     # Another alias wrapper around ag.

# Update: November 2018

Note the need to tweak the command for my current Zsh configuration, otherwise `history` doesn't show the full command list; `fc -l 1` would also work:

```bash
history 0 $HISTSIZE | awk '{a[$2]++}END{for(i in a){print a[i] " " i}}' | sort -rn | head
```

The results:

```
824 git
173 less
166 cd
153 yarn
101 vim
81 man
75 brew
72 ls
65 rm
56 npm
```

Numbers are lower than before despite my `$HISTSIZE` being 100,000. It is probably because of my use of `histignorealldups`, which I am now questioning the usefulness of. I think `histfindnodups` is probably much closer to what I want.

# Update: February 2019

Having tweaked my shell settings I can now report a more illustrative example. This one from my personal laptop:

```
4890 git
2034 yarn # using yarn to run scripts in projects
856 vim # open up mostly long-lived vim sessions
726 cd
535 less
480 exit # always opening and closing tmux splits
358 ls
299 ll # alias for `ls -laF`
250 o # alias for `git log --oneline` with a few other options added
222 man
```

# Update: March 2020

I have been running with `NO_HIST_IGNORE_ALL_DUPS`, `NO_HIST_IGNORE_DUPS` and `HIST_FIND_NO_DUPS` for a while so have captured some more "exhaustive" data (ie. includes duplicates, so really counts all usage):

```
# Personal machine
12919 git
 5951 yarn      # mostly running scripts in projects
 2583 vim
 1782 cd
 1650 exit      # `exit` now beats `less`
 1094 less      # (last time, `less` beat `exit`)
  602 ls
  587 ll        # alias for `ls -laF`
  585 o         # alias for `git log --oneline`
  548 t         # "tmux" wrapper, knocking "man" out of 10th place


# Work machine
43359 git       # new job, so no more `hg`
 8015 yarn      # mostly running scripts in projects
 6239 cd
 5655 portool   # tool that wraps up a bunch of common work operations
 4314 exit
 3657 vim       # Vim sessions tend to be long-lived
 2888 less
 1927 npm
 1721 o         # alias for `git log --oneline`
 1395 ls
```

Observations:

-   Clearly doing more on work machine than personal machine.
-   I'm going to get rid of `NO_HIST_IGNORE_DUPS` because the consecutive duplicates are driving me up the wall when I hit "up" in the terminal (`HIST_FIND_NO_DUPS` stops you from seeing duplicates when you _search_, but just tapping "up" is not considered a search), so that will affect the numbers somewhat next time around.

# Update: July 2021

```
# Personal machine
20379 git
6582 yarn
4602 vim       # Alias -> `nvim`
2986 cd
2927 exit
1624 less
1237 ll        # Alias -> `ls -laF`
963 o          # Alias -> `git oneline` -> `git --paginate log --pretty=format:'%C(auto)%h%Creset %s%C(auto)%d%Creset %C(magenta bold)(%cr)%Creset %C(cyan)<%aN>%Creset'`
866 ls
839 t          # Wrapper for `tmux`.
```

And here are some interesting entries from outside of the top-10; these produced with `history 0 $HISTSIZE | awk '{a[$2]++}END{for(i in a){print a[i] " " i}}' | sort -rn | cat -n` — the number on the left is the position within the list:

```
 12  721 man     # 721 instances of bad memory.
   ...
 17  459 tree    # A beautiful tool!
   ...
 18  347 brew    # Surprised this one is so high as I'm scared of running it.
   ...
 26  262 ssh     # Relatively rare on this machine nowadays.
   ...
 31  192 \vim    # 192 times I've bypassed my vim -> nvim alias
   ...
 37  166 sudo    # Again, surprised how rarely I do this.
   ...
 39  159 rg      # Would be more frequent, but I mostly search from inside Vim.
   ...
 44  135 hledger # A new toy.
   ...
 79  54 curl     # Fetching things, peeking at headers vs...
 95  37 wget     # Actually downloading things.
   ...
100  35 watch    # 100th place on the list!
   ...
212  10 prettier # Rarely run outside of `yarn`.
   ...
317  4 whoami    # Rare existential crises.
   ...
394  2 xattr     # The least popular tool I've used multiple times.
```

# Update: April 2025

```
# Work machine (after 10 months on this machine)
12902 git
2494 exit
2276 vim      # Alias → `nvim`
1389 cd
1099 yarn
935 e         # Alias → `exit`
641 brew
419 t         # Alias → `tmux`
417 tmux
382 oo        # Alias → `git --paginate log --pretty=format:'%C(auto)%h%Creset %s%C(auto)%d%Creset %C(magenta bold)(%cr)%Creset %C(cyan)<%aN>%Creset' -10`
```

Not much has changed here; the main new thing I'd note is that I run `brew update` and `brew upgrade`/`brew cleanup`/`brew doctor` basically daily now, whereas I used to run it only rarely.

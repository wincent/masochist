---
title: Looking for a more pleasant man-page authoring solution
tags: perl documentation blog
cache_breaker: 1
---

I've written [man pages](/wiki/man_pages) before. It's horrible. Just [look at this syntax](http://git.wincent.com/wincent-strings-util.git?a=blob_plain;f=wincent-strings-util.1;hb=HEAD).

I have to write a new man page from scratch for another product and I'm wondering if there is a less unpleasant way of producing these things.

I know that the [Git](/wiki/Git) man pages, for example, are written using [AsciiDoc](/wiki/AsciiDoc), principally because the markup is easy to write, easy to read, and can produce the desired output formats (man pages and [HTML](/wiki/HTML)). The downside is that setting up the tool chain to produce those outputs is *absolutely horrible*, at least on [Mac OS X](/wiki/Mac_OS_X). I don't want to go down that path again. Been there and done that; it's horrible (see "[Setting up the Git documentation build chain on Mac OS X Leopard](/wiki/Setting_up_the_Git_documentation_build_chain_on_Mac_OS_X_Leopard)").

So I'm wondering if a quick [Google](/wiki/Google) search will turn up anything useful. If I can't find anything by lunchtime I think I'll just have to grin and bear it and produce the man page the old fashioned way.

**Update (10 minutes later):** [The idea](http://linuxgazette.net/issue32/lg_tips32.html#siew) of writing the man page in the [Perl](/wiki/Perl) Pod format and converting it into a man page using `pod2man` is probably a pretty good option.

**Update (4 hours later):** After playing with `pod2man` for a while it looks like it's definitely the best option for writing simple [man pages](/wiki/man_pages); the markup is very easy to learn and the output formatting is quite neat.

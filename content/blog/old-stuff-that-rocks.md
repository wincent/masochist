---
tags: unix
title: Old stuff that rocks
hn: https://news.ycombinator.com/item?id=10712482
fb: https://www.facebook.com/glh/posts/10153075891566307
reddit: https://www.reddit.com/r/programming/comments/3wajm6/old_stuff_that_rocks/
twitter: https://twitter.com/wincent/status/675019312495640576
---

The other day I [tweeted](https://twitter.com/wincent/status/672894777541525504):

> So much software is new (< 2 years) and probably won't last 2 more.
>
> I get a kick out of using old stuff.
>
> eg rsync. 20 years. Still useful.

That got me to thinking about other cool stuff that has endured over the years. Here's a short timeline. Criteria to get on the list: must be at least 10 years old, with a reasonable prognosis of sticking around for much longer:

* [__Git__](/wiki/Git) (2005)
* [__OS X__](/wiki/OS_X) (2001)
* [__SSH__](/wiki/SSH) (1999)
* [__curl__](/wiki/curl) (1997)
* [__rsync__](/wiki/rsync) (1996)
* [__Vim__](/wiki/Vim) (1991)
* [__Cron__](/wiki/Cron) (1979)
* [__tar__](/wiki/tar) (1979)
* [__vi__](/wiki/vi) (1976)
* [__grep__](/wiki/grep) (1973)
* [__Unix__](/wiki/UNIX) (1970)

So both the 70s and the 90s were great decades for computing. Not sure what happened in the 80s as I struggled to find anything there; perhaps we were all just off playing video games. Feels odd to think that some of these are four decades old now, nearly as long as computing itself (or at least, what we'd recognize as "computing"). Vi will turn 40 next year. Grep 43. And despite the existence of some spiritual successors like [Ack](/wiki/Ack) and friends, it's still just as useful &mdash; indispensable even &mdash; as ever.

# What about `$my_favorite_language`?

Notable omissions from the above are languages. They come and go, and even the ones that stick around tend to change so much over time that I'm not sure it's really fair to call them the same language any more (a particularly stark example of this would be a comparison of original 1995 and current 2015 JavaScript). At the same time, I've learnt quite a few of them over the years and there is a certain sameness and a sense of substitutability about them that makes them seem somehow unremarkable. 

Nevertheless, if, for the sake of the argument, we take a glance at some of the notable languages, here again we see that the 90s was a particularly productive era:

* OCaml (1996)
* Ruby (1995)
* PHP (1995)
* Java (1995)
* JavaScript (1995)
* Lua (1993)
* Python (1991)
* Haskell (1990)
* Perl (1987)
* Erlang (1986)
* Objective-C (1986)

Most of these languages are still thriving today, to [greater](/wiki/JavaScript) or [lesser](/wiki/Perl) degrees. If we look at the more recent generation of new languages, how confident can we be that they'll be "mainstream" 10 years from now? I'm not a gambler, but if I were I'd probably put my money on about half of these:

* Dart (2013)
* Elm (2012)
* Elixir (2012)
* Rust (2010)
* Go (2009)
* Clojure (2007)

# Notable omissions

## Apache and nginx

[Apache](/wiki/nginx) (1995) has long dominated the web server landscape, but over time its market share has gradually been eroded by competitors like [nginx](/wiki/nginx) (2004). It is definitely still relevant (hosting 37% of all sites among a sample of nearly a billion, as per the [November 2015 Netcraft Web Server Survey](http://news.netcraft.com/archives/2015/11/16/november-2015-web-server-survey.html)), but the picture painted by the graphs on [this page](http://news.netcraft.com/archives/2015/11/16/november-2015-web-server-survey.html) explains why Apache didn't make the list. Of all the servers represented, nginx is the only one making consistent progress, but that doesn't make the list either because it still has a ways to go.

A web server is an incredibly complex, multi-faceted tool. Most couldn't be said to embody ["the Unix Philosophy"](https://en.wikipedia.org/wiki/Unix_philosophy). I think this is why it's much easier for a tool like Curl (which can be used to retrieve web content) than one like Apache (that serves content) to establish itself as an undisputed and indispensable part of our toolkits.

## Compression algorithms

Gzip (1992) is ubiquitous, predictable, and incredibly useful. The content you're reading now is compressed using gzip. Yet it doesn't make the list. The reason is that, despite gzip's clear merits, compression is an area in which we always want to do better. As such, there is a proliferation of [alternative formats and tools](https://en.wikipedia.org/wiki/List_of_archive_formats), and I expect that more will be produced in the future, possibly indefinitely.

In short there is no single "preeminent" compression solution, and there probably never will be, so rather than picking a particularly successful one and adding it to the list, I am leaving it off. Consider gzip an "honorable mention".

## Build tools

[Make](/wiki/Make) (1977) is a build tool. Much of what I wrote about gzip could apply here too. It's powerful, available everywhere, and used pervasively. Yet enough people have been frustrated by its limitations that it has been emulated, extended or replaced [literally dozens of times](https://en.wikipedia.org/wiki/List_of_build_automation_software).

I still use Make today, and will use it again in the future, but I will also use other build tools where appropriate, and Make doesn't make the list.

## Configuration management

Another bustling, churning ecosystem, populated by the likes of [Puppet](/wiki/Puppet) (2005), [Chef](/wiki/Chef) (2009) and [many others](https://en.wikipedia.org/wiki/Comparison_of_open-source_configuration_management_software). I've used both of the former, but of late have switched to [Ansible](/wiki/Ansible) (2012) and been very happy with it.

Nevertheless, Ansible is too young to make the list, and the rate of change and proliferation in this space definitely clouds its future. Who knows what we'll be using for this 10 years from now? Not even Yoda. It does seem, however, reasonable to predict that we won't have arrived at consensus and settled on any One True Configuration Management Tool.

# Parting words

Thanks for joining me on this rambling, nostalgic journey among some "old stuff that rocks". I hope that I can find more of this stuff, and that we collectively can continue to make _new_ old stuff that rocks for us and future generations of technology users.

<small><em>Discuss: [Facebook](https://www.facebook.com/glh/posts/10153075891566307) - [Hacker News](https://news.ycombinator.com/item?id=10712482) - [Reddit](https://www.reddit.com/r/programming/comments/3wajm6/old_stuff_that_rocks/) - [Twitter](https://twitter.com/wincent/status/675019312495640576)</em></small>

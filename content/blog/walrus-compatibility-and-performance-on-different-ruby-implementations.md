---
title: Walrus compatibility and performance on different Ruby implementations
tags: walrus blog
cache_breaker: 1
---

For the longest time I only ever ran [Walrus](/wiki/Walrus) on the stock [Ruby](/wiki/Ruby) that ships with [Mac OS X](/wiki/Mac_OS_X). As of [Snow Leopard](/wiki/Snow_Leopard), that currently means Ruby 1.8.7 ([MRI](/wiki/MRI)).

The MRI [garbage collector](/wiki/garbage_collector) has a number of well-known flaws that are sorely felt by Walrus because the memoizing "[packrat](/wiki/packrat)" parser that it uses is particularly greedy with memory, by design; all packrat parsers are built on the idea of trading "space for time".

Combine this memory-greediness with a bug in which [MRI](/wiki/MRI) won't return memory to the system and you have a crippling memory bloat problem when batch processing large numbers of templates. I've been living with this bug for years now, and processing batches by invoking `walrus compile some-file.tmpl` multiple times from a script rather than doing `walrus compile *.tmpl`.

In recent days I've been working on compatibility with Ruby 1.9 and JRuby, and was curious to see what performance and memory characteristics the different implementations had when batch processing templates with Walrus. I also threw "[Ruby Enterprise Edition](/wiki/Ruby_Enterprise_Edition)" (REE) into the mix.

# MRI

I'm not going to post numbers for MRI here because, due to the crippling memory bloat problem, it is not possible to actually batch process all the templates at once using `walrus compile *.tmpl`; memory usage just climbs and climbs until the entire physical memory (2GB on this machine) is saturated and the virtual memory subsystem is thrashing.

It's true that the batch run *would* eventually finish if I let it run for long enough, but I'm afraid I have too many useful things to do with my machine to permit rendering it unusable for minutes or hours while I wait for the batch job to finish.

# JRuby

JRuby is the speed and memory king here, having the most mature memory subsystem and garbage collector of all the implementations. Even if it weren't relatively fast in terms of processing speed, it would still win impressively because this performance equation is dominated by memory characteristics: JRuby's better memory footprint and more efficient garbage collection have a huge impact here.

    JRuby compile:*
      real	0m28.783s
      user	0m52.509s
      sys	0m1.328s

    JRuby fill:*
      real	0m23.269s
      user	0m34.616s
      sys	0m1.198s

Memory usage climbs up to around 300MB during the the early stages of the run, and peaks at about 500MB after compiling the nastiest of the templates.

It's not all a bed of roses, however. At this stage there are still some glitches and bugs to be ironed out under JRuby, as compiling "works" but there are a number of discrepancies in the output compared to the other implementations. This is also why the "fill" time is so high for JRuby, because some of the templates miscompile and so `walrus fill` is obliged to recompile them.

# 1.9.1

    1.9.1 compile:

      real	2m51.184s
      user	2m48.359s
      sys	0m3.030s

    1.9.1 fill:

      real	0m6.823s
      user	0m5.487s
      sys	0m1.263s

Pleasingly, 1.9.1 evidently no longer suffers from the crippling GC bug that MRI did. Memory usage climbs to around 900MB by the time it gets to the nastiest file (the full index), dropping back to about 800MB after that, and finally creeping up to 1GB as the remaining templates are compiled.

# REE (1.8.7)

    REE (1.8.7) compile:*

      real	1m17.396s
      user	1m14.585s
      sys	0m2.801s

    REE (1.8.7) fill:*

      real	0m3.692s
      user	0m2.892s
      sys	0m0.713s

This one was the real surprise for me. REE evidently has much better memory characteristics than 1.9.1, at least for this testing scenario. Despite being a "slower" VM in terms of raw processing power, the REE build of 1.8.7 ends up wiping the floor with 1.9.1.

The [REE website](http://www.rubyenterpriseedition.com/) says that it includes a better (higher performance) memory allocator, [TCMalloc](http://code.google.com/p/google-perftools/), and a "copy-on-write friendly garbage collector". Whatever the reason, the impact is huge for a memory-intensive application like a Walrus and its memoizing packrat parser. (In a typical run literally *millions* of string objects are created, as shown in [this memprof dump](http://memprof.com/dump/4c77fdc37fdeb64582000001).)

Peak memory usage was around 1GB for the nasty full index file, but then it dropped back to under 400MB after that and stayed that low for the remainder of the run.

---
title: Bringing TextMate-style "Command-T" to VIM
tags: ruby textmate vim command.t blog
cache_breaker: 1
---

What is the best feature of [TextMate](/wiki/TextMate), the one that no other text editor comes close to matching?

Is it the project drawer? Probably not. For large projects the drawer becomes quite cumbersome, many other editors actually do have a comparable feature anyway, and there are better alternatives for quickly opening files.

Is it the ability to extend and customize using bundles? Probably not that either. Both venerable editors like [VIM](/wiki/VIM) and [Emacs](/wiki/Emacs), as well as many of their younger siblings, sport extensive plug-in and customization systems.

For me the missing link has always been the "Command-T" or "Go to File" feature. Of all the quick-file-access mechanisms I've ever tried in editors, the TextMate one was the nicest.

A while back I [did look into alternatives](/blog/fuzzyfinder) for my editor of choice, [VIM](/wiki/VIM), but there weren't any satisfactory solutions. Finally I decided to get moving and solve the problem once and for all with a plug-in of my own design.

# Development thoughts

As my knowledge of vimscript (the built-in scripting language of [VIM](/wiki/VIM)) is very limited, I decided to at least prototype the plug-in in [Ruby](/wiki/Ruby) despite the fact that the latter has a reputation for being slow.

Sure enough, I found that performance was fine for small projects but sluggish for bigger ones (over about 5,000 files) and next to unusable for enormous directories (like my home directory which has half a million files in it).

Ironically, despite being initially slow, Ruby actually offers one of the better performance optimization pathways: you can analyze the slow parts of the program and selectively port them to [C](/wiki/C) in the form of an extension.

I decided to do this rather than pursue the unknown avenue of porting the Ruby parts gradually over to vimscript itself. Due to my lack of experience with vimscript I really didn't know if it would be worth it, whereas with C I *knew* the speedups would be tremendous.

The downside of this is that distribution might be a little trickier. I was planning on distributing it as a "vimball", but now I might have to split it up into an easy-to-install vimball which depends on a separate, easy-to-install [gem](/wiki/gem).

# The future

Even though performance is already excellent, I may as well keep going and port over to [C](/wiki/C) the remaining performance-critical sections of the code. Keep your eyes on this space for a release announcement in the near future.

## Update (a couple hours later)

I've ported over one other class — the one that does the sorting of matched items — and the plug-in is now insanely fast (instant results, as fast as you can type), even for ridiculous workloads like the half-a-million-file home directory case. So at this point I am gonna stop working on performance and start tying up lose ends like documentation, configuration options, and packaging for release.

## Update (12 April 2010)

Over the last weeks I've published several releases via [the plug-in's page](http://www.vim.org/scripts/script.php?script_id=3025) at www.vim.org, and the [official product page](/products/command-t) is now up on this site with some new screencasts.

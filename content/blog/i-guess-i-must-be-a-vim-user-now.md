---
title: I guess I must be a Vim user now
tags: vim
cache_breaker: 1
---

After being an occasional [vi](/wiki/vi) user for over a decade, on 16 January this year [I decided](/blog/0-minutes-with-vim) to give [Vim](/wiki/Vim) a proper try as a possible candidate for duties as my full-time coding editor (this after a decent [trial](/blog/trying-emacs) of [Emacs](/wiki/Emacs) in the prior weeks).

I pretty much took an instant liking to it, but I wasn't really *sure* that it would end up being my full-time editor. I played around with [Vim Xcode integration](/wiki/Vim_Xcode_integration), for example, but still found myself doing a lot of editing within [Xcode](/wiki/Xcode) itself rather than jumping out into [Vim](/wiki/Vim) in a disciplined fashion.

Since then I've found myself getting more and more attached to Vim and spending less and less time in Xcode. Basically, if I have to do anything more than edit a couple of characters in a file then I break out Vim as an external editor and do my editing in there. Things like `dd` are just too darn comfortable now.

I've also been gradually beating my `~/.vimrc` into shape to the point where it allows me to edit [C](/wiki/C), [Ruby](/wiki/Ruby) *and* plain text in an equally comfortable fashion. Funnily enough it's that last one, editing plain text, which was the last card to fall (basically because plain text often has long lines and relies on soft-wrapping, and I needed some adequate vimrc-fu to make that happen in a nice way).

So I think I am a real Vim user now. The real clue is that when I find myself editing in another editor I am constantly firing off rapid `ESC :w` sequences. In Xcode, at least, that means I'm constantly summoning up the code completion pop-up without meaning to and filling my document with unwanted `:w` turds. I think all vi users have experienced this. When it starts happening to you not once but five or ten times in a single minute that's when you know you've found your new editor and can probably never go back.

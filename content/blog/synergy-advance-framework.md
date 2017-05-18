---
title: Synergy Advance framework
tags: blog
---

From the very beginning I've wanted [Synergy Advance](http://www.wincent.com/a/products/synergy-advance/) to be as modular as possible to maximize code reuse and make it easily extensible. The first thing I started by doing was splitting off code into reusable frameworks. The need to make the code reusable imposes a discipline that obliges you to think about writing a good API that will be useful in the general case. I now have a number of such frameworks: WODebug (the lowest-level framework), WOHotKey (hot key support), WOBezel (bezel windows), WOTest (unit testing) and WOBase (everything else, this is the most general of the frameworks). I've already used some of these in my other products (like [WinHex](http://www.wincent.com/a/products/winhex/) and [WinSwitch](http://www.wincent.com/a/products/winswitch/)).

At a design level it also means that I try to insulate things by using abstraction layers. Synergy Advance doesn't need to know that it's talking to iTunes, only that it's talking to a media player. This opens up the possibility of making Synergy Advance work with other players. Same goes for the iChat support; it's all done through abstraction layers.

The goal of extensibility also means that plug-ins are important. They also make the code more maintainable because they keep the core functionality limited to a manageable size. Although in the preview releases so far I haven't split things up into too many pieces, at a source code level the program is very modular and ready to be split up.

Today I did some refactoring that will make it easy for third-parties to write plug-ins to extend the functionality of Synergy Advance. Basically, I looked at some of the code in Synergy Advance itself and thought, this is the kind of code that could be directly useful to plug-in authors. So I took that code and split it off into a framework of its own, "Synergy Advance.framework". Plug-in authors can write plug-ins that link against the framework and can perform common tasks without having to reinvent the wheel. The framework itself will most likely remain closed source, but I think I'll make the headers available to plug-in authors so they can get the benefit of the framework and link against it without having to do any reverse engineering.

We'll see how this works when I put out the next public preview release (hopefully very soon, just wanting to tie up some lose ends on it before I put it out there). Basically I'll put some of the functionality into plug-ins to make sure the whole thing works.

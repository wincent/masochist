---
title: Maximizing windows in Vim
tags: vim blog
---

I often work with a lot of splits, but sometimes you just want to focus on one file. This is especially true if you move from a large external display back to your laptop's internal screen. Suddenly your matrix of six 85-by-30 windows shrinks down to a collection of unusable 30-by-15 postage stamps.

So what I want is a way to *temporarily* maximize the current tab, and I don't want to take the one-way ticket that is `:on`.

I considered making a mapping that would effectively toggle between a maximized state (`CTRL-W |` and `CTRL-W _`) and everything-equal state (`CTRL-W =`), but that doesn't play well with special windows like NERDTree; they get squished during maximization but never get unsquished when you try to reverse the process.

I could make a heavyweight function to save and restore all window positions; I've seen examples of this going as far as saving pretty much *all* state using `:mks`, but that feels a bit too heavy-handed for me.

Finally I end up just doing a simple `:tabe %`, which allows you to pop out into a new tab temporarily (unlike `CTRL-W T` which actually *moves* the current window out into a new tab). When you're done, just close the tab.

---
title: Syntax coloring shoot-out
tags: textmate emacs bbedit vim blog
cache_breaker: 1
---

As a follow-up to the [comments](/blog/trying-emacs) on Emacs that I posted earlier, I thought I'd check out how BBEdit is doing lately, seeing as a new version is out (9.1) and that latest I'd seen was 8.7.2.

Well, there's been big progress in a lot of areas.

Disk browsers and multi-file find results are now much more useful, and on a par with TextMate because you can finally edit files in-place rather than spawn editors in new windows. The interface is still clunky in some ways (the preferences, for example, are overly complicated, and the multifile find suffers from having an overly large initial dialog and a separate results window), but things like the addition of Projects really are a leap forward.

But there's one area in which BBEdit continues to suck, and badly: syntax coloring. Witness the following comparison between BBEdit, Emacs, and TextMate.

If you look at the sample from BBEdit (below), you'll see that the text is almost entirely black. You can barely call this syntax coloring at all. Basically the only things colored are are language keywords (`if`, `return`), a few types (`int`, `char`, `long`), but notably not others (`VALUE`, `token_t`), string literals, and comments.

I personally find this undifferentiated mass of black text to be very hard to look at for any length of time. BBEdit could be the best text editor in the world, and it is a very good editor, but with that syntax coloring I just can't consider using it.

![bbedit-syntax-coloring.png](/system/images/bbedit-syntax-coloring.png)

Moving on to Emacs, and things are literally worlds away (as always with Emacs). It gets the same things right that BBEdit does, but also catches all the types that BBEdit missed, as well as colorizing variable names.

I personally also find the clean, not-antialiased Monaco font much nicer on the eyes, even though the new default font included in BBEdit (Consola Regular) does have a kind of smooth attractiveness. I also prefer the color scheme.

![emacs-syntax-coloring.png](/system/images/emacs-syntax-coloring.png)

The last contestant is TextMate. It misses out on a couple things that Emacs acts upon (the same types that BBEdit failed to highlight, and variable names), but does do one thing that Emacs didn't do: highlight function and macro names. I'm not really sure I like the use of boldface for the latter elements, however.

![textmate-syntax-coloring.png](/system/images/textmate-syntax-coloring.png)

So my personal, subjective ranking of these for both attractiveness and usability is Emacs coming out on top, TextMate a satisfactory second place, and BBEdit trailing far, far behind. And notably, it is precisely Emacs and TextMate which offer the most flexibility for using alternate themes and tweaking things to appeal to your personal aesthetic judgement; whereas BBEdit offers all too few means of addressing its weaknesses (you're left to tweaking the few color options that are available to you; you can't actually improve the highlighting at a syntactic level without delving into writing a C plug-in).

Finally, although the sample screenshots don't show it, I've seen a lot more cases of incorrect highlighting in BBEdit than in the other editors, particularly involving quoted strings, regular expressions, and heavy interpolation. I've seldom seen TextMate trip up in that area, and I've yet to see Emacs trip up at all (although remember, I haven't been playing seriously with it for long).

### Update: 15 January 2009

Adding a [MacVim](/wiki/MacVim) screenshot for the sake of comparison. I've been using MacVim for about 120 seconds so the comparison isn't really totally fair; I'll post an updated screenshot when and if I find out how to disable anti-aliasing, change fonts, and pick a color scheme that is comparable with the one used in the other screenshots.

But at a glance you can see that the amount of coloring is about the same as BBEdit, with the addition of numeric literals.

![macvim-syntax-coloring.png](/system/images/macvim-syntax-coloring.png)

### Update: 21 February 2009

I finally got around to posting an updated [MacVim](/wiki/MacVim) screenshot with similar colors and font settings.

![macvim-syntax-coloring-updated.png](/system/images/macvim-syntax-coloring-updated.png)

### Update: 30 January 2010

And here we are a year later.

![macvim-syntax-coloring-jan-2010.png](/system/images/macvim-syntax-coloring-jan-2010.png)

Not much has changed. The only real tweaks of interest are:

-   [use of more subtle coloring for end-of-line markers](/blog/making-vim-highlight-suspicious-characters)
-   [addition of (intentionally) jarring coloring for long and overlong lines](/blog/highlighting-overlength-lines-in-vim)

### Update: 5 February 2012

Two years later:

![vim-syntax-coloring-feb-2012.png](/system/images/vim-syntax-coloring-feb-2012.png)

Differences:

-   I'm now using [Vim](/wiki/Vim) in the [terminal](/wiki/terminal), generally inside a [tmux](/wiki/tmux) session
-   Now using the incredibly soothing and attractive [Solarized](/wiki/Solarized) color scheme
-   Using folding
-   Hand-rolled long-line highlighting replaced by Vim's `'colorcolumn'` feature (new in 7.3)
-   Current line highlighted (with `'cursorline'`)
-   After a stint with Consolas and a larger font size, I've settled on to Monaco, 12 pt, anti-aliased

### Update: 21 July 2015

Some three years or so later:

![vim-syntax-coloring-july-2015.png](/system/images/vim-syntax-coloring-july-2015.png)

Differences:

-   After years of Solarized usage, I switched to the dark "ocean" theme from Base16
-   More attractive long line highlighting
-   Italic support (even in the terminal)
-   Back to Consolas, now 13pt most of the time (and 15pt or more if I'm working with glasses, or on a bus with a bumpy ride etc); once I get a machine with a Retina display I think I'll take this down a notch
-   Still using folding, but less of it

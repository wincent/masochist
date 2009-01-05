---
title: Trying Emacs
tags: textmate emacs
---

[TextMate](/wiki/TextMate) is a great editor, but there are two things which annoy me about it.

The first is really just a missing feature: the inability to split editor views. Having spent a lot of time in [Xcode](/wiki/Xcode) one becomes used to these split views. They are a fantastic way to increase your productivity by allowing you to simultaneously view headers and implementations, class files and tests, log or test output and code, and so on.

But they're not a deal-breaker. You can live without them. It's a bit more cumbersome, but you can still work by switching back and forth between tabs, or by actually creating and juggling separate windows when required.

The second issue, however, is more than a feature problem; depending on how generous you feel you'd either have to call it a fatal design flaw or a terrible bug. I'm referring, of course, to the memory-hogging behaviour of the "Find in project" functionality.

From comments by the author, my understanding is that TextMate implements this feature by reading the contents of all files in the project into memory... *and leaving them there forever*. The inevitable consequence of this is that TextMate really only performs well on toy projects; if you throw something heavy at it it will rapidly swell up in memory like one of those spikey, bloated fish that the OpenBSD guys use in their logos. Best case scenario is that you have to perform periodic relaunches to reset the memory footprint. Worst case scenario is that you'll suffer spinning beachballs, thrashing disks, and your machine will be reduced to an unusable crawl.

So it's really that last issue which has pushed me to use `git grep` instead of TextMate's built-in project-wide search. And it's also what's pressured me into investigating [Emacs](/wiki/Emacs) over recent months.

I wish I could like it. I really do. But switching to it is just too costly.

Emacs has a reputation for being bloated itself, but in reality its performance is fine. It has no pathological design flaws in its multi-file search functionality, and it has split editor views.

But the cost, the cost.

Entering in the world of Emacs is an experience in time travel. It's a world where windows are called frames, views are called windows, the cursor is called "point" (not even "the point"!), and documents are called buffers. It comes from a world where things like "scrolling" were so new and radically inventive that the tutorial explains to you what "scrolling" means.

It's a world where you're encouraged to eschew cursor keys for navigation and use `C-f`, `C-b`, `C-n`, `C-p` (etc) instead, and swap your Caps Lock and Control keys so that the latter will be on the "home row" of the keyboard and you can abuse it without restraint, and without getting a form of repetitive strain injury known as "Emacs pinky".

It's a world where you can teach the editor to do almost anything you can imagine, but where doing so will require you to know or at least work with a dialect of Lisp.

It was a program I'd used many times over the years, often because it's what happened to be on the machine I was using, but I never really tried embracing the "philosophy".

This time I decided to give it a try as it was intended and see if it delivered on its promise. After only 24 hours (not enough, I hear you cry) it became evident that the return on investment just wouldn't be there.

## Costs

In the first day of using Emacs "as Emacs was intended to be used" you're not going to be as fast at basic text editing as you normally would be. I have no doubt at all that I could become proficient at it, however, probably within a week or two.

But this would require throwing out *years* of ingrained muscle memory encoding how to do things like move around a document, and even how to do things as simple as cutting and pasting. "Throwing out", because once you'd internalized the new paradigm you'd find yourself floundering whenever you had to use another editor, use a web browser, or sit in front of somebody else's computer.

What do you do in this circumstance? Start using Emacs for *everything* and never leave it, like so many do? It may be the Swiss Army Knife with Kitchen Sink of editors, but I'm not really looking to switch operating systems right now! I'm quite happy with Mac OS X and the collection of different applications I run on it; I'm not looking to replace it with a sprawling, 30-year-old behemoth.

Sure, you can set up Mac-like keybindings for things like text movement and copy and paste, but that too comes at a cost. If you assign Command-X to "Cut", for example, you're losing `M-x`, the shortcut for directly executing an Emacs function and something that you use literally hundreds of times in each Emacs session. You can reassign it to another key sequence, but then you're suddenly out of sync with the thousands of pages of examples and documentation for Emacs out there on the web.

It's kind of like an "all or nothing" situation. What's the point of using a watered-down Emacs, an old-school editor dressed up in a transparent "Mac app" disguise that's fooling nobody? Sure, you can bind Command-A to "Select all", but it's not really "Select all"; it's actually "Mark all", and you'll see the difference in behaviour as soon as you move the cursor. It's an ugly hybrid that's neither a true Mac app nor truly Emacs.

Emacs can also be very tricky to set up. Some "hard" things are very simple; things like setting up [TextMate](/wiki/TextMate)-style "snippets" (just drop an `.el` file into your `~/.emacs.d/`). But some "easy" things are fiendishly difficult; things like adding or manipulating fonts are an utter nightmare. There were some basic font issues which I couldn't resolve even with hours and hours of troubleshooting. I eventually gave up.

I found myself questioning whether that was the kind of environment I wanted to work in. I could probably write TextMate 2 (seeing as Allan doesn't seem interested in doing it) before I could finish getting Emacs to work exactly the way I want it.

The onion-like design (layer upon layer of Lisp) doesn't always inspire confidence either. This is a 30-year-old text editor, but if you search the web you'll find no shortage of people trying to work around glitches, still. Shouldn't all the glitches have been solved by now? Things like integrated shells with wonky behaviour; hasn't there been time to make a decent, robust terminal emulation inside of Emacs?

I could go on and on about this but I won't; I think you get the idea already. Perhaps this is just the fruit of 24 frustrating hours with Emacs. Perhaps I shouldn't dismiss it just yet. But all the same, going back to TextMate to edit a file or two feels very, very comfortable indeed.

Part of the problem is that there are some new, visual paradigms that really do bring something to the table. Things like tabbed editors, for example. In this sense Emacs really is too keyboard-centric. You might have 10 buffers (10 documents, or 10 views of documents) open at once, but apart from the ones which are directly visible in the frame (the window, that is), the others only exist in your memory. So even if you have your frame split twice so that you can see three at once, the other seven are effectively out of sight, out of mind until you try switching to them (with the keyboard, of course).

With tabs, on the other hand, you'd see 10 tabs so you have a constant awareness of what things you're working on. The documents are always somehow *present*. You might argue that this is actually a distraction, but I personally find it useful. I don't necessarily want to see 50 tabs if I have 50 documents open, but I do like the idea of seeing 10 tabs, especially if they're the documents which are somehow "near" to the one I'm working on (either because I opened them at the same time or because I looked at them recently).

So what are the alternatives? Funnily enough, Xcode might be one of them, at least for Ruby code. It certainly has good split editor views and a robust project-wide search. BBEdit's very solid, but it's "feel" started looking dated a long time ago now. I wonder if there is anything else.

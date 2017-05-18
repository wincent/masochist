---
title: Rule editor
tags: blog
---

Currently working on a rule editor like the one in Mail.app. This is necessary for a [Synergy Advance](http://synergyadvance.com/) plug-in that I'm hoping to finish this week.

My first task was to reproduce the look of the Mail.app rule editor. Next I got drag-and-drop support in place (for re-ordering rules; this is something that Mail.app doesn't support). Right now I am about to work on getting the editor to auto-resize as you add and remove rules, as well as causing the parent view (in this case inside a normal NSWindow) to resize as well.

Still to do: ~~disable selection highlighting (I don't think I can actually turn selection *off* because I suspect that will stop drag-and-drop from working, but I do want to suppress the visual highlighting)~~; ~~provide a better-looking drag image~~; make a larger portion of the custom view for each "rule" draggable; potentially look at using Cocoa Bindings.

I also have to finish my plug-ins management user interface so that users can actually turn this stuff on and off. At last, an appropriate use for the ubiquitous Master/Detail interface and Cocoa Bindings!

The rest of the plug-in is pretty much done. It's mostly just UI stuff that has to be done now.

Bearing in mind the number of changes, the next version of Synergy Advance will definitely be 0.5 rather than a bump to 0.4.1.

As we know, the best laid plans... Hoping to get it done this week but potentially could drag out a bit; still, it's going to be done by the end of the month no matter how many late-nighters I have to pull.

---
title: Remove all HOM from WOCommon (WOCommon, ab9f927)
---

The latest preview seed of Leopard mysteriously breaks much of the HOM code that worked on Tiger and on previous Leopard seeds. Rather than trying to graft an idea that's seen in Ruby, Smalltalk, Haskell and such onto Objective-C, simply go with the flow and accept that the extremely low-level runtime wrangling that is necessary to get this working amounts to chasing a moving target; it's just too brittle to justify the time investment in this, especially when it is effectively swimming against the current, trying to get Objective-C to do something it wasn't designed to do, and generating unorthodox code that will be hard for other Objective-C programmers to digest.

So this commit either modifies or outright removes about 90 files from the source tree; somewhat painful to throw away so much work, but it seems the pragmatic thing to do.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;

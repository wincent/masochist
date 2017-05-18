---
title: Nil vs nil
tags: blog
---

I was just browsing the Objective-C documentation and I noticed something interesting that had thus far escaped my attention.

I already knew that `nil` (all lowercase) is a null object pointer (`(id)0`).

What I didn't know was that there is another kind of null pointer, `Nil` (first letter capitalized) that is defined specifically for use as a null *class* object pointer (`(Class)0`). Up until now I had always used `NULL` when I wanted to refer to a null class pointer.

It makes little difference in the end (after all, they're all pointers and they're all null) but it's nice to know that there's yet another way of making our source code richer, more explicit and more information dense. I'll be using `Nil` when appropriate from now on.

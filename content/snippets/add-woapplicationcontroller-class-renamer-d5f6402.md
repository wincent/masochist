---
title: Add WOApplicationController class (REnamer, d5f6402)
tags: snippets
---

This is the first commit in a series which might turn out to be a somewhat painful migration. The end goal is to make a dedicated application controller class that works with per-window controllers, one for each rename operation in progress.

I didn't do this originally due to lack of foresight; but the truth is that a user can start one rename, then go to the Finder and start another before setting the first one in action, and so on indefinitely.

The nicest way to handle this is to have one application instance which uses a "document" model and opens one window for each batch of files to be renamed.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;

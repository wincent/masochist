---
title: Drain pool before exiting (Wincent Strings Utility, 7001916)
tags: snippets
---

Rather than just letting the autorelease pool leak at the end of execution do the right thing and drain it first. There's no real need for it in this case but it's a general good practice so I should get into the habit of doing it.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;

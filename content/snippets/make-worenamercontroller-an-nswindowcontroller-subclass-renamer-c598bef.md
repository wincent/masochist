---
title: Make WOREnamerController an NSWindowController subclass (REnamer, c598bef)
---

Remove some of the application-level functionality of WOREnamerController and make it an NSWindowController subclass; it will be repurposed as a per-window controller with the goal of being able to have multiple running instances.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;

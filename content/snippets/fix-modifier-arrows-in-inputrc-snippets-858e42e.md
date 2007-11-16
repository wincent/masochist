---
title: Fix (modifier)+arrows in inputrc (snippets, 858e42e)
---

This is really a two-step process; first, you need to have Control-Left and Control-Right correctly configured in your inputrc file (this patch corrects a couple of mistakes there), and secondly, you need to configure the Terminal preferences to send the exact same key sequences when pressing Control-Left and Control-Right, otherwise readline/bash will never see them (this commit also makes a note to that effect).

The apparently useless Option-Left/Option-Right bindings are now commented out. It seems that they don't work unless you do configuration in the Terminal preferences, but once you've done that you no longer need the bindings anyway.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;

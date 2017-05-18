---
title: Update argument handling in main application (REnamer, 6340d58)
tags: snippets
---

First up, under Garbage Collection we can use a shorter idiom to initialize the mutable arguments array.

Secondly, note that we can do this processing in application:openFiles: rather than in init.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;

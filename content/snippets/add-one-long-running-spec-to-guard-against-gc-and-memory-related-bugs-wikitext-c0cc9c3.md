---
title: Add one long-running spec to guard against GC and memory-related bugs (wikitext, c0cc9c3)
---

Add a spec that processes a string 100,000 times. This causes the spec suite to run in a matter of seconds rather than tenths of a second, but it is desirable to have at least one long-running spec in order to try and catch memory or GC-related bugs.

Without this it appears that the entire spec suite can run without ever triggering GC (or at least, without ever triggering GC enough to expose any memory-related flaws). I know this because in developing the Data\_Wrap\_Struct code I was seeing the spec suite pass but was seeing problems in the benchmarks because they ran for longer.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;

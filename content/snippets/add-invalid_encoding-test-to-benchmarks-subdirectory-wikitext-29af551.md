---
title: Add invalid_encoding test to benchmarks subdirectory (wikitext, 29af551)
---

This isn't so much a benchmark as a test, but I don't want to include it in the specs directory because it is such a long-running script.

The basic idea is to parse a large slab of text 100,000 times and make sure that there is no resource leakage even when exiting abnormally from the parse method.

You can't really test this within a spec because the spec suite doesn't run for long enough for resource leaks to really manifest themselves (on my humble machine the spec suite of 564 examples runs in under a third of a second). I could bloat the spec suite to make it run for longer, but that would slow down development and detecting resource leaks from within the specs wouldn't be all that straightforward anyway.

So the idea is that you run this invalid\_encoding script and watch memory usage while it processes the same slab 100,000 times over. The slab is long enough that the parser is fully exercised (things like indentation, various syntax etc), and only at the end do we introduce some invalidly encoded UTF-8 which causes the parse to derail.

It's important to do these long-running tests because when I was initially figuring out how to use Data\_Wrap\_Struct (before I knew about the need to use the volatile keyword) I was seeing the full spec suite passing, but crashes when running the long-running benchmarks. This was because Ruby's GC was never being triggered during the spec run and so the problem never manifested itself.

On my machine this script reports 2.55MB RSIZE, 18.53MB VSIZE, 1.66MB private and 820KB shared, and those figures don't budge at all during the entire run.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;

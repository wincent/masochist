---
title: Add convenience macro for double-checked locking pattern (WOCommon, c5ba560)
---

In the most common usage case of the double-checked locking pattern (lazy initialization of shared resources such as singletons) we almost always use the exact same repetitive code.

Make a macro for this use case, which uses double-checked locking with memory barriers for safety, synchronizes against "self" (which will work well in class methods for singletons, and well in instance methods for other types of lazy initialization), and returns the result.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;

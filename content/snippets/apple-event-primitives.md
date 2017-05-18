---
title: Apple Event primitives
tags: snippets
---

Have done a lot of refactoring of my Apple Event code so that most of the methods are merely wrappers for lower-level primitives. This makes the code much easier to read because most of the methods (even the primitive ones) are only a few lines long, and it makes the code more maintainable because it narrows down Apple Event activity to only a couple of primitives instead of being littered all over the place.

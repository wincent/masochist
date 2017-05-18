---
title: Walrus r59, 2 items changed
tags: snippets
---

Remove 'each\_char' method (now provided by jcode library); shorter, faster implementation of 'chars' method; override '\[\]' method to transparently provide Unicode-awareness when passed a range instance (other cases may be useful in the future but were not added because they were not required to pass all the specs); simplify code in ParserState (possible due to overridden '\[\]' method)

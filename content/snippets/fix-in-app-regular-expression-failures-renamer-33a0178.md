---
title: Fix in-app regular expression failures (REnamer, 33a0178)
tags: snippets
---

While the unit tests were working perfectly, the in-app functionality was broken for UTF-8 input. The unit tests worked because they were using precomposed UTF-8 for both subject and pattern, while the in-app use of the same functions was failing because the pattern supplied by the user was precomposed UTF-8 but the file name supplied by the system was decomposed UTF-8.

We work around this by using fileSystemRepresentation rather than UTF-8 string, thus normalizing inputs before performing the regular expression match.

This should be fine because we are operating on filesystem objects -- we know the original name will always be decomposed UTF-8 -- so there is no harm in always returning decomposed UTF-8 as well; in other words, this normalization will not lead to spurious rename operations (same file name merely composed differently).

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;

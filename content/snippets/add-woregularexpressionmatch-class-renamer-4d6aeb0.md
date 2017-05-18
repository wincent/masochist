---
title: Add WORegularExpressionMatch class (REnamer, 4d6aeb0)
tags: snippets
---

This is a wrapper class that I initially intended as a mere optimization (avoid unnecessary object instantiations by using scalar instance variables rather than wrapping scalars in NSNumber instances and storing them in an NSDictionary), but it actually has a very nice usability and readability impact as well, as evidenced by the resulting clean-up visible in the unit tests.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;

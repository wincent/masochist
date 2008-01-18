---
title: Teach user interface about substitution errors (REnamer, 65c992a)
---

Previously the user interface only knew about regular expression pattern compilation errors. Now it knows about invalid replacement strings as well.

We display an alert triangle in next to the replacement field in this case with a tool-tip showing the error, and also log it to the log drawer.

In doing this I cleaned up the logging in general so that we no longer re-log the same error if the user adds more characters to one of the fields and the error remains constant.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;

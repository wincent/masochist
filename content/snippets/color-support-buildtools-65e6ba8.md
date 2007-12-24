---
title: Color support (buildtools, 65e6ba8)
---

Use tput to test whether the current terminal supports basic color capabilities (bold, foreground color, reset). In itself these tests are not enough to determine whether it is appropriate to use color; for example, when run from inside Xcode or when output is redirected or piped elsewhere the tests will still pass but color may not be appropriate. So an additional test (test -t 1) for an open file descriptor is used to avoid emitting color output in these circumstances.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;

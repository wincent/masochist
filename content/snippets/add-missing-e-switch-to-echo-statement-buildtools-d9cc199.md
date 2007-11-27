---
title: Add missing -e switch to echo statement (buildtools, d9cc199)
---

The missing switch here was causing a literal "\\n" to be emitted. This relies on the Bash echo built-in, as the executable /bin/echo does not support this switch.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;

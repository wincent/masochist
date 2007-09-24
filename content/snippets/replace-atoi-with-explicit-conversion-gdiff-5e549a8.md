---
title: Replace atoi() with explicit conversion (gdiff, 5e549a8)
---

Ripping out the atoi() calls allows another great simplification to the state machine: instead of having to maintain multiple pointers to the starting characters of the desired substrings it is sufficient to have a simple accumulator variable and use a Ragel "all transitions" action ($) to perform an incremental ASCII-to-integer conversion.

This not only saves a few lines of code, it should also be faster due to the saved function calls.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;

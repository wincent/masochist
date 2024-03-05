---
title: Silence GCC warning about signed/unsigned comparison (REnamer, a5f6563)
tags: snippets
---

The cast here is safe because the int should always be non-negative (confirm that with an assertion) and never large enough to overflow size_t.

Signed-off-by: Greg Hurrell &lt;greg@hurrell.net&gt;

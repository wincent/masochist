---
title: Explicitly check for ENOMEM (WOPublic, ab2ed1a)
---

POSIX allows the size argument to malloc to be 0 (in which case either a NULL pointer or a pointer to something that can safely be passed to free is returned). So in order to test for a failed allocation must explicitly check for ENOMEM.

Of course, I personally think that it would almost always be an error to ask malloc for zero bytes, but in that case the mistake will eventually be caught anyway, when the caller tries to write to the returned pointer.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;

---
title: Allow pointer-to-pointer comparisons (WOTest, 8210f41)
---

Found another case in which comparing nil to nil was leading to a failing test; ultimately the +\[NSValue WOTest\_compare:\] method was being called where both objects were encoded with type "pointer-to-void".

This commit adds a special case for such comparisons: truly equal pointers are considered to be NSOrderedSame; all others fall through to the default path and an exception is raised.

This is a conservative approach because in reality the only kind of pointer comparison which makes sense in practice is an equality test, not an ordering test.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;

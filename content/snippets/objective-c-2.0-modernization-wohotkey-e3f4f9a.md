---
title: Objective-C 2.0 modernization (WOHotKey, e3f4f9a)
tags: snippets
---

Sweeping changes across the codebase to take advantage of new features in Objective-C 2.0; this is still not a complete revision and there are still more changes that can be made.

Changes so far effected: use of fast enumeration instead of old enumeration macros; elimination of now-redundant calls to no-op methods such as release, autorelease and friends; elimination of dealloc methods where possible and replacement by finalize methods where necessary; some of the singleton semantics have changed so update some comments to reflect that; some formatting changes for better readability in sections where the code needed to be changed as part of the Objective-C 2.0 modernization; use of shorter, cleaner autoreleased object initialization rather than the alloc/init pattern where possible; removal of dead (unimplemented, unneeded) methods revealed as a consequence of the switch to Objective-C 2.0 anonymous categories; more compact notation for the "work on temporary mutable object but return immutable version" pattern (using the "copy" method; this is a pattern which is made possible by the move to garbage collection); added notes at key-enumeration sites as reminders that these cannot be switched to use the new fast enumeration syntax; and conversion of manually-coded accessors to synthesized properties in many classes.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;

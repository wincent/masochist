---
title: Objective-C 2.0 modernization (WOBezel, e67aedb)
---

This commit makes a large number of changes across the codebase to take advantage of new features in Objective-C 2.0 and garbage collection: non-retained references converted to weak references; most accessors replaced with properties and synthesized accessors; dealloc methods replaced with finalize methods where appropriate and removed entirely when possible; use of anonymous categories for private methods (allows for better compile-time checking); some formatting changes for better readability where said changes coincide with code which already needed to be modified as part of the Objective-C 2.0 modernization; minor refactoring of some accessor method names as part of the transition to properties (for example, "setIsResizable" and "setIsCloseable" were renamed to "setResizable" and "setCloseable" respectively, while the corresponding getters continue as "isResizable" and "isCloseable"); removal of some methods which should now never be called (retain, release and so on); conversion of some old-style Doxygen comments to new-style ones, in sections where code was being modified anyway as part of the transition.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;

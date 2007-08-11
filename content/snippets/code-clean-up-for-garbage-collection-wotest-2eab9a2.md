---
title: Code clean-up for garbage collection (WOTest, 2eab9a2)
---

I've made a pass through the codebase eliminating message sends that have effectively been turned into no-ops by the move to garbage collection (retain, release, autorelease), as well as replacing "release" messages sent to autorelease pools with "drain", replacing the alloc/init pattern with the straightforward autoreleased alternative where possible (for brevity), removing methods that will now never be meaningfully called (dealloc, release, retainCount etc), and switching some accessors over to synthesized properties where this enabled me to get rid of no-op retain, release and autorelease message sends.

I also performed some minor reformatting (better wrapping and column alignment) where the already-mentioned changes touch code which would benefit from such reformatting (improved readability); there are still plenty of places in the codebase where the wrapping could be tweaked to make better use of the full 132 columns.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;

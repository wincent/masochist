---
title: Move test setup code into windowControllerDidLoadNib (gdiff, 039b748)
---

In order to do some additional set-up for the test code, move it into the windowControllerDidLoadNib: method (which is called after the nib is already set up and the WODiffView has been initialized).

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;

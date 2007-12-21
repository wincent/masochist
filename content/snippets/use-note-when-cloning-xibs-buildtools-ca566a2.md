---
title: Use note() when cloning xibs (buildtools, ca566a2)
---

When a new xib is created from scratch, notify with note() rather than with echo so that if the script is being run from within Xcode the notification will appear as a note in the build results window (so as to remind the user to add the new file to the project).

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;

---
title: Pass NULL to executeAndReturnError: (Synergy, 994da25)
tags: snippets
---

The only known crasher at the moment is happening NSAppleScript's executeAndReturnError: method.

Unfortunately, I can't see anything at all in the calling environment that could explain the crash. The NSAppleScript instance is set up using a static NSString literal which by definition can never be garbage collected. I am beginning to fear that NSAppleScript can't be used at all in a garbage collected environment.

As a defensive tactic I'm updating all invocations of the method to pass NULL for the error dictionary. This usage is not documented, but it does follow a pattern employed by many other Apple APIs and there are plenty of examples of code out there in the wild that do use this pattern.

So basically this is a "try it and see" change to see if it eliminates the sporadic crashes. If it doesn't then more drastic measures will be required, most likely involving the replacement of NSAppleScript with something else (the scripting bridge, for example).

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;

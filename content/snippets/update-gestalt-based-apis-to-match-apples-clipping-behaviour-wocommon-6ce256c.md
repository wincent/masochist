---
title: Update Gestalt-based APIs to match Apple's clipping behaviour (WOCommon, 6ce256c)
tags: snippets
---

Apple's gestaltSystemVersion wraps in such a way that Mac OS X 10.4.10, for example, is represented as 0x00001049. This commit updates the WOMachine API to match this clipping behaviour exactly.

If more precise detection of the system version is required in the future there are two approaches which (reading the system version plist, and switching to newer parts of the Gestalt API) which can be implemented, but in the absence of any pressing need for such a shift there is no justification for making changes just yet ("do the simplest thing that could possibly work").

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;

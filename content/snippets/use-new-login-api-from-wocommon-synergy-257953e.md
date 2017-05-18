---
title: Use new login API from WOCommon (Synergy, 257953e)
tags: snippets
---

The new wrapper application updates the login items (formerly the job of the installer). Update the preference pane code to make use of the same method and avoid duplication; this allows us to rip out a sizeable hunk of old code.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;

---
title: Replace use of NSAppleScript in for refreshing playlists (Synergy, b608d32)
---

NSAppleScript appears to cause crashes in a GC environment, so dump it in favor of the Scripting Bridge.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;

---
title: Remove case-sensitive entry from index (REnamer, 66ca188)
---

Git exposes the problems in HFS+ with case sensitivity. In this case I renamed a folder from "Tool" to "tool", and because I wasn't careful Git wound up with two entries in the index which were actually the same file (Tool/main.m and tool/main.m).

I believe I've fixed this now by completely removing both entries from the index and then re-adding one of them; this shows up in the history as a simple deletion of one of the files, although in reality the work tree hasn't changed at all.

When Apple's port of ZFS goes final I'll be using it in case-sensitive mode, if they provide one.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;

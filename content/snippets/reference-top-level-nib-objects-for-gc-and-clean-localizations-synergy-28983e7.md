---
title: Reference top-level nib objects for GC and clean localizations (Synergy, 28983e7)
---

Add top-level strong references to a couple more nibs to ensure that objects don't get inopportunely garbage-collected.

I would have liked to propagate this same change to the other nibs using ibtool but unfortunately there are quite a few errors (class mismatches) reported that prevent this from proceeding; so somewhere in the long history of these nibs they have gotten far enough out of sync with the authoritative English versions to make them unusable with ibtool.

So, for now I am temporarily removing the unsynchronizable nibs entirely; I will have to create new nibs (copies of the English nibs) and copy the strings across by hand from the older localizations that I have on file. This will be a lengthy and painful job, so it might be sometime before it gets completed.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;

---
title: Capture blob ids (gdiff, 74a672c)
tags: snippets
---

Update the state machine to capture blob ids and store them in the WOFile objects. This is a simple ASCII capture which requires a pointer to be set on seeing the start of the desired substring and then actually creating a new object based on the subtring upon reaching the end.

Note that these are abbreviated SHA-1 hashes, not full numeric hashes, so I store them as strings rather than numbers. I will later be passing these strings to other Git tools (such as git-show) so there is no point in using a numeric representation.

Given that this requires the addition of the ASCII capture machinery I also use it for capturing unquoted paths, seeing as it is simpler and faster.

At this point I did some experimentation and discovered that quoted paths and numeric escapes of the form "\\ddd" are used whenever a path contains non-ASCII characters in it. This commit includes some proof-of-concept code for recognizing and recording these numeric escapes, although as noted in the comments to make it actually work I'll need to instead capture raw bytes one by one (most likely into an NSMutableData object) and finally converting the data to a string in one shot rather than working at the per-character level as I currently do.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;

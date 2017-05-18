---
title: Be encoding-agnostic with respect to paths (gdiff, cb1f777)
tags: snippets
---

While thinking about how to handle possible different, platform-dependent text encodings in path names I realized that the best thing to do would be to be encoding-agnostic and do what Git goes: display the raw bytes of the path using escape sequences for non-ASCII and non-printable characters.

gdiff doesn't actually need the paths in order to show the file contents (it will ask Git for the blobs based on their hash identifiers) so the paths are for display purposes only. For display the non-ambiguous format using escape markers is actually much better. This simplifies the code greatly and makes it much more robust.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;

---
title: Make full-text indexing faster by bypassing Active Record (wincent.com, 7976609)
---

Well, not bypassing it entirely as we still go through connection.insert, but still, this yields a 10-fold speed-up. It is, however, still too slow for my liking; several seconds to index a largish (40+ KB) article in development mode. Even though production will likely be much faster I still don't think this is good enough.

In all likelihood I'll defer indexing and do it in a background process.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;

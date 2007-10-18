---
title: Flesh out accessor methods for the internal link prefix (wikitext, 17856f8)
---

Provide a write accessor which accepts an internal link prefix in UTF-8 encoding, stores it to an instance variable, and also stores a UCS-2 copy in a separate instance variable. The latter will be used during transformations while the former is the version that's visible to the caller via the API.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;

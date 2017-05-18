---
title: The Movable Type upgrade procedure sucks
tags: blog
---

Just [upgraded](http://www.wincent.com/knowledge-base/Upgrading_from_Movable_Type_version_3.31_to_3.33) to the latest version of Movable type. It's one of my least-favorite upgrade procedures.

-   The download archive is broken. Again.
-   The documentation on upgrading is hard to find and inadequate.
-   The procedure effectively amounts to installing all over again (1,300+ files) despite the fact that the documentation glosses over it as "simply" having to upload the new files "over your existing installation".
-   A superior solution for upgrading (via Subversion) could be offered but isn't. All web applications should offer distribution and upgrading via Subversion, in my opinion; in one easy step it delivers:
    -   Easy installations
    -   Easy upgrades
    -   Automatic merging of local customizations
    -   Ultra-fast application of security patches (important in public-facing web applications)

Complaints aside, it's now done.

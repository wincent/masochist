---
title: Use shared support folder for executables (gdiff, 64aadbd)
---

Using the shared support folder rather than the localizable resources folder should be more secure as it reduces the number of possible sites in which an attacker could substitute a hostile binary.

As noted elsewhere in the source, these types of security measures are an unwinnable battle; basically any application that runs with elevated privileges should be considered vulnerable of other users have write access to any part of it. Despite this, a "defense in depth" strategy suggests that plugging these minor holes is still a worthwhile idea, especially when the effort of doing so is minimal.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;

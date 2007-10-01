---
title: Total rewrite of assertion and check macros (WOPublic, 7a0c0be)
---

Make a really clear distinction between "assertions" and "checks". The former are debugging tools that don't even make it into Release builds and the latter are identical except that they appear in both Debug and Release builds; you use "checks" rather than "assertions" where performing the check is necessary for the fulfilment of your API contract (for example, when checking parameters for conformance with the documented API).

At the same time I got rid of the bascically unused WORequire and WO\_DEBUG\_ONLY macros.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;

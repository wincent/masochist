---
title: Add database-level constraints for uniqueness (typechecked.net, 163821f)
tags: snippets
---

Seeing as validates_uniqueness_of is vulnerable to race conditions, it is really only a bit of UI-level polish; at the level of database integrity we have to rely on real constraints.

Signed-off-by: Greg Hurrell &lt;greg@hurrell.net&gt;

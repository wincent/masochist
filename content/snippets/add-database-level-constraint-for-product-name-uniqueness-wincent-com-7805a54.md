---
title: Add database-level constraint for product name uniqueness (wincent.com, 7805a54)
tags: snippets
---

The Rails "uniqueness" validation is advisory only and is vulnerable to races, so add a database-level constraint to ensure integrity. (The Rails validation is about UI polish, not integrity.)

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;

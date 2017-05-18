---
title: Add "public" field to comments migration (wincent.com, da3e4c5)
tags: snippets
---

It is useful to be able to flag individual comments as public/private. By default, comments will be public, and will be visible as long as the "commentable" to which they are attached is public. But there are some cases where it is good to hide individual comments on an otherwise public "commentable"; for example, in the issue tracker most of the discussion may be carried out in public, but there may be individual security-related comments that should be kept private.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;

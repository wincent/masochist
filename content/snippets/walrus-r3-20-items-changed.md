---
title: Walrus r3, 20 items changed
tags: snippets
---

All parse methods now expect an optional hash parameter containing options; when parse methods call other parse methods the hash is passed on, baton-style; this allows the continuation trick to be removed from the parse method and makes program flow a little more self-evident

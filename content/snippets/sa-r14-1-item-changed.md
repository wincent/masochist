---
title: SA r14, 1 item changed
tags: snippets
---

It appears that the outer autorelease pool is rendered unnecessary thanks to garbage collection (ie. it appears that no system code is causing autorelease messages to be sent); remove the pool

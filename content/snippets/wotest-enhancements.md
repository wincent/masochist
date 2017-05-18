---
title: WOTest enhancements
tags: snippets
---

Plenty of extensive refactoring today; the most pervasive example being that all tests are now executed using a wrapper macro, `WO_TEST_WRAPPER`, that serves to isolate uncaught exceptions.

---
title: Revert "Teach Haml to respect preformatted text" (wincent.com, add2e6c)
---

I'm going to follow Nathan's advice here and just monkey patch the "render" method rather than meddling with Haml's internals. For the timebeing seems the lesser of two evils.

This reverts commit 0eb62734c9e3b266f2138fd51047eaf3ea736374.

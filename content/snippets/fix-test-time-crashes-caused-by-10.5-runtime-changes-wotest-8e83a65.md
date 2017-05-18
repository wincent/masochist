---
title: Fix test-time crashes caused by 10.5 runtime changes (WOTest, 8e83a65)
tags: snippets
---

The Objective-C 2.0 runtime in Leopard expects more methods to be implemented in root classes than was the case under Tiger.

This commit adds two such methods to the WOLightweightRoot implementation, doesNotRecognizeSelector: and methodSignatureForSelector:, thus eliminating a crash that would derail the test run.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;

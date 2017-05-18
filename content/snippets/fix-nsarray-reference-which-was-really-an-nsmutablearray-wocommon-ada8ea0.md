---
title: Fix NSArray reference which was really an NSMutableArray (WOCommon, ada8ea0)
tags: snippets
---

As part of the change to Objective-C 2.0 fast enumeration I discovered that one of the untyped (id) objects that I was previously treating as a mutable array was actually mislabelled as immutable. This commit adjusts the test to reflect reality, quelling a compiler warning as a result.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;

---
title: Add test case for Objective-C 2.0 properties bug (WOTest, 3fa7f33)
---

In a previous commit (f2d45e3) I noted what appears to be a bug in either the Objective-C 2.0 properties implementation (spurious compiler warnings) or in its documentation.

I've prepared this test case demonstrating the problem. In the course of doing so I discovered that the problem has a workaround that is considerably easier than I originally thought, and the bug doesn't actually make it impossible to use the public-readonly/private-readwrite property pattern. I will apply the new workaround in a subsequent commit.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;

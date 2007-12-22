---
title: Refactoring and new functions (Wincent Strings Utility, 127e31d)
---

This is part of a major clean-up to make way for some new functionality. The NSScanner category has been split off into a separate file, and a simple wrapper class has been added so as to eliminate the error-prone and tedious use of an NSDictionary to model an "entry".

In many places the code has been touched up for better readability.

The functions for handling the new options are in place but not hooked up yet.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;

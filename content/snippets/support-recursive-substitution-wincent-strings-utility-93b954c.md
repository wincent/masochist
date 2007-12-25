---
title: Support recursive substitution (Wincent Strings Utility, 93b954c)
---

In updating my apps to match the latest documentation in Apple's "Property List Key Reference" I noticed that it would be useful to be able to do recursive substitution when using the --info and --strings switches; that is, have one key refer to the value of another key in an InfoPlist.strings file rather than one in the Info.plist.

This commit therefore gets rid of the simplistic find-and-replace substitution that was previously implemented and replaces it with a proper recursive substitution mechanism that allows keys in a strings file to refer to other keys in the same file, using multiple levels of recursion if need be, and finally falling back to look-up in the Info.plist file.

The algorithm is smart enough to detect direct and indirect infinite recursion (self-referential subsitutions), allow repeated substitutions, and bail in the event that no suitable substitution can be found.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;

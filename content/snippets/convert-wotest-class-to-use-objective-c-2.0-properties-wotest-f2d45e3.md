---
title: Convert WOTest class to use Objective-C 2.0 properties (WOTest, f2d45e3)
tags: snippets
---

This commit converts most of the accessors for the instance variables in the WOTest class to Objective-C 2.0 properties.

At the same time some unused instance variables were disposed of or marked for future deprecation.

Note that due to an apparent bug in the compiler I was unable to implement the public-readonly/private-readwrite pattern as suggested in the documentation, and so the readonly/readwrite portions are commented out. I will be making a reduced test case for this and filing a Radar. Watch for a future commit that adds the Radar number in a comment.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;

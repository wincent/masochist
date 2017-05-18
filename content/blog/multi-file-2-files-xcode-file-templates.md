---
title: Multi-file (2+ files) Xcode file templates
tags: blog
---

I'm very happy to have discovered that you can set up Xcode file templates that include more than two files. I've just used this to make two new templates, "Objective-C class with tests" and "Objective-C category with tests", which create not only the basic header and implementation files but a matching [WOTest](http://test.wincent.com/) test class (header and implementation) as well in a `Tests` subdirectory. Makes it so much easier to do the right thing with regard to unit testing. [Notes here](http://www.wincent.com/knowledge-base/Multi-file_Xcode_templates).

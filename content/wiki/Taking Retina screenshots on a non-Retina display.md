---
tags: firefox chrome retina
cache_breaker: 1
---

# Firefox

As far as I can tell, the best way to do this (for example, when you want to test Retina visuals on a machine that doesn't have a Retina display, like a MacBook Air), you can use Firefox, go to `about:config`, and change `layout.css.devPixelsPerPx` from -1 to 2.

## Source

-   <http://stackoverflow.com/questions/12243549/how-to-test-a-webpage-meant-for-retina-display>

# Chrome

You can also do it in Chrome, but it is fiddlier:

1.  Zoom to 200%
2.  At the bottom of the JS console (`Option-Command-J`), click on "Emulation"
3.  Check the "Emulate screen" box
4.  Set "Device pixel ratio" to 2
5.  Make sure "Emulate viewport" is unchecked (otherwise the content gets resized)
6.  Uncheck "Shrink to fit" (it doesn't seem to do anything useful)
7.  Uncheck "Enable text autosizing"


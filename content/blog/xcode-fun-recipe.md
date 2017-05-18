---
title: Xcode Fun Recipe
tags: blog
---

For fun with Xcode, follow these steps:

1.  Read a bug report
2.  Fix the bug
3.  Build
4.  Test
5.  Notice that bug is still present
6.  Spend 30 to 60 minutes in the debugger trying to work out why the bug is still present
7.  Discover through low-level debugger chicanery that Xcode is running the old code, not the fixed code
8.  Inspect the build log and confirm that Xcode *did* compile the modified file containing the bug fix
9.  Scratch head, baffled
10. Clean
11. Build
12. Test
13. Confirm that bug is indeed gone
14. Curse Apple for wasting your time at Step 6 above
15. Forget about filing a bug report because the likelihood of isolating a reproducible test case for a bizarre bug like this must be close to nil
16. Vent frustrations by writing recipe for weblog





#### Update: 7 April 2006

Jonathan Rentzsch writes of his deep-rooted friendship with Xcode's "Clean All" button in his post, "[Double-Broom: LIVE IT](http://rentzsch.com/notes/doublebroomLiveIt)". Jonathan says he's clicked on the double-broom button almost as often as he's clicked on the build button itself. I wish it weren't so, seeing as the for the project I'm working on right now there's a five-fold difference between a clean-then-build (6.5 minutes) and a build-without-clean (1.5 minutes)...

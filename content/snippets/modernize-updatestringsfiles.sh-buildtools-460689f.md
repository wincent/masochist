---
title: Modernize UpdateStringsFiles.sh (buildtools, 460689f)
tags: snippets
---

Make some tweaks to UpdateStringsFiles.sh to make it more generally suitable. In particular, the ability to specify separate source and resources folders means that we can use this script in the Synergy build process now (because the Synergy code base dates back a very long way now and doesn't follow the standard locations which you get when you set up a new project).

These changes basically make the UpdateStringsFile.sh script redundant, so remove it.

I am still not entirely happy with this script -- it is now showing its age -- despite the fact that it works. In the future will probably do some more refactoring to clean this up and correctly distribute responsibilities among this, the UpdateXibs.sh script, and possibly others.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;

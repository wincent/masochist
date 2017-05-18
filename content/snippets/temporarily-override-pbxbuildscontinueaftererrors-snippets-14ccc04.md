---
title: Temporarily override PBXBuildsContinueAfterErrors (snippets, 14ccc04)
tags: snippets
---

I like to have PBXBuildsContinueAfterErrors set to YES in my user defaults so as to catch the maximum number of errors possible in each build cycle.

But having this set doesn't work too well when building nightlies, where we want the first error to derail the build process as soon as possible.

So set up a temporary override from within the nightlies script to allow us to have the best of both worlds.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;

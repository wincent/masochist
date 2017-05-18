---
tags: xcode wiki
---

# Keyboard navigation among methods

When an editor view is active and has focus hitting Control-2 will cause the function pop-up menu to activate; it can then be navigated using the cursor keys. Hitting Return jumps to the method.

I learnt about this trick in [this weblog post](http://inessential.com/?comments=1&postid=3405).

# Cancelling builds

About once a day I find myself unexpectedly provoking a build by pressing Command-B when all I really wanted to do was paste something (Command-V); an easy enough mistake to make because the B and V keys are adjacent. When this happens I hit Command-Period to cancel the build.

Peter Hosey reveals another way of cancelling an in progress build in [this post](http://boredzo.org/blog/archives/2006-04-11/know-your-xcode):

> Most commands that start an operation stop it as well. ⌘B, for example, starts *and stops* a build.

He goes further to describe the general pattern employed:

> Rule of key commands: With ⌘ and no other modifiers, the key command does at least a build. ⌘⌥ will do that thing alone, without building first. ⇧⌘ opens the progress window for that operation, without actually doing it.

See [his post](http://boredzo.org/blog/archives/2006-04-11/know-your-xcode) for full details.

# Build phase ordering

[This weblog post](http://talblog.info/archives/2007/05/fail_faster.html) argues that you should move your Compile Sources build phases as high up in the build phases lists as possible so as to catch syntax errors as quickly as possible. This is predicated on two notions:

1.  Syntax errors are much more likely than mistakes in your other build phases, such as Copy Bundle Resources phases.
2.  Executing a Copy Bundle Resources phase early on in the build process may needlessly delay the discovery of syntax errors.

This advice can be generalized to the following: move your Compile Sources build phases as high up in the build phases lists as possible. In other words, don't just look at the relative ordering of your Compile Sources and Copy Bundle Resources phases; consider all the phases and move the Compile Sources and Link Binary With Libraries phases up as high as you can without breaking anything. Do this for all targets in your project.

As a concrete example, take the [Synergy Advance](/wiki/Synergy_Advance) application target (this is the target that builds the application only; there are many other targets for building other components such as plug-ins): before re-ordering the build phase order was:

1.  Run Script (Update Strings Files)
2.  Copy Bundle Resources
3.  Copy Frameworks
4.  Compile Sources
5.  Link Binary With Libraries
6.  Run Script (AppleScript Support)
7.  Run Script (Strip)
8.  Run Script (InfoPlist.strings preprocessing)

After re-ordering we have:

1.  Compile Sources
2.  Link Binary With Libraries
3.  Run Script (Update Strings Files)
4.  Copy Bundle Resources
5.  Copy Frameworks
6.  Run Script (AppleScript Support)
7.  Run Script (Strip)
8.  Run Script (InfoPlist.strings preprocessing)

In other words, I was able to move three phases down the list and make Compile Sources and Link Binary With Libraries the very first phases in the target. Note that even the Copy Frameworks phase can be moved down despite the fact that linking occurs before it; this is because the linking is performed against the frameworks in the `TARGET_BUILD_DIR`, and they can later be copied into place inside the application bundle.

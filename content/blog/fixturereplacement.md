---
title: FixtureReplacement
tags: blog
---

Just added a [FixtureReplacement cheatsheet](http://www.wincent.com/knowledge-base/FixtureReplacement%20cheatsheet) to the Knowledge Base, seeing as the only documentation for the plug-in at the moment is in the form of a screencast (which isn't too easy to consult!).

Normally I don't like overloading a [Rails](http://www.wincent.com/knowledge-base/Rails) application with a zillion plug-ins but this one gets in for the following reasons:

-   It's extremely simple: it only takes a couple of minutes to examine the code, understand how it works, and have a high degree of confidence in its functionality.
-   It's a test-time only plug-in so it won't bog down your deployed production application.
-   It makes it much easier to write [specs](http://www.wincent.com/knowledge-base/specs), and easier to understand them once you've written them, because it allows you to focus on only the salient parts of the models (and model object graphs) that you're testing.
-   Your example data is much easier to maintain and less brittle than traditional Rails fixtures.

If you haven't watched the screencast I encourage you to check it out now (the link can be found [here](http://replacefixtures.rubyforge.org/)).

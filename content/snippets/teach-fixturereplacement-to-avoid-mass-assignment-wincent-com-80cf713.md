---
title: Teach FixtureReplacement to avoid mass assignment (wincent.com, 80cf713)
tags: snippets
---

FixtureReplacement uses mass assignment under the hood to create new object instances and this can cause exceptions if any of the assigned attributes are protected. Given that the idea of FixtureReplacement is to quickly and easily set up valid objects (or object graphs) it makes sense to avoid these exceptions and allow all attributes to be specified in the example\_data.rb file whether they are protected or not.

This patch makes FixtureReplacement use update\_attribute to set the attributes one by one and thus avoid the mass assignment and the possibility of exceptions. A copy has also been sent to Scott Taylor (the author of FixtureReplacement).

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;

---
title: Unit testing multi-threading classes
tags: blog
---

It's proving tricky to write unit tests for all these thread-related classes I've been working on lately. The problem is that the whole testing model pretty much makes the assumption that tests will run on a single-thread, and my mock object implementation isn't flexible enough.

The problem is that the test logic is more or less linear (in psuedo-code):

    result = PerformFunction();
    TestResult(result); // did we get what we expected?
    result = PerformOtherFunction(result);
    TestResult(result); // did we get what we expected?

With threads it's not so deterministic, as there are few guarantees about what a given thread will be doing at any given time in relation to other threads. Looks like I'll have to come up with some temporary test classes and even then I may not be able to get 100% code coverage in the tests.

---
title: WOTest improvements
tags: blog
---

I'm very happy with some improvements that I [checked in](http://www.wincent.com/a/about/wincent/weblog/svn-log/archives/2006/11/wotest_r129_5_items_changed.php) to [WOTest](http://test.wincent.com/) last night and which improve the readability and usefulness of test results.





The problem was that in many cases I was depending on `NSValue`'s not very human-friendly `description` method and as a result simple numbers like 500,000 were being printed in hexadecimal representation as `<0007a120>`. Actually, the problem was even worse on little-endian architectures (like on my Intel iMac) because the description was printed as `<20a10700>`, which at a casual glance has almost nothing to do with 500,000.

After the improvements the test results now look like those shown in this screenshot (click for a larger version):

[![](/system/images/legacy/results_t.png)](http://www.wincent.com/a/about/wincent/weblog/results.png)

In this case we see a test failed because we expected 20,000 but got 200,000. Clicking on the red error message in the build results window takes us directly to the test in the appropriate source file. Turns out the test itself is wrong; the `20000` needs to be changed to `200000`. The new output formatting makes it easy to spot the error, and as an added bonus there's type information in the output as well:

    Running tests for class WOUsageMeterTests
    /Users/wincent/trabajo/unversioned/WOCommon/tiger/Tests/WOUsageMeterTests.m:120 Passed: expected (int)12, got (long)12
    /Users/wincent/trabajo/unversioned/WOCommon/tiger/Tests/WOUsageMeterTests.m:121 Passed: expected (int)600000, got (int)600000
    /Users/wincent/trabajo/unversioned/WOCommon/tiger/Tests/WOUsageMeterTests.m:129 Passed: expected (int)13, got (long)13
    /Users/wincent/trabajo/unversioned/WOCommon/tiger/Tests/WOUsageMeterTests.m:130 Passed: expected (int)100000, got (int)100000
    /Users/wincent/trabajo/unversioned/WOCommon/tiger/Tests/WOUsageMeterTests.m:138 Passed: expected (int)12, got (long)12
    /Users/wincent/trabajo/unversioned/WOCommon/tiger/Tests/WOUsageMeterTests.m:139 Passed: expected (int)0, got (int)0
    /Users/wincent/trabajo/unversioned/WOCommon/tiger/Tests/WOUsageMeterTests.m:147 Passed: expected (int)13, got (long)13
    /Users/wincent/trabajo/unversioned/WOCommon/tiger/Tests/WOUsageMeterTests.m:148 Passed: expected (int)0, got (int)0
    /Users/wincent/trabajo/unversioned/WOCommon/tiger/Tests/WOUsageMeterTests.m:172 Passed: expected (int)-8, got (long)-8
    /Users/wincent/trabajo/unversioned/WOCommon/tiger/Tests/WOUsageMeterTests.m:173: error: Failed: expected (int)-20000, got (int)-200000
    Finished test method -testAddTimeval (0.0218 seconds)
    /Users/wincent/trabajo/unversioned/WOCommon/tiger/Tests/WOUsageMeterTests.m:26 Passed: expected (int)4, got (long)4
    /Users/wincent/trabajo/unversioned/WOCommon/tiger/Tests/WOUsageMeterTests.m:27 Passed: expected (int)500000, got (int)500000
    /Users/wincent/trabajo/unversioned/WOCommon/tiger/Tests/WOUsageMeterTests.m:33 Passed: expected (int)1, got (long)1
    /Users/wincent/trabajo/unversioned/WOCommon/tiger/Tests/WOUsageMeterTests.m:34 Passed: expected (int)500000, got (int)500000
    /Users/wincent/trabajo/unversioned/WOCommon/tiger/Tests/WOUsageMeterTests.m:40 Passed: expected (int)0, got (long)0
    /Users/wincent/trabajo/unversioned/WOCommon/tiger/Tests/WOUsageMeterTests.m:41 Passed: expected (int)-500000, got (int)-500000
    /Users/wincent/trabajo/unversioned/WOCommon/tiger/Tests/WOUsageMeterTests.m:47 Passed: expected (int)2, got (long)2
    /Users/wincent/trabajo/unversioned/WOCommon/tiger/Tests/WOUsageMeterTests.m:48 Passed: expected (int)500000, got (int)500000

These changes were relatively easy to implement, done in less than half an hour, leveraging some code already in place in WOTest. Just wish I'd thought to make these changes sooner.

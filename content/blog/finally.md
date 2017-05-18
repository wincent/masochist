---
title: Finally
tags: blog
---

Finally finished that tedious refactoring work I mentioned in my [last post](http://www.wincent.com/a/about/wincent/weblog/archives/2006/03/all_quiet_on_th.php). Refactoring the iChat plug-in to use multi-threaded Apple Event communications wasn't so bad but the iTunes plug-in was a bit of a headache. The main controller class is over 3,300 lines of code, and there were literally dozens upon dozens of methods requiring refactoring, many of those needing accompanying callback methods to be written (all of them ever-so-slightly different, ruling out the possibility of automation or generalization).

But it's done at last. That's the last major roadblock to doing a new public preview release taken care of. Now only a few more days' work (minor tweaks and feature additions) is required; hopefully won't run into any unanticipated problems.

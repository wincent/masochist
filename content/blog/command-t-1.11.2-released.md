---
title: Command-T 1.11.2 released
tags: releases command.t
cache_breaker: 1
---

This is a quick bugfix release that contains only one change, [a fix](https://github.com/wincent/command-t/commit/763fcfe84631e0c108db05c428b337ba52200e10) for [GitHub issue \#109](https://github.com/wincent/command-t/issues/109). For more details, see the original [1.11.1 release announcement](/blog/command-t-1.11.1-released).

This bug warrants a new release because it would break Command-T when used outside of an SCM repo, which for some may be a common use case.

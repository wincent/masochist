---
title: Command-T 1.11.3 released
tags: releases command.t blog
cache_breaker: 1
---

This is a quick bugfix release that contains a couple of fixes, the most noteworthy of which is [this fix](https://github.com/wincent/command-t/commit/f4ed2e03ae2bc54854f578f0c1abd3426c18f813) for [GitHub issue \#118](https://github.com/wincent/command-t/issues/118) (where Command-T would cache stale directory information if you used `:cd` in conjunction with a `g:CommandTTraverseSCM` setting of "pwd". For more details about recent changes to [Command-T](/wiki/Command-T), see [the original 1.11.1 release announcement](/blog/command-t-1.11.1-released).

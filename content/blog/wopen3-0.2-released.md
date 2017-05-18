---
title: Wopen3 0.2 released
tags: releases wopen3 blog
cache_breaker: 1
---

Version 0.2 of the [Wopen3](/wiki/Wopen3) gem was just released. Wopen3 is a replacement for Open3 in the standard library. Unlike Open3, Wopen3 does not throw away the exit status of the executed (grandchild) process. Only a child process it spawned and the exit status is returned in `$?` as normal.

This is a minor feature release which adds a new `system` method encapsulating the frequently-used pattern of forking a child process, capturing standard error, standard out, and the exit status, and acting on the result:

```ruby
result = Wopen3.system('git', 'log')
result.status # => 0
result.stderr # => ''
result.stdout # => 'commit 491411b3...'
```

The full list of changes can be viewed [here](http://git.wincent.com/wopen3.git/shortlog/refs/tags/0.2), and the new version can be installed via `sudo gem install wopen3`. If you find the Gem useful, please consider making a [donation via PayPal](https://www.paypal.com/cgi-bin/webscr?cmd=_xclick&business=win@wincent.com&item_name=Wopen3+donation&no_note=1&currency_code=EUR&lc=GB) to <win@wincent.com>.

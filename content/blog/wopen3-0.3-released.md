---
title: Wopen3 0.3 released
tags: releases wopen3 blog
cache_breaker: 1
---

I'm belatedly announcing the release of version 0.3 of the [Wopen3](/wiki/Wopen3) gem. It was actually released a couple of weeks ago but I somehow overlooked posting an official announcement here.

Wopen3 is a replacement for Open3 in the [Ruby](/wiki/Ruby) standard library. Unlike Open3, Wopen3 does not throw away the exit status of the executed (grandchild) process. Only a child process it spawned and the exit status is returned in `$?` as normal.

This is a minor feature release which adds a new `success?` method to the `Wopen3::Result` instance that is returned by the `system` method. It's used as shown here:

```ruby
result = Wopen3.system('git', 'log')
result.status   # => 0
result.success? # => true
result.stderr   # => ''
result.stdout   # => 'commit 491411b3...'
```

The full list of changes can be viewed [here](http://git.wincent.com/wopen3.git/shortlog/refs/tags/0.3), and the new version can be installed via `sudo gem install wopen3`. If you find the Gem useful, please consider making a [donation via PayPal](https://www.paypal.com/cgi-bin/webscr?cmd=_xclick&business=win@wincent.com&item_name=Wopen3+donation&no_note=1&currency_code=EUR&lc=GB) to <win@wincent.com>.

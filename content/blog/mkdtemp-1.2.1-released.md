---
title: mkdtemp 1.2.1 released
tags: releases mkdtemp blog
cache_breaker: 1
---

Version 1.2.1 of the [mkdtemp](/wiki/mkdtemp) gem was just released. [mkdtemp](/wiki/mkdtemp) is a wrapper for the `mkdtemp()` function in the standard [C](/wiki/C) library, and it provides an easy means of securely creating temporary directories from within [Ruby](/wiki/Ruby) code.

This is a bugfix release which brings full compatibility with Ruby 1.9.2 (the "block" functionality added in mkdtemp 1.2 didn't not work under Ruby 1.9.2 as the body of the block was never evaluated):

```ruby
# this:            # is a shorthand for:
Dir.mkdtemp do     #   dir = Dir.mkdtemp
  puts Dir.pwd     #   Dir.chdir dir do
end                #     puts Dir.pwd
                   #   end
```

Note that Ruby's standard library now includes (since 1.8.7) very similar functionality in the form of `mktmpdir` (example below), so this release is really just to ease upgrading to newer versions of Ruby for projects that started using mkdtmp in the past. In general, new projects might want to just use the methods in the standard library (although I confess to not having looked at the standard library implementation, so I can't vouch for its security and freedom from race conditions):

```ruby
require 'tmpdir'

Dir.mktmpdir do |dir|
  Dir.chdir dir do
    puts "Here I am in #{dir}"
  end
end
```

The full list of changes can be viewed [here](http://git.wincent.com/mkdtemp.git/shortlog/refs/tags/1.2.1), and the new version can be installed via `gem install mkdtemp` (or `sudo gem install mkdtemp`). If you find the Gem useful, please consider making a [donation via PayPal](https://www.paypal.com/cgi-bin/webscr?cmd=_xclick&business=win@wincent.com&item_name=mkdtemp+donation&no_note=1&currency_code=EUR&lc=GB) to <win@wincent.com>.

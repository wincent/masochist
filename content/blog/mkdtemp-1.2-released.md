---
title: mkdtemp 1.2 released
tags: releases mkdtemp blog
---

Version 1.2 of the [mkdtemp](/wiki/mkdtemp) gem was just released. [mkdtemp](/wiki/mkdtemp) is a wrapper for the `mkdtemp()` function in the standard [C](/wiki/C) library, and it provides an easy means of securely creating temporary directories from within [Ruby](/wiki/Ruby) code.

This is a minor feature release which adds the ability to pass a block to the `mkdtemp` method which allows you do conveniently execute code within the context of the created directory:

```ruby
# this:            # is a shorthand for:
Dir.mkdtemp do     #   dir = Dir.mkdtemp
  puts Dir.pwd     #   Dir.chdir dir do
end                #     puts Dir.pwd
                   #   end
```

The new version can be installed via `sudo gem install mkdtemp`. If you find the Gem useful, please consider making a donation via PayPal.

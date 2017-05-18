---
title: RubyWatchman released
tags: ruby watchman ruby.watchman blog
cache_breaker: 1
---

For a recent [Facebook](/wiki/Facebook) hackathon I submitted [a pull request](https://github.com/facebook/watchman/pull/37) to the [Watchman](/wiki/Watchman) project adding a gem for easily talking to Watchman from [Ruby](/wiki/Ruby) using the high-performance binary protocol. This is code written in C for speed, which I had prepared for [Command-T](/wiki/Command-T), so the job here was to extract it and package it into an easy-to-use format.

Watchman is somewhat of a hidden treasure. It was a key part in making Command-T pleasant to use with extremely large source code repos (of the order of half-a-million files, like Google's Chrome codebase). In the worst case scenario (cold file-system cache), scanning such a hierarchy can take multiple minutes, even when using a fast C-based scanner like the `find` executable. With Watchman, the typical "scan" time drops to under a second, meaning that you can open and close your [Vim](/wiki/Vim) instances without having to worry about a lengthy scan the first time you use Command-T.

See [the README](https://github.com/facebook/watchman/tree/master/ruby/ruby-watchman) for more info about the gem. It is now [up on RubyGems](http://rubygems.org/gems/ruby-watchman), so it's only a `gem install ruby-watchman` away.

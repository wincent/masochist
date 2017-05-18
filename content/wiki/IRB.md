---
tags: ruby irb wiki
cache_breaker: 1
---

[IRB](/wiki/IRB) is short for [Interactive Ruby](/wiki/Interactive_Ruby).

You can start an [Interactive Ruby](/wiki/Interactive_Ruby) session by issuing `irb` at the command line.

# Example session

    $ irb
    irb(main):001:0> puts "Hello, world!"
    Hello, world!
    => nil
    irb(main):002:0> exit

# Tips

## Access the result of the last expression with `_`

    $ 4 + 9
    => 13
    $ _
    => 13

Source: <http://rubyquicktips.tumblr.com/post/342527837/console-tip-retrieve-the-last-return-value-with>

---
tags: ruby
---

Was just wondering how to do conditional compilation of a [Ruby](/wiki/Ruby) [C](/wiki/C) extension for Ruby 1.8/1.9.

My [first attempt](http://git.wincent.com/wikitext.git?a=commitdiff;h=7051f619c2f094bcb995a43a0add33f0ba20f6c5) didn't work, but I was able to implement a [working solution](http://git.wincent.com/wikitext.git?a=commitdiff;h=33cd74fd262cd6dde29f692d4dbe7e1f1e98f537) after finding this [tip here](http://banisterfiend.wordpress.com/2009/02/13/updating-a-c-extension-for-ruby-191/).

It basically consists of adding some lines like this to your `extconf.rb`:

    case RUBY_VERSION
    when /\A1\.8/
      $CFLAGS += ' -DRUBY_1_8_x'
    when /\A1\.9/
      $CFLAGS += ' -DRUBY_1_9_x'
    else
      raise "unsupported Ruby version: #{RUBY_VERSION}"
    end

And then in your [C](/wiki/C) code you can:

    #if defined(RUBY_1_9_x)
        ...
    [/tags/elif #elif] defined(RUBY_1_8_x)
        ...
    [/tags/else #else]
    [/tags/error #error] unsupported RUBY_VERSION
    [/tags/endif #endif]

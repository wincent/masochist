---
tags: ruby wiki
title: Conditional compilation of C extensions in Ruby 1.9
---

Was just wondering how to do conditional compilation of a [Ruby](/wiki/Ruby) [C](/wiki/C) extension for Ruby 1.8/1.9.

My first attempt didn't work, but I was able to implement a working solution after finding this [tip here](http://banisterfiend.wordpress.com/2009/02/13/updating-a-c-extension-for-ruby-191/).

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

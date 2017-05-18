---
tags: ruby.debug wiki
---

I installed [ruby-debug](/wiki/ruby-debug) (see "[Installing ruby-debug 0.7.5](/wiki/Installing_ruby-debug_0.7.5)") because I was having trouble getting [RSpec](/wiki/RSpec) [specifications](/wiki/specifications) to run correctly under [Ruby](/wiki/Ruby)'s built-in debugger:

    ruby -r debug spec/file_to_run_in_debugger_spec.rb

The problem was that all sorts of superfluous exceptions not related to the code under test were being thrown, making debugging painful and impractical; the same specs ran fine from the command line using the normal [Ruby](/wiki/Ruby) interpreter (`ruby spec/file_to_run_in_debugger_spec.rb`), using the `spec` tool (`spec spec/file_to_run_in_debugger_spec.rb`) or from a [Rakefile](/wiki/Rakefile) (`rake spec`).

Before I got a chance to figure out why this was happening I discovered [ruby-debug](/wiki/ruby-debug) and thought I'd give it a go. Everything worked, so I didn't bother exploring the question any further.

# Launching a spec under [ruby-debug](/wiki/ruby-debug)

    rdebug spec/parser_spec.rb

# Getting help from inside the debugger

## Getting a list of commands

    h

## Getting help on a specific command

For example, getting help on the `list` command:

    h list

# Seeing where you are in the source code

## Listing

    l

## Turning on automatic listing on every stop

    set autolist

## Printing a backtrace

    bt

# Breakpoints

## Setting a breakpoint on a failing [spec](/wiki/spec) (example)

One of my [specs](/wiki/specs) was failing like this:

    1)
    NoMethodError in 'parsing with the parser should be able to mix comments and plain text'
    undefined method `[]' for #<Walrus::WalrusGrammar::Comment:0x348258>
    /Users/wincent/trabajo/unversioned/walrus/svn-files/trunk/spec/parser_spec.rb:102:
    /Users/wincent/trabajo/unversioned/walrus/svn-files/trunk/spec/parser_spec.rb:10:

To run the [spec](/wiki/spec) under [ruby-debug](/wiki/ruby-debug) from the `trunk` directory:

    rdebug spec/parser_spec.rb

To set a breakpoint *just before* the failing [spec](/wiki/spec):

    b 101

To continue execution up to the breakpoint:

    c

## To list currently set breakpoints

    b

# Stepping through code

## Moving to next line

This *doesn't* go into methods:

    n

The full help for the `next` command is:

    n[ext][ nnn]    go over one line or till line nnn

## Stepping into the next line

This *does* go into methods:

    s

The full help for the `step` command is:

    s[tep][ nnn]    step (into methods) one line or till line nnn

To step out of the current method, you `finish` it:

    fin

## Moving up and down the stack frames

This would normally be used in conjunction with `bt` (to get a list of frames).

### Moving to the newest frame

    f 0

### Moving to the oldest frame

    f -1

# Inspecting objects

    p object

## Evaluating expressions

In fact, `p` is just a synonym for `eval` and can be used to evaluate any [Ruby](/wiki/Ruby) expression:

    eval 1 + 2

You can turn on auto-evaluation as well which automatically tries to `eval` any command not recognized by [ruby-debug](/wiki/ruby-debug):

    set autoeval

This allows you to type things like:

    myvar

Instead of:

    eval myvar

## Showing the instance variables of an object

Showing the instance variables of the current receiver:

    var i self

## Showing current local variables

    var l

## Showing global variables

    var g

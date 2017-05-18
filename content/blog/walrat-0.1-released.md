---
title: Walrat 0.1 released
tags: releases walrat blog
cache_breaker: 1
---

[Walrat](/wiki/Walrat) is a sophisticated parser generator written in [Ruby](/wiki/Ruby). It can be used to dynamically generate (at runtime):

-   integrated lexers
-   "[packrat](/wiki/packrat)" (memoizing) parsers cable of recognizing [Parsing Expression Grammars](/wiki/Parsing_Expression_Grammars) (PEG), including grammars that use left-recursion
-   [Abstract Syntax Tree](/wiki/Abstract_Syntax_Tree) builders that can build trees of arbitrary complexity

Walrat was originally written in early 2007 as part of the [Walrus](/wiki/Walrus) [object-oriented templating](/wiki/object-oriented_templating) system. This 0.1 release marks its extraction into a separate [gem](/wiki/gem) for easier reuse in other projects. The [Walrus grammar](http://git.wincent.com/Walrus.git/blob/HEAD:/lib/walrus/grammar.rb) is an excellent example of some of the more advanced parsing techniques that can be achieved using Walrat, including:

-   dynamic definition of grammars and parsers at runtime using a simple DSL
-   standard PEG constructs such as ordered choice, concatenation, repetition, predicates
-   string and regular-expression based "parslets"
-   arbitrarily complex proc/lambda based "parslets"
-   convenient and customizable skipping behavior (in this case, whitespace skipping)
-   left-recursion
-   left-associative and right-associative productions
-   dynamic AST node synthesis
-   addition of custom behavior to AST nodes (in this case, compilation behavior) through custom Ruby code
-   multiline comments, including nested multiline comments
-   "island" parsers for processing "[Here documents](/wiki/Here_documents)" and include files

## Example

This example shows a simple grammar that can be used to parse comma-separated lists of integers:

```ruby
#!/usr/bin/env ruby
require 'rubygems'
require 'walrat'

class MySuperGrammar < Walrat::Grammar
  starting_symbol :sequence
  skipping        :whitespace
  rule            :whitespace, /\s+/
  rule            :sequence, :digits & (',' & :digits).zero_or_more
  rule            :digits, /\d+/
end

grammar = MySuperGrammar.new

begin
  grammar.parse 'hello!'
rescue Walrat::ParseError => e
  puts "bad input: failed to parse (#{e})"
end

result = grammar.parse '123, 456, 789'
puts "good input: parsed (#{result})"
```

Running this file produces the following output:

    bad input: failed to parse (non-matching characters "hello!" while parsing regular expression "/\A(?-mix:\d+)/")
    good input: parsed (123,456,789)

## System requirements

Walrat currently only supports Ruby 1.8, although Ruby 1.9 compatibility work is underway. JRuby is not yet officially supported, although many complex grammars (such as the Walrus grammar) have already been successfully tested.

# Installation

```shell
$ sudo gem install walrat
```

## Source code

The [Git](/wiki/Git) source code repository can be explored in a browser using [the web interface](http://git.wincent.com/walrat.git).

## Donations

[Walrat](/wiki/Walrat) is free, [open source](/wiki/open_source) software released under the BSD license. If you find it useful and would like to support further development you can [make a donation](/products/walrat/donations) via PayPal to <win@wincent.com>.

---
title: Update Rakefile to include new Rails additions with gem (wikitext, fafe7ba)
tags: snippets
---

The Rails-specific functionality is now included with the gem, but note that it is not enabled by default. If you wish to include it you need to add either or both of these to your environment.rb:

require 'wikitext/string' require 'wikitext/rails'

In addition to the normal "require 'wikitext'".

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;

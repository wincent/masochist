---
title: Refactor for deployment using RubyGems (wikitext, 80ae725)
tags: snippets
---

On thinking about the need for this to run on multiple platforms I decided that it wasn't really suited to being used as a Rails plug-in:

- Rails plugins are usually deployed by simply unpacking them into the "vendor/plugins" directory; given that this is actually a C extension this means that a second step is required (compilation)

- I looked at cross-compiling here locally before deploying the plugin but that seems awfully brittle with plenty of scope for breakage when one of the target systems is upgraded

- There is already a system designed to handle exactly this deployment problem: RubyGems

So even though I would prefer to have all of the dependencies of my Rails applications frozen into the "vendor" directory, it seems that deployment as a RubyGem is the most robust solution. I can still tie my application to a particular version of the gem by doing something like:

require 'rubygems' gem 'wikitext', '&gt;= 1.1'

So this commit refactors the working tree to match the typical RubyGems pattern (ext, spec subdirectories). At the same time while preparing the gem specification I realized that the inconsistencies in the naming conventions were too ugly to bear, and so as part of the move I renamed many of the files and symbols (capitalization changes and omitting underscores).

As all of these changes have to be made in a single batch to keep the specs passing I am not splitting this up into a series of smaller commits.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;

---
tags: vim wiki
cache_breaker: 1
---

[Vim](/wiki/Vim) features a regular expression matching engine which, while roughly as powerful as Perl's, is unfortunately quite different in terms of syntax.

To illustrate, consider a task I recently faced. I wanted to sweep through a large collection of [Ruby](/wiki/Ruby) files replacing a bunch of `require` lines that used relative paths with equivalent absolute paths.

This meant replacing lines of the form:

```ruby
require File.dirname(__FILE__) + "/../spec_helper"
```

With:

```ruby
require File.expand_path('../spec_helper', File.dirname(__FILE__))
```

The invocation to do this with Vim is:

    :%s/require .\+\("\|'\)\/\?\(.\+spec_helper\)\("\|')/require File.expand_path('\2', File.dirname(__FILE__))/c

While the basic format is familiar:

    s/find/replace/

Note that almost all "meta" characters which usually have special meaning in regular expressions must be escaped (characters like `(`, `)`, `|`, `?` and `+`). Other "meta" characters like `.`, however, must not be escaped. The additional escaping makes for very punctuation-heavy regular expressions. What would be written in perl as:

    /require .+("|')\/?(.+spec_helper)("|')/

Or:

    /require .+["']\/?(.+spec_helper)["']/

Is written in Vim as:

    /require .\+\("\|'\)\/\?\(.\+spec_helper\)\("\|'\)/

You can start the pattern with `\v` to activate "very magic" behavior, meaning that just about every character that can possibly be interpreted with a "meta" meaning will be interpreted that way even without the preceding backslash. This brings us back a little closer to the familiar perl syntax:

    /\vrequire .+("|')\/?(.+spec_helper)("\')/

# See also

-   [Delete lines matching a pattern in Vim](/wiki/Delete_lines_matching_a_pattern_in_Vim)

---
tags: emacs wiki
---

## `align-regexp`

Mark a region like this one:

        Parser       = Wikitext::Parser.shared_parser
        parser.img_prefix.should   == original_prefix
        new_prefix               = '/totally-different-prefix/'
        parser.img_prefix             = new_prefix
        parser.img_prefix.should      == new_prefix
        parser.parse('{{bar.png}}').should == %Q{<p><img src="/totally-different-prefix/bar.png" alt="bar.png" /></p>\n}

And do `M-x align-regexp` followed by `=` to turn it into this:

        Parser                             = Wikitext::Parser.shared_parser
        parser.img_prefix.should           == original_prefix
        new_prefix                         = '/totally-different-prefix/'
        parser.img_prefix                  = new_prefix
        parser.img_prefix.should           == new_prefix
        parser.parse('{{bar.png}}').should == %Q{<p><img src="/totally-different-prefix/bar.png" alt="bar.png" /></p>\n}

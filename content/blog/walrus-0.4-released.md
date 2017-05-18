---
title: Walrus 0.4 released
tags: walrus releases blog
---

Version 0.4 of the [Walrus](/wiki/Walrus) gem has just been released. Walrus is an [object-oriented templating](/wiki/object-oriented_templating) system written in [Ruby](/wiki/Ruby) and heavily inspired by the [Cheetah template engine](/wiki/Cheetah_template_engine) (which is written in [Python](/wiki/Python)). It doesn't set out to be a full clone of Cheetah, but it does implement a very large subset of its functionality, and it employs the same directive syntax wherever possible.

This release contains [one minor bugfix](http://git.wincent.com/Walrus.git/commitdiff/268cf53c384e39a8f76ee32c160a7cef863fa6b9) and [one major behavioral change](http://git.wincent.com/Walrus.git/commitdiff/53927ca133b2e53611b81ddfbbf29f6e1be9f563); the default output extension for filled templates is no longer "html", so you will either need to explicitly pass in the extension (eg. `walrus fill -e html ...`) ***or*** rename your templates to include the desired extension:

-   if you formerly had `index.tmpl` as your source template, resulting in `index.rb` when compiled and `index.html` when filled
-   you'll now have `index.html.tmpl` as your source template, and it will produce `index.html.rb` when compiled and `index.html` when filled

This new approach has a few benefits which are fully explained in the [commit log message](http://git.wincent.com/Walrus.git/commitdiff/53927ca133b2e53611b81ddfbbf29f6e1be9f563).

# Changelog and source code

A full list of changes in this release can be viewed [here](http://git.wincent.com/Walrus.git/shortlog/refs/tags/0.4). The source code can be explored via [the project source code repository](http://git.wincent.com/Walrus.git).

# Installation

```shell
$ sudo gem install walrus
```

# Donations

[Walrus](/wiki/Walrus) is free, [open source](/wiki/open_source) software released under the BSD license. If you find it useful and would like to support further development you can [make a donation](/products/walrus/donations) via PayPal to <win@wincent.com>.

# See also

For more information see the [Walrus](/wiki/Walrus) product pages.

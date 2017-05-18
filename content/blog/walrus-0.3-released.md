---
title: Walrus 0.3 released
tags: walrus releases blog
---

Version 0.3 of the [Walrus](/wiki/Walrus) gem has just been released. Walrus is an [object-oriented templating](/wiki/object-oriented_templating) system written in [Ruby](/wiki/Ruby) and heavily inspired by the [Cheetah template engine](/wiki/Cheetah_template_engine) (which is written in [Python](/wiki/Python)). It doesn't set out to be a full clone of Cheetah, but it does implement a very large subset of its functionality, and it employs the same directive syntax wherever possible.

For over 3 years now, Walrus has been powered by its own sophisticated, embedded "[packrat](/wiki/packrat)" parser generator. The generator has at last been extracted into a separate gem called [Walrat](/wiki/Walrat) for ease of use in other projects (see [the release announcement](/blog/walrat-0.1-released)). Version 0.3 of Walrus is the first release without the embedded parser generator, and instead depends on Walrat as an external dependency.

# Changelog and source code

A full list of changes in this release can be viewed [here](http://git.wincent.com/Walrus.git/shortlog/refs/tags/0.3). The source code can be explored via [the project source code repository](http://git.wincent.com/Walrus.git).

# Installation

```shell
$ sudo gem install walrus
```

# Donations

[Walrus](/wiki/Walrus) is free, [open source](/wiki/open_source) software released under the BSD license. If you find it useful and would like to support further development you can [make a donation](/products/walrus/donations) via PayPal to <win@wincent.com>.

# See also

For more information see the [Walrus](/wiki/Walrus) product pages.

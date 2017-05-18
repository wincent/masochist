---
tags: rubygems wiki
cache_breaker: 1
---

The RubyGems team has gone on a deprecation frenzy, meaning that after running `sudo gem update --system` every `gem` command is likely to spew a bunch of deprecation warnings across the screen.

To silence those, you'll need to do:

```shell
$ sudo gem pristine --all --no-extensions
```

Followed by individually for each extension, potentially with optional build arguments after a `--`:

```shell
$ sudo gem pristine json
```

# See also

-   <http://blog.zenspider.com/2011/05/rubygems-18-is-coming.html>

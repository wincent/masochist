---
tags: rubygems wiki
cache_breaker: 1
---

# Links

-   Project information page: <http://rubyforge.org/projects/rubygems/>
-   Manuals: <http://rubygems.org/>
-   Wikipedia article: <http://en.wikipedia.org/wiki/RubyGems>

# Notes

RubyGems are actually [tar](/wiki/tar) archives.

```shell
$ ls -laF *.gem
-rw-r--r--  1 wincent  75776 19 abr 22:57 wikitext-1.10.1.99.gem
$ tar tvf wikitext-1.10.1.99.gem 
-rw-r--r--  0 wheel  wheel   72208  1 ene  1970 data.tar.gz
-rw-r--r--  0 wheel  wheel     930  1 ene  1970 metadata.gz
$ tar xvf wikitext-1.10.1.99.gem 
x data.tar.gz
x metadata.gz
$ tar tvf data.tar.gz 
-rwxr-xr-x  0 wheel  wheel    3495  1 ene  1970 bin/wikitext
-rw-r--r--  0 wheel  wheel    1671  1 ene  1970 ext/extconf.rb
-rw-r--r--  0 wheel  wheel    3114  1 ene  1970 ext/ary.c
-rw-r--r--  0 wheel  wheel  112949  1 ene  1970 ext/parser.c
-rw-r--r--  0 wheel  wheel    3238  1 ene  1970 ext/str.c
...
$ gunzip metadata.gz 
$ cat metadata 
--- !ruby/object:Gem::Specification 
name: wikitext
version: !ruby/object:Gem::Version 
  prerelease: false
  segments: 
  - 1
  - 10
  - 1
  - 99
  version: 1.10.1.99
platform: ruby
```

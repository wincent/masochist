---
tags: jruby wiki
cache_breaker: 1
---

# Installation

Full binary distribution downloaded from <http://jruby.org/> and then moved into place:

```shell
$ sudo -s
# mv jruby-bin-1.5.1.tar.gz /usr/local/
# cd /usr/local
# tar xzvf jruby-bin-1.5.1.tar.gz
# ln -s jruby-1.5.1 jruby
```

# `PATH` set-up

`/usr/local/jruby/bin` should be added to the `PATH`.

# Example use

With [JRuby](/wiki/JRuby) in the `PATH` you can do things like install gems:

    jruby -S gem install celerity

Or evaluate code:

    jruby -e "p 1 + 2"

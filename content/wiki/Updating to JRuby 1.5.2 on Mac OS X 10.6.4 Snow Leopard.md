---
tags: jruby os.x wiki
cache_breaker: 1
---

```shell
$ wget http://jruby.org.s3.amazonaws.com/downloads/1.5.2/jruby-bin-1.5.2.tar.gz
$ sudo tar xzvf jruby-bin-1.5.2.tar.gz -C /usr/local                            # extract to /usr/local/
$ cd /usr/local
$ sudo rm jruby                                                                 # remove old symlink from initial install
$ sudo ln -s jruby-1.5.2 jruby                                                  # set up new symlink
$ jruby --version
# jruby -S gem update system
# jruby -S gem install bundler
```

As noted in my initial installation notes, in order to use [JRuby](/wiki/JRuby) installed at this location you must ensure that `/usr/local/jruby/bin` is in your `PATH`.

# See also

-   Initial installation notes: "[Installing JRuby 1.5.1 on Mac OS X 10.6.3 Snow Leopard](/wiki/Installing_JRuby_1.5.1_on_Mac_OS_X_10.6.3_Snow_Leopard)"

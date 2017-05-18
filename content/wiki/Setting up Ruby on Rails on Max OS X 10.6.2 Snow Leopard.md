---
tags: rails snow.leopard wiki
cache_breaker: 1
---

**Note:** These build notes were made while working with a late-2009 (64-bit) iMac, and as such are specific to a 64-bit architecture. For notes made building on a 32-bit platform see "[Setting up Ruby on Rails on Mac OS X 10.6 Snow Leopard](/wiki/Setting_up_Ruby_on_Rails_on_Mac_OS_X_10.6_Snow_Leopard)".

# Pre-installed pieces

[Mac OS X](/wiki/Mac_OS_X) [Snow Leopard](/wiki/Snow_Leopard) already comes with some of the basic required pieces, such as [RubyGems](/wiki/RubyGems), [Ruby](/wiki/Ruby) and [Rails](/wiki/Rails) itself.

I began by updating two of these pieces to the latest versions:

```shell
$ sudo gem update --system # update from version 1.3.1 to 1.3.6
$ sudo gem install rails # update from version 2.2.2 to 2.3.5
```

# Other requirements

My deployment target uses [nginx](/wiki/nginx), [memcached](/wiki/memcached) and [MySQL](/wiki/MySQL), so I install each of those on my local machine as well:

-   [Installing nginx 0.7.65 on Mac OS X 10.6.2 Snow Leopard](/wiki/Installing_nginx_0.7.65_on_Mac_OS_X_10.6.2_Snow_Leopard)
-   [Installing memcached 1.4.4 on Mac OS X 10.6.2 Snow Leopard](/wiki/Installing_memcached_1.4.4_on_Mac_OS_X_10.6.2_Snow_Leopard)
-   [Installing MySQL 5.1.45 on Mac OS X 10.6.2 Snow Leopard](/wiki/Installing_MySQL_5.1.45_on_Mac_OS_X_10.6.2_Snow_Leopard)

# Application-level preparation

Once all the requisite pieces are installed we just need to prime the database and we are back in action:

```shell
$ rake db:create:all
$ rake db:migrate:all
```

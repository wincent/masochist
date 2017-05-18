---
tags: rails mysql nginx memcached snow.leopard wiki
cache_breaker: 1
---

**Note:** These build notes were made while working with a first-generation Intel-powered iMac, and as such are specific to a 32-bit architecture. For notes made building on a 64-bit platform see "[Setting up Ruby on Rails on Max OS X 10.6.2 Snow Leopard](/wiki/Setting_up_Ruby_on_Rails_on_Max_OS_X_10.6.2_Snow_Leopard)".

# Pre-installed pieces

[Mac OS X](/wiki/Mac_OS_X) already comes with the basic required pieces:

```shell
$ gem --version
1.3.1
$ ruby --version
ruby 1.8.7 (2008-08-11 patchlevel 72) [universal-darwin10.0]
$ rails --version
Rails 2.2.2
$ gem list

*** LOCAL GEMS ***

actionmailer (2.2.2, 1.3.6)
actionpack (2.2.2, 1.13.6)
actionwebservice (1.2.6)
activerecord (2.2.2, 1.15.6)
activeresource (2.2.2)
activesupport (2.2.2, 1.4.4)
acts_as_ferret (0.4.3)
capistrano (2.5.2)
cgi_multipart_eof_fix (2.5.0)
daemons (1.0.10)
dnssd (0.6.0)
fastthread (1.0.1)
fcgi (0.8.7)
ferret (0.11.6)
gem_plugin (0.2.3)
highline (1.5.0)
hpricot (0.6.164)
libxml-ruby (1.1.2)
mongrel (1.1.5)
needle (1.3.0)
net-scp (1.0.1)
net-sftp (2.0.1, 1.1.1)
net-ssh (2.0.4, 1.1.4)
net-ssh-gateway (1.0.0)
rails (2.2.2, 1.2.6)
rake (0.8.3)
RedCloth (4.1.1)
rspec (1.2.8)
ruby-openid (2.1.2)
ruby-yadis (0.3.4)
rubynode (0.1.5)
sqlite3-ruby (1.2.4)
termios (0.9.4)
wopen3 (0.1)
xmpp4r (0.4)
```

(Note that on that list are two items that I had already installed and are not in a pristine [Snow Leopard](/wiki/Snow_Leopard) install: [RSpec](/wiki/RSpec) and [wopen3](/wiki/wopen3).)

# Other requirements

My workflow requires [nginx](/wiki/nginx), [memcached](/wiki/memcached) and [MySQL](/wiki/MySQL). In addition to installing these on my local [Snow Leopard](/wiki/Snow_Leopard) machine I took the opportunity to update a couple of components on the server ([nginx](/wiki/nginx) and [memcached](/wiki/memcached)) so as to have exactly the same versions on both my deployment and development machines.

## [nginx](/wiki/nginx)

See:

-   [Installing nginx 0.7.61 on Mac OS X 10.6 Snow Leopard](/wiki/Installing_nginx_0.7.61_on_Mac_OS_X_10.6_Snow_Leopard)
-   [Updating to nginx 0.7.61 on Red Hat Enterprise Linux 5.3](/wiki/Updating_to_nginx_0.7.61_on_Red_Hat_Enterprise_Linux_5.3)

## [memcached](/wiki/memcached)

See:

-   [Installing memcached 1.4.1 on Mac OS X 10.6 Snow Leopard](/wiki/Installing_memcached_1.4.1_on_Mac_OS_X_10.6_Snow_Leopard)
-   [Updating to memcached 1.4.1 on Red Hat Enterprise Linux 5.3](/wiki/Updating_to_memcached_1.4.1_on_Red_Hat_Enterprise_Linux_5.3)

## [MySQL](/wiki/MySQL)

See:

-   [Installing MySQL 5.0.85 on Mac OS X 10.6 Snow Leopard](/wiki/Installing_MySQL_5.0.85_on_Mac_OS_X_10.6_Snow_Leopard)

Note that this is not an exact match with the version running on the server (5.0.45-7.el5), but it is at least in the same major version series. I did not update to the 5.1 "GA" (General Availability) release on the server because I did not want to lose the automatic patches pushed out via the [Red Hat](/wiki/Red_Hat) network.

## Other prerequisites

We'll need the mysql [gem](/wiki/gem), which is considerably easier to build on [Snow Leopard](/wiki/Snow_Leopard) than it was on [Leopard](/wiki/Leopard) (see "[Installing the mysql gem on Mac OS X Leopard 10.5.1](/wiki/Installing_the_mysql_gem_on_Mac_OS_X_Leopard_10.5.1)":

```shell
$ sudo gem install mysql
```

And Rack. For some reason, [Rails](/wiki/Rails) complains even when it has its own built-in version of Rack:

```shell
$ script/server
/System/Library/Frameworks/Ruby.framework/Versions/1.8/usr/lib/ruby/1.8/rubygems.rb:636:in `report_activate_error': Could not find RubyGem rack (~> 1.0.0) (Gem::LoadError)
```

So we install it:

```shell
$ sudo gem install rack
```

And now it works:

```shell
$ script/server
=> Booting Mongrel
=> Rails 2.3.3 application starting on http://0.0.0.0:3000
=> Call with -d to detach
=> Ctrl-C to shutdown server
```

Note that to actually do anything useful with the server you'll need to re-create your databases or migrate them. See "[Migrating MySQL databases](/wiki/Migrating_MySQL_databases)" for an example.

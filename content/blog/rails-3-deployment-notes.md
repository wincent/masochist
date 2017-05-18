---
title: Rails 3 deployment notes
tags: rails site blog
cache_breaker: 1
---

As part of [yesterday's "extended" maintenance](/extended-site-maintenance) I deployed a new version of the site, moving from [Rails](/wiki/Rails) 2 to [Rails 3](/wiki/Rails_3) in a process involving nearly [1,000 commits](/blog/site-updates-0.18). I followed this up with [some additional tweaks and fixes today](/blog/site-updates-0.19).

Overall it went surprisingly smoothly considering the number of changes involved. Every site is different, of course, so the problems I faced in this deployment are probably going to be different than the ones you might face on your own sites, but I wanted to post some notes on the issues which cropped up, just in case they might be of use to others.

# The importance of the staging environment

I host using [Amazon Web Services](/wiki/Amazon_Web_Services), so I had the luxury of being able to create an exact clone of my production server which I could use as a staging environment to do a rehearsal deployment. This first rehearsal served to discover what roadblocks and I was going to hit, and figure out how to get around them.

I actually created a second clone after going through this initial rehearsal, and confirmed that the "recipe" that I had worked out was going to work without hitches when I came to do it on the live system.

The beauty of these cloneable instances is that you only pay a few cents an hour, and only for as long as you are running your tests. And as an added bonus, if you really screw things up you can always use one of those fabulous [S3](/wiki/S3) backups of your [EBS](/wiki/EBS) volumes to travel back in time and put things back the way they were before you started.

Yes, using Amazon Web Services means dealing with a headache-inducing quantity of acronyms, but it's well worth the learning curve that you have to go through in order to learn what they all mean.

See "[Cloning an EC2 instance for testing purposes](/wiki/Cloning_an_EC2_instance_for_testing_purposes)" for notes on using [AWS](/wiki/AWS) to do staging deployments, and relatedly, "[Recovering data from an EBS snapshot](/wiki/Recovering_data_from_an_EBS_snapshot)" for a look at piecemeal retrieval of data from backups (for wholesale retrieval you would use the cloning techniques already mentioned).

# Bundler

Rails 2.3 didn't use [Bundler](/wiki/Bundler), and neither had I bothered trying to retrofit it onto it, but Rails 3 does. So first step was to ensure Bundler was on the target system. You may need to update your RubyGems first though, as Bundler depends on a recent version:

```shell
# gem update --system
# gem install bundler
```

# Altered deploy sequence

In a normal deploy the sequence runs like this:

1.  Deploy the new version
2.  Migrate the test database
3.  Run the spec suite
4.  If the specs pass, get ready to really go live with the new version:
    1.  Throw up a maintenance page
    2.  Migrate the production database
    3.  Update your symlinks to point at the just-deployed files
    4.  Restart your application server
    5.  Remove the maintenance page

In this case, however, I have to make some tweaks because the move includes a new database adapter (Rails 3 uses the [mysql2](/wiki/mysql2) gem by default for new apps, so I decided to switch over at the same time seeing as I am already changing everything else).

This means I can't migrate the test database without first changing my `config/database.yml`, and I can't change that without potentially impacting the live site (for example, if [Monit](/wiki/Monit) decides top restart the application server while I'm working). So the sequence for this deployment will be:

1.  Deploy the new version
2.  Throw up the maintenance page
3.  Tweak `config/database.yml`
4.  Migrate the test database
5.  Run the spec suite
6.  Migrate the production database
7.  Update the symlinks
8.  Restart the application server
9.  Remove the maintenance page

# Unicorn

I use [Unicorn](/wiki/Unicorn) as my app server, and under Rails 2.3 that meant using the `unicorn_rails` executable. Under Rails 3, however, you have to use the `unicorn` executable instead.

This is actually a pretty straightforward replacement, as the same config file and command line arguments can be used without alteration (or at least I found they could in my case).

The complication, however, is that previously Unicorn was installed in the system gems, and now it will be installed via Bundler. In my first rehearsal, I tried to continue with Unicorn as a system gem, but got bitten by a classic dependency resolution conflict, the dreaded message:

    You have already activated rack 1.0.1, but your Gemfile requires rack 1.2.1. Consider using bundle exec

Well, this is exactly the problem Bundler is designed to solve, so what the heck, let's throw Unicorn in the bundle as well. (Sure, I *could* remove rack 1.0.1 from my system, but then I couldn't rollback without also having to re-install rack 1.0.1. It's better to just use Bundler.)

So this makes the upgrade pattern look like this:

1.  Edit `/etc/monitrc` to let [Monit](/wiki/Monit) know about the new path to the `unicorn` executable, in a shared `BUNDLE_PATH` location (it needs to be a shared location so Monit can reliably start up Unicorn as different versions are deployed and potentially rolled back).
2.  Deploy, so that Unicorn gets installed where Monit will look for it.
3.  Send Monit the `HUP` signal so that it will re-read its configuration file.

# Memcache

Rails 2.3 came with a bundled [memcached](/wiki/memcached) client. Rails 3 does not, and the recommended gem is the [memcache](/wiki/memcache) gem. (**Update:** this isn't true at all; the recommended gem is still the memcache-client gem, it's just that [this commit](http://github.com/rails/rails/commit/57144388f0b4c31e43ced7cfd1d6efaded88cf5e) introduced the incorrect advice to install the memcache gem instead. Fix [submitted here](https://rails.lighthouseapp.com/projects/8994/tickets/5539). All of this section, then, is moot, as `gem install memcache-client` works fine on 32-bit Fedora.)

I had a lot of trouble building the [memcache](/wiki/memcache) Gem on the server. It builds fine on my local machine (a 64-bit iMac) but fails miserably on the 32-bit Fedora OS I'm running on AWS.

The problem was twofold:

-   It would only build if `--disable-64bit CFLAGS='-march=i686'` was passed to `./configure`
-   Setting that up with `bundle config build.memcache` didn't work because the memcache gem ignores any special settings passed in on the [command line](/wiki/command_line); note that this means that a manual build using `gem install memcache -- --my-custom-flags-here` wouldn't work either

## Workaround 1

This was my first attempt; it worked, but was hideously ugly, so I continued searching for a better solution:

1.  Run `bundle install` and watch it fail
2.  `cd` into the `BUNDLE_PATH` and the directory containing the unpacked memcache gem
3.  Hack the `extconf.rb` file to include the needed arguments to `configure`
4.  Build using `ruby extconf.rb && make`
5.  Get up to the directory inside `BUNDLE_PATH` where the `cache` and `specification` folders are (ie. `cd ../../..`)
6.  Manually generate a gemspec so that Bundler can "see" that the gem is installed (ie. `gem spec cache/memcache-1.2.12.gem --ruby > specifications/memcache-1.2.12.gemspec`)
7.  Repeat `bundle install` and watch it work (it won't try to reinstall or rebuild the memcache gem)

## Workaround 2

The workaround I went with in the end was the following:

First, pre-install, system-wide the [libmemcache](/wiki/libmemcache) library that the memcache gem links against:

```shell
$ wget http://launchpad.net/libmemcached/1.0/0.43/+download/libmemcached-0.43.tar.gz
$ curl http://launchpad.net/libmemcached/1.0/0.43/+download/libmemcached-0.43.tar.gz/+md5
$ openssl md5 libmemcached-0.43.tar.gz
$ tar xzvf libmemcached-0.43.tar.gz
$ cd libmemcached-0.43
$ ./configure --disable-64bit CFLAGS='-march=i686'
$ make
$ make test
$ sudo make install
```

Now, manually install the memcache gem in our `BUNDLE_PATH` (made possible with the help of `GEM_HOME`) passing in the `EXTERNAL_LIB` variable so that it will use the just-built system-wide library rather than its own bundled one:

```shell
$ mkdir -p $BUNDLE_PATH/ruby/1.8
$ env GEM_HOME=$BUNDLE_PATH/ruby/1.8 EXTERNAL_LIB=1 gem install memcache
$ bundle install
```

As the gem is preinstalled, Bundler won't try to rebuild it, and it works.

## The final solution

The maintainer of the memcache gem was kind enough to make a tweak and release a new version, 1.2.13, which *does* take notice of any extra arguments you pass in via `gem install memcache -- --other-args`, and therefore, by extension, `bundle config build.memcache ...` as well.

So while my first deployment required manual intervention before I could go ahead with it, subsequent deployments work without any special set-up other than:

```shell
$ bundle config build.memcache --disable-64-bit "CFLAGS=\'-march=i686\'"
```

(Note the need for funky escaping of the quotes, otherwise they'll get eaten.)

# Other issues

A couple of other issues did pop-up, but they were cases of [PEBKAC](/wiki/PEBKAC) more than anything else:

-   I forgot to name my outgoing mailer templates with an extension of `.text.erb`, so they ended up going out marked as `text/html` rather than `text/plain` (under Rails 2 they had just had `.erb` as their extension)

And this one, which has really nothing to do with Rails 3 at all:

-   Ignorance led me to add my `db/schema.rb` to my `.gitignore` file a long time ago, and lack of vigilance meant that the the column types in my local and remote databases gradually drifted out of sync sufficiently that some new code worked perfectly locally and passed all specs, but exploded on the production server

Those were really the only hiccups I encountered in the deployment; not bad at all considering it is the biggest deployment I've ever done, apart from the initial launch of the site several years ago.

---
tags: rails updates
---

Notes made while upgrading to [Rails 2.0.2](/wiki/Rails_2.0.2) on [Mac OS X](/wiki/Mac_OS_X) [Leopard](/wiki/Leopard) 10.5.1.

# Installation

    $ sudo gem install rails
    Password:
    Updating metadata for 28 gems from http://gems.rubyforge.org
    ............................
    complete
    Successfully installed activesupport-2.0.2
    Successfully installed activerecord-2.0.2
    Successfully installed actionpack-2.0.2
    Successfully installed actionmailer-2.0.2
    Successfully installed activeresource-2.0.2
    Successfully installed rails-2.0.2
    6 gems installed
    Installing ri documentation for activesupport-2.0.2...
    Installing ri documentation for activerecord-2.0.2...
    Installing ri documentation for actionpack-2.0.2...
    Installing ri documentation for actionmailer-2.0.2...
    Installing ri documentation for activeresource-2.0.2...
    Installing RDoc documentation for activesupport-2.0.2...
    Installing RDoc documentation for activerecord-2.0.2...
    Installing RDoc documentation for actionpack-2.0.2...
    Installing RDoc documentation for actionmailer-2.0.2...
    Installing RDoc documentation for activeresource-2.0.2...

# Updating the [FastRI](/wiki/FastRI) index

    $ fastri-server -b
    Building index.
    Indexed:
    * 7710 methods
    * 1364 classes/modules
    Needed 2.129799 seconds

# Cleaning up older versions of installed [gems](/wiki/gems)

The current version of [RubyGems](/wiki/RubyGems) seems to have a bug in which the `gem cleanup` command doesn't actually remove all of the old versions that it could; it seems to only remove the second-to-latest version, thus requiring you to run it several times:

    $ sudo gem cleanup --dryrun
    Password:
    Cleaning up installed gems...
    Dry Run Mode: Would uninstall cgi_multipart_eof_fix-2.2
    Dry Run Mode: Would uninstall haml-1.7.1
    Dry Run Mode: Would uninstall rubygems-update-0.9.5
    Dry Run Mode: Would uninstall rails-1.99.1
    Dry Run Mode: Would uninstall activeresource-1.99.1
    Dry Run Mode: Would uninstall actionwebservice-1.2.3
    Dry Run Mode: Would uninstall fastthread-1.0
    Dry Run Mode: Would uninstall gem_plugin-0.2.2
    Dry Run Mode: Would uninstall ruby-debug-0.9.3
    Dry Run Mode: Would uninstall ruby-debug-base-0.9.3
    Dry Run Mode: Would uninstall RubyInline-3.6.5
    Dry Run Mode: Would uninstall rcov-0.8.0.2
    Dry Run Mode: Would uninstall actionmailer-1.99.1
    Dry Run Mode: Would uninstall actionpack-1.99.1
    Dry Run Mode: Would uninstall rspec-1.0.8
    Dry Run Mode: Would uninstall ZenTest-3.7.1
    Dry Run Mode: Would uninstall hoe-1.3.0
    Dry Run Mode: Would uninstall mongrel-1.0.3
    Dry Run Mode: Would uninstall daemons-1.0.7
    Dry Run Mode: Would uninstall activerecord-1.99.1
    Dry Run Mode: Would uninstall activesupport-1.99.1
    Dry Run Mode: Would uninstall rake-0.8.0
    Clean Up Complete
    $ gem list

    *** LOCAL GEMS ***

    actionmailer (2.0.2, 1.99.1, 1.99.0, 1.3.5, 1.3.3)
    actionpack (2.0.2, 1.99.1, 1.99.0, 1.13.5, 1.13.3)
    actionwebservice (1.2.5, 1.2.3)
    activerecord (2.0.2, 1.99.1, 1.99.0, 1.15.5, 1.15.3)
    activeresource (2.0.2, 1.99.1, 1.99.0)
    activesupport (2.0.2, 1.99.1, 1.99.0, 1.4.4, 1.4.2)
    acts_as_ferret (0.4.1)
    capistrano (2.0.0)
    cgi_multipart_eof_fix (2.5.0, 2.2)
    daemons (1.0.9, 1.0.7)
    dnssd (0.6.0)
    fastri (0.3.0.1)
    fastthread (1.0.1, 1.0)
    fcgi (0.8.7)
    ferret (0.11.4)
    gem_plugin (0.2.3, 0.2.2)
    haml (1.8.0, 1.7.1)
    highline (1.2.9)
    hoe (1.4.0, 1.3.0)
    hpricot (0.6)
    libxml-ruby (0.3.8.4)
    mongrel (1.1.2, 1.0.3, 1.0.1)
    mysql (2.7)
    needle (1.3.0)
    net-sftp (1.1.0)
    net-ssh (1.1.2)
    ParseTree (2.1.1)
    rails (2.0.2, 1.99.1, 1.99.0, 1.2.5, 1.2.3)
    rake (0.8.1, 0.8.0, 0.7.3)
    rcov (0.8.1.0, 0.8.0.2)
    RedCloth (3.0.4)
    rspec (1.1.1, 1.0.8)
    ruby-debug (0.10.0, 0.9.3)
    ruby-debug-base (0.10.0, 0.9.3)
    ruby-openid (1.1.4)
    ruby-yadis (0.3.4)
    ruby2ruby (1.1.8)
    rubyforge (0.4.4)
    rubygems-update (1.0.1, 0.9.5)
    RubyInline (3.6.6, 3.6.5)
    rubynode (0.1.3)
    sources (0.0.1)
    sqlite3-ruby (1.2.1)
    termios (0.9.4)
    walrus (0.1)
    wopen3 (0.1)
    ZenTest (3.7.2, 3.7.1, 3.7.0, 3.6.1)
    $ sudo gem cleanup
    Cleaning up installed gems...
    Attempting uninstall on cgi_multipart_eof_fix-2.2
    Successfully uninstalled cgi_multipart_eof_fix-2.2
    Attempting uninstall on haml-1.7.1
    Successfully uninstalled haml-1.7.1
    Attempting uninstall on rubygems-update-0.9.5
    Successfully uninstalled rubygems-update-0.9.5
    Attempting uninstall on rails-1.99.1
    Successfully uninstalled rails-1.99.1
    Attempting uninstall on activeresource-1.99.1
    Successfully uninstalled activeresource-1.99.1
    Attempting uninstall on actionwebservice-1.2.3

    You have requested to uninstall the gem:
    	actionwebservice-1.2.3
    rails-1.2.3 depends on [actionwebservice (= 1.2.3)]
    If you remove this gems, one or more dependencies will not be met.
    Continue with Uninstall? [Yn]  Y
    Successfully uninstalled actionwebservice-1.2.3
    Attempting uninstall on fastthread-1.0
    Successfully uninstalled fastthread-1.0
    Attempting uninstall on gem_plugin-0.2.2
    Successfully uninstalled gem_plugin-0.2.2
    Attempting uninstall on ruby-debug-0.9.3
    Successfully uninstalled ruby-debug-0.9.3
    Attempting uninstall on ruby-debug-base-0.9.3
    Successfully uninstalled ruby-debug-base-0.9.3
    Attempting uninstall on RubyInline-3.6.5
    Successfully uninstalled RubyInline-3.6.5
    Attempting uninstall on rcov-0.8.0.2
    Successfully uninstalled rcov-0.8.0.2
    Attempting uninstall on actionmailer-1.99.1
    Successfully uninstalled actionmailer-1.99.1
    Attempting uninstall on actionpack-1.99.1
    Successfully uninstalled actionpack-1.99.1
    Attempting uninstall on rspec-1.0.8
    Successfully uninstalled rspec-1.0.8
    Attempting uninstall on ZenTest-3.7.1
    Successfully uninstalled ZenTest-3.7.1
    Attempting uninstall on hoe-1.3.0
    Successfully uninstalled hoe-1.3.0
    Attempting uninstall on mongrel-1.0.3
    Successfully uninstalled mongrel-1.0.3
    Attempting uninstall on daemons-1.0.7
    Successfully uninstalled daemons-1.0.7
    Attempting uninstall on activerecord-1.99.1
    Successfully uninstalled activerecord-1.99.1
    Attempting uninstall on activesupport-1.99.1
    Successfully uninstalled activesupport-1.99.1
    Attempting uninstall on rake-0.8.0
    Successfully uninstalled rake-0.8.0
    Clean Up Complete
    $ gem list

    *** LOCAL GEMS ***

    actionmailer (2.0.2, 1.99.0, 1.3.5, 1.3.3)
    actionpack (2.0.2, 1.99.0, 1.13.5, 1.13.3)
    actionwebservice (1.2.5)
    activerecord (2.0.2, 1.99.0, 1.15.5, 1.15.3)
    activeresource (2.0.2, 1.99.0)
    activesupport (2.0.2, 1.99.0, 1.4.4, 1.4.2)
    acts_as_ferret (0.4.1)
    capistrano (2.0.0)
    cgi_multipart_eof_fix (2.5.0)
    daemons (1.0.9)
    dnssd (0.6.0)
    fastri (0.3.0.1)
    fastthread (1.0.1)
    fcgi (0.8.7)
    ferret (0.11.4)
    gem_plugin (0.2.3)
    haml (1.8.0)
    highline (1.2.9)
    hoe (1.4.0)
    hpricot (0.6)
    libxml-ruby (0.3.8.4)
    mongrel (1.1.2, 1.0.1)
    mysql (2.7)
    needle (1.3.0)
    net-sftp (1.1.0)
    net-ssh (1.1.2)
    ParseTree (2.1.1)
    rails (2.0.2, 1.99.0, 1.2.5, 1.2.3)
    rake (0.8.1, 0.7.3)
    rcov (0.8.1.0)
    RedCloth (3.0.4)
    rspec (1.1.1)
    ruby-debug (0.10.0)
    ruby-debug-base (0.10.0)
    ruby-openid (1.1.4)
    ruby-yadis (0.3.4)
    ruby2ruby (1.1.8)
    rubyforge (0.4.4)
    rubygems-update (1.0.1)
    RubyInline (3.6.6)
    rubynode (0.1.3)
    sources (0.0.1)
    sqlite3-ruby (1.2.1)
    termios (0.9.4)
    walrus (0.1)
    wopen3 (0.1)
    ZenTest (3.7.2, 3.7.0, 3.6.1)
    $ gem cleanup --dryrun
    Cleaning up installed gems...
    Dry Run Mode: Would uninstall mongrel-1.0.1
    Dry Run Mode: Would uninstall rails-1.99.0
    Dry Run Mode: Would uninstall activeresource-1.99.0
    Dry Run Mode: Would uninstall actionmailer-1.99.0
    Dry Run Mode: Would uninstall actionpack-1.99.0
    Dry Run Mode: Would uninstall ZenTest-3.7.0
    Dry Run Mode: Would uninstall rake-0.7.3
    Dry Run Mode: Would uninstall activerecord-1.99.0
    Dry Run Mode: Would uninstall activesupport-1.99.0
    Clean Up Complete
    $ sudo gem cleanup
    Cleaning up installed gems...
    Attempting uninstall on mongrel-1.0.1
    Successfully uninstalled mongrel-1.0.1
    Attempting uninstall on rails-1.99.0
    Successfully uninstalled rails-1.99.0
    Attempting uninstall on activeresource-1.99.0
    Successfully uninstalled activeresource-1.99.0
    Attempting uninstall on actionmailer-1.99.0
    Successfully uninstalled actionmailer-1.99.0
    Attempting uninstall on actionpack-1.99.0
    Successfully uninstalled actionpack-1.99.0
    Attempting uninstall on ZenTest-3.7.0
    Successfully uninstalled ZenTest-3.7.0
    Attempting uninstall on rake-0.7.3
    Successfully uninstalled rake-0.7.3
    Attempting uninstall on activerecord-1.99.0
    Successfully uninstalled activerecord-1.99.0
    Attempting uninstall on activesupport-1.99.0
    Successfully uninstalled activesupport-1.99.0
    Clean Up Complete
    $ gem cleanup --dryrun
    Cleaning up installed gems...
    Dry Run Mode: Would uninstall ZenTest-3.6.1
    Dry Run Mode: Would uninstall rails-1.2.5
    Dry Run Mode: Would uninstall actionmailer-1.3.5
    Dry Run Mode: Would uninstall actionpack-1.13.5
    Dry Run Mode: Would uninstall activerecord-1.15.5
    Dry Run Mode: Would uninstall activesupport-1.4.4
    Clean Up Complete
    $ sudo gem cleanup
    Cleaning up installed gems...
    Attempting uninstall on ZenTest-3.6.1
    Successfully uninstalled ZenTest-3.6.1
    Removing autotest
    Removing multiruby
    Removing rails_test_audit
    Removing ruby_fork
    Removing ruby_fork_client
    Removing unit_diff
    Removing zentest
    Attempting uninstall on rails-1.2.5
    Successfully uninstalled rails-1.2.5
    Attempting uninstall on actionmailer-1.3.5
    Successfully uninstalled actionmailer-1.3.5
    Attempting uninstall on actionpack-1.13.5

    You have requested to uninstall the gem:
    	actionpack-1.13.5
    actionmailer-1.3.5 depends on [actionpack (= 1.13.5)]
    actionwebservice-1.2.5 depends on [actionpack (= 1.13.5)]
    rails-1.2.5 depends on [actionpack (= 1.13.5)]
    If you remove this gems, one or more dependencies will not be met.
    Continue with Uninstall? [Yn]  Y
    Successfully uninstalled actionpack-1.13.5
    Attempting uninstall on activerecord-1.15.5

    You have requested to uninstall the gem:
    	activerecord-1.15.5
    actionwebservice-1.2.5 depends on [activerecord (= 1.15.5)]
    rails-1.2.5 depends on [activerecord (= 1.15.5)]
    If you remove this gems, one or more dependencies will not be met.
    Continue with Uninstall? [Yn]  Y
    Successfully uninstalled activerecord-1.15.5
    Attempting uninstall on activesupport-1.4.4
    Successfully uninstalled activesupport-1.4.4
    Clean Up Complete
    $ gem cleanup --dryrun
    Cleaning up installed gems...
    Dry Run Mode: Would uninstall rails-1.2.3
    Dry Run Mode: Would uninstall activerecord-1.15.3
    Dry Run Mode: Would uninstall actionmailer-1.3.3
    Dry Run Mode: Would uninstall actionpack-1.13.3
    Dry Run Mode: Would uninstall activesupport-1.4.2
    Clean Up Complete
    $ sudo gem cleanup
    Cleaning up installed gems...
    Attempting uninstall on rails-1.2.3
    Successfully uninstalled rails-1.2.3
    Attempting uninstall on activerecord-1.15.3
    Successfully uninstalled activerecord-1.15.3
    Attempting uninstall on actionmailer-1.3.3
    Successfully uninstalled actionmailer-1.3.3
    Attempting uninstall on actionpack-1.13.3
    Successfully uninstalled actionpack-1.13.3
    Attempting uninstall on activesupport-1.4.2
    Successfully uninstalled activesupport-1.4.2
    Clean Up Complete
    $ gem cleanup --dryrun
    Cleaning up installed gems...
    Clean Up Complete

# Updating an existing [Rails](/wiki/Rails) application

I thought this would be very straightforward as I was just upgrading from 2.0RC2 to 2.0.2, but my first attempt at this failed miserably:

    $ cd path_to_rails_application_root
    $ rake rails:freeze:gems
    Freezing to the gems for Rails 2.0.2
    rake aborted!
    uninitialized constant Gem::GemRunner

    (See full trace by running task with --trace)

At this point [Rails](/wiki/Rails) had deleted itself from the `vendor` directory (and not for the [first time](http://wincent.com/a/about/wincent/weblog/archives/2007/11/version_control.php)), which would obviously be very, very bad news if this were a production system; luckily it is only a development one and I am managing the project with [Git](/wiki/Git) so I was able to restore the destroyed files with a quick:

    # note that I have a "co" alias defined for "checkout"
    git co vendor/rails

[RubyGems](/wiki/RubyGems) and [Rake](/wiki/Rake) are both already up-to-date on my system:

    $ gem -v
    1.0.1
    $ rake --version
    rake, version 0.8.1

There are [plenty of posts](http://www.google.com/search?q=%22uninitialized+constant+Gem::GemRunner%22+rails) about this kind of problem that can be found with [Google](/wiki/Google). For example, [this post](http://www.nickpeters.net/2007/12/31/fix-for-uninitialized-constant-gemgemrunner-nameerror/) from 31 December 2007 states that the problem is caused by a missing `require` in `/usr/bin/gem`; inspection reveals however that the needed lines are already present in the installed version:

    require 'rubygems'
    require 'rubygems/gem_runner'

[This post](http://railsforum.com/viewtopic.php?pid=48963) claims that the problem is caused by an additional `gem1.8` symlink that is installed when you do a `gems update --system`, but no such symlink is present in my `/usr/bin/` directory nor anywhere else on my system. [This post](http://blog.ra66i.org/archives/informatics/2007/12/23/a-quick-gem-101-faq-gemrunner-name-error/) explains why it's not present on my system (basically, if your [Ruby](/wiki/Ruby) is installed as `ruby18` then your `gem` command will be installed as `gem18` too).

Some of the other links I trawled through:

-   <http://bpdp.wordpress.com/2007/11/28/rubygems-095-and-rails-126-uninitialized-constant-gemgemrunner/>
-   <http://jhernandez.gpltarragona.org/blog/?p=621>
-   <http://www.ruby-forum.com/topic/133792>
-   <http://www.ruby-forum.com/topic/136010>
-   <http://blog.ra66i.org/archives/informatics/2007/12/23/a-quick-gem-101-faq-gemrunner-name-error/>
-   <http://groups.google.com/group/rubyonrails-core/browse_thread/thread/d3e96496eca8735c>

One of the suggested techniques was to "unfreeze" [Rails](/wiki/Rails) (ie. remove it) from the `vendor` directory to force use of the newly installed 2.0.2 instead. This didn't work out too well:

    # or git rm -r vendor/rails if you want Git to track this
    $ rm -r vendor/rails

    # now try freezing again
    $ rake rails:freeze:gems
    Missing the Rails 1.99.1 gem. Please `gem install -v=1.99.1 rails`, update your RAILS_GEM_VERSION setting in config/environment.rb for the Rails version you do have installed, or comment out RAILS_GEM_VERSION to use the latest version installed.

    # ok, so let's do what it asks us to do
    $ sudo gem install -v=1.99.1 rails
    Password:
    ERROR:  could not find rails locally or in a repository

    # let's try our other option:
    # comment out the RAILS_GEM_VERSION config/environment.rb and try again
    $ rake rails:freeze:gems
    Freezing to the gems for Rails 2.0.2
    Unpacked gem: 'app/vendor/rails/activesupport-2.0.2'
    Unpacked gem: 'app/vendor/rails/activerecord-2.0.2'
    Unpacked gem: 'app/vendor/rails/actionpack-2.0.2'
    Unpacked gem: 'app/vendor/rails/actionmailer-2.0.2'
    Unpacked gem: 'app/vendor/rails/activeresource-2.0.2'
    Unpacked gem: 'app/vendor/rails/rails-2.0.2'

So that seems to have worked. Proceed to update the application files:

    rails .

Now hand-update `config/environment.rb` to include:

    RAILS_GEM_VERSION = '2.0.2' unless defined? RAILS_GEM_VERSION

So it all seems to be fine now, but it's certainly left a bad taste in my mouth. This should have been a very basic, routine upgrade. Did I shoot myself in the foot by cleaning up the old [gems](/wiki/gems) before trying to freeze the new version of [Rails](/wiki/Rails)? Should that kind of thing *matter*? How can you deploy this teetering stack in any kind of "enterprise" environment and feel secure about it?

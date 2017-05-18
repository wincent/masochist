---
tags: ruby wiki
---

These are an older version of the notes on [setting up autotest](/wiki/setting_up_autotest). They apply to versions of [ZenTest](/wiki/ZenTest) prior to [ZenTest 3.6.0](/wiki/ZenTest_3.6.0).

# Install [autotest](/wiki/autotest)

    # installation
    sudo gem install ZenTest

    # update fast documentation index
    fastri-server -b

# Set up a project for use with [autotest](/wiki/autotest)

# Prior to [ZenTest](/wiki/ZenTest) 3.5.0

Add `rspec_autotest.rb` to your `spec` directory:

    cd spec
    svn export http://svn.caldersphere.net/svn/main/rspec_autotest/trunk/lib/rspec_autotest.rb
    cd ..

Add the following to your `Rakefile`:

    namespace :spec do
      task :autotest do
        require './spec/rspec_autotest'
        RspecAutotest.run
      end
    end

Start the autotest:

    rake spec:autotest

Or if you really want a [Rake](/wiki/Rake) task for the job, add this to the `Rakefile`:

    namespace :spec do	 
      task :autotest do	 
        system 'autotest'	 
      end	 
    end

And start using:

    rake spec:autotest

# [ZenTest](/wiki/ZenTest) 3.5.0 or later

As above but export `rspec_autotest.rb` one level higher (not inside the `directory`):

    svn export http://svn.caldersphere.net/svn/main/rspec_autotest/trunk/lib/rspec_autotest.rb

No modifications are necessary to the `Rakefile`. You can start [autotest](/wiki/autotest) using:

    autotest

# Tweaks

Exactly the same tweak mentioned in "[Using autotest with Rails](/wiki/Using_autotest_with_Rails)" is necessary here. In `rspec_autotest.rb` an `-s` switch is passed to the `spec` tool, but as of [RSpec](/wiki/RSpec) version that switch has been replaced with `-e`.

# See also

-   For use with [Rails](/wiki/Rails): <http://blog.nicksieger.com/articles/2006/11/15/rspec-autotest-now-a-rails-plugin>
-   For use with non-[Rails](/wiki/Rails) [Ruby](/wiki/Ruby) projects: <http://blog.nicksieger.com/articles/2007/01/30/rspec-autotest-for-standalone-projects>
-   [ZenTest](/wiki/ZenTest) [API](/wiki/API) docs: <http://zentest.rubyforge.org/ZenTest/>

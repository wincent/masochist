---
tags: ruby wiki
---

An older version of these notes can be found at "[Setting up autotest (with ZenTest versions prior to 3.6.0)](/wiki/Setting_up_autotest_%28with_ZenTest_versions_prior_to_3.6.0%29)". These notes apply to [ZenTest 3.6.0](/wiki/ZenTest_3.6.0) or later.

# Install [autotest](/wiki/autotest)

    # installation
    sudo gem install ZenTest

    # update fast documentation index
    fastri-server -b

# Set up a project for use with [autotest](/wiki/autotest)

Unlike previous versions of [RSpec](/wiki/RSpec) and [ZenTest](/wiki/ZenTest), as of [RSpec 1.0.3](/wiki/RSpec_1.0.3) and [ZenTest 3.6.0](/wiki/ZenTest_3.6.0) no special setup is necessary. You can remove any `rspec_autotest.rb` files that you previously installed (as described in "[Setting up autotest (with ZenTest versions prior to 3.6.0)](/wiki/Setting_up_autotest_%28with_ZenTest_versions_prior_to_3.6.0%29)").

The only prerequisite is that your project should use parallel `lib` and `spec` folders.

You can start [autotest](/wiki/autotest) using:

    autotest

# Tweaks

No special tweaks are necessary, unlike in previous versions.

# See also

-   For use with [Rails](/wiki/Rails): <http://blog.nicksieger.com/articles/2006/11/15/rspec-autotest-now-a-rails-plugin>
-   For use with non-[Rails](/wiki/Rails) [Ruby](/wiki/Ruby) projects: <http://blog.nicksieger.com/articles/2007/01/30/rspec-autotest-for-standalone-projects>
-   [ZenTest](/wiki/ZenTest) [API](/wiki/API) docs: <http://zentest.rubyforge.org/ZenTest/>

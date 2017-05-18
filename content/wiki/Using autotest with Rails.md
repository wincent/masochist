---
tags: rails wiki
---

An older version of these notes (for use with versions of [ZenTest](/wiki/ZenTest) prior to 3.6.0) can be found at "[Using autotest with Rails (with ZenTest prior to 3.6.0)](/wiki/Using_autotest_with_Rails_%28with_ZenTest_prior_to_3.6.0%29)".

Installing is considerably easier now than it was in the past. It basically consists of installing [ZenTest](/wiki/ZenTest), installing [RSpec](/wiki/RSpec) and starting development. This is described in detail in the [RSpec 1.0.3](/wiki/RSpec_1.0.3) [release announcement](http://rubyforge.org/pipermail/rspec-users/2007-May/001742.html) posted to the [rspec-users](/wiki/rspec-users) mailing list.

# Prerequisites

-   [ZenTest](/wiki/ZenTest) (see "[Setting up autotest](/wiki/Setting_up_autotest)")
-   [diff-lcs](/wiki/diff-lcs) (already installed in my case)
-   [RSpec](/wiki/RSpec) (again, already installed in my case)

# Installing the [RSpec](/wiki/RSpec) [Rails](/wiki/Rails) plugin

At the time of writing the latest notes I've made on this subject can be found at "[Upgrading to RSpec 1.0.3 on Mac OS X Tiger](/wiki/Upgrading_to_RSpec_1.0.3_on_Mac_OS_X_Tiger)".

## Configuration

It is no longer necessary to customize your `~/.autotest` file.

# Starting [autotest](/wiki/autotest)

    autotest

# Tweaks

It's no longer necessary to perform any tweaks to [ZenTest](/wiki/ZenTest) as in the past. First, the [RSpec](/wiki/RSpec) developers put back in the old `-s` switch for compatibility with [ZenTest](/wiki/ZenTest). And as of [ZenTest 3.6.0](/wiki/ZenTest_3.6.0), inspection reveals that it has been updated to use the new `-e` switch anyway.

# Additional [Rails](/wiki/Rails) configuration

It was previously necessary to do some configuration as described by [David Chelimsky](/wiki/David_Chelimsky) in [this](http://rubyforge.org/pipermail/rspec-users/2007-May/001650.html) [rspec-users](/wiki/rspec-users) mailing list post; it was recommended to remove the following lines from the `spec/spec.opts` file:

    --format
    failing_examples:previous_failures.txt
    --example
    previous_failures.txt

This prevented the tests from failing continuously when an example fails; [autotest](/wiki/autotest) will run the specs again automatically once changes have been made. But it appears that as of [RSpec 1.0.3](/wiki/RSpec_1.0.3) it is no longer necessary to make this change.

# See also

-   [Setting up autotest](/wiki/Setting_up_autotest)
-   [Behaviour-Driven Development with Rails](/wiki/Behaviour-Driven_Development_with_Rails)
-   Official plug-in announcement: <http://blog.nicksieger.com/articles/2006/11/15/rspec-autotest-now-a-rails-plugin>
-   "Developing a Rails model using BDD and RSpec": <http://www.lukeredpath.co.uk/2006/8/29/developing-a-rails-model-using-bdd-and-rspec-part-1>

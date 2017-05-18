---
tags: rspec rails watir wiki
---

# Installation

See:

-   [Installing SafariWatir on Mac OS X Tiger](/wiki/Installing_SafariWatir_on_Mac_OS_X_Tiger)
-   [Installing Spec::UI 0.2.0 on Mac OS X Tiger](/wiki/Installing_Spec%3a%3aUI_0.2.0_on_Mac_OS_X_Tiger); or
-   [Upgrading to Spec::UI 0.2.2 on Mac OS X Tiger](/wiki/Upgrading_to_Spec%3a%3aUI_0.2.2_on_Mac_OS_X_Tiger)

For the latest installation or upgrade notes, see the [\#rspec](/tags/rspec) tag.

# Other setup

There are is no official documentation for setting up and using [Spec::UI](/wiki/Spec%3a%3aUI) at this time, but [Aslak Hellesoy](/wiki/Aslak_Hellesoy) posted [these instructions](http://rubyforge.org/pipermail/rspec-users/2007-May/001541.html) to the [RSpec users](/wiki/RSpec_users) mailing list describing the necessary steps.

Similar instructions can also be found [here](http://www.practicalguile.com/articles/ruby/rspec-your-functional-tests/).

## [Rakefile](/wiki/Rakefile) changes

    require 'spec/rake/spectask'

    desc "Run in-browser specs"
    Spec::Rake::SpecTask.new('spec:ui') do |t|
      t.spec_files = FileList['spec/**/*.rb']
      t.spec_opts = [
        '--require', 'spec/spec_helper',
        '--format', 'Spec::Ui::ScreenshotFormatter:spec_report.html',
        '--format', 'progress',
      ]
    end

## `spec_helper.rb` changes

    Spec::Runner.configure do |config|
     config.include Spec::Matchers::Watir
    end

## `before` and `after` blocks

All [specs](/wiki/specs) will require some special set-up and tear-down:

    before(:all) do
      @browser = Watir::Browser.new
    end

    after(:each) do
      # needed for screenshots to work
      Spec::Ui::ScreenshotFormatter.browser = @browser
    end

    after(:all) do
      @browser.kill! rescue nil
    end

# See also

-   An excellent article on using [Watir](/wiki/Watir), [RSpec](/wiki/RSpec) and [Rails](/wiki/Rails): <http://www.practicalguile.com/articles/ruby/rspec-your-functional-tests/>
-   [Behaviour-Driven Development with Rails](/wiki/Behaviour-Driven_Development_with_Rails)

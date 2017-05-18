---
tags: rspec rails wiki
cache_breaker: 1
---

# Note

This article was originally written in 2007. For more up-to-date information, see:

-   [Rails model testing cheatsheet](/wiki/Rails_model_testing_cheatsheet)
-   [Rails view testing cheatsheet](/wiki/Rails_view_testing_cheatsheet)
-   [Rails controller testing cheatsheet](/wiki/Rails_controller_testing_cheatsheet)
-   [Rails helper testing cheatsheet](/wiki/Rails_helper_testing_cheatsheet)
-   [Rails mailer testing cheatsheet](/wiki/Rails_mailer_testing_cheatsheet)
-   [RR cheatsheet](/wiki/RR_cheatsheet)
-   [Steak cheatsheet](/wiki/Steak_cheatsheet)

# Background

I first used [Behaviour-Driven Development](/wiki/Behaviour-Driven_Development) in a relatively disciplined way when writing [Walrus](/wiki/Walrus). [BDD](/wiki/BDD) is an incredible safety net for a beginner ([Walrus](/wiki/Walrus) was my first ever real [Ruby](/wiki/Ruby) project; previously I had only written 10-line scripts). It allows you to ensure the correctness of your code at every step of development, and provides you with confidence about your code that you otherwise couldn't possibly have as a beginner.

As I learned more about [Ruby](/wiki/Ruby) I needed to lean less and less heavily on [BDD](/wiki/BDD) as a development aid, but I continued to write [specs](/wiki/specs) in parallel with new code. In the end [BDD](/wiki/BDD) allowed me to develop a fully working prototype (in use in production) of a very complex system ([object-oriented templating](/wiki/object-oriented_templating) built using an automated [packrat](/wiki/packrat) [PEG](/wiki/PEG) parser generator). I am almost certain that I wouldn't have been able to complete the project without [BDD](/wiki/BDD). Having made this journey I can now claim to "know" [Ruby](/wiki/Ruby).

So for a beginning [Rails](/wiki/Rails) programmer [BDD](/wiki/BDD) is also an excellent fit. The notes in this article describe how to set up a new [Rails](/wiki/Rails) application and incorporate [BDD](/wiki/BDD) from the very first moment.

# Creating the application

After [installing Ruby on Rails](/wiki/installing_Ruby_on_Rails) and any other prerequisites (see "[Rails application bootstrapping](/wiki/Rails_application_bootstrapping)") we can go ahead and create a new application:

    rails application_name
    cd application_name

# [SVK](/wiki/SVK) set-up

Seeing as I am working inside an [SVK](/wiki/SVK) working copy I also do:

    svk add .
    svk ci -m "Create new Rails application"

There are some files and folders which shouldn't really be stored in [version control](/wiki/version_control) (see "[Checking a new Rails application into an existing Subversion repository](/wiki/Checking_a_new_Rails_application_into_an_existing_Subversion_repository)") so these need to be removed and ignored:

    svk rm log/*
    svk propset svn:ignore '*.log' log
    svk rm tmp/*
    svk propset svn:ignore '*' tmp
    svk mv config/database.yml config/database.example
    svk propset svn:ignore 'database.yml' config
    svk ci -m "Set-up ignored files"

# Setting up the database

First we need to set-up the `config/database.yml` file:

    cp config/database.example config/database.yml

Default settings will work just fine if using a [MySQL](/wiki/MySQL) set-up as described in "[Rails application bootstrapping](/wiki/Rails_application_bootstrapping)" but we'll add `encoding: utf8` to each database as described in "[Unicode support in Rails](/wiki/Unicode_support_in_Rails)". Now to actually create the development and test databases:

    sudo -s
    mysqld_safe &
    exit
    mysql -u root -e "CREATE DATABASE application_name_development CHARACTER SET 'UTF8';"
    mysql -u root -e "CREATE DATABASE application_name_test CHARACTER SET 'UTF8';"
    rake db:migrate
    env RAILS_ENV=test rake db:migrate

As explained in "[Unicode support in Rails](/wiki/Unicode_support_in_Rails)", note that I explicitly force the databases to be created with a default [UTF-8](/wiki/UTF-8) character set.

And set-up for [SVK](/wiki/SVK):

    svk add db/schema.rb
    svk ci -m "Initial database schema"

# Installing the [RSpec](/wiki/RSpec) plug-ins

When I first wrote this, the latest [RSpec](/wiki/RSpec) release was 0.9.4, so I used the following commands:

    script/plugin install svn://rubyforge.org/var/svn/rspec/tags/REL_0_9_4/rspec
    script/plugin install svn://rubyforge.org/var/svn/rspec/tags/REL_0_9_4/rspec_on_rails

But nowadays the latest release is always tagged as `CURRENT` so the following can be used instead:

    script/plugin install svn://rubyforge.org/var/svn/rspec/tags/CURRENT/rspec
    script/plugin install svn://rubyforge.org/var/svn/rspec/tags/CURRENT/rspec_on_rails

After this:

    script/generate rspec
    rake spec

And if working with [SVK](/wiki/SVK):

    svk add script/spec* vendor/plugins/rspec* spec
    svk propset svn:ignore previous_failures.txt .
    svk ci -m "Install RSpec 0.9.4 plug-ins"

Unfortunately, [SVK](/wiki/SVK) doesn't (yet) support [Subversion externals](/wiki/Subversion_externals), so we have to install the plug-ins as shown here (at the time of writing, the latest version of [SVK](/wiki/SVK) is 2.0.1). When [SVK](/wiki/SVK) adds the required support we'll be able to pass the `-x` switch to `script/plugin install` for a slightly more elegant solution.

The official [Rspec](/wiki/Rspec) installation instructions for [Rails](/wiki/Rails) can be found at: <http://rspec.rubyforge.org/documentation/rails/install.html>

# Setting up [Autotest](/wiki/Autotest)

As part of the [BDD](/wiki/BDD) approach we'll be using [Autotest](/wiki/Autotest) to do [continuous integration](/wiki/continuous_integration). After installing and configuring [Autotest](/wiki/Autotest) as described in "[Using autotest with Rails](/wiki/Using_autotest_with_Rails)" we can start it by invoking:

    autotest

# Beginning development

As an example, create a `User` model:

    script/generate rspec_model User
    svk st | grep '?' | awk '{print $2}' | xargs svk add
    svk ci -m "Create User model"

[Autotest](/wiki/Autotest) should notice the newly created files and run automatically:

    F

    1)
    ActiveRecord::StatementInvalid in 'User should be valid'
    Mysql::Error: Table 'application_name_test.users' doesn't exist: SHOW FIELDS FROM users
    ./spec/models/user_spec.rb:5:in `new'
    ./spec/models/user_spec.rb:5:
    script/spec:4:

    Finished in 0.051379 seconds

    1 example, 1 failure

So the spec is failing because the `users` table hasn't been set up yet. To be fully [behaviour-driven](/wiki/behaviour-driven) we should do the minimum required to get the spec passing, and that means running `rake db:migrate` to set up the table in the database. This may be counter-intuitive because you haven't actually specified any behaviour yet, but you'll remain truer to the [BDD](/wiki/BDD) philosophy if you always employ this "minimum change to get the spec passing" approach; this approach is described and demonstrated in great detail by lead [RSpec](/wiki/RSpec) developer [David Chelimsky](/wiki/David_Chelimsky) in [this weblog post](http://blog.davidchelimsky.net/articles/2007/05/14/an-introduction-to-rspec-part-i).

    rake db:migrate
    env RAILS_ENV=test rake db:migrate
    svk ci -m "Perform migration for User model"

As soon as you do this the specs will start passing again:

    Finished in 0.050375 seconds

    1 example, 0 failures

# Setting up [RCov](/wiki/RCov)

Now that the first examples are running it's a good time to set up [RCov](/wiki/RCov) to ensure code coverage by our [specs](/wiki/specs). In the `Rakefile` we add:

    require 'spec/rake/spectask'

    desc 'Run all examples with RCov'
    Spec::Rake::SpecTask.new('coverage') do |t|
      t.spec_files = FileList['spec/**/*.rb']
      t.rcov = true
      t.rcov_opts = ['--exclude', 'spec']
    end

Now running `rake coverage` will run all the [specs](/wiki/specs) and measure the code coverage at the same time, writing a report out to a `coverage` directory.

The first run shows 100%, apart from 10 lines in `config/boot.rb`. We can exclude this file from the coverage analysis for two reasons:

1.  The file is part of [Rails](/wiki/Rails) itself, there is no need to test it ([Rails](/wiki/Rails) has its own tests).
2.  It is impossible to cover all 100% of this file because it depends on the method in which [Rails](/wiki/Rails) is installed (there are two different code paths depending on whether [Rails](/wiki/Rails) is frozen into `vendor/rails` or loaded via [RubyGems](/wiki/RubyGems).

So we update the `rcov_opts` in the `Rakefile` to:

    t.rcov_opts = ['--exclude', 'config,spec']

This brings code coverage up to 100%; to keep it this way we add a new task to the `Rakefile`:

    require 'spec/rake/verify_rcov'

    RCov::VerifyTask.new(:verify => :spec) do |t|
      t.threshold = 100.0 # only adjust upwards, never downwards
      t.index_html = 'coverage/index.html'
    end

Now you can verify coverage using `rake verify`; output should resemble:

    Finished in 0.049242 seconds

    1 example, 0 failures
    Coverage: 100.0% (threshold: 100.0%)

We can keep the `coverage` directory out of [version control](/wiki/version_control) as follows:

    # add coverage to svn:ignore list
    svk propedit svn:ignore

# Heckle

You can further enhance your testing efforts by using [Heckle](/wiki/Heckle) to test the quality of your [specs](/wiki/specs). After [installing Heckle using RubyGems](/wiki/installing_Heckle_using_RubyGems) you can specify a [spec](/wiki/spec) and class (or module, or method) to mutate:

    spec spec/models/user_spec.rb --heckle User

As noted by the author of [Heckle](/wiki/Heckle) in [this post](http://glu.ttono.us/articles/2006/12/19/tormenting-your-tests-with-heckle):

> **If it modifies code, can’t bad things happen?**&lt;br /&gt; Well, yes. Heckle could feasibly break things. It throws crap into your code on purpose. It flips unless and while loops so infinite loops will probably occur at some point. For the next release I’m planning to put in some sort of timeout to avoid that.&lt;br /&gt; &lt;br /&gt; Additionally, know what your code is doing. If randomly changing a string is going to actually break things irrevocably in testing, you probably should be stubbing those dangerous methods (eg. You probably shouldn’t run Heckle against methods that really delete files during testing if it’s based on a string)

For this reason there is no way to automatically invoke [Heckle](/wiki/Heckle); you have to select a target to mutate and then perform the mutation manually.

# Developing iteratively

From here on development takes place iteratively: write a new [spec](/wiki/spec) (should fail), write code necessary to make [spec](/wiki/spec) pass (should pass).

For example, let's start with a simple requirement for our `User` model:

-   A User without a login name
    -   should be invalid

We express this with the following [spec](/wiki/spec) in `user_spec.rb`:

    describe User, 'without a login name' do
      
      before(:each) do
        @user = User.new
      end
      
      it 'should be invalid' do
        @user.should_not be_valid
      end
      
    end

This spec fails because we don't have any code to make a user without a login name be considered invalid. We correct this by editing the `user.rb` file and adding a `validates_presence_of` call:

    class User < ActiveRecord::Base
      validates_presence_of :login_name
    end

Now the *other* spec in the `user_spec.rb` file will start failing because the previously valid instance is no longer considered to be valid:

    describe User do
      before(:each) do
        @users = User.new
      end

      it "should be valid" do
         @users.should be_valid
      end
    end

We make it valid by adding a login name:

    describe User do
      before(:each) do
        @users = User.new(:login_name => 'Bob')
      end

      it "should be valid" do
         @users.should be_valid
      end
    end

But now we still have a failing [spec](/wiki/spec) because there is not yet a `login_name=` accessor. We therefore create a new migration:

    script/generate migration add_login_name_to_users

The contents will be:

    class AddLoginNameToUsers < ActiveRecord::Migration
      def self.up
        add_column 'users', 'login_name', :string, :null => false
      end

      def self.down
        remove_column 'users', 'login_name'
      end
    end

We run the migration:

    rake db:migrate
    env RAILS_ENV=test rake db:migrate

And all the specs start passing again. Now we can check our changes into [SVK](/wiki/SVK):

    svk add db/migrate/002_add_login_name_to_users.rb
    svk ci -m "Add login_name to User model"

Development will now continue iteratively:

1.  Decide on a new required behaviour
2.  Write a spec for it (should fail)
3.  Write code (or take other actions such as performing database migrations as shown above) to make spec pass
4.  Check changes into [version control](/wiki/version_control)
5.   Repeat

Periodically we will also do the following

-   Check code coverage using `rake coverage` and/or `rake verify`; you should try to keep coverage at 100%
-   If necessary, refactor [specs](/wiki/specs) to avoid duplicated code; if any of your specs break then you know that your refactoring introduced an error
-   Selectively run [Heckle](/wiki/Heckle) against specific specs, classes, modules and methods to look for holes, flaws or weaknesses in the specs

I've [posted this screencast](http://wincent.com/a/about/wincent/weblog/archives/2007/05/behaviourdriven.php) to my personal [weblog](/wiki/weblog) showing one cycle of this iterative development approach in action.

# General guidelines

## Try to keep coupling between models, views and controllers to a minimum

The above example tests a model in isolation with no involvement from any views or controllers. This is a good thing because it means that bugs in those views and controllers won't have a cascade effect which causes your model specs to fail.

[This post](http://blog.davidchelimsky.net/articles/2006/11/06/view-spec-tutorial) by [David Chelimsky](/wiki/David_Chelimsky) shows how to tests views in isolation with the help of [mock objects](/wiki/mock_objects). In this way views can be tested before the corresponding models and controllers are even written.

For more information see "[Independently testing models, views and controllers](/wiki/Independently_testing_models%2c_views_and_controllers)".

## Test the coupling too

I know I just said that it's a good thing to keep coupling to a minimum, but you *also* need to separately test that all of the components work effectively together. In [Rails](/wiki/Rails) parlance this is called "integration testing". [RSpec](/wiki/RSpec) doesn't directly support that yet (as of version 0.9.4, the latest at the time of writing) but it *does* allow you to use third-party add-ons to perform high-level testing. For more information see "[Using Watir with RSpec and Rails](/wiki/Using_Watir_with_RSpec_and_Rails)".

## Don't test [Rails](/wiki/Rails)

Make sure that you are testing the behaviour of *your* application and not that of [Rails](/wiki/Rails) itself. [Rails](/wiki/Rails) is already pretty thoroughly tested. In the example above, we are *not* testing the functionality of [Rails](/wiki/Rails)' ` validates_presence_of` method; we take it as a given that it works as advertised. What we *are* testing is the required behaviour of our application, as specified in the example, a "User without a login name should be invalid". That is the externally visible behaviour that we care about and it is what we use [RSpec](/wiki/RSpec) to confirm; the internal implementation details are not relevant and your [specs](/wiki/specs) should be written in an implementation-detail-neutral way (that is, when the implementation details change the [spec](/wiki/spec) should continue to pass).

# See also

-   Nice article on doing Behaviour-Driven Development in Ruby on Rails: <http://www.lukeredpath.co.uk/2006/8/29/developing-a-rails-model-using-bdd-and-rspec-part-1> (now slightly out of date but still useful)
-   [Behaviour-Driven Development with Rails: Handling upgrades](/wiki/Behaviour-Driven_Development_with_Rails%3a_Handling_upgrades)
-   [Store user session data in the database instead of the filesystem on Rails](/wiki/Store_user_session_data_in_the_database_instead_of_the_filesystem_on_Rails)

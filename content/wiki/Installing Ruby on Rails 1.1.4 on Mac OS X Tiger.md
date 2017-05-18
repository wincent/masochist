---
tags: tiger rails wiki
---

To install [Ruby on Rails](/wiki/Ruby_on_Rails) using [RubyGems](/wiki/RubyGems), the standard `PATH` environment variable must be overridden to ensure that the custom local copy of [Ruby](/wiki/Ruby) (version 1.8.4) is used instead of the default system install (version 1.8.2).

The first step is to look at the current `PATH` setting:

    echo $PATH

The output should be similar to:

    /bin:/sbin:/usr/bin:/usr/sbin:/Users/wincent/bin:/usr/local/bin:/Developer/Tools:/usr/X11R6/bin:/usr/local/mysql/bin

Set the new `PATH` value, rearranging the order so that `/usr/local/bin` appears first in the list:

    PATH=/usr/local/bin:/bin:/sbin:/usr/bin:/usr/sbin:/Users/wincent/bin:/Developer/Tools:/usr/X11R6/bin:/usr/local/mysql/bin

Confirm that the order is correct:

    echo $PATH

The output should resemble this:

    /usr/local/bin:/bin:/sbin:/usr/bin:/usr/sbin:/Users/wincent/bin:/Developer/Tools:/usr/X11R6/bin:/usr/local/mysql/bin

Go ahead with the [Ruby on Rails](/wiki/Ruby_on_Rails) install:

    sudo gem install rails --include-dependencies

# Installation transcript

    Bulk updating Gem source index for: http://gems.rubyforge.org
    Successfully installed rails-1.1.4
    Successfully installed rake-0.7.1
    Successfully installed activesupport-1.3.1
    Successfully installed activerecord-1.14.3
    Successfully installed actionpack-1.12.3
    Successfully installed actionmailer-1.2.3
    Successfully installed actionwebservice-1.1.4
    Installing ri documentation for rake-0.7.1...
    Installing ri documentation for activesupport-1.3.1...
    Installing ri documentation for activerecord-1.14.3...
    Installing ri documentation for actionpack-1.12.3...
    Installing ri documentation for actionmailer-1.2.3...
    Installing ri documentation for actionwebservice-1.1.4...
    Installing RDoc documentation for rake-0.7.1...
    Installing RDoc documentation for activesupport-1.3.1...
    Installing RDoc documentation for activerecord-1.14.3...
    Installing RDoc documentation for actionpack-1.12.3...
    Installing RDoc documentation for actionmailer-1.2.3...
    Installing RDoc documentation for actionwebservice-1.1.4...

# Setting up the environment

For [Rails](/wiki/Rails) to actually work you'll need to make changes to your `PATH` and `RUBYLIB` environment variables. I have the following in my `~/.bash_profile` for this purpose:

    # /usr/local/bin has to come first so that custom Ruby install will be used (1.8.4)
    PATH=/usr/local/bin:$PATH:$HOME/bin:/Developer/Tools:/usr/X11R6/bin
    PATH=$PATH:/usr/local/mysql/bin
    export PATH

    # for Ruby on Rails
    RUBYLIB="/usr/local/lib/ruby/site_ruby/1.8:/usr/local/lib/ruby/site_ruby/1.8/i686-darwin8.7.1:/usr/local/lib/ruby/1.8:/usr/local/lib
    /ruby/1.8/i686-darwin8.7.1"
    export RUBYLIB

## Update: RUBYLIB with Mac OS X 10.4.8

I later (March 2007) found that this `RUBYLIB` export prevented my new [Ruby 1.8.6](/wiki/Ruby_1.8.6) install from working and removed it from my `.bash_profile`. See "[Building and installing Ruby 1.8.6 on Mac OS X Tiger](/wiki/Building_and_installing_Ruby_1.8.6_on_Mac_OS_X_Tiger)" for more information.

# See also

-   [Building and installing Ruby 1.8.4 on Mac OS X Tiger](/wiki/Building_and_installing_Ruby_1.8.4_on_Mac_OS_X_Tiger)
-   [Building and installing RubyGems 0.9.0 on Mac OS X Tiger](/wiki/Building_and_installing_RubyGems_0.9.0_on_Mac_OS_X_Tiger)
-   [Installing Ruby on Rails 1.1.4 on Red Hat Enterprise Linux ES 3](/wiki/Installing_Ruby_on_Rails_1.1.4_on_Red_Hat_Enterprise_Linux_ES_3)
-   [Installing Ruby on Rails](/wiki/Installing_Ruby_on_Rails)

# An alternative approach

<http://hivelogic.com/articles/2005/12/01/ruby_rails_lighttpd_mysql_tiger>

Using the already downloaded archives:

    tar zxvf readline-5.1.tar.gz 
    cd readline-5.1/
    ./configure
    make
    sudo make install

    tar zxvf ruby-1.8.4.tar.gz 
    cd ruby-1.8.4/
    ./configure --enable-pthread --with-readline-dir=/usr/local
    make
    sudo make install
    make check

When I try to follow those instructions I get a failure during `sudo make check` step:

      1) Failure:
    test_delete(TestDBM) [./dbm/test_dbm.rb:332]:
    <DBMError> exception expected but none was thrown.

      2) Failure:
    test_s_open_error(TestSDBM) [./sdbm/test_sdbm.rb:123]:
    <Errno::EACCES> exception expected but none was thrown.

    1313 tests, 14455 assertions, 2 failures, 0 errors
    make: *** [test-all] Error 1

But not when doing a `make check` (without `sudo`):

    1313 tests, 14456 assertions, 0 failures, 0 errors

Then:

    sudo /usr/local/bin/ruby setup.rb

And I get this error:

    Bulk updating Gem source index for: http://gems.rubyforge.org
    ERROR:  While executing gem ... (ArgumentError)
        syntax error on line 153073, col 20: ` 
        executables:'

Which is the same error as I was getting before when trying to do any remote operations with gem. Funnily enough this was working a few days ago. Now neither my hand-installed copy of RubyGems nor the version bundled with [Locomotive](/wiki/Locomotive) works.

Curiously, running `sudo gem update` fixed all of these warnings:

    sudo gem update
    sudo gem install rails --include-dependencies
    sudo gem install sqlite3-ruby

Note, however, that I still can't run any unit tests:

    script/generate model User
    ruby test/unit/user_test.rb

Produces:

    Loaded suite test/unit/user_test
    Started
    E/usr/local/lib/ruby/gems/1.8/gems/sqlite3-ruby-1.1.0/lib/sqlite3/errors.rb:94:in `check': cannot rollback - no transaction is active (SQLite3::SQLException)
            from /usr/local/lib/ruby/gems/1.8/gems/sqlite3-ruby-1.1.0/lib/sqlite3/resultset.rb:76:in `check'
            from /usr/local/lib/ruby/gems/1.8/gems/sqlite3-ruby-1.1.0/lib/sqlite3/resultset.rb:68:in `commence'
            from /usr/local/lib/ruby/gems/1.8/gems/sqlite3-ruby-1.1.0/lib/sqlite3/resultset.rb:61:in `initialize'
            from /usr/local/lib/ruby/gems/1.8/gems/sqlite3-ruby-1.1.0/lib/sqlite3/statement.rb:158:in `execute'
            from /usr/local/lib/ruby/gems/1.8/gems/sqlite3-ruby-1.1.0/lib/sqlite3/database.rb:211:in `execute'
            from /usr/local/lib/ruby/gems/1.8/gems/sqlite3-ruby-1.1.0/lib/sqlite3/database.rb:186:in `prepare'
            from /usr/local/lib/ruby/gems/1.8/gems/sqlite3-ruby-1.1.0/lib/sqlite3/database.rb:210:in `execute'
            from /usr/local/lib/ruby/gems/1.8/gems/sqlite3-ruby-1.1.0/lib/sqlite3/database.rb:620:in `rollback'
             ... 13 levels...
            from /usr/local/lib/ruby/1.8/test/unit/autorunner.rb:200:in `run'
            from /usr/local/lib/ruby/1.8/test/unit/autorunner.rb:13:in `run'
            from /usr/local/lib/ruby/1.8/test/unit.rb:285
            from test/unit/user_test.rb:7

The database file does exist (created manually using `sqlite3 db/test.sqlite3` and `.schema` to force changes to be flushed to disk) and the `config/database.yml` file contains this:

    test:
      adapter: sqlite3
      dbfile: db/test.sqlite3

If I change:

    self.use_transactional_fixtures = true

To:

    self.use_transactional_fixtures = false

In `test/test_helper.rb` then I get a different error:

    Loaded suite test/unit/user_test
    Started
    E
    Finished in 0.128909 seconds.

      1) Error:
    test_truth(UserTest):
    ActiveRecord::StatementInvalid: SQLite3::SQLException: no such table: users: DELETE FROM users WHERE 1=1
        /usr/local/lib/ruby/gems/1.8/gems/activerecord-1.14.3/lib/active_record/connection_adapters/abstract_adapter.rb:120:in `log'
        /usr/local/lib/ruby/gems/1.8/gems/activerecord-1.14.3/lib/active_record/connection_adapters/sqlite_adapter.rb:137:in `execute'
        /usr/local/lib/ruby/gems/1.8/gems/activerecord-1.14.3/lib/active_record/connection_adapters/sqlite_adapter.rb:329:in `catch_schema_changes'
        /usr/local/lib/ruby/gems/1.8/gems/activerecord-1.14.3/lib/active_record/connection_adapters/sqlite_adapter.rb:137:in `execute'
        /usr/local/lib/ruby/gems/1.8/gems/activerecord-1.14.3/lib/active_record/connection_adapters/sqlite_adapter.rb:147:in `delete'
        /usr/local/lib/ruby/gems/1.8/gems/activerecord-1.14.3/lib/active_record/fixtures.rb:283:in `delete_existing_fixtures'
        /usr/local/lib/ruby/gems/1.8/gems/activerecord-1.14.3/lib/active_record/fixtures.rb:256:in `create_fixtures'
        /usr/local/lib/ruby/gems/1.8/gems/activerecord-1.14.3/lib/active_record/fixtures.rb:256:in `create_fixtures'
        /usr/local/lib/ruby/gems/1.8/gems/activerecord-1.14.3/lib/active_record/connection_adapters/abstract/database_statements.rb:51:in `transaction'
        /usr/local/lib/ruby/gems/1.8/gems/activerecord-1.14.3/lib/active_record/fixtures.rb:255:in `create_fixtures'
        /usr/local/lib/ruby/gems/1.8/gems/activerecord-1.14.3/lib/active_record/base.rb:794:in `silence'
        /usr/local/lib/ruby/gems/1.8/gems/activerecord-1.14.3/lib/active_record/fixtures.rb:248:in `create_fixtures'
        /usr/local/lib/ruby/gems/1.8/gems/activerecord-1.14.3/lib/active_record/fixtures.rb:565:in `load_fixtures'
        /usr/local/lib/ruby/gems/1.8/gems/activerecord-1.14.3/lib/active_record/fixtures.rb:521:in `setup'

    1 tests, 0 assertions, 0 failures, 1 errors

Solution:

    RAILS_ENV='test'
    export RAILS_ENV
    rake migrate
    ruby test/unit/user_test.rb

Evidently creating the database is not enough. You have to do a `rake migrate` as well.

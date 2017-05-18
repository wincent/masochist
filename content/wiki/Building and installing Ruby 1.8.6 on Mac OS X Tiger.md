---
tags: ruby tiger updates wiki
cache_breaker: 1
---

# Build

    wget ftp://ftp.ruby-lang.org/pub/ruby/1.8/ruby-1.8.6.tar.bz2
    md5 ruby-1.8.6.tar.bz2
    tar xjf ruby-1.8.6.tar.bz2
    cd ruby-1.8.6
    ./configure --enable-install-doc --with-readline-dir=/usr/local --enable-pthread
    make
    make test
    sudo make install
    make check

I had hoped that the [readline](/wiki/readline) workaround needed in the last update (see "[Building and installing Ruby 1.8.5 on Mac OS X Tiger](/wiki/Building_and_installing_Ruby_1.8.5_on_Mac_OS_X_Tiger)") would no longer be required in this version, but it appears that it is because [Ruby](/wiki/Ruby) crashes during the `make check` phase unless you pass the `--with-readline-dir=/usr/local` switch to `configure`:

    dyld: NSLinkModule() error
    dyld: Symbol not found: _rl_filename_completion_function
      Referenced from: /Users/wincent/trabajo/unversioned/ruby/ruby-1.8.6/.ext/i686-darwin8.8.1/readline.bundle
      Expected in: flat namespace

    make: *** [test-all] Trace/BPT trap

Likewise, unless you pass the `--enable-pthread` you'll get this warning during the `make`:

    *****************************************************************************
    **
    ** PTHREAD SUPPORT MODE ERROR: 
    **
    **   Ruby is not compiled with --enable-pthread, but your Tcl/Tk 
    **   library seems to be compiled with pthread support. This
    **   combination may cause frequent hang or segmentation fault
    **   errors when Ruby/Tk is working. We recommend that you NEVER
    **   create the library with such a combination of pthread support.
    **
    **   Please recompile Ruby with the "--enable-pthread" configure option
    **   or recompile Tcl/Tk with the "--disable-threads" configure option.
    **
    *****************************************************************************

Nor is it necessary to separately install the documentation when passing the `--enable-install-doc` switch to configure.

# Updating [FastRI](/wiki/FastRI) index

On trying to update the [FastRI](/wiki/FastRI) index:

    fastri-server -b

I found the following error:

    /usr/local/lib/ruby/1.8/i686-darwin8.7.1/rbconfig.rb:7: ruby lib version (1.8.5) doesn't match executable version (1.8.6) (RuntimeError)
            from /usr/local/lib/ruby/site_ruby/1.8/rubygems.rb:10:in `require'
            from /usr/local/lib/ruby/site_ruby/1.8/rubygems.rb:10
            from /usr/local/bin/fastri-server:9:in `require'
            from /usr/local/bin/fastri-server:9

Similar errors were printed when trying things like `gem list --local` or `rake spec`.

At the top of `/usr/local/lib/ruby/1.8/i686-darwin8.7.1/rbconfig.rb` we find:

    module Config
      RUBY_VERSION == "1.8.5" or
        raise "ruby lib version (1.8.5) doesn't match executable version (#{RUBY_VERSION})"

And although the `make` output included this:

    rbconfig.rb updated

The modification date on `/usr/local/lib/ruby/1.8/i686-darwin8.7.1/rbconfig.rb` shows that the installed copy wasn't touched:

    -rw-r--r--   1 root  wheel  - 6253 Sep 23 17:40 /usr/local/lib/ruby/1.8/i686-darwin8.7.1/rbconfig.rb

A quick check to see if the file was installed somewhere else:

    # have to use "find" for this
    find / -name rbconfig.rb

    # "locate" would be quicker, but its database is updated only once per week
    locate rbconfig.rb

    # Spotlight would be quick and up-to-date, but directories like /usr are not indexed
    mdfind "kMDItemFSName = 'rbconfig.rb'"

Here are the relevant entries:

    /usr/lib/ruby/1.8/universal-darwin8.0/rbconfig.rb
    /usr/local/lib/ruby/1.8/i686-darwin8.7.1/rbconfig.rb
    /usr/local/lib/ruby/1.8/i686-darwin8.8.1/rbconfig.rb

Sure enough, the file at `/usr/local/lib/ruby/1.8/i686-darwin8.8.1/rbconfig.rb` corresponds to [Ruby 1.8.6](/wiki/Ruby_1.8.6). So it appears that all installed [gems](/wiki/gems) are looking in the wrong directory for `rbconfig.rb`.

I tried downloading [RubyGems](/wiki/RubyGems) and reinstalling it:

    wget http://rubyforge.org/frs/download.php/17190/rubygems-0.9.2.tgz
    tar xzf rubygems-0.9.2.tgz 
    cd rubygems-0.9.2
    sudo ruby setup.rb

But this yielded:

    /usr/local/lib/ruby/1.8/i686-darwin8.7.1/rbconfig.rb:7: ruby lib version (1.8.5) doesn't match executable version (1.8.6) (RuntimeError)
            from setup.rb:52:in `require'
            from setup.rb:52

The culprit was evidently in my `~/.bash_profile`:

    RUBYLIB="/usr/local/lib/ruby/site_ruby/1.8:/usr/local/lib/ruby/site_ruby/1.8/i686-darwin8.7.1:/usr/local/lib/ruby/1.8:/usr/local/lib
    /ruby/1.8/i686-darwin8.7.1"
    export RUBYLIB

I temporarily overrode this:

    export RUBYLIB="/usr/local/lib/ruby/site_ruby/1.8:/usr/local/lib/ruby/site_ruby/1.8/i686-darwin8.8.1:/usr/local/lib/ruby/1.8:/usr/local/lib/ruby/1.8/i686-darwin8.8.1"

And found that things were working again:

    fastri-server -b
    gem list --local

The `~/.bash_profile` stuff was something I'd put in when I first starting playing with [Rails](/wiki/Rails) and [Ruby](/wiki/Ruby), knowing absolutely nothing about either (see "[Installing Ruby on Rails 1.1.4 on Mac OS X Tiger](/wiki/Installing_Ruby_on_Rails_1.1.4_on_Mac_OS_X_Tiger)"). Even unsetting `RUBYLIB` entirely is fine:

    unset RUBYLIB

Evidently, the newly built [Ruby 1.8.6](/wiki/Ruby_1.8.6) already knows in which directories it should look for library files; witness the output of `ruby -e "puts $:"` after performing the `unset`:

    /usr/local/lib/ruby/site_ruby/1.8
    /usr/local/lib/ruby/site_ruby/1.8/i686-darwin8.8.1
    /usr/local/lib/ruby/site_ruby
    /usr/local/lib/ruby/1.8
    /usr/local/lib/ruby/1.8/i686-darwin8.8.1
    .

# Updating installed gems

    sudo gem update

Of my installed gems, only `sqlite3-ruby` needed to be updated.

# See also

-   Release announcement: <http://groups.google.com/group/comp.lang.ruby/browse_thread/thread/f2add90521cf106b/9a64ca26897fe75a>
-   User-visible changes: <http://svn.ruby-lang.org/repos/ruby/tags/v1_8_6/NEWS>
-   All changes: <http://svn.ruby-lang.org/repos/ruby/tags/v1_8_6/ChangeLog>

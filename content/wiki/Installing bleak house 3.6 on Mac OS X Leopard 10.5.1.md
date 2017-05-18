---
tags: bleak.house wiki
---

These notes were made while installing [bleak\_house](/wiki/bleak_house) 3.6 on [Mac OS X](/wiki/Mac_OS_X) [Leopard](/wiki/Leopard) 10.5.1.

My initial attempt failed:

    $ sudo gem install bleak_house
    Password:
    Updating metadata for 31 gems from http://gems.rubyforge.org
    ...............................
    complete
    Building native extensions.  This could take a while...
    Building native extensions.  This could take a while...
    ERROR:  Error installing bleak_house:
    	ERROR: Failed to build gem native extension.

    /System/Library/Frameworks/Ruby.framework/Versions/1.8/usr/bin/ruby extconf.rb install bleak_house
    /usr/lib/ruby/1.8/mkmf.rb:4:in `require': no such file to load -- rbconfig (LoadError)
    	from /usr/lib/ruby/1.8/mkmf.rb:4
    	from build_logger.rb:1:in `require'
    	from build_logger.rb:1


    Gem files will remain installed in /Library/Ruby/Gems/1.8/gems/bleak_house-3.6 for inspection.
    Results logged to /Library/Ruby/Gems/1.8/gems/bleak_house-3.6/ext/bleak_house/logger/gem_make.out

I see there are a few open tickets for this already:

-   <http://rubyforge.org/forum/forum.php?thread_id=20479&forum_id=13983>
-   <http://rubyforge.org/forum/forum.php?thread_id=20989&forum_id=13983>
-   <http://rubyforge.org/forum/forum.php?thread_id=21090&forum_id=13983> (this one labelled as applying to [Tiger](/wiki/Tiger) but the error message is similar)

Before going any further, I turned to [Google](/wiki/Google) but found only this:

-   <http://twitter.com/shaper/statuses/563697382>

So I investigated further:

    cd /Library/Ruby/Gems/1.8/gems/bleak_house-3.6/ext/bleak_house/logger
    less extconf.rb

    # extconf.rb runs buildruby.rb
    less buildruby.rb

    # do this as root seeing as that's what RubyGems did too
    sudo ruby buildruby.rb

    # seems to work, did it actually build ruby?
    /usr/bin/ruby-bleak-house --version

    # so the next line in extconf.rb must be the one that fails, let's try that
    sudo ruby-bleak-house build_logger.rb

This yields the same error as shown above, so we've now pinpointed the location of the failure. It's failing on the very first line of `build_logger.rb`:

    require 'mkmf'

The custom `ruby-bleak-house` build is using the standard `mkmf.rb` file and failing to find any `rbconfig` require.

So, let's see what `rbconfig.rb` files we have on the system:

    $ find / -name rbconfig.rb 2> /dev/null
    /private/tmp/bleak_house/ruby-1.8.6-p110/rbconfig.rb
    /System/Library/Frameworks/Ruby.framework/Versions/1.8/usr/lib/ruby/1.8/universal-darwin9.0/rbconfig.rb
    /Users/wincent/trabajo/vendor/ruby/ruby-1.9.0-0/rbconfig.rb
    /usr/local/ruby19/lib/ruby/1.9.0/i686-darwin9.1.0/rbconfig.rb

Let's see what `ruby-bleak-house` has in its load path:

    $ ruby-bleak-house -e "p $:"
    ["/usr/lib/ruby/site_ruby/1.8",
    "/usr/lib/ruby/site_ruby/1.8/i686-darwin9.1.0",
    "/usr/lib/ruby/site_ruby",
    "/usr/lib/ruby/1.8",
    "/usr/lib/ruby/1.8/i686-darwin9.1.0",
    "."]

Compare that with the stock [Leopard](/wiki/Leopard) [Ruby](/wiki/Ruby):

    $ ruby -e "p $:"
    ["/Library/Ruby/Site/1.8",
    "/Library/Ruby/Site/1.8/powerpc-darwin9.0",
    "/Library/Ruby/Site/1.8/universal-darwin9.0",
    "/Library/Ruby/Site",
    "/System/Library/Frameworks/Ruby.framework/Versions/1.8/usr/lib/ruby/1.8",
    "/System/Library/Frameworks/Ruby.framework/Versions/1.8/usr/lib/ruby/1.8/powerpc-darwin9.0",
    "/System/Library/Frameworks/Ruby.framework/Versions/1.8/usr/lib/ruby/1.8/universal-darwin9.0",
    "."]

So you can see why it fails to find any `rbconfig.rb`. It isn't configured to look in either `/private/tmp/bleak_house/ruby-1.8.6-p110/` (where it could find its own), or in `/System/Library/Frameworks/Ruby.framework/Versions/1.8/usr/lib/ruby/1.8/universal-darwin9.0` (where it could find Leopard's).

Out of interest, what are the differences between the two files?

    $ diff /System/Library/Frameworks/Ruby.framework/Versions/1.8/usr/lib/ruby/1.8/universal-darwin9.0/rbconfig.rb \
    /private/tmp/bleak_house/ruby-1.8.6-p110/rbconfig.rb

Output:

    9c9
    <   TOPDIR = File.dirname(__FILE__).chomp!("/lib/ruby/1.8/universal-darwin9.0")
    ---
    >   TOPDIR = File.dirname(__FILE__).chomp!("/lib/ruby/1.8/i686-darwin9.1.0")
    11,18d10
    <   ARCHFLAGS = 
    <     if e = ENV['ARCHFLAGS']
    <       e
    <     elsif e = ENV['RC_ARCHS']
    <       e.split.map { |a| "-arch #{a}" }.join(' ')
    <     else
    <       '-arch ppc -arch i386'
    <     end
    22c14
    <   CONFIG["prefix"] = (TOPDIR || DESTDIR + "/System/Library/Frameworks/Ruby.framework/Versions/1.8/usr")
    ---
    >   CONFIG["prefix"] = (TOPDIR || DESTDIR + "/usr")
    46c38
    <   CONFIG["infodir"] = "$(DESTDIR)/usr/share/info"
    ---
    >   CONFIG["infodir"] = "$(datarootdir)/info"
    53c45
    <   CONFIG["mandir"] = "$(DESTDIR)/usr/share/man"
    ---
    >   CONFIG["mandir"] = "$(datarootdir)/man"
    57c49
    <   CONFIG["LIBS"] = "-lpthread -ldl -lm "
    ---
    >   CONFIG["LIBS"] = "-ldl -lobjc "
    64,65c56,57
    <   CONFIG["build"] = "powerpc-apple-darwin9.0"
    <   CONFIG["build_cpu"] = "powerpc"
    ---
    >   CONFIG["build"] = "i686-apple-darwin9.1.0"
    >   CONFIG["build_cpu"] = "i686"
    67,69c59,61
    <   CONFIG["build_os"] = "darwin9.0"
    <   CONFIG["host"] = "powerpc-apple-darwin9.0"
    <   CONFIG["host_cpu"] = "powerpc"
    ---
    >   CONFIG["build_os"] = "darwin9.1.0"
    >   CONFIG["host"] = "i686-apple-darwin9.1.0"
    >   CONFIG["host_cpu"] = "i686"
    71,73c63,65
    <   CONFIG["host_os"] = "darwin9.0"
    <   CONFIG["target"] = "powerpc-apple-darwin9.0"
    <   CONFIG["target_cpu"] = "powerpc"
    ---
    >   CONFIG["host_os"] = "darwin9.1.0"
    >   CONFIG["target"] = "i686-apple-darwin9.1.0"
    >   CONFIG["target_cpu"] = "i686"
    75c67
    <   CONFIG["target_os"] = "darwin9.0"
    ---
    >   CONFIG["target_os"] = "darwin9.1.0"
    77,78c69,70
    <   CONFIG["CFLAGS"] = "#{ARCHFLAGS} -Os -pipe -fno-common"
    <   CONFIG["LDFLAGS"] = "-L. #{ARCHFLAGS}"
    ---
    >   CONFIG["CFLAGS"] = "-g -O2 -pipe -fno-common"
    >   CONFIG["LDFLAGS"] = "-L. "
    105c97
    <   CONFIG["ALLOCA"] = "$(LIBOBJDIR)alloca.o"
    ---
    >   CONFIG["ALLOCA"] = ""
    110c102
    <   CONFIG["LDSHARED"] = "cc #{ARCHFLAGS} -pipe -bundle"
    ---
    >   CONFIG["LDSHARED"] = "cc -dynamic -bundle -undefined suppress -flat_namespace"
    130,131c122,123
    <   CONFIG["LIBRUBY_LDSHARED"] = "cc #{ARCHFLAGS} -pipe -dynamiclib"
    <   CONFIG["LIBRUBY_DLDFLAGS"] = "-install_name $(libdir)/lib$(RUBY_SO_NAME).$(MAJOR).dylib -current_version $(MAJOR).$(MINOR).$(TEENY) -compatibility_version $(MAJOR).$(MINOR)"
    ---
    >   CONFIG["LIBRUBY_LDSHARED"] = "cc -dynamic -bundle -undefined suppress -flat_namespace"
    >   CONFIG["LIBRUBY_DLDFLAGS"] = ""
    135,140c127,132
    <   CONFIG["LIBRUBY_SO"] = "lib$(RUBY_SO_NAME).$(MAJOR).dylib"
    <   CONFIG["LIBRUBY_ALIASES"] = "lib$(RUBY_SO_NAME).dylib"
    <   CONFIG["LIBRUBY"] = "$(LIBRUBY_SO)"
    <   CONFIG["LIBRUBYARG"] = "$(LIBRUBYARG_SHARED)"
    <   CONFIG["LIBRUBYARG_STATIC"] = "-l$(RUBY_SO_NAME)"
    <   CONFIG["LIBRUBYARG_SHARED"] = "-l$(RUBY_SO_NAME)"
    ---
    >   CONFIG["LIBRUBY_SO"] = "lib$(RUBY_SO_NAME).so.$(MAJOR).$(MINOR).$(TEENY)"
    >   CONFIG["LIBRUBY_ALIASES"] = "lib$(RUBY_SO_NAME).so"
    >   CONFIG["LIBRUBY"] = "$(LIBRUBY_A)"
    >   CONFIG["LIBRUBYARG"] = "$(LIBRUBYARG_STATIC)"
    >   CONFIG["LIBRUBYARG_STATIC"] = "-l$(RUBY_SO_NAME)-static"
    >   CONFIG["LIBRUBYARG_SHARED"] = ""
    143c135
    <   CONFIG["ENABLE_SHARED"] = "yes"
    ---
    >   CONFIG["ENABLE_SHARED"] = "no"
    150,153c142,145
    <   CONFIG["arch"] = "universal-darwin9.0"
    <   CONFIG["sitearch"] = "universal-darwin9.0"
    <   CONFIG["sitedir"] = "$(DESTDIR)/Library/Ruby/Site"
    <   CONFIG["configure_args"] = " '--prefix=/usr' '--mandir=/usr/share/man' '--infodir=/usr/share/info' '--disable-dependency-tracking' '--enable-pthread' '--enable-shared' '--prefix=/System/Library/Frameworks/Ruby.framework/Versions/1.8/usr' '--with-sitedir=/Library/Ruby/Site' 'ac_cv_func_getcontext=no' 'ac_cv_func_setcontext=no' 'CFLAGS=    -g -Os -pipe -fno-common -DENABLE_DTRACE     -pipe' 'LDFLAGS=               '"
    ---
    >   CONFIG["arch"] = "i686-darwin9.1.0"
    >   CONFIG["sitearch"] = "i686-darwin9.1.0"
    >   CONFIG["sitedir"] = "$(prefix)/lib/ruby/site_ruby"
    >   CONFIG["configure_args"] = " '--prefix=/usr'"
    187,189d178
    < RUBY_FRAMEWORK = true
    < RUBY_FRAMEWORK_VERSION = Config::CONFIG['ruby_version']
    < APPLE_GEM_HOME = File.join(Config::CONFIG['libdir'], 'ruby/gems', Config::CONFIG['ruby_version'])

So we really have a few problems here:

-   Stock `ruby` on [Leopard](/wiki/Leopard) is a different version
-   Stock `ruby` on [Leopard](/wiki/Leopard) is a [Universal Binary](/wiki/Universal_Binary), but the [bleak\_house](/wiki/bleak_house) version is not
-   This mismatch could be an obstacle to testing compiled extensions
-   Stock `ruby` looks in completely different places to find things

All of this means that you can't just use `ruby-bleak-house` as a drop-in replacement for `ruby` on [Leopard](/wiki/Leopard).

So rather than use it as a drop-in, I am going to try creating a completely separate sandbox for it as I did with [Ruby 1.9](/wiki/Ruby_1.9) (see "[Installing Ruby 1.9 on Mac OS X 10.5.1](/wiki/Installing_Ruby_1.9_on_Mac_OS_X_10.5.1)").

    # delete old installed binary
    $ sudo rm /usr/bin/ruby-bleak-house

    # make a backup before experimenting
    $ sudo cp build_ruby.rb build_ruby.rb.orig

We have a backup copy, so now apply this patch:

    --- build_ruby.rb.orig	2008-01-15 14:28:56.000000000 +0100
    +++ build_ruby.rb	2008-01-15 14:32:31.000000000 +0100
    @@ -42,19 +42,9 @@
               # Patch, configure, and build
               system("patch -p0 < \'#{source_dir}/gc.c.patch\' > ../gc.c.patch.log 2>&1")
               system("patch -p0 < \'#{source_dir}/parse.y.patch\' > ../parse.y.patch.log 2>&1")
    -          system("./configure --prefix=#{binary_dir[0..-5]} > ../configure.log 2>&1") # --with-static-linked-ext
    +          system("./configure --prefix=/usr/local/ruby-bleak-house > ../configure.log 2>&1") # --with-static-linked-ext
               system("make > ../make.log 2>&1")
    -  
    -          binary = "#{binary_dir}/ruby-bleak-house"
    -  
    -          # Install binary
    -          if File.exist? "ruby"        
    -            # Avoid "Text file busy" error
    -            File.delete binary if File.exist? binary
    -            exec("cp ./ruby #{binary}; chmod 755 #{binary}")
    -          else
    -            raise "Binary did not build"
    -          end
    +          system("make install >> ../make.log 2>&1")
             end
             
           end

Now try rebuilding again:

    $ sudo ruby build_ruby.rb

Let's test that:

    $ export PATH="/usr/local/ruby-bleak-house/bin:$PATH"
    $ /usr/local/ruby-bleak-house/bin/ruby -r 'mkmf' -e 'p $:'
    ["/usr/local/ruby-bleak-house/lib/ruby/site_ruby/1.8",
    "/usr/local/ruby-bleak-house/lib/ruby/site_ruby/1.8/i686-darwin9.1.0",
    "/usr/local/ruby-bleak-house/lib/ruby/site_ruby",
    "/usr/local/ruby-bleak-house/lib/ruby/1.8",
    "/usr/local/ruby-bleak-house/lib/ruby/1.8/i686-darwin9.1.0", "."]

Note how the load path is now properly configured and the `require` of `mkmf` no longer produces any errors.

Now let's continue with the next step from the `extconf.rb`:

    $ ruby --version
    ruby 1.8.6 (2007-09-23 patchlevel 110) [i686-darwin9.1.0]
    $ sudo ruby build_logger.rb

And that works. So, I tried running `sudo gem install bleak_house` again but that wanted to rebuild the extension all over again rather than use the `Makefile` that I'd just generated. So time for one more patch:

    --- extconf.rb.orig	2008-01-15 14:42:42.000000000 +0100
    +++ extconf.rb	2008-01-15 14:46:33.000000000 +0100
    @@ -1,3 +1,6 @@
     
     system('ruby build_ruby.rb &> /dev/null')
    -exec('ruby-bleak-house build_logger.rb')
    +old_path=ENV['PATH']
    +ENV['PATH']="/usr/local/ruby-bleak-house/bin:#{old_path}"
    +exec('ruby build_logger.rb')
    +ENV['PATH']=old_path

And now:

    # restore PATH to its previous value
    . ~/.bash_profile
    echo $PATH
    sudo gem install bleak_house

Voila:

    Building native extensions.  This could take a while...
    Successfully installed bleak_house-3.6
    1 gem installed
    Installing ri documentation for bleak_house-3.6...
    Installing RDoc documentation for bleak_house-3.6...

Now, to actually use this you'll want to ensure that `/usr/local/ruby-bleak-house/bin` is in your `PATH`; any scripts which start with:

    #!/usr/bin/env ruby

Will then automatically use it.

For this sandbox to actually be useful you'll probably want to bootstrap it with a minimum of [gems](/wiki/gems). For example, I wanted to test [Walrus](http://walrus.wincent.com/) in this environment; all of these commands were executed with `/usr/local/ruby-bleak_house/bin` at the start of the `PATH`:

    # with RubyGems we won't get very far
    wget http://rubyforge.org/frs/download.php/29548/rubygems-1.0.1.tgz
    tar xzvf rubygems-1.0.1.tgz
    cd rubygems-1.0.1
    sudo ruby setup.rb

    # need RSpec to test Walrus
    sudo gem install rspec

    # need wopen3 to run Walrus
    sudo gem install wopen3

    # now let's see if Walrus actually works
    # I'm going to use a checked out copy of the source
    # (I want to test the latest code, not the code in the gem)
    cd path_to_walrus_source_directory

    # build C extensions
    rake make

    # run the specs
    rake spec

And that all works, so I can now proceed to start playing with it using bleak\_house. Note that the sandbox is so pristine that it doesn't even have bleak\_house in it; address that like this:

    sudo gem install bleak_house

Note that this downloads a new copy of the gem without our patches, and it will therefore install a new `ruby` binary at `/usr/local/ruby-bleak-house/bin/ruby-bleak-house` which we can effectively ignore.

After adding my instrumentation to the tool:

    require 'rubygems'
    require 'bleak_house'
    $memlogger = BleakHouse::Logger.new
    File.delete($memlogger_file = '/tmp/walrus.log') rescue nil

    # and later on...
    $memlogger.snapshot($memlogger_file, 'tag/subtag', false)

I deploy it in the sandbox as follows:

    rake gem
    sudo gem install pkg/walrus-0.2.gem

    # this is the instrumented version, in the sandbox
    walrus --version

Now run the tool with a test workloand and analyze the output with:

    bleak /tmp/walrus.log

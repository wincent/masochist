---
tags: wiki macos ruby
title: Unbreaking Ruby compilation on macOS "Big Sur" 11.6.2
---

Noticed this when trying to re-compile [Command-T](https://github.com/wincent/command-t) just now:

```shell
$ ruby extconf.rb
checking for float.h... *** extconf.rb failed ***
Could not create Makefile due to some reason, probably lack of necessary
libraries and/or headers.  Check the mkmf.log file for more details.  You may
need configuration options.

(many lines of error output omitted)

You have to install development tools first.
```

That last line is a red-herring. The development tools were installed, and re-installing them didn't fix the issue:

```
$ xcode-select --install
xcode-select: error: command line tools are already installed, use "Software Update" to install updates
$ sudo rm -rf /Library/Developer/CommandLineTools
$ xcode-select --install
xcode-select: note: install requested for command line developer tools
```

In the `mkmf.log` output, we see this:

```
"xcrun clang -o conftest -I/Library/Developer/CommandLineTools/SDKs/MacOSX12.1.sdk/System/Library/Frameworks/Ruby.framework/Versions/2.6/usr/include/ruby-2.6.0/universal-darwin20 -I/Library/Developer/CommandLineTools/SDKs/MacOSX12.1.sdk/System/Library/Frameworks/Ruby.framework/Versions/2.6/usr/include/ruby-2.6.0/ruby/backward -I/Library/Developer/CommandLineTools/SDKs/MacOSX12.1.sdk/System/Library/Frameworks/Ruby.framework/Versions/2.6/usr/include/ruby-2.6.0 -I. -D_XOPEN_SOURCE -D_DARWIN_C_SOURCE -D_DARWIN_UNLIMITED_SELECT -D_REENTRANT    -g -Os -pipe -DHAVE_GCC_ATOMIC_BUILTINS -DUSE_FFI_CLOSURE_ALLOC conftest.c  -L. -L/System/Library/Frameworks/Ruby.framework/Versions/2.6/usr/lib -L. -L/Applications/Xcode.app/Contents/Developer/Platforms/MacOSX.platform/Developer/SDKs/MacOSX11.6.Internal.sdk/usr/local/lib     -lruby.2.6   "
In file included from conftest.c:1:
In file included from /Library/Developer/CommandLineTools/SDKs/MacOSX12.1.sdk/System/Library/Frameworks/Ruby.framework/Versions/2.6/usr/include/ruby-2.6.0/ruby.h:33:
/Library/Developer/CommandLineTools/SDKs/MacOSX12.1.sdk/System/Library/Frameworks/Ruby.framework/Versions/2.6/usr/include/ruby-2.6.0/ruby/ruby.h:24:10: fatal error: 'ruby/config.h' file not found
#include "ruby/config.h"
         ^~~~~~~~~~~~~~~
/Library/Developer/CommandLineTools/SDKs/MacOSX12.1.sdk/System/Library/Frameworks/Ruby.framework/Versions/2.6/usr/include/ruby-2.6.0/ruby/ruby.h:24:10: note: did not find header 'config.h' in framework 'ruby' (loaded from '/Library/Developer/CommandLineTools/SDKs/MacOSX12.1.sdk/System/Library/Frameworks')
```

The key thing to note is this bit:

```
-I/Library/Developer/CommandLineTools/SDKs/MacOSX12.1.sdk/System/Library/Frameworks/Ruby.framework/Versions/2.6/usr/include/ruby-2.6.0/universal-darwin20
```

ie. it is looking for headers in a `universal-darwin20` folder that doesn't exist; in that location, we only have a `universal-darwin21` folder.

So, the hacky fix is to do this:

```shell
$ cd /Library/Developer/CommandLineTools/SDKs/MacOSX12.1.sdk/System/Library/Frameworks/Ruby.framework/Versions/2.6/usr/include/ruby-2.6.0
$ sudo ln -s universal-darwin21 universal-darwin20
```

After that, building works:

```shell
ruby extconf.rb
make
```

# See also

See also, [Unbreaking Ruby compilation on macOS "Monterey" 12.6.1].

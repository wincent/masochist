---
tags: wiki
---

When writing a [C](/wiki/C) extension for [Ruby](/wiki/Ruby) it may be necessary to have knowledge about the [text encoding](/wiki/text_encoding) of strings used at runtime. In my specific case I needed to take an input string and convert it to [UCS-2](/wiki/UCS-2) before handing it off to an external library, because that is the encoding expected by the library. In order to perform the conversion, I needed to be sure of the source encoding as well. The question is, how?

I asked about this on [comp.lang.ruby](/wiki/comp.lang.ruby) [here](http://groups.google.com/group/comp.lang.ruby/browse_thread/thread/ceaca6e814073d5c/) but didn't receive any replies. The following are the results of my own research and analysis.

# Build time

Analysis of `configure.in` and `configure` suggests that the default `$KCODE` value is `KCODE_NONE`, although it can be manually overridden with the `--with-default-kcode` switch to `configure`. Before compilation the default is added to `config.h` as a `DEFAULT_KCODE` macro.

In `defines.h` and in the case that `DEFAULT_KCODE` is not set, it will be set to either `KCODE_SJIS` or `KCODE_EUC`, depending on the build platform. However, in reality `DEFAULT_KCODE` should never be unset (in all the files I've looked at, including `ruby.h`, `config.h` is included before `defines.h`) so I don't believe this ever occurs.

It appears that in reality, the only place that `DEFAULT_KCODE` is used is in `re.c`.

# Analysis of `string.c`

There are three main string creation methods defined in `string.c` and they appear to be largely encoding-agnostic:

-   `str_new`
-   `rb_str_new`
-   `rb_str_new2`

Ultimately it seems that `String` objects are nothing more than containers for bytes of data. There is no default encoding enforced at the [Ruby](/wiki/Ruby) level.

## `str_new`

Merely allocates memory and copies memory using `memcpy`. Expects a pointer and length describing the source block from which to copy. No notion of encoding, just works with raw bytes. Takes a `klass` parameter which allows you to create instances of `String`-like classes.

## `rb_str_new`

Calls `str_new` and uses it to create a standard `String` instance. Expects a pointer and length describing the source block from which to copy. No notion of encoding.

## `rb_str_new2`

Expects a pointer to a null-terminated string. Calls `strlen` to determine string length. `strlen` should be encoding-agnostic insofar as it just counts bytes until it hits a terminating `NUL` character. This means that all standard [C](/wiki/C) strings should work. Non-[ASCII](/wiki/ASCII) encodings *might* work unless it contains embedded (non-terminating) `NUL` bytes.

# Analysis of `io.c`

Methods like `puts` eventually end up calling the `io_write` function, which in turn calls `io_fwrite` which in turn calls `write`. So there is generally no awareness of encoding when emitting strings, just like when creating strings.

Basically, then, the input encoding depends on one of several things:

-   The input file encoding, if reading from a file
-   The terminal encoding, if running inside a [terminal](/wiki/terminal) (for example, when using `IRB`)
-   The transmission encoding, if sent by a client to a [web](/wiki/web) server
-   The database encoding, if the input comes from a database

# Empirical analysis

## [Mac OS X](/wiki/Mac_OS_X), [PowerPC](/wiki/PowerPC) ([big-endian](/wiki/big-endian))

Output of `uname -psrv`:

    Darwin 8.9.0 Darwin Kernel Version 8.9.0: Thu Feb 22 20:54:07 PST 2007; root:xnu-792.17.14~1/RELEASE_PPC powerpc

Output of `ruby -v`:

    ruby 1.8.2 (2004-12-25) [powerpc-darwin8.0]

On [Mac OS X](/wiki/Mac_OS_X) the environment settings in `LANG` and `LC_*` have no effect. The encoding setting in the [Terminal](/wiki/Terminal) (accessible by pressing Command-I) controls what encoding is used for input text, and also how output is interpreted.

## [Mac OS X](/wiki/Mac_OS_X), [Intel](/wiki/Intel) ([little-endian](/wiki/little-endian))

Output of `uname -psrv`:

    Darwin 8.9.1 Darwin Kernel Version 8.9.1: Thu Feb 22 20:55:00 PST 2007; root:xnu-792.18.15~1/RELEASE_I386 i386

Output of `ruby -v`:

    ruby 1.8.6 (2007-03-13 patchlevel 0) [i686-darwin8.8.1]

## [Red Hat Enterprise Linux](/wiki/Red_Hat_Enterprise_Linux), [AMD](/wiki/AMD) ([little-endian](/wiki/little-endian))

Output of `uname -srvmpio`:

    Linux 2.4.21-50.EL #1 Tue May 8 17:18:10 EDT 2007 i686 athlon i386 GNU/Linux

Output of `ruby -v`:

    ruby 1.8.6 (2007-03-13 patchlevel 0) [i686-linux]

## [Windows](/wiki/Windows), [Intel](/wiki/Intel) ([little-endian](/wiki/little-endian))

Banner on running `cmd.exe`:

    Microsoft Windows XP [Version 5.1.2600]

Output of `ruby -v`:

    ruby 1.8.6 (2007-03-13 patchlevel 0) [i386-mswin32]

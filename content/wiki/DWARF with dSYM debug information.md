---
tags: wiki
---

# DWARF with dSYM and stripping

I made a small test project, a foundation tool, to find out what the differences are between a DWARF and a "DWARF with dSYM" build. It appears that the build process is identical (same arguments passed to compiler and linker) but in the case of the dSYM variant an additional, final step is performed:

    GenerateDSYMFile
        cd /tmp/dynamic
        /usr/bin/dsymutil -o /Users/wincent/trabajo/build/Release/dynamic.dSYM /Users/wincent/trabajo/build/Release/dynamic

Or for an application target:

    GenerateDSYMFile
        cd /tmp/dynamic
        /usr/bin/dsymutil -o /Users/wincent/trabajo/build/Release/dynamic.app.dSYM /Users/wincent/trabajo/build/Release/dynamic.app/Contents/MacOS/dynamic

The `dsymutil` utility is also mentioned here:

<http://developer.apple.com/releasenotes/DeveloperTools/GDB.html>

And there is a manpage for it:

    man dsymutil

So it looks like a possible workaround for the ordering issue described [here](http://lists.apple.com/archives/Xcode-users/2006/May/msg00856.html) is to manually add a separate shell script build phase that produces the dSYM file prior to stripping rather than activating the "DWARF with dSYM" build setting.

# Address to symbol translation

It is not necessary to keep the original executable. [GDB](/wiki/GDB) can be used as described here:

<http://lists.apple.com/archives/Xcode-users/2006/May/msg00856.html>

# dSYM information for multi-component products

Separate dSYM bundles must be kept for each component.

Components that may be loaded into memory at different locations (bundles, for example) will need to have their offsets taken into account when trying to convert addresses to symbols (no different than current `atos` usage).

# Deciphering dSYM information for other architectures

The only Apple tool that can parse the dSYM format is [GDB](/wiki/GDB). You can select the appropriate variant by running one of the following instead of `gdb`:

    /usr/libexec/gdb/gdb-powerpc-apple-darwin
    /usr/libexec/gdb/gdb-i386-apple-darwin

# atosym

While waiting for Apple to update `atos(1)` to work with dSYM files I've thrown together a quick tool to serve as a temporary substitute.

See: <http://wincent.com/a/products/atosym/>

## Checkout via svn

    svn co svn://wincent.com/atosym/trunk

## Export and zip downloadable version

    svn export svn://wincent.com/atosym/trunk atosym-1.0
    zip -r atosym-1.0.zip atosym-1.0

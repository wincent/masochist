---
tags: antlr wiki
---

This is really just an install of the [ANTLR](/wiki/ANTLR) [C](/wiki/C)-target runtime on [Red Hat Enterprise Linux](/wiki/Red_Hat_Enterprise_Linux).

I do my development work on a local [Mac OS X](/wiki/Mac_OS_X) machine, and that machine needs the full ANTLR stack to convert `.g` files into source files in the appropriate target language. But on the [RHEL](/wiki/RHEL) box I only need to run the generated recognizers, and that means that I only need the runtime.

I use the C target so that I can incorporate the code in Ruby extensions written in C, such as my [wikitext](/wiki/wikitext) extension.

# Practice run

    wget "http://antlr.org/download/antlr-3.0.1.tar.gz"
    tar xzvf antlr-3.0.1.tar.gz 
    cd antlr-3.0.1/runtime/C/dist/
    tar xzvf libantlr3c-3.0.1.tar.gz 
    cd libantlr3c-3.0.1
    ./configure
    make
    make check
    sudo make install

This installs the following libraries:

    /usr/local/lib/libantlr3c.so
    /usr/local/lib/libantlr3c.la
    /usr/local/lib/libantlr3c.a

And a bunch of headers into:

    /usr/local/include/

# Installing a patched version

Given that a vanilla build worked fine I decided to repeat with a custom build incorporating one custom fix (as mentioned in "[Upgrading to ANTLR 3.0.1 on Mac OS X Tiger](/wiki/Upgrading_to_ANTLR_3.0.1_on_Mac_OS_X_Tiger)").

The following patch needs to be applied to `runtime/C/dist/libantlr3c-3.0.1/src/antlr3inputstream.c`:

    --- runtime/C/dist/libantlr3c-3.0.1/src/antlr3inputstream.c    2007-08-10 21:23:05.000000000 +0200
    +++ runtime/C/dist/libantlr3c-3.0.1/src/antlr3inputstream.c    2007-10-16 00:17:51.000000000 +0200
    @@ -180,7 +180,7 @@
     
         input->nextChar            = input->data;  /* Input at first character */
         input->line                        = 1;            /* starts at line 1         */
    -    input->charPositionInLine  = -1;
    +    input->charPositionInLine  = 0;
         input->currentLine         = input->data;
         input->markDepth           = 0;            /* Reset markers            */

And then you can rebuild:

    make clean
    ./configure --disable-shared
    make
    make check
    sudo make install

# Using the ANTLR C runtime when building [Ruby](/wiki/Ruby) extensions

Note a critical point in the rebuild above: for this build I disabled the installation of a shared version of the library. My initial experimentation showed that without doing this `mkmf` generated a `Makefile` which attempted to link against the dynamic shared library and failed:

    gcc -I. -I. -I/usr/local/lib/ruby/1.8/i686-linux -I. -DHAVE_ANTLR3_H  -fPIC -g -O2  -std=gnu99 -c wiki_text.c
    gcc -I. -I. -I/usr/local/lib/ruby/1.8/i686-linux -I. -DHAVE_ANTLR3_H  -fPIC -g -O2  -std=gnu99 -c WikiTextLexer.c
    gcc -shared -rdynamic -Wl,-export-dynamic   -L'/usr/local/lib' -Wl,-R'/usr/local/lib' -o wiki_text.so wiki_text.o WikiTextLexer.o  -lantlr3c  -ldl -lcrypt -lm   -lc
    WikiTextLexer.o: file not recognized: File format not recognized
    collect2: ld returned 1 exit status
    make: *** [wiki_text.so] Error 1

With a static library the build succeeds:

    gcc -I. -I. -I/usr/local/lib/ruby/1.8/i686-linux -I. -DHAVE_ANTLR3_H  -fPIC -g -O2  -std=gnu99 -c wiki_text.c
    gcc -I. -I. -I/usr/local/lib/ruby/1.8/i686-linux -I. -DHAVE_ANTLR3_H  -fPIC -g -O2  -std=gnu99 -c WikiTextLexer.c
    gcc -shared -rdynamic -Wl,-export-dynamic   -L'/usr/local/lib' -Wl,-R'/usr/local/lib' -o wiki_text.so wiki_text.o WikiTextLexer.o  -lantlr3c  -ldl -lcrypt -lm   -lc

Note that the arguments are the same, but the outcome is different.

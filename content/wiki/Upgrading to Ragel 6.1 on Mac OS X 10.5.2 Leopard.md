---
tags: leopard ragel updates os.x wiki
---

These notes were made while upgrading to [Ragel 6.1](/wiki/Ragel_6.1) on [Mac OS X](/wiki/Mac_OS_X) 10.5.2 [Leopard](/wiki/Leopard).

## Building

Note that in order to verify the signature on the downloaded archive you'll need to have done some setup as described in "[Verifying Ragel signatures](/wiki/Verifying_Ragel_signatures)".

    wget http://www.cs.queensu.ca/~thurston/ragel/ragel-6.1.tar.gz \
         http://www.cs.queensu.ca/~thurston/ragel/ragel-6.1.tar.gz.asc \
         http://www.cs.queensu.ca/~thurston/ragel/ragel-guide-6.1.pdf
    gpg --verify ragel-6.1.tar.gz.asc ragel-6.1.tar.gz
    tar xzvf ragel-6.1.tar.gz
    cd ragel-6.1
    ./configure
    make

## Testing

    cd tests
    ./runtests

Just as in the previous upgrade (see "[Upgrading from Ragel 5.24 to 6.0 on Mac OS X 10.5.1 Leopard](/wiki/Upgrading_from_Ragel_5.24_to_6.0_on_Mac_OS_X_10.5.1_Leopard)"), there is a minor glitch that prevents the test suite from running on [Leopard](/wiki/Leopard) (although it worked fine on [Tiger](/wiki/Tiger)). The solution is to make a change to the `cppscan1.h` file in the `tests` directory:

    --- cppscan1.h.old	2008-03-27 00:55:51.000000000 +0100
    +++ cppscan1.h	2008-03-27 00:56:06.000000000 +0100
    @@ -2,7 +2,7 @@
     [/tags/define #define] _CPPSCAN1_H
     
     [/tags/include #include] <iostream>
    -#include <malloc.h>
    +#include <malloc/malloc.h>
     [/tags/include #include] <string.h>
     
     using namespace std;

And then run the test suite again (with `./runtests`) and it should pass fine.

## Installing

Now we can proceed with the install:

    cd ..
    sudo make install

## Testing with a real application

I wanted to try out [Ragel 6.1](/wiki/Ragel_6.1) on an existing project to see if the generated code was any different. I chose to do this on my [wikitext](/wiki/wikitext) translator.

    cd path/to/wikitext/src
    rake clobber # blows away Ragel-generated files
    rake         # builds everything and runs the spec suite

So all the specs passed, and the generated code was byte-for-byte identical, so evidently my machine didn't exercise any the changes in 6.1.

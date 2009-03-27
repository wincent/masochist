---
tags: ragel updates
cache_breaker: 1
---

These notes were made while upgrading to [Ragel 6.4](/wiki/Ragel_6.4) on [Mac OS X](/wiki/Mac_OS_X) 10.5.2 [Leopard](/wiki/Leopard).

## Building

Note that in order to verify the signature on the downloaded archive you'll need to have done some setup as described in "[Verifying Ragel signatures](/wiki/Verifying_Ragel_signatures)".

    wget http://www.complang.org/ragel/ragel-6.4.tar.gz \
         http://www.complang.org/ragel/ragel-6.4.tar.gz.asc \
         http://www.complang.org/ragel/ragel-guide-6.4.pdf
    gpg --verify ragel-6.4.tar.gz.asc ragel-6.4.tar.gz
    tar xzvf ragel-6.4.tar.gz
    cd ragel-6.4
    ./configure 
    make

## Testing

    cd tests
    ./runtests

Just as in the previous upgrades (such as "[Upgrading from Ragel 5.24 to 6.0 on Mac OS X 10.5.1 Leopard](/wiki/Upgrading_from_Ragel_5.24_to_6.0_on_Mac_OS_X_10.5.1_Leopard)"), there is a minor glitch that prevents the test suite from running on [Leopard](/wiki/Leopard) (although it worked fine on [Tiger](/wiki/Tiger)). The solution is to make a change to the `cppscan1.h` file in the `tests` directory:

    -#include <malloc.h>
    +#include <malloc/malloc.h>

And then run the test suite again (with `./runtests`) and it should pass fine.

## Installing

Now we can proceed with the install:

    cd ..
    sudo make install

## Testing with a real application

I wanted to try out 6.4 on an existing project to see if the generated code was any different. I chose to do this on my [wikitext](/wiki/wikitext) translator.

    cd path/to/wikitext/src
    rake clobber # blows away Ragel-generated files
    rake         # builds everything and runs the spec suite

So all the specs passed, and the generated code looks extremely similar. There is really only one hunk with a substantive, non-comment change in the generated file:

    @@ -213,7 +216,6 @@ tr23:
                 {p++; cs = 94; goto _out;}
             }
            break;
    -       default: break;
            }
            }
            goto st94;

I can't see anything in [the changelog](http://www.complang.org/ragel/ChangeLog) that would explain this. I guess I'll just have to trust that spec suite is good enough to catch any behaviour changes in the scanner.

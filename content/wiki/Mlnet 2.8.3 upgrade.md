---
tags: mlnet wiki
---

# Static build attempt

Like last time (see "[mlnet 2.8.2 upgrade](/wiki/mlnet_2.8.2_upgrade)") I attempted to make a static build and failed:

    wget http://switch.dl.sourceforge.net/sourceforge/mldonkey/mldonkey-2.8.3.tar.bz2
    tar zjvf mldonkey-2.8.3.tar.bz2
    cd mldonkey-2.8.3
    ./configure
    make mlnet.static

Partial extract:

    /usr/bin/ld: can't locate file for: -lcrt0.o
    collect2: ld returned 1 exit status
    Error during linking
    make: *** [mlnet.static] Error 2

So I did some Googling and found this (<http://svn.haxx.se/dev/archive-2005-04/0403.shtml>):

> Mac OS X doesn't like static binaries and doesn't include a staticly \[sic\] linked crt (part of the C runtime AFAIK)."

This in turn led me to "Static linking of user binaries on Mac OS X" (<http://developer.apple.com/qa/qa2001/qa1118.html>):

> If your project absolutely must link statically and need crt0.o, you can get the Csu module from Darwin and try building crt0.o statically.

So I downloaded Csu:

-   <http://www.opensource.apple.com/darwinsource/10.4.8.x86/>
-   <http://www.opensource.apple.com/darwinsource/tarballs/apsl/Csu-71.tar.gz>

And tried again:

    tar xzvf Csu-71.tar.gz
    cd Csu-71
    make
    cp crt0.o ..
    cd ..
    make mlnet.static

Same error:

    /usr/bin/ld: can't locate file for: -lcrt0.o
    collect2: ld returned 1 exit status
    Error during linking
    make: *** [mlnet.static] Error 2

Try adding current directory to library search path:

    export LDFLAGS="-L."
    ./configure
    make mlnet.static

This yields a slightly different error:

    /usr/bin/ld: /tmp/camlstartup07c8d0.o incompatible, file contains unsupported type of section 2 (__IMPORT,__pointers) in load command 0 (must specify "-dynamic" to be used)
    /usr/bin/ld: /usr/local/lib/ocaml/std_exit.o incompatible, file contains unsupported type of section 2 (__IMPORT,__pointers) in load command 0 (must specify "-dynamic" to be used)
    /usr/bin/ld: src/daemon/common/commonMain.o incompatible, file contains unsupported type of section 2 (__IMPORT,__pointers) in load command 0 (must specify "-dynamic" to be used)
    /usr/bin/ld: can't locate file for: -lcharset
    collect2: ld returned 1 exit status
    Error during linking
    make: *** [mlnet.static] Error 2

Alternative approach:

    export LD_LIBRARY_PATH=`pwd`
    make mlnet.static

Looks to be the same error:

    /usr/bin/ld: /tmp/camlstartupf55476.o incompatible, file contains unsupported type of section 2 (__IMPORT,__pointers) in load command 0 (must specify "-dynamic" to be used)
    /usr/bin/ld: /usr/local/lib/ocaml/std_exit.o incompatible, file contains unsupported type of section 2 (__IMPORT,__pointers) in load command 0 (must specify "-dynamic" to be used)
    /usr/bin/ld: src/daemon/common/commonMain.o incompatible, file contains unsupported type of section 2 (__IMPORT,__pointers) in load command 0 (must specify "-dynamic" to be used)
    /usr/bin/ld: can't locate file for: -lcharset
    collect2: ld returned 1 exit status
    Error during linking
    make: *** [mlnet.static] Error 2

At this point I gave up and just did a non-static build.

# Non-static build

    make
    sudo make install

# See also

-   Release notes: <https://sourceforge.net/project/shownotes.php?group_id=156414&release_id=467566>

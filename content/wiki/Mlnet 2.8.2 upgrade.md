---
tags: mlnet wiki
---

I first tried to make a static build and failed

    wget "http://switch.dl.sourceforge.net/sourceforge/mldonkey/mldonkey-2.8.2.tar.bz2"
    tar xjvf mldonkey-2.8.2.tar.bz2
    cd mldonkey-2.8.2
    ./configure
    make mlnet.static

Non-static build did work (excerpt from build transcript):

    /usr/bin/ld: can't locate file for: -lcrt0.o
    collect2: ld returned 1 exit status
    Error during linking
    make: *** [mlnet.static] Error 2

The static build does work:

    make

# See also

-   Release notes: <https://sourceforge.net/project/shownotes.php?group_id=156414&release_id=467345>
-   Changelog: <http://mldonkey.sourceforge.net/News>
-   MLDonkey files: <https://sourceforge.net/project/showfiles.php?group_id=156414>

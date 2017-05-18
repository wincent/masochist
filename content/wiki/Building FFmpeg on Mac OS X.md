---
tags: wiki
---

This requires that [liba52](/wiki/liba52) be installed.

    ./configure --enable-liba52 --enable-gpl

This yielded an error. Evidently I needed to install [liba52](/wiki/liba52) separately. See "[Building liba52 on Mac OS X](/wiki/Building_liba52_on_Mac_OS_X)". But unfortunately the build did not succeed:

    i686-apple-darwin8-gcc-4.0.1: unrecognized option '-rdynamic'
    /usr/bin/ld: Undefined symbols:
    _libgsm_ms_decoder
    _libgsm_ms_encoder
    collect2: ld returned 1 exit status
    make: *** [ffmpeg_g] Error 1

So I tried disabling [MMX](/wiki/MMX) support, something I'd done when I originally built [FFmpeg](/wiki/FFmpeg) (see "[Installing PAC (Perl Audio Converter) on Mac OS X](/wiki/Installing_PAC_%28Perl_Audio_Converter%29_on_Mac_OS_X)"):

    ./configure --enable-liba52 --enable-gpl --disable-mmx
    make clean
    make

This yielded the same error.

Also failed:

    ./configure --enable-liba52 --enable-gpl --disable-mmx --disable-vhook --enable-shared

Also failed:

    ./configure --enable-memalign-hack --enable-libmp3lame --enable-gpl --disable-vhook --disable-ffplay --disable-ffserver --enable-liba52 --enable-pthreads

# See also

<http://stephenjungels.com/jungels.net/articles/ffmpeg-howto.html>

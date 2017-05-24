---
title: Using cross-development SDKs for configure/make-based UNIX tools and libraries
tags: blog
---

It's been a long time since I did a [WinHex](http://www.wincent.com/a/products/winhex/) release. One of the reasons has been that I've had trouble compiling the [GMP arbitrary precision arithmetic library](http://swox.com/gmp/) upon which WinSwitch depends. Since the last release, GMP has been updated a couple of times, the version of [GCC](http://gcc.gnu.org/) that Apple ships with Mac OS X Xcode tools has seen updates too, and the first Intel-based machines are now available to the public.

For a while newer versions of GCC were incapable of compiling GMP, but Apple's default compiler changed from GCC 2.95 to 3.3 and later to 4.0. Mixing applications and libraries built by different versions of GCC is not always a good idea. At some point (with the final 4.0 release, I believe) it became possible to compile GMP on a Mac again. GMP itself was updated to 4.1.4 and then to 4.2. As things currently stand, GMP will compile fine out of the box on a PowerPC platform running Mac OS X 10.4. It will only compile on Intel-based machines if you force it to use generic (but slower) C code rather than assembly.





#### Building for Intel/Mac OS X 10.4

To build GMP on my Intel iMac I had to use the following commands:

    ./configure --build=none-apple-darwin8.6.1
    make
    make check

The key word is "none" which forces generic C code to be used rather than architecture-specific machine code. I got the "darwin8.6.1" value by first running `./config.guess`. I was then able to copy the sample code from the GMP `INSTALL` document into a file called `example.c` and test that it compiled:

    gcc -g -I. example.c .libs/libgmp.a

And worked:

    # should print 31415926535897932384618573336104570964418
    ./a.out 98365871231256752134 319378318340103345227

#### Building for PowerPC/Mac OS X 10.3

If you build on a G5 machine you'll end up getting a 64-bit version of the library:

    ./configure
    make
    make check

If you want to build a library that will work on G4s (and even G3s) as well then you need to override the "build" setting:

    ./configure --build=powerpc-apple-darwin8.6.0
    make
    make check

Once again I used `./config.guess` to get the correct value for "darwin8.6.0". You'll also note that I overrode the processor-specific "powerpc970" setting and pass just "powerpc" instead.

This all worked fine, but when I actually tried to use the built library in my Xcode project I started to get strange linker errors like these, but only in the PowerPC part of my build:

    /usr/bin/ld: Undefined symbols:
    _fprintf$LDBLStub

A quick search on Google turned up a few references to `libSystemStubs`. Specifically linking to the library did not help. And why should I have to link to it in my Cocoa app when my simple command-line test had worked just fine? So I did a quick search for that library on my system to see what was happening:

    $ locate SystemStubs | xargs ls -laF
    -rw-r--r--   1 root  wheel    640 Dec 25 08:35 /Developer/SDKs/MacOSX10.3.9.sdk/usr/lib/libSystemStubs.a
    -rw-r--r--   1 root  wheel    640 Dec 25 08:35 /Developer/SDKs/MacOSX10.3.9.sdk/usr/lib/libSystemStubs_debug.a
    -rw-r--r--   1 root  wheel    640 Dec 25 08:35 /Developer/SDKs/MacOSX10.3.9.sdk/usr/lib/libSystemStubs_profile.a
    -rw-r--r--   1 root  wheel  76068 Dec 24 23:07 /Developer/SDKs/MacOSX10.4u.sdk/usr/lib/libSystemStubs.a
    -rw-r--r--   1 root  wheel  76068 Dec 24 23:07 /Developer/SDKs/MacOSX10.4u.sdk/usr/lib/libSystemStubs_debug.a
    -rw-r--r--   1 root  wheel  76180 Dec 24 23:07 /Developer/SDKs/MacOSX10.4u.sdk/usr/lib/libSystemStubs_profile.a
    -r--r--r--   1 root  wheel  76068 Dec 24 23:07 /usr/lib/libSystemStubs.a
    -r--r--r--   1 root  wheel  76068 Dec 24 23:07 /usr/lib/libSystemStubs_debug.a
    -r--r--r--   1 root  wheel  76180 Dec 24 23:07 /usr/lib/libSystemStubs_profile.a
    -rw-r--r--   1 root  wheel  11056 Nov 10 18:55 /usr/local/share/darwinbuild/cache/Roots/8C46/SystemStubs.root.tar.gz

Now things started to become clear. Only the PowerPC builds were failing, but my Universal apps use the 10.4 SDK for the Intel part of the build and the 10.3 SDK for the PowerPC part. Notice that the SystemStubs library in the PowerPC SDK is much smaller? The symbols that the linker was looking for just weren't in that version of the library.

#### Cross-development SDKs for configure/make-based projects

So evidently, I hadn't really done the best job when I'd compiled the PowerPC version of the library. Given that I had built it on a PowerPC running Mac OS X 10.4, it had used the installed copies of the libraries, equivalent to the ones in the 10.4 SDK. What I should have done was forced it to use the ones in the 10.3 SDK. When it came time to build my Cocoa app it was trying to use a library built for 10.4 but the rest of the PowerPC portion of the app was built for 10.3, yielding the linker error.

A more experienced UNIX hacker would have realized this right from the start but it took a little while to sink in for me. Time to do some research. How do you force a configure/make-based project to use a different SDK?

The official [Apple Cross-Development Programming Guide](http://developer.apple.com/documentation/DeveloperTools/Conceptual/cross_development/Using/chapter_3_section_2.html#//apple_ref/doc/uid/20002000-1114311-BABGCAAB) says:

> To select an SDK for a makefile, you add the appropriate options to your project's compile and link commands. For the compiler, you add the `-isysroot` option. For the linker, you add the `-syslibroot` option. If you are using GCC 4.0 to compile and link, you should add both commands to the command line.

[Tech Note 2137](http://developer.apple.com/technotes/tn2005/tn2137.html), *Building Universal Binaries from "configure"-based Open Source Projects*, says:

> The first approach is to simply have `configure` build a universal binary, by passing in the appropriate `CFLAGS` and `LDFLAGS` environment variables. This is done simply by running
>
>     env CFLAGS="-O -g -isysroot /Developer/SDKs/MacOSX10.4u.sdk -arch i386 -arch ppc" \
>       LDFLAGS="-Wl,-syslibroot,/Developer/SDKs/MacOSX10.4u.sdk" \
>        ./configure --prefix=${HOME}/Hello --disable-dependency-tracking
>
> from the shell command prompt.

Finally, [this thread](http://lists.apple.com/archives/unix-porting/2005/Oct/msg00003.html) on the Apple UNIX porting mailing list says:

> Sounds like we should change the technote to clarify that you should only set LDFLAGS to include -syslibroot if your makefile doesn't pass CFLAGS for linking. Your makefile apparently does use CFLAGS while linking.

And later in the thread:

> All automake projects use CFLAGS for linking.

Armed with this information and some trial and error I found that I was able to build GMP using the 10.3.9 SDK with the following commands:

    export SDK=/Developer/SDKs/MacOSX10.3.9.sdk
    export MACOSX_DEPLOYMENT_TARGET=10.3
    export CFLAGS="-isysroot ${SDK}"
    ./configure --build=powerpc-apple-darwin8.6.0
    make
    make check

In my initial attempts I tried setting both `CPPFLAGS` and `LDFLAGS` as well but these always produced `configure` errors. By inspecting `configure.log` I eliminated the sources of the errors until I arrived at the final, working settings. Running `nm` on the built library showed that the source of the problem (the references to undefined symbols had been eliminated). WinHex is now building and linking again with the new version of the library, and running as a Universal Binary. Hopefully all this means that a new WinHex release will hit the servers in the not-too distant future.

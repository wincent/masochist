---
tags: development os.x
---

The official [Apple](/wiki/Apple) documentation comes in the form of [Technote 2137](/wiki/Technote_2137):

-   <http://developer.apple.com/technotes/tn2005/tn2137.html>

And this article, "Building an Open Source Universal Binary":

-   <http://developer.apple.com/opensource/buildingopensourceuniversal.html>

The former basically boils down to adding `-arch i386 -arch ppc` to your `CFLAGS` and `LDFLAGS`. It briefly mentions that for complex projects it may be necessary to perform two separate builds and then merge them using the `lipo` tool.

The latter uses the [OpenSSL](/wiki/OpenSSL) project as an example, and involves creating an [Xcode](/wiki/Xcode) project that performs two separate builds using shell script phases.

[This weblog post](http://elliotth.blogspot.com/2006/05/building-universal-binaries-from.html) notes that the basic instructions provided in Technote 2137 tend not to work for most open source projects out there.

[This excellent message](http://lists.apple.com/archives/Xcode-users/2007/Jan/msg00308.html) from Apple's Bill Bumgarner (posted in January 2007) makes the following excellent points:

-   On the method described in Technote 2137: "It will only yield a correct result in semi-rare cases. Exceedingly simple code is likely to work, but I would only trust code that has a good set of unit tests (that provide decent coverage)."
-   "However, autoconf was not designed to build universal binaries. Not by a long shot. It actually works against universal binaries in that it really wants to create a compilation environment targeted to a particular architecture."
-   "Like I said before, autoconf \*does\* support cross compilation, but many many projects effectively disable cross compilation due to the way that they use autoconf."
-   "What I have done is to convert opensource projects into proper Xcode projects using the Xcode native build system. This has the advantage of also leveraging the indexer, code sense, and the like during development."
-   "This, of course, requires some work. Typically, you need to throw together the equivalent of a config.h that uses [\#ifdef](/tags/ifdef) to switch between the various architecture variants."

Syd Polk, who also works for [Apple](/wiki/Apple) further adds in [this post](http://lists.apple.com/archives/Xcode-users/2006/Jul/msg00628.html):

> Since you general do configure-based builds in separate build directories, I recommend building for one platform in one directory, building for the other in a second directory, and then lipo'ing all of your binaries together in a third step. This is essentially how gcc and the like are built. The --exec-prefix in a properly- implemented auto-confiscated project can also help, putting all of the binaries in platform-specific directories.
>
> So, do something like:
>
>     mkdir build install
>     cd build
>     mkdir ppc
>     cd ppc
>     $(SRC_DIR)/configure --target=powerpc-apple-darwin8 -CFLAGS="- isysroot /Developer/SDKs/MacOSXSDK10.4u.sdk" -arch ppc LDFLAGS="-Wl,- syslibroot,/Developer/SDKs/MacOSX10.4u.sdk -arch ppc" - prefix=`pwd`../../install --exec-prefix=`pwd`/../../install/ppc
>     make
>     make install
>     cd ..
>     mkdir i386
>     cd i386
>     $(SRC_DIR)/configure --target=i386-apple-darwin8 -CFLAGS="-isysroot / Developer/SDKs/MacOSXSDK10.4u.sdk" -arch i386 LDFLAGS="-Wl,- syslibroot,/Developer/SDKs/MacOSX10.4u.sdk -arch i386" - prefix=`pwd`/../../install --exec-prefix=`pwd`/../../install/i386
>     make
>     make install
>     cd ..
>     cd ..
>     # Now, your installation will be in ./install, with your binaries in ./install/ppc and ./install/i386
>     lipo ./install/ppc/foo ./install/i386/foo -output ./install/foo
>
> Or some such.
>
> It's much easier to do this than to try to get "-arch ppc -arch i386" to work throughout autoconf/automake/libtool/configure/whatever.
>
> It's not free; there is work involved, and it's non-trivial. You also have to watch for host-platform assumptions. If you build on a i386 machine, and a configure test says that a certain capability exists on that machine, but the target is actually a powerpc machine, you will have problems. The configure.ac files need to be bulletproof, and need to actually work when you specify --target; otherwise you may end up with problems ranging from compilation to subtle runtime problems.

# Other documentation

-   "Compiling for Multiple CPU Architectures": <http://developer.apple.com/documentation/Porting/Conceptual/PortingUnix/compiling/chapter_4_section_3.html>


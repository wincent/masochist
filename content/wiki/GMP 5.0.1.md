---
tags: gmp wiki
---

From the official release announcement:

    A new release of the GNU Multiple Precision Arithmetic Library (GMP)
    is now available.  The new release is identified as 5.0.1.

    The new release can be downloaded from the main GNU ftp site:
     bzip2 format: ftp://ftp.gnu.org/gnu/gmp/gmp-5.0.1.tar.bz2
     gzip format:  ftp://ftp.gnu.org/gnu/gmp/gmp-5.0.1.tar.gz

    These files can also be found on a GNU mirror near you.

    The 5.0 release series contain a very large amount of new code, and
    countless improvements to existing code.  There are also a large
    number of changes between 5.0.0 and 5.0.1, to fix certain regressions.

    The amount of new code means that there might be more bugs in GMP 5.0
    than in most GMP releases in the past.  We therefore still maintain
    GMP 4.3 and advice users concerned about stability to use the latest
    release from that release series.

    While GMP bugs do happen, the absolutely most common cause for
    incorrect computations with GMP is bugs in the compiler used for
    building he library.  It cannot be said enough times: Please run "make
    check" after you've built your library.  And if "make check" stops
    with an error, do not use the compiled library.  When this happens,
    you've almost surely run into a compiler bug, not a library bug, since
    we've of course made sure the library passes its own test suite.  The
    first thing to try at this point is using a different compiler.  See
    also http://gmplib.org/.  Of the more recent GCC releases, version
    4.3.2 is known to miscompile this GMP release on all 64-bit platforms;
    this manifests itself at a check failure in tests/mpz/t-root.c.


    The GMP 5.0 release series would not have been possible without the
    very devoted work of Niels Möller and Marco Bodrato.  As usual,
    Torbjörn Granlund coordinated the development and release, and did a
    fair amount of development work himself.


    Changes between GMP version 5.0.0 and 5.0.1

     BUGS FIXED
     * Fat builds fixed.

     * Fixed crash for huge multiplies when old FFT_TABLE2 type of parameter
       selection tables' sentinel was smaller than multiplied operands.

     * The solib numbers now reflect the removal of the documented but preliminary
       mpn_bdivmod function; we correctly flag incompatibility with GMP 4.3.
       GMP 5.0.0 has this wrong, and should perhaps be uninstalled to avoid
       confusion.

     SPEEDUPS
     * Multiplication of large numbers has indirectly been sped up through
       better FFT tuning and processor recognition.  Since many operations
       depend on multiplication, there will be a general speedup.

     FEATURES
     * More Core i3, i5 an Core i7 processor models are recognised.

     * Fixes and workarounds for Mac OS quirks should make this GMP version
       build using many of the different versions of "Xcode".

     MISC
     * The amount of scratch memory needed for multiplication of huge numbers
       have been reduced substantially (but is still larger than in GMP 4.3.)

     * Likewise, the amount of scratch memory needed for division of large
       numbers have been reduced substantially.

     * The FFT tuning code of tune/tuneup.c has been completely rewritten,
       and new, large FFT parameter selection tables are provided for many
       machines.

     * Upgraded to the latest autoconf, automake, libtool.

    There is a public repository for GMP, please see the GMP web site at
    http://gmplib.org/ for more information.

    Torbjörn's work on GMP is sponsored by Stiftelsen för Strategisk
    Forskning, through CIAM at KTH, http://www.ciam.kth.se/.

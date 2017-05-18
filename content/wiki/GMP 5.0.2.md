---
tags: gmp wiki
---

From the official release announcement:

    A new release of the GNU Multiple Precision Arithmetic Library (GMP)
    is now available.  The new release is identified as 5.0.2.

    The new release can be downloaded from the main GNU ftp site:
     bzip2 format: ftp://ftp.gnu.org/gnu/gmp/gmp-5.0.2.tar.bz2
     gzip format:  ftp://ftp.gnu.org/gnu/gmp/gmp-5.0.2.tar.gz

    These files can also be found from the main GMP domain, e.g.
    ftp://ftp.gmplib.org/pub/gmp/gmp-5.0.2.tar.bz2.

    The changes between this release and the previous release are limited
    to various safe bug fixes and portability improvements.

    When we initially announced GMP 5.0, we cautioned about the large
    amount of new code in this release series.  We now feel that the code
    base is mature, and consider 5.0.2 as a stable release.  We recommend
    everyone to switch from earlier GMP releases to this release.

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


    Changes between GMP version 5.0.1 and 5.0.2

     BUGS FIXED
     * Many minor bugs related to portability fixed.

     * The support for HPPA 2.0N now works, after an assembly bug fix.

     * A test case type error has been fixed.  The symptom of this bug
       was spurious 'make check' failures.

     SPEEDUPS
     * None, except indirectly through recognition of new CPUs.

     FEATURES
     * Fat builds are now supported for 64-bit x86 processors also under Darwin.

     MISC
     * None.


    There is a public repository for GMP, please see the GMP web site at
    http://gmplib.org/ for more information.

    Torbjörn's work on GMP is sponsored by "Stiftelsen för Strategisk
    Forskning", through CIAM at KTH, http://www.ciam.kth.se/.

    -- 
    Torbjörn
    _______________________________________________
    gmp-announce mailing list
    gmp-announce@gmplib.org
    http://gmplib.org/mailman/listinfo/gmp-announce

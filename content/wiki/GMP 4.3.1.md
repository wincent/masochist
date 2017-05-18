---
tags: gmp wiki
---

From the official announcement posted to the GMP mailing list:

    A new minor release of the GNU Multiple Precision Arithmetic Library (GMP)
    is now available.  The new release is identified as 4.3.1.

     ftp://ftp.gnu.org/gnu/gmp/gmp-4.3.1.tar.bz2
     ftp://ftp.gnu.org/gnu/gmp/gmp-4.3.1.tar.gz

    These files can also be found on a GNU mirror near you.


    The GMP web site can be found at http://gmplib.org/.

    It cannot be said enough times: Please run "make check" after you've built
    your library.  And if "make check" stops with an error, do not use the
    compiled library.  If this happens, you've almost surely run into a
    compiler bug.  The first thing to try is using a different compiler.  See
    also http://gmplib.org/.  Of the more recent GCC releases, version 4.3.2 is
    known to miscompile this GMP release on all 64-bit platforms; this
    manifests itself at a check failure in tests/mpz/t-root.c.


    The 4.3 release series contain a large amount of new code, and countless
    improvements to existing code.  No past GMP release has contained more new
    code than 4.3.  Most of the new code is at the mpn level.


    Changes between GMP version 4.3.0 and 4.3.1 (for credits, please see below):

     Bugs:
     * Fixed bug in mpn_gcdext, affecting also mpz_gcdext and mpz_invert.
       The bug could cause a cofactor to have a leading zero limb, which
       could lead to crashes or miscomputation later on.
     * Fixed some minor documentation issues.

     Speedups:
     * None.

     Features:
     * Workarounds for various issues with Mac OS X's build tools.
     * Recognise more IBM "POWER" processor variants.


    In addition to Torbjorn Granlund, many people have contributed to this
    release:

     * David Harvey helped write the new x86-64 assembly code, and suggested
       the new internal division-by-special-constant algorithm.
     * Marco Bodrato and Niels Moeller helped implement the new multiply code.
     * Niels Moeller wrote the new gcd code, and the new mpz_nextprime code.
     * Niels Moeller helped write some of the new division code, and suggested
       some of the algorithms.
     * Alberto Zanoni and Marco Bodrato suggested the unbalanced multiply
       strategy.
     * Peter Montgomery suggested the new mod-by-single-limb algorithm.
     * Paul Zimmermann suggested the algorithm and helped write the new mpn
       nth root code.

     * Tommy Faernqvist and David Billinghurst helped test GMP 4.3.1.

    There is a public repository for GMP, please see the GMP home page for more
    information.

    Torbjorn's work on GMP is sponsored by Stiftelsen för Strategisk Forskning,
    through CIAM, http://www.ciam.kth.se/.

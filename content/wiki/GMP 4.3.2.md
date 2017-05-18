---
tags: gmp wiki
---

From the official release announcement:

    A new minor release of the GNU Multiple Precision Arithmetic Library (GMP)
    is now available.  The new release is identified as 4.3.2.

    The new release can be downloaded from here:

     ftp://ftp.gnu.org/gnu/gmp/gmp-4.3.2.tar.bz2
     ftp://ftp.gnu.org/gnu/gmp/gmp-4.3.2.tar.gz

    These files can also be found on a GNU mirror near you.

    GMP 4.3.2 is a stable release.  It contains no new code compared to
    previous GMP 4.3.X releases, just bug fixes.

    It cannot be said enough times: Please run "make check" after you've built
    your library.  And if "make check" stops with an error, do not use the
    compiled library.  If this happens, you've almost surely run into a
    compiler bug.  The first thing to try is using a different compiler.  See
    also http://gmplib.org/.  Of the more recent GCC releases, version 4.3.2 is
    known to miscompile this GMP release on all 64-bit platforms; this
    manifests itself at a check failure in tests/mpz/t-root.c.


    Changes between GMP version 4.3.1 and 4.3.2

     Bugs:
     * Fixed bug in mpf_eq.
     * Fixed overflow issues in mpz_set_str, mpz_inp_str, mpf_set_str, and
       mpf_get_str.
     * Avoid unbounded stack allocation for unbalanced multiplication.
     * Fixed bug in FFT multiplication.

     Speedups:
     * None, except that proper processor recognition helps affected processors.

     Features:
     * Recognise more "Core 2" processor variants.
     * The cofactors of mpz_gcdext and mpn_gcdext are now more strictly
       normalised, returning to how GMP 4.2 worked.


    Changes between GMP version 4.3.0 and 4.3.1

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
    release series:

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

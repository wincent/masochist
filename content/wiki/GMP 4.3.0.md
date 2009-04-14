---
tags: gmp
---

From the official release announcement posted to the gmp-announce mailing list:

    It is my great pleasure to announce the availability a new major release of
    the GNU Multiple Precision Arithmetic Library (GMP).  The new release is
    identified as 4.3.0.

     ftp://ftp.gnu.org/gnu/gmp/gmp-4.3.0.tar.bz2
     ftp://ftp.gnu.org/gnu/gmp/gmp-4.3.0.tar.gz

    These files can also be found on a GNU mirror near you.


    The GMP web site can be found at http://gmplib.org/.

    It cannot be said enough times: Please run "make check" after you've built
    your library.  And if "make check" stops with an error, do not use the
    compiled library.  If this happens, you've almost surely run into a
    compiler bug.  The first thing to try is using a different version of the
    compiler.  See also http://gmplib.org/.  GCC 4.3.2 is known to miscompile
    this GMP release, and many older releases do that as well.


    This release contains a large amount of new code, and countless
    improvements to existing code.  No past GMP release has contained more
    new code than this release.  Most of the new code is at the mpn level.

    Some of new mpn level code is left undocumented, since its interfaces are
    not finalised.

    Part of the new code is not used by GMP internally, or used only in some
    places.  There are several reasons for this, the main one is that more work
    is needed, but we did not want to delay the release.


    Changes since the last release (for credits, please see below):

     Bugs:
     * Fixed bug in mpz_perfect_power_p with recognition of negative perfect
       powers that can be written both as an even and odd power.
     * We might accidentally have added bugs since there is a large amount of
       new code in this release.

     Speedups:
     * Vastly improved assembly code for x86-64 processors from AMD and Intel.
     * Major improvements also for many other processor families, such as
       Alpha, PowerPC, and Itanium.
     * New sub-quadratic mpn_gcd and mpn_gcdext, as well as improved basecase
       gcd code.
     * The multiply FFT code has been slightly improved.
     * Balanced multiplication now uses 4-way Toom in addition to schoolbook,
       Karatsuba, 3-way Toom, and FFT.
     * Unbalanced multiplication has been vastly improved.
     * Improved schoolbook division by means of faster quotient approximation.
     * Several new algorithms for division and mod by single limbs, giving
       many-fold speedups.
     * Improved nth root computations.
     * The mpz_nextprime function uses sieving and is much faster.
     * Countless minor tweaks.

     Features:
     * Updated support for fat binaries for x86_32 include current processors
     * Lots of new mpn internal interfaces.  Some of them will become public
       in a future GMP release.
     * Support for the 32-bit ABI under x86-apple-darwin.
     * x86 CPU recognition code should now default better for future
       processors.
     * The experimental nails feature does not work in this release, but
       it might be re-enabled in the future.

     Misc:
     * The gmp_version variable now always contains three parts.  For this
       release, it is "4.3.0".

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


    There is now a public repository for GMP, please see the GMP home page
    for more information.

    Torbjorn's work on GMP is sponsored by CIAM, http://www.ciam.kth.se/.

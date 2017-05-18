---
tags: gmp wiki
---

From the official release announcement:

    After a long development period, and intensive work during the last few
    months by Torbjörn Granlund, Marco Bodrato, and Niels Möller, a new
    major release of the GNU Multiple Precision Arithmetic Library (GMP) is
    now available.  The new release is identified as 5.0.0.

    The new release can be downloaded from here:

     ftp://ftp.gnu.org/gnu/gmp/gmp-5.0.0.tar.bz2
     ftp://ftp.gnu.org/gnu/gmp/gmp-5.0.0.tar.gz

    These files can also be found on a GNU mirror near you.


    The 5.0.0 release contain a very large amount of new code, and
    countless improvements to existing code, please see below for the
    complete list.  No past GMP release has contained more new code than
    5.0.0.  Most of the new code is at the "mpn level", i.e., the low-level
    used by other part of the library.

    CAUTION: The amount of new code means that there might be more bugs in
    this release than in most GMP releases in the past.  We therefore
    release the stable GMP 4.3.2 at about the same time as this release.
    If you are concerned about possible bugs in the present release,
    consider using GMP 4.3.2 instead.  If you use GMP 5.0.0, please see
    http://gmplib.org/#STATUS for information about bugs.  If serious bugs
    show up, we will make sure to make new releases in a timely manner.

    It cannot be said enough times: Please run "make check" after you've
    built your library.  And if "make check" stops with an error, do not
    use the compiled library.  When this happens, you've almost surely run
    into a compiler bug, not a library bug, since we've of course made sure
    the library passes its own test suite.  The first thing to try at this
    point is using a different compiler.  See also http://gmplib.org/.  Of
    the more recent GCC releases, version 4.3.2 is known to miscompile this
    GMP release on all 64-bit platforms; this manifests itself at a check
    failure in tests/mpz/t-root.c.


    This release would not have been possible without the very devoted work
    of Niels Möller and Marco Bodrato.  As usual, Torbjörn Granlund
    coordinated the development and release, and did a fair amount of
    development work himself.

    Changes between GMP version 4.3.X and 5.0.0

     BUGS FIXED
     * None (contains the same fixes as release 4.3.2).

     SPEEDUPS
     * Multiplication has been overhauled:
       (1) Multiplication of larger same size operands has been improved with
           the addition of two new Toom functions and a new internal function
           mpn_mulmod_bnm1 (computing U * V mod (B^n-1), B being the word base.
           This latter function is used for the largest products, waiting for a
           better Schoenhage-Strassen U * V mod (B^n+1) implementation.
       (2) Likewise for squaring.
       (3) Multiplication of different size operands has been improved with the
           addition of many new Toom function, and by selecting underlying
           functions better from the main multiply functions.

     * Division and mod have been overhauled:
       (1) Plain "schoolbook" division is reimplemented using faster quotient
           approximation.
       (2) Division Q = N/D, R = N mod D where both the quotient and remainder
           are needed now runs in time O(M(log(N))).  This is an improvement of
           a factor log(log(N))
       (3) Division where just the quotient is needed is now O(M(log(Q))) on
           average.
       (4) Modulo operations using Montgomery REDC form now take time O(M(n)).
       (5) Exact division Q = N/D by means of mpz_divexact has been improved
           for all sizes, and now runs in time O(M(log(N))).

     * The function mpz_powm is now faster for all sizes.  Its complexity has
       gone from O(M(n)log(n)m) to O(M(n)m) where n is the size of the modulo
       argument and m is the size of the exponent.  It is also radically
       faster for even modulus, since it now partially factors such modulus
       and performs two smaller modexp operations, then uses CRT.

     * The internal support for multiplication yielding just the lower n limbs
       has been improved by using Mulders' algorithm.

     * Computation of inverses, both plain 1/N and 1/N mod B^n have been
       improved by using well-tuned Newton iterations, and wrap-around
       multiplication using mpn_mulmod_bnm1.

     * A new algorithm makes mpz_perfect_power_p asymptotically faster.

     * The function mpz_remove uses a much faster algorithm, is better tuned,
       and also benefits from the division improvements.

     * Intel Atom and VIA Nano specific optimisations.

     * Plus hundreds of smaller improvements and tweaks!

     FEATURES
     * New mpz function: mpz_powm_sec for side-channel quiet modexp
       computations.

     * New mpn functions: mpn_sqr, mpn_and_n, mpn_ior_n, mpn_xor_n, mpn_nand_n,
       mpn_nior_n, mpn_xnor_n, mpn_andn_n, mpn_iorn_n, mpn_com, mpn_neg,
       mpn_copyi, mpn_copyd, mpn_zero.

     * The function mpn_tdiv_qr now allows certain argument overlap.

     * Support for fat binaries for 64-bit x86 processors has been added.

     * A new type, mp_bitcnt_t for bignum bit counts, has been introduced.

     * Support for Windows64 through mingw64 has been added.

     * The cofactors of mpz_gcdext and mpn_gcdext are now more strictly
       normalised, returning to how GMP 4.2 worked.  (Note that also release
       4.3.2 has this change.)

     MISC
     * The mpn_mul function should no longer be used for squaring,
       instead use the new mpn_sqr.

     * The algorithm selection has been improved, the number of thresholds have
       more than doubled, and the tuning and use of existing thresholds have
       been improved.

     * The tune/speed program can measure many of new functions.

     * The mpn_bdivmod function has been removed.  We do not consider this an
       incompatible change, since the function was marked as preliminary.

     * The testsuite has been enhanced in various ways.


    There is a public repository for GMP, please see the GMP web site at
    http://gmplib.org/ for more information.

    Torbjörn's work on GMP is sponsored by Stiftelsen för Strategisk
    Forskning, through CIAM at KTH, http://www.ciam.kth.se/.

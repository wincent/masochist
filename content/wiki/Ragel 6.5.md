---
tags: ragel
---

# Changelog

From the official [changelog](http://www.complang.org/ragel/ChangeLog):

    Ragel 6.5 - May 18, 2009
    ========================
     -Fixed a bug in graphviz generation. Ragel crashed when using -V and -M and
      the specified machine referenced another machine that wasn't included in the
      build.
     -The name "CS" is in use on OpenSolaris, changed to vCS to ease compiling
      Ragel there.
     -Converted to automake.
     -REALLY fixed a bug that was intended to be fixed in 6.4:
         Fixed a problem reading hex numbers that have the high bit set when the
         alphabet is signed and we are on 64 bit. This was reported by _why. The
         fix was provided by Wialliam Morgan. The literal 0xffffffff was used for
         a fully set long when -1L should be used instead.
      A null patch (whitespace changes) must have gotten checked after I was
      testing with and without the critical one-line patch and I forgot to enable
      make sure it was enabled in the final checkin version.

# See also

-   Release notes: <http://www.complang.org/ragel/RELEASE_NOTES_V6>


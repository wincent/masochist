---
title: Update stripping procedure for Leopard (buildtools, 7ca1010)
tags: snippets
---

A number of changes have taken place in Leopard which allow the simplification of the stripping procedure.

Firstly, the atos tool is now capable of working with Universal Binaries (in fact this capability was added prior to Leopard) and so it is no longer necessary to keep unstripped thin binaries for debugging purposes.

Secondly, the arch names (as reported by lipo) are no longer necessarily "ppc" and "i386" like they were in Tiger. For example, on my test machine they are "ppc7400" and "i386". The ARCHS environment variable still only contains "ppc" and "i386", however, and this mismatch causes lipo to complain.

My initial solution was to iterate through VALID\_ARCHS trying them out one by one and building up a list of actually-present architectures, but in the end the simplest solution was to forget about using lipo to split things into thin binaries and just work with Universal binaries at every step; this is possible because it seems that the entire tool chain (atos, strip, GDB with dSYM etc) is now capable of working with Universal Binaries.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;

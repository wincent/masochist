---
title: Split Ragel generation into two phases (gdiff, 3e94d7d)
---

In an effort to fix the spurious rebuilds mentioned in commit 828150d I split the Ragel generation into two phases, each with a separate build rule.

The first phase operates on ".rl" files, feeding them into ragel to produce XML files with a ".ragel" extension.

The second phase takes those ".ragel" files and uses rlgen-cd to produce the Objective-C source.

The generation of dot files was removed entirely to eliminate a potential source of complication in the dependency analysis (although it should work with any number of files).

Although the spurious rebuilds persist (curiously only in Release builds, not in Debug builds) I am going to keep this commit as I think the two phase approach is more robust. I can later add in dot-file generation as a separate target if desired.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;

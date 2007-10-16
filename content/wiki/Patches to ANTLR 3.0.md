---
tags: antlr
---

This page contains patches to [ANTLR 3](/wiki/ANTLR_3) that address some issues in version 3.0 for which there seem to be no other viable workarounds, or for which the difficulty of applying the patch is less than the inconvenience of applying a workaround.

# Pending patches

## Bug in C runtime column handling

-   "Bug in C runtime column handling": <http://www.antlr.org:8080/pipermail/antlr-interest/2007-July/021949.html>

This patch should be applied to `antlr3inputstream.c`:

    166c166
    <     input->charPositionInLine = -1;
    ---
    >     input->charPositionInLine = 0;

## Filter mode

-   "Patch for filter mode" (<http://www.antlr.org:8080/pipermail/antlr-interest/2007-June/021243.html>); patch to `antlr-3.0/src/org/Antlr/codegen/CodeGenerator.java`:

<!-- -->

    301c301,302
    <                                                         grammar.getOption("filter").equals("true");
    ---
    >                                                         grammar.getOption("filter").equals("true") &&
    >                                                         ( grammar.type==Grammar.LEXER );

# Accepted patches

## Missing parentheses around predicates

-   "Bug in C output (may after other targets as well)": <http://www.antlr.org:8080/pipermail/antlr-interest/2007-July/022025.html>

This patch should be applied to the `C.stg` output template:

    2274c2283
    < andPredicates(left,right) ::= "( <left> && <right> )"
    ---
    > andPredicates(left,right) ::= "( (<left>) && (<right>) )"

Not sure when this one was applied but it made it into ANTLR 3.0.1.

## [GCC](/wiki/GCC) [lexer](/wiki/lexer) warnings [C target](/wiki/C_target)

-   "GCC lexer warnings with C target" (<http://www.antlr.org:8080/pipermail/antlr-interest/2007-June/021330.html>); patch to `antlr-3.0/src/org/antlr/codegen/templates/C/C.stg`:

<!-- -->

    714c714
    < <rules:{r | static <headerReturnType(ruleDescriptor=r.ruleDescriptor)>        <if(!r.ruleDescriptor.isSynPred)>m<endif><r.ruleDescriptor.name>    (p<name> ctx<if(r.ruleDescriptor.parameterScope)>, <endif><r.ruleDescriptor.parameterScope:parameterScope(scope=it)>);}; separator="\n";>
    ---
    > <rules:{r | static <if(!r.ruleDescriptor.isSynPred)>ANTLR3_INLINE<endif> <headerReturnType(ruleDescriptor=r.ruleDescriptor)>  <if(!r.ruleDescriptor.isSynPred)>m<endif><r.ruleDescriptor.name>    (p<name> ctx<if(r.ruleDescriptor.parameterScope)>, <endif><r.ruleDescriptor.parameterScope:parameterScope(scope=it)>);}; separator="\n";>

-   Applied in [revision 3831](http://fisheye2.cenqua.com/changelog/antlr/src/org/antlr/codegen/templates/C?cs=3831).

# Rejected patches

-   None so far.

# See also

-   [Rebuilding ANTLR](/wiki/Rebuilding_ANTLR)
-   [Patches to ANTLR 3.0.1](/wiki/Patches_to_ANTLR_3.0.1)


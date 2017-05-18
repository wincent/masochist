---
tags: antlr wiki
---

The 11 May 2006 entry from [this page](http://www.antlr.org/blog/antlr3/lookahead.tml) describes one way of getting [PEG](/wiki/PEG)-like predicates in [ANTLR](/wiki/ANTLR).

# [PEG](/wiki/PEG) "not" predicates

In a [PEG](/wiki/PEG) a "not" predicate is used to indicate *match **X** as long as it is not followed by **Y***. A [PEG](/wiki/PEG)-like syntax for this would involve using `!` as a prefix operator:

    // match any "bar" not followed by "baz"
    foo
      : bar !baz
      ;

Apparently, [ANTLR](/wiki/ANTLR) can achieve the equivalent effect using a combination of syntactic and semantic predicates, although it is much less readable than the [PEG](/wiki/PEG) syntax (I say "apparently" because I haven't actually tested this):

    foo
      : (bar ((baz)=>{false}? | ))=> bar
      ;

Paraphrased, this means:

-   At the outermost level we will match **bar** only if the [syntactic predicate](/wiki/syntactic_predicate) succeeds; the syntactic predicate consists of:
    -   First trying to match **bar**
    -   Then try to match **baz** using a nested syntactic predicate
        -   If the nested predicate succeeds (not what we wanted), must fail; we do that using a [validating semantic predicate](/wiki/validating_semantic_predicate) which always evaluates to `false`
        -   If the nested predicate fails (which is what we wanted), fall through to the alternative subrule, which is an empty match (the `|` followed by nothing) and will always succeed

[Terence Parr](/wiki/Terence_Parr) notes the following about "not" predicates:

> They are really only useful in the lexer and seemingly only for single elements (all examples so far have been "not semicolon" or something similar). In ANTLR, you say `~';'` so I don't think we need them.

# [PEG](/wiki/PEG) "and" predicates

In a [PEG](/wiki/PEG) an "and" predicate is used to indicate *match **X** as long as it is followed by **Y***. Although the **Y** must be present it is not actually included in the match. A standard [PEG](/wiki/PEG) notation for this would involve using `&` as a prefix operator:

    // match any "bar" followed by "baz" (the "baz" is not consumed)
    foo
      : bar &baz
      ;

Using a similar trick to that already shown above, [ANTLR](/wiki/ANTLR) can achieve the same effect using a syntactic predicate; this version is considerably simpler:

    foo
      : (bar baz)=> bar
      ;

## Evaluation

It seems that this technique cannot be used for the reasons discussed in this mailing list post:

-   <http://www.antlr.org:8080/pipermail/antlr-interest/2007-July/021958.html>

In the thread [Jim Idle](/wiki/Jim_Idle) suggests the following workaround for the [C target](/wiki/C_target):

    foo
       : bar { MARK(); } baz { REWINDLAST(); }
       ;

# See also

-   [ANTLR predicates](/wiki/ANTLR_predicates)

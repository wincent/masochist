---
tags: antlr wiki
---

In order to fully understand [ANTLR](/wiki/ANTLR) you need to master the following topics. Total mastery of all topics is not always necessary to build a working parser, but without it is very easy to build a non-working one, or fail to even build one at all.

-   How to write rules using [ANTLR](/wiki/ANTLR)'s extended [BNF](/wiki/BNF) notation (by far the easiest topic)
-   What are the differences between [lexers](/wiki/lexers), [parsers](/wiki/parsers) and [tree parsers](/wiki/tree_parsers)
-   How [ANTLR](/wiki/ANTLR)-generated recognizers work at runtime; and as sub-topics:
    -   How [ANTLR](/wiki/ANTLR)-generated recognizers use prediction
    -   The role of [predicates](/wiki/predicates) (these seem simple at first but predicates can wind up in other rules' decision making logic and so the inter-rule interactions can be very, very complex)
    -   "First" and "follow" sets
-   How [ANTLR](/wiki/ANTLR) performs analysis of a grammar

# See also

-   [ANTLR bird's eye view](/wiki/ANTLR_bird%27s_eye_view)

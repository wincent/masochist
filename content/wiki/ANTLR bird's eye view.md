---
tags: antlr wiki
---

Learning [ANTLR](/wiki/ANTLR) has been one of the hardest programming challenges I've had to face, even with the help of the [ANTLR book](/wiki/ANTLR_book). The problem lies in the fact that [ANTLR](/wiki/ANTLR) offers a deceptively simple interface, but this is *only in appearance*. The reality is that under the surface [ANTLR](/wiki/ANTLR) is an incredibly complex beast. A beginner attempting even extremely simple tasks will face many failures and be frustrated to find that they don't work. Even the most basic goals cannot be achieved without a detailed understanding of what [ANTLR](/wiki/ANTLR) is doing under the covers.

The reason for this is the following:

-   It is very easy to write a grammar that *describes* a language; or to put it another way, that specifies how to *generate* valid sentences in a language
-   It is not so easy to write a parser generator that can take such a grammar and turn it into a recognizer; that is, something that knows how to *recognize* valid sentences in a language.

So, [ANTLR](/wiki/ANTLR) provides you with a simple yet powerful language for writing descriptive grammars (that specify how to generate valid sentences); but on the other hand, [ANTLR](/wiki/ANTLR) cannot necessarily turn such a grammar into a parser capable of recognizing valid sentences. So this leads us to two classes of grammars: those that describe how to generate valid sentences, and those that describe how to recognize them. In an ideal world both would be exactly the same but in the real world things are different; in order to write grammars that [ANTLR](/wiki/ANTLR) can turn into functioning recognizers you need to have a detailed understanding of exactly what [ANTLR](/wiki/ANTLR) is, how it works, and what kind of recognizers it generates.

Let's illustrate by way of a simple example before moving forward to the details. Consider a simple language that consists of comma-separated lists:

    list
      : list ',' ITEM
      | ITEM
      ;

    ITEM
      : 'a'..'z'+
      ;

Looking at these rules it is very easy to see how to generate valid `list` sentences; "foo,bar,baz" is just one example of a valid sentence. But [ANTLR](/wiki/ANTLR) can't build a working parser from this grammar because the `list` is left-recursive (because [ANTLR](/wiki/ANTLR) generates top-down recursive descent parsers). [ANTLR](/wiki/ANTLR) *can* recognize list-like sentences; it just requires that the grammar be written in such a way that it doesn't contain left-recursion. For example, we can use repetition instead:

    list
      : ITEM (',' ITEM)*
      ;

This is an extremely simple example of how a straightforward grammar can easily specify how to generate sentences, but how even so, the grammar can be totally useless with [ANTLR](/wiki/ANTLR), and that knowledge about how [ANTLR](/wiki/ANTLR) works helps you to avoid grammars which won't work with [ANTLR](/wiki/ANTLR) and create grammars which will. In practice the kinds of input that [ANTLR](/wiki/ANTLR) cannot process tend to be much, much more subtle than this obvious example of left-recursion.

This article is my attempt at providing a high-level overview of how [ANTLR](/wiki/ANTLR) really works, with the goal of summarizing the knowledge needed to understand the countless pitfalls and avoid them.

# Intent

[Terence Parr](/wiki/Terence_Parr) has explained that he wrote [ANTLR](/wiki/ANTLR) because he wanted a parser generator that would produce readable, understandable parsers *that would be just like what he would write himself if he had to do it by hand*. Although this may be true you can *forget right now whatever you think this might mean*: don't make assumptions about the code that [ANTLR](/wiki/ANTLR) generates; although it might be what Terence would write that doesn't necessarily mean that it is what you would write.

# What it generates

[ANTLR](/wiki/ANTLR) generates top-down, recursive-descent, LL recognizers. Key points:

-   The LL nature of the parser means that you can't do left-recursion; this can be worked around but the key point is that you can forget about direct left-recursion.
-   The generated recognizers are *predictive*: this means that they use lookahead to examine the input and once they have decided what is predicted by that input the attempt to consume it; an exception is raised if the input does not fulfill the prediction.
-   The prediction is done use a [DFA](/wiki/DFA) which means that it can recognize regular language constructs (repetition is fine but not recursion).
-   You can still parse recursive languages, but in cases where the *prediction* itself requires recursion you have to provide some help in the form of [predicates](/wiki/predicates).
-   The prediction is done in the name of efficiency (to avoid trying and backtracking); but you can do backtracking on an as-needs basis.

# See also

-   [ANTLR lexers in depth](/wiki/ANTLR_lexers_in_depth)
-   [ANTLR prediction](/wiki/ANTLR_prediction)

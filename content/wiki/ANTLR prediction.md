---
tags: antlr wiki
---

[ANTLR](/wiki/ANTLR)'s prediction mechanisms can make it behave in surprising ways if you don't know what it's doing under the covers.

# A simple example

In my [wikitext](/wiki/wikitext) parser I was trying to tokenize [URIs](/wiki/URIs) in such a way that input text like:

    http://example.com/

would be recognized as a URI, whereas:

    http://example.com/.

would be recognized as a URI followed by a (non-URI) period. I only want the URI portion to be turned into a hyperlink, not the terminating period (which most likely serves to indicate the end of a sentence). This is tricky because the period can be part of a URI in one place (in the middle of a URI), and excluded from it in another (at the end of the URI).

We describe this using the concepts of `URI_CHARS` (legal URI characters) and `SPECIAL_URI_CHARS` (characters such as the period which may form part of a URI if and only if they are followed by `URI_CHARS`).

This would be fairly easy to parse using a [Perl](/wiki/Perl)-style [regular expression](/wiki/regular_expression); something like:

    /http:\/\/[a-zA-Z\/]+(\.[a-zA-Z\/]+)*/

ANTLR's prediction mechanisms make it slightly more complicated than just "translating" the regular expression into ANTLR syntax.

# Initial (broken) solution

    URI : (HTTP | FTP | SVN) URI_CHARS (SPECIAL_URI_CHARS URI_CHARS)*;

This rule produces the following results for the shown inputs:

    # correctly recognized as URI:
    http://example.com/

    # not recognized at all
    http://example.com/.

Note that in the latter case it doesn't merely fail to exclude the trailing period from the match; it actually doesn't match anything at all.

To understand why this is so we must look at the generated code. Looking at the generated `mURI` function we see that ANTLR's approach is the following:

1.  Based on lookahead of `h`, `f` or `s`, predict `HTTP`, `FTP` or `SVN` subrules.
2.  Match `URI_CHARS`
3.  Look ahead for `SPECIAL_URI_CHARS`
4.  On seeing `SPECIAL_URI_CHARS`, predict `SPECIAL_URI_CHARS` followed by `URI_CHARS`

So you can see how any time we see `SPECIAL_URI_CHARS` ANTLR will expect to find `URI_CHARS` afterwards, and upon failure will jump out of the `mURI` function using `return` (here I am using the [C target](/wiki/C_target)), failing to match anything at all.

Unlike the regular expression version, there is no backtracking or fallback. The `*` operator here behaves in what may appear to be a counter-intuitive fashion: rather than settling for "zero or more matches", if any match of the subrule fails the prediction then the entire `URI` rule will fail. This is true even in a filtering (backtracking) [lexer](/wiki/lexer) as is the case in the example shown here.

To understand why this is so you need to understand the ANTLR philosophy, which is to be as fast and efficient as possible, principally via prediction. As soon as a possible path can be predicted, [ANTLR](/wiki/ANTLR) assumes that it *will* succeed; and in this case failure causes the entire rule to fail. The approach is clearly visible when you examine the generated code; all ANTLR functions are divided into two parts: a prediction part and then a matching part that races ahead expecting to succeed based on the prediction. This works well for highly-structured, strictly defined languages like [C](/wiki/C) but it doesn't work so well for free-form "pseudo-languages" like [wikitext](/wiki/wikitext) markup.

# Working solution

Knowing how ANTLR works we can now implement a solution, which here is to use a [syntactic predicate](/wiki/syntactic_predicate):

    URI : (HTTP | FTP | SVN) URI_CHARS ((SPECIAL_URI_CHARS URI_CHARS)=> (SPECIAL_URI_CHARS URI_CHARS ))*;

This basically tells ANTLR to only try matching the `SPECIAL_URI_CHARS URI_CHARS` subrule if it is guaranteed to succeed. If you look at the generated code you will see that ANTLR has added a syntactic predicate to the prediction part of the `mURI` function. As such it will now behave as desired.

Note that syntactic predicates only make sense in rules for which there are multiple alternatives; the predicate helps ANTLR decide which path to take. If you try using a syntactic predicate in a rule for which there is only one alternative then ANTLR will ignore it. It might appear in this case that there are no explicit alternatives and so the predicate will have no effect, but there is an implicit alternative thanks to the `*` operator: the decision ANTLR has to make is whether to match another `SPECIAL_URI_CHARS URI_CHARS` pair, so there is in fact a choice between two options (to match and not to match).

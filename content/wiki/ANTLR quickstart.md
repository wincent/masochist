---
tags: antlr wiki
---

Here are some "quickstart" notes made while learning [ANTLR](/wiki/ANTLR). Mostly stuff that I needed to know coming from experience with [Walrus](/wiki/Walrus) (which uses a custom [Ruby](/wiki/Ruby) [DSL](/wiki/DSL) to define [Parsing Expression Grammars](/wiki/Parsing_Expression_Grammars)), and [Ragel](/wiki/Ragel) (which creates state machines).

# Installation

    wget http://www.antlr.org/download/antlr-3.0b7.tar.gz
    sudo mv antlr-3.0b7.tar.gz /usr/local
    cd /usr/local
    sudo tar xzvf antlr-3.0b7.tar.gz
    sudo rm antlr-3.0b7.tar.gz
    sudo ln -s antlr-3.0b7 antlr

To use the [C language target](/wiki/C_language_target) some additional set-up is required (see "[C language target (ANTLR)](/wiki/C_language_target_%28ANTLR%29)").

# Overview

-   Grammar name must match the file name (case sensitive):

<!-- -->

    grammar Walrus; /* file must be named Walrus.g */

# Lexing and parsing

The lexer and the parser are not unified even though they are (often) declared in the same file; the lexing phase is completely separate from the parsing phase.

This was actually fairly difficult for me to get a grip on because I came from working with [Walrus](/wiki/Walrus), where the parser and the lexer are effectively merged into a single step.

To illustrate the difficulty, consider how the characters `hello` might be an identifier, but if found inside a string literal (for example, `"foo hello bar"` they are just part of the literal. Now, it is possible to make complex lexer rules which recognize things like string literals, and by carefully ordering them ensure that tokens are correctly identified.

But the lexer produces a linear (one-dimensional) stream of tokens and you want your parser to produce a tree. To go further with our example, you don't want a single "string literal" token because in reality a string literal may possess a tree-like structure; for example, `"foo\n#{bar}"` might be broken down to:

-   String literal
    -   Raw text
    -   Escape sequence
    -   Interpolated variable (which may itself have a tree-like structure

Or at the very least as more than one token, some of which may not be passed on to the parser (the delimiters, for instance):

1.  String literal delimiter (`"`)
2.  Raw text (`foo`)
3.  Escape sequence (`\n`)
4.  Interpolated variable start delimiter (`#{`)
5.  Interpolated variable (`bar`)
6.  Interpolated variable end delimiter (`}`)
7.  String literal delimiter (`"`)

So in order to recognize this kind of structure, the lexer ends up taking on parser-like (structure recognition) responsibilities but only in order to produce linear stream of tokens. The parser then has to do the actual transformation into a tree representation, and that starts to sound like duplication of effort.

The answer may be to use syntactic predicates (see <http://www.doc.ic.ac.uk/lab/secondyear/Antlr/lexer.html> for a [ANTLR](/wiki/ANTLR) version 2 discussion on the topic). These allow the lexer to have some notion of scope (ie. where it is in the structure of the input) and hence whether `foo` should be classified as an identifier, or raw text, or something else. The alternative is to have the lexer do less (identify few tokens) and let most of this stuff be done in the parser.

## Lexer rules

-   Recognize terminal symbols (tokens which describe the input linearly).
-   Start with a capital letter:.

<!-- -->

    IDENTIFIER : ('a'..'z' | '_')('a'..'z' | 'A'..'Z' | '0'..'9' | '_')* ;

-   Operate at the character level: the input stream is a stream of characters.
-   Do not contain whitespace: that is, `'a' 'b'` matches `ab`.
-   May refer to other lexer rules:

<!-- -->

    INSTANCE_VARIABLE : '@' IDENTIFIER ;

-   May *not* refer to parser rules.
-   Precedence is determined by order in which they appear:

<!-- -->

    FOO : 'a'..'z'+; // FOO gobbles up everything because it appears first
    BAR : 'a'..'f'+; // BAR can never match anything
    // note that ANTLR will generate a warning here: "The following token definitions are unreachable: BAR"

    // change the order and ANTLR will not longer warn
    BAR : 'a'..'f'+;
    FOO : 'a'..'z'+;

    // note that ordering is irrelevant in a case like this
    FOO : 'aaaa'; // ANTLR will greedily match this if it can
    BAR : 'aaa'; // but can still match this if only three "a" characters present

-   The `fragment` keyword marks rules which are included only by reference in other rules:

<!-- -->

    fragment FOO = '0'..'9'+;
    NUM = '(' FOO ')'; # produces a single token

    # the above is equivalent to writing
    NUM = '(' '0'..'9'+ ')';

The method for recognizing `FOO` will still exist separately in the lexer, but it will only be called from within the `NUM` rule.

-   Can override the textual content of an emitted token using the `setText()` method (this for the Java target, I don't yet know the equivalent technique in the C target); the related `!` operator which was available in [ANTLR](/wiki/ANTLR) 2 does not appear to be available in version 3 (see <http://www.antlr.org:8080/pipermail/antlr-interest/2007-April/020280.html>):

<!-- -->

    fragment ESCAPED_HASH : BACKSLASH! HASH { setText("#"); };

-   As a convenience, you can implicitly define lexer rules in the parser:

<!-- -->

    # this is a parser rule with a literal string in it
    # the literal string corresponds to an implicitly-defined "anonymous" lexer rule
    foo: bar '+' baz;

## Parser rules

-   Recognize non-terminal symbols (describes the tree structure of the input).
-   May refer to lexer rules:

<!-- -->

    single_line_comment : '##' ~(NEWLINE | EOF)* (NEWLINE | EOF) ;

-   May refer to other parser rules:

<!-- -->

    comment	: 	single_line_comment
    	|	multi_line_comment ;

-   The `EOF` token may be used to match the end-of-file.
-   A dot is a wildcard for "any token", *not* "any character"

<!-- -->

    multi_line_comment
    	:	'#*' (options { greedy = false; } : .)* '*#'
    	;

-   Operate at the token level: the input stream is a stream of tokens.
-   Do expect their input tokens to be separated (typically by whitespace): that is, `'a' 'b'` matches `a b`.
-   You can define "rule local" temporary variables to refer to elements in the rule:

<!-- -->

    // here the result of a subrule expression is assigned to "e";
    // it can then be referenced in actions using "$e": 
    escape_sequence
        : e=(ESCAPED_HASH | ESCAPED_DOLLAR | ESCAPED_BACKSLASH)
        { System.out.println("PARSER: escape sequence " + $e.text); }

## Using the `filter` option

    options {
      filter = true;
    }

`filter` only applies to lexers. Using it effectively precludes you from using a parser at the same time (as [Terence Parr](/wiki/Terence_Parr) [explains here](http://www.antlr.org:8080/pipermail/antlr-interest/2007-May/020942.html)). I've tried using a parser and a lexer at the same time in this case; the parser "works" and calls the lexer, but `@after` and action blocks are not executed, making it next to impossible to created a useful parser.

# Using the C language target

The [C](/wiki/C) language target doesn't yet seem to be documented and there are no examples, so I've made some notes on its use that I've cobbled together from experimenting and reading mailing list posts:

-   [C language target (ANTLR)](/wiki/C_language_target_%28ANTLR%29)

# Island parsers

[An alternative to island parsers using gated semantic predicates](http://svn.perl.org/viewcvs/parrot/trunk/languages/plumhead/src/antlr3/Plumhead.g?view=markup).

# See also

-   An excellent tutorial, unfortunately written for [ANTLR](/wiki/ANTLR) 2: <http://javadude.com/articles/antlrtut/>
-   [ANTLR command line options](/wiki/ANTLR_command_line_options)
-   Incredibly useful [ANTLR](/wiki/ANTLR)-centric glossary covering a large number of terms and concepts related to [lexing](/wiki/lexing) and [parsing](/wiki/parsing): <http://www.antlr.org/doc/glossary.html>

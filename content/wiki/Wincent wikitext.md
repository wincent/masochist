---
tags: wiki
---

[Wincent wikitext](/wiki/Wincent_wikitext) is a specific flavor of [wikitext](/wiki/wikitext) based on the version implemented in the popular [MediaWiki](/wiki/MediaWiki) [wiki](/wiki/wiki) software.

# Rationale

Over the years I've had to edit text in a number of [markup](/wiki/markup) formats, including [Markdown](/wiki/Markdown) (often), [Textile](/wiki/Textile) (sometimes) and [HTML](/wiki/HTML) itself (often). Upon installing [MediaWiki](/wiki/MediaWiki) and working with it I gradually came to warm to its [wikitext](/wiki/wikitext) [markup](/wiki/markup) and it is now my preferred markup format when the target output is [HTML](/wiki/HTML).

So when working on a [Rails](/wiki/Rails) rewrite of my website I decided that [wikitext](/wiki/wikitext) would be *the* markup format used ubiquitously throughout. As it would be heavily used I wanted it to be fast, so I wanted a [C](/wiki/C) solution rather than a pure [Ruby](/wiki/Ruby) one.

So I started working on an [ANTLR](/wiki/ANTLR) grammar for [parsing](/wiki/parsing) [wikitext](/wiki/wikitext) and transforming it to [HTML](/wiki/HTML). This page contains notes on the grammar design.

# Grammar

## Overall characteristics

-   **The input markup should be extremely simple and clean**: As a result I plan to support only a subset of the [MediaWiki](/wiki/MediaWiki) [markup](/wiki/markup); this means omitting complex features like tables and supporting a single syntax for each desired output style (for example, '''apostrophes around text''' to indicate strong) rather than multiple alternative syntaxes (such as &lt;strong&gt;HTML tags&lt;/strong&gt; for the same effect).
-   **The parser should be extremely tolerant of bad input**: Like [MediaWiki](/wiki/MediaWiki), the parser should never bail upon receiving bad input and it should do an excellent job of cleaning up illegal tags, invalid nesting and the like.
-   **The parser should handle [Unicode](/wiki/Unicode)**.
-   **The parser should be fast**: this was why I decided to use the [ANTLR](/wiki/ANTLR) [C target](/wiki/C_target), combined with a [Ruby](/wiki/Ruby) extension written in [C](/wiki/C).

## Nesting

As the target output of the parser is [HTML](/wiki/HTML) the [HTML](/wiki/HTML) nesting rules apply to the input source as well. There are two basic classes of elements:

-   **Block-level elements**: these are elements which can appear in the outermost scope of the input; these include &lt;pre&gt;, &lt;blockquote&gt;, &lt;p&gt;, &lt;ol&gt;, &lt;ul&gt; and the headings (&lt;h1&gt; through &lt;h6&gt;).
-   **Inline elements**: these elements may online appear within blocks; they include &lt;em&gt;, &lt;strong&gt; and &lt;tt&gt; spans, links, [entities](/wiki/entities) and regular characters.

Some nesting of block-level elements is permitted:

-   *Any* block-level element may be nested inside &lt;blockquote&gt;, including other &lt;blockquote&gt; elements.
-   List block-level elements (&lt;ol&gt; and &lt;ul&gt;) may be nested inside list items (&lt;li&gt;); this allows nested, multi-level lists.

All other nesting of block-level elements is disallowed.

In general, nesting of inline elements is allowed provided the same element is not nested twice. For example:

-   An &lt;em&gt; span may be nested inside a &lt;strong&gt; span
-   A &lt;strong&gt; span may be nested inside an &lt;em&gt; span
-   An &lt;em&gt; span may *not* be nested inside another &lt;em&gt; span, directly or indirectly; neither may a &lt;strong&gt; span be nested inside another &lt;strong&gt; span

This complex, context-sensitive nesting requirement made it prohibitively difficult to produce an [ANTLR](/wiki/ANTLR) [parser](/wiki/parser), especially when combined with the need for the parser to accept and reasonably handle even the most malformed input. So I decided to use a filtering [ANTLR](/wiki/ANTLR) [lexer](/wiki/lexer) to tokenize the input and process it with a hand-written [parser](/wiki/parser).

For a detailed list of supported tags and their nesting restrictions, see "[Wincent wikitext nesting](/wiki/Wincent_wikitext_nesting)".

## Error-handling strategy

If we could be sure that the input were always perfectly formed the translator could perform a fairly simple sweep over the tokens in the input stream, substituting appropriate [HTML](/wiki/HTML) tags for each special piece of markup encountered.

Such a parser would most likely produce invalid [HTML](/wiki/HTML) when fed bad input, so we need an appropriate error-handling strategy. Our error handling strategy must balance the following concerns:

-   **Speed**: the strategy shouldn't be so involved as to be slow
-   **Complexity**: the strategy shouldn't be so complex that maintenance of the translator becomes difficult
-   **Correctness**: the strategy should produce correct [HTML](/wiki/HTML)
-   **Cleverness**: the strategy should try to "guess" what the input author intended and "correct" the input to match it

I chose the simplest possible strategy, valuing speed and correctness while keeping complexity down, and pretty much ignoring the "cleverness" criterion. The basic strategy is to emit [HTML](/wiki/HTML) tags upon seeing markup symbols, and upon seeing an invalid or unexpected symbol either automatically inserting any missing HTML tags required for correctness, or outputting the unexpected symbol in plain text (thus providing feedback to the author).

In this example an unexpected tag in the input is output literally using [HTML entities](/wiki/HTML_entities):

    # input
    this tag is </em> unexpected!
     
    # output
    this tag is &lt;/em&gt; unexpected!

This strategy results in highly visible feedback to the author that the markup is invalid and needs to be corrected.

In this example a missing closing tag is automatically inserted:

    # input
    == My great heading without an end marker

    # output
    <h2>My great heading without an end marker</h2>

This is a "harmless" error and so is silently corrected.

## Parser design

As the grammar involves recursion (nested structures) a regular expression or [DFA](/wiki/DFA)-based parser is insufficient to process the token stream. The context-sensitive nature of the stream requires that the parser have some sort of notion of what it has "seen" before in order to decide what to do. One way of providing it with this memory is to explicitly record pertinent "seen" tokens on a stack. Another way is to use recursive function calls (where the recursion itself embodies the stack).

Normally this later way is the most obvious and easy (and it is indeed how recursive descent parsers work) but given that I am using the [C target](/wiki/C_target) I don't have the luxury of such [object-oriented](/wiki/object-oriented) niceties as instance variables and the like and it is actually fairly tricky to come up with a clean recursive design. Also, as I want to accept any input, no matter how invalid, I don't really want a backtracking design (which would be slower anyway); I just want to transform input into reasonable, valid [HTML](/wiki/HTML) as I see it. In any case, without exceptions (which [C](/wiki/C) doesn't have) handling backtracking starts to get quite verbose. By not having backtracking I avoid the complexity of doing it in [C](/wiki/C) and the slowness of doing it in another language which does support exceptions.

So the solution I am currently working on is based on a giant `switch` statement that takes different actions depending on the current token received from the lexer. I manually manage a scope stack indicating what the current nesting context is, and I use that to inform my decisions as to what kind of input to accept and what kind needs to be transformed (corrected). This can get a little complex for some parts of the language (mixed and nested lists, for example), but it seems like it is doable this way.

I did experiment with a recursive design but I wasn't convinced by it; too much information had to be passed up and down the the call stack. For example: given a method to match `em` spans and another to match `strong` spans, I had to pass information about "already seen" tokens into each function because as stated elsewhere, either span can contain the other but it may not contain itself indirectly. That is, the following syntax is illegal:

    <em>outer <strong>inner <em>innermost</em> ... </strong> ... </em>

The `strong` method only knows that `em` is disallowed inside its span if the `em` method tells it so. The need to pass all this scope information along with the function calls lead me to conclude that I may as well just use the gigantic `switch` statement anyway. Time will tell if this is the best approach.

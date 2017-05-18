---
tags: wiki
---

# Overview

## Block-level elements

-   `BLOCKQUOTE`
-   `PRE`
-   `OL`
-   `UL`
-   `LI`
-   `H1`, `H2`, `H3`, `H4`, `H5`, `H6`
-   `P`

In general, block elements may appear in the outermost scope, with some special considerations to note:

-   Any block-level element may be nested inside `BLOCKQUOTE`, including other `BLOCKQUOTE` elements; the exception to this rule is `LI`, which may only be nesetd inside list elements (`OL` and `LI`)
-   Nested lists can be created by nesting `OL` and `LI` inside an `LI`
-   All other nesting of block-level elements is disallowed
-   The [HTML](/wiki/HTML) specification states that heading elements (`H1`, `H2`, `H3`, `H4`, `H5`, `H6`) should only appear in order in the document: that is, `H2` may only appear after `H1` and so on; at least in the initial implementation I have no plans on enforcing this restriction

## Inline elements

-   `NO_WIKI`
-   `EM`
-   `STRONG`
-   `ENTITY`
-   `PRINTABLE`
-   `DEFAULT`

Inline elements always and only appear nested inside block-level elements.

Inline elements are intended for use within a single-line span, so a `CRLF` token automatically closes any open span-level tags (for parity with [MediaWiki](/wiki/MediaWiki)); the exception to this rule is the `NO_WIKI` span where everything including `CRLF` tokens loses its special significance. That is, even though `NO_WIKI` is a span-level element, it is not automatically closed upon seeing a `CRLF` token; this again is for parity with the established [MediaWiki](/wiki/MediaWiki) behaviour.

As noted on the [Wincent wikitext](/wiki/Wincent_wikitext) page, nesting of inline elements inside one another is allowed provided that the same element is not nested inside itself (either directly or indirectly). Block-level elements may never be nested inside inline elements.

## Entities

`ENTITY` tokens always have special meaning, even inside `PRE` blocks and `NOWIKI` spans. That is, a string like `&copy;` inside a `PRE` or `NOWIKI` will be passed through literally into the [HTML](/wiki/HTML) output as `&copy;` rather than being converted to `&amp;copy;`.

# Details

## Block-level elements

### `BLOCKQUOTE`

-   May be nested inside:
    -   Outermost (root) scope
    -   `BLOCKQUOTE` (recursive nesting)
-   Elements that can be nested inside:
    -   `BLOCKQUOTE` (recursive nesting)
    -   `PRE`
    -   `OL`
    -   `UL`
    -   `H1`, `H2`, `H3`, `H4`, `H5`, `H6`
    -   `P`

**Note**: Although `BLOCKQUOTE` sections are introduced using the relatively common `>` character, the [lexer](/wiki/lexer) screens out false positives by only emitting `BLOCKQUOTE` tokens when they appear in the first column of the input *or* are immediately preceded by other `BLOCKQUOTE` token(s).

### `PRE`

-   May be nested inside:
    -   Outermost (root) scope
    -   `BLOCKQUOTE`
-   Elements that can be nested inside:
    -   Any (but note that all elements lose their special meaning inside a `PRE`)

**Note**: Although `PRE` sections are introduced using the relatively common space character, the [lexer](/wiki/lexer) screens out false positives by only emitting `PRE` tokens when they appear in the first column of the input *or* are immediately preceded by one or more `BLOCKQUOTE` tokens.

### `OL`

-   May be nested inside:
    -   Outermost (root) scope
    -   `BLOCKQUOTE`
    -   `LI`
-   Elements that can be nested inside:
    -   `OL` (indirect recursive nesting)
    -   `UL`

**Note**: Although `OL` sections are introduced using the relatively common `#` character, the [lexer](/wiki/lexer) screens out false positives by only emitting `OL` tokens when they appear in the first column of the input *or* are immediately preceded by `OL`, `UL` or `BLOCKQUOTE` token(s).

### `UL`

-   May be nested inside:
    -   Outermost (root) scope
    -   `BLOCKQUOTE`
    -   `LI`
-   Elements that can be nested inside:
    -   `OL`
    -   `UL` (indirect recursive nesting)

**Note**: Although `UL` sections are introduced using the relatively common `*` character, the [lexer](/wiki/lexer) screens out false positives by only emitting `UL` tokens when they appear in the first column of the input *or* are immediately preceded by `OL`, `UL` or `BLOCKQUOTE` token(s).

### `LI`

-   May be nested inside:
    -   `OL`
    -   `UL`
-   Elements that can be nested inside:
    -   Inline elements only

**Note**: `LI` is an imaginary token and is never actually emitted by the lexer.

### `H1`, `H2`, `H3`, `H4`, `H5`, `H6`

-   May be nested inside:
    -   Outermost (root) scope
    -   `BLOCKQUOTE` (recursive nesting)
-   Elements that can be nested inside:
    -   Inline elements only

**Note**: The lexer again avoids false positives by only emitting heading start tokens when they appear in the first column of the input, or are immediately preceded by a `BLOCKQUOTE` token. Similarly, heading end tokens are only emitted when they appear as the last non-whitespace symbol on a given line; this allows inputs such as the following to be correctly parsed as an &lt;h2&gt; heading containing the text `Does foo == bar?`:

    == Does foo == bar? ==

### `P`

-   May be nested inside:
    -   Outermost (root) scope
    -   `BLOCKQUOTE` (recursive nesting)
-   Elements that can be nested inside:
    -   Inline elements only

**Note**: `P` is an imaginary token and is never actually emitted by the lexer.

## Inline elements

### `NO_WIKI`

-   May be nested inside:
    -   Any block-level element
    -   Any inline element except for `NO_WIKI` itself (directly or indirectly)
-   Elements that can be nested inside:
    -   Any (but note that all elements lose their special meaning inside a `NO_WIKI`)

### `EM`

-   May be nested inside:
    -   Any block-level element
    -   Any inline element except for `EM` itself (directly or indirectly)
-   Elements that can be nested inside:
    -   Any inline element except for `EM` itself (directly or indirectly)

### `STRONG`

-   May be nested inside:
    -   Any block-level element
    -   Any inline element except for `STRONG` itself (directly or indirectly)
-   Elements that can be nested inside:
    -   Any inline element except for `STRONG` itself (directly or indirectly)

### `ENTITY`

-   May be nested inside:
    -   Any block-level element
    -   Any inline element
-   Elements that can be nested inside:
    -   Not applicable (`ENTITY` is an atomic element, not a span)

### `PRINTABLE`

-   May be nested inside:
    -   Any block-level element
    -   Any inline element
-   Elements that can be nested inside:
    -   Not applicable (`PRINTABLE` is an atomic element, not a span)

### `DEFAULT`

-   May be nested inside:
    -   Any block-level element
    -   Any inline element
-   Elements that can be nested inside:
    -   Not applicable (`DEFAULT` is an atomic element, not a span)

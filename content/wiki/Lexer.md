---
tags: development wiki
---

A [lexer](/wiki/lexer) is a tokenizer that takes a character-based input stream (read from a file, or a string in memory, or characters arriving over the network) and attempts to recognize characters and groups of characters into so-called [terminal symbols](/wiki/terminal_symbols) or [tokens](/wiki/tokens).

Tools that can be used to generate [lexers](/wiki/lexers) from a [grammar](/wiki/grammar) (a formal specification of how input should be lexed) include:

-   [Ragel](/wiki/Ragel): a state machine compiler for recognizing regular languages
-   [ANTLR](/wiki/ANTLR): an advanced [LL(\*)](/wiki/LL%28%2a%29) parser generator
-   [Walrus](/wiki/Walrus): my own tool prototyped in [Ruby](/wiki/Ruby) and currently being rewritten in [ANTLR](/wiki/ANTLR)

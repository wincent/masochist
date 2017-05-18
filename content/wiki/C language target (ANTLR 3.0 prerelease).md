---
tags: antlr wiki
---

These notes made trying to figure out how to use the [C language target](/wiki/C_language_target) with the [ANTLR](/wiki/ANTLR) prerelease (prior to the release of [ANTLR 3.0](/wiki/ANTLR_3.0)). With the official 3.0 release extensive examples for the [C language target](/wiki/C_language_target) were made available, rendering these notes largely redundant. See [C language target](/wiki/C_language_target) for the most up-to-date information.

# Grammar setup

Specify the target language in the `options` block:

    grammar Walrus;
    options { language = C; }

# `CLASSPATH`

To run [ANTLR](/wiki/ANTLR) from the [command line](/wiki/command_line) you must set up the `CLASSPATH` environment variable correctly. For example, on my system where [ANTLR](/wiki/ANTLR) 3.0b7 is installed under `/usr/local/` I have the following in my `CLASSPATH`:

-   `/usr/local/antlr/lib/antlr-3.0b7.jar`
-   `/usr/local/antlr/lib/antlr-2.7.7.jar`
-   `/usr/local/antlr/lib/stringtemplate-3.0.jar`

I set this in my [Bash](/wiki/Bash) shell with the following command:

    # split across two lines for readability
    export CLASSPATH="/usr/local/antlr/lib/antlr-3.0b7.jar:/usr/local/antlr/lib/antlr-2.7.7.jar"
    export CLASSPATH="$CLASSPATH:/usr/local/antlr/lib/stringtemplate-3.0.jar"

# Building

## Compiling the grammar

Given a grammar file, `Walrus.g`:

    java org.antlr.Tool Walrus.g

Produces the following files:

-   `Walrus.tokens`
-   `WalrusLexer.c`
-   `WalrusLexer.h`
-   `WalrusParser.c`
-   `WalrusParser.h`
-   `Walrus__.g`

The lexer header contains information about how to actually use it; for example, an extremely simple lexer with only a few different token types yields:

     * The lexer WalrusLexerhas the callable functions (rules) shown below,
     * which will invoke the code for the associated rule in the source grammar
     * assuming that the input stream is pointing to a token/text stream that could begin
     * this rule.
     * 
     * For instance if you call the first (topmost) rule in a parser grammar, you will
     * get the results of a full parse, but calling a rule half way through the grammar will
     * allow you to pass part of a full token stream to the parser, such as for syntax checking
     * in editors and so on.
     *
     * The parser entry points are called indirectly (by function pointer to function) via
     * a parser context typedef pWalrusLexer, which is returned from a call to WalrusLexerNew().
     *
     * As this is a generated lexer, it is unlikely you will call it 'manually'. However
     * the entry points are provided anyway.
     * * The entry points for WalrusLexer are  as follows:
     *
     *  - void      pWalrusLexer->SPECIAL_CHAR(pWalrusLexer)
     *  - void      pWalrusLexer->RAW_TEXT(pWalrusLexer)
     *  - void      pWalrusLexer->WALRUS_ESCAPE_SEQUENCE(pWalrusLexer)
     *  - void      pWalrusLexer->Tokens(pWalrusLexer)
     *
     * The return type for any particular rule is of course determined by the source
     * grammar file.

And here is the parser header for an extremely simple parser with only one rule:

     * The parser WalrusParserhas the callable functions (rules) shown below,
     * which will invoke the code for the associated rule in the source grammar
     * assuming that the input stream is pointing to a token/text stream that could begin
     * this rule.
     * 
     * For instance if you call the first (topmost) rule in a parser grammar, you will
     * get the results of a full parse, but calling a rule half way through the grammar will
     * allow you to pass part of a full token stream to the parser, such as for syntax checking
     * in editors and so on.
     *
     * The parser entry points are called indirectly (by function pointer to function) via
     * a parser context typedef pWalrusParser, which is returned from a call to WalrusParserNew().
     *
     * The entry points for WalrusParser are  as follows:
     *
     *  - WalrusParser_anything_return      pWalrusParser->anything(pWalrusParser)
     *
     * The return type for any particular rule is of course determined by the source
     * grammar file.

## Compiling the generated C code

### Prerequisites

The generated files `#include` the file, `antlr3.h` (on my system located at `/usr/local/antlr-3.0b7/lib/C/include/antlr3.h`).

At least in 3.0b7 the [ANTLR](/wiki/ANTLR) C runtime libraries are not shipped in binary form anywhere that I know of, so you have to build and install them first.

    # from top-level of expanded ANTLR distribution tarball
    cd lib/C/dist
    tar xzvf libantlr3c-3.0.0-rc7.tar.gz
    cd libantlr3c-3.0.0-rc7
    ./configure
    make
    make check # (currently does nothing)
    sudo make install

This installs the following libraries:

-   `/usr/local/lib/libantlr3c.dylib`
-   `/usr/local/lib/libantlr3c.la`
-   `/usr/local/lib/libantlr3c.a`

As well as the headers in `/usr/local/include/`:

-   `/usr/local/include/antlr3.h` (and various others)

Technically, I think it would be more correct if these were installed in `/usr/local/lib/antlr/` because there are quite a few of them.

### Compiling

To compile the lexer, parser and link to the `libantlr3c` runtime library:

    gcc -Wall main.c WalrusLexer.c WalrusParser.c -lantlr3c -o walrus_parser

A `main.c` file is required because otherwise the linker will complain about a missing `_main` symbol. The simplest possible example (which does nothing) is this:

    int main(int argc, char *argv[])
    {
        return 0;
    }

Now an example which actually does something:

-   Initialize a stream from a string at runtime
-   Check for errors
-   Manually invoke the lexer and print tokens one at a time
-   Invoke the parser (commented out; comment out the lexer instead to see what happens)

<!-- -->

    #import "WalrusLexer.h"
    [/tags/import #import] "WalrusParser.h"

    int main(int argc, char *argv[])
    {
        pANTLR3_UINT8               input_string = "hello world";
        pANTLR3_INPUT_STREAM        stream = antlr3NewAsciiStringInPlaceStream(input_string, strlen(input_string), "input text stream");
        
        if (stream == (pANTLR3_INPUT_STREAM)ANTLR3_ERR_NOMEM)
        {
          fprintf(stderr, "no memory\n");
          exit(EXIT_FAILURE);
        }
        else if (stream == (pANTLR3_INPUT_STREAM)ANTLR3_ERR_NOFILE)
        {
          fprintf(stderr, "file not found\n");
          exit(EXIT_FAILURE);
        }
        
        pWalrusLexer                lexer  = WalrusLexerNew(stream);
        pANTLR3_COMMON_TOKEN_STREAM	tokens = antlr3CommonTokenStreamSourceNew(ANTLR3_SIZE_HINT, lexer->pLexer->tokSource);
        
        pANTLR3_COMMON_TOKEN        token;
        while ((token = tokens->tstream->LT(tokens->tstream, 1))->getType(token) != ANTLR3_TOKEN_EOF)
        {
          printf("Token: %s\n", token->toString(token)->chars);
          tokens->tstream->istream->consume(tokens->tstream->istream);
        }
            
        /*pWalrusParser               parser = WalrusParserNew(tokens);
        parser->anything(parser);*/
        return 0;
    }

The example does compile with some warnings:

    main.c:6: warning: pointer targets in initialization differ in signedness
    main.c:7: warning: pointer targets in passing argument 1 of ‘strlen’ differ in signedness
    main.c:7: warning: pointer targets in passing argument 3 of ‘antlr3NewAsciiStringInPlaceStream’ differ in signedness

# Grammar details

## To insert material at the top of the parser file

For example, to include a header file, you would place something like this after the `options` block:

    @header {
    [/tags/include #include] <ruby.h>
    }

Obviously, for this to work you would need to pass the appropriate include path to [GCC](/wiki/GCC) via the `-I` switch.

## To insert material at the top of the lexer implementation

    *@lexer::header {
    [/tags/include #include] <ruby.h>
    }

## The `@members` section

Given that [C](/wiki/C) is not [object-oriented](/wiki/object-oriented) it doesn't make much sense to use a `@members` section when using the [C language target](/wiki/C_language_target). If you do use it, you will wind up with a file-scoped variable that will be inserted about half-way down the generated file; in that case, if you want file-scoped variables then you may as well just stick them in the `@header` section anyway.

However, if you want to include a helper function that can be called by any of your actions then the `@members` section may indeed be the best place to put it.

## The `@declarations` and `@init` sections

Each rule (lexer or parser rule) compiles down to a single function. The `@declarations` and `@init` sections allow you to declare variables that will be local to a given function and then initialize them. By performing the declaration and initialization in separate sections the generated should be very portable (for example, without using [C99](/wiki/C99) mode).

### Example

    foo
    @declarations { int bar; }
    @init { bar = 10; } :
    A_TOKEN;

[ANTLR](/wiki/ANTLR) will generate a function for parsing the `foo` rule. `int bar;` will appear near the top of the generated function, after the other variables in the function are declared. `bar = 10;` will appear a little further down, after the other variabels in the function are initialized.

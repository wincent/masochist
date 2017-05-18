---
tags: antlr wiki
---

These notes supersede the older notes in "[C language target (ANTLR 3.0 prerelease)](/wiki/C_language_target_%28ANTLR_3.0_prerelease%29)". Prior to the final release of [ANTLR 3.0](/wiki/ANTLR_3.0) there were no examples demonstrating the use of the [C language target](/wiki/C_language_target), but with the final release there are extensive examples which make the older notes redundant.

# Installing [ANTLR](/wiki/ANTLR)

See "[Installing ANTLR 3.0 on Mac OS X Tiger](/wiki/Installing_ANTLR_3.0_on_Mac_OS_X_Tiger)".

# Building the [C](/wiki/C) runtime

Given a clean copy of the [ANTLR](/wiki/ANTLR) source archive, `antlr-3.0.tar.gz`:

    tar xvzf antlr-3.0.tar.gz 
    cd antlr-3.0/runtime/C/dist
    tar xzvf libantlr3c-3.0.0-rc8.tar.gz 
    cd libantlr3c-3.0.0-rc8
    ./configure
    make
    make check # doesn't do anything yet
    sudo make install

Note that although the runtime included with the official 3.0 release is labelled as being 3.0.0-rc8, the [changelog](http://fisheye2.cenqua.com/changelog/antlr/runtime/C/dist?cs=3721) seems to indicate that this is indeed the final version of the runtime.

This installs these libraries:

-   `/usr/local/lib/libantlr3c.dylib`
-   `/usr/local/lib/libantlr3c.la`
-   `/usr/local/lib/libantlr3c.a`

And the headers are installed as well:

-   `/usr/local/include/antlr3.h` (and many others)

Technically, I think it would be more correct if these were installed in `/usr/local/lib/antlr/` because there are quite a few of them.

# Lexer debugging tricks

## Echoing the content of a token

    LEXER_RULE : . {printf("\%s\n", GETTEXT()->chars);};

# Using gated semantic predicates in lexers

Variables like this cannot be used safely in a multi-threaded context, because the resulting variable is a file-scoped static:

    @lexer::members
    {
      static ANTLR3_BOOLEAN in_link = ANTLR3_FALSE;
    }

Example rule:

    INTERNAL_LINK_START: { !in_link }?=> '[[' { in_link = ANTLR3_TRUE; };

To overcome the thread-safety issues you'll need to allocate your own tracking structure and store a pointer to it in `your_lexer->pLexer->rec->userp`. For an example, see "[Context sensitive lexers](/wiki/Context_sensitive_lexers)".

# See also

-   Official [C language target](/wiki/C_language_target) page on the [ANTLR](/wiki/ANTLR) [wiki](/wiki/wiki): <http://www.antlr.org/wiki/display/ANTLR3/ANTLR3+Code+Generation+-+C>
    -   Further usage notes: <http://www.antlr.org/wiki/display/ANTLR3/Using+the+ANTLR3+C+Target>

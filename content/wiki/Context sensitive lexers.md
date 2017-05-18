---
tags: antlr wiki
---

As noted in the page on the [C language target](/wiki/C_language_target), you may need or want a context sensitive [lexer](/wiki/lexer). This requires you to store lexer state information somewhere. In the simplest case you could store this in the `@lexer::members` section:

    @lexer::members
    {
      static ANTLR3_BOOLEAN in_link = ANTLR3_FALSE;
    }

And then reference the variable using a [gated semantic predicate](/wiki/gated_semantic_predicate):

    INTERNAL_LINK_START: { !in_link }?=> '[[' { in_link = ANTLR3_TRUE; };

The problem with this approach is that variables like this cannot be used safely in a multi-threaded context, because the resulting variable is a file-scoped static.

To overcome the thread-safety issues you'll need to allocate your own tracking structure and store a pointer to it in `your_lexer->pLexer->rec->userp`.

# A simple example

I was in a situation where I found it would be useful if the lexer rules knew what the last-matched token was. Here is an example, parsing a **blockquote** block in [wikitext](/wiki/wikitext); **blockquote** blocks are started by a greater-than symbol in the first line, optionally followed by a space:

    BLOCKQUOTE : { COLUMN == 0 }?=> '>' ' '? ;

Note the use of the `COLUMN` macro to make the predicate as readable as possible. The macro is defined as follows in the `@lexer::members` section:

    // convenience macro for calling char_position_in_line function using a more compact form
    [/tags/define #define] COLUMN char_position_in_line(ctx)

It depends on the following function, also in the `@lexer::members` section:

    // at beginning of input GETCHARPOSITIONINLINE will return -1
    // this function normalizes that to 0
    ANTLR3_UINT32 ANTLR3_INLINE char_position_in_line(pWikiTextLexer ctx)
    {
        ANTLR3_UINT32 pos = GETCHARPOSITIONINLINE();
        return pos == -1 ? 0 : pos;
    }

Now, if we want to allow nested blockquotes the rule above will no longer be sufficient. We could change it to:

    BLOCKQUOTE : { COLUMN == 0 }?=> ('>' ' '?)+ ;

This would allow repeated matches starting in the leftmost column, but it would require the parser to do more work because it would have to look inside the token and determine how many greater-than symbols appeared. We could define an action in the [lexer](/wiki/lexer) to pack this count into the token before handing it off to the parser (the `ANTLR3_COMMON_TOKEN_struct` includes a `custom` member that can be used to store either an integer or a pointer to arbitrary storage), but this would make for a somewhat complicated action which would make the grammar less readable.

If we had a context sensitive lexer which remember the "last seen" token then we could write our rule like this:

    BLOCKQUOTE : { COLUMN == 0 || LAST_TOKEN == BLOCKQUOTE }?=> '>' ' '? ;

In this way multiple tokens would be emitted, one for each greater-than symbol, with no complicated action required by either the lexer or the parser.

The first thing we need to do is implement the `LAST_TOKEN` macro (in the `@lexer::members` section):

    // convenience macro for pulling out the last-remembered token by accessing the userp field
    [/tags/define #define] LAST_TOKEN ((ANTLR3_UINT32)ctx->pLexer->rec->userp)

Note that as we only need to store a single integer we don't allocate any custom storage, we just stick the integer in the `userp` field of the recognizer. This is considerably simpler than having to worry about allocating, managing, and later freeing custom storage.

The second thing that needs to be done is ensure that the last token gets stored in the `userp` field after each token is recognized. We could do this manually with a macro:

    // convenience macro for remembering the last token by stuffing it into the userp field
    [/tags/define #define] RECOGNIZED(token) ctx->pLexer->rec->userp = (void *)token

This would require each and every rule to have an action added that invoked the macro; for example:

    BLOCKQUOTE : { COLUMN == 0 || LAST_TOKEN == BLOCKQUOTE }?=> '>' ' '? { RECOGNIZED(BLOCKQUOTE); };

This is very simple, but its drawback is that it clutters up the grammar with actions and it is error prone (easy to forget to add the action when adding new rules).

An alternative approach is to override the `nextToken()` implementation so that it does the following:

1.  Call the *original* nextToken implementation, which returns the token.
2.  Store the token for use by the `LAST_TOKEN` macro.
3.  Return the token to the caller.

As an example, here is how I declare storage for the function pointer to the original `nextToken()` implementation:

    pANTLR3_COMMON_TOKEN (*original_next_token)(struct ANTLR3_TOKEN_SOURCE_struct * tokenSource);

Here is how I instantiate my [wikitext](/wiki/wikitext) lexer:

    pWikiTextLexer lexer = WikiTextLexerNew(stream);
    if ((ANTLR3_UINT64)lexer == (ANTLR3_UINT64)ANTLR3_ERR_NOMEM)
    {
        exception = lexer_memory;
        goto clean_up_input_stream;
    }
    else if ((ANTLR3_UINT64)lexer < 0)
    {
        exception = lexer_other;
        goto clean_up_input_stream;
    }

I then record the original implementation address and install the custom override:

    // install custom nextToken() override
    original_next_token = lexer->pLexer->tokSource->nextToken;
    lexer->pLexer->tokSource->nextToken = _wiki_text_next_token;

Finally, here is the implementation of the override itself:

    // simple override of generated nextToken function that remembers the last-matched token, providing a small amount of context sensitivity
    static pANTLR3_COMMON_TOKEN _wiki_text_next_token(pANTLR3_TOKEN_SOURCE toksource)
    {
        // grab token using the generated function
        pANTLR3_COMMON_TOKEN token = original_next_token(toksource);
        
        // store it in last-matched field
        pANTLR3_LEXER lexer = (pANTLR3_LEXER)(toksource->super);
        lexer->rec->userp = (void *)token->type;
        
        // return token as per usual
        return token;
    }

# A more complex example

A [lexer](/wiki/lexer) that required more context information (more than a single integer as in the example above) would require custom storage to be allocated and referenced using the `userp` member. The `antlr3collections.h` header file details a number of collections (lists, hashes, vectors, stacks) that can be used in a pseudo-[object-oriented](/wiki/object-oriented) way to dynamically store context information.

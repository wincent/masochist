---
tags: antlr wiki
---

Please note that this solution is only required with [ANTLR](/wiki/ANTLR) 3.0. Newer versions have built in stream stacking support which makes this considerably easier; see '[Implementing "include" functionality using ANTLR](/wiki/Implementing_%22include%22_functionality_using_ANTLR)'.

# [ANTLR](/wiki/ANTLR) 3.0 solution

These two posts were made to the [antlr-interest](/wiki/antlr-interest) mailing list in a thread titled, 'Implementing "include" functionality with C runtime':

-   <http://www.antlr.org:8080/pipermail/antlr-interest/2007-June/021502.html>
-   <http://www.antlr.org:8080/pipermail/antlr-interest/2007-June/021503.html>

Here, Cameron Esfahani of [Apple](/wiki/Apple) describes how to implement "include" functionality when using the [C target](/wiki/C_target).

First, the [Java](/wiki/Java)-centric tips on the subject can be found [here](http://www.antlr.org/wiki/pages/viewpage.action?pageId=557057).

Cameron describes his approach using the [C target](/wiki/C_target) as:

> I've hooked into the `nextToken()` vector of the lexer's token source, and I set up a simple stack to save and restore the `pLexer->input` `ANTLR3_INPUT_STREAM`.
>
> I make sure to call `mark()` on the current `ANTLR3_INPUT_STREAM` so when it gets switched back in by the `nextToken()` override, I can just call `rewindLast()` on it.

The code is:

    	: 'include' WS? f = STRING {
    		ANTLR3_INPUT_STREAM*				Input;
    		ANTLR3_UINT8*						FileName;
    		int									Length;

    		// Extract out the file name from within the quotes.
    		Length = strlen( f->getText( f )->chars + 1 );
    		FileName = malloc( Length );
    		strcpy( FileName, f->getText( f )->chars + 1 );
    		FileName[ Length - 1 ] = 0;

    		Input = antlr3AsciiFileStreamNew( FileName );

    		// Remember where we are in this stream, and save it.

    		gLexer->pLexer->input->istream->mark( gLexer->pLexer->input->istream );
    		gIncludeStack->push( gIncludeStack, gLexer->pLexer->input, NULL );

    		gLexer->pLexer->setCharStream( gLexer->pLexer, Input );

    		free( FileName );
    		}

    ANTLR3_COMMON_TOKEN*
    NextToken( ANTLR3_TOKEN_SOURCE* TokenSource )
    {
    	ANTLR3_COMMON_TOKEN*				Token;
    	ANTLR3_INPUT_STREAM*				SavedStream;

    	Token = gOriginalNextToken( TokenSource );

    	if ( Token == &TokenSource->eofToken )
    	{
    		// We've reached the end of this file.  Pop anything off the include
    		// stack and continue.

    		if ( gIncludeStack->size( gIncludeStack ) > 0 )
    		{
    			SavedStream = gIncludeStack->top;

    			gLexer->pLexer->setCharStream( gLexer->pLexer, SavedStream );
    			SavedStream->istream->rewindLast( SavedStream->istream );

    			Token = gOriginalNextToken( TokenSource );

    			gIncludeStack->pop( gIncludeStack );
    		}
    	}

    	if ( ( ( ANTLR3_INT64 ) Token->getStartIndex( Token ) ) < 0 )
    	{
    		Token = gOriginalNextToken( TokenSource );
    	}

    	return( Token );
    }

Cameron then goes on to clarify:

> It looks like I need to switch the input in the token factory as well. I added the following code to switch the token factory input to the new input and things look better

    gLexer->pLexer->tokFactory->unTruc.input = SavedStream;

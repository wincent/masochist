---
tags: antlr wiki
---

# Preliminaries

These simple examples demonstrate some [lexer](/wiki/lexer) basics for [ANTLR](/wiki/ANTLR). They assume that [ANTLR 3](/wiki/ANTLR_3) is installed and in the `CLASSPATH`; likewise the current directory should also be in the `CLASSPATH`:

    export CLASSPATH=".:/usr/local/antlr/lib/antlr-3.0.jar"
    export CLASSPATH="$CLASSPATH:/usr/local/antlr/lib/antlr-2.7.7.jar" 
    export CLASSPATH="$CLASSPATH:/usr/local/antlr/lib/antlr-runtime-3.0.jar"
    export CLASSPATH="$CLASSPATH:/usr/local/antlr/lib/stringtemplate-3.0.jar"

Each example uses a `Simple` grammar in a file called `Simple.g`.

The grammar can be compiled using:

    java org.antlr.Tool Simple.g

An executable can then be produced with:

    javac Simple.java SimpleLexer.java SimpleParser.java

This requires a `Simple.java` file containing a `main` method:

    import org.antlr.runtime.*; 

    public class Simple {
      public static void main(String[] args) throws Exception {
        ANTLRInputStream input = new ANTLRInputStream(System.in); 
        SimpleLexer lexer = new SimpleLexer(input); 
        CommonTokenStream tokens = new CommonTokenStream(lexer); 
        SimpleParser parser = new SimpleParser(tokens); 
        System.out.println("\n"); // blank line before printing other output
        parser.thing(); 
      } 
    }

Note that the start rule in these examples is `thing`.

The compiled executable can be run using:

    java Simple

Input is read from the [standard input](/wiki/standard_input). Hit Control-D twice to signal the end of the input.

# Unrecognized tokens

This grammar demonstrates how [ANTLR](/wiki/ANTLR) responds to input not recognized by the [lexer](/wiki/lexer):

    grammar Simple;

    // lexer rules
    FOO: 'foo' { System.out.println("foo"); };
    BAR: 'bar' { System.out.println("bar"); };

    // parser rules
    thing: .* EOF { System.out.println("done"); };

## Invalid input

For input:

    hello

[ANTLR](/wiki/ANTLR) prints:

    line 1:0 no viable alternative at character 'h'
    line 1:1 no viable alternative at character 'e'
    line 1:2 no viable alternative at character 'l'
    line 1:3 no viable alternative at character 'l'
    line 1:4 no viable alternative at character 'o'
    done

Note that the [lexer](/wiki/lexer) emits warnings for unrecognized characters and then moves on. Ultimately no tokens are recognized and no tokens are passed on to the parser, other than the `EOF` token.

## Valid input

For input:

    foobar

Prints:

    foo
    bar
    done

## Mixed input (valid/invalid)

For input:

    *foo+bar=

Prints:

    line 1:0 no viable alternative at character '*'
    foo
    line 1:4 no viable alternative at character '+'
    bar
    line 1:8 no viable alternative at character '='
    done

Here we clearly see the unrecognized characters being skipped over by the [lexer](/wiki/lexer); the [parser](/wiki/parser) only sees the valid tokens.

# The `tokens` section

## Basics

This example uses the `tokens` section instead of the lexer rule for `FOO` like in the previous example:

    grammar Simple;

    tokens {
      FOO = 'foo';
    }

    // lexer rules
    BAR: 'bar' { System.out.println("bar"); };

    // parser rules
    thing: .* EOF { System.out.println("done"); };

### Invalid input

Input:

    hello

Output:

    line 1:0 no viable alternative at character 'h'
    line 1:1 no viable alternative at character 'e'
    line 1:2 no viable alternative at character 'l'
    line 1:3 no viable alternative at character 'l'
    line 1:4 no viable alternative at character 'o'
    done

Note that this example behaves identically to the one above.

### Valid input

Input:

    foobar

Output:

    bar
    done

Note that tokens declared in the `tokens` section can't have actions attached to them; this is why nothing is printed when `FOO` is recognized.

### Mixed input

Input:

    *foo+bar=

Output:

    line 1:0 no viable alternative at character '*'
    line 1:4 no viable alternative at character '+'
    bar
    line 1:8 no viable alternative at character '='
    done

## Precedence

This grammar explores whether tokens declared in the `tokens` section take precedence over those defined in normal [lexer](/wiki/lexer) rules; note how both `FOO` and `BAR` now compete, trying to match `foo`:

    grammar Simple;

    tokens {
      FOO = 'foo';
    }

    // lexer rules
    BAR: 'foo' { System.out.println("bar"); };

    // parser rules
    thing: .* EOF { System.out.println("done"); };

Upon compilation, [ANTLR](/wiki/ANTLR) prints:

    warning(208): Simple.g:8:1: The following token definitions are unreachable: BAR

Note that the relative ordering within the file has no effect; upon changing the order:

    grammar Simple;

    // lexer rules
    BAR: 'foo' { System.out.println("bar"); };

    tokens {
      FOO = 'foo';
    }

    // parser rules
    thing: .* EOF { System.out.println("done"); };

[ANTLR](/wiki/ANTLR) still emits:

    warning(208): Simple.g:8:1: The following token definitions are unreachable: BAR

Now for a slightly more subtle example; there is no longer a literal duplication of the two tokens but `BAR` will still try to match the same thing as `FOO`:

    grammar Simple;

    tokens {
      FOO = 'foo';
    }

    // lexer rules
    BAR: 'a'..'z' 'a'..'z' 'a'..'z' { System.out.println("bar"); };

    // parser rules
    thing: .* EOF { System.out.println("done"); };

This compiles without warning.

For input:

    foo

[ANTLR](/wiki/ANTLR) prints:

    done

And for input:

    bar

It prints:

    bar
    done

Thus demonstrating that **tokens defined in the `tokens` section take precedence over those defined in normal lexer rules**.

# Tokens defined implicitly in the parser

In this section we show that **tokens defined implicitly in the parser (using string literals) are exactly equivalent to tokens defined in the `tokens` section**:

    grammar Simple;

    // lexer rules
    BAR: 'bar' { System.out.println("bar"); };

    // parser rules
    thing: ('foo' | BAR)* EOF { System.out.println("done"); };

Behaves as follows:

    #input
    foo

    # output
    done

    # input
    bar

    # output
    bar
    done

    # input
    foobar

    # output
    bar
    done

And changing the grammar slightly in order to compare precedence (note that lexer rule `BAR` and the implicitly-defined token `'foo'` will now try to match the same thing):

    grammar Simple;

    // lexer rules
    BAR: 'a'..'z' 'a'..'z' 'a'..'z' { System.out.println("bar"); };

    // parser rules
    thing: ('foo' | BAR)* EOF { System.out.println("done"); };

Behaves as follows:

    #input
    foo

    # output
    done

    # input
    bar

    # output
    bar
    done

    # input
    foobar

    # output
    bar
    done

Note that the behaviour of implicitly-defined tokens is identical to that from the previous section, where tokens were explicitly defined in the `tokens` section.

# Precedence among lexer rules

## Literal tokens

This grammar demonstrates that when matching input that could match multiple lexer rules, [ANTLR](/wiki/ANTLR) will choose the longest match. This is clearest in the case of literal tokens (see below for an example using non-literal tokens):

    grammar Simple;

    // lexer rules
    SHORT: 'aaa' { System.out.println("short"); };
    LONG: 'aaaa' { System.out.println("long"); };

    // parser rules
    thing: .* EOF { System.out.println("done"); };

Behaviour is as follows:

    # input
    aaa

    # output
    short
    done

    # input
    aaaa

    # output
    long
    done

    # input
    aaaaaaa

    # output
    long
    short
    done

Of special interest is the last example; note how [ANTLR](/wiki/ANTLR) choose the longest match over the shorter possibility even though the `SHORT` lexer rule appears first in the grammar.

## Non-literal tokens

Non-literal tokens are different to literal tokens in that **the order in which the lexer rules are specified is critical**, as shown in this example grammar:

    grammar Simple;

    // lexer rules
    FOO: 'a'..'z'+ { System.out.println("foo"); };
    BAR: 'a'..'f'+ { System.out.println("bar"); };

    // parser rules
    thing: .* EOF { System.out.println("done"); };

Here [ANTLR](/wiki/ANTLR) warns that `warning(208): Simple.g:5:1: The following token definitions are unreachable: BAR`.

Changing the order:

    grammar Simple;

    // lexer rules
    BAR: 'a'..'f'+ { System.out.println("bar"); };
    FOO: 'a'..'z'+ { System.out.println("foo"); };

    // parser rules
    thing: .* EOF { System.out.println("done"); };

[ANTLR](/wiki/ANTLR) will now preferentially match `BAR`, if possible and **all else being equal**:

    # input
    aaa

    # output
    bar
    done

    # input
    zzz

    # output
    foo
    done

    # input
    aaaaaaaazzz

    # output
    foo
    done

Note how when the the input can match `FOO` or `BAR`, [ANTLR](/wiki/ANTLR) prefers `BAR` because it appears first **but** in the case where [ANTLR](/wiki/ANTLR) could match the input as two tokens (`BAR` followed by `FOO`) or as a single, longer token (just `FOO`), it opts for the greedy match.

So ordering is critical for non-literal lexer rules, but in general *this ordering is only relevant during the analysis phase*; the following example rules should make this clear:

    LETTERS: 'a'..'z'+;
    LETTERS_SUBSET: 'a'..'f'+; // unreachable according to analysis

    NUMBERS_SUBSET: '0'..'5'+; // reachable according to analysis
    NUMBERS: '0'..'9'+;

If we take the two number-matching rules, note that the ordering was important during the analysis phase. But when the lexer is actually run the ordering is overridden by ANTLR's preference for greedy matches:

    # inputs
    012345 # could match either rule
           # but ANTLR will choose NUMBERS_SUBSET
           # because it appears first in the lexer

    0123456 # could match NUMBERS_SUBSET, followed by NUMBERS
            # alternatively, could just match one NUMBERS token
            # ANTLR chooses the greedy match (one NUMBERS token)

The only case in which strict ordering is preserved at both analysis and runtime *regardless of length* is when filtering is turned on; (see the section on filtering below).

# Prediction

[ANTLR](/wiki/ANTLR) builds predictive lexers; that is, they attempt to use a small amount of "lookahead" to see what kind of token they are scanning without actually scanning the entire token. By default the lookahead in lexers is one character. ANTLR will automatically increase this in order to disambiguate cases like this:

    # when ANTLR sees an "f" it must look ahead 7 more characters
    # (until it sees the "d" or the "t")
    # only then can it predict either FOOD or FOOT
    FOOD: 'fooooood...';
    FOOT: 'foooooot...';

Once lookahead has determined the type of token to be expected, [ANTLR](/wiki/ANTLR) races forward and tries to scan the entire thing, raising an exception if the token didn't match the prediction. The following simple grammar illustrates this:

    grammar Simple;

    FOO: BAR ':' BAZ {System.out.println("FOO");};
    fragment BAR: 'bar' {System.out.println("bar");};
    fragment BAZ: 'baz' {System.out.println("baz");};
    EVERYTHING_ELSE: . {System.out.println("EVERYTHING_ELSE");};

    thing: .* EOF {System.out.println("done");};

And here is the behaviour:

    # input
    bar:.

    # output
    bar
    line 1:4 mismatched character '.' expecting 'b'
    done

Here the lexer sees `bar`, sees a `:`, and assumes that this is a `FOO` token. It therefore expects a `b` character after the colon but instead finds a period, and so throws an exception.

    # input
    bar.

    # output
    bar
    line 1:3 mismatched character '.' expecting ':'
    done

Note that with even less input (before seeing even the semi-colon), the lexer has already decided that this is a `FOO` token and so expects to see a semi-colon after the `r`; when it actually finds a period instead it throws an exception.

    # input
    baz:.

    # output
    line 1:2 mismatched character 'z' expecting 'r'
    EVERYTHING_ELSE
    done

Now we try a different input before the semi-colon to see if the lexer will identify this as `EVERYTHING_ELSE` or not; evidently when it sees the `ba` it has *already* predicted that this will be a `FOO` token, and so fails. Note that even though it throws the exception, it continues on and scans one more character. If we chop one more letter off the input, not that it doesn't continue scanning one character:

    # input
    baz:

    # output
    line 1:2 mismatched character 'z' expecting 'r'
    done

Likewise, if we chop off yet another character, the lexer still expects to find a `FOO` token:

    # input
    baz

    # output
    line 1:2 mismatched character 'z' expecting 'r'
    done

The same is true if we chop off another character:

    # input
    ba

    # output
    line 1:2 mismatched character 'z' expecting 'r'
    done

Only when we replace the second character with something other than `a` do we can an exception-free recognition:

    # input
    b.

    # output
    EVERYTHING_ELSE
    EVERYTHING_ELSE
    done

Likewise, a lone `b` or any other string that doesn't start with `ba` is recognized without any problems:

    # input
    b

    # output
    EVERYTHING_ELSE
    done

    # input
    foo

    # output
    EVERYTHING_ELSE
    EVERYTHING_ELSE
    EVERYTHING_ELSE
    done

But note that embedding a `ba` anywhere in the input is enough to trigger the exceptions again:

    #input
    fooba

    # output
    EVERYTHING_ELSE
    EVERYTHING_ELSE
    EVERYTHING_ELSE
    line 1:5 mismatched character '<EOF>' expecting 'r'
    done

I believe `ba` will trigger the exception while `b` will not because [ANTLR](/wiki/ANTLR) uses one character of lookahead in order to make predictions. When scanning through the input and looking ahead to a lone `b` character, ANTLR doesn't yet know enough to predict whether the next token will be `FOO` or `EVERYTHING_ELSE`. On the other hand, when scanning a `b` character and looking ahead to find an `a`, ANTLR assumes that a `FOO` token has been found.

This prediction behaviour makes [ANTLR](/wiki/ANTLR) lexers exceedingly difficult to get right. There is no "backtracking" like you might find in a hand-coded recursive descent parser. If you want the example grammar to handle strings like `fooba` without raising an exception then the only practical way that I know to do so is to use the `filter` option:

    grammar Simple;
    options {filter=true;}

    FOO: BAR ':' BAZ {System.out.println("FOO");};
    fragment BAR: 'bar' {System.out.println("BAR");};
    fragment BAZ: 'baz' {System.out.println("BAZ");};
    EVERYTHING_ELSE: . {System.out.println("EVERYTHING_ELSE");};

    thing: .* EOF {System.out.println("done");};

This grammar will handle things input strings like `....foobaaaaa....bar:baz...` and correctly identify the `bar:baz` string embedded in the middle of the string without raising exceptions for the incomplete substrings elsewhere in the input.

# Filtering

As already mentioned above, filtering mode changes the precedence and matching behaviour of the generated lexer in the following ways:

-   ANTLR synthesizes a `Tokens` rule that will try the lexer rules one at a time *in the exact order that they appear in the grammar*.
-   Greedy matching does not apply; the first match found wins regardless of length.
-   If no rules match, the lexer skips a character (throwing it away) and tries again, restarting from the top of the rules list.
-   This behaviour is equivalent to having backtracking turned on (failing options do not result in an exception message being emitted; the lexer merely rewinds ready to try the next option) with a fixed lookahead of `k = 1`, combined with a strict ordering of the alternatives.

## Limitations

When `filter` is set to `true`, `@after` and action blocks have no effect. This means that when set to `true` you can only generate a lexer, not a combined lexer/parser (this is confirmed in [this post](http://www.antlr.org:8080/pipermail/antlr-interest/2007-May/020942.html) to the [antlr-interest](/wiki/antlr-interest) mailing list by [Terence Parr](/wiki/Terence_Parr)):

    grammar Simple;
    options {filter=true;}

    FOO: 'foo' {System.out.println("FOO");};
    EVERYTHING_ELSE: . {System.out.println("EVERYTHING_ELSE");};

    thing
    @init { System.out.println("init"); }   // printed regardless of filter setting
    @after { System.out.println("after"); } // not printed when filter = true
    : .* EOF {System.out.println("done");}; // not printed when filter = true

Results:

    # input
    init
    FOO
    EVERYTHING_ELSE
    EVERYTHING_ELSE
    EVERYTHING_ELSE

    # output

Results with `filter = true` commented out:

    # output
    init
    FOO
    EVERYTHING_ELSE
    EVERYTHING_ELSE
    EVERYTHING_ELSE
    done
    after

Note that in non-filtering mode, the action block is executed, along with the `@init` and `@after` blocks. In filtering mode, only the `@init` block is executed. Due to this limitation there isn't really any sense in trying to write a parser when filtering is turned on, even in a case like this example grammar where the catch-all rule guarantees that everything will be tokenized. See "[Patches to ANTLR 3.0](/wiki/Patches_to_ANTLR_3.0)" for a patch that I submitted that addresses this limitation.

# Ambiguity

    grammar Simple;

    BAR: .+ { System.out.println("BAR"); };    // The following alternatives are unreachable: 1
    FOO: 'foo' { System.out.println("FOO"); }; // The following token definitions are unreachable: FOO

    thing: .* EOF;

Feeding input such as "abc" to this lexer yields:

    line 1:0 required (...)+ loop did not match anything at character 'a'
    line 1:1 required (...)+ loop did not match anything at character 'b'
    line 1:2 required (...)+ loop did not match anything at character 'c'

Likewise, input of "foo" yields:

    line 1:0 required (...)+ loop did not match anything at character 'f'
    line 1:1 required (...)+ loop did not match anything at character 'o'
    line 1:2 required (...)+ loop did not match anything at character 'o'

To consider why this is the case, we look at the generated lexer:

-   The `mTokens` method will always predict `BAR` and never predict `FOO` (in keeping with the "unreachable" warning for `FOO`.
-   The `mBAR` method will throw an `EarlyExitException` exception for the first character scanned, no matter what the character is; this is once again in keeping with the "unreachable" alternative warning within `BAR`.
-   The parser will catch the exception and keep asking the lexer for tokens, resulting in two more exceptions before the input is exhausted.

Both warnings go away if the `BAR` rule is rewritten as follows:

    BAR: '\u0000'..'\uFFFE'+;

[ANTLRWorks](/wiki/ANTLRWorks) shows `.+` in its syntax diagram as exactly equivalent to `'\u0000'..'\uFFFE'` but do not let that fool you; the answer lies on page 101 of the [ANTLR book](/wiki/ANTLR_book) when it describes how `.+` and `.*` default to non-greedy behaviour:

> ANTLR considers them idioms for "Match any symbol until you see what lies beyond the subrule."

In other words:

    # this rule:
    BAR: .+;

    # is really equivalent to:
    BAR: (options { greedy = false; }: '\u0000'..'\uFFFE')+;

    # which is not the same as:
    BAR: '\u0000'..'\uFFFE'+;

    # or (written in a different way):
    BAR: (options { greedy = true; }: '\u0000'..'\uFFFE')+;

Setting `greedy = true` to this kind of subrule doesn't make sense because "what lies beyond the subrule" is not specified (there *is* no subrule in fact). A counter example will make this clear:

    # here a non-greedy subrule (really the ".*") makes sense
    # because the "what lies beyond" is clearly stated
    # in this case, "what lies beyond" is the sequence '*/'
    COMMENT: '/*' .* '*/';

In fact, it is never correct to have `greedy = false` on the right edge of a rule and ANTLR will always warn about it:

    FOO: (options { greedy = false; } : 'foo')+; 

This explains why a rule like `.+` is described as containing an unreachable alternative; although I'd still like someone wiser in the ways of ANTLR to confirm my hypothesis.

Also, I am not sure why the warning for `FOO` goes away because it still is unreachable (input "foo" is recognized as `BAR`).

The generated code is different in the following ways:

-   The `mBAR` method uses `matchRange('\u0000','\uFFFE')` range under the covers, instead of `matchAny()`.
-   The `mBAR` method uses look-ahead to see if the input character is in the range of `0000` to `FFFE` (it always is); this is different from the other lexer which did not use lookahead and which by default assumes that no match is possible and never follows the `matchAny()` path.

With the rule order inverted ANTLR issues no warnings:

    grammar Simple;

    FOO: 'foo' { System.out.println("FOO"); };
    BAR: .+ { System.out.println("BAR"); };

    thing: .* EOF;

For this grammar:

    # input
    foo

    # output
    FOO

    # input
    abc

    # output
    line 1:0 required (...)+ loop did not match anything at character 'a'
    line 1:1 required (...)+ loop did not match anything at character 'b'
    line 1:2 required (...)+ loop did not match anything at character 'c'

Clearly, using the `.` (match any character) symbol in conjunction with `+` doesn't work in the current version of [ANTLR](/wiki/ANTLR). If we replace `.+` with `'\u0000'..'\uFFFE'` then the behaviour is as expected:

    # input
    foo

    # output
    FOO

    # input
    abc

    # output
    BAR

When we change `BAR` to match a single character ANTLR won't issue any warnings even though the rule appears first (and an `f` could match `BAR` or potentially be the first character of `FOO`):

    BAR: . { System.out.println("BAR"); };
    FOO: 'foo' { System.out.println("FOO"); };

Behaviour:

    # input
    foo

    # output (longest match wins)
    FOO

    # input
    abc

    # output
    BAR
    BAR
    BAR

And for comparison (reverse order):

    FOO: 'foo' { System.out.println("FOO"); };
    BAR: . { System.out.println("BAR"); };

Behaviour:

    # input
    foo

    # output
    FOO

    # input
    abc

    # output
    BAR
    BAR
    BAR

The above examples again confirm that all else being equal, the longest match will win regardless of lexer rule order.

    BAR: . . . { System.out.println("BAR"); };
    FOO: 'foo' { System.out.println("FOO"); };

Behaviour:

    # input
    foo

    # output
    BAR

    # input
    abc

    # output
    BAR

Note how when the length of the two possible matches is equal, the first lexer rule (`BAR` in this case) wins even if the other lexer rule may appear to be more specific.

On changing the order:

    FOO: 'foo' { System.out.println("FOO"); };
    BAR: . . . { System.out.println("BAR"); };

The behaviour is:

    # input
    foo

    # output
    FOO

    # input
    abc

    # output
    BAR

    # input (first character could match FOO)
    fbc

    # output
    BAR

    # input (first two characters could match FOO)
    foc

    # output
    BAR

It is interesting how in this example `FOO` is not predicted despite the presence of two characters `fo`; this is different from the findings above which showed prediction kicking in after seeing only two characters. I believe the reason why prediction doesn't occur in this case is because both `FOO` and `BAR` are known to be of the same length at analysis time and so ANTLR won't predict `FOO` until it has seen the whole thing. Witness this counter example:

    # input
    fo

    # output
    line 1:0 no viable alternative at character 'f'

Here ANTLR doesn't predict `FOO`, but nor can it recognize `BAR` because three characters are required and only two are present.

## Analysis problems

Here is another example of how ambiguity can cause problems. Consider the following examples:

    // OK
    ANYTHING : . ;
    thing : ANYTHING* EOF;

    // OK
    ANYTHING : . ;
    thing : element? EOF;
    element : ANYTHING+ ;

    // OK
    ANYTHING : . ;
    thing : element EOF;
    element : ANYTHING* ;

    // not OK
    ANYTHING : . ;
    thing : element* EOF;
    element : ANYTHING+ ;

All is well in the first three cases. The last case causes ANTLR to complain "Decision can match input such as "ANYTHING" using multiple alternatives: 1, 2". In this case given input like "abcdef", ANTLR doesn't know whether to match it as a series of `element` objects or as a single `element`.

This is discussed on pages 283 and 285 of the [ANTLR book](/wiki/ANTLR_book), discussing an ambiguity problem with semi-colons (emphasis added):

> The solution is to either make semicolons required or make them only statements. Semicolons should not be both statement terminators and statements as shown previously. Naturally, a good language designer would simply fix the language. With the grammar as is, though, ANTLR automatically resolves the nondeterminism greedily.
>
> *ANTLR generates a warning, but you can safely ignore it. At some point ANTLR will let you silence warnings for decisions that ANTLR properly* resolves.**

# Empty lexer rules

Empty lexer rules are a "no no"; that is, `*` and `?` are bad in the lexer if they are entire production, and can lead to hanging the [ANTLRWorks](/wiki/ANTLRWorks) debugger or a non-working lexer (source: [this](http://www.antlr.org:8080/pipermail/antlr-interest/2007-June/021279.html) [antlr-interest](/wiki/antlr-interest) post by [Terence Parr](/wiki/Terence_Parr)).

# See also

-   [ANTLR prediction](/wiki/ANTLR_prediction)

---
title: Parser generator update
tags: blog
---

One of the things that's been so good about [writing the parser generator](http://www.wincent.com/a/about/wincent/weblog/archives/2007/01/writing_a_parse.php) [for Walrus](http://www.wincent.com/a/about/wincent/weblog/archives/2007/02/abstract_syntax.php) is that it has made the code much more flexible, much easier to develop iteratively. In my original design I had a hand-coded parser and a simple grammar that imposed a number of restrictions to make the parser's job easier:

-   There were only three characters with special meaning, `#`, `$` and `\`.
-   The parser was strictly line-oriented:
    -   Comments extended to the end of the line as did directives.
    -   As a special case, a comment could follow a directive on the same line.
    -   Directives could not span lines.
    -   Placeholders couldn't span lines either.

The notion of "what is a Ruby expression" was extremely simplified. The basic idea was that when expecting a Ruby expression the lexer would drop into a mode where it would blindly consume characters until it hit something that marked the end of the expression; it would do this without analysing the internal structure of the expression in anything but the simplest of ways.





### Manually parsing Ruby expressions

To illustrate, consider the case of parsing a placeholder:

    $my_placeholder(foo)

On seeing the initial `$` the lexer knew that a placeholder was coming and so looked for an identifier (in this case, `my_placeholder`). On hitting the opening bracket the lexer new that a parameter list containing zero or more Ruby expressions was coming, but it could really only prepare itself for three eventualities:

1.  Hitting a `)` would mean that the end of the parameter list
2.  Hitting a `,` would mean the end of one parameter and the beginning of another
3.  "Everything else" would be part of an parameter expression

I didn't want to write a full Ruby lexer/parser given that Ruby is such a complex language (in the syntactic sense). In order to be able to parse basic structures like Array and Hash literals I had to put in some special case handling. In practice while lexing a Ruby expression the process looked something like this:

1.  Keep going until you hit something that marks the end of an expression (`)`, `,`, or the end of the current line)
2.  If you hit a `,` start scanning a new expression
3.  If you hit a `[` you're inside an array and `,` no longer marks the end of the current expression; scan recursively for zero or more Ruby expressions; finally, `]` marks the end of the array.
4.  Similar rules applied for hashes (looking for `{`) and bracketed expressions (looking for "`(`").
5.  Different rules applied inside string literals (where `[`, `(`, `{` and their counterparts lost their special meaning) and escaping meant that `"` or `'` didn't necessarily mark the end of the string due to escaping.

In short, even unsophisticated parsing of Ruby expressions soon lead to an ugly rats nest of imprecise generalizations, exceptions and code.

### Parsing Ruby expressions with the parser generator

The experience using a parser generator couldn't be more different. I was able to writing half a dozen grammar rules in a few minutes to handle string literals, array literals, hash literals, symbol literals, constants, identifiers, message sends, assignment expressions, addition expressions and so forth. I spent much more time writing specifications to confirm the behaviour of the parser than I did writing the actual rules which generated it. Having written the basic rules, things like arbitrarily deep and complex nesting worked automatically.

At the beginning I'd said, "I don't want to invest any time writing a Ruby lexer/parser". But after writing the parser generator I was able to create a useful subset of such a lexer/parser in only a few minutes; only a subset but already much, much more powerful than my hand-coded parser ever would have been.

Apart from being quicker and less error prone than hand-coded the parser, the generated parser has the advantage that it actually has some kind of "understanding" of the internal structure of a Ruby expression because it has analysed the internal structure of it rather than pseudo-blindly gobbling it up. That is, it doesn't just attempt to consume input and "recognize" stuff that is a Ruby expression; it actually produces an Abstract Syntax Tree which describes the components within the expression, describes what they are and the relationships among them. The dumb alternative is far more likely to accept faulty input that isn't really a valid Ruby expression; further down the track when you try to actually use this input you'll find that it doesn't work as you expect. The more rigorous alternative, on the other hand, is more likely to catch faulty input before you try to use it.

### Performance update

As the grammar complexity increases, the speed gap between the memoizing and non-memoizing cases closes. I've now got 202 specs: with memoizing the parser takes 6.411 seconds to run them; without memoizing the runtime is 5.162 seconds. That's with quite short input texts; I expect the gap to close even more as the input size grows.

This performance improvement comes at a time when I had made [some changes](http://www.wincent.com/a/about/wincent/weblog/svn-log/archives/2007/02/walrus_r44_6_items_changed.php) imposing stricter identification of cache hits and misses in the memoizer (making hits less likely but making sure that the parse tree generated with memoizing turned on really is identical to that produced with memoizing turned off). At the moment a run yields 3,956 hits and 26,749 misses. I'll be interested to watch those numbers when I try large input texts.

### Walrus grammar enhancements

The power of the parser generator has allowed me to enrich the allowed syntax in the grammar in a way that would be awkward if I were still using a hand-coded parser.

For example, in a few minutes I was able to extend the placeholder syntax to allow a "long form":

    ${foo}

In addition to the existing form:

    $foo

The "long form" is useful in those cases where you might want a placeholder to be immediately followed by raw text with no intervening whitespace:

    ${foo}bar

With the hand-coded parser this would have required painful rewriting but with the parser generator, this was a simple matter of tweaking the rules. And being an augmentation of the syntax rather than a compatibility-breaking change of the old syntax all of my old specs continued to pass and I only needed to write new specs confirming the behaviour under the alternative syntax.

Other stuff that was quick to add:

-   Explicit directive end markers (for example, `#silent foo#`) which allow you to embed directives within the flow of a single line; this syntax would have been difficult to implement with the hand-coded parser because of the previous design decision that directives should always extend to the end of the current line.
-   Ability to span directives across multiple lines using the backslash at the end of the line as a "line continuation" marker.
-   Ability to specify multiple semi-colon separated expressions in `#silent` directives.

Then there was other stuff that I never would even have attempted with the hand-written parser, such as multiline comments, and nested ones at that.

### Grammar specification improvements

In addition to the improvements to the Walrus grammar itself, I made a couple of changes that makes writing grammars a little more pleasant.

#### `ParsletRepetitionDefault`

First up, I made a `ParsletRepetitionDefault` class that makes it easy to specify what value should be returned if an `optional` component is not present. By default, these optional structures are simply omitted from the output if they are not present, but with `ParsletRepetitionDefault` you can state exactly what object should be returned as a placeholder if the component is missing.

Consider the following rules. In the first example there is no problem even if the optional `parameter_list` is not present in the input. The fact that another component follows the optional one ensures that at least *something* will be returned by the parser (in this case an empty array) and so there will be *something* to populate the Abstract Syntax Tree.

In the second example there is no trailing component so we must employ an ugly hack, a "no-op" component (an empty regular expression) that as a side effect ensures that something will be returned (again an empty array) even when the optional `method_parameter_list` is missing.

Finally, the third example demonstrates the use of the new `ParsletRepetitionDefault` class. The `optional` qualifier can now take an optional parameter specifying what should be returned as a placeholder in the event that the optional component is absent. This is much better than the hacky alternative because it is transparent and clearly shows the intention behind the rule.

    # not needed
    rule :super_with_parentheses, '#super'.skip & :parameter_list.optional & :directive_end


    # hack
    rule :method_with_parentheses, :identifier & :method_parameter_list.optional & //


    # elegant
    rule :method_with_parentheses, :identifier & :method_parameter_list.optional([])

The object-oriented design of the system made it very quick to add this behaviour. I decided to subclass `ParsletRepetition` rather than augmenting that class itself with optional behaviour so as to keep it simple. Parsers are complex systems of multiple parts: I'd rather have a complex system made up of simple parts than a complex system made up of complex parts.

#### Ability to override skipping parslet for specific rules

Rather than just specifying a [default parslet](http://www.wincent.com/a/about/wincent/weblog/archives/2007/02/abstract_syntax.php) for skipping between tokens, you can now override that on a per-rule basis. This means either specifying a different parslet for that rule or specifying `nil` to entirely turn off skipping for that rule.

As an example, consider a scenario in which you want your default inter-token parslet to skip over newlines and whitespace (where "whitespace" is spaces, tabs but not newlines). Then imagine a rule where you want to skip only whitespace not newlines. The solution is to override the skipping token for that rule. I've used this in the Walrus grammar for parsing directives (which should not span multiple lines unless an explicit line continuation marker is used) and for parsing things like multi-line comments and string literals (where I don't want any skipping at all).

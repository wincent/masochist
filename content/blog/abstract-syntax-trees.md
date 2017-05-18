---
title: Abstract Syntax Trees
tags: blog
---

In a previous article about [writing a parser generator in Ruby](http://www.wincent.com/a/about/wincent/weblog/archives/2007/01/writing_a_parse.php) I promised to talk about [Abstract Syntax Trees](http://en.wikipedia.org/wiki/Abstract_syntax_tree). The problem with the parsers previously described is that the literal results (strings arranged in a hierarchical, ordered tree with the aid of arrays) are not very information-rich and they are difficult to work with.





Take, for example, the statement:

    foo = bar + 1

After tokenizing this is represented in the following way:

    [ 'foo', '=', [ 'bar', '+', '1' ]]

Although this accurately reflects the structure of the source, it is cumbersome to work with. It is not very semantically rich; the only way you can tell that it is an assignment expression is by looking at the second term (the `=` operator). Likewise, the nested addition expression can only be identified by looking at the second term in that (the `+` operator). It also contains redundant information; the operators themselves wouldn't even need to be included if the larger structures were appropriately labelled as an assignment and an addition expression respectively.

#### Omitting tokens that aren't necessary to convey semantics

Abstract Syntax Trees (ASTs) address these concerns by removing tokens that don't apport any semantic information and by encoding the types of the expressions within the structure of the tree itself. We could do this by using classes:

    class Expression; end # nothing interesting here, yet


    class AssignmentExpression < Expression
      attr_accessor :target, :value
      def initialize(target, value)
        @target, @value = [target, value]
      end
    end


    class AdditionExpression < Expression
      attr_accessor :left_expression, :right_expression
      def initialize(left_expression, right_expression)
        @left_expression, @right_expression = [left_expression, right_expression]
      end
    end

After parsing we would end up with an AST containing an `AssignmentExpression` object. The `target` would be `foo` and the `value` would be an `AdditionExpression`, which would have `bar` and `1` as its `left_expression` and `right_expression` respectively. The nice thing about using classes to represent nodes in an AST is that you can easily add custom behaviour to them; for example, the `AdditionExpression` class could easily be "taught" how to perform additions.

#### A syntax for skipping tokens

In order to make the production of ASTs easier we need a syntax for conveniently "skipping" tokens. By this I mean tokens that are expected to be present and which should be consumed during parsing, but which shouldn't end up in the AST. We'll use a syntax much like the one used for defining `optional` tokens in a sequence:

    rule :bracket_expression, '('.skip & :bracket_content & ')'.skip

The `skip` method is used here to indicate that each corresponding parslet must match, that it will consume its input, but that the parslet will produce no output in the AST. Ultimately only the "bracket content" winds up in the AST because that's the part we're interested in.

#### The array problem

The design thus far has adhered to some conventions in the name of simplicity. Consider an expression like the following:

    'foo'.one_or_more

In the name of simplicity this parslet will return an array (`['foo', 'foo', 'foo']`) if multiple matches are found but will return a single string (`'foo'`) if only one match is found. That is, in the single-match case a simplification is being made to make the parse results easier to work with; we could have returned an array with a single element (`['foo']`) but returning a single string is generally more convenient for the person invoking the parslet.

But what happens when we want to parse something like a comma-separated list?

    foo, bar, abc, xyz

Note that we have four words but only three commas. The first three words are followed by a comma and some whitespace but the last word is not. Or to put it another way, the first word is isolated but the last three words are preceded by a comma and whitespace. We could try to parse this using the following parslet sequence:

    /\w+/ & (/\s*,\s*/.skip & /\w+/).zero_or_more

In natural language this means we're looking to parse "a word followed by zero or more other words preceded by a comma with optional whitespace".

Due to the simplifications already described above, this will yield a single element (`'foo'`) in the one-match case and a two-element array (`['foo', 'bar']`) in the two-match case. But in the three and four match cases things break down and we get results which are not in a very usable form (for example, `['foo', ['bar', 'abc', 'xyz']]`; note the nested array). The undesirable nesting takes place because the `zero_or_more` construct itself returns an array when there are multiple matches.

There is no way for the parser to "know" what our intentions are here. Are we interested in the *contents* of the array (multiple objects), or are we after a single container object (the array itself)? The solution is to define another pseudo-operator to explicitly indicate when we're interested in the contents of an array rather than the container itself:

    /\w+/ >> (/\s*,\s*/.skip & /\w+/).zero_or_more

`>>` is chosen because it has a similar precedence to `&` (slightly higher in fact) and it is not already implemented by the `String` or `Array` classes. This pseudo-operator makes use of a `ParsletSequence` subclass, `ParsletMerge`, which takes array results on the right hand side and "merges" their contents into the array on the left hand side. So instead of `['foo', ['bar', 'abc', 'xyz']]` we get what we actually wanted in this case: `['foo', 'bar', 'abc', 'xyz']`.

#### Defining AST nodes

We also need a convenient way for creating node classes for use in the AST. For this we design an abstract `Node` superclass and equip it with a factory method, `subclass`, that churns out custom `Node` subclasses. We could create an `Expression` class using:

    Node.subclass('Expression') # passing in the subclass name as a String
    Node.subclass(:Expression) # passing in the subclass name as a Symbol

We could then go ahead and create our `Expression` subclasses; note how the `Expression` constant has been set and gives us access to the newly created parent class:

    Expression.subclass(:AssignmentExpression, Walrus::Grammar, :target, :value)
    Expression.subclass(:AdditionExpression, Walrus::Grammar, :left_expression, :right_expression)

The second parameter in these calls is the namespace in which we wish to create these `Node` subclasses (`Walrus::Grammar` in this example); this allows us to define multiple grammars without having to worry about clashes with `Node` subclasses between grammars in the event that you want to have more inside the same running process. We can now create new node instances and access their contents as follows:

    addition = AdditionExpression.new('bar', '1')
    assignment = AssignmentExpression.new('foo', addition)
    assignment.target         # 'foo'
    assignment.value          #  AdditionExpression: @left_expression = 'bar', @right_expression = '1'
    addition.left_expression  # 'bar'
    addition.right_expression # '1'

Defining AST node classes can be made even easier by adding some convenience shorthand methods to the `Grammar` class which automatically take care of passing the appropriate namespace to the `subclass` method:

    # create a new Node subclass called Expression:
    node :expression, :node


    # or simply (Node is assumed to be the superclass if no second parameter present):
    node :expression


    # specify that the "addition_expression" rule should produce a node of the AdditionExpression class:
    production :addition_expression, :addition_expression


    # or simply (AdditionExpression is assumed here if missing):
    production :addition_expression


    # create a subclass and assign it to a rule at the same time:
    production :assignment_expression.build(:expression, :target, :value)

So how might this look in the context of a real grammar? Here's a simple grammar that can parse assignment and addition expressions like `foo=1`, `bar=baz` and `abc+1`, as well as allowing expressions to be nested (`foo=bar+1`):

    starting_symbol :expression


    # terminal tokens
    rule            :identifier,      /[a-zA-Z_][a-zA-Z0-9_]*/
    production      :identifier.build(:node)
    rule            :integer_literal, /[0-9]+/
    production      :integer_literal.build(:node)


    # expressions
    rule            :expression,      :assignment_expression | :addition_expression | :identifier | :integer_literal
    node            :expression
    rule            :assignment_expression, :identifier & '='.skip & :expression
    production      :assignment_expression.build(:expression, :target, :value)
    rule            :addition_expression,   (:identifier | :integer_literal) & '+'.skip & :expression
    production      :addition_expression.build(:expression, :summee, :summor)

#### Gobbling up whitespace

One of the problems with my first example above (`foo = bar + 1`) is that it simplifies things by not taking whitespace into consideration. To correctly parse such a statement the parser needs to be able to handle optional whitespace between the tokens. In the comma-separated list example above the included regular expression explicitly consumed optional whitespace between the list items, but ideally you should be able to write grammars without having to explicitly insert optional whitespace parslets between every item in a sequence. We do this by using the `skipping` directive to define an inter-parslet whitespace "gobbler" that will be used within sequences and repetitions in the event that parsing fails:

    rule     :whitespace, /\s+/
    skipping :whitespace

This allows combinations like:

    'foo' & '=' & 'bar'

To match strings like these:

    foo=bar
    foo = bar
    foo= bar
       foo = bar

Internally, the parslet sequence object tries to match the three components, `foo`, `=` and `bar`. If there is a failure trying to pass any of the three components, the parslet sequence will try running the "skipping" parslet (which consumes any intervening whitespace and throws it away) and then retries the failed component. My current implementation is fairly conservative: it only engages this fallback strategy inside parslet sequences and parslet repetitions. I may later apply it to other types of parslet and parslet combinations.

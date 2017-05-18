---
title: Writing a parser generator in Ruby
tags: blog
---

[Ruby](http://www.ruby-lang.org/es/) is my favorite scripting language. Let me clarify: I *like* Ruby; it generates warm fuzzy feelings in my thorax when I think about it. This is quite different from my response to other scripting languages: [Perl](http://www.perl.org/) tends to provoke anything from respect to mild irritation; [PHP](http://php.net/) generates scorn, contempt, sometimes even pity; and [Python](http://python.org/) provokes uncertainty because I don't understand it.





#### Why I like Ruby

So I have an emotional attachment to Ruby even though I've never really done any big projects in it and I am far from being an expert. I like it because everything in Ruby is an object, even literal numbers like `1` and `2` are instances of the `Fixnum` class. `nil`, `true` and `false` are all objects. *Everything*, absolutely everything inherits from `Object`.

Ruby comes with a solid and comprehensive standard library, and the core language itself has implementations of all the primitive object types you're likely to care about: strings, numbers, arrays, hashes, regular expressions and so forth.

Just like Objective-C, Ruby is highly dynamic and its notion of Object-Orientation is based on a message-sending. You can create classes on the fly, add and remove methods, mix-in methods from elsewhere on demand (similar to protocols in Objective-C except that you can actually share the method implementations across classes), and do pretty much anything with the runtime that you want.

There are very powerful flow control mechanisms which include all the usual iterator and loop structures, plus exception raising and rescuing, arbitrary symbol throwing and catching, and the fiendishly powerful continuations (like `setjmp()/longjmp()` on steroids).

It's easy to use a [higher-order messaging](http://www.wincent.com/a/about/wincent/weblog/archives/hom/) programming style in Ruby because the language itself provides built-in syntax for blocks, anonymous functions, closures, and the like. Common HOM patterns like "each", "collect", "select" are easy because classes like `Array` implement them right out of the box.

But to date I haven't taken on any big projects in Ruby even though I have used it for a couple of scripts here (one for reformatting source code which I have bound to a hot-key in Xcode, and one as a post-commit hook script that posts entries to my "[Subversion log](http://www.wincent.com/a/about/wincent/weblog/svn-log/)" every time I do a commit to the repository). When time permits I eventually plan to do a [Ruby on Rails](http://rubyonrails.org/) monster web app to handle absolutely everything on [wincent.com](http://www.wincent.com/) and do away with the complicated mis-mash of independent apps that I'm currently using to run the [weblogs](http://colaiuta.net/), the [wiki](http://kbase.wincent.com/), the [forums](http://forums.wincent.com/), the [bug tracking and feature requests database](http://bugs.wincent.com/), the [lost serial recovery system](https://secure.wincent.com/a/support/registration/), the [mailing lists](http://lists.wincent.com/) and so forth. But before I can even contemplate such a large project I need to become more familiar with the language, and one of the ways I've been doing that is through working on a parser generator.

#### Writing a parser generator

I'm putting together a new [Synergy Advance](http://advance.wincent.com/) release and part of that is preparing a huge amount of documentation. To allow me to concentrate on content rather than presentation details [I've been developing](http://www.wincent.com/a/about/wincent/weblog/archives/2007/01/testdriven_deve.php) an object-oriented templating system.

Part of this involved hand-coding a parser for processing the template language. But as [Terence Parr](http://www.parr.us/terence) (of [ANTLR](http://www.antlr.org/) fame) says (with some irony!), "Why program by hand in five days what you can spend five years of your life automating?".

The thing is, however, Ruby is such a good language that not only can you probably hand-code a parser in five days (while simultaneously learning the language), it makes it feasible to develop a parser *generator* in five-days.

#### An object-oriented parser generator

To get an idea of how quick it can be to whip up a parser in Ruby, check out what I turned up with my very first Google search:

-   [A customizable recursive-descent parser in 250 lines of Ruby](http://www.rubyinside.com/recursive-descent-parser-for-ruby-300.html).
-   A [Packrat parser](http://pdos.csail.mit.edu/~baford/packrat/) in [211 lines of Ruby](http://meta-meta.blogspot.com/2006/04/packrat-parsers.html).

My searches lead me to the [Syngress](http://www.syngress.com/) [Ruby Developer's Guide](http://www.syngress.com/book_catalog/183_ruby/) by Feldt, Johnson and Neumann wherein is described an amazing "parsing library of your dreams" which turns out to be Rockit, by one of the authors. Unfortunately, although Rockit looks absolutely wonderful it remains vaporware for the time being. The book itself talks about "version 0.4" of Rockit but as far as I can tell, this was never released into the wild, and existed only on the author's computer.

The [old Sourceforge project page](http://rockit.sourceforge.net/) is stuck at version 0.3.8 (from 2001) and although the newer [RubyForge project page](http://rubyforge.org/projects/rockit) features version 0.7.2 (from March 2006) there is no Subversion access to see work in progress, and the code that is available is still very incomplete. The included README states:

    Lots of stuff that will be in 0.8.0 is not in this release:



      * Proper memoization (à la packrat)
      * Optimization
      * Error reporting
      * Java grammar
      * Ruby grammar
      * many of the good stuff from older Rockit versions (tree pattern matching, fully automated AST generation etc)

It's more than a little unfortunate that the author chose to describe Rockit as "the parsing library of your dreams", because Rockit largely remains in the world of dreams rather than the real world. Nevertheless, the chapter in the Syngress book is full of little ideas that make you say, "wouldn't it be nice if... (things worked this way)".

#### Design

So I started work on my own parser generator. In doing so I've had my love of the Object-Oriented programming reaffirmed and I've had the great pleasure of learning to work with [RSpec](http://rubyforge.org/projects/rspec/), the amazing Behaviour-Driven Development framework for Ruby.

In this article I'm going to describe the basic building blocks of the parser generator. In a subsequent article I will describe how this can be extended to generate rich Abstract Syntax Trees rather than just generating a "dumb" hierarchy.

#### Parslets

The core idea is to develop "parslets" which are not full parsers in themselves (hence the name) but which are specialized to parse only one, very well-defined thing. Parslets either succeed if the input conforms to their expectations, or they raise an exception.

For example, we could have a `StringParslet` that is specialized in parsing strings. You could create a `StringParslet` configured to parse the word "foobar".

    parslet.parse('foobar') # succeeds!
    parslet.parse('foo') # raises an exception, describing failure to find 'bar' after 'foo'

You could also have `RegexpParslets` which specialize in matching regular expressions. Imagine such a parslet configured to recognize runs of digits (based on the regular expression, `/\d+/`:

    parslet.parse('11223344...') # succeeds
    parslet.parse('') # fails

The first line in the example above would succeed, consuming the digits "11223344" and stopping (the idea is that parsing the remainder of the string would be handed off to another parslet). The second line in the example would fail because there are no digits to consume and the regular expression requires "*at least one* digit" in order to produce a match.

Parslets are very simple objects and they are designed to do a limited task well. To the basic behaviour of parsing (recognizing and consuming characters) we can add simple error reporting (the exception thrown in response to a parsing failure can contain embedded information about exactly where the failure occurred, and how the actual input differed from the expected input).

#### Parslet combinations

As limited as they are, parslets are not very useful in isolation but they can become quite powerful when combined. For example, you could chain together a sequence of parslets into a sequence ("parse 'foo', then 'bar', then a number"), or you could express choices between parslets ("parse 'foo' or 'bar' or a number"), or state repetitions of parslets ("parse one of more 'foo' strings").

You could then nest or combine these parslets to describe complex combinations ("parse 'foo' or 'bar', followed by a number or punctuation, followed by a comma, repeated zero or more times").

So we add a `ParsletCombination` class and a number of subclasses: `ParsletSequence` (for chaining), `ParsletChoice` (for choosing between parslets), `ParsletRepetition` (for specifying the repeat behaviour of a parslet). By using `ParsletCombinations` we keep the parslets themselves simple; they don't have to worry about keeping track of their relationships with other parslets, they can just focus on their own task.

#### Convenience methods

Ruby is highly Object-Oriented (and message-oriented too), and it makes it easy to add methods which look like operators. That is:

    1 + 1

Is actually the message, `+`, being sent to the `1` object, and the parameter passed in is `1`, another object. Likewise:

    "foo" + "bar" # returns "foobar"

Is the message, `+`, being sent to the `"foo"` object with `"bar"` (another object), as the parameter.

Ruby is dynamic too. It allows us to add methods to existing classes and so that means that a method called `&` can be added to the `String` class so that:

    'foo' & 'bar'

Will actually evaluate to a `ParsletSequence` object that will run two `StringParslets` in order, one custom-built to parse the string "foo" and the other for parsing the string "bar". We can perform a similar addition for the `Regexp` class and add a `|` method as well which will serve as a shorthand for creating `ParsletChoice` objects.

    'foo' | 'bar' & /\d+/

This produces a parslet combination that will parse strings like "foo" or "bar99". We can use parentheses too to override precedence:

    ('foo' | 'bar') & /\d+/

This combination would parse strings like "foo1" and "bar2".

Likewise we can add methods for specifying repetition:

    'foo'.zero_or_more
    'bar'.optional
    /\w+\./.repeat(3, 4)

The first example parses "foo" repeated zero or more times (like the `*` metacharacter in regular expressions). The second example parses optional elements (like the `?` metacharacter in regular expressions). The final example is like the `{x, y}` specifier in regular expressions, and it means "match a run of 'word characters' followed by a period between 3 and 4 times".

#### Predicates

Although I didn't know it when I started, I was writing a parser generator that would produce a parser based on a [Parsing Expression Grammar](http://en.wikipedia.org/wiki/Parsing_expression_grammar) (PEG). PEGs are great for expressing the grammar of programming languages. They map well onto the way humans think about parsing a language, and they are completely unambiguous because they consist of a set of ordered (prioritized) choices and a fixed starting symbol.

One of the features of PEGs are predicates. The "and" predicate is a zero-width parsing assertion which succeeds if a match is found, but it doesn't actually consume any characters. We represent this using an `and?` method:

    'foo' & 'bar'.and?

This will match "foo" as long as it is followed by "bar" (but note, the parser only looks ahead at the "bar"; it doesn't actually consume or move past it). Likewise, we can implement a "not" predicate using a `not!` method as follows:

    'foo' & /\d/.not!

This will match "foo" as long as it is *not* followed by a digit. Once again, it's just lookahead and nothing is actually consumed beyond the "foo".

Strictly speaking these method names break slightly with standard Ruby practice that `!` should be used to indicate a message that has some kind of mutating effect on the receiver itself and `?` would normally indicate a message that returns `true` or `false`. Despite the downside of breaking with convention (potentially violating expectations) the readability benefits for the domain-specific language we are developing are just too great to pass up.

#### Domain-Specific languages

With the basic parslets in place along with the various ways of combining them and specifying predicates we now have the ability to parse just about anything that can be described in a PEG. The next bit of Ruby magic that we'll use is what's known as a domain specific language.

Here's an example:

    grammar = Grammar.subclass('CommentGrammar') do
      rule            :comment,         :comment_marker & :comment_body.optional
      rule            :comment_marker,  '##'
      rule            :comment_body,    /.+/
    end

This is an incomplete grammar which describes how to parse comments in a language where comments are defined as a a comment marker, `##`, optionally followed by "stuff".

This is a domain-specific langauge because it looks as though Ruby had syntax in it to support the specific task at hand; those `rule` statements aren't really statements at all; they are message sends to the `rule` method (in the `Grammar` class).

This example also shows off another feature of Ruby: the use of blocks. All the stuff between the `do` and the `end` is code that is passed as a parameter to the `subclass` method of the `Grammar` class. The method creates a brand new subclass on the fly (dynamism) which effectively allows us to define a grammar in its own namespace.

#### Recursion

In the previous example you'll notice that each rule was identified by a symbol (a name preceded by a colon), and that rules could refer to other rules by using their corresponding symbols. The same grammar could have been written like this:

    grammar = Grammar.subclass('CommentGrammar') do
      comment_marker  = '##'
      comment_body    = /.+/
      rule            :comment,         comment_marker & comment_body.optional
    end

But there is one *huge* advantage to using symbols to refer to other rules: it allows us to specify recursive (self-referential) rules, or rules which refer to one another in a circular fashion:

    grammar = Grammar.subclass('NestedGrammar') do
      starting_symbol :bracket_expression
      rule            :left_bracket,        '('
      rule            :right_bracket,       ')'
      rule            :bracket_content,     (/[^()]+/ | :bracket_expression).zero_or_more
      rule            :bracket_expression,  :left_bracket & :bracket_content.optional & :right_bracket
    end

Notice how this simple grammar allows nested parentheses, something that to my knowledge simply can't be done using a regular expression alone. A "bracket expression" can contain just about anything, including other (nested) bracket expressions. The use of symbols allows us to define rules without actually having to fully evaluate them until runtime (or parse time, to be more precise). In this way we can express pretty much anything we want with our PEG.

All of this magic is made possible with a clean syntax due to the power of Ruby continuations. Note that we could have done this without continuations if we had wrapped all symbol references in a "lookup" function:

    rule :one_symbol, 'foo' & lookup(:other_symbol)

This would defer the actual lookup of `:other_symbol` until runtime, but it's not ideal because it clutters up our domain-specific language with implementation details; the author of the grammar shouldn't have to worry about how or when symbol lookup occurs.

Continuations make the cleaner syntax possible because they allow for some extremely sophisticated flow-control, and therefore communication, between our grammar and our `SymbolParslet` (yep, that's right, a specialized parslet dedicated purely to parsing things represented by symbols). Basically, if a `SymbolParslet` doesn't know what its context is (that is, what grammar it belongs to) it doesn't now how to "look up" what the symbol means. It can throw an exception which is caught by the grammar, and the grammar then uses the encapsulated continuation object to jump back to the point where the exception was thrown, this time passing a reference to the grammar itself. Continuations can basically be used to jump from anywhere back to a previously denoted point; as I said above, they're kind of like `setjmp()/longjmp()` on steroids. Normally exceptions are a one-way ticket, but with continuations they can be two-way, and thanks to this flexibility the design of both the grammar and the symbol parslet is kept very simple, and the coupling between them extremely loose and flexible.

#### Abstract Syntax Trees

Up to now I've just talked about parsing as recognition; I haven't said anything about transforming the recognized tokens into a useful structure. In a subsequent article I'll talk about taking those "dumb" tokens (still "dumb" even though they are organized in a hierarchical structure) and mapping them onto custom classes in an Abstract Syntax Tree.

By way of example, the system described so far would parse a simple assignment expression such as "foo = bar + 1" into an ordered, hierarchical tree of tokens using basic types (`String` and `Array` objects):

    ['foo', '=', ['bar', '+', '1']]

Although this tree structure mirrors the actual semantic structure of the input text it doesn't describe it fully (the components are not named or identified in any way; at the lowest level the atoms are just unlabelled strings) and it is not in a very usable form (that is, to actually do any useful work with the parse tree you would have to analyse the structure and decide what to do with it).

Abstract Syntax Trees allow us to produce a much more usable representation of the parsed document. Each component in the hierarchy has a specific type (class) and each type has its own attributes. The example above might be represented using the following AST:

-   Assignment Expression:
    -   lvalue (the assignment target, "foo")
    -   Assignment operator ("="); in reality this element can be omitted from the syntax tree because it's not required to convey meaning.
    -   Addition expression
        -   lvalue ("bar")
        -   Addition operator ("+"); again this element can be omitted from the syntax tree
        -   Numeric literal ("1")

In a subsequent article I will talk about how to specify "productions" which can be added to rules in the grammar so that they know what elements to "produce" in the final AST output. All productions are element subclasses of `Node` and each may have subnodes or other properties. Here object-oriented design again helps us because once these `Node` subclasses can be easily extended to implement the actual behaviour we want to undertake according to what is fed into the parser; that is, the `AdditionExpression` subclass could easily be extended with logic to perform addition.

#### Test-driven and behaviour-driven development insights

Along the way I've had some insights on test and behaviour-driven development. These too will probably have to wait for a separate article but before signing off I'd like to briefly touch on some of the topics.

When I first wrote about [this topic](http://www.wincent.com/a/about/wincent/weblog/archives/2007/01/testdriven_deve.php) I remarked that due to my relative inexperience with Ruby I wanted my development to be more "test-driven" than is usual for me.

Normally I view writing code, writing code-level documentation, and writing unit tests as being three integral, interrelated parts of the development process. In practice I generally move back and forth among them all, and this works well for me in Objective-C/Cocoa. I feel comfortable in that environment and I generally have a clear idea of the right approach to take for any given task; in this context testing mostly serves to confirm the correctness of the code that I've written. It's great: Unit Testing has spared me many a frustrating debugging session.

My pattern this time, however, has been different. Ruby is an interpreted language, not a compiled one, so it makes it much more feasible to adopt a true "test-driven" style. There are no waits for compilation so it is very, very easy to operate in a cycle:

1.  Decide on the next piece of functionality that must be implemented; if the piece of functionality is large then decide on the first step that must be taken towards implementing it.
2.  Write a test that checks that the functionality works as intended.
3.  Run the test; it should fail. If it doesn't then you know your test is incorrect.
4.  Write the code needed to pass the test.
5.  Run the test again; it should pass.

Making sure that the test fails first is important for the following reason: just as it is easy to write broken code, so it is to write broken tests; the extra step provides some assurance that you don't accidentally wind up with broken code and broken tests that pass because the flaws of one complement the other.

Stricly adhering to this pattern in Cocoa would be simply unworkable given the lengthy turn-around times for compiling (a full Synergy Advance build can take 6 minutes or more); I tend to make as many changes as possible between compiles, only compiling when I have a doubt about whether something will work or not. In Ruby, however, it's much more practical to rigorously follow the pattern.

So I started off using [Test::Unit](http://www.ruby-doc.org/stdlib/libdoc/test/unit/rdoc/classes/Test/Unit.html) and doing the best I could to obediently follow the test-driven development pattern. It's worked very well. I've been consistently pleased with the way that simple classes, well-tested, can be assembled to form a complex whole which just works (and by "just works" I mean "simply works", not "barely works"!).

#### "Bolt-on" testing

There are three levels on which you can write tests:

1.  According to the expected functioning of the code under testing: that is, if you have code that adds two numbers, you should plug in values and check that the result of their addition is the one you expect. I often try multiple different values seeking the boundary or edge cases as well as cases that are qualitatively (not quantitatively) different. So if I was working with an array I would most likely test with zero elements, one element, and more than one element because these are all qualitatively different ("plural" is fundamentally different from "singular" and both are different from zero because they don't possess any "zeroness").
2.  According to the documentation for the code under testing: that is, if the API documentation that you write states "raises an exception if passed nil" then you should test that the code actually does what the documentation says it does. You may also chose to test the reverse case (that it doesn't raise when passed a non-nil value).
3.  According to the internal implementation details of the code: that is, if you know the internal workings of a method then you can tailor specific tests that check that these internal bits and pieces are in order.

This last level of testing is actually a bit of an anti-pattern. Just as users of an API shouldn't have to have knowledge of its private implementation details in order to use it, I don't think your tests should be based on or written for "private" knowledge. Your tests should really be about behaviour.

This is where the term "bolt-on" testing comes it. "Bolt-on" testing is what you do when you write tests *after* you write your methods. You look at what the methods do and then "bolt" some tests onto them to try them out. "Bolt-on" testing is an anti-pattern, really, although it is better than no testing at all.

Sometimes it can be tempting to "bolt-on" too many tests, tests that verify irrelevant details that have little to do with the desired behaviour of the class. As one example, before you write a test to verify that the method you call really does return a `String`, ask yourself, "Does this really matter to the behaviour that I'm looking to implement?". Working with Ruby I've learnt to loosen my tests up a fair bit. Rubyists love the flexibility of "Duck typing" and that often means that writing tests for specific classes like `String` is a bad idea. All you want is something that acts (quacks) like a string, so you should really be testing *how it quacks*, not *what* it is. [This is a great article](http://www.lukeredpath.co.uk/2006/8/29/developing-a-rails-model-using-bdd-and-rspec-part-1) that discusses this economy of testing in the context of Rails.

Unlike "bolt-on testing", Behaviour-Driven Development (BDD) helps developers avoid these pitfalls by using language that concentrates on the desired behaviour of the code rather than the implementation details. Whereas a "bolt-on" tester will write code to test each method in a class ("unit" testing in the purest sense because methods are generally the smallest atomic units visible from outside of a class), a behaviour-driven tester will write code that confirms only the externally required behaviour of a class. Code coverage tools can (and probably should) be used to confirm that all code paths are actually being touched, but writing exhaustive per-method tests is often not necessary and can actually be harmful when it comes to refactoring.

BDD is more agile because it is not wedded to implementation details. If the implementation changes the tests (called "specifications" or "specs") shouldn't need to change.

After a few days of working with Test::Unit I decided to switch to RSpec, a fantastic BDD framework for Ruby development. When you use RSpec you write your tests in "contexts", and you "specify" what should happen. This language helps you to test the right things because it focusses your attention on the desired behaviour, the desired *functionality*, rather than the nitty gritty (and in a sense meaningless) *operation* of the code. Behaviour Driven Development is no different than already existing best practice in Test Driven Development, but the language in the framework helps you to do the right thing and the framework itself has some beautiful dynamic code in it that makes your specifications unbelieveably readable.

Where you would write this contrived example in Test::Unit:

    # check that 1 + 2 equals 3
    assert_equal 3, 1 + 2

You could write this in RSpec:

    context 'working with numbers' do
      specify 'should be able to add two integers to obtain a sum' do
        1 + 2.should == 3
      end
    end

Don't let the extra wordiness of the RSpec example put you off. Remember that in a given "context" there will often be many specifications, and you only have to type the context once. The actual test itself is shorter and reads just like English, "one plus two should equal three". There is also no scope for confusion about the order of the parameters like there is in the case of `assert_equal`; note how `assert_equal` requires you to remember that the expected result should go on the left and the actual value on the right.

The syntax for working with exceptions is much neater in RSpec too:

    # Test::Unit
    assert_raise ArgumentError do
      Enumerator.new(nil)
    end



    # RSpec
    context 'creating an enumerator' do
      specify 'should complain if initialized with nil' do
        lambda { Enumerator.new(nil) }.should_raise ArgumentError
      end
    end

Again, don't let the length of the RSpec example put you off. Remember that you only have to write the context once and can use it for many specifications. Also note that the specification serves to clearly document the expected behaviour of the code and that the error message in the event of a failing test will be very clear ("creating an enumerator should complain if initialized with nil"). Also note the highly readable name of the expectation, `should_raise`, and its logical opposite, `should_not_raise`. Compare this with Test::Unit which uses the `assert_raise` which is not very human-language friendly (you could even argue that it is ungrammatical) and whose opposite seemingly arbitrarily breaks the pattern ("assert" followed by a verb) by being called `assert_nothing_raised` ("assert" followed by an adjectival clause).

I've got [an RSpec feature request](http://rubyforge.org/tracker/index.php?func=detail&aid=8126&group_id=797&atid=3152) open for the addition of an `example` keyword as well, which could be nested inside a `specify` block for even greater descriptiveness, and which would mirror the way that I work (testing with multiple values, probing boundary cases and qualitatively different data points):

    context 'applying a regexp to a string' do
      specify 'should be able to match "zero or more" times' do
        example 'for the zero-match case' do ... end
        example 'for the one-match case' do ... end
        example 'for the two-match case' do ... end
      end      
    end

Basically, RSpec is a pleasure to work with, helps you to write the right kind of tests, and boasts excellent integration with [Rake](http://rspec.rubyforge.org/tools/rake.html) (Ruby-style "Makefiles") and [Rcov](http://rspec.rubyforge.org/tools/rcov.html) (code coverage reports). I'm so impressed with it that I am going to see how far I can morph my own Objective-C testing framework, [WOTest](http://test.wincent.com/), towards the behaviour-driven development model.

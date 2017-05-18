---
tags: antlr wiki
---

This page is intended to be a brief summary of [ANTLR](/wiki/ANTLR) grammar problems (warnings), what they mean, and how to solve them.

# Left-recursion

[ANTLR](/wiki/ANTLR) generates top-down recursive descent parsers and so left-recursion is not allowed. Given a rule like:

    foo 
      : foo ';' ;

[ANTLR](/wiki/ANTLR) will complain with:

    Aborting because the following rules are mutually left-recursive: [foo]

Sometimes the left-recursion will be spread out across multiple rules as in the following example:

    foo
      : bar '!'
      | baz '?'
      ;

    bar
      : foo '...'
      ;

    baz
      : FOO
      ;

In this case [ANTLR](/wiki/ANTLR) complains with:

    Aborting because the following rules are mutually left-recursive: [foo, bar]

Left-recursion is always a fatal error and so requires that the grammar be modified in such a way as to completely remove the left recursion. For example, left recursion can often be replaced with repetition operators. About the only instance in which the ability to specify left-recursive rules would be nice is when describing arithmetic expression operators; the only way to do this in a recursive-descent parser is by splitting things up into multiple rules in order to encode precedence relationships among the operators, and carefully choosing repetition for left-associative operators and tail-recursion for right-associative operators as shown in this brief example:

    expression
      : multiplicative_expression ('+' multiplicative_expression)*
      ;

    multiplicative_expression
      : exponent_expression ('*' exponent_expression)*
      ;

    exponent_expression
      : ATOM ('^' exponent_expression)?
      ;

Note the following:

-   Addition and multiplication are left-associative due to repetition (`*`)
-   Exponentiation is right-associative due to the tail recursion
-   Operator precedence is encoded in the nesting of the rules: as the rules nest deeper and deeper, the operator matched by the rule has a higher precedence (in this case the precedence, from lowest to highest, is `+`, `*`, `^`)

As can be seen in the arithmetic expression example above, other types of recursion are often fine. For example, if the recursed element is not the leftmost in an alternative then it is no longer left-recursive:

    foo
      : '(' foo ')' // no longer left recursive
      | expr
      ;

Having said this, recursion is very difficult to get right and is probably one of the most common causes of grammar problems; see the further sections for descriptions of possible problems.

# Ambiguity

All ambiguities lead to non-determinisms (see next section).

Non-reachable alternative

# Non-determinism

As already stated, all ambiguities lead to non-determinism; but there are some non-determinisms that do not arise from ambiguous rules in a grammar.

# Non-LL(\*) decisions

## hello world == I was naughty

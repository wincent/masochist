---
tags: haskell
---

# Comments

    -- comments start with two consecutive hyphens

# Truth values

    True
    False

# Types

**Constructor identifiers** are used to name types; they must start with a capital letter.

-   `Integral` class; two possible types:
    -   `Int` (fixed precision, overflow on hitting an architecture-specific size)
    -   `Integer` (arbitrary precision, unbounded)
-   `Float` (floating point type)
-   `Double` (higher precision than `Float`)
-   `Bool` (boolean type)
-   `Char` (character type)
-   `String` (convenience type, equivalent to a list of `Char` types: `[Char]`)

Compare this with **variable identifiers** which are used to name functions; they must start with a lowercase letter. Identifier names are case-sensitive.

New types can be formed as follows:

-   By list-formation eg. for type `a`, `[a]` is the type, "list of `a`"
-   By tuple-formation eg. type `(a, b)` is the type, "a pair of type `a` then type `b`" (works for pairs, triples, quadruples and so forth)
-   By function definition eg. type `a -> b` is the type of the function that expects arguments of type `a` and has a return value of type `b`
-   Custom types defined using `data`

# Definition, identity and non-identity

-   "defined as": `=`
-   "identity": `==`
-   "non-identity: `/=`

Types with which you can test for identity belong to the `Eq` class; types for which you can make ordinality comparisons are said to belong to the `Ord` class (a subclass of `Eq`):

-   `>`
-   `>=`
-   `<`
-   `<=`

A [Haskell](/wiki/Haskell) **equation** takes the form of `foo t = ...`, where `foo` is a **function** and `t` is an argument; arguments may be multiple:

    -- this equation defines an "add" function
    add x y = x + y

    -- and this is how the function would be used:
    add 10 15

An optional-but-recommended, explicit **type declaration** could be prepended to the `add` function as follows:

    -- indicate that two Integer input parameters are expected, and the result is an Integer too
    add :: Integer -> Integer -> Integer

# Operators

-   Addition: `+`
-   Greater-than: `>`
-   Exponentiation: `^`
-   Less-than-or-equal-to: `<=`

# Equation guarding and the condition operator

`|` is the Haskell condition operator. It is used in the following example function to determine which equation in the definition of the function, `foo`, should apply, depending on the input parameters:

    -- raises x to the y if x and y sum to less than 100
    -- otherwise multiplies x and y
    foo x y | x + y < 100 = x ^ y
            | otherwise   = x * y

This is actually a shorthand for the longer form:

    foo x y | x + y < 100 = x ^ y
    foo x y |             = x * y

# Keywords

These are reserved keywords which cannot be used as function names:

-   `case`
-   `class`
-   `data`
-   `default`
-   `deriving`
-   `do`
-   `else`
-   `if`
-   `import`
-   `in`
-   `infix`
-   `infixl`
-   `infixr`
-   `instance`
-   `let`
-   `module`
-   `newtype`
-   `of`
-   `then`
-   `type`
-   `where`
-   `_`


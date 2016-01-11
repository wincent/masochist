---
tags: haskell
---

Notes made while (re-)learning Haskell in 2016.

# Resources

## Books

- [Learn You a Haskell for Great Good!](http://learnyouahaskell.com/) (readable online for free)
- [Haskell Programming from first principles](http://haskellbook.com/) (still in early access)
- [Real World Haskell](http://book.realworldhaskell.org/) (O'Reilly, readable online for free)

## Practice problems

- [H-99: Ninety-Nine Haskell Problems](https://wiki.haskell.org/99_questions)
- [Project Euler](https://projecteuler.net/index.php?section=problems)

## Tutorials

- [Write Yourself a Scheme in 48 Hours](https://en.wikibooks.org/wiki/Write_Yourself_a_Scheme_in_48_Hours)
- [Hitchhikers guide to Haskell](https://wiki.haskell.org/Hitchhikers_guide_to_Haskell)

## Reference

- [What I Wish I Knew While Learning Haskell](http://dev.stephendiehl.com/hask/)
- [Typeclassopedia](https://wiki.haskell.org/Typeclassopedia)

## Meta: How to learn Haskell

- [A Stack Overflow guide with 1,876 upvotes](http://stackoverflow.com/a/1016986/2103996)
- "[How to Learn Haskell](https://acm.wustl.edu/functional/haskell.php)"

# Notes

## Installation

```
$ brew install ghc cabal-install
```

## Command line

```
$ ghci              # Start a REPL.
$ runhaskell src.hs # Run code without separate compilation step.
$ ghc --make src.hs # Compile.
$ ghc-pkg list      # See installed packages.
```

# `ghci`

- `:?`: show help
- `:cd [directory]`: change working directory
- `:info [name]`: show information about `name` (a type, a typeclass, a binding etc)
- `:load [path]`: load module from `path` (relative to working directory, or absolute, with or without `.hs` extension)
- `:m +[module]`: load `module`
- `:set +t`: show type information for each evaluated expression
- `:set prompt "ghci> "`: override default prompt
- `:show bindings`: show all bound variables
- `:type [expression]` (`:t [expression]`): show the type for the given expression
- `:unset +t`: don't show type information
- `it`: variable bound to the value of the last evaluated expression

## Prelude functions

- `&&` :: `Bool -> Bool -> Bool` &hellip; _short-circuiting boolean operator._
- `++` :: `[a] -> [a] -> [a]`
- `break` :: `(a -> Bool) -> [a] -> ([a], [a])` &hellip; _breaks a list into two (consumes input while predicate fails)._
- `span` :: `(a -> Bool) -> [a] -> ([a], [a])` &hellip; _breaks a list into two (consumes input while predicate succeeds)._
- `ceiling` :: `(Integral b, RealFrac a) => a -> b`
- `splitAt` :: `Int -> [a] -> ([a], [a])`
- `takeWhile` :: `(a -> Bool) -> [a] -> [a]`
- `dropWhile` :: `(a -> Bool) -> [a] -> [a]`
- `compare` :: `Ord a => a -> a -> Ordering`
- `concat` :: `Foldable t => t [a] -> [a]`
- `drop` :: `Int -> [a] -> [a]`
- `elem` :: `(Eq a, Foldable t) => a -> t a -> Bool`
- `zip` :: `[a] -> [b] -> [(a, b)]`) &hellip; _also has variants for up to 7 lists (`zip7`)._
- `zipWith` :: `(a -> b -> c) -> [a] -> [b] -> [c]`) &hellip; _also has variants for up to 7 lists (`zipWith7`)._
- `notElem` :: `(Eq a, Foldable t) => a -> t a -> Bool`
- `error` :: `[Char] -> a`
- `floor` :: `(Integral b, RealFrac a) => a -> b`
- `fromIntegral` :: `(Integral a, Num b) => a -> b`
- `fst` :: `(a, b) -> a`
- `head` :: `[a] -> a` &hellip; _first element of list (raises an exception if applied to an empty list)_
- `init` &hellip; _all but last element of a list (raises exception if applied to an empty list)_
- `last` &hellip; _last element of a list (raises exception if applied to an empty list)_
- `length` :: `Foldable t => t a -> Int`
- `lines` :: `String -> [String]`
- `mod` :: `Integral a => a -> a -> a` &hellip; _modulo (remainder after division)_
- `filter` :: `(a -> Bool) -> [a] -> [a]`
- `not` :: `Bool -> Bool`
- `null` :: `Foldable t => t a -> Bool` &hellip; _indicates whether a list is empty_
- `odd` :: `Integral a => a -> Bool`
- `even` :: `Integral a => a -> Bool`
- `map` :: `(a -> b) -> [a] -> [b]` &hellip; _but consider using `fmap` instead._
- `negate` :: `Num a => a -> a`
- `pred` :: `Enum a => a -> a`
- `print` :: `Show a => a -> IO ()`
- `read` :: `Read a => String -> a`
- `show` :: `Show a => a -> String`
- `readFile` :: `FilePath -> IO String`
- `reverse` :: `[a] -> [a]`
- `round` :: `(Integral b, RealFrac a) => a -> b`
- `snd` :: `(a, b) -> b`
- `sqrt` :: `Floating a => a -> a`
- `succ` :: `Enum a => a -> a`
- `tail` :: `[a] -> [a]` &hellip; _non-head part of list (raises an exception if applied to an empty list)_
- `take` :: `Int -> [a] -> [a]`
- `truncate` :: `(Integral b, RealFrac a) => a -> b`
- `unlines` :: `[String] -> String`
- `words` :: `String -> [String]`
- `unwords` :: `[String] -> String`
- `||` :: `Bool -> Bool -> Bool` &hellip; _short-circuiting boolean operator_
- `and` :: `Foldable t => t Bool -> Bool`
- `or` :: `Foldable t => t Bool -> Bool`
- `all` :: `Foldable t => (a -> Bool) -> t a -> Bool`
- `any` :: `Foldable t => (a -> Bool) -> t a -> Bool`
- `seq` :: `a -> b -> b` &hellip; _force non-lazy evaluation of first argument, then return second argument_
- `intercalate` :: `[a] -> [[a]] -> [a]`

## `Data.Bits`

- `.|.` :: `Bits a => a -> a -> a`
- `.&.` :: `Bits a => a -> a -> a`
- `shiftL` :: `Bits a => a -> Int -> a`
- `shiftR` :: `Bits a => a -> Int -> a`

## `Data.Char`

- `digitToInt` :: `Char -> Int`
- `ord` :: `Char -> Int`
- `toUpper` :: `Char -> Char`

## `Data.List`

- `isInfixOf` :: `Eq a => [a] -> [a] -> Bool`
- `isPrefixOf` :: `Eq a => [a] -> [a] -> Bool`
- `isSuffixOf` :: `Eq a => [a] -> [a] -> Bool`
- `tails` :: `[a] -> [[a]]` &hellip; _returns all tails of a list_

## Data.ratio

- `%` :: `Integral a => a -> a -> Ratio a`

## `Debug.Trace`

- `trace` :: `String -> a -> a`

## `Numeric`

- `showHex` :: `(Integral a, Show a) => a -> ShowS`

## Syntax

- `--`: begin a single-line comment
- `{- ... -}`: in-line comment
- `if`/`then`/`else`: conditional expression
- `$`: function application (low precedence)
- `.`: function composition
- `let` + `in`: create bound variables with the scope of an expression
- `where`: like `let`, but at top level of equation; not an expression
- `case (something) of (pattern) -> expression`: pattern matching within expressions
- `|`: guard (additionally restricts a pattern match)
- `` `fn` `` (backticks): apply `fn` in infix position
- `foo@(x:xs)` ("as-pattern"): refer to entirety of pattern match contents
- `::`: disambiguate a type (eg. `read "5" :: Double`)

## Importing modules

```
import Data.Set -- import everything from Data.Set (unqualified dump into top-level scope)
import Data.Set (member, union) -- import only named bindings
import qualified Data.Set -- import everything, but bound as Data.Set.{name}
import qualified Data.Set as Set -- import using an alias Set.{name}
import qualified Data.Set as Set (member, union) -- partial, aliased, qualified import
```

## Defining modules

```
-- Simple: Foo.hs
module Foo (bar, baz) where
  bar = 1
  baz = id

-- Nested: Bar/Baz.hs
module Bar.Baz (
  , Thing -- export (abstract/opaque) type but not constructor(s)
  , Other(..) -- exports type and constructors (for pattern matching etc)
  , x
  ) where
  data Thing = Thing Int
  data Other = Other String
  x = 2
```

## Types

- `Double`: double-precision floating point.
- `Float`: single-precision floating point.
- `Int`: fixed precision _signed_ integer (bounds are architecture-dependent and given by `maxBound :: Int` and `minBound :: Int`).
- `Word`: fixed precision _unsigned_ integer (bounds: `minBound :: Word` &mdash; ie. 0 &mdash; and `maxBound :: Word`).
- `Integer`: arbitrary precision integer.

## Defining new types

```
-- "Thing" type constructor (for pattern matching)
-- "Thing" value constructor (for creating values of the type)
data Thing = Thing Int String [String]
             deriving (Eq, Show)

-- Record syntax (note: no trailing comma allowed)
data Thing = Thing {
          customerID :: CustomerID,
          customerName :: String,
          customerAddress :: [String]
        } deriving (Eq, Show)

-- Create values using either named fields:
myThing = Thing { customerID = 1234, customerName = "Jane", customerAddress = ["PO Box 1"] }

-- Or anonymous, ordered fields:
myThing = Thing 1234 "John" ["1 Infinite Loop"] 

-- Algebraic types with multiple value constructors
data PaymentRecord = CreditCard | CashAccount
data Color = Red | Green | Blue deriving (Eq, Show)

-- Create a synonym for an existing type
type RecordLocator = String

-- Same, but for a tuple
type ContactDetails = (Name, PhoneNumber, Address)

-- Wrap a type to present it as something else (eg. List as ZipList).
-- Can only have one value constructor, and constructor can only have one field.
newtype ZipList a = ZipList { getZipList :: [a] }
newtype CharList = CharList { getCharList :: [Char] } deriving (Eq, Show)
```

## Pattern matching

```
-- Multiple function definitions matching on type constructors
sumList (x:xs) = x + sumList xs
sumList [] = 0

-- Note we could also have written that last one as:
sumList _ = 0
```

## Pragmas

Enabled with `{-# LANGUAGE p1, p2... #-}`, where `p1`, `p2` etc are drawn from:

- `TypeSynonymInstances`: Allow specialized polymorphic types (eg. `String` or `[Char]`) to be instances of a typeclass (as opposed to just `[a]`).
- `OverlappingInstances`: Given two instances that overlap (eg. `[a]` and `[String]`), choose the more specific one.

## Functors (`Functor` typeclass)

Implement `fmap :: (a -> b) -> f a -> f b` and comply with the two functor laws:

1. `fmap id` must equal `id`.
2. `fmap (p . q)` must equal `(fmap p) . (fmap q)`.

Example functors:

- Lists.
- Functions.

## Applicative functors (`Applicative` typeclass)

- Implement `pure` (wraps value in applicative).
- Implement `<*>` (`(Applicative f) => f (a -> b) -> f a -> f b`).
- Additionally, `<$>`, which is an infix `fmap`.
- Note that all applicatives are functors.

Example applicative functors:

- Lists.

## Monoids (`Monoid` typeclass)

- Implement a `mappend` binary function (`m -> m -> m`).
- The function must be associative (ie. `(3 + 4) + 5` is equivalent to `3 + (4 + 5)`).
- There must be an identity value (`mempty`) that when applied to either side of the function returns the other value unmodified.
- Implement an `mconcat` (`[m] -> m`) function that flattens (eg. `foldr mappend mempty`).

Example monoids:
- Lists.
- `Product` (ie. `Num` `newtype` with `mempty`: `1` and `mappend`: `*`).
- `Sum` (ie. `Num` `newtype` with `mempty`: `0` and `mappend`: `+`).
- `Any` (ie. `Bool` with `mempty`: `False` and `mappend`: `||`).
- `All` (ie. `Bool` with `mempty`: `True` and `mappend`: `&&`).
- `Ordering`.
- `Maybe`.

## Monads

Applicative functors (enforced by type constraint as of GHC 7.10) that additionally define `>>=`, or "bind" (ie. `(Monad m) => m a -> (a -> m b) -> m b`).

Example monads:
- `Either`.

- `Maybe`.
- `Either`.
- `[]`.
- `IO`.

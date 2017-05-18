---
tags: antlr wiki
cache_breaker: 1
---

This page provides an overview of the different types of predicate available in [ANTLR](/wiki/ANTLR):

# Syntactic predicates

-   Specifies the syntactic validity of applying an alternative
-   Indicate syntactic context that must be satisfied in order for an alternative to match
-   Automatically look ahead at future input to help make decisions (arbitrary lookahead)
-   Used to order a rule's alternatives (specify precedence among rules that would otherwise be ambiguous); this would suggest that it makes no sense to apply syntactic predicates in a rule with only one alternative and experience seems to confirm this (see [PEG-style predicates in ANTLR](/wiki/PEG-style_predicates_in_ANTLR) for example)
-   First alternative that matches wins
-   Put another way, syntactic predicates indicate where backtracking may occur
-   Take the form: `(...)=>` where `...` is a grammar fragment
-   May only appear on the extreme left edge of an alternative
-   In a rule with many alternatives, the last rule does not need an explicit predicate (it is assumed to be the default if nothing else matches)
-   Similarly, in a rule with many alternatives, if some of the rules are not mutually ambiguous then they don't need explicit predicates either
-   The `backtrack = true` option may be used to have ANTLR automatically insert syntactic predicates on alternatives that do not already have a user-specified predicate
-   The overhead of backtracking may be amortized by turning on memoizing, preferably on a per-rule basis (the `memoize = true` option)
-   Actions are not executed during backtracking
-   Under the covers use a "pushdown machine" rather than a [DFA](/wiki/DFA) (as in normal LL(\*) parsing), so are more powerful recognizers (they can recognize context-free structures, unlike [DFAs](/wiki/DFAs) which cannot recognize recursive structures and are equivalent in power to regular expressions)
-   Explicitly specified syntactic predicates are implemented in ANTLR using gated semantic predicates behind the scenes
-   Implicitly added syntactic predicates (added for auto-backtracking) are implemented using normal disambiguating semantic predicates and are therefore only evaluated when LL(\*) fails to predict an alternative
-   Documented in Chapter 14 of the [ANTLR book](/wiki/ANTLR_book) (starting on page 331)

## Example

Here is an example [lexer](/wiki/lexer) rule that uses a syntactic predicate to order two ambiguous alternatives:

    CRLF
      : ('\r'? '\n')=> '\r'? '\n'
      | '\r'
      ;

This will match `\r\n`, `\r` or `\n`, even in the same file (even if a file has mixed line endings). Without the syntactic predicate [ANTLR](/wiki/ANTLR) doesn't know what to do when faced with input such as `\r\n` (is it two `CRLF` tokens or one?); with the predicate [ANTLR](/wiki/ANTLR) doesn't issue an ambiguity warning and always chooses the longest match (`\r\n`) if possible.

# Semantic predicates

-   Specifies the semantic validity of applying an alternative
-   Are boolean expressions in the target language that are evaluated at runtime
-   Used to guide recognition
-   Enforce non-syntactic rules (rules for which mere syntax is not enough to describe a valid sentence)
-   Help to recognize context-sensitive language constructs
-   Are "hoisted" up into other rules when necessary to inform the decision making process
-   Must be free of side effects
    -   Must be possible to repeatedly evaluate them and get the same result
    -   Evaluation order must not matter
-   Should not reference local variables or parameters (because this would break hoisting)
-   Documented in Chapter 13 of the [ANTLR book](/wiki/ANTLR_book) (starting on page 317)

## Validating semantic predicates

-   Look like normal actions but are followed immediately by a question mark `{..}?`
-   `...` is a boolean expression written in the target language; if it evaluates to false then a `FailedPredicateException` is thrown

## Gated semantic predicates

-   Precede alternatives and are written as `{...}?=>` where `...` is a boolean expression written in the target language
-   When evaluating to false, effectively disable the alternative, making it invisible to the recognizer (no exception is thrown)
-   Put another way, they dynamically "turn on" or "turn off" portions of a grammar
-   Always hoisted, even when decisions are deterministic
-   Useful when you want to distinguish between alternatives that are *not* syntactically ambiguous
-   May only appear in rules that actually have multiple alternatives
-   May be used in [lexer](/wiki/lexer) and [parser](/wiki/parser) rules

## Disambiguating semantic predicates

-   Precede alternatives and are written as `{...}?`
-   Used in making prediction decisions
-   Are only used (evaluated) when syntax alone is insufficient to distinguish between alternatives
-   Put another way, they disambiguate syntactically identical alternatives
-   Unlike gated semantic predicates may be used in rules which have only one alternative
-   Are hoisted into rules higher up in the decision chain when LL(\*) lookahead alone is not sufficient to distinguish between alternatives
-   Unlike gated semantic predicates, are not hoisted for deterministic decisions
-   Only predicates reachable from the left edge without consuming an input symbol are hoisted
-   To fully resolve a non-determinism, all alternatives must be covered by a disambiguating predicate
-   As a special case, if the last (and only the last) conflicting alternative is not covered then ANLTR implicitly covers it as a "default"
-   Predicated alternatives specified earlier have precedence over those specified later; that is, the semantic predicates are evaluated in the order specified in the alternatives in the grammar
-   Multiple predicates may be specified for a single alternative:

<!-- -->

    rule
      : {pred1}? {pred2}? TOK // both pred1 and pred2 must evaluate to true
      | {pred3}? TOK
      ;

# See also

-   [PEG-style predicates in ANTLR](/wiki/PEG-style_predicates_in_ANTLR)

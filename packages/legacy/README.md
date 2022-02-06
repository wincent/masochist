# `@masochist/legacy`

Holding pen for code that isn't actively used in the current version of Masochist, but which we want to stick around for other purposes, such as running benchmarks[^example].

[^example]: For example, we keep [the "dynamic" lexer](./src/lex.ts) (so called because it is dynamically instantiated at runtime using a DSL and effectively runs as an interpreter for that DSL) so that we can compare it to [the "static" (DFA-powered) lexer](../lexer) that is currently built using `@masochist/lexer`.

This is an experimental rewrite of [Masochist](https://github.com/wincent/masochist).

Points of interest and areas for exploration:

- Extremely minimal GraphQL client/compiler/server.
- Streaming responses.
- TypeScript.
- Minimal dependency footprint.

## Packages

- [`benchmark`](packages/benchmark): Benchmarks for the GraphQL lexer and parser[^benchmark].
- [`client`](packages/client): Client-side code.
- [`codegen`](packages/codegen): Tools for emitting TypeScript (AST, pretty printer, visitor/transformer).
- [`common`](packages/common): Utilities used by other packages.
- [`compiler`](packages/compiler): Produces GraphQL-derived artifacts for use at runtime.
- [`graphql`](packages/graphql): GraphQL lexer and parsers for schema definitions and executable documents.
- [`legacy`](packages/legacy): Previous (dynamic) version of GraphQL lexer and parser (not a current part of Masochist; intended for use only in comparative benchmarks).
- [`lexer`](packages/lexer): Generator for fast DFA-based lexers.
- [`parser`](packages/parser): Generator for fast LALR(1) parsers.
- [`server`](packages/server): Server-side code.
- [`typescript`](packages/typescript): Defines a lexer and parser for recognizing a subset of TypeScript (used in conjunction with `codegen` package to produce generated files; lexers, parsers etc[^etc]).

[^benchmark]: For comparison, benchmarks run against the dynamic (legacy) lexer and parser, the reference — ie. [graphql-js](https://github.com/graphql/graphql-js) — lexer and parser, the static lexer and parser, and the table-based parser.
[^etc]: At the time of writing, we're only generating lexers and parsers, but in the future anticipate potentially generating other things such as custom field resolvers etc.

![Dependency graph](./docs/packages-dark.svg#gh-dark-mode-only)
![Dependency graph](./docs/packages-light.svg#gh-light-mode-only)

## Development

Most development tasks can be completed with `bun`:

- `bun tsc`: Performs TypeScript build (ie. `tsc --build --emitDeclarationOnly`).
- `bun tsc:clean`: Removes TypeScript build products (ie. `tsc --build --clean`).
- `bun tsc:dry`: Report what would be built without making changes (ie. `tsc --build --dry`).
- `bun tsc:force`: Build even if built TypeScript projects are up-to-date (ie. `tsc --build --force --emitDeclarationOnly`).
- `bun tsc:watch`: Build TypeScript in "watch" mode (ie. `tsc --build --watch --emitDeclarationOnly`).
- `bun format`: Format all source files with Prettier.
- `bun format:check`: Checking formatting of all source files.
- `bun lint`: Run TypeScript (`tsc`-powered) lints.
- `bun test`: Run test suite.

[^once]: Needed only once per checkout.

A Make-based interface also exists for some operations:

- `make`: Performs TypeScript build if necessary.
- `make debug`: Prints debug information for troubleshooting the Makefile dependency graph.
- `make diagrams`: Builds state machine diagrams in [`packages/graphql/lexer/diagrams/`](packages/graphql/lexer/diagrams/) and [`packages/typescript/lexer/diagrams`](packages/typescript/lexer/diagrams).
- `make docs`: Updates dependency graph images for this README.
- `make graphql`: Generates static lexer ([`packages/graphql/src/lex.ts`](packages/graphql/src/lex.ts)) and parsers ([`packages/graphql/src/parseDocument.ts`](packages/graphql/src/parseDocument.ts) and [`packages/graphql/src/parseSchema.ts`](packages/graphql/src/parseSchema.ts)).
- `make typescript`: Generates static TypeScript lexer ([`packages/typescript/src/lex.ts`](packages/typescript/src/lex.ts)) and parsers ([`packages/typescript/src/parseExpression.ts`](packages/typescript/src/parseExpression.ts) and [`packages/typescript/src/parseStatement.ts`](packages/typescript/src/parseStatement.ts)).
- `make clean`: Removes all built products (TypeScript outputs + lexer diagrams).

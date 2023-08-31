This is an experimental rewrite of [Masochist](https://github.com/wincent/masochist).

Points of interest and areas for exploration:

- Extremely minimal GraphQL client/compiler/server.
- Streaming responses.
- TypeScript.
- Minimal dependency footprint.

## Packages

- `benchmark`: Benchmarks, profilers, and "deopt" analyzers for the GraphQL lexer and parser[^benchmark].
- `client`: Client-side code.
- `codegen`: Tools for emitting TypeScript (AST, pretty printer, visitor/transformer).
- `common`: Utilities used by other packages.
- `compiler`: Produces GraphQL-derived artifacts for use at runtime.
- `graphql`: GraphQL lexer and parsers for schema definitions and executable documents.
- `legacy`: Previous (dynamic) version of GraphQL lexer and parser (not a current part of Masochist; intended for use only in comparative benchmarks).
- `lexer`: Generator for fast DFA-based lexers.
- `parser`: Generator for fast LALR(1) parsers.
- `server`: Server-side code.
- `typescript`: Defines a lexer and parser for recognizing a subset of TypeScript (used in conjunction with `codegen` package to produce generated files; lexers, parsers etc[^etc]).

[^benchmark]: For comparison, benchmarks run against the dynamic (legacy) lexer and parser, the reference — ie. [graphql-js](https://github.com/graphql/graphql-js) — lexer and parser, the static lexer and parser, and the table-based parser.
[^etc]: At the time of writing, we're only generating lexers and parsers, but in the future anticipate potentially generating other things such as custom field resolvers etc.

![Dependency graph](./docs/packages-dark.png#gh-dark-mode-only)
![Dependency graph](./docs/packages-light.png#gh-light-mode-only)

## Development

Most development tasks can be completed with `yarn`:

- `corepack enable`: To ensure appropriate Yarn version selection[^once].
- `yarn build`: Performs TypeScript build (ie. `tsc --build`).
- `yarn build:clean`: Removes TypeScript build products (ie. `tsc --build --clean`).
- `yarn build:dry`: Report what would be built without making changes (ie. `tsc --build --dry`).
- `yarn build:force`: Build even if built TypeScript projects are up-to-date (ie. `tsc --build --force`).
- `yarn build:watch`: Build TypeScript in "watch" mode (ie. `tsc --build --watch`).
- `yarn format`: Format all source files with Prettier.
- `yarn format:check`: Checking formatting of all source files.
- `yarn lint`: Run TypeScript (`tsc`-powered) lints.
- `yarn test`: Run test suite using Jest.

[^once]: Needed only once per checkout.

A Make-based interface also exists for some operations:

- `make`: Performs TypeScript build (via `tsc build`) if necessary.
- `make diagrams`: Builds state machine diagrams in `packages/graphql/lexer/diagrams/`.
- `make graphql`: Generates static lexer (`packages/graphql/src/lex.ts`).
- `make clean`: Removes all built products (TypeScript outputs + lexer diagrams).

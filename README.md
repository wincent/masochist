This is an experimental rewrite of [Masochist](https://github.com/wincent/masochist).

Points of interest and areas for exploration:

- Extremely minimal GraphQL client/compiler/server.
- Streaming responses.
- TypeScript.
- Minimal dependency footprint.

## Development

Most development tasks can be completed with `yarn`:

- `yarn build`: Performs TypeScript build (ie. `tsc --build`).
- `yarn build:clean`: Removes TypeScript build products (ie. `tsc --build --clean`).
- `yarn build:dry`: Report what would be built without making changes (ie. `tsc --build --dry`).
- `yarn build:force`: Build even if built TypeScript projects are up-to-date (ie. `tsc --build --force`).
- `yarn build:watch`: Build TypeScript in "watch" mode (ie. `tsc --build --watch`).
- `yarn format`: Format all source files with Prettier.
- `yarn format:check`: Checking formatting of all source files.
- `yarn lint`: Run TypeScript (`tsc`-powered) lints.
- `yarn test`: Run test suite using Jest.

A Make-based interface also exists for some operations:

- `make`: Performs TypeScript build (via `tsc build`) if necessary.
- `make diagrams`: Builds state machine diagrams in `packages/lexer/diagrams/`.
- `make lexer`: Generates static lexer (`packages/lexer/src/lex.ts`).
- `make clean`: Removes all built products (TypeScript outputs + lexer diagrams).

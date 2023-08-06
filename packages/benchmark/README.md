# `@masochist/benchmark`

## Usage

#### Benchmarking

```
yarn benchmark                  # Prints usage information.

yarn benchmark:dynamic:lexer    # Runs the dynamic (legacy) lexer benchmarks.
yarn benchmark:reference:lexer  # Runs the reference lexer benchmarks.
yarn benchmark:static:lexer     # Runs the static lexer benchmarks.

yarn benchmark:dynamic:parser   # Runs the dynamic (legacy) parser benchmarks.
yarn benchmark:reference:parser # Runs the reference parser benchmarks.
yarn benchmark:static:parser    # Runs the static parser benchmarks.
yarn benchmark:table:parser     # Runs the table-based parser benchmarks.
```

#### Profiling

```
yarn profile:dynamic:lexer   # Gathers profile information for the dynamic (legacy) lexer.
yarn profile:reference:lexer # Gathers profile information for the reference lexer.
yarn profile:static:lexer    # Gathers profile information for the static lexer.

yarn profile:dynamic:parser  # Gathers profile information for the static lexer.
```

#### Analyzing "deopts"

```
yarn profile:deopt:dynamic:lexer   # Shows deopt information for the dynamic (legacy) lexer.
yarn profile:deopt:reference:lexer # Shows deopt information for the reference lexer.
yarn profile:deopt:static:lexer    # Shows deopt information for the static lexer.

yarn profile:deopt:dynamic:parser  # Shows deopt information for the dynamic (legacy) parser.
```

Another view of the deopt information can be had with [v8-deopt-viewer](https://github.com/andrewiggins/v8-deopt-viewer). At the time of writing, the most recent release is not compatible with Node v16-ish (not sure of the exact version where things broke), but the `master` branch is, so you can use it with:

```
cd packages/benchmark
node --log-ic --logfile=v8.log --no-logfile-per-isolate lib/benchmark-static-lexer.js

cd $code
git clone https://github.com/andrewiggins/v8-deopt-viewer.git
cd v8-deopt-viewer
yarn
(cd packages/v8-deopt-webapp && yarn build)
node_modules/.bin/v8-deopt-viewer -i $path_to_v8_log
(cd v8-deopt-viewer && python3 -m http.server)
open http://localhost:8000
```

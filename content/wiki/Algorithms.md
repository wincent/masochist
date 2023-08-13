---
tags: wiki algorithm
title: Algorithms
---

Occasionally I'm faced with a programming problem for which I know a particular algorithm is appropriate, and I know that I've implemented that algorithm or data structure before. Sometimes though, it can be hard to remember exactly where I did it, but it would be useful to be able to consult my previous work to either reuse it or guide a reimplementation of it.

So, in this article I'm going to provide some links to implementations of various algorithms, data structures, techniques, and utilities that I've implemented in open source repos. All links are to concrete commit hashes, to make sure the links never break if files move around, but be aware that iteration may have continued afterwards and that if you want to see the latest, you should check to see whether there were any subsequent changes.

## Data structures

- ["Poppable" Set in JavaScript](https://github.com/wincent/masochist/blob/2872a7b46039c2ef708e47f214e94e5167a341b4/src/server/redis/RedisConnectionPool.js#L3-L10) (ie. `Set` which supports "popping" the oldest item).
- ["Reversible" Map in JavaScript](https://github.com/liferay/liferay-frontend-projects/blob/8271bd2398fa26c4987cbd8426615bcb22ee1507/projects/npm-tools/packages/npm-scripts/src/jsp/ReversibleMap.js) (ie. `Map` which remembers intermediate states and can be rolled back).
- ["Reversible" Map in TypeScript](https://github.com/wincent/masochist/blob/7062569bf698cc42ad9be02310751bdaf5d59d0e/packages/legacy/src/lexer/ReversibleMap.ts) (ie. `Map` which remembers intermediate states and can be rolled back).
- [Bitwise ring buffer in TypeScript](https://github.com/wincent/algorithms/blob/8f1511cb40ea416234b21193fdc3b8323f666ba7/src/RingBuffer.ts).
- [Circular suffix array in TypeScript](https://github.com/wincent/algorithms/blob/8f1511cb40ea416234b21193fdc3b8323f666ba7/src/CircularSuffixArray.ts).
- [Condition Tree in TypeScript](https://github.com/wincent/masochist/blob/7062569bf698cc42ad9be02310751bdaf5d59d0e/packages/lexer/src/ConditionTree.ts)
- [Connection pool in JavaScript](https://github.com/wincent/masochist/blob/2872a7b46039c2ef708e47f214e94e5167a341b4/src/server/redis/RedisConnectionPool.js#L12-L50).
- [Event emitter in TypeScript](https://github.com/wincent/js/blob/7477dc15b134bb72210b860efa4d0bbc9e118fb8/packages/event-emitter/src/index.ts).
- [FIFO queue in TypeScript](https://github.com/wincent/masochist/blob/7062569bf698cc42ad9be02310751bdaf5d59d0e/packages/common/src/Queue.ts)
- Fast Ruby Array alternative in C ([`ary.h`](https://github.com/wincent/wikitext/blob/1c1ef9affa4633e6c169a9c1c8e9b2aee11c3679/ext/wikitext/ary.h), [`ary.c`](https://github.com/wincent/wikitext/blob/1c1ef9affa4633e6c169a9c1c8e9b2aee11c3679/ext/wikitext/ary.c)).
- Fast Ruby String alternative in C ([`str.h`](https://github.com/wincent/wikitext/blob/1c1ef9affa4633e6c169a9c1c8e9b2aee11c3679/ext/wikitext/str.h), [`str.c`](https://github.com/wincent/wikitext/blob/1c1ef9affa4633e6c169a9c1c8e9b2aee11c3679/ext/wikitext/str.c)).
- Fast String in C ([`str.h`](https://github.com/wincent/command-t/blob/459e9c6e7d5bd8f559bbf8101869d0c9e800b154/lua/wincent/commandt/lib/str.h), [`str.c`](https://github.com/wincent/command-t/blob/459e9c6e7d5bd8f559bbf8101869d0c9e800b154/lua/wincent/commandt/lib/str.c)).
- Heap (min heap) in C ([`heap.h`](https://github.com/wincent/command-t/blob/459e9c6e7d5bd8f559bbf8101869d0c9e800b154/lua/wincent/commandt/lib/heap.h)/[`heap.c`](https://github.com/wincent/command-t/blob/459e9c6e7d5bd8f559bbf8101869d0c9e800b154/lua/wincent/commandt/lib/heap.c)).
- [Heap in TypeScript](https://github.com/wincent/algorithms/blob/0eb10c7ddab759636eddf7d41c3f22c852691288/ts/src/Heap.ts).
- [Immutable `Set` in TypeScript](https://github.com/wincent/js/blob/7477dc15b134bb72210b860efa4d0bbc9e118fb8/packages/frozen-set/src/index.ts).
- [Interval Tree in TypeScript](https://github.com/wincent/masochist/blob/7062569bf698cc42ad9be02310751bdaf5d59d0e/packages/lexer/src/IntervalTree.ts)
- [LRU cache in JavaScript](https://github.com/wincent/masochist/blob/2872a7b46039c2ef708e47f214e94e5167a341b4/src/common/LRUCache.js).
- [Priority queue in TypeScript](https://github.com/wincent/algorithms/blob/0eb10c7ddab759636eddf7d41c3f22c852691288/ts/src/MinPQ.ts).
- [Red-Black Tree in TypeScript](https://github.com/wincent/masochist/blob/7062569bf698cc42ad9be02310751bdaf5d59d0e/packages/lexer/src/RedBlackTree.ts)
- [Ring buffer in Rust](https://github.com/wincent/docvim/blob/426bdaa38b2c9d6f71d27f2b52139d1292a9dafb/libs/docvim_diff/src/ring_buffer.rs).
- Threadsafe FIFO queue in Objective-C ([`WOQueue.h`](https://github.com/wincent/WOCommon/blob/5d482f6e8e7b05b7982f8fc3ba85929c9ea65b6a/WOQueue.h), [`WOQueue.m`](https://github.com/wincent/WOCommon/blob/5d482f6e8e7b05b7982f8fc3ba85929c9ea65b6a/WOQueue.m)[^private]).
- [Trie in Perl](https://github.com/git/git/blob/a6a323b31e2bcbac2518bddec71ea7ad558870eb/git-add--interactive.perl#L372-L434).
- [Union-Find in TypeScript](https://github.com/wincent/algorithms/blob/b2be0a285a708b81973382f8d5de236ad1b069d4/src/UnionFind.ts).

[^private]: For now, this repo is private.

## Basic algoritms

- ["Is object" test in TypeScript](https://github.com/wincent/js/blob/7477dc15b134bb72210b860efa4d0bbc9e118fb8/packages/is-object/src/index.ts).
- [Clamp value in TypeScript](https://github.com/wincent/js/blob/7477dc15b134bb72210b860efa4d0bbc9e118fb8/packages/clamp/src/index.ts).
- [Debounce in TypeScript](https://github.com/wincent/js/blob/7477dc15b134bb72210b860efa4d0bbc9e118fb8/packages/debounce/src/index.ts).
- [Dedenter in TypeScript](https://github.com/wincent/js/blob/7477dc15b134bb72210b860efa4d0bbc9e118fb8/packages/dedent/src/index.ts)[^dedent].
- [Escape HTML in TypeScript](https://github.com/wincent/js/blob/7477dc15b134bb72210b860efa4d0bbc9e118fb8/packages/escape-html/src/index.ts).
- [Fisher-Yates shuffle](https://github.com/wincent/conway/blob/deeb4930a290821eeb42c18f78b5a3c7731ad947/life.js#L106-L121).
- [Git's histogram diff algorithm in Rust](https://github.com/wincent/docvim/blob/426bdaa38b2c9d6f71d27f2b52139d1292a9dafb/libs/docvim_diff/src/histogram.rs).
- [Indenter in TypeScript](https://github.com/wincent/js/tree/7477dc15b134bb72210b860efa4d0bbc9e118fb8/packages/indent).
- [Invariant assertion in TypeScript](https://github.com/wincent/js/blob/7477dc15b134bb72210b860efa4d0bbc9e118fb8/packages/invariant/src/index.ts) (emits extra diagnostic info in development build, see also [simpler alternative](https://github.com/wincent/masochist/blob/7062569bf698cc42ad9be02310751bdaf5d59d0e/packages/common/src/invariant.ts)).
- [Monte Carlo simulation in TypeScript](https://github.com/wincent/algorithms/blob/b2be0a285a708b81973382f8d5de236ad1b069d4/src/montecarlo.ts).
- [Mulberry32 fast pseudo-random number generator in TypeScript](https://github.com/wincent/next/blob/490b78ec0dac0209703a04134978be445cbc2d17/src/util/mulberry32.ts).
- [Myer's diff algorithm in Rust](https://github.com/wincent/docvim/blob/426bdaa38b2c9d6f71d27f2b52139d1292a9dafb/libs/docvim_diff/src/myers.rs).
- [Numeric base conversion in JavaScript](https://github.com/wincent/hextrapolate/blob/dd2bd86d8269ea3af049d5881f47a817db1e2072/src/convert.js).
- [Object mapper in TypeScript](https://github.com/wincent/masochist/blob/7062569bf698cc42ad9be02310751bdaf5d59d0e/packages/common/src/objectMap.ts) (transforms values and keys).
- [Permutation using Heap's method in TypeScript](https://github.com/wincent/masochist/blob/7062569bf698cc42ad9be02310751bdaf5d59d0e/packages/legacy/src/lexer/permute.ts)
- [RC-4 pseudo-random number generator in JavaScript](https://github.com/wincent/conway/blob/deeb4930a290821eeb42c18f78b5a3c7731ad947/seedrandom.js) (note: I didn't write this one, but I used it).
- [Runtime non-nullable assertion in TypeScript](https://github.com/wincent/js/blob/7477dc15b134bb72210b860efa4d0bbc9e118fb8/packages/nullthrows/src/index.ts).
- [Simple function memoizer in JavaScript](https://github.com/wincent/masochist/blob/2872a7b46039c2ef708e47f214e94e5167a341b4/src/common/memoize.js).
- [Stable JSON stringify in TypeScript](https://github.com/wincent/js/blob/7477dc15b134bb72210b860efa4d0bbc9e118fb8/packages/stable-stringify/src/index.ts) (consistent output irrespective of insertion order; see also [alternative implementation from Relay](https://github.com/facebook/relay/blob/2a86be3e71cdc6511fa994e3de539f72070da1b4/src/query/stableStringify.js)).
- [String hash function (not cryptographic) in JavaScript](https://github.com/wincent/masochist/blob/2872a7b46039c2ef708e47f214e94e5167a341b4/src/server/hashString.js).
- [Strip HTML tags in JavaScript](https://github.com/wincent/masochist/blob/2872a7b46039c2ef708e47f214e94e5167a341b4/src/server/stripTags.js).
- [Throttle in TypeScript](https://github.com/wincent/js/blob/7477dc15b134bb72210b860efa4d0bbc9e118fb8/packages/throttle/src/index.ts).
- [Topological traversal using depth-first traversal in JavaScript](https://github.com/liferay/liferay-frontend-projects/blob/8271bd2398fa26c4987cbd8426615bcb22ee1507/projects/npm-tools/packages/npm-scripts/src/typescript/getTypeScriptBuildOrder.js).
- [Topological traversal using depth-first traversal in Objective-C](https://github.com/wincent/fusion/blob/fc735b967cb3a546a1838a5994fe4d802df1928b/WOFPlugInManager.m#L190-L225).
- [UUID v4 generator in ReasonML](https://github.com/wincent/next/blob/b651848bee15a69bb824b719b7c02071496546f6/src/uuid.re).
- [UUID v4 generator in TypeScript](https://github.com/wincent/next/blob/490b78ec0dac0209703a04134978be445cbc2d17/src/util/UUID.ts).
- [Wilcoxon Signed Rank test in Lua](https://github.com/wincent/command-t/blob/459e9c6e7d5bd8f559bbf8101869d0c9e800b154/lua/wincent/commandt/private/benchmark.lua#L149-L240).
- [Wilcoxon Signed Rank test in Ruby](https://github.com/wincent/command-t/blob/459e9c6e7d5bd8f559bbf8101869d0c9e800b154/bin/benchmarks/matcher.rb#L57-L131).
- [Wrap text in TypeScript](https://github.com/wincent/git-cipher/blob/bc6615f3e639c8c6bce65951d1988b2cd3e8b6fe/src/wrap.mts) (using the dynamic programming algorithm from TeX).

[^dedent]: I've implemented this code a number of times in different projects. For example, see [alternative from Masochist](https://github.com/wincent/masochist/blob/7062569bf698cc42ad9be02310751bdaf5d59d0e/packages/common/src/dedent.ts), or [from git-cipher](https://github.com/wincent/git-cipher/blob/bc6615f3e639c8c6bce65951d1988b2cd3e8b6fe/src/dedent.mts), or [from dented](https://github.com/wincent/dented/blob/30589659ddba073d44947bd1ec0118c02eefe76c/src/dedent.js).

## Parsing

- [DFA minimization in TypeScript](https://github.com/wincent/masochist/blob/7062569bf698cc42ad9be02310751bdaf5d59d0e/packages/lexer/src/NFA/minimizeDFA.ts).
- [Dynamic GraphQL lexer in TypeScript](https://github.com/wincent/masochist/blob/7062569bf698cc42ad9be02310751bdaf5d59d0e/packages/legacy/src/lexer/lex.ts).
- [Dynamic JSP lexer in JavaScript](https://github.com/liferay/liferay-frontend-projects/blob/8271bd2398fa26c4987cbd8426615bcb22ee1507/projects/npm-tools/packages/npm-scripts/src/jsp/lex.js).
- [General purpose dynamic Packrat parser in TypeScript](https://github.com/wincent/masochist/blob/7062569bf698cc42ad9be02310751bdaf5d59d0e/packages/legacy/src/parser/Parser.ts).
- [General purpose dynamic lexer in JavaScript](https://github.com/liferay/liferay-frontend-projects/blob/8271bd2398fa26c4987cbd8426615bcb22ee1507/projects/npm-tools/packages/npm-scripts/src/jsp/Lexer.js).
- [General purpose dynamic lexer in TypeScript](https://github.com/wincent/masochist/blob/7062569bf698cc42ad9be02310751bdaf5d59d0e/packages/legacy/src/lexer/Lexer.ts).
- [INI file parser in TypeScript](https://github.com/wincent/next/blob/490b78ec0dac0209703a04134978be445cbc2d17/src/util/parseINI.ts).
- [LALR parser generator in TypeScript](https://github.com/wincent/masochist/blob/7062569bf698cc42ad9be02310751bdaf5d59d0e/packages/parser/src/build.ts).
- [Lexer generator in TypeScript](https://github.com/wincent/masochist/blob/7062569bf698cc42ad9be02310751bdaf5d59d0e/packages/lexer/src/build.ts).
- [Lua lexer in Rust](https://github.com/wincent/docvim/blob/426bdaa38b2c9d6f71d27f2b52139d1292a9dafb/libs/docvim_lexer/src/lua.rs) (hand-rolled).
- [Markdown "frontmatter" parser in TypeScript](https://github.com/wincent/next/blob/490b78ec0dac0209703a04134978be445cbc2d17/src/util/parseFrontmatter.ts) (see also [alternative implementation](https://github.com/wincent/unpack-content/blob/cc0525a69d6f8a3ea6cc90f427f68046dfcf56d2/src/index.js)).
- [NFA-to-DFA converter in TypeScript](https://github.com/wincent/masochist/blob/7062569bf698cc42ad9be02310751bdaf5d59d0e/packages/lexer/src/NFA/NFAToDFA.ts).
- [Packrat GraphQL parser in TypeScript](https://github.com/wincent/masochist/blob/7062569bf698cc42ad9be02310751bdaf5d59d0e/packages/legacy/src/parser/parse.ts).
- [Packrat parser generator in Ruby](https://github.com/wincent/walrat).
- [Pratt operator-precedence parsing in Rust](https://github.com/wincent/docvim/blob/426bdaa38b2c9d6f71d27f2b52139d1292a9dafb/libs/docvim_parser/src/lua.rs#L250-L281).
- [Recursive descent parser for Lua in Rust](https://github.com/wincent/docvim/blob/426bdaa38b2c9d6f71d27f2b52139d1292a9dafb/libs/docvim_parser/src/lua.rs) (hand-rolled).
- [Regular Expression compiler in TypeScript](https://github.com/wincent/masochist/blob/7062569bf698cc42ad9be02310751bdaf5d59d0e/packages/lexer/src/compileRegExp.ts).
- [Regular Expression escaper in TypeScript](https://github.com/wincent/masochist/blob/7062569bf698cc42ad9be02310751bdaf5d59d0e/packages/common/src/escapeForRegExp.ts).
- [Regular Expression parser in TypeScript](https://github.com/wincent/masochist/blob/7062569bf698cc42ad9be02310751bdaf5d59d0e/packages/lexer/src/IntervalTree.ts).
- [Regular Expression to NFA converter in TypeScript](https://github.com/wincent/masochist/blob/7062569bf698cc42ad9be02310751bdaf5d59d0e/packages/lexer/src/NFA/regExpToNFA.ts).
- [Shell command parser in TypeScript](https://github.com/wincent/next/blob/490b78ec0dac0209703a04134978be445cbc2d17/src/util/parseShell.ts).
- [Static GraphQL lexer in TypeScript](https://github.com/wincent/masochist/blob/7062569bf698cc42ad9be02310751bdaf5d59d0e/packages/lexer/src/lex.ts) (this is faster than the dynamic one).
- [Static GraphQL parser in TypeScript](https://github.com/wincent/masochist/blob/7062569bf698cc42ad9be02310751bdaf5d59d0e/packages/parser/src/parseDocument.ts) (this is faster than the Packrat one).
- [StringScanner (lexer) in TypeScript](https://github.com/wincent/masochist/blob/7062569bf698cc42ad9be02310751bdaf5d59d0e/packages/common/src/StringScanner.ts)[^scanner].
- [TypeScript AST builder](https://github.com/wincent/masochist/blob/7062569bf698cc42ad9be02310751bdaf5d59d0e/packages/codegen/src/ast.ts).
- [TypeScript AST pretty-printer](https://github.com/wincent/masochist/blob/7062569bf698cc42ad9be02310751bdaf5d59d0e/packages/codegen/src/print.ts).
- [TypeScript AST transformer](https://github.com/wincent/masochist/blob/7062569bf698cc42ad9be02310751bdaf5d59d0e/packages/codegen/src/walk.ts).
- [Vimscript + documentation comment parser in Haskell using Parsec monadic parser combinators](https://github.com/wincent/docvim/blob/621a4d30f17a9fda64cf6b37d4608cbe08bc72e3/lib/Text/Docvim/Parse.hs).
- [Wikitext translator in C](https://github.com/wincent/wikitext/blob/1c1ef9affa4633e6c169a9c1c8e9b2aee11c3679/ext/wikitext/parser.c) (hand-rolled lexer/parser + translator).

[^scanner]: [Alternative implementation from "next" project](https://github.com/wincent/next/blob/490b78ec0dac0209703a04134978be445cbc2d17/src/util/StringScanner.ts).

## Princeton Algorithms course assignments

- [8-puzzle solver using A* search in TypeScript](https://github.com/wincent/algorithms/blob/0eb10c7ddab759636eddf7d41c3f22c852691288/ts/src/Solver.ts) (context: [assignment](https://coursera.cs.princeton.edu/algs4/assignments/8puzzle/specification.php)); related:
  - [Hamming distance in TypeScript](https://github.com/wincent/algorithms/blob/0eb10c7ddab759636eddf7d41c3f22c852691288/ts/src/Board.ts#L46-L71).
  - [Manhattan distance in TypeScript](https://github.com/wincent/algorithms/blob/0eb10c7ddab759636eddf7d41c3f22c852691288/ts/src/Board.ts#L46-L71).
- [Burrows-Wheeler data compression in TypeScript](https://github.com/wincent/algorithms/tree/burrows-wheeler-solution) (context: [assignment](https://coursera.cs.princeton.edu/algs4/assignments/burrows/specification.php)):
  - [Burrows-Wheeler transform in TypeScript](https://github.com/wincent/algorithms/blob/8f1511cb40ea416234b21193fdc3b8323f666ba7/src/BurrowsWheeler.ts).
  - [Move-to-front encoding in TypeScript](https://github.com/wincent/algorithms/blob/8f1511cb40ea416234b21193fdc3b8323f666ba7/src/MoveToFront.ts).
  - [Huffman compression in TypeScript](https://github.com/wincent/algorithms/blob/8f1511cb40ea416234b21193fdc3b8323f666ba7/src/Huffman.ts).
- [Find collinear points in TypeScript](https://github.com/wincent/algorithms/blob/acc7e6bdc27061570770498c00f91f8e051afb1d/ts/src/FastCollinearPoints.ts) (context: [assignment](https://coursera.cs.princeton.edu/algs4/assignments/collinear/specification.php)).
- [Percolation model in TypeScript](https://github.com/wincent/algorithms/blob/b2be0a285a708b81973382f8d5de236ad1b069d4/src/Percolation.ts) (context: [assignment](https://coursera.cs.princeton.edu/algs4/assignments/percolation/specification.php)).
- [Seam carving in TypeScript](https://github.com/wincent/algorithms/blob/28b33ad9e080bb3184c0e1ca0e078f7c1865e470/SeamCarver.js) (context: [assignment](https://www.cs.princeton.edu/courses/archive/fall14/cos226/assignments/seamCarving.html)).
- [kd-tree (2d-tree) in TypeScript](https://github.com/wincent/algorithms/blob/72c5d36cc179849a7c6a552cecd0e939cf13e74c/ts/src/KdTree.ts) (context: [assignment](https://coursera.cs.princeton.edu/algs4/assignments/kdtree/specification.php)).

## Miscellaneous

- [Conway's Game of Life cellular automaton in JavaScript](https://github.com/wincent/conway/blob/deeb4930a290821eeb42c18f78b5a3c7731ad947/life.js).
- [Escape shell tokens in TypeScript](https://github.com/wincent/git-cipher/blob/bc6615f3e639c8c6bce65951d1988b2cd3e8b6fe/src/shellEscape.mts).
- [Format Markdown for display in terminal](https://github.com/wincent/next/blob/490b78ec0dac0209703a04134978be445cbc2d17/src/util/formatMarkdown.ts) (from ["next" project](https://github.com/wincent/next), see also [alternative implementation from git-cipher](https://github.com/wincent/git-cipher/blob/bc6615f3e639c8c6bce65951d1988b2cd3e8b6fe/src/markdown.mts)).
- [Full-text MySQL search using Ruby](https://github.com/wincent/wincent-on-rails/blob/a6fc24eda8ce3a21013f2712f02a39dd09b778e2/app/models/needle.rb).
- [Memory barriers in Objective-C](https://github.com/wincent/WOPublic/blob/5f090d2077e6c71961133baa20993f80ea303096/WOMemoryBarrier.h).
- [Simple string pluralizer in TypeScript](https://github.com/wincent/algorithms/blob/8f1511cb40ea416234b21193fdc3b8323f666ba7/src/pluralize.ts).
- [Skein hash in TypeScript](https://github.com/wincent/masochist/blob/7062569bf698cc42ad9be02310751bdaf5d59d0e/packages/legacy/src/parser/skein.ts)
- [Stochastic optimization via simulated annealing in TypeScript](https://github.com/wincent/yak-layout/blob/dffb31e61576c3346a83aeb48afbc51ba49370a6/src/index.js#L865).
- [Tag reachability using MySQL and Ruby](https://github.com/wincent/wincent-on-rails/blob/1b8d4aa8f3da1c0c8f7e5af23c6934d13f630930/app/models/tag.rb#L54-L104).
- [UTF-16 to UTF-8 converter in TypeScript](https://github.com/wincent/masochist/blob/7062569bf698cc42ad9be02310751bdaf5d59d0e/packages/legacy/src/parser/utf8.ts)
- [UTF-8 to UTF-32 converter in C](https://github.com/wincent/wikitext/blob/1c1ef9affa4633e6c169a9c1c8e9b2aee11c3679/ext/wikitext/parser.c#L298-L378).
- Watchman binary protocol in C ([`watchman.h`](https://github.com/wincent/command-t/blob/459e9c6e7d5bd8f559bbf8101869d0c9e800b154/lua/wincent/commandt/lib/watchman.h), [`watchman.c`](https://github.com/wincent/command-t/blob/459e9c6e7d5bd8f559bbf8101869d0c9e800b154/lua/wincent/commandt/lib/watchman.c)).

## Useful utilities

- ["Golden" (snapshot) testing for JavaScript](https://github.com/facebook/relay/blob/a0e8a6c0a106e448a31fcd701400a1d11b74a7e4/packages/react-relay/classic/tools/__mocks__/getGoldenMatchers.js) (note that this predates Jest's own snapshot feature).
- ["Golden" (snapshot) testing for Rust](https://github.com/wincent/docvim/blob/426bdaa38b2c9d6f71d27f2b52139d1292a9dafb/libs/docvim_snapshot/src/lib.rs) (see also [macro for checking all shapshots relative to the current package](https://github.com/wincent/docvim/blob/426bdaa38b2c9d6f71d27f2b52139d1292a9dafb/libs/docvim_macros/src/lib.rs)).
- [Improved `JSON.stringify()` in TypeScript](https://github.com/wincent/git-cipher/blob/bc6615f3e639c8c6bce65951d1988b2cd3e8b6fe/src/stringify.mts) (more useful representations of non-primitive types).
- [Yarn workspace management scripts](https://github.com/wincent/js/tree/7477dc15b134bb72210b860efa4d0bbc9e118fb8/packages/workspace-scripts/src).
- [Zero-dependency Jest-like testing "framework" in JavaScript](https://github.com/wincent/jost/blob/09450b8a15538e09fbaebab718f29909d4267a61/src/index.js).

## Appendix: (non-implementation) notes

- [Adjacency matrix](./Adjacency_matrix) notes.
- [Adjacency list](./Adjacency_list) notes.
- [Binary Search tree](./Binary_Search_Tree) notes.
- [Binary tree](./Binary_tree) notes.
- [Breadth-first search](./Breadth-first_search) notes.
- [Computing the Maximum Weighted Independent Set of a graph path](./Computing_the_Maximum_Weighted_Independent_Set_of_a_graph_path) notes.
- [Depth-first search](./Depth_first_search) notes.
- [Dynamic programming](./Dynamic_programming) notes.
- [Greedy algorithm](./Greedy_algorithm) notes.
- [Heap](./Heap) notes.
- [Minimum Spanning Tree](./Minimum_Spanning_Tree) notes.
- [Prim's Algorithm](./Prim's_Algorithm) notes.
- [Sparse matrix](./Sparse_matrix) notes.
- [Topological ordering](./Topological_ordering) notes.
- [Tree rotation](./Tree_rotations) notes.
- [Tree traversal](./Tree_traversal) notes.
- [Union-Find](./Union-Find) notes.

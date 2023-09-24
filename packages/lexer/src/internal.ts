// These items are not intended to be part of the public API of the
// @masochist/lexer package, but are exposed here via this module so that
// framework-internal tests in other packages can make use of the low-level
// implementation details.

export type {NFA} from './NFA/NFA';

export {default as NFAToDFA} from './NFA/NFAToDFA';
export {default as dotifyTransitionTable} from './NFA/dotifyTransitionTable';
export {default as fromTransitionTable} from './NFA/fromTransitionTable';
export {default as minimizeDFA} from './NFA/minimizeDFA';
export {default as regExpToNFA} from './NFA/regExpToNFA';
export {default as removeEpsilons} from './NFA/removeEpsilons';
export {default as sortEdges} from './NFA/sortEdges';
export {default as stringifyNFA} from './NFA/stringifyNFA';
export {default as stringifyTransitionTable} from './NFA/stringifyTransitionTable';
export {default as toTransitionTable} from './NFA/toTransitionTable';
export {default as transposeTable} from './NFA/transposeTable';
export {default as visitNFA} from './NFA/visitNFA';
export {default as RegExpParser} from './RegExp/RegExpParser';
export {getLexer} from './__tests__/helper';
export {default as compileRegExp} from './compileRegExp';

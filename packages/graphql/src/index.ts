// For benchmarks only:
export {grammar, table} from './document';

export {Lexer, default as lex} from './lex';

// TODO: fix inconsistency that default export is called `parse()` inside this
// file; it should match the filename instead:
export {default as parseDocument} from './parseDocument';

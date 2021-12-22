import RegExpParser from './RegExpParser';
import type {Node} from './RegExpParser';

type Atom = string;

type CharacterClass = {
  kind: 'CharacterClass';
};

type Table = Array<Array<[Edge, number]>>;

type Frame = CharacterClass | Group | Root;

type Edge = Atom | Range;

type Group = {
  kind: 'Group';
};

type Range = {from: string; to: string};

type Root = {
  // contents: Array<Atom | Frame,
  kind: 'Group';
};

/**
 * Builds a table-based representation of a DFA that can recognize the supplied
 * `regExp`.  Only simple patterns are supported, because that's all we need in
 * order to tokenize the GraphQL language.
 */
export default class DFA {
  #ast: Node;
  #context: Array<any>; // TODO proper type.
  #table: Table;

  constructor(regExp: RegExp) {
    this.#context = [];
    this.#ast = new RegExpParser(regExp).parse();
    this.#table = this.#parse();
  }

  #parse(): Table {
    return [];
  }

  get table() {
    return this.#table;
  }

  // eg. name
  // /[_A-Za-z][_A-Za-z0-9]*/
  //
  // state | edge         | transition to
  // ----- | ------------ | -------------
  // 0     | _            | 1
  // 0     | >= A && <= Z | 1
  // 0     | >= a && <= z | 1
  // 0     | [else]       | reject
  // 1     | _            | 1
  // 1     | >= A && <= Z | 1
  // 1     | >= a && <= z | 1
  // 1     | >= 0 && <= 9 | 1
  // 1     | [else]       | accept
  //
  // ie. probably want to express this in terms of ranges and not individual
  // edges because some of our regexps will have huge numbers of edges (eg.
  // `SOURCE_CHARACTER = /[\u0009\u000a\u000d\u0020-\uffff]/`), although we
  // could actually make some simplifying assumptions given that we know we're
  // going to have to lex a very restricted range of possible inputs (our
  // sample size is N=1).
  //
  // Given this table-based representation, we can translate that into code
  // using `switch` statements:
  //
  //      let state = 0;
  //      while ((char = nextChar()) {
  //          if (state === 0) {
  //              switch (char) {
  //                  case _:
  //                  case A:
  //                  ...
  //                  case z:
  //                      state = 1;
  //                      break;
  //                  default:
  //                      reject();
  //              }
  //          } else if (state === 1) {
  //              // ...
  //          }
  //      }
  //
  // or conditionals:
  //
  //      let state = 0;
  //      while ((char = nextChar()) {
  //          if (state === 0) {
  //              if (
  //                  char === '_' ||
  //                  char >= 'A' && char <= 'Z' ||
  //                  char >= 'a' && char <= 'z'
  //              ) {
  //                  state = 1;
  //              } else {
  //              }
  //          } else if (state === 1) {
  //              // ...
  //          }
  //
  // Note: can also go via intermediate step: eg. [a-z] -> a | b | c | ...
  // We can also consider not doing an actual DFA, but rather converting into
  // primitives like `new Set([range('a-z')])` and so on, and using our
  // existing code generation.
  // const scanner = new StringScanner(regExp.source);
  // const states: DFA = [];
  // let current = 0;
  //
  // // We maintain a context stack so we can tell where we are in the input; eg.
  // // inside a group, inside a character class etc.
  // const context = [];
  //
  // while (!scanner.atEnd) {
  //   if (scanner.scan(/\[/)) {
  //     // Character class.
  //     const members = [];
  //     const status: 'base' | 'range' = 'base';
  //     while (!scanner.scan(/\]/)) {
  //       if (scanner.scan(/-/)) {
  //       } else if (scanner.scan(/./)) {
  //         members.push(scanner.last);
  //       }
  //     }
  //   } else if (scanner.scan(/\*/)) {
  //     // Kleene star.
  //   } else if (scanner.scan(/\|/)) {
  //     // Alternation.
  //     // i think i need a stack for this
  //     // because I can write things like ((((((a|b|(c|d)))))))
  //   } else if (scanner.scan(/./)) {
  //     // Everything else.
  //     states.push([[scanner.last!, current + 1]]);
  //     current++;
  //   } else if (scanner.atEnd) {
  //     // Do something.
  //   }
  // }
  // return states;
}

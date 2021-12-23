import RegExpParser from './RegExp/RegExpParser';
import type {
  Alternate,
  Atom,
  CharacterClass,
  Node,
  Range,
  Repeat,
  Sequence,
} from './RegExp/RegExpParser';

type Edge = Atom | Range;

// Represents a state and all the edges leading out from it to other states.
type State = Array<[Edge, number]>;

// Contains all states in the DFA, indexed by state number (index 0 corresponds
// to the starting state).
type Table = Array<State>;

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
    // TODO: traverse AST, building up corresponding state machine as we go
    // this should be easy, as there is no backtracking, no look-ahead (other
    // than trivial lookahead confined to subtrees of the ast, like a sequence)...
    const state: State = [];
    const table: Table = [state];
    this.#parseNode(this.#ast, state, table);
    return table;
  }

  #parseCharacterClass(
    characterClass: CharacterClass,
    state: State,
    table: Table,
  ) {
    if (characterClass.negated) {
      throw new Error(
        'DFA#parseCharacterClass(): Expected non-negated chararcter class',
      );
    }
    const next = table.length;
    for (const child of characterClass.children) {
      state.push([child, next]);
    }
  }

  #parseNode(node: Node, state: State, table: Table) {
    if (node.kind === 'Alternate') {
      this.#parseAlternate(node, state, table);
    } else if (node.kind === 'CharacterClass') {
      this.#parseCharacterClass(node, state, table);
    } else if (node.kind === 'Sequence') {
      this.#parseSequence(node, state, table);
    }
  }

  #parseAlternate(alternate: Alternate, state: State, table: Table) {
    const next = table.length;
    for (const node of alternate.children) {
      if (node.kind === 'Atom') {
        state.push([node, next]);
      } else {
        // TODO
      }
    }
    table.push([]);
  }

  #parseRepeat(repeat: Repeat, state: State, table: Table) {
    const child = repeat.child;
    // TODO: actually use minimum/maximum
    if (child.kind === 'CharacterClass') {
      this.#parseCharacterClass(child, state, table);
    }
  }

  #parseSequence(sequence: Sequence, state: State, table: Table) {
    for (const node of sequence.children) {
      if (node.kind === 'Atom') {
        state.push([node, table.length]);
      } else if (node.kind === 'CharacterClass') {
        this.#parseCharacterClass(node, state, table);
      } else if (node.kind === 'Repeat') {
        this.#parseRepeat(node, state, table);
      } else {
        // TODO
      }
      state = [];
      table.push(state);
    }
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
  // 0     | [else]       | -1 (reject) -- this edge is implied; not explicitly recorded in the data structure
  // 1     | _            | 1
  // 1     | >= A && <= Z | 1
  // 1     | >= a && <= z | 1
  // 1     | >= 0 && <= 9 | 1
  // 1     | [else]       | accept -- again, implied edge
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

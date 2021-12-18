import StringScanner from './StringScanner';

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

// AST for Regular Expressions.

type RegExpNode = {};
type RegExpGroup = Array<RegExpNode>;
type RegExpCharacterClass = Array<any>;
type RegExpRange = {from: string; to: string};
type RegExpRepeat = {
  node: RegExpNode;
  minimum: number | null;
  maximum: number | null;
};
type RegExpEscape = {kind: 'RegExpEscape'; payload: string};
// TODO: might also just be able to do this with nested arrays (think: s-exps)

/**
 * Builds a table-based representation of a DFA that can recognize the supplied
 * `regExp`.  Only simple patterns are supported, because that's all we need in
 * order to tokenize the GraphQL language.
 */
export default class DFA {
  #context: Array<any>; // TODO proper type.
  #regExp: RegExp;
  #scanner: StringScanner;
  #table: Table;

  constructor(regExp: RegExp) {
    this.#context = [];
    this.#regExp = regExp;
    this.#scanner = new StringScanner(regExp.source);
    this.#table = this.#parse();
  }

  // precedence high to low:
  // () grouping
  // */+/? repeat
  // sequence abc
  // alternate a|b|c
  #parse(): Table {
    // TODO see if we can use JS call stack instead of an actual materialized stack
    this.#context.push({frame: 'root'});
    this.#parseAlternates();
    if (!this.#scanner.atEnd) {
      throw new Error(
        `Failed to consume all input (at index ${this.#scanner.index}`,
      );
    }
    return [];
  }

  #parseCharacterClass() {
    this.#scanner.expect(/\[/);
  }

  #parseEscape() {
    this.#scanner.expect(/\\/);
  }

  #parseGroup() {
    this.#scanner.expect(/\(/);
    const alternates = this.#parseAlternates();
    this.#scanner.expect(/\)/);
  }

  #parseAlternates(): Array<any> {
    const alternates = [];
    if (this.#scanner.peek(/\(/)) {
      this.#parseGroup();
    } else if (this.#scanner.peek(/\[/)) {
      this.#parseCharacterClass();
    } else if (this.#scanner.peek(/\\/)) {
      this.#parseEscape();
    } else if (this.#scanner.peek(/\|/)) {
      // alternate
    } else {
      // bail...
    }
    return alternates;
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

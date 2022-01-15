import ignore from '../ignore';
import {
  COMMA,
  COMMENT,
  LINE_TERMINATOR,
  UNICODE_BOM,
  WHITESPACE,
} from '../lexer';

describe('ignore()', () => {
  it('produces a DFA that recognizes any ignored token', () => {
    expect(
      ignore(COMMA, COMMENT, LINE_TERMINATOR, UNICODE_BOM, WHITESPACE),
    ).toEqual({
      acceptStates: new Set([1, 2, 3, 4]),
      startStates: new Set([0]),
      transitions: [
        /* 0 */ new Map([
          ['Atom: ', new Set([1])],
          ['Atom:\t', new Set([1])],
          ['Atom:\n', new Set([2])],
          ['Atom:\ufeff', new Set([2])],
          ['Atom:,', new Set([2])],
          ['Atom:#', new Set([3])],
          ['Atom:\r', new Set([4])],
        ]),
        /* 1 */ new Map([
          ['Atom:\t', new Set([1])],
          ['Atom: ', new Set([1])],
        ]),
        /* 2 */ new Map(),
        /* 3 */ new Map([
          ['Range: -\uffff', new Set([3])],
          ['Atom:\t', new Set([3])],
        ]),
        /* 4 */ new Map([['Atom:\n', new Set([2])]]),
      ],
    });
  });

  xit('runs demo', () => {
    demo();
  });

  xit('runs demo2', () => {
    demo2();
  });
});

// Just wondering what happens when we combine the non-ignore machines...
import {ACCEPT, START} from '../NFA/NFA';
import dotifyTransitionTable from '../NFA/dotifyTransitionTable';
import stringifyTransitionTable from '../NFA/stringifyTransitionTable';
import transposeTable from '../NFA/transposeTable';
import fromTransitionTable from '../NFA/fromTransitionTable';
import stringifyNFA from '../NFA/stringifyNFA';
import removeEpsilons from '../NFA/removeEpsilons';
import NFAToDFA from '../NFA/NFAToDFA';
import toTransitionTable from '../NFA/toTransitionTable';

import type {NFA} from '../NFA/NFA';
import type {TransitionTable} from '../NFA/toTransitionTable';

function demo() {
  let table = ignore(COMMA, COMMENT, LINE_TERMINATOR, UNICODE_BOM, WHITESPACE);
  console.log(dotifyTransitionTable(table)); // Light version (default).
  console.log(dotifyTransitionTable(table, true)); // Dark version.

  table = {
    acceptStates: new Set([1, 2]),
    startStates: new Set([0]),
    transitions: [
      /* 0 */ new Map([
        ['Atom:a', new Set([1])],
        ['Atom:b', new Set([2])],
      ]),
      /* 1 */ new Map([['Atom:b', new Set([1])]]),
      /* 2 */ new Map([['Atom:a', new Set([2])]]),
    ],
  };

  console.log('initial table');
  console.log(stringifyTransitionTable(table));
  console.log(dotifyTransitionTable(table));

  transposeTable(table);

  console.log('transposed table');
  console.log(stringifyTransitionTable(table));
  console.log(dotifyTransitionTable(table));

  console.log('table -> graph');
  let nfa = fromTransitionTable(table);
  console.log(stringifyNFA(nfa));
  table = toTransitionTable(nfa);
  console.log(dotifyTransitionTable(table));

  console.log('epsilons removed');
  removeEpsilons(nfa);
  console.log(stringifyNFA(nfa)); // Looks good.
  table = toTransitionTable(nfa);
  console.log(dotifyTransitionTable(table));

  console.log('to DFA');
  nfa = NFAToDFA(nfa);
  table = toTransitionTable(nfa);
  console.log(stringifyTransitionTable(table)); // Looks good.
  console.log(dotifyTransitionTable(table));

  console.log('transpose again');
  transposeTable(table);
  console.log(stringifyTransitionTable(table)); // Looks good.
  console.log(dotifyTransitionTable(table));

  console.log('epsilons removed');
  nfa = fromTransitionTable(table);
  removeEpsilons(nfa);
  table = toTransitionTable(nfa);
  console.log(stringifyTransitionTable(table)); // Looks good.
  console.log(dotifyTransitionTable(table));

  console.log('to DFA');
  nfa = NFAToDFA(nfa);
  table = toTransitionTable(nfa);
  console.log(stringifyTransitionTable(table)); // Looks good.
  console.log(dotifyTransitionTable(table));
}

function demo2() {
  const table = ignore(
    // Punctuators. These combine well when left alone.
    /!/,
    /\$/,
    /&/,
    /\(/,
    /\)/,
    /\.\.\./,
    /:/,
    /=/,
    /@/,
    /\[/,
    /\]/,
    /\{/,
    /\|/,
    /\}/,

    // Other Lexical tokens.
    /[_a-z][_0-9a-z]*/i, // NAME. Still works when we add this.
  );
  console.log(stringifyTransitionTable(table));
  console.log(dotifyTransitionTable(table));

  // Output:
  //
  // {
  //   acceptStates: new Set([1, 2]),
  //   startStates: new Set([0]),
  //   transitions: [
  //     /* 0 */ new Map([
  //       ['Range:a-z', new Set([1])],
  //       ['Range:A-Z', new Set([1])],
  //       ['Atom:_', new Set([1])],
  //       ['Atom:}', new Set([2])],
  //       ['Atom:|', new Set([2])],
  //       ['Atom:{', new Set([2])],
  //       ['Atom:]', new Set([2])],
  //       ['Atom:[', new Set([2])],
  //       ['Atom:@', new Set([2])],
  //       ['Atom:=', new Set([2])],
  //       ['Atom::', new Set([2])],
  //       ['Atom:)', new Set([2])],
  //       ['Atom:(', new Set([2])],
  //       ['Atom:&', new Set([2])],
  //       ['Atom:$', new Set([2])],
  //       ['Atom:!', new Set([2])],
  //       ['Atom:.', new Set([3])],
  //     ]),
  //     /* 1 */ new Map([
  //       ['Range:a-z', new Set([1])],
  //       ['Range:A-Z', new Set([1])],
  //       ['Atom:_', new Set([1])],
  //       ['Range:0-9', new Set([1])],
  //     ]),
  //     /* 2 */ new Map(),
  //     /* 3 */ new Map([['Atom:.', new Set([4])]]),
  //     /* 4 */ new Map([['Atom:.', new Set([2])]]),
  //   ],
  // }
  //
  // Note that there are lots of token types but only two accept states. In a
  // real "union" machine we'd want a distinct accept state for each token type.
  // Not so hard to model in the NFA data structure we have (could just be another
  // property on the node type) but doesn't fit so well in transition table, where
  // the target states are just numbers and we don't have an obvious place to
  // stash auxilliary data).
  //
  // Might be able to do it by changing acceptStates into a Map, where the key
  // is the state id and the value is the token name "label" (or `null` if we
  // just don't give a shit).
  //
  //   acceptStates: new Map([
  //     [1, 'NAME'],
  //     [2, 'PUNCTUATOR'],
  //     // ... etc
  //   ]),
  //
  // Easy enough to model, but given that we are transforming the NFAs so much
  // it is tricky to reason about. For example, in minimization, we transpose
  // the NFA, which means making accept states into start states and vice-versa;
  // what are we supposed to do with the label data then? Should start states
  // therefore also be a Map? Likewise in `NFAToDFA()` we end up setting the
  // ACCEPT flag in the output DFA if it corresponds to an ACCEPT node in the
  // input NFA; we'll have to be careful in that function too not to merge
  // states improperly... eg. there, were we create new nodes that represent
  // non-deterministic transitions (eg. "a" goes to 3 and 4) we have internal
  // book-keeping that associates a synthetic node with the key "3.4"; we may
  // instead have to make the key look like "3/label.4/label", and then in
  // the final pass if we see an accept node with mismatching labels, do, er,
  // something...
  //
  // in practice, i don't think we could wind up with an accept state that
  // corresponds to multiple labels, but it seems we would need to use a set
  // just in case... eg. new Set() if we don't care about labels
  // or new Set(['name']) if we do care...
}

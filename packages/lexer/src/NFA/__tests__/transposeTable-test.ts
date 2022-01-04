import compileRegExp from '../../compileRegExp';
import NFAToDFA from '../NFAToDFA';
import regExpToNFA from '../regExpToNFA';
import removeEpsilons from '../removeEpsilons';
import sortEdges from '../sortEdges';
import toTransitionTable from '../toTransitionTable';
import transposeTable from '../transposeTable';

import type {TransitionTable} from '../toTransitionTable';

describe('transposeTable()', () => {
  it('transposes a transition table for ESCAPED_CHARACTER', () => {
    expect(transpose(/\\["\\\/bfnrt]/)).toEqual({
      acceptStates: new Set([0]),
      startStates: new Set([2, 3, 4, 5, 6, 7, 8, 9]),
      transitions: [
        /* 0 */ new Map(),
        /* 1 */ new Map([['Atom:\\', 0]]),
        /* 2 */ new Map([['Atom:"', 1]]),
        /* 3 */ new Map([['Atom:/', 1]]),
        /* 4 */ new Map([['Atom:\\', 1]]),
        /* 5 */ new Map([['Atom:b', 1]]),
        /* 6 */ new Map([['Atom:f', 1]]),
        /* 7 */ new Map([['Atom:n', 1]]),
        /* 8 */ new Map([['Atom:r', 1]]),
        /* 9 */ new Map([['Atom:t', 1]]),
      ],
    });
  });

  it('transposes a DFA for ESCAPED_UNICODE', () => {
    expect(transpose(/\\u[0-9A-Fa-f]{4}/)).toEqual({
      acceptStates: new Set([0]),
      startStates: new Set([12, 13, 14]),
      transitions: [
        /* 0 */ new Map(),
        /* 1 */ new Map([['Atom:\\', 0]]),
        /* 2 */ new Map([['Atom:u', 1]]),
        /* 3 */ new Map([['Range:0-9', 2]]),
        /* 4 */ new Map([['Range:A-F', 2]]),
        /* 5 */ new Map([['Range:a-f', 2]]),
        /* 6 */ new Map([
          ['Range:0-9', 3],
          ['Range:0-9', 4],
          ['Range:0-9', 5],
        ]),
        /* 7 */ new Map([
          ['Range:A-F', 3],
          ['Range:A-F', 4],
          ['Range:A-F', 5],
        ]),
        /* 8 */ new Map([
          ['Range:a-f', 3],
          ['Range:a-f', 4],
          ['Range:a-f', 5],
        ]),
        /* 9 */ new Map([
          ['Range:0-9', 6],
          ['Range:0-9', 7],
          ['Range:0-9', 8],
        ]),
        /* 10 */ new Map([
          ['Range:A-F', 6],
          ['Range:A-F', 7],
          ['Range:A-F', 8],
        ]),
        /* 11 */ new Map([
          ['Range:a-f', 6],
          ['Range:a-f', 7],
          ['Range:a-f', 8],
        ]),
        /* 12 */ new Map([
          ['Range:0-9', 9],
          ['Range:0-9', 10],
          ['Range:0-9', 11],
        ]),
        /* 13 */ new Map([
          ['Range:A-F', 9],
          ['Range:A-F', 10],
          ['Range:A-F', 11],
        ]),
        /* 14 */ new Map([
          ['Range:a-f', 9],
          ['Range:a-f', 10],
          ['Range:a-f', 11],
        ]),
      ],
    });
  });

  it('transposes a DFA for EXPONENT_PART', () => {
    expect(transpose(/[eE][+-]?\d+/)).toEqual({
      acceptStates: new Set([0]),
      startStates: new Set([5]),
      transitions: [
        /* 0 */ new Map(),
        /* 1 */ new Map([['Atom:e', 0]]),
        /* 2 */ new Map([['Atom:E', 0]]),
        /* 3 */ new Map([
          ['Atom:+', 1],
          ['Atom:+', 2],
        ]),
        /* 4 */ new Map([
          ['Atom:-', 1],
          ['Atom:-', 2],
        ]),
        /* 5 */ new Map([
          ['Range:0-9', 1],
          ['Range:0-9', 2],
          ['Range:0-9', 3],
          ['Range:0-9', 4],
          ['Range:0-9', 5],
        ]),
      ],
    });
  });

  it('transposes a DFA for FRACTIONAL_PART', () => {
    expect(transpose(/\.\d+/)).toEqual({
      acceptStates: new Set([0]),
      startStates: new Set([2]),
      transitions: [
        /* 0 */ new Map(),
        /* 1 */ new Map([['Atom:.', 0]]),
        /* 2 */ new Map([
          ['Range:0-9', 1],
          ['Range:0-9', 2],
        ]),
      ],
    });
  });

  it('transposes a DFA for INTEGER_PART', () => {
    expect(transpose(/-?(0|[1-9]\d*)/)).toEqual({
      acceptStates: new Set([0]),
      startStates: new Set([2, 3, 4]),
      transitions: [
        /* 0 */ new Map(),
        /* 1 */ new Map([['Atom:-', 0]]),
        /* 2 */ new Map([
          ['Atom:0', 0],
          ['Atom:0', 1],
        ]),
        /* 3 */ new Map([
          ['Range:1-9', 0],
          ['Range:1-9', 1],
        ]),
        /* 4 */ new Map([
          ['Range:0-9', 3],
          ['Range:0-9', 4],
        ]),
      ],
    });
  });

  it('transposes a DFA for LINE_TERMINATOR', () => {
    expect(transpose(/\n|\r\n|\r/)).toEqual({
      acceptStates: new Set([0]),
      startStates: new Set([1, 3, 2]),
      transitions: [
        /* 0 */ new Map(),
        /* 1 */ new Map([['Atom:\r', 0]]),
        /* 2 */ new Map([['Atom:\n', 0]]),
        /* 3 */ new Map([['Atom:\n', 1]]),
      ],
    });
  });

  it('transposes a DFA for SOURCE_CHARACTER', () => {
    expect(transpose(/[\u0009\u000a\u000d\u0020-\uffff]/)).toEqual({
      acceptStates: new Set([0]),
      startStates: new Set([1, 2, 3]),
      transitions: [
        /* 0 */ new Map(),
        /* 1 */ new Map([['Range: -\uffff', 0]]),
        /* 2 */ new Map([['Atom:\r', 0]]),
        /* 3 */ new Map([['Range:\t-\n', 0]]),
      ],
    });
  });

  it('transposes a DFA for NAME', () => {
    expect(transpose(/[_A-Za-z][_0-9A-Za-z]*/)).toEqual({
      acceptStates: new Set([0]),
      startStates: new Set([1, 2, 3, 4, 5, 6, 7]),
      transitions: [
        /* 0 */ new Map(),
        /* 1 */ new Map([['Range:a-z', 0]]),
        /* 2 */ new Map([['Atom:_', 0]]),
        /* 3 */ new Map([['Range:A-Z', 0]]),
        /* 4 */ new Map([
          ['Range:0-9', 1],
          ['Range:0-9', 2],
          ['Range:0-9', 3],
          ['Range:0-9', 4],
          ['Range:0-9', 5],
          ['Range:0-9', 6],
          ['Range:0-9', 7],
        ]),
        /* 5 */ new Map([
          ['Range:A-Z', 1],
          ['Range:A-Z', 2],
          ['Range:A-Z', 3],
          ['Range:A-Z', 4],
          ['Range:A-Z', 5],
          ['Range:A-Z', 6],
          ['Range:A-Z', 7],
        ]),
        /* 6 */ new Map([
          ['Atom:_', 1],
          ['Atom:_', 2],
          ['Atom:_', 3],
          ['Atom:_', 4],
          ['Atom:_', 5],
          ['Atom:_', 6],
          ['Atom:_', 7],
        ]),
        /* 7 */ new Map([
          ['Range:a-z', 1],
          ['Range:a-z', 2],
          ['Range:a-z', 3],
          ['Range:a-z', 4],
          ['Range:a-z', 5],
          ['Range:a-z', 6],
          ['Range:a-z', 7],
        ]),
      ],
    });
  });

  it('transposes a DFA for WHITESPACE', () => {
    expect(transpose(/[\t ]+/)).toEqual({
      acceptStates: new Set([0]),
      startStates: new Set([1, 2]),
      transitions: [
        /* 0 */ new Map([]),
        /* 1 */ new Map([
          ['Atom: ', 0],
          ['Atom: ', 1],
          ['Atom: ', 2],
        ]),
        /* 2 */ new Map([
          ['Atom:\t', 0],
          ['Atom:\t', 1],
          ['Atom:\t', 2],
        ]),
      ],
    });
  });
});

function transpose(regExp: RegExp): TransitionTable {
  return transposeTable(
    toTransitionTable(
      sortEdges(NFAToDFA(removeEpsilons(regExpToNFA(compileRegExp(regExp))))),
    ),
  );
}

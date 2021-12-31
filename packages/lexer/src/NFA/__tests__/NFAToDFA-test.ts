import compileRegExp from '../../compileRegExp';
import {ACCEPT, START} from '../NFA';
import NFAToDFA from '../NFAToDFA';
import regExpToNFA from '../regExpToNFA';
import removeEpsilons from '../removeEpsilons';

describe('NFAToDFA()', () => {
  it('creates the DFA for an atom', () => {
    expect(NFAToDFA(removeEpsilons(regExpToNFA(compileRegExp(/a/))))).toEqual({
      id: 0,
      edges: [
        {
          on: {kind: 'Atom', value: 'a'},
          to: {
            id: 1,
            edges: [],
            flags: ACCEPT,
          },
        },
      ],
      flags: START,
    });
  });
});

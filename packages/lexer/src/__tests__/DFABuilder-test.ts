import DFABuilder from '../DFABuilder';
import compileRegExp from '../compileRegExp';

describe('DFABuilder()', () => {
  it('builds a DFA from a single atom', () => {
    const ast = compileRegExp(/a/);
    const builder = new DFABuilder(ast);
    const dfa = builder.build();
    expect(dfa).toEqual({
      states: [{kind: 'Start'}, {kind: 'Accept'}],
      transitions: [
        {start: 0, end: 1, conditions: [{kind: 'Atom', value: 'a'}]},
      ],
    });
  });
});

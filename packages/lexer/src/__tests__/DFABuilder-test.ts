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

  it('builds a DFA from a sequence', () => {
    const ast = compileRegExp(/foo/);
    const builder = new DFABuilder(ast);
    const dfa = builder.build();
    expect(dfa).toEqual({
      states: [
        // Note how this suggests that we don't even need to explicitly model
        // states... by definition, state[0] can be "Start" and state[last] can
        // be "Accept"; none of them require metadata to be associated.
        {kind: 'Start'},
        {kind: 'Internal'},
        {kind: 'Internal'},
        {kind: 'Accept'},
      ],
      transitions: [
        {start: 0, end: 1, conditions: [{kind: 'Atom', value: 'f'}]},
        {start: 1, end: 2, conditions: [{kind: 'Atom', value: 'o'}]},
        {start: 2, end: 3, conditions: [{kind: 'Atom', value: 'o'}]},
      ],
    });
  });
});

import DFABuilder from '../DFABuilder';
import compileRegExp from '../compileRegExp';

describe('DFABuilder()', () => {
  it('builds a DFA from a single atom', () => {
    const ast = compileRegExp(/a/);
    const builder = new DFABuilder(ast);
    const table = builder.build();
    expect(table).toEqual([
      [[], [{kind: 'Atom', value: 'a'}]],
      [[], []],
    ]);
  });

  it('builds a DFA from a sequence', () => {
    const ast = compileRegExp(/foo/);
    const builder = new DFABuilder(ast);
    const table = builder.build();
    expect(table).toEqual([
      [[], [{kind: 'Atom', value: 'f'}], [], []],
      [[], [], [{kind: 'Atom', value: 'o'}], []],
      [[], [], [], [{kind: 'Atom', value: 'o'}]],
      [[], [], [], []],
    ]);
  });
});

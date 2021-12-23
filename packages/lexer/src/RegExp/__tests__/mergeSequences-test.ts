import RegExpParser from '../RegExpParser';
import mergeSequences from '../mergeSequences';

describe('mergeSequences()', () => {
  it('simplifies adjacent sequences', () => {
    expect(merge(/(foo)(bar)/)).toEqual({
      kind: 'Sequence',
      children: [
        {kind: 'Atom', value: 'f'},
        {kind: 'Atom', value: 'o'},
        {kind: 'Atom', value: 'o'},
        {kind: 'Atom', value: 'b'},
        {kind: 'Atom', value: 'a'},
        {kind: 'Atom', value: 'r'},
      ],
    });
  });

  it('merges into a preceding sequence', () => {
    expect(merge(/(foo)b/)).toEqual({
      kind: 'Sequence',
      children: [
        {kind: 'Atom', value: 'f'},
        {kind: 'Atom', value: 'o'},
        {kind: 'Atom', value: 'o'},
        {kind: 'Atom', value: 'b'},
      ],
    });
  });

  it('merges into a following sequence', () => {
    expect(merge(/o(bar)/)).toEqual({
      kind: 'Sequence',
      children: [
        {kind: 'Atom', value: 'o'},
        {kind: 'Atom', value: 'b'},
        {kind: 'Atom', value: 'a'},
        {kind: 'Atom', value: 'r'},
      ],
    });
  });

  it('simplifies sequences nested in groups', () => {
    expect(merge(/((foo)(b(ar)))/)).toEqual({
      kind: 'Sequence',
      children: [
        {kind: 'Atom', value: 'f'},
        {kind: 'Atom', value: 'o'},
        {kind: 'Atom', value: 'o'},
        {kind: 'Atom', value: 'b'},
        {kind: 'Atom', value: 'a'},
        {kind: 'Atom', value: 'r'},
      ],
    });
  });
});

function merge(regExp: RegExp) {
  const node = new RegExpParser(regExp).parse();
  return mergeSequences(node);
}

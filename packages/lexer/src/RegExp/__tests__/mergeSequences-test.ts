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
});
// TODO similar tests for alternates containing character classes
// [abc]|[def]|(bar) is same as [abcdef]|bar
// or simpler case [abc]|[def] is same as [abcdef]
// repetition or some other structure is the only thing that rules this out
// eg. [abc]|[def]+

function merge(regExp: RegExp) {
  const node = new RegExpParser(regExp).parse();
  return mergeSequences(node);
}

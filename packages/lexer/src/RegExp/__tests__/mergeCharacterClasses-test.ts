import RegExpParser from '../RegExpParser';
import mergeCharacterClasses from '../mergeCharacterClasses';

// TODO tests for alternates containing character classes
// [abc]|[def]|(bar) is same as [abcdef]|bar
// or simpler case [abc]|[def] is same as [abcdef]
// repetition or some other structure is the only thing that rules this out
// eg. [abc]|[def]+
describe('mergeCharacterClasses()', () => {
  it('merges character classes within an alternate', () => {
    expect(merge(/[aj1]|[5wz]/)).toEqual({
      kind: 'CharacterClass',
      children: [
        {kind: 'Atom', value: '1'},
        {kind: 'Atom', value: '5'},
        {kind: 'Atom', value: 'a'},
        {kind: 'Atom', value: 'j'},
        {kind: 'Atom', value: 'w'},
        {kind: 'Atom', value: 'z'},
      ],
    });
  });
});

function merge(regExp: RegExp) {
  const node = new RegExpParser(regExp).parse();
  return mergeCharacterClasses(node);
}

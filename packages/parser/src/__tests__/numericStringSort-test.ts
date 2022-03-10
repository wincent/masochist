import numericStringSort from '../numericStringSort';

describe('numericStringSort()', () => {
  it('sorts words', () => {
    expect(numericStringSort(['foo', 'bar', 'baz', 'qux'])).toEqual([
      'bar',
      'baz',
      'foo',
      'qux',
    ]);
  });

  it('sorts strings with substrings that start with numbers', () => {
    expect(
      numericStringSort([
        '%token 1/THING/2',
        '%token 10/BOOM/4',
        '%token 2/BOOP/3',
      ]),
    ).toEqual(['%token 1/THING/2', '%token 2/BOOP/3', '%token 10/BOOM/4']);
  });

  it('sorts strings with substrings that contain numbers', () => {
    expect(
      numericStringSort([
        'r10 → C',
        'r10 → ε',
        'r100 → FOO r1',
        'r1 → B',
        'r1 → A',
        'r2 → D',
      ]),
    ).toEqual([
      'r1 → A',
      'r1 → B',
      'r2 → D',
      'r10 → C',
      'r10 → ε',
      'r100 → FOO r1',
    ]);

    expect(
      numericStringSort([
        'r10 → 10/C/12',
        'r10 → 10/ε/11',
        'r1 → 1/B/2',
        'r100 → FOO 100/r1/2',
        'r1 → 1/A/3',
        'r2 → 2/D/5',
      ]),
    ).toEqual([
      'r1 → 1/A/3',
      'r1 → 1/B/2',
      'r2 → 2/D/5',
      'r10 → 10/C/12',
      'r10 → 10/ε/11',
      'r100 → FOO 100/r1/2',
    ]);
  });
});
